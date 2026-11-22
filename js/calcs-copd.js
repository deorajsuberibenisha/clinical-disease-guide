/* COPD calculators: GOLD ABE assessment with initial therapy (GOLD 2025/2026 framework) and DECAF exacerbation mortality score.
   Sources: GOLD 2025/2026 report (Figure: GOLD ABE assessment; initial pharmacological treatment); mMRC dyspnoea scale (public domain);
   Steer J et al. Thorax 2012;67:970–976 (DECAF). Decision aids only. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {
  goldabe(el, U) {
    el.innerHTML = `<h4>GOLD ABE group and first maintenance treatment</h4><div class="row">
      <label>Post-bronchodilator FEV₁ (% predicted)<input type="number" data-k="fev" placeholder="optional, e.g. 55"></label>
      <label>mMRC breathlessness grade<select data-k="mmrc"><option value="0">0: only on strenuous exercise</option><option value="1">1: hurrying or walking up a slight hill</option><option value="2">2: slower than peers on level ground, or stops for breath</option><option value="3">3: stops after about 100 m or a few minutes</option><option value="4">4: too breathless to leave the house, or when dressing</option></select></label>
      <label>CAT score (if done, 0–40)<input type="number" data-k="cat" placeholder="optional"></label>
      <label>Moderate exacerbations in past year (needed steroids/antibiotics)<input type="number" data-k="mod" placeholder="0"></label>
      <label>Hospital admissions for exacerbation in past year<input type="number" data-k="hosp" placeholder="0"></label>
      <label>Blood eosinophils (cells/µL)<input type="number" data-k="eos" placeholder="optional"></label></div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), out = U.$(".out", el);
      const fev = g("fev"), mmrc = +U.$("[data-k=mmrc]", el).value, cat = g("cat"), mod = g("mod") || 0, hosp = g("hosp") || 0, eos = g("eos");
      const grade = fev > 0 ? (fev >= 80 ? "GOLD 1 (mild)" : fev >= 50 ? "GOLD 2 (moderate)" : fev >= 30 ? "GOLD 3 (severe)" : "GOLD 4 (very severe)") : "not entered";
      const sym = mmrc >= 2 || cat >= 10, E = mod >= 2 || hosp >= 1;
      const grp = E ? "E" : sym ? "B" : "A";
      let tx = grp === "A" ? "A bronchodilator (long-acting preferred, e.g. <b>tiotropium</b>), plus a reliever." : grp === "B" ? "<b>LABA + LAMA</b> (dual long-acting bronchodilators), plus a reliever. Where only separate inhalers exist, tiotropium + a LABA-containing inhaler." : "<b>LABA + LAMA</b>; consider <b>LABA + LAMA + ICS</b> (triple) if blood eosinophils ≥300/µL. Avoid LABA + ICS alone in COPD without asthma.";
      if (grp === "E" && eos > 0) tx += eos >= 300 ? " Eosinophils ≥300: triple therapy is favoured." : eos >= 100 ? " Eosinophils 100–299: add ICS if exacerbations continue on LABA+LAMA." : " Eosinophils under 100: ICS unlikely to help (and raises pneumonia risk); consider azithromycin or roflumilast (specialist).";
      out.innerHTML = `<p style="margin:0">Spirometric grade: <b>${grade}</b> · <b>GOLD group ${grp}</b>${E ? " (exacerbation-prone)" : sym ? " (more symptoms)" : " (few symptoms, low risk)"}</p><p style="margin:6px 0 0">${tx}</p>
        <p class="qn" style="margin:8px 0 0">Every patient: stop smoking (and avoid smoky kitchens), vaccinate (influenza, pneumococcal, COVID-19, RSV where available), pulmonary rehabilitation if breathless, check inhaler technique. GOLD 2026 lowered the exacerbation threshold for escalating treatment, so review after even one moderate exacerbation. Group E here uses the classic definition (≥2 moderate or ≥1 hospitalised).</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  decaf(el, U) {
    const sel = (k, l, o) => `<label>${l}<select data-k="${k}">${o.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>DECAF score: in-hospital mortality in a COPD exacerbation</h4><div class="row">
      ${sel("d", "Dyspnoea (extended MRC, when stable)", [[0, "Can leave the house (eMRCD 1–4)"], [1, "5a: housebound, independent washing/dressing"], [2, "5b: housebound, needs help washing/dressing"]])}
      ${sel("e", "Eosinopenia (eosinophils <0.05 ×10⁹/L)", [[0, "No"], [1, "Yes"]])}
      ${sel("c", "Consolidation on chest X-ray", [[0, "No"], [1, "Yes"]])}
      ${sel("a", "Acidaemia (pH <7.30)", [[0, "No"], [1, "Yes"]])}
      ${sel("f", "Atrial fibrillation", [[0, "No"], [1, "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const s = ["d", "e", "c", "a", "f"].reduce((x, k) => x + (+U.$(`[data-k=${k}]`, el).value), 0), out = U.$(".out", el);
      const r = s <= 1 ? ["Low", s === 0 ? "about 0–1%" : "about 1.5%", "Consider early supported discharge or home treatment if safe."] : s === 2 ? ["Intermediate", "about 5%", "Admit; clinical judgement on level of care."] : ["High", s === 3 ? "about 15%" : s === 4 ? "about 30%" : "about 40–50%", "Escalate early: senior review, NIV if acidotic, discuss ceiling of care with the family."];
      out.innerHTML = `<p style="margin:0"><b>DECAF = ${s}/6</b> · ${r[0]} risk · in-hospital mortality ${r[1]}.</p><p class="qn" style="margin:6px 0 0">${r[2]} DECAF was derived in UK hospitals; use it to support, not replace, judgement.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  }
});
