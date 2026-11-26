/* Major trauma in children — full depth (Batch E-1, 26 Nov 2026).
   Sources read directly: Bhutan STG 2024 §1.6 Trauma in paediatrics (larger head, smaller airway, less blood reserve, poor symptom reporting,
   involve a paediatric surgeon early) and §1.5; NICE NG39 child recommendations (chest X-ray/ultrasound first, no routine CT for chest trauma or
   whole-body CT, plasma:red cells 1:1 by weight, intraosseous access, haematologist for anticoagulant reversal); European bleeding guideline
   6th ed. (adult evidence, principles); RCPCH/CEM tranexamic acid evidence statement 2012 (15 mg/kg, max 1 g, then 2 mg/kg/h);
   ERC 2025 Paediatric Life Support and Special Circumstances (traumatic arrest). */
registerPage({
id: "trauma-child",
title: "Major Trauma — Children",
subtitle: "Same order, different child: a big head, a small airway, a tiny blood volume and a body that hides shock until it suddenly collapses. Bleeding control, airway, weight-based tranexamic acid and blood, careful imaging, and an eye for injuries that do not fit the story",
age: "Children & adolescents", specs: ["paeds", "emerg", "surg"],
keywords: ["paediatric trauma", "major trauma child", "polytrauma child", "primary survey child", "xABCDE", "haemorrhagic shock child", "tranexamic acid child", "15 mg/kg", "intraosseous", "child abuse", "non-accidental injury", "spleen injury child", "liver injury child", "handlebar injury", "seat belt sign", "SCIWORA", "fall from height child", "road traffic accident child", "burns child", "head injury child"],
related: ["trauma-adult", "headinjury-child", "postarrest-child", "shock-child", "burns-child", "supracondylar-child", "icp-child", "poisoning-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In children, injury is the commonest cause of death after the first year of life. Falls (from trees, roofs, terraces and stairs), road crashes, burns and dog bites are the usual causes in Bhutan. Children compensate for bleeding remarkably well and then decompensate fast. A child with a rising heart rate and a normal blood pressure may already have lost a quarter of their blood.</p>
<div class="glance">
<div><h4>Bleeding first</h4><p>Direct pressure, a tourniquet for limb bleeding if pressure fails, pelvic binder if a pelvic fracture is suspected.</p></div>
<div><h4>Airway</h4><p>Large occiput: pad under the shoulders in infants to keep the airway neutral; jaw thrust; protect the neck.</p></div>
<div><h4>Circulation</h4><p>IV or <b>intraosseous</b> access early. ${dr("tranexamic_acid", "TXA 15 mg/kg")} (max 1 g) within 3 h, then 2 mg/kg/h. <b>Blood 10 mL/kg</b> boluses.</p></div>
<div><h4>Brain</h4><p>Paediatric GCS, pupils, glucose. Prevent hypoxia, hypotension and low glucose.</p></div>
<div><h4>Imaging</h4><p>Chest X-ray and ultrasound first; <b>no routine whole-body CT</b> in under-16s (NICE). Use head-injury rules.</p></div>
<div><h4>Safeguarding</h4><p>If the story does not fit the injury, think of abuse, and document carefully.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §1.6: assess children with the same primary-survey approach as adults, remembering that their larger heads and smaller airways make head and airway injury harder to manage, that their smaller blood volume makes shock come sooner, and that young children cannot describe their symptoms. <b>Involve a (paediatric) surgeon from the start.</b> Paediatric surgery and PICU are at JDWNRH. Regional hospitals stabilise, give TXA and blood, and transfer with an escort. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "How children are different", html: `
${tbl(["Feature", "Why it matters", "What to do"], [
["Large head, large occiput", "Head injury common; neck flexes when lying flat", "Pad under the shoulders (infants); neutral position"],
["Small, soft airway; large tongue", "Obstructs easily; swelling narrows it more", "Jaw thrust, suction, correct-size adjuncts; skilled intubation"],
["Small blood volume (about 80 mL/kg)", "A small bleed is a large proportion", "Measure losses in mL/kg; replace early"],
["Strong compensation", "Tachycardia and cold peripheries before hypotension; hypotension is a late, pre-arrest sign", "Treat tachycardia, prolonged capillary refill and drowsiness as shock"],
["Flexible ribs", "Serious lung contusion without rib fractures; rib fractures mean great force", "Look for lung and heart injury"],
["Exposed liver and spleen", "Solid organ injury with modest force", "Most are managed without surgery in a paediatric centre if stable"],
["High surface area", "Lose heat fast", "Warm room, blankets, warm fluids"],
["Cannot describe symptoms", "Pain and injuries missed", "Examine carefully; involve parents; use pain scales"]])}
` },

{ id: "patho", title: "Shock in the injured child", html: `
${F.chart("Compensation then collapse", [F.s("Blood loss"), F.a, F.s("Heart rate rises; peripheries cool; capillary refill lengthens; child becomes quiet or irritable"), F.a, F.s("Blood pressure held until roughly a quarter or more of blood volume is lost"), F.a, F.e("Sudden hypotension and bradycardia: pre-arrest"), F.a, F.ok("Act on the early signs: stop bleeding, TXA, blood by weight")])}
<p>The lowest acceptable systolic blood pressure in a child aged 1–10 years is roughly 70 + (2 × age in years) mmHg. A blood pressure above this does <i>not</i> mean the child is safe. Deliberate low-pressure ("permissive") resuscitation is not used in children: aim for normal perfusion and move fast to bleeding control.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Source A", "Source B", "This guide"], [
["Fluids in active bleeding", "NICE NG39: no crystalloid in hospital; plasma:red cells 1:1 by weight", "Many low-resource protocols: crystalloid 10–20 mL/kg while waiting for blood", "Blood 10 mL/kg as soon as possible; crystalloid 10 mL/kg only if blood is not yet available, then reassess"],
["Tranexamic acid dose", "RCPCH 2012: 15 mg/kg (max 1 g) over 10 min, then 2 mg/kg/h for 8 h or until bleeding stops", "No paediatric trauma RCT; dose from adult CRASH-2 and surgery data (TIC-TOC trial ongoing)", "RCPCH dose, within 3 hours"],
["Whole-body CT", "NICE: do not routinely use whole-body CT in under-16s; target imaging clinically", "Some trauma centres scan widely in high-energy injury", "Targeted imaging; radiation matters in children"],
["Chest imaging", "NICE: chest X-ray and/or ultrasound first", "CT chest if mediastinal injury suspected", "X-ray and ultrasound first"],
["Primary survey order", "ATLS 11: xABCDE", "Bhutan STG: ABCDE", "xABCDE"]])}
` },

{ id: "presentation", title: "Primary survey in children", html: `
${tbl(["Step", "Look for", "Do now"], [
["<b>x</b> Exsanguination", "External bleeding, scalp wounds (bleed a lot in small children)", "Pressure; tourniquet if limb bleeding is not controlled"],
["<b>A</b> Airway + C-spine", "Not crying or talking, stridor, gurgling, facial or neck injury", "Jaw thrust, suction; collar or manual stabilisation; in infants a padded board keeps the airway neutral"],
["<b>B</b> Breathing", "Rate for age, SpO₂, chest movement, breath sounds, abdominal breathing", "Oxygen; decompress tension pneumothorax; seal open wounds; nasogastric tube for gastric distension in crying or ventilated children"],
["<b>C</b> Circulation", "Heart rate, capillary refill, skin colour, conscious level, BP for age, FAST", "Two attempts at IV, then intraosseous (proximal tibia); TXA; blood 10 mL/kg; pelvic binder if indicated"],
["<b>D</b> Disability", "AVPU or paediatric GCS, pupils, fontanelle in infants, glucose", "Treat glucose below 3 mmol/L; avoid hypoxia and hypotension"],
["<b>E</b> Exposure", "Whole body including back, perineum, patterns of bruising", "Then warm"]])}
<h3>A typical patient</h3>
<p>A 7-year-old girl (22 kg) fell about 5 metres from a tree while picking fruit in Tsirang, 2 hours ago. She is pale, quiet and thirsty. Heart rate 150, capillary refill 4 seconds, BP 88/54 (lowest normal for 7 years is about 84), RR 30, SpO₂ 96% on oxygen, GCS 14. The left upper abdomen is tender and FAST shows free fluid. <b>Action</b>: oxygen, collar, two IV cannulas (IO if they fail), <b>TXA 330 mg</b> (15 mg/kg) over 10 minutes = 3.3 mL of 100 mg/mL, then 44 mg/h. Blood <b>220 mL</b> (10 mL/kg) and reassess; plasma 1:1 if a second bolus is needed. Call the surgeon, warm her, give IV morphine titrated for pain, and arrange urgent transfer for a probable splenic injury. Most children like her keep their spleen with careful observation in a unit that can operate if needed.</p>
` },

{ id: "ddx", title: "Patterns of injury to look for", html: `
${tbl(["Pattern", "Mechanism", "Hidden injury"], [
["Handlebar mark on the abdomen", "Bicycle fall", "Pancreas, duodenum, liver, spleen injury (may present late)"],
["Seat belt sign (lap belt bruise)", "Car crash", "Bowel and mesentery injury, lumbar spine (Chance) fracture"],
["Fall from height onto feet", "Trees, roofs, terraces", "Heel, spine, pelvis, kidney"],
["Pedestrian struck by a vehicle", "Road crash", "Femur, chest/abdomen and head on the opposite side"],
["Neurological deficit with a normal X-ray", "Neck flexion injury", "Spinal cord injury without radiographic abnormality — needs MRI"],
["Injuries that do not fit the story", "Any", "Abuse: see Safeguarding below"]])}
` },

{ id: "invest", title: "Investigations and imaging", html: `
${tbl(["Test", "Use", "Notes"], [
["Glucose", "Every injured child", "Small glycogen stores"],
["Group and cross-match, Hb, coagulation, gas, lactate", "Bleeding and shock", "Repeat Hb; one normal value does not exclude bleeding"],
["Urine for blood", "Kidney and bladder injury", ""],
["Chest X-ray, ultrasound (eFAST)", "First-line for chest trauma (NICE)", "A negative FAST does not exclude solid-organ injury"],
["Pelvic X-ray", "Only if pelvic injury is suspected clinically", ""],
["CT", "Targeted to the head, neck, abdomen as indicated; not routine whole-body CT (NICE)", "Use paediatric low-dose protocols"],
["Head CT decision", "PECARN or CHALICE-type rules", "See Head injury — children"]])}
<div class="calc" data-calc="pgcs"></div>
<div class="calc" data-calc="pecarn"></div>
` },

{ id: "staging", title: "Shock by weight and age", html: `
<div class="calc" data-calc="traumableed"></div>
<div class="calc" data-calc="shockcalc"></div>
` },

{ id: "manage", title: "Management", html: `
<ol>
<li><b>Stop bleeding</b>: pressure, tourniquet for limbs, pelvic binder at the greater trochanters, splint femur fractures (traction splint).</li>
<li><b>Access</b>: IV, or intraosseous early if veins are hard to find (NICE).</li>
<li><b>Tranexamic acid</b> within 3 hours: 15 mg/kg (max 1 g) over 10 minutes, then 2 mg/kg/h for 8 hours or until bleeding stops (RCPCH).</li>
<li><b>Blood</b>: 10 mL/kg boluses, red cells and plasma 1:1 by weight (NICE), reassessing after each. Crystalloid 10 mL/kg only if no blood is available. Use the paediatric massive haemorrhage protocol for ongoing bleeding (NICE asks every hospital to have one).</li>
<li><b>Warmth, glucose, calcium</b>: prevent hypothermia, treat hypoglycaemia, check ionised calcium in transfused children.</li>
<li><b>Analgesia</b>: titrated IV ${dr("morphine", "morphine")} or ${dr("ketamine", "ketamine")}; splints; distraction; parents present where safe.</li>
<li><b>Early surgical involvement and transfer</b> (STG §1.6).</li>
</ol>
<div class="calc" data-calc="mtpcalc"></div>
<h3>Specific injuries</h3>
${tbl(["Injury", "Management in a child"], [
["Spleen and liver injury", "Stable child: non-operative care with observation, bed rest and repeat Hb in a unit that can operate; unstable despite blood: surgery"],
["Chest injury", "Tension pneumothorax: decompress (needle in the 2nd intercostal space mid-clavicular line or 4th–5th space mid-axillary line by local practice, then a drain); haemothorax: drain; lung contusion: oxygen, careful fluids"],
["Head injury", "Prevent secondary injury; head-up 30°; see Head injury — children and Coma & raised ICP"],
["Limb fractures", "Splint, check pulses and nerves; supracondylar fractures can injure the brachial artery"],
["Burns", "Cooling, fluids by %TBSA and weight; see Burns — children"]])}
<h3>Traumatic cardiac arrest in a child</h3>
<p>Treat the cause at once: open the airway and ventilate (hypoxia is common), stop bleeding and give blood, decompress both sides of the chest. Give adrenaline and CPR as in Cardiac Arrest — Children, but correcting hypovolaemia and hypoxia matters most (ERC 2025).</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML 2025)", "Child dose", "Notes"], [
[dr("tranexamic_acid", "Tranexamic acid 100 mg/mL"), "15 mg/kg (max 1 g) IV over 10 min, then 2 mg/kg/h", "Within 3 hours of injury (RCPCH 2012)"],
["Blood (red cells and plasma)", "10 mL/kg boluses, 1:1", "Reassess after each (NICE NG39)"],
[dr("dextrose", "Dextrose 10%"), "2 mL/kg for glucose under 3 mmol/L", "Check glucose in every injured child"],
[dr("morphine", "Morphine"), "Titrated small IV doses by weight (see drug card)", "Monitor breathing and BP"],
[dr("ketamine", "Ketamine"), "Analgesia or procedural sedation by weight (see drug card)", "Keeps airway reflexes and BP"],
["Tetanus prophylaxis", "By immunisation history and wound type", "Bhutan EPI gives DTP and Td boosters; see Tetanus"]])}
` },

{ id: "populations", title: "Infants and adolescents", html: `
<ul>
<li><b>Infants</b>: shaking injury and abusive head trauma present with vomiting, irritability, fits or apnoea without a clear history. Any bruise in a baby who is not yet mobile needs explanation.</li>
<li><b>Toddlers</b>: falls, burns, poisoning and drowning dominate; supervision is the key prevention.</li>
<li><b>Adolescents</b> (16 and over, and those of adult size): use adult protocols, adult TXA doses and adult imaging rules (NICE uses 16 years as the cut-off). Ask about alcohol, risk-taking and self-harm.</li>
</ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["No blood available", "TXA, crystalloid 10 mL/kg boluses to restore perfusion, bleeding control, urgent transfer", "Buy time to reach blood and surgery"],
["Cannot get a vein in a shocked toddler", "Intraosseous needle in the proximal tibia after two failed attempts", "Fast, reliable, all drugs and blood can be given"],
["The story keeps changing", "Treat the child, then safeguard: full skin check, skeletal survey and eye examination as indicated, careful notes, report to the child protection team or police as per law", "Abuse kills if missed"],
["Parents want to leave against advice after a fall", "Explain the risk of delayed bleeding from the spleen or liver; give written warning signs", "Some injuries declare themselves late"]])}
` },

{ id: "complications", title: "Complications", html: `
<p>Delayed bleeding from solid organs, missed bowel or pancreatic injury (handlebar and seat-belt injuries), compartment syndrome, growth-plate damage after fractures, spinal cord injury, brain injury with learning and behaviour problems, infection, and psychological trauma in both child and family.</p>
` },

{ id: "followup", title: "Follow-up, safeguarding and prevention", html: `
${box("red", "Safeguarding: think abuse when", `<ul><li>The history is vague, changes, or does not explain the injury.</li><li>There is a delay in seeking care.</li><li>Bruises in a baby who cannot move about, bruises on the ears, neck, buttocks or genitals, patterned bruises or bite marks.</li><li>Multiple fractures of different ages, rib fractures in infants, metaphyseal fractures.</li><li>Burns with clear edges (immersion) or cigarette-shaped burns.</li></ul><p>Treat first, document exactly what you see and what was said, and follow the national child-protection referral pathway.</p>`)}
${box("blue", "Prevention", `<ul><li>Child seats and seat belts, helmets for cycling and motorbikes.</li><li>Rails on terraces and stairs; supervision around trees, rivers, fires and cooking pots.</li><li>Safe storage of kerosene, medicines and pesticides.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Applying a limb tourniquet", src: "images/tourniquet-application.jpg", mod: "Photograph", ctx: "Life-threatening limb bleeding not controlled by pressure", loc: "Upper limb, above the wound", find: "Windlass tourniquet tightened high on the limb", interp: "Works in children too; note the time and do not loosen until surgical control", by: "U.S. Navy (Mass Communication Specialist 2nd Class)", page: "https://commons.wikimedia.org/wiki/File:Tourniquet_application.jpg", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Injured child", [F.s("Weight (measured, tape or parent's estimate)"), F.a, F.e("x: pressure, tourniquet, binder → A + C-spine → B → C: IV/IO, TXA 15 mg/kg ≤ 3 h, blood 10 mL/kg"), F.a, F.d("Perfusion restored after 1–2 blood boluses?"), F.a, F.b([["No", F.e("Surgeon now; massive haemorrhage protocol; transfer to paediatric surgery")], ["Yes", F.ok("D, E; targeted imaging; observe for delayed bleeding")]]), F.a, F.s("Safeguarding check, analgesia, family support")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for low BP", "Hypotension is a late, pre-arrest sign", "Treat tachycardia and slow capillary refill"],
["Adult TXA dose for a small child", "Overdose", "15 mg/kg (max 1 g)"],
["Litres of crystalloid", "Dilution, cold, oedema", "Blood 10 mL/kg boluses"],
["Missing glucose", "Hypoglycaemia mimics or worsens brain injury", "Check glucose in every injured child"],
["Whole-body CT for every child", "Radiation; rarely changes care", "Targeted imaging (NICE)"],
["Ignoring a bruise in a baby", "Missed abuse", "Ask how it happened and document"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why is hypotension a late sign of shock in children?", "Children compensate with tachycardia and vasoconstriction; blood pressure is maintained until a large proportion of blood volume is lost, then falls suddenly.")}
${qa("Intern/MO", "What is the tranexamic acid dose for a 20 kg child after trauma?", "15 mg/kg = 300 mg IV over 10 minutes (3 mL of 100 mg/mL), then 2 mg/kg/h = 40 mg/h for 8 hours or until bleeding stops, if within 3 hours of injury.")}
${qa("Intern/MO", "What fluid would you give a bleeding 20 kg child in shock?", "Blood (red cells and plasma 1:1) 10 mL/kg = 200 mL, then reassess; crystalloid 10 mL/kg only if blood is not available.")}
${qa("Specialist", "When is whole-body CT appropriate in children?", "NICE NG39 advises against routine whole-body CT in under-16s; use clinical judgement to target imaging to the regions at risk.")}
${qa("Specialist", "List three features that should make you consider abusive injury.", "An inconsistent or changing history, delay in presentation, bruising in a non-mobile infant or on protected sites, multiple fractures of different ages, or patterned burns.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Major trauma: assessment and initial management (NG39). London: NICE; 2016. <a href="https://www.nice.org.uk/guidance/ng39/chapter/Recommendations" target="_blank" rel="noopener">nice.org.uk/guidance/ng39</a></li>
<li id="ref-2">Royal College of Paediatrics and Child Health and College of Emergency Medicine. Major trauma and the use of tranexamic acid in children: evidence statement. London: RCPCH; November 2012. <a href="https://www.stemlynsblog.org/wp-content/uploads/2015/03/CEM6706-121112_TXA-evidence-statement_final11.pdf" target="_blank" rel="noopener">PDF</a></li>
<li id="ref-3">Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care 2023;27:80. <a href="https://doi.org/10.1186/s13054-023-04327-7" target="_blank" rel="noopener">doi:10.1186/s13054-023-04327-7</a></li>
<li id="ref-4">Djakow J, et al. European Resuscitation Council Guidelines 2025 Paediatric Life Support. Resuscitation 2025;215 Suppl 1:110767. <a href="https://doi.org/10.1016/j.resuscitation.2025.110767" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110767</a></li>
<li id="ref-5">American College of Surgeons Committee on Trauma. Advanced Trauma Life Support, 11th edition (2025). <a href="https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/" target="_blank" rel="noopener">facs.org</a></li>
<li id="ref-6">CRASH-2 trial collaborators. Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage. Lancet 2010;376:23–32. <a href="https://doi.org/10.1016/S0140-6736(10)60835-5" target="_blank" rel="noopener">doi:10.1016/S0140-6736(10)60835-5</a></li>
<li id="ref-7">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.5–1.6; National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §1.6", "<span class='pass'>Read directly</span>", "Principles; no paediatric doses in the STG"],
["NICE NG39 child recommendations", "<span class='pass'>Read directly</span>", "Imaging, plasma:RBC 1:1, IO access"],
["Paediatric TXA dose", "<span class='pass'>RCPCH 2012</span>", "Expert consensus; no paediatric trauma RCT yet"],
["Blood volume 80 mL/kg and BP formula 70 + 2 × age", "<span class='flag'>Teaching values</span>", "Standard paediatric resuscitation teaching; approximate"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculators", "<span class='pass'>Tested</span>", "traumableed (child), pgcs, pecarn, shockcalc, mtpcalc"]], "qc")}` }
]
});
