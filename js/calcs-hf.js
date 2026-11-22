/* Heart failure: natriuretic peptide interpretation.
   Sources: ESC 2021 HF guideline (chronic rule-out NT-proBNP <125 pg/mL, BNP <35; acute rule-out NT-proBNP <300, BNP <100);
   Januzzi JL et al., ICON-RELOADED, J Am Coll Cardiol 2018;71:1191 (age-stratified acute rule-in 450/900/1800 pg/mL);
   HFA-ESC 2019 practical guidance on natriuretic peptides (obesity, AF, CKD, age effects). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {
  ntprobnp(el, U) {
    el.innerHTML = `<h4>NT-proBNP / BNP — is this heart failure?</h4><div class="row">
      <label>Setting<select data-k="set"><option value="acute">Acute breathlessness (ED / ward)</option><option value="chronic">Gradual symptoms (clinic)</option></select></label>
      <label>Test<select data-k="t"><option value="nt">NT-proBNP</option><option value="bnp">BNP</option></select></label>
      <label>Result (pg/mL)<input type="number" data-k="v" placeholder="e.g. 1450"></label>
      <label>Age (years)<input type="number" data-k="age" placeholder="e.g. 68"></label>
      <label>BMI (kg/m²)<input type="number" step="any" data-k="bmi" placeholder="optional"></label></div>
      <div class="checks" style="margin-top:10px"><label class="chk"><input type="checkbox" data-k="af">Atrial fibrillation</label><label class="chk"><input type="checkbox" data-k="ckd">eGFR under 60</label></div>
      <div class="out" aria-live="polite">Enter the result and age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const acute = g("set").value === "acute", nt = g("t").value === "nt", v = U.num(g("v")), age = U.num(g("age")), bmi = U.num(g("bmi"));
      if (!(v >= 0) || !(age > 0)) { out.textContent = "Enter the result and age."; return; }
      let res;
      if (!acute) {
        const cut = nt ? 125 : 35;
        res = v < cut ? `<b>Heart failure unlikely</b> (below ${cut} pg/mL). Look for another cause of symptoms.` : (nt && v > 2000 ? `<b>Heart failure likely: echocardiogram and specialist review within 2 weeks</b> (NT-proBNP over 2000 pg/mL; NICE).` : nt && v >= 400 ? `<b>Possible heart failure: echocardiogram and specialist review within 6 weeks</b> (400–2000 pg/mL; NICE).` : `<b>Above the ESC rule-out level</b> (${cut} pg/mL). ESC advises an echocardiogram${nt ? "; NICE regards heart failure as less likely below 400 pg/mL, so weigh the clinical picture" : ""}.`);
      } else if (nt) {
        const rin = age < 50 ? 450 : age <= 75 ? 900 : 1800;
        res = v < 300 ? `<b>Acute heart failure very unlikely</b> (under 300 pg/mL; negative predictive value about 98%).`
          : v >= rin ? `<b>Acute heart failure likely</b> (at or above ${rin} pg/mL for age ${age}). Treat and arrange echocardiography.`
          : `<b>Grey zone</b> (300–${rin} pg/mL for this age). Decide on clinical findings, chest X-ray, lung ultrasound and echo.`;
      } else {
        res = v < 100 ? `<b>Acute heart failure unlikely</b> (BNP under 100 pg/mL).` : v > 400 ? `<b>Acute heart failure likely</b> (BNP over 400 pg/mL).` : `<b>Grey zone</b> (BNP 100–400 pg/mL). Decide on clinical findings and imaging.`;
      }
      const notes = [];
      if (bmi >= 30) notes.push("obesity lowers natriuretic peptides (by up to about half at BMI over 35), so a 'normal' value rules out less well");
      if (g("af").checked) notes.push("atrial fibrillation raises values, so interpret rule-in cut-offs with caution");
      if (g("ckd").checked) notes.push("kidney impairment raises NT-proBNP");
      if (!acute && age >= 75) notes.push("values rise with age");
      notes.push("sacubitril/valsartan raises BNP but not NT-proBNP; use NT-proBNP to follow patients on it");
      out.innerHTML = `<p style="margin:0">${res}</p><p class="warn" style="margin:8px 0 0">Remember: ${notes.join("; ")}. Other causes of raised values include pulmonary embolism, sepsis, ACS and pulmonary hypertension.</p>`;
    });
  }
});
