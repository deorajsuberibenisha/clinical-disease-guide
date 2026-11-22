/* Acute Kidney Injury — adults */
registerPage({
id: "aki-adult",
title: "Acute Kidney Injury — Adults",
subtitle: "Recognition, causes, emergency care, dialysis decisions and follow-up in people aged 18 and over",
age: "Adults", specs: ["neph", "medicine", "emerg", "resp", "obg"],
keywords: ["AKI", "acute renal failure", "ARF", "ATN", "acute tubular necrosis", "oliguria", "anuria", "creatinine rise", "hyperkalaemia", "hyperkalemia", "dialysis", "KDIGO", "prerenal", "renal failure", "uraemia", "uremia", "contrast nephropathy", "rhabdomyolysis", "hepatorenal", "AKD"],
related: ["aki-child", "ckd-adult", "ckd-child"],
updated: "22 Nov 2026", review: "Nov 2027 (sooner when the KDIGO AKI/AKD guideline is final)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">AKI is a fall in kidney function over hours to days. It is common, it is often silent, and it is often caused or worsened by what we do in hospital. Most of it is preventable or reversible when caught early.</p>
<div class="glance">
<div><h4>What it is</h4><p>Creatinine up by ≥26.5 µmol/L (0.3 mg/dL) in 48 h, <i>or</i> to ≥1.5× baseline within 7 days, <i>or</i> urine under 0.5 mL/kg/h for 6 h.</p></div>
<div><h4>Who gets it</h4><p>The old, the septic, the dehydrated, people with CKD, diabetes or heart failure, and anyone on NSAIDs, ACE inhibitors/ARBs, diuretics, aminoglycosides or contrast.</p></div>
<div><h4>Red flags</h4><ul><li>K⁺ ≥6.5 mmol/L or ECG changes</li><li>Pulmonary oedema</li><li>pH under 7.20</li><li>Anuria (think obstruction or a vascular event)</li><li>Uraemic pericarditis, encephalopathy, bleeding</li></ul></div>
<div><h4>Key tests</h4><p>Creatinine against a baseline, potassium, gas, <b>urine dipstick and microscopy</b>, bladder scan, kidney ultrasound within 24 h if obstruction is possible.</p></div>
<div><h4>First hour</h4><ul><li>ABCDE; treat hyperkalaemia</li><li>Fluids if hypovolaemic, then reassess</li><li>Stop nephrotoxins</li><li>Catheter if retention</li><li>Treat sepsis</li></ul></div>
<div><h4>First-line drugs</h4><p>${dr("calcium_gluconate")} 30 mL IV (UKKA) for ECG changes; ${dr("insulin_glucose", "insulin 10 units + glucose 25 g")}; ${dr("furosemide")} only for overload.</p></div>
<div><h4>Refer / escalate</h4><p>Refractory K⁺, acidosis or overload; stage 3; suspected glomerulonephritis; no improvement in 48–72 h; AKI in a transplant patient.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Soluble insulin in Bhutan is <b>40 units/mL</b>: 10 units = 0.25 mL. Calcium polystyrene sulfonate is the only potassium binder on the NEML. Haemodialysis consumables are listed down to district hospitals with dialysis units; acute peritoneal dialysis fluid is <b>not</b> on the 2025 NEML.</p>`)}
` },

{ id: "overview", title: "Definition, causes and who is at risk", html: `
<h3>Definition</h3>
<p>KDIGO (2012) defines AKI as any one of the following.${r(1)}</p>
<ul><li>A rise in serum creatinine of <b>≥26.5 µmol/L (≥0.3 mg/dL) within 48 hours</b>.</li><li>A rise to <b>≥1.5 times baseline</b>, known or presumed to have happened within the previous 7 days.</li><li>Urine volume <b>&lt;0.5 mL/kg/h for 6 hours</b>.</li></ul>
<p>The 2026 KDIGO public-review draft keeps these criteria and adds <b>structural criteria</b>: a raised damage biomarker, or a 1.5-fold rise in cystatin C. It also introduces <b>acute kidney disease (AKD)</b> for abnormalities lasting up to 3 months.${r(2)} ${LB.draft()} The draft may still change.</p>
<p>The Bhutan STG (2024) uses the same 0.3 mg/dL rule.${r(3)} The ICMR India workflow (2026) mirrors KDIGO and stresses that urine criteria apply only after obstruction is excluded.${r(4)}</p>

<h3>The three places it goes wrong</h3>
${tbl(["Type", "What is happening", "Common examples"], [
["<b>Pre-renal</b> (haemodynamic)", "The kidney is normal but under-perfused. Tubules still work and hold on to salt and water.", "Vomiting and diarrhoea, bleeding, burns, sepsis, heart failure, cirrhosis, ACE inhibitor/ARB + diuretic + NSAID"],
["<b>Intrinsic</b> (renal)", "The kidney tissue itself is injured.", "<b>Tubules:</b> acute tubular injury from ischaemia, sepsis, aminoglycosides, contrast, myoglobin, haemoglobin, snake venom. <b>Interstitium:</b> drug-induced acute interstitial nephritis (PPIs, penicillins, NSAIDs). <b>Glomeruli:</b> post-infectious GN, lupus, ANCA vasculitis, anti-GBM. <b>Vessels:</b> TMA (HUS/TTP, malignant hypertension, pre-eclampsia)."],
["<b>Post-renal</b> (obstructive)", "Urine cannot drain. Back-pressure lowers GFR.", "Prostate enlargement, clot, stones in a single kidney, pelvic tumours (cervix, bladder), blocked catheter, retroperitoneal fibrosis"]])}
<p>In practice these overlap. Prolonged pre-renal AKI turns into tubular injury, and sepsis injures the kidney through inflammation and microcirculatory failure, not just low blood pressure.</p>

<h3>How common is it?</h3>
<ul>
<li>About <b>1 in 5 adults admitted to hospital</b> worldwide develop AKI (pooled analysis of 154 studies).${r(5)}</li>
<li>In intensive care the figure is far higher: 57% of ICU patients in the multinational AKI-EPI study.${r(6)}</li>
<li>The International Society of Nephrology's 0by25 analysis estimated about <b>13.3 million cases a year, roughly 85% in low- and middle-income countries</b>, and around 1.7 million deaths.${r(7)}</li>
<li>In South Asia much of it is <b>community-acquired</b> and affects young, previously healthy people: diarrhoeal illness, tropical infection, snakebite, obstetric complications and toxins.${r(7, 4)}</li>
<li><b>Bhutan:</b> no published national AKI incidence figure was found. ${LB.bt("EVIDENCE GAP")}</li>
</ul>

<h3>Causes to think of in Bhutan and South Asia</h3>
${tbl(["Group", "Causes", "Clue"], [
["Infection", "Sepsis, leptospirosis, scrub typhus, severe falciparum malaria, dengue, enteric fever, cholera", "Fever, myalgia, jaundice, eschar (scrub typhus), thrombocytopenia"],
["Volume loss", "Gastroenteritis, vomiting, heat illness, poor intake in the elderly, burns", "Dry, tachycardic, postural drop"],
["Envenomation and toxins", "Viper bite, wasp/hornet stings (multiple), <b>wild mushroom poisoning</b>, traditional or herbal remedies, organic solvents, paraquat", "History is everything; ask specifically"],
["Medicines", "NSAIDs, ACE inhibitors/ARBs, diuretics, gentamicin and amikacin, vancomycin, aciclovir, amphotericin, tenofovir, cotrimoxazole, PPIs (AIN), contrast", "Recent new drug, over-the-counter painkillers"],
["Obstetric", "Septic abortion, postpartum haemorrhage, pre-eclampsia/HELLP, acute fatty liver of pregnancy, hyperemesis", "Pregnant or recently delivered"],
["Muscle and blood", "Rhabdomyolysis (crush, prolonged lie, seizures, heat stroke, statins), haemolysis (G6PD deficiency with drugs or infection, malaria)", "Dark or cola urine; dipstick blood positive but no red cells on microscopy"],
["Obstruction", "Prostate, stones, pelvic malignancy, neurogenic bladder", "Anuria, palpable bladder, loin pain"]])}
${box("bt", "Bhutan note", `<p>Wild mushroom poisoning is a recognised seasonal problem in Bhutan. Amatoxin-containing species cause delayed GI symptoms (6–24 h), then liver failure and AKI. Ask every patient with unexplained AKI in the monsoon months. ${LB.loc()}</p>`)}

<h3>Risk factors and why they matter</h3>
${tbl(["Risk factor", "Why it raises risk"], [
["Age over 65", "Fewer nephrons, stiffer vessels, less ability to autoregulate and concentrate urine; low muscle mass hides a falling GFR"],
["Chronic kidney disease", "Less reserve: the same insult removes a larger share of remaining function"],
["Diabetes", "Microvascular disease, more contrast and drug exposure, often on RAS blockers and SGLT2 inhibitors"],
["Heart failure, cirrhosis", "Low effective arterial volume: the kidney already depends on angiotensin II and prostaglandins"],
["Sepsis", "Inflammatory and microvascular injury independent of blood pressure"],
["Major surgery, especially cardiac", "Bypass, haemodilution, haemolysis, hypotension"],
["Nephrotoxic drugs", "Directly injure tubules, or remove the kidney's protective haemodynamic responses"],
["Previous AKI", "Each episode leaves less reserve and raises the risk of the next"]])}

<h3>The physiology you need</h3>
<p>The kidneys receive about 20–25% of cardiac output but weigh under 1% of body mass. Most of that flow goes to the cortex. The medulla runs close to hypoxia even in health, which is why tubular cells in the outer medulla (the S3 segment and thick ascending limb) are the first to suffer.</p>
<p>GFR is protected across a range of blood pressures by <b>autoregulation</b>: the afferent arteriole dilates (prostaglandins) and the efferent arteriole constricts (angiotensin II). That explains the classic \"triple whammy\". NSAIDs block afferent dilatation, ACE inhibitors/ARBs block efferent constriction, and a diuretic lowers volume, so GFR collapses. In chronic hypertension the autoregulation curve shifts to the right, so a \"normal\" BP may under-perfuse that patient's kidneys.</p>
<p>Creatinine is a <b>late and lagging</b> marker. It rises only after GFR has fallen substantially and takes 24–48 hours to show it. Even complete loss of GFR raises creatinine by only about 90–180 µmol/L (1–2 mg/dL) per day in an average adult.</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How acute kidney injury develops", [
F.s("<b>Insult</b>: low perfusion, sepsis, toxins, obstruction"), F.a,
F.b([
["Pre-renal", F.s("Hypovolaemia, shock, heart failure, NSAID + ACE inhibitor + diuretic"), F.s("Kidney under-perfused but structurally normal; tubules still conserve salt")],
["Intrinsic", F.s("Ischaemia, sepsis, nephrotoxins, myoglobin, GN, interstitial nephritis"), F.s("Tubular cells lose energy, slough into casts; inflammation spreads")],
["Post-renal", F.s("Prostate, stones, pelvic tumour, blocked catheter"), F.s("Back-pressure reduces filtration")]]), F.a,
F.s("<b>GFR falls</b>: tubular obstruction, back-leak of filtrate, afferent vasoconstriction (tubuloglomerular feedback)"), F.a,
F.d("What builds up?"), F.a,
F.b([
["Salt and water", F.e("Oedema, pulmonary oedema, hypertension")],
["Potassium and acid", F.e("Hyperkalaemia, metabolic acidosis")],
["Toxins and drugs", F.e("Uraemia; drug accumulation")]]), F.a,
F.ok("Repair over 1–3 weeks → recovery, or incomplete repair → AKD → CKD")])}
<h3>How ischaemic and septic tubular injury develops</h3>
<ol class="chain">
<li><b>Trigger.</b> Low perfusion, sepsis, or a toxin reaches the kidney.</li>
<li><b>Energy failure in tubular cells.</b> The thick ascending limb and proximal straight tubule have high oxygen demand and the least oxygen supply. ATP falls and the cells lose polarity: Na⁺/K⁺-ATPase moves away from the basolateral membrane.</li>
<li><b>Cells die or detach.</b> Injured cells slough into the lumen and form casts (the \"muddy brown\" granular casts you see on microscopy).</li>
<li><b>GFR falls by three routes.</b> Casts obstruct tubules. Filtrate leaks back through the damaged epithelium. More sodium reaches the macula densa, which triggers <i>tubuloglomerular feedback</i> and constricts the afferent arteriole.</li>
<li><b>Inflammation spreads the injury.</b> Endothelial damage, leukocyte adhesion and microvascular congestion in the outer medulla extend it beyond the first insult. In sepsis this inflammatory and microcirculatory injury may happen with normal or even high total renal blood flow.</li>
<li><b>Consequences.</b> Salt and water retention (oedema, hypertension, pulmonary oedema). Potassium and acid build up (hyperkalaemia, metabolic acidosis). Urea and other toxins accumulate (uraemia). Drug clearance falls (toxicity).</li>
<li><b>Repair or maladaptive repair.</b> Surviving tubular cells dedifferentiate, proliferate and re-line the tubule over 1–3 weeks. Incomplete repair leaves fibrosis and capillary rarefaction, the bridge from AKI to CKD.</li></ol>

<h3>Natural history</h3>
${tbl(["Phase", "What you see", "What to do"], [
["Initiation (hours–days)", "Rising creatinine, falling urine output", "Find and reverse the cause; this is the window where you can prevent progression"],
["Maintenance (days–weeks)", "GFR stays low; oliguria in some; complications", "Supportive care, avoid further hits, RRT if needed"],
["Recovery", "Urine output rises, sometimes to a polyuric phase (several litres a day)", "Replace losses, watch K⁺, Na⁺, Mg²⁺ and PO₄³⁻ fall; reintroduce medicines carefully"],
["After recovery", "Creatinine may settle above the old baseline", "Follow-up at about 3 months to check for CKD"]])}
<p>The 2026 KDIGO draft calls AKI lasting <b>48 hours or less transient</b>, and AKI lasting <b>more than 48 hours to 7 days persistent</b>. Kidney dysfunction continuing from 7 days to 3 months is <b>AKD</b>, and after 3 months it is CKD.${r(2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
<p>Below are the real points of disagreement, shown side by side rather than blended. Where the newer KDIGO draft differs from the 2012 guideline, it reflects trials published since 2012. It is not final, so both are shown.</p>
${tbl(["Topic", "KDIGO 2012 (current published)", "KDIGO 2026 AKI/AKD draft", "Other guidance", "What this guide recommends and why"], [
["Fluid type", "Isotonic crystalloid rather than colloid (2B); no preference between saline and buffered", "<b>Buffered crystalloid over 0.9% saline</b> (1B), except in traumatic brain injury", "—", "Use <b>Ringer's lactate (compound sodium lactate, on the Bhutan NEML)</b> for resuscitation. It avoids hyperchloraemic acidosis; SMART (2018) showed fewer major adverse kidney events. Use saline in head injury and hyponatraemia. " + LB.int() + ""],
["Glucose target in critical illness", "110–149 mg/dL (6.1–8.3 mmol/L) (2C)", "140–180 mg/dL (7.8–10 mmol/L) is acceptable", "—", "<b>7.8–10 mmol/L.</b> Tighter control increased hypoglycaemia and mortality (NICE-SUGAR)."],
["Preventing contrast AKI", "IV isotonic saline or bicarbonate (1A); oral N-acetylcysteine (2D)", "<b>Saline</b> over bicarbonate, hypotonic fluid or nothing in high-risk adults (1B); NAC not shown to help", "ACR–NKF 2020: prophylactic fluids for eGFR under 30 (IV contrast)", "<b>Saline only, for high-risk patients.</b> The PRESERVE trial (2018, 5,177 patients) found no benefit from bicarbonate or NAC."],
["When to start dialysis", "\"Emergently when life-threatening changes exist\"; consider trends rather than single values", "<b>Deferred strategy</b> preferred over early pre-emptive RRT (1C)", "ICMR 2026: refractory acidosis, K⁺ or overload; uraemic complications; intoxication", "<b>Start for a clear indication, not a number.</b> STARRT-AKI (2020) found no survival benefit from early starts and more long-term dialysis dependence."],
["Calcium dose for hyperkalaemia", "Not specified", "Not specified", "UKKA 2026: <b>30 mL</b> 10% calcium gluconate over 10 min, for ECG changes only · ICMR 2026: <b>10 mL</b>, repeat up to 3 times", "<b>Give 30 mL</b> (or 10 mL repeated with ECG review if supply is limited). 10 mL delivers only about 2.2 mmol of calcium and often fails to reverse ECG changes. " + LB.exp("PANEL VIEW") + ""],
["Holding ACE inhibitors/ARBs", "—", "Do not routinely hold RAS inhibitors before contrast (2C) or elective major surgery (2B/2D); do stop during volume-depleting illness (2D)", "Bhutan STG: avoid nephrotoxic drugs", "Stop them <b>during</b> AKI and sick days; do not stop them reflexively before a CT scan."],
["Role of dialysis in Bhutan STG", "—", "—", "Bhutan STG 2024: \"Dialysis for hyperkalemia and pulmonary oedema\"", "Treat hyperkalaemia and overload medically first, and refer for dialysis if this fails. The STG summary is brief and is not meant to skip medical treatment. " + LB.loc() + ""]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Many patients have no symptoms at all: AKI is found on a blood test. When symptoms appear they come from the cause, from fluid, or from toxins.</p>
${tbl(["Symptom or sign", "Mechanism", "What it tells you"], [
["Reduced urine output", "Falling GFR; in pre-renal states, avid salt and water retention", "Oliguria is under 400 mL/day; <b>anuria</b> (under 100 mL/day) suggests obstruction, a vascular event or cortical necrosis"],
["Thirst, dizziness, postural drop, dry mucosa", "Volume depletion", "Pre-renal; fluids will help"],
["Oedema, raised JVP, crackles, breathlessness", "Salt and water retention, or heart failure", "Overload; fluids will harm"],
["Nausea, vomiting, anorexia, hiccups", "Uraemic toxins act on the GI tract and brainstem", "Usually urea above about 30–40 mmol/L"],
["Confusion, drowsiness, asterixis, seizures", "Uraemic encephalopathy, hyponatraemia, drug accumulation", "An urgent dialysis indication if uraemic"],
["Chest pain with a pericardial rub", "Uraemic pericarditis", "An urgent dialysis indication"],
["Palpitations, weakness, collapse", "Hyperkalaemia", "Get an ECG now"],
["Deep sighing breathing (Kussmaul)", "Metabolic acidosis", "Check a gas"],
["Rash, fever, arthralgia", "AIN (drug), vasculitis, lupus, infection", "Look at the urine for blood and protein"],
["Haemoptysis", "Pulmonary-renal syndrome (ANCA, anti-GBM) or leptospirosis", "Emergency"],
["Loin pain, palpable bladder", "Obstruction, pyelonephritis, renal vein thrombosis", "Bladder scan and ultrasound"]])}

${box("red", "Red flags — act now", `<ul><li>K⁺ ≥6.5 mmol/L, or any ECG change of hyperkalaemia</li><li>Pulmonary oedema or SpO₂ falling despite oxygen</li><li>pH under 7.20, or bicarbonate under 12 mmol/L</li><li>Complete anuria</li><li>Pericardial rub, reduced consciousness, uraemic bleeding</li><li>Haemoptysis with AKI (pulmonary-renal syndrome)</li><li>Rapidly rising creatinine with active urine sediment (blood ++ and protein): possible rapidly progressive GN</li><li>AKI with fever and thrombocytopenia (leptospirosis, scrub typhus, malaria, dengue, TMA)</li></ul>`)}

<h3>Atypical presentations</h3>
<ul>
<li><b>Older people</b> present with confusion, falls or general decline. Low muscle mass means a creatinine of 90 µmol/L may already be a 50% loss of function.</li>
<li><b>Non-oliguric AKI</b> is common with aminoglycosides, contrast and leptospirosis. Normal urine output does not exclude AKI.</li>
<li><b>Leptospirosis</b> classically causes non-oliguric AKI with <b>hypokalaemia</b> (a proximal tubular leak), unlike most AKI.</li>
<li><b>Rhabdomyolysis</b> may present with only weakness and dark urine; the dipstick shows \"blood\" but microscopy shows no red cells.</li>
<li><b>Pregnancy:</b> normal creatinine falls to about 35–70 µmol/L, so a \"normal\" 90 µmol/L is abnormal in pregnancy.</li>
</ul>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
<p>The real question is not \"is it AKI?\" but \"<b>which AKI, and is anything hiding behind it?</b>\"</p>
${tbl(["Diagnosis", "Supports", "Argues against", "Key distinguishing feature", "Best test to separate"], [
["Pre-renal AKI", "Volume loss, hypotension, bland urine, FeNa under 1%", "Casts, blood or protein in urine; no response to fluid", "Recovers within 24–72 h of restoring perfusion", "Response to a fluid challenge; urine microscopy"],
["Acute tubular injury (ATN)", "Prolonged shock, sepsis, toxins; muddy brown casts", "Rapid recovery with fluids", "Granular casts and tubular cells; FeNa over 2%", "Urine microscopy"],
["Acute interstitial nephritis", "New drug (PPI, penicillin, NSAID); rash, fever, eosinophilia; sterile pyuria, white cell casts", "Absence of fever and rash does not exclude (often absent)", "White cells in urine without infection", "Kidney biopsy (definitive); urine eosinophils have low sensitivity"],
["Rapidly progressive glomerulonephritis", "Haematuria with dysmorphic red cells, red cell casts, proteinuria, hypertension, systemic features", "Bland sediment", "Active sediment", "ANCA, anti-GBM, ANA, dsDNA, complement C3/C4, ASO; <b>urgent biopsy</b>"],
["Obstruction", "Elderly man, prostate symptoms, pelvic cancer, anuria, palpable bladder", "Normal ultrasound (but early obstruction or retroperitoneal fibrosis can be missed)", "Hydronephrosis", "Bladder scan, kidney ultrasound"],
["Rhabdomyolysis", "Crush, immobility, seizures, heat; CK very high; dipstick blood without red cells", "Normal CK", "CK usually over 5,000 U/L with high risk above that", "CK, urine myoglobin"],
["Thrombotic microangiopathy", "Anaemia, low platelets, fragments on film, high LDH; diarrhoea (HUS), pregnancy, malignant hypertension", "Normal film and platelets", "Microangiopathic haemolysis", "Blood film, LDH, haptoglobin, ADAMTS13 (referral)"],
["Myeloma cast nephropathy", "Older adult, anaemia, bone pain, hypercalcaemia, high globulin", "Normal protein electrophoresis and light chains", "Dipstick negative but urine PCR high (light chains)", "Serum free light chains, electrophoresis"],
["Hepatorenal syndrome", "Cirrhosis with ascites, low urine sodium, bland sediment", "Shock, nephrotoxins, structural injury", "No response to albumin volume expansion", "ICA criteria; response to albumin"],
["Cardiorenal syndrome", "Heart failure, high venous pressure", "Low JVP", "Creatinine improves with decongestion", "Echo, clinical response to diuresis"],
["Acute-on-chronic (unknown CKD)", "Small kidneys, anaemia, high phosphate, long history", "Normal-sized kidneys with no prior history", "Kidney length under about 9 cm with thin cortex", "Ultrasound, old results"],
["<b>Pseudo-AKI</b> (creatinine rises but GFR is unchanged)", "Trimethoprim, cimetidine, dolutegravir, cobicistat block creatinine secretion; creatine supplements; ketoacidosis with Jaffe assay", "Urea and urine output unchanged", "Urea stable, cystatin C unchanged", "Cystatin C; review drugs"]])}
<h3>The typical patient</h3>
<p>Picture an older man with vomiting and diarrhoea for three days who is on an ACE inhibitor, a diuretic and an over-the-counter painkiller. He arrives dry and hypotensive, with creatinine 260 µmol/L (baseline 100) and a bland urine dipstick. This is most likely <b>pre-renal AKI, possibly evolving into tubular injury</b>. The reasoning: a clear volume insult, three drugs that remove autoregulation, and urine without blood or protein. Still scan his bladder: older men also have prostates.</p>
${box("amber", "Don't exclude on one missing feature", `<p>AIN often has no rash and no eosinophilia. Obstruction can occur with normal urine output (partial obstruction) and without hydronephrosis (very early, or retroperitoneal fibrosis). Vasculitis can present with AKI alone.</p>`)}
` },

{ id: "invest", title: "Investigations", html: `
<p>Investigations answer four questions in order. Is it AKI and how bad is it? Is it dangerous right now? Where is the problem? Is there a specific cause that needs specific treatment?</p>
<div class="calc" data-calc="akistage"></div>
<h3>Bedside</h3>
${tbl(["Test", "Why", "Expected finding", "Value and limits", "Priority"], [
["Fluid balance chart, hourly urine output", "Urine criteria and response to treatment", "Under 0.5 mL/kg/h", "Only accurate with a catheter, but catheters bring infection: catheterise only when you need hourly data or there is retention", "Essential"],
["<b>Urine dipstick</b> (before catheter if possible)", "Glomerular or interstitial clues", "Blood ++ and protein ++ in GN; leukocytes in AIN or infection; blood without red cells in rhabdomyolysis or haemolysis", "Cheap and immediate; many false positives (catheter trauma, menstruation)", "Essential"],
["Bladder scan, or palpation and catheter", "Retention", "Residual over about 300 mL", "Bladder scan may be unavailable in smaller hospitals; a urinary catheter is diagnostic and therapeutic", "Essential"],
["ECG", "Hyperkalaemia effects", "Peaked T, flat or absent P, wide QRS, sine wave", "ECG can be normal even at a very high K⁺, so treat the number too", "Essential"],
["POCUS", "Volume status, bladder, hydronephrosis, effusions, lung B-lines", "IVC, lung, cardiac views", "Operator-dependent", "Recommended where available"]])}

<h3>Blood tests</h3>
${tbl(["Test", "Why", "Expected finding", "Value and limits", "Priority"], [
["Creatinine and urea, compared with a <b>baseline</b>", "Define and stage AKI", "Rise from baseline", "Lags behind GFR; affected by muscle mass. Hierarchy for baseline (KDIGO draft): a stable outpatient value from 8–365 days before admission, then the lowest in-hospital value", "Essential"],
["Sodium, <b>potassium</b>, bicarbonate, chloride", "Danger and acid–base", "High K⁺, low HCO₃⁻", "A haemolysed sample gives false high K⁺: repeat, but treat if ECG changes", "Essential"],
["Blood gas (venous is enough)", "pH and lactate", "Metabolic acidosis", "Arterial only if oxygenation is also needed", "Essential if unwell"],
["Full blood count and film", "Infection, TMA, haemolysis", "Low platelets with fragments in TMA; low platelets in leptospirosis, dengue, malaria, scrub typhus", "Film needs an experienced reader", "Essential"],
["Calcium, phosphate, magnesium, uric acid", "Complications; TLS", "Low Ca, high PO₄, high urate in TLS and rhabdomyolysis", "—", "Recommended"],
["CK", "Rhabdomyolysis", "Often over 5,000 U/L", "Peaks at 24–72 h", "Recommended if suspected"],
["LDH, bilirubin, haptoglobin, reticulocytes", "Haemolysis or TMA", "High LDH, low haptoglobin", "—", "If anaemia or low platelets"],
["Liver tests, albumin, INR", "Hepatorenal, leptospirosis, mushroom poisoning, sepsis", "—", "—", "Recommended"],
["Blood cultures, CRP", "Sepsis", "—", "Take before antibiotics, without delaying them", "If febrile"],
["Tropical screen", "Specific treatable causes", "Malaria RDT/film, dengue NS1/IgM, leptospira IgM, scrub typhus IgM", "Serology is often negative in week 1: treat on clinical suspicion", "If febrile or endemic exposure"],
["Glomerular screen", "Rapidly progressive GN", "ANCA, anti-GBM, ANA, anti-dsDNA, C3/C4, ASO, hepatitis B and C, HIV", "Many need referral to a central lab", "If blood and protein in urine"],
["Protein electrophoresis, serum free light chains", "Myeloma", "Paraprotein", "Free light chains not available in most centres", "Age over 50 with unexplained AKI"],
["Cystatin C", "GFR when creatinine is unreliable (low muscle mass, cirrhosis, amputees)", "—", "KDIGO draft suggests it where creatinine is less accurate (2B). Limited availability", "Optional"]])}

<h3>Urine tests</h3>
${tbl(["Test", "What it shows", "Interpretation"], [
["<b>Urine microscopy</b> (fresh sample, by a trained eye)", "Casts and cells", "Muddy brown granular casts and tubular cells mean tubular injury. Red cell casts and dysmorphic red cells mean GN. White cell casts mean AIN or pyelonephritis. Suggested in adults with AKI (KDIGO draft Rec 2.5.1, 2D)."],
["Urine sodium and FeNa", "Tubular sodium handling", "FeNa = (U<sub>Na</sub> × P<sub>Cr</sub>) ÷ (P<sub>Na</sub> × U<sub>Cr</sub>) × 100. Under 1% suggests pre-renal; over 2% suggests tubular injury. <b>Unreliable after diuretics</b>, in CKD, and in contrast or myoglobin injury (both can give a low FeNa). The KDIGO draft says reserve it for selected cases."],
["Fractional excretion of urea", "Use when on diuretics", "Under 35% suggests pre-renal"],
["Urine albumin- or protein-to-creatinine ratio", "Glomerular disease, myeloma", "Heavy proteinuria suggests a glomerular cause; a high PCR with a negative dipstick suggests light chains"],
["Urine culture", "Infection", "If pyuria or fever"]])}

<h3>Imaging</h3>
${tbl(["Test", "Why", "Expected finding", "Value and limits", "Priority"], [
["<b>Kidney and bladder ultrasound</b>", "Obstruction; size and shape", "Hydronephrosis; small echogenic kidneys suggest CKD; asymmetry suggests renovascular disease", "Within 24 h if obstruction is suspected and the cause is unknown; urgently if pyonephrosis (infected obstructed kidney) is possible. Not needed routinely when the cause is obvious (e.g. clear-cut sepsis with normal bladder)", "Essential in most"],
["Chest X-ray", "Pulmonary oedema, pneumonia, pulmonary haemorrhage", "Alveolar shadowing, effusions", "—", "Recommended"],
["Doppler", "Renal artery or vein thrombosis, transplant", "Absent flow", "Operator-dependent", "If suspected"],
["CT without contrast", "Stones, retroperitoneal disease", "—", "Avoid contrast unless it changes management", "Selected"]])}
<h3>Kidney biopsy</h3>
<p>The reference standard for intrinsic disease, but not a routine test. Consider it when the cause is unclear and the result would change treatment: suspected RPGN, AIN, or AKI not recovering after 2–3 weeks.${r(2)} ICMR advises contrast CT to look for cortical necrosis, then biopsy, if AKI has not resolved after 2 weeks.${r(4)} In Bhutan, biopsy needs referral to the national referral hospital or abroad. ${LB.bt()}</p>
<p><b>Is there a gold standard?</b> Not for AKI as a syndrome: it is defined by creatinine and urine output, which are surrogates. For specific causes, biopsy (glomerular or interstitial) and imaging (obstruction) act as reference standards.</p>
` },

{ id: "staging", title: "Staging, severity and escalation", html: `
<h3>KDIGO staging (use whichever criterion gives the higher stage)</h3>
${tbl(["Stage", "Serum creatinine", "Urine output"], [
["1", "1.5–1.9 × baseline <i>or</i> rise ≥26.5 µmol/L (≥0.3 mg/dL)", "Under 0.5 mL/kg/h for 6–12 h"],
["2", "2.0–2.9 × baseline", "Under 0.5 mL/kg/h for 12 h or more"],
["3", "3.0 × baseline <i>or</i> ≥353.6 µmol/L (≥4.0 mg/dL) <i>or</i> starting RRT", "Under 0.3 mL/kg/h for 24 h or more, <i>or</i> anuria for 12 h or more"]])}
<p>The 2026 KDIGO draft keeps these stages, labels them C1–C3 (creatinine) and U1–U3 (urine), and adds B0/B1 for a negative or positive tubular damage biomarker.${r(2)} ${LB.draft()} Biomarkers such as urine NGAL and TIMP-2×IGFBP7 are not available in Bhutan.</p>
<h3>Resolution (KDIGO 2026 draft)</h3>
<p><b>Complete:</b> creatinine under 1.2 × baseline within 7 days. <b>Partial:</b> 1.2 to under 1.5 × baseline. If neither, it has become AKD.</p>
<h3>Older systems you will meet</h3>
<p><b>RIFLE (2004)</b> and <b>AKIN (2007)</b> were merged into KDIGO. Stage 1 ≈ RIFLE \"Risk\" and AKIN 1, stage 2 ≈ \"Injury\", stage 3 ≈ \"Failure\".</p>
<h3>Scores and tests that predict progression</h3>
${tbl(["Tool", "What it predicts", "Limits"], [
["<b>Furosemide stress test</b>", "Under 200 mL urine in 2 h after furosemide 1 mg/kg (loop-naïve) or 1.5 mg/kg predicts progression to stage 3 / RRT", "Only in euvolaemic or hypervolaemic patients; replace urine losses to avoid hypovolaemia; suggested by KDIGO draft (adults 2C)"],
["Kinetic eGFR", "GFR when creatinine is not in steady state", "Needs serial creatinine values; KDIGO draft suggests it (2B)"],
["Validated risk models", "AKI risk after surgery, contrast, or in the community", "Need local validation; simplified scores are acceptable in low-resource settings (KDIGO draft PP 2.1.1)"]])}
<h3>Admit to HDU/ICU or escalate when</h3>
<ul><li>Hyperkalaemia with ECG changes, or not responding to treatment</li><li>Pulmonary oedema needing more than simple oxygen</li><li>Shock needing vasopressors</li><li>pH under 7.20</li><li>Reduced consciousness</li><li>Stage 3 AKI with no clear sign of recovery</li><li>Multi-organ failure (leptospirosis, falciparum malaria, sepsis)</li></ul>
<h3>Refer to a nephrologist when</h3>
<ul><li>Any indication for RRT, or high probability of needing it soon (plan before the emergency: KDIGO draft PP 5.1.2)</li><li>Suspected GN, vasculitis, AIN, TMA or myeloma</li><li>AKI not improving after 48–72 h despite correcting the cause</li><li>AKI in a kidney transplant recipient</li><li>AKI on CKD G4–G5</li></ul>
${box("bt", "Bhutan referral reality", `<p>Haemodialysis and nephrology care are concentrated at the national and regional referral hospitals, with some district hospitals running dialysis units. Call before transfer. Correct potassium and stabilise the airway and circulation before a long road journey: hyperkalaemia and pulmonary oedema are what kill patients in the ambulance. ${LB.loc()}</p>`)}
` },

{ id: "manage", title: "Management", html: `
<h3>A. First minutes: stabilise</h3>
<ol>
<li><b>Airway and breathing.</b> Oxygen to SpO₂ 94–98% (88–92% in COPD with CO₂ retention). Pulmonary oedema: sit up, oxygen, CPAP if available, IV ${dr("furosemide")} if any urine is being made, and prepare for dialysis if it fails.</li>
<li><b>Circulation.</b> Assess volume: capillary refill, JVP, lung bases, postural BP, POCUS. If hypovolaemic, give <b>500 mL of buffered crystalloid</b> (Ringer's lactate) over 15 minutes and reassess after each bolus. Stop when perfusion improves or signs of overload appear. If BP stays low after adequate fluid, start ${dr("noradrenaline")} aiming for MAP above 65 mmHg (higher if chronically hypertensive).${r(2)}</li>
<li><b>Potassium.</b> Treat now (see box below).</li>
<li><b>Disability.</b> Glucose; consciousness (uraemia, hyponatraemia, drugs).</li>
<li><b>Exposure.</b> Rash, eschar (scrub typhus), bites, compartment syndrome (rhabdomyolysis), bladder.</li>
<li><b>Monitoring.</b> Strict fluid balance, daily weight, urine output (hourly if critically ill), creatinine and electrolytes daily (12-hourly if K⁺ is high or rising).</li></ol>

${box("red", "Emergency hyperkalaemia (adults)", `<p><b>Severity (UKKA):</b> mild 5.5–5.9 · moderate 6.0–6.4 · severe ≥6.5 mmol/L.</p>
<ol><li><b>Protect the heart</b> if the ECG shows changes: ${dr("calcium_gluconate")} 10%, <b>30 mL IV over 10 min</b> (ICMR uses 10 mL over 2–5 min, repeatable up to 3 times). Repeat the ECG; repeat the dose if changes persist.</li>
<li><b>Shift potassium into cells:</b> ${dr("insulin_glucose", "soluble insulin 10 units with 25 g glucose")} IV over 15 min (e.g. 50 mL of 50% dextrose). <b>Bhutan: 10 units = 0.25 mL of 40 units/mL insulin.</b> If pre-treatment glucose is under 7 mmol/L, follow with 10% glucose 50 mL/h for 5 h. Check glucose for 6 h.</li>
<li><b>Add</b> ${dr("salbutamol")} 10–20 mg nebulised (avoid or reduce if ischaemic heart disease or tachyarrhythmia).</li>
<li><b>Bicarbonate</b> only if acidotic: ${dr("sodium_bicarbonate")} IV, separate line from calcium.</li>
<li><b>Remove potassium:</b> ${dr("polystyrene")} 15 g orally 3–4 times daily if no newer binder is available (slow and unreliable; UKKA 2026 no longer recommends it routinely); diuretics if passing urine and not dry; <b>dialysis</b> if refractory.</li>
<li><b>Stop</b> potassium supplements, ACE inhibitors/ARBs, spironolactone, trimethoprim, NSAIDs, heparin; check IV fluids for added K⁺.</li>
<li>Recheck K⁺ at 1, 2, 4, 6 and 24 hours. Shift therapy wears off within hours: if the cause persists, K⁺ will come back.</li></ol>`)}

<h3>B. Find and fix the cause</h3>
<ul>
<li><b>Hypovolaemia:</b> fluid as above. Oral rehydration is a valid choice where IV fluid is not possible or practical (KDIGO draft PP 3.1.1).</li>
<li><b>Sepsis:</b> antibiotics within 1 hour of recognising septic shock, source control, fluids, vasopressors. Choose antibiotics that spare the kidney where possible; if an aminoglycoside is essential, give a <b>single daily dose</b> and check levels.</li>
<li><b>Obstruction:</b> urinary catheter for bladder outlet obstruction. Upper tract obstruction needs urology (nephrostomy or stent), urgently if infected. Expect <b>post-obstructive diuresis</b> (over 200 mL/h): replace about half to two-thirds of output, and check sodium and potassium 6–12-hourly.</li>
<li><b>Nephrotoxins:</b> stop or replace (see the medicines section). Ask a pharmacist to review all drugs (KDIGO draft PP 4.3.1).</li>
<li><b>Rhabdomyolysis:</b> early, generous isotonic crystalloid (KDIGO draft PP 3.8.1). Many units aim for urine output around 200–300 mL/h in adults while watching closely for overload; bicarbonate and mannitol have no proven benefit. ${LB.exp()}</li>
<li><b>Tumour lysis:</b> IV crystalloids without alkalinisation; rasburicase over allopurinol if high risk and G6PD is normal (KDIGO draft Rec 3.7.1, 1B). Rasburicase is not on the Bhutan NEML; allopurinol is.</li>
<li><b>Hepatorenal AKI:</b> stop diuretics and nephrotoxins; albumin 1 g/kg (max 100 g) daily for 2 days; if no response, vasoconstrictor with albumin: terlipressin or noradrenaline (KDIGO draft Rec 3.6.1, 1C).${r(14)}</li>
<li><b>Tropical infections:</b> leptospirosis and scrub typhus: doxycycline 100 mg twice daily, or IV doxycycline / ceftriaxone / penicillin if severe; azithromycin in pregnancy. Severe falciparum malaria: IV artesunate. Snakebite: antivenom by local protocol.</li>
<li><b>Suspected RPGN or vasculitis:</b> urgent nephrology referral; immunosuppression should not wait for transfer when pulmonary haemorrhage is present.</li></ul>

<h3>C. Supportive care while the kidney recovers</h3>
<ul>
<li><b>Fluids:</b> once resuscitated, match input to output plus insensible losses (about 500–800 mL/day in a temperate climate, more with fever). Positive fluid balance is independently linked with death in AKI.</li>
<li><b>Diuretics:</b> only for clinically significant overload (KDIGO draft Rec 3.3.1, 2B). Prefer intermittent IV boluses at first. Diuretics are preferred over extracorporeal fluid removal when there is no other RRT indication (Rec 3.3.2, 1C). Never use them to \"convert\" oliguria.</li>
<li><b>No low-dose dopamine</b> (KDIGO 1A, unchanged in the draft).</li>
<li><b>Glucose</b> 7.8–10 mmol/L in critical illness.</li>
<li><b>Nutrition:</b> enteral feeding preferred; do not restrict protein to delay dialysis (draft PP 3.9.2). KDIGO 2012 targets: 20–30 kcal/kg/day; protein 0.8–1.0 g/kg/day without RRT, 1.0–1.5 g/kg/day on RRT, up to 1.7 g/kg/day on CRRT or if hypercatabolic.</li>
<li><b>Drugs:</b> dose by trend in creatinine and urine output, not by an eGFR equation (eGFR is invalid when creatinine is changing: draft PP 4.5.1). Avoid morphine (its active metabolite accumulates) and prefer fentanyl. Use half-dose or avoid LMWH; use unfractionated heparin when anticoagulation is needed.</li>
<li><b>Metabolic acidosis:</b> IV bicarbonate for pH under 7.20 if there is no other urgent RRT indication (draft Rec 3.1.3, 2C).</li>
<li><b>GI protection:</b> uraemia raises bleeding risk; consider a PPI if critically ill, remembering PPIs can cause AIN.</li></ul>

<h3>D. Kidney replacement therapy (dialysis)</h3>
${tbl(["Indication (refractory to medical treatment)", "Practical threshold"], [
["Hyperkalaemia", "K⁺ ≥6.5 mmol/L or ECG changes despite medical treatment, or rapidly rising"],
["Metabolic acidosis", "pH under 7.15–7.20 despite bicarbonate, or bicarbonate not tolerated because of overload"],
["Fluid overload", "Pulmonary oedema not responding to diuretics"],
["Uraemic complications", "Pericarditis, encephalopathy, uraemic bleeding"],
["Dialysable poisons", "Methanol, ethylene glycol, lithium, salicylates, metformin with severe lactic acidosis"],
["Prolonged severe AKI", "Very high urea with oliguria and no recovery; the exact threshold is debated. AKIKI2 showed harm from waiting beyond urea about 50 mmol/L or oliguria beyond 72 h."]])}
<ul>
<li><b>Timing:</b> a deferred strategy is preferred over pre-emptive early starts (draft Rec 5.1.1, 1C), supported by AKIKI, IDEAL-ICU and STARRT-AKI.${r(8, 9)}</li>
<li><b>Modality:</b> CRRT or acute PD for haemodynamically unstable patients (draft Rec 5.2.1, 2C); intermittent HD for stable patients. Choose what your centre can do safely. In Bhutan this is usually intermittent haemodialysis. ${LB.bt()}</li>
<li><b>Dose:</b> CRRT effluent 20–25 mL/kg/h; IHD Kt/V 3.9 per week; acute PD weekly Kt/V 2.2 (18–24 L/day) (draft Rec 5.3.1, PP 5.3.3).</li>
<li><b>Anticoagulation:</b> regional citrate for CRRT where available (draft Rec 5.5.1, 1B); otherwise unfractionated heparin.</li>
<li><b>Access:</b> uncuffed catheter in right internal jugular (first choice), then femoral; avoid subclavian (stenosis threatens future fistulas).</li>
<li><b>Stopping:</b> consider when urine output is over about 450 mL/day without diuretics (over 2.3 L with diuretics) and creatinine is falling between sessions (draft PP 5.9.3).</li></ul>

<h3>E. Working in Bhutan: when the ideal is not available</h3>
${tbl(["Need", "If unavailable", "Do this"], [
["Potassium binder (SZC, patiromer)", "Only calcium polystyrene sulfonate on the NEML", "Use it with lactulose; rely on insulin–glucose and salbutamol while arranging transfer"],
["Buffered crystalloid", "Ringer's lactate (compound sodium lactate) is on the NEML down to PHC", "Use it first-line"],
["Dialysis on site", "Transfer needed", "Stabilise K⁺, oxygenate, consider a urinary catheter and a secure IV line, send results and a letter, phone ahead"],
["Kidney biopsy, ANCA, anti-GBM", "National referral hospital or abroad", "Do not delay immunosuppression in pulmonary haemorrhage; discuss by phone"],
["Rasburicase", "Not listed", "Allopurinol plus hydration, and early referral for high-risk tumour lysis"]])}
` },

{ id: "drugs", title: "Medicines: doses, stop-list and adjustments", html: `
<p>Tap any drug name to open its full card (mechanism, contraindications, and doses in pregnancy, kidney and liver failure).</p>
<h3>Treatment doses</h3>
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("calcium_gluconate"), "30 mL IV over 5–10 min (UKKA); ICMR: 10 mL over 2–5 min, up to 3 times", "Cardiac protection only; does not lower K⁺"],
[dr("insulin_glucose"), "10 units + 25 g glucose IV over 15 min", "Bhutan U-40: 0.25 mL. Monitor glucose 6 h"],
[dr("salbutamol"), "10–20 mg nebulised", "Add-on, never alone"],
[dr("sodium_bicarbonate"), "50–100 mmol IV for severe acidosis (7.5% ≈ 0.9 mmol/mL)", "Not with calcium; sodium load"],
[dr("polystyrene"), "15 g orally 3–4 times daily, or 30 g rectally", "Slow; give lactulose"],
[dr("szc"), "10 g three times daily up to 72 h", "Not on Bhutan NEML"],
[dr("furosemide"), "40–80 mg IV bolus, titrated; FST 1–1.5 mg/kg", "Overload only; ≤4 mg/min"],
[dr("noradrenaline"), "0.05–0.5 microgram/kg/min", "After fluids; MAP over 65"]])}

<h3>Stop during AKI and on sick days</h3>
<p>A useful memory aid is <b>\"SADMANS\"</b>: <b>S</b>ulfonylureas (hypoglycaemia), <b>A</b>CE inhibitors, <b>D</b>iuretics, <b>M</b>etformin (lactic acidosis), <b>A</b>RBs, <b>N</b>SAIDs, <b>S</b>GLT2 inhibitors. KDIGO's draft supports temporarily stopping these drug classes in volume-depleting illness (Rec 4.11.1, 2D). <b>Write down when to restart them</b>. Failing to restart RAS blockers and SGLT2 inhibitors after recovery is a common, harmful omission (KDIGO 2024 PP 4.3.2; draft Rec 6.2.1).</p>
<h3>Adjust or monitor</h3>
${tbl(["Drug", "Problem in AKI", "What to do"], [
["Gentamicin, amikacin", "Nephro- and ototoxic", "Avoid if an alternative exists; single daily dose; trough levels"],
["Vancomycin", "Nephrotoxic, especially with piperacillin–tazobactam", "Level-guided dosing"],
["Aciclovir (IV)", "Crystal nephropathy", "Hydrate; reduce the dose"],
["Morphine, codeine, tramadol", "Active metabolites accumulate: sedation, seizures", "Use fentanyl or small doses of oxycodone"],
["Enoxaparin (LMWH)", "Accumulates; bleeding", "Reduce dose or use unfractionated heparin"],
["Allopurinol, colchicine", "Toxicity", "Reduce dose"],
["Iodinated contrast", "Contrast-associated AKI", "Do not withhold an essential scan. In high-risk patients use the lowest dose of iso- or low-osmolar contrast and give IV saline if not overloaded"],
["Gadolinium (MRI)", "Nephrogenic systemic fibrosis at GFR under 30", "Use group II agents (e.g. gadobenate, now on the Bhutan NEML for NRH)"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and the immunocompromised", html: `
<h3>Pregnancy and the puerperium</h3>
<ul>
<li><b>Normal values change:</b> GFR rises by about 50%, so creatinine falls to roughly 35–70 µmol/L. A creatinine of 90 µmol/L is abnormal in pregnancy.</li>
<li><b>Causes by trimester:</b> first trimester — hyperemesis, septic abortion. Later — pre-eclampsia/HELLP, placental abruption, postpartum haemorrhage, acute fatty liver of pregnancy, TMA (TTP or atypical HUS, often postpartum), sepsis, obstruction by the gravid uterus (usually right-sided, usually mild).</li>
<li><b>Management:</b> involve obstetrics early. Delivery is the definitive treatment for pre-eclampsia, HELLP and acute fatty liver (KDIGO draft PP 3.10.1). Treat severe hypertension with ${dr("labetalol")} IV or ${dr("nifedipine")} SR orally. <b>ACE inhibitors and ARBs are contraindicated.</b> Magnesium sulphate for eclampsia needs a dose reduction and close monitoring in AKI (it is renally excreted: check reflexes, respiratory rate, urine output).</li>
<li>Dialysis in pregnancy, if needed, should be more frequent and is a specialist decision.</li></ul>
<h3>Breastfeeding</h3>
<p>Most AKI drugs are compatible. Enalapril is the preferred ACE inhibitor if one is needed; avoid SGLT2 inhibitors.</p>
<h3>Older adults</h3>
<ul><li>Low muscle mass hides kidney failure, so use trends and cystatin C where available.</li><li>Delirium may be the only sign.</li><li>Polypharmacy is the commonest avoidable cause. Review every medicine.</li><li>Dehydration from poor intake, heat and diuretics.</li><li>Shared decision-making about dialysis, considering frailty and wishes (KDIGO draft PP 5.1.1).</li></ul>
<h3>Immunocompromised patients</h3>
<ul><li><b>HIV:</b> tenofovir (TDF) tubulopathy, HIV-associated nephropathy, cotrimoxazole (hyperkalaemia, creatinine secretion), atazanavir stones. Dolutegravir raises creatinine without lowering GFR.</li><li><b>Transplant recipients:</b> calcineurin inhibitor toxicity, rejection, BK virus. Always discuss with the transplant team.</li><li><b>Chemotherapy:</b> tumour lysis, cisplatin, methotrexate (needs leucovorin and alkalinisation per oncology protocol).</li><li><b>Sepsis risk:</b> lower threshold for cultures and broad antibiotics; avoid unnecessary catheters and lines.</li></ul>
` },

{ id: "scenarios", title: "AKI with other conditions", html: `
${tbl(["Condition", "What changes", "Why"], [
["<b>Chronic kidney disease</b>", "Lower threshold for referral; stop RAS blockers, SGLT2 inhibitors and metformin temporarily; earlier dialysis planning", "Less reserve; slower recovery; higher risk of permanent loss"],
["<b>Heart failure</b>", "Avoid big fluid boluses: give 250 mL and reassess. Decongest with loop diuretics even if creatinine rises modestly", "Venous congestion itself lowers GFR (cardiorenal syndrome). A small creatinine rise during effective decongestion is not harmful"],
["<b>Cirrhosis</b>", "Albumin rather than crystalloid for volume expansion; stop diuretics, NSAIDs, aminoglycosides; consider HRS", "Splanchnic vasodilatation; albumin improves effective volume"],
["<b>Diabetes</b>", "Stop metformin and SGLT2 inhibitors; reduce sulfonylureas and insulin", "Lactic acidosis, ketoacidosis, hypoglycaemia (insulin is renally cleared)"],
["<b>COPD</b>", "Oxygen target 88–92%; care with bicarbonate (raises CO₂); salbutamol helps K⁺", "CO₂ retention"],
["<b>Asthma</b>", "Avoid NSAIDs; salbutamol lowers K⁺ — watch for hypokalaemia during recovery", "—"],
["<b>Drug allergy</b>", "Sulfonamide allergy: furosemide cross-reactivity is rare, so use it with observation. Penicillin allergy: think of AIN as a cause of AKI", "—"],
["<b>Sepsis</b>", "Antibiotics within 1 h of shock; Ringer's lactate; MAP over 65; avoid nephrotoxins", "Sepsis is the commonest cause of ICU AKI"],
["<b>Contrast</b>", "Do not deny an essential scan; saline for high-risk patients; stop metformin if eGFR is under 30 or AKI", "Modern contrast risk is lower than once thought, but real in advanced CKD"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Timing", "Mechanism", "Recognition", "Management"], [
["<b>Hyperkalaemia</b>", "Early", "Reduced excretion, acidosis, cell injury", "ECG, K⁺", "As in the emergency box"],
["<b>Pulmonary oedema</b>", "Early", "Salt and water retention, fluids given", "Breathless, crackles, SpO₂ falls", "Oxygen, CPAP, diuretic, dialysis"],
["<b>Metabolic acidosis</b>", "Early", "Acid retention", "Low HCO₃⁻, Kussmaul breathing", "Bicarbonate if pH under 7.20; dialysis"],
["Hyponatraemia", "Early", "Free water given to an oliguric patient", "Confusion, seizures", "Restrict free water"],
["Hyperphosphataemia, hypocalcaemia", "Days", "Retention; tissue breakdown", "Tetany, prolonged QT", "Treat symptomatic hypocalcaemia; binders"],
["Uraemic encephalopathy, pericarditis, bleeding", "Late", "Toxin accumulation, platelet dysfunction", "Confusion, rub, bleeding", "Dialysis; desmopressin for bleeding"],
["Infection", "Any time", "Lines, catheters, uraemic immune dysfunction", "Fever", "Remove unnecessary devices"],
["Drug toxicity", "Any time", "Reduced clearance", "Sedation, seizures, arrhythmia", "Review doses daily"],
["Polyuric recovery phase", "Recovery", "Tubules recover more slowly than glomeruli", "Several litres of urine a day; low K⁺, Na⁺, Mg²⁺", "Replace losses; check electrolytes twice daily"],
["<b>CKD and kidney failure</b>", "Months–years", "Maladaptive repair and fibrosis", "Creatinine stays above baseline; albuminuria", "Follow-up at 3 months; CKD care"]])}
<h3>Prognosis</h3>
<ul><li>Mortality rises with stage and setting. In ICU patients, stage 3 AKI needing dialysis carries a hospital mortality of around 40–60% in large trials (e.g. STARRT-AKI 90-day mortality about 44%).${r(9)}</li>
<li>Community-acquired AKI in young people (diarrhoea, leptospirosis, obstetric) usually recovers fully if treated promptly.</li>
<li>Survivors have higher long-term risks of CKD, kidney failure, cardiovascular events and death. Risk rises with severity, duration (AKD) and repeated episodes.</li>
<li><b>Poor prognostic factors:</b> age, sepsis, multi-organ failure, oliguria, need for dialysis, pre-existing CKD, positive fluid balance, persistent AKI over 48 hours.</li></ul>
` },

{ id: "followup", title: "Discharge, follow-up and prevention", html: `
<h3>Signs of recovery</h3><ul><li>Urine output rising</li><li>Creatinine falling on at least two consecutive measurements</li><li>K⁺ and bicarbonate normalising without treatment</li><li>Off dialysis, with stable creatinine between sessions</li></ul>
<h3>Ready for discharge when</h3><ul><li>Creatinine is falling or stable, and the trend is known</li><li>K⁺ is under 5.5 mmol/L without IV treatment</li><li>Euvolaemic, eating and drinking</li><li>The cause has been treated, and medicines have been reconciled</li><li>A follow-up plan is written and handed to the patient</li></ul>
<h3>What the discharge letter must say (KDIGO draft PP 6.1.2)</h3>
<ul><li>That AKI happened, the stage, and the likely cause</li><li>Peak and discharge creatinine, and the baseline</li><li>Which medicines were stopped, and <b>exactly when and how to restart them</b></li><li>Drugs to avoid (NSAIDs)</li><li>When bloods are due</li></ul>
<h3>Follow-up</h3>
${tbl(["When", "What"], [
["1–2 weeks (if discharged with creatinine still above baseline, or medicines changed)", "Creatinine, K⁺; restart RAS blocker or SGLT2 inhibitor if stable; BP"],
["<b>3 months</b>", "Creatinine/eGFR and urine ACR to look for CKD (KDIGO draft PP 6.3.1). Coordinated follow-up is recommended for all AKI survivors (Rec 6.1.1, 1B)"],
["Within 7 days of stopping outpatient dialysis, then at 90 days", "Nephrology review (draft PP 6.4.5)"],
["Yearly if CKD found, or after severe AKI", "eGFR, ACR, BP"]])}
<p>ICMR's India workflow advises creatinine and urine protein every 6–12 months for life after AKI.${r(4)}</p>
<h3>Prevention</h3>
<ul><li>Check creatinine before and after nephrotoxic drugs, contrast and major surgery in at-risk patients.</li><li>Sick-day rules for everyone on SADMANS drugs.</li><li>Avoid NSAIDs in older people and in CKD; use paracetamol.</li><li>Treat diarrhoea early with oral rehydration salts.</li><li>Prompt treatment of leptospirosis, scrub typhus and malaria; protection from rodents and mites in farm work.</li><li>Do not eat wild mushrooms unless identified by an expert. ${LB.bt()}</li><li>Safe obstetric care (prevention of PPH and septic abortion).</li></ul>
${box("green", "What to tell the patient and family", `<ul><li>\"Your kidneys were injured, most likely because of ___. They have recovered to ___. They can be hurt again more easily, so we want to check them in 3 months.\"</li><li>Do not take painkillers like ibuprofen, diclofenac or aceclofenac. Paracetamol is safe.</li><li>If you vomit, have diarrhoea or cannot drink, stop ___ (named drugs) and restart when you are eating and drinking normally for 24–48 hours.</li><li>Avoid herbal or traditional remedies unless your doctor approves them.</li></ul>`)}
${box("red", "Come back immediately if", `<ul><li>You pass very little urine, or none, for 12 hours</li><li>You become breathless, or swollen in the legs or face</li><li>You have palpitations, severe weakness or fainting</li><li>You are confused or unusually sleepy</li><li>You have vomiting or diarrhoea and cannot keep fluids down</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `

<h3>Ultrasound: normal versus obstructed</h3>
<div class="pair">
${fig({ title: "Normal adult kidney", src: "images/normal-adult-kidney.jpg", mod: "Ultrasound, longitudinal (B-mode)", ctx: "Reference image for comparison", loc: "Kidney, longitudinal section", find: "Smooth outline; cortex slightly less echogenic than liver or spleen; dark (hypoechoic) medullary pyramids (**); bright central sinus fat (****); length marked by + callipers", signs: "Clear corticomedullary differentiation", interp: "Normal size and echotexture. Adults are usually 10–12 cm long.", by: "Hansen, Nielsen & Ewertsen, Diagnostics 2016;6(1):2", page: "https://commons.wikimedia.org/wiki/File:Normal_adult_kidney.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Hydronephrosis with cortical thinning", src: "images/hydronephrosis-cortical-thinning.jpg", mod: "Ultrasound, longitudinal", ctx: "Post-renal (obstructive) kidney injury", loc: "Renal pelvis and calyces", find: "Black (anechoic) fluid-filled pelvis and calyces connecting with each other; thin overlying cortex. The + calliper and dashed line measure a calyx", signs: "Dilated collecting system that communicates (unlike cysts)", interp: "Obstruction of some duration: cortical thinning suggests chronic obstruction, which may limit recovery", ddx: "Parapelvic cysts (do not connect), extrarenal pelvis, vesicoureteric reflux, pregnancy", by: "Hansen, Nielsen & Ewertsen, Diagnostics 2016", page: "https://commons.wikimedia.org/wiki/File:Ultrasonography_of_hydronephrosis_with_dilated_anechoic_pelvis_and_calyces,_along_with_cortical_atrophy.jpg", lic: "CC BY 4.0" })}
</div>
${fig({ title: "Moderate hydronephrosis, right kidney", src: "images/hydronephrosis-moderate.jpg", mod: "Ultrasound", ctx: "Obstruction", loc: "Right kidney, collecting system", find: "Multiple dilated calyces, preserved cortical thickness", interp: "Moderate obstruction, likely recoverable once relieved. Next step: find the level (bladder? ureter? stone?)", ddx: "As above", by: "Cerevisae (own work)", page: "https://commons.wikimedia.org/wiki/File:Ultrasound_of_right_kidney_moderate_hydronephrosis.jpg", lic: "CC BY-SA 4.0" })}

<h3>Urine microscopy: reading the sediment</h3>
${fig({ title: "Urinary casts: tubular cell cast, muddy brown cast, white cell cast, red cell cast", src: "images/urine-casts.jpg", mod: "Light microscopy of urine sediment", ctx: "Working out the type of intrinsic AKI", loc: "Urine", find: "(a) renal tubular epithelial cell cast; (b) muddy brown granular cast; (c) white cell cast; (d) red cell cast", signs: "Panel a–b: tubular injury; c: interstitial nephritis or pyelonephritis; d: glomerulonephritis", interp: "Muddy brown casts and tubular cells point to ATN rather than a pre-renal state. Red cell casts mean glomerular bleeding until proven otherwise.", ddx: "Hyaline casts (normal or concentrated urine), fatty casts (nephrotic syndrome), waxy casts (CKD)", by: "Mohsenin V. J Intensive Care 2017;5:57", page: "https://commons.wikimedia.org/wiki/File:RTE_cast,_muddy_granular_cast,_WBC_cast_and_RBC_cast_in_urine.jpg", lic: "CC BY 4.0" })}

<h3>ECG in hyperkalaemia</h3>
<div class="pair">
${fig({ title: "Hyperkalaemia (K⁺ 8.2 mmol/L) in kidney disease", src: "images/hyperkalaemia-ecg.jpg", mod: "12-lead ECG (patient tracing)", ctx: "Kidney disease with potassium 8.2 mmol/L", loc: "Precordial and limb leads", find: "Tall, narrow-based, peaked T waves", signs: "\"Tented\" T waves", interp: "Severe hyperkalaemia: give calcium immediately, then insulin–glucose", ddx: "Hyperacute T waves of early STEMI (broader-based, regional), early repolarisation", by: "Dr Michael-Joseph F. Agbayani and Dr Eddieson Gonzales, Manila", page: "https://commons.wikimedia.org/wiki/File:Hyperkalemia_ECG.jpg", lic: "CC BY 4.0" })}
${fig({ title: "How the ECG changes as potassium rises", src: "images/hyperkalaemia-ecg-schematic.png", mod: "<b>Schematic illustration — not a patient tracing</b>", ctx: "Teaching diagram", loc: "Precordial leads", find: "From mild to severe: peaked T → PR prolongation and flattened P → loss of P → widened QRS → sine wave", interp: "The sequence is typical, but patients can jump straight to a dangerous rhythm; a normal ECG does not make a high K⁺ safe", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:ECG_in_hyperkalemia.svg", lic: "Public domain" })}
</div>

<h3>Histopathology</h3>
${fig({ title: "Acute tubular injury with interstitial nephritis (drug-induced)", src: "images/atn-histology.webp", mod: "Kidney biopsy, light microscopy", ctx: "AKI after oral aciclovir", loc: "Renal cortex: tubules and interstitium", find: "Glomeruli without proliferation; flattened, injured tubular epithelium; interstitial inflammatory infiltrate", signs: "Tubular injury plus interstitial inflammation", interp: "Drug-related acute tubular necrosis with tubulointerstitial nephritis. Stopping the drug is the key treatment.", ddx: "Ischaemic ATN, infection-related AIN, pyelonephritis", by: "Chávez-Iñiguez JS et al. BMC Nephrol 2018;19:324", page: "https://commons.wikimedia.org/wiki/File:Histopathological_features_of_acute_tubular_injury_and_tubulointerstitial_nephritis.webp", lic: "CC BY 4.0" })}

<h3>Further images (link only — copyright prevents copying)</h3>
<ul><li>Chest X-ray in pulmonary oedema from fluid overload, and pulmonary haemorrhage in vasculitis: <a href="https://radiopaedia.org/search?q=pulmonary+oedema" target="_blank" rel="noopener">Radiopaedia</a> (CC BY-NC-SA; view on site)</li>
<li>Renal cortical necrosis on contrast CT: <a href="https://radiopaedia.org/search?q=renal+cortical+necrosis" target="_blank" rel="noopener">Radiopaedia</a></li>
<li>Kidney ultrasound pictorial review: <a href="https://radiologyassistant.nl/" target="_blank" rel="noopener">The Radiology Assistant</a> (copyright; link only)</li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Rising creatinine — the first hour", [
F.s("Creatinine ≥26.5 µmol/L rise in 48 h, or ≥1.5× baseline, or urine under 0.5 mL/kg/h for 6 h"), F.a,
F.e("Danger check: K⁺ ≥6.5 or ECG change? Pulmonary oedema? pH under 7.20?"), F.a,
F.b([["Yes", F.e("Treat now: calcium, insulin–glucose, salbutamol; oxygen; call senior and nephrology; plan RRT")], ["No", F.s("Continue the assessment")]]), F.a,
F.d("Volume status?"), F.a,
F.b([["Dry", F.s("Ringer's lactate 500 mL, reassess after each bolus")], ["Overloaded", F.s("Oxygen; furosemide if passing urine; restrict fluid")], ["Euvolaemic", F.s("Maintenance only; match output")]]), F.a,
F.s("Stop nephrotoxins (SADMANS) · bladder scan / catheter if retention · urine dipstick and microscopy"), F.a,
F.d("Blood ++ and protein ++?"), F.a,
F.b([["Yes", F.e("Possible GN or vasculitis: ANCA, anti-GBM, ANA, C3/C4; urgent nephrology")], ["No", F.s("Ultrasound within 24 h if obstruction possible; treat sepsis, volume, toxins")]]), F.a,
F.ok("Recheck creatinine, K⁺ and urine output in 12–24 h; stage and document")])}

${F.chart("2 · Hyperkalaemia in adults (UKKA, with Bhutan notes)", [
F.s("K⁺ ≥5.5 mmol/L — repeat if possibly haemolysed, but do not delay if ECG changes"), F.a,
F.d("ECG changes present?"), F.a,
F.b([["Yes", F.e("Calcium gluconate 10% 30 mL IV over 10 min (ECG changes are present); repeat if ECG unchanged")], ["No", F.s("Go to shift therapy if K⁺ ≥6.0")]]), F.a,
F.s("Insulin 10 units (0.25 mL of U-40) + 25 g glucose IV · salbutamol 10–20 mg neb"), F.a,
F.s("Bicarbonate only if acidotic · stop K⁺-raising drugs · calcium polystyrene sulfonate"), F.a,
F.d("K⁺ still ≥6.5, or rising, or oligo-anuric?"), F.a,
F.b([["Yes", F.e("Dialysis — transfer if not available, after stabilising")], ["No", F.ok("Recheck K⁺ at 1, 2, 4, 6 h; glucose for 6 h")]])])}

${F.chart("3 · Should this patient start dialysis?", [
F.d("Refractory K⁺, acidosis or overload? Uraemic pericarditis or encephalopathy? Dialysable poison?"), F.a,
F.b([["Yes", F.e("Start RRT (consistent with the patient's goals of care)")], ["No", F.s("Deferred strategy: treat medically, reassess every 12–24 h")]]), F.a,
F.d("High probability of needing RRT (oliguric stage 3, failed furosemide stress test)?"), F.a,
F.b([["Yes", F.s("Plan now: talk to nephrology, consider early transfer, place access")], ["No", F.ok("Continue supportive care")]])])}

${F.chart("4 · Discharge and follow-up", [
F.s("Creatinine stable or falling, K⁺ normal, euvolaemic"), F.a,
F.s("Letter: AKI stage, cause, peak and discharge creatinine, drugs stopped and when to restart"), F.a,
F.s("Bloods in 1–2 weeks if not back to baseline or drugs changed"), F.a,
F.s("Restart RAS blocker / SGLT2 inhibitor when stable"), F.a,
F.ok("Creatinine and urine ACR at 3 months → CKD? → follow the CKD chapter")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3>
<ul>
<li><b>Always find a baseline creatinine.</b> 150 µmol/L is stable CKD in one person and 3× AKI in another.</li>
<li><b>Dipstick the urine before you catheterise.</b> The catheter adds blood, and the first urine is the most informative.</li>
<li><b>Feel the bladder in every man with AKI.</b> Retention is the easiest AKI to cure.</li>
<li><b>Leptospirosis gives low potassium.</b> A febrile farmer with AKI, jaundice, conjunctival suffusion and low K⁺ is leptospirosis until proven otherwise.</li>
<li><b>Calcium works in minutes and wears off in an hour.</b> If you do not also lower K⁺, the danger returns.</li>
<li><b>Non-oliguric AKI has a better prognosis</b>, but that is a marker, not something you can create with furosemide.</li>
<li><b>Anuria is unusual in ATN.</b> Complete anuria suggests obstruction (or a blocked catheter), bilateral vascular occlusion, cortical necrosis or RPGN.</li></ul>
<h3>Mistakes that hurt patients</h3>
${tbl(["Mistake", "Why it is dangerous", "How to prevent it"], [
["Giving litres of fluid to an oliguric patient \"to flush the kidneys\"", "Pulmonary oedema; positive balance increases mortality", "Give boluses only if dry, and reassess after each one"],
["Mismatching syringe and insulin strength", "Mismatched syringes are dangerous both ways: U-40 insulin drawn to the \"10\" mark of a U-100 syringe gives only 4 units (under-dose, high glucose), while U-100 pen insulin drawn to \"10\" on a U-40 syringe gives 25 units (2.5 times the dose, severe hypoglycaemia).", "Use U-40 syringes for Bhutan's U-40 vials; check 0.25 mL for 10 units"],
["Giving calcium and bicarbonate through the same line", "Precipitates", "Separate lines, or flush well"],
["Continuing gentamicin, NSAIDs or the ACE inhibitor \"because they were already on it\"", "Ongoing injury", "Daily drug review with the pharmacist"],
["Dosing drugs by eGFR during AKI", "eGFR is invalid when creatinine is not stable", "Assume GFR is low if creatinine is rising"],
["Forgetting to restart RAS blockers and SGLT2 inhibitors", "Loses long-term heart and kidney protection", "Write the restart plan in the discharge letter"],
["Treating the potassium number on a haemolysed sample, or ignoring a real one", "Over- or under-treatment", "Repeat urgently, but act on the ECG"],
["Transferring a hyperkalaemic patient without treatment", "Arrest in the ambulance", "Stabilise first; insulin–glucose before departure; send monitoring"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<p>Tap a question to see the answer.</p>
<div class="qgroup"><h3>Definitions and diagnosis</h3>
${qa("Student", "What are the KDIGO criteria for AKI?", "Any one of: creatinine rise ≥26.5 µmol/L (0.3 mg/dL) within 48 h; creatinine ≥1.5× baseline within 7 days; urine output under 0.5 mL/kg/h for 6 h.")}
${qa("Student", "Why is creatinine a poor early marker?", "It rises only after a large fall in GFR, takes 24–48 h to reach a new steady state, and depends on muscle mass, diet and tubular secretion.")}
${qa("Intern/MO", "Creatinine is 140 µmol/L and you have no baseline. What do you do?", "Look for any old result (8–365 days). If none, treat it as possible AKI: recheck in 24 h, and use ultrasound (small kidneys suggest CKD), haemoglobin, phosphate and history. Do not assume it is chronic.")}
${qa("Intern/MO", "What does a FeNa of 0.5% tell you, and when is it misleading?", "It suggests avid sodium retention (pre-renal or hepatorenal). It is misleading after diuretics (falsely high), and in contrast, myoglobin or early obstructive injury, or glomerulonephritis (falsely low). Use FeUrea under 35% if on diuretics.")}
${qa("Intern/MO", "Dipstick shows blood +++ but microscopy shows no red cells. Why?", "Myoglobin (rhabdomyolysis) or free haemoglobin (haemolysis) react with the dipstick's peroxidase test. Check CK and look for haemolysis.")}
${qa("Specialist", "When is a kidney biopsy indicated in AKI?", "When the cause is unclear and the result would change treatment: suspected RPGN or vasculitis, suspected AIN not settling after stopping the drug, or AKI not recovering after 2–3 weeks.")}
${qa("Intern/MO", "Name three causes of pseudo-AKI.", "Trimethoprim, cimetidine and dolutegravir (block tubular creatinine secretion); creatine supplements; interference with the Jaffe assay (ketones, some cephalosporins). Urea and cystatin C are unchanged.")}
</div>
<div class="qgroup"><h3>Emergency and treatment</h3>
${qa("Intern/MO", "K⁺ 7.1 mmol/L with peaked T waves. Give the first three drugs and doses.", "Calcium gluconate 10% 30 mL IV over 10 min (ECG changes are present); soluble insulin 10 units with 25 g glucose IV over 15 min (in Bhutan 0.25 mL of U-40 insulin); salbutamol 10–20 mg nebulised. Then remove K⁺ and plan dialysis if refractory.")}
${qa("Intern/MO", "Why might you need extra glucose after insulin in AKI?", "Insulin is cleared by the kidney, so its effect lasts longer. Hypoglycaemia peaks at 1–3 h. UKKA advises 10% glucose at 50 mL/h for 5 h if the pre-treatment glucose was under 7 mmol/L.")}
${qa("Student", "Give the AEIOU indications for dialysis.", "Acidosis, Electrolytes (K⁺), Intoxication, Overload, Uraemia (pericarditis, encephalopathy, bleeding), each when refractory to medical treatment.")}
${qa("Specialist", "What did STARRT-AKI show?", "Accelerated RRT in critically ill adults did not reduce 90-day mortality compared with a standard (deferred) strategy, and caused more adverse events and more dialysis dependence at 90 days.")}
${qa("Intern/MO", "Should you give furosemide to an oliguric patient to improve the kidney?", "No. It does not improve recovery or survival. Use it only for fluid overload, or as a stress test in euvolaemic patients.")}
${qa("Intern/MO", "Ringer's lactate contains potassium. Is it safe in hyperkalaemia?", "Yes. It contains only 4–5 mmol/L K⁺, lower than the patient's serum, and avoids hyperchloraemic acidosis (which worsens hyperkalaemia). Saline does not lower K⁺ better.")}
${qa("Intern/MO", "Which antibiotics need dose adjustment or avoidance in AKI?", "Aminoglycosides (avoid or single daily dose with levels), vancomycin (levels), aciclovir, cotrimoxazole, most β-lactams (reduce dose after the first full loading dose), nitrofurantoin (avoid when GFR is low).")}
${qa("Specialist", "How do you treat hepatorenal AKI?", "Stop diuretics and nephrotoxins; albumin 1 g/kg (max 100 g) daily for 2 days; if no response, terlipressin or noradrenaline with albumin; consider transplant referral.")}
</div>
<div class="qgroup"><h3>Special situations</h3>
${qa("Intern/MO", "Why is creatinine of 95 µmol/L worrying in a pregnant woman?", "GFR rises by about 50% in pregnancy, so normal creatinine is about 35–70 µmol/L. 95 µmol/L suggests a significant fall in GFR.")}
${qa("Intern/MO", "A febrile farmer has AKI, jaundice and K⁺ 3.0 mmol/L. Most likely diagnosis and treatment?", "Leptospirosis. Doxycycline 100 mg twice daily (or IV ceftriaxone or penicillin if severe), supportive care, watch for pulmonary haemorrhage, dialysis if needed.")}
${qa("Intern/MO", "How do you prevent contrast-associated AKI in a high-risk adult?", "Do not deny an essential scan. Use the lowest dose of low- or iso-osmolar contrast, stop non-essential nephrotoxins, give IV 0.9% saline if not overloaded. Bicarbonate and N-acetylcysteine add nothing.")}
${qa("Specialist", "When should an aminoglycoside be used in a patient at risk of AKI?", "Only when no adequate alternative exists, as a single daily dose for the shortest time, with trough levels.")}
${qa("Student", "What is post-obstructive diuresis and how is it managed?", "A large urine output (over 200 mL/h) after relieving obstruction, from solute diuresis and temporary tubular dysfunction. Replace about half to two-thirds of output and check electrolytes frequently.")}
</div>
<div class="qgroup"><h3>Follow-up and viva</h3>
${qa("Intern/MO", "What should happen 3 months after AKI?", "Check creatinine/eGFR and urine ACR to look for CKD; review BP and medicines; restart protective drugs if not already done.")}
${qa("Specialist", "What is AKD?", "Kidney dysfunction for up to 3 months after an initial event (with or without AKI): ongoing functional or structural abnormality between AKI (within 7 days) and CKD (over 3 months).")}
${qa("Student", "List the SADMANS drugs.", "Sulfonylureas, ACE inhibitors, diuretics, metformin, ARBs, NSAIDs, SGLT2 inhibitors.")}
${qa("Viva", "Explain the triple whammy.", "NSAIDs remove afferent vasodilatation (prostaglandins), ACE inhibitors/ARBs remove efferent vasoconstriction (angiotensin II), and diuretics lower volume, so glomerular pressure collapses.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">KDIGO AKI Work Group. KDIGO Clinical Practice Guideline for Acute Kidney Injury. <i>Kidney Int Suppl</i> 2012;2:1–138. <a href="https://kdigo.org/guidelines/acute-kidney-injury/" target="_blank" rel="noopener">kdigo.org</a></li>
<li id="ref-2">KDIGO. KDIGO 2027 Clinical Practice Guideline for AKI and AKD — <b>Public Review Draft, March 2026</b> (summary of recommendations). Not final; content may change. <a href="https://kdigo.org/guidelines/acute-kidney-injury/" target="_blank" rel="noopener">kdigo.org</a></li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §6.6 Acute kidney injury.</li>
<li id="ref-4">ICMR / Department of Health Research, India. Standard Treatment Workflow: Acute Kidney Injury (ICD-11 GB60), July 2026. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-5">Susantitaphong P et al. World incidence of AKI: a meta-analysis. <i>Clin J Am Soc Nephrol</i> 2013;8:1482–1493. <a href="https://doi.org/10.2215/CJN.00710113" target="_blank" rel="noopener">doi:10.2215/CJN.00710113</a></li>
<li id="ref-6">Hoste EAJ et al. Epidemiology of acute kidney injury in critically ill patients: the multinational AKI-EPI study. <i>Intensive Care Med</i> 2015;41:1411–1423. <a href="https://doi.org/10.1007/s00134-015-3934-7" target="_blank" rel="noopener">doi:10.1007/s00134-015-3934-7</a></li>
<li id="ref-7">Mehta RL et al. International Society of Nephrology's 0by25 initiative for acute kidney injury. <i>Lancet</i> 2015;385:2616–2643. <a href="https://doi.org/10.1016/S0140-6736(15)60126-X" target="_blank" rel="noopener">doi:10.1016/S0140-6736(15)60126-X</a></li>
<li id="ref-8">Gaudry S et al. (AKIKI) Initiation strategies for RRT in the ICU. <i>N Engl J Med</i> 2016;375:122–133. <a href="https://doi.org/10.1056/NEJMoa1603017" target="_blank" rel="noopener">doi:10.1056/NEJMoa1603017</a> Barbar SD et al. (IDEAL-ICU) <i>N Engl J Med</i> 2018;379:1431–1442. <a href="https://doi.org/10.1056/NEJMoa1803213" target="_blank" rel="noopener">doi:10.1056/NEJMoa1803213</a> Gaudry S et al. (AKIKI2) <i>Lancet</i> 2021;397:1293–1300. <a href="https://doi.org/10.1016/S0140-6736(21)00350-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(21)00350-0</a></li>
<li id="ref-9">STARRT-AKI Investigators. Timing of initiation of RRT in acute kidney injury. <i>N Engl J Med</i> 2020;383:240–251. <a href="https://doi.org/10.1056/NEJMoa2000741" target="_blank" rel="noopener">doi:10.1056/NEJMoa2000741</a></li>
<li id="ref-10">Semler MW et al. (SMART) Balanced crystalloids versus saline in critically ill adults. <i>N Engl J Med</i> 2018;378:829–839. <a href="https://doi.org/10.1056/NEJMoa1711584" target="_blank" rel="noopener">doi:10.1056/NEJMoa1711584</a></li>
<li id="ref-11">Weisbord SD et al. (PRESERVE) Outcomes after angiography with sodium bicarbonate and acetylcysteine. <i>N Engl J Med</i> 2018;378:603–614. <a href="https://doi.org/10.1056/NEJMoa1710933" target="_blank" rel="noopener">doi:10.1056/NEJMoa1710933</a></li>
<li id="ref-12">UK Kidney Association. Clinical Practice Guidelines: Treatment of Acute Hyperkalaemia in Adults. July 2020, updated October 2023 and July 2026. <a href="https://www.ukkidney.org/health-professionals/guidelines/guidelines-commentaries" target="_blank" rel="noopener">ukkidney.org</a>. MHRA Drug Safety Update: calcium chloride and calcium gluconate — risk of under-dosing with calcium gluconate in severe hyperkalaemia (2023).</li>
<li id="ref-13">Chawla LS et al. Development and standardisation of a furosemide stress test. <i>Crit Care</i> 2013;17:R207. <a href="https://doi.org/10.1186/cc13015" target="_blank" rel="noopener">doi:10.1186/cc13015</a></li>
<li id="ref-14">Angeli P et al. Diagnosis and management of AKI in cirrhosis: ICA consensus. <i>J Hepatol</i> 2015;62:968–974. <a href="https://doi.org/10.1016/j.jhep.2014.12.029" target="_blank" rel="noopener">doi:10.1016/j.jhep.2014.12.029</a></li>
<li id="ref-15">Davenport MS et al. Use of IV iodinated contrast media in patients with kidney disease: ACR–NKF consensus. <i>Radiology</i> 2020;294:660–668. <a href="https://doi.org/10.1148/radiol.2019192094" target="_blank" rel="noopener">doi:10.1148/radiol.2019192094</a></li>
<li id="ref-16">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-17">Harrison's Principles of Internal Medicine, 21st ed. (McGraw Hill, 2022), chapter on Acute Kidney Injury — foundational physiology; paraphrased, not quoted.</li>
<li id="ref-18">Oxford Handbook of Clinical Medicine, 11th ed. (2024), Renal medicine chapter — foundational.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Diagnostic criteria", "<span class='pass'>Verified</span>", "KDIGO 2012 and 2026 draft, read directly"],
["Investigations appropriate; availability marked", "<span class='pass'>Verified</span>", "Bhutan levels are general; confirm locally"],
["Adult doses, routes, units", "<span class='pass'>Verified</span>", "Against UKKA, ICMR 2026, product labels"],
["Maximum therapeutic doses separate from toxicity", "<span class='pass'>Done</span>", "Drug cards hold the toxicity notes; no LD50 values used"],
["Guideline conflicts shown, not merged", "<span class='pass'>Done</span>", "Section 4"],
["References genuine and traceable", "<span class='pass'>Done</span>", "UKKA and NICE pages could not be re-opened online today; content from the published versions"],
["Images authentic and licensed", "<span class='pass'>Done</span>", "All CC BY / CC BY-SA / public domain; schematic labelled"],
["Flowcharts match the text", "<span class='pass'>Checked</span>", "—"],
["Bhutan adaptations labelled", "<span class='pass'>Done</span>", "Purple labels and boxes"],
["Evidence gaps", "<span class='flag'>Flagged</span>", "No Bhutan AKI incidence data; dialysis capacity by district not published"]], "qc")}
${box("amber", "Evidence still evolving", `<ul><li>The KDIGO 2026 recommendations come from a <b>public-review draft</b>; recheck when the final guideline is published.</li><li>The 30 mL vs 10 mL calcium gluconate choice is a panel recommendation.</li><li>Local availability of dialysis by hospital should be confirmed with the Ministry of Health.</li></ul>`)}
` }
]
});
