/* Red eye — newborns and children */
registerPage({
id: "redeye-child",
title: "Red Eye & Ophthalmia Neonatorum — Children",
subtitle: "A sticky eye in a newborn can blind within days: treat gonococcal ophthalmia urgently and the parents too; in older children, conjunctivitis is common but the red flags are the same as in adults",
age: "Newborns & children", specs: ["eye", "paeds", "neo"],
keywords: ["ophthalmia neonatorum", "neonatal conjunctivitis", "sticky eye baby", "conjunctivitis child", "gonococcal conjunctivitis", "chlamydial conjunctivitis", "periorbital cellulitis", "orbital cellulitis"],
related: ["redeye-adult", "neosepsis-child", "sti-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Neonatal conjunctivitis is a medical emergency when caused by gonorrhoea; in older children, red eyes are mostly infectious conjunctivitis, but orbital cellulitis and injuries must not be missed.</p>
<div class="glance">
<div><h4>Newborn with pus</h4><p>Irrigate, ${dr("ceftriaxone")} 25–50 mg/kg IM once (max 125 mg; STG), treat chlamydia, <b>treat both parents</b>.</p></div>
<div><h4>Prevention</h4><p>Clean eyes at birth; tetracycline 1% or erythromycin ointment (chloramphenicol if unavailable).</p></div>
<div><h4>Older child</h4><p>Conjunctivitis: hygiene ± ${dr("chloramphenicol_eye", "chloramphenicol")}.</p></div>
<div><h4>Emergency</h4><p>Swollen lid with painful eye movements, fever: orbital cellulitis.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §15.1 gives ceftriaxone 25–50 mg/kg IM once (max 125 mg) or cefotaxime 100 mg/kg once, frequent saline irrigation, prophylactic ointment at birth, treatment of both parents, and referral if not better in 48 hours. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes by age", html: `${tbl(["Age", "Cause", "Timing / clue"], [["Days 2–5", "<b>Gonococcal</b>", "Profuse pus, lid swelling; corneal perforation risk"], ["Days 5–14", "Chlamydial", "Milder discharge; risk of pneumonia"], ["Any time in infancy", "Blocked tear duct", "Watery or sticky eye, white eye"], ["Children", "Bacterial, viral, allergic conjunctivitis", "As adults"], ["Children", "Periorbital / orbital cellulitis", "Lid swelling, fever; orbital: proptosis, painful or limited eye movement"]])}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Neonatal conjunctivitis", [F.s("Exposure to maternal genital infection during birth"), F.a, F.e("Gonococcus penetrates intact cornea → ulcer, perforation within 24–48 h"), F.a, F.ok("Systemic ceftriaxone and irrigation prevent blindness")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "International", "This guide"], [["Chlamydial ophthalmia", "Not detailed", "Oral azithromycin 20 mg/kg once daily × 3 days or erythromycin 50 mg/kg/day × 14 days", "Add when chlamydia is suspected or tests positive " + LB.loc()], ["Ceftriaxone in jaundiced or preterm neonates", "Ceftriaxone", "Use cefotaxime in these babies", "Cefotaxime 100 mg/kg once if jaundiced or preterm"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Age of onset, maternal STI history, discharge type, lid swelling, cornea, systemic illness.</li><li>Children: vision, pain, eye movements, fever, injury.</li></ul>
${box("red", "Urgent", `<ul><li>Newborn with purulent discharge</li><li>Corneal haze or ulcer</li><li>Proptosis, painful or reduced eye movements, fever (orbital cellulitis)</li></ul>`)}
<h3>The typical patient</h3><p>A 3-day-old baby from Phuentsholing has thick yellow pus pouring from both swollen eyes. <b>This is gonococcal ophthalmia neonatorum until proven otherwise</b>: early onset, profuse pus, both eyes. Give ceftriaxone 125 mg IM (for a 3 kg baby: 25–50 mg/kg, max 125 mg), irrigate hourly, swab, treat both parents, and review within 24 hours.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Chemical conjunctivitis", "First 24 h after prophylaxis"], ["Blocked nasolacrimal duct", "White eye, sticky lashes"], ["Congenital glaucoma", "Large cloudy cornea, watering, photophobia: refer"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Gram stain and culture of discharge (gonococcus), chlamydia test where available; maternal STI testing.</p>` },
{ id: "staging", title: "Triage tool", html: `<div class="calc" data-calc="redeye"></div>` },
{ id: "manage", title: "Management", html: `<ul><li><b>Gonococcal:</b> ${dr("ceftriaxone")} 25–50 mg/kg IM once (max 125 mg), or ${dr("cefotaxime")} 100 mg/kg once; saline irrigation hourly until discharge stops; refer if no improvement in 48 h (STG); treat mother and partner (ceftriaxone + chlamydia treatment).</li><li><b>Chlamydial:</b> oral ${dr("azithromycin")} 20 mg/kg once daily for 3 days.</li><li><b>Older children:</b> as adult red eye; orbital cellulitis → IV ceftriaxone + cloxacillin and urgent referral.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ceftriaxone"), "25–50 mg/kg IM once, max 125 mg", "Gonococcal ophthalmia"], [dr("cefotaxime"), "100 mg/kg IM/IV once", "Jaundiced or preterm"], [dr("azithromycin"), "20 mg/kg daily × 3 days", "Chlamydia"], [dr("chloramphenicol_eye"), "Ointment once at birth if no tetracycline", "Prophylaxis"]])}` },
{ id: "populations", title: "Special groups", html: `<p>Babies of mothers with untreated gonorrhoea or chlamydia: treat prophylactically and examine.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Parents decline STI testing", "Explain the baby's sight depends on treating them too"]])}` },
{ id: "complications", title: "Complications", html: `<p>Corneal ulceration, perforation and blindness (gonococcal); pneumonia (chlamydia).</p>` },
{ id: "followup", title: "Follow-up", html: `${box("red", "Return at once if", `<ul><li>Discharge increases or the eye looks cloudy</li><li>Baby feeds poorly or has fever or fast breathing</li></ul>`)}` },
{ id: "images", title: "Images", html: `${fig({ title: "Conjunctivitis", src: "images/conjunctivitis-swollen.jpg", mod: "Clinical photograph", ctx: "Red swollen eye", loc: "Conjunctiva", find: "Redness and lid swelling", interp: "In a newborn with pus, treat as gonococcal", by: "Tanalai", page: "https://commons.wikimedia.org/wiki/File:Swollen_eye_with_conjunctivitis.jpg", lic: "CC BY 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Sticky eye in a newborn", [F.d("Purulent, days 1–5?"), F.a, F.b([["Yes", F.e("Ceftriaxone IM, irrigate, treat parents")], ["No", F.s("Watery/mild: hygiene; chlamydia if day 5–14")]])])}` },
{ id: "pearls", title: "Pearls and mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Topical drops only for gonococcal ophthalmia", "Corneal perforation", "Systemic ceftriaxone"], ["Forgetting the parents", "Reinfection, maternal complications", "Treat both"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "STG treatment of gonococcal ophthalmia neonatorum?", "Ceftriaxone 25–50 mg/kg IM once (max 125 mg) or cefotaxime 100 mg/kg once, saline irrigation, treat both parents.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §15.1 Ophthalmia neonatorum.</li><li id="ref-2">World Health Organization. Guidelines for the management of symptomatic sexually transmitted infections. Geneva: WHO; 2021. <a href="https://www.who.int/publications/i/item/9789240024168" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["STG §15.1", "<span class='pass'>Verified</span>", "Read directly"]], "qc")}` }
]
});
