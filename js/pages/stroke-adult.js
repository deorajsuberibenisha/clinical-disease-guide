/* Stroke and TIA — adults */
registerPage({
id: "stroke-adult",
title: "Stroke & TIA — Adults",
subtitle: "Recognising stroke, the time-critical first hour, thrombolysis, haemorrhage, TIA, atrial fibrillation and preventing the next stroke",
age: "Adults", specs: ["neuro", "medicine", "emerg", "rehab"],
keywords: ["stroke", "CVA", "cerebrovascular accident", "brain attack", "ischaemic stroke", "ischemic stroke", "intracerebral haemorrhage", "ICH", "haemorrhagic stroke", "subarachnoid haemorrhage", "TIA", "transient ischaemic attack", "FAST", "BE-FAST", "thrombolysis", "tenecteplase", "alteplase", "thrombectomy", "NIHSS", "ABCD2", "CHA2DS2-VASc", "HAS-BLED", "atrial fibrillation", "apixaban", "warfarin", "aspirin", "clopidogrel", "dual antiplatelet", "carotid stenosis", "dysphagia", "rehabilitation", "hemiplegia", "aphasia"],
related: ["htn-adult", "acs-adult", "dm-adult", "stroke-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In a major stroke, about two million brain cells die every minute. Recognise it, note the time it started, check the glucose, get a CT, and if it is ischaemic and early, open the artery. Then protect the patient from the complications and from the next stroke.</p>
<div class="glance">
<div><h4>Recognise (BE-FAST)</h4><p>Sudden <b>B</b>alance loss, <b>E</b>ye/vision loss, <b>F</b>ace droop, <b>A</b>rm weakness, <b>S</b>peech difficulty → <b>T</b>ime: note when last seen normal and act.</p></div>
<div><h4>First minutes</h4><p>ABC, GCS, pupils, <b>glucose</b> (treat if under 50 mg/dL), head up 30°, IV saline, O₂ only if SpO₂ ≤94%, nil by mouth until swallow screened.</p></div>
<div><h4>CT first</h4><p>No CT, no antithrombotic. CT separates infarct from haemorrhage; nothing else can.</p></div>
<div><h4>Ischaemic, under 4.5 h</h4><p>${dr("tenecteplase")} 0.25 mg/kg (max 25 mg) single bolus, or ${dr("alteplase")} 0.9 mg/kg, if no contraindication. BP under 185/110 first.</p></div>
<div><h4>Haemorrhage</h4><p>Lower SBP to 140–160 smoothly (avoid under 110), reverse anticoagulants, neurosurgical opinion.</p></div>
<div><h4>TIA / minor stroke</h4><p>${dr("aspirin_acs", "Aspirin")} + ${dr("clopidogrel")} for 21 days, then one antiplatelet; specialist review within 24 h.</p></div>
<div><h4>Prevent the next one</h4><p>BP under 130/80, ${dr("atorvastatin_hi", "high-intensity statin")}, antiplatelet (or ${dr("apixaban")} if AF), stop smoking and alcohol, control diabetes.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The <b>Stroke Management Protocol v2.0 (10 May 2023)</b>: at a primary centre, suspect stroke, <b>note the time of onset and call the nearest centre with CT</b>; check GCS and pupils, raise the head 30°, start IV normal saline, give O₂ if SpO₂ ≤94%, give 25% dextrose if RBS is under 50 mg/dL, treat BP only if over 220/110, keep nil by mouth; <b>refer urgently if under 4.5 hours</b>. NEML 2025 added <b>tenecteplase</b> (to DH) for stroke as well as MI; alteplase is at NRH/RRH. Cerebrovascular deaths rose slightly in the Annual Health Bulletin 2024.${r(1, 2, 3, 19)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What stroke is, its types, and who gets it", html: `
<h3>Definitions</h3>
<ul>
<li><b>Stroke:</b> a sudden focal (sometimes global) neurological deficit of vascular cause, lasting more than 24 hours or causing death, or with imaging evidence of infarction or haemorrhage.</li>
<li><b>Transient ischaemic attack (TIA):</b> a brief episode of focal deficit from ischaemia <b>without</b> infarction on imaging. Most last minutes. The old '24-hour' rule (still in the STG) is being replaced by this tissue-based definition.${r(2, 4)}</li></ul>
${tbl(["Type", "Share (global; higher haemorrhage share in Asia)", "Main causes"], [
["<b>Ischaemic stroke</b>", "About 65–80%", "Large-artery atherosclerosis (carotid, intracranial), <b>cardioembolism (atrial fibrillation</b>, rheumatic valve disease, recent MI), small-vessel (lacunar) disease from hypertension and diabetes; less often dissection, vasculitis, hypercoagulable states"],
["<b>Intracerebral haemorrhage (ICH)</b>", "About 15–30% (more common in South and East Asia)", "<b>Hypertension</b> (deep: basal ganglia, thalamus, pons, cerebellum), amyloid angiopathy (lobar, elderly), anticoagulants, AVM, <b>heavy alcohol use</b>, liver disease"],
["<b>Subarachnoid haemorrhage</b>", "About 5%", "Ruptured aneurysm: sudden 'worst ever' headache"],
["<b>Cerebral venous thrombosis</b>", "Under 1%", "Pregnancy and postpartum, oral contraceptives, dehydration, infection; headache, seizures, papilloedema"]])}
<h3>Who gets it</h3>
<ul>
<li>Stroke is among the leading causes of death and disability in Bhutan and South Asia, where it strikes at younger ages than in the West.</li>
<li><b>Hypertension</b> is by far the biggest modifiable risk factor (about half of all strokes), then smoking, diabetes, atrial fibrillation, high LDL, alcohol, inactivity, obesity and poor diet. Rheumatic heart disease remains a cause in younger patients.</li></ul>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("From blocked or burst vessel to brain injury", [
F.b([
["Ischaemic (most)", F.s("Clot from the heart (AF), carotid plaque, or small-vessel occlusion"), F.s("Blood flow to a brain territory stops")],
["Haemorrhagic", F.s("Hypertensive small artery, amyloid, AVM or anticoagulant bleed"), F.s("Blood under pressure tears into brain tissue")]]), F.a,
F.b([
["Ischaemic", F.e("<b>Core</b>: cells die within minutes"), F.s("<b>Penumbra</b>: stunned but salvageable for hours"), F.ok("<b>Thrombolysis / thrombectomy</b> rescue the penumbra: time is brain")],
["Haemorrhagic", F.e("Haematoma grows in the first hours"), F.s("Mass effect, raised intracranial pressure, oedema"), F.ok("<b>BP lowering, reversal of anticoagulation, surgery</b> limit growth")]]), F.a,
F.d("Secondary injury over hours to days"), F.a,
F.b([["Oedema", F.e("Swelling → herniation (malignant MCA infarct, large ICH)")], ["Systemic", F.e("Fever, high glucose, hypoxia, aspiration pneumonia worsen outcome")], ["Recurrence", F.e("High early risk after TIA/minor stroke → urgent antiplatelets")]])])}
<h3>Why the details matter at the bedside</h3>
<ul>
<li><b>The penumbra is the target.</b> Every 15 minutes faster to thrombolysis improves the chance of independent recovery. In a large meta-analysis, benefit fell steadily with delay and was lost after about 4.5 hours.${r(15, 16)}</li>
<li><b>Only imaging separates clot from bleed</b>: clinical features overlap completely. Giving aspirin or a thrombolytic to a haemorrhage worsens it.</li>
<li><b>Fever, hyperglycaemia, hypoxia and low BP</b> all enlarge the infarct; correcting them is part of acute treatment.</li></ul>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan (Protocol v2.0 / STG 2024)", "AHA/ASA 2026", "ESO 2021/2023", "This guide follows"], [
["Oxygen", "If SpO₂ ≤94% (protocol); <92% (STG)", "Keep SpO₂ >94%; no routine O₂", "No routine O₂ if not hypoxic", "Give if SpO₂ ≤94%"],
["BP before treatment", "Treat only if >220/110", "<185/110 before thrombolysis; if not lysed, lower only if ≥220/120 (by ~15% in 24 h)", "Similar", "Bhutan + 185/110 rule for lysis"],
["BP after thrombolysis", "Not stated", "<180/105 for 24 h; avoid intensive <140", "<180/105", "<180/105"],
["Thrombolytic", "Refer under 4.5 h (tenecteplase added to NEML 2025)", "<b>Tenecteplase 0.25 mg/kg (max 25 mg) or alteplase 0.9 mg/kg</b>, equally recommended", "Tenecteplase 0.25 mg/kg as alternative to alteplase (2023)", "Tenecteplase where available (single bolus, reaches DH)"],
["Tenecteplase dose", "NEMF: 0.25 mg/kg, max 25 mg", "0.25 mg/kg; 0.4 mg/kg not recommended", "0.25 mg/kg", "<b>0.25 mg/kg, max 25 mg</b>: never the MI weight bands"],
["ICH BP target", "Not stated", "Target SBP 140 (avoid <130), smooth", "SBP <140 within 2 h (INTERACT3 care bundle)", "SBP 140–160 smoothly, avoid <110–130"],
["Minor stroke / high-risk TIA", "Aspirin (PEN: 300 mg then 75–150)", "DAPT (aspirin + clopidogrel) 21 days", "DAPT 21 days", "DAPT for 21 days, then single"],
["AF anticoagulation score", "Not stated", "CHA₂DS₂-VASc", "ESC 2024: CHA₂DS₂-VA (sex removed)", "CHA₂DS₂-VA; DOAC preferred"]])}
<p class="qn">Sources: Bhutan protocol, STG, AHA/ASA 2026, ESO 2021/2023, AHA/ASA 2022 ICH, ESC 2024 AF.${r(1, 2, 4, 5, 6, 7, 9, 14)}</p>
${box("bt", "Bhutan adaptation: getting to CT in time", `<p>CT is available at JDWNRH, the regional referral hospitals and some district hospitals. The protocol's key action is to <b>phone ahead</b> so that CT and the thrombolysis team are ready on arrival. Where CT is not available, <b>do not give aspirin or thrombolytics blind</b>; stabilise and transfer. Tenecteplase's single bolus makes treatment at a CT-equipped district hospital practical, followed by transfer if needed. ${LB.loc()}</p>`)}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>The hallmark is <b>sudden onset</b> of a focal deficit that fits a vascular territory. A gradual onset over days suggests another cause (tumour, subdural, infection).</p>
${tbl(["Territory", "Typical features"], [
["Middle cerebral artery (MCA)", "Contralateral face and arm weaker than leg, sensory loss, homonymous hemianopia; aphasia (dominant, usually left) or neglect (non-dominant); gaze deviation towards the lesion"],
["Anterior cerebral artery", "Contralateral leg weaker than arm; abulia, incontinence"],
["Posterior circulation (vertebrobasilar)", "Vertigo with other signs, double vision, dysarthria, dysphagia, ataxia, crossed signs (face one side, body the other), hemianopia, reduced consciousness"],
["Lacunar (small vessel)", "Pure motor or pure sensory stroke, ataxic hemiparesis; no cortical signs (no aphasia, neglect or field loss)"],
["Intracerebral haemorrhage", "Like ischaemic stroke but more often with headache, vomiting, very high BP, rapidly falling consciousness"],
["Subarachnoid haemorrhage", "Thunderclap 'worst ever' headache, neck stiffness, vomiting, collapse"]])}
<h3>Bedside score</h3>
<div class="calc" data-calc="nihss"></div>
${box("red", "Red flags: call the CT centre now", `<ul><li>Onset within the last 4.5 hours (or 24 hours with a severe deficit: possible large-vessel occlusion).</li><li>Falling GCS, unequal pupils, vomiting (haemorrhage, herniation).</li><li>Thunderclap headache (SAH).</li><li>Patient on anticoagulants.</li><li>Seizure, or glucose abnormality (treat, then reassess).</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis: stroke mimics", html: `
${tbl(["Mimic", "Clues", "Test"], [
["<b>Hypoglycaemia</b>", "Diabetic on insulin/sulfonylurea; sweating; any focal deficit possible", "<b>Bedside glucose in every suspected stroke</b>"],
["Post-seizure (Todd's) paresis", "Witnessed seizure, tongue bite, known epilepsy; resolves in hours", "History; EEG"],
["Migraine with aura", "Spreading positive symptoms (tingling, zigzags), headache, previous episodes", "History"],
["Subdural haematoma", "Falls, alcohol, anticoagulants; gradual, fluctuating", "CT"],
["Brain tumour or abscess", "Gradual onset, headache, fever (abscess)", "CT/MRI"],
["Hepatic encephalopathy / Wernicke's", "Drinker, confusion, ataxia, eye signs", "LFT; thiamine first"],
["Bell's palsy", "Forehead involved (lower motor neurone); no limb signs", "Examination"],
["Sepsis or metabolic encephalopathy in the elderly", "Old deficit unmasked by infection, hyponatraemia", "Bloods, urine, CXR"],
["Functional neurological disorder", "Inconsistent signs (Hoover's sign)", "Diagnosis after excluding stroke"]])}
<h3>A typical case</h3>
<p>A 64-year-old woman from Punakha with untreated hypertension and an irregular pulse suddenly cannot speak and her right arm is weak; her family saw her normal 70 minutes ago. Glucose is 6.1 mmol/L, BP 196/104, NIHSS 12. The likely cause is a <b>left MCA stroke from atrial fibrillation</b>. Phone the CT centre and transfer at once. If CT excludes haemorrhage, lower BP below 185/110 with labetalol and give <b>tenecteplase 0.25 mg/kg</b>; then start anticoagulation for AF once it is safe.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "When", "Why"], [
["<b>Bedside glucose</b>", "Immediately", "Hypoglycaemia mimics stroke; hyperglycaemia worsens outcome"],
["<b>Non-contrast CT brain</b>", "As soon as possible (door-to-CT target 20–25 min)", "Excludes haemorrhage; early ischaemic changes; dense artery sign"],
["CT angiography (where available)", "Suspected large-vessel occlusion (NIHSS ≥6, cortical signs)", "Selects thrombectomy"],
["ECG ± cardiac monitoring", "All", "Atrial fibrillation (paroxysmal AF may need 24–72 h monitoring)"],
["FBC, creatinine, electrolytes, INR/aPTT", "All (do not delay thrombolysis for results unless on anticoagulants or bleeding disorder suspected)", "Platelets, coagulation, kidney"],
["Lipids, HbA1c", "Within 24–48 h", "Secondary prevention"],
["Carotid Doppler ultrasound", "Anterior-circulation ischaemic stroke or TIA", "Symptomatic stenosis 50–99%: endarterectomy within 2 weeks"],
["Echocardiography", "Suspected cardioembolism, young patient, murmur", "Valve disease, LV thrombus, PFO, endocarditis"],
["MRI with diffusion", "Uncertain diagnosis, TIA, posterior circulation", "Most sensitive for small infarcts"],
["Young patients (under 50)", "No obvious cause", "Vasculitis screen, thrombophilia, HIV/syphilis, dissection imaging, echo with bubble study"]])}
` },

{ id: "staging", title: "Severity and risk scores", html: `
<p>NIHSS measures severity (see Presentation). ABCD² estimates short-term risk after a TIA. CHA₂DS₂-VA estimates stroke risk in atrial fibrillation, and HAS-BLED flags bleeding risks to correct.${r(4, 9, 20)}</p>
<div class="calc" data-calc="abcd2"></div>
<div class="calc" data-calc="chadsvasc"></div>
<div class="calc" data-calc="hasbled"></div>
<h3>Admit and refer urgently</h3>
<ul><li>All acute strokes, to a unit able to do CT and swallow screening and to provide stroke-unit-style care (organised stroke-unit care itself reduces death and dependency).</li><li>TIA within the last week, crescendo TIAs, or TIA in a patient with AF: same-day assessment.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. The first hour (all suspected strokes)</h3>
${F.chart("Acute stroke: the first hour", [
F.s("Sudden focal deficit: note time last seen normal; phone the CT centre"), F.a,
F.s("ABC · GCS, pupils · glucose (treat if <50 mg/dL) · IV saline · O₂ if SpO₂ ≤94% · head up 30° · nil by mouth"), F.a,
F.s("<b>CT brain</b>"), F.a,
F.d("Haemorrhage?"), F.a,
F.b([["Yes", F.e("<b>ICH pathway</b>: SBP 140–160 smoothly; reverse anticoagulants; neurosurgery opinion")], ["No", F.d("Onset <4.5 h, disabling, no contraindication?"), F.b([["Yes", F.ok("BP <185/110 → <b>tenecteplase 0.25 mg/kg</b> (max 25 mg) or alteplase; consider thrombectomy")], ["No", F.s("Aspirin 300 mg (after swallow screen or by NG/rectum) · DAPT if minor stroke")]])]])])}
<p class="qn">From the Bhutan protocol and AHA/ASA 2026.${r(1, 4)}</p>

