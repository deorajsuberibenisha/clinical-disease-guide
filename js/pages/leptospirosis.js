/* Leptospirosis — all ages. Batch E-13, 27 Nov 2026.
   Source read directly: Bhutan National Guidelines for the Management of Priority Zoonotic Diseases 2025, chapter 2 Leptospirosis (2.1–2.17:
   epidemiology incl. Bhutan cases 2018–2024 and 2025 risk mapping; risk factors; reservoirs; transmission; incubation; anicteric and icteric
   forms; complications; pulmonary predictors; WHO case definitions; samples; culture, RDT, ELISA, MAT cut-offs, PCR; severity classification;
   treatment tables for mild and severe disease in adults, children, pregnancy; steroids/plasma exchange; doxycycline chemoprophylaxis;
   surveillance; prevention) — pdftotext of _work/research/zoonoses-bt.pdf; Bhutan STG 2024 §8.1.4 Leptospirosis (filtered); BCR topic 'lepto';
   NEML 2025. Not read: WHO 2003 Human leptospirosis guidance, Cochrane antibiotics review — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "leptospirosis",
title: "Leptospirosis — all ages",
subtitle: "Fever with calf pain and red eyes after paddy-field, flood-water or animal contact: start doxycycline without waiting for tests, and watch days 4–6 for fast breathing, coughing blood, jaundice and falling urine — the signs of severe Weil's disease and lung haemorrhage",
age: "All ages", specs: ["id", "medicine", "paeds", "ph", "emerg"],
keywords: ["leptospirosis", "Leptospira", "Weil's disease", "Weils disease", "rat fever", "field fever", "flood fever", "calf pain", "conjunctival suffusion", "pulmonary haemorrhage", "diffuse alveolar haemorrhage", "AKI jaundice fever", "MAT", "leptospira IgM", "doxycycline leptospirosis", "penicillin leptospirosis", "doxycycline prophylaxis 200 mg weekly", "zoonosis Bhutan"],
related: ["afi-adult", "scrub-adult", "scrub-child", "dengue-adult", "malaria-adult", "enteric-adult", "hepatitis-adult", "aki-adult", "ards-adult", "fever-approach", "brucellosis"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Leptospirosis is a bacterial zoonosis caught through skin cuts, eyes or mouth from water or soil contaminated by the urine of rodents, cattle, pigs and dogs ${r(1)}. About 90% of symptomatic cases are mild (anicteric); 5–10% develop Weil's disease (bleeding, deep jaundice, kidney failure) with 5–15% mortality, and lung haemorrhage carries 50–70% mortality ${r(1)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Abrupt fever, rigors, headache, <b>calf and lower-back myalgia</b>, <b>conjunctival suffusion</b>, after farming, flood water, rivers, livestock or rodents; incubation 5–14 days (2–30) ${r(1)}.</p></div>
<div><h4>Treat early</h4><p>Mild adults: doxycycline 100 mg twice daily for 7 days, or azithromycin 500 mg daily for 3 days ${r(1)}. Do not wait for serology ${r(1)}.</p></div>
<div><h4>Severe</h4><p>IV penicillin G 1.5 million units 6-hourly, or IV doxycycline, or IV ceftriaxone 2 g daily, for 7 days; supportive care; refer ${r(1)}.</p></div>
<div><h4>Watch days 4–6</h4><p>Respiratory rate above 30, cough, haemoptysis, breathlessness = lung involvement ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>RCDC reported 76, 97, 57 and 63 cases in 2018, 2019, 2023 and 2024, picked up through acute undifferentiated febrile illness surveillance; a 2021 study in southern Bhutan found antibodies in farmers and livestock, and 2025 risk mapping marked southern districts with flooding, poor sanitation and dense livestock as high risk ${r(1)}. Leptospira IgM/IgG rapid tests can be used at the point of care but miss many cases in the first week (sensitivity 63–72% before day 7) — repeat a negative test ${r(1)}. Report through RCDC's event- or indicator-based system ${r(1)}. Adults with undifferentiated fever: see ${P("afi-adult", "acute fever without a focus")}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Organism", "Leptospira spp. (10 pathogenic species, more than 250 serovars), spiral gram-negative bacteria " + r(1)],
["Reservoirs", "Rodents (lifelong carriers), cattle, pigs, dogs, horses, sheep, goats; bacteria live in kidneys and are shed in urine " + r(1)],
["Transmission", "Contact with urine, blood or tissues of infected animals; urine-contaminated floodwater, rivers, sewage, wet soil; food or water; through cuts, mucosa, conjunctiva; human-to-human very rare " + r(1)],
["At risk", "Farmers, livestock handlers, slaughterhouse and sewer workers, veterinarians, soldiers, trekkers, swimmers, people living with rodents or after floods " + r(1)],
["Incubation", "5–14 days (range 2–30) " + r(1)],
["Global burden", "About 1 million cases and nearly 60,000 deaths a year; seasonal with rain and floods " + r(1)]
])}` },
{ id: "patho", title: "Two phases", html: `${F.chart("Course", [F.s("Entry through skin or mucosa"), F.a, F.s("Acute (leptospiraemic) phase: fever, myalgia, red eyes — blood PCR/culture positive"), F.a, F.d("Immune phase: antibodies rise (IgM from about day 6)"), F.a, F.b([["Most", F.ok("Recovery (± aseptic meningitis, uveitis)")], ["5–10%", F.e("Weil's disease: jaundice, AKI, bleeding, lung haemorrhage, myocarditis")]])])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG 2024", "Bhutan zoonoses guideline 2025", "This guide"], [
["Mild disease", "Doxycycline 100 mg twice daily 7 days", "Doxycycline 7 days or azithromycin 500 mg daily 3 days; azithromycin in pregnancy", "Zoonoses guideline (newer, fuller) " + r(1) + r(2)],
["Severe disease", "Refer", "IV penicillin G (drug of choice), IV doxycycline or IV ceftriaxone for 7 days", "Start IV antibiotic before transfer " + r(1) + r(2) + " " + LB.int()],
["Doxycycline in children under 8", "—", "Allowed if the course is shorter than 21 days", "Use it " + r(1)],
["Steroids / plasma exchange", "—", "Limited evidence; possible benefit of early methylprednisolone in lung complications; plasma exchange as rescue", "Specialist only " + r(1)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Phase / form", "Features"], [
["Acute phase", "Abrupt fever with rigors, myalgia (calves, lower back), headache; nausea, vomiting, diarrhoea in about 50%; dry cough in 25–35%; conjunctival suffusion (common) ± subconjunctival haemorrhage; muscle tenderness; liver, spleen, nodes; non-itchy rash " + r(1)],
["Immune phase", "Fever, headache, myalgia return; aseptic meningitis in about 50% (headache not relieved by analgesics, neck stiffness); uveitis " + r(1)],
["Weil's disease", "Bleeding, profound jaundice (bilirubin may reach 60–80 mg/dL, transaminases only mildly raised), AKI (oliguric or not; low potassium and sodium) " + r(1)],
["Lung involvement", "Days 4–6: RR > 30, cough, haemoptysis, dyspnoea, pleuritic pain; 'snowflake' infiltrates of alveolar haemorrhage " + r(1)],
["Myocarditis", "Shock, arrhythmias (SVT, AV block), ST–T changes " + r(1)]
])}
<h3>The typical patient</h3>
<p>A 32-year-old paddy farmer from Samtse has had fever, severe calf pain and red eyes for 4 days after transplanting rice in flooded fields. He is now breathing at 32 a minute and has coughed blood. Platelets 60,000, creatinine 2.4 mg/dL, bilirubin 3.1 mg/dL. This is severe leptospirosis with probable lung involvement: oxygen, IV penicillin G (or ceftriaxone), careful fluids, and urgent transfer to a hospital with ICU and dialysis ${r(1)}.</p>
<div class="calc" data-calc="leptorx"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Scrub typhus", "Eschar, nodes " + P("scrub-adult", "scrub typhus") + " " + r(1)],
["Dengue", "Rising haematocrit, low platelets, no calf pain " + P("dengue-adult", "dengue")],
["Malaria", "RDT/smear " + P("malaria-adult", "malaria")],
["Typhoid", "Step-ladder fever " + P("enteric-adult", "enteric fever") + " " + r(1)],
["Hepatitis A/E", "High transaminases " + P("hepatitis-adult", "hepatitis") + " " + r(1)],
["Hantavirus, murine typhus, ehrlichiosis, TTP/HUS, vasculitic pulmonary–renal syndrome", r(1)]
])}` },
{ id: "invest", title: "Investigations", html: `${tbl(["Test", "Notes"], [
["CBC", "Neutrophilia, low platelets, anaemia, pancytopenia " + r(1) + r(2)],
["Renal and liver function, electrolytes, PT/INR, CK, ESR/CRP", "AKI, conjugated bilirubin, low K and Na " + r(1)],
["Urine", "Protein, pus cells, casts, microscopic haematuria " + r(1)],
["Chest X-ray, ABG; HRCT if available", "Alveolar haemorrhage " + r(1)],
["Rapid IgM/IgG test", "Point of care, 15–30 minutes; sensitivity 63–72% before day 7, > 90% after; cross-reactions " + r(1)],
["IgM ELISA", "From about day 6; persists 2–3 months — paired sera " + r(1)],
["MAT", "Reference serology: single titre ≥ 1:400 or four-fold rise (diagnosis); ≥ 1:80 for surveillance " + r(1)],
["PCR", "Blood in the acute phase, urine in the immune phase " + r(1)],
["Culture", "Gold standard but 6–8 weeks; blood not useful after day 10 " + r(1)],
["Samples", "5 mL blood: 3 mL clot tube (serum) + 2 mL EDTA; CSF before antibiotics if meningitis " + r(1)]
])}
<p>WHO case definitions: suspected (exposure + compatible illness); probable (+ IgM in one sample); confirmed (seroconversion or four-fold rise, PCR, or organisms in tissue) ${r(1)}.</p>` },
{ id: "staging", title: "Severity", html: `${tbl(["Class", "Definition"], [
["Mild", "Flu-like illness without organ dysfunction " + r(1)],
["Severe", "Organ dysfunction, shock, myocarditis, bleeding, haemoptysis, ARDS, hypoxia or bilateral lung infiltrates " + r(1)]
])}
<p>Predictors of lung complications: delayed antibiotics, low platelets at onset, creatinine > 2 mg/dL, bilirubin > 2 mg/dL; smoking increases risk; death predicted by haemodynamic instability, creatinine > 265 µmol/L and potassium > 4.0 mmol/L ${r(1)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Mild disease (start at once)</h3>
${tbl(["Group", "Regimen"], [
["Adults", "Doxycycline 100 mg twice daily for 7 days, or azithromycin 500 mg once daily for 3 days " + r(1)],
["Children", "Doxycycline 2 mg/kg/day in 2 doses for 7 days, or azithromycin 10 mg/kg day 1 then 5 mg/kg days 2–3 " + r(1)],
["Pregnancy", "Azithromycin 500 mg once daily for 3 days " + r(1)]
])}
<p>Hydration (ORS or IV fluids) and paracetamol (STG 500 mg three times daily) ${r(2)}.</p>
<h3>2. Severe disease (7 days)</h3>
${tbl(["Group", "Regimen"], [
["Adults", "IV penicillin G 1.5 million units 6-hourly (drug of choice), or IV doxycycline 100 mg twice daily, or IV ceftriaxone 2 g once daily " + r(1)],
["Children", "IV penicillin '250,000 units/kg q 6 hourly' (as printed) " + LB.exp("UNCLEAR WHETHER PER DAY OR PER DOSE — CHECK WITH PAEDIATRICIAN") + ", or IV doxycycline 4 mg/kg/day in 2 doses, or IV ceftriaxone 100 mg/kg once daily " + r(1)],
["Pregnancy", "IV penicillin or ceftriaxone " + r(1)]
])}
<p>Supportive care: oxygen and ventilation, careful fluids, renal replacement therapy, blood products; refer to a higher centre ${r(1)}. Early methylprednisolone for lung complications and plasma exchange as rescue have limited evidence — specialist decision ${r(1)}.</p>
<h3>3. Chemoprophylaxis</h3>
<p>Doxycycline 200 mg once weekly, from 1–2 days before until the end of high-risk exposure (e.g. soldiers, disaster relief workers); adults only — not in pregnancy or children under 8; weigh against resistance ${r(1)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("doxycycline", "Doxycycline")} 100 mg — NEML; also covers scrub typhus ${r(3)} ${r(1)}.</li>
<li>${D("azithromycin", "Azithromycin")} — pregnancy and alternative ${r(1)}.</li>
<li>${D("benzylpenicillin", "Benzylpenicillin (penicillin G)")} — severe disease, drug of choice ${r(1)}.</li>
<li>${D("ceftriaxone", "Ceftriaxone")} 1 g — NEML ${r(3)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Pregnancy", "Azithromycin (mild); IV penicillin or ceftriaxone (severe); no doxycycline prophylaxis " + r(1)],
["Children under 8", "Doxycycline acceptable for courses under 21 days " + r(1)],
["Smokers", "Higher risk of lung involvement " + r(1)],
["Flood and disaster workers", "Weekly doxycycline prophylaxis during exposure " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Farmer, fever 3 days, calf pain, red eyes, otherwise well", "Mild: doxycycline 100 mg twice daily 7 days; return if breathless, yellow, passing less urine " + r(1)],
["Pregnant woman with fever and red eyes after flood clean-up", "Azithromycin 500 mg daily 3 days; monitor " + r(1)],
["Day 5: RR 34, haemoptysis, platelets 40,000", "Severe/lung: oxygen, IV penicillin or ceftriaxone, ICU referral " + r(1)],
["RDT negative on day 3 but strong suspicion", "Treat; repeat test after day 7 " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Pulmonary haemorrhage, ARDS, diffuse alveolar haemorrhage ${r(1)}.</li><li>AKI (usually recovers), jaundice ${r(1)}.</li><li>Myocarditis, arrhythmias, shock ${r(1)}.</li><li>Rhabdomyolysis, acalculous cholecystitis, pancreatitis ${r(1)}.</li><li>Aseptic meningitis, uveitis ${r(1)}.</li></ul>` },
{ id: "followup", title: "Follow-up and prevention", html: `<ul>
<li>Watch platelets, creatinine and breathing in the first week ${r(1)}.</li>
<li>Prevention: boots and gloves in fields, floods and animal work; cover cuts; avoid wading or swimming in flood water; rodent control; safe water ${r(1)}.</li>
<li>One Health surveillance in humans and animals; report cases ${r(1)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fever + water/animal exposure", [F.s("Ask exposure; look for calf pain, red eyes, jaundice"), F.a, F.d("Organ dysfunction, bleeding, RR > 30, low urine?"), F.a, F.b([["No", F.ok("Doxycycline 7 d (or azithromycin 3 d); RDT; review")], ["Yes", F.e("IV penicillin / ceftriaxone / doxycycline; oxygen; refer ICU")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Waiting for serology", "Delay predicts lung complications", "Treat on suspicion " + r(1)],
["Trusting an early negative RDT", "Low sensitivity before day 7", "Repeat after day 7 " + r(1)],
["Missing tachypnoea on day 4–6", "Lung haemorrhage kills quickly", "Count the breathing rate " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Mild leptospirosis in an adult — treatment?", "Doxycycline 100 mg twice daily for 7 days, or azithromycin 500 mg daily for 3 days.")}
${qa("Intern/MO", "First sign of lung involvement?", "Respiratory rate above 30 per minute, usually on days 4–6.")}
${qa("Specialist", "MAT titre for definite diagnosis?", "A single titre of 1:400 or more, or a four-fold rise between paired samples.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan (RCDC). National Guidelines for the Management of Priority Zoonotic Diseases, 2025 — chapter 2 Leptospirosis (local PDF copy).</li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.4 Leptospirosis.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan zoonoses guideline 2025 ch. 2", "<span class='pass'>Checked</span>", "Read in full"],
["Bhutan STG §8.1.4", "<span class='pass'>Checked</span>", "Partly scrambled"],
["Child penicillin dose wording", "<span class='unv'>Ambiguous</span>", "Marked"],
["WHO 2003 leptospirosis guidance", "<span class='unv'>Not read</span>", "—"],
["Calculator", "<span class='pass'>Checked</span>", "Guideline tables"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
