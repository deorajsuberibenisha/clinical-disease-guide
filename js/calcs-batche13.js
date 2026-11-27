/* Batch E-13 calculators (27 Nov 2026).
   leptorx: Bhutan zoonoses guideline 2025 §2.13 (severity classification; mild/severe regimens for adults, children, pregnancy) and §2.10.4 lung predictors.
   vhfscreen: Merck (incubation 2–21 days; exposures) + WHO 2022 therapeutics (mAb114 50 mg/kg; REGN-EB3 150 mg/kg; single IV dose). */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const ul = a => `<ul style="margin:4px 0 0">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const f = v => (Math.round(v * 10) / 10).toLocaleString("en");
  const yn = [["n", "No"], ["y", "Yes"]];
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  leptorx(el, U) {
    el.innerHTML = `<h4>Leptospirosis: severity and treatment (Bhutan zoonoses guideline 2025)</h4><div class="row">${sel("grp", "Patient", [["a", "Adult (not pregnant)"], ["c", "Child"], ["p", "Pregnant"]])}${num("wt", "Weight (kg)", 60, 0.5)}${sel("sev", "Organ dysfunction, shock, bleeding, haemoptysis, hypoxia, RR > 30, low urine, lung infiltrates", yn)}${sel("plt", "Low platelets at onset", yn)}${sel("cr", "Creatinine > 2 mg/dL", yn)}${sel("bil", "Bilirubin > 2 mg/dL", yn)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, grp = g("grp"), wt = parseFloat(g("wt")), sev = g("sev") === "y", out = U.$(".out", el), a = [];
      const rf = ["plt", "cr", "bil"].filter(k => g(k) === "y").length;
      a.push(`Severity: <b>${sev ? "SEVERE" : "mild"}</b>${!sev && rf ? ` — ${rf} predictor(s) of lung complications: watch closely on days 4–6` : ""}`);
      if (!sev) {
        if (grp === "a") a.push("Doxycycline <b>100 mg twice daily for 7 days</b>, or azithromycin <b>500 mg once daily for 3 days</b>");
        if (grp === "p") a.push("Azithromycin <b>500 mg once daily for 3 days</b>");
        if (grp === "c") a.push(wt > 0 ? `Doxycycline 2 mg/kg/day = <b>${f(wt)} mg twice daily</b> (max adult 100 mg) for 7 days, or azithromycin <b>${f(Math.min(10 * wt, 500))} mg</b> day 1 then <b>${f(Math.min(5 * wt, 250))} mg</b> days 2–3` : "Enter weight");
        a.push("ORS / fluids, paracetamol; return at once if breathless, coughing blood, yellow or passing less urine");
      } else {
        if (grp === "a") a.push("IV penicillin G <b>1.5 million units 6-hourly</b> (drug of choice), or IV doxycycline 100 mg twice daily, or IV ceftriaxone <b>2 g once daily</b> — 7 days");
        if (grp === "p") a.push("IV penicillin G or IV ceftriaxone — 7 days");
        if (grp === "c") a.push(wt > 0 ? `IV ceftriaxone 100 mg/kg = <b>${f(Math.min(100 * wt, 2000))} mg once daily</b>, or IV doxycycline 4 mg/kg/day = <b>${f(Math.min(2 * wt, 100))} mg twice daily</b>, or IV penicillin (guideline prints '250,000 units/kg q 6 hourly' — confirm with paediatrician) — 7 days` : "Enter weight");
        a.push("<b>Refer to a higher centre</b>: oxygen/ventilation, careful fluids, dialysis, blood products");
      }
      if (grp === "c") a.push("Doxycycline is acceptable under 8 years for courses shorter than 21 days");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan National Guidelines for Priority Zoonotic Diseases 2025, ch. 2. Child doses capped at adult doses (app rule).</p>`;
    });
  },

  vhfscreen(el, U) {
    el.innerHTML = `<h4>Possible Ebola / VHF: screen and act</h4><div class="row">${sel("fev", "Fever, or unexplained bleeding", yn)}${num("days", "Days since last exposure / leaving outbreak area", 7, 1)}${sel("exp", "Exposure", [["none", "None known"], ["travel", "Travel to an outbreak area only"], ["contact", "Contact with a case, body, or their body fluids (incl. funeral)"], ["animal", "Bats, primates or bush meat in an outbreak area"]])}${sel("conf", "Laboratory-confirmed Zaire Ebola", yn)}${num("wt", "Weight (kg)", 60, 0.5)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, d = parseFloat(g("days")), exp = g("exp"), wt = parseFloat(g("wt")), out = U.$(".out", el), a = [];
      if (g("conf") === "y") {
        a.push("<b>Confirmed Zaire Ebola</b>: intensive supportive care + WHO-supplied antibody as soon as possible");
        if (wt > 0) { a.push(`mAb114 (ansuvimab) 50 mg/kg = <b>${f(50 * wt)} mg</b> (${f(wt)} mL) single IV infusion over 60 min`); a.push(`or REGN-EB3 150 mg/kg = <b>${f(150 * wt)} mg</b> (${f(3 * wt)} mL) single IV infusion over 2–4 h`); }
        a.push("Not remdesivir or ZMapp (WHO 2022)");
      } else if (exp === "none") a.push("No exposure: Ebola very unlikely — usual fever work-up");
      else if (d > 21) a.push("Exposure more than 21 days ago (beyond maximum incubation): Ebola very unlikely — usual work-up");
      else if (g("fev") === "y") { a.push(`<b>Suspected VHF${exp === "contact" ? " (high-risk exposure)" : ""}</b>: isolate in a single room, full PPE with trained observer, minimal staff`); a.push("<b>Notify RCDC now</b>; public health arranges RT-PCR testing; test for malaria"); a.push("Supportive care: fluids, electrolytes, analgesia; avoid invasive procedures"); }
      else a.push(`Well, exposed ${f(d)} days ago: <b>monitor temperature twice daily until day 21</b>; report fever immediately; RCDC contact follow-up`);
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Incubation 2–21 days (Merck); WHO Ebola therapeutics guideline 2022.</p>`;
    });
  }

  });
})();
