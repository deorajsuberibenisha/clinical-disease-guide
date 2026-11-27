/* Dental trauma (fractured and knocked-out teeth, jaw fracture, jaw dislocation) — all ages. Batch E-12, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §17.9 Trauma, §17.9.1 Jaw fracture, §17.9.2 Avulsion (replant gently after saline rinse; storage in saliva/milk/
   saline; refer promptly; antibiotic 8-hourly 5 days; ibuprofen 400 mg 8-hourly; soft diet; mouth guards) — filtered text; Merck Manual
   Professional 'Fractured and avulsed teeth' (Aug 2026: fracture depth; primary teeth not replanted; rinse ≤ 10 s; milk/saline/wet towel/mouth;
   30–60 min; no routine antibiotics — Bourgeois 2022; tetanus; missing tooth → chest X-ray) and 'Mandibular dislocation'; NEML 2025.
   Not read: IADT 2020 guidelines (Dent Traumatol, not open access) — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "dental-trauma",
title: "Dental trauma — knocked-out and broken teeth, jaw fracture and dislocation",
subtitle: "A knocked-out permanent tooth should go back in its socket within minutes: hold it by the crown, rinse briefly, replant or keep it in milk, saliva or saline, and get to a dentist — never replant a baby tooth",
age: "All ages", specs: ["ent", "emerg", "paeds", "surg", "ortho"],
keywords: ["dental trauma", "avulsed tooth", "knocked out tooth", "tooth avulsion", "replantation", "tooth storage milk", "fractured tooth", "broken tooth", "dentine exposed", "pulp exposure", "jaw fracture", "mandible fracture", "step deformity", "malocclusion", "jaw dislocation", "mandibular dislocation", "mouth guard"],
related: ["toothache", "oral-health", "headinjury-adult", "headinjury-child", "trauma-adult", "trauma-child", "wounds", "tetanus-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Knocked-out permanent tooth</h4><p>Hold by the crown; rinse under cold water up to 10 seconds if dirty (do not scrub); replant immediately; or store in milk, saline, saliva (in the cheek) and see a dentist within 30–60 minutes ${r(1)} ${r(2)}.</p></div>
<div><h4>Baby tooth</h4><p>Do <b>not</b> replant a primary tooth — it can damage the permanent tooth ${r(2)}.</p></div>
<div><h4>Broken tooth</h4><p>Enamel only: elective; dentine exposed (cold-sensitive): analgesia + dentist; pulp exposed (bleeding) or mobile: urgent dentist ${r(2)}.</p></div>
<div><h4>Jaw</h4><p>Step, malocclusion, painful restricted opening, bleeding: X-ray, analgesia, refer to oral surgeon ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: refer promptly because success depends on time; replant gently after rinsing with saline without touching the root; if not possible, store in saliva (under the tongue or in the cheek), fresh whole milk or saline; give an antibiotic 8-hourly for 5 days and ibuprofen 400 mg 8-hourly; soft diet; mouth guards for contact sports ${r(1)}. Check tetanus status if the tooth touched soil ${r(2)} ${P("tetanus-adult", "tetanus")}.</p>`)}
` },
{ id: "overview", title: "Types of injury", html: `${tbl(["Injury", "Signs", "Urgency"], [
["Enamel fracture", "Rough or sharp edge, no symptoms", "Elective " + r(2)],
["Dentine exposed", "Sensitive to cold air and water", "Analgesia, dentist soon " + r(2)],
["Pulp exposed / root or alveolar fracture", "Bleeding from tooth; mobile tooth or segment", "Urgent dentist " + r(2)],
["Avulsion", "Tooth completely out; bleeding socket; usually incisors", "Emergency replantation " + r(1) + r(2)],
["Jaw fracture", "Pain, mobile segment, bruising, step deformity, asymmetry, painful restricted TMJ movement, bleeding", "Oral surgeon " + r(1)],
["Jaw dislocation", "Mouth stuck open after yawning or trauma", "Manual reduction " + r(3)]
])}` },
{ id: "patho", title: "Why time matters", html: `<p>The periodontal ligament cells on the root must stay alive and moist; scrubbing or drying kills them. Replantation within 30–60 minutes gives the best chance; after 1 hour retention falls and the root resorbs ${r(2)}. Most replanted teeth later need root canal treatment ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Antibiotics after replantation", "Antibiotic 8-hourly for 5 days", "Not routinely recommended in healthy patients (systematic review 2022)", "Follow the dentist; IADT 2020 " + LB.exp("NOT READ") + " " + r(1) + r(2)],
["Storage medium", "Saliva, milk, saline", "Saline, milk, moist paper towel, or in the mouth if no aspiration risk", "Milk or saline first " + r(1) + r(2)]
])}` },
{ id: "presentation", title: "Assessment", html: `<p>Check airway and head injury first; look for missing teeth (a tooth not found may have been inhaled — chest X-ray — or swallowed, which is harmless) ${r(2)}; examine bite, step deformity, mobility, lip and gum wounds; tetanus status ${r(2)}.</p>
<div class="calc" data-calc="avulsion"></div>` },
{ id: "ddx", title: "Associated injuries", html: `<p>Head injury, cervical spine injury, facial fractures ${P("headinjury-adult", "head injury")} ${LB.exp()}. In children with unexplained dental trauma, consider safeguarding ${LB.exp()}.</p>` },
{ id: "invest", title: "Investigations", html: `<p>Radiography of the fracture site for jaw fractures ${r(1)}; chest X-ray if a tooth is missing and may be inhaled ${r(2)}.</p>` },
{ id: "staging", title: "Primary or permanent tooth?", html: `<p>Primary teeth: children under about 6 years have only baby teeth — do not replant ${r(2)} ${LB.exp("AGE CUT-OFF NOT IN SOURCE")}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>Avulsed permanent tooth</h3>
<ol><li>Find the tooth; hold by the crown only ${r(2)}.</li><li>If dirty, rinse in cold water or saline up to 10 seconds; do not scrub ${r(2)}.</li><li>Replant gently into the socket; bite on gauze ${r(1)} ${r(2)}.</li><li>If not possible: store in milk, saline, saliva or a moist towel ${r(1)} ${r(2)}.</li><li>Urgent dentist for splinting ${r(1)} ${r(2)}.</li><li>Analgesia (ibuprofen 400 mg 8-hourly), soft diet, tetanus check; antibiotic per STG/dentist ${r(1)} ${r(2)}.</li></ol>
<h3>Jaw fracture</h3><p>Control bleeding and pain, suture soft tissues, refer to oral and maxillofacial surgery ${r(1)}.</p>
<h3>Jaw dislocation</h3><p>Thumbs (wrapped in gauze) on lower molars, press down and back while lifting the chin; sedation rarely needed; reduce early ${r(3)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul><li>${D("ibuprofen", "Ibuprofen")} 400 mg 8-hourly (STG) ${r(1)}.</li><li>${D("paracetamol", "Paracetamol")}.</li><li>${D("amoxicillin", "Amoxicillin")} if antibiotic used ${r(1)} ${LB.exp("DRUG NAME UNREADABLE IN STG")}.</li></ul>` },
{ id: "populations", title: "Special situations", html: `<p>Contact sports: mouth guards ${r(1)}. Unconscious patients: do not put the tooth in the mouth (aspiration) ${r(2)}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["12-year-old knocked out an upper front tooth 15 minutes ago", "Replant now (crown only, brief rinse), bite on gauze, urgent dentist " + r(2)],
["3-year-old knocked out a front tooth", "Do not replant; dentist review " + r(2)],
["Man after a fight cannot close his teeth properly, step along the jaw", "Jaw fracture: X-ray, analgesia, oral surgeon " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Pulp necrosis, root resorption, tooth loss ${r(2)}.</li><li>Inhaled tooth ${r(2)}.</li><li>Malunion of jaw fracture ${LB.exp()}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Dental follow-up for splint removal and root canal treatment ${r(2)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Tooth knocked out", [F.d("Baby tooth?"), F.a, F.b([["Yes", F.ok("Do not replant; dentist")], ["No", F.s("Hold crown; rinse ≤ 10 s; replant")]]), F.a, F.d("Cannot replant?"), F.a, F.s("Milk / saline / saliva"), F.a, F.e("Dentist within 30–60 minutes")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Scrubbing the root", "Kills ligament cells", "Brief rinse only " + r(2)],
["Storing the tooth dry", "Cells die", "Milk, saline, saliva " + r(1) + r(2)],
["Replanting a baby tooth", "Damages the permanent tooth", "Do not replant " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Best storage for an avulsed tooth if replanting is impossible?", "Milk or saline (or saliva in the cheek).")}${qa("Intern/MO", "Should a knocked-out baby tooth be replanted?", "No.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.9 Trauma (jaw fracture, avulsion).</li>
<li id="ref-2">Merck Manual Professional Edition. Fractured and avulsed teeth; reviewed Aug 2026.</li>
<li id="ref-3">Merck Manual Professional Edition. Mandibular dislocation; accessed Nov 2026.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §17.9", "<span class='pass'>Checked</span>", "Antibiotic name unreadable"],
["Merck", "<span class='pass'>Checked</span>", "Read"],
["IADT 2020", "<span class='unv'>Not read</span>", "Not open access"],
["Calculator", "<span class='pass'>Checked</span>", "Avulsion steps"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
