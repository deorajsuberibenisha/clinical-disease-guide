/* Tuberculosis — children & adolescents */
registerPage({
id: "tb-child",
title: "Tuberculosis — Children & Adolescents",
subtitle: "Paediatric diagnosis, the 4-month regimen, TB meningitis, preventive treatment and care of the vulnerable child",
age: "Children & Adolescents", specs: ["paeds", "id", "resp", "ph"],
keywords: ["tuberculosis", "TB", "child TB", "paediatric TB", "pulmonary TB", "lymph node TB", "TB meningitis", "Xpert Ultra", "gastric aspirate", "stool Xpert", "TST", "mantoux", "SHINE", "dispersible FDC", "isoniazid", "rifampicin", "pyrazinamide", "ethambutol", "3HR", "6H", "levofloxacin", "BCG", "contact tracing", "DR-TB children"],
related: ["tb-adult", "dm-child"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if a final WHO DR-TB guideline changes practice)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children get TB differently from adults: fewer bacilli, harder-to-catch samples, and disease that hides in the lymph nodes rather than the sputum. Think of TB in every child with a persistent fever or cough, poor weight gain, and a sick contact.</p>
<div class="glance">
<div><h4>Who to suspect</h4><p>Close contact with an infectious case, plus any of: unremitting fever &gt;2 weeks, persistent cough &gt;2 weeks, weight loss or flattening growth, or reduced activity and anorexia.</p></div>
<div><h4>Confirm</h4><p><b>Xpert Ultra is the initial test</b> on sputum, gastric aspirate, nasopharyngeal aspirate or <b>stool (two samples)</b>. Chest X-ray in every case, used to grade severity.</p></div>
<div><h4>Severity</h4><p><b>Non-severe:</b> peripheral node TB, intrathoracic nodes without obstruction, uncomplicated effusion, or one-lobe non-cavitary disease. <b>Severe:</b> cavities, bilateral or miliary disease.</p></div>
<div><h4>Treatment</h4><p>Non-severe PTB (3 months–&lt;16 y): <b>2HRZE/2HR (4 months)</b>. Severe PTB: <b>2HRZE/4HR</b>. TB meningitis: <b>2HRZE/10HR</b> plus prednisolone.</p></div>
<div><h4>FDC by weight</h4><p>Dispersible RHZ 75/50/150 + E 100 mg: 4–7 kg 1 tab · 8–11 kg 2 · 12–15 kg 3 · 16–24 kg 4; ≥25 kg adult FDC.</p></div>
<div><h4>Red flags</h4><ul><li>Headache, vomiting, drowsiness (meningitis)</li><li>Breathlessness or airway obstruction</li><li>Vomiting, jaundice (DILI)</li><li>Poor response at 2–3 months</li></ul></div>
<div><h4>Always</h4><p>Find and treat the adult source. Give preventive treatment to contacts under 5, and BCG to the newborn.</p></div>
</div>
<div class="calc" data-calc="tbpwband"></div>
${box("bt", "Bhutan note", `<p>The 2024 paediatric guideline makes <b>Xpert Ultra the initial test</b> (smear is no longer an initial test), uses <b>two stool samples</b> for higher yield, and adopts the WHO <b>4-month regimen (2HRZE/2HR)</b> for non-severe disease from 3 months of age. Do not monitor treatment with Xpert or chest X-ray — use weight, symptoms and (only if positive at diagnosis) sputum smear. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What childhood TB is and who gets it", html: `
<h3>Why children are different</h3>
<p>Childhood TB is usually <b>paucibacillary</b> — few bacilli in hard-to-reach sites such as intrathoracic lymph nodes. The child rarely coughs up a good sputum sample, smear is often negative, and most children are <b>not infectious</b> (the adult in the house is the source). That is why diagnosis rests on contact history, symptoms, the chest X-ray and Xpert on non-sputum samples, and why treatment decisions are often made on a strong clinical picture rather than a single positive test.</p>

<h3>Where childhood TB comes from</h3>
<ul>
<li><b>About 90% of childhood disease develops within one year of exposure</b> to an infectious adult — usually in the same household.${r(2)}</li>
<li>Very young children (under 2–5 years), especially infants, have the highest risk of progressing from infection to disease and of developing severe forms (miliary and meningitis).</li>
<li>HIV, severe malnutrition, and infancy all weaken the T-cell response that walls off the bacillus.</li>
<li><b>BCG</b> at birth gives up to about 90% protection against miliary TB and TB meningitis, though it does not prevent primary infection; protection wanes towards zero by about age 20.${r(2)}</li></ul>

<h3>Risk factors</h3>
${tbl(["Risk factor", "Why"], [
["Household contact with infectious TB", "The defining exposure in childhood"],
["Age under 5 years (especially under 2)", "Immature immunity; faster progression; higher risk of disseminated and meningeal disease"],
["HIV infection", "Severely increases progression and mortality; children with HIV get screened and treated differently"],
["Severe malnutrition", "Depresses cell-mediated immunity and masks symptoms"],
["Measles, whooping cough and other recent infections", "Transient immune suppression"],
["Adolescence", "A second peak of adult-type (cavitary) disease as immunity changes"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Why young children get severe TB", [
F.s("Usually infected by an adult in the household"), F.a,
F.s("Primary infection: lung focus + enlarged hilar lymph nodes (primary complex)"), F.a,
F.d("Age under 5, HIV or severe malnutrition?"), F.a,
F.b([
["Yes", F.e("Poor containment: progressive lymph node disease, airway compression, <b>miliary TB and TB meningitis</b> within months")],
["No (older child)", F.s("Often contained; adolescents develop adult-type cavitary disease")]]), F.a,
F.ok("Contact tracing and TB preventive treatment protect the youngest children")])}
<h3>The same story, a smaller stage</h3>
<ol class="chain">
<li><b>Primary infection:</b> an infant inhales bacilli from a coughing adult. Bacilli settle in the lung and drain to the <b>hilar and paratracheal lymph nodes</b>.</li>
<li><b>The primary complex</b> (lung focus + draining nodes) is the signature of childhood TB. The nodes enlarge, and because a child's airway is narrow and soft, those nodes can <b>compress the bronchi</b> — causing collapse, hyperinflation or wheeze — even with few bacilli.</li>
<li><b>Control or progression:</b> in most children the immune system walls the bacilli into granulomas. In the young, malnourished or HIV-infected child, the granuloma fails and bacilli spill into the blood — giving <b>miliary TB and meningitis</b>, the two forms that kill.</li>
<li><b>Adolescence</b> brings adult-type disease: apical cavitation, smear-positive sputum, and infectivity.</li></ol>
<h3>Why young children get severe disease</h3>
<p>The risk of disseminated disease is highest in the first two years of life because the Th1 immune response is still maturing. This is also why a child under 2 with miliary TB is always assessed for TB meningitis, and why infants of TB mothers need preventive treatment and careful follow-up. Untreated, infants with miliary or meningeal TB can die within weeks; treated early, most recover.</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan 2024 (BT-PED)", "India (ICMR/NTEP)", "WHO", "This guide"], [
["4-month regimen (SHINE)", "2HRZE/2HR, 3 months–16 years, non-severe", "Not in the 2022 STW (all PTB 2HRZE/4HRE)", "2HRZ(E)/2HR, 3 months–16 years", "Follow Bhutan: 2HRZE/2HR (Bhutan keeps ethambutol in the IP)"],
["SHINE upper age", "\"16 years\" (p.29) vs \"15 years\" (Key updates)", "—", "3 months–16 years", "Use \"under 16 years\" and note the internal inconsistency"],
["TBM regimen", "2HRZE/10HR, or optional 6HRZEto (conditional)", "2HRZE/10HRE", "2HRZE/10HR, or 6HRZEto (HIV-negative children)", "2HRZE/10HR first; 6HRZEto on specialist advice"],
["TBM steroids", "Prednisolone 2–4 mg/kg/day (max 60 mg) ×4 weeks, taper 1–2 weeks", "Prednisolone 2 mg/kg ×4 weeks, taper 4 weeks", "Dexamethasone or prednisolone, 6–8 weeks", "Follow Bhutan's prednisolone schedule"],
["Osteoarticular TB", "2HRZE/10HR", "2HRZE/10HRE (spine)", "2HRZE/10HR", "Follow Bhutan"],
["Child doses", "H 10 (7–15), R 15 (10–20), Z 35 (30–40), E 20 (15–25) mg/kg", "Similar", "Identical", "Use BT-PED values"],
["TPT in children", "3HR dispersible or 6H in current use; 3HP ≥2 y; 1HP ≥13 y", "6H, 3HP", "6H, 3HR, 3HP (≥2 y), 1HP (≥13 y)", "Use Bhutan's 3HR or 6H"],
["DR-TB in children", "Shorter all-oral Bdq regimen at all ages; BPaLM ≥14 y only", "PMDT 2021", "2025 BDLLfxC all ages (not yet in Bhutan)", "Follow Bhutan; BPaLM only ≥14 y"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Childhood TB is quieter than the adult disease. The child may simply stop gaining weight, lose energy, or have a fever that will not go away. The most important single clue is the <b>sick contact</b>.</p>
${tbl(["Feature", "What it looks like in a child", "Significance"], [
["Persistent cough", "More than 2 weeks, often dry", "The commonest symptom; but intrathoracic node disease can present with wheeze or stridor from airway compression"],
["Fever", "Unremitting, more than 2 weeks, often low-grade", "Active disease"],
["Poor weight gain / weight loss", "Loss of more than 5%, weight-for-age below −3 SD, or a flattening growth curve over 3 months", "One of the four cardinal features; weigh at every visit"],
["Fatigue, reduced activity, anorexia", "A child who has stopped playing or eating", "A cardinal feature, easy to dismiss"],
["Lymph node enlargement", "Slow, matted, often multiple cervical nodes; may fistulate", "The commonest extrapulmonary form"],
["Wheeze or stridor", "From nodes compressing the airway", "Think intrathoracic node TB"],
["Meningitis signs", "Headache, vomiting, irritability, drowsiness, bulging fontanelle in infants, neck stiffness, cranial-nerve palsies", "Emergency: treat and start steroids now"],
["Miliary TB", "Fever, breathlessness, hepatosplenomegaly, tiny nodules on CXR", "Assess for meningitis in every child under 2"]])}
${box("red", "Red flags", `<ul>
<li><b>Headache, vomiting, drowsiness, fits, bulging fontanelle</b> — TB meningitis: start treatment and steroids at once.</li>
<li><b>Stridor, severe wheeze or respiratory distress</b> — airway compression by nodes.</li>
<li><b>Vomiting, jaundice or tender liver on treatment</b> — drug-induced liver injury.</li>
<li><b>Poor response at 2–3 months</b> — reconsider diagnosis, adherence and drug resistance, and refer.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Argues against", "Best test to separate"], [
["Pneumonia", "Fever, cough, consolidation", "Acute onset; responds to antibiotics", "Response to treatment; Xpert negative"],
["Viral or reactive airway disease / asthma", "Wheeze, cough", "Recurrent, triggers, family history; no weight loss", "Response to bronchodilators; normal CXR between episodes"],
["Foreign body", "Sudden cough, wheeze, unilateral signs", "Choking episode; no fever or weight loss", "CXR (hyperinflation/atelectasis); bronchoscopy"],
["Lymphoma / leukaemia", "Lymph nodes, fever, weight loss", "Rapid, widespread nodes; cytopenias; night sweats", "Full blood count, node biopsy, marrow"],
["Non-tuberculous mycobacteria (NTM)", "Cervical node disease in a well child", "No sick contact; TST weakly positive", "Culture of the node"],
["HIV-related lymphadenopathy / infections", "Nodes, fever, failure to thrive", "Maternal HIV or risk factors", "HIV test, then appropriate work-up"],
["Chronic suppurative lung disease / bronchiectasis", "Chronic cough", "Clubbing, repeated infections, no sick contact", "High-resolution CT"],
["Gastro-oesophageal reflux", "Cough, wheeze", "Worse at night and after feeds; no fever or weight loss", "Trial of treatment; pH/impedance where available"]])}
<h3>The typical patient</h3>
<p>A 4-year-old has coughed for three weeks, is eating poorly and has stopped gaining weight. His grandmother, who lives in the same house, has been coughing for two months. This is <b>childhood tuberculosis</b>: the contact history and the weight faltering are more important than the cough. The next steps are a chest X-ray and Xpert on two stool samples, a careful look at the neck for nodes, and a decision about preventive treatment for any younger siblings while this child is investigated.</p>
` },

{ id: "invest", title: "Investigations and diagnosis", html: `
<h3>The paediatric approach (BT-PED 2024)</h3>
<ol>
<li><b>Xpert Ultra is the initial test</b> for suspected pulmonary and extrapulmonary TB. AFB microscopy is no longer an initial test.</li>
<li><b>Samples:</b> expectorated or induced sputum, gastric aspirate, nasopharyngeal aspirate, and <b>stool — two stool samples give a higher yield than one</b>.</li>
<li><b>Chest X-ray in every case</b>, used to grade <b>severity</b> — not to monitor response.</li>
<li><b>TST (tuberculin skin test):</b> a positive test supports the diagnosis, but <b>up to 40% of culture-confirmed children are TST-negative</b>, so a negative test does not exclude TB. Newer antigen skin tests (Cy-Tb) and IGRA are described but IGRA is not routine.</li>
<li><b>When Xpert is negative</b>, the classic triad still makes the diagnosis: recent contact, a positive TST, and suggestive symptoms or chest X-ray.</li>
<li><b>A trial of TB treatment is not recommended</b> as a diagnostic method.</li></ol>
<h3>Baseline assessment</h3>
<p>Weight and height (plot on the growth chart), symptom review against the four cardinal features, HIV testing in high-risk children, and a search for the source case. Routine liver tests are <b>not</b> needed before starting treatment in an otherwise well child.</p>
${box("amber", "Severity decides the regimen, not the smear", `<p>Grade the chest X-ray as <b>non-severe</b> (peripheral node TB; intrathoracic nodes without obstruction; uncomplicated effusion; one-lobe, non-cavitary disease) or <b>severe</b> (cavities, bilateral disease, or a miliary pattern). This — not the smear result — chooses between 4 and 6 months of treatment.${r(2)}</p>`)}
` },

{ id: "staging", title: "Severity, regimens and referral", html: `
<h3>Match the regimen to the disease</h3>
${tbl(["Group", "Regimen", "Notes"], [
["Infants &lt;3 months or &lt;3 kg (any severity, PTB or peripheral node)", "2HRZE/4HR", "Neonatal and young-infant disease is treated as severe"],
["3 months to &lt;16 years, <b>non-severe</b> PTB or isolated peripheral node TB", "<b>2HRZE/2HR (4 months)</b>", "The WHO SHINE regimen; ethambutol kept in the IP in Bhutan"],
["<b>Severe</b> PTB", "2HRZE/4HR", "Cavities, bilateral or miliary disease"],
["Osteoarticular TB", "2HRZE/10HR", "Prolonged course"],
["<b>TB meningitis</b>", "<b>2HRZE/10HR</b>, or the <b>6HRZEto</b> intensive regimen (conditional)", "Admit; add prednisolone"],
["Other EPTB", "2HRZE/4HR", "As for non-severe disease"]])}
<p>For TB meningitis, the short intensive <b>6HRZEto</b> regimen (6 months, with higher isoniazid and rifampicin doses plus ethionamide) is a <b>conditional</b> option for bacteriologically confirmed or clinically diagnosed drug-susceptible TBM in <b>HIV-negative</b> children, used on specialist advice.${r(2, 5)}</p>
${box("red", "Refer when", `<ul><li>Severe disease (miliary, meningitis, airway obstruction, extensive PTB).</li><li>Poor response at 2–3 months of treatment.</li><li>Presumptive drug-resistant TB.</li><li>Symptomatic drug-induced liver injury.</li></ul>`)}
` },

{ id: "manage", title: "Management: regimens, doses and steroids", html: `
<h3>Child doses (per day)</h3>
${tbl(["Drug", "Dose (mg/kg/day)", "Range", "Maximum"], [
[dr("isoniazid", "Isoniazid (H)"), "10", "7–15", "300 mg"],
[dr("rifampicin", "Rifampicin (R)"), "15", "10–20", "600 mg"],
[dr("pyrazinamide", "Pyrazinamide (Z)"), "35", "30–40", "2,000 mg"],
[dr("ethambutol", "Ethambutol (E)"), "20", "15–25", "1,200 mg"]])}
<h3>Dispersible fixed-dose combinations</h3>
${tbl(["Weight", "Intensive phase: RHZ 75/50/150", "Intensive phase: E 100 mg", "Continuation phase: RH 75/50"], [
["4–7 kg", "1 tablet", "1 tablet", "1 tablet"],
["8–11 kg", "2", "2", "2"],
["12–15 kg", "3", "3", "3"],
["16–24 kg", "4", "4", "4"],
["≥25 kg", "adult FDC (see below)", "—", "adult FDC"]])}
<p>Children <b>25 kg and over</b> switch to adult FDC: 25–29 kg 2 tablets; 30–34 kg 3; 35–64 kg 4; over 65 kg 5. These bands differ slightly from the adult table — an internal inconsistency worth flagging to the programme. <b>Re-weigh weekly for the first month, then monthly, and adjust the dose.</b>${r(2)} Disperse the tablets in water and give the whole volume (a little sugar or milk improves the taste).</p>
${box("amber", "Infants below 4 kg", `<p>BT-PED gives no weight band below 4 kg. WHO gives separate guidance for infants 3–3.9 kg and for preterm babies — prescribe these under paediatric/neonatal specialist direction. ${LB.bt("EVIDENCE GAP")}</p>`)}

<h3>Steroids — when and how much</h3>
${box("green", "Prednisolone for children", `<p><b>Indications:</b> TB meningitis, pericardial TB, airway compression by nodes, endobronchial TB, and severely ill disseminated TB. <b>Dose:</b> prednisolone <b>2–4 mg/kg/day (maximum 60 mg) for 4 weeks, then taper over 1–2 weeks</b>.${r(2)}</p>`)}

<h3>Supportive care</h3>
<ul>
<li><b>Nutrition:</b> treat malnutrition actively — it is both a cause and a consequence of TB, and recovery depends on it. Plot weight at every visit.</li>
<li><b>Pyridoxine</b> 0.5–1 mg/kg/day in HIV and malnutrition (for a child ≤25 kg, half a 25 mg tablet). For established neuropathy, 2–5 mg/kg/day.</li>
<li><b>HIV:</b> ART within 2 weeks of starting treatment (see populations).</li>
<li><b>Airway obstruction:</b> steroids and early referral; some children need bronchoscopy or surgery.</li></ul>

<h3>Follow-up reviews (BT-PED)</h3>
${tbl(["Child", "Review schedule", "What to check"], [
["HIV-negative", "Weeks 2 and 4, end of intensive phase, then every 2 months", "Symptoms, weight, adherence, adverse effects"],
["HIV-positive", "Weeks 2 and 4, then monthly", "As above, plus ART and co-trimoxazole"],
["Bacteriologically positive at diagnosis", "Smear at month 2 and at the end", "Only if positive at diagnosis — do not monitor with Xpert or CXR"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card. Paediatric doses are weight-based with a ceiling, never above the adult maximum.</p>
${tbl(["Drug", "Child dose", "Key cautions"], [
[dr("isoniazid"), "10 mg/kg/day (max 300 mg); 15–20 mg/kg in 6HRZEto", "Peripheral neuropathy — give pyridoxine in HIV/malnutrition"],
[dr("rifampicin"), "15 mg/kg/day (max 600 mg); 22.5–30 mg/kg in 6HRZEto", "Orange secretions; interactions"],
[dr("pyrazinamide"), "35 mg/kg/day (max 2,000 mg)", "Hepatotoxicity; arthralgia"],
[dr("ethambutol"), "20 mg/kg/day (max 1,200 mg)", "Optic neuritis — avoid under ~5 years unless essential"],
[dr("rifapentine"), "3HP from 2 years (weight-banded)", "Not under 2 years"],
[dr("levofloxacin"), "15–20 mg/kg/day (MDR-contact prevention)", "QT; tendinopathy"],
[dr("moxifloxacin"), "10–15 mg/kg/day (max 400 mg) in DR-TB", "QT"],
[dr("bedaquiline"), "Weight-banded; all ages allowed in Bhutan", "ECG monitoring"],
[dr("linezolid"), "15 mg/kg/day (max 600 mg) in DR-TB", "Monthly blood count; neuropathy"],
[dr("clofazimine"), "2–5 mg/kg/day (max 100 mg)", "Skin discoloration"],
[dr("cycloserine"), "15–20 mg/kg/day (max 1,000 mg)", "CNS effects; pyridoxine"],
[dr("ethionamide"), "15–20 mg/kg/day (max 1,000 mg); 17.5–22.5 mg/kg in 6HRZEto", "Severe nausea; hypothyroidism"],
[dr("delamanid"), "25–100 mg twice daily by age band", "ECG monitoring"],
[dr("pyridoxine"), "0.5–1 mg/kg/day (prevention); 2–5 mg/kg (neuropathy)", "Give ≥12 h apart from ATT (Bhutan)"],
[dr("cotrimoxazole"), "5 mg/kg trimethoprim once daily (HIV)", "From 6 weeks of age"],
[dr("dolutegravir"), "Weight-banded from 4 weeks / &gt;3 kg; doubled with rifampicin", "HIV programme dosing"]])}
` },

{ id: "populations", title: "Infants, HIV, malnutrition and adolescents", html: `
<h3>Neonates and young infants</h3>
<ul>
<li>Infants under 3 months or under 3 kg are treated as <b>severe</b> regardless of site: 2HRZE/4HR.</li>
<li>Neonatal disease is usually acquired from the mother or a household contact. An infant of a mother with TB gets <b>6 months of preventive treatment plus BCG</b> once active disease is excluded.</li>
<li>Any infant under 2 with miliary TB is assessed for TB meningitis.</li></ul>
<h3>TB and HIV in children</h3>
<ul>
<li><b>ART within 2 weeks</b> of starting anti-TB treatment. For TB meningitis, delay ART by <b>at least 4 weeks</b> and start within 8 weeks.</li>
<li><b>Dolutegravir-based ART from 4 weeks of age and over 3 kg</b> (weight-banded; doubled with rifampicin).</li>
<li><b>Co-trimoxazole from 6 weeks of age</b> for all TB/HIV children.</li>
<li>Infants of an HIV-positive mother receive preventive treatment <b>only</b> if they had a TB contact and active TB is excluded (chest X-ray plus Xpert Ultra).</li></ul>
<h3>Malnutrition</h3>
<ul><li>Malnutrition is both a cause and a consequence: it doubles the risk of TB and worsens outcomes. Treat both together, with therapeutic feeding and careful weight monitoring.</li><li>Give <b>pyridoxine 0.5–1 mg/kg/day</b> in HIV and malnutrition.</li></ul>
<h3>Adolescents</h3>
<ul>
<li>Adolescents develop <b>adult-type</b> disease: apical cavities, smear-positive sputum and infectivity. Take the same infection-control precautions as for adults.</li>
<li>From 12 years and over 40 kg, the 4-month HPMZ regimen may be considered (see the adult chapter).</li>
<li>BPaLM for DR-TB is licensed from 14 years.</li></ul>
` },

{ id: "scenarios", title: "Drug-resistant TB, DILI and other hard situations", html: `
<h3>Drug-resistant TB in children</h3>
<ul>
<li>The <b>shorter all-oral bedaquiline-containing regimen</b> (4–6 Bdq(6 m)-Lfx-Cfz-Z-E-Hh-Eto, then 5 Lfx-Cfz-Z-E) may be used <b>at all ages</b>.</li>
<li><b>Bedaquiline and delamanid are allowed in children of all ages</b>; <b>BPaLM is only from 14 years</b>.</li>
<li>Presumptive DR-TB (a contact of a resistant case, or poor response on a standard regimen) is a reason to refer to the NTCP DR-TB pathway.</li></ul>
<h3>Drug-induced liver injury in children (BT-PED)</h3>
${box("red", "When to stop", `<p>Stop all anti-TB drugs if the child develops <b>vomiting, jaundice or a tender liver with ALT more than 3× ULN plus symptoms</b>. Routine liver tests are not needed, and an asymptomatic rise below 5× ULN is <b>not</b> a reason to stop. Screen for viral hepatitis.${r(2)}</p>`)}
<h4>Reintroduction (differs from adults)</h4>
<ol>
<li>When ALT is <b>&lt;2.5× ULN</b> and symptoms have resolved, restart <b>ethambutol from day 1</b>.</li>
<li>Add <b>rifampicin</b> escalating over 48–72 hours (5 mg/kg day 1, 10 day 2, 15 day 3), then recheck ALT.</li>
<li>Add <b>isoniazid</b>, escalated to full dose over 3 days, then recheck ALT.</li>
<li>Add <b>pyrazinamide from day 8</b>, escalated over 3 days.</li></ol>
<p>If the child has <b>underlying liver disease</b>, omit pyrazinamide and give <b>HRE for 9 months</b>. If rifampicin is not tolerated, use <b>isoniazid + levofloxacin + ethambutol + streptomycin</b>.${r(2)}</p>
<h3>Other hard situations</h3>
${tbl(["Situation", "What to do"], [
["Airway compression by nodes", "Steroids; urgent referral; bronchoscopy/surgery if needed"],
["Poor response at 2–3 months", "Reconsider the diagnosis, check adherence, exclude DR-TB, and refer"],
["Symptomatic DILI", "Stop treatment; reintroduce per the paediatric scheme above; refer if severe"],
["Contact of MDR/RR-TB", "After assessment and a positive test: levofloxacin 15–20 mg/kg/day for 6 months"],
["Severe rash or anaphylaxis", "Stop all drugs immediately and refer"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "How to recognise it", "Management"], [
["<b>TB meningitis</b>", "Early", "Headache, vomiting, irritability, drowsiness, cranial-nerve palsies, bulging fontanelle", "Admit; treatment + prednisolone; manage hydrocephalus and raised pressure"],
["<b>Miliary TB / respiratory failure</b>", "Early", "Breathlessness, hepatosplenomegaly, tiny nodules on CXR", "Treat TB; oxygen; consider steroids if severely ill"],
["<b>Airway compression</b>", "Early", "Stridor, wheeze, segmental collapse on CXR", "Steroids; referral; bronchoscopy or surgery"],
["<b>Pleural or pericardial effusion</b>", "Early", "Breathlessness, muffled heart sounds, raised JVP", "Drain if large; steroids for pericarditis"],
["<b>Spinal TB (Pott's)</b>", "Late", "Back pain, gibbus, leg weakness", "MRI; neurosurgery; 10-month regimen"],
["<b>Drug-induced liver injury</b>", "Early", "Vomiting, jaundice, tender liver", "Stop and reintroduce per the paediatric scheme"],
["<b>Post-TB bronchiectasis</b>", "Late", "Chronic productive cough, recurrent infections", "Symptomatic care; physiotherapy"],
["<b>Growth failure</b>", "Late", "Faltering growth despite treatment", "Nutrition; reassess for other causes"]])}
<h3>Prognosis</h3>
<ul>
<li>With prompt, complete treatment, childhood TB is <b>cured in the vast majority</b>, and early treatment of meningitis and miliary disease saves lives and brains.</li>
<li>Mortality concentrates in infants, HIV co-infection, severe malnutrition and late-presenting meningitis.</li>
<li>Late diagnosis of TB meningitis is the leading cause of death and disability in childhood TB — the single most important factor under the clinician's control is how quickly treatment and steroids begin.</li></ul>
` },

{ id: "followup", title: "Follow-up, prevention, contacts and counselling", html: `
<h3>Preventive treatment (TPT) in children</h3>
${box("green", "Give TPT without testing (after excluding active TB)", `<ul><li>Children <b>under 5 years</b> who are close contacts of pulmonary TB.</li><li>All <b>PLHIV</b> children (with a chest X-ray and TPT if it is normal).</li></ul>`)}
<p><b>Regimens:</b> WHO options are 6H (all ages), 3HR (all ages), 3HP (≥2 years) and 1HP (≥13 years). <b>In current Bhutan use: 3HR dispersible or 6H.</b>${r(2, 7)}</p>
${tbl(["Regimen", "Age", "Notes"], [
["<b>3HR</b> (dispersible)", "All ages", "The usual choice in Bhutan; H50/R75 dispersible tablets by weight"],
["<b>6H</b>", "All ages", "Isoniazid 7–15 mg/kg/day, 6 months"],
["<b>3HP</b>", "2 years and over", "Weekly rifapentine + isoniazid"],
["<b>1HP</b>", "13 years and over", "Daily rifapentine + isoniazid for 1 month"]])}
<p><b>3HR weight bands (child &lt;25 kg, H50/R75):</b> 4–7 kg 1 tablet; 8–11 kg 2; 12–15 kg 3; 16–24 kg 4. Older children use adult HR 75/150 tablets. <b>In HIV:</b> use 3HR if not on nevirapine or a protease inhibitor, and 6H (7–15 mg/kg) if they are. <b>Over 30 kg or over 14 years:</b> 3HP as for adults.${r(2)}</p>
<p><b>Contacts of MDR/RR-TB:</b> levofloxacin <b>15–20 mg/kg/day for 6 months</b>, weight-banded (see the levofloxacin card).</p>

<h3>Contact investigation and BCG</h3>
<ul>
<li>Find and treat the <b>adult source</b> — this is how childhood TB is stopped.</li>
<li>Screen contacts for the <b>four cardinal symptoms</b>: unremitting fever &gt;2 weeks; persistent cough &gt;2 weeks; weight loss or flattening growth; fatigue or anorexia.</li>
<li><b>BCG at birth</b> protects against miliary TB and meningitis; give it to newborns (including infants of treated mothers, once their own active TB is excluded).</li></ul>
${box("green", "What to tell the family", `<ul>
<li>"TB in children is curable, and the full course of medicine is what makes the difference."</li>
<li>"Give the tablets at the same time every day; they can be dissolved in water, and a little sugar or milk helps the taste."</li>
<li>"Bring the child back if there is vomiting, yellow eyes, new sleepiness or trouble breathing."</li>
<li>"We must check everyone in the house who coughs — that is how we protect the other children."</li></ul>`)}
${box("red", "Come back or seek help immediately if", `<ul><li>Headache, vomiting, drowsiness or a fit.</li><li>Difficulty breathing or noisy breathing.</li><li>Yellow eyes or skin, or repeated vomiting.</li><li>The child is not gaining weight or is more unwell despite treatment.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>The two childhood patterns</h3>
<div class="pair">
${fig({ title: "Primary TB: bilateral hilar lymphadenopathy", src: "images/tb-child-hilar.jpg", mod: "Chest X-ray", ctx: "Primary pulmonary TB in a child", loc: "Both hila", find: "Enlarged hilar lymph nodes on both sides — the classic primary complex of childhood TB", signs: "Hilar adenopathy", interp: "Enlarged intrathoracic nodes are the signature of childhood TB; they can compress a child's soft airways even when the lungs look clear", ddx: "Lymphoma, sarcoidosis, other infections", by: "Al Ubaidi BA, J Fam Med Dis Prev 2018;4(1)", page: "https://commons.wikimedia.org/wiki/File:Chest_x-ray_of_bilateral_hilar_adenopathy_of_primary_pulmonary_tuberculosis.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Miliary tuberculosis", src: "images/tb-miliary-cxr.jpg", mod: "Chest X-ray", ctx: "Disseminated TB", loc: "Both lungs, diffusely", find: "Fine, widespread bilateral nodular infiltrates (millet-seed pattern)", signs: "Miliary pattern", interp: "Miliary disease means haematogenous spread and is most dangerous in the very young — always assess such a child for TB meningitis", ddx: "Viral pneumonitis, metastases, histiocytosis", by: "Herreros B et al., Pathogens 2018;7(3):72", page: "https://commons.wikimedia.org/wiki/File:Chest_radiograph_of_miliary_tuberculosis_1.jpg", lic: "CC BY 4.0" })}
</div>
<h3>Seeing the bacillus and the granuloma</h3>
<div class="pair">
${fig({ title: "Acid-fast bacilli (Ziehl–Neelsen stain)", src: "images/tb-afb-zneelsen.jpg", mod: "Microscopy", ctx: "Sputum or aspirate from a child with TB", loc: "Bacilli against a blue background", find: "Red, slightly curved acid-fast bacilli, magnified 1000×", signs: "Acid-fast bacilli", interp: "The organism seen directly. In children, samples are often paucibacillary and smear-negative — which is why Xpert Ultra on stool and aspirates is the initial test", ddx: "NTM look identical on smear", by: "CDC / Dr. George P. Kubica (PHIL #5789)", page: "https://commons.wikimedia.org/wiki/File:Mycobacterium_tuberculosis_Ziehl-Neelsen_stain_02.jpg", lic: "Public domain" })}
${fig({ title: "Caseating granuloma", src: "images/tb-caseating-granuloma.jpg", mod: "Histopathology (H&E, 40×)", ctx: "Tuberculous lymph node", loc: "Lymph node", find: "A core of caseous necrotic debris bordered by epithelioid cells, Langhans giant cells and lymphocytes", signs: "Caseous necrosis, Langhans giant cells", interp: "The histological hallmark of TB — the granuloma is the immune system's wall around the bacillus", ddx: "Fungal granuloma, sarcoidosis (non-caseating)", by: "Department of Pathology, Calicut Medical College", page: "https://commons.wikimedia.org/wiki/File:Tuberculous_lymph_node_with_caseating_granuloma_40X.jpg", lic: "CC BY-SA 4.0" })}
</div>
<h3>Link-only images</h3>
<ul>
<li>Primary TB in a child (hilar adenopathy and lower-lobe infiltrate): see the adult chapter's link list and <a href="https://radiopaedia.org/articles/tuberculosis-pulmonary-manifestations" target="_blank" rel="noopener">Radiopaedia</a>.</li>
<li>Childhood intrathoracic TB atlas: <a href="https://theunion.org" target="_blank" rel="noopener">The Union (free atlas)</a>.</li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Diagnosing a child with suspected TB", [
F.s("Cough/fever &gt;2 weeks, poor weight gain, reduced activity — or a close TB contact"), F.a,
F.s("Chest X-ray (grade severity) + Xpert Ultra on stool ×2 / sputum / gastric aspirate"), F.a,
F.d("Xpert Ultra positive?"), F.a,
F.b([["Yes", F.ok("TB diagnosed: classify severity, start the right regimen")], ["No", F.s("Use the triad: contact + positive TST + suggestive symptoms/CXR")]]), F.a,
F.s("HIV test in high-risk children; find and test the source case")])}
${F.chart("2 · Choosing the regimen", [
F.s("Child with drug-susceptible TB"), F.a,
F.d("Under 3 months or under 3 kg?"), F.a,
F.b([["Yes", F.ok("2HRZE/4HR (treat as severe)")], ["No", F.s("Classify by CXR")]]), F.a,
F.d("Severe (cavity, bilateral, miliary)?"), F.a,
F.b([["Yes", F.ok("2HRZE/4HR")], ["No", F.ok("Non-severe: 2HRZE/2HR (4 months)")]]), F.a,
F.d("Meningitis, bone/joint, or other site?"), F.a,
F.b([["Meningitis", F.s("2HRZE/10HR + prednisolone (admit)")], ["Bone/joint", F.s("2HRZE/10HR")], ["Other EPTB", F.s("2HRZE/4HR")]])])}
${F.chart("3 · Paediatric DILI", [
F.s("Vomiting, jaundice or tender liver with ALT &gt;3× ULN + symptoms"), F.a,
F.s("Stop ALL anti-TB drugs; screen for viral hepatitis"), F.a,
F.s("ALT &lt;2.5× ULN and symptoms resolved → reintroduce"), F.a,
F.s("Day 1: ethambutol → days 1–3: rifampicin 5→10→15 mg/kg"), F.a,
F.s("Then isoniazid over 3 days, then pyrazinamide from day 8"), F.a,
F.ok("Underlying liver disease: omit Z, give HRE for 9 months")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Weigh every child at every visit.</b> Weight faltering is one of the four cardinal features of childhood TB, and the dose depends on weight — re-weigh weekly for the first month.</li>
<li><b>Ask "who is coughing at home?"</b> The adult source is the key to diagnosis and to stopping further transmission.</li>
<li><b>A negative TST does not exclude TB</b> — up to 40% of culture-confirmed children are TST-negative.</li>
<li><b>Use two stool samples</b> for Xpert Ultra: the yield is higher than one.</li>
<li><b>Grade the CXR for severity, not to monitor response.</b> The CXR clears slowly and is not a follow-up tool.</li>
<li><b>Start treatment and steroids early in suspected meningitis</b> — the brain is being lost while you wait for a test.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Giving " + dr("ethambutol") + " to a child too young to report visual change", "Undetectable optic neuritis", "Avoid under about 5 years unless disease is severe or resistance is suspected"],
["Scaling an adult dose down to a child by guesswork", "Wrong dose", "Use the weight-band tables and re-weigh weekly"],
["Monitoring treatment with Xpert or chest X-ray", "False alarms and pointless radiation", "Use symptoms, weight, and (only if positive at diagnosis) smear at month 2 and the end"],
["Missing preventive treatment for contacts under 5", "Preventable disease, sometimes meningitis", "Give TPT to every young contact once active TB is excluded"],
["Delaying steroids in TB meningitis", "Death and permanent disability", "Start prednisolone with the first doses of anti-TB treatment"],
["Forgetting pyridoxine in HIV or malnutrition", "Preventable neuropathy", "0.5–1 mg/kg/day in at-risk children"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "What are the four cardinal symptoms of childhood TB?", "Unremitting fever over 2 weeks; persistent cough over 2 weeks; weight loss (over 5%), weight-for-age below −3 SD, or a flattening growth curve over 3 months; and fatigue, reduced activity or anorexia.")}
${qa("Intern/MO", "What is the initial test for suspected childhood TB in Bhutan, and on which samples?", "Xpert Ultra, on expectorated or induced sputum, gastric aspirate, nasopharyngeal aspirate or stool — using two stool samples for higher yield.")}
${qa("Intern/MO", "A child has a negative TST but strong TB contact and a suggestive CXR. What do you conclude?", "A negative TST does not exclude TB (up to 40% of culture-confirmed children are TST-negative). The diagnosis rests on the triad of contact, symptoms/CXR and supporting tests.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "Which children get the 4-month regimen, and what is it?", "Children 3 months to under 16 years with non-severe PTB or isolated peripheral node TB: 2HRZE/2HR.")}
${qa("Intern/MO", "What are the four first-line child doses and maximums?", "Isoniazid 10 mg/kg (max 300), rifampicin 15 mg/kg (max 600), pyrazinamide 35 mg/kg (max 2,000), ethambutol 20 mg/kg (max 1,200).")}
${qa("Intern/MO", "Give the dispersible FDC weight bands.", "RHZ 75/50/150 + E 100 mg: 4–7 kg 1 tablet; 8–11 kg 2; 12–15 kg 3; 16–24 kg 4; 25 kg and over switch to adult FDC.")}
${qa("Specialist", "What is the 6HRZEto regimen, and which children does it suit?", "A 6-month intensive TBM regimen with higher isoniazid (15–20 mg/kg, max 400) and rifampicin (22.5–30 mg/kg) plus ethionamide (17.5–22.5 mg/kg, max 750). A conditional option for drug-susceptible TBM in HIV-negative children, on specialist advice.")}
</div>
<div class="qgroup"><h3>DILI and prevention</h3>
${qa("Intern/MO", "When do you stop treatment for suspected DILI in a child?", "When there is vomiting, jaundice or a tender liver with ALT over 3× ULN plus symptoms. An asymptomatic rise below 5× ULN is not a reason to stop.")}
${qa("Intern/MO", "How does paediatric DILI reintroduction differ from adult?", "Restart ethambutol from day 1, escalate rifampicin over 48–72 hours (5→10→15 mg/kg), then isoniazid over 3 days, then pyrazinamide from day 8; threshold is ALT under 2.5× ULN (adults use under 2×).")}
${qa("Intern/MO", "Which TPT regimens are used in Bhutanese children?", "3HR dispersible or 6H; in HIV, 3HR if not on nevirapine/protease inhibitor, otherwise 6H.")}
${qa("Viva", "Why is BCG given at birth even though it does not prevent primary infection?", "It gives up to about 90% protection against miliary TB and TB meningitis — the two forms that kill young children — even though it does not prevent infection or adult-type pulmonary disease.")}
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
<li id="ref-11">ICMR, Department of Health Research, India. Standard Treatment Workflows: Paediatric Tuberculosis and Extrapulmonary TB (Special Edition). New Delhi, March 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-12">Central TB Division, Ministry of Health and Family Welfare, India. Guidelines for Programmatic Management of Drug Resistant TB in India. 2021. <a href="https://tbcindia.gov.in/showfile.php?lid=3590" target="_blank" rel="noopener">tbcindia.gov.in</a></li>
<li id="ref-13">INDEX-TB Guidelines on extrapulmonary tuberculosis for India. 2016.</li>
<li id="ref-14">Saukkonen JJ, Cohn DL, Jasmer RM, et al. An Official ATS Statement: Hepatotoxicity of Antituberculosis Therapy. Am J Respir Crit Care Med 2006;174:935–952. <a href="https://www.atsjournals.org/doi/10.1164/rccm.200510-1666ST" target="_blank" rel="noopener">doi:10.1164/rccm.200510-1666ST</a></li>
<li id="ref-15">Nahid P, Mase SR, Migliori GB, et al. Treatment of Drug-Resistant Tuberculosis: An Official ATS/CDC/ERS/IDSA Clinical Practice Guideline. Am J Respir Crit Care Med 2019;200:e93–e142. <a href="https://doi.org/10.1164/rccm.201909-1874ST" target="_blank" rel="noopener">doi:10.1164/rccm.201909-1874ST</a></li>
<li id="ref-16">Harrison's Principles of Internal Medicine, 21st ed.; Nelson Textbook of Pediatrics — foundational pathophysiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Paediatric diagnostic approach", "<span class='pass'>Verified</span>", "BT-PED 2024: Xpert Ultra first, stool ×2, CXR for severity, TST limits"],
["Regimens (4-month SHINE, severe, TBM, bone)", "<span class='pass'>Verified</span>", "Read directly from BT-PED 2024 Ch. 4"],
["Child doses and FDC bands", "<span class='pass'>Verified</span>", "BT-PED Tables 4.1–4.2"],
["6HRZEto doses", "<span class='pass'>Checked</span>", "From WHO Module 5 operational handbook (not stated in BT-PED)"],
["Steroid schedule", "<span class='pass'>Verified</span>", "Prednisolone 2–4 mg/kg (max 60 mg) ×4 weeks, taper 1–2 weeks"],
["Paediatric DILI reintroduction", "<span class='pass'>Verified</span>", "BT-PED §4.3 (differs from adult)"],
["SHINE upper age", "<span class='flag'>Flag</span>", "\"16 years\" (p.29) vs \"15 years\" (Key updates) in BT-PED — inconsistency flagged"],
["Adult-FDC child bands vs adult table", "<span class='flag'>Flag</span>", "BT-PED child bands differ from BT-INT adult bands — flagged to NTCP"],
["TST mm cut-off table", "<span class='flag'>Evidence gap</span>", "Digits dropped in the PDF text layer; confirm visually before clinical use"],
["Infants below 4 kg", "<span class='flag'>Evidence gap</span>", "Not in BT-PED; WHO guidance to be followed under specialist care"],
["Images", "<span class='pass'>Done</span>", "Four Commons images; licences checked per file"],
["References", "<span class='pass'>Done</span>", "All traceable; DOIs/links where available"]], "qc")}
` }
]
});
