/* Neonatal shock and fluids — full depth (Thin-page Round 6, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (§6.2 supportive care: shock = CRT over 3 s with feeble fast pulse; §4.8.7
   volume 10 mL/kg NS/RL, repeat; emergency table 10–20 mL/kg NS/RL in 5–10 min; §6.12 surgical babies 10–20 mL/kg; §6.4 fluid
   table; §4.8.8/§8.2 transfer incl. "shock not responding to fluid challenge and vasopressors"); Surviving Sepsis Campaign
   paediatric guidelines 2026 (Weiss et al., Intensive Care Med 2026 — full text read: fluid recs 19–24, vasoactive recs 30–32,
   steroids 40–41, antibiotics within 1 h); ACCM 2017 neonatal and paediatric septic shock (abstract); FEAST (abstract);
   Bhutan NEML 2025 (adrenaline 1 mg/mL, dopamine 40 mg/mL, dobutamine 50 mg/mL, noradrenaline 2 mg/mL, hydrocortisone injection;
   no prostaglandin E1). */
registerPage({
id: "neoshock-child",
title: "Neonatal Shock & Fluids",
subtitle: "Recognise poor perfusion early, give small measured boluses and reassess after each, start an inotrope by weight when fluid is not enough, give antibiotics within an hour, correct glucose and calcium — and think of duct-dependent heart disease or adrenal crisis when a baby collapses in the first weeks",
age: "Newborns", specs: ["neo", "nicu", "cardio", "emerg"],
keywords: ["neonatal shock", "newborn shock", "newborn hypotension", "poor perfusion newborn", "capillary refill", "fluid bolus newborn", "septic shock newborn", "adrenaline infusion", "epinephrine infusion", "dopamine infusion", "dobutamine", "noradrenaline", "rule of 6", "duct-dependent", "coarctation", "hypoplastic left heart", "adrenal crisis", "CAH", "hydrocortisone", "maintenance fluids newborn", "UVC"],
related: ["neosepsis-child", "asphyxia-child", "chd-child", "pphn-child", "preterm-child", "shock-child", "hypo-child", "nec-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Shock means the tissues are not getting enough blood and oxygen. Newborns compensate with a fast heart rate and cold, mottled skin, and their blood pressure falls only late. Sepsis is the commonest cause, but blood loss, asphyxia, duct-dependent heart disease and adrenal crisis must be looked for in every shocked baby.</p>
<div class="glance">
<div><h4>Recognise</h4><p><b>CRT over 3 s</b>, cold limbs, weak fast pulse (Bhutan IMNCI), mottling, HR over 180 or under 100, lethargy, low urine, acidosis.</p></div>
<div><h4>Bolus</h4><p>Normal saline or Ringer's lactate <b>10 mL/kg</b>, reassess, repeat to 20 mL/kg (IMNCI 10–20 mL/kg). Stop if the liver enlarges or crackles appear.</p></div>
<div><h4>Inotrope</h4><p>Still shocked after 20–40 mL/kg: ${dr("adrenaline_inf", "adrenaline")} 0.05–0.3 µg/kg/min or ${dr("dopamine")} 5–20 µg/kg/min — peripheral line is acceptable at first (SSC 2026).</p></div>
<div><h4>Antibiotics</h4><p>Within <b>1 hour</b> (SSC 2026): ampicillin + gentamicin (Bhutan IMNCI) after a blood culture.</p></div>
<div><h4>Always check</h4><p>Glucose (treat under 45 mg/dL), calcium, warmth, oxygen, femoral pulses, liver size.</p></div>
<div><h4>Refer</h4><p>Shock not responding to fluid and vasopressors → NICU (IMNCI transfer list).</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan IMNCI 2024 defines poor perfusion as capillary refill over 3 seconds with a fast, feeble pulse, and treats it with 10–20 mL/kg of normal saline or Ringer's lactate; shock not responding to fluid challenge and vasopressors is on the list for transfer to tertiary care. NEML 2025 has adrenaline 1 mg/mL, dopamine 40 mg/mL, dobutamine 50 mg/mL, noradrenaline 2 mg/mL and IV hydrocortisone. <b>Prostaglandin E1 (alprostadil) is not on the NEML</b> — a baby with suspected duct-dependent heart disease needs urgent discussion with the JDWNRH paediatric team. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types and causes", html: `
${tbl(["Type", "Causes in newborns", "Clues"], [
["<b>Septic (distributive)</b>", "Early-onset (maternal fever, rupture of membranes over 18 h) or late-onset sepsis, NEC", "Risk factors, temperature instability, poor feeding, raised CRP"],
["<b>Hypovolaemic</b>", "Abruption, placenta praevia, cord bleeding, feto-maternal bleed, subgaleal haemorrhage, dehydration", "Pallor, falling haemoglobin, boggy scalp swelling, weight loss"],
["<b>Cardiogenic</b>", "Asphyxia (stunned heart), arrhythmia (SVT), myocarditis, congenital heart disease", "Big liver, gallop, murmur, cardiomegaly, very fast or slow rate"],
["<b>Obstructive / duct-dependent</b>", "Coarctation, critical aortic stenosis, hypoplastic left heart — collapse as the duct closes (day 2–14)", "Weak or absent femoral pulses, arm–leg BP or SpO₂ difference"],
["<b>Endocrine</b>", "Congenital adrenal hyperplasia (salt-wasting crisis, week 1–3), hypopituitarism", "Low sodium, high potassium, low glucose, ambiguous genitalia in girls"],
["<b>Other</b>", "Tension pneumothorax, PPHN, severe anaemia, inborn errors", "See linked pages"]])}
` },

{ id: "patho", title: "Why newborns decompensate fast", html: `
${F.chart("Neonatal shock", [F.s("Immature heart: little reserve to raise stroke volume"), F.a, F.s("Cardiac output depends mostly on heart rate"), F.a, F.s("Transitional circulation — duct and high lung pressures"), F.a, F.e("Compensation: tachycardia, vasoconstriction (cold, mottled, CRT up)"), F.a, F.e("Late: low BP, acidosis, oliguria, bradycardia"), F.a, F.e("Fluid overload easily — liver enlarges, lungs fill")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan IMNCI 2024", "SSC paediatric 2026", "This guide"], [
["Bolus size", "10–20 mL/kg NS or RL over 5–10 min", "10–20 mL/kg per bolus, up to 40–60 mL/kg in the first hour where intensive care is available", "10 mL/kg, reassess after each; preterm over 20–30 min"],
["No intensive care, no hypotension", "—", "<b>No bolus</b>; maintenance fluid (strong) — after FEAST", "Applies to older children; newborns with clear poor perfusion still get 10 mL/kg with reassessment"],
["Fluid type", "NS or RL", "Balanced crystalloid (RL) over saline (conditional)", "RL or NS"],
["When to start vasoactive", "Not specified", "No recommendation before vs after 40 mL/kg", "After 20–40 mL/kg, or sooner if the liver enlarges"],
["Which vasoactive", "—", "Insufficient evidence for adrenaline vs noradrenaline", "Adrenaline (cold shock) or dopamine; noradrenaline for warm shock in NICU"],
["Peripheral vasoactive", "—", "Suggest peripheral start rather than delaying (conditional)", "Dilute via a good peripheral vein or IO, then UVC"],
["Hydrocortisone", "—", "Not if stable on fluids and vasoactives; stress dose for adrenal insufficiency", "Refractory shock or suspected adrenal crisis"],
["Antibiotics", "Ampicillin + gentamicin", "Within 1 h for septic shock (strong)", "Within 1 h"]])}
<p>SSC 2026 covers infants and children; evidence in newborns, especially preterm babies, is limited.${r(2)} FEAST (African children with severe febrile illness, newborns excluded): saline or albumin boluses raised 48-hour mortality versus no bolus (10.5% and 10.6% vs 7.3%).${r(4)} ACCM 2017 gives a separate newborn algorithm.${r(3)}</p>
` },

{ id: "presentation", title: "Assessment", html: `
<h3>Signs of poor perfusion</h3>
${tbl(["Sign", "Shock"], [["Capillary refill (press on the sternum 5 s)", "Over 3 s (Bhutan IMNCI)"], ["Limbs", "Cold to the knee or elbow; mottled"], ["Pulse", "Weak, fast (over 180) — or slow (under 100) late"], ["Consciousness", "Lethargic, floppy, poor cry"], ["Breathing", "Fast, grunting (acidosis, lung fluid)"], ["Urine", "Under 1 mL/kg/h"], ["Blood pressure", "Low is a late sign; a rough guide for mean BP in the first days is at least the gestational age in weeks"], ["Lactate", "Raised (over 2–4 mmol/L)"]])}
<h3>Always feel the femoral pulses and the liver</h3>
<p>Weak femorals with good arm pulses = duct-dependent left-heart obstruction. A liver edge more than 3 cm below the ribs, a gallop or crackles = cardiogenic shock or fluid overload.</p>
<h3>The typical patient</h3>
<p>Tashi, born at 34 weeks, 1.8 kg, is on day 4. He becomes mottled and lethargic; heart rate 192, CRT 5 s, temperature 35.6 °C, glucose 40 mg/dL, lactate 6. Femoral pulses are present; liver 2 cm. <b>Septic shock</b>: warmth, 10% dextrose 3.6 mL, blood culture, ampicillin 90 mg + gentamicin 7.2 mg within the hour, Ringer's lactate 18 mL over 20 minutes, repeated once. Still mottled after 36 mL: adrenaline 1.08 mg in 100 mL of 5% dextrose at 1 mL/h (0.1 µg/kg/min) through a peripheral line while a UVC is placed; NICU called.</p>
` },

{ id: "ddx", title: "Find the cause", html: `
${tbl(["Clue", "Think", "Do"], [
["Risk factors for infection, temperature instability", "Sepsis", "Culture, antibiotics within 1 h"],
["Day 2–14 collapse, weak femorals, arm–leg SpO₂ or BP gap", "Duct-dependent heart disease", "Urgent JDWNRH paediatric/cardiology call; avoid high oxygen; cautious fluid; PGE1 if obtainable"],
["Big liver, gallop, heart rate over 220 and fixed", "SVT", "Vagal manoeuvre (ice to face), adenosine — see arrhythmia guidance"],
["Pale with history of bleeding, boggy scalp", "Hypovolaemia / subgaleal bleed", "Blood 10–20 mL/kg, stop losses"],
["Low sodium, high potassium, ambiguous genitalia, week 1–3", "Adrenal crisis (CAH)", "Hydrocortisone, saline, glucose; send 17-OHP"],
["Difficult birth, low Apgar", "Asphyxia with stunned heart", "Cautious fluid; dobutamine or adrenaline"],
["Sudden collapse on CPAP or ventilation", "Tension pneumothorax", "Transilluminate, needle"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["Bedside glucose", "Hypoglycaemia is common and treatable"],
["Blood gas and lactate", "Acidosis and severity; trend"],
["Blood culture, CRP, full blood count", "Sepsis; haemoglobin for blood loss"],
["Sodium, potassium, calcium, creatinine", "Adrenal crisis, low calcium (worsens heart function), kidney injury"],
["Four-limb BP and pre/post-ductal SpO₂", "Coarctation, duct-dependent disease"],
["Chest X-ray", "Heart size, lung fluid, pneumothorax"],
["ECG", "Arrhythmia"],
["Echocardiography", "Heart function, structure, filling; guides fluid vs inotrope"],
["Cranial ultrasound (preterm)", "IVH after shock"]])}
` },

{ id: "staging", title: "Shock calculator: bolus and infusions", html: `
<p>Enter weight and the likely type. Infusion strengths use the "rule of 6" and the Bhutan NEML ampoule strengths.</p>
<div class="calc" data-calc="neoshock"></div>
` },

{ id: "manage", title: "Management step by step", html: `
<h3>First 15 minutes</h3>
<ol><li>Airway, breathing, oxygen to target SpO₂; bag-mask or CPAP if needed.</li><li>Warmth (radiant warmer); aim 36.5–37.5 °C.</li><li>IV or IO access (UVC in the first week). Bedside glucose; treat under 45 mg/dL with 10% dextrose 2 mL/kg.</li><li>Blood culture, then antibiotics: ${dr("ampicillin")} 50 mg/kg + ${dr("gentamicin")} 4 mg/kg (Bhutan IMNCI); add ${dr("cefotaxime")} and treat as meningitis if indicated.</li><li>Bolus: Ringer's lactate or normal saline <b>10 mL/kg</b> over 5–10 min (term) or 20–30 min (preterm). Reassess CRT, heart rate, liver, breathing.</li><li>Repeat 10 mL/kg if still shocked and no signs of overload (IMNCI 10–20 mL/kg).</li></ol>
<h3>15–60 minutes</h3>
<ul><li>Still shocked after 20–40 mL/kg (or overload): start an inotrope.<ul><li><b>Cold shock</b> (cold, mottled, weak pulses — most newborns): ${dr("adrenaline_inf", "adrenaline")} 0.05–0.3 µg/kg/min, or ${dr("dopamine")} 5–10 µg/kg/min rising to 20.</li><li><b>Warm shock</b> (bounding pulses, flash CRT): ${dr("noradrenaline")} 0.05–0.5 µg/kg/min (NICU).</li><li><b>Poor heart function</b> (asphyxia, myocarditis): ${dr("dobutamine")} 5–10 µg/kg/min, with adrenaline if BP is low.</li></ul></li><li>Start through a good peripheral vein or IO if central access is not ready (SSC 2026); move to UVC as soon as possible; never flush an inotrope line.</li><li>Correct ionised calcium (10% calcium gluconate 2 mL/kg slowly with heart monitoring).</li><li>Blood 10–20 mL/kg for haemorrhage or haemoglobin under about 12 g/dL in a shocked baby.</li></ul>
<h3>Refractory shock</h3>
<ul><li>${dr("hydrocortisone_iv", "Hydrocortisone")} for catecholamine-resistant shock or suspected adrenal insufficiency (stress dose; specialist advice).</li><li>Echo to find the cause; ventilate to reduce oxygen consumption; transfer to the NICU (IMNCI).</li></ul>
<h3>After stabilisation</h3>
<ul><li>Maintenance fluid by day of life (IMNCI table), counting infusion volumes; watch weight, urine, sodium.</li><li>Reassess antibiotics at 36–48 h with cultures.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML strength)", "Dose", "Rule-of-6 preparation"], [
["Ringer's lactate / 0.9% saline", "10 mL/kg bolus, reassess, repeat (IMNCI 10–20 mL/kg)", "—"],
[dr("adrenaline_inf", "Adrenaline 1 mg/mL"), "0.05–0.3 µg/kg/min", "0.6 mg/kg in 100 mL 5% dextrose: 1 mL/h = 0.1 µg/kg/min"],
[dr("dopamine", "Dopamine 40 mg/mL"), "5–20 µg/kg/min", "6 mg/kg in 100 mL: 1 mL/h = 1 µg/kg/min"],
[dr("dobutamine", "Dobutamine 50 mg/mL"), "5–10 (up to 20) µg/kg/min", "6 mg/kg in 100 mL: 1 mL/h = 1 µg/kg/min"],
[dr("noradrenaline", "Noradrenaline 2 mg/mL"), "0.05–0.5 µg/kg/min", "0.6 mg/kg in 100 mL: 1 mL/h = 0.1 µg/kg/min"],
[dr("hydrocortisone_iv", "Hydrocortisone injection"), "Stress dose for refractory shock / adrenal crisis — specialist advice", "—"],
[dr("calcium_gluconate", "10% calcium gluconate"), "2 mL/kg slow IV with heart monitoring", "—"],
[dr("dextrose", "10% dextrose"), "2 mL/kg for glucose under 45 mg/dL", "—"]])}
<p>Antibiotic and fluid doses: Bhutan IMNCI 2024.${r(1)} Infusion ranges: standard neonatal practice consistent with ACCM 2017;${r(3)} vasoactive choice and peripheral use: SSC 2026.${r(2)}</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Preterm babies</b>", "Low BP is common in the first 72 h — treat poor perfusion, not a number alone; give boluses slowly (fast boluses are linked to IVH); dopamine or dobutamine often used"],
["<b>Asphyxiated babies</b>", "The heart is stunned and the kidneys injured — small volumes, early inotrope, restrict maintenance fluid"],
["<b>Suspected duct-dependent lesion</b>", "Avoid high oxygen; modest fluid; urgent cardiology advice; PGE1 is the only treatment that reopens the duct"],
["<b>Babies with severe anaemia or haemorrhage</b>", "Blood rather than repeated crystalloid"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["No IV access after 2 attempts", "Intraosseous needle in the proximal tibia; UVC in the first week"],
["Only peripheral access for adrenaline", "Use a large, well-taped peripheral vein; check the site every 15 min; move to UVC"],
["Liver enlarges after the second bolus", "Stop fluids; start an inotrope; consider heart failure or duct-dependent disease"],
["District hospital, refractory shock", "Continue inotrope, antibiotics, glucose, warmth; call NICU; transfer with an escort able to manage the infusion and ventilate"],
["Collapsed baby, femoral pulses absent", "Treat as duct-dependent until proven otherwise; urgent call to JDWNRH"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Intraventricular haemorrhage and periventricular leukomalacia (preterm babies).</li><li>Acute kidney injury, NEC, liver injury, DIC.</li><li>Fluid overload: pulmonary oedema, worsening breathing.</li><li>Extravasation injury from inotropes.</li><li>Death; neurodevelopmental impairment in survivors.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Developmental follow-up after severe shock, especially preterm babies.</li><li>Cardiology follow-up for structural heart disease; endocrine follow-up for CAH.</li><li>Kidney function check if AKI occurred.</li></ul>
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Umbilical venous catheter", src: "images/umbilical-catheter.png", mod: "Illustration", ctx: "Central access in the first week of life", loc: "Umbilical stump", find: "Catheter in the umbilical vein", interp: "Preferred route for inotropes and concentrated glucose in newborns", by: "BruceBlaus", page: "https://commons.wikimedia.org/wiki/File:Umbilical_Catheter.png", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Shocked newborn", [F.s("ABC, oxygen, warmth, IV/IO/UVC, glucose"), F.a, F.e("Blood culture → antibiotics within 1 h"), F.a, F.e("RL or NS 10 mL/kg; reassess CRT, HR, liver"), F.a, F.d("Still shocked, no overload?"), F.a, F.b([["Yes", F.e("Repeat 10 mL/kg (to 20–40 mL/kg)")], ["No / overload", F.s("Stop fluid")]]), F.a, F.d("Still shocked?"), F.a, F.e("Adrenaline 0.05–0.3 or dopamine 5–20 µg/kg/min; calcium; echo"), F.a, F.d("Weak femorals? Low Na/high K?"), F.a, F.b([["Yes", F.e("Duct-dependent: urgent cardiology; adrenal: hydrocortisone")], ["No", F.ok("NICU if refractory; reassess cause")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for low BP", "Shock is advanced by then", "Treat on CRT, heart rate and limbs"],
["Large fast boluses in preterm babies", "IVH, fluid overload", "10 mL/kg over 20–30 min, reassess"],
["Not feeling femoral pulses", "Duct-dependent lesion missed", "Every shocked baby"],
["Forgetting glucose and calcium", "Poor heart function, seizures", "Check both early"],
["Delaying antibiotics for tests", "Higher mortality", "Within 1 hour"],
["Waiting for central access before inotrope", "Delay", "Peripheral or IO first (SSC 2026)"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "How does Bhutan IMNCI recognise poor perfusion in a newborn?", "Capillary refill over 3 seconds with a fast, feeble pulse (cold periphery).")}
${qa("Intern/MO", "First bolus for a 2.5 kg shocked newborn?", "25 mL Ringer's lactate or normal saline (10 mL/kg), reassess, repeat once if needed.")}
${qa("Intern/MO", "Make up adrenaline for a 2 kg baby by the rule of 6.", "1.2 mg (0.6 × 2) in 100 mL 5% dextrose: 1 mL/h = 0.1 µg/kg/min; run 0.5–3 mL/h.")}
${qa("Intern/MO", "A 10-day-old collapses with absent femoral pulses. What is likely?", "Duct-dependent left-heart obstruction (coarctation, hypoplastic left heart) as the duct closes — urgent cardiology; PGE1.")}
${qa("Specialist", "What does SSC 2026 say about peripheral vasoactives?", "Start vasoactive medicines through a peripheral vein rather than delay until central access (conditional, very low certainty).")}
${qa("Specialist", "What did FEAST show?", "In African children with severe febrile illness and poor perfusion, fluid boluses increased 48-hour mortality versus no bolus (about 10.5% vs 7.3%).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: §4.8.7, §4.8.8, §6.2, §6.4, §6.12, §8.2.</li>
<li id="ref-2">Weiss SL, Peters MJ, Oczkowski SJW, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Intensive Care Med 2026;52(5):937–983. <a href="https://doi.org/10.1007/s00134-026-08360-2" target="_blank" rel="noopener">doi:10.1007/s00134-026-08360-2</a></li>
<li id="ref-3">Davis AL, Carcillo JA, Aneja RK, et al. American College of Critical Care Medicine clinical practice parameters for hemodynamic support of pediatric and neonatal septic shock. Crit Care Med 2017;45(6):1061–1093. <a href="https://doi.org/10.1097/CCM.0000000000002425" target="_blank" rel="noopener">doi:10.1097/CCM.0000000000002425</a></li>
<li id="ref-4">Maitland K, Kiguli S, Opoka RO, et al. Mortality after fluid bolus in African children with severe infection (FEAST). N Engl J Med 2011;364(26):2483–2495. <a href="https://doi.org/10.1056/NEJMoa1101549" target="_blank" rel="noopener">doi:10.1056/NEJMoa1101549</a></li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024", "<span class='pass'>Read directly</span>", "Shock definition, fluid boluses, antibiotics, transfer"],
["SSC paediatric 2026", "<span class='pass'>Read directly</span>", "Full text (Springer): fluid, vasoactive, steroid, antibiotic statements. Older page cited SSC 2020 — updated"],
["ACCM 2017, FEAST", "<span class='pass'>Read directly</span>", "Abstracts"],
["Inotrope dose ranges, neonatal BP rule, hydrocortisone dose", "<span class='unv'>Not read</span>", "Standard neonatal practice; ACCM full text not read — hydrocortisone left as 'stress dose, specialist advice'"],
["NEML 2025", "<span class='pass'>Checked</span>", "Inotropes and hydrocortisone listed; no PGE1"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "neoshock (1.8 kg septic; 3 kg cardiogenic; 0.9 kg hypovolaemic)"]], "qc")}` }
]
});
