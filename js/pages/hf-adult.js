/* Heart failure — adults */
registerPage({
id: "hf-adult",
title: "Heart Failure — Adults",
subtitle: "Classification by ejection fraction, the four pillars of treatment, and managing the decompensated patient",
age: "Adults", specs: ["cardio", "medicine", "emerg", "resp"],
keywords: ["heart failure", "congestive cardiac failure", "HFrEF", "HFmrEF", "HFpEF", "ejection fraction", "four pillars", "sacubitril", "valsartan", "ARNI", "bisoprolol", "spironolactone", "dapagliflozin", "SGLT2 inhibitor", "furosemide", "digoxin", "pulmonary edema", "pulmonary oedema", "acute heart failure", "cardiogenic shock", "BNP", "NT-proBNP", "NYHA", "orthopnoea", "paroxysmal nocturnal dyspnoea", "pitting oedema"],
related: ["hf-child", "ckd-adult", "dm-adult"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if ESC releases its next full HF guideline)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Heart failure is not one disease but a final common path — the heart cannot pump enough to meet the body's needs. The single most important question is the ejection fraction, because it chooses the life-saving medicines.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Breathlessness, fatigue, orthopnoea, leg swelling + signs of congestion (raised JVP, basal crackles, oedema). Confirm with <b>BNP/NT-proBNP</b> and <b>echocardiography</b>.</p></div>
<div><h4>Classify by EF</h4><ul><li>HFrEF: LVEF ≤40%</li><li>HFmrEF: 41–49%</li><li>HFpEF: ≥50%</li></ul></div>
<div><h4>Four pillars (HFrEF)</h4><p>${dr("sacubitril", "ARNI")}/ACEi/ARB + ${dr("bisoprolol", "beta-blocker")} + ${dr("spironolactone", "MRA")} + ${dr("dapagliflozin", "SGLT2 inhibitor")} — start all four, titrate each.</p></div>
<div><h4>HFpEF / HFmrEF</h4><p>${dr("dapagliflozin", "SGLT2 inhibitor")} (dapagliflozin/empagliflozin) + a diuretic for congestion; treat the cause (hypertension, AF, obesity).</p></div>
<div><h4>Acute pulmonary oedema</h4><p>Sit upright, oxygen, ${dr("furosemide")} 40 mg IV, ${dr("gtn", "GTN")} if SBP &gt;110 mmHg; CPAP/NIV if distressed.</p></div>
<div><h4>Red flags</h4><ul><li>Rest dyspnoea, SpO₂ &lt;90%</li><li>Cold peripheries, SBP &lt;90 (shock)</li><li>New arrhythmia, chest pain</li></ul></div>
<div><h4>Always</h4><p>Look for the cause (ischaemia, valve disease, hypertension); check iron and replace deficiency; weigh the patient daily.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG 2024 treats acute failure with <b>sit up, oxygen, IV furosemide 40 mg then 40 mg/day, and a beta-blocker</b>, then referral; the PEN protocol adds a thiazide or loop diuretic, spironolactone in selected patients, and an ACE inhibitor after checking potassium and kidney function. The international four-pillar therapy (ARNI/ACEi + beta-blocker + MRA + SGLT2 inhibitor) is the goal for HFrEF where these drugs are available. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What heart failure is, who gets it and why", html: `
<h3>Definition and classification</h3>
<p>Heart failure is a clinical syndrome of symptoms (breathlessness, fatigue, swelling) with signs (raised JVP, crackles, oedema) caused by a structural or functional heart problem that reduces output or raises filling pressures. The ejection fraction splits it into three treatment-defining groups:</p>
${tbl(["Type", "Ejection fraction", "Typical cause", "Treatment backbone"], [
["<b>HFrEF</b> (reduced)", "≤40%", "Ischaemia, dilated cardiomyopathy, valve disease", "The four pillars (ARNI/ACEi/ARB + beta-blocker + MRA + SGLT2i)"],
["<b>HFmrEF</b> (mildly reduced)", "41–49%", "Overlap of HFrEF and HFpEF causes", "Diuretic + SGLT2i; usually the HFrEF drugs also"],
["<b>HFpEF</b> (preserved)", "≥50%", "Hypertension, obesity, AF, diabetes, ageing", "Diuretic + SGLT2i; treat the cause"],
["<b>HFimpEF</b> (improved)", "Was ≤40%, now &gt;40%", "HFrEF that recovered on treatment", "Continue the HFrEF drugs — do not stop them"]])}
<p>Two other labels describe the same patient: <b>left</b> failure (lung congestion) and <b>right</b> failure (systemic congestion), and <b>acute</b> (new or worsening, often pulmonary oedema) versus <b>chronic</b> failure.</p>

<h3>How common is it, and the causes</h3>
<ul>
<li>Heart failure affects roughly <b>1–2% of adults</b> worldwide, rising steeply with age; it is a leading cause of hospital admission and death in older people.</li>
<li>In South Asia, <b>rheumatic heart disease</b> is an additional, younger cause alongside the usual ischaemic and hypertensive disease — worth remembering in a young patient.</li></ul>
${tbl(["Cause", "Notes"], [
["Coronary artery disease", "The commonest cause in adults; always look for ischaemia"],
["Hypertension", "A leading cause of HFpEF, especially with LV hypertrophy"],
["Valve disease", "Aortic stenosis, mitral regurgitation; rheumatic disease in the young"],
["Cardiomyopathies", "Dilated, hypertrophic, infiltrative (amyloid, sarcoid), alcohol, peripartum"],
["Arrhythmia", "Fast AF can both cause and be caused by heart failure"],
["High-output states", "Anaemia, thyrotoxicosis, pregnancy, beriberi"],
["Toxins", "Alcohol, chemotherapy (anthracyclines, trastuzumab), cocaine"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("The vicious cycle of heart failure, and where drugs break it", [
F.s("<b>Injury</b>: myocardial infarction, hypertension, valve disease, cardiomyopathy, arrhythmia, rheumatic heart disease"), F.a,
F.s("Reduced cardiac output (HFrEF) or stiff ventricle with poor filling (HFpEF)"), F.a,
F.s("Body senses low output → <b>neurohormonal activation</b>: renin–angiotensin–aldosterone and sympathetic systems"), F.a,
F.b([
["Short term", F.s("Salt and water retention, vasoconstriction, faster heart rate")],
["Long term", F.e("Congestion (breathlessness, oedema), remodelling, fibrosis, arrhythmia → worse pump")]]), F.a,
F.ok("Four pillars block the cycle: ARNI/ACE inhibitor/ARB · beta-blocker · MRA · SGLT2 inhibitor; diuretics relieve congestion")])}
<h3>Why the failing heart gets worse</h3>
<ol class="chain">
<li><b>An insult</b> (infarction, pressure overload, valve leak, toxin) reduces the heart's pumping ability.</li>
<li><b>Compensation:</b> the body responds as if it were bleeding — the sympathetic nervous system and renin–angiotensin–aldosterone system (RAAS) switch on, the heart rate rises, and salt and water are retained to maintain blood pressure.</li>
<li><b>Harm from compensation:</b> chronic sympathetic and RAAS activation is toxic to the heart. It increases afterload, causes myocyte hypertrophy and death, and replaces muscle with scar — <b>remodelling</b>. The ventricles dilate and pump worse still.</li>
<li><b>Congestion:</b> salt and water retention and rising filling pressures back up into the lungs (left failure: orthopnoea, crackles) and the veins and liver (right failure: raised JVP, oedema, ascites).</li></ol>
<p>Every drug in the four-pillar therapy exists to <b>block a step in this harmful compensation</b>: the ARNI/ACEi/ARB blocks the RAAS, the beta-blocker blocks the sympathetic drive, the MRA blocks aldosterone, and the SGLT2 inhibitor shifts the kidney and heart's energy handling. That is why they reduce death, not just symptoms — and why they must be used together and titrated up.</p>
<h3>Natural history</h3>
<p>Untreated, heart failure is progressive: symptoms worsen, hospitalisations become more frequent, and the heart and kidneys decline together. With modern treatment the course can be dramatically flattened — HFrEF can even recover — which is why starting and up-titrating the four pillars matters more than almost anything else in cardiology.</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan (STG/PEN)", "India (ICMR)", "ESC 2021/2023", "ACC/AHA/HFSA 2022", "This guide"], [
["First-line HFrEF renin–angiotensin agent", "ACE inhibitor (after checking K+/creatinine)", "ACE inhibitor/ARB", "ARNI first where possible (ACEi/ARB acceptable)", "ARNI first (Class 1)", "ARNI where available; ACEi/ARB if not"],
["SGLT2 inhibitors", "Not in the routine protocol", "Not routine", "Recommended across HFrEF, HFmrEF and HFpEF (2023)", "Recommended in HFrEF (and for HFpEF/HFmrEF)", "Dapagliflozin/empagliflozin in all three"],
["Beta-blocker timing", "As part of treatment (STG)", "When stable", "Start when euvolaemic, before discharge", "Start when stable", "Start when euvolaemic, titrate slowly"],
["Digoxin", "Not emphasised", "Second/third line", "For persistent symptoms or AF rate control", "For symptoms/AF", "Add-on for symptoms or AF"],
["Acute HF diuretic", "Furosemide 40 mg IV", "Furosemide IV", "40 mg IV (or 1–2.5× oral dose)", "IV loop diuretic", "Furosemide 40 mg IV, titrate to response"],
["NT-proBNP role", "Not in protocol", "Rule-out threshold", "Rule-out (cut-offs by setting)", "Rule-out", "Use to rule out and to track response"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Heart failure presents along a spectrum: the gradually breathless outpatient, and the suddenly drowning patient with pulmonary oedema. Recognise both.</p>
${tbl(["Symptom or sign", "Mechanism", "What it tells you"], [
["Breathlessness on exertion, then at rest", "Raised left-heart filling pressure, low output", "The cardinal symptom; grade it (NYHA)"],
["Orthopnoea (breathless lying flat)", "Lung congestion when supine", "Left failure; ask how many pillows"],
["Paroxysmal nocturnal dyspnoea", "Night-time fluid shift into the lungs", "Fairly specific for heart failure"],
["Fatigue, reduced exercise tolerance", "Low cardiac output, poor muscle perfusion", "Common and easy to overlook"],
["Leg and ankle swelling", "Right-heart congestion, salt retention", "Pitting oedema; check JVP too"],
["Raised JVP", "High right-atrial pressure", "The single best bedside sign of congestion"],
["Basal crackles, wheeze", "Pulmonary oedema", "Left failure (\"cardiac asthma\")"],
["Third heart sound (S3)", "Rapid early ventricular filling", "Dilated, failing ventricle"],
["Tachycardia, cool peripheries, low BP", "Low output / cardiogenic shock", "Severe — assess urgently"]])}
<h3>NYHA functional class</h3>
${tbl(["Class", "Limitation"], [
["I", "No limitation of ordinary activity"],
["II", "Slight limitation; ordinary activity causes symptoms"],
["III", "Marked limitation; less than ordinary activity causes symptoms"],
["IV", "Symptoms at rest; any activity worsens them"]])}
${box("red", "Red flags — get help now", `<ul>
<li><b>Acute pulmonary oedema:</b> severe breathlessness, pink frothy sputum, SpO₂ &lt;90%, widespread crackles.</li>
<li><b>Cardiogenic shock:</b> cold clammy peripheries, systolic BP &lt;90 mmHg, confusion, oliguria.</li>
<li><b>New arrhythmia or chest pain</b> — think acute coronary syndrome.</li>
<li>All of these need immediate treatment and escalation.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Argues against", "Best test to separate"], [
["COPD / asthma", "Wheeze, smoking, prolonged expiration", "No oedema or raised JVP; clear CXR heart", "Spirometry; NT-proBNP; CXR"],
["Pneumonia", "Fever, purulent sputum, consolidation", "No orthopnoea or oedema; unilateral signs", "CXR; CRP; NT-proBNP"],
["Pulmonary embolism", "Sudden breathlessness, pleuritic pain, risk factors", "Clear lungs, normal heart", "CT pulmonary angiography; D-dimer"],
["Nephrotic syndrome", "Gross oedema, frothy urine", "Normal JVP and heart; hypoalbuminaemia", "Urine protein; albumin"],
["Chronic liver disease", "Ascites, oedema, jaundice", "No raised JVP (unless tense ascites); normal heart", "LFTs; ultrasound"],
["Severe anaemia", "Pallor, high-output state", "Normal heart on echo", "Full blood count"],
["Obesity / deconditioning", "Breathlessness on exertion only", "No congestion signs; normal NT-proBNP", "BNP; echo"],
["Bilateral leg oedema (drugs, venous, lymphoedema)", "Bilateral swelling without breathlessness", "Normal JVP; no lung signs", "Clinical; echo if doubt"]])}
<h3>The typical patient</h3>
<p>A 68-year-old with hypertension and diabetes has become breathless on one flight of stairs, sleeps on three pillows, and has pitting ankle oedema with a raised JVP and basal crackles. This is <b>heart failure</b> — the raised JVP plus crackles and oedema is the congestive triad. The next steps are NT-proBNP and an echocardiogram to measure the ejection fraction, which decides whether he gets the full four-pillar therapy.</p>
` },

{ id: "invest", title: "Investigations", html: `
<div class="calc" data-calc="ntprobnp"></div>
${tbl(["Test", "Why", "What it shows"], [
["<b>NT-proBNP / BNP</b>", "The key diagnostic test", "Low level makes HF unlikely; high level supports it and tracks severity"],
["<b>Echocardiography</b>", "The central investigation", "LVEF, valve disease, chamber size, wall motion, filling pressures"],
["Chest X-ray", "Congestion and alternative diagnoses", "Cardiomegaly, upper-lobe diversion, Kerley B lines, effusions, pulmonary oedema"],
["ECG", "Arrhythmia, ischaemia, hypertrophy", "AF, LVH, Q waves, conduction disease"],
["Full blood count", "Anaemia (common and treatable)", "Hb; anaemia worsens HF"],
["Urea, creatinine, electrolytes", "Baseline and drug safety", "Kidney function; potassium before ACEi/ARNI/MRA"],
["Thyroid function", "Hyper/hypothyroidism mimic or worsen HF", "TSH"],
["Iron studies", "Iron deficiency is common and treatable", "Ferritin, transferrin saturation"],
["Lipids, HbA1c", "Risk factors and comorbidity", "Guide secondary prevention"]])}
${box("amber", "NT-proBNP cut-offs", `<p>NT-proBNP <b>under 300 pg/mL</b> (or BNP &lt;100 pg/mL) makes heart failure unlikely in the acute setting; <b>over 450 pg/mL</b> (or over 900–1,800 pg/mL depending on age and kidney function) supports it. Values are raised by age, AF and kidney failure and lowered by obesity — interpret in context.${r(3)}</p>`)}
` },

{ id: "staging", title: "Stages, severity and when to admit", html: `
<h3>ACC/AHA stages (complementary to NYHA)</h3>
${tbl(["Stage", "What it is", "What to do"], [
["A", "At risk (hypertension, diabetes, vascular disease) but no structural heart disease", "Treat risk factors"],
["B", "Structural heart disease but no symptoms (\"pre-HF\")", "Start protective drugs where indicated"],
["C", "Structural disease with current or past symptoms", "Full four-pillar therapy"],
["D", "Advanced, refractory symptoms", "Specialist care; consider devices, transplant"]])}
<h3>Admit when</h3>
<ul>
<li>Rest dyspnoea, SpO₂ &lt;90%, or respiratory distress.</li>
<li>Hypotension, cardiogenic shock, or new arrhythmia.</li>
<li>New-onset heart failure with an unknown cause.</li>
<li>Worsening congestion not settling with oral diuretics, or rising creatinine.</li></ul>
` },

{ id: "manage", title: "Management: chronic and acute", html: `
<h3>A. Chronic HFrEF — the four pillars</h3>
${box("green", "Start all four, titrate each", `<ol><li><b>ARNI</b> (${dr("sacubitril", "sacubitril/valsartan")}), or an ACE inhibitor/ARB (${dr("enalapril")} / ${dr("losartan")}) if ARNI unavailable.</li><li><b>Beta-blocker</b> (${dr("bisoprolol")}) — start once euvolaemic.</li><li><b>MRA</b> (${dr("spironolactone")}) — if potassium and kidney function allow.</li><li><b>SGLT2 inhibitor</b> (${dr("dapagliflozin")}) — regardless of diabetes.</li></ol>`)}
${tbl(["Drug class", "Start", "Target"], [
["ARNI (sacubitril/valsartan)", "24/26 mg twice daily", "97/103 mg twice daily"],
["ACE inhibitor (enalapril)", "2.5 mg twice daily", "10–20 mg twice daily"],
["ARB (losartan)", "50 mg once daily", "150 mg once daily"],
["Beta-blocker (bisoprolol)", "1.25 mg once daily", "10 mg once daily"],
["MRA (spironolactone)", "25 mg once daily", "50 mg once daily"],
["SGLT2 inhibitor (dapagliflozin)", "10 mg once daily", "10 mg once daily"]])}
<p>Double the dose every 2–4 weeks as tolerated, checking BP, potassium and creatinine. Add a <b>loop diuretic</b> (${dr("furosemide")}) for congestion — it relieves symptoms but does not prolong life. Add <b>${dr("digoxin")}</b> for persistent symptoms or rapid AF, and <b>${dr("hydralazine", "hydralazine + isosorbide dinitrate")}</b> where ACEi/ARB/ARNI cannot be used.</p>

<h3>B. HFmrEF and HFpEF</h3>
<ul>
<li>An <b>SGLT2 inhibitor</b> (dapagliflozin or empagliflozin) reduces hospitalisation and cardiovascular death in both HFmrEF and HFpEF (DELIVER, EMPEROR-Preserved).${r(4, 9, 10)}</li>
<li>A <b>diuretic</b> for congestion, and aggressive treatment of the cause — hypertension, atrial fibrillation, obesity, diabetes, coronary disease.</li>
<li>In HFmrEF, the HFrEF drugs are also usually continued.</li></ul>

<h3>C. Acute / decompensated heart failure</h3>
${box("red", "Acute pulmonary oedema — act fast", `<ol><li><b>Sit the patient upright.</b> Never lie them flat.</li><li><b>Oxygen</b> to SpO₂ ≥90% (88–92% in COPD); <b>CPAP or NIV</b> if still distressed.</li><li><b>${dr("furosemide")} 40 mg IV</b> (or 1–2.5× the usual oral dose), titrated to urine output.</li><li><b>${dr("gtn", "GTN")}</b> sublingual or IV if systolic BP is above 110 mmHg.</li><li>Look for the trigger: acute coronary syndrome, arrhythmia, non-adherence, infection, valve disease.</li></ol>`)}
<p><b>Do not stop the four pillars</b> during admission unless the patient is in shock — hold only the beta-blocker in cardiogenic shock. Morphine is <b>not</b> routine. In <b>cardiogenic shock</b>: inotropes/vasopressors and urgent cardiology referral.${r(3)}</p>
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card. Loop diuretics (${dr("furosemide")}), ACE inhibitor (${dr("enalapril")}), ARB (${dr("losartan")}) and SGLT2 inhibitor (${dr("dapagliflozin")}) are covered in their own cards.</p>
${tbl(["Drug", "Adult dose", "Key cautions"], [
[dr("hydrochlorothiazide"), "12.5–25 mg daily (mild congestion)", "Hypokalaemia, hyponatraemia; ineffective if CrCl &lt;30"],
[dr("spironolactone"), "25 mg daily → 50 mg daily", "Hyperkalaemia; gynaecomastia"],
[dr("sacubitril", "Sacubitril/valsartan (ARNI)"), "24/26 mg BD → 97/103 mg BD", "Never with an ACE inhibitor (36 h washout); angioedema"],
[dr("bisoprolol"), "1.25 mg daily → 10 mg daily", "Start when euvolaemic; bradycardia"],
[dr("digoxin"), "62.5–250 micrograms daily", "Narrow index; hypokalaemia toxicity"],
[dr("gtn", "GTN (acute HF)"), "SL 0.4–0.8 mg, or IV 10–200 mcg/min", "SBP &gt;110 mmHg; not with sildenafil"],
[dr("hydralazine", "Hydralazine + isosorbide dinitrate"), "25–75 mg TID + 20–40 mg TID", "For ACEi/ARB intolerance"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Older adults</h3>
<ul><li>Presentation is often atypical (falls, confusion, fatigue). Use NT-proBNP and echo liberally.</li><li>Start low, titrate slowly; watch postural hypotension, kidney function and polypharmacy.</li></ul>
<h3>Pregnancy</h3>
<ul><li>Heart failure in pregnancy is an emergency; peripartum cardiomyopathy presents around delivery. Safe drugs: beta-blockers (metoprolol, bisoprolol), hydralazine, nitrates, digoxin, furosemide. <b>Avoid ACEi/ARB/ARNI</b> (fetotoxic) and spironolactone.</li></ul>
<h3>Kidney disease</h3>
<ul><li>Heart and kidney fail together (the cardiorenal syndrome). ACEi/ARNI may cause a small early creatinine rise — accept up to 30% and do not stop.</li><li>Use loop diuretics when CrCl is under 30; watch potassium with MRA; SGLT2 inhibitors are renally protective.</li></ul>
<h3>Atrial fibrillation and anaemia</h3>
<ul><li>Fast AF both causes and results from heart failure — control the rate (beta-blocker/digoxin) and anticoagulate by CHA₂DS₂-VASc.</li><li><b>Iron deficiency</b> is common and treatable; IV iron improves symptoms and exercise capacity.</li></ul>
` },

{ id: "scenarios", title: "Pulmonary oedema, shock and the hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Acute pulmonary oedema</b>", "Sit up, oxygen/CPAP/NIV, IV furosemide, GTN if SBP &gt;110, find the trigger"],
["<b>Cardiogenic shock</b>", "ICU; inotropes/vasopressors; urgent echo; treat the cause (revascularisation if ischaemia)"],
["<b>HFpEF with refractory congestion</b>", "Diuretics + SGLT2i, strict BP control, treat AF/obesity; avoid over-diuresis (small stiff ventricle needs filling pressure)"],
["<b>HFrEF not tolerating all four drugs</b>", "Add one at a time, in any order, at low dose; a low dose of all four beats a full dose of one"],
["<b>Recurrent admissions (\"warm and wet\")</b>", "Check adherence, salt/fluid intake, and up-titrate GDMT; consider an HF nurse and device therapy"],
["<b>ACEi/ARB contraindicated (hyperkalaemia, angioedema, renal failure)", "Hydralazine + isosorbide dinitrate"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "How to recognise it", "Management"], [
["<b>Acute pulmonary oedema</b>", "Acute", "Severe dyspnoea, frothy sputum, crackles, hypoxia", "Sit up, oxygen/CPAP, IV diuretic, GTN"],
["<b>Cardiogenic shock</b>", "Acute", "Cold peripheries, hypotension, oliguria, confusion", "ICU, inotropes, treat the cause"],
["<b>Arrhythmias (AF, ventricular)</b>", "Either", "Palpitations, syncope, ECG changes", "Rate/rhythm control, anticoagulation, device where indicated"],
["<b>Cardiorenal syndrome</b>", "Late", "Rising creatinine with treatment", "Accept small creatinine rise; balance diuretics and perfusion"],
["<b>Sudden cardiac death</b>", "Late", "Ventricular arrhythmia in severe HFrEF", "Beta-blockers, ARNI, and ICD where indicated"],
["<b>Cachexia and frailty</b>", "Late", "Weight loss, muscle wasting", "Nutrition, exercise, treat depression"]])}
<h3>Prognosis</h3>
<ul>
<li>Heart failure is a serious diagnosis — but modern treatment has halved or more the risk of death and hospitalisation in HFrEF.</li>
<li>Prognosis is worse with low LVEF, high NT-proBNP, kidney disease, anaemia, hyponatraemia and repeated admissions; each hospitalisation marks a step down.</li></ul>
` },

{ id: "followup", title: "Follow-up, self-care and prevention", html: `
<h3>After discharge and long term</h3>
${tbl(["When", "What"], [
["Within 1–2 weeks of discharge", "Review weight, symptoms, electrolytes, kidney function; up-titrate GDMT"],
["Every few weeks during titration", "Double doses as tolerated; check BP, K⁺, creatinine"],
["Every 3–6 months when stable", "Symptoms, weight, bloods, NT-proBNP; review the whole plan"],
["Iron, vaccination, dental care", "Replace iron; influenza and pneumococcal vaccination; avoid NSAIDs"]])}
<h3>Self-care — the daily weight</h3>
${box("green", "What to tell the patient", `<ul><li>"Weigh yourself every morning after passing urine, before breakfast. A gain of 2 kg in 3 days means fluid is building up — tell us early."</li><li>"Take your medicines at the same time every day, even when you feel well; they are what keep you well."</li><li>"Limit salt and excess fluid; weigh yourself to guide it."</li><li>"Avoid NSAIDs (ibuprofen, diclofenac) — they worsen heart failure."</li><li>"Keep active within your limits; do not smoke; limit alcohol."</li></ul>`)}
${box("red", "Come back or seek help immediately if", `<ul><li>Breathlessness at rest, or waking breathless at night.</li><li>Weight rising quickly, or legs and belly swelling more.</li><li>Dizziness, fainting, palpitations, or chest pain.</li><li>Little or no urine, or confusion.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>Congestion on the chest X-ray</h3>
<div class="pair">
${fig({ title: "Acute pulmonary oedema", src: "images/hf-pulmonary-oedema.jpg", mod: "Chest X-ray (AP portable)", ctx: "Acute heart failure", loc: "Both lungs, centrally", find: "Fluffy, bilateral central (\"bat-wing\") airspace shadowing spreading out from the hila", signs: "Pulmonary oedema", interp: "The bat-wing pattern is the hallmark of cardiogenic pulmonary oedema — alveolar fluid from a failing left ventricle", ddx: "ARDS (peripheral, no cardiomegaly), atypical pneumonia, haemorrhage", by: "Dr Jeremy Jones, Radiopaedia", page: "https://commons.wikimedia.org/wiki/File:AP_portable_CXR_of_a_patient_in_acute_pulmonary_oedema.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Cardiomegaly", src: "images/hf-cardiomegaly.jpg", mod: "Chest X-ray (PA)", ctx: "Chronic heart failure", loc: "Heart silhouette", find: "An enlarged cardiac silhouette with a cardiothoracic ratio clearly above 0.5", signs: "Cardiomegaly", interp: "A big heart on X-ray supports chronic heart failure — but always confirm structure and function with echocardiography", ddx: "Pericardial effusion, chamber enlargement, a rotated film", by: "SCiardullo", page: "https://commons.wikimedia.org/wiki/File:Cardiomegalia.JPG", lic: "CC BY-SA 3.0" })}
</div>
<h3>The clinical sign</h3>
${fig({ title: "Pitting oedema", src: "images/hf-pitting-oedema.jpg", mod: "Clinical photograph", ctx: "Right heart failure", loc: "Lower leg", find: "A persistent pit left in the skin after pressure — the hallmark of fluid in the tissues", signs: "Pitting oedema", interp: "Pitting oedema plus a raised JVP points to right-heart congestion. It is a sign to look for, weigh, and treat — not just a cosmetic problem", ddx: "Venous insufficiency, nephrotic syndrome, drug oedema, lymphoedema (non-pitting)", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Combinpedal.jpg", lic: "CC BY-SA 3.0" })}
<h3>Link-only images</h3>
<ul><li>Kerley B lines and upper-lobe diversion: <a href="https://radiopaedia.org/articles/pulmonary-oedema" target="_blank" rel="noopener">Radiopaedia</a></li><li>Echocardiographic assessment of HF: <a href="https://radiopaedia.org/articles/heart-failure" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Diagnose and classify", [
F.s("Breathlessness, fatigue, oedema, raised JVP, crackles"), F.a,
F.s("NT-proBNP / BNP + ECG + chest X-ray + echocardiography"), F.a,
F.d("LVEF?"), F.a,
F.b([["≤40%", F.ok("HFrEF: four pillars (ARNI/ACEi + beta-blocker + MRA + SGLT2i)")], ["41–49%", F.ok("HFmrEF: SGLT2i + diuretic, continue HFrEF drugs")], ["≥50%", F.ok("HFpEF: SGLT2i + diuretic, treat the cause")]])])}
${F.chart("2 · Acute pulmonary oedema", [
F.s("Severe dyspnoea, hypoxia, crackles"), F.a,
F.s("Sit upright; oxygen to SpO₂ ≥90% (88–92% COPD); CPAP/NIV if distressed"), F.a,
F.s("Furosemide 40 mg IV (or 1–2.5× oral dose)"), F.a,
F.d("SBP over 110 mmHg?"), F.a,
F.b([["Yes", F.s("GTN sublingual/IV, titrated")], ["No", F.e("Suspect shock: ICU, inotropes, echo")]]), F.a,
F.s("Find and treat the trigger (ACS, AF, infection, non-adherence)")])}
${F.chart("3 · Up-titrating the four pillars", [
F.s("Start all four at low dose, add diuretic for congestion"), F.a,
F.s("Double one drug every 2–4 weeks as tolerated"), F.a,
F.s("Check BP, potassium and creatinine at each step"), F.a,
F.d("At target on all four?"), F.a,
F.b([["Yes", F.ok("Continue; review 3–6-monthly; add digoxin/device if still symptomatic")], ["No", F.s("Continue slow titration; accept low doses of all four over full dose of one")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>The JVP is the best single sign of congestion</b> — learn to find it, and trust it over the ankles.</li>
<li><b>Measure the ejection fraction.</b> It is the single decision that chooses the life-saving drugs.</li>
<li><b>A normal NT-proBNP makes heart failure very unlikely</b> — a powerful rule-out in a breathless patient.</li>
<li><b>Start the four pillars in hospital, before discharge</b> — this is when the mortality benefit begins.</li>
<li><b>Accept the small creatinine rise</b> when starting an ARNI/ACEi; it is haemodynamic, not harm.</li>
<li><b>Every admission is a chance to up-titrate</b> — do not discharge on the same doses they came in on.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Starting a beta-blocker during acute decompensation", "Transient worsening", "Start once euvolaemic, low and slow"],
["Combining an ARNI with an ACE inhibitor", "Angioedema", "36-hour washout after the last ACEi dose"],
["Stopping GDMT for a small creatinine or potassium rise", "Lost mortality benefit", "Adjust, don't stop; recheck"],
["Using NSAIDs in heart failure", "Fluid retention and renal harm", "Avoid; use paracetamol for pain"],
["Treating oedema without checking the JVP", "Wrong diagnosis", "JVP first, then diuretics"],
["Giving GTN when the BP is low", "Dangerous hypotension", "Only if SBP &gt;110 mmHg"],
["Missing iron deficiency or anaemia", "Unnecessary symptoms", "Check iron studies and Hb; replace"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis and classification</h3>
${qa("Student", "How is heart failure classified by ejection fraction?", "HFrEF: LVEF 40% or less; HFmrEF: 41–49%; HFpEF: 50% or more. HFimpEF is HFrEF that has recovered to over 40%.")}
${qa("Intern/MO", "What is the role of NT-proBNP?", "A normal/low level makes heart failure unlikely (rule-out); a high level supports the diagnosis and tracks severity. It is raised by age, AF and kidney disease.")}
${qa("Intern/MO", "What is the single best bedside sign of congestion?", "A raised jugular venous pressure.")}
${qa("Intern/MO", "State the four NYHA classes.", "I no limitation; II symptoms on ordinary activity; III symptoms on less-than-ordinary activity; IV symptoms at rest.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "What are the four pillars of HFrEF treatment?", "ARNI (or ACEi/ARB) + beta-blocker + mineralocorticoid receptor antagonist + SGLT2 inhibitor.")}
${qa("Intern/MO", "How do you start sacubitril/valsartan in a patient on enalapril?", "Stop the enalapril and wait 36 hours, then start sacubitril/valsartan 24/26 mg twice daily and double every 2–4 weeks to 97/103 mg twice daily.")}
${qa("Intern/MO", "When do you start a beta-blocker in heart failure?", "Once the patient is euvolaemic and stable; start low (bisoprolol 1.25 mg) and double slowly to the target.")}
${qa("Specialist", "Which drug class is now recommended across HFrEF, HFmrEF and HFpEF?", "SGLT2 inhibitors (dapagliflozin or empagliflozin), after DELIVER and EMPEROR-Preserved.")}
</div>
<div class="qgroup"><h3>Acute heart failure</h3>
${qa("Intern/MO", "First steps in acute pulmonary oedema?", "Sit upright, oxygen (CPAP/NIV if distressed), furosemide 40 mg IV, and GTN if systolic BP is over 110 mmHg. Find the trigger.")}
${qa("Intern/MO", "Why is morphine no longer routine in acute pulmonary oedema?", "It does not improve outcomes and can cause respiratory depression and vomiting; non-invasive ventilation and nitrates are preferred.")}
${qa("Viva", "Why do the four pillars reduce mortality rather than just symptoms?", "They each block a step in the harmful neurohormonal compensation — RAAS, sympathetic drive, aldosterone and metabolic/renal stress — which is what drives remodelling and death.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §2.2 Congestive cardiac failure (adults) and §12.3.1 Congestive heart failure (children).</li>
<li id="ref-2">Ministry of Health, Bhutan. PEN Interventions for Hospitals. 2011, Ch.15 Chronic cardiac failure.</li>
<li id="ref-3">McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J 2021;42:3599–3726. <a href="https://doi.org/10.1093/eurheartj/ehab368" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehab368</a></li>
<li id="ref-4">McDonagh TA, Metra M, Adamo M, et al. 2023 Focused Update of the 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J 2023;44:3627–3639. <a href="https://doi.org/10.1093/eurheartj/ehad195" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehad195</a></li>
<li id="ref-5">Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 2022;145:e895–e1032. <a href="https://doi.org/10.1161/CIR.0000000000001063" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001063</a></li>
<li id="ref-6">National Institute for Health and Care Excellence. NG106: Chronic heart failure in adults: diagnosis and management. 2018. <a href="https://www.nice.org.uk/guidance/ng106" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-7">McMurray JJV, Packer M, Desai AS, et al. Angiotensin–neprilysin inhibition versus enalapril in heart failure (PARADIGM-HF). N Engl J Med 2014;371:993–1004. <a href="https://doi.org/10.1056/NEJMoa1409077" target="_blank" rel="noopener">doi:10.1056/NEJMoa1409077</a></li>
<li id="ref-8">McMurray JJV, Solomon SD, Inzucchi SE, et al. Dapagliflozin in patients with heart failure and reduced ejection fraction (DAPA-HF). N Engl J Med 2019;381:1995–2008. <a href="https://doi.org/10.1056/NEJMoa1911303" target="_blank" rel="noopener">doi:10.1056/NEJMoa1911303</a></li>
<li id="ref-9">Anker SD, Butler J, Filippatos G, et al. Empagliflozin in heart failure with a preserved ejection fraction (EMPEROR-Preserved). N Engl J Med 2021;385:1451–1461. <a href="https://doi.org/10.1056/NEJMoa2107038" target="_blank" rel="noopener">doi:10.1056/NEJMoa2107038</a></li>
<li id="ref-10">Solomon SD, McMurray JJV, Claggett B, et al. Dapagliflozin in heart failure with mildly reduced or preserved ejection fraction (DELIVER). N Engl J Med 2022;387:1089–1098. <a href="https://doi.org/10.1056/NEJMoa2206286" target="_blank" rel="noopener">doi:10.1056/NEJMoa2206286</a></li>
<li id="ref-11">Pitt B, Zannad F, Remme WJ, et al. The effect of spironolactone on morbidity and mortality in patients with severe heart failure (RALES). N Engl J Med 1999;341:709–717. <a href="https://doi.org/10.1056/NEJM199909023411001" target="_blank" rel="noopener">doi:10.1056/NEJM199909023411001</a></li>
<li id="ref-12">ICMR, Department of Health Research, India. Standard Treatment Workflows: Heart Failure. New Delhi, 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-13">Harrison's Principles of Internal Medicine, 21st ed.; Nelson Textbook of Pediatrics — foundational pathophysiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["EF classification (HFrEF/HFmrEF/HFpEF/HFimpEF)", "<span class='pass'>Verified</span>", "ESC 2021/2023 and ACC/AHA/HFSA 2022"],
["Four-pillar HFrEF therapy", "<span class='pass'>Verified</span>", "ARNI/ACEi/ARB + beta-blocker + MRA + SGLT2i"],
["SGLT2i across the EF spectrum", "<span class='pass'>Verified</span>", "ESC 2023 focused update (DELIVER, EMPEROR-Preserved)"],
["Acute HF management", "<span class='pass'>Verified</span>", "ESC 2021; Bhutan STG 2024 (sit up, O₂, furosemide 40 mg IV, refer)"],
["Bhutan STG and PEN content", "<span class='pass'>Verified</span>", "Read directly from STG 2024 §2.2/§12.3.1 and PEN 2011"],
["Drug doses", "<span class='pass'>Checked</span>", "ESC/ACC-AHA targets; BNF; see drug cards"],
["Paediatric HF", "<span class='pass'>Checked</span>", "Bhutan STG §12.3.1; specialist referral emphasised"],
["Images", "<span class='pass'>Done</span>", "Three Commons images; licences checked (CC BY-SA 3.0)"],
["References", "<span class='pass'>Done</span>", "All traceable; DOIs/links where available"]], "qc")}
` }
]
});
