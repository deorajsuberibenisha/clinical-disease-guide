/* Brucellosis — all ages. Batch E-8, 27 Nov 2026.
   Source read directly: Bhutan national zoonoses guideline, chapter 3 Brucellosis (3.1–3.14: epidemiology in Bhutan, transmission, incubation,
   clinical features, classification, focal complications, laboratory network and tests, treatment tables for uncomplicated and complicated disease,
   monitoring, relapse, post-exposure prophylaxis, prevention) — pdftotext of _work/research/zoonoses-bt.pdf. NOTE: the PDF text layer misaligns
   some table columns (e.g. a 'gentamicin 15 to 20 mg/kg/day orally' cell that is the rifampicin dose); regimens below were reconstructed from the
   consistent parts and labelled. BCR topic 'brucella'. NEML 2025 (doxycycline, rifampicin [TB programme], cotrimoxazole, gentamicin, ceftriaxone;
   streptomycin for MDR-TB only). Not read: WHO 2006 'Brucellosis in humans and animals', CDC 2017 reference guide, Ioannina 2007 consensus (marked). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "brucellosis",
title: "Brucellosis — all ages",
subtitle: "An undulating fever with sweats, joint and back pain after contact with cattle, goats or raw milk: think of it in prolonged fever, send serology and blood cultures to the referral laboratory, and treat with at least six weeks of combination antibiotics",
age: "All ages", specs: ["id", "medicine", "paeds", "ph", "ortho"],
keywords: ["brucellosis", "Brucella", "Malta fever", "undulant fever", "Mediterranean fever", "Brucella melitensis", "Brucella abortus", "raw milk", "zoonosis", "fever of unknown origin", "sacroiliitis", "spondylitis", "neurobrucellosis", "Brucella endocarditis", "orchitis", "SAT", "standard agglutination test", "Rose Bengal", "doxycycline rifampicin", "post-exposure prophylaxis brucella", "laboratory exposure"],
related: ["afi-adult", "enteric-adult", "scrub-adult", "potts-adult", "bonejoint-adult", "anthrax", "hydatid", "meningitis-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Brucellosis is a bacterial infection caught from animals — through raw milk and fresh dairy, raw meat, birthing fluids and aerosols in slaughterhouses or laboratories. It rarely spreads person to person. It is found in Bhutanese cattle, and sporadic human cases have been picked up through fever surveillance, so it belongs on the list for any prolonged unexplained fever in a farmer, herder, butcher or veterinarian ${r(1)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever (often spiking or undulating) with sweats (mouldy odour), joint or back pain, tiredness, weight loss, enlarged liver or spleen, plus animal or raw-dairy exposure ${r(1)}.</p></div>
<div><h4>Test</h4><p>At least 2–3 blood culture sets (warn the lab — infectious aerosol) and serum to RCDC for SAT, ELISA and PCR; SAT 1:160 or more with compatible illness is usually diagnostic ${r(1)}.</p></div>
<div><h4>Treat (no focus)</h4><p>Adults: doxycycline 100 mg twice daily for 6 weeks <b>plus</b> gentamicin 5 mg/kg daily for 7–10 days, <b>or</b> plus rifampicin 600–900 mg daily for 6 weeks ${r(1)}.</p></div>
<div><h4>Focal disease</h4><p>Spondylitis, neurobrucellosis, endocarditis: triple therapy for at least 12 weeks; specialist care ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The National Centre for Animal Health found 2% seroprevalence in cattle in 2017 (21/1,099), with more positive animals in 2018 and 2019; human cases are sporadic and detected through RCDC's acute undifferentiated febrile illness surveillance ${r(1)}. PHCs and district laboratories cannot test — <b>ship serum (and CSF) to RCDC</b> for SAT and ELISA, and EDTA blood for PCR, after informing the RCDC focal person; culture is possible at JDWNRH and the regional referral hospitals (BSL-2 for clinical specimens, BSL-3 for cultures) and JDWNRH can identify isolates by MALDI-TOF ${r(1)}. Rifampicin is held for the TB programme on the NEML — coordinate with the TB unit before using it for brucellosis, and always exclude TB first ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Organisms", "B. melitensis (goats, sheep — most virulent, commonest worldwide, endemic in South Asia), B. abortus (cattle — milder), B. suis (pigs — chronic, localised), B. canis (dogs — mild, rare) " + r(1)],
["Transmission", "Skin or mucosal contact with placenta, aborted material, blood, urine, milk; raw dairy (soft cheese, butter, cream) and undercooked meat; aerosols in slaughterhouses and laboratories; rarely mother-to-child, sexual, breast milk, transfusion, transplant " + r(1)],
["Survival in food", "Soft cheese 38 to more than 180 days; cheddar up to a year; ice cream over a month; fermented products (hard cheese, sour milk, yoghurt) less risky; freezing, smoking, drying and pickling do not kill Brucella " + r(1)],
["Incubation", "Usually 2–4 weeks (5 days to several months) " + r(1)],
["At risk", "Farmers, herders, veterinarians, slaughterhouse workers, butchers, laboratory staff; immunocompromised people; accidental injection of animal vaccine " + r(1)],
["Classification", "Acute under 2 months; subacute 2–12 months; chronic more than 12 months " + r(1)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Course of infection", [F.s("Entry through gut, skin, mucosa or lungs"), F.a, F.s("Taken up by macrophages; survives inside cells"), F.a, F.s("Spreads to liver, spleen, bone marrow, lymph nodes (bacteraemia — fever)"), F.a, F.d("Diagnosis delayed more than 30 days?"), F.a, F.e("Focal disease: spine, joints, testis, brain, heart valves; relapse")])}
<p>Because Brucella lives inside cells, treatment needs drugs that work in that acidic intracellular space (doxycycline, rifampicin), given together and for a long time to prevent relapse ${r(1)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan zoonoses guideline", "Other practice", "This guide"], [
["Second drug with doxycycline", "Gentamicin 7–10 days <b>or</b> rifampicin 6 weeks", "WHO 2006 also lists streptomycin 2–3 weeks " + LB.exp("NOT READ"), "Gentamicin regimen relapses less in trials " + LB.exp("NOT READ — META-ANALYSES") + "; rifampicin when injections are impractical, after excluding TB " + LB.int()],
["Child TMP dose cap (uncomplicated)", "Max 480 mg/day", "Complicated tables in the same guideline: max 320 mg/day", "Use the cap shown for each table " + r(1) + " " + LB.int()],
["Streptomycin", "—", "Classic partner drug", "Not available outside MDR-TB in Bhutan " + r(3)],
["Peripheral arthritis, sacroiliitis", "Treat as uncomplicated", "Some experts extend to 12 weeks " + LB.exp(), "Follow the guideline; extend if slow response " + LB.int()]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Symptoms", "Signs"], [
["Fever (spiking, relapsing or undulating), chills, rigors", "Fever, relative bradycardia " + r(1)],
["Heavy sweats, often with a mouldy smell; night sweats", "Hepatomegaly, splenomegaly " + r(1)],
["Headache, muscle and bone pain, joint pain", "Arthritis; back tenderness " + r(1)],
["Loss of appetite, weight loss, weakness, fatigue", "Cervical lymph nodes, skin rashes " + r(1)],
["Low mood or depression", "Meningism, drowsiness, ataxia, periorbital swelling (less common) " + r(1)],
["Less often: dyspepsia, mouth ulcers, jaundice, abdominal pain, cough, breathlessness, epistaxis, testicular pain and scrotal swelling", r(1)]
])}
<p>Many patients first present as fever of unknown origin ${r(1)}.</p>
<h3>The typical patient</h3>
<p>A 42-year-old cattle owner from Bumthang has had fever on and off for 5 weeks, drenching sweats and low back pain radiating to the leg. Malaria, dengue, typhoid and scrub typhus tests were negative and two antibiotic courses did not help. He drinks fresh milk and helped a cow that aborted. His liver is palpable and the right sacroiliac joint is tender. Take 2–3 blood culture sets and send serum to RCDC; SAT returns 1:320. Exclude TB (the main mimic of spondylitis), image the spine if back pain is prominent, and treat with doxycycline and gentamicin (or rifampicin) for 6 weeks if there is no spondylitis ${r(1)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Tuberculosis (spinal, miliary)", "Spondylitis with disc destruction and abscess favours TB; Brucella spondylitis often lumbar with relative preservation " + LB.exp() + " — test for both"],
["Enteric fever", "Step-ladder fever, relative bradycardia too — blood culture " + LB.loc()],
["Scrub typhus, leptospirosis, malaria, dengue", "Acute febrile illness work-up first " + LB.loc()],
["Infective endocarditis (other organisms)", "Murmur, emboli — repeated cultures " + LB.exp()],
["Lymphoma, visceral leishmaniasis", "Splenomegaly, cytopenias, weight loss " + LB.exp()],
["Reactive or septic arthritis, sciatica", "Exposure history is the clue " + r(1)]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Where", "Notes"], [
["Blood culture (2–3 sets, 10 mL per bottle in adults, 3 mL in children); bone marrow, CSF, pus, synovial fluid", "JDWNRH, CRRH, ERRH, Phuentsholing (BSL-2)", "Gold standard; sensitivity 10–90%; 40–90% in acute and 15–20% in chronic or focal disease; warn the laboratory " + r(1)],
["MALDI-TOF identification", "JDWNRH", "From colonies or positive bottles; confirm by two methods " + r(1)],
["PCR (EDTA blood 3–5 mL)", "JDWNRH, ERRH, CRRH, RCDC", "Useful in acute, not chronic disease " + r(1)],
["SAT", "RCDC", "1:160 or more with compatible illness usually diagnostic; rising titre supports active infection; false negatives at low dilutions (prozone) — serial dilutions needed; cross-reacts with Yersinia, Francisella, Vibrio cholerae " + r(1)],
["ELISA (IgM, IgG)", "RCDC", "May be negative early (paired sera); persists after cure; cross-reactions " + r(1)],
["CBC, LFTs, ESR/CRP; urine", "All hospitals", "Supportive " + LB.exp()],
["Imaging", "Hospital", "MRI for spondylitis and abscesses; echocardiography if a murmur; CT/MRI for neurobrucellosis " + r(1)],
["CSF", "Hospital", "Neurobrucellosis: lymphocytes, high protein, low–normal glucose; CSF serology often positive; culture 10–15% " + r(1)]
])}` },
{ id: "staging", title: "Which regimen?", html: `
${tbl(["Situation", "Duration"], [
["No focal disease (including peripheral arthritis and sacroiliitis)", "6 weeks " + r(1)],
["Spondylitis", "12 weeks (gentamicin for the first 7–14 days) " + r(1)],
["Osteomyelitis", "4–6 months (gentamicin 2 weeks) " + r(1)],
["Neurobrucellosis", "Ceftriaxone 4–6 weeks + oral drugs for at least 12 weeks " + r(1)],
["Endocarditis", "At least 12 weeks (gentamicin first 4 weeks) + early surgery when indicated " + r(1)]
])}
<div class="calc" data-calc="brucellarx"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Uncomplicated brucellosis (Bhutan zoonoses guideline)</h3>
${tbl(["Group", "Regimen"], [
["Non-pregnant adults", "Doxycycline 100 mg twice daily for 6 weeks <b>plus</b> gentamicin 5 mg/kg IM/IV once daily for 7–10 days; <b>or</b> doxycycline 100 mg twice daily <b>plus</b> rifampicin 600–900 mg once daily, both for 6 weeks " + r(1)],
["Pregnant, under 36 weeks", "Rifampicin plus cotrimoxazole 960 mg twice daily (with folic acid), both for 6 weeks " + r(1)],
["Pregnant, 36 weeks or more", "Rifampicin alone until delivery, then the adult combination " + r(1) + " — cotrimoxazole is avoided near term (kernicterus) " + r(1)],
["Children 8 years and over", "Doxycycline 2–4 mg/kg/day (max 200 mg/day) in 2 doses <b>plus</b> rifampicin 15–20 mg/kg/day (max 600–900 mg/day) in 1–2 doses, at least 6 weeks; cotrimoxazole if a tetracycline cannot be used " + r(1)],
["Children under 8 years", "Cotrimoxazole (trimethoprim 10 mg/kg/day, max 480 mg/day; sulfamethoxazole 50 mg/kg/day, max 2.4 g/day) in 2 doses for 4–6 weeks; consider adding rifampicin " + r(1)]
])}
<h3>2. Complicated brucellosis (summary — specialist care)</h3>
${tbl(["Focus", "Adults (non-pregnant) and children 8 years and over", "Children under 8 / pregnancy"], [
["Spondylitis", "Gentamicin 5 mg/kg/day for the first 7–14 days + doxycycline + rifampicin for 12 weeks (child: doxycycline 4 mg/kg/day max 200; rifampicin 15–20 mg/kg/day max 900) " + r(1), "Under 8: cotrimoxazole (TMP 10 mg/kg/day, max 320 mg) + rifampicin 12 weeks + gentamicin 7–14 days. Pregnancy: ceftriaxone 2 g IV daily 4–6 weeks + rifampicin and cotrimoxazole for 12 weeks " + r(1)],
["Osteomyelitis", "Doxycycline + cotrimoxazole + rifampicin for 4–6 months + gentamicin 2 weeks " + r(1), "Under 8: cotrimoxazole + rifampicin + ciprofloxacin 4–6 months + gentamicin 2 weeks " + r(1)],
["Neurobrucellosis", "Ceftriaxone 2 g daily for 4–6 weeks + rifampicin 600 mg daily + doxycycline 100 mg twice daily for 12 weeks (child: ceftriaxone 100 mg/kg/day in 2 doses, max 2 g/dose) " + r(1), "Under 8: ceftriaxone + rifampicin + cotrimoxazole. Pregnancy under 36 weeks: ceftriaxone 4–6 weeks + rifampicin + cotrimoxazole 960 mg twice daily for 12 weeks " + r(1)],
["Endocarditis", "Doxycycline 100 mg twice daily + rifampicin 600 mg daily for at least 12 weeks + gentamicin 5 mg/kg/day for the first 4 weeks; surgery for large vegetations, valve dysfunction, abscess, aneurysm or emboli " + r(1), "Under 8: cotrimoxazole + rifampicin 12 weeks + gentamicin 4 weeks " + r(1) + " " + LB.exp("TABLE PARTLY SCRAMBLED IN PDF — RECONSTRUCTED")]
])}
<ul>
<li>Surgery: abscesses compromising vital function (spinal or paraspinal with deficits), complicated endocarditis; early surgery reduces adult mortality ${r(1)}.</li>
<li>Corticosteroids as adjuncts in children with meningitis, myelitis, radiculopathy, cranial nerve palsy, optic neuritis, uveitis or immune cytopenias; immunomodulators not recommended ${r(1)}.</li>
</ul>
<h3>3. Response</h3>
<p>Improvement usually within 3–7 days; watch for side effects that make patients stop early ${r(1)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("doxycycline", "Doxycycline")} 100 mg capsule — NEML ${r(3)}.</li>
<li>${D("rifampicin", "Rifampicin")} 150 and 300 mg — NEML (TB programme) ${r(3)}.</li>
<li>${D("gentamicin", "Gentamicin")} 40 mg/mL — NEML ${r(3)}.</li>
<li>${D("sulfamethoxazole", "Cotrimoxazole")} — NEML ${r(3)}.</li>
<li>${D("ceftriaxone", "Ceftriaxone")} 1 g — NEML ${r(3)}.</li>
<li>${D("ciprofloxacin", "Ciprofloxacin")} 500 mg — NEML ${r(3)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Pregnancy", "No doxycycline or gentamicin regimen; rifampicin ± cotrimoxazole (not cotrimoxazole after 36 weeks); risk of miscarriage " + r(1)],
["Children", "Under 8: no tetracycline; cotrimoxazole-based; joints (knee, hip, ankle) more than spine; reluctance to walk " + r(1)],
["Laboratory and animal workers", "Post-exposure prophylaxis after high-risk exposure " + r(1)],
["People also at risk of TB", "Exclude TB before rifampicin monotherapy partners — rifampicin resistance risk " + LB.exp()],
["Older adults", "Spondylitis commoner " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Laboratory technician opened a blood culture bottle on the bench; it grew Brucella", "High-risk exposure: doxycycline 100 mg twice daily + rifampicin 600 mg daily for 21 days; fever checks and serology at 0, 6, 12, 18, 24 weeks " + r(1)],
["Pregnant woman at 20 weeks with confirmed brucellosis", "Rifampicin + cotrimoxazole 960 mg twice daily with folic acid for 6 weeks " + r(1)],
["Six-year-old from a goat-keeping family with fever and limp", "Blood culture, serology; cotrimoxazole ± rifampicin 4–6 weeks; examine hip and knee " + r(1)],
["Fever returns 3 months after treatment, IgG rising", "Relapse: refer, look for CNS and cardiac foci, repeat cultures; usually repeat the same course " + r(1)],
["Severe headache and confusion in a known case", "Neurobrucellosis: CSF, imaging, ceftriaxone-based triple therapy " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Osteoarticular (up to 80% of focal disease): sacroiliitis, spondylitis with paraspinal abscess, peripheral arthritis, osteomyelitis ${r(1)}.</li>
<li>Genitourinary: epididymo-orchitis (commonest focal form after bone); tubo-ovarian abscess ${r(1)}.</li>
<li>Neurobrucellosis (~5%): meningitis, meningoencephalitis, seizures; chronic forms with optic neuritis, radiculopathy, neuropathy, stroke-like episodes ${r(1)}.</li>
<li>Endocarditis (1–2%) — causes up to 80% of deaths; myocarditis, pericarditis, mycotic aneurysm ${r(1)}.</li>
<li>Hepatitis, liver abscess; skin lesions in 5–10% ${r(1)}.</li>
<li>Relapse 5–15%, mostly within 6 months of finishing treatment ${r(1)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and prevention", html: `<ul>
<li>Blood culture positive at start: repeat after 7 days of therapy; persistent positivity — admit, IV therapy, look for a focus ${r(1)}.</li>
<li>Serology at 6, 12, 18 and 24 weeks after starting; IgG should fall (IgM may persist 1–2 years); if IgG stays high in a well patient, review every 3 months for a year ${r(1)}.</li>
<li>Prevention: no raw milk or unpasteurised dairy, no undercooked meat; gloves and eye protection with carcasses and births; wash hands; dispose of placentas by burial or burning; do not feed dogs raw offal ${r(1)}.</li>
<li>Report cases and clusters to RCDC; One Health link with livestock services ${r(1)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Prolonged fever with animal or raw-milk exposure", [F.s("Rule out malaria, dengue, typhoid, scrub typhus, TB"), F.a, F.s("2–3 blood culture sets (warn lab); serum to RCDC (SAT/ELISA); PCR if acute"), F.a, F.d("Confirmed or probable brucellosis — focal disease?"), F.a, F.b([["No", F.ok("6 weeks: doxycycline + gentamicin 7–10 d, or doxycycline + rifampicin")], ["Spine / CNS / heart", F.e("12 weeks or more triple therapy; specialist; surgery if needed")]]), F.a, F.s("Serology at 6, 12, 18, 24 weeks; watch for relapse")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Not asking about animals and raw milk", "Diagnosis missed for months", "Ask in every prolonged fever " + r(1)],
["Single blood culture", "Low yield", "2–3 sets; tell the lab — aerosol risk " + r(1)],
["Short antibiotic courses", "Relapse 5–15% even with full courses", "Minimum 6 weeks, combination " + r(1)],
["Doxycycline alone", "High relapse", "Always a second drug " + r(1)],
["Rifampicin without excluding TB", "TB resistance", "Screen for TB first " + LB.exp()]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What SAT titre is usually diagnostic?", "1:160 or more with a compatible clinical picture; a rising titre supports active infection.")}
${qa("Intern/MO", "Adult regimen for uncomplicated brucellosis?", "Doxycycline 100 mg twice daily for 6 weeks plus gentamicin 5 mg/kg daily for 7–10 days, or plus rifampicin 600–900 mg daily for 6 weeks.")}
${qa("Specialist", "Commonest cause of brucellosis deaths?", "Endocarditis (1–2% of cases, up to 80% of deaths).")}
${qa("Specialist", "PEP after a high-risk laboratory exposure?", "Doxycycline 100 mg twice daily plus rifampicin 600 mg daily for 21 days, with serology at 0, 6, 12, 18 and 24 weeks.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan (Royal Centre for Disease Control). National guideline on zoonotic diseases, chapter 3 Brucellosis (local PDF copy).</li>
<li id="ref-2">Bhutan Clinical Reference app, topic page 'Brucellosis' (Nov 2026).</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan zoonoses guideline ch. 3", "<span class='pass'>Checked</span>", "Read in full; complicated-disease tables partly scrambled — reconstructed and marked"],
["NEML availability", "<span class='pass'>Checked</span>", "Rifampicin is a TB-programme drug"],
["WHO 2006, CDC 2017, trial meta-analyses", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Tested in the browser"],
["Images", "<span class='pass'>None</span>", "No suitable licensed image needed"]
], "qc")}` }
]
});
})();
