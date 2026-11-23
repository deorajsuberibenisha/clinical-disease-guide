/* Hypocalcaemia and hypercalcaemia (Society for Endocrinology 2016, paediatric fluids guide, NEMF) */
registerPage({
id: "calcium-adult",
title: "Hypocalcaemia & Hypercalcaemia",
subtitle: "Correct for albumin, check magnesium, treat symptomatic low calcium with slow IV calcium gluconate under ECG monitoring, and treat high calcium with fluids first while finding the cause",
age: "Adults & children", specs: ["endo", "medicine", "emerg", "paeds"],
keywords: ["hypocalcaemia", "hypercalcaemia", "corrected calcium", "tetany", "Chvostek", "Trousseau", "calcium gluconate", "hypoparathyroidism", "hyperparathyroidism", "malignancy hypercalcaemia", "magnesium", "vitamin D toxicity"],
related: ["rickets-child", "pancreatitis-adult", "ckd-adult", "potassium-adult", "thyroid-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Correct</h4><p>Ca + 0.02 × (40 − albumin g/L).</p></div>
<div><h4>Low + symptoms</h4><p>${dr("calcium_gluconate", "Calcium gluconate 10%")} 10–20 mL IV over 10 min (child 0.5 mL/kg) with ECG.</p></div>
<div><h4>Magnesium</h4><p>Low Mg blocks correction — give ${dr("magnesium_sulfate")}.</p></div>
<div><h4>High</h4><p>IV saline first; then cause; bisphosphonate via specialist.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Calcium gluconate, magnesium sulfate, calcitriol and calcium carbonate are on the NEML; IV bisphosphonates and calcitonin are not. PTH and vitamin D assays are at JDWNRH (some sent out). ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Hypocalcaemia", "Hypercalcaemia"], [["Vitamin D deficiency, rickets/osteomalacia", "Primary hyperparathyroidism (outpatients)"], ["Hypoparathyroidism (post-thyroidectomy)", "Malignancy (inpatients): bone metastases, myeloma, PTHrP"], ["Hypomagnesaemia (alcohol, PPIs, diarrhoea)", "Vitamin D toxicity, granulomas (TB, sarcoid)"], ["Pancreatitis, sepsis, massive transfusion, rhabdomyolysis", "Immobilisation, thiazides, lithium, milk-alkali"], ["CKD, neonatal (early/late), alkalosis/hyperventilation", "Thyrotoxicosis, adrenal insufficiency"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Calcium control", [F.s("PTH: bone release, renal reabsorption, activates vitamin D"), F.a, F.s("Vitamin D: gut absorption"), F.e("Low Ca → neuromuscular excitability; high Ca → polyuria, constipation, confusion, arrhythmia")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Paediatric fluids guide (BCR)", "International paediatric", "This guide"], [["Child IV dose", "1 mL/kg (max 10 mL) 10%", "0.5 mL/kg (max 20 mL)", "0.5 mL/kg; up to 1 mL/kg for severe tetany " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Low: perioral/finger tingling, cramps, carpopedal spasm, Chvostek and Trousseau signs, laryngospasm, seizures, long QT, heart failure.</li><li>High: 'bones, stones, groans, moans' — pain, renal stones, polyuria, thirst, constipation, vomiting, confusion, short QT.</li></ul><h3>The typical patient</h3><p>A 40-year-old woman 2 days after total thyroidectomy has tingling and carpopedal spasm; corrected Ca 1.75 mmol/L. <b>Post-surgical hypoparathyroidism</b>: calcium gluconate 10 mL over 10 min with ECG, infusion, then oral calcium + calcitriol; check Mg.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Low albumin (pseudo-hypocalcaemia)", "Corrected/ionised Ca normal"], ["Hyperventilation tetany", "Anxiety, normal Ca, alkalosis"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Calcium, albumin (or ionised Ca), Mg, PO₄, ALP, creatinine, PTH, 25-OH vitamin D, ECG; high Ca: protein electrophoresis, chest X-ray, imaging for malignancy.</p>` },
{ id: "staging", title: "Calcium calculator", html: `<div class="calc" data-calc="calciumcalc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Symptomatic/severe low Ca: IV calcium gluconate bolus then infusion; correct Mg; oral calcium + vitamin D/calcitriol.</li><li>Mild low Ca: oral calcium and vitamin D.</li><li>High Ca over 3.0 or symptoms: IV saline 3–4 L/day, then bisphosphonate (specialist), steroids for granulomatous/vitamin D causes, treat cause (parathyroidectomy, cancer).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("calcium_gluconate"), "10–20 mL 10% IV", "Over 10 min, ECG"], [dr("magnesium_sulfate"), "2 g IV over 20 min (adult)", "Low Mg"], [dr("calcium_carbonate"), "1–2 g elemental/day", "Oral"], [dr("calcitriol"), "0.25–1 µg/day", "Hypoparathyroidism"]])}` },
{ id: "populations", title: "Neonates", html: `<p>Early neonatal hypocalcaemia (preterm, IDM, asphyxia) and late (high-phosphate milk, maternal vitamin D deficiency) — see neonatal seizures.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Calcium 3.8 with confusion, no bisphosphonate", "Aggressive saline, avoid furosemide until rehydrated, steroids if myeloma/granuloma, urgent referral"]])}` },
{ id: "complications", title: "Complications", html: `<p>Laryngospasm, seizures, arrhythmia; nephrocalcinosis, AKI, pancreatitis.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Calcium every 4–6 h during IV therapy; then daily until stable.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Trousseau sign", src: "images/trousseau.jpg", mod: "Clinical photograph", ctx: "Latent tetany", loc: "Hand", find: "Carpal spasm after BP cuff inflation", signs: "Trousseau sign", interp: "Hypocalcaemia — check calcium and magnesium", by: "Tmdswan", page: "https://commons.wikimedia.org/wiki/File:Trousseau%27s_Sign_of_Latent_Tetany.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Abnormal calcium", [F.s("Correct for albumin, check Mg"), F.a, F.d("Symptoms/severe?"), F.a, F.b([["Yes", F.e("IV calcium / IV saline")], ["No", F.ok("Oral therapy, find cause")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Treating uncorrected low Ca in hypoalbuminaemia", "Unneeded calcium", "Correct first"], ["Ignoring magnesium", "Refractory hypocalcaemia", "Check Mg"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Corrected calcium formula?", "Measured Ca + 0.02 × (40 − albumin g/L) mmol/L.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Turner J, Gittoes N, Selby P, Society for Endocrinology Clinical Committee. Society for Endocrinology endocrine emergency guidance: emergency management of acute hypocalcaemia in adult patients. Endocr Connect. 2016;5:G7-G8. <a href="https://doi.org/10.1530/EC-16-0056" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
