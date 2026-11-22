/* Asthma — children */
registerPage({
id: "asthma-child",
title: "Asthma — Children",
subtitle: "Diagnosing wheeze in the young child, spacer-based treatment, and the stepwise preventer approach",
age: "Children", specs: ["paeds", "resp", "emerg", "ph"],
keywords: ["asthma", "childhood asthma", "wheeze", "viral wheeze", "bronchiolitis", "salbutamol", "spacer", "inhaled corticosteroid", "budesonide", "montelukast", "prednisolone", "dexamethasone", "episodic wheeze", "exercise induced"],
related: ["asthma-adult", "pneumonia-child"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if GINA paediatric guidance changes)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In a young child, wheeze is common and usually viral — not every wheezy toddler has asthma. The skill is telling episodic viral wheeze from true asthma, and getting a preventer in early for the child who needs one.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Recurrent wheeze, cough and breathlessness, worse at night or with triggers; in under-5s, viral episodes are the usual trigger. Spirometry confirms it in children old enough (usually 6+).</p></div>
<div><h4>Deliver by spacer</h4><p>Every child uses a <b>spacer</b> (with a mask under about 3–4 years). Nebulisers are for severe attacks or where a spacer is not available.</p></div>
<div><h4>Preventer (6–11 years)</h4><p>Low-dose ${dr("beclometasone", "inhaled corticosteroid")} daily, or ICS whenever the reliever is taken; step up by control.</p></div>
<div><h4>Under 5 years</h4><p>Viral wheeze: reliever as needed; if recurrent or severe, daily low-dose ICS (or ${dr("montelukast")}).</p></div>
<div><h4>Acute attack</h4><p>${dr("salbutamol_reliever", "Salbutamol")} 2–10 puffs via spacer every 20 min (or 2.5 mg nebulised); ${dr("prednisolone")} 1–2 mg/kg (max 40 mg) for moderate/severe attacks.</p></div>
<div><h4>Red flags</h4><ul><li>Talks in words, RR &gt;30, SpO₂ &lt;90%</li><li>Accessory muscles, grunting</li><li>Drowsy, silent chest</li></ul></div>
<div><h4>Always</h4><p>Show the family how to use the spacer; check technique and growth at every review; give a written action plan.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG 2024 manages the child with <b>sitting position, oxygen, and salbutamol 2.5 mg nebulised</b> (stat and twice daily for 5–7 days in mild–moderate attacks; every 15–20 minutes up to 3 doses in moderate–severe attacks, managed at a higher centre), with a first steroid dose of <b>dexamethasone 0.6 mg/kg IM or prednisolone 1–2 mg/kg/day</b>, then referral with a medical escort. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What childhood asthma is, and who wheezes", html: `
<h3>Definition and the under-5s problem</h3>
<p>Asthma is chronic airway inflammation with variable airflow obstruction — but in children under about 5 years, diagnosis is hard because <b>viral wheeze</b> (wheeze only with colds) is far more common than true asthma. Many wheezy toddlers outgrow it; those with recurrent, trigger-related wheeze between colds, atopy, or a family history are more likely to have true asthma.</p>
<h3>Triggers</h3>
${tbl(["Trigger", "Notes"], [
["<b>Viral infections</b>", "The commonest trigger in young children (rhinovirus, RSV)"],
["Allergens", "House dust mite, pets, pollens, mould"],
["Tobacco and biomass smoke", "Both active and passive exposure worsen control"],
["Exercise and cold air", "Exercise-induced bronchoconstriction"],
["Emotional factors", "Laughter, crying, anxiety"]])}
<h3>Risk factors for persisting asthma</h3>
<ul>
<li>Frequent or severe wheeze episodes, and wheeze apart from colds.</li>
<li>Personal atopy (eczema, allergic rhinitis) or a family history of asthma/atopy.</li>
<li>Parental smoking, and early sensitisation to aeroallergens.</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Wheeze and asthma in children", [
F.b([
["Under 5", F.s("Viral-induced wheeze is common; many outgrow it; asthma likely if recurrent, between colds too, with atopy or family history")],
["5 years and over", F.s("Atopic asthma pattern: type 2 inflammation as in adults")]]), F.a,
F.s("Triggers: colds, dust mite, smoke (including indoor stoves), exercise"), F.a,
F.e("Narrow airways + inflammation → wheeze, night cough, breathlessness"), F.a,
F.ok("Inhaled steroid through a spacer controls inflammation; reliever via spacer for attacks")])}
<h3>Small airways, big effect</h3>
<ol class="chain">
<li><b>Inflammation and swelling</b> narrow the airways, which are already small in a child — so a little oedema causes a large rise in resistance.</li>
<li><b>Bronchospasm and mucus</b> add further narrowing, producing wheeze, prolonged expiration and hyperinflation.</li>
<li><b>Viral triggers</b> dominate in the under-5s: the virus inflames the airway and the infant's airway over-reacts with wheeze.</li></ol>
<h3>Natural history</h3>
<p>About half of children who wheeze in infancy stop by school age (the "transient early wheezers"); those with atopy and persistent wheeze tend to continue. Good control in childhood protects lung growth and reduces the risk of fixed obstruction in adulthood — another reason to treat inflammation early rather than just relieving each episode.</p>
` },

{ id: "conflicts", title: "Where the guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "India (ICMR)", "GINA 2026 (children)", "This guide"], [
["Under-5 wheeze", "Not separated from asthma", "Episodic wheeze vs asthma", "Viral wheeze vs asthma; treat by frequency", "Separate viral wheeze from asthma; step by frequency"],
["Delivery", "Nebulisation first", "Spacer preferred", "Spacer with mask always preferred", "Spacer first; nebuliser only for severe attacks"],
["Acute steroid", "Dexamethasone 0.6 mg/kg IM or prednisolone 1–2 mg/kg/day", "Oral prednisolone", "Oral prednisolone 1–2 mg/kg (max 40 mg) 3–5 days", "Oral prednisolone; IM dexamethasone if vomiting"],
["Preventer (6–11 y)", "Not detailed", "Low-dose ICS", "Low-dose ICS (or ICS whenever SABA)", "Low-dose ICS daily, step by control"],
["LTRA role", "Not specified", "Alternative", "Alternative/alternative add-on", "Montelukast as alternative or add-on"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "What it looks like", "Significance"], [
["Wheeze", "Musical, high-pitched, expiratory", "The cardinal sign — but absent in a severe, tired child (silent chest)"],
["Cough", "Often worse at night and with exertion", "Can be the only symptom (cough-variant)"],
["Breathlessness", "Fast breathing, difficulty feeding or speaking", "Assess severity"],
["Chest indrawing / accessory muscles", "Visible work of breathing", "Moderate-to-severe attack"],
["Prolonged expiration", "Long expiratory phase", "Airflow obstruction"],
["Rhonchi, hyperinflation", "Coarse sounds, hyper-resonant chest", "Air trapping"],
["Irritability, drowsiness", "Hypoxia, exhaustion", "Severe/life-threatening"],
["Poor feeding, poor weight gain", "Recurrent symptoms, high work of breathing", "Uncontrolled disease"]])}
${box("red", "Red flags — severe or life-threatening attack", `<ul><li>Talks in words only, respiratory rate &gt;30, SpO₂ &lt;90%.</li><li>Accessory muscle use, grunting, nasal flaring.</li><li>Drowsy, confused, or <b>silent chest</b> — a pre-arrest sign.</li><li>Any of these: oxygen, repeated salbutamol, steroids, and urgent referral.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Argues against", "Best test to separate"], [
["Viral wheeze / bronchiolitis", "Under 2 years, wheeze only with colds, no interval symptoms", "Wheeze between colds, atopy", "Clinical course"],
["Pneumonia", "Fever, focal crackles, consolidation", "Bilateral wheeze, hyperinflation", "CXR"],
["Foreign body", "Sudden choking, unilateral wheeze or reduced sounds", "Recurrent bilateral wheeze", "CXR; bronchoscopy"],
["Croup (laryngotracheobronchitis)", "Barking cough, stridor, under 3 years", "Wheeze, no stridor", "Clinical"],
["Congenital heart disease / heart failure", "Poor feeding, hepatomegaly, murmur", "Atopy, wheeze-dominant", "Echo"],
["Cystic fibrosis", "Recurrent chest infections, failure to thrive, fatty stools", "Atopy, episodic wheeze", "Sweat test"],
["Gastro-oesophageal reflux", "Cough/wheeze after feeds, at night", "Trigger-related wheeze", "Trial of treatment; pH studies"],
["Allergic bronchopulmonary / anaphylaxis", "Sudden wheeze after allergen, urticaria", "Recurrent over time", "Clinical; try adrenaline if anaphylaxis"]])}
<h3>The typical patient</h3>
<p>A 4-year-old has wheezed with every cold this winter and coughs at night between colds, with a father who has asthma. This is <b>asthma</b> (not just viral wheeze) — the interval symptoms and family atopy point that way. He should start a low-dose inhaled corticosteroid through a spacer, with a written plan. A 14-month-old who only wheezes briefly with colds and is well in between has <b>viral wheeze</b> and may not need a preventer yet.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "When"], [
["Spirometry", "Confirms variable obstruction (FEV₁ reversibility)", "Children old enough to perform it (usually 6+ years)"],
["Peak expiratory flow", "Home monitoring and the action plan", "School-age children"],
["Chest X-ray", "Not routine", "Atypical story, focal signs, or failure to improve"],
["Allergy testing", "Identifies triggers and atopy", "Recurrent or persistent wheeze"],
["Trial of inhaled treatment", "Response supports the diagnosis", "Young children where testing is impossible"],
["Full blood count", "Eosinophilia supports atopy", "When the picture is unclear"]])}
${box("amber", "In the under-5s, diagnosis is clinical", `<p>Young children cannot do spirometry, so the diagnosis rests on the pattern: recurrent wheeze, triggers, interval symptoms, atopy and family history — and the response to a trial of an inhaled corticosteroid. Do not over-investigate a straightforward viral wheeze.${r(2)}</p>`)}
` },

{ id: "staging", title: "Control and the treatment steps", html: `
<div class="calc" data-calc="asthmachild"></div>
<h3>Assess control (same principle as adults, by age)</h3>
<p>Ask about daytime symptoms, night waking, reliever use and activity limitation over the last 4 weeks, and about exacerbations.</p>
<h3>GINA steps — children 6–11 years</h3>
${tbl(["Step", "Preferred treatment"], [
["1–2", "Low-dose ICS whenever the reliever (SABA) is taken, or daily low-dose ICS"],
["3", "Low-dose ICS–LABA, or medium-dose ICS, or low-dose ICS + montelukast"],
["4", "Refer: medium-dose ICS–LABA, add LTRA/LAMA, specialist review"],
["5", "Specialist: high-dose ICS, biologics"]])}
<h3>GINA steps — children 5 years and under</h3>
${tbl(["Step", "Treatment"], [
["1", "Reliever (salbutamol) as needed for episodic viral wheeze"],
["2", "Daily low-dose ICS (or montelukast) for recurrent or severe episodes"],
["3", "Double the ICS dose, or add montelukast"],
["4", "Refer to a paediatric respiratory specialist"]])}
` },

{ id: "manage", title: "Management: spacer first, then step", html: `
<h3>How to give the medicine</h3>
${box("green", "Spacer technique is the treatment", `<ul><li>Use a <b>spacer with a mask</b> for children under about 3–4 years, and a mouthpiece spacer for older children.</li><li>One puff at a time, shake the inhaler, breathe in and out 5 times through the spacer for each puff.</li><li>Nebulisers are for severe attacks or when no spacer is available — not routine.</li></ul>`)}
<h3>Acute attack</h3>
${tbl(["Severity", "Treatment"], [
["Mild/moderate", "Salbutamol 2–10 puffs via spacer every 20 minutes for the first hour (or nebulised 2.5 mg); review"],
["Moderate/severe", "As above, plus oxygen to SpO₂ ≥94%, and prednisolone 1–2 mg/kg (max 40 mg) or dexamethasone 0.6 mg/kg IM; refer to a higher centre"],
["Life-threatening", "Urgent: oxygen, repeated salbutamol + ipratropium, steroids, and critical-care transfer"]])}
<p>For a moderate-to-severe attack, Bhutan uses <b>salbutamol 2.5 mg nebulised every 15–20 minutes up to 3 doses</b>, then review by auscultation, with the first steroid dose, and referral with a medical escort.${r(1)}</p>
<h3>Chronic treatment</h3>
<ul>
<li>Start a <b>low-dose inhaled corticosteroid</b> (${dr("beclometasone", "beclometasone/budesonide")}) daily in any child with recurrent or persistent symptoms; step up by control.</li>
<li>Add ${dr("montelukast")} as an alternative or add-on; add an ICS–LABA (${dr("budesonide_formoterol", "budesonide–formoterol")}) from Step 3 in older children.</li>
<li>Recheck technique and adherence before stepping up; review growth at every visit.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card. All doses are by age/weight; always deliver inhaled drugs through a spacer.</p>
${tbl(["Drug", "Child dose", "Notes"], [
[dr("salbutamol_reliever", "Salbutamol (reliever)"), "100 mcg as needed; 2–10 puffs via spacer in attacks; nebulised 2.5 mg", "Spacer with mask under ~3–4 y"],
[dr("beclometasone", "Inhaled corticosteroid (ICS)"), "Low dose (beclometasone 100–200 mcg/day), step by control", "Rinse mouth; check growth"],
[dr("budesonide_formoterol", "Budesonide–formoterol"), "Twice daily from Step 3 (6–11 y), or SMART from 12 y", "Via spacer"],
[dr("montelukast"), "4 mg (2–5 y), 5 mg (6–14 y), 10 mg (15+ y) at night", "Alternative/alternative add-on"],
[dr("prednisolone"), "1–2 mg/kg/day (max 40 mg) for 3–5 days in attacks", "Dexamethasone 0.6 mg/kg IM if vomiting"],
[dr("ipratropium"), "0.25 mg nebulised (or 4–8 puffs) in severe attacks", "Add to salbutamol"]])}
` },

{ id: "populations", title: "Infants, exercise and the family", html: `
<h3>Infants and toddlers</h3>
<ul><li>Most wheeze in this age group is <b>viral</b>; treat each episode, and start a preventer only for recurrent or severe episodes.</li><li>Use a spacer with a mask; never give a metered-dose inhaler straight into a young child's mouth.</li></ul>
<h3>Exercise and school</h3>
<ul><li>Exercise-induced symptoms: warm up, use a reliever (or ICS–formoterol) before sport, and ensure the child has an inhaler and action plan at school.</li><li>A child with well-controlled asthma should not be excluded from sport.</li></ul>
<h3>The family</h3>
<ul><li>Stop smoking in the home and car; reduce biomass smoke — passive smoke is a major driver of childhood wheeze.</li><li>Teach the whole family the spacer technique and the action plan; involve the school.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Recurrent viral wheeze", "Reliever per episode; start low-dose ICS if episodes are frequent or severe"],
["Acute severe attack not improving", "Recheck technique, give ipratropium, ensure steroids are in, and refer urgently — consider magnesium in hospital"],
["Wheeze with focal signs or fever", "Think pneumonia or foreign body — reassess and X-ray if needed"],
["Cough-only presentation", "Cough-variant asthma: trial ICS and review the response"],
["Poor control despite treatment", "Check technique and adherence, then step up; consider triggers (smoke, pets, reflux)"],
["Adolescent non-adherence", "Involve the young person in decisions; simplify to once-daily or SMART where possible"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "How to recognise it", "Management"], [
["<b>Respiratory failure</b>", "Acute", "Silent chest, drowsiness, desaturation", "Oxygen, bronchodilators, steroids, ICU"],
["<b>Pneumothorax</b>", "Acute", "Sudden one-sided pain, hyper-resonance", "CXR; decompression"],
["<b>Growth and school impact</b>", "Late", "Falling growth, missed school", "Optimise control; review"],
["<b>Fixed airflow obstruction</b>", "Late", "Persistent obstruction in adulthood", "Early and sustained ICS"],
["<b>Oral-steroid side effects</b>", "Late", "From repeated courses", "Minimise courses; optimise preventer"]])}
<h3>Prognosis</h3>
<ul><li>Most children with asthma achieve full control and normal activities; many with early viral wheeze outgrow it.</li><li>The best predictors of doing well are good technique, adherence to a preventer, and a smoke-free home.</li></ul>
` },

{ id: "followup", title: "Follow-up, the action plan and prevention", html: `
${box("green", "Give the family a written plan", `<ul><li><b>Green (well):</b> preventer daily, no symptoms.</li><li><b>Amber (worse):</b> cough, wheeze or night waking — give extra reliever (or step up) and review.</li><li><b>Red (emergency):</b> severe breathlessness, reliever not lasting, or blue lips — start the acute plan and get urgent help.</li></ul>`)}
<ul>
<li>Review <b>every 3–6 months</b> (sooner if uncontrolled): symptoms, reliever use, technique, growth, and step therapy.</li>
<li>Yearly influenza vaccination; complete routine immunisations.</li>
<li>Reduce smoke and allergen exposure at home; encourage normal activity and sport.</li></ul>
${box("red", "Seek urgent help if", `<ul><li>Breathlessness with the child unable to speak or feed.</li><li>The reliever lasts less than 3–4 hours.</li><li>Blue lips, drowsiness, or the chest going quiet.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Spacer with mask for a young child", src: "images/asthma-spacer.jpg", mod: "Device photograph", ctx: "Inhaler delivery in children", loc: "Inhaler attached to a spacer", find: "A pressurised inhaler connected to a holding chamber (spacer)", interp: "A spacer is essential for every child using an inhaler — most of a poorly used inhaler lands in the mouth, not the lungs. Add a mask for children under about 3–4 years", by: "Tradimus", page: "https://commons.wikimedia.org/wiki/File:Asthma_spacer.JPG", lic: "CC BY-SA 3.0" })}
${fig({ title: "Peak flow meter (for older children)", src: "images/asthma-peak-flow.jpg", mod: "Device photograph", ctx: "Home monitoring", loc: "Hand-held device", find: "A peak expiratory flow meter for recording the best of three blows", interp: "For school-age children, peak flow turns symptoms into a number and drives the action plan", by: "melvil", page: "https://commons.wikimedia.org/wiki/File:Peak_flow_meter.jpg", lic: "CC BY-SA 4.0" })}
</div>
<h3>Link-only images</h3>
<ul><li>Hyperinflation on chest X-ray: see the <a href="#/d/asthma-adult/images">adult asthma chapter</a>.</li><li>Paediatric wheeze and bronchiolitis imaging: <a href="https://radiopaedia.org/articles/bronchiolitis" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Wheeze in a child — is it asthma?", [
F.s("Recurrent wheeze, cough or breathlessness"), F.a,
F.d("Under 5 years?"), F.a,
F.b([["Yes", F.s("Viral wheeze (only with colds) vs asthma (interval symptoms, atopy)")], ["No", F.s("Confirm with spirometry (FEV₁ reversibility)")]]), F.a,
F.d("Recurrent, trigger-related, or interval symptoms?"), F.a,
F.b([["Yes", F.ok("Asthma: low-dose ICS via spacer, written plan")], ["No", F.s("Episodic viral wheeze: reliever per episode, review")]])])}
${F.chart("2 · Acute asthma in a child", [
F.s("Assess severity: speech, RR, SpO₂, accessory muscles, conscious level"), F.a,
F.d("Life-threatening (drowsy, silent chest, cyanosis)?"), F.a,
F.b([["Yes", F.e("Urgent: oxygen, salbutamol + ipratropium, steroids, ICU transfer")], ["No", F.s("Moderate/severe (words, accessory muscles, SpO₂ &lt;90%)?")]]), F.a,
F.d("Moderate/severe?"), F.a,
F.b([["Yes", F.s("Salbutamol every 15–20 min (up to 3 doses), prednisolone 1–2 mg/kg, refer")], ["No", F.ok("Mild: salbutamol via spacer, review")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Spacer first, always.</b> A metered-dose inhaler given straight into a child's mouth mostly fails; the spacer is the treatment.</li>
<li><b>Not every wheezy toddler has asthma.</b> Look for interval symptoms and atopy before starting a long-term preventer.</li>
<li><b>Silent chest in a tiring child is a warning, not relief.</b> Act on it immediately.</li>
<li><b>Check growth and technique at every review</b> — both are markers of how well the asthma (and its treatment) is doing.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Giving an inhaler without a spacer", "Most of the dose is lost", "Spacer with mask under ~3–4 years"],
["Treating every wheeze with antibiotics", "Pointless exposure", "Viral wheeze needs a reliever, not antibiotics"],
["Using a nebuliser for every attack", "Slower, no better than a spacer for most children", "Spacer with 2–10 puffs is first line"],
["Delaying steroids in a moderate/severe attack", "Prolonged attack, admission", "Give prednisolone/dexamethasone early"],
["Ignoring passive smoke exposure", "Persistent poor control", "Ask and advise at every visit"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "How do you tell viral wheeze from asthma in a young child?", "Viral wheeze occurs only with colds with no symptoms between episodes; asthma has interval symptoms, trigger-related wheeze, atopy or a family history.")}
${qa("Intern/MO", "Why is spirometry not used to diagnose asthma in children under about 5 years?", "Young children cannot perform the forced manoeuvre; diagnosis rests on the clinical pattern and the response to a trial of inhaled treatment.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "How should inhaled medicine be delivered to a child?", "Always through a spacer (with a mask under about 3–4 years), one puff at a time, breathing in and out five times per puff.")}
${qa("Intern/MO", "Salbutamol dose in an acute attack in a child?", "2–10 puffs via spacer every 20 minutes for the first hour, or nebulised 2.5 mg (Bhutan STG: 2.5 mg, repeat every 15–20 min up to 3 doses).")}
${qa("Intern/MO", "Steroid dose for a child with a moderate/severe attack?", "Prednisolone 1–2 mg/kg once daily (max 40 mg) for 3–5 days, or dexamethasone 0.6 mg/kg IM as a single dose.")}
${qa("Specialist", "What is the first-line preventer for a child with recurrent asthma symptoms?", "A low-dose inhaled corticosteroid (beclometasone or budesonide) given daily through a spacer, stepped up or down by control.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §12.2.2 Bronchial asthma (children) and §3.8 Bronchial asthma (adults).</li>
<li id="ref-2">Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention. 2026. <a href="https://ginasthma.org" target="_blank" rel="noopener">ginasthma.org</a></li>
<li id="ref-3">British Thoracic Society / Scottish Intercollegiate Guidelines Network. British guideline on the management of asthma (SIGN 158). 2019. <a href="https://www.brit-thoracic.org.uk/quality-improvement/guidelines/asthma/" target="_blank" rel="noopener">brit-thoracic.org.uk</a></li>
<li id="ref-4">National Institute for Health and Care Excellence. NG80: Asthma — diagnosis, monitoring and chronic asthma management. 2017 (updated 2021). <a href="https://www.nice.org.uk/guidance/ng80" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-5">ICMR, Department of Health Research, India. Standard Treatment Workflows: Asthma (including paediatric asthma). New Delhi, 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-6">Nelson Textbook of Pediatrics, 21st ed. — foundational pathophysiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["GINA paediatric steps (6–11 y and ≤5 y)", "<span class='pass'>Verified</span>", "GINA 2026"],
["Spacer-first delivery", "<span class='pass'>Verified</span>", "GINA/BTS; Bhutan STG uses nebulisation (noted)"],
["Acute attack treatment", "<span class='pass'>Verified</span>", "Bhutan STG 2024 §12.2.2 (salbutamol 2.5 mg, dexamethasone 0.6 mg/kg IM / prednisolone 1–2 mg/kg)"],
["Bhutan STG child content", "<span class='pass'>Verified</span>", "Read directly from STG 2024 §12.2.2"],
["Drug doses", "<span class='pass'>Checked</span>", "GINA/BnFC; see drug cards"],
["Nebulisation vs spacer", "<span class='flag'>Flag</span>", "Bhutan STG leads with nebulisation; international guidance prefers spacer — noted"],
["Images", "<span class='pass'>Done</span>", "Two Commons images (spacer, peak-flow); licences checked"],
["References", "<span class='pass'>Done</span>", "All traceable; DOIs/links where available"]], "qc")}
` }
]
});
