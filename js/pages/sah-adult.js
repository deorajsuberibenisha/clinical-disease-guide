/* Subarachnoid haemorrhage — adults. NEW disease (batch N-3, 28 Nov 2026).
   Sources read directly: NICE NG228 Subarachnoid haemorrhage caused by a ruptured aneurysm (2022; recommendations read in browser 28 Nov 2026 —
   high suspicion with unexplained acute severe headache; thunderclap = peaks within 1–5 minutes (red flag); refer outside hospital to ED
   immediately; senior review; urgent non-contrast CT; pain relief incl. opioids (note pupillary/sedation effects); CT within 6 h reported by a
   radiologist negative → no routine LP; CT > 6 h negative → consider LP at least 12 h after onset, xanthochromia on spectrophotometry; urgent
   discussion with a neurosurgical centre; rebleeding risk highest within 24 h; CT angiography without delay; DSA/MRA if CTA negative; enteral
   nimodipine; IV nimodipine only in specialist settings; VTE prophylaxis per NG89; coiling, or clipping if coiling unsuitable, at the earliest
   opportunity; no TCD-guided management; CT first for deterioration; drainage for acute hydrocephalus; delayed cerebral ischaemia — euvolaemia,
   consider vasopressor; follow-up plan, rehabilitation, imaging; MDT for unruptured aneurysms);
   Perry JJ et al. JAMA 2013;310:1248–1255 (abstract read, DOI verified: Ottawa SAH Rule — age ≥ 40, neck pain/stiffness, witnessed loss of
   consciousness, onset during exertion, thunderclap (instantly peaking), limited neck flexion — 100% sensitivity, 15.3% specificity in alert
   adults with headache peaking within 1 hour and no neurological deficit);
   NEML 2025 (nimodipine 30 mg tablet; labetalol 5 mg/mL injection; phenytoin; levetiracetam). Nimodipine 60 mg 4-hourly × 21 days and WFNS grading are
   standard regimens/scales — marked. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "sah-adult",
title: "Subarachnoid Haemorrhage",
subtitle: "A sudden 'worst-ever' headache that peaks within minutes is a bleed until proved otherwise: urgent CT, CT angiography, neurosurgical referral, nimodipine, pain relief, and securing the aneurysm early because rebleeding is most likely in the first 24 hours",
age: "Adults", specs: ["neuro", "emerg", "surg"],
keywords: ["subarachnoid haemorrhage", "SAH", "thunderclap headache", "worst headache", "ruptured aneurysm", "berry aneurysm", "Ottawa SAH rule", "xanthochromia", "lumbar puncture headache", "CT angiography", "nimodipine", "coiling", "clipping", "vasospasm", "delayed cerebral ischaemia", "hydrocephalus", "WFNS grade"],
related: ["headache-adult", "stroke-adult", "meningitis-adult", "htn-adult", "headinjury-adult", "vte-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Aneurysmal subarachnoid haemorrhage (SAH) is bleeding around the brain, usually from a ruptured berry aneurysm. It is a neurosurgical emergency: <b>rebleeding is most likely in the first 24 hours</b> ${r(1)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Thunderclap headache — severe, peaking within 1–5 minutes; vomiting, neck stiffness, collapse, seizures, confusion ${r(1)}.</p></div>
<div><h4>Rule out</h4><p>Alert, no deficits: Ottawa SAH Rule — any positive item needs investigation ${r(2)}.</p></div>
<div><h4>Image</h4><p>Urgent non-contrast CT; negative CT within 6 h (radiologist-reported) usually ends the search; later → LP ≥ 12 h after onset ${r(1)}.</p></div>
<div><h4>Treat</h4><p>Pain relief, ${F_N("nimodipine").replace(">Nimodipine<", ">nimodipine<")}, CT angiography, urgent neurosurgical referral; coil or clip early ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>CT is available at JDWNRH and the regional referral hospitals; CT angiography, neurosurgery and endovascular coiling are limited — discuss with the JDWNRH neurosurgeon at once and plan transfer (including abroad) early ${LB.loc()}. NEML 2025 lists nimodipine 30 mg tablets and labetalol injection ${r(3)}. See ${P("headache-adult", "Headache")} for the wider headache approach.</p>`)}
` },

{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Cause", "Ruptured intracranial (berry) aneurysm in most non-traumatic SAH; trauma is the commonest cause of subarachnoid blood overall " + LB.exp("STANDARD TEACHING")],
["Risk factors", "High blood pressure, smoking, heavy alcohol, family history, polycystic kidney disease " + LB.exp("STANDARD TEACHING")],
["Course", "Rebleeding (highest in first 24 h), hydrocephalus, delayed cerebral ischaemia (vasospasm, days 4–14), seizures, hyponatraemia " + r(1) + " " + LB.exp("TIMING STANDARD")],
["Outcome", "High mortality; many survivors have cognitive and mood problems — rehabilitation needed " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Aneurysmal SAH", [F.s("Aneurysm ruptures → blood in subarachnoid space"), F.a, F.s("Sudden rise in intracranial pressure → headache, collapse"), F.a, F.e("Rebleeding, hydrocephalus, vasospasm and delayed ischaemia")])}` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG228", "Older practice", "This guide"], [
["LP after negative CT", "Not routinely if CT within 6 h and radiologist-reported; LP if CT later (≥ 12 h after onset)", "LP for all negative CTs", "NICE " + r(1)],
["Severity scores", "Do not use alone to decide transfer or treatment", "Grade decides referral", "Refer all confirmed SAH " + r(1)],
["Aneurysm repair", "Coiling first; clipping if coiling unsuitable; as early as possible", "Delayed surgery", "Early coiling where available " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Thunderclap headache</b>: sudden, severe, peaking within 1–5 minutes, often 'the worst ever' ${r(1)}.</li>
<li>Vomiting, neck pain or stiffness, photophobia, brief loss of consciousness, seizures, confusion, focal deficits ${r(1)} ${r(2)}.</li>
<li>Third-nerve palsy (posterior communicating aneurysm) ${LB.exp("STANDARD TEACHING")}.</li>
<li>A 'sentinel' smaller headache in the preceding weeks in some ${LB.exp("STANDARD TEACHING")}.</li>
</ul>
<h3>Ottawa SAH Rule (alert adults, headache peaking within 1 hour, no neurological deficit)</h3>
<p>Investigate if <b>any</b>: age 40 or over; neck pain or stiffness; witnessed loss of consciousness; onset during exertion; thunderclap (instantly peaking) onset; limited neck flexion on examination — 100% sensitive, 15% specific ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 48-year-old woman with untreated hypertension in Thimphu had a sudden explosive headache while lifting a sack, vomited and briefly fainted; GCS 15, neck stiff. <b>Suspected SAH</b>: analgesia including opioid, urgent CT (blood in the basal cisterns), CT angiography, nimodipine, call the neurosurgeon ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Migraine or exertional/coital headache", "Previous similar headaches; but a first thunderclap needs investigation " + r(1)],
["Meningitis", "Fever, gradual onset " + P("meningitis-adult", "Meningitis")],
["Intracerebral haemorrhage / stroke", "Focal deficit " + P("stroke-adult", "Stroke")],
["Hypertensive emergency / PRES", "Very high BP, visual symptoms " + P("htn-adult", "Hypertension")],
["Cerebral venous thrombosis, arterial dissection, RCVS", "Specialist imaging " + LB.exp("STANDARD")],
["Pituitary apoplexy", "Visual loss, eye-movement palsy"]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Urgent non-contrast CT head</b> — most sensitive early ${r(1)}.</li>
<li>CT within 6 h, reported by a radiologist, negative → no routine LP; think of other causes ${r(1)}.</li>
<li>CT after 6 h negative → consider <b>LP at least 12 h after onset</b>; xanthochromia on spectrophotometry confirms SAH ${r(1)}.</li>
<li>Confirmed SAH → <b>CT angiography</b> without delay; DSA or MRA if CTA is negative and aneurysm still suspected ${r(1)}.</li>
<li>Electrolytes (sodium), glucose, clotting, CBC, ECG, group and save ${LB.exp("STANDARD")}.</li>
</ul>
<h3>WFNS grade (severity, for communication — not for deciding referral alone)</h3>
${tbl(["Grade", "GCS", "Motor deficit"], [["I", "15", "Absent"], ["II", "13–14", "Absent"], ["III", "13–14", "Present"], ["IV", "7–12", "Present or absent"], ["V", "3–6", "Present or absent"]])}
<p class="small">${LB.exp("WFNS SCALE STANDARD")} NICE: do not use severity scores alone to decide transfer or treatment ${r(1)}.</p>
` },

{ id: "staging", title: "SAH helper", html: `<div class="calc" data-calc="sahcheck"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Immediately</h3>
<ul>
<li>ABC; reduced GCS → airway protection; treat seizures ${LB.exp("STANDARD")}.</li>
<li><b>Effective pain relief</b>, including opioids; record doses (they affect pupils and consciousness) ${r(1)}.</li>
<li>Antiemetic; bed rest; avoid straining (laxatives) ${LB.exp("STANDARD")}.</li>
<li>Blood pressure: lower very high BP cautiously (e.g. labetalol) until the aneurysm is secured — specialist target ${LB.exp("BP TARGET NOT IN NICE")}.</li>
<li><b>Urgent discussion and transfer to a neurosurgical centre</b>, for all confirmed SAH ${r(1)}.</li>
</ul>
<h3>Prevent complications</h3>
<ul>
<li><b>Nimodipine</b> by mouth or NG tube (IV only in specialist settings) — usual regimen 60 mg every 4 hours for 21 days (2 × 30 mg NEML tablets); reduce if BP falls ${r(1)} ${LB.exp("DOSE STANDARD")}.</li>
<li>Keep normal blood volume (euvolaemia); check sodium ${r(1)}.</li>
<li>VTE prevention (mechanical first; drugs per specialist after securing the aneurysm) ${r(1)}.</li>
<li>Delayed cerebral ischaemia: euvolaemia, consider vasopressor ${r(1)}.</li>
<li>Any deterioration: repeat non-contrast CT first (rebleed, hydrocephalus, ischaemia); acute hydrocephalus → CSF drainage ${r(1)}.</li>
</ul>
<h3>Secure the aneurysm</h3>
<p>Neuroradiologist and neurosurgeon decide together: <b>endovascular coiling</b>, or clipping if coiling is unsuitable — at the earliest opportunity ${r(1)}.</p>
<h3>After discharge</h3>
<p>Written follow-up plan, rehabilitation (cognition, mood, fatigue, return to work), follow-up imaging, BP control, stop smoking; MDT advice on any other unruptured aneurysms ${r(1)}.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "NEML 2025"], [
[F_N("nimodipine"), "60 mg orally/NG every 4 h for 21 days " + LB.exp("STANDARD REGIMEN") + "; NICE: enteral nimodipine " + r(1), "30 mg tablet " + r(3)],
[dr("morphine"), "Titrated for pain " + r(1), "Yes"],
["Labetalol", "IV for severe hypertension (specialist target) " + LB.exp("DOSE"), "5 mg/mL inj " + r(3)],
[dr("levetiracetam", "Levetiracetam") + " / phenytoin", "Seizures " + LB.exp("STANDARD"), "Listed " + r(3)]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Polycystic kidney disease or strong family history:</b> higher aneurysm risk — specialist screening ${LB.exp("STANDARD")}.</li><li><b>Pregnancy:</b> same urgency; CT is not withheld ${LB.exp("STANDARD")}.</li><li><b>Trauma:</b> traumatic subarachnoid blood is managed as head injury ${P("headinjury-adult", "Head injury")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Thunderclap headache at a BHU", "Analgesia, refer to the emergency department immediately " + r(1)],
["No CT angiography locally", "CT confirms SAH → urgent neurosurgical discussion and transfer " + r(1) + " " + LB.loc()],
["Sudden drop in GCS on day 2", "Repeat CT: rebleed or hydrocephalus — neurosurgeon " + r(1)],
["Confusion and drowsiness day 7", "Delayed cerebral ischaemia vs hyponatraemia vs hydrocephalus — CT, sodium, fluids " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Rebleeding, hydrocephalus, delayed cerebral ischaemia, seizures, hyponatraemia, cardiac arrhythmias and stress cardiomyopathy, VTE; long-term cognitive problems, fatigue, anxiety, depression ${r(1)} ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Follow-up plan given in writing ${r(1)}.</li><li>Rehabilitation; follow-up neuroimaging as advised ${r(1)}.</li><li>Lifelong BP control and no smoking.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. On non-contrast CT, fresh blood appears white in the basal cisterns and sulci.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Sudden severe headache", [F.d("Ottawa rule positive or thunderclap?"), F.a, F.b([["No", F.ok("Other headache causes")], ["Yes", F.s("Urgent non-contrast CT")]]), F.a, F.d("Blood?"), F.a, F.b([["Yes", F.e("CTA, nimodipine, neurosurgery, secure aneurysm early")], ["No, CT > 6 h", F.s("LP ≥ 12 h after onset — xanthochromia?")], ["No, CT < 6 h", F.ok("SAH excluded; other diagnoses")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Labelling a first thunderclap as migraine", "Missed SAH, fatal rebleed", "CT for thunderclap " + r(1)],
["LP too early", "False negative", "Wait 12 h after onset " + r(1)],
["Not recording opioid doses", "Pupils/consciousness misread", "Document " + r(1)],
["Delaying referral for grading", "Rebleed in first 24 h", "Refer all confirmed SAH " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is a thunderclap headache?", "Sudden severe headache peaking within 1–5 minutes.")}
${qa("Intern/MO", "Items of the Ottawa SAH Rule?", "Age ≥ 40, neck pain/stiffness, witnessed loss of consciousness, onset with exertion, instantly peaking pain, limited neck flexion.")}
${qa("Registrar", "CT done 3 hours after onset is negative (radiologist-reported) — LP?", "Not routinely (NICE); consider other diagnoses.")}
${qa("Specialist", "Preferred aneurysm treatment?", "Endovascular coiling; clipping if coiling unsuitable — as early as possible.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Subarachnoid haemorrhage caused by a ruptured aneurysm: diagnosis and management (NG228). London: NICE; 2022. <a href="https://www.nice.org.uk/guidance/ng228" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Perry JJ, Stiell IG, Sivilotti MLA, et al. Clinical decision rules to rule out subarachnoid hemorrhage for acute headache. JAMA 2013;310:1248–1255. <a href="https://doi.org/10.1001/jama.2013.278018" target="_blank" rel="noopener">doi:10.1001/jama.2013.278018</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG228", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Ottawa SAH Rule (Perry 2013)", "<span class='pass'>Abstract read</span>", "DOI verified"], ["Nimodipine regimen, WFNS, BP target", "<span class='unv'>Standard practice</span>", "Marked; not in NICE text"], ["Bhutan STG", "<span class='unv'>No section</span>", ""], ["Calculator", "<span class='pass'>New</span>", "sahcheck"]], "qc")}` }
]
});
function F_N(id) { return `<a href="#/fdb/${id}">${id.charAt(0).toUpperCase() + id.slice(1)}</a>`; }
})();
