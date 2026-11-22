/* Diabetes in children and adolescents */
registerPage({
id: "dm-child",
title: "Diabetes — Children & Adolescents",
subtitle: "Type 1 diabetes from diagnosis to school and adolescence, DKA by weight, type 2 and monogenic diabetes in the young",
age: "Children & adolescents", specs: ["paeds", "endo", "picu", "emerg", "neo"],
keywords: ["type 1 diabetes child", "T1D", "juvenile diabetes", "childhood diabetes", "paediatric DKA", "pediatric DKA", "cerebral oedema", "insulin child", "honeymoon", "neonatal diabetes", "MODY", "youth type 2 diabetes", "ISPAD", "hypoglycaemia child", "sick day child"],
related: ["dm-adult", "dm-pregnancy", "aki-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A child with diabetes needs insulin, a confident family, and a team that is easy to reach. Diagnosis is often late, so many children arrive in DKA. The most important thing you can do is think of diabetes in any child who is drinking a lot, wetting the bed again, or losing weight.</p>
<div class="glance">
<div><h4>Suspect it when</h4><ul><li>Thirst, frequent urine, new bedwetting</li><li>Weight loss, tiredness</li><li>Vomiting with fast breathing (DKA, often misread as gastroenteritis or pneumonia)</li></ul></div>
<div><h4>Confirm</h4><p>Random glucose ≥200 mg/dL with symptoms. Check ketones and a venous gas the same day. <b>Same-day referral</b>.</p></div>
<div><h4>Insulin</h4><p>About 0.5–1 unit/kg/day at first; 0.7–1 pre-pubertal, 1.2–2 in puberty. Basal–bolus preferred.</p></div>
<div><h4>Targets (ISPAD 2024)</h4><p>HbA1c <b>7% or less</b> (6.5% or less where sensors and pumps make it safe); glucose 70–180 mg/dL most of the time; time in range over 70%.</p></div>
<div><h4>Hypoglycaemia</h4><p>0.3 g/kg fast glucose; glucagon 0.5 mg (under 25 kg) or 1 mg; IV 10% glucose 2 mL/kg.</p></div>
<div><h4>DKA</h4><p>10 mL/kg bolus (20 if shocked); deficit over 48 h; insulin 0.05–0.1 unit/kg/h after 1 h, <b>no bolus</b>; watch for cerebral oedema.</p></div>
<div><h4>Every year</h4><p>Growth, BP, thyroid, coeliac (as scheduled); from age 11 with 2–5 years' diabetes: eyes, urine ACR, lipids.</p></div>
</div>
<div class="calc" data-calc="tddchild"></div>
` },

{ id: "overview", title: "Types, causes and who is at risk", html: `
${tbl(["Type", "Age and clues", "Treatment"], [
["<b>Type 1</b> (most childhood diabetes)", "Any age, peaks at 4–6 and 10–14 years; short history, weight loss, ketones; islet antibodies positive", "Insulin from diagnosis"],
["<b>Type 2</b>", "Usually after puberty; overweight, acanthosis nigricans, family history; often no ketosis", "Lifestyle, metformin; insulin if HbA1c ≥8.5% or ketosis"],
["<b>Neonatal diabetes</b>", "<b>Diagnosed under 6 months of age</b>", "Genetic testing: about half have KCNJ11 or ABCC8 mutations that respond to high-dose sulfonylurea"],
["<b>MODY</b>", "Mild, stable hyperglycaemia; strong family history; antibodies negative", "Genetic testing; glucokinase MODY needs no treatment"],
["Secondary", "Cystic fibrosis, thalassaemia with iron overload, steroids, pancreatitis", "Treat the cause; usually insulin"]])}
<h3>How common is it?</h3>
<p>India has one of the largest numbers of children with type 1 diabetes in the world. Incidence in Bhutan has not been published. Youth-onset type 2 diabetes is rising in South Asia with childhood obesity. ${LB.bt("EVIDENCE GAP")}</p>
<h3>Risk factors</h3>
<ul><li><b>Type 1:</b> a parent or sibling with type 1 (risk about 5–8%), other autoimmune disease (thyroid, coeliac), certain HLA types. Not caused by sugar or diet.</li><li><b>Type 2:</b> obesity, family history, South Asian ancestry, maternal diabetes in pregnancy, low birth weight, puberty (physiological insulin resistance).</li></ul>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Type 1 diabetes in a child: from autoimmunity to DKA", [
F.s("Genetic risk (HLA) + environmental trigger"), F.a,
F.s("Islet autoantibodies appear; glucose still normal (stages 1–2)"), F.a,
F.s("Most beta cells destroyed → hyperglycaemia (stage 3): thirst, polyuria, weight loss"), F.a,
F.d("Insulin started in time?"), F.a,
F.b([
["No", F.e("Lipolysis → ketones → acidosis and dehydration → DKA (risk of cerebral oedema)")],
["Yes", F.ok("Partial remission (honeymoon) for weeks–months; needs under 0.5 unit/kg/day")]]), F.a,
F.s("Puberty: growth hormone causes insulin resistance → doses rise to 1.2–2 unit/kg/day")])}
<ol class="chain">
<li>Autoimmune attack on beta cells begins months or years before symptoms; antibodies appear first (stage 1–2, normal glucose).</li>
<li>When most beta cells are lost, glucose rises (stage 3) and the kidneys spill glucose, causing thirst, polyuria and weight loss.</li>
<li>Without insulin, fat is broken down to ketones; ketones and lost fluid cause acidosis and dehydration — DKA.</li>
<li>After insulin starts, the remaining beta cells often recover for weeks to months (<b>partial remission or \"honeymoon\"</b>): insulin needs drop below 0.5 unit/kg/day. Families must know this is temporary.</li>
<li><b>Puberty</b> brings growth hormone-driven insulin resistance: doses rise to 1.2–2 unit/kg/day, and control often worsens.</li></ol>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Positions", "This guide"], [
["Insulin bolus in DKA", "ICMR DKA workflow: 0.1 unit/kg IV bolus · ISPAD 2022 and BSPED: <b>no bolus in children</b>", "<b>No bolus</b>: it raises cerebral oedema risk and gives no benefit"],
["Initial fluid in DKA", "Bhutan STG: 20 mL/kg bolus then maintenance · ISPAD: 10–20 mL/kg over 20–60 min, 20 mL/kg only for shock", "Follow ISPAD; the STG figure is a primary-care resuscitation step before transfer"],
["Rescue glucose", "ICMR: 1–2 mL/kg of 25% dextrose · ISPAD/BSPED: 2 mL/kg of 10%", "10% glucose (gentler on small veins); if only 25% is available, give 1 mL/kg slowly into a good vein"],
["Insulin regimen", "ISPAD: basal–bolus or pump preferred · Resource-limited settings: twice-daily NPH + soluble is acceptable", "Basal–bolus where families can manage; twice-daily mixed regimen otherwise, with fixed meal times"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Why", "Pitfall"], [
["Polyuria, polydipsia, new bedwetting", "Osmotic diuresis", "Mistaken for UTI"],
["Weight loss, tiredness", "Catabolism without insulin", "Missed in a growing child"],
["Vomiting and abdominal pain", "Ketosis", "Diagnosed as gastroenteritis; dangerous delay"],
["Deep, sighing breathing (Kussmaul)", "Acidosis", "Diagnosed as asthma or pneumonia"],
["Drowsiness, confusion", "Severe DKA or cerebral oedema", "Emergency"],
["Oral thrush, candida nappy rash in an infant", "Glycosuria", "Check glucose"]])}
${box("red", "Red flags — test glucose now", `<ul><li>Any child with vomiting and fast or deep breathing</li><li>Polyuria with weight loss</li><li>A drowsy child with dehydration but still passing a lot of urine</li><li><b>Never send home a child with symptoms of diabetes for a fasting test tomorrow</b> — they may be in DKA by then</li></ul>`)}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "When"], [
["Capillary glucose, then lab glucose", "Diagnosis", "At once"],
["Blood ketones (or urine ketones)", "DKA risk", "At once; ketones ≥3 mmol/L with acidosis = DKA"],
["Venous blood gas, electrolytes, creatinine", "DKA severity, potassium", "If ketones raised or child unwell"],
["HbA1c", "Baseline", "At diagnosis, then every 3 months"],
["Islet autoantibodies (GAD, IA-2, ZnT8)", "Confirm type 1 when unclear", "If available"],
["TSH, thyroid antibodies", "Autoimmune thyroid disease", "Diagnosis, then every 2 years"],
["Coeliac serology (tTG IgA with total IgA)", "Coeliac disease (about 1 in 20)", "Diagnosis, then at 2 and 5 years"],
["Genetic testing", "Neonatal diabetes (under 6 months) or suspected MODY", "Referral"]])}
<div class="calc" data-calc="eag"></div>
` },

{ id: "staging", title: "DKA severity and when to escalate", html: `
${tbl(["Severity (ISPAD 2022)", "pH", "Bicarbonate (mmol/L)"], [["Mild", "Under 7.3", "Under 18"], ["Moderate", "Under 7.2", "Under 10"], ["Severe", "Under 7.1", "Under 5"]])}
<p>DKA also needs glucose over 200 mg/dL (11 mmol/L) and ketones ≥3 mmol/L (or moderate–large urine ketones).</p>
<h3>Admit to PICU or HDU when</h3><ul><li>Severe DKA, age under 5 years, or reduced consciousness</li><li>Shock</li><li>Corrected sodium abnormal, or potassium very low or high</li><li>Any sign of cerebral oedema</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. DKA in children (ISPAD 2022)</h3>
<div class="calc" data-calc="dkafluid"></div>
<ol><li><b>ABC</b>, two IV lines, weigh the child, bloods and gas, monitor glucose hourly and electrolytes 2–4-hourly, neuro observations hourly.</li>
<li><b>Fluid bolus:</b> 10 mL/kg of 0.9% saline over 30 minutes (ISPAD allows 10–20 mL/kg over 20–30 minutes); for shock, 20 mL/kg as fast as possible and reassess. BSPED subtracts a non-shock 10 mL/kg bolus from the deficit.</li>
<li><b>Then</b> replace the deficit (5–10% of body weight) evenly over <b>48 hours</b> plus maintenance. Do not include later urine losses.</li>
<li><b>Potassium:</b> ${dr("kcl", "KCl 40 mmol/L")} in the fluid once K⁺ is known and under 5.5 and the child passes urine.</li>
<li><b>Insulin:</b> ${dr("insulin_soluble", "soluble insulin")} <b>0.05–0.1 unit/kg/hour</b> (0.05 is usually enough unless severe or an adolescent), starting <b>1–2 hours after</b> fluids begin. <b>No bolus.</b> If K⁺ is under 3 mmol/L, give potassium first and delay insulin.</li>
<li>When glucose falls below about 250–300 mg/dL (14–17 mmol/L), add glucose (5%, then 10% if needed) and <b>keep insulin running</b> until acidosis resolves.</li>
<li><b>Bicarbonate:</b> not given except in life-threatening hyperkalaemia or cardiac compromise (it increases cerebral oedema risk).</li></ol>
${box("red", "Cerebral oedema — act immediately", `<p>Usually 4–12 hours into treatment. Warning signs: headache, vomiting, falling heart rate, rising BP, irritability, drowsiness, incontinence, abnormal posture or breathing.</p><ul><li>Raise the head, reduce fluid rate by a third.</li><li><b>Mannitol 0.5–1 g/kg</b> IV over 10–15 minutes, <b>or 3% saline 2.5–5 mL/kg</b>.</li><li>Call PICU; image only after treatment has started.</li></ul>`)}

