/* Acute Kidney Injury — children and neonates */
registerPage({
id: "aki-child",
title: "Acute Kidney Injury — Children & Neonates",
subtitle: "Paediatric and neonatal definitions, causes, weight-based emergency care, dialysis and follow-up",
age: "Children & neonates", specs: ["paeds", "neph", "neo", "nicu", "picu", "emerg"],
keywords: ["AKI child", "paediatric AKI", "pediatric acute kidney injury", "neonatal AKI", "pRIFLE", "renal angina", "HUS", "haemolytic uraemic syndrome", "post-streptococcal glomerulonephritis", "PSGN", "posterior urethral valves", "fluid overload", "peritoneal dialysis child", "asphyxia", "theophylline", "oliguria child", "hyperkalaemia child"],
related: ["aki-adult", "ckd-child", "ckd-adult"],
updated: "22 Nov 2026", review: "Nov 2027 (sooner when the KDIGO AKI/AKD guideline is final)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children are not small adults. Their creatinine is lower, so a \"normal-looking\" number can hide kidney failure. Their fluid compartments are smaller, so a few hundred millilitres too much or too little matters, and their causes are different. Neonates are different again.</p>
<div class="glance">
<div><h4>Children</h4><p>KDIGO: creatinine ≥26.5 µmol/L rise in 48 h, or ≥1.5× baseline in 7 days, or urine under 0.5 mL/kg/h for 6 h.</p></div>
<div><h4>Neonates (KDIGO 2026 draft)</h4><p>Creatinine <b>fails to fall</b> in the first week, or rises ≥26.5 µmol/L in 48 h, or ≥1.5× the lowest previous value; or urine under <b>1 mL/kg/h</b> over 24 h.</p></div>
<div><h4>Commonest causes</h4><ul><li>Diarrhoea and dehydration</li><li>Sepsis, malaria, leptospirosis, scrub typhus</li><li>HUS, post-streptococcal GN</li><li>Nephrotoxins (gentamicin, NSAIDs)</li><li>Neonates: asphyxia, sepsis, prematurity</li></ul></div>
<div><h4>Red flags</h4><ul><li>K⁺ over 6.0 (neonate) / 5.5 (child) with ECG change</li><li>Fluid overload over 10%, or pulmonary oedema</li><li>Hypertensive encephalopathy</li><li>Bloody diarrhoea + pallor + low platelets (HUS)</li><li>Boy with poor stream or palpable bladder (valves)</li></ul></div>
<div><h4>Key tests</h4><p>Creatinine against age-normal range, K⁺, gas, urine dipstick and microscopy, FBC and film, ultrasound of kidneys and bladder, <b>daily weight</b>.</p></div>
<div><h4>First hour</h4><ul><li>ABCDE; treat hyperkalaemia by weight</li><li>10–20 mL/kg bolus only if dry or shocked</li><li>Stop nephrotoxins</li><li>Catheter for retention (boys: think valves)</li></ul></div>
<div><h4>Refer / escalate</h4><p>Any dialysis indication, HUS, suspected RPGN, neonatal AKI, fluid overload over 10–15%, stage 3 AKI.</p></div>
</div>
<div class="calc" data-calc="hyperkpaed"></div>
` },

{ id: "overview", title: "Definition, causes and who is at risk", html: `
<h3>Definitions used in children</h3>
${tbl(["System", "Used for", "Key criteria"], [
["<b>KDIGO 2012</b>", "Children beyond the neonatal period (the standard)", "As for adults. Stage 3 also includes <b>eGFR under 35 mL/min/1.73 m²</b> in under-18s."],
["pRIFLE (Akcan-Arikan 2007)", "Older paediatric studies; PICU", "Based on % fall in estimated creatinine clearance (25%, 50%, 75%) and urine under 0.5 mL/kg/h for 8 h or 16 h, or under 0.3 for 24 h"],
["<b>Neonatal modified KDIGO</b>", "Babies in the first weeks", "Baseline is the <b>lowest previous</b> creatinine. Urine thresholds are higher (1 mL/kg/h) because neonates normally make more dilute urine."],
["<b>KDIGO 2026 neonatal draft</b>", "Babies, from birth", "Adds: <b>no decline in creatinine from birth to day 7</b>; cystatin C rise ≥1.25× or over 2.2 mg/L; urine under 1.0 mL/kg/h over 24 h " + LB.draft() + ""]])}
<p><b>Why neonates are different.</b> At birth the baby's creatinine reflects the mother's. In a healthy term baby it falls over 1–2 weeks to about 20–35 µmol/L (0.2–0.4 mg/dL). In very preterm babies it often <i>rises</i> for 2–4 days before falling, because their tubules reabsorb creatinine, and it may take weeks to settle. A creatinine of 80 µmol/L can be normal on day 1 and alarming on day 10.${r(2, 7)}</p>

<h3>Typical creatinine by age (approximate; use your laboratory's range)</h3>
${tbl(["Age", "µmol/L", "mg/dL"], [["Term neonate, day 7–28", "20–40", "0.2–0.45"], ["1–12 months", "15–35", "0.2–0.4"], ["1–5 years", "20–40", "0.2–0.45"], ["5–12 years", "30–60", "0.35–0.7"], ["Adolescent", "40–90", "0.45–1.0"]])}
<p class="foot" style="text-align:left">Approximate enzymatic ranges compiled from standard paediatric references; values vary by assay and laboratory. ${LB.exp("APPROXIMATE")}</p>

<h3>How common is it?</h3>
<ul>
<li>About <b>1 in 3 hospitalised children</b> in pooled data from many countries.${r(5)}</li>
<li><b>PICU:</b> in the AWARE study (4,683 children, 32 units) AKI occurred in 26.9%, and severe AKI (stage 2–3) in 11.6%. Severe AKI independently raised 28-day mortality.${r(3)}</li>
<li><b>NICU:</b> in AWAKEN about 30% of neonates had AKI, and AKI was independently associated with death and longer stay.${r(4)}</li>
<li>In South Asia, community-acquired AKI from diarrhoea, infection, HUS and glomerulonephritis is common, often reaching hospital late.</li>
<li><b>Bhutan:</b> no published paediatric AKI incidence data were found. ${LB.bt("EVIDENCE GAP")}</li></ul>

<h3>Causes by age</h3>
${tbl(["Age", "Pre-renal", "Intrinsic", "Post-renal"], [
["<b>Neonate</b>", "Dehydration, haemorrhage, sepsis, PDA with steal, NEC, congenital heart disease", "<b>Perinatal asphyxia</b>, sepsis, aminoglycosides, NSAIDs for PDA (ibuprofen, indomethacin), vancomycin, renal vein thrombosis (dehydration, infant of diabetic mother), cortical necrosis, maternal ACE inhibitor/NSAID exposure", "<b>Posterior urethral valves</b>, bilateral PUJ obstruction, neurogenic bladder (spina bifida)"],
["<b>Infant and young child</b>", "<b>Diarrhoea and vomiting</b>, sepsis, burns, nephrotic syndrome with hypovolaemia", "<b>HUS</b> (after bloody diarrhoea: STEC, <i>Shigella dysenteriae</i> type 1), sepsis, malaria, nephrotoxins, TLS", "Valves (late presentation), stones (rare)"],
["<b>School age and adolescent</b>", "Gastroenteritis, sepsis, heat illness, DKA", "<b>Post-streptococcal GN</b>, lupus, IgA vasculitis nephritis, ANCA vasculitis, AIN, leptospirosis, scrub typhus, snakebite and wasp stings, rhabdomyolysis, TLS (leukaemia, lymphoma)", "Stones, tumours (rare)"]])}
${box("blue", "South Asia point", `<p><b>Atypical HUS from anti-complement factor H antibodies</b> is unusually common in Indian children aged 5–15 years, often after a febrile or diarrhoeal illness. It responds to plasma exchange plus immunosuppression. Suspect it if HUS occurs without bloody diarrhoea, or relapses. Measure anti-CFH antibodies before plasma is given (referral lab). ${LB.in("SOUTH ASIA")}</p>`)}

<h3>Risk factors and why they matter</h3>
${tbl(["Risk factor", "Why"], [
["Prematurity and low birth weight", "Nephrogenesis continues until about 34–36 weeks; preterm babies are born with fewer nephrons and immature tubules"],
["Critical illness on ventilation or inotropes", "Low cardiac output, raised venous pressure, inflammation"],
["Cardiac surgery with bypass", "Ischaemia, haemolysis, inflammation"],
["Nephrotoxic drugs (3 or more at once is a common trigger)", "Combined tubular injury; NINJA programmes cut nephrotoxin-AKI by screening these children daily"],
["Haematological malignancy", "Tumour lysis, chemotherapy, sepsis"],
["Underlying CKD or CAKUT", "Less reserve"],
["Severe acute malnutrition", "Low muscle mass hides the creatinine rise; fluid handling is fragile"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How AKI develops in children and neonates", [
F.b([
["Neonate", F.s("Perinatal asphyxia, sepsis, prematurity, NSAIDs for PDA, gentamicin, valves")],
["Child", F.s("Dehydration, HUS, post-streptococcal GN, sepsis, nephrotoxins, tropical infection")]]), F.a,
F.s("Reduced renal perfusion or direct injury in a kidney with less reserve (neonates: low GFR, immature tubules)"), F.a,
F.s("<b>GFR falls</b>; creatinine rises late, and in neonates fails to fall after birth"), F.a,
F.d("Small body water reserve"), F.a,
F.b([
["Fluid", F.e("Fluid overload builds quickly in oliguria (over 10–20% predicts death)")],
["Electrolytes", F.e("Hyperkalaemia, hyponatraemia, acidosis")],
["Blood pressure", F.e("Hypertension, encephalopathy (GN, HUS)")]]), F.a,
F.ok("Most recover; HUS and neonatal AKI leave long-term risk of hypertension and CKD")])}
<p>The cellular injury of ischaemic and septic AKI is the same as in adults: energy failure in tubular cells, casts, back-leak, tubuloglomerular feedback and inflammation (see the <a href="#/d/aki-adult/patho">adult chapter</a>). What differs is the setting.</p>
<ol class="chain">
<li><b>Smaller reserve of water.</b> An infant's daily water turnover is about a fifth of body water (an adult's is about a fifteenth), so diarrhoea dehydrates infants quickly and fluid overload builds quickly in oliguria.</li>
<li><b>Immature kidneys in neonates.</b> Low GFR at birth, high renal vascular resistance, dependence on prostaglandins and angiotensin II. This is why NSAIDs for PDA and maternal ACE inhibitors are so harmful.</li>
<li><b>Asphyxia:</b> redistribution of blood to brain and heart, with adenosine-mediated afferent vasoconstriction, causes tubular injury in up to a third to half of asphyxiated babies. This is the rationale for <b>theophylline</b> (an adenosine antagonist).</li>
<li><b>HUS:</b> Shiga toxin binds endothelial Gb3 receptors in glomerular capillaries. Endothelial injury causes microthrombi, so red cells fragment (haemolysis), platelets are consumed and glomeruli are occluded.</li>
<li><b>Post-streptococcal GN:</b> immune complexes deposit in glomeruli 1–2 weeks after throat infection or 3–6 weeks after skin infection. Complement is activated (low C3), and the inflamed glomeruli filter poorly but tubules keep reabsorbing salt, causing oedema and hypertension.</li>
<li><b>Fluid overload</b> accumulates as the main harm in PICU AKI. Overload of 10–20% of body weight is consistently linked with higher mortality.</li></ol>
<h3>Natural history</h3>
<p>Most community AKI in children (dehydration, PSGN, STEC-HUS) recovers. About 1 in 4 survivors of HUS have long-term kidney sequelae (Garg et al., JAMA 2003) (proteinuria, hypertension, low GFR), so follow them for years. Preterm babies with AKI start life with fewer nephrons and are at long-term risk of hypertension and CKD.${r(1, 6)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Positions", "This guide"], [
["Neonatal definition", "Neonatal modified KDIGO (used in AWAKEN) vs KDIGO 2026 draft (adds failure of creatinine to fall in week 1, cystatin C criteria)", "Use the modified KDIGO now, plus the \"no fall in the first week\" rule. It catches the asphyxiated baby whose creatinine stays at the maternal level. " + LB.draft() + ""],
["Urine output threshold in neonates", "Some units use under 0.5 mL/kg/h; neonatal modified KDIGO uses under 1 mL/kg/h over 24 h", "Under 1 mL/kg/h over 24 h (neonates normally pass 1–3 mL/kg/h)"],
["Fluid type for resuscitation", "KDIGO 2012: isotonic crystalloid · 2026 draft: buffered over saline (1B) in children and adults", "Ringer's lactate for resuscitation (avoid hypotonic fluids in sick children: hyponatraemia)"],
["Fluid boluses in febrile children without shock", "FEAST (2011, African children with severe febrile illness) showed boluses increased mortality; WHO Pocket Book reserves boluses for shock", "<b>Give boluses only for shock or clear dehydration</b>, 10 mL/kg at a time with reassessment. Severely malnourished children follow WHO SAM fluid rules."],
["Hyperkalaemia calcium dose", "RCH 2024: 0.68 mL/kg (max 30 mL) of 10% · APLS/many UK units: 0.5 mL/kg (max 20 mL)", "Either is acceptable; this guide's calculator uses RCH (verified, current)"],
["When to start RRT in PICU", "Adults: deferred strategy (1C). Children: 2026 draft suggests considering RRT within 2 days of ICU admission or AKI onset for severe AKI, and accepts isolated fluid overload as an indication", "Children tolerate overload badly: start earlier than you would in an adult, especially if fluid overload exceeds 10–15% and is rising."],
["Theophylline in asphyxia", "KDIGO 2026 draft: single dose recommended (1A). Most trials pre-date routine cooling; not on Bhutan NEML", "Consider where available and cooling is not given; discuss with neonatology. " + LB.bt("NOT ON NEML") + ""]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Mechanism", "Clue"], [
["Few wet nappies, dark urine", "Low GFR or dehydration", "Ask how many nappies in 24 h (under 4 in an infant is low)"],
["Sunken eyes, slow skin pinch, lethargy", "Dehydration", "Pre-renal; responds to fluid"],
["Puffy face and eyes, cola-coloured urine, high BP", "Glomerular inflammation (PSGN)", "Recent sore throat or skin sores"],
["Pallor, petechiae, bloody diarrhoea then oliguria", "HUS", "Low platelets and fragments on film"],
["Seizures, headache, vomiting, blurred vision", "Hypertensive encephalopathy, hyponatraemia, uraemia", "Measure BP with the right cuff size"],
["Breathlessness, crackles, hepatomegaly", "Fluid overload", "Weight gain"],
["Poor stream, palpable bladder, UTI in a baby boy", "Posterior urethral valves", "Antenatal hydronephrosis history"],
["Fever, myalgia, jaundice, eschar", "Leptospirosis, scrub typhus, malaria", "Rural exposure, season"],
["Neonate: failure to pass urine by 24–48 h, oedema", "Obstruction, asphyxia, renal agenesis/dysplasia", "About 92% of newborns pass urine by 24 h and 99% by 48 h"]])}
${box("red", "Red flags", `<ul><li>Hyperkalaemia with ECG changes (K⁺ over 5.5 in children, over 6.0 in neonates)</li><li>Fluid overload over 10% of body weight, or pulmonary oedema</li><li>Hypertensive encephalopathy (seizures, reduced consciousness)</li><li>HUS with neurological signs (seizures, stroke)</li><li>Anuria</li><li>Pulmonary haemorrhage (leptospirosis, vasculitis)</li><li>Neonate: no urine by 48 h, or bilateral hydronephrosis on scan</li></ul>`)}
<h3>Atypical presentations</h3>
<ul><li><b>Severe malnutrition:</b> very low muscle mass means creatinine stays \"normal\" despite major kidney injury. Look at urine output and urea.</li>
<li><b>Nephrotic syndrome</b> can cause AKI by hypovolaemia (watch for abdominal pain, cold peripheries, high haematocrit) or by over-diuresis.</li>
<li><b>Neonates</b> rarely show symptoms: AKI is found by monitoring creatinine and urine output.</li></ul>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Distinguishing feature", "Best test"], [
["Dehydration (pre-renal)", "Diarrhoea, poor intake, bland urine, high urea:creatinine ratio", "Active urine sediment", "Responds to rehydration within 24–48 h", "Fluid response, urine Na under 20"],
["STEC-HUS", "Bloody diarrhoea 5–10 days before, pallor, low platelets", "Normal film", "Fragmented red cells, high LDH, negative Coombs", "Film, LDH, stool for STEC/Shigella"],
["Atypical HUS (incl. anti-CFH)", "No bloody diarrhoea, relapse, family history, age 5–15 (anti-CFH)", "Clear STEC infection", "Low C3 in some", "C3, anti-CFH antibody, ADAMTS13 (referral)"],
["Pneumococcal HUS", "Pneumonia or meningitis with empyema", "—", "Positive direct Coombs (T-antigen exposure)", "Coombs test; avoid plasma"],
["Post-streptococcal GN", "Sore throat or impetigo 1–6 weeks ago, oedema, hypertension, cola urine", "Normal C3", "<b>Low C3</b>, normalising by 6–8 weeks", "C3, ASO/anti-DNase B"],
["Lupus nephritis", "Adolescent girl, rash, arthritis, cytopenias", "Negative ANA", "Low C3 and C4, anti-dsDNA", "ANA, dsDNA, biopsy"],
["IgA vasculitis nephritis", "Purpura on legs and buttocks, abdominal pain, arthritis", "—", "Normal platelets", "Clinical; biopsy if severe"],
["Posterior urethral valves", "Boy, antenatal hydronephrosis, poor stream, bladder palpable", "Normal bladder on scan", "Thick-walled bladder, bilateral hydronephrosis", "Ultrasound, then MCUG (VCUG)"],
["Nephrotoxic AKI", "Aminoglycosides, vancomycin, NSAIDs, aciclovir, contrast", "—", "Often non-oliguric", "Drug history, levels"],
["Rhabdomyolysis", "Viral myositis, trauma, seizures, heat", "Normal CK", "Very high CK", "CK"],
["Tumour lysis", "Leukaemia or lymphoma, after chemotherapy", "—", "High urate, K⁺, PO₄, low Ca", "Electrolytes"],
["Undiagnosed CKD (CAKUT)", "Poor growth, polyuria, rickets, small or abnormal kidneys", "Normal growth and kidneys", "Small or dysplastic kidneys on ultrasound", "Ultrasound, growth chart"]])}
<h3>The typical child</h3>
<p>A 3-year-old in a rural district has had diarrhoea for 3 days. For 2 days she has passed few wet nappies, she is lethargic with sunken eyes, creatinine is 120 µmol/L (normal for age about 30) and the urine is concentrated but otherwise bland. The most likely diagnosis is <b>pre-renal AKI from dehydration</b>. Now check the film and platelets. If the diarrhoea was bloody, or she is pale with petechiae, <b>HUS</b> becomes the leading diagnosis and the management changes: careful fluids, no antimotility drugs, early referral for dialysis.</p>
` },

{ id: "invest", title: "Investigations", html: `
<div class="calc" data-calc="schwartz"></div>
<p class="foot" style="text-align:left">The Schwartz equation assumes a stable creatinine. During AKI use it only to estimate the <i>baseline</i> (from an old creatinine), not current GFR.</p>
${tbl(["Test", "Why", "Expected finding", "Limits", "Priority"], [
["<b>Daily weight</b> and strict input/output", "Fluid overload % and urine criteria", "FO% = (fluid in − out, litres) ÷ admission weight (kg) × 100", "Needs a consistent scale; nappies can be weighed (1 g ≈ 1 mL)", "Essential"],
["Creatinine, urea, electrolytes, bicarbonate", "Stage and danger", "Compare with age-normal range or a baseline", "Neonates: reflects mother's for days", "Essential"],
["Venous gas", "Acidosis", "Metabolic acidosis", "—", "Essential if unwell"],
["Glucose", "Hypoglycaemia in sick infants; DKA", "—", "—", "Essential"],
["FBC and <b>blood film</b>", "HUS, sepsis, malaria", "Fragments, low platelets in HUS", "—", "Essential"],
["LDH, haptoglobin, reticulocytes, Coombs", "Haemolysis; pneumococcal HUS", "High LDH; Coombs positive in pneumococcal HUS", "—", "If anaemia or low platelets"],
["Calcium, phosphate, magnesium, urate", "Complications, TLS", "—", "—", "Recommended"],
["C3, C4, ASO/anti-DNase B", "GN", "Low C3 in PSGN, lupus, some aHUS", "—", "If haematuria and proteinuria"],
["Stool culture or STEC PCR, Shigella", "HUS cause", "—", "Often not available; refer the sample", "If bloody diarrhoea"],
["Malaria RDT, dengue NS1, leptospira and scrub IgM", "Tropical causes", "—", "Early serology often negative", "If febrile"],
["Urine dipstick and microscopy", "Glomerular vs tubular", "Blood and protein in GN; casts", "Bag samples are often contaminated", "Essential"],
["Urine protein:creatinine ratio", "Glomerular disease", "Over 200 mg/mmol nephrotic range", "—", "Recommended"],
["<b>Kidney and bladder ultrasound</b>", "Obstruction, size, CAKUT, renal vein thrombosis", "Hydronephrosis, thick bladder (valves), echogenic large kidneys (RVT, ATN)", "Operator-dependent", "Essential in most"],
["MCUG (VCUG)", "Posterior urethral valves", "Dilated posterior urethra (\"keyhole\" bladder)", "Specialist imaging", "If valves suspected"],
["Kidney biopsy", "RPGN, lupus, unexplained AKI", "—", "Referral; risks higher in small children", "Selected"]])}
${box("amber", "Prediction in PICU: renal angina index", `<p>The KDIGO draft suggests the <b>renal angina index</b> for critically ill children (Rec 2.6.1, 2B). Multiply a risk score by an injury score. <b>Risk:</b> PICU admission = 1; stem-cell transplant = 3; ventilation plus inotropes = 5. <b>Injury</b> (fall in estimated creatinine clearance, or fluid overload %): no fall and under 5% = 1; 0–25% or 5–10% = 2; 25–50% or 10–15% = 4; over 50% or 15% or more = 8. An RAI of <b>8 or more</b> at 12 hours of admission predicts severe AKI on day 3.${r(9)}</p>`)}
` },

{ id: "staging", title: "Staging, severity and escalation", html: `
<h3>Children (KDIGO 2012)</h3>
${tbl(["Stage", "Creatinine", "Urine output"], [
["1", "1.5–1.9 × baseline or ≥26.5 µmol/L rise", "Under 0.5 mL/kg/h for 6–12 h"],
["2", "2.0–2.9 × baseline", "Under 0.5 mL/kg/h for 12 h or more"],
["3", "3.0 × baseline, or ≥353.6 µmol/L, or <b>eGFR under 35 mL/min/1.73 m²</b>, or RRT", "Under 0.3 mL/kg/h for 24 h, or anuria for 12 h"]])}
<h3>Neonates (KDIGO 2026 draft, based on neonatal modified KDIGO)</h3>
${tbl(["Stage", "Creatinine (baseline = lowest previous value)", "Urine output over 24 h"], [
["1", "No fall from birth to day 7; or ≥26.5 µmol/L rise; or 1.5–1.9 × baseline", "Over 0.5 and ≤1.0 mL/kg/h"],
["2", "2.0–2.9 × baseline", "Over 0.3 and ≤0.5 mL/kg/h"],
["3", "≥3 × baseline, or ≥221 µmol/L (2.5 mg/dL), or RRT", "≤0.3 mL/kg/h"]])}
<p>${LB.draft()} Treat as interim until the final guideline is published.${r(2)}</p>
<h3>Escalate to PICU/NICU or a paediatric nephrologist when</h3>
<ul><li>Hyperkalaemia not responding, or any ECG change</li><li>Fluid overload over 10% and rising, or respiratory compromise</li><li>Hypertensive emergency</li><li>HUS (all cases need a centre that can dialyse children)</li><li>Suspected RPGN, lupus or aHUS</li><li>Stage 3 AKI, or anuria</li><li>Any neonate with stage 2–3 AKI</li></ul>
${box("bt", "Bhutan referral reality", `<p>Paediatric dialysis needs specialist nursing, small circuits or PD catheters, and paediatric-size equipment. Phone the national referral hospital's paediatric team early, before the child needs dialysis that night. Acute peritoneal dialysis fluid is not on the 2025 NEML, so ask what is in stock before transfer. ${LB.loc()}</p>`)}
` },

{ id: "manage", title: "Management", html: `
<h3>A. Stabilise</h3>
<ol>
<li><b>Airway, breathing:</b> oxygen; position upright if overloaded; CPAP or ventilation if failing.</li>
<li><b>Circulation:</b> if shocked or clearly dehydrated, give <b>10–20 mL/kg</b> Ringer's lactate or 0.9% saline over 5–20 minutes. Reassess after each bolus (heart rate, capillary refill, liver edge, crackles). Stop at signs of overload. In <b>severe acute malnutrition</b>, follow WHO SAM rehydration (smaller volumes, slower). If still hypotensive after 40–60 mL/kg, start an inotrope or vasopressor (${dr("noradrenaline")} 0.05–1 microgram/kg/min, or adrenaline per local sepsis protocol).</li>
<li><b>Hyperkalaemia:</b> see the box and the dose calculator at the top.</li>
<li><b>Hypertension:</b> measure with the correct cuff (bladder width about 40% of arm circumference). Volume-driven hypertension (PSGN, oliguric AKI) responds to ${dr("furosemide")} and fluid restriction. Add ${dr("amlodipine")} or ${dr("nifedipine")}. Hypertensive emergency: ${dr("labetalol")} IV, lowering BP by no more than 25% of the planned reduction in the first 8 hours to protect the brain.</li>
<li><b>Glucose and seizures:</b> check glucose; treat seizures and look for hyponatraemia, hypocalcaemia and hypertension.</li></ol>

