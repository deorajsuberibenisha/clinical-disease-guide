/* Dengue — adults (with pregnancy) */
registerPage({
id: "dengue-adult",
title: "Dengue — Adults & Pregnancy",
subtitle: "Phuentsholing to Samdrup Jongkhar: the three phases, the warning signs that start the critical phase as the fever falls, Bhutan's A–B–C groups, measured fluids by the hour, and why platelets and NSAIDs are not the answer",
age: "Adults", specs: ["id", "medicine", "emerg", "obg", "ph"],
keywords: ["dengue", "dengue fever", "dengue haemorrhagic fever", "DHF", "dengue shock syndrome", "DSS", "severe dengue", "warning signs", "NS1", "dengue IgM", "haematocrit", "thrombocytopenia", "platelet transfusion dengue", "plasma leakage", "Aedes aegypti", "dengue pregnancy", "tourniquet test", "Phuentsholing dengue"],
related: ["dengue-child", "sepsis-adult", "meningitis-adult", "ugib-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Dengue kills not through fever but through leaking capillaries, and the leak starts just as the fever settles and the patient seems better. Almost every death is preventable with daily review, early recognition of warning signs, and careful, measured IV fluid — enough to keep the circulation going, not so much that the lungs flood.</p>
<div class="glance">
<div><h4>Three phases</h4><p><b>Febrile</b> (days 1–3) → <b>critical</b> (around defervescence, days 3–7, lasts 24–48 h) → <b>recovery</b> (reabsorption, diuresis, itchy rash).</p></div>
<div><h4>Warning signs</h4><p>Abdominal pain, persistent vomiting, fluid accumulation, mucosal bleeding, lethargy or restlessness, postural drop, liver over 2 cm, rising haematocrit with falling platelets.</p></div>
<div><h4>Groups (Bhutan)</h4><p>A home with daily CBC · B1 special populations, admit · B2 warning signs, IV fluid · C severe, emergency.</p></div>
<div><h4>B2 fluids</h4><p>${dr("ringer_lactate")} or saline <b>5–7 → 3–5 → 2–3 mL/kg/h</b>, guided by haematocrit; stop by 48 h.</p></div>
<div><h4>Drugs</h4><p>${dr("paracetamol")} only (max 4 g/day). <b>No NSAIDs, aspirin or IM injections.</b> ${dr("ors")} and oral fluids.</p></div>
<div><h4>Platelets</h4><p>Only for bleeding (or under 10,000 before procedures). A low count alone is not a reason to transfuse.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan's first dengue outbreak was in 2004 (2651 cases). In 2019 there were 5480 confirmed cases and 6 deaths, including two pregnant women; 77% were from Phuentsholing. DENV-1, 2 and 3 circulate (DENV-1 predominant), and <i>Aedes aegypti</i> is established seasonally in southern and eastern districts (Chukha, Samtse, Sarpang, Samdrup Jongkhar, Pemagatshel, Mongar, Trashiyangtse and parts of Wangdue). The <b>National Guideline on Clinical Management of Dengue in Bhutan (VDCP, 2020)</b> is the main source for this chapter; the STG (§8.5.8) refers to it. Dengue is immediately notifiable through NEWARS. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Dengue is an acute viral infection by one of four dengue virus serotypes (DENV-1 to 4), spread by day-biting <i>Aedes aegypti</i> (and <i>Aedes albopictus</i>) mosquitoes. Incubation is 4–10 days. Infection ranges from no symptoms to fatal shock; most people recover in a week.${r(1, 2)}</p>
${tbl(["Factor", "Why it matters", "Notes"], [
["Second infection with a different serotype", "Antibody-dependent enhancement raises the risk of severe dengue", "Ask about previous dengue"],
["Season and place", "Monsoon and post-monsoon; urban southern towns (Phuentsholing, Gelephu, Samdrup Jongkhar) and travel to India", "Imported cases appear in almost every dzongkhag"],
["Special populations (Bhutan guideline)", "Pregnancy, infants, age over 65, obesity, diabetes, hypertension, heart, lung or kidney disease, bleeding disorders, antiplatelets/anticoagulants, alcohol misuse, previous dengue, living alone or far away", "Admit (Group B1) even without warning signs"]])}
<h3>Case definitions (Bhutan)</h3>
<ul><li><b>Confirmed case:</b> suspected dengue with a positive NS1 antigen or IgM; if IgM is negative early, retest after 5–7 days.</li>
<li><b>Probable case:</b> IgG positive alone with compatible illness — manage as dengue and retest.</li>
<li><b>Outbreak:</b> 5 or more confirmed cases in a cluster within 7 days in an endemic area; any confirmed case in a non-endemic area.${r(1)}</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Why the danger comes as the fever falls", [
F.s("Febrile phase: viraemia, high fever, aches, falling white cells"), F.a,
F.s("Around defervescence (days 3–7): endothelial dysfunction → capillary plasma leak for 24–48 h"), F.a,
F.d("How much plasma leaks?"), F.a,
F.b([["Little", F.ok("Haematocrit rises slightly; recovery")], ["A lot", F.e("Haematocrit rises, effusions, ascites → shock")]]), F.a,
F.e("Prolonged shock → acidosis, DIC, bleeding (haematocrit then falls), organ failure"), F.a,
F.s("Recovery phase: leaked fluid returns to the circulation over 48–72 h — excess IV fluid now causes pulmonary oedema")])}
<p>Plasma leakage, not bleeding, is the main problem. Thrombocytopenia is universal but bleeding is usually minor unless shock is prolonged. A rising haematocrit tells you how much plasma has leaked; a sudden fall with unstable vital signs means bleeding.${r(1, 3)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan guideline 2020 / STG", "International", "This guide and why"], [
["Hypotensive shock bolus", "20 mL/kg over 30 minutes (Figure 7)", "WHO 2009: 20 mL/kg over 15 minutes in adults; similar thereafter", "Bhutan regimen; both are acceptable — reassess after each bolus"],
["Prophylactic platelets", "May be considered under 10,000/mm³ without bleeding", "Adult trial (Lye, Lancet 2017): prophylactic platelets did not reduce bleeding and caused more adverse events; WHO: transfuse for bleeding", "Do not transfuse for a number alone; consider only under 10,000 before an invasive procedure or with high bleeding risk"],
["Colloids", "For hypotensive or crystalloid-resistant shock", "Crystalloids first; colloid only for refractory shock (WHO 2009)", "As Bhutan"],
["Corticosteroids, papaya leaf, IVIG", "Not recommended (not mentioned)", "No benefit shown (Cochrane 2014 for steroids)", "Do not use"],
["STG §8.5.8", "Paracetamol, complete bed rest, volume replacement, refer", "—", "Use the detailed national dengue guideline"],
["India", "—", "NCVBDC national guidelines: same WHO-based phases, groups and fluid steps", "Consistent"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Phase", "Features", "What to watch"], [
["<b>Febrile</b> (days 1 to 2–7)", "Sudden high fever, flushed face, severe headache, pain behind the eyes, muscle, joint and back pain (break-bone fever), nausea, vomiting, mild petechiae or gum bleeding, positive tourniquet test", "Dehydration, low sodium and glucose; falling white cells and platelets"],
["<b>Critical</b> (days 3–7, 24–48 h)", "Fever falls; warning signs; rising haematocrit; effusions, ascites; tender liver", "Shock, severe bleeding, organ impairment"],
["<b>Recovery</b> (next 48–72 h)", "Appetite returns, BP normal, diuresis, itchy confluent rash with islands of white in a sea of red, slow pulse", "Fluid overload, low potassium"]])}
${box("red", "Warning signs — admit", `<ul><li>Abdominal pain or tenderness; persistent vomiting</li><li>Clinical fluid accumulation (pleural effusion, ascites)</li><li>Mucosal bleeding; lethargy or restlessness</li><li>Postural drop: lying 5 minutes, then standing 3 minutes, systolic fall 20 mmHg or diastolic 10 mmHg or more</li><li>Liver enlarged more than 2 cm</li><li>Haematocrit rising more than 20% above baseline with platelets falling quickly to about 100,000</li></ul>`)}
${box("red", "Severe dengue (Group C)", `<ul><li><b>Compensated shock:</b> normal systolic BP with fast pulse and pulse pressure 20 mmHg or less, or cold peripheries with capillary refill over 2 seconds</li><li><b>Hypotensive shock:</b> falling systolic and diastolic BP, worsening tachycardia, acidotic breathing, altered consciousness</li><li>Fluid accumulation with respiratory distress; severe bleeding; severe organ impairment (hepatitis, encephalitis, myocarditis)</li></ul>`)}
<h3>How to do the tourniquet test</h3>
<p>Inflate the BP cuff midway between systolic and diastolic pressure for 5 minutes. Positive: 10 or more petechiae in a 2.5 cm (1 inch) square below the cuff. It supports the diagnosis but a negative test does not exclude dengue.${r(1)}</p>
<h3>The typical patient</h3>
<p>A 26-year-old shopkeeper in Phuentsholing has had fever, headache and severe body aches for four days. Today the fever has gone, but he has abdominal pain, has vomited three times and feels dizzy on standing. Pulse 112, BP 108/90 (pulse pressure 18), capillary refill 3 seconds, liver 3 cm. NS1 was positive on day 2; haematocrit has risen from 42% to 52% and platelets have fallen to 38,000. <b>This is dengue in the critical phase with compensated shock (Group C).</b> He needs IV crystalloid 5–10 mL/kg/hour for an hour with haematocrit before and after, hourly vital signs and urine output, a cross-match, and transfer planning — not a platelet transfusion and not ibuprofen.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against dengue", "Best test"], [
["Scrub typhus", "Eschar, lymph nodes, rural work, monsoon to autumn", "Falling platelets with rising haematocrit favour dengue", "Scrub IgM ELISA/RDT"],
["Malaria", "Travel to malarious areas, rigors, anaemia", "—", "RDT, smear"],
["Leptospirosis", "Floodwater, rice fields, jaundice, kidney injury, calf pain", "—", "Serology"],
["Enteric fever", "Step-ladder fever, abdominal pain, relative bradycardia", "—", "Blood culture"],
["Chikungunya", "Severe, lasting joint pain and swelling", "Less thrombocytopenia", "Serology/PCR"],
["Influenza, COVID-19", "Respiratory symptoms", "—", "Testing"],
["Meningococcal sepsis", "Purpura, rapid deterioration", "—", "Blood culture"],
["Acute HIV, acute hepatitis", "Risk history; very high transaminases", "—", "HIV test; hepatitis serology"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>CBC with haematocrit</b>", "Baseline haematocrit in the febrile phase; white cells and platelets", "Repeat daily until out of the critical phase; the early haematocrit is the patient's own baseline", "Essential"],
["<b>NS1 antigen</b> (RDT)", "Diagnosis days 1–5", "Do not wait for confirmation to start management", "Essential"],
["IgM (RDT/ELISA)", "From about day 5 for 2–3 months", "Retest after 5–7 days if negative early", "Essential"],
["IgG", "From day 7; lifelong", "IgG alone = past infection (unless rising titre)", "Interpretation"],
["LFT, creatinine, electrolytes, calcium, albumin, glucose", "Organ involvement; falling albumin and calcium mark leakage", "AST over ALT is typical", "Group B and C"],
["Malaria test, scrub typhus test, blood culture", "Exclude differentials (Bhutan guideline)", "—", "Essential in the south"],
["Chest X-ray, ultrasound", "Pleural effusion, ascites, gallbladder wall oedema, liver size", "Ultrasound shows leakage early", "Selected"],
["Blood group and cross-match", "All shocked patients", "—", "Group C"],
["PCR/ELISA at RCDC", "Confirmation and serotyping", "Send all RDT-positive samples with Annexure 8 form", "Surveillance"]])}
` },

{ id: "staging", title: "Management group and fluid calculator", html: `
<p>Sort the patient into a group, then calculate fluid rates. Use ideal body weight in overweight adults (Bhutan guideline).${r(1, 2, 5, 7, 8)}</p>
<div class="calc" data-calc="denguegroup"></div>
<div class="calc" data-calc="denguefluid"></div>
<h3>Refer</h3>
<ul><li>PHCs manage Group A only; refer warning signs and special populations to hospital after discussing with the specialist (Bhutan guideline).</li><li>District hospitals manage most Group B and C patients; refer when blood products or ICU are needed, with an input–output chart and written fluid instructions for the journey.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Group A — home</h3>
<ul><li>${dr("paracetamol")} for fever and pain (maximum 4 g/day; 1 g 6-hourly). <b>No NSAIDs, aspirin or IM injections.</b></li>
<li>${dr("ors")}, soups, juices, water — enough to pass urine at least every 6 hours. Rest.</li>
<li>Daily review with CBC until past the critical phase; return at once with any warning sign.</li></ul>
<h3>B. Group B1 — special populations</h3>
<ul><li>Admit; oral fluids; if not tolerated, IV 0.9% saline or Ringer's lactate at maintenance; vital signs 4-hourly; daily CBC.</li>
<li>Diabetes: switch to insulin (target glucose below about 150–200 mg/dL). Antiplatelets and anticoagulants: stop during the critical phase. Kidney disease: careful fluids; fluid overload in the recovery phase is the main danger. Liver disease: baseline LFT and PT; minimum fluid.${r(1)}</li></ul>
<h3>C. Group B2 — warning signs</h3>
<ol><li>Baseline haematocrit and weight first.</li>
<li>${dr("ringer_lactate")} or 0.9% saline <b>5–7 mL/kg/h for 1–2 h, then 3–5 mL/kg/h for 2–4 h, then 2–3 mL/kg/h for 2–4 h</b>, then lower.</li>
<li>Reassess and repeat haematocrit: stable or slightly rising → continue 2–3 mL/kg/h for another 2–4 h; rising fast or vital signs worse → 5–10 mL/kg/h for 1–2 h.</li>
<li>Give the least fluid that keeps good perfusion and urine output about 0.5 mL/kg/h. Change rates step by step; never jump (for example from 6 to 20 mL/kg/h).</li>
<li>Monitoring: pulse and BP 1–4-hourly, urine output 6-hourly (strict input–output), haematocrit before and after each change then 8-hourly, glucose and organ function as needed.</li></ol>
<h3>D. Group C — severe dengue</h3>
<ul><li><b>Compensated shock:</b> crystalloid 5–10 mL/kg/h for 1 hour; if better, step down the ladder; if not, check haematocrit — rising: second bolus 10–20 mL/kg over 1 hour (colloid if already had crystalloid boluses); falling: look for bleeding and transfuse.</li>
<li><b>Hypotensive shock:</b> 20 mL/kg crystalloid or colloid over 30 minutes; if better, 10 mL/kg/h for 1 hour then the ladder; if not, decide by haematocrit as above.</li>
<li>Vital signs every 15–30 minutes until out of shock; urine output hourly (catheter); haematocrit before and after each bolus; correct glucose, calcium and acidosis.</li>
<li><b>Blood:</b> packed cells 5 mL/kg or whole blood 10 mL/kg for severe bleeding or a falling haematocrit with unexplained low BP; FFP 15 mL/kg and cryoprecipitate for coagulopathy with bleeding.${r(1)}</li></ul>
<h3>E. Platelets</h3>
<ul><li>Transfuse platelets (1 unit per 10 kg) only for significant bleeding, or before emergency surgery. A low count without bleeding is not an indication; the Bhutan guideline allows considering it below 10,000/mm³.${r(1, 4)}</li></ul>
<h3>F. When to stop IV fluids</h3>
<ul><li>Stable BP, pulse and perfusion; haematocrit falling with a good pulse; no fever for 24–48 hours without antipyretics; abdominal symptoms settling; good urine output. Continuing beyond 48 hours of the critical phase risks pulmonary oedema.</li></ul>
<h3>G. Discharge (all required)</h3>
<ul><li>No fever for 48 hours; clinical improvement (appetite, urine output, no breathlessness); rising platelet count; stable haematocrit without IV fluids.</li></ul>
<h3>H. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Group A: paracetamol, ORS, daily CBC where available; refer warning signs and special populations after discussing with the specialist; notify"],
["District hospital", "Groups B and C with haematocrit monitoring; blood bank access; refer for ICU or blood products"],
["Phuentsholing and southern hospitals in season", "Dengue ward, daily CBC clinic, triage by phase and warning signs, monitoring charts (Annexures 1–4)"]])}
` },

{ id: "drugs", title: "Medicines and fluids", html: `
${tbl(["Item", "Adult dose", "Notes"], [
[dr("paracetamol"), "1 g 6-hourly, maximum 4 g/day", "Only analgesic/antipyretic; lower dose in liver disease"],
[dr("ors"), "Sip frequently; at least enough for urine every 6 h", "Group A and B1"],
[dr("ringer_lactate"), "B2: 5–7 → 3–5 → 2–3 mL/kg/h; shock: per calculator", "Or 0.9% saline"],
["Colloid (dextran, gelatin, starch where available)", "10–20 mL/kg", "Refractory or hypotensive shock"],
["Packed red cells / whole blood", "5 mL/kg / 10 mL/kg", "Severe bleeding"],
["Platelets", "1 unit per 10 kg", "Bleeding only"],
["Avoid", "Ibuprofen, diclofenac, aspirin, IM injections, steroids, papaya-leaf preparations", "Bleeding, gastritis; no proven benefit"]])}
` },

{ id: "populations", title: "Pregnancy and older adults", html: `
<h3>Pregnancy</h3>
<ul><li>Admit every pregnant woman with dengue to the obstetric ward for assessment (Bhutan guideline). Pregnant women have a higher risk of severe dengue and death; two of the six deaths in 2019 were pregnant women.</li>
<li>Normal pregnancy lowers BP, raises pulse and lowers haematocrit after the second trimester — do not mistake this for shock, and get an early baseline haematocrit. Effusions and ascites are hard to detect with a gravid uterus; use ultrasound.</li>
<li>Fluids as for non-pregnant women. Withhold low-dose aspirin. Monitor vital signs 1–4-hourly, urine 4–6-hourly, haematocrit 6–12-hourly.</li>
<li><b>Avoid induction of labour or caesarean section during the critical phase</b> unless the mother's life is at risk; have blood products ready for delivery. Watch the newborn for dengue (vertical transmission) in the first 2 weeks.${r(1)}</li></ul>
<h3>Older adults</h3>
<ul><li>Atypical presentations, more organ impairment and comorbidity; less able to tolerate fluid. Admit (Group B1); smaller steps; watch for pulmonary oedema.</li></ul>
` },

{ id: "scenarios", title: "Dengue with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Heart disease", "Careful small fluid steps; stop antiplatelets/anticoagulants in the critical phase; echocardiography if available", "Pulmonary oedema"],
["Kidney disease", "Baseline RFT; strict input–output; early nephrology for oliguria with overload", "Overload in recovery phase is the main killer"],
["Chronic liver disease", "Baseline LFT/PT; minimum fluids; watch for encephalopathy", "Low albumin increases leakage"],
["Diabetes", "Switch to insulin; watch for DKA", "Stress hyperglycaemia"],
["On warfarin or DOAC", "Hold during critical phase; specialist advice", "Bleeding"],
["Co-infection (scrub typhus, malaria)", "Test and treat both", "Common in the south"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Phase", "Complications", "Management"], [
["Febrile", "Dehydration, hyponatraemia, hypoglycaemia", "Oral or IV fluids; glucose"],
["Critical", "Shock, severe bleeding, acidosis, hypocalcaemia, hepatitis, myocarditis, encephalopathy, AKI", "Shock regimen; correct metabolic problems; ICU"],
["Recovery", "Fluid overload, pulmonary oedema, hypokalaemia", "Stop IV fluids; furosemide if overloaded and BP stable; potassium"],
["Late", "Fatigue and low mood for weeks", "Reassurance"]])}
<p>With good care, the case-fatality rate is under 1% (Bhutan guideline). Most deaths follow delayed recognition of shock, fluid overload, or unrecognised bleeding.</p>
` },

