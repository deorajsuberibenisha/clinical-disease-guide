/* Enteric (typhoid and paratyphoid) fever — adults */
registerPage({
id: "enteric-adult",
title: "Enteric (Typhoid) Fever — Adults",
subtitle: "Fever for more than three days with headache and abdominal discomfort: why blood culture beats the Widal test, why ciprofloxacin now fails in most of South Asia, azithromycin or ceftriaxone, and the perforation that comes in the second or third week",
age: "Adults", specs: ["id", "medicine", "gi", "surg", "ph"],
keywords: ["typhoid", "enteric fever", "typhoid fever", "paratyphoid", "Salmonella Typhi", "Salmonella Paratyphi", "Widal test", "blood culture typhoid", "typhoid perforation", "rose spots", "relative bradycardia", "azithromycin typhoid", "ceftriaxone typhoid", "XDR typhoid", "typhoid carrier", "typhoid vaccine", "TCV"],
related: ["enteric-child", "scrub-adult", "acute-abdomen-adult", "sepsis-adult", "ge-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Typhoid looks like many other fevers, so it is both over-diagnosed (on a Widal test) and missed (until the bowel perforates). Treat it well by taking a blood culture before antibiotics, choosing a drug that still works in South Asia, waiting patiently for the fever to fall, and watching the abdomen in weeks two and three.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever 3 days or more, rising, with headache, malaise, abdominal pain, constipation or diarrhoea, coated tongue, relative bradycardia, tender liver or spleen.</p></div>
<div><h4>Test</h4><p><b>Blood culture</b> before antibiotics (best in week 1). Widal alone cannot diagnose or exclude typhoid.</p></div>
<div><h4>Uncomplicated</h4><p>${dr("azithromycin")} 1 g day 1, then 500 mg daily, 7 days. Ciprofloxacin only if the isolate is sensitive.</p></div>
<div><h4>Severe</h4><p>${dr("ceftriaxone")} 2 g IV daily; switch to oral when better; 10–14 days in total.</p></div>
<div><h4>Be patient</h4><p>Fever takes 3–5 days to settle on the right drug: do not switch on day 2.</p></div>
<div><h4>Danger</h4><p>Sudden abdominal pain, distension or melaena in week 2–3: perforation or bleeding — surgeon now.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§8.1.1) lists blood and stool culture, CBC, liver and kidney tests and the Widal test, with paracetamol, antiemetics and hydration; its antibiotic line is missing from the PDF text, and the Bhutan Clinical Reference app records ciprofloxacin 500 mg twice daily for 7–14 days. The GBD 2023 estimate for Bhutan is about 1,300 typhoid cases and 23 deaths a year, most in children. No Bhutanese resistance data for <i>S.</i> Typhi have been published, while neighbouring countries report fluoroquinolone non-susceptibility in 87–98% of isolates. This guide therefore uses azithromycin or ceftriaxone first and keeps ciprofloxacin for proven sensitive isolates. ${LB.bt()} ${LB.loc()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Enteric fever is a systemic infection with <i>Salmonella enterica</i> serovar Typhi (typhoid) or Paratyphi A, B or C (paratyphoid; clinically the same). Humans are the only reservoir; spread is faecal–oral through contaminated water and food, often from a symptomless carrier who handles food. Incubation is 10–14 days (range 6–30).${r(1, 2)}</p>
${tbl(["Risk", "Why", "Notes"], [
["Unsafe water, poor sanitation", "Faecal contamination", "Spring water, broken pipes, monsoon flooding"],
["Food from outside the home", "Food handlers who are carriers", "Street food, festivals, hostels"],
["Travel to India, Nepal, Bangladesh", "High incidence and drug resistance", "Ask about travel in the last month"],
["Gallstones", "Chronic carriage in the gallbladder", "Typically older women"],
["Children and young adults", "Highest incidence", "63% of Bhutan's estimated cases are under 15 (GBD 2023)"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From a contaminated meal to perforation", [
F.s("Ingested S. Typhi survives stomach acid and crosses the small-bowel lining"), F.a,
F.s("Taken up by macrophages in Peyer's patches → silent spread to liver, spleen, bone marrow"), F.a,
F.s("Week 1: bacteraemia — rising fever, headache, malaise (blood culture most often positive)"), F.a,
F.s("Week 2: abdominal pain, rose spots, hepatosplenomegaly, delirium (typhoid state)"), F.a,
F.e("Weeks 2–3: necrosis of Peyer's patches → bleeding or ileal perforation"), F.a,
F.s("Recovery, relapse (5–10%), or chronic gallbladder carriage (1–5%)")])}
<p>The bacteria live inside cells, which is why treatment is slow and why drugs that penetrate cells well (azithromycin, fluoroquinolones) work, while some that look good in the laboratory (aminoglycosides, first-generation cephalosporins) fail in patients.${r(2, 3)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["First-line antibiotic", "Ciprofloxacin 500 mg twice daily, 7–14 days (from BCR transcription; STG PDF line missing)", "WHO AWaRe 2022: ciprofloxacin only where fluoroquinolone resistance is low; otherwise azithromycin (uncomplicated) or ceftriaxone (severe). ICMR 2019: azithromycin or cefixime; ceftriaxone if severe", "<b>Azithromycin</b> first; ciprofloxacin only for a sensitive isolate " + LB.loc()],
["Widal test", "Listed as an investigation", "Not reliable for diagnosis (WHO): poor sensitivity and specificity in endemic areas", "Blood culture; interpret Widal only with care"],
["Duration", "7–14 days", "WHO: 7 days uncomplicated, 10 days severe (and 48 h afebrile)", "7 days azithromycin; 10–14 days for severe or cefixime"],
["Corticosteroids", "Not mentioned", "Dexamethasone for severe typhoid with delirium or shock (older trial; WHO 2003)", "Specialist option"],
["Vaccine", "Not mentioned", "WHO 2018: typhoid conjugate vaccine for endemic countries", "Not in Bhutan's programme yet"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Mechanism", "Clue"], [
["Fever rising over days (step-ladder), often 39–40 °C", "Bacteraemia", "Fever for more than 3 days without a focus"],
["Headache, malaise, body aches, cough", "Systemic illness", "Can mimic flu or pneumonia"],
["Abdominal pain, constipation (adults) or diarrhoea", "Peyer's patch inflammation", "Diarrhoea is commoner in children and HIV"],
["Coated tongue, relative bradycardia", "—", "Pulse slower than expected for the fever (not always)"],
["Rose spots (2–4 mm pink macules on chest and abdomen, blanching)", "Bacterial emboli", "Seen in a minority; hard to see on dark skin"],
["Tender hepatomegaly, splenomegaly", "Reticuloendothelial infection", "Week 2"],
["Confusion, apathy, delirium (typhoid state)", "Toxaemia", "Severe disease"]])}
${box("red", "Danger signs — admit", `<ul><li>Sudden severe abdominal pain, distension, guarding, absent bowel sounds (perforation)</li><li>Melaena or fresh blood per rectum</li><li>Confusion, drowsiness, delirium; shock</li><li>Persistent vomiting; unable to take oral medicine</li><li>Jaundice, myocarditis, pneumonia, kidney injury</li></ul>`)}
<h3>The typical patient</h3>
<p>A 24-year-old college student in Gelephu has had fever rising each day for six days, headache, loss of appetite and vague abdominal pain; she ate at a roadside stall before the illness began. Temperature 39.6 °C, pulse 88, coated tongue, tender liver edge. Malaria RDT and dengue NS1 are negative; white cell count is low-normal. <b>This is probable enteric fever.</b> She needs a blood culture first, then oral azithromycin 1 g on day 1 and 500 mg daily to complete 7 days, paracetamol, fluids, and an explanation that the fever will take several days to settle — plus clear advice to return at once with severe abdominal pain or black stools.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against typhoid", "Best test"], [
["Scrub typhus", "Eschar, lymph nodes, field work, monsoon", "—", "Scrub IgM RDT/ELISA"],
["Dengue", "Severe aches, retro-orbital pain, falling platelets, rising haematocrit", "—", "NS1, CBC"],
["Malaria", "Travel, rigors, anaemia", "—", "RDT, smear"],
["Leptospirosis", "Floodwater, calf pain, jaundice, AKI", "—", "Serology"],
["Brucellosis", "Raw milk, animals, sweats, joint pain", "—", "Culture, serology"],
["TB", "Weeks of fever, weight loss", "—", "Chest X-ray, GeneXpert"],
["Liver abscess, UTI, pneumonia", "Focal signs", "—", "Ultrasound, urine, X-ray"],
["Viral hepatitis", "Very high transaminases, jaundice", "—", "Hepatitis serology"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Blood culture</b> (10–15 mL in adults)", "Confirms diagnosis and gives sensitivity", "Positive in about 40–80%, best in week 1 and before antibiotics", "Essential"],
["Stool culture", "Positive from week 2; carriers", "Listed in STG", "Useful"],
["Bone marrow culture", "Most sensitive, even after antibiotics", "Rarely feasible", "Specialist"],
["CBC", "Normal or low white cells, mild anaemia, low platelets", "High white count suggests perforation or another diagnosis", "Essential"],
["LFT, creatinine, electrolytes", "Hepatitis, kidney injury", "Mild transaminase rise is common", "Essential"],
["Widal test", "Antibodies to O and H antigens", "False positives from past infection, vaccination and other fevers; false negatives early. A single titre should not decide treatment", "Interpret with caution"],
["Typhidot and other RDTs", "Rapid antibody tests", "Modest accuracy; not recommended for diagnosis alone", "Not recommended"],
["Malaria RDT, dengue NS1, scrub typhus test", "Common mimics in Bhutan", "—", "Essential in the south"],
["Erect chest X-ray, abdominal ultrasound/CT", "Perforation (free air), abscess", "If abdominal signs", "Selected"]])}
` },

{ id: "staging", title: "Severity and antibiotic choice", html: `
<p><b>Uncomplicated:</b> able to eat and take oral medicine, no warning signs. <b>Severe:</b> critically ill, delirium, shock, GI bleeding, suspected perforation or peritonitis, or unable to take oral treatment (WHO AWaRe). Use the tool for drug choice and doses.${r(2, 4)}</p>
<div class="calc" data-calc="entericdose"></div>
<h3>Refer or admit</h3>
<ul><li>Any severe feature; pregnancy; no improvement after 5 days of appropriate treatment.</li><li><b>Suspected perforation:</b> immediate surgical review (see <a href="#/d/acute-abdomen-adult">acute abdomen</a>).</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Uncomplicated enteric fever</h3>
<ol><li>Blood culture before the first dose where possible.</li>
<li>${dr("azithromycin")} <b>1 g on day 1, then 500 mg once daily to complete 7 days</b> (WHO AWaRe). Oral azithromycin is not on NEML 2025 — where it is unavailable, ${dr("cefixime")} 200–400 mg twice daily for 14 days.${r(2, 5)}</li>
<li>${dr("ciprofloxacin")} 500 mg twice daily for 7 days only when the isolate is fluoroquinolone-sensitive (STG regimen).</li>
<li>${dr("paracetamol")} for fever; oral fluids; light diet. Avoid NSAIDs (bleeding risk).</li>
<li>Review at 48–72 hours. The fever falls slowly (3–5 days); worsening, new abdominal signs or no improvement by day 5 needs reassessment and culture review.</li></ol>
<h3>B. Severe enteric fever</h3>
<ul><li>Admit; IV fluids; ${dr("ceftriaxone")} 2 g IV once daily; step down to oral azithromycin or cefixime when afebrile and eating; 10–14 days in total.</li>
<li>Delirium, obtundation or shock: dexamethasone 3 mg/kg IV, then 1 mg/kg 6-hourly for 8 doses (specialist decision).${r(6)}</li>
<li>Monitor abdomen, pulse, BP and haemoglobin daily in weeks 2–3.</li></ul>
<h3>C. Complications</h3>
<ul><li><b>Perforation:</b> NPO, IV fluids, ceftriaxone + metronidazole, early surgery (simple closure or resection) — delay raises mortality sharply.</li>
<li><b>GI bleeding:</b> resuscitation, transfusion; most stop without surgery.</li></ul>
<h3>D. Drug-resistant typhoid</h3>
<ul><li>MDR (resistant to ampicillin, chloramphenicol, co-trimoxazole) and fluoroquinolone resistance are common in South Asia; XDR typhoid (also resistant to ceftriaxone) spread from Pakistan since 2016 — treat with azithromycin and/or meropenem by culture.${r(3)}</li></ul>
<h3>E. Relapse and carriers</h3>
<ul><li>Relapse (5–10%, usually 2–3 weeks after recovery): culture and treat again, by sensitivity.</li>
<li>Chronic carriers (stool positive over 12 months), especially food handlers: prolonged therapy (for example ciprofloxacin 750 mg twice daily for 4 weeks if sensitive); cholecystectomy if gallstones.</li></ul>
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Malaria and dengue RDTs, oral antibiotic if well (azithromycin or cefixime if stocked, else STG ciprofloxacin), paracetamol, fluids; refer if severe or not improving"],
["District hospital", "Blood culture, CBC, LFT; IV ceftriaxone for severe disease; surgical referral for perforation"],
["Referral hospital", "Culture and sensitivity, surgery, ICU; report resistance patterns"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("azithromycin"), "1 g day 1, then 500 mg daily for 7 days", "First line; oral not on NEML 2025"],
[dr("cefixime"), "200–400 mg twice daily for 14 days", "Alternative; NRH/RRH"],
[dr("ciprofloxacin"), "500 mg twice daily for 7 days (STG 7–14)", "Only if the isolate is sensitive"],
[dr("ceftriaxone"), "2 g IV once daily", "Severe disease"],
[dr("dexamethasone"), "3 mg/kg IV, then 1 mg/kg 6-hourly × 8 doses", "Severe with delirium or shock (specialist)"],
[dr("metronidazole"), "500 mg IV 8-hourly", "With ceftriaxone for perforation"],
[dr("paracetamol"), "1 g 6-hourly (max 4 g/day)", "Fever"],
[dr("meropenem"), "1 g IV 8-hourly", "XDR typhoid by culture"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and HIV", html: `
<ul><li><b>Pregnancy:</b> azithromycin or ceftriaxone; avoid fluoroquinolones. Typhoid raises the risk of miscarriage and preterm birth: involve obstetrics.</li>
<li><b>Older adults:</b> more complications (perforation, encephalopathy); look for gallstones and carriage.</li>
<li><b>HIV and immunosuppression:</b> more bacteraemia and relapse; longer treatment.</li>
<li><b>Children:</b> see <a href="#/d/enteric-child">enteric fever in children</a>.</li></ul>
` },

{ id: "scenarios", title: "Enteric fever with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Gallstones", "Consider cholecystectomy after treatment", "Chronic carriage"],
["Liver disease", "Monitor LFT; azithromycin preferred", "Drug hepatotoxicity"],
["On warfarin", "INR checks with azithromycin or ciprofloxacin", "Interaction"],
["Long QT, on QT drugs", "ECG before azithromycin or ciprofloxacin", "Arrhythmia"],
["Co-infection (malaria, scrub typhus, dengue)", "Test for all in the south", "Overlapping presentations"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Ileal perforation (1–3%)", "Week 2–3, sudden pain, peritonitis, free air", "Resuscitation, antibiotics, surgery"],
["GI bleeding", "Melaena, falling haemoglobin", "Transfusion; endoscopy rarely needed"],
["Encephalopathy, shock", "Delirium, coma", "Ceftriaxone, dexamethasone, ICU"],
["Hepatitis, cholecystitis, myocarditis, pneumonia, AKI", "Organ-specific signs", "Supportive care"],
["Relapse, carriage", "Return of fever; positive stool cultures", "Re-treat; carrier eradication"]])}
<p>With effective antibiotics, mortality is under 1%; untreated it reaches 10–30%. Perforation carries the highest mortality.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Review at 48–72 hours and at the end of treatment; return early if worse.</li>
<li>Food handlers: stool cultures before returning to work (local public health advice).</li>
<li>Prevention: safe water (boil or treat), handwashing with soap, safe toilets, food hygiene.</li>
<li>Typhoid conjugate vaccine (one dose from 6 months, protects at least 4 years) is recommended by WHO for endemic countries; it is not yet part of Bhutan's routine programme. Polysaccharide (Vi) vaccine is an option for travellers and outbreaks.${r(7, 5)}</li></ul>
${box("green", "What to tell the patient", `<ul><li>"The fever will take a few days to settle even on the right medicine. Finish every tablet."</li><li>Drink boiled or treated water; wash hands with soap after the toilet and before cooking or eating.</li><li>Do not prepare food for others until your doctor says it is safe.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Sudden severe tummy pain or swelling, black or bloody stools</li><li>Confusion, drowsiness, repeated vomiting</li><li>Fever still high after 5 days of treatment</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Rose spots", src: "images/typhoid-rose-spots.jpg", mod: "Clinical photograph", ctx: "Patient with typhoid fever", loc: "Chest and abdomen", find: "Small, faint pink macules that blanch on pressure", signs: "Rose spots", interp: "Seen in a minority, usually in week 2; supports enteric fever but is hard to see on darker skin", by: "CDC Public Health Image Library (PHIL 2215)", page: "https://commons.wikimedia.org/wiki/File:Salmonella_typhi_typhoid_fever_PHIL_2215_lores.jpg", lic: "Public domain" })}
${fig({ title: "Typhoid ulceration with perforation of the ileum (historical drawing)", src: "images/typhoid-ileum-ulcer.jpg", mod: "Watercolour pathology drawing", ctx: "Fatal typhoid, 19th century", loc: "Terminal ileum", find: "Oval ulcers over Peyer's patches along the bowel's long axis, one perforated", signs: "Typhoid ulceration and perforation", interp: "Explains bleeding and perforation in weeks 2–3: the reason to examine the abdomen daily", by: "Thomas Godart (Wellcome Collection)", page: "https://commons.wikimedia.org/wiki/File:Typhoid_ulceration_of_the_lower_portion_of_the_ileum_Wellcome_L0061611.jpg", lic: "CC BY 4.0" })}
</div>
<div class="pair">
${fig({ title: "Widal slide test", src: "images/widal-slide.jpg", mod: "Laboratory photograph", ctx: "Serological screening", loc: "Slide agglutination wells", find: "Clumping (agglutination) in some wells against O and H antigens", signs: "Positive agglutination", interp: "Shows antibodies, not active infection: past infection, vaccination and other fevers cause positives — do not diagnose typhoid on Widal alone", by: "Sujith", page: "https://commons.wikimedia.org/wiki/File:Widal_Test_Slide.jpg", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Fever more than 3 days, no focus", [
F.s("Malaria RDT, dengue NS1, scrub typhus test, CBC; blood culture"), F.a,
F.d("Enteric fever likely?"), F.a,
F.d("Severe (delirium, shock, bleeding, peritonism, vomiting)?"), F.a,
F.b([["Yes", F.e("Admit: ceftriaxone 2 g IV; surgeon if abdominal signs")], ["No", F.s("Azithromycin 7 days (cefixime 14 days if unavailable)")]]), F.a,
F.d("Better by day 5?"), F.a,
F.b([["Yes", F.ok("Complete course; prevention advice")], ["No", F.e("Review culture, look for complications or another diagnosis")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Culture before antibiotics.</b></li>
<li>A slow fall in fever is expected, not failure.</li>
<li>Examine the abdomen every day in weeks 2–3.</li>
<li>A high white count in typhoid should make you think of perforation or a different diagnosis.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Diagnosing typhoid on a Widal test", "Over-treatment; missed malaria, dengue, scrub typhus", "Blood culture and RDTs"],
["Ciprofloxacin without sensitivity", "High failure in South Asia", "Azithromycin or ceftriaxone"],
["Switching antibiotics on day 2–3", "Confusion, resistance", "Wait 5 days if stable"],
["Missing perforation", "Peritonitis, death", "Daily abdominal exam; early surgery"],
["NSAIDs for fever", "Bleeding, perforation risk", "Paracetamol"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What organism causes typhoid, and how is it spread?", "Salmonella enterica serovar Typhi, by the faecal–oral route through contaminated water and food.")}
${qa("Student", "What is the best diagnostic test in week 1?", "Blood culture.")}
${qa("Intern/MO", "Why is the Widal test unreliable?", "It detects antibodies, which may reflect past infection, vaccination or cross-reaction, and may be negative early.")}
${qa("Intern/MO", "What is the WHO first-line treatment for uncomplicated typhoid where fluoroquinolone resistance is high?", "Azithromycin 1 g on day 1, then 500 mg daily for 7 days (children 20 mg/kg/day).")}
${qa("Intern/MO", "When does intestinal perforation typically occur?", "In the second or third week of illness.")}
${qa("Specialist", "What defines XDR typhoid and how is it treated?", "Resistance to first-line drugs, fluoroquinolones and third-generation cephalosporins; azithromycin and/or meropenem guided by culture.")}
${qa("Specialist", "Which patients may benefit from dexamethasone?", "Severe typhoid with delirium, obtundation, stupor, coma or shock: 3 mg/kg then 1 mg/kg 6-hourly for 8 doses.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.1 Enteric or typhoid fever; National Essential Medicines List 2025.</li>
<li id="ref-2">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) Antibiotic Book. Geneva: WHO; 2022 (enteric fever, adults and children). <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int/publications/i/item/9789240062382</a></li>
<li id="ref-3">Crump JA, Sjölund-Karlsson M, Gordon MA, Parry CM. Epidemiology, clinical presentation, laboratory diagnosis, antimicrobial resistance, and antimicrobial management of invasive Salmonella infections. <i>Clin Microbiol Rev</i> 2015;28:901–937. <a href="https://doi.org/10.1128/CMR.00002-15" target="_blank" rel="noopener">doi:10.1128/CMR.00002-15</a></li>
<li id="ref-4">Indian Council of Medical Research. Treatment Guidelines for Antimicrobial Use in Common Syndromes, 2nd ed. 2019 (enteric fever). <a href="https://www.icmr.gov.in/" target="_blank" rel="noopener">icmr.gov.in</a></li>
<li id="ref-5">Coalition against Typhoid. Potential of typhoid conjugate vaccines in Bhutan (fact sheet, Feb 2026; GBD 2023 estimates). <a href="https://www.coalitionagainsttyphoid.org/bhutan-resources/" target="_blank" rel="noopener">coalitionagainsttyphoid.org</a></li>
<li id="ref-6">Hoffman SL, Punjabi NH, Kumala S et al. Reduction of mortality in chloramphenicol-treated severe typhoid fever by high-dose dexamethasone. <i>N Engl J Med</i> 1984;310:82–88. <a href="https://doi.org/10.1056/NEJM198401123100203" target="_blank" rel="noopener">doi:10.1056/NEJM198401123100203</a></li>
<li id="ref-7">World Health Organization. Typhoid vaccines: WHO position paper, March 2018. <i>Wkly Epidemiol Rec</i> 2018;93:153–172. <a href="https://www.who.int/publications/i/item/whower9313" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-8">Bhutan Clinical Reference app: Enteric (typhoid) fever (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='flag'>Partly verified</span>", "§8.1.1 antibiotic line missing in PDF text; BCR transcription used"],
["Bhutan resistance data", "<span class='flag'>Evidence gap</span>", "No published S. Typhi susceptibility for Bhutan; regional data used"],
["Doses (two sources)", "<span class='pass'>Checked</span>", "WHO AWaRe and BNF/ICMR"],
["Oral azithromycin availability", "<span class='flag'>Gap</span>", "Not on NEML 2025 (IV only)"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a physician or infectious-disease specialist"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY 4.0 / CC BY-SA 3.0"]], "qc")}
` }
]
});
