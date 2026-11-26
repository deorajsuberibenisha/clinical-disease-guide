/* Cardiac arrest, choking and post-arrest care in infants and children — full depth (Batch E-1 upgrade, 26 Nov 2026; id kept).
   Sources read directly: AHA 2025 Part 6 (paediatric BLS recommendations) and Part 8 (accessible paediatric cardiac arrest and bradycardia
   algorithms); ERC 2025 Paediatric Life Support via the RCUK page (doses verbatim); Bhutan STG 2024 §1.2–1.3; Bhutan NEML 2025. */
registerPage({
id: "postarrest-child",
title: "Cardiac Arrest, Choking & Post-Arrest Care — Children",
subtitle: "Children usually arrest because they cannot breathe or are in shock, not because the heart fails first. Ventilate well, compress a third of the chest, give adrenaline by weight, shock VF, clear a choking airway the right way for the age, and protect the brain after ROSC. ERC 2025, AHA 2025 and the Bhutan STG",
age: "Infants & children", specs: ["paeds", "picu", "emerg"],
keywords: ["paediatric cardiac arrest", "PALS", "PLS", "CPR child", "infant CPR", "adrenaline 10 mcg/kg", "0.01 mg/kg", "defibrillation 4 J/kg", "2 J/kg", "amiodarone 5 mg/kg", "ROSC", "post-arrest care", "choking child", "choking infant", "back blows", "chest thrusts", "foreign body airway obstruction", "drowning child", "bradycardia child", "4Hs 4Ts"],
related: ["arrest-adult", "shock-child", "anaphylaxis-child", "icp-child", "asphyxia-child", "croup-child", "sepsis-child", "trauma-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most children who arrest have been getting worse for minutes or hours: low oxygen, shock or both. The heart slows, then stops (asystole or PEA). VF is less common. So <b>oxygen and ventilation matter as much as compressions</b>. Act early on the child who is tiring, grey or slowing down.</p>
<div class="glance">
<div><h4>Start</h4><p>Unresponsive, not breathing normally: <b>5 rescue breaths</b> (ERC), then CPR. Health workers: pulse check no more than 10 s.</p></div>
<div><h4>CPR</h4><p><b>15:2</b> (two trained rescuers; 30:2 alone), 100–120/min, <b>one third of chest depth</b> (about 4 cm infant, 5 cm child).</p></div>
<div><h4>Adrenaline</h4><p>${dr("adrenaline_arrest", "10 micrograms/kg IV/IO")} (0.1 mL/kg of 0.1 mg/mL), max 1 mg, every 3–5 min.</p></div>
<div><h4>Shock VF/pVT</h4><p><b>4 J/kg</b> (ERC) or 2 J/kg then 4 J/kg (AHA). ${dr("amiodarone_iv", "Amiodarone 5 mg/kg")} after the 3rd shock.</p></div>
<div><h4>Choking</h4><p><b>Infant:</b> 5 back blows, then 5 chest thrusts. <b>Child:</b> 5 back blows, then 5 abdominal thrusts. Unresponsive: CPR.</p></div>
<div><h4>After ROSC</h4><p>SpO₂ 94–98%, normal CO₂, normal BP for age, normal glucose, no fever; no early prognosis.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §1.3: no carotid or femoral pulse (brachial in infants) means arrest, so start CPR. §1.2: use age-appropriate back blows, chest or abdominal thrusts, and BLS if the child becomes unconscious. Adrenaline 1 mg/mL (to BHU), amiodarone 50 mg/mL, lignocaine 2%, dextrose 10%, atropine 0.6 mg/mL and calcium gluconate 10% are on the NEML 2025. Paediatric intensive care is at JDWNRH; regional hospitals stabilise and refer. Keep a weight-based dose sheet or a length-based tape on every emergency trolley. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Why children arrest", html: `
${tbl(["Pathway", "Typical causes in Bhutan", "What it means for CPR"], [
["<b>Respiratory (most common)</b>", "Pneumonia, bronchiolitis, severe asthma, croup, choking, drowning in rivers and ponds, smoke inhalation", "Hypoxia first: ventilation with oxygen is life-saving"],
["<b>Circulatory</b>", "Diarrhoea with dehydration, septic shock, dengue shock, bleeding after trauma", "Fluids 10 mL/kg boluses, antibiotics, blood"],
["<b>Primary cardiac (less common)</b>", "Congenital heart disease, myocarditis, long QT, hyperkalaemia, poisoning", "VF more likely: early defibrillation"],
["<b>Trauma</b>", "Falls, road crashes, head injury", "Treat reversible causes; see Major trauma — children"]])}
<p>Outcome is better for in-hospital than out-of-hospital arrests, and much better when the child is caught in respiratory failure or shock <i>before</i> the heart stops. The best paediatric resuscitation is the one you prevent by recognising the sick child early.</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("The usual road to arrest", [F.s("Respiratory failure or shock"), F.a, F.s("Hypoxia, acidosis, low cardiac output"), F.a, F.s("Bradycardia (heart rate under 60 with poor perfusion is treated as arrest)"), F.a, F.e("Asystole or PEA"), F.a, F.e("After ROSC: brain injury, myocardial dysfunction, systemic inflammation")])}
<p>A slow heart rate in a hypoxic child is a sign of impending arrest, not a reassuring sign. Oxygen and ventilation usually fix it. If the heart rate stays under 60 with poor perfusion despite good ventilation, start compressions (AHA 2025 bradycardia algorithm).</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Point", "ERC 2025 (Europe, UK)", "AHA 2025 (USA)", "This guide"], [
["Before compressions", "5 initial rescue breaths", "Start with compressions (C-A-B), then breaths", "5 breaths first, as most child arrests are hypoxic. Do not delay CPR to find equipment"],
["Ratio", "15:2 if trained in paediatric BLS; otherwise 30:2", "15:2 with 2 rescuers (before puberty); 30:2 with 1 rescuer", "15:2 for health workers; 30:2 is fine for a lone or lay rescuer"],
["Infant compression technique", "Two-thumb encircling", "Heel of one hand <b>or</b> two-thumb encircling; the two-finger technique is no longer advised", "Two-thumb encircling; heel of one hand if you cannot encircle the chest"],
["Shock energy", "4 J/kg every shock (max 120–200 J first shock); refractory VF up to 8 J/kg, max 360 J", "2 J/kg, then 4 J/kg, then at least 4 J/kg up to 10 J/kg or the adult dose", "4 J/kg (simpler and in line with the Bhutan Clinical Reference protocol)"],
["Adrenaline in VF/pVT", "After the 3rd shock, again after the 5th", "After the 2nd shock (algorithm box 6), then every 3–5 min", "After the 3rd shock (ERC)"],
["Amiodarone", "5 mg/kg (max 300 mg) after the 3rd shock; 5 mg/kg (max 150 mg) after the 5th", "5 mg/kg (max 300 mg), may repeat up to 3 doses (max 150 mg for later doses)", "ERC: 2 doses"],
["Lidocaine", "1 mg/kg only if amiodarone unavailable", "1 mg/kg as an equal alternative", "Use amiodarone first; lidocaine if none"],
["Ventilation with an advanced airway", "By age: 25/min infants, 20/min over 1 y, 15/min over 8 y, 10/min over 12 y", "1 breath every 2–3 s (20–30/min)", "ERC age-based rates (the lower limit of normal for age)"]])}
` },

{ id: "presentation", title: "Recognition and the first minute", html: `
${tbl(["Step", "Infant (under 1 year)", "Child (1 year to puberty)"], [
["Responsiveness", "Stimulate, call the name; do not shake", "Shake the shoulders gently, shout"],
["Airway", "Neutral head position (infants have a large occiput)", "Head tilt–chin lift (jaw thrust if trauma)"],
["Breathing", "Look, listen, feel for up to 10 s; gasping is not breathing", "Same"],
["Pulse (health workers)", "Brachial or femoral, up to 10 s", "Carotid or femoral, up to 10 s"],
["Breaths", "5 rescue breaths, mouth over mouth and nose or bag-mask", "5 rescue breaths, mouth-to-mouth or bag-mask"],
["Compressions", "Two-thumb encircling, lower half of the sternum, one third of chest depth (about 4 cm)", "Heel of one or both hands, lower half of the sternum, one third of depth (about 5 cm)"],
["Call", "Call 112 as soon as the infant does not respond (ERC 2025); if alone and a phone is at hand, call and start CPR together; send someone for the defibrillator", "Same"]])}
<h3>A typical patient</h3>
<p>A 3-year-old (14 kg) is pulled from an irrigation channel in Punakha after several minutes under water. He is blue, limp and not breathing, with no pulse. <b>Drowning arrest</b>: 5 rescue breaths with oxygen, then CPR 15:2. Adrenaline 0.14 mg (1.4 mL of 0.1 mg/mL) IV or IO as soon as access is ready, every 3–5 min. Keep him warm, but do not stop for cold. After ROSC: SpO₂ 94–98%, normal CO₂, fluid 10 mL/kg (140 mL) boluses if hypotensive, check glucose, prevent fever, and refer to PICU. Do not predict the outcome on day 1.</p>
` },

{ id: "ddx", title: "Reversible causes and bradycardia", html: `
${tbl(["Cause", "Clues in a child", "Treat"], [
["Hypoxia", "Choking, drowning, pneumonia, asthma, bronchiolitis", "Ventilate with 100% oxygen; secure the airway"],
["Hypovolaemia", "Diarrhoea, dengue, sepsis, trauma, burns", "10 mL/kg fluid boluses, blood for haemorrhage"],
["Hypo/hyperkalaemia, hypoglycaemia, metabolic", "Kidney failure, DKA, malnutrition, prolonged fast", "Glucose 2 mL/kg of 10%; treat potassium"],
["Hypothermia", "Drowning, cold exposure, neonates", "Rewarm; prolonged CPR"],
["Tension pneumothorax", "Trauma, ventilated child, asthma", "Needle or finger decompression"],
["Tamponade", "Trauma, after cardiac surgery, TB pericarditis", "Pericardiocentesis"],
["Toxins", "Paracetamol, organophosphates, iron, kerosene, opioids, tricyclics", "Antidotes; see Poisoning — children"],
["Thrombosis", "Rare: central lines, nephrotic syndrome", "Specialist care"]])}
<h3>Bradycardia with a pulse (AHA 2025)</h3>
<ol><li>Open the airway, give oxygen, ventilate if breathing is inadequate; attach the monitor.</li>
<li>If the heart rate is still <b>under 60/min with poor perfusion</b> despite ventilation: <b>start CPR</b>.</li>
<li>${dr("adrenaline_arrest", "Adrenaline")} 0.01 mg/kg IV/IO (0.1 mg/mL), max 1 mg, every 3–5 min.</li>
<li>${dr("atropine", "Atropine")} 0.02 mg/kg (minimum 0.1 mg, maximum single dose 0.5 mg), may repeat once, for increased vagal tone or primary heart block.</li>
<li>Consider pacing; treat the cause (hypoxia, hypothermia, raised intracranial pressure, toxins).</li></ol>
` },

{ id: "invest", title: "During and after CPR", html: `
${tbl(["Test", "When", "Why"], [
["Glucose (bedside)", "As soon as possible", "Hypoglycaemia is common and easily treated"],
["Blood gas, lactate, potassium, calcium", "During CPR if available; after ROSC", "Acidosis, hyperkalaemia"],
["Rhythm monitor and ECG", "Throughout; 12-lead after ROSC", "VF, heart block, long QT"],
["ETCO₂ (capnography)", "With a bag-mask or tube", "Tube placement, CPR quality, ROSC"],
["Chest X-ray, echo", "After ROSC", "Tube position, pneumothorax, heart function"],
["Toxicology, cultures", "Guided by history", "Find the cause"]])}
` },

{ id: "staging", title: "Doses by weight", html: `
<p>Use the measured weight. If there is no time, use a length-based tape or the parent's recent weight. Check every dose with a second person.</p>
<div class="calc" data-calc="arrestchild"></div>
${tbl(["Item", "Dose", "Example 14 kg"], [
["Adrenaline (0.1 mg/mL)", "10 mcg/kg = 0.1 mL/kg (max 1 mg)", "0.14 mg = 1.4 mL"],
["Shock", "4 J/kg (ERC)", "56 J (use the nearest setting)"],
["Amiodarone (50 mg/mL)", "5 mg/kg (max 300 mg)", "70 mg = 1.4 mL"],
["Fluid bolus", "10 mL/kg", "140 mL"],
["10% glucose", "2 mL/kg (0.2 g/kg)", "28 mL"]])}
` },

{ id: "manage", title: "Management", html: `
<h3>Paediatric life support sequence</h3>
${tbl(["Rhythm", "Actions (2-minute cycles)"], [
["<b>Asystole / PEA (most common)</b>", "CPR with oxygen; IV or IO access; <b>adrenaline 10 mcg/kg as soon as possible</b>, then every 3–5 min; treat the 4 Hs and 4 Ts; check rhythm every 2 min"],
["<b>VF / pulseless VT</b>", "Shock <b>4 J/kg</b> → CPR 2 min → shock → CPR → shock; after the 3rd shock <b>adrenaline 10 mcg/kg</b> and <b>amiodarone 5 mg/kg</b>; adrenaline again after the 5th shock and every 3–5 min; amiodarone 5 mg/kg (max 150 mg) after the 5th shock. Refractory: up to 8 J/kg (max 360 J)"]])}
<p>Access: intraosseous access is quick and safe in children if an IV is not obtained quickly. Airway: bag-mask with oxygen is enough for most; a cuffed tracheal tube is used by skilled staff (size from the calculator). Pads: use paediatric pads where available; place them antero-posterior (front and back) if they would touch on a small chest.</p>
<h3>Choking</h3>
${tbl(["Step", "Infant (under 1 year)", "Child (over 1 year)"], [
["Effective cough", "Let the infant cough; watch closely", "Encourage coughing"],
["Ineffective cough, conscious", "Head down, face down along your forearm: <b>up to 5 back blows</b> between the shoulder blades", "Lean the child forward: <b>up to 5 back blows</b>"],
["Then", "Turn face up, head down: <b>up to 5 chest thrusts</b> using the two-thumb encircling grip on the lower sternum (ERC 2025), sharper and slower than CPR compressions", "<b>Up to 5 abdominal thrusts</b> (fist between navel and xiphoid, inwards and upwards)"],
["Repeat", "Alternate 5 and 5; call 112 as soon as possible", "Alternate 5 and 5; call 112"],
["Never", "Abdominal thrusts in infants (liver injury); blind finger sweeps", "Blind finger sweeps"],
["Unconscious", "Call for help, 5 rescue breaths, then CPR (compressions also help dislodge the object); look in the mouth before each set of breaths and remove a visible object", "Same"]])}
<p>Sources: ERC 2025 Paediatric Life Support and AHA 2025 Part 6 agree on these sequences.${r(1, 2)}</p>
<h3>After ROSC</h3>
<div class="calc" data-calc="postrosc"></div>
<ul>
<li><b>Oxygen:</b> titrate FiO₂ to SpO₂ 94–98% (ERC 2025); avoid both hypoxia and very high oxygen.</li>
<li><b>Ventilation:</b> aim for normal CO₂; avoid hyperventilation and hypoventilation.</li>
<li><b>Circulation:</b> keep blood pressure normal for age; fluid boluses 10 mL/kg and an adrenaline or noradrenaline infusion as needed; echo.</li>
<li><b>Temperature:</b> prevent fever. Active cooling to 32–34 °C is used only in a PICU.</li>
<li><b>Glucose and electrolytes:</b> treat hypoglycaemia and hypokalaemia; check calcium and magnesium.</li>
<li><b>Seizures:</b> treat; EEG if available.</li>
<li><b>Prognosis:</b> ERC 2025 — withhold prognostication for at least 72 hours in comatose children.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML 2025)", "Dose", "When / notes"], [
[dr("adrenaline_arrest", "Adrenaline 1 mg/mL (dilute to 0.1 mg/mL)"), "10 mcg/kg = 0.1 mL/kg of 0.1 mg/mL, max 1 mg", "Non-shockable: at once. Shockable: after the 3rd shock (ERC). Then every 3–5 min"],
[dr("amiodarone_iv", "Amiodarone 50 mg/mL"), "5 mg/kg (max 300 mg); repeat 5 mg/kg (max 150 mg)", "After the 3rd and 5th shocks"],
[dr("lidocaine_iv", "Lignocaine 2% plain"), "1 mg/kg", "If amiodarone is unavailable"],
[dr("atropine", "Atropine 0.6 mg/mL"), "0.02 mg/kg (min 0.1, max 0.5 mg)", "Bradycardia from vagal tone or heart block, not arrest"],
[dr("dextrose", "Dextrose 10%"), "2 mL/kg (0.2 g/kg)", "Hypoglycaemia (ERC 2025)"],
["Fluid (saline or balanced crystalloid)", "10 mL/kg bolus, repeat with reassessment", "Hypovolaemic, distributive or obstructive shock (ERC 2025)"],
[dr("calcium_gluconate", "Calcium gluconate 10%"), "Only for hyperkalaemia, hypocalcaemia or calcium-channel-blocker toxicity — dose by the specific guideline", "Not routine"]])}
` },

{ id: "populations", title: "Infants and newborns", html: `
<ul>
<li><b>Newborns at birth</b> follow the newborn resuscitation algorithm (3:1 compressions to breaths, ventilation first) — see Newborn Resuscitation & Birth Asphyxia.</li>
<li><b>Infants</b>: neutral head position; mouth-over-mouth-and-nose breaths; two-thumb encircling compressions; no abdominal thrusts for choking.</li>
<li><b>Adolescents</b> (after puberty): use adult BLS and ALS (30:2, adult doses, adult energies).</li>
<li><b>Children with medical complexity</b> (tracheostomy, shunt, congenital heart disease): ask the family for the care plan and the usual oxygen saturation.</li>
</ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["No paediatric pads", "Adult pads antero-posterior (front and back) so they do not touch", "Prevents arcing"],
["Only an adult AED", "Use it; a paediatric attenuator is preferred if available; never withhold a shock", "VF needs a shock"],
["No IV after 2 attempts", "Intraosseous needle in the proximal tibia", "Fast, reliable access"],
["Parents present", "Let them stay with a staff member to explain", "Most families value being present"],
["When to stop", "Senior decision after correcting reversible causes; longer in drowning in cold water and in poisoning", "Hypothermia and toxins can allow survival after long CPR"],
["Choking toddler becomes floppy", "Lower to the floor, 5 breaths, start CPR, look in the mouth", "Compressions can dislodge the object"]])}
` },

{ id: "complications", title: "Complications and outcome", html: `
<p>Hypoxic–ischaemic brain injury is the main cause of death and disability after ROSC. Other complications are myocardial dysfunction (usually recovering over days), acute kidney injury, liver injury, aspiration pneumonia and coagulopathy. Rib fractures from CPR are rare in children. Neurological outcome cannot be predicted reliably in the first 72 hours.</p>
` },

{ id: "followup", title: "Follow-up and support", html: `
${box("green", "For survivors and families", `<ul><li>Neurodevelopmental follow-up at discharge, 3 months and 1 year; physiotherapy and school support.</li><li>Find and treat the cause (cardiac evaluation for unexplained arrest; long QT screening in the family).</li><li>Bereavement support if the child dies; explain what happened with honesty and warmth.</li></ul>`)}
${box("blue", "Prevention", `<ul><li>Teach parents infant CPR and choking first aid before discharge from the newborn unit.</li><li>Fence or cover water tanks, channels and ponds; supervise children near rivers.</li><li>Keep coins, batteries, nuts and small toys away from under-fives.</li><li>Recognise and escalate the sick child early (tiring, grey, slowing heart rate, falling consciousness).</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Ventricular fibrillation", src: "images/vf-ecg.jpg", mod: "ECG", ctx: "Shockable arrest rhythm (less common in children than asystole or PEA)", loc: "Rhythm strip", find: "Chaotic waveform with no QRS complexes", interp: "Shock 4 J/kg, then CPR 2 minutes", by: "Antoine Ayer (ecg-quiz.com)", page: "https://commons.wikimedia.org/wiki/File:Ventricular_fibrillation_(from_ecg-quiz.com).jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Paediatric cardiac arrest (ERC 2025 sequence)", [F.s("Unresponsive, not breathing normally"), F.a, F.e("5 rescue breaths; call 112; CPR 15:2 with oxygen"), F.a, F.d("Shockable?"), F.a, F.b([["Yes: VF/pVT", F.e("Shock 4 J/kg → CPR 2 min (×3)"), F.e("After 3rd shock: adrenaline 10 mcg/kg + amiodarone 5 mg/kg"), F.e("After 5th: adrenaline again, amiodarone 5 mg/kg (max 150 mg)")], ["No: asystole/PEA", F.e("Adrenaline 10 mcg/kg at once"), F.e("Every 3–5 min"), F.e("Treat 4 Hs and 4 Ts")]]), F.a, F.ok("ROSC → SpO₂ 94–98%, normal CO₂ and BP, glucose, no fever, PICU")])}
${F.chart("Choking", [F.d("Effective cough?"), F.a, F.b([["Yes", F.ok("Encourage coughing")], ["No", F.e("Up to 5 back blows"), F.e("Infant: up to 5 chest thrusts · Child: up to 5 abdominal thrusts"), F.e("Repeat; call 112")]]), F.a, F.d("Unconscious?"), F.a, F.e("5 rescue breaths → CPR; remove only a visible object")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Compressions without breaths", "Most child arrests are hypoxic", "Give breaths with oxygen; compression-only CPR only if unable or unwilling"],
["Undiluted 1 mg/mL adrenaline at 0.1 mL/kg", "Ten-fold overdose", "Dilute to 0.1 mg/mL, or give 0.01 mL/kg of 1 mg/mL — say the dose in mg aloud"],
["Abdominal thrusts in an infant", "Liver and spleen injury", "Chest thrusts under 1 year"],
["Accepting slow heart rate in a hypoxic child", "Pre-arrest sign", "Ventilate; CPR if under 60/min with poor perfusion"],
["Hyperoxia and hyperventilation after ROSC", "Worsens brain injury", "SpO₂ 94–98%, normal CO₂"],
["Prognosis on day 1", "Unreliable", "Wait at least 72 hours"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the compression-to-ventilation ratio for a child with two health workers?", "15:2 (30:2 for a single or untrained rescuer).")}
${qa("Student", "How do you relieve choking in a conscious infant who cannot cough?", "Up to 5 back blows, then up to 5 chest thrusts, repeated. Never abdominal thrusts under 1 year; never blind finger sweeps.")}
${qa("Intern/MO", "Give the adrenaline dose and volume for a 20 kg child in arrest.", "10 mcg/kg = 0.2 mg = 2 mL of 0.1 mg/mL (1 mL of 1 mg/mL diluted to 10 mL), every 3–5 minutes.")}
${qa("Intern/MO", "What shock energy and antiarrhythmic dose would you use in VF for a 20 kg child?", "ERC: 4 J/kg = 80 J each shock; amiodarone 5 mg/kg = 100 mg after the 3rd shock and again (max 150 mg) after the 5th.")}
${qa("Specialist", "How do ERC and AHA 2025 differ on the start of paediatric CPR and on shock energy?", "ERC starts with 5 rescue breaths and uses 4 J/kg for every shock; AHA starts with compressions (C-A-B) and uses 2 J/kg then 4 J/kg, up to 10 J/kg or the adult dose.")}
${qa("Specialist", "When can neurological prognosis be discussed after paediatric arrest?", "ERC 2025 advises withholding prognostication for at least 72 hours in comatose children, using several tests together.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Djakow J, et al. European Resuscitation Council Guidelines 2025 Paediatric Life Support. Resuscitation 2025;215 Suppl 1:110767. <a href="https://doi.org/10.1016/j.resuscitation.2025.110767" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110767</a>; RCUK summary: <a href="https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines" target="_blank" rel="noopener">resus.org.uk</a></li>
<li id="ref-2">Joyner BL, et al. Part 6: Pediatric Basic Life Support. 2025 American Heart Association and American Academy of Pediatrics Guidelines for CPR and ECC. Circulation 2025;152(16 Suppl 2). <a href="https://doi.org/10.1161/CIR.0000000000001370" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001370</a></li>
<li id="ref-3">Lasa JJ, et al. Part 8: Pediatric Advanced Life Support. 2025 American Heart Association and American Academy of Pediatrics Guidelines for CPR and ECC. Circulation 2025;152(16 Suppl 2). <a href="https://doi.org/10.1161/CIR.0000000000001368" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001368</a></li>
<li id="ref-4">Topjian AA, Raymond TT, Atkins D, et al. Part 4: Pediatric basic and advanced life support: 2020 AHA guidelines for CPR and ECC. Circulation 2020;142(16 Suppl 2):S469–S523. <a href="https://doi.org/10.1161/CIR.0000000000000901" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000000901</a> (basis of the Bhutan STG algorithm)</li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.2 Choking and §1.3 Cardiac arrest algorithm; National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["ERC 2025 Paediatric Life Support", "<span class='pass'>Read directly</span>", "Doses, energies, choking, ventilation rates, 72-hour prognosis (RCUK page)"],
["AHA 2025 Parts 6 and 8", "<span class='pass'>Read directly</span>", "Recommendation tables and the accessible paediatric cardiac arrest and bradycardia algorithms"],
["Bhutan STG 2024 §1.2–1.3, NEML 2025", "<span class='pass'>Used</span>", "STG algorithm is AHA 2020-based"],
["Guideline differences", "<span class='pass'>Tabled</span>", "Start of CPR, ratio, energy, adrenaline timing, amiodarone doses"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculators", "<span class='pass'>Tested</span>", "arrestchild (both energy schedules), postrosc"],
["Post-ROSC blood pressure and temperature thresholds in children", "<span class='flag'>Summary only</span>", "ERC paediatric post-ROSC figures for BP and fever duration were not read verbatim; stated in general terms"]], "qc")}` }
]
});
