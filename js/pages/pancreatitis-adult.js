/* Acute pancreatitis — adults (with a children's paragraph) */
registerPage({
id: "pancreatitis-adult",
title: "Acute Pancreatitis — Adults",
subtitle: "Diagnose with two of three, grade by organ failure, give measured Ringer's lactate, feed early, withhold routine antibiotics, and treat the cause: usually alcohol or gallstones",
age: "Adults", specs: ["gi", "surg", "emerg", "medicine"],
keywords: ["acute pancreatitis", "pancreatitis", "alcoholic pancreatitis", "gallstone pancreatitis", "lipase", "amylase", "BISAP", "Atlanta classification", "Marshall score", "necrotising pancreatitis", "infected necrosis", "pseudocyst", "walled-off necrosis", "hypertriglyceridaemia pancreatitis", "Cullen sign", "Grey Turner sign", "WATERFALL", "Ringer's lactate"],
related: ["gallstones-adult", "cirrhosis-adult", "acute-abdomen-adult", "sepsis-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most acute pancreatitis is mild and settles in days; about one in five becomes severe. Good early care is simple: confirm the diagnosis, give the right amount of fluid, control pain, feed early, watch for organ failure, and remove the cause.</p>
<div class="glance">
<div><h4>Diagnosis: 2 of 3</h4><ul><li>Typical epigastric pain to the back</li><li>Lipase or amylase over 3 × normal</li><li>Typical imaging</li></ul></div>
<div><h4>Causes</h4><ul><li><b>Alcohol</b> (very common in Bhutan)</li><li><b>Gallstones</b></li><li>Triglycerides over 11 mmol/L, calcium, drugs, ERCP, trauma, worms</li></ul></div>
<div><h4>Severity</h4><p>Revised Atlanta: <b>mild</b> (no organ failure), <b>moderately severe</b> (transient organ failure or complications), <b>severe</b> (organ failure over 48 hours).</p></div>
<div><h4>Fluids</h4><p>${dr("ringer_lactate", "Ringer's lactate")}: 10 mL/kg bolus only if dry, then about <b>1.5 mL/kg/hour</b>, reassessed often. More is not better.</p></div>
<div><h4>Feed early</h4><p>Oral diet within 24–48 hours as tolerated; tube feeding (not IV nutrition) if not.</p></div>
<div><h4>No routine antibiotics</h4><p>Only for proven infection, such as infected necrosis or cholangitis.</p></div>
<div><h4>Fix the cause</h4><p>Stop alcohol; remove the gallbladder in the same admission after mild gallstone pancreatitis.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§4.1.10) gives nil by mouth, IV fluids, analgesia and referral, with lipase/amylase, calcium, lipids, liver and kidney tests and ultrasound. Since then, trials have changed two habits: <b>early feeding</b> beats prolonged fasting, and <b>moderate fluids</b> beat large volumes. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Acute inflammation of the pancreas, from premature activation of digestive enzymes inside the gland. It ranges from a few days of pain to multi-organ failure with necrosis.${r(1)}</p>
${tbl(["Cause", "Clues", "Notes"], [
["<b>Alcohol</b>", "Years of heavy drinking, often after a binge", "The leading cause among Bhutanese men; recurrent attacks lead to chronic pancreatitis"],
["<b>Gallstones</b>", "Women, older age, raised ALT (over about 150 U/L in the first 48 hours strongly suggests gallstones)", "Ultrasound in every patient"],
["Hypertriglyceridaemia", "Triglycerides over 11.3 mmol/L (1000 mg/dL); diabetes, obesity, pregnancy, alcohol", "Lipaemic blood; amylase can be falsely normal"],
["Hypercalcaemia", "Hyperparathyroidism, cancer", "Check calcium"],
["Drugs", "Azathioprine, valproate, thiazides, steroids, some HIV drugs, asparaginase", "Diagnosis of exclusion"],
["After ERCP, trauma", "Procedure or blunt injury (steering wheel, handlebar)", "—"],
["Biliary ascariasis", "Young person in an endemic area; worm in the duct on ultrasound", "See gallstones chapter"],
["Infections, autoimmune, tumour", "Mumps, viral; IgG4 disease; over 40 with no cause: pancreatic tumour", "CT or endoscopic ultrasound"]])}
<p>About 80% of attacks are mild. Mortality is under 1% in mild disease and much higher with persistent organ failure or infected necrosis.</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From enzyme activation to organ failure", [
F.s("Trigger: alcohol, a stone at the ampulla, high triglycerides, calcium"), F.a,
F.s("Trypsinogen activates inside acinar cells → self-digestion of the pancreas"), F.a,
F.s("Local inflammation → fluid shifts into the retroperitoneum (third-space losses)"), F.a,
F.d("Systemic inflammatory response (first week)"), F.a,
F.b([["Mild", F.ok("Settles in 3–7 days")], ["Severe", F.e("Lungs, kidneys, circulation fail; necrosis of the gland")]]), F.a,
F.s("Second phase (after week 1–2): fluid collections, necrosis may become infected"), F.a,
F.e("Infected necrosis, bleeding, pseudocyst")])}
<p>The disease has <b>two phases</b>: early deaths come from organ failure in the first week; later deaths from infected necrosis. That is why early care focuses on fluids and organ support, and why antibiotics are kept for proven infection.${r(1, 2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (ACG 2024, IAP/APA, WATERFALL)", "This guide"], [
["Feeding", "Nil by mouth", "Early oral feeding within 24–48 hours as tolerated; enteral rather than parenteral if not", "<b>Feed early</b>; nil by mouth only while vomiting or ileus " + LB.loc()],
["IV fluids", "NS or RL", "Ringer's lactate, moderate and goal-directed (10 mL/kg bolus if hypovolaemic, then 1.5 mL/kg/hour); aggressive fluids cause overload without benefit", "Moderate Ringer's lactate, reassessed at 3, 12, 24, 48 and 72 hours"],
["Antibiotics", "Not mentioned", "No prophylactic antibiotics, even in necrosis; treat only proven or strongly suspected infection", "As international"],
["Gallstone pancreatitis", "Refer", "ERCP within 24 hours only with cholangitis; cholecystectomy in the same admission for mild disease", "As international; refer for both"],
["India", "—", "No ICMR workflow found; Indian practice follows Atlanta and IAP/APA", "—"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Mechanism", "Clue"], [
["Severe, constant epigastric pain boring to the back", "Retroperitoneal inflammation", "Sitting forward may ease it"],
["Nausea and vomiting", "Ileus, inflammation", "Almost universal"],
["Epigastric tenderness, guarding; distension", "Peritoneal irritation, ileus", "Less rigid than a perforation"],
["Fever, tachycardia, tachypnoea", "Systemic inflammation", "SIRS that persists over 48 hours predicts severity"],
["Jaundice", "Common bile duct stone", "Think of cholangitis"],
["Flank (Grey Turner) or periumbilical (Cullen) bruising", "Retroperitoneal bleeding", "Rare, late; severe disease"],
["Hypotension, hypoxia, low urine output, confusion", "Organ failure", "Severe disease: HDU/ICU"]])}
${box("red", "Warning signs of severe disease", `<ul><li>Hypotension or rising heart rate despite fluid</li><li>SpO₂ under 94%, rising breathing rate</li><li>Urine output under 0.5 mL/kg/hour, rising creatinine or urea</li><li>Confusion</li><li>BISAP 3 or more; SIRS lasting over 48 hours; age over 60; BMI over 30</li></ul>`)}
<h3>The typical patient</h3>
<p>A 42-year-old man from Trongsa presents the morning after a festival with severe epigastric pain going through to his back and repeated vomiting. He drinks ara daily. Pulse 112, BP 118/76, temperature 37.9 °C, SpO₂ 95%. Lipase is 9 times normal, ultrasound shows no gallstones and a bulky pancreas, and urea and creatinine are normal. <b>This is acute alcohol-related pancreatitis</b>: typical pain, lipase over 3 times normal, the drinking history, and no stones. BISAP is 1 (SIRS only) and there is no organ failure: likely mild. He needs moderate Ringer's lactate, analgesia, thiamine, alcohol-withdrawal monitoring, early feeding and a firm conversation about alcohol.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["<b>Perforated peptic ulcer</b>", "Sudden pain, rigid abdomen, NSAIDs (amylase can rise)", "Lipase very high", "Erect chest X-ray, CT"],
["Acute cholecystitis", "Right upper pain, Murphy's sign", "—", "Ultrasound"],
["<b>Inferior myocardial infarction</b>", "Risk factors, sweating", "—", "<b>ECG</b>, troponin"],
["Mesenteric ischaemia", "Pain out of proportion, AF, lactate", "—", "CT angiography"],
["Ruptured aortic aneurysm", "Older man, back pain, shock", "—", "Ultrasound, CT"],
["Diabetic ketoacidosis", "Abdominal pain, vomiting, high glucose (amylase may rise)", "—", "Ketones, gas"],
["Bowel obstruction", "Colicky pain, distension, no flatus", "—", "X-ray, CT"],
["Ectopic pregnancy", "Woman of reproductive age", "—", "Pregnancy test"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Lipase</b> (or amylase)", "Diagnosis (over 3 × upper limit)", "Lipase stays raised longer and is more specific; the level does not predict severity", "Essential"],
["Full blood count, CRP", "Inflammation; CRP over 150 mg/L at 48 hours predicts severe disease", "—", "Essential"],
["<b>Urea, creatinine, electrolytes</b>", "Organ failure; BISAP; fluid response", "Rising urea in the first 24 hours is a bad sign", "Essential"],
["Liver tests", "Gallstone cause (ALT over about 150)", "—", "Essential"],
["<b>Calcium, triglycerides, glucose</b>", "Causes; low calcium in severe disease", "Triglycerides over 11.3 mmol/L is causal", "Essential"],
["Blood gas or SpO₂, lactate", "Respiratory failure, acidosis", "—", "If unwell"],
["ECG; pregnancy test", "MI mimic; pregnancy", "—", "Essential"],
["<b>Ultrasound</b> of gallbladder and ducts", "Gallstones, duct dilatation", "Every patient, in the first 24 hours", "Essential"],
["Chest X-ray", "Pleural effusion (BISAP), ARDS", "—", "Recommended"],
["CT with contrast", "Unclear diagnosis; or after 72 hours if not improving, to look for necrosis and collections", "Early CT does not change management and underestimates necrosis", "Selected"]])}
` },

{ id: "staging", title: "Predicting and grading severity", html: `
<p>BISAP in the first 24 hours flags patients who need closer watching; the Revised Atlanta classification, based on organ failure, gives the final grade.${r(1, 6)}</p>
<div class="calc" data-calc="bisap"></div>
<div class="calc" data-calc="atlanta"></div>
<h3>Refer</h3>
<ul><li><b>Immediately to a hospital with HDU/ICU</b>: any organ failure, BISAP 3 or more, or not improving at 48 hours.</li><li>To a centre with ERCP: gallstone pancreatitis with cholangitis.</li><li>To a centre with interventional radiology and pancreatic surgery: infected or symptomatic necrosis.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. First 72 hours (all patients)</h3>
<p>Adapted from the Bhutan STG and the Bhutan Clinical Reference page, updated with ACG 2024 and IAP/APA guidance.${r(7, 10, 9)}</p>
<ol><li><b>Fluids:</b> ${dr("ringer_lactate", "Ringer's lactate")}. If hypovolaemic (tachycardia, low BP, high urea, dry): 10 mL/kg over 2 hours, then <b>1.5 mL/kg/hour</b>; if not hypovolaemic, start at 1.5 mL/kg/hour without a bolus. Reassess at 3, 12, 24, 48 and 72 hours (pulse, BP, urine output, urea, haematocrit) and reduce once the patient is drinking. Large-volume ("aggressive") resuscitation caused more fluid overload with no benefit in the WATERFALL trial.${r(3)}</li>
<li><b>Analgesia:</b> ${dr("paracetamol")} regularly; ${dr("morphine")} titrated (opioids are safe in pancreatitis); NSAIDs only if kidney function is normal and there is no bleeding risk. Antiemetic: ${dr("ondansetron")}.</li>
<li><b>Monitoring:</b> pulse, BP, SpO₂, breathing rate and urine output (catheter if unwell); daily urea, creatinine, calcium, glucose; repeat organ failure assessment daily.</li>
<li><b>Oxygen</b> to keep SpO₂ 94–98%.</li>
<li><b>Feeding:</b> offer a low-fat oral diet as soon as pain and vomiting allow, usually within 24–48 hours; no need to wait for lipase to fall. If oral intake fails by about 72 hours, start nasogastric (or nasojejunal) feeding; IV nutrition only if enteral feeding is impossible.${r(2)}</li>
<li><b>Thromboprophylaxis</b> with ${dr("enoxaparin")} unless bleeding.</li>
<li><b>Alcohol:</b> ${dr("thiamine")} 100 mg three times daily (IV if vomiting) before glucose; watch for withdrawal.</li>
<li><b>No prophylactic antibiotics</b>, and no routine PPIs.</li></ol>

