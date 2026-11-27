/* Necrotising enterocolitis — full depth (Thin-page Round 5, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (§7 gavage feeding — girth over 2 cm or aspirate over 25% → evaluate for NEC,
   nil by mouth; §6.6 withhold feeds in NEC; §6.8 blood in stool table; §6.12 neonatal surgical antibiotic regimen ampicillin +
   gentamicin 4 mg/kg + metronidazole 15 then 7.5 mg/kg); Walsh & Kliegman 1986 modified Bell staging (classic treatment by stage);
   Hu et al., Pediatr Surg Int 2024 review (PMC10776729, read in browser: Bell stages, NPO, refeeding meta-analysis, prevention table);
   ERNICA evidence-based guideline on surgical aspects of NEC 2024 (Neonatology, PMC12129410, all 7 recommendations and 3 good-practice
   statements); WHO 2022 preterm/LBW (mother's milk, donor milk, feed advancement, probiotics); Bhutan NEML 2025. */
registerPage({
id: "nec-child",
title: "Necrotising Enterocolitis (NEC)",
subtitle: "A preterm baby with feed intolerance, a swollen belly and blood in the stool has NEC until proven otherwise: stop feeds, decompress the stomach, give IV fluids and three antibiotics, X-ray and examine often, and involve the surgeon early. Mother's milk and careful feed advancement prevent most cases",
age: "Newborns (mostly preterm)", specs: ["neo", "nicu", "surg", "gi"],
keywords: ["necrotising enterocolitis", "necrotizing enterocolitis", "NEC", "Bell staging", "modified Bell", "pneumatosis intestinalis", "portal venous gas", "pneumoperitoneum", "feed intolerance", "bilious aspirate", "abdominal distension newborn", "bloody stool newborn", "peritoneal drain", "laparotomy", "short bowel", "stricture", "preterm"],
related: ["preterm-child", "neosepsis-child", "acute-abdomen-child", "hirschsprung-child", "rds-child", "asphyxia-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">NEC is inflammation and death of the bowel wall, mostly in preterm babies in the second week of life after milk feeds have started. It is the commonest gastrointestinal emergency in preterm babies. Early signs are subtle — feed intolerance, a fuller tummy, a pause in breathing — so check the abdomen before every tube feed.</p>
<div class="glance">
<div><h4>Warning signs</h4><p>Girth up <b>more than 2 cm</b> or aspirate over <b>25% of the last feed</b> (Bhutan IMNCI), bile in aspirates, blood in stool, apnoea, lethargy.</p></div>
<div><h4>Stop</h4><p>Nil by mouth, <b>open nasogastric tube</b> on free drainage, IV fluids by day of life.</p></div>
<div><h4>Antibiotics</h4><p>${dr("ampicillin")} 50 mg/kg + ${dr("gentamicin")} 4 mg/kg daily + ${dr("metronidazole")} 15 mg/kg then 7.5 mg/kg 12-hourly (Bhutan IMNCI).</p></div>
<div><h4>Watch</h4><p>Abdominal X-ray and examination every 6–12 h in stage II–III; platelets, gas, CRP, culture.</p></div>
<div><h4>Surgeon</h4><p>Perforation (free air) or deterioration despite treatment → laparotomy or peritoneal drain.</p></div>
<div><h4>Prevent</h4><p>Mother's own milk (donor if none), feed advance up to 30 mL/kg/day, antenatal steroids.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan has no STG chapter on NEC. The Hospital IMNCI 2024 asks staff to measure abdominal girth and aspirate before every tube feed and to stop feeds and evaluate for NEC if the girth rises more than 2 cm or the aspirate exceeds 25% of the last feed; a sick baby with blood in the stool, vomiting and distension is kept nil by mouth, started on IV fluids and empirical antibiotics, and referred urgently. Neonatal surgery is at JDWNRH. Ampicillin, gentamicin, metronidazole injection, cefotaxime and 10% dextrose are on the NEML 2025. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Who gets NEC", html: `
${tbl(["Risk factor", "Notes"], [
["<b>Prematurity and very low birth weight</b>", "The main risk; the more preterm, the later the onset (often 2–6 weeks in extremely preterm babies)"],
["<b>Formula feeding</b>", "Mother's own milk and donor milk protect"],
["Fast feed advancement", "WHO 2022 allows up to 30 mL/kg/day; faster increases are not recommended"],
["Asphyxia, shock, low cardiac output", "Poor gut blood flow"],
["Congenital heart disease, polycythaemia, exchange transfusion", "Typical causes of NEC in <b>term</b> babies"],
["Growth restriction with abnormal antenatal Doppler", "Gut already under-perfused"],
["Prolonged empirical antibiotics, acid suppression", "Disturbed gut bacteria"]])}
<p>Bhutan IMNCI lists feed intolerance and NEC among the problems of preterm babies.${r(1)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Necrotising enterocolitis", [F.s("Immature gut barrier and immune response"), F.a, F.s("Abnormal bacterial colonisation + formula + reduced blood flow"), F.a, F.e("Mucosal injury and inflammation"), F.a, F.e("Gas-forming bacteria invade the bowel wall — pneumatosis"), F.a, F.e("Gas enters the portal veins; full-thickness necrosis"), F.a, F.e("Perforation, peritonitis, sepsis, shock, DIC")])}
<p>The terminal ileum and colon are affected most often; in severe cases most of the bowel ("NEC totalis").${r(4)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Classic (Walsh & Kliegman 1986)", "Newer evidence and guidance", "This guide"], [
["Nil by mouth — stage IIA", "7–10 days", "Meta-analysis: no difference between refeeding within 5 days and later (Hu 2024 review)", "Restart when clinically well, no portal gas and X-ray improving — often 5–7 days"],
["Nil by mouth — stage IIB/III", "14 days", "After surgery: start feeds within 7 days if no ongoing disease or obstruction (ERNICA 2024)", "7–14 days by course"],
["Antibiotic course", "7–10 days (IIA), 14 days (IIB–III)", "No trial-based durations; shorter for suspected (stage I) NEC once excluded", "Stage I: stop at 48–72 h if cultures negative and well; IIA 7–10 days; IIB–III 10–14 days"],
["Perforation: drain or laparotomy", "Laparotomy", "Either, by centre experience; drain as a bridge when surgery is not possible (ERNICA, conditional)", "Laparotomy at JDWNRH; drain by a trained surgeon if transfer is delayed"],
["Fixed bowel loop", "Indication for surgery", "Not on its own; combine with other findings (ERNICA, conditional)", "One factor among several"],
["Probiotics", "—", "WHO 2022: may be considered for human-milk-fed under 32 weeks", "Only with a quality-assured product and NICU protocol"],
["Antibiotic regimen", "Ampicillin + aminoglycoside ± anaerobic cover", "Varies by unit resistance", "Bhutan IMNCI triple regimen"]])}
<p>Classic staging and durations;${r(2)} newer evidence from the 2024 review${r(4)} and the ERNICA surgical guideline;${r(5)} WHO 2022 on prevention.${r(6)}</p>
` },

{ id: "presentation", title: "Clinical features", html: `
${tbl(["Gut signs", "Whole-body signs"], [
["Feed intolerance, increasing pre-feed aspirates", "Apnoea and bradycardia"],
["Bile-stained (green) aspirates or vomiting", "Lethargy, temperature instability"],
["Abdominal distension (girth rising)", "Poor perfusion, shock"],
["Tenderness; absent bowel sounds", "Metabolic acidosis"],
["Visible bowel loops; abdominal wall redness or bluish discolouration", "Low platelets, bleeding (DIC)"],
["Blood in stool (visible or occult)", "Low or high glucose"]])}
<h3>The typical patient</h3>
<p>Tshering was born at 30 weeks, 1.3 kg. On day 10 he is on 120 mL/kg/day of formula because his mother has had little milk. Before a feed his girth is 3 cm larger than yesterday, the aspirate is green, he has two apnoeas and there is blood in his stool. X-ray shows bubbly gas in the bowel wall. <b>Bell stage IIA NEC</b>: nil by mouth, open NG tube, IV 10% dextrose with electrolytes at his full fluid volume, blood culture, ampicillin 65 mg 8-hourly + gentamicin 5.2 mg daily + metronidazole 20 mg then 10 mg 12-hourly, X-ray every 8 hours, and a call to the JDWNRH paediatric surgeon. His mother is supported to express milk for when feeds restart.</p>
` },

{ id: "ddx", title: "What else it could be", html: `
${tbl(["Condition", "Clue"], [
["Sepsis with ileus", "Distension without pneumatosis; improves with sepsis treatment"],
["<b>Malrotation with volvulus</b>", "Bilious vomiting, often in a term baby in the first weeks — surgical emergency; needs urgent contrast study"],
["Spontaneous intestinal perforation", "Extremely preterm, first 1–2 weeks, often before feeds, often after indometacin or steroids; free air without pneumatosis"],
["Hirschsprung enterocolitis", "Term baby, delayed meconium, explosive foul stool"],
["Swallowed maternal blood", "Well baby; Apt test shows adult haemoglobin; cracked maternal nipples"],
["Anal fissure", "Streaks of fresh blood on the stool; well baby"],
["Haemorrhagic disease of the newborn", "Well baby in week 1, bleeding elsewhere; give vitamin K 1 mg (IMNCI)"],
["Cow's milk protein allergy", "Mucus and blood in a well, growing baby on formula"],
["Infectious colitis", "Diarrhoea, fever, contact with others"]])}
<p>Bhutan IMNCI §6.8 separates well babies with blood in stool (vitamin K, fissure, swallowed blood) from sick babies (NPO, IV fluids, antibiotics, refer).${r(1)}</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "What to look for"], [
["<b>Abdominal X-ray</b> (AP supine + left lateral decubitus or cross-table lateral)", "Dilated loops, bowel wall thickening, <b>pneumatosis intestinalis</b> (bubbly or linear gas in the wall), <b>portal venous gas</b>, a fixed loop, <b>free air</b> (perforation)"],
["Repeat X-ray", "Every 6–12 h in stage II–III, and with any worsening"],
["Bowel ultrasound (where skilled)", "Wall thickness, perfusion, peristalsis, free fluid; can show portal gas early"],
["Full blood count and platelets", "Falling platelets suggest progression"],
["Blood gas and lactate", "Metabolic acidosis = more severe disease"],
["CRP, blood culture", "Sepsis; CRP helps track response"],
["Electrolytes, glucose, creatinine", "Low sodium, fluid shifts, kidney injury"],
["Clotting profile", "DIC"],
["Group and cross-match", "Before surgery"]])}
` },

{ id: "staging", title: "Bell staging and treatment tool", html: `
<p>Choose the stage that fits the worst finding, then enter weight and age for antibiotic doses (Bhutan IMNCI regimen).</p>
<div class="calc" data-calc="necbell"></div>
` },

{ id: "manage", title: "Management step by step", html: `
<h3>1. At the first warning sign</h3>
<ul><li>Stop enteral feeds; open the NG/OG tube to free drainage and aspirate 4-hourly.</li><li>Examine, measure girth, record stool; X-ray; blood culture, FBC, platelets, CRP, gas, glucose.</li><li>IV fluids: 10% dextrose with electrolytes at the full volume for day of life (see preterm page); add the NG losses.</li><li>Start antibiotics after the culture.</li></ul>
<h3>2. Antibiotics (Bhutan IMNCI neonatal surgical regimen)</h3>
<ul><li>${dr("ampicillin")} 50 mg/kg IV 12-hourly (first week) or 8-hourly (after 7 days).</li><li>${dr("gentamicin")} 4 mg/kg IV once daily (longer interval in very preterm babies or kidney injury).</li><li>${dr("metronidazole")} 15 mg/kg IV loading dose, then 7.5 mg/kg 12-hourly from 24 hours after the load.</li><li>Alternative per unit policy: ${dr("cefotaxime")} 50 mg/kg + metronidazole.</li></ul>
<h3>3. Support</h3>
<ul><li>Shock: 10 mL/kg normal saline or Ringer's lactate, repeat as needed; inotropes in NICU.</li><li>Breathing: oxygen, CPAP, or ventilation for apnoea, distension splinting the diaphragm or acidosis.</li><li>Platelets, plasma and vitamin K for bleeding or DIC.</li><li>Pain relief — NEC is painful (paracetamol; opioids in NICU).</li><li>Parenteral nutrition if nil by mouth is expected to last more than a few days and PN is available.</li></ul>
<h3>4. Surgery — call the surgeon early</h3>
<ul><li><b>Absolute:</b> pneumoperitoneum (perforation).</li><li><b>Relative:</b> clinical deterioration despite full medical treatment (worsening acidosis, falling platelets, shock), abdominal wall redness, a mass, a fixed loop together with other signs (ERNICA: not alone), portal venous gas with a worsening baby.</li><li>Laparotomy or primary peritoneal drain — by centre experience; a drain is a bridge when surgery is not possible. Tell families that many babies drained first still need a laparotomy (ERNICA).</li></ul>
<h3>5. Restarting feeds</h3>
<ul><li>When the abdomen is soft, aspirates are clear, stools are free of blood, the baby is stable and the X-ray is improving (no portal gas).</li><li>Start with mother's own milk (or donor milk) at small volumes, and increase slowly; watch girth and aspirates.</li><li>After surgery: start within 7 days if there is no ongoing disease or obstruction (ERNICA).</li></ul>
${box("red", "Refer to JDWNRH NICU and paediatric surgery", `<p>Every stage II–III baby, any baby with free air or deterioration, and any baby under 1500 g. Before transfer: nil by mouth, open NG tube, IV dextrose, first antibiotic doses, warmth, glucose check, and a copy of the X-rays.</p>`)}
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML)", "Dose", "Notes"], [
[dr("ampicillin"), "50 mg/kg IV 12-hourly under 7 days; 8-hourly after", "Bhutan IMNCI"],
[dr("gentamicin"), "4 mg/kg IV once daily", "Bhutan IMNCI; longer interval if very preterm or oliguric; levels where available"],
[dr("metronidazole"), "15 mg/kg IV load, then 7.5 mg/kg 12-hourly starting 24 h later", "Bhutan IMNCI; anaerobic cover"],
[dr("cefotaxime"), "50 mg/kg IV 12-hourly under 7 days; 8-hourly after", "Second-line option (IMNCI sepsis table)"],
[dr("dextrose", "10% dextrose"), "By day-of-life fluid table plus NG losses", "Add sodium and potassium once urine flows"],
["Normal saline / Ringer's lactate", "10 mL/kg bolus for shock; repeat", "IMNCI 10–20 mL/kg"],
[dr("vitamin_k"), "1 mg IV/IM if bleeding", "IMNCI haemorrhagic disease dose"]])}
<p>All antibiotic doses: Bhutan IMNCI 2024.${r(1)} Durations by stage: Walsh & Kliegman${r(2)} with newer evidence.${r(4)}</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Extremely preterm (under 28 weeks)</b>", "Later onset (weeks 3–6); distinguish from spontaneous intestinal perforation; drain more often used"],
["<b>Term babies</b>", "Look for congenital heart disease, asphyxia, polycythaemia, exchange transfusion; also exclude malrotation and Hirschsprung disease"],
["<b>Babies on CPAP</b>", "CPAP causes gaseous distension — still measure girth and look for other signs"],
["<b>Growth-restricted babies</b>", "Advance feeds carefully; mother's milk"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Free air on X-ray at a district hospital, transfer delayed", "Nil by mouth, NG, fluids, antibiotics; call the surgeon — a peritoneal drain by a trained surgeon may bridge to transfer (ERNICA)"],
["Mother has no milk", "Express often with support; donor milk if a milk bank exists; preterm formula is last choice for very preterm babies (WHO)"],
["Suspected NEC but X-ray normal", "Treat as stage I: nil by mouth 48–72 h, antibiotics, repeat X-ray; stop antibiotics if cultures negative and baby well"],
["Extensive NEC at laparotomy", "Decisions on continuing treatment or comfort care are made by the team with the family; bowel length alone should not decide (ERNICA)"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li><b>Acute:</b> perforation, peritonitis, sepsis, shock, DIC, death.</li><li><b>Intestinal stricture</b> — feed intolerance or obstruction weeks after medical NEC (most often in the colon).</li><li><b>Short bowel syndrome</b> after large resections — long-term parenteral nutrition, liver disease.</li><li><b>Neurodevelopmental impairment</b> — higher after surgical NEC and in extremely low-birth-weight babies (ERNICA).</li><li>Poor growth.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Watch for strictures: vomiting, distension or blood in stool after feeds restart; contrast study if suspected.</li><li>Growth monitoring; nutrition support for babies with stomas or short bowel.</li><li>Neurodevelopmental follow-up — close review is advised for all surgical NEC survivors (ERNICA good practice).</li><li>Stoma closure planning with the surgeon.</li></ul>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Pneumatosis intestinalis and portal venous gas", src: "images/nec-xray.jpg", mod: "Abdominal X-ray (AP)", ctx: "Preterm newborn with NEC", loc: "Abdomen and liver", find: "Bubbly and linear gas in the bowel wall; branching gas over the liver", signs: "Pneumatosis intestinalis, portal venous gas", interp: "Definite NEC (Bell stage II); portal gas suggests more severe disease", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Necrotising enterocolitis — gross pathology", src: "images/nec-gross.jpg", mod: "Pathology photograph", ctx: "Resected neonatal bowel", loc: "Small and large bowel", find: "Dark, haemorrhagic and necrotic bowel segments", interp: "Full-thickness necrosis — the stage at which surgery is needed", by: "Wikimedia Commons (public domain)", page: "https://commons.wikimedia.org/wiki/File:Neonatal_necrotizing_enterocolitis,_gross_pathology_20G0022_lores.jpg", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Preterm baby with feed intolerance or distension", [F.s("Girth up 2 cm+, aspirate over 25%, bile, blood in stool, apnoea"), F.a, F.e("Nil by mouth, open NG, IV fluids, culture, triple antibiotics, X-ray"), F.a, F.d("Free air on X-ray?"), F.a, F.b([["Yes", F.e("Stage IIIB — surgeon now: laparotomy or drain")], ["No", F.d("Pneumatosis or portal gas?")]]), F.a, F.b([["No", F.ok("Stage I: review 48–72 h; restart feeds and stop antibiotics if well")], ["Yes", F.e("Stage II: X-ray and exam 6–12 hourly; refer to NICU")]]), F.a, F.d("Deteriorating despite treatment?"), F.a, F.b([["Yes", F.e("Surgery")], ["No", F.ok("Complete course; restart mother's milk slowly")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Not measuring girth and aspirate before tube feeds", "Early NEC missed", "IMNCI check before every feed"],
["Formula when mother's milk could be expressed", "Higher NEC risk", "Support expressing from the first hours"],
["Feeding through a distended abdomen", "Progression to perforation", "Stop feeds and assess"],
["X-ray only once", "Perforation missed", "Repeat every 6–12 h in stage II–III"],
["Calling a term baby's bilious vomiting 'NEC'", "Volvulus missed — bowel lost in hours", "Urgent surgical review and contrast study"],
["Late surgical call", "Death", "Involve the surgeon at diagnosis of stage II"],
["Ignoring pain", "Distress, instability", "Regular analgesia"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the radiological hallmark of definite NEC?", "Pneumatosis intestinalis — gas in the bowel wall (Bell stage II).")}
${qa("Student", "What is the best single prevention for NEC?", "Feeding mother's own milk (donor milk if not available).")}
${qa("Intern/MO", "When does Bhutan IMNCI ask you to stop tube feeds and evaluate for NEC?", "Abdominal girth increased by more than 2 cm from baseline, or pre-feed aspirate more than 25% of the last feed.")}
${qa("Intern/MO", "Write the antibiotics for a 1.2 kg baby aged 10 days with NEC.", "Ampicillin 60 mg IV 8-hourly + gentamicin 4.8 mg IV once daily + metronidazole 18 mg IV load then 9 mg 12-hourly (Bhutan IMNCI regimen).")}
${qa("Specialist", "What is the only absolute indication for surgery?", "Pneumoperitoneum (intestinal perforation). Deterioration despite maximal medical treatment is the main relative indication.")}
${qa("Specialist", "What does ERNICA 2024 suggest for perforated NEC?", "Either initial laparotomy or initial peritoneal drainage according to centre experience; drainage as a bridge when early surgery is not possible; inform families that many drained babies need laparotomy later.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: §6.6, §6.8 Blood in stool, §6.12 neonatal surgical conditions (antibiotic regimen), §7 gavage feeding.</li>
<li id="ref-2">Walsh MC, Kliegman RM. Necrotizing enterocolitis: treatment based on staging criteria. Pediatr Clin North Am 1986;33(1):179–201. <a href="https://doi.org/10.1016/S0031-3955(16)34975-6" target="_blank" rel="noopener">doi:10.1016/S0031-3955(16)34975-6</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-4">Hu X, Liang H, Li F, et al. Necrotizing enterocolitis: current understanding of the prevention and management. Pediatr Surg Int 2024;40(1):32. <a href="https://doi.org/10.1007/s00383-023-05619-3" target="_blank" rel="noopener">doi:10.1007/s00383-023-05619-3</a></li>
<li id="ref-5">Hulscher J, Irvine W, Conforti A, et al. European Reference Network for Inherited and Congenital Anomalies evidence-based guideline on surgical aspects of necrotizing enterocolitis in premature neonates. Neonatology 2025;122(3):376–384. <a href="https://doi.org/10.1159/000542540" target="_blank" rel="noopener">doi:10.1159/000542540</a></li>
<li id="ref-6">World Health Organization. WHO recommendations for care of the preterm or low-birth-weight infant. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240058262" target="_blank" rel="noopener">who.int</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024", "<span class='pass'>Read directly</span>", "Feeding checks, blood in stool, surgical antibiotic regimen"],
["Hu 2024 review", "<span class='pass'>Read directly</span>", "PMC full text in browser"],
["ERNICA 2024 guideline", "<span class='pass'>Read directly</span>", "PMC full text: 7 recommendations, 3 good-practice statements"],
["Walsh & Kliegman 1986", "<span class='unv'>Not read</span>", "Classic durations as widely quoted; original not accessible — newer evidence shown alongside"],
["Two-source doses", "<span class='pass'>Checked</span>", "Ampicillin, gentamicin, metronidazole, cefotaxime: Bhutan IMNCI (national) — consistent with the existing drug cards"],
["Antibiotic durations", "<span class='unv'>Not read</span>", "No trial-based durations exist; ranges are expert practice"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "necbell (all stages; 1.2 kg day 10; 0.9 kg day 4)"]], "qc")}` }
]
});
