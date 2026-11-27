/* Atrial fibrillation — adults. Thin-page upgrade Round 2, 27 Nov 2026 (id, calculators chadsvasc/hasbled, image and related links kept).
   Sources read: ICMR Standard Treatment Workflow 'Atrial fibrillation' (Jan 2026; Bhutan Medical Library copy: suspicion, precipitants, categories,
   immediate-intervention indicators, CHA2DS2-VASc and HAS-BLED tables, OAC if score > 1, HR target < 110, level-of-care actions, rhythm-control drug
   choices, algorithm); NICE NG196 Atrial fibrillation (2021: pulse palpation, ECG, ambulatory monitoring, CHA2DS2-VASc ≥ 2 → DOAC, consider men at 1,
   ORBIT bleeding score, risk-factor modification, do not withhold for age/falls, no anticoagulation at very low risk, VKA control/TTR, rate control
   first line and exceptions, beta-blocker or diltiazem/verapamil, digoxin for sedentary, combinations, no amiodarone for long-term rate control,
   emergency cardioversion, < 48 h rate or rhythm, 3 weeks anticoagulation before cardioversion, no CCB/magnesium for cardioversion, amiodarone in LV
   impairment); ESC 2024 AF-CARE (from the previous version of this page — CHA2DS2-VA); Bhutan STG 2024 (no AF section; RHD and heart failure
   chapters); NEML 2025 text (apixaban 5/2.5 mg; warfarin 1/3 mg; digoxin tab/inj; diltiazem injection only; bisoprolol 5 mg; metoprolol succinate
   25 mg; propranolol; verapamil 40 mg; amiodarone tab/inj; heparin; enoxaparin — dabigatran and rivaroxaban NOT found; previous page error corrected). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "af-adult",
title: "Atrial fibrillation — adults",
subtitle: "Shock the unstable patient, control the rate (target under 110), anticoagulate by stroke score with apixaban or warfarin, look for the cause — rheumatic mitral disease, thyrotoxicosis, alcohol, hypertension — and never use aspirin alone for stroke prevention",
age: "Adults", specs: ["cardio", "medicine", "emerg"],
keywords: ["atrial fibrillation", "AF", "irregularly irregular pulse", "fast AF", "rate control", "rhythm control", "cardioversion", "CHA2DS2-VASc", "CHA2DS2-VA", "HAS-BLED", "ORBIT", "anticoagulation", "apixaban", "warfarin", "INR", "DOAC", "digoxin", "diltiazem", "bisoprolol", "amiodarone", "mitral stenosis AF", "atrial flutter", "paroxysmal AF", "persistent AF", "permanent AF"],
related: ["stroke-adult", "hf-adult", "rhd-adult", "thyroid-adult", "htn-adult", "alcohol-adult", "syncope-adult", "vte-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">AF is the commonest sustained arrhythmia. It causes palpitations, breathlessness and fatigue, and multiplies the risk of stroke; anticoagulation prevents most AF strokes ${r(2)} ${r(3)}. In Bhutan, rheumatic mitral disease, hypertension, alcohol and thyroid disease are important causes ${LB.loc()}.</p>
<div class="glance">
<div><h4>Unstable?</h4><p>SBP ≤ 90, HR > 150 or < 50, ongoing angina, heart failure, stroke/TIA → emergency electrical cardioversion (do not wait for anticoagulation) ${r(1)} ${r(2)}.</p></div>
<div><h4>Rate</h4><p>Beta-blocker or diltiazem/verapamil (not in heart failure); digoxin in heart failure or sedentary patients; aim for under 110/min ${r(1)} ${r(2)}.</p></div>
<div><h4>Stroke</h4><p>CHA₂DS₂-VASc ≥ 2 → anticoagulate (men with 1: consider). Apixaban, or warfarin INR 2–3; warfarin only with moderate–severe mitral stenosis or mechanical valve ${r(1)} ${r(2)}.</p></div>
<div><h4>Never</h4><p>Aspirin alone for stroke prevention; do not withhold anticoagulation just for age or falls ${r(2)} ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG has no AF section ${r(4)}. NEML 2025 has <b>apixaban 5 mg and 2.5 mg</b>, warfarin 1 mg and 3 mg, digoxin tablets and injection, bisoprolol 5 mg, metoprolol succinate 25 mg, propranolol, verapamil 40 mg, amiodarone tablets and injection, diltiazem <b>injection only</b>, heparin and enoxaparin; <b>dabigatran and rivaroxaban are not listed</b> ${r(5)}. INR monitoring is needed for warfarin — check local laboratory access before starting ${LB.loc()}. Patients with rheumatic mitral stenosis and AF must take warfarin, not apixaban ${r(1)} ${r(3)} ${P("rhd-adult", "RHD")}.</p>`)}
` },
{ id: "overview", title: "Types and causes", html: `${tbl(["Type", "Definition"], [
["Paroxysmal", "Episodes of less than 7 days " + r(1)],
["Persistent", "7 days to 1 year " + r(1)],
["Long-standing persistent", "More than 1 year " + r(1)],
["Permanent", "Rate control is the only option " + r(1)]
])}
${tbl(["Precipitants / risk factors", ""], [
["Cardiac", "Valve disease (rheumatic), heart failure, MI, post-cardiac surgery, myo-pericarditis, ACS " + r(1)],
["Other", "Alcohol (including binges), pneumonia, pulmonary embolism, sepsis, hyperthyroidism, hypertension, diabetes, COPD, CKD, obesity " + r(1)]
])}` },
{ id: "patho", title: "How AF causes harm", html: `${F.chart("AF", [F.s("Atrial stretch and fibrosis (pressure, valves, age, alcohol, thyroid)"), F.a, F.s("Chaotic atrial activity; irregular fast ventricular response"), F.a, F.b([["Stasis in left atrial appendage", F.e("Thrombus → stroke, systemic embolism")], ["Fast rate", F.e("Heart failure, tachycardia cardiomyopathy")]])])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "ICMR 2026", "NICE NG196", "ESC 2024", "This guide"], [
["Stroke score", "CHA₂DS₂-VASc; OAC if score > 1", "CHA₂DS₂-VASc ≥ 2 offer; men with 1 consider", "CHA₂DS₂-VA (sex removed) ≥ 2 recommend, 1 consider", "Calculator shows both " + r(1) + r(2) + r(3)],
["Bleeding score", "HAS-BLED; high if > 3 (as printed)", "ORBIT preferred", "Address modifiable bleeding risks", "HAS-BLED to find modifiable risks; never a reason alone to withhold " + r(1) + r(2)],
["Anticoagulant", "DOAC; VKA if severe MS or metallic valve", "DOAC first; VKA if DOAC unsuitable", "DOAC preferred", "Apixaban (NEML) or warfarin " + r(1) + r(2) + r(5)],
["Rate target", "< 110/min", "Symptom-guided", "Lenient < 110 initially", "< 110, lower if symptoms " + r(1) + r(3)]
])}` },
{ id: "presentation", title: "Clinical features", html: `${tbl(["Feature", "Detail"], [
["Symptoms", "Palpitations, fatigue, weakness, dizziness, near syncope or syncope, breathlessness, chest pain — worse on exertion; or none " + r(1)],
["Signs", "Irregularly irregular pulse, variable heart sounds; pulse deficit " + r(1)],
["Check pulse in", "Breathlessness, palpitations, syncope, dizziness, chest discomfort, stroke or TIA " + r(2)],
["Immediate intervention indicators", "SBP ≤ 90, HR > 150 or < 50, ongoing angina, heart failure, TIA/stroke, major bleed on anticoagulant " + r(1)]
])}
<h3>The typical patient</h3><p>A 66-year-old hypertensive man in Paro has 2 days of palpitations; pulse irregular 128, BP 140/90, no heart failure; echo LVEF 55%, no mitral stenosis. This is new AF, haemodynamically stable: rate control with a beta-blocker; CHA₂DS₂-VASc = 2 (age 65–74, hypertension) → apixaban 5 mg twice daily; check TSH, alcohol intake, BP control ${r(1)} ${r(2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Atrial flutter", "Saw-tooth waves, often regular ~150 — manage stroke risk the same way " + r(2)],
["Multifocal atrial tachycardia", "Varying P waves, lung disease " + LB.exp()],
["Frequent ectopics", "P waves present " + LB.exp()],
["AF with pre-excitation (WPW)", "Very fast, broad, irregular — avoid AV-nodal blockers " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `${tbl(["Level", "Tests"], [
["Basic", "12-lead ECG (rate, chamber enlargement, pre-excitation, prior MI, bundle branch block, QT), haemoglobin, glucose, creatinine, electrolytes " + r(1)],
["Desirable", "Chest X-ray, thyroid function, LFT, troponin, PT/INR, echocardiogram " + r(1)],
["Optional", "Prolonged ECG monitoring, TOE, exercise test, CT/MRI, EP study, angiography " + r(1)],
["Paroxysmal AF suspected", "24-hour Holter if episodes less than 24 h apart; event recorder if further apart " + r(2)],
["Echo", "Baseline for long-term care, before rhythm control, suspected structural disease, or if it changes stroke decisions — not routinely just to refine a score already requiring anticoagulation " + r(2)]
])}` },
{ id: "staging", title: "Stroke and bleeding scores", html: `<div class="calc" data-calc="chadsvasc"></div><div class="calc" data-calc="hasbled"></div><p>Do not anticoagulate under 65 with no risk factors other than sex (CHA₂DS₂-VASc 0 men, 1 women) ${r(2)}. A high bleeding score means fix modifiable risks — uncontrolled BP, labile INR, antiplatelets, NSAIDs, SSRIs, alcohol, anaemia — not withhold treatment ${r(1)} ${r(2)}.</p>` },
{ id: "manage", title: "Management", html: `
<h3>1. Acute presentation</h3>
<ul>
<li>Life-threatening instability: emergency electrical cardioversion without waiting for anticoagulation ${r(2)}; ICMR: immediate cardioversion after heparin ${r(1)}.</li>
<li>Stable, onset under 48 hours: rate or rhythm control; over 48 hours or unknown: rate control, and 3 weeks of therapeutic anticoagulation before any cardioversion ${r(2)}.</li>
<li>Suspected acute decompensated heart failure: no calcium-channel blockers; senior input on beta-blockers ${r(2)}.</li>
<li>Pharmacological cardioversion: amiodarone with structural heart disease; flecainide/propafenone with a normal heart; not magnesium or calcium-channel blockers ${r(1)} ${r(2)}.</li>
</ul>
<h3>2. Rate control (first line for most)</h3>
<ul>
<li>Standard beta-blocker or diltiazem/verapamil by symptoms, rate and comorbidity ${r(2)}; ICMR: metoprolol/diltiazem/verapamil if HR > 110 and no heart failure ${r(1)}.</li>
<li>Digoxin monotherapy if sedentary or others unsuitable; combinations of any two of beta-blocker, diltiazem, digoxin if needed; no amiodarone for long-term rate control ${r(2)}.</li>
<li>Rhythm control instead for reversible cause, AF-induced heart failure, new-onset AF, flutter, ablation candidates ${r(2)}.</li>
</ul>
<h3>3. Stroke prevention</h3>
<ul>
<li>DOAC (apixaban in Bhutan) for CHA₂DS₂-VASc ≥ 2; consider in men with 1 ${r(2)} ${r(5)}.</li>
<li>Warfarin INR 2–3 if DOAC unsuitable, or moderate–severe mitral stenosis, or mechanical valve ${r(1)} ${r(2)}.</li>
<li>Warfarin control: reassess if 2 INRs > 5 or 1 INR > 8 in 6 months, 2 INRs < 1.5, or time in range < 65% ${r(2)}.</li>
</ul>
<h3>4. Long-term rhythm control</h3><p>Beta-blocker first; amiodarone if LV impairment/heart failure; specialist options (flecainide, propafenone, sotalol, dronedarone, ablation) ${r(1)} ${r(2)}.</p>
<h3>5. Package of care</h3><p>Education on stroke, anticoagulation, rate and rhythm, who to contact; risk-factor and lifestyle modification ${r(1)} ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Use", "Bhutan NEML"], [
[D("apixaban", "Apixaban"), "5 mg twice daily; 2.5 mg twice daily if 2 of: age ≥ 80, weight ≤ 60 kg, creatinine ≥ 133 µmol/L " + LB.exp("DOSE-REDUCTION CRITERIA FROM PREVIOUS PAGE (ESC) — CHECK LABEL"), "5 mg, 2.5 mg " + r(5)],
[D("warfarin", "Warfarin"), "Target INR 2–3 " + r(1), "1 mg, 3 mg " + r(5)],
[D("bisoprolol", "Bisoprolol"), "Rate control " + r(2), "5 mg " + r(5)],
[D("metoprolol", "Metoprolol"), "Rate control " + r(1), "Succinate 25 mg " + r(5)],
[D("diltiazem", "Diltiazem"), "Rate control if LVEF preserved; not in heart failure " + r(2), "Injection only " + r(5)],
[D("verapamil", "Verapamil"), "Rate control " + r(1), "40 mg " + r(5)],
[D("digoxin", "Digoxin"), "Heart failure, sedentary, combination " + r(2), "Tablet, injection " + r(5)],
[D("amiodarone", "Amiodarone"), "Cardioversion/rhythm with structural disease; not for long-term rate control " + r(2), "Tablet, injection " + r(5)],
[D("heparin", "Heparin") + " / " + D("enoxaparin", "enoxaparin"), "Before cardioversion " + r(1), "Yes " + r(5)]
])}` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Older adults / falls", "Do not withhold anticoagulation for age or falls " + r(2)],
["Rheumatic mitral stenosis", "Warfarin, not DOAC " + r(1) + " " + P("rhd-adult", "RHD")],
["Thyrotoxicosis", "Beta-blocker; treat thyroid; anticoagulate by score " + P("thyroid-adult", "thyroid") + " " + LB.exp()],
["Pregnancy", "Specialist; DOACs avoided " + LB.exp()],
["CKD", "Dose adjustments; check creatinine " + r(1) + " " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["AF 150/min, BP 80/50, confused", "Synchronised DC cardioversion now " + r(1) + r(2)],
["AF with pulmonary oedema, LVEF 30%", "No diltiazem/verapamil; digoxin ± cautious beta-blocker; amiodarone; senior input " + r(2)],
["Young woman, lone AF, no risk factors", "No anticoagulation (score 1 from sex only) " + r(2)],
["AF + mitral stenosis on echo", "Warfarin INR 2–3 " + r(1)],
["Fast AF in sepsis", "Treat sepsis first; rate settles " + r(1) + " " + LB.exp()]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Stroke and systemic embolism ${r(2)}.</li><li>Heart failure, tachycardia cardiomyopathy ${r(1)}.</li><li>Bleeding on anticoagulants ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Review stroke and bleeding risk, symptoms, rate, adherence ${r(2)}.</li><li>Warfarin: INR and time in therapeutic range at each visit ${r(2)}.</li><li>Apixaban: kidney function regularly ${LB.exp()}.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Atrial fibrillation", src: "images/stroke-af-ecg.jpg", mod: "12-lead ECG", ctx: "AF", loc: "All leads", find: "Irregularly irregular rhythm, no P waves, wavy baseline", signs: "AF with controlled rate", interp: "Calculate stroke score and anticoagulate", by: "Ewingdo", page: "https://commons.wikimedia.org/wiki/File:ECG_Atrial_Fibrillation_90_bpm.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("AF on ECG", [F.d("Unstable (SBP ≤ 90, HR > 150, angina, HF, stroke)?"), F.a, F.b([["Yes", F.e("Synchronised DC cardioversion")], ["No", F.s("Rate control: BB or diltiazem/verapamil; digoxin if HF/sedentary")]]), F.a, F.s("CHA₂DS₂-VASc → apixaban or warfarin (MS/mechanical valve)"), F.a, F.ok("Treat causes; consider rhythm control; package of care")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Aspirin instead of anticoagulant", "Little benefit, still bleeds", "Apixaban or warfarin " + r(2) + r(3)],
["Diltiazem in heart failure", "Worsens failure", "Echo first; digoxin/beta-blocker " + r(2)],
["Apixaban in mitral stenosis", "Inferior to warfarin", "Echo for valve disease " + r(1)],
["Cardioverting AF > 48 h without anticoagulation", "Stroke", "3 weeks anticoagulation first unless unstable " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "CHA₂DS₂-VASc for a 76-year-old woman with diabetes?", "4 (age ≥ 75 = 2, diabetes = 1, female = 1) — anticoagulate.")}
${qa("Intern/MO", "Rate-control target?", "Under 110/min (lower if still symptomatic).")}
${qa("Specialist", "When must warfarin be used instead of a DOAC?", "Moderate–severe mitral stenosis or a mechanical heart valve.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Indian Council of Medical Research. Standard Treatment Workflow: Atrial fibrillation. Department of Health Research, Jan 2026.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Atrial fibrillation: diagnosis and management (NG196), 2021.</li>
<li id="ref-3">Van Gelder IC, Rienstra M, Bunting KV et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J. 2024;45:3314–3414. doi:10.1093/eurheartj/ehae176.</li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, chapter 2 Cardiovascular (no AF section).</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["ICMR STW 2026", "<span class='pass'>Checked</span>", "Read in full"],
["NICE NG196", "<span class='pass'>Checked</span>", "Read"],
["ESC 2024", "<span class='unv'>Carried over</span>", "From previous page version; not re-read"],
["NEML DOACs", "<span class='pass'>Corrected</span>", "Dabigatran not on NEML 2025 (previous page wrong)"],
["Calculators", "<span class='pass'>Kept</span>", "chadsvasc, hasbled"],
["Images", "<span class='pass'>Checked</span>", "Licensed Commons ECG"]
], "qc")}` }
]
});
})();
