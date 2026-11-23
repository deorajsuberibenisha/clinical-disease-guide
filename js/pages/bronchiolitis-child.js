/* Bronchiolitis */
registerPage({
id: "bronchiolitis-child",
title: "Bronchiolitis — Infants",
subtitle: "A viral illness that needs nursing, not drugs: clear the nose, keep the baby fed and oxygenated, watch for apnoea, and avoid salbutamol, steroids and antibiotics",
age: "Infants under 2 years", specs: ["paeds", "resp", "picu"],
keywords: ["bronchiolitis", "RSV", "respiratory syncytial virus", "wheezing infant", "infant cough", "chest indrawing", "apnoea", "nasal suction", "high-flow oxygen", "CPAP", "nirsevimab", "palivizumab"],
related: ["pneumonia-child", "asthma-child", "neosepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Bronchiolitis is the commonest reason infants are admitted in winter. It starts like a cold and peaks on days 3–5. Good care is simple: oxygen when needed, help with feeding, and watchful nursing.</p>
<div class="glance">
<div><h4>Typical baby</h4><ul><li>Under 12 months (up to 2 years)</li><li>Runny nose, then cough</li><li>Fast breathing, indrawing</li><li>Crackles and/or wheeze</li></ul></div>
<div><h4>Admit if</h4><ul><li>Apnoea</li><li>SpO₂ under 90% (WHO/JDWNRH; NICE 92%)</li><li>Feeding under 50–75%</li><li>Severe distress, RR over 70</li></ul></div>
<div><h4>Treat</h4><p>Oxygen, nasal suction, small frequent or NG feeds. CPAP or high-flow for failing infants.</p></div>
<div><h4>Do NOT routinely give</h4><p>${dr("salbutamol")}, adrenaline, steroids, antibiotics, hypertonic saline, chest physiotherapy.</p></div>
<div><h4>High risk</h4><p>Under 3 months, born before 32 weeks, heart or lung disease, immunodeficiency.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG has no bronchiolitis section; the JDWNRH Paediatric OPD handbook (B2.2) follows NICE and AAP with an oxygen threshold of SpO₂ under 90%. At altitude (Thimphu about 2300 m), healthy infants' SpO₂ is a little lower, so judge oxygen need alongside work of breathing. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is", html: `
<p>Viral infection of the small airways, mainly <b>respiratory syncytial virus (RSV)</b>, also rhinovirus, metapneumovirus and others, in children under 2, peaking at 2–6 months.${r(1, 2)}</p>
${tbl(["Feature", "Bronchiolitis", "Pneumonia", "Viral wheeze / asthma"], [
["Age", "Under 12 (up to 24) months", "Any", "Usually over 12 months"],
["Fever", "Mild or none", "Often high (over 39 °C)", "Variable"],
["Chest", "Widespread crackles ± wheeze", "Focal crackles, bronchial breathing", "Wheeze, recurrent"],
["Response to salbutamol", "None", "None", "Yes"]])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Small airways, big trouble", [
F.s("Virus infects bronchiolar lining cells"), F.a,
F.s("Cells die and slough; mucus and oedema narrow tiny airways"), F.a,
F.b([["Air trapping", F.s("Hyperinflation, wheeze")], ["Collapse", F.s("Patchy atelectasis, crackles, low SpO₂")]]), F.a,
F.e("Young infants: apnoea; tiring, feeding failure"), F.a,
F.ok("Self-limiting over 1–3 weeks; support breathing and feeding meanwhile")])}
` },

{ id: "conflicts", title: "Where guidelines differ", html: `
${tbl(["Topic", "JDWNRH / WHO", "NICE NG9", "AAP 2014", "This guide"], [
["Oxygen threshold", "SpO₂ under 90%", "Under 92%", "Under 90%", "Under 90%, considering altitude and distress " + LB.loc()],
["Bronchodilator trial", "IMCI: trial for wheeze, stop if no response", "Not recommended", "Not recommended", "Not routinely; a single trial in an older infant with recurrent wheeze only"],
["Prevention", "—", "Palivizumab for high-risk", "Nirsevimab or palivizumab", "Not available in Bhutan; hygiene and breastfeeding"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Sign", "Meaning"], [
["Runny nose, then cough over 1–3 days", "Typical start"],
["Fast breathing, chest indrawing, nasal flaring, grunting, head bobbing", "Increasing distress"],
["Widespread fine crackles and/or wheeze", "Typical chest findings"],
["Apnoea", "Young or preterm infants; admit"],
["Poor feeding, fewer wet nappies", "Dehydration; needs NG feeds"],
["SpO₂ under 90%", "Needs oxygen"]])}
<h3>The typical patient</h3>
<p>A 4-month-old girl from Punakha has had a cold for two days and now coughs, breathes fast and takes only half her usual feeds. Temperature 37.8 °C, RR 62, subcostal indrawing, widespread crackles and wheeze, SpO₂ 89% in air. <b>This is bronchiolitis needing admission</b>: classic age and course, widespread signs, low SpO₂ and feeding at half normal. She needs oxygen, nasal suction and NG feeds, and no salbutamol, steroids or antibiotics.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Clues", "Test"], [
["Pneumonia", "High fever, focal signs, toxic", "Chest X-ray"],
["Viral-induced wheeze or asthma", "Over 12 months, recurrent, responds to salbutamol", "Bronchodilator trial"],
["Heart failure (congenital heart disease)", "Murmur, large liver, poor growth, sweating with feeds", "Examination, echo"],
["Pertussis", "Paroxysmal cough, whoop, apnoea, vomiting after cough", "PCR, history"],
["Inhaled foreign body", "Sudden onset, unilateral signs", "X-ray, bronchoscopy"],
["Sepsis in young infants", "Lethargy, poor perfusion", "See neonatal sepsis"]])}
` },

{ id: "invest", title: "Investigations", html: `
<p><b>Usually none.</b> Pulse oximetry is the key measurement. Chest X-ray, blood tests and viral swabs only if severe, atypical, or considering admission to intensive care. A blood gas helps when exhaustion is suspected (rising CO₂).${r(1)}</p>
` },

{ id: "staging", title: "Severity tool", html: `
<div class="calc" data-calc="bronchsev"></div>
<h3>Refer</h3>
<ul><li>To a hospital with oxygen: SpO₂ under 90%, apnoea, poor feeding, severe distress.</li><li>To HDU/PICU (CPAP, high-flow): exhaustion, recurrent apnoea, SpO₂ under 92% despite oxygen, rising CO₂.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<ul><li><b>Oxygen</b> by nasal cannula if SpO₂ under 90%; aim 90–94%. High-flow nasal oxygen or CPAP for increasing distress or failing oxygen therapy.</li>
<li><b>Nasal care:</b> saline drops and gentle suction before feeds (avoid deep suction).</li>
<li><b>Feeding:</b> small frequent feeds; NG feeds if intake is under 50–75% or distress makes feeding unsafe; IV isotonic fluid only if NG feeding is not tolerated (watch sodium).</li>
<li><b>Position:</b> head slightly up; minimal handling.</li>
<li><b>Not recommended routinely:</b> salbutamol, ipratropium, adrenaline, steroids, antibiotics (unless secondary bacterial infection), hypertonic saline, chest physiotherapy, antivirals.${r(1, 2)}</li>
<li><b>Discharge</b> when feeding at least 50–75% of normal, SpO₂ 90% or more in air for 4 hours (including asleep), no significant distress; review in 24–48 hours.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
<p>There is no effective drug treatment for routine bronchiolitis. Paracetamol (${dr("paracetamol")} 15 mg/kg) for discomfort or fever. Antibiotics only for proven or strongly suspected bacterial infection.</p>
` },

{ id: "populations", title: "High-risk infants", html: `
<ul><li>Under 3 months (and especially under 6 weeks): apnoea risk; lower threshold to admit.</li>
<li>Born before 32 weeks, chronic lung disease, congenital heart disease, Down syndrome, immunodeficiency, neuromuscular disease: admit earlier, watch closely.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Parents ask for 'nebuliser'", "Explain it does not help; offer suction and feeding support", "No benefit, side effects"],
["Wheeze recurs in a 14-month-old", "Consider viral wheeze; salbutamol trial", "Different illness"],
["SpO₂ 91% at 2300 m, feeding well, mild distress", "Observe, safety-net", "Altitude lowers normal saturations"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Apnoea, respiratory failure (1–3% of admitted infants need ventilation), dehydration, secondary bacterial pneumonia (uncommon). Most recover in 2–3 weeks; cough can last up to 4 weeks. Some later develop recurrent wheeze.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "What to tell parents", `<ul><li>"This is a virus; it gets worse for a few days and then slowly better. Antibiotics and inhalers do not help."</li><li>Clear the nose with saline before feeds; give smaller feeds more often.</li><li>Keep the baby away from smoke; wash hands.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Pauses in breathing or blue lips</li><li>Breathing harder or faster, grunting</li><li>Feeding less than half of normal, or fewer wet nappies</li><li>Very sleepy</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Respiratory syncytial virus", src: "images/rsv-em.jpg", mod: "Electron micrograph", ctx: "The main cause of bronchiolitis", loc: "Virus particles", find: "Pleomorphic enveloped virus particles", interp: "RSV spreads by droplets and hands: hand washing protects infants", by: "CDC", page: "https://commons.wikimedia.org/wiki/File:Respiratory_syncytial_virus_01.jpg", lic: "Public domain" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Infant with cough and fast breathing", [
F.s("Coryza then cough, crackles or wheeze, under 2 years"), F.a,
F.d("Apnoea, SpO₂ <90%, feeding <50%, severe distress?"), F.a,
F.b([["Yes", F.e("Admit: oxygen, NG feeds, suction; HDU if failing")], ["No", F.ok("Home: nose care, feeding advice, review in 24–48 h")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Watch the baby feed and sleep</b>: both reveal severity.</li><li>Days 3–5 are the worst.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Routine salbutamol or steroids", "No benefit, tachycardia, cost", "Supportive care"],
["Routine antibiotics", "Resistance, diarrhoea", "Only for bacterial infection"],
["Discharging before feeding recovers", "Readmission, dehydration", "Discharge criteria"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What virus most often causes bronchiolitis?", "Respiratory syncytial virus (RSV).")}
${qa("Intern/MO", "Which treatments are not recommended routinely?", "Salbutamol, adrenaline, steroids, antibiotics, hypertonic saline and chest physiotherapy.")}
${qa("Intern/MO", "Give three reasons to admit.", "Apnoea, SpO₂ under 90% (92% NICE), feeding under 50–75%, severe distress.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Bronchiolitis in children: diagnosis and management (NG9). 2015, updated 2021. <a href="https://www.nice.org.uk/guidance/ng9" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Ralston SL, Lieberthal AS, Meissner HC et al. Clinical practice guideline: the diagnosis, management, and prevention of bronchiolitis. <i>Pediatrics</i> 2014;134:e1474–e1502. <a href="https://doi.org/10.1542/peds.2014-2742" target="_blank" rel="noopener">doi:10.1542/peds.2014-2742</a></li>
<li id="ref-3">JDWNRH Paediatric OPD handbook, B2.2 Bronchiolitis; via Bhutan Clinical Reference app (Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Guidance", "<span class='pass'>Checked</span>", "NICE NG9, AAP 2014, JDWNRH handbook"],
["Altitude oxygen thresholds", "<span class='flag'>Local judgement</span>", "No Bhutan-specific infant SpO₂ norms found"]], "qc")}
` }
]
});
