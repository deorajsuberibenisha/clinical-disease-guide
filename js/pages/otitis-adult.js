/* Ear infections in adults: otitis externa, acute otitis media, chronic suppurative otitis media, mastoiditis */
registerPage({
id: "otitis-adult",
title: "Otitis Externa and Otitis Media — Adults",
subtitle: "The painful ear: careful cleaning and topical treatment for otitis externa, when an adult's middle-ear infection needs amoxicillin, the chronic discharging ear, and the warning signs of malignant otitis externa and mastoiditis",
age: "Adults", specs: ["ent"],
keywords: ["otitis externa", "swimmer's ear", "ear canal infection", "otomycosis", "malignant otitis externa", "necrotising otitis externa", "otitis media adult", "acute otitis media", "CSOM", "chronic suppurative otitis media", "discharging ear", "perforated eardrum", "cholesteatoma", "mastoiditis", "ear wax", "earache", "otalgia"],
related: ["otitis-child", "urti-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In adults, a painful ear that hurts when you pull it is usually otitis externa, cured by cleaning and drops rather than tablets. A deep throbbing ear after a cold is otitis media. A long-standing discharging ear is chronic otitis media, which slowly costs people their hearing and needs a specialist.</p>
<div class="glance">
<div><h4>Otitis externa</h4><p>Pain on tragal pressure or pulling the pinna; swollen canal: <b>clean, then topical</b> treatment; review 1–2 days (STG).</p></div>
<div><h4>Acute otitis media</h4><p>Bulging red drum after a cold: analgesia; ${dr("amoxicillin")} 500 mg TDS (5–7 days) if severe or not settling.</p></div>
<div><h4>Discharging ear</h4><p>Dry-mop 3 times a day; nothing into a perforated ear except quinolone drops.</p></div>
<div><h4>Chronic (over 2 weeks)</h4><p>CSOM: ENT referral, hearing test; foul discharge = cholesteatoma risk.</p></div>
<div><h4>Diabetic, severe pain</h4><p>Think <b>malignant otitis externa</b>: refer urgently.</p></div>
<div><h4>Behind the ear</h4><p>Swelling, redness, protruding ear: mastoiditis — refer now.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 ch.14: otitis externa — clean under good light, chloramphenicol 1% ointment, review in 1–2 days, amoxicillin 500 mg TDS if severe; otitis media — dry mopping, nothing in a perforated ear, amoxicillin (first choice) or co-trimoxazole for 7–10 days, saline nose drops and paracetamol; refer mastoiditis and intracranial complications. NEML lists chloramphenicol eye ointment and drops (used in ears); ciprofloxacin ear drops are not listed. ENT surgeons are at JDWNRH and the regional referral hospitals. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Condition", "Cause", "Key features"], [
["Acute otitis externa", "Pseudomonas, S. aureus; moisture, scratching, cotton buds, eczema", "Itch, then pain, worse on moving the pinna or pressing the tragus; swollen red canal, debris"],
["Otomycosis", "Aspergillus, Candida (after antibiotic drops)", "Itch, fluffy white or black debris"],
["Malignant (necrotising) otitis externa", "Pseudomonas in diabetics or immunosuppressed", "Severe night pain, granulation tissue on the canal floor, cranial nerve palsy (VII)"],
["Acute otitis media", "Viral then pneumococcus, H. influenzae, Moraxella", "Deep earache, fever, hearing loss; red bulging drum; discharge if perforated"],
["Otitis media with effusion", "After AOM, Eustachian tube dysfunction", "Fullness, muffled hearing; dull drum with fluid. Unilateral in an adult: examine the postnasal space"],
["Chronic suppurative otitis media", "Persistent perforation with discharge over 2 weeks", "Painless discharge, hearing loss"],
["Cholesteatoma", "Skin trapped in the middle ear", "Foul-smelling scanty discharge, attic perforation, progressive deafness"]])}
` },

{ id: "patho", title: "How ear infections develop", html: `
${F.chart("Outer vs middle ear", [F.b([["Outer ear canal", F.s("Wet or scratched skin loses its wax barrier → bacteria and fungi invade → swelling narrows the canal")], ["Middle ear", F.s("Cold blocks the Eustachian tube → fluid → bacteria → pus under pressure → drum bulges or perforates")]]), F.a, F.e("Untreated chronic infection erodes bone: mastoiditis, facial palsy, meningitis, brain abscess")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide"], [
["Otitis externa treatment", "Chloramphenicol 1% ointment; oral amoxicillin if severe", "Topical antibiotic ± steroid drops (quinolone if perforation possible); oral antibiotics only for spread beyond the canal or immunosuppression (AAO-HNS 2014)" + r(2), "Topical first; oral antibiotics only for spread (anti-Pseudomonas oral drug is ciprofloxacin, not amoxicillin) " + LB.int()],
["AOM duration (adult)", "7–10 days", "5–7 days (AWaRe, NICE NG91)", "5–7 days"],
["CSOM", "Dry mopping", "Dry mopping plus topical quinolone drops (WHO, Cochrane)", "Both; refer"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> pain, itch, discharge (colour, smell, duration), hearing loss, recent cold, swimming or bathing in rivers, cotton bud or matchstick use, diabetes, previous ear surgery.</li>
<li><b>Examine:</b> pinna and tragus tenderness, skin behind the ear, canal (swelling, debris, fungal spores), drum (colour, bulging, perforation, retraction pocket), facial nerve, neck nodes; tuning fork tests (Rinne, Weber).</li></ul>
${box("red", "Refer urgently", `<ul><li>Swelling, redness or tenderness behind the ear, ear pushed forward (mastoiditis)</li><li>Facial weakness, vertigo with vomiting, severe headache, neck stiffness, drowsiness</li><li>Diabetic or immunosuppressed with severe pain and granulation tissue (malignant otitis externa)</li><li>Sudden hearing loss without infection (sudden sensorineural hearing loss: steroids within days)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 30-year-old man from Gelephu has had an itchy, then very painful right ear for 3 days after bathing in the river; pulling his ear makes him wince. The canal is swollen with wet debris; the drum is hard to see. <b>This is acute otitis externa</b>. He needs gentle dry cleaning under good light, a wick with topical antibiotic (chloramphenicol ointment per STG, or antibiotic–steroid drops), pain relief, keeping water out, and review in 1–2 days.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Referred pain", "Normal ear; dental, TMJ, throat or (in smokers and drinkers) laryngeal or pharyngeal cancer"], ["Herpes zoster oticus (Ramsay Hunt)", "Vesicles, facial palsy"], ["Furuncle of the canal", "Localised tender swelling"], ["Foreign body or impacted wax", "Visible; children and older adults"], ["Barotrauma", "After flying or diving"]])}` },

{ id: "invest", title: "Investigations", html: `<p>None for most. Swab discharge for culture in chronic, recurrent or severe cases. Glucose in recurrent or severe otitis externa. Audiometry for chronic otitis media or persistent hearing loss. CT temporal bone for mastoiditis, cholesteatoma or malignant otitis externa (ESR/CRP raised).</p>` },

{ id: "staging", title: "Antibiotic tool", html: `<p>For adults, enter the age in months (for example 360 for 30 years) and the weight: the tool gives the adult dose for acute otitis media.</p><div class="calc" data-calc="aomplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Acute otitis externa</h3>
<ul><li>Clean the canal: dry mopping with cotton wool on a probe, or gentle suction; remove debris and wax (STG).</li>
<li>Topical treatment for 7 days: ${dr("chloramphenicol_ear", "chloramphenicol 1% ointment")} (STG), or antibiotic–steroid drops where available; use a wick if the canal is swollen shut. If the drum may be perforated, prefer quinolone (ciprofloxacin) drops.</li>
<li>Pain: ${dr("paracetamol")} or ibuprofen; it can be severe.</li>
<li>Oral antibiotics only if cellulitis spreads beyond the canal, or diabetes/immunosuppression: ${dr("ciprofloxacin")} 500–750 mg BD (anti-Pseudomonas); amoxicillin (STG) covers staph and strep but not Pseudomonas.</li>
<li>Otomycosis: clean thoroughly; clotrimazole 1% drops or cream for 2 weeks.</li></ul>
<h3>B. Acute otitis media</h3>
<ul><li>Analgesia for all; most adult AOM resolves in 3 days.</li>
<li>${dr("amoxicillin")} 500 mg TDS (or 1 g TDS if severe) for 5–7 days if severe, systemically unwell, perforated with discharge, or not improving after 2–3 days. Penicillin allergy: ${dr("azithromycin")} 500 mg daily for 3 days or co-trimoxazole (STG). Not better: ${dr("coamoxiclav")}.</li>
<li>Saline nose drops (STG); no decongestants or antihistamines needed.</li></ul>
<h3>C. Discharging ear and CSOM</h3>
<ul><li>Dry mop 3 times daily (STG); keep water out (cotton wool with petroleum jelly when bathing); quinolone drops where available for 2 weeks.</li>
<li>Refer for audiometry and surgical assessment (tympanoplasty, mastoid surgery), urgently if foul discharge, granulations or complications.</li></ul>
<h3>D. Mastoiditis and intracranial spread</h3>
<p>IV ${dr("ceftriaxone")} 2 g daily (with metronidazole for chronic disease) and urgent ENT referral (STG).</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("chloramphenicol_ear"), "Ointment to canal 2–3 times daily × 7 days", "After cleaning (STG)"],
[dr("amoxicillin"), "500 mg TDS × 5–7 days", "AOM"],
[dr("ciprofloxacin"), "500–750 mg BD", "Spreading or diabetic otitis externa"],
[dr("azithromycin"), "500 mg daily × 3 days", "Penicillin allergy (AOM)"],
[dr("ceftriaxone"), "2 g IV daily", "Mastoiditis"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Diabetes and immunosuppression:</b> lower threshold for oral ciprofloxacin and referral; malignant otitis externa needs weeks of IV therapy.</li><li><b>Pregnancy:</b> topical treatment is preferred; avoid quinolones orally.</li><li><b>Hearing aid users:</b> clean moulds; fungal infections common.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Canal too swollen to see the drum", "Wick and drops; review in 2 days to see the drum", "Perforation status matters"], ["Adult with persistent unilateral middle-ear fluid", "Examine the postnasal space; refer to ENT", "Nasopharyngeal tumour can present this way"], ["Elderly diabetic, ear pain for weeks, facial droop", "Urgent ENT referral: malignant otitis externa", "Skull-base osteomyelitis"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Otitis externa: spreading cellulitis, malignant otitis externa (skull-base osteomyelitis, cranial nerve palsies). Otitis media: perforation, CSOM, conductive hearing loss, mastoiditis, facial palsy, labyrinthitis, meningitis, brain abscess, lateral sinus thrombosis. Most acute infections settle in under a week.</p>` },

{ id: "followup", title: "Advice", html: `
${box("green", "Advice to give", `<ul><li>Keep water out of the ear (cotton wool smeared with petroleum jelly) while it heals.</li><li>Never clean or scratch the ear with cotton buds, matchsticks or hairpins (STG).</li><li>Finish the drops for the full 7 days.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Swelling or pain behind the ear, the ear sticking out</li><li>Face weakness, dizziness with vomiting, severe headache, neck stiffness</li><li>Not better in 2–3 days</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Acute otitis externa", src: "images/otitis-externa.jpg", mod: "Photograph", ctx: "Painful ear", loc: "External ear canal", find: "Swollen, red ear canal with discharge", interp: "Clean, then topical antibiotic; oral antibiotics only if spreading", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:OtitisExterna10.JPG", lic: "CC BY 3.0" })}
${fig({ title: "Perforated eardrum after otitis media", src: "images/perforated-drum.jpg", mod: "Otoscopy", ctx: "Discharging ear", loc: "Tympanic membrane", find: "Hole in the drum with moist middle ear", interp: "Dry mop; nothing ototoxic into the ear; persistence over 2 weeks = CSOM, refer", by: "Gzzz", page: "https://commons.wikimedia.org/wiki/File:Otite_moyenne_perfor%C3%A9e.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Painful ear in an adult", [F.s("Look: pinna, canal, drum; tragus pain?"), F.a, F.b([["Canal swollen, tragus tender", F.s("Otitis externa: clean + topical 7 days")], ["Drum red or bulging", F.s("AOM: analgesia; amoxicillin if severe or no better")], ["Discharge over 2 weeks", F.e("CSOM: dry mop, quinolone drops, ENT")]]), F.a, F.e("Mastoid swelling, palsy, diabetic severe pain → urgent referral")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Oral antibiotics for simple otitis externa", "No benefit; misses Pseudomonas", "Clean + topical"], ["Drops without cleaning", "Cannot reach the skin", "Clean first"], ["Aminoglycoside drops in a perforated ear", "Ototoxic", "Quinolone drops"], ["Ignoring unilateral effusion in an adult", "Missed nasopharyngeal cancer", "Refer"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Key sign distinguishing otitis externa from otitis media?", "Pain on pulling the pinna or pressing the tragus.")}
${qa("Intern/MO", "Who should be suspected of malignant otitis externa?", "Elderly diabetics or immunosuppressed patients with severe persistent ear pain, granulation tissue in the canal and cranial nerve palsy.")}
${qa("Specialist", "Why is foul-smelling scanty discharge worrying?", "It suggests cholesteatoma, which erodes bone and causes intracranial complications.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, ch.14 Ear, Nose and Throat (§14.1 Acute otitis externa, §14.3 Acute otitis media); NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Rosenfeld RM, Schwartz SR, Cannon CR, et al. Clinical practice guideline: acute otitis externa. Otolaryngol Head Neck Surg 2014;150(1 Suppl):S1–S24. <a href="https://doi.org/10.1177/0194599813517083" target="_blank" rel="noopener">doi:10.1177/0194599813517083</a></li>
<li id="ref-3">World Health Organization. The WHO AWaRe Antibiotic Book. Geneva: WHO; 2022 (acute otitis media).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG ch.14", "<span class='pass'>Used</span>", "Otitis externa and media sections"], ["DOI", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Quinolone ear drops", "<span class='flag'>Not on NEML 2025</span>", "Advice adapted"]], "qc")}` }
]
});
