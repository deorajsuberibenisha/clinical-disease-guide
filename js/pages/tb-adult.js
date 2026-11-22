/* Tuberculosis — adults */
registerPage({
id: "tb-adult",
title: "Tuberculosis — Adults",
subtitle: "Diagnosis, drug-susceptible and drug-resistant treatment, prevention of infection and disease, and care of the hard cases",
age: "Adults", specs: ["id", "resp", "medicine", "ph"],
keywords: ["tuberculosis", "TB", "pulmonary TB", "extrapulmonary TB", "MDR-TB", "XDR-TB", "BPaLM", "rifampicin", "isoniazid", "pyrazinamide", "ethambutol", "Xpert MTB/RIF", "GeneXpert", "TST", "mantoux", "TB meningitis", "pleural TB", "lymph node TB", "TB-HIV", "TB diabetes", "DILI", "hepatotoxicity", "isoniazid preventive treatment", "3HP", "latent TB", "contact tracing", "BCG"],
related: ["tb-child", "dm-adult", "dm-pregnancy"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if a final WHO DR-TB guideline changes practice)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Tuberculosis is curable, but it punishes delay and half-done treatment. The two skills that save lives are finding the right person to test and never losing a patient between the first tablet and the last.</p>
<div class="glance">
<div><h4>Who to test</h4><p>Cough for <b>2 weeks or more</b>; or cough of any duration with fever, night sweats, weight loss, haemoptysis or chest pain; or a chest X-ray that suggests TB.</p></div>
<div><h4>Confirm</h4><p><b>Xpert MTB/RIF on sputum</b> (initial test for everyone) <b>plus a chest X-ray</b>. At non-GeneXpert sites, two sputum smears and send sputum to the nearest GeneXpert site.</p></div>
<div><h4>Standard treatment</h4><p><b>2HRZE / 4HR daily</b> for new pulmonary and extrapulmonary TB: 2 months of isoniazid, rifampicin, pyrazinamide, ethambutol, then 4 months of isoniazid and rifampicin.</p></div>
<div><h4>FDC by weight</h4><p>&lt;35 kg: 2 tablets · 35–54 kg: 3 · ≥55 kg: 4 (4-FDC in the intensive phase, 2-FDC in the continuation phase). Add pyrazinamide 400 mg if over 70 kg.</p></div>
<div><h4>Notify and trace</h4><p>Every case is notifiable. Start contact investigation <b>within 72 hours</b>; report to the NTCP within 7 days.</p></div>
<div><h4>Red flags</h4><ul><li>Haemoptysis, breathlessness, drowsiness</li><li>Headache, vomiting, stiff neck (meningitis)</li><li>Jaundice, vomiting on treatment (DILI)</li><li>Vision change on ethambutol</li></ul></div>
<div><h4>Always</h4><p>Test every TB patient for HIV; test every person with HIV for TB. Give pyridoxine to anyone at risk of neuropathy on isoniazid.</p></div>
</div>
<div class="calc" data-calc="tbwband"></div>
${box("bt", "Bhutan note", `<p>The 2024 national guidelines make <b>Xpert MTB/RIF the initial test for all presumptive TB</b>, with smear microscopy reserved for follow-up only. The <b>10-colour GeneXpert (Xpert MTB/XDR)</b> detects isoniazid, fluoroquinolone, ethionamide and aminoglycoside resistance at the six machines that have it. All drug-resistant disease is managed through the NTCP, not in isolation. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What tuberculosis is, who gets it and how it spreads", html: `
<h3>Definition</h3>
<p>Tuberculosis (TB) is infection with <i>Mycobacterium tuberculosis</i> (and, rarely, the closely related <i>M. bovis</i> or <i>M. africanum</i>). "TB infection" means the bacillus is alive in the body but controlled (the person is well and not infectious). "TB disease" means it is causing damage and symptoms. Only a minority of infected people ever develop disease, and the whole art of prevention is finding that minority before they do.</p>

<h3>How it spreads and the language we use</h3>
${tbl(["Term", "What it means"], [
["<b>Presumptive TB</b>", "A person with symptoms or a chest X-ray that suggests TB, before laboratory confirmation"],
["<b>Bacteriologically confirmed</b>", "Positive by Xpert MTB/RIF, smear or culture — notify even if treatment has not started"],
["<b>Clinically diagnosed</b>", "Not laboratory-confirmed, but a clinician decides to treat a full course; reclassify as confirmed if a later test turns positive"],
["<b>Pulmonary TB (PTB)</b>", "Lung parenchyma or the tracheobronchial tree. Miliary TB counts as PTB. PTB plus any extrapulmonary site is still classified as PTB"],
["<b>Extrapulmonary TB (EPTB)</b>", "Any other site: pleura, nodes, CNS, bone and joint, abdomen, genitourinary, pericardium, skin"],
["<b>New</b>", "Never treated, or treated for less than one month"],
["<b>Previously treated</b>", "One month or more of treatment before: relapse, treatment after failure, treatment after loss to follow-up, or unknown"]])}
<p>TB spreads by <b>airborne droplets</b>: a person with pulmonary or laryngeal disease coughs, talks or sings, and bacilli ride the droplet nuclei that hang in the air for hours. You catch TB by breathing, not by touching. The infected person is the source only while they are infectious — which is why prompt diagnosis and treatment are themselves the best form of prevention.</p>

<h3>How common is it?</h3>
<ul>
<li>The WHO estimated about <b>10.8 million new cases and 1.25 million deaths in 2023</b>, most of them in South-East Asia and Africa.${r(9)}</li>
<li><b>India</b> carries about a quarter of the world's burden — the single largest national share.${r(9)}</li>
<li><b>Bhutan</b> is a high-burden country with a well-run national programme. Strikingly, <b>38% of 2022 notifications were extrapulmonary</b> — far higher than most countries, which the guidelines note may partly reflect over-diagnosis, and is why a chest X-ray and sputum bacteriology are mandatory in every EPTB case.${r(1)} ${LB.bt("EVIDENCE GAP")} A precise current Bhutan incidence figure was not in the sources reviewed.</li>
<li>About a quarter of humanity has TB infection, but only 5–10% of otherwise healthy infected people ever develop disease; the risk is far higher in the first two years after infection and in people with weak immunity.</li></ul>

<h3>Risk factors and why they matter</h3>
${tbl(["Risk factor", "Why"], [
["HIV infection", "The strongest known risk — it dismantles the T-cell response that walls off the bacillus"],
["Close contact with an infectious case", "Especially a household contact who shares an enclosed space at night"],
["Diabetes mellitus", "Triples the risk of TB and worsens treatment outcomes"],
["Malnutrition and underweight", "Cell-mediated immunity depends on adequate nutrition"],
["Alcohol dependence and smoking", "Both impair lung defence and treatment adherence"],
["Silica dust, chronic kidney disease, cancer, immunosuppressive and anti-TNF treatment", "Each weakens the macrophage and T-cell response"],
["Poverty, crowding, poor ventilation", "More exposure and harder treatment completion"]])}

<h3>The organism</h3>
<p><i>M. tuberculosis</i> is a slow-growing, aerobic, acid-fast bacillus with a thick waxy wall of mycolic acids. The wall makes it acid-fast on Ziehl–Neelsen staining, resistant to drying and many disinfectants, and slow to kill (it divides about every 15–20 hours). Because it grows slowly, treatment must last months, and because it hides in closed lesions and inside macrophages, we need both a drug that kills dividing bacilli (isoniazid) and drugs that reach dormant ones (rifampicin, pyrazinamide).</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How tuberculosis infection becomes disease", [
F.s("Inhaled droplet nuclei from a person with infectious pulmonary TB"), F.a,
F.s("Alveolar macrophages ingest <i>M. tuberculosis</i>; bacilli multiply; T-cell immunity forms a <b>granuloma</b>"), F.a,
F.d("Is the infection contained?"), F.a,
F.b([
["Yes (most)", F.ok("TB infection (latent): no symptoms, not infectious; lifetime disease risk about 5–10%")],
["No", F.e("TB disease: primary progressive, or reactivation years later")]]), F.a,
F.s("<b>Reactivation risk ↑</b>: HIV, diabetes, malnutrition, smoking, alcohol, silicosis, steroids, TNF inhibitors, recent infection"), F.a,
F.b([
["Lung", F.e("Caseation and cavitation (upper lobes) → cough, haemoptysis, infectious spread")],
["Beyond the lung", F.e("Lymph nodes, pleura, meninges, spine, abdomen, miliary spread via blood")]])])}
<h3>From one inhaled bacillus to disease</h3>
<ol class="chain">
<li><b>Inhalation</b> delivers a few bacilli to the alveoli, where alveolar macrophages engulf them.</li>
<li><b>Primary infection:</b> bacilli multiply inside macrophages and drain to the hilar lymph nodes, forming the <b>Ghon complex</b> (a peripheral lung focus plus its draining node). In most people this heals and calcifies.</li>
<li><b>Control or spread:</b> over 2–8 weeks, cell-mediated immunity (T-helper 1 cells and the cytokines they release) activates macrophages to wall the bacilli into <b>caseating granulomas</b> — a cheese-like core of dead tissue surrounded by epithelioid cells and multinucleated Langhans giant cells. This is the hallmark of TB, and it is a double-edged sword: it contains the bacillus but also destroys tissue.</li>
<li><b>Latent (TB infection):</b> bacilli survive for decades inside granulomas, metabolically quiet. The person is well, the chest X-ray may show a calcified scar, and they are not infectious.</li>
<li><b>Reactivation</b> (or re-infection) years later: immunity wanes (age, HIV, diabetes, steroids, anti-TNF therapy), a granuloma breaks down, and bacilli multiply. In the lung this produces the classic <b>apical cavities</b> — oxygen-rich, protected, and a perfect launching pad for spread.</li>
<li><b>Spread:</b> erosion into a bronchus → cough and airborne spread; into a blood vessel → <b>miliary TB</b>; into the pleura → effusion; to the meninges → <b>TB meningitis</b>; to bone, joints, kidneys or anywhere else → extrapulmonary disease.</li></ol>

<h3>Why the disease looks the way it does</h3>
<p>Fever, night sweats and weight loss come from the immune response and its cytokines (tumour necrosis factor is the main culprit). Cough comes from bronchial erosion and cavitation; haemoptysis from erosion into a vessel (or, late, from a mycetoma in an old cavity); breathlessness from a large effusion or widespread parenchymal disease. Lymphadenopathy, pleural effusion and pericarditis are exaggerated local granulomatous responses to the bacillus, often with few organisms — which is why culture is often negative in extrapulmonary disease.</p>

<h3>Natural history, untreated</h3>
<p>Untreated pulmonary TB kills roughly <b>half its victims within a few years</b>, most within the first two. A proportion self-heal (leaving fibrosis and a small lifelong risk of late relapse), and some become chronic, intermittently smear-positive cases — the historical "consumption". The risk of developing disease after infection is highest in the <b>first 1–2 years</b> and in young children; primary infection in an adult is more likely to heal and reactivate later. This is why preventive treatment is aimed at recent contacts and the immunocompromised.${r(15)}</p>
` },

{ id: "conflicts", title: "Where Bhutan, India and WHO differ", html: `
<p>The guidelines agree on the essentials — Xpert first, daily 2HRZE/4HR, all-oral DR-TB treatment. The differences below are real and worth knowing, because a patient may walk in with one regime in their notes and another in their hand.</p>
${tbl(["Topic", "Bhutan 2024", "India (NTEP/ICMR)", "WHO", "This guide"], [
["Continuation phase", "4HR (ethambutol stops)", "4HRE (ethambutol continued)", "4HR", "Follow Bhutan: 4HR"],
["Adult 4-FDC bands", "&lt;35 kg: 2 · 35–54: 3 · &gt;55: 4 (plus Z 400 if &gt;70 kg)", "30–39: 2 · 40–54: 3 · 55–70: 4 · &gt;70: 5", "30–39: 2 · 40–54: 3 · 55–69: 4 · ≥70: 5", "Use Bhutan's three bands; check the mg/kg against the patient's weight and flag the ambiguous 55 kg boundary"],
["4-month HPMZ (≥12 y, &gt;40 kg)", "Adopted case by case, after specialist consultation", "Not in the 2022 STW", "Recommended (2022)", "Offer to eligible patients; it is optional, not a default"],
["TBM regimen", "2HRZE/10HR; dexamethasone 8-week taper", "2HRZE/10HRE; steroid taper 8–12 weeks", "2HRZE/10HR; steroid taper 6–8 weeks", "2HRZE/10HR with Bhutan's dexamethasone schedule"],
["Osteoarticular TB", "12 or 18 months by response", "2HRZE/10HRE (spine)", "Children 2HRZE/10HR; adults 6–9 months acceptable", "Follow Bhutan for the duration; culture and DST on every case"],
["Pyridoxine", "25 mg for at-risk groups; <b>≥12 h apart from ATT</b>", "10 mg daily for all on ATT", "At-risk groups only", "Follow Bhutan: at-risk groups, ≥12 h apart"],
["Initial test", "Xpert MTB/RIF (Ultra for EPTB and children) + CXR", "NAAT (CBNAAT or Truenat)", "mWRD including Xpert, Truenat and newer classes (2025)", "Xpert first; Truenat and LF-LAM are not yet in Bhutan's guidelines"],
["LF-LAM in HIV", "Not mentioned", "Not in local STW", "Recommended in advanced HIV", "Not available in Bhutan's guideline; note as a gap"],
["TPT regimens (adults)", "3HP and 6H only", "6H, 3HP", "6H, 9H, 3HP, 1HP, 3HR, 4R; 6Lfx for MDR contacts", "Use Bhutan's 3HP and 6H"],
["First-line DR-TB regimen", "BPaLM/BPaL (≥14 y); 9-month all-oral; 18–20 month longer", "NTEP PMDT 2021 shorter oral and longer regimens", "2025: BPaLM plus new <b>BDLLfxC</b> (6 months, all ages, pregnancy allowed)", "BPaLM/BPaL now; BDLLfxC is not yet adopted in Bhutan"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Pulmonary TB is usually a slow, grumbling illness. The patient has been unwell for weeks or months — coughing, tired, losing weight — and only slowly comes to care. Listen for the timeline.</p>
${tbl(["Symptom or sign", "Mechanism", "What it tells you"], [
["Cough for 2 weeks or more", "Bronchial erosion, cavitation", "The cardinal symptom; sputum is the priority sample"],
["Fever, night sweats", "TNF and cytokine release, especially in the evening", "Active disease; ask specifically about drenching night sweats"],
["Weight loss, anorexia", "Chronic inflammation, catabolism", "Disease has been present for some time"],
["Haemoptysis", "Erosion into a bronchial or pulmonary vessel; mycetoma in an old cavity", "Can be massive — a red flag"],
["Chest pain", "Pleural inflammation or effusion", "Think pleural or pericardial disease"],
["Breathlessness", "Large effusion, widespread disease, anaemia", "Assess oxygen and effusion"],
["Hoarseness, dysphagia", "Laryngeal TB or mediastinal nodes", "Laryngeal TB is highly infectious"]])}
<h3>Extrapulmonary patterns (remember: 38% of Bhutan's notifications)</h3>
${tbl(["Site", "Typical presentation", "Best sample"], [
["<b>Lymph nodes</b> (commonest EPTB)", "Slow, matted, often multiple cervical nodes; may fistulate. \"Must have asymmetry, matting and &gt;1 node\" (BT-INT)", "Fine-needle aspirate or biopsy for Xpert and cytology"],
["<b>Pleural</b>", "Unilateral effusion, fever, pleuritic pain, dry cough", "Pleural fluid for exudate, ADA, Xpert; pleural biopsy if needed"],
["<b>TB meningitis</b>", "Headache, fever, neck stiffness, vomiting, then cranial-nerve palsies and drowsiness over days–weeks", "CSF: Xpert, culture, ADA, cell count; MRI brain"],
["<b>Pericardial</b>", "Fever, chest pain, effusion, raised JVP, pulsus paradoxus", "Echocardiogram; pericardial fluid Xpert/ADA"],
["<b>Bone and joint (Pott's disease)</b>", "Localised back pain, gibbus, cold abscess, paraparesis if cord compression", "Imaging, then biopsy or aspirate for Xpert/culture"],
["<b>Abdominal</b>", "Pain, distension, ascites, fever, weight loss", "Ascitic fluid (ADA, Xpert); imaging; biopsy"],
["<b>Genitourinary</b>", "Sterile pyuria, frequency, flank pain", "Urine for Xpert/culture"],
["<b>Miliary / disseminated</b>", "Fever, wasting, breathlessness; tiny nodules on CXR; may involve liver, spleen, marrow", "CXR, blood/liver/marrow culture, Xpert on blood if HIV-positive"]])}
${box("red", "Red flags", `<ul>
<li><b>Haemoptysis</b> — can exsanguinate; assess urgently and control bleeding.</li>
<li><b>Headache, vomiting, stiff neck, drowsiness or focal signs</b> — TB meningitis: start treatment and steroids <b>on clinical grounds</b>; do not wait for bacteriology.</li>
<li><b>Jaundice, vomiting, abdominal pain on treatment</b> — drug-induced liver injury: stop all anti-TB drugs and check liver tests.</li>
<li><b>Blurred or altered colour vision</b> on ethambutol — stop ethambutol at once.</li>
<li><b>Breathlessness with a large effusion or pericardial tamponade</b> — drain or refer now.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Argues against", "Best test to separate"], [
["Bacterial or viral pneumonia", "Fever, cough, consolidation", "Acute onset (days, not weeks); upper-lobe cavity is unusual", "Response to antibiotics; Xpert and culture negative"],
["Lung cancer", "Cough, weight loss, haemoptysis, upper-lobe mass", "Usually older, heavy smoker; no fever/night sweats", "CT and biopsy; Xpert negative"],
["Community-acquired pneumonia that fails to clear", "Persistent symptoms and CXR shadow", "—", "Repeat imaging and Xpert: TB is the commonest cause of a \"non-resolving pneumonia\" in South Asia"],
["Lung abscess", "Cavity with air–fluid level, fever", "Sudden onset, putrid sputum, heavy alcohol use", "Culture; Xpert"],
["Bronchiectasis", "Chronic productive cough, haemoptysis", "No systemic illness between flares", "High-resolution CT"],
["Sarcoidosis", "Hilar nodes, cough, breathlessness", "Often bilateral hilar nodes, uveitis, erythema nodosum; no caseation", "Biopsy shows non-caseating granulomas; Xpert negative"],
["Lymphoma", "Lymph nodes, fever, sweats, weight loss", "Often rapid, symmetrical, other node groups", "Lymph node biopsy and histology"],
["Fungal or NTM infection", "Chronic cavitary disease", "Specific exposures or immunosuppression", "Mycology / mycobacterial culture"]])}
<h3>The typical patient</h3>
<p>A 34-year-old man from a rural district has coughed for a month, lost 6 kg and wakes drenched in sweat at night. He has no haemoptysis and no focal neurology. This is <b>pulmonary tuberculosis until proven otherwise</b>: the weeks-long cough, weight loss and night sweats are the classic triad, and the next step is a chest X-ray and Xpert MTB/RIF on sputum — not a trial of antibiotics. If the same patient had a headache, vomiting and a stiff neck, TB meningitis would move to the top of the list and treatment would begin immediately.</p>
` },

{ id: "invest", title: "Investigations and diagnosis", html: `
<h3>The diagnostic algorithm (BT-INT 2024)</h3>
<ol>
<li><b>Xpert MTB/RIF is the initial test for all presumptive TB, together with a chest X-ray.</b> It detects <i>M. tuberculosis</i> and rifampicin resistance in about two hours.</li>
<li>At GeneXpert sites, <b>smear microscopy is used only for follow-up</b>, not for diagnosis.</li>
<li>At non-GeneXpert sites, do a chest X-ray and <b>two</b> sputum smears, and send sputum to the nearest GeneXpert site (ship within 48 hours; freeze if delayed, never more than 3 days; aim for a result within 2 days of receipt).</li>
<li>If the patient cannot expectorate: induced sputum, bronchoscopy and bronchoalveolar lavage.</li>
<li><b>Any positive result → Xpert MTB/XDR</b> (10-colour) to look for isoniazid, fluoroquinolone, ethionamide and aminoglycoside resistance.</li></ol>
<h3>Sampling by site</h3>
${tbl(["Site", "Best samples", "Notes"], [
["Pulmonary", "Two sputum samples (spot and early morning)", "Xpert first; smear only for follow-up"],
["Lymph node", "Fine-needle aspirate or biopsy", "Xpert Ultra; cytology in parallel"],
["Pleural / peritoneal / pericardial", "Fluid (large volume) and biopsy", "Exudate by Light's criteria; <b>ADA &gt;40 U/L</b> supportive; Xpert Ultra on fluid and tissue"],
["CSF (meningitis)", "≥0.5 mL for Xpert, ≥1 mL for culture", "Xpert strongly recommended first; culture positive in up to 80%; ADA supportive; MRI the imaging of choice"],
["Disseminated (HIV-positive)", "Blood for Xpert Ultra; urine", "CRP &gt;5 mg/L may screen PLHIV"],
["Urine (genitourinary)", "Urine for Xpert", "Early-morning samples improve yield"]])}
<h3>Baseline tests before treatment</h3>
<p>Full blood count, random blood sugar, <b>liver tests</b>, albumin, renal function, uric acid and electrolytes; <b>HBsAg, anti-HCV and HIV</b> (with CD4 and viral load if positive); chest X-ray; culture for surveillance; and a pregnancy test in women of child-bearing age.${r(1)}</p>
${box("amber", "Two tests Bhutan does not yet list", `<p><b>LF-LAM</b> (urine lipoarabinomannan) and <b>Truenat</b> are recommended by WHO but are not mentioned in either Bhutan guideline. They matter in advanced HIV, where sputum can be smear- and Xpert-negative despite disseminated disease. ${LB.bt("EVIDENCE GAP")}</p>`)}
` },

{ id: "staging", title: "Classification, severity and treatment categories", html: `
<h3>Register the patient correctly — it decides the regimen</h3>
${tbl(["Category", "Definition", "Implication"], [
["<b>New</b>", "Never treated, or under one month of treatment", "Standard 2HRZE/4HR"],
["<b>Relapse</b>", "Previously treated and declared cured/completed, now bacteriologically positive again", "GeneXpert first; if no resistance, the same 2HRZE/4HR"],
["<b>Treatment after failure</b>", "Smear/culture positive at month 5 (or later) or a regimen changed for failure", "Reinvestigate fully for resistance"],
["<b>Treatment after loss to follow-up</b>", "Interrupted ≥2 consecutive months, then returns with positive bacteriology", "Xpert, then restart per the interruption rules"],
["<b>Drug-susceptible vs resistant</b>", "By Xpert MTB/XDR and culture/DST", "DS-TB regimen vs BPaLM and other DR-TB regimens"]])}
<h3>Resistance categories (BT-INT §2.6)</h3>
<ul>
<li><b>Mono-resistance</b> — resistance to one first-line drug. <b>Poly-resistance</b> — to more than one, but not both isoniazid and rifampicin.</li>
<li><b>MDR-TB</b> — resistant to at least isoniazid and rifampicin.</li>
<li><b>RR-TB</b> — rifampicin-resistant (with or without isoniazid resistance).</li>
<li><b>Pre-XDR</b> — RR plus fluoroquinolone resistance. <b>XDR</b> — RR plus fluoroquinolone resistance plus resistance to at least one other Group A drug (bedaquiline or linezolid).</li>
<li><b>Hr-TB</b> — isoniazid-resistant, rifampicin-susceptible.</li></ul>
<h3>Severity and referral</h3>
${tbl(["Situation", "Where to manage"], [
["Uncomplicated, smear-positive or -negative pulmonary TB", "Standard care at the nearest TB centre, with daily DOT"],
["Smear-positive at month 2 or any treatment failure", "Reassess adherence, send Xpert/culture, escalate to the TB specialist"],
["TB meningitis, miliary TB, pericardial effusion, spinal TB with neurology", "Admit; specialist and often surgical input"],
["Any rifampicin resistance on Xpert", "Start the DR-TB pathway immediately through the NTCP; do not wait for full DST"],
["Severe adverse drug reaction (DILI, optic neuritis, severe rash)", "Stop the offending drug(s) and refer same day"]])}
` },

{ id: "manage", title: "Management: drug-susceptible TB", html: `
<h3>The standard regimen</h3>
${box("green", "2HRZE / 4HR daily", `<p>Two months of <b>H</b> (isoniazid) + <b>R</b> (rifampicin) + <b>Z</b> (pyrazinamide) + <b>E</b> (ethambutol), then four months of <b>HR</b>. This is the regimen for <b>new pulmonary and extrapulmonary TB</b>, and — if no resistance is found — for every previously treated category too.${r(1, 3)}</p>`)}
${tbl(["Body weight", "Intensive phase (2 months): 4-FDC (H75/R150/Z400/E275)", "Continuation phase (4 months): 2-FDC (H75/R150)"], [
["&lt;35 kg", "2 tablets daily", "2 tablets daily"],
["35–54 kg", "3 tablets daily", "3 tablets daily"],
["&gt;55 kg", "4 tablets daily", "4 tablets daily"]])}
<p>Each 4-FDC tablet is H75 + R150 + Z400 + E275; each 2-FDC is H75 + R150. For a person <b>over 70 kg</b> the clinician may add <b>pyrazinamide 400 mg</b> in the intensive phase. A 5% single-drug stock is kept for managing adverse effects.${r(1)} <span class="warn">The guideline prints the top band as "&gt;55 kg"; treat 55 kg and above as 4 tablets but flag the ambiguity to the programme.</span></p>

<h3>The 4-month HPMZ option (selected patients only)</h3>
<p>For people <b>aged ≥12 years and over 40 kg</b> with drug-susceptible pulmonary TB, the 4-month regimen is <b>8 weeks of daily HPMZ (rifapentine 1200 mg, moxifloxacin 400 mg, isoniazid, pyrazinamide) then 9 weeks of HPM</b>. It is started <b>case by case after specialist consultation</b>, and is <b>excluded</b> in: weight under 40 kg; severe EPTB (TBM, disseminated, osteoarticular, abdominal); PLHIV with CD4 under 100; age under 12; and pregnant, breastfeeding or postpartum women. Do not substitute another fluoroquinolone for moxifloxacin, and do not extend beyond 4 months.${r(1, 3)}</p>

<h3>Site-specific regimens</h3>
${tbl(["Site", "Regimen", "Notes"], [
["Pulmonary and most EPTB", "2HRZE/4HR", "Standard"],
["<b>TB meningitis</b>", "<b>2HRZE/10HR</b> (12 months)", "Add dexamethasone (see below); admit; treat early and on clinical grounds"],
["<b>Bone and joint</b>", "2HRZE + HR, total <b>12 or 18 months</b> by response", "Culture and DST on every case"],
["Pleural, lymph node, pericardial, abdominal, genitourinary", "2HRZE/4HR", "Drain large effusions; ADA &gt;40 U/L supportive"]])}

<h3>TB meningitis: the dexamethasone schedule (BT-INT)</h3>
${box("red", "Steroids for TB meningitis", `<p>Dexamethasone, started with (or just before) the anti-TB drugs, reduces death and severe disability. <b>IV:</b> 0.4 mg/kg/day in week 1, 0.3 in week 2, 0.2 in week 3, 0.1 in week 4. <b>Oral:</b> 4 mg/day in week 5, 3 mg in week 6, 2 mg in week 7, 1 mg in week 8 (8 weeks total).${r(1)} Children use prednisolone (see the child chapter).</p>`)}

<h3>Follow-up sputum and what a positive smear means</h3>
<ul>
<li><b>6-month regimen:</b> sputum smear at the <b>end of months 2, 4 and 6</b>. Still positive at month 4 → repeat at <b>month 5</b>.</li>
<li>Still positive at month 5 (after excluding resistance) → <b>treatment failure</b>: retreat, and consider the 4-month regimen with a specialist.</li>
<li>Any positive smear → <b>Xpert MTB/RIF</b>, then Xpert MTB/XDR if MTB is detected.</li>
<li>Positive at month 2 → check adherence, trace the baseline culture/DST, move to the continuation phase, and send Xpert plus culture/DST.</li>
<li><b>EPTB:</b> chest X-ray at follow-up (sputum only if the X-ray is abnormal); monitor clinically and by weight.</li></ul>

<h3>Missed doses and interruptions</h3>
${tbl(["Treatment taken so far", "Interruption", "Action"], [
["Under 1 month", "Under 2 weeks", "Continue"],
["Under 1 month", "2–8 weeks", "Restart the regimen"],
["Under 1 month", "Over 8 weeks", "Smear: if positive → treat as \"treatment after LTFU\" (Xpert, restart); if negative → continue"],
["1–2 months", "Under 2 weeks", "Continue"],
["1–2 months", "2–8 weeks", "Smear: if positive → add one extra month of intensive phase after Xpert excludes RR"],
["1–2 months", "Over 8 weeks", "Smear: if positive → retreatment after Xpert, culture and DST"],
["2 months or more", "2–8 weeks or over 8 weeks", "Smear: if positive (no RR) → retreatment after Xpert, culture and DST; if negative → continue"]])}
<p>Trace every missed appointment <b>within one day</b>, and remember that all <b>60 intensive-phase doses</b> must be completed.${r(1)}</p>
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card. Every card gives adult, child and pregnancy doses, kidney and liver adjustments, monitoring and the Bhutan listing.</p>
${tbl(["Drug", "Adult dose (daily)", "Key cautions"], [
[dr("isoniazid"), "5 mg/kg (max 300 mg)", "Peripheral neuropathy (give pyridoxine); hepatitis"],
[dr("rifampicin"), "10 mg/kg (max 600 mg)", "Orange secretions; major drug interactions; stop permanently for shock/purpura/thrombocytopenia"],
[dr("pyrazinamide"), "25 mg/kg (max 2,000 mg)", "Most hepatotoxic first-line drug; gout; thrice-weekly in renal failure"],
[dr("ethambutol"), "15–25 mg/kg (max 1,600 mg)", "Optic neuritis — stop on any vision change; thrice-weekly if CrCl &lt;30"],
[dr("rifapentine"), "3HP: 900 mg weekly · HPMZ: 1,200 mg daily", "Avoid in pregnancy/breastfeeding for HPMZ"],
[dr("levofloxacin"), "750–1,000 mg daily", "QT, tendinopathy; dose by kidney function; MDR-contact prevention"],
[dr("moxifloxacin"), "400 mg daily", "QT; not interchangeable with levofloxacin in BPaLM/HPMZ"],
[dr("bedaquiline"), "400 mg daily ×2 wk then 200 mg 3×/week", "ECG monitoring; hepatitis; part of BPaLM/BPaL"],
[dr("pretomanid"), "200 mg daily", "Contraindicated in pregnancy/breastfeeding"],
[dr("linezolid"), "600 mg daily (300 mg for toxicity)", "Monthly full blood count; peripheral/optic neuropathy"],
[dr("clofazimine"), "100 mg daily", "Reversible skin discoloration (warn the patient)"],
[dr("cycloserine"), "10–15 mg/kg (max 1,000 mg)", "CNS effects; give pyridoxine"],
[dr("ethionamide"), "15–20 mg/kg (max 1,000 mg)", "Severe nausea; hypothyroidism; avoid in pregnancy"],
[dr("delamanid"), "100 mg twice daily ×24 weeks", "ECG monitoring; low albumin caution"],
[dr("pyridoxine"), "25 mg daily (prevention); 50–75 mg (treatment)", "Give ≥12 h apart from ATT (Bhutan)"],
[dr("dexamethasone", "Dexamethasone (TBM)"), "0.4 → 0.1 mg/kg/day tapered over 8 weeks", "Give with (not instead of) anti-TB drugs"],
[dr("cotrimoxazole"), "960 mg daily (TB/HIV prophylaxis)", "Rash, hyperkalaemia, creatinine rise"],
[dr("dolutegravir"), "50 mg twice daily with rifampicin", "Rifampicin halves its level — double the dose"]])}
` },

{ id: "populations", title: "Pregnancy, HIV, diabetes and other special groups", html: `
<h3>TB and HIV</h3>
<ul>
<li><b>Test every TB patient for HIV</b> (provider-initiated testing), and give every person with HIV a chest X-ray plus Xpert.</li>
<li><b>ART within 2 weeks</b> of starting anti-TB treatment, regardless of CD4 count. <b>Exception: TB meningitis — delay ART by at least 4 weeks.</b> For MDR-TB, start ART within 8 weeks (within 2 weeks if CD4 &lt;50).</li>
<li>First-line ART with rifampicin: <b>TDF + 3TC + dolutegravir 50 mg twice daily</b> (rifampicin induces dolutegravir). With a protease-inhibitor regimen, use rifabutin instead of rifampicin.</li>
<li><b>Co-trimoxazole 960 mg daily</b> for every TB/HIV patient regardless of CD4, until TB treatment ends.</li>
<li><b>IRIS</b> (immune reconstitution inflammatory syndrome) usually appears within 3 months of starting ART and is more likely at CD4 &lt;50: paradoxical worsening of nodes, effusions or fever. Mild → NSAIDs; moderate/severe → steroids. Continue ART and anti-TB treatment.</li></ul>
<h3>TB and diabetes</h3>
<ul><li>The regimen is the same. Assess kidney function (both diseases threaten it), and <b>give pyridoxine with isoniazid</b>.</li>
<li>Rifampicin lowers levels of some oral hypoglycaemics; insulin is often needed during the intensive phase. Check glucose often.${r(1)}</li></ul>
<h3>Pregnancy and breastfeeding</h3>
<ul>
<li>First-line drugs are <b>safe in pregnancy</b> — give the full course. Give <b>pyridoxine 25 mg</b> to every pregnant and breastfeeding woman on isoniazid, and vitamin K to the newborn (rifampicin).</li>
<li><b>HPMZ and BPaLM are contraindicated</b> in pregnancy and breastfeeding. In DR-TB, use the 9-month <b>linezolid</b> variant (never ethionamide), and treatment may be deferred to the second trimester if the woman is stable with minimal disease.</li>
<li><b>Breastfeeding:</b> continue, with the mother wearing a mask and feeding in a ventilated room. Once TB in the baby is excluded, give the baby 6 months of preventive treatment plus BCG. For an MDR-TB mother, give expressed milk or formula.</li></ul>
<h3>Older adults, kidney and liver disease</h3>
<ul>
<li><b>Older adults:</b> same regimen; watch drug interactions, kidney function and liver tolerance.</li>
<li><b>Kidney failure:</b> isoniazid and rifampicin need no change. If CrCl &lt;30 mL/min or on dialysis, give <b>pyrazinamide 25–35 mg/kg and ethambutol 15–25 mg/kg three times a week</b>, after dialysis. Give pyridoxine.</li>
<li><b>Liver disease (by Child–Turcotte–Pugh):</b> Child A → 2HRE/7HR; Child B (8–10) → levofloxacin + H or R + E for 12–18 months; Child C → E + levofloxacin (± aminoglycoside) for 18–24 months. Check ALT weekly at first, then fortnightly.${r(1)}</li></ul>
` },

{ id: "scenarios", title: "Drug-resistant TB, DILI and other hard situations", html: `
<h3>Drug-resistant TB (DR-TB)</h3>
${box("red", "Rifampicin resistance on Xpert → act now", `<p>Start the DR-TB pathway immediately: assess for <b>BPaLM</b>, send for Xpert MTB/XDR, and send culture/DST to the reference laboratory. Repeat an invalid or error result; a second RR result on a fresh sample means start without delay. Xpert is <b>not</b> used to monitor treatment.${r(1)}</p>`)}
${tbl(["Regimen", "Who", "Core drugs and duration"], [
["<b>BPaLM</b> (preferred)", "RR/MDR-TB, age ≥14, eligible", "<b>B</b>edaquiline + <b>Pa</b> (pretomanid) + <b>L</b> (linezolid) + <b>M</b>oxifloxacin for <b>6 months (26 weeks)</b>"],
["<b>BPaL</b>", "When fluoroquinolone resistance is found", "Bedaquiline + pretomanid + linezolid; may extend to 9 months if cultures positive between months 4 and 6"],
["9-month all-oral", "When BPaLM not possible, FQ resistance excluded", "4–6 months Bdq(6 m)-Lzd(2 m)-Lfx/Mfx-Cfz-Z-E-Hh-Eto, then 5 months Lfx/Mfx-Cfz-Z-E (two variants)"],
["Longer regimen", "Extensive disease or severe EPTB", "18–20 Bdq(6 m)-Lfx-Lzd-Cfz, ≥15–17 months after culture conversion"],
["Pre-XDR / XDR", "Pre-XDR or XDR", "6 BPaL, or 6 Bdq-Lzd-Cfz-Cs-E-Z then 14 Lzd-Cfz-Cs-E-Z"],
["<b>Hr-TB</b>", "Isoniazid-resistant, rifampicin-susceptible", "6(H)REZ-Lfx daily; if no FQ possible, 6(H)RZE"]])}
<h4>BPaLM details (BT-INT §6.6)</h4>
<ul>
<li><b>Bedaquiline</b> 400 mg daily for 2 weeks then 200 mg three times a week (or 200 mg daily ×8 weeks then 100 mg daily). <b>Pretomanid</b> 200 mg daily. <b>Linezolid</b> 600 mg daily (300 mg for toxicity). <b>Moxifloxacin</b> 400 mg daily.</li>
<li><b>Eligible:</b> age ≥14; PTB or any EPTB <b>except CNS, osteoarticular and disseminated/miliary</b>; no prior exposure to the component drugs ≥4 weeks (or proven susceptibility); any HIV status; not XDR; not pregnant or breastfeeding.</li>
<li><b>Stop / caution before starting:</b> QTcF &gt;500 ms or significant arrhythmia; severe peripheral neuropathy; BMI &lt;17; Hb &lt;8 g/dL; platelets &lt;75,000; neutrophils &lt;1,000/mm³; ALT &gt;3× ULN; creatinine &gt;2× ULN; zidovudine/stavudine/didanosine; MAOIs.</li>
<li><b>ART with BPaLM:</b> dolutegravir plus two NRTIs.</li>
<li>If bedaquiline or pretomanid is stopped, stop the whole regimen. If linezolid is stopped in the first 4 weeks, stop all; after 4 weeks, continue bedaquiline + pretomanid.</li>
<li><b>Monitoring:</b> monthly cultures — <b>no conversion at or after month 4 signals failure</b>. Complete the 26 weeks within 8 months, then follow up for 12 months.</li></ul>
${box("amber", "A newer WHO regimen, not yet in Bhutan", `<p>In 2025 WHO recommended a second 6-month regimen, <b>BDLLfxC</b> (bedaquiline, delamanid, linezolid, levofloxacin, clofazimine), for MDR/RR-TB with or without fluoroquinolone resistance, in all ages and including pregnancy. Bhutan has <b>not</b> adopted it; it is noted here for completeness and future updates.${r(4, 8)}</p>`)}

<h3>Drug-induced liver injury (DILI)</h3>
${box("red", "When to stop all anti-TB drugs", `<p>Stop when <b>ALT/AST ≥5× upper limit of normal (with or without symptoms)</b>, or <b>≥3× ULN with symptoms or jaundice (bilirubin &gt;3 mg/dL)</b>.${r(1, 13)} India's workflow adds bilirubin ≥2× ULN. Lesser rises in cirrhosis may also warrant stopping.</p>`)}
<h4>Then reintroduce one drug at a time (BT-INT = ATS 2006)</h4>
<ol>
<li>When ALT is <b>&lt;2× ULN</b>, restart <b>rifampicin with ethambutol</b>.</li>
<li>After <b>3–7 days</b>, recheck ALT and add <b>isoniazid</b>.</li>
<li>If symptoms or ALT recur, stop the last drug added. A <b>cholestatic</b> pattern points to rifampicin.</li>
<li>After prolonged or severe DILI in which isoniazid and rifampicin are tolerated, <b>omit pyrazinamide permanently and extend to 9 months</b>.</li></ol>
<p>If treatment is urgently needed (meningitis, smear-positive PTB, pericarditis), bridge with a <b>non-hepatotoxic combination of a fluoroquinolone plus ethambutol (± an aminoglycoside)</b> while the liver recovers. Before reintroduction, exclude viral hepatitis (HBsAg, anti-HCV, IgM anti-HAV, anti-HEV), alcohol, co-trimoxazole and ART as the cause.${r(10, 13)}</p>

<h3>Other hard situations</h3>
${tbl(["Situation", "What to do"], [
["Smear-positive at month 2", "Check adherence; trace baseline culture/DST; send Xpert + culture/DST; continue to continuation phase"],
["Smear-positive at month 5", "Treatment failure: full reassessment, Xpert MTB/XDR, retreatment decision with a specialist"],
["Severe rash / Stevens–Johnson", "Stop all drugs immediately and refer; do not rechallenge"],
["Rifampicin shock, purpura, thrombocytopenia, haemolytic anaemia or acute renal failure", "Stop rifampicin permanently; never give it again"],
["Optic neuritis on ethambutol", "Stop ethambutol at once; document acuity and colour vision; refer to ophthalmology"],
["Arthralgia on pyrazinamide", "Paracetamol or NSAIDs; fluids; check uric acid if persistent"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "How to recognise it", "Management"], [
["<b>Massive haemoptysis</b>", "Either", "Coughing frank blood, airway compromise", "Keep the bleeding side down; resuscitate; urgent bronchial artery embolisation or surgery where available"],
["<b>Respiratory failure (miliary / ARDS)</b>", "Late", "Worsening breathlessness, falling oxygen", "Oxygen, treat TB, consider steroids in disseminated disease; ICU"],
["<b>TB meningitis complications</b>", "Early", "Hydrocephalus, cranial-nerve palsies, stroke, SIADH (hyponatraemia)", "Steroids, repeated LP or shunt for hydrocephalus, supportive care"],
["<b>Pericardial tamponade / constriction</b>", "Early / late", "Raised JVP, hypotension, pulsus paradoxus", "Pericardiocentesis; steroids; late pericardiectomy for constriction"],
["<b>Spinal cord compression (Pott's)</b>", "Late", "Back pain, paraparesis, sensory level, bladder disturbance", "MRI, neurosurgery, full 12–18 month regimen"],
["<b>Pleural effusion / empyema</b>", "Early", "Breathlessness, dullness, effusion", "Therapeutic drainage; treat TB; steroids not routine"],
["<b>Post-TB lung disease</b>", "Late", "Bronchiectasis, aspergilloma, chronic breathlessness", "Symptomatic care; haemoptysis control"],
["<b>DILI and drug toxicity</b>", "Early", "Jaundice, vomiting, neuropathy, vision change, rash", "Per the drug cards and DILI pathway"]])}
<h3>Prognosis</h3>
<ul>
<li>With good adherence, drug-susceptible TB is <b>cured in about 85–95%</b> of cases; the death and failure concentrate in the undiagnosed, the lost-to-follow-up and the drug-resistant.</li>
<li>Mortality is higher in HIV co-infection, older age, miliary disease and meningitis; TB meningitis still kills or disables a substantial minority even with treatment.</li>
<li>Drug resistance, diabetes, smoking and malnutrition all worsen outcomes and are each worth treating aggressively.</li></ul>
` },

{ id: "followup", title: "Follow-up, prevention, contacts and counselling", html: `
<h3>During and after treatment</h3>
${tbl(["When", "What"], [
["At each visit (monthly)", "Symptoms, adherence, weight, adverse-effect review (ask about vision, numbness, nausea, rash)"],
["Months 2, 4, 6 (6-month regimen)", "Sputum smear; Xpert/culture if positive"],
["End of treatment", "Declare cured/completed; clinical and (for PTB) bacteriological closure"],
["After treatment", "Clinical follow-up as the programme directs; re-investigate any recurrence of symptoms"]])}
<h3>TB preventive treatment (TPT) — who and how</h3>
${box("green", "Give TPT without testing (after excluding active TB)", `<ul><li>Children <b>under 5 years</b> who are close contacts of pulmonary TB.</li><li><b>PLHIV</b> (adults, adolescents and children; infants under 12 months only if they had a TB contact). PLHIV on ART get a chest X-ray and TPT if it is normal.</li></ul>`)}
${box("green", "Give TPT after a TB infection test (TST)", `<ul><li>Adult <b>household contacts</b> of pulmonary TB (drug-susceptible and drug-resistant).</li><li>People on haemodialysis, immunosuppressive therapy or transplant.</li><li>Anti-TNF therapy and silicosis: test and treat.</li><li>Case by case: uncontrolled diabetes, harmful alcohol use, smokers, undernutrition.</li></ul>`)}
<p><b>Regimens (only these two for adults):</b> <b>3HP</b> — rifapentine + isoniazid weekly for 12 weeks (max 900 mg each); or <b>6H</b> — isoniazid 5 mg/kg daily (max 300 mg) for 6 months. Give <b>pyridoxine 25 mg</b> to anyone at risk of neuropathy, <b>≥12 h apart</b> from the anti-TB drugs.${r(1, 6)}</p>
<p><b>Contacts of MDR/RR-TB:</b> after individual assessment and a positive test, give <b>levofloxacin</b> for 6 months (over 14 years: &lt;46 kg 750 mg, ≥46 kg 1 g daily). Follow up for 2 years.${r(1)}</p>
<h3>Contact investigation (BT-INT)</h3>
<ul>
<li>Start <b>within 72 hours</b> of notification; report to the NTCP <b>within 7 days</b>.</li>
<li>A <b>household contact</b> shared an enclosed living space for one or more nights (or frequently) in the 3 months before treatment.</li>
<li>Infectious period goes back to <b>cough onset</b>, or 3 months if unknown.</li>
<li>All contacts get a symptom screen; chest X-ray is used in active case finding. Follow-up calls are 3-monthly in year 1, then 6-monthly to 2 years.</li></ul>
${box("green", "What to tell the patient", `<ul>
<li>"TB is curable, but only if you finish every dose. Stopping early is how the germ learns to resist the medicines."</li>
<li>"Take your tablets at the same time each day; your urine, sweat and tears will turn orange — that is normal and harmless."</li>
<li>"Tell me at once about yellow eyes, vomiting, numbness in your hands or feet, or any change in your eyesight."</li>
<li>"For the first weeks, cover your mouth when you cough and keep windows open; you stop being infectious quickly once treatment starts."</li>
<li>"Your close contacts must be checked and treated, especially the children — that is how we stop TB in the family."</li></ul>`)}
${box("red", "Come back or seek help immediately if", `<ul><li>Coughing up blood, or becoming breathless.</li><li>Headache, vomiting, stiff neck or drowsiness.</li><li>Yellow eyes or skin, or severe nausea and vomiting.</li><li>Blurred vision or loss of colour vision.</li><li>New weakness or numbness, especially after starting treatment.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>Pulmonary tuberculosis on chest X-ray</h3>
<div class="pair">
${fig({ title: "Advanced bilateral pulmonary tuberculosis", src: "images/tb-cxr-advanced.jpg", mod: "Chest X-ray (anteroposterior)", ctx: "Adult with far-advanced pulmonary TB", loc: "Both lungs, worse at the right apex", find: "Bilateral pulmonary infiltrates (white triangles) and a thick-walled cavity in the right apical region (black arrows)", signs: "Cavitation, upper-zone infiltrates", interp: "Cavitary upper-zone disease is the classic adult pattern. Cavitation means a high bacillary load and high infectivity — isolate and treat promptly", ddx: "Lung abscess, cavitating cancer, fungal disease", by: "CDC Public Health Image Library (PHIL #2543)", page: "https://commons.wikimedia.org/wiki/File:Tuberculosis-x-ray-1.jpg", lic: "Public domain" })}
${fig({ title: "Miliary tuberculosis", src: "images/tb-miliary-cxr.jpg", mod: "Chest X-ray", ctx: "82-year-old with fever and malaise; miliary TB", loc: "Both lungs, diffusely", find: "Fine, widespread bilateral interstitial and nodular infiltrates (millet-seed pattern)", signs: "Miliary pattern", interp: "Tiny uniform nodules throughout both lungs mean haematogenous dissemination — think HIV, immunosuppression or advanced age, and look for meningitis", ddx: "Viral pneumonitis, sarcoidosis, metastases, pneumoconiosis", by: "Herreros B et al., Pathogens 2018;7(3):72", page: "https://commons.wikimedia.org/wiki/File:Chest_radiograph_of_miliary_tuberculosis_1.jpg", lic: "CC BY 4.0" })}
</div>
<h3>Seeing the bacillus and the granuloma</h3>
<div class="pair">
${fig({ title: "Acid-fast bacilli (Ziehl–Neelsen stain)", src: "images/tb-afb-zneelsen.jpg", mod: "Sputum smear microscopy", ctx: "Sputum from a patient with pulmonary TB", loc: "Extracellular and intracellular bacilli", find: "Red, slightly curved acid-fast bacilli against a blue background, magnified 1000×", signs: "Acid-fast bacilli", interp: "The appearance that defines the organism. In Bhutan, smear is now used for follow-up rather than diagnosis, because Xpert is faster and also tells you about rifampicin resistance", ddx: "Non-tuberculous mycobacteria look identical on smear — culture distinguishes them", by: "CDC / Dr. George P. Kubica (PHIL #5789)", page: "https://commons.wikimedia.org/wiki/File:Mycobacterium_tuberculosis_Ziehl-Neelsen_stain_02.jpg", lic: "Public domain" })}
${fig({ title: "Caseating granuloma in a lymph node", src: "images/tb-caseating-granuloma.jpg", mod: "Histopathology (H&E, 40×)", ctx: "Tuberculous lymphadenitis", loc: "Lymph node", find: "A core of amorphous pink necrotic debris (caseation, right half) bordered by epithelioid cells, Langhans giant cells and lymphocytes", signs: "Caseous necrosis with Langhans giant cells", interp: "The histological hallmark of TB. Caseation is the tissue price of the immune response that contains the bacillus", ddx: "Fungal granulomas, sarcoidosis (non-caseating)", by: "Department of Pathology, Calicut Medical College", page: "https://commons.wikimedia.org/wiki/File:Tuberculous_lymph_node_with_caseating_granuloma_40X.jpg", lic: "CC BY-SA 4.0" })}
</div>
<h3>Extrapulmonary disease</h3>
<div class="pair">
${fig({ title: "Cervical tuberculous lymphadenitis (scrofula)", src: "images/tb-cervical-lymphadenitis.jpg", mod: "Clinical photograph", ctx: "Tuberculous lymphadenitis with sinus formation", loc: "Neck", find: "Two enlarged cervical lymph nodes that have broken down and fistulated through the skin", signs: "Matted, discharging cervical nodes", interp: "In Bhutan lymph node TB is the commonest extrapulmonary form; the guideline requires asymmetry, matting and more than one node before calling it TB", ddx: "Bacterial abscess, malignancy, actinomycosis", by: "Mirmillon", page: "https://commons.wikimedia.org/wiki/File:Tuberculose_ganglionnaire_se_fistulisant.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Tuberculous granuloma in the lung (biopsy)", src: "images/tb-granuloma-tblb.jpg", mod: "Histopathology (transbronchial biopsy)", ctx: "Pulmonary TB diagnosed on biopsy", loc: "Lung parenchyma", find: "A granuloma with epithelioid cells and multinucleated Langhans giant cells", signs: "Epithelioid granuloma, Langhans giant cells", interp: "When sputum and Xpert are negative, a transbronchial or surgical biopsy showing caseating granulomas makes the diagnosis", ddx: "Sarcoidosis (non-caseating), hypersensitivity pneumonitis", by: "Wikimedia Commons contributor", page: "https://commons.wikimedia.org/wiki/File:Tuberculous_caseous_granuloma_(1)_TBLB.jpg", lic: "CC BY-SA 3.0" })}
</div>
<h3>Link-only images</h3>
<ul>
<li>Tree-in-bud and post-primary TB patterns (CT): <a href="https://commons.wikimedia.org/wiki/File:Chest_X-ray_and_CT_of_tree-in-bud_sign_post-primary_pulmonary_tuberculosis.jpg" target="_blank" rel="noopener">tree-in-bud (Commons)</a></li>
<li>Miliary TB CT: <a href="https://radiopaedia.org/cases/miliary-tuberculosis-7" target="_blank" rel="noopener">Radiopaedia case</a> (link only, non-commercial licence)</li>
<li>TB meningitis imaging: <a href="https://radiopaedia.org/articles/tuberculous-meningitis" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Diagnosis of presumptive TB (adult)", [
F.s("Cough ≥2 weeks, or cough + fever/night sweats/weight loss/haemoptysis/chest pain, or suggestive CXR"), F.a,
F.s("Chest X-ray + Xpert MTB/RIF on sputum (initial test for everyone)"), F.a,
F.d("Xpert detects MTB?"), F.a,
F.b([["Yes", F.s("Any positive → Xpert MTB/XDR (10-colour) for H, FQ, Eto, SLID resistance")], ["No", F.s("CXR abnormal or high suspicion? → bronchoscopy/BAL, other samples, or clinical diagnosis")]]), F.a,
F.s("Notify every bacteriologically confirmed case; test for HIV; baseline bloods; register and treat")])}
${F.chart("2 · Drug-susceptible TB treatment", [
F.s("New PTB/EPTB (no resistance)"), F.a,
F.s("2HRZE / 4HR daily, by weight band (2/3/4 FDC tablets)"), F.a,
F.d("Smear at month 2 positive?"), F.a,
F.b([["Yes", F.s("Check adherence; trace culture/DST; Xpert + culture; continue to CP")], ["No", F.ok("Continue to continuation phase")]]), F.a,
F.s("Sputum at months 4 and 6; positive at 5 → treatment failure → reassess"), F.a,
F.ok("Complete all 60 IP doses; declare cured/completed")])}
${F.chart("3 · Drug-induced liver injury", [
F.s("Symptoms (jaundice, vomiting) or ALT ≥5× ULN (or ≥3× with symptoms/jaundice)"), F.a,
F.s("Stop ALL anti-TB drugs; exclude viral hepatitis, alcohol, co-trimoxazole, ART"), F.a,
F.d("Urgent need for treatment (TBM, smear-positive PTB, pericarditis)?"), F.a,
F.b([["Yes", F.s("Bridge with FQ + ethambutol (± aminoglycoside)")], ["No", F.s("Wait for ALT to settle")]]), F.a,
F.s("ALT <2× ULN → restart rifampicin + ethambutol"), F.a,
F.s("3–7 days → add isoniazid; if ALT rises, stop last drug"), F.a,
F.ok("Severe DILI with H+R tolerated → omit Z permanently, extend to 9 months")])}
${F.chart("4 · Rifampicin resistance", [
F.s("Rifampicin resistance on Xpert"), F.a,
F.s("Assess for BPaLM; send Xpert MTB/XDR; culture/DST to reference lab"), F.a,
F.d("Eligible for BPaLM (≥14 y, no exclusion)?"), F.a,
F.b([["Yes", F.ok("BPaLM 6 months (Bdq + Pa + Lzd + Mfx); monthly cultures")], ["No / FQ-resistant", F.s("BPaL, or 9-month all-oral, or longer regimen per NTCP")]]), F.a,
F.ok("Monthly cultures; no conversion by month 4 = failure")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Test early, test sputum.</b> Every week of untreated pulmonary TB is a week of transmission; Xpert plus a chest X-ray is the answer to most "what is this cough?".</li>
<li><b>A "non-resolving pneumonia" is TB until proven otherwise</b> in South Asia.</li>
<li><b>Extrapulmonary TB is common in Bhutan (38%)</b> — and a chest X-ray plus sputum bacteriology are mandatory in every EPTB case, because some "EPTB" is actually PTB.</li>
<li><b>Treat meningitis on suspicion.</b> You will never regret starting treatment and dexamethasone early; you will regret waiting for a culture.</li>
<li><b>Always give pyridoxine</b> to anyone at risk of neuropathy on isoniazid — and in Bhutan, 12 hours apart from the anti-TB drugs.</li>
<li><b>Ask about vision and numbness at every visit</b> — the two toxicities patients often do not volunteer.</li>
<li><b>Drug resistance is a programme decision.</b> The moment rifampicin resistance appears, the patient belongs in the NTCP DR-TB pathway.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Treating " + dr("ethambutol") + " without baseline and follow-up vision checks", "Irreversible optic neuropathy", "Document acuity and colour vision at baseline; stop on the first complaint"],
["Giving a fluoroquinolone " + dr("levofloxacin") + " for a common pneumonia in an undiagnosed TB patient", "Masks and delays TB, and can breed fluoroquinolone resistance", "Think TB before broad-spectrum antibiotics in a chronic cough"],
["Restarting all four drugs at once after DILI", "Re-triggers liver injury and you cannot tell which drug caused it", "Reintroduce one at a time (R+E, then H, then reconsider Z)"],
["Treating rifampicin resistance with a drug-susceptible regimen", "Failure and amplification of resistance", "Rifampicin resistance → DR-TB pathway immediately"],
["Stopping treatment because the patient feels better", "Relapse and acquired resistance", "Finish all 60 intensive-phase doses; trace every missed appointment within a day"],
["Missing pyridoxine in pregnancy, diabetes, HIV, alcohol or malnutrition", "Preventable neuropathy", "Screen for the at-risk list at the first visit"],
["Forgetting that rifampicin interacts with almost everything", "Contraceptive failure, unstable INR, lost ART efficacy", "Review the whole drug list at every visit; dolutegravir 50 mg twice daily with rifampicin"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "What defines a \"presumptive TB\" case in Bhutan?", "Cough of 2 weeks or more on its own; or cough of any duration with fever, night sweats, weight loss, haemoptysis or chest pain; or a chest X-ray suggestive of TB.")}
${qa("Intern/MO", "What is the initial diagnostic test for all presumptive TB in Bhutan, and what always accompanies it?", "Xpert MTB/RIF on sputum, together with a chest X-ray. Smear microscopy is used only for follow-up at GeneXpert sites.")}
${qa("Intern/MO", "A pleural effusion is an exudate with ADA 62 U/L and a negative Xpert. What is the likely diagnosis?", "Tuberculous pleural effusion: ADA above 40 U/L is strongly supportive even when Xpert is negative; send pleural biopsy for the best yield.")}
${qa("Specialist", "Why are a chest X-ray and sputum bacteriology mandatory in every extrapulmonary TB case in Bhutan?", "Because 38% of notifications are EPTB (suggesting over-diagnosis), and some apparent EPTB is in fact pulmonary TB — the source of transmission.")}
</div>
<div class="qgroup"><h3>Treatment and doses</h3>
${qa("Intern/MO", "State the standard drug-susceptible regimen and the weight-band tablet counts.", "2HRZE/4HR daily. Weight bands: under 35 kg 2 FDC tablets, 35–54 kg 3, above 55 kg 4; add pyrazinamide 400 mg if over 70 kg.")}
${qa("Intern/MO", "What does each 4-FDC tablet contain?", "Isoniazid 75 mg + rifampicin 150 mg + pyrazinamide 400 mg + ethambutol 275 mg.")}
${qa("Intern/MO", "When can the 4-month HPMZ regimen be used, and who is excluded?", "Age 12 years or more and over 40 kg with drug-susceptible PTB, started after specialist consultation. Excluded: weight under 40 kg, severe EPTB, CD4 under 100, age under 12, and pregnancy/breastfeeding.")}
${qa("Specialist", "Give the TB meningitis regimen and steroid schedule.", "2HRZE/10HR (12 months) with dexamethasone: IV 0.4 mg/kg/day week 1, 0.3 week 2, 0.2 week 3, 0.1 week 4; then oral 4/3/2/1 mg/day over weeks 5–8.")}
</div>
<div class="qgroup"><h3>Drug resistance and DILI</h3>
${qa("Intern/MO", "Rifampicin resistance is reported on Xpert. What are the immediate steps?", "Assess for BPaLM, send for Xpert MTB/XDR, send culture/DST to the reference laboratory, and start the DR-TB pathway — do not wait for full DST.")}
${qa("Intern/MO", "List the drugs in BPaLM and the monitoring.", "Bedaquiline, pretomanid, linezolid and moxifloxacin for 26 weeks. Monitor monthly cultures (no conversion at or after month 4 = failure) and ECG (weeks 2, 4, 8, 12, 24).")}
${qa("Intern/MO", "When do you stop all anti-TB drugs for suspected DILI?", "ALT/AST 5× ULN or more with or without symptoms, or 3× ULN or more with symptoms or jaundice (bilirubin over 3 mg/dL).")}
${qa("Specialist", "Describe the reintroduction sequence after DILI.", "When ALT is under 2× ULN, restart rifampicin + ethambutol; after 3–7 days add isoniazid; if ALT or symptoms recur stop the last drug; if DILI was severe, omit pyrazinamide permanently and treat for 9 months.")}
</div>
<div class="qgroup"><h3>Prevention and special populations</h3>
${qa("Intern/MO", "Who gets TB preventive treatment without a test, and who needs a TST first?", "Without testing: children under 5 who are close contacts, and PLHIV (adults, adolescents, children). After a TST: adult household contacts, dialysis/transplant/immunosuppressed, anti-TNF and silicosis.")}
${qa("Intern/MO", "Name the two TPT regimens used for adults in Bhutan.", "3HP (rifapentine + isoniazid weekly for 12 weeks) and 6H (isoniazid 5 mg/kg daily, max 300 mg, for 6 months).")}
${qa("Intern/MO", "How do you time ART in a patient with TB meningitis?", "Delay ART by at least 4 weeks; for other TB, start ART within 2 weeks regardless of CD4.")}
${qa("Viva", "Why is dolutegravir given twice daily with rifampicin?", "Rifampicin induces the enzymes that metabolise dolutegravir, halving its level — so the dose is doubled to 50 mg twice daily.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated National Guidelines for Management of Tuberculosis in Bhutan, 8th ed., 2024 update. <a href="https://moh.gov.bt/wp-content/uploads/2025/03/Integrated-National-Guidelines-for-Management-of-TB-in-Bhutan_2024-update.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
<li id="ref-2">Ministry of Health, Bhutan. National Guidelines for Management of Pediatric TB in Bhutan, 2024 update. <a href="https://moh.gov.bt/wp-content/uploads/2025/03/National-Guidelines-for-Management-of-Pediatric-TB-in-Bhutan_2024-update.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
<li id="ref-3">World Health Organization. WHO consolidated guidelines on tuberculosis. Module 4: treatment and care. Geneva, 2022 (updated 15 April 2025). <a href="https://www.who.int/publications/i/item/9789240107243" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">World Health Organization. WHO consolidated guidelines on tuberculosis. Module 4: drug-resistant tuberculosis treatment, 2022 (2025 update). <a href="https://www.who.int/publications/i/item/9789240125124" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-5">World Health Organization. WHO consolidated guidelines on tuberculosis. Module 5: management of tuberculosis in children and adolescents. Geneva, 2022. <a href="https://www.who.int/publications/i/item/9789240046764" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-6">World Health Organization. Operational handbook on tuberculosis. Module 5: management of tuberculosis in children and adolescents. Geneva, 2022. <a href="https://www.who.int/publications/i/item/9789240046832" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-7">World Health Organization. WHO consolidated guidelines on tuberculosis. Module 1: prevention — tuberculosis preventive treatment, 2nd ed. Geneva, 2024. <a href="https://www.who.int/publications/i/item/9789240096196" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-8">World Health Organization. WHO consolidated guidelines on tuberculosis. Module 3: diagnosis — rapid diagnostics, 4th ed. Geneva, 2025. <a href="https://www.who.int/publications/i/item/9789240089501" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-9">World Health Organization. Global Tuberculosis Report 2024. Geneva, 2024. <a href="https://www.who.int/teams/global-tuberculosis-programme/tb-reports/global-tuberculosis-report-2024" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-10">World Health Organization. News release: WHO announces landmark changes in treatment of drug-resistant tuberculosis (BDLLfxC). 15 April 2025. <a href="https://www.who.int/news/item/15-04-2025-who-announces-landmark-changes-in-treatment-of-drug-resistant-tuberculosis" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-11">ICMR, Department of Health Research, India. Standard Treatment Workflows: Tuberculosis and Extrapulmonary TB (Special Edition), and ATT Hepatitis. New Delhi, March 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-12">Central TB Division, Ministry of Health and Family Welfare, India. Guidelines for Programmatic Management of Drug Resistant TB in India. 2021. <a href="https://tbcindia.gov.in/showfile.php?lid=3590" target="_blank" rel="noopener">tbcindia.gov.in</a></li>
<li id="ref-13">INDEX-TB Guidelines on extrapulmonary tuberculosis for India. 2016.</li>
<li id="ref-14">Saukkonen JJ, Cohn DL, Jasmer RM, et al. An Official ATS Statement: Hepatotoxicity of Antituberculosis Therapy. Am J Respir Crit Care Med 2006;174:935–952. <a href="https://www.atsjournals.org/doi/10.1164/rccm.200510-1666ST" target="_blank" rel="noopener">doi:10.1164/rccm.200510-1666ST</a></li>
<li id="ref-15">Nahid P, Mase SR, Migliori GB, et al. Treatment of Drug-Resistant Tuberculosis: An Official ATS/CDC/ERS/IDSA Clinical Practice Guideline. Am J Respir Crit Care Med 2019;200:e93–e142. <a href="https://doi.org/10.1164/rccm.201909-1874ST" target="_blank" rel="noopener">doi:10.1164/rccm.201909-1874ST</a></li>
<li id="ref-16">Harrison's Principles of Internal Medicine, 21st ed.; Oxford Handbook of Clinical Medicine — foundational pathophysiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Diagnostic algorithm", "<span class='pass'>Verified</span>", "BT-INT 2024 §3.4; Xpert MTB/RIF first + CXR"],
["Drug-susceptible regimens", "<span class='pass'>Verified</span>", "2HRZE/4HR, TBM, bone, HPMZ — read directly from BT-INT 2024"],
["DR-TB regimens (BPaLM/BPaL, 9-month, longer, pre-XDR/XDR, Hr-TB)", "<span class='pass'>Verified</span>", "BT-INT 2024 §6; BDLLfxC (WHO 2025) noted as not yet adopted"],
["DILI thresholds and reintroduction", "<span class='pass'>Verified</span>", "BT-INT §7.9.2 = ATS 2006; ICMR addendum noted"],
["Adult FDC weight bands", "<span class='flag'>Flag</span>", "Top band printed \"&gt;55 kg\"; treated as ≥55 with a note to confirm"],
["Weight-band and drug doses", "<span class='pass'>Checked</span>", "Cross-checked against BT-INT, WHO Module 4/5 and BNF"],
["6HRZEto child-meningitis doses", "<span class='pass'>Checked</span>", "WHO Module 5 operational handbook (R 22.5–30, H 15–20 max 400, Z 35–45, Eto 17.5–22.5 max 750)"],
["Bhutan national incidence figure", "<span class='flag'>Evidence gap</span>", "Not in the sources reviewed; WHO country profile should be added"],
["LF-LAM and Truenat", "<span class='flag'>Not in Bhutan guideline</span>", "WHO-recommended but absent from BT-INT/BT-PED; flagged"],
["Images", "<span class='pass'>Done</span>", "Six Commons images; licences checked per file (public domain, CC BY 4.0, CC BY-SA 4.0/3.0)"],
["References", "<span class='pass'>Done</span>", "All traceable; DOIs/links where available"]], "qc")}
` }
]
});
