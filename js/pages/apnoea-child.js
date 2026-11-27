/* Apnoea of prematurity — full depth (Thin-page Round 6, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (§6.11 apnoea definition "cessation of breathing for more than 20 seconds";
   §7 apnoeic spells among problems of preterm babies; §4.8 bag-mask for apnoea; §7 vaccines at chronological age);
   WHO recommendations for care of the preterm or LBW infant 2022 (B.4–B.6 caffeine); European RDS 2022 (caffeine 20 mg/kg load,
   5–10 mg/kg/day); CAP trial (Schmidt NEJM 2006 and 2007 abstracts); AAP clinical report 2016 (abstract only — full text 403);
   Bhutan NEML 2025 (caffeine citrate 20 mg/mL oral and injection; no aminophylline). */
registerPage({
id: "apnoea-child",
title: "Apnoea of Prematurity",
subtitle: "Preterm babies often stop breathing for 20 seconds or more, or for shorter spells with a slow heart rate or low oxygen. Stimulate and support breathing, always look for a hidden cause such as sepsis, give caffeine, add CPAP if spells continue, and keep monitoring until the baby is spell-free",
age: "Preterm infants", specs: ["neo", "nicu"],
keywords: ["apnoea of prematurity", "apnea of prematurity", "apnoeic spells", "apnoea bradycardia desaturation", "ABD", "caffeine citrate", "methylxanthine", "CAP trial", "CPAP", "NIPPV", "secondary apnoea", "preterm monitoring", "apnoea monitor"],
related: ["preterm-child", "cpap-child", "rds-child", "neosepsis-child", "neoseizure-child", "hypo-child", "nec-child", "asphyxia-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Breathing control in the brainstem is immature before about 34 weeks. Almost every baby born under 28 weeks has apnoeas, and many born before 34 weeks do. Most spells are mild and stop with a gentle rub, but frequent spells with bradycardia and low oxygen need treatment. A new or sudden increase in spells means a cause — sepsis first — until proven otherwise.</p>
<div class="glance">
<div><h4>Define</h4><p>No breathing for <b>more than 20 seconds</b> (Bhutan IMNCI), or a shorter pause with heart rate under 100 or SpO₂ under 80–85%.</p></div>
<div><h4>Act</h4><p>Gentle stimulation (rub back or soles), reposition the neck, clear the nose; <b>bag-mask</b> if no breathing after stimulation.</p></div>
<div><h4>Look for a cause</h4><p>Sepsis, low glucose, cold or overheating, anaemia, seizures, NEC, IVH, drugs.</p></div>
<div><h4>Caffeine</h4><p>${dr("caffeine_citrate", "Caffeine citrate")} <b>20 mg/kg</b> load, then <b>5–10 mg/kg once daily</b> (WHO strong for apnoea).</p></div>
<div><h4>Support</h4><p>CPAP 5–6 cmH₂O if spells continue on caffeine; ventilation if still failing.</p></div>
<div><h4>Stop and go home</h4><p>Stop caffeine about 33–34 weeks' corrected age after 5–7 spell-free days; watch 5–7 more days before discharge.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan IMNCI 2024 defines apnoea as cessation of breathing for more than 20 seconds and lists apnoeic spells among the main problems of preterm babies; apnoea or gasping needs bag-mask ventilation. Caffeine citrate 20 mg/mL injection and oral solution are on the NEML 2025 — the same solution can be given orally. Aminophylline is not on the NEML. Pulse oximeters with alarms are in district and referral hospital newborn units; very preterm babies are cared for at the JDWNRH and regional referral NICUs. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Who gets it and when", html: `
${tbl(["Feature", "Apnoea of prematurity"], [
["Who", "Preterm babies; more common the more preterm — nearly all under 28 weeks"],
["Onset", "Usually day 2–7 of life; <b>not</b> on day 1 (apnoea on the first day suggests asphyxia, sepsis, drugs or brain injury)"],
["Course", "Fewer spells as the baby matures; most stop by 36–40 weeks' corrected age; extremely preterm babies may have spells until 43–44 weeks"],
["Type", "Central (no effort), obstructive (effort against a closed airway) or mixed — mixed is most common"],
["Term babies", "Apnoea is <b>never</b> 'of prematurity' — always find the cause"]])}
<p>The AAP clinical report notes that definitions and monitoring vary widely and that it is unknown how harmful repeated mild spells are.${r(4)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Apnoea of prematurity", [F.s("Immature brainstem breathing centre"), F.a, F.s("Weak response to high CO₂; low oxygen depresses breathing instead of stimulating it"), F.a, F.s("Floppy upper airway collapses — obstructive element"), F.a, F.e("Pause → falling SpO₂ → reflex bradycardia"), F.a, F.e("Frequent severe spells → hypoxia, need for ventilation"), F.a, F.ok("Caffeine (adenosine blocker) stimulates the breathing centre; CPAP splints the airway")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan IMNCI 2024", "WHO 2022", "European RDS 2022 / AAP 2016", "This guide"], [
["Definition", "No breathing for more than 20 s", "—", "20 s, or shorter with bradycardia or desaturation (AAP: definitions vary)", "Over 20 s, or shorter with HR under 100 or SpO₂ under 80–85%"],
["Caffeine for apnoea", "—", "Recommended (strong)", "20 mg/kg load, 5–10 mg/kg/day", "Yes, for every preterm baby with apnoea"],
["Caffeine to prevent apnoea", "—", "May be considered under 34 weeks (conditional)", "Early caffeine for high-risk babies on non-invasive support (C1)", "Under 30–32 weeks on CPAP or with RDS; otherwise treat when spells start"],
["Caffeine before extubation", "—", "Recommended under 34 weeks (strong)", "To facilitate weaning (A1)", "Yes"],
["Aminophylline", "Not on NEML", "Caffeine preferred", "—", "Caffeine only"]])}
<p>The CAP trial (2006 babies of 500–1250 g) found caffeine reduced bronchopulmonary dysplasia (36% vs 47% on oxygen at 36 weeks)${r(5)} and death or neurodevelopmental disability at 18–21 months (40.2% vs 46.2%), with less cerebral palsy (4.4% vs 7.3%).${r(6)} WHO 2022;${r(2)} European 2022.${r(3)}</p>
` },

{ id: "presentation", title: "Recognising a spell", html: `
<ul><li>Pause in breathing seen by staff or parent, or alarm on the monitor (SpO₂ or heart rate).</li><li>Colour change — pale, dusky or blue; floppiness.</li><li>Heart rate falls below 100 (often below 80).</li><li>Spells often follow feeds, handling, sleep or a cold environment.</li></ul>
<h3>Grade the spell</h3>
${tbl(["Spell", "What it needed"], [["Mild", "Self-resolved"], ["Moderate", "Gentle stimulation"], ["Severe", "Oxygen or bag-mask ventilation"]])}
<p>Record every spell: time, duration, lowest heart rate and SpO₂, what was needed. A rising count or more severe spells change management.</p>
<h3>The typical patient</h3>
<p>Sonam was born at 29 weeks, 1.2 kg, and is on day 5. Today he has 8 spells with heart rate dipping to 70; three needed a rub on the back. He is warm, feeding by tube, glucose 70 mg/dL, abdomen soft, CRP normal and he looks well. <b>Apnoea of prematurity</b>: caffeine citrate 24 mg (1.2 mL) load then 6 mg daily, check the cot temperature, avoid neck flexion, prone positioning under monitoring. Spells fall to 2 a day. On day 9 he has 12 spells with mottling and a full abdomen — blood culture, antibiotics and an abdominal X-ray are done at once.</p>
` },

{ id: "ddx", title: "Secondary causes — check every time", html: `
${tbl(["Cause", "Clue", "Check"], [
["<b>Sepsis / meningitis</b>", "Sudden increase in spells, lethargy, temperature instability, poor perfusion", "Culture, CRP, LP; start antibiotics"],
["Hypoglycaemia", "Jittery or lethargic", "Glucose"],
["Hypothermia or overheating", "Cold feet or hot incubator", "Temperature, environment"],
["Anaemia", "Pale, tachycardic, poor gain", "Haemoglobin"],
["Seizures", "Apnoea with rising heart rate, eye deviation", "See neonatal seizures"],
["NEC", "Distension, aspirates, blood in stool", "Abdominal X-ray"],
["Intraventricular haemorrhage", "Very preterm, early days, falling haemoglobin", "Cranial ultrasound"],
["Airway obstruction, neck flexion, nasal block", "Effort without air movement", "Position, suction nose, check prongs"],
["Drugs", "Maternal opioids or magnesium; recent sedation or prostaglandin", "History"],
["Reflux", "Often blamed but rarely causes apnoea", "Do not start reflux medicines for apnoea"],
["Post-vaccination", "More spells for 48 h after the 6-week vaccines in very preterm babies still in hospital", "Monitor 48 h; still vaccinate"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "When"], [
["Glucose, temperature", "Every new or increased spell"],
["Full blood count, CRP, blood culture", "First spells (to exclude sepsis), any sudden increase"],
["Lumbar puncture", "Sepsis suspected"],
["Haemoglobin", "Pale or poor growth"],
["Electrolytes, calcium", "Sick baby"],
["Blood gas", "Frequent severe spells — CO₂ retention suggests need for CPAP/ventilation"],
["Cranial ultrasound", "Very preterm, early spells, abnormal neurology"],
["Abdominal X-ray", "Abdominal signs"]])}
` },

{ id: "staging", title: "Apnoea plan and caffeine calculator", html: `
<p>Enter gestation, corrected age, weight and severity. Caffeine doses are caffeine citrate (European 2022; WHO 2022 indications), with volumes for the NEML 20 mg/mL solution.</p>
<div class="calc" data-calc="apnoeaplan"></div>
` },

{ id: "manage", title: "Management step by step", html: `
<h3>1. During a spell</h3>
<ol><li>Gentle stimulation: rub the back or soles.</li><li>Reposition — neck slightly extended; clear the nose and mouth if blocked.</li><li>Oxygen only if SpO₂ stays low after breathing restarts; avoid high oxygen.</li><li>No breathing after stimulation, or heart rate under 60–80: bag-mask ventilation with air (Bhutan IMNCI).</li></ol>
<h3>2. Look for a cause</h3>
<ul><li>Every first presentation and every sudden increase: glucose, temperature, examination, and blood culture with CRP; treat sepsis while waiting if the baby looks unwell.</li></ul>
<h3>3. Caffeine</h3>
<ul><li>${dr("caffeine_citrate", "Caffeine citrate")} 20 mg/kg IV over 30 minutes or orally, then 5 mg/kg once daily from 24 hours later; increase to 10 mg/kg/day if spells continue.</li><li>Higher maintenance doses are used in some NICUs under specialist advice; watch for tachycardia (hold if heart rate over 180), feed intolerance and jitteriness.</li><li>Babies under 30–32 weeks on CPAP or with RDS: start caffeine early (WHO conditional; European 2022).</li></ul>
<h3>4. Respiratory support</h3>
<ul><li>Spells continuing on caffeine: CPAP 5–6 cmH₂O (see CPAP page) — it reduces obstructive and mixed spells.</li><li>Still frequent or severe: NIPPV or ventilation at a NICU.</li></ul>
<h3>5. General care</h3>
<ul><li>Neutral temperature; avoid sudden changes. KMC helps stabilise breathing.</li><li>Slower tube feeds or smaller, more frequent feeds if spells follow feeds.</li><li>Prone or lateral position only while on a monitor; supine sleep at home.</li><li>Treat anaemia by the unit's transfusion thresholds.</li></ul>
<h3>6. Stopping and discharge</h3>
<ul><li>Stop caffeine at about 33–34 weeks' corrected age once spell-free for 5–7 days. Caffeine stays in the body for about a week after stopping.</li><li>Observe on a monitor for a further 5–7 days off caffeine before discharge.</li><li>Home apnoea monitors are not needed for most babies.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine", "Dose", "Notes"], [
[dr("caffeine_citrate", "Caffeine citrate 20 mg/mL (NEML)"), "Load 20 mg/kg (1 mL/kg) IV or oral; maintenance 5–10 mg/kg (0.25–0.5 mL/kg) once daily", "Doses are citrate (2 mg citrate = 1 mg caffeine base). Hold if HR over 180"],
["Oxygen", "Only to keep SpO₂ 90–94%", "Excess oxygen causes retinopathy"]])}
<p>Caffeine doses: European RDS 2022${r(3)} and the existing drug card; indications WHO 2022.${r(2)}</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Term or near-term baby</b>", "Apnoea is always secondary: sepsis, seizures, hypoglycaemia, asphyxia, drugs, heart disease, airway problem — full work-up"],
["<b>Extremely preterm</b>", "Spells may last beyond 40 weeks' corrected age; longer caffeine courses"],
["<b>Babies being vaccinated in hospital</b>", "Monitor for 48 h after the 6-week vaccines; do not delay vaccines"],
["<b>Babies going for surgery or anaesthesia</b>", "Ex-preterm infants under about 60 weeks' corrected age need post-operative apnoea monitoring"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["District hospital, no CPAP, spells continuing on caffeine", "Increase caffeine to 10 mg/kg/day, check for sepsis and anaemia, call the NICU; transfer with bag-mask and an escort"],
["Parents notice a pause at home", "If brief and the baby recovered alone with normal colour, review; if colour change, floppiness or repeated, admit and look for a cause"],
["Caffeine running out", "Do not switch to aminophylline (not on NEML); request supply from the referral hospital"],
["Many spells but baby looks well", "Check the record is accurate (true apnoea vs monitor artefact); check the probe and alarm limits"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Hypoxia and bradycardia during severe spells; possible brain injury when frequent and severe.</li><li>Need for ventilation and its complications.</li><li>From caffeine: tachycardia, feed intolerance, jitteriness, temporarily slower weight gain (CAP trial).</li><li>Longer hospital stay.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Teach parents safe sleep: on the back, own cot or safe bedding near the parents, no smoking, no overheating.</li><li>Teach infant CPR to parents of babies who had severe spells.</li><li>Routine preterm follow-up: growth, development, eyes, hearing; vaccines by chronological age.</li></ul>
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Kangaroo mother care", src: "images/kmc.jpg", mod: "Photograph", ctx: "Preterm baby in skin-to-skin care", loc: "Mother's chest", find: "Baby upright skin-to-skin, head turned, airway open", interp: "KMC keeps temperature stable and helps regular breathing; monitor babies with frequent spells", by: "Sathishsugavanam27", page: "https://commons.wikimedia.org/wiki/File:MotherKMC.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Preterm baby with a breathing pause", [F.s("Stimulate, reposition, clear nose"), F.a, F.d("Breathing restarted?"), F.a, F.b([["No", F.e("Bag-mask ventilation with air")], ["Yes", F.s("Record spell; check glucose, temperature")]]), F.a, F.d("New, sudden increase, term baby or looks unwell?"), F.a, F.b([["Yes", F.e("Sepsis screen + antibiotics; look for other causes")], ["No", F.s("Apnoea of prematurity")]]), F.a, F.e("Caffeine citrate 20 mg/kg then 5–10 mg/kg/day"), F.a, F.d("Still frequent or severe?"), F.a, F.b([["Yes", F.e("CPAP 5–6 cmH₂O → NIPPV/ventilation at NICU")], ["No", F.ok("Continue; stop at ~34 weeks after 5–7 spell-free days")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling every apnoea 'prematurity'", "Sepsis or NEC missed", "Screen new or increasing spells"],
["Apnoea on day 1 treated with caffeine only", "Asphyxia, sepsis, drugs missed", "Apnoea of prematurity rarely starts on day 1"],
["Vigorous shaking or high oxygen during spells", "Injury, retinopathy", "Gentle rub; oxygen to target only"],
["Starting reflux medicines for apnoea", "No benefit; NEC and infection risk", "Avoid"],
["Discharging the day caffeine stops", "Spells return as levels fall", "5–7 spell-free days off caffeine"],
["Prone sleeping at home", "Sudden infant death risk", "Prone only on a monitor in hospital"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "How does Bhutan IMNCI define apnoea?", "Cessation of breathing for more than 20 seconds.")}
${qa("Student", "Why does apnoea of prematurity happen?", "The brainstem breathing centre is immature, low oxygen depresses breathing, and the upper airway collapses easily.")}
${qa("Intern/MO", "Write caffeine for a 1.5 kg baby with apnoea.", "Caffeine citrate 30 mg (1.5 mL of 20 mg/mL) IV or oral load, then 7.5–15 mg (0.375–0.75 mL) once daily from 24 h.")}
${qa("Intern/MO", "A 30-week baby on day 12 suddenly has many more spells. What is the first concern?", "Sepsis (also NEC) — blood culture, CRP and antibiotics; check glucose, temperature, abdomen.")}
${qa("Specialist", "What did the CAP trial show?", "Caffeine reduced BPD and death or neurodevelopmental disability at 18–21 months (40.2% vs 46.2%), with less cerebral palsy.")}
${qa("Specialist", "When can caffeine be stopped and the baby discharged?", "About 33–34 weeks' corrected age after 5–7 spell-free days; observe 5–7 days off caffeine before discharge.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: §4.8, §6.11, §7.</li>
<li id="ref-2">World Health Organization. WHO recommendations for care of the preterm or low-birth-weight infant. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240058262" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Sweet DG, Carnielli VP, Greisen G, et al. European consensus guidelines on the management of respiratory distress syndrome: 2022 update. Neonatology 2023;120(1):3–23. <a href="https://doi.org/10.1159/000528914" target="_blank" rel="noopener">doi:10.1159/000528914</a></li>
<li id="ref-4">Eichenwald EC; Committee on Fetus and Newborn. Apnea of prematurity. Pediatrics 2016;137(1):e20153757. <a href="https://doi.org/10.1542/peds.2015-3757" target="_blank" rel="noopener">doi:10.1542/peds.2015-3757</a></li>
<li id="ref-5">Schmidt B, Roberts RS, Davis P, et al. Caffeine therapy for apnea of prematurity. N Engl J Med 2006;354(20):2112–2121. <a href="https://doi.org/10.1056/NEJMoa054065" target="_blank" rel="noopener">doi:10.1056/NEJMoa054065</a></li>
<li id="ref-6">Schmidt B, Roberts RS, Davis P, et al. Long-term effects of caffeine therapy for apnea of prematurity. N Engl J Med 2007;357(19):1893–1902. <a href="https://doi.org/10.1056/NEJMoa073679" target="_blank" rel="noopener">doi:10.1056/NEJMoa073679</a></li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024", "<span class='pass'>Read directly</span>", "Definition, preterm problems, bag-mask"],
["WHO 2022", "<span class='pass'>Read directly</span>", "B.4–B.6 caffeine"],
["European RDS 2022", "<span class='pass'>Read directly</span>", "Caffeine doses"],
["CAP trial 2006 and 2007", "<span class='pass'>Read directly</span>", "Abstracts (Europe PMC)"],
["AAP 2016 clinical report", "<span class='unv'>Not read</span>", "Abstract only — full text returned 403. Resolution ages, stopping at 33–34 weeks and 5–7 day observation are widely used practice, not read from a guideline here"],
["Post-vaccination apnoea and post-operative monitoring age", "<span class='unv'>Not read</span>", "Common practice, no source read"],
["Two-source doses", "<span class='pass'>Checked</span>", "Caffeine: European 2022 + drug card (BNFc)"],
["NEML 2025", "<span class='pass'>Checked</span>", "Caffeine listed; aminophylline not listed"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "apnoeaplan"]], "qc")}` }
]
});
