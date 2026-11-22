/* Asthma — adults */
registerPage({
id: "asthma-adult",
title: "Asthma — Adults",
subtitle: "Diagnosis, the stepwise and SMART treatment approach, and managing the acute and life-threatening attack",
age: "Adults", specs: ["resp", "medicine", "emerg", "ph"],
keywords: ["asthma", "bronchial asthma", "wheeze", "bronchospasm", "ICS-formoterol", "SMART", "MART", "salbutamol", "budesonide", "formoterol", "beclometasone", "inhaled corticosteroid", "spirometry", "peak flow", "acute asthma", "life-threatening asthma", "silent chest", "ipratropium", "magnesium sulfate", "prednisolone", "montelukast"],
related: ["asthma-child", "pneumonia-adult"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if GINA 2027 changes the strategy)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Asthma is airway inflammation with variable airflow obstruction. The two things that change lives are an anti-inflammatory preventer used early — not a reliever alone — and knowing the signs of a severe attack before it becomes life-threatening.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Recurrent wheeze, cough, breathlessness and chest tightness, worse at night or with triggers, with <b>variable airflow obstruction</b> on spirometry (or peak flow).</p></div>
<div><h4>Never SABA-only</h4><p>GINA 2026: even mild asthma should use <b>low-dose ICS–formoterol as needed</b> (or ICS whenever salbutamol is taken) — SABA-only treatment increases severe attacks.</p></div>
<div><h4>Stepwise (Track 1)</h4><p>Step 1–2: as-needed low-dose ICS–formoterol. Step 3: low-dose ICS–formoterol <b>maintenance + reliever (SMART)</b>. Step 4: medium-dose SMART. Step 5: refer.</p></div>
<div><h4>Acute attack</h4><p>${dr("salbutamol_reliever", "Salbutamol")} 4–10 puffs via spacer every 20 min, oxygen to SpO₂ 93–95%, ${dr("prednisolone")} 40–50 mg within the first hour.</p></div>
<div><h4>Severe / life-threatening</h4><p>Add ${dr("ipratropium")}, give ${dr("magnesium_sulfate", "IV magnesium")} if not responding; life-threatening signs = drowsy, <b>silent chest</b>, cyanosis, bradycardia.</p></div>
<div><h4>Red flags</h4><ul><li>Talks in words, RR &gt;30, SpO₂ &lt;90%</li><li>PEF ≤50% of best</li><li>Drowsy, silent chest, bradycardia</li></ul></div>
<div><h4>Always</h4><p>Check inhaler technique at every visit; give every patient a written action plan; review control regularly.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG 2024 treats acute asthma with <b>oxygen, nebulised salbutamol, and hydrocortisone 200 mg (or dexamethasone 4 mg) IV stat</b>, escalating at secondary level to repeated salbutamol, prednisolone 30–60 mg daily for 7 days, and — for life-threatening attacks — <b>IV aminophylline (Deriphyllin)</b>. The international GINA 2026 approach prefers oral steroids, ipratropium and magnesium, and does <b>not</b> recommend routine aminophylline. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What asthma is, who gets it and the triggers", html: `
<h3>Definition</h3>
<p>Asthma is a chronic inflammatory disease of the airways with <b>hyperresponsiveness</b> to a wide range of triggers and <b>variable, reversible</b> airflow obstruction. It causes recurrent episodes of wheeze, breathlessness, chest tightness and cough, with flares (exacerbations) between quieter periods.</p>
<h3>Triggers and risk factors</h3>
${tbl(["Trigger / factor", "Example"], [
["Indoor allergens", "House dust mite (bedding, carpets), cockroach, pet dander"],
["Outdoor allergens", "Pollens, air pollution"],
["Irritants", "Tobacco smoke (including passive), biomass smoke, cold air, fumes"],
["Exercise", "Exercise-induced bronchoconstriction"],
["Respiratory infections", "Viral infections are the commonest trigger of flares"],
["Emotional factors", "Anger, fear, laughter"],
["Drugs", "Beta-blockers (including eye drops), aspirin/NSAIDs (in aspirin-exacerbated disease)"],
["Personal or family history of atopy", "Eczema, allergic rhinitis, nasal polyps"]])}
<h3>How common is it</h3>
<ul>
<li>Asthma affects roughly <b>300 million people worldwide</b> and is under-diagnosed and under-treated in many low- and middle-income countries.</li>
<li>A precise current Bhutan prevalence figure was not in the sources reviewed. ${LB.bt("EVIDENCE GAP")}</li>
<li>It is a leading cause of preventable hospital admission and death — most asthma deaths occur in people with only mild or moderate disease, which is why control (not just severity) matters.</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("What happens in the asthmatic airway", [
F.s("<b>Predisposition</b> (atopy, genes) + <b>triggers</b>: viral infection, allergens, smoke, cold air, exercise, NSAIDs"), F.a,
F.s("Airway inflammation, usually type 2: eosinophils, mast cells, IgE, IL-4/5/13"), F.a,
F.s("Bronchial hyperresponsiveness"), F.a,
F.b([
["Acute", F.e("Smooth-muscle spasm + wall oedema + mucus plugs → variable airflow limitation (wheeze, cough, tight chest)")],
["Chronic (untreated)", F.e("Airway remodelling → fixed obstruction")]]), F.a,
F.ok("Inhaled steroids treat the inflammation; formoterol or salbutamol relax the muscle — so ICS-containing reliever beats SABA alone")])}
<h3>Three processes, one airway</h3>
<ol class="chain">
<li><b>Chronic inflammation:</b> eosinophils, mast cells and Th2 lymphocytes infiltrate the airway wall, driven by allergens and other triggers.</li>
<li><b>Bronchospasm and swelling:</b> smooth muscle constricts, the mucosa swells, and mucus plugs form — together narrowing the airways, most marked on expiration (wheeze, prolonged expiration).</li>
<li><b>Hyperresponsiveness:</b> the inflamed airway over-reacts to cold air, smoke, exercise and infection, so ordinary triggers cause disproportionate narrowing.</li>
<li><b>Remodelling:</b> untreated or poorly controlled inflammation, over years, thickens the airway wall and can cause <b>fixed</b> (less reversible) obstruction — a key reason to treat inflammation early, not just symptoms.</li></ol>
<p>This explains the treatment: bronchodilators (salbutamol, formoterol) relax the muscle, but only anti-inflammatory drugs (inhaled corticosteroids) treat the disease. That is why GINA insists no patient uses a bronchodilator alone.</p>
<h3>Natural history</h3>
<p>With good treatment most people live normal lives with normal lung function. Poorly controlled asthma causes repeated flares, impaired quality of life, lost school and work, fixed obstruction, and a small but real risk of death from a severe attack — deaths that are almost all preventable with early inhaled corticosteroids and a written action plan.</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan STG 2024", "India (ICMR)", "GINA 2026", "BTS/SIGN 2019", "This guide"], [
["Reliever-only treatment", "Salbutamol-based (no AIR)", "Salbutamol-based", "No SABA-only — use ICS–formoterol as needed (Track 1)", "SABA but with early ICS", "Follow GINA: ICS–formoterol as needed where available; ICS + SABA otherwise"],
["Preventer step-up", "Not detailed (refer SCCI protocol)", "ICS, add LABA/LTRA", "SMART/MART from Step 3", "ICS → add LABA → add LTRA/LAMA", "GINA stepwise (Track 1 SMART)"],
["Acute steroid route", "IV hydrocortisone/dexamethasone", "Oral prednisolone", "Oral prednisolone (oral = IV)", "Oral prednisolone", "Oral prednisolone 40–50 mg; IV only if cannot swallow"],
["Aminophylline", "Used for life-threatening (Deriphyllin)", "Not routine", "Not routine", "Not routine", "Avoid routine aminophylline; use ipratropium + magnesium instead"],
["Magnesium sulfate", "Not specified", "Severe attacks", "Reserve for non-responders", "Severe/life-threatening", "Severe or life-threatening, not responding"],
["Monitoring", "Clinical", "Peak flow", "Peak flow + spirometry + symptom control", "Peak flow monitoring", "Peak flow + symptom control + written plan"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Symptom or sign", "Mechanism", "What it tells you"], [
["Wheeze", "Airflow through narrowed airways", "The cardinal sign; a polyphonic expiratory wheeze"],
["Breathlessness and chest tightness", "Airflow obstruction", "Worse at night and early morning"],
["Cough", "Airway irritation", "Often the only symptom (cough-variant asthma)"],
["Prolonged expiration", "Expiratory airflow limitation", "Listen for a long expiratory phase"],
["Hyperinflation (barrel chest in chronic disease)", "Air trapping", "Hyper-resonance, reduced expansion"],
["Tachycardia, sweating", "Work of breathing, hypoxia", "Attack severity"],
["Accessory muscle use, inability to speak in sentences", "Severe obstruction", "Severe attack"],
["Silent chest", "Too little airflow to make a sound", "<b>Life-threatening</b> — a pre-arrest sign"],
["Central cyanosis, bradycardia", "Hypoxaemia, exhaustion", "Pre-arrest — act now"]])}
${box("red", "Assess attack severity", `<ul><li><b>Mild/moderate:</b> talks in sentences, prefers sitting, not agitated, RR raised, no accessory muscles, pulse 100–120, SpO₂ 90–95%, PEF &gt;50% of best.</li><li><b>Severe:</b> talks in words, hunched forward, agitated, RR &gt;30, accessory muscles, pulse &gt;120, SpO₂ &lt;90%, PEF ≤50%.</li><li><b>Life-threatening (any one):</b> drowsy or confused, <b>silent chest</b>, cyanosis, bradycardia, hypotension, exhaustion.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Argues against", "Best test to separate"], [
["COPD", "Older, smoker, persistent (not fully reversible) obstruction", "Childhood onset, atopy, full reversibility", "Spirometry with reversibility; age/smoking history"],
["Heart failure (\"cardiac asthma\")", "Orthopnoea, crackles, raised JVP, oedema", "Wheeze-dominant, atopy, normal heart", "NT-proBNP; echo; CXR"],
["Vocal cord dysfunction", "Inspiratory wheeze at the throat, episodic", "No nocturnal symptoms; normal spirometry between episodes", "Laryngoscopy during symptoms"],
["Upper airway obstruction / foreign body", "Sudden onset, stridor, unilateral", "Chronic, bilateral wheeze", "CXR, bronchoscopy"],
["Bronchiectasis", "Chronic productive cough, clubbing", "Reversibility, atopy", "High-resolution CT"],
["Pulmonary embolism", "Sudden breathlessness, pleuritic pain", "Wheeze, atopy", "CT pulmonary angiography"],
["Anaphylaxis / angioedema", "Sudden after allergen, urticaria, stridor", "Recurrent wheeze over years", "Clinical; try adrenaline/antihistamine"],
["Gastro-oesophageal reflux", "Cough worse at night and after meals", "Wheeze, airflow obstruction", "Trial of PPI; pH monitoring"]])}
<h3>The typical patient</h3>
<p>A 24-year-old has had episodic wheeze and night cough since childhood, worse with dust and cold air, and now wakes twice a week needing his salbutamol inhaler. This is <b>asthma</b> — the recurrent, trigger-related wheeze with nocturnal symptoms is the classic story. The priorities are spirometry to confirm variable obstruction, and moving him off salbutamol-only onto an inhaled corticosteroid (preferably ICS–formoterol), because twice-weekly reliever use means he is not controlled.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "What it shows"], [
["<b>Spirometry</b>", "Confirms variable airflow obstruction", "FEV₁/FVC &lt;0.75–0.8 (adults) with ≥12% and ≥200 mL improvement in FEV₁ after a bronchodilator"],
["Peak expiratory flow (PEF)", "Bedside monitoring and the action plan", "Diurnal variation &gt;10%; PEF &lt;50% best = severe attack"],
["Fractional exhaled nitric oxide (FeNO)", "Type-2 airway inflammation (where available)", "Raised FeNO supports asthma and predicts ICS response"],
["Allergy testing (skin prick / specific IgE)", "Identifies triggers", "Guides avoidance and (rarely) immunotherapy"],
["Chest X-ray", "<b>Not routine</b> — only if diagnosis is unclear or the patient fails to improve", "Usually normal or hyperinflation; excludes other causes"],
["Full blood count", "Eosinophilia supports atopy", "Raised eosinophils"],
["Sputum eosinophils", "Specialist centres", "Confirms eosinophilic inflammation"]])}
${box("amber", "The chest X-ray is not routine", `<p>Do not X-ray every patient with asthma: the film is usually normal. Reserve it for diagnostic doubt, an atypical story, or failure to improve after treatment.${r(1)}</p>`)}
` },

{ id: "staging", title: "Control, severity and the treatment steps", html: `
<div class="calc" data-calc="asthmaadult"></div>
<h3>Assess control (GINA)</h3>
${tbl(["In the last 4 weeks", "Well controlled", "Partly", "Uncontrolled"], [
["Daytime symptoms", "≤2/week", "&gt;2/week", "Any 3–4 of these features"],
["Night waking", "None", "Any", "—"],
["Reliever use", "≤2/week", "&gt;2/week", "—"],
["Activity limitation", "None", "Any", "—"]])}
<h3>The GINA stepwise ladder (adults and adolescents)</h3>
${tbl(["Step", "Preferred (Track 1)", "Alternative (Track 2)"], [
["1", "As-needed low-dose ICS–formoterol", "Low-dose ICS whenever SABA taken"],
["2", "As-needed low-dose ICS–formoterol", "Daily low-dose ICS + SABA as needed"],
["3", "Low-dose ICS–formoterol maintenance + reliever (SMART)", "Low-dose ICS–LABA + SABA as needed"],
["4", "Medium-dose ICS–formoterol SMART", "Medium-dose ICS–LABA + SABA; add LTRA/LAMA"],
["5", "Refer: high-dose ICS, LAMA, azithromycin, biologics", "As per specialist"]])}
<p>Step up when uncontrolled; step down (after about 3 months of good control) to the lowest dose that keeps control. Recheck inhaler technique and adherence before stepping up — the commonest cause of "uncontrolled" asthma is poor technique or not taking the preventer.${r(2)}</p>
` },

{ id: "manage", title: "Management: chronic and acute", html: `
<h3>A. Chronic asthma — the SMART approach</h3>
${box("green", "Inhaled corticosteroid–formoterol", `<p>The cornerstone is an <b>anti-inflammatory reliever</b>, not a SABA alone. ${dr("budesonide_formoterol", "Low-dose budesonide–formoterol")} is used <b>as needed</b> for symptoms (Steps 1–2), and as <b>maintenance + reliever (SMART)</b> from Step 3 — one or two puffs daily, plus extra puffs as needed. This single-inhaler approach reduces severe exacerbations compared with SABA relievers.${r(2)}</p>`)}
<p>Where ICS–formoterol is unavailable, use a <b>daily inhaled corticosteroid</b> (${dr("beclometasone", "beclometasone/budesonide")}) plus ${dr("salbutamol_reliever", "salbutamol")} as needed, and step up by control. Add ${dr("montelukast")} or a long-acting beta-2 agonist before referral.</p>

<h3>B. Acute asthma</h3>
${tbl(["Severity", "Treatment"], [
["Mild/moderate", "Salbutamol 4–10 puffs via spacer every 20 min for the first hour; oral prednisolone 40–50 mg; oxygen if SpO₂ &lt;90%; review after 1 hour"],
["Severe", "As above, plus oxygen to SpO₂ 93–95%, ipratropium 4–8 puffs (or 0.25–0.5 mg nebulised), and prednisolone within the first hour; admit"],
["Life-threatening", "Urgent: oxygen, repeated salbutamol + ipratropium, IV magnesium 2 g, prednisolone IV/oral, and critical-care/ICU; prepare for ventilation"]])}
${box("red", "What NOT to do in acute asthma", `<ul><li>Do not sedate (sedation is how asthma kills — a sedated patient with silent chest is close to arrest).</li><li>Do not give routine antibiotics (flares are usually viral; give only if bacterial infection is likely).</li><li>Do not use routine IV aminophylline (no benefit over standard care; more side effects).</li><li>Do not give a beta-blocker.</li></ul>`)}
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card.</p>
${tbl(["Drug", "Adult dose", "Key cautions"], [
[dr("salbutamol_reliever", "Salbutamol (reliever)"), "100–200 mcg as needed; 4–10 puffs via spacer in attacks", "Never as sole therapy; tremor, tachycardia"],
[dr("budesonide_formoterol", "Budesonide–formoterol"), "As-needed, or maintenance + reliever (SMART)", "Rinse mouth; not for monotherapy rescue in non-SMART users"],
[dr("beclometasone", "Inhaled corticosteroid (ICS)"), "Low dose (beclometasone 200–500 mcg/day), step by control", "Oral thrush; rinse mouth"],
[dr("ipratropium"), "4–8 puffs (or 0.25–0.5 mg nebulised) in severe attacks", "Dry mouth; stop at discharge"],
[dr("prednisolone"), "40–50 mg daily for 5–7 days (acute)", "Hyperglycaemia; short course, no taper"],
[dr("montelukast"), "10 mg at night", "Rare neuropsychiatric effects"],
[dr("magnesium_sulfate", "Magnesium sulfate"), "2 g IV over 20 min (severe/life-threatening)", "Renal impairment; monitor reflexes"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Pregnancy</h3>
<ul><li>Asthma can worsen or improve in pregnancy. <b>Treat it actively</b> — uncontrolled asthma (hypoxia) harms mother and baby more than any inhaled drug.</li><li>Safe in pregnancy: salbutamol, inhaled corticosteroids (budesonide preferred), ICS–LABA, prednisolone for flares, montelukast. Avoid high-dose oral steroids long term where possible.</li></ul>
<h3>Older adults</h3>
<ul><li>Diagnose carefully (overlap with COPD and heart failure); use spirometry and consider cardiac causes.</li><li>Watch inhaler technique and comorbidity; check that a beta-blocker is not worsening control.</li></ul>
<h3>Exercise-induced bronchoconstriction</h3>
<ul><li>Warm up; use a SABA (or ICS–formoterol) before exercise; good overall control is the best prevention. Montelukast is an alternative.</li></ul>
<h3>Aspirin-exacerbated and occupational asthma</h3>
<ul><li><b>Aspirin/NSAID-exacerbated respiratory disease</b> (asthma + nasal polyps + aspirin sensitivity): avoid aspirin/NSAIDs; usually needs higher-dose ICS ± LTRA, and ENT review for polyps.</li><li><b>Occupational asthma:</b> ask about symptoms that improve away from work; the key treatment is removing the exposure.</li></ul>
` },

{ id: "scenarios", title: "The severe and difficult cases", html: `
${tbl(["Situation", "What to do"], [
["Acute severe asthma", "Oxygen, salbutamol + ipratropium, prednisolone within 1 h; admit and reassess hourly"],
["Life-threatening asthma", "ICU: repeated bronchodilators, IV magnesium, prednisolone IV; ventilate early if exhausted — do not sedate outside ICU"],
["Not improving in the ED", "Recheck the diagnosis (pneumothorax? anaphylaxis? heart failure?), give magnesium, escalate to ICU"],
["Recurrent flares / frequent reliever use", "The patient is uncontrolled: check technique and adherence, then step up preventer therapy and review the action plan"],
["Brittle / difficult asthma", "Refer: high-dose ICS, LAMA, azithromycin, and biologics (anti-IgE, anti-IL-5, anti-IL-4R) where available"],
["Suspected pneumothorax", "Sudden one-sided pain, reduced breath sounds, deviation — urgent CXR and decompression"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "How to recognise it", "Management"], [
["<b>Respiratory failure / arrest</b>", "Acute", "Silent chest, drowsiness, rising CO₂, bradycardia", "ICU, ventilation"],
["<b>Pneumothorax / pneumomediastinum</b>", "Acute", "Sudden one-sided pain, hyper-resonance", "CXR; decompression"],
["<b>Pneumonia</b>", "Acute", "Fever, consolidation", "Antibiotics where indicated"],
["<b>Fixed airflow obstruction</b>", "Late", "Persistent obstruction despite treatment", "Optimise ICS; add LAMA; treat as overlap"],
["<b>Steroid side effects (high cumulative dose)</b>", "Late", "Weight gain, osteoporosis, cataracts, adrenal suppression", "Minimise oral courses; use ICS"],
["<b>Death</b>", "Acute", "Usually in mild/moderate asthmatics, often preventable", "Early ICS + action plan + prompt severe-attack treatment"]])}
<h3>Prognosis</h3>
<ul>
<li>Most people with asthma live normal, active lives on inhaled corticosteroids.</li>
<li>Deaths are rare but largely <b>preventable</b> — the risk factors for death are previous severe attacks, hospital admission in the last year, over-use of SABA, under-use of ICS, and no written action plan. Address each of these.</li></ul>
` },

{ id: "followup", title: "Follow-up, the action plan and prevention", html: `
<h3>Every patient needs a written action plan</h3>
${box("green", "The three-zone plan", `<ul><li><b>Green (doing well):</b> take your preventer daily; peak flow &gt;80% of best.</li><li><b>Amber (worse):</b> symptoms or peak flow 50–80% — take extra reliever (or ICS–formoterol), step up as planned, seek review.</li><li><b>Red (emergency):</b> severe breathlessness, reliever not lasting 3–4 hours, peak flow &lt;50% — start the acute plan and get urgent medical help.</li></ul>`)}
<h3>Review and prevention</h3>
${tbl(["When", "What"], [
["Every 3–6 months (or 1–3 months if uncontrolled)", "Symptom control, reliever use, exacerbations, inhaler technique, peak flow, and step therapy up or down"],
["Every visit", "Check inhaler technique (most patients do it wrong); reinforce adherence; ask about triggers and smoking"],
["Vaccination", "Influenza yearly; pneumococcal vaccine where indicated"],
["Smoking and triggers", "Smoking cessation (active and passive); reduce indoor allergens and smoke"]])}
${box("red", "Seek urgent help if", `<ul><li>Breathlessness at rest, or can only speak in words.</li><li>The reliever lasts less than 3–4 hours, or peak flow is under 50% of best.</li><li>Lips or fingers turn blue, or you feel drowsy or exhausted.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Peak flow meter", src: "images/asthma-peak-flow.jpg", mod: "Device photograph", ctx: "Home monitoring of asthma", loc: "Hand-held device", find: "A peak expiratory flow meter, used to blow into and record the best of three readings", interp: "Peak flow turns a feeling into a number. The three-zone action plan is built on it: over 80% green, 50–80% amber, under 50% red", by: "melvil", page: "https://commons.wikimedia.org/wiki/File:Peak_flow_meter.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Spacer with inhaler", src: "images/asthma-spacer.jpg", mod: "Device photograph", ctx: "Inhaler technique", loc: "Metered-dose inhaler attached to a spacer", find: "A pressurised inhaler connected to a holding chamber (spacer)", interp: "A spacer makes the inhaler far more effective — much of a poorly used inhaler lands in the mouth, not the lungs. Check technique at every visit", by: "Tradimus", page: "https://commons.wikimedia.org/wiki/File:Asthma_spacer.JPG", lic: "CC BY-SA 3.0" })}
</div>
${fig({ title: "Hyperinflation (air trapping) on lateral chest X-ray", src: "images/asthma-hyperinflation.jpg", mod: "Chest X-ray (lateral)", ctx: "Chronic airflow obstruction with air trapping", loc: "Thorax", find: "A barrel-shaped chest with flattened diaphragms and an increased anteroposterior diameter", interp: "Air trapping flattens the diaphragm and over-inflates the chest — the radiological counterpart of the barrel chest. This film is from emphysema; the same hyperinflation is seen in chronic, poorly controlled asthma", ddx: "Emphysema/COPD, asthma", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Barrowchest.JPG", lic: "CC BY-SA 3.0" })}
<h3>Link-only images</h3>
<ul><li>Asthma airway pathology and bronchoscopy images: <a href="https://radiopaedia.org/articles/asthma" target="_blank" rel="noopener">Radiopaedia</a></li><li>Correct inhaler technique videos: <a href="https://ginasthma.org" target="_blank" rel="noopener">GINA</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Diagnose asthma", [
F.s("Recurrent wheeze, cough, breathlessness, chest tightness (worse at night/with triggers)"), F.a,
F.s("Spirometry before and after bronchodilator; peak-flow diary if spirometry unavailable"), F.a,
F.d("FEV₁ improves ≥12% and ≥200 mL (or PEF varies &gt;10%)?"), F.a,
F.b([["Yes", F.ok("Asthma: start ICS-containing treatment, written action plan")], ["No", F.s("Consider COPD, heart failure, vocal cord dysfunction — investigate")]])])}
${F.chart("2 · Acute asthma severity", [
F.s("Assess: speech, RR, pulse, SpO₂, PEF, chest sounds, conscious level"), F.a,
F.d("Life-threatening feature (drowsy, silent chest, cyanosis, bradycardia)?"), F.a,
F.b([["Yes", F.e("ICU: oxygen, salbutamol + ipratropium, magnesium 2 g IV, prednisolone, ventilate")], ["No", F.s("Severe (words, RR&gt;30, SpO₂&lt;90%, PEF≤50%)?")]]), F.a,
F.d("Severe?"), F.a,
F.b([["Yes", F.s("Admit: oxygen, salbutamol 4–10 puffs + ipratropium, prednisolone within 1 h")], ["No", F.ok("Mild/moderate: salbutamol via spacer, prednisolone, review in 1 h")]])])}
${F.chart("3 · Step up / step down", [
F.s("Assess control and inhaler technique every review"), F.a,
F.d("Uncontrolled despite correct technique and adherence?"), F.a,
F.b([["Yes", F.s("Step up: more ICS (SMART/ICS–LABA), add LTRA/LAMA, or refer")], ["No", F.s("Controlled ≥3 months → step down to the lowest effective dose")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Never prescribe SABA-only.</b> A reliever alone leaves the inflammation untreated and raises the risk of severe attacks and death.</li>
<li><b>Check inhaler technique every visit.</b> Most patients use their inhaler wrong; a spacer fixes much of this for free.</li>
<li><b>Silent chest is not a good sign.</b> A quiet chest in a distressed, tiring asthmatic is a pre-arrest warning.</li>
<li><b>Give oral steroids early</b> (within the first hour) — they prevent relapse and admission, but they do not work in minutes.</li>
<li><b>Ask how often the reliever is used</b> — more than twice a week means the asthma is uncontrolled, whatever the patient says.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Treating asthma with a reliever alone", "Preventable severe attacks and death", "ICS-containing therapy from the start"],
["Sedating an acute asthmatic", "Sedation + silent chest = respiratory arrest", "Never sedate; support and ventilate"],
["Using routine IV aminophylline", "More toxicity, no benefit over standard care", "Ipratropium and magnesium instead"],
["Giving antibiotics for every flare", "Pointless exposure; flares are usually viral", "Antibiotics only for likely bacterial infection"],
["Routine chest X-ray in asthma", "Unnecessary radiation and false reassurance", "X-ray only for doubt or non-response"],
["Blaming the drug when control is poor, without checking technique", "Unnecessary step-up", "Check technique and adherence first"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "How is variable airflow obstruction demonstrated?", "Spirometry showing an FEV₁ improvement of at least 12% and 200 mL after a bronchodilator, or peak-flow variability over 10%.")}
${qa("Intern/MO", "Why is the chest X-ray not routine in asthma?", "It is usually normal and adds nothing in straightforward asthma; reserve it for diagnostic doubt, an atypical story or failure to improve.")}
${qa("Intern/MO", "What does silent chest mean in acute asthma?", "Too little airflow to produce a wheeze — a life-threatening, pre-arrest sign.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "Why does GINA recommend ICS–formoterol as the reliever rather than SABA-only?", "Because treating every flare with an anti-inflammatory (ICS) reduces severe exacerbations, while SABA-only leaves the inflammation untreated and increases risk.")}
${qa("Intern/MO", "What is SMART/MART therapy?", "Single maintenance and reliever therapy: one ICS–formoterol inhaler taken daily as the preventer and also as needed for symptoms.")}
${qa("Intern/MO", "First-line treatment of an acute severe asthma attack?", "Oxygen, salbutamol 4–10 puffs via spacer (or nebulised), ipratropium, and oral prednisolone 40–50 mg within the first hour.")}
${qa("Specialist", "When is IV magnesium used in acute asthma?", "In severe or life-threatening asthma not responding to initial inhaled bronchodilators and steroids (GINA 2026: reserve for non-responders).")}
</div>
<div class="qgroup"><h3>Safety</h3>
${qa("Intern/MO", "What should never be given in acute asthma?", "Sedatives (and beta-blockers); aminophylline is not routine.")}
${qa("Viva", "Why can people with mild asthma still die of an attack?", "Because severity of the underlying disease and severity of an acute attack are separate — and without regular ICS and a written action plan, a severe attack can strike anyone.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §3.8 Bronchial asthma (adults) and §12.2.2 Bronchial asthma (children).</li>
<li id="ref-2">Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention. 2026. <a href="https://ginasthma.org" target="_blank" rel="noopener">ginasthma.org</a></li>
<li id="ref-3">Global Initiative for Asthma. 2026 GINA strategy report: executive summary and key changes.</li>
<li id="ref-4">British Thoracic Society / Scottish Intercollegiate Guidelines Network. British guideline on the management of asthma (SIGN 158). 2019. <a href="https://www.brit-thoracic.org.uk/quality-improvement/guidelines/asthma/" target="_blank" rel="noopener">brit-thoracic.org.uk</a></li>
<li id="ref-5">National Institute for Health and Care Excellence. NG80: Asthma — diagnosis, monitoring and chronic asthma management. 2017 (updated 2021). <a href="https://www.nice.org.uk/guidance/ng80" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-6">ICMR, Department of Health Research, India. Standard Treatment Workflows: Asthma. New Delhi, 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-7">Harrison's Principles of Internal Medicine, 21st ed.; Nelson Textbook of Pediatrics — foundational pathophysiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["GINA 2026 Track 1 / SMART approach", "<span class='pass'>Verified</span>", "ICS–formoterol as-needed and SMART; no SABA-only"],
["Acute severity classification", "<span class='pass'>Verified</span>", "Bhutan STG 2024 §3.8 (matches GINA/BTS)"],
["Acute management (steroids, ipratropium, magnesium, no aminophylline)", "<span class='pass'>Verified</span>", "GINA 2026"],
["Bhutan STG adult/child content", "<span class='pass'>Verified</span>", "Read directly from STG 2024 §3.8/§12.2.2"],
["ICS dose ranges", "<span class='pass'>Checked</span>", "GINA 2026 dose table"],
["Aminophylline use in Bhutan", "<span class='flag'>Flag</span>", "STG uses Deriphyllin for life-threatening attacks; GINA/BTS do not — flagged in the comparison"],
["Images", "<span class='pass'>Done</span>", "Three Commons images; licences checked (CC BY-SA 3.0/4.0)"],
["References", "<span class='pass'>Done</span>", "All traceable; DOIs/links where available"]], "qc")}
` }
]
});
