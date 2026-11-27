/* Batch E-8 calculators (27 Nov 2026).
   covidflurx: WHO living guideline on drugs for covid-19, 14th iteration (BMJ Nov 2023) — severity and risk strata; WHO Clinical practice guidelines
   for influenza 2024 (executive summary); oseltamivir FDA treatment doses (weight bands 1–12 years, 3 mg/kg under 1 year, 75 mg from 13 years). */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const f = v => (Math.round(v * 10) / 10).toLocaleString("en");
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  covidflurx(el, U) {
    el.innerHTML = `<h4>COVID-19 or influenza: what does WHO recommend for this patient?</h4><div class="row">${sel("v", "Virus", [["c", "COVID-19"], ["f", "Influenza"]])}${sel("s", "Severity", [["n", "Non-severe"], ["s", "Severe (SpO₂ < 90%, pneumonia signs, severe distress)"], ["x", "Critical (ARDS, sepsis, shock, ventilation)"]])}${sel("r", "Risk group", [["l", "Low (no risk factors)"], ["m", "Moderate (over 65, diabetes, obesity, chronic heart/lung/kidney/liver disease, cancer, disability)"], ["h", "High (immunodeficiency, transplant or autoimmune disease on immunosuppressants)"]])}${num("age", "Age (years; infants e.g. 0.5)", 40, 0.1)}${num("wt", "Weight (kg)", 60)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, v = g("v"), s = g("s"), rk = g("r"), age = parseFloat(g("age")), wt = parseFloat(g("wt")), out = U.$(".out", el);
      let h = "";
      if (v === "c") {
        if (s === "n") h = { h: "<b>Nirmatrelvir/ritonavir</b> (strong); remdesivir or molnupiravir (conditional) if it cannot be used. No corticosteroid.", m: "<b>Nirmatrelvir/ritonavir</b> (conditional). Not remdesivir or molnupiravir. No corticosteroid.", l: "<b>No antiviral</b> and no corticosteroid — supportive care, isolation, warning signs." }[rk] + (rk !== "l" ? " Start within 5 days of symptoms; check every co-medication for interactions; not on Bhutan NEML — confirm supply." : "");
        else h = `<b>Systemic corticosteroid</b> (strong): dexamethasone 6 mg once daily oral or IV for up to 10 days${age < 18 ? " (children: specialist dosing)" : ""}. Add <b>baricitinib</b> or an <b>IL-6 receptor blocker</b> (strong) where available. Oxygen; thromboprophylaxis.${s === "x" ? " Remdesivir: conditional recommendation <b>against</b> in critical illness." : ""}`;
      } else {
        let ose = "";
        if (age >= 13 || wt > 40) ose = "75 mg";
        else if (age >= 1) ose = wt <= 15 ? "30 mg" : wt <= 23 ? "45 mg" : "60 mg";
        else if (age >= 0.04) ose = `${f(3 * wt)} mg (3 mg/kg)`;
        const oseTxt = ose ? `<b>Oseltamivir ${ose} twice daily for 5 days</b>` : "Oseltamivir: under 2 weeks old — specialist dosing";
        if (s === "n") h = rk === "l" ? "<b>No antiviral</b> (WHO: strong against oseltamivir and conditional against baloxavir for non-severe illness in low-risk people). <b>No antibiotic</b> if bacterial infection is unlikely." : "<b>Baloxavir</b> (conditional) for non-severe influenza at high risk of progression — not on NEML. WHO advises against oseltamivir for non-severe influenza. No antibiotic unless bacterial infection is likely.";
        else h = `${oseTxt} (WHO: conditional for severe influenza). <b>No corticosteroids</b>, no macrolides without bacterial infection. Oxygen and supportive care.`;
      }
      out.innerHTML = `<p>${h}</p><p><small>${!(wt > 0) ? "Enter weight for oseltamivir doses. " : ""}Reduce oseltamivir in kidney impairment (CrCl 30–60: 30 mg twice daily). Sources: WHO COVID-19 drugs guideline Nov 2023; WHO influenza guideline 2024; FDA oseltamivir label.</small></p>`;
    });
  },

  morphinetitrate(el, U) {
    el.innerHTML = `<h4>Oral morphine: start or re-titrate (adults)</h4><div class="row">${num("reg", "Regular oral morphine in the last 24 h (mg; 0 if not on morphine)", 0)}${num("res", "Rescue morphine taken in the last 24 h (total mg)", 0)}${sel("kid", "Kidney or liver impairment (moderate–severe)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, reg = parseFloat(g("reg")) || 0, res = parseFloat(g("res")) || 0, kid = g("kid") === "y", out = U.$(".out", el);
      if (kid) { out.innerHTML = "<p><b>Seek specialist advice before starting or increasing strong opioids</b> (NICE CG140). Smaller doses and longer intervals are usual.</p>"; return; }
      if (reg === 0 && res === 0) { out.innerHTML = `<p>Opioid-naive: <b>20–30 mg oral morphine per day</b> — e.g. immediate-release <b>5 mg every 4 hours</b>, or sustained-release <b>10–15 mg twice daily</b>, plus <b>5 mg immediate-release rescue</b> as needed. Prescribe a regular laxative; anti-emetic available; review daily while titrating.</p><p><small>NICE CG140 (2016). NEML: morphine 10 mg tablet, 15 mg ER tablet.</small></p>`; return; }
      const tot = reg + res, r5 = v => Math.max(2.5, Math.round(v / 2.5) * 2.5);
      out.innerHTML = `<p>Total used in 24 h: <b>${f(tot)} mg</b>. New regular dose: <b>${f(r5(tot / 6))} mg immediate-release every 4 hours</b>, or sustained-release <b>${f(r5(tot / 2))} mg twice daily</b>. Rescue dose about <b>${f(r5(tot / 6))} mg</b> (one-sixth of the daily total) as needed. If giving subcutaneously: about <b>${f(r5(tot / 2))} mg per 24 h</b> (half the oral dose).</p><p><small>Rescue 1/6 rule and oral:SC 2:1 ratio are common practice, not stated in NICE CG140 or the STG. If drowsy, confused or twitching (toxicity), do not increase — reduce. Not for opioid conversion other than morphine.</small></p>`;
    });
  },

  brucellarx(el, U) {
    el.innerHTML = `<h4>Brucellosis without focal disease: doses (Bhutan zoonoses guideline)</h4><div class="row">${num("age", "Age (years)", 35, 0.1)}${num("wt", "Weight (kg)", 60)}${sel("p", "Pregnancy", [["no", "Not pregnant"], ["e", "Pregnant, under 36 weeks"], ["l", "Pregnant, 36 weeks or more"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, age = parseFloat(g("age")), wt = parseFloat(g("wt")), p = g("p"), out = U.$(".out", el);
      if (!(age >= 0) || !(wt > 0)) { out.innerHTML = "<p>Enter age and weight.</p>"; return; }
      const rng = (lo, hi, mx) => { const a = Math.min(lo, mx), b = Math.min(hi, mx); return a === b ? f(a) : f(a) + "–" + f(b); };
      let h;
      if (p !== "no") h = p === "e" ? "<b>Rifampicin 600–900 mg once daily + cotrimoxazole 960 mg twice daily</b> (with folic acid), both for 6 weeks." : "<b>Rifampicin 600–900 mg once daily alone</b> until delivery (no cotrimoxazole after 36 weeks — kernicterus); after delivery, the adult combination to complete treatment.";
      else if (age >= 18) h = `<b>Doxycycline 100 mg twice daily for 6 weeks</b> plus <b>gentamicin ${f(5 * wt)} mg IM/IV once daily for 7–10 days</b> (5 mg/kg); <i>or</i> doxycycline 100 mg twice daily plus <b>rifampicin 600–900 mg once daily</b>, both for 6 weeks.`;
      else if (age >= 8) h = `<b>Doxycycline ${rng(wt, 2 * wt, 100)} mg twice daily</b> (2–4 mg/kg/day, max 200 mg/day) plus <b>rifampicin ${rng(15 * wt, 20 * wt, 900)} mg/day</b> in 1–2 doses (15–20 mg/kg/day, max 600–900 mg/day), at least 6 weeks.`;
      else h = `<b>Cotrimoxazole: trimethoprim ${rng(5 * wt, 5 * wt, 240)} mg + sulfamethoxazole ${rng(25 * wt, 25 * wt, 1200)} mg twice daily</b> (TMP 10 mg/kg/day max 480 mg/day; SMX 50 mg/kg/day max 2.4 g/day) for 4–6 weeks; consider adding rifampicin ${rng(15 * wt, 20 * wt, 900)} mg/day. No doxycycline under 8 years.`;
      out.innerHTML = `<p>${h}</p><p><small>Spondylitis, neurobrucellosis, endocarditis, osteomyelitis: longer triple therapy — see the table. Exclude TB before rifampicin. Monitor serology at 6, 12, 18, 24 weeks.</small></p>`;
    });
  }

  });
})();
