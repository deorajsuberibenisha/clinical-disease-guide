/* Sepsis and septic shock — adults */
registerPage({
id: "sepsis-adult",
title: "Sepsis & Septic Shock — Adults",
subtitle: "NEWS-based recognition, the first hour, fluids and noradrenaline, source-based antibiotics, and refractory shock",
age: "Adults", specs: ["medicine", "emerg", "resp", "id", "surg"],
keywords: ["sepsis", "septic shock", "septicaemia", "NEWS", "NEWS2", "qSOFA", "SOFA", "1-hour bundle", "hour-1 bundle", "lactate", "blood culture", "empirical antibiotics", "ceftriaxone", "piperacillin tazobactam", "meropenem", "vancomycin", "noradrenaline", "norepinephrine", "vasopressin", "hydrocortisone", "fluid resuscitation", "30 mL/kg", "passive leg raise", "capillary refill", "source control", "MAP 65", "refractory shock", "Bhutan sepsis quick guide"],
related: ["sepsis-child", "pneumonia-adult", "aki-adult", "ge-adult", "cirrhosis-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Sepsis is an infection that has started to damage the organs. Every hour of delay in treating septic shock costs lives, and in Bhutan patients often arrive late, already in multi-organ failure. The work is simple but must be fast: recognise it, take cultures, give the right antibiotic, restore the circulation, and find and control the source.</p>
<div class="glance">
<div><h4>Screen</h4><p>Any suspected infection: calculate <b>NEWS</b>. <b>NEWS ≥5</b> → activate the 1-hour bundle (Bhutan Quick Guide 2025).</p></div>
<div><h4>Hour-1 bundle</h4><ol style="margin:0;padding-left:18px"><li>Lactate</li><li>Blood cultures (2 sets)</li><li>Broad-spectrum antibiotic</li><li>Crystalloid 30 mL/kg if hypotensive or lactate ≥4</li><li>Noradrenaline if MAP &lt;65</li></ol></div>
<div><h4>Antibiotic (unknown source)</h4><p>${dr("ceftriaxone", "Ceftriaxone")} 2 g IV; hospital-acquired or shock with resistance risk: ${dr("piptazo", "piperacillin–tazobactam")} 4.5 g or ${dr("meropenem", "meropenem")}.</p></div>
<div><h4>Fluids</h4><p>${dr("ringer_lactate", "Ringer's lactate")} 300–500 mL boluses over 15–30 min, up to 30 mL/kg in 3 h; reassess after each.</p></div>
<div><h4>Pressors</h4><p>${dr("noradrenaline", "Noradrenaline")} to <b>MAP ≥65</b>, peripherally at first; add ${dr("vasopressin", "vasopressin")}; ${dr("hydrocortisone_iv", "hydrocortisone")} 50 mg 6-hourly if ≥0.25 µg/kg/min for 4 h.</p></div>
<div><h4>Source</h4><p>Drain pus, remove infected lines, operate on the abdomen, ideally within 6 hours.</p></div>
<div><h4>Refer early</h4><p>PHC: start fluids and ceftriaxone, then refer within 1–2 hours.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan's first national sepsis document, the <b>Quick Guide to Sepsis Management (MoH, 1st edition 2025)</b>, uses <b>NEWS</b> for screening, the SSC hour-1 bundle, 30 mL/kg crystalloid given as 300–500 mL boluses, noradrenaline first (single strength 4 mg in 50 mL), hydrocortisone for high-dose pressor needs, and source-specific empirical antibiotics, with separate flowcharts for PHC, district and regional referral hospitals. This chapter follows it, updated where the <b>SSC 2026</b> guideline differs.${r(1, 2)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions and burden", html: `
${tbl(["Term", "Definition (Sepsis-3)"], [
["<b>Sepsis</b>", "Life-threatening organ dysfunction caused by a dysregulated host response to infection (an acute rise in SOFA score of 2 or more)"],
["<b>Septic shock</b>", "Sepsis needing vasopressors to keep MAP ≥65 mmHg <b>and</b> lactate over 2 mmol/L despite adequate fluid resuscitation; hospital mortality over 40%"],
["Refractory septic shock (Bhutan guide)", "Persistent hypotension with organ dysfunction needing noradrenaline over 0.5 µg/kg/min; mortality up to 60%"]])}
<p>Sepsis affects about 49 million people a year worldwide and causes 11 million deaths, one in five of all deaths, mostly in low- and middle-income countries. The Bhutan guide notes that there was no national sepsis guidance before 2025 and that late presentation with multi-organ failure is common.${r(1, 3)}</p>
<h3>Who is at higher risk?</h3>
<ul><li>Age over 75 (Bhutan PHC flowchart: over 60), diabetes, cancer chemotherapy, long-term steroids or immunosuppressants, splenectomy, HIV, cirrhosis, CKD.</li><li>Surgery or invasive procedure in the past 6 weeks; indwelling lines or catheters; broken skin, wounds, burns.</li><li>Pregnancy, or birth, miscarriage or termination in the past 6 weeks.</li></ul>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("From infection to organ failure, and what each treatment targets", [
F.s("<b>Infection</b> (lung, urine, abdomen, skin, blood, CNS)"), F.a,
F.s("Pathogen molecules trigger an exaggerated immune response: cytokine storm"), F.a,
F.b([
["Vessels", F.s("Vasodilatation, capillary leak"), F.e("Low BP, oedema, relative hypovolaemia")],
["Endothelium and clotting", F.s("Microthrombi, DIC"), F.e("Poor microcirculation, bleeding")],
["Heart", F.s("Septic cardiomyopathy"), F.e("Low output in some")]]), F.a,
F.s("<b>Tissue hypoperfusion</b>: cells switch to anaerobic metabolism → <b>lactate rises</b>"), F.a,
F.b([
["Restore flow", F.ok("<b>Fluids</b> (fill the leaky tank), <b>noradrenaline</b> (tighten the vessels)")],
["Kill the germ", F.ok("<b>Antibiotics within 1 hour</b>, <b>source control</b>")],
["Support organs", F.ok("Oxygen/ventilation, dialysis, glucose control")]]), F.a,
F.e("Late: immune paralysis → secondary infections (Candida, resistant bacteria), long-term weakness and cognitive problems")])}
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan Quick Guide 2025", "SSC 2026 (adults)", "This guide follows"], [
["Screening tool", "NEWS (≥5 activates bundle)", "NEWS/NEWS2, MEWS or SIRS over qSOFA alone (strong)", "NEWS (aligned)"],
["Antibiotic timing", "Within 1 h for shock and confirmed sepsis; up to 3 h assessment in possible sepsis", "Within 1 h for shock and probable/definite sepsis; possible sepsis: time-limited work-up, within 3 h", "Same"],
["Fluid", "30 mL/kg over 3 h as 300–500 mL boluses; RL or NS", "At least 30 mL/kg in 3 h (conditional); <b>balanced crystalloid over saline</b>; no albumin routinely", "Ringer's lactate boluses, reassess each"],
["MAP target", "Over 65", "65 (strong); <b>60–65 if age 65 or more</b>", "SSC 2026"],
["Second pressor", "Vasopressin 0.03 U/min; if unavailable adrenaline or dopamine", "Add vasopressin when noradrenaline escalating; adrenaline next; dopamine not recommended", "Vasopressin, then adrenaline; avoid dopamine"],
["Steroid", "Hydrocortisone 50 mg 6-hourly if NA ≥0.25 µg/kg/min for 4 h", "Suggest IV corticosteroids in septic shock (dose not specified)", "Bhutan regimen"],
["Vitamin C, thiamine", "Suggested in refractory shock (weak)", "<b>Suggest against IV vitamin C</b>; thiamine not addressed", "Not routinely; thiamine only for deficiency risk (alcohol, malnutrition)"],
["Beta-lactam infusion", "Extended infusion of pip–taz (4 h) and meropenem (3 h)", "Prolonged infusion recommended (strong)", "Extended infusion where staffing allows"],
["Bicarbonate", "If pH under 7.2 or HCO₃ under 15", "Against for lactic acidosis; consider only if pH ≤7.2 with AKI stage 2–3", "SSC 2026"]])}
<p class="qn">Sources: Bhutan Quick Guide 2025, SSC 2026.${r(1, 2)}</p>
` },

{ id: "presentation", title: "Recognising sepsis", html: `
<h3>When to suspect infection (Bhutan guide)</h3>
<p>Fever; cough or breathlessness; loose stools, vomiting or abdominal pain; dysuria or low urine output; altered mental state; rashes or wounds; poor appetite; or simply an ill-looking patient.</p>
<h3>Signs of organ dysfunction</h3>
${tbl(["System", "Signs"], [
["Brain", "New confusion, drowsiness, agitation (GCS fall)"],
["Circulation", "SBP ≤90 or MAP under 65, HR over 130, capillary refill over 3 s, mottled or cold peripheries"],
["Lungs", "RR ≥22–25, SpO₂ under 92%, new oxygen need"],
["Kidneys", "Urine under 0.5 mL/kg/h, rising creatinine"],
["Liver, blood", "Jaundice, bleeding, petechiae, low platelets"],
["Metabolic", "Lactate over 2 (over 4 is severe), high or low glucose"]])}
<div class="calc" data-calc="news2"></div>
${box("red", "Septic shock: recognise it at the door", `<ul><li>MAP under 65 or SBP under 90 despite fluids; cold, mottled skin; capillary refill over 3 seconds; urine under 0.5 mL/kg/h; lactate over 2 (over 4 = high risk).</li><li>Note: young adults compensate; a normal BP with HR 130 and a lactate of 5 is shock.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis and common sources", html: `
${tbl(["Mimic of sepsis", "Clue"], [
["Hypovolaemia (GI bleed, diarrhoea, DKA)", "History; Hb; glucose and ketones"],
["Cardiogenic shock (MI, myocarditis)", "ECG, troponin, raised JVP, crackles"],
["Pulmonary embolism", "Sudden breathlessness, risk factors"],
["Anaphylaxis, adrenal crisis", "Exposure; known steroid use"],
["Pancreatitis, burns, trauma", "Inflammation without infection"],
["Drug toxicity, alcohol withdrawal, heat stroke, thyroid storm", "History and context"]])}
<h3>Common sources and tropical causes in Bhutan</h3>
<ul><li>Pneumonia, urinary tract (pyelonephritis), intra-abdominal (cholangitis, perforation, abscess), skin and soft tissue (cellulitis, necrotising fasciitis, diabetic foot), meningitis, post-partum and post-abortion infection, line infection.</li>
<li><b>Tropical: scrub typhus, leptospirosis, enteric fever, dengue (shock without bacterial sepsis), malaria in the south.</b> Add doxycycline or azithromycin when scrub typhus or leptospirosis is possible.</li></ul>
<h3>A typical case</h3>
<p>A 58-year-old man with diabetes from Trongsa has had fever and right flank pain for 3 days. He is drowsy, RR 26, SpO₂ 94% on air, BP 82/50, pulse 124, temperature 39.4 °C: <b>NEWS 14</b>. Take two blood cultures and a urine culture, give ceftriaxone 2 g IV, start Ringer's lactate 500 mL boluses (2 L for 70 kg over the first 3 hours, reassessing after each), and check lactate (5.1). After 1.5 L his MAP is still 58: start noradrenaline peripherally at 0.1 µg/kg/min. Ultrasound shows an obstructed, infected kidney: urgent drainage (nephrostomy or stent) is the source control.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["<b>Blood cultures</b>: 2 sets from separate sites, before antibiotics (without delaying them)", "Identify organism and susceptibility for de-escalation"],
["<b>Lactate</b> (venous is fine); repeat in 2–4 h if over 2", "Severity; guide resuscitation (Bhutan guide: send whenever possible)"],
["CBC, creatinine, urea, electrolytes, LFT, glucose, CRP", "Organ dysfunction; baseline"],
["Coagulation (PT/INR), platelets, fibrinogen", "DIC"],
["Arterial or venous blood gas", "Acidosis, oxygenation"],
["Urine, sputum, pus, CSF cultures and Gram stain", "Source"],
["Chest X-ray; ultrasound (abdomen, kidneys, POCUS); CT where available", "Source and need for drainage"],
["Malaria RDT/smear, scrub typhus and leptospirosis tests, dengue NS1/IgM", "Tropical causes"],
["ECG, troponin", "Cardiac mimics"]])}
<p>Procalcitonin: SSC 2026 suggests <b>not</b> using it to decide whether to start antibiotics, but it may help decide when to stop.${r(2)}</p>
` },

{ id: "staging", title: "Severity and level of care", html: `
${tbl(["Level", "Features", "Where"], [
["Possible sepsis, NEWS under 5", "Infection, no organ dysfunction", "Treat the infection; review within 24 h; repeat NEWS"],
["Sepsis (NEWS ≥5)", "Organ dysfunction", "1-hour bundle; hospital; hourly observations"],
["Septic shock", "MAP under 65 despite fluids, lactate over 2", "Noradrenaline; HDU/ICU; arterial line when feasible"],
["Refractory shock", "Noradrenaline over 0.5 µg/kg/min", "ICU; adjuncts; specialist"]])}
<p>SSC 2026 suggests ICU admission within 6 hours for patients who need it.${r(2)}</p>
<div class="calc" data-calc="vasoinf"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. The first hour</h3>
${box("red", "Hour-1 bundle (start within minutes of recognition)", `<ol>
<li><b>Airway, breathing:</b> oxygen to SpO₂ 94–98% (88–92% in CO₂ retainers); two large-bore cannulas (18–20 G).</li>
<li><b>Lactate</b> and bloods; <b>blood cultures</b> (2 sets) and other cultures.</li>
<li><b>Antibiotics within 1 hour</b> for septic shock and probable sepsis (below). Possible sepsis without shock: rapid assessment, antibiotics within 3 hours if infection still likely.</li>
<li><b>Fluids</b> if hypotensive or lactate ≥4: ${dr("ringer_lactate", "Ringer's lactate")} (or normal saline) <b>300–500 mL over 15–30 minutes</b>, repeated after reassessment, up to <b>30 mL/kg in the first 3 hours</b> (use ideal body weight if BMI over 30).</li>
<li><b>Vasopressor</b> if MAP stays under 65 during or after fluids: ${dr("noradrenaline", "noradrenaline")}. Do not wait for the full 30 mL/kg before starting.</li></ol>`)}

