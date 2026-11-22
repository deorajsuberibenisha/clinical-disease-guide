/* Hypertension — adults */
registerPage({
id: "htn-adult",
title: "Hypertension — Adults",
subtitle: "Measuring BP properly, the Bhutan protocol step by step, targets, resistant and secondary hypertension, and hypertensive emergencies",
age: "Adults", specs: ["cardio", "medicine", "neph", "ph", "emerg"],
keywords: ["hypertension", "high blood pressure", "HTN", "BP", "blood pressure", "essential hypertension", "secondary hypertension", "resistant hypertension", "hypertensive emergency", "hypertensive urgency", "hypertensive crisis", "malignant hypertension", "hydrochlorothiazide", "losartan", "amlodipine", "nifedipine", "enalapril", "telmisartan", "chlorthalidone", "spironolactone", "labetalol", "hydralazine", "salt", "suja", "DASH", "white-coat hypertension", "masked hypertension", "home BP", "ambulatory BP", "HEARTS", "SCCI protocol"],
related: ["ckd-adult", "acs-adult", "hf-adult", "dm-adult", "htn-child"],
updated: "22 Nov 2026", review: "Nov 2027 (or when Bhutan revises its hypertension protocol)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">More than one in four Bhutanese adults has high blood pressure, and most feel perfectly well. Hypertension does its damage silently in the brain, heart, kidneys and eyes, so the job is to find it, confirm it, and keep it controlled for life.</p>
<div class="glance">
<div><h4>Measure properly</h4><p>Seated 5 minutes, back supported, arm at heart level, right cuff size, no talking. Average two readings; confirm on a second visit at least a week apart.</p></div>
<div><h4>Diagnose</h4><p><b>140/90 mmHg or more</b> on two visits (one visit if 160/100 or more). In stroke, diabetes, CKD, coronary disease or age 65+, Bhutan treats from <b>130/80</b>.</p></div>
<div><h4>Bhutan protocol</h4><p>${dr("hydrochlorothiazide")} 25 mg OD first → add ${dr("losartan")} 25 mg OD after 1 month → doctor individualises (e.g. ${dr("amlodipine")}).</p></div>
<div><h4>Target</h4><p><b>120–130 / 70–80 mmHg</b> (Bhutan v3.5), reached within 3 months; individualise in the frail elderly.</p></div>
<div><h4>Lifestyle</h4><p>Salt under 5 g/day (watch salted butter tea, pickles, dried fish), no tobacco, cut alcohol, 150 min/week of activity, healthy weight.</p></div>
<div><h4>Red flags</h4><ul><li>BP ≥180/110 with headache, confusion, seizure</li><li>Chest pain, breathlessness</li><li>Limb weakness, visual loss</li><li>Pregnancy</li></ul></div>
<div><h4>Look for</h4><p>Organ damage (ECG, urine albumin, creatinine, fundus) and cardiovascular risk (glucose, lipids). Suspect a secondary cause if young, sudden, severe or resistant.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The national <b>Hypertension Screening & Management Protocol v3.5 (15 January 2025)</b> starts <b>hydrochlorothiazide 25 mg</b>, adds <b>losartan 25 mg</b>, and then asks a doctor at a secondary centre to individualise. The older <b>STG 2024 (§2.3)</b> starts an ARB/ACE inhibitor, then adds nifedipine, then hydrochlorothiazide. This guide follows the newer protocol and explains both. All three drugs are on NEML 2025 down to primary health centres.${r(1, 2, 3)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What hypertension is, and how common it is in Bhutan", html: `
<h3>Definition and grades</h3>
<p>Hypertension is a blood pressure persistently high enough that treating it does more good than harm. The thresholds are agreed by convention from outcome trials, and guidelines draw the lines slightly differently:</p>
${tbl(["Category", "ISH 2020 / ICMR 2026 / WHO", "ESC 2024", "AHA/ACC 2025"], [
["Normal", "Under 130/85", "Non-elevated: under 120/70", "Under 120/80"],
["High-normal / elevated", "130–139 / 85–89", "Elevated: 120–139 / 70–89", "Elevated: 120–129 / under 80"],
["Grade/Stage 1", "140–159 / 90–99", "Hypertension: 140/90 or more", "Stage 1: 130–139 / 80–89"],
["Grade/Stage 2", "160/100 or more (ICMR adds grade 3: 180/110 or more)", "—", "Stage 2: 140/90 or more"]])}
<p>Bhutan's protocol uses 140/90 for the general population and 130/80 for high-risk people. In practice all guidelines agree on <b>treating at 140/90</b>, and on <b>treating earlier when cardiovascular risk is high</b>.${r(1, 4, 6, 7, 9)}</p>

<h3>How common is it?</h3>
<ul>
<li>In the <b>2019 Bhutan STEPS survey</b>, 28% of adults aged 15–69 had raised BP (31.6% of men, 24% of women)${r(14)}. The 2014 survey found high salt intake in 99% of adults${r(15)}.</li>
<li>Many people with hypertension do not know they have it; of those who do, many are not controlled. Every clinic contact is a chance to measure.</li>
<li>Bhutanese risk factors include <b>salted butter tea (suja)</b>, pickles, dried fish and processed foods; alcohol; tobacco; rising obesity and diabetes; and a family history.</li></ul>

<h3>Primary and secondary</h3>
<p>About 90% is <b>primary (essential)</b> hypertension: a mix of genes, salt, weight, alcohol and ageing arteries. About 5–10% has a <b>secondary</b> cause that can sometimes be cured:</p>
${tbl(["Secondary cause", "Clues", "First test"], [
["Kidney disease (parenchymal)", "Raised creatinine, proteinuria, haematuria", "Creatinine, urine dipstick and ACR, ultrasound"],
["Primary aldosteronism", "Low potassium (often normal!), resistant hypertension, adrenal mass", "Aldosterone:renin ratio (specialist); AHA/ACC 2025 suggests screening more widely in resistant hypertension"],
["Renovascular disease", "Flash pulmonary oedema, creatinine rise over 30% on ACEi/ARB, abdominal bruit, young woman (fibromuscular dysplasia)", "Renal Doppler or CT angiography"],
["Obstructive sleep apnoea", "Snoring, daytime sleepiness, obesity", "Sleep study; STOP-BANG questionnaire"],
["Drugs and substances", "NSAIDs, steroids, oral contraceptives, decongestants, alcohol, licorice, erythropoietin", "Drug history"],
["Thyroid disease", "Hyper- or hypothyroid features", "TSH"],
["Phaeochromocytoma", "Episodic headache, sweating, palpitations", "Plasma or urine metanephrines"],
["Cushing's syndrome", "Central obesity, striae, proximal weakness", "Overnight dexamethasone test"],
["Coarctation of the aorta", "Young, weak or delayed femoral pulses, arm–leg BP gap", "Echo; see the children's page"]])}
` },

{ id: "patho", title: "Pathophysiology", html: `
<p>Blood pressure = cardiac output × peripheral resistance. In hypertension, several systems push both up, and the high pressure then damages the vessels in a self-reinforcing cycle.</p>
${F.chart("How blood pressure rises, and why it stays high", [
F.s("<b>Drivers</b>: genes, ageing, high salt intake, excess weight, alcohol, inactivity, stress"), F.a,
F.b([
["Kidney", F.s("Kidneys excrete salt less well → more sodium and water retained"), F.s("<b>↑ Blood volume → ↑ cardiac output</b>")],
["Hormones", F.s("Renin–angiotensin–aldosterone system active"), F.s("Angiotensin II constricts arterioles; aldosterone retains salt")],
["Nerves", F.s("Sympathetic overactivity (obesity, sleep apnoea, stress)"), F.s("<b>↑ Heart rate and vascular tone</b>")]]), F.a,
F.s("<b>Raised peripheral resistance</b>: small arteries constrict and later thicken (remodelling); large arteries stiffen with age (isolated systolic hypertension)"), F.a,
F.d("Sustained high pressure → target-organ damage"), F.a,
F.b([
["Heart", F.e("LV hypertrophy → heart failure, AF, coronary disease")],
["Brain", F.e("Stroke (ischaemic and haemorrhagic), vascular dementia")],
["Kidney", F.e("Nephrosclerosis → proteinuria → CKD (which raises BP further)")],
["Eye and vessels", F.e("Retinopathy, aortic aneurysm/dissection, peripheral arterial disease")]])])}
<h3>What the flowchart means at the bedside</h3>
<ul>
<li><b>Each first-line drug blocks one arm of the chart.</b> Thiazides remove salt and water (the kidney arm), ACE inhibitors and ARBs block angiotensin (the hormone arm), and calcium-channel blockers relax the constricted arterioles (resistance). Combining two arms works better than doubling one drug.</li>
<li><b>Salt matters more in South Asians and older people</b>, whose BP is often salt-sensitive. A salt substitute (potassium-enriched salt) lowered stroke, heart events and death in a large rural Asian trial (SSaSS)${r(17)}. Avoid it in advanced CKD or with potassium-raising drugs.</li>
<li><b>The damage is cumulative and silent.</b> Every 10 mmHg fall in systolic BP reduces stroke by about a quarter and heart failure by about a quarter, whatever the starting level${r(13)}.</li></ul>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
<p>Bhutan has two national documents that start with different drugs, so this table matters for daily practice.${r(1, 2, 4, 5, 6, 7, 8, 9, 10)}</p>
${tbl(["Topic", "Bhutan protocol v3.5 (2025)", "Bhutan STG 2024", "India ICMR STW 2026", "WHO 2021 / ISH 2020 / ESC 2024", "AHA/ACC 2025", "This guide follows"], [
["Treatment threshold", "≥140/90; ≥130/80 if stroke, DM, CKD, CAD or age ≥65", "Above 140/90", "≥140/90", "≥140/90; ≥130 SBP with CVD (WHO); ESC treats 130–139 if high risk after lifestyle", "≥140/90; ≥130/80 if CVD, DM, CKD or PREVENT risk ≥7.5%", "Bhutan protocol"],
["First drug", "<b>Hydrochlorothiazide 25 mg</b>", "ARB (losartan) or ACEi (enalapril)", "Amlodipine 5 mg (protocols) or a two-drug combination", "Any of thiazide, ACEi/ARB, long-acting CCB", "Any first-line class; two-drug single pill for stage 2", "Bhutan protocol; adapt to the patient (see below)"],
["Second drug", "Add losartan 25 mg", "Add CCB (nifedipine)", "Add telmisartan", "Combine two classes (RAS blocker + CCB or thiazide)", "Same", "Losartan, then titrate to 50 mg; add amlodipine as third"],
["Start with two drugs?", "No (stepwise)", "No", "Yes, for most (single-pill combination preferred)", "ESC/ISH: yes for most; WHO: suggested", "Yes for stage 2", "Two drugs from the start if BP is ≥20/10 above target, where tolerated"],
["Target", "<b>120–130 / 70–80</b>", "Not stated", "<140/90; <130/80 in DM, CKD, CVD; <150/90 at ≥80 years", "WHO <140/90 (<130 SBP high risk); ESC 120–129 SBP if tolerated", "<130/80 for all", "Bhutan target; gentler in the frail elderly"],
["Crisis threshold", "≥180/110 or warning signs", "Stage 3 >180/>120", "≥180/120", "≥180/110 with acute organ damage", "≥180/120", "Organ damage, not the number, defines an emergency"]])}
${box("blue", "Why a thiazide first in Bhutan's protocol?", `<p>Thiazides are cheap, given once daily, need little monitoring, have strong outcome evidence (ALLHAT), and work well in older, salt-sensitive patients. That makes them practical for health assistants at primary health centres. An ACE inhibitor or ARB is the better first choice in <b>diabetes with albuminuria and in CKD</b>; a CCB is good in the elderly and when a thiazide causes gout. Beta-blockers are not first line unless there is angina, previous MI, heart failure or AF. ${LB.int()}</p>`)}
${box("bt", "Bhutan adaptation", `<p>Follow the protocol at PHC level. At a hospital, tailor the choice: a RAS blocker first in diabetes with albuminuria or CKD; a CCB if gout or thiazide intolerance; never combine an ACE inhibitor with an ARB. Losartan comes as 25 and 50 mg tablets, and the usual adult range is 50–100 mg daily, so titrate beyond the protocol's 50 mg at a secondary centre when needed. ${LB.loc()}</p>`)}
` },

{ id: "presentation", title: "Clinical presentation and how to measure BP", html: `
<p>Most people have <b>no symptoms</b>. Headache, nosebleeds and dizziness are not reliable signs of high BP. Hypertension is found by measuring, so measure every adult at every visit.</p>
<h3>Measuring BP correctly</h3>
${tbl(["Step", "How", "Why"], [
["Prepare", "No caffeine, tobacco or exercise for 30 minutes; empty bladder; seated quietly for 5 minutes", "These raise BP by 5–20 mmHg"],
["Position", "Back supported, feet flat, legs uncrossed, arm supported at heart level", "An unsupported arm or crossed legs raise readings"],
["Cuff", "Bladder covering 80% of the arm circumference; large cuff for big arms", "A small cuff falsely raises BP, often by 10 mmHg or more"],
["Readings", "Take 2–3 readings 1 minute apart and average the last two; measure both arms at the first visit and use the higher arm", "A single reading overestimates BP"],
["Confirm", "Repeat on another day (Bhutan: at least a week apart); home or ambulatory BP if available", "Excludes white-coat hypertension"],
["Elderly / diabetes", "Also measure after standing 1 and 3 minutes", "Orthostatic hypotension changes the drugs and the target"]])}
<h3>Home and ambulatory readings</h3>
<p>Thresholds are lower out of clinic: <b>home BP ≥135/85</b> and daytime ambulatory ≥135/85 (24-hour ≥130/80) equal clinic 140/90. <b>White-coat hypertension</b> is high in clinic but normal at home; <b>masked hypertension</b> is the reverse, and is suspected when there is organ damage with normal clinic BP.${r(6, 7)}</p>
<h3>History and examination</h3>
<ul>
<li>Ask about symptoms of organ damage (chest pain, breathlessness, weakness, visual change), salt, alcohol, tobacco, activity, drugs (NSAIDs, steroids, contraceptives), snoring, family history, pregnancy plans.</li>
<li>Examine: BMI and waist; pulse (AF); heart (LV heave, murmurs); radio-femoral delay; abdominal bruits; oedema; <b>fundoscopy</b>; signs of Cushing's or thyroid disease.</li></ul>
${box("red", "Hypertensive crisis: urgent referral (Bhutan protocol)", `<ul><li>Any BP ≥180/110 mmHg.</li><li>Seizures, altered sensorium, new severe headache.</li><li>Breathlessness, oedema, persistent chest pain.</li><li>Paralysis of limbs or visual loss.</li><li><b>Pregnancy</b> with raised BP (possible pre-eclampsia).</li></ul>`)}
<h3>Classify and decide</h3>
<div class="calc" data-calc="bpclass"></div>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Situation", "What it looks like", "How to tell", "What to do"], [
["<b>White-coat hypertension</b>", "High clinic BP, normal at home", "Home BP under 135/85 or ambulatory normal", "No drugs if low risk; recheck yearly (it often progresses)"],
["<b>Pain, anxiety, full bladder, acute illness</b>", "Transient high BP in the emergency room", "Falls with analgesia and rest", "Treat the cause; recheck before labelling"],
["<b>Pre-eclampsia</b>", "New hypertension after 20 weeks, with proteinuria or organ involvement", "Urine protein, platelets, LFT, creatinine", "Obstetric emergency pathway"],
["<b>Acute stroke</b>", "Very high BP with a neurological deficit", "CT head", "Do not lower aggressively; see the stroke chapter"],
["<b>Alcohol withdrawal</b>", "Tachycardia, tremor, sweating, high BP", "Last drink 6–48 h ago", "Treat withdrawal; see the cirrhosis/ALD chapter"],
["<b>Secondary hypertension</b>", "Young onset (under 30–40), sudden or severe, resistant, low K⁺", "Targeted tests (see Overview)", "Refer to a physician"],
["<b>Pseudo-resistance</b>", "BP seems uncontrolled on 3 drugs", "Poor adherence, wrong cuff, salt or NSAIDs, white-coat effect", "Check adherence and technique before adding drugs"]])}
<h3>The typical patient</h3>
<p>A 52-year-old shopkeeper in Trashigang is found to have 158/98 at a screening camp, with a repeat of 154/96 a week later. He drinks several cups of salted butter tea daily and has a family history of stroke. He has <b>grade 1 hypertension</b>. Start lifestyle advice and <b>hydrochlorothiazide 25 mg</b>, check glucose, lipids, creatinine, urine and ECG within a month, and add <b>losartan 25 mg</b> if he is above 130/80 at review.</p>
` },

{ id: "invest", title: "Investigations: organ damage and total risk", html: `
${tbl(["Test", "Why", "What to look for"], [
["Fasting/post-prandial glucose or HbA1c", "Diabetes changes the target and drug choice", "Diabetes or prediabetes"],
["Lipid profile", "Total cardiovascular risk; statin decision", "LDL, HDL, triglycerides"],
["Serum creatinine (eGFR), sodium, potassium", "Kidney damage; baseline before thiazide and ARB", "Low K⁺ (aldosteronism, diuretic), high creatinine"],
["Urine dipstick and <b>albumin:creatinine ratio</b>", "Kidney damage; strongly predicts heart and kidney events", "Albuminuria (ACR ≥3 mg/mmol / 30 mg/g)"],
["12-lead ECG", "Heart damage", "LV hypertrophy, AF, old infarct"],
["Fundoscopy", "Eye damage", "Arteriolar narrowing, AV nipping, haemorrhages, exudates, papilloedema"],
["LFT, uric acid", "Before thiazide; protocol baseline", "Gout risk with thiazides"],
["Echocardiography (selected)", "LVH, heart failure, valve disease", "LV mass, ejection fraction"],
["TSH, aldosterone:renin, metanephrines, renal imaging", "Only if a secondary cause is suspected", "See Overview"]])}
<p>Bhutan protocol: refer for <b>FBG, PPBG, lipid profile, RFT, LFT, ECG, urine routine and fundoscopy within 1 month</b> of starting treatment, then repeat <b>ECG, fundoscopy and urine albumin yearly</b>.${r(1)}</p>
<h3>Total cardiovascular risk</h3>
<p>BP is one risk factor among several. A 45-year-old with BP 150/95 and nothing else has a lower risk than a 65-year-old smoker with diabetes and BP 145/90. Use the <b>WHO 2019 cardiovascular risk charts for South-East Asia</b> (in the HEARTS package) to judge overall risk and statin need. Anyone with diabetes, CKD or established cardiovascular disease is already high risk.${r(18)}</p>
` },

{ id: "staging", title: "Severity, urgency and when to refer", html: `
${tbl(["Situation", "Definition", "Action"], [
["Hypertension, uncomplicated", "Raised BP, no acute organ damage", "Outpatient treatment and review every 1–2 months until controlled"],
["Severe hypertension (urgency)", "≥180/110 (or 120 diastolic) <b>without</b> acute organ damage", "Rest 30 min and recheck; start or intensify oral drugs; lower over 24–48 h; review within a week. <b>No IV drugs, no sublingual nifedipine</b>"],
["<b>Hypertensive emergency</b>", "Severe BP <b>with</b> acute organ damage: encephalopathy, stroke, ACS, acute pulmonary oedema, aortic dissection, AKI, eclampsia, malignant hypertension (retinal haemorrhages/papilloedema)", "Admit (HDU/ICU); IV labetalol or GTN or hydralazine; controlled lowering (see Management)"]])}
<h3>Refer to a specialist (Bhutan protocol)</h3>
<ul><li>Stroke, retinopathy or heart disease.</li><li>Raised creatinine or proteinuria.</li><li>BP uncontrolled on 3 medicines (exclude secondary causes).</li><li>Suspected secondary hypertension; hypertension under 30 years of age; pregnancy.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Lifestyle: for everyone, at every visit</h3>
${tbl(["Measure", "Advice", "Typical SBP fall"], [
["Salt", "Under 5 g/day (one level teaspoon in all food). Less salt in suja and curries; fewer pickles, dried fish, instant noodles and chips. Consider potassium-enriched salt unless CKD", "5–6 mmHg"],
["Weight", "Aim for BMI under 23 (Asian cut-off) and waist under 90 cm (men) / 80 cm (women)", "About 1 mmHg per kg lost"],
["Activity", "At least 30 minutes of moderate activity 5 days a week, plus resistance exercise", "4–8 mmHg"],
["Alcohol", "Stop or cut down (brief intervention)", "3–4 mmHg"],
["Diet", "DASH-style: vegetables, fruit, pulses, low-fat dairy, less red meat and fried food", "8–11 mmHg"],
["Tobacco", "Stop smoking and chewing tobacco (brief intervention)", "Lowers overall risk greatly"]])}

