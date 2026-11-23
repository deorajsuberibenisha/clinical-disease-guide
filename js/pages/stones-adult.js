/* Kidney stones and renal colic — adults */
registerPage({
id: "stones-adult",
title: "Kidney Stones & Renal Colic — Adults",
subtitle: "Relieve pain with NSAIDs, image to size the stone, help small distal stones pass with tamsulosin, refer large stones, and treat an infected obstructed kidney as an emergency",
age: "Adults", specs: ["uro", "emerg", "neph"],
keywords: ["kidney stone", "renal colic", "ureteric colic", "urolithiasis", "nephrolithiasis", "tamsulosin", "medical expulsive therapy", "hydronephrosis", "obstructed infected kidney", "CT KUB"],
related: ["bph-adult", "uti-adult", "aki-adult", "gout-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Renal colic is among the worst pains people experience, but most stones pass. The danger is infection behind a blocked ureter, which can kill within hours.</p>
<div class="glance">
<div><h4>Pain</h4><p>${dr("diclofenac")} 75 mg IM or ${dr("ibuprofen")}; paracetamol; opioid if needed.</p></div>
<div><h4>Image</h4><p>Ultrasound (hydronephrosis, stone); CT KUB where available.</p></div>
<div><h4>Size decides</h4><p>Under 5 mm: usually pass. 5–10 mm distal: ${dr("tamsulosin")}. Over 10 mm: refer.</p></div>
<div><h4>Emergency</h4><p>Fever + obstruction: antibiotics and urgent drainage.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §6.4: analgesia (paracetamol, ibuprofen), IV antibiotics for infection, 90% of stones under 4 mm pass, tamsulosin after surgical advice, refer stones over 5–10 mm; repeat kidney function if impaired. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes and risk", html: `<p>Calcium oxalate (most), uric acid (gout, dehydration), struvite (infection), cystine. Risks: low fluid intake, hot climates and dehydration, high salt and animal protein, obesity, diabetes, gout, hyperparathyroidism, previous stones.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Obstruction", [F.s("Stone moves into the ureter"), F.a, F.s("Ureteric spasm and rising pressure → colic"), F.a, F.b([["Sterile", F.ok("Most pass in days to weeks")], ["Infected", F.e("Pyonephrosis, urosepsis")]])])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "EAU 2024", "This guide"], [["First analgesic", "Paracetamol, ibuprofen", "NSAID first (diclofenac/ibuprofen); paracetamol IV alternative", "NSAID first " + LB.loc()], ["Tamsulosin", "After surgical advice", "Distal stones over 5 mm", "Distal 5–10 mm"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Sudden severe loin pain radiating to the groin, testis or labia; restless; nausea; haematuria; frequency and strangury (STG).</li></ul>${box("red", "Emergencies", `<ul><li>Fever or sepsis with obstruction</li><li>Solitary kidney or bilateral obstruction, AKI</li><li>Uncontrolled pain</li></ul>`)}
<h3>The typical patient</h3><p>A 34-year-old man from Gelephu has had colicky right loin-to-groin pain for 6 hours, can't keep still, with blood on dipstick and no fever. Ultrasound shows mild hydronephrosis and a 6 mm distal ureteric stone. <b>This is right ureteric colic from a 6 mm distal stone</b>: diclofenac, tamsulosin 0.4 mg daily, fluids, strain urine, review in 2–4 weeks; return at once with fever.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["<b>Ruptured aortic aneurysm</b>", "Over 60, shock, pulsatile mass"], ["Pyelonephritis", "Fever, tender loin, no colic"], ["Appendicitis, ectopic, torsion", "Exam, pregnancy test"], ["Biliary colic", "Right upper quadrant"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Urine dipstick and culture, creatinine, FBC, CRP, calcium, urate; pregnancy test; ultrasound KUB; non-contrast CT KUB (gold standard) where available; X-ray KUB for follow-up of radio-opaque stones.</p>` },
{ id: "staging", title: "Stone plan tool", html: `<div class="calc" data-calc="stoneplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li><b>Pain:</b> ${dr("diclofenac")} 75 mg IM (or ${dr("ibuprofen")} 400–600 mg), ${dr("paracetamol")} 1 g, ${dr("morphine")} if needed; antiemetic.</li><li><b>Under 5 mm:</b> watchful waiting, fluids, analgesia.</li><li><b>5–10 mm distal:</b> ${dr("tamsulosin")} 0.4 mg daily up to 4 weeks.</li><li><b>Over 10 mm, failure to pass, recurrent pain:</b> urology (ureteroscopy, ESWL, PCNL).</li><li><b>Infection with obstruction:</b> cultures, IV ${dr("ceftriaxone")}, urgent stent or nephrostomy.</li><li><b>Prevention:</b> 2.5–3 L fluid daily, less salt and animal protein, normal calcium intake; treat gout.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("diclofenac"), "75 mg IM", "First line"], [dr("ibuprofen"), "400–600 mg TDS", "Oral"], [dr("tamsulosin"), "0.4 mg daily", "Distal 5–10 mm"], [dr("ceftriaxone"), "2 g IV daily", "Infected obstruction"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Ultrasound; paracetamol and opioids (no NSAIDs); stent or nephrostomy for infection.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Stone with fever far from urology", "Antibiotics, fluids, urgent transfer for drainage"]])}` },
{ id: "complications", title: "Complications", html: `<p>Urosepsis, pyonephrosis, AKI, stricture, recurrence (about half within 10 years).</p>` },
{ id: "followup", title: "Follow-up", html: `${box("red", "Come back at once if", `<ul><li>Fever or shivering</li><li>Pain not controlled, vomiting, little urine</li></ul>`)}` },
{ id: "images", title: "Images", html: `${fig({ title: "Kidney stones on CT", src: "images/renal-calculi-ct.jpg", mod: "Non-contrast CT", ctx: "Stone disease", loc: "Both kidneys", find: "Bright calcified stones in both kidneys", signs: "Nephrolithiasis", interp: "CT KUB sizes and locates stones", by: "Kristie Guite, Louis Hinshaw and Fred Lee", page: "https://commons.wikimedia.org/wiki/File:Non-contrast_CT_of_multiple_bilateral_renal_calculi.jpg", lic: "CC BY 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Renal colic", [F.s("NSAID analgesia, urine, creatinine, ultrasound"), F.a, F.d("Fever or AKI?"), F.a, F.b([["Yes", F.e("Antibiotics + urgent drainage")], ["No", F.s("By size: wait / tamsulosin / refer")]])])}` },
{ id: "pearls", title: "Pearls and mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Antibiotics alone for infected obstruction", "Septic shock", "Drain"], ["Missing aortic aneurysm in an older man", "Death", "Ultrasound aorta"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "When is tamsulosin used?", "Distal ureteric stones of 5–10 mm.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">European Association of Urology. Guidelines on urolithiasis, 2024. <a href="https://uroweb.org/guidelines/urolithiasis" target="_blank" rel="noopener">uroweb.org</a></li><li id="ref-2">Hollingsworth JM, Canales BK, Rogers MAM et al. Alpha blockers for treatment of ureteric stones: systematic review and meta-analysis. <i>BMJ</i> 2016;355:i6112. <a href="https://doi.org/10.1136/bmj.i6112" target="_blank" rel="noopener">doi:10.1136/bmj.i6112</a></li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §6.4.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Guidance", "<span class='pass'>Checked</span>", "EAU 2024, BMJ 2016"]], "qc")}` }
]
});