<h3>B. Fluids: give enough, then stop</h3>
<ul><li>After each bolus look at: MAP, heart rate, capillary refill (under 3 s), mental state, urine output (over 0.5 mL/kg/h), breathing and SpO₂, lactate trend.</li>
<li><b>Passive leg raise</b>: sit the patient at 45°, measure pulse pressure, then lie flat with legs raised; a rise of 15% or more suggests more fluid will help (Bhutan guide).</li>
<li>Stop if SpO₂ falls, crackles appear or B-lines spread on ultrasound. Do not withhold initial fluids just because of heart failure or dialysis; give smaller boluses and reassess.</li>
<li>Balanced crystalloid (Ringer's lactate) preferred over 0.9% saline; no starches or gelatin; albumin only after large volumes or in cirrhosis.</li></ul>

<h3>C. Vasopressors and steroids</h3>
${tbl(["Step", "Drug", "Dose"], [
["1", dr("noradrenaline", "Noradrenaline"), "Start 0.05–0.1 µg/kg/min, titrate to MAP ≥65 (60–65 if 65 or older). Single strength 4 mg/50 mL (80 µg/mL) peripherally into a large vein above the antecubital fossa; central line if over 0.5 µg/kg/min for 24 h or more than one pressor"],
["2", dr("vasopressin", "Vasopressin"), "0.03 units/min fixed, when noradrenaline escalating"],
["3", dr("adrenaline_inf", "Adrenaline"), "0.05–0.3 µg/kg/min if MAP still inadequate; also if cardiac dysfunction"],
["Steroid", dr("hydrocortisone_iv", "Hydrocortisone"), "50 mg IV 6-hourly when noradrenaline/adrenaline ≥0.25 µg/kg/min for ≥4 h"],
["Cardiac dysfunction", "Dobutamine (NRH/RRH)", "2–20 µg/kg/min added to noradrenaline if low output with hypoperfusion despite MAP and fluids"]])}
<p>Dopamine is not recommended (more arrhythmias); if nothing else is available it is listed to DH level.</p>

<h3>D. Empirical antibiotics (Bhutan Quick Guide 2025)</h3>
${tbl(["Source", "Community-acquired", "Hospital-acquired"], [
["<b>Unknown</b>", dr("ceftriaxone", "Ceftriaxone") + " 2 g IV stat, then 2 g daily", dr("piptazo", "Piperacillin–tazobactam") + " 4.5 g stat then 4.5 g 8-hourly, or " + dr("meropenem", "meropenem") + " 2 g stat then 1 g 8-hourly"],
["<b>Pneumonia</b>", "Ampicillin 1 g 6-hourly, or co-amoxiclav 1.2 g 8-hourly, or ceftriaxone 2 g daily, <b>plus</b> " + dr("azithromycin", "azithromycin") + " 500 mg IV daily or " + dr("doxycycline", "doxycycline") + " 100 mg BD", "Pip–taz or meropenem ± gentamicin 5–7 mg/kg or amikacin 15 mg/kg daily"],
["<b>Urinary</b>", "Ampicillin 1 g 6-hourly + " + dr("gentamicin", "gentamicin") + " 5–7 mg/kg daily, or ceftriaxone 2 g daily", "Ciprofloxacin 400 mg IV 8-hourly, pip–taz or meropenem"],
["<b>Abdominal</b>", "Ceftriaxone 2 g (or cefotaxime 2 g 8-hourly) + " + dr("metronidazole", "metronidazole") + " 500 mg IV 8-hourly; or ampicillin + gentamicin + metronidazole; or co-amoxiclav", "Pip–taz or meropenem"],
["<b>Skin, soft tissue, bone, joint</b>", dr("cloxacillin", "Cloxacillin") + " 2 g 6-hourly, cefazolin 2 g 8-hourly or co-amoxiclav; MRSA risk: " + dr("vancomycin", "vancomycin"), "Pip–taz or meropenem"],
["<b>Necrotising fasciitis, Fournier's</b>", "Pip–taz or meropenem <b>+</b> vancomycin <b>+</b> clindamycin 900 mg 8-hourly, and <b>urgent surgery</b>", "Same"],
["<b>CNS</b>", "Ceftriaxone 2 g 12-hourly (or benzylpenicillin 4 MU 4-hourly); add ampicillin 2 g 4-hourly if Listeria risk (age over 50, pregnancy, immunosuppressed)", "Meropenem 2 g 8-hourly"],
["<b>Tropical (scrub typhus, leptospirosis)</b>", "Azithromycin 500 mg IV daily or doxycycline 100 mg BD (add to the above)", "—"],
["<b>Penicillin anaphylaxis</b>", "Ciprofloxacin 400 mg IV 8-hourly (± other agents by source)", ""]])}
<p class="qn">Give the full dose for the first 24 hours whatever the kidney function; adjust from day 2. Meropenem and clindamycin were not found on NEML 2025; oral azithromycin is not listed, IV is (to DH).${r(1, 4)}</p>
${box("bt", "At a PHC (Bhutan flowchart)", `<p>NEWS ≥5 → two large cannulas, <b>NS or RL 300–500 mL over 15–30 minutes</b>, <b>ceftriaxone 2 g IV</b> (or ampicillin 2 g + gentamicin 5 mg/kg ± metronidazole 500 mg), oxygen to SpO₂ ≥94%, CBC and electrolytes if available, and <b>consult and refer within 1–2 hours</b>.${r(1)}</p>`)}

<h3>E. Source control</h3>
<ul><li>Find it early (examination, ultrasound, CT) and control it as soon as practical, ideally within 6 hours: drain abscesses and empyema, decompress obstructed kidneys or bile ducts, debride necrotic tissue, remove infected lines once new access exists, laparotomy for perforation.</li></ul>

<h3>F. Ongoing care</h3>
<ul><li>Review antibiotics at 48–72 hours with cultures: <b>de-escalate</b> to the narrowest agent; switch to oral when improving and eating; shorter courses when source is controlled.</li>
<li>VTE prophylaxis with LMWH; PPI only if GI bleeding risk; insulin if glucose ≥180 mg/dL (10 mmol/L); early enteral feeding within 72 hours; restrictive transfusion (Hb 7 g/dL in most).</li>
<li>Refractory shock: check source control, drug doses, adrenal insufficiency, acidosis, ionised calcium; albumin if ongoing fluid needs; bicarbonate only if pH ≤7.2 with AKI stage 2–3.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes", "Bhutan (NEML 2025)"], [
[dr("ceftriaxone", "Ceftriaxone"), "2 g IV daily (2 g 12-hourly in CNS)", "First-line community sepsis", "1 g NRH/RRH; 250 mg to PHC"],
[dr("piptazo", "Piperacillin–tazobactam"), "4.5 g stat, then 4.5 g 8-hourly over 4 h", "Hospital-acquired, abdominal", "Referral level"],
[dr("meropenem", "Meropenem"), "2 g stat, then 1 g 8-hourly over 3 h", "Reserve", "Not found on NEML 2025"],
[dr("vancomycin", "Vancomycin"), "25–30 mg/kg load, then 15 mg/kg 12-hourly", "MRSA", "NRH/RRH"],
[dr("gentamicin", "Gentamicin"), "5–7 mg/kg once daily", "Kidney function, levels", "Listed"],
[dr("metronidazole", "Metronidazole"), "500 mg IV 8-hourly", "Anaerobes", "IV to DH"],
[dr("cloxacillin", "Cloxacillin"), "2 g IV 6-hourly", "MSSA", "Listed"],
[dr("azithromycin", "Azithromycin"), "500 mg IV daily", "Atypicals, scrub typhus", "IV to DH"],
[dr("noradrenaline", "Noradrenaline"), "0.05–0.5 µg/kg/min", "First pressor", "NRH/RRH/DH"],
[dr("vasopressin", "Vasopressin"), "0.03 units/min", "Second pressor", "NRH/RRH/DH"],
[dr("adrenaline_inf", "Adrenaline"), "0.05–0.3 µg/kg/min", "Third pressor / cardiac", "To PHC (ampoules)"],
[dr("hydrocortisone_iv", "Hydrocortisone"), "50 mg 6-hourly", "Pressor ≥0.25 for 4 h", "NRH/RRH/DH"],
[dr("ringer_lactate", "Ringer's lactate"), "300–500 mL boluses to 30 mL/kg", "Balanced crystalloid", "To PHC"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Pregnancy and post-partum</h3><ul><li>Maternal sepsis: think of endometritis, retained products, septic abortion, pyelonephritis, chorioamnionitis, mastitis, wound infection. Physiological changes mask shock (normally higher HR, lower BP). Ceftriaxone + metronidazole (± gentamicin or ampicillin) and urgent obstetric review; see the puerperal sepsis section of STG §11.7.</li></ul>
<h3>Older adults</h3><ul><li>Fever may be absent; confusion or falls may be the only sign. MAP 60–65 is acceptable.</li></ul>
<h3>Neutropenia (chemotherapy)</h3><ul><li>Antipseudomonal beta-lactam (pip–taz or meropenem) within 1 hour; add vancomycin for line infection or skin source.</li></ul>
<h3>Cirrhosis</h3><ul><li>Spontaneous bacterial peritonitis is common; albumin helps; see the cirrhosis chapter.</li></ul>
<h3>Heart failure and dialysis patients</h3><ul><li>Give initial fluid in smaller boluses with close reassessment; start noradrenaline earlier.</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>No lactate available</b>", "Use capillary refill time (under 3 s), mental state, urine output and skin mottling (ANDROMEDA-SHOCK used capillary refill successfully)"],
["<b>Noradrenaline needed at a district hospital without ICU</b>", "Start peripherally (single strength, large proximal vein, hourly site checks), consult and arrange transfer"],
["<b>Extravasation of noradrenaline</b>", "Stop the infusion, aspirate, elevate, warm compress; phentolamine where available; restart in another vein"],
["<b>Fever and shock in monsoon with eschar</b>", "Scrub typhus: add doxycycline or azithromycin"],
["<b>Platelets falling, haematocrit rising, no bacterial source</b>", "Dengue shock: fluid plan differs (see dengue chapter)"],
["<b>Septic shock and suspected GI perforation in a remote hospital</b>", "Resuscitate, antibiotics, surgical source control without waiting for full stabilisation"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Watch for", "Action"], [
["AKI", "Oliguria, rising creatinine", "MAP, avoid nephrotoxins, dialysis if indicated"],
["ARDS", "Hypoxia, bilateral infiltrates", "Low tidal volume 6 mL/kg, plateau under 30, prone positioning"],
["DIC", "Bleeding, low platelets, high INR", "Treat sepsis; blood products if bleeding"],
["Fluid overload", "Desaturation, oedema", "Stop fluids; diuretics after the acute phase"],
["Secondary and fungal infection", "New fever after improvement", "Cultures; line review"],
["Post-sepsis syndrome", "Weakness, memory and mood problems for months", "Rehabilitation, follow-up, mental health support"]])}
` },

{ id: "followup", title: "After sepsis", html: `
<ul><li>Explain what happened and that recovery takes months; screen for weakness, sleep, mood (anxiety, depression, PTSD) and cognitive problems.</li><li>Review medicines (restart antihypertensives carefully), vaccinations (influenza, pneumococcal), diabetes control.</li><li>SSC 2026 suggests post-critical illness follow-up, physical rehabilitation and mental health support.</li></ul>
${box("red", "Teach the warning signs", `<p>Come back at once with: confusion or drowsiness, fast breathing, very fast heartbeat, mottled or cold skin, no urine for a day, or feeling 'as if I am dying'.</p>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<p>The key signs in sepsis are bedside findings (capillary refill, mottling, mental state, urine output) rather than images. Source-specific imaging is shown in the pneumonia, cirrhosis and other chapters.</p>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Suspected sepsis (Bhutan Quick Guide 2025, updated with SSC 2026)", [
F.s("Suspected infection → calculate NEWS"), F.a,
F.b([["NEWS 0–4", F.ok("Treat cause; review within 24 h; repeat NEWS")], ["NEWS ≥5", F.e("Notify doctor; activate 1-hour bundle")]]), F.a,
F.s("Cultures · lactate · antibiotic within 1 h · RL 300–500 mL boluses up to 30 mL/kg"), F.a,
F.d("MAP under 65 or lactate over 4 after fluids?"), F.a,
F.b([["Yes", F.e("Noradrenaline (peripheral OK) → vasopressin → adrenaline; hydrocortisone if ≥0.25 µg/kg/min for 4 h; ICU/refer")], ["No", F.ok("Ward/HDU; source control; reassess hourly")]]), F.a,
F.s("48–72 h: review cultures, de-escalate, oral switch")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Antibiotics are time-critical</b>: give the first dose in the emergency department, not on the ward.</li><li>Take cultures first only if it takes minutes, not hours.</li><li>A normal BP does not exclude shock; look at lactate, capillary refill and mental state.</li><li>Fluids are a drug: give boluses and reassess, never 'run maintenance' as resuscitation.</li><li>Find the source: antibiotics cannot cure an undrained abscess.</li></ul>
${tbl(["Mistake", "Better"], [["Waiting for 30 mL/kg before noradrenaline", "Start pressor when MAP stays low"], ["Halving antibiotic doses on day 1 for AKI", "Full first-day doses"], ["Dopamine as first pressor", "Noradrenaline"], ["Continuing broad antibiotics for 2 weeks", "De-escalate at 48–72 h"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "Define septic shock (Sepsis-3).", "Sepsis with vasopressors needed to keep MAP ≥65 mmHg and lactate over 2 mmol/L despite adequate fluid resuscitation.")}
${qa("Intern/MO", "List the hour-1 bundle.", "Measure lactate (repeat if over 2), blood cultures before antibiotics, broad-spectrum antibiotics, 30 mL/kg crystalloid for hypotension or lactate ≥4, and vasopressors if MAP stays under 65.")}
${qa("Intern/MO", "Which NEWS score activates the sepsis bundle in Bhutan?", "NEWS of 5 or more in a patient with suspected infection.")}
${qa("Intern/MO", "Calculate noradrenaline for 70 kg at 0.1 µg/kg/min using 4 mg in 50 mL.", "7 µg/min = 420 µg/h; 420 ÷ 80 µg/mL = 5.25 mL/h.")}
${qa("Specialist", "When do you add hydrocortisone, and at what dose?", "When noradrenaline or adrenaline is ≥0.25 µg/kg/min for at least 4 hours: 50 mg IV every 6 hours (200 mg/day).")}
${qa("Viva", "What did SSC 2026 change on screening?", "It recommends NEWS/NEWS2, MEWS or SIRS over qSOFA as a single screening tool for hospital patients.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Quick Guide to Sepsis Management, 1st ed. 2025 (with PHC, district and regional referral hospital flowcharts).</li>
<li id="ref-2">Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med 2026. <a href="https://doi.org/10.1097/CCM.0000000000007075" target="_blank" rel="noopener">doi:10.1097/CCM.0000000000007075</a></li>
<li id="ref-3">Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 2016;315:801–810. <a href="https://doi.org/10.1001/jama.2016.0287" target="_blank" rel="noopener">doi:10.1001/jama.2016.0287</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Antibiotic Guideline 2018; National Essential Medicines Formulary 2022 and NEML 2025.</li>
<li id="ref-5">Royal College of Physicians. National Early Warning Score (NEWS) 2. London: RCP; 2017.</li>
<li id="ref-6">Seymour CW, Gesten F, Prescott HC, et al. Time to treatment and mortality during mandated emergency care for sepsis. N Engl J Med 2017;376:2235–2244. <a href="https://doi.org/10.1056/NEJMoa1703058" target="_blank" rel="noopener">doi:10.1056/NEJMoa1703058</a></li>
<li id="ref-7">Hernández G, Ospina-Tascón GA, Damiani LP, et al. Effect of a resuscitation strategy targeting peripheral perfusion status vs serum lactate levels on 28-day mortality among patients with septic shock (ANDROMEDA-SHOCK). JAMA 2019;321:654–664. <a href="https://doi.org/10.1001/jama.2019.0071" target="_blank" rel="noopener">doi:10.1001/jama.2019.0071</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan Quick Guide to Sepsis Management 2025", "<span class='pass'>Verified</span>", "Read from the PDF, including flowcharts"],
["SSC 2026 adult recommendations", "<span class='pass'>Checked</span>", "From SCCM recommendation listing; doses not in the summary taken from SSC 2021 / Bhutan guide"],
["NEML 2025 availability", "<span class='pass'>Checked</span>", "Meropenem and clindamycin not found"],
["NEWS2 and infusion calculators", "<span class='pass'>Checked</span>", "Hand-tested"],
["Bhutan sepsis incidence/mortality data", "<span class='warn'>Evidence gap</span>", "No national figures found"]], "qc")}
` }
]
});
