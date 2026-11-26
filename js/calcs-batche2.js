/* Batch E-2 calculators (26 Nov 2026).
   tetanuswound: CDC Clinical Guidance for Wound Management to Prevent Tetanus (Sept 2026) and MSF Clinical Guidelines 2022 prophylaxis table.
   tetanusrx: MSF Clinical Guidelines "Tetanus" (Aug 2022) — TIG 500 IU, metronidazole by age/weight, diazepam titration with respiratory-rate floors. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10, r2 = v => Math.round(v * 100) / 100;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  tetanuswound(el, U) {
    el.innerHTML = `<h4>Tetanus after a wound: vaccine and TIG?</h4><div class="row">${sel("w", "Wound", [["c", "Clean and minor"], ["d", "Dirty or major (puncture, soil, faeces, saliva, bite, burn, crush, compound fracture, dead tissue)"]])}${sel("v", "Tetanus vaccine history", [["u", "Unknown, none, or fewer than 3 doses"], ["l5", "3+ doses, last under 5 years ago"], ["510", "3+ doses, last 5 to under 10 years ago"], ["g10", "3+ doses, last 10 or more years ago"]])}${sel("imm", "HIV or severe immunodeficiency?", [["n", "No"], ["y", "Yes"]])}${sel("old", "Wound more than 24 hours old?", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, w = g("w"), v = g("v"), imm = g("imm") === "y", old = g("old") === "y", out = U.$(".out", el);
      let vac, tig;
      if (v === "u") vac = "<b>Start or complete the tetanus vaccine course</b> (Td 0.5 mL IM for 7 years and over; DTP-containing vaccine for younger children) — then finish the series.";
      else if (v === "l5") vac = "<b>No vaccine needed</b> (last dose under 5 years ago and primary series complete).";
      else if (v === "510") vac = w === "c" ? "<b>No vaccine needed</b> for a clean minor wound (last dose under 10 years)." : "<b>Give one booster</b> (Td 0.5 mL IM): dirty or major wound and 5 or more years since the last dose.";
      else vac = "<b>Give one booster</b> (Td 0.5 mL IM): 10 or more years since the last dose.";
      const needTig = w === "d" && (v === "u" || imm);
      tig = w === "c" ? "<b>TIG is not needed</b> — never indicated for clean minor wounds (CDC)." : needTig ? `<b>Give tetanus immunoglobulin ${old ? "500" : "250"} IU IM</b>${old ? " (wound more than 24 h old, MSF)" : ""}, in a different limb from the vaccine, separate syringe.` : "<b>TIG is not needed</b> (complete primary series and no severe immunodeficiency).";
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li>${vac}</li><li>${tig}</li><li><b>Always:</b> clean the wound, remove dirt and foreign material, debride dead tissue. Antibiotics do not prevent tetanus (CDC); treat infection if present.</li></ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  tetanusrx(el, U) {
    el.innerHTML = `<h4>Tetanus treatment doses (MSF 2022)</h4><div class="row">${sel("a", "Age group", [["n0", "Neonate 0–7 days"], ["n8s", "Neonate 8 days–1 month, under 2 kg"], ["n8", "Neonate 8 days–1 month, 2 kg or more"], ["c", "Child 1 month to 12 years"], ["t", "Child over 12 years"], ["ad", "Adult"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 3 or 60"></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const a = U.$("[data-k=a]", el).value, w = U.num(U.$("[data-k=wt]", el)), out = U.$(".out", el);
      if (!(w > 0) || w > 200) { out.textContent = "Enter the weight."; return; }
      const rr = { n0: 30, n8s: 30, n8: 30, c: w < 10 ? 30 : null, t: 14, ad: 12 }[a];
      let metro;
      if (a === "n0" || a === "n8s") metro = `<b>Metronidazole IV</b> (over 60 min) for 7 days: <b>15 mg/kg = ${r1(15 * w)} mg</b> on day 1, then after 24 h <b>7.5 mg/kg = ${r1(7.5 * w)} mg every 12 h</b> (5 mg/mL: ${r1(1.5 * w)} mL, then ${r1(1.5 * w / 2)} mL).`;
      else if (a === "n8") metro = `<b>Metronidazole IV</b> (over 60 min) for 7 days: <b>15 mg/kg = ${r1(15 * w)} mg every 12 h</b> (${r1(3 * w)} mL of 5 mg/mL).`;
      else if (a === "c" || a === "t") { const d = Math.min(10 * w, 500); metro = `<b>Metronidazole IV</b> (over 30 min) for 7 days: <b>10 mg/kg = ${Math.round(d)} mg every 8 h</b> (max 1500 mg a day) = ${r1(d / 5)} mL of 5 mg/mL.`; }
      else metro = "<b>Metronidazole 500 mg IV every 8 h</b> (100 mL of 5 mg/mL over 30 min) for 7 days.";
      const lo = 0.1 * w, hi = 0.3 * w;
      const floor = a === "ad" ? 12 : a === "t" ? 14 : "by age (30 under 1 year, 25 at 1–4 years, 20 at 5–12 years)";
      const L = [
        "<b>Tetanus immunoglobulin 500 IU IM</b>, single dose, split into 2 sites (all ages). Bhutan vial = 500 IU.",
        metro,
        `<b>Diazepam</b> ${a.startsWith("n") ? "emulsion " : ""}slow IV over 3–5 min: <b>0.1–0.3 mg/kg = ${r2(lo)}–${r2(hi)} mg</b> every 1–4 h by spasm control (${r2(lo / 5)}–${r2(hi / 5)} mL of 5 mg/mL).`,
        `If spasms continue despite hourly doses: <b>infusion 0.1 mg/kg/h = ${r2(lo)} mg/h</b>, increase by 0.1 mg/kg/h to 0.5 mg/kg/h = ${r2(0.5 * w)} mg/h (exceptionally 0.8 mg/kg/h = ${r2(0.8 * w)} mg/h). A 0.2 mg/mL solution (10 mg in 50 mL) runs at ${r1(lo / 0.2)} mL/h for the starting dose.`,
        `<b>Give diazepam only while respiratory rate stays at or above ${floor}</b>; bag-mask and suction at the bedside; never stop abruptly — wean over days via NG tube.`,
        "Dark quiet room, minimal handling, NG feeds (neonates: expressed breast milk every 3 h), wound or cord care, vaccinate after recovery (tetanus does not give immunity)."
      ];
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  /* epistaxisplan: Bhutan STG 2024 §14.5; AAO-HNS Clinical Practice Guideline: Nosebleed (Tunkel 2020) key action statements 1–13;
     NoPAC trial (Reuben 2021: topical TXA no better than placebo); Paranjothy 2009 (infant epistaxis: exclude bleeding disorder and abuse). */
  epistaxisplan(el, U) {
    el.innerHTML = `<h4>Nosebleed: next steps</h4><div class="row">${sel("p", "Patient", [["a", "Adult"], ["c", "Child 2 years or older"], ["i", "Infant or child under 2 years"]])}${sel("s", "Bleeding now", [["h", "Heavy, or shock signs"], ["a", "Active, not heavy"], ["n", "Stopped"]])}${sel("r", "Pattern", [["f", "First or occasional"], ["ru", "Recurrent, one side only"], ["rb", "Recurrent, both sides"]])}</div><div class="checks" style="margin-top:8px"><label class="chk"><input type="checkbox" data-k="ac">On anticoagulant or antiplatelet</label><label class="chk"><input type="checkbox" data-k="bd">Bleeding disorder, easy bruising or bleeding elsewhere</label><label class="chk"><input type="checkbox" data-k="fh">Family history of nosebleeds, or red spots on lips, tongue or fingers</label><label class="chk"><input type="checkbox" data-k="ob">Nasal blockage, facial pain or swelling, or adolescent boy with one-sided blockage</label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), p = g("p").value, s = g("s").value, rp = g("r").value, c = k => g(k).checked, L = [];
      if (s === "h") L.push("<b>Prompt management:</b> ABC, two IV lines, group and cross-match, Hb; sit forward, compress, pack; urgent ENT referral (AAO-HNS statement 1).");
      if (s !== "n") L.push(`<b>First aid:</b> sit up and lean forward, spit out blood, <b>firm pressure on the soft lower third of the nose</b> for ${p === "a" ? "10 minutes (STG) — at least 5 minutes (AAO-HNS)" : "10 minutes by the clock (STG; AAO-HNS at least 5 minutes)"}; do not tilt the head back.`);
      if (s !== "n") L.push("<b>Still bleeding:</b> remove clots, look with a light (anterior rhinoscopy); oxymetazoline 0.05% on cotton; if a bleeding point is seen, cauterise only that spot after local anaesthetic (silver nitrate). If no site is seen or bleeding continues: <b>anterior pack</b> (Vaseline gauze, STG); " + (c("ac") || c("bd") ? "<b>resorbable packing</b> because of the bleeding risk (AAO-HNS 3b); " : "") + "posterior bleeding or failed anterior pack → refer to ENT.");
      if (c("ac")) L.push("<b>On blood thinners:</b> use first-line measures first; do not stop, reverse or transfuse unless bleeding is life-threatening (AAO-HNS 11). Check INR if on warfarin.");
      if (p === "i") L.push("<b>Under 2 years:</b> nosebleeds are uncommon. Check for a bleeding disorder (FBC, clotting) and examine carefully for injury; if anything suggests abuse, it must be excluded (Paranjothy 2009).");
      if (rp === "ru" || c("ob")) L.push("<b>Recurrent one-sided bleeding or blockage:</b> refer for nasal endoscopy (AAO-HNS 7a) to exclude a tumour — in adolescent boys, juvenile nasopharyngeal angiofibroma.");
      if (rp === "rb" && c("fh")) L.push("<b>Recurrent bilateral bleeds with a family history or telangiectasias:</b> think hereditary haemorrhagic telangiectasia (HHT); refer (AAO-HNS 12).");
      if (c("bd")) L.push("<b>Bleeding tendency:</b> FBC, PT/INR, APTT; consider von Willebrand disease, thrombocytopenia, liver disease, dengue.");
      if (p !== "i" && rp !== "f") L.push(p === "a" ? "<b>Recurrent anterior bleeds:</b> moisturise with petroleum jelly; cautery of a visible vessel; treat high BP; review drugs and alcohol." : "<b>Recurrent childhood bleeds:</b> antiseptic cream to the front of the nose (Naseptin four times daily for 10 days in the UK; mupirocin if peanut, soya or neomycin allergy) and petroleum jelly; cautery if a vessel is seen and the child cooperates. Evidence is modest (Cochrane).");
      L.push("<b>Packing in place:</b> explain the type, plan removal in 2–3 days (STG), give antibiotics while it is in (STG), and advise when to return.");
      U.$(".out", el).innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  /* scorten: Bastuji-Garin S et al., J Invest Dermatol 2000;115:149–153 — 7 risk factors; mortality 0–1: 3%, 2: 12%, 3: 35%, 4: 58%, ≥5: 90%
     (as tabulated in Schneider & Cohen, Adv Ther 2017). Units converted: BUN 28 mg/dL = urea 10 mmol/L; glucose 250 mg/dL = 14 mmol/L.
     Validated in adults; recalculate on day 3 (Guégan). Classification by detachment: SJS < 10%, overlap 10–30%, TEN > 30% (STG 2024). */
  scorten(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>SCORTEN (adults, day 1 and day 3)</h4><div class="row"><label>Skin detached (% body surface)<input type="number" step="any" data-k="bsa" placeholder="e.g. 15"></label></div><div class="checks" style="margin-top:8px">${chk("age", "Age 40 years or more")}${chk("mal", "Cancer (active malignancy)")}${chk("hr", "Heart rate above 120/min")}${chk("ur", "Urea above 10 mmol/L (BUN > 28 mg/dL)")}${chk("gl", "Glucose above 14 mmol/L (250 mg/dL)")}${chk("bi", "Bicarbonate below 20 mmol/L")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, b = U.num(U.$("[data-k=bsa]", el)), out = U.$(".out", el);
      let s = ["age", "mal", "hr", "ur", "gl", "bi"].filter(c).length + (b > 10 ? 1 : 0);
      const mort = s <= 1 ? "3%" : s === 2 ? "12%" : s === 3 ? "35%" : s === 4 ? "58%" : "90%";
      const cls = !(b >= 0) ? "" : b < 10 ? "SJS (under 10% detachment)" : b <= 30 ? "SJS/TEN overlap (10–30%)" : "TEN (over 30%)";
      out.innerHTML = `<p style="margin:0"><b>SCORTEN ${s} / 7</b> — predicted mortality about <b>${mort}</b>${cls ? `. Classification: <b>${cls}</b>` : ""}.</p><p style="margin:6px 0 0">Any suspected SJS/TEN needs urgent referral; higher scores and larger detachment need an ICU, burns or specialist dermatology unit. Recalculate on day 3. SCORTEN was developed in adults and is not validated in children.</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  });
})();
