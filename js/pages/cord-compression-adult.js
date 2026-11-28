/* Spinal cord compression (non-TB): metastatic, epidural abscess, disc/cauda equina, haematoma — adults. NEW disease (batch N-4, 28 Nov 2026).
   Sources read directly: NICE NG234 Spinal metastases and metastatic spinal cord compression (Sept 2023; recommendations 1.3–1.11 read in browser
   28 Nov 2026: Box 1 pain and neurological features; cancer + cord symptoms = oncological emergency, contact MSCC coordinator immediately; pain only
   → advice within 24 h; MRI whole spine within 24 h (1 week if pain only); no plain X-ray to rule out; CT if MRI contraindicated; immobilise if
   neurological signs suggesting instability, nurse supine; dexamethasone 16 mg oral ASAP then 16 mg daily until surgery/radiotherapy, then taper;
   stop if MSCC excluded; glucose monitoring + PPI; urgent radiotherapy within 24 h if not for surgery (8 Gy single fraction) unless paraplegia
   ≥ 2 weeks with controlled pain or poor prognosis; surgery as soon as possible to halt/reverse decline; do not use time since paraplegia alone);
   ICMR Neurosurgery STW (spinal injury workflow, used only for trauma comparison); NEML 2025 (dexamethasone 4 mg tablet and 4 mg/mL injection,
   omeprazole 20 mg/40 mg inj). Epidural abscess, cauda equina and haematoma details are standard practice — marked; TB spine has its own page. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "cord-compression-adult",
title: "Spinal Cord Compression (non-TB) — Adults",
subtitle: "Back pain with leg weakness, numbness or bladder change is an emergency: give dexamethasone if cancer is the likely cause, keep the spine still, get an MRI within 24 hours, and refer for surgery or radiotherapy before the patient loses the ability to walk",
age: "Adult", specs: ["neuro", "onc", "emerg", "surg"],
keywords: ["spinal cord compression", "metastatic spinal cord compression", "MSCC", "cauda equina syndrome", "epidural abscess", "spinal epidural haematoma", "back pain red flags", "paraplegia", "urinary retention", "saddle anaesthesia", "dexamethasone 16 mg", "spinal metastases", "myelopathy"],
related: ["potts-adult", "lbp-adult", "neckpain-adult", "spinal-injury-adult", "breast-cancer-adult", "lung-cancer-adult", "leukaemia-lymphoma", "palliative-care", "neuropathy-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Whether a patient can walk after treatment depends mostly on whether they <b>could walk at diagnosis</b>. Treat back pain with neurological symptoms in a cancer patient as an <b>oncological emergency</b> ${r(1)} ${LB.exp("WALKING OUTCOME — STANDARD")}.</p>
<div class="glance">
<div><h4>Red flags</h4><p>Severe, progressive, night or cough-aggravated back pain; then limb weakness, numbness, gait change, bladder/bowel problems ${r(1)}.</p></div>
<div><h4>Cancer patient with cord signs</h4><p>${dr("dexamethasone")} 16 mg now, then 16 mg daily; keep flat if unstable; MRI whole spine within 24 h ${r(1)}.</p></div>
<div><h4>Fever + back pain</h4><p>Epidural abscess: blood cultures, MRI, IV antibiotics, neurosurgery — and think TB ${P("potts-adult", "Pott's spine")} ${LB.exp("STANDARD")}.</p></div>
<div><h4>Saddle numbness + retention</h4><p>Cauda equina — emergency MRI and decompression ${LB.exp("STANDARD")}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>MRI is at JDWNRH (and some regional hospitals) ${LB.loc()}; radiotherapy availability should be checked with the oncology team — many patients are referred to India ${LB.loc()}. Do not wait for transfer before giving dexamethasone and keeping the spine still. TB spine is common here — see ${P("potts-adult", "Pott's spine")}.</p>`)}
` },

{ id: "overview", title: "Causes", html: `
${tbl(["Cause", "Typical picture"], [
["Metastatic (MSCC) — breast, lung, prostate, kidney, myeloma, lymphoma", "Known or suspected cancer, progressive back pain, then neurology " + r(1)],
["Spinal epidural abscess", "Fever, severe local pain, diabetes/IV drug use/recent procedure; <i>S. aureus</i> " + LB.exp("STANDARD")],
["Tuberculosis (Pott's)", "Weeks–months, gibbus, weight loss " + P("potts-adult", "Pott's spine")],
["Central disc prolapse / cauda equina", "Sciatica then saddle anaesthesia, retention " + LB.exp("STANDARD")],
["Epidural haematoma", "Anticoagulants, bleeding disorder, after spinal anaesthesia " + LB.exp("STANDARD")],
["Trauma / fracture", P("spinal-injury-adult", "Spinal injury")],
["Degenerative cervical myelopathy", "Slow clumsy hands, gait, brisk reflexes " + P("neckpain-adult", "Neck pain")]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Cord compression", [F.s("Tumour, pus, blood, disc or bone in the canal"), F.a, F.s("Direct pressure + venous congestion + oedema"), F.a, F.e("Ischaemia → permanent paralysis if not relieved")])} <p>Dexamethasone reduces vasogenic oedema ${LB.exp("STANDARD")}.</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG234", "Local reality", "This guide"], [
["MRI timing", "Within 24 h with neurological signs", "MRI may need transfer", "Transfer the same day; CT if MRI impossible " + r(1)],
["Plain X-ray", "Do not use to diagnose/rule out", "Often the only test", "Normal X-ray never excludes MSCC " + r(1)],
["Radiotherapy", "Within 24 h, 8 Gy single fraction", "May require referral", "Steroids + immobilisation while arranging " + r(1) + " " + LB.loc()]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Pain</b> (usually first): severe unremitting or progressive back pain, mechanical, worse with cough/strain, at night, local tenderness, radicular pain ${r(1)}.</li>
<li><b>Cord</b>: limb weakness, gait disturbance, numbness or sensory level, bladder or bowel dysfunction ${r(1)}.</li>
<li><b>Cauda equina</b>: saddle anaesthesia, retention or incontinence, bilateral sciatica, reduced anal tone ${LB.exp("STANDARD")}.</li>
<li>Upper motor neurone signs below a cord lesion (brisk reflexes, upgoing plantars); lower motor neurone signs with cauda equina ${LB.exp("STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 52-year-old woman from Paro treated for breast cancer 3 years ago has 4 weeks of thoracic back pain waking her at night, and for 2 days her legs feel heavy. Power 4/5 in both legs, sensory level at T8. <b>Suspected MSCC</b>: dexamethasone 16 mg now, lie flat, omeprazole, glucose checks, MRI whole spine today, call oncology/neurosurgery ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Guillain–Barré", "Areflexia, no sensory level, no back mass " + P("gbs-adult", "GBS")],
["Transverse myelitis", "Acute, MRI cord signal, no compression"],
["Peripheral neuropathy", "Glove-stocking, no sensory level " + P("neuropathy-adult", "Neuropathy")],
["Mechanical back pain", "No red flags, no neurology " + P("lbp-adult", "Low back pain")],
["B12 myelopathy", "Posterior column loss, anaemia " + P("anaemia-adult", "Anaemia")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>MRI whole spine</b> (sagittal T1/STIR and T2, axial through lesions) within 24 hours if neurological signs; within 1 week if pain only ${r(1)}.</li>
<li>CT if MRI is contraindicated or unavailable; no plain X-ray to rule out ${r(1)}.</li>
<li>Bloods: FBC, calcium, kidney function, CRP/ESR, blood cultures (fever), glucose; myeloma screen if no known primary ${LB.exp("STANDARD")}.</li>
<li>Bladder scan / post-void residual ${LB.exp("STANDARD")}.</li>
<li>Unknown primary: image-guided biopsy if it changes treatment and treatment is not immediately needed ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Cord compression helper", html: `<div class="calc" data-calc="cordcheck"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Metastatic cord compression ${r(1)}</h3>
<ul>
<li>${dr("dexamethasone")} 16 mg orally (or equivalent IV) as soon as possible, then 16 mg daily until surgery/radiotherapy, then taper; stop if MSCC is excluded.</li>
<li>With steroids: monitor blood glucose and give a proton pump inhibitor (${dr("omeprazole")}).</li>
<li>Immobilise (lie flat or slight elevation) if neurological signs suggest instability; log-roll; early expert advice to shorten immobilisation.</li>
<li>Prompt analgesia while waiting for tests.</li>
<li><b>Surgery</b> (decompression ± stabilisation) as soon as possible for suitable patients; stabilisation for unstable spine with uncontrolled mechanical pain.</li>
<li><b>Radiotherapy</b> within 24 hours if not for surgery (8 Gy single fraction usually), unless paraplegic ≥ 2 weeks with good pain control or poor prognosis.</li>
</ul>
<h3>Other causes ${LB.exp("STANDARD")}</h3>
<ul>
<li>Epidural abscess: blood cultures, IV anti-staphylococcal antibiotics (e.g. ${dr("cloxacillin")} ± vancomycin per local guide), urgent neurosurgical drainage if neurological deficit.</li>
<li>Cauda equina from disc: emergency decompression.</li>
<li>Haematoma: reverse anticoagulation, urgent decompression.</li>
</ul>
<h3>Supportive</h3>
<ul><li>Catheter for retention, bowel care, pressure-area care, VTE prevention, physiotherapy, rehabilitation, palliative care where appropriate ${r(1)} ${P("palliative-care", "Palliative care")}.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("dexamethasone"), "16 mg then 16 mg daily (MSCC) " + r(1), "4 mg tablet, 4 mg/mL injection"],
[dr("omeprazole"), "Stomach protection on steroids " + r(1), "20 mg capsule, 40 mg injection"],
[dr("cloxacillin"), "Epidural abscess (S. aureus) " + LB.exp("STANDARD"), "250 mg capsule and injection; vancomycin 500 mg injection also listed " + r(2)]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Lymphoma/myeloma:</b> get haematology advice before steroids if no neurology — steroids can obscure the biopsy; with neurology give dexamethasone 16 mg ${r(1)}.</li><li><b>Diabetes:</b> steroid hyperglycaemia — monitor and treat ${r(1)}.</li><li><b>Children:</b> cord compression from tumours (neuroblastoma, sarcoma), abscess or TB — paediatric neurosurgery ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Cancer patient, back pain only, X-ray normal", "MRI within 1 week; explain red flags and urgent return " + r(1)],
["Paraplegic for 3 weeks, pain controlled, poor prognosis", "Radiotherapy may not help; palliative focus " + r(1)],
["Fever, back pain, diabetic, new leg weakness", "Epidural abscess — cultures, antibiotics, MRI, neurosurgery today"],
["No MRI for 2 days", "Dexamethasone, immobilise, CT, arrange transfer — do not wait"]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Permanent paraplegia, urinary retention and infection, pressure ulcers, VTE, constipation, steroid side effects, depression ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Rehabilitation, carer training, community nursing and equipment before discharge ${r(1)}.</li><li>Teach cancer patients the warning symptoms and when to seek urgent help ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. MRI whole spine is the test.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Back pain + red flags", [F.d("Neurological symptoms or signs?"), F.a, F.b([["Yes", F.s("Emergency: dexamethasone 16 mg if cancer; immobilise; MRI ≤ 24 h")], ["No (pain only)", F.s("Cancer: advice ≤ 24 h, MRI ≤ 1 week")]]), F.a, F.e("Surgery or radiotherapy; rehab and palliative care")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for weakness before imaging", "Walking ability lost", "Act on pain red flags in cancer " + r(1)],
["Trusting a normal X-ray", "Misses most early MSCC", "MRI " + r(1)],
["Steroids without PPI/glucose checks", "GI bleed, hyperglycaemia", "Omeprazole + monitoring " + r(1)],
["Missing urinary retention", "Overflow, infection", "Bladder scan"]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Dexamethasone dose for suspected MSCC with neurological signs (NICE)?", "16 mg orally as soon as possible, then 16 mg daily until definitive treatment, then taper.")}
${qa("Intern/MO", "Imaging for suspected MSCC with neurology?", "MRI whole spine within 24 hours; not plain X-ray.")}
${qa("Registrar", "When is radiotherapy not offered for MSCC?", "Complete paraplegia/tetraplegia ≥ 2 weeks with controlled pain, or poor overall prognosis.")}
${qa("Specialist", "What else must be given with dexamethasone?", "PPI and blood glucose monitoring; manage steroid withdrawal.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Spinal metastases and metastatic spinal cord compression (NG234, 2023). <a href="https://www.nice.org.uk/guidance/ng234" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG234 §1.3–1.11", "<span class='pass'>Read</span>", "28 Nov 2026"], ["NEML", "<span class='pass'>Checked</span>", "Dexamethasone, omeprazole"], ["Abscess, cauda equina, haematoma", "<span class='unv'>Standard</span>", "Marked; no guideline read"]], "qc")}` }
]
});
})();
