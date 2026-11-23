/* Osteomyelitis and septic arthritis — children (Bhutan STG 13.5/13.6, Bhutan Sepsis Guide 2025, ESPID 2017) */
registerPage({
id: "bonejoint-child",
title: "Osteomyelitis & Septic Arthritis — Children",
subtitle: "A febrile child who will not move a limb or bear weight has bone or joint infection until proven otherwise: aspirate, give high-dose IV antibiotics, and drain early",
age: "Children", specs: ["paeds", "ortho", "id"],
keywords: ["septic arthritis", "osteomyelitis", "acute haematogenous osteomyelitis", "Kocher criteria", "limping child", "transient synovitis", "Staphylococcus aureus", "Kingella", "cloxacillin", "septic hip"],
related: ["bonejoint-adult", "ssti-child", "sepsis-child", "sam-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In children, bone and joint infections spread through the blood, usually from Staphylococcus aureus. A septic hip can destroy the joint in days.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever + refusing to walk or use a limb; pseudo-paralysis in infants.</p></div>
<div><h4>Test</h4><p>CRP, ESR, WBC, blood culture, ultrasound and aspiration.</p></div>
<div><h4>Treat</h4><p>${dr("cloxacillin")} 50 mg/kg 6-hourly (max 2 g) or ${dr("cefazolin")}; under 5: add/use ${dr("ceftriaxone")}.</p></div>
<div><h4>Drain</h4><p>Septic joint: urgent washout; abscess: drainage.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 13.5/13.6 doses (benzylpenicillin, ampicillin 500 mg) are lower than the Bhutan Sepsis Guide 2025, which recommends cloxacillin or cefazolin at full doses — this guide follows the Sepsis Guide. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `${tbl(["Age", "Usual organisms"], [["Newborn", "S. aureus, group B strep, gram-negatives"], ["Under 5 years", "S. aureus, Kingella kingae, Strep, (Hib if unvaccinated)"], ["Over 5 years", "S. aureus, group A strep"], ["Sickle cell", "Salmonella, S. aureus"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Haematogenous osteomyelitis", [F.s("Bacteraemia lodges in metaphysis"), F.a, F.s("Pus under periosteum → subperiosteal abscess"), F.a, F.e("Spread into joint (hip, shoulder), sequestrum, chronic osteomyelitis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Sepsis Guide 2025 / ESPID", "This guide"], [["Antibiotic dose", "Ampicillin 500 mg 6-hourly", "Cloxacillin 50 mg/kg 6-hourly", "Sepsis Guide " + LB.loc()], ["IV duration", "Not stated", "Short IV (2–4 days) then oral if improving", "ESPID"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Fever, limp, refusal to bear weight, pain on any movement, joint held flexed (hip: flexed, abducted, externally rotated).</li><li>Osteomyelitis: point bone tenderness, warmth, swelling.</li></ul>${box("red", "Urgent", `<ul><li>Septic shock</li><li>Hip or shoulder involvement</li><li>Neonate with any limb swelling</li></ul>`)}<h3>The typical patient</h3><p>A 4-year-old (16 kg) in Dagana has fever and will not stand for 2 days; hip held flexed; CRP 120, ESR 60, WBC 16,000. <b>Kocher 4/4: septic hip</b> — blood culture, ultrasound-guided aspiration, cloxacillin 800 mg IV 6-hourly plus ceftriaxone, urgent orthopaedic washout.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Transient synovitis", "Well, low fever, recent viral illness, normal CRP"], ["Fracture/trauma (including NAI)", "X-ray"], ["Leukaemia, Ewing sarcoma", "Night pain, cytopenias, X-ray"], ["Juvenile arthritis, rheumatic fever", "Multiple joints, migratory"], ["TB of bone/joint", "Slow, chronic, contact history"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC, CRP, ESR, blood culture (before antibiotics), joint aspirate (Gram stain, culture, cell count over 50,000), X-ray (normal early; periosteal reaction after 10–14 days), ultrasound for effusion/abscess, MRI where available.</p>` },
{ id: "staging", title: "Kocher criteria and doses", html: `<div class="calc" data-calc="kocher"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>IV antibiotics after cultures: cloxacillin 50 mg/kg (max 2 g) 6-hourly or cefazolin 50 mg/kg 8-hourly; under 5 years add ceftriaxone 50–100 mg/kg daily (Kingella); MRSA risk — vancomycin or clindamycin.</li><li>Septic arthritis: urgent aspiration/washout (arthrotomy or arthroscopy), especially the hip.</li><li>Switch to oral (cefalexin 25 mg/kg 6-hourly or co-amoxiclav) when afebrile and CRP falling, usually after 2–4 days.</li><li>Total: septic arthritis 2–3 weeks; osteomyelitis 3–4 weeks (longer if complicated).</li><li>Splint for comfort briefly, then early movement.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("cloxacillin"), "50 mg/kg 6-hourly (max 2 g)", "First line"], [dr("cefazolin"), "50 mg/kg 8-hourly", "Alternative"], [dr("ceftriaxone"), "50–100 mg/kg daily", "Under 5, Kingella"], [dr("cefalexin"), "25 mg/kg 6-hourly", "Oral step-down"], [dr("ibuprofen"), "10 mg/kg 8-hourly", "Pain"]])}` },
{ id: "populations", title: "Neonates and malnourished children", html: `<p>Neonates may show only poor feeding and a swollen limb, with multiple sites; treat with cloxacillin + gentamicin (or cefotaxime). SAM: fewer signs, test early.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No ultrasound or orthopaedics", "Aspirate the knee if trained; start antibiotics; refer the hip urgently"], ["Fever persists after 72 h", "Undrained abscess — image and drain"]])}` },
{ id: "complications", title: "Complications", html: `<p>Avascular necrosis of the femoral head, growth arrest, limb shortening, chronic osteomyelitis, pathological fracture, sepsis.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>CRP weekly until normal; review for limb length and joint function at 6–12 months.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Brodie abscess", src: "images/brodie-abscess-xr.jpg", mod: "X-ray", ctx: "Subacute osteomyelitis", loc: "Long bone metaphysis", find: "Lucent lesion with sclerotic rim", signs: "Brodie abscess", interp: "Subacute osteomyelitis; may need curettage", by: "Jto410", page: "https://commons.wikimedia.org/wiki/File:BrodieAbscessRadiograph.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Limping febrile child", [F.s("CRP, ESR, WBC, blood culture, X-ray, ultrasound"), F.a, F.d("Kocher 2+ or effusion with fever?"), F.a, F.b([["Yes", F.e("Aspirate, IV antibiotics, washout")], ["No", F.ok("Rest, NSAID, review 24–48 h")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Calling a septic hip 'transient synovitis'", "Joint destruction", "Use Kocher + CRP; aspirate if in doubt"], ["Low-dose penicillin", "Treatment failure", "Cloxacillin 50 mg/kg"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Name the four Kocher criteria.", "Non-weight-bearing, fever over 38.5 °C, ESR over 40, WBC over 12,000.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Kocher MS, Zurakowski D, Kasser JR. Differentiating between septic arthritis and transient synovitis of the hip in children: an evidence-based clinical prediction algorithm. J Bone Joint Surg Am. 1999;81:1662-1670. <a href="https://doi.org/10.2106/00004623-199912000-00002" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, 13.5–13.6; Quick Guide to Sepsis Management 2025.</li><li id="ref-3">Saavedra-Lozano J, et al. Bone and joint infections (ESPID guideline). Pediatr Infect Dis J. 2017;36:788-799.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
