/* Cardiac arrest and choking in adults — full depth (Batch E-1, 26 Nov 2026).
   Sources read directly: Bhutan STG 2024 §1.2–1.3 (text; the algorithm figure is not readable in the PDF text layer) and the Bhutan Clinical
   Reference topic "Cardiac arrest (BLS and ACLS)"; AHA 2025 Parts 7, 9 and 11 (recommendation tables and the accessible adult cardiac arrest
   algorithm); ERC/RCUK 2025 Adult BLS, Adult ALS, First Aid (choking) and ERC–ESICM 2025 Post-resuscitation care; Bhutan NEML 2025. */
registerPage({
id: "arrest-adult",
title: "Cardiac Arrest & Choking — Adults",
subtitle: "From the first ten seconds to the first six hours: recognise arrest, push hard and fast, shock early, give the right drug at the right time, relieve a choking airway, and care for the patient who comes back. ERC 2025, AHA 2025 and the Bhutan STG side by side",
age: "Adults", specs: ["emerg", "cardio", "medicine"],
keywords: ["cardiac arrest", "CPR", "BLS", "ACLS", "ALS", "resuscitation", "defibrillation", "VF", "ventricular fibrillation", "pulseless VT", "asystole", "PEA", "adrenaline", "epinephrine", "amiodarone", "lidocaine", "ROSC", "post-cardiac arrest care", "choking", "foreign body airway obstruction", "Heimlich", "abdominal thrusts", "back blows", "4 Hs 4 Ts", "AED", "drowning", "collapse"],
related: ["postarrest-child", "acs-adult", "af-adult", "potassium-adult", "anaphylaxis-adult", "shock-adult", "vte-adult", "poisoning-adult", "trauma-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In cardiac arrest the brain starts to die within minutes, and every minute without CPR or a shock costs survival. Two things save most patients: <b>good chest compressions that are rarely interrupted</b>, and <b>early defibrillation</b> when the rhythm is shockable. Drugs and airways come second.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Unresponsive and not breathing normally (gasping counts as not breathing). Health workers feel for a carotid pulse for <b>no more than 10 seconds</b>.</p></div>
<div><h4>Call and compress</h4><p>Shout for help, call <b>112</b>, get the defibrillator. Compress the centre of the chest <b>5–6 cm deep, 100–120 a minute</b>, 30 compressions to 2 breaths.</p></div>
<div><h4>Shock early</h4><p>Attach pads. VF or pulseless VT: <b>shock</b>, then straight back to CPR for 2 minutes without checking the pulse.</p></div>
<div><h4>Adrenaline</h4><p>${dr("adrenaline_arrest", "Adrenaline 1 mg IV/IO")} every 3–5 min: <b>at once</b> in asystole/PEA; <b>after the 3rd shock</b> in VF/pVT (ERC; AHA gives it after the 2nd).</p></div>
<div><h4>Antiarrhythmic</h4><p>${dr("amiodarone_iv", "Amiodarone 300 mg")} after the 3rd shock, 150 mg after the 5th; or ${dr("lidocaine_iv", "lidocaine")}.</p></div>
<div><h4>Choking</h4><p>Can cough: encourage coughing. Cannot: <b>5 back blows, then 5 abdominal thrusts</b>, repeated. Unconscious: start CPR.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §1.3 says: no palpable carotid or femoral pulse means cardiac arrest, so start CPR at once. Follow the <b>basic life support</b> algorithm outside hospital or where the drugs are not available, and the <b>advanced</b> algorithm in hospital. The STG algorithm is based on AHA 2020. This page uses the 2025 updates from ERC and AHA, which change little. Adrenaline 1 mg/mL reaches BHU level. Amiodarone 50 mg/mL (150 mg in 3 mL), lignocaine 2%, atropine, calcium gluconate 10%, magnesium sulphate 50% and sodium bicarbonate 7.5% are on the NEML 2025. The emergency number is <b>112</b>. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions and why it matters", html: `
${tbl(["Term", "Meaning"], [
["Cardiac arrest", "Sudden loss of effective heart pumping: unresponsive, no normal breathing, no central pulse"],
["Shockable rhythms", "<b>Ventricular fibrillation (VF)</b> and <b>pulseless ventricular tachycardia (pVT)</b>: the heart is electrically chaotic and a shock can reset it"],
["Non-shockable rhythms", "<b>Asystole</b> (flat line) and <b>pulseless electrical activity (PEA)</b> (an organised rhythm with no output). A shock does not help; find and fix the cause"],
["ROSC", "Return of spontaneous circulation: a palpable pulse, rising ETCO₂, signs of life"],
["OHCA / IHCA", "Out-of-hospital and in-hospital cardiac arrest"],
["Choking (FBAO)", "Foreign body airway obstruction. Mild: can cough, speak and breathe. Severe: weak or no cough, cannot speak, cyanosis, then collapse"]])}
<p>Outcomes depend on the chain of survival: early recognition and call, early CPR, early defibrillation, good advanced care and good post-arrest care. In the United States about 1 in 10 people survive an out-of-hospital arrest treated by EMS. About a quarter of in-hospital arrests survive to discharge, most with good neurological function (AHA 2025).${r(2)} Survival is much higher when a bystander starts CPR and a shock is given within a few minutes.</p>
` },

{ id: "patho", title: "What happens in arrest", html: `
${F.chart("Why minutes matter", [
F.s("Pumping stops"), F.a, F.s("Brain oxygen falls: unconscious within seconds, gasping, then apnoea"), F.a,
F.b([["Shockable", F.e("VF: chaotic, energy-hungry myocardium. Every minute it becomes harder to shock; CPR keeps it 'shockable'")], ["Non-shockable", F.e("PEA/asystole: usually a secondary cause (hypoxia, bleeding, PE, tamponade, potassium, toxins)")]]), F.a,
F.s("Good CPR gives only a fraction of normal cardiac output: enough to buy time, not enough to fix the problem"), F.a,
F.ok("Shock (VF/pVT) or fix the cause (PEA/asystole) restores circulation")])}
<p>Compressions work by squeezing the heart and raising intrathoracic pressure. Coronary perfusion builds up slowly with each compression and falls at once when compressions stop. That is why <b>pauses before and after a shock must be as short as possible</b> (ERC aims for under 5 seconds), and why the pulse is not checked straight after a shock.</p>
<p>Adrenaline raises aortic diastolic pressure, and so coronary and cerebral perfusion. It clearly increases ROSC and survival to admission. Its benefit for good neurological survival is smaller (AHA 2025 synopsis).${r(2)}</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Point", "ERC / RCUK 2025", "AHA 2025", "This guide follows"], [
["Adrenaline timing in VF/pVT", "After the <b>3rd shock</b>", "After initial shocks fail; the algorithm places it after the <b>2nd shock</b>", "ERC (3rd shock). This matches the Bhutan Clinical Reference protocol and keeps amiodarone and adrenaline together. Either is acceptable"],
["First biphasic shock", "At least 150 J (pulsed biphasic 130–150 J); escalate if possible", "Manufacturer dose (e.g. 120–200 J), or the maximum if unknown; monophasic 360 J", "Know your machine. If unsure, use the highest setting"],
["Lidocaine dose", "100 mg, then 50 mg", "1–1.5 mg/kg, then 0.5–0.75 mg/kg", "Either; about the same for a 65–70 kg adult"],
["Post-ROSC oxygen", "SpO₂ 94–98%", "SpO₂ 90–98% (PaO₂ 60–105 mmHg)", "94–98%, which sits inside both ranges"],
["Post-ROSC blood pressure", "Systolic > 100 or MAP > 60–65 mmHg", "MAP ≥ 65 mmHg", "MAP ≥ 65 mmHg"],
["Temperature after ROSC", "Prevent fever (≤ 37.5 °C) for 36–72 h; do not actively warm mild hypothermia", "Temperature control 32–37.5 °C for at least 36 h", "Prevent fever for at least 72 h where possible; active cooling only in ICU"],
["Choking", "Up to 5 back blows, then up to 5 abdominal thrusts, alternate", "5 back blows then 5 abdominal thrusts, repeated (new in AHA 2025, matching ERC)", "The same sequence. Both bodies now agree"],
["Double sequential shock", "Not recommended routinely (RCUK)", "Usefulness not established (2b)", "Not routine. Try a vector change (antero-posterior pads) first"]])}
${box("bt", "Bhutan adaptation", `<p>Most district hospitals have a manual biphasic defibrillator but no ETCO₂ monitor, and many health centres have no defibrillator. Where there is no defibrillator, good CPR plus early adrenaline and a search for causes is still worth doing, and survival depends on getting a shock. Where waveform capnography is missing, confirm tube placement clinically and with the oesophageal detector or colorimetric device if available. ${LB.loc()}</p>`)}
` },

{ id: "presentation", title: "Recognition: the first 10 seconds", html: `
${tbl(["Step", "What to do", "Why"], [
["Safe?", "Check for danger (traffic, electricity, water, fire) before touching the patient", "Two victims help nobody"],
["Response", "Shake the shoulders and shout", "Unresponsive patients need help now"],
["Breathing", "Open the airway (head tilt–chin lift; jaw thrust if trauma) and look for normal breathing", "Gasping or noisy, slow breaths are a sign of arrest, not of life"],
["Pulse (health workers)", "Carotid pulse at the same time as the breathing check, <b>no more than 10 seconds</b>; if not definitely felt, start CPR", "Pulse checks are unreliable and delay compressions"],
["Call", "112 and the hospital team; ask someone to bring the defibrillator or AED", "ERC 2025: call for any unresponsive person — you do not need to be sure about the breathing first"]])}
<p>Warning: in the first minutes, especially in fit young people, breathing can look almost normal or panting (ERC 2025). Seizure-like jerks at collapse are common in arrest. If in doubt, start compressions. CPR on a person whose heart is beating rarely causes serious harm.${r(3)}</p>
` },

{ id: "ddx", title: "Reversible causes: the 4 Hs and 4 Ts", html: `
${tbl(["Cause", "Clues", "Treat during CPR"], [
["<b>Hypoxia</b>", "Choking, drowning, asthma, hanging, opioid overdose", "Airway, 100% oxygen, ventilate; naloxone if opioid"],
["<b>Hypovolaemia</b>", "Trauma, GI bleed, ectopic pregnancy, PPH, dengue shock", "Stop the bleeding, warmed fluids or blood, tranexamic acid in trauma (see Major trauma)"],
["<b>Hypo/hyperkalaemia, metabolic</b>", "Kidney failure, missed dialysis, diuretics, DKA, peaked T waves before arrest", `Hyperkalaemic arrest (ERC 2025): 10% calcium chloride 10 mL IV, or ${dr("calcium_gluconate", "calcium gluconate 10%")} 30 mL, plus sodium bicarbonate 50 mmol IV (separate line or flush between); then insulin 10 units with 25 g glucose`],
["<b>Hypothermia</b>", "Cold exposure at altitude, drowning in rivers, elderly found down", "Rewarm; prolonged CPR. ERC 2025: if VF persists after 3 shocks, delay further shocks until core temperature is above 30 °C; withhold adrenaline below 30 °C; adrenaline every 6–10 min at 30–35 °C"],
["<b>Thrombosis — coronary</b>", "Chest pain before collapse, VF, ST elevation after ROSC", "Shock; emergency angiography after ROSC"],
["<b>Thrombosis — pulmonary</b>", "Sudden collapse after surgery, immobility, pregnancy; PEA", "Thrombolysis when PE is the suspected cause; in selected patients continue CPR for 60–90 min after it (ERC 2025)"],
["<b>Tension pneumothorax</b>", "Trauma, ventilated patient, absent breath sounds", "Finger thoracostomy or needle decompression"],
["<b>Tamponade</b>", "Stab wound to chest, after cardiac surgery, TB pericarditis", "Pericardiocentesis or thoracotomy"],
["<b>Toxins</b>", "Organophosphates, aconite (Tshendu), tricyclics, beta-blockers, calcium-channel blockers, local anaesthetics", "Specific antidotes; prolonged CPR (see Poisoning)"]])}
<p>Point-of-care ultrasound by an experienced operator can show tamponade, a dilated right ventricle or absent cardiac motion, but only if it does not interrupt compressions (AHA 2025, 2b).${r(2)}</p>
` },

{ id: "invest", title: "Monitoring during CPR", html: `
${tbl(["Tool", "Use", "Caution"], [
["Defibrillator / monitor", "Rhythm check every 2 minutes; pads on as soon as possible", "Do not stop compressions to attach pads"],
["Waveform capnography (ETCO₂)", "Confirms tube placement; reflects CPR quality; a sudden rise may mean ROSC", "Do not stop compressions for a rising ETCO₂ alone; do not use a low ETCO₂ alone to stop resuscitation (ERC). AHA: ETCO₂ under 10 mmHg after 20 min of ALS in an intubated patient is one factor in stopping, never the only one"],
["Blood gas, potassium, glucose", "Find hyperkalaemia, acidosis, hypoglycaemia", "Venous or arterial sample; point-of-care if available"],
["Ultrasound", "Tamponade, hypovolaemia, PE signs, cardiac standstill", "Only during the rhythm-check pause, under 10 s"],
["Invasive arterial line (in ICU)", "ERC: aim for diastolic BP ≥ 30 mmHg and ETCO₂ ≥ 25 mmHg", "Not needed for most resuscitations"]])}
` },

{ id: "staging", title: "High-quality CPR: the numbers", html: `
${tbl(["Item", "Target (ERC and AHA 2025 agree unless stated)"], [
["Compression rate", "100–120 per minute"],
["Depth", "At least 5 cm but not more than 6 cm, on the lower half of the sternum"],
["Recoil", "Let the chest come fully back up; do not lean"],
["Ratio without an advanced airway", "30 compressions : 2 breaths, each breath over 1 second, just enough to make the chest rise"],
["With a tracheal tube or supraglottic airway", "Continuous compressions, 10 breaths per minute (1 every 6 seconds)"],
["Pauses", "As short as possible: ERC aims for under 5 seconds around a shock; pulse/rhythm check no more than 10 seconds"],
["Compressor change", "About every 2 minutes"],
["Respiratory arrest with a pulse", "1 breath every 6 seconds (10 per minute), check pulse every 2 minutes"],
["Surface", "Firm surface; a hospital bed with a CPR mattress setting, or move to the floor if safe"]])}
` },

{ id: "manage", title: "Management: BLS and ALS step by step", html: `
<h3>Basic life support (any health worker, any place)</h3>
<ol>
<li>Danger, response, call 112 and get the AED or defibrillator.</li>
<li>Start compressions at once: 30 compressions, then 2 breaths with a pocket mask or bag-valve-mask and oxygen.</li>
<li>Attach the AED as soon as it arrives. Follow its prompts: shock if advised, then resume CPR immediately for 2 minutes.</li>
<li>Continue until the patient shows signs of life, the ALS team takes over, or it is decided to stop.</li>
</ol>
<h3>Advanced life support</h3>
${tbl(["Rhythm", "Actions (repeat in 2-minute cycles)"], [
["<b>VF / pulseless VT</b>", "1. Shock (biphasic at least 150 J, ERC; or manufacturer dose, AHA).<br>2. CPR 2 min at once; IV access (IO if IV fails twice).<br>3. Rhythm check → shock again if still VF/pVT.<br>4. After the 3rd shock: <b>adrenaline 1 mg</b> and <b>amiodarone 300 mg</b>.<br>5. Adrenaline every 3–5 min (every second cycle); amiodarone <b>150 mg</b> after the 5th shock.<br>6. Refractory VF: check pads, try antero-posterior placement, treat causes."],
["<b>Asystole / PEA</b>", "1. CPR 2 min; IV/IO access.<br>2. <b>Adrenaline 1 mg as soon as possible</b>, then every 3–5 min.<br>3. Rhythm check every 2 min; if VF/pVT appears, go to the shockable pathway.<br>4. Look hard for the 4 Hs and 4 Ts."],
["<b>Witnessed, monitored VF</b> (e.g. coronary unit)", "ERC: up to 3 quick successive shocks may be given; they count as the first shock for drug timing"]])}
<div class="calc" data-calc="arrestadult"></div>
<h3>Airway</h3>
<p>Start with a bag-valve-mask and oxygen, with an oropharyngeal airway if needed. A supraglottic airway is a good choice if intubation skills are rare. Intubate only if skilled (ERC asks for over 95% success within two attempts) and with a compression pause under 5 seconds. Confirm a tracheal tube with waveform capnography where available. Do not delay CPR or shocks for the airway (AHA 2025: defer if insertion would interrupt compressions).${r(1, 2)}</p>
<h3>Choking in a conscious adult</h3>
<ol>
<li><b>Mild</b> (can cough, speak, breathe): encourage coughing and watch closely.</li>
<li><b>Severe</b> (weak or no cough, cannot speak or breathe): give <b>up to 5 back blows</b> between the shoulder blades with the heel of the hand, the person leaning forward.</li>
<li>If back blows fail, give <b>up to 5 abdominal thrusts</b>: stand behind, fist just above the navel, pull sharply inwards and upwards.</li>
<li>Keep alternating 5 back blows and 5 abdominal thrusts until the object comes out or the person becomes unresponsive. Call 112 if not relieved.</li>
<li>Late pregnancy, or you cannot reach around the abdomen: use <b>chest thrusts</b> instead of abdominal thrusts (AHA 2025).</li>
<li>If the person <b>becomes unresponsive</b>: lower them to the ground, call 112, and <b>start CPR with compressions</b>. Compressions help push the object out. Each time you open the airway, remove a visible object, but <b>never do blind finger sweeps</b>.</li>
<li>Everyone who needed abdominal thrusts should be examined by a doctor afterwards for internal injury.${r(5, 7)}</li>
</ol>
` },

{ id: "drugs", title: "Medicines in cardiac arrest", html: `
${tbl(["Medicine (NEML 2025)", "Dose", "When", "Notes"], [
[dr("adrenaline_arrest", "Adrenaline 1 mg/mL"), "<b>1 mg IV/IO</b>", "Non-shockable: at once. Shockable: after the 3rd shock (ERC). Then every 3–5 min", "High-dose adrenaline and vasopressin bring no benefit (AHA 2025)"],
[dr("amiodarone_iv", "Amiodarone 50 mg/mL (3 mL)"), "<b>300 mg</b>, then <b>150 mg</b>", "After the 3rd shock; second dose after the 5th", "300 mg = 2 Bhutan ampoules (6 mL); flush well"],
[dr("lidocaine_iv", "Lignocaine 2% plain"), "100 mg then 50 mg (ERC); 1–1.5 mg/kg then 0.5–0.75 mg/kg (AHA)", "Instead of amiodarone", "Never the adrenaline-containing product"],
[dr("calcium_gluconate", "Calcium gluconate 10%"), "30 mL IV (or calcium chloride 10% 10 mL)", "Only for hyperkalaemia, hypocalcaemia or calcium-channel-blocker overdose", "Not routine (both guidelines)"],
[dr("sodium_bicarbonate", "Sodium bicarbonate 7.5%"), "50 mmol IV (7.5% has about 0.89 mmol/mL, so about 56 mL)", "Hyperkalaemic arrest (ERC 2025), tricyclic overdose", "Not routine"],
[dr("magnesium_sulfate", "Magnesium sulphate 50%"), "2 g IV (4 mL of 50%, diluted)", "Torsades de pointes, hypomagnesaemia", "Not routine (AHA 2025: no benefit routinely)"],
[dr("naloxone", "Naloxone 0.4 mg/mL"), "0.4 mg IV/IM, repeat", "Suspected opioid overdose with a pulse; in arrest it does not replace CPR", "Opioid use exists in Bhutan"]])}
${box("red", "Do not", `<ul><li>Do not give calcium, bicarbonate, magnesium or steroids routinely: none improves survival (AHA 2025: no benefit; ERC 2025: not routine).</li><li>Do not give drugs down the tracheal tube (AHA 2025 removed this).</li><li>Do not stop CPR to give drugs.</li></ul>`)}
` },

{ id: "populations", title: "Special situations", html: `
<p>From the ERC 2025 special-circumstances guideline${r(10)} and AHA 2025 Part 10${r(8)}.</p>
${tbl(["Group", "What changes"], [
["<b>Pregnancy (over 20 weeks)</b>", "Manual left uterine displacement throughout CPR (preferred to tilt); early airway; IV access above the diaphragm; usual drugs and shocks. Prepare early for resuscitative hysterotomy (perimortem caesarean), done as soon as possible at the site of arrest by a skilled team (ERC 2025). The long-taught 4-minute decision point is not stated in ERC 2025, but delay worsens outcomes for mother and baby"],
["<b>Drowning</b>", "Start with 5 ventilations with 100% oxygen if available (ERC 2025), then standard CPR; hypoxia is the cause, so ventilation matters most; use low ventilation pressures to avoid stomach inflation"],
["<b>Hypothermia</b>", "Check vital signs for up to 1 minute; rewarm; prolonged CPR. ERC 2025: after 3 shocks, delay further shocks until core temperature is above 30 °C; withhold adrenaline below 30 °C; give it every 6–10 min at 30–35 °C. Nobody is dead until warm and dead"],
["<b>Trauma</b>", "Correct reversible causes early and aggressively: control bleeding, manage the airway, decompress the chest, restore volume. Continue compressions unless they delay or prevent these steps (ERC 2025). See Major trauma"],
["<b>Electrocution and lightning</b>", "Switch off the power first; prolonged CPR; lightning victims who look dead often survive with immediate CPR"],
["<b>Older and frail patients</b>", "Discuss resuscitation wishes and do-not-attempt-CPR decisions in advance, kindly and early"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["No defibrillator at the health centre", "High-quality CPR, call 112, adrenaline for non-shockable arrest, look for causes; arrange the nearest shock", "Survival from VF without a shock is very low"],
["VF keeps returning after 3 or more shocks", "Check pads and contact, move to antero-posterior pads, amiodarone, treat ischaemia and potassium", "Vector change is the first step; double sequential shocks are unproven"],
["PEA in a young woman with abdominal pain", "Think ruptured ectopic: fluids, blood, urgent surgery", "Hypovolaemia is reversible"],
["Relatives ask to continue for an hour", "Explain kindly what CPR can and cannot do; involve them; decide as a team", "Shared, humane decisions"],
["Choking person stops breathing in a restaurant", "Lower to the floor, call 112, start compressions; look in the mouth before breaths", "Compressions generate airway pressure"],
["ROSC but GCS 3 at 1 hour", "Do not predict outcome yet; full post-arrest care; reassess at 72 hours or later", "Early prognosis is unreliable (sedatives, cooling)"]])}
` },

{ id: "complications", title: "After ROSC: complications and prognosis", html: `
<p>The post-cardiac-arrest syndrome combines <b>brain injury</b>, <b>myocardial dysfunction</b> (often recovering over 2–3 days), a <b>systemic inflammatory response</b> like sepsis, and the <b>cause</b> of the arrest. Re-arrest is common in the first hour. CPR injuries include rib and sternal fractures, liver or spleen tears and aspiration pneumonia.</p>
${tbl(["Target after ROSC", "ERC–ESICM 2025", "AHA 2025"], [
["Oxygen", "SpO₂ 94–98% (PaO₂ 75–100 mmHg); avoid PaO₂ < 60", "100% O₂ until SpO₂ is reliable, then SpO₂ 90–98% (PaO₂ 60–105)"],
["Carbon dioxide", "PaCO₂ 35–45 mmHg (normocapnia)", "PaCO₂ 35–45 mmHg"],
["Blood pressure", "Systolic > 100 or MAP > 60–65 mmHg", "MAP ≥ 65 mmHg"],
["Temperature", "Prevent fever (≤ 37.5 °C) for 36–72 h in comatose patients", "Deliberate temperature control 32–37.5 °C for at least 36 h if not following commands"],
["Glucose", "Standard protocols", "Avoid hypo- and hyperglycaemia"],
["Coronary angiography", "Emergency if persistent ST elevation", "Emergency if ST elevation, regardless of coma; before discharge if cardiac cause suspected"],
["Seizures", "Treat (levetiracetam or valproate first line); no prophylaxis", "Treat clinical and electrographic seizures"],
["Prognosis", "Multimodal, at 72 h or later after ROSC", "Multimodal, delayed until sedation and early changes have cleared"]])}
` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "For survivors", `<ul><li>Find and treat the cause: coronary angiography, echocardiogram, potassium and drug review; an implantable defibrillator where indicated (referral abroad may be needed).</li><li>Screen for memory, mood, fatigue and post-traumatic stress; plan rehabilitation; involve the family (AHA 2025 survivorship).</li><li>Driving and work: advise rest until reviewed by a specialist.</li></ul>`)}
${box("blue", "For the community", `<ul><li>Teach hands-only CPR in schools, monasteries and offices; place AEDs where people gather.</li><li>Teach choking first aid to parents and restaurant staff.</li><li>Debrief the team after every resuscitation: what went well, what to improve.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Ventricular fibrillation", src: "images/vf-ecg.jpg", mod: "ECG", ctx: "Cardiac arrest, shockable rhythm", loc: "Rhythm strip", find: "Chaotic, irregular deflections with no recognisable QRS complexes", interp: "VF: shock immediately, then resume CPR for 2 minutes", by: "Antoine Ayer (ecg-quiz.com)", page: "https://commons.wikimedia.org/wiki/File:Ventricular_fibrillation_(from_ecg-quiz.com).jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Chest compressions", src: "images/cpr-adult.jpg", mod: "Photograph", ctx: "Basic life support", loc: "Centre of the chest", find: "Heel of the hand on the lower half of the sternum, arms straight, shoulders over the hands", interp: "Push 5–6 cm deep at 100–120 a minute and let the chest recoil fully", by: "US Army Corps of Engineers, Illinois Waterway Visitor Center", page: "https://commons.wikimedia.org/wiki/File:Cardiopulmonary_Resuscitation_Adult.jpg", lic: "Public domain" })}
${fig({ title: "Abdominal thrusts for choking", src: "images/abdominal-thrusts.jpg", mod: "Photograph", ctx: "Severe foreign body airway obstruction, conscious adult", loc: "Upper abdomen", find: "Rescuer behind the patient, fist just above the navel, pulling inwards and upwards", interp: "Use after up to 5 back blows fail; alternate 5 and 5", by: "US Army Medical Department Center and School", page: "https://commons.wikimedia.org/wiki/File:Abdominal_thrusts_against_choking.jpg", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult cardiac arrest (ERC 2025 sequence)", [F.s("Unresponsive, not breathing normally, no pulse in 10 s"), F.a, F.e("Call 112 / team; CPR 30:2; attach defibrillator"), F.a, F.d("Shockable?"), F.a, F.b([["Yes: VF/pVT", F.e("Shock → CPR 2 min → repeat"), F.e("After 3rd shock: adrenaline 1 mg + amiodarone 300 mg"), F.e("Adrenaline every 3–5 min; amiodarone 150 mg after 5th shock")], ["No: asystole/PEA", F.e("CPR 2 min; adrenaline 1 mg at once"), F.e("Adrenaline every 3–5 min"), F.e("Find and treat the 4 Hs and 4 Ts")]]), F.a, F.ok("ROSC → ABCDE, 12-lead ECG, SpO₂ 94–98%, MAP ≥ 65, prevent fever, find the cause")])}
${F.chart("Adult choking", [F.d("Effective cough?"), F.a, F.b([["Yes (mild)", F.ok("Encourage coughing; watch")], ["No (severe)", F.e("Up to 5 back blows"), F.e("Up to 5 abdominal thrusts (chest thrusts if pregnant or obese)"), F.e("Alternate until relieved; call 112")]]), F.a, F.d("Unresponsive?"), F.a, F.e("Lower to floor, call 112, start CPR (compressions first); remove visible object only")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Long pulse checks", "No perfusion while you search", "No more than 10 seconds, then compress"],
["Checking the pulse right after a shock", "Lost coronary pressure", "Resume CPR for 2 minutes after every shock"],
["Shallow or slow compressions", "Too little flow", "5–6 cm, 100–120/min; swap compressors every 2 min"],
["Over-ventilation", "Raises chest pressure and cuts venous return", "Each breath just enough to raise the chest; 10/min with an airway"],
["Stopping to intubate", "Long hands-off time", "Bag-mask or supraglottic airway first; intubate only if skilled"],
["Routine calcium or bicarbonate", "No benefit; may harm", "Use only for clear indications"],
["Blind finger sweep in choking", "Pushes the object deeper", "Remove only what you can see"],
["Declaring death in a cold patient", "Hypothermia protects the brain", "Rewarm first"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the rate, depth and ratio for adult CPR?", "100–120 compressions per minute, 5–6 cm deep, 30:2 without an advanced airway (continuous compressions with 10 breaths a minute once intubated or with a supraglottic airway).")}
${qa("Student", "What do you do for a conscious adult who is choking and cannot cough?", "Up to 5 back blows, then up to 5 abdominal thrusts, alternating until the object comes out or the person collapses; then CPR. Use chest thrusts in late pregnancy.")}
${qa("Intern/MO", "When do you give adrenaline and amiodarone in VF?", "ERC 2025: adrenaline 1 mg and amiodarone 300 mg after the 3rd shock; adrenaline every 3–5 min; amiodarone 150 mg after the 5th shock. AHA 2025 gives adrenaline after the 2nd shock.")}
${qa("Intern/MO", "Name four drugs that should not be given routinely in cardiac arrest.", "Calcium, sodium bicarbonate, magnesium and steroids. Each has specific indications (hyperkalaemia, tricyclic overdose, torsades).")}
${qa("Specialist", "VF persists after three shocks with good pad contact. What next?", "Change to antero-posterior pad placement (vector change); give amiodarone; treat ischaemia, potassium and other causes. Double sequential defibrillation is unproven (AHA 2b) and not routinely recommended (RCUK).")}
${qa("Specialist", "What are the post-ROSC oxygen, carbon dioxide and pressure targets?", "SpO₂ 94–98% (ERC; AHA 90–98%), PaCO₂ 35–45 mmHg, MAP at least 65 mmHg (ERC > 60–65 or systolic > 100), and fever prevention.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Soar J, et al. European Resuscitation Council Guidelines 2025 Adult Advanced Life Support. Resuscitation 2025;215 Suppl 1:110769. <a href="https://doi.org/10.1016/j.resuscitation.2025.110769" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110769</a>; RCUK summary: <a href="https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-advanced-life-support-guidelines" target="_blank" rel="noopener">resus.org.uk</a></li>
<li id="ref-2">Wigginton JG, et al. Part 9: Adult Advanced Life Support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation 2025;152(16 Suppl 2):S538–S577. <a href="https://doi.org/10.1161/CIR.0000000000001376" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001376</a></li>
<li id="ref-3">Smyth MA, et al. European Resuscitation Council Guidelines 2025 Adult Basic Life Support. Resuscitation 2025;215 Suppl 1:110771. <a href="https://doi.org/10.1016/j.resuscitation.2025.110771" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110771</a></li>
<li id="ref-4">Kleinman ME, et al. Part 7: Adult Basic Life Support. 2025 AHA Guidelines for CPR and ECC. Circulation 2025;152(16 Suppl 2):S448–S478. <a href="https://doi.org/10.1161/CIR.0000000000001369" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001369</a></li>
<li id="ref-5">Djärv T, Rogers J, et al. European Resuscitation Council Guidelines 2025 First Aid (choking). Resuscitation 2025;215 Suppl 1:110752. <a href="https://doi.org/10.1016/j.resuscitation.2025.110752" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110752</a></li>
<li id="ref-6">Nolan JP, et al. European Resuscitation Council and European Society of Intensive Care Medicine Guidelines 2025 Post-Resuscitation Care. Resuscitation 2025;215 Suppl 1:110809. <a href="https://doi.org/10.1016/j.resuscitation.2025.110809" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110809</a></li>
<li id="ref-7">Hirsch KG, et al. Part 11: Post–Cardiac Arrest Care. 2025 AHA Guidelines for CPR and ECC. Circulation 2025;152(16 Suppl 2):S673–S718. <a href="https://doi.org/10.1161/CIR.0000000000001375" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001375</a></li>
<li id="ref-8">Cao D, et al. Part 10: Adult and Pediatric Special Circumstances of Resuscitation. 2025 AHA Guidelines for CPR and ECC. Circulation 2025;152(16 Suppl 2). <a href="https://doi.org/10.1161/CIR.0000000000001380" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001380</a></li>
<li id="ref-9">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.2 Choking and §1.3 Cardiac arrest algorithm; National Essential Medicines List 2025; Bhutan Clinical Reference topic "Cardiac arrest (BLS and ACLS)" (Nov 2026).</li>
<li id="ref-10">Lott C, et al. European Resuscitation Council Guidelines 2025 Special Circumstances in Resuscitation. Resuscitation 2025;215 Suppl 1:110753. <a href="https://doi.org/10.1016/j.resuscitation.2025.110753" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110753</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §1.2–1.3", "<span class='pass'>Used</span>", "Text read; the algorithm figure is unreadable in the PDF text layer, and the Clinical Reference summary (AHA 2020-based) was used"],
["AHA 2025 Parts 7, 9, 11", "<span class='pass'>Read directly</span>", "Recommendation tables and the accessible adult cardiac arrest algorithm (doses, energies)"],
["ERC/RCUK 2025 ALS, BLS, First Aid; ERC–ESICM post-resuscitation care", "<span class='pass'>Read directly</span>", "Doses and targets quoted from the RCUK pages"],
["Guideline differences", "<span class='pass'>Tabled</span>", "Adrenaline timing, energies, lidocaine dose, post-ROSC targets"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "arrestadult: both guidelines and both rhythm pathways"],
["Defibrillators and capnography in Bhutan", "<span class='flag'>Local availability varies</span>", "Advice adapted for sites without them"]], "qc")}` }
]
});
