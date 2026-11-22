/* Diabetes in pregnancy: gestational diabetes and pre-existing diabetes */
registerPage({
id: "dm-pregnancy",
title: "Diabetes in Pregnancy",
subtitle: "Gestational diabetes and pre-existing type 1 or type 2 diabetes: screening, targets, insulin, delivery and after birth",
age: "Pregnancy", specs: ["obg", "endo", "medicine"],
keywords: ["gestational diabetes", "GDM", "hyperglycaemia in pregnancy", "OGTT pregnancy", "DIPSI", "IADPSG", "diabetes pregnancy", "pregestational diabetes", "macrosomia", "neonatal hypoglycaemia", "insulin pregnancy", "metformin pregnancy"],
related: ["dm-adult", "dm-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">High glucose in pregnancy harms the baby in a continuous way: the higher the glucose, the greater the risk of a large baby, a difficult birth and a baby with low sugar after delivery. Good news: treating it, even with diet alone, reduces these problems.</p>
<div class="glance">
<div><h4>Screen</h4><p>All women: at booking if at risk, and a 75 g OGTT at <b>24–28 weeks</b>. India uses a single non-fasting 75 g test (DIPSI).</p></div>
<div><h4>Diagnose GDM (Bhutan STG)</h4><p>Fasting <b>100–125</b> mg/dL and/or 2-hour <b>140–199</b>. WHO/IADPSG: fasting ≥92, 1-h ≥180 or 2-h ≥153.</p></div>
<div><h4>Overt diabetes</h4><p>Fasting ≥126, 2-h ≥200, random ≥200 or HbA1c ≥6.5% in pregnancy: manage as pre-existing diabetes.</p></div>
<div><h4>Targets</h4><ul><li>Fasting under 95 (Bhutan &lt;105)</li><li>1-h under 140 (Bhutan &lt;155)</li><li>2-h under 120 (Bhutan &lt;126)</li></ul></div>
<div><h4>Treat</h4><p>Diet and walking after meals for 1–2 weeks; if above target: ${dr("insulin_nph", "insulin")} (preferred in Bhutan) or ${dr("metformin")}.</p></div>
<div><h4>Deliver</h4><p>38–39 weeks if well controlled; by 37 weeks if poorly controlled (Bhutan STG). Check baby's glucose.</p></div>
<div><h4>After birth</h4><p>Stop GDM treatment. OGTT at 6 weeks (and 6 months), then glucose every year: half develop type 2 diabetes within 10 years.</p></div>
</div>
<div class="calc" data-calc="gdm"></div>
` },

{ id: "overview", title: "Definitions and who is at risk", html: `
<h3>Two different situations</h3>
${tbl(["Situation", "Definition", "Why it matters"], [
["<b>Gestational diabetes (GDM)</b>", "Hyperglycaemia first recognised in pregnancy, below the thresholds for overt diabetes (usually found at 24–28 weeks)", "Mostly affects fetal growth late in pregnancy; usually resolves after birth but signals high future risk of type 2 diabetes"],
["<b>Diabetes in pregnancy</b> (overt or pre-existing)", "Known type 1 or type 2 diabetes, or glucose in the diabetes range in pregnancy (fasting ≥126, 2-h ≥200, HbA1c ≥6.5%)", "High glucose in the first trimester causes congenital malformations and miscarriage; needs pre-pregnancy planning and specialist care"]])}
<h3>How common is it?</h3>
<p>About 1 in 6 live births worldwide is affected by some form of hyperglycaemia in pregnancy (IDF), most of it GDM. Rates are higher in South Asian women, who develop GDM at younger ages and lower body weights. National Bhutanese GDM prevalence data were not found in the sources reviewed. ${LB.bt("EVIDENCE GAP")}</p>
<h3>Risk factors (Bhutan STG 2024 and international)</h3>
<ul><li>Previous GDM or a previous baby weighing 4 kg or more</li><li>BMI over 25 (South Asian women often at lower BMI)</li><li>First-degree relative with diabetes</li><li>Age over 35</li><li>Polycystic ovary syndrome</li><li>Previous unexplained stillbirth or adverse outcome</li><li>Glycosuria or known prediabetes</li></ul>
<h3>The physiology</h3>
${F.chart("How hyperglycaemia in pregnancy affects the baby", [
F.s("Placental hormones (human placental lactogen, progesterone, cortisol) → maternal <b>insulin resistance</b> from the second trimester"), F.a,
F.d("Can the mother's beta cells compensate?"), F.a,
F.b([["Yes", F.ok("Normal glucose")], ["No", F.e("Maternal hyperglycaemia (GDM)")]]), F.a,
F.s("Glucose crosses the placenta; maternal insulin does not"), F.a,
F.s("Fetal pancreas makes extra insulin (<b>fetal hyperinsulinaemia</b>)"), F.a,
F.b([["Before birth", F.e("Macrosomia, polyhydramnios, shoulder dystocia risk")], ["After birth", F.e("Neonatal hypoglycaemia, jaundice, breathing difficulty")], ["Later", F.e("Childhood obesity; maternal type 2 diabetes")]])])}
<p>From the second trimester the placenta produces hormones (human placental lactogen, progesterone, cortisol) that make the mother progressively insulin resistant, so more glucose reaches the baby. Most women simply make more insulin. Women whose beta cells cannot keep up develop GDM. Glucose crosses the placenta, but insulin does not: the baby responds with its own extra insulin, which acts as a growth hormone (macrosomia) and causes low glucose after the cord is cut.</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
<p>GDM is one of the most disputed areas in medicine. These are the main criteria in use. The calculator above shows all four for any result.</p>
${tbl(["Guideline", "Method", "GDM thresholds (mg/dL)", "Who uses it"], [
["<b>Bhutan STG 2024</b>", "75 g OGTT (fasting)", "Fasting 100–125 and/or 2-h 140–199", "Bhutan " + LB.bt() + ""],
["<b>WHO 2013 / IADPSG</b>", "75 g OGTT, one step", "Any one: fasting 92–125, 1-h ≥180, 2-h 153–199", "Most international bodies; ADA (one-step option)"],
["<b>NICE NG3</b>", "75 g OGTT", "Fasting ≥5.6 mmol/L (101) or 2-h ≥7.8 (140)", "UK"],
["<b>India DIPSI / MoHFW 2018</b>", "75 g glucose given <b>fasting or non-fasting</b>, single 2-h value", "2-h ≥140", "India " + LB.in() + ""],
["ACOG two-step", "50 g challenge then 100 g 3-h OGTT", "Carpenter–Coustan or NDDG", "USA"]])}
<p><b>Why they differ.</b> The HAPO study showed a smooth rise in risk with glucose and no clear cut-off. IADPSG chose thresholds giving a 1.75-fold risk, which diagnoses many more women (about 1 in 6). Others chose higher thresholds to avoid over-treating. DIPSI is practical (no need to come fasting, one sample) but can miss women with isolated fasting hyperglycaemia.</p>
<p><b>This guide:</b> use the <b>Bhutan STG criteria</b> in Bhutan (they are also close to NICE). Where a fasting sample is impossible, a DIPSI-style non-fasting test is acceptable for screening. ${LB.loc()}</p>
${tbl(["Glucose targets", "Fasting", "1-h after meal", "2-h after meal"], [
["Bhutan STG 2024", "Under 105", "Under 155", "Under 126"],
["ADA (and ACOG)", "Under 95", "Under 140", "Under 120"],
["NICE NG3", "Under 5.3 mmol/L (95)", "Under 7.8 (140)", "Under 6.4 (115)"]])}
<p>The international targets are lower and are what most units now aim for. Use them where hypoglycaemia can be monitored safely, otherwise the Bhutan targets. ${LB.exp("PANEL VIEW")}</p>
` },

{ id: "presentation", title: "Presentation and screening", html: `
<p>GDM almost never causes symptoms. It is found only by testing, so every pregnant woman should be tested.</p>
<h3>When to test</h3>
<ul><li><b>At booking (first visit):</b> women with risk factors, or all women in high-prevalence settings (India MoHFW tests at first visit). Fasting glucose ≥126 or HbA1c ≥6.5% at booking means overt diabetes; ICMR also treats fasting 92–125 in early pregnancy as GDM.</li>
<li><b>At 24–28 weeks:</b> 75 g OGTT for all women not already diagnosed.</li>
<li><b>Later in pregnancy:</b> if the baby is growing large, there is polyhydramnios, or glycosuria appears.</li></ul>
${box("red", "Red flags in a pregnant woman with diabetes", `<ul><li>Vomiting, abdominal pain, breathlessness: DKA can occur at only modestly raised glucose in pregnancy</li><li>Severe or recurrent hypoglycaemia (common in the first trimester with type 1 diabetes)</li><li>Reduced fetal movements</li><li>Headache, visual disturbance, high BP (pre-eclampsia is more common)</li></ul>`)}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "When"], [
["75 g OGTT (fasting, 1-h, 2-h)", "Diagnose GDM", "24–28 weeks; earlier if high risk"],
["HbA1c", "Overt diabetes at booking; pre-pregnancy control", "Booking; monthly in pre-existing diabetes"],
["Self-monitoring of glucose", "Guide treatment", "Fasting and 1- or 2-hour after each main meal; daily when on insulin"],
["Urine ACR, creatinine", "Kidney disease in pre-existing diabetes; pre-eclampsia baseline", "Booking, each trimester"],
["Retinal examination", "Retinopathy can worsen in pregnancy", "Booking and 28 weeks (pre-existing diabetes); more often if retinopathy"],
["Ultrasound", "Dating, anomaly scan (pre-existing diabetes: detailed fetal heart scan at 18–22 weeks), fetal growth and liquor", "Growth scans every 4 weeks from 28 weeks"],
["TSH", "Thyroid disease is common with type 1", "Booking"]])}
` },

{ id: "manage", title: "Management", html: `
<h3>A. Gestational diabetes</h3>
<ol>
<li><b>Medical nutrition therapy:</b> three moderate meals and two or three snacks; reduce sugary foods and large portions of white rice; more vegetables, pulses and protein. Avoid fasting (ketosis).</li>
<li><b>Walk for 15–30 minutes after meals</b> (Bhutan STG).</li>
<li>Check fasting and post-meal glucose; review after <b>1–2 weeks</b>.</li>
<li><b>If targets are not met:</b>
  <ul><li><b>Insulin</b> is the first-line medicine in Bhutan, ADA and ACOG: ${dr("insulin_nph", "NPH")} at bedtime for high fasting glucose (start about 0.1–0.2 unit/kg or 4–6 units), and ${dr("insulin_soluble", "soluble insulin")} 30 minutes before meals for high post-meal glucose (start 2–4 units). Adjust every 2–3 days. Needs rise as pregnancy advances.</li>
  <li><b>Metformin</b> (500 mg once or twice daily, up to 2,000–2,500 mg/day) is an alternative (NICE first-line drug). India MoHFW 2018 makes <b>insulin the first choice</b> and allows metformin only <b>from 20 weeks</b> (500 mg twice daily, up to 2 g/day), starting medicine if the 2-hour post-meal value stays ≥120 mg/dL after 2 weeks of diet. About half of women on metformin alone later need insulin added.</li>
  <li><b>Start insulin immediately</b> if fasting glucose is very high at diagnosis (NICE: ≥7.0 mmol/L, 126 mg/dL) or the baby is already large.</li>
  <li>Glibenclamide (glyburide) is not recommended: higher neonatal hypoglycaemia and birthweight than insulin.</li></ul></li>
