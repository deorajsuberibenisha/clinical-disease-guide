/* Shock — adults. Thin-page upgrade Round 2, 27 Nov 2026 (id, shockcalc + vasoinf calculators and related links kept).
   Sources: Bhutan Emergency Medicine booklet 2018 ch. 6 (via BCR extract: empiric shock criteria — ill/altered, HR > 100, RR > 22, base deficit worse
   than −5 or lactate > 4, urine < 0.5 mL/kg/h, hypotension > 20 min; shock index 0.5–0.7; O2 > 93%; crystalloid 20–30 mL/kg; O blood; MAP 65 / SBP 90;
   dobutamine for cardiogenic; ketamine induction); Bhutan Quick Guide to Sepsis 2025 and SSC 2026 (as on sepsis-adult); European trauma bleeding
   guideline 2023 (as on trauma-adult); RCUK anaphylaxis 2021 (as on anaphylaxis-adult); SCAI cardiogenic shock stages (Baran 2019); MoHFW India
   'Guidelines for the management of critical care' (Bhutan Medical Library copy, read 27 Nov 2026 — sepsis chapter based on older SSC: noradrenaline or
   dopamine first, vasopressin 0.01–0.04 U/min added, adrenaline as first alternative, no low-dose dopamine, dobutamine up to 20 µg/kg/min,
   hydrocortisone 300 mg/day printed, Hb 7–9 g/dL; trauma: two short wide cannulas, urinary catheter, FAST, transfer not delayed for tests);
   NEML 2025 text (noradrenaline 2 mg/mL, vasopressin 20 IU/mL, dobutamine 50 mg/mL, dopamine 40 mg/mL, adrenaline 1 mg/mL, hydrocortisone,
   albumin 20%, tranexamic acid 100 mg/mL). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "shock-adult",
title: "Shock — Adults",
subtitle: "Recognise shock before the blood pressure falls, find which of the four types it is, give oxygen and fluids, and fix the cause",
age: "Adults", specs: ["emerg", "medicine", "surg"],
keywords: ["shock", "hypovolaemic shock", "haemorrhagic shock", "septic shock", "cardiogenic shock", "obstructive shock", "anaphylactic shock", "neurogenic shock", "distributive shock", "shock index", "noradrenaline", "vasopressin", "dobutamine", "lactate", "RUSH", "fluid resuscitation", "SCAI shock stage", "permissive hypotension", "hypotension"],
related: ["shock-child", "sepsis-adult", "anaphylaxis-adult", "trauma-adult", "ugib-adult", "acs-adult", "vte-adult", "pneumothorax-adult", "burns-adult", "pph-preg", "ectopic-preg", "arrest-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Shock is failure of the circulation to deliver enough oxygen to the tissues. Low blood pressure is a <b>late</b> sign: confusion, cold or mottled skin, a fast pulse, fast breathing and little urine come first ${r(2)}.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Ill or confused, HR over 100, RR over 22, lactate over 4 (or base deficit worse than −5), urine under 0.5 mL/kg/h, hypotension over 20 minutes; shock index (HR ÷ SBP) above 0.7 ${r(2)}.</p></div>
<div><h4>Resuscitate</h4><p>Oxygen to SpO₂ over 93%, two large-bore cannulas, crystalloid 20–30 mL/kg in boluses with reassessment — blood, not saline, if bleeding ${r(2)} ${r(4)}.</p></div>
<div><h4>Classify</h4><p>Hypovolaemic, distributive (septic, anaphylactic, neurogenic), cardiogenic, obstructive. Neck veins, lungs and a bedside scan sort most cases ${r(2)}.</p></div>
<div><h4>Support</h4><p>${dr("noradrenaline")} if MAP stays under 65 after fluids; fix the cause — antibiotics, bleeding control, PCI, decompression, IM adrenaline ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Emergency Medicine booklet 2018 (chapter 6) and the Quick Guide to Sepsis 2025 are the national references ${r(2)} ${r(3)}. NEML 2025 lists noradrenaline 2 mg/mL, vasopressin 20 IU/mL, dobutamine 50 mg/mL, dopamine 40 mg/mL, adrenaline 1 mg/mL, hydrocortisone, human albumin 20% and tranexamic acid 100 mg/mL ${r(8)}. Vasopressor infusions and blood are mainly at referral and district hospitals; at a BHU give oxygen, fluids, IM adrenaline for anaphylaxis, the first antibiotic dose for sepsis, and refer early ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Types of shock", html: `
${tbl(["Type", "Examples", "Skin and pulse", "Neck veins / lungs", "Key first step"], [
["Hypovolaemic", "Bleeding (trauma, GI, PPH, ruptured ectopic, aneurysm), diarrhoea, vomiting, burns", "Cold, pale, fast thready pulse", "Flat veins, clear lungs", "Stop bleeding; blood or crystalloid " + r(4)],
["Distributive — septic", "Pneumonia, urinary, abdominal, skin infection", "Often warm early, bounding; later cold", "Flat veins", "Antibiotics within 1 h, fluids, noradrenaline " + r(1)],
["Distributive — anaphylactic", "Drugs, stings, food, antivenom, ERIG", "Flushed, urticaria, wheeze, swelling", "Flat veins; wheeze", "Adrenaline 0.5 mg IM " + r(6)],
["Distributive — neurogenic", "Cervical or high thoracic spinal cord injury", "Warm, dry, <b>slow</b> pulse", "Flat veins", "Fluids, then vasopressor; exclude bleeding " + LB.exp("STANDARD TEACHING")],
["Cardiogenic", "Large MI, arrhythmia, myocarditis, valve rupture", "Cold, clammy", "Raised JVP, crackles", "ECG, PCI, dobutamine ± noradrenaline " + r(5)],
["Obstructive", "Tension pneumothorax, cardiac tamponade, massive PE", "Cold", "Raised JVP, clear lungs (or absent breath sounds one side)", "Decompress, drain or thrombolyse"]
])}
<p>Shock runs through many chapters; this page is the front door. Mortality exceeds 20% ${r(2)}.</p>
` },
{ id: "patho", title: "Pathophysiology", html: `
<p>Oxygen delivery depends on cardiac output (heart rate × stroke volume), haemoglobin and oxygen saturation. Shock follows a fall in volume (hypovolaemic), pump function (cardiogenic), vascular tone (distributive) or flow through the heart and lungs (obstructive) ${r(2)}.</p>
${F.chart("Shock cascade", [F.s("Low volume, low pump, low tone or obstructed flow"), F.a, F.s("Compensation: tachycardia, vasoconstriction (cold skin), fast breathing, less urine"), F.a, F.s("Anaerobic metabolism → lactate rises"), F.a, F.e("Hypotension (late) → organ failure → death")])}
<p>In bleeding, the <b>lethal triad</b> — hypothermia, acidosis and coagulopathy — feeds itself; large volumes of crystalloid dilute clotting factors and make it worse ${r(4)}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan EM booklet 2018", "India critical care guideline (MoHFW)", "International (SSC 2026, European trauma 2023)", "This guide"], [
["Septic shock fluids", "Crystalloid 20–30 mL/kg, repeat", "Early goal-directed targets (CVP, ScvO₂ over 70%)", "Up to 30 mL/kg crystalloid in 300–500 mL boluses, reassess each " + r(1), "Boluses with reassessment, up to 30 mL/kg " + r(1) + r(3)],
["First vasopressor", "Vasopressors to MAP 65", "Noradrenaline <b>or dopamine</b>", "Noradrenaline; dopamine not recommended " + r(1), "Noradrenaline; dopamine only if nothing else " + r(1)],
["Second vasopressor", "—", "Vasopressin 0.01–0.04 U/min; adrenaline as first alternative", "Vasopressin 0.03 U/min, then adrenaline " + r(1), "Vasopressin 0.03 U/min, then adrenaline " + r(1)],
["Hydrocortisone", "—", "300 mg/day as printed, if poorly responsive to fluids and pressors", "50 mg 6-hourly when noradrenaline/adrenaline ≥ 0.25 µg/kg/min for ≥ 4 h " + r(1), "50 mg 6-hourly as SSC " + r(1)],
["Colloids", "Starch listed", "Starch (HES) listed for district hospitals", "No starches " + r(1), "No starches " + r(1)],
["Haemorrhage fluids", "Crystalloid, then O blood", "Crystalloid through two short wide cannulas", "Limit crystalloid; early blood and plasma; SBP 80–90 until bleeding controlled " + r(4), "Blood early; permissive BP except head injury " + r(4)]
])}
<p class="small">The Indian guideline's sepsis chapter is based on an older Surviving Sepsis edition; where it differs, current SSC advice is followed ${r(7)}.</p>
` },
{ id: "presentation", title: "Assessment", html: `
<h3>Empiric shock criteria (Bhutan booklet)</h3>
<p>Ill appearance or altered mental state; heart rate over 100; respiratory rate over 22; base deficit worse than −5 or lactate over 4 mmol/L; urine under 0.5 mL/kg/h; hypotension for more than 20 minutes — usually systolic BP under 90 ${r(2)}.</p>
<h3>Bedside examination</h3>
<ul>
<li><b>Mental state:</b> anxiety → confusion → drowsiness.</li>
<li><b>Skin:</b> cold, pale, mottled (starting at the knees), capillary refill over 3 s; warm and flushed in early sepsis or anaphylaxis.</li>
<li><b>Pulse and BP:</b> rate, volume, MAP = (SBP + 2 × DBP) ÷ 3; shock index HR ÷ SBP (normal 0.5–0.7) ${r(2)}.</li>
<li><b>Neck veins and lungs:</b> raised JVP with crackles → cardiogenic; raised JVP with clear lungs → obstructive (tension, tamponade, PE); flat → hypovolaemic or distributive.</li>
<li><b>Look for the cause:</b> chest pain; fever and a source; rash and wheeze; blood loss ("on the floor and four more": chest, abdomen, pelvis, long bones); missed period; spinal injury.</li>
<li><b>Urine output:</b> catheter for hourly urine in established shock ${r(7)}.</li>
</ul>
<h3>Bedside ultrasound (RUSH: pump, tank, pipes)</h3>
<p>Pump — pericardial effusion, poor LV, dilated RV. Tank — IVC size, free fluid (FAST), pleural fluid, lung sliding. Pipes — aortic aneurysm, leg DVT ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 45-year-old man after a motorbike crash near Wangdue: pulse 128, BP 86/60, pale, abdominal tenderness. Shock index 1.5 — haemorrhagic shock (about class III). Oxygen, two large cannulas, tranexamic acid 1 g, group O blood, FAST positive → theatre ${r(4)}.</p>
` },
{ id: "ddx", title: "Mimics and traps", html: `
${tbl(["Condition", "Clue", "Action"], [
["Vasovagal faint", "Brief, slow pulse, recovers lying flat", "Observe; ECG"],
["Drug-induced hypotension", "Antihypertensives, sedatives, opioids, spinal anaesthesia", "Stop the drug; fluids; naloxone if opioid"],
["Hypoglycaemia", "Sweaty, confused", "Check glucose in every shocked patient"],
["Adrenal crisis", "Known steroid use or Addison's; low sodium, high potassium", "Hydrocortisone IV " + LB.exp("STANDARD TEACHING")],
["Beta-blocker or calcium-channel blocker overdose", "Slow pulse with low BP", "See the poisoning chapter"],
["Constitutionally low BP", "Well, warm, normal lactate", "Not shock — compare with old records"]
])}
` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Immediately:</b> glucose, blood gas with lactate (or base deficit), haemoglobin, group and crossmatch ${r(2)} ${r(4)}.</li>
<li>FBC, coagulation (and fibrinogen in bleeding), U&amp;E, creatinine, LFT, calcium; blood cultures before antibiotics if this causes no delay ${r(1)} ${r(4)}.</li>
<li>ECG and troponin; chest X-ray; urine pregnancy test in every woman of reproductive age ${r(2)}.</li>
<li>Ultrasound: FAST/RUSH; echo where available ${r(7)}.</li>
<li>Repeat lactate within 2–4 hours to check the response ${r(1)}.</li>
</ul>
` },
{ id: "staging", title: "Severity and calculators", html: `
<h3>Blood loss classes (ATLS)</h3>
${tbl(["Class", "Blood loss", "Signs"], [["I", "Under 15%", "Minimal change"], ["II", "15–30%", "Tachycardia, narrow pulse pressure"], ["III", "30–40%", "Hypotension, confusion, less urine"], ["IV", "Over 40%", "Severe hypotension, drowsy"]])}
<h3>Cardiogenic shock stages (SCAI)</h3>
${tbl(["Stage", "Meaning"], [["A — at risk", "Large MI or heart failure, perfusion normal"], ["B — beginning", "Low BP or fast pulse, no hypoperfusion"], ["C — classic", "Hypoperfusion needing drugs or devices"], ["D — deteriorating", "Getting worse despite first treatment"], ["E — extremis", "Cardiac arrest or near-arrest on full support"]])}
<p class="small">SCAI consensus ${r(5)}.</p>
<div class="calc" data-calc="shockcalc"></div>
<div class="calc" data-calc="vasoinf"></div>
` },
{ id: "manage", title: "Management", html: `
<h3>First 15 minutes — every type</h3>
<ol>
<li>Call for help; airway; oxygen to SpO₂ over 93% ${r(2)}. If intubation is needed, resuscitate first and use ketamine for induction ${r(2)}.</li>
<li>Two short, wide cannulas; intraosseous if IV fails ${r(7)}.</li>
<li>Glucose, gas, bloods, crossmatch. Monitor pulse, BP, SpO₂, mental state; catheter for urine.</li>
<li>Fluid bolus — Ringer's lactate or normal saline 300–500 mL over 15–30 minutes, reassess after each; usual total 20–30 mL/kg ${r(1)} ${r(2)}. Smaller and slower in heart failure.</li>
<li>Name the type and treat the cause (below). Keep the patient warm.</li>
</ol>
<h3>By type</h3>
<ul>
<li><b>Haemorrhagic:</b> direct pressure, tourniquet, pelvic binder, splints; ${dr("tranexamic_acid")} 1 g IV over 10 minutes then 1 g over 8 hours, within 3 hours of injury; group O blood early, then balanced red cells : plasma : platelets; limit crystalloid; SBP 80–90 mmHg until bleeding is controlled, but MAP 80 or more with severe head injury; surgery or embolisation ${r(4)}. See ${P("trauma-adult", "Major trauma")}, ${P("ugib-adult", "GI bleeding")}, ${P("pph-preg", "PPH")}.</li>
<li><b>Septic:</b> blood cultures, antibiotics within 1 hour, fluid boluses up to 30 mL/kg, ${dr("noradrenaline")} for MAP under 65 (peripherally into a large vein is acceptable at first), source control within hours ${r(1)} ${r(3)}. See ${P("sepsis-adult", "Sepsis")}.</li>
<li><b>Anaphylactic:</b> ${dr("adrenaline_im", "adrenaline")} 0.5 mg IM (0.5 mL of 1 mg/mL) into the thigh, repeat after 5 minutes if not better; lie flat, oxygen, fluid bolus; after two IM doses with continuing shock, a low-dose adrenaline infusion in a monitored area ${r(6)}. See ${P("anaphylaxis-adult", "Anaphylaxis")}.</li>
<li><b>Neurogenic:</b> spinal precautions, fluids, then noradrenaline; atropine for symptomatic bradycardia; always look for bleeding as well ${LB.exp("STANDARD TEACHING")}.</li>
<li><b>Cardiogenic:</b> ECG — urgent PCI of the culprit artery for MI with shock; ${dr("dobutamine")} for low output, ${dr("noradrenaline")} for hypotension; avoid large fluid boluses if the lungs are wet; treat arrhythmias; transfer to the Heart Centre ${r(5)} ${r(2)}. See ${P("acs-adult", "Acute coronary syndrome")}.</li>
<li><b>Obstructive:</b> tension pneumothorax — immediate decompression then a chest drain (${P("pneumothorax-adult", "Pneumothorax")}); tamponade — pericardiocentesis; massive PE — heparin and thrombolysis with alteplase 100 mg over 2 hours (${P("vte-adult", "VTE")}).</li>
</ul>
<h3>If shock persists</h3>
<ul>
<li>Noradrenaline rising: add vasopressin 0.03 units/min, then adrenaline; ${dr("hydrocortisone_iv", "hydrocortisone")} 50 mg 6-hourly if noradrenaline or adrenaline ≥ 0.25 µg/kg/min for 4 hours ${r(1)}.</li>
<li>Recheck the type: hidden bleeding, tamponade, pneumothorax, adrenal crisis, uncontrolled source. Dobutamine if the heart is poor despite pressors ${r(1)} ${r(7)}.</li>
<li>Transfuse at Hb under 7 g/dL (higher with active bleeding or myocardial ischaemia) ${r(7)}.</li>
</ul>
<h3>Targets</h3>
<p>MAP 65 or more (60–65 acceptable in older people with sepsis), urine over 0.5 mL/kg/h, falling lactate, capillary refill normalising, mental state improving ${r(1)} ${r(2)}.</p>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "Dose", "Bhutan NEML 2025"], [
[dr("ringer_lactate", "Ringer's lactate / normal saline"), "All types (small volumes if cardiogenic)", "300–500 mL boluses, reassess; usual 20–30 mL/kg " + r(1) + r(2), "Yes"],
[dr("noradrenaline"), "Septic, distributive, cardiogenic hypotension", "Start 0.05–0.1 µg/kg/min, titrate to MAP 65; 4 mg in 50 mL (80 µg/mL) " + r(1), "2 mg/mL (2 mL) " + r(8)],
[dr("vasopressin"), "Second pressor in septic shock", "0.03 units/min fixed " + r(1), "20 IU/mL " + r(8)],
[dr("adrenaline_inf", "Adrenaline infusion"), "Third pressor; refractory anaphylaxis", "Titrate to effect in a monitored area " + r(1) + r(6), "1 mg/mL " + r(8)],
[dr("adrenaline_im", "Adrenaline IM"), "Anaphylaxis", "0.5 mg IM, repeat after 5 min " + r(6), "1 mg/mL " + r(8)],
[dr("dobutamine"), "Cardiogenic, low output", "Up to 20 µg/kg/min " + r(7), "50 mg/mL " + r(8)],
[dr("hydrocortisone_iv", "Hydrocortisone"), "Septic shock on high-dose pressors", "50 mg IV 6-hourly " + r(1), "Yes " + r(8)],
[dr("tranexamic_acid"), "Bleeding", "1 g over 10 min, then 1 g over 8 h, within 3 h " + r(4), "100 mg/mL " + r(8)],
["Dopamine", "Only if nothing else", "Not recommended as first choice " + r(1), "40 mg/mL " + r(8)]
])}
<p class="small">Use the vasopressor calculator above for mL/h. Give infusions through a dedicated line; a central line is preferred for long or high-dose infusions ${r(1)}.</p>
` },
{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Older people and those on beta-blockers:</b> may not become tachycardic; a "normal" BP may be low for a hypertensive patient.</li>
<li><b>Pregnancy:</b> left uterine displacement; maternal compensation hides blood loss and fetal distress may be the first sign. Think ectopic, PPH, abruption, sepsis. See ${P("pph-preg", "PPH")} and ${P("ectopic-preg", "Ectopic pregnancy")}.</li>
<li><b>Children:</b> see ${P("shock-child", "Shock — children")}.</li>
<li><b>Renal or heart failure:</b> small boluses with frequent reassessment; early pressor.</li>
<li><b>High-altitude residents:</b> higher baseline haemoglobin; resting SpO₂ may be lower ${LB.loc()}.</li>
</ul>
` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Shock persists after 2–3 L", "Start a vasopressor; look again for bleeding, tamponade, tension pneumothorax, a cardiac cause, adrenal crisis"],
["BHU or long road transfer", "Oxygen, fluids, keep warm; first antibiotic dose for sepsis; IM adrenaline for anaphylaxis; call ahead; consider aeromedical retrieval (BEAR) for unstable patients " + LB.loc()],
["No blood available", "Control bleeding, TXA, small crystalloid boluses, urgent referral " + r(4)],
["Shock with wet lungs", "Probably cardiogenic — no more fluid; ECG, echo, dobutamine ± noradrenaline " + r(5)],
["Unexplained shock in a woman of reproductive age", "Pregnancy test and FAST — ruptured ectopic until proved otherwise"]
])}
` },
{ id: "complications", title: "Complications", html: `
<p>Acute kidney injury, ARDS, DIC, shock liver, gut ischaemia, multi-organ failure and death; fluid overload and pulmonary oedema from too much crystalloid; dilutional coagulopathy and hypothermia in bleeding ${r(4)}.</p>
` },
{ id: "followup", title: "Monitoring and follow-up", html: `
<ul><li>Reassess every 15 minutes in the first hour: pulse, BP, capillary refill, mental state, urine.</li><li>Fluid balance chart; repeat lactate at 2–4 hours ${r(1)}.</li><li>Daily review of antibiotics, lines and the need for pressors; stop steroids once pressors are off ${r(7)}.</li><li>After discharge: treat the underlying cause; rehabilitation after long ICU stays.</li></ul>
` },
{ id: "images", title: "Images", html: `<p>For pictures of the causes see ${P("sepsis-adult", "Sepsis")}, ${P("acs-adult", "ACS (ECGs)")}, ${P("anaphylaxis-adult", "Anaphylaxis")} and ${P("pneumothorax-adult", "Pneumothorax")}.</p>` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Shock — first hour", [F.s("ABC, oxygen, 2 large cannulas, glucose, gas, bloods"), F.a, F.d("Bleeding? Anaphylaxis? Tension pneumothorax?"), F.a, F.b([["Bleeding", F.e("Pressure, TXA, blood, theatre")], ["Anaphylaxis", F.e("Adrenaline 0.5 mg IM")], ["Tension", F.e("Decompress")]]), F.a, F.s("Fluid bolus 300–500 mL, reassess"), F.a, F.d("JVP raised or crackles?"), F.a, F.b([["Yes", F.e("Cardiogenic / obstructive — stop fluids, ECG, echo, treat cause")], ["No", F.ok("More fluid up to 30 mL/kg; noradrenaline if MAP under 65")]])])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for low BP", "Late recognition; organ damage already done", "Shock index, lactate, skin, mental state, urine " + r(2)],
["Litres of saline in bleeding", "Dilutional coagulopathy, hypothermia", "Blood early, permissive BP " + r(4)],
["Fluid for wet lungs", "Pulmonary oedema", "Check JVP, lungs and a scan before each bolus"],
["Forgetting glucose", "Missed hypoglycaemia", "Check in every shocked patient"],
["Dopamine first", "Not recommended; more arrhythmias", "Noradrenaline first " + r(1)],
["No pregnancy test", "Missed ruptured ectopic", "Test every woman of reproductive age " + r(2)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is the normal shock index?", "0.5–0.7 (heart rate ÷ systolic BP); higher suggests volume loss or LV failure.")}
${qa("Intern/MO", "Adrenaline dose for anaphylactic shock in an adult?", "0.5 mg IM (0.5 mL of 1 mg/mL) into the thigh, repeated after 5 minutes if not better.")}
${qa("Intern/MO", "Raised JVP with clear lungs and low BP after chest trauma — what are you thinking?", "Obstructive shock: tension pneumothorax or cardiac tamponade.")}
${qa("Registrar", "Septic shock on noradrenaline 0.3 µg/kg/min for 4 hours — next steps?", "Add vasopressin 0.03 units/min and hydrocortisone 50 mg 6-hourly; recheck source control.")}
${qa("Registrar", "BP target in a bleeding trauma patient without head injury?", "Systolic 80–90 mmHg until bleeding is controlled; MAP 80 or more if severe head injury.")}
${qa("Specialist", "What is SCAI stage C cardiogenic shock?", "Hypoperfusion needing drugs or mechanical support beyond fluids.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med 2026. <a href="https://doi.org/10.1097/CCM.0000000000007075" target="_blank" rel="noopener">doi:10.1097/CCM.0000000000007075</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Emergency Medicine Clinical Guidelines booklet 2018, chapter 6: Approach to patient in shock.</li>
<li id="ref-3">Ministry of Health, Bhutan. Quick Guide to Sepsis Management, 1st ed. 2025.</li>
<li id="ref-4">Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care 2023;27:80. <a href="https://doi.org/10.1186/s13054-023-04327-7" target="_blank" rel="noopener">doi:10.1186/s13054-023-04327-7</a></li>
<li id="ref-5">Baran DA, Grines CL, Bailey S, et al. SCAI clinical expert consensus statement on the classification of cardiogenic shock. Catheter Cardiovasc Interv 2019;94:29–37. <a href="https://doi.org/10.1002/ccd.28329" target="_blank" rel="noopener">doi:10.1002/ccd.28329</a></li>
<li id="ref-6">Resuscitation Council UK. Emergency treatment of anaphylaxis: guidelines for healthcare providers. London: RCUK; 2021. <a href="https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment" target="_blank" rel="noopener">resus.org.uk</a></li>
<li id="ref-7">Ministry of Health &amp; Family Welfare, Government of India. Guidelines for the management of critical care (severe sepsis and septic shock; haemodynamic monitoring; initial management of severe trauma).</li>
<li id="ref-8">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["SSC 2026 / European trauma / RCUK doses", "<span class='pass'>Consistent</span>", "Same as sepsis-adult, trauma-adult, anaphylaxis-adult"], ["Bhutan booklet ch. 6", "<span class='pass'>Checked</span>", "Via BCR extract"], ["India critical care guideline", "<span class='pass'>Read</span>", "27 Nov 2026; older SSC basis noted"], ["NEML 2025", "<span class='pass'>Checked</span>", "Strengths listed"], ["SCAI DOI", "<span class='pass'>Verified</span>", "Crossref 27 Nov 2026"], ["Neurogenic shock, adrenal crisis", "<span class='unv'>Standard teaching</span>", "Marked"], ["Calculators", "<span class='pass'>Kept</span>", "shockcalc, vasoinf"]], "qc")}` }
]
});
})();