${box("red", "Emergency hyperkalaemia (children; RCH Melbourne, Aug 2024)", `<p><b>Thresholds:</b> children K⁺ over 5.5 mmol/L; neonates over 6.0. Mild 5.5–6.0, moderate 6.1–7.0, severe over 7.0.</p>
<ol><li>${dr("calcium_gluconate")} 10%: <b>0.68 mL/kg (max 30 mL)</b> IV/IO over 2–5 min if unstable, 15–20 min if stable. Repeat up to twice.</li>
<li>${dr("salbutamol")} nebulised: <b>2.5 mg if 25 kg or less; 5 mg if over 25 kg</b>; repeat every 1–2 h.</li>
<li>${dr("insulin_glucose")}: severe — <b>glucose 10% 5 mL/kg</b> then <b>soluble insulin 0.1 unit/kg (max 10 units)</b> IV, then an infusion. Moderate — insulin infusion 0.1 unit/kg/h with 10% glucose. Check glucose every 30–60 min. <b>Bhutan U-40 insulin: dilute to 1 unit/mL</b> (e.g. 0.25 mL = 10 units in 9.75 mL saline) before drawing up child doses.</li>
<li>${dr("sodium_bicarbonate")} only if acidotic: 1–3 mmol/kg (severe) over 5 min; separate line from calcium. With Bhutan's 7.5% solution, 1 mmol ≈ 1.1 mL.</li>
<li>${dr("polystyrene")} 0.5–1 g/kg 6-hourly (max 30 g), oral or rectal; rectal only in neonates.</li>
<li>Dialysis if refractory.</li></ol>`)}

