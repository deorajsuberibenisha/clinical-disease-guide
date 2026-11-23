/* Hyponatraemia and hypernatraemia (ESE/ESICM/ERBP 2014, paediatric fluids guidance) */
registerPage({
id: "sodium-adult",
title: "Hyponatraemia & Hypernatraemia",
subtitle: "Symptoms decide how fast; chronicity decides the limit: bolus 3% saline for severe symptoms, never raise sodium more than 10 mmol/L in 24 hours, and lower high sodium slowly",
age: "Adults & children", specs: ["medicine", "neph", "emerg", "paeds"],
keywords: ["hyponatraemia", "hypernatraemia", "sodium", "SIADH", "3% saline", "hypertonic saline", "osmotic demyelination", "free water deficit", "Adrogue Madias", "dehydration", "diuretic", "beer potomania"],
related: ["aki-adult", "ge-child", "cirrhosis-adult", "hf-adult", "meningitis-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Low sodium is the commonest electrolyte disorder in hospital. Both the disorder and its over-correction can injure the brain.</p>
<div class="glance">
<div><h4>Severe symptoms</h4><p>${dr("hypertonic_saline", "3% saline")} 150 mL over 20 min (child 2 mL/kg, max 100 mL), up to 3 times.</p></div>
<div><h4>Limit</h4><p>Rise no more than 10 mmol/L in 24 h (8 if high risk).</p></div>
<div><h4>Cause</h4><p>Volume status + urine sodium + osmolality.</p></div>
<div><h4>High sodium</h4><p>Fall no more than 10–12 mmol/L per 24 h.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG has no stand-alone sodium chapter. 3% saline (100 mL) is on the NEML; serum and urine osmolality are available at JDWNRH and regional hospitals. Common local causes: thiazides, diarrhoea, alcohol (beer potomania, ara), pneumonia/meningitis (SIADH), hypotonic IV fluids in children. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Classification", html: `${tbl(["Volume status", "Causes", "Urine Na"], [["Hypovolaemic", "Diarrhoea, vomiting, diuretics, adrenal insufficiency, cerebral salt wasting", "Under 30 (GI) / over 30 (renal, diuretics)"], ["Euvolaemic", "SIADH (pneumonia, meningitis, TB, drugs, surgery, pain), hypothyroidism, glucocorticoid deficiency, low solute intake", "Over 30"], ["Hypervolaemic", "Heart failure, cirrhosis, nephrotic syndrome, AKI/CKD", "Variable"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Brain and sodium", [F.s("Low sodium → water enters brain cells → oedema"), F.a, F.s("After 48 h, brain adapts by losing solutes"), F.a, F.e("Rapid correction of chronic hyponatraemia → osmotic demyelination")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "ESE 2014", "US expert panel 2013", "This guide"], [["Severe symptoms", "150 mL 3% saline bolus × up to 3", "100 mL 3% bolus", "ESE " + LB.loc()], ["24-h limit", "10 mmol/L", "10–12 (8 if high risk)", "10 (8 high risk)"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Mild: nausea, headache, falls, confusion in elderly.</li><li>Severe: vomiting, seizures, drowsiness, coma, respiratory arrest.</li><li>Hypernatraemia: thirst, irritability, high-pitched cry in infants, doughy skin, seizures.</li></ul><h3>The typical patient</h3><p>A 72-year-old woman on hydrochlorothiazide in Punakha is confused and vomiting; Na 114 mmol/L, euvolaemic. <b>This is severe symptomatic hyponatraemia</b>: 150 mL 3% saline over 20 min, recheck; stop the thiazide; limit the 24-h rise to 8 mmol/L (elderly, low intake, probably low K).</p>` },
{ id: "ddx", title: "Pitfalls", html: `${tbl(["Situation", "Clue"], [["Hyperglycaemia", "Translocational — correct for glucose"], ["Pseudohyponatraemia", "Very high lipids/protein, normal osmolality"], ["Sample from drip arm", "Repeat"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Serum osmolality, glucose, urine osmolality and sodium (before treatment), creatinine, potassium, TSH, morning cortisol; chest X-ray/CT head as indicated.</p>` },
{ id: "staging", title: "Sodium calculator", html: `<div class="calc" data-calc="sodiumcalc"></div>` },
{ id: "manage", title: "Management", html: `<h3>Hyponatraemia</h3><ul><li>Severe symptoms: 3% saline bolus(es) until Na up 5 mmol/L or symptoms improve, then treat cause.</li><li>Hypovolaemic: 0.9% saline — watch for rapid rise once volume restored (water diuresis).</li><li>SIADH: fluid restriction 800–1000 mL/day; oral salt or urea if persistent; treat cause.</li><li>Hypervolaemic: fluid restriction, loop diuretic, treat the heart/liver/kidney.</li><li>Overcorrection: stop, give 5% dextrose and desmopressin (specialist) to bring Na back.</li></ul><h3>Hypernatraemia</h3><ul><li>Shock: isotonic boluses first.</li><li>Then replace free water deficit slowly (oral water, 5% dextrose or 0.45% saline); time by starting Na (24–72 h).</li><li>Diabetes insipidus: desmopressin (specialist).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("hypertonic_saline"), "150 mL (2 mL/kg child)", "Severe symptoms"], [dr("furosemide"), "20–40 mg", "Hypervolaemic"]])}` },
{ id: "populations", title: "Children", html: `<p>Use isotonic maintenance fluids (0.9% saline + 5% dextrose) at 50–75% of maintenance in children at risk of SIADH (meningitis, pneumonia, post-op); never hypotonic. Breastfed infants with poor intake: hypernatraemic dehydration — slow correction over 48 h.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Na rises 14 in 12 h after saline in diarrhoea", "Overcorrection — stop saline, 5% dextrose, recheck 2-hourly"], ["Alcohol-dependent with Na 110", "High risk — limit 8/24 h; thiamine"]])}` },
{ id: "complications", title: "Complications", html: `<p>Seizures, cerebral oedema, falls and fractures, osmotic demyelination (quadriparesis, locked-in), cerebral haemorrhage in hypernatraemic infants.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Na every 4–6 h during correction; review drugs (thiazides, SSRIs, carbamazepine); check again after discharge.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Low sodium", [F.d("Severe symptoms?"), F.a, F.b([["Yes", F.e("3% saline bolus")], ["No", F.s("Volume status + urine Na/osm")]]), F.a, F.ok("Treat cause; ≤10 mmol/L/24 h")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Fast correction of chronic hyponatraemia", "Osmotic demyelination", "Hourly limits, frequent checks"], ["Hypotonic fluids in sick children", "Iatrogenic hyponatraemia", "Isotonic fluids"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Maximum sodium rise in the first 24 h?", "10 mmol/L (8 if high risk).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170:G1-G47. <a href="https://doi.org/10.1530/EJE-13-1020" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
