/* Convulsive status epilepticus in children (AES 2016, APLS, Bhutan STG/EM booklet) */
registerPage({
id: "statusep-child",
title: "Status Epilepticus in Children",
subtitle: "Treat any seizure lasting 5 minutes: glucose, benzodiazepine (twice at most), then a second-line drug by 20 minutes, and prepare for intubation if still seizing at 40 minutes",
age: "Children", specs: ["paeds", "picu", "neuro", "emerg"],
keywords: ["status epilepticus", "convulsive status", "midazolam", "diazepam", "phenytoin", "levetiracetam", "phenobarbital", "refractory status", "ketamine", "thiopental", "febrile status"],
related: ["epilepsy-child", "febsz-child", "meningitis-child", "icp-child", "neoseizure-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>0–5 min</h4><p>ABC, oxygen, glucose, time it.</p></div>
<div><h4>5 min</h4><p>${dr("midazolam")} buccal/IM or ${dr("diazepam")} IV/PR — repeat once at 10 min.</p></div>
<div><h4>20 min</h4><p>${dr("levetiracetam")} 40–60 mg/kg or ${dr("phenytoin")} 20 mg/kg or ${dr("phenobarbital")} 20 mg/kg.</p></div>
<div><h4>40 min</h4><p>RSI (${dr("ketamine")}/${dr("thiopental")}), PICU.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG/EM booklet: diazepam 0.3 mg/kg IV or 0.5 mg/kg PR; phenytoin 15–20 mg/kg in saline; avoid more than 2 benzodiazepine doses; check glucose; think of isoniazid toxicity (pyridoxine). Levetiracetam IV availability varies — phenobarbital and phenytoin are on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Group", "Examples"], [["Febrile", "Febrile status (prolonged febrile seizure)"], ["Infection", "Meningitis, encephalitis, cerebral malaria, neurocysticercosis"], ["Metabolic", "Hypoglycaemia, hyponatraemia, hypocalcaemia"], ["Epilepsy", "Missed/low drug levels"], ["Toxic", "Isoniazid, organophosphates, tricyclics"], ["Structural", "Trauma, stroke, tumour"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Status", [F.s("Failure of seizure termination"), F.a, F.s("GABA receptors internalise — benzodiazepines lose effect"), F.e("Neuronal injury after ~30 min")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "ESETT/ConSEPT/EcLiPSE", "This guide"], [["Second-line drug", "Phenytoin", "Levetiracetam = phenytoin = valproate", "Any available; levetiracetam safest " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<h3>The typical patient</h3><p>A 3-year-old (14 kg) with fever is seizing for 8 minutes; glucose 5.2. <b>Convulsive status</b>: buccal midazolam 4.2 mg, repeat once at 10 min; if continuing, levetiracetam 840 mg IV (or phenytoin 280 mg) over 5–20 min; LP and ceftriaxone if meningitis suspected after stabilisation.</p>` },
{ id: "ddx", title: "Mimics", html: `${tbl(["Condition", "Clue"], [["Rigors", "Conscious"], ["Dystonia (metoclopramide)", "Conscious, drug history"], ["Non-epileptic events", "Eyes closed, resists opening"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose, Na, Ca, Mg, gas, FBC, cultures, malaria test, drug levels, toxicology; CT/LP when stable.</p>` },
{ id: "staging", title: "Dose tool", html: `<div class="calc" data-calc="statusepi"></div>` },
{ id: "manage", title: "Management", html: `<ol><li>0–5 min: airway, oxygen, glucose (10% dextrose 2–5 mL/kg if low), IV/IO access.</li><li>5 min: midazolam 0.3 mg/kg buccal (max 10 mg) or 0.2 mg/kg IM/IV; diazepam 0.3 mg/kg IV or 0.5 mg/kg PR. Repeat once after 5–10 min.</li><li>20 min: levetiracetam 40–60 mg/kg (max 3 g) over 5–15 min, or phenytoin 20 mg/kg in saline over 20 min (ECG), or phenobarbital 20 mg/kg.</li><li>40 min: second agent from above, then RSI with thiopental/ketamine and midazolam infusion; PICU, EEG.</li><li>Pyridoxine if isoniazid; calcium/magnesium if low; antibiotics/aciclovir if CNS infection possible.</li></ol>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("midazolam"), "0.3 mg/kg buccal; 0.2 mg/kg IM/IV", "First line"], [dr("diazepam"), "0.3 mg/kg IV; 0.5 mg/kg PR", "First line"], [dr("levetiracetam"), "40–60 mg/kg IV", "Second line"], [dr("phenytoin"), "20 mg/kg in saline", "ECG, not dextrose"], [dr("phenobarbital"), "20 mg/kg", "Respiratory depression"], [dr("ketamine"), "1–2 mg/kg", "Refractory/RSI"], [dr("thiopental"), "2–4 mg/kg", "RSI"]])}` },
{ id: "populations", title: "Neonates", html: `<p>See neonatal seizures (phenobarbital first).</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No IV access", "Buccal/IN/IM midazolam, IO for second line"]])}` },
{ id: "complications", title: "Complications", html: `<p>Hypoxia, aspiration, hypotension (drugs), brain injury, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Find cause; neurology follow-up; rescue medication plan for home.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Seizure 5 min+", [F.s("Glucose, benzo"), F.a, F.s("Repeat benzo once"), F.a, F.s("Second-line drug by 20 min"), F.a, F.e("RSI + PICU by 40 min")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Third benzodiazepine dose", "Apnoea", "Move to second line"], ["Phenytoin in dextrose", "Precipitates", "Saline only"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Buccal midazolam dose?", "0.3 mg/kg (max 10 mg).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Glauser T, Shinnar S, Gloss D, et al. Evidence-based guideline: treatment of convulsive status epilepticus in children and adults. Epilepsy Curr. 2016;16:48-61. <a href="https://doi.org/10.5698/1535-7597-16.1.48" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
