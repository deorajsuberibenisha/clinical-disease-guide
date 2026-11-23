/* Unintentional weight loss: approach (NICE NG12, AFP 2014) */
registerPage({
id: "weightloss-adult",
title: "Unintentional Weight Loss: Approach",
subtitle: "Confirm the loss (5% or more in 6–12 months), take a full history, examine thoroughly, do simple baseline tests, and look first for cancer, TB, HIV, diabetes, thyroid disease and depression",
age: "Adults", specs: ["medicine", "gi", "onc", "psych"],
keywords: ["weight loss", "unintentional weight loss", "cachexia", "cancer", "TB", "HIV", "diabetes", "hyperthyroidism", "depression", "malabsorption", "elderly"],
related: ["lymphnode-adult", "tb-adult", "hiv-adult", "gastric-cancer-adult", "thyroid-adult", "dm-adult", "depression-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Significant</h4><p>5%+ of body weight in 6–12 months.</p></div>
<div><h4>Common causes</h4><p>Cancer, TB, HIV, diabetes, thyroid, depression, GI disease, alcohol.</p></div>
<div><h4>Baseline</h4><p>FBC, ESR/CRP, glucose, U&E, LFT, Ca, TSH, HIV, urine, CXR.</p></div>
<div><h4>Bhutan</h4><p>Low threshold for endoscopy (gastric cancer) and TB testing.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Stomach cancer, liver cancer, TB and alcohol-related liver disease are leading causes of weight loss in Bhutanese adults. Endoscopy is available at JDWNRH and regional/district hospitals with gastroenterology services. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Group", "Examples"], [["Malignancy (about a third)", "Stomach, liver, lung, oesophagus, lymphoma, colon"], ["GI", "Peptic ulcer, malabsorption, IBD, chronic pancreatitis, dental problems"], ["Infection", "TB, HIV, parasites"], ["Endocrine", "Diabetes, hyperthyroidism, adrenal insufficiency"], ["Psychiatric/social", "Depression, dementia, alcohol, poverty, isolation"], ["Organ failure", "Heart failure, COPD, CKD, cirrhosis"], ["Drugs", "Metformin, GLP-1, SSRIs, digoxin, polypharmacy"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Weight loss", [F.s("Reduced intake (appetite, dysphagia, poverty)"), F.a, F.s("Malabsorption or losses"), F.a, F.e("Increased catabolism (cancer, infection, thyroid)")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Approach A", "Approach B", "This guide"], [["Initial imaging", "Targeted", "Blanket CT", "Targeted + CXR, ultrasound " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Document weights; diet history; appetite; GI symptoms (dysphagia, vomiting, bleeding, change in bowel habit); cough, fever, night sweats; polyuria; mood; alcohol, tobacco; drugs.</li><li>Examine: nodes, thyroid, breasts, abdomen (mass, liver), rectal, skin, mental state, teeth.</li></ul><h3>The typical patient</h3><p>A 60-year-old farmer in Bumthang has lost 7 kg (11%) in 6 months with early satiety; Hb 9.5. <b>Significant weight loss with alarm features</b>: urgent upper GI endoscopy, ultrasound abdomen, chest X-ray, HIV and TB screen.</p>` },
{ id: "ddx", title: "Pitfalls", html: `${tbl(["Pitfall", "Fix"], [["Oedema hides weight loss", "Look at muscle wasting, MUAC"], ["Attributing to age", "Investigate in the elderly too"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Baseline tests (tool); add endoscopy, ultrasound, CT, colonoscopy, sputum Xpert, stool tests as guided by findings.</p>` },
{ id: "staging", title: "Weight loss tool", html: `<div class="calc" data-calc="weightloss"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Treat the cause.</li><li>Nutrition support: energy-dense meals, supplements, dietitian.</li><li>No cause found: review 1–3 months, repeat weight and targeted tests.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `<p>Depends on cause; review and stop drugs causing anorexia.</p>` },
{ id: "populations", title: "Elderly", html: `<p>Often multifactorial: depression, dementia, dentition, polypharmacy, social isolation.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Extensive tests normal", "Watchful waiting with planned review"]])}` },
{ id: "complications", title: "Complications", html: `<p>Frailty, infections, pressure ulcers, falls, higher mortality.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Monthly weights until stable.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Weight loss", [F.s("Confirm 5%+ loss"), F.a, F.s("History, exam, baseline tests"), F.a, F.d("Clue found?"), F.a, F.b([["Yes", F.e("Targeted investigation")], ["No", F.ok("Review 1–3 months")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No HIV/TB test", "Missed treatable cause", "Test all"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Definition of significant unintentional weight loss?", "5% or more of body weight in 6–12 months.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Gaddey HL, Holder K. Unintentional weight loss in older adults. Am Fam Physician. 2014;89:718-722.</li><li id="ref-2">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12), 2015, updated 2023.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Thresholds", "<span class='pass'>Checked</span>", "5% in 6–12 months"]], "qc")}` }
]
});
