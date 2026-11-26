/* Diphtheria — all ages. Batch E-3, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §8.1.5; Bhutan VPD Integrated Surveillance Guideline 2018 ch. 6 (case definition, DAT dose ranges, penicillin/erythromycin
   14 days, contact prophylaxis doses, vaccination of contacts); WHO VPD Surveillance Standards — Diphtheria (2018) case and contact management;
   CDC clinical guidance, DAT and clinical pages (updated Jul 2026) and Pink Book ch. 7 (2024); NEML 2025 (no DAT).
   WHO "Clinical management of diphtheria: guideline" (Feb 2024) exists but its full text could not be opened here — listed as NOT READ in conflicts and QC. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "diphtheria",
title: "Diphtheria",
subtitle: "A grey membrane that bleeds when touched, a bull neck, a child who is not fully vaccinated: give antitoxin on suspicion, start antibiotics, protect the airway and heart, and notify at once",
age: "All ages", specs: ["paeds", "id", "medicine", "ph", "ent"],
keywords: ["diphtheria", "Corynebacterium diphtheriae", "pseudomembrane", "bull neck", "diphtheria antitoxin", "DAT", "myocarditis", "palatal palsy", "erythromycin", "benzathine penicillin", "contact prophylaxis", "Td", "DTP"],
related: ["immunisation-schedule", "croup-child", "pertussis"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Diphtheria is now rare in Bhutan because of high DTP coverage, so the first case a doctor sees is often missed. A single suspected case is a public health emergency: notify immediately and treat without waiting for the laboratory.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Sore throat or hoarseness <b>and</b> an adherent grey-white membrane on tonsils, pharynx or nose ${r(2)}.</p></div>
<div><h4>Antitoxin</h4><p>Diphtheria antitoxin (DAT) on clinical suspicion: 10,000 units (short tonsillar) to 100,000–150,000 units (extensive, 3+ days) ${r(2)}.</p></div>
<div><h4>Antibiotic</h4><p>${D("erythromycin", "Erythromycin")} 500 mg every 6 hours, or ${D("benzylpenicillin", "penicillin")}, for 14 days ${r(1, 2, 3)}.</p></div>
<div><h4>Contacts</h4><p>Swab, give ${D("benzathine-benzylpenicillin", "benzathine penicillin")} or erythromycin, watch for 10 days, update vaccines ${r(2, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p><b>DAT is not on the NEML 2025.</b> Call the Vaccine Preventable Disease Programme and the district health officer as soon as you suspect diphtheria, so antitoxin can be sourced while you stabilise the patient. The STG (§8.1.5) lists only erythromycin; the national VPD surveillance guideline adds antitoxin, contact prophylaxis and vaccination — this guide follows the VPD guideline. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Cause", "Toxin-producing Corynebacterium diphtheriae, spread by respiratory droplets; also skin (cutaneous) disease and carriers " + r(1, 4)],
["Incubation", "2–6 days (STG) " + r(1) + "; CDC: 2–5 days, range 1–10 " + r(4)],
["What kills", "Airway obstruction early; toxin damage to the heart (myocarditis) and nerves (neuritis)"],
["Case fatality", "5–10% overall; up to 20% under 5 years and over 40 years " + r(4)],
["Immunity", "Disease does not reliably give immunity — vaccinate during recovery " + r(2, 3)],
["Bhutan status", "Case-based surveillance: a single suspected case is immediately notifiable " + r(2)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Diphtheria toxin", [F.s("Bacteria multiply on the throat lining"), F.a, F.s("Toxin kills cells → membrane of fibrin, dead cells and bacteria"), F.a, F.d("Toxin enters the blood"), F.a, F.b([["Heart", F.e("Myocarditis: arrhythmia, heart block, heart failure")], ["Nerves", F.e("Palatal palsy (week 3), then eye, limb, diaphragm (after week 5)")]])])}
<p>Antitoxin neutralises only toxin still circulating in the blood, not toxin already fixed to tissues. That is why every day of delay counts, and why antitoxin is given on suspicion ${r(2, 3, 4)}. Antibiotics stop further toxin production and spread, but do not reverse lesions that have already formed ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Bhutan VPD guideline 2018", "WHO", "CDC", "This guide"], [
["Antitoxin", "Not mentioned", "Mainstay; 10,000 → 150,000 units by extent and duration", "Mainstay; give immediately on strong suspicion, IV in serious cases (2018 standard)", "Eligible if meets case definition; supplied as investigational drug", "Give on suspicion " + LB.loc()],
["Antibiotic", "Erythromycin 500 mg four times daily × 14 days", "Penicillin 0.6–1.2 g every 6 h or erythromycin 0.5 g every 6 h × 14 days", "Penicillin or erythromycin × 2 weeks, parenteral until swallowing is easy", "Only erythromycin or penicillin; note penicillin resistance reported worldwide", "Erythromycin or penicillin × 14 days"],
["Contacts", "—", "Benzathine penicillin 600,000 U (<7 y) / 1,200,000 U (≥7 y) once, or erythromycin 7–10 days", "Antibiotic 7 days after swabs; monitor 10 days", "Same drugs; benzathine if follow-up uncertain", "Follow the VPD guideline"],
["Azithromycin", "—", "Text is garbled ('single dose … for 10 days') — not usable", "—", "Not listed", "Not used here; check the WHO 2024 guideline"],
["WHO 2024 clinical guideline", "—", "—", "Clinical management of diphtheria (Feb 2024) — full text NOT READ for this page", "—", "Recommendations may have changed (antibiotic choice, DAT dose); check before relying on older advice"]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Sore throat, low-grade fever, painful swallowing, hoarseness, nasal discharge (may be bloody) ${r(1, 2)}.</li>
<li>Grey-white membrane on the tonsils that spreads beyond them onto the pillars, palate or uvula. It is firmly stuck down and <b>bleeds if you try to lift it</b>, unlike streptococcal exudate ${r(2)}.</li>
<li>Stridor or change of voice when the larynx is involved; tender neck nodes; <b>bull neck</b> — massive swelling of the neck in severe disease ${r(1, 2)}.</li>
<li>Late signs: nasal regurgitation and palatal paralysis; myocarditis; limb weakness ${r(2, 4)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 6-year-old from a remote village was never vaccinated. She has had a sore throat for 3 days and her voice is now thick. A grey membrane covers both tonsils and the uvula and bleeds when touched, and her neck is swollen. <b>Treat as diphtheria now.</b> Isolate her, check the airway, and take nasal and throat swabs. Call VPDP for antitoxin (100,000–150,000 units is the guide range for extensive disease of 3 days or more). Start IV penicillin and monitor the ECG. Notify through NEWARS, then swab, treat and vaccinate her household.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Streptococcal tonsillitis", "Exudate stays on the tonsils and wipes off without bleeding " + r(2)],
["Infectious mononucleosis", "Generalised nodes, splenomegaly, atypical lymphocytes"],
["Peritonsillar abscess", "Unilateral bulge, trismus, uvula deviated"],
["Vincent angina, candidiasis", "Ulcers with foul smell; white plaques that scrape off"],
["Croup, epiglottitis", "Stridor without a pharyngeal membrane"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Nasal and pharyngeal swabs (and from beneath the membrane if possible) on first contact, before antibiotics if that does not delay them. Send them for culture and toxigenicity testing ${r(2, 3)}.</li>
<li>ECG at baseline and repeatedly: watch for conduction block and arrhythmia ${r(2)}.</li>
<li>Full blood count ${r(1)}.</li>
<li>Never wait for results before giving antitoxin or antibiotics ${r(3)}.</li>
</ul>` },
{ id: "staging", title: "Antitoxin dose by extent of disease", html: `
${tbl(["Disease", "DAT dose (guide)"], [
["Tonsillar diphtheria of short duration", "10,000 units"],
["Pharyngeal disease", "40,000–60,000 units"],
["Extensive disease of 3 days or more (e.g. bull neck)", "100,000–150,000 units"]
])}
<p>From Bhutan's VPD guideline ${r(2)}. WHO notes that the dose depends on site, extent, time since onset and severity ${r(3)}. Give it IV for serious disease and IM otherwise; at least part of a severe-disease dose should be IV ${r(2, 3)}. DAT is horse serum: test for hypersensitivity as the product leaflet directs, and have adrenaline ready ${r(2)}. Not needed for cutaneous diphtheria or for carriers without a membrane ${r(3, 4)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<ol>
<li><b>Isolate</b>: droplet precautions for respiratory disease, contact precautions for skin disease. Use staff with documented vaccination ${r(2, 3)}.</li>
<li><b>Airway</b>: early intubation or tracheostomy for a compromised airway; remove obstructing membrane with care ${r(2)}.</li>
<li><b>Antitoxin</b> as above — on suspicion ${r(2, 3)}.</li>
<li><b>Antibiotic for 14 days</b> — IV until swallowing is easy, then oral ${r(2, 3)}:
${tbl(["Drug", "Adults", "Children"], [
[D("erythromycin", "Erythromycin"), "500 mg every 6 hours × 14 days " + r(1, 2), "40–50 mg/kg/day in 4 doses (max 2 g/day) × 14 days " + LB.exp("NOT VERIFIED")],
[D("benzylpenicillin", "Benzylpenicillin (IV)"), "600–1,200 mg every 6 hours, then oral to complete 14 days " + r(2), "Weight-based dose from the paediatric formulary " + LB.exp("NOT VERIFIED")]
])}
<p>Children's treatment doses are not stated in any Bhutan, WHO or CDC text read for this page. They are shown as a guide only, to be checked against the paediatric formulary.</p></li>
<li><b>Heart</b>: bed rest, ECG monitoring; pacing for conduction block, drugs for arrhythmia ${r(2)}.</li>
<li><b>Clear the patient</b>: two negative cultures 24 hours apart, the first 24 hours after antibiotics end ${r(3, 4)}.</li>
<li><b>Vaccinate during convalescence</b> with the age-appropriate diphtheria toxoid course ${r(2, 3)}.</li>
</ol>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>Diphtheria antitoxin — equine; not on NEML; through VPDP.</li>
<li>${D("erythromycin", "Erythromycin")} — NEML 250 mg tablet.</li>
<li>${D("benzylpenicillin", "Benzylpenicillin")} — NEML 3 g (5 million IU) vial.</li>
<li>${D("benzathine-benzylpenicillin", "Benzathine benzylpenicillin")} — NEML 2.4 million IU vial (contacts).</li>
<li>Vaccines: ${D("pentavalent-vaccine", "pentavalent")}, ${D("dtp-vaccine", "DTP")}, ${D("td-vaccine", "Td")}.</li>
</ul>` },
{ id: "populations", title: "Close contacts", html: `
${tbl(["Step", "What to do"], [
["Who", "Household members, carers, relatives, sexual contacts, classmates, regular visitors, health workers exposed to secretions " + r(3)],
["Swab", "Nasal and pharyngeal swab from every close contact before prophylaxis " + r(3)],
["Prophylaxis", "Benzathine penicillin IM once: 600,000 units under 7 years; 1,200,000 units 7 years and over. Or oral erythromycin for 7–10 days: 40 mg/kg/day (children), 1 g/day (adults) " + r(2)],
["Monitor", "10 days from last contact; start antitoxin at the first sign of illness " + r(2, 3)],
["If swab positive (toxigenic)", "Treat as a case: 2 weeks of antibiotic; antitoxin only if symptomatic with a membrane " + r(3)],
["Vaccinate", "Under 6 years: one DTP-containing dose if none in the past 5 years; over 6 years: Td (or DT/Tdap) " + r(2) + ". Unvaccinated contacts: full course " + r(3)]
])}
<p>Antitoxin is not used as prophylaxis for contacts ${r(3, 4)}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Fully vaccinated teenager with exudative tonsillitis that wipes off easily, no membrane", "Not diphtheria by definition; treat as tonsillitis"],
["Suspected case at a BHU", "Notify immediately; airway first; refer with escort; start penicillin or erythromycin before transfer if possible " + LB.loc()],
["Contact, 4 years, fully vaccinated, last dose 3 years ago", "Swab; benzathine penicillin 600,000 units; monitor 10 days; no extra vaccine"],
["Week 3 after diphtheria: nasal voice and fluids coming from the nose", "Palatal palsy — expected timing; feed with care, monitor breathing and swallowing"]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Airway obstruction — early ${r(2)}.</li>
<li>Myocarditis — early or weeks later; arrhythmias and heart failure; often fatal if early ${r(4)}.</li>
<li>Neuritis — palatal paralysis most often in week 3; eye muscles, limbs and diaphragm after week 5; usually recovers completely ${r(4)}.</li>
</ul>` },
{ id: "followup", title: "Public health and follow-up", html: `<ul>
<li>Report immediately through NEWARS (immediate reporting platform); weekly zero reporting ${r(2)}.</li>
<li>Case investigation form; active case search in household, neighbourhood, school and workplace within 48 hours of confirmation ${r(2)}.</li>
<li>Check community vaccination coverage during the search ${r(2)}.</li>
<li>Follow the ECG and neurology for at least 6–8 weeks ${LB.exp()}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Diphtheria pseudomembrane", src: "images/diphtheria-membrane.jpg", mod: "Clinical photograph", ctx: "Respiratory diphtheria", loc: "Tonsils and pharynx", find: "Dirty white adherent membrane extending beyond the tonsils", signs: "Pseudomembrane", interp: "Adherent membrane that bleeds when lifted — suspected diphtheria", by: "Dileepunnikri", page: "https://commons.wikimedia.org/wiki/File:Dirty_white_pseudomembrane_classically_seen_in_diphtheria_2013-07-06_11-07.jpg", lic: "CC BY-SA 3.0" })}${fig({ title: "Bull neck", src: "images/diphtheria-bull-neck.jpg", mod: "Clinical photograph", ctx: "Severe respiratory diphtheria", loc: "Neck", find: "Massive swelling of the neck from nodes and soft-tissue oedema", signs: "Bull neck", interp: "Extensive disease — upper DAT dose range; high risk of airway obstruction and myocarditis", by: "CDC", page: "https://commons.wikimedia.org/wiki/File:Diphtheria_bull_neck.5325_lores.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Sore throat with membrane", [F.d("Adherent grey membrane ± bull neck, stridor, incomplete vaccination?"), F.a, F.b([["Yes", F.e("Suspected diphtheria: isolate, notify, swabs, call VPDP for DAT")], ["No", F.ok("Treat as tonsillitis; reassess")]]), F.a, F.s("DAT by extent + penicillin or erythromycin × 14 days; airway and ECG"), F.a, F.s("Contacts: swab, prophylaxis, 10-day watch, vaccines")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Waiting for culture before antitoxin", "Toxin binds to heart and nerves within days", "Give DAT on suspicion"],
["Pulling off the membrane", "Bleeding, airway risk", "Leave it; swab beside or beneath it"],
["Discharging when the throat clears", "Myocarditis and neuritis come later", "ECG and neuro follow-up"],
["Forgetting the vaccine after recovery", "Infection may not protect", "Vaccinate during convalescence"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How do you tell a diphtheria membrane from strep exudate?", "Diphtheria membrane is adherent, spreads beyond the tonsils to the pillars, palate or uvula, and bleeds when lifted.")}
${qa("Intern/MO", "Benzathine penicillin dose for a 5-year-old contact?", "600,000 units IM once (1,200,000 units from 7 years).")}
${qa("Specialist", "When is a treated patient no longer infectious for clearance?", "After two negative cultures 24 hours apart, the first taken 24 hours after finishing antibiotics.")}
${qa("Specialist", "When does palatal palsy typically appear?", "Third week of illness; limb and diaphragm paralysis after the fifth week.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.5 Diphtheria.</li>
<li id="ref-2">Vaccine Preventable Disease Programme, Ministry of Health, Bhutan. Integrated Surveillance Guideline for selected Vaccine Preventable Diseases, 1st edition, 2018, chapter 6 (Diphtheria).</li>
<li id="ref-3">World Health Organization. Diphtheria: Vaccine-Preventable Diseases Surveillance Standards, 4 September 2018. <a href="https://www.who.int/publications/m/item/vaccine-preventable-diseases-surveillance-standards-diphtheria" target="_blank" rel="noopener">who.int</a>. Also: Clinical management of diphtheria: guideline, 2 February 2024 (WHO/DIPH/Clinical/2024.1) — not read for this page. <a href="https://www.who.int/publications/i/item/WHO-DIPH-Clinical-2024.1" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Centers for Disease Control and Prevention. Diphtheria: clinical guidance, DAT and clinical features (updated 31 Jul 2026); Pink Book chapter 7 (2024). <a href="https://www.cdc.gov/diphtheria/hcp/clinical-guidance/index.html" target="_blank" rel="noopener">cdc.gov</a> · <a href="https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-7-diphtheria.html" target="_blank" rel="noopener">Pink Book</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["DAT dose ranges", "<span class='pass'>Checked</span>", "Bhutan VPD guideline; WHO 2018 confirms dose depends on extent and timing (no numbers)"],
["Adult antibiotics", "<span class='pass'>Checked</span>", "STG + VPD guideline (erythromycin 500 mg q6h); WHO 2018 two weeks"],
["Children's treatment doses", "<span class='unv'>Not verified</span>", "Not in any source read; marked on the page"],
["Contact prophylaxis doses", "<span class='pass'>Checked</span>", "VPD guideline; WHO/CDC confirm drugs and 7-day course"],
["WHO 2024 clinical guideline", "<span class='unv'>Not read</span>", "PDF could not be opened; may change antibiotic choice or DAT dosing"],
["Images", "<span class='pass'>Checked</span>", "2 Commons images, licence checked per file"]
], "qc")}` }
]
});
})();
