/* Obesity and overweight (Bhutan NCD screening 2024, WHO Asian BMI 2004) */
registerPage({
id: "obesity-adult",
title: "Obesity & Overweight",
subtitle: "Measure BMI and waist at every visit using Asian cut-offs, screen for diabetes, hypertension and fatty liver, and help people lose 5–10% with specific, realistic diet and activity goals",
age: "Adults (child notes)", specs: ["endo", "medicine", "ph"],
keywords: ["obesity", "overweight", "BMI", "waist circumference", "Asian BMI cut-offs", "weight loss", "lifestyle", "GLP-1", "bariatric surgery", "metabolic syndrome", "fatty liver", "sleep apnoea"],
related: ["dm-adult", "htn-adult", "lipids-adult", "pcos-adult", "oa-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Measure</h4><p>BMI (Asian: 23+ overweight, 27.5+ obese) and waist (men 90+, women 80+ cm).</p></div>
<div><h4>Screen</h4><p>BP, glucose, lipids, ALT, sleep apnoea, joints, mood.</p></div>
<div><h4>Goal</h4><p>5–10% weight loss.</p></div>
<div><h4>Plan</h4><p>Diet + 150–300 min/week activity; medicines/surgery for selected.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Overweight and obesity are rising fast in Bhutan, especially in towns; the NCD screening guideline (2024) uses BMI and waist with health education, and screens fasting glucose for BMI over 24.9 at any age. GLP-1 agonists and orlistat are not on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Classification", html: `${tbl(["Category", "WHO BMI", "Asian action points"], [["Underweight", "Under 18.5", "Under 18.5"], ["Normal", "18.5–24.9", "18.5–22.9"], ["Overweight / increased risk", "25–29.9", "23–27.4"], ["Obese / high risk", "30+", "27.5+"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Obesity", [F.s("Energy intake exceeds expenditure (diet, inactivity, sleep, stress, genes)"), F.a, F.s("Visceral fat → insulin resistance, inflammation"), F.e("Diabetes, hypertension, CVD, fatty liver, OSA, OA, cancers")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan NCD", "WHO Asian 2004", "This guide"], [["BMI thresholds", "Standard WHO", "Lower action points", "Both shown; act at 23+ " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Weight history, diet (rice portions, butter tea, fried snacks, sugary drinks, alcohol), activity, sleep, mood, medicines (steroids, antipsychotics, insulin).</li><li>Exam: BMI, waist, BP, acanthosis, signs of Cushing/hypothyroidism.</li></ul><h3>The typical patient</h3><p>A 45-year-old office worker in Thimphu, 82 kg, 162 cm (BMI 31), waist 96 cm, BP 142/90. <b>Obesity with central adiposity and hypertension</b>: target 4–8 kg loss, food diary, brisk walking 30 min daily, HbA1c, lipids, ALT; treat BP.</p>` },
{ id: "ddx", title: "Secondary causes", html: `${tbl(["Cause", "Clue"], [["Hypothyroidism", "TSH"], ["Cushing's", "Striae, proximal weakness, hypertension"], ["Drugs", "Steroids, antipsychotics, insulin"], ["PCOS", "Irregular cycles"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Fasting glucose/HbA1c, lipids, ALT, creatinine; TSH if symptoms.</p>` },
{ id: "staging", title: "BMI tool", html: `<div class="calc" data-calc="obesitycalc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Specific goals; 500–600 kcal/day deficit; plate method (half vegetables, quarter rice, quarter protein).</li><li>Activity 150–300 min/week; resistance exercise twice weekly.</li><li>Sleep and stress; limit alcohol.</li><li>Medicines (specialist): GLP-1 agonists; metformin for prediabetes.</li><li>Bariatric surgery for BMI 40+ (35+ with complications) — referral abroad.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("metformin"), "500 mg–1 g BD", "Prediabetes/diabetes"], [dr("glp1"), "Specialist", "Not on NEML"]])}` },
{ id: "populations", title: "Children", html: `<p>Use BMI-for-age centiles (WHO); family-based lifestyle change; screen for hypertension and diabetes in obese adolescents.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Weight regain", "Normal; restart, review barriers"]])}` },
{ id: "complications", title: "Complications", html: `<p>Diabetes, hypertension, CVD, stroke, OSA, fatty liver, OA, infertility, cancers, depression.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Monthly weight for 6 months, then 3-monthly.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("BMI 23+", [F.s("Waist, BP, glucose, lipids, ALT"), F.a, F.ok("5–10% loss plan, follow-up")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Using BMI 30 for Asians", "Under-recognition", "Asian cut-offs + waist"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Asian BMI action point for obesity?", "27.5 kg/m² (23 for increased risk).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. Lancet. 2004;363:157-163. <a href="https://doi.org/10.1016/S0140-6736(03)15268-3" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Guideline for community-based screening of NCDs, 2024.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
