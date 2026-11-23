/* Acid–base disorders and blood gas interpretation (Kraut & Madias 2010, paediatric fluids guide) */
registerPage({
id: "acidbase-adult",
title: "Acid–Base Disorders & Blood Gas Interpretation",
subtitle: "Read every gas in five steps — pH, primary change, compensation, anion gap, delta ratio — then treat the cause; bicarbonate only for specific indications",
age: "Adults & children", specs: ["medicine", "emerg", "neph", "picu"],
keywords: ["acid base", "blood gas", "ABG", "VBG", "metabolic acidosis", "anion gap", "Winter's formula", "delta ratio", "lactic acidosis", "respiratory acidosis", "metabolic alkalosis", "sodium bicarbonate", "methanol", "salicylate"],
related: ["dka-adult", "sepsis-adult", "aki-adult", "copd-adult", "poisoning-adult", "ge-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>1–2</h4><p>pH: acidaemia/alkalaemia; primary change: HCO₃ or CO₂.</p></div>
<div><h4>3</h4><p>Compensation: Winter's PaCO₂ = 1.5 × HCO₃ + 8 ± 2.</p></div>
<div><h4>4–5</h4><p>Anion gap (corrected for albumin); delta ratio.</p></div>
<div><h4>Treat</h4><p>The cause; ${dr("sodium_bicarbonate")} only for selected cases.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Blood gas analysers are available in ICUs and emergency departments of JDWNRH and referral hospitals; venous gases are adequate for pH, HCO₃ and lactate in most cases. Arak/ara (home-brewed spirit) methanol contamination should be considered in clusters of severe high-anion-gap acidosis with visual symptoms. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Main patterns", html: `${tbl(["Disorder", "Primary change", "Common causes"], [["High-AG metabolic acidosis", "HCO₃ ↓, AG ↑", "DKA, lactic acidosis (shock, sepsis), uraemia, methanol, ethylene glycol, salicylate, iron, isoniazid"], ["Normal-AG metabolic acidosis", "HCO₃ ↓, Cl ↑", "Diarrhoea, RTA, large saline volumes, acetazolamide"], ["Metabolic alkalosis", "HCO₃ ↑", "Vomiting, NG suction, diuretics, hypokalaemia"], ["Respiratory acidosis", "CO₂ ↑", "COPD, opioids, neuromuscular weakness, asthma exhaustion"], ["Respiratory alkalosis", "CO₂ ↓", "Anxiety, pain, PE, pneumonia, salicylate (early), altitude, pregnancy, liver failure"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Buffering", [F.s("Chemical buffers (bicarbonate) — seconds"), F.a, F.s("Respiratory compensation — minutes to hours"), F.e("Renal compensation — days")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "Current evidence", "This guide"], [["Bicarbonate for pH under 7.1 in lactic acidosis", "Common", "No proven benefit (except AKI subgroup in BICAR-ICU)", "Selected cases only " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical clues", html: `<ul><li>Kussmaul breathing (metabolic acidosis), slow shallow breathing (respiratory acidosis), tetany (alkalosis).</li></ul><h3>The typical patient</h3><p>A 30-year-old after drinking home-brewed spirit at a festival has blurred vision and deep breathing: pH 7.05, HCO₃ 6, PaCO₂ 20, Na 140, Cl 102. AG 32 (high); Winter’s expected PaCO₂ 15–19, measured 20 — just above the range, so a mild additional respiratory acidosis (tiring) is present. <b>High-anion-gap metabolic acidosis — suspect methanol</b>: osmolar gap, ethanol/fomepizole, bicarbonate, haemodialysis, folinic acid.</p>` },
{ id: "ddx", title: "Pitfalls", html: `${tbl(["Pitfall", "Fix"], [["Normal pH ≠ normal gas", "Look for opposing disorders"], ["Low albumin hides a high AG", "Add 2.5 per 10 g/L albumin below 40"], ["Venous vs arterial", "VBG pH ~0.03 lower, CO₂ ~5 higher"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Gas, Na, K, Cl, glucose, lactate, ketones, creatinine, albumin; osmolality (osmolar gap) for toxic alcohols; urine Cl in alkalosis; salicylate level.</p>` },
{ id: "staging", title: "Gas interpreter", html: `<div class="calc" data-calc="abgcalc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Lactic acidosis: restore perfusion, treat sepsis.</li><li>DKA: fluids, insulin — no routine bicarbonate.</li><li>Normal-AG losses/RTA: bicarbonate replacement.</li><li>Bicarbonate indications: severe hyperkalaemia, TCA overdose, salicylate (urinary alkalinisation), methanol, pH under 7.1 with AKI; dose 0.3 × weight × base deficit, half over 1 h, recheck.</li><li>Respiratory acidosis: treat cause, NIV/ventilation; avoid excess oxygen in COPD.</li><li>Metabolic alkalosis: saline and potassium for chloride-responsive causes.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("sodium_bicarbonate"), "0.3 × kg × base deficit (mmol)", "Selected indications"], [dr("kcl"), "Per K level", "Alkalosis, before bicarbonate"]])}` },
{ id: "populations", title: "Children", html: `<p>Same steps; neonatal and infant normal values differ slightly; diarrhoea causes normal-AG acidosis.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Several people with blindness after drinking", "Methanol outbreak: ethanol/fomepizole, dialysis, alert public health"]])}` },
{ id: "complications", title: "Complications of bicarbonate", html: `<p>Hypernatraemia, hypokalaemia, low ionised calcium, intracellular acidosis, CO₂ load.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Repeat gas with K and ionised Ca after treatment.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Blood gas", [F.s("pH → primary change"), F.a, F.s("Expected compensation"), F.a, F.s("Anion gap (albumin-corrected) → delta ratio"), F.a, F.ok("Name the disorder(s), treat cause")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Bicarbonate in DKA", "Cerebral oedema, hypokalaemia", "Insulin and fluids"], ["Skipping the anion gap", "Missed toxin", "Always calculate"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Winter's formula?", "Expected PaCO₂ = 1.5 × HCO₃ + 8 (± 2).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Kraut JA, Madias NE. Metabolic acidosis: pathophysiology, diagnosis and management. Nat Rev Nephrol. 2010;6:274-285. <a href="https://doi.org/10.1038/nrneph.2010.33" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
