/* Frozen shoulder and rotator cuff problems (JOSPT 2013, BESS/BOA 2016) */
registerPage({
id: "shoulder-adult",
title: "Frozen Shoulder & Rotator Cuff Problems",
subtitle: "Tell frozen shoulder (loss of passive external rotation) from rotator cuff disease (painful arc, weak but full passive movement), exercise both, and refer acute traumatic cuff tears early",
age: "Adults", specs: ["ortho", "rehab", "endo"],
keywords: ["frozen shoulder", "adhesive capsulitis", "rotator cuff", "subacromial pain", "impingement", "rotator cuff tear", "painful arc", "corticosteroid injection", "diabetes shoulder"],
related: ["neckpain-adult", "oa-adult", "dm-adult", "fracture-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Frozen shoulder</h4><p>Pain then stiffness; passive external rotation lost; diabetes common.</p></div>
<div><h4>Cuff</h4><p>Painful arc 60–120°, weakness, passive movement full.</p></div>
<div><h4>Treat</h4><p>Exercise/physiotherapy, analgesia, steroid injection.</p></div>
<div><h4>Refer</h4><p>Acute traumatic tear, locked dislocation, red flags.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Physiotherapy at hospitals; intra-articular steroid preparations (triamcinolone/methylprednisolone acetate) are not on the NEML — check local supply. Frozen shoulder is common in people with diabetes — screen glucose. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Comparison", html: `${tbl(["Feature", "Frozen shoulder", "Rotator cuff"], [["Age", "40–60", "Over 35 (tears over 60)"], ["Passive ER", "Markedly reduced", "Normal"], ["Painful arc", "No", "Yes"], ["Weakness", "No (pain-limited)", "Yes in tears"], ["X-ray", "Normal", "Normal/high-riding humerus in big tears"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Frozen shoulder", [F.s("Capsular inflammation and fibrosis"), F.a, F.s("Freezing (pain) → frozen (stiff) → thawing"), F.e("Recovery over 1–3 years")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Option", "Evidence", "This guide"], [["Early steroid injection", "Delayed", "Early injection speeds pain relief", "Early if available " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<h3>The typical patient</h3><p>A 52-year-old woman with diabetes in Bumthang has 4 months of shoulder pain now with stiffness; cannot reach behind her back; passive external rotation 20% of the other side; X-ray normal. <b>Frozen shoulder</b>: analgesia, home stretching exercises, physiotherapy, steroid injection if available, optimise glucose.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Glenohumeral OA", "X-ray changes, crepitus"], ["Posterior dislocation", "After seizure/electric shock, locked internal rotation"], ["Referred (neck, cardiac, diaphragm)", "Shoulder exam normal"], ["Polymyalgia rheumatica", "Bilateral, older, raised ESR"]])}` },
{ id: "invest", title: "Investigations", html: `<p>X-ray (exclude OA, dislocation, calcific tendinitis); glucose/HbA1c; ultrasound for cuff tears.</p>` },
{ id: "staging", title: "Stages of frozen shoulder", html: `${tbl(["Stage", "Duration", "Focus"], [["Freezing (painful)", "2–9 months", "Pain relief, gentle mobility, injection"], ["Frozen (stiff)", "4–12 months", "Stretching"], ["Thawing", "5–24 months", "Strengthening"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Explain natural history.</li><li>Analgesia; NSAID short courses.</li><li>Physiotherapy/home exercises (pendulum, wall walking, stretches).</li><li>Intra-articular or subacromial steroid injection.</li><li>Refractory: hydrodilatation, manipulation, arthroscopic release.</li><li>Cuff tear acute traumatic in younger/active: early surgical referral (within weeks).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("paracetamol"), "1 g QDS", "Pain"], [dr("ibuprofen"), "400 mg TDS", "Short course"], [dr("prednisolone"), "Short oral course (specialist)", "If injection unavailable"]])}` },
{ id: "populations", title: "Diabetes", html: `<p>More frequent, bilateral, slower to recover.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Shoulder pain after a seizure, arm held in", "Posterior dislocation — X-ray axillary view"]])}` },
{ id: "complications", title: "Complications", html: `<p>Persistent stiffness; cuff tear progression; disability.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Every 6–8 weeks; refer if no progress at 3–6 months.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Shoulder pain", [F.d("Passive ER lost?"), F.a, F.b([["Yes", F.e("Frozen shoulder (X-ray normal)")], ["No", F.ok("Cuff/subacromial pain")]]), F.a, F.ok("Exercise, analgesia, injection")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing posterior dislocation", "Chronic disability", "Axillary view"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Key sign of frozen shoulder?", "Loss of passive external rotation.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Kelley MJ, Shaffer MA, Kuhn JE, et al. Shoulder pain and mobility deficits: adhesive capsulitis. J Orthop Sports Phys Ther. 2013;43:A1-A31. <a href="https://doi.org/10.2519/jospt.2013.0302" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
