/* Batch E-3 calculators (26 Nov 2026). Part 1: pertussisrx. Part 2: ptxplan, ottawasah, migrainechild, bellsplan (sources above each).
   pertussisrx: CDC 2005 Recommended Antimicrobial Agents for the Treatment and Postexposure Prophylaxis of Pertussis (MMWR RR-14; still the dosing
   reference linked from CDC's current clinical-care page, updated Aug 2026), cross-checked with Bhutan VPD Integrated Surveillance Guideline ch. 7
   (azithromycin 5 days, clarithromycin 7 days, erythromycin 14 days, co-trimoxazole 14 days over 2 months; azithromycin 10 mg/kg/day x5 under 6 months).
   Same regimen for treatment and post-exposure prophylaxis. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const f = v => (Math.round(v * 10) / 10).toLocaleString("en");
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  pertussisrx(el, U) {
    el.innerHTML = `<h4>Pertussis: antibiotic dose (treatment or prophylaxis)</h4><div class="row">${num("am", "Age (months; adults: enter 216 or more)", 3, 1)}${num("wt", "Weight (kg)", 5)}${sel("dr", "Drug", [["az", "Azithromycin (preferred)"], ["cl", "Clarithromycin"], ["er", "Erythromycin"], ["tm", "Co-trimoxazole (if macrolide not possible)"]])}${sel("pg", "Pregnant or breastfeeding?", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, am = parseFloat(g("am")), wt = parseFloat(g("wt")), dr = g("dr"), pg = g("pg") === "y", out = U.$(".out", el);
      if (!(am >= 0) || !(wt > 0)) { out.innerHTML = "<p>Enter age and weight.</p>"; return; }
      const adult = am >= 216; let h = "";
      if (dr === "az") {
        if (adult) h = "<b>500 mg</b> once on day 1, then <b>250 mg</b> once daily on days 2–5.";
        else if (am < 6) h = `<b>${f(10 * wt)} mg</b> (10 mg/kg) once daily for <b>5 days</b>.${am < 1 ? " Preferred drug under 1 month (erythromycin carries a pyloric stenosis risk); watch for vomiting or feeding intolerance." : ""}`;
        else h = `Day 1: <b>${f(Math.min(10 * wt, 500))} mg</b> (10 mg/kg, max 500 mg); days 2–5: <b>${f(Math.min(5 * wt, 250))} mg</b> once daily (5 mg/kg, max 250 mg).`;
        h += "<br><small>Bhutan: oral azithromycin is not on the NEML 2025 (IV only) — check local stock.</small>";
      } else if (dr === "cl") {
        if (am < 1) h = "<b>Not recommended under 1 month.</b> Use azithromycin.";
        else if (adult) h = "<b>500 mg</b> twice daily for <b>7 days</b> (1 g/day).";
        else { const d = Math.min(7.5 * wt, 500); h = `<b>${f(d)} mg</b> twice daily for <b>7 days</b> (15 mg/kg/day in 2 doses, max 1 g/day).`; }
        h += "<br><small>Bhutan: clarithromycin is on the NEML for H. pylori only.</small>";
      } else if (dr === "er") {
        if (adult) h = "<b>500 mg</b> four times daily for <b>14 days</b> (2 g/day).";
        else { const lo = Math.min(10 * wt, 500), hi = Math.min(12.5 * wt, 500); h = `<b>${lo === hi ? f(lo) : f(lo) + "–" + f(hi)} mg</b> four times daily for <b>14 days</b> (40–50 mg/kg/day in 4 doses, max 2 g/day).${am < 1 ? "<br><b>Under 1 month: not preferred</b> — infantile hypertrophic pyloric stenosis risk. Use only if azithromycin is unavailable, and watch for projectile vomiting." : ""}`; }
        h += "<br><small>Bhutan NEML: erythromycin 250 mg tablets only (no syrup).</small>";
      } else {
        if (am < 2) h = "<b>Contraindicated under 2 months.</b>";
        else if (pg) h = "<b>Do not use in pregnancy or breastfeeding</b> (CDC). Use a macrolide.";
        else if (adult) h = "<b>Trimethoprim 160 mg + sulfamethoxazole 800 mg</b> twice daily for <b>14 days</b>.";
        else h = `<b>Trimethoprim ${f(4 * wt)} mg</b> (+ sulfamethoxazole ${f(20 * wt)} mg) twice daily for <b>14 days</b> (TMP 8 mg/kg/day in 2 doses).`;
      }
      out.innerHTML = `<p>${h}</p><p><small>Treat within 3 weeks of cough onset from 1 year of age; within 6 weeks under 1 year and in pregnant women near term. Prophylaxis uses the same regimen.</small></p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  /* ptxplan: BTS 2023 pneumothorax pathway (Roberts et al., Thorax 2023; high-risk characteristics as reproduced in Shorthose et al.,
     Breathe 2023 fig. 1). Adults; used as a guide from about 14 years. Size only judges whether a procedure is safe. */
  ptxplan(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Spontaneous pneumothorax: BTS 2023 pathway</h4><div class="checks">${chk("ten", "Signs of tension (shock, tracheal shift, falling SpO₂)")}${chk("hd", "Haemodynamic compromise")}${chk("hx", "Significant hypoxia")}${chk("bi", "Bilateral pneumothorax")}${chk("ld", "Underlying lung disease (COPD, TB, cystic lung disease…)")}${chk("sm", "Age ≥ 50 with significant smoking history")}${chk("hb", "Haemopneumothorax")}${chk("sy", "Significant pain or breathlessness")}${chk("rt", "Can return quickly if worse, and has support at home")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      let h;
      if (c("ten")) h = "<b>Tension pneumothorax:</b> decompress immediately (do not wait for an X-ray), then insert a chest drain. Transfer chest injuries to a higher centre.";
      else if (["hd", "hx", "bi", "ld", "sm", "hb"].some(c)) h = "<b>High-risk:</b> chest drain if it is safe to place one (small-bore 8–14 Fr Seldinger is usually enough), admit, oxygen to target, treat the underlying disease. Seek surgical advice if the air leak lasts 5–7 days.";
      else if (!c("sy")) h = c("rt") ? "<b>Minimally symptomatic PSP:</b> conservative care is appropriate <b>whatever the size</b>. Analgesia, written return advice, chest X-ray in 2–4 weeks." : "<b>Minimally symptomatic PSP</b>, but cannot return quickly: observe in hospital before discharge (local adaptation).";
      else h = "<b>Symptomatic PSP, not high-risk:</b> choose with the patient — needle aspiration, an ambulatory device (if support and follow-up are available) or a chest drain. If aspiration fails, insert a drain.";
      out.innerHTML = `<p>${h}</p><p><small>A procedure is only safe if there is enough air between lung and chest wall at the chosen site. No flying until 7 days after an X-ray confirms full resolution; no scuba diving unless a definitive operation has been done.</small></p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  /* ottawasah: Ottawa SAH Rule (Perry et al., JAMA 2013;310:1248): alert patients with new severe non-traumatic headache peaking within 1 hour
     and no new neurological deficit. Any criterion = investigate. Sensitivity 100%, specificity 15.3%. */
  ottawasah(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Ottawa subarachnoid haemorrhage rule</h4><div class="checks">${chk("ok", "<b>Applies:</b> alert adult, new severe non-traumatic headache peaking within 1 hour, no new neurological deficit")}${chk("age", "Age 40 years or more")}${chk("neck", "Neck pain or stiffness")}${chk("loc", "Witnessed loss of consciousness")}${chk("ex", "Onset during exertion")}${chk("tc", "Thunderclap: instantly peaking pain")}${chk("flex", "Limited neck flexion on examination")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      if (!c("ok")) { out.innerHTML = "<p>The rule only applies to alert adults with a new severe non-traumatic headache that peaked within 1 hour and no new neurological deficit. Outside these, use clinical judgement — a neurological deficit needs imaging anyway.</p>"; return; }
      const n = ["age", "neck", "loc", "ex", "tc", "flex"].filter(c).length;
      out.innerHTML = n ? `<p><b>${n} ${n > 1 ? "criteria" : "criterion"} present — investigate for subarachnoid haemorrhage</b> (urgent CT; lumbar puncture if CT is negative and the history is suggestive).</p>` : "<p><b>No criteria present — subarachnoid haemorrhage is ruled out by the rule</b> (100% sensitivity in the validation cohort). Treat the headache and give return advice.</p>";
      out.innerHTML += "<p><small>Specificity is low (15.3%): most patients who trigger the rule will not have SAH.</small></p>";
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  /* migrainechild: Bhutan STG 2024 §12.1.3 (ibuprofen 7.5–10 mg/kg/dose TDS, paracetamol 15 mg/kg/dose TDS; propranolol 10–20 mg TDS);
     caps from FDA labels via the drug monographs (ibuprofen max 400 mg/dose; paracetamol max 1 g/dose, 75 mg/kg/day and 4 g/day from 2 years,
     60 mg/kg/day under 2 years). */
  migrainechild(el, U) {
    el.innerHTML = `<h4>Child migraine: attack doses</h4><div class="row">${num("wt", "Weight (kg)", 25)}${num("ay", "Age (years)", 9, 1)}${sel("as", "Asthma?", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, wt = parseFloat(g("wt")), ay = parseFloat(g("ay")), out = U.$(".out", el);
      if (!(wt > 0) || !(ay >= 0)) { out.innerHTML = "<p>Enter weight and age.</p>"; return; }
      const iLo = Math.min(7.5 * wt, 400), iHi = Math.min(10 * wt, 400), p = Math.min(15 * wt, 1000), pDay = Math.min((ay < 2 ? 60 : 75) * wt, 4000);
      let h = `<p><b>Ibuprofen:</b> ${iLo === iHi ? f(iLo) : f(iLo) + "–" + f(iHi)} mg per dose (7.5–10 mg/kg, max 400 mg), up to three times daily. NEML has the 400 mg tablet only.</p>`;
      h += `<p><b>Paracetamol:</b> ${f(p)} mg per dose (15 mg/kg, max 1 g) = ${f(p / 50)} mL of 250 mg/5 mL syrup; no more than ${f(pDay)} mg in 24 hours.</p>`;
      h += "<p>Give at the <b>first sign</b> of an attack, with fluids and rest. Keep painkiller days below 15 a month to avoid medication overuse headache.</p>";
      if (ay < 16) h += "<p><small>No aspirin under 16 years (Reye syndrome).</small></p>";
      h += g("as") === "y" ? "<p><small>Prevention: <b>avoid propranolol</b> (asthma). Lifestyle and CBT first; specialist advice for drugs.</small></p>" : "<p><small>Prevention if frequent or disabling (STG): propranolol 10–20 mg three times daily; lifestyle and CBT first.</small></p>";
      out.innerHTML = h;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  /* bellsplan: AAO-HNSF 2013 (prednisolone 50 mg x10 d, or 60 mg x5 d then -10 mg/day, within 72 h, age >=16; antiviral never alone, optional
     with steroid; eye protection; refer at 3 months); Engström 2008 (valaciclovir 1 g TDS x7 d); Babl 2022 (children ~1 mg/kg x10 d, no
     significant benefit); STG §7.5 (tape eye at night; review 1–2 months). Aciclovir zoster dose from the FDA label (monograph). */
  bellsplan(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Bell's palsy: treatment plan</h4><div class="row">${num("ay", "Age (years)", 34, 1)}${num("wt", "Weight (kg)", 60)}${num("hr", "Hours since onset", 24, 1)}${sel("hb", "House-Brackmann grade now", [["2", "II – mild"], ["3", "III – moderate"], ["4", "IV – moderately severe"], ["5", "V – severe"], ["6", "VI – total paralysis"]])}</div><div class="checks">${chk("fs", "Forehead spared, or limb/speech/other cranial nerve signs")}${chk("rh", "Vesicles in ear or mouth, or severe ear pain (Ramsay Hunt)")}${chk("om", "Ear discharge or abnormal ear drum")}${chk("eye", "Cannot close the eye completely")}${chk("dm", "Diabetes")}${chk("pg", "Pregnant")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, out = U.$(".out", el);
      const ay = parseFloat(g("ay").value), wt = parseFloat(g("wt").value), hr = parseFloat(g("hr").value), hb = +g("hb").value;
      if (!(ay >= 0) || !(wt > 0) || !(hr >= 0)) { out.innerHTML = "<p>Enter age, weight and hours since onset.</p>"; return; }
      if (c("fs")) { out.innerHTML = "<p><b>Not Bell's palsy until proven otherwise.</b> A spared forehead or other neurological signs suggest stroke or another cause — urgent assessment (stroke pathway).</p>"; return; }
      let h = "";
      if (c("rh")) h += "<p><b>Ramsay Hunt syndrome:</b> aciclovir 800 mg five times daily for 7–10 days (adult zoster dose) plus prednisolone; refer to ENT.</p>";
      if (c("om")) h += "<p><b>Ear disease:</b> treat otitis media and refer to ENT — this is not idiopathic Bell's palsy.</p>";
      if (ay >= 16) {
        h += hr <= 72 ? "<p><b>Prednisolone 50 mg once daily for 10 days</b> (or 60 mg daily for 5 days, then reduce by 10 mg a day over 5 days).</p>" : "<p><b>More than 72 hours:</b> the benefit of a steroid is uncertain — discuss; eye care is still essential.</p>";
        if (hr <= 72 && hb >= 5 && !c("rh")) h += "<p>Severe or complete paralysis: an antiviral <b>with</b> the steroid is an option after discussion (valaciclovir 1 g three times daily for 7 days — not on NEML). Never an antiviral alone.</p>";
      } else {
        const d = Math.min(wt, 50);
        h += `<p><b>Child or adolescent under 16:</b> most recover without treatment; steroid benefit is unproven (Babl 2022). If treating after discussion — e.g. severe palsy within 72 hours — the trial used prednisolone about 1 mg/kg once daily for 10 days (here ${f(d)} mg; capped at the adult 50 mg).</p>`;
      }
      if (c("dm")) h += "<p><small>Diabetes: check glucose before and during the steroid course; adjust treatment.</small></p>";
      if (c("pg")) h += "<p><small>Pregnancy: individual decision on steroid; check blood pressure and glucose.</small></p>";
      h += (c("eye") || hb >= 4) ? "<p><b>Eye:</b> carboxymethylcellulose 1% drops often by day, eye ointment at night and tape the lid shut during sleep; sunglasses outdoors. Same-day eye review for pain, redness or blurred vision.</p>" : "<p><b>Eye:</b> lubricant drops if the eye feels dry; check closure again at review.</p>";
      h += "<p><small>Review in 1–2 weeks (eye) and at 1–2 months; refer if new neurology or eye symptoms at any time, or incomplete recovery at 3 months.</small></p>";
      out.innerHTML = h;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  });
})();
