/* Shock — children (Bhutan EM booklet 2018 ch. 8B, SSC children 2020, WHO ETAT) */
registerPage({
id: "shock-child",
title: "Shock — Children",
subtitle: "Children hold their blood pressure until late: treat tachycardia, cold hands and slow capillary refill as shock, give 10–20 mL/kg boluses with reassessment, and check glucose",
age: "Infants & children", specs: ["paeds", "picu", "emerg"],
keywords: ["paediatric shock", "septic shock child", "compensated shock", "capillary refill", "fluid bolus child", "cold shock", "warm shock", "ETAT", "FEAST", "hypotension by age"],
related: ["shock-adult", "sepsis-child", "ge-child", "dengue-child", "anaphylaxis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In children, hypotension means imminent arrest. Recognise compensated shock: fast pulse, CRT over 3 s, cool peripheries, weak pulses, drowsiness.</p>
<div class="glance">
<div><h4>Bolus</h4><p>10–20 mL/kg 0.9% saline or Ringer's over 5–10 min; reassess.</p></div>
<div><h4>Up to</h4><p>40–60 mL/kg in first hour if no overload.</p></div>
<div><h4>Glucose</h4><p>Check in every child; 10% dextrose 2–5 mL/kg if low.</p></div>
<div><h4>Inotrope</h4><p>Cold shock ${dr("adrenaline_inf", "adrenaline")}; warm ${dr("noradrenaline")}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan EM booklet 8B: 20 mL/kg NS/RL over 5–10 min up to 60 mL/kg (cardiogenic 5–10 mL/kg); ceftriaxone 75 mg/kg in septic shock; adrenaline for cold, noradrenaline for warm shock. Its table printing IM adrenaline as '0.1 mg/kg of 1:10,000' is an error — use 0.01 mg/kg of 1 mg/mL IM for anaphylaxis. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Hypotension by age", html: `${tbl(["Age", "Systolic BP below"], [["Term neonate", "60"], ["1–12 months", "70"], ["1–10 years", "70 + 2 × age"], ["Over 10 years", "90"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Paediatric shock", [F.s("Small reserve, high heart rate dependence"), F.a, F.s("Vasoconstriction keeps BP normal"), F.a, F.e("Sudden decompensation → arrest")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan EM booklet", "SSC children 2020 / WHO", "This guide"], [["Bolus where no ICU", "20 mL/kg up to 60", "No bolus without hypotension where ICU unavailable (FEAST); 10–20 mL/kg up to 40–60 with ICU", "Boluses for hypotension/clear shock; 10–20 mL/kg with frequent reassessment " + LB.loc()], ["SAM", "—", "Slow 15 mL/kg over 1 h", "SAM chapter"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>ETAT: airway, breathing, circulation (cold hands + CRT over 3 s + weak fast pulse), coma, convulsions, dehydration.</li><li>Liver size and crackles before and after each bolus.</li></ul><h3>The typical patient</h3><p>A 3-year-old (14 kg) with diarrhoea in Samtse is lethargic, cold hands, CRT 5 s, HR 170, BP 72/40. <b>Hypotensive shock</b>: oxygen, IV/IO access, glucose, 280 mL Ringer's lactate over 10 min, reassess, repeat; then ORS/IV rehydration plan.</p>` },
{ id: "ddx", title: "Causes", html: `${tbl(["Cause", "Clue"], [["Dehydration", "Diarrhoea, sunken eyes"], ["Sepsis", "Fever, rash, focus"], ["Dengue", "Day 3–7, rising haematocrit"], ["Anaphylaxis", "Exposure, urticaria"], ["Cardiogenic", "Big liver, crackles, gallop, murmur"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose, Hb/haematocrit, blood culture, lactate, electrolytes, malaria/dengue tests where relevant.</p>` },
{ id: "staging", title: "Shock calculator", html: `<div class="calc" data-calc="shockcalc"></div>` },
{ id: "manage", title: "Management", html: `<ol><li>Oxygen; IV or IO within 90 seconds.</li><li>Bolus 10–20 mL/kg crystalloid; reassess HR, CRT, BP, mental state, liver, lungs after each.</li><li>Septic: ceftriaxone 75–100 mg/kg within 1 h.</li><li>Fluid-refractory (after 40–60 mL/kg): adrenaline 0.05–0.3 µg/kg/min (peripheral acceptable) or noradrenaline; PICU.</li><li>Hydrocortisone 2 mg/kg (max 100 mg) if catecholamine-resistant.</li><li>Transfuse if Hb under 7 with shock.</li></ol>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ringer_lactate"), "10–20 mL/kg", "Bolus"], [dr("ceftriaxone"), "75–100 mg/kg", "Septic"], [dr("adrenaline_inf", "Adrenaline infusion"), "0.05–0.3 µg/kg/min", "Cold shock"], [dr("noradrenaline"), "0.05–0.3 µg/kg/min", "Warm shock"], [dr("dextrose"), "10% 2–5 mL/kg", "Hypoglycaemia"]])}` },
{ id: "populations", title: "Malnutrition and dengue", html: `<p>SAM: 15 mL/kg over 1 h of half-strength Darrow's/Ringer's + 5% dextrose (see SAM). Dengue: specific fluid plan by haematocrit (see dengue).</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Liver enlarges and crackles after bolus", "Stop fluids, start inotrope, consider furosemide"], ["No IV access", "IO in proximal tibia"]])}` },
{ id: "complications", title: "Complications", html: `<p>Cardiac arrest, AKI, fluid overload, DIC.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Reassess every 5–15 min; urine output 1 mL/kg/h target.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Child in shock", [F.s("O₂, IV/IO, glucose"), F.a, F.s("10–20 mL/kg bolus, reassess"), F.a, F.d("Still shocked after 40–60 mL/kg?"), F.a, F.b([["Yes", F.e("Inotrope, PICU")], ["No", F.ok("Treat cause, maintenance")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Waiting for hypotension", "Late", "Use CRT, HR, mental state"], ["Dextrose fluids for bolus", "Hyperglycaemia, hyponatraemia", "Isotonic crystalloid"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Hypotension threshold for a 4-year-old?", "Systolic under 78 mmHg (70 + 2 × 4).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Weiss SL, Peters MJ, Alhazzani W, et al. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis-associated organ dysfunction in children. Pediatr Crit Care Med. 2020;21:e52-e106. <a href="https://doi.org/10.1097/PCC.0000000000002198" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Emergency booklet 2018, chapter 8B.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"], ["Booklet adrenaline error", "<span class='flag'>Flagged</span>", "Corrected dose given"]], "qc")}` }
]
});
