/* Acute abdomen: bowel obstruction and perforation — adults */
registerPage({
id: "acute-abdomen-adult",
title: "Acute Abdomen: Bowel Obstruction & Perforation — Adults",
subtitle: "Resuscitate first, find the surgical abdomen, decompress, and decide early: adhesions, hernias, volvulus, TB, perforated ulcer and typhoid perforation",
age: "Adults", specs: ["surg", "emerg", "gi"],
keywords: ["acute abdomen", "intestinal obstruction", "bowel obstruction", "small bowel obstruction", "SBO", "large bowel obstruction", "subacute intestinal obstruction", "SAIO", "adhesions", "sigmoid volvulus", "volvulus", "strangulated hernia", "perforation", "perforated peptic ulcer", "hollow viscus perforation", "peritonitis", "typhoid perforation", "abdominal tuberculosis", "drip and suck", "Gastrografin", "Boey", "pseudo-obstruction", "mesenteric ischaemia", "laparotomy"],
related: ["appendicitis-adult", "acute-abdomen-child", "apd-adult", "sepsis-adult", "ugib-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">The acute abdomen rewards a simple discipline: resuscitate, relieve pain, decompress the stomach, look for the few signs that mean "operate now", and get a surgeon involved early. Most deaths come from delay, not from the disease itself.</p>
<div class="glance">
<div><h4>Obstruction: four features</h4><ul><li>Colicky pain</li><li>Vomiting (bilious or faeculent)</li><li>Distension</li><li>No stool or flatus</li></ul></div>
<div><h4>Perforation</h4><ul><li>Sudden severe pain</li><li>Lies still, rigid abdomen</li><li>Free gas on erect chest X-ray (absent in up to a quarter)</li></ul></div>
<div><h4>Operate now</h4><p>Peritonitis, strangulation (constant pain, fever, tachycardia, rising lactate), closed loop, irreducible hernia, perforation.</p></div>
<div><h4>Drip and suck</h4><p>Nil by mouth, <b>NG tube</b>, IV fluids with potassium, catheter and fluid chart. Adhesive obstruction without strangulation: up to 72 hours of observation.</p></div>
<div><h4>Antibiotics</h4><p>Peritonitis or perforation: ${dr("ceftriaxone")} + ${dr("metronidazole")} (or STG ampicillin + metronidazole); about 4 days after source control.</p></div>
<div><h4>Always check</h4><p>Hernial orifices, scars, rectal examination, pregnancy test, ECG over 40, potassium.</p></div>
<div><h4>Bhutan causes to remember</h4><p>Sigmoid volvulus, abdominal TB, typhoid ileal perforation, worms.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG asks every facility to keep the patient nil by mouth, start IV fluids and IV ampicillin (with metronidazole for peritonitis), give analgesia, and refer. Insert a nasogastric tube before a long journey; a patient vomiting on a mountain road can aspirate. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it covers, causes and who is at risk", html: `
<p>This chapter covers <b>mechanical bowel obstruction</b> and <b>perforation of a hollow organ</b>, the two commonest reasons for an emergency laparotomy. Appendicitis, gallbladder disease and pancreatitis have their own chapters.</p>
${tbl(["Group", "Common causes", "Bhutan and South Asia"], [
["<b>Small bowel obstruction</b>", "Adhesions after previous surgery (the commonest cause worldwide), hernias (inguinal, femoral, umbilical, incisional), tumours, Crohn's disease", "<b>Abdominal TB</b> (ileocaecal strictures, the classic cause of recurrent subacute obstruction), worm bolus (Ascaris), obstructed hernias in men doing heavy work"],
["<b>Large bowel obstruction</b>", "Colorectal cancer, volvulus, diverticular stricture, faecal impaction", "<b>Sigmoid volvulus</b> is common in highland populations (the 'volvulus belt' includes the Himalaya), linked with high-fibre diets and chronic constipation"],
["<b>Perforation</b>", "Perforated peptic ulcer (NSAIDs, H. pylori, smoking), perforated appendix or diverticulum, cancer, trauma, foreign body", "<b>Typhoid ileal perforation</b> in the second to third week of fever; NSAID and alcohol-related ulcer perforation"],
["<b>Functional (not mechanical)</b>", "Paralytic ileus after surgery, hypokalaemia, opioids, sepsis; colonic pseudo-obstruction (Ogilvie)", "Low potassium from vomiting or diarrhoea"]])}
<p><b>Who does badly:</b> older adults, those with heart, lung or kidney disease, cirrhosis, delayed presentation over 24 hours, shock on arrival, and anyone transferred without resuscitation.</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("What happens when the bowel is blocked", [
F.s("Blockage: adhesion band, hernia neck, tumour, twist, stricture"), F.a,
F.s("Bowel above dilates with gas and secretions (up to 8–10 L of gut secretions a day)"), F.a,
F.b([["Fluid", F.s("Vomiting + fluid sequestered in the bowel wall and lumen → dehydration, low K⁺, metabolic alkalosis or acidosis, AKI")], ["Wall", F.s("Pressure rises → venous congestion → arterial inflow fails")]]), F.a,
F.d("Strangulation or closed loop"), F.a,
F.e("Ischaemia → gangrene → perforation → peritonitis and septic shock"), F.a,
F.ok("Decompression, fluids and timely surgery break the cycle")])}
<p><b>Closed-loop obstruction</b> (a segment blocked at both ends, as in volvulus or a hernia) is the most dangerous: it can strangulate within hours. In large bowel obstruction with a competent ileocaecal valve, the caecum acts as a closed loop; a caecal diameter over about 12 cm risks perforation.</p>
<p><b>Perforation</b> releases gastric acid or faeces into the peritoneum. Chemical peritonitis from a perforated ulcer becomes bacterial within 6–12 hours; each hour of delay to surgery adds to mortality, which is why the time from perforation to theatre matters more than any score.${r(2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (WSES, WHO AWaRe)", "This guide"], [
["Empirical antibiotics", "Acute abdomen: IV ampicillin 1 g 6-hourly. Peritonitis: ampicillin + metronidazole 500 mg 8-hourly", "Community-acquired intra-abdominal infection: ceftriaxone (or cefotaxime) + metronidazole, or amoxicillin–clavulanate; piperacillin–tazobactam if critically ill", "<b>Ceftriaxone 2 g daily + metronidazole 500 mg 8-hourly</b> for peritonitis or perforation (NEML). Simple obstruction without peritonitis needs no antibiotics " + LB.loc()],
["Imaging", "Erect and supine abdominal X-ray; ultrasound", "CT abdomen is the test of choice for obstruction and perforation", "X-ray and ultrasound everywhere; CT at referral hospitals, especially to look for strangulation or the cause"],
["Adhesive small bowel obstruction", "Not detailed", "Non-operative care up to 72 hours if no strangulation; water-soluble contrast predicts resolution and shortens stay", "As WSES; give Gastrografin where available"],
["Antibiotic duration", "Not specified", "About 4 days after adequate source control (STOP-IT)", "As international"],
["India", "—", "No ICMR standard treatment workflow for bowel obstruction or perforation was found", "—"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Small bowel obstruction", "Large bowel obstruction", "Perforation"], [
["Onset", "Hours", "Days", "Sudden, often to the minute"],
["Pain", "Colicky, central; constant if strangulated", "Lower abdominal, colicky", "Severe, constant, spreads across the abdomen; shoulder-tip pain"],
["Vomiting", "Early, bilious, later faeculent", "Late or absent", "Common"],
["Distension", "Moderate (less in high obstruction)", "Marked", "Rigid rather than distended"],
["Stool and flatus", "Absent (may pass some early)", "Absent", "Variable"],
["Bowel sounds", "High-pitched, tinkling; absent late", "Increased early", "Absent"],
["Examination", "Scars, hernias, tenderness", "Tympanitic, empty rectum, mass", "Lies still, board-like rigidity, guarding"]])}
${box("red", "Strangulation or peritonitis — operate now", `<ul><li>Pain that becomes constant, or is out of proportion to the findings</li><li>Fever, tachycardia, hypotension</li><li>Localised tenderness, guarding or rebound</li><li>Rising white count, lactate or CRP; metabolic acidosis</li><li>Irreducible, tender hernia</li><li>CT: poor bowel wall enhancement, mesenteric fluid, closed loop, free gas</li></ul>`)}
<h3>The typical patient</h3>
<p>A 68-year-old farmer from Bumthang has had increasing abdominal distension for two days, has not passed stool or wind, and vomited once today. He has had similar milder episodes that settled. His abdomen is hugely distended and tympanitic with mild tenderness; the rectum is empty. The abdominal X-ray shows a large inverted-U loop rising from the pelvis. <b>This is sigmoid volvulus</b>: an older highlander with chronic constipation, gross distension with little vomiting, previous self-limiting attacks, and the classic film. He needs resuscitation, endoscopic (sigmoidoscopic) decompression with a flatus tube, and planned sigmoid resection during the same admission because recurrence is common.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Paralytic ileus", "After surgery, low potassium, opioids, sepsis; quiet abdomen", "Colicky pain, transition point", "Electrolytes; CT"],
["Colonic pseudo-obstruction (Ogilvie)", "Older, bed-bound, after surgery or illness; massive colonic dilatation", "Mechanical cause on imaging", "CT or contrast enema"],
["Acute pancreatitis", "Epigastric pain to the back, alcohol, gallstones", "—", "Lipase or amylase over 3 times normal"],
["<b>Mesenteric ischaemia</b>", "Pain out of proportion to signs, atrial fibrillation, older, high lactate", "—", "CT angiography"],
["<b>Ruptured abdominal aortic aneurysm</b>", "Older man, back pain, pulsatile mass, shock", "—", "Bedside ultrasound, CT"],
["<b>Ectopic pregnancy</b>", "Woman of reproductive age, missed period, shock", "Negative hCG", "Pregnancy test, ultrasound"],
["Inferior myocardial infarction", "Epigastric pain, sweating, diabetes", "—", "ECG, troponin"],
["Diabetic ketoacidosis", "Vomiting, abdominal pain, high glucose, ketones", "—", "Glucose, ketones, gas"],
["Gastroenteritis", "Diarrhoea, crampy diffuse pain", "Absolute constipation, distension", "Observation"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Full blood count, CRP", "Infection, strangulation", "Rising values on repeat suggest ischaemia", "Essential"],
["<b>Urea, creatinine, sodium, potassium</b>", "Dehydration, AKI, hypokalaemia (causes and worsens ileus)", "Repeat daily while on IV fluids", "Essential"],
["Venous blood gas and <b>lactate</b>", "Ischaemia, sepsis", "A normal lactate does not exclude strangulation", "Essential if unwell"],
["Lipase or amylase", "Pancreatitis; raised in perforation and ischaemia too", "—", "Essential"],
["Glucose, LFTs, group and save, clotting", "Theatre; DKA", "—", "Essential"],
["Pregnancy test", "Ectopic; drug and imaging choices", "Every woman of reproductive age", "Essential"],
["ECG", "MI mimic; atrial fibrillation (mesenteric embolus)", "Over 40 or cardiac history", "Recommended"],
["<b>Erect chest X-ray</b>", "Free gas under the diaphragm", "Sit upright for 10 minutes first; misses up to a quarter of perforations", "Essential if perforation suspected"],
["<b>Abdominal X-ray</b> (supine; erect or decubitus)", "Dilated loops (small bowel over 3 cm, colon over 6 cm, caecum over 9 cm), fluid levels, volvulus", "Normal film does not exclude obstruction", "Essential"],
["Ultrasound", "Fluid-filled dilated loops, free fluid, hernias, gallstones, ectopic", "Useful at district level", "Recommended"],
["<b>CT abdomen-pelvis with IV contrast</b>", "Confirms obstruction, finds the transition point and cause, shows strangulation and perforation", "Sensitivity over 90% for obstruction and perforation", "Referral hospitals"],
["Water-soluble contrast (Gastrografin) follow-through", "Adhesive SBO: contrast in the colon within 24 hours predicts resolution", "Also therapeutic", "Where available"]])}
` },

{ id: "staging", title: "Severity, scores and when to refer", html: `
<h3>Perforated peptic ulcer: the Boey score</h3>
<p>Three bedside factors predict death after a perforated ulcer.${r(6, 2)}</p>
<div class="calc" data-calc="boey"></div>
<h3>Bowel obstruction: decide where the patient belongs</h3>
${tbl(["Picture", "Plan"], [
["Peritonitis, strangulation signs, closed loop, irreducible hernia, perforation", "<b>Emergency surgery</b> after rapid resuscitation"],
["Large bowel obstruction or volvulus", "Urgent surgical team; endoscopic decompression for sigmoid volvulus without peritonitis"],
["Adhesive small bowel obstruction, no danger signs", "Non-operative trial up to 72 hours with Gastrografin; operate if no progress"],
["Recurrent subacute obstruction with weight loss, fever or TB contact", "Investigate for abdominal TB (ultrasound, CT, chest X-ray, ascitic or tissue tests)"]])}
<h3>Refer</h3>
<ul><li><b>Immediately</b> from any facility without a surgeon: every suspected obstruction or perforation, after IV access, fluids, NG tube, analgesia and (for peritonitis) antibiotics, as the STG advises.</li><li>Send a referral note with times, fluids given, NG output, urine output and drug doses.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. First hour (every facility)</h3>
<p>Built on the Bhutan STG and the Bhutan Clinical Reference pages, with NICE fluid guidance.${r(4, 11, 8)}</p>
<div class="calc" data-calc="obsfluids"></div>
<ol><li><b>Resuscitate:</b> oxygen if SpO₂ under 94%; two large IV cannulae; bloods; ${dr("ringer_lactate", "Ringer's lactate")} 500 mL boluses for shock, reassessing after each (see <a href="#/d/sepsis-adult">sepsis</a>).</li>
<li><b>Nil by mouth; nasogastric tube</b> on free drainage with 4-hourly aspiration; measure and replace losses.</li>
<li><b>Urinary catheter</b> and hourly urine output if unwell (target at least 0.5 mL/kg/hour).</li>
<li><b>Analgesia:</b> ${dr("paracetamol")} 1 g IV; ${dr("morphine")} 2.5–5 mg IV titrated, with ${dr("ondansetron")}. Analgesia does not hide surgical signs.${r(9)}</li>
<li><b>Correct potassium</b> (${dr("kcl", "potassium chloride")}) once passing urine; low potassium perpetuates ileus.</li>
<li><b>Antibiotics</b> only for peritonitis, perforation, strangulation or sepsis: ${dr("ceftriaxone")} 2 g IV daily + ${dr("metronidazole")} 500 mg IV 8-hourly. Critically ill or hospital-acquired: ${dr("piptazo")} 4.5 g 6-hourly. STG alternative: ${dr("ampicillin")} 1 g 6-hourly + metronidazole (add ${dr("gentamicin")} if septic).${r(3, 7)}</li>
<li><b>VTE prophylaxis</b> (${dr("enoxaparin")}) once bleeding risk is assessed; surgical review.</li></ol>

