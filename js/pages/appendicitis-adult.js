/* Acute appendicitis — adults */
registerPage({
id: "appendicitis-adult",
title: "Acute Appendicitis — Adults",
subtitle: "The commonest surgical emergency: scoring the probability, imaging wisely, choosing between the knife and antibiotics, and never missing an ectopic pregnancy",
age: "Adults", specs: ["surg", "emerg", "gi"],
keywords: ["appendicitis", "appendix", "appendicectomy", "appendectomy", "right iliac fossa pain", "RIF pain", "McBurney", "Rovsing", "Alvarado", "AIR score", "appendicular mass", "appendicular abscess", "phlegmon", "appendicolith", "faecolith", "perforated appendix", "acute abdomen", "antibiotics first"],
related: ["appendicitis-child", "apd-adult", "sepsis-adult", "ge-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Appendicitis is common, usually curable, and dangerous mainly when it is late or mistaken for something else. The work at the bedside is to estimate the probability honestly, get the right image, and get the patient to a surgeon before the appendix bursts.</p>
<div class="glance">
<div><h4>Classic story</h4><ul><li>Central pain moving to the right iliac fossa</li><li>Anorexia, nausea</li><li>Low-grade fever</li><li>Tender at McBurney's point</li></ul></div>
<div><h4>First questions</h4><ul><li><b>Could she be pregnant?</b> (urine hCG)</li><li>How many hours of pain?</li><li>Signs of perforation or sepsis?</li></ul></div>
<div><h4>Score</h4><p><b>AIR</b> (or Alvarado) sorts patients into low, intermediate and high probability. Low: safety-net. Intermediate: observe and image. High: surgeon.</p></div>
<div><h4>Image</h4><p><b>Ultrasound first.</b> CT (low dose) if still unclear in adults; MRI or ultrasound in pregnancy.</p></div>
<div><h4>Treat</h4><p>Nil by mouth, IV fluids, analgesia early, antibiotics, and <b>appendicectomy within 24 hours</b> (laparoscopic where available).</p></div>
<div><h4>Antibiotics</h4><p>${dr("ceftriaxone")} 2 g daily + ${dr("metronidazole")} 500 mg 8-hourly (WHO AWaRe). Bhutan STG pre-referral: ampicillin + metronidazole.${r(7)}</p></div>
<div><h4>After surgery</h4><p>Uncomplicated: no further antibiotics. Perforated: about 4 days after source control.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§4.1.7) asks every facility to keep the patient nil by mouth, start IV fluids and IV antibiotics, and refer. Surgery is done where a surgeon and theatre are available; ultrasound is widely available, CT mainly at referral hospitals. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, who gets it, and why it matters", html: `
<h3>Definition</h3>
<p>Acute inflammation of the vermiform appendix, usually after its narrow lumen is blocked. The Bhutan STG names faecoliths, cysts and worms as causes of the blockage.${r(2)}</p>
${tbl(["Type", "Meaning", "Why it matters"], [
["<b>Uncomplicated</b>", "Inflamed appendix, no perforation, gangrene, abscess or mass", "Can be treated by appendicectomy or, in selected patients, antibiotics alone"],
["<b>Complicated</b>", "Gangrene, perforation, abscess, phlegmon (mass) or peritonitis", "Needs source control; higher infection and complication rates"],
["Appendicular mass (phlegmon)", "Inflamed appendix walled off by omentum and bowel, usually after 3–5 days", "Usually treated without immediate surgery"],
["Appendicular abscess", "Pus collection around a perforated appendix", "Drainage plus antibiotics; surgery if this fails"]])}
<h3>How common?</h3>
<ul><li>Lifetime risk is about 7–9%; the peak is in the second and third decades, but it occurs at every age.</li>
<li>About one in five adults presents with complicated disease; perforation is commoner at the extremes of age and after delays.</li>
<li>Bhutan has no published national incidence figure; appendicectomy is one of the commonest emergency operations in district and referral hospitals.</li></ul>
<h3>Who is at higher risk of a bad outcome</h3>
<ul><li>Older adults (vague symptoms, perforation in about half), pregnant women, people with diabetes or immunosuppression, and anyone who has travelled far or waited long before reaching a surgeon.</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From blocked lumen to perforation", [
F.s("Lumen blocked: faecolith, lymphoid swelling (after viral infection), worms, rarely a tumour"), F.a,
F.s("Mucus builds up → pressure rises → venous and lymphatic outflow obstructed"), F.a,
F.s("Bacteria multiply in the ischaemic wall (E. coli, Bacteroides, streptococci)"), F.a,
F.b([["Visceral pain", F.s("Stretching of the appendix → dull central (periumbilical) pain, nausea, anorexia")], ["Parietal pain", F.s("Inflamed serosa touches the parietal peritoneum → sharp pain localises to the right iliac fossa")]]), F.a,
F.d("Untreated: gangrene, usually after 24–72 hours"), F.a,
F.b([["Walled off", F.e("Phlegmon or abscess")], ["Free perforation", F.e("Generalised peritonitis, sepsis")]]), F.a,
F.ok("Early removal, or antibiotics in selected uncomplicated cases, stops the process")])}
<p>The shift of pain from the centre to the right iliac fossa reflects the change from visceral to parietal irritation, which is why the migration is so useful diagnostically. A retrocaecal appendix may give flank pain and little tenderness in front; a pelvic appendix may cause diarrhoea, urinary frequency or rectal tenderness.</p>
<p>Not every inflamed appendix perforates. Trials of antibiotics show many uncomplicated cases settle, which suggests two types of disease: one that resolves and one that progresses. Telling them apart in advance is not yet reliable; an <b>appendicolith</b> marks a higher risk of failure and perforation.${r(3, 4)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (WSES 2020, WHO AWaRe 2022)", "This guide"], [
["Empirical antibiotics", "IV ampicillin 1 g 6-hourly + IV metronidazole 500 mg 8-hourly, then refer", "Ceftriaxone (or cefotaxime) + metronidazole, or amoxicillin–clavulanate, IV", "<b>Ceftriaxone 2 g daily + metronidazole 500 mg 8-hourly</b> (both on NEML). Many E. coli in South Asia resist ampicillin; if ampicillin is all you have, add gentamicin for complicated disease " + LB.loc()],
["Scoring", "Not mentioned", "AIR or Adult Appendicitis Score preferred over Alvarado in adults", "Use AIR; Alvarado is acceptable when CRP is unavailable, mainly to rule out"],
["Imaging", "Ultrasound of the lower abdomen and appendix", "Ultrasound first; low-dose CT if inconclusive in adults; MRI in pregnancy", "Ultrasound for all who can get it; CT at referral hospitals for unclear cases, especially over 40"],
["Antibiotics-only treatment", "Not mentioned (refer for surgery)", "A safe option for selected uncomplicated appendicitis without appendicolith, after CT confirmation, with informed consent (about 3 in 10 need surgery within a year, nearly 4 in 10 by five years)", "Surgery remains the standard. Offer antibiotics alone only where imaging has confirmed uncomplicated disease without appendicolith and follow-up is reliable"],
["Antibiotics after surgery", "Not specified", "None after uncomplicated appendicectomy; 3–5 days after source control for complicated", "As international"],
["India", "—", "No ICMR standard treatment workflow for appendicitis was found; Indian surgical practice follows WSES and EAES" + r(9), "—"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Mechanism", "Value"], [
["Central pain moving to the right iliac fossa", "Visceral then parietal irritation", "One of the most useful symptoms"],
["Anorexia, nausea, vomiting after the pain", "Visceral reflex", "Vomiting <b>before</b> pain suggests gastroenteritis"],
["Low-grade fever (37.5–38.5 °C)", "Inflammation", "High fever suggests perforation or another diagnosis"],
["<b>Tenderness at McBurney's point</b>", "Inflamed appendix under the parietal peritoneum", "One-third of the way from the right ASIS to the umbilicus"],
["Rebound tenderness, guarding, pain on coughing or moving", "Peritoneal irritation", "Rebound over McBurney's point suggests peritonitis (STG)"],
["<b>Rovsing's sign</b>", "Pressing the left iliac fossa shifts gas and stretches the right peritoneum", "Pain felt in the right iliac fossa"],
["Psoas sign (pain on hip extension)", "Retrocaecal appendix on the psoas", "Supports a retrocaecal position"],
["Obturator sign (pain on internal rotation of the flexed hip)", "Pelvic appendix", "Supports a pelvic position"]])}
${box("red", "Signs of complicated appendicitis — escalate now", `<ul><li>Pain for more than 48 hours, high fever, rigors</li><li>Generalised tenderness, guarding or rigidity</li><li>Tender mass in the right iliac fossa</li><li>Tachycardia, hypotension, confusion, low urine output (sepsis)</li><li>Rapid relief of pain followed by worsening (perforation)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 24-year-old man from Wangdue has had pain around the navel since last night, now settled in the right lower abdomen; he has no appetite, vomited once after the pain began, and has a temperature of 37.8 °C. He is tender with rebound at McBurney's point and Rovsing's sign is positive. White cells are 13.5 with 82% neutrophils, CRP 35. <b>His AIR score is 8, Alvarado 9</b>: a young man with migration, localised peritonism and a raised count most likely has acute appendicitis. Ultrasound shows a non-compressible 9 mm appendix. He needs IV antibiotics, analgesia and appendicectomy today.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["<b>Ectopic pregnancy</b>", "Missed period, vaginal bleeding, shoulder-tip pain, fainting", "Negative hCG", "<b>Urine or serum hCG</b> in every woman of reproductive age; ultrasound"],
["Ovarian cyst rupture or torsion", "Sudden onset, mid-cycle, adnexal tenderness", "—", "Pelvic ultrasound"],
["Pelvic inflammatory disease", "Bilateral pain, discharge, cervical motion tenderness", "Migration of pain", "Examination, swabs"],
["Ureteric colic", "Loin-to-groin colicky pain, restless, haematuria", "Peritonism", "Urine dipstick, ultrasound or CT KUB"],
["Urinary tract infection", "Dysuria, frequency", "—", "Urine dipstick/microscopy (a pelvic appendix can cause pyuria)"],
["Gastroenteritis", "Vomiting and diarrhoea first, crampy diffuse pain", "Localised peritonism", "Observation"],
["Mesenteric adenitis", "Young, recent viral illness, diffuse tenderness", "—", "Ultrasound (enlarged nodes, normal appendix)"],
["Ileocaecal TB, Crohn's disease", "Weeks of symptoms, weight loss, mass, TB contact", "Short history", "Ultrasound/CT, colonoscopy; TB is common in Bhutan"],
["<b>Caecal or appendiceal cancer</b>", "Over 40, weight loss, anaemia, change in bowel habit", "Young", "CT; colonoscopy after recovery"],
["Right lower lobe pneumonia, DKA, porphyria", "Cough, high glucose, ketones", "—", "Chest X-ray, glucose, ketones"],
["Perforated peptic ulcer, cholecystitis", "Fluid tracking down the right paracolic gutter", "—", "Erect chest X-ray, ultrasound"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Pregnancy test (hCG)</b>", "Exclude ectopic pregnancy; guides imaging", "Every woman aged roughly 12–55", "Essential"],
["Full blood count", "White cells and neutrophils (scores)", "Normal count does not exclude appendicitis", "Essential"],
["CRP", "AIR score; high values suggest complicated disease", "CRP over 50–100 mg/L with long history: think perforation", "Recommended"],
["Urine routine (STG)", "UTI and stones", "Mild pyuria is common with pelvic appendicitis", "Essential"],
["Blood group and save (STG)", "Theatre", "—", "Essential"],
["Electrolytes, creatinine, glucose, lactate", "Vomiting, sepsis, diabetes", "—", "If unwell"],
["<b>Ultrasound (graded compression)</b>", "Confirm appendicitis; find other causes; look for abscess", "Non-compressible appendix over 6 mm, wall over 3 mm, echogenic surrounding fat, appendicolith, hyperaemia. A non-visualised appendix with no secondary signs makes appendicitis less likely", "First imaging"],
["<b>CT abdomen-pelvis (low-dose, IV contrast)</b>", "Unclear cases in adults; suspected complications; age over 40 (cancer)", "Sensitivity and specificity about 95%", "When ultrasound is inconclusive"],
["MRI", "Pregnancy when ultrasound is inconclusive", "No radiation", "Referral hospitals"],
["Erect chest X-ray", "Free gas (suggests perforated ulcer rather than appendix)", "Appendiceal perforation rarely shows free gas", "Selected"]])}
<p><b>Reference standard:</b> histology of the removed appendix. Clinically, the combination of a validated score, repeated examination and imaging gives the best accuracy and keeps the negative appendicectomy rate low.${r(1)}</p>
` },

{ id: "staging", title: "Scoring the probability, and when to refer", html: `
<p>Scores do not make the diagnosis on their own; they tell you how much more information you need. Use one consistently and repeat it after a few hours of observation.${r(5, 6)}</p>
<div class="calc" data-calc="airscore"></div>
<div class="calc" data-calc="alvarado"></div>
${tbl(["Probability", "What to do"], [
["<b>Low</b> (AIR 0–4, Alvarado 0–4)", "Look for another cause; discharge with clear return advice if well, or re-examine within 24 hours"],
["<b>Intermediate</b> (AIR 5–8, Alvarado 5–6)", "Admit, nil by mouth, analgesia, repeat examination and bloods, <b>ultrasound</b>; CT if still unclear"],
["<b>High</b> (AIR 9–12, Alvarado 7–10)", "Surgical review now; image in women of reproductive age, older adults, or when the story is atypical"]])}
<h3>Refer</h3>
<ul><li><b>Immediately</b> (from BHU/PHC or a hospital without a surgeon): any suspected appendicitis, after starting fluids, analgesia and antibiotics (STG). Sepsis or peritonitis: resuscitate first and send with a health worker.</li><li><b>Same day</b> to a referral hospital: unclear diagnosis needing CT, pregnancy, age over 40 with a mass.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. First hour, at any facility</h3>
<p>Adapted from the Bhutan STG, the Bhutan Clinical Reference app and WSES 2020.${r(2, 10, 1)}</p>
<ol><li><b>Nil by mouth</b> (sips for tablets); IV access; bloods including group and save.</li>
<li><b>IV fluids:</b> ${dr("ringer_lactate", "Ringer's lactate")} or 0.9% saline; boluses of 500 mL for hypotension or tachycardia, then maintenance.</li>
<li><b>Analgesia early:</b> ${dr("paracetamol")} 1 g IV/oral 6-hourly; ${dr("morphine")} 2.5–5 mg IV titrated for severe pain, with an antiemetic (${dr("ondansetron")} 4 mg). Analgesia does not mask the signs or delay diagnosis.${r(12)}</li>
<li><b>Antibiotics</b> once the diagnosis is likely or the patient is being referred: ${dr("ceftriaxone")} 2 g IV + ${dr("metronidazole")} 500 mg IV. If only STG drugs are available: ${dr("ampicillin")} 1 g IV + metronidazole 500 mg IV (add ${dr("gentamicin")} 5 mg/kg once daily if perforation or sepsis is suspected).</li>
<li>Pregnancy test, urine dipstick, ultrasound; decide on referral.</li></ol>

<h3>B. Uncomplicated appendicitis</h3>
${tbl(["Option", "What it involves", "Who it suits"], [
["<b>Appendicectomy</b> (standard)", "Laparoscopic where available (less wound infection, faster recovery, better view in women and obese patients); open through a muscle-splitting incision is also safe. Ideally within 24 hours of admission. One pre-operative antibiotic dose", "Most patients; anyone with an appendicolith, uncertain diagnosis, or poor access to follow-up"],
["<b>Antibiotics alone</b>", "IV ceftriaxone + metronidazole for 1–3 days until improving, then oral co-amoxiclav (or the local equivalent) to complete about 7–10 days. Admit and re-examine; operate if not improving within 24–48 hours", "Imaging-confirmed uncomplicated appendicitis, <b>no appendicolith</b>, patient informed that about 3 in 10 need surgery within a year (CODA, APPAC), reliable return"]])}
${box("amber", "Before choosing antibiotics alone", `<p>An appendicolith roughly doubles the chance of failure and raises complication rates (CODA 2020). In adults over 40, an underlying tumour must be excluded (CT, then colonoscopy after recovery). Recurrence is about 39% at five years (APPAC).${r(3, 4)}</p>`)}

<h3>C. Complicated appendicitis</h3>
<ul><li><b>Generalised peritonitis or sepsis:</b> resuscitate (see <a href="#/d/sepsis-adult">sepsis</a>), antibiotics within the hour, emergency appendicectomy with peritoneal washout.</li>
<li><b>Phlegmon (mass) without abscess:</b> non-operative care with IV antibiotics, fluids and analgesia; operate if not improving.</li>
<li><b>Abscess:</b> antibiotics plus percutaneous (image-guided) drainage for collections over about 3 cm; laparoscopic surgery by experienced surgeons is an alternative. Interval appendicectomy is not routine in adults under 40 who recover; do it for recurrent symptoms.</li>
<li><b>Antibiotics after source control:</b> about <b>4 days</b> is as good as longer courses (STOP-IT); switch to oral once eating and afebrile.${r(8)}</li></ul>

<h3>D. After appendicectomy</h3>
<ul><li>Uncomplicated: <b>no antibiotics after surgery</b>; eat when ready; home in 1–2 days.</li>
<li>Complicated: IV then oral antibiotics, total about 4–5 days after source control; watch for wound infection and pelvic abscess.</li></ul>

<h3>E. Working in Bhutan</h3>
${tbl(["Situation", "Reality", "What to do"], [
["BHU or PHC", "No surgeon, no ultrasound", "Clinical diagnosis, IV fluids, first antibiotic dose and analgesia, then refer (STG)"],
["District hospital without CT", "Ultrasound usually available", "Score + ultrasound + repeated examination; refer unclear cases or women where ectopic cannot be excluded"],
["Long referral journeys", "Mountain roads, weather", "Give antibiotics and analgesia before transfer; send a referral note with the score, times and doses"],
["Ampicillin resistance", "Common in E. coli", "Prefer ceftriaxone + metronidazole (NEML)"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("ceftriaxone"), "2 g IV once daily", "With metronidazole; NEML"],
[dr("metronidazole"), "500 mg IV 8-hourly (oral 400–500 mg 8-hourly once eating)", "Anaerobic cover; no alcohol"],
[dr("coamoxiclav"), "1.2 g IV 8-hourly; oral 625 mg 8-hourly to complete the course", "Single-agent alternative"],
[dr("ampicillin"), "1 g IV 6-hourly (Bhutan STG, with metronidazole)", "Weak against many E. coli; add gentamicin if complicated"],
[dr("gentamicin"), "5 mg/kg IV once daily (short course)", "Check kidney function; avoid in pregnancy if alternatives exist"],
[dr("piptazo"), "4.5 g IV 6-hourly", "Severe sepsis, hospital-acquired or failed first line (AWaRe Watch)"],
[dr("paracetamol"), "1 g 6-hourly (15 mg/kg if under 50 kg); max 4 g/day", "First-line analgesic"],
[dr("morphine"), "2.5–5 mg IV, titrated", "Severe pain; with an antiemetic"],
[dr("ondansetron"), "4 mg IV 8-hourly as needed", "Nausea"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and immunocompromised people", html: `
<ul><li><b>Pregnancy:</b> appendicitis is the commonest non-obstetric surgical emergency in pregnancy. The appendix is pushed upwards as the uterus grows, so pain may be higher in late pregnancy, and the white count is normally raised. Ultrasound first, MRI if unclear; avoid CT where possible. <b>Laparoscopic appendicectomy is safe in all trimesters</b>; delay is what harms: perforation raises fetal loss to about 20–35%. Antibiotics: ceftriaxone + metronidazole are acceptable; avoid gentamicin when possible. Involve obstetrics.</li>
<li><b>Older adults:</b> fewer classic symptoms, less fever, and perforation at presentation in about half. Lower threshold for CT; think of caecal or appendiceal cancer, especially with a mass or abscess (follow up with colonoscopy).</li>
<li><b>Diabetes, steroids, HIV, chemotherapy:</b> signs are muted and perforation is commoner; image early and operate early.</li></ul>
` },

{ id: "scenarios", title: "Appendicitis with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["On anticoagulants or antiplatelets", "Check INR; plan reversal or timing with the surgeon and anaesthetist", "Bleeding risk at surgery"],
["Cirrhosis", "Higher surgical risk; correct coagulopathy; avoid NSAIDs", "See <a href=\"#/d/cirrhosis-adult\">cirrhosis</a>"],
["CKD or AKI", "Avoid gentamicin; adjust doses; watch fluids", "Nephrotoxicity"],
["Diabetes", "Monitor glucose 2–4 hourly when nil by mouth; check ketones", "DKA can mimic and complicate appendicitis"],
["Known TB or TB contact", "Consider ileocaecal TB if symptoms are weeks long or there is a mass", "TB is common in Bhutan; it changes treatment"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["<b>Perforation and peritonitis</b>", "Generalised tenderness, rigidity, sepsis", "Resuscitate, antibiotics, emergency surgery"],
["Appendicular mass or abscess", "Tender mass, swinging fever, days of symptoms", "Antibiotics, drainage, surgery if failing"],
["Wound infection", "Red, painful, discharging wound at 3–7 days", "Open and drain; antibiotics if cellulitis"],
["Pelvic or intra-abdominal abscess (after complicated cases)", "Fever and pain at 5–10 days, diarrhoea, rectal tenderness", "Ultrasound/CT, drainage, antibiotics"],
["Paralytic ileus, adhesive obstruction", "Distension, vomiting", "Nasogastric drainage, fluids; surgery if obstruction persists"],
["Stump appendicitis", "Same symptoms after a previous appendicectomy", "Imaging; surgery"]])}
<p>Mortality after uncomplicated appendicectomy is under 0.1%; it rises to around 1–5% with perforation, and higher in older adults. Timely diagnosis is the main thing doctors can change.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Wound review at 7–10 days (sutures out if non-absorbable); normal activity in 1–2 weeks after laparoscopy, 2–4 weeks after open surgery (no heavy lifting for about 4 weeks after open surgery).</li>
<li>Read the histology: an unexpected tumour (neuroendocrine tumour, adenocarcinoma, mucinous neoplasm) needs specialist follow-up.</li>
<li>After non-operative treatment: review at 2–4 weeks; in adults over 40, arrange colonoscopy or CT to exclude a tumour.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Your appendix is inflamed. Removing it is the usual cure, and you can live normally without it."</li><li>Do not eat or drink until the surgeon has seen you.</li><li>After surgery: keep the wound clean and dry for 48 hours, then shower normally.</li><li>If you were treated with antibiotics instead of surgery, finish every tablet and come back at once if the pain returns.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fever, increasing pain or swelling of the abdomen</li><li>The wound becomes red, hot or discharges pus</li><li>Repeated vomiting, or you cannot pass wind or stool</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "McBurney's point", src: "images/mcburney.jpg", mod: "Clinical photograph", ctx: "Surface anatomy", loc: "Right iliac fossa", find: "Point one-third of the way along a line from the right anterior superior iliac spine to the umbilicus", interp: "Maximum tenderness here supports appendicitis; rebound here suggests local peritonitis (Bhutan STG)", by: "Steven Fruitsmaak", page: "https://commons.wikimedia.org/wiki/File:McBurney%27s_point.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Acute appendicitis on ultrasound", src: "images/appx-us.png", mod: "Ultrasound, linear probe, long axis", ctx: "Right iliac fossa pain", loc: "Right iliac fossa", find: "Thick-walled, tubular, blind-ending structure with a hypoechoic wall, surrounded by bright (inflamed) fat", signs: "Non-compressible appendix, outer diameter over 6 mm, echogenic periappendiceal fat", interp: "Acute appendicitis", ddx: "Terminal ileitis, Crohn's disease, caecal diverticulitis", by: "Borbély Márton", page: "https://commons.wikimedia.org/wiki/File:Appendicitis_ultrasound.png", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Appendicolith on CT", src: "images/appx-lith-ct.png", mod: "CT abdomen and pelvis, coronal", ctx: "Right iliac fossa pain", loc: "Right iliac fossa (circled)", find: "A bright, calcified stone in the appendix, with a thickened appendix and stranding of the surrounding fat", signs: "Appendicolith", interp: "Appendicitis with an appendicolith: higher risk of perforation and of failure with antibiotics alone, so surgery is preferred", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:AppendicolithPlainCT.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "Acute appendicitis under the microscope", src: "images/appx-histo.jpg", mod: "Histology, H&E, low power", ctx: "Appendicectomy specimen", loc: "Appendix wall and lumen", find: "Pus (neutrophils and debris) in the lumen and dense inflammatory cells through the wall", signs: "Transmural neutrophilic inflammation", interp: "Confirms acute appendicitis; always read the report for unexpected tumours", by: "Department of Pathology, Calicut Medical College", page: "https://commons.wikimedia.org/wiki/File:Acute_appendicitis_Low_Power.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Adult with right iliac fossa pain", [
F.s("History, examination, pregnancy test, FBC, CRP, urine"), F.a,
F.d("Sepsis or generalised peritonitis?"), F.a,
F.b([["Yes", F.e("Resuscitate, antibiotics now, emergency surgical review")], ["No", F.s("Calculate AIR (or Alvarado)")]]), F.a,
F.b([["Low", F.ok("Other causes; safety-net; review in 24 h")], ["Intermediate", F.s("Admit, analgesia, repeat exam, ultrasound → CT if unclear")], ["High", F.e("Surgeon now; image if woman, older or atypical")]]), F.a,
F.d("Appendicitis confirmed"), F.a,
F.b([["Uncomplicated", F.s("Appendicectomy within 24 h (or antibiotics alone if selected)")], ["Complicated", F.s("Surgery or drainage + antibiotics about 4 days after source control")]])])}
${F.chart("2 · At a BHU or PHC", [
F.s("Suspect appendicitis: RIF pain, tenderness, anorexia"), F.a,
F.s("Nil by mouth, IV fluids, paracetamol ± morphine"), F.a,
F.s("First dose ceftriaxone 2 g + metronidazole 500 mg (or STG ampicillin + metronidazole)"), F.a,
F.e("Refer with a note: times, score, doses, pregnancy test result")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Every woman of reproductive age with right iliac fossa pain gets a pregnancy test.</b></li>
<li>Vomiting before the pain, and diarrhoea as the main symptom, point away from appendicitis, but a pelvic appendix can cause diarrhoea.</li>
<li><b>Give analgesia early.</b> It makes the examination easier, not misleading.</li>
<li>A normal white count does not exclude appendicitis, especially early.</li>
<li>Over 40 with a mass or abscess: think of cancer and arrange colonoscopy later.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Missing ectopic pregnancy", "Life-threatening bleed", "hCG in all women of reproductive age"],
["Labelling as gastroenteritis without re-examining", "Perforation at home", "Re-examine; clear return advice"],
["Withholding analgesia until the surgeon arrives", "Needless suffering; no diagnostic gain", "Analgesia at triage"],
["Ampicillin alone for complicated appendicitis", "Resistant E. coli; treatment failure", "Ceftriaxone + metronidazole"],
["Antibiotics for days after a simple appendicectomy", "Resistance, side effects, cost", "No post-operative antibiotics if uncomplicated"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Where is McBurney's point?", "One-third of the way along a line from the right anterior superior iliac spine to the umbilicus.")}
${qa("Student", "What does Rovsing's sign show?", "Pressure in the left iliac fossa causes pain in the right iliac fossa, suggesting peritoneal irritation from appendicitis.")}
${qa("Intern/MO", "What are the components of the Alvarado score?", "Migration of pain, anorexia, nausea/vomiting, right iliac fossa tenderness (2), rebound, temperature ≥37.3 °C, leucocytosis >10 (2), neutrophils >75%: total 10.")}
${qa("Intern/MO", "Which test must never be skipped in a woman of 25 with right iliac fossa pain?", "A pregnancy test, to exclude ectopic pregnancy.")}
${qa("Intern/MO", "What antibiotics does the Bhutan STG recommend before referral, and what does WHO AWaRe suggest?", "STG: IV ampicillin 1 g 6-hourly + metronidazole 500 mg 8-hourly. AWaRe: ceftriaxone (or cefotaxime) + metronidazole, or amoxicillin–clavulanate.")}
${qa("Specialist", "Which patients are suitable for antibiotics alone?", "Imaging-confirmed uncomplicated appendicitis without an appendicolith, after informed consent and with reliable follow-up; about 3 in 10 will need appendicectomy within a year.")}
${qa("Specialist", "How long should antibiotics continue after source control in perforated appendicitis?", "About 4 days (STOP-IT trial), switching to oral when the patient is eating and afebrile.")}
${qa("Viva", "Why does the pain move from the centre to the right iliac fossa?", "Early distension stimulates visceral afferents (T10, felt periumbilically); later the inflamed serosa irritates the somatically innervated parietal peritoneum, localising the pain.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Di Saverio S, Podda M, De Simone B et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. <i>World J Emerg Surg</i> 2020;15:27. <a href="https://doi.org/10.1186/s13017-020-00306-3" target="_blank" rel="noopener">doi:10.1186/s13017-020-00306-3</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.1.6 Acute abdominal pain, §4.1.7 Acute appendicitis, §4.1.8 Peritonitis; National Essential Medicines List 2025.</li>
<li id="ref-3">CODA Collaborative. A randomized trial comparing antibiotics with appendectomy for appendicitis. <i>N Engl J Med</i> 2020;383:1907–1919. <a href="https://doi.org/10.1056/NEJMoa2014320" target="_blank" rel="noopener">doi:10.1056/NEJMoa2014320</a></li>
<li id="ref-4">Salminen P, Tuominen R, Paajanen H et al. Five-year follow-up of antibiotic therapy for uncomplicated acute appendicitis in the APPAC randomized clinical trial. <i>JAMA</i> 2018;320:1259–1265. <a href="https://doi.org/10.1001/jama.2018.13201" target="_blank" rel="noopener">doi:10.1001/jama.2018.13201</a></li>
<li id="ref-5">Alvarado A. A practical score for the early diagnosis of acute appendicitis. <i>Ann Emerg Med</i> 1986;15:557–564. <a href="https://doi.org/10.1016/S0196-0644(86)80993-3" target="_blank" rel="noopener">doi:10.1016/S0196-0644(86)80993-3</a></li>
<li id="ref-6">Andersson M, Andersson RE. The appendicitis inflammatory response score: a tool for the diagnosis of acute appendicitis that outperforms the Alvarado score. <i>World J Surg</i> 2008;32:1843–1849. <a href="https://doi.org/10.1007/s00268-008-9649-y" target="_blank" rel="noopener">doi:10.1007/s00268-008-9649-y</a></li>
<li id="ref-7">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) antibiotic book. Geneva: WHO; 2022 (acute appendicitis). <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-8">Sawyer RG, Claridge JA, Nathens AB et al. Trial of short-course antimicrobial therapy for intraabdominal infection (STOP-IT). <i>N Engl J Med</i> 2015;372:1996–2005. <a href="https://doi.org/10.1056/NEJMoa1411162" target="_blank" rel="noopener">doi:10.1056/NEJMoa1411162</a></li>
<li id="ref-9">Gorter RR, Eker HH, Gorter-Stam MAW et al. Diagnosis and management of acute appendicitis. EAES consensus development conference 2015. <i>Surg Endosc</i> 2016;30:4668–4690. <a href="https://doi.org/10.1007/s00464-016-5245-7" target="_blank" rel="noopener">doi:10.1007/s00464-016-5245-7</a></li>
<li id="ref-10">Bhutan Clinical Reference app: Acute appendicitis; Appendicular lump and abscess (topic pages, Nov 2026), used as a local synthesis of the STG and WSES.</li>
<li id="ref-12">Manterola C, Vial M, Moraga J, Astudillo P. Analgesia in patients with acute abdominal pain. <i>Cochrane Database Syst Rev</i> 2011;(1):CD005660. <a href="https://doi.org/10.1002/14651858.CD005660.pub3" target="_blank" rel="noopener">doi:10.1002/14651858.CD005660.pub3</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and NEML content", "<span class='pass'>Verified</span>", "STG 2024 §4.1.6–4.1.8 read directly"],
["Scores and thresholds", "<span class='pass'>Checked</span>", "Original papers (Alvarado 1986, Andersson 2008) and WSES 2020"],
["Antibiotic regimens and durations", "<span class='pass'>Checked</span>", "WHO AWaRe 2022, STOP-IT, WSES 2020"],
["Bhutan incidence data", "<span class='flag'>Not available</span>", "No published national figure found"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 3.0 / 4.0"]], "qc")}
` }
]
});
