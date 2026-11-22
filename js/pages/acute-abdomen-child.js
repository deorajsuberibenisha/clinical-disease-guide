/* Acute abdomen in children: obstruction, intussusception, malrotation, pyloric stenosis, hernia, perforation */
registerPage({
id: "acute-abdomen-child",
title: "Acute Abdomen: Obstruction, Intussusception & Pyloric Stenosis — Children",
subtitle: "Green vomit is an emergency: intussusception, malrotation, pyloric stenosis, trapped hernias, worm bolus, newborn obstruction and perforation, with weight-based fluids",
age: "Children & adolescents", specs: ["paeds", "surg", "emerg", "neo"],
keywords: ["acute abdomen child", "intestinal obstruction child", "intussusception", "redcurrant jelly", "malrotation", "midgut volvulus", "bilious vomiting", "green vomit", "pyloric stenosis", "projectile vomiting", "incarcerated hernia", "inguinal hernia infant", "duodenal atresia", "double bubble", "Hirschsprung", "Ascaris obstruction", "worm bolus", "typhoid perforation child", "neonatal obstruction"],
related: ["appendicitis-child", "acute-abdomen-adult", "ge-child", "sepsis-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In children the surgical abdomen hides behind ordinary complaints: crying, vomiting, a swollen tummy. A few signs change everything, and the most important is the colour of the vomit.</p>
<div class="glance">
<div><h4>Emergency signs</h4><ul><li><b>Green (bilious) vomiting</b></li><li>Distension with no stool</li><li>Blood and mucus in stool</li><li>Tender lump in the groin or scrotum</li><li>Lethargy, poor perfusion</li></ul></div>
<div><h4>By age</h4><ul><li><b>Newborn:</b> atresia, malrotation, Hirschsprung, anorectal malformation</li><li><b>2–8 weeks:</b> pyloric stenosis</li><li><b>3 months–3 years:</b> intussusception</li><li><b>Any age:</b> hernia, adhesions, worms, appendicitis</li></ul></div>
<div><h4>First steps (STG)</h4><p>ABC, nil by mouth, <b>NG tube</b>, IV fluids, antibiotics if obstruction or sepsis, and urgent escorted referral.</p></div>
<div><h4>Antibiotics (STG)</h4><p>${dr("ampicillin")} 25 mg/kg 6-hourly + ${dr("gentamicin")} 5 mg/kg daily; add ${dr("metronidazole")} for perforation or peritonitis.</p></div>
<div><h4>Image</h4><p>Ultrasound (intussusception target sign, pyloric muscle), abdominal X-ray, contrast study for malrotation.</p></div>
<div><h4>Always examine</h4><p>Groins, testes, anus (in newborns), and the whole abdomen gently.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§12.4.3–12.4.5) gives a clear pre-referral plan for obstruction, intussusception and pyloric stenosis. Paediatric surgery and enema reduction of intussusception are centred at the national referral hospital: refer early, with an escort, an NG tube on drainage and fluids running. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes by age, and why children are different", html: `
${tbl(["Age", "Common causes", "Key clue"], [
["<b>Newborn (first days)</b>", "Duodenal or intestinal atresia, malrotation with volvulus, Hirschsprung disease, meconium ileus, anorectal malformation", "Green vomiting, no meconium by 24–48 hours, distension, no anal opening"],
["<b>2–8 weeks</b>", "Hypertrophic pyloric stenosis", "Forceful non-bilious vomiting after feeds, hungry baby"],
["<b>Infants</b>", "Incarcerated inguinal hernia (especially preterm), malrotation", "Irritable baby with a firm groin lump"],
["<b>3 months–3 years</b>", "<b>Intussusception</b>: the commonest cause of obstruction from 5 months to 3 years and the commonest abdominal emergency under 2 (STG)", "Bouts of screaming, pale and floppy between, vomiting, redcurrant-jelly stool"],
["<b>Older children</b>", "Appendicitis, adhesions after surgery, worm bolus (Ascaris), volvulus, typhoid perforation, abdominal TB, trauma", "History, worms passed, prolonged fever"]])}
<ul><li>Children dehydrate fast, compensate well and then collapse suddenly: low blood pressure is a late sign.</li>
<li>Bilious vomiting in an infant is <b>malrotation with volvulus until proven otherwise</b>: the whole midgut can die within hours.</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Intussusception: why time matters", [
F.s("Lead point (usually swollen Peyer's patches after a viral illness; a polyp, Meckel's diverticulum or lymphoma in older children)"), F.a,
F.s("Peristalsis drags the proximal bowel (intussusceptum) into the distal bowel, usually ileum into colon"), F.a,
F.s("Mesentery is squeezed → venous congestion → mucosal bleeding and mucus (redcurrant-jelly stool)"), F.a,
F.d("Arterial supply fails"), F.a,
F.e("Gangrene, perforation, peritonitis, shock"), F.a,
F.ok("Early enema reduction succeeds in about 8 of 10 children; late cases need surgery")])}
<p><b>Malrotation:</b> the gut fails to rotate and fix normally, leaving the midgut on a narrow stalk that can twist (volvulus) and cut off the superior mesenteric artery. <b>Pyloric stenosis:</b> the pyloric muscle thickens over the first weeks; persistent vomiting of acid causes <b>hypochloraemic, hypokalaemic metabolic alkalosis</b>, which must be corrected before anaesthesia. <b>Ascaris:</b> a tangle of roundworms can block the small bowel, especially after deworming during heavy infection.${r(1)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide"], [
["Antibiotics (intussusception, obstruction)", "Ampicillin 25 mg/kg 6-hourly + gentamicin 5 mg/kg daily", "Not routinely needed for uncomplicated intussusception before enema; for perforation or peritonitis: ceftriaxone + metronidazole, or amoxicillin–clavulanate (WHO AWaRe)", "Give the STG combination when referring a sick child; <b>add metronidazole, or use ceftriaxone + metronidazole</b>, for perforation or peritonitis " + LB.loc()],
["Pyloric stenosis bolus", "0.9% saline 20 mL/kg if severely dehydrated", "NICE NG29: 10 mL/kg boluses, reassess", "10–20 mL/kg; then correct electrolytes slowly before surgery"],
["Intussusception reduction", "Refer to higher centre", "Image-guided air or hydrostatic enema first if no peritonitis or perforation", "Refer urgently to a centre with enema reduction and paediatric surgery"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Condition", "Typical story", "Examination"], [
["<b>Intussusception</b>", "Infant with sudden bouts of screaming and drawing up the legs every 10–20 minutes, pale, normal or sleepy between; vomiting; later blood and mucus in stool. The full triad appears in only about a quarter", "Sausage-shaped mass, often right upper abdomen; empty right iliac fossa; blood on the rectal finger; lethargy can dominate"],
["<b>Malrotation with volvulus</b>", "Newborn or infant, sudden green vomiting, often initially with a soft abdomen", "Distension and tenderness late; shock; blood per rectum means ischaemia"],
["<b>Pyloric stenosis</b>", "Baby 2–8 weeks (STG: 2–5 weeks), boys more, projectile non-bilious vomiting after feeds, hungry, poor weight gain", "Dehydration; visible peristalsis; olive-sized mass right of the midline during a test feed"],
["<b>Incarcerated hernia</b>", "Irritable infant, vomiting, groin or scrotal lump that no longer goes back", "Firm, tender lump in the groin; transillumination does not exclude it"],
["<b>Newborn obstruction</b>", "Green vomiting, no meconium by 24–48 hours, distension", "Check the anus and its position; abdominal distension"],
["<b>Worm bolus</b>", "School-age child with colicky pain, vomiting worms, distension", "Mobile, doughy mass; worms in stool or vomit"],
["<b>Perforation</b> (typhoid, appendix, trauma)", "Prolonged fever then sudden worse pain; or after injury", "Rigid, silent abdomen; shock"]])}
${box("red", "Emergency — refer urgently with an escort", `<ul><li>Green vomit at any age</li><li>Shock: fast heart rate, cold peripheries, capillary refill over 3 seconds, drowsiness</li><li>Blood per rectum with abdominal pain or distension</li><li>Irreducible groin lump; tender, swollen testis</li><li>Rigid or distended, tender abdomen</li></ul>`)}
<h3>The typical patient</h3>
<p>An 8-month-old girl from Paro, who had a cold last week, has had sudden attacks of screaming for six hours; between attacks she lies pale and quiet. She vomited three times and has just passed a stool of blood and mucus. A sausage-shaped mass is felt in the right upper abdomen. <b>This is intussusception</b>: the age, the episodic colic with a quiet child between, the recent viral illness (lymphoid lead point), the redcurrant-jelly stool and the mass. She needs IV access, fluids, an NG tube if vomiting, the STG antibiotics, and urgent escorted transfer for ultrasound and enema reduction.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Gastroenteritis", "Diarrhoea, fever, sick contacts, vomiting not green", "Bilious vomiting, distension, blood with colic", "Observation, rehydration response"],
["Dysentery", "Fever, frequent bloody stools with tenesmus", "Episodic colic with a quiet child, mass", "Stool microscopy; ultrasound if doubt"],
["Gastro-oesophageal reflux", "Effortless posseting in a thriving baby", "Projectile vomiting, weight loss", "Clinical; ultrasound for pyloric stenosis"],
["Henoch–Schönlein purpura", "Purpuric rash, joint pain (can also cause intussusception)", "—", "Skin; ultrasound"],
["Appendicitis", "Older child, right iliac fossa pain", "—", "See appendicitis (children)"],
["Constipation and faecal impaction", "Hard stools, palpable faeces, well child", "Vomiting green, systemic illness", "History, examination"],
["UTI, sepsis, meningitis", "Fever, irritability, vomiting in infants", "—", "Urine, blood culture, LP when indicated"],
["Testicular torsion", "Sudden scrotal pain, high-riding testis", "—", "Examine the scrotum; urgent exploration"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Capillary glucose", "Hypoglycaemia in sick or fasting infants", "—", "Essential"],
["<b>Electrolytes and blood gas</b>", "Dehydration; pyloric stenosis alkalosis (low chloride and potassium, high bicarbonate)", "Repeat before surgery", "Essential"],
["Full blood count, CRP, blood culture", "Infection, ischaemia, perforation", "—", "Essential if unwell"],
["Group and save", "Theatre", "—", "Essential"],
["<b>Ultrasound</b>", "Intussusception (target or doughnut sign, close to 100% sensitive in skilled hands); pyloric muscle; free fluid; whirlpool sign of volvulus", "Pyloric stenosis: muscle thickness 3 mm or more, length 15 mm or more", "First imaging"],
["Abdominal X-ray", "Dilated loops, fluid levels, double bubble (duodenal atresia), free gas, worms", "May be near normal early in intussusception", "Essential"],
["Upper GI contrast study", "Malrotation: abnormal position of the duodenojejunal flexure, corkscrew duodenum", "Gold standard; do not delay surgery in a shocked baby", "Urgent, referral hospital"],
["Stool or vomit examination", "Worms", "—", "When suspected"]])}
` },

{ id: "staging", title: "Severity, fluids and when to refer", html: `
<p>Children with obstruction lose fluid into the bowel as well as by vomiting. Calculate fluids by weight, replace NG losses, and correct potassium once the child passes urine.${r(5)}</p>
<div class="calc" data-calc="obsfluids"></div>
${tbl(["Picture", "Plan"], [
["Shock, peritonitis, perforation, bilious vomiting in an infant", "Resuscitate and transfer immediately to paediatric surgery"],
["Suspected intussusception, stable", "Urgent ultrasound and enema reduction at a referral centre, same day"],
["Pyloric stenosis", "Rehydrate and correct electrolytes first (often 24–48 hours), then surgery: it is urgent, not an emergency"],
["Incarcerated hernia without strangulation", "Gentle manual reduction with analgesia by an experienced clinician; repair within a few days"]])}
` },

{ id: "manage", title: "Management", html: `
<h3>A. Before referral (STG, any facility)</h3>
<p>From the Bhutan STG, the WHO Pocket Book and the Bhutan Clinical Reference app.${r(2, 7, 4)}</p>
<ol><li><b>ABC</b>; oxygen if needed; keep warm; check glucose.</li>
<li><b>Nil by mouth; nasogastric tube</b> on free drainage.</li>
<li><b>IV fluids:</b> shock bolus 10 mL/kg (STG 20 mL/kg for severely dehydrated pyloric stenosis) of 0.9% saline or ${dr("ringer_lactate", "Ringer's lactate")}; then maintenance with 0.9% saline and 5% dextrose (calculator above).</li>
<li><b>Antibiotics</b> for obstruction with illness, intussusception being referred, or peritonitis: ${dr("ampicillin")} 25 mg/kg IV 6-hourly + ${dr("gentamicin")} 5 mg/kg IV daily (STG); add ${dr("metronidazole")} 7.5 mg/kg 8-hourly, or use ${dr("ceftriaxone")} 80 mg/kg daily + metronidazole, for perforation or peritonitis.${r(1, 6)}</li>
<li><b>Analgesia:</b> ${dr("paracetamol")} 15 mg/kg; ${dr("morphine")} 0.1 mg/kg IV titrated for severe pain.</li>
<li><b>Refer urgently with a medical escort</b> (STG), with the NG tube, fluid chart and doses written down.</li></ol>

