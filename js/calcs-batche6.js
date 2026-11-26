/* Batch E-6 calculators (26 Nov 2026).
   anthraxrx: CDC Guidelines for the Prevention and Treatment of Anthrax 2023 (MMWR RR-6) tables 6, 7, 12, 13 — oral treatment of cutaneous anthrax
   without meningitis and post-exposure prophylaxis; adults ≥ 18 y and children ≥ 1 month (read in the browser 26 Nov 2026; Bhutan zoonoses guideline
   reproduces these tables). kalaazarlamb: single-dose liposomal amphotericin B 10 mg/kg (Indian subcontinent first option — Scarpini 2022) and the
   FDA-labelled immunocompetent schedule 3 mg/kg/day days 1–5, 14, 21; 50 mg vials (NEML 2025). hydatidabz: Bhutan zoonoses guideline ch. 9 —
   albendazole 10–15 mg/kg/day in 2 divided doses, up to 400 mg twice daily, continuously; 400 mg tablet (NEML 2025). */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const f = v => (Math.round(v * 10) / 10).toLocaleString("en");
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  anthraxrx(el, U) {
    el.innerHTML = `<h4>Anthrax: oral dose (cutaneous, no meningitis) or post-exposure prophylaxis — CDC 2023</h4><div class="row">${num("age", "Age (years; infants: 0.1 = about 1 month)", 30, 0.1)}${num("wt", "Weight (kg)", 60)}${sel("use", "Use", [["rx", "Treatment — cutaneous, no systemic signs"], ["pep", "Post-exposure prophylaxis"]])}${sel("dr", "Drug", [["cip", "Ciprofloxacin"], ["dox", "Doxycycline"], ["lev", "Levofloxacin"], ["amx", "Amoxicillin (penicillin-susceptible strain only)"], ["pen", "Penicillin VK (penicillin-susceptible strain only)"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, age = parseFloat(g("age")), wt = parseFloat(g("wt")), use = g("use"), dr = g("dr"), out = U.$(".out", el);
      if (!(age >= 0) || !(wt > 0)) { out.innerHTML = "<p>Enter age and weight.</p>"; return; }
      if (age < 1 / 12) { out.innerHTML = "<p>Under 1 month: not covered by these tables — seek specialist advice.</p>"; return; }
      const adult = age >= 18, rx = use === "rx"; let h = "";
      if (adult) {
        h = { cip: "<b>500 mg every 12 hours</b>", dox: "<b>100 mg every 12 hours</b>", lev: rx ? "<b>750 mg every 24 hours</b>" : "<b>500 mg every 24 hours</b>", amx: "<b>1 g every 8 hours</b>", pen: "<b>500 mg every 6 hours</b>" }[dr];
      } else {
        if (dr === "cip") h = `<b>${f(Math.min(15 * wt, 500))} mg every 12 hours</b> (15 mg/kg, max 500 mg/dose)`;
        if (dr === "dox") h = wt >= 45 ? "<b>100 mg every 12 hours</b>" : `<b>${f(Math.min(2.2 * wt, 100))} mg every 12 hours</b> (2.2 mg/kg, max 100 mg/dose)`;
        if (dr === "lev") h = wt >= 50 ? (rx ? "<b>750 mg every 24 hours</b>" : "<b>500 mg every 24 hours</b>") : `<b>${f(Math.min(8 * wt, 250))} mg every 12 hours</b> (8 mg/kg, max 250 mg/dose)`;
        if (dr === "amx") h = `<b>${f(Math.min(25 * wt, rx ? 1000 : 500))} mg every 8 hours</b> (25 mg/kg, max ${rx ? "1 g" : "500 mg"}/dose)`;
        if (dr === "pen") { const pl = Math.min(12.5 * wt, 500), ph = Math.min(18.7 * wt, 500); h = `<b>${pl === ph ? f(pl) : f(pl) + "–" + f(ph)} mg every 6 hours</b> (12.5–18.7 mg/kg, max 500 mg/dose)`; }
      }
      const dur = rx ? "for <b>7–10 days</b> (or until clinically stable); 60 days in total if there was also an aerosol exposure" : "for <b>7 days</b> after skin or eating exposure in healthy adults 18–65; <b>60 days</b> after aerosol exposure, or if over 65 or immunocompromised";
      out.innerHTML = `<p>${h} orally ${dur}.</p><p><small>Systemic illness, a head or neck lesion, extensive oedema or possible meningitis: <b>admit for IV combination therapy</b> — this tool is not for that. Penicillins only when the isolate is known to be susceptible. Source: CDC 2023 (Bhutan zoonoses guideline).</small></p>`;
    });
  },

  kalaazarlamb(el, U) {
    el.innerHTML = `<h4>Kala-azar: liposomal amphotericin B dose</h4><div class="row">${num("wt", "Weight (kg)", 30)}${sel("rg", "Regimen", [["sd", "Single dose 10 mg/kg (Indian subcontinent first option)"], ["fda", "FDA schedule: 3 mg/kg/day on days 1–5, 14 and 21 (immunocompetent)"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const wt = parseFloat(U.$("[data-k=wt]", el).value), rg = U.$("[data-k=rg]", el).value, out = U.$(".out", el);
      if (!(wt > 0)) { out.innerHTML = "<p>Enter weight.</p>"; return; }
      const mk = d => `<b>${f(d)} mg</b> = ${f(d / 50)} × 50 mg vials (round up to ${Math.ceil(d / 50 - 1e-9)} vials to prepare)`;
      out.innerHTML = rg === "sd"
        ? `<p>Single infusion: ${mk(10 * wt)} (10 mg/kg).</p><p><small>Immunocompetent patients. HIV co-infection: combination with miltefosine — specialist. Source: Scarpini 2022; Bhutan NEML 2025 (50 mg vial).</small></p>`
        : `<p>Each dose: ${mk(3 * wt)} (3 mg/kg) on days 1, 2, 3, 4, 5, 14 and 21 — total ${f(21 * wt)} mg.</p><p><small>Immunocompromised: 4 mg/kg on days 1–5, 10, 17, 24, 31 and 38 (FDA). Source: FDA label via the drug monograph.</small></p>`;
    });
  },

  hydatidabz(el, U) {
    el.innerHTML = `<h4>Hydatid disease: albendazole dose (Bhutan zoonoses guideline)</h4><div class="row">${num("wt", "Weight (kg)", 60)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const wt = parseFloat(U.$("[data-k=wt]", el).value), out = U.$(".out", el);
      if (!(wt > 0)) { out.innerHTML = "<p>Enter weight.</p>"; return; }
      const lo = Math.min(10 * wt / 2, 400), hi = Math.min(15 * wt / 2, 400);
      out.innerHTML = `<p><b>${lo === hi ? f(lo) : f(lo) + "–" + f(hi)} mg twice daily</b> with a fatty meal (10–15 mg/kg/day in 2 doses, max 400 mg per dose), <b>continuously</b> — no monthly breaks — for at least 3–6 months.</p><p><small>NEML tablet 400 mg; children may need part-tablets. Monitor LFTs monthly and CBC every 2–4 weeks. Not in pregnancy or before lung-cyst surgery.</small></p>`;
    });
  }

  });
})();
