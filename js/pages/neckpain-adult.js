/* Neck pain and cervical spondylosis (JOSPT 2017, Canadian C-spine rule, NICE CKS) */
registerPage({
id: "neckpain-adult",
title: "Neck Pain & Cervical Spondylosis",
subtitle: "Most neck pain is mechanical and improves with activity: screen for red flags and myelopathy, use the Canadian C-spine rule after trauma, and manage radiculopathy conservatively unless deficits progress",
age: "Adults", specs: ["ortho", "neuro", "rehab"],
keywords: ["neck pain", "cervical spondylosis", "cervical radiculopathy", "cervical myelopathy", "whiplash", "Canadian C-spine rule", "torticollis", "red flags"],
related: ["lbp-adult", "fracture-adult", "potts-adult", "headinjury-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Mechanical</h4><p>Reassure, stay active, exercise, ${dr("paracetamol")}/${dr("ibuprofen")}.</p></div>
<div><h4>Radiculopathy</h4><p>Arm pain/numbness in a dermatome — conservative 6–12 weeks.</p></div>
<div><h4>Myelopathy</h4><p>Clumsy hands, gait problems, brisk reflexes → urgent MRI.</p></div>
<div><h4>Trauma</h4><p>Canadian C-spine rule.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Physiotherapy is available at JDWNRH, regional and many district hospitals. MRI at JDWNRH. Carrying heavy loads (backpacks, head straps) and desk work are common contributors. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Features"], [["Mechanical/spondylosis", "Neck pain, stiffness, worse with posture"], ["Radiculopathy", "Arm pain, paraesthesia, weakness, reflex loss (C5–C7)"], ["Myelopathy", "Hand clumsiness, gait disturbance, hyperreflexia, bladder change"], ["Whiplash", "After rear-end collision"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Spondylosis", [F.s("Disc degeneration, osteophytes"), F.a, F.s("Foraminal narrowing → root compression"), F.e("Canal stenosis → myelopathy")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Common practice", "Evidence", "This guide"], [["Soft collar", "Prolonged use", "Not recommended", "Avoid " + LB.loc()], ["Routine X-ray", "Common", "Not needed without red flags", "Targeted"]])}` },
{ id: "presentation", title: "Red flags", html: `${box("red", "Red flags", `<ul><li>Fever, weight loss, cancer history, TB (infection/tumour)</li><li>Myelopathy signs</li><li>Trauma with high-risk features</li><li>Severe night pain, age over 50 new onset</li><li>Vascular: sudden severe neck pain with headache/neurology (dissection)</li></ul>`)}<h3>The typical patient</h3><p>A 48-year-old office worker in Thimphu has 3 weeks of neck stiffness and pain into the right arm with thumb tingling; C6 reflex reduced, power normal. <b>C6 radiculopathy</b>: analgesia, activity, physiotherapy; MRI if progressive weakness or no improvement at 6–12 weeks.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Shoulder pathology", "Pain on shoulder movement"], ["Carpal tunnel", "Night tingling, Phalen"], ["Angina", "Exertional"], ["Spinal TB/metastasis", "Red flags"]])}` },
{ id: "invest", title: "Investigations", html: `<p>None for mechanical pain; MRI for myelopathy, progressive deficit or red flags; X-ray/CT after trauma per rule.</p>` },
{ id: "staging", title: "Canadian C-spine rule", html: `<div class="calc" data-calc="cspine"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Reassurance, posture advice, exercise, physiotherapy.</li><li>Short course NSAIDs/paracetamol; neuropathic agents (amitriptyline, gabapentin) for radicular pain.</li><li>Surgery: progressive deficit, myelopathy, intractable radicular pain.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ibuprofen"), "400 mg TDS", "Short course"], [dr("paracetamol"), "1 g QDS", "Pain"], [dr("amitriptyline"), "10–25 mg at night", "Radicular"], [dr("gabapentin"), "300 mg up to TDS", "Radicular"]])}` },
{ id: "populations", title: "Children", html: `<p>Torticollis in children: infection (retropharyngeal), trauma, rarely tumour — examine carefully.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Myelopathy signs", "Urgent MRI and spine surgeon"]])}` },
{ id: "complications", title: "Complications", html: `<p>Chronic pain; myelopathy progression if missed.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review in 4–6 weeks; earlier if neurological symptoms.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Neck pain", [F.d("Red flags/myelopathy?"), F.a, F.b([["Yes", F.e("MRI, refer")], ["No", F.ok("Activity, exercise, analgesia")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing myelopathy as 'spondylosis'", "Permanent disability", "Check reflexes, gait, hands"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Name two signs of cervical myelopathy.", "Hand clumsiness and gait disturbance (also hyperreflexia, Hoffmann sign).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Blanpied PR, Gross AR, Elliott JM, et al. Neck pain: revision 2017. J Orthop Sports Phys Ther. 2017;47:A1-A83. <a href="https://doi.org/10.2519/jospt.2017.0302" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Stiell IG, Wells GA, Vandemheen KL, et al. The Canadian C-spine rule for radiography in alert and stable trauma patients. JAMA. 2001;286:1841-1848. <a href="https://doi.org/10.1001/jama.286.15.1841" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOIs", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
