/* Skin and soft-tissue infections in children: impetigo, cellulitis, abscess, periorbital cellulitis, SSSS */
registerPage({
id: "ssti-child",
title: "Skin and Soft-Tissue Infections — Children",
subtitle: "Impetigo (the commonest), boils and abscesses, cellulitis, the swollen eye that may be orbital cellulitis, scalded skin syndrome, and weight-based 5-day antibiotic courses",
age: "Children", specs: ["paeds", "derm"],
keywords: ["impetigo child", "school sores", "bullous impetigo", "cellulitis child", "abscess child", "boil child", "periorbital cellulitis", "preseptal cellulitis", "orbital cellulitis", "staphylococcal scalded skin syndrome", "SSSS", "omphalitis", "post-streptococcal glomerulonephritis", "cefalexin child", "cloxacillin child"],
related: ["ssti-adult", "scabies-adult", "sepsis-child", "neosepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Impetigo and boils are everyday childhood problems that heal well with cleaning and short courses of treatment. A few red flags change everything: a swollen eye with painful or limited eye movements, a baby with peeling skin, a red umbilicus, or a child who looks ill.</p>
<div class="glance">
<div><h4>Impetigo</h4><p>Few lesions: clean + ${dr("mupirocin")} 5 days. Many or bullous: ${dr("cefalexin")} 25 mg/kg 12-hourly or ${dr("cloxacillin")} 15 mg/kg 6-hourly, 5 days.</p></div>
<div><h4>Cellulitis</h4><p>Same antibiotics, 5 days; IV ${dr("cloxacillin")} 50 mg/kg 6-hourly if unwell.</p></div>
<div><h4>Abscess</h4><p>Drain. Antibiotics only if cellulitis, unwell, face or hand, or young infant.</p></div>
<div><h4>Swollen eye</h4><p>Pain on eye movement, reduced vision, proptosis = <b>orbital cellulitis</b>: IV, urgent referral.</p></div>
<div><h4>Peeling baby</h4><p>Tender red skin with sheet-like peeling = scalded skin syndrome: admit, IV cloxacillin.</p></div>
<div><h4>Look for scabies</h4><p>Itchy impetigo often hides scabies: treat both.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §16.1.2 treats impetigo with topical antibiotics, or oral cloxacillin or erythromycin if extensive. Cloxacillin syrup and amoxicillin reach PHC; cefalexin is at referral hospitals. Impetigo and scabies spread quickly in boarding schools, monastic schools and nunneries: treat contacts and look for clusters. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Common infections", html: `
${tbl(["Infection", "Age", "Look"], [
["Non-bullous impetigo", "2–5 years mostly", "Honey-coloured crusts around nose, mouth, limbs"],
["Bullous impetigo", "Infants and young children", "Flaccid blisters that rupture, leaving thin brown crusts"],
["Boils and abscesses", "Any age", "Tender red nodules, fluctuation"],
["Cellulitis", "Any age", "Spreading red, warm, swollen skin; often after insect bites or scratches"],
["Periorbital (preseptal) cellulitis", "Under 5 years", "Swollen red eyelids, normal eye movements and vision"],
["Orbital cellulitis", "Older children, after sinusitis", "Proptosis, pain on eye movement, reduced movement or vision"],
["Staphylococcal scalded skin syndrome", "Under 5 years", "Fever, tender red skin, sheets of peeling (Nikolsky sign), mucosa spared"],
["Omphalitis", "Newborns", "Red, swollen, smelly umbilicus: neonatal sepsis risk"]])}
` },

{ id: "patho", title: "Why children get them", html: `
${F.chart("Children's skin", [F.s("Scratches, insect bites, scabies, eczema, chickenpox"), F.a, F.s("Staph and strep colonise and invade"), F.a, F.b([["Local", F.e("Impetigo, boils, cellulitis")], ["Toxin-mediated", F.e("Scalded skin syndrome, toxic shock, scarlet fever")], ["Immune", F.e("Post-streptococcal glomerulonephritis 1–3 weeks after impetigo")]])])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (AWaRe 2022, NICE NG153, IDSA)", "This guide"], [
["Oral impetigo treatment", "Cloxacillin or erythromycin", "Cefalexin or cloxacillin (or flucloxacillin), 5 days", "Cefalexin or cloxacillin " + LB.int()],
["Topical choice", "Neomycin, mupirocin or fusidic acid", "Hydrogen peroxide 1% first (NICE); mupirocin or fusidic acid", "Mupirocin, short courses"],
["Cellulitis duration", "5–6 days", "5 days", "5 days"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> how long, spreading, fever, itching at night in the family (scabies), insect bites, eczema, recent chickenpox, siblings or classmates with sores, dark or reduced urine.</li>
<li><b>Examine:</b> extent of lesions, fluctuation, lymph nodes, eye movements and vision in eyelid swelling, umbilicus in newborns, BP and urine dipstick if impetigo was recent and the face is puffy.</li></ul>
${box("red", "Danger signs", `<ul><li>Pain on eye movement, proptosis, reduced vision or eye movement</li><li>Widespread tender red skin or peeling</li><li>Infant under 3 months, or any sign of sepsis</li><li>Rapid spread, severe pain, dusky skin (necrotising infection, e.g. after chickenpox)</li><li>Puffy face, dark urine, high BP (glomerulonephritis)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 4-year-old (16 kg) from a boarding pre-school in Trongsa has crusted sores around his nose and on both legs for a week; he scratches at night and his classmates are itching too. He is well with no fever. <b>This is widespread impetigo, probably on top of scabies</b>. He needs oral cefalexin 400 mg 12-hourly (25 mg/kg) for 5 days, crust cleaning, permethrin for him and all his close contacts, and a note to the school.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Eczema (infected)", "Itchy, flexures, chronic; may be impetiginised"], ["Herpes simplex (eczema herpeticum)", "Clustered punched-out erosions, unwell: aciclovir"], ["Chickenpox", "Vesicles of different stages, fever"], ["Insect bite reaction", "Itchy papules, central punctum"], ["Tinea", "Ring with scaly edge"], ["Allergic eyelid swelling", "Itchy, bilateral, no fever"]])}` },

{ id: "invest", title: "Investigations", html: `<p>Usually none. Swab for culture if recurrent or not responding. Blood culture and CBC if unwell. Urine dipstick and BP if facial swelling or dark urine after impetigo. CT of orbits for suspected orbital cellulitis (at a referral hospital).</p>` },

{ id: "staging", title: "Treatment tool", html: `<div class="calc" data-calc="sstiplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Impetigo</h3>
<ul><li>Soak and gently remove crusts with soap and water twice daily; cut nails; separate towels.</li>
<li>Few lesions: ${dr("mupirocin")} 3 times daily for 5 days.</li>
<li>Widespread or bullous: ${dr("cefalexin")} 25 mg/kg 12-hourly (max 500 mg) or ${dr("cloxacillin")} 15 mg/kg 6-hourly (max 500 mg) for 5 days. Penicillin allergy: azithromycin 10 mg/kg once daily for 3 days.</li>
<li>Back to school after 48 hours of antibiotics or once lesions crust over. Treat scabies in the family if present.</li></ul>
<h3>B. Cellulitis and abscess</h3>
<ul><li>Well child: oral cefalexin or cloxacillin as above for 5 days; mark the edge; review in 48 hours.</li>
<li>Unwell, infant under 3 months, face near the eye, or not improving: IV ${dr("cloxacillin")} 50 mg/kg 6-hourly (max 2 g) or ${dr("ceftriaxone")} 50 mg/kg daily.</li>
<li>Abscess: drain under local anaesthetic (sedation for young children at hospital); antibiotics only with cellulitis or systemic features.</li></ul>
<h3>C. Eye swelling</h3>
<ul><li>Preseptal (eye moves fully, vision normal, child well): oral co-amoxiclav or cefalexin; review in 24 hours.</li>
<li>Orbital (any red flag): IV ceftriaxone 50–100 mg/kg/day + metronidazole; urgent ophthalmology/ENT referral; CT.</li></ul>
<h3>D. Scalded skin syndrome and omphalitis</h3>
<ul><li>SSSS: admit; IV cloxacillin; fluids; analgesia; gentle skin care with paraffin; heals without scars.</li>
<li>Omphalitis: treat as neonatal sepsis (see <a href="#/d/neosepsis-child">Neonatal sepsis</a>).</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("cefalexin"), "25 mg/kg 12-hourly (max 500 mg) × 5 days", "Syrup at referral hospitals"],
[dr("cloxacillin"), "15 mg/kg 6-hourly PO; 50 mg/kg 6-hourly IV", "Empty stomach"],
[dr("mupirocin"), "Topical 3 times daily × 5 days", "Localised impetigo"],
[dr("azithromycin"), "10 mg/kg daily × 3 days", "Penicillin allergy"],
[dr("ceftriaxone"), "50 mg/kg daily (orbital 100 mg/kg/day)", "Severe"]])}
` },

{ id: "populations", title: "Newborns and infants", html: `<ul><li>Pustules or red umbilicus in a newborn: examine for sepsis; under 10 small pustules in a well baby can be treated with gentian violet or topical antiseptic and close review (WHO); more, or umbilical redness spreading to the skin, needs IV antibiotics.</li><li>Infants with bullous impetigo or SSSS deteriorate quickly: admit.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Impetigo outbreak in a monastic school", "Treat cases, check for scabies in all, hygiene teaching", "Cluster control"], ["Face swelling 2 weeks after impetigo, dark urine", "BP, urine; refer for post-streptococcal glomerulonephritis", "Hypertension, encephalopathy risk"], ["Spreading redness and severe pain after chickenpox", "Necrotising fasciitis or toxic shock: IV antibiotics, surgeon", "Strep A after varicella"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Spread to contacts, cellulitis, sepsis, post-streptococcal glomerulonephritis, orbital abscess and cavernous sinus thrombosis (orbital cellulitis), scarring from ecthyma. Uncomplicated impetigo heals in 1–2 weeks without scars.</p>` },

{ id: "followup", title: "Advice for families", html: `
${box("green", "Advice", `<ul><li>Wash sores gently, keep nails short, use separate towels; wash hands after touching sores.</li><li>Keep at home until 48 hours of antibiotics or sores have crusted.</li><li>Treat itching in the family (scabies) at the same time.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Swelling around the eye with pain or difficulty moving the eye</li><li>Fever, spreading redness, peeling skin</li><li>Puffy face or dark urine in the weeks after</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Bullous impetigo", src: "images/bullous-impetigo.jpg", mod: "Photograph", ctx: "Child", loc: "Skin", find: "Flaccid blisters and erosions with thin crusts", interp: "Staphylococcal toxin effect: oral cefalexin or cloxacillin for 5 days", by: "Littlekidsdoc", page: "https://commons.wikimedia.org/wiki/File:Bullous_impetigo.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with skin infection", [F.s("Danger signs? (eye, peeling, infant, sepsis, necrotising)"), F.a, F.b([["Yes", F.e("Admit, IV cloxacillin or ceftriaxone, refer as needed")], ["No", F.d("Impetigo, cellulitis or abscess?")]]), F.a, F.b([["Impetigo", F.s("Few: mupirocin. Many: oral 5 days")], ["Cellulitis", F.s("Oral 5 days; review 48 h")], ["Abscess", F.s("Drain")]]), F.a, F.ok("Look for scabies; treat contacts")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing scabies under impetigo", "Recurrence", "Ask about night itch in the family"], ["Treating a swollen eye as allergy", "Orbital cellulitis", "Check eye movements and vision"], ["Long topical courses", "Resistance", "5 days"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Which organisms cause impetigo?", "Staphylococcus aureus (both forms) and group A Streptococcus (non-bullous).")}
${qa("Intern/MO", "Oral cefalexin dose for an 18 kg child with widespread impetigo?", "25 mg/kg = 450 mg 12-hourly (round to the nearest practical dose) for 5 days.")}
${qa("Specialist", "How do you separate preseptal from orbital cellulitis?", "Orbital cellulitis has proptosis, pain on eye movement, reduced eye movement or vision; preseptal does not.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.1.2 Bacterial skin infections; NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the IDSA. Clin Infect Dis 2014;59:e10–e52. <a href="https://doi.org/10.1093/cid/ciu296" target="_blank" rel="noopener">doi:10.1093/cid/ciu296</a></li>
<li id="ref-3">World Health Organization. The WHO AWaRe Antibiotic Book. Geneva: WHO; 2022; Pocket Book of Hospital Care for Children, 2nd ed. 2013.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §16.1.2", "<span class='pass'>Used</span>", "Child doses from AWaRe and NEMF"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"]], "qc")}` }
]
});