<h3>B. Fluids once stabilised</h3>
<ul>
<li>In oliguric AKI, give <b>insensible losses plus urine output</b>. Insensible losses are about <b>300–400 mL/m²/day</b> (higher with fever, phototherapy, radiant warmers and in preterm babies). Use a glucose-containing isotonic fluid. Recalculate every 6–12 hours.</li>
<li>Weigh daily. A child who is gaining weight in oliguric AKI is getting too much fluid.</li>
<li>Avoid hypotonic maintenance fluids in sick children (hyponatraemia and cerebral oedema).</li>
<li>Diuretics for clinically significant overload (KDIGO draft Rec 3.3.1, 2B): ${dr("furosemide")} 0.5–1 mg/kg IV, up to 2 mg/kg in oliguria under specialist advice.</li></ul>

<h3>C. Specific causes</h3>
${tbl(["Cause", "Specific management"], [
["Dehydration", "Rehydrate (ORS if able to drink; IV if severe); recheck creatinine in 24 h; zinc for diarrhoea in under-5s"],
["<b>STEC-HUS</b>", "Careful fluids (early isotonic volume expansion in the diarrhoeal phase may protect the kidney); <b>no antimotility drugs</b>; avoid platelet transfusion unless bleeding or a procedure; transfuse red cells for Hb under about 6–7 g/dL; antibiotics are controversial for STEC (may increase toxin release) but <b>are</b> indicated for Shigella; early dialysis"],
["Atypical HUS", "Urgent referral; plasma exchange; eculizumab where available (not in Bhutan); anti-CFH: plasma exchange plus immunosuppression"],
["<b>Post-streptococcal GN</b>", "Salt and fluid restriction, furosemide, amlodipine or nifedipine for BP; penicillin to eradicate strep (does not change the nephritis); most recover in weeks"],
["Nephrotic syndrome with AKI", "Look for hypovolaemia (albumin 20% 0.5–1 g/kg with furosemide only in specialist hands), sepsis, thrombosis, drugs"],
["Posterior urethral valves", "Drain the bladder: a 5–8 Fr feeding tube is often easier than a Foley (the balloon can cause bladder spasm); urgent paediatric urology; expect post-obstructive diuresis and salt wasting"],
["Leptospirosis, scrub typhus", "Doxycycline (all ages for short courses), or azithromycin or ceftriaxone"],
["Severe malaria", "IV artesunate"],
["Tumour lysis", "Hyperhydration, rasburicase if high risk and G6PD normal (KDIGO draft Rec 3.7.1, 1B), else allopurinol"],
["Nephrotoxins", "Stop or replace; levels for gentamicin and vancomycin; avoid NSAIDs"]])}

