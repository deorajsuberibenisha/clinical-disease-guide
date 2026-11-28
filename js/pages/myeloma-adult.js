/* Multiple myeloma — adults. NEW disease (batch N-5, 28 Nov 2026).
   Sources read directly: NICE NG35 Myeloma: diagnosis and management (read in browser 28 Nov 2026: SPEP + serum free light chains to detect
   paraprotein; immunofixation if SPEP abnormal; no single test alone excludes myeloma; marrow morphology + flow; whole-body MRI first-line imaging,
   low-dose CT next, skeletal survey only if neither; no isotope bone scans; bortezomib/thalidomide-based induction; myeloma acute kidney disease →
   start bortezomib + dexamethasone immediately, no plasma exchange; bisphosphonates for all (zoledronic acid > pamidronate > clodronate) with dental
   assessment first; influenza vaccine, pneumococcal, aciclovir prophylaxis with proteasome inhibitors, test HBV/HCV/HIV; monitoring FBC, renal,
   bone profile, immunoglobulins/SPEP at least 3-monthly); NICE NG12 §1.10 (age ≥60 with persistent bone pain/unexplained fracture → FBC, calcium,
   ESR/PV, SPEP, SFLC); Merck Manual Professional — Multiple myeloma (full review Oct 2026: bone pain, kidney failure, infections; anaemia in 80%,
   rouleaux; hypercalcaemia ~10% at diagnosis; lytic lesions/osteoporosis ~80%; SLiM criteria >60% plasma cells, >1 MRI lesion, FLC ratio ≥100;
   quadruplet anti-CD38 + PI + IMiD + dexamethasone standard; hyperviscosity rare); NEML 2025 (dexamethasone, prednisolone, cyclophosphamide 50 mg
   tab/200 mg inj, aciclovir, allopurinol; NO bisphosphonate, thalidomide, bortezomib, melphalan or lenalidomide). CRAB thresholds are IMWG 2014 —
   not read directly, marked. Covers the remaining-list item 'Multiple myeloma'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "myeloma-adult",
title: "Multiple Myeloma",
subtitle: "Back pain, anaemia, high calcium, kidney failure or repeated infections in an older adult: check protein electrophoresis and free light chains, treat hypercalcaemia and kidney injury at once, protect the spine, and refer to haematology",
age: "Adult (mostly over 60)", specs: ["onc", "medicine", "neph"],
keywords: ["multiple myeloma", "myeloma", "plasma cell", "paraprotein", "M protein", "Bence Jones", "serum free light chains", "CRAB", "hypercalcaemia cancer", "lytic lesions", "rouleaux", "high ESR", "cast nephropathy", "MGUS", "smouldering myeloma", "plasmacytoma", "bone pain elderly"],
related: ["calcium-adult", "aki-adult", "ckd-adult", "anaemia-adult", "cord-compression-adult", "osteoporosis-adult", "lbp-adult", "leukaemia-lymphoma", "palliative-care"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A cancer of plasma cells that makes a monoclonal protein. Think of it when an older person has <b>C</b>alcium high, <b>R</b>enal failure, <b>A</b>naemia or <b>B</b>one pain/fractures — "CRAB" — or keeps getting infections ${r(3)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Age ≥ 60 with persistent bone (back) pain or unexplained fracture; unexplained anaemia, high ESR, high total protein, hypercalcaemia or kidney failure ${r(2)} ${r(3)}.</p></div>
<div><h4>Test</h4><p>FBC and film (rouleaux), calcium, creatinine, ESR; <b>serum protein electrophoresis + serum free light chains</b> (urine Bence-Jones if SFLC unavailable) ${r(1)} ${r(2)}.</p></div>
<div><h4>Emergencies</h4><p>Hypercalcaemia, acute kidney injury, cord compression, sepsis, hyperviscosity ${r(1)} ${r(3)}.</p></div>
<div><h4>Treat</h4><p>Haematology: bortezomib/thalidomide/anti-CD38-based combinations with dexamethasone; bisphosphonate for bones ${r(1)} ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Myeloma drugs (bortezomib, thalidomide, lenalidomide, melphalan) and bisphosphonates are <b>not on the NEML</b>; dexamethasone, cyclophosphamide, aciclovir and allopurinol are ${r(4)}. Most patients are diagnosed and treated through JDWNRH and referral abroad ${LB.loc()}. Your job: recognise it, treat calcium, kidneys, pain and infection, and refer.</p>`)}
` },

{ id: "overview", title: "Spectrum", html: `
${tbl(["Condition", "Meaning"], [
["MGUS", "Paraprotein without myeloma-defining features — monitor " + r(1)],
["Smouldering myeloma", "More plasma cells/protein but no organ damage — monitor 3-monthly for 5 years " + r(1)],
["Active myeloma", "Clonal plasma cells with CRAB features or a myeloma-defining biomarker (>60% marrow plasma cells, >1 MRI lesion, FLC ratio ≥100) " + r(3)],
["Solitary plasmacytoma", "Single bone or soft-tissue lesion " + r(3)],
["Primary plasma cell leukaemia", "Aggressive; intensive treatment " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Myeloma", [F.s("Clonal plasma cells fill the marrow"), F.a, F.s("Monoclonal protein / light chains; osteoclast activation"), F.a, F.e("Anaemia, lytic bone, high calcium, cast nephropathy, low normal antibodies → infection")])} <p>${r(3)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG35", "Merck 2026 / local", "This guide"], [
["Imaging", "Whole-body MRI first; skeletal survey only if MRI/CT unsuitable", "Skeletal survey + PET-CT or MRI; X-ray often all that is available here", "Skeletal survey is acceptable locally; MRI spine for neurology " + r(1) + " " + LB.loc()],
["Bone protection", "Zoledronic acid for all", "Not on NEML", "Request through haematology " + r(4)],
["First-line drugs", "Bortezomib- or thalidomide-based", "Quadruplet with anti-CD38", "Specialist " + r(1) + " " + r(3)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Persistent bone pain (back, ribs), pathological fractures, vertebral collapse with cord compression ${r(3)} ${P("cord-compression-adult", "Cord compression")}.</li>
<li>Fatigue and pallor (anaemia in 80%) ${r(3)}.</li>
<li>Recurrent bacterial infections (pneumonia, urinary) ${r(3)}.</li>
<li>Kidney failure; hypercalcaemia: thirst, polyuria, constipation, confusion ${r(3)}.</li>
<li>Rare: hyperviscosity (blurred vision, bleeding, headache, confusion), neuropathy, carpal tunnel (amyloid) ${r(3)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 67-year-old man from Bumthang has had back pain for 3 months, now tired and thirsty. Hb 86 g/L with rouleaux, ESR 110, calcium high, creatinine 210 µmol/L. <b>Suspected myeloma with CRAB features</b>: IV saline for calcium and kidneys, stop NSAIDs, protein electrophoresis/free light chains, spine imaging, urgent haematology ${r(1)} ${r(3)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Bone metastases (breast, prostate, lung, kidney)", "Known primary, sclerotic lesions " + P("cord-compression-adult", "Cord compression")],
["Primary hyperparathyroidism", "High calcium with high PTH " + P("calcium-adult", "Calcium disorders")],
["TB spine", "Fever, weight loss, disc involvement " + P("potts-adult", "Pott's spine")],
["Osteoporotic fracture", "No anaemia, normal ESR " + P("osteoporosis-adult", "Osteoporosis")],
["Chronic kidney disease, other causes", "Long history, small kidneys " + P("ckd-adult", "CKD")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>FBC and blood film (rouleaux), ESR, urea, creatinine, calcium, albumin, LDH, uric acid ${r(3)}.</li>
<li><b>Serum protein electrophoresis + serum free light chains</b>; immunofixation if abnormal; no single test excludes myeloma ${r(1)}.</li>
<li>Urine protein electrophoresis (Bence-Jones) ${r(2)} ${r(3)}.</li>
<li>Bone marrow aspirate/biopsy with flow cytometry and FISH (specialist) ${r(1)}.</li>
<li>Imaging: whole-body MRI or low-dose CT; skeletal survey if these are unavailable; no isotope bone scan ${r(1)}.</li>
<li>Before treatment: hepatitis B, C and HIV ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Myeloma CRAB helper", html: `<div class="calc" data-calc="myelomacheck"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Emergencies at first contact</h3>
<ul>
<li><b>Hypercalcaemia</b>: IV 0.9% saline rehydration, then bisphosphonate where available; stop calcium/vitamin D and thiazides ${LB.exp("STANDARD")} — see ${P("calcium-adult", "Calcium disorders")}.</li>
<li><b>Acute kidney injury</b>: fluids, stop NSAIDs and nephrotoxins, avoid IV contrast where possible; start bortezomib + dexamethasone urgently (haematology); <b>no plasma exchange</b> ${r(1)} ${P("aki-adult", "AKI")}.</li>
<li><b>Cord compression</b>: dexamethasone 16 mg, MRI, radiotherapy/surgery ${P("cord-compression-adult", "Cord compression")}.</li>
<li><b>Infection</b>: early IV antibiotics ${LB.exp("STANDARD")} ${P("sepsis-adult", "Sepsis")}.</li>
</ul>
<h3>Specialist treatment ${r(1)} ${r(3)}</h3>
<ul>
<li>Induction with a proteasome inhibitor (bortezomib) and/or immunomodulatory drug (thalidomide, lenalidomide) with dexamethasone, often an anti-CD38 antibody; autologous stem cell transplant for fit patients (judged on frailty, not age or kidney function alone).</li>
<li>Bone: zoledronic acid (or pamidronate/clodronate) for all, after a <b>dental check</b> (jaw osteonecrosis); radiotherapy or surgery for painful or unstable bones.</li>
<li>Prevention: influenza and pneumococcal vaccines; ${dr("aciclovir")} prophylaxis with proteasome inhibitors; VTE prevention on IMiDs; IVIg for recurrent infection with low immunoglobulins.</li>
<li>Pain: paracetamol and opioids; <b>avoid NSAIDs</b> (kidneys) ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("dexamethasone"), "Backbone of myeloma regimens; cord compression " + r(1), "4 mg tab, 4 mg/mL inj"],
[dr("cyclophosphamide"), "Some combination regimens (specialist) " + LB.exp("STANDARD"), "50 mg tab, 200 mg inj"],
[dr("aciclovir"), "Zoster prophylaxis with bortezomib " + r(1), "Listed"],
[dr("allopurinol"), "High uric acid / tumour lysis " + LB.exp("STANDARD"), "100 mg"],
["Bortezomib, thalidomide, lenalidomide, zoledronic acid", "Specialist " + r(1), "Not listed " + r(4)]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Older/frail:</b> transplant decisions on frailty and performance status, not age alone ${r(1)}.</li><li><b>Kidney failure:</b> dose adjustment; bortezomib usable in kidney failure ${r(1)}.</li><li><b>Younger patients:</b> myeloma under 40 is uncommon — still test if CRAB features ${r(3)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Back pain 'TB or myeloma?'", "SPEP/SFLC, imaging, biopsy — treat on evidence " + P("potts-adult", "Pott's spine")],
["Very high ESR with anaemia in an old patient", "Myeloma screen " + r(2)],
["Confused, dehydrated, calcium very high", "Saline, monitor, urgent referral " + P("calcium-adult", "Calcium disorders")],
["Drugs unaffordable or unavailable", "Steroids, palliative radiotherapy, pain control; palliative care " + P("palliative-care", "Palliative care")]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Fractures and cord compression, kidney failure, hypercalcaemia, infections, anaemia, hyperviscosity, amyloidosis, VTE on IMiDs, neuropathy from bortezomib/thalidomide, jaw osteonecrosis with bisphosphonates ${r(1)} ${r(3)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>At least 3-monthly: symptoms, FBC, kidney function, bone profile, immunoglobulins and SPEP ± SFLC; no routine skeletal surveys ${r(1)}.</li><li>Teach warning signs: new back pain, leg weakness, fever, confusion ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Punched-out lytic skull lesions and rouleaux on the film are classic.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Older adult: bone pain / anaemia / high Ca / kidney failure", [F.s("FBC, ESR, calcium, creatinine; SPEP + SFLC"), F.a, F.d("Paraprotein or abnormal FLC ratio?"), F.a, F.b([["Yes", F.e("Treat emergencies; urgent haematology; imaging, marrow")], ["No", F.s("Myeloma still possible — consider other causes, specialist if strong suspicion")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["NSAIDs for 'back pain' in an anaemic older patient", "Kidney failure", "Check FBC, ESR, creatinine first"],
["Normal SPEP = no myeloma", "Light-chain myeloma missed", "Add serum free light chains " + r(1)],
["Isotope bone scan", "Lytic lesions often not shown", "MRI/CT/skeletal survey " + r(1)],
["Bisphosphonate without dental check", "Jaw osteonecrosis", "Dental review first " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which two blood tests detect a paraprotein (NICE NG35)?", "Serum protein electrophoresis and serum free light-chain assay.")}
${qa("Intern/MO", "What does CRAB stand for?", "Calcium raised, Renal failure, Anaemia, Bone lesions.")}
${qa("Registrar", "Myeloma with acute kidney injury — what does NICE say about plasma exchange?", "Do not use it; start bortezomib + dexamethasone immediately.")}
${qa("Specialist", "Why is an isotope bone scan unhelpful?", "Myeloma lesions are lytic without osteoblastic activity, so they are often missed.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Myeloma: diagnosis and management (NG35). <a href="https://www.nice.org.uk/guidance/ng35" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12), §1.10.</li>
<li id="ref-3">Merck Manual Professional Edition. Multiple myeloma (full review Oct 2026).</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG35", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Merck myeloma", "<span class='pass'>Read</span>", "Oct 2026"], ["IMWG CRAB thresholds", "<span class='unv'>Not read directly</span>", "Used in helper, marked"], ["NEML", "<span class='pass'>Checked</span>", "No myeloma drugs, no bisphosphonate"]], "qc")}` }
]
});
})();