<h3>B. Drug treatment: the Bhutan protocol, step by step</h3>
${F.chart("Bhutan Hypertension Protocol v3.5 (15 Jan 2025)", [
F.s("BP ≥140/90, or ≥130/80 with stroke, diabetes, CKD, CAD or age ≥65 (two readings a week apart)"), F.a,
F.s("<b>Step 1:</b> Hydrochlorothiazide 25 mg once daily + lifestyle"), F.a,
F.s("Refer within 1 month for FBG, PPBG, lipids, RFT, LFT, ECG, urine, fundoscopy"), F.a,
F.d("At target (120–130/70–80)?"), F.a,
F.b([["Yes", F.ok("Review every 2 months; yearly ECG, fundus, urine albumin")], ["No", F.s("<b>Step 2:</b> Add losartan 25 mg once daily; review monthly"), F.d("At target?"), F.b([["No", F.e("<b>Step 3:</b> Doctor at a higher centre individualises (e.g. losartan 50–100 mg, add amlodipine 5–10 mg)")], ["Yes", F.ok("Continue; review 2-monthly")]])]])])}
<p class="qn">Bhutan protocol v3.5: early review within 1 week if the first BP is 160/100 or more; lower by at least 20/10 mmHg per month; reach target within 3 months.${r(1)}</p>