<h3>B. Small bowel obstruction</h3>
<ul><li><b>Adhesions, no danger signs:</b> drip and suck for up to 72 hours. Give 100 mL water-soluble contrast (Gastrografin) via the NG tube; an abdominal X-ray at 8–24 hours showing contrast in the colon predicts resolution. Operate if contrast has not reached the colon by 24 hours, if danger signs appear, or after 72 hours without improvement.${r(1)}</li>
<li><b>Hernia:</b> an irreducible, tender hernia with obstruction needs emergency repair; do not attempt forceful reduction of a strangulated hernia.</li>
<li><b>Abdominal TB:</b> subacute obstruction from ileocaecal TB often settles with drip and suck and responds to anti-TB treatment (see <a href="#/d/tb-adult">tuberculosis</a>); surgery for complete obstruction, perforation or failure.</li>
<li><b>Worm bolus (Ascaris):</b> drip and suck usually works; give albendazole only after the obstruction has settled (worm paralysis can worsen the bolus during obstruction); operate for peritonitis or failure.</li>
<li><b>No previous surgery and no hernia:</b> a "virgin abdomen" obstruction usually needs CT and surgery, because the cause may be a tumour or internal hernia.</li></ul>

<h3>C. Large bowel obstruction</h3>
<ul><li><b>Sigmoid volvulus</b> without peritonitis: sigmoidoscopic (or rigid) decompression and a rectal flatus tube left for 24–48 hours; then <b>sigmoid resection during the same admission</b>, because more than half recur.${r(10)} Gangrene or perforation: emergency resection (often Hartmann's procedure).</li>
<li><b>Caecal volvulus:</b> surgery (right hemicolectomy); endoscopy rarely works.</li>
<li><b>Obstructing colorectal cancer:</b> resection with or without stoma, or a stent as a bridge where available; refer to a surgical centre.</li>
<li><b>Colonic pseudo-obstruction:</b> correct potassium, stop opioids and anticholinergics, decompress; neostigmine 2 mg IV over 3–5 minutes with cardiac monitoring (atropine ready) if the caecum keeps dilating; colonoscopic decompression or surgery if this fails.</li></ul>

<h3>D. Perforation</h3>
<ul><li><b>Perforated peptic ulcer:</b> resuscitation, NG tube, antibiotics, IV PPI (${dr("ppi_iv", "IV omeprazole")} 40 mg twice daily), and <b>emergency surgery</b> (laparoscopic or open omental patch with washout). Non-operative care is only for selected, stable patients with a sealed leak on contrast CT, in a surgical centre. Afterwards: test and treat <i>H. pylori</i>, stop NSAIDs, endoscopy for gastric ulcers (see <a href="#/d/apd-adult">peptic ulcer</a>).${r(2)}</li>
<li><b>Typhoid ileal perforation:</b> resuscitation, surgery (primary repair or resection), and antibiotics covering <i>Salmonella</i> and gut flora (ceftriaxone + metronidazole); mortality is high when surgery is delayed.</li>
<li><b>Colonic perforation:</b> resection, usually with a stoma.</li>
<li><b>Antibiotic duration:</b> about 4 days after adequate source control, switching to oral once eating.${r(5)}</li></ul>

<h3>E. Working in Bhutan</h3>
${tbl(["Situation", "What to do"], [
["BHU or PHC", "NG tube, IV fluids, analgesia, first antibiotic dose if peritonitis; refer with a health worker"],
["District hospital without CT", "X-rays, ultrasound, repeated examination; refer if strangulation cannot be excluded or no surgeon is available"],
["Long or night transfer", "NG tube on free drainage, catheter, fluids running, potassium checked, written handover"],
["Gastrografin not available", "Rely on clinical progress over 24–72 hours and serial X-rays; lower threshold to operate"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("ceftriaxone"), "2 g IV once daily", "With metronidazole for peritonitis"],
[dr("metronidazole"), "500 mg IV 8-hourly", "Anaerobes"],
[dr("coamoxiclav"), "1.2 g IV 8-hourly", "Single-agent alternative; oral step-down"],
[dr("ampicillin"), "1 g IV 6-hourly (STG)", "Add metronidazole ± gentamicin"],
[dr("gentamicin"), "5 mg/kg IV once daily (short course)", "Avoid in AKI"],
[dr("piptazo"), "4.5 g IV 6-hourly", "Critically ill, hospital-acquired"],
[dr("ppi_iv"), "Omeprazole 40 mg IV twice daily", "Perforated ulcer"],
[dr("paracetamol"), "1 g 6-hourly; max 4 g/day", "First-line analgesic"],
[dr("morphine"), "2.5–5 mg IV, titrated", "With an antiemetic"],
[dr("ondansetron"), "4 mg IV 8-hourly", "Nausea"],
[dr("kcl"), "20–40 mmol per litre of IV fluid; max 10 mmol/hour peripherally", "Only once urine is flowing"],
[dr("enoxaparin"), "40 mg SC daily (prophylaxis)", "Adjust for kidney function"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and frail patients", html: `
<ul><li><b>Pregnancy:</b> obstruction (adhesions, volvulus) and appendicitis are the main surgical causes; ultrasound and MRI first, but do not withhold CT or X-ray if it changes a life-saving decision. Involve obstetrics; left lateral tilt after 20 weeks.</li>
<li><b>Older adults:</b> few signs, high mortality; think of cancer, volvulus, ischaemia and ruptured aneurysm. Assess frailty and discuss goals of care before major surgery.</li>
<li><b>Cirrhosis or on anticoagulants:</b> correct clotting, avoid NSAIDs, involve senior anaesthetist.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Post-operative obstruction in the first weeks", "Usually adhesions or ileus; drip and suck; CT if not settling", "Early re-operation is difficult; leaks must be excluded"],
["Recurrent subacute obstruction in a young adult with weight loss", "Chest X-ray, ultrasound/CT, consider empirical anti-TB treatment after specialist review", "Abdominal TB is common and treatable"],
["Perforation with fever for two weeks", "Typhoid ileal perforation until proven otherwise", "Different surgery and antibiotics"],
["Massive distension, elderly, bed-bound", "Pseudo-obstruction vs volvulus: CT or contrast study", "Treatments are opposite"],
["Patient refuses referral", "Explain the risk of death clearly; document; continue drip and suck", "Informed decisions"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Strangulation and gangrene", "Constant pain, fever, rising lactate", "Emergency resection"],
["Aspiration pneumonia", "Vomiting, hypoxia", "NG tube early; head-up; antibiotics"],
["AKI", "Low urine output, rising creatinine", "Fluids, stop nephrotoxins (see AKI)"],
["Septic shock", "Hypotension, high lactate", "Sepsis bundle, source control"],
["Anastomotic leak, abscess (after surgery)", "Fever, pain, ileus at 5–10 days", "CT, drainage, re-operation"],
["Short bowel syndrome (after large resection)", "Diarrhoea, malnutrition", "Specialist nutrition"]])}
<p>Mortality after emergency laparotomy for obstruction or perforation is around 10% overall and much higher in older, frail or shocked patients. Early resuscitation and surgery within hours, not days, is the key modifiable factor.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Investigate the cause: colonoscopy after large bowel obstruction or volvulus decompression; biopsy and TB tests for strictures; endoscopy for gastric ulcers.</li>
<li>After perforated ulcer: H. pylori eradication, stop NSAIDs, stop smoking.</li>
<li>After adhesive obstruction: explain that it can recur and when to return.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Your bowel is blocked. The tube in your nose takes away the fluid and gas so the bowel can rest; many blockages settle with this, but some need an operation."</li><li>Do not eat or drink until the surgeon allows it.</li><li>After going home, eat small meals and drink enough water; treat constipation early.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Vomiting returns, the belly swells, or you cannot pass wind or stool</li><li>Severe pain, fever or feeling faint</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Small bowel obstruction on an erect X-ray", src: "images/sbo-upright-xr.jpg", mod: "Abdominal X-ray, erect", ctx: "Colicky pain, vomiting, distension", loc: "Central abdomen", find: "Multiple dilated small bowel loops with air–fluid levels at different heights (step-ladder pattern)", signs: "Air–fluid levels; dilated small bowel over 3 cm", interp: "Mechanical small bowel obstruction; look for scars, hernias and signs of strangulation", ddx: "Paralytic ileus (gas throughout small and large bowel)", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Upright_X-ray_demonstrating_small_bowel_obstruction.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Sigmoid volvulus", src: "images/sigmoid-volvulus-xr.jpg", mod: "Abdominal X-ray, supine", ctx: "Gross distension, no stool or flatus (this film is from a 10-year-old; the sign is the same in adults)", loc: "Rising from the left pelvis", find: "A huge gas-filled inverted-U loop with its apex under the left or central diaphragm ('coffee-bean' sign)", signs: "Coffee-bean sign; loss of haustra", interp: "Sigmoid volvulus: decompress endoscopically if no peritonitis, then plan resection", ddx: "Caecal volvulus (loop points to the left upper quadrant), pseudo-obstruction", by: "Mont4nha", page: "https://commons.wikimedia.org/wiki/File:Sigmoidvolvulus.jpg", lic: "CC0" })}
</div>
${fig({ title: "Free gas under the diaphragm", src: "images/ugib-free-air.jpg", mod: "Erect chest X-ray", ctx: "Sudden severe abdominal pain", loc: "Under the left hemidiaphragm", find: "Crescent of free gas beneath the diaphragm", signs: "Pneumoperitoneum", interp: "Perforated hollow organ, most often a peptic ulcer: emergency surgery", ddx: "Gastric bubble (has rugae and a fluid level), Chilaiditi sign, recent laparotomy", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Chest_X-ray_showing_presence_of_free_air_under_left_diaphragm.png", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Adult with an acute abdomen", [
F.s("ABC, IV access, bloods, lactate, pregnancy test, ECG"), F.a,
F.d("Shock, peritonitis or free gas?"), F.a,
F.b([["Yes", F.e("Resuscitate, antibiotics, analgesia, NG tube; emergency surgery")], ["No", F.s("Analgesia, NG tube if vomiting, X-rays, ultrasound / CT")]]), F.a,
F.b([["Obstruction", F.s("Drip and suck; decide on cause (adhesions, hernia, volvulus, TB, cancer)")], ["Other cause", F.ok("Appendicitis, gallbladder, pancreatitis, renal colic chapters")]])])}
${F.chart("2 · Adhesive small bowel obstruction", [
F.s("Previous surgery, no strangulation signs"), F.a,
F.s("NBM, NG tube, IV fluids + K⁺, catheter"), F.a,
F.s("100 mL Gastrografin via NG; X-ray at 8–24 h"), F.a,
F.d("Contrast in colon and improving?"), F.a,
F.b([["Yes", F.ok("Start diet; discharge with advice")], ["No by 24 h, or danger signs, or 72 h", F.e("Operate")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Examine the hernial orifices in every obstructed patient</b>, including the femoral canal in older women.</li>
<li>A normal erect chest X-ray does not exclude perforation.</li>
<li><b>Correct potassium</b>: hypokalaemia keeps the bowel paralysed.</li>
<li>An NG tube before transfer prevents aspiration.</li>
<li>Recurrent obstruction in a young Bhutanese adult: think of TB.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for 'complete' obstruction before operating on strangulation", "Gangrene and perforation", "Act on danger signs, not on time alone"],
["Giving laxatives or enemas to an obstructed patient", "Worsens vomiting; risk of perforation", "Drip and suck"],
["Albendazole during a worm-bolus obstruction", "Can worsen the obstruction", "Deworm after it settles"],
["Leaving a decompressed sigmoid volvulus without surgery", "High recurrence and later emergency", "Planned resection in the same admission"],
["Withholding analgesia", "Suffering; no diagnostic gain", "Titrated morphine"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name the four cardinal features of bowel obstruction.", "Colicky abdominal pain, vomiting, distension and absolute constipation (no stool or flatus).")}
${qa("Student", "What does 'drip and suck' mean?", "Nil by mouth with IV fluids (drip) and a nasogastric tube on drainage (suck).")}
${qa("Intern/MO", "Which signs suggest strangulation?", "Constant pain, fever, tachycardia, localised tenderness or peritonism, rising white count or lactate, and CT signs of poor bowel wall perfusion.")}
${qa("Intern/MO", "What are the three components of the Boey score?", "Shock on admission, major medical illness, and perforation more than 24 hours before arrival.")}
${qa("Intern/MO", "What antibiotics does the Bhutan STG give for peritonitis?", "IV ampicillin 1 g 6-hourly plus IV metronidazole 500 mg 8-hourly.")}
${qa("Specialist", "How is water-soluble contrast used in adhesive small bowel obstruction?", "100 mL via the NG tube; contrast reaching the colon within about 24 hours predicts non-operative resolution, and it shortens hospital stay.")}
${qa("Specialist", "Why resect a sigmoid volvulus after successful decompression?", "Recurrence after decompression alone is over 50%, with emergency recurrences carrying high mortality.")}
${qa("Viva", "Why can a closed-loop obstruction strangulate quickly?", "Gas and fluid trapped between two points raise intraluminal pressure fast, compromising venous then arterial flow.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ten Broek RPG, Krielen P, Di Saverio S et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ASBO): 2017 update of the evidence-based guidelines from the WSES ASBO working group. <i>World J Emerg Surg</i> 2018;13:24. <a href="https://doi.org/10.1186/s13017-018-0185-2" target="_blank" rel="noopener">doi:10.1186/s13017-018-0185-2</a></li>
<li id="ref-2">Tarasconi A, Coccolini F, Biffl WL et al. Perforated and bleeding peptic ulcer: WSES guidelines. <i>World J Emerg Surg</i> 2020;15:3. <a href="https://doi.org/10.1186/s13017-019-0283-9" target="_blank" rel="noopener">doi:10.1186/s13017-019-0283-9</a></li>
<li id="ref-3">Sartelli M, Chichom-Mefire A, Labricciosa FM et al. The management of intra-abdominal infections from a global perspective: 2017 WSES guidelines for management of intra-abdominal infections. <i>World J Emerg Surg</i> 2017;12:29. <a href="https://doi.org/10.1186/s13017-017-0141-6" target="_blank" rel="noopener">doi:10.1186/s13017-017-0141-6</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.1.6 Acute abdominal pain, §4.1.8 Peritonitis; National Essential Medicines List 2025.</li>
<li id="ref-5">Sawyer RG, Claridge JA, Nathens AB et al. Trial of short-course antimicrobial therapy for intraabdominal infection (STOP-IT). <i>N Engl J Med</i> 2015;372:1996–2005. <a href="https://doi.org/10.1056/NEJMoa1411162" target="_blank" rel="noopener">doi:10.1056/NEJMoa1411162</a></li>
<li id="ref-6">Boey J, Choi SK, Poon A, Alagaratnam TT. Risk stratification in perforated duodenal ulcers: a prospective validation of predictive factors. <i>Ann Surg</i> 1987;205:22–26. <a href="https://doi.org/10.1097/00000658-198701000-00005" target="_blank" rel="noopener">doi:10.1097/00000658-198701000-00005</a></li>
<li id="ref-7">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) antibiotic book. Geneva: WHO; 2022 (intra-abdominal infections). <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-8">National Institute for Health and Care Excellence. Intravenous fluid therapy in adults in hospital (CG174). 2013, updated 2017. <a href="https://www.nice.org.uk/guidance/cg174" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-9">Manterola C, Vial M, Moraga J, Astudillo P. Analgesia in patients with acute abdominal pain. <i>Cochrane Database Syst Rev</i> 2011;(1):CD005660. <a href="https://doi.org/10.1002/14651858.CD005660.pub3" target="_blank" rel="noopener">doi:10.1002/14651858.CD005660.pub3</a></li>
<li id="ref-10">Alavi K, Poylin V, Davids JS et al. The American Society of Colon and Rectal Surgeons clinical practice guidelines for the management of colonic volvulus and acute colonic pseudo-obstruction. <i>Dis Colon Rectum</i> 2021;64:1046–1057.</li>
<li id="ref-11">Bhutan Clinical Reference app: Acute abdomen; Intestinal obstruction in adults; Hollow viscus perforation; Peritonitis (topic pages, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and NEML content", "<span class='pass'>Verified</span>", "STG 2024 §4.1.6, §4.1.8 read directly"],
["Adhesive SBO and perforated ulcer guidance", "<span class='pass'>Checked</span>", "WSES 2018 (ASBO) and 2020 (PPU)"],
["Antibiotics and durations", "<span class='pass'>Checked</span>", "WSES 2017, WHO AWaRe 2022, STOP-IT"],
["Volvulus guidance", "<span class='flag'>Secondary check</span>", "ASCRS 2021 cited from summary; verify against full text"],
["Surgical sign-off", "<span class='flag'>Pending</span>", "Needs review by a Bhutanese general surgeon"],
["Images", "<span class='pass'>Done</span>", "CC0 / CC BY-SA 3.0 / 4.0"]], "qc")}
` }
]
});