<h3>B. Thrombolysis</h3>
<ul>
<li><b>Who:</b> ischaemic stroke with a disabling deficit, onset or last-known-well <b>within 4.5 hours</b>, CT without haemorrhage or extensive early infarction, no contraindication (see the ${dr("alteplase", "alteplase card")}).</li>
<li><b>Drug:</b> ${dr("tenecteplase")} <b>0.25 mg/kg IV bolus over 5 seconds, maximum 25 mg</b> (AcT, ESO 2023, AHA/ASA 2026), or ${dr("alteplase")} 0.9 mg/kg (max 90 mg; 10% bolus, 90% over 60 min).${r(6, 11)}</li>
<li><b>BP:</b> under 185/110 before, under 180/105 for 24 hours after (${dr("labetalol")} 10–20 mg IV, repeat once; then infusion).</li>
<li><b>Monitor</b> neurological status and BP closely; no antiplatelets or anticoagulants for 24 hours; repeat CT before starting them.</li>
<li><b>Large-vessel occlusion:</b> mechanical thrombectomy within 6 hours (up to 24 hours with imaging selection) greatly improves outcomes (HERMES). It is not yet routinely available in Bhutan; discuss suitable patients with JDWNRH.${r(17)} <span class="lbl l-draft">NOT VERIFIED</span></li></ul>
${box("red", "Never use the MI weight table for tenecteplase in stroke", `<p>Stroke: <b>0.25 mg/kg, maximum 25 mg</b> (60 kg → 15 mg). MI: 30–50 mg by weight band. Giving the MI dose to a stroke patient doubles the dose and the bleeding risk.</p>`)}

