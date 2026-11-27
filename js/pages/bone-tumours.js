/* Bone and soft-tissue tumours — all ages. Batch E-16, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §13.16 Musculoskeletal tumour or neoplasm (benign vs malignant table; night pain; weight loss; watchful waiting for
   benign; pain relief and prompt referral for malignant) — filtered text; Merck Manual Professional 'Overview of bone and joint tumors' and 'Primary
   malignant bone tumors' (Aug 2025: children mostly primary benign; adults > 40 mostly metastatic; night/rest pain; X-ray first, MRI/CT, bone scan,
   biopsy; osteosarcoma — peaks, knee, Codman triangle, neoadjuvant chemotherapy + limb salvage, 5-year survival > 65%; Ewing sarcoma — 10–20 years,
   diaphysis, onion-skin, may mimic infection, EWSR1-FLI1, > 60% localised cured); NICE NG12 1.11 sarcoma referral (2015). Not read: ESMO bone
   sarcoma guideline — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "bone-tumours",
title: "Bone and soft-tissue tumours — all ages",
subtitle: "Unexplained bone pain at night or at rest, or a lump that keeps growing, needs an X-ray (bone) or ultrasound (soft tissue) — a teenager with knee pain and swelling may have osteosarcoma; never biopsy outside the treating centre",
age: "All ages", specs: ["ortho", "onc", "paeds", "surg"],
keywords: ["bone tumour", "bone tumor", "bone cancer", "osteosarcoma", "Ewing sarcoma", "chondrosarcoma", "giant cell tumour", "osteochondroma", "enchondroma", "bone cyst", "metastatic bone disease", "bone metastases", "soft tissue sarcoma", "lump increasing in size", "night pain bone", "Codman triangle", "onion skin periosteal reaction", "pathological fracture", "limb salvage"],
related: ["bonejoint-child", "bonejoint-adult", "fracture-adult", "lbp-adult", "pyomyositis", "palliative-care", "palliative-child", "lymphnode-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Who</h4><p>Children: most bone tumours are primary and benign; malignant ones are osteosarcoma and Ewing sarcoma. Adults over 40: metastases far outnumber primary bone cancers ${r(2)}.</p></div>
<div><h4>Red flags</h4><p>Progressive pain, pain at night or at rest, swelling or mass, weight loss, fever, fracture after minor injury, pain not settling after treatment for 'injury' or 'arthritis' ${r(1)} ${r(2)}.</p></div>
<div><h4>Act</h4><p>X-ray first. Child with unexplained bone pain or swelling → very urgent X-ray; X-ray suggests sarcoma → specialist within 48 hours (children) or suspected-cancer referral (adults) ${r(3)}.</p></div>
<div><h4>Lump</h4><p>Unexplained soft-tissue lump that is growing → urgent ultrasound; suspicious → refer ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: benign lesions (slowly growing, painless, firm, non-tender) — watchful waiting, reassure, refer if unsure or growing; malignant lesions (progressive lump and pain, tender, warm skin, dilated veins) — pain relief and <b>prompt referral</b> ${r(1)}. Definitive staging, biopsy and treatment of sarcomas need a specialist orthopaedic oncology team, which usually means referral outside Bhutan ${LB.loc()} ${LB.exp("SERVICE PATHWAY NOT CONFIRMED")}. Do not perform a biopsy before discussion with the treating team — a badly placed biopsy can prevent limb salvage ${LB.exp()}.</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Tumour", "Key features"], [
["Osteosarcoma", "Commonest primary malignant bone tumour; teenagers and young adults (growth spurt), second peak over 60 (Paget, radiation); around the knee (distal femur > proximal tibia); lytic/sclerotic, Codman triangle; spreads to lungs and bone " + r(2)],
["Ewing sarcoma", "Age 10–20; diaphysis of long bones or any bone; permeative lytic, onion-skin periosteum, large soft-tissue mass; fever — may mimic infection; EWSR1-FLI1 fusion in ~85% " + r(2)],
["Chondrosarcoma, chordoma, adamantinoma", "Rarer primary malignant tumours " + r(2)],
["Benign tumours and cysts", "Osteochondroma, enchondroma etc. — classic X-ray needs no further tests unless painful " + r(2)],
["Metastases", "Adults: much commoner than primary bone cancer; myeloma and lymphoma behave similarly " + r(2)],
["Soft-tissue sarcoma", "Growing lump in muscle/soft tissue " + r(3)]
])}` },
{ id: "patho", title: "How it presents", html: `<p>Bone destruction causes pain on weight bearing and at rest, swelling, and fractures; some tumours (Ewing, leukaemia, lymphoma) cause fever and weight loss ${r(2)}. The commonest reason for delayed diagnosis is not thinking of a tumour and not ordering imaging ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "NICE NG12", "This guide"], [
["Benign-looking lump", "Watchful waiting; refer if unsure or growing", "Growing lump → urgent ultrasound", "Image any growing lump " + r(1) + r(3)],
["Child with bone pain", "—", "Very urgent direct-access X-ray", "X-ray quickly " + r(3)]
])}` },
{ id: "presentation", title: "Clinical features", html: `${tbl(["Benign (STG)", "Malignant (STG)"], [
["Slowly growing lump", "Progressively growing lump " + r(1)],
["Painless unless pressing on something", "Progressive pain, night pain " + r(1)],
["Firm, non-tender, localised", "Firm, tender, warm skin, dilated veins " + r(1)],
["—", "Weight and appetite loss, pathological fracture " + r(1)]
])}
<div class="calc" data-calc="bonetumour"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Osteomyelitis", "Fever, raised markers — Ewing can mimic it " + r(2) + " " + P("bonejoint-child", "bone infection")],
["Growing pains", "Bilateral, evening, no swelling, normal examination " + LB.exp()],
["Sports injury", "Pain not settling with treatment → image " + r(2)],
["Pyomyositis", "Fever, muscle abscess " + P("pyomyositis", "pyomyositis")],
["Leukaemia", "Bone pain, pallor, bruising, abnormal blood count " + r(2)],
["Sciatica", "Pelvic tumours can mimic it " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `${tbl(["Test", "Role"], [
["Plain X-ray (2 views)", "First test " + r(2)],
["MRI (± contrast)", "Extent, soft tissue, marrow, skip lesions " + r(2)],
["CT", "Cortical destruction, calcification; chest CT for lung metastases " + r(2)],
["Bone scan / PET-CT", "Multiple or metastatic lesions " + r(2)],
["Biopsy", "At the treating centre, after imaging " + r(2)],
["Bloods", "FBC (leukaemia), ALP (osteosarcoma response), calcium, myeloma screen in adults " + r(2) + " " + LB.exp()]
])}` },
{ id: "staging", title: "Staging", html: `<p>AJCC TNM (histology, grade, size, nodes, metastases) and the MSTS system (grade, intra- vs extra-compartmental, metastases); conventional osteosarcoma with soft-tissue mass and no metastases is MSTS stage IIB ${r(2)}.</p>` },
{ id: "manage", title: "Treatment", html: `<ul>
<li>Benign: reassure and observe; refer if painful, growing or uncertain ${r(1)} ${r(2)}.</li>
<li>Osteosarcoma: neoadjuvant chemotherapy, then en-bloc resection with clear margins (limb salvage in > 85%), then more chemotherapy; adjuvant chemotherapy raised 5-year survival from under 20% to over 65% ${r(2)}.</li>
<li>Ewing sarcoma: chemotherapy plus surgery and/or radiotherapy; more than 60% with localised disease are cured ${r(2)}.</li>
<li>Pain relief while awaiting referral ${r(1)}; protect a weakened bone from fracture ${LB.exp()}.</li>
<li>Metastatic disease: oncology and palliative care ${P("palliative-care", "palliative care")}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul><li>${D("paracetamol", "Paracetamol")}, ${D("ibuprofen", "ibuprofen")}, ${D("morphine", "morphine")} — pain while awaiting care ${r(1)} ${LB.loc()}.</li><li>Chemotherapy — specialist centre only ${r(2)}.</li></ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children and young people", "Very urgent X-ray for unexplained bone pain or swelling; 48-hour specialist referral " + r(3)],
["Adults over 40", "Think metastasis (breast, prostate, lung, kidney, thyroid) or myeloma " + r(2) + " " + LB.exp("PRIMARY SITES NOT IN TEXT READ")],
["Hereditary retinoblastoma, Li-Fraumeni", "Higher osteosarcoma risk " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["14-year-old with 6 weeks of knee pain waking him at night and a firm swelling above the knee", "X-ray urgently; if suggestive, specialist within 48 hours " + r(3)],
["55-year-old with new back pain at rest and weight loss", "X-ray/MRI; look for metastases or myeloma " + r(2)],
["Painless soft lump in the thigh enlarging over 3 months", "Urgent ultrasound; refer if suspicious " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Pathological fracture ${r(1)}.</li><li>Lung and bone metastases ${r(2)}.</li><li>Amputation if margins cannot be achieved ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Specialist oncology follow-up; watch for lung metastases ${r(2)} ${LB.exp()}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Unexplained bone pain or lump", [F.d("Bone or soft tissue?"), F.a, F.b([["Bone", F.s("X-ray (very urgent in children)")], ["Soft tissue, growing", F.s("Urgent ultrasound")]]), F.a, F.d("Suspicious?"), F.a, F.b([["Yes", F.e("Specialist referral (48 h child); no local biopsy")], ["No / classic benign", F.ok("Observe; re-image if pain or growth")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Treating persistent knee pain in a teenager as a sports injury", "Osteosarcoma missed", "X-ray if not settling or night pain " + r(2)],
["Local biopsy", "May prevent limb salvage", "Biopsy at the treating centre " + LB.exp()]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Commonest site of osteosarcoma?", "Around the knee — distal femur more than proximal tibia.")}${qa("Specialist", "Which bone tumour can mimic osteomyelitis?", "Ewing sarcoma (fever, raised markers, onion-skin periosteal reaction).")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §13.16 Musculoskeletal tumour or neoplasm.</li>
<li id="ref-2">Merck Manual Professional Edition. Overview of bone and joint tumors; Primary malignant bone tumors; reviewed Aug 2025.</li>
<li id="ref-3">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12), §1.11 Sarcomas.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §13.16", "<span class='pass'>Checked</span>", "Short section"],
["Merck bone tumour pages", "<span class='pass'>Checked</span>", "Read"],
["NICE NG12 sarcoma", "<span class='pass'>Checked</span>", "Read"],
["ESMO guideline", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "NICE + STG"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
