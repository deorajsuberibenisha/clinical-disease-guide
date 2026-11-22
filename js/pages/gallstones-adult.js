/* Gallstones, acute cholecystitis and acute cholangitis — adults */
registerPage({
id: "gallstones-adult",
title: "Gallstones, Cholecystitis & Cholangitis — Adults",
subtitle: "From silent stones to septic cholangitis: who needs surgery, how Tokyo 2018 grades severity, when to drain the duct, and worms in the bile duct",
age: "Adults", specs: ["surg", "gi", "emerg"],
keywords: ["gallstones", "cholelithiasis", "biliary colic", "acute cholecystitis", "cholangitis", "ascending cholangitis", "Charcot triad", "Reynolds pentad", "Murphy sign", "Tokyo guidelines", "TG18", "choledocholithiasis", "CBD stone", "common bile duct stone", "ERCP", "MRCP", "cholecystectomy", "laparoscopic cholecystectomy", "empyema gallbladder", "biliary ascariasis", "obstructive jaundice", "gallbladder cancer"],
related: ["acute-abdomen-adult", "apd-adult", "cirrhosis-adult", "sepsis-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Gallstones are common and mostly harmless. The skill is recognising the three ways they turn dangerous, cholecystitis, a stone in the bile duct, and cholangitis, and matching each to the right level of urgency.</p>
<div class="glance">
<div><h4>Biliary colic</h4><p>Constant right upper or epigastric pain for 30 minutes to a few hours, often after a fatty meal; no fever. NSAID, then elective cholecystectomy.</p></div>
<div><h4>Cholecystitis</h4><p>Pain over 6 hours, <b>fever</b>, Murphy's sign, raised white cells, thick-walled gallbladder on ultrasound.</p></div>
<div><h4>Cholangitis</h4><p><b>Fever + jaundice + right upper pain</b> (Charcot). Add confusion and shock (Reynolds): septic emergency.</p></div>
<div><h4>Grade it</h4><p>Tokyo 2018 grades I–III decide timing of surgery or drainage (calculators below).</p></div>
<div><h4>Antibiotics</h4><p>${dr("ceftriaxone")} 2 g daily ± ${dr("metronidazole")} 500 mg 8-hourly (WHO AWaRe). Bhutan STG: ampicillin 1 g 6-hourly.</p></div>
<div><h4>Definitive care</h4><p>Cholecystitis: early laparoscopic cholecystectomy. Cholangitis: <b>drain the duct</b> (ERCP) by severity.</p></div>
<div><h4>Silent stones</h4><p>Leave alone in most people.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§4.1.9) asks for nil by mouth, IV fluids, IV ampicillin, analgesia and referral, with ultrasound, blood count and liver tests. ERCP, MRCP and endoscopic ultrasound are mainly available at the national referral hospital, so patients with cholangitis or a likely duct stone usually need transfer. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What gallstones do, and who gets them", html: `
${tbl(["Condition", "What happens", "Urgency"], [
["<b>Asymptomatic gallstones</b>", "Stones found by chance; about 1–2% a year develop symptoms", "None; no surgery for most"],
["<b>Biliary colic</b>", "Stone transiently blocks the cystic duct", "Outpatient; elective surgery"],
["<b>Acute cholecystitis</b>", "Persistent cystic duct block → inflamed, then infected gallbladder", "Admit; early surgery"],
["<b>Common bile duct stone</b> (choledocholithiasis)", "Stone passes into the bile duct → jaundice, pancreatitis", "Urgent duct clearance"],
["<b>Acute cholangitis</b>", "Obstructed bile duct becomes infected → bacteraemia", "Emergency: antibiotics and drainage"],
["Gallstone pancreatitis", "Stone blocks the ampulla", "Admit (see acute pancreatitis)"],
["Empyema, gangrene, perforation", "Severe cholecystitis", "Emergency"],
["Gallstone ileus, Mirizzi syndrome", "Rare complications", "Specialist"]])}
<h3>Who gets them</h3>
<ul><li><b>Cholesterol stones</b> (most): women, increasing age, obesity, pregnancy, rapid weight loss, diabetes, family history.</li>
<li><b>Pigment stones:</b> haemolysis (thalassaemia, sickle cell disease), cirrhosis, biliary infection and parasites; this is why <b>children with thalassaemia</b> get gallstones.</li>
<li><b>Worms:</b> <i>Ascaris</i> can enter the bile duct (biliary ascariasis), causing colic, cholangitis or pancreatitis, especially in children and young adults in endemic areas.</li>
<li>Gallbladder cancer is commoner in South Asia (especially the Indo-Gangetic plain) and is linked with long-standing large stones.</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From stone to sepsis", [
F.s("Bile supersaturated with cholesterol, or pigment from haemolysis → stones form in a slow-emptying gallbladder"), F.a,
F.b([
["Cystic duct", F.s("Brief block → biliary colic"), F.s("Persistent block → chemical then bacterial inflammation → cholecystitis"), F.e("Gangrene, empyema, perforation")],
["Common bile duct", F.s("Stone migrates → jaundice, raised liver tests"), F.s("Bile stasis + bacteria (E. coli, Klebsiella, Enterococcus) → cholangitis"), F.e("Bacteraemia, septic shock, liver abscess")],
["Ampulla", F.s("Stone blocks the pancreatic duct outflow"), F.e("Acute pancreatitis")]]), F.a,
F.ok("Cholecystectomy removes the source; drainage relieves an infected duct")])}
<p>In cholangitis, raised pressure in an obstructed duct pushes bacteria and toxins straight into the blood, which is why patients can deteriorate within hours and why <b>drainage, not antibiotics alone, is the treatment</b>.${r(2, 4)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (TG18, WSES 2020, WHO AWaRe)", "This guide"], [
["Antibiotics, cholecystitis", "IV ampicillin 1 g 6-hourly", "Mild: cefuroxime or ceftriaxone (± metronidazole), or amoxicillin–clavulanate; ampicillin alone only where E. coli resistance is under 20%", "<b>Ceftriaxone 2 g daily</b> (+ metronidazole if severe, elderly or after biliary procedures); ampicillin if nothing else is available " + LB.loc()],
["Antibiotics, cholangitis", "Not covered", "Ceftriaxone + metronidazole; piperacillin–tazobactam for severe or healthcare-associated", "As international"],
["Timing of cholecystectomy", "Refer", "Early laparoscopic cholecystectomy, ideally within 72 hours and up to 7 days of admission (within 10 days of symptom onset)", "Early surgery where a surgeon is available; otherwise treat and refer"],
["Severity grading", "Not covered", "Tokyo 2018 grades I–III", "Use TG18 to decide urgency"],
["Biliary colic pain relief", "Analgesic", "NSAID first (NICE CG188)", "Diclofenac 75 mg IM if no contraindication"],
["India", "—", "No ICMR workflow found; Indian practice follows TG18", "—"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Biliary colic", "Cholecystitis", "Cholangitis"], [
["Pain", "Right upper or epigastric, constant, 30 min to a few hours, to the right shoulder blade", "Same, but over 6 hours and localising", "Right upper quadrant, may be mild"],
["Fever", "No", "Usually", "<b>High, with rigors</b>"],
["Jaundice", "No", "Mild at most", "<b>Yes</b> (dark urine, pale stools, itch)"],
["Examination", "Mild tenderness", "<b>Murphy's sign</b>, guarding, sometimes a mass", "Tender, jaundiced; hypotension and confusion if severe"],
["Bloods", "Normal", "High white cells and CRP; mild liver test rise", "High white cells; cholestatic liver tests; high bilirubin"]])}
<p><b>Murphy's sign:</b> with your hand under the right costal margin, ask the patient to breathe in; pain makes them stop as the inflamed gallbladder meets your hand (STG). <b>Charcot's triad</b> (fever, jaundice, right upper pain) is present in only about half of cholangitis; <b>Reynolds' pentad</b> adds confusion and hypotension.</p>
${box("red", "Septic cholangitis — act now", `<ul><li>Fever or rigors with jaundice</li><li>Low blood pressure, fast heart rate, confusion</li><li>Low urine output, rising creatinine</li></ul><p>Resuscitate, give antibiotics within the hour, and arrange urgent biliary drainage.</p>`)}
<h3>The typical patient</h3>
<p>A 46-year-old woman from Thimphu, overweight and with three children, has had right upper abdominal pain for 18 hours after a meal of fried meat, with vomiting and a temperature of 38.4 °C. Murphy's sign is positive; there is no jaundice. White cells are 14, CRP 90, bilirubin normal. Ultrasound shows stones, a 5 mm gallbladder wall and fluid around it. <b>This is acute calculous cholecystitis, Tokyo grade I</b>: classic risk profile, pain longer than colic with fever, and typical ultrasound, but no grade II or III features. She needs antibiotics, analgesia and early laparoscopic cholecystectomy during this admission.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Peptic ulcer or perforation", "Epigastric pain, NSAIDs, sudden onset", "Murphy's sign, stones on ultrasound", "Erect chest X-ray, endoscopy"],
["Acute pancreatitis", "Pain to the back, vomiting, alcohol or gallstones", "—", "Lipase or amylase over 3 times normal"],
["Acute hepatitis", "Prodrome, very high ALT, tender liver", "Normal gallbladder", "Liver tests, viral markers"],
["Liver abscess", "Fever, tender liver, weight loss", "—", "Ultrasound"],
["Right lower lobe pneumonia", "Cough, crackles, hypoxia", "—", "Chest X-ray"],
["<b>Inferior myocardial infarction</b>", "Older, diabetic, sweating", "—", "<b>ECG</b>, troponin"],
["Renal colic, pyelonephritis", "Loin pain, urinary symptoms", "—", "Urine, ultrasound"],
["Fitz-Hugh–Curtis syndrome", "Young woman, pelvic infection", "—", "Pelvic examination, swabs"],
["Obstructive jaundice from cancer", "Painless jaundice, weight loss, palpable gallbladder (Courvoisier)", "Pain and fever", "Ultrasound, CT"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Full blood count, CRP", "Inflammation; TG18 criteria", "White cells over 18 = grade II cholecystitis", "Essential"],
["<b>Liver tests</b> (bilirubin, ALP, GGT, AST, ALT)", "Duct stone, cholangitis", "Cholestatic pattern; very high ALT early in duct obstruction", "Essential"],
["Lipase or amylase", "Gallstone pancreatitis", "—", "Essential"],
["Creatinine, electrolytes, INR, platelets, albumin, lactate", "Organ dysfunction (grade III), grade II cholangitis", "—", "Essential if unwell"],
["Blood cultures", "Cholangitis, severe cholecystitis", "Before antibiotics if it causes no delay", "Essential if febrile"],
["Pregnancy test", "Women of reproductive age", "—", "Essential"],
["ECG", "Inferior MI mimic", "Over 40 or cardiac risk", "Recommended"],
["<b>Ultrasound of liver, gallbladder and ducts</b>", "Stones, wall thickening over 4 mm, pericholecystic fluid, sonographic Murphy's sign, duct dilatation (over 6 mm), worms in the duct", "Best first test; available at district level", "Essential"],
["MRCP or endoscopic ultrasound", "Intermediate risk of duct stone", "Referral hospital", "Selected"],
["CT abdomen", "Complications (gangrene, perforation, abscess), unclear diagnosis, suspected cancer", "Misses many stones", "Selected"],
["ERCP", "Diagnosis and treatment of duct stones and cholangitis", "Therapeutic, not just diagnostic", "When indicated"]])}
` },

{ id: "staging", title: "Grading severity and choosing the next step", html: `
<p>Tokyo 2018 grades guide the timing of surgery and drainage; the ASGE risk tool decides who needs duct imaging or ERCP.${r(1, 2, 6)}</p>
<div class="calc" data-calc="tg18cholecystitis"></div>
<div class="calc" data-calc="tg18cholangitis"></div>
<div class="calc" data-calc="cbdrisk"></div>
<h3>Refer</h3>
<ul><li><b>Immediately:</b> cholangitis of any grade, grade III cholecystitis, and any patient with sepsis, after resuscitation and antibiotics.</li><li><b>Urgently:</b> cholecystitis where no surgeon is available; jaundice with a dilated duct or high-risk ASGE findings.</li><li><b>Routine surgical clinic:</b> biliary colic, after first-attack pain relief.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Biliary colic</h3>
<p>Built on the Bhutan STG and the Bhutan Clinical Reference pages, with NICE and Tokyo 2018 guidance.${r(8, 10, 7)}</p>
<ul><li>${dr("diclofenac")} 75 mg IM (or ${dr("paracetamol")} 1 g, then ${dr("morphine")} if needed). Discharge when pain-free and observations are normal.</li>
<li>Refer for <b>elective laparoscopic cholecystectomy</b>; until then, smaller low-fat meals may reduce attacks.</li>
<li>Check liver tests: abnormal results raise the possibility of a duct stone (use the ASGE tool).</li>
<li>Asymptomatic stones: no surgery, except selected cases (porcelain gallbladder, polyp 10 mm or more, very large stones, or haemolytic disease where stones are common).</li></ul>

