/* Anthrax — all ages. Batch E-6, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §8.1.8 Anthrax (penicillin V 500 mg 6-hourly or amoxicillin 500 mg 8-hourly for 5 days; refer to the national guideline);
   Bhutan national zoonoses guideline, chapter 6 Anthrax (epidemiology in Bhutan, forms, incubation, clinical features, BSL-3 testing only at RCDC,
   management tables 7–16). The PDF text layer of the Bhutan dose tables is MISALIGNED (values shifted by one row) — every dose was therefore taken
   from, and checked against, CDC Guidelines for the Prevention and Treatment of Anthrax 2023 (Bower et al., MMWR Recomm Rep 72(RR-6)), read in the
   browser (tables 6, 7, 8, 12, 13, 14), which the Bhutan tables reproduce. NEML 2025 checked for each drug. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "anthrax",
title: "Anthrax — all ages",
subtitle: "A painless black eschar with a lot of swelling in someone who handled or ate a dead cow: treat early, report at once, find the animal outbreak, and give prophylaxis to the people who shared the meat",
age: "All ages", specs: ["id", "medicine", "derm", "paeds", "ph"],
keywords: ["anthrax", "Bacillus anthracis", "cutaneous anthrax", "black eschar", "malignant pustule", "gastrointestinal anthrax", "ingestion anthrax", "inhalation anthrax", "woolsorter's disease", "anthrax meningitis", "post-exposure prophylaxis anthrax", "raxibacumab", "obiltoxaximab", "dead cattle meat", "zoonosis Bhutan"],
related: ["ssti-adult", "ssti-child", "sepsis-adult", "meningitis-adult", "rabies-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In Bhutan anthrax is a disease of villages where a cow or yak died suddenly and its meat was shared or its hide handled. Almost all human cases are cutaneous and almost all of those survive with a simple oral antibiotic. The doctor's other job is public health: notify, trace the animal, and protect everyone who ate or touched it.</p>
<div class="glance">
<div><h4>Recognise it</h4><p>An itchy papule → vesicle → <b>painless ulcer with a black eschar</b>, with marked surrounding oedema, on the face, neck, arms or hands ${r(1, 2)}.</p></div>
<div><h4>Cutaneous, no meningitis</h4><p>Oral doxycycline or ciprofloxacin (amoxicillin if the strain is penicillin-sensitive) for <b>7–10 days</b> ${r(2, 3)}.</p></div>
<div><h4>Systemic or meningitis</h4><p>Admit; IV combination (e.g. meropenem + ciprofloxacin + doxycycline or minocycline) plus antitoxin; at least 2 weeks ${r(2, 3)}.</p></div>
<div><h4>Exposed, not ill</h4><p>Post-exposure prophylaxis: 7 days after skin or eating exposure; 60 days after spores were inhaled ${r(2, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§8.1.8) gives penicillin V 500 mg 6-hourly or amoxicillin 500 mg 8-hourly for 5 days ${r(1)}. The national zoonoses guideline, following CDC 2023, prefers <b>doxycycline or ciprofloxacin</b> first (penicillin only if susceptibility is confirmed — fewer than 10% of isolates are naturally resistant) and treats for <b>7–10 days</b> ${r(2, 3)}. Suspected samples must be handled under BSL-3 conditions: only RCDC has a BSL-3 laboratory; NRH and RRH laboratories are BSL-2 ${r(2)}. Anthrax is notifiable — tell the district health office and the livestock sector the same day ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Cause", "<i>Bacillus anthracis</i>, a Gram-positive, spore-forming, encapsulated rod; spores survive for years in soil, wool and hair " + r(2)],
["How people catch it", "Spores through cuts (cutaneous), eating undercooked meat of infected animals (ingestion), inhaling spores (inhalation), and rarely injection; person-to-person spread is very rare " + r(2)],
["Forms", "Cutaneous (over 95% of cases worldwide), inhalation, ingestion (oropharyngeal and gastrointestinal), injection, and anthrax meningitis as a complication of any " + r(2)],
["Incubation", "Cutaneous 2–6 days (hours to 21 days); inhalation 1–7 days (up to 2 months); ingestion 1–7 days; injection 1–4 days " + r(2) + "; STG 1–7 days " + r(1)],
["Bhutan", "34 animal outbreaks 1998–2012 (11 in 2012 alone) in districts including Trashigang, Tsirang, Trongsa, Sarpang and Haa; 9 human cutaneous cases in 2010; a 2010 Zhemgang outbreak killed 43 domestic animals " + r(2)],
["Mortality", "Cutaneous: up to 20% untreated, almost all survive with treatment; inhalation almost always fatal untreated (about 55% survive with aggressive care); gastrointestinal: more than half die untreated, about 60% survive with treatment " + r(2)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Spore to disease", [F.s("Spores enter through skin, gut or lung"), F.a, F.s("Taken up by macrophages → carried to regional lymph nodes → germinate into vegetative bacteria"), F.a, F.s("Capsule blocks phagocytosis; lethal toxin and oedema toxin are made"), F.a, F.b([["Local", F.s("Oedema, necrosis, black eschar (skin); ulcers and bleeding (gut)")], ["Spread", F.e("Bacteraemia → septic shock, haemorrhagic meningitis")]])])}
<p>Antibiotics kill the bacteria quickly, but the skin lesion still evolves for several days and takes weeks to heal because of toxin damage — do not prolong antibiotics or rush to surgery because the eschar looks bad ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Bhutan zoonoses guideline / CDC 2023", "This guide"], [
["First-line oral drug (cutaneous)", "Penicillin V or amoxicillin", "Doxycycline, minocycline, ciprofloxacin or levofloxacin first; amoxicillin or penicillin V only for penicillin-susceptible strains", "Doxycycline or ciprofloxacin until susceptibility is known " + LB.int()],
["Doses", "Penicillin V 500 mg 6-hourly; amoxicillin 500 mg 8-hourly", "Amoxicillin 1 g 8-hourly; penicillin VK 500 mg 6-hourly; doxycycline 100 mg 12-hourly; ciprofloxacin 500 mg 12-hourly; levofloxacin 750 mg daily", "CDC doses " + r(3)],
["Duration (cutaneous)", "5 days", "7–10 days, or until clinically stable; 60 days in total if there was also an aerosol exposure", "7–10 days " + r(2, 3)],
["Systemic disease", "Not covered", "Admit; IV combination therapy plus antitoxin; at least 2 weeks", r(2, 3)]
])}
<p>The STG regimen will cure most simple skin anthrax caused by a sensitive strain, but it is shorter and depends on a penicillin-sensitive organism; the national zoonoses guideline is the more complete document and should be followed.</p>` },
{ id: "presentation", title: "Clinical features", html: `
<h3>Cutaneous (over 95%)</h3>
<ul>
<li>A small, painless, often itchy papule → central vesicle or bulla → painless necrotic ulcer with a black, depressed eschar; more than 90% on exposed skin (face, neck, arms, hands) ${r(2)}.</li>
<li>Extensive surrounding oedema, regional lymphadenopathy and lymphangitis; a black eschar with lots of oedema is highly suggestive ${r(2)}.</li>
<li>No pus and no gas, unless there is a secondary infection ${r(2)}.</li>
<li>Fever, headache, malaise ${r(1)}.</li>
</ul>
<h3>Ingestion</h3>
<ul>
<li><b>Oropharyngeal</b>: fever, sore throat, dysphagia, hoarseness, painful one-sided neck nodes; 2–3 cm oral ulcers with a grey pseudomembrane; neck and chest oedema that can block the airway ${r(2)}.</li>
<li><b>Gastrointestinal</b>: fever, nausea, vomiting, diarrhoea, abdominal pain, then bloody diarrhoea, haematemesis, melaena, ascites, perforation, shock — from 2–3 days ${r(2)}.</li>
</ul>
<h3>Inhalation</h3>
<p>A flu-like prodrome (fever, cough, aches, chest discomfort) for 4–5 days, then sudden severe dyspnoea, hypoxia and shock; chest X-ray shows a widened mediastinum, infiltrates and pleural effusions ${r(2)}.</p>
<h3>Meningitis</h3>
<p>Severe headache, confusion, meningism, seizures, cranial nerve palsies; haemorrhagic CSF with low glucose ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 38-year-old woman from a village in Tsirang skinned a cow that had died suddenly five days ago and shared the meat with neighbours. She has a painless black ulcer on her forearm with swelling up to the elbow and a tender axillary node. She is afebrile with normal vital signs and no headache. Swab the lesion (handled as a BSL-3 sample, sent to RCDC), start oral ciprofloxacin 500 mg twice daily for 7–10 days, notify the district, and give 7 days of prophylaxis to everyone who handled or ate the meat ${r(2, 3)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Cellulitis, necrotising soft-tissue infection, gas gangrene", "Painful, pus or gas, systemic toxicity early " + r(2)],
["Orbital cellulitis, dacryocystitis, deep neck infection", "For facial and neck lesions " + r(2)],
["Scrub typhus eschar", "Small painless eschar in a hidden site, fever, rash — no massive oedema"],
["Spider bite, ecthyma gangrenosum, orf", "Exposure history; orf from sheep/goats is a nodule"],
["Oropharyngeal anthrax vs diphtheria, quinsy, Ludwig angina", "Membrane, unilateral oedema, animal-meat history " + r(2)],
["Gastrointestinal anthrax vs food poisoning, dysentery, necrotising enteritis, acute abdomen", "Shared meat from a dead animal; several cases at once " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Collect samples <b>before antibiotics</b> where possible: vesicle fluid or swab from under the eschar, blood cultures, CSF if meningitis is possible ${r(2)}.</li>
<li><b>Gram stain</b>: Gram-positive bacilli in "boxcar" chains — a rapid diagnosis in resource-limited settings ${r(2)}.</li>
<li>Culture is the gold standard; PCR at RCDC confirms ${r(2)}.</li>
<li>Biosafety: BSL-3 only at RCDC; NRH/RRH BSL-2 labs should not test suspected anthrax except after inactivation or in certified cabinets ${r(2)}.</li>
<li>Routine: CBC, ESR, CRP, renal and liver tests, viral markers, chest X-ray ${r(2)}; STG lists CBC, stool culture and chest X-ray ${r(1)}.</li>
</ul>` },
{ id: "staging", title: "Which category?", html: `
${tbl(["Category", "Features", "Setting and treatment"], [
["Cutaneous without systemic involvement", "Eschar, local oedema, normal vital signs, no meningitis", "Oral antibiotic 7–10 days; outpatient if reliable follow-up " + r(2, 3)],
["Cutaneous with systemic involvement or extensive oedema", "Fever, tachycardia, hypotension, lesion on head or neck, extensive oedema", "Treat as systemic: admit, IV combination " + r(2, 3)],
["Systemic (inhalation, ingestion, injection, bacteraemia)", "Any of the above forms", "IV combination + antitoxin, ≥ 2 weeks " + r(2, 3)],
["Meningitis possible", "Headache, confusion, meningism, focal signs", "Meningitic doses; lumbar puncture if safe " + r(2, 3)],
["Exposed, well", "Ate or handled meat/hide from a suspected case animal", "Post-exposure prophylaxis " + r(2, 3)]
])}
<div class="calc" data-calc="anthraxrx"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Cutaneous anthrax without meningitis — adults (CDC 2023, order of preference)</h3>
${tbl(["Drug", "Dose (oral)", "Notes"], [
["Doxycycline", "100 mg every 12 hours", "First line " + r(3)],
["Minocycline", "200 mg once, then 100 mg every 12 hours", "First line " + r(3)],
["Ciprofloxacin", "500 mg every 12 hours", "First line " + r(3)],
["Levofloxacin", "750 mg every 24 hours", "First line " + r(3)],
["Amoxicillin (penicillin-susceptible only)", "1 g every 8 hours", r(3)],
["Penicillin VK (penicillin-susceptible only)", "500 mg every 6 hours", r(3)],
["Duration", "7–10 days, or until clinical stability; total 60 days if aerosol exposure", r(2, 3)]
])}
<h3>2. Children 1 month to under 18 years — cutaneous (CDC 2023)</h3>
${tbl(["Drug", "Dose (oral)"], [
["Ciprofloxacin", "15 mg/kg every 12 hours (max 500 mg/dose) " + r(3)],
["Levofloxacin", "Under 50 kg: 8 mg/kg every 12 hours (max 250 mg/dose); 50 kg or more: 750 mg every 24 hours " + r(3)],
["Doxycycline", "Under 45 kg: 2.2 mg/kg every 12 hours (max 100 mg/dose); 45 kg or more: 100 mg every 12 hours " + r(3)],
["Amoxicillin (PCN-susceptible)", "25 mg/kg every 8 hours (max 1 g/dose) " + r(3)],
["Penicillin VK (PCN-susceptible)", "12.5–18.7 mg/kg every 6 hours (max 500 mg/dose) " + r(3)]
])}
<p>Short courses of doxycycline and fluoroquinolones are appropriate in children and pregnancy for a life-threatening infection like anthrax; CDC lists the same first-line drugs for pregnant and lactating women ${r(3)}.</p>
<h3>3. Systemic anthrax (with or without meningitis)</h3>
<ul>
<li>Admit to a hospital that can give IV therapy and intensive care ${r(2)}.</li>
<li>Two bactericidal drugs from different classes <b>plus</b> a protein-synthesis inhibitor, e.g. <b>meropenem 2 g IV every 8 h + ciprofloxacin 400 mg IV every 8 h + doxycycline 200 mg IV once then 100 mg every 12 h</b> (or minocycline) ${r(2, 3)}.</li>
<li>Children: meropenem 40 mg/kg every 8 h (max 2 g/dose) + ciprofloxacin 10 mg/kg every 8 h (max 400 mg/dose) + doxycycline 2.2 mg/kg (max 200 mg) load then 2.2 mg/kg every 12 h (max 100 mg/dose; 45 kg+: adult doses) ${r(2, 3)}.</li>
<li>Plus a single dose of antitoxin: ${D("raxibacumab", "raxibacumab")} 40 mg/kg IV, or ${D("obiltoxaximab", "obiltoxaximab")} 16 mg/kg IV, or ${D("anthrax-immunoglobulin", "anthrax immune globulin")} 420 units (840 for severe) in adults — premedicate (anaphylaxis risk) ${r(2)}.</li>
<li>Duration at least 2 weeks; switch to oral when improving ${r(2)}.</li>
<li>Drain pleural effusions and ascites; airway management for oropharyngeal disease ${LB.exp()}.</li>
</ul>
<h3>4. Post-exposure prophylaxis</h3>
${tbl(["Who", "Antibiotic", "Duration"], [
["Adults 18–65, skin or ingestion exposure (non-aerosol)", "Doxycycline 100 mg 12-hourly, or ciprofloxacin 500 mg 12-hourly, or levofloxacin 500 mg daily; amoxicillin 1 g 8-hourly or penicillin VK 500 mg 6-hourly only if PCN-susceptible", "7 days " + r(2, 3)],
["Aerosol exposure, or over 65 or immunocompromised", "Same drugs", "60 days " + r(2)],
["Children 1 month–17 years", "Ciprofloxacin 15 mg/kg 12-hourly (max 500 mg); doxycycline 2.2 mg/kg 12-hourly (max 100 mg; 45 kg+: 100 mg); levofloxacin 8 mg/kg 12-hourly (max 250 mg; 50 kg+: 500 mg daily); amoxicillin 25 mg/kg 8-hourly (max 500 mg/dose) if PCN-susceptible", "As for adults " + r(2, 3)]
])}` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("doxycycline", "Doxycycline")} — NEML 100 mg capsule and 100 mg IV ${r(4)}.</li>
<li>${D("ciprofloxacin", "Ciprofloxacin")} — NEML 500 mg tablet and 2 mg/mL infusion ${r(4)}.</li>
<li>${D("levofloxacin", "Levofloxacin")} — NEML 250 mg tablet ${r(4)}.</li>
<li>${D("amoxicillin", "Amoxicillin")} — NEML (250 mg capsule, syrup); ${D("phenoxymethylpenicillin", "penicillin V")} — check the monograph for NEML status.</li>
<li>${D("meropenem", "Meropenem")} — not on NEML 2025; referral-centre procurement ${r(4)}.</li>
<li>Antitoxins (${D("raxibacumab", "raxibacumab")}, ${D("obiltoxaximab", "obiltoxaximab")}, ${D("anthrax-immunoglobulin", "AIGIV")}) — not available in Bhutan; US strategic stockpile products ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Weight-based doses above; doxycycline and ciprofloxacin are acceptable for anthrax " + r(3)],
["Pregnancy and breastfeeding", "Same first-line drugs as other adults (CDC tables 9–11) " + r(3)],
["Head and neck lesions", "Treat as systemic; watch the airway " + r(3)],
["Outbreak (several people from one carcass)", "Line list, prophylaxis for all exposed, joint investigation with livestock services; burn or deep-bury carcasses, never open them " + LB.exp()],
["Animal vaccination", "STG: annual immunisation of domestic animals in endemic areas " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Forearm eschar, no fever, 15 people ate the same meat", "Treat the patient 7–10 days; 7 days' prophylaxis for the 15; notify " + r(2, 3)],
["Eschar on the neck with oedema to the chest", "Systemic-category: admit, IV combination, airway watch " + r(3)],
["Three people with bloody diarrhoea and fever after a village feast of a dead yak", "Gastrointestinal anthrax: admit, IV combination, blood cultures, notify " + r(2)],
["Child 12 kg exposed to meat, well", "Ciprofloxacin 180 mg (15 mg/kg) 12-hourly for 7 days " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Sepsis and shock; respiratory failure and ARDS; meningitis; renal failure; coagulopathy and bleeding; arrhythmias ${r(2)}.</li>
<li>Pleural and pericardial effusions, ascites ${r(2)}.</li>
<li>Airway obstruction from neck oedema; scarring of the skin lesion ${r(2)} ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and prevention", html: `<ul>
<li>Expect the skin lesion to evolve for days and heal over weeks — this is not treatment failure ${r(2)}.</li>
<li>Do not touch or eat animals that died suddenly; report sudden livestock deaths ${r(1)}.</li>
<li>Annual vaccination of livestock in endemic areas ${r(1)}.</li>
<li>Wear shoes outdoors and cover cuts when handling animals or hides ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Cutaneous anthrax on the neck", src: "images/anthrax-eschar-neck.jpg", mod: "Clinical photograph", ctx: "Cutaneous anthrax (1953)", loc: "Neck", find: "Black necrotic eschar with surrounding swelling", signs: "Painless eschar with oedema", interp: "Neck lesions are treated as systemic disease because of the airway risk", by: "CDC (Public Health Image Library, PHIL 1934)", page: "https://commons.wikimedia.org/wiki/File:Cutaneous_anthrax_lesion_on_the_neck._PHIL_1934_lores.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected anthrax", [F.d("Eschar / GI illness / severe illness after contact with a dead animal or its meat?"), F.a, F.s("Samples before antibiotics (swab, blood culture) → RCDC; notify district and livestock"), F.a, F.d("Systemic features, head/neck lesion, extensive oedema or meningitis?"), F.a, F.b([["Yes", F.e("Admit: IV combination + antitoxin if available, ≥ 2 weeks")], ["No", F.ok("Oral doxycycline or ciprofloxacin 7–10 days")]]), F.a, F.s("Everyone else exposed: prophylaxis 7 days (60 if inhaled)")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Incising or debriding the eschar", "Spreads infection; heals anyway", "Antibiotics and dressing"],
["5 days of penicillin for an unknown strain", "Resistance in up to 1 in 10; relapse", "Doxycycline or ciprofloxacin 7–10 days"],
["Treating only the patient", "Other villagers ate the same meat", "Trace and give prophylaxis"],
["Testing in a BSL-2 lab", "Laboratory-acquired infection", "Send to RCDC"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is the typical skin lesion of anthrax?", "A painless ulcer with a black, depressed eschar and marked surrounding oedema, usually on exposed skin.")}
${qa("Intern/MO", "First-line oral treatment for cutaneous anthrax in an adult?", "Doxycycline 100 mg or ciprofloxacin 500 mg 12-hourly (or levofloxacin 750 mg daily) for 7–10 days.")}
${qa("Specialist", "How long is prophylaxis after an aerosol exposure?", "60 days.")}
${qa("Specialist", "What is the structure of empirical therapy for systemic anthrax?", "Two bactericidal drugs from different classes plus a protein-synthesis inhibitor, plus a single dose of antitoxin.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.8 Anthrax.</li>
<li id="ref-2">Ministry of Health, Bhutan. National guideline on zoonotic diseases — chapter 6, Anthrax (epidemiology, clinical features, laboratory diagnosis, management and post-exposure prophylaxis).</li>
<li id="ref-3">Bower WA, Yu Y, Person MK, et al. CDC guidelines for the prevention and treatment of anthrax, 2023. MMWR Recomm Rep 2023;72(No. RR-6):1–47. <a href="https://doi.org/10.15585/mmwr.rr7206a1" target="_blank" rel="noopener">doi:10.15585/mmwr.rr7206a1</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §8.1.8", "<span class='pass'>Checked</span>", "Read from the STG text"],
["Bhutan zoonoses guideline ch. 6", "<span class='pass'>Checked</span>", "Clinical, laboratory and epidemiology text read; dose tables garbled in the PDF text layer"],
["All doses", "<span class='pass'>Checked</span>", "Taken from CDC 2023 tables 6–8 and 12–14 read in full"],
["DOI", "<span class='pass'>Checked</span>", "Crossref"],
["Calculator", "<span class='pass'>Checked</span>", "Tested in the browser"],
["Image", "<span class='pass'>Checked</span>", "CDC PHIL, public domain"]
], "qc")}` }
]
});
})();
