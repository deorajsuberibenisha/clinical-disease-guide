/* Birth injuries in the newborn — neonates. Batch E-15, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §1.12 Common birth trauma (clavicle fracture no treatment; humerus/femur deformity elastic bandage; Erb palsy
   physiotherapy; cephalhaematoma resolves) — filtered text; Merck Manual Professional 'Birth injuries' (Feb 2025: risk factors; facial nerve,
   brachial plexus — Erb/Klumpke/total, phrenic, spinal cord; moulding, scalp abrasion, caput, subgaleal haemorrhage, cephalhaematoma, depressed
   skull fracture; intracranial haemorrhage incl. IVH grades; clavicle/humerus/femur fractures; soft-tissue injury and jaundice); NEML 2025.
   Not read: NICE intrapartum care, RCOG shoulder dystocia — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "birth-injury",
title: "Birth injuries in the newborn",
subtitle: "Most birth injuries are minor and heal on their own — but a boggy swelling spreading over the whole scalp after a vacuum delivery (subgaleal haemorrhage) can bleed a baby into shock within hours",
age: "Neonates", specs: ["neo", "nicu", "paeds", "obg"],
keywords: ["birth injury", "birth trauma", "caput succedaneum", "cephalhaematoma", "cephalohematoma", "subgaleal haemorrhage", "vacuum extraction", "forceps", "moulding", "depressed skull fracture", "clavicle fracture newborn", "humerus fracture newborn", "Erb palsy", "Klumpke palsy", "brachial plexus injury", "facial nerve palsy newborn", "phrenic nerve palsy", "shoulder dystocia", "intraventricular haemorrhage"],
related: ["asphyxia-child", "neojaundice-child", "neoshock-child", "neoseizure-child", "labour-preg", "preterm-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Birth injury is more likely with a large baby (often maternal diabetes), breech or abnormal presentation, a first delivery, shoulder dystocia, forceps or vacuum ${r(2)}. Examine every baby after a difficult birth from head to toe ${LB.int()}.</p>
<div class="glance">
<div><h4>Scalp</h4><p>Caput crosses suture lines (harmless); cephalhaematoma stops at sutures (resolves over weeks; jaundice); <b>subgaleal haemorrhage</b> — fluctuant swelling over the whole scalp, risk of shock ${r(2)}.</p></div>
<div><h4>Arm not moving</h4><p>Clavicle fracture (commonest), humerus fracture, or brachial plexus palsy (Erb) — physiotherapy ${r(1)} ${r(2)}.</p></div>
<div><h4>Face</h4><p>Facial nerve palsy (one side does not move when crying) usually recovers by 2–3 months ${r(2)}.</p></div>
<div><h4>Brain</h4><p>Apnoea, seizures, lethargy → cranial ultrasound/CT for intracranial haemorrhage; give vitamin K ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: clavicle fracture needs no treatment; humerus or femur deformity is treated with an elastic bandage; Erb palsy with physiotherapy; cephalhaematoma may resolve on its own ${r(1)}. Make sure every newborn has had vitamin K ${r(2)} ${LB.loc()}. Babies with subgaleal haemorrhage, depressed skull fracture or suspected intracranial bleeding need a neonatal unit with blood transfusion and imaging — JDWNRH or a regional referral hospital ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Types of injury", html: `${tbl(["Injury", "Key features", "Course"], [
["Moulding", "Shaped head after vaginal birth", "Normal, no treatment " + r(2)],
["Caput succedaneum", "Soft oedema over the presenting part, crosses suture lines", "Resolves in days " + r(2)],
["Cephalhaematoma", "Blood under periosteum, limited to one bone (does not cross sutures), appears in first days", "Resolves over weeks; anaemia, jaundice; may calcify " + r(2)],
["Subgaleal haemorrhage", "Fluctuant mass over whole scalp, into temples/neck, first hours; vacuum/forceps or coagulopathy", "Large blood loss, shock — transfusion " + r(2)],
["Depressed skull fracture", "Palpable step", "CT; neurosurgery may elevate " + r(2)],
["Clavicle fracture", "Irritable, not moving arm, asymmetric Moro; callus in a week", "Heals in weeks without problems " + r(1) + r(2)],
["Humerus/femur fracture", "Deformity, not moving limb", "Remodels well " + r(1) + r(2)],
["Erb palsy (C5–C7)", "Arm adducted, internally rotated, forearm pronated ('waiter's tip'); absent biceps reflex", "Most improve; physiotherapy " + r(1) + r(2)],
["Klumpke palsy (C8–T1)", "Weak hand and wrist, absent grasp; ± Horner syndrome", "Range-of-motion exercises " + r(2)],
["Phrenic nerve palsy", "Breathing difficulty, reduced breath sounds on one side; 75% with plexus injury", "One-third recover in a month; CPAP/ventilation; plication " + r(2)],
["Facial nerve palsy", "Asymmetry on crying", "Recovers by 2–3 months " + r(2)],
["Intracranial haemorrhage", "Apnoea, seizures, lethargy, bulging fontanelle", "Supportive; vitamin K; neurosurgery for some " + r(2)]
])}` },
{ id: "patho", title: "Mechanisms", html: `<p>Lateral stretching of the neck (shoulder dystocia, breech extraction) injures the brachial plexus; pressure and shearing at instrumental delivery cause scalp bleeding; the preterm germinal matrix bleeds easily ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Humerus/femur fracture", "Elastic bandage", "Greenstick shaft fractures remodel well; no specific treatment described", "Gentle immobilisation for comfort; orthopaedic review " + r(1) + r(2) + " " + LB.int()],
["Clavicle fracture", "No treatment", "Optional: pin the sleeve to the opposite side for a week; analgesia rarely needed", "No treatment; handle gently " + r(1) + r(2)]
])}` },
{ id: "presentation", title: "Examination after a difficult birth", html: `<ul><li>Scalp: feel extent of swelling, whether it crosses sutures, fluctuance, step deformity ${r(2)}.</li><li>Arms: spontaneous movement, Moro symmetry, biceps and grasp reflexes, clavicle crepitus ${r(2)}.</li><li>Face: symmetry when crying ${r(2)}.</li><li>Breathing: respiratory distress with unilateral reduced breath sounds (phrenic) ${r(2)}.</li><li>Neurology: tone, alertness, seizures, apnoea ${r(2)}.</li></ul>
<div class="calc" data-calc="scalpswell"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Finding", "Think of"], [
["Asymmetric smile, face moves both sides", "Mandibular asymmetry or absent depressor anguli oris — not nerve injury " + r(2)],
["Arm not moving + fever", "Septic arthritis/osteomyelitis " + P("bonejoint-child", "bone and joint infection") + " " + LB.exp()],
["Bleeding from several sites", "Vitamin K deficiency, sepsis/DIC " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `${tbl(["Situation", "Tests"], [
["Subgaleal haemorrhage", "Serial head circumference and haemoglobin, coagulation, blood group and crossmatch " + r(2) + " " + LB.exp("SERIAL MEASURES COMMON PRACTICE")],
["Cephalhaematoma", "Bilirubin if jaundiced " + r(2)],
["Suspected intracranial bleed", "Cranial ultrasound first; CT for thin subdural/subarachnoid blood and fractures; MRI most sensitive " + r(2)],
["Fracture", "X-ray if deformity or doubt " + LB.exp()]
])}` },
{ id: "staging", title: "IVH grades (preterm)", html: `${tbl(["Grade", "Extent"], [["1", "Germinal matrix only " + r(2)], ["2", "Into ventricle, no dilatation " + r(2)], ["3", "With ventricular dilatation " + r(2)], ["4", "Plus parenchymal haemorrhage " + r(2)]])}` },
{ id: "manage", title: "Management", html: `
<ul>
<li><b>Subgaleal haemorrhage:</b> close monitoring, IV saline and packed red cells as needed, correct coagulopathy, urgent transfer ${r(2)}.</li>
<li><b>Cephalhaematoma:</b> no treatment; watch jaundice and anaemia; do not aspirate ${r(1)} ${r(2)} ${LB.exp("ASPIRATION ADVICE COMMON PRACTICE")}.</li>
<li><b>Clavicle fracture:</b> no specific treatment; gentle handling ${r(1)} ${r(2)}.</li>
<li><b>Humerus/femur:</b> elastic bandage (STG) / immobilise for comfort ${r(1)}.</li>
<li><b>Erb/Klumpke palsy:</b> protect the shoulder (arm across the upper abdomen), daily gentle passive range-of-motion from 1 week; physiotherapy if lasting more than 1–2 weeks; specialist review if no improvement by 1–2 months (nerve surgery may help) ${r(1)} ${r(2)}.</li>
<li><b>Phrenic palsy:</b> respiratory support ${r(2)}.</li>
<li><b>Intracranial haemorrhage:</b> supportive; vitamin K if not given; manage coagulopathy; neurosurgery consult for significant bleeds ${r(2)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul><li>${D("phytomenadione", "Vitamin K (phytomenadione)")} — all newborns; give if not already given ${r(2)}.</li><li>${D("paracetamol", "Paracetamol")} — if in pain (rarely needed for clavicle fracture) ${r(2)}.</li></ul>` },
{ id: "populations", title: "Risk groups", html: `<p>Large-for-dates babies, maternal diabetes, breech, first deliveries, instrumental delivery, shoulder dystocia; preterm babies for intraventricular haemorrhage ${r(2)} ${P("idm-child", "infant of diabetic mother")}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["4 hours after vacuum delivery: boggy swelling over the whole scalp, pale, HR 180", "Subgaleal haemorrhage: fluids, blood, coagulation, urgent NICU " + r(2)],
["Day 2: firm swelling over one parietal bone, not crossing sutures", "Cephalhaematoma: reassure; watch bilirubin " + r(2)],
["Big baby after shoulder dystocia; arm hangs limp, internally rotated", "Erb palsy: positioning, range-of-motion from 1 week, physiotherapy, review " + r(2)],
["Baby cries but does not move arm; crepitus over clavicle", "Clavicle fracture: no treatment " + r(1) + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Shock from subgaleal haemorrhage ${r(2)}.</li><li>Jaundice from bruising and cephalhaematoma ${r(2)} ${P("neojaundice-child", "neonatal jaundice")}.</li><li>Permanent arm weakness ${r(2)}.</li><li>Hydrocephalus after IVH ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Brachial plexus injuries: review at 1–2 weeks and 1–2 months ${r(2)}; head circumference and development after intracranial bleeds ${LB.exp()}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Scalp swelling in a newborn", [F.d("Crosses sutures?"), F.a, F.b([["No, one bone", F.ok("Cephalhaematoma: observe, bilirubin")], ["Yes, soft, day 0", F.ok("Caput: resolves")], ["Yes, fluctuant, whole scalp, growing", F.e("Subgaleal: shock risk — fluids, blood, NICU")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Calling a spreading boggy scalp 'just caput'", "Subgaleal bleeds can be fatal", "Feel for fluctuance, track size and HR " + r(2)],
["Missing clavicle fracture", "Parents alarmed by callus later", "Palpate both clavicles " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Which scalp swelling stays within suture lines?", "Cephalhaematoma.")}${qa("Specialist", "Most dangerous scalp bleed in a newborn?", "Subgaleal haemorrhage — can cause hypovolaemic shock.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.12 Common birth trauma.</li>
<li id="ref-2">Merck Manual Professional Edition. Birth injuries; reviewed Feb 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §1.12", "<span class='pass'>Checked</span>", "Short section"],
["Merck birth injuries", "<span class='pass'>Checked</span>", "Read"],
["NICE intrapartum / RCOG shoulder dystocia", "<span class='unv'>Not read</span>", "Prevention not covered"],
["Calculator", "<span class='pass'>Checked</span>", "Scalp swelling sorter"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
