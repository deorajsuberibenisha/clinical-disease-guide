/* Enteric fever and scrub typhus dose calculators.
   entericdose: WHO AWaRe Antibiotic Book 2022 (adult and child enteric fever); Bhutan STG 2024 §8.1.1; ICMR 2019 / IAP practice for cefixime.
   scrubdose: National Guidelines for the Management of Priority Zoonotic Diseases 2025 (Bhutan), ch.4 Scrub typhus; Varghese GM et al. NEJM 2023. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  entericdose(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Enteric (typhoid) fever — antibiotic and dose</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 18 or 55"></label>
      ${sel("age", "Patient", [["a", "Adult (or child 45 kg and over)"], ["c", "Child"]])}
      ${sel("sev", "Severity", [["m", "Uncomplicated: eating, no warning signs"], ["s", "Severe: vomiting, toxic, delirium, GI bleed, peritonism, shock"]])}
      ${sel("fq", "Fluoroquinolone susceptibility", [["u", "Unknown (assume resistant — South Asia)"], ["s", "Isolate sensitive to ciprofloxacin"]])}
      ${sel("preg", "Pregnant", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), ad = g("age").value === "a" || w >= 45, sev = g("sev").value === "s", fqs = g("fq").value === "s", preg = g("preg").value === "y";
      if (!(w > 0) || w > 200) { out.textContent = "Enter the weight."; return; }
      const r = v => Math.round(v / 10) * 10, cap = Math.min, L = [];
      if (sev) {
        L.push(`<b>Admit. Ceftriaxone ${ad ? "2 g" : cap(r(80 * w), 2000) + " mg"} IV once daily</b>${ad ? "" : " (80 mg/kg, max 2 g)"} — blood culture first. Switch to oral azithromycin ${ad ? "500 mg–1 g daily" : cap(r(20 * w), 1000) + " mg daily"} or cefixime when afebrile and eating; <b>10–14 days in total</b>.`);
        L.push("Delirium, obtundation or shock: consider dexamethasone 3 mg/kg IV over 30 minutes, then 1 mg/kg 6-hourly for 8 doses (specialist; older trial evidence). Peritonism or sudden pain in week 2–3: <b>perforation</b> — surgical review now (see acute abdomen).");
      } else if (fqs && !preg) {
        L.push(`<b>Ciprofloxacin ${ad ? "500 mg" : cap(r(15 * w), 500) + " mg"} twice daily</b>${ad ? "" : " (15 mg/kg, max 500 mg)"} for 7 days (WHO AWaRe; STG 7–14 days) — only because the isolate is sensitive.`);
      } else {
        L.push(`<b>Azithromycin ${ad ? "1 g on day 1, then 500 mg once daily" : cap(r(20 * w), 1000) + " mg once daily (20 mg/kg, max 1 g)"}</b> for 7 days (WHO AWaRe). Oral azithromycin is not on NEML 2025 — if unavailable: cefixime ${ad ? "200–400 mg twice daily" : cap(r(10 * w), 400) + " mg twice daily (20 mg/kg/day)"} for 14 days.`);
        if (preg) L.push("Pregnancy: azithromycin or ceftriaxone; avoid fluoroquinolones.");
      }
      L.push(`Paracetamol ${ad ? "1 g" : cap(r(15 * w), 1000) + " mg"} up to 6-hourly; fluids. Fever usually takes 3–5 days to settle on effective treatment — do not change antibiotics before day 5 unless the patient is worse.`);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Change to the narrowest effective drug once culture and sensitivity return. Check doses against the chapter and BNF/BNFc/NEMF.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  scrubdose(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Scrub typhus — treatment by weight (Bhutan zoonoses guideline 2025)</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 20 or 60"></label>
      ${sel("sev", "Severity", [["m", "Mild–moderate"], ["s", "Severe: pneumonitis/ARDS, AKI, jaundice/hepatitis, meningoencephalitis, shock, myocarditis, DIC"]])}
      ${sel("preg", "Pregnant", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), sev = g("sev").value === "s", preg = g("preg").value === "y";
      if (!(w > 0) || w > 200) { out.textContent = "Enter the weight."; return; }
      const big = w > 45, dx = big ? 100 : Math.round(2.2 * w * 10) / 10, az = Math.min(Math.round(10 * w), 500), L = [];
      if (preg) {
        L.push(`<b>Azithromycin 500 mg once daily for 7 days</b> (oral or IV)${sev ? "; severe disease: IV, admit, involve obstetrics and ICU" : ""}. Doxycycline is avoided in pregnancy.`);
      } else if (!sev) {
        L.push(`<b>Doxycycline ${dx} mg twice daily</b>${big ? "" : " (2.2 mg/kg)"} for ${big ? "7–10 days (adults; 5–7 days if a child over 45 kg)" : "5–7 days"} — drug of choice at all ages.`);
        L.push(`Alternative: azithromycin ${big ? "500 mg once daily for 7 days" : az + " mg once daily (10 mg/kg, max 500 mg) for 5–7 days"}.`);
      } else {
        L.push(`<b>Admit; IV dual therapy:</b> doxycycline ${big ? "200 mg twice daily on day 1, then 100–200 mg twice daily" : dx + " mg (2.2 mg/kg) twice daily"} <b>plus</b> azithromycin ${big ? "500 mg" : az + " mg (10 mg/kg, max 500 mg)"} once daily, for 7–10 days (INTREST trial; Bhutan guideline). If IV doxycycline is unavailable, give oral doxycycline (crushed via NG tube) with IV azithromycin.`);
        L.push("Organ support: oxygen or ventilation for ARDS (avoid fluid overload), dialysis for AKI, careful fluids in shock.");
      }
      L.push("Continue until at least 3 days after the fever settles. The Bhutan guideline note sets a minimum of 7 days (total 7–14 days), although its child table lists 5–7 days — when in doubt, give 7 days. Fever usually falls within 48 hours of doxycycline — if not, reconsider the diagnosis (dengue, leptospirosis, enteric fever, malaria) or a co-infection.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Alternatives (Bhutan guideline): rifampicin 600 mg daily for 7 days (adults); chloramphenicol (risk of bone-marrow suppression). Fluoroquinolones are not recommended for children. Check doses against the chapter.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