{ id: "followup", title: "Follow-up, prevention and public health", html: `
<ul><li>Notify suspected and confirmed cases to RCDC through NEWARS and VDCP immediately; send RDT-positive samples to RCDC.</li>
<li>Prevention: remove water containers, tyres, flower pots and other breeding sites around homes and shops weekly; long sleeves and repellent; nets for daytime sleep (Aedes bites by day); protect the patient from bites during the febrile phase to stop spread.</li>
<li>Vaccine: TAK-003 (Qdenga) is recommended by WHO for high-transmission settings in children aged 6–16; it is not part of Bhutan's programme.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"The dangerous time is when the fever goes away — usually days 3 to 7. Come for a check and blood test every day until the doctor says you are safe."</li><li>Drink plenty: ORS, soups, juices, water. Paracetamol only — no ibuprofen, aspirin or injections.</li><li>Rest; protect yourself from mosquito bites so others do not catch it.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Tummy pain, repeated vomiting, bleeding from gums or nose, black stools, heavy periods</li><li>Drowsy, restless, cold hands and feet, dizzy on standing</li><li>No urine for 6 hours, or breathlessness</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Positive tourniquet test", src: "images/tourniquet-test.gif", mod: "Clinical photograph", ctx: "Person with dengue fever", loc: "Forearm below a BP cuff (left side of image)", find: "Many petechiae below the cuff site", signs: "Positive tourniquet test (10 or more per 2.5 cm square)", interp: "Supports dengue and capillary fragility; a negative test does not exclude it", by: "Centers for Disease Control and Prevention", page: "https://commons.wikimedia.org/wiki/File:Positive-tourniquet-test.gif", lic: "Public domain" })}
${fig({ title: "Recovery rash: islands of white in a sea of red", src: "images/dengue-rash-recovery.jpg", mod: "Clinical photograph", ctx: "Recovery phase of dengue", loc: "Legs", find: "Confluent red rash with scattered pale islands of normal skin", signs: "Convalescent dengue rash", interp: "A sign of the recovery phase — reduce and stop IV fluids; itching responds to antihistamines", by: "Ranjan Premaratna", page: "https://commons.wikimedia.org/wiki/File:Dengue_recovery_rash_(White_islands_in_red_sea).jpg", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Early dengue rash", src: "images/dengue-rash-early.jpg", mod: "Clinical photograph", ctx: "Acute febrile phase", loc: "Skin of the trunk or limbs", find: "Diffuse flushing and fine erythematous rash", signs: "Febrile-phase rash", interp: "Non-specific; consider dengue with fever, aches and falling white cells", by: "Ranjan Premaratna", page: "https://commons.wikimedia.org/wiki/File:Early_Dengue_Fever_Rash_2014.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Aedes aegypti", src: "images/aedes-aegypti.jpg", mod: "Photograph", ctx: "Dengue vector", loc: "—", find: "Small black mosquito with white bands on the legs", signs: "Day-biting Aedes mosquito", interp: "Breeds in clean standing water in containers around homes: weekly source reduction", by: "John Ragai", page: "https://commons.wikimedia.org/wiki/File:Aedes_aegypti_mosquito.jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Suspected dengue — adult", [
F.s("Fever with aches, headache, rash or bleeding; NS1/IgM; CBC with baseline haematocrit"), F.a,
F.d("Shock, severe bleeding, organ impairment, or effusion with distress?"), F.a,
F.b([["Yes", F.e("Group C: shock fluids, haematocrit, cross-match, transfer if needed")], ["No", F.d("Any warning sign?")]]), F.a,
F.b([["Yes", F.s("Group B2: admit; 5–7 → 3–5 → 2–3 mL/kg/h by haematocrit")], ["No", F.d("Special population or cannot drink / return daily?")]]), F.a,
F.b([["Yes", F.s("Group B1: admit; oral or maintenance IV")], ["No", F.ok("Group A: home, paracetamol, ORS, daily CBC")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Defervescence is the danger time</b>, not the reassurance.</li>
<li>Get a baseline haematocrit early; a rise is meaningless without it.</li>
<li>Narrowing pulse pressure comes before falling BP.</li>
<li>In shock with a falling haematocrit, think bleeding.</li>
<li>Steroids, papaya-leaf extract and IVIG have no proven benefit.${r(6)}</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Sending home on day 4 because the fever has gone", "Shock develops at home", "Daily review until past the critical phase"],
["NSAIDs, aspirin, IM injections", "Bleeding, haematomas", "Paracetamol only"],
["Platelet transfusion for a low count without bleeding", "No benefit; reactions; wasted blood", "Transfuse for bleeding"],
["Large fluid jumps or IV fluid beyond 48 h", "Pulmonary oedema", "Stepwise ladder; stop in recovery phase"],
["Mistaking normal pregnancy physiology for shock", "Unneeded fluid", "Early baseline; obstetric ward"],
["Not notifying", "Missed outbreak control", "NEWARS immediately"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name the three phases of dengue.", "Febrile, critical (around defervescence, 24–48 hours) and recovery.")}
${qa("Student", "Which test is positive in the first five days?", "NS1 antigen.")}
${qa("Intern/MO", "List five warning signs.", "Abdominal pain or tenderness, persistent vomiting, fluid accumulation, mucosal bleeding, lethargy or restlessness; also postural drop, liver over 2 cm, rising haematocrit with falling platelets.")}
${qa("Intern/MO", "What is the initial IV fluid plan for Group B2?", "Crystalloid 5–7 mL/kg/h for 1–2 h, then 3–5 for 2–4 h, then 2–3 for 2–4 h, guided by haematocrit and vital signs.")}
${qa("Intern/MO", "Define compensated dengue shock.", "Normal systolic BP with tachycardia and pulse pressure 20 mmHg or less, or cold extremities with capillary refill over 2 seconds.")}
${qa("Specialist", "A patient in shock has a falling haematocrit despite fluids. What next?", "Suspect occult bleeding: urgent packed cells 5 mL/kg or whole blood 10 mL/kg (Bhutan guideline).")}
${qa("Specialist", "What are Bhutan's discharge criteria?", "No fever for 48 hours, clinical improvement, rising platelet count, and stable haematocrit without IV fluids.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Vector-borne Disease Control Programme, Ministry of Health, Bhutan. National Guideline on Clinical Management of Dengue in Bhutan (version 1), 2020.</li>
<li id="ref-2">World Health Organization. Dengue: guidelines for diagnosis, treatment, prevention and control. Geneva: WHO; 2009. <a href="https://www.who.int/publications/i/item/9789241547871" target="_blank" rel="noopener">who.int/publications/i/item/9789241547871</a></li>
<li id="ref-3">Simmons CP, Farrar JJ, Nguyen VV, Wills B. Dengue. <i>N Engl J Med</i> 2012;366:1423–1432. <a href="https://doi.org/10.1056/NEJMra1110265" target="_blank" rel="noopener">doi:10.1056/NEJMra1110265</a></li>
<li id="ref-4">Lye DC, Archuleta S, Syed-Omar SF et al. Prophylactic platelet transfusion plus supportive care versus supportive care alone in adults with dengue and thrombocytopenia: a multicentre, open-label, randomised, superiority trial. <i>Lancet</i> 2017;389:1611–1618. <a href="https://doi.org/10.1016/S0140-6736(17)30269-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(17)30269-6</a></li>
<li id="ref-5">World Health Organization. WHO guidelines for clinical management of arboviral diseases: dengue, chikungunya, Zika and yellow fever. Geneva: WHO; 2025. <a href="https://www.who.int/publications/i/item/9789240111110" target="_blank" rel="noopener">who.int/publications/i/item/9789240111110</a></li>
<li id="ref-6">Zhang F, Kramer CV. Corticosteroids for dengue infection. <i>Cochrane Database Syst Rev</i> 2014;(7):CD003488. <a href="https://doi.org/10.1002/14651858.CD003488.pub3" target="_blank" rel="noopener">doi:10.1002/14651858.CD003488.pub3</a></li>
<li id="ref-7">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.5.8 Dengue.</li>
<li id="ref-8">National Center for Vector Borne Diseases Control, India. National guidelines for clinical management of dengue fever. <a href="https://ncvbdc.mohfw.gov.in/" target="_blank" rel="noopener">ncvbdc.mohfw.gov.in</a></li>
<li id="ref-9">Bhutan Clinical Reference app: Dengue (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan dengue guideline 2020", "<span class='pass'>Verified</span>", "Text and shock algorithms (Figures 5 and 7) read directly from the PDF"],
["Fluid steps and calculator", "<span class='pass'>Checked</span>", "Against Bhutan guideline and WHO 2009; tested"],
["WHO 2025 arboviral guideline", "<span class='flag'>Not reviewed in full</span>", "Cited; specific recommendations not checked"],
["India NCVBDC guideline edition", "<span class='flag'>Not verified</span>", "Edition and year not confirmed"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a physician or infectious-disease specialist"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY-SA 4.0 / CC BY 2.0"]], "qc")}
` }
]
});