<h3>B. Gallstone pancreatitis</h3>
<ul><li>With <b>cholangitis</b>: antibiotics and ERCP within 24 hours (see <a href="#/d/gallstones-adult">gallstones</a>).</li>
<li>Without cholangitis: no early ERCP; MRCP or endoscopic ultrasound if a duct stone is suspected.</li>
<li><b>Mild disease: cholecystectomy during the same admission</b> once settled (reduces recurrent biliary events from about 1 in 6 to about 1 in 20; PONCHO). Severe disease with collections: delay surgery until collections resolve or for about 6 weeks.${r(5)}</li></ul>

<h3>C. Hypertriglyceridaemia</h3>
<ul><li>Fluids, analgesia, nil by mouth briefly; insulin infusion (${dr("insulin_soluble", "IV insulin")}) with dextrose lowers triglycerides, especially if glucose is high; plasmapheresis only in specialist centres.</li>
<li>Later: fibrate, diet, stop alcohol, control diabetes; aim for triglycerides under 5.6 mmol/L (500 mg/dL).</li></ul>

<h3>D. Necrosis and collections</h3>
<ul><li>Acute fluid collections and sterile necrosis usually need no intervention.</li>
<li><b>Suspect infected necrosis</b> if fever, rising CRP or deterioration after 7–10 days, or gas in the collection on CT. Treat with antibiotics that penetrate necrosis (${dr("meropenem")}, or ${dr("piptazo")}).</li>
<li><b>Step-up approach:</b> antibiotics first; then percutaneous or endoscopic drainage; necrosectomy only if needed, ideally after about 4 weeks when the necrosis is walled off.${r(4)}</li>
<li>Pseudocysts (after 4 weeks) are drained only if they cause symptoms, infection or obstruction.</li></ul>

