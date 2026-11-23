/* Groin hernias (HerniaSurge 2018, EAU paediatric urology) */
registerPage({
id: "hernia-adult",
title: "Inguinal & Other Hernias",
subtitle: "Repair symptomatic adult hernias with mesh, operate early on infants and femoral hernias, and treat any irreducible, painful hernia as strangulated until proven otherwise",
age: "Adults & children", specs: ["surg", "paeds", "emerg"],
keywords: ["inguinal hernia", "femoral hernia", "umbilical hernia", "incisional hernia", "strangulated hernia", "incarcerated hernia", "Lichtenstein repair", "herniotomy", "hydrocele"],
related: ["acute-abdomen-adult", "acute-abdomen-child", "bph-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Groin hernias are very common in men doing heavy work. Strangulation is the danger — especially femoral hernias in women and inguinal hernias in infants.</p>
<div class="glance">
<div><h4>Adult</h4><p>Mesh repair if symptomatic; watchful waiting OK if minimal symptoms (men).</p></div>
<div><h4>Femoral</h4><p>Repair early — high strangulation risk.</p></div>
<div><h4>Child</h4><p>Herniotomy soon after diagnosis.</p></div>
<div><h4>Strangulated</h4><p>NPO, fluids, analgesia, antibiotics, emergency surgery.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Hernia repair is done at district hospitals with surgeons; mesh is used at referral hospitals. Paediatric herniotomy at JDWNRH and regional hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Hernia", "Features"], [["Indirect inguinal", "Through deep ring; children and young men; can reach scrotum"], ["Direct inguinal", "Older men; weak posterior wall"], ["Femoral", "Below/lateral to pubic tubercle; women; strangulates"], ["Umbilical", "Infants (most close by 4–5 y); adults with obesity/ascites"], ["Incisional", "Previous surgery"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Strangulation", [F.s("Bowel trapped in narrow neck"), F.a, F.s("Venous then arterial obstruction"), F.e("Ischaemia, gangrene, perforation")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "HerniaSurge 2018", "This guide"], [["Asymptomatic hernia in men", "Repair all", "Watchful waiting acceptable", "HerniaSurge " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Groin lump with cough impulse, reducible lying down; examine standing; check both sides and testes.</li><li>Strangulation: painful tense irreducible lump, vomiting, distension, red overlying skin, systemic upset.</li></ul><h3>The typical patient</h3><p>A 70-year-old woman in Trashigang has vomiting and distension for a day; a small tender lump below the right inguinal ligament. <b>Strangulated femoral hernia</b>: NPO, NG, IV fluids, analgesia, antibiotics, emergency surgery.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Hydrocele", "Can get above it, transilluminates"], ["Undescended testis", "Empty scrotum"], ["Lymph node", "Firm, no impulse"], ["Saphena varix", "Disappears lying, thrill on cough"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Clinical; ultrasound if unsure; X-ray/CT for obstruction.</p>` },
{ id: "staging", title: "Urgency", html: `${tbl(["Situation", "Timing"], [["Strangulated", "Emergency (hours)"], ["Incarcerated infant", "Reduce (if no strangulation), surgery in 24–48 h"], ["Infant reducible", "Within weeks"], ["Femoral", "Within 2 weeks"], ["Symptomatic adult inguinal", "Elective"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Elective: Lichtenstein mesh repair (open) or laparoscopic; herniotomy in children.</li><li>Incarcerated without strangulation (child): analgesia, gentle taxis, then surgery 24–48 h.</li><li>Strangulated: resuscitate, antibiotics, emergency repair ± bowel resection.</li><li>Pre-op: stop smoking, treat cough/constipation/BPH.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("cefazolin"), "2 g IV", "Prophylaxis with mesh"], [dr("ceftriaxone"), "2 g + metronidazole", "Strangulation"], [dr("paracetamol"), "1 g", "Pain"]])}` },
{ id: "populations", title: "Preterm infants", html: `<p>Very high incarceration risk — repair before discharge or soon after.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Strangulation, surgeon far", "NPO, NG, fluids, antibiotics, urgent referral; do not force reduction of gangrenous bowel"]])}` },
{ id: "complications", title: "Complications", html: `<p>Strangulation, obstruction, testicular ischaemia; post-op recurrence, chronic pain, infection.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Avoid heavy lifting 2–4 weeks after open repair.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Inguinal hernia", src: "images/inguinal-hernia.jpg", mod: "Clinical photograph", ctx: "Inguinal hernia", loc: "Groin", find: "Groin bulge", interp: "Examine standing; repair if symptomatic", by: "IkeTheSloth", page: "https://commons.wikimedia.org/wiki/File:Inguinal_hernia_front_view.jpg", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Groin lump", [F.d("Painful, irreducible, vomiting?"), F.a, F.b([["Yes", F.e("Strangulation: emergency surgery")], ["No", F.ok("Elective repair / watchful waiting")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing femoral hernia in obstruction", "Gangrene", "Examine groins in every obstructed patient"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Which hernia has the highest strangulation risk?", "Femoral hernia.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">HerniaSurge Group. International guidelines for groin hernia management. Hernia. 2018;22:1-165. <a href="https://doi.org/10.1007/s10029-017-1668-x" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