<h3>D. Nutrition</h3>
<p>Do not restrict protein. Use age-recommended protein and energy targets. Children on CRRT need at least <b>2.5 g/kg/day</b> of protein and water-soluble vitamin supplements (KDIGO draft PP 3.12.2.1–2). Enteral feeding is preferred.</p>

<h3>E. Dialysis in children</h3>
<ul>
<li><b>Indications:</b> refractory hyperkalaemia, acidosis or overload; uraemic encephalopathy or pericarditis; inability to give nutrition or blood products without overload; <b>isolated fluid overload</b> in critically ill children (draft PP 5.12.1.2). Consider starting within 2 days of ICU admission or AKI onset in severe AKI (PP 5.12.1.1).</li>
<li><b>Modality:</b> acute peritoneal dialysis is an acceptable and sometimes preferable choice in children (PP 5.12.2.1), particularly infants and low-resource settings. Start with fill volumes of <b>10–20 mL/kg</b> and short cycles of <b>60–90 minutes</b>, continuous over 24 h for the first 1–3 days (PP 5.12.3.3). CRRT where available: initial effluent <b>25–30 mL/kg/h</b>, prescribed by weight not BSA. Keep net ultrafiltration at or below 2.5 mL/kg/h (PP 5.12.7.1).</li>
<li><b>Hyperammonaemia</b> (inborn errors) needs very high-intensity CRRT or HD.</li>
<li><b>Stopping:</b> urine over 0.5 mL/kg/h over 6 hours suggests recovery (PP 5.12.8.1).</li></ul>
` },

{ id: "neonatal", title: "Neonatal AKI", html: `
<h3>Prevention</h3>
<ul>
<li><b>Severe perinatal asphyxia:</b> the KDIGO 2026 draft recommends a <b>single dose of</b> ${dr("theophylline")} to prevent AKI (1A). Trials used 5–8 mg/kg IV within the first hour. Evidence in cooled babies is limited, and theophylline is <b>not on the Bhutan NEML</b>.${r(2)}</li>
<li><b>Nephrotoxin stewardship:</b> review gentamicin need at 36–48 h (stop if cultures are negative); dose by gestational and postnatal age with levels; avoid co-prescribing several nephrotoxins.</li>
<li>Monitor creatinine and urine output in babies with asphyxia, sepsis, PDA treatment, cardiac surgery or birth weight under 1,500 g.</li></ul>
<h3>Management points specific to neonates</h3>
<ul>
<li><b>Fluids:</b> calculate by day of life and gestation, and add urine output. Weigh daily (twice daily in extreme prematurity).</li>
<li><b>Hyperkalaemia:</b> non-oliguric hyperkalaemia in extreme prematurity (first 72 h) is a shift from cells, not kidney failure. Treat with insulin–glucose infusion and salbutamol; avoid oral resins.</li>
<li><b>Drug doses:</b> neonatal doses depend on gestational age, postnatal age and postmenstrual age, because nephron maturation drives clearance. ${dr("furosemide")} every 24 h if PMA is under 31 weeks.</li>
<li><b>Hypertension</b> in a neonate after umbilical arterial catheterisation suggests renal artery thrombosis: Doppler, and paediatric nephrology.</li>
<li><b>Bilateral hydronephrosis in a boy</b> means posterior urethral valves until proven otherwise: drain the bladder, scan, and refer to urology.</li>
<li><b>Dialysis</b> in neonates is mostly PD, in a NICU with specialist support.</li></ul>
${box("bt", "Bhutan note", `<p>Neonatal dialysis is not available in most of Bhutan. Prevention and early transfer of high-risk babies (severe asphyxia with oliguria, bilateral hydronephrosis, rising potassium) are the realistic priorities. ${LB.loc()}</p>`)}
` },

{ id: "drugs", title: "Medicines and doses (children)", html: `
<p>Tap a drug name for the full card. All doses are per kg with a maximum (cap); never exceed the adult dose.</p>
${tbl(["Drug", "Child dose", "Max / notes"], [
[dr("calcium_gluconate"), "0.68 mL/kg of 10% IV over 2–5 min (unstable)", "Max 30 mL. Alternative 0.5 mL/kg (max 20 mL)"],
[dr("insulin_glucose"), "Glucose 10% 5 mL/kg then insulin 0.1 unit/kg IV", "Max 10 units; dilute U-40 insulin to 1 unit/mL"],
[dr("salbutamol"), "≤25 kg: 2.5 mg neb · over 25 kg: 5 mg neb", "Repeat every 1–2 h"],
[dr("sodium_bicarbonate"), "1–3 mmol/kg IV (severe acidosis with high K⁺)", "Separate line from calcium; 7.5% ≈ 0.9 mmol/mL"],
[dr("polystyrene"), "0.5–1 g/kg 6-hourly oral or rectal", "Max 30 g per dose; rectal only in neonates"],
[dr("furosemide"), "0.5–1 mg/kg IV per dose", "Up to 2 mg/kg/dose under specialist advice; rate ≤0.5 mg/kg/min"],
[dr("amlodipine"), "1–5 y: 0.1 mg/kg/day · 6 y or older: 2.5 mg/day", "Max 0.6 mg/kg/day (≤5 mg) or 10 mg/day"],
[dr("nifedipine"), "0.25–0.5 mg/kg/day (urgency)", "Max 3 mg/kg/day (≤120 mg)"],
[dr("labetalol"), "0.2–1 mg/kg IV bolus or 0.25–3 mg/kg/h infusion", "Max 40 mg per bolus"],
[dr("noradrenaline"), "0.05–1 microgram/kg/min", "Central line preferred"],
[dr("theophylline"), "Neonatal asphyxia: single dose, trials 5–8 mg/kg IV", "Not on Bhutan NEML"]])}
<h3>Avoid or adjust</h3>
<ul><li><b>ACE inhibitors and ARBs:</b> stop during AKI; restart after recovery if indicated (KDIGO draft PP 6.5.1.2).</li><li><b>NSAIDs:</b> avoid (ibuprofen for fever is a common hidden cause).</li><li><b>Gentamicin, amikacin, vancomycin:</b> level-guided dosing; avoid if alternatives exist.</li><li><b>Aciclovir:</b> hydrate and adjust the dose.</li><li><b>Contrast:</b> do not withhold essential imaging; use the lowest dose and assess volume.</li></ul>
` },

{ id: "scenarios", title: "Special situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Severe acute malnutrition", "Slower, smaller fluid volumes (WHO SAM protocol); low creatinine hides AKI; watch K⁺ and glucose", "Heart failure risk with standard boluses; reduced muscle mass"],
["Congenital heart disease, after cardiac surgery", "Smaller boluses, early diuretics, PD catheter sometimes placed in theatre", "Low cardiac output, high venous pressure"],
["Nephrotic syndrome", "Check volume carefully; avoid aggressive diuresis; consider thrombosis", "Can be hypo- or hypervolaemic"],
["Haematological malignancy", "TLS prophylaxis; avoid nephrotoxins; frequent electrolytes", "High cell turnover"],
["Asthma", "Salbutamol lowers K⁺: helpful in hyperkalaemia, harmful in recovery-phase hypokalaemia", "—"],
["Diabetes (DKA)", "AKI is common in DKA and usually pre-renal; correct fluids per DKA protocol; creatinine may be falsely raised by ketones (Jaffe)", "—"],
["Drug allergy", "Penicillin allergy with AKI: consider AIN", "—"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Mechanism", "Recognition", "Management"], [
["Hyperkalaemia", "Retention, acidosis, haemolysis (HUS)", "ECG, K⁺", "Weight-based protocol"],
["Fluid overload", "Oliguria with ongoing fluid", "Weight gain, oedema, hypoxia; FO% over 10", "Restrict, diurese, RRT"],
["Hypertensive encephalopathy", "Volume, renin", "Headache, vomiting, seizures, visual loss (PRES)", "Controlled BP reduction"],
["Hyponatraemia", "Hypotonic fluids, water retention", "Seizures", "Restrict free water; hypertonic saline for seizures"],
["Hypocalcaemia, hyperphosphataemia", "Retention, TLS", "Tetany, seizures", "Calcium if symptomatic; binders"],
["Neurological HUS", "Microthrombi in the brain", "Seizures, stroke, coma", "PICU; specialist therapy"],
["Malnutrition", "Catabolism, restricted intake", "Weight loss after fluid removal", "Feed early; do not restrict protein"],
["Long-term CKD and hypertension", "Nephron loss", "Proteinuria, high BP, low eGFR on follow-up", "Long-term follow-up"]])}
<h3>Prognosis</h3>
<ul><li>Dehydration-related AKI almost always recovers fully.</li><li>STEC-HUS: acute mortality is under 5% with dialysis access; about 1 in 4 dialysis-treated children have long-term sequelae.</li><li>PICU: severe AKI raises 28-day mortality (AWARE). Fluid overload over 10–20% predicts death independently.</li><li>Neonates: AKI is independently linked with death and longer stay (AWAKEN). Preterm survivors carry lifelong risk of hypertension and CKD.</li></ul>
` },

