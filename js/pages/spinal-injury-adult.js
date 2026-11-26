/* Spine fractures and spinal cord injury — adults. Batch E-4, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §13.4 (definition; spinal, neurogenic and hypovolaemic shock table; ASIA impairment scale A–E;
   C-collar, spine board and log-roll technique; pain relief; referral) — parts of the PDF text are garbled; NEML 2025.
   NICE NG41 Spinal injury: assessment and initial management (2016) — full recommendations read (Canadian C-spine rule, immobilisation,
   no longboard transport, morphine first line, imaging, no methylprednisolone/nimodipine/naloxone).
   AO Spine guidelines (abstracts read): Fehlings 2017 (methylprednisolone); Kwon 2024 (haemodynamic targets). Stiell NEJM 2003 for the rule. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "spinal-injury-adult",
title: "Spinal injury — adults",
subtitle: "Protect the neck while you save the life, decide who really needs immobilising and imaging with the Canadian C-spine rule, keep the blood pressure up, and get cord injuries to a spinal surgeon fast",
age: "Adults", specs: ["ortho", "nsurg", "emerg", "surg"],
keywords: ["spinal injury", "spine fracture", "spinal cord injury", "cervical spine injury", "neck injury", "Canadian C-spine rule", "NEXUS", "cervical collar", "log roll", "spinal board", "neurogenic shock", "spinal shock", "ASIA impairment scale", "methylprednisolone spinal cord injury", "MAP target spinal cord"],
related: ["trauma-adult", "headinjury-adult", "fracture-adult", "lbp-adult", "neckpain-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Falls from trees, roofs and cliffs and road crashes on mountain roads make spinal injury a real risk in Bhutan. Most patients with neck pain after trauma do not have a fracture; the few who do must not be harmed by moving them carelessly.</p>
<div class="glance">
<div><h4>First</h4><p>&lt;C&gt;ABCDE with manual in-line stabilisation of the neck, especially during airway care ${r(2)}.</p></div>
<div><h4>Who to immobilise and image</h4><p>Canadian C-spine rule for the neck; risk factors for the thoracic and lumbar spine ${r(2, 5)}.</p></div>
<div><h4>Circulation</h4><p>Low BP with slow pulse = neurogenic shock — but rule out bleeding first; keep MAP at least 75–80 mmHg ${r(1, 4)}.</p></div>
<div><h4>Cord injury</h4><p>Morphine for pain; no routine methylprednisolone; urgent spinal surgical referral ${r(2, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG teaches the log roll, cervical collar and spine board for transfer, pain relief and referral ${r(1)}. NICE advises a scoop stretcher or vacuum mattress for transport and the longboard only for extrication ${r(2)}; where only a board is available, keep time on it short and pad pressure points ${LB.loc()}. Spinal surgery is done at JDWNRH.</p>`)}
` },
{ id: "overview", title: "The injury in brief", html: `${tbl(["Feature", "Detail"], [
["What it is", "Damage to the spinal column (bones, discs, ligaments) with or without injury to the spinal cord " + r(1)],
["Causes", "Falls (from height, trees, roofs), road traffic crashes, sports, diving into shallow water, assault " + r(1, 2)],
["High-risk mechanisms (neck)", "Fall from > 1 m or 5 steps, axial load (diving), high-speed or rollover crash, ejection, motorised recreational vehicle, bicycle collision, horse riding " + r(2)],
["High-risk mechanisms (back)", "Fall > 3 m, axial load (landing on feet or buttocks), high-speed or rollover crash, lap-belt-only restraint, ejection " + r(2)],
["Who is vulnerable", "Age ≥ 65, osteoporosis, steroid use, ankylosing spondylitis or previous spinal surgery " + r(2)]
])}` },
{ id: "patho", title: "Primary and secondary injury", html: `
${F.chart("Spinal cord injury", [F.s("Primary injury at impact: compression, contusion, transection"), F.a, F.d("Secondary injury over hours to days: swelling, ischaemia, low blood pressure, hypoxia"), F.a, F.e("Avoidable worsening — keep oxygen and blood pressure up, avoid further movement")])}
${tbl(["Feature", "Spinal shock", "Neurogenic shock", "Hypovolaemic shock"], [
["Blood pressure", "Low", "Low", "Low"],
["Pulse", "Slow", "Slow", "Fast"],
["Reflexes / tone", "Absent; flaccid paralysis", "Variable", "Variable"]
])}
<p>From the STG table ${r(1)}. Neurogenic shock follows loss of sympathetic tone in injuries above about T6 ${LB.exp()}; a trauma patient who is hypotensive must be assumed to be bleeding until proven otherwise.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE NG41 (2016)", "AO Spine", "This guide"], [
["Transport device", "Spine board", "Scoop stretcher / vacuum mattress; longboard only to extricate", "—", "Scoop or vacuum mattress if available; minimise board time " + LB.loc()],
["Methylprednisolone", "—", "Do not use (nor nimodipine or naloxone)", "2017: 24-h high-dose infusion may be offered within 8 h as an option; not after 8 h; not 48 h", "Not routinely; only a spinal surgeon's decision within 8 h " + LB.int()],
["Blood pressure target", "—", "—", "2024: MAP at least 75–80, not above 90–95 mmHg, for 3–7 days (weak, very-low-quality evidence)", "Follow AO Spine 2024"],
["Who to immobilise", "All suspected spinal injuries", "Use the Canadian C-spine rule and thoracolumbar factors; do not immobilise low-risk patients who can rotate the neck 45°", "—", "NICE " + LB.int()]
])}` },
{ id: "presentation", title: "Assessment", html: `
<ul>
<li>Ask about neck or back pain, numbness, tingling, weakness; check for distracting injuries, alcohol or drugs, confusion, reduced consciousness ${r(2)}.</li>
<li>Examine: midline tenderness or step, motor power in hands and feet, sensory level, perianal sensation and anal tone, priapism ${r(2)}.</li>
<li>Look for diaphragmatic breathing (high cervical injury) and hypotension with bradycardia ${r(1)}.</li>
</ul>
<h3>Canadian C-spine rule (alert, stable adults)</h3>
<div class="calc" data-calc="cspine"></div>
<p>High risk: age ≥ 65, dangerous mechanism, or limb paraesthesia → immobilise and image. Otherwise, if any low-risk factor is present (simple rear-end crash, sitting comfortably, walked since injury, no midline tenderness, delayed neck pain) and the patient can actively rotate the neck 45° left and right, no imaging or immobilisation is needed ${r(2, 5)}.</p>
<h3>The typical patient</h3>
<p>A 42-year-old man fell about 4 m from a tree while collecting fodder in Trashigang. He has neck pain and tingling in both hands; BP 84/50, pulse 54. <b>Treat as cervical cord injury with neurogenic shock</b> — after excluding bleeding: manual in-line stabilisation and collar, log roll, oxygen, fluids then a vasopressor to keep MAP at least 75–80 mmHg, morphine for pain, catheter, and urgent transfer on a scoop or vacuum mattress to JDWNRH ${r(1, 2, 4)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Hypovolaemic shock from other injuries", "Fast pulse, cold peripheries — treat bleeding first " + r(1)],
["Head injury causing weakness", "Asymmetric weakness, reduced GCS, cranial nerve signs"],
["Brachial plexus injury", "One arm only, shoulder trauma"],
["Spinal epidural haematoma or abscess", "No major trauma; anticoagulant use or fever"],
["Neck sprain (whiplash)", "Low-risk rule criteria, full rotation, no neurology"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Stabilise the spine before sending for imaging ${r(1)}.</li>
<li>Adults: CT if the Canadian C-spine rule indicates imaging, or strong suspicion of thoracic or lumbar injury with neurological signs ${r(2)}.</li>
<li>Thoracic or lumbar column injury without neurology: X-ray first, CT if abnormal or signs persist; image the whole spine once one fracture is found ${r(2)}.</li>
<li>MRI after CT for any neurological abnormality that could be from the cord ${r(2)}.</li>
<li>Where CT is not available: cervical X-rays (lateral including C7–T1, AP, open-mouth peg) while arranging transfer ${LB.loc()}.</li>
</ul>` },
{ id: "staging", title: "ASIA impairment scale", html: `
${tbl(["Grade", "Meaning"], [
["A — complete", "No motor or sensory function in the lowest sacral segments (S4–S5)"],
["B — sensory incomplete", "Sensation but no motor function below the level, including S4–S5"],
["C — motor incomplete", "Motor function below the level; most key muscles below the level are weaker than grade 3"],
["D — motor incomplete", "Motor function below the level; at least half the key muscles are grade 3 or more"],
["E — normal", "Normal motor and sensory function"]
])}
<p>The STG reproduces the ASIA scale ${r(1)}; the definitions here follow the international ISNCSCI standard ${LB.exp("STANDARD DEFINITIONS — NOT RE-READ")}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>At the scene and in the emergency room</h3>
<ol>
<li>&lt;C&gt;ABCDE: catastrophic bleeding, airway with in-line stabilisation, breathing, circulation, disability, exposure ${r(2)}.</li>
<li>Full in-line immobilisation when indicated: manual stabilisation → semi-rigid collar (not if it compromises the airway or in fixed deformity such as ankylosing spondylitis) → scoop stretcher → head blocks and tape, ideally a vacuum mattress ${r(2)}.</li>
<li>Log roll with enough people, one controlling the head ${r(1)}.</li>
<li>Agitated or uncooperative patients: let them find a comfortable position with manual stabilisation rather than fighting a collar ${r(2)}.</li>
</ol>
<h3>Circulation</h3>
<ul>
<li>Exclude and treat haemorrhage first ${LB.exp()}.</li>
<li>Neurogenic shock: fluids, then vasopressor (${D("norepinephrine", "noradrenaline")}) to keep MAP at least 75–80 mmHg, not actively above 90–95, for 3–7 days; ${D("atropine", "atropine")} for symptomatic bradycardia ${r(4)} ${LB.exp()}.</li>
</ul>
<h3>Pain and other care</h3>
<ul>
<li>IV ${D("morphine", "morphine")} first line, titrated; ${D("ketamine", "ketamine")} in analgesic doses second line ${r(2)}.</li>
<li>Urinary catheter, pressure-area care, stress-ulcer and DVT prevention once bleeding risk allows ${LB.exp()}.</li>
<li>Do not use methylprednisolone, nimodipine or naloxone for neuroprotection (NICE) ${r(2)}. AO Spine allows a 24-hour methylprednisolone infusion started within 8 hours as an option — this guide leaves it to the spinal surgeon ${r(3)}.</li>
<li>Contact the spinal surgeon immediately for any cord injury ${r(2)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines (NEML 2025)", html: `${tbl(["Medicine", "Use", "NEML"], [
[D("morphine", "Morphine"), "First-line analgesia", "10 mg/mL injection"],
[D("ketamine", "Ketamine"), "Second-line analgesia (low dose)", "Injection"],
[D("norepinephrine", "Noradrenaline"), "Neurogenic shock", "1 mg/mL and 2 mg/mL injection"],
[D("atropine", "Atropine"), "Symptomatic bradycardia", "Injection"],
[D("methylprednisolone", "Methylprednisolone"), "Not routine (see conflicts)", "500 mg injection"]
])}` },
{ id: "populations", title: "Special groups", html: `${tbl(["Group", "What changes"], [
["Age ≥ 65", "High risk even after minor falls — image " + r(2)],
["Ankylosing spondylitis, previous spinal surgery", "Fractures after trivial trauma; keep in their usual posture, no collar forcing " + r(2)],
["Children", "The Canadian C-spine rule is hard to apply; children with suspected cord or neck injury get MRI; avoid routine whole-body CT; keep infants in their car seat if possible " + r(2)],
["Pregnancy", "Tilt the whole board to the left after mid-pregnancy " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["28-year-old after a minor rear-end crash, walking, no midline tenderness, rotates neck 45° both ways", "No imaging, no collar " + r(2, 5)],
["70-year-old fell from standing, neck pain", "High risk (age): immobilise and CT " + r(2)],
["Diver into a shallow river, arms weak", "Axial load + neurology: immobilise, CT then MRI, urgent spinal surgeon " + r(2)],
["Fall from roof, landed on feet, back pain", "Thoracolumbar factors: X-ray then CT; check calcaneus " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Respiratory failure (high cervical lesions), aspiration ${LB.exp()}.</li>
<li>Pressure ulcers, urinary retention and infection, ileus, DVT and PE ${LB.exp()}.</li>
<li>Autonomic dysreflexia in lesions above T6 later on ${LB.exp()}.</li>
<li>Do not use medicines in the acute stage to try to prevent chronic neuropathic pain ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Rehabilitation and follow-up", html: `<ul>
<li>Every person with cord injury needs lifelong care guided by a spinal injury service ${r(2)}.</li>
<li>Early physiotherapy, bladder and bowel training, skin care and family teaching; link to rehabilitation services ${LB.loc()}.</li>
<li>Explain honestly what is known; avoid over-optimism or pessimism ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Applying a cervical collar", src: "images/cervical-collar.jpeg", mod: "Photograph", ctx: "Spinal immobilisation", find: "A clinician fitting a semi-rigid collar while the head is held in line", interp: "Collar plus manual in-line stabilisation; reassess the airway after fitting", by: "US Department of Defense (via DPLA)", page: "https://commons.wikimedia.org/wiki/File:While_on_duty_at_the_station_hospital,_Hospital_Corpsman_Joshua_Alvarez_immobilizes_an_injured_sailor%27s_head_and_neck_with_a_cervical_collar_-_DPLA_-_04103bbf38d9a432185ee024605fff3e.jpeg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Trauma patient — spine", [F.s("<C>ABCDE with manual in-line stabilisation"), F.a, F.d("Alert and stable? Apply Canadian C-spine rule + thoracolumbar factors"), F.a, F.b([["Imaging indicated", F.e("Full immobilisation → CT (adults); MRI if neurology")], ["Low risk + rotates 45°", F.ok("No immobilisation or imaging")]]), F.a, F.d("Cord injury?"), F.a, F.e("MAP ≥ 75–80, morphine, catheter, spinal surgeon now; no routine steroids")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Collaring every patient with neck pain", "Discomfort, airway problems, unnecessary X-rays", "Use the Canadian C-spine rule"],
["Calling hypotension 'neurogenic' too early", "Missed bleeding", "Exclude haemorrhage first"],
["Hours on a hard board", "Pressure ulcers", "Scoop or vacuum mattress; short board time"],
["Routine high-dose steroids", "No clear benefit; infections, bleeding", "Not routinely"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Name the three high-risk factors of the Canadian C-spine rule.", "Age ≥ 65, dangerous mechanism, paraesthesia in the limbs.")}
${qa("Intern/MO", "Hypotension with bradycardia after a neck injury suggests what?", "Neurogenic shock — but exclude bleeding first.")}
${qa("Specialist", "MAP target in acute cord injury (AO Spine 2024)?", "At least 75–80 mmHg, not actively above 90–95 mmHg, for 3–7 days.")}
${qa("Specialist", "Which drugs does NICE say not to use for neuroprotection?", "Methylprednisolone, nimodipine and naloxone.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §13.4 Spine fractures and spinal cord injuries; National Essential Medicines List 2025.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Spinal injury: assessment and initial management (NG41). 2016. <a href="https://www.nice.org.uk/guidance/ng41" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Fehlings MG, Wilson JR, Tetreault LA, et al. A clinical practice guideline for the management of patients with acute spinal cord injury: recommendations on the use of methylprednisolone sodium succinate. Global Spine J 2017;7(3 Suppl):203S–211S. <a href="https://doi.org/10.1177/2192568217703085" target="_blank" rel="noopener">doi:10.1177/2192568217703085</a></li>
<li id="ref-4">Kwon BK, Tetreault LA, Martin AR, et al. A clinical practice guideline for the management of patients with acute spinal cord injury: recommendations on hemodynamic management. Global Spine J 2024;14(3 Suppl):187S–211S. <a href="https://doi.org/10.1177/21925682231202348" target="_blank" rel="noopener">doi:10.1177/21925682231202348</a></li>
<li id="ref-5">Stiell IG, Clement CM, McKnight RD, et al. The Canadian C-spine rule versus the NEXUS low-risk criteria in patients with trauma. N Engl J Med 2003;349:2510–2518. <a href="https://doi.org/10.1056/NEJMoa031375" target="_blank" rel="noopener">doi:10.1056/NEJMoa031375</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG content", "<span class='pass'>Checked</span>", "§13.4 read; parts of the PDF text garbled"],
["Assessment, immobilisation, imaging, drugs", "<span class='pass'>Checked</span>", "NICE NG41 full text"],
["Methylprednisolone and MAP targets", "<span class='pass'>Checked</span>", "AO Spine 2017 and 2024 abstracts"],
["ASIA grade definitions", "<span class='unv'>Standard definitions</span>", "Not re-read from ISNCSCI — labelled"],
["Neurogenic shock above T6, later complications", "<span class='unv'>Expert opinion</span>", "Labelled"],
["Image", "<span class='pass'>Checked</span>", "Commons, public domain"]
], "qc")}` }
]
});
})();
