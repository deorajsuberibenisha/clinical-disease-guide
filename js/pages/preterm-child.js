/* Preterm and low-birth-weight newborn — full depth (Thin-page Round 5, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (Module 2 §7 LBW management: recognition, problems, where to manage,
   hospitalisation criteria, feeding mode by gestation, fluid table, gavage technique and NEC warning signs, weight targets,
   vitamin K/D and iron, vaccines incl. Hep B and BCG rules, discharge criteria; §6.3 hypothermia grades; §6.4 IV fluid
   indications; §4.8.8 transfer); Bhutan EM booklet 2018 ch. 3B (premature resuscitation, 90 min skin-to-skin then continuous KMC);
   WHO recommendations for care of the preterm or LBW infant 2022 (Table 1, all 25 recommendations); WHO iKMC trial abstract
   (NEJM 2021); European RDS 2022 (caffeine dose); Bhutan NEML 2025. */
registerPage({
id: "preterm-child",
title: "Preterm & Low-Birth-Weight Newborn",
subtitle: "Babies born before 37 weeks or under 2.5 kg cause most newborn deaths, and most of those deaths are preventable: keep them warm with kangaroo mother care from birth, feed mother's milk from the first day, watch breathing, glucose and infection, and send them home only when feeding and gaining weight",
age: "Newborns", specs: ["neo", "nicu", "paeds"],
keywords: ["preterm", "premature", "prematurity", "low birth weight", "LBW", "VLBW", "very low birth weight", "small for gestational age", "SGA", "IUGR", "kangaroo mother care", "KMC", "immediate KMC", "iKMC", "gavage feeding", "cup and spoon feeding", "paladai", "expressed breast milk", "caffeine citrate", "apnoea of prematurity", "hypothermia newborn", "retinopathy of prematurity", "ROP", "vitamin K", "iron drops"],
related: ["rds-child", "asphyxia-child", "nec-child", "neosepsis-child", "neojaundice-child", "hypo-child", "neoseizure-child", "pretermlabour-preg"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Low-birth-weight babies are about 15% of births but account for about 80% of newborn deaths and half of infant deaths (Bhutan IMNCI 2024). Extra attention to warmth, infection prevention and feeding prevents most of these deaths.</p>
<div class="glance">
<div><h4>Where</h4><p><b>Under 1500 g or under 32 weeks: refer to a NICU</b> (ideally the mother before birth). Over 1500 g and 32 weeks: manage at the hospital with paediatric advice (IMNCI).</p></div>
<div><h4>Warmth</h4><p>Keep 36.5–37.5 °C. <b>Kangaroo mother care from birth</b>, 8–24 h a day (WHO strong).</p></div>
<div><h4>Feeds</h4><p>Mother's milk from day 1. Under 32 weeks: tube; 32–34 weeks: cup and spoon; over 34 weeks: breast (IMNCI). Advance by up to 30 mL/kg/day (WHO).</p></div>
<div><h4>Fluids</h4><p>Day 1: 60 mL/kg (80 if under 1500 g), rising to 150–180 mL/kg/day by day 7 (IMNCI).</p></div>
<div><h4>Breathing</h4><p>CPAP for RDS; ${dr("caffeine_citrate", "caffeine")} for apnoea and under 34 weeks.</p></div>
<div><h4>Supplements</h4><p>${dr("vitamin_k", "Vitamin K 0.5 mg IM")} at birth; ${dr("cholecalciferol", "vitamin D 400 IU")} from 2 weeks; ${dr("ferrous", "iron 2 mg/kg/day")} from 4 weeks — to 1 year.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan IMNCI 2024 §7: refer babies under 1500 g or under 32 weeks to a NICU; admit any LBW baby under 1800 g, unable to feed from the breast or by cup and spoon, or sick; discharge stable babies over 1800 g who breastfeed well with close follow-up. The Bhutan Emergency booklet 2018 adds at least 90 minutes of skin-to-skin after birth and then 24-hour KMC. NEML 2025 has caffeine citrate 20 mg/mL (oral and injection), vitamin K injection, 10% dextrose, ampicillin and gentamicin. NICUs: JDWNRH and the regional referral hospitals. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions and recognition", html: `
${tbl(["Term", "Definition"], [
["Preterm", "Born before 37 completed weeks: late 34–36, moderate 32–33, very 28–31, extremely under 28 weeks"],
["Low birth weight (LBW)", "Under 2500 g"],
["Very LBW (VLBW)", "Under 1500 g"],
["Extremely LBW", "Under 1000 g"],
["Small for gestational age (SGA, small-for-date)", "Weight below the 10th centile for gestation — from growth restriction (IUGR); may be term or preterm"]])}
<h3>Signs of prematurity when dates are unknown (Bhutan IMNCI)</h3>
<ul><li>Soft ear without cartilage that does not spring back when folded.</li><li>Pale areola; breast nodule absent or under 5 mm.</li><li>Deep sole creases only on the front third of the sole.</li><li>Boys: smooth scrotum, undescended testes. Girls: labia majora do not cover the labia minora.</li><li>Plenty of fine lanugo hair on the back.</li></ul>
<p>A formal score (New Ballard) gives a more exact gestation where staff are trained.${r(1)}</p>
` },

{ id: "patho", title: "Why preterm and small babies get into trouble", html: `
${tbl(["Problem", "Preterm (IMNCI)", "Small-for-date (IMNCI)", "Why"], [
["Hypothermia", "Yes", "Yes", "Large surface area, little fat, thin skin"],
["Feeding difficulty", "Cannot breastfeed before about 34 weeks", "Feeding issues", "Suck–swallow–breathe coordination matures at 32–34 weeks"],
["Respiratory distress, RDS", "Yes", "—", "Surfactant deficiency"],
["Apnoea of prematurity", "Yes", "—", "Immature breathing control"],
["IVH, PVL", "Yes", "—", "Fragile brain vessels"],
["Hypoglycaemia, hypocalcaemia", "Yes", "Hypoglycaemia", "Low stores, high demand"],
["Feed intolerance, NEC", "Yes", "—", "Immature gut"],
["Infection", "Yes", "Yes", "Low immunity, procedures"],
["Asphyxia, meconium aspiration", "—", "Yes", "Placental insufficiency"],
["Retinopathy of prematurity", "Yes", "—", "Immature retina; excess oxygen"]])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan (IMNCI 2024 / EM 2018)", "WHO 2022", "This guide"], [
["When to start KMC", "90 min skin-to-skin after birth, then continuous; for unstable babies once haemodynamically stable", "<b>Immediately after birth</b>, as soon as possible (strong); 8–24 h/day", "Immediate KMC with monitoring wherever staff can watch the baby"],
["Feed advancement", "Start small, build up gradually; check girth and aspirates", "Up to 30 mL/kg/day (conditional)", "20–30 mL/kg/day if tolerated"],
["Target total intake", "180–200 mL/kg/day when growing", "150–180 mL/kg/day in trials", "150–180, up to 200 if growth poor"],
["Vitamin D", "400 IU from 2 weeks to 1 year (1500–2499 g)", "May be considered (conditional)", "All LBW, 400 IU"],
["Iron", "2 mg/kg/day from 4 weeks to 1 year", "Recommended; 2–4 mg/kg/day when feeds established", "2 mg/kg/day from 2–4 weeks"],
["Probiotics", "—", "May be considered for human-milk-fed under 32 weeks", "Only with a quality product and NICU protocol"],
["Caffeine", "—", "Apnoea (strong); prevention under 34 weeks (conditional)", "Under 34 weeks with apnoea, on CPAP or extubation"],
["Emollients", "—", "Topical oil may be considered", "Plain vegetable oil massage if family wishes; avoid mustard oil"]])}
<p>The WHO immediate-KMC trial (3211 babies of 1.0–1.8 kg in Ghana, India, Malawi, Nigeria and Tanzania) found 28-day deaths of 12.0% with immediate KMC versus 15.7% when KMC started after stabilisation (relative risk 0.75).${r(4)} Sources: Bhutan IMNCI,${r(1)} EM booklet,${r(2)} WHO 2022.${r(3)}</p>
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li>Gestation (dates, early scan, physical signs), weight, length and head circumference plotted on a preterm chart.</li><li>Temperature, breathing rate and effort, apnoea, SpO₂, heart rate, colour, capillary refill.</li><li>Glucose within the first hours and before feeds on day 1.</li><li>Ability to suck and swallow; abdomen (distension, bile).</li><li>Jaundice, skin, cord, signs of infection; danger signs.</li></ul>
${box("red", "Danger signs — act now", `<ul><li>Apnoea, cyanosis, severe indrawing or grunting</li><li>Temperature under 35.5 °C or over 37.5 °C</li><li>Lethargy, poor feeding, convulsions</li><li>Abdominal distension, bilious vomiting, blood in stool (NEC)</li><li>Jaundice on day 1, or reaching palms and soles</li></ul>`)}
<h3>Hypothermia grades (Bhutan IMNCI)</h3>
${tbl(["Grade", "Axillary temperature", "Action"], [["Mild (cold stress)", "36.0–36.4 °C (cold feet)", "Skin-to-skin, cap, socks; feed more often"], ["Moderate", "32–35.9 °C", "Skin-to-skin (mother, father or another adult) in a room at least 25 °C, or radiant warmer if sick; check glucose"], ["Severe", "Under 32 °C", "Pre-warmed warmer or incubator, glucose, IV fluids, treat for sepsis, oxygen if needed; temperature half-hourly"]])}
<h3>The typical patient</h3>
<p>Deki is born at 33 weeks in a district hospital weighing 1650 g. She cries at birth and is placed skin-to-skin on her mother's chest at once, with a cap and blanket. Temperature at 1 hour is 36.6 °C and glucose 55 mg/dL. Her mother expresses colostrum, given by cup and spoon (about 8 mL every 2 hours on day 1 = 60 mL/kg/day), with Deki put to the breast before each feed. Vitamin K 0.5 mg IM is given. She stays in KMC 20 hours a day, loses 8% of her weight by day 6, regains her birth weight by day 12, and goes home at 1900 g, breastfeeding, with weekly weight checks until she reaches 2.5 kg.</p>
` },

{ id: "ddx", title: "Problems to look for", html: `
${tbl(["Finding", "Think of"], [
["Breathing fast, grunting", "RDS, TTN, pneumonia — see respiratory distress page"],
["Pauses in breathing", "Apnoea of prematurity — but first exclude sepsis, hypoglycaemia, hypothermia, anaemia, seizures"],
["Poor feeding, lethargy", "Sepsis, hypoglycaemia, hypothermia"],
["Distended abdomen, aspirates, blood in stool", "NEC (girth up 2 cm or aspirate over 25% of last feed — IMNCI)"],
["Jaundice", "Lower phototherapy thresholds than term babies"],
["Poor weight gain after 2 weeks", "Too little milk, cold stress, infection, anaemia"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "When"], [
["Glucose", "Within 1–2 h, then before feeds (3-hourly) on day 1 and while unwell"],
["Temperature", "Every 3–4 h; half-hourly while rewarming"],
["Weight", "Daily; length and head circumference weekly (IMNCI)"],
["Bilirubin (transcutaneous or serum)", "Any visible jaundice"],
["Sepsis screen and blood culture", "Maternal risk factors or any sign of illness"],
["Chest X-ray, blood gas", "Respiratory distress"],
["Haemoglobin", "Pallor, poor gain, apnoea"],
["Cranial ultrasound", "Under 32 weeks where available"],
["ROP eye screening", "Very preterm or VLBW babies, or long oxygen exposure"]])}
` },

{ id: "staging", title: "Fluids, feeds and caffeine calculator", html: `
<p>Enter birth weight, day of life and gestation. Volumes follow the Bhutan IMNCI fluid table; feed method follows IMNCI by gestation; caffeine follows WHO 2022 and the European 2022 doses.</p>
<div class="calc" data-calc="pretermfeed"></div>
` },

{ id: "manage", title: "Management step by step", html: `
<h3>1. Before and at birth</h3>
<ul><li>Preterm labour or growth restriction: transfer the <b>mother</b> to a hospital with comprehensive EmONC before birth — far safer than moving the baby (IMNCI).</li><li>Antenatal steroids and magnesium sulfate as on the preterm labour page.</li><li>Extra trained staff, warm room, pre-warmed towels and warmer; plastic bag for very preterm babies (EM booklet: under 28 weeks; AHA/ERC: under 32 weeks).</li><li>Delay cord clamping 60 s or more if the baby does not need resuscitation.</li></ul>
<h3>2. Warmth — kangaroo mother care</h3>
<ul><li>Start KMC as soon as possible after birth (WHO 2022), for as many hours as possible (8–24 h a day). The baby wears only a nappy and cap, upright between the mother's breasts, tied with a cloth and covered with a shawl (IMNCI).</li><li>The father or another adult can provide KMC if the mother is unwell.</li><li>Radiant warmer or incubator for babies too sick for KMC; return to KMC as soon as possible.</li><li>At home: warm room, 2–3 layers of clothing, cap, socks, mittens; check that the soles and palms are warm and pink (IMNCI).</li></ul>
<h3>3. Feeding</h3>
<ul><li>Mother's own milk for every baby; express within hours of birth and then every 2–3 hours. Expressed milk keeps about 6 hours at room temperature (IMNCI).</li><li>Feed method by gestation (IMNCI): <b>28–31 weeks</b> — IV fluids on day 1, then tube (gavage) feeds; <b>32–34 weeks</b> — tube for 1–3 days, then cup and spoon; <b>over 34 weeks</b> — direct breastfeeding (cup and spoon if not satisfactory). Put every stable baby to the breast before tube or cup feeds.</li><li>Feed every 2–3 hours. Increase by 20–30 mL/kg/day as tolerated, up to 180–200 mL/kg/day when growing.</li><li>Before each tube feed: measure abdominal girth and aspirate. Girth up more than 2 cm or aspirate over 25% of the last feed → stop feeds and assess for NEC (IMNCI).</li><li>If mother's milk is not available: donor milk where possible; then preterm formula for very preterm babies (WHO).</li><li>Sepsis without shock is not a reason to stop feeds (IMNCI).</li></ul>
<h3>4. IV fluids (IMNCI)</h3>
<ul><li>For babies under 30 weeks, under 1200 g, or sick (severe distress, lethargy, feed intolerance, distension, uncontrolled seizures).</li><li>10% dextrose: day 1 60 mL/kg (80 if under 1500 g), day 2 80 (95), day 3 100 (110), day 4 120 (125), day 5 140, day 6 150 mL/kg/day; add sodium from day 3. Reduce IV as feeds increase.</li></ul>
<h3>5. Breathing</h3>
<ul><li>Oxygen by nasal prongs 0.5–1 L/min to SpO₂ 90–94%; CPAP for RDS (see respiratory distress page).</li><li>${dr("caffeine_citrate", "Caffeine citrate")} 20 mg/kg load then 5–10 mg/kg daily for apnoea, for babies under 34 weeks on CPAP, and before extubation (WHO strong); continue until about 34 weeks' corrected age and apnoea-free for 5–7 days.</li></ul>
<h3>6. Infection prevention</h3>
<ul><li>Hand washing before and after every touch; clean cord care (dry, nothing applied); avoid unneeded cannulas and procedures; mother's milk.</li><li>Treat suspected sepsis promptly (see neonatal sepsis page).</li></ul>
<h3>7. Supplements and vaccines (IMNCI)</h3>
<ul><li>Vitamin K 0.5 mg IM at birth for all LBW babies.</li><li>Vitamin D 400 IU daily from 2 weeks (full feeds) to 1 year; elemental iron 2 mg/kg/day from 4 weeks to 1 year.</li><li>Vaccines at the same chronological age as term babies. Hepatitis B birth dose: within 24 h if 2 kg or more and mother HBsAg-negative; if under 2 kg, at discharge or 1 month (whichever earlier); if mother HBsAg-positive or unknown, give the birth dose and HBIG whatever the weight. BCG once the baby reaches 2 kg.</li></ul>
<h3>8. Discharge (IMNCI)</h3>
<ul><li>Breastfeeding established, gaining weight for 3 consecutive days, no illness, temperature stable in the room with the mother, and the mother is confident.</li><li>Weekly visits until 2.5 kg; then monthly at the MCH clinic.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine", "Dose", "Notes"], [
[dr("vitamin_k"), "0.5 mg IM at birth (all LBW)", "Bhutan IMNCI"],
[dr("caffeine_citrate", "Caffeine citrate 20 mg/mL"), "20 mg/kg load, then 5–10 mg/kg once daily", "Citrate doses. Hold if HR over 180 or feed intolerance"],
[dr("cholecalciferol", "Vitamin D"), "400 IU once daily from 2 weeks to 1 year", "Bhutan IMNCI (1500–2499 g)"],
[dr("ferrous", "Iron (elemental)"), "2 mg/kg/day from 4 weeks to 1 year", "IMNCI; WHO 2–4 mg/kg/day"],
[dr("dextrose", "10% dextrose"), "By IMNCI fluid table", "Glucose under 45 mg/dL: 2 mL/kg bolus"],
[dr("ampicillin"), "50 mg/kg 12-hourly (under 7 days), 8-hourly after", "Suspected sepsis (IMNCI)"],
[dr("gentamicin"), "4 mg/kg once daily (IMNCI)", "Longer intervals in very preterm babies — check local NICU protocol"],
[dr("hepb_vaccine", "Hepatitis B vaccine"), "Timing by weight and maternal HBsAg (see Management)", "With HBIG if mother positive or unknown"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Under 28 weeks or under 1000 g</b>", "NICU only. Plastic wrap, humidified incubator, CPAP from birth, surfactant, caffeine, IV fluids 80 mL/kg/day on day 1 with careful sodium, cranial ultrasound, ROP screening"],
["<b>Late preterm (34–36 weeks)</b>", "Look mature but feed poorly; jaundice, hypoglycaemia and hypothermia are common. Keep with the mother, check feeds and glucose; discharge only when feeding well"],
["<b>Small-for-date term babies</b>", "Feed early and often; check glucose; watch for asphyxia and meconium aspiration; regain birth weight by day 7–10"],
["<b>Twins</b>", "Often both preterm and growth-restricted; KMC can be given to both"],
["<b>Mother unwell or absent</b>", "Father, grandmother or another adult gives KMC; donor or expressed milk"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Baby under 1500 g born at a BHU or district hospital", "KMC immediately, cap and blanket; glucose; first doses of antibiotics if sick; call the NICU; transfer in KMC with the mother, with oxygen if needed"],
["No CPAP available", "Oxygen by prongs, KMC, caffeine, glucose; early referral"],
["Mother has little milk in the first days", "Express every 2–3 h, skin-to-skin, breast before each feed; small volumes of colostrum are enough on day 1"],
["Family wants to take the baby home early", "Explain discharge criteria; arrange weekly weights and home visits; show danger signs"],
["Baby not gaining after 2 weeks", "Check volume actually given, warmth, infection, anaemia; increase to 180–200 mL/kg/day if tolerated"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li><b>Early:</b> hypothermia, hypoglycaemia, RDS, apnoea, sepsis, NEC, IVH, jaundice, hypocalcaemia, patent ductus arteriosus.</li><li><b>Later:</b> retinopathy of prematurity, bronchopulmonary dysplasia, anaemia of prematurity, metabolic bone disease, poor growth, hearing loss.</li><li><b>Long term:</b> cerebral palsy, developmental and learning delay, behaviour problems; in adults higher risk of hypertension and diabetes.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Weight weekly until 2.5 kg, then monthly (IMNCI). Expect 15–20 g/kg/day (at least 200–300 g a week) after birth weight is regained.</li><li>Eye screening for retinopathy of prematurity in very preterm or VLBW babies and those with long oxygen exposure.</li><li>Hearing screen before discharge or at the first visit.</li><li>Development checks using corrected age until 2 years.</li><li>Vitamin D and iron to 1 year; vaccines on schedule by chronological age.</li><li>Teach the family danger signs and when to return.</li></ul>
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Kangaroo mother care", src: "images/kmc.jpg", mod: "Photograph", ctx: "Low-birth-weight baby", loc: "Mother's chest", find: "Baby upright skin-to-skin between the breasts, head turned to one side, wrapped together with the mother", interp: "Keeps the baby warm, supports breathing and breastfeeding; immediate KMC reduced deaths in the WHO trial", by: "Sathishsugavanam27", page: "https://commons.wikimedia.org/wiki/File:MotherKMC.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Baby born preterm or under 2.5 kg", [F.s("Warmth, resuscitation if needed, delayed cord clamping"), F.a, F.d("Under 1500 g or under 32 weeks?"), F.a, F.b([["Yes", F.e("Refer to NICU in KMC with the mother; glucose; oxygen if needed")], ["No", F.s("Manage here with paediatric advice")]]), F.a, F.e("Immediate KMC; vitamin K 0.5 mg; glucose checks"), F.a, F.d("Sick or under 1200 g / 30 weeks?"), F.a, F.b([["Yes", F.e("IV 10% dextrose by table; CPAP/caffeine if needed")], ["No", F.s("Breast milk by breast, cup or tube by gestation")]]), F.a, F.e("Increase feeds 20–30 mL/kg/day; daily weight"), F.a, F.ok("Discharge: breastfeeding, 3 days' gain, stable temperature, confident mother")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Separating a stable baby from the mother for an incubator", "Loses the mortality benefit of KMC", "Immediate KMC with monitoring"],
["Prelacteal feeds or formula before mother's milk", "Infection, NEC", "Express colostrum within hours"],
["Feeding by weight instead of feeding skill", "Aspiration or slow progress", "Choose method by gestation and observed sucking (IMNCI)"],
["Fast feed increases without checking the abdomen", "NEC missed", "Girth and aspirates before tube feeds"],
["Unmonitored oxygen", "Retinopathy", "SpO₂ 90–94%"],
["Discharge before weight gain", "Readmission, death", "IMNCI discharge criteria"],
["Delaying vaccines for small babies", "Avoidable infections", "Vaccinate by chronological age; Hep B and BCG rules by weight"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name four physical signs of prematurity.", "Soft ear without recoil, small or absent breast nodule, sole creases only on the front third, smooth scrotum with undescended testes or uncovered labia minora, lanugo.")}
${qa("Intern/MO", "Which LBW babies should be referred to a NICU in Bhutan?", "Birth weight under 1500 g or gestation under 32 weeks (IMNCI 2024).")}
${qa("Intern/MO", "What is the fluid requirement on day 3 for a 1400 g baby?", "110 mL/kg/day = 154 mL/day (IMNCI table, under 1500 g).")}
${qa("Intern/MO", "When should a 1.8 kg baby of an HBsAg-negative mother get hepatitis B vaccine?", "At discharge or at 1 month of age, whichever is earlier (under 2 kg). BCG when the baby reaches 2 kg.")}
${qa("Specialist", "What did the WHO immediate KMC trial show?", "In babies of 1.0–1.8 kg, KMC started immediately after birth reduced 28-day mortality from 15.7% to 12.0% (RR 0.75).")}
${qa("Specialist", "When should tube feeds be stopped for possible NEC?", "Abdominal girth increase of more than 2 cm or a pre-feed aspirate over 25% of the last feed (IMNCI), or bilious aspirates, blood in stool or a sick baby.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: Module 2 §6.3 hypothermia, §6.4 IV fluids, §7 Management of low-birth-weight babies.</li>
<li id="ref-2">Emergency Medical Services Division, Ministry of Health, Bhutan. Clinical orientation manual — Chapter 3B Neonatal resuscitation (resuscitation for premature babies), 2018. <a href="https://moh.gov.bt/wp-content/uploads/2025/01/Chapter-3B-Neonatal-Resus.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
<li id="ref-3">World Health Organization. WHO recommendations for care of the preterm or low-birth-weight infant. Geneva: WHO; 2022. ISBN 9789240058262. <a href="https://www.who.int/publications/i/item/9789240058262" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">WHO Immediate KMC Study Group. Immediate "kangaroo mother care" and survival of infants with low birth weight. N Engl J Med 2021;384(21):2028–2038. <a href="https://doi.org/10.1056/NEJMoa2026486" target="_blank" rel="noopener">doi:10.1056/NEJMoa2026486</a></li>
<li id="ref-5">Sweet DG, Carnielli VP, Greisen G, et al. European consensus guidelines on the management of respiratory distress syndrome: 2022 update. Neonatology 2023;120(1):3–23. <a href="https://doi.org/10.1159/000528914" target="_blank" rel="noopener">doi:10.1159/000528914</a></li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024 §7", "<span class='pass'>Read directly</span>", "Referral, admission, feeding by gestation, fluids, NEC signs, supplements, vaccines, discharge"],
["Bhutan EM booklet 2018", "<span class='pass'>Read directly</span>", "Premature resuscitation and KMC"],
["WHO 2022 preterm/LBW", "<span class='pass'>Read directly</span>", "All 25 recommendations (Table 1); iron dose remark"],
["iKMC trial", "<span class='pass'>Read directly</span>", "Abstract, Europe PMC"],
["Two-source doses", "<span class='pass'>Checked</span>", "Caffeine: European 2022 + drug card. Iron: IMNCI + WHO. Vitamin K 0.5 mg and vitamin D: IMNCI (national source)"],
["ROP screening thresholds", "<span class='unv'>Not read</span>", "No Bhutan or WHO threshold read — page gives no fixed cut-off"],
["Plastic wrap threshold", "<span class='pass'>Checked</span>", "EM booklet under 28 weeks; AHA/ERC under 32 weeks — both shown"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "pretermfeed (900 g day 1; 1400 g day 3; 2100 g day 6)"]], "qc")}` }
]
});
