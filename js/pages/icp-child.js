/* Coma and raised intracranial pressure in children (Bhutan STG 7.1, BTF 2019, WHO ETAT) */
registerPage({
id: "icp-child",
title: "Coma & Raised Intracranial Pressure (Children)",
subtitle: "Secure the airway, check glucose, protect the brain with oxygen, normal CO₂, BP and sodium, give hyperosmolar therapy for herniation signs, and find the cause fast",
age: "Children", specs: ["paeds", "picu", "neuro", "emerg"],
keywords: ["coma", "raised intracranial pressure", "ICP", "Glasgow coma scale", "paediatric GCS", "Cushing triad", "herniation", "hypertonic saline", "mannitol", "cerebral oedema", "encephalitis", "cerebral malaria"],
related: ["headinjury-child", "meningitis-child", "malaria-child", "dka-child", "epilepsy-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>ABC + glucose</h4><p>GCS 8 or less → intubate; glucose in every child.</p></div>
<div><h4>Neuroprotection</h4><p>Head 30°, PaCO₂ 35–40, SpO₂ 94–98, normal BP, Na 140–150.</p></div>
<div><h4>Herniation</h4><p>${dr("hypertonic_saline", "3% saline")} 3–5 mL/kg or ${dr("mannitol")} 0.5–1 g/kg.</p></div>
<div><h4>Cause</h4><p>Meningitis, malaria, trauma, DKA, poisoning, status.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 7.1: ABC, recovery position, oxygen, IV access, glucose, treat cause, chart GCS, refer. CT at JDWNRH and regional hospitals; PICU at JDWNRH. 3% saline and mannitol are on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Group", "Examples"], [["Infection", "Meningitis, encephalitis (HSV, JE), cerebral malaria, TB meningitis"], ["Metabolic", "Hypoglycaemia, DKA, hyponatraemia, hepatic/uraemic encephalopathy"], ["Structural", "Head injury, haemorrhage, tumour, hydrocephalus, abscess"], ["Toxic", "Opioids, benzodiazepines, organophosphates, alcohol"], ["Seizures", "Non-convulsive status, post-ictal"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Monro–Kellie", [F.s("Fixed skull: brain + blood + CSF"), F.a, F.s("Swelling raises ICP, lowers cerebral perfusion"), F.e("Herniation: Cushing triad, pupil changes, death")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Option A", "Option B", "This guide"], [["Hyperosmolar agent", "Mannitol", "3% saline (BTF 2019 favours)", "3% saline first, mannitol if unavailable " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Paediatric GCS or AVPU (P or U ≈ GCS 8 or less); pupils; posture; breathing pattern; BP and heart rate (Cushing).</li><li>Fever, rash, neck stiffness, fontanelle, retinal haemorrhages (abuse), smell, injuries.</li></ul><h3>The typical patient</h3><p>A 5-year-old (18 kg) with fever and a seizure is unresponsive: GCS 7, right pupil sluggish, BP 130/80, HR 60. <b>Coma with signs of raised ICP</b>: intubate, 3% saline 54–90 mL, ceftriaxone + aciclovir, glucose, malaria test, urgent CT, PICU.</p>` },
{ id: "ddx", title: "Mimics", html: `${tbl(["Condition", "Clue"], [["Post-ictal", "Improves within an hour"], ["Hypoglycaemia", "Glucose"], ["Psychogenic", "Resists eye opening"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose, electrolytes, gas, FBC, cultures, malaria test, LFT, ammonia, toxicology; CT before LP if raised ICP; EEG if non-convulsive status suspected.</p>` },
{ id: "staging", title: "GCS and actions", html: `<div class="calc" data-calc="pgcs"></div><div class="calc" data-calc="gcs"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Airway (intubate if GCS 8 or less or not protecting), oxygen, ventilation to normocapnia.</li><li>Circulation: normal-high BP for age, isotonic fluids.</li><li>Neuroprotection: head 30°, neck midline, normothermia, glucose 4–10, Na 140–150, seizure control.</li><li>Herniation: 3% saline 3–5 mL/kg or mannitol 0.5–1 g/kg; brief hyperventilation as bridge; neurosurgery.</li><li>Treat cause: ceftriaxone + aciclovir until excluded, artesunate if malaria, DKA protocol, naloxone for opioids.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("hypertonic_saline"), "3% 3–5 mL/kg", "Herniation"], [dr("mannitol"), "0.5–1 g/kg", "Alternative"], [dr("ceftriaxone"), "100 mg/kg", "Meningitis"], [dr("aciclovir"), "20 mg/kg 8-hourly", "Encephalitis"], [dr("levetiracetam"), "40–60 mg/kg", "Seizures"]])}` },
{ id: "populations", title: "Infants", html: `<p>Bulging fontanelle, setting-sun eyes, increasing head circumference; consider non-accidental injury.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["LP or not?", "Not with raised ICP signs; treat and image first"]])}` },
{ id: "complications", title: "Complications", html: `<p>Herniation, death, aspiration, neurological disability.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Hourly GCS/pupils; neurodevelopmental follow-up.</p>` },
{ id: "images", title: "Images", html: `<p>See head injury and meningitis chapters.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Unconscious child", [F.s("ABC, glucose, GCS, pupils"), F.a, F.d("Herniation signs?"), F.a, F.b([["Yes", F.e("3% saline/mannitol, CT, neurosurgery")], ["No", F.ok("Neuroprotection, treat cause")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No glucose check", "Missed hypoglycaemia", "Glucose first"], ["Prolonged hyperventilation", "Cerebral ischaemia", "Normocapnia"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Cushing triad?", "Hypertension, bradycardia, irregular breathing.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Kochanek PM, Tasker RC, Carney N, et al. Guidelines for the management of pediatric severe traumatic brain injury, third edition: update of the Brain Trauma Foundation guidelines. Pediatr Crit Care Med. 2019;20(3S Suppl 1):S1-S82. <a href="https://doi.org/10.1097/PCC.0000000000001735" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 7.1.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