<h3>B. Starting insulin (child not in DKA)</h3>
<ul><li>Total daily dose about 0.5–1 unit/kg/day at diagnosis (use the calculator above).</li>
<li><b>Basal–bolus:</b> basal (NPH twice daily, or glargine once) 40–50%; soluble insulin before each meal.</li>
<li><b>Twice-daily mixed regimen</b> (practical in Bhutan): NPH plus soluble before breakfast (two-thirds of the total dose) and before dinner (one-third); each split about two-thirds NPH, one-third soluble; fixed meal times and a mid-morning snack.</li>
<li>Check glucose before meals and at bedtime (at least 4 times a day; more during illness).</li></ul>

<h3>C. Education: the most important treatment</h3>
<ul><li>Injection technique, sites and rotation; <b>U-40 syringes</b> for NEML vials.</li>
<li>Recognising and treating hypoglycaemia; glucagon for the family where available.</li>
<li>Food: regular meals; counting or estimating carbohydrate; no forbidden foods, but planned treats.</li>
<li>Exercise: check glucose before sport; extra snack or lower dose.</li>
<li><b>Sick-day rules:</b> never stop insulin; check glucose 2–3-hourly and ketones; extra soluble insulin 5–10% of total daily dose if ketones are 0.6–1.4 mmol/L, 10–20% if ≥1.5 (ISPAD); fluids; come in if vomiting or ketones are rising.</li>
<li>School plan: teachers know the signs of hypoglycaemia; glucose and snacks in the bag.</li></ul>

