/* Acute febrile illness without focus (Bhutan zoonoses/AUFI guidance, WHO) */
registerPage({
id: "afi-adult",
title: "Acute Fever Without a Focus",
subtitle: "In Bhutan, an undifferentiated fever is often scrub typhus, dengue, malaria, enteric fever or leptospirosis: test for what is likely, start doxycycline when rickettsia is suspected, recognise danger signs early, and avoid reflex antibiotics",
age: "Adults & children (over 3 months)", specs: ["id", "medicine", "paeds", "emerg"],
keywords: ["acute undifferentiated febrile illness", "AUFI", "fever without focus", "scrub typhus", "dengue", "malaria", "enteric fever", "leptospirosis", "brucellosis", "Q fever", "PUO", "doxycycline"],
related: ["scrub-adult", "dengue-adult", "malaria-adult", "enteric-adult", "sepsis-adult", "febinfant-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Common causes</h4><p>Viral, scrub typhus, dengue, enteric, malaria (south), leptospirosis.</p></div>
<div><h4>Test</h4><p>FBC, malaria RDT, dengue NS1/IgM, scrub IgM, blood culture.</p></div>
<div><h4>Empirical</h4><p>${dr("doxycycline")} if scrub/lepto suspected; no NSAIDs if dengue possible.</p></div>
<div><h4>Danger</h4><p>Shock, confusion, bleeding, jaundice, breathlessness → sepsis pathway.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan's acute undifferentiated febrile illness (AUFI) surveillance and the 2025 priority zoonoses guideline highlight scrub typhus, leptospirosis and brucellosis alongside dengue and malaria. Scrub typhus peaks after the monsoon (July–November). ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes by clue", html: `${tbl(["Clue", "Think"], [["Eschar, nodes, monsoon season, field work", "Scrub typhus"], ["Rash, low platelets, leucopenia, retro-orbital pain", "Dengue"], ["Southern border, travel to India", "Malaria"], ["Step-wise fever, abdominal pain", "Enteric fever"], ["Paddy fields/floods, myalgia, conjunctival suffusion, jaundice + AKI", "Leptospirosis"], ["Livestock, raw milk, sweats, arthralgia", "Brucellosis, Q fever"], ["Over 2–3 weeks", "TB, HIV, abscess, endocarditis, lymphoma, autoimmune (PUO)"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Undifferentiated fever", [F.s("Early phase: non-specific symptoms"), F.a, F.s("Organ-specific signs appear (rash, eschar, jaundice)"), F.e("Severe: shock, ARDS, AKI, meningoencephalitis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Common practice", "Evidence", "This guide"], [["Empirical antibiotics for all fevers", "Frequent", "Drives resistance; most are viral/rickettsial", "Test first; doxycycline when rickettsia suspected " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Duration, pattern, exposures (fields, animals, travel, water), contacts, vaccines.</li><li>Look hard for: eschar (groin, axilla, waistline), rash, nodes, jaundice, liver/spleen, neck stiffness, murmur.</li></ul><h3>The typical patient</h3><p>A 40-year-old farmer in Zhemgang in October has 5 days of fever and headache; small black eschar in the groin; platelets 110,000, ALT 120. <b>Probable scrub typhus</b>: doxycycline 100 mg twice daily for 7 days; scrub IgM; expect defervescence within 48 h.</p>` },
{ id: "ddx", title: "Severe mimics", html: `${tbl(["Condition", "Clue"], [["Bacterial sepsis", "Focus, high neutrophils"], ["Meningitis", "Neck stiffness, confusion"], ["Severe malaria", "RDT/smear"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC, malaria RDT/smear, dengue NS1/IgM, scrub typhus IgM/RDT, blood culture, LFT, creatinine, urine; leptospira IgM; brucella serology if exposure; CXR if respiratory.</p>` },
{ id: "staging", title: "Fever tool", html: `<div class="calc" data-calc="afiplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Paracetamol, fluids, rest; avoid NSAIDs until dengue excluded.</li><li>Scrub/leptospirosis: doxycycline (azithromycin in pregnancy/young children).</li><li>Dengue: fluid plan per phase.</li><li>Malaria: species-specific treatment.</li><li>Enteric: azithromycin/cefixime/ceftriaxone.</li><li>Danger signs: sepsis bundle with ceftriaxone + doxycycline, artesunate if malaria positive.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("doxycycline"), "100 mg BD × 7 days", "Scrub, lepto"], [dr("azithromycin"), "500 mg daily × 5 days", "Pregnancy/child alternative"], [dr("ceftriaxone"), "2 g daily", "Severe/sepsis"], [dr("paracetamol"), "1 g 6-hourly", "Fever"]])}` },
{ id: "populations", title: "Pregnancy and children", html: `<p>Azithromycin for scrub typhus; dengue and malaria are more severe in pregnancy.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No tests available, monsoon, eschar", "Doxycycline empirically"]])}` },
{ id: "complications", title: "Complications", html: `<p>Shock, ARDS, AKI, myocarditis, meningoencephalitis, bleeding.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review in 24–48 h; fever beyond 2 weeks needs PUO work-up.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Scrub typhus eschar", src: "images/scrub-eschar.jpg", mod: "Clinical photograph", ctx: "Scrub typhus", loc: "Skin", find: "Black necrotic eschar", interp: "Start doxycycline", by: "Paula Santibáñez, Ana M. Palomar et al.", page: "https://commons.wikimedia.org/wiki/File:Scrub_typhus_eschar.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fever, no focus", [F.d("Danger signs?"), F.a, F.b([["Yes", F.e("Sepsis pathway + doxycycline ± artesunate")], ["No", F.s("Targeted tests by clues")]]), F.a, F.ok("Specific treatment; review 24–48 h")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Not looking for an eschar", "Missed scrub typhus", "Examine groin, axilla, waist"], ["NSAIDs in early fever", "Dengue bleeding", "Paracetamol only"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Drug of choice for scrub typhus in a non-pregnant adult?", "Doxycycline 100 mg twice daily for 7 days.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. National guideline for the prevention and control of priority zoonotic diseases, 2025 (AUFI surveillance).</li><li id="ref-2">World Health Organization. Integrated management of adolescent and adult illness (IMAI) — acute fever. Geneva: WHO.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Bhutan zoonoses guideline", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
