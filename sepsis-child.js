/* Sepsis and septic shock — children */
registerPage({
id: "sepsis-child",
title: "Sepsis & Septic Shock — Children",
subtitle: "Spotting the sick child, cautious fluid boluses, antibiotics within the hour, and vasoactives when fluids are not enough",
age: "Children (1 month – 17 years)", specs: ["paeds", "picu", "emerg", "id"],
keywords: ["paediatric sepsis", "pediatric sepsis", "septic shock child", "septicaemia", "Phoenix criteria", "Phoenix sepsis score", "fluid bolus", "10-20 mL/kg", "FEAST", "capillary refill", "cold shock", "warm shock", "adrenaline infusion", "epinephrine", "noradrenaline", "ceftriaxone", "ampicillin gentamicin", "cloxacillin", "IMNCI", "intraosseous", "meningococcal", "purpura fulminans"],
related: ["sepsis-adult", "pneumonia-child", "ge-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children compensate for shock until very late, and then crash. The sick child with fever who is drowsy, breathing fast, with cold hands and a slow capillary refill needs antibiotics within the hour, oxygen, and fluid given carefully, bolus by bolus, with a fresh look after each one.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Fever (or low temperature) + lethargy, fast breathing, fast weak pulse, capillary refill over 3 s, cold or mottled skin, poor urine, purpura.</p></div>
<div><h4>Antibiotic</h4><p>Within <b>1 hour</b> in shock: ${dr("ceftriaxone", "ceftriaxone")} 80–100 mg/kg IV/IO (max 4 g/day), or ${dr("ampicillin", "ampicillin")} + ${dr("gentamicin", "gentamicin")}. Add ${dr("cloxacillin", "cloxacillin")} if staphylococcal or shock.</p></div>
<div><h4>Fluid</h4><p>${dr("ringer_lactate", "Ringer's lactate")} or NS <b>10–20 mL/kg</b> over 5–20 min (IMNCI), reassess after each: up to 40 mL/kg (no PICU) or 40–60 mL/kg (PICU available).</p></div>
<div><h4>No boluses if</h4><p>Not hypotensive and no ICU (SSC 2026, strong; FEAST). Severe malnutrition: 15 mL/kg over 1 hour only.</p></div>
<div><h4>Vasoactive</h4><p>Persistent shock after 40 mL/kg: ${dr("adrenaline_inf", "adrenaline")} or ${dr("noradrenaline", "noradrenaline")} 0.05–0.3 µg/kg/min, peripheral or IO.</p></div>
<div><h4>Check</h4><p>Glucose (treat if under 54 mg/dL), calcium, lactate, cultures; oxygen to SpO₂ ≥94% during resuscitation.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan <b>Hospital-based IMNCI 3rd ed. (2024)</b> covers shock (10–20 mL/kg isotonic crystalloid over 5–10 min if hypotensive, 5–20 min if compensated, slower over 60 min for febrile, malnourished or anaemic children) and septicaemia (ampicillin 50 mg/kg 6-hourly + gentamicin 7.5 mg/kg daily, or ceftriaxone 80–100 mg/kg daily, for 7–10 days; cloxacillin 25 mg/kg 6-hourly for staphylococcal sepsis or septic shock). The 2025 Bhutan Sepsis Quick Guide is for adults; there is no separate Bhutan paediatric sepsis protocol.${r(1, 2)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions and burden", html: `
${tbl(["Term", "Phoenix criteria (2024)"], [
["<b>Sepsis</b>", "Suspected infection with a Phoenix Sepsis Score of 2 or more (respiratory, cardiovascular, coagulation, neurological dysfunction)"],
["<b>Septic shock</b>", "Sepsis with at least 1 cardiovascular point: hypotension for age, lactate 5 mmol/L or more, or any vasoactive medicine"],
["Older term: SIRS-based 'sepsis'", "Replaced: SIRS criteria were too broad to identify children at risk of death"]])}
<p>The Phoenix criteria (JAMA 2024) were derived from over 3 million paediatric encounters, including low-resource settings, and adopted by SSC 2026. They describe sepsis; they are not meant to delay treatment of a child who looks unwell.${r(3, 4)}</p>
<p>Common causes in Bhutanese children: pneumonia, meningitis, urinary infection, skin and bone infection (<i>S. aureus</i>), typhoid and other gut infections, and tropical illness (scrub typhus, dengue, malaria in the south). Malnourished and immunocompromised children have more Gram-negative sepsis.${r(1)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Why children deteriorate suddenly", [
F.s("<b>Infection</b> → inflammatory cascade, capillary leak, vasodilatation or vasoconstriction"), F.a,
F.b([
["Cold shock (common in children)", F.s("Low cardiac output, high resistance"), F.e("Cold, mottled, slow capillary refill, weak pulses")],
["Warm shock", F.s("Vasodilatation, low resistance"), F.e("Flushed, bounding pulses, flash capillary refill, wide pulse pressure")]]), F.a,
F.s("<b>Compensation</b>: tachycardia and vasoconstriction keep BP normal; hypotension is a <b>late</b>, pre-arrest sign"), F.a,
F.b([
["Restore", F.ok("Careful <b>fluid boluses</b>, early <b>adrenaline/noradrenaline</b>")],
["Treat infection", F.ok("<b>Antibiotics within 1 hour</b>, source control")],
["Protect", F.ok("Oxygen, glucose, calcium, avoid fluid overload")]])])}
<p>The FEAST trial (Africa, 3,141 children with severe febrile illness and poor perfusion, without hypotension) found that fluid boluses <b>increased</b> 48-hour mortality (10.6% vs 7.3%) where intensive care was not available. Boluses still save lives in hypotensive or hypovolaemic shock (dehydration, dengue), but must be given with reassessment.${r(5)}</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan IMNCI 2024", "SSC children 2026", "WHO ETAT / Pocket Book", "This guide follows"], [
["Fluid bolus", "10–20 mL/kg isotonic crystalloid; over 60 min if febrile, malnourished, anaemic", "PICU available: up to 40–60 mL/kg in 10–20 mL/kg boluses in the first hour; no PICU + hypotension: up to 40 mL/kg; <b>no PICU and no hypotension: no boluses</b> (strong)", "10–20 mL/kg for shock (ETAT 2016)", "SSC 2026 by setting, using IMNCI bolus sizes"],
["Fluid type", "RL or NS", "Balanced crystalloid preferred", "RL or NS", "Ringer's lactate"],
["First vasoactive", "Not specified", "Adrenaline or noradrenaline (no preference); peripheral start", "—", "Adrenaline (cold shock) or noradrenaline (warm)"],
["Antibiotics", "Ampicillin + gentamicin or ceftriaxone; cloxacillin if staph/shock", "Within 1 h in shock; within 3 h in sepsis without shock", "Ampicillin + gentamicin; ceftriaxone", "IMNCI choices, SSC timing"],
["Hydrocortisone", "Not mentioned", "Against in stable shock; only for adrenal insufficiency", "—", "SSC 2026"],
["Oxygen target", "Over 94%", "Conservative SpO₂ 88–92% suggested (once stabilised, in ICU)", "Over 94% in emergency", "≥94% during resuscitation; avoid hyperoxia in ICU"]])}
<p class="qn">IMNCI 2024, SSC children 2026, WHO.${r(1, 2, 6)}</p>
` },

{ id: "presentation", title: "Recognising the septic child", html: `
<h3>Look, listen, feel (IMNCI emergency signs)</h3>
${tbl(["Sign", "What suggests shock or sepsis"], [
["Appearance", "Lethargic, floppy, irritable, not interacting, inconsolable"],
["Breathing", "Fast breathing, grunting, chest indrawing (also acidosis)"],
["Circulation", "<b>Cold hands with capillary refill over 3 seconds and fast, weak pulse</b> (IMNCI shock definition); mottling"],
["Temperature", "Fever, or low temperature (especially infants)"],
["Skin", "<b>Non-blanching rash or purpura</b> (meningococcal disease), cellulitis, abscess"],
["Urine", "Little or none"],
["BP", "Not used to diagnose shock in IMNCI: a normal BP does not exclude compensated shock; hypotension is late"]])}
${tbl(["Age", "Heart rate high if over", "Respiratory rate high if over", "Hypotension: SBP under"], [
["1–12 months", "180", "50", "70"],
["1–5 years", "140", "40", "70 + (2 × age)"],
["6–12 years", "130", "30", "70 + (2 × age), max 90"],
["Over 12 years", "120", "25", "90"]])}
<p class="qn">Approximate thresholds used in paediatric life support; hypotension is a late sign.</p>
<div class="calc" data-calc="phoenix"></div>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Mimic", "Clue"], [
["Hypovolaemia (diarrhoea, bleeding)", "History; responds well to fluids"],
["Dengue shock", "Outbreak season, rising haematocrit, falling platelets, narrow pulse pressure"],
["Cardiogenic shock (myocarditis, congenital heart disease, SVT)", "Enlarged liver, crackles, murmur, gallop; worsens with fluids"],
["DKA", "Deep breathing, high glucose"],
["Inborn errors, adrenal crisis", "Infant, hypoglycaemia, low sodium, high potassium"],
["Intussusception, volvulus, NEC", "Surgical abdomen"],
["Poisoning, anaphylaxis, non-accidental injury", "History, context"]])}
<h3>A typical case</h3>
<p>A 3-year-old girl (14 kg) from Sarpang has had fever for 2 days and is now drowsy with cold hands, capillary refill 4 seconds, HR 170, RR 48, BP 88/50, and a few purpuric spots on her legs. This is <b>compensated septic shock with possible meningococcal disease</b>. Give oxygen, place an IV or IO line, check glucose, take a blood culture, give <b>ceftriaxone 1.4 g IV</b> (100 mg/kg) at once, and a <b>Ringer's lactate bolus of 140–280 mL (10–20 mL/kg)</b> over 5–20 minutes, then reassess liver size, crackles, pulse and capillary refill before any further bolus. If shock persists after 40 mL/kg, start adrenaline 0.05–0.1 µg/kg/min peripherally and contact the referral PICU.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["<b>Bedside glucose</b>", "Hypoglycaemia is common and treatable"],
["Blood culture (before antibiotics if no delay)", "Organism and susceptibility"],
["Lactate", "SSC 2026 recommends measuring it in probable sepsis or septic shock"],
["CBC, CRP, creatinine, electrolytes, calcium, LFT, coagulation", "Organ dysfunction, DIC"],
["Blood gas", "Acidosis"],
["Urine (catheter or clean catch) microscopy and culture", "UTI in infants and young children"],
["Lumbar puncture <b>when stable</b>", "Meningitis; never delay antibiotics for it; avoid in shock, coagulopathy, raised ICP"],
["Chest X-ray, ultrasound", "Pneumonia, effusion, abscess; cardiac and lung POCUS if trained (SSC suggests)"],
["Malaria test, dengue NS1/IgM, scrub typhus test", "Tropical causes by season and region"]])}
` },

{ id: "staging", title: "Severity and level of care", html: `
${tbl(["Situation", "Where"], [
["Infection, looks well, no organ dysfunction", "Treat the infection; safety-net advice"],
["Sepsis (organ dysfunction, Phoenix ≥2)", "Admit; IV antibiotics within 3 h (1 h if deteriorating); close monitoring"],
["Septic shock", "Emergency resuscitation; antibiotics within 1 h; vasoactives; PICU/referral"],
["Severe malnutrition with shock", "SAM shock protocol (slow fluids), antibiotics, PICU if available"]])}
<div class="calc" data-calc="vasoinf"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. The first hour</h3>
${box("red", "Resuscitation steps (do several at once)", `<ol>
<li><b>Airway and oxygen</b> (SpO₂ ≥94% during resuscitation); keep the child warm.</li>
<li><b>Access:</b> IV, or <b>intraosseous</b> within 90 seconds if IV fails.</li>
<li><b>Glucose:</b> if under 54 mg/dL (3 mmol/L), give 10% dextrose 5 mL/kg.</li>
<li><b>Bloods and cultures</b> without delaying antibiotics.</li>
<li><b>Antibiotics within 1 hour</b> in shock (see below); within 3 hours in sepsis without shock after rapid assessment.</li>
<li><b>Fluids by setting:</b>
<ul><li>Hypotensive shock, or PICU available: ${dr("ringer_lactate", "Ringer's lactate")} or NS <b>10–20 mL/kg</b> over 5–10 min (hypotensive) or 5–20 min (compensated), reassessing after each: up to <b>40 mL/kg</b> without PICU, <b>40–60 mL/kg</b> in the first hour where PICU is available.</li>
<li>Poor perfusion <b>without hypotension and no ICU</b>: <b>no boluses</b>; maintenance fluids (SSC 2026, FEAST).</li>
<li>Febrile, anaemic or malnourished children: give boluses <b>more slowly (over 60 minutes)</b> (IMNCI).</li></ul></li>
<li><b>Stop fluids</b> if liver enlarges, crackles appear, breathing worsens or SpO₂ falls.</li></ol>`)}