<h3>C. Choosing drugs for the individual patient</h3>
${tbl(["Patient", "Preferred", "Avoid or caution"], [
["Most adults", "Thiazide, ACEi/ARB or CCB; two of them for most", "Two RAS blockers together"],
["Diabetes, especially with albuminuria", "ACEi or ARB (+ SGLT2 inhibitor for kidney protection)", "—"],
["CKD with albuminuria", "ACEi or ARB at maximum tolerated dose; loop diuretic if eGFR under 30", "Thiazide less effective at very low eGFR (chlorthalidone still works)"],
["Older adults (65+)", "Thiazide or CCB; start low, go slow", "Postural hypotension; falls; hyponatraemia with thiazides"],
["Previous MI, angina, HFrEF, AF", "Add a beta-blocker (bisoprolol, metoprolol)", "—"],
["Heart failure", "ACEi/ARB/ARNI + beta-blocker + MRA (see HF chapter)", "Non-dihydropyridine CCB (diltiazem, verapamil)"],
["Gout", "Losartan (lowers uric acid), CCB", "Thiazides"],
["Asthma", "Any except non-selective beta-blockers", "Beta-blockers"],
["Women who may become pregnant", "CCB (nifedipine SR, amlodipine), labetalol", "<b>ACEi, ARB (fetotoxic)</b>, spironolactone"],
["Pregnancy", "Labetalol, nifedipine SR, methyldopa", "ACEi, ARB, thiazides"]])}

