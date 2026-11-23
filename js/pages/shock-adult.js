/* Shock — adults (Bhutan EM booklet 2018 ch. 6, SSC 2021, ATLS) */
registerPage({
id: "shock-adult",
title: "Shock — Adults",
subtitle: "Recognise shock before the blood pressure falls, find which of the four types it is, give oxygen and fluids, and fix the cause",
age: "Adults", specs: ["emerg", "medicine", "surg"],
keywords: ["shock", "hypovolaemic shock", "haemorrhagic shock", "septic shock", "cardiogenic shock", "obstructive shock", "anaphylactic shock", "shock index", "noradrenaline", "lactate", "RUSH", "fluid resuscitation"],
related: ["shock-child", "sepsis-adult", "anaphylaxis-adult", "ugib-adult", "acs-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Shock is inadequate tissue perfusion. Low BP is a late sign: confusion, cold skin, fast pulse, fast breathing and low urine output come first.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Shock index over 1, lactate over 2–4, mottled skin, urine under 0.5 mL/kg/h.</p></div>
<div><h4>Resuscitate</h4><p>Oxygen, 2 large lines, crystalloid 20–30 mL/kg, reassess.</p></div>
<div><h4>Classify</h4><p>Hypovolaemic, distributive, cardiogenic, obstructive (RUSH scan).</p></div>
<div><h4>Support</h4><p>${dr("noradrenaline")} for MAP under 65 after fluids.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan EM booklet 2018 (chapter 6): empiric shock criteria, crystalloid 20–30 mL/kg, O-negative blood for haemorrhage, vasopressors to MAP 65, dobutamine for cardiogenic shock. Noradrenaline, adrenaline, dopamine and dobutamine are on the NEML at referral hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Examples", "Clues"], [["Hypovolaemic", "Bleeding, diarrhoea, burns", "Flat neck veins, cold"], ["Distributive", "Sepsis, anaphylaxis, neurogenic", "Warm early, bounding pulses; neurogenic: slow pulse"], ["Cardiogenic", "MI, arrhythmia, myocarditis, valve", "Raised JVP, crackles, ECG"], ["Obstructive", "Tension pneumothorax, tamponade, massive PE", "Raised JVP, clear lungs, specific signs"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Shock", [F.s("Low cardiac output or low vascular tone"), F.a, F.s("Compensation: tachycardia, vasoconstriction"), F.a, F.e("Anaerobic metabolism → lactate → organ failure")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan EM booklet", "SSC 2021 / ATLS", "This guide"], [["Septic fluids", "20–30 mL/kg", "30 mL/kg in first 3 h (weak)", "30 mL/kg, reassess after each 500 mL " + LB.loc()], ["Haemorrhage", "Crystalloid then blood", "Limit crystalloid to 1 L, early blood 1:1:1", "Early blood, permissive BP"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Mental state, skin (cold, mottled, CRT over 3 s), pulse, BP, RR, SpO₂, urine, temperature.</li><li>JVP, lung crackles, heart sounds, abdomen, source of bleeding/sepsis.</li><li>Bedside ultrasound (RUSH): pump, tank, pipes.</li></ul><h3>The typical patient</h3><p>A 45-year-old man after a motorbike crash near Wangdue: pulse 128, BP 86/60, pale, abdominal tenderness. <b>Shock index 1.5 — haemorrhagic shock</b>: oxygen, 2 large lines, tranexamic acid 1 g, 1 L crystalloid then O-negative blood, FAST scan, theatre.</p>` },
{ id: "ddx", title: "Mimics", html: `${tbl(["Condition", "Clue"], [["Vasovagal", "Brief, bradycardia, recovers lying flat"], ["Drug-induced hypotension", "Antihypertensives, sedatives"], ["Hypoglycaemia", "Check glucose"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC, crossmatch, coagulation, U&E, LFT, lactate/gas, glucose, cultures, troponin, ECG, chest X-ray, pregnancy test, ultrasound.</p>` },
{ id: "staging", title: "Shock calculator", html: `<div class="calc" data-calc="shockcalc"></div><div class="calc" data-calc="vasoinf"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Airway; oxygen to SpO₂ 94–98%; ketamine if intubation needed.</li><li>2 large-bore IV (IO if impossible); crystalloid boluses with reassessment; avoid overload in cardiogenic shock.</li><li><b>Haemorrhagic:</b> control bleeding, tranexamic acid within 3 h, blood early, theatre.</li><li><b>Septic:</b> antibiotics within 1 h, source control, noradrenaline (peripheral acceptable short term).</li><li><b>Anaphylactic:</b> adrenaline 0.5 mg IM, repeat 5 min.</li><li><b>Cardiogenic:</b> treat cause (PCI/thrombolysis, rhythm), dobutamine ± noradrenaline.</li><li><b>Obstructive:</b> decompress, drain, thrombolyse.</li><li>Targets: MAP 65, urine 0.5 mL/kg/h, lactate falling, mental state improving.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("noradrenaline"), "0.05–0.5 µg/kg/min", "Septic, distributive"], [dr("adrenaline_inf", "Adrenaline infusion"), "0.05–0.5 µg/kg/min", "Second agent"], [dr("dobutamine"), "2.5–20 µg/kg/min", "Cardiogenic"], [dr("tranexamic_acid"), "1 g over 10 min + 1 g over 8 h", "Bleeding, within 3 h"], [dr("ringer_lactate"), "20–30 mL/kg", "Fluid"]])}` },
{ id: "populations", title: "Special groups", html: `<ul><li>Elderly/beta-blocked: may not be tachycardic.</li><li>Pregnancy: left tilt; fetal distress is an early sign.</li><li>High altitude residents: different baseline Hb/SpO₂.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Shock persists after 3 L", "Vasopressor, look for bleeding/obstruction/cardiac cause"], ["Long transfer from BHU", "Fluids, keep warm, early referral; pre-referral antibiotics if septic"]])}` },
{ id: "complications", title: "Complications", html: `<p>AKI, ARDS, DIC, liver injury, multi-organ failure, death; fluid overload.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Reassess every 15 min; fluid balance chart; repeat lactate at 2 h.</p>` },
{ id: "images", title: "Images", html: `<p>See sepsis, ACS and anaphylaxis chapters.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Shock", [F.s("ABC, O₂, 2 lines, bloods, glucose"), F.a, F.s("Fluid bolus, reassess"), F.a, F.d("JVP raised / crackles?"), F.a, F.b([["Yes", F.e("Cardiogenic/obstructive — stop fluids, treat cause")], ["No", F.ok("More fluid/blood, vasopressor if MAP under 65")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Waiting for low BP", "Late recognition", "Shock index, lactate, skin"], ["Large crystalloid volumes in bleeding", "Coagulopathy", "Blood early"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Normal shock index?", "0.5–0.7 (HR ÷ SBP).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Evans L, Rhodes A, Alhazzani W, et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med. 2021;47:1181-1247. <a href="https://doi.org/10.1007/s00134-021-06506-y" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Emergency booklet 2018, chapter 6.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
