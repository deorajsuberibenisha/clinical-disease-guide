/* Diabetes calculators. Each one: (element, helpers). Formulas and thresholds are cited inside the output. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  /* HbA1c ⇄ estimated average glucose (ADAG study: eAG mg/dL = 28.7 × A1c − 46.7) */
  eag(el, U) {
    el.innerHTML = `<h4>HbA1c ⇄ average glucose (ADAG equation)</h4><div class="row">
      <label>HbA1c (%)<input type="number" step="0.1" data-k="a" placeholder="e.g. 8.5"></label>
      <label>or HbA1c (mmol/mol)<input type="number" step="1" data-k="m" placeholder="e.g. 69"></label></div><div class="out" aria-live="polite">Enter HbA1c in % or mmol/mol.</div>`;
    el.addEventListener("input", e => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      let a = U.num(g("a"));
      if (e.target.dataset.k === "m") { const m = U.num(g("m")); a = m > 0 ? m / 10.929 + 2.15 : NaN; g("a").value = a > 0 ? U.round(a) : ""; }
      else { g("m").value = a > 0 ? Math.round((a - 2.15) * 10.929) : ""; }
      if (!(a > 3 && a < 20)) { out.textContent = "Enter HbA1c in % or mmol/mol."; return; }
      const mg = 28.7 * a - 46.7;
      out.innerHTML = `HbA1c <b>${U.round(a)}%</b> (${Math.round((a - 2.15) * 10.929)} mmol/mol) ≈ average glucose <b>${Math.round(mg)} mg/dL</b> (${U.round(mg / 18)} mmol/L). ${a >= 6.5 ? "In the diabetes range if confirmed (≥6.5%)." : a >= 5.7 ? "Prediabetes range (5.7–6.4%)." : "Normal range."} Target for most adults: under 7%.`;
    });
  },

  /* Starting insulin doses */
  insstart(el, U) {
    el.innerHTML = `<h4>Starting insulin — first doses</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 62"></label>
      <label>Situation<select data-k="t"><option value="t2">Type 2: add basal insulin</option><option value="t1">Type 1 adult: basal–bolus</option><option value="pre">Type 2: premixed 30/70 twice daily</option></select></label></div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const w = U.num(U.$("[data-k=w]", el)), t = U.$("[data-k=t]", el).value, out = U.$(".out", el);
      if (!(w > 20 && w < 250)) { out.textContent = "Enter weight in kg."; return; }
      const u40 = u => `${u} units = <b>${U.round(u / 40, 2)} mL</b> of U-40`;
      if (t === "t2") {
        const lo = Math.max(10, Math.round(0.1 * w)), hi = Math.round(0.2 * w);
        out.innerHTML = `Start <b>10 units</b> (range 0.1–0.2 unit/kg = ${Math.round(0.1 * w)}–${hi} units) of NPH at bedtime or glargine once daily; ${u40(10)}. Keep metformin. Increase by <b>2 units every 3 days</b> until fasting glucose is 80–130 mg/dL; reduce by 4 units (or 10–20%) after any hypoglycaemia. If basal exceeds about <b>${Math.round(0.5 * w)} units</b> (0.5 unit/kg) with fasting glucose at target but HbA1c high, add mealtime insulin instead.`;
      } else if (t === "t1") {
        const tdd = 0.5 * w;
        out.innerHTML = `Total daily dose ≈ <b>${Math.round(tdd)} units</b> (0.5 unit/kg; usual range 0.4–1.0). Basal ≈ <b>${Math.round(tdd * 0.5)} units</b> once daily (glargine) or split as NPH twice daily; mealtime ≈ <b>${Math.round(tdd * 0.5 / 3)} units</b> soluble insulin 30 min before each main meal. Adjust every 2–3 days from glucose readings. Lower start (0.3–0.4 unit/kg) if lean, elderly or with CKD.`;
      } else {
        const tdd = Math.round(0.3 * w);
        out.innerHTML = `Typical start ≈ <b>${tdd} units/day</b> (0.2–0.3 unit/kg/day): <b>${Math.round(tdd * 2 / 3)} units before breakfast</b> and <b>${tdd - Math.round(tdd * 2 / 3)} units before dinner</b> of 30/70 (${u40(Math.round(tdd * 2 / 3))} in the morning). Adjust the morning dose by pre-dinner glucose and the evening dose by next fasting glucose, 2–4 units every 3–4 days. Converting from basal instead: split the current basal dose two-thirds/one-third.`;
      }
      out.innerHTML += `<p class="warn" style="margin:8px 0 0">NEML vials are U-40: use U-40 syringes. Pens are U-100.</p>`;
    });
  },

  /* Child type 1 diabetes: daily insulin and hypoglycaemia doses (ISPAD 2022) */
  tddchild(el, U) {
    el.innerHTML = `<h4>Child type 1 diabetes — insulin and rescue doses (ISPAD 2022)</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 28"></label>
      <label>Stage<select data-k="s"><option value="new">New diagnosis (no DKA)</option><option value="rem">Partial remission ("honeymoon")</option><option value="pre" selected>Pre-pubertal</option><option value="pub">Pubertal</option></select></label></div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const w = U.num(U.$("[data-k=w]", el)), s = U.$("[data-k=s]", el).value, out = U.$(".out", el);
      if (!(w > 2 && w < 150)) { out.textContent = "Enter weight in kg."; return; }
      const R = { new: [0.5, 1.0], rem: [0.2, 0.5], pre: [0.7, 1.0], pub: [1.2, 2.0] }[s];
      const lo = R[0] * w, hi = R[1] * w, mid = (lo + hi) / 2;
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        <li>Total daily insulin ≈ <b>${Math.round(lo)}–${Math.round(hi)} units/day</b> (${R[0]}–${R[1]} unit/kg/day).</li>
        <li>Basal–bolus at about ${Math.round(mid)} units/day: basal (NPH twice daily or glargine) ≈ <b>${Math.round(mid * 0.4)}–${Math.round(mid * 0.5)} units</b>; the rest as soluble/rapid insulin split over the main meals (≈ ${Math.round(mid * 0.5 / 3)} units each).</li>
        <li>Hypoglycaemia (conscious): <b>${U.round(0.3 * w, 0)} g</b> fast glucose (0.3 g/kg), recheck in 15 min.</li>
        <li>Severe hypoglycaemia: glucagon <b>${w < 25 ? "0.5 mg" : "1 mg"}</b> IM/SC, or IV 10% glucose <b>${Math.round(2 * w)} mL</b> (2 mL/kg).</li></ul>
        <p class="warn" style="margin:8px 0 0">These are starting ranges. Adjust every 2–3 days from glucose records with the diabetes team. NEML vials are U-40.</p>`;
    });
  },

  /* Paediatric DKA fluids — ISPAD 2022 principles (deficit over 48 h, Holliday–Segar maintenance, 75 kg cap) */
  dkafluid(el, U) {
    el.innerHTML = `<h4>Child DKA fluid plan (ISPAD 2022 / BSPED principles)</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 22"></label>
      <label>Venous pH<input type="number" step="0.01" data-k="ph" placeholder="e.g. 7.08"></label>
      <label>Shocked?<select data-k="s"><option value="n">No</option><option value="y">Yes (poor perfusion, hypotension)</option></select></label></div><div class="out" aria-live="polite">Enter weight and pH.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w0 = U.num(g("w")), ph = U.num(g("ph")), shock = g("s").value === "y";
      if (!(w0 > 2 && w0 < 150 && ph > 6.5 && ph < 7.5)) { out.textContent = "Enter weight (kg) and venous pH."; return; }
      if (ph >= 7.3) { out.innerHTML = "pH 7.3 or above: this is not DKA by pH. Check bicarbonate (under 18 mmol/L) and ketones before using this plan."; return; }
      const w = Math.min(w0, 75), sev = ph < 7.1 ? "severe" : ph < 7.2 ? "moderate" : "mild", def = ph < 7.1 ? 10 : 5;
      const hs = w <= 10 ? 100 * w : w <= 20 ? 1000 + 50 * (w - 10) : 1500 + 20 * (w - 20);   // Holliday–Segar mL/day
      const bolus = shock ? 0 : 10 * w;   // BSPED 2021: a non-shock 10 mL/kg bolus is subtracted from the deficit; shock boluses are not
      const deficit = def * 10 * w, rate = (Math.max(deficit - bolus, 0) / 48) + (hs / 24);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        <li><b>${sev[0].toUpperCase() + sev.slice(1)} DKA</b> (pH ${ph}); estimated deficit <b>${def}%</b> = <b>${Math.round(deficit)} mL</b>${w0 > 75 ? " (weight capped at 75 kg)" : ""}.</li>
        <li><b>Bolus:</b> ${shock ? `<b>${Math.round(20 * w)} mL</b> 0.9% saline (20 mL/kg) rapidly for shock, reassess; repeat 10 mL/kg if still shocked and call PICU` : `<b>${Math.round(10 * w)} mL</b> 0.9% saline (10 mL/kg) over 30–60 min`}.</li>
        <li><b>Then:</b> remaining deficit (${shock ? "full deficit" : "deficit minus the 10 mL/kg bolus"}) over 48 h + maintenance (Holliday–Segar ${Math.round(hs)} mL/day) = <b>${Math.round(rate)} mL/hour</b> of 0.9% saline with <b>KCl 40 mmol/L</b> (once K⁺ is known and under 5.5 and the child passes urine).</li>
        <li><b>Insulin:</b> start <b>1–2 hours after</b> fluids begin: soluble insulin <b>${U.round(0.05 * w, 2)}–${U.round(0.1 * w, 2)} units/hour</b> (0.05–0.1 unit/kg/h). <b>No bolus.</b></li>
        <li>Add glucose (5% then 10%) to the fluid when glucose falls below about 250 mg/dL (14 mmol/L); keep insulin running.</li></ul>
        <p class="warn" style="margin:8px 0 0">Cerebral oedema warning signs: headache, slowing heart rate, rising BP, irritability or drowsiness. Treat at once: mannitol 0.5–1 g/kg or 3% saline 2.5–5 mL/kg over 10–15 min.</p>`;
    });
  },

  /* Corrected sodium, effective osmolality, anion gap */
  osmo(el, U) {
    el.innerHTML = `<h4>Corrected sodium · osmolality · anion gap</h4><div class="row">
      <label>Na⁺ (mmol/L)<input type="number" step="any" data-k="na"></label>
      <label>K⁺ (mmol/L)<input type="number" step="any" data-k="k"></label>
      <label>Cl⁻ (mmol/L)<input type="number" step="any" data-k="cl"></label>
      <label>HCO₃⁻ (mmol/L)<input type="number" step="any" data-k="hc"></label>
      <label>Glucose (mg/dL)<input type="number" step="any" data-k="gl"></label>
      <label>Urea (mg/dL)<input type="number" step="any" data-k="ur" placeholder="optional"></label></div><div class="out" aria-live="polite">Enter sodium and glucose at least.</div>`;
    el.addEventListener("input", () => {
      const v = k => U.num(U.$(`[data-k=${k}]`, el)), out = U.$(".out", el);
      const na = v("na"), gl = v("gl"), cl = v("cl"), hc = v("hc"), ur = v("ur");
      if (!(na > 90 && gl > 0)) { out.textContent = "Enter sodium and glucose at least."; return; }
      const corr = na + 1.6 * (gl - 100) / 100, corr24 = na + 2.4 * (gl - 100) / 100, eff = 2 * na + gl / 18;
      const tot = ur > 0 ? eff + ur / 6 : null;   // urea mg/dL ÷ 6 ≈ mmol/L (BUN mg/dL ÷ 2.8)
      out.innerHTML = `Corrected Na⁺ <b>${U.round(corr)}</b> mmol/L (Katz 1.6; ${U.round(corr24)} with Hillier 2.4). Effective osmolality <b>${Math.round(eff)}</b> mOsm/kg${tot ? ` (total ${Math.round(tot)})` : ""}${eff > 320 ? ` — <span class="warn">over 320: consistent with HHS if glucose is very high and ketones low</span>` : ""}.${cl > 0 && hc > 0 ? ` Anion gap <b>${Math.round(na - cl - hc)}</b> mmol/L (normal about 8–12)${na - cl - hc > 12 ? ": raised, consistent with ketoacidosis or lactic acidosis" : ""}.` : ""}`;
    });
  },

  /* Glucose tolerance test in pregnancy — compare criteria */
  gdm(el, U) {
    el.innerHTML = `<h4>75 g OGTT in pregnancy — what each guideline says</h4><div class="row">
      <label>Fasting (mg/dL)<input type="number" step="any" data-k="f"></label>
      <label>1-hour (mg/dL)<input type="number" step="any" data-k="h1" placeholder="optional"></label>
      <label>2-hour (mg/dL)<input type="number" step="any" data-k="h2"></label></div><div class="out" aria-live="polite">Enter the results.</div>`;
    el.addEventListener("input", () => {
      const v = k => U.num(U.$(`[data-k=${k}]`, el)), out = U.$(".out", el);
      const f = v("f"), h1 = v("h1"), h2 = v("h2");
      if (!(f > 0 || h2 > 0)) { out.textContent = "Enter the results."; return; }
      const overt = f >= 126 || h2 >= 200;
      const who = f >= 92 || h1 >= 180 || h2 >= 153;
      const bt = (f >= 100) || (h2 >= 140);
      const nice = f >= 101 || h2 >= 140;   // 5.6 and 7.8 mmol/L
      const dipsi = h2 >= 140;
      const yn = x => x ? `<b class="warn">GDM</b>` : `<span class="pass">normal</span>`;
      out.innerHTML = overt ? `<b class="warn">Diabetes in pregnancy (overt):</b> fasting ≥126 or 2-hour ≥200 mg/dL. Manage as pre-existing diabetes.` :
        `<ul style="margin:0;padding-left:18px">
        <li><b>Bhutan STG 2024</b> (fasting ≥100 and/or 2-h ≥140): ${yn(bt)}</li>
        <li><b>WHO 2013 / IADPSG</b> (fasting ≥92, 1-h ≥180 or 2-h ≥153; any one): ${yn(who)}</li>
        <li><b>NICE NG3</b> (fasting ≥5.6 mmol/L [101], 2-h ≥7.8 [140]): ${yn(nice)}</li>
        <li><b>India DIPSI</b> (75 g fasting or non-fasting, 2-h ≥140): ${h2 > 0 ? yn(dipsi) : "needs 2-h value"}</li></ul>`;
    });
  }
});
