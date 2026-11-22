/* Diabetes mellitus — adults */
registerPage({
id: "dm-adult",
title: "Diabetes Mellitus — Adults",
subtitle: "Types, diagnosis, targets, tablets, insulin from first dose to intensification, emergencies and complications",
age: "Adults", specs: ["endo", "medicine", "ph", "emerg"],
keywords: ["diabetes", "DM", "type 2 diabetes", "T2DM", "type 1 diabetes", "T1DM", "LADA", "MODY", "fibrocalculous", "prediabetes", "HbA1c", "insulin", "basal insulin", "NPH", "glargine", "premixed", "basal bolus", "metformin", "sulfonylurea", "glipizide", "SGLT2", "GLP-1", "DKA", "diabetic ketoacidosis", "HHS", "hyperosmolar", "hypoglycaemia", "hypoglycemia", "diabetic foot", "retinopathy", "neuropathy", "sick day"],
related: ["dm-child", "dm-pregnancy", "ckd-adult", "aki-adult"],
updated: "22 Nov 2026", review: "Nov 2027 (or when ADA Standards 2027 are published)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Diabetes is the commonest serious chronic disease you will manage, and most of the harm it causes is preventable. Good care is unglamorous and steady: confirm the diagnosis, agree targets, keep the treatment simple enough to follow, and look at eyes, kidneys and feet every year.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Fasting glucose ≥126 mg/dL, 2-hour OGTT ≥200, HbA1c ≥6.5%, or random ≥200 with symptoms. Confirm with a second test unless clearly symptomatic.</p></div>
<div><h4>Targets (most adults)</h4><ul><li>HbA1c under 7%</li><li>Fasting 80–130 mg/dL</li><li>2-h after meals under 180 (Bhutan 140–180)</li><li>BP under 130/80</li><li>Statin from 40 years</li></ul></div>
<div><h4>First line</h4><p>Lifestyle plus ${dr("metformin")}. Add ${dr("dapagliflozin", "an SGLT2 inhibitor")} or ${dr("glp1", "GLP-1 agonist")} early for heart, kidney or heart-failure disease.</p></div>
<div><h4>Start insulin when</h4><ul><li>HbA1c over 10% or glucose ≥300 with symptoms</li><li>Weight loss, ketones</li><li>Pregnancy, type 1</li><li>Targets missed on tablets</li></ul></div>
<div><h4>First insulin dose</h4><p>${dr("insulin_nph", "NPH")} 10 units at bedtime (0.1–0.2 unit/kg); add 2 units every 3 days to fasting 80–130. <b>Bhutan vials are U-40.</b></p></div>
<div><h4>Emergencies</h4><ul><li>DKA: fluids, K⁺ check, insulin 0.1 unit/kg/h</li><li>HHS: slow fluids, low insulin</li><li>Hypoglycaemia under 70: 15–20 g glucose</li></ul></div>
<div><h4>Every year</h4><p>HbA1c 2–4×, urine ACR and eGFR, eye exam, foot exam with monofilament, lipids, BP every visit.</p></div>
</div>
<div class="calc" data-calc="eag"></div>
${box("bt", "Bhutan note", `<p>The Diabetes Protocol (v3.0, 2023) gives metformin 500 mg twice daily as first line at every level of care, with pioglitazone, glipizide or insulin added at secondary level. Dapagliflozin and vildagliptin are on the 2025 NEML at referral level. <b>All NEML insulins are 40 units/mL</b>: use U-40 syringes. The protocol also asks for a baseline chest X-ray to look for tuberculosis, which is more common in people with diabetes. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definition, types and who is at risk", html: `
<h3>Definition</h3>
<p>Diabetes mellitus is a group of conditions in which blood glucose stays high because the body makes too little insulin, responds poorly to it, or both. The definition rests on glucose levels that are linked with diabetic retinopathy, the most specific complication.${r(1, 14)}</p>

<h3>Types you will meet</h3>
${tbl(["Type", "What happens", "Typical clues", "Treatment backbone"], [
["<b>Type 2</b> (about 90%)", "Insulin resistance plus progressive beta-cell failure", "Adult, overweight or central obesity, family history, slow onset, often found on screening", "Lifestyle, metformin, then add-ons; insulin later or when needed"],
["<b>Type 1</b>", "Autoimmune destruction of beta cells; absolute insulin deficiency", "Usually young, lean, rapid onset, weight loss, ketones or DKA", "Insulin from diagnosis, for life"],
["LADA (latent autoimmune diabetes of adults)", "Slowly progressive autoimmune type 1 in adults", "Lean adult, poor response to tablets within months, GAD antibodies positive", "Insulin early; avoid sulfonylureas"],
["MODY (monogenic)", "Single-gene beta-cell defect, dominant inheritance", "Diagnosis under 25–35, three generations affected, not obese, no antibodies", "Depends on gene: glucokinase needs no treatment; HNF1A/HNF4A respond to low-dose sulfonylurea"],
["<b>Fibrocalculous pancreatic diabetes</b> and pancreatic diabetes (type 3c)", "Pancreas damaged by chronic pancreatitis, alcohol, surgery, cystic fibrosis", "South Asian tropical chronic pancreatitis, abdominal pain, steatorrhoea, calcified pancreas on X-ray", "Insulin usually; pancreatic enzymes"],
["Drug- or hormone-induced", "Steroids, antipsychotics, tacrolimus, Cushing's, acromegaly", "Glucose rises with the drug, often afternoon peaks with morning prednisolone", "Treat the cause; NPH in the morning for steroid-induced"],
["<b>Gestational diabetes</b>", "Hyperglycaemia first found in pregnancy", "Usually 24–28 weeks", "See the <a href=\"#/d/dm-pregnancy\">pregnancy chapter</a>"]])}
<p>The old labels \"insulin-dependent\" and \"non-insulin-dependent\" are best avoided: many people with type 2 diabetes need insulin, and that does not make it type 1.</p>

<h3>How common is it?</h3>
<ul>
<li>The International Diabetes Federation estimates that <b>about 589 million adults (1 in 9) aged 20–79</b> lived with diabetes in 2024, rising to about 853 million by 2050; roughly 4 in 10 do not know they have it.${r(8)}</li>
<li><b>India:</b> the ICMR-INDIAB study found diabetes in <b>11.4%</b> of adults (about 101 million people) and prediabetes in a further 15.3%.${r(9)}</li>
<li><b>Bhutan:</b> national STEPS surveys (2014, 2019) show raised blood glucose in a meaningful minority of adults and high rates of the risk factors (salt, inactivity, central obesity, alcohol). A precise current prevalence figure from a recent national survey was not available in the sources reviewed. ${LB.bt("EVIDENCE GAP")}</li>
<li>South Asians develop type 2 diabetes about a decade earlier and at lower body weights than Europeans. This is why screening uses a lower BMI threshold (23 kg/m²).</li></ul>

<h3>Risk factors and why they matter</h3>
${tbl(["Risk factor", "Why"], [
["Age 30–40 or more (Bhutan protocol: 40; ICMR: over 30)", "Beta-cell reserve declines with age"],
["Overweight (BMI ≥23 in Asians; Bhutan protocol uses >25) and central obesity", "Visceral fat drives insulin resistance; Asians carry more visceral fat at the same BMI"],
["First-degree relative with diabetes", "Strong genetic contribution to type 2"],
["Hypertension, dyslipidaemia, cardiovascular disease", "Shared insulin-resistance syndrome"],
["Previous gestational diabetes", "About half develop type 2 diabetes within 10 years"],
["Physical inactivity, high-sugar and refined-carbohydrate diet", "Reduced glucose uptake by muscle; weight gain"],
["Polycystic ovary syndrome, acanthosis nigricans", "Markers of insulin resistance"],
["Steroids, antipsychotics, HIV antiretrovirals", "Drug-induced hyperglycaemia"],
["Tuberculosis", "TB and diabetes worsen each other; screen each for the other"]])}

<h3>The physiology you need</h3>
<p>After a meal, glucose stimulates beta cells to release insulin. Insulin lets muscle and fat take up glucose and tells the liver to stop making it. Between meals and overnight, the liver keeps glucose steady. In type 2 diabetes the liver keeps producing glucose overnight (high fasting glucose) and muscle uptake after meals is poor (high post-meal glucose). The beta cells first compensate by working harder, then gradually fail. That is why diabetes is progressive, and why most people need more treatment over the years. That is not a sign of personal failure, and patients should hear this from us.</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How diabetes develops and causes damage", [
F.b([
["Type 2", F.s("Genes + visceral fat + inactivity + age"), F.s("<b>Insulin resistance</b> in muscle, liver, fat"), F.s("Beta cells compensate, then progressively fail")],
["Type 1 / LADA", F.s("Autoimmune attack on beta cells"), F.s("<b>Absolute insulin deficiency</b>"), F.s("Fat breakdown → ketones → DKA without insulin")]]), F.a,
F.s("<b>Hyperglycaemia</b>: liver keeps making glucose overnight; muscle takes up little after meals; kidneys reabsorb more; incretin effect reduced"), F.a,
F.d("Years of high glucose (plus BP, lipids, smoking)"), F.a,
F.b([
["Small vessels", F.e("Retinopathy · nephropathy · neuropathy → foot ulcers")],
["Large vessels", F.e("Coronary disease · stroke · peripheral arterial disease")]]), F.a,
F.ok("Early control prevents complications for decades (UKPDS, DCCT legacy effect)")])}
<h3>Type 2 diabetes</h3>
<ol class="chain">
<li><b>Insulin resistance</b> in muscle, liver and fat, driven by genes, visceral fat, inactivity and ageing.</li>
<li><b>Beta cells compensate</b> by releasing more insulin. Glucose stays normal for years (the silent phase), though prediabetes may be detectable.</li>
<li><b>Beta-cell failure</b> begins: glucotoxicity and lipotoxicity damage the cells further. By diagnosis, perhaps half of beta-cell function has been lost.</li>
<li><b>Other contributors:</b> reduced incretin effect after meals, too much glucagon, more glucose reabsorbed by the kidney (the target of SGLT2 inhibitors), and altered brain appetite signalling (a target of GLP-1 agonists).</li>
<li><b>Chronic hyperglycaemia damages blood vessels.</b> Small vessels: retina, kidney, nerves. Large vessels: heart, brain, legs. Mechanisms include advanced glycation end-products, oxidative stress and endothelial dysfunction.</li></ol>
<h3>Type 1 diabetes</h3>
<p>T-cell-mediated destruction of beta cells, preceded by islet autoantibodies (GAD, IA-2, ZnT8, insulin) for months or years. Once roughly 80–90% of beta cells are lost, glucose rises. Without insulin, fat breakdown produces ketones and DKA follows.</p>
<h3>Natural history and what treatment changes</h3>
<ul><li>Tight glucose control from early on reduces microvascular complications: by about a quarter in type 2 (UKPDS) and by more than half in type 1 (DCCT). The benefit persists for decades (the \"legacy effect\").${r(10, 11)}</li>
<li>Large-vessel (cardiovascular) risk falls most with blood pressure control, statins, stopping smoking, and specific drugs (SGLT2 inhibitors, GLP-1 agonists) rather than with glucose lowering alone.${r(13)}</li>
<li>Over-tight glucose control in older people with established cardiovascular disease increased deaths (ACCORD), which is why targets are individualised.</li></ul>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan", "India (ICMR)", "International (ADA, KDIGO, NICE)", "This guide"], [
["Screening threshold", "Age ≥40, BMI >25, family history (if over 30), HTN, dyslipidaemia, previous GDM", "Overweight (BMI ≥23 or 27.5) with risk factors, or age over 30", "ADA: everyone from 35; earlier if overweight (Asian BMI ≥23) with a risk factor", "Screen from 30 with any risk factor, and everyone from 35–40. Use BMI ≥23 for South Asians. " + LB.loc() + ""],
["HbA1c in diagnosis", "STG 2024 lists \"HbA1c <7.0%\" among the diagnostic criteria; this is a control target, not a diagnostic threshold", "Diagnostic at ≥6.5%", "Diagnostic at ≥6.5% with a standardised assay", "Diagnose at ≥6.5%. Use under 7% as the treatment target. Do not use HbA1c for diagnosis when anaemia, haemoglobinopathy (thalassaemia trait is common), pregnancy or recent transfusion distort it."],
["First drug", "Metformin 500 mg twice daily for all", "Metformin; dual therapy if HbA1c 8.5–10%; insulin + metformin if over 10%", "ADA 2026: no single default drug; choose by comorbidity. <b>SGLT2i and/or GLP-1 RA regardless of HbA1c or metformin use</b> if ASCVD, heart failure or CKD; weight-reducing agents for obesity", "Metformin for everyone who tolerates it. Add an SGLT2 inhibitor (dapagliflozin, NEML) early for heart or kidney disease, even if HbA1c is at target."],
["Second drug when no heart/kidney disease", "Pioglitazone, glipizide or insulin", "Any: SU, TZD, DPP-4i, SGLT2i, AGI, GLP-1 RA", "Choose by weight, hypoglycaemia risk, cost; DPP-4i or SU acceptable where cost matters", "Glipizide (cheap, effective; watch hypoglycaemia), vildagliptin (low hypoglycaemia), pioglitazone (avoid in heart failure), dapagliflozin (weight and BP benefit)."],
["Post-meal target", "PPBG 140–180 mg/dL", "Under 180", "ADA: peak under 180", "Under 180 mg/dL; Bhutan's lower limit of 140 helps avoid hypoglycaemia in insulin users."],
["DKA insulin bolus (adults)", "STG: hydrate and refer", "0.1 unit/kg IV bolus then 0.1 unit/kg/h", "JBDS: no bolus; ADA 2024: bolus optional", "No bolus needed; start a fixed-rate infusion at 0.1 unit/kg/h after potassium is checked."]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Most people with type 2 diabetes have no symptoms when diagnosed. They are found by screening, by an infection that will not settle, or by a complication.</p>
${tbl(["Symptom or sign", "Mechanism", "What it tells you"], [
["Thirst, passing a lot of urine, waking at night to pass urine", "Glucose above the kidney threshold (about 180 mg/dL) pulls water into the urine", "Glucose has been high for some time"],
["Weight loss despite eating", "Calories lost as glucose in urine; fat and muscle breakdown when insulin is low", "Insulin deficiency: think type 1, LADA, pancreatic diabetes, or very uncontrolled type 2; start insulin"],
["Tiredness, blurred vision", "Dehydration; glucose-induced lens swelling", "Vision improves as glucose falls (warn the patient)"],
["Recurrent thrush, boils, UTIs, slow-healing wounds", "High glucose impairs neutrophil function and feeds microbes", "Check glucose in every recurrent infection"],
["Tuberculosis", "Diabetes triples TB risk", "Screen people with TB for diabetes and vice versa"],
["Acanthosis nigricans (velvety dark neck folds)", "Insulin resistance", "Type 2 risk in young people"],
["Numb or burning feet, foot ulcer", "Neuropathy, vascular disease", "Long-standing diabetes"],
["Chest pain, stroke, erectile dysfunction", "Large-vessel disease", "Cardiovascular risk management is urgent"],
["Vomiting, abdominal pain, deep breathing, drowsiness", "DKA", "Emergency"],
["Severe dehydration and confusion in an older person", "HHS", "Emergency"]])}
${box("red", "Red flags — hyperglycaemic emergency (Bhutan Diabetes Protocol)", `<p>Random glucose <b>over 250 mg/dL</b> with any of: shortness of breath, fever, vomiting or abdominal pain, reduced urine output, altered sensorium, BP under 90/60, or pregnancy. Start IV 0.9% saline 1 L over 2 hours, then 1 L every 4 hours, and refer to secondary care.${r(2)}</p>`)}
` },

{ id: "ddx", title: "Differential diagnosis and which type is it?", html: `
${tbl(["Question", "Favours", "Test that helps"], [
["Type 1 vs type 2", "Type 1: young, lean, rapid weight loss, ketones, DKA, other autoimmune disease. Type 2: overweight, family history, acanthosis, slow onset", "GAD antibodies (and IA-2, ZnT8); C-peptide (low in type 1, but wait 3–5 years after diagnosis for reliable separation)"],
["LADA", "Adult, lean, tablets stop working within 6–12 months", "GAD antibodies"],
["MODY", "Diagnosed under 25–35, strong family history over generations, antibodies negative, C-peptide preserved", "Genetic testing (referral)"],
["Pancreatic diabetes", "Chronic pancreatitis, alcohol, abdominal pain, steatorrhoea", "Abdominal X-ray or CT (calcification), faecal elastase"],
["Secondary causes", "Cushingoid features, acromegaly, steroids, haemochromatosis", "Specific tests as indicated"],
["Stress hyperglycaemia", "Raised glucose during acute illness (sepsis, MI, stroke)", "HbA1c ≥6.5% suggests pre-existing diabetes; re-test after recovery"],
["Spurious HbA1c", "Anaemia, haemoglobin variants (HbE, thalassaemia), CKD, recent transfusion, pregnancy", "Rely on glucose values; fructosamine where available"]])}
<h3>The typical patient</h3>
<p>A 48-year-old shopkeeper from Thimphu has a fasting glucose of 162 mg/dL at a screening camp, then HbA1c 8.1%. He has a BMI of 26 and central obesity, his mother had diabetes, and he has no weight loss or ketones. This is <b>type 2 diabetes</b>. The reasoning: middle age, adiposity, family history, a gradual picture and no sign of insulin deficiency. Two abnormal results confirm it. If he had lost 8 kg in 2 months with ketones in the urine, insulin deficiency (LADA or type 1, or severe glucotoxicity) would need to be considered and insulin started.</p>
` },

{ id: "invest", title: "Investigations", html: `
<h3>Diagnostic criteria (any one, confirmed by a second test unless unequivocal symptoms)</h3>
${tbl(["Test", "Diabetes", "Prediabetes", "Normal", "Notes"], [
["Fasting plasma glucose (8 hours fasting)", "≥126 mg/dL (7.0 mmol/L)", "100–125 (impaired fasting glucose)", "Under 100", "Use venous plasma; glucometers are for monitoring"],
["2-hour glucose after 75 g OGTT", "≥200 mg/dL (11.1)", "140–199 (impaired glucose tolerance)", "Under 140", "The Bhutan protocol uses a 2-hour post-breakfast value as a practical alternative"],
["HbA1c", "≥6.5% (48 mmol/mol)", "5.7–6.4%", "Under 5.7%", "Standardised (NGSP) lab; unreliable in anaemia, haemoglobinopathy, CKD, pregnancy"],
["Random plasma glucose", "≥200 mg/dL with classic symptoms or crisis", "—", "—", "Without symptoms, confirm with fasting and 2-hour tests (Bhutan protocol)"]])}
<div class="calc" data-calc="osmo"></div>
<h3>Baseline assessment after diagnosis</h3>
${tbl(["Test", "Why", "Priority"], [
["HbA1c", "Baseline control; guides first treatment", "Essential"],
["Creatinine with eGFR, urine albumin:creatinine ratio", "Diabetic kidney disease; drug dosing (metformin, SGLT2i)", "Essential"],
["Lipid profile", "Cardiovascular risk; statin", "Essential"],
["ECG", "Silent ischaemia, baseline", "Essential (Bhutan protocol: at the earliest date)"],
["Urine routine", "Infection, ketones, protein", "Essential"],
["Liver tests", "MASLD (fatty liver) is common; before pioglitazone", "Recommended"],
["Dilated fundus examination", "Retinopathy at diagnosis in type 2 (often present)", "Essential (ophthalmology)"],
["Foot examination with 10 g monofilament, pulses", "Neuropathy and vascular risk", "Essential"],
["<b>Chest X-ray</b>", "Bhutan protocol: rule out tuberculosis", "Recommended in Bhutan"],
["TSH, coeliac serology", "In type 1 diabetes (autoimmune associations)", "Type 1"],
["GAD antibodies, C-peptide", "If the type is unclear", "Selected"],
["Vitamin B12", "On long-term metformin, especially with neuropathy or anaemia", "Periodic"]])}
<h3>Monitoring glucose</h3>
<ul><li><b>HbA1c:</b> every 3 months until stable at target, then every 6 months (ICMR; ADA).</li>
<li><b>Self-monitoring (glucometer):</b> essential for anyone on insulin or sulfonylureas. Bhutan protocol: monthly fasting and post-meal checks at minimum; more often when adjusting insulin.</li>
<li><b>Continuous glucose monitoring</b> (sensor) where available: target time in range 70–180 mg/dL of over 70%, under 70 for less than 4% of the time, under 54 for less than 1%.${r(1)}</li></ul>
` },

{ id: "targets", title: "Targets, risk and when to refer", html: `
${tbl(["Measure", "Target for most adults", "When to relax or tighten"], [
["HbA1c", "Under 7% (53 mmol/mol)", "Under 6.5% if achievable safely (young, short duration, no hypoglycaemia). Under 8% if frail, elderly, limited life expectancy, recurrent hypoglycaemia"],
["Fasting / pre-meal glucose", "80–130 mg/dL", "100–180 in frail older people"],
["2-hour after meals", "Under 180 mg/dL (Bhutan: 140–180)", "—"],
["Blood pressure", "Under 130/80 (ADA 2026; systolic under 120 encouraged at high cardiovascular or kidney risk); ICMR 140/90, or 130/80 in CKD", "Under 140/90 in frail older people"],
["LDL cholesterol", "Under 100 mg/dL; under 70 with risk factors; under 55 with established cardiovascular disease (ADA)", "Statin for all aged 40–75"],
["Weight", "5–10% loss if overweight", "15% or more can put type 2 diabetes into remission"],
["Smoking", "None", "—"]])}
<h3>Admit or refer urgently when</h3>
<ul><li>Hyperglycaemic emergency signs (see red flags), DKA or HHS</li><li>Severe or recurrent hypoglycaemia</li><li>Foot ulcer with infection, ischaemia or gangrene</li><li>Pregnancy with diabetes</li><li>New type 1 diabetes or suspected LADA/MODY</li><li>Sudden loss of vision</li><li>eGFR under 30 or rapidly falling</li></ul>
<h3>Refer routinely (endocrinology, ophthalmology, nephrology, cardiology) for</h3>
<ul><li>HbA1c above target despite three drugs or insulin</li><li>Yearly eye examination</li><li>CKD stage 4 or rising albuminuria despite treatment</li><li>Coronary disease, heart failure or arrhythmia (ICMR)</li></ul>
` },

{ id: "manage", title: "Management: tablets, insulin and emergencies", html: `
<h3>A. Foundations for every person with diabetes</h3>
<ul>
<li><b>Education</b> on what diabetes is, how medicines work, recognising and treating hypoglycaemia, sick-day rules and foot care, given in the person's language with family present when possible.</li>
<li><b>Food:</b> regular meals; plenty of vegetables, pulses (dal) and whole grains; smaller portions of white rice and refined flour; avoid sugary tea, sweets and soft drinks; less salt (ezay, suja, pickles, dried fish). Red rice and buckwheat are better choices than polished white rice.</li>
<li><b>Activity:</b> at least 150 minutes a week of moderate activity (Bhutan protocol: 30 minutes, 5 days a week), plus muscle-strengthening twice weekly; break up long sitting.</li>
<li><b>Stop tobacco</b> (including doma with tobacco) and limit or stop alcohol, with brief interventions at every visit.</li>
<li><b>Weight:</b> a 5–10% loss improves glucose, BP and lipids; a 15% loss early in type 2 diabetes can bring remission.</li></ul>

<h3>B. Glucose-lowering in type 2 diabetes: a practical ladder</h3>
${tbl(["Step", "When", "What to give", "Notes"], [
["1", "At diagnosis", dr("metformin") + " 500 mg once or twice daily with meals, building to 1,000 mg twice daily", "If HbA1c is 8.5% or more, consider starting two drugs together (ICMR). If HbA1c is over 10% or glucose ≥300 with symptoms, start insulin"],
["1b", "Heart failure, CKD (eGFR ≥20) or established cardiovascular disease", "Add " + dr("dapagliflozin") + " 10 mg daily, and/or a " + dr("glp1", "GLP-1 agonist") + ", regardless of HbA1c", "Protects heart and kidneys beyond glucose lowering"],
["2", "HbA1c above target after 3 months", "Add one: " + dr("glipizide") + " · " + dr("dpp4", "vildagliptin") + " · " + dr("pioglitazone") + " · dapagliflozin · basal insulin", "Choose by cost, weight, hypoglycaemia risk and availability at your facility"],
["3", "Still above target on two or three drugs", "Add <b>basal insulin</b> (or a GLP-1 agonist if available)", "Continue metformin; reduce or stop sulfonylurea when insulin is intensified"],
["4", "Basal insulin optimised, HbA1c still high", "Add mealtime insulin, or switch to premixed twice daily", "See section C"]])}

<h3>C. Insulin — the complete practical guide</h3>
<h4>When to start insulin</h4>
<ul><li><b>Type 1 diabetes, LADA, pancreatic diabetes</b>: from diagnosis.</li>
<li><b>Type 2 with catabolism</b>: weight loss, ketosis, HbA1c over 10% or glucose ≥300 mg/dL with symptoms (often temporary — tablets may suffice later).</li>
<li><b>Type 2 above target</b> on two or three oral drugs.</li>
<li><b>Pregnancy</b> with glucose above target on diet (and metformin), acute illness, surgery, steroid therapy, or when oral drugs are contraindicated (advanced CKD, liver failure).</li></ul>
<h4>Which insulin (what is available in Bhutan)</h4>
${tbl(["Type", "Bhutan NEML (U-40 vials)", "Onset · peak · duration", "Typical use"], [
[dr("insulin_soluble", "Soluble (regular)"), "Yes", "30–60 min · 2–4 h · 6–8 h", "30 min before meals; IV infusions"],
[dr("insulin_nph", "Isophane (NPH)"), "Yes", "1–2 h · 4–8 h · 12–16 h", "Bedtime basal; twice-daily basal"],
[dr("insulin_premix", "Premixed 30/70"), "Yes", "30 min · dual peak · up to 16 h", "Twice daily before breakfast and dinner"],
[dr("insulin_analogue", "Glargine, degludec, detemir"), "No (private, U-100 pens)", "Flat, 24 h", "Once-daily basal with less night hypoglycaemia"],
[dr("insulin_analogue", "Aspart, lispro"), "No (private)", "10–15 min · 1–2 h · 3–5 h", "Just before meals"]])}
<div class="calc" data-calc="insstart"></div>
<h4>Starting basal insulin in type 2 diabetes (the usual first step)</h4>
<ol><li>Continue metformin (and SGLT2 inhibitor); usually keep the sulfonylurea at first.</li>
<li>Give <b>10 units</b> (or 0.1–0.2 unit/kg) of NPH <b>at bedtime</b>, or glargine at a fixed time daily.</li>
<li>The patient checks <b>fasting glucose every morning</b>.</li>
<li>Increase by <b>2 units every 3 days</b> until fasting glucose is 80–130 mg/dL. If fasting glucose is over 180, increase by 4 units.</li>
<li>If any reading is under 70, or there is a hypoglycaemic episode, reduce by 4 units (or 10–20%) and look for the cause.</li>
<li>Review HbA1c at 3 months.</li></ol>
<h4>Intensifying when fasting is at target but HbA1c is not</h4>
<p>Check glucose before lunch, before dinner and at bedtime to find which meal causes the rise. Then either:</p>
<ul><li><b>Add mealtime insulin</b> before the largest meal: 4 units (or 10% of basal) of soluble insulin 30 minutes before, adjusted by 1–2 units every 3 days to the next pre-meal or 2-hour reading (\"basal-plus\", then full basal–bolus), or</li>
<li><b>Switch to premixed 30/70 twice daily</b>: divide the total basal dose two-thirds before breakfast and one-third before dinner.</li>
<li>If basal exceeds about 0.5 unit/kg/day, adding mealtime cover is usually better than raising the basal further (\"overbasalisation\": high bedtime-to-morning drop, night hypoglycaemia).</li></ul>
<h4>How to inject: what every patient must be taught</h4>
${tbl(["Step", "Teaching point"], [
["Syringe", "<b>Bhutan vials are U-40: use only U-40 syringes</b> (red cap). A U-100 syringe gives the wrong dose. Pens are U-100 and use their own needles"],
["Mixing", "Roll cloudy insulin (NPH, premix) gently 10–20 times; do not shake hard"],
["Sites", "Abdomen (fastest, most consistent), thighs, buttocks, back of arms. Rotate within a site, at least 1 cm (a finger-width) from the last injection"],
["Technique", "Clean skin; pinch up a skin fold if thin; insert at 90° (45° if very thin); inject slowly; count to 10 before withdrawing"],
["Timing", "Soluble and premixed: 30 minutes before meals; never inject and then skip the meal"],
["Storage", "Unopened vials in the fridge (2–8 °C, never in the freezer); vial in use at room temperature for up to 28 days, away from sun and fire. Carry in a cool bag when travelling"],
["Lipohypertrophy", "Lumpy injection sites absorb insulin erratically; check sites at every visit and avoid lumps"],
["Disposal", "Used needles into a hard container, not household rubbish"]])}
<h4>Type 1 diabetes in adults</h4>
<p>Basal–bolus is standard: total daily dose usually 0.4–1.0 unit/kg (start about 0.5), with 40–50% as basal (NPH twice daily or glargine once) and the rest as soluble or rapid insulin before meals. Teach carbohydrate awareness and dose adjustment. <b>Never stop basal insulin</b>, even when not eating.</p>

<h3>D. Sick-day rules</h3>
<ul><li>Never stop insulin. Check glucose every 2–4 hours and ketones if glucose is over 250 mg/dL.</li>
<li>Drink fluids (about 100–200 mL every hour); take carbohydrate as liquids if not eating.</li>
<li>Pause metformin, SGLT2 inhibitors, ACE inhibitors/ARBs, diuretics and NSAIDs during vomiting, diarrhoea or dehydration; restart 24–48 h after eating normally.</li>
<li>Extra soluble insulin (ICMR type 1 workflow: 10–15% of the total daily dose every 6 hours) if glucose and ketones are high.</li>
<li>Come to hospital for persistent vomiting, rising ketones, abdominal pain, breathlessness or drowsiness.</li></ul>

<h3>E. Emergencies</h3>
${box("red", "Diabetic ketoacidosis (DKA) — adults", `<p><b>Diagnosis</b> (ADA/EASD/JBDS 2024 consensus): glucose ≥200 mg/dL or known diabetes; ketones ≥3.0 mmol/L (or urine ketones ≥2+); and pH under 7.3 and/or bicarbonate under 18 mmol/L. Euglycaemic DKA happens with SGLT2 inhibitors, pregnancy and starvation.${r(5, 6)}</p>
<ol><li><b>Fluids first:</b> 0.9% saline <b>1 L over the first hour</b> (faster if shocked), then (JBDS) 1 L over 2 h, 1 L over 2 h, 1 L over 4 h, 1 L over 4 h, 1 L over 6 h (the 2024 consensus: 500–1,000 mL/h for 2–4 h). Use 250 mL aliquots and reassess in older people, heart failure, CKD and pregnancy. Buffered crystalloid (Ringer's lactate) is an acceptable alternative.</li>
<li><b>Potassium before insulin.</b> If K⁺ is under 3.5 mmol/L, give potassium and delay insulin. Otherwise add ${dr("kcl", "KCl")} 40 mmol to each litre when K⁺ is 3.5–5.5; none if over 5.5.</li>
<li><b>Insulin:</b> ${dr("insulin_soluble", "soluble insulin")} fixed-rate IV infusion <b>0.1 unit/kg/hour</b> (no bolus needed). <b>Continue the usual basal insulin</b> subcutaneously.</li>
<li><b>When glucose falls below 250 mg/dL (14 mmol/L):</b> add 10% dextrose at 125 mL/h alongside saline. <b>Do not stop the insulin.</b></li>
<li><b>Targets each hour:</b> ketones fall by ≥0.5 mmol/L, bicarbonate rises by ≥3 mmol/L, glucose falls by about 54 mg/dL (3 mmol/L). If not met, check the pump and line, then increase insulin by 1 unit/hour.</li>
<li><b>Bicarbonate</b> only if pH is under 7.0 (ADA); not routinely (JBDS).</li>
<li><b>Resolved</b> when ketones are under 0.6 mmol/L <b>and</b> pH is 7.3 or more or bicarbonate is 18 or more (2024 consensus). Give subcutaneous basal insulin 1–2 hours before stopping the IV infusion (JBDS: short-acting with a meal, stop the drip 30–60 minutes later). New starters need about 0.3–0.6 unit/kg/day.</li>
<li>Find the trigger: missed insulin, infection, MI, pancreatitis, SGLT2 inhibitor, new type 1 diabetes.</li></ol>
<p class="foot" style="text-align:left">Bhutan STG first step at primary level: hydration (20 mL/kg bolus then maintenance) and refer. ICMR uses a 0.1 unit/kg insulin bolus; JBDS and this guide do not.</p>`)}
${box("red", "Hyperosmolar hyperglycaemic state (HHS)", `<p><b>Features:</b> very high glucose (≥600 mg/dL), effective osmolality over 300–320 mOsm/kg, little or no ketosis (under 3 mmol/L), pH 7.3 or more. Usually older people with type 2 diabetes after infection, stroke or poor intake. Mortality is higher than DKA.${r(5, 6)}</p>
<ul><li><b>Fluids are the main treatment:</b> 0.9% saline 1 L over the first hour, then guided by osmolality, aiming for a fall of 3–8 mOsm/kg/hour. A rapid fall risks cerebral oedema and central pontine myelinolysis.</li>
<li><b>Insulin:</b> start low (0.05 unit/kg/hour) only once glucose stops falling with fluids alone (unless ketones are over 1 mmol/L). Aim for a glucose fall of no more than 90 mg/dL (5 mmol/L) per hour.</li>
<li><b>Potassium</b> as for DKA. <b>Thromboprophylaxis</b> with LMWH (high clot risk). Check feet for pressure damage.</li></ul>`)}
${box("red", "Hypoglycaemia (glucose under 70 mg/dL / 3.9 mmol/L)", `<ul><li><b>Level 1:</b> under 70; <b>Level 2:</b> under 54 (clinically important); <b>Level 3:</b> severe, needing another person's help.</li>
<li><b>Able to swallow:</b> 15–20 g fast-acting glucose (3–4 teaspoons sugar in water, 150–200 mL juice or sweet drink); recheck in 15 minutes; repeat up to 3 times; then a snack with starch (bread, roti, biscuits).</li>
<li><b>Cannot swallow:</b> ${dr("dextrose", "IV glucose")}: <b>200 mL of 10% or 100 mL of 20%</b> over 15 minutes (JBDS 2023), or <b>Bhutan's 25% dextrose 60–100 mL</b> into a large vein; or ${dr("glucagon")} 1 mg IM if no IV access.</li>
<li><b>Sulfonylurea or long-acting insulin:</b> admit and continue 10% glucose; hypoglycaemia can recur for 24–72 hours.</li>
<li>Find the cause: missed meal, alcohol, exercise, wrong syringe (U-100 for U-40), falling eGFR, weight loss.</li></ul>`)}

<h3>F. Surgery and fasting</h3>
<ul><li>Minor surgery, well controlled: skip morning tablets, reduce basal insulin by 20% the night before, first on the list, monitor glucose.</li>
<li>Major surgery or poor control: variable-rate IV insulin infusion with glucose-containing fluid; continue basal insulin.</li>
<li>Stop SGLT2 inhibitors 3 days before major surgery (ketoacidosis risk) and metformin on the day.</li></ul>

<h3>G. Working in Bhutan</h3>
${tbl(["Need", "Reality", "What to do"], [
["Basal analogue insulin", "Not on NEML; NPH and premix only", "NPH at bedtime works well; teach night-hypoglycaemia symptoms; give a bedtime snack if needed"],
["GLP-1 agonist", "Not on NEML", "Use dapagliflozin for heart/kidney protection where available; refer for private supply when clearly indicated"],
["HbA1c at district level", "Not always available", "Use fasting and post-meal glucose (Bhutan targets) and send HbA1c when possible"],
["Insulin storage in rural homes", "No fridge", "Clay-pot cooling or a cool, shaded room; vial in use is stable for 4 weeks below about 25–30 °C"],
["U-40 versus U-100 confusion", "Private pens are U-100", "Ask \"Which insulin, which syringe?\" at every visit"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card, or open the <a href="#/drugs">drug library</a> for the Bhutan formulary monograph.</p>
${tbl(["Drug", "Starting dose", "Usual / maximum", "Key cautions"], [
[dr("metformin"), "500 mg once or twice daily with meals", "2,000 mg/day (max 2,550)", "eGFR under 30 stop; 30–44 max 1 g; GI upset; B12"],
[dr("glipizide"), "2.5–5 mg before breakfast", "Up to 20 mg/day (split if over 15 mg)", "Hypoglycaemia, weight gain; caution in elderly and CKD"],
[dr("dpp4", "Vildagliptin"), "50 mg once or twice daily", "100 mg/day", "50 mg once daily if eGFR under 50; liver tests"],
[dr("pioglitazone"), "15 mg once daily", "45 mg once daily", "Not in heart failure; oedema, fractures"],
[dr("dapagliflozin"), "10 mg once daily", "10 mg", "Sick-day hold; genital infections; euglycaemic DKA"],
[dr("glp1", "Semaglutide"), "0.25 mg weekly SC", "1–2 mg weekly", "Nausea; not on NEML; avoid in pregnancy"],
[dr("insulin_nph", "NPH insulin"), "10 units at bedtime", "Titrate to fasting 80–130", "U-40 syringes; night hypoglycaemia"],
[dr("insulin_premix", "Premixed 30/70"), "0.2–0.3 unit/kg/day split 2:1", "Titrate twice weekly", "Regular meals essential"],
[dr("insulin_soluble", "Soluble insulin"), "4 units before largest meal; IV 0.1 unit/kg/h in DKA", "By glucose", "Hypoglycaemia; hypokalaemia with IV"],
[dr("atorvastatin"), "10–20 mg", "40–80 mg with ASCVD", "All diabetes aged 40–75"],
[dr("enalapril", "ACE inhibitor"), "2.5–5 mg", "Max tolerated", "With albuminuria or hypertension; not in pregnancy"],
[dr("aspirin"), "75 mg", "75–162 mg", "Secondary prevention; primary only in selected high-risk"]])}
<h3>Medicines that raise glucose</h3>
<p>Glucocorticoids, thiazides in high doses, atypical antipsychotics (olanzapine, clozapine), some antiretrovirals, tacrolimus, β-blockers (also mask hypoglycaemia), and fluoroquinolones (cause both high and low glucose).</p>
` },

{ id: "populations", title: "Pregnancy, older adults and immunocompromised people", html: `
<h3>Pregnancy and planning a pregnancy</h3>
<p>Diabetes in pregnancy has its own chapter: <a href="#/d/dm-pregnancy">Diabetes in Pregnancy</a>. In short: plan pregnancy with HbA1c under 6.5% if safe, start high-dose folic acid (5 mg) before conception, and stop statins, ACE inhibitors/ARBs, SGLT2 inhibitors and GLP-1 agonists. Insulin (and metformin) are the drugs of pregnancy.</p>
<h3>Older adults</h3>
<ul><li>Relax targets (HbA1c under 8%, or 8.5% if frail); avoiding hypoglycaemia matters more than tight control.</li>
<li>Prefer metformin, DPP-4 inhibitors and basal insulin; avoid glibenclamide; use the lowest sulfonylurea dose.</li>
<li>Check eGFR, cognition (can they manage insulin?), vision and dexterity.</li>
<li>Deprescribe when weight falls or eating declines.</li></ul>
<h3>Immunocompromised people and steroid-induced hyperglycaemia</h3>
<ul><li><b>Steroids:</b> once-daily morning prednisolone raises glucose in the afternoon and evening. Use morning NPH insulin (dose proportional to the steroid dose) or a sulfonylurea in the morning; reduce as the steroid tapers.</li>
<li><b>HIV:</b> some antiretrovirals and weight gain raise risk; screen yearly.</li>
<li><b>Transplant:</b> post-transplant diabetes from tacrolimus and steroids; specialist care.</li>
<li><b>Tuberculosis:</b> diabetes triples TB risk and worsens TB outcomes; rifampicin lowers levels of some oral agents. Screen every person with TB for diabetes (HbA1c or fasting glucose), and consider TB in people with diabetes who have cough, fever or weight loss.</li></ul>
` },

{ id: "scenarios", title: "Diabetes with other conditions", html: `
${tbl(["Condition", "What changes", "Why"], [
["<b>CKD</b>", "SGLT2 inhibitor if eGFR ≥20 (kidney protection); metformin by eGFR; avoid glibenclamide; lower insulin doses; ACE inhibitor/ARB for albuminuria", "Kidney and heart protection; drug clearance falls. See the <a href=\"#/d/ckd-adult\">CKD chapter</a>"],
["<b>Heart failure</b>", "SGLT2 inhibitor (reduces admissions and death); avoid pioglitazone and saxagliptin", "Fluid retention with TZDs"],
["<b>Coronary disease or stroke</b>", "GLP-1 agonist or SGLT2 inhibitor with proven benefit; high-intensity statin; aspirin", "Cardiovascular outcome trials"],
["<b>Fatty liver (MASLD) and cirrhosis</b>", "MASLD: pioglitazone or GLP-1 agonist help; metformin safe. Decompensated cirrhosis: insulin; avoid metformin", "Liver glucose output and drug clearance"],
["<b>COPD and asthma on steroids</b>", "Expect steroid hyperglycaemia; morning NPH", "Afternoon glucose peaks"],
["<b>Tuberculosis</b>", "Treat both; insulin often needed during intensive phase; check glucose often", "Rifampicin interactions; infection raises glucose"],
["<b>Drug allergy</b>", "Sulfonamide allergy: sulfonylureas usually tolerated but use caution", "Low cross-reactivity"],
["<b>Depression</b>", "Screen yearly; it worsens self-care", "—"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "How common / when", "Screen with", "Management"], [
["<b>Retinopathy</b>", "Often present at diagnosis of type 2; after 5 years in type 1", "Dilated fundus exam at diagnosis (type 2) or 5 years (type 1), then yearly (every 1–2 years if none)", "Glucose and BP control; laser, anti-VEGF injections (ophthalmology)"],
["<b>Kidney disease</b>", "About a third to 40% of people with diabetes", "Urine ACR and eGFR yearly", "ACE inhibitor/ARB, SGLT2 inhibitor, finerenone, BP and glucose control"],
["<b>Neuropathy</b>", "Up to half after 10+ years", "10 g monofilament, vibration, reflexes yearly; ask about pain", "Foot care; duloxetine, pregabalin or amitriptyline for pain"],
["<b>Diabetic foot</b>", "Lifetime ulcer risk about 1 in 4; leading cause of amputation", "Every visit (Bhutan protocol): skin, nails, deformity, pulses, sensation", "Off-loading, debridement, infection control, revascularisation; urgent referral for infection or ischaemia"],
["<b>Coronary disease, stroke, peripheral arterial disease</b>", "Main cause of death", "Risk factors at every visit; ECG", "Statin, BP control, smoking cessation, cardioprotective drugs"],
["Autonomic neuropathy", "Long-standing diabetes", "Postural BP, symptoms", "Gastroparesis, erectile dysfunction, silent MI"],
["Infections", "Common: TB, UTI, skin, mucormycosis", "Clinical", "Treat early; control glucose"]])}
<h3>Prognosis</h3>
<ul><li>Diabetes shortens life expectancy, mostly through cardiovascular disease, but well-controlled risk factors close most of this gap.</li>
<li>Remission of type 2 diabetes is possible with substantial weight loss (15 kg in the DiRECT trial), especially within 6 years of diagnosis.</li></ul>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
${tbl(["Every visit", "Every 3–6 months", "Every year"], [
["BP, weight, foot check, glucose log, injection sites, hypoglycaemia, medicine review (Bhutan protocol)", "HbA1c (3-monthly until stable, then 6-monthly)", "Urine ACR, eGFR, lipids, ECG, dilated eye exam, detailed foot exam, B12 on metformin, vaccinations (influenza; pneumococcal; hepatitis B)"]])}
<h3>Preventing type 2 diabetes</h3>
<p>In people with prediabetes, losing 5–7% of body weight and walking 150 minutes a week reduced progression to diabetes by 58% (Diabetes Prevention Program; Indian Diabetes Prevention Programme showed similar benefit). Metformin helps those under 60 with BMI over 35 or previous GDM. Re-test prediabetes every year.</p>
${box("green", "What to tell the patient", `<ul><li>\"Diabetes is a lifelong condition, but with steady care you can live a long and full life. Most problems come slowly, so regular checks catch them early.\"</li><li>Carry sugar or sweets if you take insulin or glipizide.</li><li>Check your feet every day; never walk barefoot; wash and dry between the toes; do not cut corns yourself (Bhutan protocol).</li><li>Have your eyes checked every year, even if your sight seems fine.</li><li>Do not stop insulin when you are ill: check sugar more often and seek help early.</li><li>Needing insulin does not mean you have failed. It means your body needs more help.</li></ul>`)}
${box("red", "Come to hospital immediately if", `<ul><li>Vomiting, abdominal pain, fast or deep breathing, or drowsiness</li><li>Glucose stays over 300 mg/dL or ketones are present</li><li>Repeated low sugars, or a fit or blackout</li><li>A foot that is red, hot, swollen, smelly or black</li><li>Sudden loss of vision, chest pain or weakness of one side</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>Diabetic retinopathy</h3>
<div class="pair">
${fig({ title: "Background (non-proliferative) diabetic retinopathy", src: "images/dr-background.jpg", mod: "Fundus photograph", ctx: "Diabetes; screening eye examination", loc: "Retina, posterior pole", find: "Small red dots (microaneurysms), blot haemorrhages and pale yellow exudates where leaking vessels have deposited fat and protein", signs: "Microaneurysms, haemorrhages, hard exudates", interp: "Non-proliferative retinopathy. Exudates near the macula threaten central vision (maculopathy): refer to ophthalmology", ddx: "Hypertensive retinopathy (flame haemorrhages, AV nipping), retinal vein occlusion", by: "National Eye Institute, NIH", page: "https://commons.wikimedia.org/wiki/File:Fundus_retinopathy_EDA03.JPG", lic: "Public domain" })}
${fig({ title: "Proliferative diabetic retinopathy", src: "images/dr-proliferative.jpg", mod: "Fundus photograph", ctx: "Long-standing, poorly controlled diabetes", loc: "Optic disc and retina", find: "Fine, fragile new vessels growing on the retinal surface with fibrous tissue", signs: "Neovascularisation", interp: "Sight-threatening: risk of vitreous haemorrhage and retinal detachment. Urgent ophthalmology for laser or anti-VEGF treatment", by: "National Eye Institute, NIH", page: "https://commons.wikimedia.org/wiki/File:Fundus_Proliferative_retinopathy_EDA01.JPG", lic: "Public domain" })}
</div>
${fig({ title: "After scatter (pan-retinal) laser treatment", src: "images/dr-laser.jpg", mod: "Fundus photograph", ctx: "Treated proliferative retinopathy", loc: "Peripheral retina", find: "Multiple small pale laser scars across the peripheral retina", interp: "Laser treatment reduces the oxygen demand of the peripheral retina so new vessels regress; it protects central vision at the cost of some peripheral and night vision", by: "National Eye Institute, NIH", page: "https://commons.wikimedia.org/wiki/File:Fundus_photo_showing_scatter_laser_surgery_for_diabetic_retinopathy_EDA09.JPG", lic: "Public domain" })}
<h3>The diabetic foot</h3>
<div class="pair">
${fig({ title: "Neuropathic heel ulcer", src: "images/dfu-heel.jpg", mod: "Clinical photograph", ctx: "47-year-old with profound peripheral neuropathy", loc: "Plantar heel", find: "Punched-out ulcer at a pressure point with surrounding callus; the patient felt no pain", interp: "Neuropathic ulcer: off-loading pressure is as important as dressings", ddx: "Ischaemic ulcer (painful, toes and margins, absent pulses)", by: "Jonathan Moore, Foot and Ankle Online Journal", page: "https://commons.wikimedia.org/wiki/File:Neuropathic_heel_ulcer_diabetic.jpg", lic: "CC BY 3.0" })}
${fig({ title: "Wagner grade 1 ulcer before and after debridement", src: "images/dfu-wagner1.jpg", mod: "Clinical photographs", ctx: "Ulcer caused by shoe friction", loc: "Foot", find: "(A) Superficial ulcer with callus and slough; (B) after off-loading and serial debridement, clean granulating base", interp: "Regular sharp debridement and off-loading heal superficial ulcers; check shoes in every person with diabetes", by: "Dayya D et al. Adv Wound Care 2022;11:666–686", page: "https://commons.wikimedia.org/wiki/File:Wagner_Grade_1_diabetic_foot_ulcer_before_and_after_debridement_(Dayya_2022).jpg", lic: "CC BY 4.0" })}
</div>
<div class="pair">
${fig({ title: "Charcot foot (neuropathic arthropathy)", src: "images/charcot-xray.jpg", mod: "Foot X-ray (oblique)", ctx: "45-year-old man with diabetes and a warm, swollen foot", loc: "Tarsometatarsal (Lisfranc) joints", find: "Divergent Lisfranc dislocation of the first metatarsal with fractures of the lesser metatarsals", signs: "Joint disorganisation in a neuropathic foot", interp: "Active Charcot foot: immobilise in a total-contact cast and refer; a hot swollen foot in neuropathy is Charcot until proven otherwise", ddx: "Cellulitis, osteomyelitis, gout, DVT", by: "Jerome JTJ, Foot and Ankle Online Journal", page: "https://commons.wikimedia.org/wiki/File:Charcot_arthropathy_X-ray.jpg", lic: "CC BY 3.0" })}
${fig({ title: "Necrobiosis lipoidica", src: "images/necrobiosis.jpg", mod: "Clinical photograph", ctx: "Skin finding associated with diabetes", loc: "Shin", find: "Shiny, yellow-brown, atrophic plaque with visible vessels and a reddish edge", interp: "A cutaneous marker of diabetes; prone to ulceration after minor trauma", ddx: "Granuloma annulare, sarcoidosis, morphoea", by: "Dr G. Narasimha Murthy", page: "https://commons.wikimedia.org/wiki/File:Necrobiosis_lipoidica_diabeticorum.jpg", lic: "CC0" })}
</div>
<h3>Link-only images</h3>
<ul><li>Diabetic retinopathy grading (international scale): <a href="https://eyewiki.org/Diabetic_Retinopathy" target="_blank" rel="noopener">EyeWiki (AAO)</a></li><li>Insulin injection sites and lipohypertrophy: <a href="https://www.fit4diabetes.com/" target="_blank" rel="noopener">FIT injection recommendations</a></li><li>Emphysematous pyelonephritis on CT: <a href="https://radiopaedia.org/search?q=emphysematous+pyelonephritis" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Diagnosis", [
F.s("Symptoms, or screening of an at-risk adult"), F.a,
F.d("Fasting ≥126, 2-h ≥200, HbA1c ≥6.5, or random ≥200 with symptoms?"), F.a,
F.b([["Yes, with classic symptoms or crisis", F.e("Diabetes: assess for DKA/HHS, start treatment")], ["Yes, no symptoms", F.s("Repeat a test (same or different) to confirm")], ["Borderline", F.s("Prediabetes (FPG 100–125, 2-h 140–199, HbA1c 5.7–6.4): lifestyle, retest yearly")]]), F.a,
F.d("Young, lean, weight loss, ketones?"), F.a,
F.b([["Yes", F.e("Possible type 1 / LADA: insulin, GAD antibodies, refer")], ["No", F.ok("Type 2: baseline tests, targets, metformin")]])])}
${F.chart("2 · Type 2 treatment ladder", [
F.s("Lifestyle + metformin (500 mg → 1 g twice daily)"), F.a,
F.d("Heart failure, CKD or cardiovascular disease?"), F.a,
F.b([["Yes", F.s("Add SGLT2 inhibitor (dapagliflozin) ± GLP-1 agonist now")], ["No", F.s("Recheck HbA1c at 3 months")]]), F.a,
F.d("HbA1c above target?"), F.a,
F.b([["Yes", F.s("Add one: glipizide · vildagliptin · pioglitazone · dapagliflozin · basal insulin")], ["No", F.ok("Continue; HbA1c 6-monthly")]]), F.a,
F.d("Still above target on 2–3 drugs?"), F.a,
F.s("Bedtime NPH 10 units; +2 units every 3 days to fasting 80–130"), F.a,
F.d("Fasting at target, HbA1c still high?"), F.a,
F.ok("Add mealtime insulin before the biggest meal, or premix 30/70 twice daily")])}
${F.chart("3 · DKA in adults (first hours)", [
F.s("Glucose ≥200 or known DM + ketones ≥3 + pH under 7.3 / HCO₃ under 18"), F.a,
F.s("0.9% saline 1 L over 1 h (faster if shocked)"), F.a,
F.d("K⁺ under 3.5?"), F.a,
F.b([["Yes", F.e("Replace K⁺ first; hold insulin")], ["3.5–5.5", F.s("KCl 40 mmol per litre")], ["Over 5.5", F.s("No KCl; recheck in 1–2 h")]]), F.a,
F.s("Insulin 0.1 unit/kg/h IV; continue basal insulin SC"), F.a,
F.s("Glucose under 250: add 10% dextrose 125 mL/h; keep insulin"), F.a,
F.ok("Ketones under 0.6 and pH over 7.3: SC insulin with meal, stop drip 30–60 min later")])}
${F.chart("4 · Hypoglycaemia", [
F.s("Glucose under 70 mg/dL or symptoms"), F.a,
F.d("Able to swallow safely?"), F.a,
F.b([["Yes", F.s("15–20 g glucose; recheck in 15 min; repeat up to 3 times; then starchy snack")], ["No", F.e("IV 10% glucose 200 mL or 20% 100 mL (or 25% 60–100 mL); or glucagon 1 mg IM")]]), F.a,
F.ok("Find the cause; admit if sulfonylurea or long-acting insulin")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Ask \"which insulin and which syringe?\"</b> at every visit. U-40 and U-100 confusion is a real cause of severe hypoglycaemia in Bhutan.</li>
<li><b>Look at the injection sites.</b> Lipohypertrophy explains many \"unexplained\" swings in glucose.</li>
<li><b>Weight loss with high glucose means insulin deficiency</b> until proven otherwise.</li>
<li><b>HbA1c can mislead</b> in anaemia and thalassaemia trait: trust glucose readings when they disagree.</li>
<li><b>Feet:</b> take off the shoes and socks at every visit. Ulcers are found, not reported.</li>
<li><b>SGLT2 inhibitors can cause DKA with normal glucose.</b> Check ketones in any unwell patient taking them.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Stopping insulin when the patient is not eating", "DKA", "Never stop basal insulin; reduce mealtime insulin"],
["Mismatching syringe and insulin strength", "Mismatched syringes are dangerous both ways: U-40 insulin drawn to the \"10\" mark of a U-100 syringe gives only 4 units (under-dose, high glucose), while U-100 pen insulin drawn to \"10\" on a U-40 syringe gives 25 units (2.5 times the dose, severe hypoglycaemia).", "Match syringe to vial; ask which insulin and which syringe at every visit"],
["Diagnosing diabetes from one random glucometer reading", "Mislabelling", "Confirm with laboratory tests"],
["Starting glibenclamide in an older person with CKD", "Prolonged hypoglycaemia", "Use glipizide or gliclazide at low dose, or DPP-4 inhibitor"],
["Treating HbA1c alone and ignoring BP, statin and smoking", "Missed cardiovascular benefit", "Use the whole target table"],
["Stopping the insulin drip when glucose normalises in DKA", "Ketoacidosis returns", "Add dextrose and continue insulin until ketones clear"],
["Rapid correction in HHS", "Cerebral oedema, myelinolysis", "Fluids first; slow, measured falls"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "State the diagnostic thresholds for diabetes.", "Fasting plasma glucose ≥126 mg/dL, 2-hour OGTT ≥200 mg/dL, HbA1c ≥6.5%, or random ≥200 mg/dL with symptoms; confirm by repeat testing unless clearly symptomatic.")}
${qa("Student", "What are the prediabetes ranges?", "Impaired fasting glucose 100–125 mg/dL, impaired glucose tolerance 140–199 mg/dL at 2 hours, HbA1c 5.7–6.4%.")}
${qa("Intern/MO", "When is HbA1c unreliable?", "Anaemia (iron deficiency raises it), haemoglobinopathies such as thalassaemia trait or HbE, CKD, recent blood loss or transfusion, and pregnancy.")}
${qa("Intern/MO", "A 32-year-old lean man has HbA1c 11% and has lost 6 kg. What do you do?", "Suspect insulin deficiency (type 1 or LADA): check ketones, start insulin, send GAD antibodies, and avoid relying on tablets.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "What is the first-line drug in type 2 diabetes and its starting dose?", "Metformin 500 mg once or twice daily with meals, increased every 1–2 weeks to 1,000 mg twice daily (Bhutan protocol: 500 mg twice daily).")}
${qa("Intern/MO", "Which drugs protect the heart and kidneys regardless of HbA1c?", "SGLT2 inhibitors (e.g. dapagliflozin) for heart failure and CKD, and GLP-1 receptor agonists (semaglutide, liraglutide) for atherosclerotic disease.")}
${qa("Intern/MO", "How do you start basal insulin?", "NPH 10 units at bedtime (or 0.1–0.2 unit/kg), continue metformin, and increase by 2 units every 3 days until fasting glucose is 80–130 mg/dL; reduce by 4 units after hypoglycaemia.")}
${qa("Specialist", "What is overbasalisation?", "Basal insulin pushed beyond about 0.5 unit/kg/day while fasting glucose is at target but HbA1c is high, causing night hypoglycaemia and a large bedtime-to-morning fall. Add mealtime insulin instead.")}
${qa("Intern/MO", "How should a patient using Bhutan's NEML insulin draw it up?", "With a U-40 syringe, because NEML vials are 40 units/mL.")}
${qa("Student", "Name the sick-day rule drugs to pause.", "Metformin, SGLT2 inhibitors, ACE inhibitors/ARBs, diuretics and NSAIDs (and reduce sulfonylureas), but never stop insulin.")}
</div>
<div class="qgroup"><h3>Emergencies</h3>
${qa("Intern/MO", "Give the DKA diagnostic criteria (2024 consensus).", "Glucose ≥200 mg/dL or known diabetes; ketones ≥3.0 mmol/L or urine 2+; pH under 7.3 and/or bicarbonate under 18 mmol/L.")}
${qa("Intern/MO", "Why check potassium before insulin in DKA?", "Insulin drives potassium into cells; if K⁺ is under 3.5, starting insulin can cause fatal hypokalaemia and arrhythmia.")}
${qa("Intern/MO", "Glucose has fallen to 220 mg/dL but ketones are 2.5 mmol/L. What next?", "Add 10% dextrose and keep the fixed-rate insulin running until ketones are under 0.6 mmol/L and pH over 7.3.")}
${qa("Specialist", "How does HHS management differ from DKA?", "Fluids are the main treatment, with slow osmolality correction (3–8 mOsm/kg/h); insulin is started low (0.05 unit/kg/h) only when glucose stops falling with fluids; thromboprophylaxis is important.")}
${qa("Intern/MO", "Treatment of hypoglycaemia in a conscious adult?", "15–20 g fast-acting glucose, recheck in 15 minutes, repeat up to 3 times, then a starchy snack.")}
</div>
<div class="qgroup"><h3>Complications and viva</h3>
${qa("Student", "Which yearly checks prevent complications?", "Dilated eye examination, urine ACR and eGFR, foot examination with monofilament, lipids, and BP at every visit.")}
${qa("Viva", "Explain the legacy effect.", "Early intensive glucose control reduced complications for decades after the trial ended (UKPDS follow-up, DCCT/EDIC), so early control matters.")}
${qa("Viva", "Why do South Asians develop diabetes at lower BMI?", "More visceral and liver fat, less muscle at the same BMI, and possibly lower beta-cell reserve, so insulin resistance appears earlier.")}
${qa("Intern/MO", "Why does the Bhutan protocol ask for a chest X-ray?", "Diabetes triples the risk of tuberculosis, which is common in Bhutan; early detection improves both conditions.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">American Diabetes Association Professional Practice Committee. Standards of Care in Diabetes—2026. <i>Diabetes Care</i> 2026;49(Suppl 1). <a href="https://diabetesjournals.org/care/issue" target="_blank" rel="noopener">diabetesjournals.org/care</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Diabetes Mellitus Management Protocol v3.0 (10 May 2023); Diabetes Mellitus Screening &amp; Management Protocol v3.5 (2025, as held in the Bhutan Clinical Reference app).</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §5.3 Diabetes mellitus, §5.4 DKA, §5.5 Hypoglycaemia; National Essential Medicines List 2025; National Essential Medicines Formulary 2022.</li>
<li id="ref-4">ICMR/DHR India. Standard Treatment Workflows: Diabetes Mellitus Type 2, Type 1, Diabetic Ketoacidosis (July 2022). <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-5">Umpierrez GE, Davis GM, ElSayed NA et al. Hyperglycemic crises in adults with diabetes: a consensus report. <i>Diabetes Care</i> 2024;47:1257–1275. <a href="https://doi.org/10.2337/dci24-0032" target="_blank" rel="noopener">doi:10.2337/dci24-0032</a></li>
<li id="ref-6">Joint British Diabetes Societies for Inpatient Care. The management of diabetic ketoacidosis in adults (2023); Management of the hyperosmolar hyperglycaemic state in adults (2022); The hospital management of hypoglycaemia in adults (2023). <a href="https://abcd.care/joint-british-diabetes-societies-jbds-inpatient-care-group" target="_blank" rel="noopener">abcd.care</a></li>
<li id="ref-7">KDIGO 2022 Clinical Practice Guideline for Diabetes Management in CKD. <i>Kidney Int</i> 2022;102(5S):S1–S127. <a href="https://doi.org/10.1016/j.kint.2022.06.008" target="_blank" rel="noopener">doi:10.1016/j.kint.2022.06.008</a></li>
<li id="ref-8">International Diabetes Federation. IDF Diabetes Atlas, 11th ed. Brussels, 2025. <a href="https://diabetesatlas.org" target="_blank" rel="noopener">diabetesatlas.org</a></li>
<li id="ref-9">Anjana RM et al. Metabolic non-communicable disease health report of India: the ICMR-INDIAB national cross-sectional study (ICMR-INDIAB-17). <i>Lancet Diabetes Endocrinol</i> 2023;11:474–489. <a href="https://doi.org/10.1016/S2213-8587(23)00119-5" target="_blank" rel="noopener">doi:10.1016/S2213-8587(23)00119-5</a></li>
<li id="ref-10">UK Prospective Diabetes Study Group. Intensive blood-glucose control with sulphonylureas or insulin (UKPDS 33). <i>Lancet</i> 1998;352:837–853. <a href="https://doi.org/10.1016/S0140-6736(98)07019-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(98)07019-6</a></li>
<li id="ref-11">Diabetes Control and Complications Trial Research Group. <i>N Engl J Med</i> 1993;329:977–986. <a href="https://doi.org/10.1056/NEJM199309303291401" target="_blank" rel="noopener">doi:10.1056/NEJM199309303291401</a></li>
<li id="ref-12">NICE NG28. Type 2 diabetes in adults: management; NICE NG17. Type 1 diabetes in adults. <a href="https://www.nice.org.uk/guidance/ng28" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-13">Zinman B et al. (EMPA-REG OUTCOME) <i>N Engl J Med</i> 2015;373:2117–2128 <a href="https://doi.org/10.1056/NEJMoa1504720" target="_blank" rel="noopener">doi:10.1056/NEJMoa1504720</a>. Marso SP et al. (LEADER) <i>N Engl J Med</i> 2016;375:311–322 <a href="https://doi.org/10.1056/NEJMoa1603827" target="_blank" rel="noopener">doi:10.1056/NEJMoa1603827</a>.</li>
<li id="ref-14">World Health Organization. Classification of diabetes mellitus. Geneva, 2019. <a href="https://www.who.int/publications/i/item/classification-of-diabetes-mellitus" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-15">International Working Group on the Diabetic Foot. IWGDF Guidelines 2023. <a href="https://iwgdfguidelines.org" target="_blank" rel="noopener">iwgdfguidelines.org</a></li>
<li id="ref-16">Lean MEJ et al. (DiRECT) Primary care-led weight management for remission of type 2 diabetes. <i>Lancet</i> 2018;391:541–551. <a href="https://doi.org/10.1016/S0140-6736(17)33102-1" target="_blank" rel="noopener">doi:10.1016/S0140-6736(17)33102-1</a></li>
<li id="ref-17">Harrison's Principles of Internal Medicine, 21st ed.; Oxford Handbook of Endocrinology and Diabetes, 4th ed. — foundational physiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Diagnostic criteria", "<span class='pass'>Verified</span>", "WHO/ADA, ICMR 2022, Bhutan protocol"],
["Bhutan protocol and STG content", "<span class='pass'>Verified</span>", "Read directly (v3.0 2023; STG 2024)"],
["Insulin initiation and titration", "<span class='pass'>Checked</span>", "ADA algorithm; independent verification of ADA 2026 wording requested"],
["DKA/HHS regimens", "<span class='pass'>Checked</span>", "2024 consensus; JBDS; ICMR; differences shown"],
["Doses", "<span class='pass'>Checked</span>", "Formulary and labels; see drug cards"],
["Bhutan prevalence", "<span class='flag'>Evidence gap</span>", "No recent national figure in sources reviewed"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY / CC0"]], "qc")}
` }
]
});