<h3>B. Antibiotics (IMNCI 2024)</h3>
${tbl(["Choice", "Dose", "Duration / note"], [
[dr("ceftriaxone", "Ceftriaxone"), "80–100 mg/kg IV once daily (or divided 12-hourly), max 4 g/day; meningitis 100 mg/kg/day", "7–10 days; first choice in shock or suspected meningitis"],
[dr("ampicillin", "Ampicillin") + " + " + dr("gentamicin", "gentamicin"), "Ampicillin 50 mg/kg IV 6-hourly + gentamicin 7.5 mg/kg IV once daily", "7–10 days"],
["Add " + dr("cloxacillin", "cloxacillin"), "25 mg/kg IV 6-hourly (50 mg/kg in severe staphylococcal infection)", "Skin/bone source, pneumatoceles, or septic shock"],
["Add " + dr("vancomycin", "vancomycin"), "15 mg/kg IV 6-hourly", "Suspected MRSA or resistant pneumococcal meningitis (referral)"],
["Add " + dr("azithromycin", "azithromycin") + " or " + dr("doxycycline", "doxycycline"), "Azithromycin 10 mg/kg IV daily; doxycycline 2.2 mg/kg BD", "Scrub typhus or leptospirosis suspected"],
["Hospital-acquired, neutropenic, malnourished not responding", dr("piptazo", "Piperacillin–tazobactam") + " 100 mg/kg 8-hourly or " + dr("meropenem", "meropenem") + " 20 mg/kg 8-hourly", "Specialist; de-escalate on culture"]])}
<p class="qn">IMNCI 2024 §11.7; NEMF 2022.${r(1, 7)}</p>

