/* Cleft lip and palate (ACPA parameters, WHO, Bhutan) */
registerPage({
id: "cleft-child",
title: "Cleft Lip & Cleft Palate",
subtitle: "Help the baby feed and grow from day one, refer early to a cleft team, repair the lip at 3–6 months and the palate by 12 months, and follow ears, speech and teeth through childhood",
age: "Newborns & children", specs: ["paeds", "neo", "surg", "ent"],
keywords: ["cleft lip", "cleft palate", "orofacial cleft", "feeding cleft", "Pierre Robin sequence", "lip repair", "palatoplasty", "rule of 10", "glue ear", "speech therapy", "alveolar bone graft", "22q11"],
related: ["ftt-child", "down-child", "otitis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">About 1 in 700 babies. With timely surgery and team care, children speak, eat and look well — but feeding problems in the first weeks cause malnutrition and death if missed.</p>
<div class="glance">
<div><h4>Day 1</h4><p>Examine the palate in every newborn (look and feel).</p></div>
<div><h4>Feed</h4><p>Upright, squeezable bottle/cup with breast milk; weigh weekly.</p></div>
<div><h4>Surgery</h4><p>Lip 3–6 months; palate 9–12 months.</p></div>
<div><h4>Team</h4><p>Surgery, ENT/hearing, speech, dental/orthodontic, genetics.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Cleft repair is done at JDWNRH and through partner surgical programmes; families may need support for travel and repeated visits. Register cleft babies early so feeding and surgery timing are not missed. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Features"], [["Cleft lip ± alveolus", "Unilateral/bilateral, complete/incomplete; feeding usually manageable"], ["Cleft lip and palate", "Feeding difficulty, nasal regurgitation"], ["Isolated cleft palate", "Often missed; associated syndromes (Pierre Robin, 22q11)"], ["Submucous cleft", "Bifid uvula, notch in hard palate, nasal speech"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Orofacial cleft", [F.s("Failure of facial processes to fuse (weeks 4–12)"), F.a, F.s("Genes + environment (smoking, folate lack, anticonvulsants)"), F.e("Feeding, ear, speech, dental problems")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Approach A", "Approach B", "This guide"], [["Palate timing", "6–9 months (speech)", "12–18 months (growth)", "9–12 months " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Visible lip cleft; palate cleft seen on examination with light and tongue depressor, or felt with a finger.</li><li>Poor suck, long feeds, milk from the nose, poor weight gain.</li><li>Pierre Robin: small jaw, tongue falls back, airway obstruction — prone positioning, nasopharyngeal airway, urgent referral.</li></ul><h3>The typical patient</h3><p>A newborn in Samtse has a complete left cleft lip and palate and cannot breastfeed effectively. <b>Cleft lip and palate</b>: express breast milk, feed upright with a squeezable bottle or cup, weigh weekly, refer to the cleft team, plan lip repair at 3–6 months and palate at 9–12 months; hearing check.</p>` },
{ id: "ddx", title: "Associated conditions", html: `${tbl(["Condition", "Clue"], [["Pierre Robin sequence", "Micrognathia, airway obstruction"], ["22q11 deletion", "Heart defect, hypocalcaemia, immune problems"], ["Van der Woude", "Lip pits, family history"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Full newborn exam (heart, other anomalies); hearing screen; genetics if syndromic; Hb before surgery.</p>` },
{ id: "staging", title: "Care timeline tool", html: `<div class="calc" data-calc="cleftplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Feeding: expressed breast milk via squeezable cleft bottle, cup or spoon; upright; frequent burping; target normal weight gain.</li><li>Surgery: lip (3–6 months), palate (9–12 months), alveolar bone graft (8–11 years), revisions as needed.</li><li>Ears: hearing tests, grommets for glue ear.</li><li>Speech therapy from 2–3 years; surgery for velopharyngeal insufficiency.</li><li>Dental and orthodontic care.</li><li>Psychosocial support for family and child.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("paracetamol"), "15 mg/kg", "Post-op pain"], [dr("folic_acid"), "5 mg daily pre-conception", "Next pregnancy (high-dose for affected family)"]])}` },
{ id: "populations", title: "Older children unrepaired", html: `<p>Late repair still helps — refer at any age.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Not gaining weight", "Observe feeds, NG temporarily, refer early"], ["Airway obstruction (Pierre Robin)", "Prone, nasopharyngeal airway, urgent referral"]])}` },
{ id: "complications", title: "Complications", html: `<p>Malnutrition, aspiration, otitis media/hearing loss, speech problems, dental anomalies, psychosocial impact.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Weekly weights early; team reviews through adolescence.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Child with cleft lip", src: "images/cleft-lip-child.jpg", mod: "Clinical photograph", ctx: "Unilateral cleft lip", loc: "Upper lip", find: "Cleft of the upper lip", interp: "Feeding support and team referral; lip repair at 3–6 months", by: "Raj d0509 (Wikimedia Commons)", page: "https://commons.wikimedia.org/wiki/File:Cleft_lip_child.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn with cleft", [F.s("Check airway and palate, other anomalies"), F.a, F.s("Feeding plan, weekly weight"), F.a, F.ok("Cleft team: lip 3–6 m, palate 9–12 m, ears, speech")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Not examining the palate", "Missed cleft palate, feeding failure", "Look and feel in every newborn"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Usual age for palate repair?", "9–12 months.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">American Cleft Palate–Craniofacial Association. Parameters for evaluation and treatment of patients with cleft lip/palate or other craniofacial differences. 2018 revision. <a href="https://acpacares.org/" target="_blank" rel="noopener">acpacares.org</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Timings", "<span class='pass'>Checked</span>", "ACPA parameters"]], "qc")}` }
]
});
