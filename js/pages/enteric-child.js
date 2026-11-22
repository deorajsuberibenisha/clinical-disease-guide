/* Enteric (typhoid and paratyphoid) fever — children */
registerPage({
id: "enteric-child",
title: "Enteric (Typhoid) Fever — Children",
subtitle: "Most of Bhutan's typhoid is in children: fever without a focus, diarrhoea rather than constipation, weight-based azithromycin or ceftriaxone, and the danger signs of perforation and encephalopathy",
age: "Children & adolescents", specs: ["paeds", "id", "gi", "ph"],
keywords: ["typhoid child", "enteric fever child", "paediatric typhoid", "pediatric typhoid", "Salmonella Typhi child", "azithromycin typhoid child", "ceftriaxone typhoid child", "cefixime typhoid", "typhoid perforation child", "typhoid conjugate vaccine", "TCV", "Typbar"],
related: ["enteric-adult", "scrub-child", "ge-child", "sepsis-child", "acute-abdomen-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Typhoid in a child is often just fever, tiredness and a sore tummy for several days, sometimes with diarrhoea. Young children rarely show the textbook signs. Take a blood culture, treat with a drug that works in South Asia, dose by weight, and watch for the child who becomes drowsy, distended or bleeds.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever 3 days or more without a focus, abdominal pain, vomiting, diarrhoea, coated tongue, enlarged liver or spleen, a toxic or apathetic child.</p></div>
<div><h4>Test</h4><p>Blood culture (best in week 1). Malaria RDT, dengue NS1 and scrub test in endemic areas. Not Widal alone.</p></div>
<div><h4>Uncomplicated</h4><p>${dr("azithromycin")} 20 mg/kg once daily (max 1 g) for 7 days, or ${dr("cefixime")} 20 mg/kg/day in 2 doses for 14 days.</p></div>
<div><h4>Severe</h4><p>${dr("ceftriaxone")} 80 mg/kg IV once daily (max 2 g); 10–14 days in total.</p></div>
<div><h4>Fever falls slowly</h4><p>Allow 3–5 days before calling it treatment failure.</p></div>
<div><h4>Prevention</h4><p>Safe water, handwashing, food hygiene; typhoid conjugate vaccine from 6 months (not yet in Bhutan's programme).</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§8.1.1) has no paediatric regimen, and the Bhutan Clinical Reference app notes that the JDWNRH Paediatric OPD Handbook (draft) follows WHO. GBD 2023 estimates that 63% of Bhutan's typhoid cases and 74% of its typhoid deaths are in children under 15. This chapter uses WHO AWaRe child doses, with cefixime (on NEML at RRH level) where oral azithromycin is unavailable. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Systemic infection with <i>Salmonella</i> Typhi or Paratyphi, spread by contaminated water and food. School-age children and adolescents have the highest rates; infants and toddlers are also infected but present atypically.${r(1, 2)}</p>
${tbl(["Risk", "Why", "Notes"], [
["Unsafe drinking water", "Faecal contamination", "Springs, tanks, flooding"],
["Street food, school canteens, hostels", "Carrier food handlers", "Clusters in schools"],
["Travel to high-burden areas", "India, Nepal, Bangladesh", "High drug resistance"],
["Malnutrition, HIV, sickle cell disease", "Severe or invasive disease", "Lower threshold for IV treatment"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Typhoid in a child", [
F.s("Ingestion → small-bowel invasion → macrophages carry bacteria to liver, spleen, marrow"), F.a,
F.s("Week 1: fever, malaise, abdominal pain; young children may have diarrhoea and vomiting"), F.a,
F.s("Week 2: hepatosplenomegaly, apathy, toxic look"), F.a,
F.e("Weeks 2–3: bleeding, perforation, encephalopathy, myocarditis, hepatitis"), F.a,
F.ok("Recovery with effective antibiotics; relapse or carriage in a few")])}
<p>Children compensate well and may look deceptively alert; a child who becomes quiet, distended or develops a rising pulse in the second week needs urgent review for perforation.${r(2, 3)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Child antibiotic", "No paediatric regimen", "WHO AWaRe: azithromycin 20 mg/kg/day (mild, high FQ resistance); ceftriaxone 80 mg/kg/day (severe); ciprofloxacin 15 mg/kg/dose only where resistance is low. IAP/ICMR practice: cefixime 20 mg/kg/day", "Azithromycin first; cefixime if oral azithromycin is unavailable; ceftriaxone if severe"],
["Widal", "Listed", "Not reliable (WHO)", "Blood culture"],
["Vaccine", "Not mentioned", "WHO 2018: one dose of TCV from 6 months with catch-up to 15 years in endemic countries", "Recommend where available; not in Bhutan's programme"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Age", "Typical features", "Pitfall"], [
["Under 5 years", "Fever, irritability, vomiting, diarrhoea, poor feeding; few classic signs", "Mistaken for viral illness or gastroenteritis"],
["School age", "Rising fever, headache, abdominal pain, constipation or diarrhoea, coated tongue, hepatosplenomegaly", "Mistaken for dengue, malaria or scrub typhus"],
["Adolescent", "Like adults: relative bradycardia, rose spots, delirium in severe disease", "—"]])}
${box("red", "Danger signs — admit", `<ul><li>Lethargy, confusion, convulsions, toxic look</li><li>Persistent vomiting; unable to drink or take medicine; dehydration</li><li>Abdominal distension, guarding, severe pain; blood in stool or melaena</li><li>Jaundice, breathlessness, shock</li></ul>`)}
<h3>The typical patient</h3>
<p>A 9-year-old girl from a boarding school in Samdrup Jongkhar has had fever for five days, headache, abdominal pain and loose stools; two classmates are ill too. Temperature 39.3 °C, alert, tongue coated, liver 2 cm, spleen tip palpable. Malaria and dengue tests are negative. Weight 26 kg. <b>This is probable enteric fever.</b> After a blood culture she can take azithromycin 520 mg once daily (20 mg/kg) for 7 days — or cefixime if azithromycin is not available — with paracetamol, fluids, review in 48–72 hours, and notification so the school water and kitchen can be checked.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against typhoid", "Best test"], [
["Scrub typhus", "Eschar, lymph nodes, field exposure", "—", "Scrub IgM"],
["Dengue", "Severe aches, falling platelets, rising haematocrit", "—", "NS1, CBC"],
["Malaria", "Travel, anaemia", "—", "RDT"],
["UTI", "Urinary symptoms, young child", "—", "Urine culture"],
["Gastroenteritis, dysentery", "Short illness, blood in stool, no prolonged fever", "—", "Clinical, stool"],
["Appendicitis", "Localised RIF pain", "—", "Ultrasound"],
["TB, brucellosis", "Long illness, weight loss, contacts, raw milk", "—", "Chest X-ray, GeneXpert, serology"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Blood culture</b> (about 2–4 mL in small children, more in older)", "Diagnosis and sensitivity", "Yield rises with blood volume; take before antibiotics", "Essential"],
["CBC", "Leucopenia or normal count; anaemia; platelets", "—", "Essential"],
["LFT, electrolytes, creatinine", "Hepatitis, dehydration", "—", "Admitted children"],
["Malaria RDT, dengue NS1, scrub typhus test, urine", "Mimics", "—", "Essential"],
["Widal", "—", "Unreliable; not for diagnosis alone", "Not recommended"],
["Abdominal ultrasound / X-ray", "Perforation, abscess, gallbladder", "If abdominal signs", "Selected"]])}
` },

{ id: "staging", title: "Severity and doses by weight", html: `
<p>Choose “Child” and enter the weight for the drug and dose.${r(2, 4)}</p>
<div class="calc" data-calc="entericdose"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Uncomplicated</h3>
<ul><li>${dr("azithromycin")} <b>20 mg/kg once daily (maximum 1 g) for 7 days</b> (WHO AWaRe). If oral azithromycin is unavailable: ${dr("cefixime")} 20 mg/kg/day in 2 divided doses for 14 days.${r(2, 4)}</li>
<li>${dr("ciprofloxacin")} 15 mg/kg twice daily (max 500 mg) for 7 days only for a sensitive isolate.</li>
<li>${dr("paracetamol")} 15 mg/kg 6-hourly; oral fluids and normal diet as tolerated; avoid NSAIDs.</li>
<li>Review at 48–72 hours; worsening or no improvement by day 5 → admit, culture review, look for complications.</li></ul>
<h3>B. Severe</h3>
<ul><li>Admit; IV fluids for dehydration (see <a href="#/d/ge-child">gastroenteritis</a> for fluid plans); ${dr("ceftriaxone")} 80 mg/kg IV once daily (max 2 g); switch to oral azithromycin or cefixime once afebrile and eating; total 10–14 days.</li>
<li>Encephalopathy or shock: PICU care; dexamethasone (3 mg/kg, then 1 mg/kg 6-hourly × 8 doses) on specialist advice.</li>
<li>Perforation: NPO, NG tube, IV fluids, ceftriaxone + ${dr("metronidazole")}, urgent paediatric surgery (see <a href="#/d/acute-abdomen-child">acute abdomen</a>).</li></ul>
<h3>C. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "RDTs, oral antibiotic if well, paracetamol, ORS; refer danger signs and children not improving"],
["District hospital", "Blood culture, IV ceftriaxone, fluids, surgical referral"],
["School cluster", "Notify the DHO; water and kitchen inspection; screen food handlers"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("azithromycin"), "20 mg/kg once daily (max 1 g) × 7 days", "First line; oral not on NEML 2025"],
[dr("cefixime"), "20 mg/kg/day in 2 doses (max 400 mg/dose) × 14 days", "Oral alternative; step-down"],
[dr("ceftriaxone"), "80 mg/kg IV once daily (max 2 g)", "Severe"],
[dr("ciprofloxacin"), "15 mg/kg twice daily (max 500 mg) × 7 days", "Sensitive isolates only"],
[dr("metronidazole"), "7.5 mg/kg IV 8-hourly (max 500 mg)", "Perforation"],
[dr("paracetamol"), "15 mg/kg 6-hourly (max 60 mg/kg/day)", "Fever"]])}
` },

{ id: "populations", title: "Infants, adolescents and special groups", html: `
<ul><li><b>Infants:</b> non-specific fever and diarrhoea; full sepsis work-up; IV ceftriaxone if unwell.</li>
<li><b>Adolescents:</b> adult doses from 45 kg (see <a href="#/d/enteric-adult">adult chapter</a>); ask about pregnancy.</li>
<li><b>Severe malnutrition:</b> treat as severe; careful fluids; SAM protocol.</li>
<li><b>Sickle cell disease:</b> Salmonella osteomyelitis — bone pain needs imaging and longer treatment.</li></ul>
` },

{ id: "scenarios", title: "Enteric fever with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Dehydration from diarrhoea", "ORS or IV fluids per WHO plans", "Common in young children"],
["Co-infection with malaria or dengue", "Test and treat each", "Southern districts"],
["Child already on amoxicillin or cefalexin", "Does not treat typhoid", "Choose azithromycin or ceftriaxone"],
["Bone pain or limp", "Imaging for osteomyelitis", "Salmonella bone infection"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Intestinal perforation", "Week 2–3, distension, guarding", "Surgery"],
["GI bleeding", "Melaena, pallor", "Transfusion"],
["Encephalopathy, seizures", "Drowsiness, delirium", "PICU, ceftriaxone, dexamethasone"],
["Hepatitis, myocarditis, pneumonia", "Organ signs", "Supportive"],
["Relapse", "Fever returns after 1–3 weeks", "Culture and re-treat"]])}
<p>With prompt effective treatment almost all children recover; delayed treatment and drug resistance drive deaths.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Review at 48–72 hours and at the end of treatment.</li>
<li>Prevention: boiled or treated water, handwashing with soap, safe school kitchens and toilets.</li>
<li>Typhoid conjugate vaccine: one dose from 6 months; WHO recommends catch-up to 15 years in endemic countries. Not yet in Bhutan's routine programme.${r(5)}</li></ul>
${box("green", "What to tell the family", `<ul><li>"The fever will take a few days to go down. Give every dose of the medicine."</li><li>Give plenty of safe fluids; small, soft meals.</li><li>Wash hands with soap after the toilet and before eating.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Tummy swells or becomes very painful, blood or black stools</li><li>Your child is very sleepy, confused, has a fit, or keeps vomiting</li><li>Fever still high after 5 days of medicine</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Rose spots", src: "images/typhoid-rose-spots.jpg", mod: "Clinical photograph", ctx: "Typhoid fever", loc: "Chest", find: "Faint pink blanching macules", signs: "Rose spots", interp: "Uncommon in young children; supports the diagnosis when present", by: "CDC Public Health Image Library (PHIL 2215)", page: "https://commons.wikimedia.org/wiki/File:Salmonella_typhi_typhoid_fever_PHIL_2215_lores.jpg", lic: "Public domain" })}
${fig({ title: "Typhoid ulceration of the ileum (historical drawing)", src: "images/typhoid-ileum-ulcer.jpg", mod: "Pathology drawing", ctx: "Fatal typhoid", loc: "Terminal ileum", find: "Ulcers over Peyer's patches, one perforated", signs: "Typhoid ulceration and perforation", interp: "Why abdominal signs in week 2–3 need a surgeon", by: "Thomas Godart (Wellcome Collection)", page: "https://commons.wikimedia.org/wiki/File:Typhoid_ulceration_of_the_lower_portion_of_the_ileum_Wellcome_L0061611.jpg", lic: "CC BY 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with fever more than 3 days", [
F.s("RDTs for malaria, dengue, scrub; urine; CBC; blood culture"), F.a,
F.d("Enteric fever likely — danger signs?"), F.a,
F.b([["Yes", F.e("Admit: ceftriaxone 80 mg/kg IV; fluids; surgeon if abdominal signs")], ["No", F.s("Azithromycin 20 mg/kg × 7 days (cefixime × 14 days if unavailable)")]]), F.a,
F.d("Better by day 5?"), F.a,
F.b([["Yes", F.ok("Complete course")], ["No", F.e("Admit; review culture; complications?")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Young children have diarrhoea, not constipation.</b></li>
<li>Culture volume matters: more blood, more positives.</li>
<li>Amoxicillin, cefalexin and gentamicin do not treat typhoid.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Widal-based diagnosis", "Wrong diagnosis", "Culture, RDTs"],
["Ciprofloxacin without sensitivity", "Failure", "Azithromycin or cefixime"],
["Changing drugs on day 2", "Resistance, confusion", "Wait 5 days if stable"],
["Missing perforation in a quiet child", "Peritonitis", "Daily abdominal exam"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "How does typhoid in toddlers differ from adults?", "Non-specific fever, vomiting and diarrhoea, with few classic signs.")}
${qa("Intern/MO", "Give the WHO child dose of azithromycin for typhoid.", "20 mg/kg once daily (maximum 1 g) for 7 days.")}
${qa("Intern/MO", "What is the ceftriaxone dose for severe typhoid in a child?", "80 mg/kg IV once daily (maximum 2 g); 10–14 days in total.")}
${qa("Intern/MO", "What is the oral alternative if azithromycin is not available?", "Cefixime 20 mg/kg/day in two divided doses for 14 days.")}
${qa("Specialist", "What did WHO recommend about typhoid conjugate vaccine in 2018?", "One dose from 6 months of age, prioritised in high-burden or drug-resistant settings, with catch-up to 15 years where feasible.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.1 Enteric or typhoid fever; NEML 2025.</li>
<li id="ref-2">World Health Organization. The WHO AWaRe Antibiotic Book. Geneva: WHO; 2022 (enteric fever in children). <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int/publications/i/item/9789240062382</a></li>
<li id="ref-3">Crump JA, Sjölund-Karlsson M, Gordon MA, Parry CM. Epidemiology, clinical presentation, laboratory diagnosis, antimicrobial resistance, and antimicrobial management of invasive Salmonella infections. <i>Clin Microbiol Rev</i> 2015;28:901–937. <a href="https://doi.org/10.1128/CMR.00002-15" target="_blank" rel="noopener">doi:10.1128/CMR.00002-15</a></li>
<li id="ref-4">Indian Council of Medical Research. Treatment Guidelines for Antimicrobial Use in Common Syndromes, 2nd ed. 2019 (enteric fever). <a href="https://www.icmr.gov.in/" target="_blank" rel="noopener">icmr.gov.in</a></li>
<li id="ref-5">World Health Organization. Typhoid vaccines: WHO position paper, March 2018. <i>Wkly Epidemiol Rec</i> 2018;93:153–172; Coalition against Typhoid, Bhutan fact sheet 2026. <a href="https://www.coalitionagainsttyphoid.org/bhutan-resources/" target="_blank" rel="noopener">coalitionagainsttyphoid.org</a></li>
<li id="ref-6">Bhutan Clinical Reference app: Enteric (typhoid) fever (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan paediatric guidance", "<span class='flag'>Evidence gap</span>", "STG has no child regimen; WHO doses used"],
["Doses (two sources)", "<span class='pass'>Checked</span>", "WHO AWaRe and BNFc/ICMR"],
["IAP enteric fever guideline", "<span class='flag'>Not reviewed</span>", "Cefixime dose from widely used Indian practice"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a paediatrician"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY 4.0"]], "qc")}
` }
]
});
