/* Acute appendicitis — children and adolescents */
registerPage({
id: "appendicitis-child",
title: "Acute Appendicitis — Children & Adolescents",
subtitle: "The commonest surgical emergency of childhood: why young children perforate early, the Paediatric Appendicitis Score, ultrasound first, and weight-based first orders",
age: "Children & adolescents", specs: ["paeds", "surg", "emerg"],
keywords: ["appendicitis child", "paediatric appendicitis", "pediatric appendicitis", "PAS", "Paediatric Appendicitis Score", "Samuel score", "right iliac fossa pain child", "abdominal pain child", "perforated appendix child", "mesenteric adenitis", "intussusception", "testicular torsion", "appendicectomy child"],
related: ["appendicitis-adult", "ge-child", "sepsis-child", "pneumonia-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most children with tummy pain do not have appendicitis, but the ones who do can deteriorate quickly, and the youngest often arrive already perforated. Listen to the parents, examine gently and repeatedly, and keep the testes and the chest in mind.</p>
<div class="glance">
<div><h4>Clues</h4><ul><li>Pain moving to the right lower abdomen</li><li>Off food, vomiting after the pain</li><li>Pain on walking, hopping or coughing</li><li>Low-grade fever</li></ul></div>
<div><h4>Under 5 years</h4><ul><li>Vague: irritable, fever, vomiting, limping</li><li>Perforation in about half or more</li><li>Low threshold for surgical review</li></ul></div>
<div><h4>Score</h4><p><b>Paediatric Appendicitis Score</b>: 0–3 low, 4–6 ultrasound and observe, 7–10 surgeon now.</p></div>
<div><h4>Image</h4><p><b>Ultrasound first.</b> MRI if unclear; CT only when nothing else answers the question.</p></div>
<div><h4>Treat</h4><p>Nil by mouth, IV fluids, analgesia (morphine is safe), antibiotics, appendicectomy within 24 hours.</p></div>
<div><h4>Antibiotics</h4><p>${dr("ceftriaxone")} 80 mg/kg daily + ${dr("metronidazole")} 7.5 mg/kg 8-hourly (WHO AWaRe).</p></div>
<div><h4>Always check</h4><p>Testes (torsion), chest (pneumonia), urine, glucose, and in adolescent girls a pregnancy test.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG approach (nil by mouth, IV fluids, IV ampicillin + metronidazole, refer) applies to children with weight-based doses. Paediatric surgery is centred at the national referral hospital; general surgeons operate on older children in regional and district hospitals. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, who gets it, and why children are different", html: `
<p>Inflammation of the appendix after its lumen is blocked by a faecolith, swollen lymphoid tissue (often after a viral illness) or worms.${r(2)}</p>
${tbl(["Age", "What is different", "Practical point"], [
["<b>Under 2 years</b>", "Rare, but nearly always perforated at diagnosis; thin omentum cannot wall off infection", "Fever, vomiting, irritability, distension: think of it"],
["<b>2–5 years</b>", "History is unreliable; perforation in about half or more", "Repeated examination; early ultrasound; low threshold for surgical review"],
["<b>6–12 years</b>", "Classic story becomes more common", "Paediatric Appendicitis Score works best here"],
["<b>Adolescents</b>", "Like adults; in girls, gynaecological causes and pregnancy", "Pregnancy test, pelvic ultrasound"]])}
<ul><li>Appendicitis is the commonest reason for emergency abdominal surgery in children, with a peak between 10 and 19 years.</li>
<li>Delay, not the disease itself, drives most perforations: the risk rises steeply after 36–48 hours of symptoms.</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Why children perforate early", [
F.s("Lumen blocked: lymphoid hyperplasia (after viral infections), faecolith, worms"), F.a,
F.s("Pressure rises → wall ischaemia → bacterial invasion"), F.a,
F.b([["Older child", F.s("Omentum is well developed → walls off a mass or abscess")], ["Young child", F.s("Thin, short omentum → free perforation and generalised peritonitis")]]), F.a,
F.d("Late presentation + vague symptoms + difficult examination"), F.a,
F.e("Perforation in about half of under-5s"), F.a,
F.ok("Early recognition and surgery prevent most complications")])}
<p>The appendix has a large amount of lymphoid tissue in childhood, which is why appendicitis often follows a viral illness and why <b>mesenteric adenitis</b> (swollen lymph nodes) is the great mimic. Pinworms (<i>Enterobius</i>) and roundworms can block the lumen; the Bhutan STG names worms among the causes.${r(2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (WSES 2020, WHO AWaRe 2022)", "This guide"], [
["Antibiotics", "IV ampicillin + metronidazole (adult doses given)", "Ceftriaxone + metronidazole, or amoxicillin–clavulanate (weight-based)", "<b>Ceftriaxone 80 mg/kg + metronidazole 7.5 mg/kg</b>; ampicillin + metronidazole, plus gentamicin if complicated, when ceftriaxone is unavailable " + LB.loc()],
["Score", "Not mentioned", "PAS or pARC in children; Alvarado less accurate", "PAS"],
["Imaging", "Ultrasound", "Ultrasound first; MRI next; low-dose CT only if needed", "Ultrasound; refer for MRI/CT only if it changes management"],
["Antibiotics-only treatment", "Not mentioned", "An option for uncomplicated appendicitis without appendicolith, with shared decision-making (about two-thirds avoid surgery at one year)", "Surgery is standard in Bhutan; antibiotics alone only in specialist care with follow-up"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Mechanism", "Clue"], [
["Central pain moving to the right iliac fossa", "Visceral then parietal irritation", "Often absent under 5"],
["Anorexia", "Visceral reflex", "A hungry child rarely has appendicitis"],
["Vomiting after the pain", "Reflex, ileus", "Vomiting first, with diarrhoea, suggests gastroenteritis"],
["<b>Pain on hopping, coughing or jolting</b>", "Peritoneal irritation", "Ask the child to hop or jump; watch them walk to the couch"],
["Right iliac fossa tenderness, guarding", "Local peritonitis", "Examine while distracting the child; watch the face"],
["Fever 37.5–38.5 °C", "Inflammation", "High fever early: think of other infections, or perforation"],
["Limp, holding the right hip flexed", "Psoas irritation (retrocaecal appendix)", "Can be mistaken for hip problems"],
["Diarrhoea, frequency", "Pelvic appendix irritating rectum or bladder", "Do not label as gastroenteritis too quickly"]])}
${box("red", "Danger signs — senior review now", `<ul><li>Generalised tenderness, rigid abdomen, distension</li><li>Poor perfusion: cold peripheries, capillary refill over 3 seconds, fast heart rate, low urine output</li><li>Lethargy, grunting, high fever</li><li>Bilious (green) vomiting: think of obstruction or intussusception</li></ul>`)}
<h3>The typical patient</h3>
<p>A 9-year-old boy from Tsirang has had pain since yesterday, first around the navel and now on the right; he will not eat, vomited twice after the pain began, and limps into the room. He cannot hop because of pain, is tender with guarding in the right iliac fossa, and his temperature is 38.1 °C. White cells are 14.2 with 80% neutrophils. <b>His PAS is 10</b>: every feature fits, the timing is classic, and he is at the age when the score is most reliable. He needs IV fluids, morphine, antibiotics and surgical review now; ultrasound can confirm but must not delay theatre.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Gastroenteritis", "Vomiting and diarrhoea first, diffuse crampy pain, sick contacts", "Localised peritonism", "Observation; reassess after fluids"],
["Mesenteric adenitis", "Recent sore throat or cold, high fever, diffuse or shifting tenderness", "Rebound, guarding", "Ultrasound: enlarged nodes, normal appendix"],
["Constipation", "Hard stools, left-sided or diffuse pain, palpable stool", "Fever, raised markers", "History, examination"],
["UTI or pyelonephritis", "Dysuria, frequency, loin pain, high fever", "—", "Urine dipstick and culture"],
["<b>Right lower lobe pneumonia</b>", "Cough, fast breathing, high fever, low SpO₂", "—", "Chest examination, X-ray"],
["<b>Intussusception</b> (3 months–3 years)", "Episodic screaming, pallor, drawing up legs, 'redcurrant jelly' stool, sausage-shaped mass", "Older child", "Ultrasound (target sign)"],
["<b>Testicular torsion</b>", "Sudden pain, high-riding tender testis, vomiting", "—", "<b>Examine the testes in every boy</b>; urgent surgical exploration"],
["Ovarian torsion or cyst; pregnancy", "Adolescent girl, sudden pain, adnexal tenderness, missed period", "—", "Pelvic ultrasound; pregnancy test"],
["Henoch–Schönlein purpura", "Purpuric rash on legs and buttocks, joint pain", "—", "Look at the skin; urine for blood and protein"],
["Diabetic ketoacidosis", "Thirst, polyuria, deep breathing, weight loss", "—", "Capillary glucose and ketones"],
["Enteric fever, worms", "Prolonged fever, travel; passing worms", "Short history", "Blood culture; stool examination"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Full blood count", "White cells and neutrophils (PAS)", "Normal early in disease", "Essential"],
["CRP", "Supports inflammation; very high suggests perforation", "Useful when repeated", "Recommended"],
["Urine dipstick (STG: urine routine)", "UTI, glucose, ketones", "Mild pyuria with a pelvic appendix", "Essential"],
["Capillary glucose", "DKA, hypoglycaemia after vomiting", "—", "Essential"],
["Electrolytes, creatinine", "Vomiting, dehydration, sepsis", "Check before maintenance fluids", "If unwell or on IV fluids"],
["Pregnancy test", "Adolescent girls", "Explain sensitively", "Essential when relevant"],
["Group and save (STG)", "Theatre", "—", "Essential"],
["<b>Ultrasound</b>", "Confirm; exclude intussusception, ovarian pathology, nodes", "Non-compressible appendix over 6 mm, echogenic fat, appendicolith, free fluid; accuracy depends on the operator", "First imaging"],
["MRI", "Unclear ultrasound, especially in girls", "No radiation; may need sedation in young children", "Referral hospitals"],
["Low-dose CT", "Complications, unclear after ultrasound when MRI unavailable", "Radiation: use only when it changes management", "Selected"],
["Chest X-ray", "Pneumonia as a mimic", "—", "If respiratory signs"]])}
` },

{ id: "staging", title: "Scoring the probability, and when to refer", html: `
<div class="calc" data-calc="passcore"></div>
${tbl(["PAS", "Probability", "What to do"], [
["<b>0–3</b>", "Low", "Look for another cause; discharge with clear safety-netting; review within 24 hours if pain persists"],
["<b>4–6</b>", "Intermediate", "Admit or observe, analgesia, repeat examination, ultrasound, surgical review"],
["<b>7–10</b>", "High", "Surgical review now; ultrasound to confirm should not delay referral"]])}
<p>The score is least reliable in children under 5, where perforation is common: refer early if you are worried, whatever the number.${r(5, 1)}</p>
<h3>Refer</h3>
<ul><li><b>Immediately</b> from BHU/PHC, or any hospital without a surgeon who operates on children: after IV fluids, analgesia and the first antibiotic dose.</li><li><b>To the national referral hospital</b>: children under 5, or any child with sepsis, generalised peritonitis or an abscess, where local surgeons do not manage young children.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. First orders (any facility)</h3>
<div class="calc" data-calc="appxchild"></div>
<ol><li><b>Nil by mouth</b>; IV access; bloods including group and save, glucose.</li>
<li><b>Shock</b> (poor perfusion): ${dr("ringer_lactate", "Ringer's lactate")} or 0.9% saline 10 mL/kg over 5–10 minutes, reassess, repeat; senior help (see <a href="#/d/sepsis-child">sepsis in children</a>).</li>
<li><b>Maintenance fluid:</b> isotonic fluid (0.9% saline with 5% dextrose, or Ringer's lactate) by the Holliday–Segar formula; check sodium and glucose daily.</li>
<li><b>Analgesia:</b> ${dr("paracetamol")} 15 mg/kg; ${dr("morphine")} 0.1 mg/kg IV titrated for moderate to severe pain. Pain relief does not hide the diagnosis.</li>
<li><b>Antibiotics:</b> ${dr("ceftriaxone")} 80 mg/kg once daily (max 2 g) + ${dr("metronidazole")} 7.5 mg/kg 8-hourly (max 500 mg); or ${dr("coamoxiclav")} 30 mg/kg 8-hourly. STG alternative: ${dr("ampicillin")} 50 mg/kg 6-hourly + metronidazole, adding ${dr("gentamicin")} 7.5 mg/kg daily if complicated.${r(7)}</li>
<li>Antiemetic: ${dr("ondansetron")} 0.15 mg/kg (max 4 mg).</li></ol>

<h3>B. Uncomplicated appendicitis</h3>
<ul><li><b>Appendicectomy within 24 hours</b>, laparoscopic where available. One dose of antibiotics before surgery; <b>none afterwards</b>.</li>
<li><b>Antibiotics alone</b> is an evidence-based option for uncomplicated appendicitis without an appendicolith (about two-thirds avoid surgery at one year), but needs specialist care, imaging confirmation and reliable follow-up. In most of Bhutan, surgery remains the safer standard.${r(4)}</li></ul>

<h3>C. Complicated appendicitis</h3>
<ul><li><b>Generalised peritonitis:</b> resuscitate, antibiotics, then laparoscopic or open appendicectomy with washout.</li>
<li><b>Abscess or phlegmon:</b> IV antibiotics, drainage of large abscesses, then appendicectomy either early (during the same admission) or as an interval operation if the child settles; both are acceptable and depend on the surgeon and setting.</li>
<li><b>After surgery:</b> IV antibiotics until the child is afebrile, eating and improving, then oral ${dr("coamoxiclav")} to complete about 5–7 days in total. Longer courses do not reduce abscesses.</li></ul>

<h3>D. Working in Bhutan</h3>
${tbl(["Situation", "What to do"], [
["Young child with vague pain and fever at a BHU", "Look for danger signs, give fluids, paracetamol, first antibiotic dose, and refer; do not wait for the classic story"],
["Ultrasound inconclusive, no MRI or CT", "Admit, repeat examination every 4–6 hours by the same clinician, repeat bloods; refer if not improving"],
["Long transfer", "Antibiotics and analgesia before leaving; maintenance fluid running; parents and health worker informed of danger signs"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("ceftriaxone"), "80 mg/kg IV once daily (max 2 g)", "With metronidazole"],
[dr("metronidazole"), "7.5 mg/kg IV 8-hourly (max 500 mg); oral the same", "Anaerobic cover"],
[dr("coamoxiclav"), "30 mg/kg (amoxicillin component) IV 8-hourly (max 1 g); oral to complete", "Single-agent option; oral step-down"],
[dr("ampicillin"), "50 mg/kg IV 6-hourly (max 2 g)", "STG; weak against many E. coli"],
[dr("gentamicin"), "7.5 mg/kg IV once daily (short course)", "Complicated cases if no ceftriaxone; check kidney function"],
[dr("paracetamol"), "15 mg/kg 6-hourly (IV under 10 kg: 10 mg/kg); max 60 mg/kg/day", "First-line analgesic"],
[dr("morphine"), "0.1 mg/kg IV over 5 minutes, titrated", "Monitor sedation and breathing"],
[dr("ondansetron"), "0.15 mg/kg (max 4 mg)", "Nausea and vomiting"]])}
` },

{ id: "populations", title: "Infants, adolescents and children with other conditions", html: `
<ul><li><b>Infants and toddlers:</b> appendicitis is rare but usually perforated; distension, fever and vomiting with a tender abdomen need surgical review. Consider intussusception and malrotation with volvulus (bilious vomiting).</li>
<li><b>Adolescent girls:</b> ask privately about periods and sexual activity; pregnancy test and pelvic ultrasound.</li>
<li><b>Children with neurodisability:</b> pain may show only as distress, poor feeding or seizures; examine carefully and image early.</li>
<li><b>Severe acute malnutrition:</b> signs are muted; fluids must be cautious (see the WHO SAM guidance).</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Child sent home with 'gastroenteritis' returns worse", "Full re-examination, PAS, ultrasound", "Pelvic appendicitis often causes diarrhoea"],
["Parents want to wait", "Explain the perforation risk clearly; document the discussion", "Delay after 36–48 h sharply raises perforation"],
["Abdominal pain with pneumonia signs", "Treat the pneumonia, re-examine the abdomen when breathing improves", "Basal pneumonia commonly mimics appendicitis"],
["Fever for over a week with abdominal pain", "Blood culture, think of enteric fever, ileocaecal TB", "Different treatment entirely"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["<b>Perforation and peritonitis</b>", "Generalised tenderness, high fever, sepsis", "Resuscitate, antibiotics, surgery"],
["Intra-abdominal or pelvic abscess", "Fever, pain or diarrhoea 5–10 days after surgery", "Ultrasound, antibiotics, drainage"],
["Wound infection", "Red, discharging wound", "Drain, dress, antibiotics if cellulitis"],
["Adhesive small bowel obstruction", "Vomiting, distension, months to years later", "Fluids, nasogastric tube, surgery if not settling"],
["Infertility in girls after perforation", "Long-term", "Evidence is weak; prompt treatment is the best prevention"]])}
<p>With timely surgery, children recover fully; mortality is very low. Most harm comes from late presentation and missed diagnoses in young children.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Wound check at 7–10 days; back to school in about 1 week after laparoscopic surgery, 1–2 weeks after open surgery; no contact sport for 2–4 weeks.</li>
<li>Read the histology: pinworms are treated with albendazole for the child and household; rare tumours need follow-up.</li></ul>
${box("green", "What to tell the parents", `<ul><li>"The appendix is a small pouch off the bowel. When it gets blocked and infected, taking it out cures the problem, and your child will live normally without it."</li><li>Give pain medicine on time for the first few days.</li><li>Let your child eat normally once they want to.</li></ul>`)}
${box("red", "Bring your child back at once if", `<ul><li>Fever returns, the tummy swells or pain gets worse</li><li>Repeated vomiting, especially green vomit</li><li>The wound becomes red, swollen or discharges pus</li><li>Your child is unusually sleepy or will not drink</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Acute appendicitis on ultrasound", src: "images/appx-us.png", mod: "Ultrasound, linear probe, long axis", ctx: "Right iliac fossa pain", loc: "Right iliac fossa", find: "Thick-walled, blind-ending tubular structure surrounded by bright inflamed fat", signs: "Non-compressible appendix over 6 mm, echogenic periappendiceal fat", interp: "Acute appendicitis. Ultrasound is the first imaging test in children because it uses no radiation", ddx: "Mesenteric adenitis (enlarged nodes with a normal appendix), terminal ileitis", by: "Borbély Márton", page: "https://commons.wikimedia.org/wiki/File:Appendicitis_ultrasound.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "Pinworms inside an inflamed appendix", src: "images/appx-pinworm.jpg", mod: "Histology, H&E", ctx: "Appendicectomy specimen", loc: "Lumen of the appendix", find: "Cross-sections of Enterobius vermicularis (pinworm) in the lumen, with acute inflammation of the wall", signs: "Pinworms with acute appendicitis", interp: "Worms are a recognised cause of luminal blockage (Bhutan STG). Treat the child and household with albendazole after recovery", by: "Ed Uthman", page: "https://commons.wikimedia.org/wiki/File:Pinworms_(Enterobiasis)_in_the_Lumen_of_the_Vermiform_Appendix_(8612815555).jpg", lic: "CC BY 2.0" })}
</div>
<div class="pair">
${fig({ title: "Appendicolith on CT", src: "images/appx-lith-ct.png", mod: "CT abdomen and pelvis, coronal", ctx: "Right iliac fossa pain", loc: "Right iliac fossa (circled)", find: "Calcified stone in a thickened appendix with surrounding fat stranding", signs: "Appendicolith", interp: "Predicts perforation and failure of antibiotics alone: surgery is preferred", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:AppendicolithPlainCT.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "McBurney's point", src: "images/mcburney.jpg", mod: "Clinical photograph", ctx: "Surface anatomy", loc: "Right iliac fossa", find: "One-third of the way from the right anterior superior iliac spine to the umbilicus", interp: "Point of maximum tenderness in classic appendicitis", by: "Steven Fruitsmaak", page: "https://commons.wikimedia.org/wiki/File:McBurney%27s_point.jpg", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with abdominal pain", [
F.d("Shock, peritonitis, bilious vomiting or a tender testis?"), F.a,
F.b([["Yes", F.e("Resuscitate, senior and surgical review now")], ["No", F.s("Examine chest, testes, skin; urine, glucose; PAS")]]), F.a,
F.b([["PAS 0–3", F.ok("Other cause; safety-net; review in 24 h")], ["PAS 4–6", F.s("Analgesia, observe, ultrasound, surgical review")], ["PAS 7–10", F.e("Surgeon now; fluids, analgesia, antibiotics")]]), F.a,
F.d("Appendicitis confirmed"), F.a,
F.b([["Uncomplicated", F.s("Appendicectomy within 24 h; no post-op antibiotics")], ["Complicated", F.s("Surgery or drainage; antibiotics about 5–7 days")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Watch the child walk and ask them to hop.</b> A child who jumps off the couch rarely has peritonitis.</li>
<li><b>Examine the testes in every boy with abdominal pain.</b></li>
<li>Under 5, appendicitis presents late and perforated: a low threshold for surgical review saves lives.</li>
<li>Morphine is safe and does not hide appendicitis.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Diagnosing gastroenteritis without reviewing", "Perforation at home", "Re-examine; give clear return advice"],
["Not examining the testes", "Lost testis from torsion", "Routine scrotal examination"],
["Hypotonic maintenance fluid", "Hyponatraemia", "Isotonic fluids, check sodium"],
["Adult doses for children", "Overdose or underdose", "Use weight-based dosing (calculator above)"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name the components of the Paediatric Appendicitis Score.", "Pain on cough, hop or percussion (2), RIF tenderness (2), anorexia, fever ≥38 °C, nausea/vomiting, migration of pain, leucocytosis >10, neutrophilia >75% (1 each): total 10.")}
${qa("Student", "Why do young children perforate more often?", "Vague symptoms delay diagnosis, and the underdeveloped omentum cannot wall off the infection.")}
${qa("Intern/MO", "Which two examinations must not be forgotten in a boy with abdominal pain?", "The testes (torsion) and the chest (right lower lobe pneumonia).")}
${qa("Intern/MO", "Dose ceftriaxone and metronidazole for a 20 kg child.", "Ceftriaxone 1.6 g IV once daily (80 mg/kg); metronidazole 150 mg IV 8-hourly (7.5 mg/kg).")}
${qa("Intern/MO", "What is the first imaging test, and why?", "Ultrasound: accurate in experienced hands, no radiation, and it also detects intussusception and ovarian pathology.")}
${qa("Specialist", "Are post-operative antibiotics needed after uncomplicated appendicectomy?", "No; one pre-operative dose is sufficient.")}
${qa("Viva", "What is mesenteric adenitis and why does it matter?", "Inflamed mesenteric lymph nodes, usually after a viral infection; it mimics appendicitis and is diagnosed by finding enlarged nodes and a normal appendix on ultrasound.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Di Saverio S, Podda M, De Simone B et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. <i>World J Emerg Surg</i> 2020;15:27. <a href="https://doi.org/10.1186/s13017-020-00306-3" target="_blank" rel="noopener">doi:10.1186/s13017-020-00306-3</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.1.7 Acute appendicitis; National Essential Medicines List 2025.</li>
<li id="ref-3">World Health Organization. Pocket book of hospital care for children: guidelines for the management of common childhood illnesses, 2nd ed. Geneva: WHO; 2013 (surgical problems: appendicitis). <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Minneci PC, Hade EM, Lawrence AE et al. Association of nonoperative management using antibiotic therapy vs laparoscopic appendectomy with treatment success and disability days in children with uncomplicated appendicitis. <i>JAMA</i> 2020;324:581–593. <a href="https://doi.org/10.1001/jama.2020.10888" target="_blank" rel="noopener">doi:10.1001/jama.2020.10888</a></li>
<li id="ref-5">Samuel M. Pediatric appendicitis score. <i>J Pediatr Surg</i> 2002;37:877–881. <a href="https://doi.org/10.1053/jpsu.2002.32893" target="_blank" rel="noopener">doi:10.1053/jpsu.2002.32893</a></li>
<li id="ref-6">Sawyer RG, Claridge JA, Nathens AB et al. Trial of short-course antimicrobial therapy for intraabdominal infection (STOP-IT). <i>N Engl J Med</i> 2015;372:1996–2005. <a href="https://doi.org/10.1056/NEJMoa1411162" target="_blank" rel="noopener">doi:10.1056/NEJMoa1411162</a></li>
<li id="ref-7">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) antibiotic book. Geneva: WHO; 2022 (acute appendicitis, children). <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-8">Bhutan Clinical Reference app: Acute appendicitis; Paediatric Appendicitis Score (topic and tool pages, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and NEML content", "<span class='pass'>Verified</span>", "STG 2024 §4.1.7"],
["PAS components and thresholds", "<span class='pass'>Checked</span>", "Samuel 2002; WSES 2020"],
["Weight-based doses", "<span class='pass'>Checked</span>", "WHO AWaRe 2022, BNFc; tested in the calculator"],
["Images", "<span class='pass'>Done</span>", "CC BY 2.0 / CC BY-SA 3.0 / 4.0"]], "qc")}
` }
]
});
