/* Head injury — children */
registerPage({
id: "headinjury-child",
title: "Head Injury — Children",
subtitle: "Most childhood head bumps are minor: PECARN identifies who needs a CT, while every serious injury needs oxygen, blood pressure, glucose and early referral, and every infant needs a thought about abuse",
age: "Children & adolescents", specs: ["paeds", "nsurg", "emerg", "picu"],
keywords: ["head injury child", "paediatric head injury", "pediatric TBI", "PECARN", "concussion child", "abusive head trauma", "shaken baby", "skull fracture child", "paediatric GCS", "fall from height child"],
related: ["headinjury-adult", "epilepsy-child", "sepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children fall and bump their heads every day; very few need imaging. The job is to find the few with brain injury without exposing the many to CT radiation, and to recognise when an injury does not fit the story.</p>
<div class="glance">
<div><h4>PECARN</h4><p>High risk (altered mental state, skull fracture signs) → CT. Intermediate → observe or CT. Very low → no CT.</p></div>
<div><h4>Severe injury</h4><p>Airway, oxygen, BP for age, glucose, head up 30°, ${dr("hypertonic_saline", "3% saline")} for herniation, refer.</p></div>
<div><h4>Infants</h4><p>Bulging fontanelle, irritability, vomiting, poor feeding; think <b>abusive head trauma</b>.</p></div>
<div><h4>STG</h4><p>Oxygen, IV saline, stat antibiotic (open or basal fracture), refer immediately with an escort.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §12.1.4 (acute brain injury in children) asks for oxygen, IV normal saline, a stat antibiotic and immediate escorted referral. CT and neurosurgery are mainly at the national referral hospital, so PECARN helps decide who must travel and who can be observed safely. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes and injury patterns", html: `
<ul><li>Falls (from beds, stairs, trees, roofs), road traffic injuries, sports, and in infants, abuse.</li>
<li>Infants have a large head, thin skull and weak neck: skull fractures and subdural bleeds occur with less force.</li>
<li>Scalp haematomas in infants can hide a fracture; a large haematoma can even cause anaemia.</li></ul>
${tbl(["Injury", "Clue"], [["Concussion", "Brief confusion, headache, normal exam"], ["Skull fracture", "Boggy swelling (especially non-frontal in infants)"], ["Extradural haematoma", "Lucid interval, then decline"], ["Subdural haematoma (infants)", "Irritability, vomiting, seizures, retinal haemorrhages: suspect abuse"]])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Children's brains", [
F.s("Primary injury at impact"), F.a,
F.s("Swelling is more diffuse in children; open sutures in infants buy a little time"), F.a,
F.e("Hypoxia, hypotension, hypoglycaemia, seizures cause secondary injury"), F.a,
F.ok("Same goals as adults, with age-specific blood pressure and fluids")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "International (PECARN, NICE NG232)", "This guide"], [
["Imaging decision", "Refer", "PECARN or NICE child CT rules", "PECARN " + LB.loc()],
["Antibiotics", "Stat antibiotic", "Not routine; consider in open or basal fracture per local policy", "Give for open or basal fractures only"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li>ABCDE with spinal precautions; paediatric GCS (pre-verbal scale under about 2 years); pupils; fontanelle.</li>
<li>History: mechanism and height of fall, loss of consciousness, vomiting, behaviour change, seizure; does the story fit the child's development?</li>
<li>Look for other injuries, bruises in non-mobile infants, and retinal haemorrhages when abuse is suspected.</li></ul>
${box("red", "Danger signs", `<ul><li>GCS 14 or less, drowsy, irritable, not acting normally</li><li>Bulging fontanelle, unequal pupils, seizures</li><li>Repeated vomiting, severe headache</li><li>Injury that does not match the story</li></ul>`)}
<h3>The typical patient</h3>
<p>A 3-year-old boy from Paro fell 1 metre from a bed onto a wooden floor an hour ago, cried at once, vomited once, and is now playing normally with GCS 15 and a small frontal bruise. <b>This is a minor head injury at very low PECARN risk apart from one episode of vomiting</b> (an intermediate feature): observation for 4–6 hours rather than CT, with clear advice to the parents.</p>
` },

{ id: "ddx", title: "Other causes and associated problems", html: `
${tbl(["Consider", "Why"], [["Abusive head trauma", "Infants: unexplained or inconsistent injuries"], ["Seizure causing the fall", "History"], ["Hypoglycaemia", "Drowsy child"], ["Meningitis", "Fever, irritability"]])}
` },

{ id: "invest", title: "Investigations", html: `
<p>CT head by PECARN or NICE criteria; glucose; FBC and clotting if severe or bleeding; for suspected abuse, skeletal survey, eye examination and safeguarding referral. Skull X-ray does not replace CT.${r(2)}</p>
` },

{ id: "staging", title: "Tools: paediatric GCS and PECARN", html: `
<div class="calc" data-calc="gcs"></div>
<div class="calc" data-calc="pecarn"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Minor injury</h3>
<ul><li>PECARN very low risk: discharge with advice; intermediate: observe 4–6 hours (CT if symptoms persist or worsen).</li>
<li>${dr("paracetamol")} 15 mg/kg for pain.</li></ul>
<h3>B. Moderate or severe injury</h3>
<ol><li>Airway (intubation by a skilled person if GCS 8 or less), oxygen to SpO₂ 94–98%.</li>
<li>Avoid hypotension: 0.9% saline 10–20 mL/kg boluses; maintain BP for age.</li>
<li>Glucose 4–10 mmol/L; treat seizures (see epilepsy, children).</li>
<li>Head up 30°, neutral neck; avoid fever.</li>
<li>Herniation: ${dr("hypertonic_saline", "3% saline")} 3–5 mL/kg over 10–20 minutes, or ${dr("mannitol")} 0.5–1 g/kg; urgent neurosurgery.</li>
<li>${dr("tranexamic_acid")} 15 mg/kg (max 1 g) within 3 hours is used by many trauma services (evidence extrapolated from adults).</li>
<li>Open or basal skull fracture: antibiotic per STG (e.g. ceftriaxone); tetanus prophylaxis.</li>
<li>Refer immediately with an escort (STG).</li></ol>
<h3>C. Suspected abuse</h3>
<p>Admit, protect, document carefully, involve senior paediatrics and child protection services.</p>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("hypertonic_saline"), "3%: 3–5 mL/kg over 10–20 min", "Herniation"],
[dr("mannitol"), "0.5–1 g/kg over 15–20 min", "Avoid in hypotension"],
[dr("tranexamic_acid"), "15 mg/kg (max 1 g) within 3 h", "Extrapolated from adult data"],
[dr("paracetamol"), "15 mg/kg 6-hourly", "Analgesia"],
[dr("levetiracetam"), "20–40 mg/kg IV load", "Seizures"]])}
` },

{ id: "populations", title: "Infants and adolescents", html: `
<ul><li>Infants under 3 months: lower threshold for CT and admission; abuse screening.</li>
<li>Adolescents in sport: graded return to learning and play after concussion.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [["PECARN intermediate, CT far away", "Observe 4–6 hours locally; refer if worsening", "Avoid unnecessary long transfers"], ["Infant with skull fracture and a vague story", "Safeguarding assessment", "Abuse"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Most minor injuries recover fully; concussion symptoms usually settle in 2–4 weeks. Severe injury can leave epilepsy, learning, behavioural and motor problems: early rehabilitation and school support help.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "What to tell parents", `<ul><li>Watch your child for 24 hours; they can sleep, but check they wake normally.</li><li>Paracetamol for headache; rest from screens and sport, then return gradually.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Hard to wake, confused or unusually irritable</li><li>Vomits more than once, severe headache</li><li>Fits, weakness, unsteady walking, unequal pupils</li><li>Clear fluid from the nose or ears</li></ul>`)}
<p>Prevention: window guards, stair gates, no baby walkers, helmets, child car seats, never shake a baby (STG).</p>
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Extradural haematoma", src: "images/epidural-ct.jpg", mod: "CT head", ctx: "Head injury", loc: "Between skull and dura", find: "Lens-shaped bright collection with mass effect", signs: "Extradural haematoma", interp: "Emergency surgery", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:EpiduralHematoma.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with head injury", [
F.s("ABCDE, glucose, paediatric GCS, pupils, look for abuse"), F.a,
F.d("GCS ≤13 or focal signs?"), F.a,
F.b([["Yes", F.e("Stabilise, CT, refer to neurosurgery")], ["No (GCS 14–15)", F.s("PECARN")]]), F.a,
F.b([["High", F.s("CT")], ["Intermediate", F.s("Observe 4–6 h or CT")], ["Very low", F.ok("Home with advice")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>Ask whether the story fits the child's age and development.</li><li>Use PECARN to avoid unnecessary CTs.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [["CT for every bump", "Radiation (cancer risk)", "PECARN"], ["Missing abuse", "Repeat injury, death", "Safeguarding thinking"], ["Ignoring a non-frontal scalp haematoma in an infant", "Missed fracture", "Intermediate risk: observe or CT"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What makes a child high risk under PECARN?", "GCS 14 or other altered mental state, or a palpable skull fracture (under 2) / signs of basal skull fracture (2 or older).")}
${qa("Intern/MO", "Name features suggesting abusive head trauma.", "Inconsistent or changing story, delay in presentation, bruises in non-mobile infants, retinal haemorrhages, multiple injuries of different ages.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Kuppermann N, Holmes JF, Dayan PS et al. Identification of children at very low risk of clinically-important brain injuries after head trauma: a prospective cohort study (PECARN). <i>Lancet</i> 2009;374:1160–1170. <a href="https://doi.org/10.1016/S0140-6736(09)61558-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(09)61558-0</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Head injury: assessment and early management (NG232). 2023. <a href="https://www.nice.org.uk/guidance/ng232" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Kochanek PM, Tasker RC, Carney N et al. Guidelines for the management of pediatric severe traumatic brain injury, third edition. <i>Pediatr Crit Care Med</i> 2019;20(3S Suppl 1):S1–S82. <a href="https://doi.org/10.1097/PCC.0000000000001735" target="_blank" rel="noopener">doi:10.1097/PCC.0000000000001735</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.1.4 Acute brain injury.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [["PECARN criteria", "<span class='pass'>Checked</span>", "Kuppermann 2009"], ["Paediatric TXA", "<span class='flag'>Extrapolated</span>", "No paediatric RCT"]], "qc")}
` }
]
});
