/* CPAP for newborns and children — full depth (Thin-page Round 6, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (§3.4 oxygen therapy, target SpO₂ over 90%, prong flows; §4.8.8 transfer);
   Bhutan EM booklet 2018 ch. 3B (CPAP for breathing preterm with HR over 100; surfactant if CPAP fails); WHO recommendations for care
   of the preterm or LBW infant 2022 (B.1–B.3 CPAP, bubble CPAP); European RDS 2022 (CPAP 6–8 cmH₂O, prongs or mask, SpO₂ 90–94%,
   surfactant if FiO₂ over 0.30 on CPAP 6+); Chisti et al. Lancet 2015 (Bangladesh bubble CPAP trial, abstract) and McCollum et al.
   Lancet Respir Med 2019 (Malawi district-hospital trial, abstract). */
registerPage({
id: "cpap-child",
title: "CPAP Basics (Newborns & Children)",
subtitle: "Bubble CPAP keeps small lungs and airways open. Choose the right prongs, set the pressure by the depth of the tube under water, titrate oxygen to target saturations, protect the nose, watch the baby closely, and recognise failure early",
age: "Newborns & children", specs: ["neo", "nicu", "picu", "paeds"],
keywords: ["CPAP", "bubble CPAP", "bCPAP", "nasal prongs", "PEEP", "respiratory distress", "RDS", "bronchiolitis", "severe pneumonia", "CPAP failure", "nasal injury", "oxygen blender", "oxygen targets", "weaning CPAP"],
related: ["rds-child", "apnoea-child", "preterm-child", "bronchiolitis-child", "pneumonia-child", "pards-child", "pneumothorax-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">CPAP gives a steady pressure throughout breathing so the alveoli do not collapse at the end of each breath and the floppy upper airway stays open. Bubble CPAP is simple, cheap and saves lives — but only when nurses watch the child closely and know when it is failing.</p>
<div class="glance">
<div><h4>Who</h4><p>Preterm babies with RDS (WHO strong), apnoea on caffeine, TTN; infants and young children with severe pneumonia or bronchiolitis needing more than nasal oxygen.</p></div>
<div><h4>Settings</h4><p>Newborn: start <b>6 cmH₂O</b> (5–8). Child: 5–7 cmH₂O. Pressure = depth of the expiratory tube under water.</p></div>
<div><h4>Oxygen</h4><p>Blend air and oxygen to target: preterm SpO₂ <b>90–94%</b>; term and child <b>above 90%</b> (IMNCI) — 92–98% often used for children.</p></div>
<div><h4>Check hourly</h4><p>Continuous bubbling, prong position, nose, SpO₂, breathing rate, work of breathing, abdomen.</p></div>
<div><h4>Failing</h4><p>Rising oxygen need (newborn FiO₂ over 0.40), apnoea, exhaustion, rising CO₂, shock — escalate.</p></div>
<div><h4>Caution</h4><p>In a Malawi district hospital without daily doctor oversight, bubble CPAP <b>increased</b> deaths in high-risk children — use it only with training and close monitoring.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bubble CPAP is used in district and referral hospital newborn units and paediatric wards. Bhutan IMNCI 2024 targets SpO₂ above 90% and gives nasal-prong oxygen flows (0.5–1 L/min, up to 2 L/min); the Bhutan Emergency booklet 2018 advises CPAP for a breathing preterm baby with a heart rate over 100 and surfactant if CPAP fails. Babies needing ventilator support are on the IMNCI transfer list for neonatal intensive care (JDWNRH and regional referral hospitals). ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "The parts of a bubble CPAP system", html: `
${tbl(["Part", "What it does", "Check"], [
["Gas source (oxygen concentrator, cylinder or wall)", "Supplies flow", "Enough supply for transport and power cuts"],
["Blender or air–oxygen mix", "Sets FiO₂ from 21% upward", "Avoid running 100% oxygen to a preterm baby"],
["Flow meter", "Usually 5–8 L/min for newborns; 5–10 L/min for children", "Enough flow to bubble continuously"],
["Heated humidifier", "Warm, wet gas protects the nose and secretions", "Water level; temperature"],
["Inspiratory tubing", "Carries gas to the baby", "No kinks"],
["Interface — short binasal prongs (or nasal mask)", "Delivers pressure", "Fills the nostrils without blanching the skin"],
["Expiratory tubing into a water bottle", "Depth under water in cm = pressure in cmH₂O", "Bubbling all the time"],
["Orogastric tube", "Vents swallowed air", "Left open between feeds"]])}
` },

{ id: "patho", title: "How it works", html: `
${F.chart("Continuous positive airway pressure", [F.s("Steady pressure through inspiration and expiration"), F.a, F.s("Alveoli stay open (more lung volume, less surfactant use)"), F.a, F.s("Upper airway splinted — fewer obstructive apnoeas"), F.a, F.e("Better oxygenation, less work of breathing"), F.a, F.ok("Less need for intubation and ventilation")])}
<p>CPAP does not breathe for the baby. A baby who stops breathing, is in shock or is exhausted needs ventilation.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan (IMNCI 2024 / EM booklet 2018)", "WHO 2022", "European RDS 2022", "This guide"], [
["Preterm RDS", "CPAP for a breathing preterm with HR over 100", "CPAP for clinical RDS (strong)", "From birth for those at risk", "Early CPAP"],
["From birth under 32 weeks", "—", "May be considered (conditional)", "Yes for babies at risk of RDS", "Yes where staff can monitor"],
["Device", "—", "Bubble CPAP preferred (conditional)", "Short binasal prongs or mask", "Bubble CPAP"],
["Starting pressure (newborn)", "—", "—", "6–8 cmH₂O", "6 cmH₂O"],
["Oxygen target", "SpO₂ above 90%", "—", "90–94% preterm", "90–94% preterm; above 90% others"],
["Children with severe pneumonia", "Oxygen by prongs or head box", "—", "—", "Bubble CPAP only with trained staff and close monitoring (see trials)"]])}
<p><b>Two trials in children under 5 with severe pneumonia point in opposite directions.</b> In a Dhaka hospital with doctors present, bubble CPAP (5 L/min, 5 cmH₂O) reduced treatment failure and deaths compared with low-flow oxygen (deaths 4% vs 15%).${r(5)} In a Malawi district hospital where non-physicians gave care without daily doctor oversight, children on bubble CPAP had higher hospital mortality (17% vs 11%; RR 1.52).${r(6)} The lesson for Bhutan: CPAP for children needs trained nurses, a doctor available, and clear failure rules.</p>
` },

{ id: "presentation", title: "Starting CPAP step by step", html: `
<ol><li>Explain to the parents; keep the baby warm (KMC can continue on CPAP once stable).</li><li>Position: on the back or side, neck neutral with a small shoulder roll; or prone with monitoring.</li><li>Suction the nose and mouth gently if secretions are present.</li><li>Choose prongs that fill the nostrils without blanching the skin; measure with the manufacturer's guide.</li><li>Put on a well-fitting hat; fix the tubing so the prongs do not press on the septum.</li><li>Set flow (newborn 5–8 L/min) and place the expiratory tube at the chosen depth (6 cm = 6 cmH₂O); confirm continuous bubbling.</li><li>Set FiO₂ and titrate to the SpO₂ target within minutes.</li><li>Pass an orogastric tube and leave it open.</li><li>Record baseline: breathing rate, Silverman score, SpO₂ and FiO₂, heart rate.</li></ol>
<h3>The typical patient</h3>
<p>A 3-month-old girl with bronchiolitis in Phuentsholing has a breathing rate of 72, marked indrawing and SpO₂ 88% on 2 L/min nasal oxygen. She is alert with good perfusion. Bubble CPAP is started at 6 cmH₂O, flow 8 L/min, FiO₂ 40% titrated down to 30% to keep SpO₂ 92–96%; orogastric tube; small tube feeds of breast milk. The nurse records observations hourly. Over 48 hours she settles and is weaned to nasal oxygen.</p>
` },

{ id: "ddx", title: "When not to use CPAP", html: `
${tbl(["Situation", "Why", "Instead"], [
["Apnoea needing repeated bag-mask ventilation", "CPAP does not breathe for the baby", "Ventilation"],
["Shock, coma, poor airway protection", "Needs a secure airway", "Intubation and ventilation"],
["Untreated pneumothorax", "Pressure enlarges it", "Drain first"],
["Congenital diaphragmatic hernia", "Gas fills the bowel in the chest", "Intubate, gastric tube"],
["Choanal atresia, facial or nasal trauma", "Interface cannot work", "Oral airway, intubation"],
["Vomiting with bowel obstruction or NEC", "Distension worsens", "Treat the cause; ventilation if needed"]])}
` },

{ id: "invest", title: "Monitoring on CPAP", html: `
${tbl(["What", "How often"], [
["SpO₂ and heart rate", "Continuous with alarms"],
["Breathing rate, work of breathing (Silverman), FiO₂", "Hourly"],
["Bubbling, water level, tubing, prong position", "Hourly"],
["Nose and skin around the nose", "Every 2–4 hours"],
["Abdomen (distension), orogastric aspirate", "Before feeds"],
["Temperature, glucose", "3–4 hourly; glucose as for sick newborns"],
["Blood gas", "If worsening or FiO₂ rising"],
["Chest X-ray / transillumination", "Sudden deterioration (pneumothorax)"]])}
` },

{ id: "staging", title: "CPAP settings and failure check", html: `
<p>Enter the patient group, current settings and any warning signs. The Silverman score below helps grade distress in newborns.</p>
<div class="calc" data-calc="cpapcheck"></div>
<div class="calc" data-calc="silverman"></div>
` },

{ id: "manage", title: "Adjusting, escalating and weaning", html: `
<h3>Not improving</h3>
<ul><li>Check the system first: bubbling, leak at the mouth (a chin strap or pacifier helps), blocked or wrong-size prongs, secretions, kinks, water level.</li><li>Increase pressure by 1 cmH₂O at a time (newborn up to 7–8; child up to 8–10).</li><li>Titrate FiO₂ to target.</li><li>Preterm babies: caffeine if not already given.</li></ul>
<h3>CPAP failure — escalate</h3>
<ul><li>Newborn: FiO₂ over 0.30 on CPAP 6+ cmH₂O with RDS → surfactant (European 2022) at a NICU; FiO₂ over 0.40–0.60, frequent apnoea, pH under 7.20–7.25 with rising CO₂, or exhaustion → ventilation.</li><li>Child: SpO₂ below target on FiO₂ 0.60 or more, worsening work of breathing, drowsiness, shock or apnoea → intubation and ventilation (PICU).</li><li>Transfer on CPAP with oxygen supply for the whole journey, or with bag-mask ventilation, and an escort who can ventilate.</li></ul>
<h3>Weaning</h3>
<ol><li>Reduce FiO₂ first to 0.21–0.30 while keeping SpO₂ in target.</li><li>Then reduce pressure to 5 cmH₂O.</li><li>When stable for 12–24 hours on 5 cmH₂O with FiO₂ under 0.30, little indrawing and no frequent apnoea: trial off onto nasal-prong oxygen or air.</li><li>Go back on CPAP if distress, apnoea or oxygen need returns.</li></ol>
` },

{ id: "drugs", title: "Medicines used with CPAP", html: `
${tbl(["Medicine", "Use", "Notes"], [
[dr("caffeine_citrate", "Caffeine citrate"), "Preterm babies on CPAP or with apnoea: 20 mg/kg load, then 5–10 mg/kg/day", "WHO 2022; European 2022"],
["Surfactant (not on NEML)", "Preterm RDS with FiO₂ over 0.30 on CPAP 6+", "NICU only"],
["Oxygen", "Titrate to target", "Avoid hyperoxia in preterm babies"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Preterm under 32 weeks</b>", "CPAP from birth; size 0 prongs; careful nasal care; FiO₂ 90–94% target; caffeine"],
["<b>Term newborn (TTN, MAS)</b>", "CPAP 5–6; watch for pneumothorax, especially in meconium aspiration"],
["<b>Bronchiolitis</b>", "CPAP for rising oxygen need or apnoea despite nasal oxygen; frequent gentle nasal suction; small feeds"],
["<b>Severe pneumonia in children under 5</b>", "Use only with trained staff, close monitoring and a doctor available (Malawi trial warning)"],
["<b>Severe malnutrition</b>", "High-risk group in the Malawi trial — extra caution"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Sudden deterioration on CPAP", "DOPE: Displaced prongs, Obstruction (secretions), Pneumothorax (transilluminate), Equipment (bubbling, oxygen supply)"],
["No blender — oxygen only", "Use the lowest oxygen flow mixed into the system that keeps SpO₂ in target; check SpO₂ often; an oxygen concentrator with an air source helps"],
["Power cut", "Switch to cylinder oxygen; bubble CPAP works without power except for humidifier and concentrator"],
["Baby keeps mouth open", "Pacifier or chin strap"],
["Nasal septum redness", "Reposition, change to a mask, protect with a hydrocolloid dressing"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Nasal septum and nostril injury — the commonest; can scar.</li><li>Pneumothorax and air leak.</li><li>Abdominal distension ("CPAP belly") and feed intolerance — vent the stomach.</li><li>Dry secretions or blocked prongs without humidification.</li><li>Delay in escalation when CPAP is failing — the most dangerous complication.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Check the nose before discharge; refer if scarring narrows the nostrils.</li><li>Preterm babies: routine preterm follow-up (eyes, hearing, development).</li><li>Audit CPAP use in the unit: outcomes, failures, nasal injury, transfers.</li></ul>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Preterm baby on nasal CPAP", src: "images/cpap-preterm.jpg", mod: "Photograph", ctx: "Neonatal unit", loc: "Face and nose", find: "Short binasal prongs fixed with a hat and tubing", interp: "Correct prong fit and fixation protect the nose and keep the pressure", by: "Brian Hall", page: "https://commons.wikimedia.org/wiki/File:Premature_infant_CPAP.jpg", lic: "Public domain" })}
${fig({ title: "Newborn on CPAP", src: "images/cpap-newborn.jpg", mod: "Photograph", ctx: "Neonatal unit", loc: "Face", find: "Nasal interface secured with a bonnet", interp: "Check the septum and nostrils every 2–4 hours", by: "Bobjgalindo", page: "https://commons.wikimedia.org/wiki/File:CPAP_on_newborn.JPG", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Distress despite nasal oxygen", [F.d("Breathing, alert, perfusing well?"), F.a, F.b([["No", F.e("Bag-mask, intubate; not CPAP")], ["Yes", F.e("Bubble CPAP: newborn 6, child 5–7 cmH₂O; FiO₂ to target; OG tube")]]), F.a, F.e("Hourly checks: bubbling, prongs, nose, SpO₂, RR, Silverman"), F.a, F.d("Improving within 1–2 h?"), F.a, F.b([["No", F.e("Check system; +1 cmH₂O; failure rules → surfactant/ventilation/transfer")], ["Yes", F.ok("Wean FiO₂, then pressure to 5, then trial off")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["No bubbling unnoticed", "No pressure delivered", "Check every hour"],
["Prongs too small or loose", "Leak and failure", "Size to fill the nostrils"],
["Prongs pressing on the septum", "Nasal injury", "Fix tubing; check 2–4 hourly"],
["No stomach vent", "Distension, splinting, aspiration", "Open orogastric tube"],
["Running 100% oxygen to preterm babies", "Retinopathy", "Blend and titrate"],
["Staying on CPAP while the child tires", "Arrest", "Clear failure rules; escalate early"],
["Starting CPAP without trained staff", "Higher mortality (Malawi trial)", "Training and supervision first"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What sets the pressure in bubble CPAP?", "The depth of the expiratory tube under water — each cm gives about 1 cmH₂O.")}
${qa("Student", "Why pass an orogastric tube?", "To vent swallowed air and prevent abdominal distension.")}
${qa("Intern/MO", "A baby on CPAP suddenly desaturates. What do you check?", "DOPE: displaced prongs, obstruction, pneumothorax, equipment (bubbling, oxygen supply).")}
${qa("Intern/MO", "How do you wean CPAP?", "FiO₂ first to 0.21–0.30, then pressure to 5 cmH₂O, then trial off when stable for 12–24 h.")}
${qa("Specialist", "What did the Bangladesh and Malawi trials show?", "Dhaka (doctor-supervised): bubble CPAP cut deaths vs low-flow oxygen (4% vs 15%). Malawi district hospital (non-physician care): CPAP increased mortality (17% vs 11%).")}
${qa("Specialist", "When should a preterm baby on CPAP get surfactant?", "FiO₂ over 0.30 on CPAP of 6 cmH₂O or more (European 2022).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: Module 1 §3.4 Oxygen therapy; Module 2 §4.8.8 transfer.</li>
<li id="ref-2">Emergency Medical Services Division, Ministry of Health, Bhutan. Clinical orientation manual — Chapter 3B Neonatal resuscitation, 2018. <a href="https://moh.gov.bt/wp-content/uploads/2025/01/Chapter-3B-Neonatal-Resus.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
<li id="ref-3">World Health Organization. WHO recommendations for care of the preterm or low-birth-weight infant. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240058262" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Sweet DG, Carnielli VP, Greisen G, et al. European consensus guidelines on the management of respiratory distress syndrome: 2022 update. Neonatology 2023;120(1):3–23. <a href="https://doi.org/10.1159/000528914" target="_blank" rel="noopener">doi:10.1159/000528914</a></li>
<li id="ref-5">Chisti MJ, Salam MA, Smith JH, et al. Bubble continuous positive airway pressure for children with severe pneumonia and hypoxaemia in Bangladesh: an open, randomised controlled trial. Lancet 2015;386(9998):1057–1065. <a href="https://doi.org/10.1016/S0140-6736(15)60249-5" target="_blank" rel="noopener">doi:10.1016/S0140-6736(15)60249-5</a></li>
<li id="ref-6">McCollum ED, Mvalo T, Eckerle M, et al. Bubble continuous positive airway pressure for children with high-risk conditions and severe pneumonia in Malawi: an open label, randomised, controlled trial. Lancet Respir Med 2019;7(11):964–974. <a href="https://doi.org/10.1016/S2213-2600(19)30243-7" target="_blank" rel="noopener">doi:10.1016/S2213-2600(19)30243-7</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024 and EM booklet 2018", "<span class='pass'>Read directly</span>", "Oxygen targets and flows; preterm CPAP"],
["WHO 2022 and European RDS 2022", "<span class='pass'>Read directly</span>", "CPAP recommendations, pressures, surfactant threshold"],
["Bangladesh and Malawi trials", "<span class='pass'>Read directly</span>", "Abstracts (Europe PMC)"],
["Flows, child pressures, weaning steps, failure thresholds", "<span class='unv'>Not read</span>", "Common bubble-CPAP practice; no guideline giving these numbers was read"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculators", "<span class='pass'>Tested</span>", "cpapcheck, silverman"]], "qc")}` }
]
});
