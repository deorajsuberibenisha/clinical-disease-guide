/* Pneumonia calculators: CURB-65/CRB-65 (adults) and WHO/IMNCI child-pneumonia classification.
   Sources: BTS 2009 (CURB-65); WHO Pocket Book 2013 / IMNCI chart booklet (child classification). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  /* CURB-65 and CRB-65 (BTS 2009). Confusion, Urea >7 mmol/L, RR ≥30, BP <90/≤60, age ≥65. */
  curb65(el, U) {
    el.innerHTML = `<h4>CURB-65 / CRB-65 — community-acquired pneumonia severity</h4><div class="row">
      <label>Age (years)<input type="number" data-k="age" placeholder="e.g. 70"></label>
      <label>New confusion<select data-k="conf"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Urea (mmol/L)<input type="number" step="any" data-k="urea" placeholder="optional"></label>
      <label>Respiratory rate (/min)<input type="number" data-k="rr" placeholder="e.g. 26"></label>
      <label>Systolic BP (mmHg)<input type="number" data-k="sbp" placeholder="e.g. 110"></label>
      <label>Diastolic BP (mmHg)<input type="number" data-k="dbp" placeholder="e.g. 70"></label></div><div class="out" aria-live="polite">Enter age, confusion, respiratory rate and blood pressure at least.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const age = U.num(g("age")), conf = g("conf").value === "y";
      const urea = U.num(g("urea")), rr = U.num(g("rr")), sbp = U.num(g("sbp")), dbp = U.num(g("dbp"));
      if (!(age >= 0) || !(rr > 0) || !(sbp > 0)) { out.textContent = "Enter age, respiratory rate and blood pressure at least."; return; }
      let curb = 0, crb = 0;
      if (conf) { curb++; crb++; }
      if (urea > 7) curb++;
      if (rr >= 30) { curb++; crb++; }
      if (sbp < 90 || dbp <= 60) { curb++; crb++; }
      if (age >= 65) { curb++; crb++; }
      const cAct = curb <= 1 ? "Low severity (mortality &lt;3%): consider home treatment" : curb === 2 ? "Moderate severity: short hospital admission or supervised outpatient treatment" : curb >= 3 ? "High severity: hospitalise; score 3–5 = severe pneumonia — assess for ICU" : "";
      const rAct = crb === 0 ? "Home treatment is usually safe" : (crb === 1 || crb === 2) ? "Consider hospital assessment" : "Urgent hospital admission";
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        <li><b>CURB-65 = ${curb}/5</b>${urea > 0 ? "" : " (urea not entered — showing CRB-65 only)"} → ${cAct}.</li>
        <li><b>CRB-65 = ${crb}/4</b> → ${rAct}.</li></ul>
        <p class="warn" style="margin:8px 0 0">One point each: <b>C</b>onfusion (new), <b>U</b>rea &gt;7 mmol/L (BUN &gt;19 mg/dL), <b>R</b>espiratory rate ≥30/min, <b>B</b>lood pressure (systolic &lt;90 or diastolic ≤60), age <b>65</b> or more. The score supports judgement — it does not replace it: always also weigh hypoxia, comorbidity and social support.</p>`;
    });
  },

  /* WHO/IMNCI classification of cough/difficult breathing in children 0–5 years. */
  imncipneumonia(el, U) {
    el.innerHTML = `<h4>Child pneumonia — WHO/IMNCI classification</h4><div class="row">
      <label>Age<select data-k="age"><option value="0">0–&lt;2 months</option><option value="1" selected>2–11 months</option><option value="2">1–5 years</option></select></label>
      <label>Respiratory rate (/min)<input type="number" data-k="rr" placeholder="e.g. 46"></label>
      <label>Chest indrawing<select data-k="ind"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Danger sign<select data-k="dg"><option value="none" selected>None</option><option value="drink">Unable to drink / breastfeed</option><option value="vomit">Vomits everything</option><option value="conv">Convulsions</option><option value="leth">Lethargic / unconscious</option><option value="stridor">Stridor in a calm child</option></select></label>
      <label>Oxygen saturation<select data-k="o2"><option value="ok" selected>≥90%</option><option value="lo">&lt;90%</option><option value="unk">Not measured</option></select></label></div><div class="out" aria-live="polite">Enter age and respiratory rate.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const age = g("age").value, rr = U.num(g("rr")), ind = g("ind").value === "y";
      const dg = g("dg").value, o2 = g("o2").value;
      if (!(rr > 0)) { out.textContent = "Enter the respiratory rate."; return; }
      const danger = dg !== "none";
      const thr = age === "0" ? 60 : age === "1" ? 50 : 40;
      const fast = rr >= thr;
      if (danger || dg === "stridor" || o2 === "lo") {
        out.innerHTML = `<span class="warn"><b>SEVERE PNEUMONIA / VERY SEVERE DISEASE</b></span> — admit. Give oxygen (target SpO₂ &gt;90%), then IV/IM <b>ampicillin 50 mg/kg 6-hourly + gentamicin 7.5 mg/kg once daily</b> for at least 5 days. Treat the danger sign (glucose for lethargy, airway for stridor).`;
        return;
      }
      if (age === "0") {
        if (fast || ind) {
          out.innerHTML = `<span class="warn"><b>SEVERE PNEUMONIA (young infant)</b></span> — refer urgently for admission: young infants under 2 months with fast breathing (≥60/min) or chest indrawing are treated as severe. IV/IM ampicillin + gentamicin under hospital care.`;
        } else {
          out.innerHTML = `<b>No pneumonia (cough or cold).</b> No antibiotic. Home care: continue breastfeeding, clear the nose, advise when to return.`;
        }
        return;
      }
      if (fast || ind) {
        out.innerHTML = `<b>PNEUMONIA (non-severe)</b> — home treatment with oral <b>amoxicillin 40 mg/kg per dose twice daily for 3 days</b> (5 days in high HIV prevalence). Review after 3 days, or sooner if worse.`;
      } else {
        out.innerHTML = `<b>No pneumonia (cough or cold).</b> No antibiotic. Home care: fluids, breastfeeding, clear the nose, and return if fast breathing, indrawing or a danger sign appears.`;
      }
    });
  }
});
