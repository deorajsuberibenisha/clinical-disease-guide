/* Tuberculosis calculators. Weight-band fixed-dose combination (FDC) tablet counts, adult and child.
   Sources: BT-INT 2024 Table 5.4 (adult 4-FDC); BT-PED 2024 Tables 4.1–4.2 (paediatric dispersible FDC). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  /* Adult 4-FDC weight bands (BT-INT Table 5.4). 4-FDC = H75 + R150 + Z400 + E275; 2-FDC = H75 + R150. */
  tbwband(el, U) {
    el.innerHTML = `<h4>Adult TB — fixed-dose combination tablets by weight</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 58"></label></div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const w = U.num(U.$("[data-k=w]", el)), out = U.$(".out", el);
      if (!(w > 25 && w < 150)) { out.textContent = "Enter weight in kg (adult)."; return; }
      let n = w < 35 ? 2 : w <= 54 ? 3 : 4;
      const h = n * 75, r = n * 150, z = n * 400, e = n * 275;
      const kg = mg => Math.round(mg / w * 10) / 10;
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        <li><b>Intensive phase (2 months): ${n} tablets of 4-FDC</b> (HRZE) once daily = isoniazid ${h} mg, rifampicin ${r} mg, pyrazinamide ${z} mg, ethambutol ${e} mg (≈ H ${kg(h)}, R ${kg(r)}, Z ${kg(z)}, E ${kg(e)} mg/kg).</li>
        <li><b>Continuation phase (4 months): ${n} tablets of 2-FDC</b> (HR) once daily = isoniazid ${h} mg + rifampicin ${r} mg.</li>
        ${w > 70 ? `<li><b>Over 70 kg:</b> consider adding <b>pyrazinamide 400 mg</b> in the intensive phase (BT-INT).</li>` : ""}</ul>
        <p class="warn" style="margin:8px 0 0">Bhutan bands: &lt;35 kg → 2, 35–54 kg → 3, ≥55 kg → 4 (the guideline prints "&gt;55"; the boundary is ambiguous — confirm with the programme). WHO bands differ slightly (30–39 → 2, 40–54 → 3, 55–69 → 4, ≥70 → 5). Never dose below 4 mg/kg or above the maximum for isoniazid (300 mg) or rifampicin (600 mg).</p>`;
    });
  },

  /* Paediatric dispersible FDC weight bands (BT-PED Tables 4.1–4.2). Dispersible tablets: RHZ 75/50/150, E 100 mg, RH 75/50. */
  tbpwband(el, U) {
    el.innerHTML = `<h4>Child TB — dispersible FDC tablets by weight</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 14"></label></div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const w = U.num(U.$("[data-k=w]", el)), out = U.$(".out", el);
      if (!(w > 2 && w < 80)) { out.textContent = "Enter weight in kg."; return; }
      if (w < 4) {
        out.innerHTML = `<span class="warn">Below 4 kg:</span> BT-PED does not give a weight band below 4 kg. WHO gives separate guidance for infants 3–3.9 kg and preterm babies — prescribe under paediatric/neonatal specialist direction.`;
        return;
      }
      let n;
      if (w >= 25) {
        const a = w >= 25 && w <= 29 ? 2 : w <= 34 ? 3 : w <= 64 ? 4 : 5;
        out.innerHTML = `<ul style="margin:0;padding-left:18px">
          <li><b>25 kg and over: switch to adult FDC.</b> At ${w} kg use <b>${a} tablets</b> of 4-FDC (HRZE) in the intensive phase and <b>${a} tablets</b> of 2-FDC (HR) in the continuation phase.</li>
          <li>Bhutan bands for children ≥25 kg: 25–29 → 2, 30–34 → 3, 35–64 → 4, &gt;65 → 5. These differ from the adult table (&lt;35 → 2, 35–54 → 3, ≥55 → 4) — an inconsistency worth flagging to the programme.</li></ul>
          <p class="warn" style="margin:8px 0 0">Re-weigh weekly for the first month, then monthly, and adjust the dose (BT-PED).</p>`;
        return;
      }
      n = w <= 7 ? 1 : w <= 11 ? 2 : w <= 15 ? 3 : 4;
      const r = n * 75, h = n * 50, z = n * 150, e = n * 100;
      const kg = mg => Math.round(mg / w * 10) / 10;
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        <li><b>Intensive phase (2 months):</b> <b>${n}</b> dispersible <b>RHZ 75/50/150</b> tablet${n > 1 ? "s" : ""} once daily <i>plus</i> <b>${n}</b> dispersible <b>ethambutol 100 mg</b> = rifampicin ${r} mg, isoniazid ${h} mg, pyrazinamide ${z} mg, ethambutol ${e} mg (≈ R ${kg(r)}, H ${kg(h)}, Z ${kg(z)}, E ${kg(e)} mg/kg).</li>
        <li><b>Continuation phase:</b> <b>${n}</b> dispersible <b>RH 75/50</b> tablet${n > 1 ? "s" : ""} once daily = rifampicin ${r} mg + isoniazid ${h} mg.</li>
        <li>Disperse the tablets in water and give the whole volume; it tastes better with a little sugar or milk.</li></ul>
        <p class="warn" style="margin:8px 0 0">Target child doses: H 10 (7–15) mg/kg, R 15 (10–20) mg/kg, Z 35 (30–40) mg/kg, E 20 (15–25) mg/kg. In the non-severe 4-month regimen the continuation phase is only 2 months (2HRZE/2HR).</p>`;
    });
  }
});
