/* Hypothyroidism and hyperthyroidism — adults */
registerPage({
id: "thyroid-adult",
title: "Thyroid Disease: Hypothyroidism & Hyperthyroidism — Adults",
subtitle: "Read the TSH first, replace thyroxine gently, control Graves' disease safely with carbimazole, recognise thyroid storm and myxoedema coma, and manage thyroid disease in pregnancy",
age: "Adults", specs: ["endo", "medicine"],
keywords: ["thyroid", "hypothyroidism", "hyperthyroidism", "thyrotoxicosis", "Graves disease", "Hashimoto", "goitre", "goiter", "thyroid nodule", "TSH", "free T4", "levothyroxine", "thyroxine", "carbimazole", "propylthiouracil", "thyroid storm", "myxoedema coma", "subclinical hypothyroidism", "thyroiditis", "thyroid pregnancy", "iodine deficiency"],
related: ["thyroid-child", "anaemia-adult", "hf-adult", "preeclampsia-preg"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Thyroid disease is common, easy to miss and very treatable. Almost every decision starts with one test, the TSH, read alongside free T4 and the patient in front of you.</p>
<div class="glance">
<div><h4>Hypothyroid</h4><ul><li>Tired, cold, constipated, weight gain</li><li>Dry skin, slow pulse, heavy periods</li><li><b>High TSH, low free T4</b></li></ul></div>
<div><h4>Hyperthyroid</h4><ul><li>Weight loss, heat intolerance, tremor</li><li>Palpitations, AF, diarrhoea</li><li><b>Low TSH, high free T4/T3</b></li></ul></div>
<div><h4>Treat hypothyroidism</h4><p>${dr("thyroxine")} 1.6 microgram/kg/day; <b>25 microgram</b> if 60+ or heart disease. Recheck TSH at 6–8 weeks.</p></div>
<div><h4>Treat Graves'</h4><p>${dr("carbimazole")} 20–40 mg daily, then 5–15 mg for 12–18 months; ${dr("propranolol")} for symptoms.</p></div>
<div><h4>Warn every patient</h4><p>Carbimazole: <b>sore throat or fever → stop and get a blood count</b> (agranulocytosis).</p></div>
<div><h4>Emergencies</h4><p>Thyroid storm (Burch–Wartofsky 45+) and myxoedema coma: HDU/ICU.</p></div>
<div><h4>Pregnancy</h4><p>Increase thyroxine by 25–30% at once; avoid carbimazole in the first trimester.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §5.1–5.2 lists carbimazole 15–60 mg daily, propranolol and thyroxine replacement (no dose given). NEML: thyroxine 25 and 50 microgram, carbimazole 5 mg and propranolol 40 mg (to district hospitals). Propylthiouracil, IV thyroxine and Lugol's iodine are not listed. Bhutan was once a severe iodine-deficiency country; universal salt iodisation made goitre from iodine lack rare, so a new goitre deserves investigation. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes and who is at risk", html: `
${tbl(["Condition", "Main causes", "Clues"], [
["<b>Primary hypothyroidism</b>", "Hashimoto's thyroiditis (autoimmune), after radioiodine or thyroidectomy, drugs (amiodarone, lithium), iodine deficiency", "Women, family history, other autoimmune disease"],
["Central (secondary) hypothyroidism", "Pituitary or hypothalamic disease, postpartum pituitary necrosis (Sheehan)", "Low free T4 with low or normal TSH"],
["<b>Graves' disease</b>", "TSH-receptor antibodies", "Diffuse goitre, eye signs, young women"],
["Toxic multinodular goitre, toxic adenoma", "Autonomous nodules", "Older patients, lumpy goitre"],
["Thyroiditis (subacute, silent, postpartum)", "Viral or autoimmune; transient", "Painful tender gland (subacute) or 1–6 months after delivery"],
["Excess thyroxine or iodine", "Over-replacement, amiodarone, contrast", "History"]])}
<p>Hypothyroidism affects about 1 in 20 people at some point, mostly women; overt hyperthyroidism about 1 in 100. Both are commoner with age and in women.</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("The thyroid axis", [
F.s("Hypothalamus (TRH) → pituitary (TSH) → thyroid (T4 mostly, some T3)"), F.a,
F.s("T4 converted to active T3 in tissues; T3 sets metabolic rate, heart rate, gut speed, heat production"), F.a,
F.b([["Too little hormone", F.s("TSH rises (primary) → slow metabolism, myxoedema, high cholesterol, heavy periods")], ["Too much hormone", F.s("TSH falls to near zero → fast metabolism, tremor, AF, bone loss")]]), F.a,
F.ok("Because the pituitary is so sensitive, TSH changes before T4 does: the best screening test")])}
<p>In Graves' disease antibodies stimulate the TSH receptor, causing goitre, thyrotoxicosis and, separately, inflammation behind the eyes. In Hashimoto's disease the gland is slowly destroyed.${r(1, 2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (ATA, ETA, NICE)", "This guide"], [
["Propranolol dose", "40 mg once daily", "10–40 mg three or four times daily for symptoms", "<b>Propranolol 10–40 mg three or four times daily</b>; once-daily dosing rarely controls the heart rate " + LB.loc()],
["Thyroxine dose", "Not stated", "1.6 microgram/kg in the young; 25–50 microgram start if older or cardiac", "As international"],
["Carbimazole", "15–60 mg daily in divided doses", "20–40 mg once daily is enough for most; titrate down; 12–18 months", "As international; once daily improves adherence"],
["First-trimester hyperthyroidism", "Not covered", "PTU in the first trimester, carbimazole later", "PTU is not on the NEML: lowest effective carbimazole dose, or refer; avoid weeks 6–10 if at all possible"],
["Subclinical hypothyroidism", "Not covered", "Treat if TSH over 10, or in pregnancy or planning pregnancy", "As international"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["System", "Hypothyroidism", "Hyperthyroidism"], [
["General", "Tiredness, weight gain, cold intolerance", "Weight loss despite appetite, heat intolerance, sweating"],
["Heart", "Slow pulse, pericardial effusion, raised cholesterol", "<b>Fast pulse, atrial fibrillation</b>, heart failure"],
["Nerves and mood", "Slow thinking, depression, carpal tunnel, slow-relaxing reflexes", "Anxiety, irritability, tremor, brisk reflexes, insomnia"],
["Gut", "Constipation", "Frequent stools"],
["Skin and hair", "Dry skin, puffy face, hair loss", "Warm moist skin, hair thinning"],
["Periods and fertility", "Heavy periods, infertility", "Light periods, infertility"],
["Neck and eyes", "Goitre (Hashimoto's) or none", "Goitre; Graves' eye disease (stare, lid lag, proptosis, double vision)"]])}
${box("red", "Emergencies", `<ul><li><b>Thyroid storm:</b> fever, agitation or delirium, heart rate over 140, AF, heart failure, vomiting, jaundice, often after infection, surgery or delivery.</li><li><b>Myxoedema coma:</b> drowsiness or coma, hypothermia, slow breathing, slow pulse, low sodium and glucose in an older hypothyroid patient, often in winter or after infection or sedatives.</li></ul>`)}
<h3>The typical patient</h3>
<p>A 29-year-old teacher from Paro has lost 6 kg in two months despite eating more, feels hot and anxious, and has palpitations. Pulse 118 and regular, fine tremor, a smooth enlarged thyroid with a bruit, and staring eyes. TSH under 0.01, free T4 three times normal. <b>This is Graves' disease</b>: young woman, diffuse goitre with a bruit and eye signs, and biochemical thyrotoxicosis. She needs propranolol, carbimazole with written agranulocytosis advice, a pregnancy test and contraception advice, and TFTs in 4–6 weeks.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Depression, chronic fatigue", "Low mood, normal exam", "Goitre, bradycardia", "TSH"],
["Anaemia, CKD, heart failure", "Tiredness, oedema", "—", "FBC, creatinine, echo"],
["Anxiety, panic disorder", "Episodic symptoms", "Persistent tachycardia, weight loss, goitre", "TSH"],
["Diabetes, TB, cancer (weight loss)", "Thirst, cough, night sweats", "—", "Glucose, chest X-ray"],
["Sick euthyroid (non-thyroidal illness)", "Acutely ill patient, low T3, mildly abnormal TSH", "—", "Repeat TFTs after recovery"],
["Pregnancy (hyperemesis)", "Low TSH in early pregnancy from hCG", "—", "Free T4, repeat after 16 weeks"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>TSH</b>", "Best single test", "High = primary hypothyroid; suppressed = thyrotoxic", "Essential"],
["Free T4 (± free T3)", "Severity; central disease", "Free T3 if TSH low with normal free T4 (T3 toxicosis)", "Essential"],
["Thyroid antibodies (TPO; TSH-receptor)", "Hashimoto's; Graves'", "Not essential for management", "Optional"],
["FBC, liver tests", "Baseline before carbimazole", "—", "Essential"],
["Lipids, sodium, CK", "Hypothyroid complications", "—", "If hypothyroid"],
["ECG", "AF, bradycardia", "—", "Recommended"],
["Pregnancy test", "Changes drug choice", "Women of childbearing age", "Essential"],
["Thyroid ultrasound", "Nodules, goitre", "Fine-needle aspiration for suspicious nodules", "Selected"],
["Technetium or radioiodine scan", "Graves' vs nodule vs thyroiditis", "Referral (outside Bhutan if unavailable)", "Selected"]])}
${tbl(["TSH", "Free T4", "Meaning"], [
["High", "Low", "Primary hypothyroidism"], ["High", "Normal", "Subclinical hypothyroidism"], ["Low", "High", "Hyperthyroidism"], ["Low", "Normal", "Subclinical hyperthyroidism or T3 toxicosis (check T3)"], ["Low or normal", "Low", "Central hypothyroidism, or non-thyroidal illness"]])}
` },

{ id: "staging", title: "Severity scores and tools", html: `
<div class="calc" data-calc="thyroxdose"></div>
<div class="calc" data-calc="bws"></div>
<h3>Refer</h3>
<ul><li><b>Immediately:</b> thyroid storm, myxoedema coma, agranulocytosis (neutrophils under 0.5).</li><li><b>Specialist:</b> Graves' eye disease with pain, double vision or reduced vision; relapse after a course of carbimazole (radioiodine or surgery); suspicious nodule; thyroid disease in pregnancy.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Hypothyroidism</h3>
<ul><li>${dr("thyroxine")} once daily on an empty stomach: full dose (about 1.6 microgram/kg) if young and well; <b>25 microgram</b> if 60 or over or with heart disease, increasing by 25 microgram every 4–6 weeks.</li>
<li>Check TSH 6–8 weeks after each change; aim for TSH in the normal range (0.4–4 mU/L); once stable, yearly.</li>
<li><b>Subclinical hypothyroidism:</b> treat if TSH over 10, symptoms with positive antibodies, pregnancy or planning pregnancy; otherwise repeat in 6–12 months.</li>
<li>Suspected adrenal insufficiency or pituitary disease: start hydrocortisone first.</li></ul>

<h3>B. Hyperthyroidism</h3>
<ol><li><b>Symptoms:</b> ${dr("propranolol")} 10–40 mg three or four times daily (diltiazem if asthma).</li>
<li><b>Graves':</b> ${dr("carbimazole")} 20–40 mg daily until euthyroid (4–8 weeks), then reduce to 5–15 mg for 12–18 months. About half relapse; relapse means radioiodine or surgery (refer).</li>
<li><b>Toxic nodular goitre:</b> carbimazole controls it but rarely cures it; definitive treatment is radioiodine or surgery.</li>
<li><b>Thyroiditis:</b> beta-blocker only (no carbimazole); painful subacute thyroiditis: NSAID or prednisolone. Watch for a later hypothyroid phase.</li>
<li><b>Safety:</b> written advice to stop carbimazole and get an urgent FBC with sore throat, mouth ulcers or fever.</li></ol>

<h3>C. Thyroid storm</h3>
<ul><li>HDU/ICU; fluids, cooling, ${dr("paracetamol")} (not aspirin).</li>
<li>${dr("propranolol")} 60–80 mg orally every 4 hours; ${dr("carbimazole")} 20–30 mg every 6 hours (PTU if available); ${dr("hydrocortisone_iv", "hydrocortisone")} 100 mg IV every 8 hours; iodine 1 hour after the thionamide where available; treat the trigger (infection, delivery, missed tablets).${r(1)}</li></ul>

<h3>D. Myxoedema coma</h3>
<ul><li>ICU; warm slowly; support breathing; correct glucose and sodium; treat infection.</li>
<li>Hydrocortisone 100 mg IV every 8 hours <b>before</b> thyroxine; IV thyroxine is not on the NEML, so give levothyroxine 200–400 microgram by nasogastric tube as a loading dose, then 50–100 microgram daily (lower in heart disease).</li></ul>

<h3>E. Pregnancy</h3>
<ul><li>Hypothyroid women: increase thyroxine by 25–30% as soon as pregnancy is confirmed; TSH target under 2.5 mU/L in the first trimester; check every 4 weeks until 20 weeks; return to the pre-pregnancy dose after delivery.</li>
<li>Hyperthyroid women: avoid carbimazole in the first trimester if possible (embryopathy); PTU then if available; otherwise the lowest effective dose. Refer to obstetrics and medicine. Babies of mothers with Graves' need checking for neonatal thyrotoxicosis.</li>
<li>Postpartum thyroiditis is common 1–6 months after delivery.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("thyroxine"), "1.6 microgram/kg daily; 25 microgram start if older or cardiac", "Empty stomach; TSH at 6–8 weeks"],
[dr("carbimazole"), "20–40 mg daily, then 5–15 mg", "Agranulocytosis warning"],
[dr("ptu"), "50–150 mg three times daily", "Not on NEML; first trimester, storm"],
[dr("propranolol"), "10–40 mg 3–4 times daily; storm 60–80 mg 4-hourly", "Avoid in asthma"],
[dr("hydrocortisone_iv"), "100 mg IV 8-hourly", "Storm, myxoedema coma"],
[dr("paracetamol"), "1 g 6-hourly", "Fever in storm (not aspirin)"]])}
` },

{ id: "populations", title: "Older adults and other groups", html: `
<ul><li><b>Older adults:</b> start thyroxine at 25 microgram; "apathetic" thyrotoxicosis may present only with AF, weight loss or heart failure: check TSH in new AF.</li>
<li><b>Heart disease:</b> slow titration; treat angina first.</li>
<li><b>Women planning pregnancy:</b> optimise TSH before conception; contraception during carbimazole.</li></ul>
` },

{ id: "scenarios", title: "Thyroid disease with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["New atrial fibrillation", "Check TSH; anticoagulate by CHA₂DS₂-VASc", "Thyrotoxicosis is a reversible cause"],
["Amiodarone", "TFTs every 6 months", "Causes both hypo- and hyperthyroidism"],
["Lithium", "TFTs every 6 months", "Hypothyroidism, goitre"],
["Iron or calcium tablets", "Separate from thyroxine by 4 hours", "Absorption"],
["Anaemia, high cholesterol, infertility", "Check TSH", "Treatable thyroid cause"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Atrial fibrillation, heart failure", "Palpitations, breathlessness", "Beta-blocker, anticoagulation, treat thyroid"],
["Osteoporosis", "Long-standing thyrotoxicosis or over-replacement", "Correct thyroid state; bone protection"],
["Graves' eye disease", "Pain, redness, double vision, reduced vision", "Stop smoking; urgent ophthalmology if vision falls"],
["Agranulocytosis", "Sore throat, fever on carbimazole", "Stop drug, FBC, antibiotics if neutropenic fever"],
["Thyroid storm, myxoedema coma", "See above", "ICU"]])}
<p>Treated hypothyroidism has a normal outlook. Graves' disease is controlled in nearly all; about half relapse after stopping carbimazole.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Hypothyroid: TSH 6–8 weeks after changes, then yearly; lifelong treatment in most.</li>
<li>Graves': TFTs every 4–6 weeks while titrating, then every 2–3 months; review at 12–18 months to stop.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Take your thyroid tablet every morning on an empty stomach, half an hour before tea or food."</li><li>On carbimazole: "If you get a sore throat, mouth ulcers or fever, stop the tablets and get a blood test the same day."</li><li>Tell your doctor at once if you become pregnant.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fever, sore throat or mouth ulcers on carbimazole</li><li>Racing heart, confusion or high fever</li><li>Extreme drowsiness or feeling very cold (hypothyroid)</li><li>Painful red eyes or double vision</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Large goitre", src: "images/goitre-large.jpg", mod: "Historical clinical photograph", ctx: "Iodine-deficiency era (Norway)", loc: "Neck", find: "Very large, lobulated thyroid enlargement", signs: "Multinodular goitre", interp: "Iodine-deficiency goitre, once common in Bhutan; today a new goitre needs TFTs and ultrasound", by: "Martin Finborud", page: "https://commons.wikimedia.org/wiki/File:Kone_med_stor_struma.jpg", lic: "Public domain" })}
${fig({ title: "Myxoedema", src: "images/myxedema-face.jpg", mod: "Clinical photograph", ctx: "Severe untreated hypothyroidism", loc: "Face", find: "Puffy, coarse facial features with periorbital swelling", signs: "Myxoedematous facies", interp: "Long-standing hypothyroidism; responds to thyroxine over weeks to months", by: "Herbert L. Fred, MD and Hendrik A. van Dijk", page: "https://commons.wikimedia.org/wiki/File:Myxedema.jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Abnormal thyroid tests", [
F.s("TSH ± free T4"), F.a,
F.b([["TSH high", F.d("Free T4 low?"), F.b([["Yes", F.s("Overt hypothyroidism: start thyroxine")], ["No", F.s("Subclinical: treat if TSH >10, pregnancy, symptoms")]])], ["TSH low", F.d("Free T4/T3 high?"), F.b([["Yes", F.s("Thyrotoxicosis: beta-blocker; cause? Graves' → carbimazole; thyroiditis → beta-blocker only")], ["No", F.s("Subclinical or non-thyroidal illness: repeat")]])]]), F.a,
F.e("Storm or coma features → ICU")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Check TSH in every new AF, unexplained weight loss, high cholesterol or infertility.</b></li>
<li>Do not recheck TSH before 6 weeks: thyroxine takes that long to settle.</li>
<li>Hydrocortisone before thyroxine if adrenal or pituitary failure is possible.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Full-dose thyroxine in an elderly cardiac patient", "Angina, AF, infarction", "Start 25 microgram"],
["No agranulocytosis advice with carbimazole", "Fatal neutropenic sepsis", "Written and verbal advice"],
["Carbimazole for thyroiditis", "No benefit; hypothyroidism", "Confirm the cause; beta-blocker only"],
["Not increasing thyroxine in pregnancy", "Miscarriage, impaired fetal brain development", "Increase at confirmation"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Which single test best screens for thyroid disease?", "TSH.")}
${qa("Intern/MO", "What starting dose of thyroxine suits a 70-year-old with angina?", "25 microgram daily, increased by 25 microgram every 4–6 weeks.")}
${qa("Intern/MO", "What must every patient starting carbimazole be told?", "Stop it and get an urgent blood count if they develop sore throat, mouth ulcers or fever (agranulocytosis).")}
${qa("Specialist", "How should thyroxine change in pregnancy?", "Increase by about 25–30% on confirmation, aiming TSH under 2.5 mU/L in the first trimester.")}
${qa("Specialist", "What score suggests thyroid storm?", "Burch–Wartofsky 45 or more (25–44 impending).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ross DS, Burch HB, Cooper DS et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. <i>Thyroid</i> 2016;26:1343–1421. <a href="https://doi.org/10.1089/thy.2016.0229" target="_blank" rel="noopener">doi:10.1089/thy.2016.0229</a></li>
<li id="ref-2">Jonklaas J, Bianco AC, Bauer AJ et al. Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force on thyroid hormone replacement. <i>Thyroid</i> 2014;24:1670–1751. <a href="https://doi.org/10.1089/thy.2014.0028" target="_blank" rel="noopener">doi:10.1089/thy.2014.0028</a></li>
<li id="ref-3">Alexander EK, Pearce EN, Brent GA et al. 2017 Guidelines of the American Thyroid Association for the diagnosis and management of thyroid disease during pregnancy and the postpartum. <i>Thyroid</i> 2017;27:315–389. <a href="https://doi.org/10.1089/thy.2016.0457" target="_blank" rel="noopener">doi:10.1089/thy.2016.0457</a></li>
<li id="ref-4">Burch HB, Wartofsky L. Life-threatening thyrotoxicosis: thyroid storm. <i>Endocrinol Metab Clin North Am</i> 1993;22:263–277.</li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §5.1 Hyperthyroidism, §5.2 Hypothyroidism; National Essential Medicines List and Formulary 2025.</li>
<li id="ref-6">National Institute for Health and Care Excellence. Thyroid disease: assessment and management (NG145). 2019. <a href="https://www.nice.org.uk/guidance/ng145" target="_blank" rel="noopener">nice.org.uk</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and NEML content", "<span class='pass'>Verified</span>", "STG §5.1–5.2 read; NEMF entries checked"],
["Doses", "<span class='pass'>Checked</span>", "ATA 2014/2016/2017, BNF"],
["STG propranolol 40 mg once daily", "<span class='flag'>Flagged</span>", "Likely too little for rate control; guide uses divided doses"],
["Radioiodine availability in Bhutan", "<span class='flag'>Local check</span>", "Not confirmed"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY 2.0"]], "qc")}
` }
]
});
