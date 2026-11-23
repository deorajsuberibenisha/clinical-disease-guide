/* Congenital heart disease: recognition and referral (AAP/AHA pulse oximetry 2020) */
registerPage({
id: "chd-child",
title: "Congenital Heart Disease: Recognition & Referral",
subtitle: "Screen newborns with pulse oximetry, recognise cyanosis, heart failure and shock in infants, stabilise, and refer early for echo and surgery",
age: "Newborns, infants & children", specs: ["paeds", "cardio", "neo", "nicu"],
keywords: ["congenital heart disease", "CHD", "VSD", "ASD", "PDA", "tetralogy of Fallot", "cyanosis newborn", "pulse oximetry screening", "duct-dependent", "heart failure infant", "Eisenmenger", "endocarditis prophylaxis"],
related: ["hf-child", "rhd-child", "preterm-child", "kawasaki-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">About 8 in 1000 babies have CHD. Critical lesions present in the first weeks with cyanosis or shock; others with breathlessness, poor feeding and poor growth.</p>
<div class="glance">
<div><h4>Screen</h4><p>Pulse oximetry after 24 h: hand and foot.</p></div>
<div><h4>Cyanosis</h4><p>SpO₂ under 90% not correcting with oxygen → think heart.</p></div>
<div><h4>Heart failure</h4><p>Fast breathing, sweating with feeds, big liver, poor gain.</p></div>
<div><h4>Refer</h4><p>Echo at JDWNRH; surgery abroad via referral.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Paediatric echocardiography is available at JDWNRH; cardiac surgery is through referral to India under the government scheme. Prostaglandin E1 (for duct-dependent lesions) is not on the NEML — early recognition and referral are critical. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Common lesions", html: `${tbl(["Lesion", "Presentation"], [["VSD", "Murmur at 6 weeks, heart failure if large"], ["ASD", "Often silent until childhood; fixed split S2"], ["PDA", "Preterms; continuous murmur, bounding pulses"], ["Tetralogy of Fallot", "Cyanosis, 'tet spells'"], ["Transposition", "Severe cyanosis day 1–2 — emergency"], ["Coarctation / HLHS", "Shock when duct closes (day 3–14), weak femoral pulses"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("CHD", [F.s("Left-to-right shunt → heart failure, pulmonary hypertension"), F.a, F.s("Right-to-left shunt → cyanosis"), F.e("Duct-dependent lesions collapse when the duct closes")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Sea level algorithm", "High altitude", "This guide"], [["Pass threshold", "95%+ and difference ≤3%", "Lower thresholds/higher false positives", "AAP algorithm with clinical judgement " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Cyanosis, tachypnoea, feeding difficulty, sweating, failure to thrive, recurrent chest infections, murmur, weak/absent femoral pulses, hepatomegaly.</li><li>Older: clubbing, exercise intolerance, squatting (Fallot).</li></ul><h3>The typical patient</h3><p>A 2-month-old in Lhuentse breathes fast, sweats with feeds and has gained little weight; pansystolic murmur, liver 3 cm. <b>Probable large VSD with heart failure</b>: furosemide, feeding support (fortified/NG feeds), refer for echo and surgical planning.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Pneumonia/sepsis", "Fever, responds to oxygen"], ["PPHN", "Hyperoxia test, echo"], ["Innocent murmur", "Soft, systolic, varies with posture, well child"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Pre- and post-ductal SpO₂, four-limb BP, chest X-ray, ECG, echo (definitive).</p>` },
{ id: "staging", title: "Pulse oximetry screen", html: `<div class="calc" data-calc="pulseoxscreen"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Shocked neonate (duct-dependent): ABC, glucose, avoid high oxygen if cyanotic lesion suspected, prostaglandin E1 where available, urgent referral.</li><li>Heart failure: furosemide 1 mg/kg 12-hourly, spironolactone, ACE inhibitor (specialist), calorie-dense feeds, treat anaemia.</li><li>Tet spell: knee-chest position, oxygen, morphine 0.1 mg/kg, fluids, propranolol (specialist).</li><li>Immunise fully (influenza, pneumococcal); dental care; endocarditis prophylaxis for cyanotic/repaired with prosthetic material.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("furosemide"), "1 mg/kg 12-hourly", "Heart failure"], [dr("spironolactone"), "1 mg/kg 12-hourly", "With furosemide"], [dr("morphine"), "0.1 mg/kg", "Tet spell"], [dr("amoxicillin"), "50 mg/kg (max 2 g)", "Endocarditis prophylaxis"]])}` },
{ id: "populations", title: "Down syndrome", html: `<p>Half have CHD (AVSD) — echo all newborns with Down syndrome.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Cyanosed newborn at district hospital", "Warmth, glucose, avoid 100% O₂ for long, urgent referral"]])}` },
{ id: "complications", title: "Complications", html: `<p>Heart failure, failure to thrive, pulmonary hypertension (Eisenmenger), endocarditis, brain abscess, stroke, arrhythmia.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Growth, development, echo per cardiologist; surgery timing by lesion.</p>` },
{ id: "images", title: "Images", html: `<p>See the heart failure in children chapter.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected CHD", [F.d("Cyanosis or shock in newborn?"), F.a, F.b([["Yes", F.e("Stabilise, PGE1 if available, urgent referral")], ["No", F.ok("Echo referral, treat heart failure, feed")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Not feeling femoral pulses", "Missed coarctation", "Every newborn check"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Pass criteria for newborn pulse oximetry screen?", "95% or more in hand or foot with difference 3% or less.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Martin GR, Ewer AK, Gaviglio A, et al. Updated strategies for pulse oximetry screening for critical congenital heart disease. Pediatrics. 2020;146:e20191650. <a href="https://doi.org/10.1542/peds.2019-1650" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
