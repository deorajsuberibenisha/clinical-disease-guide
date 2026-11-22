/* Hypertensive disorders of pregnancy: pre-eclampsia, eclampsia, HELLP */
registerPage({
id: "preeclampsia-preg",
title: "Pre-eclampsia & Eclampsia — Pregnancy",
subtitle: "Measure, classify, lower dangerous blood pressure within the hour, give magnesium sulphate, time delivery well, and watch for six weeks after birth",
age: "Pregnancy", specs: ["obg", "emerg"],
keywords: ["pre-eclampsia", "preeclampsia", "eclampsia", "hypertension in pregnancy", "gestational hypertension", "HELLP", "magnesium sulphate", "MgSO4", "Pritchard regimen", "Zuspan regimen", "labetalol", "nifedipine pregnancy", "hydralazine", "aspirin prophylaxis", "severe features", "proteinuria", "postpartum hypertension"],
related: ["htn-adult", "anaemia-preg", "dm-pregnancy", "epilepsy-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Pre-eclampsia kills mothers through stroke, fits, bleeding and organ failure, and babies through prematurity and placental failure. Most deaths are preventable with three things done well: treat severe blood pressure fast, give magnesium sulphate, and deliver at the right time.</p>
<div class="glance">
<div><h4>Pre-eclampsia</h4><p>BP 140/90 or more after 20 weeks <b>plus</b> proteinuria or organ involvement (platelets, liver, kidney, brain, lungs, placenta).</p></div>
<div><h4>Severe features</h4><ul><li>BP 160/110 or more</li><li>Headache, visual change, epigastric pain</li><li>Platelets under 100, raised liver enzymes, creatinine rise</li><li>Pulmonary oedema</li></ul></div>
<div><h4>Severe BP: within the hour</h4><p>${dr("labetalol")} IV, or ${dr("nifedipine")} oral, or ${dr("hydralazine_iv", "hydralazine IV")}. Target 140–150/90–100.</p></div>
<div><h4>Magnesium sulphate</h4><p>${dr("mgso4_obs", "MgSO₄")} 4 g IV + 10 g IM, then 5 g IM 4-hourly (STG). Check reflexes, breathing, urine.</p></div>
<div><h4>Deliver</h4><p>37 weeks; from 34 weeks advised; earlier if severe and uncontrolled, HELLP or eclampsia, after stabilising.</p></div>
<div><h4>Prevent</h4><p>${dr("aspirin")} 150 mg nightly from 12–16 weeks to 36 weeks if at risk (STG); calcium if dietary intake is low.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§11.5) gives methyldopa, hydralazine or nifedipine for chronic or gestational hypertension, an IV hydralazine infusion or IV labetalol for pre-eclampsia, the Pritchard magnesium regimen, dexamethasone for preterm babies, aspirin 150 mg prophylaxis, and referral. MgSO₄ 50% is on the NEML at NRH/RRH/DH; IV labetalol at NRH/RRH/DH. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions and who is at risk", html: `
${tbl(["Condition", "Definition"], [
["Chronic hypertension", "BP 140/90 or more before pregnancy or before 20 weeks"],
["Gestational hypertension", "New BP 140/90 or more after 20 weeks, without proteinuria or organ involvement"],
["<b>Pre-eclampsia</b>", "New hypertension after 20 weeks with proteinuria (PCR 30 mg/mmol or more, or dipstick 2+) <b>or</b> maternal organ dysfunction or uteroplacental dysfunction (ISSHP)"],
["Superimposed pre-eclampsia", "Chronic hypertension with new pre-eclampsia features"],
["<b>Eclampsia</b>", "Generalised seizures in a woman with pre-eclampsia (can occur without high BP or before diagnosis, and up to weeks after birth)"],
["HELLP syndrome", "Haemolysis, Elevated Liver enzymes, Low Platelets: a severe form"]])}
<h3>Risk factors (STG Table 11.2)</h3>
<ul><li><b>High:</b> previous pre-eclampsia, multiple pregnancy, chronic hypertension, diabetes, kidney disease, SLE or antiphospholipid syndrome.</li>
<li><b>Moderate:</b> first pregnancy, BMI over 30, family history, age 35 or more, more than 10 years since last pregnancy, previous adverse outcome.</li></ul>
<p>Hypertensive disorders complicate about 5–10% of pregnancies and are one of the leading causes of maternal death worldwide.${r(1, 2)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("A placental disease that becomes a maternal disease", [
F.s("Poor remodelling of the uterine spiral arteries in early pregnancy"), F.a,
F.s("Under-perfused, stressed placenta releases anti-angiogenic factors (sFlt-1, soluble endoglin)"), F.a,
F.s("Widespread endothelial damage in the mother"), F.a,
F.b([["Brain", F.e("Headache, visual change, seizures, stroke")], ["Liver and blood", F.e("HELLP, liver rupture, DIC")], ["Kidneys and lungs", F.e("Proteinuria, AKI, pulmonary oedema")], ["Placenta", F.e("Growth restriction, abruption, stillbirth")]]), F.a,
F.ok("Delivery of the placenta is the only cure; magnesium and BP control buy time safely")])}
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (WHO, ISSHP 2021, NICE NG133, ACOG)", "This guide"], [
["Severe hypertension, first drug", "IV hydralazine infusion 40 mg in 500 mL, titrated; IV labetalol if available", "Labetalol IV, oral nifedipine or IV hydralazine boluses, all acceptable", "Use what is available; <b>oral nifedipine 10–20 mg</b> works well where IV drugs or pumps are lacking " + LB.loc()],
["Labetalol maximum", "220 mg", "ACOG 300 mg; NEMF up to 300 mg cumulative", "220–300 mg; switch drugs if not controlled"],
["Magnesium regimen", "Pritchard (IV + IM)", "Pritchard or Zuspan (IV infusion) equally effective", "Either; IM when infusion pumps or monitoring are limited"],
["Aspirin", "150 mg from 12–16 weeks to 36 weeks", "75–162 mg; ISSHP/ASPRE 150 mg at night", "150 mg at night, as STG"],
["Calcium", "Not mentioned", "WHO: 1.5–2 g elemental calcium daily from 20 weeks where dietary calcium is low", "Recommend where diet is low in dairy"],
["Timing of delivery 34–37 weeks", "Refer", "Planned delivery advised from 34 weeks (reduces maternal complications)", "Discuss planned delivery from 34 weeks at a hospital with neonatal care"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Meaning", "Action"], [
["Raised BP on routine check", "Often the only sign", "Repeat after 15 minutes; urine protein"],
["Headache, blurred vision, flashing lights", "Cerebral involvement", "Severe feature: magnesium"],
["Epigastric or right upper pain, vomiting", "Liver swelling, HELLP", "Bloods; do not call it heartburn"],
["Sudden swelling of face and hands", "Common in pregnancy; supportive only", "Not diagnostic alone"],
["Breathlessness", "Pulmonary oedema", "Oxygen, furosemide, senior review"],
["Reduced fetal movements, small baby", "Placental insufficiency", "Fetal assessment"],
["Seizure", "Eclampsia", "ABC, left lateral, magnesium"]])}
${box("red", "Danger signs — act now", `<ul><li>BP 160/110 or more</li><li>Severe headache, visual disturbance, confusion</li><li>Epigastric pain, vomiting</li><li>Breathlessness, SpO₂ under 95%</li><li>Seizure</li><li>Vaginal bleeding with abdominal pain (abruption)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 22-year-old woman in her first pregnancy, 35 weeks, comes to a district hospital in Mongar with a headache and blurred vision since morning. BP 166/112, then 162/108 fifteen minutes later; urine protein 3+; brisk reflexes. <b>This is pre-eclampsia with severe features</b>: new hypertension after 20 weeks, heavy proteinuria, severe-range BP and cerebral symptoms in a first pregnancy. She needs magnesium sulphate, BP lowered within the hour, bloods, fetal monitoring, and delivery once stable, at a hospital with neonatal care.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Chronic hypertension", "High BP before 20 weeks", "New proteinuria, organ signs", "Booking BP"],
["Epilepsy", "Known epilepsy, normal BP", "Hypertension, proteinuria", "History; treat as eclampsia if in doubt"],
["Cerebral venous thrombosis, stroke", "Focal signs, persistent headache", "—", "CT or MRI"],
["Acute fatty liver of pregnancy", "Low glucose, jaundice, coagulopathy", "—", "Glucose, clotting, liver tests"],
["Thrombotic thrombocytopenic purpura, haemolytic uraemic syndrome", "Severe low platelets, kidney failure", "—", "Blood film, specialist"],
["Gastritis, cholecystitis", "Epigastric pain without hypertension", "High BP, proteinuria", "BP, bloods"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["BP (correct cuff, seated, repeated)", "Diagnosis and severity", "Severe range: repeat within 15 minutes", "Essential"],
["<b>Urine protein</b> (dipstick; PCR if available)", "Diagnosis", "Dipstick 2+ or PCR 30 mg/mmol or more", "Essential"],
["<b>Platelets, haemoglobin</b>", "HELLP", "Platelets under 100 = severe", "Essential"],
["<b>Creatinine, ALT/AST</b>", "Kidney and liver involvement", "Creatinine over 90 µmol/L, ALT over 70 = severe", "Essential"],
["LDH, blood film, bilirubin", "Haemolysis", "—", "If HELLP suspected"],
["Clotting, group and save", "Before delivery or anaesthesia", "—", "If severe"],
["Fetal heart rate, growth ultrasound, Doppler", "Placental function", "STG: document fetal heart rate", "Essential"],
["sFlt-1/PlGF ratio", "Rules out pre-eclampsia for 1 week if low", "Not available in most settings", "Optional"]])}
` },

{ id: "staging", title: "Classify and act: tools", html: `
<div class="calc" data-calc="pecheck"></div>
<div class="calc" data-calc="mgso4"></div>
<h3>Refer</h3>
<ul><li><b>Immediately</b> (from BHU, PHC or any hospital without obstetric and neonatal care): pre-eclampsia with severe features, eclampsia, HELLP — after the magnesium loading dose, BP control and (if under 34 weeks) the first steroid dose, with a health worker and the MgSO₄ chart.</li><li>Gestational hypertension not controlled within 3 days, or any symptom of pre-eclampsia (STG).</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Gestational or chronic hypertension (no pre-eclampsia)</h3>
<ul><li>Treat BP of 140/90 or more to about 135/85 (CHAP trial; ISSHP): ${dr("nifedipine")} (retard) 20 mg twice daily, ${dr("labetalol")} 100–200 mg twice or three times daily, or ${dr("methyldopa")} 250 mg twice daily, increasing as needed (STG options).</li>
<li>Stop ACE inhibitors, ARBs and statins in pregnancy.</li>
<li>Urine protein and BP weekly (STG: BP after 3 days at first); fetal growth scans; teach the danger signs.</li></ul>

<h3>B. Pre-eclampsia</h3>
<ol><li><b>Admit</b> (STG); BP every 15–30 minutes while severe, then hourly; fluid balance; avoid fluid overload (limit IV fluid to about 80 mL/hour unless bleeding).</li>
<li><b>Severe BP (160/110 or more):</b> lower within 30–60 minutes to 140–150/90–100 with ${dr("labetalol")} 20 mg IV, then 40, 80, 80 mg every 10–30 minutes (max 220–300 mg), <b>or</b> ${dr("nifedipine")} 10–20 mg orally, repeated after 30 minutes, <b>or</b> ${dr("hydralazine_iv", "hydralazine")} 5–10 mg IV slowly every 20–30 minutes (STG infusion: 40 mg in 500 mL saline at 10 drops/min, increasing by 10 drops/min every 30 minutes until BP is 140/90).${r(3, 4)}</li>
<li><b>Magnesium sulphate</b> for severe features (and in labour or before caesarean in pre-eclampsia): ${dr("mgso4_obs", "MgSO₄")} Pritchard (STG) or Zuspan regimen; continue 24 hours after delivery or the last fit.</li>
<li><b>Steroids</b> if 24–34 weeks (WHO up to 34+6): ${dr("dexamethasone")} 6 mg IM every 12 hours × 4 (STG).</li>
<li><b>Delivery:</b> at 37 weeks for non-severe disease; planned delivery is advised from 34 weeks; before 34 weeks, expectant care at a tertiary centre unless there are indications to deliver. Vaginal birth is often possible; caesarean for usual obstetric reasons.</li>
<li><b>Deliver promptly after stabilising</b> (any gestation) for eclampsia, HELLP, pulmonary oedema, uncontrollable BP, rising creatinine, abruption or fetal compromise.</li></ol>

<h3>C. Eclampsia</h3>
<ul><li>Call for help; ABC; left lateral position; protect from injury; oxygen; do not leave her alone.</li>
<li>${dr("mgso4_obs", "MgSO₄")} loading dose (STG Pritchard: 4 g IV over 5 minutes + 5 g IM each buttock); recurrent fit: 2 g IV over 5 minutes. Diazepam only if magnesium is not available.</li>
<li>Control severe BP; deliver once the mother is stable.</li></ul>

<h3>D. After delivery</h3>
<ul><li>Magnesium for 24 hours; BP 4-hourly; risk of eclampsia, stroke and pulmonary oedema continues for days and up to 6 weeks.</li>
<li>Postnatal antihypertensives: nifedipine, labetalol or enalapril (safe in breastfeeding); reduce as BP falls.</li>
<li>Review at 6 weeks: BP, urine protein; explain lifelong cardiovascular risk and recurrence risk; aspirin in the next pregnancy.</li></ul>

<h3>E. Prevention</h3>
<ul><li>${dr("aspirin")} 150 mg at night from 12–16 weeks until 36 weeks if one high-risk or two moderate-risk factors (STG).</li>
<li>Calcium 1.5–2 g daily from 20 weeks where dietary calcium is low (WHO).</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("labetalol"), "IV 20 → 40 → 80 → 80 mg every 10–30 min (max 220–300 mg); oral 100–400 mg 2–3 times daily", "Avoid in asthma"],
[dr("nifedipine"), "Acute: 10–20 mg orally (immediate release), repeat at 30 min; maintenance retard 20–40 mg twice daily", "Do not give sublingually"],
[dr("hydralazine_iv"), "5–10 mg IV every 20–30 min; or STG infusion 40 mg/500 mL titrated", "Tachycardia, headache"],
[dr("methyldopa"), "250 mg twice daily, up to 1 g three times daily", "Slow onset; depression postpartum"],
[dr("mgso4_obs"), "4 g IV + 10 g IM, then 5 g IM 4-hourly; or 4 g IV then 1 g/h", "Reflexes, RR ≥12, urine ≥100 mL/4 h"],
[dr("calcium_gluconate"), "10%, 10 mL (1 g) IV over 10 min", "Magnesium toxicity antidote"],
[dr("dexamethasone"), "6 mg IM 12-hourly × 4", "24–34 weeks"],
[dr("aspirin"), "150 mg at night, 12–16 to 36 weeks", "Prevention"]])}
` },

{ id: "populations", title: "Women with other conditions", html: `
<ul><li><b>Diabetes, kidney disease, SLE:</b> high risk; aspirin, closer monitoring; see <a href="#/d/dm-pregnancy">diabetes in pregnancy</a>.</li>
<li><b>Asthma:</b> avoid labetalol; use nifedipine or hydralazine.</li>
<li><b>Severe anaemia:</b> smaller fluid volumes; see <a href="#/d/anaemia-preg">anaemia in pregnancy</a>.</li>
<li><b>Adolescents and first pregnancies:</b> higher risk; early antenatal booking.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Seizure in labour at a BHU", "MgSO₄ loading dose (IM component can be given without a pump), left lateral, call ambulance", "Magnesium is the life-saver"],
["Breathing 10/min on magnesium", "Stop magnesium, ventilate, calcium gluconate 1 g IV", "Magnesium toxicity"],
["BP still 170/115 after maximum labetalol", "Add or switch to nifedipine or hydralazine", "Stroke risk"],
["Fit 5 days after birth", "Treat as eclampsia", "Postpartum eclampsia occurs"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Stroke (haemorrhage)", "Severe headache, focal signs", "Prevent with urgent BP control; CT"],
["Eclampsia", "Seizures", "Magnesium, delivery"],
["HELLP, liver haematoma or rupture", "Epigastric pain, low platelets, shock", "Delivery, blood products, surgery"],
["Pulmonary oedema", "Breathlessness, crackles", "Oxygen, furosemide, fluid restriction"],
["AKI", "Oliguria, rising creatinine", "Fluid balance; avoid nephrotoxins"],
["Placental abruption, growth restriction, stillbirth", "Bleeding, pain, small baby", "Fetal monitoring, delivery"]])}
<p>Women who have had pre-eclampsia have about twice the lifetime risk of heart disease and stroke, and a higher risk of chronic hypertension and kidney disease: they need yearly BP checks (STG: every 6–12 months).</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "What to tell the woman", `<ul><li>"Your blood pressure problem comes from the placenta. Delivery cures it, but the risk continues for a few weeks after birth."</li><li>Next pregnancy: book early and start aspirin by 12–16 weeks.</li><li>Have your blood pressure checked every year for life.</li></ul>`)}
${box("red", "Come to hospital at once if", `<ul><li>Severe headache, blurred vision or flashing lights</li><li>Pain under the ribs or in the upper tummy, or vomiting</li><li>Sudden swelling of face or hands, breathlessness</li><li>Fits, bleeding, or the baby moving less</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Urine dipstick", src: "images/urine-strip-multi.jpg", mod: "Photograph", ctx: "Urine testing", loc: "Test strip pads", find: "Multi-reagent strip including protein", interp: "Protein 2+ or more with new hypertension after 20 weeks supports pre-eclampsia; confirm with PCR if available", by: "J3D3", page: "https://commons.wikimedia.org/wiki/File:Comp.Urine.Test.Strip.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Pitting oedema", src: "images/pitting-oedema.jpg", mod: "Clinical photograph", ctx: "Leg oedema", loc: "Lower leg", find: "A pit remains after pressure", signs: "Pitting oedema", interp: "Oedema is common in normal pregnancy and is not a diagnostic criterion; sudden facial or hand swelling with high BP needs assessment", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Pitting_Edema2008.jpg", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Raised blood pressure after 20 weeks", [
F.s("BP 140/90 or more on two readings"), F.a,
F.s("Urine protein, symptoms, platelets, creatinine, ALT, fetal assessment"), F.a,
F.d("Pre-eclampsia? Severe features?"), F.a,
F.b([["Gestational HTN", F.s("Oral antihypertensive; weekly review")], ["Pre-eclampsia", F.s("Admit; oral treatment; plan delivery by 37 wk (from 34 wk)")], ["Severe / eclampsia", F.e("MgSO₄ + BP within 1 h + steroids if <34 wk; deliver when stable")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Severe hypertension in pregnancy is an emergency</b>; treat within the hour.</li>
<li>Magnesium, not diazepam or phenytoin, for eclampsia.</li>
<li>Eclampsia can occur before any BP rise is recorded, and after birth.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for proteinuria before treating severe BP", "Stroke", "Treat BP 160/110 regardless"],
["Lowering BP too fast or too low", "Fetal distress", "Aim 140–150/90–100"],
["Running IV fluids freely", "Pulmonary oedema", "Restrict to about 80 mL/hour"],
["Stopping magnesium at delivery", "Postpartum eclampsia", "Continue 24 hours"],
["Discharging without 6-week review", "Missed chronic hypertension", "Postnatal BP plan"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Define pre-eclampsia.", "New hypertension (140/90 or more) after 20 weeks with proteinuria or maternal organ or uteroplacental dysfunction.")}
${qa("Intern/MO", "What is the STG magnesium loading dose?", "4 g of 20% IV over 5 minutes plus 5 g of 50% deep IM in each buttock, then 5 g IM every 4 hours.")}
${qa("Intern/MO", "What three checks come before each magnesium dose?", "Knee reflexes present, breathing 12 or more per minute, urine 100 mL or more in 4 hours.")}
${qa("Intern/MO", "Antidote for magnesium toxicity?", "Calcium gluconate 10%, 10 mL (1 g) IV over 10 minutes.")}
${qa("Specialist", "Who should take aspirin, and when?", "One high-risk or two moderate-risk factors: 150 mg at night from 12–16 weeks until 36 weeks.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Magee LA, Brown MA, Hall DR et al. The 2021 International Society for the Study of Hypertension in Pregnancy classification, diagnosis and management recommendations for international practice. <i>Pregnancy Hypertens</i> 2022;27:148–169. <a href="https://doi.org/10.1016/j.preghy.2021.09.008" target="_blank" rel="noopener">doi:10.1016/j.preghy.2021.09.008</a></li>
<li id="ref-2">World Health Organization. WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia. Geneva: WHO; 2011 (with 2018 and 2020 updates). <a href="https://www.who.int/publications/i/item/9789241548335" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">National Institute for Health and Care Excellence. Hypertension in pregnancy: diagnosis and management (NG133). 2019, updated 2023. <a href="https://www.nice.org.uk/guidance/ng133" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-4">Tita AT, Szychowski JM, Boggess K et al. Treatment for mild chronic hypertension during pregnancy (CHAP). <i>N Engl J Med</i> 2022;386:1781–1792. <a href="https://doi.org/10.1056/NEJMoa2201295" target="_blank" rel="noopener">doi:10.1056/NEJMoa2201295</a></li>
<li id="ref-5">Altman D, Carroli G, Duley L et al. Do women with pre-eclampsia, and their babies, benefit from magnesium sulphate? The Magpie Trial. <i>Lancet</i> 2002;359:1877–1890. <a href="https://doi.org/10.1016/S0140-6736(02)08778-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(02)08778-0</a></li>
<li id="ref-6">Rolnik DL, Wright D, Poon LC et al. Aspirin versus placebo in pregnancies at high risk for preterm preeclampsia (ASPRE). <i>N Engl J Med</i> 2017;377:613–622. <a href="https://doi.org/10.1056/NEJMoa1704559" target="_blank" rel="noopener">doi:10.1056/NEJMoa1704559</a></li>
<li id="ref-7">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §11.5 Hypertensive disorders in pregnancy; National Essential Medicines List and Formulary 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='pass'>Verified</span>", "STG §11.5 read directly, including the MgSO₄ protocol"],
["Definitions and thresholds", "<span class='pass'>Checked</span>", "ISSHP 2021, NICE NG133, WHO"],
["Drug doses", "<span class='pass'>Checked</span>", "STG, NEMF, NICE"],
["Timing of delivery 34–37 weeks", "<span class='flag'>Panel view</span>", "Based on PHOENIX and HYPITAT-II; local neonatal capacity matters"]], "qc")}
` }
]
});
