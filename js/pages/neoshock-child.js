/* Neonatal shock and fluids (neonatal shock reviews, SSC 2020 paediatric) */
registerPage({
id: "neoshock-child",
title: "Neonatal Shock & Fluids",
subtitle: "Recognise poor perfusion early, give small careful boluses, start inotropes through a UVC, treat sepsis, and think of duct-dependent heart disease when a baby collapses in the first two weeks",
age: "Newborns", specs: ["neo", "nicu", "cardio"],
keywords: ["neonatal shock", "newborn hypotension", "fluid bolus newborn", "adrenaline infusion", "dopamine infusion", "rule of 6", "duct-dependent", "septic shock newborn", "hydrocortisone", "maintenance fluids newborn"],
related: ["neosepsis-child", "asphyxia-child", "chd-child", "pphn-child", "preterm-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Recognise</h4><p>CRT over 3 s, mottling, HR over 180/under 100, low BP, acidosis, oliguria.</p></div>
<div><h4>Bolus</h4><p>10 mL/kg saline; repeat once; blood if bleeding.</p></div>
<div><h4>Inotropes</h4><p>${dr("adrenaline_inf", "Adrenaline")} or ${dr("dopamine")} by rule of 6.</p></div>
<div><h4>Causes</h4><p>Sepsis, blood loss, asphyxia, duct-dependent CHD, adrenal crisis.</p></div>
</div>
${box("bt", "Bhutan note", `<p>NICUs at JDWNRH and regional hospitals use adrenaline and dopamine (both NEML); prostaglandin E1 is not on the NEML — suspected duct-dependent lesions need urgent referral. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Maintenance fluids (term, day of life)", html: `${tbl(["Day", "mL/kg/day (term)", "Preterm/VLBW"], [["1", "60", "80"], ["2", "80", "100"], ["3", "100", "120"], ["4", "120", "140"], ["5+", "150", "150–180"]])}<p>10% dextrose day 1–2, then add sodium and potassium from day 2–3.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Neonatal shock", [F.s("Myocardium immature, limited reserve"), F.a, F.s("Transitional circulation (duct, PVR)"), F.e("Rapid decompensation; fluid overload risk")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "Current", "This guide"], [["First inotrope", "Dopamine", "Adrenaline in septic shock (SSC 2020)", "Adrenaline first if available " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<h3>The typical patient</h3><p>A 1.8 kg baby on day 4 becomes mottled, HR 190, CRT 5 s, lactate 6. <b>Septic shock</b>: cultures, ampicillin + gentamicin (or cefotaxime), 18 mL saline bolus, adrenaline 1.08 mg in 100 mL at 1–2 mL/h, glucose and calcium checks.</p>` },
{ id: "ddx", title: "Causes", html: `${tbl(["Cause", "Clue"], [["Sepsis", "Risk factors, CRP"], ["Hypovolaemia", "Blood loss, dehydration"], ["Cardiogenic", "Asphyxia, arrhythmia, big liver"], ["Duct-dependent CHD", "Day 3–14 collapse, weak femorals"], ["Adrenal crisis (CAH)", "Low Na, high K, ambiguous genitalia"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose, gas, lactate, FBC, CRP, culture, electrolytes, calcium, echo.</p>` },
{ id: "staging", title: "Shock tool", html: `<div class="calc" data-calc="neoshock"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Warmth, glucose, airway/breathing support.</li><li>Bolus 10 mL/kg (max 20–30 mL/kg); stop if hepatomegaly/crackles.</li><li>Adrenaline 0.05–0.3 µg/kg/min (cold shock) or dopamine 5–20 µg/kg/min; dobutamine for poor contractility.</li><li>Hydrocortisone 1 mg/kg 6–8-hourly for refractory shock.</li><li>Antibiotics within 1 hour; correct calcium.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("adrenaline_inf", "Adrenaline"), "0.05–0.3 µg/kg/min", "First line"], [dr("dopamine"), "5–20 µg/kg/min", "Alternative"], [dr("dobutamine"), "5–10 µg/kg/min", "Cardiogenic"], [dr("hydrocortisone_iv", "Hydrocortisone"), "1 mg/kg 6–8-hourly", "Refractory"]])}` },
{ id: "populations", title: "Preterm", html: `<p>Hypotension common in first 72 h; treat if poor perfusion, not BP alone.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No central access", "IO or peripheral (dilute) adrenaline short term"]])}` },
{ id: "complications", title: "Complications", html: `<p>IVH, NEC, AKI, death; fluid overload.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Neurodevelopmental follow-up.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Shocked newborn", [F.s("Glucose, antibiotics, 10 mL/kg"), F.a, F.d("Still shocked?"), F.a, F.b([["Yes", F.e("Inotrope via UVC, echo")], ["No", F.ok("Reassess")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Large boluses", "Overload, IVH", "10 mL/kg, reassess"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Rule of 6 for dopamine?", "6 × weight (mg) in 100 mL: 1 mL/h = 1 µg/kg/min.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Weiss SL, Peters MJ, Alhazzani W, et al. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis-associated organ dysfunction in children. Pediatr Crit Care Med. 2020;21:e52-e106. <a href="https://doi.org/10.1097/PCC.0000000000002198" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
