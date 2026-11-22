/* Acute diarrhoea and gastroenteritis — adults */
registerPage({
id: "ge-adult",
title: "Diarrhoea & Gastroenteritis — Adults",
subtitle: "Rehydration first; when to test, when to give antibiotics, and how to recognise cholera, dysentery and the surgical mimics",
age: "Adults and adolescents", specs: ["medicine", "id", "gi", "emerg", "ph"],
keywords: ["diarrhoea", "diarrhea", "gastroenteritis", "loose motion", "food poisoning", "dysentery", "shigella", "cholera", "rice water", "amoebiasis", "amoebic dysentery", "giardiasis", "travellers diarrhoea", "norovirus", "campylobacter", "salmonella", "Clostridioides difficile", "ORS", "Ringer lactate", "dehydration", "ciprofloxacin", "azithromycin", "doxycycline", "metronidazole", "loperamide", "ondansetron", "outbreak"],
related: ["ge-child", "aki-adult", "cirrhosis-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most adults with diarrhoea get better in a few days with fluids alone. The skill is to rehydrate well, recognise the few who need antibiotics (dysentery, cholera, the very sick), and not miss the patient whose 'gastroenteritis' is really appendicitis, an MI, sepsis or diabetic ketoacidosis.</p>
<div class="glance">
<div><h4>Assess</h4><p>Hydration (pulse, BP lying and standing, mucosa, urine), blood in stool, fever, pain, duration, others ill.</p></div>
<div><h4>Rehydrate</h4><p>${dr("ors", "ORS")} 200–400 mL per stool; some dehydration 75 mL/kg over 4 h; severe: ${dr("ringer_lactate", "Ringer's lactate")} 30 mL/kg in 30 min, then 70 mL/kg over 3 h.</p></div>
<div><h4>Antibiotic only for</h4><p><b>Dysentery</b> (blood + fever), <b>cholera</b> with dehydration, severe illness, immunocompromise, elderly with fever.</p></div>
<div><h4>Dysentery</h4><p>${dr("ciprofloxacin", "Ciprofloxacin")} 500 mg BD (STG: 7 days; WHO/IDSA: 3 days); ${dr("azithromycin", "azithromycin")} if pregnant or resistant.</p></div>
<div><h4>Cholera</h4><p>${dr("doxycycline", "Doxycycline")} 300 mg single dose; azithromycin 1 g single dose in pregnancy.</p></div>
<div><h4>Red flags</h4><ul><li>Shock, confusion, AKI</li><li>Severe pain or distension</li><li>Over 7 days, weight loss, age over 65</li><li>Recent antibiotics (C. difficile)</li></ul></div>
<div><h4>Do not</h4><p>Give loperamide with blood or fever; give antibiotics for ordinary watery diarrhoea.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 covers shigellosis (§8.1.2: ORS/IV fluids, <b>ciprofloxacin 500 mg BD for 7 days</b>, paracetamol), amoebiasis (§8.2.1: <b>metronidazole 400 mg 8-hourly for 5 days</b>), giardiasis (§8.2.2: same metronidazole regimen) and viral gastroenteritis (§8.5.11: fluids, nutrition, no specific treatment). Ciprofloxacin tablets are listed to DH; at PHC, co-trimoxazole and metronidazole are the oral antimicrobials available. Oral azithromycin is not on NEML 2025.${r(1, 2)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is and what causes it", html: `
${tbl(["Pattern", "Typical causes", "Clues"], [
["<b>Acute watery, vomiting-predominant</b>", "Norovirus; preformed toxins (<i>S. aureus</i>, <i>Bacillus cereus</i> in reheated rice)", "Onset 1–6 h (toxin) or 12–48 h (norovirus) after a shared meal; many ill"],
["<b>Acute watery, profuse</b>", "ETEC; <b>cholera</b>; rotavirus in adults less often", "Rice-water stools, rapid dehydration, outbreaks after floods or in crowded settings"],
["<b>Dysentery</b> (bloody, febrile)", "<i>Shigella</i>, <i>Campylobacter</i>, non-typhoidal <i>Salmonella</i>, STEC; <b>amoebiasis</b>", "Tenesmus, cramps, fever; amoebic: gradual, less fever, liver abscess"],
["<b>Persistent</b> (14–30 days) or chronic", "<i>Giardia</i>, amoebiasis, cryptosporidium (HIV), tropical sprue, coeliac, IBD, colorectal cancer, thyroid", "Bloating, weight loss, malabsorption"],
["<b>Antibiotic or hospital-associated</b>", "<i>Clostridioides difficile</i>", "Recent antibiotics, older, admitted; leucocytosis"]])}
<p>Spread is faecal–oral (water, food, hands). Seasonal summer and monsoon peaks are typical in South Asia, with outbreaks after festivals, school meals and water-supply contamination.${r(3, 4)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Why the patient becomes sick, and what each step of treatment fixes", [
F.s("<b>Pathogen or toxin</b> reaches the gut"), F.a,
F.b([
["Secretory (cholera, ETEC)", F.s("Toxin raises cAMP → chloride and water pour into the lumen"), F.e("Large watery stools, no blood")],
["Invasive (Shigella, Campylobacter, amoeba)", F.s("Mucosal invasion and ulceration of the colon"), F.e("Blood, mucus, fever, tenesmus")],
["Viral (norovirus)", F.s("Small-bowel villus damage, delayed gastric emptying"), F.e("Vomiting, watery stools")]]), F.a,
F.s("Losses of <b>water, Na⁺, K⁺, HCO₃⁻</b>"), F.a,
F.b([
["Hypovolaemia", F.e("Tachycardia, postural drop, oliguria → shock, AKI"), F.ok("<b>ORS</b>; <b>Ringer's lactate</b> if severe")],
["Acidosis, hypokalaemia", F.e("Kussmaul breathing, weakness, ileus, arrhythmia"), F.ok("ORS and RL contain base and K⁺; IV K⁺ if low")],
["Ongoing infection", F.e("Bacteraemia, HUS, liver abscess"), F.ok("<b>Targeted antibiotics</b> (dysentery, cholera, amoebiasis)")]])])}
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan STG 2024", "WHO / MSF", "IDSA 2017 / ACG 2016", "This guide follows"], [
["Shigella dysentery", "Ciprofloxacin 500 mg BD × <b>7 days</b>", "Ciprofloxacin × 3 days; azithromycin or ceftriaxone second line", "Azithromycin 500 mg × 3 d or ciprofloxacin 500 mg BD × 3 d (5–7 d if immunocompromised)", "Ciprofloxacin 3 days (7 days per STG acceptable); azithromycin/ceftriaxone if failing"],
["Cholera", "Not specifically covered", "<b>Doxycycline 300 mg single dose</b>; azithromycin 1 g (pregnancy); ciprofloxacin only if resistant", "—", "MSF/WHO"],
["Amoebic colitis", "Metronidazole 400 mg 8-hourly × 5 days", "Metronidazole 500–750 mg TDS × 5–10 days, then a luminal agent", "Metronidazole then paromomycin", "STG dose; consider 750 mg TDS for severe; luminal agent where available"],
["Giardiasis", "Metronidazole 400 mg 8-hourly × 5 days", "Metronidazole or tinidazole 2 g single dose", "Tinidazole or nitazoxanide", "Metronidazole (STG)"],
["Loperamide", "Not mentioned", "Not for dysentery or children", "Acceptable in adults with watery diarrhoea; avoid if fever/blood", "Adults, watery only"],
["Stool testing", "Culture in shigellosis/amoebiasis", "In outbreaks (cholera)", "Dysentery, severe, over 7 days, outbreaks, immunocompromised", "Same, plus Bhutan outbreak reporting"]])}
<p class="qn">STG, WHO/MSF, IDSA, ACG.${r(1, 3, 4, 5)}</p>
` },

{ id: "presentation", title: "Clinical assessment", html: `
<h3>History</h3><ul><li>Onset, frequency, volume, <b>blood or mucus</b>, vomiting, fever, abdominal pain (site, severity).</li><li>Food and water exposures, others ill, travel, festivals, floods.</li><li>Antibiotics in past 3 months (C. difficile); HIV, diabetes, cirrhosis, CKD, pregnancy; diuretics, metformin, SGLT2 inhibitors, ACE inhibitors (AKI risk: 'sick-day rules').</li></ul>
<h3>Examination: how dry?</h3>
${tbl(["Degree", "Signs (adult)", "Plan"], [
["No dehydration", "Alert, normal pulse and BP, moist mouth, passing urine", "Plan A: ORS after each stool, normal diet"],
["Some dehydration", "Thirsty, restless, dry mouth, sunken eyes, slow skin pinch, tachycardia, <b>postural drop</b>", "Plan B: ORS 75 mL/kg over 4 h"],
["Severe dehydration", "Lethargic, very weak or absent radial pulse, hypotension, very slow skin pinch, little or no urine", "Plan C: IV Ringer's lactate"]])}
<p>Skin pinch is unreliable in older people; use pulse, postural BP, urine output and mental state.</p>
<div class="calc" data-calc="dehyd"></div>
${box("red", "Red flags", `<ul><li>Shock, confusion, oliguria or rising creatinine.</li><li>Severe or localised abdominal pain, guarding, distension (surgical abdomen, toxic megacolon, ischaemic colitis).</li><li>Bloody diarrhoea with high fever, or in an older person.</li><li>Diarrhoea over 7 days, weight loss, anaemia, age over 50 with change in bowel habit (cancer).</li><li>Immunocompromise, pregnancy, cirrhosis, recent hospital or antibiotics.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Do not miss", "Clue"], [
["<b>Appendicitis, pelvic abscess</b>", "Pain before vomiting, localised tenderness, small frequent stools (pelvic irritation)"],
["Intestinal obstruction, mesenteric ischaemia", "Distension, bilious vomiting; pain out of proportion; AF, elderly"],
["<b>Sepsis</b> (including enteric fever, scrub typhus, malaria, leptospirosis)", "High fever, few stools, rash, eschar, jaundice; endemic area"],
["Diabetic ketoacidosis", "Vomiting, deep breathing, thirst; check glucose and ketones"],
["Inferior MI", "Vomiting, sweating, epigastric discomfort in a diabetic or older patient: ECG"],
["Ectopic pregnancy", "Woman of reproductive age with pain and diarrhoea: pregnancy test"],
["Alcohol, mushroom or chemical poisoning", "History; neurological or liver features; others affected"],
["Inflammatory bowel disease, colorectal cancer", "Over 2–4 weeks, recurrent blood, weight loss"],
["Thyrotoxicosis, medicines (metformin, colchicine, laxatives, PPI)", "Chronic; review medications"]])}
<h3>A typical case</h3>
<p>A 34-year-old man from Phuentsholing has had 15 watery, pale stools since the night before, with cramps but no fever or blood. Several neighbours are ill. His pulse is 118, BP 86/60, and he is drowsy with very slow skin pinch: <b>severe dehydration, suspect cholera</b>. Give Ringer's lactate 30 mL/kg (about 2 L for 65 kg) in 30 minutes, then 70 mL/kg (about 4.5 L) over 3 hours with ORS as soon as he can drink, a single dose of doxycycline 300 mg, stool for culture, and notify the district health officer.</p>
` },

{ id: "invest", title: "Investigations", html: `
<p>Uncomplicated watery diarrhoea under 7 days needs <b>no tests</b>.</p>
${tbl(["Test", "When"], [
["Urea, creatinine, electrolytes (Na, K), glucose", "Moderate–severe dehydration, older, comorbid, on diuretics/ACE inhibitors/metformin"],
["Full blood count", "Fever, blood in stool; anaemia and low platelets suggest HUS"],
["Stool microscopy (pus cells, RBCs, trophozoites, cysts) and culture", "Dysentery, severe illness, over 7 days, outbreaks, food handlers, immunocompromised"],
["Stool for <i>C. difficile</i> toxin", "Recent antibiotics or hospital stay"],
["Blood cultures", "High fever, sepsis, immunocompromised (Salmonella bacteraemia)"],
["Malaria test, scrub typhus serology", "Fever in endemic areas"],
["Ultrasound abdomen", "Amoebic liver abscess (right upper quadrant pain), surgical causes"],
["ECG, pregnancy test", "As indicated by the differential"]])}
${fig({ title: "Rice-water stool of cholera", src: "images/ge-ricewater.jpg", mod: "Photograph", ctx: "Cholera", loc: "Stool", find: "Pale, watery stool with flecks of mucus, like water in which rice has been washed", signs: "Rice-water stool", interp: "Profuse rice-water stools with rapid dehydration in an adult strongly suggest cholera: rehydrate aggressively, give a single-dose antibiotic, send stool culture and notify", ddx: "Severe ETEC infection", by: "Ajay Kumar Chaurasiya", page: "https://commons.wikimedia.org/wiki/File:Cholera_patient_rice_water_stool.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "staging", title: "Severity and where to treat", html: `
${tbl(["Severity", "Features", "Where"], [
["Mild", "Fewer than 4 stools/day, no dehydration, no fever or blood", "Home: ORS, diet"],
["Moderate", "Some dehydration, or dysentery without toxicity", "Clinic: Plan B; oral antibiotic if dysentery"],
["Severe", "Severe dehydration, shock, high fever with toxicity, AKI, inability to keep fluids down, elderly or immunocompromised", "Admit: IV fluids, labs, antibiotics as indicated"]])}
<p>Report suspected outbreaks (several linked cases, any suspected cholera) to the district health officer for public-health investigation.</p>
` },

{ id: "manage", title: "Management", html: `
<h3>1. Fluids for everyone</h3>
<ul><li><b>Plan A (no dehydration):</b> ${dr("ors", "ORS")} 200–400 mL after each loose stool plus usual fluids; soups, rice water. Avoid sugary drinks and alcohol.</li>
<li><b>Plan B (some):</b> ORS <b>75 mL/kg over 4 hours</b>, then reassess.</li>
<li><b>Plan C (severe):</b> ${dr("ringer_lactate", "Ringer's lactate")} (or normal saline) <b>30 mL/kg over 30 minutes</b>, repeat once if pulse still weak, then <b>70 mL/kg over 2½–3 hours</b>; ORS as soon as able to drink. Reassess every 15–30 minutes. In heart failure, CKD and the frail elderly, give smaller boluses (250–500 mL) and reassess for crackles.</li>
<li>Hold diuretics, ACE inhibitors/ARBs, metformin, SGLT2 inhibitors and NSAIDs while dehydrated; restart when eating and drinking for 24–48 hours.</li></ul>

<h3>2. Diet and symptom relief</h3>
<ul><li>Eat as soon as able: normal light diet. No need to 'rest the gut'.</li>
<li>${dr("loperamide", "Loperamide")} 4 mg then 2 mg after each loose stool (max 16 mg/day) for <b>watery</b> diarrhoea in adults without fever or blood.</li>
<li>${dr("ondansetron", "Ondansetron")} 4–8 mg if vomiting stops oral rehydration. Paracetamol for fever and cramps.</li></ul>

<h3>3. Antibiotics: only when indicated</h3>
${tbl(["Situation", "First choice", "Alternative", "Note"], [
["<b>Dysentery</b> (blood ± fever)", dr("ciprofloxacin", "Ciprofloxacin") + " 500 mg BD × 3 days (STG: 7 days)", dr("azithromycin", "Azithromycin") + " 500 mg daily × 3 days or 1 g once; " + dr("ceftriaxone", "ceftriaxone") + " 1–2 g IV daily × 3–5 days if severe", "Review at 48 h; failure → resistance or amoebiasis"],
["<b>Cholera</b> with moderate/severe dehydration", dr("doxycycline", "Doxycycline") + " <b>300 mg single dose</b>", "Azithromycin 1 g single dose (pregnancy); ciprofloxacin 1 g single dose only if resistant", "Fluids are the life-saving treatment"],
["<b>Amoebic colitis</b> (trophozoites with RBCs)", dr("metronidazole", "Metronidazole") + " 400 mg 8-hourly × 5 days (STG)", "500–750 mg TDS × 7–10 days if severe; then a luminal agent (paromomycin, diloxanide) where available", "Ultrasound for liver abscess if RUQ pain"],
["<b>Giardiasis</b>", "Metronidazole 400 mg 8-hourly × 5 days (STG)", "Tinidazole 2 g single dose", "Treat household contacts if symptomatic"],
["<b>Severe travellers' or febrile watery diarrhoea</b>", "Azithromycin 1 g once", "Ciprofloxacin 500 mg BD × 3 days", "Mild cases: fluids ± loperamide only"],
["<b>C. difficile</b>", "Oral vancomycin 125 mg QID × 10 days (referral)", "Metronidazole 400–500 mg TDS × 10 days if vancomycin unavailable (non-severe)", "Stop the causative antibiotic"]])}
<p class="qn">STG 2024, WHO/MSF cholera, IDSA 2017, ACG 2016.${r(1, 3, 4, 5)}</p>
${box("amber", "Resistance warning", `<p>Fluoroquinolone-resistant <i>Shigella</i> and <i>Campylobacter</i> are common in South Asia, and WHO lists ciprofloxacin-resistant Shigella as a priority pathogen. No Bhutan susceptibility data were found. If fever and blood persist after 48 hours of ciprofloxacin, switch (azithromycin or ceftriaxone) and send stool culture. <span class="lbl l-draft">EVIDENCE GAP</span></p>`)}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Cautions", "Bhutan (NEML 2025)"], [
[dr("ors", "ORS"), "200–400 mL per stool; 75 mL/kg over 4 h", "—", "To PHC"],
[dr("ringer_lactate", "Ringer's lactate"), "30 mL/kg in 30 min, then 70 mL/kg over 3 h", "Overload in HF/CKD", "To PHC"],
[dr("ciprofloxacin", "Ciprofloxacin"), "500 mg BD × 3 days (STG 7 days)", "Tendons, QT, zinc/iron interaction", "Tablet to DH"],
[dr("azithromycin", "Azithromycin"), "1 g once, or 500 mg daily × 3 days", "QT", "Oral not listed (IV to DH)"],
[dr("doxycycline", "Doxycycline"), "300 mg single dose (cholera)", "Pregnancy (use azithromycin)", "To PHC"],
[dr("metronidazole", "Metronidazole"), "400 mg 8-hourly × 5 days", "No alcohol; metallic taste", "To PHC"],
[dr("ceftriaxone", "Ceftriaxone"), "1–2 g IV daily", "—", "1 g NRH/RRH; 250 mg to PHC"],
[dr("cotrimoxazole", "Co-trimoxazole"), "960 mg BD × 5 days (where nothing else; resistance common)", "Rash, marrow", "To PHC"],
[dr("loperamide", "Loperamide"), "4 mg then 2 mg per stool, max 16 mg/day", "Not with blood or fever", "Not listed"],
[dr("ondansetron", "Ondansetron"), "4–8 mg", "QT", "NRH/RRH"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Pregnancy</h3><ul><li>Rehydrate early (fetal risk with maternal hypovolaemia). Cholera or dysentery: <b>azithromycin</b> is preferred; avoid doxycycline and, where possible, ciprofloxacin. Metronidazole is acceptable when indicated.</li></ul>
<h3>Older adults</h3><ul><li>Dehydrate fast, AKI common; hold diuretics and ACE inhibitors; lower threshold to admit and test; think of ischaemic colitis and cancer.</li></ul>
<h3>Immunocompromised (HIV, transplant, chemotherapy, cirrhosis)</h3><ul><li>Stool tests and blood cultures; treat Salmonella and Shigella longer (7–14 days); consider cryptosporidium, isospora, CMV, microsporidia.</li></ul>
<h3>Diabetes</h3><ul><li>Sick-day rules: keep taking some carbohydrate and fluids, check glucose 4-hourly, stop metformin and SGLT2 inhibitors, never stop basal insulin, check ketones.</li></ul>
<h3>Food handlers, health workers</h3><ul><li>Off work until 48 hours after symptoms stop (norovirus, Shigella, STEC may need clearance stool tests).</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Bloody diarrhoea, now oliguric with anaemia and low platelets</b>", "HUS: avoid antibiotics and antimotility drugs if STEC suspected, refer for dialysis"],
["<b>Fever, right upper quadrant pain weeks after dysentery</b>", "Amoebic liver abscess: ultrasound, metronidazole, aspirate only if large or failing"],
["<b>Diarrhoea after a week of antibiotics, WBC 25,000</b>", "C. difficile: stop the antibiotic, test, oral vancomycin; watch for megacolon"],
["<b>Many guests ill 2–4 hours after a wedding meal</b>", "Toxin food poisoning (S. aureus, B. cereus): supportive care; notify for food-safety investigation"],
["<b>Patient on furosemide and enalapril, creatinine doubled</b>", "Pre-renal AKI: fluids, hold both drugs, recheck in 24–48 h (see AKI chapter)"],
["<b>Weight loss and diarrhoea for 2 months</b>", "Not gastroenteritis: stool for ova/cysts, HIV, TSH, coeliac, colonoscopy if over 45 or blood"]])}
` },

{ id: "complications", title: "Complications", html: `
${tbl(["Complication", "Clue", "Action"], [
["Hypovolaemic shock, AKI", "Hypotension, oliguria", "Plan C; creatinine; hold nephrotoxins"],
["Hypokalaemia", "Weakness, ileus, arrhythmia", "ORS; oral/IV potassium"],
["HUS", "After bloody diarrhoea (STEC, Shigella dysenteriae type 1)", "Supportive care, dialysis"],
["Toxic megacolon", "Distension, pain, fever, tachycardia", "IV fluids, NG tube, antibiotics, surgeon"],
["Bacteraemia (Salmonella)", "High fever, rigors", "Blood culture, IV ceftriaxone"],
["Amoebic liver abscess", "RUQ pain, fever", "Ultrasound, metronidazole"],
["Reactive arthritis, Guillain–Barré (Campylobacter)", "Joint pain or ascending weakness weeks later", "Recognise and refer"],
["Post-infectious IBS, lactose intolerance", "Symptoms lasting weeks", "Reassure; dietary adjustment"]])}
` },

{ id: "followup", title: "Follow-up and prevention", html: `
<ul><li>Review in 48 hours if dysentery on antibiotics, or sooner if worse.</li><li>Persisting over 14 days: investigate as persistent diarrhoea.</li></ul>
${box("green", "What to tell the patient", `<ul><li>'Drink ORS after every loose motion. One sachet in one litre of boiled, cooled water; make fresh each day.'</li><li>'Eat light normal food as soon as you can.'</li><li>'Wash hands with soap after the toilet and before cooking or eating; boil drinking water.'</li><li>'Stay home from work or school until 48 hours after the diarrhoea stops, especially if you handle food.'</li></ul>`)}
${box("red", "Come back if", `<ul><li>Blood in the stool, high fever, severe pain.</li><li>Unable to keep fluids down, very little urine, dizziness on standing.</li><li>Not better in 3–5 days.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Oral rehydration in cholera", src: "images/ge-ors-drink.jpg", mod: "Photograph", ctx: "Cholera treatment", loc: "—", find: "A cholera patient drinking oral rehydration solution with help from nurses", signs: "—", interp: "Most cholera patients, even many with severe losses once the initial IV deficit is corrected, are kept alive by continuing ORS volume for volume with stool losses", ddx: "—", by: "CDC", page: "https://commons.wikimedia.org/wiki/File:Cholera_rehydration_nurses.jpg", lic: "Public domain" })}
${fig({ title: "Entamoeba histolytica trophozoites", src: "images/ge-amoeba.jpg", mod: "Stool microscopy (trichrome stain)", ctx: "Amoebic dysentery", loc: "Stool", find: "Trophozoites containing ingested red blood cells (dark inclusions)", signs: "Erythrophagocytosis", interp: "Ingested red cells distinguish pathogenic E. histolytica from harmless look-alikes; treat with metronidazole", ddx: "E. dispar (no ingested RBCs), macrophages", by: "CDC", page: "https://commons.wikimedia.org/wiki/File:Trophozoites_of_Entamoeba_histolytica_with_ingested_erythrocytes.JPG", lic: "Public domain" })}
</div>
${fig({ title: "Giardia lamblia on scanning electron microscopy", src: "images/ge-giardia.jpg", mod: "Scanning electron micrograph", ctx: "Giardiasis", loc: "Small intestine", find: "Pear-shaped flagellated protozoon with a ventral sucking disc that attaches to the gut lining", signs: "—", interp: "Attachment to the small-bowel mucosa causes bloating, greasy stools and malabsorption; diagnose by stool cysts/trophozoites, treat with metronidazole", ddx: "—", by: "CDC / Mahmud Tari", page: "https://commons.wikimedia.org/wiki/File:Giardia_lamblia_SEM_8698_lores.jpg", lic: "Public domain" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult with acute diarrhoea", [
F.s("Assess hydration, blood, fever, pain, duration, risk factors"), F.a,
F.d("Red flags (shock, surgical abdomen, AKI, toxicity)?"), F.a,
F.b([["Yes", F.e("Admit: Plan C, labs, cultures, surgical review")], ["No", F.s("Plan A or B")]]), F.a,
F.d("Blood in stool?"), F.a,
F.b([["Yes", F.s("Dysentery: ciprofloxacin; stool microscopy; review 48 h")], ["No: profuse rice-water?", F.s("Cholera: doxycycline 300 mg once; notify")], ["Neither", F.ok("Fluids ± loperamide; no antibiotic")]]), F.a,
F.s("Over 7–14 days → stool tests, persistent diarrhoea work-up")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>Fluids save lives; antibiotics rarely do in watery diarrhoea.</li><li>'Gastroenteritis' in an older or diabetic patient: check glucose, ECG and abdomen before accepting the label.</li><li>Ask every patient about recent antibiotics.</li><li>Postural pulse and BP find dehydration that skin pinch misses.</li></ul>
${tbl(["Mistake", "Better"], [["Metronidazole + ciprofloxacin for every loose motion", "Fluids; targeted antibiotics only"], ["Loperamide in bloody diarrhoea", "Avoid"], ["Continuing ACE inhibitor, diuretic, metformin while dehydrated", "Sick-day rules"], ["Missing outbreaks", "Ask about others ill; notify"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "Name three causes of bloody diarrhoea.", "Shigella, Campylobacter, Entamoeba histolytica (also Salmonella, STEC, IBD, ischaemic colitis).")}
${qa("Intern/MO", "How do you rehydrate a 60 kg adult with severe dehydration?", "Ringer's lactate 100 mL/kg = 6 L: 1.8 L in 30 minutes (repeat if pulse still weak), then 4.2 L over 2½–3 hours, with ORS as soon as able to drink; reassess every 15–30 minutes.")}
${qa("Intern/MO", "When are antibiotics indicated in adult diarrhoea?", "Dysentery, cholera with dehydration, severe or febrile illness with toxicity, immunocompromise, proven amoebiasis or giardiasis, C. difficile.")}
${qa("Intern/MO", "What is the antibiotic for cholera in a pregnant woman?", "Azithromycin 1 g single dose.")}
${qa("Specialist", "Why might ciprofloxacin fail in dysentery here?", "Fluoroquinolone resistance in Shigella and Campylobacter is common in South Asia; also consider amoebiasis. Switch to azithromycin or ceftriaxone and culture the stool.")}
${qa("Viva", "What features suggest a toxin-mediated food poisoning?", "Vomiting-predominant illness starting 1–6 hours after a shared meal in several people, short-lived, often from S. aureus or B. cereus (reheated rice).")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024: §8.1.2 Bacillary dysentery, §8.2.1 Amoebiasis, §8.2.2 Giardiasis, §8.5.11 Viral gastroenteritis.</li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and NEML 2025.</li>
<li id="ref-3">Médecins Sans Frontières. Management of a cholera epidemic: practical guide. 2018 (app export 2025); World Health Organization / GTFCC cholera case management guidance.</li>
<li id="ref-4">Shane AL, Mody RK, Crump JA, et al. 2017 Infectious Diseases Society of America clinical practice guidelines for the diagnosis and management of infectious diarrhea. Clin Infect Dis 2017;65:e45–e80. <a href="https://doi.org/10.1093/cid/cix669" target="_blank" rel="noopener">doi:10.1093/cid/cix669</a></li>
<li id="ref-5">Riddle MS, DuPont HL, Connor BA. ACG clinical guideline: diagnosis, treatment, and prevention of acute diarrheal infections in adults. Am J Gastroenterol 2016;111:602–622. <a href="https://doi.org/10.1038/ajg.2016.126" target="_blank" rel="noopener">doi:10.1038/ajg.2016.126</a></li>
<li id="ref-6">World Health Organization. WHO bacterial priority pathogens list 2024. <a href="https://www.who.int/publications/i/item/9789240093461" target="_blank" rel="noopener">who.int</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 sections", "<span class='pass'>Verified</span>", "Read from the PDF"],
["Cholera regimens (MSF/WHO)", "<span class='pass'>Checked</span>", "Plan C adult volumes and single-dose antibiotics"],
["IDSA 2017 / ACG 2016", "<span class='pass'>Checked</span>", "DOIs confirmed"],
["NEML 2025 availability", "<span class='pass'>Checked</span>", "Oral azithromycin and loperamide not listed"],
["Bhutan Shigella/Campylobacter susceptibility", "<span class='warn'>Evidence gap</span>", "None found"]], "qc")}
` }
]
});