<h3>B. Acute cholecystitis</h3>
<ol><li>Nil by mouth initially; IV fluids (${dr("ringer_lactate", "Ringer's lactate")}); analgesia (diclofenac, paracetamol, morphine); antiemetic.</li>
<li><b>Antibiotics:</b> ${dr("ceftriaxone")} 2 g IV daily; add ${dr("metronidazole")} 500 mg 8-hourly in grade III, elderly, or after previous biliary procedures. STG alternative: ${dr("ampicillin")} 1 g IV 6-hourly. Grade III or hospital-acquired: ${dr("piptazo")} 4.5 g 6-hourly.${r(9, 11)}</li>
<li><b>Early laparoscopic cholecystectomy</b> (grade I and fit grade II), ideally within 72 hours of admission and within 7–10 days of onset; it shortens stay and reduces readmission compared with waiting 6–12 weeks.${r(3, 5)}</li>
<li>Unfit for surgery or not improving: <b>percutaneous cholecystostomy</b> (ultrasound-guided drainage), then delayed surgery.</li>
<li>After uncomplicated cholecystectomy, stop antibiotics within 24 hours; continue 4–7 days if there was gangrene, perforation or abscess.</li></ol>

<h3>C. Acute cholangitis</h3>
<ol><li><b>Resuscitate</b> as for sepsis (see <a href="#/d/sepsis-adult">sepsis</a>); blood cultures; antibiotics within the hour if shocked.</li>
<li><b>Antibiotics:</b> ${dr("ceftriaxone")} 2 g IV daily + ${dr("metronidazole")} 500 mg IV 8-hourly, or ${dr("coamoxiclav")} 1.2 g IV 8-hourly; severe or healthcare-associated: ${dr("piptazo")}.</li>
<li><b>Biliary drainage by grade:</b> urgent (as soon as stable) in grade III; early (within 24–48 hours) in grade II; if no response within 24 hours in grade I. ERCP with sphincterotomy and stone extraction or a stent is first choice; percutaneous drainage if ERCP fails or is unavailable.${r(4)}</li>
<li>Continue antibiotics 4–7 days after drainage; plan cholecystectomy during the same admission or soon after if stones remain in the gallbladder.</li></ol>