<li><b>Fetal monitoring:</b> growth scans from 28–32 weeks; refer if above target, if growth is excessive, or for delivery planning.</li></ol>

<h3>B. Pre-existing type 1 or type 2 diabetes</h3>
<h4>Before pregnancy (the most important step)</h4>
<ul><li>Aim for HbA1c under 6.5% (48 mmol/mol) if safe; advise against pregnancy if HbA1c is over 10% (86 mmol/mol).</li>
<li><b>Folic acid 5 mg daily</b> from 3 months before conception until 12 weeks.</li>
<li>Stop or switch: ACE inhibitors/ARBs, statins, SGLT2 inhibitors, GLP-1 agonists, sulfonylureas and DPP-4 inhibitors. Continue or start metformin and insulin.</li>
<li>Eye and kidney assessment before conception.</li></ul>
<h4>During pregnancy</h4>
<ul><li>Insulin basal–bolus (NPH and soluble on the NEML), with frequent self-monitoring. In type 1 diabetes, expect more hypoglycaemia in the first trimester (warn the woman and family; provide glucose) and rising needs after 20 weeks.</li>
<li><b>Low-dose aspirin 75–150 mg at night from 12 weeks</b> until birth (pre-eclampsia prevention).</li>
<li>BP target about 135/85; use ${dr("labetalol")} or ${dr("nifedipine")}.</li>
<li>Monthly HbA1c; retinal checks; growth scans.</li></ul>