<h3>B. Intussusception</h3>
<ul><li><b>Image-guided enema reduction</b> (air or saline/contrast, under fluoroscopy or ultrasound) is first line if there is no peritonitis, perforation or uncorrected shock; it succeeds in about 80–90%, with perforation in under 1%.${r(3)}</li>
<li><b>Surgery</b> if enema fails, there is peritonitis or perforation, or a pathological lead point is suspected (older child).</li>
<li>Recurrence is about 1 in 10, most within the first days: tell parents to return with the same symptoms.</li></ul>

<h3>C. Malrotation with volvulus</h3>
<p>Emergency laparotomy (Ladd's procedure) after rapid resuscitation; any delay risks losing the whole midgut.</p>

<h3>D. Pyloric stenosis</h3>
<ul><li>Stop feeds; NG tube; rehydrate and <b>correct alkalosis and potassium before surgery</b>: typically 0.9% saline with 5% dextrose and 20 mmol/L potassium chloride at about 1.5 times maintenance once urine is passed, checking electrolytes 6–12 hourly. Surgery when chloride is normal (about 100 mmol/L or more), bicarbonate has fallen (under about 28 mmol/L) and potassium is normal.</li>
<li>Pyloromyotomy (open or laparoscopic) cures it; feeds restart within hours.</li></ul>

<h3>E. Other causes</h3>
<ul><li><b>Incarcerated inguinal hernia:</b> analgesia and gentle sustained reduction; repair within 24–72 hours. Failed reduction or signs of strangulation: emergency surgery.</li>
<li><b>Newborn obstruction</b> (atresia, Hirschsprung, anorectal malformation): NG tube, IV fluids with glucose, keep warm, transfer to paediatric surgery; never feed.</li>
<li><b>Worm bolus:</b> drip and suck usually works; deworm with albendazole only after the obstruction has settled; surgery for peritonitis, volvulus or failure.</li>
<li><b>Adhesive obstruction</b> after previous surgery: drip and suck, with surgery for danger signs (as in adults).</li>
<li><b>Typhoid or traumatic perforation:</b> resuscitate, ceftriaxone + metronidazole, surgery.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("ampicillin"), "25 mg/kg IV 6-hourly (STG); 50 mg/kg in severe sepsis", "With gentamicin"],
[dr("gentamicin"), "5 mg/kg IV once daily (STG); 7.5 mg/kg in severe infection", "Check kidney function"],
[dr("metronidazole"), "7.5 mg/kg IV 8-hourly (max 500 mg)", "Perforation, peritonitis"],
[dr("ceftriaxone"), "80 mg/kg IV once daily (max 2 g)", "With metronidazole"],
[dr("paracetamol"), "15 mg/kg 6-hourly (IV under 10 kg: 10 mg/kg)", "Max 60 mg/kg/day"],
[dr("morphine"), "0.1 mg/kg IV, titrated", "Monitor breathing"],
[dr("kcl"), "20 mmol/L in maintenance once passing urine", "Pyloric stenosis, ongoing losses"],
[dr("ringer_lactate"), "Bolus 10 mL/kg (20 mL/kg STG in severe dehydration)", "Reassess after each bolus"]])}
` },

{ id: "populations", title: "Newborns, preterm infants and children with other conditions", html: `
<ul><li><b>Newborns:</b> check that the anus is present and normally placed; delayed meconium beyond 48 hours suggests Hirschsprung disease or meconium ileus. Babies with Down syndrome have more duodenal atresia and Hirschsprung disease.</li>
<li><b>Preterm infants:</b> inguinal hernias are common and incarcerate easily: repair before discharge or soon after.</li>
<li><b>Severe acute malnutrition:</b> fluids must be slower and electrolyte care careful.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Infant with 'gastroenteritis' who becomes lethargic and pale", "Think of intussusception; ultrasound", "Lethargy can be the main sign"],
["Green vomit but a soft abdomen", "Urgent referral anyway", "Malrotation can look benign until the bowel dies"],
["Long transfer at night with a vomiting baby", "NG tube, IV fluids with glucose, warm, escort", "Aspiration, hypoglycaemia and hypothermia kill on the road"],
["Child passing worms with abdominal distension", "Drip and suck; no deworming yet", "Deworming during obstruction can worsen it"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Bowel gangrene and perforation", "Shock, peritonitis, blood per rectum", "Emergency surgery"],
["Hypokalaemic alkalosis, apnoea after anaesthesia", "Pyloric stenosis not corrected", "Correct before surgery"],
["Short bowel syndrome", "After large resection (volvulus)", "Specialist nutrition"],
["Recurrent intussusception", "Same symptoms days later", "Repeat ultrasound and enema"],
["Hypoglycaemia, hypothermia", "In fasting infants", "Glucose-containing fluids, warmth"]])}
<p>With early diagnosis and reduction or surgery, children with intussusception, pyloric stenosis and hernias recover fully. Delay drives almost all the serious outcomes.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>After intussusception reduction: explain the recurrence risk and return signs.</li>
<li>After pyloromyotomy: feeds restart within hours; mild vomiting can continue for a day or two.</li>
<li>After worm obstruction: deworm the child and household once recovered; hygiene advice.</li></ul>
${box("green", "What to tell parents", `<ul><li>"A blockage in a child's bowel can become dangerous quickly, so we are sending your child to the surgeons now."</li><li>Do not give food or drink unless the doctor says so.</li><li>Keep the baby warm on the journey.</li></ul>`)}
${box("red", "Bring your child back at once if", `<ul><li>Vomiting is green, or keeps happening</li><li>Attacks of screaming return, or blood appears in the stool</li><li>The belly swells, or your child becomes pale, floppy or very sleepy</li><li>A lump in the groin will not go back or becomes painful</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Intussusception: the target sign", src: "images/intuss-target-us.png", mod: "Ultrasound, transverse, with colour Doppler", ctx: "Infant with colicky pain and vomiting", loc: "Right abdomen", find: "Concentric rings of bowel wall within bowel (target or doughnut), with little blood flow", signs: "Target sign; reduced Doppler flow suggests compromised bowel", interp: "Intussusception: refer for enema reduction or surgery", ddx: "Thickened bowel from enteritis (no layered rings)", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Ultrasound_of_target_sign_in_intussusception_of_the_right_bowel.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "How intussusception happens", src: "images/intuss-diagram.svg", mod: "Diagram", ctx: "Teaching illustration", loc: "Small bowel telescoping into the next segment", find: "Proximal bowel drawn into the distal segment with its mesentery", interp: "The trapped mesentery explains the bleeding, mucus and ischaemia", by: "Olek Remesz", page: "https://commons.wikimedia.org/wiki/File:Intussusception_EN.svg", lic: "CC BY-SA 3.0" })}
</div>
<div class="pair">
${fig({ title: "Pyloric stenosis on ultrasound", src: "images/pyloric-stenosis-us.jpg", mod: "Ultrasound", ctx: "6-week-old with projectile vomiting", loc: "Pylorus", find: "Thickened, elongated pyloric muscle", signs: "Muscle thickness 3 mm or more, channel length 15 mm or more", interp: "Hypertrophic pyloric stenosis: correct electrolytes, then pyloromyotomy", by: "Dr Laughlin Dawes", page: "https://commons.wikimedia.org/wiki/File:PyloricStenosisUS.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Double bubble: duodenal atresia", src: "images/double-bubble-xr.jpg", mod: "Abdominal X-ray, newborn", ctx: "Vomiting from the first day", loc: "Upper abdomen", find: "Two gas bubbles (stomach and proximal duodenum) with no gas beyond", signs: "Double bubble sign", interp: "Duodenal atresia: NG tube, IV fluids, paediatric surgery", ddx: "Malrotation with volvulus (needs an urgent contrast study)", by: "JasonRobertYoungMD", page: "https://commons.wikimedia.org/wiki/File:Radiograph_with_Double_Bubble_Sign.jpg", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Roundworms in the small bowel", src: "images/ascaris-barium.jpg", mod: "Barium follow-through X-ray", ctx: "Ascaris infection", loc: "Small bowel", find: "Long, thin filling defects (the worms) running along the bowel lumen", signs: "Ascaris worms outlined by barium", interp: "Heavy worm burden: can obstruct the bowel; deworm after any obstruction settles", by: "SuSanA Secretariat", page: "https://commons.wikimedia.org/wiki/File:Ascaris_infection_in_the_x-ray_image-_ascaris_arranged_tidily_along_the_long_axis_of_the_small_bowel_(South_Africa)_(16424840021).jpg", lic: "CC BY 2.0" })}
${fig({ title: "Sigmoid volvulus in a child", src: "images/sigmoid-volvulus-xr.jpg", mod: "Abdominal X-ray, supine", ctx: "10-year-old with gross distension", loc: "Rising from the pelvis", find: "Huge gas-filled inverted-U loop", signs: "Coffee-bean sign", interp: "Volvulus: urgent surgical decompression or surgery", by: "Mont4nha", page: "https://commons.wikimedia.org/wiki/File:Sigmoidvolvulus.jpg", lic: "CC0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with vomiting and abdominal pain", [
F.d("Green vomit, shock, peritonitis or blood with colic?"), F.a,
F.b([["Yes", F.e("ABC, NG tube, IV fluids, STG antibiotics, escorted urgent referral")], ["No", F.s("Hydration, glucose, examine groins, testes, anus; urine")]]), F.a,
F.b([["2–8 weeks, projectile, non-bilious", F.s("Ultrasound pylorus; correct electrolytes; surgery")], ["3 months–3 years, colic", F.s("Ultrasound for intussusception; enema reduction")], ["Groin lump", F.s("Reduce gently or operate")]]), F.a,
F.ok("Otherwise: reassess, treat gastroenteritis or other medical causes, safety-net")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Green vomit is a surgical emergency</b> in a baby, whatever the abdomen feels like.</li>
<li>Lethargy and pallor can be the only signs of intussusception.</li>
<li>Pyloric stenosis is urgent, not an emergency: fix the electrolytes first.</li>
<li>Check the groins and testes in every child with vomiting or abdominal pain.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling intussusception gastroenteritis", "Gangrene, surgery instead of an enema", "Ultrasound any child with colic and lethargy"],
["Feeding a baby with green vomit", "Aspiration, delay", "Nil by mouth, NG tube, refer"],
["Operating on pyloric stenosis with alkalosis", "Post-anaesthetic apnoea", "Correct chloride, bicarbonate and potassium first"],
["Deworming during worm obstruction", "Worsens the bolus", "Deworm after recovery"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the commonest abdominal emergency in children under 2?", "Intussusception (Bhutan STG).")}
${qa("Student", "What does green vomiting in an infant suggest?", "Malrotation with midgut volvulus until proven otherwise: a surgical emergency.")}
${qa("Intern/MO", "What metabolic picture does pyloric stenosis cause?", "Hypochloraemic, hypokalaemic metabolic alkalosis.")}
${qa("Intern/MO", "What are the STG pre-referral antibiotics for intussusception?", "Ampicillin 25 mg/kg IV 6-hourly and gentamicin 5 mg/kg IV once daily.")}
${qa("Intern/MO", "What is the ultrasound sign of intussusception?", "Target (doughnut) sign on the transverse view; pseudokidney sign on the longitudinal view.")}
${qa("Specialist", "When is enema reduction contraindicated?", "Peritonitis, perforation (free gas) or shock that has not been corrected.")}
${qa("Viva", "Why does malrotation predispose to volvulus?", "The midgut mesentery has a narrow base, so the bowel can twist around the superior mesenteric artery.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.4.3 Intestinal obstruction, §12.4.4 Intussusception, §12.4.5 Hypertrophic pyloric stenosis; National Essential Medicines List 2025.</li>
<li id="ref-2">World Health Organization. Pocket book of hospital care for children, 2nd ed. Geneva: WHO; 2013 (common surgical problems). <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Ko HS, Schenk JP, Tröger J, Rohrschneider WK. Current radiological management of intussusception in children. <i>Eur Radiol</i> 2007;17:2411–2421. <a href="https://doi.org/10.1007/s00330-007-0589-y" target="_blank" rel="noopener">doi:10.1007/s00330-007-0589-y</a></li>
<li id="ref-4">Ten Broek RPG, Krielen P, Di Saverio S et al. Bologna guidelines for adhesive small bowel obstruction: 2017 update. <i>World J Emerg Surg</i> 2018;13:24. <a href="https://doi.org/10.1186/s13017-018-0185-2" target="_blank" rel="noopener">doi:10.1186/s13017-018-0185-2</a></li>
<li id="ref-5">National Institute for Health and Care Excellence. Intravenous fluid therapy in children and young people in hospital (NG29). 2015, updated 2020. <a href="https://www.nice.org.uk/guidance/ng29" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-6">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) antibiotic book. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-7">Bhutan Clinical Reference app: Intestinal obstruction and intussusception in children; Acute abdomen (topic pages, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='pass'>Verified</span>", "STG 2024 §12.4.3–12.4.5 read directly"],
["Intussusception and pyloric stenosis thresholds", "<span class='pass'>Checked</span>", "Standard paediatric surgical and radiology practice; Ko 2007"],
["Weight-based fluids", "<span class='pass'>Checked</span>", "NICE NG29; tested in the calculator"],
["Images", "<span class='pass'>Done</span>", "CC0 / CC BY 2.0 / CC BY-SA 3.0 / 4.0"]], "qc")}
` }
]
});
