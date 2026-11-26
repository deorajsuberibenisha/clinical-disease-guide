/* Major trauma in adults — full depth (Batch E-1, 26 Nov 2026).
   Sources read directly: Bhutan STG 2024 §1.5–1.7 (readable parts: primary survey in 5 minutes, airway with C-spine control, two 14–16 G cannulas,
   transfusion for persistent shock, TXA 1 g within 3 h, tourniquets, AVPU/GCS, referral of GCS 9–12 and ≤ 8, pregnancy left displacement) and the
   Bhutan Clinical Reference topics "Major trauma: primary survey", "Haemorrhagic shock" and "Road traffic accident"; NICE NG39 (recommendations page);
   European guideline on major bleeding and coagulopathy following trauma, 6th edition (Rossaint 2023, PMC9977110); ERC 2025 Special circumstances
   (traumatic cardiac arrest); ATLS 11th edition (2025, xABCDE) via ACS summaries; CRASH-2 and CRASH-3. */
registerPage({
id: "trauma-adult",
title: "Major Trauma — Adults",
subtitle: "Stop the bleeding first, then airway, breathing, circulation, disability and exposure. Tranexamic acid within 3 hours, blood rather than saline, permissive hypotension unless the brain is injured, and a quick decision about where the patient needs to be. Bhutan STG, ATLS 11, NICE and the European bleeding guideline",
age: "Adults", specs: ["emerg", "surg", "ortho"],
keywords: ["major trauma", "polytrauma", "primary survey", "xABCDE", "ATLS", "haemorrhagic shock", "massive haemorrhage", "tranexamic acid", "TXA", "permissive hypotension", "damage control resuscitation", "tourniquet", "pelvic binder", "tension pneumothorax", "haemothorax", "flail chest", "cardiac tamponade", "FAST", "eFAST", "road traffic accident", "fall from height", "traumatic cardiac arrest", "secondary survey", "trauma in pregnancy"],
related: ["trauma-child", "headinjury-adult", "fracture-adult", "burns-adult", "shock-adult", "transfusion-adult", "arrest-adult", "compartment-adult", "hipfx-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Injury is a leading cause of death in young adults in Bhutan, from road crashes on mountain roads, falls from trees, roofs and construction sites, and assaults. Most preventable trauma deaths come from <b>bleeding</b>, a <b>blocked airway</b> or a <b>tension pneumothorax</b>, all of which can be found and treated in the first minutes.</p>
<div class="glance">
<div><h4>x — exsanguination</h4><p>Direct pressure, then a <b>tourniquet</b> for limb bleeding; <b>pelvic binder</b> for a suspected pelvic fracture.</p></div>
<div><h4>A — airway and C-spine</h4><p>Can they talk? Jaw thrust, suction, adjuncts; protect the neck (collar, or sandbags and tape).</p></div>
<div><h4>B — breathing</h4><p>Look for tension pneumothorax, open chest wound, flail chest, massive haemothorax; decompress if unstable.</p></div>
<div><h4>C — circulation</h4><p>Two 14–16 G cannulas. ${dr("tranexamic_acid", "Tranexamic acid 1 g")} over 10 min <b>within 3 hours</b>, then 1 g over 8 h. Blood early; little or no saline.</p></div>
<div><h4>D — disability</h4><p>GCS or AVPU, pupils, glucose. GCS 12 or less: refer for CT and neurosurgical advice.</p></div>
<div><h4>E — exposure</h4><p>Undress, log-roll, look everywhere, then <b>keep warm</b>. Cold patients bleed more.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §1.5: a primary survey (ABCDE) within 5 minutes, then a SAMPLE history, then a secondary survey. Immobilise the cervical spine with a collar or, if none, sandbags, wooden blocks and tape. Use two large-bore (14–16 G) cannulas, group and cross-match, and transfuse if tachycardia and hypotension persist. Give <b>tranexamic acid 1 g IV if the patient presents within 3 hours</b>. Control external bleeding with pressure, pressure bandages or tourniquets. Refer moderate (GCS 9–12) and severe (GCS 8 or less) head injury for imaging. Tranexamic acid 100 mg/mL, ketamine, fentanyl, morphine and suxamethonium are on the NEML 2025. Long transfer times by road mean decisions about the right destination, and who goes with the patient, must be made early. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What counts as major trauma", html: `
${tbl(["Feature", "Examples"], [
["High-energy mechanism", "Vehicle off a mountain road, rollover, ejection, death in the same vehicle, motorcyclist or pedestrian struck at speed, fall from more than about two storeys, crush"],
["Physiology", "Altered consciousness, systolic BP under 90 mmHg, heart rate above systolic BP (shock index over 1), respiratory rate under 10 or over 29, SpO₂ falling"],
["Anatomy", "Penetrating injury to head, neck, chest, abdomen or groin; flail chest; two or more long-bone fractures; unstable pelvis; amputation; burns over 20%; paralysis"],
["Vulnerable patients", "Older adults (minor falls cause major injury; normal BP may be shock), anticoagulated patients, pregnancy"]])}
<p>The <b>primary survey</b> finds and treats what kills first. The <b>secondary survey</b> is a head-to-toe examination once the patient is stable. The <b>tertiary survey</b> repeats it within 24 hours to find missed injuries, which are common in unconscious and multiply injured patients.</p>
` },

{ id: "patho", title: "Why trauma patients die", html: `
${F.chart("Trauma-induced coagulopathy and the lethal triad", [F.s("Major bleeding and tissue injury"), F.a, F.b([["Hypothermia", F.e("Cold slows clotting enzymes and platelets")], ["Acidosis", F.e("Shock → lactate; clotting fails at low pH")], ["Coagulopathy", F.e("Factor loss, fibrinolysis, low fibrinogen, low calcium; made worse by saline dilution")]]), F.a, F.e("More bleeding → deeper shock"), F.a, F.ok("Break the cycle: stop bleeding, TXA, blood products, warmth, calcium")])}
<p>Bleeding can hide in five places: on the floor (external), and in the chest, the abdomen, the pelvis and the long bones (the thighs). The young compensate with tachycardia and vasoconstriction until about a third of blood volume is lost; blood pressure then falls suddenly. A normal blood pressure does not exclude major bleeding, especially in fit young people and in patients on beta-blockers.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan STG 2024", "International", "This guide"], [
["Order of the primary survey", "ABCDE (airway with C-spine control first)", "ATLS 11 (2025): <b>xABCDE</b>, with exsanguinating external haemorrhage first", "xABCDE: a tourniquet on a spurting limb takes seconds and saves a life"],
["Fluids in active bleeding", "IV fluids, then blood if shock persists", "NICE NG39: do not use crystalloids for active bleeding in hospital; prehospital only if blood components are unavailable. European guideline: start with 0.9% saline or balanced crystalloid in hypotensive patients, but restrict volume", "Small crystalloid boluses only until blood arrives; give blood as early as possible"],
["Blood pressure target", "Not stated", "European: SBP 80–90 mmHg (MAP 50–60) until bleeding stops if no brain injury; MAP ≥ 80 mmHg in severe TBI. NICE: titrate to a palpable central pulse; less restrictive in dominant TBI", "European numbers, with the TBI exception"],
["Plasma to red cell ratio", "Not stated", "NICE: 1:1. European: FFP:RBC at least 1:2, or fibrinogen concentrate/cryoprecipitate with RBC", "1:1 where plasma is available; whole blood is a good option where it is used"],
["Tranexamic acid", "1 g IV within 3 hours", "NICE and European: as soon as possible, within 3 h; European: 1 g over 10 min then 1 g over 8 h", "1 g + 1 g over 8 h, within 3 h"],
["Tension pneumothorax", "Needle or chest drain", "NICE: open (finger) thoracostomy rather than needle if expertise is available; decompress before imaging only if unstable", "Finger thoracostomy if trained; otherwise needle decompression at the 4th–5th intercostal space, mid-axillary line, then a chest drain"]])}
` },

{ id: "presentation", title: "Primary survey in practice", html: `
${tbl(["Step", "Look for", "Do now"], [
["<b>x</b> Exsanguination", "Spurting or pooling blood from limbs, scalp, groin", "Direct firm pressure; tourniquet high on the limb if pressure fails (note the time); pack junctional wounds"],
["<b>A</b> Airway + C-spine", "Not talking, stridor, gurgling, snoring, facial fractures, burns, vomit", "Jaw thrust, suction, oropharyngeal or nasopharyngeal airway (not nasal with base-of-skull fracture), oxygen; intubate if GCS 8 or less or airway threatened; manual in-line stabilisation"],
["<b>B</b> Breathing", "Rate, SpO₂, chest movement, tracheal shift, absent breath sounds, distended neck veins, sucking wound, paradoxical segment", "Oxygen; decompress tension pneumothorax; three-sided or vented occlusive dressing for an open wound; chest drain for haemothorax"],
["<b>C</b> Circulation", "Heart rate, BP, capillary refill, skin, consciousness; FAST/eFAST; pelvis; long bones", "Two large-bore cannulas (IO if needed); bloods and cross-match; TXA; blood; pelvic binder; splints; call the surgeon"],
["<b>D</b> Disability", "GCS, pupils, lateralising signs, glucose", "Treat hypoglycaemia; prevent hypoxia and hypotension (they double brain injury)"],
["<b>E</b> Exposure", "Every wound, back by log-roll, perineum", "Then cover, warm fluids, warm room, blankets"]])}
<h3>A typical patient</h3>
<p>A 28-year-old man is brought in 50 minutes after his pick-up truck went off the road near Dochula. He is pale, confused, heart rate 128, BP 86/50, RR 28, SpO₂ 92%. The right chest is quiet and the pelvis is tender. <b>x</b>: no external bleeding. <b>A</b>: talking, collar on. <b>B</b>: oxygen; a large right haemothorax on eFAST, so a chest drain drains 900 mL. <b>C</b>: two cannulas, <b>TXA 1 g</b> over 10 minutes then 1 g over 8 h, pelvic binder at the level of the greater trochanters, O-negative blood then group-specific blood with plasma, target systolic 80–90 mmHg. <b>D</b>: GCS 14, pupils equal. <b>E</b>: warmed, log-rolled. He is transferred with a doctor to the regional referral hospital for surgery and embolisation planning.</p>
` },

{ id: "ddx", title: "Shock in trauma: what else?", html: `
${tbl(["Type", "Clues", "Treatment"], [
["<b>Haemorrhagic</b> (most common)", "Pale, cold, tachycardic, flat neck veins", "Stop bleeding, TXA, blood"],
["<b>Tension pneumothorax</b>", "Respiratory distress, absent breath sounds, tracheal deviation (late), distended neck veins", "Immediate decompression"],
["<b>Cardiac tamponade</b>", "Penetrating chest wound, distended neck veins, muffled heart sounds, pericardial fluid on FAST", "Pericardiocentesis as a bridge; thoracotomy by a surgeon"],
["<b>Neurogenic</b> (spinal cord injury above T6)", "Hypotension with a <i>slow</i> heart rate and warm limbs, flaccid paralysis", "Fluids cautiously, vasopressors, atropine for bradycardia; exclude bleeding first"],
["<b>Cardiogenic</b>", "Blunt cardiac injury, arrhythmia, or a heart attack that caused the crash", "ECG, troponin, echo"],
["<b>Medical cause of the event</b>", "Hypoglycaemia, seizure, stroke, intoxication", "Check glucose; do not blame alcohol for confusion until head injury is excluded"]])}
` },

{ id: "invest", title: "Investigations and imaging", html: `
${tbl(["Test", "Use", "Notes"], [
["Blood group and cross-match, Hb, platelets, PT/INR, fibrinogen", "Baseline and to guide transfusion", "A normal first Hb does not exclude bleeding; repeat it (European rec. 9)"],
["Lactate or base deficit, blood gas", "Extent of shock and its response", "European rec. 10"],
["Ionised calcium", "Falls with transfusion", "Keep 1.1–1.3 mmol/L (European rec. 31)"],
["Glucose, pregnancy test in women", "Always", ""],
["eFAST", "Free fluid in abdomen, pericardium, pleura; pneumothorax", "A negative eFAST does not exclude injury (NICE)"],
["Chest and pelvic X-ray", "In the resuscitation room", "Do not delay life-saving treatment for X-rays"],
["CT", "Whole-body CT for blunt major trauma with suspected multiple injuries (NICE)", "In Bhutan CT is available at referral hospitals; stabilise and transfer"],
["Head and C-spine imaging", "By the head-injury and C-spine decision rules", "See Head injury; Canadian C-spine rule calculator"]])}
<div class="calc" data-calc="gcs"></div>
` },

{ id: "staging", title: "Grading blood loss", html: `
${tbl(["Feature", "Class I", "Class II", "Class III", "Class IV"], [
["Blood loss (% of volume)", "Under 15%", "15–30%", "30–40%", "Over 40%"],
["Heart rate", "Normal", "Normal or raised", "Raised", "Very raised"],
["Blood pressure", "Normal", "Normal", "Normal or falling", "Low"],
["Pulse pressure", "Normal", "Reduced", "Reduced", "Reduced"],
["Mental state", "Normal", "Slightly anxious", "Confused", "Drowsy"],
["Typical need", "Monitor", "Possible blood", "Blood", "Massive transfusion"]])}
<p>Adapted from the ATLS classification of haemorrhagic shock. Real patients do not fit neatly. Older adults, people on beta-blockers and pregnant women can hide shock. The <b>shock index</b> (heart rate ÷ systolic BP) above 1 suggests significant bleeding.</p>
<div class="calc" data-calc="shockcalc"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>Damage control resuscitation</h3>
<ol>
<li><b>Stop the bleeding.</b> Pressure, packing, a tourniquet for a limb (European rec. 2; NICE 1.5.2), a pelvic binder over the greater trochanters (NICE 1.5.3; European rec. 20), splint femur fractures. Then damage-control surgery or embolisation (European rec. 19).</li>
<li><b>Tranexamic acid</b> as soon as possible and <b>within 3 hours</b>: 1 g IV over 10 minutes, then 1 g over 8 hours (European rec. 23). Do not start it after 3 hours unless there is proven hyperfibrinolysis (NICE 1.5.5).</li>
<li><b>Restrict fluids.</b> Systolic BP 80–90 mmHg (MAP 50–60) until bleeding is controlled. If there is severe brain injury (GCS 8 or less), keep MAP at 80 mmHg or more (European rec. 13). Add noradrenaline if fluids alone do not reach the target (European rec. 14).</li>
<li><b>Blood early.</b> Red cells and plasma 1:1 (NICE) or at least 1:2 (European), with platelets in massive bleeding. Once laboratory results arrive: Hb 70–90 g/L, fibrinogen above 1.5 g/L (give 3–4 g), platelets above 50 × 10⁹/L (above 100 with TBI), ionised calcium normal (calcium chloride preferred).</li>
<li><b>Keep warm</b>: warmed fluids, blankets, a warm room (European rec. 18).</li>
<li><b>Reverse anticoagulants</b> at once; ask a haematologist (NICE).</li>
</ol>
<div class="calc" data-calc="traumableed"></div>
<div class="calc" data-calc="mtpcalc"></div>
<h3>Chest injuries (STG §1.5.2)</h3>
${tbl(["Injury", "Recognise", "Treat"], [
["Tension pneumothorax", "Distress, hypotension, absent breath sounds, distended neck veins", "Decompress before imaging if unstable (NICE): finger thoracostomy (preferred if skilled) or needle in the 4th–5th intercostal space, mid-axillary line; then a chest drain"],
["Open pneumothorax", "Sucking chest wound", "Simple occlusive dressing, watch for tension (NICE); chest drain away from the wound"],
["Massive haemothorax", "Dull, absent breath sounds, shock; a large immediate drainage (around 1.5 L) or continuing bleeding means surgery", "Large-bore chest drain, blood; surgeon for thoracotomy if drainage is large or continuing"],
["Flail chest and lung contusion", "Paradoxical movement, hypoxia", "Oxygen, analgesia (including regional blocks), ventilation if needed"],
["Cardiac tamponade", "Penetrating wound, shock, distended neck veins, pericardial fluid", "Pericardiocentesis as a bridge; urgent surgery"],
["Rib fractures in older adults", "Pain, shallow breathing", "Good analgesia to prevent pneumonia; low threshold to admit older adults and anyone with several rib fractures"]])}
<h3>Abdominal and pelvic injury (STG §1.5.3)</h3>
<p>An unstable patient with free fluid on FAST needs a laparotomy, not a CT. A stable patient can have CT if available. Suspected pelvic fracture with shock: binder, blood, and pelvic packing, external fixation or embolisation. Penetrating abdominal wounds with shock, peritonitis or evisceration go to theatre.</p>
<h3>Traumatic cardiac arrest</h3>
<p>Correct reversible causes early and aggressively: control bleeding, manage the airway, decompress both sides of the chest, restore volume, and relieve tamponade. Continue chest compressions unless they delay these steps (ERC 2025). Resuscitative thoracotomy is for penetrating chest trauma with recent loss of signs of life, by a trained surgeon.</p>
<h3>Pain relief</h3>
<p>Titrated IV ${dr("morphine", "morphine")} or fentanyl, or ${dr("ketamine", "ketamine")} (useful in shock because it keeps blood pressure up). Splint fractures. Give pain relief early: it is not a reason to delay assessment, and it does not mask abdominal signs.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML 2025)", "Dose", "Notes"], [
[dr("tranexamic_acid", "Tranexamic acid 100 mg/mL"), "1 g IV over 10 min (10 mL in 100 mL saline), then 1 g over 8 h", "Within 3 h of injury; CRASH-2 benefit greatest when given early"],
[dr("ketamine", "Ketamine 50 mg/mL"), "Analgesia 0.1–0.3 mg/kg IV; induction 1–2 mg/kg IV", "Keeps BP; good in shocked patients"],
[dr("morphine", "Morphine"), "1–2 mg IV every 5 min, titrated", "Lower doses in shock and older adults"],
[dr("calcium_gluconate", "Calcium gluconate 10%"), "10–30 mL IV for low ionised calcium during transfusion", "Calcium chloride is preferred where available (European rec. 31)"],
[dr("noradrenaline", "Noradrenaline"), "Infusion if fluids fail to reach the BP target", "European rec. 14; central or large peripheral line"],
["Tetanus prophylaxis", "Td vaccine ± tetanus immunoglobulin by wound and history", "See Tetanus"],
[dr("ceftriaxone", "Antibiotics"), "Open fractures: as soon as possible (cefazolin or co-amoxiclav)", "See Fractures"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Pregnancy</b>", "Displace the uterus to the left (manually or with a tilt) from 20 weeks; shock signs appear late; the fetus is the first to suffer, so treat the mother first. Watch for placental abruption and preterm labour (STG §1.7). Anti-D for Rh-negative women. Perimortem caesarean if arrest occurs — see Cardiac arrest"],
["<b>Older adults</b>", "Falls from standing height cause serious injury; normal BP may be shock; anticoagulants; rib fractures are dangerous; delirium; lower threshold for CT"],
["<b>Head injury plus bleeding</b>", "Do not use permissive hypotension when TBI dominates: keep MAP 80 mmHg or more (European) or use less restrictive resuscitation (NICE)"],
["<b>Intoxicated patients</b>", "Assume a head injury until proven otherwise"],
["<b>Children</b>", "Different physiology, doses and imaging rules — see Major trauma — children"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["No blood bank at the hospital", "TXA, small crystalloid boluses to a palpable central pulse, bleeding control, early transfer with a doctor; consider fresh whole blood from tested walking donors where protocols allow", "Saline alone dilutes clotting factors"],
["Long road transfer at night", "Secure the airway before leaving, decompress the chest and leave a drain, splint and bind, start TXA, warm, send blood with the patient", "No one can intubate in a moving ambulance on a hairpin bend"],
["Patient arrives 5 hours after injury", "Do not start TXA; treat bleeding with products", "Late TXA increased bleeding deaths in CRASH-2"],
["Tourniquet applied 2 hours ago", "Leave it on until surgical control is possible; note the time", "Releasing it in shock can be fatal"],
["Bleeding pelvis, binder at the iliac crests", "Re-apply at the level of the greater trochanters", "Wrong position fails to close the pelvis"]])}
` },

{ id: "complications", title: "Complications", html: `
<p>Missed injuries (especially in unconscious patients), abdominal compartment syndrome, limb compartment syndrome, fat embolism, ARDS, acute kidney injury from shock and rhabdomyolysis, venous thromboembolism (start prophylaxis once bleeding is controlled), infection and sepsis, and post-traumatic stress. Massive transfusion can cause hypocalcaemia, hyperkalaemia, hypothermia and transfusion-related lung injury.</p>
` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "Before discharge", `<ul><li>Tertiary survey within 24 hours.</li><li>VTE prophylaxis once bleeding stops; mobilise early; physiotherapy.</li><li>Check tetanus status; arrange wound care and fracture follow-up.</li><li>Screen for low mood, poor sleep and flashbacks; ask about alcohol.</li><li>Medicolegal documentation for road crashes and assaults: describe and draw wounds accurately.</li></ul>`)}
${box("blue", "Prevention", `<ul><li>Seat belts and child seats, helmets, no drink-driving, safer roads.</li><li>Fall protection on construction sites and when harvesting from trees.</li><li>Trauma team training and a regular review of deaths.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Applying a limb tourniquet", src: "images/tourniquet-application.jpg", mod: "Photograph", ctx: "Life-threatening limb bleeding not controlled by direct pressure", loc: "Upper limb, above the wound", find: "Windlass tourniquet tightened high on the limb", interp: "Tighten until the bleeding stops and the distal pulse disappears; record the time; do not loosen in shock", by: "U.S. Navy (Mass Communication Specialist 2nd Class)", page: "https://commons.wikimedia.org/wiki/File:Tourniquet_application.jpg", lic: "Public domain" })}
${fig({ title: "Equipment for an improvised pelvic binder", src: "images/pelvic-binder-equipment.jpg", mod: "Photograph", ctx: "Suspected pelvic fracture with shock when a purpose-made binder is unavailable", loc: "Pelvis", find: "Sheet and fastening equipment used to make a binder", interp: "Wrap at the level of the greater trochanters (not the iliac crests) and tighten to close the pelvic ring", by: "James Heilman, MD (Doc James)", page: "https://commons.wikimedia.org/wiki/File:EquipmentforPelvicBinder.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult major trauma", [F.s("Arrival: team ready, pre-alert, blood ordered"), F.a, F.e("x: pressure, tourniquet, pelvic binder"), F.a, F.e("A + C-spine → B: decompress tension, seal open wounds → C: 2 large-bore lines, TXA ≤ 3 h, blood"), F.a, F.d("Responds to blood and bleeding control?"), F.a, F.b([["No", F.e("Damage control surgery or embolisation; massive transfusion; transfer early")], ["Yes", F.ok("D, E; secondary survey; CT if stable; definitive care")]]), F.a, F.s("Tertiary survey within 24 h")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Litres of saline before blood", "Dilutes clotting factors, worsens acidosis and cold", "Blood early; restrictive fluids"],
["Waiting for hypotension to diagnose shock", "BP falls late", "Use heart rate, skin, lactate and mental state"],
["Missing the pelvis", "Big hidden bleeding", "Binder early in high-energy blunt trauma with shock"],
["Distracted by an obvious fracture", "Airway or bleeding missed", "Always xABCDE first"],
["Blaming alcohol for confusion", "Head injury missed", "Glucose, GCS, imaging"],
["Letting the patient get cold", "Coagulopathy", "Warm everything"],
["TXA after 3 hours", "No benefit, possible harm", "Check the time of injury"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What does the x in xABCDE stand for?", "Exsanguinating external haemorrhage: control it with pressure or a tourniquet before the airway (ATLS 11, 2025).")}
${qa("Intern/MO", "What is the tranexamic acid regimen in adult trauma?", "1 g IV over 10 minutes as soon as possible and within 3 hours of injury, then 1 g over 8 hours.")}
${qa("Intern/MO", "What blood pressure target do you use for a bleeding patient without head injury?", "Systolic 80–90 mmHg (MAP 50–60) until bleeding is controlled (European guideline); NICE titrates to a palpable central pulse.")}
${qa("Specialist", "How do you change the BP target when severe brain injury and bleeding coexist?", "Keep MAP at 80 mmHg or more if GCS is 8 or less (European guideline); NICE uses less restrictive resuscitation if TBI is the dominant problem.")}
${qa("Specialist", "What laboratory targets guide transfusion once results are available?", "Hb 70–90 g/L, fibrinogen above 1.5 g/L (3–4 g if low), platelets above 50 × 10⁹/L (above 100 with TBI), ionised calcium 1.1–1.3 mmol/L.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care 2023;27:80. <a href="https://doi.org/10.1186/s13054-023-04327-7" target="_blank" rel="noopener">doi:10.1186/s13054-023-04327-7</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Major trauma: assessment and initial management (NG39). London: NICE; 2016. <a href="https://www.nice.org.uk/guidance/ng39/chapter/Recommendations" target="_blank" rel="noopener">nice.org.uk/guidance/ng39</a></li>
<li id="ref-3">American College of Surgeons Committee on Trauma. Advanced Trauma Life Support, 11th edition (2025): xABCDE. <a href="https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/" target="_blank" rel="noopener">facs.org</a></li>
<li id="ref-4">CRASH-2 trial collaborators. Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage (CRASH-2). Lancet 2010;376:23–32. <a href="https://doi.org/10.1016/S0140-6736(10)60835-5" target="_blank" rel="noopener">doi:10.1016/S0140-6736(10)60835-5</a></li>
<li id="ref-5">CRASH-3 trial collaborators. Effects of tranexamic acid on death, disability, vascular occlusive events and other morbidities in patients with acute traumatic brain injury (CRASH-3). Lancet 2019;394:1713–1723. <a href="https://doi.org/10.1016/S0140-6736(19)32233-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(19)32233-0</a></li>
<li id="ref-6">Lott C, et al. European Resuscitation Council Guidelines 2025 Special Circumstances in Resuscitation (traumatic cardiac arrest). Resuscitation 2025;215 Suppl 1:110753. <a href="https://doi.org/10.1016/j.resuscitation.2025.110753" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110753</a></li>
<li id="ref-7">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.5 Trauma, §1.5.2 Chest injury, §1.5.3 Abdominal injury, §1.7 Trauma in pregnancy; National Essential Medicines List 2025; Bhutan Clinical Reference topics "Major trauma: primary survey", "Haemorrhagic shock" and "Road traffic accident".</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §1.5–1.7", "<span class='pass'>Used</span>", "Readable text used; parts of the section are image-only in the PDF"],
["NICE NG39", "<span class='pass'>Read directly</span>", "TXA timing, fluids, plasma:RBC 1:1, tourniquet, binder, decompression, imaging"],
["European bleeding guideline 6th ed.", "<span class='pass'>Read directly</span>", "Recs 2, 3, 13–16, 18–20, 23, 25, 29–32"],
["ATLS 11 (xABCDE)", "<span class='pass'>Confirmed from ACS summaries</span>", "Manual not open access"],
["Shock classes table", "<span class='flag'>Adapted</span>", "From the ATLS classification; values are approximate by design"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculators", "<span class='pass'>Tested</span>", "traumableed (adult, TBI, late TXA), gcs, shockcalc, mtpcalc"]], "qc")}` }
]
});
