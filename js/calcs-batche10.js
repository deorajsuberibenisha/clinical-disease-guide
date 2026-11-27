/* Batch E-10 calculators (27 Nov 2026) — dermatology.
   eczstep: NICE CG57 (severity table 1, stepped care table 2, potency by site/age: face mild [moderate 3–5 d severe flare], axillae/groin moderate–potent
     7–14 d, no potent < 12 months, no very potent in children) + Bhutan STG §16.2.1 products (hydrocortisone 1%, triamcinolone 0.1%, KMnO4 soaks).
   sebnapkin: Bhutan STG §16.2.2–16.2.3 (+ Merck scalp shampoo advice).
   psoplan: NICE CG153 (topical by site; systemic criteria 1.5.2.1; same-day referral) + STG §16.2.4.
   urtstep: STG §16.2.6 + Merck urticaria stepwise plan.
   acneplan: NICE NG198 severity definitions and table 1 + STG §16.2.7 / NEML availability. */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const ul = a => `<ul style="margin:4px 0 0">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  eczstep(el, U) {
    el.innerHTML = `<h4>Eczema: what to use on this area?</h4><div class="row">${sel("sev", "Severity (NICE)", [["mi", "Mild — dry areas, infrequent itch"], ["mo", "Moderate — frequent itch, redness ± excoriation/thickening"], ["se", "Severe — widespread, incessant itch, bleeding, oozing, cracking"]])}${sel("site", "Site", [["body", "Trunk or limbs"], ["face", "Face or neck"], ["fold", "Armpits or groin"]])}${num("age", "Age (years; infants e.g. 0.5)", 3, 0.1)}${sel("wet", "Weeping / oozing", [["n", "No"], ["y", "Yes"]])}${sel("inf", "Infection signs", [["n", "None"], ["b", "Crusts, pustules, rapid worsening (bacterial)"], ["h", "Punched-out erosions, painful, fever (herpes)"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, sev = g("sev"), site = g("site"), age = parseFloat(g("age")), wet = g("wet") === "y", inf = g("inf"), out = U.$(".out", el);
      if (inf === "h") { out.innerHTML = "<p><b>Possible eczema herpeticum: start systemic aciclovir now and refer the same day</b> (eye involvement: same-day ophthalmology too). Add systemic antibiotics if bacterial infection is also suspected.</p>"; return; }
      const a = ["<b>Emollient</b> on the whole body every day (children 250–500 g a week); no soap — use emollient to wash"];
      if (wet) a.push("<b>Potassium permanganate soaks</b> (dilute pale pink) or saline, three times daily until dry");
      if (inf === "b") a.push("<b>Antibiotic</b> (oral or topical) for infected eczema; replace opened tubs of creams afterwards");
      let st;
      if (site === "face") st = sev === "se" ? "Hydrocortisone 1% (mild); a moderate steroid only for 3–5 days in a severe flare" : "Hydrocortisone 1% (mild) once or twice daily";
      else if (site === "fold") st = sev === "mi" ? "Hydrocortisone 1% (mild)" : "Moderate steroid (triamcinolone 0.1%) for 7–14 days only";
      else st = sev === "mi" ? "Hydrocortisone 1% (mild)" : sev === "mo" ? "Moderate: triamcinolone 0.1% ointment once or twice daily" : (age < 1 ? "Severe under 12 months: moderate steroid and <b>specialist advice before any potent steroid</b>" : "Potent steroid (betamethasone dipropionate 0.05%, hospital with dermatologist) for a short period; triamcinolone 0.1% if potent unavailable");
      a.push("<b>Steroid:</b> " + st + " — only on active patches, continue about 48 h after the flare settles");
      if (sev === "se") a.push("Severe: consider bandages, refer for phototherapy or systemic treatment if not controlled");
      a.push("Review in 2 weeks (1 week if severe); if not controlled in 7–14 days, exclude infection, then refer");
      if (age < 18) a.push("No very potent steroid (clobetasol) in children without a dermatologist");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Sources: NICE CG57; Bhutan STG §16.2.1. Antihistamines only for severe itch/urticaria (1-month trial) or sleep (sedating, 7–14 days, ≥ 6 months).</p>`;
    });
  },

  sebnapkin(el, U) {
    el.innerHTML = `<h4>Seborrhoeic or napkin dermatitis: treatment</h4><div class="row">${sel("t", "Problem", [["isd", "Infant: scalp scales (cradle cap)"], ["asd", "Adult: face, eyebrows, nasolabial folds"], ["asb", "Adult: chest, back, body"], ["asc", "Adult: scalp (dandruff)"], ["nap", "Nappy area red, folds spared"], ["napc", "Nappy area red incl. folds / satellite spots"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const t = U.$("[data-k=t]", el).value;
      const m = {
        isd: ["Gently massage the scalp with oil; wash daily with a mild shampoo", "Do not pick or scrape the scales; avoid strong shampoos", "Miconazole 2% cream if persistent"],
        asd: ["Miconazole 2% cream + hydrocortisone 1% cream", "Wash daily; moisturise", "Explain the chronic, relapsing course"],
        asb: ["Moderately potent steroid (triamcinolone 0.1% ointment) + miconazole 2%", "Wash daily; moisturise"],
        asc: ["Antifungal shampoo (ketoconazole 1–2%, purchase) at least twice weekly; then once or twice weekly to prevent relapse", "Tar or keratolytic shampoos also help", "Steroid scalp solution only as needed"],
        nap: ["Change nappies often, including at night; wash cloth napkins thoroughly", "Wash the skin at each change, then emollient", "Nappy-free time a few hours a day", "Zinc barrier cream", "Miconazole 2% cream for a few days"],
        napc: ["Likely Candida: miconazole 2% cream twice daily", "Same nappy care: frequent changes, washing, emollient, nappy-free time, zinc barrier", "Only mild steroid (hydrocortisone 1%) briefly if very inflamed"]
      }[t];
      U.$(".out", el).innerHTML = ul(m) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §16.2.2–16.2.3; Merck (scalp). Severe or resistant adult seborrhoeic dermatitis: think of HIV.</p>`;
    });
  },

  psoplan(el, U) {
    el.innerHTML = `<h4>Psoriasis: topical plan and referral check</h4><div class="row">${sel("site", "Main site", [["body", "Trunk or limbs"], ["scalp", "Scalp"], ["face", "Face, flexures or genitals"]])}${num("age", "Age (years)", 35, 1)}${num("bsa", "Body surface area affected (%; patient's palm ≈ 1%)", 5, 1)}${sel("fail", "Controlled with topical treatment?", [["y", "Yes / just starting"], ["n", "No, despite adequate topical treatment"]])}${sel("hi", "High-impact (nails, palms/soles, face, genitals) with major distress/function loss", [["n", "No"], ["y", "Yes"]])}${sel("urg", "Erythroderma or generalised pustules", [["n", "No"], ["y", "Yes"]])}${sel("pa", "Joint pain/swelling or inflammatory back pain", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, site = g("site"), age = parseFloat(g("age")), bsa = parseFloat(g("bsa")), out = U.$(".out", el);
      if (g("urg") === "y") { out.innerHTML = "<p><b>Same-day specialist assessment and treatment</b> (erythroderma / generalised pustular psoriasis). Admit: fluids, temperature, infection risk.</p>"; return; }
      const a = [];
      if (site === "body") a.push("STG: triamcinolone 0.1% ointment twice daily + 5% coal tar with salicylic acid at bedtime (wash off in the morning). NICE: potent steroid once daily + vitamin D analogue once daily up to 4 weeks.");
      else if (site === "scalp") a.push("Coal tar preparation at night / tar shampoo (STG); NICE: potent steroid once daily up to 4 weeks, descale first (salicylic acid, oils).");
      else a.push("Hydrocortisone 1% (mild) twice daily, maximum 2 weeks; no coal tar on face or folds.");
      a.push("Emollient (petroleum jelly) at least twice daily; review at " + (age < 18 ? "2" : "4") + " weeks; 4-week break between potent steroid courses.");
      if (age < 18) a.push("<b>Children and young people: refer to a specialist at presentation</b>; no very potent steroids.");
      const sys = g("fail") === "n" && (bsa > 10 || g("hi") === "y");
      if (sys) a.push("<b>Meets NICE criteria for systemic treatment</b> (uncontrolled with topicals + > 10% BSA or high-impact disease): refer — methotrexate first choice; ciclosporin for rapid control, palmoplantar pustulosis or planned conception.");
      else if (g("fail") === "n") a.push("Not controlled: check adherence, try the next topical step; refer if it still fails.");
      if (g("pa") === "y") a.push("<b>Possible psoriatic arthritis: refer to rheumatology.</b>");
      a.push("Check BP, glucose, lipids; advise on alcohol, smoking and weight.");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">NICE CG153; Bhutan STG §16.2.4.</p>`;
    });
  },

  urtstep(el, U) {
    el.innerHTML = `<h4>Urticaria: next step</h4><div class="row">${sel("ana", "Breathing difficulty, throat/tongue swelling, low BP or vomiting", [["n", "No"], ["y", "Yes"]])}${sel("ace", "Swelling without wheals, on an ACE inhibitor", [["n", "No"], ["y", "Yes"]])}${num("wk", "Duration (weeks)", 1, 1)}${sel("st", "Current treatment", [["0", "None"], ["1", "Cetirizine 10 mg once daily, every day"], ["2", "Cetirizine twice daily, every day"], ["4", "Higher dose (specialist) still uncontrolled"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, wk = parseFloat(g("wk")), st = g("st"), out = U.$(".out", el);
      if (g("ana") === "y") { out.innerHTML = `<p><b>Anaphylaxis / airway angioedema: IM adrenaline now</b>, call for help, admit; adrenaline auto-injector and training at discharge.</p>`; return; }
      if (g("ace") === "y") { out.innerHTML = "<p><b>Probable bradykinin (ACE-inhibitor) angioedema</b>: antihistamines and steroids usually do not work; protect the airway, stop the ACE inhibitor permanently, admit if mouth or throat involved.</p>"; return; }
      const chronic = wk > 6, a = [];
      a.push(chronic ? "<b>Chronic urticaria</b> (> 6 weeks): CBC, ESR, CRP; look for inducible triggers (pressure, cold, heat, sun, exercise)" : "<b>Acute urticaria</b> (< 6 weeks): look for and remove triggers (drugs, foods, stings, infection); usually no tests");
      if (st === "0") a.push("Start cetirizine 10 mg once daily, taken <b>every day</b> (not as needed)");
      else if (st === "1") a.push("Increase to cetirizine twice daily (STG); keep it daily");
      else if (st === "2") a.push(chronic ? "Refer: specialist may increase up to 4 times the standard dose, then omalizumab/ciclosporin" : "If severe: short oral steroid (STG prednisolone 10 mg three times daily for 5–7 days); refer if not settling");
      else a.push("Specialist add-on: omalizumab, ciclosporin or remibrutinib");
      a.push("Cool baths, loose clothes, avoid hot water and scratching; calamine for comfort; topical steroids/antihistamines do not help");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §16.2.6; Merck Manual (EAACI stepwise approach). Avoid sedating antihistamines in the day, especially in older adults.</p>`;
    });
  },

  acneplan(el, U) {
    el.innerHTML = `<h4>Acne: severity and 12-week plan (NICE)</h4><div class="row">${num("inf", "Inflammatory lesions (papules + pustules)", 15, 1)}${num("nod", "Nodules", 0, 1)}${num("age", "Age (years)", 16, 1)}${sel("preg", "Pregnant, planning pregnancy or breastfeeding", [["n", "No"], ["y", "Yes"]])}${sel("red", "Acne fulminans (fever, ulceration) / conglobata / scarring", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, inf = parseFloat(g("inf")) || 0, nod = parseFloat(g("nod")) || 0, age = parseFloat(g("age")), preg = g("preg") === "y", out = U.$(".out", el);
      if (g("red") === "y") { out.innerHTML = "<p><b>Refer.</b> Acne fulminans: same day (assessed within 24 h). Conglobata, nodulo-cystic acne or scarring: dermatologist-led team.</p>"; return; }
      const ms = inf >= 35 || nod >= 3, a = [];
      a.push(`Severity: <b>${ms ? "moderate to severe" : "mild to moderate"}</b> (${inf} inflammatory lesions, ${nod} nodule${nod === 1 ? "" : "s"})`);
      if (preg) a.push("Pregnancy/breastfeeding: <b>benzoyl peroxide ± clindamycin</b> with caution; no retinoids, no tetracyclines");
      else if (!ms) a.push("Topical combination once daily in the evening: benzoyl peroxide + clindamycin (Bhutan: purchase), or adapalene + BPO, or tretinoin + clindamycin");
      else a.push(`Adapalene + BPO (or azelaic acid) <b>plus</b> ${age < 12 ? "an oral macrolide or trimethoprim (no tetracycline under 12)" : "oral doxycycline 100 mg once daily (NEML)"} — never the oral antibiotic alone`);
      a.push("Twice-daily non-alkaline (or 2% salicylic) cleanser; no oily products; do not pick");
      a.push("Review at 12 weeks: stop the antibiotic if clear; antibiotics beyond 6 months only exceptionally");
      if (ms) a.push("No response after a course including an oral antibiotic: refer (isotretinoin is specialist-only)");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">NICE NG198; Bhutan STG §16.2.7. NEML has doxycycline but no topical acne products.</p>`;
    });
  }

  });
})();
