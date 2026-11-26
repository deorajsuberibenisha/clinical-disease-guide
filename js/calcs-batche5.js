/* Batch E-5 calculators (26 Nov 2026).
   bronchitisabx: NICE NG120 Cough (acute): antimicrobial prescribing (2019, amended 2021) — recommendations 1.1.9, 1.1.14–1.1.16 and table 1
   (adults 18+). Read in the browser 26 Nov 2026. Higher risk = significant heart/lung/renal/liver/neuromuscular disease, immunosuppression or cystic
   fibrosis; or age > 65 with ≥ 2, or age > 80 with ≥ 1, of: admission in the past year, diabetes, heart failure, current oral corticosteroids. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}"> ${t}</label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  bronchitisabx(el, U) {
    el.innerHTML = `<h4>Acute cough / acute bronchitis: antibiotic or not? (NICE NG120, adults 18+)</h4>
<div class="row">${num("age", "Age (years)", 40, 1)}${sel("unwell", "Systemically very unwell?", [["n", "No"], ["y", "Yes"]])}${sel("pn", "Signs of pneumonia (focal signs, hypoxia, RR > 24) or red flags?", [["n", "No"], ["y", "Yes"]])}${sel("preg", "Pregnant?", [["n", "No"], ["y", "Yes"]])}</div>
<div class="row">${chk("comorb", "Significant heart, lung, kidney, liver or neuromuscular disease, immunosuppression or cystic fibrosis")}</div>
<p><small>Count for older adults:</small></p>
<div class="row">${chk("c1", "Admitted to hospital in the past year")}${chk("c2", "Type 1 or type 2 diabetes")}${chk("c3", "Heart failure")}${chk("c4", "Current oral corticosteroids")}</div>
<div class="out" aria-live="polite"></div>`;
    const go = () => {
      const q = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const age = parseFloat(q("age").value);
      if (!(age >= 18)) { out.innerHTML = "<p>For adults aged 18 and over. For children use the child pages (NICE table 2).</p>"; return; }
      if (q("pn").value === "y") { out.innerHTML = "<p><b>Not simple acute bronchitis.</b> Assess for pneumonia (chest X-ray) or the serious condition suggested — follow the pneumonia page, not this tool.</p>"; return; }
      const n = ["c1", "c2", "c3", "c4"].filter(k => q(k).checked).length;
      const highRisk = q("comorb").checked || (age > 65 && n >= 2) || (age > 80 && n >= 1);
      const unwell = q("unwell").value === "y", preg = q("preg").value === "y";
      const why = q("comorb").checked ? "significant comorbidity" : (age > 80 && n >= 1) ? `over 80 with ${n} criterion${n > 1 ? "a" : ""}` : (age > 65 && n >= 2) ? `over 65 with ${n} criteria` : "";
      const drug = preg
        ? "<b>Amoxicillin 500 mg three times daily for 5 days</b> (doxycycline must not be used in pregnancy; erythromycin if a macrolide is needed)."
        : "<b>Doxycycline 200 mg on day 1, then 100 mg once daily for 4 days</b> (5 days in total). Alternatives: amoxicillin 500 mg three times daily for 5 days; clarithromycin 250–500 mg twice daily for 5 days; erythromycin 250–500 mg four times daily or 500–1,000 mg twice daily for 5 days.";
      let h;
      if (unwell) h = `<p><b>Offer an immediate antibiotic</b> (systemically very unwell).</p><p>${drug}</p>`;
      else if (highRisk) h = `<p><b>Higher risk of complications</b> (${why}): consider an <b>immediate</b> antibiotic or a <b>back-up</b> prescription to use if symptoms worsen rapidly or significantly.</p><p>${drug}</p>`;
      else h = "<p><b>No antibiotic.</b> Explain that acute cough usually lasts up to 3–4 weeks, that antibiotics shorten it by only about half a day and can cause diarrhoea and nausea. Self-care: honey, fluids, paracetamol. Return if it worsens rapidly, does not improve after 3–4 weeks, or the patient becomes very unwell.</p>";
      h += `<p><small>Bhutan: test for TB if cough has lasted more than 2 weeks. NEML 2025 has doxycycline 100 mg, amoxicillin 250 mg and erythromycin 250 mg; clarithromycin is listed for H. pylori only. Source: NICE NG120.</small></p>`;
      out.innerHTML = h;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