<h3>C. Labour and birth</h3>
${tbl(["Situation", "Timing (Bhutan STG; NICE)", "During labour"], [
["GDM, diet-controlled, normal growth", "Up to 40+6 weeks (NICE); Bhutan: 38–39 weeks if well controlled", "Monitor glucose 1–2-hourly"],
["GDM on medication, well controlled", "38–39 weeks", "Glucose 72–126 mg/dL (4–7 mmol/L); IV insulin–glucose if outside"],
["Poor control or complications", "By 37 weeks (Bhutan STG)", "Steroids for lung maturity raise glucose: increase insulin"],
["Pre-existing diabetes", "37+0 to 38+6 weeks (NICE)", "Variable-rate insulin infusion with glucose; neonatal team present"]])}

<h3>D. After birth</h3>
<ul><li><b>GDM:</b> stop insulin and metformin straight after delivery; check glucose for 24 hours to exclude persisting diabetes.</li>
<li><b>Pre-existing diabetes:</b> reduce insulin immediately to the pre-pregnancy dose (often about half the late-pregnancy dose) to avoid hypoglycaemia, especially while breastfeeding.</li>
<li><b>Baby:</b> skin-to-skin and breastfeed within 30 minutes; feed every 2–3 hours; check the baby's glucose before the second feed (2–4 hours after birth) and treat under 45 mg/dL (2.6 mmol/L) per local protocol.</li>
<li>Breastfeeding lowers the mother's later risk of type 2 diabetes and is safe with insulin and metformin.</li></ul>
` },

{ id: "drugs", title: "Medicines in pregnancy", html: `
${tbl(["Medicine", "Use in pregnancy", "Notes"], [
[dr("insulin_nph", "NPH insulin"), "First choice for fasting hyperglycaemia", "Bedtime; U-40 syringes for NEML vials"],
[dr("insulin_soluble", "Soluble insulin"), "Post-meal hyperglycaemia", "30 min before meals"],
[dr("insulin_analogue", "Detemir, aspart, lispro"), "Acceptable (private supply)", "Most pregnancy data among analogues"],
[dr("metformin"), "Alternative or add-on", "Crosses placenta; discuss long-term data"],
[dr("glipizide", "Sulfonylureas"), "Not recommended", "Neonatal hypoglycaemia"],
[dr("dapagliflozin", "SGLT2 inhibitors"), "Avoid", "Fetal kidney development"],
[dr("glp1", "GLP-1 agonists"), "Avoid", "Stop before conception"],
[dr("enalapril", "ACE inhibitors / ARBs"), "<b>Contraindicated</b>", "Fetotoxic"],
[dr("atorvastatin", "Statins"), "Stop", "Restart after breastfeeding"],
[dr("aspirin", "Low-dose aspirin"), "75–150 mg from 12 weeks in pre-existing diabetes", "Pre-eclampsia prevention"],
[dr("labetalol"), "Hypertension", "First line in pregnancy"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["For the baby", "For the mother"], [
["Large baby (macrosomia), shoulder dystocia and birth injury", "Pre-eclampsia, caesarean birth"],
["Neonatal hypoglycaemia, jaundice, breathing difficulty", "Hypoglycaemia on insulin; DKA (pre-existing)"],
["Congenital malformations and miscarriage (pre-existing diabetes with high early glucose)", "Worsening retinopathy and nephropathy (pre-existing)"],
["Stillbirth (poorly controlled)", "<b>Type 2 diabetes later</b>: about 50% within 5–10 years after GDM"],
["Childhood obesity and later diabetes", "Cardiovascular disease later in life"]])}
` },

{ id: "followup", title: "Follow-up and prevention", html: `
${tbl(["When", "What"], [
["6 weeks after birth (Bhutan STG; ADA 4–12 weeks)", "75 g OGTT (NICE: fasting glucose 6–13 weeks or HbA1c from 13 weeks)"],
["6 months (Bhutan STG)", "Repeat OGTT"],
["Every year", "Fasting glucose or HbA1c for life; BP; weight"],
["Before the next pregnancy", "Early testing; preconception advice"]])}
${box("green", "What to tell her", `<ul><li>\"Gestational diabetes is common and treatable. It is not your fault, and controlling it protects your baby.\"</li><li>Walk after meals and follow the meal plan.</li><li>Insulin does not harm the baby; it does not cross the placenta.</li><li>Breastfeed: it helps both of you.</li><li>Get your glucose checked after delivery and every year: you can prevent or delay type 2 diabetes with weight control and activity.</li></ul>`)}
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("GDM: from test to delivery", [
F.s("Booking: risk factors? → early test. Everyone: 75 g OGTT at 24–28 weeks"), F.a,
F.d("Fasting ≥126 or 2-h ≥200 (or HbA1c ≥6.5)?"), F.a,
F.b([["Yes", F.e("Overt diabetes in pregnancy: insulin, specialist care")], ["No", F.d("Fasting ≥100 and/or 2-h ≥140 (Bhutan STG)?")]]), F.a,
F.b([["GDM", F.s("Diet + walking after meals; self-monitor; review 1–2 weeks")], ["Normal", F.ok("Routine care")]]), F.a,
F.d("Above target?"), F.a,
F.b([["Yes", F.s("Insulin (NPH bedtime ± soluble before meals) or metformin")], ["No", F.s("Continue diet; growth scans")]]), F.a,
F.ok("Deliver 38–39 weeks (by 37 if poor control); baby glucose checks; OGTT at 6 weeks")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Insulin requirements fall suddenly after delivery.</b> Stop GDM insulin and cut pre-existing doses, or hypoglycaemia follows.</li>
<li><b>Steroids for fetal lung maturity raise glucose for up to 5 days:</b> plan extra insulin.</li>
<li><b>Never let a pregnant woman with diabetes fast</b> (including for ultrasound or religious reasons) without a plan: ketosis develops quickly.</li>
<li><b>The postpartum test is the most often missed step.</b> Book it before discharge.</li></ul>
${tbl(["Mistake", "Prevention"], [
["Waiting until 28 weeks in a woman with previous GDM", "Test at booking"],
["Continuing an ACE inhibitor or statin after conception", "Pre-pregnancy medicine review"],
["Giving glibenclamide", "Insulin or metformin"],
["No neonatal glucose check", "Feed early; check before the second feed"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the Bhutan STG criteria for GDM?", "75 g OGTT with fasting 100–125 mg/dL and/or 2-hour 140–199 mg/dL.")}
${qa("Student", "What are the WHO/IADPSG criteria?", "Any one of: fasting 92–125, 1-hour ≥180, 2-hour 153–199 mg/dL.")}
${qa("Intern/MO", "What is DIPSI?", "India's single-step test: 75 g glucose given whether or not the woman is fasting, with GDM diagnosed at a 2-hour plasma value ≥140 mg/dL (MoHFW 2018).")}
${qa("Intern/MO", "First-line medicine when diet fails in GDM?", "Insulin (Bhutan, ADA, ACOG); metformin is an alternative (NICE first-line drug). Avoid glibenclamide.")}
${qa("Intern/MO", "What happens to insulin after delivery?", "Stop it in GDM; reduce to pre-pregnancy doses (about half) in pre-existing diabetes.")}
${qa("Specialist", "Why give aspirin to women with pre-existing diabetes?", "Diabetes is a high-risk factor for pre-eclampsia; 75–150 mg from 12 weeks reduces risk.")}
${qa("Viva", "Why does the baby become hypoglycaemic after birth?", "Fetal hyperinsulinaemia from maternal glucose persists after the cord is cut, when the glucose supply stops.")}
${qa("Intern/MO", "When should a woman with GDM be retested?", "OGTT at 6 weeks (and 6 months per Bhutan STG), then yearly glucose testing for life.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §11.8 Gestational diabetes.</li>
<li id="ref-2">WHO. Diagnostic criteria and classification of hyperglycaemia first detected in pregnancy. 2013. <a href="https://www.who.int/publications/i/item/WHO-NMH-MND-13.2" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">IADPSG Consensus Panel. Recommendations on the diagnosis and classification of hyperglycemia in pregnancy. <i>Diabetes Care</i> 2010;33:676–682. <a href="https://doi.org/10.2337/dc09-1848" target="_blank" rel="noopener">doi:10.2337/dc09-1848</a></li>
<li id="ref-4">HAPO Study Cooperative Research Group. Hyperglycemia and adverse pregnancy outcomes. <i>N Engl J Med</i> 2008;358:1991–2002. <a href="https://doi.org/10.1056/NEJMoa0707943" target="_blank" rel="noopener">doi:10.1056/NEJMoa0707943</a></li>
<li id="ref-5">NICE NG3. Diabetes in pregnancy: management from preconception to the postnatal period (updated 2020). <a href="https://www.nice.org.uk/guidance/ng3" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-6">American Diabetes Association. Standards of Care in Diabetes—2026, Section 15: Management of diabetes in pregnancy. <i>Diabetes Care</i> 2026;49(Suppl 1).</li>
<li id="ref-7">Ministry of Health and Family Welfare, India. Diagnosis &amp; Management of Gestational Diabetes Mellitus: Technical and Operational Guidelines (February 2018). <a href="https://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/Gestational-Diabetes-Mellitus.pdf" target="_blank" rel="noopener">nhm.gov.in</a></li>
<li id="ref-8">Rowan JA et al. (MiG) Metformin versus insulin for gestational diabetes. <i>N Engl J Med</i> 2008;358:2003–2015. <a href="https://doi.org/10.1056/NEJMoa0707193" target="_blank" rel="noopener">doi:10.1056/NEJMoa0707193</a></li>
<li id="ref-9">Crowther CA et al. (ACHOIS) Effect of treatment of gestational diabetes on pregnancy outcomes. <i>N Engl J Med</i> 2005;352:2477–2486. <a href="https://doi.org/10.1056/NEJMoa042973" target="_blank" rel="noopener">doi:10.1056/NEJMoa042973</a></li>
<li id="ref-10">ICMR STW Type 2 Diabetes (2022): screening in pregnancy.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG criteria and targets", "<span class='pass'>Verified</span>", "STG 2024 §11.8 (via Clinical Reference app)"],
["International criteria", "<span class='pass'>Checked</span>", "WHO 2013, IADPSG, NICE; ADA 2026 wording under verification"],
["India MoHFW 2018 details", "<span class='pass'>Verified</span>", "Read from the official NHM PDF"],
["Bhutan GDM prevalence", "<span class='flag'>Evidence gap</span>", "—"]], "qc")}
` }
]
});
