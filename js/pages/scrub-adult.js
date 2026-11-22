/* Scrub typhus and other rickettsial fevers — adults */
registerPage({
id: "scrub-adult",
title: "Scrub Typhus & Rickettsial Fevers — Adults",
subtitle: "The cardamom-harvest fever: look for the hidden eschar, start doxycycline on suspicion, give azithromycin in pregnancy, combine both IV in severe disease, and remember that beta-lactams do nothing",
age: "Adults", specs: ["id", "medicine", "emerg", "ph"],
keywords: ["scrub typhus", "rickettsial fever", "rickettsia", "Orientia tsutsugamushi", "eschar", "chigger", "mite", "doxycycline", "azithromycin scrub typhus", "INTREST", "murine typhus", "spotted fever", "Weil-Felix", "acute undifferentiated febrile illness", "AUFI", "cardamom", "scrub typhus pregnancy"],
related: ["scrub-child", "enteric-adult", "dengue-adult", "meningitis-adult", "sepsis-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Scrub typhus is one of the most important treatable causes of fever in southern Bhutan, and one of the easiest to miss. It responds within a day or two to a cheap tablet — doxycycline — yet kills when it is treated with the penicillins and cephalosporins usually given for fever. Think of it, search the whole skin for an eschar, and treat on suspicion.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever 5 days or more (any duration with an eschar), headache, myalgia, lymph nodes, rash; farming, cardamom, grass; June to November.</p></div>
<div><h4>Eschar</h4><p>Painless black scab with a red rim — armpit, groin, under the breasts, waistband, behind the ears. Present in only 10–86%.</p></div>
<div><h4>Treat</h4><p>${dr("doxycycline")} 100 mg twice daily for 7–10 days, or ${dr("azithromycin")} 500 mg daily for 7 days.</p></div>
<div><h4>Pregnancy</h4><p>Azithromycin 500 mg once daily for 7 days.</p></div>
<div><h4>Severe</h4><p>IV doxycycline <b>plus</b> azithromycin (INTREST trial; Bhutan guideline 2025).</p></div>
<div><h4>Expect</h4><p>Fever settles within about 48 hours of doxycycline; if not, rethink the diagnosis.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Scrub typhus was first detected in Bhutan in 2008. The southern districts are endemic and sporadic cases occur in central districts, peaking from June to November.${r(7)} Bhutanese studies link it to cardamom harvesting, outdoor toilets, goat ownership and sitting on grass. The STG (§8.1.3) gives doxycycline 100 mg twice daily for 7 days. The <b>National Guidelines for the Management of Priority Zoonotic Diseases (2025)</b> give the full regimen by severity, age and pregnancy, and this chapter follows them. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>An acute febrile illness caused by <i>Orientia tsutsugamushi</i>, an intracellular bacterium transmitted by the bite of larval trombiculid mites (chiggers, <i>Leptotrombidium</i>) that live on rodents in scrub, grass and field edges. Humans are dead-end hosts: there is no person-to-person spread. Incubation is usually 6–10 days (range 6–21).${r(1, 2)}</p>
${tbl(["Risk (Bhutan studies)", "Why", "Notes"], [
["Cardamom harvesting, paddy and garden work", "Mite islands in shady, moist vegetation", "The main risk factor in Bhutan (Zangpo 2023)"],
["Outdoor toilets, traditional housing", "Exposure near bushes", "—"],
["Owning goats, sitting or lying on grass", "Contact with mite habitats", "Rest babies on mats"],
["Not changing clothes after field work", "Mites remain on clothing", "—"],
["Season: monsoon and post-monsoon", "Chigger activity", "Peaks June–November"]])}
<h3>Other rickettsial fevers</h3>
<p><b>Murine typhus</b> (<i>Rickettsia typhi</i>, from rat fleas in towns and markets) and <b>spotted fever group</b> rickettsioses (tick-borne; often with a rash on the palms and soles) present similarly and respond to the same doxycycline treatment.${r(3)}</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From a mite bite to multi-organ failure", [
F.s("Chigger feeds; Orientia multiplies at the bite → eschar"), F.a,
F.s("Spread through lymphatics → regional then generalised lymphadenopathy"), F.a,
F.s("Infection of endothelial cells and macrophages → vasculitis"), F.a,
F.d("Treated early?"), F.a,
F.b([["Yes", F.ok("Rapid defervescence within 24–48 h")], ["No (or beta-lactam given)", F.e("Week 2: pneumonitis/ARDS, AKI, hepatitis, meningoencephalitis, myocarditis, shock, DIC")]])])}
<p>Because <i>Orientia</i> lives inside cells and lacks the usual cell wall, penicillins, cephalosporins and aminoglycosides do not work. Delay in effective treatment and age over 65 are the main risk factors for complications (Bhutan guideline).${r(1, 4)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "Bhutan zoonoses guideline 2025 / international", "This guide and why"], [
["Duration", "Doxycycline 100 mg twice daily for 7 days", "7–10 days and at least 3 days afebrile (total 7–14) (Bhutan 2025, ICMR 2015)", "Bhutan 2025 guideline"],
["Severe disease", "Not described", "IV doxycycline plus IV azithromycin (INTREST: combination reduced the composite poor outcome vs either alone)", "Dual therapy"],
["Pregnancy", "Not described", "Azithromycin 500 mg daily for 7 days", "As 2025 guideline"],
["Children under 8", "Not described", "Doxycycline at all ages, short course (Bhutan 2025, AAP)", "See child chapter"],
["Weil–Felix test", "Not mentioned", "Poor sensitivity and specificity; not recommended where RDT/ELISA available (ICMR)", "Use RDT, IgM ELISA, PCR"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Mechanism", "Clue"], [
["Fever with chills, headache, myalgia, arthralgia", "Systemic infection", "Fever often for over 5 days at presentation"],
["Eschar", "Necrosis at the bite site", "Look in hidden areas; often unnoticed by the patient"],
["Regional or generalised lymphadenopathy", "Lymphatic spread", "Tender node near the eschar"],
["Macular or maculopapular non-itchy rash, starting on the trunk", "Vasculitis", "Fades quickly; easy to miss"],
["Hepatosplenomegaly, relative bradycardia", "—", "—"],
["Cough, breathlessness", "Interstitial pneumonitis, ARDS", "Severe disease"],
["Confusion, neck stiffness, seizures", "Meningoencephalitis", "CSF lymphocytic"],
["Reduced urine, jaundice, low BP", "AKI, hepatitis, shock", "Severe disease"]])}
${box("red", "Severe scrub typhus (Bhutan guideline)", `<ul><li>Pneumonitis or ARDS (SpO₂ under 94%, breathing fast)</li><li>Acute kidney injury; hepatitis or liver failure; jaundice</li><li>Meningoencephalitis; seizures; reduced consciousness</li><li>Hypotension, septic shock, myocarditis, DIC</li></ul>`)}
<h3>The typical patient</h3>
<p>A 45-year-old woman from Dagana has had fever and headache for eight days after the cardamom harvest. Amoxicillin from the BHU has not helped. Temperature 39 °C, tender lymph node in the right axilla, and a 6 mm painless black scab under the right breast that she had not noticed. Platelets 98,000, ALT 140. Scrub typhus RDT is positive. <b>This is scrub typhus.</b> Doxycycline 100 mg twice daily for 7 days should bring the fever down within two days; amoxicillin never would have.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against scrub typhus", "Best test"], [
["Dengue", "Retro-orbital pain, rising haematocrit, urban, Aedes season", "Eschar favours scrub", "NS1, CBC"],
["Leptospirosis", "Floodwater, calf pain, conjunctival suffusion, jaundice with AKI", "Doxycycline treats both", "Serology"],
["Enteric fever", "Step-ladder fever, abdominal symptoms", "—", "Blood culture"],
["Malaria", "Travel, rigors", "—", "RDT"],
["Murine typhus, spotted fever", "Urban rat exposure; tick bite; palm and sole rash", "Same treatment", "Serology"],
["Chikungunya", "Severe joint pain", "—", "Serology"],
["Japanese encephalitis, viral encephalitis", "Encephalitis without eschar", "—", "CSF, JE IgM"],
["Bacterial sepsis", "Focal source", "—", "Cultures"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Scrub typhus RDT (IgM/IgG)</b>", "Rapid diagnosis", "National, regional and district hospitals; negative early in illness does not exclude", "Essential"],
["IgM ELISA", "Screening and confirmation", "RCDC, national and regional hospitals; serum within 7–10 days of illness", "Where available"],
["PCR (blood or eschar)", "Early diagnosis", "RCDC; EDTA blood in the first 4–7 days; eschar crust or margin", "Where available"],
["CBC, CRP, LFT, creatinine", "Thrombocytopenia, transaminitis, AKI", "Mild leucocytosis or normal count", "Essential"],
["Chest X-ray, SpO₂", "Pneumonitis, ARDS", "—", "If breathless"],
["Malaria RDT, dengue NS1, blood culture, leptospira serology", "Mimics and co-infection", "—", "Essential"],
["Lumbar puncture", "Meningoencephalitis", "Lymphocytic CSF, raised protein", "If neurological signs"]])}
<p><b>Case definitions (Bhutan 2025):</b> suspected — acute undifferentiated fever for 5 days or more (or any duration with an eschar); probable — positive RDT or ELISA (OD over 0.5); confirmed — PCR positive, four-fold rise in titre, or high IgM titre.${r(1)}</p>
` },

{ id: "staging", title: "Severity and treatment by weight", html: `
<p>Classify as mild–moderate or severe, then use the tool for the regimen. Treat on clinical suspicion — do not wait for test results.${r(1, 4)}</p>
<div class="calc" data-calc="scrubdose"></div>
<h3>Admit or refer</h3>
<ul><li>Any severe feature, pregnancy, age over 65, inability to take oral medicine, or no improvement within 48–72 hours.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Mild to moderate</h3>
<ul><li>${dr("doxycycline")} <b>100 mg twice daily for 7–10 days</b>, at least 3 days after the fever settles (Bhutan 2025; STG 7 days). Take with water, sitting upright, not at bedtime (oesophageal ulcer).</li>
<li>Alternative: ${dr("azithromycin")} 500 mg once daily for 7 days.</li>
<li>${dr("paracetamol")} for fever; fluids.${r(1, 5)}</li></ul>
<h3>B. Severe</h3>
<ul><li>Admit; IV <b>doxycycline 200 mg twice daily on day 1, then 100–200 mg twice daily</b>, <b>plus IV azithromycin 500 mg once daily</b>, for 7–10 days (INTREST; Bhutan 2025). If IV doxycycline is unavailable, give oral doxycycline (crushed via NG tube) with IV azithromycin.${r(4)}</li>
<li>Organ support: oxygen, non-invasive or mechanical ventilation for ARDS; conservative fluids (leaky lungs); dialysis for AKI; vasopressors for shock (see <a href="#/d/sepsis-adult">sepsis</a>).</li></ul>
<h3>C. Pregnancy</h3>
<ul><li>${dr("azithromycin")} 500 mg once daily for 7 days (IV if severe). Scrub typhus in pregnancy is linked to miscarriage and preterm birth: involve obstetrics.</li></ul>
<h3>D. Alternatives (Bhutan 2025)</h3>
<ul><li>Rifampicin 600 mg once daily for 7 days (adults; check TB status first to avoid monotherapy of hidden TB); chloramphenicol 250–500 mg IV 6-hourly for 7 days (risk of bone-marrow suppression).</li></ul>
<h3>E. Chemoprophylaxis</h3>
<ul><li>Doxycycline 200 mg once weekly, starting 1–2 days before and continuing through short, high-risk exposure (military, disaster relief); adults only; not in pregnancy (Bhutan 2025).</li></ul>
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Fever over 5 days or eschar in season: doxycycline (listed to PHC) on suspicion; refer severe features"],
["District hospital", "RDT, CBC, LFT, RFT; IV doxycycline and azithromycin for severe disease (azithromycin IV listed to DH); refer for ventilation or dialysis"],
["Referral hospital", "ELISA, PCR (RCDC), ICU care"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("doxycycline"), "100 mg twice daily × 7–10 days; severe IV 200 mg BD day 1 then 100–200 mg BD", "Drug of choice; with water, upright"],
[dr("azithromycin"), "500 mg once daily × 7 days (IV in severe)", "Pregnancy; with doxycycline in severe"],
[dr("rifampicin"), "600 mg once daily × 7 days", "Alternative (exclude TB)"],
["Chloramphenicol", "250–500 mg IV 6-hourly × 7 days", "Alternative; marrow toxicity"],
[dr("paracetamol"), "1 g 6-hourly (max 4 g/day)", "Fever"],
["Avoid as treatment", "Amoxicillin, cephalosporins, gentamicin", "Do not work against Orientia"]])}
` },

{ id: "populations", title: "Pregnancy and older adults", html: `
<ul><li><b>Pregnancy:</b> azithromycin; avoid doxycycline. Higher rates of fetal loss and preterm birth when treatment is delayed.</li>
<li><b>Older adults (over 65):</b> higher risk of complications (Bhutan guideline): admit, monitor oxygen, kidney function and consciousness.</li>
<li><b>Children:</b> see <a href="#/d/scrub-child">scrub typhus in children</a>.</li></ul>
` },

{ id: "scenarios", title: "Scrub typhus with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Co-infection with dengue, leptospirosis or malaria", "Test for all in the south; doxycycline also treats leptospirosis", "Overlapping exposure"],
["Liver or kidney disease", "Doxycycline needs no renal adjustment; monitor LFT", "Safety"],
["On antacids, iron, calcium", "Separate from doxycycline by 2–3 hours", "Chelation reduces absorption"],
["On warfarin", "Monitor INR", "Doxycycline potentiates warfarin"],
["Suspected TB as well", "Avoid rifampicin monotherapy", "TB resistance"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Pneumonitis, ARDS", "Breathlessness, hypoxia, bilateral infiltrates", "Oxygen, ventilation, conservative fluids"],
["Acute kidney injury", "Rising creatinine, oliguria", "Fluids as needed, dialysis"],
["Hepatitis, jaundice", "Raised transaminases, bilirubin", "Supportive"],
["Meningoencephalitis", "Confusion, seizures, neck stiffness", "Dual therapy; seizure care"],
["Myocarditis, shock", "Hypotension, arrhythmia", "ICU, vasopressors"],
["DIC, bleeding", "Low platelets, bleeding", "Supportive, blood products"]])}
<p>Untreated scrub typhus has a median mortality of about 6% (up to 70% in older series); with early doxycycline, deaths are rare.${r(6)}</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Review at 48–72 hours: fever should have settled.</li>
<li>Report cases to the zoonoses programme (Bhutan's awareness campaigns run May–June each year).</li>
<li>Prevention: full clothing and gumboots in fields and cardamom plots; trousers tucked into socks; wash and change clothes after field work; shower; mats for sitting and resting babies on grass; repellent on legs and socks; clear grass and bushes around houses and toilets; rodent control.${r(1)}</li></ul>
${box("green", "What to tell the patient", `<ul><li>"This fever comes from a tiny mite in grass and bushes. The medicine works quickly — you should feel better within two days. Finish the full course."</li><li>Take doxycycline with a full glass of water, sitting up, and not just before bed.</li><li>Wear long clothes and boots in the fields, and change and wash them after work.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Breathless, confused, passing little urine, yellow eyes</li><li>Fever not better after 2 days of medicine</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Eschar of scrub typhus", src: "images/scrub-eschar.jpg", mod: "Clinical photograph", ctx: "Patient with scrub typhus", loc: "Left arm", find: "Round, painless black crust with a red rim", signs: "Eschar (bite site of an infected chigger)", interp: "Strongly suggests scrub typhus — treat with doxycycline; always search the armpits, groin, under the breasts and waistband", by: "Paula Santibáñez, Ana M. Palomar et al.", page: "https://commons.wikimedia.org/wiki/File:Scrub_typhus_eschar.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Rash in scrub typhus", src: "images/scrub-rash.webp", mod: "Clinical photograph", ctx: "Adult with scrub typhus", loc: "Trunk", find: "Generalised macular eruption with some scattered papules", signs: "Maculopapular rickettsial rash", interp: "Non-itchy rash starting on the trunk; fades quickly, so look early", by: "Shiichi Ihara, Kiyoshi Shikino et al.", page: "https://commons.wikimedia.org/wiki/File:Scrub_typhus_rash.webp", lic: "CC BY 4.0" })}
</div>
<div class="pair">
${fig({ title: "Chigger mites (Leptotrombidium)", src: "images/chigger-mites.jpg", mod: "Photomicrograph", ctx: "Vector of scrub typhus", loc: "—", find: "Tiny orange-red larval mites", signs: "Larval trombiculid mites", interp: "Live in mite islands of grass and scrub; prevention is clothing, boots and clearing vegetation", by: "Michael Wunderli", page: "https://commons.wikimedia.org/wiki/File:Leptotrombidium,_chigger_mites_(14854410979).jpg", lic: "CC BY 2.0" })}
${fig({ title: "Scrub typhus rapid test", src: "images/scrub-rdt.jpg", mod: "Laboratory photograph", ctx: "Rapid diagnostic test", loc: "Cassette", find: "Control and test lines visible", signs: "Positive scrub typhus IgM", interp: "Available at district hospitals; a negative test early in illness does not exclude scrub typhus", by: "Ajay Kumar Chaurasiya", page: "https://commons.wikimedia.org/wiki/File:Scrub_Typhus_IgM_Test-Positive.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Fever in the scrub typhus season", [
F.s("Fever 5 days or more, or any fever with eschar; search the skin"), F.a,
F.s("RDTs: scrub typhus, dengue, malaria; CBC, LFT, creatinine"), F.a,
F.d("Severe features or pregnancy?"), F.a,
F.b([["Severe", F.e("Admit: IV doxycycline + azithromycin; organ support")], ["Pregnant", F.s("Azithromycin 500 mg daily × 7 days")]]), F.a,
F.s("Otherwise: doxycycline 100 mg BD × 7–10 days"), F.a,
F.d("Afebrile within 48–72 h?"), F.a,
F.b([["Yes", F.ok("Complete course; prevention advice")], ["No", F.e("Reconsider diagnosis; co-infection")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Undress the patient and look for the eschar.</b></li>
<li>Fever not responding to amoxicillin or ceftriaxone in the monsoon: think scrub typhus.</li>
<li>A dramatic response to doxycycline within 48 hours supports the diagnosis.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating with beta-lactams only", "Progression to severe disease", "Doxycycline on suspicion"],
["Waiting for test results", "Delay is the main risk factor for complications", "Treat clinically"],
["Doxycycline in pregnancy", "Fetal tooth and bone effects", "Azithromycin"],
["Missing the eschar", "Missed diagnosis", "Full skin examination"],
["Rifampicin alone without excluding TB", "TB drug resistance", "Check for TB"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What organism causes scrub typhus and how is it spread?", "Orientia tsutsugamushi, by the bite of larval trombiculid mites (chiggers).")}
${qa("Student", "Where should you look for an eschar?", "Armpits, groin, under the breasts, waistband, behind the ears and other hidden skin folds.")}
${qa("Intern/MO", "What is the first-line treatment for mild scrub typhus in adults?", "Doxycycline 100 mg twice daily for 7–10 days (at least 3 days after defervescence).")}
${qa("Intern/MO", "How is scrub typhus treated in pregnancy?", "Azithromycin 500 mg once daily for 7 days.")}
${qa("Intern/MO", "Why does amoxicillin fail?", "Orientia is intracellular and lacks the usual peptidoglycan cell wall; beta-lactams are inactive.")}
${qa("Specialist", "What did the INTREST trial show?", "In severe scrub typhus, combined IV doxycycline and azithromycin reduced the composite poor outcome compared with either drug alone.")}
${qa("Specialist", "What are the main risk factors for scrub typhus in Bhutan?", "Cardamom harvesting, outdoor toilets, owning goats, sitting on grass and not changing clothes after field work.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Department of Public Health, Ministry of Health, Bhutan. National Guidelines for the Management of Priority Zoonotic Diseases, 2025: chapter 4, Scrub typhus.</li>
<li id="ref-2">Zangpo T, Phuentshok Y, Dorji K et al. Environmental, occupational, and demographic risk factors for clinical scrub typhus, Bhutan. <i>Emerg Infect Dis</i> 2023;29:909–918. <a href="https://doi.org/10.3201/eid2905.221430" target="_blank" rel="noopener">doi:10.3201/eid2905.221430</a></li>
<li id="ref-3">Rahi M, Gupte MD, Bhargava A et al. DHR-ICMR guidelines for diagnosis and management of rickettsial diseases in India. <i>Indian J Med Res</i> 2015;141:417–422. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4510721/" target="_blank" rel="noopener">PMC4510721</a></li>
<li id="ref-4">Varghese GM, Dayanand D, Gunasekaran K et al. Intravenous doxycycline, azithromycin, or both for severe scrub typhus (INTREST). <i>N Engl J Med</i> 2023;388:792–803. <a href="https://doi.org/10.1056/NEJMoa2208449" target="_blank" rel="noopener">doi:10.1056/NEJMoa2208449</a></li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.3 Scrub typhus; NEML 2025.</li>
<li id="ref-6">Taylor AJ, Paris DH, Newton PN. A systematic review of mortality from untreated scrub typhus (Orientia tsutsugamushi). <i>PLoS Negl Trop Dis</i> 2015;9:e0003971. <a href="https://doi.org/10.1371/journal.pntd.0003971" target="_blank" rel="noopener">doi:10.1371/journal.pntd.0003971</a></li>
<li id="ref-7">Dorji K, Dorjee S et al. Clinical and epidemiological patterns of scrub typhus, an emerging disease in Bhutan. <i>Trop Med Infect Dis</i> 2019;4:56. <a href="https://doi.org/10.3390/tropicalmed4020056" target="_blank" rel="noopener">doi:10.3390/tropicalmed4020056</a></li>
<li id="ref-8">Bhutan Clinical Reference app: Scrub typhus (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan zoonoses guideline 2025", "<span class='pass'>Verified</span>", "Chapter 4 read directly from the PDF"],
["Doses (two sources)", "<span class='pass'>Checked</span>", "Bhutan 2025, ICMR 2015, INTREST, BNF"],
["Author lists of Bhutan studies", "<span class='flag'>Partly verified</span>", "Taken from the Bhutan guideline reference list; full author lists not checked"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 3.0 / CC BY 4.0 / CC BY 2.0 / CC BY-SA 4.0"]], "qc")}
` }
]
});