<h3>D. Hypoglycaemia</h3>
<p>Under 70 mg/dL: <b>0.3 g/kg</b> fast-acting glucose (sugar water, juice), recheck in 15 minutes, then a snack. Severe (seizure, cannot swallow): ${dr("glucagon")} 0.5 mg (under 25 kg) or 1 mg IM, or ${dr("dextrose", "10% glucose")} 2 mL/kg IV.</p>

<h3>E. Type 2 diabetes in youth</h3>
<ul><li>HbA1c under 8.5% and no ketosis: lifestyle plus ${dr("metformin")} (500 mg daily, up to 2,000 mg/day).</li>
<li>HbA1c ≥8.5%, ketosis or DKA: basal insulin as well, then wean as control improves.</li>
<li>If targets are not met on metformin: GLP-1 agonist (liraglutide, approved from 10 years) where available.</li>
<li>Screen for complications at diagnosis (youth type 2 progresses fast): BP, urine ACR, eyes, lipids, liver.</li></ul>

<h3>F. Neonatal diabetes</h3>
<p>Persistent hyperglycaemia before 6 months of age is monogenic until proven otherwise. Start insulin, send genetic testing urgently. KCNJ11/ABCC8 mutations can switch to oral glibenclamide, with better control and neurodevelopment.</p>
` },

{ id: "drugs", title: "Medicines and doses (children)", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("insulin_soluble", "Soluble insulin"), "Bolus per meal; DKA 0.05–0.1 unit/kg/h IV", "No bolus in DKA"],
[dr("insulin_nph", "NPH insulin"), "Basal; twice daily", "Roll vial; U-40 syringes"],
[dr("insulin_analogue", "Glargine / rapid analogues"), "Basal once daily; rapid with meals", "Private supply (U-100)"],
[dr("glucagon"), "0.5 mg under 25 kg; 1 mg 25 kg or more", "Not on NEML"],
[dr("dextrose", "Glucose 10%"), "2 mL/kg IV for severe hypoglycaemia", "Then infusion if needed"],
[dr("kcl", "Potassium chloride"), "40 mmol/L in DKA fluids", "Max 0.5 mmol/kg/h"],
[dr("metformin"), "Age 10+: 500 mg daily → max 2,000 mg/day", "Type 2 only"],
[dr("glp1", "Liraglutide"), "Age 10+: 0.6 → 1.2 → 1.8 mg daily", "Type 2 only; not on NEML"]])}
` },

