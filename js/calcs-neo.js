/* Neonatal sepsis and bronchiolitis calculators.
   Neonatal antibiotics: WHO Pocket Book of Hospital Care for Children 2013 (ampicillin, gentamicin, cefotaxime, cloxacillin by age), Bhutan EM booklet 2018 (ampicillin intervals),
   WHO PSBI guideline 2015 (simplified outpatient regimens). Neonatal fluids: WHO/standard day-of-life volumes.
   Bronchiolitis: NICE NG9 (2015, updated 2021), AAP 2014, JDWNRH OPD handbook (oxygen if SpO2 under 90%). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  neosepsis(el, U) {
    el.innerHTML = `<h4>Young infant with possible serious bacterial infection: doses and fluids</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 2.8"></label>
      <label>Age (days)<input type="number" data-k="d" placeholder="e.g. 5"></label>
      <label>Meningitis suspected or confirmed<select data-k="men"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Skin or umbilical source<select data-k="skin"><option value="n">No</option><option value="y">Yes (pustules, omphalitis)</option></select></label></div><div class="out" aria-live="polite">Enter weight and age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), d = U.num(g("d")), men = g("men").value === "y", skin = g("skin").value === "y";
      if (!(w > 0) || !(d >= 0)) { out.textContent = "Enter weight and age."; return; }
      if (d > 59) { out.innerHTML = `<span class="warn">Over 2 months: use the child sepsis and pneumonia chapters.</span>`; return; }
      const r = v => Math.round(v * 10) / 10, wk1 = d <= 7;
      const ampDose = men ? 100 : 50, ampInt = wk1 ? 12 : 8;
      const genDose = wk1 ? (w < 2 ? 3 : 5) : 7.5;
      const cefInt = wk1 ? (w < 2 ? 12 : 8) : 6;
      const day = Math.max(1, Math.min(d, 7));
      const ml = [0, 60, 80, 100, 120, 140, 150, 150][day] * (w < 1.5 ? 1.1 : 1);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        <li><b>Ampicillin</b> ${Math.round(ampDose * w)} mg IV/IM every ${ampInt} hours (${ampDose} mg/kg${men ? ", meningitis dose" : ""}).</li>
        <li><b>Gentamicin</b> ${r(genDose * w)} mg IV/IM once daily (${genDose} mg/kg${wk1 ? (w < 2 ? ", first week, under 2 kg" : ", first week") : ", 8 days and older"}).</li>
        ${men ? `<li><b>Meningitis or no response in 48 hours:</b> cefotaxime ${Math.round(50 * w)} mg IV every ${cefInt} hours (50 mg/kg); avoid ceftriaxone in jaundiced or premature neonates and never with IV calcium.</li>` : ""}
        ${skin ? `<li><b>Skin or umbilical infection:</b> add or use cloxacillin ${Math.round(50 * w)} mg IV every ${wk1 ? 12 : 8} hours (50 mg/kg).</li>` : ""}
        <li><b>Duration:</b> ${men ? "at least 14 days (21 days for gram-negative meningitis)" : "7–10 days if culture-positive or clinical sepsis; stop at 36–48 hours if cultures are negative and the baby is well"}.</li>
        <li><b>Fluids (day ${day} of life):</b> about ${Math.round(ml * w)} mL/day ≈ ${r(ml * w / 24)} mL/hour (${Math.round(ml)} mL/kg/day) of 10% dextrose${day >= 3 ? " with sodium and potassium added" : ""}; feed by NG tube as soon as tolerated. Check glucose; treat if under 2.6 mmol/L (2 mL/kg 10% dextrose).</li>
        <li><b>Referral not possible (WHO PSBI):</b> gentamicin IM once daily for 7 days plus oral amoxicillin ${Math.round(50 * w)} mg twice daily (fast breathing only in a 7–59-day-old: oral amoxicillin alone for 7 days).</li></ul>
        <p class="warn" style="margin:8px 0 0">Keep warm (skin-to-skin), check glucose, and refer to a neonatal unit. Measure gentamicin levels where available, especially in preterm babies or poor urine output.</p>`;
    });
  },

  bronchsev(el, U) {
    el.innerHTML = `<h4>Bronchiolitis: how sick, and where to treat?</h4><div class="row">
      <label>Age (months)<input type="number" step="any" data-k="age" placeholder="e.g. 4"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 6"></label>
      <label>SpO₂ in air (%)<input type="number" data-k="sat" placeholder="e.g. 91"></label>
      <label>Respiratory rate (/min)<input type="number" data-k="rr" placeholder="e.g. 62"></label>
      <label>Feeding (% of usual)<select data-k="feed"><option value="100">75% or more</option><option value="60">50–75%</option><option value="40">Under 50%</option></select></label></div>
      <div class="checks" style="margin-top:10px">
        <label class="chk"><input type="checkbox" data-k="apn">Apnoea (observed or reported)</label>
        <label class="chk"><input type="checkbox" data-k="sev">Severe chest indrawing, grunting or head bobbing</label>
        <label class="chk"><input type="checkbox" data-k="risk">Risk factor: born before 32 weeks, chronic lung or heart disease, immunodeficiency, neuromuscular disease</label>
        <label class="chk"><input type="checkbox" data-k="tired">Exhaustion, falling respiratory rate, rising CO₂ or SpO₂ under 92% on oxygen</label></div>
      <div class="out" aria-live="polite">Enter age, SpO₂ and respiratory rate.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, out = U.$(".out", el);
      const age = U.num(g("age")), w = U.num(g("wt")), sat = U.num(g("sat")), rr = U.num(g("rr")), feed = +g("feed").value;
      if (!(age >= 0) || !(sat > 0) || !(rr > 0)) { out.textContent = "Enter age, SpO₂ and respiratory rate."; return; }
      let where, why = [];
      if (c("tired")) { where = "HDU/PICU: CPAP or high-flow, consider ventilation"; why.push("signs of respiratory failure"); }
      else if (c("apn") || c("sev") || sat < 90 || rr > 70 || feed <= 40) { where = "Admit to hospital"; if (c("apn")) why.push("apnoea"); if (c("sev")) why.push("severe distress"); if (sat < 90) why.push("SpO₂ under 90%"); if (rr > 70) why.push("RR over 70"); if (feed <= 40) why.push("feeding under 50%"); }
      else if (sat < 92 || feed <= 60 || age < 3 || c("risk")) { where = "Consider admission (low threshold)"; if (sat < 92) why.push("SpO₂ 90–91%"); if (feed <= 60) why.push("feeding 50–75%"); if (age < 3) why.push("under 3 months"); if (c("risk")) why.push("risk factor"); }
      else { where = "Home care with safety-netting"; why.push("no high-risk features"); }
      const feedTxt = w > 0 ? `<li><b>Feeds:</b> if not feeding enough, NG tube with milk at about ${Math.round(w * 100)}–${Math.round(w * 150)} mL/day in small frequent volumes (two-thirds of this if very distressed); IV isotonic fluid only if NG feeding is not tolerated.</li>` : "";
      out.innerHTML = `<p style="margin:0"><b>${where}</b> — ${why.join(", ")}.</p><ul style="margin:6px 0 0;padding-left:18px">
        <li><b>Oxygen</b> if SpO₂ is under 90% (JDWNRH, WHO; NICE uses 92%), aiming 90–94%.</li>${feedTxt}
        <li>Gentle nasal saline and suction before feeds. <b>No routine</b> salbutamol, adrenaline, steroids, antibiotics, hypertonic saline or chest physiotherapy.</li></ul>
        <p class="warn" style="margin:8px 0 0">Illness is often worst on days 3–5. Return at once for pauses in breathing, blue lips, poor feeding, fewer wet nappies or harder breathing.</p>`;
    });
  }
});