<h3>C. Ischaemic stroke not thrombolysed</h3>
<ul>
<li>${dr("aspirin_acs", "Aspirin")} <b>300 mg</b> as soon as haemorrhage is excluded (orally after a swallow screen, or by NG tube or 300 mg rectally), then 75–150 mg daily; within 24–48 hours.</li>
<li><b>Minor stroke (NIHSS ≤3) or high-risk TIA (ABCD² ≥4):</b> aspirin + ${dr("clopidogrel")} (300–600 mg load, then 75 mg) for <b>21 days</b>, then a single antiplatelet (CHANCE, POINT).${r(12, 13)}</li>
<li>BP: lower only if over 220/120 (Bhutan: over 220/110), by about 15% in the first 24 hours; restart usual antihypertensives once stable (usually after 24–72 h).</li></ul>

<h3>D. Intracerebral haemorrhage</h3>
<ul>
<li><b>BP:</b> if SBP is 150–220, lower to about <b>140 (range 130–150)</b> smoothly with IV labetalol, avoiding drops below 130 and large swings (INTERACT3 bundle; AHA/ASA 2022).${r(7, 14)}</li>
<li><b>Reverse anticoagulants:</b> warfarin → vitamin K 10 mg IV + prothrombin complex concentrate (or FFP); dabigatran → idarucizumab; factor Xa inhibitors → andexanet or PCC (availability limited); heparin → protamine.</li>
<li>Glucose 6–10 mmol/L, treat fever, early seizure treatment (not prophylaxis), VTE prevention with compression stockings/intermittent pneumatic compression, then LMWH after 24–48 h if the bleed is stable.</li>
<li><b>Neurosurgery opinion:</b> cerebellar haemorrhage over 3 cm or with brainstem compression or hydrocephalus; large lobar bleeds with deterioration.</li>
<li>${dr("mannitol")} only as a temporary bridge for herniation.</li></ul>

