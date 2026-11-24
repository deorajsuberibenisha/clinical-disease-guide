/* Clinical Disease Guide — deterministic dose engine for the drug monograph database (Build Prompt v2, Section 6).
   Pure functions, no page code, so the same engine runs in the app and in the Node test suite
   (_work/tools/fdb-calc-test.js). Laws:
   - final single dose = min(calculated, max_single, adult_ceiling_single, max_mg_per_kg_dose × weight)
   - daily total ≤ min(max_daily, adult_ceiling_daily); a dose range's upper end is held to the same limits
   - BSA = √(height_cm × weight_kg / 3600) (Mosteller)
   - neonatal blocks flagged NEONATE_REQUIRES_PMA are never computed from age + weight alone
   - renal bands are read like the label tables: both ends inclusive, first matching band wins (list mild → severe)
   - volume = dose ÷ strength, unit stated; numbers shown without trailing zeros, comma for thousands (ISMP) */
(function (root) {
  "use strict";
  const fnum = x => {
    if (x == null || isNaN(x)) return "—";
    // 100 and over: whole numbers, except exact halves are kept (a label rounding step such as 637.5 mg must not show as 638)
    const a = Math.abs(x), half = a >= 100 && Math.abs(x * 2 - Math.round(x * 2)) < 1e-9 && Math.abs(x - Math.round(x)) > 1e-9;
    const v = half ? Math.round(x * 2) / 2 : a >= 100 ? Math.round(x) : a >= 10 ? Math.round(x * 10) / 10 : a >= 1 ? Math.round(x * 100) / 100 : Math.round(x * 1000) / 1000;
    return Math.abs(v) >= 1000 ? v.toLocaleString("en-US") : String(v);
  };
  const ageTxt = m => m >= 12 ? fnum(m / 12) + (m === 12 ? " year" : " years") : m + (m === 1 ? " month" : " months");
  function validate(p) {
    if (p.wt != null && (isNaN(p.wt) || p.wt <= 0 || p.wt > 350)) return "Check the weight (enter kilograms, 0.3–350 kg).";
    if (p.wt != null && p.wt < 0.3) return "Check the weight (enter kilograms, 0.3–350 kg).";
    if (p.ageM != null && (isNaN(p.ageM) || p.ageM < 0 || p.ageM > 1500)) return "Check the age.";
    if (p.ht != null && (isNaN(p.ht) || p.ht < 30 || p.ht > 250)) return "Check the height (enter centimetres, 30–250 cm).";
    if (p.crcl != null && (isNaN(p.crcl) || p.crcl < 0 || p.crcl > 250)) return "Check the CrCl (mL/min, 0–250).";
    return "";
  }
  function compute(b, p) {
    const L = [], warn = [], P = b.population || {};
    const bad = validate(p); if (bad) return { err: bad };
    const am = p.ageM, w = p.wt;
    if (P.min_age_months != null && (am == null || am < P.min_age_months)) return { err: am == null ? "Enter the age." : `For age ${ageTxt(P.min_age_months)} and over only.` };
    if (P.max_age_months != null && am != null && am >= P.max_age_months) return { err: `For age under ${ageTxt(P.max_age_months)} only.` };
    // a limit like 40.0001 encodes a label edge written as "over 40 kg" / "40 kg or less" — word it that way
    const edge = v => { const r = Math.round(v); return Math.abs(v - r) > 0 && Math.abs(v - r) < 0.01 ? r : null; };
    if (P.min_weight_kg != null && !(w >= P.min_weight_kg)) return { err: w == null ? "Enter the weight." : edge(P.min_weight_kg) != null ? `For weight over ${edge(P.min_weight_kg)} kg only.` : `For weight ${P.min_weight_kg} kg and over only.` };
    if (P.max_weight_kg != null && w >= P.max_weight_kg) return { err: edge(P.max_weight_kg) != null ? `For weight ${edge(P.max_weight_kg)} kg or less only.` : `For weight under ${P.max_weight_kg} kg only.` };
    if ((b.flags || []).includes("NEONATE_REQUIRES_PMA")) return { err: `Neonatal dose: confirm gestational and postmenstrual age first — not calculated from age and weight alone. ${b.pma_note || `Label dose: ${b.dose.value} mg/kg every ${b.interval_h} h.`}` };
    if (b.basis === "band") {
      if (w == null) return { err: "Enter the weight." };
      const band = (b.bands || []).find(x => w >= x.min_weight_kg && (x.max_weight_kg == null || w < x.max_weight_kg));
      if (!band) return { err: "No weight band for this weight." };
      return { band: band.text, daily: band.daily, lines: [`Weight band ${band.min_weight_kg}${band.max_weight_kg != null ? "–<" + band.max_weight_kg : " and over"} kg.`], warn };
    }
    let wd = w;
    if (b.weight_basis === "ideal" && w && p.ht && p.sex && am >= 216) {
      const ibw = (p.sex === "f" ? 45.5 : 50) + 0.91 * (p.ht - 152.4);
      if (ibw > 0 && ibw < w) { wd = ibw; L.push(`Dosing weight = ideal body weight ${fnum(ibw)} kg (Devine; label: dose obese patients on ideal body weight).`); }
    } else if (b.weight_basis === "ideal" && am >= 216 && !(p.ht && p.sex)) warn.push("Obese adult? Enter height and sex to dose on ideal body weight (label rule).");
    const U = (b.dose && b.dose.unit) || "mg";
    let single = null, single2 = null, interval = b.interval_h;
    const per = b.dose.per, n = b.divided_doses || (interval ? Math.round(24 / interval) : 1);
    if (b.basis === "mg_per_kg") {
      if (!wd) return { err: "Enter the weight." };
      const v = b.dose.value * wd, v2 = b.dose.value_max ? b.dose.value_max * wd : null;
      if (per === "day") { single = v / n; single2 = v2 ? v2 / n : null; L.push(`${b.dose.value}${b.dose.value_max ? "–" + b.dose.value_max : ""} ${U}/kg/day × ${fnum(wd)} kg = ${fnum(v)}${v2 ? "–" + fnum(v2) : ""} ${U}/day ÷ ${n} doses.`); }
      else { single = v; single2 = v2; L.push(`${b.dose.value}${b.dose.value_max ? "–" + b.dose.value_max : ""} ${U}/kg × ${fnum(wd)} kg = ${fnum(v)}${v2 ? "–" + fnum(v2) : ""} ${U} per dose.`); }
    } else if (b.basis === "mg_per_m2") {
      if (!(w && p.ht)) return { err: "Enter the weight and height (body surface area)." };
      const bsa = Math.sqrt(p.ht * w / 3600), vx = b.dose.value_max || null, rg = vx ? "–" + vx : "";
      single = b.dose.value * bsa; single2 = vx ? vx * bsa : null;
      const tot = `${fnum(single)}${single2 ? "–" + fnum(single2) : ""} ${U}`;
      if (per === "day") { L.push(`BSA (Mosteller) √(${p.ht} × ${w} / 3600) = ${fnum(bsa)} m² × ${b.dose.value}${rg} ${U}/m²/day = ${tot}/day ÷ ${n} doses.`); single = single / n; if (single2) single2 = single2 / n; }
      else L.push(`BSA (Mosteller) √(${p.ht} × ${w} / 3600) = ${fnum(bsa)} m² × ${b.dose.value}${rg} ${U}/m² = ${tot}.`);
    } else {
      const vx = b.dose.value_max || null;
      L.push(`Fixed dose ${b.dose.value}${vx ? "–" + vx : ""} ${U}${per === "day" ? " per day" : ""}.`);
      if (per === "day") { single = b.dose.value / n; single2 = vx ? vx / n : null; } else { single = b.dose.value; single2 = vx; }
    }
    const C = b.caps || {};
    const capS = [C.max_single, C.adult_ceiling_single].filter(x => x != null);
    if (C.max_mg_per_kg_dose && w) capS.push(C.max_mg_per_kg_dose * w);
    const cap1 = capS.length ? Math.min(...capS) : null;
    if (cap1 != null && single > cap1) { L.push(`Limited to the maximum single dose, ${fnum(cap1)} ${U}.`); single = cap1; }
    if (single2 != null && cap1 != null && single2 > cap1) single2 = cap1;
    let renalNote = "", renalCapD = null;
    if (p.crcl != null && (b.renal || []).length) {
      // only bands with a numeric limit can match a CrCl value; text-only rules live in renal_note
      const r = b.renal.find(x => (x.crcl_min != null || x.crcl_max != null) && (x.crcl_min == null || p.crcl >= x.crcl_min) && (x.crcl_max == null || p.crcl <= x.crcl_max));
      if (r) {
        if (r.max_daily != null) renalCapD = r.max_daily;
        if (r.action === "cap_daily") renalNote = `Kidney (CrCl ${fnum(p.crcl)}): no more than ${fnum(r.max_daily)} ${U} a day.`;
        if (r.action === "avoid") return { err: "Kidney function: avoid — " + String(r.note || r.text || "see monograph").replace(/\.\s*$/, "") + "." };
        if (r.action === "extend_interval") { interval = r.factor; renalNote = `Kidney (CrCl ${fnum(p.crcl)}): same dose, every ${r.factor} h.`; }
        if (r.action === "reduce_dose" && r.set_value != null) { const f = r.set_value / b.dose.value, sfx = b.basis === "mg_per_m2" ? "/m²" : b.basis === "mg_per_kg" ? "/kg" : ""; single *= f; if (single2) single2 = r.set_value_max != null && b.dose.value_max ? single2 * r.set_value_max / b.dose.value_max : null; if (r.interval_h) { interval = r.interval_h; if (per === "day") { const k = n / (24 / r.interval_h); single *= k; if (single2) single2 *= k; } } renalNote = `Kidney (CrCl ${fnum(p.crcl)}): label dose ${fnum(r.set_value)}${r.set_value_max != null ? "–" + fnum(r.set_value_max) : ""} ${U}${sfx}${per === "day" ? "/day" : ""}${r.interval_h ? `, every ${r.interval_h} h` : ""}.`; }
        else if (r.action === "lower_of") { const was = single; single = Math.min(single, r.abs_dose); if (single2) single2 = Math.min(single2, r.abs_dose); if (single2 != null && single2 <= single + 1e-9) single2 = null; if (r.interval_h) interval = r.interval_h; renalNote = `Kidney (CrCl ${fnum(p.crcl)}): label dose ${fnum(r.abs_dose)} ${U} every ${interval} h${was < r.abs_dose - 1e-9 ? " — the usual dose is lower, so the lower dose is kept" : ""}.`; }
        else if (r.action === "reduce_dose") { single *= r.factor; if (single2) single2 *= r.factor; if (r.interval_h) interval = r.interval_h; renalNote = `Kidney (CrCl ${fnum(p.crcl)}): ${r.factor * 100}% of the dose, every ${interval} h.`; }
      }
    } else if ((b.renal || []).length) warn.push("Kidney dosing applies — enter CrCl to adjust.");
    if (b.renal_note) { const rn = b.renal_note.replace(/\s*\[[A-Z-]+\]/g, "").replace(/\.\s*$/, ""); warn.push((/^kidney/i.test(rn) ? "" : "Kidney: ") + rn + "."); }
    if (renalNote) L.push(renalNote);
    // label dose-rounding rule (e.g. belatacept: the dose must be a multiple of 12.5 mg) — nearest step
    if (b.round_to && single != null) {
      const up = b.round_mode === "up", rnd = x => (up ? Math.ceil(x / b.round_to - 1e-9) : Math.round(x / b.round_to)) * b.round_to;
      const r1 = Math.max(b.round_to, rnd(single));   // never rounds a dose down to zero
      if (Math.abs(r1 - single) > 1e-9) L.push(`Rounded ${up ? "up " : ""}to the nearest ${fnum(b.round_to)} ${U} (label rule): ${fnum(single)} → ${fnum(r1)} ${U}.`);
      single = r1; if (single2 != null) single2 = rnd(single2);
    }
    const nDay = renalNote && interval ? 24 / interval : (b.divided_doses || (interval ? 24 / interval : 1));
    let daily = single * nDay;
    const capD = [C.max_daily, C.adult_ceiling_daily, renalCapD].filter(x => x != null);
    if (capD.length) {
      const m = Math.min(...capD);
      if (daily > m) { L.push(`Limited by the maximum daily dose, ${fnum(m)} ${U}.`); single = m / nDay; daily = m; }
      if (single2 && single2 * nDay > m) { L.push(`Upper end limited by the ${fnum(m)} ${U} daily maximum.`); single2 = m / nDay; }
    }
    return { single, single2, daily, daily2: single2 ? single2 * nDay : null, perDay: nDay, interval, unit: U, lines: L, warn };
  }
  function volume(b, f, amt, hi) {
    if (!f || amt == null) return "";
    const U = (b.dose && b.dose.unit) || "mg", [su, per] = String(f.unit).split("/");
    if (su !== U) return "";            // never convert silently between mg, mcg, units
    const s = f.strength;
    if (per === "mL") return `${fnum(amt / s)} mL of ${fnum(s)} ${U}/mL`;
    if (per === "5mL") return `${fnum(amt / s * 5)} mL of ${fnum(s)} ${U}/5 mL`;
    if (per === "vial") return `${fnum(amt / s)} × ${fnum(s)} ${U} vial`;
    if (per === "dose") return `${fnum(amt / s)} × ${fnum(s)} ${U} pen dose`;
    if (per === "tab" || per === "cap") {
      const word = per === "tab" ? "tablet" : "capsule", x = amt / s, C = b.caps || {};
      // nearest ¼ tablet, but never above the top of the dose range or the maximum single dose
      const lim = Math.min(...[hi, C.max_single, C.adult_ceiling_single].filter(v => v != null && v >= amt - 1e-9), Infinity);
      let q = Math.round(x * 4) / 4; if (q * s > lim + 1e-9) q = Math.floor(x * 4 + 1e-9) / 4;
      // low end of a dose range: never round below the range minimum when a ¼-step up still fits inside the range
      if (hi != null && hi > amt + 1e-9 && q * s < amt - 1e-9) { const up = Math.ceil(x * 4 - 1e-9) / 4; if (up * s <= lim + 1e-9) q = up; }
      if (per === "cap") return `${fnum(x)} × ${fnum(s)} ${U} capsule`;
      // tablets that must not be split (extended-release, enteric-coated): whole tablets only, kept inside the dose range
      if (f.whole) {
        if (Math.abs(x - Math.round(x)) < 0.005) return `${fnum(x)} × ${fnum(s)} ${U} ${word}`;
        const ranged = hi != null && hi > amt + 1e-9, top = hi != null && Math.abs(hi - amt) < 1e-9;
        let w = null;
        if (ranged) { const up = Math.ceil(x - 1e-9); if (up * s <= lim + 1e-9) w = up; }
        else if (top) { const dn = Math.floor(x + 1e-9); if (dn >= 1) w = dn; }
        return w ? `${fnum(x)} × ${fnum(s)} ${U} ${word} (do not split — whole tablets: ${w} = ${fnum(w * s)} ${U})`
                 : `${fnum(x)} × ${fnum(s)} ${U} ${word} — cannot be split; use another strength`;
      }
      if (q === 0) return `${fnum(x)} × ${fnum(s)} ${U} ${word} (less than ¼ tablet — use a liquid form)`;
      return Math.abs(q - x) < 0.005 ? `${fnum(x)} × ${fnum(s)} ${U} ${word}` : `${fnum(x)} × ${fnum(s)} ${U} ${word} (nearest ¼: ${fnum(q)} tablet = ${fnum(q * s)} ${U})`;
    }
    return "";
  }
  // Infusion: diluent by weight band (mL/kg or fixed mL), drug volume from the first mg/mL formulation, total and pump rate.
  function infusion(b, p, mg) {
    const I = b.infusion || {}; if (!I.duration_h || mg == null) return null;
    const U = (b.dose && b.dose.unit) || "mg", f = (b.formulations || []).find(x => x.unit === U + "/mL");
    const drugmL = f ? mg / f.strength : null;
    const db = (I.diluent_bands || []).find(x => p.wt >= x.min_weight_kg && (x.max_weight_kg == null || p.wt < x.max_weight_kg));
    const dil = db ? (db.mL_per_kg != null ? db.mL_per_kg * p.wt : db.mL) : null;
    const minVol = I.conc_max && I.unit === "mg/mL" ? mg / I.conc_max : null;
    const total = dil != null ? dil + (drugmL || 0) : minVol;
    return { duration: I.duration_h, diluent: dil, drugmL, minVol, total, rate: total ? total / I.duration_h : null };
  }
  /* Kidney function estimates from serum creatinine (for the patient bar).
     Adults (18 y and over): Cockcroft–Gault CrCl (mL/min) = (140 − age) × weight / (72 × Cr mg/dL), × 0.85 if female (actual body weight).
     Children (1–17 y): bedside Schwartz eGFR (mL/min/1.73 m²) = 0.413 × height cm / Cr mg/dL — needs height.
     Creatinine in µmol/L is converted with 1 mg/dL = 88.4 µmol/L. Under 1 year: not estimated (formulas not valid). */
  const crMgdl = (cr, unit) => unit === "umol" ? cr / 88.4 : cr;
  function kidney(p) {
    if (p.cr == null || !(p.cr > 0)) return null;
    const m = p.ageM, mg = crMgdl(p.cr, p.cru);
    if (mg < 0.1 || mg > 20) return { err: "Check the creatinine value and unit." };
    if (m == null) return { err: "Enter the age to estimate kidney function." };
    if (m >= 216) {
      if (!p.wt) return { err: "Enter the weight to estimate CrCl." };
      if (!p.sex) return { err: "Choose the sex to estimate CrCl." };
      const v = (140 - m / 12) * p.wt / (72 * mg) * (p.sex === "f" ? 0.85 : 1);
      return { value: v, unit: "mL/min", method: "Cockcroft–Gault" };
    }
    if (m >= 12) {
      if (!p.ht) return { err: "Enter the height to estimate kidney function in a child." };
      return { value: 0.413 * p.ht / mg, unit: "mL/min/1.73 m²", method: "bedside Schwartz" };
    }
    return { err: "Not estimated under 1 year — enter a measured value if needed." };
  }
  const bsa = p => p.wt && p.ht ? Math.sqrt(p.ht * p.wt / 3600) : null;
  const ibw = p => p.ht && p.sex && p.ageM >= 216 ? (p.sex === "f" ? 45.5 : 50) + 0.91 * (p.ht - 152.4) : null;
  const api = { fnum, compute, volume, validate, infusion, kidney, bsa, ibw };
  root.FDBCalc = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
