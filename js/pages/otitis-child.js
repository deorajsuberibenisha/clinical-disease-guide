/* Ear infections in children: acute otitis media, glue ear, discharging ear, otitis externa, mastoiditis */
registerPage({
id: "otitis-child",
title: "Otitis Media and Otitis Externa — Children",
subtitle: "The crying child with earache: diagnosing a bulging drum, AAP 2013 rules for antibiotics versus watchful waiting, high-dose amoxicillin, the discharging ear, glue ear and hearing, and mastoiditis",
age: "Children", specs: ["paeds", "ent"],
keywords: ["otitis media child", "acute otitis media", "AOM", "earache child", "ear infection", "bulging tympanic membrane", "watchful waiting", "high-dose amoxicillin", "discharging ear child", "ear discharge", "CSOM child", "glue ear", "otitis media with effusion", "grommets", "mastoiditis child", "otitis externa child", "hearing loss child", "dry mopping"],
related: ["otitis-adult", "urti-child", "meningitis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Ear infections are among the commonest childhood illnesses. Most settle within 2–3 days with good pain relief. Antibiotics help most in children under 2 with both ears affected, in any child with a discharging ear, and in those who are very unwell. Long-standing discharge and hearing loss need follow-up so a child does not fall behind at school.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Acute ear pain or fever <b>plus a bulging drum</b> (or new discharge). A red drum alone in a crying child is not enough.</p></div>
<div><h4>Pain relief</h4><p>${dr("paracetamol")} 15 mg/kg or ibuprofen 10 mg/kg for everyone.</p></div>
<div><h4>Antibiotic</h4><p>Under 6 months, discharge, severe, or under 2 with both ears: ${dr("amoxicillin")} 40–45 mg/kg twice daily.</p></div>
<div><h4>Watchful waiting</h4><p>Mild, one ear (or 2 years and over): 48–72 hours, back-up prescription.</p></div>
<div><h4>Discharging ear</h4><p>Dry-mop 3 times a day; keep water out; over 2 weeks = CSOM.</p></div>
<div><h4>Mastoiditis</h4><p>Swelling behind the ear, ear pushed out: IV ceftriaxone, refer.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §14.3: clean the discharging ear 3 times a day with a twist of cotton wool, put nothing in a perforated ear, keep water out, give amoxicillin (first choice; child 15 mg/kg TDS) or co-trimoxazole (8 mg TMP/kg/day in 2 doses) for 7–10 days, saline nose drops twice daily and paracetamol for 3 days; refer mastoiditis and intracranial complications. Pneumococcal vaccine (PCV) is part of Bhutan's childhood schedule, which reduces severe disease. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Condition", "Features", "Action"], [
["Acute otitis media (AOM)", "Sudden earache (ear pulling, crying, poor sleep), fever, bulging red or yellow drum", "Analgesia ± amoxicillin"],
["AOM with perforation", "Pus running from the ear, pain eases", "Antibiotic + dry mopping"],
["Otitis media with effusion (glue ear)", "No pain or fever; dull drum, fluid, hearing loss, speech delay", "Watch 3 months; hearing test; grommets if persistent"],
["Chronic suppurative otitis media (CSOM)", "Discharge over 2 weeks through a perforation", "Dry mop, quinolone drops, ENT"],
["Otitis externa", "Older children, swimmers; tragal pain, swollen canal", "Clean + topical"],
["Mastoiditis", "Swelling, redness, tenderness behind the ear; pinna pushed forward", "IV antibiotics, urgent ENT"]])}
` },

{ id: "patho", title: "Why children get them", html: `
${F.chart("The child's Eustachian tube", [F.s("Shorter, more horizontal tube; big adenoids; frequent colds"), F.a, F.s("Tube blocks → middle-ear fluid → bacteria (pneumococcus, H. influenzae, Moraxella)"), F.a, F.b([["Most", F.ok("Settle in 2–3 days")], ["Some", F.e("Perforation, CSOM, hearing loss, mastoiditis")]]), F.a, F.s("Risks: smoke exposure (including wood smoke), bottle-feeding lying down, crèche, no breastfeeding, cleft palate")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "AAP 2013 / NICE NG91 / WHO AWaRe", "This guide"], [
["Amoxicillin dose", "15 mg/kg TDS (45 mg/kg/day)", "80–90 mg/kg/day in 2 doses (AAP); AWaRe 80–90 mg/kg/day", "40–45 mg/kg BD (max 1 g per dose) " + LB.int()],
["Duration", "7–10 days", "Under 2 y and severe: 10 days; 2–5 y: 7 days; 6 y+: 5–7 days; AWaRe/NICE 5 days", "By age, as AAP"],
["Who gets antibiotics", "All AOM", "Selected; watchful waiting for mild unilateral or 2 y+", "As AAP"],
["Second line", "Co-trimoxazole", "Co-amoxiclav; then ceftriaxone IM", "Co-amoxiclav; co-trimoxazole for penicillin allergy"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> ear pain or pulling, fever, discharge, recent cold, hearing, speech, school progress, previous episodes, smoke in the home.</li>
<li><b>Examine:</b> both drums with a good otoscope (pull the pinna back and down in infants, up and back in older children); look for bulging, loss of landmarks, perforation, discharge; skin behind the ear; facial nerve; signs of meningitis.</li></ul>
${box("red", "Danger signs: refer or admit", `<ul><li>Swelling, redness or tenderness behind the ear; ear pushed forward</li><li>Neck stiffness, drowsiness, persistent vomiting, seizures, severe headache</li><li>Facial weakness, squint, unsteadiness</li><li>Infant under 3 months with fever</li></ul>`)}
<h3>The typical patient</h3>
<p>A 14-month-old (10 kg) from Samtse has had a cold for 3 days, then fever of 38.9 °C, crying and pulling at both ears all night. Both drums are red and bulging. <b>This is bilateral acute otitis media in a child under 2</b>, so an antibiotic is recommended: amoxicillin 450 mg twice daily (90 mg/kg/day) for 10 days, with paracetamol 150 mg every 6 hours and a check in 2–3 days if not better.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Teething", "No fever over 38.5 °C, normal drums"], ["Otitis externa", "Tragal tenderness, swollen canal"], ["Foreign body", "Visible; unilateral smelly discharge"], ["Meningitis", "Ill child, neck stiffness, bulging fontanelle"], ["Dental pain, tonsillitis", "Normal drums; referred pain"]])}` },

{ id: "invest", title: "Investigations", html: `<p>Diagnosis is by otoscopy. Swab persistent discharge. Hearing test (audiometry or tympanometry) for glue ear lasting over 3 months, CSOM, speech delay or school difficulty. CT for suspected mastoiditis.</p>` },

{ id: "staging", title: "Antibiotic or watch tool", html: `<div class="calc" data-calc="aomplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Acute otitis media</h3>
<ul><li>Pain relief for all: ${dr("paracetamol")} 15 mg/kg 6-hourly or ibuprofen 10 mg/kg 8-hourly; no decongestants or antihistamines. Saline nose drops (STG).</li>
<li><b>Antibiotic now</b> if under 6 months, discharge, severe (pain over 48 hours, fever 39 °C or more, looks unwell), or under 2 years with both ears affected.</li>
<li><b>Watchful waiting or antibiotic</b> for non-severe, one ear, or age 2 and over: review or start a back-up prescription if not better in 48–72 hours.</li>
<li>${dr("amoxicillin")} 40–45 mg/kg twice daily (max 1 g per dose): 10 days under 2 years, 7 days at 2–5 years, 5–7 days at 6 and over. Recent amoxicillin or conjunctivitis with otitis: ${dr("coamoxiclav")} (90 mg/kg/day amoxicillin component where the 7:1 or 14:1 formulation exists; otherwise 45 mg/kg/day co-amoxiclav plus 45 mg/kg/day amoxicillin). Penicillin allergy: ${dr("azithromycin")} 10 mg/kg daily for 3 days or ${dr("cotrimoxazole")} (STG).</li>
<li>No response after 48–72 hours of co-amoxiclav: ${dr("ceftriaxone")} 50 mg/kg IM/IV daily for 1–3 days.</li></ul>
<h3>B. Discharging ear</h3>
<ul><li>Teach dry mopping with a twist of clean cotton or tissue 3 times a day until dry (STG); nothing else into the ear except quinolone drops if available; no water entry.</li>
<li>Discharge over 2 weeks: CSOM — continue mopping, topical quinolone, refer to ENT and for hearing assessment.</li></ul>
<h3>C. Glue ear</h3>
<p>Explain it often clears within 3 months; reduce smoke exposure; hearing test if persistent; ENT for grommets or hearing aids if hearing loss persists with speech or school problems.</p>
<h3>D. Mastoiditis</h3>
<p>IV ${dr("ceftriaxone")} 50–100 mg/kg/day and urgent ENT referral; surgery for subperiosteal abscess.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("amoxicillin"), "40–45 mg/kg BD (max 1 g); STG 15 mg/kg TDS", "Duration by age"],
[dr("coamoxiclav"), "Amoxicillin component 45 mg/kg BD where formulation allows", "Recent amoxicillin, failure"],
[dr("azithromycin"), "10 mg/kg daily × 3 days", "Penicillin allergy"],
[dr("cotrimoxazole"), "8 mg TMP/kg/day in 2 doses × 7–10 days", "STG alternative; not under 6 weeks"],
[dr("ceftriaxone"), "50 mg/kg IM/IV daily × 1–3 days", "Treatment failure; mastoiditis IV"],
[dr("paracetamol"), "15 mg/kg 6-hourly", "All"]])}
` },

{ id: "populations", title: "Infants and special groups", html: `<ul><li><b>Under 6 months:</b> always treat; fever under 3 months needs a sepsis work-up.</li><li><b>Cleft palate, Down syndrome:</b> high rates of glue ear; regular hearing checks.</li><li><b>Recurrent AOM</b> (3 in 6 months or 4 in a year): check hearing, reduce risk factors, PCV up to date; ENT referral.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Family lives 2 days' walk away", "Give the antibiotic rather than watchful waiting", "Follow-up is not possible"], ["Wax hides the drum", "Clear wax carefully or treat on clinical picture if very unwell", "Diagnosis needs the drum"], ["Chronic discharge in a school child doing poorly", "Hearing test, ENT, school seating at the front", "Hearing loss limits learning"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Perforation (usually heals in weeks), CSOM, conductive hearing loss and speech delay, mastoiditis, facial palsy, labyrinthitis, meningitis, brain abscess, lateral sinus thrombosis. Most AOM resolves in 2–3 days, and middle-ear fluid in 3 months.</p>` },

{ id: "followup", title: "Advice for parents", html: `
${box("green", "Advice", `<ul><li>Pain relief is the most important treatment; give it regularly for 2–3 days.</li><li>If the ear discharges, wipe it dry 3 times a day with a twist of clean cloth or tissue; keep water out when bathing (STG).</li><li>Never put oil, herbs or sticks into the ear.</li><li>Breastfeed; avoid smoke near children; do not bottle-feed lying flat.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Swelling, redness or pain behind the ear, or the ear sticks out</li><li>Very sleepy, stiff neck, vomiting, fits</li><li>Not better in 2–3 days, or discharge continues over 2 weeks</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Acute otitis media", src: "images/aom-drum.jpg", mod: "Otoscopy", ctx: "Acute otitis media", loc: "Tympanic membrane", find: "Red, bulging drum with loss of normal landmarks", interp: "Bulging is the most reliable sign of AOM", by: "B. Welleschik", page: "https://commons.wikimedia.org/wiki/File:Otitis_media_entdifferenziert1.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Perforated drum with discharge", src: "images/perforated-drum.jpg", mod: "Otoscopy", ctx: "AOM with perforation", loc: "Tympanic membrane", find: "Perforation with moist middle ear", interp: "Antibiotic and dry mopping; review until healed", by: "Gzzz", page: "https://commons.wikimedia.org/wiki/File:Otite_moyenne_perfor%C3%A9e.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with earache", [F.s("Otoscopy: bulging drum or discharge?"), F.a, F.d("Under 6 months, discharge, severe, or under 2 with both ears?"), F.a, F.b([["Yes", F.e("Amoxicillin 40–45 mg/kg BD; analgesia")], ["No", F.s("Analgesia; watchful waiting 48–72 h with back-up prescription")]]), F.a, F.d("Better at 48–72 h?"), F.a, F.b([["No", F.e("Start or switch to co-amoxiclav; then ceftriaxone")], ["Yes", F.ok("Check drum and hearing later if recurrent")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Diagnosing AOM from a red drum in a crying child", "Over-treatment", "Look for bulging"], ["Low-dose amoxicillin", "Resistant pneumococci survive", "80–90 mg/kg/day"], ["Oil or herbal drops in a discharging ear", "Infection, damage", "Dry mopping only"], ["No hearing follow-up for CSOM", "School failure", "Audiometry and ENT"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Most reliable otoscopic sign of acute otitis media?", "A bulging tympanic membrane.")}
${qa("Intern/MO", "Amoxicillin dose and duration for a 12 kg, 18-month-old with bilateral AOM?", "40–45 mg/kg twice daily = about 500 mg twice daily, for 10 days.")}
${qa("Specialist", "Which children with AOM can safely be observed?", "Non-severe unilateral AOM in children 6–23 months, and non-severe AOM in children 2 years and over, with reliable follow-up (AAP 2013).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §14.3 Acute otitis media; NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Lieberthal AS, Carroll AE, Chonmaitree T, et al. The diagnosis and management of acute otitis media. Pediatrics 2013;131:e964–e999. <a href="https://doi.org/10.1542/peds.2012-3488" target="_blank" rel="noopener">doi:10.1542/peds.2012-3488</a></li>
<li id="ref-3">National Institute for Health and Care Excellence. Otitis media (acute): antimicrobial prescribing (NG91), 2018; WHO AWaRe Antibiotic Book, 2022.</li>
<li id="ref-4">Rosenfeld RM, Schwartz SR, Cannon CR, et al. Clinical practice guideline: acute otitis externa. Otolaryngol Head Neck Surg 2014;150(1 Suppl):S1–S24. <a href="https://doi.org/10.1177/0194599813517083" target="_blank" rel="noopener">doi:10.1177/0194599813517083</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §14.3", "<span class='pass'>Used</span>", "Dose compared with AAP and AWaRe"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["High-ratio co-amoxiclav", "<span class='flag'>Formulation uncertain</span>", "Check local stock"]], "qc")}` }
]
});
