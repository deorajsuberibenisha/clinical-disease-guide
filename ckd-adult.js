/* Chronic Kidney Disease — adults */
registerPage({
id: "ckd-adult",
title: "Chronic Kidney Disease — Adults",
subtitle: "Detection, staging, slowing progression, managing complications and planning for kidney failure",
age: "Adults", specs: ["neph", "medicine", "endo", "cardio", "ph"],
keywords: ["CKD", "chronic renal failure", "CRF", "ESRD", "ESKD", "kidney failure", "eGFR", "albuminuria", "ACR", "proteinuria", "diabetic kidney disease", "diabetic nephropathy", "hypertensive nephropathy", "dialysis", "haemodialysis", "transplant", "SGLT2", "dapagliflozin", "anaemia of CKD", "CKD-MBD", "renal osteodystrophy", "KFRE", "CKDu"],
related: ["ckd-child", "aki-adult", "aki-child"],
updated: "22 Nov 2026", review: "Nov 2027 (sooner if the KDIGO 2027 medicines update is published)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">CKD is common, usually silent until late, and far more likely to kill through heart disease than through kidney failure. The two tests that find it, eGFR and urine albumin, are cheap. The four drug classes that slow it are on the Bhutan NEML or close to it.</p>
<div class="glance">
<div><h4>What it is</h4><p>Abnormal kidney structure or function for <b>more than 3 months</b>, with health implications: eGFR under 60, or albuminuria (ACR ≥3 mg/mmol), or other damage markers.</p></div>
<div><h4>Who gets it</h4><p>Diabetes, hypertension, heart disease, obesity, family history, previous AKI, stones, long-term NSAIDs or herbal remedies, HIV, hepatitis B/C, older age.</p></div>
<div><h4>Stage it</h4><p><b>C</b>ause · <b>G</b>FR (G1–G5) · <b>A</b>lbuminuria (A1–A3). Risk rises with both.</p></div>
<div><h4>Key tests</h4><p>eGFR (CKD-EPI 2021) <b>and</b> urine albumin:creatinine ratio (first morning). Repeat to confirm. Ultrasound, urinalysis, Hb, K⁺, HCO₃⁻, Ca, PO₄.</p></div>
<div><h4>Four pillars that slow it</h4><ul><li>BP control (SBP under 120 if tolerated)</li><li>${dr("enalapril", "ACE inhibitor")} or ${dr("losartan", "ARB")} at max dose if albuminuric</li><li>${dr("dapagliflozin", "SGLT2 inhibitor")} if eGFR ≥20</li><li>${dr("atorvastatin", "Statin")} if aged 50 or over</li></ul></div>
<div><h4>Red flags</h4><ul><li>K⁺ ≥6.5</li><li>Pulmonary oedema</li><li>Uraemic pericarditis or encephalopathy</li><li>eGFR falling over 25% in a year</li><li>Sudden worsening (AKI on CKD)</li></ul></div>
<div><h4>Refer</h4><p>eGFR under 30, ACR ≥30 mg/mmol (≥300 mg/g), rapid decline, 5-year kidney failure risk ≥3–5%, haematuria with proteinuria, resistant hypertension, uncertain cause.</p></div>
</div>
<div class="calc" data-calc="ckdepi"></div>
` },

{ id: "overview", title: "Definition, classification, causes and risk", html: `
<h3>Definition (KDIGO 2024)</h3>
<p>Abnormalities of kidney structure or function, present for more than 3 months, with implications for health.${r(1)} Any one of the following is enough:</p>
<ul><li>GFR under 60 mL/min/1.73 m²</li><li>Albuminuria: ACR ≥30 mg/g (≥3 mg/mmol)</li><li>Urine sediment abnormalities (e.g. persistent haematuria of renal origin)</li><li>Electrolyte or other abnormalities due to tubular disorders</li><li>Abnormal histology or imaging (e.g. polycystic kidneys)</li><li>History of kidney transplantation</li></ul>
<p>Prove chronicity with old results, past urine tests, or imaging (small kidneys, thin cortex). <b>Do not label CKD from a single abnormal value</b>; it may be AKI or AKD (KDIGO 2024 PP 1.1.3.2).</p>
${box("bt", "Bhutan STG difference", `<p>The Bhutan STG (2024) defines CKD as eGFR under 60 for at least 3 months.${r(3)} This misses people with normal eGFR but significant albuminuria (G1–G2, A2–A3), who are exactly those in whom treatment works best. This guide uses the KDIGO definition. ${LB.loc()}</p>`)}

<h3>Classification: Cause, GFR, Albuminuria</h3>
${tbl(["GFR category", "eGFR (mL/min/1.73 m²)", "Term"], [["G1", "≥90", "Normal or high (CKD only if another damage marker)"], ["G2", "60–89", "Mildly decreased"], ["G3a", "45–59", "Mildly to moderately decreased"], ["G3b", "30–44", "Moderately to severely decreased"], ["G4", "15–29", "Severely decreased"], ["G5", "under 15", "Kidney failure"]])}
${tbl(["Albuminuria", "ACR mg/g", "ACR mg/mmol", "Approx. PCR mg/mmol", "Term"], [["A1", "under 30", "under 3", "under 15", "Normal to mildly increased"], ["A2", "30–300", "3–30", "15–50", "Moderately increased"], ["A3", "over 300", "over 30", "over 50", "Severely increased"]])}
<h3>Risk heat map (prognosis and how often to check)</h3>
${tbl(["", "A1", "A2", "A3"], [
["G1–G2", "<span style='color:var(--green)'>■ Low · 1/yr if CKD</span>", "<span style='color:var(--amber)'>■ Moderate · 1/yr</span>", "<span style='color:var(--orange)'>■ High · 2/yr</span>"],
["G3a", "<span style='color:var(--amber)'>■ Moderate · 1/yr</span>", "<span style='color:var(--orange)'>■ High · 2/yr</span>", "<span style='color:var(--red)'>■ Very high · 3/yr</span>"],
["G3b", "<span style='color:var(--orange)'>■ High · 2/yr</span>", "<span style='color:var(--red)'>■ Very high · 3/yr</span>", "<span style='color:var(--red)'>■ Very high · 3/yr</span>"],
["G4", "<span style='color:var(--red)'>■ Very high · 3/yr</span>", "<span style='color:var(--red)'>■ Very high · 3/yr</span>", "<span style='color:var(--red)'>■ Very high · 4+/yr</span>"],
["G5", "<span style='color:var(--red)'>■ Very high · 4+/yr</span>", "<span style='color:var(--red)'>■ Very high · 4+/yr</span>", "<span style='color:var(--red)'>■ Very high · 4+/yr</span>"]])}
<p class="foot" style="text-align:left">Colours show relative risk of kidney failure, cardiovascular events and death; numbers are suggested monitoring visits per year (KDIGO).</p>

<h3>How common is it?</h3>
<ul><li>About <b>697 million people worldwide (9.1%)</b> had CKD in 2017, and it caused about 1.2 million deaths.${r(5)}</li>
<li>In India, the SEEK study found CKD in about 17% of adults screened.${r(6)}</li>
<li>CKD is projected to become one of the five leading causes of years of life lost worldwide by 2040.</li>
<li><b>Bhutan:</b> no national CKD prevalence survey was found. Diabetes and hypertension, the main drivers, are common, and demand for dialysis has been growing. ${LB.bt("EVIDENCE GAP")}</li></ul>

<h3>Causes</h3>
${tbl(["Cause", "Clues"], [
["<b>Diabetic kidney disease</b>", "Long-standing diabetes, retinopathy, albuminuria rising before eGFR falls"],
["<b>Hypertensive nephrosclerosis</b>", "Long-standing hypertension, modest proteinuria, small symmetrical kidneys; a diagnosis of exclusion"],
["<b>Glomerulonephritis</b> (IgA nephropathy is common in Asia; membranous; FSGS; lupus)", "Haematuria, proteinuria, young age, systemic features"],
["Polycystic kidney disease (ADPKD)", "Family history, enlarged cystic kidneys, flank pain, haematuria"],
["Obstructive and reflux nephropathy, stones", "History of UTIs in childhood, stones, prostate disease; scarred kidneys"],
["Drugs and toxins", "Long-term NSAIDs, lithium, calcineurin inhibitors, herbal and traditional remedies (aristolochic acid), heavy metals"],
["<b>CKD of unknown cause (CKDu)</b>", "Young farm workers in hot climates, little proteinuria, tubulointerstitial disease; described in Sri Lanka, parts of India and Central America; not described in Bhutan"],
["Infection-related", "HIV, hepatitis B and C, previous post-infectious GN"],
["After AKI", "Incomplete recovery from AKI"]])}

<h3>Risk factors and why they matter</h3>
${tbl(["Risk factor", "Why"], [["Diabetes", "Hyperfiltration, glycation, glomerular basement membrane thickening"], ["Hypertension", "Transmits pressure into glomeruli; arteriolosclerosis"], ["Obesity", "Hyperfiltration, diabetes, hypertension"], ["Smoking", "Endothelial damage; faster progression"], ["Low birth weight / prematurity", "Fewer nephrons from birth"], ["Family history", "Genetic disease, shared risks"], ["Previous AKI", "Incomplete repair"], ["Older age", "Natural nephron loss; more comorbidity"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Why CKD progresses, and where treatment acts", [
F.s("<b>Injury</b>: diabetes, hypertension, glomerulonephritis, cysts, obstruction, AKI, toxins"), F.a,
F.s("Nephron loss"), F.a,
F.s("Surviving nephrons <b>hyperfilter</b>: afferent dilatation + efferent constriction (angiotensin II) → glomerular hypertension"), F.a,
F.s("Podocyte injury → <b>albuminuria</b> → filtered protein injures tubules"), F.a,
F.s("Tubulointerstitial inflammation and <b>fibrosis</b> → more nephrons lost (the cycle repeats)"), F.a,
F.b([
["Treatment", F.ok("RAS blockers dilate the efferent arteriole; SGLT2 inhibitors restore afferent tone; BP and glucose control slow the cycle")],
["Complications", F.e("Anaemia · CKD-MBD · acidosis · hyperkalaemia · fluid · cardiovascular disease · uraemia")]])])}
<ol class="chain">
<li><b>Nephron loss</b> from any cause (diabetes, hypertension, GN, scarring).</li>
<li><b>Surviving nephrons hyperfilter.</b> Angiotensin II and other signals dilate the afferent and constrict the efferent arteriole, raising pressure in each remaining glomerulus. Total GFR is held up at first, so creatinine stays normal.</li>
<li><b>Glomerular hypertension injures podocytes.</b> Protein leaks into the urine. Albuminuria is both a <i>marker</i> and a <i>cause</i> of further damage: filtered protein is toxic to tubular cells.</li>
<li><b>Tubulointerstitial inflammation and fibrosis.</b> The final common pathway. Nephrons are lost, so the remaining ones work even harder, and the cycle repeats.</li>
<li>This is why the treatments that <b>lower glomerular pressure</b> (RAS blockers dilate the efferent arteriole; SGLT2 inhibitors restore tubuloglomerular feedback and constrict the afferent) slow progression, even when BP is normal. Both cause a small, expected early dip in eGFR.</li></ol>
<h3>How the complications arise</h3>
${tbl(["Complication", "Mechanism"], [
["Anaemia", "Less erythropoietin; iron deficiency and blocked iron release (raised hepcidin); shortened red cell survival"],
["Mineral and bone disorder (CKD-MBD)", "Phosphate retention → FGF23 rises → calcitriol falls → calcium absorption falls → PTH rises (secondary hyperparathyroidism) → bone disease and vascular calcification"],
["Metabolic acidosis", "Fewer nephrons to make ammonia and excrete acid; causes muscle wasting, bone loss and faster CKD progression"],
["Hyperkalaemia", "Low GFR plus RAS blockers, acidosis, diet"],
["Fluid retention, hypertension", "Sodium retention; RAAS and sympathetic activation"],
["Cardiovascular disease", "Hypertension, vascular calcification, LV hypertrophy, inflammation, dyslipidaemia, anaemia"],
["Uraemia", "Retention of toxins: anorexia, nausea, itch, neuropathy, pericarditis, encephalopathy, platelet dysfunction"]])}
<h3>Natural history</h3>
<p>Progression varies enormously. Many people with G3a A1 never reach kidney failure and die of other causes. People with heavy albuminuria and diabetes can lose 5–10 mL/min per year without treatment. The <b>Kidney Failure Risk Equation</b> (age, sex, eGFR, ACR) turns this into a personal 2- and 5-year risk (KDIGO 2024 Rec 2.2.1, 1A). Use it for G3–G5: <a href="https://kidneyfailurerisk.com" target="_blank" rel="noopener">kidneyfailurerisk.com</a>.</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "KDIGO 2024", "NICE NG203 (2021)", "ICMR India 2026", "Bhutan STG 2024", "This guide"], [
["Definition", "Any damage marker or eGFR under 60 for over 3 months", "Same as KDIGO", "Same as KDIGO", "eGFR under 60 for 3 months", "KDIGO: albuminuria alone counts"],
["BP target", "<b>SBP under 120</b> if tolerated, standardised office BP (2B)", "Under 140/90; <b>under 130/80 if ACR ≥70 mg/mmol</b>", "<b>Under 120/80</b>", "\"Target BP\" (not specified)", "Aim for SBP 120–129, lower if tolerated and measured properly; relax in frailty and postural hypotension. SPRINT's benefit used unattended automated readings, which run about 5–10 mmHg lower than routine clinic BP."],
["SGLT2 inhibitor", "eGFR ≥20 with T2D, or ACR ≥200 mg/g, or heart failure (1A); eGFR 20–45 with lower ACR (2B)", "Offer with T2D and ACR over 30 mg/mmol; consider ACR 3–30. Dapagliflozin (TA775) and empagliflozin (TA942) for eGFR 25–75 on a RAS blocker, with T2D or uACR ≥22.6 mg/mmol", "eGFR over 20", "Not mentioned", "Follow KDIGO; dapagliflozin is on the Bhutan NEML at NRH/RRH"],
["Treat acidosis", "Consider when bicarbonate under 18 mmol/L", "Oral bicarbonate if eGFR under 30 and bicarbonate under 20", "Bicarbonate under 18", "—", "Start under 18; consider under 20 in G4–G5"],
["Calcium-based binders", "(KDIGO 2017 MBD) Restrict calcium-based binders", "Calcium acetate first-line for most", "Start calcium binders; switch if Ca over 9 mg/dL, calcification or low PTH", "\"Calcium and vitamin D\" for all", "Use calcium carbonate if that is what is available, but limit elemental calcium to ≤1,500 mg/day and avoid hypercalcaemia. Do not give calcium and vitamin D to everyone with CKD by default."],
["Medicines update", "A <b>KDIGO 2027 medications focused update</b> is being revised", "—", "—", "—", "Check kdigo.org for changes to SGLT2i, nsMRA and GLP-1 RA wording"]])}
<p>NICE NG203 could not be reopened online today; positions are from the 2021 published version. ${LB.exp("VERIFY")}</p>
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Most people with CKD G1–G3 have <b>no symptoms</b>. CKD is found by testing people at risk. Symptoms usually appear in G4–G5.</p>
${tbl(["Symptom or sign", "Mechanism", "Significance"], [
["Fatigue, breathlessness on exertion", "Anaemia; fluid", "Check Hb and volume"],
["Nocturia, polyuria", "Loss of concentrating ability", "Early sign of tubular disease"],
["Ankle and facial swelling", "Sodium retention; nephrotic proteinuria", "Check albumin and ACR"],
["Hypertension", "Volume, renin", "Both cause and consequence"],
["Anorexia, nausea, vomiting, metallic taste, weight loss", "Uraemic toxins", "Approaching kidney failure: discuss KRT"],
["Itch (pruritus)", "Uraemia, high phosphate and PTH, dry skin", "Common and distressing; often missed"],
["Restless legs, cramps, tingling feet", "Uraemic neuropathy, electrolytes", "—"],
["Bone pain, fractures", "CKD-MBD", "—"],
["Pallor, sallow or pigmented skin", "Anaemia, retained urochromes", "Bhutan STG lists skin hyperpigmentation as a late sign"],
["Pericardial rub, asterixis, confusion", "Uraemic pericarditis and encephalopathy", "<b>Urgent dialysis</b>"],
["Uraemic frost", "Urea crystals deposited from sweat", "Very late; rare where dialysis is available"]])}
${box("red", "Red flags", `<ul><li>K⁺ ≥6.5 mmol/L or ECG changes</li><li>Pulmonary oedema</li><li>Pericardial rub, encephalopathy, uraemic bleeding</li><li>eGFR drop over 25% with a change of category, or over 15 mL/min in a year</li><li>Sudden worsening: look for AKI on CKD (dehydration, NSAIDs, obstruction, infection)</li><li>Nephrotic syndrome, or haematuria with proteinuria and rising creatinine (possible active GN)</li></ul>`)}
<h3>Who should be tested (KDIGO 2024; ICMR 2026)</h3>
<p>Test eGFR <b>and</b> urine ACR in people with diabetes, hypertension, cardiovascular disease, obesity, family history of kidney disease, previous AKI, long-term NSAID or herbal remedy use, HIV, hepatitis B/C, recurrent UTI or stones, childhood kidney disease, gout, and unexplained anaemia. Repeat yearly if at risk.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Question", "Favours CKD", "Favours AKI/AKD", "Best test"], [
["Is it chronic?", "Old results abnormal; small kidneys (under about 9 cm) with thin, bright cortex; anaemia, high PO₄, high PTH; long history", "Normal old results; normal-sized kidneys; recent illness or drug", "Old results; ultrasound; repeat at 3 months"],
["Exceptions to \"small kidneys = CKD\"", "CKD with <b>normal or large</b> kidneys: diabetes, ADPKD, amyloidosis, HIV nephropathy, myeloma, infiltrative disease", "—", "Ultrasound and clinical context"]])}
${tbl(["Cause", "Supports", "Against", "Key test"], [
["Diabetic kidney disease", "Diabetes over 10 years, retinopathy, gradual albuminuria", "Haematuria with red cell casts, rapid decline, no retinopathy in type 1 diabetes, heavy proteinuria early", "Fundoscopy; biopsy if atypical"],
["Hypertensive nephrosclerosis", "Long hypertension, mild proteinuria, LVH", "Heavy proteinuria, haematuria", "Diagnosis of exclusion"],
["IgA nephropathy", "Visible haematuria with throat infection, young adult", "Normal urine", "Biopsy"],
["Membranous nephropathy", "Nephrotic syndrome in an adult", "—", "Anti-PLA2R antibody, biopsy"],
["Lupus nephritis", "Young woman, rash, arthritis, cytopenias", "Negative ANA", "ANA, dsDNA, C3/C4, biopsy"],
["ADPKD", "Family history, large cystic kidneys", "Few simple cysts in an older person (normal)", "Ultrasound by age-specific criteria"],
["Myeloma", "Age over 50, anaemia, bone pain, high calcium", "—", "Electrophoresis, free light chains"],
["Renovascular disease", "Flash pulmonary oedema, asymmetric kidneys, creatinine jump on RAS blocker", "—", "Doppler, CT/MR angiography"],
["Obstruction", "Prostate symptoms, hydronephrosis", "—", "Ultrasound"],
["Chronic interstitial nephritis / CKDu", "Little proteinuria, tubular dysfunction, toxin exposure", "—", "Biopsy (specialist)"]])}
<h3>The typical patient</h3>
<p>A 58-year-old with type 2 diabetes for 12 years, hypertension and retinopathy has eGFR 48, and ACR 45 mg/mmol on two occasions three months apart. Urine shows no blood. The most likely diagnosis is <b>diabetic kidney disease, G3a A3</b>. The reasoning: long diabetes, retinopathy (shared microvascular disease), albuminuria-dominant disease, no haematuria. If haematuria, a rapid fall, or nephrotic-range protein without retinopathy were present, another cause would need to be sought.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Expected finding", "Value and limits", "Priority"], [
["<b>eGFR (CKD-EPI 2021 creatinine)</b>", "Stage G", "Low", "Race-free; inaccurate at extremes of muscle mass, in amputees, malnutrition, high meat intake. Report in whole numbers", "Essential"],
["<b>eGFR creatinine + cystatin C</b>", "When accuracy matters", "—", "Recommended when eGFRcr is less accurate and the decision depends on GFR (KDIGO 1C). Cystatin C is rarely available in Bhutan", "Optional"],
["<b>Urine ACR</b> (first morning sample preferred)", "Stage A, prognosis, treatment decisions", "≥3 mg/mmol", "Confirm a raised random ACR with a first-morning sample; repeat 2 of 3 over 3–6 months. Falsely high after exercise, infection, menstruation, fever", "Essential"],
["Urine dipstick and microscopy", "Haematuria, casts", "Blood and protein in GN", "—", "Essential"],
["Kidney ultrasound", "Size, symmetry, cysts, obstruction, scarring", "Small bright kidneys in advanced CKD", "Size alone cannot date CKD", "Essential at diagnosis"],
["Electrolytes, bicarbonate", "Complications", "High K⁺, low HCO₃⁻", "—", "Essential"],
["FBC, ferritin, TSAT", "Anaemia", "Normocytic anaemia; iron deficiency", "Ferritin rises in inflammation", "Essential from G3"],
["Calcium, phosphate, ALP, PTH, 25-OH vitamin D", "CKD-MBD", "High PO₄, high PTH", "From G3a; PTH assays vary", "Recommended from G3"],
["HbA1c, lipids", "Cardiovascular risk", "—", "HbA1c can be misleading with anaemia and ESA use", "Essential"],
["HBsAg, anti-HCV, HIV", "Before dialysis; vaccination", "—", "Bhutan STG lists these", "Essential before dialysis"],
["Cause tests: ANA, C3/C4, ANCA, anti-PLA2R, electrophoresis/free light chains, hepatitis serology", "Find a treatable cause", "—", "Choose by clinical clues", "Selected"],
["Kidney biopsy", "Cause and treatment", "—", "Safe and useful when it would change management (KDIGO 2D); referral in Bhutan", "Selected"],
["Genetic testing", "Familial disease, young onset", "—", "Specialist; referral abroad", "Selected"],
["ECG, echo", "LVH, heart failure", "—", "—", "Recommended"]])}
<p><b>Reference standard:</b> measured GFR (clearance of an exogenous marker such as iohexol) is the reference for GFR, but it is used only when accuracy will change treatment (KDIGO PP 1.2.2.2). Kidney biopsy is the reference standard for the cause of glomerular and interstitial disease.</p>
<p><b>Is the change real?</b> An eGFR change over 20% between tests, or over 30% after starting a RAS blocker or SGLT2 inhibitor, exceeds normal variability and needs evaluation. So does a doubling of ACR (KDIGO PP 2.1.3–2.1.5).</p>
` },

{ id: "staging", title: "Risk, referral and admission", html: `
<h3>Predict kidney failure</h3>
<p>Use the <b>4-variable Kidney Failure Risk Equation</b> in G3–G5 (KDIGO Rec 2.2.1, 1A):</p>
<ul><li><b>5-year risk 3–5% or more:</b> refer to nephrology (PP 2.2.1)</li><li><b>2-year risk over 10%:</b> multidisciplinary care (PP 2.2.2)</li><li><b>2-year risk over 40%:</b> prepare for kidney replacement therapy: education, fistula or PD access, transplant referral (PP 2.2.3)</li></ul>
<p>The KFRE was not developed in South Asian populations; it has been validated in several Asian cohorts but not in Bhutan. ${LB.exp("LIMITATION")}</p>
<h3>Refer to nephrology when (KDIGO 2024 Fig 48, summarised)</h3>
<ul><li>eGFR under 30 (G4–G5)</li><li>ACR ≥300 mg/g (≥30 mg/mmol), or PCR ≥500 mg/g (≥50 mg/mmol)</li><li>KFRE 5-year risk ≥3–5%</li><li>Sustained fall in eGFR (over 25% with a category change, or rapid progression)</li><li>Haematuria with red cell casts or with albuminuria; unexplained haematuria</li><li>Hypertension uncontrolled on 4 or more drugs</li><li>Persistent abnormal K⁺; recurrent or extensive stones; hereditary kidney disease</li><li>Uncertain cause</li></ul>
<p>ICMR also advises specialist review at <b>first diagnosis</b> of all new CKD cases where feasible.${r(4)}</p>
<h3>Admit when</h3>
<ul><li>AKI on CKD, or rapid unexplained decline</li><li>Hyperkalaemia ≥6.5, pulmonary oedema, uraemic complications</li><li>For starting dialysis, access creation, PD catheter insertion</li></ul>
` },

{ id: "manage", title: "Management", html: `
<p>KDIGO frames treatment as a <b>comprehensive strategy</b> (PP 3.1.1): lifestyle for all, first-line drugs for most, and targeted drugs for specific risks.</p>
<h3>1. Lifestyle (everyone)</h3>
<ul><li><b>Stop tobacco</b> in all forms, including doma with tobacco.</li><li>Physical activity: at least <b>150 minutes a week</b> of moderate activity, or as tolerated (Rec 3.2.2.1, 1D).</li><li>Healthy weight.</li><li>Avoid NSAIDs, unproven supplements and untested herbal or traditional remedies (ICMR 2026; KDIGO PP 4.1.3).</li><li>Limit alcohol.</li></ul>
<h3>2. Diet</h3>
${tbl(["Nutrient", "Advice", "Source"], [
["Sodium", "<b>Under 2 g sodium/day (under 5 g salt)</b>. Ezay, suja and processed foods are major salt sources", "KDIGO Rec 3.3.2.1 (2C); ICMR"],
["Protein", "<b>0.8 g/kg/day</b> in G3–G5; avoid over 1.3 g/kg/day if at risk of progression. Do not restrict in malnutrition or frailty. Very low-protein diets with ketoanalogues only under close supervision", "KDIGO Rec 3.3.1.1 (2C)"],
["Potassium", "Restrict only if hyperkalaemic; target bioavailable potassium from processed foods first. ICMR lists lower-potassium fruits and vegetables (apple, pear, papaya, cabbage, cauliflower, cucumber) and advises avoiding fruit juice, coconut water and salt substitutes (KCl)", "KDIGO PP 3.11.5.2; ICMR"],
["Phosphate", "Limit processed foods with phosphate additives and cola drinks when phosphate is high", "KDIGO-MBD"],
["Overall pattern", "More plant-based foods, fewer ultra-processed foods", "KDIGO PP 3.3.1"]])}
<h3>3. Blood pressure</h3>
<ul><li>Target <b>SBP under 120 mmHg</b> when tolerated, using standardised office BP (Rec 3.4.1, 2B). Be less intensive in frailty, falls, limited life expectancy or postural hypotension (PP 3.4.1).</li>
<li>First choice: ${dr("enalapril", "ACE inhibitor")} or ${dr("losartan", "ARB")}, especially with albuminuria. Then ${dr("amlodipine")}, then a diuretic (${dr("furosemide", "loop diuretic")} when eGFR is under 30).</li></ul>
<h3>4. RAS blockade (ACE inhibitor or ARB — never both)</h3>
<ul><li><b>Recommended</b>: G1–G4 with A3 without diabetes (1B); A2–A3 with diabetes (1B). <b>Suggested</b>: A2 without diabetes (2C).</li>
<li>Use the <b>highest tolerated dose</b> (PP 3.6.1). Check creatinine and K⁺ at 2–4 weeks (PP 3.6.2).</li>
<li><b>Continue unless creatinine rises by more than 30% within 4 weeks</b> (PP 3.6.4). Continue even when eGFR falls below 30 (PP 3.6.7).</li>
<li>Manage hyperkalaemia with diet, diuretics, bicarbonate or binders before stopping the RAS blocker (PP 3.6.3).</li></ul>
<h3>5. SGLT2 inhibitor</h3>
<p>${dr("dapagliflozin")} 10 mg once daily (or empagliflozin 10 mg) for: T2D with eGFR ≥20 (1A); any adult CKD with eGFR ≥20 and ACR ≥200 mg/g (≥20 mg/mmol) (1A); heart failure (1A); eGFR 20–45 with lower ACR (2B). Continue below 20 until dialysis (PP 3.7.1). Withhold on sick days (PP 3.7.2).${r(7)}</p>
<h3>6. Additional targeted therapy</h3>
<ul><li>${dr("finerenone")} for T2D with persistent albuminuria despite maximum RAS blockade, eGFR over 25 and normal K⁺ (Rec 3.8.1, 2A). Not on the Bhutan NEML.</li>
<li>GLP-1 receptor agonist (e.g. semaglutide) for T2D not at glycaemic target despite metformin and an SGLT2 inhibitor (Rec 3.9.1, 1B). Semaglutide also slowed kidney outcomes in the FLOW trial (2024). Not on the Bhutan NEML.</li>
<li>${dr("metformin")}: full dose at eGFR ≥45; max 1 g/day at 30–44; stop under 30.</li>
<li>Glycaemic target: HbA1c individualised, generally 6.5–8.0%.</li></ul>
<h3>7. Cardiovascular protection</h3>
<ul><li>${dr("atorvastatin")} for all adults aged 50 or over with eGFR under 60 not on dialysis (1A), and aged 50 or over with G1–G2 (1B); aged 18–49 if diabetic, with coronary disease, prior stroke or high risk (2A). Atorvastatin needs no kidney dose adjustment.</li>
<li>Low-dose aspirin for <b>secondary</b> prevention only (Rec 3.15.2.1, 1C).</li>
<li>Atrial fibrillation: NOACs preferred over warfarin in G1–G4, with GFR-based dosing (Rec 3.16.1, 1C).</li></ul>
<h3>8. Complications</h3>
${tbl(["Complication", "Target / threshold", "Treatment"], [
["<b>Metabolic acidosis</b>", "Treat when bicarbonate is under 18 mmol/L (KDIGO PP 3.10.1); NICE under 20 with eGFR under 30", dr("sodium_bicarbonate", "Oral sodium bicarbonate") + " 500 mg 2–3 times daily, titrated; do not exceed the upper normal limit"],
["<b>Hyperkalaemia</b>", "K⁺ over 5.5 persistently", "Diet review, loop diuretic, correct acidosis, " + dr("polystyrene") + " (Bhutan) or " + dr("szc") + "; keep the RAS blocker if possible"],
["<b>Anaemia</b>", "Investigate when Hb is under 13 (men) or 12 (women)", "Correct iron first (" + dr("ferrous", "oral iron") + ", or " + dr("iron_sucrose", "IV iron") + " when KDIGO 2026 thresholds are met: not on dialysis, ferritin under 100 with TSAT under 40%, or ferritin 100–300 with TSAT under 25%); then " + dr("epoetin", "ESA") + " for symptomatic anaemia, generally at Hb 8.5–10, keeping Hb at or below 11.5 g/dL"],
["<b>CKD-MBD</b>", "Phosphate toward normal; avoid hypercalcaemia; PTH trend", "Diet, then binder (" + dr("calcium_carbonate") + " with meals, max 1,500 mg elemental Ca/day, or " + dr("sevelamer") + "); correct vitamin D deficiency; " + dr("calcitriol") + " only for severe, progressive hyperparathyroidism in G4–G5"],
["Hyperuricaemia", "Symptomatic gout only", "Xanthine oxidase inhibitor (allopurinol, dose-adjusted) after first gout attack; do not treat asymptomatic urate to slow CKD (2D)"],
["Fluid overload", "—", "Salt restriction; loop diuretic"]])}
<h3>9. Vaccination</h3>
<p>${dr("hepb_vaccine", "Hepatitis B")} (double dose) before dialysis; pneumococcal; yearly influenza; shingles where available (ICMR 2026).</p>
<h3>10. Medicines safety</h3>
<ul><li>Dose renally cleared drugs by eGFR (KDIGO PP 4.2.1). For narrow-therapeutic-range drugs, consider eGFR not indexed to body surface area in very large or small people.</li><li>Sick-day guidance for SADMANS drugs, with a written restart plan.</li><li>Review all medicines at each visit (PP 4.3.1).</li><li>Iodinated contrast: follow radiology consensus; gadolinium group II agents if GFR is under 30.</li><li>Counsel women of child-bearing age about teratogenic drugs (ACE inhibitors, ARBs, statins, SGLT2 inhibitors) and contraception (PP 4.1.4).</li></ul>

