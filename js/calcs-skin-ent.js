/* Skin and ENT calculators.
   SSTI: WHO AWaRe Antibiotic Book 2022; IDSA 2014 (Stevens DL et al.); Bhutan STG 2024 §16.1.2; Eron classification (CREST 2005).
   Scabies: Bhutan STG 2024 §16.1.4.1; WHO 2023; BNF (permethrin 30–60 g per adult application).
   Sore throat: FeverPAIN (Little P et al. BMJ 2013); Centor/McIsaac (CMAJ 1998); NICE NG84 (2018); IDSA 2012 (Shulman); WHO AWaRe 2022; Bhutan STG §14.8.
   Otitis media: AAP 2013 (Lieberthal AS et al.); NICE NG91 (2018); WHO AWaRe 2022; Bhutan STG §14.3. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  sstiplan(el, U) {
    el.innerHTML = `<h4>Skin infection: type, severity and antibiotic dose</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 20"></label>
      <label>Age (years)<input type="number" step="any" data-k="age" placeholder="e.g. 6"></label>
      <label>Infection<select data-k="t"><option value="imp1">Impetigo: few lesions</option><option value="imp2">Impetigo: widespread, or bullous</option><option value="cel">Cellulitis or erysipelas</option><option value="abs">Abscess or boil</option><option value="bite">Infected animal or human bite</option></select></label>
      <label>Penicillin allergy<select data-k="pa"><option value="n">No</option><option value="y">Yes (rash)</option><option value="s">Yes (anaphylaxis)</option></select></label></div>
      <div class="checks" style="margin-top:10px"><label class="chk"><input type="checkbox" data-k="sys">Fever, fast pulse, low BP, confusion or vomiting (systemically unwell)</label><label class="chk"><input type="checkbox" data-k="nf">Pain out of proportion, rapid spread, dusky or blistered skin, crepitus, numbness</label><label class="chk"><input type="checkbox" data-k="face">Face (around eye or nose), hand, or over a joint</label><label class="chk"><input type="checkbox" data-k="dm">Diabetes, immunosuppression, infant under 3 months, or very frail</label></div>
      <div class="out" aria-live="polite">Enter weight and age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, out = U.$(".out", el), w = U.num(g("wt")), age = U.num(g("age")), t = g("t").value, pa = g("pa").value;
      if (!(w > 0) || !(age >= 0)) { out.textContent = "Enter weight and age."; return; }
      const ch = age < 12 && w < 40, cap = (mgkg, max) => Math.min(Math.round(mgkg * w / 25) * 25, max);
      const ora = pa === "n" ? (ch ? `cefalexin ${cap(25, 500)} mg 12-hourly or cloxacillin ${cap(15, 500)} mg 6-hourly` : "cefalexin 500 mg 8-hourly or cloxacillin 500 mg 6-hourly")
        : pa === "y" ? (ch ? `cefalexin ${cap(25, 500)} mg 12-hourly (most rash-only allergies tolerate it), or azithromycin ${cap(10, 500)} mg once daily for 3 days` : "cefalexin 500 mg 8-hourly (rash-only allergy), or doxycycline 100 mg 12-hourly")
        : (ch ? (age >= 8 ? `doxycycline ${Math.min(Math.round(2.2 * w), 100)} mg 12-hourly or azithromycin ${cap(10, 500)} mg daily for 3 days` : `azithromycin ${cap(10, 500)} mg daily for 3 days or co-trimoxazole (8 mg/kg/day trimethoprim in 2 doses; streptococcal cover is weaker)`) : "doxycycline 100 mg 12-hourly or co-trimoxazole 960 mg 12-hourly (+ amoxicillin if streptococcal cellulitis and no true anaphylaxis to it), or clindamycin where available");
      const iv = ch ? `cloxacillin ${cap(50, 2000)} mg IV 6-hourly (or cefazolin/ceftriaxone ${cap(50, 2000)} mg IV once daily)` : "cloxacillin 2 g IV 6-hourly (or ceftriaxone 2 g IV once daily)";
      const L = [];
      if (c("nf")) L.push(`<b class="warn">Possible necrotising soft-tissue infection: surgical emergency.</b> Resuscitate, call the surgeon now for exploration and debridement; IV broad cover (e.g. ceftriaxone + metronidazole + clindamycin where available, or meropenem). Do not wait for imaging.`);
      const severe = c("sys") || c("nf");
      if (t === "imp1") L.push(`<b>Localised impetigo:</b> clean crusts with soap and water; hydrogen peroxide 1% cream (NICE first line) where available, otherwise mupirocin 2% three times daily for 5 days. No oral antibiotic needed.`);
      if (t === "imp2") L.push(`<b>Widespread or bullous impetigo:</b> oral ${ora} for <b>5 days</b> (WHO AWaRe). Keep off school until crusted over or 48 hours of antibiotics.`);
      if (t === "cel") L.push(severe || c("dm") ? `<b>Cellulitis, Eron class ${severe ? "III–IV" : "II"}:</b> admit; IV ${iv}; switch to oral when improving. Mark the edge, elevate, treat tinea between the toes.` : `<b>Cellulitis, Eron class I (well, no comorbidity):</b> oral ${ora} for <b>5 days</b> (extend only if not improving). Elevate the limb, mark the edge, treat toe-web tinea. Review at 48–72 hours.`);
      if (t === "abs") L.push(`<b>Abscess:</b> <b>incision and drainage is the treatment.</b> Antibiotics only if cellulitis over 5 cm, systemically unwell, face or hand, immunosuppressed or very young: ${severe ? "IV " + iv : "oral " + ora} for 5 days. Recurrent boils: check glucose; mupirocin to nostrils twice daily for 5 days for the household.`);
      if (t === "bite") L.push(`<b>Infected bite:</b> co-amoxiclav ${ch ? `${cap(15, 500)} mg (amoxicillin component) 8-hourly` : "625 mg 8-hourly"} for 5–7 days${pa === "s" ? " — anaphylaxis to penicillin: doxycycline (8 years and over) plus metronidazole" : ""}; leave the wound open; rabies PEP and tetanus (see the rabies chapter).`);
      if (c("face")) L.push("Face, hand or joint involvement: lower threshold for admission and IV antibiotics; periorbital swelling with eye pain or reduced movement = orbital cellulitis → urgent referral.");
      L.push("Paracetamol for pain; fluids. Return if spreading beyond the pen line, fever or feeling worse.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    });
  },

  scabiesplan(el, U) {
    const bands = [["ad", "Adults and children 13 years and over", 30], ["c6", "Children 6–12 years", 15], ["c1", "Children 1–5 years", 7.5], ["inf", "Infants 2–11 months", 3.75], ["neo", "Babies under 2 months", 0], ["pr", "Pregnant or breastfeeding women (included in adults: permethrin is safe)", 0]];
    el.innerHTML = `<h4>Scabies: treat the whole household together</h4><div class="row">${bands.map(([k, t]) => `<label>${t}<input type="number" min="0" step="1" data-k="${k}" placeholder="0"></label>`).join("")}</div>
      <div class="checks" style="margin-top:10px"><label class="chk"><input type="checkbox" data-k="cr">Thick crusts (crusted scabies), or a hostel, monastery or nursing home outbreak</label><label class="chk"><input type="checkbox" data-k="inf2">Pustules, crusts or pus (secondary impetigo)</label></div>
      <div class="out" aria-live="polite">Enter the number of people in each group.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), n = k => Math.max(0, Math.round(U.num(g(k)) || 0)), out = U.$(".out", el);
      const per = bands.reduce((s, [k, , gm]) => s + n(k) * gm, 0), people = ["ad", "c6", "c1", "inf", "neo"].reduce((s, k) => s + n(k), 0);
      if (!people) { out.textContent = "Enter the number of people in each group."; return; }
      const tot = per * 2, tubes = Math.ceil(tot / 60);
      const L = [`<b>${people} people</b> to treat on the <b>same night</b>, including those without itch.`];
      if (per) L.push(`<b>Permethrin 5% cream:</b> about ${per} g per application × 2 applications (night 1 and night 8) = <b>${tot} g ≈ ${tubes} tube${tubes > 1 ? "s" : ""} of 60 g</b>. Apply from the neck down to cool, dry skin (include finger webs, under nails, genitals, soles; scalp, face and ears in children under 2 and the elderly), leave 8–12 hours, then wash off. Re-apply to hands after washing them.`);
      if (n("neo")) L.push(`<b>Babies under 2 months (${n("neo")}):</b> sulphur 5–6% ointment to the whole body daily for 3 nights (STG), repeat after 1 week; or specialist advice.`);
      L.push("On the morning after each treatment, wash clothes, sheets and towels in hot water and dry in the sun, or seal them in a bag for 3 days.");
      L.push("Itch for the next 2–4 weeks is expected: cetirizine at night (2–5 y 2.5 mg twice daily; 6–11 y 5 mg twice daily; 12 y and over 10 mg daily) and an emollient. New burrows after 2 weeks = re-treat.");
      if (g("cr").checked) L.push("<b>Crusted scabies or institutional outbreak:</b> oral ivermectin 200 microgram/kg (15 kg and over, not in pregnancy) plus permethrin (crusted: ivermectin days 1, 2, 8, 9, 15; permethrin daily for 7 days then twice weekly). Ivermectin is not on the NEML: request through the specialist. Treat all residents and staff on the same day.");
      if (g("inf2").checked) L.push("<b>Secondary infection:</b> treat the impetigo too (oral cefalexin or cloxacillin for 5 days if widespread). Untreated scabies-impetigo can cause post-streptococcal glomerulonephritis.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="qn" style="margin:6px 0 0">Grams per application are approximate (BNF: 30–60 g for an adult). Leave a little spare.</p>`;
    });
  },

  sorethroat(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Sore throat: FeverPAIN, Centor and antibiotic dose</h4><div class="row">
      <label>Age (years)<input type="number" step="any" data-k="age" placeholder="e.g. 9"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 28"></label></div>
      <div class="checks" style="margin-top:10px">${chk("fev", "Fever (in the last 24 hours, or 38 °C or more now)")}${chk("pur", "Pus or exudate on the tonsils")}${chk("att", "Came within 3 days of onset")}${chk("inf", "Severely inflamed or swollen tonsils")}${chk("noc", "No cough and no runny nose")}${chk("nod", "Tender, swollen front neck lymph nodes")}${chk("rf", "History of rheumatic fever, or rheumatic heart disease in the family")}${chk("red", "Cannot swallow saliva, drooling, trismus, muffled 'hot potato' voice, one-sided swelling, stridor")}</div>
      <div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, out = U.$(".out", el), age = U.num(g("age")), w = U.num(g("wt"));
      if (!(age >= 0)) { out.textContent = "Enter age."; return; }
      const fp = ["fev", "pur", "att", "inf", "noc"].filter(c).length;
      const ce = [c("fev"), c("noc"), c("nod"), c("pur") || c("inf")].filter(Boolean).length + (age >= 3 && age <= 14 ? 1 : age >= 45 ? -1 : 0);
      const L = [`<b>FeverPAIN ${fp}/5</b> (streptococcus likely in about ${["13–18", "13–18", "30–35", "39–48", "62–65", "62–65"][fp]}%). <b>McIsaac (modified Centor) ${ce}</b>.`];
      if (c("red")) L.push(`<b class="warn">Red flags:</b> possible peritonsillar abscess (quinsy), epiglottitis or deep neck infection. Do not examine the throat forcefully in a drooling, stridulous child; refer urgently (STG: refer quinsy and deep neck infection).`);
      if (age < 3) L.push("Under 3 years, streptococcal pharyngitis and rheumatic fever are rare: most sore throats are viral (IDSA 2012). Look for other foci.");
      const child = w > 0 && w < 40;
      const amox = child ? `amoxicillin ${Math.min(Math.round(50 * w / 25) * 25, 1000)} mg once daily (50 mg/kg, max 1 g) or ${Math.min(Math.round(25 * w / 25) * 25, 500)} mg twice daily (IDSA), or STG ${Math.min(Math.round(15 * w / 25) * 25, 500)} mg three times daily` : "amoxicillin 500 mg three times daily or 1 g twice daily";
      const bpg = w > 0 ? (w < 27 ? "600,000 units" : "1.2 million units") : "600,000 units (under 27 kg) or 1.2 million units";
      const rfAge = age >= 3 && age <= 25;
      if (fp <= 1 && ce <= 2 && !c("rf")) L.push("<b>No antibiotic.</b> Most sore throats are viral and settle in about a week. Salt-water gargles, paracetamol or ibuprofen, fluids (STG). Return if not better in 3–5 days or worse.");
      else if ((fp <= 3 && ce <= 3) && !c("rf")) L.push(`<b>No antibiotic or a back-up (delayed) prescription</b> (NICE NG84). ${rfAge ? "In Bhutan, where rheumatic heart disease still occurs, a lower threshold is reasonable for children and young adults with exudate and tender nodes." : ""} If treating: ${amox} for <b>10 days</b>.`);
      else L.push(`<b>Treat as streptococcal pharyngitis:</b> ${amox} for <b>10 days</b> (WHO AWaRe, IDSA; full course prevents rheumatic fever), or a single IM dose of <b>benzathine penicillin ${bpg}</b> if adherence is doubtful. Penicillin allergy: azithromycin ${child ? Math.min(Math.round(12 * w / 10) * 10, 500) + " mg (12 mg/kg)" : "500 mg"} daily for 5 days.`);
      L.push("Recurrent tonsillitis (7 in 1 year, 5 a year for 2 years, or 3 a year for 3 years): refer for tonsillectomy assessment (STG, Paradise criteria).");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    });
  },

  aomplan(el, U) {
    el.innerHTML = `<h4>Acute otitis media: antibiotic or watch, and dose</h4><div class="row">
      <label>Age (months)<input type="number" step="any" data-k="m" placeholder="e.g. 18"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 11"></label>
      <label>Ears<select data-k="bi"><option value="u">One ear</option><option value="b">Both ears</option></select></label>
      <label>Severity<select data-k="sev"><option value="n">Mild pain under 48 h and temperature under 39 °C</option><option value="s">Moderate-severe pain, pain 48 h or more, or 39 °C or more</option></select></label>
      <label>Ear discharge (perforation)<select data-k="ot"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Amoxicillin in the last 30 days, or purulent conjunctivitis too<select data-k="rec"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Penicillin allergy<select data-k="pa"><option value="n">No</option><option value="y">Yes</option></select></label></div>
      <div class="out" aria-live="polite">Enter age and weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), m = U.num(g("m")), w = U.num(g("wt"));
      if (!(m >= 0) || !(w > 0)) { out.textContent = "Enter age and weight."; return; }
      const bi = g("bi").value === "b", sev = g("sev").value === "s", ot = g("ot").value === "y", rec = g("rec").value === "y", pa = g("pa").value === "y";
      let abx, why;
      if (m < 6) { abx = "yes"; why = "Under 6 months: always treat, and examine for other serious infection (fever under 3 months needs full sepsis assessment)."; }
      else if (ot || sev) { abx = "yes"; why = "Ear discharge or severe symptoms: antibiotic recommended (AAP 2013, NICE NG91)."; }
      else if (m < 24 && bi) { abx = "yes"; why = "Under 2 years with both ears affected: antibiotic recommended."; }
      else { abx = "watch"; why = "Non-severe, one ear (or 2 years and over): <b>either antibiotic or 48–72 hours of watchful waiting</b> with pain relief, if the family can return. Start the antibiotic if not better or worse by 48–72 hours (a back-up prescription)."; }
      const dur = m < 24 ? "10 days" : m < 72 ? (sev ? "10 days" : "7 days") : "5–7 days";
      const big = Math.min(Math.round(45 * w / 25) * 25, 1000);
      const adult = w >= 40;
      const drug = adult ? (pa ? "azithromycin 500 mg once daily for 3 days (or co-trimoxazole 960 mg twice daily, STG)" : rec ? "co-amoxiclav 625 mg three times daily" : "amoxicillin <b>500 mg three times daily</b> (1 g three times daily if severe; WHO AWaRe)") : pa ? `azithromycin ${Math.min(Math.round(10 * w), 500)} mg once daily for 3 days (or co-trimoxazole: STG 8 mg/kg/day trimethoprim in 2 doses)`
        : rec ? `co-amoxiclav ${big} mg (amoxicillin component, 90 mg/kg/day in 2 doses; max 1 g per dose) twice daily`
        : `amoxicillin <b>${big} mg twice daily</b> (80–90 mg/kg/day in 2 doses, max 1 g per dose; AAP 2013) — or STG ${Math.min(Math.round(15 * w / 25) * 25, 500)} mg three times daily`;
      const para = Math.min(Math.round(15 * w), 1000), ibu = m >= 3 && w >= 5 ? Math.min(Math.round(10 * w), 400) : 0;
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li>${why}</li>
        ${abx === "yes" || abx === "watch" ? `<li><b>${abx === "yes" ? "Antibiotic" : "If an antibiotic is started"}:</b> ${drug} for ${pa ? "the stated course" : dur}.</li>` : ""}
        <li><b>Pain relief for everyone:</b> paracetamol ${para} mg (15 mg/kg) every 6 hours${ibu ? ` or ibuprofen ${ibu} mg (10 mg/kg) every 8 hours` : ""}. No decongestants or antihistamines (no benefit).</li>
        ${ot ? "<li>Discharging ear: dry-mop 3 times a day (STG); keep water out; nothing inside the ear except a quinolone drop if prescribed. Discharge for over 2 weeks = chronic suppurative otitis media.</li>" : ""}
        <li>Not improving after 48–72 hours on amoxicillin: co-amoxiclav; then ceftriaxone 50 mg/kg IM/IV daily for 1–3 days. <b>Refer urgently</b> for swelling or redness behind the ear (mastoiditis), facial weakness, severe headache, neck stiffness or drowsiness.</li></ul>`;
    });
  }
});