{ id: "followup", title: "Discharge, follow-up and prevention", html: `
<h3>Discharge when</h3><ul><li>Creatinine is falling or back to the age-normal range</li><li>Electrolytes are normal without IV treatment</li><li>BP is controlled</li><li>Feeding well, and weight stable</li><li>Family understands the warning signs</li></ul>
<h3>Follow-up</h3>
${tbl(["When", "What"], [
["1–2 weeks", "Creatinine, electrolytes, BP (especially after PSGN or HUS)"],
["<b>3 months</b>", "Creatinine/eGFR (Schwartz), urine ACR or PCR, BP, growth (KDIGO draft PP 6.3.1, 6.5.1.1)"],
["Yearly for years", "After HUS needing dialysis, neonatal AKI in preterm babies, or incomplete recovery: BP, urine protein, eGFR"]])}
<p>Assess growth and functional status at follow-up (KDIGO draft PP 6.5.1.1). Resume ACE inhibitors or ARBs that the child was taking before, once AKI has resolved (PP 6.5.1.2).</p>
<h3>Prevention</h3>
<ul><li>Early ORS and zinc for diarrhoea; breastfeeding; safe water and handwashing (prevents STEC and Shigella).</li><li>Treat streptococcal throat and skin infections (reduces PSGN).</li><li>Avoid NSAIDs in dehydrated children.</li><li>Antenatal ultrasound follow-up for hydronephrosis.</li><li>Nephrotoxin stewardship in hospital.</li></ul>
${box("green", "What to tell parents", `<ul><li>\"Your child's kidneys were hurt by ___. They are recovering.\"</li><li>Bring your child back for a urine and BP check in 3 months, even if they seem well.</li><li>Do not give ibuprofen. Use paracetamol for fever.</li><li>Give extra fluids (ORS) as soon as diarrhoea starts.</li></ul>`)}
${box("red", "Come back immediately if", `<ul><li>Few or no wet nappies for 8–12 hours, or no urine for 12 hours in an older child</li><li>Swollen face, eyes or legs</li><li>Headache, vomiting, fits or unusual sleepiness</li><li>Blood in urine or stool, or the child looks very pale</li><li>Fast breathing</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Normal paediatric kidney", src: "images/normal-paediatric-kidney.jpg", mod: "Ultrasound, longitudinal", ctx: "Reference for comparison", loc: "Kidney", find: "Prominent, dark medullary pyramids (**) — more obvious than in adults; cortex (***); sinus (****)", signs: "Normal prominent pyramids in children", interp: "Normal. Do not mistake the dark pyramids of infants for hydronephrosis or cysts.", ddx: "Hydronephrosis (connected, branching fluid)", by: "Hansen, Nielsen & Ewertsen, Diagnostics 2016", page: "https://commons.wikimedia.org/wiki/File:Normal_pediatric_kidney.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Hydronephrosis", src: "images/hydronephrosis-moderate.jpg", mod: "Ultrasound", ctx: "Obstruction (in a baby boy, bilateral hydronephrosis suggests posterior urethral valves)", loc: "Collecting system", find: "Dilated, connected calyces", interp: "Obstructive uropathy; scan the bladder and ureters, then MCUG", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Ultrasound_of_right_kidney_moderate_hydronephrosis.jpg", lic: "CC BY-SA 4.0" })}
</div>
${fig({ title: "Urine casts: tubular injury, interstitial and glomerular patterns", src: "images/urine-casts.jpg", mod: "Urine microscopy", ctx: "Distinguishing ATN, AIN and GN (e.g. PSGN shows red cell casts)", loc: "Urine sediment", find: "(a) tubular cell cast (b) muddy brown cast (c) white cell cast (d) red cell cast", interp: "Red cell casts in a child with oedema and hypertension: think PSGN", by: "Mohsenin V. J Intensive Care 2017;5:57", page: "https://commons.wikimedia.org/wiki/File:RTE_cast,_muddy_granular_cast,_WBC_cast_and_RBC_cast_in_urine.jpg", lic: "CC BY 4.0" })}
${fig({ title: "ECG changes of hyperkalaemia", src: "images/hyperkalaemia-ecg-schematic.png", mod: "<b>Schematic illustration — not a patient tracing</b>", ctx: "Teaching", find: "Peaked T → flat P and long PR → wide QRS → sine wave", interp: "Children's normal T waves can be prominent; compare with an old ECG and treat the number", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:ECG_in_hyperkalemia.svg", lic: "Public domain" })}
<h3>Link-only images</h3>
<ul><li>Posterior urethral valves on MCUG (\"keyhole\" sign): <a href="https://radiopaedia.org/search?q=posterior+urethral+valves" target="_blank" rel="noopener">Radiopaedia</a></li><li>Renal vein thrombosis in a neonate: <a href="https://radiopaedia.org/search?q=renal+vein+thrombosis+neonate" target="_blank" rel="noopener">Radiopaedia</a></li><li>HUS blood film (schistocytes): <a href="https://imagebank.hematology.org/" target="_blank" rel="noopener">ASH Image Bank</a> (copyright; view on site)</li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Child with suspected AKI", [
F.s("Creatinine above age-normal or rising · or few wet nappies · or oedema/high BP"), F.a,
F.e("Danger: K⁺ with ECG change? Fluid overload over 10%? Encephalopathy?"), F.a,
F.b([["Yes", F.e("Weight-based emergency treatment; call PICU and nephrology")], ["No", F.s("Continue")]]), F.a,
F.d("Shocked or dehydrated?"), F.a,
F.b([["Yes", F.s("10–20 mL/kg Ringer's lactate, reassess (SAM: WHO protocol)")], ["No — overloaded", F.s("Restrict to insensible + output; furosemide 1 mg/kg")]]), F.a,
F.d("Bloody diarrhoea, pallor, low platelets?"), F.a,
F.b([["Yes", F.e("HUS: film, LDH; no antimotility drugs; refer to a dialysing centre")], ["No", F.s("Urine dipstick: blood + protein → C3, ASO (PSGN?)")]]), F.a,
F.d("Boy with poor stream / palpable bladder / bilateral hydronephrosis?"), F.a,
F.b([["Yes", F.e("Drain bladder (feeding tube), urgent urology")], ["No", F.ok("Stop nephrotoxins, treat cause, daily weight and creatinine")]])])}
${F.chart("2 · Neonate at risk", [
F.s("Asphyxia, sepsis, birth weight under 1,500 g, PDA treatment, cardiac surgery"), F.a,
F.s("Monitor creatinine (no fall by day 7 = AKI) and urine output (under 1 mL/kg/h over 24 h)"), F.a,
F.d("Severe asphyxia?"), F.a,
F.b([["Yes", F.s("Consider single-dose theophylline (KDIGO draft, if available)")], ["No", F.s("Nephrotoxin review at 36–48 h")]]), F.a,
F.ok("AKI stage 2–3 or rising K⁺ → discuss with neonatal / paediatric nephrology early")])}
${F.chart("3 · Dialysis decision in a child", [
F.d("Refractory K⁺, acidosis, overload, uraemia — or fluid overload over 10–15% and rising?"), F.a,
F.b([["Yes", F.e("Start RRT: PD (fill 10–20 mL/kg, 60–90 min cycles) or CRRT (25–30 mL/kg/h)")], ["No", F.s("Medical treatment; reassess 6–12-hourly")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Always compare creatinine with the child's age.</b> 70 µmol/L is normal for an adult and may be stage 2 AKI in a toddler.</li>
<li><b>Weigh the child every day.</b> It is the single best fluid-balance tool.</li>
<li><b>Low C3 that normalises by 8 weeks is PSGN.</b> If it stays low, think of other diagnoses (C3 glomerulopathy, lupus).</li>
<li><b>A neonate's creatinine on day 1 belongs to the mother.</b> Look at the trend over the first week.</li>
<li><b>Dilute U-40 insulin</b> before drawing up 1–2 unit paediatric doses.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is dangerous", "Prevention"], [
["Treating an oliguric child with standard maintenance fluids", "Rapid overload", "Insensible losses + output only"],
["Using an adult BP cuff on a child", "Falsely low or high readings", "Cuff bladder width about 40% of arm circumference"],
["Loperamide or other antimotility drugs in bloody diarrhoea", "Increases HUS risk", "Avoid antimotility drugs in children"],
["Missing valves in a baby boy with UTI and poor stream", "Progressive kidney damage", "Ultrasound of bladder and kidneys in every infant boy with febrile UTI and abnormal stream"],
["Ibuprofen for fever in a dehydrated child", "Triggers AKI", "Paracetamol only"],
["Gentamicin continued after negative cultures in a neonate", "Nephro- and ototoxicity", "Antibiotic review at 36–48 h"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "How does the neonatal AKI definition differ from the child definition?", "The baseline is the lowest previous creatinine; the urine threshold is under 1 mL/kg/h over 24 h; and the 2026 draft adds failure of creatinine to fall from birth to day 7.")}
${qa("Student", "What does the bedside Schwartz equation use?", "eGFR = 0.413 × height (cm) ÷ creatinine (mg/dL), or 36.5 × height ÷ creatinine (µmol/L). Valid for stable creatinine in children aged 1–18 with enzymatic assays.")}
${qa("Intern/MO", "A 6-year-old has puffy eyes, cola urine and BP 140/95 two weeks after a sore throat. Diagnosis and key test?", "Post-streptococcal GN. Low C3 (normalises by 6–8 weeks), raised ASO or anti-DNase B. Treat with salt and fluid restriction, furosemide and a calcium-channel blocker.")}
${qa("Intern/MO", "Triad of HUS?", "Microangiopathic haemolytic anaemia (fragments, high LDH, Coombs-negative), thrombocytopenia, and AKI.")}
${qa("Specialist", "Why is the direct Coombs test useful in HUS?", "It is positive in pneumococcal HUS (neuraminidase exposes the T antigen). Plasma (which contains anti-T antibodies) should then be avoided.")}
${qa("Specialist", "What is the renal angina index and what score predicts severe AKI?", "Risk score (1, 3, 5) × injury score (1, 2, 4, 8) on day of PICU admission. 8 or more predicts severe AKI by day 3.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "A 14 kg child has K⁺ 7.4 mmol/L with peaked T waves. Calcium, salbutamol and insulin doses?", "Calcium gluconate 10% 0.68 mL/kg = 9.5 mL IV over 2–5 min; salbutamol 2.5 mg nebulised; glucose 10% 70 mL then soluble insulin 1.4 units IV (dilute U-40 to 1 unit/mL first).")}
${qa("Intern/MO", "How do you calculate fluids for an oliguric child?", "Insensible losses (about 300–400 mL/m²/day) plus urine output, adjusted for fever and weight change; recalculate every 6–12 h.")}
${qa("Intern/MO", "How is fluid overload % calculated?", "(Total fluid in − total fluid out, in litres) ÷ admission weight in kg × 100. Over 10% is significant; over 20% is strongly linked with mortality.")}
${qa("Specialist", "Initial PD prescription for a child with AKI?", "Fill 10–20 mL/kg, cycle 60–90 min, continuous for 24 h for the first 1–3 days, increasing volume and dwell as tolerated (KDIGO draft PP 5.12.3.3).")}
${qa("Specialist", "Initial CRRT dose for a child?", "Effluent 25–30 mL/kg/h by weight (not BSA), then adjust to metabolic control; net ultrafiltration up to 2.5 mL/kg/h.")}
${qa("Intern/MO", "Why avoid a Foley balloon in suspected posterior urethral valves?", "The balloon can cause bladder spasm and obstruct the ureteric orifices in a thick-walled bladder; a feeding tube drains well.")}
</div>
<div class="qgroup"><h3>Neonatal and viva</h3>
${qa("Specialist", "What prevents AKI after severe perinatal asphyxia?", "A single dose of theophylline (KDIGO 2026 draft, 1A), given within the first hour. Trials used 5–8 mg/kg IV.")}
${qa("Viva", "Why do NSAIDs for PDA cause AKI?", "The neonatal kidney depends on prostaglandin-mediated afferent dilatation; NSAIDs remove it.")}
${qa("Viva", "Why is anti-CFH-associated aHUS important in South Asia?", "It is unusually common in Indian children and responds to plasma exchange with immunosuppression, so recognising it changes treatment.")}
${qa("Intern/MO", "When should a child have follow-up after AKI?", "At 3 months for eGFR, urine protein, BP and growth; yearly for years after HUS needing dialysis or neonatal AKI.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">KDIGO AKI Work Group. KDIGO Clinical Practice Guideline for Acute Kidney Injury. <i>Kidney Int Suppl</i> 2012;2:1–138.</li>
<li id="ref-2">KDIGO 2027 AKI/AKD Guideline — <b>Public Review Draft, March 2026</b>: chapters 1.6, 2.6, 3.12, 5.12, 6.5 (children and neonates). Not final.</li>
<li id="ref-3">Kaddourah A et al. (AWARE) Epidemiology of acute kidney injury in critically ill children and young adults. <i>N Engl J Med</i> 2017;376:11–20. <a href="https://doi.org/10.1056/NEJMoa1611391" target="_blank" rel="noopener">doi:10.1056/NEJMoa1611391</a></li>
<li id="ref-4">Jetton JG et al. (AWAKEN) Incidence and outcomes of neonatal acute kidney injury. <i>Lancet Child Adolesc Health</i> 2017;1:184–194. <a href="https://doi.org/10.1016/S2352-4642(17)30069-X" target="_blank" rel="noopener">doi:10.1016/S2352-4642(17)30069-X</a></li>
<li id="ref-5">Susantitaphong P et al. World incidence of AKI: a meta-analysis. <i>Clin J Am Soc Nephrol</i> 2013;8:1482–1493.</li>
<li id="ref-6">Kliegman RM et al. <i>Nelson Textbook of Pediatrics</i>, 22nd ed. Elsevier, 2024 — chapters on acute kidney injury, HUS and glomerulonephritis (foundational; paraphrased). <b>Note:</b> the copies in the local library contain excerpts only; these chapters could not be checked page by page.</li>
<li id="ref-7">Akcan-Arikan A et al. Modified RIFLE criteria in critically ill children with AKI. <i>Kidney Int</i> 2007;71:1028–1035. <a href="https://doi.org/10.1038/sj.ki.5002231" target="_blank" rel="noopener">doi:10.1038/sj.ki.5002231</a></li>
<li id="ref-8">Royal Children's Hospital Melbourne. Clinical Practice Guideline: Hyperkalaemia (updated August 2024); Hypertension in children and adolescents (updated June 2021). rch.org.au/clinicalguide</li>
<li id="ref-9">Basu RK et al. Derivation and validation of the renal angina index. <i>Clin J Am Soc Nephrol</i> 2014;9:654–662.</li>
<li id="ref-10">Flynn JT et al. Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents. <i>Pediatrics</i> 2017;140:e20171904. <a href="https://doi.org/10.1542/peds.2017-1904" target="_blank" rel="noopener">doi:10.1542/peds.2017-1904</a></li>
<li id="ref-11">Maitland K et al. (FEAST) Mortality after fluid bolus in African children with severe infection. <i>N Engl J Med</i> 2011;364:2483–2495. <a href="https://doi.org/10.1056/NEJMoa1101549" target="_blank" rel="noopener">doi:10.1056/NEJMoa1101549</a></li>
<li id="ref-12">WHO. Pocket Book of Hospital Care for Children, 2nd ed. 2013.</li>
<li id="ref-13">ICMR STW Acute Kidney Injury, July 2026; Bhutan STG 2024 §6.6; Bhutan NEML 2025; Bhutan Hospital-based IMNCI 3rd ed. 2024.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Paediatric and neonatal definitions", "<span class='pass'>Verified</span>", "KDIGO 2012; KDIGO 2026 draft tables 12–13 read directly"],
["Paediatric emergency doses", "<span class='pass'>Verified</span>", "RCH Hyperkalaemia CPG (Aug 2024) read directly"],
["Antihypertensive doses", "<span class='pass'>Verified</span>", "AAP 2017 and RCH 2021"],
["Furosemide paediatric maximum", "<span class='flag'>Flagged</span>", "Caps differ between formularies; check local formulary"],
["Theophylline dose", "<span class='flag'>Flagged</span>", "KDIGO draft gives no dose; trial range shown"],
["Creatinine reference ranges", "<span class='flag'>Approximate</span>", "Use the local laboratory range"],
["Nelson chapters", "<span class='flag'>Not checked</span>", "Local copies contain excerpts only"],
["Images licensed", "<span class='pass'>Done</span>", "CC BY / CC BY-SA / public domain"]], "qc")}
` }
]
});
