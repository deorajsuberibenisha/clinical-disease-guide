/* Traumatic brain injury — adults */
registerPage({
id: "headinjury-adult",
title: "Head Injury — Adults",
subtitle: "Prevent the second injury: protect the airway and spine, avoid low oxygen and low blood pressure, grade with GCS, decide on CT by rule, and refer the right patients early",
age: "Adults", specs: ["nsurg", "emerg", "surg"],
keywords: ["head injury", "traumatic brain injury", "TBI", "concussion", "GCS", "Glasgow Coma Scale", "Canadian CT head rule", "extradural haematoma", "epidural haematoma", "subdural haematoma", "skull fracture", "basal skull fracture", "raised intracranial pressure", "mannitol", "hypertonic saline", "tranexamic acid CRASH-3", "road traffic accident"],
related: ["headinjury-child", "stroke-adult", "epilepsy-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">The brain damage of the injury cannot be undone; the damage that follows from low oxygen, low blood pressure and delayed surgery can be prevented. That is the whole purpose of early care.</p>
<div class="glance">
<div><h4>Severity (GCS)</h4><ul><li>Mild 13–15 (observe; CT by rule)</li><li>Moderate 9–12</li><li>Severe 8 or less</li></ul></div>
<div><h4>Targets</h4><p>SpO₂ 94–98%, systolic BP 100 or more (110 if 15–49 or over 70), head up 30°, normal CO₂, glucose 6–10 mmol/L.</p></div>
<div><h4>CT head</h4><p>Canadian CT Head Rule / NICE: GCS under 15 at 2 h, skull fracture signs, vomiting twice, seizure, focal deficit, age 65+, anticoagulants.</p></div>
<div><h4>Bleeding risk</h4><p>${dr("tranexamic_acid")} 1 g within 3 hours for GCS 9–15 or CT bleed (CRASH-3).</p></div>
<div><h4>Herniation signs</h4><p>Falling GCS, blown pupil, Cushing's response: ${dr("hypertonic_saline", "3% saline")} or ${dr("mannitol")}, urgent neurosurgery.</p></div>
<div><h4>Don't forget</h4><p>The cervical spine, alcohol is not the explanation for low GCS, and check glucose.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §1.5.1: ABCDE, record GCS and pupils, head up 30°, oxygen if SpO₂ under 90%, keep systolic BP over 100, analgesia, suture scalp bleeding; observe mild injury and refer moderate or severe injury for neuroimaging. CT and neurosurgery are at the national referral hospital (and limited regional capacity); mountain roads make early, well-prepared transfer essential. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes and injury types", html: `
${tbl(["Injury", "Features", "Urgency"], [
["Concussion (mild TBI)", "Brief confusion or loss of consciousness, headache, normal CT", "Observation, advice"],
["<b>Extradural (epidural) haematoma</b>", "Temporal fracture tearing the middle meningeal artery; lucid interval then rapid decline", "Emergency surgery"],
["<b>Acute subdural haematoma</b>", "Torn bridging veins; older adults, alcohol, anticoagulants; often severe", "Emergency"],
["Chronic subdural haematoma", "Weeks later in older adults: headache, confusion, weakness", "Urgent surgery"],
["Contusion, traumatic subarachnoid haemorrhage", "Brain bruising; may enlarge in the first 24–48 hours", "Neurosurgical advice"],
["Diffuse axonal injury", "Deep coma with little on CT", "ICU"],
["Skull fracture", "Depressed, open or basal (panda eyes, Battle's sign, CSF leak)", "Neurosurgical review"]])}
<p>Road traffic crashes, falls (including from heights and while intoxicated) and assaults are the main causes in Bhutan, as worldwide.</p>
` },

{ id: "patho", title: "Primary and secondary injury", html: `
${F.chart("Two injuries", [
F.s("Primary injury at the moment of impact (cannot be reversed)"), F.a,
F.s("Swelling and bleeding raise intracranial pressure inside a rigid skull"), F.a,
F.b([["Hypoxia, hypotension, hypercapnia, hypo/hyperglycaemia, fever, seizures", F.e("Secondary injury: brain cells die")], ["Expanding haematoma", F.e("Herniation: blown pupil, coma, death")]]), F.a,
F.ok("Oxygen, blood pressure, head position, CO₂ control and timely surgery prevent secondary injury")])}
<p>A single episode of systolic BP under 90 or SpO₂ under 90% roughly doubles mortality in severe brain injury.${r(3)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (NICE NG232, BTF 2016)", "This guide"], [
["Oxygen threshold", "Give oxygen if SpO₂ under 90%", "Keep SpO₂ 94–98% (avoid any hypoxia)", "Target 94–98% " + LB.loc()],
["Blood pressure", "Systolic over 100", "Over 100 (50–69 y) or over 110 (15–49, over 70)", "BTF targets"],
["CT decision", "If indicated; refer moderate/severe", "Rule-based (Canadian CT Head Rule, NICE)", "Use the rule; refer if CT is not available locally"],
["Tranexamic acid", "Not mentioned", "CRASH-3: 1 g within 3 hours for GCS 9–15 (or CT bleed); not after 3 hours", "Recommended within 3 hours"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>ABCDE with cervical spine protection.</b> Treat airway compromise, hypoxia and hypotension first; look for other injuries (hypotension is rarely from the head alone in adults).</li>
<li><b>GCS (with components) and pupils</b>, repeated every 30 minutes until GCS 15.</li>
<li>History: mechanism, loss of consciousness, amnesia, vomiting, seizure, headache, anticoagulants, alcohol.</li>
<li>Examine: scalp wounds, skull fracture signs, focal neurological deficit, CSF leak.</li></ul>
${box("red", "Danger signs", `<ul><li>GCS falling by 2 or more points; GCS 8 or less</li><li>Unequal or fixed dilated pupil</li><li>Cushing's response: high BP, slow pulse, irregular breathing</li><li>Seizures, new weakness, repeated vomiting, worsening headache</li></ul>`)}
<h3>The typical patient</h3>
<p>A 26-year-old motorcyclist without a helmet is brought from a crash near Wangdue. He was knocked out briefly, talked normally in the ambulance, and now, 2 hours later, is drowsy (GCS 11: E3 V3 M5) with a dilating right pupil and a boggy right temporal swelling. <b>This is likely an extradural haematoma</b>: temporal impact, lucid interval, then falling GCS with a pupil on the same side. He needs airway protection, oxygen, BP support, tranexamic acid, hypertonic saline or mannitol for herniation signs, and the fastest possible transfer for CT and surgery.</p>
` },

{ id: "ddx", title: "Other causes of reduced consciousness", html: `
${tbl(["Cause", "Clue", "Check"], [
["Hypoglycaemia", "Diabetes, alcohol", "Glucose in every patient"],
["Alcohol or drug intoxication", "Smell, history", "Never assume; scan if injured"],
["Stroke or subarachnoid haemorrhage causing the fall", "Headache before collapse, focal signs", "CT"],
["Seizure (post-ictal)", "Witnessed fit, tongue biting", "History"],
["Hypoxia or shock from other injuries", "Chest or abdominal trauma", "Primary survey"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Glucose", "Hypoglycaemia", "—", "Essential"],
["<b>CT head</b> (and cervical spine if indicated)", "Haematoma, fracture, swelling", "By rule; within 1 hour for high-risk features", "Essential when indicated"],
["FBC, clotting, group and save", "Bleeding, theatre", "INR if anticoagulated", "Essential if moderate or severe"],
["Electrolytes, blood gas", "Sodium, CO₂", "—", "Moderate or severe"],
["Blood alcohol", "Context only", "Never explains low GCS on its own", "Optional"],
["Skull X-ray", "Not recommended in place of CT", "—", "No"]])}
` },

{ id: "staging", title: "Tools: GCS and CT decision", html: `
<div class="calc" data-calc="gcs"></div>
<div class="calc" data-calc="cthead"></div>
<h3>Refer</h3>
<ul><li><b>Immediately</b> to a hospital with CT and neurosurgery: GCS 12 or less, any fall in GCS, focal signs, pupillary changes, seizure, depressed or open fracture, CT abnormality, or CT indicated but unavailable.</li><li>Before transfer: secure airway if GCS 8 or less, oxygen, IV access, BP support, cervical collar, analgesia, glucose check, written GCS chart.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Mild (GCS 13–15)</h3>
<ul><li>CT by rule; if not needed, observe (GCS and pupils every 30 minutes until 15, then hourly for 4 hours) and discharge with a responsible adult and written advice (STG: mild injury may be observed).</li>
<li>Analgesia: ${dr("paracetamol")}; avoid sedatives.</li></ul>
<h3>B. Moderate and severe</h3>
<ol><li><b>Airway:</b> intubate if GCS 8 or less, unable to protect airway, or deteriorating (by a skilled person, with spinal precautions).</li>
<li><b>Breathing:</b> SpO₂ 94–98%; PaCO₂ 4.5–5.0 kPa (35–38 mmHg); avoid hyperventilation except briefly for herniation.</li>
<li><b>Circulation:</b> systolic BP 100–110 or more with 0.9% saline (avoid hypotonic and glucose fluids); find and stop other bleeding.</li>
<li><b>Tranexamic acid</b> 1 g IV over 10 minutes, then 1 g over 8 hours, if within 3 hours of injury and GCS 9–15 or CT bleed (CRASH-3).${r(4)}</li>
<li><b>Head up 30°</b>, neck neutral, collar not too tight; treat fever, pain and agitation.</li>
<li><b>Raised ICP or herniation signs:</b> ${dr("hypertonic_saline", "3% saline")} 250 mL over 10–20 minutes, or ${dr("mannitol")} 0.5–1 g/kg over 15–20 minutes (avoid if hypotensive); urgent neurosurgery.</li>
<li><b>Seizures:</b> treat; in severe TBI, ${dr("levetiracetam")} or ${dr("phenytoin")} prophylaxis for 7 days reduces early seizures.</li>
<li><b>Do not give steroids</b> (CRASH trial: increased mortality).</li>
<li>Scalp wounds: control bleeding (sutures, STG); tetanus prophylaxis.</li></ol>
<h3>C. Anticoagulated patients</h3>
<p>CT within 8 hours even if well (NICE); reverse warfarin (vitamin K and prothrombin complex or FFP) or stop DOACs if bleeding.</p>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("tranexamic_acid"), "1 g IV over 10 min, then 1 g over 8 h", "Within 3 hours only"],
[dr("hypertonic_saline"), "3%: 250 mL (3–5 mL/kg) over 10–20 min", "Herniation; preferred if hypotensive"],
[dr("mannitol"), "20%: 0.5–1 g/kg over 15–20 min", "Avoid if hypotensive; catheter"],
[dr("levetiracetam"), "Load 20 mg/kg (max 3 g) IV, then 500–1000 mg twice daily × 7 days", "Severe TBI prophylaxis"],
[dr("phenytoin"), "Load 20 mg/kg IV (max 50 mg/min), then maintenance", "Alternative"],
[dr("paracetamol"), "1 g 6-hourly", "Analgesia, fever"],
[dr("vitamin_k"), "5–10 mg IV", "Warfarin reversal"]])}
` },

{ id: "populations", title: "Older adults and other groups", html: `
<ul><li><b>Over 65:</b> CT threshold lower (in the CT rule); subdural haematoma common; falls assessment.</li>
<li><b>Pregnancy:</b> same priorities; left lateral tilt; CT is justified when indicated.</li>
<li><b>Intoxicated:</b> treat as head-injured until proven otherwise; observe closely.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["No CT within hours", "Refer early with airway and BP secured; burr holes only by trained surgeons for herniation when transfer is impossible", "Delay to surgery kills"],
["Talks and then deteriorates", "Treat as extradural haematoma", "Lucid interval"],
["GCS low but drunk", "Scan; do not attribute to alcohol", "Missed haematoma"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Early: haematoma expansion, raised ICP, seizures, aspiration, hyponatraemia, DVT. Late: post-concussion symptoms (headache, poor concentration, mood change), post-traumatic epilepsy, cognitive and physical disability, chronic subdural haematoma. Rehabilitation improves outcomes.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "Head-injury advice at discharge", `<ul><li>A responsible adult should stay with the person for 24 hours.</li><li>Rest; avoid alcohol and sedatives; no driving or contact sport until symptom-free and cleared.</li><li>Paracetamol for headache.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Increasing drowsiness, confusion or difficulty waking</li><li>Worsening headache, repeated vomiting</li><li>Fits, weakness, numbness, trouble speaking or seeing</li><li>Clear fluid from the nose or ears</li></ul>`)}
<p>Prevention: helmets for motorcyclists and cyclists, seat belts, no drink-driving, fall prevention for older people.</p>
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Extradural (epidural) haematoma", src: "images/epidural-ct.jpg", mod: "CT head, non-contrast", ctx: "Head injury", loc: "Between skull and dura", find: "Bright, lens-shaped (biconvex) collection limited by skull sutures, with mass effect", signs: "Extradural haematoma", interp: "Neurosurgical emergency: evacuate before herniation", ddx: "Acute subdural (crescent-shaped, crosses sutures)", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:EpiduralHematoma.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult head injury", [
F.s("ABCDE + C-spine; glucose; GCS and pupils"), F.a,
F.b([["GCS 13–15", F.s("Canadian CT rule: CT if positive; else observe and discharge with advice")], ["GCS 9–12", F.s("TXA if <3 h; CT; refer")], ["GCS ≤8", F.e("Airway, O₂, BP ≥100–110, TXA, head up; refer for CT/neurosurgery")]]), F.a,
F.d("Herniation signs?"), F.a,
F.e("3% saline or mannitol; emergency neurosurgery")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Avoid hypoxia and hypotension</b> above all.</li><li>Record GCS components and pupils every time.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Blaming alcohol for low GCS", "Missed haematoma", "CT by rule"],
["Steroids for head injury", "Higher mortality", "Never"],
["Hypotonic or glucose fluids", "Brain swelling", "0.9% saline"],
["Transfer without airway control", "Aspiration, hypoxia en route", "Secure airway first"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What GCS defines severe head injury?", "8 or less.")}
${qa("Intern/MO", "What are the high-risk criteria of the Canadian CT Head Rule?", "GCS under 15 at 2 hours, suspected open or depressed fracture, signs of basal skull fracture, vomiting twice or more, age 65 or more.")}
${qa("Intern/MO", "When is tranexamic acid given in head injury?", "Within 3 hours, for GCS 9–15 or a bleed on CT (CRASH-3).")}
${qa("Specialist", "Why avoid steroids?", "The CRASH trial showed increased mortality.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Head injury: assessment and early management (NG232). 2023. <a href="https://www.nice.org.uk/guidance/ng232" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Stiell IG, Wells GA, Vandemheen K et al. The Canadian CT Head Rule for patients with minor head injury. <i>Lancet</i> 2001;357:1391–1396. <a href="https://doi.org/10.1016/S0140-6736(00)04561-X" target="_blank" rel="noopener">doi:10.1016/S0140-6736(00)04561-X</a></li>
<li id="ref-3">Carney N, Totten AM, O'Reilly C et al. Guidelines for the management of severe traumatic brain injury, fourth edition. <i>Neurosurgery</i> 2017;80:6–15. <a href="https://doi.org/10.1227/NEU.0000000000001432" target="_blank" rel="noopener">doi:10.1227/NEU.0000000000001432</a></li>
<li id="ref-4">CRASH-3 trial collaborators. Effects of tranexamic acid on death, disability, vascular occlusive events and other morbidities in patients with acute traumatic brain injury (CRASH-3). <i>Lancet</i> 2019;394:1713–1723. <a href="https://doi.org/10.1016/S0140-6736(19)32233-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(19)32233-0</a></li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.5.1 Head injury.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG", "<span class='pass'>Verified</span>", "§1.5.1 read directly"],
["CT rules and targets", "<span class='pass'>Checked</span>", "Canadian CT Head Rule, NICE NG232, BTF 4th ed."]], "qc")}
` }
]
});
