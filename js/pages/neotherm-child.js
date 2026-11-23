/* Newborn thermal care and hypothermia */
registerPage({
id: "neotherm-child",
title: "Newborn Hypothermia & Thermal Care",
subtitle: "The warm chain from birth to home: why newborns cool so fast, Bhutan's IMNCI grades and rewarming steps, skin-to-skin and immediate kangaroo care for small babies, hyperthermia, and keeping babies warm in a Bhutanese winter",
age: "Newborns", specs: ["neo", "nicu", "paeds", "ph"],
keywords: ["neonatal hypothermia", "newborn hypothermia", "cold stress", "thermal care", "warm chain", "kangaroo mother care", "KMC", "skin-to-skin", "iKMC", "radiant warmer", "incubator", "low birth weight", "neonatal hyperthermia", "delayed bathing", "plastic wrap preterm", "neonatal cold injury"],
related: ["neosepsis-child", "preterm-child", "hypo-child", "neolocal-child", "idm-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A newborn loses heat about four times faster than an adult, and a cold baby is more likely to become hypoglycaemic, breathe poorly, catch infection and die. Keeping babies warm costs almost nothing — a warm room, a dry cloth, a cap and the mother's skin — yet hypothermia remains one of the commonest and most preventable problems in newborn care, especially in a cold, high country.</p>
<div class="glance">
<div><h4>Normal</h4><p>Axillary 36.5–37.5 °C. Warm trunk, pink warm hands and feet.</p></div>
<div><h4>Grades (Bhutan IMNCI 2024)</h4><p>Mild 36.0–36.4 (cold stress) · moderate 32–35.9 · severe below 32 °C.</p></div>
<div><h4>Mild</h4><p>Skin-to-skin contact; cap, socks; feed more often.</p></div>
<div><h4>Moderate</h4><p>Check glucose; skin-to-skin in a room of at least 25 °C; radiant warmer if sick.</p></div>
<div><h4>Severe</h4><p>Pre-warmed radiant warmer or incubator; glucose; IV fluids; treat for sepsis; temperature every 30 minutes.</p></div>
<div><h4>Prevent: the warm chain</h4><p>Warm room 25–28 °C, dry at once, skin-to-skin, cap, breastfeed in the first hour, bath after 24 hours, warm transport.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Hospital IMNCI manual (3rd edition, 2024) defines hypothermia as below 36.5 °C and gives graded rewarming: skin-to-skin for mild, glucose check and skin-to-skin or radiant warmer for moderate, and warmer, glucose, IV fluids and sepsis treatment for severe. It also asks for a delivery room of 25–28 °C, immediate drying and skin-to-skin, a cap, and delaying the first bath until after 24 hours. The PHC chart booklet (2025) treats a temperature below 35.5 °C as a sign of possible serious bacterial infection. Many Bhutanese homes are cold for much of the year, so discharge advice on keeping babies warm matters as much as hospital care. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Hypothermia is an axillary temperature below 36.5 °C. WHO describes 36.0–36.4 °C as cold stress, which needs warming and a search for the cause; lower temperatures carry rising risks of hypoglycaemia, acidosis, apnoea and death.${r(1, 2)}</p>
${tbl(["Risk factor", "Why", "Notes"], [
["Preterm and low birth weight", "Large surface area, little fat, thin skin, poor shivering", "Most at risk; under 1500 g need incubator or KMC"],
["Small for gestational age", "Low brown-fat and glycogen stores", "Hypoglycaemia too"],
["Cold delivery room or home; winter; high altitude", "Large temperature gradient", "Bhutanese homes and transport in winter"],
["Wet baby, early bathing, delayed drying", "Evaporative loss", "Bath after 24 hours"],
["Separation from the mother", "Loss of skin-to-skin warmth", "Avoid unnecessary separation"],
["Sick baby: sepsis, asphyxia, hypoglycaemia", "Impaired heat production", "Hypothermia can be the first sign of sepsis"],
["Transport and referral", "Heat loss on the road", "Skin-to-skin or warm wrapping during transfer"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How a newborn loses heat and what follows", [
F.s("Heat loss by evaporation (wet skin), conduction (cold surfaces), convection (drafts) and radiation (cold walls, windows)"), F.a,
F.s("Baby responds with vasoconstriction and brown-fat thermogenesis (non-shivering), which burns oxygen and glucose"), F.a,
F.d("Heat loss continues?"), F.a,
F.b([["Rewarmed early", F.ok("Recovers")], ["No", F.e("Hypoglycaemia, metabolic acidosis, raised pulmonary pressure, apnoea, poor feeding, infection")]]), F.a,
F.e("Severe cold injury: sclerema, bleeding (pulmonary haemorrhage), death")])}
<p>Brown-fat heat production uses oxygen and glucose. A cold baby therefore becomes hypoglycaemic and hypoxic. A cold, hypoglycaemic baby feeds poorly and becomes colder: a vicious circle that early warmth breaks.${r(1, 3)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan IMNCI 2024/2025", "International", "This guide and why"], [
["Grades", "Mild 36–36.5, moderate 32–36, severe below 32 °C", "WHO 1997: cold stress 36.0–36.4; lower bands as moderate and severe", "Bhutan grades (they match WHO)"],
["Sign of serious infection", "Below 35.5 °C or 37.5 °C and above (PHC booklet)", "WHO IMCI: below 35.5 °C or 37.5 °C and above", "Same"],
["Small babies", "Skin-to-skin and KMC encouraged; under 1500 g / 32 weeks to NICU", "WHO 2022: immediate KMC for all babies under 2000 g once able (iKMC trial: 25% fewer deaths in 1.0–1.8 kg)", "Start KMC as early as possible, including in NICU"],
["Preterm at birth", "Radiant warmer, wrapping", "ILCOR: plastic bag or wrap without drying for babies under 32 weeks, plus cap and warmer", "Add plastic wrap where available " + LB.loc()],
["Rewarming speed", "Skin-to-skin or warmer; recheck half-hourly", "Rewarm promptly; avoid overheating; monitor glucose", "As Bhutan"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Finding", "Meaning", "Action"], [
["Trunk warm, hands and feet cold", "Cold stress", "Skin-to-skin, cap and socks"],
["Trunk and limbs cold", "Hypothermia", "Measure axillary temperature; rewarm"],
["Lethargy, poor suck, weak cry", "Moderate hypothermia or sepsis", "Glucose; warmer"],
["Slow breathing, apnoea, bradycardia", "Severe hypothermia", "Warmer, oxygen, glucose, sepsis treatment"],
["Red face and hands, hard swollen skin (sclerema)", "Severe cold injury", "Critical: NICU"],
["Hot, flushed, irritable, dry", "Hyperthermia (overwrapping, heater, dehydration, infection)", "Cool; feed; look for infection"]])}
${box("red", "Danger signs", `<ul><li>Temperature below 35.5 °C or 37.5 °C and above with any other sign of illness (possible serious bacterial infection)</li><li>Below 32 °C</li><li>Apnoea, slow heart rate, poor perfusion</li><li>Not feeding, lethargic, hypoglycaemia</li></ul>`)}
<h3>The typical patient</h3>
<p>A 2.1 kg baby girl born at home in Haa in January is brought on day 2 because she is not feeding well. She was bathed soon after birth and the room is unheated. Axillary temperature 34.8 °C, hands and feet cold, chest cool, glucose 38 mg/dL, no other danger signs. <b>This is moderate hypothermia with hypoglycaemia in a low-birth-weight baby.</b> She needs glucose correction (breast milk if she can feed, or 4.2 mL of 10% dextrose IV), skin-to-skin contact with her mother in a room of at least 25 °C (or a radiant warmer if she is unwell), temperature checks every 30–60 minutes, a sepsis assessment, and teaching on kangaroo care before discharge.</p>
` },

{ id: "ddx", title: "Causes to look for in a cold baby", html: `
${tbl(["Cause", "Supports", "Test or action"], [
["Environmental cold, early bath, wet clothing", "History, cold room", "Warm and observe"],
["<b>Sepsis</b>", "Poor feeding, lethargy, fast breathing, maternal risk factors", "Sepsis screen; antibiotics if unwell (see <a href=\"#/d/neosepsis-child\">neonatal sepsis</a>)"],
["Hypoglycaemia", "Jittery, lethargic", "Glucose"],
["Perinatal asphyxia, brain injury", "Difficult birth, encephalopathy", "Neurological exam"],
["Hypothyroidism (persistent)", "Prolonged jaundice, constipation, large tongue", "TSH (see <a href=\"#/d/thyroid-child\">thyroid</a>)"],
["Shock, heart disease", "Poor perfusion, murmur, cyanosis", "Assess circulation"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Axillary temperature</b> (3 minutes)", "Diagnosis and grade", "Low-reading thermometer for severe cases", "Essential"],
["<b>Blood glucose</b>", "Hypoglycaemia is common", "All moderate and severe hypothermia", "Essential"],
["Sepsis screen (CBC, CRP, blood culture)", "Infection", "If sick or not rewarming", "Selected"],
["SpO₂, heart rate", "Apnoea, bradycardia", "—", "Moderate/severe"],
["Room temperature", "Environment", "Wall thermometer in delivery rooms and wards", "Always"]])}
` },

{ id: "staging", title: "Grade and plan by temperature", html: `
<p>Enter the axillary temperature for Bhutan's graded plan.${r(2, 4)}</p>
<div class="calc" data-calc="neotemp"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Prevention: the warm chain (every birth)</h3>
<ol><li>Warm, draught-free delivery room of 25–28 °C; warm cloths ready; radiant warmer switched on before birth.</li>
<li>Dry the baby immediately head to toe; remove the wet cloth.</li>
<li>Skin-to-skin on the mother's chest, covered with a warm cloth; cap on the head.</li>
<li>Breastfeed within the first hour.</li>
<li>Postpone weighing and examination until after skin-to-skin where possible; delay bathing until after 24 hours (sponge with lukewarm water in hospital).</li>
<li>Rooming-in; clothe in 2–3 layers plus cap, socks and mittens; warm room; avoid separation.</li>
<li>Warm transport: skin-to-skin, or wrapped with head covered, in a pre-warmed vehicle.${r(2)}</li></ol>
<h3>B. Preterm and low-birth-weight babies</h3>
<ul><li>Babies under 32 weeks: plastic bag or wrap up to the neck without drying the body, cap, under a radiant warmer, with a target temperature of 36.5–37.5 °C (ILCOR).${r(5)}</li>
<li><b>Kangaroo mother care</b> for all babies under 2000 g once stable — WHO now recommends starting immediately, even before full stability, where the mother can stay with the baby. Immediate KMC reduced 28-day mortality by about a quarter in babies of 1.0–1.8 kg.${r(3, 6)}</li>
<li>Incubator or radiant warmer when KMC is not possible; monitor temperature 4–6-hourly when stable.</li></ul>
<h3>C. Rewarming (Bhutan IMNCI 2024)</h3>
${tbl(["Grade", "Action"], [
["Mild (36.0–36.4 °C)", "Skin-to-skin contact; cap, socks; breastfeed more frequently; recheck in 1 hour"],
["Moderate (32.0–35.9 °C)", "Check glucose and treat; skin-to-skin by mother (or father or another adult) in a room at least 25 °C; radiant warmer if sick or skin-to-skin not possible; frequent feeds or cup feeds"],
["Severe (below 32 °C)", "Pre-warmed radiant warmer or incubator; remove wet clothing, dress warmly with cap and blanket; check and treat hypoglycaemia; treat for sepsis; IV fluids; oxygen if needed; temperature every 30 minutes; if not 36.5 °C after 2 hours, reassess"]])}
<h3>D. Hyperthermia (above 37.5 °C)</h3>
<ul><li>Remove from heat sources and extra wraps; room 25–28 °C; sponge with lukewarm water if over 39 °C; feed; treat dehydration; check glucose; look for infection; recheck hourly. <b>No antipyretics under 1 month</b> (Bhutan IMNCI).</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["Home and BHU", "Skin-to-skin, cap, warm room; delay bath; refer cold babies who are not feeding, with the baby skin-to-skin during the journey"],
["District hospital", "Wall thermometers, radiant warmers, KMC corner; glucose testing; sepsis treatment"],
["Referral NICU", "Incubators, servo-controlled warmers, immediate KMC for small babies"]])}
` },

{ id: "drugs", title: "Medicines and fluids", html: `
${tbl(["Item", "Dose", "Notes"], [
[dr("dextrose"), "10% dextrose 2 mL/kg IV, then infusion (GIR 6 mg/kg/min)", "If glucose under 45 mg/dL"],
[dr("ampicillin"), "50 mg/kg IV/IM 12-hourly (first week) or 8-hourly", "With gentamicin if sepsis suspected"],
[dr("gentamicin"), "4–5 mg/kg once daily", "—"],
[dr("vitamin_k"), "1 mg IM (0.5 mg if under 1500 g)", "If not given at birth"],
["Avoid", "Antipyretics under 1 month", "Bhutan IMNCI"]])}
` },

{ id: "populations", title: "Preterm, small and sick babies", html: `
<ul><li><b>Under 1500 g or under 32 weeks:</b> refer to NICU (Bhutan IMNCI); plastic wrap at birth; incubator or KMC.</li>
<li><b>Small for gestational age:</b> cools and becomes hypoglycaemic quickly: early feeds, glucose checks.</li>
<li><b>Babies on phototherapy:</b> watch temperature both ways.</li>
<li><b>Babies being transported:</b> pre-warm the vehicle; skin-to-skin is the safest transport incubator.</li></ul>
` },

{ id: "scenarios", title: "Hypothermia with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Sepsis suspected", "Antibiotics while rewarming", "Hypothermia is a sepsis sign"],
["Hypoglycaemia", "Correct glucose first", "Cold increases glucose use"],
["Asphyxia (therapeutic cooling not available)", "Avoid both overheating and cold; target normal temperature", "Hyperthermia worsens brain injury"],
["Mother unwell after caesarean", "Father or relative gives skin-to-skin", "Warmth continues"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Hypoglycaemia", "Glucose under 45 mg/dL", "Dextrose, feeds"],
["Apnoea, respiratory distress", "Pauses, grunting", "Stimulation, oxygen, support"],
["Metabolic acidosis, coagulopathy, pulmonary haemorrhage", "Severe cold", "NICU"],
["Late-onset infection and death", "Hypothermia on admission", "Prevention"]])}
<p>Hypothermia on admission is consistently associated with higher neonatal mortality, especially in preterm babies; simple warmth measures reduce it.${r(7)}</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
${box("green", "What to tell the family", `<ul><li>"Babies cannot keep themselves warm. Your skin is the best warmer."</li><li>Keep the room warm; dress your baby in two or three layers with a cap and socks; one more layer than you are wearing.</li><li>Do not bathe your baby in the first day; then bathe quickly in warm water in a warm room and dry at once.</li><li>Feel your baby's chest and feet: if the feet are cold, put the baby skin-to-skin.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Your baby feels cold even after skin-to-skin, or feels hot</li><li>Not feeding, very sleepy, fast or difficult breathing</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Skin-to-skin contact", src: "images/kmc-mother.jpg", mod: "Photograph", ctx: "Mother and newborn", loc: "Chest", find: "Baby held skin-to-skin on the mother's chest", signs: "Skin-to-skin (kangaroo) contact", interp: "The best way to keep a newborn warm and to start breastfeeding", by: "Sathishsugavanam27", page: "https://commons.wikimedia.org/wiki/File:MotherKMC.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Kangaroo mother care in a hospital", src: "images/kmc-cameroon.jpg", mod: "Photograph", ctx: "Hospital KMC unit", loc: "—", find: "Small babies held upright skin-to-skin, wrapped together with the mother", signs: "Kangaroo mother care", interp: "For babies under 2000 g; WHO recommends starting immediately", by: "Happi Raphael", page: "https://commons.wikimedia.org/wiki/File:Kangaroo_Care_Laquintinie_Hospital_Cameroon.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Cold newborn", [
F.s("Measure axillary temperature; check glucose if under 36.0 °C"), F.a,
F.d("Grade?"), F.a,
F.b([["Mild 36.0–36.4", F.ok("Skin-to-skin, cap, feed; recheck 1 h")], ["Moderate 32–35.9", F.s("Glucose; skin-to-skin in ≥25 °C room or warmer if sick")]]), F.a,
F.b([["Severe <32", F.e("Warmer/incubator, glucose, IV fluids, antibiotics; temp every 30 min")], ["Not 36.5 after 2 h", F.e("Reassess: sepsis, other illness")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Feel the feet and the chest.</b> Cold feet with a warm chest is cold stress.</li>
<li>A cold baby is a sick baby until proven otherwise.</li>
<li>Skin-to-skin rewarms as well as a warmer for mild and moderate hypothermia.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Bathing soon after birth", "Rapid heat loss", "Delay at least 24 hours"],
["Weighing a naked baby on a cold scale", "Conductive loss", "Warm cloth on scale; weigh quickly"],
["Hot-water bottles on the skin", "Burns", "Skin-to-skin or warmer"],
["Not checking glucose", "Hypoglycaemic brain injury", "Glucose in every cold baby"],
["Antipyretics for a hot newborn", "Masks sepsis; not recommended", "Cool and investigate"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name the four ways a newborn loses heat.", "Evaporation, conduction, convection and radiation.")}
${qa("Student", "What is normal axillary temperature in a newborn?", "36.5–37.5 °C.")}
${qa("Intern/MO", "How is moderate hypothermia managed (Bhutan IMNCI)?", "Check and treat glucose; skin-to-skin in a room at least 25 °C, or radiant warmer if the baby is sick; frequent feeds; recheck temperature.")}
${qa("Intern/MO", "What temperatures signal possible serious bacterial infection in a young infant?", "Below 35.5 °C or 37.5 °C and above.")}
${qa("Specialist", "What did the WHO iKMC trial show?", "Starting kangaroo mother care immediately after birth in babies of 1.0–1.8 kg reduced 28-day mortality by about 25% compared with KMC after stabilisation.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">World Health Organization. Thermal protection of the newborn: a practical guide. Geneva: WHO; 1997 (WHO/RHT/MSM/97.2). <a href="https://www.who.int/publications/i/item/WHO_RHT_MSM_97.2" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Hospital-based Integrated Management of Neonatal and Childhood Illness (IMNCI), 3rd edition, 2024 (§4.5–4.6, §6.3, Annexure 5); IMNCI PHC Chart Booklet 2025.</li>
<li id="ref-3">WHO Immediate KMC Study Group. Immediate “kangaroo mother care” and survival of infants with low birth weight. <i>N Engl J Med</i> 2021;384:2028–2038. <a href="https://doi.org/10.1056/NEJMoa2026486" target="_blank" rel="noopener">doi:10.1056/NEJMoa2026486</a></li>
<li id="ref-4">Lunze K, Bloom DE, Jamison DT, Hamer DH. The global burden of neonatal hypothermia: systematic review of a major challenge for newborn survival. <i>BMC Med</i> 2013;11:24. <a href="https://doi.org/10.1186/1741-7015-11-24" target="_blank" rel="noopener">doi:10.1186/1741-7015-11-24</a></li>
<li id="ref-5">Wyckoff MH, Wyllie J, Aziz K et al. Neonatal life support: 2020 International Consensus on CPR and ECC Science with Treatment Recommendations. <i>Circulation</i> 2020;142(16 Suppl 1):S185–S221. <a href="https://doi.org/10.1161/CIR.0000000000000895" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000000895</a></li>
<li id="ref-6">World Health Organization. WHO recommendations for care of the preterm or low-birth-weight infant. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240058262" target="_blank" rel="noopener">who.int/publications/i/item/9789240058262</a></li>
<li id="ref-7">McCall EM, Alderdice F, Halliday HL, Vohra S, Johnston L. Interventions to prevent hypothermia at birth in preterm and/or low birth weight infants. <i>Cochrane Database Syst Rev</i> 2018;(2):CD004210. <a href="https://doi.org/10.1002/14651858.CD004210.pub5" target="_blank" rel="noopener">doi:10.1002/14651858.CD004210.pub5</a></li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024 and chart booklet 2025", "<span class='pass'>Verified</span>", "Read directly from the PDFs"],
["WHO grades", "<span class='flag'>Partly verified</span>", "Below 36.5 and cold stress 36.0–36.4 confirmed; moderate/severe bands from Bhutan IMNCI"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 4.0"]], "qc")}
` }
]
});
