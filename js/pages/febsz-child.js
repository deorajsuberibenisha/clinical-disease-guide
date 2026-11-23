/* Febrile seizures (Bhutan STG 12.1.1, AAP 2008/2011, NICE) */
registerPage({
id: "febsz-child",
title: "Febrile Seizures",
subtitle: "Stop a seizure lasting 5 minutes, exclude meningitis, find the fever source, and reassure the family — simple febrile seizures do not cause brain damage and need no prophylaxis",
age: "6 months – 5 years", specs: ["paeds", "neuro", "emerg"],
keywords: ["febrile seizure", "febrile convulsion", "simple febrile seizure", "complex febrile seizure", "diazepam rectal", "midazolam buccal", "meningitis", "prophylaxis"],
related: ["epilepsy-child", "meningitis-child", "malaria-child", "urti-child", "otitis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Febrile seizures affect 2–5% of young children. They are frightening but almost always harmless; the job is to stop prolonged seizures and not miss meningitis.</p>
<div class="glance">
<div><h4>Simple</h4><p>Generalised, under 15 min, once in 24 h, full recovery.</p></div>
<div><h4>Fitting 5 min+</h4><p>${dr("midazolam")} buccal 0.3 mg/kg or ${dr("diazepam")} 0.5 mg/kg PR / 0.3 mg/kg IV.</p></div>
<div><h4>Meningitis?</h4><p>LP if signs, under 12 months unimmunised, or pretreated with antibiotics.</p></div>
<div><h4>No prophylaxis</h4><p>Paracetamol for comfort only — does not prevent recurrence.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 12.1.1: diazepam 0.3 mg/kg IV or 0.5 mg/kg PR; paracetamol 15 mg/kg; suggests oral diazepam 0.3 mg/kg BD for 3 days if first seizure under 1 year or parents very anxious. AAP and NICE advise against intermittent or continuous prophylaxis. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Features"], [["Simple", "Generalised, under 15 min, not recurring within 24 h"], ["Complex", "Focal, over 15 min, or repeated within 24 h — needs fuller assessment"], ["Febrile status", "Over 30 min — treat as status epilepticus"]])}<p>Recurrence about 30%; epilepsy risk only slightly raised (2–4% after complex seizures).${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Febrile seizure", [F.s("Immature brain + rapid rise in temperature"), F.a, F.s("Genetic susceptibility (family history)"), F.a, F.ok("Self-limiting seizure")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "AAP / NICE", "This guide"], [["Prophylaxis", "Oral diazepam 3 days in some", "Not recommended", "Not recommended " + LB.loc()], ["Tepid sponging", "Yes", "Not recommended (discomfort)", "Comfort measures only"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Seizure description, duration, focal features, recovery; vaccination; antibiotics already given; family history.</li><li>Source of fever: ears, throat, chest, urine, rash.</li></ul>${box("red", "Think meningitis/encephalitis", `<ul><li>Neck stiffness, bulging fontanelle, petechial rash</li><li>Not back to normal within 1 hour</li><li>Complex seizure, age under 6 months</li></ul>`)}<h3>The typical patient</h3><p>An 18-month-old in Bumthang with a cold has a 2-minute generalised seizure at home and is now alert and playing; red eardrum. <b>Simple febrile seizure with otitis media</b>: treat the ear infection, paracetamol for comfort, explain and teach first aid, no EEG or prophylaxis.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Meningitis/encephalitis", "Persistent drowsiness, neck signs"], ["Cerebral malaria", "Travel/risk area; RDT"], ["Rigors", "No loss of consciousness"], ["Epilepsy", "Afebrile seizures"], ["Hypoglycaemia, electrolyte disturbance", "Check glucose"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose; investigations for the fever source (urine). No routine EEG, imaging or bloods in simple febrile seizures.</p>` },
{ id: "staging", title: "Seizure calculator", html: `<div class="calc" data-calc="febsz"></div><div class="calc" data-calc="statusepi"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Recovery position, nothing in the mouth, time it.</li><li>Seizure 5 min or more: buccal midazolam 0.3 mg/kg (max 10 mg) or rectal diazepam 0.5 mg/kg (max 10 mg); IV diazepam 0.3 mg/kg if access; then status epilepticus protocol.</li><li>Treat the cause of fever; paracetamol or ibuprofen for distress.</li><li>Admit: complex seizure, under 12–18 months, unclear source, anxious family far from care.</li><li>Teach parents first aid; rescue buccal midazolam only for prolonged previous seizures.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("midazolam"), "0.3 mg/kg buccal", "Max 10 mg"], [dr("diazepam"), "0.5 mg/kg PR / 0.3 mg/kg IV", "Max 10 mg"], [dr("paracetamol"), "15 mg/kg 6-hourly", "Comfort"]])}` },
{ id: "populations", title: "Under 12 months", html: `<p>Lower threshold for LP; consider meningitis strongly, especially if Hib/pneumococcal vaccines incomplete.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Parents very anxious", "Explain benign course, give written first-aid plan; no daily drugs"], ["Third febrile seizure", "Still benign; consider rescue midazolam plan"]])}` },
{ id: "complications", title: "Complications", html: `<p>Recurrence; very rarely febrile status; slight epilepsy risk after complex seizures.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>No routine follow-up for simple seizures; review complex or recurrent cases.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fit with fever", [F.d("Still fitting at 5 min?"), F.a, F.b([["Yes", F.e("Midazolam/diazepam → status protocol")], ["No", F.s("Back to normal? Meningitis signs?")]]), F.a, F.ok("Simple: treat source, reassure")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing meningitis", "Death/disability", "Examine; LP if indicated"], ["Daily anticonvulsants", "Side effects, no benefit", "Reassure"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Does paracetamol prevent febrile seizures?", "No — use it only for comfort.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Subcommittee on Febrile Seizures, American Academy of Pediatrics. Febrile seizures: guideline for the neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011;127:389-394. <a href="https://doi.org/10.1542/peds.2010-3318" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 12.1.1.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
