/* Urinary tract infection — children and neonates */
registerPage({
id: "uti-child",
title: "Urinary Tract Infection — Children & Neonates",
subtitle: "The fever without a focus: how to catch a clean urine, who needs IV treatment, which antibiotics still work in Bhutan, and which children need kidney imaging",
age: "Children & neonates", specs: ["paeds", "neph", "uro", "neo"],
keywords: ["UTI child", "urinary tract infection children", "pediatric UTI", "paediatric UTI", "febrile UTI", "pyelonephritis child", "infant UTI", "neonatal UTI", "vesicoureteral reflux", "VUR", "VCUG", "MCUG", "DMSA", "renal scarring", "CAKUT", "posterior urethral valves", "clean catch urine", "suprapubic aspiration", "bladder and bowel dysfunction"],
related: ["uti-adult", "sepsis-child", "ckd-child", "aki-child", "ge-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In a baby with fever and no obvious cause, the urine is the first place to look. UTI is the commonest serious bacterial infection in febrile infants, its signs are vague, and a missed or repeated kidney infection can scar a growing kidney. Get a clean sample, treat promptly, and image the right children.</p>
<div class="glance">
<div><h4>Suspect it</h4><ul><li>Infant: fever without focus, poor feeding, vomiting, irritability, jaundice</li><li>Older child: dysuria, frequency, wetting, abdominal or loin pain</li></ul></div>
<div><h4>Sample properly</h4><p>Clean catch, or catheter/suprapubic in sick infants. <b>Bag urine cannot confirm a UTI</b>: it only rules one out if negative.</p></div>
<div><h4>Under 3 months</h4><p>Admit. IV ${dr("ampicillin")} + ${dr("gentamicin")} (or ${dr("cefotaxime")}); check for meningitis if unwell.</p></div>
<div><h4>3 months and over, febrile</h4><p>Oral ${dr("cefixime")} 8 mg/kg once daily or ${dr("cefalexin")} for 7–10 days; IV ${dr("ceftriaxone")} if vomiting or unwell.</p></div>
<div><h4>Cystitis (older child)</h4><p>3 days (NICE) to 5 days (STG) of an oral antibiotic the organism is sensitive to.</p></div>
<div><h4>Imaging</h4><p>Ultrasound for infants, atypical or recurrent UTI; DMSA and MCUG only for selected children.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§12.5.3) recommends amoxicillin 15 mg/kg three times daily or co-trimoxazole 8 mg trimethoprim/kg/day for 5 days, review at 48 hours, and referral for recurrent UTI (2 or more episodes in 6 months, or 3 or more at any time). Local studies show high amoxicillin resistance in urinary <i>E. coli</i>, so this guide prefers an oral cephalosporin for febrile UTI and uses the STG drugs when culture shows sensitivity. ${LB.bt()} ${LB.loc()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Bacterial infection of the bladder (cystitis) or kidney (pyelonephritis). In infants and young children, any febrile UTI is treated as pyelonephritis, because the kidney is usually involved even when the signs are vague.${r(1, 2)}</p>
<p>About 7.8% of girls and 1.8% of boys have a symptomatic UTI in the first year of life (STG). Boys present mostly in the first 3 months and are more likely to have an underlying anomaly.${r(6)}</p>
${tbl(["Factor", "Example", "Clue"], [
["Organism", "<i>E. coli</i> 75–90%; <i>Klebsiella</i>, <i>Proteus</i> (boys), <i>Enterococcus</i>, <i>Pseudomonas</i> (anomalies, catheters)", "Non-<i>E. coli</i> organism = atypical UTI: image"],
["Vesicoureteral reflux (VUR)", "Urine flows back up the ureter", "Found in about a third of children after febrile UTI; most low-grade reflux resolves with age"],
["Obstruction (CAKUT)", "Posterior urethral valves (boys), pelviureteric junction obstruction, duplex kidney", "Poor stream, palpable bladder or kidney, antenatal hydronephrosis"],
["Bladder and bowel dysfunction", "Constipation, holding on, infrequent voiding, wetting", "The commonest treatable cause of recurrence in school-age children"],
["Other", "Uncircumcised boys in the first year, labial adhesions, neurogenic bladder (spina bifida), catheters", "Examine the genitals and spine"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Why kidneys of young children scar", [
F.s("Bacteria ascend from the perineum into the bladder"), F.a,
F.d("Reflux, obstruction or poor emptying?"), F.a,
F.b([["No", F.ok("Cystitis; usually cleared with treatment")], ["Yes", F.s("Infected urine reaches the kidney")]]), F.a,
F.s("Acute pyelonephritis: intense inflammation of the growing kidney"), F.a,
F.d("Treatment delayed, or repeated infections?"), F.a,
F.e("Scarring → later hypertension, proteinuria, and rarely CKD")])}
<p>Young children are at greater risk because reflux is commoner, infections are recognised later, and a growing kidney scars more easily. Most children with a single UTI and normal kidneys do well; the risk lies in repeated febrile infections and in obstructive anomalies.${r(1, 3)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["First-line oral drug", "Amoxicillin 15 mg/kg TDS or co-trimoxazole 8 mg TMP/kg/day, 5 days", "Choose by local resistance; avoid amoxicillin empirically; oral cephalosporins (cefixime, cefalexin) or co-amoxiclav for febrile UTI (AAP 2011, NICE NG224)", "<b>Cefixime or cefalexin</b> for febrile UTI; STG drugs when sensitive " + LB.loc()],
["Duration", "5 days", "Febrile UTI 7–10 days (AAP, NICE); cystitis 3 days (NICE)", "7–10 days febrile; 3–5 days cystitis"],
["Antiemetic", "Metoclopramide 0.1 mg/kg", "Metoclopramide is restricted in children (EMA 2013: not under 1 year; dystonia risk); ondansetron preferred", "Ondansetron 0.15 mg/kg if needed"],
["Imaging after first UTI", "Ultrasound KUB", "NICE: ultrasound for under 6 months, atypical or recurrent; DMSA/MCUG selectively. AAP: ultrasound for all 2–24 months with febrile UTI; VCUG only if abnormal or recurrent", "NICE-based, plus ultrasound for every febrile infant under 2 years where easy to get"],
["Antibiotic prophylaxis", "Not addressed", "Not routinely after a first UTI (NICE); consider in recurrent UTI or high-grade reflux (RIVUR: fewer recurrences, no fewer scars)", "Selective, by paediatrician"],
["India", "—", "IAP/ISPN 2019 (Indian Society of Pediatric Nephrology): oral cephalosporin or co-amoxiclav; IV ceftriaxone or aminoglycoside if sick", "Consistent"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Age", "Typical features", "Pitfall"], [
["Neonate", "Poor feeding, vomiting, lethargy, temperature instability, prolonged jaundice, poor weight gain", "Often part of sepsis; may have no fever"],
["Infant under 2 years", "Fever without focus, irritability, vomiting, diarrhoea, foul-smelling urine", "Blamed on teething or a cold"],
["Preschool child", "Fever, abdominal pain, new wetting, crying on passing urine", "Confused with gastroenteritis"],
["School-age child", "Dysuria, frequency, urgency, wetting, suprapubic or loin pain, fever and vomiting in pyelonephritis", "Constipation behind recurrences"]])}
${box("red", "Danger signs — admit", `<ul><li>Age under 3 months</li><li>Toxic look, poor perfusion, lethargy (sepsis)</li><li>Vomiting or unable to take oral medicine</li><li>Known or suspected obstruction (palpable bladder or kidney, poor stream in a boy)</li><li>Rising creatinine</li><li>No improvement after 48 hours of treatment</li></ul>`)}
<h3>The typical patient</h3>
<p>A 9-month-old girl from Wangdue has had fever of 39.4 °C for two days, vomiting twice, and is irritable, with no cough, rash or diarrhoea. Her ears and throat are normal. A catheter urine sample shows white cells and nitrite. <b>This is febrile UTI (presumed pyelonephritis).</b> She is alert, drinking and well perfused, so she can take oral cefixime 8 mg/kg once daily for 10 days after a urine culture, with paracetamol and a review in 48 hours. Because she is under 2 years old, she should have a kidney ultrasound.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against UTI", "Best test"], [
["Other serious bacterial infection (meningitis, pneumonia, bacteraemia)", "Toxic infant, bulging fontanelle, fast breathing", "Normal urine", "Full sepsis screen including LP if unwell"],
["Malaria, dengue, enteric fever, scrub typhus", "Travel to southern districts, rash, eschar, season", "Normal urine", "RDT, NS1, cultures, serology"],
["Viral illness", "Cough, coryza, sick contacts", "—", "Urine still needed in infants with high fever"],
["Vulvovaginitis, labial adhesions", "Soreness, discharge, poor hygiene", "No fever, negative culture", "Examination"],
["Constipation", "Hard stools, abdominal pain, wetting", "—", "History; but constipation and UTI often coexist"],
["Appendicitis", "Migrating pain, guarding", "Pyuria can occur from an inflamed appendix", "See <a href=\"#/d/appendicitis-child\">appendicitis</a>"],
["Acute glomerulonephritis", "Cola urine, oedema, hypertension", "Red cell casts, no growth", "BP, urine microscopy, C3"]])}
` },

{ id: "invest", title: "Investigations", html: `
<h3>Getting the urine</h3>
${tbl(["Method", "When", "Note"], [
["<b>Clean catch</b>", "First choice in all ages, including infants (wait with a sterile pot; tapping over the bladder or Quick-Wee stimulation helps)", "Clean the genitals with water first"],
["<b>Catheter sample</b>", "Ill infants, or when a clean catch fails", "Reliable; small feeding tube in neonates"],
["Suprapubic aspiration", "Sick infants under 1 year, by trained staff (ultrasound-guided if possible)", "Any growth is significant"],
["Urine bag or pad", "Screening only", "<b>A positive bag result cannot diagnose UTI</b> (high contamination); a negative one helps rule it out"]])}
<h3>Tests</h3>
${tbl(["Test", "Why", "Notes", "Priority"], [
["Dipstick", "Leucocytes and nitrite", "Reliable over 3 years of age; under 3 years, microscopy and culture are needed (NICE)", "Screen"],
["Microscopy", "White cells (pyuria) and bacteria", "Bacteria seen on microscopy is the most useful quick test in infants", "If available"],
["<b>Culture and sensitivity</b>", "Confirms UTI; guides antibiotics", "Significant: 50,000 CFU/mL or more of one organism from a catheter sample with pyuria (AAP); 100,000 or more from a clean catch; any growth from suprapubic aspirate", "Essential before antibiotics"],
["CBC, CRP, creatinine, electrolytes, blood culture", "Severity, kidney function, sepsis", "Before gentamicin", "Febrile infants, unwell children"],
["Lumbar puncture", "Meningitis with UTI", "Febrile infants under 1 month and any unwell infant", "Selected"],
["<b>Ultrasound KUB</b>", "Hydronephrosis, obstruction, abnormal kidneys, bladder wall and residual", "See imaging table", "By age and type"]])}
` },

{ id: "staging", title: "Severity, first orders and imaging", html: `
<p>Use the tool for weight-based first orders; it follows the STG with AAP and NICE doses.${r(1, 2, 6)}</p>
<div class="calc" data-calc="utichild"></div>
<h3>Which child needs which imaging? (NICE NG224, adapted)</h3>
${tbl(["Child", "Ultrasound", "DMSA (4–6 months later)", "MCUG / VCUG"], [
["Under 6 months, responds within 48 h", "Within 6 weeks", "No", "No (unless ultrasound abnormal)"],
["Under 6 months, atypical or recurrent", "During the illness", "Yes", "Yes"],
["6 months–3 years, typical", "No (this guide: yes if febrile and under 2 years, where available)", "No", "No"],
["6 months–3 years, atypical", "During the illness", "Yes", "Consider if dilatation, poor stream, non-<i>E. coli</i> or family history of reflux"],
["6 months–3 years, recurrent", "Within 6 weeks", "Yes", "Consider (as above)"],
["3 years and over, atypical", "During the illness", "No", "No"],
["3 years and over, recurrent", "Within 6 weeks", "Yes", "No"]])}
<p><b>Atypical UTI</b> means: seriously ill or septic; poor urine flow; abdominal or bladder mass; raised creatinine; no response within 48 hours; or a non-<i>E. coli</i> organism. <b>Recurrent</b>: 2 or more upper-tract infections, or 1 upper plus 1 lower, or 3 or more lower. DMSA and MCUG are only available at the national referral hospital or abroad: refer.${r(2)}</p>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Infants under 3 months</h3>
<ol><li>Admit; blood culture, urine culture, CBC, CRP, creatinine; lumbar puncture if under 1 month or unwell.</li>
<li>${dr("ampicillin")} 50 mg/kg IV every 6–8 hours (interval by age) <b>plus</b> ${dr("gentamicin")} once daily (5 mg/kg in the first month, 7.5 mg/kg after), or ${dr("cefotaxime")} 50 mg/kg 6–8-hourly. Avoid ceftriaxone in jaundiced or preterm neonates and never give it with calcium-containing fluids.</li>
<li>Switch to an oral drug by culture after 48–72 hours afebrile (specialist decision); <b>about 10 days in total</b>. Ultrasound during admission or within 6 weeks.</li></ol>
<h3>B. Febrile UTI, 3 months and over</h3>
<ul><li><b>Well, drinking, able to take oral medicine:</b> ${dr("cefixime")} 8 mg/kg once daily (max 400 mg) or ${dr("cefalexin")} 25 mg/kg three times daily (50–100 mg/kg/day), <b>7–10 days</b>.${r(1, 3)}</li>
<li><b>Vomiting, unwell or septic:</b> ${dr("ceftriaxone")} 75 mg/kg IV/IM once daily (max 2 g), or (STG) ampicillin 50 mg/kg 6-hourly + gentamicin 7.5 mg/kg once daily with adequate urine output. Switch to oral when afebrile 24–48 hours; 7–10 days total. Oral and IV routes give equal outcomes in children who can take oral medicine (Cochrane).</li>
<li>Bhutan STG drugs (${dr("amoxicillin")} 15 mg/kg TDS or ${dr("cotrimoxazole")} 8 mg TMP/kg/day) when culture shows sensitivity.</li>
<li>Paracetamol 15 mg/kg 6-hourly; fluids; ${dr("ondansetron")} 0.15 mg/kg (max 4 mg) for troublesome vomiting.</li>
<li>Review at 48 hours: if still febrile, admit, check culture, ultrasound for obstruction or abscess.</li></ul>
<h3>C. Cystitis in the older child (no fever, no loin pain)</h3>
<ul><li>3 days (NICE) to 5 days (STG): cefalexin 12.5 mg/kg twice daily, nitrofurantoin 750 micrograms/kg four times daily (or 100 mg MR twice daily from 12 years), or co-trimoxazole / amoxicillin if sensitive.</li></ul>
<h3>D. Recurrent UTI</h3>
<ul><li>Treat <b>bladder and bowel dysfunction</b>: treat constipation fully, regular timed voiding every 2–3 hours, good fluid intake, no holding on.</li>
<li>Refer (STG: 2 or more episodes in 6 months, or 3 or more at any time) for ultrasound, DMSA and MCUG as indicated.</li>
<li>Prophylaxis (paediatrician decision): nitrofurantoin 1 mg/kg at night, or co-trimoxazole 2 mg TMP/kg at night, for children with high-grade reflux or frequent febrile UTIs.</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Any febrile infant under 3 months or sick child: first dose of IM ampicillin + gentamicin, refer. Well older child: STG oral drug, review at 48 hours"],
["District hospital", "Clean catch or catheter urine, microscopy; oral cefixime (if stocked) or IV ceftriaxone/ampicillin + gentamicin; ultrasound"],
["Referral hospital", "Culture-guided therapy, DMSA/MCUG, paediatric nephrology and surgery for valves or obstruction"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("cefixime"), "8 mg/kg once daily (max 400 mg)", "3 months and over; oral febrile UTI"],
[dr("cefalexin"), "Febrile: 25 mg/kg 8-hourly (50–100 mg/kg/day, max 4 g/day); cystitis 12.5 mg/kg twice daily", "Capsules opened into food"],
[dr("ceftriaxone"), "75 mg/kg IV/IM once daily (max 2 g)", "Not in jaundiced or preterm neonates"],
[dr("ampicillin"), "50 mg/kg IV 6-hourly (neonates 6–8-hourly by age)", "With gentamicin; covers enterococcus"],
[dr("gentamicin"), "7.5 mg/kg once daily (5 mg/kg under 1 month)", "Good urine output; creatinine; levels if over 72 h"],
[dr("cefotaxime"), "50 mg/kg IV 6–8-hourly", "Neonates and young infants"],
[dr("amoxicillin"), "15 mg/kg three times daily (STG)", "Only if sensitive"],
[dr("cotrimoxazole"), "4 mg TMP/kg twice daily (8 mg/kg/day, STG); prophylaxis 2 mg/kg at night", "Not under 6 weeks; only if sensitive"],
[dr("nitrofurantoin"), "750 micrograms/kg 6-hourly; prophylaxis 1 mg/kg at night", "Cystitis only; 3 months and over; NEML has only 100 mg MR"],
[dr("paracetamol"), "15 mg/kg 6-hourly (max 60 mg/kg/day)", "Fever"],
[dr("ondansetron"), "0.15 mg/kg (max 4 mg)", "Vomiting (in place of STG metoclopramide)"]])}
` },

{ id: "populations", title: "Neonates, adolescents and special groups", html: `
<ul><li><b>Neonates:</b> UTI is often bloodstream infection; treat as sepsis with IV antibiotics and look for meningitis and urinary anomalies (see <a href="#/d/sepsis-child">sepsis</a>).</li>
<li><b>Antenatal hydronephrosis:</b> follow-up ultrasound after birth; paediatric urology for significant dilatation.</li>
<li><b>Adolescent girls:</b> manage like adults (see <a href="#/d/uti-adult">adult chapter</a>); ask about sexual activity and pregnancy; consider STIs.</li>
<li><b>Spina bifida, neurogenic bladder:</b> clean intermittent catheterisation; treat only symptomatic infection.</li>
<li><b>Severe acute malnutrition:</b> UTI is common and silent; culture urine where possible and treat as part of the SAM protocol.</li></ul>
` },

{ id: "scenarios", title: "UTI with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Known reflux on prophylaxis with breakthrough UTI", "Culture; change drug class; refer to paediatric nephrology", "Resistant organism; consider surgery"],
["Boy with poor stream or palpable bladder", "Urgent ultrasound; catheter; refer", "Posterior urethral valves"],
["CKD or single kidney", "Lower threshold for IV treatment; adjust doses", "See <a href=\"#/d/ckd-child\">CKD</a>"],
["Diarrhoea and dehydration with fever", "Still check urine in infants", "UTI can present with diarrhoea"],
["Hypertension or proteinuria after UTIs", "DMSA; BP monitoring", "Renal scarring"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Urosepsis", "Shock, poor perfusion", "Sepsis protocol"],
["Renal abscess, pyonephrosis", "Fever persisting beyond 48 h", "Ultrasound; drainage"],
["Renal scarring", "DMSA defects 4–6 months after infection", "BP and urine protein checks"],
["Hypertension, proteinuria, CKD", "Years later in children with extensive scarring", "Long-term follow-up"],
["Recurrence", "New febrile episodes", "Bladder and bowel care, imaging, prophylaxis"]])}
<p>Most children recover completely. About 15% develop some scarring after a first febrile UTI, but CKD from reflux nephropathy is uncommon when infections are treated promptly.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Review at 48 hours (STG). No routine repeat urine culture once the child is well (NICE).</li>
<li>Any future unexplained fever: test the urine early.</li>
<li>Children with scarring, bilateral abnormalities or reflux: BP and urine protein yearly, paediatric nephrology follow-up.</li></ul>
${box("green", "What to tell the family", `<ul><li>Give every dose, even when the child seems well.</li><li>Plenty of fluids; encourage regular toilet visits; do not let the child hold on.</li><li>Treat constipation: fruit, vegetables, water, and medicine if needed.</li><li>Change nappies often; wipe girls from front to back.</li><li>Bring the child back early with any future fever, so the urine can be checked.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fever continues after 2 days of treatment</li><li>Vomiting, cannot keep medicine down, very sleepy or floppy</li><li>Passes little urine</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Vesicoureteral reflux on voiding cystourethrogram", src: "images/vur-vcug.jpg", mod: "Fluoroscopic voiding cystourethrogram (VCUG/MCUG)", ctx: "Child after recurrent febrile UTI", loc: "Bladder, both ureters and kidneys", find: "Contrast instilled into the bladder flows back up both ureters into the collecting systems", signs: "Bilateral grade III reflux", interp: "Reflux explains recurrent pyelonephritis; grade guides prophylaxis or surgery. MCUG is invasive and only for selected children", by: "RadsWiki", page: "https://commons.wikimedia.org/wiki/File:Vesicoureteral-reflux-004.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Grade III vesicoureteric reflux (schematic)", src: "images/vur-grade3.svg", mod: "Schematic diagram", ctx: "Teaching", loc: "Normal kidney (left) and refluxing system (right)", find: "Reflux reaching the kidney with mild dilatation of ureter and calyces", signs: "Grade III of V (international grading)", interp: "Grades I–II usually resolve; IV–V carry a higher risk of scarring", by: "ColnKurtz", page: "https://commons.wikimedia.org/wiki/File:Grade_3_Vesico_Ureteric_Reflux.svg", lic: "CC BY-SA 4.0", note: "Schematic diagram, not a patient image." })}
</div>
<div class="pair">
${fig({ title: "Hydronephrosis on ultrasound", src: "images/hydronephrosis-moderate.jpg", mod: "Ultrasound, kidney", ctx: "Infant with febrile UTI", loc: "Renal pelvis and calyces", find: "Dilated pelvis and calyces", signs: "Moderate hydronephrosis", interp: "Suggests obstruction or high-grade reflux: refer for further imaging", by: "Cerevisae (own work)", page: "https://commons.wikimedia.org/wiki/File:Ultrasound_of_right_kidney_moderate_hydronephrosis.jpg", lic: "CC BY-SA 4.0" })}
</div>
<p>DMSA scarring and posterior urethral valves (link only, copyright): <a href="https://radiopaedia.org/articles/posterior-urethral-valve" target="_blank" rel="noopener">Radiopaedia: posterior urethral valves</a>; <a href="https://radiopaedia.org/articles/vesicoureteric-reflux" target="_blank" rel="noopener">vesicoureteric reflux grading</a>.</p>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Febrile child: is it a UTI?", [
F.s("Fever without a clear source"), F.a,
F.s("Clean-catch or catheter urine: dipstick/microscopy and culture"), F.a,
F.d("Age under 3 months, or septic, or vomiting?"), F.a,
F.b([["Yes", F.e("Admit: IV antibiotics; under 1 month or unwell → LP")], ["No", F.s("Oral cefixime or cefalexin 7–10 days")]]), F.a,
F.d("Better in 48 h?"), F.a,
F.b([["No", F.e("Admit, IV ceftriaxone, ultrasound, check culture")], ["Yes", F.ok("Finish course; imaging by age and type")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Check the urine in every febrile infant without a source.</b></li>
<li>A bag urine can rule out, never rule in.</li>
<li>Treat constipation: it is behind many recurrences.</li>
<li>A boy with a poor stream needs an ultrasound for valves.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Diagnosing UTI from a bag sample", "Over-treatment, unnecessary imaging, missed real diagnosis", "Clean catch or catheter"],
["Starting antibiotics before culture", "No organism or sensitivity to guide treatment", "Culture first"],
["Amoxicillin without sensitivity", "Treatment failure in most children", "Oral cephalosporin; amoxicillin only if sensitive"],
["Oral treatment in an infant under 3 months", "Sepsis, meningitis missed", "Admit and give IV"],
["No follow-up imaging for recurrent or atypical UTI", "Missed reflux or obstruction", "Use the imaging table"],
["Metoclopramide in infants", "Dystonia", "Ondansetron"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why is a bag urine sample unreliable?", "It is easily contaminated by skin and perineal bacteria; a positive result cannot confirm UTI, though a negative one helps exclude it.")}
${qa("Student", "Name three presentations of UTI in infants.", "Fever without focus, poor feeding or vomiting, irritability; also prolonged jaundice and poor weight gain.")}
${qa("Intern/MO", "How is a febrile 2-month-old with UTI treated?", "Admission and IV antibiotics (ampicillin plus gentamicin, or cefotaxime), blood culture, consider LP; about 10 days in total.")}
${qa("Intern/MO", "What is an atypical UTI (NICE)?", "Seriously ill, poor urine flow, abdominal or bladder mass, raised creatinine, septicaemia, no response within 48 hours, or a non-E. coli organism.")}
${qa("Intern/MO", "When does the STG advise referral?", "Recurrent UTI: 2 or more episodes in 6 months, or 3 or more at any time.")}
${qa("Specialist", "What did the RIVUR trial show?", "Prophylaxis in children with reflux halved recurrent UTI but did not reduce renal scarring, and increased resistant infections.")}
${qa("Specialist", "A boy of 4 months has a Proteus UTI. What imaging does he need?", "Atypical UTI under 6 months: ultrasound during the illness, then DMSA and MCUG.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Subcommittee on Urinary Tract Infection, American Academy of Pediatrics. Urinary tract infection: clinical practice guideline for the diagnosis and management of the initial UTI in febrile infants and children 2 to 24 months. <i>Pediatrics</i> 2011;128:595–610 (reaffirmed 2016). <a href="https://doi.org/10.1542/peds.2011-1330" target="_blank" rel="noopener">doi:10.1542/peds.2011-1330</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Urinary tract infection in under 16s: diagnosis and management (NG224), 2022. <a href="https://www.nice.org.uk/guidance/ng224" target="_blank" rel="noopener">nice.org.uk/guidance/ng224</a></li>
<li id="ref-3">RIVUR Trial Investigators. Antimicrobial prophylaxis for children with vesicoureteral reflux. <i>N Engl J Med</i> 2014;370:2367–2376. <a href="https://doi.org/10.1056/NEJMoa1401811" target="_blank" rel="noopener">doi:10.1056/NEJMoa1401811</a></li>
<li id="ref-4">Strohmeier Y, Hodson EM, Willis NS et al. Antibiotics for acute pyelonephritis in children. <i>Cochrane Database Syst Rev</i> 2014;(7):CD003772. <a href="https://doi.org/10.1002/14651858.CD003772.pub4" target="_blank" rel="noopener">doi:10.1002/14651858.CD003772.pub4</a></li>
<li id="ref-5">Indian Society of Pediatric Nephrology. Revised statement on management of urinary tract infections. <i>Indian Pediatr</i> 2011;48:709–717 (with later updates). <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Indian+Society+of+Pediatric+Nephrology+revised+statement+urinary+tract+infections+2011" target="_blank" rel="noopener">PubMed search</a></li>
<li id="ref-6">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.5.3 Urinary tract infection (children); NEMF 2022; NEML 2025.</li>
<li id="ref-7">European Medicines Agency. Restrictions on the use of metoclopramide (including not under 1 year), 2013. <a href="https://www.ema.europa.eu/en/medicines/human/referrals/metoclopramide-containing-medicines" target="_blank" rel="noopener">ema.europa.eu</a></li>
<li id="ref-8">JDWNRH uropathogen studies: <i>BMC Res Notes</i> 2015;8:769 (<a href="https://doi.org/10.1186/s13104-015-1728-1" target="_blank" rel="noopener">doi:10.1186/s13104-015-1728-1</a>); <i>Medicina Balear</i> 2022; <i>Bhutan Health Journal</i> 2024.</li>
<li id="ref-9">Bhutan Clinical Reference app: Urinary tract infection (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='pass'>Verified</span>", "STG 2024 §12.5.3"],
["Doses (two sources)", "<span class='pass'>Checked</span>", "AAP 2011, BNFc and NEMF; NEMF nitrofurantoin child dose wording flagged on the drug card"],
["Imaging table", "<span class='pass'>Checked</span>", "Adapted from NICE NG224 (unchanged from CG54 in substance)"],
["Indian paediatric guideline", "<span class='flag'>Partly verified</span>", "ISPN 2011 statement cited; later revisions not reviewed"],
["Local paediatric resistance data", "<span class='flag'>Evidence gap</span>", "Bhutan studies mix adults and children"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a paediatrician or paediatric nephrologist"]], "qc")}
` }
]
});
