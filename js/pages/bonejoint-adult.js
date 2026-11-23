/* Osteomyelitis and septic arthritis — adults (Bhutan STG 13.5/13.6, Bhutan Sepsis Guide 2025, BSR/BOA) */
registerPage({
id: "bonejoint-adult",
title: "Osteomyelitis & Septic Arthritis — Adults",
subtitle: "A hot swollen joint is septic until aspiration says otherwise; give full-dose IV antibiotics, drain pus, and treat long enough",
age: "Adults", specs: ["ortho", "id", "medicine"],
keywords: ["septic arthritis", "osteomyelitis", "hot swollen joint", "joint aspiration", "chronic osteomyelitis", "sequestrum", "diabetic foot osteomyelitis", "spinal TB", "cloxacillin", "cefazolin"],
related: ["bonejoint-child", "gout-adult", "ssti-adult", "fracture-adult", "dm-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Septic arthritis destroys cartilage within days and kills up to 1 in 10 adults. Osteomyelitis in adults usually follows open fractures, surgery, diabetic foot ulcers or spreads to the spine.</p>
<div class="glance">
<div><h4>Aspirate</h4><p>Before antibiotics: Gram stain, culture, crystals, cell count.</p></div>
<div><h4>Antibiotics</h4><p>${dr("cloxacillin")} 2 g IV 6-hourly or ${dr("cefazolin")} 2 g 8-hourly; ${dr("ceftriaxone")} if gonococcal or gram-negative risk.</p></div>
<div><h4>Drain</h4><p>Joint washout; repeated aspiration if needed.</p></div>
<div><h4>Duration</h4><p>Septic arthritis 4–6 weeks; osteomyelitis 6 weeks or more.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 13.5: benzylpenicillin or (preferably) ceftriaxone 1 g IV 12-hourly and urgent referral for drainage; 13.6: splint, analgesia, ampicillin 500 mg IV 6-hourly. The Bhutan Sepsis Guide 2025 uses higher doses (cloxacillin 2 g 6-hourly or cefazolin 2 g 8-hourly) — followed here. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Risk factors and organisms", html: `${tbl(["Setting", "Organisms"], [["Most adults", "S. aureus, streptococci"], ["Young sexually active", "N. gonorrhoeae (polyarthralgia, rash, tenosynovitis)"], ["Elderly, diabetes, IV drug use, immunosuppressed", "Gram-negatives, S. aureus"], ["Prosthetic joint", "Staphylococci — specialist"], ["Chronic, spine", "TB (Pott's disease) — common in Bhutan"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Septic joint", [F.s("Bacteria in synovium (blood, wound, injection)"), F.a, F.s("Neutrophil enzymes digest cartilage"), F.a, F.e("Joint destruction within days; sepsis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Sepsis Guide 2025 / BSR", "This guide"], [["Antibiotic", "Ampicillin 500 mg / benzylpenicillin / ceftriaxone 1 g", "Cloxacillin 2 g 6-hourly or cefazolin 2 g 8-hourly", "Sepsis Guide " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Acute hot, swollen, painful joint (knee most often) with restricted movement; fever may be absent in elderly.</li><li>Osteomyelitis: bone pain, tenderness, sinus, non-healing ulcer with probe-to-bone; spine — back pain, fever, neurological deficit.</li></ul><h3>The typical patient</h3><p>A 62-year-old woman with diabetes in Samtse has a hot swollen knee for 2 days, temperature 38.4 °C. Aspirate is cloudy; Gram-positive cocci. <b>This is septic arthritis</b>: cloxacillin 2 g IV 6-hourly, orthopaedic washout, glucose control, 4–6 weeks of antibiotics.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Gout/pseudogout", "Crystals (but infection can coexist)"], ["Reactive arthritis", "Preceding diarrhoea/urethritis"], ["Haemarthrosis", "Trauma, anticoagulant"], ["Cellulitis/bursitis", "Joint movement preserved"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Joint aspiration; blood cultures ×2; FBC, CRP, ESR, creatinine, glucose; X-ray (baseline, chronic changes); MRI for spine/osteomyelitis; bone biopsy for chronic osteomyelitis; GeneXpert on pus if TB possible.</p>` },
{ id: "staging", title: "Severity", html: `${tbl(["Feature", "Action"], [["Sepsis (qSOFA 2+, lactate over 2)", "Sepsis bundle, HDU"], ["Hip, shoulder, prosthesis", "Orthopaedic washout"], ["Spinal with deficit", "Urgent MRI, neurosurgery"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Empiric: cloxacillin 2 g IV 6-hourly or cefazolin 2 g IV 8-hourly; add/choose ceftriaxone 2 g daily for gonococcal or gram-negative risk; vancomycin for MRSA.</li><li>Drainage: arthroscopic/open washout or daily needle aspiration.</li><li>IV for about 2 weeks (or until improving), then oral (high-dose cefalexin, clindamycin, co-trimoxazole or ciprofloxacin + rifampicin by culture) to complete 4–6 weeks.</li><li>Chronic osteomyelitis: debridement of sequestrum + 6 weeks or more of antibiotics guided by bone culture.</li><li>Spinal TB: standard TB treatment for 9–12 months (see TB chapter).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("cloxacillin"), "2 g IV 6-hourly", "First line"], [dr("cefazolin"), "2 g IV 8-hourly", "Alternative"], [dr("ceftriaxone"), "2 g IV daily", "Gonococcal, gram-negative"], [dr("vancomycin"), "15–20 mg/kg 12-hourly", "MRSA"], [dr("cefalexin"), "1 g 6-hourly", "Oral step-down"]])}` },
{ id: "populations", title: "Diabetes", html: `<p>Diabetic foot osteomyelitis: probe-to-bone, X-ray, often polymicrobial — see diabetes chapter.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Crystals found but patient septic", "Treat infection too — they can coexist"], ["Antibiotics started before aspiration", "Still aspirate; culture may be negative, cell count helps"]])}` },
{ id: "complications", title: "Complications", html: `<p>Joint destruction, ankylosis, chronic osteomyelitis, sinus tract (rarely squamous cancer), sepsis, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>CRP weekly; physiotherapy early; review at end of therapy and 3 months later.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Brodie abscess", src: "images/brodie-abscess-xr.jpg", mod: "X-ray", ctx: "Subacute osteomyelitis", loc: "Long bone", find: "Lucent cavity with sclerotic rim", interp: "Subacute osteomyelitis", by: "Jto410", page: "https://commons.wikimedia.org/wiki/File:BrodieAbscessRadiograph.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Hot swollen joint", [F.s("Aspirate + blood cultures"), F.a, F.s("Start IV antibiotics"), F.a, F.d("Pus / organisms?"), F.a, F.b([["Yes", F.e("Washout, 4–6 weeks antibiotics")], ["No", F.ok("Review crystals, culture at 48 h")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Starting antibiotics without aspiration", "No organism to guide treatment", "Aspirate first unless shocked"], ["Under-dosing", "Failure", "Full Sepsis Guide doses"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Bhutan Sepsis Guide antibiotic for adult septic arthritis?", "Cloxacillin 2 g IV 6-hourly or cefazolin 2 g IV 8-hourly.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, 13.5–13.6; Quick Guide to Sepsis Management 2025.</li><li id="ref-2">Coakley G, et al. BSR & BHPR, BOA, RCGP and BSAC guidelines for management of the hot swollen joint in adults. Rheumatology. 2006;45:1039-1041.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Dose source", "<span class='pass'>Checked</span>", "Bhutan Sepsis Guide 2025"]], "qc")}` }
]
});
