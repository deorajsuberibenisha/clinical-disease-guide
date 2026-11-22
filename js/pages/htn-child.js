/* Hypertension — children and adolescents */
registerPage({
id: "htn-child",
title: "Hypertension — Children & Adolescents",
subtitle: "Percentile-based diagnosis, finding the secondary cause, weight-based treatment, and acute severe hypertension in the child",
age: "Children & adolescents", specs: ["paeds", "neph", "cardio", "picu"],
keywords: ["paediatric hypertension", "pediatric hypertension", "childhood hypertension", "high blood pressure child", "BP percentile", "AAP 2017", "coarctation", "acute glomerulonephritis", "post-streptococcal glomerulonephritis", "renal scarring", "hypertensive emergency child", "amlodipine child", "enalapril child", "labetalol child", "hydralazine child", "nifedipine child", "obesity hypertension"],
related: ["htn-adult", "ckd-child", "aki-child", "hf-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In children, high blood pressure is defined by percentiles for age, sex and height, not by fixed numbers. The younger the child and the higher the pressure, the more likely there is a kidney, heart or hormone cause to find.</p>
<div class="glance">
<div><h4>Who to measure</h4><p>Every child from <b>3 years</b> once a year; <b>every visit</b> if obese, kidney disease, diabetes, coarctation or BP-raising drugs; under 3 if born preterm or with heart or kidney disease.</p></div>
<div><h4>Measure right</h4><p>Right arm, seated, correct cuff (bladder ≥40% of arm circumference, 80–100% of its length). Confirm high oscillometric readings by auscultation.</p></div>
<div><h4>Diagnose (AAP 2017)</h4><ul><li>Under 13: ≥95th percentile on 3 visits</li><li>13 and over: ≥130/80</li><li>Stage 2: ≥95th + 12 mmHg or ≥140/90</li></ul></div>
<div><h4>Find the cause</h4><p>Kidney disease (scarring, glomerulonephritis), renovascular disease, coarctation, endocrine causes, drugs; in teenagers, obesity-related primary hypertension.</p></div>
<div><h4>Treat</h4><p>Lifestyle for all. Drugs if stage 2, symptoms, organ damage, CKD or diabetes: ${dr("amlodipine")}, ${dr("enalapril")} / ${dr("losartan")}, or a thiazide. Target under the 90th percentile (under 130/80 at 13+).</p></div>
<div><h4>Emergency</h4><p>Encephalopathy, seizures, heart failure: IV ${dr("labetalol")} or ${dr("hydralazine_iv", "hydralazine")}; lower by <b>no more than 25% of the planned fall in 8 h</b>.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG 2024 has <b>no dedicated paediatric hypertension section</b>. Hypertension in children appears only under acute glomerulonephritis (§12.5.1): <b>hydralazine 0.15 mg/kg/dose IV stat</b> if BP is high, penicillin-V 250 mg BD for 14 days, then referral. The adult Hypertension Protocol v3.5 applies from 18 years. This page therefore follows AAP 2017 and ESH 2016, with NEML 2025 drugs.${r(1, 2, 3, 4)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, and how common", html: `
<h3>Definitions (AAP 2017 Clinical Practice Guideline)</h3>
${tbl(["Category", "Age 1 to under 13 years", "Age 13 and over"], [
["Normal", "Under the 90th percentile", "Under 120/80"],
["Elevated BP", "90th to under 95th percentile, or 120/80 to under the 95th percentile (whichever is lower)", "120/under 80 to 129/under 80"],
["Stage 1 hypertension", "95th percentile to under 95th + 12 mmHg, or 130/80 to 139/89 (whichever is lower)", "130/80 to 139/89"],
["Stage 2 hypertension", "95th percentile + 12 mmHg or more, or 140/90 or more (whichever is lower)", "140/90 or more"]])}
<p>Percentiles come from the AAP 2017 tables based on age, sex and <b>height percentile</b>, from normal-weight children. ESH 2016 uses the same percentiles until 16 years, and adult thresholds from 16.${r(4, 5)}</p>
<h3>How common?</h3>
<ul><li>About 3–4% of children and adolescents have hypertension worldwide, rising sharply with obesity. Elevated BP is more common.</li><li>No Bhutanese paediatric prevalence data were found. <span class="lbl l-draft">EVIDENCE GAP</span></li></ul>
<h3>Primary or secondary?</h3>
${tbl(["Feature", "Points to secondary hypertension", "Points to primary hypertension"], [
["Age", "Under 6 years", "Adolescent (≥6 years with obesity)"],
["Severity", "Stage 2, very high", "Stage 1, mildly raised"],
["History", "Preterm, umbilical catheter, UTIs, haematuria, oedema, cola urine, sore throat or skin infection, palpitations/sweating", "Family history of hypertension"],
["Examination", "Weak or delayed femoral pulses, abdominal bruit, oedema, café-au-lait spots, growth failure", "Obesity, acanthosis nigricans"]])}
${tbl(["Common secondary causes", "Clue"], [
["<b>Renal parenchymal disease</b> (reflux nephropathy/scarring, glomerulonephritis including post-streptococcal, CKD, polycystic kidneys)", "The commonest cause; abnormal urine, creatinine or ultrasound"],
["<b>Renovascular</b> (fibromuscular dysplasia, Takayasu arteritis, neurofibromatosis)", "Severe hypertension, bruit, raised renin"],
["<b>Coarctation of the aorta</b>", "Arm BP higher than leg, weak/delayed femorals, murmur"],
["Endocrine (hyperthyroidism, phaeochromocytoma, Cushing's, congenital adrenal hyperplasia, hyperaldosteronism)", "Tachycardia, sweating, striae, virilisation, low K⁺"],
["Drugs (steroids, decongestants, stimulants for ADHD, oral contraceptives, ciclosporin)", "Drug history"],
["Neonates: umbilical artery catheter thrombosis, bronchopulmonary dysplasia", "NICU history"]])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("How a child's blood pressure rises", [
F.b([
["Kidney (most common in young children)", F.s("Scarring, glomerulonephritis, CKD"), F.s("Salt and water retention + renin release")],
["Vessel", F.s("Coarctation or renal artery narrowing"), F.s("Kidney 'sees' low pressure → renin ↑")],
["Hormones / drugs", F.s("Catecholamines, cortisol, thyroid, steroids"), F.s("Vasoconstriction, salt retention")],
["Obesity (adolescents)", F.s("Insulin resistance, sympathetic overactivity, sleep apnoea"), F.s("Primary hypertension")]]), F.a,
F.s("<b>↑ Volume and ↑ resistance → sustained high BP</b>"), F.a,
F.d("Damage starts in childhood"), F.a,
F.b([
["Heart", F.e("LV hypertrophy (the commonest organ damage in children)")],
["Brain / eyes", F.e("Encephalopathy, seizures, retinopathy, facial palsy")],
["Kidney", F.e("Faster CKD progression")],
["Vessels", F.e("Arterial stiffening; adult cardiovascular disease decades early")]])])}
<p>In young children, hypertension is usually <b>a sign of another disease</b>, most often kidney disease, so treating the BP is only half the job. In adolescents, rising obesity has made <b>primary hypertension</b> the most common type, as in adults. High BP tends to 'track' into adulthood: a hypertensive teenager is likely to be a hypertensive adult.${r(4)}</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan STG 2024", "AAP 2017 (USA)", "ESH 2016 (Europe)", "This guide follows"], [
["Screening", "Not specified", "Yearly from 3 years; every visit if at risk", "From 3 years at least once; more often if at risk", "AAP"],
["Threshold at adolescence", "Not specified", "Adult-style fixed thresholds from 13 years (≥130/80)", "Percentiles to 16, adult thresholds (≥140/90) from 16", "AAP from 13; note ESH difference in teenagers"],
["Percentile tables", "Not specified", "Normal-weight children (obese excluded)", "Older tables (including obese children)", "AAP 2017 tables (lower thresholds)"],
["Target BP", "Not specified", "Under 90th percentile, or under 130/80 at 13+", "Under 90th percentile; under 75th (50th with proteinuria) in CKD", "AAP; ESH CKD target in kidney disease (ESCAPE trial)"],
["Acute severe HTN drug", "Hydralazine 0.15 mg/kg/dose IV (in AGN)", "Labetalol, nicardipine, hydralazine, esmolol", "Labetalol, nicardipine, hydralazine", "Labetalol or hydralazine (NEML); nicardipine not available"]])}
${box("bt", "Bhutan adaptation", `<p>NEML 2025 has amlodipine and losartan down to PHC, enalapril and nifedipine SR to DH, IV labetalol to DH and IV hydralazine to PHC, so most children can start treatment locally once a cause has been looked for. ABPM, renal Doppler and echocardiography are needed for full assessment and are available mainly at JDWNRH and the regional referral hospitals. ${LB.loc()}</p>`)}
` },

{ id: "presentation", title: "Clinical presentation and measuring BP", html: `
<p>Most hypertensive children have no symptoms. Very high BP can cause headache, vomiting, irritability, visual disturbance, nosebleeds, facial palsy, seizures or heart failure; infants may simply feed poorly and fail to thrive.</p>
<h3>Measuring a child's BP</h3>
${tbl(["Step", "How"], [
["Cuff size", "Bladder width at least 40% of the mid-upper-arm circumference, and length covering 80–100% of it. Too small a cuff overestimates BP; if in doubt, use the larger cuff"],
["Position", "Seated (infants supine), back supported, feet on the floor, <b>right arm</b> supported at heart level (right arm avoids missing coarctation)"],
["Rest", "3–5 minutes of quiet; a calm child (not crying or just after play)"],
["Readings", "Oscillometric for screening; if 90th percentile or higher, repeat twice by <b>auscultation</b> and average"],
["Legs", "Measure a leg BP once (prone, thigh cuff) in every hypertensive child: leg SBP should be equal to or higher than arm SBP; lower suggests coarctation"],
["Confirm", "Elevated or stage 1 BP needs repeat measurements over weeks (3 visits) and ideally <b>ambulatory BP monitoring</b> to exclude white-coat hypertension"]])}
<div class="calc" data-calc="bpchild"></div>
${box("red", "Same-day assessment or emergency referral", `<ul>
<li>BP more than <b>30 mmHg above the 95th percentile</b> (or over 180/120 in adolescents).</li>
<li>Headache with vomiting, confusion, seizures, visual loss, facial palsy (encephalopathy).</li>
<li>Breathlessness, gallop rhythm, oedema (heart failure).</li>
<li>Oliguria, cola-coloured urine, oedema (acute glomerulonephritis).</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Situation", "How to tell", "Action"], [
["<b>Wrong cuff, crying, pain, anxiety</b>", "BP normal when calm with correct cuff", "Repeat properly before labelling"],
["<b>White-coat hypertension</b> (common in teenagers)", "Normal ABPM", "No drugs; recheck yearly"],
["<b>Acute post-streptococcal glomerulonephritis</b>", "Cola urine, oedema, recent sore throat or skin infection, low C3, ASO positive", "Fluid and salt restriction, furosemide, antihypertensive; STG: hydralazine 0.15 mg/kg IV + penicillin"],
["<b>Raised intracranial pressure</b>", "Hypertension with bradycardia and irregular breathing (Cushing's response)", "Do not lower BP; treat the cause urgently"],
["<b>Coarctation of the aorta</b>", "Arm–leg BP gradient, weak femorals", "Echo; cardiology referral"],
["<b>Drug or stimulant effect</b>", "Steroids, decongestants, ADHD drugs, energy drinks", "Stop or adjust"]])}
<h3>A typical case</h3>
<p>A 9-year-old boy from Samtse has puffy eyes and dark urine two weeks after a sore throat. BP is 138/92 (well above the 95th + 12 mmHg for his age). This is <b>stage 2 hypertension from acute post-streptococcal glomerulonephritis</b>. Restrict salt and fluid, give furosemide for oedema, lower BP (STG: hydralazine 0.15 mg/kg IV if high; amlodipine for ongoing control), treat with penicillin, and refer. BP usually normalises within 1–3 months.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Who", "Why"], [
["Urinalysis (dipstick ± microscopy)", "All", "Haematuria and proteinuria point to kidney disease"],
["Creatinine, electrolytes, urea", "All", "Kidney function; low K⁺ suggests aldosteronism"],
["Lipids, fasting glucose (± HbA1c, ALT)", "Obese children and adolescents", "Metabolic syndrome, fatty liver"],
["<b>Renal ultrasound</b>", "Under 6 years, or abnormal urine or kidney function", "Scarring, small or cystic kidneys, obstruction"],
["<b>Echocardiography</b>", "Before starting drugs", "LV hypertrophy (target-organ damage); coarctation"],
["Ambulatory BP monitoring", "Elevated or stage 1 BP for a year, stage 1 on 3 visits, high-risk children", "Confirms true hypertension; excludes white-coat"],
["Urine albumin:creatinine ratio", "CKD, diabetes", "Kidney damage"],
["Further tests (specialist)", "Suspected secondary cause", "Renin and aldosterone, renal Doppler/CT angiography, metanephrines, TSH, cortisol"],
["Streptococcal serology, C3", "Suspected acute glomerulonephritis", "ASO, low C3"]])}
` },

{ id: "staging", title: "Severity and when to refer", html: `
${tbl(["Category", "Recheck / action"], [
["Elevated BP", "Lifestyle; recheck at 6 months (upper and lower limbs), then 12 months; ABPM and work-up if still elevated after 12 months"],
["Stage 1", "Lifestyle; recheck in 1–2 weeks; if still stage 1 at 3 visits, diagnose, work up and consider drugs after 3–6 months if no improvement"],
["Stage 2 (asymptomatic)", "Recheck within 1 week (or refer within 1 week); start drugs once confirmed"],
["Stage 2 with symptoms, or >30 mmHg above the 95th", "<b>Emergency department now</b>"]])}
<p class="qn">Follow-up intervals from AAP 2017.${r(4)}</p>
<h3>Refer to a paediatrician / paediatric nephrologist</h3>
<ul><li>All children under 6 with hypertension; all stage 2; any suspected secondary cause; target-organ damage; failure to control on one drug.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Lifestyle (every child, every family)</h3>
<ul><li><b>Salt:</b> less salt in suja, curries and snacks; limit packet noodles, chips and pickles (target under 2.3 g sodium/day for adolescents, less for younger children).</li>
<li><b>Diet:</b> DASH-style, with more fruit, vegetables and pulses and fewer sugary drinks.</li>
<li><b>Activity:</b> at least 60 minutes of moderate to vigorous activity on most days; screen time under 2 hours.</li>
<li><b>Weight:</b> for obese children, aim to slow weight gain while they grow taller; treat sleep apnoea.</li>
<li><b>Avoid</b> tobacco (including second-hand smoke), alcohol and energy drinks.</li></ul>

<h3>B. When to start drugs (AAP 2017)</h3>
<ul><li>Symptomatic hypertension; <b>stage 2</b> without a modifiable cause; any stage with <b>CKD or diabetes</b>; <b>LV hypertrophy</b>; stage 1 persisting after 3–6 months of lifestyle change.</li></ul>
<h3>C. Choosing a drug</h3>
${F.chart("Drug treatment in a child", [
F.s("Confirmed hypertension needing drugs (cause looked for)"), F.a,
F.d("CKD with proteinuria, or diabetes?"), F.a,
F.b([["Yes", F.s("<b>ACE inhibitor or ARB</b> first (enalapril or losartan)")], ["No", F.s("<b>Amlodipine</b>, ACE inhibitor/ARB or thiazide, any first")]]), F.a,
F.s("Start at the low dose; increase every 2–4 weeks to target (under 90th percentile / under 130/80)"), F.a,
F.d("Controlled at maximum dose?"), F.a,
F.b([["Yes", F.ok("Continue; review 3–6-monthly; repeat echo yearly if LVH")], ["No", F.e("Add a second class; refer to paediatric nephrology")]])])}
${box("amber", "Girls of child-bearing potential", `<p>ACE inhibitors and ARBs harm the fetus. Counsel adolescent girls, and prefer amlodipine where there is no compelling kidney indication.</p>`)}

<h3>D. Acute severe hypertension (emergency)</h3>
${box("red", "Lower slowly to protect the brain", `<ul>
<li>Admit to an HDU/PICU with frequent BP monitoring (arterial line where possible).</li>
<li><b>Reduce BP by no more than 25% of the planned reduction in the first 8 hours</b>, then gradually to target over the next 12–24 hours (AAP 2017). A faster fall can cause blindness, stroke or kidney injury.</li>
<li>IV ${dr("labetalol")} <b>0.2–1 mg/kg bolus (max 40 mg)</b> or infusion 0.25–3 mg/kg/h; or ${dr("hydralazine_iv", "hydralazine")} <b>0.1–0.2 mg/kg IV</b> (STG: 0.15 mg/kg/dose in AGN; max 0.4 mg/kg/dose), repeated every 4–6 h.</li>
<li>Oral options when not life-threatening: ${dr("nifedipine", "nifedipine SR")}, ${dr("amlodipine")}.</li>
<li>Treat seizures (benzodiazepine), fluid overload (furosemide in AGN) and the underlying cause.</li></ul>`)}
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Doses are per kg; never exceed the adult maximum. From AAP 2017 (Table 13) and the Bhutan NEMF; tap a drug for the full card.</p>
${tbl(["Drug", "Starting dose", "Maximum", "Notes", "Bhutan"], [
[dr("amlodipine", "Amlodipine"), "1–5 y: 0.1 mg/kg once daily; ≥6 y: 2.5 mg once daily", "0.6 mg/kg/day (1–5 y, up to 5 mg); 10 mg/day (≥6 y)", "Ankle oedema; safe in pregnancy-risk girls", "5 mg (to PHC)"],
[dr("enalapril", "Enalapril"), "≥1 month: 0.08 mg/kg once daily (up to 5 mg)", "0.6 mg/kg/day (up to 40 mg)", "Check K⁺, creatinine; avoid if eGFR <30; fetotoxic", "5 mg (to DH)"],
[dr("losartan", "Losartan"), "≥6 y: 0.7 mg/kg once daily (up to 50 mg)", "1.4 mg/kg/day (up to 100 mg)", "As enalapril; no cough", "25/50 mg (to PHC)"],
[dr("hydrochlorothiazide", "Hydrochlorothiazide"), "1 mg/kg/day once daily", "2 mg/kg/day (up to 50 mg/day)", "Low K⁺; add-on in AGN/oedema", "25 mg (to PHC)"],
[dr("nifedipine", "Nifedipine SR"), "0.25–0.5 mg/kg/day (max 20 mg/dose)", "3 mg/kg/day (up to 120 mg)", "SR only; tablets cannot be split for small doses", "20 mg SR"],
[dr("labetalol", "Labetalol IV (emergency)"), "0.2–1 mg/kg bolus (max 40 mg)", "Infusion 0.25–3 mg/kg/h", "Avoid in asthma, heart failure", "Injection (to DH)"],
[dr("hydralazine_iv", "Hydralazine IV (emergency)"), "0.1–0.2 mg/kg (STG: 0.15 mg/kg in AGN)", "0.4 mg/kg/dose; 3 mg/kg/day", "Reflex tachycardia", "Injection (to PHC)"]])}
` },

{ id: "populations", title: "Special groups", html: `
<h3>Neonates and infants</h3>
<ul><li>Neonatal hypertension is defined against gestation-specific norms; causes include umbilical artery catheter thrombosis, bronchopulmonary dysplasia, coarctation and kidney malformations. Management is specialist (NICU).</li></ul>
<h3>Obesity</h3>
<ul><li>Use the correct (large) cuff. Screen for diabetes, dyslipidaemia, fatty liver and sleep apnoea. Weight management is the core treatment.</li></ul>
<h3>CKD</h3>
<ul><li>Lower targets: 24-hour mean arterial pressure under the 50th percentile slowed CKD progression in the ESCAPE trial; ACE inhibitor or ARB first if proteinuric. See the ${'<a href="#/d/ckd-child">children\'s CKD chapter</a>'}.${r(6)}</li></ul>
<h3>Adolescent athletes</h3>
<ul><li>Stage 2 hypertension restricts competitive sport until evaluated and controlled; stage 1 does not, if there is no organ damage.</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>4-year-old with BP 125/85 on a screening visit</b>", "Repeat by auscultation with the correct cuff; if confirmed, this is stage 2 for age: urinalysis, creatinine, renal ultrasound, echo, and referral (secondary cause very likely)"],
["<b>Seizure with BP 170/110 in a 7-year-old</b>", "Hypertensive encephalopathy: ABC, benzodiazepine for the seizure, IV labetalol or hydralazine, lower by ≤25% of the planned reduction in 8 h, look for AGN or kidney disease"],
["<b>Teenager with obesity and BP 136/84 in clinic</b>", "Stage 1: lifestyle, ABPM to confirm, metabolic screen; drugs if persistent after 3–6 months or organ damage"],
["<b>Hypertension with bradycardia after a head injury</b>", "Cushing's response to raised intracranial pressure: do not lower BP; urgent neurosurgical care"],
["<b>Weak femoral pulses and BP 140/80 in the right arm</b>", "Coarctation until proven otherwise: four-limb BP, echo, cardiology"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognise", "Action"], [
["LV hypertrophy", "Echo", "Treat to target; repeat echo yearly"],
["Hypertensive encephalopathy, PRES", "Headache, vomiting, visual loss, seizures", "Controlled IV lowering; MRI"],
["Retinopathy", "Fundoscopy", "Indicates severe or long-standing hypertension"],
["CKD progression", "Rising creatinine, proteinuria", "ACEi/ARB, low target"],
["Heart failure", "Breathlessness, gallop, hepatomegaly", "Diuretic, BP control; see the children's HF chapter"],
["Adult cardiovascular disease", "BP tracks into adulthood", "Long-term follow-up and lifestyle"]])}
<p>Secondary hypertension often improves when the cause is treated (post-streptococcal GN usually settles within weeks to months; coarctation repair; renovascular angioplasty). Primary hypertension usually persists and needs transition to adult care.</p>
` },

{ id: "followup", title: "Follow-up and family advice", html: `
${tbl(["When", "What"], [
["Every 2–4 weeks while adjusting drugs", "BP, side effects, electrolytes and creatinine (ACEi/ARB, diuretic)"],
["Every 3–4 months once controlled", "BP, growth, weight, adherence"],
["Yearly", "Echo if LVH; urine albumin in CKD/diabetes; review the need for medicines"],
["At 16–18 years", "Planned transition to adult services"]])}
${box("green", "What to tell the family", `<ul><li>'High BP in children is usually silent. Regular checks are the only way to know.'</li><li>'Give the medicine every day at the same time, even when your child feels well.'</li><li>'Less salt, more fruit and vegetables, more play, less screen time: these help the whole family.'</li><li>'Girls on enalapril or losartan must tell the doctor before any chance of pregnancy.'</li></ul>`)}
${box("red", "Come to hospital at once if", `<ul><li>Severe headache, repeated vomiting, blurred vision or fits.</li><li>Puffy face, dark (cola) urine or very little urine.</li><li>Breathlessness or swelling.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Coarctation of the aorta (schematic)", src: "images/htnc-coarctation.png", mod: "Medical illustration (schematic)", ctx: "Secondary hypertension in children", loc: "Aortic isthmus, near the ductus arteriosus", find: "A narrowing of the aorta beyond the left subclavian artery", signs: "Upper-limb hypertension; weak, delayed femoral pulses", interp: "Always feel the femoral pulses and measure a leg BP in a hypertensive child; coarctation is curable by surgery or stenting", ddx: "Takayasu arteritis, mid-aortic syndrome", by: "BruceBlaus", page: "https://commons.wikimedia.org/wiki/File:Coarctation_Of_Aorta.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "Post-infectious glomerulonephritis (histology)", src: "images/htnc-pign.jpg", mod: "Kidney biopsy, PAS stain", ctx: "Acute glomerulonephritis with hypertension", loc: "Glomeruli", find: "Hypercellular glomeruli packed with inflammatory cells (endocapillary proliferation)", signs: "Post-infectious (e.g. post-streptococcal) glomerulonephritis", interp: "Explains the triad of haematuria, oedema and hypertension 1–3 weeks after a streptococcal throat or skin infection. Biopsy is rarely needed: the diagnosis is usually clinical with low C3 and positive ASO", ddx: "IgA nephropathy, lupus nephritis, membranoproliferative GN", by: "Nephron", page: "https://commons.wikimedia.org/wiki/File:Post-infectious_glomerulonephritis_-_intermed_mag.jpg", lic: "CC BY-SA 3.0" })}
</div>
<h3>Link-only references</h3>
<ul><li>Full AAP 2017 BP percentile tables (by age, sex and height): <a href="https://doi.org/10.1542/peds.2017-1904" target="_blank" rel="noopener">Pediatrics 2017 (open access)</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Child with a high BP reading", [
F.s("Oscillometric BP ≥90th percentile (or screening table value)"), F.a,
F.s("Repeat twice by auscultation with correct cuff; average"), F.a,
F.d("Category?"), F.a,
F.b([["Elevated", F.ok("Lifestyle; recheck at 6 and 12 months")], ["Stage 1", F.s("Recheck in 1–2 weeks; 3 visits; ABPM; work-up")], ["Stage 2", F.e("Within 1 week; same day if symptoms or >30 above 95th")]])])}
${F.chart("2 · Acute severe hypertension", [
F.s("Symptomatic or very high BP"), F.a,
F.s("ABC; treat seizures; PICU/HDU"), F.a,
F.s("IV labetalol or hydralazine"), F.a,
F.s("Lower by ≤25% of the planned reduction in 8 h, then to target over 12–24 h"), F.a,
F.ok("Find and treat the cause (AGN, kidney, coarctation, endocrine)")])}
` },

{ id: "pearls", title: "Pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>The younger the child, the higher the chance of a secondary cause.</b></li>
<li><b>Feel the femoral pulses</b> in every hypertensive child.</li>
<li><b>Use the biggest cuff that fits</b>; a small cuff is the commonest cause of a false high reading.</li>
<li><b>Hypertension with bradycardia</b> may be raised intracranial pressure; do not lower it.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Prevention"], [
["Using adult thresholds in young children", "Use AAP percentiles (or the screening table) under 13"],
["Diagnosing on one oscillometric reading", "Confirm by auscultation on repeat visits; ABPM"],
["Rapid BP lowering in emergencies", "≤25% of the planned reduction in the first 8 hours"],
["Missing coarctation", "Four-limb BP and femoral pulses"],
["ACEi/ARB in adolescent girls without counselling", "Counsel; prefer amlodipine where suitable"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "How is hypertension defined in a 9-year-old?", "BP at or above the 95th percentile for age, sex and height (or 130/80 if lower) on three separate occasions. Stage 2 is the 95th percentile + 12 mmHg or 140/90 (whichever is lower).")}
${qa("Intern/MO", "From what age does AAP 2017 use fixed adult-style thresholds?", "From 13 years: elevated 120–129/<80, stage 1 130–139/80–89, stage 2 140/90 or more.")}
${qa("Intern/MO", "What is the commonest cause of hypertension in a young child?", "Renal parenchymal disease (reflux nephropathy, glomerulonephritis, CKD).")}
${qa("Intern/MO", "How fast should BP be lowered in a child with hypertensive encephalopathy?", "By no more than 25% of the planned reduction in the first 8 hours, then gradually to target over the next 12–24 hours.")}
${qa("Intern/MO", "What is the STG treatment of hypertension in acute glomerulonephritis?", "Hydralazine 0.15 mg/kg/dose IV stat if BP is high, penicillin-V 250 mg twice daily for 14 days, and referral to a higher centre.")}
${qa("Specialist", "Which first-line drug is preferred in a child with proteinuric CKD, and what target?", "An ACE inhibitor or ARB; a 24-hour mean arterial pressure under the 50th percentile slowed progression (ESCAPE trial).")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §12.5.1 Acute glomerulonephritis (no dedicated paediatric hypertension section).</li>
<li id="ref-2">Ministry of Health, Bhutan. Hypertension Screening & Management Protocol v3.5 (15 January 2025): adults ≥18 years.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and NEML 2025.</li>
<li id="ref-4">Flynn JT, Kaelber DC, Baker-Smith CM, et al. Clinical practice guideline for screening and management of high blood pressure in children and adolescents. Pediatrics 2017;140:e20171904. <a href="https://doi.org/10.1542/peds.2017-1904" target="_blank" rel="noopener">doi:10.1542/peds.2017-1904</a></li>
<li id="ref-5">Lurbe E, Agabiti-Rosei E, Cruickshank JK, et al. 2016 European Society of Hypertension guidelines for the management of high blood pressure in children and adolescents. J Hypertens 2016;34:1887–1920. <a href="https://doi.org/10.1097/HJH.0000000000001039" target="_blank" rel="noopener">doi:10.1097/HJH.0000000000001039</a></li>
<li id="ref-6">ESCAPE Trial Group. Strict blood-pressure control and progression of renal failure in children. N Engl J Med 2009;361:1639–1650. <a href="https://doi.org/10.1056/NEJMoa0902066" target="_blank" rel="noopener">doi:10.1056/NEJMoa0902066</a></li>
<li id="ref-7">Nelson Textbook of Pediatrics, 22nd ed.: systemic hypertension chapter, paraphrased for background.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG paediatric content", "<span class='warn'>Evidence gap</span>", "No dedicated section; AGN hydralazine dose used"],
["Definitions and follow-up intervals", "<span class='pass'>Verified</span>", "AAP 2017"],
["Drug doses", "<span class='pass'>Checked</span>", "AAP 2017 Table 13; existing drug cards; NEMF"],
["Screening calculator", "<span class='pass'>Checked</span>", "AAP 2017 simplified table (screening only)"],
["Bhutan paediatric prevalence", "<span class='warn'>Evidence gap</span>", "No data found"],
["Images", "<span class='pass'>Done</span>", "Two Commons files; licences checked"],
["Clinical sign-off", "<span class='warn'>Pending</span>", "Needs review by a paediatrician/paediatric nephrologist"]], "qc")}
` }
]
});
