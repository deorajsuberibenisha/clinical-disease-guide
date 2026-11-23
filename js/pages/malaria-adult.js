/* Malaria — adults
   Sources: National Guideline for Diagnosis and Treatment of Malaria in Bhutan, 6th edition 2024 (read in full, incl. annexures);
   WHO Guidelines for malaria (2023+); WHO Severe malaria (Trop Med Int Health 2014 supplement); SEAQUAMAT 2005. */
registerPage({
id: "malaria-adult",
title: "Malaria — Adults",
subtitle: "Bhutan is close to eliminating malaria, so every case counts: test every fever in the south or after travel, confirm before treating, give the 2024 national regimens under DOT (chloroquine plus 7-day primaquine for vivax; artemether–lumefantrine plus single-dose primaquine for falciparum), recognise severe malaria early and give artesunate without delay",
age: "Adults", specs: ["id", "medicine", "emerg", "ph"],
keywords: ["malaria", "Plasmodium vivax", "Plasmodium falciparum", "mixed malaria", "severe malaria", "cerebral malaria", "artesunate", "artemether-lumefantrine", "Coartem", "chloroquine", "primaquine", "G6PD", "radical cure", "relapse", "imported malaria", "DOT", "elimination", "RDT", "blood film", "Sarpang"],
related: ["malaria-child", "dengue-adult", "scrub-adult", "enteric-adult", "sepsis-adult", "afi-adult", "anaemia-adult", "aki-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Bhutan went from nearly 40,000 malaria cases in 1993–94 to 18 in 2023, and reported its last indigenous case in November 2021. Most cases now are imported, mainly from neighbouring India. Each one is a chance for malaria to come back. The clinician's job is to think of malaria, confirm it the same hour, treat it fully under supervision, and never let falciparum become severe.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever (over 37.5 °C) or history of fever with no other obvious cause in a resident of, or traveller from, a malaria area — southern Bhutan below 1,700 m, India, or abroad.</p></div>
<div><h4>Confirm before treating</h4><p>Thick and thin blood film (species, density) or RDT within 1 hour. Every RDT-positive also gets microscopy. Negative but still unwell → repeat.</p></div>
<div><h4>P. vivax</h4><p>${dr("chloroquine")} 3 days (10, 10, 5 mg/kg base) + ${dr("primaquine")} 0.5 mg/kg daily for 7 days (G6PD normal).</p></div>
<div><h4>P. falciparum</h4><p>${dr("artemether_lumefantrine")} 4 tablets at 0, 8, 24, 36, 48, 60 h + single primaquine 0.5 mg/kg on day 0. Mixed: AL + 7-day primaquine.</p></div>
<div><h4>Severe malaria</h4><p>${dr("artesunate")} 2.4 mg/kg IV/IM at 0, 12, 24 h then daily, for at least 24 h, then full AL. PHC: one IM dose and refer.</p></div>
<div><h4>Programme rules</h4><p>Admit all confirmed cases for 3 days; DOT for primaquine; follow-up smears; notify; case investigation by VDCP.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The <b>National Guideline for Diagnosis and Treatment of Malaria, 6th edition (2024)</b> brought two big changes. P. vivax radical cure moved to <b>7 days of primaquine 0.5 mg/kg</b> (previously 14 days), and the first trimester of pregnancy is now treated with a <b>3-day ACT</b> instead of quinine–clindamycin. Transmission occurs only below 1,700 m, mostly April–September. From 2019 to 2023 all active foci were in Sarpang, and 45% of cases were imported. In 2023, 56% of cases were P. falciparum and 44% P. vivax. There have been no malaria deaths since 2013 except one each in 2017 and 2018. Mandatory stock: RDTs, chloroquine, primaquine, Coartem and injectable artesunate/artemether and quinine at hospitals and PHCs; DHA–piperaquine and G6PD kits at referral hospitals. Chemoprophylaxis is not recommended for travel within Bhutan. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes, transmission and who is at risk", html: `
<p>Malaria is caused by <i>Plasmodium</i> parasites transmitted by female <i>Anopheles</i> mosquitoes. Only P. vivax and P. falciparum (and mixed infections) occur in Bhutan. Almost all severe disease and deaths are from P. falciparum. Rarely, malaria is transmitted by blood transfusion, needles or congenitally.${r(1)}</p>
${tbl(["Group", "Why at risk"], [
["Residents of southern districts (Sarpang, Samtse, Chukha, Dagana, Samdrup Jongkhar, Pemagatshel, Zhemgang)", "Receptive areas below 1,700 m; April–September peaks"],
["Travellers and workers from India (Assam, West Bengal) and beyond", "45% of recent cases imported"],
["Security forces, construction and hydropower workers, migrant labourers", "Night exposure, border areas"],
["Pregnant women", "Severe malaria, anaemia, low birth weight, miscarriage"],
["People with HIV, splenectomy", "Severe disease, recrudescence"],
["Non-immune people (all Bhutanese now)", "Little acquired immunity, so falciparum can turn severe quickly"]])}
` },

{ id: "patho", title: "Life cycle and pathophysiology", html: `
${F.chart("Plasmodium life cycle in humans", [
F.s("Mosquito bite → sporozoites → liver (7–30 days)"), F.a,
F.b([["P. vivax", F.s("Some stay dormant as hypnozoites → relapses weeks to years later")], ["P. falciparum", F.s("No hypnozoites")]]), F.a,
F.s("Merozoites invade red cells → 48-hour cycles → fever, haemolysis"), F.a,
F.s("Gametocytes → taken up by mosquitoes → transmission")])}
<p><b>Falciparum</b> infects red cells of all ages, and infected cells stick to small-vessel walls (sequestration) in the brain, kidneys, lungs and placenta. This causes coma, acidosis, kidney injury and respiratory distress. Parasite counts in a blood film underestimate the total load. <b>Vivax</b> infects young red cells, rarely causes high counts, but can cause severe anaemia, splenic rupture and lung injury. Primaquine is the only widely available drug that kills hypnozoites (radical cure) and mature falciparum gametocytes (blocking transmission).${r(1, 2)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan 2024", "WHO", "India (NCVBDC)", "This guide and why"], [
["Pv radical cure", "Primaquine 0.5 mg/kg × 7 days", "0.25–0.5 mg/kg × 7 or 14 days by G6PD status", "0.25 mg/kg × 14 days", "Bhutan " + LB.loc()],
["Pf transmission-blocking primaquine", "Single 0.5 mg/kg on day 0", "Single low dose 0.25 mg/kg; no G6PD test needed", "0.75 mg/kg single dose (older policy)", "Bhutan dose stated; WHO dose shown for comparison"],
["Pf first line", "Artemether–lumefantrine", "Any ACT", "ACT-SP; AL in north-eastern states", "AL"],
["First trimester", "3-day ACT (AL)", "AL in first trimester (since 2022)", "Quinine (2013 national drug policy)", "Bhutan/WHO"],
["G6PD-deficient Pv", "Primaquine 0.75 mg/kg weekly × 8 weeks", "Same", "Same", "Same"],
["Admission", "All confirmed cases for 3 days", "Outpatient for uncomplicated malaria", "Outpatient", "Bhutan (elimination phase: DOT and follow-up)"],
["Second line", "DHA–piperaquine", "Another ACT", "AL", "Bhutan"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Notes"], [
["Fever, chills, rigors, sweating", "Classic tertian pattern is often absent early, especially in falciparum"],
["Headache, myalgia, nausea, vomiting, diarrhoea", "Easily mistaken for flu, dengue, typhoid or gastroenteritis"],
["Pallor, jaundice, splenomegaly", "Anaemia; tender spleen in vivax"],
["Thrombocytopenia", "Common in both species; does not alone mean severe"],
["Travel history", "Always ask: southern districts, India (Assam, West Bengal), other endemic countries in the past year"]])}
${box("red", "Severe malaria — any one, with a positive test (WHO; Bhutan 2024)", `<ul><li>Impaired consciousness (GCS under 11), prostration, or more than 2 convulsions in 24 hours</li><li>Acidosis (bicarbonate under 15, lactate 5 or more), respiratory distress, pulmonary oedema (SpO₂ under 92%)</li><li>Hypoglycaemia (under 40 mg/dL)</li><li>Severe anaemia (Hb under 7 g/dL)</li><li>Acute kidney injury (creatinine over 3 mg/dL), dark ("coffee-coloured") urine</li><li>Jaundice (bilirubin over 3 mg/dL with parasitaemia over 100,000/µL)</li><li>Significant bleeding, shock (SBP under 80 with poor perfusion)</li><li>Hyperparasitaemia over 10%</li></ul>`)}
<h3>The typical patient</h3>
<p>A 28-year-old construction worker in Gelephu, back 10 days from a site in Assam, has had fever with chills for 3 days, headache and vomiting. He is alert, temperature 39.2 °C, BP 118/76, no jaundice. Weight 60 kg. The RDT is positive for P. falciparum, and the thick film shows 0.8% parasitaemia with ring forms only. Hb 12.4 g/dL, platelets 88,000, creatinine and glucose normal. <b>This is uncomplicated imported falciparum malaria.</b> He is admitted for 3 days. Artemether–lumefantrine 4 tablets is given at 0, 8, 24, 36, 48 and 60 hours with milk, each dose observed, plus a single primaquine 30 mg (0.5 mg/kg) on day 0. Smears are repeated on days 1, 2 and 28. VDCP is notified for case investigation and screening of his co-workers.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Test"], [
["Dengue", "Retro-orbital pain, rash, rising haematocrit, leukopenia; same season", "NS1/IgM; malaria test as well"],
["Scrub typhus", "Eschar, nodes, hills, farming", "IgM ELISA; doxycycline"],
["Enteric fever", "Step-ladder fever, relative bradycardia", "Blood culture"],
["Leptospirosis", "Myalgia, conjunctival suffusion, jaundice + AKI", "Serology"],
["Sepsis, pneumonia, UTI", "Focus", "Cultures"],
["Meningitis or encephalitis", "Neck stiffness, CSF changes (in cerebral malaria CSF is normal)", "LP after stabilising"],
["Viral hepatitis", "Jaundice without fever spikes", "LFT, serology"],
["Co-infection", "A positive malaria test does not exclude another cause (e.g. bacteraemia)", "Blood culture in severe illness"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Thick and thin blood film", "Diagnosis, species, density; follow-up", "Results within 1 hour; repeat if negative and still febrile", "Essential"],
["RDT (HRP2 for Pf, pLDH for Pv)", "Rapid diagnosis where no microscopy, emergencies, active case detection", "Can stay positive weeks after cure; false negatives at under 200 parasites/µL or HRP2 deletion", "Essential"],
["Dried blood spot / PCR", "All positives sent to RCDC (NMRL) within a week", "Confirms species and resistance markers", "Programme"],
["G6PD test", "Before 7-day primaquine", "Rapid test at referral hospitals and endemic areas", "Essential for Pv"],
["CBC, glucose, creatinine, bilirubin, electrolytes", "Severity", "Glucose 4-hourly in severe malaria", "Essential"],
["Pregnancy test", "Women of reproductive age", "Changes treatment", "Essential"],
["Blood culture, lactate, blood gas", "Severe malaria", "Co-existing bacteraemia", "Severe"],
["Urine (haemoglobinuria)", "Haemolysis", "Blackwater fever, primaquine haemolysis", "As needed"]])}
` },

{ id: "staging", title: "Treatment by weight", html: `
<p>Enter weight, species, severity, pregnancy and G6PD status for the Bhutan 2024 regimens.${r(1)}</p>
<div class="calc" data-calc="malariadose"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. P. vivax (Protocol A)</h3>
${tbl(["Day", "Chloroquine (150 mg base tablets), adult over 15 years", "Primaquine (7.5 mg tablets), adult"], [
["Day 0", "4 tablets (600 mg base)", "4 tablets (30 mg)"],
["Day 1", "4 tablets", "4 tablets"],
["Day 2", "2 tablets (300 mg)", "4 tablets"],
["Days 3–6", "—", "4 tablets daily (to complete 7 days)"]])}
<p>Primaquine dose is 0.5 mg/kg/day (adult maximum about 30 mg) with food. Test G6PD first where possible. <b>G6PD deficient:</b> primaquine 0.75 mg/kg once weekly for 8 weeks. <b>No test available:</b> decide on individual risk and benefit, with close supervision and counselling to stop for dark urine, pallor, breathlessness or jaundice. For chloroquine-resistant vivax, or if chloroquine is unavailable, use ACT.${r(1)}</p>
<h3>B. Uncomplicated P. falciparum (Protocol B)</h3>
${tbl(["Weight", "Artemether–lumefantrine 20/120 mg per dose (at 0, 8, 24, 36, 48, 60 h)", "Primaquine"], [
["Under 15 kg", "1 tablet", "Single 0.5 mg/kg on day 0 (not under 6 months)"],
["15–24 kg", "2 tablets", "Single 0.5 mg/kg"],
["25–34 kg", "3 tablets", "Single 0.5 mg/kg"],
["35 kg or more", "4 tablets", "Single 0.5 mg/kg"]])}
<p>Give with fatty food or milk (lumefantrine absorption). G6PD testing is not required for the single dose. Travellers from Cambodia, Laos, Myanmar, Thailand or Vietnam who fail to respond: consider a longer ACT course (5–7 days) or artesunate–pyronaridine (artemisinin resistance).${r(1)}</p>
<h3>C. Mixed infection (Protocol C)</h3>
<p>Artemether–lumefantrine by weight for 3 days <b>plus</b> primaquine 0.5 mg/kg daily for 7 days.</p>
<h3>D. Second line</h3>
<p>For recrudescence within 28 days or intolerance: dihydroartemisinin–piperaquine once daily for 3 days (DHA 4 mg/kg, PPQ 18 mg/kg; 40/320 mg tablets: 36–59 kg 3 tablets, 60–79 kg 4, 80 kg or more 5), held at national and regional referral hospitals.</p>
<h3>E. Severe malaria (Protocol E)</h3>
<ol><li>ABC; recovery position if unconscious; glucose; IV access; catheter if unconscious or oliguric; weigh.</li>
<li>${dr("artesunate")} 2.4 mg/kg IV or IM at 0, 12 and 24 hours, then every 24 hours. Reconstitute the powder with 1 mL 5% bicarbonate, then dilute: 5 mL (saline or D5) for IV slow bolus at 3–4 mL/min, or 2 mL for IM. Prepare fresh each time. Continue parenteral treatment for at least 24 hours, then give a full 3-day AL course.</li>
<li>If artesunate is unavailable: artemether 3.2 mg/kg IM, then 1.6 mg/kg daily; or ${dr("quinine")} dihydrochloride 20 mg/kg over 4 h in 5% dextrose, then 10 mg/kg 8-hourly (rate under 5 mg/kg/h; no loading dose if quinine was given in the previous 12 h; halve maintenance after 48 h in renal failure; patient lying down — fatal postural hypotension). Artesunate lowers mortality by about a third compared with quinine (SEAQUAMAT).${r(3)}</li>
<li><b>Pre-referral at PHC:</b> one dose of IM artesunate (or IM artemether/quinine) and urgent referral.</li></ol>
${tbl(["Complication (Bhutan 2024)", "Management"], [
["Coma (cerebral malaria)", "Airway, lateral position; exclude hypoglycaemia and meningitis; intubate if needed; no steroids, mannitol or heparin"],
["Convulsions", "IV or rectal diazepam, lorazepam or midazolam; check glucose"],
["Hypoglycaemia (under 40 mg/dL adults)", "Dextrose, then glucose-containing infusion; recheck 4-hourly (quinine and pregnancy increase the risk)"],
["Severe anaemia (Hb under 7)", "Transfuse screened blood"],
["Pulmonary oedema", "Sit up, oxygen, diuretic, stop IV fluids, ventilate with PEEP/CPAP"],
["Acute kidney injury", "Exclude pre-renal cause; fluid balance; dialysis"],
["Bleeding, DIC", "Fresh blood products, vitamin K"],
["Shock, acidosis", "Suspect bacteraemia: blood culture and broad-spectrum antibiotics; correct hypovolaemia and hypoglycaemia"]])}
<p>Avoid fluid overload: give fluids cautiously and reassess often (pulmonary oedema develops easily). Monitor vital signs 2–4-hourly.${r(1, 2)}</p>
<h3>F. Programme actions (elimination phase)</h3>
<ul><li>Admit all confirmed cases for the first 3 days; DOT for every dose, including primaquine at home after discharge (VHW, family, school or office DOT provider).</li>
<li>Follow-up smears: Pf day 0, 1, 2 and 28; Pv day 0, 1, 2, 7, 28, 3 months and up to 1 year.</li>
<li>Notify VDCP immediately; dried blood spot to RCDC; case and focus investigation; malaria deaths investigated by a team.</li></ul>
<h3>G. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Test every fever from an endemic area (RDT/microscopy); start oral treatment for uncomplicated malaria; pre-referral IM artesunate for severe; refer"],
["District hospital", "Admission for 3 days, DOT, microscopy follow-up, severe malaria care with artesunate"],
["Referral hospital (CRRH Gelephu, JDWNRH, ERRH)", "ICU, dialysis, DHA–PPQ second line, G6PD testing, NMRL confirmation"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Key cautions"], [
[dr("chloroquine"), "600 mg base day 0 and 1, 300 mg day 2", "Pruritus (common in Africans and South Asians), nausea; safe in pregnancy"],
[dr("primaquine"), "0.5 mg/kg daily × 7 days (Pv); single 0.5 mg/kg (Pf, Bhutan)", "Haemolysis in G6PD deficiency; contraindicated in pregnancy, breastfeeding infants under 6 months, infants under 6 months"],
[dr("artemether_lumefantrine"), "4 tablets × 6 doses over 3 days (35 kg or more)", "Take with fat; QT caution"],
[dr("artesunate"), "2.4 mg/kg IV/IM at 0, 12, 24 h, then daily", "Delayed haemolysis 1–3 weeks later: check Hb"],
[dr("quinine"), "20 mg/kg loading over 4 h, then 10 mg/kg 8-hourly", "Hypoglycaemia, cinchonism, hypotension, arrhythmia"],
["DHA–piperaquine", "Once daily × 3 days by weight", "QT prolongation"]])}
` },

{ id: "populations", title: "Pregnancy and special groups", html: `
<ul><li><b>Pregnancy (Protocol D):</b> P. vivax — chloroquine 4, 4 and 2 tablets, then chloroquine 2 tablets weekly until the baby is 6 months old; <b>no primaquine</b> during pregnancy or while breastfeeding an infant under 6 months; radical cure afterwards. P. falciparum — artemether–lumefantrine 4 tablets × 6 doses <b>in all trimesters</b> (since 2024, first trimester included). Severe malaria — IV artesunate in any trimester.</li>
<li><b>HIV and TB:</b> higher risk of severe malaria and recrudescence; avoid artesunate–SP with co-trimoxazole, efavirenz or zidovudine, and artesunate–amodiaquine with efavirenz or zidovudine.</li>
<li><b>Older adults:</b> higher mortality from falciparum; low threshold for admission and HDU care.</li>
<li><b>Travellers:</b> chemoprophylaxis is not recommended within Bhutan; bed nets and repellents. International travellers follow destination-specific advice.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Dark urine on primaquine", "Stop primaquine; Hb, creatinine; transfuse if Hb under 7 (or under 9 with ongoing haemolysis)", "G6PD-related haemolysis (self-limiting once stopped)"],
["Vomits a dose within 1 hour", "Repeat the dose", "—"],
["Fever returns within 28 days with Pf parasites", "Recrudescence: DHA–piperaquine; report", "Treatment failure"],
["Pv returns after weeks to months", "Relapse: retreat; check primaquine adherence and G6PD", "Hypnozoites"],
["Negative RDT but strong suspicion", "Thick film; repeat in 12–24 h", "Low parasitaemia, HRP2 deletion"],
["Fall in Hb 1–3 weeks after artesunate", "Check Hb on day 7, 14, 28", "Post-artesunate delayed haemolysis"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Treated uncomplicated malaria resolves within days. Untreated severe falciparum malaria is almost always fatal, and with treatment mortality is still 10–20%. Delay is the main avoidable cause of death. Vivax can relapse and cause chronic anaemia, and rarely splenic rupture or acute lung injury. Complications include cerebral malaria, severe anaemia, ARDS, AKI, hypoglycaemia, acidosis, DIC, haemoglobinuria (blackwater fever) and post-artesunate haemolysis.${r(1, 2)}</p>
` },

{ id: "followup", title: "Follow-up and prevention", html: `
<ul><li>Follow-up visits and smears as above; DOT completion form signed and sent to VDCP.</li>
<li>Prevention: long-lasting insecticidal nets, indoor residual spraying in foci, repellents, covering up at dusk, screening of migrant workers, reactive case detection around each case.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Take every dose, even when you feel better — the last doses kill the parasites hiding in the liver."</li><li>Primaquine: stop and come back at once if your urine turns dark, you look pale or yellow, or you become breathless.</li><li>Sleep under a mosquito net; come for the follow-up blood tests.</li></ul>`)}
${box("red", "Come back the same day if", `<ul><li>Drowsiness, confusion, fits</li><li>Unable to drink or keep tablets down</li><li>Yellow eyes, dark urine, bleeding, breathlessness</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "P. falciparum ring forms", src: "images/pf-rings.jpg", mod: "Thin blood film (Giemsa)", ctx: "Fever after travel", loc: "Red cells", find: "Small delicate rings, some cells with more than one; normal-sized red cells", signs: "P. falciparum", interp: "Count parasitaemia; over 10% is severe malaria", by: "Lukas.S / Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Plasmodium_falciparum_02.jpg", lic: "Public domain" })}
${fig({ title: "P. falciparum gametocyte", src: "images/pf-gametocyte.jpg", mod: "Thin blood film (Giemsa)", ctx: "Falciparum malaria", loc: "Red cell", find: "Banana- or crescent-shaped gametocyte", signs: "Transmissible stage", interp: "Why single-dose primaquine is given in falciparum: it kills gametocytes and blocks transmission", by: "Jenkayaks", page: "https://commons.wikimedia.org/wiki/File:P._falciparum_thin_smear_gametocyte.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "P. vivax trophozoites", src: "images/pv-troph.jpg", mod: "Thin blood film (Giemsa)", ctx: "Fever in southern Bhutan", loc: "Red cells", find: "Enlarged red cells with amoeboid trophozoites and Schüffner's dots", signs: "P. vivax", interp: "Needs radical cure with primaquine", by: "CDC PHIL", page: "https://commons.wikimedia.org/wiki/File:Immature_and_mature_trophozoites_of_the_Plasmodium_vivax_parasite_PHIL_2720_lores.jpg", lic: "Public domain" })}
${fig({ title: "Anopheles mosquito feeding", src: "images/anopheles-feeding.jpg", mod: "Photograph", ctx: "Vector", loc: "Skin", find: "Female Anopheles with abdomen tilted up while feeding", signs: "Malaria vector", interp: "Bites at dusk and night: bed nets and repellents prevent infection", by: "CDC / James Gathany", page: "https://commons.wikimedia.org/wiki/File:Anopheles_albimanus_mosquito.jpg", lic: "Public domain" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Fever in a resident of, or traveller from, a malaria area (Bhutan Annexure 1)", [
F.s("Microscopy or RDT within 1 hour"), F.a,
F.d("Danger signs?"), F.a,
F.b([["Yes", F.e("Severe: artesunate; PHC one dose and refer")], ["No", F.d("Result")]]), F.a,
F.b([["Pv", F.ok("CQ 3 days + PQ 7 days (G6PD)")], ["Pf or mixed", F.ok("AL 3 days + PQ (single or 7 days)")]]), F.a,
F.s("Admit 3 days; DOT; smears Pf D1, 2, 28; Pv D1, 2, 7, 28, 3 months, 1 year"), F.a,
F.d("Worse or parasites return?"), F.a,
F.b([["Yes", F.e("Microscopy; second line DHA–PPQ; refer")], ["No", F.ok("Cure; notify VDCP")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>Ask every febrile patient: "Where have you been in the last month?"</li>
<li>A falling platelet count with fever in Gelephu could be dengue, malaria or both — test for both.</li>
<li>Falciparum can turn severe within hours in non-immune Bhutanese: admit and observe.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating without a test", "Missed alternative diagnosis; elimination data lost", "Confirm first"],
["Forgetting primaquine in vivax", "Relapse and onward transmission", "7-day PQ with DOT"],
["Primaquine in pregnancy or G6PD deficiency", "Haemolysis", "Check pregnancy and G6PD"],
["Oral treatment in severe malaria", "Death", "Parenteral artesunate"],
["IV quinine bolus or walking patient", "Fatal hypotension", "Infusion, bed rest"],
["Not notifying", "Missed focus, reintroduction", "Same-day notification"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Which malaria species occur in Bhutan, and below what altitude does transmission occur?", "P. vivax and P. falciparum (and mixed infections); transmission only below 1,700 m.")}
${qa("Intern/MO", "Give the Bhutan 2024 radical cure for P. vivax in a 60 kg G6PD-normal adult.", "Chloroquine 4, 4 and 2 tablets (150 mg base) on days 0–2, plus primaquine 30 mg (4 × 7.5 mg) daily for 7 days, under DOT.")}
${qa("Intern/MO", "What is the artesunate dose for a 70 kg adult with severe malaria?", "2.4 mg/kg = 168 mg IV/IM at 0, 12 and 24 h, then daily until oral treatment is possible (at least 24 h), then full AL.")}
${qa("Specialist", "How is P. vivax treated in a pregnant woman?", "Chloroquine treatment course, then chloroquine 2 tablets weekly until the baby is 6 months old; primaquine only after that.")}
${qa("Specialist", "What did SEAQUAMAT show?", "In Asian adults and children with severe falciparum malaria, artesunate reduced mortality by about 35% compared with quinine.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Vector-borne Disease Control Programme, Ministry of Health, Bhutan. National Guideline for Diagnosis and Treatment of Malaria in Bhutan, 6th edition. Gelephu: VDCP, 2024.</li>
<li id="ref-2">World Health Organization. WHO guidelines for malaria. Geneva: WHO (living guideline, 2023 and later updates). <a href="https://www.who.int/publications/i/item/guidelines-for-malaria" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Dondorp A, Nosten F, Stepniewska K, Day N, White N; SEAQUAMAT group. Artesunate versus quinine for treatment of severe falciparum malaria: a randomised trial. <i>Lancet</i> 2005;366:717–725. <a href="https://doi.org/10.1016/S0140-6736(05)67176-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(05)67176-0</a></li>
<li id="ref-4">World Health Organization. Severe malaria. <i>Trop Med Int Health</i> 2014;19 Suppl 1:7–131.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan guideline", "<span class='pass'>Read in full</span>", "6th edition 2024 with annexures"],
["Calculator", "<span class='pass'>Updated</span>", "Was 14-day PQ 0.25 mg/kg; now Bhutan 2024 7-day 0.5 mg/kg, mixed infection added"],
["Conflict flagged", "<span class='flag'>Noted</span>", "Bhutan Pf single-dose PQ 0.5 mg/kg vs WHO 0.25 mg/kg"],
["Images", "<span class='pass'>Done</span>", "4 licensed images"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}
` }
]
});
