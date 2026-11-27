/* Batch E-9b calculators (27 Nov 2026) — approach pages.
   fevertraffic: NICE NG143 Fever in under 5s, table 2 traffic light (2013) with APLS tachycardia (table 1) and age-specific tachypnoea; any red = high
     risk, any amber (no red) = intermediate, else low; actions from recs 1.4.2–1.4.5 and 1.5.2–1.5.12.
   rashsort: pattern → differential, built from the tables on the rash-approach page (Merck lesion morphology; NICE NG240 red flags; Bhutan IMNCI
     fever-with-rash differential; STG ch. 16). Educational sorter, not a diagnosis. */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  fevertraffic(el, U) {
    const red = ["Pale, mottled, ashen or blue skin, lips or tongue", "No response to social cues", "Appears ill to a health professional", "Does not wake, or if roused does not stay awake", "Weak, high-pitched or continuous cry", "Grunting", "Moderate or severe chest indrawing", "Reduced skin turgor", "Non-blanching rash", "Bulging fontanelle", "Neck stiffness", "Status epilepticus", "Focal neurological signs or focal seizures"];
    const amb = ["Pallor reported by parent/carer", "Not responding normally to social cues / no smile", "Wakes only with prolonged stimulation", "Decreased activity", "Nasal flaring", "Crackles in the chest", "Capillary refill 3 seconds or more", "Dry mucous membranes", "Poor feeding (infant)", "Reduced urine output", "Fever for 5 days or more", "Rigors", "Swelling of a limb or joint", "Not using a limb / not bearing weight"];
    el.innerHTML = `<h4>Feverish child under 5: NICE traffic light</h4><div class="row">${num("age", "Age (months)", 18, 1)}${num("t", "Temperature (°C)", 38.5, 0.1)}${num("hr", "Heart rate (/min)", 130, 1)}${num("rr", "Respiratory rate (/min)", 30, 1)}${num("sp", "SpO₂ in air (%)", 98, 1)}</div><p class="qn" style="margin:6px 0 2px"><b>Red features</b></p><div class="row">${red.map((t, i) => `<label><input type="checkbox" data-k="r${i}"> ${t}</label>`).join("")}</div><p class="qn" style="margin:6px 0 2px"><b>Amber features</b></p><div class="row">${amb.map((t, i) => `<label><input type="checkbox" data-k="a${i}"> ${t}</label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const v = k => parseFloat(U.$(`[data-k=${k}]`, el).value), c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      const age = v("age"), t = v("t"), hr = v("hr"), rr = v("rr"), sp = v("sp");
      if (!(age >= 0) || age > 60) { out.innerHTML = "<p>For children aged 0–5 years (0–60 months).</p>"; return; }
      const R = red.filter((_, i) => c("r" + i)), A = amb.filter((_, i) => c("a" + i));
      if (age < 3 && t >= 38) R.push("age under 3 months with temperature ≥ 38 °C");
      if (rr > 60) R.push("respiratory rate above 60");
      if (age >= 3 && age < 6 && t >= 39) A.push("age 3–6 months with temperature ≥ 39 °C");
      if ((age >= 6 && age <= 12 && rr > 50) || (age > 12 && rr > 40 && rr <= 60)) A.push("tachypnoea for age");
      if (sp <= 95) A.push("SpO₂ 95% or less in air");
      const tachy = age < 12 ? hr > 160 : age < 24 ? hr > 150 : hr > 140;
      if (tachy) A.push("tachycardia for age (APLS)");
      let h;
      if (R.length) h = `<p style="margin:0"><b style="color:#c0392b">RED — high risk</b>: ${R.join("; ")}.</p><p style="margin:6px 0 0">Life-threatening (airway, breathing, circulation, consciousness): emergency transfer. Otherwise urgent paediatric referral. In hospital: FBC, blood culture, CRP, urine; consider LP, chest X-ray, electrolytes and gas. Shocked, unrousable or meningococcal signs: parenteral ceftriaxone/cefotaxime now (+ ampicillin under 3 months); 10 mL/kg 0.9% saline if shocked.</p>`;
      else if (A.length) h = `<p style="margin:0"><b style="color:#d68910">AMBER — intermediate risk</b>: ${A.join("; ")}.</p><p style="margin:6px 0 0">No diagnosis: refer for paediatric assessment or give a safety net (written warning signs, fixed review time, direct access). Paediatric work-up if no source: urine, FBC, CRP, blood culture; consider LP under 1 year; chest X-ray if > 39 °C and WBC > 20.</p>`;
      else h = `<p style="margin:0"><b style="color:#1e8449">GREEN — low risk</b> (only if all of: normal colour, normal response, stays awake, strong cry, moist mucosa, normal skin and eyes).</p><p style="margin:6px 0 0">Home care with advice; test urine; look for pneumonia; no routine blood tests or chest X-ray; no antibiotics for fever without a source.</p>`;
      out.innerHTML = h + `<p class="qn" style="margin:6px 0 0">Temperature alone does not identify serious illness after 6 months; fever ≥ 5 days → check for Kawasaki disease. Paracetamol (15 mg/kg 6-hourly) or ibuprofen only if distressed.${age < 3 ? " Under 3 months: see the febrile young infant page." : ""}</p>`;
    });
  },

  rashsort(el, U) {
    el.innerHTML = `<h4>Rash pattern sorter</h4><div class="row">${sel("f", "Fever or unwell", [["y", "Yes"], ["n", "No"]])}${sel("m", "Main lesion", [["pet", "Petechiae / purpura (non-blanching)"], ["mac", "Red macules or papules (blanching)"], ["ves", "Vesicles / blisters"], ["whe", "Wheals (hives) / swelling"], ["tar", "Target lesions, mucosal erosions, skin pain or peeling"], ["sca", "Scaly patches or plaques"], ["pus", "Pustules / crusts"], ["ery", "Spreading tender redness"], ["gen", "Whole-body redness (erythroderma)"]])}${sel("a", "Age group", [["c", "Child"], ["d", "Adult"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, f = g("f") === "y", m = g("m"), ch = g("a") === "c", out = U.$(".out", el);
      const s = ch ? "child" : "adult";
      const map = {
        pet: f ? [`<b>Emergency: meningococcal disease</b> until proven otherwise — ceftriaxone or benzylpenicillin now, emergency transfer (${P("meningitis-" + s, "meningitis")}, ${P("sepsis-" + s, "sepsis")})`, `Severe dengue — ${P("dengue-" + s, "dengue")}`, `Scrub typhus / rickettsia — ${P("scrub-" + s, "scrub typhus")}`, "Leukaemia or aplasia with infection — FBC"] : ["Low platelets (ITP, leukaemia, aplasia, drugs) — FBC and film", ch ? `IgA vasculitis (palpable purpura on legs/buttocks) — ${P("hsp-child", "HSP")}` : "Vasculitis, anticoagulants, scurvy", "Trauma, coughing/vomiting (face, above the nipples)"],
        mac: f ? [`Measles (cough, coryza, red eyes, unvaccinated) — ${P("measles-child", "measles")}; rubella`, `Scrub typhus (trunk first, eschar) — ${P("scrub-" + s, "scrub typhus")}`, `Dengue (flush, then petechiae) — ${P("dengue-" + s, "dengue")}`, ch ? `Kawasaki if fever ≥ 5 days — ${P("kawasaki-child", "Kawasaki")}` : `HIV seroconversion / secondary syphilis — ${P("sti-adult", "STI")}`, "Drug eruption (new drug in 8 weeks); other viral rashes"] : ["Viral exanthem, drug eruption", "Pityriasis rosea (herald patch, trunk)", "Secondary syphilis (palms and soles)"],
        ves: f ? [`Chickenpox — ${P("chickenpox-child", "chickenpox")}`, `Hand, foot and mouth disease — ${P("hfmd-child", "HFMD")}`, "Eczema herpeticum (punched-out erosions on eczema) — systemic aciclovir, same-day referral", "Disseminated zoster or HSV in immunocompromise"] : ["Herpes simplex, herpes zoster (dermatomal)", "Acute contact dermatitis", "Bullous impetigo; insect bites (papular urticaria)", "Bullous pemphigoid / pemphigus (older adults) — refer"],
        whe: [f ? `Urticaria with infection (often viral)` : "Acute urticaria (food, drug, sting, infection) — cetirizine", `<b>Anaphylaxis</b> if breathing, circulation or gut involved — IM adrenaline (${P("anaphylaxis-" + s, "anaphylaxis")})`, "Chronic urticaria if > 6 weeks — CBC, ESR, CRP", "Angioedema without wheals: ACE inhibitor, hereditary angioedema"],
        tar: [`<b>SJS/TEN</b> — stop the suspect drug, admit (${P("sjs-" + s, "SJS/TEN")})`, "Erythema multiforme (target lesions, often after herpes)", ch ? `Kawasaki (red lips, peeling fingers) — ${P("kawasaki-child", "Kawasaki")}` : "Staphylococcal scalded skin / toxic shock"],
        sca: ["Psoriasis (elbows, knees, scalp, nail pits)", "Tinea (ring, scaly edge) — scrape before steroids", "Seborrhoeic dermatitis (scalp, face folds)", "Atopic or chronic eczema", "Pityriasis rosea"],
        pus: [`Impetigo, folliculitis, boils — ${P("ssti-" + s, "skin infection")}`, ch ? "Infected eczema, scabies with infection" : "Acne, rosacea", f ? "Generalised pustular psoriasis — same-day specialist" : "Candida (satellite pustules in folds)"],
        ery: [`Cellulitis / erysipelas — ${P("ssti-" + s, "skin infection")}`, "<b>Necrotising infection</b> if pain out of proportion, rapid spread, dusky skin — surgery", "DVT or acute gout can mimic", "Contact dermatitis (itchy, no fever)"],
        gen: ["<b>Erythroderma</b>: psoriasis, eczema, drug reaction (DRESS), lymphoma — admit; fluids, temperature, infection risk", "Same-day specialist assessment"]
      }[m];
      out.innerHTML = `<p style="margin:0">Consider:</p><ul style="margin:4px 0 0">${map.map(x => `<li>${x}</li>`).join("")}</ul><p class="qn" style="margin:6px 0 0">Always examine all skin, mouth, eyes, genitals, nails and scalp; ask about new medicines, contacts, vaccination, travel, sexual history. Fever with rash is notifiable in Bhutan (IMNCI).</p>`;
    });
  }

  });
})();