<h3>D. Biliary ascariasis</h3>
<ul><li>Ultrasound shows a long echogenic strip (sometimes moving) in the duct.</li>
<li>Conservative care first: nil by mouth, IV fluids, analgesia, antibiotics if cholangitis; most worms leave the duct within days.</li>
<li>${dr("albendazole")} 400 mg once the acute episode settles; ERCP extraction if the worm stays beyond about 3 days, or with cholangitis or pancreatitis that does not settle.</li></ul>

<h3>E. Working in Bhutan</h3>
${tbl(["Situation", "What to do"], [
["BHU or PHC", "Analgesia, IV fluids, first antibiotic dose if febrile, refer (STG)"],
["District hospital", "Ultrasound, liver tests, TG18 grade; cholecystitis can be treated with antibiotics if no surgeon, but refer for surgery; any cholangitis: transfer"],
["Cholangitis far from ERCP", "Antibiotics and resuscitation before and during transfer; percutaneous drainage at a regional hospital if ERCP is delayed and the patient is deteriorating"],
["Thalassaemia with gallstones", "Haematology and surgical review; cholecystectomy is often advised"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("diclofenac"), "75 mg IM once (max 150 mg/day)", "First-line for colic; avoid in CKD, ulcer, late pregnancy"],
[dr("paracetamol"), "1 g 6-hourly; max 4 g/day", "Add-on analgesia"],
[dr("morphine"), "2.5–5 mg IV titrated", "Severe pain; does not worsen outcomes"],
[dr("ceftriaxone"), "2 g IV once daily", "First-line antibiotic"],
[dr("metronidazole"), "500 mg IV 8-hourly", "Severe, elderly, post-procedure"],
[dr("coamoxiclav"), "1.2 g IV 8-hourly", "Alternative"],
[dr("ampicillin"), "1 g IV 6-hourly (STG)", "Weak against many E. coli"],
[dr("piptazo"), "4.5 g IV 6-hourly", "Grade III, hospital-acquired"],
[dr("albendazole"), "400 mg once (after the acute episode)", "Biliary ascariasis"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and children", html: `
<ul><li><b>Pregnancy:</b> gallstone disease is the second commonest non-obstetric surgical problem. Ultrasound is safe. Laparoscopic cholecystectomy can be done in any trimester (second trimester is easiest); conservative treatment carries a high relapse rate. ERCP is possible with lead shielding and minimal screening.</li>
<li><b>Older adults:</b> fewer signs, more gangrene and cholangitis; lower threshold for CT and drainage. Acalculous cholecystitis occurs in critically ill, ventilated or post-operative patients.</li>
<li><b>Children:</b> gallstones suggest haemolysis (thalassaemia, hereditary spherocytosis) and need haematology review; biliary ascariasis is commoner in children. Ceftriaxone 80 mg/kg daily + metronidazole 7.5 mg/kg 8-hourly for cholangitis.</li></ul>
` },

{ id: "scenarios", title: "Gallstones with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Cirrhosis", "Higher surgical risk; avoid NSAIDs; correct clotting; consider drainage rather than surgery", "See <a href=\"#/d/cirrhosis-adult\">cirrhosis</a>"],
["Diabetes", "More gangrene and emphysematous cholecystitis; monitor glucose", "Infection and neuropathy mask signs"],
["CKD", "Avoid diclofenac; adjust antibiotic doses", "Kidney injury"],
["Anticoagulants", "Plan reversal before surgery or ERCP", "Bleeding with sphincterotomy"],
["Jaundice with weight loss and no pain", "CT for pancreatic or bile duct cancer", "Not a stone until proven"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Gangrene, empyema, perforation", "Severe pain, high fever, peritonism, sepsis", "Antibiotics, urgent surgery or drainage"],
["Septic shock from cholangitis", "Hypotension, confusion", "Resuscitation, urgent drainage"],
["Gallstone pancreatitis", "Pain to the back, high lipase", "Supportive care; ERCP if cholangitis; cholecystectomy in the same admission once mild pancreatitis settles"],
["Liver abscess", "Persistent fever, tender liver", "Drainage, prolonged antibiotics"],
["Bile duct injury after cholecystectomy", "Jaundice, bile leak, pain after surgery", "Urgent hepatobiliary referral"],
["Gallbladder cancer", "Found at surgery or histology", "Specialist oncology"]])}
<p>Mortality from mild cholecystitis is very low; severe cholangitis carries a mortality of around 5–10% or more, falling sharply with timely drainage.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>After cholecystectomy: normal diet; loose stools for a few weeks in some people.</li>
<li>Read the histology for unexpected gallbladder cancer.</li>
<li>After ERCP alone: plan cholecystectomy, otherwise about 1 in 5 return with further biliary problems.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Gallstones are common. Ones that cause no trouble can be left alone; once they cause pain or infection, removing the gallbladder is the cure, and you can live normally without it."</li><li>Smaller, lower-fat meals may reduce attacks while you wait for surgery.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fever or shivering with pain</li><li>Yellow eyes or skin, dark urine, pale stools</li><li>Pain lasting more than 6 hours, or vomiting that will not stop</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Gallstone impacted in the gallbladder neck", src: "images/gallstone-impacted-us.png", mod: "Ultrasound", ctx: "Right upper quadrant pain", loc: "Gallbladder neck", find: "A 1.9 cm echogenic stone with an acoustic shadow, and a 4 mm thick gallbladder wall", signs: "Impacted stone, wall thickening", interp: "Gallstone obstruction causing acute cholecystitis", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Gallstones.PNG", lic: "CC BY-SA 3.0" })}
${fig({ title: "Acute cholecystitis on ultrasound", src: "images/cholecystitis-us.jpg", mod: "Ultrasound, axial", ctx: "Fever and right upper pain", loc: "Gallbladder", find: "Thickened wall with stones inside casting posterior shadows", signs: "Wall over 4 mm, stones, (sonographic Murphy's sign at the time)", interp: "Acute calculous cholecystitis (TG18 imaging criterion C)", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Acute_cholecystitis_as_seen_on_ultrasound_axial_view.jpg", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Common bile duct stone on ultrasound", src: "images/cbd-stone-us.jpg", mod: "Ultrasound", ctx: "Previous colicky pain", loc: "Common bile duct (arrow)", find: "Mildly dilated duct with an echogenic stone", signs: "Choledocholithiasis", interp: "ASGE high-risk feature: duct clearance by ERCP", by: "Mikael Häggström, M.D.", page: "https://commons.wikimedia.org/wiki/File:Ultrasonography_of_common_bile_duct_stone,_with_arrow.jpg", lic: "CC0" })}
${fig({ title: "Stones in the gallbladder and bile duct on MRCP", src: "images/mrcp-cbd-stones.jpg", mod: "MRCP", ctx: "Suspected duct stones", loc: "Gallbladder (a), common bile duct (b), pancreatic duct (c), duodenum (d)", find: "Dark filling defects in the bright gallbladder and common bile duct", signs: "Cholelithiasis with choledocholithiasis", interp: "Duct stones confirmed without radiation: plan ERCP then cholecystectomy", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:MRCP_Choledocholithiasis.jpg", lic: "CC BY-SA 3.0" })}
</div>
<div class="pair">
${fig({ title: "Gallstones removed at surgery", src: "images/gallstones-photo.jpg", mod: "Photograph", ctx: "Stones from one patient (grid 1 mm)", loc: "Gallbladder contents", find: "Many faceted stones of different sizes", interp: "Multiple small stones are the ones most likely to pass into the bile duct", by: "George Chernilevsky", page: "https://commons.wikimedia.org/wiki/File:Human_gallstones_2015_G1.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "How ERCP works", src: "images/ercp-diagram.svg", mod: "Diagram", ctx: "Endoscopic retrograde cholangiopancreatography", loc: "Endoscope in the duodenum, cannula in the ampulla", find: "A side-viewing endoscope passes through the mouth and stomach to the duodenum; dye or instruments enter the bile duct", interp: "Allows sphincterotomy, stone extraction and stenting: the main treatment for cholangitis", by: "Cancer Research UK", page: "https://commons.wikimedia.org/wiki/File:Detailed_diagram_of_an_endoscopic_retrograde_cholangio_pancreatography_(ERCP)_CRUK_001.svg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Right upper quadrant pain", [
F.s("History, examination, FBC, CRP, liver tests, lipase, ultrasound, ECG, pregnancy test"), F.a,
F.d("Fever with jaundice?"), F.a,
F.b([["Yes", F.e("Cholangitis: resuscitate, antibiotics, grade (TG18), drain duct by grade")], ["No", F.d("Fever, Murphy's sign, thick wall?")]]), F.a,
F.b([["Yes", F.s("Cholecystitis: grade (TG18), antibiotics, early lap cholecystectomy or drainage")], ["No", F.ok("Biliary colic: NSAID, ASGE duct-stone risk, elective surgery")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Fever + jaundice = cholangitis</b> until proven otherwise; drainage is the cure.</li>
<li>Biliary colic is constant, not colicky; pain over 6 hours suggests cholecystitis.</li>
<li>Always do an ECG in an older or diabetic patient with "gallbladder pain".</li>
<li>Gallstones in a child: look for haemolysis.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating cholangitis with antibiotics alone", "Persistent sepsis and death", "Early drainage by TG18 grade"],
["Cholecystectomy for silent stones", "Surgical risk without benefit", "Operate on symptoms or specific risks"],
["Delaying surgery 6–12 weeks routinely", "Readmissions and complications", "Early laparoscopic cholecystectomy"],
["Missing a duct stone before cholecystectomy", "Retained stone, cholangitis", "Liver tests and ASGE risk"],
["Diclofenac in kidney disease or late pregnancy", "AKI, fetal harm", "Paracetamol or morphine instead"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is Charcot's triad?", "Fever, jaundice and right upper quadrant pain: acute cholangitis.")}
${qa("Student", "What is Murphy's sign?", "Pain stops a deep breath when the inflamed gallbladder descends onto the examiner's hand under the right costal margin.")}
${qa("Intern/MO", "What makes acute cholecystitis Tokyo grade II?", "Any of: white cells over 18, a palpable tender mass, symptoms over 72 hours, or marked local inflammation (gangrene, abscess, biliary peritonitis, emphysematous cholecystitis).")}
${qa("Intern/MO", "What antibiotic does the Bhutan STG give for acute cholecystitis?", "IV ampicillin 1 g 6-hourly.")}
${qa("Specialist", "When is biliary drainage needed in cholangitis?", "Urgently in grade III after resuscitation, early in grade II, and in grade I if there is no response to antibiotics within 24 hours.")}
${qa("Specialist", "Which ASGE findings mean high risk of a duct stone?", "A duct stone on imaging, bilirubin over 4 mg/dL with a dilated duct, or acute cholangitis.")}
${qa("Viva", "Why do children with thalassaemia get gallstones?", "Chronic haemolysis increases bilirubin, forming pigment stones.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Yokoe M, Hata J, Takada T et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. <i>J Hepatobiliary Pancreat Sci</i> 2018;25:41–54. <a href="https://doi.org/10.1002/jhbp.515" target="_blank" rel="noopener">doi:10.1002/jhbp.515</a></li>
<li id="ref-2">Kiriyama S, Kozaka K, Takada T et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. <i>J Hepatobiliary Pancreat Sci</i> 2018;25:17–30. <a href="https://doi.org/10.1002/jhbp.512" target="_blank" rel="noopener">doi:10.1002/jhbp.512</a></li>
<li id="ref-3">Okamoto K, Suzuki K, Takada T et al. Tokyo Guidelines 2018: flowchart for the management of acute cholecystitis. <i>J Hepatobiliary Pancreat Sci</i> 2018;25:55–72. <a href="https://doi.org/10.1002/jhbp.516" target="_blank" rel="noopener">doi:10.1002/jhbp.516</a></li>
<li id="ref-4">Miura F, Okamoto K, Takada T et al. Tokyo Guidelines 2018: initial management of acute biliary infection and flowchart for acute cholangitis. <i>J Hepatobiliary Pancreat Sci</i> 2018;25:31–40. <a href="https://doi.org/10.1002/jhbp.509" target="_blank" rel="noopener">doi:10.1002/jhbp.509</a></li>
<li id="ref-5">Pisano M, Allievi N, Gurusamy K et al. 2020 World Society of Emergency Surgery updated guidelines for the diagnosis and treatment of acute calculus cholecystitis. <i>World J Emerg Surg</i> 2020;15:61. <a href="https://doi.org/10.1186/s13017-020-00336-x" target="_blank" rel="noopener">doi:10.1186/s13017-020-00336-x</a></li>
<li id="ref-6">Buxbaum JL, Abbas Fehmi SM, Sultan S et al. ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. <i>Gastrointest Endosc</i> 2019;89:1075–1105. <a href="https://doi.org/10.1016/j.gie.2018.10.001" target="_blank" rel="noopener">doi:10.1016/j.gie.2018.10.001</a></li>
<li id="ref-7">National Institute for Health and Care Excellence. Gallstone disease: diagnosis and management (CG188). 2014. <a href="https://www.nice.org.uk/guidance/cg188" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-8">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.1.9 Acute cholecystitis; National Essential Medicines List 2025.</li>
<li id="ref-9">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) antibiotic book. Geneva: WHO; 2022 (acute cholecystitis and cholangitis). <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-10">Bhutan Clinical Reference app: Gallstones; Acute cholecystitis; Acute cholangitis (topic pages, Nov 2026).</li>
<li id="ref-11">Gomi H, Solomkin JS, Schlossberg D et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. <i>J Hepatobiliary Pancreat Sci</i> 2018;25:3–16. <a href="https://doi.org/10.1002/jhbp.518" target="_blank" rel="noopener">doi:10.1002/jhbp.518</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and NEML content", "<span class='pass'>Verified</span>", "STG 2024 §4.1.9 read directly"],
["TG18 criteria and grades", "<span class='pass'>Checked</span>", "Yokoe 2018, Kiriyama 2018; tested in calculators"],
["ASGE duct-stone risk", "<span class='pass'>Checked</span>", "Buxbaum 2019"],
["Local ERCP availability", "<span class='flag'>Local check</span>", "Confirm current ERCP and MRCP services in Bhutan"],
["Images", "<span class='pass'>Done</span>", "CC0 / CC BY-SA 3.0 / 4.0"]], "qc")}
` }
]
});
