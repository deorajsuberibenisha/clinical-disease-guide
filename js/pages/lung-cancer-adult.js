/* Lung cancer (bronchogenic carcinoma) — adults. Batch E-5, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §3.10 Bronchogenic carcinoma (risk factors, symptoms, signs, CXR, CBC, CT/MRI, supportive care, refer for
   surgery/chemo/radiotherapy); NEML 2025.
   NICE NG12 Suspected cancer (lung section, 2015 recommendations) and NICE NG122 Lung cancer: diagnosis and management (2019, last updated 2024/2026) —
   diagnosis and staging, management, SCLC and palliative chapters read in the browser.
   USPSTF 2021 screening statement (JAMA 325:962) and WHO lung cancer fact sheet (16 Apr 2026) — read by the fetch agent from the source pages.
   Merck Manual Professional "Lung carcinoma" (Velez; updated Oct 2026) — burden, never-smokers, AJCC 9th edition staging in use, SCLC limited vs extensive.
   Not read: IASLC TNM tables (T/N/M definitions are not reproduced here), NCCN/ESMO. Systemic therapy is summarised at the level of principles. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "lung-cancer-adult",
title: "Lung cancer — adults",
subtitle: "A smoker over 40 with a cough that will not go, blood in the sputum or a shadow that does not clear: get a chest X-ray early, refer fast, and give good symptom care whatever the stage",
age: "Adults", specs: ["onc", "resp", "medicine", "surg"],
keywords: ["lung cancer", "bronchogenic carcinoma", "bronchial carcinoma", "non-small cell lung cancer", "NSCLC", "small cell lung cancer", "SCLC", "adenocarcinoma lung", "squamous cell carcinoma lung", "haemoptysis", "lung mass", "lung nodule", "EGFR mutation", "ALK", "PD-L1", "lung cancer screening", "low-dose CT", "superior vena cava obstruction", "Pancoast tumour", "malignant pleural effusion"],
related: ["copd-adult", "tb-adult", "lung-abscess-adult", "bronchitis-adult", "pneumonia-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Lung cancer is the world's leading cause of cancer death. Most patients in Bhutan will present late, often after months of treatment for "TB" or "chest infection". The doctor in a district hospital can change the outcome in two ways: by ordering an X-ray early and referring quickly, and by controlling pain, breathlessness and fear well when cure is not possible.</p>
<div class="glance">
<div><h4>Think of it</h4><p>Age 40+ with unexplained haemoptysis, or with cough, fatigue, breathlessness, chest pain, weight loss or poor appetite — especially if they have ever smoked ${r(2)}.</p></div>
<div><h4>First test</h4><p><b>Chest X-ray</b>; then contrast CT of chest, liver, adrenals and lower neck at a referral centre ${r(1, 3)}.</p></div>
<div><h4>Refer</h4><p>X-ray suggesting cancer, or unexplained haemoptysis at 40+ → urgent referral to a chest physician / lung cancer team ${r(2, 3)}.</p></div>
<div><h4>Care</h4><p>Stop smoking now; nutrition; analgesia; palliative radiotherapy, pleural drainage and opioids for cough and breathlessness ${r(1, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§3.10) lists tobacco, asbestos, silica, beryllium and genetic factors as causes, gives supportive care (nutrition, transfusion, analgesia), and refers for surgery, chemotherapy and radiotherapy ${r(1)}. CT is available at the national and regional referral hospitals; biopsy, histology and much of the oncology care (radiotherapy, molecular testing, targeted drugs and immunotherapy) usually require referral abroad under the government scheme. Because TB is common, every cavity or upper-lobe shadow needs sputum AFB / GeneXpert — but a negative TB test in a smoker with a persistent mass means <b>CT and biopsy, not empirical TB treatment</b> ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Definition", "Tumours arising in the lung parenchyma or bronchi " + r(1)],
["Burden", "Leading cause of cancer cases and deaths worldwide — about 2.5 million new cases and 1.8 million deaths in 2022 " + r(5, 6)],
["Risk factors", "Tobacco smoking (main cause), second-hand smoke, air pollution (including household solid fuel), occupational exposures (asbestos, silica, diesel), radon, chronic lung disease, genetic susceptibility " + r(1, 5)],
["Never-smokers", "About 15–20% of people with lung cancer have never or minimally smoked " + r(6)],
["Types", "Non-small cell (NSCLC, about 85% — adenocarcinoma, squamous cell, large cell) and small cell (SCLC, less common, more aggressive) " + r(5)],
["Staging", "TNM (current AJCC 9th edition); SCLC is also described as limited or extensive " + r(6)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Ways lung cancer causes symptoms", [F.s("Tumour in a bronchus → cough, haemoptysis, wheeze, collapse, post-obstructive pneumonia"), F.a, F.s("Local spread → pleura (effusion, pain), chest wall, superior vena cava, recurrent laryngeal nerve (hoarseness), oesophagus (dysphagia), brachial plexus (Pancoast)"), F.a, F.s("Metastases → liver, bone, brain, adrenals, lymph nodes"), F.a, F.d("Paraneoplastic syndromes — more often with SCLC (e.g. hyponatraemia, Cushing's, hypercalcaemia with squamous)")])}
<p>About a third of SCLC presents with limited-stage disease; most have spread at diagnosis ${r(6)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE NG12 / NG122", "USPSTF 2021", "This guide"], [
["When to X-ray", "Not specified", "Urgent X-ray at 40+ with 2 or more unexplained symptoms, or 1 if they have ever smoked; consider for persistent chest infection, clubbing, supraclavicular/persistent cervical nodes, chest signs, thrombocytosis", "—", "Use NICE criteria — an X-ray is cheap and available in every hospital " + LB.int()],
["Staging", "CXR, CBC, CT, MRI", "Contrast CT chest + liver, adrenals, lower neck before biopsy; PET-CT if curative treatment possible; EBUS for nodes", "—", "CT at JDWNRH/regional hospital; PET and EBUS by referral " + LB.loc()],
["Screening", "—", "Not in NG12/NG122", "Annual low-dose CT at 50–80 with 20 pack-years who smoke or quit within 15 years", "No screening programme in Bhutan; the priority is tobacco control and early X-ray for symptoms " + LB.loc()],
["Treatment", "Refer for surgery, chemo, radiotherapy", "Lobectomy for fit early NSCLC; SABR if inoperable; chemoradiotherapy for stage 3; systemic therapy by histology, mutations and PD-L1", "—", "Refer every suspected case; the specialist team chooses " + r(3)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>General: fever, anorexia, nausea, weight loss, tiredness ${r(1)}.</li>
<li>Chest: chronic cough, haemoptysis, breathlessness, pleuritic chest pain, stridor (upper airway obstruction) ${r(1)}.</li>
<li>Spread: cervical/supraclavicular lymph nodes, jaundice (liver), dysphagia (oesophagus), hoarseness, facial and arm swelling with distended neck veins (superior vena cava obstruction), bone pain, headache or fits (brain) ${r(1, 3)}.</li>
<li>Signs: pallor, clubbing, weight loss, lymphadenopathy, signs of collapse, consolidation or effusion ${r(1)}.</li>
<li>X-ray: unilateral hilar enlargement (central tumour or nodes); a peripheral apical lower-lobe tumour can mimic a big hilum ${r(1)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 61-year-old man from Samtse who smoked for 40 years has had a cough for 3 months and twice coughed up streaks of blood. He has lost 6 kg. Two courses of antibiotics did not help. Sputum AFB and GeneXpert are negative. The X-ray shows a 5 cm right hilar mass with collapse of the right upper lobe. <b>He meets the criteria for urgent referral</b>: arrange contrast CT of chest and upper abdomen, refer to the chest physician for bronchoscopy and biopsy, start smoking cessation, treat pain, and talk openly with him and his family about what the tests may show ${r(2, 3)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Pulmonary TB", "Upper-lobe cavity, night sweats; sputum AFB / GeneXpert positive — but TB and cancer can coexist"],
["Pneumonia that does not resolve", "Re-X-ray after 6 weeks in smokers over 40; persistent shadow → CT"],
["Lung abscess", "Fever, foul sputum, fluid level — cavitating squamous cancer can look identical"],
["Metastasis from another primary", "Multiple round nodules; known cancer elsewhere"],
["Benign nodule, hamartoma, granuloma", "Small, calcified, stable for years"],
["Hydatid cyst", "Endemic exposure; well-defined round lesion"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Chest X-ray</b> PA view; CBC ${r(1)}.</li>
<li><b>Contrast-enhanced CT</b> of chest including liver, adrenals and lower neck — before any biopsy ${r(3)}.</li>
<li><b>PET-CT</b> for anyone who could have treatment with curative intent ${r(3)}.</li>
<li>Tissue: image-guided biopsy for peripheral lesions; bronchoscopy for central lesions; EBUS-TBNA or EUS-FNA for enlarged (≥ 10 mm short axis) or PET-positive nodes when nodal stage changes treatment; sputum cytology only for central tumours when invasive tests are declined or not tolerated ${r(3)}.</li>
<li>Samples large enough for subtyping and <b>molecular markers</b> (next-generation sequencing panel) ${r(3)}.</li>
<li>Brain imaging: not routine in clinical stage 1 without symptoms; contrast CT for stage 2; MRI for stage 3 treated with curative intent ${r(3)}.</li>
<li>Bone: X-ray first for localised symptoms; bone scan or MRI if negative ${r(3)}.</li>
<li>Pleural fluid cytology if there is an effusion ${LB.exp()}.</li>
<li>Calcium, sodium, liver tests; spirometry and transfer factor before radical treatment ${r(3)}.</li>
</ul>` },
{ id: "staging", title: "Staging and fitness", html: `
<p>Lung cancer is staged with TNM (AJCC 9th edition currently in use) ${r(6)}; NICE's recommendations were written with the 7th edition ${r(3)}. The definitions are long and change between editions — use the staging tables of the treating centre.</p>
${tbl(["Group", "Broad meaning", "Typical approach (NICE)"], [
["NSCLC stage 1–2 (node-negative or limited nodes)", "Confined to the lung", "Lobectomy if fit; SABR or sublobar resection if lobectomy declined or contraindicated " + r(3)],
["NSCLC stage 3", "Mediastinal nodes or local invasion", "Chemoradiotherapy (± surgery in selected 3a N2); radical radiotherapy if chemo not possible " + r(3)],
["NSCLC stage 4", "Distant spread", "Systemic therapy by histology, mutation and PD-L1; palliative care " + r(3)],
["SCLC limited", "One hemithorax, treatable in one radiotherapy field", "4–6 cycles of platinum chemotherapy with concurrent (twice-daily) thoracic radiotherapy; prophylactic cranial irradiation " + r(3, 6)],
["SCLC extensive", "Beyond one hemithorax or malignant effusion", "Platinum + etoposide (± immunotherapy), up to 6 cycles; consider thoracic radiotherapy and PCI if responding " + r(3, 6)]
])}
<p><b>Fitness for surgery</b>: avoid surgery within 30 days of a myocardial infarction; spirometry and TLCO for everyone; predicted postoperative FEV₁ or TLCO below 30% does not exclude surgery if the patient accepts the risk; shuttle walk over 400 m or VO₂ max over 15 mL/kg/min indicate good function ${r(3)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. At the first contact (district hospital)</h3>
<ol>
<li>Chest X-ray; sputum AFB / GeneXpert if any doubt about TB ${r(1)} ${LB.loc()}.</li>
<li>Refer urgently if the X-ray suggests cancer or there is unexplained haemoptysis at 40+ ${r(2)}.</li>
<li>Advise stopping smoking as soon as cancer is suspected, explaining why; do not delay surgery to allow it ${r(3)}.</li>
<li>Supportive care: nutrition, blood transfusion if needed, analgesia ${r(1)}.</li>
</ol>
<h3>2. Curative intent (specialist centre)</h3>
<ul>
<li>Lobectomy (open or thoracoscopic) with lymph node sampling for fit early NSCLC ${r(3)}.</li>
<li>SABR for stage 1–2a NSCLC when surgery is declined or contraindicated; conventional radiotherapy if SABR is not possible (55 Gy in 20 fractions, or 60–66 Gy in 30–33 fractions) ${r(3)}.</li>
<li>Adjuvant platinum-based chemotherapy for good performance status with node-positive disease, and to be considered for node-negative tumours over 4 cm ${r(3)}.</li>
<li>Targeted adjuvant treatment after resection: osimertinib (EGFR exon 19 deletion or L858R, up to 3 years) or alectinib (ALK-positive) ${r(3)}.</li>
<li>Peri-operative immunotherapy for resectable tumours ≥ 4 cm or node-positive without EGFR/ALK alterations (nivolumab, durvalumab, pembrolizumab) ${r(3)}.</li>
</ul>
<h3>3. Advanced NSCLC</h3>
<p>Treatment follows histology (squamous vs non-squamous), driver mutations (EGFR, ALK, ROS1, RET, KRAS G12C, MET exon 14, BRAF V600) and PD-L1 (below or above 50%) — NICE keeps a separate pathway for each combination ${r(3)}. The practical message for a referring doctor: <b>a good biopsy with enough tissue for molecular testing</b> decides the drug.</p>
<h3>4. Palliative interventions</h3>
${tbl(["Problem", "What helps (NICE)"], [
["Symptoms from the primary or metastases", "Palliative radiotherapy " + r(3)],
["Large-airway obstruction", "External beam radiotherapy and/or endobronchial debulking or stenting " + r(3)],
["Pleural effusion", "Pleural aspiration or drainage; talc pleurodesis for lasting benefit " + r(3)],
["Breathlessness", "Breathing control, psychosocial support and coping strategies " + r(3) + "; low-dose oral morphine " + LB.exp()],
["Cough", "Opioids such as codeine or morphine " + r(3)],
["Hoarseness (recurrent laryngeal nerve palsy)", "ENT referral " + r(3)],
["Superior vena cava obstruction", "Chemotherapy and radiotherapy by stage; stent for severe symptoms " + r(3) + "; dexamethasone while arranging " + LB.exp()],
["Symptomatic brain metastases", "Dexamethasone, reduced to the lowest effective dose " + r(3)],
["Painful bone metastases", "Single-fraction radiotherapy if analgesics are not enough " + r(3)],
["Weight loss, poor appetite, depression, dysphagia", "Multidisciplinary supportive and palliative care " + r(3)]
])}` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("morphine", "Morphine")} — pain, breathlessness and cough; NEML ${r(3, 7)}.</li>
<li>${D("codeine", "Codeine")} — cough ${r(3)}.</li>
<li>${D("paracetamol", "Paracetamol")}, ${D("ibuprofen", "ibuprofen")} — mild pain ${r(1)}.</li>
<li>${D("dexamethasone", "Dexamethasone")} — brain metastases, SVC obstruction ${r(3)}.</li>
<li>Chemotherapy: ${D("cisplatin", "cisplatin")}, ${D("carboplatin", "carboplatin")}, ${D("etoposide", "etoposide")} — specialist use; check NEML level on each monograph.</li>
<li>Targeted and immunotherapy (specialist, usually by referral): ${D("osimertinib", "osimertinib")}, ${D("alectinib", "alectinib")}, ${D("pembrolizumab", "pembrolizumab")} ${r(3)}.</li>
<li>Smoking cessation: ${D("nicotine", "nicotine replacement")}, ${D("varenicline", "varenicline")}, ${D("bupropion", "bupropion")} — check NEML availability on each monograph.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Never-smoker, often a woman, adenocarcinoma", "Higher chance of EGFR or ALK alterations — molecular testing matters most " + LB.exp()],
["Old TB scar", "Cancer can arise in or near old scars; a new or growing shadow needs CT, not another TB course " + LB.loc()],
["Poor performance status", "Focus on symptom control; carboplatin in place of cisplatin for SCLC when renal function, performance status (WHO 2+) or comorbidity are poor " + r(3)],
["COPD", "Shares the cause; limits fitness for surgery — measure lung function early " + r(3)],
["Elderly", "Age alone does not exclude curative treatment; judge fitness " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["55-year-old ex-smoker with 4 weeks of cough and tiredness", "Two unexplained symptoms at 40+ (and ever smoked): urgent chest X-ray " + r(2)],
["45-year-old with a single episode of unexplained haemoptysis, normal X-ray", "Unexplained haemoptysis at 40+ → urgent referral " + r(2)],
["Facial swelling, distended neck veins, known right hilar mass", "SVC obstruction: sit up, oxygen, urgent oncology/radiotherapy referral; stent for severe symptoms " + r(3)],
["Large pleural effusion, breathless, advanced cancer", "Therapeutic aspiration; pleurodesis if it recurs and helps " + r(3)],
["Biopsy shows adenocarcinoma, stage 4", "Ensure tissue goes for molecular testing before first-line treatment " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Post-obstructive pneumonia, lung abscess, massive haemoptysis ${r(6)}.</li>
<li>Malignant pleural effusion, SVC obstruction, airway obstruction and stridor ${r(1, 3)}.</li>
<li>Brain, bone (fracture, cord compression), liver and adrenal metastases ${r(3)}.</li>
<li>Paraneoplastic: hyponatraemia (SIADH), hypercalcaemia, Cushing's syndrome, Lambert–Eaton syndrome ${LB.exp()}.</li>
<li>Venous thromboembolism ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Support from a named nurse or doctor through diagnosis and treatment ${r(3)}.</li>
<li>Smoking cessation for patient and family; avoid indoor smoke from stoves ${r(3, 5)}.</li>
<li>Early palliative care alongside cancer treatment; advance care planning with the family ${LB.exp()}.</li>
<li>Prevention for others: tobacco control is the most effective measure ${r(5)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Lung cancer on chest X-ray", src: "images/lung-cancer-cxr.jpg", mod: "Chest radiograph (PA)", ctx: "Lung cancer", find: "Mass lesion in the lung (edited teaching image)", signs: "Rounded opacity", interp: "Any persistent mass in a smoker over 40 needs CT and tissue", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Lung_Cancer_on_Chest_X-Ray.jpg", lic: "CC BY-SA 4.0" })}${fig({ title: "Pulmonary adenocarcinoma on CT", src: "images/lung-adenocarcinoma-ct.jpg", mod: "CT chest", ctx: "Pulmonary adenocarcinoma", loc: "Left lung", find: "A large mass in the left lung", interp: "Contrast CT of chest, liver and adrenals stages the disease before biopsy", by: "Yale Rosen", page: "https://commons.wikimedia.org/wiki/File:Pulmonary_adenocarcinoma,_left_lung,_CT_scan_Case_239_(7603361542).jpg", lic: "CC BY-SA 2.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected lung cancer (adult 40+)", [F.d("Unexplained haemoptysis, or symptoms (cough, fatigue, breathlessness, chest pain, weight or appetite loss)?"), F.a, F.s("Chest X-ray (urgent); sputum AFB / GeneXpert if TB possible"), F.a, F.b([["X-ray suggests cancer, or haemoptysis", F.e("Urgent referral: contrast CT chest + upper abdomen")], ["X-ray normal, symptoms persist", F.s("Review; refer if haemoptysis or ongoing concern")]]), F.a, F.s("Tissue diagnosis (biopsy / bronchoscopy / EBUS) with molecular testing; staging"), F.a, F.b([["Curative possible", F.ok("Surgery / SABR / chemoradiotherapy")], ["Advanced", F.s("Systemic therapy by histology and markers + palliative care")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Repeated antibiotic courses for a smoker's cough", "Months lost", "X-ray at 40+ with symptoms"],
["Starting TB treatment without bacteriology for a hilar mass", "Cancer missed", "GeneXpert; if negative, CT and biopsy"],
["Small biopsy without molecular testing", "Wrong first-line treatment in adenocarcinoma", "Ask for adequate tissue and NGS"],
["Withholding morphine for breathlessness", "Needless suffering", "Low-dose opioid with non-drug measures"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which patients need an urgent chest X-ray for possible lung cancer (NICE)?", "Age 40+ with 2 or more unexplained symptoms (cough, fatigue, breathlessness, chest pain, weight loss, appetite loss), or 1 if they have ever smoked.")}
${qa("Intern/MO", "What is the first staging test after the X-ray?", "Contrast-enhanced CT of the chest including liver, adrenals and lower neck, before any biopsy.")}
${qa("Specialist", "Who qualifies for screening under USPSTF 2021?", "Adults 50–80 with a 20 pack-year history who smoke or quit within 15 years: annual low-dose CT.")}
${qa("Specialist", "Treatment options for stage 1–2a NSCLC unfit for lobectomy?", "SABR or sublobar resection; conventional or hyperfractionated radiotherapy if SABR is contraindicated.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §3.10 Bronchogenic carcinoma.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral. NICE guideline NG12 — lung and pleural cancers (recommendations 2015). <a href="https://www.nice.org.uk/guidance/ng12" target="_blank" rel="noopener">nice.org.uk/guidance/ng12</a></li>
<li id="ref-3">National Institute for Health and Care Excellence. Lung cancer: diagnosis and management. NICE guideline NG122, March 2019 (last updated 2024). <a href="https://www.nice.org.uk/guidance/ng122" target="_blank" rel="noopener">nice.org.uk/guidance/ng122</a></li>
<li id="ref-4">US Preventive Services Task Force; Krist AH, Davidson KW, et al. Screening for lung cancer: US Preventive Services Task Force recommendation statement. JAMA 2021;325(10):962–970. <a href="https://doi.org/10.1001/jama.2021.1117" target="_blank" rel="noopener">doi:10.1001/jama.2021.1117</a></li>
<li id="ref-5">World Health Organization. Lung cancer — fact sheet, 16 April 2026. <a href="https://www.who.int/news-room/fact-sheets/detail/lung-cancer" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-6">Velez MA. Lung carcinoma. Merck Manual Professional Edition (peer reviewed by Rivera MP; last updated October 2026). <a href="https://www.merckmanuals.com/professional/oncology/tumors-of-the-lungs/lung-carcinoma" target="_blank" rel="noopener">merckmanuals.com</a></li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §3.10", "<span class='pass'>Checked</span>", "Read from the STG text"],
["NICE NG12 lung criteria", "<span class='pass'>Checked</span>", "Read in the browser"],
["NICE NG122 diagnosis, management, SCLC, palliation", "<span class='pass'>Checked</span>", "Read in the browser (2026 version)"],
["Screening criteria", "<span class='pass'>Checked</span>", "USPSTF 2021 " + r(4)],
["Burden figures", "<span class='pass'>Checked</span>", "WHO fact sheet 2026 and Merck"],
["TNM definitions", "<span class='unv'>Not reproduced</span>", "IASLC tables not read; staging described in broad groups only"],
["Systemic therapy details", "<span class='unv'>Principles only</span>", "Drug choice is a specialist decision; NICE pathways linked"],
["DOIs", "<span class='pass'>Checked</span>", "Crossref"],
["Images", "<span class='pass'>Checked</span>", "2 Commons images, licence checked per file"]
], "qc")}` }
]
});
})();
