/* Down syndrome (AAP 2022 health supervision) */
registerPage({
id: "down-child",
title: "Down Syndrome (Trisomy 21)",
subtitle: "Confirm the diagnosis with kindness, screen the heart, thyroid, hearing, eyes and blood at the right ages, support development and feeding, and plan for a full life",
age: "Newborns, children & adults", specs: ["paeds", "neo", "cardio"],
keywords: ["Down syndrome", "trisomy 21", "AVSD", "hypothyroidism", "hearing loss", "atlanto-axial instability", "transient abnormal myelopoiesis", "leukaemia", "obstructive sleep apnoea", "developmental delay", "karyotype", "antenatal screening"],
related: ["chd-child", "septal-child", "thyroid-child", "infspasm-child", "ftt-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">About 1 in 700–1000 births. With good care, most people with Down syndrome live into their 60s. Proactive screening prevents avoidable disability.</p>
<div class="glance">
<div><h4>Newborn</h4><p>Echo, FBC, TSH, hearing, eyes, karyotype.</p></div>
<div><h4>Yearly</h4><p>TSH, Hb, hearing, eyes, growth on DS charts.</p></div>
<div><h4>Watch</h4><p>Neck symptoms, sleep apnoea, infantile spasms, leukaemia.</p></div>
<div><h4>Support</h4><p>Early intervention, inclusive education, family support.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Karyotyping is available through JDWNRH (or sent out); echo at JDWNRH and regional hospitals; early intervention and inclusive education are supported through the Ministry of Education and Skills Development and disability organisations. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Associated conditions", html: `${tbl(["System", "Condition", "Frequency"], [["Heart", "AVSD, VSD, ASD, PDA, tetralogy", "About 50%"], ["Ears/eyes", "Hearing loss (glue ear), cataract, refractive error, keratoconus", "50–75%"], ["Endocrine", "Hypothyroidism (congenital and acquired), diabetes", "Common"], ["Blood", "Transient abnormal myelopoiesis, leukaemia (ALL/AML), polycythaemia", "TAM 10%"], ["GI", "Duodenal atresia, Hirschsprung, coeliac, constipation", "Increased"], ["Neuro", "Developmental delay, infantile spasms, early Alzheimer's", "Universal/increased"], ["Airway", "Obstructive sleep apnoea", "Up to 60%"], ["MSK", "Atlanto-axial instability, hypotonia", "1–2% symptomatic"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Trisomy 21", [F.s("Extra chromosome 21: non-disjunction (95%), translocation (4%), mosaic (1%)"), F.a, F.e("Multisystem effects; translocation → recurrence risk (parental karyotype)")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "AAP 2022", "This guide"], [["Routine neck X-rays", "Yes", "No — only if symptoms", "Symptoms only " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Newborn: hypotonia, upslanting palpebral fissures, epicanthic folds, flat facial profile, small ears, single palmar crease, sandal gap, Brushfield spots.</li><li>Delivery of news: together with both parents, private, positive balanced information, offer support contacts.</li></ul><h3>The typical patient</h3><p>A newborn in Phuentsholing has hypotonia and typical features; no murmur. <b>Suspected Down syndrome</b>: tell parents sensitively, karyotype, echo (AVSD can be silent), FBC, TSH, hearing screen, feeding support, early intervention referral.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Congenital hypothyroidism", "TSH, without trisomy features"], ["Zellweger, other syndromes", "Karyotype normal, specific features"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Karyotype (parents if translocation), echo, FBC, TSH, hearing screen, eye exam; later TSH yearly, Hb/ferritin, coeliac if symptoms, sleep study.</p>` },
{ id: "staging", title: "Health check tool", html: `<div class="calc" data-calc="downcheck"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Cardiac surgery for AVSD by 3–6 months (before pulmonary hypertension).</li><li>Feeding support for hypotonia; constipation management.</li><li>Thyroxine for hypothyroidism.</li><li>Grommets/hearing aids; glasses; cataract surgery.</li><li>Early intervention: physiotherapy, speech, OT; inclusive schooling.</li><li>Sleep apnoea: adenotonsillectomy/CPAP.</li><li>Prompt EEG for spasms; FBC for unusual bruising/pallor (leukaemia).</li><li>Puberty, menstrual care, sexual health and safeguarding in adolescence.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("thyroxine"), "Weight-based", "Hypothyroidism"], [dr("furosemide"), "1 mg/kg", "Heart failure pre-surgery"]])}` },
{ id: "populations", title: "Adults", html: `<p>Yearly thyroid, weight, hearing every 3 years, vision; watch for dementia from the 40s; valve disease echo.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Parents grieving the diagnosis", "Time, repeated conversations, support groups, written information"], ["New neck pain, gait change", "Urgent cervical spine imaging (atlanto-axial)"]])}` },
{ id: "complications", title: "Complications", html: `<p>Pulmonary hypertension (untreated AVSD), hearing loss affecting speech, leukaemia, early dementia.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Use the age-based checklist at every review; growth on Down syndrome-specific charts.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Child with Down syndrome", src: "images/down-boy.jpg", mod: "Photograph", ctx: "Trisomy 21", loc: "Face", find: "Characteristic facial features", interp: "Confirm with karyotype; arrange screening", by: "Vanellus Foto", page: "https://commons.wikimedia.org/wiki/File:Boy_with_Down_Syndrome.JPG", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn with suspected Down syndrome", [F.s("Share news sensitively"), F.a, F.s("Karyotype, echo, FBC, TSH, hearing, eyes"), F.a, F.ok("Early intervention + age-based screening")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No echo because no murmur", "Missed AVSD → pulmonary hypertension", "Echo all newborns"], ["Attributing everything to the syndrome", "Missed hypothyroidism/hearing loss", "Screen"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Commonest heart defect in Down syndrome?", "Atrioventricular septal defect (AVSD).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Bull MJ, Trotter T, Santoro SL, et al. Health supervision for children and adolescents with Down syndrome. Pediatrics. 2022;149:e2022057010. <a href="https://doi.org/10.1542/peds.2022-057010" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