{ id: "complications", title: "Complications and long-term care", html: `
${tbl(["Screening (ISPAD 2022)", "Start", "Frequency"], [
["Retinopathy (dilated fundus)", "Age 11 years with 2–5 years' diabetes", "Every 2–3 years (yearly if risk factors)"],
["Urine ACR", "Age 11 with 2–5 years' diabetes", "Yearly"],
["BP", "From diagnosis", "Every visit/yearly"],
["Lipids", "From age 11 (earlier with family history)", "Every 3 years if normal"],
["Thyroid", "Diagnosis", "Every 2 years"],
["Coeliac", "Diagnosis", "At 2 and 5 years"],
["Growth and puberty", "Diagnosis", "Every visit"],
["Mood, eating disorders, family stress", "From diagnosis", "Yearly; more in adolescence"]])}
<p>Recurrent DKA in adolescence often signals missed insulin, family stress or depression. Address the cause, not only the glucose.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Clinic every 3 months: HbA1c, growth, injection sites, glucose diary, hypoglycaemia, school.</li>
<li>Transition to adult care from about 15–18 years, planned over 1–2 years.</li></ul>
${box("green", "What to tell the family", `<ul><li>\"Nothing you did caused this. Type 1 diabetes is the body's immune system attacking the cells that make insulin.\"</li><li>Your child can go to school, play sport and live a full life.</li><li>The first weeks may need less insulin (\"honeymoon\"); doses will rise later.</li><li>Never stop insulin when your child is ill. Call us early.</li><li>Keep sugar with your child at all times.</li></ul>`)}
${box("red", "Bring your child in immediately if", `<ul><li>Vomiting, abdominal pain, fast or deep breathing</li><li>Ketones moderate or high, or glucose stays over 250–300 despite extra insulin</li><li>Drowsiness, confusion or a fit</li></ul>`)}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Child with possible diabetes", [
F.s("Thirst, polyuria, weight loss, bedwetting, or vomiting with deep breathing"), F.a,
F.s("Capillary glucose now"), F.a,
F.d("Glucose ≥200 mg/dL?"), F.a,
F.b([["Yes", F.s("Ketones and venous gas the same day")], ["No", F.ok("Look for other causes; recheck if symptoms persist")]]), F.a,
F.d("pH under 7.3 or HCO₃ under 18 with ketones ≥3?"), F.a,
F.b([["Yes", F.e("DKA protocol (no insulin bolus); senior help")], ["No", F.s("Start subcutaneous insulin; education; same-day specialist contact")]])])}
${F.chart("2 · Child DKA (ISPAD 2022)", [
F.d("Shocked?"), F.a,
F.b([["Yes", F.e("20 mL/kg 0.9% saline rapidly; reassess")], ["No", F.s("10 mL/kg over 30–60 min")]]), F.a,
F.s("Deficit (5% if pH ≥7.1, 10% if under 7.1) over 48 h + maintenance; KCl 40 mmol/L"), F.a,
F.s("After 1 h: insulin 0.05–0.1 unit/kg/h, no bolus"), F.a,
F.s("Glucose under 250–300: add glucose to fluids; continue insulin"), F.a,
F.d("Headache, falling HR, rising BP, drowsiness?"), F.a,
F.b([["Yes", F.e("Cerebral oedema: mannitol 0.5–1 g/kg or 3% saline 2.5–5 mL/kg; PICU")], ["No", F.ok("Continue until pH over 7.3, ketones under 1; then SC insulin with a meal")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Check glucose in every child with vomiting and fast breathing.</b> DKA is often first treated as gastroenteritis or pneumonia.</li>
<li><b>Weigh the child on arrival</b>; all doses depend on it.</li>
<li><b>Fluid and insulin slowly</b> in DKA: cerebral oedema is the leading cause of death in children with DKA.</li>
<li><b>A falling insulin need after diagnosis is the honeymoon,</b> not a cure. Do not stop insulin.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Insulin bolus in DKA", "Cerebral oedema risk", "Infusion only, after 1 h of fluids"],
["Large repeated fluid boluses without shock", "Cerebral oedema", "10 mL/kg once; deficit over 48 h"],
["Sending a symptomatic child home for a fasting test", "DKA overnight", "Test and refer the same day"],
["Stopping insulin when the child is not eating", "DKA", "Sick-day rules"],
["U-100 insulin in a U-40 syringe", "2.5 × overdose", "Match syringe and vial"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Classic triad of type 1 diabetes in a child?", "Polyuria, polydipsia and weight loss (with tiredness and new bedwetting).")}
${qa("Intern/MO", "Initial fluid for a non-shocked child in DKA?", "10 mL/kg 0.9% saline over 30–60 minutes, then deficit over 48 hours plus maintenance.")}
${qa("Intern/MO", "Insulin dose in paediatric DKA?", "0.05–0.1 unit/kg/hour by infusion, starting 1 hour after fluids, with no bolus.")}
${qa("Intern/MO", "Treatment of cerebral oedema in DKA?", "Mannitol 0.5–1 g/kg or 3% saline 2.5–5 mL/kg over 10–15 minutes, head up, reduce fluids, PICU.")}
${qa("Intern/MO", "Glucagon dose for a 20 kg child?", "0.5 mg IM or SC (1 mg if 25 kg or more).")}
${qa("Specialist", "Total daily insulin in puberty?", "About 1.2–2 units/kg/day, because of growth hormone-driven insulin resistance.")}
${qa("Specialist", "Diabetes at 3 months of age: what next?", "Neonatal (monogenic) diabetes: start insulin and send genetic testing; KCNJ11/ABCC8 mutations may switch to high-dose sulfonylurea.")}
${qa("Viva", "When do you start screening for retinopathy in a child with type 1?", "From age 11 with 2–5 years' diabetes duration, then every 2–3 years (ISPAD 2022).")}
${qa("Intern/MO", "Sick-day extra insulin with ketones 1.8 mmol/L?", "About 10–20% of the total daily dose as soluble/rapid insulin, repeated every 2–4 hours as needed, with fluids (ISPAD).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">ISPAD Clinical Practice Consensus Guidelines 2022 (Pediatric Diabetes 2022;23(8)): definition and classification; insulin treatment; glycaemic targets; DKA and HHS (Glaser N et al.); hypoglycaemia; sick-day management; microvascular and macrovascular complications; type 2 diabetes in youth. <a href="https://www.ispad.org/page/ISPADGuidelines2022" target="_blank" rel="noopener">ispad.org</a></li>
<li id="ref-2">British Society for Paediatric Endocrinology and Diabetes. Integrated care pathway for the management of children and young people with DKA (2021). <a href="https://www.bsped.org.uk/clinical-resources/bsped-dka-guidelines/" target="_blank" rel="noopener">bsped.org.uk</a></li>
<li id="ref-3">ICMR STW: Diabetes Mellitus Type 1; Diabetic Ketoacidosis (2022); ICMR Guidelines for Management of Type 1 Diabetes (2022).</li>
<li id="ref-4">Bhutan STG 2024 §5.3–5.5; Bhutan NEML 2025.</li>
<li id="ref-5">American Diabetes Association. Standards of Care in Diabetes—2026, Section 14: Children and adolescents. <i>Diabetes Care</i> 2026;49(Suppl 1).</li>
<li id="ref-6">Kuppermann N et al. (PECARN FLUID) Clinical trial of fluid infusion rates for pediatric DKA. <i>N Engl J Med</i> 2018;378:2275–2287. <a href="https://doi.org/10.1056/NEJMoa1716816" target="_blank" rel="noopener">doi:10.1056/NEJMoa1716816</a></li>
<li id="ref-7">Kliegman RM et al. Nelson Textbook of Pediatrics, 22nd ed. 2024 — diabetes mellitus in children (foundational; local copy excerpts only).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["ISPAD DKA protocol and doses", "<span class='pass'>Checked</span>", "Independent verification of ISPAD/BSPED figures requested"],
["Insulin dose ranges", "<span class='pass'>Checked</span>", "ISPAD 2022"],
["Bhutan incidence", "<span class='flag'>Evidence gap</span>", "—"]], "qc")}
` }
]
});
