/* Batch E-14 calculator (27 Nov 2026).
   childmorphine: Basic Symptom Control in Paediatric Palliative Care 2024 / APPM Master Formulary 6th ed — morphine starting doses for opioid-naive
   children by age band (oral/rectal, IV/SC bolus, infusion per 24 h, with maxima); lower start (1/10–1/2) if high risk; patients already on morphine:
   MR = total ÷ 2 every 12 h; infusion = oral total ÷ 3; breakthrough 1/10–1/6 of the total daily dose every 1–4 h; dyspnoea 25–50% of pain dose. */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const ul = a => `<ul style="margin:4px 0 0">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const f = v => (Math.round(v * 100) / 100).toLocaleString("en");
  // [oral mcg/kg lo, hi, interval h, oral max mg/dose | bolus lo, hi, max | infusion mcg/kg/24h lo, hi, max mg]
  const B = {
    neo: { o: [80, 80, 6, null], b: [40, 40, null], i: [160, 160, null], l: "Neonate" },
    m1: { o: [120, 120, 6, null], b: [60, 60, null], i: [240, 240, null], l: "1–2 months" },
    m3: { o: [120, 120, 4, null], b: [60, 60, null], i: [360, 360, null], l: "3–5 months" },
    m6: { o: [200, 200, 4, null], b: [80, 80, null], i: [480, 480, null], l: "6–23 months" },
    y2: { o: [200, 300, 4, 10], b: [80, 100, 5], i: [480, 600, 20], l: "2–11 years" },
    y12: { o: [200, 200, 4, 10], b: [80, 100, 5], i: [480, 600, 30], l: "12 years and over" }
  };
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  childmorphine(el, U) {
    el.innerHTML = `<h4>Children's morphine (APPM 2024)</h4><div class="row">${sel("mode", "Situation", [["naive", "Opioid-naive: starting dose"], ["on", "Already on regular morphine: convert / breakthrough"]])}${sel("age", "Age band", Object.entries(B).map(([k, v]) => [k, v.l]))}${num("wt", "Weight (kg; ideal body weight if obese)", 16, 0.1)}${sel("risk", "Higher risk of side effects (frail, renal/hepatic impairment, other sedatives)", [["n", "No"], ["y", "Yes"]])}${num("tot", "Total oral morphine in last 24 h incl. breakthrough (mg)", 24, 0.5)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, b = B[g("age")], wt = parseFloat(g("wt")), tot = parseFloat(g("tot")), out = U.$(".out", el), a = [];
      if (!(wt > 0)) { out.innerHTML = "<p>Enter weight.</p>"; return; }
      if (g("mode") === "naive") {
        const cap = (v, m) => m ? Math.min(v, m) : v;
        const oLo = cap(b.o[0] * wt / 1000, b.o[3]), oHi = cap(b.o[1] * wt / 1000, b.o[3]);
        const bLo = cap(b.b[0] * wt / 1000, b.b[2]), bHi = cap(b.b[1] * wt / 1000, b.b[2]);
        const iLo = cap(b.i[0] * wt / 1000, b.i[2]), iHi = cap(b.i[1] * wt / 1000, b.i[2]);
        const rng = (x, y) => x === y ? f(x) : f(x) + "–" + f(y);
        a.push(`By mouth / rectum: <b>${rng(oLo, oHi)} mg every ${b.o[2]} hours</b> (${b.o[0] === b.o[1] ? b.o[0] : b.o[0] + "–" + b.o[1]} mcg/kg${b.o[3] ? ", max " + b.o[3] + " mg/dose" : ""})`);
        a.push(`IV or SC bolus: <b>${rng(bLo, bHi)} mg every ${b.o[2]} hours</b>${b.b[2] ? " (max " + b.b[2] + " mg/dose)" : ""}`);
        a.push(`IV/SC continuous infusion: <b>${rng(iLo, iHi)} mg per 24 hours</b>${b.i[2] ? " (max " + b.i[2] + " mg/24 h)" : ""}`);
        if (g("risk") === "y") a.push("<b>Higher risk: start at 1/10 to 1/2 of these doses</b> and titrate");
        a.push("Dyspnoea/cough (1 month+): 25–50% of these doses");
      } else {
        if (!(tot > 0)) { out.innerHTML = "<p>Enter the total oral morphine used in 24 hours.</p>"; return; }
        a.push(`Total oral morphine: <b>${f(tot)} mg/24 h</b>`);
        a.push(`Modified-release (12-hourly): <b>${f(tot / 2)} mg every 12 hours</b>`);
        a.push(`IV/SC continuous infusion: <b>${f(tot / 3)} mg per 24 hours</b> (oral ÷ 3, APPM 2024)`);
        a.push(`Breakthrough (oral): <b>${f(tot / 10)}–${f(tot / 6)} mg</b> every 1–4 hours as needed (1/10–1/6 of daily total)`);
        a.push("More than 2 breakthrough doses in 24 h → review the regular dose");
      }
      a.push("Always prescribe a stimulant laxative (senna); watch for itch, urinary retention, myoclonic twitching (toxicity)");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">APPM Master Formulary 6th ed (2024). Bhutan NEML has no oral morphine solution — plan liquid preparation with pharmacy for small doses. Specialist palliative advice recommended.</p>`;
    });
  }

  });
})();
