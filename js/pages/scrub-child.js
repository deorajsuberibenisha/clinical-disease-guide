/* Scrub typhus and rickettsial fevers — children */
registerPage({
id: "scrub-child",
title: "Scrub Typhus & Rickettsial Fevers — Children",
subtitle: "The child with fever, puffy face and big liver after the monsoon: find the eschar under the nappy or behind the ear, give doxycycline at any age by weight, and know when to combine it with azithromycin",
age: "Children & adolescents", specs: ["paeds", "id", "picu", "ph"],
keywords: ["scrub typhus child", "paediatric scrub typhus", "pediatric scrub typhus", "rickettsial fever child", "eschar child", "doxycycline child", "doxycycline under 8", "azithromycin scrub typhus child", "chloramphenicol scrub typhus", "acute febrile illness child Bhutan"],
related: ["scrub-adult", "dengue-child", "enteric-child", "meningitis-child", "sepsis-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children in farming families in southern Bhutan play and rest on the same grass where chiggers live. Scrub typhus in a child often looks like any persistent fever, sometimes with a puffy face, a big liver and swollen glands. The cure is short-course doxycycline at any age — the old fear of tooth staining does not apply to a 5–7-day course.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever 5 days or more (any duration with an eschar), lymph nodes, hepatosplenomegaly, facial or leg puffiness, rash; monsoon to autumn.</p></div>
<div><h4>Eschar sites in children</h4><p>Nappy area, groin, armpit, behind the ears, scalp, waistband, around the umbilicus.</p></div>
<div><h4>Treat</h4><p>${dr("doxycycline")} 2.2 mg/kg twice daily (100 mg if over 45 kg) for 5–7 days, at any age.</p></div>
<div><h4>Alternative</h4><p>${dr("azithromycin")} 10 mg/kg once daily (max 500 mg) for 5–7 days.</p></div>
<div><h4>Severe</h4><p>Doxycycline plus azithromycin for 7–10 days; PICU support.</p></div>
<div><h4>Avoid</h4><p>Relying on amoxicillin or cephalosporins; fluoroquinolones in children (Bhutan guideline).</p></div>
</div>
${box("bt", "Bhutan note", `<p>The National Guidelines for the Management of Priority Zoonotic Diseases (2025) make doxycycline the drug of choice for all ages, with weight-based child doses, azithromycin as the alternative, and dual therapy for severe disease. They advise resting babies on a mat rather than directly on grass, and avoiding DEET repellents under 12 months. The existing doxycycline card's usual under-8 caution does not apply to these short courses. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Infection with <i>Orientia tsutsugamushi</i> from the bite of larval mites (chiggers) in grassy, bushy and field-edge areas. Children are infected while playing, helping in fields or cardamom plots, or sitting on grass near the home. Incubation is 6–21 days.${r(1, 2)}</p>
${tbl(["Risk", "Why", "Notes"], [
["Farming families in southern districts", "Exposure to mite islands", "Peaks June–November"],
["Playing or resting on grass; outdoor toilets", "Chigger contact", "Mats for babies"],
["Delay in treatment", "Main risk for complications", "Treat on suspicion"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Scrub typhus in a child", [
F.s("Mite bite → eschar (often unnoticed) → lymph node swelling"), F.a,
F.s("Vasculitis: fever, rash, hepatosplenomegaly, capillary leak (puffy face, oedema)"), F.a,
F.d("Effective antibiotic early?"), F.a,
F.b([["Yes", F.ok("Afebrile within 24–48 h")], ["No", F.e("Pneumonitis, myocarditis, meningoencephalitis, AKI, shock, DIC")]])])}
<p>Children often show more hepatosplenomegaly, oedema and lymphadenopathy than adults; the eschar is more often missed because it sits in skin folds or the nappy area.${r(1, 3)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Older teaching", "Current guidance", "This guide and why"], [
["Doxycycline under 8 years", "Avoid (tooth staining)", "Use at all ages for rickettsial infections: courses of 21 days or less do not stain teeth (AAP Red Book; Todd 2015; Bhutan 2025)", "Doxycycline first at any age"],
["Duration in children", "7–14 days", "5–7 days (mild), 7–10 days (severe) (Bhutan 2025)", "Bhutan 2025"],
["Fluoroquinolones", "Sometimes used", "Not recommended in children (Bhutan 2025)", "Avoid"],
["Chloramphenicol", "Traditional second line", "50–100 mg/kg/day 6-hourly for 5–7 days if others unavailable; agranulocytosis risk", "Last resort"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Clue", "Note"], [
["Fever for 5 days or more, headache, abdominal pain, vomiting", "Not responding to amoxicillin or ceftriaxone", "Common referral story"],
["Eschar", "Nappy area, groin, axilla, behind ears, scalp", "Undress fully"],
["Lymphadenopathy, hepatosplenomegaly", "Very common in children", "—"],
["Facial puffiness, pedal oedema", "Capillary leak, low albumin", "Can mimic nephrotic syndrome"],
["Maculopapular rash", "Trunk then limbs", "Fades quickly"],
["Cough, fast breathing", "Pneumonitis", "Check SpO₂"],
["Irritability, drowsiness, seizures, neck stiffness", "Meningoencephalitis", "LP if safe"],
["Cold peripheries, low BP, gallop", "Myocarditis, shock", "PICU"]])}
${box("red", "Danger signs — admit", `<ul><li>SpO₂ under 94%, fast breathing, chest indrawing</li><li>Drowsiness, seizures, neck stiffness</li><li>Poor perfusion, low BP, gallop rhythm</li><li>Low urine output, jaundice, bleeding</li><li>Unable to drink or vomiting everything</li></ul>`)}
<h3>The typical patient</h3>
<p>A 4-year-old boy from Sarpang has had fever for seven days despite a course of amoxicillin. His face is puffy, his liver is 4 cm and spleen 2 cm, and he has tender nodes in the left groin. Under his shorts' waistband on the left is a small black scab. Weight 15 kg; SpO₂ 97%. <b>This is scrub typhus.</b> He should get doxycycline 33 mg (2.2 mg/kg) twice daily — dissolve a 100 mg tablet in 10 mL of water and give 3.3 mL — for 5–7 days, and should be afebrile within two days.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against scrub typhus", "Best test"], [
["Dengue", "Rising haematocrit, falling platelets, Aedes season", "Eschar", "NS1, CBC"],
["Enteric fever", "Abdominal symptoms, contaminated water", "—", "Blood culture"],
["Leptospirosis", "Water exposure, jaundice, AKI", "Doxycycline treats both", "Serology"],
["Malaria", "Travel", "—", "RDT"],
["Kawasaki disease", "Fever over 5 days, red eyes, lips, rash, hand swelling", "Eschar", "Clinical criteria, echo"],
["Nephrotic syndrome", "Oedema, heavy proteinuria", "Fever and eschar", "Urine protein"],
["Infectious mononucleosis, leukaemia", "Nodes and spleen", "—", "CBC, film"],
["Meningitis, Japanese encephalitis", "Neurological signs", "—", "CSF"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Scrub typhus RDT (IgM)", "Rapid diagnosis", "District hospitals; may be negative in the first week", "Essential"],
["IgM ELISA, PCR", "Confirmation", "RCDC / referral hospitals", "Where available"],
["CBC, CRP, LFT, albumin, creatinine", "Thrombocytopenia, transaminitis, hypoalbuminaemia, AKI", "—", "Essential"],
["Dengue NS1, malaria RDT, blood culture", "Mimics", "—", "Essential"],
["Chest X-ray, SpO₂, ECG/echo", "Pneumonitis, myocarditis", "If breathless or shocked", "Selected"],
["Lumbar puncture", "Meningoencephalitis", "Lymphocytic CSF", "Selected"]])}
` },

{ id: "staging", title: "Severity and treatment by weight", html: `
<p>Enter the child's weight; the tool follows the Bhutan 2025 guideline. Treat on suspicion.${r(1)}</p>
<div class="calc" data-calc="scrubdose"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Mild to moderate</h3>
<ul><li>${dr("doxycycline")} <b>2.2 mg/kg twice daily</b> (100 mg twice daily if over 45 kg) for <b>5–7 days</b>, and at least 3 days after the fever settles (the guideline note sets a minimum of 7 days; when in doubt give 7). For small children, disperse a 100 mg tablet in 10 mL of water (10 mg/mL) and give the measured volume; follow with a drink.${r(1, 4)}</li>
<li>Alternative: ${dr("azithromycin")} 10 mg/kg once daily (max 500 mg) for 5–7 days.</li>
<li>${dr("paracetamol")} 15 mg/kg 6-hourly; fluids.</li></ul>
<h3>B. Severe</h3>
<ul><li>Admit (PICU if shocked or hypoxic). Doxycycline 2.2 mg/kg twice daily (IV, or oral/NG if IV unavailable) <b>plus</b> azithromycin 10 mg/kg once daily (IV available to DH) for 7–10 days.${r(5)}</li>
<li>Oxygen; careful fluids (capillary leak and pneumonitis — avoid overload); inotropes for myocarditis or shock; dialysis for AKI; seizure care.</li></ul>
<h3>C. Alternatives</h3>
<ul><li>Chloramphenicol 50–100 mg/kg/day in 4 divided doses for 5–7 days only if doxycycline and azithromycin are unavailable (agranulocytosis, grey baby syndrome in neonates). No fluoroquinolones in children (Bhutan 2025).</li></ul>
<h3>D. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Doxycycline by weight on suspicion; refer danger signs"],
["District hospital", "RDT, CBC, LFT; IV azithromycin for severe disease with doxycycline; refer to PICU if needed"],
["Referral hospital / PICU", "Ventilation, inotropes, dialysis"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("doxycycline"), "2.2 mg/kg twice daily (max 100 mg/dose) × 5–7 days (7–10 if severe)", "All ages; short course"],
[dr("azithromycin"), "10 mg/kg once daily (max 500 mg) × 5–7 days", "Alternative; with doxycycline if severe"],
["Chloramphenicol", "50–100 mg/kg/day in 4 doses × 5–7 days", "Last resort; marrow toxicity"],
[dr("paracetamol"), "15 mg/kg 6-hourly (max 60 mg/kg/day)", "Fever"],
["Avoid", "Fluoroquinolones; reliance on beta-lactams", "Not recommended / ineffective"]])}
` },

{ id: "populations", title: "Infants, adolescents and special groups", html: `
<ul><li><b>Infants:</b> fever, irritability, poor feeding; eschar often in the nappy area; admit; doxycycline by weight.</li>
<li><b>Adolescents:</b> adult doses from 45 kg; azithromycin if pregnant (see <a href="#/d/scrub-adult">adult chapter</a>).</li>
<li><b>Malnourished children:</b> higher risk of severe disease; admit.</li></ul>
` },

{ id: "scenarios", title: "Scrub typhus with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Co-infection with dengue or leptospirosis", "Test for both; doxycycline covers leptospirosis", "Shared exposure"],
["Oedema and low albumin", "Avoid fluid overload", "Capillary leak"],
["Already on amoxicillin or ceftriaxone without response", "Switch to doxycycline", "Ineffective against Orientia"],
["Seizures", "Treat seizure; LP for meningoencephalitis", "CNS involvement"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Pneumonitis, ARDS", "Hypoxia, infiltrates", "Oxygen, ventilation"],
["Myocarditis, shock", "Gallop, poor perfusion", "Inotropes, PICU"],
["Meningoencephalitis", "Drowsiness, seizures", "Dual therapy"],
["AKI, hepatitis", "Creatinine, transaminases", "Supportive"],
["DIC, bleeding", "Low platelets, bleeding", "Blood products"]])}
<p>Children treated early recover fully; complications follow delayed recognition.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Review at 48–72 hours.</li>
<li>Prevention: long clothes and footwear for children in fields; do not let children sit or lie directly on grass — use a mat; bathe and change clothes after playing outside; clear grass around houses and toilets; repellents suitable for age (avoid DEET under 12 months).${r(1)}</li></ul>
${box("green", "What to tell the family", `<ul><li>"This fever comes from tiny mites in grass. The medicine works fast — your child should be better in two days. Give every dose."</li><li>Doxycycline for a few days does not stain children's teeth.</li><li>Use a mat when your child sits or sleeps outside.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fast or difficult breathing, very sleepy, fits</li><li>Passing little urine, yellow eyes, cold hands and feet</li><li>Fever not better after 2 days of medicine</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Eschar of scrub typhus", src: "images/scrub-eschar.jpg", mod: "Clinical photograph", ctx: "Scrub typhus", loc: "Arm (in children check nappy area, groin, axilla, behind ears)", find: "Painless black crust with red rim", signs: "Eschar", interp: "Undress the child fully to look for it; treat with doxycycline", by: "Paula Santibáñez, Ana M. Palomar et al.", page: "https://commons.wikimedia.org/wiki/File:Scrub_typhus_eschar.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Chigger mites (Leptotrombidium)", src: "images/chigger-mites.jpg", mod: "Photomicrograph", ctx: "Scrub typhus vector", loc: "—", find: "Tiny orange-red larval mites", signs: "Chiggers", interp: "Live in grass and scrub where children play", by: "Michael Wunderli", page: "https://commons.wikimedia.org/wiki/File:Leptotrombidium,_chigger_mites_(14854410979).jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with prolonged fever in season", [
F.s("Undress fully: eschar? nodes? liver and spleen?"), F.a,
F.s("RDTs: scrub, dengue, malaria; CBC, LFT"), F.a,
F.d("Danger signs?"), F.a,
F.b([["Yes", F.e("Admit: doxycycline + azithromycin; PICU support")], ["No", F.s("Doxycycline 2.2 mg/kg BD × 5–7 days")]]), F.a,
F.d("Afebrile in 48 h?"), F.a,
F.b([["Yes", F.ok("Finish course")], ["No", F.e("Reconsider diagnosis or co-infection")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Short-course doxycycline is safe at any age.</b></li>
<li>Puffy face, big liver and fever after the monsoon: think scrub typhus.</li>
<li>Look under the nappy and behind the ears.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Withholding doxycycline under 8 years", "Delay, severe disease", "Short course is safe"],
["Repeated beta-lactam courses", "Progression", "Doxycycline"],
["Missing the eschar", "Missed diagnosis", "Full examination"],
["Aggressive fluids with capillary leak", "Pulmonary oedema", "Careful fluids"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Where is the eschar often found in young children?", "Nappy area, groin, axilla, behind the ears and scalp.")}
${qa("Intern/MO", "What is the child dose of doxycycline for scrub typhus?", "2.2 mg/kg twice daily (100 mg twice daily if over 45 kg) for 5–7 days.")}
${qa("Intern/MO", "Why is doxycycline acceptable under 8 years here?", "Courses of 21 days or less have not been shown to stain teeth, and rickettsial disease can be fatal.")}
${qa("Specialist", "How is severe paediatric scrub typhus treated in the Bhutan guideline?", "Doxycycline 2.2 mg/kg twice daily plus azithromycin 10 mg/kg once daily for 7–10 days.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Department of Public Health, Ministry of Health, Bhutan. National Guidelines for the Management of Priority Zoonotic Diseases, 2025: chapter 4, Scrub typhus.</li>
<li id="ref-2">Zangpo T, Phuentshok Y, Dorji K et al. Environmental, occupational, and demographic risk factors for clinical scrub typhus, Bhutan. <i>Emerg Infect Dis</i> 2023;29:909–918. <a href="https://doi.org/10.3201/eid2905.221430" target="_blank" rel="noopener">doi:10.3201/eid2905.221430</a></li>
<li id="ref-3">Chapagain RH, Agrawal S, Pokharel S et al. Clinico-laboratory profile, complications and therapeutic outcome of scrub typhus in children. <i>J Nepal Health Res Counc</i> 2020;18:282–287. <a href="https://doi.org/10.33314/jnhrc.v18i2.2730" target="_blank" rel="noopener">doi:10.33314/jnhrc.v18i2.2730</a></li>
<li id="ref-4">Todd SR, Dahlgren FS, Traeger MS et al. No visible dental staining in children treated with doxycycline for suspected Rocky Mountain spotted fever. <i>J Pediatr</i> 2015;166:1246–1251. <a href="https://doi.org/10.1016/j.jpeds.2015.02.015" target="_blank" rel="noopener">doi:10.1016/j.jpeds.2015.02.015</a></li>
<li id="ref-5">Varghese GM, Dayanand D, Gunasekaran K et al. Intravenous doxycycline, azithromycin, or both for severe scrub typhus (INTREST). <i>N Engl J Med</i> 2023;388:792–803. <a href="https://doi.org/10.1056/NEJMoa2208449" target="_blank" rel="noopener">doi:10.1056/NEJMoa2208449</a></li>
<li id="ref-6">Bhutan Clinical Reference app: Scrub typhus (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan zoonoses guideline 2025 (children)", "<span class='pass'>Verified</span>", "Read directly from the PDF"],
["Doses (two sources)", "<span class='pass'>Checked</span>", "Bhutan 2025 and AAP/BNFc"],
["Todd 2015 reference", "<span class='pass'>Checked</span>", "DOI confirmed via Crossref"],
["INTREST in children", "<span class='flag'>Extrapolated</span>", "Trial included adolescents and adults; Bhutan guideline extends dual therapy to children"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a paediatrician"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 3.0 / CC BY 2.0"]], "qc")}
` }
]
});