<h3>E. General stroke-unit care (the details that save lives)</h3>
${tbl(["Issue", "What to do"], [
["Swallowing", "Swallow screen before any food, drink or oral tablet; NG feeding if unsafe; prevents aspiration pneumonia"],
["Position and early mobilisation", "Head up 30° if raised ICP risk; sit out and mobilise gently within 24–48 h when stable"],
["Glucose", "Keep 7.8–10 mmol/L (140–180 mg/dL); avoid hypoglycaemia"],
["Temperature", "Treat fever over 37.5°C with paracetamol; look for infection"],
["VTE prevention", "Intermittent pneumatic compression (not graduated stockings); LMWH in immobile ischaemic stroke after 24–48 h if bleeding risk is low"],
["Bladder and bowel", "Avoid routine catheters; prevent constipation"],
["Pressure areas", "Turn 2-hourly; air mattress if available"],
["Mood", "Screen for depression (Bhutan protocol) and treat"],
["Rehabilitation", "Physiotherapy, occupational and speech therapy from the first days; family training for home care"]])}

<h3>F. Secondary prevention (start before discharge)</h3>
${tbl(["Target", "Treatment"], [
["Antiplatelet (non-cardioembolic)", "Aspirin 75–150 mg or clopidogrel 75 mg daily, lifelong (after any 21-day DAPT)"],
["Atrial fibrillation", dr("apixaban") + " 5 mg BD (2.5 mg BD if 2 of: ≥80 y, ≤60 kg, Cr ≥1.5 mg/dL) or another DOAC; warfarin (INR 2–3) if mechanical valve or rheumatic mitral stenosis. Timing after stroke: earlier start is safe (ELAN). No aspirin added routinely"],
["BP", "Target under 130/80; thiazide + ACEi/ARB has the best evidence"],
["Lipids", "Atorvastatin 40–80 mg; LDL under 70 mg/dL (1.8 mmol/L)"],
["Carotid stenosis 50–99% (symptomatic)", "Carotid endarterectomy within 2 weeks (refer)"],
["Diabetes, smoking, alcohol, weight, activity", "HbA1c target; complete cessation (brief intervention); regular activity"]])}
<p class="qn">Secondary prevention from AHA/ASA 2021 and ESC 2024 AF.${r(8, 9, 18)}</p>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Key cautions", "Bhutan (NEML 2025)"], [
[dr("tenecteplase", "Tenecteplase (stroke)"), "0.25 mg/kg IV bolus, max 25 mg", "Contraindications as alteplase; never MI dose", "50 mg vial (to DH)"],
[dr("alteplase", "Alteplase"), "0.9 mg/kg (max 90 mg): 10% bolus, 90% over 60 min", "Haemorrhage, BP >185/110", "50 mg (NRH/RRH)"],
[dr("aspirin_acs", "Aspirin"), "300 mg, then 75–150 mg daily", "Not until haemorrhage excluded; not within 24 h of lysis", "300 mg; 75 mg (to PHC)"],
[dr("clopidogrel", "Clopidogrel"), "300–600 mg load, then 75 mg (21 days with aspirin, or alone)", "Bleeding", "75 mg (to DH)"],
[dr("atorvastatin_hi", "Atorvastatin"), "40–80 mg daily", "Interactions", "10 mg (8 tablets = 80 mg)"],
[dr("apixaban", "Apixaban"), "5 mg BD (2.5 mg BD if criteria)", "Not for mechanical valves/mitral stenosis", "2.5 mg (NRH/RRH)"],
[dr("warfarin", "Warfarin"), "INR-guided (target 2–3)", "Many interactions", "1/3/5 mg (NRH/RRH)"],
[dr("labetalol", "Labetalol IV"), "10–20 mg IV, repeat; infusion 2–8 mg/min", "Bradycardia, asthma", "Injection (to DH)"],
[dr("mannitol", "Mannitol 20%"), "0.25–1 g/kg IV over 20–30 min", "Bridge only; osmolality ≤320", "350 mL (NRH/RRH)"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Young adults (under 50)</h3>
<ul><li>Look for dissection (neck pain, recent neck trauma), cardioembolism (rheumatic heart disease, PFO, endocarditis), vasculitis, drugs, thrombophilia, cerebral venous thrombosis, and HIV or syphilis.</li></ul>
<h3>Pregnancy and postpartum</h3>
<ul><li>Higher risk of stroke, especially <b>cerebral venous thrombosis</b>, pre-eclampsia/eclampsia-related haemorrhage and PRES. Thrombolysis can be considered for disabling ischaemic stroke after specialist discussion; LMWH for CVT.</li></ul>
<h3>Elderly</h3>
<ul><li>No upper age limit for thrombolysis. Anticoagulation for AF is usually worthwhile even in the very old and those who fall.</li></ul>
<h3>Atrial fibrillation in Bhutan</h3>
<ul><li>Rheumatic mitral stenosis with AF needs warfarin (not DOACs). Apixaban is listed only as 2.5 mg tablets, so a full dose is two tablets twice daily.</li></ul>
<h3>Children</h3>
<p>Childhood stroke has different causes and management; see the ${'<a href="#/d/stroke-child">children\'s stroke page</a>'}.</p>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Woke up with weakness (unknown onset)</b>", "Time of onset = time last seen normal (often bedtime); usually outside 4.5 h unless MRI-based selection is available. Aspirin after CT"],
["<b>Deficit resolving rapidly on arrival</b>", "Still image and assess; if mild but disabling (aphasia, hemianopia), thrombolysis remains appropriate; if fully resolved = TIA → DAPT and urgent work-up"],
["<b>Seizure at onset</b>", "Thrombolysis is reasonable if the deficit is thought to be due to stroke and CT supports it"],
["<b>On apixaban with acute stroke</b>", "Thrombolysis usually avoided if a dose was taken within 48 h; consider thrombectomy"],
["<b>Drowsy, vomiting, BP 230/130, cerebellar haemorrhage 4 cm</b>", "Airway, lower BP, urgent neurosurgical referral (decompression can be life-saving)"],
["<b>Malignant MCA infarction in a patient under 60, deteriorating at day 2</b>", "Decompressive hemicraniectomy within 48 h reduces death (refer to neurosurgery); mannitol as a bridge"],
["<b>Sudden worst headache, normal neurology, normal CT at 8 hours</b>", "Possible SAH: lumbar puncture after 12 hours (xanthochromia) or CT angiography; refer"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "When", "Prevention / management"], [
["Cerebral oedema and herniation", "Days 2–5", "Monitor GCS; head up; hemicraniectomy; mannitol bridge"],
["Haemorrhagic transformation", "After lysis or large infarct", "BP control; CT if worsens"],
["Aspiration pneumonia", "First week", "Swallow screen; NG feeding; upright position"],
["DVT / PE", "First weeks", "Intermittent pneumatic compression; LMWH when safe; early mobilisation"],
["Seizures", "Early or late", "Treat if they occur (no routine prophylaxis)"],
["Urinary infection, pressure sores, falls", "Throughout", "Nursing care, avoid catheters, turning"],
["Post-stroke depression", "Weeks to months (about 1 in 3)", "Screen (Bhutan protocol) and treat"],
["Shoulder pain, spasticity, contractures", "Weeks to months", "Positioning, physiotherapy"],
["Recurrent stroke", "Highest risk in first days after TIA/minor stroke", "Urgent DAPT, BP, statin, AF anticoagulation"]])}
<h3>Prognosis</h3>
<ul><li>About a quarter of patients die within a year; of survivors, many are left dependent. Early thrombolysis, organised stroke care and rehabilitation all improve the odds.</li><li>Prognosis is worse with haemorrhage, low GCS, large infarcts, older age and dysphagia.</li></ul>
` },

{ id: "followup", title: "Follow-up, rehabilitation and prevention", html: `
${tbl(["When", "What"], [
["Before discharge", "Swallow, mobility, continence and mood assessed; secondary prevention started; family trained; follow-up booked"],
["1–2 weeks", "BP, adherence, tolerance of statin and antithrombotic; DAPT end date (day 21)"],
["Every 1–3 months (Bhutan protocol, primary level)", "Functional status and rehabilitation; refills of antihypertensives, antidiabetics, aspirin and atorvastatin; depression screen"],
["Yearly", "Lipids, HbA1c, creatinine (DOAC dose), risk factors"]])}
${box("green", "What to tell the patient and family", `<ul><li>'Take your blood thinner, statin and BP tablets every day for life; they prevent another stroke.'</li><li>'Stop smoking, doma and alcohol completely; use less salt.'</li><li>'Keep doing the exercises the therapist showed you; recovery continues for months.'</li><li>'Learn BE-FAST. If another stroke happens, note the time and come immediately; treatment works only in the first hours.'</li></ul>`)}
${box("red", "Come immediately if", `<ul><li>New weakness, numbness, face droop, speech or vision problems.</li><li>Sudden severe headache, vomiting or drowsiness.</li><li>Black stools or bleeding while on blood thinners.</li><li>Choking, cough or fever (possible aspiration).</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Ischaemic stroke: MCA territory infarct on CT", src: "images/stroke-mca-infarct.jpg", mod: "Non-contrast CT brain", ctx: "Established middle cerebral artery infarction", loc: "One cerebral hemisphere, MCA territory", find: "A wedge-shaped dark (hypodense) area involving grey and white matter in the MCA territory", signs: "Established infarct (usually visible from about 6–24 h)", interp: "Early CT is often normal in the first hours; its main job is to exclude haemorrhage. A large established infarct is a contraindication to thrombolysis and a risk for malignant swelling", ddx: "Tumour, abscess, old infarct", by: "Lucien Monfils", page: "https://commons.wikimedia.org/wiki/File:CT_Brain_MCA_Infarct.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Hyperdense MCA sign", src: "images/stroke-dense-mca.jpg", mod: "Non-contrast CT brain", ctx: "Hyperacute ischaemic stroke", loc: "Right middle cerebral artery", find: "The right MCA looks brighter (denser) than the left: fresh clot within the artery", signs: "Dense MCA sign", interp: "An early sign of a large-vessel occlusion before the infarct is visible; supports thrombolysis and urgent thrombectomy referral", ddx: "Calcified artery, high haematocrit (bilateral)", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Right_dense_MCA_sign_as_seen_on_CT_brain.jpg", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Intracerebral haemorrhage", src: "images/stroke-ich.jpg", mod: "Non-contrast CT brain", ctx: "Haemorrhagic stroke", loc: "Brain parenchyma with intraventricular extension", find: "A bright (hyperdense) blood collection within the brain, with blood in the ventricles", signs: "Intracerebral and intraventricular haemorrhage", interp: "Absolute contraindication to thrombolysis and antiplatelets. Lower BP smoothly, reverse anticoagulation, and seek neurosurgical advice (ventricular blood risks hydrocephalus)", ddx: "Haemorrhagic transformation of infarct, tumour bleed, contusion", by: "Glitzy queen00 (English Wikipedia)", page: "https://commons.wikimedia.org/wiki/File:Intracerebral_hemorrage_(CT_scan).jpg", lic: "Public domain" })}
${fig({ title: "Atrial fibrillation on ECG", src: "images/stroke-af-ecg.jpg", mod: "12-lead ECG", ctx: "Cardioembolic stroke risk", loc: "All leads (best seen in II and V1)", find: "Irregularly irregular rhythm with no P waves and a wavy baseline", signs: "Atrial fibrillation with controlled ventricular rate", interp: "The commonest cause of cardioembolic stroke. Calculate CHA₂DS₂-VA and anticoagulate (DOAC preferred) unless contraindicated", ddx: "Atrial flutter with variable block, multifocal atrial tachycardia, frequent ectopics", by: "Ewingdo", page: "https://commons.wikimedia.org/wiki/File:ECG_Atrial_Fibrillation_90_bpm.jpg", lic: "CC BY-SA 4.0" })}
</div>
${fig({ title: "Act FAST (public education graphic)", src: "images/stroke-fast.svg", mod: "Schematic infographic", ctx: "Recognising stroke", loc: "—", find: "Face drooping, Arm weakness, Speech difficulty, Time to call for help", signs: "FAST mnemonic", interp: "Teach patients and families FAST, and add Balance and Eyes (BE-FAST) to catch posterior strokes", ddx: "—", by: "US Centers for Disease Control and Prevention", page: "https://commons.wikimedia.org/wiki/File:Act_FAST.svg", lic: "Public domain" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · TIA", [
F.s("Transient focal deficit, now resolved"), F.a,
F.s("Aspirin 300 mg now (if no bleeding risk) · ECG · glucose"), F.a,
F.d("High risk? (ABCD² ≥4, AF, crescendo, carotid territory)"), F.a,
F.b([["Yes", F.e("DAPT 21 days; specialist review within 24 h; carotid Doppler; echo/monitoring")], ["No", F.ok("Specialist review within 24 h (NICE/ESO); secondary prevention")]])])}
${F.chart("2 · Intracerebral haemorrhage", [
F.s("CT: haemorrhage"), F.a,
F.s("SBP to ~140 (130–150) smoothly · reverse anticoagulants"), F.a,
F.d("Cerebellar >3 cm, hydrocephalus, or deteriorating lobar bleed?"), F.a,
F.b([["Yes", F.e("Urgent neurosurgery")], ["No", F.ok("Stroke-unit care; glucose, fever, swallow, VTE (IPC)")]])])}
${F.chart("3 · AF found after stroke", [
F.s("AF on ECG or monitoring"), F.a,
F.d("Mechanical valve or moderate–severe mitral stenosis?"), F.a,
F.b([["Yes", F.s("Warfarin, INR 2–3 (2.5–3.5 mitral mechanical)")], ["No", F.ok("DOAC (apixaban) when infarct size allows (minor ~48 h; moderate d3–5; severe d6–14)")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Glucose before anything else.</b> Hypoglycaemia is the commonest treatable mimic.</li>
<li><b>Time last seen normal</b>, not time found, is the onset time.</li>
<li><b>Phone ahead</b>: the minutes saved on arrival are brain saved.</li>
<li><b>Swallow screen before the first sip</b>, even for tablets.</li>
<li><b>TIA is a warning, not a relief</b>: the highest risk of stroke is in the next 48 hours.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Aspirin before CT", "Worsens an unrecognised haemorrhage", "CT first"],
["MI dose of tenecteplase for stroke", "Doubles bleeding risk", "0.25 mg/kg, max 25 mg"],
["Aggressively lowering BP in ischaemic stroke", "Penumbra dies", "Lower only if >220/120 (unless lysing)"],
["Feeding before swallow screen", "Aspiration pneumonia", "Screen first; NG if unsafe"],
["Aspirin instead of anticoagulation for AF", "Little stroke protection", "DOAC or warfarin"],
["Under-dosing apixaban without criteria", "More strokes", "5 mg BD unless 2 criteria met"],
["Missing hypoglycaemia or Wernicke's in drinkers", "Treatable cause missed", "Glucose; thiamine"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "What does BE-FAST stand for?", "Balance loss, Eye/vision loss, Face drooping, Arm weakness, Speech difficulty, Time to act.")}
${qa("Intern/MO", "List the first actions at a primary centre in Bhutan for suspected stroke.", "Note time of onset; call the nearest CT centre; check GCS and pupils; head up 30°; IV normal saline; O₂ if SpO₂ ≤94%; 25% dextrose if RBS under 50 mg/dL; treat BP only if over 220/110; nil by mouth; urgent referral if under 4.5 hours.")}
${qa("Intern/MO", "What is the tenecteplase dose for a 70 kg patient with ischaemic stroke?", "0.25 mg/kg = 17.5 mg as a single IV bolus (maximum 25 mg). Not the MI weight-band dose.")}
${qa("Intern/MO", "BP thresholds around thrombolysis?", "Below 185/110 before treatment, and below 180/105 for 24 hours afterwards.")}
${qa("Intern/MO", "When is dual antiplatelet therapy used after stroke?", "Minor ischaemic stroke (NIHSS ≤3) or high-risk TIA (ABCD² ≥4): aspirin plus clopidogrel for 21 days, started within 24 hours, then a single antiplatelet.")}
${qa("Specialist", "How do you choose anticoagulation for AF after stroke in Bhutan?", "DOAC (apixaban 5 mg BD, or 2.5 mg BD if 2 of: age ≥80, weight ≤60 kg, creatinine ≥1.5 mg/dL) unless there is a mechanical valve or moderate–severe rheumatic mitral stenosis, when warfarin (INR 2–3) is used. Start earlier for smaller infarcts after a scan excludes haemorrhagic transformation.")}
${qa("Viva", "Explain the concept of the ischaemic penumbra and why it matters.", "Around the irreversibly damaged core is tissue with reduced flow that is electrically silent but alive. It dies progressively over hours unless reperfused, so earlier thrombolysis or thrombectomy saves more brain.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Stroke Management Protocol, v2.0 (10 May 2023). Adapted from the Angels Initiative and the Department of Medicine, JDWNRH. (Local PDF.)</li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §7.6 Stroke.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and NEML 2025.</li>
<li id="ref-4">Prabhakaran S, Gonzalez NR, Zachrison KS, et al. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA). Stroke 2026. <a href="https://doi.org/10.1161/STR.0000000000000513" target="_blank" rel="noopener">doi:10.1161/STR.0000000000000513</a></li>
<li id="ref-5">Berge E, Whiteley W, Audebert H, et al. European Stroke Organisation guidelines on intravenous thrombolysis for acute ischaemic stroke. Eur Stroke J 2021;6:I–LXII. <a href="https://doi.org/10.1177/2396987321989865" target="_blank" rel="noopener">doi:10.1177/2396987321989865</a></li>
<li id="ref-6">Alamowitch S, Turc G, Palaiodimou L, et al. ESO expedited recommendation on tenecteplase for acute ischaemic stroke. Eur Stroke J 2023;8:8–54. <a href="https://doi.org/10.1177/23969873221150022" target="_blank" rel="noopener">doi:10.1177/23969873221150022</a></li>
<li id="ref-7">Greenberg SM, Ziai WC, Cordonnier C, et al. 2022 Guideline for the management of patients with spontaneous intracerebral hemorrhage (AHA/ASA). Stroke 2022;53:e282–e361. <a href="https://doi.org/10.1161/STR.0000000000000407" target="_blank" rel="noopener">doi:10.1161/STR.0000000000000407</a></li>
<li id="ref-8">Kleindorfer DO, Towfighi A, Chaturvedi S, et al. 2021 Guideline for the prevention of stroke in patients with stroke and TIA (AHA/ASA). Stroke 2021;52:e364–e467. <a href="https://doi.org/10.1161/STR.0000000000000375" target="_blank" rel="noopener">doi:10.1161/STR.0000000000000375</a></li>
<li id="ref-9">Van Gelder IC, Rienstra M, Bunting KV, et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J 2024;45:3314–3414. <a href="https://doi.org/10.1093/eurheartj/ehae176" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehae176</a></li>
<li id="ref-10">Indian Council of Medical Research. Standard Treatment Workflows: Neurology (stroke). <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-11">Menon BK, Buck BH, Singh N, et al. Intravenous tenecteplase compared with alteplase for acute ischaemic stroke in Canada (AcT). Lancet 2022;400:161–169. <a href="https://doi.org/10.1016/S0140-6736(22)01054-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(22)01054-6</a></li>
<li id="ref-12">Wang Y, Wang Y, Zhao X, et al. Clopidogrel with aspirin in acute minor stroke or transient ischemic attack (CHANCE). N Engl J Med 2013;369:11–19. <a href="https://doi.org/10.1056/NEJMoa1215340" target="_blank" rel="noopener">doi:10.1056/NEJMoa1215340</a></li>
<li id="ref-13">Johnston SC, Easton JD, Farrant M, et al. Clopidogrel and aspirin in acute ischemic stroke and high-risk TIA (POINT). N Engl J Med 2018;379:215–225. <a href="https://doi.org/10.1056/NEJMoa1800410" target="_blank" rel="noopener">doi:10.1056/NEJMoa1800410</a></li>
<li id="ref-14">Ma L, Hu X, Song L, et al. The third Intensive Care Bundle with Blood Pressure Reduction in Acute Cerebral Haemorrhage Trial (INTERACT3). Lancet 2023;402:27–40. <a href="https://doi.org/10.1016/S0140-6736(23)00806-1" target="_blank" rel="noopener">doi:10.1016/S0140-6736(23)00806-1</a></li>
<li id="ref-15">Emberson J, Lees KR, Lyden P, et al. Effect of treatment delay, age, and stroke severity on the effects of intravenous thrombolysis with alteplase. Lancet 2014;384:1929–1935. <a href="https://doi.org/10.1016/S0140-6736(14)60584-5" target="_blank" rel="noopener">doi:10.1016/S0140-6736(14)60584-5</a></li>
<li id="ref-16">Saver JL. Time is brain—quantified. Stroke 2006;37:263–266. <a href="https://doi.org/10.1161/01.STR.0000196957.55928.ab" target="_blank" rel="noopener">doi:10.1161/01.STR.0000196957.55928.ab</a></li>
<li id="ref-17">Goyal M, Menon BK, van Zwam WH, et al. Endovascular thrombectomy after large-vessel ischaemic stroke: a meta-analysis (HERMES). Lancet 2016;387:1723–1731. <a href="https://doi.org/10.1016/S0140-6736(16)00163-X" target="_blank" rel="noopener">doi:10.1016/S0140-6736(16)00163-X</a></li>
<li id="ref-18">Fischer U, Koga M, Strbian D, et al. Early versus later anticoagulation for stroke with atrial fibrillation (ELAN). N Engl J Med 2023;388:2411–2421. <a href="https://doi.org/10.1056/NEJMoa2303048" target="_blank" rel="noopener">doi:10.1056/NEJMoa2303048</a></li>
<li id="ref-19">The Bhutanese. TB and alcohol-related liver diseases remain top health concerns in Annual Health Bulletin 2024 (notes a slight rise in cerebrovascular deaths). <a href="https://thebhutanese.bt/tb-and-alcohol-related-liver-diseases-remain-top-health-concerns-in-annual-health-bulletin-2024/" target="_blank" rel="noopener">thebhutanese.bt</a></li>
<li id="ref-20">Johnston SC, Rothwell PM, Nguyen-Huynh MN, et al. Validation and refinement of scores to predict very early stroke risk after transient ischaemic attack (ABCD²). Lancet 2007;369:283–292. <a href="https://doi.org/10.1016/S0140-6736(07)60150-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(07)60150-0</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan Stroke Protocol v2.0", "<span class='pass'>Verified</span>", "Read directly from the PDF"],
["Bhutan STG §7.6", "<span class='pass'>Partly read</span>", "Text layer damaged after the first management lines (figure); protocol used"],
["Thrombolysis (tenecteplase/alteplase) doses and criteria", "<span class='pass'>Verified</span>", "AHA/ASA 2026; ESO 2021/2023; NEMF"],
["ICH management", "<span class='pass'>Verified</span>", "AHA/ASA 2022; INTERACT3"],
["DAPT, AF anticoagulation, secondary prevention", "<span class='pass'>Verified</span>", "CHANCE, POINT, ELAN; AHA/ASA 2021; ESC 2024"],
["NIHSS, ABCD², CHA₂DS₂-VA(Sc), HAS-BLED calculators", "<span class='pass'>Checked</span>", "From the original scales"],
["Thrombectomy availability in Bhutan", "<span class='warn'>Not verified</span>", "Flagged in text"],
["Images", "<span class='pass'>Done</span>", "Five Commons files; licences checked"]], "qc")}
` }
]
});
