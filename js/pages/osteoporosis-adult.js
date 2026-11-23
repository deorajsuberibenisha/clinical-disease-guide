/* Osteoporosis and fragility fractures (NOGG 2022, Bhutan STG 13.15) */
registerPage({
id: "osteoporosis-adult",
title: "Osteoporosis & Fragility Fractures",
subtitle: "Think osteoporosis after any fall-related fracture in an older adult: assess risk, give calcium and vitamin D, start alendronate when indicated, and prevent falls",
age: "Older adults, postmenopausal women", specs: ["ortho", "endo", "medicine", "rehab"],
keywords: ["osteoporosis", "fragility fracture", "hip fracture", "vertebral fracture", "alendronate", "bisphosphonate", "DXA", "FRAX", "falls prevention", "glucocorticoid osteoporosis", "calcium vitamin D"],
related: ["fracture-adult", "rickets-child", "ra-adult", "thyroid-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">One in three women and one in five men over 50 will have an osteoporotic fracture. A first fracture is the best predictor of the next.</p>
<div class="glance">
<div><h4>Who</h4><p>Fragility fracture, steroids, early menopause, low weight, smoking.</p></div>
<div><h4>Treat</h4><p>${dr("alendronate")} 70 mg weekly + ${dr("calcium_vitd", "calcium/vitamin D")}.</p></div>
<div><h4>Falls</h4><p>Home safety, vision, medicines review, exercise.</p></div>
<div><h4>Exclude</h4><p>Myeloma, metastases, osteomalacia.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 13.15: pain relief, refer, calcium/vitamin D/protein diet. DXA is available at JDWNRH. Alendronate 70 mg is on the NEML at NRH/RRH. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Risk factors", html: `${tbl(["Category", "Examples"], [["Non-modifiable", "Age, female, previous fracture, parental hip fracture"], ["Modifiable", "Smoking, alcohol 3+ units/day, low BMI, inactivity, low calcium/vitamin D"], ["Medical", "Glucocorticoids, RA, hyperthyroidism, early menopause, CKD, malabsorption, anticonvulsants"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Osteoporosis", [F.s("Bone resorption exceeds formation (oestrogen loss, age)"), F.a, F.s("Thin cortex, lost trabeculae"), F.e("Fracture with minimal trauma")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "NOGG 2022", "This guide"], [["Drug treatment", "Refer", "Alendronate first line by risk", "Alendronate where available " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Silent until fracture: wrist, vertebra (back pain, height loss, kyphosis), hip.</li></ul><h3>The typical patient</h3><p>A 68-year-old woman in Paro breaks her wrist tripping at home. <b>Fragility fracture</b>: treat the fracture, check calcium, vitamin D, creatinine; start alendronate 70 mg weekly with calcium/vitamin D; falls assessment.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Osteomalacia", "Bone pain, high ALP, low phosphate"], ["Myeloma", "Anaemia, high calcium, protein"], ["Metastases", "Known cancer, pain at night"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Calcium, phosphate, ALP, creatinine, TSH, vitamin D, FBC, ESR/protein electrophoresis if vertebral fracture; spine X-ray; DXA where available.</p>` },
{ id: "staging", title: "Treatment decision tool", html: `<div class="calc" data-calc="osteorisk"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Alendronate 70 mg weekly for 5 years then review.</li><li>Calcium 1000–1200 mg and vitamin D 800 IU daily.</li><li>Weight-bearing exercise, stop smoking, limit alcohol.</li><li>Falls prevention: vision, footwear, home hazards, review sedatives/antihypertensives.</li><li>Vertebral fracture pain: analgesia, short rest, early mobilisation.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("alendronate"), "70 mg weekly", "Upright 30 min"], [dr("calcium_vitd"), "1–2 tablets daily", "Adjunct"], [dr("paracetamol"), "1 g 6-hourly", "Pain"]])}` },
{ id: "populations", title: "Glucocorticoid users", html: `<p>Prednisolone 7.5 mg/day+ for 3 months+: start bone protection at the same time if age 70+ or prior fracture.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Cannot stay upright 30 min", "Avoid oral bisphosphonate; specialist alternatives"]])}` },
{ id: "complications", title: "Complications", html: `<p>Hip fracture (high mortality), kyphosis, chronic pain, loss of independence.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Adherence at 3 months; review at 5 years.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fragility fracture", [F.s("Bloods, exclude secondary causes"), F.a, F.s("Alendronate + Ca/vit D"), F.a, F.ok("Falls prevention, review 5 years")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Treating the fracture only", "Next fracture", "Bone protection"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "How should alendronate be taken?", "70 mg once weekly with a full glass of water on an empty stomach, upright for 30 minutes.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Gregson CL, Armstrong DJ, Bowden J, et al. UK clinical guideline for the prevention and treatment of osteoporosis. Arch Osteoporos. 2022;17:58. <a href="https://doi.org/10.1007/s11657-022-01061-5" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 13.15.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
