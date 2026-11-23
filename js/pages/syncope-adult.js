/* Syncope (ESC 2018) */
registerPage({
id: "syncope-adult",
title: "Syncope (Fainting)",
subtitle: "Separate true syncope from seizures and falls, get an ECG in everyone, look for high-risk cardiac features, and reassure and educate those with reflex faints",
age: "Adolescents & adults", specs: ["cardio", "medicine", "emerg", "neuro"],
keywords: ["syncope", "fainting", "vasovagal", "reflex syncope", "orthostatic hypotension", "cardiac syncope", "arrhythmia", "ECG", "long QT", "aortic stenosis", "transient loss of consciousness"],
related: ["af-adult", "epilepsy-adult", "acs-adult", "vte-adult", "hf-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Most syncope is reflex (vasovagal) and harmless; a few patients have a cardiac cause with a high risk of sudden death. History and ECG separate them.</p>
<div class="glance">
<div><h4>History</h4><p>Trigger, posture, prodrome, recovery, witness account.</p></div>
<div><h4>ECG</h4><p>Every patient.</p></div>
<div><h4>High risk</h4><p>Exertional, lying down, palpitations, heart disease, abnormal ECG.</p></div>
<div><h4>Low risk</h4><p>Reassure, fluids, salt, counter-pressure manoeuvres.</p></div>
</div>
${box("bt", "Bhutan note", `<p>No STG chapter. Echo and Holter are at JDWNRH and regional hospitals. At high altitude, dehydration and orthostatic syncope are common in visitors. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Features"], [["Reflex (vasovagal, situational)", "Standing, heat, pain, blood, micturition, cough; prodrome; quick recovery"], ["Orthostatic", "On standing; drugs, dehydration, autonomic failure, elderly"], ["Cardiac", "Exertion, lying, palpitations, no prodrome, injury; structural disease"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Syncope", [F.s("Global cerebral hypoperfusion"), F.a, F.s("Low BP (vasodilation, bradycardia) or low output"), F.e("Brief loss of consciousness and tone, spontaneous recovery")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "ESC 2018", "This guide"], [["Routine CT head", "Common", "Not indicated", "Not indicated " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Lying and standing BP (drop 20 systolic/10 diastolic or to under 90 within 3 min).</li><li>Heart murmur, signs of heart failure, bleeding.</li><li>Seizure features: tongue biting (lateral), prolonged confusion, head turning.</li></ul><h3>The typical patient</h3><p>A 19-year-old student in Thimphu faints while standing in a hot assembly, after feeling warm and nauseous; recovers in 30 seconds; ECG normal. <b>Reflex (vasovagal) syncope</b>: reassure, fluids, salt, lie down with prodrome, leg-crossing manoeuvres.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Seizure", "Lateral tongue bite, prolonged confusion"], ["Hypoglycaemia", "Diabetes, gradual"], ["Stroke/TIA", "Focal deficit, not usually LOC"], ["Psychogenic", "Eyes closed, long duration"], ["Intoxication", "History"]])}` },
{ id: "invest", title: "Investigations", html: `<p>ECG; glucose; Hb; pregnancy test; echo if murmur/structural disease; Holter/event monitor for suspected arrhythmia.</p>` },
{ id: "staging", title: "Risk tool", html: `<div class="calc" data-calc="syncoperisk"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Reflex: education, avoid triggers, fluids 2–3 L and salt (if no hypertension), counter-pressure manoeuvres.</li><li>Orthostatic: review drugs (antihypertensives, diuretics, alpha-blockers), hydration, slow standing, compression stockings.</li><li>Cardiac: admit, monitor, treat cause (pacemaker for block, valve surgery, ICD).</li><li>Driving advice by type.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `<p>Usually none for reflex syncope. Stop or reduce culprit drugs.</p>` },
{ id: "populations", title: "Elderly", html: `<p>Often multifactorial; falls with injury may be unrecognised syncope — ECG and orthostatic BP.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Syncope during exercise in a young athlete", "Admit/urgent cardiology: HCM, long QT, anomalous coronary"]])}` },
{ id: "complications", title: "Complications", html: `<p>Injury, recurrence; sudden death in cardiac syncope.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Reflex: no routine follow-up. Cardiac: per specialist.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "AF on ECG", src: "images/stroke-af-ecg.jpg", mod: "12-lead ECG", ctx: "Arrhythmia", loc: "All leads", find: "Irregularly irregular rhythm", interp: "Arrhythmia can cause syncope", by: "Ewingdo", page: "https://commons.wikimedia.org/wiki/File:ECG_Atrial_Fibrillation_90_bpm.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Transient loss of consciousness", [F.s("History, BP lying/standing, ECG"), F.a, F.d("High-risk features?"), F.a, F.b([["Yes", F.e("Admit, monitor, echo")], ["No", F.ok("Reflex/orthostatic: educate, discharge")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No ECG", "Missed long QT, block", "ECG for all"], ["Labelling convulsive syncope as epilepsy", "Unneeded drugs", "Brief jerks are common in syncope"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Name two high-risk features in syncope.", "Exertional syncope; abnormal ECG (also syncope lying down, palpitations, structural heart disease).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Brignole M, Moya A, de Lange FJ, et al. 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J. 2018;39:1883-1948. <a href="https://doi.org/10.1093/eurheartj/ehy037" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
