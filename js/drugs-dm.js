/* Diabetes drug cards. Bhutan sources: NEMF 2022 monographs and NEML 2025 listings (via the Bhutan Clinical Reference app),
   Bhutan Diabetes Protocol v3.0 (2023), STG 2024. International: ADA Standards of Care, KDIGO 2022 Diabetes in CKD,
   ISPAD 2022, JBDS guidelines, product labels. Written in our own words; doses cross-checked against at least two sources. */
Object.assign(GUIDE.drugs, {

metformin: {
  name: "Metformin", cls: "Biguanide — first-line oral glucose-lowering drug", brands: "Glycomet, Glyciphage, Obimet",
  bt: "Listed — 500 mg tablet (down to PHC); 1 g sustained-release tablet (NRH/RRH, added 2025)",
  moa: "<p>Lowers glucose mainly by reducing glucose output from the liver and improving insulin sensitivity. On its own it does not cause hypoglycaemia, it is weight-neutral or helps slight weight loss, it is cheap, and it has decades of safety data. It is excreted unchanged by the kidneys, which is why the dose depends on eGFR.</p>",
  ind: "<p>First-line drug for most people with type 2 diabetes (Bhutan Diabetes Protocol 2023; ICMR 2022; ADA). Also used in gestational diabetes when diet fails (with insulin as the alternative), prediabetes in high-risk people, and polycystic ovary syndrome.</p>",
  ci: "<ul><li>eGFR under 30 mL/min/1.73 m².</li><li>Ketoacidosis, severe dehydration, shock, sepsis, hypoxia (risk of lactic acidosis).</li><li>Decompensated liver disease and heavy alcohol use.</li><li>Iodinated contrast or major surgery when eGFR is under 30 or AKI is present: pause and restart after 48 h if kidney function is stable.</li><li>Not for type 1 diabetes as sole treatment.</li></ul>",
  adult: "<p><b>Start 500 mg once or twice daily with meals</b>, increasing by 500 mg every 1–2 weeks to reduce stomach upset. The usual effective dose is <b>2,000 mg/day</b> in 2–3 divided doses; the formulary maximum is 2,550 mg/day. Sustained-release (Bhutan 1 g SR): 1–2 g once daily with the evening meal, often better tolerated.</p>",
  child: "<p>Type 2 diabetes in children aged 10 years or more: <b>500 mg once or twice daily</b>, increasing weekly by 500 mg to a <b>maximum of 2,000 mg/day</b> in divided doses (product label; ISPAD 2022). Not used in type 1 diabetes outside specialist research settings.</p>",
  preg: "<p>Used for gestational diabetes and type 2 diabetes in pregnancy when diet is not enough. It crosses the placenta; long-term follow-up of exposed children shows similar health but slightly higher weight in some studies, so discuss this with the woman. Insulin remains the preferred drug in many guidelines when glucose is high.</p>",
  bf: "<p>Compatible: very low levels in milk.</p>",
  renal: "<p><b>eGFR ≥45:</b> full dose. <b>eGFR 30–44:</b> maximum 1,000 mg/day; KDIGO 2022 allows starting at half dose, while many labels advise not starting at this level. <b>eGFR under 30:</b> stop. Check eGFR at least yearly, every 3–6 months when under 60.</p>",
  hep: "<p>Avoid in decompensated liver disease. Stable MASLD (fatty liver) is not a contraindication; metformin is safe there.</p>",
  elderly: "<p>Check eGFR more often; watch for weight loss and B12 deficiency.</p>",
  other: "<p><b>Sick-day rule:</b> stop during vomiting, diarrhoea, fever with poor intake or dehydration; restart 24–48 h after eating and drinking normally.</p>",
  inter: "<p>Iodinated contrast (see above); alcohol excess; topiramate and carbonic anhydrase inhibitors (acidosis).</p>",
  ae: "<p>Nausea, diarrhoea, abdominal discomfort and metallic taste (usually settle; slow titration helps). <b>Vitamin B12 deficiency</b> with long use (check B12 if anaemia or neuropathy, and periodically). Lactic acidosis is very rare and almost always with kidney failure, hypoxia or sepsis.</p>",
  mon: "<p>eGFR yearly (more often in CKD); B12 every few years or if neuropathy or anaemia.</p>",
  tox: "<p>Large overdose can cause severe lactic acidosis; treat supportively and consider haemodialysis.</p>",
  src: "<p>Bhutan NEMF 2022 and NEML 2025; Bhutan Diabetes Protocol v3.0 (2023); ICMR STW Type 2 DM (2022); ADA Standards of Care; KDIGO 2022 Diabetes in CKD (Kidney Int 2022;102(5S):S1–S127); product labels.</p>"
},

glipizide: {
  name: "Glipizide (and other sulfonylureas)", cls: "Sulfonylurea — insulin secretagogue", brands: "Glynase, Glucotrol; gliclazide: Diamicron",
  bt: "Listed — glipizide 5 mg tablet (down to DH). Gliclazide and glimepiride are not on the NEML",
  moa: "<p>Closes ATP-sensitive potassium channels on beta cells, so the pancreas releases insulin regardless of the glucose level. That makes it effective and cheap, but it can cause hypoglycaemia and weight gain.</p>",
  ind: "<p>Second-line add-on to metformin in type 2 diabetes when cost or availability rules out newer drugs (Bhutan Diabetes Protocol: add pioglitazone, glipizide or insulin if targets are not met).</p>",
  ci: "<ul><li>Type 1 diabetes, DKA.</li><li>Severe liver disease.</li><li>Pregnancy and breastfeeding (switch to insulin or metformin).</li><li>Avoid glibenclamide (glyburide) in older people and CKD: long-acting, high hypoglycaemia risk.</li></ul>",
  adult: "<p><b>Glipizide:</b> start <b>2.5–5 mg once daily 15–30 minutes before breakfast</b>; increase by 2.5–5 mg every 1–2 weeks. Doses above 15 mg/day are split before breakfast and dinner. Maximum <b>20 mg/day</b> (UK/Bhutan practice; US label 40 mg).<br><b>Gliclazide</b> (India): 40–80 mg daily, up to 320 mg/day in two doses; modified-release 30–120 mg once daily.</p>",
  child: "<p>Not recommended for youth-onset type 2 diabetes (ISPAD 2022; ADA). Specialist use only, for example in some monogenic diabetes (HNF1A/HNF4A-MODY, neonatal diabetes due to KCNJ11/ABCC8), where sulfonylureas work very well.</p>",
  preg: "<p>Avoid; use insulin or metformin.</p>", bf: "<p>Avoid; risk of neonatal hypoglycaemia.</p>",
  renal: "<p>Glipizide and gliclazide are preferred in CKD: start low (glipizide 2.5 mg). Avoid glibenclamide. Hypoglycaemia risk rises as eGFR falls.</p>",
  hep: "<p>Reduce the dose; avoid in severe impairment.</p>",
  elderly: "<p>Start at the lowest dose; hypoglycaemia is the main danger. Prefer other classes where available.</p>",
  inter: "<p>Fluconazole, clarithromycin, cotrimoxazole and alcohol increase hypoglycaemia; β-blockers mask warning symptoms.</p>",
  ae: "<p>Hypoglycaemia (can be prolonged: observe for 24 h after an overdose or severe episode), weight gain, GI upset.</p>",
  mon: "<p>Self-monitoring of glucose, especially when meals are missed.</p>",
  tox: "<p>Overdose causes recurrent, prolonged hypoglycaemia. Give IV glucose and admit; octreotide is the specific antidote for sulfonylurea-induced hypoglycaemia.</p>",
  src: "<p>Bhutan NEMF 2022, NEML 2025, Diabetes Protocol v3.0; ADA Standards of Care (pharmacological approaches); ISPAD 2022; product labels.</p>"
},

pioglitazone: {
  name: "Pioglitazone", cls: "Thiazolidinedione (PPAR-γ agonist)",
  bt: "Listed — 15 mg tablet (down to DH)",
  moa: "<p>Improves insulin sensitivity in muscle, fat and liver by switching on PPAR-γ. Lowers HbA1c by about 1%, does not cause hypoglycaemia alone, and improves fatty liver (MASH).</p>",
  ind: "<p>Add-on in type 2 diabetes, especially with insulin resistance or MASH (fatty liver with inflammation), when heart failure is absent.</p>",
  ci: "<ul><li><b>Heart failure</b> (any history) — causes fluid retention.</li><li>Active or previous bladder cancer, or unexplained blood in the urine.</li><li>Active liver disease or ALT over 2.5 × upper limit.</li><li>High fracture risk (osteoporosis, especially women).</li><li>Type 1 diabetes, DKA.</li></ul>",
  adult: "<p><b>15–30 mg once daily</b>, increasing to a maximum of <b>45 mg once daily</b>. The full effect takes 6–12 weeks.</p>",
  child: "<p>Not licensed under 18 years.</p>",
  preg: "<p>Avoid.</p>", bf: "<p>Avoid.</p>",
  renal: "<p>No dose change; watch fluid retention in advanced CKD.</p>",
  hep: "<p>Check ALT before starting; do not start if ALT is over 2.5 × the upper limit.</p>",
  elderly: "<p>Fracture and heart-failure risk.</p>",
  inter: "<p>Insulin and sulfonylureas: more oedema and hypoglycaemia; gemfibrozil raises its levels.</p>",
  ae: "<p>Weight gain, oedema, heart failure, fractures, macular oedema (rare), possible small bladder cancer risk.</p>",
  mon: "<p>Weight, oedema, symptoms of heart failure; ALT at baseline and as clinically indicated.</p>",
  src: "<p>Bhutan NEMF 2022, NEML 2025, Diabetes Protocol v3.0; ADA Standards of Care; AASLD MASLD guidance 2023; product label.</p>"
},

dpp4: {
  name: "Vildagliptin / sitagliptin (DPP-4 inhibitors)", cls: "Dipeptidyl peptidase-4 inhibitor (gliptin)", brands: "Galvus, Januvia; many generics in India",
  bt: "Listed — vildagliptin 50 mg tablet (NRH/RRH, and DH with a medical specialist). Sitagliptin not listed",
  moa: "<p>Blocks the enzyme that breaks down the body's own incretin hormones (GLP-1, GIP), so insulin release after meals rises and glucagon falls. Modest HbA1c fall (about 0.5–0.8%), no weight gain, low hypoglycaemia risk on its own.</p>",
  ind: "<p>Add-on to metformin in type 2 diabetes, especially in older people or when hypoglycaemia must be avoided. Neutral for heart and kidney outcomes (no protection, no harm), so SGLT2 inhibitors or GLP-1 receptor agonists come first when there is heart or kidney disease.</p>",
  ci: "<ul><li>Type 1 diabetes, DKA.</li><li>Previous pancreatitis (use caution).</li><li>Vildagliptin: liver impairment or ALT over 3 × upper limit.</li><li>Do not combine with a GLP-1 receptor agonist (same pathway, no added benefit).</li></ul>",
  adult: "<p><b>Vildagliptin:</b> 50 mg twice daily with metformin; 50 mg once daily (morning) when combined with a sulfonylurea. Maximum 100 mg/day.<br><b>Sitagliptin:</b> 100 mg once daily.</p>",
  child: "<p>Not recommended in children (trials showed little benefit).</p>",
  preg: "<p>Avoid; use insulin.</p>", bf: "<p>Avoid.</p>",
  renal: "<p><b>Vildagliptin:</b> 50 mg once daily if eGFR is under 50. <b>Sitagliptin:</b> 50 mg daily at eGFR 30–44, 25 mg daily under 30. <b>Linagliptin</b> (not on NEML) needs no adjustment.</p>",
  hep: "<p>Vildagliptin: check liver tests before starting and periodically; avoid in liver disease.</p>",
  ae: "<p>Nasopharyngitis, headache; rare pancreatitis, bullous pemphigoid, joint pain; saxagliptin (not vildagliptin) increased heart-failure admissions.</p>",
  mon: "<p>Liver tests with vildagliptin; eGFR for dose.</p>",
  src: "<p>Bhutan NEML 2025; ADA Standards of Care; product labels (vildagliptin SmPC, sitagliptin label).</p>"
},

glp1: {
  name: "Semaglutide / liraglutide (GLP-1 receptor agonists)", cls: "Glucagon-like peptide-1 receptor agonist", brands: "Ozempic, Rybelsus, Victoza",
  bt: "Not listed — not on the NEML 2025; available privately or via referral",
  moa: "<p>Mimics GLP-1: more insulin and less glucagon when glucose is high, slower stomach emptying, and strong appetite reduction. Lowers HbA1c by about 1–1.5% and weight by 5–10%, and semaglutide and liraglutide reduce heart attacks, strokes and kidney disease progression in people with established cardiovascular disease.</p>",
  ind: "<p>Type 2 diabetes with established atherosclerotic disease, high cardiovascular risk, CKD (FLOW trial) or obesity, regardless of HbA1c (ADA). Also when HbA1c is above target on metformin and an SGLT2 inhibitor (KDIGO 2024).</p>",
  ci: "<ul><li>Personal or family history of medullary thyroid cancer or MEN 2.</li><li>Previous pancreatitis (caution).</li><li>Severe gastroparesis.</li><li>Type 1 diabetes as sole therapy.</li><li>Pregnancy (stop semaglutide at least 2 months before a planned pregnancy).</li></ul>",
  adult: "<p><b>Semaglutide SC:</b> 0.25 mg once weekly for 4 weeks (a starting dose, not a treatment dose), then 0.5 mg weekly; increase after at least 4 weeks to 1 mg, then to 2 mg if needed.<br><b>Oral semaglutide:</b> 3 mg daily for 30 days, then 7 mg, then 14 mg (a newer tablet range of 1.5, 4 and 9 mg is <b>not interchangeable mg for mg</b> with the older one: check which product the patient has); take on an empty stomach with a sip of water, 30 minutes before food.<br><b>Liraglutide:</b> 0.6 mg daily for 1 week, then 1.2 mg, up to 1.8 mg daily.</p>",
  child: "<p>Liraglutide (and weekly exenatide and dulaglutide) are approved for type 2 diabetes from age 10 years, at adult doses with the same slow titration.</p>",
  preg: "<p>Stop before conception.</p>", bf: "<p>Avoid (no data).</p>",
  renal: "<p>No dose change; take care with dehydration from vomiting (AKI risk).</p>",
  hep: "<p>No adjustment; beneficial in MASH.</p>",
  elderly: "<p>Watch for weight and muscle loss in frail people.</p>",
  inter: "<p>Insulin and sulfonylureas: reduce their doses to avoid hypoglycaemia. Slowed stomach emptying can delay absorption of oral drugs.</p>",
  ae: "<p>Nausea, vomiting, diarrhoea (common early, reduced by slow titration and smaller meals), gallstones, pancreatitis (rare), worsening of diabetic retinopathy with rapid HbA1c fall.</p>",
  mon: "<p>Weight, GI symptoms; eye screening if there is existing retinopathy.</p>",
  src: "<p>ADA Standards of Care; KDIGO 2024 CKD Rec 3.9.1; Perkovic V et al. FLOW, N Engl J Med 2024;391:109–121; product labels.</p>"
},

insulin_soluble: {
  name: "Soluble (regular) human insulin", cls: "Short-acting insulin", brands: "Actrapid, Huminsulin R, Insugen R",
  bt: "Listed — insulin soluble <b>40 IU/mL (U-40) vial</b>, down to DH",
  moa: "<p>Identical to human insulin. Given under the skin 30 minutes before a meal it starts in 30–60 minutes, peaks at 2–4 hours and lasts 6–8 hours. Given intravenously it acts within minutes and is the insulin used for drips in DKA, HHS and surgery.</p>",
  ind: "<p>Mealtime (bolus) insulin in basal–bolus regimens; correction doses; IV infusions (DKA, HHS, perioperative, hyperkalaemia).</p>",
  ci: "<p>Hypoglycaemia. Do not start an IV insulin infusion in DKA until potassium is known to be at least 3.5 mmol/L.</p>",
  adult: "<ul><li><b>Mealtime:</b> start about 4 units (or 10% of the basal dose) before the largest meal, adjusting by 1–2 units every few days to the 2-hour post-meal glucose.</li><li><b>Basal–bolus (type 1):</b> total daily dose usually 0.4–1.0 unit/kg/day; about half as basal, the rest split before meals.</li><li><b>DKA:</b> 0.1 unit/kg/hour IV fixed-rate infusion (50 units in 50 mL 0.9% saline = 1 unit/mL).</li></ul>",
  child: "<p>Same principles, weight-based. In children with DKA use 0.05–0.1 unit/kg/hour, starting at least 1 hour after fluids, with <b>no bolus</b> (ISPAD 2022).</p>",
  neo: "<p>Neonatal hyperglycaemia: specialist infusion only (typically 0.01–0.05 unit/kg/hour).</p>",
  preg: "<p>Safe; insulin of choice for pregnancy. Requirements rise steeply after 20–24 weeks and fall immediately after delivery.</p>",
  bf: "<p>Safe.</p>",
  renal: "<p>Insulin is cleared by the kidney: needs fall as eGFR falls, so watch for hypoglycaemia.</p>",
  hep: "<p>Reduced glucose production in liver failure: lower doses, hypoglycaemia risk.</p>",
  other: "<p class='warn'><b>Bhutan safety point:</b> NEML insulins are U-40 (40 units/mL). Use U-40 syringes only. Mismatched syringes are dangerous both ways: U-40 insulin drawn to the \"10\" mark of a U-100 syringe gives only 4 units (under-dose, high glucose), while U-100 pen insulin drawn to \"10\" on a U-40 syringe gives 25 units (2.5 times the dose, severe hypoglycaemia). Patients moving to pens from private pharmacies (U-100) must be retaught. Store unopened vials in the fridge (2–8 °C, never frozen); a vial in use keeps 28 days at room temperature.</p>",
  ae: "<p>Hypoglycaemia, weight gain, lipohypertrophy (rotate sites), hypokalaemia with IV use.</p>",
  mon: "<p>Capillary glucose before meals and at bedtime; HbA1c every 3 months.</p>",
  src: "<p>Bhutan NEMF 2022, NEML 2025; ADA Standards of Care; ISPAD 2022; JBDS-IP guidelines; Umpierrez GE et al. Hyperglycemic crises consensus, Diabetes Care 2024;47:1257–1275.</p>"
},

insulin_nph: {
  name: "Isophane (NPH) human insulin", cls: "Intermediate-acting basal insulin", brands: "Insulatard, Huminsulin N",
  bt: "Listed — insulin isophane <b>40 IU/mL (U-40)</b>, down to DH",
  moa: "<p>Cloudy suspension that is absorbed slowly: onset 1–2 hours, peak 4–8 hours, lasts 12–16 hours. Cheap and effective, but the peak raises the risk of night-time hypoglycaemia compared with glargine.</p>",
  ind: "<p>Basal insulin in type 2 diabetes (usually at bedtime) and in type 1 diabetes (twice daily). The usual first insulin in Bhutan.</p>",
  ci: "<p>Hypoglycaemia. Not for IV use.</p>",
  adult: "<p><b>Starting in type 2 diabetes:</b> <b>10 units</b> (or 0.1–0.2 unit/kg) at bedtime, continuing metformin. Increase by <b>2 units every 3 days</b> until fasting glucose is 80–130 mg/dL (Bhutan Diabetes Protocol target). If a hypoglycaemic episode occurs, reduce by 4 units or 10–20%. If the dose exceeds about 0.5 unit/kg/day and fasting glucose is at target but HbA1c is not, add mealtime insulin rather than pushing basal higher (\"overbasalisation\").</p>",
  child: "<p>Used twice daily (before breakfast and at bedtime) in some paediatric regimens. Dose by weight and pubertal stage (see paediatric chapter).</p>",
  preg: "<p>Safe; preferred basal insulin in pregnancy alongside detemir.</p>", bf: "<p>Safe.</p>",
  renal: "<p>Lower doses as eGFR falls.</p>",
  other: "<p class='warn'>Roll the vial gently 10–20 times until uniformly cloudy before drawing up. Use U-40 syringes for NEML vials.</p>",
  ae: "<p>Nocturnal hypoglycaemia, weight gain.</p>",
  mon: "<p>Fasting glucose daily while titrating; bedtime and occasional 3 a.m. checks if night sweats or nightmares.</p>",
  src: "<p>Bhutan NEMF 2022, NEML 2025, Diabetes Protocol v3.0; ADA Standards of Care (insulin initiation algorithm); ICMR STW Type 2 DM.</p>"
},

insulin_premix: {
  name: "Premixed human insulin 30/70", cls: "Biphasic insulin (30% soluble + 70% isophane)", brands: "Mixtard 30, Huminsulin 30/70",
  bt: "Listed — insulin mixtard (soluble + isophane) <b>40 IU/mL (U-40)</b>",
  moa: "<p>One injection gives a short-acting peak for the meal and an intermediate-acting tail. Simpler than basal–bolus, but less flexible: meals must be regular in timing and size.</p>",
  ind: "<p>Type 2 diabetes when basal insulin alone is not enough and a simple twice-daily regimen suits the person's routine. Widely used in South Asia.</p>",
  ci: "<p>Erratic eating patterns; hypoglycaemia.</p>",
  adult: "<p>Given <b>twice daily, 30 minutes before breakfast and dinner</b>. Converting from basal: divide the current basal dose (plus about 10% if HbA1c is high) as two-thirds before breakfast and one-third before dinner, or half and half (ADA algorithm). Adjust the morning dose to the pre-dinner glucose and the evening dose to the next fasting glucose, by 2–4 units every 3–4 days.</p>",
  child: "<p>Sometimes used in older children when basal–bolus is not feasible; basal–bolus is preferred (ISPAD).</p>",
  preg: "<p>Usable, but split regimens give better control in pregnancy.</p>", bf: "<p>Safe.</p>",
  other: "<p class='warn'>Never skip the meal after injecting. Mix gently before use. U-40 syringes for NEML vials.</p>",
  ae: "<p>Hypoglycaemia (late morning and night), weight gain.</p>",
  src: "<p>Bhutan NEML 2025; ADA Standards of Care (intensifying to injectable therapies); ICMR STW.</p>"
},

insulin_analogue: {
  name: "Insulin analogues: glargine, detemir, degludec (basal) · aspart, lispro, glulisine (rapid)", cls: "Modern basal and rapid-acting insulins", brands: "Lantus, Basalog, Toujeo, Tresiba; NovoRapid, Humalog",
  bt: "Not listed — not on NEML 2025; available privately (usually U-100 pens)",
  moa: "<p><b>Basal analogues</b> give a flat 24-hour profile with less night-time hypoglycaemia than NPH. <b>Rapid analogues</b> start in 10–15 minutes and can be injected just before (or straight after) eating.</p>",
  ind: "<p>Type 1 diabetes (preferred where affordable), type 2 diabetes with troublesome hypoglycaemia on NPH.</p>",
  ci: "<p>Hypoglycaemia.</p>",
  adult: "<p><b>Glargine U-100:</b> 10 units or 0.1–0.2 unit/kg once daily at the same time each day; titrate by 2 units every 3 days to fasting target. <b>Switching from twice-daily NPH:</b> start glargine at about 80% of the total NPH dose. <b>Rapid analogue:</b> 0–15 minutes before meals; dose by carbohydrate counting or fixed doses.</p>",
  child: "<p>Preferred in children with type 1 diabetes where affordable; basal about 30–50% of total daily dose (ISPAD 2022).</p>",
  preg: "<p>Detemir, aspart and lispro have the most pregnancy data; glargine is widely used and considered acceptable.</p>", bf: "<p>Safe.</p>",
  other: "<p class='warn'>Pens are U-100 (100 units/mL). Never draw U-100 insulin into a U-40 syringe. Tell the patient exactly which strength they use.</p>",
  ae: "<p>Hypoglycaemia; injection-site lipohypertrophy.</p>",
  src: "<p>ADA Standards of Care; ISPAD 2022; product labels.</p>"
},

glucagon: {
  name: "Glucagon", cls: "Hyperglycaemic hormone — rescue for severe hypoglycaemia",
  bt: "Not listed — not on NEML 2025 (IV dextrose is the hospital treatment)",
  moa: "<p>Releases glucose from liver glycogen within 10–15 minutes. It does not work well when glycogen is depleted (starvation, alcohol, prolonged hypoglycaemia, sulfonylurea overdose).</p>",
  ind: "<p>Severe hypoglycaemia when the person cannot swallow and IV access is not available, given by family or ambulance staff.</p>",
  ci: "<p>Phaeochromocytoma, insulinoma.</p>",
  adult: "<p><b>1 mg IM or SC</b>; nasal glucagon 3 mg (one puff). If no response in 10–15 minutes, give IV glucose. Give oral carbohydrate as soon as the person can swallow.</p>",
  child: "<p><b>Under 25 kg (or under 6–8 years): 0.5 mg IM/SC; 25 kg or more: 1 mg</b>. Nasal glucagon 3 mg from age 4 years (ISPAD 2022).</p>",
  preg: "<p>Can be used.</p>", bf: "<p>Compatible.</p>",
  ae: "<p>Nausea and vomiting (place the person on their side).</p>",
  src: "<p>ISPAD 2022 (hypoglycaemia chapter); ADA Standards of Care; product labels.</p>"
},

dextrose: {
  name: "Glucose (dextrose) for hypoglycaemia", cls: "Carbohydrate",
  bt: "Listed — dextrose 25% (down to PHC), 10% and 5% (DH), 50% (dialysis section)",
  moa: "<p>Restores blood glucose within minutes. Concentrated solutions irritate veins and cause tissue damage if they leak, which is why 10% and 20% are preferred where possible.</p>",
  ind: "<p>Hypoglycaemia (glucose under 70 mg/dL / 3.9 mmol/L) in a person who cannot safely swallow; DKA once glucose falls below about 250 mg/dL (with ongoing insulin).</p>",
  ci: "<p>None in true hypoglycaemia.</p>",
  adult: "<ul><li><b>Conscious and able to swallow:</b> 15–20 g fast-acting glucose (3–4 teaspoons of sugar in water, 150–200 mL juice), recheck in 15 minutes, repeat up to 3 times, then a starchy snack.</li><li><b>Unable to swallow:</b> IV glucose: <b>200 mL of 10%</b> (at 800 mL/h) or <b>100 mL of 20%</b> (at 400 mL/h), both over about 15 minutes (JBDS 2023). With <b>Bhutan's 25%: 60–100 mL</b> (15–25 g) into a large vein, then flush. Recheck at 10–15 minutes and start 10% infusion if hypoglycaemia may recur (sulfonylureas, long-acting insulin, kidney failure).</li><li>Avoid 50% where possible (vein damage); if it is the only option, give 25–50 mL slowly into a large vein.</li></ul>",
  child: "<p><b>2 mL/kg of 10% glucose IV (0.2 g/kg)</b>, then a 10% infusion if needed (ISPAD 2022; BSPED). Conscious child: about 0.3 g/kg of fast-acting glucose (15 g if over 50 kg). The ICMR workflow uses 1–2 mL/kg of 25% dextrose; this guide prefers 10% because strong solutions can damage small veins and cause rebound.</p>",
  neo: "<p>Neonatal hypoglycaemia: 2 mL/kg of 10% glucose IV, then infusion at 4–6 mg/kg/min under neonatal guidance.</p>",
  preg: "<p>Safe.</p>",
  other: "<p class='warn'>Thiamine 100 mg IV before glucose in people with alcohol dependence or malnutrition (Wernicke's encephalopathy).</p>",
  ae: "<p>Phlebitis and tissue necrosis with strong solutions; rebound hyperglycaemia.</p>",
  src: "<p>Bhutan STG 2024 §5.5 and Diabetes Protocol v3.0; JBDS The Hospital Management of Hypoglycaemia in Adults (2023); ISPAD 2022; ICMR STW Type 1 DM.</p>"
},

kcl: {
  name: "Potassium chloride (IV)", cls: "Electrolyte replacement",
  bt: "Check local store: potassium chloride concentrate for infusion",
  moa: "<p>Insulin drives potassium into cells, so total-body potassium deficit in DKA and HHS is unmasked once treatment starts. Replacing it prevents dangerous hypokalaemia and arrhythmia.</p>",
  ind: "<p>DKA and HHS once urine output is confirmed and K⁺ is under about 5.5 mmol/L; hypokalaemia.</p>",
  ci: "<p>K⁺ over 5.5 mmol/L; anuria (until assessed).</p>",
  adult: "<p><b>DKA/HHS (JBDS):</b> K⁺ over 5.5 — none; K⁺ 3.5–5.5 — <b>40 mmol in each litre</b> of fluid; K⁺ under 3.5 — senior review, more potassium and delay or reduce insulin until K⁺ is 3.5 or more (ADA 2024: hold insulin if K⁺ under 3.5). Peripheral infusion rate usually no faster than 10 mmol/hour; faster rates need ECG monitoring and a central line.</p>",
  child: "<p>DKA: <b>40 mmol/L</b> in the replacement fluid from the start of the infusion phase unless K⁺ is over 5.5 or the child is anuric (ISPAD 2022). Maximum rate 0.5 mmol/kg/hour.</p>",
  other: "<p class='warn'><b>Never give potassium concentrate as an IV push.</b> Use pre-mixed bags where available; store concentrate separately from other ampoules.</p>",
  ae: "<p>Hyperkalaemia, phlebitis.</p>",
  mon: "<p>K⁺ at 1–2 hours, then 2–4-hourly; ECG if abnormal.</p>",
  src: "<p>JBDS-IP Management of DKA in Adults (2023); Umpierrez et al. Diabetes Care 2024; ISPAD 2022 DKA chapter.</p>"
},

aspirin: {
  name: "Aspirin (low dose)", cls: "Antiplatelet",
  bt: "Listed — aspirin tablets (check strength locally)",
  moa: "<p>Irreversibly blocks platelet COX-1, reducing thromboxane and clot formation.</p>",
  ind: "<p>Secondary prevention after heart attack, stroke or peripheral arterial disease. In diabetes without established cardiovascular disease, use only after weighing bleeding risk (ADA: may be considered in high-risk people).</p>",
  ci: "<p>Active bleeding, peptic ulcer, children under 16 (Reye's syndrome, except specific indications).</p>",
  adult: "<p><b>75–162 mg once daily</b> (Bhutan practice usually 75 mg).</p>",
  preg: "<p>Low-dose aspirin (75–150 mg nightly from 12 weeks) reduces pre-eclampsia in high-risk women, including those with pre-existing diabetes.</p>",
  ae: "<p>Bleeding, dyspepsia.</p>",
  src: "<p>ADA Standards of Care (cardiovascular disease); NICE NG133 (aspirin in pregnancy).</p>"
}
});
