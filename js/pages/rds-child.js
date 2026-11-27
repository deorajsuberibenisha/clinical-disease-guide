/* Respiratory distress in the newborn — full depth (Thin-page Round 5, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (Module 1 §3.4 oxygen therapy incl. nasal-prong flows for preterm/LBW;
   Module 2 §6.4 IV fluid indications and volumes; §6.7 sepsis antibiotics; §4.8.8 transfer criteria; §7 preterm problems);
   Bhutan Emergency Medical Services "Clinical orientation manual — Neonatal resuscitation" 2018 (Chapter 3B: premature babies,
   CPAP, surfactant if CPAP fails); WHO recommendations for care of the preterm or LBW infant 2022 (Table 1, B.1–B.6 CPAP and
   caffeine); European consensus guidelines on RDS 2022 update (Sweet et al., Neonatology 2023 — recommendations and doses);
   Bhutan NEML 2025. */
registerPage({
id: "rds-child",
title: "Respiratory Distress in the Newborn",
subtitle: "Fast breathing, grunting, flaring and indrawing in the first days of life: keep the baby warm, give oxygen to the right saturation, start CPAP early for preterm babies, treat possible infection, and know the five common causes — RDS, transient tachypnoea, pneumonia, meconium aspiration and pneumothorax",
age: "Newborns", specs: ["neo", "nicu", "resp", "paeds"],
keywords: ["neonatal respiratory distress", "respiratory distress syndrome", "RDS", "hyaline membrane disease", "surfactant deficiency", "TTN", "transient tachypnoea of the newborn", "meconium aspiration syndrome", "MAS", "congenital pneumonia", "bubble CPAP", "CPAP", "surfactant", "LISA", "caffeine", "Silverman score", "Downes score", "grunting", "pneumothorax newborn", "PPHN"],
related: ["preterm-child", "asphyxia-child", "neosepsis-child", "pneumothorax-child", "chd-child", "cdh-child", "nec-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A newborn breathing 60 or more times a minute, grunting, flaring the nose or pulling in the chest is in respiratory distress. In a preterm baby the usual cause is surfactant deficiency (RDS); in a term baby born by caesarean it is usually transient tachypnoea; any baby can have pneumonia or sepsis. Warmth, oxygen to target, and early CPAP save lives in district newborn units.</p>
<div class="glance">
<div><h4>Signs</h4><p>RR 60+, grunting, flaring, chest indrawing, cyanosis, apnoea. Score with Silverman–Andersen.</p></div>
<div><h4>Oxygen</h4><p>Nasal prongs <b>0.5–1 L/min</b> (up to 2 L/min if severe) for preterm/LBW (Bhutan IMNCI). Target SpO₂ <b>90–94%</b> in preterm babies (European 2022).</p></div>
<div><h4>CPAP</h4><p>For preterm babies with signs of RDS (WHO strong). <b>Bubble CPAP</b> is preferred; start about <b>6 cmH₂O</b>.</p></div>
<div><h4>Surfactant</h4><p>If FiO₂ over 0.30 on CPAP 6+ cmH₂O (European 2022) — at a unit with surfactant and staff to give it.</p></div>
<div><h4>Infection</h4><p>${dr("ampicillin", "Ampicillin")} 50 mg/kg + ${dr("gentamicin", "gentamicin")} 4 mg/kg if any risk; stop at 36–48 h if well and cultures negative.</p></div>
<div><h4>Support</h4><p>Warmth 36.5–37.5 °C, glucose, IV fluids if RR 70+ or severe indrawing, early breast milk.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan IMNCI 2024 gives oxygen by nasal prongs as the preferred method for preterm and low-birth-weight babies (0.5–1 L/min, up to 2 L/min in severe distress) and lists respiratory distress needing ventilator support for transfer to neonatal intensive care. The Bhutan Emergency booklet 2018 advises CPAP for a breathing preterm baby with a heart rate over 100, and surfactant at the resuscitation corner if available when CPAP fails. <b>Caffeine citrate</b> 20 mg/mL injection and oral solution are on the NEML 2025; <b>surfactant is not</b> — it is a NICU (JDWNRH) item. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes", html: `
${tbl(["Cause", "Typical baby", "Course"], [
["<b>Respiratory distress syndrome (RDS)</b>", "Preterm, especially under 32 weeks; no antenatal steroids; infant of diabetic mother; male; caesarean without labour", "Distress from birth, worse over 24–48 h, improves after 48–72 h"],
["<b>Transient tachypnoea of the newborn (TTN)</b>", "Term or late preterm, elective caesarean, fast labour", "Fast breathing, little oxygen need, settles in 24–72 h"],
["<b>Congenital pneumonia / sepsis</b>", "Maternal fever, rupture of membranes over 18 h, foul liquor, chorioamnionitis", "Any time; may be with shock, temperature instability"],
["<b>Meconium aspiration syndrome</b>", "Term or post-term, fetal distress, thick meconium", "Severe early distress, barrel chest, risk of PPHN and pneumothorax"],
["<b>Pneumothorax</b>", "After resuscitation, on CPAP or ventilation, MAS, RDS", "Sudden worsening"],
["<b>Others</b>", "Congenital heart disease, diaphragmatic hernia, choanal atresia, PPHN, hypothermia, hypoglycaemia, metabolic acidosis, severe anaemia or polycythaemia", "See linked pages"]])}
<p>Bhutan IMNCI lists respiratory distress and RDS, apnoea and infection among the main problems of preterm babies, and fetal distress, meconium aspiration and asphyxia among the problems of small-for-date babies.${r(1)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Respiratory distress syndrome", [F.s("Too little surfactant in immature lungs"), F.a, F.s("High surface tension — alveoli collapse at the end of each breath"), F.a, F.e("Low lung volume, stiff lungs, hypoxia, work of breathing rises"), F.a, F.e("Grunting = baby closing the glottis to keep the lungs open (self-made PEEP)"), F.a, F.ok("CPAP holds the alveoli open; surfactant lowers surface tension")])}
<p>Antenatal corticosteroids speed surfactant production; this is why the obstetric team gives them before expected preterm birth (WHO 2022, European 2022).${r(3)}${r(4)} In TTN, lung fluid clears slowly after a birth without labour. In meconium aspiration, meconium blocks small airways, inactivates surfactant and inflames the lung.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan (IMNCI 2024 / EM booklet 2018)", "WHO 2022", "European RDS 2022", "This guide"], [
["Oxygen target", "SpO₂ above 90%", "—", "90–94% (alarms 89% and 95%) for preterm", "90–94% preterm; above 90% term"],
["Oxygen device", "Nasal prongs 0.5–1 L/min, 2 L/min severe", "—", "Blended oxygen", "Prongs; blender with CPAP"],
["When to start CPAP", "Breathing preterm with HR over 100 and distress", "Preterm with RDS signs (strong); consider from birth under 32 weeks (conditional)", "From birth for those at risk (e.g. under 30 weeks)", "Early CPAP for any preterm with distress"],
["CPAP device", "—", "Bubble CPAP preferred (conditional)", "Short binasal prongs or mask", "Bubble CPAP"],
["CPAP pressure", "—", "—", "Start about 6–8 cmH₂O", "Start 6; range 5–8"],
["Surfactant", "If available and CPAP fails", "Not in this guideline", "Rescue if FiO₂ over 0.30 on CPAP 6+; LISA preferred; poractant 200 mg/kg", "Refer when FiO₂ rises above 0.30–0.40"],
["Caffeine", "—", "Apnoea (strong), extubation under 34 w (strong), prevention under 34 w (conditional)", "20 mg/kg load, 5–10 mg/kg/day", "Under 34 weeks on CPAP or with apnoea"],
["Antibiotics", "Ampicillin + gentamicin if risk", "—", "Stop early once sepsis is excluded (within 36 h)", "Review at 36–48 h"]])}
<p>Bhutan sources;${r(1)}${r(2)} WHO 2022;${r(3)} European 2022.${r(4)}</p>
` },

{ id: "presentation", title: "Assessment", html: `
<h3>Look and count</h3>
<ul><li>Breathing rate over a full minute (60 or more is fast); grunting, nasal flaring, intercostal and subcostal indrawing, see-saw breathing.</li><li>Colour and SpO₂ (right hand pre-ductal and a foot post-ductal — a difference over 3–5% suggests PPHN or duct-dependent heart disease).</li><li>Heart rate, capillary refill, temperature, glucose.</li><li>Air entry on both sides; heart sounds position; abdomen (scaphoid in diaphragmatic hernia).</li><li>Apnoea: stopping breathing for over 20 seconds, or shorter with bradycardia or cyanosis.</li></ul>
<h3>Ask</h3>
<ul><li>Gestation, antenatal steroids, mode of birth and labour, maternal diabetes, fever, rupture of membranes and its duration, meconium, resuscitation needed.</li></ul>
<h3>Severity</h3>
<p>Bhutan IMNCI treats <b>severe respiratory distress</b> as RR 70 or more, or RR 60 or more with severe indrawing or grunting — these babies need IV fluids instead of feeds.${r(1)} The Silverman–Andersen score below grades distress from 0 to 10.</p>
<h3>The typical patient</h3>
<p>Karma, born at 31 weeks to a mother who reached hospital too late for steroids, weighs 1.4 kg. At 1 hour he grunts, has marked subcostal indrawing and RR 74; SpO₂ is 86% in air. <b>Probable RDS</b>: plastic wrap and warmer, bubble CPAP 6 cmH₂O with oxygen titrated to SpO₂ 90–94%, IV 10% dextrose 80 mL/kg/day, blood culture then ampicillin and gentamicin, caffeine citrate 28 mg loading. Oxygen need climbs to 45% at 6 hours, so he is transferred on CPAP to the NICU for surfactant.</p>
` },

{ id: "ddx", title: "Telling the causes apart", html: `
${tbl(["Clue", "Points to"], [
["Preterm, worsening over the first day, ground-glass X-ray", "RDS"],
["Term caesarean, fast breathing, mild oxygen need, wet lungs on X-ray", "TTN"],
["Maternal fever or long rupture of membranes, temperature instability, poor perfusion", "Pneumonia / sepsis"],
["Thick meconium, term, patchy over-inflated lungs", "Meconium aspiration"],
["Sudden worsening, one-sided reduced air entry, shift of the heart", "Pneumothorax"],
["Cyanosis with little distress, poor response to oxygen, murmur or weak femoral pulses", "Congenital heart disease"],
["Scaphoid abdomen, bowel sounds in the chest", "Diaphragmatic hernia"],
["Cyanosis that improves when crying, cannot pass a tube through the nose", "Choanal atresia"],
["Deep sighing breathing without much indrawing", "Metabolic acidosis (sepsis, asphyxia, inborn errors)"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["SpO₂ (pre- and post-ductal)", "Guides oxygen; difference suggests PPHN or heart disease"],
["Glucose", "Hypoglycaemia is common in sick newborns"],
["Chest X-ray", "RDS (ground glass, air bronchograms, low volumes), TTN (fluid in fissures), MAS (patchy, hyperinflated), pneumothorax, hernia, heart size"],
["Blood culture, CRP, full blood count", "Sepsis — IMNCI sepsis screen; repeat CRP at 24–48 h to stop antibiotics"],
["Blood gas", "pH and CO₂ guide escalation from CPAP to ventilation"],
["Transillumination with a bright torch", "Quick bedside pneumothorax check"],
["Echo", "Suspected heart disease or PPHN"]])}
` },

{ id: "staging", title: "Silverman–Andersen score", html: `
<p>Score each sign 0–2; total 0–10. Higher is worse. Repeat every 1–4 hours or after any change in support.</p>
<div class="calc" data-calc="silverman"></div>
` },

{ id: "manage", title: "Management step by step", html: `
<h3>1. Basics for every baby</h3>
<ul><li>Warmth 36.5–37.5 °C (radiant warmer or incubator; KMC once stable). Minimal handling.</li><li>Clear the nose of mucus; position with the neck slightly extended.</li><li>Glucose check and treat under 45 mg/dL.</li></ul>
<h3>2. Oxygen</h3>
<ul><li>Nasal prongs 0.5–1 L/min, up to 2 L/min in severe distress (Bhutan IMNCI). Use a blender when available.</li><li>Targets: preterm 90–94%; term above 90%. Do not run 100% oxygen to a preterm baby — it causes retinopathy.</li><li>Never give free-flow oxygen through a self-inflating bag — it does not flow unless squeezed.</li></ul>
<h3>3. CPAP</h3>
<ul><li>Indication: preterm with signs of RDS (WHO strong), any baby with moderate distress or rising oxygen need; consider from birth under 32 weeks (WHO conditional).</li><li>Bubble CPAP, short binasal prongs of the right size, start 6 cmH₂O (range 5–8), FiO₂ to target, gastric tube open to vent air.</li><li>Check nose for pressure injury every 4 hours; keep prongs not touching the septum.</li><li>Failure: FiO₂ over 0.40–0.60, apnoea, pH under 7.20–7.25 with rising CO₂, exhaustion — needs surfactant or ventilation at NICU.</li></ul>
<h3>4. Surfactant (NICU)</h3>
<ul><li>Rescue when FiO₂ is over 0.30 on CPAP 6 cmH₂O or more (European 2022). Poractant alfa 200 mg/kg first dose; LISA (thin catheter) preferred in a breathing baby on CPAP; second dose if still needed.</li></ul>
<h3>5. Infection</h3>
<ul><li>Risk factors or a sick baby: blood culture, then ${dr("ampicillin")} 50 mg/kg 12-hourly (first week) + ${dr("gentamicin")} 4 mg/kg once daily (Bhutan IMNCI). Stop at 36–48 hours if the baby is well and cultures and CRP are negative.</li></ul>
<h3>6. Fluids and feeds</h3>
<ul><li>IV fluids for severe distress, under 30 weeks or under 1.2 kg (IMNCI): day 1 60 mL/kg/day (80 if under 1.5 kg), increasing daily (see preterm page).</li><li>Start expressed breast milk by tube as soon as breathing is stable, even small volumes.</li></ul>
<h3>7. Specific causes</h3>
<ul><li><b>TTN:</b> oxygen or CPAP; usually settles in 72 h; antibiotics only if risk factors.</li><li><b>MAS:</b> oxygen, CPAP or ventilation, watch for pneumothorax and PPHN; surfactant may help severe cases (European 2022).</li><li><b>Pneumothorax with collapse:</b> needle aspiration in the 2nd intercostal space mid-clavicular line, then chest drain (see neonatal pneumothorax).</li><li><b>Apnoea of prematurity:</b> ${dr("caffeine_citrate", "caffeine citrate")} 20 mg/kg load, then 5–10 mg/kg daily.</li></ul>
${box("red", "Refer to NICU (Bhutan IMNCI transfer list)", `<p>Respiratory distress needing ventilator support, under 32 weeks or under 1.5 kg, apnoea not controlled, pneumothorax, suspected heart disease or diaphragmatic hernia. Transfer on CPAP or with bag-mask ventilation, warm, with glucose infusion and an escort who can ventilate.</p>`)}
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML)", "Dose", "Notes"], [
[dr("ampicillin"), "50 mg/kg IV/IM 12-hourly under 7 days, 8-hourly after", "Bhutan IMNCI first line for early-onset sepsis"],
[dr("gentamicin"), "4 mg/kg IV once daily (Bhutan IMNCI)", "Longer interval in very preterm babies and kidney injury — check levels where possible"],
[dr("caffeine_citrate", "Caffeine citrate 20 mg/mL"), "20 mg/kg load (IV over 30 min or oral), then 5–10 mg/kg once daily", "Doses are citrate (2 mg citrate = 1 mg base). Hold if HR over 180"],
["Surfactant (poractant alfa) — not on NEML", "200 mg/kg (2.5 mL/kg) first; 100 mg/kg repeat", "NICU only"],
["Oxygen", "Prongs 0.5–1 L/min (2 L/min severe); titrate to SpO₂", "Blender with CPAP"]])}
<p>Antibiotic doses: Bhutan IMNCI 2024.${r(1)} Caffeine and surfactant: European 2022${r(4)} and WHO 2022 (caffeine indications).${r(3)}</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Under 32 weeks</b>", "Plastic wrap at birth, CPAP from birth (WHO conditional), start 30% oxygen in the delivery room, caffeine, humidified incubator, IV fluids 80 mL/kg/day day 1"],
["<b>Late preterm 34–36 weeks</b>", "RDS and TTN both occur; watch glucose, temperature and feeding"],
["<b>Infant of a diabetic mother</b>", "RDS more likely even near term; hypoglycaemia; polycythaemia"],
["<b>Elective caesarean at term</b>", "TTN common; plan elective caesarean from 39 weeks"],
["<b>Babies at BHU or district level</b>", "Oxygen by prongs, warmth, first antibiotic doses, glucose; transfer early rather than late"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["CPAP failing, no ventilator, transfer will take hours", "Increase CPAP to 7–8 cmH₂O, check prong fit and nasal blockage, gastric tube to vent, caffeine; call the receiving NICU; transfer on CPAP"],
["No blender — only 100% oxygen with CPAP", "Use the lowest flow that keeps SpO₂ 90–94%; check SpO₂ often; an oxygen concentrator CPAP can deliver lower concentrations"],
["Sudden collapse on CPAP", "Think pneumothorax, blocked prongs, displaced tube; transilluminate; needle aspiration if tension"],
["Parents ask why the baby is in a box with tubes", "Explain CPAP keeps the small lungs open; encourage touch, expressing breast milk and KMC when stable"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Pneumothorax and other air leaks.</li><li>Apnoea, intraventricular haemorrhage, patent ductus arteriosus.</li><li>Bronchopulmonary dysplasia (oxygen need at 36 weeks' corrected age).</li><li>Retinopathy of prematurity from excess oxygen.</li><li>Nasal injury from CPAP prongs.</li><li>PPHN after MAS, sepsis or asphyxia.</li><li>Death — RDS is a leading cause of preterm death where CPAP is not available.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>ROP eye screening for babies under 32 weeks or under 1.5 kg, or any preterm who had prolonged oxygen.</li><li>Growth, feeding and development review; hearing screen.</li><li>Babies with BPD: home oxygen plan, RSV and influenza protection, vaccination on schedule by chronological age.</li></ul>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Respiratory distress syndrome", src: "images/irds-xray.png", mod: "Chest radiograph (AP)", ctx: "Preterm newborn with RDS", loc: "Both lungs", find: "Diffuse fine ground-glass opacity with air bronchograms and low lung volumes", interp: "Typical surfactant-deficiency RDS", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:X-ray_of_infant_respiratory_distress_syndrome_(IRDS).png", lic: "CC0" })}
${fig({ title: "Meconium aspiration", src: "images/mas-xray.jpg", mod: "Chest radiograph (AP)", ctx: "Term newborn with meconium aspiration", loc: "Both lungs", find: "Patchy, coarse opacities with areas of over-inflation", interp: "Meconium aspiration syndrome — watch for pneumothorax and PPHN", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Mekoniumaspiration_bei_Neugeborenen_im_Roentgenbild_0W_-_CR_ap_-_001.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Newborn with fast breathing or indrawing", [F.s("Warmth, clear nose, SpO₂, glucose, temperature, score"), F.a, F.d("SpO₂ below target or score 4+?"), F.a, F.b([["No", F.ok("Observe 1–4 hourly; feed; review cause")], ["Yes", F.e("Oxygen by prongs to SpO₂ 90–94% (preterm)")]]), F.a, F.d("Preterm with RDS signs or still distressed?"), F.a, F.e("Bubble CPAP 6 cmH₂O; IV fluids; culture + ampicillin and gentamicin"), F.a, F.d("FiO₂ over 0.30–0.40, apnoea or acidosis?"), F.a, F.e("NICU: surfactant (LISA) or ventilation; transfer on CPAP"), F.a, F.ok("Wean CPAP when FiO₂ under 0.30 and comfortable; stop antibiotics at 36–48 h if well")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Free-flow oxygen through a self-inflating bag", "No oxygen delivered", "Prongs or a flow-inflating system"],
["100% oxygen to a preterm baby", "Retinopathy, lung injury", "Target 90–94%; blender"],
["Waiting for an X-ray before CPAP", "Lungs collapse further", "Start CPAP on clinical signs"],
["Letting the baby get cold", "More oxygen need, hypoglycaemia, death", "Warm chain"],
["Continuing antibiotics for a week 'to be safe'", "Resistance, NEC, fungal infection", "Stop at 36–48 h if well and cultures negative"],
["Ignoring sudden worsening on CPAP", "Missed pneumothorax", "Transilluminate, check air entry"],
["Oral feeds in severe distress", "Aspiration", "IV fluids or small tube feeds"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why do babies with RDS grunt?", "They partly close the glottis during expiration to keep the alveoli open — a self-made PEEP.")}
${qa("Student", "Which newborn breathing problem typically follows an elective caesarean and settles within 72 hours?", "Transient tachypnoea of the newborn.")}
${qa("Intern/MO", "What oxygen flow by nasal prongs does Bhutan IMNCI advise for preterm babies?", "0.5–1 L/min, increased to 2 L/min in severe distress, titrated to SpO₂.")}
${qa("Intern/MO", "A 1.4 kg baby needs caffeine. What is the loading dose?", "Caffeine citrate 20 mg/kg = 28 mg (1.4 mL of 20 mg/mL), then 7–14 mg once daily.")}
${qa("Specialist", "When does the European 2022 consensus advise rescue surfactant?", "When FiO₂ exceeds 0.30 on CPAP of at least 6 cmH₂O (or lung ultrasound suggests need); poractant 200 mg/kg; LISA preferred.")}
${qa("Specialist", "What did WHO 2022 recommend about CPAP?", "CPAP for preterm infants with RDS (strong); consider immediately after birth under 32 weeks (conditional); bubble CPAP may be preferred (conditional).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: Module 1 §3.4 Oxygen therapy; Module 2 §4.8.8, §6.4, §6.7, §7.</li>
<li id="ref-2">Emergency Medical Services Division, Ministry of Health, Bhutan. Clinical orientation manual — Chapter 3B Neonatal resuscitation (incl. resuscitation for premature babies), 2018. <a href="https://moh.gov.bt/wp-content/uploads/2025/01/Chapter-3B-Neonatal-Resus.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
<li id="ref-3">World Health Organization. WHO recommendations for care of the preterm or low-birth-weight infant. Geneva: WHO; 2022. ISBN 9789240058262. <a href="https://www.who.int/publications/i/item/9789240058262" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Sweet DG, Carnielli VP, Greisen G, et al. European consensus guidelines on the management of respiratory distress syndrome: 2022 update. Neonatology 2023;120(1):3–23. <a href="https://doi.org/10.1159/000528914" target="_blank" rel="noopener">doi:10.1159/000528914</a></li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024", "<span class='pass'>Read directly</span>", "Oxygen flows, severe distress definition, fluids, antibiotics, transfer"],
["Bhutan EM booklet 2018 ch. 3B", "<span class='pass'>Read directly</span>", "moh.gov.bt PDF read in browser"],
["WHO 2022 preterm/LBW", "<span class='pass'>Read directly</span>", "Table 1 B.1–B.6"],
["European RDS 2022", "<span class='pass'>Read directly</span>", "Recommendations and surfactant/caffeine doses (Karger full text)"],
["Two-source doses", "<span class='pass'>Checked</span>", "Caffeine: European 2022 + existing BNFc-based card. Ampicillin/gentamicin: Bhutan IMNCI (single national source). Surfactant: European 2022 only (NICU drug)"],
["CPAP failure thresholds", "<span class='unv'>Not read</span>", "FiO₂ 0.40–0.60 and pH 7.20–7.25 are common NICU practice, not from a read guideline"],
["NEML 2025", "<span class='pass'>Checked</span>", "Caffeine listed; surfactant not listed"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "silverman (0, 4, 8)"]], "qc")}` }
]
});
