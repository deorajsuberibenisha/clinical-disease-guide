/* Oedema and hypoalbuminaemia: approach */
registerPage({
id: "oedema-adult",
title: "Oedema & Hypoalbuminaemia: Approach",
subtitle: "One leg is local until proven otherwise; both legs mean heart, kidney, liver, low albumin, drugs or veins — always dip the urine, check albumin and creatinine, and treat the cause rather than the swelling",
age: "Adults (child notes)", specs: ["medicine", "neph", "cardio"],
keywords: ["oedema", "edema", "leg swelling", "pitting oedema", "hypoalbuminaemia", "low albumin", "heart failure", "nephrotic", "cirrhosis", "calcium channel blocker oedema", "lymphoedema", "angioedema"],
related: ["hf-adult", "glomerular-adult", "cirrhosis-adult", "vte-adult", "thyroid-adult", "ftt-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>One leg</h4><p>DVT, cellulitis, Baker's cyst, lymphatic.</p></div>
<div><h4>Both legs</h4><p>Heart, kidney (protein), liver, albumin, drugs, veins, thyroid.</p></div>
<div><h4>Always</h4><p>Urine dipstick, BP, creatinine, albumin, LFT.</p></div>
<div><h4>Treat cause</h4><p>${dr("furosemide")} only for fluid overload; not for amlodipine oedema.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Heart failure (including rheumatic heart disease), alcohol-related cirrhosis, CKD and nephrotic syndrome are the main causes of generalised oedema in Bhutan; kwashiorkor in children. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Mechanisms", html: `${tbl(["Mechanism", "Causes"], [["Raised venous pressure", "Heart failure, renal failure, venous insufficiency, DVT, pregnancy"], ["Low oncotic pressure (albumin under 25–30 g/L)", "Nephrotic syndrome, cirrhosis, malnutrition, protein-losing enteropathy"], ["Leaky capillaries", "Sepsis, burns, angioedema, dengue"], ["Lymphatic obstruction", "Filariasis, tumour, surgery/radiotherapy"], ["Drugs", "Calcium-channel blockers, NSAIDs, steroids, pioglitazone"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Starling forces", [F.s("Capillary pressure pushes fluid out"), F.a, F.s("Albumin holds fluid in"), F.e("Imbalance or leak → interstitial oedema")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Practice", "Evidence", "This guide"], [["Albumin infusion for low albumin", "Common", "Only in specific situations (large paracentesis, SBP, nephrotic with severe symptomatic oedema)", "Targeted " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Onset, one or both sides, pitting, breathlessness, orthopnoea, abdominal swelling, jaundice, frothy urine, drugs, diet, alcohol.</li><li>JVP, heart sounds, crackles, ascites, liver signs, BP, weight, skin changes.</li></ul><h3>The typical patient</h3><p>A 60-year-old on amlodipine 10 mg in Trongsa has bilateral ankle swelling; JVP normal, urine dipstick negative, albumin 40. <b>Calcium-channel blocker oedema</b>: reduce amlodipine or switch to an ACE inhibitor/ARB — not furosemide.</p>` },
{ id: "ddx", title: "Mimics", html: `${tbl(["Condition", "Clue"], [["Lipoedema", "Symmetrical fat, spares feet"], ["Obesity", "Non-pitting"], ["Myxoedema", "Non-pitting, TSH"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Urine dipstick/UPCR, creatinine, electrolytes, albumin, LFT, INR, FBC, TSH, ECG, BNP/echo; Doppler for one leg; ultrasound abdomen if ascites.</p>` },
{ id: "staging", title: "Oedema tool", html: `<div class="calc" data-calc="oedemaapp"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Treat the cause.</li><li>Salt restriction; loop diuretic for overload (heart, kidney, nephrotic); spironolactone first for cirrhotic ascites.</li><li>Venous: elevation, compression (exclude arterial disease — ABPI).</li><li>Lymphoedema: skin care, compression, treat filariasis/cellulitis.</li><li>Albumin infusion only for specific indications.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("furosemide"), "20–80 mg daily", "Overload"], [dr("spironolactone"), "100 mg daily", "Cirrhosis/HF"], [dr("albumin"), "20% per indication", "Specific"]])}` },
{ id: "populations", title: "Children and pregnancy", html: `<p>Children: periorbital oedema → nephrotic; oedema + malnutrition → kwashiorkor. Pregnancy: check BP and urine for pre-eclampsia.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Sudden lip/tongue swelling with stridor", "Adrenaline IM, airway"]])}` },
{ id: "complications", title: "Complications", html: `<p>Cellulitis, ulcers, immobility; complications of the cause.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Daily weights on diuretics; potassium and creatinine.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Pitting oedema", src: "images/hf-pitting-oedema.jpg", mod: "Clinical photograph", ctx: "Fluid overload", loc: "Leg", find: "Pit after pressure", interp: "Find the cause — dip the urine", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Combinpedal.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Leg swelling", [F.d("One leg?"), F.a, F.b([["Yes", F.e("DVT/cellulitis work-up")], ["No", F.s("Urine protein, albumin, creatinine, LFT, JVP")]]), F.a, F.ok("Treat cause")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Diuretic for amlodipine oedema", "Dehydration, no benefit", "Change drug"], ["No urine dipstick", "Missed nephrotic syndrome", "Dip every patient"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "First bedside test in bilateral leg oedema?", "Urine dipstick for protein.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Trayes KP, Studdiford JS, Pickle S, Tully AS. Edema: diagnosis and management. Am Fam Physician. 2013;88:102-110.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Approach", "<span class='pass'>Checked</span>", "Standard"]], "qc")}` }
]
});