<h3>D. Resistant hypertension</h3>
<p>BP above target despite <b>three drugs at good doses (including a diuretic)</b>.${r(6, 7)}</p>
<ol>
<li>Exclude pseudo-resistance: check adherence (ask kindly; count pills), cuff size, white-coat effect (home BP), salt, alcohol and NSAIDs.</li>
<li>Optimise: RAS blocker + CCB + thiazide at full doses (switching to chlorthalidone where available).</li>
<li>Add ${dr("spironolactone")} <b>25–50 mg daily</b> (best fourth drug: PATHWAY-2${r(20)}) if K⁺ is under 4.5 and eGFR over 45; monitor potassium.</li>
<li>Screen for primary aldosteronism, sleep apnoea and kidney disease; refer to a specialist.</li></ol>

<h3>E. Hypertensive emergency</h3>
${box("red", "Lower BP in a controlled way, not to normal", `<ul>
<li><b>Most emergencies (e.g. malignant hypertension, encephalopathy, AKI):</b> reduce the mean arterial pressure by <b>no more than 20–25% in the first hour</b>, then to about 160/100 over the next 2–6 hours, then towards normal over 24–48 hours. Falling too fast can cause stroke, blindness or kidney injury because the brain and kidneys have adapted to high pressure.</li>
<li><b>Aortic dissection:</b> SBP <b>under 120</b> and heart rate under 60 <b>within 20 minutes</b>: beta-blocker first (IV labetalol or esmolol), then a vasodilator. Refer urgently.</li>
<li><b>Acute pulmonary oedema or ACS:</b> IV ${dr("gtn", "GTN")} (± labetalol in ACS without heart failure); SBP under 140.</li>
<li><b>Severe pre-eclampsia / eclampsia:</b> SBP under 160 and DBP under 105–110: ${dr("labetalol")}, ${dr("hydralazine_iv", "hydralazine IV")} or oral ${dr("nifedipine", "nifedipine")}, with magnesium sulfate.</li>
<li><b>Acute ischaemic stroke:</b> lower only if over 220/120, or below 185/110 before thrombolysis (see the stroke chapter).</li></ul>`)}
${tbl(["Drug", "Dose", "Notes"], [
[dr("labetalol"), "20 mg IV over 2 min, then 40–80 mg every 10 min to 300 mg total; or infusion 0.5–2 mg/min", "First choice in most emergencies; avoid in asthma, heart block, acute heart failure"],
[dr("hydralazine_iv", "Hydralazine IV"), "5–10 mg slow IV every 20–30 min; infusion 50–150 µg/min", "Pregnancy; reflex tachycardia; not in dissection or ACS"],
[dr("gtn", "GTN IV"), "5–10 µg/min, titrate to 200 µg/min", "Pulmonary oedema, ACS"],
[dr("nifedipine", "Nifedipine SR (oral)"), "10–20 mg, repeated", "Urgency and pregnancy; <b>never the immediate-release capsule bitten or sublingual</b>"]])}
<p class="qn">Hypertensive emergency targets from the ESC Council on Hypertension position paper and ESC 2024.${r(16, 7)}</p>
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap a medicine for its full card. All first-line drugs below are on NEML 2025.</p>
${tbl(["Drug", "Usual adult dose", "Key cautions", "Bhutan (NEML 2025)"], [
[dr("hydrochlorothiazide", "Hydrochlorothiazide"), "12.5–25 mg once daily (protocol: 25 mg)", "Low K⁺/Na⁺, gout, glucose; weak if eGFR under 30", "25 mg (to PHC)"],
[dr("losartan", "Losartan"), "25–50 mg daily (protocol) → up to 100 mg", "Pregnancy; K⁺ and creatinine after starting", "25 and 50 mg (to PHC)"],
[dr("enalapril", "Enalapril"), "5 mg daily → 10–20 mg twice daily", "Cough, angioedema, pregnancy", "5 mg (to DH)"],
[dr("amlodipine", "Amlodipine"), "5 mg daily → 10 mg", "Ankle oedema", "5 mg (to PHC)"],
[dr("nifedipine", "Nifedipine SR"), "20 mg twice daily (SR only)", "Never immediate-release for rapid lowering", "20 mg SR (to PHC)"],
[dr("spironolactone", "Spironolactone"), "25–50 mg daily (resistant HTN)", "K⁺ over 4.5, eGFR under 45", "25 mg"],
[dr("bisoprolol", "Bisoprolol / metoprolol"), "Bisoprolol 2.5–10 mg daily", "Only with a compelling indication", "Bisoprolol (NRH/RRH); metoprolol (to DH)"],
[dr("methyldopa", "Methyldopa"), "250 mg BD–TDS → max 3 g/day", "Pregnancy; depression", "250 mg (to PHC)"],
[dr("labetalol", "Labetalol IV"), "20 mg IV, then 40–80 mg every 10 min (max 300 mg)", "Asthma, heart block", "Injection (to DH)"],
[dr("hydralazine_iv", "Hydralazine IV"), "5–10 mg slow IV every 20–30 min", "Reflex tachycardia", "Injection (to PHC)"],
[dr("atorvastatin", "Atorvastatin"), "10–20 mg (primary prevention); higher if high risk", "Interactions", "10 mg (to DH)"]])}
<p class="qn">Chlorthalidone (12.5–25 mg), telmisartan (40–80 mg) and ramipril (2.5–10 mg) are used in ICMR protocols but are not on NEML 2025.${r(3, 4)}</p>
` },

{ id: "populations", title: "Special populations", html: `
<h3>Older adults and the frail</h3>
<ul><li>Treatment still prevents strokes and heart failure, even beyond 80 years (HYVET; STEP trial in Chinese adults aged 60–80 found benefit from SBP 110–130)${r(12)}; SPRINT showed fewer cardiovascular events and deaths with an SBP target under 120 in high-risk adults${r(11)}. Start with one drug at a low dose; check standing BP; individualise targets (ICMR: under 150/90 at 80 and over; Bhutan: individualise by frailty).</li></ul>
<h3>Diabetes and CKD</h3>
<ul><li>ACE inhibitor or ARB first if there is albuminuria; target under 130/80 if tolerated. See the ${'<a href="#/d/dm-adult">diabetes</a>'} and ${'<a href="#/d/ckd-adult">CKD</a>'} chapters.</li></ul>
<h3>Pregnancy and women of child-bearing age</h3>
<ul><li>Stop ACE inhibitors, ARBs and spironolactone before conception or as soon as pregnancy is confirmed. Use labetalol, nifedipine SR or methyldopa; treat to about 135/85 (CHAP trial; NICE NG133).</li><li>Raised BP after 20 weeks: assess for pre-eclampsia the same day. Low-dose aspirin from 12 weeks in high-risk women.${r(19)}</li></ul>
<h3>After stroke</h3>
<ul><li>Long-term target under 130/80 once the acute phase is over; a thiazide + ACEi/ARB combination has the strongest evidence.</li></ul>
<h3>High altitude</h3>
<ul><li>BP may rise temporarily on ascent to high altitude. Patients with controlled hypertension can usually travel safely on their usual medicines; those with uncontrolled BP should be reviewed before trekking. <span class="lbl l-exp">EXPERT OPINION</span></li></ul>
<h3>Young adults</h3>
<ul><li>Hypertension under 30–40 years needs a search for a secondary cause (kidney, renovascular, aldosteronism, coarctation, drugs). For under-18s, see the ${'<a href="#/d/htn-child">children\'s page</a>'}.</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>BP 200/120, no symptoms, normal examination</b>", "Not an emergency. Rest and recheck; check fundi, urine and creatinine; start or intensify oral drugs; review in 1–3 days. Never give sublingual nifedipine"],
["<b>BP 210/130 with headache, vomiting, confusion and papilloedema</b>", "Hypertensive encephalopathy / malignant hypertension: admit, IV labetalol, lower MAP by up to 25% in the first hour; exclude stroke with CT"],
["<b>Creatinine rises 20% after starting losartan</b>", "Expected haemodynamic effect; continue and recheck in 2 weeks. If over 30%, stop and look for renal artery stenosis or volume depletion"],
["<b>Low potassium on hydrochlorothiazide</b>", "Add or switch to losartan (raises K⁺), increase dietary potassium; screen for aldosteronism if K⁺ is low without a diuretic"],
["<b>Patient stopped tablets because 'BP is normal now'</b>", "Explain that the tablets are what keep BP normal; hypertension is lifelong. The Bhutan protocol: do not stop antihypertensives unless advised by a doctor"],
["<b>Elderly woman, dizzy on standing, BP 150/80 seated, 120/70 standing</b>", "Orthostatic hypotension: reduce or change drugs (avoid diuretics and alpha-blockers); aim for a standing SBP that avoids symptoms"],
["<b>Recurrent high readings only in clinic</b>", "Home BP monitoring; if home BP is under 135/85, avoid over-treatment"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Target organ", "Complication", "How it shows", "Prevention / action"], [
["Brain", "Ischaemic and haemorrhagic stroke, TIA, vascular dementia", "Sudden weakness, speech or vision loss", "BP control is the single most effective stroke prevention"],
["Heart", "LVH, heart failure (especially HFpEF), AF, coronary disease", "Breathlessness, palpitations, chest pain; LVH on ECG", "Control BP; treat AF; statin"],
["Kidney", "Hypertensive nephrosclerosis, CKD", "Albuminuria, rising creatinine", "ACEi/ARB, target under 130/80"],
["Eye", "Hypertensive retinopathy; retinal vein occlusion", "Fundoscopy changes; visual loss", "Yearly fundoscopy"],
["Vessels", "Aortic aneurysm and dissection, peripheral arterial disease", "Tearing chest/back pain; claudication", "BP control; stop smoking"]])}
<h3>Prognosis</h3>
<ul><li>Treatment reduces stroke by about 35–40%, heart attacks by 20–25% and heart failure by about 50% in trials.</li><li>The benefit depends on <b>long-term adherence</b>: once-daily dosing, single-pill combinations where available, and regular follow-up make the biggest difference.</li></ul>
` },

{ id: "followup", title: "Follow-up, self-care and prevention", html: `
${tbl(["When", "What"], [
["Within 1 week", "If initial BP was 160/100 or more"],
["Every month", "Until BP is at target (titrate one step at a time)"],
["Every 2 months once controlled (Bhutan)", "BP, adherence, side effects, lifestyle"],
["2–4 weeks after starting a thiazide or ARB", "Sodium, potassium, creatinine (VA/DoD: 1–4 weeks in people over 65)"],
["Yearly", "ECG, fundoscopy, urine albumin, creatinine, lipids, glucose"]])}
${box("green", "What to tell the patient", `<ul>
<li>'High blood pressure usually has no symptoms. Feeling well does not mean it is controlled; only measuring tells us.'</li>
<li>'Take your tablets every day, even when you feel fine. Do not stop them unless a doctor tells you to.'</li>
<li>'Cut down on salt: less salt in suja and curries, fewer pickles, dried fish and packet foods.'</li>
<li>'Walk briskly for 30 minutes most days, keep your weight down, and stop smoking, doma and alcohol.'</li>
<li>'Avoid painkillers like ibuprofen and diclofenac; they raise BP.'</li>
<li>'If you can, check your BP at home and bring the readings.'</li></ul>`)}
${box("red", "Come to hospital at once if", `<ul><li>Sudden weakness, numbness, facial droop, trouble speaking or seeing.</li><li>Chest pain or breathlessness.</li><li>Severe headache with vomiting or confusion.</li><li>BP above 180/110 at home with any of these.</li><li>You are pregnant and develop headache, visual disturbance or swelling.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Measuring blood pressure correctly", src: "images/htn-bp-measure.jpg", mod: "Clinical photograph", ctx: "Office BP measurement", loc: "Upper arm", find: "A health worker measures BP with an aneroid sphygmomanometer and stethoscope", signs: "Cuff at heart level; arm supported", interp: "Good technique matters more than the device: correct cuff size, arm supported at heart level, patient seated and quiet, two readings averaged", ddx: "—", by: "Confidence24", page: "https://commons.wikimedia.org/wiki/File:Blood_pressure_measurement_using_an_aneroid_sphygmomanometer.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Hypertensive retinopathy", src: "images/htn-retinopathy.jpg", mod: "Fundus photograph", ctx: "Long-standing or severe hypertension", loc: "Retina", find: "Narrowed arterioles with flame haemorrhages and cotton-wool spots around the disc", signs: "Hypertensive retinopathy (higher grade)", interp: "Haemorrhages, exudates or papilloedema with very high BP mean malignant hypertension, a hypertensive emergency", ddx: "Diabetic retinopathy, retinal vein occlusion", by: "Frank Wood", page: "https://commons.wikimedia.org/wiki/File:Hypertensiveretinopathy.jpg", lic: "CC BY 3.0" })}
</div>
<div class="pair">
${fig({ title: "Left ventricular hypertrophy on ECG", src: "images/htn-lvh-ecg.jpg", mod: "12-lead ECG", ctx: "Hypertensive heart disease", loc: "Precordial leads", find: "Very tall R waves in the left chest leads and deep S waves in the right, with ST depression and T inversion laterally (secondary repolarisation changes, the 'strain' pattern)", signs: "LVH by voltage criteria (e.g. Sokolow–Lyon: S in V1 + R in V5 or V6 over 35 mm)", interp: "Target-organ damage: the heart has thickened against high pressure. It raises the risk of heart failure, AF and sudden death; good BP control can regress it", ddx: "Athlete's heart, aortic stenosis, hypertrophic cardiomyopathy", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Left_ventricular_hypertrophy_with_secondary_repolarization.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Aortic dissection on CT", src: "images/htn-dissection-ct.png", mod: "Contrast CT chest", ctx: "Hypertensive emergency with tearing chest pain", loc: "Ascending aorta", find: "An intimal flap divides the aortic lumen into true and false channels", signs: "Stanford type A dissection", interp: "A hypertensive emergency needing SBP under 120 and heart rate under 60 within 20 minutes, and urgent surgery for type A. Never thrombolyse", ddx: "Acute coronary syndrome, pulmonary embolism", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:DissectionCT.png", lic: "CC BY-SA 3.0" })}
</div>
<h3>Link-only references</h3>
<ul><li>WHO HEARTS technical package and South-East Asia risk charts: <a href="https://www.who.int/publications/i/item/9789240001367" target="_blank" rel="noopener">WHO HEARTS</a></li><li>Keith–Wagener–Barker and Mitchell–Wong retinopathy grading images: <a href="https://eyewiki.org/Hypertensive_Retinopathy" target="_blank" rel="noopener">EyeWiki</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Screening and diagnosis", [
F.s("Measure BP in every adult (standard technique, 2 readings)"), F.a,
F.d("Average BP?"), F.a,
F.b([["<130/80", F.ok("Recheck every 6–12 months; healthy lifestyle")], ["130–139 / 80–89", F.d("High-risk condition or age ≥65?"), F.b([["Yes", F.s("Confirm, then treat (Bhutan)")], ["No", F.ok("Lifestyle; recheck 6-monthly")]])], ["≥140/90", F.s("Confirm a week later (same day if ≥180/110 with symptoms)"), F.s("Treat + baseline tests within 1 month")]])])}
${F.chart("2 · Severe BP (≥180/110)", [
F.s("BP ≥180/110"), F.a,
F.d("Acute organ damage? (neuro signs, chest pain, pulmonary oedema, dissection, AKI, papilloedema, pregnancy)"), F.a,
F.b([["Yes", F.e("<b>Emergency</b>: admit, IV labetalol / GTN / hydralazine; MAP down ≤25% in 1 h (dissection: SBP <120 in 20 min)")], ["No", F.ok("<b>Urgency</b>: rest and recheck; oral drugs; lower over 24–48 h; review within a week")]])])}
${F.chart("3 · Resistant hypertension", [
F.s("Above target on 3 drugs incl. a diuretic"), F.a,
F.s("Check adherence, cuff, home BP, salt, alcohol, NSAIDs"), F.a,
F.s("Full doses of RAS blocker + CCB + thiazide"), F.a,
F.s("Add spironolactone 25–50 mg if K⁺ <4.5, eGFR >45"), F.a,
F.e("Screen for secondary causes; refer to a specialist")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Measure properly or not at all.</b> Most 'uncontrolled' BP in clinics is partly technique.</li>
<li><b>Two drugs at low dose beat one drug at full dose</b>, with fewer side effects.</li>
<li><b>Organ damage, not the number, makes an emergency.</b></li>
<li><b>Ask about salt in suja</b>: it is the commonest hidden source of salt in Bhutan.</li>
<li><b>Young, sudden, severe or resistant hypertension</b> deserves a search for a secondary cause.</li>
<li><b>Every visit is a chance to reinforce adherence.</b> Ask what tablets the patient actually takes.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Sublingual or bitten nifedipine capsules", "Uncontrolled fall in BP: stroke, MI, death", "Oral SR tablets for urgency; IV drugs for emergency"],
["Lowering BP to normal in the emergency room", "Brain and kidney ischaemia", "MAP down no more than 25% in the first hour"],
["Diagnosing on one reading", "Over-diagnosis; lifelong unnecessary drugs", "Confirm on a second visit"],
["ACE inhibitor + ARB together", "AKI, hyperkalaemia, no extra benefit", "One RAS blocker only"],
["ACEi/ARB in a woman planning pregnancy", "Fetal kidney damage", "Use a CCB or labetalol"],
["Adding drugs without checking adherence", "Polypharmacy, side effects", "Ask, count, simplify"],
["Ignoring postural BP in the elderly", "Falls, fractures", "Measure standing BP"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "Describe correct office BP measurement.", "Patient seated 5 minutes with back supported, feet flat, legs uncrossed; arm supported at heart level; correct cuff size (bladder covering 80% of arm circumference); no talking; 2–3 readings 1 minute apart, averaged; both arms at the first visit.")}
${qa("Intern/MO", "When does the Bhutan protocol start drug treatment?", "BP 140/90 or more on two readings a week apart, or 130/80 or more in people with stroke, diabetes, CKD, coronary artery disease or age 65 and over.")}
${qa("Intern/MO", "Define hypertensive emergency and urgency.", "Emergency: severe BP (usually ≥180/110–120) with acute target-organ damage (encephalopathy, stroke, ACS, pulmonary oedema, dissection, AKI, eclampsia, malignant retinopathy). Urgency: severe BP without acute organ damage.")}
${qa("Intern/MO", "List five clues to secondary hypertension.", "Onset under 30–40 years; sudden onset or acceleration; resistant hypertension; low potassium; abnormal creatinine or urine; flash pulmonary oedema; creatinine rise over 30% on ACEi/ARB; episodic symptoms; radio-femoral delay.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "Outline the Bhutan Hypertension Protocol v3.5 drug steps.", "Hydrochlorothiazide 25 mg once daily first; if not at target after a month, add losartan 25 mg once daily; if still not controlled, a doctor at a higher centre individualises treatment. Target 120–130/70–80 within 3 months.")}
${qa("Intern/MO", "Which antihypertensives are avoided in pregnancy?", "ACE inhibitors, ARBs (fetotoxic), spironolactone, and usually thiazides. Use labetalol, nifedipine SR or methyldopa.")}
${qa("Specialist", "What is the best fourth drug in resistant hypertension, and when is it unsafe?", "Spironolactone 25–50 mg (PATHWAY-2). Avoid if potassium is 4.5 mmol/L or higher or eGFR is under 45, and monitor potassium closely.")}
${qa("Specialist", "How fast should BP be lowered in hypertensive emergency? Name the exceptions.", "Mean arterial pressure down by no more than 20–25% in the first hour, then to about 160/100 over 2–6 hours, then towards normal over 24–48 hours. Exceptions: aortic dissection (SBP under 120 within 20 minutes), severe pre-eclampsia/eclampsia (under 160/105–110), acute ischaemic stroke (lower only if over 220/120, or under 185/110 for thrombolysis).")}
${qa("Viva", "Why is salt reduction especially important in Bhutan?", "Salt intake is very high (STEPS 2014 found high salt intake in 99% of adults), with salted butter tea, pickles and dried fish as major sources; salt-sensitive hypertension is common in South Asians and older people; and a potassium-enriched salt substitute reduced stroke and death in a large rural Asian trial.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Hypertension Screening & Management Protocol, v3.5 (15 January 2025); and v3.0 (10 May 2023). (Local PDFs, Bhutan Medical Library.)</li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §2.3 Hypertension.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and National Essential Medicines List 2025.</li>
<li id="ref-4">Indian Council of Medical Research. Standard Treatment Workflow: Hypertension in Adults. New Delhi, May 2026. (Local PDF; <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a>)</li>
<li id="ref-5">World Health Organization. Guideline for the pharmacological treatment of hypertension in adults. Geneva, 2021. <a href="https://www.who.int/publications/i/item/9789240033986" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-6">Unger T, Borghi C, Charchar F, et al. 2020 International Society of Hypertension Global Hypertension Practice Guidelines. Hypertension 2020;75:1334–1357. <a href="https://doi.org/10.1161/HYPERTENSIONAHA.120.15026" target="_blank" rel="noopener">doi:10.1161/HYPERTENSIONAHA.120.15026</a></li>
<li id="ref-7">McEvoy JW, McCarthy CP, Bruno RM, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J 2024;45:3912–4018. <a href="https://doi.org/10.1093/eurheartj/ehae178" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehae178</a></li>
<li id="ref-8">Mancia G, Kreutz R, Brunström M, et al. 2023 ESH Guidelines for the management of arterial hypertension. J Hypertens 2023;41:1874–2071. <a href="https://doi.org/10.1097/HJH.0000000000003480" target="_blank" rel="noopener">doi:10.1097/HJH.0000000000003480</a></li>
<li id="ref-9">Jones DW, Ferdinand KC, Taler SJ, et al. 2025 AHA/ACC/multisociety Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. Hypertension/Circulation/JACC, August 2025. <a href="https://www.acc.org/about-acc/press-releases/2025/08/13/20/03/new-high-blood-pressure-guideline-emphasizes-prevention-early-treatment-to-reduce-cvd-risk" target="_blank" rel="noopener">ACC summary</a></li>
<li id="ref-10">US Department of Veterans Affairs / Department of Defense. Clinical Practice Guideline for the Diagnosis and Management of Hypertension in the Primary Care Setting. August 2026. <a href="https://www.healthquality.va.gov/" target="_blank" rel="noopener">healthquality.va.gov</a></li>
<li id="ref-11">SPRINT Research Group. A randomized trial of intensive versus standard blood-pressure control. N Engl J Med 2015;373:2103–2116. <a href="https://doi.org/10.1056/NEJMoa1511939" target="_blank" rel="noopener">doi:10.1056/NEJMoa1511939</a></li>
<li id="ref-12">Zhang W, Zhang S, Deng Y, et al. Trial of intensive blood-pressure control in older patients with hypertension (STEP). N Engl J Med 2021;385:1268–1279. <a href="https://doi.org/10.1056/NEJMoa2111437" target="_blank" rel="noopener">doi:10.1056/NEJMoa2111437</a></li>
<li id="ref-13">Ettehad D, Emdin CA, Kiran A, et al. Blood pressure lowering for prevention of cardiovascular disease and death: a systematic review and meta-analysis. Lancet 2016;387:957–967. <a href="https://doi.org/10.1016/S0140-6736(15)01225-8" target="_blank" rel="noopener">doi:10.1016/S0140-6736(15)01225-8</a></li>
<li id="ref-14">Ministry of Health, Bhutan and WHO. Noncommunicable disease risk factors at a glance: Bhutan STEPS survey 2019. <a href="https://moh.gov.bt/wp-content/uploads/2025/01/noncommunicable-disease-risk-factors-at-a-glance-bhutan-2019.pdf" target="_blank" rel="noopener">moh.gov.bt (PDF)</a></li>
<li id="ref-15">Pelzom D, Isaakidis P, Oo MM, et al. Alarming prevalence and clustering of modifiable noncommunicable disease risk factors among adults in Bhutan. BMC Public Health 2017;17:975. <a href="https://doi.org/10.1186/s12889-017-4989-x" target="_blank" rel="noopener">doi:10.1186/s12889-017-4989-x</a></li>
<li id="ref-16">van den Born BJH, Lip GYH, Brguljan-Hitij J, et al. ESC Council on Hypertension position document on the management of hypertensive emergencies. Eur Heart J Cardiovasc Pharmacother 2019;5:37–46. <a href="https://doi.org/10.1093/ehjcvp/pvy032" target="_blank" rel="noopener">doi:10.1093/ehjcvp/pvy032</a></li>
<li id="ref-17">Neal B, Wu Y, Feng X, et al. Effect of salt substitution on cardiovascular events and death (SSaSS). N Engl J Med 2021;385:1067–1077. <a href="https://doi.org/10.1056/NEJMoa2105675" target="_blank" rel="noopener">doi:10.1056/NEJMoa2105675</a></li>
<li id="ref-18">World Health Organization. HEARTS technical package for cardiovascular disease management in primary health care: risk-based CVD management. Geneva, 2020. <a href="https://www.who.int/publications/i/item/9789240001367" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-19">National Institute for Health and Care Excellence. NG133: Hypertension in pregnancy: diagnosis and management. 2019 (updated 2023). <a href="https://www.nice.org.uk/guidance/ng133" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-20">Williams B, MacDonald TM, Morant S, et al. Spironolactone versus placebo, bisoprolol, and doxazosin in resistant hypertension (PATHWAY-2). Lancet 2015;386:2059–2068. <a href="https://doi.org/10.1016/S0140-6736(15)00257-3" target="_blank" rel="noopener">doi:10.1016/S0140-6736(15)00257-3</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan Hypertension Protocol v3.5 and v3.0", "<span class='pass'>Verified</span>", "Read directly from the PDFs; v3.5 (Jan 2025) followed"],
["Conflict: protocol (thiazide first) vs STG 2024 (ARB/ACEi first)", "<span class='warn'>Flagged</span>", "Both shown; protocol followed as the newer national document"],
["Thresholds and targets", "<span class='pass'>Verified</span>", "ISH 2020, ESC 2024, ICMR 2026, AHA/ACC 2025, WHO 2021"],
["Hypertensive emergency targets", "<span class='pass'>Verified</span>", "ESC position paper 2019; ESC 2024"],
["Drug doses and Bhutan availability", "<span class='pass'>Checked</span>", "NEMF 2022 / NEML 2025; BNF; ICMR"],
["Bhutan prevalence data", "<span class='pass'>Verified</span>", "STEPS 2019 (28%); STEPS 2014 salt"],
["BP classifier calculator", "<span class='pass'>Checked</span>", "ISH 2020 and AHA/ACC 2025 categories; Bhutan v3.5 actions"],
["Images", "<span class='pass'>Done</span>", "Four Commons files; licences checked via the Commons API"],
["Clinical sign-off", "<span class='warn'>Pending</span>", "Needs review by a physician"]], "qc")}
` }
]
});
