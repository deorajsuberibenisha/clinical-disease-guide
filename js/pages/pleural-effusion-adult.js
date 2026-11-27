/* Pleural effusion and empyema — adults. NEW disease (batch N-1, 27 Nov 2026).
   Sources read directly: Bhutan STG 2024 §3.3 Pleural effusion (causes TB, bronchogenic carcinoma, CCF, nephrotic syndrome,
   cirrhosis; CXR, USG, pleural fluid analysis; analgesia and referral); Bhutan National TB guideline summary in this project
   (_work/research/tb-brief.md: pleural TB §4.4.2 — exudate by Light's criteria, Xpert + ADA over 40 U/L supportive; EPTB needs CXR
   and sputum; 2HRZE/4HR); BTS Guideline for pleural disease 2023 (Thorax, full text read — undiagnosed effusion, pleural infection,
   malignancy recommendations); Light 1972; MIST2 (Rahman NEJM 2011); Bhutan NEML 2025. */
registerPage({
id: "pleural-effusion-adult",
title: "Pleural Effusion & Empyema — Adults",
subtitle: "Fluid around the lung is a sign, not a diagnosis. In Bhutan the commonest causes are tuberculosis, heart failure, pneumonia and cancer. Tap it under ultrasound, sort transudate from exudate, check pH when infection is possible, drain infected fluid early, and treat the cause",
age: "Adults", specs: ["resp", "medicine", "id", "onc"],
keywords: ["pleural effusion", "empyema", "parapneumonic effusion", "complicated parapneumonic effusion", "tuberculous pleural effusion", "TB pleurisy", "malignant pleural effusion", "Light's criteria", "pleural fluid pH", "adenosine deaminase", "ADA", "thoracentesis", "pleural tap", "chest drain", "intercostal drain", "tPA DNase", "talc pleurodesis", "indwelling pleural catheter", "transudate", "exudate"],
related: ["tb-adult", "pneumonia-adult", "hf-adult", "cirrhosis-adult", "lung-cancer-adult", "pneumothorax-adult", "nephrotic-child", "oedema-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A pleural effusion is fluid between the lung and the chest wall. Both sides usually mean a whole-body cause (heart, kidney, liver). One side needs a diagnostic tap. In Bhutan, a one-sided exudate in a younger adult is tuberculosis until proven otherwise; in an older smoker, think of cancer.</p>
<div class="glance">
<div><h4>Signs</h4><p>Breathlessness, pleuritic pain; <b>stony dull</b> percussion, reduced breath sounds and vocal resonance on one side.</p></div>
<div><h4>Image</h4><p>Chest X-ray, then <b>ultrasound</b> — every tap should be image-guided (BTS strong).</p></div>
<div><h4>Tap</h4><p>Protein, LDH, glucose, <b>pH</b>, cell count, Gram stain and culture (in blood-culture bottles), AFB/Xpert, ADA, cytology 25–50 mL.</p></div>
<div><h4>Light's criteria</h4><p>Exudate if fluid/serum protein over 0.5, fluid/serum LDH over 0.6, or fluid LDH over 2/3 of the upper normal serum LDH.</p></div>
<div><h4>Infection</h4><p>Frank pus or <b>pH 7.2 or less</b> → chest drain (14 F or smaller) + antibiotics.</p></div>
<div><h4>TB</h4><p>Lymphocytic exudate with <b>ADA over 40 U/L</b> supports TB (Bhutan NTP); Xpert Ultra on fluid; treat 2HRZE/4HR.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan STG 2024 §3.3 lists pulmonary tuberculosis, bronchogenic carcinoma, heart failure, nephrotic syndrome and liver cirrhosis as causes; investigations are chest X-ray, chest ultrasound and pleural fluid analysis, with analgesia and referral for further management. The Bhutan TB guideline asks for a chest X-ray and sputum testing in every extrapulmonary TB case, Xpert Ultra on pleural fluid, and treats pleural TB with 2HRZE/4HR. ADA testing and pleural biopsy are available at JDWNRH and regional referral hospitals; check locally. Ceftriaxone, amoxicillin–clavulanate and metronidazole are on the NEML 2025. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes", html: `
${tbl(["Transudate (pressure or protein problem)", "Exudate (pleural disease or inflammation)"], [
["Heart failure (commonest; usually both sides)", "<b>Tuberculosis</b> (common in Bhutan, often in young adults)"],
["Cirrhosis with ascites (hepatic hydrothorax, often right)", "Pneumonia — parapneumonic effusion and empyema"],
["Nephrotic syndrome, kidney failure", "Cancer — lung, breast, lymphoma, metastatic; mesothelioma"],
["Severe hypoalbuminaemia (malnutrition)", "Pulmonary embolism (either type)"],
["Peritoneal dialysis", "Pancreatitis, subphrenic or amoebic liver abscess (right side)"],
["Hypothyroidism", "Rheumatoid arthritis, lupus; drugs; post-cardiac surgery"]])}
<p>Bhutan STG 2024 lists TB, bronchogenic carcinoma, heart failure, nephrotic syndrome and cirrhosis.${r(1)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Pleural fluid", [F.s("Normally a few mL; made and absorbed continuously"), F.a, F.b([["Transudate", F.s("High capillary pressure or low oncotic pressure — pleura healthy")], ["Exudate", F.s("Leaky inflamed pleura or blocked lymphatics")]]), F.a, F.e("Parapneumonic fluid → bacteria invade → fibrin and loculation (complicated) → pus (empyema)"), F.a, F.e("Untreated empyema → thick peel, trapped lung, sepsis")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan (STG 2024 / NTP)", "BTS 2023", "This guide"], [
["Imaging for taps", "CXR and USG listed", "Image-guided tap always (strong)", "Ultrasound for every tap and drain"],
["Diagnosing TB pleurisy", "Exudate + Xpert; ADA over 40 U/L supportive", "In high-prevalence areas ADA and/or IFN-γ can be used (conditional); tissue for culture preferred (strong)", "ADA + Xpert; pleural biopsy if unclear"],
["When to drain infected fluid", "Refer", "Pus, or pH ≤7.2 → drain; pH 7.2–7.4 with LDH over 900 IU/L → consider; pH ≥7.4 → no drain; glucose under 3.3 mmol/L if no pH", "BTS rules"],
["Drain size", "—", "14 F or smaller (conditional)", "Small-bore Seldinger drain"],
["Residual collection", "—", "tPA 10 mg + DNase 5 mg twice daily for 3 days (conditional); not single agent; not streptokinase", "Refer to JDWNRH; surgery (VATS/decortication) if fails"],
["Malignant effusion", "Refer", "Talc pleurodesis or indwelling catheter rather than repeated taps", "Refer; therapeutic taps for symptoms meanwhile"]])}
<p>Bhutan STG and TB guideline;${r(1)}${r(2)} BTS 2023.${r(3)} MIST2: tPA plus DNase improved drainage and reduced surgical referral compared with placebo or either drug alone.${r(5)}</p>
` },

{ id: "presentation", title: "Clinical features", html: `
<ul><li>Breathlessness (depends on size and speed), dry cough, pleuritic chest pain.</li><li>Fever, sweats, weight loss — TB, empyema, cancer.</li><li>Examination: reduced chest movement, <b>stony dull</b> percussion, absent breath sounds and vocal resonance; bronchial breathing above the fluid; trachea away from a large effusion (towards it if the lung has collapsed — think cancer).</li><li>Look for the cause: raised JVP and oedema (heart), ascites and jaundice (liver), oedema and proteinuria (kidney), breast lump, nodes, clubbing.</li></ul>
<h3>The typical patient</h3>
<p>Kinley, 24, a monk in Trashigang, has 3 weeks of fever, night sweats and right-sided chest pain, now breathless climbing stairs. The right lower chest is stony dull. X-ray shows a moderate right effusion; ultrasound-guided tap gives straw-coloured fluid: protein 52 g/L (serum 70), LDH 420 (serum 210, upper normal 250), lymphocytes 85%, glucose 4.8 mmol/L, ADA 68 U/L, Xpert negative on fluid and sputum. <b>Exudate by Light's criteria with high ADA: tuberculous pleural effusion</b>. He starts 2HRZE/4HR, is registered with the TB programme, and a therapeutic tap of 1 litre relieves his breathlessness.</p>
` },

{ id: "ddx", title: "Pleural fluid patterns", html: `
${tbl(["Fluid finding", "Points to"], [
["Transudate by Light's criteria", "Heart failure, cirrhosis, nephrotic syndrome — treat the cause; no repeated taps"],
["Lymphocytic exudate, ADA over 40 U/L", "Tuberculosis (also lymphoma)"],
["Neutrophilic exudate, low pH, low glucose, organisms", "Complicated parapneumonic effusion / empyema"],
["Frank pus", "Empyema — drain"],
["Blood-stained, cytology positive", "Malignancy"],
["Milky", "Chylothorax (triglyceride over 1.24 mmol/L) or pseudochylothorax (long-standing TB, rheumatoid)"],
["Very high amylase", "Pancreatitis, oesophageal rupture"],
["Low glucose, low pH, sterile", "Rheumatoid, TB, malignancy"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["Chest X-ray (PA, lateral)", "Size; underlying lung; blunted costophrenic angle needs about 200 mL"],
["<b>Thoracic ultrasound</b>", "Confirms fluid, septations, safe site for tap and drain"],
["Pleural fluid: protein, LDH (with serum protein and LDH)", "Light's criteria"],
["Pleural fluid pH (heparin-free blood-gas syringe, immediately), glucose", "Pleural infection decisions"],
["Cell count and differential", "Lymphocytes (TB, cancer) vs neutrophils (infection)"],
["Gram stain and culture in <b>blood-culture bottles</b> (5–10 mL each) plus a plain tube", "Higher yield (BTS)"],
["AFB smear, <b>Xpert Ultra</b>, TB culture, <b>ADA</b>", "Tuberculosis (Bhutan NTP)"],
["Cytology — 25–50 mL", "Malignancy (BTS)"],
["Sputum Xpert and CXR in all suspected TB", "Bhutan NTP requirement"],
["Serum NT-proBNP (if heart failure possible)", "Supports heart failure (BTS)"],
["CT chest with contrast, pleural biopsy (closed or thoracoscopic)", "Undiagnosed exudate, suspected cancer or TB with negative fluid tests"]])}
` },

{ id: "staging", title: "Pleural fluid calculator: Light's criteria and infection rules", html: `
<p>Enter fluid and serum values. The tool applies Light's criteria and the BTS 2023 pH, LDH and glucose rules for pleural infection.</p>
<div class="calc" data-calc="pleuralfluid"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>1. Relieve breathlessness</h3>
<ul><li>Oxygen if SpO₂ under 94% (88–92% in COPD).</li><li>Therapeutic ultrasound-guided aspiration for a large symptomatic effusion: stop at about 1.5 L or if chest tightness, cough or pain develops (risk of re-expansion oedema).</li></ul>
<h3>2. Transudate</h3>
<ul><li>Treat the cause: diuretics for heart failure (${dr("furosemide")}), management of cirrhosis or nephrotic syndrome. Do not tap repeatedly.</li></ul>
<h3>3. Parapneumonic effusion and empyema</h3>
<ul><li>Antibiotics covering pneumonia organisms and anaerobes: ${dr("ceftriaxone")} 2 g IV daily + ${dr("metronidazole")} 500 mg IV/oral 8-hourly, or ${dr("coamoxiclav")} IV then oral; adjust to culture.</li><li>Drain if frank pus, pH 7.2 or less, or pH 7.2–7.4 with LDH over 900 IU/L and other features (BTS 2023); small-bore drain (14 F or smaller) under ultrasound.</li><li>Flush small drains regularly; repeat ultrasound. Residual collection with a working drain: refer for tPA + DNase or surgery (VATS, decortication).</li><li>Total antibiotic course usually several weeks (often 3–6 weeks, guided by clinical, CRP and imaging response).</li></ul>
<h3>4. Tuberculous pleural effusion</h3>
<ul><li>Register and treat with the national regimen 2HRZE/4HR (see TB page). Therapeutic aspiration for breathlessness. Corticosteroids are not routinely used.</li><li>Test for HIV; screen household contacts.</li></ul>
<h3>5. Malignant pleural effusion</h3>
<ul><li>Find the primary (CT, cytology, biopsy); refer to oncology.</li><li>Recurrent symptomatic effusion: talc pleurodesis or an indwelling pleural catheter rather than repeated taps (BTS); meanwhile therapeutic taps for symptoms; palliative care involvement.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine", "Dose", "Notes"], [
[dr("ceftriaxone"), "2 g IV once daily", "With metronidazole for pleural infection"],
[dr("metronidazole"), "500 mg IV or oral 8-hourly", "Anaerobic cover"],
[dr("coamoxiclav", "Amoxicillin–clavulanate"), "1.2 g IV 8-hourly, then 625 mg oral 8-hourly", "Single-agent alternative (NEML 500/125 mg tablets)"],
["TB regimen (HRZE then HR)", "Weight-band fixed-dose combinations, 2 months HRZE + 4 months HR", "Bhutan NTP — see TB page"],
[dr("furosemide"), "20–40 mg oral or IV, adjust", "Transudates from heart failure"],
["Paracetamol / ibuprofen", "Paracetamol 1 g 6-hourly (max 4 g); ibuprofen 400 mg 8-hourly", "Pleuritic pain (Bhutan STG)"],
["tPA + DNase (intrapleural)", "tPA 10 mg + DNase 5 mg twice daily for 3 days", "Specialist only; not on NEML"]])}
<p>Antibiotic choices follow standard practice for pleural infection; BTS 2023 does not specify a regimen. Intrapleural doses: BTS 2023.${r(3)}</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>People with HIV</b>", "TB pleurisy more often with sputum-positive lung TB; Xpert on fluid and sputum; start ART per HIV guideline"],
["<b>Pregnancy</b>", "Ultrasound is safe; TB treatment as standard (pyridoxine with isoniazid)"],
["<b>Older smokers</b>", "Malignancy more likely — CT and cytology early"],
["<b>Children</b>", "Parapneumonic effusion and empyema with pneumonia — see pneumonia (child) page"],
["<b>Cirrhosis</b>", "Hepatic hydrothorax: do not insert a chest drain (large protein and fluid loss, infection) — treat ascites"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["No ultrasound at a district hospital", "Tap only a large, clearly dull effusion at the site of maximum dullness, one space below the top of dullness, posterior; refer if small or loculated"],
["No pH meter or blood-gas analyser", "Use pleural glucose under 3.3 mmol/L as the marker for drainage (BTS)"],
["Exudate, ADA high, Xpert negative", "Treat as TB in Bhutan's high-prevalence setting; send TB culture"],
["Pus drains but fever persists", "Repeat ultrasound for loculations; check drain position; refer for tPA/DNase or surgery"],
["Large effusion, patient in distress", "Therapeutic aspiration up to 1.5 L while arranging diagnosis"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Of the disease: empyema, trapped lung, pleural thickening, sepsis, bronchopleural fistula.</li><li>Of procedures: pneumothorax, bleeding, re-expansion pulmonary oedema, infection, liver or spleen puncture (low taps), vasovagal collapse.</li><li>Of TB pleurisy: residual pleural thickening.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Repeat chest X-ray after treatment; CT if symptoms persist after pleural infection (BTS: exclude hidden cancer).</li><li>TB: monthly review, weight, adherence, chest X-ray at the end of treatment.</li><li>Malignant effusion: palliative care, symptom diary, drain care at home if indwelling catheter.</li></ul>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Pleural effusion", src: "images/pleural-effusion-cxr.jpg", mod: "Chest radiograph (PA)", ctx: "Adult with a large effusion", loc: "Lower hemithorax", find: "Homogeneous opacity with a curved (meniscus) upper border, loss of the costophrenic angle and hemidiaphragm", interp: "Moderate to large pleural effusion — ultrasound-guided tap", by: "InvictaHOG (en.wikipedia)", page: "https://commons.wikimedia.org/wiki/File:Pleural_effusion.jpg", lic: "Public domain" })}
${fig({ title: "Pleural empyema", src: "images/empyema-cxr-ct.jpg", mod: "Chest radiograph and CT", ctx: "Adult with pleural infection", loc: "Pleural space", find: "Loculated pleural collection with thickened, enhancing pleura", interp: "Empyema — needs drainage and antibiotics", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Actinomyces_meyeri_67jm_mit_Pleuraempyem_-_Roe_pa_und_CT_WF_ax_-_001.jpg", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Pleural effusion on X-ray", [F.d("Both sides and clear heart/liver/kidney cause?"), F.a, F.b([["Yes", F.ok("Treat the cause; tap only if atypical or not improving")], ["No", F.e("Ultrasound-guided diagnostic tap")]]), F.a, F.d("Pus or pH ≤7.2?"), F.a, F.b([["Yes", F.e("Small-bore drain + antibiotics")], ["No", F.d("Exudate by Light's criteria?")]]), F.a, F.b([["No", F.ok("Transudate: treat cause")], ["Yes", F.s("Lymphocytic + ADA over 40 → TB; cytology positive → cancer; otherwise CT ± biopsy")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Blind tap without ultrasound", "Pneumothorax, organ injury", "Image-guided tap (BTS strong)"],
["Sending pH in a heparinised or air-filled syringe", "Falsely abnormal pH", "Heparin-free syringe, analyse at once"],
["Starting TB treatment without fluid analysis", "Missed cancer or empyema", "Tap first: protein, LDH, ADA, cytology"],
["Waiting for culture before draining pus", "Trapped lung", "Drain on pus or pH ≤7.2"],
["Draining a hepatic hydrothorax", "Fluid and protein loss, infection", "Treat ascites"],
["Removing 3 litres at once", "Re-expansion oedema", "Stop at 1.5 L or symptoms"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "State Light's criteria.", "Exudate if any one: fluid/serum protein over 0.5; fluid/serum LDH over 0.6; fluid LDH over two-thirds of the upper limit of normal serum LDH.")}
${qa("Student", "What are the commonest causes of pleural effusion in Bhutan?", "TB, heart failure, pneumonia (parapneumonic), cancer; also cirrhosis and nephrotic syndrome (STG 2024).")}
${qa("Intern/MO", "Pleural fluid pH 7.1 in a patient with pneumonia. What next?", "Insert a small-bore chest drain under ultrasound and continue antibiotics (BTS 2023).")}
${qa("Intern/MO", "Which pleural fluid test supports TB in Bhutan?", "ADA over 40 U/L in a lymphocytic exudate, with Xpert Ultra on the fluid (Bhutan NTP).")}
${qa("Specialist", "What does BTS 2023 recommend for a residual infected collection after drainage?", "Combined intrapleural tPA 10 mg and DNase 5 mg twice daily for 3 days; not single agent; not streptokinase.")}
${qa("Specialist", "Options for recurrent malignant effusion?", "Talc pleurodesis (slurry or poudrage) or an indwelling pleural catheter, chosen with the patient (BTS 2023).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §3.3 Pleural effusion.</li>
<li id="ref-2">National Tuberculosis Control Programme, Ministry of Health, Bhutan. National guideline for management of tuberculosis (pleural TB §4.4.2; regimens Table 5.1).</li>
<li id="ref-3">Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society guideline for pleural disease. Thorax 2023;78(Suppl 3):s1–s42. <a href="https://doi.org/10.1136/thorax-2022-219784" target="_blank" rel="noopener">doi:10.1136/thorax-2022-219784</a></li>
<li id="ref-4">Light RW, MacGregor MI, Luchsinger PC, Ball WC. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med 1972;77(4):507–513. <a href="https://doi.org/10.7326/0003-4819-77-4-507" target="_blank" rel="noopener">doi:10.7326/0003-4819-77-4-507</a></li>
<li id="ref-5">Rahman NM, Maskell NA, West A, et al. Intrapleural use of tissue plasminogen activator and DNase in pleural infection (MIST2). N Engl J Med 2011;365(6):518–526. <a href="https://doi.org/10.1056/NEJMoa1012740" target="_blank" rel="noopener">doi:10.1056/NEJMoa1012740</a></li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §3.3", "<span class='pass'>Read directly</span>", "Causes, investigations, referral"],
["Bhutan TB guideline", "<span class='pass'>Checked</span>", "From the project's TB brief (pleural TB, ADA over 40, 2HRZE/4HR)"],
["BTS 2023", "<span class='pass'>Read directly</span>", "Full text (Thorax): investigation, infection, malignancy"],
["Antibiotic regimen and duration for empyema", "<span class='unv'>Not read</span>", "Not in BTS 2023 summary; standard practice"],
["Therapeutic tap limit 1.5 L", "<span class='unv'>Not read</span>", "BTS procedures statement not read; widely used limit"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "pleuralfluid"]], "qc")}` }
]
});
