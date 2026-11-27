/* Approach to fever — all ages. Batch E-9b (owner request, 27 Nov 2026).
   Sources read: Bhutan hospital-based IMNCI 2024 (§11 children presenting with fever: four categories, differential tables, fever > 7 days; triage
   'Temperature: fever' — paracetamol 15 mg/kg 6-hourly for ≥ 38.5 °C with distress); NICE NG143 Fever in under 5s (2019/2021 — thermometers,
   traffic light table 2, APLS tachycardia, Kawasaki, management by non-paediatric and paediatric practitioners, under-3-month work-up, antipyretics);
   Merck Manual Professional 'Fever' (Bush, Jul 2024, updated Nov 2026: definitions, red flags, acute vs chronic causes, treatment, older adults)
   and 'Fever of unknown origin' (4 categories, causes); NICE CG151 neutropenic sepsis (immediate empirical piperacillin-tazobactam); NICE NG240
   meningitis/meningococcal (2024: red flags, pre-hospital ceftriaxone/benzylpenicillin). Not read: NICE NG51 sepsis tables, WHO pocket book —
   marked. Disease details live on linked pages (afi-adult, febinfant-child, sepsis pages, malaria, dengue, scrub, enteric, kawasaki). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "fever-approach",
title: "Approach to fever — all ages",
subtitle: "Look for danger first (airway, breathing, circulation, consciousness, sepsis, a non-blanching rash), then sort the fever: with a focus, without a focus, with a rash, or lasting more than 7 days — and think of what is common in Bhutan",
age: "All ages", specs: ["emerg", "medicine", "paeds", "id", "neo"],
keywords: ["fever", "pyrexia", "approach to fever", "febrile child", "fever without focus", "fever without localising signs", "traffic light", "NICE fever under 5", "fever with rash", "prolonged fever", "fever more than 7 days", "fever of unknown origin", "FUO", "PUO", "pyrexia of unknown origin", "neutropenic fever", "febrile neutropenia", "drug fever", "hyperthermia", "antipyretic", "paracetamol dose fever", "tepid sponging", "returning traveller fever"],
related: ["afi-adult", "leptospirosis", "ebola-vhf", "febinfant-child", "sepsis-adult", "sepsis-child", "neosepsis-child", "rash-approach", "malaria-adult", "malaria-child", "dengue-adult", "dengue-child", "scrub-adult", "scrub-child", "enteric-adult", "enteric-child", "meningitis-adult", "meningitis-child", "uti-child", "pneumonia-child", "kawasaki-child", "febsz-child", "tb-adult", "brucellosis"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Fever is a symptom, not a diagnosis. Most fevers are short viral illnesses, but the job is to find the few that kill quickly — sepsis, meningitis and meningococcal disease, severe malaria, dengue shock, scrub typhus — and the treatable causes of fever that lasts ${r(1)} ${r(3)}. The height of the temperature does not tell you how ill the patient is ${r(2)} ${r(3)}.</p>
<div class="glance">
<div><h4>1. Danger first</h4><p>Airway, breathing, circulation, consciousness; "could this be sepsis?"; non-blanching rash; neck stiffness; shock ${r(2)} ${r(5)}.</p></div>
<div><h4>2. Age and host</h4><p>Under 3 months with ≥ 38 °C is high risk ${r(2)}; cancer chemotherapy (neutropenia), HIV, steroids, pregnancy, older age change the plan ${r(3)} ${r(4)}.</p></div>
<div><h4>3. Sort the fever</h4><p>Without localising signs · with localising signs · with a rash · more than 7 days (IMNCI's four groups) ${r(1)}.</p></div>
<div><h4>4. Bhutan list</h4><p>Malaria (risk districts), dengue, scrub typhus, enteric fever, UTI, pneumonia, meningitis, TB; leptospirosis and brucellosis with animal or water exposure ${r(1)} ${LB.loc()}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>IMNCI groups children's fever into four categories and lists malaria (only with exposure in a transmission area), septicaemia, typhoid and UTI as the causes of fever without localising signs; fever with rash is <b>notifiable</b> ${r(1)}. Ask about travel to the southern malaria districts in the last 30 days and test (RDT or smear) ${r(1)} ${LB.loc()}. For adults, the undifferentiated acute febrile illness page covers scrub typhus, dengue, leptospirosis and when to start doxycycline — ${P("afi-adult", "Acute fever without a focus")}.</p>`)}
` },
{ id: "overview", title: "Definitions", html: `${tbl(["Term", "Meaning"], [
["Fever (adults, oral)", "≥ 37.2 °C in the early morning or ≥ 37.8 °C later in the day, or above the person's known normal; rectal and tympanic read about 0.6 °C higher, skin about 0.6 °C lower " + r(3)],
["Fever (IMNCI)", "By history, feels hot, or temperature 37.5 °C or above " + r(1) + "; 'high fever' ≥ 38.5 °C " + r(1)],
["Measuring in under 5s", "Under 4 weeks: electronic thermometer in the axilla; 4 weeks to 5 years: electronic or chemical dot axillary, or infrared tympanic; not oral or rectal routinely; forehead strips unreliable; a parent's report of fever counts " + r(2)],
["Hyperthermia", "Raised temperature without a reset hypothalamic set point (heat stroke, drugs) — antipyretics do not work; > 41 °C is damaging " + r(3)],
["Acute fever (adult)", "≤ 4 days — almost always infection " + r(3)],
["Fever of unknown origin (classic)", "≥ 38.3 °C for more than 3 weeks with no cause after 3 days in hospital or ≥ 3 outpatient visits; also healthcare-associated, immunodeficiency-related and travel-associated types " + r(6)],
["Neutropenic sepsis", "Fever or sepsis signs during anticancer treatment with significant neutropenia — an emergency " + r(4)]
])}` },
{ id: "patho", title: "Why fever happens", html: `
${F.chart("Mechanism", [F.s("Microbes or toxins (exogenous pyrogens)"), F.a, F.s("Cytokines: IL-1, TNF-α, IL-6"), F.a, F.s("Prostaglandin E2 resets the hypothalamic set point"), F.a, F.s("Vasoconstriction, shivering → temperature rises to the new set point"), F.a, F.d("Antipyretic lowers the set point → sweating")])}
<p>Moderate fever (38–40 °C) is well tolerated and helps host defence; it raises metabolic rate by about 10–12% per °C, which matters in heart or lung failure and dementia ${r(3)}. Very young, very old and alcohol-dependent people may not mount a fever ${r(3)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan IMNCI 2024", "NICE NG143", "This guide"], [
["Tepid sponging", "Sponging with room-temperature or lukewarm water for high fever (lowers temperature only while sponging)", "Not recommended", "Do not rely on it; treat distress with paracetamol " + r(1) + r(2) + " " + LB.int()],
["When to give paracetamol", "≥ 38.5 °C and uncomfortable or distressed; 15 mg/kg 6-hourly (aged 2 months or more)", "If distressed — not just to lower the number; antipyretics do not prevent febrile seizures", "Treat the child, not the thermometer " + r(1) + r(2)],
["Fever threshold", "37.5 °C or above", "Risk by age: under 3 months ≥ 38 °C red; 3–6 months ≥ 39 °C amber", "Use both " + r(1) + r(2)],
["Antibiotics for fever without a source", "Treat identified bacterial causes; malaria per protocol", "Do not give oral antibiotics for fever without apparent source", "No 'just in case' antibiotics; investigate " + r(1) + r(2)]
])}` },
{ id: "presentation", title: "History and examination", html: `
${tbl(["Ask / look for", "Why"], [
["Duration, pattern, rigors", "Duration ≥ 5 days in a child — think Kawasaki; patterns rarely help except tertian/quartan malaria and relapsing fevers " + r(2) + r(3)],
["Travel (30 days), malaria district, mosquitoes", "Malaria, dengue " + r(1) + r(3)],
["Fields, forest, mites; eschar in groin, axilla, waist", "Scrub typhus " + r(1)],
["Animals, raw milk, flood water", "Brucellosis, leptospirosis " + r(3) + " " + LB.loc()],
["Contacts with TB, cough > 2 weeks, weight loss, night sweats", "TB " + r(1)],
["Medicines (new in the last weeks), injections, transfusion", "Drug fever, hypersensitivity, transfusion reaction " + r(3)],
["Cancer treatment, HIV, steroids, transplant, splenectomy", "Neutropenic or opportunistic infection " + r(3) + r(4)],
["Hospital stay, lines, catheters, surgery", "Line infection, UTI, pneumonia, C. difficile, DVT " + r(3)],
["Vaccination status", "Measles, diphtheria, pertussis " + r(1)],
["Full examination: skin (rash, petechiae, eschar), throat, ears, chest, abdomen (spleen, liver), joints, nodes, heart murmur, neck stiffness, fontanelle, urine", "Find the focus " + r(1) + r(2)]
])}
<h3>Red flags (any age)</h3>
<p>Altered mental state, headache with neck stiffness, petechial or purpuric rash, low blood pressure, breathlessness, marked tachycardia or tachypnoea, temperature above 40 °C or below 35 °C, recent travel to a malaria area, immunosuppression ${r(3)}. In children under 5, use the traffic light table below ${r(2)}.</p>` },
{ id: "ddx", title: "Sorting the causes", html: `
<h3>Fever without localising signs</h3>
${tbl(["Cause", "In favour"], [
["Malaria (with exposure)", "Sudden fever, rigors, sweating; alternate-day paroxysms; anaemia, big spleen; positive RDT/smear " + r(1) + " → " + P("malaria-child", "malaria (child)") + ", " + P("malaria-adult", "adult")],
["Septicaemia", "Seriously ill without a cause; purpura; shock (or hypothermia in severe malnutrition) " + r(1) + " → " + P("sepsis-child", "sepsis (child)") + ", " + P("sepsis-adult", "adult")],
["Typhoid", "Seriously ill, abdominal pain or tenderness, vomiting, jaundice, mild hepatosplenomegaly " + r(1) + " → " + P("enteric-child", "enteric fever")],
["Urinary tract infection", "Loin or suprapubic tenderness, dysuria, frequency, new wetting; pus cells or bacteria in urine " + r(1) + " → " + P("uti-child", "UTI (child)")],
["Dengue, scrub typhus, leptospirosis (adults: undifferentiated febrile illness)", P("afi-adult", "Acute fever without a focus") + ", " + P("leptospirosis", "leptospirosis") + " " + r(3)]
])}
<h3>Fever with localising signs</h3>
${tbl(["Cause", "In favour"], [
["Meningitis / encephalitis", "Headache, vomiting, convulsions, reduced consciousness, stiff neck, bulging fontanelle, petechial rash, focal signs " + r(1) + " → " + P("meningitis-child", "meningitis")],
["Pneumonia", "Cough with fast breathing, chest indrawing, crackles, grunting, SpO₂ ≤ 95% " + r(1) + r(2) + " → " + P("pneumonia-child", "pneumonia")],
["Otitis media, mastoiditis", "Red bulging drum, discharge; tender swelling behind the ear " + r(1)],
["Septic arthritis, osteomyelitis", "Not using a limb, refusing to bear weight, hot swollen joint " + r(1) + r(2) + " → " + P("bonejoint-child", "bone and joint infection")],
["Skin and soft tissue infection", "Cellulitis, boils, pyomyositis " + r(1)],
["Throat, retropharyngeal abscess, sinusitis", "Sore throat, drooling, facial tenderness " + r(1)],
["Hepatitis", "Anorexia, jaundice, dark urine " + r(1)]
])}
<h3>Fever with rash</h3>
<p>Measles, rubella, other viruses, meningococcal disease (petechial/purpuric), dengue (petechiae, bleeding), rickettsial fever (rash on trunk, eschar) ${r(1)} — see ${P("rash-approach", "Approach to rash")}.</p>
<h3>Fever for more than 7 days</h3>
${tbl(["Cause", "In favour"], [
["Deep abscess (liver, subphrenic, psoas, lung, renal)", "Tender mass, local pain " + r(1)],
["Tuberculosis", "Weight loss, night sweats, cough, nodes, contact, chest X-ray " + r(1)],
["Infective endocarditis", "Murmur, splenomegaly, anaemia, petechiae, splinter haemorrhages, haematuria, clubbing " + r(1)],
["Rheumatic fever", "Changing murmur, arthritis, carditis, chorea, recent sore throat " + r(1) + " → " + P("rhd-child", "rheumatic fever")],
["Connective tissue disease", "Joints, rash, serositis, haematuria " + r(1)],
["Malignancy (leukaemia, lymphoma)", "Weight loss, anaemia, bleeding, nodes, organomegaly, mass " + r(1)],
["Kala-azar", "Endemic area, big spleen, anaemia, weight loss " + r(1) + " → " + P("kala-azar", "kala-azar")],
["Adults (FUO)", "Infection 25–50%, rheumatic 10–20%, neoplasm 2–25%, miscellaneous (drugs, DVT/PE, thyroiditis, IBD, factitious) 15–25%; no cause in about 10% " + r(6)],
["Kawasaki disease (child, ≥ 5 days)", "Red eyes without pus, red cracked lips/strawberry tongue, swollen red hands and feet, rash, neck node " + r(2) + " → " + P("kawasaki-child", "Kawasaki")]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Situation", "Tests"], [
["Child, green (low risk) — no source", "Urine for UTI; look for pneumonia; no routine blood tests or chest X-ray " + r(2)],
["Child, amber — no source", "Urine; FBC, CRP, blood culture; consider LP under 1 year; chest X-ray if > 39 °C and WBC > 20 " + r(2)],
["Child, red — no source", "FBC, blood culture, CRP, urine; consider LP, chest X-ray, electrolytes and blood gas " + r(2)],
["Infant under 3 months", "FBC, blood culture, CRP, urine, chest X-ray if respiratory signs, stool culture if diarrhoea; LP if under 1 month, or 1–3 months and unwell or WBC < 5 or > 15 × 10⁹/L " + r(2) + " — see " + P("febinfant-child", "the febrile young infant")],
["Exposure to malaria area", "Malaria RDT or smear " + r(1)],
["Adult with undifferentiated fever", "Per likely cause: CBC, platelets, dengue NS1/IgM, scrub IgM, malaria RDT, blood culture, urine, LFT — " + P("afi-adult", "acute fever page") + " " + r(3)],
["Suspected neutropenic sepsis", "FBC, kidney and liver tests, CRP, lactate, blood culture (plus line culture); urine in under 5s; chest X-ray only if indicated " + r(4)],
["Fever > 7 days / FUO", "Repeat cultures, chest X-ray, ultrasound abdomen, echo if murmur, TB tests, HIV, ESR/CRP, film, autoimmune tests as clues suggest " + r(1) + r(6)]
])}` },
{ id: "staging", title: "Traffic light (under 5s)", html: `
<p>NICE traffic light system: any red feature = high risk; any amber and no red = intermediate risk; only green = low risk ${r(2)}.</p>
<div class="calc" data-calc="fevertraffic"></div>` },
{ id: "manage", title: "Management", html: `
<h3>1. Emergencies (all ages)</h3>
<ul>
<li>Shock: IV 0.9% sodium chloride bolus 10 mL/kg in children, reassess, repeat as needed ${r(2)}; adults — ${P("sepsis-adult", "sepsis page")}.</li>
<li>Immediate parenteral antibiotics if shocked, unrousable or signs of meningococcal disease: third-generation cephalosporin (cefotaxime or ceftriaxone); add ampicillin/amoxicillin under 3 months (Listeria) ${r(2)}.</li>
<li>Strongly suspected meningococcal disease outside hospital: IV/IM ceftriaxone or benzylpenicillin as soon as possible unless it delays transfer ${r(5)}.</li>
<li>IV aciclovir if herpes simplex encephalitis is suspected (focal signs, focal seizures, reduced consciousness) ${r(2)}.</li>
<li>Oxygen if shocked or SpO₂ under 92% ${r(2)}.</li>
<li>Neutropenic sepsis: empirical IV piperacillin-tazobactam immediately ${r(4)}.</li>
</ul>
<h3>2. Children under 5 — by risk</h3>
${tbl(["Risk", "Non-paediatric practitioner (BHU, PHC, GP)"], [
["Life-threatening", "Emergency transfer " + r(2)],
["Red", "Urgent referral to a paediatrician " + r(2)],
["Amber, no diagnosis", "Safety net (written warning signs, fixed review time, direct access) or refer " + r(2)],
["Green", "Home care with advice " + r(2)]
])}
<h3>3. Antipyretics</h3>
<ul>
<li>Paracetamol 15 mg/kg/dose 6-hourly for children from 2 months with fever ≥ 38.5 °C who are uncomfortable (IMNCI) ${r(1)}; NICE: paracetamol <b>or</b> ibuprofen only while the child is distressed; do not give both together; alternate only if distress returns before the next dose ${r(2)}.</li>
<li>Antipyretics do not prevent febrile seizures; a fall (or no fall) in temperature does not tell serious from non-serious illness ${r(2)}.</li>
<li>Adults: paracetamol (no more than 4 g a day; watch combination cold remedies); treat fever in heart or lung failure and dementia; aspirin not for children with viral illness (Reye syndrome) ${r(3)}.</li>
<li>≥ 41 °C or hyperthermia: active cooling (tepid water mist, cooling blankets) ${r(3)}.</li>
<li>Light clothing, warm well-ventilated room, extra fluids ${r(1)}; do not under-dress or over-wrap ${r(2)}.</li>
</ul>
<h3>4. Antibiotics</h3>
<p>Do not prescribe oral antibiotics for fever without an apparent source ${r(2)}. Treat the identified cause (pages linked above); in adults with suspected rickettsial infection, doxycycline is the key empirical drug — ${P("afi-adult", "acute fever page")}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("paracetamol", "Paracetamol")} — 15 mg/kg/dose 6-hourly in children (IMNCI); adults max 4 g/day ${r(1)} ${r(3)}.</li>
<li>${D("ibuprofen", "Ibuprofen")} — alternative antipyretic in distressed children (NICE) ${r(2)}.</li>
<li>${D("ceftriaxone", "Ceftriaxone")} / ${D("cefotaxime", "cefotaxime")} — empirical parenteral cover for serious bacterial infection ${r(2)}.</li>
<li>${D("ampicillin", "Ampicillin")} — added under 3 months (Listeria) ${r(2)}.</li>
<li>${D("benzylpenicillin", "Benzylpenicillin")} — pre-hospital alternative for meningococcal disease ${r(5)}.</li>
<li>${D("aciclovir", "Aciclovir")} IV — suspected HSV encephalitis ${r(2)}.</li>
<li>${D("piperacillin-tazobactam", "Piperacillin-tazobactam")} — neutropenic sepsis ${r(4)}.</li>
<li>${D("doxycycline", "Doxycycline")} — suspected scrub typhus / rickettsia ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Newborn and under 3 months", "≥ 38 °C is high risk; full work-up; parenteral cephalosporin + ampicillin " + r(2) + " → " + P("febinfant-child", "febrile young infant") + ", " + P("neosepsis-child", "neonatal sepsis")],
["Severe malnutrition", "May be hypothermic instead of febrile when septic " + r(1) + " → " + P("sam-child", "SAM")],
["Pregnancy", "Malaria, pyelonephritis, chorioamnionitis, listeria — " + P("puerperal-preg", "puerperal sepsis") + " " + LB.exp()],
["Older adults", "Fever may be low or absent; confusion or functional decline may be the only sign " + r(3)],
["Chemotherapy", "Neutropenic sepsis — antibiotics immediately " + r(4)],
["HIV", "Opportunistic infections (TB, atypical mycobacteria, fungi, CMV) " + r(6) + " → " + P("hiv-adult", "HIV")],
["Returned traveller", "Malaria first; dengue, typhoid, rickettsia; outbreak area within 21 days → " + P("ebola-vhf", "Ebola/VHF") + " " + r(3)],
["Learning disability", "Interpret the traffic light table for the individual child " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["6-week-old with 38.2 °C, feeding well", "High risk by age: FBC, culture, CRP, urine; LP if unwell or WBC < 5 or > 15; parenteral antibiotics if unwell " + r(2)],
["2-year-old, 39.5 °C, playful, normal colour, RR 30, HR 130", "Green: urine test, look for pneumonia, home advice; no antibiotics without a source " + r(2)],
["4-year-old with fever for 6 days, red eyes, cracked lips, swollen hands", "Kawasaki — urgent paediatric review " + r(2)],
["Adult on chemotherapy with 38.4 °C", "Neutropenic sepsis until proven otherwise: bloods, cultures, piperacillin-tazobactam within the hour " + r(4) + " " + LB.exp("1-HOUR TARGET NOT IN TEXT READ")],
["Farmer with fever 5 days, eschar in the groin", "Scrub typhus — doxycycline " + r(1) + " → " + P("scrub-adult", "scrub typhus")],
["Fever for 4 weeks, weight loss, no cause after admission", "Classic FUO: TB, abscess, endocarditis, lymphoma, connective tissue disease, drugs " + r(6)]
])}` },
{ id: "complications", title: "Complications of fever itself", html: `<ul>
<li>Febrile seizures (6 months to 5 years) — ${P("febsz-child", "febrile seizures")} ${r(1)}.</li>
<li>Dehydration, poor feeding, irritability ${r(1)}.</li>
<li>Strain on the heart and lungs; delirium in dementia ${r(3)}.</li>
<li>Above 41 °C: organ failure and DIC (usually hyperthermia, drugs, neuroleptic malignant syndrome) ${r(3)}.</li>
</ul>` },
{ id: "followup", title: "Safety-netting and follow-up", html: `<ul>
<li>Give written warning signs and a clear route back; set a review time for amber children ${r(2)}.</li>
<li>IMNCI: follow up in 3 days if fever persists; refer if fever lasts more than 7 days ${r(1)} ${LB.exp("FROM PHC CHART BOOKLET LINES READ")}.</li>
<li>Notify fever with rash ${r(1)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Patient with fever", [F.d("ABC, consciousness, shock, non-blanching rash, sepsis?"), F.a, F.b([["Yes", F.e("Resuscitate; parenteral antibiotics; urgent senior help")], ["No", F.s("Age, host, exposure (malaria area, fields, animals, travel)")]]), F.a, F.d("Which group?"), F.a, F.b([["Focus", F.s("Treat the focus")], ["No focus", F.s("Child: traffic light; adult: AFI work-up")], ["Rash", F.s("Approach to rash")], ["> 7 days", F.s("TB, abscess, endocarditis, malignancy, CTD, kala-azar")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Judging by the temperature", "Height does not predict serious illness (after 6 months)", "Use the traffic light features " + r(2)],
["Reassured because the fever fell with paracetamol", "Response does not separate serious from minor illness", "Reassess the child " + r(2)],
["Antibiotics for fever without a source", "Hides meningitis, breeds resistance", "Investigate and safety-net " + r(2)],
["Forgetting the urine", "UTI is a common hidden cause in under 5s", "Test urine " + r(2)],
["Not checking for rash all over (and conjunctivae)", "Petechiae hard to see on darker skin", "Undress fully " + r(5)],
["No travel history", "Malaria missed", "Ask about the last 30 days " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What are IMNCI's four groups of fever?", "Without localising signs, with localising signs, with rash, and lasting more than 7 days.")}
${qa("Intern/MO", "Which temperature makes a 2-month-old high risk?", "38 °C or higher (under 3 months).")}
${qa("Specialist", "Name three red features in the NICE traffic light.", "Pale/mottled/ashen/blue; no response to social cues; does not stay awake; weak high-pitched cry; grunting; RR > 60; moderate–severe indrawing; reduced skin turgor; non-blanching rash; bulging fontanelle; neck stiffness; status epilepticus; focal signs or seizures; under 3 months ≥ 38 °C.")}
${qa("Specialist", "Define classic FUO.", "≥ 38.3 °C for more than 3 weeks with no cause after 3 days of hospital evaluation or 3 outpatient visits.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (hospital-based), 2024 — §11 Children presenting with fever; triage section.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Fever in under 5s: assessment and initial management (NG143), 2019, updated 2021.</li>
<li id="ref-3">Bush LM, Vazquez-Pertejo MT. Fever. Merck Manual Professional Edition; reviewed Jul 2024.</li>
<li id="ref-4">National Institute for Health and Care Excellence. Neutropenic sepsis: prevention and management in people with cancer (CG151), 2012, updated 2024.</li>
<li id="ref-5">National Institute for Health and Care Excellence. Meningitis (bacterial) and meningococcal disease: recognition, diagnosis and management (NG240), 2024.</li>
<li id="ref-6">Merck Manual Professional Edition. Fever of unknown origin (FUO); accessed Nov 2026.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024 §11", "<span class='pass'>Checked</span>", "Read"],
["NICE NG143, CG151, NG240", "<span class='pass'>Checked</span>", "Read"],
["Merck Fever and FUO", "<span class='pass'>Checked</span>", "Read"],
["NICE NG51 sepsis, WHO pocket book", "<span class='unv'>Not read</span>", "Linked pages cover sepsis"],
["Calculator", "<span class='pass'>Checked</span>", "NICE table 2 items"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
