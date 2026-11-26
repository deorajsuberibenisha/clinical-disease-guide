/* Tetanus in neonates and children — full depth (Batch E-2, 26 Nov 2026).
   Sources read directly: MSF Clinical Guidelines "Tetanus" (Aug 2022: neonatal clinical definition and neonatal/child doses, weaning,
   cord care, maternal vaccination); CDC wound management guidance (Sept 2026); Bhutan STG 2024 §8.1.7; Bhutan EPI manual and the
   Bhutan vaccine monographs in this guide (pentavalent 6/10/14 weeks, DTP 24 months, Td ~6 and ~13 years; maternal Td; neonatal tetanus
   elimination maintained since 1994); Bhutan NEML 2025. */
registerPage({
id: "tetanus-child",
title: "Tetanus — Neonates & Children",
subtitle: "A baby who fed well and then cannot suck, stiffens and has spasms in the first month is neonatal tetanus until proven otherwise. Older children get it from dirty wounds when vaccines were missed. Neutralise toxin, give metronidazole, control spasms safely by weight, and vaccinate the child and the mother",
age: "Neonates & children", specs: ["paeds", "neo", "id"],
keywords: ["neonatal tetanus", "tetanus neonatorum", "tetanus child", "umbilical cord infection", "omphalitis", "trismus", "inability to suck", "spasms newborn", "tetanus immunoglobulin child", "metronidazole neonate", "diazepam infusion child", "DTP", "Td", "maternal Td vaccination", "TsaKum Ney"],
related: ["tetanus-adult", "neolocal-child", "neosepsis-child", "neoseizure-child", "trauma-child", "epilepsy-child", "immunisation-schedule"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Neonatal tetanus comes from an infected umbilical stump in a baby whose mother was not vaccinated. It has almost disappeared from Bhutan thanks to maternal Td vaccination and facility births, but it can return wherever a home birth uses an unclean blade or a dressing of ash, dung or oil. In older children, tetanus follows a dirty wound when vaccine doses were missed.</p>
<div class="glance">
<div><h4>Suspect (neonate)</h4><p>Sucked and cried normally, then <b>3–28 days</b> after birth: irritability, <b>cannot suck</b>, rigidity, spasms (MSF).</p></div>
<div><h4>Neutralise</h4><p>${dr("tetanus_ig", "TIG 500 IU IM")} single dose, in 2 sites, at every age.</p></div>
<div><h4>Metronidazole</h4><p>${dr("metronidazole", "By age and weight")} for 7 days (neonate 15 mg/kg, then 7.5 mg/kg every 12 h; child 10 mg/kg every 8 h).</p></div>
<div><h4>Spasms</h4><p>${dr("diazepam", "Diazepam")} 0.1–0.3 mg/kg slow IV every 1–4 h, then infusion, only while breathing rate is safe for age.</p></div>
<div><h4>Care</h4><p>Dark, quiet room; blindfold neonates; NG feeds of expressed breast milk every 3 h; suction; bag-mask ready.</p></div>
<div><h4>Prevent</h4><p>Vaccinate the child after recovery and <b>start the mother's Td course</b>.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan has maintained the neonatal tetanus elimination criteria since 1994 (EPI manual). Every case is a public-health event: notify it, and check the mother's Td record and the birth practices in the village. Bhutan schedule: pentavalent (DTP-HepB-Hib) at 6, 10 and 14 weeks, DTP booster at 24 months, Td at about 6 years and at 13 years, and Td in pregnancy by record. Anti-tetanus immunoglobulin 500 IU, metronidazole IV, diazepam and midazolam are on the NEML 2025. Severe cases go to the neonatal or paediatric ICU at JDWNRH. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Who gets tetanus", html: `
${tbl(["Group", "Usual entry point", "Why"], [
["<b>Neonates</b> (3–28 days)", "Umbilical stump cut or dressed with unclean material", "Mother never vaccinated or incompletely vaccinated, so no antibodies passed across the placenta"],
["<b>Infants and children</b>", "Thorns, nails, splinters, animal bites, burns, ear infections (otogenic), dental infection", "Missed or delayed primary doses or boosters"],
["<b>Adolescents</b>", "Farm and sports injuries, piercings, unsafe injections", "Missed school-age Td doses"]])}
<p>In neonates, 90% of cases begin within 3–14 days of birth (MSF). Babies of mothers with at least two documented Td doses in pregnancy, or a complete lifetime course, are protected.${r(1)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Neonatal tetanus", [F.s("Unclean cord cut or dressing"), F.a, F.s("C. tetani grows in the dead cord tissue"), F.a, F.s("Toxin blocks inhibitory nerves in the spinal cord and brainstem"), F.a, F.e("Poor suck, trismus, rigidity, spasms, apnoea"), F.a, F.e("Without maternal antibody there is nothing to neutralise the toxin"), F.a, F.ok("Prevented completely by maternal vaccination and clean cord care")])}
<p>The toxin cannot be removed once it is bound to nerves; recovery requires new nerve endings and takes weeks. Survivors need full vaccination because the illness gives no immunity.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Options", "This guide"], [
["TIG dose", "MSF 2022: 500 IU IM at all ages including neonates; some texts scale by weight", "500 IU IM (matches the Bhutan vial)"],
["Cord stump", "MSF: do not excise or debride the cord; treat omphalitis and sepsis. Older practice excised the stump", "Do not excise; clean, and treat infection"],
["Antibiotic", "Metronidazole (MSF) or penicillin", "Metronidazole, with added antibiotics for omphalitis or sepsis"],
["Childhood boosters", "WHO: 3 boosters (12–23 months, 4–7 years, 9–15 years); Bhutan: DTP 24 months, Td ~6 and ~13 years", "Follow the Bhutan EPI schedule; it gives 6 lifetime doses"]])}
` },

{ id: "presentation", title: "Clinical features", html: `
${tbl(["Age", "Early signs", "Established disease"], [
["<b>Neonate</b>", "Irritability, crying, difficulty sucking (stiff lips, trismus) after normal sucking in the first days", "Generalised rigidity, clenched fists, opisthotonus, spasms triggered by touch, noise or light, apnoea, cyanosis; dirty or infected cord stump"],
["<b>Child</b>", "Jaw stiffness, difficulty swallowing, stiff neck", "Fixed smile, board-like abdomen, arched back, very painful spasms; fully conscious"]])}
<h3>A typical patient</h3>
<p>A 9-day-old girl (2.8 kg) born at home in a remote gewog was well for 4 days, then stopped breastfeeding, became irritable and now has stiff spells when touched. Her cord was cut with a household blade and dressed with ash. Her mother had no antenatal care. <b>Action</b>: dark quiet cot, blindfold with a soft cloth bandage, oxygen and suction, IV access. <b>TIG 500 IU IM</b> in two sites. <b>Metronidazole 42 mg IV</b> (15 mg/kg, as she weighs over 2 kg and is 8 days or older) every 12 h for 7 days, plus antibiotics for the infected cord (see Newborn Cord, Skin, Eye & Mouth Infections). <b>Diazepam 0.28–0.84 mg</b> (0.1–0.3 mg/kg) slow IV for spasms, keeping her breathing rate at 30/min or above. NG tube with expressed breast milk every 3 hours. Transfer to the NICU. Start the mother's Td course today, and notify the case.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Distinguishing features"], [
["Neonatal sepsis or meningitis", "Lethargy, poor tone, fever or hypothermia, abnormal consciousness; tetanus babies are alert and stiff"],
["Neonatal seizures (hypoglycaemia, hypocalcaemia, hypoxic injury)", "Low glucose or calcium; birth asphyxia; EEG-type seizures rather than reflex spasms"],
["Kernicterus", "Severe jaundice, arching, high-pitched cry"],
["Drug-induced dystonia (child)", "Metoclopramide or antipsychotic exposure; responds to an anticholinergic"],
["Dental abscess, quinsy, mumps (child)", "Local swelling and fever; trismus without generalised rigidity"],
["Rabies (child)", "Bite history, hydrophobia, changing consciousness"]])}
` },

{ id: "invest", title: "Investigations", html: `
<p>The diagnosis is clinical. Check <b>glucose</b> and <b>calcium</b> (both cause spasm-like episodes in neonates), electrolytes, full blood count and blood culture (cord sepsis), and consider lumbar puncture only if meningitis is likely. Monitor SpO₂, respiratory rate and heart rate continuously.</p>
` },

{ id: "staging", title: "Doses by weight", html: `
<div class="calc" data-calc="tetanusrx"></div>
${tbl(["Drug", "Neonate", "Child (1 month and over)"], [
["TIG", "500 IU IM, 2 sites", "500 IU IM, 2 sites"],
["Metronidazole IV for 7 days", "0–7 days (and 8 days–1 month under 2 kg): 15 mg/kg on day 1, then after 24 h 7.5 mg/kg every 12 h. 8 days–1 month 2 kg or more: 15 mg/kg every 12 h. Infuse over 60 min", "10 mg/kg every 8 h (max 1500 mg a day), over 30 min"],
["Diazepam boluses", "0.1–0.3 mg/kg slow IV every 1–4 h (emulsion)", "Same (5 mg/mL solution); rectal first dose if no IV"],
["Diazepam infusion", "0.1–0.5 mg/kg/h, up to 0.8 mg/kg/h", "Same"],
["Minimum respiratory rate to continue diazepam", "30/min", "30 (under 1 y), 25 (1–4 y), 20 (5–12 y), 14 (over 12 y)"]])}
<p>All doses from MSF Clinical Guidelines 2022.${r(1)}</p>
` },

{ id: "manage", title: "Management", html: `
<ol>
<li><b>Environment:</b> dark, quiet room; blindfold neonates with a cloth bandage; handle minimally and gently, after sedation; turn every 3–4 hours; teach the family the danger signs.</li>
<li><b>Airway and breathing:</b> gentle suction of mouth and oropharynx; oxygen; bag-mask, suction and intubation equipment always at the bedside.</li>
<li><b>TIG 500 IU IM</b> in two separate sites.</li>
<li><b>Metronidazole IV</b> for 7 days by age and weight (above).</li>
<li><b>Entry point:</b> clean wounds under sedation; irrigate and debride deep wounds. <b>Umbilical cord: do not excise or debride</b>; treat omphalitis and sepsis with additional antibiotics (MSF; see Neonatal sepsis).</li>
<li><b>Spasm control:</b> diazepam boluses, then an infusion through a dedicated vein if spasms persist despite hourly doses, while respiratory rate stays above the floor for age. Ventilation in a NICU/PICU if spasms cannot be controlled safely.</li>
<li><b>Nutrition and fluids:</b> NG tube; neonates get expressed breast milk every 3 hours (hypoglycaemia risk); count diazepam infusion volume in daily fluids.</li>
<li><b>Pain:</b> oral morphine via NG tube if needed, with closer breathing monitoring.</li>
<li><b>Weaning (MSF):</b> once spasms lessen, give the daily IV diazepam dose orally in 4 doses 6 hours apart via NG; halve the infusion after the first NG dose and stop it after the second; then reduce by 10–20% a day to 0.05 mg/kg every 6 hours; then lengthen the interval to 8, 12 and 24 hours before stopping. Slow down if withdrawal signs appear. Infants may stay hypertonic after the spasms stop.</li>
<li><b>Vaccinate</b> the child after recovery, and <b>start the mother's Td</b> in neonatal tetanus.</li>
</ol>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML 2025)", "Use", "Notes"], [
[dr("tetanus_ig", "Anti-tetanus immunoglobulin 500 IU"), "Treatment 500 IU; wound prophylaxis 250 IU (500 IU if over 24 h)", "IM only"],
[dr("metronidazole", "Metronidazole 5 mg/mL IV"), "Toxin production", "Doses by age above"],
[dr("diazepam", "Diazepam 5 mg/mL"), "Spasms and sedation", "Respiratory-rate floors"],
[dr("midazolam", "Midazolam 1 mg/mL"), "ICU alternative", "Specialist"],
["Pentavalent, DTP, Td vaccines", "After recovery and for prevention", "Bhutan EPI schedule"]])}
` },

{ id: "populations", title: "Wound prophylaxis in children", html: `
<div class="calc" data-calc="tetanuswound"></div>
<p>For children under 7, give a DTP-containing vaccine according to the national schedule rather than Td. Count only documented doses; an unknown history means "unvaccinated" (CDC). TIG doses are the same as for adults.${r(2)}</p>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Spasms with apnoea in a neonate at a district hospital", "Bag-mask, stop further diazepam until breathing recovers, transfer to NICU with an escort able to ventilate", "Respiratory depression from disease and sedation"],
["Family want to apply traditional medicine to the cord", "Explain kindly; keep the cord clean and dry (chlorhexidine where it is protocol)", "Contaminated cord dressings cause tetanus"],
["Older child with a nail wound, no vaccine card", "Treat as unvaccinated: start the course and give TIG for a dirty wound", "Undocumented doses do not count"],
["Neonate survives; mother is pregnant again later", "Ensure she has completed Td before delivery; plan facility birth", "Protects the next baby"]])}
` },

{ id: "complications", title: "Complications and outcome", html: `
<p>Apnoea and hypoxia, aspiration pneumonia, sepsis from the cord, hypoglycaemia, autonomic instability, fractures, malnutrition and dehydration. Neonatal tetanus has a high case-fatality rate without intensive care. Survivors may have developmental problems after hypoxic episodes, so arrange follow-up.</p>
` },

{ id: "followup", title: "Prevention and follow-up", html: `
${box("green", "For the child", `<ul><li>Complete the vaccine course after recovery.</li><li>Developmental follow-up at 3, 6 and 12 months after neonatal tetanus.</li></ul>`)}
${box("blue", "For the mother and community", `<ul><li>Td for the mother now; plan facility delivery for future pregnancies.</li><li>Clean birth: clean hands, clean surface, clean blade, clean cord tie, nothing applied to the cord.</li><li>Keep every child up to date with pentavalent, DTP and Td doses.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Neonatal tetanus", src: "images/neonatal-tetanus.jpg", mod: "Photograph", ctx: "Generalised tetanus in a newborn", loc: "Whole body", find: "Rigidity with arching and clenched posture", interp: "Neonatal tetanus from cord infection in a baby of an unvaccinated mother", by: "CDC Public Health Image Library", page: "https://commons.wikimedia.org/wiki/File:Neonatal_tetanus_6374.jpg", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Neonate who stops sucking and has spasms", [F.s("Fed normally at first, then 3–28 days: poor suck, rigidity, spasms"), F.a, F.e("Quiet dark cot, blindfold, suction, oxygen, IV; check glucose and calcium"), F.a, F.e("TIG 500 IU IM + metronidazole by age/weight + cord and sepsis antibiotics"), F.a, F.e("Diazepam 0.1–0.3 mg/kg slow IV; infusion if needed; RR ≥ 30"), F.a, F.d("Breathing safe?"), F.a, F.b([["No", F.e("Ventilate; NICU transfer")], ["Yes", F.ok("NG breast milk 3-hourly; wean slowly; vaccinate mother")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling it neonatal sepsis only", "Tetanus treatment missed", "Ask: did the baby feed normally at first? Is the baby alert and stiff?"],
["Excising the cord stump", "No benefit; bleeding", "Do not excise; treat infection (MSF)"],
["Oversedating without monitoring", "Apnoea", "Respiratory-rate floor and bag-mask ready"],
["Forgetting the mother", "Next baby at risk", "Start her Td course"],
["Not notifying", "A cluster may be missed", "Report every case"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the clinical picture of neonatal tetanus?", "A baby who sucked and cried normally, then 3–28 days after birth becomes irritable, cannot suck, and develops rigidity and spasms (MSF).")}
${qa("Intern/MO", "What is the metronidazole dose for a 3 kg neonate aged 10 days?", "15 mg/kg = 45 mg IV every 12 hours (8 days to 1 month, 2 kg or more), over 60 minutes, for 7 days.")}
${qa("Intern/MO", "What TIG dose does a neonate with tetanus need?", "500 IU IM as a single dose split into 2 sites — the same as adults (MSF 2022).")}
${qa("Specialist", "Describe the MSF diazepam weaning plan.", "Give the daily IV dose orally in 4 doses via NG; halve then stop the infusion; reduce 10–20% daily to 0.05 mg/kg 6-hourly; then lengthen the interval to 8, 12 and 24 hours; slow down if withdrawal signs appear.")}
${qa("Specialist", "What public-health actions follow a case of neonatal tetanus in Bhutan?", "Notify; vaccinate the mother; review the birth and cord practices locally; check Td coverage among women of reproductive age in the area.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Médecins Sans Frontières. Clinical guidelines — diagnosis and treatment manual: Tetanus. Updated August 2022. <a href="https://medicalguidelines.msf.org/en/viewport/CG/english/tetanus-16689919.html" target="_blank" rel="noopener">medicalguidelines.msf.org</a></li>
<li id="ref-2">Centers for Disease Control and Prevention. Clinical guidance for wound management to prevent tetanus. Updated 8 September 2026. <a href="https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html" target="_blank" rel="noopener">cdc.gov</a></li>
<li id="ref-3">Yen LM, Thwaites CL. Tetanus. Lancet 2019;393:1657–1668. <a href="https://doi.org/10.1016/S0140-6736(18)33131-3" target="_blank" rel="noopener">doi:10.1016/S0140-6736(18)33131-3</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.7 Tetanus; Expanded Programme on Immunization manual (revised); National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["MSF Clinical Guidelines 2022", "<span class='pass'>Read directly</span>", "Neonatal definition, all neonatal and child doses, weaning"],
["CDC wound guidance 2026", "<span class='pass'>Read directly</span>", "Prophylaxis rules"],
["Bhutan EPI manual and schedule", "<span class='pass'>Read directly</span>", "Elimination since 1994; schedule from the vaccine monographs"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculators", "<span class='pass'>Tested</span>", "tetanusrx (neonate and child), tetanuswound"]], "qc")}` }
]
});
