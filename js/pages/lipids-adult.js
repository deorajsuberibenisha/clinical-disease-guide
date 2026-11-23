/* Dyslipidaemia — adults (Bhutan NCD/PEN 2024, ESC/EAS 2019) */
registerPage({
id: "lipids-adult",
title: "Dyslipidaemia & Cardiovascular Risk — Adults",
subtitle: "Treat the person's total cardiovascular risk, not a single cholesterol number: high-intensity atorvastatin after MI or stroke, risk-based statins for prevention",
age: "Adults", specs: ["cardio", "endo", "medicine", "ph"],
keywords: ["dyslipidaemia", "cholesterol", "LDL", "triglycerides", "statin", "atorvastatin", "cardiovascular risk", "WHO risk chart", "PEN", "familial hypercholesterolaemia", "hypertriglyceridaemia"],
related: ["htn-adult", "dm-adult", "acs-adult", "stroke-adult", "ckd-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Lowering LDL cholesterol with a statin reduces heart attacks and strokes in proportion to how much it falls. Who benefits most is decided by total risk.</p>
<div class="glance">
<div><h4>Secondary prevention</h4><p>${dr("atorvastatin_hi", "Atorvastatin")} 80 mg (40 mg if frail) for all after MI, stroke, PAD.</p></div>
<div><h4>Diabetes 40+</h4><p>${dr("atorvastatin")} 20–40 mg.</p></div>
<div><h4>Primary prevention</h4><p>WHO risk over 30%: 40 mg; 20–30%: 10–20 mg (Bhutan PEN).</p></div>
<div><h4>Lifestyle</h4><p>No smoking, less salt and fat, activity, alcohol limits.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan NCD screening guideline (PEN, 2024) uses WHO/ISH South-East Asia risk charts at BHU level; atorvastatin is on the NEML. Rosuvastatin and ezetimibe are not on the NEML. High-fat, high-salt diets (butter tea, pork fat) and rising obesity make dyslipidaemia common. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `${tbl(["Type", "Causes"], [["High LDL", "Diet, genetic (FH), hypothyroidism, nephrotic syndrome, cholestasis"], ["High triglycerides", "Obesity, diabetes, alcohol, CKD, drugs (steroids, antiretrovirals)"], ["Low HDL", "Smoking, inactivity, insulin resistance"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Atherosclerosis", [F.s("LDL enters artery wall, oxidised"), F.a, F.s("Plaque grows; inflammation"), F.a, F.e("Plaque rupture → MI, stroke")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan PEN 2024", "ESC 2019", "This guide"], [["Risk tool", "WHO/ISH chart", "SCORE2", "WHO chart " + LB.loc()], ["LDL target after MI", "Statin by risk", "Under 1.4 mmol/L and 50% fall", "High-intensity statin; target where measured"], ["Add-on drugs", "Not on NEML", "Ezetimibe, PCSK9", "Referral if available"]])}` },
{ id: "presentation", title: "Clinical features", html: `<p>Usually none. Look for xanthelasma, tendon xanthomas (FH), corneal arcus under 45, eruptive xanthomas (very high triglycerides), pancreatitis.</p><h3>The typical patient</h3><p>A 56-year-old male smoker with hypertension in Wangdue has a WHO risk of 20–30%. <b>This needs statin therapy</b>: atorvastatin 10–20 mg, smoking cessation, BP control; lipids and ALT after 3 months.</p>` },
{ id: "ddx", title: "Secondary causes", html: `${tbl(["Cause", "Test"], [["Hypothyroidism", "TSH"], ["Diabetes", "HbA1c"], ["Nephrotic syndrome/CKD", "Urine protein, creatinine"], ["Alcohol", "History, GGT"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Lipid profile (fasting not required unless triglycerides high), glucose/HbA1c, creatinine, ALT, TSH; CK only if muscle symptoms.</p>` },
{ id: "staging", title: "Statin decision tool", html: `<div class="calc" data-calc="statinplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Lifestyle for everyone.</li><li>Atorvastatin at night or any time; dose by indication (tool above).</li><li>Triglycerides over 10 mmol/L: pancreatitis risk — low-fat diet, stop alcohol, control diabetes; fenofibrate where available.</li><li>Familial hypercholesterolaemia (LDL over 4.9 or family history of early CVD): high-intensity statin, family screening.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("atorvastatin"), "10–40 mg", "Primary prevention"], [dr("atorvastatin_hi"), "80 mg", "After MI/stroke"]])}` },
{ id: "populations", title: "Special groups", html: `<ul><li>Pregnancy and breastfeeding: stop statins.</li><li>Over 75: continue if already taking; start by risk and frailty.</li><li>CKD: statins benefit (not dialysis initiation).</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Muscle aches on statin", "Check CK; pause, rechallenge lower dose or alternate days"], ["ALT up under 3× normal", "Continue; recheck"]])}` },
{ id: "complications", title: "Complications", html: `<p>Untreated: MI, stroke, PAD, pancreatitis. Statins: myalgia, rare myopathy, small diabetes risk (outweighed by benefit).</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Lipids and ALT at 4–12 weeks, then yearly; adherence check.</p>` },
{ id: "images", title: "Images", html: `<p>See the ACS and stroke chapters for consequences of atherosclerosis.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Statin decision", [F.d("Established CVD?"), F.a, F.b([["Yes", F.e("Atorvastatin 80 mg")], ["No", F.s("WHO risk chart / diabetes")]]), F.a, F.ok("Dose by risk band + lifestyle")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Low-dose statin after MI", "Less protection", "High intensity"], ["Stopping for mild myalgia without assessment", "Lost benefit", "Check CK, rechallenge"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Statin dose after ischaemic stroke?", "Atorvastatin 80 mg daily (40 mg if frail or intolerance).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Mach F, Baigent C, Catapano AL, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J. 2020;41:111-188. <a href="https://doi.org/10.1093/eurheartj/ehz455" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Guideline for screening and management of NCDs (PEN), 2024.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
