/* Puerperal sepsis (Bhutan STG 11.7, Bhutan Sepsis Guide 2025, WHO maternal sepsis) */
registerPage({
id: "puerperal-preg",
title: "Puerperal (Maternal) Sepsis",
subtitle: "Fever within 6 weeks of birth: look for the uterus and all other sources, give ampicillin + metronidazole + gentamicin early, remove retained products, and escalate if no better in 48 hours",
age: "Postpartum women", specs: ["obg", "id", "emerg"],
keywords: ["puerperal sepsis", "maternal sepsis", "endometritis", "postpartum fever", "retained products", "pelvic abscess", "group A streptococcus", "ampicillin gentamicin metronidazole"],
related: ["sepsis-adult", "pph-preg", "uti-adult", "vte-adult", "labour-preg"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Sepsis is a leading cause of maternal death. Delay — waiting for cultures or for the fever to 'settle' — is what kills.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Temperature 38 °C+ within 42 days of birth, foul lochia, tender uterus.</p></div>
<div><h4>Treat</h4><p>${dr("ampicillin")} + ${dr("metronidazole")} + ${dr("gentamicin")} within 1 hour if severe.</p></div>
<div><h4>Source</h4><p>Ultrasound for retained products; evacuate.</p></div>
<div><h4>Escalate</h4><p>Shock, confusion, no response in 48 h → refer.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 11.7 flowchart: BHU — admit, ampicillin 1 g IV, metronidazole 400 mg TDS orally, refer if severe; district hospital — ampicillin 1 g 6-hourly + metronidazole 500 mg IV 8-hourly + gentamicin 80 mg 8-hourly (only if urine output normal), catheter, ultrasound. The Bhutan Sepsis Guide 2025 favours once-daily gentamicin 5 mg/kg. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Sources", html: `${tbl(["Source", "Clues"], [["Uterus (endometritis)", "Foul lochia, tender uterus, subinvolution"], ["Wound (caesarean/episiotomy)", "Redness, discharge"], ["Breast", "Mastitis/abscess"], ["Urine", "Dysuria, loin pain"], ["Chest", "Cough, especially after GA"], ["Others", "DVT, malaria, typhoid, dengue"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Maternal sepsis", [F.s("Ascending infection after labour/caesarean"), F.a, F.s("Polymicrobial (E. coli, streptococci, anaerobes); group A strep can kill within hours"), F.a, F.e("Septic shock, pelvic abscess, septic thrombophlebitis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "WHO / Sepsis Guide 2025", "This guide"], [["Ampicillin", "1 g 6-hourly", "2 g 6-hourly", "2 g in severe sepsis " + LB.loc()], ["Gentamicin", "80 mg 8-hourly", "5 mg/kg once daily", "Once daily"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Temperature, pulse, BP, RR, consciousness (maternal early warning score).</li><li>Uterus, lochia, wound, breasts, loins, chest, calves.</li></ul>${box("red", "Red flags", `<ul><li>Pulse over 120, SBP under 90, RR over 25, confusion</li><li>Severe pain out of proportion (group A strep, necrotising infection)</li><li>Diarrhoea and vomiting with fever (toxic shock)</li></ul>`)}<h3>The typical patient</h3><p>A 26-year-old 5 days after a prolonged labour in Mongar has fever 39 °C, pulse 118, foul lochia and a tender uterus. <b>This is puerperal sepsis (endometritis)</b>: cultures, ampicillin 2 g + metronidazole 500 mg + gentamicin 275 mg IV now, fluids, ultrasound for retained products, review at 48 h.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Mastitis", "Breast signs"], ["Pyelonephritis", "Loin pain, urine"], ["DVT/PE", "Calf swelling, breathlessness"], ["Malaria", "Travel, RDT"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC, CRP, lactate, blood and high vaginal swab cultures, urine, creatinine, LFT; ultrasound pelvis; malaria test where relevant.</p>` },
{ id: "staging", title: "Antibiotic calculator", html: `<div class="calc" data-calc="puerperalcalc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Sepsis bundle within 1 hour: cultures, antibiotics, fluids, lactate, urine output.</li><li>Ampicillin + metronidazole + gentamicin (no gentamicin if oliguric — ceftriaxone instead).</li><li>Retained products: evacuation after antibiotics started; pelvic abscess: drainage.</li><li>No improvement in 48 h: refer; broaden (piperacillin–tazobactam/meropenem); look for abscess, septic thrombophlebitis.</li><li>Continue breastfeeding; thromboprophylaxis.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ampicillin"), "2 g IV 6-hourly", "STG 1 g"], [dr("metronidazole"), "500 mg IV 8-hourly", "Anaerobes"], [dr("gentamicin"), "5 mg/kg daily", "Not if oliguric"], [dr("ceftriaxone"), "2 g daily", "Alternative"], [dr("enoxaparin"), "40 mg daily", "VTE prophylaxis"]])}` },
{ id: "populations", title: "After caesarean", html: `<p>Higher risk; check wound and for intra-abdominal collection.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Fever persists despite antibiotics, uterus normal", "Septic pelvic thrombophlebitis, abscess, drug fever — refer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Septic shock, pelvic abscess, peritonitis, infertility, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review at 48 h; switch to oral amoxicillin–clavulanate when afebrile; postnatal check at 6 weeks.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Postpartum fever", [F.s("Vitals, examine all sources"), F.a, F.d("Severe/sepsis?"), F.a, F.b([["Yes", F.e("Triple antibiotics within 1 h, fluids, refer if needed")], ["No", F.ok("Ampicillin + metronidazole, review 48 h")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing retained products", "Ongoing sepsis/PPH", "Ultrasound"], ["Gentamicin in oliguria", "Nephrotoxicity", "Check urine output"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "STG district hospital regimen for puerperal sepsis?", "Ampicillin + metronidazole + gentamicin (if urine output normal).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 11.7; Quick Guide to Sepsis Management 2025.</li><li id="ref-2">World Health Organization. WHO recommendations for prevention and treatment of maternal peripartum infections. Geneva: WHO; 2015. <a href="https://www.who.int/publications/i/item/9789241549363" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["STG flowchart", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
