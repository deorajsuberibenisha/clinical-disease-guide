/* Coma and reduced consciousness — adults. Batch E-4, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §7.1 Coma (definition, causes, GCS table); NEML 2025 (dextrose 25% and 50%, thiamine 100 mg/mL,
   naloxone 0.4 mg/mL). Doses cross-checked with this guide's pages hypo-adult and thiamine-adult and the FDA-label monographs (#/fdb).
   Edlow JA et al. Lancet 2014 (reversible causes of coma, abstract read); Teasdale G et al. Lancet Neurol 2014 (GCS at 40, cited for the scale). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "coma-adult",
title: "Coma and reduced consciousness — adults",
subtitle: "Stabilise first, then hunt for the reversible causes — low glucose, opioids, thiamine deficiency, infection, seizures and raised pressure — before deciding who needs a scan",
age: "Adults", specs: ["medicine", "emerg", "neuro"],
keywords: ["coma", "unconscious patient", "altered consciousness", "reduced level of consciousness", "GCS", "Glasgow coma scale", "AVPU", "hypoglycaemia coma", "opioid overdose", "naloxone", "thiamine", "Wernicke", "non-convulsive status", "brainstem", "pupils"],
related: ["stroke-adult", "meningitis-adult", "hypo-adult", "poisoning-adult", "headinjury-adult", "thiamine-adult", "dka-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Coma is unrousable unresponsiveness: the patient cannot be woken by stimulation and makes no purposeful attempt to avoid pain ${r(1)}. It is a symptom with many causes, several of which can be reversed within minutes at the bedside.</p>
<div class="glance">
<div><h4>First minutes</h4><p>Airway, breathing, circulation; protect the neck if trauma is possible; <b>check glucose now</b> ${r(1, 2)}.</p></div>
<div><h4>Give at once if indicated</h4><p>${D("dextrose", "Dextrose")} for low glucose; ${D("thiamine", "thiamine")} 100 mg IV if malnourished or alcohol use; ${D("naloxone", "naloxone")} if opioid toxicity is likely ${r(3, 4, 5)}.</p></div>
<div><h4>Score it</h4><p>Glasgow Coma Scale (E4 V5 M6 = 15; 3 = deepest coma). GCS 8 or less: protect the airway ${r(1, 6)}.</p></div>
<div><h4>Then decide</h4><p>Trauma or a likely structural cause → CT. Otherwise look for poisoning, infection, seizures, endocrine and thiamine causes ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Dextrose 25% and 50%, thiamine injection and naloxone are all on the NEML 2025 ${r(7)}. CT is available at JDWNRH and the regional referral hospitals; a district hospital should stabilise, treat the reversible causes and refer with an escort. ${LB.loc()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Group", "Examples (STG §7.1 and common in Bhutan)"], [
["Structural", "Stroke and intracerebral haemorrhage, head injury, brain tumour, abscess " + r(1)],
["Metabolic", "Hypoglycaemia, hyperglycaemia (DKA, HHS), respiratory failure (hypoxia, high CO₂), liver failure, kidney failure, sodium disorders " + r(1)],
["Infection", "Meningitis, encephalitis, cerebral malaria, sepsis " + r(1)],
["Toxins", "Alcohol, opioids, sedatives, organophosphates, carbon monoxide (bukhari stoves), snake envenomation " + r(1)],
["Seizures", "Post-ictal state, non-convulsive status epilepticus " + r(1, 2)],
["Deficiency", "Thiamine (Wernicke encephalopathy) " + r(2)],
["Psychiatric (rare)", "Psychogenic unresponsiveness — a diagnosis of exclusion " + r(2)]
])}` },
{ id: "patho", title: "How consciousness fails", html: `
${F.chart("Why the patient is unrousable", [F.s("Arousal needs the brainstem reticular system and both cerebral hemispheres"), F.a, F.b([["Structural", F.e("Brainstem lesion, or a mass pressing on it (herniation)")], ["Diffuse", F.d("Both hemispheres poisoned: glucose, oxygen, toxins, infection, seizures")]]), F.a, F.s("Pupils, eye movements and breathing pattern help separate the two")])}
<p>Persistent coma means the arousal system in the brainstem and diencephalon is affected, or both hemispheres are ${r(1)}. Diffuse (metabolic and toxic) causes usually spare pupil reactions; a unilateral fixed dilated pupil suggests a structural lesion with herniation ${LB.exp()}.</p>` },
{ id: "conflicts", title: "Where practice differs", html: `
${tbl(["Topic", "Approach A", "Approach B", "This guide"], [
["Thiamine before glucose?", "Traditional teaching: thiamine first", "Never delay glucose in hypoglycaemia", "Give glucose at once; give thiamine as soon as possible alongside it in anyone at risk " + LB.exp()],
["Naloxone dose", "FDA: 0.4–2 mg IV, repeat every 2–3 min", "Small doses (0.1–0.2 mg) in opioid-dependent patients to avoid acute withdrawal", "Titrate to breathing, not full wakefulness " + r(5)],
["Who needs CT", "Scan every comatose patient", "Scan when trauma or a structural cause is possible; reassess the rest (Edlow 2014)", "CT if any trauma, focal signs, unexplained coma or no quick response to treatment " + r(2)]
])}` },
{ id: "presentation", title: "Assessment", html: `
<ol>
<li><b>ABC</b>: airway (recovery position if no trauma; jaw thrust if neck injury possible), oxygen, breathing pattern, pulse, BP, temperature.</li>
<li><b>Glucose</b> on arrival ${r(2, 3)}.</li>
<li><b>History from witnesses</b>: onset (sudden = stroke, haemorrhage, seizure), trauma, drugs and alcohol, pesticides, diabetes, epilepsy, liver or kidney disease, recent fever, headache, travel to malaria areas.</li>
<li><b>Examination</b>: GCS ${r(1)}, pupils (size, reaction, symmetry), eye movements, neck stiffness (not if trauma), focal weakness, plantar responses, breath odour, needle marks, rash, injuries, tongue bite.</li>
</ol>
${tbl(["GCS component", "Score"], [
["Eye opening: spontaneous / to speech / to pain / none", "4 / 3 / 2 / 1"],
["Verbal: oriented / confused / inappropriate words / incomprehensible sounds / none", "5 / 4 / 3 / 2 / 1"],
["Motor: obeys / localises / withdraws / abnormal flexion / extension / none", "6 / 5 / 4 / 3 / 2 / 1"]
])}
<p>From STG table 7.1 ${r(1)}. Record each part (e.g. E2 V2 M4 = 8), not just the total ${r(6)}.</p>
<div class="calc" data-calc="gcs"></div>
<h3>The typical patient</h3>
<p>A 56-year-old man is brought in from Wangdue, found unrousable in the morning. He drinks heavily. GCS E1 V2 M4 = 7, glucose 2.1 mmol/L, no injuries. <b>Treat the reversible causes now:</b> protect the airway, give 25% dextrose IV and thiamine 100 mg IV, recheck glucose; if he does not wake fully, look for head injury (CT), infection and alcohol withdrawal seizures ${r(1, 3, 4)}.</p>` },
{ id: "ddx", title: "Clues to the cause", html: `${tbl(["Finding", "Think of"], [
["Pinpoint pupils, slow breathing", "Opioids; organophosphates (with secretions, fasciculations); pontine haemorrhage"],
["Unilateral fixed dilated pupil", "Herniation from a mass or bleed — urgent CT and neurosurgery"],
["Fever, neck stiffness, rash", "Meningitis — see Meningitis " + r(1)],
["Fever after travel to the south", "Cerebral malaria — test at once"],
["Very high glucose, deep breathing", "DKA / HHS"],
["Jaundice, flap, ascites", "Hepatic encephalopathy"],
["Cherry-pink colour, several people affected", "Carbon monoxide " + LB.loc()],
["Tongue bite, incontinence, twitching", "Seizure; non-convulsive status " + r(2)],
["Ophthalmoplegia, ataxia, malnutrition", "Wernicke encephalopathy " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Glucose (bedside), blood gas, sodium, potassium, calcium, urea, creatinine, liver tests, full blood count ${r(1, 2)}.</li>
<li>Malaria test, blood cultures; lumbar puncture once a mass lesion is excluded or unlikely ${LB.exp()}.</li>
<li>Toxicology history; cholinesterase if organophosphate suspected (see Poisoning).</li>
<li>CT head: trauma, focal signs, or when a structural cause is possible; if CT is normal and the cause is still unknown, look for poisoning, infection, non-convulsive seizures (EEG), endocrine disease and thiamine deficiency ${r(2)}.</li>
<li>ECG (arrhythmia, drug toxicity).</li>
</ul>` },
{ id: "staging", title: "Depth of coma", html: `
${tbl(["GCS", "Meaning", "Action"], [
["15", "Normal level of consciousness " + r(1), "—"],
["13–14", "Mild impairment", "Observe, find the cause"],
["9–12", "Moderate", "Close monitoring; airway at risk"],
["≤ 8", "Severe — 'coma'", "Protect the airway (intubation if available); urgent cause-finding " + LB.exp()],
["3", "Deepest coma " + r(1), "Check for treatable causes before any conclusion about prognosis"]
])}
<p>AVPU (Alert, Voice, Pain, Unresponsive) is a quick screen; a patient who responds only to pain usually has a GCS of 8 or less ${LB.exp()}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>Immediate</h3>
<ol>
<li>Airway, oxygen, IV access, monitor; cervical spine protection if trauma is possible.</li>
<li><b>Low glucose:</b> 10% dextrose 150–200 mL IV, or 25% dextrose 50 mL (STG), then recheck in 10 minutes and follow with a dextrose infusion and food when awake ${r(3)}.</li>
<li><b>Risk of thiamine deficiency</b> (alcohol, malnutrition, vomiting, pregnancy with hyperemesis): ${D("thiamine", "thiamine")} 100 mg IV straight away (STG) — do not let it delay glucose ${r(4)}.</li>
<li><b>Suspected opioids</b> (pinpoint pupils, slow breathing): ${D("naloxone", "naloxone")} 0.4–2 mg IV, repeated every 2–3 minutes as needed; IM or SC if no vein; if no response after 10 mg, reconsider the diagnosis ${r(5)}. It wears off before many opioids — watch for re-sedation.</li>
<li><b>Seizures:</b> treat as status epilepticus (see Epilepsy).</li>
<li><b>Fever with possible meningitis:</b> do not delay antibiotics for CT or LP (see Meningitis).</li>
</ol>
<h3>Then</h3>
<ul>
<li>Treat the cause found; nurse on the side, turn 2-hourly, eye care, catheter, nutrition, DVT prevention ${LB.exp()}.</li>
<li>Repeat GCS and pupils frequently; a fall of 2 or more points needs urgent review ${LB.exp()}.</li>
<li>Refer to JDWNRH (ICU, neurosurgery) for structural causes, persistent coma or airway support ${LB.loc()}.</li>
</ul>` },
{ id: "drugs", title: "Medicines (NEML 2025)", html: `${tbl(["Medicine", "Use", "NEML"], [
[D("dextrose", "Dextrose"), "Hypoglycaemia", "25% injection; 50% injection (100 mL)"],
[D("thiamine", "Thiamine"), "Wernicke prevention and treatment", "100 mg/mL injection; 75 mg tablet"],
[D("naloxone", "Naloxone"), "Opioid toxicity", "0.4 mg/mL injection"],
[D("flumazenil", "Flumazenil"), "Benzodiazepine reversal — rarely; can cause seizures in mixed overdose", "Check local stock"]
])}` },
{ id: "populations", title: "Special groups", html: `${tbl(["Group", "What changes"], [
["Pregnancy", "Think of eclampsia (BP, proteinuria) — magnesium sulfate; and hypoglycaemia, sepsis, stroke " + LB.exp()],
["Older adults", "Subdural haematoma after minor falls; sepsis; drug effects"],
["Diabetes", "Hypoglycaemia (especially sulfonylureas), DKA, HHS " + r(3)],
["Alcohol use", "Hypoglycaemia, head injury, Wernicke, withdrawal seizures, hepatic encephalopathy " + r(4)],
["Children", "Use the paediatric GCS and the children's pages (ICP, head injury, meningitis)"]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Farmer found unresponsive in the field, pinpoint pupils, drooling, sweating", "Organophosphate: atropine, oxygen, decontaminate — see Poisoning"],
["Young woman, GCS 6, pinpoint pupils, slow breathing, needle marks", "Naloxone titrated to breathing; observe for re-sedation " + r(5)],
["Family of four drowsy in the morning; stove in a closed room", "Carbon monoxide: 100% oxygen, remove from source " + LB.loc()],
["Fever, GCS 9, neck stiffness", "Antibiotics now; CT before LP if focal signs or papilloedema"],
["Elderly man on glibenclamide, GCS 8, glucose 1.8", "Dextrose; admit for prolonged infusion — sulfonylurea hypoglycaemia recurs " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Aspiration pneumonia, airway obstruction.</li>
<li>Pressure injuries, corneal abrasions, contractures, DVT.</li>
<li>Rhabdomyolysis after long immobility (kidney injury).</li>
<li>Permanent brain injury when a reversible cause is treated late ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Explain the cause and the plan to the family; arrange alcohol, diabetes or epilepsy follow-up as relevant.</li>
<li>Check memory and function after recovery — hypoglycaemic and hypoxic injury can leave deficits.</li>
</ul>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Unconscious adult", [F.s("ABC, oxygen, IV access, neck protection if trauma"), F.a, F.d("Glucose low?"), F.a, F.b([["Yes", F.e("Dextrose + thiamine if at risk")], ["No", F.d("Pinpoint pupils / slow breathing?")]]), F.a, F.b([["Yes", F.e("Naloxone titrated")], ["No", F.s("GCS, pupils, focal signs, fever, history")]]), F.a, F.d("Trauma or structural cause possible?"), F.a, F.b([["Yes", F.e("CT head; refer")], ["No", F.ok("Toxins, infection, seizures, endocrine, thiamine — treat and reassess")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Not checking glucose first", "The commonest reversible cause is missed", "Glucose on arrival"],
["Attributing coma to alcohol", "Head injury, hypoglycaemia, Wernicke missed", "Look for all of them"],
["One big dose of naloxone in a dependent patient", "Violent withdrawal, vomiting", "Small titrated doses"],
["Recording 'GCS 8' only", "Hard to follow change", "Record E, V and M separately"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Give the three GCS components and their maximum scores.", "Eye opening 4, verbal 5, motor 6 — total 15; minimum 3.")}
${qa("Intern/MO", "Hypoglycaemic coma at a BHU with only 25% dextrose — dose?", "25% dextrose 50 mL IV (STG), recheck glucose in 10 minutes, then infusion and food.")}
${qa("Specialist", "When should coma patients be imaged (Edlow 2014)?", "In post-traumatic coma or when a structural lesion is probable or possible; others should be reassessed regularly.")}
${qa("Specialist", "Why may naloxone need repeating?", "Its effect is shorter than that of many opioids, so sedation can return.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §7.1 Coma (table 7.1 Glasgow coma scale).</li>
<li id="ref-2">Edlow JA, Rabinstein AA, Traub SJ, Wijdicks EFM. Diagnosis of reversible causes of coma. Lancet 2014;384:2064–2076. <a href="https://doi.org/10.1016/S0140-6736(13)62184-4" target="_blank" rel="noopener">doi:10.1016/S0140-6736(13)62184-4</a></li>
<li id="ref-3">This guide, Hypoglycaemia — adults (Bhutan STG 2024 and ADA/JBDS doses).</li>
<li id="ref-4">This guide, Thiamine deficiency — adults; Bhutan STG 2024 (thiamine 100 mg IV stat).</li>
<li id="ref-5">US Food and Drug Administration prescribing information for naloxone, as summarised in this guide's drug monograph.</li>
<li id="ref-6">Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol 2014;13:844–854. <a href="https://doi.org/10.1016/S1474-4422(14)70120-6" target="_blank" rel="noopener">doi:10.1016/S1474-4422(14)70120-6</a></li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG definition, causes and GCS", "<span class='pass'>Checked</span>", "Read from STG §7.1"],
["Dextrose doses", "<span class='pass'>Checked</span>", "Hypoglycaemia page (STG + international)"],
["Thiamine dose", "<span class='pass'>Checked</span>", "STG via thiamine page and monograph"],
["Naloxone dose", "<span class='pass'>Checked</span>", "FDA label; small-dose titration is expert practice"],
["Imaging approach", "<span class='pass'>Checked</span>", "Edlow 2014 abstract"],
["GCS bands 9–12 / 13–14 and AVPU equivalence", "<span class='unv'>Expert opinion</span>", "Common practice, labelled"],
["Images", "—", "No suitable licensed image; section hidden"]
], "qc")}` }
]
});
})();
