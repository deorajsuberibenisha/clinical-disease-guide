/* Heart failure — children */
registerPage({
id: "hf-child",
title: "Heart Failure — Children",
subtitle: "Congenital and acquired causes, the infant with a sweating feed, and stabilising before referral",
age: "Children", specs: ["paeds", "cardio", "emerg", "nicu"],
keywords: ["heart failure", "congestive cardiac failure", "congenital heart disease", "myocarditis", "rheumatic heart disease", "dilated cardiomyopathy", "poor feeding", "sweating", "hepatomegaly", "tachypnoea", "Ross classification", "digoxin", "furosemide", "captopril"],
related: ["hf-adult", "tb-child"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if paediatric HF guidance changes)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In a baby, heart failure looks like feeding trouble, not breathlessness: the child feeds poorly, sweats with feeds and stops gaining weight. The cause is usually structural — congenital heart disease — and the first job is to recognise it and refer.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Poor feeding, sweating with feeds, poor weight gain, tachypnoea, and a large tender liver.</p></div>
<div><h4>Causes</h4><p>Congenital heart disease (commonest), rheumatic heart disease, acute myocarditis, severe anaemia, hypertension (acute glomerulonephritis).</p></div>
<div><h4>Left failure</h4><p>Tachypnoea, exertional dyspnoea (poor feeding), cough with frothy sputum, wheeze and crepitations.</p></div>
<div><h4>Right failure</h4><p>Raised JVP, enlarged tender liver, dependent oedema.</p></div>
<div><h4>First steps</h4><p>Airway/breathing/circulation, propped up, oxygen, keep feeding (NG if needed), and <b>refer</b>.</p></div>
<div><h4>Diuretic</h4><p>${dr("hydrochlorothiazide")} 1–2 mg/kg per dose once or twice daily (Bhutan STG), then refer for specialist care.</p></div>
<div><h4>Red flags</h4><ul><li>Grunting, cyanosis, poor perfusion</li><li>Too breathless to feed</li><li>Drowsiness or a fit</li></ul></div>
</div>
${box("bt", "Bhutan note", `<p>The STG 2024 manages childhood heart failure with <b>ABC, propped-up position, bed rest, oxygen, continued (or NG) feeding, and hydrochlorothiazide 1–2 mg/kg per dose once or twice daily</b>, then <b>referral to a higher centre for expert management</b>, with 3-monthly follow-up for medication adherence. The causes are mostly congenital or rheumatic heart disease. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What childhood heart failure is and why it happens", html: `
<h3>Definition</h3>
<p>Childhood heart failure is the heart's inability to pump enough oxygenated blood to meet the body's metabolic needs. In a young child the presentation is dominated by <b>feeding difficulty and poor growth</b> rather than the breathlessness and ankle swelling of adults.</p>
<h3>Causes</h3>
${tbl(["Cause", "Notes"], [
["<b>Congenital heart disease</b>", "The commonest cause in infancy: large left-to-right shunts (VSD, PDA), and obstructive lesions"],
["<b>Rheumatic heart disease</b>", "Important in South Asia; valve damage after rheumatic fever"],
["<b>Acute myocarditis</b>", "Usually viral; can follow a respiratory or diarrhoeal illness"],
["<b>Dilated cardiomyopathy</b>", "Idiopathic, familial, or after myocarditis"],
["<b>Severe anaemia</b>", "High-output failure"],
["<b>Hypertension (acute glomerulonephritis)</b>", "Sudden hypertension overloads the left ventricle"],
["<b>Arrhythmia</b>", "Sustained tachycardia (e.g. supraventricular) can cause failure"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Heart failure in children: causes differ by age", [
F.b([
["Infants", F.s("Left-to-right shunts (VSD, PDA, AVSD) → lungs flooded with blood")],
["Older children", F.s("Cardiomyopathy, myocarditis, rheumatic heart disease, arrhythmia")]]), F.a,
F.s("Volume overload of the heart, or weak pump"), F.a,
F.s("Sympathetic and hormonal activation; high metabolic cost of breathing"), F.a,
F.e("Fast breathing, sweating and tiring with feeds, poor weight gain, hepatomegaly")])}
<h3>Why a child compensates differently</h3>
<ol class="chain">
<li><b>A structural or functional problem</b> (a shunt, obstruction, weak muscle, or a fast arrhythmia) makes the heart work harder than it can sustain.</li>
<li><b>Compensation:</b> the heart rate rises, the sympathetic system and RAAS switch on, and salt and water are retained.</li>
<li><b>Congestion and low output:</b> the extra fluid backs up into the lungs (tachypnoea, frothy sputum) and the liver (hepatomegaly, oedema), while the gut and muscles get less blood — hence poor feeding and poor weight gain.</li>
<li><b>Decompensation:</b> an infant has little reserve; a feed (which is exercise for a baby) tips them into distress, and they may deteriorate within hours during an intercurrent infection.</li></ol>
<p>Because the infant's chest wall is compliant and the airways are small, lung congestion appears as <b>fast breathing and grunting</b> long before crackles or oedema are obvious. The enlarged, tender liver is the most reliable sign of right-heart congestion in a child.</p>
<h3>Natural history</h3>
<p>Untreated, severe childhood heart failure is fatal — but most causes are treatable: shunts are closed, valves repaired, myocarditis supported, and anaemia corrected. Early recognition and referral are what change the outcome.</p>
` },

{ id: "conflicts", title: "Where the guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "India (ICMR)", "International (AHA/ESC paediatric)", "This guide"], [
["First diuretic", "Hydrochlorothiazide 1–2 mg/kg OD/BD", "Furosemide for congestion", "Loop diuretic (furosemide) for congestion", "HCTZ per STG at primary level; furosemide under specialist care"],
["Where to manage", "Refer to a higher centre", "Specialist for most", "Paediatric cardiology for structural disease", "Stabilise (ABC, oxygen, diuretic) then refer"],
["Digoxin / ACEi / beta-blocker", "Not at primary level", "Specialist initiation", "Specialist initiation and titration", "Specialist only — do not start without cardiology"],
["Severity scoring", "Not specified", "Not specified", "Ross classification for infants", "Use Ross class to describe severity"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "What it looks like", "Significance"], [
["Poor feeding / long feeds", "Takes small volumes, tires and stops, falls asleep mid-feed", "The infant equivalent of exertional dyspnoea"],
["Sweating with feeds", "Forehead sweating during feeding", "High sympathetic drive — a classic infant heart-failure sign"],
["Poor weight gain", "Falling across centiles", "Low output and high energy cost"],
["Tachypnoea", "Fast breathing at rest", "Lung congestion"],
["Cough, wheeze, crepitations", "Frothy sputum, wet lungs", "Left-heart (pulmonary) congestion"],
["Enlarged tender liver", "Palpable liver edge below the costal margin", "Right-heart congestion — the key sign"],
["Raised JVP, dependent oedema", "Distended neck veins, puffy eyes/feet", "Right-heart congestion"],
["Irritability, lethargy", "Poor perfusion, low output", "Severe — assess urgently"],
["Murmur, gallop, tachycardia", "The underlying lesion", "Echocardiography will define it"]])}
<h3>Ross classification of infant heart failure</h3>
${tbl(["Class", "Description"], [
["I", "No symptoms"],
["II", "Mild tachypnoea or sweating with feeds"],
["III", "Marked tachypnoea or sweating with feeds; prolonged feeding"],
["IV", "Symptoms at rest (tachypnoea, grunting, diaphoresis)"]])}
${box("red", "Red flags", `<ul><li>Grunting, cyanosis, or oxygen saturation &lt;90%.</li><li>Cold, mottled peripheries or a thready pulse (shock).</li><li>Too breathless to feed, or drowsy and difficult to rouse.</li><li>Any of these: oxygen, support, and urgent referral.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Argues against", "Best test to separate"], [
["Pneumonia / bronchiolitis", "Fever, cough, crackles, wheeze", "No murmur, gallop or hepatomegaly", "CXR; response to treatment"],
["Sepsis", "Fever, poor perfusion, lethargy", "No cardiomegaly on CXR", "Blood culture; echo"],
["Severe anaemia", "Pallor, high-output state", "Normal heart on echo", "Full blood count"],
["Bronchiolitis", "Wheeze, epidemic, under 2 years", "No hepatomegaly or gallop", "Clinical; CXR"],
["Pericardial effusion", "Muffled heart sounds, pulsus paradoxus", "—", "Echocardiography"],
["Myocarditis vs cardiomyopathy vs CHD", "Overlap clinically", "—", "Echocardiography and specialist review"]])}
<h3>The typical patient</h3>
<p>A 6-week-old feeds for only a few minutes before tiring, sweats at the forehead during feeds, and has gained little weight since birth. The respiratory rate is 68, and the liver is 3 cm below the costal margin. This is <b>heart failure, most likely from congenital heart disease</b>. The next step is oxygen if needed, a chest X-ray and ECG, and urgent referral for echocardiography.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "What it shows"], [
["Pulse oximetry", "Hypoxaemia; right-to-left shunt", "Low SpO₂ suggests cyanotic heart disease"],
["Chest X-ray", "Cardiomegaly, pulmonary congestion", "Big heart + wet lungs"],
["ECG", "Arrhythmia, hypertrophy", "SVT, LVH, conduction disease"],
["<b>Echocardiography</b>", "The definitive test", "The structural lesion, valve disease, ventricular function"],
["Full blood count", "Anaemia (a cause of high-output failure)", "Hb"],
["Blood glucose, electrolytes", "The unwell infant", "Hypoglycaemia, hyponatraemia"],
["ESR/CRP", "Myocarditis or rheumatic activity", "Raised in inflammation"],
["Blood culture", "If sepsis is possible", "Bacteraemia"]])}
` },

{ id: "staging", title: "Severity and when to refer", html: `
<h3>Severity (Ross class) and action</h3>
${tbl(["Ross class", "Action"], [
["I", "Investigate the cause; specialist follow-up"],
["II", "Diuretic + early specialist review"],
["III", "Stabilise (oxygen, diuretic) and urgent referral"],
["IV", "Emergency: oxygen, support, urgent transfer"]])}
<h3>Refer urgently when</h3>
<ul>
<li>Any infant or child with suspected heart failure — the cause needs echocardiography.</li>
<li>Ross class III–IV, cyanosis, shock, or an arrhythmia.</li>
<li>New murmur with failure to thrive.</li></ul>
` },

{ id: "manage", title: "Management: stabilise, then refer", html: `
<h3>First stabilisation (any setting)</h3>
${box("green", "The first hour", `<ol><li><b>Airway, breathing, circulation:</b> propped-up position, oxygen to keep SpO₂ ≥92% (higher in cyanotic disease only as directed).</li><li><b>Feeding:</b> continue small, frequent feeds; nasogastric feeds if the child tires; treat hypoglycaemia.</li><li><b>Diuretic:</b> ${dr("hydrochlorothiazide")} 1–2 mg/kg per dose once or twice daily (Bhutan STG); ${dr("furosemide")} 0.5–1 mg/kg under specialist direction for marked congestion.</li><li><b>Refer</b> for echocardiography and definitive care.</li></ol>`)}
<h3>Specialist (higher-centre) treatment</h3>
<ul>
<li><b>Diuretics</b> (furosemide, with spironolactone) for congestion.</li>
<li><b>ACE inhibitor</b> (captopril or enalapril) and <b>beta-blocker</b> (carvedilol) for dilated cardiomyopathy, titrated slowly.</li>
<li><b>${dr("digoxin")}</b> for reduced function and rate control, with careful levels.</li>
<li><b>Treat the cause:</b> close the shunt, repair the valve, transfuse anaemia, control arrhythmia, and treat rheumatic fever or myocarditis.</li></ul>
${box("amber", "Do not start digoxin, ACE inhibitors or beta-blockers in a child without specialist input", `<p>These drugs are powerful and weight-sensitive in children; wrong doses are dangerous. Stabilise (ABC, oxygen, diuretic) and refer.${r(1)}</p>`)}
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card. Only the first-line diuretic is used at primary level; the rest are specialist-initiated.</p>
${tbl(["Drug", "Child dose", "Notes"], [
[dr("hydrochlorothiazide"), "1–2 mg/kg/dose once or twice daily (max 50 mg/day)", "First-line diuretic (Bhutan STG)"],
[dr("furosemide"), "0.5–1 mg/kg/dose IV/oral (specialist)", "Loop diuretic for marked congestion"],
[dr("spironolactone"), "1 mg/kg once daily (specialist)", "Potassium-sparing; monitor K⁺"],
[dr("digoxin"), "Weight-based, specialist digitalising then maintenance", "Narrow index; monitor levels"],
[dr("bisoprolol", "Beta-blocker (carvedilol)"), "Specialist, slow titration", "Dilated cardiomyopathy"]])}
` },

{ id: "populations", title: "Neonates and the malnourished child", html: `
<h3>Neonates</h3>
<ul><li>Heart failure in a newborn is usually <b>congenital heart disease</b> and can be cyanotic or acyanotic. It may first appear as the duct closes over the first days–weeks.</li><li>Keep warm, correct glucose, give oxygen where indicated (caution in some cyanotic lesions), and refer for echocardiography urgently.</li></ul>
<h3>The malnourished child</h3>
<ul><li>Malnutrition worsens heart failure (and vice versa); feed carefully, correct electrolytes, and watch for refeeding problems.</li><li>Severe anaemia (common in malnutrition and malaria areas) can itself cause high-output heart failure — transfuse cautiously and slowly.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Suspected congenital heart disease", "Oxygen, diuretic, prostaglandin only on specialist advice (duct-dependent lesions), urgent echo"],
["Acute myocarditis", "Support (oxygen, diuretics, inotropes in ICU); arrhythmia monitoring; antiviral only where indicated"],
["Rheumatic fever / rheumatic heart disease", "Treat the acute episode (penicillin, anti-inflammatory), then lifelong secondary penicillin prophylaxis and valve follow-up"],
["High-output failure from severe anaemia", "Slow, small-volume transfusion (often with a diuretic) under close supervision"],
["Arrhythmia-induced failure", "Treat the arrhythmia — cardioversion or rate control — and the failure resolves"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "How to recognise it", "Management"], [
["<b>Acute pulmonary oedema</b>", "Early", "Grunting, frothy sputum, desaturation", "Oxygen, diuretic, escalate"],
["<b>Cardiogenic shock</b>", "Early", "Cold peripheries, hypotension, lethargy", "ICU, inotropes"],
["<b>Failure to thrive</b>", "Late", "Falling growth despite feeding", "Optimise feeds, treat the heart"],
["<b>Arrhythmia</b>", "Either", "Palpitations, syncope, ECG", "Treat and monitor"],
["<b>Infective endocarditis", "Late", "Fever, new murmur, emboli", "Antibiotics; prevention in at-risk lesions"],
["<b>Pulmonary hypertension", "Late", "Worsening cyanosis or breathlessness", "Specialist care"]])}
<h3>Prognosis</h3>
<ul><li>With early diagnosis and definitive repair, most children with congenital heart disease survive into adulthood with a good quality of life.</li><li>Outcome depends on the underlying lesion and how early it is recognised — which is why prompt referral is the most important intervention.</li></ul>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul>
<li>After stabilisation, the child follows up at the higher centre <b>every 3 months</b> for adherence and growth.</li>
<li>Complete immunisations (with specialist advice on live vaccines in some conditions); give penicillin prophylaxis after rheumatic fever.</li>
<li>Watch weight, feeding and breathing at every visit; a child with heart failure who is gaining weight is doing well.</li></ul>
${box("green", "What to tell the family", `<ul><li>"Feed small amounts often, and sit the baby propped up — never flat."</li><li>"Watch for fast breathing, sweating during feeds, or poor weight gain, and come back early."</li><li>"Give the medicine at the same time every day and keep every follow-up appointment."</li><li>"Most heart problems in children can now be treated — early referral is the key."</li></ul>`)}
${box("red", "Return or seek help immediately if", `<ul><li>Fast or difficult breathing, grunting, or blue lips.</li><li>The child cannot feed, or is drowsy or hard to wake.</li><li>A fit, or cold hands and feet.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<p>See the adult heart-failure chapter for licensed images of <a href="#/d/hf-adult/images">pulmonary oedema, cardiomegaly and pitting oedema</a> — the same signs, in an adult chest.</p>
<h3>Link-only images</h3>
<ul><li>Paediatric cardiomegaly and congenital heart disease imaging: <a href="https://radiopaedia.org/articles/congenital-cardiovascular-anomalies" target="_blank" rel="noopener">Radiopaedia</a></li><li>Ventricular septal defect and left-to-right shunts: <a href="https://radiopaedia.org/articles/ventricular-septal-defect" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Recognise and stabilise childhood heart failure", [
F.s("Poor feeding, sweating with feeds, tachypnoea, large tender liver"), F.a,
F.s("ABC: propped up, oxygen, keep feeding (NG if needed), check glucose"), F.a,
F.s("Diuretic: hydrochlorothiazide 1–2 mg/kg/dose OD/BD"), F.a,
F.d("Danger sign, cyanosis, shock, or Ross III–IV?"), F.a,
F.b([["Yes", F.e("Urgent referral / transfer for echo and specialist care")], ["No", F.s("Early specialist referral for echo and diagnosis")]]), F.a,
F.ok("Treat the cause: shunt, valve, anaemia, arrhythmia, myocarditis")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>In an infant, a sweating feed is exertional dyspnoea.</b> Ask about it specifically.</li>
<li><b>The liver is the child's JVP.</b> An enlarged, tender liver is the most reliable sign of right-heart congestion.</li>
<li><b>Count the respiratory rate and weigh the child</b> at every visit — growth and breathing are the two trend markers.</li>
<li><b>Think of congenital heart disease in any infant who feeds poorly and fails to thrive</b>, even without a loud murmur.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Dismissing poor feeding as colic or reflux", "Missed heart failure", "Ask about sweating and weight gain; examine the liver"],
["Starting digoxin or ACE inhibitors without specialist input", "Weight-sensitive dosing errors", "Stabilise and refer"],
["Lying an infant with heart failure flat", "Worsens lung congestion", "Keep propped up"],
["Missing anaemia as the cause", "Unnecessary diuretics; the high-output failure persists", "Check the Hb"],
["Not weighing the child", "Missed failure to thrive", "Weigh and plot at every visit"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "How does heart failure present in an infant?", "Poor feeding, sweating with feeds, poor weight gain, tachypnoea, and a large tender liver.")}
${qa("Intern/MO", "What are the main causes of childhood heart failure in South Asia?", "Congenital heart disease, rheumatic heart disease, acute myocarditis, severe anaemia, and hypertension from acute glomerulonephritis.")}
${qa("Intern/MO", "What is the most reliable sign of right-heart congestion in a child?", "An enlarged, tender liver (the child's equivalent of a raised JVP).")}
</div>
<div class="qgroup"><h3>Management</h3>
${qa("Intern/MO", "First-line diuretic for childhood heart failure in Bhutan?", "Hydrochlorothiazide 1–2 mg/kg per dose once or twice daily.")}
${qa("Intern/MO", "Which drugs should not be started in a child with heart failure without specialist input?", "Digoxin, ACE inhibitors and beta-blockers.")}
${qa("Viva", "Why is prompt referral so important in childhood heart failure?", "Because most causes are structural (congenital or valve disease) and are treatable — early diagnosis and definitive repair determine the outcome.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §12.3.1 Congestive heart failure (children) and §2.2 Congestive cardiac failure (adults).</li>
<li id="ref-2">Ministry of Health, Bhutan. PEN Interventions for Hospitals. 2011, Ch.15 Chronic cardiac failure.</li>
<li id="ref-3">McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J 2021;42:3599–3726. <a href="https://doi.org/10.1093/eurheartj/ehab368" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehab368</a></li>
<li id="ref-4">Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 2022;145:e895–e1032. <a href="https://doi.org/10.1161/CIR.0000000000001063" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001063</a></li>
<li id="ref-5">ICMR, Department of Health Research, India. Standard Treatment Workflows: Heart Failure and Pediatric Heart Failure. New Delhi, 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-6">Ross RD. Grading the severity of congestive heart failure in infants. Pediatr Cardiol 1992;13:72–75. <a href="https://doi.org/10.1007/BF00798207" target="_blank" rel="noopener">doi:10.1007/BF00798207</a></li>
<li id="ref-7">Nelson Textbook of Pediatrics, 21st ed.; WHO Pocket Book 2013 — foundational pathophysiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Childhood HF causes and presentation", "<span class='pass'>Verified</span>", "Bhutan STG 2024 §12.3.1"],
["First-line diuretic and dose", "<span class='pass'>Verified</span>", "Hydrochlorothiazide 1–2 mg/kg/dose OD/BD"],
["Ross infant HF classification", "<span class='pass'>Verified</span>", "Ross RD 1992"],
["Specialist-drug caution", "<span class='pass'>Checked</span>", "Digoxin/ACEi/beta-blocker: specialist only"],
["Paediatric-specific image", "<span class='flag'>Not available</span>", "Links to the adult chapter images; no verified child HF image sourced"],
["References", "<span class='pass'>Done</span>", "All traceable; DOIs/links where available"]], "qc")}
` }
]
});