<h3>C. Vasoactives when fluids are not enough</h3>
<ul><li>Persistent shock after 40 mL/kg (or earlier if fluid overload): ${dr("adrenaline_inf", "adrenaline")} <b>0.05–0.3 µg/kg/min</b> (cold shock) or ${dr("noradrenaline", "noradrenaline")} <b>0.05–0.3 µg/kg/min</b> (warm shock). SSC 2026 found no evidence to prefer one; start peripherally or IO rather than waiting for central access.</li>
<li>Simple make-up: <b>0.3 mg/kg in 50 mL</b> → 1 mL/h = 0.1 µg/kg/min.</li>
<li>High doses: add vasopressin or titrate further (specialist). Dopamine is a last resort.</li>
<li><b>Hydrocortisone</b> only for suspected adrenal insufficiency (long-term steroids, purpura fulminans, hypoglycaemia with hyponatraemia) or catecholamine-resistant shock: 2 mg/kg (max 100 mg).</li></ul>

<h3>D. Supportive care</h3>
<ul><li>Correct ionised calcium and glucose; keep Hb above 7 g/dL once stable; nutrition early; avoid cumulative fluid overload (consider diuretics once stable).</li>
<li>Source control: drain abscesses and empyema, remove infected lines, surgery for necrotising infection or abdominal source.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes", "Bhutan (NEML 2025)"], [
[dr("ceftriaxone", "Ceftriaxone"), "80–100 mg/kg daily (max 4 g/day)", "Avoid with IV calcium in neonates", "250 mg to PHC; 1 g NRH/RRH"],
[dr("ampicillin", "Ampicillin"), "50 mg/kg 6-hourly", "With gentamicin", "Listed"],
[dr("gentamicin", "Gentamicin"), "7.5 mg/kg once daily", "Kidney function", "Listed"],
[dr("cloxacillin", "Cloxacillin"), "25–50 mg/kg 6-hourly", "Staphylococcal", "Listed"],
[dr("vancomycin", "Vancomycin"), "15 mg/kg 6-hourly", "MRSA", "NRH/RRH"],
[dr("ringer_lactate", "Ringer's lactate"), "10–20 mL/kg boluses", "Reassess each", "To PHC"],
[dr("adrenaline_inf", "Adrenaline"), "0.05–0.3 µg/kg/min", "Cold shock", "To PHC (ampoules)"],
[dr("noradrenaline", "Noradrenaline"), "0.05–0.3 µg/kg/min", "Warm shock", "NRH/RRH/DH"],
[dr("hydrocortisone_iv", "Hydrocortisone"), "2 mg/kg (max 100 mg)", "Adrenal insufficiency only", "NRH/RRH/DH"],
["10% dextrose", "5 mL/kg", "Glucose under 54 mg/dL", "Listed"]])}
` },

{ id: "populations", title: "Special situations", html: `
<h3>Severe acute malnutrition</h3><ul><li>Shock is often septic. IMNCI: RL in 5% glucose or half-saline in 5% glucose <b>15 mL/kg over 1 hour</b>; stop if pulse rises by 15 or RR by 5; repeat once if improving; otherwise treat as septic shock. Broad antibiotics for all.</li></ul>
<h3>Meningococcal disease</h3><ul><li>Fever with purpura: ceftriaxone immediately (even IM before transfer); prophylaxis for close contacts.</li></ul>
<h3>Sickle cell, asplenia, nephrotic syndrome, chemotherapy</h3><ul><li>Lower threshold; broader cover (pneumococcus, Gram-negatives).</li></ul>
<h3>Infants under 2 months</h3><ul><li>See the neonatal and young-infant sepsis guidance (IMNCI); ampicillin + gentamicin; consider Listeria and HSV.</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Liver enlarges and crackles appear after the second bolus</b>", "Stop fluids; start adrenaline; consider cardiac dysfunction"],
["<b>No IV access in a shocked infant</b>", "Intraosseous needle in the proximal tibia; all drugs and fluids can go through it"],
["<b>District hospital, no ICU, child not hypotensive but cold peripheries</b>", "Antibiotics, oxygen, glucose, maintenance fluids, no boluses; arrange transfer"],
["<b>Shock in dengue season with rising haematocrit</b>", "Dengue shock protocol (see dengue chapter)"],
["<b>Adrenaline running, lactate rising</b>", "Adrenaline itself raises lactate (β2 effect); judge by perfusion and urine output too"]])}
` },

{ id: "complications", title: "Complications and outcomes", html: `
${tbl(["Complication", "Watch for", "Action"], [
["Fluid overload", "Hepatomegaly, crackles, oedema", "Stop fluids, diuretic once stable"],
["ARDS, respiratory failure", "Hypoxia", "CPAP/ventilation"],
["AKI", "Oliguria", "Fluid balance, avoid nephrotoxins"],
["DIC, purpura fulminans", "Bleeding, skin necrosis", "Blood products; surgical review"],
["Hypoglycaemia, hypocalcaemia", "Seizures, poor contractility", "Correct"],
["Long-term: disability, learning and emotional problems", "After discharge", "Early rehabilitation (SSC suggests), follow-up"]])}
` },

{ id: "followup", title: "Follow-up and prevention", html: `
<ul><li>Follow up survivors for growth, development, hearing (after meningitis), school and emotional health.</li><li>Prevention: complete vaccination (Hib, pneumococcal, measles, pentavalent), exclusive breastfeeding, nutrition, hygiene.</li></ul>
${box("red", "Tell parents to return at once if", `<ul><li>The child becomes drowsy or hard to wake, or is very irritable.</li><li>Breathing is fast or difficult; skin is pale, mottled, blue or has a rash that does not fade when pressed.</li><li>Cold hands and feet with fever; no urine for 12 hours; unable to drink.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<p>The key signs in a septic child are bedside findings: capillary refill time, skin colour and mottling, conscious level, breathing and urine output. Use the glass (tumbler) test on any rash: a rash that does not fade under the glass may be meningococcal disease and needs ceftriaxone at once.</p>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with suspected septic shock", [
F.s("Oxygen · IV/IO · glucose · cultures · <b>antibiotic within 1 h</b>"), F.a,
F.d("Hypotensive, or PICU available?"), F.a,
F.b([["Yes", F.s("10–20 mL/kg bolus over 5–20 min; reassess; up to 40 (no PICU) or 40–60 mL/kg")], ["No (normotensive, no ICU)", F.s("No boluses; maintenance fluid; refer")]]), F.a,
F.d("Still in shock, or fluid overload?"), F.a,
F.b([["Yes", F.e("Adrenaline or noradrenaline 0.05–0.3 µg/kg/min (peripheral/IO); PICU")], ["No", F.ok("Monitor; source control; review cultures at 48 h")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>Capillary refill and conscious level tell you more than BP in a child.</li><li>Check glucose in every sick child.</li><li>Give the antibiotic before the lumbar puncture.</li><li>Fluids: 'bolus, reassess, decide', never a fixed volume pushed blindly.</li></ul>
${tbl(["Mistake", "Better"], [["Waiting for a BP drop to diagnose shock", "Treat compensated shock"], ["60 mL/kg pushed in a hospital without ICU", "Reassess after each 10–20 mL/kg; stop at signs of overload"], ["Delaying antibiotics for an LP", "Antibiotic first"], ["Missing hypoglycaemia", "Check glucose early"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "How does IMNCI define shock?", "Cold hands with capillary refill over 3 seconds and a fast, weak pulse.")}
${qa("Intern/MO", "What bolus volume is used for shock in a 12 kg child, and how fast?", "10–20 mL/kg = 120–240 mL Ringer's lactate or saline over 5–10 minutes if hypotensive, 5–20 minutes if compensated (over 60 minutes if febrile, malnourished or anaemic), then reassess.")}
${qa("Intern/MO", "Which antibiotics are first line for septicaemia in IMNCI?", "Ampicillin 50 mg/kg 6-hourly plus gentamicin 7.5 mg/kg daily, or ceftriaxone 80–100 mg/kg daily, for 7–10 days; add cloxacillin for staphylococcal sepsis or septic shock.")}
${qa("Specialist", "What did FEAST show?", "In African children with severe febrile illness and impaired perfusion but no hypotension, without ICU, fluid boluses increased 48-hour mortality compared with no bolus.")}
${qa("Specialist", "Define septic shock by the Phoenix criteria.", "Suspected infection with a Phoenix score of 2 or more and at least 1 cardiovascular point (hypotension for age, lactate ≥5 mmol/L, or vasoactive medication).")}
${qa("Viva", "How do you make up an adrenaline infusion for a child simply?", "0.3 mg/kg in 50 mL: 1 mL/h delivers 0.1 µg/kg/min.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Hospital-based Integrated Management of Neonatal and Childhood Illness, 3rd ed. 2024: §3.5 Shock; §11.7 Septicaemia.</li>
<li id="ref-2">Weiss SL, Peters MJ, Oczkowski SJW, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Pediatr Crit Care Med 2026;27:379–434. <a href="https://doi.org/10.1097/PCC.0000000000003927" target="_blank" rel="noopener">doi:10.1097/PCC.0000000000003927</a></li>
<li id="ref-3">Schlapbach LJ, Watson RS, Sorce LR, et al. International consensus criteria for pediatric sepsis and septic shock. JAMA 2024;331:665–674. <a href="https://doi.org/10.1001/jama.2024.0179" target="_blank" rel="noopener">doi:10.1001/jama.2024.0179</a></li>
<li id="ref-4">Sanchez-Pinto LN, Bennett TD, DeWitt PE, et al. Development and validation of the Phoenix criteria for pediatric sepsis and septic shock. JAMA 2024;331:675–686. <a href="https://doi.org/10.1001/jama.2024.0196" target="_blank" rel="noopener">doi:10.1001/jama.2024.0196</a></li>
<li id="ref-5">Maitland K, Kiguli S, Opoka RO, et al. Mortality after fluid bolus in African children with severe infection (FEAST). N Engl J Med 2011;364:2483–2495. <a href="https://doi.org/10.1056/NEJMoa1101549" target="_blank" rel="noopener">doi:10.1056/NEJMoa1101549</a></li>
<li id="ref-6">World Health Organization. Pocket book of hospital care for children, 2nd ed. 2013; Updated guideline: paediatric emergency triage, assessment and treatment (ETAT). 2016.</li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and NEML 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024 shock and septicaemia", "<span class='pass'>Verified</span>", "Read from the PDF"],
["SSC children 2026", "<span class='pass'>Checked</span>", "From SCCM recommendation listing"],
["Phoenix calculator thresholds", "<span class='pass'>Checked</span>", "Against published tables"],
["Vital-sign threshold table", "<span class='warn'>Approximate</span>", "Adapted from paediatric life-support teaching values"],
["Bhutan paediatric sepsis protocol", "<span class='warn'>Evidence gap</span>", "None found; adult Quick Guide only"],
["Clinical sign-off", "<span class='warn'>Pending</span>", "Needs paediatric intensivist review"]], "qc")}
` }
]
});