<h3>11. Planning for kidney failure (G4–G5)</h3>
<ul><li>Begin discussions when eGFR is under 30 or the 2-year KFRE is over 40%.</li><li><b>Preserve arm veins</b> in the non-dominant arm for a future fistula: no cannulas or blood draws there (ICMR 2026).</li><li>Options: <b>kidney transplant</b> (best survival and quality of life; living donor where possible), <b>haemodialysis</b>, <b>peritoneal dialysis</b>, or <b>conservative kidney management</b>.</li><li>Start dialysis for symptoms and complications, not a number. Most people start at eGFR 5–10. Early planned starts at eGFR 10–14 gave no survival benefit in the IDEAL trial.</li><li>Conservative care is a legitimate choice for older people with major comorbidity or limited life expectancy, made together with patient and family (ICMR 2026).</li></ul>
${box("bt", "Bhutan reality", `<ul><li><b>Available on the NEML:</b> enalapril, losartan, amlodipine, furosemide, atorvastatin (to DH); dapagliflozin, erythropoietin, calcitriol, sevelamer (NRH/RRH); calcium carbonate, iron sucrose, oral iron, sodium bicarbonate tablets.</li><li><b>Not on the NEML:</b> finerenone, GLP-1 receptor agonists, SZC/patiromer, cinacalcet, ketoanalogues.</li><li>Haemodialysis is provided at the national and regional referral hospitals and some district hospitals. Peritoneal dialysis fluid is not on the 2025 NEML. Transplantation may need referral abroad: discuss early.</li><li>Salt: traditional diets with salted butter tea, preserved meats and processed snacks are high in sodium. Give food-specific advice.</li></ul>`)}
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any drug for the full card.</p>
${tbl(["Drug", "Adult dose", "Kidney-specific notes"], [
[dr("enalapril"), "2.5–5 mg daily → max 40 mg/day", "Check creatinine and K⁺ at 2–4 weeks; accept up to 30% rise"],
[dr("losartan"), "25–50 mg → 100 mg daily", "Same rules"],
[dr("dapagliflozin"), "10 mg once daily", "Start eGFR ≥20; continue to dialysis; sick-day hold"],
[dr("finerenone"), "10 mg (eGFR 25–59) or 20 mg (≥60)", "K⁺ must be ≤4.8 to start"],
[dr("amlodipine"), "5–10 mg daily", "No adjustment"],
[dr("furosemide"), "40–250 mg/day", "Higher doses as GFR falls"],
[dr("atorvastatin"), "10–20 mg daily (up to 80 mg)", "No adjustment"],
[dr("metformin"), "Up to 2 g/day (eGFR ≥45)", "Max 1 g at 30–44; stop under 30"],
[dr("sodium_bicarbonate"), "500 mg 2–3 times daily, titrated", "Sodium load"],
[dr("ferrous"), "200 mg daily or alternate days", "Separate from binders"],
[dr("iron_sucrose"), "200 mg IV × 5 over 14 days", "Observe 30 min"],
[dr("epoetin"), "20–50 IU/kg three times weekly", "Keep Hb at or below 11.5 g/dL (KDIGO 2026)"],
[dr("calcium_carbonate"), "1–2 tablets with each meal", "≤1,500 mg elemental Ca/day"],
[dr("sevelamer"), "800–1,600 mg three times daily with meals", "Non-calcium"],
[dr("calcitriol"), "0.25 microgram daily or alternate days", "Not routine before dialysis"],
[dr("polystyrene"), "15 g 1–3 times daily", "With lactulose"]])}
<h3>Drugs to avoid or adjust in CKD</h3>
${tbl(["Drug", "Problem", "Do this"], [
["NSAIDs (including diclofenac, aceclofenac, ibuprofen)", "AKI, hyperkalaemia, sodium retention", "Avoid; paracetamol for pain"],
["Morphine, codeine, tramadol, pethidine", "Metabolite accumulation", "Low-dose oxycodone, fentanyl, or buprenorphine"],
["Gabapentin, pregabalin", "Accumulation: sedation, falls", "Reduce dose by eGFR"],
["Nitrofurantoin", "Ineffective and toxic at low GFR", "Avoid if eGFR under 45 (use with caution 30–44 for short courses)"],
["Digoxin, lithium", "Toxicity", "Levels; lower doses"],
["Enoxaparin", "Accumulation", "Dose-adjust below 30, or use unfractionated heparin"],
["Magnesium- and aluminium-containing antacids, phosphate enemas", "Accumulation", "Avoid"],
["Spironolactone", "Hyperkalaemia", "Use with K⁺ monitoring"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and the immunocompromised", html: `
<h3>Pregnancy</h3>
<ul><li>CKD raises the risk of pre-eclampsia, preterm birth, growth restriction and permanent loss of kidney function, rising with stage and proteinuria. Counsel before conception.</li>
<li><b>Stop before conception or as soon as pregnancy is confirmed:</b> ACE inhibitors, ARBs, SGLT2 inhibitors, finerenone, statins.</li>
<li>BP control with ${dr("labetalol")}, ${dr("nifedipine")} or methyldopa.</li>
<li><b>Low-dose aspirin</b> (75–150 mg) from 12 weeks to reduce pre-eclampsia risk.</li>
<li>Joint obstetric–nephrology care; thromboprophylaxis if nephrotic.</li></ul>
<h3>Breastfeeding</h3><p>Enalapril and captopril are compatible; avoid SGLT2 inhibitors and finerenone.</p>
<h3>Older adults</h3>
<ul><li>eGFR naturally falls with age, but KDIGO does not use age-adjusted thresholds. G3a A1 in an 85-year-old is low-risk, so avoid over-treatment.</li><li>Less intensive BP targets in frailty or falls.</li><li>Deprescribe; watch hypoglycaemia.</li><li>Higher protein and calorie targets in frailty and sarcopenia (PP 3.3.1.5).</li><li>Shared decisions on conservative care versus dialysis.</li></ul>
<h3>Immunocompromised patients</h3>
<ul><li><b>HIV:</b> screen for kidney disease; avoid tenofovir disoproxil if eGFR is falling; dose-adjust antiretrovirals.</li><li><b>Kidney transplant recipients:</b> CKD by definition; drug interactions with calcineurin inhibitors (diltiazem, clarithromycin, azoles, rifampicin); SGLT2 inhibitor use is specialist-only.</li><li><b>Vaccination</b> response is poorer: use double-dose hepatitis B and check antibody levels.</li></ul>
` },

{ id: "scenarios", title: "CKD with other conditions", html: `
${tbl(["Condition", "What changes", "Why"], [
["<b>Diabetes</b>", "RAS blocker + SGLT2 inhibitor + statin; consider nsMRA and GLP-1 RA; metformin adjusted by eGFR; less insulin as GFR falls; HbA1c less reliable", "Insulin is renally cleared; anaemia and ESA affect HbA1c"],
["<b>Heart failure</b>", "SGLT2 inhibitor regardless of albuminuria (1A); RAS blocker or ARNI; loop diuretics; MRAs with K⁺ monitoring", "Shared mechanisms; strongest outcome evidence"],
["<b>Liver disease / cirrhosis</b>", "Creatinine overestimates GFR (low muscle mass); avoid NSAIDs; careful with diuretics", "Risk of hepatorenal syndrome"],
["<b>COPD</b>", "Bicarbonate may raise CO₂ slightly; steroids worsen glucose and BP", "—"],
["<b>Asthma</b>", "Avoid non-selective β-blockers; NSAID-sensitive asthma also argues against NSAIDs", "—"],
["<b>Drug allergy</b>", "ACE inhibitor angioedema: avoid all ACE inhibitors; ARBs with caution", "Bradykinin-mediated"],
["<b>Gout</b>", "Colchicine at low dose or steroids for flares rather than NSAIDs; allopurinol dose by eGFR", "KDIGO PP 3.14.3"],
["<b>Hepatitis B or C</b>", "Treat the virus (specialist); dose-adjust antivirals", "Virus-associated GN"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "Recognition", "Management"], [
["Cardiovascular disease (MI, stroke, heart failure, sudden death)", "Throughout", "Most people with CKD die of CVD before reaching kidney failure", "Statin, BP, RAS blocker, SGLT2 inhibitor, smoking cessation"],
["Anaemia", "G3 onward", "Fatigue, pallor, Hb", "Iron, ESA"],
["CKD-MBD", "G3 onward", "High PO₄, high PTH, bone pain, fractures, calcification", "Diet, binders, vitamin D"],
["Metabolic acidosis", "G3b onward", "Low bicarbonate", "Oral bicarbonate"],
["Hyperkalaemia", "G3b onward or with RAS blockers", "K⁺", "Diet, binders, diuretics"],
["Fluid overload and hypertension", "Any", "Oedema, breathlessness", "Salt restriction, diuretics"],
["Malnutrition and muscle wasting", "Late", "Weight loss, low albumin", "Dietitian; correct acidosis"],
["Infection", "Any", "—", "Vaccination"],
["Uraemic pericarditis, encephalopathy, neuropathy, bleeding", "G5", "Clinical", "Dialysis"],
["Depression, cognitive impairment", "Any", "Screen", "Support, treatment"],
["AKI on CKD", "Any", "Sudden worsening", "As in the AKI chapter"]])}
<h3>Prognosis</h3>
<ul><li>Risk of death, cardiovascular events and kidney failure rises with lower eGFR <b>and</b> higher albuminuria, independently. The heat map shows this.</li>
<li>Modern combination therapy (RAS blocker + SGLT2 inhibitor ± nsMRA ± GLP-1 RA) can delay kidney failure by many years in albuminuric CKD.</li>
<li>Kidney transplant offers better survival than dialysis for suitable patients.</li></ul>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<h3>Monitoring</h3>
<ul><li>eGFR and ACR at least yearly, more often by the heat map (PP 2.1.1–2.1.2).</li><li>BP every visit.</li><li>Hb, K⁺, HCO₃⁻, Ca, PO₄ from G3; PTH from G3a with frequency by stage.</li><li>Ask about uraemic symptoms at each visit in progressive CKD (PP 5.2.2.1).</li><li>Screen for malnutrition twice yearly in G4–G5 or age over 65 (PP 5.2.3.2).</li></ul>
<h3>Prevention</h3>
<ul><li>Find diabetes and hypertension early and treat them well.</li><li>Screen at-risk groups with eGFR and ACR.</li><li>Avoid NSAIDs and untested remedies.</li><li>Follow up every AKI survivor at 3 months.</li></ul>
${box("green", "Counselling points", `<ul><li>\"Your kidneys are working at about ___% and leaking some protein. With these medicines and steps we can slow this down a lot.\"</li><li>Take the kidney-protecting tablets every day, even when you feel well.</li><li>Cut salt: less salt in tea, curries and pickles; avoid instant noodles and packaged snacks.</li><li>No painkillers like ibuprofen, diclofenac or aceclofenac. Paracetamol is safe.</li><li>Do not take herbal or traditional medicines without asking us.</li><li>If you are sick with vomiting or diarrhoea, stop ___ until you are eating and drinking again.</li><li>Keep your non-dominant arm free of drips and blood tests (if eGFR is under 30).</li><li>Plan pregnancy with your doctor.</li></ul>`)}
${box("red", "Come back urgently if", `<ul><li>Breathlessness, or swelling getting worse</li><li>Passing much less urine</li><li>Persistent vomiting, confusion or drowsiness</li><li>Chest pain, palpitations or severe weakness</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>Ultrasound: normal versus chronic kidney disease</h3>
<div class="pair">
${fig({ title: "Normal adult kidney", src: "images/normal-adult-kidney.jpg", mod: "Ultrasound, longitudinal", ctx: "Comparison", loc: "Kidney", find: "Normal length (callipers), cortex less bright than liver, dark pyramids (**), bright sinus (****)", interp: "Normal", by: "Hansen et al., Diagnostics 2016", page: "https://commons.wikimedia.org/wiki/File:Normal_adult_kidney.jpg", lic: "CC BY 4.0" })}
${fig({ title: "End-stage chronic kidney disease", src: "images/eskd-ultrasound.jpg", mod: "Ultrasound, longitudinal", ctx: "Kidney failure (G5)", loc: "Kidney", find: "Small kidney (length marked by callipers); diffusely <b>bright (echogenic)</b>; no visible difference between cortex and sinus", signs: "Loss of corticomedullary differentiation; increased echogenicity; reduced size", interp: "Long-standing, irreversible disease; biopsy rarely useful at this stage", ddx: "Bilateral renal artery stenosis (asymmetric), chronic reflux (scarred, irregular)", by: "Hansen et al., Diagnostics 2016", page: "https://commons.wikimedia.org/wiki/File:Ultrasonography_of_end-stage_chronic_kidney_disease.jpg", lic: "CC BY 4.0" })}
</div>
<div class="pair">
${fig({ title: "CKD from glomerulonephritis", src: "images/ckd-glomerulonephritis-us.jpg", mod: "Ultrasound", ctx: "Chronic GN", loc: "Kidney cortex", find: "Increased cortical echogenicity and <b>thin cortex</b>", interp: "Established parenchymal disease", by: "Hansen et al., Diagnostics 2016", page: "https://commons.wikimedia.org/wiki/File:Ultrasonography_of_chronic_renal_disease_caused_by_glomerulonephritis.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Renal parenchymal disease (9.9 cm kidney)", src: "images/renal-parenchymal-disease-us.jpg", mod: "Ultrasound", ctx: "Medical kidney disease", loc: "Left kidney", find: "Cortex brighter than normal; parenchymal thickness 1.5 cm; length 9.9 cm", interp: "Parenchymal disease with near-normal size; size alone does not stage CKD", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Ultrasound_of_left_kidney_renal_parenchymal_disease.jpg", lic: "CC BY-SA 4.0" })}
</div>
<h3>Mineral and bone disorder</h3>
<div class="pair">
${fig({ title: "Rugger-jersey spine", src: "images/rugger-jersey-spine.jpg", mod: "Lateral spine X-ray", ctx: "32-year-old man with kidney failure", loc: "Lumbar vertebrae", find: "Dense (sclerotic) bands along the upper and lower endplates of each vertebra with a lucent middle, giving a striped look; coarse trabeculae", signs: "\"Rugger-jersey\" spine", interp: "Renal osteodystrophy from secondary hyperparathyroidism", ddx: "Osteopetrosis (sandwich vertebra: sharper bands), Paget's disease (picture-frame)", by: "Patel AA et al. Adv Radiol 2015;812794", page: "https://commons.wikimedia.org/wiki/File:X-ray_of_rugger-jersey_spine_of_renal_osteodystrophy.jpg", lic: "CC BY 3.0" })}
${fig({ title: "Brown tumours with hip fracture", src: "images/brown-tumours-pelvis.jpg", mod: "Pelvic X-ray (AP)", ctx: "26-year-old woman with secondary hyperparathyroidism", loc: "Pelvis and right femoral head", find: "Multiple well-defined, expanded lucent lesions; fracture deformity of the right femoral head; generalised demineralisation", signs: "Brown tumours (osteitis fibrosa cystica)", interp: "Severe, long-standing hyperparathyroidism of CKD", ddx: "Metastases, myeloma, giant cell tumour", by: "Patel AA et al. Adv Radiol 2015", page: "https://commons.wikimedia.org/wiki/File:X-ray_of_brown_tumors_in_the_pelvis_and_a_hip_fracture_in_renal_osteodystrophy.jpg", lic: "CC BY 3.0" })}
</div>
<h3>Clinical photograph</h3>
${fig({ title: "Uraemic frost", src: "images/uraemic-frost.jpg", mod: "Clinical photograph", ctx: "Young man with hypertension, anorexia and fatigue; urea and creatinine about 100 and 50 mg/dL", loc: "Forehead and scalp", find: "Fine white crystalline powder on the skin", signs: "Uraemic frost: urea crystallising from evaporated sweat", interp: "Extreme, untreated uraemia: urgent dialysis", ddx: "Dried salt from sweat, seborrhoeic scale", by: "Fythrion", page: "https://commons.wikimedia.org/wiki/File:Uremic_frost_on_forehead_and_scalp_of_young_Afro-Caribbean_male.jpg", lic: "CC BY-SA 3.0" })}
<h3>Link-only images</h3>
<ul><li>Diabetic nephropathy histology (Kimmelstiel–Wilson nodules): <a href="https://www.pathologyoutlines.com/topic/kidneydiabetic.html" target="_blank" rel="noopener">PathologyOutlines</a> (copyright)</li><li>Arteriovenous fistula and dialysis access: <a href="https://radiopaedia.org/search?q=arteriovenous+fistula+dialysis" target="_blank" rel="noopener">Radiopaedia</a></li><li>ADPKD on ultrasound and CT: <a href="https://radiopaedia.org/search?q=autosomal+dominant+polycystic+kidney+disease" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Detecting and confirming CKD", [
F.s("At-risk person: diabetes, hypertension, CVD, family history, AKI, NSAIDs/herbals, HIV"), F.a,
F.s("Test eGFR (CKD-EPI 2021) AND urine ACR (first morning)"), F.a,
F.d("eGFR under 60, or ACR ≥3 mg/mmol, or other damage marker?"), F.a,
F.b([["No", F.ok("Retest yearly if at risk")], ["Yes", F.s("Exclude AKI; repeat in 3 months (or use old results)")]]), F.a,
F.d("Persistent over 3 months?"), F.a,
F.b([["No", F.s("AKI/AKD — see AKI chapter")], ["Yes", F.s("CKD: stage by Cause, G, A; ultrasound, urinalysis, bloods")]]), F.a,
F.ok("Calculate KFRE (G3–G5) → refer if criteria met")])}
${F.chart("2 · Treatment ladder", [
F.s("Everyone: no tobacco, activity, salt under 5 g/day, protein 0.8 g/kg (G3–G5), no NSAIDs"), F.a,
F.s("BP target SBP under 120 if tolerated"), F.a,
F.d("Albuminuria (A2–A3) or diabetes?"), F.a,
F.b([["Yes", F.s("ACE inhibitor or ARB at max tolerated dose; check K⁺/creatinine at 2–4 weeks")], ["No", F.s("Any antihypertensive; RAS blocker if hypertension or HF")]]), F.a,
F.d("eGFR ≥20 and (T2D, ACR ≥20 mg/mmol, HF, or eGFR 20–45)?"), F.a,
F.b([["Yes", F.s("Add SGLT2 inhibitor (dapagliflozin 10 mg)")], ["No", F.s("Continue")]]), F.a,
F.s("Age ≥50 or high CV risk → statin"), F.a,
F.d("T2D with persistent albuminuria on RAS + SGLT2?"), F.a,
F.b([["Yes", F.s("Add finerenone (if K⁺ ≤4.8) / GLP-1 RA if glucose above target")], ["No", F.ok("Review 1–4 times a year by heat map")]])])}
${F.chart("3 · Anaemia in CKD", [
F.s("Hb under 13 (men) / 12 (women): FBC, ferritin, TSAT, B12, folate, exclude bleeding"), F.a,
F.d("Iron deficient? (not on dialysis: ferritin under 100 and TSAT under 40%, or ferritin 100–300 and TSAT under 25%)"), F.a,
F.b([["Yes", F.s("Oral iron 1–3 months; IV iron if no response or on HD")], ["No", F.s("Consider ESA")]]), F.a,
F.d("Symptomatic, Hb about 8.5–10 g/dL, iron replete?"), F.a,
F.b([["Yes", F.s("ESA (epoetin 20–50 IU/kg 3×/week); keep Hb at or below 11.5")], ["No", F.ok("Monitor Hb and iron every 3 months")]])])}
${F.chart("4 · Preparing for kidney failure", [
F.d("eGFR under 30 or 2-year KFRE over 40%?"), F.a,
F.s("Education on options: transplant · HD · PD · conservative care"), F.a,
F.s("Protect veins of non-dominant arm; hepatitis B vaccine; HBsAg, HCV, HIV"), F.a,
F.s("AV fistula creation (months before need) or PD catheter; transplant work-up"), F.a,
F.e("Start dialysis for symptoms or complications (usually eGFR 5–10), not a number")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Always test the urine.</b> eGFR alone misses albuminuric CKD, where treatment helps most.</li>
<li><b>A creatinine rise of up to 30% after starting an ACE inhibitor, ARB or SGLT2 inhibitor is expected</b> and means the drug is lowering glomerular pressure. Do not stop it for that.</li>
<li><b>Normal-sized kidneys do not exclude CKD</b> in diabetes, ADPKD, amyloid or HIV.</li>
<li><b>People with CKD are more likely to die of heart disease than to need dialysis.</b> A statin may matter more than a phosphate binder.</li>
<li><b>Iron first, then erythropoietin.</b> ESA does not work in iron deficiency.</li>
<li><b>Fistulas take months to mature.</b> Plan them at eGFR 15–20, not at the first dialysis.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Stopping the ACE inhibitor for a 15% creatinine rise", "Loses long-term protection", "Accept up to 30% within 4 weeks"],
["Combining ACE inhibitor and ARB", "Hyperkalaemia, AKI, no benefit", "Never combine (1B)"],
["Calcium and vitamin D for everyone with CKD", "Hypercalcaemia, vascular calcification", "Treat measured abnormalities"],
["Normalising Hb with ESA", "Stroke and cardiovascular events (TREAT, CHOIR)", "Aim no higher than 11.5 g/dL"],
["Metformin continued below eGFR 30", "Lactic acidosis", "Review at every eGFR result"],
["Cannulating the non-dominant arm in G4–G5", "Destroys future fistula veins", "Hand veins on the dominant side; label the arm"],
["Diagnosing CKD from one abnormal eGFR during an illness", "Mislabelling AKI as CKD", "Repeat after 3 months"],
["Prescribing diclofenac or aceclofenac for joint pain", "AKI on CKD", "Paracetamol, topical NSAIDs with care, physiotherapy"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Definitions and staging</h3>
${qa("Student", "Define CKD.", "Abnormalities of kidney structure or function, present for more than 3 months, with implications for health: eGFR under 60, ACR ≥30 mg/g (3 mg/mmol), or other damage markers.")}
${qa("Student", "What do G and A stand for in CKD staging?", "GFR category (G1–G5) and albuminuria category (A1–A3), alongside the Cause.")}
${qa("Intern/MO", "eGFR is 75 and ACR is 40 mg/mmol for 6 months. Is this CKD? What stage?", "Yes. CKD G2 A3, high risk. It needs a RAS blocker and probably an SGLT2 inhibitor.")}
${qa("Specialist", "When is cystatin C recommended?", "When creatinine-based eGFR is less accurate (extremes of muscle mass, amputation, malnutrition, high-protein diet, steroids) and GFR affects a clinical decision (KDIGO 1C).")}
${qa("Specialist", "What KFRE thresholds does KDIGO 2024 suggest?", "5-year risk 3–5% for referral; 2-year risk over 10% for multidisciplinary care; 2-year risk over 40% for KRT preparation.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "Name the four pillars of drug therapy in albuminuric diabetic CKD.", "RAS blocker (ACE inhibitor or ARB) at max dose, SGLT2 inhibitor, non-steroidal MRA (finerenone), and GLP-1 RA, with a statin for cardiovascular protection.")}
${qa("Intern/MO", "Creatinine rose from 150 to 180 µmol/L 2 weeks after starting enalapril. What do you do?", "A 20% rise is acceptable (below 30%). Continue, check K⁺, recheck in 2–4 weeks. Stop or reduce if over 30%, K⁺ is uncontrollable, or there is symptomatic hypotension.")}
${qa("Intern/MO", "Down to what eGFR can dapagliflozin be started and continued?", "Start at eGFR ≥20 (KDIGO); once started, continue below 20 until dialysis if tolerated.")}
${qa("Intern/MO", "What is the BP target in CKD per KDIGO 2024?", "SBP under 120 mmHg when tolerated, using standardised office measurement (2B); less intensive in frailty or postural hypotension.")}
${qa("Specialist", "Why should calcium-based binders be limited?", "Positive calcium balance contributes to vascular calcification; KDIGO 2017 suggests restricting them, and total elemental calcium from binders should stay ≤1,500 mg/day.")}
${qa("Intern/MO", "When is ESA started, and what is the upper Hb limit?", "KDIGO 2026: for symptomatic anaemia, generally at Hb 8.5–10 g/dL after correcting iron and other causes; do not intentionally exceed 11.5 g/dL.")}
${qa("Intern/MO", "When should metabolic acidosis be treated?", "When bicarbonate is persistently under 18 mmol/L (KDIGO), or under 20 with eGFR under 30 (NICE), with oral sodium bicarbonate.")}
</div>
<div class="qgroup"><h3>Complications and special situations</h3>
${qa("Student", "Explain secondary hyperparathyroidism in CKD.", "Phosphate retention raises FGF23 and lowers calcitriol, reducing calcium absorption; low calcium and calcitriol, and high phosphate, stimulate PTH.")}
${qa("Intern/MO", "Which drugs should be stopped when a woman with CKD plans pregnancy?", "ACE inhibitors, ARBs, SGLT2 inhibitors, finerenone and statins. Switch to labetalol, nifedipine or methyldopa, and start low-dose aspirin from 12 weeks.")}
${qa("Viva", "Why do patients with CKD die more often of cardiovascular disease than of kidney failure?", "Traditional risk factors plus CKD-specific ones (vascular calcification, LVH, anaemia, inflammation, volume overload), and kidney failure takes years to develop.")}
${qa("Viva", "Name causes of CKD with normal or large kidneys.", "Diabetes, ADPKD, amyloidosis, HIV-associated nephropathy, myeloma, and infiltrative diseases.")}
${qa("Intern/MO", "Which painkillers are safest in CKD?", "Paracetamol first. Avoid NSAIDs. For opioids, low-dose oxycodone, fentanyl or buprenorphine rather than morphine, codeine or tramadol.")}
${qa("Specialist", "What did the IDEAL trial show?", "Planned early dialysis start (eGFR 10–14) gave no survival or quality-of-life benefit over a later start (eGFR 5–7) in adults with progressive CKD.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">KDIGO CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. <i>Kidney Int</i> 2024;105(4S):S117–S314. <a href="https://doi.org/10.1016/j.kint.2023.10.018" target="_blank" rel="noopener">doi:10.1016/j.kint.2023.10.018</a> (recommendations read directly from the published summary)</li>
<li id="ref-2">KDIGO 2017 Clinical Practice Guideline Update for CKD–Mineral and Bone Disorder. <i>Kidney Int Suppl</i> 2017;7:1–59. KDIGO 2026 Clinical Practice Guideline for the Management of Anemia in CKD. <i>Kidney Int</i> 2026;109(1S):S1–S99; executive summary <a href="https://doi.org/10.1016/j.kint.2025.06.005" target="_blank" rel="noopener">doi:10.1016/j.kint.2025.06.005</a>.</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §6.7 Chronic kidney disease.</li>
<li id="ref-4">ICMR / DHR India. Standard Treatment Workflow: Chronic Kidney Disease (ICD-11 GB61), July 2026.</li>
<li id="ref-5">GBD Chronic Kidney Disease Collaboration. Global, regional, and national burden of CKD, 1990–2017. <i>Lancet</i> 2020;395:709–733. <a href="https://doi.org/10.1016/S0140-6736(20)30045-3" target="_blank" rel="noopener">doi:10.1016/S0140-6736(20)30045-3</a></li>
<li id="ref-6">Singh AK et al. Epidemiology and risk factors of CKD in India — results from the SEEK study. <i>BMC Nephrol</i> 2013;14:114. <a href="https://doi.org/10.1186/1471-2369-14-114" target="_blank" rel="noopener">doi:10.1186/1471-2369-14-114</a></li>
<li id="ref-7">Heerspink HJL et al. (DAPA-CKD) <i>N Engl J Med</i> 2020;383:1436–1446. <a href="https://doi.org/10.1056/NEJMoa2024816" target="_blank" rel="noopener">doi:10.1056/NEJMoa2024816</a> EMPA-KIDNEY Collaborative Group. <i>N Engl J Med</i> 2023;388:117–127. <a href="https://doi.org/10.1056/NEJMoa2204233" target="_blank" rel="noopener">doi:10.1056/NEJMoa2204233</a> Perkovic V et al. (CREDENCE) <i>N Engl J Med</i> 2019;380:2295–2306. <a href="https://doi.org/10.1056/NEJMoa1811744" target="_blank" rel="noopener">doi:10.1056/NEJMoa1811744</a></li>
<li id="ref-8">Bakris GL et al. (FIDELIO-DKD) <i>N Engl J Med</i> 2020;383:2219–2229. <a href="https://doi.org/10.1056/NEJMoa2025845" target="_blank" rel="noopener">doi:10.1056/NEJMoa2025845</a> Perkovic V et al. (FLOW, semaglutide) <i>N Engl J Med</i> 2024;391:109–121. <a href="https://doi.org/10.1056/NEJMoa2403347" target="_blank" rel="noopener">doi:10.1056/NEJMoa2403347</a></li>
<li id="ref-9">Inker LA et al. New creatinine- and cystatin C-based equations to estimate GFR without race. <i>N Engl J Med</i> 2021;385:1737–1749.</li>
<li id="ref-10">Tangri N et al. Multinational assessment of accuracy of equations for predicting risk of kidney failure. <i>JAMA</i> 2016;315:164–174.</li>
<li id="ref-11">SPRINT Research Group. <i>N Engl J Med</i> 2015;373:2103–2116. <a href="https://doi.org/10.1056/NEJMoa1511939" target="_blank" rel="noopener">doi:10.1056/NEJMoa1511939</a> Baigent C et al. (SHARP) <i>Lancet</i> 2011;377:2181–2192. <a href="https://doi.org/10.1016/S0140-6736(11)60739-3" target="_blank" rel="noopener">doi:10.1016/S0140-6736(11)60739-3</a></li>
<li id="ref-12">Cooper BA et al. (IDEAL) A randomized, controlled trial of early versus late initiation of dialysis. <i>N Engl J Med</i> 2010;363:609–619. <a href="https://doi.org/10.1056/NEJMoa1000552" target="_blank" rel="noopener">doi:10.1056/NEJMoa1000552</a></li>
<li id="ref-13">NICE NG203. Chronic kidney disease: assessment and management. 2021 (not re-opened online on review date).</li>
<li id="ref-14">Bhutan National Essential Medicines List 2025; National Essential Medicines Formulary 2022.</li>
<li id="ref-15">Harrison's Principles of Internal Medicine, 21st ed. (2022), chapter on chronic kidney disease; Oxford Handbook of Clinical Medicine, 11th ed. (2024) — foundational, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Definition and classification", "<span class='pass'>Verified</span>", "KDIGO 2024 read directly"],
["Treatment recommendations and grades", "<span class='pass'>Verified</span>", "KDIGO 2024 recommendation summary"],
["Bhutan and India positions", "<span class='pass'>Verified</span>", "STG 2024, ICMR 2026, NEML 2025 read directly"],
["NICE positions", "<span class='flag'>Not re-verified</span>", "Website blocked automated access; content from the 2021 version"],
["Doses", "<span class='pass'>Checked</span>", "Drug cards list sources"],
["KFRE in Bhutanese patients", "<span class='flag'>Evidence gap</span>", "Not validated locally"],
["Images", "<span class='pass'>Done</span>", "All openly licensed"],
["KDIGO medicines update (2027)", "<span class='flag'>Pending</span>", "Recheck when published"]], "qc")}
` }
]
});