<h3>E. Working in Bhutan</h3>
${tbl(["Situation", "What to do"], [
["BHU or PHC", "IV Ringer's lactate, analgesia, antiemetic, refer (STG)"],
["District hospital", "Lipase, ultrasound, BISAP, moderate fluids, early feeding; refer if organ failure or BISAP 3 or more"],
["Alcohol-related, recurrent", "Every admission is a chance for a brief intervention and referral to alcohol services"],
["No lipase test", "Amylase over 3 times normal with typical pain; ultrasound; treat as pancreatitis if the picture fits"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("ringer_lactate"), "10 mL/kg bolus if hypovolaemic, then 1.5 mL/kg/hour", "Reassess often; reduce when drinking"],
[dr("paracetamol"), "1 g 6-hourly; max 4 g/day", "Regular"],
[dr("morphine"), "2.5–5 mg IV titrated", "Safe in pancreatitis"],
[dr("ondansetron"), "4 mg IV 8-hourly", "Nausea"],
[dr("thiamine"), "100 mg three times daily (IV if vomiting)", "Alcohol use"],
[dr("enoxaparin"), "40 mg SC daily", "Prophylaxis"],
[dr("meropenem"), "1 g IV 8-hourly", "Proven or strongly suspected infected necrosis only"],
[dr("piptazo"), "4.5 g IV 6-hourly", "Alternative for infected necrosis"],
[dr("insulin_soluble"), "IV infusion 0.1 units/kg/hour with dextrose and glucose checks", "Hypertriglyceridaemia (specialist)"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and children", html: `
<ul><li><b>Pregnancy:</b> usually gallstones or high triglycerides, most often in the third trimester. Same supportive care; cholecystectomy in the second trimester if needed; ERCP for cholangitis with shielding. Involve obstetrics.</li>
<li><b>Older adults:</b> higher mortality; gallstones and drugs are commoner causes; over 40 with no cause, look for a pancreatic tumour.</li>
<li><b>Children:</b> diagnosis uses the same 2-of-3 rule. Causes differ: biliary disease, trauma (handlebar injury), drugs (valproate, asparaginase), viral infections (mumps), worms and congenital anomalies. Fluids at about 1.5–2 times maintenance with Ringer's lactate, early feeding, no prophylactic antibiotics. Recurrent pancreatitis in a child needs specialist work-up for genetic and anatomical causes.${r(8)}</li></ul>
` },

{ id: "scenarios", title: "Pancreatitis with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Cirrhosis or heavy drinking", "Thiamine, withdrawal monitoring, careful fluids", "See <a href=\"#/d/cirrhosis-adult\">cirrhosis</a>"],
["Heart failure or CKD", "Smaller fluid volumes, frequent review", "Fluid overload"],
["Diabetes", "Monitor glucose; insulin as needed", "Stress hyperglycaemia; triglycerides"],
["New diabetes after pancreatitis", "Screen at 3–6 months", "Pancreatogenic (type 3c) diabetes is common after severe attacks"],
["Repeated attacks", "Assess for chronic pancreatitis", "Pain, malabsorption, diabetes"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["ARDS, AKI, shock", "Organ failure scores", "HDU/ICU support"],
["Infected necrosis", "Fever and deterioration after week 1–2, gas on CT", "Antibiotics, step-up drainage"],
["Pseudocyst, walled-off necrosis", "Persistent pain, early satiety, mass after 4 weeks", "Drain if symptomatic"],
["Splenic vein thrombosis, pseudoaneurysm bleeding", "Varices, sudden bleed", "Specialist; angiography"],
["Diabetes and exocrine insufficiency", "High glucose, steatorrhoea", "Insulin; pancreatic enzymes"],
["Recurrence and chronic pancreatitis", "Repeated attacks, especially with continued drinking", "Alcohol cessation, cholecystectomy"]])}
<p>Mild pancreatitis has a mortality under 1%; severe disease with persistent organ failure can exceed 30%. Continued drinking makes recurrence very likely.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Gallstones: cholecystectomy before discharge (mild) or planned.</li>
<li>Alcohol: complete abstinence; brief intervention; offer support services.</li>
<li>Triglycerides: lipid clinic; fibrate; diabetes control.</li>
<li>Check glucose and HbA1c at 3–6 months.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Your pancreas is inflamed. Most people recover fully in a few days."</li><li>If alcohol caused it: "Even small amounts can bring it back, and each attack can be worse. Stopping completely is the best treatment."</li><li>Eat small, low-fat meals for a few weeks.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Severe pain returns, with vomiting</li><li>Fever, yellow eyes, breathlessness or feeling faint</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Acute exudative pancreatitis on CT", src: "images/pancreatitis-ct.jpg", mod: "CT abdomen with contrast, axial", ctx: "Severe epigastric pain", loc: "Pancreas and peripancreatic space", find: "Swollen pancreas with extensive fluid tracking around it", signs: "Peripancreatic fluid (acute peripancreatic fluid collection)", interp: "Acute interstitial-oedematous pancreatitis; CT is for diagnostic doubt or failure to improve after 72 hours", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Akute_exsudative_Pankreatitis_-_CT_axial.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Large pancreatic pseudocyst", src: "images/pancreatic-pseudocyst-ct.png", mod: "CT abdomen", ctx: "Weeks after pancreatitis", loc: "Near the pancreas, pressing on the left kidney's vessels", find: "Large, round, thin-walled fluid collection", signs: "Pseudocyst (over 4 weeks, encapsulated)", interp: "Drain only if it causes symptoms, infection or obstruction", by: "JasonRobertYoungMD", page: "https://commons.wikimedia.org/wiki/File:Large_Pancreatic_Pseudocyst.PNG", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Cullen's sign", src: "images/cullen-sign.jpg", mod: "Clinical photograph", ctx: "36-year-old man, four days after an alcoholic binge", loc: "Around the umbilicus", find: "Bluish bruising around the navel", signs: "Cullen's sign", interp: "Retroperitoneal bleeding tracking forward: severe, often haemorrhagic, pancreatitis", by: "Herbert L. Fred, MD and Hendrik A. van Dijk", page: "https://commons.wikimedia.org/wiki/File:Cullen%27s_sign.jpg", lic: "CC BY 2.0" })}
${fig({ title: "Grey Turner's sign", src: "images/grey-turner-sign.jpg", mod: "Clinical photograph", ctx: "40-year-old woman, five days of pain, hypotensive", loc: "Right loin", find: "Extensive bruising over the flank", signs: "Grey Turner's sign", interp: "Haemorrhagic pancreatitis: severe disease needing critical care", by: "Herbert L. Fred, MD and Hendrik A. van Dijk", page: "https://commons.wikimedia.org/wiki/File:Hemorrhagic_pancreatitis_-_Grey_Turner%27s_sign.jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Suspected acute pancreatitis", [
F.s("Typical pain → lipase, ultrasound, ECG, bloods (urea, calcium, triglycerides, LFT)"), F.a,
F.d("2 of 3 criteria met?"), F.a,
F.b([["No", F.ok("Look for other causes")], ["Yes", F.s("BISAP; organ failure check; Ringer's lactate 1.5 mL/kg/h (bolus if dry)")]]), F.a,
F.b([["No organ failure", F.s("Ward, analgesia, early feeding, treat cause")], ["Organ failure or BISAP ≥3", F.e("HDU/ICU; refer")]]), F.a,
F.d("Not improving at 72 h?"), F.a,
F.e("CT for necrosis and collections; antibiotics only if infected")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>The lipase level does not show severity</b>; organ failure does.</li>
<li>Ultrasound everyone for gallstones; an ALT over 150 in the first 48 hours points to stones.</li>
<li>Feed early: starving the pancreas does not help.</li>
<li>Check triglycerides and calcium in every first attack without stones or alcohol.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Very large fluid volumes", "Pulmonary oedema, abdominal compartment syndrome", "Moderate, goal-directed Ringer's lactate"],
["Prophylactic antibiotics", "Resistance, fungal infection, no benefit", "Antibiotics only for proven infection"],
["Prolonged nil by mouth", "Gut barrier failure, infection, malnutrition", "Early oral or tube feeding"],
["Discharging gallstone pancreatitis without cholecystectomy plan", "Recurrent pancreatitis", "Same-admission surgery when mild"],
["Early CT to 'stage' the disease", "Radiation, underestimates necrosis", "CT only for doubt or after 72 hours"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the diagnostic criteria for acute pancreatitis?", "Two of three: typical pain, lipase or amylase over three times normal, and typical imaging.")}
${qa("Student", "Name the two commonest causes.", "Alcohol and gallstones.")}
${qa("Intern/MO", "What are the components of BISAP?", "BUN over 25 mg/dL, impaired mental status, SIRS, age over 60, pleural effusion.")}
${qa("Intern/MO", "How does Revised Atlanta define severe pancreatitis?", "Organ failure (modified Marshall score 2 or more in any system) persisting more than 48 hours.")}
${qa("Intern/MO", "What fluid regimen did WATERFALL support?", "Moderate Ringer's lactate: 10 mL/kg bolus only if hypovolaemic, then 1.5 mL/kg/hour with frequent reassessment.")}
${qa("Specialist", "When are antibiotics indicated?", "Only for infected necrosis or another proven infection such as cholangitis; never as prophylaxis.")}
${qa("Specialist", "When should the gallbladder be removed after mild gallstone pancreatitis?", "During the same admission (PONCHO trial).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Banks PA, Bollen TL, Dervenis C et al. Classification of acute pancreatitis — 2012: revision of the Atlanta classification and definitions by international consensus. <i>Gut</i> 2013;62:102–111. <a href="https://doi.org/10.1136/gutjnl-2012-302779" target="_blank" rel="noopener">doi:10.1136/gutjnl-2012-302779</a></li>
<li id="ref-2">Tenner S, Vege SS, Sheth SG et al. American College of Gastroenterology guidelines: management of acute pancreatitis. <i>Am J Gastroenterol</i> 2024;119:419–437. <a href="https://doi.org/10.14309/ajg.0000000000002645" target="_blank" rel="noopener">doi:10.14309/ajg.0000000000002645</a></li>
<li id="ref-3">de-Madaria E, Buxbaum JL, Maisonneuve P et al. Aggressive or moderate fluid resuscitation in acute pancreatitis (WATERFALL). <i>N Engl J Med</i> 2022;387:989–1000. <a href="https://doi.org/10.1056/NEJMoa2202884" target="_blank" rel="noopener">doi:10.1056/NEJMoa2202884</a></li>
<li id="ref-4">van Santvoort HC, Besselink MG, Bakker OJ et al. A step-up approach or open necrosectomy for necrotizing pancreatitis (PANTER). <i>N Engl J Med</i> 2010;362:1491–1502. <a href="https://doi.org/10.1056/NEJMoa0908821" target="_blank" rel="noopener">doi:10.1056/NEJMoa0908821</a></li>
<li id="ref-5">da Costa DW, Bouwense SA, Schepers NJ et al. Same-admission versus interval cholecystectomy for mild gallstone pancreatitis (PONCHO). <i>Lancet</i> 2015;386:1261–1268. <a href="https://doi.org/10.1016/S0140-6736(15)00274-3" target="_blank" rel="noopener">doi:10.1016/S0140-6736(15)00274-3</a></li>
<li id="ref-6">Wu BU, Johannes RS, Sun X et al. The early prediction of mortality in acute pancreatitis: a large population-based study. <i>Gut</i> 2008;57:1698–1703. <a href="https://doi.org/10.1136/gut.2008.152702" target="_blank" rel="noopener">doi:10.1136/gut.2008.152702</a></li>
<li id="ref-7">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.1.10 Acute pancreatitis; National Essential Medicines List 2025.</li>
<li id="ref-8">Abu-El-Haija M, Kumar S, Quiros JA et al. Management of acute pancreatitis in the pediatric population: a clinical report from the NASPGHAN Pancreas Committee. <i>J Pediatr Gastroenterol Nutr</i> 2018;66:159–176. <a href="https://doi.org/10.1097/MPG.0000000000001715" target="_blank" rel="noopener">doi:10.1097/MPG.0000000000001715</a></li>
<li id="ref-9">Working Group IAP/APA Acute Pancreatitis Guidelines. IAP/APA evidence-based guidelines for the management of acute pancreatitis. <i>Pancreatology</i> 2013;13:e1–e15. <a href="https://doi.org/10.1016/j.pan.2013.07.063" target="_blank" rel="noopener">doi:10.1016/j.pan.2013.07.063</a></li>
<li id="ref-10">Bhutan Clinical Reference app: Acute pancreatitis (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='pass'>Verified</span>", "STG 2024 §4.1.10 (via the app's STG page)"],
["Atlanta and Marshall definitions", "<span class='pass'>Checked</span>", "Banks 2013; tested in calculator"],
["Fluids, feeding, antibiotics", "<span class='pass'>Checked</span>", "WATERFALL 2022, ACG 2024, IAP/APA 2013"],
["BISAP mortality bands", "<span class='flag'>Approximate</span>", "Shown qualitatively; exact percentages vary by cohort"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a gastroenterologist or surgeon"],
["Images", "<span class='pass'>Done</span>", "CC BY 2.0 / CC BY-SA 3.0 / 4.0"]], "qc")}
` }
]
});
