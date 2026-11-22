/* COPD — adults */
registerPage({
id: "copd-adult",
title: "COPD — Adults",
subtitle: "Smoke, spirometry and stepwise inhalers; managing exacerbations safely, including oxygen and NIV",
age: "Adults", specs: ["resp", "medicine", "emerg", "rehab"],
keywords: ["COPD", "chronic obstructive pulmonary disease", "emphysema", "chronic bronchitis", "exacerbation", "AECOPD", "spirometry", "FEV1/FVC", "GOLD", "mMRC", "CAT", "DECAF", "tiotropium", "LAMA", "LABA", "ICS", "salmeterol", "fluticasone", "salbutamol", "ipratropium", "prednisolone", "controlled oxygen", "88-92%", "NIV", "BiPAP", "cor pulmonale", "biomass smoke", "household air pollution", "pulmonary rehabilitation", "smoking cessation"],
related: ["asthma-adult", "pneumonia-adult", "hf-adult", "tb-adult"],
updated: "22 Nov 2026", review: "Nov 2027 (GOLD 2027 report released 18 Nov 2026: to be reviewed)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">COPD is lung damage from years of breathing smoke: tobacco, and in Bhutan very often the smoke of wood fires in the kitchen. It cannot be cured, but stopping the smoke, using inhalers properly and handling flare-ups well change how long and how well people live.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Age over 40 with breathlessness, chronic cough or sputum, and exposure to tobacco or biomass smoke.</p></div>
<div><h4>Confirm</h4><p><b>Spirometry: post-bronchodilator FEV₁/FVC under 0.70.</b> Grade by FEV₁ (GOLD 1–4).</p></div>
<div><h4>Assess</h4><p>Symptoms (mMRC/CAT) and exacerbation history → <b>GOLD group A, B or E</b>; blood eosinophils guide steroids.</p></div>
<div><h4>Treat (stable)</h4><p>Quit smoke + vaccines + rehabilitation. ${dr("tiotropium", "tiotropium")} (A); LABA + LAMA (B, E); add ICS (${dr("fluticasone_salmeterol", "fluticasone–salmeterol")}) if exacerbations and eosinophils ≥300.</p></div>
<div><h4>Exacerbation</h4><p>${dr("salbutamol_reliever", "Salbutamol")} ± ${dr("ipratropium", "ipratropium")}, ${dr("prednisolone", "prednisolone")} 40 mg × 5 days, antibiotic if purulent sputum, O₂ to <b>88–92%</b>.</p></div>
<div><h4>Red flags</h4><ul><li>SpO₂ under 88% or drowsy (CO₂ retention)</li><li>pH under 7.35 → NIV</li><li>New oedema (cor pulmonale)</li><li>Fever, consolidation (pneumonia)</li></ul></div>
<div><h4>Do not</h4><p>Give uncontrolled high-flow oxygen; use ICS–LABA alone as the first COPD inhaler; forget inhaler technique.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 (§3.11) treats a COPD flare with <b>propped-up position, oxygen, nebulised salbutamol, antibiotics if infected, and early referral</b>. The STG chronic bronchitis and emphysema sections add salbutamol, <b>tiotropium</b> or <b>salmeterol + fluticasone</b> inhalers, Deriphyllin, chest physiotherapy and vaccination. NEML 2025 lists tiotropium and fluticasone–salmeterol down to district hospitals. Wood-burning kitchens and bukharis are a major cause in women and non-smokers.${r(1, 2)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What COPD is, and who gets it", html: `
<h3>Definition</h3>
<p>COPD is a lung condition with chronic respiratory symptoms (breathlessness, cough, sputum, exacerbations) caused by abnormalities of the airways (bronchitis, bronchiolitis) and/or alveoli (emphysema), producing <b>persistent, often progressive airflow obstruction</b>. It is confirmed by spirometry.${r(3)}</p>
<ul>
<li><b>Chronic bronchitis:</b> productive cough on most days for at least 3 months in each of 2 successive years (STG).</li>
<li><b>Emphysema:</b> permanent enlargement of air spaces beyond the terminal bronchioles with destruction of their walls.</li></ul>
<h3>Causes in Bhutan</h3>
${tbl(["Exposure", "Notes"], [
["<b>Tobacco smoking</b>", "The main cause worldwide; risk rises with pack-years"],
["<b>Household air pollution</b> (biomass: wood, dung, crop residue)", "Very important in Bhutan and South Asia: women cooking over open fires and families around bukharis (wood stoves) in winter; COPD in non-smoking women"],
["Occupational dust and fumes", "Farming, construction, mining, road work"],
["Previous TB, childhood infections, low birth weight, poorly controlled asthma", "Abnormal lung development or damage ('COPD of non-tobacco origin')"],
["Alpha-1 antitrypsin deficiency", "Rare; early emphysema under 45"]])}
<p>COPD is one of the top three causes of death worldwide and up to 70% of people with it are undiagnosed. No Bhutan national prevalence survey was found. <span class="lbl l-draft">EVIDENCE GAP</span></p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("How smoke becomes COPD, and what each treatment targets", [
F.s("<b>Years of smoke</b>: tobacco, biomass, dust (± abnormal lung growth, previous TB)"), F.a,
F.s("Chronic inflammation in airways and alveoli (neutrophils, macrophages; eosinophils in some)"), F.a,
F.b([
["Airways", F.s("Mucus hypersecretion, wall thickening, small-airway narrowing"), F.e("Cough, sputum, wheeze")],
["Alveoli", F.s("Protease damage destroys alveolar walls (emphysema)"), F.e("Loss of elastic recoil → airways collapse on breathing out")]]), F.a,
F.s("<b>Air trapping and hyperinflation</b>: the chest cannot empty before the next breath"), F.a,
F.b([
["Breathlessness", F.e("Worse on exertion; muscles work at a disadvantage"), F.ok("<b>Bronchodilators</b> (LAMA, LABA) reduce trapping")],
["Gas exchange", F.e("Low O₂; CO₂ retention in advanced disease"), F.ok("<b>Controlled O₂</b>, NIV, long-term O₂")],
["Exacerbations", F.e("Infection or pollution triggers flares"), F.ok("<b>ICS</b> if eosinophilic, vaccines, quitting smoke")]]), F.a,
F.e("Advanced: pulmonary hypertension → right heart failure (<b>cor pulmonale</b>), muscle wasting, osteoporosis, depression")])}
<p>Why controlled oxygen matters: in some patients with chronic CO₂ retention, high-flow oxygen worsens ventilation–perfusion matching and removes hypoxic drive, so CO₂ rises and they become drowsy (CO₂ narcosis). A target of <b>SpO₂ 88–92%</b> reduced deaths in a randomised pre-hospital trial (Austin 2010).${r(12)}</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan STG 2024", "GOLD 2025/2026", "NICE NG115 (UK)", "This guide follows"], [
["Diagnosis", "Spirometry FEV₁/FVC <0.7 (STG spirometry section)", "Post-BD FEV₁/FVC <0.70", "Post-BD FEV₁/FVC <0.7 + symptoms", "Same everywhere"],
["Initial maintenance", "Salbutamol; tiotropium or salmeterol + fluticasone; Deriphyllin", "A: a bronchodilator; B and E: LABA + LAMA; ICS only if eosinophils ≥300 (E)", "SABA/SAMA, then LABA+LAMA (no asthmatic features) or LABA+ICS (asthmatic features)", "GOLD; avoid ICS–LABA alone unless asthma overlap or high eosinophils"],
["Theophylline / Deriphyllin", "Deriphyllin 300 mg (chronic bronchitis)", "Small effect; not recommended unless others unavailable", "Only after trials of long-acting bronchodilators", "Last resort; interactions and toxicity"],
["Exacerbation steroid", "Not specified", "Prednisolone 40 mg × 5 days", "Prednisolone 30 mg × 5 days", "40 mg × 5 days"],
["Exacerbation antibiotic", "If infection (amoxicillin or co-trimoxazole × 5 days, per STG bronchitis)", "If increased sputum purulence + dyspnoea or volume, or NIV/ventilation; 5 days", "If sputum purulent / clinical signs; amoxicillin, doxycycline or clarithromycin", "Amoxicillin or doxycycline × 5 days when criteria met"],
["Oxygen", "Oxygen (unspecified)", "Target SpO₂ 88–92%", "88–92% in CO₂ retainers", "<b>88–92%</b> via Venturi or nasal cannula"]])}
<p class="qn">Sources: STG, GOLD 2025/2026, NICE NG115.${r(1, 2, 3, 4, 5)}</p>
${box("amber", "GOLD 2027", `<p>The GOLD 2027 report was released on 18 November 2026, after this chapter's evidence review. Core diagnosis and treatment are not expected to change, but check the new report before teaching. <span class="lbl l-draft">NOT YET REVIEWED</span></p>`)}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "What you find", "Meaning"], [
["Breathlessness", "Slowly worsening over years, first on hills or stairs (rate with mMRC)", "The main symptom"],
["Chronic cough and sputum", "Morning cough, white or grey sputum", "Chronic bronchitis"],
["Wheeze and chest tightness", "Variable", "Overlaps with asthma"],
["Signs (advanced)", "Barrel chest, pursed-lip breathing, accessory muscles, reduced breath sounds, hyper-resonance, cyanosis", "Hyperinflation, severe disease"],
["Right heart failure", "Raised JVP, ankle oedema, hepatomegaly", "Cor pulmonale"],
["Weight loss, wasting", "Low BMI", "Poor prognosis; exclude TB and lung cancer"]])}
<h3>Asthma or COPD?</h3>
${tbl(["Feature", "Asthma", "COPD"], [
["Onset", "Childhood or young adult", "Over 40"],
["Course", "Episodic, symptom-free spells", "Persistent, progressive"],
["Exposure", "Often none", "Tobacco or biomass smoke"],
["Atopy, family history", "Common", "Uncommon"],
["Spirometry", "Large reversibility (FEV₁ ↑ ≥12% and 200 mL, often much more)", "Persistent obstruction after bronchodilator"]])}
<p class="qn">Adapted from the STG asthma–COPD comparison table.${r(1)}</p>
<h3>Exacerbation</h3>
<p>An event over less than 14 days of increased breathlessness and/or cough and sputum, often with fast breathing and heart rate, usually triggered by infection or pollution.${r(3)}</p>
${box("red", "Red flags in an exacerbation", `<ul><li>SpO₂ under 88% despite oxygen, or drowsiness, confusion, flapping tremor (CO₂ retention).</li><li>Respiratory rate over 30, use of accessory muscles, inability to speak.</li><li>New oedema, chest pain, haemoptysis.</li><li>Fever with focal signs (pneumonia).</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Clues", "Test"], [
["Asthma", "Younger, variable, atopy, large bronchodilator response", "Spirometry reversibility, peak-flow variability"],
["<b>Pulmonary TB / post-TB lung disease</b>", "Weight loss, night sweats, haemoptysis, previous TB", "Sputum GeneXpert, CXR"],
["Heart failure", "Orthopnoea, oedema, crackles, cardiomegaly", "NT-proBNP, echo"],
["Bronchiectasis", "Large volumes of purulent sputum, recurrent infections, clubbing", "CT chest"],
["Lung cancer", "Smoker, haemoptysis, weight loss, persistent CXR shadow", "CXR, CT, biopsy"],
["Interstitial lung disease", "Fine crackles, clubbing, restrictive spirometry", "CT, spirometry"],
["Pulmonary embolism (in exacerbation)", "Sudden worsening without infection, pleuritic pain", "CT pulmonary angiography; D-dimer"]])}
<h3>A typical case</h3>
<p>A 62-year-old woman from Haa who has never smoked but cooked over an open wood fire for 40 years is breathless on the stairs and coughs every morning. Post-bronchodilator FEV₁/FVC is 0.58 and FEV₁ 54% predicted (GOLD 2), mMRC 2, no exacerbations: <b>GOLD group B</b>. Start a long-acting bronchodilator combination (tiotropium + LABA where possible), refer for pulmonary rehabilitation, vaccinate, and talk about kitchen ventilation or an improved cookstove.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "What to look for"], [
["<b>Spirometry</b> (post-bronchodilator)", "Diagnosis and grading", "FEV₁/FVC under 0.70; FEV₁ % predicted"],
["Chest X-ray", "Exclude TB, cancer, heart failure, pneumonia", "Hyperinflation (flat diaphragms, more than 6 anterior ribs), bullae"],
["Full blood count with <b>eosinophils</b>", "Guides ICS use; anaemia or polycythaemia", "Eosinophils ≥300/µL favour ICS"],
["Sputum for TB (GeneXpert)", "TB is common and mimics COPD", "Especially with weight loss, haemoptysis"],
["Pulse oximetry; arterial blood gas if SpO₂ ≤92% or drowsy", "Respiratory failure", "pH, PaCO₂, PaO₂"],
["ECG and echo", "Cor pulmonale, heart failure, AF", "Right ventricular strain, pulmonary hypertension"],
["BMI, CAT/mMRC", "Severity and prognosis", "Low BMI is a poor sign"],
["Alpha-1 antitrypsin level", "Young onset (under 45) or family history", "Deficiency"]])}
${fig({ title: "Flow–volume loops: normal, obstructive and others", src: "images/copd-spirometry.png", mod: "Spirometry flow–volume curves", ctx: "Diagnosis of airflow obstruction", loc: "—", find: "Normal loop with a straight descending limb; in obstruction the expiratory limb is 'scooped out' (concave) and peak flow is reduced", signs: "Obstructive pattern", interp: "COPD is confirmed when post-bronchodilator FEV₁/FVC is under 0.70; the scooped curve shows small-airway collapse during expiration", ddx: "Asthma (reversible), poor effort (irregular curve)", by: "Evgenios Metaxas, MD", page: "https://commons.wikimedia.org/wiki/File:Spirometry.png", lic: "CC BY-SA 3.0" })}
` },

{ id: "staging", title: "Severity: GOLD grade and group, and exacerbation risk", html: `
${tbl(["GOLD grade (airflow)", "Post-bronchodilator FEV₁ (% predicted)"], [["GOLD 1 Mild", "≥80%"], ["GOLD 2 Moderate", "50–79%"], ["GOLD 3 Severe", "30–49%"], ["GOLD 4 Very severe", "under 30%"]])}
<div class="calc" data-calc="goldabe"></div>
<h3>In hospital: how sick is the exacerbation?</h3>
<div class="calc" data-calc="decaf"></div>
<p class="qn">GOLD ABE framework and DECAF score.${r(3, 13)}</p>
<h3>Admit when</h3>
<ul><li>Severe breathlessness, SpO₂ under 88–90%, drowsiness or acidosis; new cyanosis or oedema; failure of outpatient treatment; serious comorbidity; older age with poor home support; diagnostic uncertainty.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. For every patient</h3>
${box("green", "The non-drug treatments that matter most", `<ul>
<li><b>Stop smoking</b> (and doma/chewing tobacco): brief intervention at every visit; the only treatment shown to slow lung function decline.</li>
<li><b>Reduce biomass smoke</b>: cook outdoors or with a chimney stove, ventilate the kitchen, keep children and the patient away from smoke, use cleaner fuels (LPG, electricity) where possible.</li>
<li><b>Vaccinate</b>: influenza yearly, pneumococcal, COVID-19 (and RSV where available).</li>
<li><b>Pulmonary rehabilitation</b>: walking programme, breathing control, pursed-lip breathing; improves breathlessness and quality of life.</li>
<li><b>Inhaler technique</b>: check at every visit; use a spacer with metered-dose inhalers.</li>
<li>Nutrition, treat depression and anxiety, manage heart disease and osteoporosis.</li></ul>`)}

<h3>B. Maintenance inhalers (GOLD)</h3>
${F.chart("Initial and follow-up treatment (GOLD)", [
F.s("Spirometry-confirmed COPD; GOLD group from symptoms and exacerbations"), F.a,
F.b([["Group A", F.ok("A bronchodilator: <b>tiotropium</b> (or SABA as needed if very mild)")], ["Group B", F.ok("<b>LABA + LAMA</b>")], ["Group E", F.ok("<b>LABA + LAMA</b>; add ICS if eosinophils ≥300")]]), F.a,
F.d("Follow-up: main problem?"), F.a,
F.b([["Breathlessness", F.s("Check technique; LABA+LAMA if on one; rehabilitation; look for other causes")], ["Exacerbations", F.s("LABA+LAMA → add ICS if eosinophils ≥100 (triple); if <100, azithromycin or roflumilast (specialist)")]])])}
<p class="qn">GOLD 2025/2026 pharmacological algorithm.${r(3)}</p>
${box("bt", "Bhutan adaptation: what is on NEML 2025", `<p>NEML has <b>tiotropium</b> (LAMA), <b>fluticasone–salmeterol</b> (ICS–LABA) and <b>salbutamol/ipratropium</b>, but no LABA-only or LABA–LAMA combination inhaler. In practice: <b>Group A</b> → tiotropium; <b>Group B</b> → tiotropium, and if still breathless, add fluticasone–salmeterol (accepting the ICS) or refer; <b>Group E</b> → tiotropium + fluticasone–salmeterol (triple), especially if eosinophils are ≥100. Budesonide–formoterol may be available at referral level. ${LB.loc()}</p>`)}

<h3>C. Acute exacerbation</h3>
${box("red", "Exacerbation: what to do", `<ol>
<li>Sit up. <b>Controlled oxygen to SpO₂ 88–92%</b> (Venturi mask 24–28% or nasal cannula 1–2 L/min); check an ABG if SpO₂ is low, the patient is drowsy, or on oxygen.</li>
<li><b>Bronchodilators:</b> ${dr("salbutamol_reliever", "salbutamol")} 2.5–5 mg nebulised (or 4–8 puffs via spacer) + ${dr("ipratropium", "ipratropium")} 500 µg nebulised, every 4–6 hours (more often initially). In CO₂ retainers, drive nebulisers with <b>air</b>, with nasal oxygen alongside.</li>
<li><b>Steroid:</b> ${dr("prednisolone", "prednisolone")} <b>40 mg once daily for 5 days</b> (REDUCE trial), or IV hydrocortisone if unable to swallow.${r(14)}</li>
<li><b>Antibiotic</b> for 5 days if sputum purulence increases plus more breathlessness or sputum volume, or if NIV/ventilation is needed: ${dr("amoxicillin", "amoxicillin")} 500 mg TDS or ${dr("doxycycline", "doxycycline")} 200 mg then 100 mg daily (or co-trimoxazole per STG); ${dr("coamoxiclav", "co-amoxiclav")} if severe or recent antibiotics.</li>
<li><b>NIV (BiPAP)</b> if pH under 7.35 and PaCO₂ over 45 mmHg (6 kPa) despite treatment: it halves the need for intubation and reduces death. Intubation if NIV fails or contraindicated.</li>
<li>Look for and treat pneumonia, heart failure, PE and pneumothorax. VTE prophylaxis if admitted.</li></ol>`)}
<p class="qn">Exacerbation management from GOLD and STG.${r(1, 3, 15)}</p>

<h3>D. Long-term oxygen and advanced disease</h3>
<ul><li><b>Long-term oxygen therapy (≥15 h/day)</b> improves survival if resting PaO₂ is ≤55 mmHg (SpO₂ ≤88%) on two occasions 3 weeks apart, or PaO₂ 56–59 mmHg with cor pulmonale or polycythaemia. Never in active smokers (fire risk).</li>
<li>Palliative care for breathlessness (low-dose opioids, fan, positioning) and advance care planning in very severe disease.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Cautions", "Bhutan (NEML 2025)"], [
[dr("tiotropium", "Tiotropium"), "2 puffs (2.5 µg each) once daily", "Glaucoma, urinary retention", "Inhaler (to DH)"],
[dr("fluticasone_salmeterol", "Fluticasone–salmeterol 125/25"), "2 puffs twice daily", "Pneumonia, thrush", "Inhaler (to DH)"],
[dr("salbutamol_reliever", "Salbutamol"), "1–2 puffs as needed; nebulised 2.5–5 mg in exacerbation", "Tachycardia, low K⁺", "MDI and nebuliser"],
[dr("ipratropium", "Ipratropium"), "Nebulised 250–500 µg 3–4 times daily (exacerbation)", "Glaucoma; do not combine regular with tiotropium", "Nebuliser solution (to DH)"],
[dr("prednisolone", "Prednisolone"), "40 mg once daily × 5 days", "Glucose, mood", "Listed"],
[dr("amoxicillin", "Amoxicillin"), "500 mg TDS × 5 days", "Allergy", "Listed"],
[dr("doxycycline", "Doxycycline"), "200 mg day 1, then 100 mg daily × 5 days", "Pregnancy, children", "Listed"],
[dr("coamoxiclav", "Co-amoxiclav"), "625 mg TDS × 5 days", "Liver, diarrhoea", "Listed"],
[dr("azithromycin", "Azithromycin (prevention)"), "250 mg daily or 500 mg 3×/week (specialist)", "QT, hearing, resistance; exclude TB/NTM first", "Oral not on NEML 2025 (IV only)"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Women exposed to biomass smoke</h3><ul><li>Often non-smokers, younger, with more airway (bronchitic) disease; ask about cooking fuel and kitchen ventilation in every breathless woman.</li></ul>
<h3>Previous tuberculosis</h3><ul><li>Post-TB lung disease causes fixed obstruction, bronchiectasis and recurrent infection. Always exclude active TB before ICS or macrolides.</li></ul>
<h3>Heart failure, IHD, AF</h3><ul><li>Common together. Cardioselective beta-blockers (bisoprolol) are safe in COPD and should not be withheld.</li></ul>
<h3>High altitude and flying</h3><ul><li>At altitude, oxygen levels fall further; patients with severe COPD or resting SpO₂ under 92% may need oxygen for air travel or high passes (assessment before travel).</li></ul>
<h3>Elderly and frail</h3><ul><li>Use devices they can operate (spacer, nebuliser); involve family in technique.</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Drowsy patient on 15 L/min oxygen with SpO₂ 99%</b>", "Possible CO₂ narcosis: reduce to a controlled target (88–92%), ABG, NIV if acidotic; do not stop oxygen abruptly"],
["<b>Exacerbation with consolidation</b>", "Treat as pneumonia + COPD exacerbation (see the pneumonia chapter); CURB-65"],
["<b>Frequent exacerbations despite tiotropium + fluticasone–salmeterol</b>", "Check adherence and technique, smoke exposure, TB, bronchiectasis; consider azithromycin (specialist)"],
["<b>Breathless, oedematous, raised JVP</b>", "Cor pulmonale or heart failure: echo, diuretic, oxygen assessment"],
["<b>Weight loss and haemoptysis in a smoker</b>", "Exclude TB and lung cancer before attributing to COPD"],
["<b>Young patient (under 45) with emphysema</b>", "Alpha-1 antitrypsin level; refer"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognise", "Action"], [
["Exacerbations", "Worse breathlessness, sputum change", "Action plan, early treatment; prevention"],
["Respiratory failure", "Hypoxia, hypercapnia, drowsiness", "Controlled O₂, NIV, LTOT"],
["Cor pulmonale", "Oedema, raised JVP", "Diuretics, O₂"],
["Pneumonia", "Fever, consolidation", "Antibiotics; ICS increases risk"],
["Pneumothorax", "Sudden breathlessness (bullae)", "CXR; drain"],
["Lung cancer", "Smoker, haemoptysis, weight loss", "CXR/CT"],
["Depression, anxiety, osteoporosis, wasting", "Screen", "Treat"]])}
<p>Prognosis worsens with low FEV₁, frequent exacerbations (each hospital admission carries high 1-year mortality), low BMI, hypoxaemia and comorbidity. Quitting smoke at any stage slows decline.</p>
` },

{ id: "followup", title: "Follow-up, self-care and prevention", html: `
${tbl(["When", "What"], [
["2–6 weeks after an exacerbation", "Recovery, inhaler technique, escalate maintenance if needed, rehabilitation"],
["Every 3–6 months", "Symptoms (mMRC/CAT), exacerbations, smoking, technique, SpO₂"],
["Yearly", "Spirometry, influenza vaccine, review of ICS need (eosinophils, pneumonia)"]])}
${box("green", "What to tell the patient", `<ul><li>'Stopping smoking is the most important treatment. Keep away from kitchen smoke and the bukhari; open windows and use a chimney stove.'</li><li>'Use your daily inhaler every day, even when well. Rinse your mouth after the steroid inhaler.'</li><li>'Keep active: walk a little further each day, and use pursed-lip breathing when breathless.'</li><li>'Have your flu vaccine every year.'</li></ul>`)}
${box("red", "Come to hospital if", `<ul><li>Much more breathless than usual, or the reliever does not help.</li><li>Lips or fingers turn blue; drowsy or confused.</li><li>Fever, chest pain, coughing blood.</li><li>Swollen legs.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Hyperinflation on chest X-ray", src: "images/asthma-hyperinflation.jpg", mod: "Chest X-ray (lateral)", ctx: "Emphysema / COPD", loc: "Thorax", find: "Barrel-shaped chest with flattened diaphragms and increased anteroposterior diameter", signs: "Hyperinflation (air trapping)", interp: "Supports emphysema but does not diagnose COPD; spirometry does. The CXR's main job is to exclude TB, cancer, heart failure and pneumonia", ddx: "Chronic asthma", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Barrowchest.JPG", lic: "CC BY-SA 3.0" })}
${fig({ title: "End-stage emphysema on CT", src: "images/copd-emphysema-ct.jpg", mod: "CT chest", ctx: "Severe emphysema", loc: "Both lungs", find: "Large areas of low attenuation (black) where alveolar walls have been destroyed, with few vessels", signs: "Emphysema", interp: "Destruction of alveoli explains loss of elastic recoil, air trapping and poor gas exchange. CT is not needed for routine diagnosis", ddx: "Bullous lung disease, cystic lung disease", by: "PLoS Medicine", page: "https://commons.wikimedia.org/wiki/File:Emphysema_CT.JPG", lic: "CC BY 3.0" })}
</div>
${fig({ title: "Traditional mud stove (chula): household air pollution", src: "images/copd-chula.jpg", mod: "Photograph", ctx: "Biomass smoke exposure", loc: "Rural kitchen", find: "A traditional wood-fired mud stove used for cooking and boiling water", signs: "Source of household air pollution", interp: "Smoke from open biomass fires is a major cause of COPD in non-smoking women in South Asia. Improved chimney stoves, ventilation and cleaner fuels reduce exposure", ddx: "—", by: "Cho21", page: "https://commons.wikimedia.org/wiki/File:Rural_Hearth.jpg", lic: "CC BY 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Exacerbation of COPD", [
F.s("More breathless, more sputum or purulent sputum"), F.a,
F.s("SpO₂, RR, HR, consciousness; CXR; consider ABG"), F.a,
F.s("O₂ to 88–92% · salbutamol + ipratropium · prednisolone 40 mg × 5 d · antibiotic if criteria"), F.a,
F.d("pH <7.35 and PaCO₂ >45 after initial treatment?"), F.a,
F.b([["Yes", F.e("NIV (BiPAP); ICU if failing")], ["No", F.ok("Ward or home; escalate maintenance; follow up in 2–6 weeks")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>No spirometry, no COPD label.</b> Many 'COPD' patients have asthma, TB or heart failure.</li><li><b>Ask every breathless woman about her kitchen.</b></li><li><b>88–92% is the target</b>, not 100%.</li><li><b>Inhaler technique</b> fails in most patients; watch them use it.</li><li><b>Eosinophils guide steroids</b>: low eosinophils, little benefit and more pneumonia.</li></ul>
${tbl(["Mistake", "Prevention"], [["High-flow O₂ to a CO₂ retainer", "Controlled O₂ and ABG"], ["ICS–LABA as the first COPD inhaler", "Start with LAMA (± LABA)"], ["Long steroid courses", "5 days is enough"], ["Missing TB", "Sputum GeneXpert"], ["Stopping beta-blockers needed for heart disease", "Cardioselective beta-blockers are safe"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "What spirometry finding confirms COPD?", "Post-bronchodilator FEV₁/FVC under 0.70 in a person with symptoms and exposure.")}
${qa("Intern/MO", "What oxygen target is used in a COPD exacerbation and why?", "SpO₂ 88–92%, because uncontrolled high-flow oxygen can cause CO₂ retention and acidosis in some patients, increasing mortality.")}
${qa("Intern/MO", "Give the standard exacerbation treatment.", "Controlled oxygen, nebulised salbutamol ± ipratropium, prednisolone 40 mg daily for 5 days, antibiotics for 5 days if sputum purulence increases with more dyspnoea or volume, and NIV if pH under 7.35 with PaCO₂ over 45 mmHg.")}
${qa("Intern/MO", "When is NIV indicated?", "Acute hypercapnic respiratory failure: pH under 7.35 and PaCO₂ over 45 mmHg (6 kPa) persisting after initial treatment.")}
${qa("Specialist", "When should ICS be added in COPD?", "In patients with exacerbations (group E) and blood eosinophils ≥300/µL, or ≥100/µL with exacerbations despite LABA+LAMA; avoid if repeated pneumonia or eosinophils under 100.")}
${qa("Viva", "Why does COPD affect non-smoking women in Bhutan?", "Long exposure to biomass smoke from open wood fires and indoor stoves while cooking and heating.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024: §3.11 COPD (with spirometry), §3.6 Chronic bronchitis, §3.9 Emphysema.</li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and NEML 2025 (tiotropium, fluticasone–salmeterol, ipratropium).</li>
<li id="ref-3">Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for the Diagnosis, Management and Prevention of COPD: 2025 and 2026 reports. <a href="https://goldcopd.org/" target="_blank" rel="noopener">goldcopd.org</a>; 2026 key changes: <a href="https://goldcopd.org/wp-content/uploads/2025/11/KEY-CHANGES-GOLD-2026-10Nov2025.pdf" target="_blank" rel="noopener">PDF</a></li>
<li id="ref-4">National Institute for Health and Care Excellence. NG115: Chronic obstructive pulmonary disease in over 16s: diagnosis and management. 2018 (updated 2019). <a href="https://www.nice.org.uk/guidance/ng115" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-5">US Department of Veterans Affairs / Department of Defense. Clinical Practice Guideline for the Management of COPD. <a href="https://www.healthquality.va.gov/" target="_blank" rel="noopener">healthquality.va.gov</a></li>
<li id="ref-12">Austin MA, Wills KE, Blizzard L, et al. Effect of high flow oxygen on mortality in COPD patients in prehospital setting: randomised controlled trial. BMJ 2010;341:c5462. <a href="https://doi.org/10.1136/bmj.c5462" target="_blank" rel="noopener">doi:10.1136/bmj.c5462</a></li>
<li id="ref-13">Steer J, Gibson J, Bourke SC. The DECAF score: predicting hospital mortality in exacerbations of COPD. Thorax 2012;67:970–976. <a href="https://doi.org/10.1136/thoraxjnl-2012-202103" target="_blank" rel="noopener">doi:10.1136/thoraxjnl-2012-202103</a></li>
<li id="ref-14">Leuppi JD, Schuetz P, Bingisser R, et al. Short-term vs conventional glucocorticoid therapy in acute exacerbations of COPD (REDUCE). JAMA 2013;309:2223–2231. <a href="https://doi.org/10.1001/jama.2013.5023" target="_blank" rel="noopener">doi:10.1001/jama.2013.5023</a></li>
<li id="ref-15">Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J 2017;50:1602426. <a href="https://doi.org/10.1183/13993003.02426-2016" target="_blank" rel="noopener">doi:10.1183/13993003.02426-2016</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG §3.11/3.6/3.9", "<span class='pass'>Verified</span>", "Read from extracted STG"],
["GOLD 2025/2026 framework", "<span class='pass'>Checked</span>", "ABE groups, algorithm, exacerbation care"],
["GOLD 2027 (released 18 Nov 2026)", "<span class='warn'>Not yet reviewed</span>", "Flagged"],
["NEML inhaler availability and Bhutan adaptation", "<span class='pass'>Checked</span>", "No LABA–LAMA combination on NEML"],
["GOLD ABE and DECAF calculators", "<span class='pass'>Checked</span>", "From GOLD and Steer 2012"],
["Bhutan COPD prevalence", "<span class='warn'>Evidence gap</span>", "No national survey found"],
["Images", "<span class='pass'>Done</span>", "Four Commons files; licences checked"],
["Clinical sign-off", "<span class='warn'>Pending</span>", "Needs review by a physician/pulmonologist"]], "qc")}
` }
]
});
