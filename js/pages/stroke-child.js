/* Stroke — children and neonates */
registerPage({
id: "stroke-child",
title: "Stroke — Children & Neonates",
subtitle: "Recognising stroke in a child, the different causes, emergency care, and why time still matters",
age: "Children & neonates", specs: ["paeds", "neuro", "picu", "nicu"],
keywords: ["paediatric stroke", "pediatric stroke", "childhood stroke", "arterial ischaemic stroke", "neonatal stroke", "perinatal stroke", "cerebral venous sinus thrombosis", "CVST", "moyamoya", "focal cerebral arteriopathy", "transient cerebral arteriopathy", "sickle cell", "congenital heart disease", "hemiplegia child", "PedNIHSS"],
related: ["stroke-adult", "hf-child", "htn-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children do have strokes, and they are usually diagnosed late because nobody expects them. A child with sudden weakness, speech loss or a new focal seizure needs urgent brain imaging, just like an adult.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Sudden hemiparesis, facial weakness, speech or vision loss, ataxia, or a focal seizure with persisting weakness. Neonates: focal seizures, often on day 1–3.</p></div>
<div><h4>First steps</h4><p>ABC, <b>glucose</b>, treat seizures, normal temperature and oxygen, maintain hydration; note time last seen well.</p></div>
<div><h4>Image urgently</h4><p>MRI with diffusion and angiography is best; CT if MRI is not quickly available, to exclude haemorrhage.</p></div>
<div><h4>Causes differ</h4><p>Arteriopathy (often after chickenpox), heart disease, infection, sickle cell, dissection, prothrombotic states; venous thrombosis in dehydration or infection.</p></div>
<div><h4>Treatment</h4><p>Aspirin 3–5 mg/kg for most arterial strokes after haemorrhage is excluded; anticoagulation for venous thrombosis and many cardiac causes; thrombolysis only in specialist centres.</p></div>
<div><h4>Refer</h4><p>Every child with suspected stroke to a paediatric centre with imaging (JDWNRH).</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG 2024 and the Stroke Management Protocol v2.0 are written for adults; there is no paediatric stroke guidance. This page follows the AHA/ASA 2026 guideline (its first detailed paediatric recommendations), the AHA 2019 paediatric stroke statement and the RCPCH 2017 childhood stroke guideline.${r(1, 2, 3, 4)} <span class="lbl l-draft">EVIDENCE GAP</span></p>`)}
` },

{ id: "overview", title: "What childhood stroke is, and how common", html: `
<ul>
<li><b>Arterial ischaemic stroke (AIS)</b> affects about 1–2 per 100,000 children a year; <b>perinatal stroke</b> (28 weeks' gestation to 28 days of life) about 1 in 2,500–4,000 live births. Haemorrhagic stroke is about as common as ischaemic stroke in children.</li>
<li>Childhood stroke is among the top causes of death in children and a major cause of lifelong disability (hemiplegia, epilepsy, learning difficulties).</li>
<li>No Bhutanese data were found. <span class="lbl l-draft">EVIDENCE GAP</span></li></ul>
${tbl(["Type", "Typical causes"], [
["Arterial ischaemic stroke", "<b>Focal cerebral arteriopathy</b> (often within a year of chickenpox), <b>congenital or acquired heart disease</b> (including rheumatic, endocarditis, cardiac surgery), <b>arterial dissection</b> (neck trauma), moyamoya, sickle cell disease, meningitis (including TB), vasculitis, prothrombotic disorders"],
["Cerebral sinovenous thrombosis (CSVT)", "Dehydration (diarrhoea), infection (mastoiditis, meningitis), nephrotic syndrome, iron-deficiency anaemia, prothrombotic states, L-asparaginase"],
["Haemorrhagic stroke", "Arteriovenous malformation, cavernoma, aneurysm, bleeding disorders (haemophilia, ITP, vitamin K deficiency), trauma"],
["Perinatal/neonatal stroke", "Placental emboli, maternal/neonatal infection, birth asphyxia, congenital heart disease, prothrombotic factors"]])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("How strokes happen in children", [
F.b([
["Vessel wall disease", F.s("Inflamed or narrowed artery (post-varicella arteriopathy, moyamoya, vasculitis) or dissection"), F.s("Local clot or flow failure")],
["Clot from elsewhere", F.s("Heart disease, endocarditis, cardiac surgery, paradoxical embolus"), F.s("Embolus blocks a brain artery")],
["Blood and veins", F.s("Dehydration, infection, prothrombotic states, sickle cell"), F.s("Venous sinus thrombosis or sickling")]]), F.a,
F.s("<b>Focal ischaemia</b> (or venous congestion → haemorrhagic infarction)"), F.a,
F.d("The young brain"), F.a,
F.b([["Plasticity", F.ok("Better motor recovery than adults in many children")], ["Vulnerability", F.e("Epilepsy, cognitive and behavioural problems, recurrence (especially arteriopathy)")]])])}
<p>Unlike adults, atherosclerosis plays almost no role. The causes are mostly <b>arteriopathy, heart disease and blood disorders</b>, so a cause is found in most children if looked for, and the recurrence risk depends heavily on the cause (highest with progressive arteriopathies such as moyamoya).${r(2)}</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan", "AHA/ASA 2026 / AHA 2019", "RCPCH 2017 (UK)", "This guide follows"], [
["Guidance", "None for children", "First detailed paediatric acute recommendations (2026)", "Comprehensive childhood stroke guideline", "AHA/ASA 2026 + RCPCH"],
["Thrombolysis", "—", "Alteplase may be considered within 4.5 h in children 28 days–18 years with disabling AIS", "Not routinely; consider in older children in specialist centres", "Only in specialist centres with paediatric neurology"],
["Thrombectomy", "—", "Reasonable in children ≥6 years with large-vessel occlusion (selected)", "Consider in selected cases", "Discuss with JDWNRH; referral abroad usually needed"],
["Aspirin", "—", "3–5 mg/kg/day for AIS once haemorrhage excluded", "5 mg/kg/day (max 300 mg) acutely, then 1 mg/kg/day", "3–5 mg/kg/day, then 1–5 mg/kg/day"],
["Sickle cell AIS", "—", "Exchange transfusion", "Exchange transfusion", "Exchange transfusion (specialist)"]])}
<p class="qn">Sources as listed.${r(1, 2, 3)}</p>
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Age", "Common presentation"], [
["Neonate", "Focal seizures (often clonic, one side) in the first days; lethargy, apnoea; or found later as early hand preference (before 1 year) in presumed perinatal stroke"],
["Infant", "Seizures, irritability, reduced movement of one side, early hand preference"],
["Older child", "Sudden hemiparesis, facial weakness, speech disturbance, visual loss, ataxia, headache, seizures; posterior strokes cause vomiting, vertigo and reduced consciousness"]])}
<p>Mimics are more common than strokes in children (migraine, Todd's paresis after seizures, Bell's palsy, encephalitis, hypoglycaemia, functional symptoms), but <b>a persisting focal deficit always needs urgent imaging</b>.${r(3)}</p>
${box("red", "Red flags", `<ul><li>Sudden focal weakness, speech or visual loss that persists.</li><li>Reduced consciousness, severe headache, vomiting.</li><li>Known heart disease or sickle cell with new neurology.</li><li>Seizures with fever and focal signs (CNS infection or venous thrombosis).</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Mimic", "Clues"], [
["Hemiplegic migraine", "Previous episodes, family history, headache, gradual spread"],
["Todd's paresis", "After a witnessed seizure; resolves within 24–48 h"],
["Encephalitis / meningitis / abscess", "Fever, altered behaviour, meningism"],
["Hypoglycaemia", "Glucose low"],
["Acute disseminated encephalomyelitis", "After infection; multifocal signs; MRI pattern"],
["Bell's palsy", "Isolated lower motor neurone facial weakness including the forehead"],
["Brain tumour", "Gradual onset, morning headache and vomiting"]])}
<h3>A typical case</h3>
<p>A 6-year-old girl suddenly cannot lift her right arm and her speech is slurred, eight months after chickenpox. Glucose is normal. MRI shows a left basal ganglia infarct with narrowing of the middle cerebral artery: <b>focal cerebral arteriopathy after varicella</b>. Treatment is aspirin after haemorrhage is excluded, specialist review, and rehabilitation.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["<b>Glucose</b>", "Immediately"],
["MRI brain with diffusion + MR angiography (or CT/CTA if MRI not quickly available)", "Confirms stroke, excludes haemorrhage, shows arteriopathy; MR venography for venous thrombosis"],
["FBC, film, coagulation, electrolytes, creatinine, CRP", "Anaemia, sickle cell, infection, bleeding disorder"],
["Echocardiography (with bubble study) and ECG", "Cardiac source"],
["Blood cultures, lumbar puncture when safe", "Infection, endocarditis, TB meningitis"],
["Iron studies, haemoglobin electrophoresis", "Iron deficiency, sickle cell"],
["Prothrombotic screen (specialist)", "Protein C/S, antithrombin, factor V Leiden, antiphospholipid antibodies, lipoprotein(a)"],
["Varicella history and serology", "Post-varicella arteriopathy"]])}
` },

{ id: "staging", title: "Severity", html: `
<p>The <b>Pediatric NIHSS (PedNIHSS)</b> adapts the adult scale for children aged 2–18 and is used in specialist centres to grade severity and guide acute treatment decisions. Consciousness, ability to protect the airway, seizures and signs of raised intracranial pressure decide the level of care (PICU if impaired).${r(1)}</p>
<ul><li>Admit every child with suspected stroke; PICU for reduced GCS, recurrent seizures, large infarcts or haemorrhage, or raised ICP.</li></ul>
` },

{ id: "manage", title: "Management", html: `
${F.chart("Suspected stroke in a child", [
F.s("Sudden focal deficit or focal seizure with persisting deficit"), F.a,
F.s("ABC · glucose · treat seizures · O₂ if SpO₂ <94% · normothermia · IV isotonic fluids · nil by mouth"), F.a,
F.s("Urgent imaging (MRI/MRA; CT if MRI delayed); contact paediatric neurology / JDWNRH"), F.a,
F.d("What does imaging show?"), F.a,
F.b([["Haemorrhage", F.e("Correct coagulation; neurosurgery; control BP and ICP")], ["Arterial ischaemic", F.ok("Aspirin 3–5 mg/kg/day; consider thrombolysis/thrombectomy only in specialist centres")], ["Venous thrombosis", F.s("Anticoagulation (LMWH) even with haemorrhagic infarction (specialist); rehydrate; treat infection")]])])}
<h3>Key points</h3>
<ul>
<li><b>Neuroprotection:</b> treat fever, keep glucose normal, maintain normal BP for age (avoid lowering it acutely), treat seizures promptly, give isotonic fluids, keep oxygen saturation above 94%.${r(1, 3)}</li>
<li><b>Antithrombotic:</b> ${dr("aspirin_acs", "aspirin")} <b>3–5 mg/kg/day</b> once haemorrhage is excluded (RCPCH: 5 mg/kg acutely, max 300 mg, then 1 mg/kg/day, usually for at least 2 years). Anticoagulation (${dr("enoxaparin")} by weight) for cervical dissection, CSVT and selected cardiac embolism, specialist-directed.</li>
<li><b>Sickle cell disease:</b> urgent exchange transfusion to HbS under 30%.</li>
<li><b>Thrombolysis</b> (${dr("alteplase")} 0.9 mg/kg) only within 4.5 hours, in a specialist paediatric centre, after expert review (AHA/ASA 2026).</li>
<li>Avoid aspirin in children with active varicella or influenza (Reye's syndrome risk); clopidogrel may be substituted (specialist). Give varicella and influenza vaccines where possible.</li>
<li>Early rehabilitation (physio, occupational and speech therapy) and school support.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("aspirin_acs", "Aspirin"), "3–5 mg/kg/day (max 300 mg acutely); maintenance 1–5 mg/kg/day", "Not with active varicella/influenza; after haemorrhage excluded"],
[dr("enoxaparin", "Enoxaparin"), "Under 2 months 1.5 mg/kg SC 12-hourly; 2 months and over 1 mg/kg SC 12-hourly (NEMF), anti-Xa guided", "CSVT, dissection, cardioembolic (specialist)"],
[dr("alteplase", "Alteplase"), "0.9 mg/kg (max 90 mg) within 4.5 h", "Specialist centres only"],
[dr("mannitol", "Mannitol"), "0.25–1 g/kg IV", "Raised ICP bridge"]])}
` },

{ id: "populations", title: "Special groups", html: `
<h3>Neonates</h3><ul><li>Treat seizures (phenobarbital); supportive care; antithrombotics are generally not given for arterial perinatal stroke except with cardiac embolism; anticoagulation may be considered for neonatal CSVT (specialist).</li></ul>
<h3>Congenital or rheumatic heart disease</h3><ul><li>Cardioembolism and endocarditis; anticoagulation decisions with cardiology.</li></ul>
<h3>TB meningitis</h3><ul><li>Infarcts of the basal ganglia are common in TB meningitis; see the children's TB chapter.</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["Toddler with diarrhoea, dehydration, seizures and drowsiness", "Think venous sinus thrombosis: rehydrate, image (MRV/CTV), specialist anticoagulation"],
["Teenager with neck pain after a sports injury, then hemiparesis", "Arterial dissection: imaging of neck vessels, antithrombotic treatment"],
["Child with repeated episodes of weakness on crying or blowing (hyperventilation)", "Moyamoya: MRA; avoid dehydration and hypotension; neurosurgical revascularisation"],
["Neonate with right-sided focal seizures on day 2", "Perinatal stroke: MRI; treat seizures; follow development"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<ul><li>About 10% of children die after stroke; more than half of survivors have lasting deficits (hemiparesis, epilepsy, cognitive and behavioural problems).</li><li>Recurrence is about 10–20%, highest with arteriopathy (especially moyamoya) and cardiac disease.</li><li>Children often recover motor function better than adults, but learning and behavioural difficulties may only appear at school age, so long-term follow-up is needed.</li></ul>
` },

{ id: "followup", title: "Follow-up and family advice", html: `
${tbl(["When", "What"], [
["Discharge", "Antithrombotic plan, rehabilitation, seizure plan, school liaison"],
["3–6 months", "Repeat vascular imaging if arteriopathy"],
["Yearly", "Development, school performance, epilepsy, mood"]])}
${box("green", "What to tell the family", `<ul><li>'Children do have strokes. If weakness, speech or vision problems happen suddenly again, come immediately.'</li><li>'Give the aspirin every day unless your child has chickenpox or flu; then ask the doctor.'</li><li>'Therapy exercises at home help the brain rewire; keep them going.'</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Moyamoya disease on MR angiography", src: "images/strokec-moyamoya.jpg", mod: "MR angiography (MIP reconstruction)", ctx: "11-year-old girl with moyamoya disease", loc: "Distal internal carotid arteries and circle of Willis", find: "Narrowing of the terminal internal carotid arteries with a fine network of collateral vessels (the 'puff of smoke')", signs: "Moyamoya vasculopathy", interp: "A progressive arteriopathy causing recurrent strokes and TIAs in children, often triggered by crying or hyperventilation. Needs neurosurgical revascularisation", ddx: "Focal cerebral arteriopathy, vasculitis, sickle cell vasculopathy", by: "MBq (Wikimedia Commons)", page: "https://commons.wikimedia.org/wiki/File:MRA_Moya-moya-disease.JPG", lic: "CC BY-SA 3.0" })}
${fig({ title: "Cerebral venous sinus thrombosis on MRI", src: "images/strokec-cvst.jpg", mod: "MRI, axial T1-weighted (highlighted)", ctx: "Cerebral sinovenous thrombosis", loc: "Dural venous sinus", find: "Abnormal bright signal filling the venous sinus, consistent with thrombus (highlighted)", signs: "Sinus thrombosis", interp: "Suspect in a dehydrated or infected child with headache, seizures or drowsiness. Anticoagulation is usually given even if there is haemorrhagic infarction (specialist)", ddx: "Slow flow artefact, arachnoid granulation", by: "Jaax (derivative of work by MBq)", page: "https://commons.wikimedia.org/wiki/File:SVT,_axial_T1w_MR_image_with_highlighting.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Neonatal focal seizures", [
F.s("Focal seizures in the first days"), F.a,
F.s("Glucose, calcium, sepsis screen, treat seizures"), F.a,
F.s("Cranial ultrasound, then MRI"), F.a,
F.ok("Perinatal stroke confirmed: supportive care, development follow-up")])}
` },

{ id: "pearls", title: "Pearls and common mistakes", html: `
<ul><li><b>Think stroke in children</b>; delays of more than 24 hours are common because it is not considered.</li><li><b>A persisting deficit after a seizure is not always Todd's paresis</b>; image if it lasts or is unusual.</li><li><b>Chickenpox in the past year</b> is a clue to arteriopathy.</li><li><b>Dehydration plus seizures</b> may be venous thrombosis.</li></ul>
${tbl(["Mistake", "Prevention"], [["Attributing weakness to migraine or Todd's without imaging", "Image persisting deficits"], ["Giving aspirin with active varicella", "Use an alternative (specialist)"], ["Using adult doses", "Weight-based dosing"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "Name three common causes of arterial ischaemic stroke in children.", "Focal cerebral arteriopathy (often post-varicella), congenital or acquired heart disease, and arterial dissection; also sickle cell disease, moyamoya, infection and prothrombotic states.")}
${qa("Intern/MO", "How does perinatal stroke usually present?", "Focal seizures in the first days of life, or later as early hand preference (before 1 year).")}
${qa("Intern/MO", "What aspirin dose is used after arterial ischaemic stroke in children?", "3–5 mg/kg/day once haemorrhage is excluded (RCPCH: 5 mg/kg acutely, max 300 mg, then 1 mg/kg/day).")}
${qa("Specialist", "When may thrombolysis be considered in a child?", "AHA/ASA 2026: alteplase within 4.5 hours in children aged 28 days to 18 years with disabling arterial ischaemic stroke, in specialist paediatric stroke centres.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Prabhakaran S, Gonzalez NR, Zachrison KS, et al. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA), including first paediatric recommendations. Stroke 2026. <a href="https://doi.org/10.1161/STR.0000000000000513" target="_blank" rel="noopener">doi:10.1161/STR.0000000000000513</a></li>
<li id="ref-2">Ferriero DM, Fullerton HJ, Bernard TJ, et al. Management of stroke in neonates and children: a scientific statement from the AHA/ASA. Stroke 2019;50:e51–e96. <a href="https://doi.org/10.1161/STR.0000000000000183" target="_blank" rel="noopener">doi:10.1161/STR.0000000000000183</a></li>
<li id="ref-3">Royal College of Paediatrics and Child Health. Stroke in childhood: clinical guideline for diagnosis, management and rehabilitation. London, 2017. <a href="https://www.rcpch.ac.uk/resources/stroke-in-childhood-clinical-guideline" target="_blank" rel="noopener">rcpch.ac.uk</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Stroke Management Protocol v2.0 (2023) and STG 2024 §7.6 (adult only).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan paediatric stroke guidance", "<span class='warn'>Evidence gap</span>", "None exists"],
["Acute management and aspirin dosing", "<span class='pass'>Checked</span>", "AHA/ASA 2026; AHA 2019; RCPCH 2017"],
["Images", "<span class='pass'>Done</span>", "Two Commons files; licences checked"]], "qc")}
` }
]
});
