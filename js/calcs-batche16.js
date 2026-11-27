/* Batch E-16 calculators (27 Nov 2026).
   pyomyo: Verma 2016 stages + oral step-down child doses (cephalexin 100 mg/kg/day; clindamycin 30–40 mg/kg/day); Chattopadhyay 2013 vancomycin
     15 mg/kg 12-hourly max 1 g; Bhutan STG §13.7.
   bonetumour: NICE NG12 1.11.1–1.11.7 + Bhutan STG §13.16 benign/malignant features. */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const ul = a => `<ul style="margin:4px 0 0">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const f = v => (Math.round(v * 10) / 10).toLocaleString("en");
  const yn = [["n", "No"], ["y", "Yes"]];
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  pyomyo(el, U) {
    el.innerHTML = `<h4>Pyomyositis: stage and antibiotics</h4><div class="row">${sel("st", "Findings", [["1", "Woody painful muscle, no pus on ultrasound"], ["2", "Collection / pus on aspiration"], ["3", "Sepsis, shock or multiple collections"]])}${sel("mrsa", "MRSA likely (local CA-MRSA, prior MRSA, no response in 48–72 h)", yn)}${sel("age", "Patient", [["c", "Child"], ["a", "Adult"]])}${num("wt", "Weight (kg)", 25, 0.5)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, st = g("st"), wt = parseFloat(g("wt")), child = g("age") === "c", out = U.$(".out", el), a = [];
      a.push(st === "1" ? "Invasive stage: IV antibiotics; repeat ultrasound/MRI if not improving" : st === "2" ? "<b>Suppurative stage: aspirate or surgically drain + IV antibiotics</b>; send pus for culture" : "<b>Late stage: resuscitate (sepsis), broad IV cover incl. MRSA, drain every collection</b>");
      a.push("Empirical IV: STG penicillin or ceftriaxone" + (g("mrsa") === "y" || st === "3" ? " <b>plus MRSA cover</b>" + (wt > 0 ? ` — e.g. vancomycin 15 mg/kg = <b>${f(Math.min(15 * wt, 1000))} mg 12-hourly</b> (max 1 g/dose; monitor levels/renal function)` : "") : ""));
      if (child && wt > 0) a.push(`Oral step-down after improvement, total 2–3 more weeks: ${g("mrsa") === "y" ? "" : `cephalexin 100 mg/kg/day = <b>${f(25 * wt)} mg 6-hourly</b> (MSSA), or `}clindamycin 30–40 mg/kg/day = <b>${f(10 * wt)}–${f(40 * wt / 3)} mg 8-hourly</b> (MSSA or clindamycin-susceptible MRSA; linezolid if resistant)`);
      else if (!child) a.push("Oral step-down 2–3 weeks guided by culture (e.g. cephalexin, cloxacillin or clindamycin)");
      a.push("Fever persisting after drainage → other collections, resistance, drug fever");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Verma 2016; Chattopadhyay 2013; Bhutan STG §13.7. Child doses not capped here — check against adult maximum.</p>`;
    });
  },

  bonetumour(el, U) {
    el.innerHTML = `<h4>Bone pain or lump: what next? (NICE NG12)</h4><div class="row">${sel("age", "Patient", [["c", "Child or young person"], ["a", "Adult"]])}${sel("kind", "Problem", [["bone", "Unexplained bone pain or swelling"], ["xr", "X-ray suggests bone sarcoma"], ["lump", "Soft-tissue lump increasing in size"], ["us", "Ultrasound suggests sarcoma / uncertain with concern"]])}${sel("rf", "Night/rest pain, weight loss, fever, or pathological fracture", yn)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, c = g("age") === "c", k = g("kind"), out = U.$(".out", el), a = [];
      if (k === "bone") a.push(c ? "<b>Very urgent direct-access X-ray</b> (within 48 h)" : "X-ray; adults over 40 — think metastasis or myeloma");
      if (k === "xr") a.push(c ? "<b>Very urgent specialist referral — appointment within 48 hours</b>" : "<b>Suspected-cancer pathway referral</b>");
      if (k === "lump") a.push(c ? "<b>Very urgent direct-access ultrasound</b>" : "<b>Urgent direct-access ultrasound</b>");
      if (k === "us") a.push(c ? "<b>Very urgent referral (within 48 hours)</b>" : "<b>Suspected-cancer pathway referral</b>");
      if (g("rf") === "y") a.push("Red flags present — expedite; pain relief; protect the limb from fracture");
      a.push("Do not biopsy before discussion with the treating sarcoma team");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">NICE NG12 §1.11; Bhutan STG §13.16 (malignant features → prompt referral).</p>`;
    });
  }

  });
})();
