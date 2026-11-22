/* Pneumonia — adults */
registerPage({
id: "pneumonia-adult",
title: "Pneumonia — Adults",
subtitle: "Community-acquired pneumonia: severity assessment, empiric antibiotics, and care of the severe and hard-to-treat cases",
age: "Adults", specs: ["resp", "id", "medicine", "emerg"],
keywords: ["pneumonia", "community-acquired pneumonia", "CAP", "lobar pneumonia", "bronchopneumonia", "CURB-65", "CRB-65", "atypical pneumonia", "Mycoplasma", "Legionella", "Streptococcus pneumoniae", "amoxicillin", "doxycycline", "ceftriaxone", "empyema", "lung abscess", "aspiration pneumonia", "hospital-acquired pneumonia"],
related: ["pneumonia-child", "tb-adult"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if a major CAP guideline is revised)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Pneumonia is common, and most people get better with a sensible antibiotic and supportive care. The skill is deciding who is sick enough to need hospital — and acting fast on the few who are dangerously unwell.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Fever, cough, sputum, chest pain and breathlessness, with new focal crackles, bronchial breathing or dullness — confirmed by a <b>chest X-ray</b> showing consolidation.</p></div>
<div><h4>Score severity</h4><p><b>CURB-65</b> (or CRB-65) at the bedside: confusion, urea &gt;7 mmol/L, RR ≥30, BP &lt;90/≤60, age ≥65. Score 0–1 home, 2 consider hospital, 3+ hospital (severe).</p></div>
<div><h4>Healthy outpatient</h4><p>${dr("amoxicillin")} 1 g three times daily, or ${dr("doxycycline")} 100 mg twice daily (ATS/IDSA 2019). Bhutan STG: amoxicillin 500 mg TID or co-trimoxazole 960 mg BD for 7 days.</p></div>
<div><h4>Comorbid / inpatient</h4><p>${dr("coamoxiclav", "co-amoxiclav")} or cephalosporin <b>+</b> ${dr("azithromycin", "macrolide")}/doxycycline; or a respiratory fluoroquinolone alone. Severe/ICU: ${dr("ceftriaxone")} + macrolide.</p></div>
<div><h4>Duration</h4><p>Usually <b>5 days</b> (minimum); stop when afebrile for 48–72 h and stable.</p></div>
<div><h4>Red flags</h4><ul><li>RR ≥30, SpO₂ &lt;92%, hypotension</li><li>Confusion, cyanosis, new renal failure</li><li>Multilobar disease, septic shock</li></ul></div>
<div><h4>Always</h4><p>Check oxygen saturation; in the smoker over 50, confirm radiographic clearing at 6 weeks to exclude an underlying cancer.</p></div>
</div>
<div class="calc" data-calc="curb65"></div>
${box("bt", "Bhutan note", `<p>The STG 2024 keeps outpatient treatment simple — <b>amoxicillin 500 mg TID or co-trimoxazole 960 mg BD for 7 days</b> — and hospital treatment as <b>IV ampicillin 1 g QID + gentamicin 80 mg OD for respiratory distress</b>, with oxygen, paracetamol and salbutamol for wheeze, and referral if complications develop. These are resource-limited-setting choices; the international regimens below add coverage for atypical and resistant organisms where that matters. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What pneumonia is, who gets it and which bug", html: `
<h3>Definition and classification</h3>
<p>Pneumonia is infection and inflammation of the lung parenchyma (the alveoli), usually bacterial or viral. It is classified by <b>where it was acquired</b>, because that decides the likely organism and the first antibiotic:</p>
${tbl(["Type", "Where acquired", "Typical organisms"], [
["<b>Community-acquired (CAP)</b>", "In the community, or within 48 h of admission", "S. pneumoniae, H. influenzae, Moraxella; atypicals Mycoplasma, Chlamydophila, Legionella; viruses"],
["<b>Hospital-acquired (HAP)</b>", "48 h or more after admission", "Gram-negatives, S. aureus, Pseudomonas, and more resistant flora"],
["<b>Ventilator-associated (VAP)</b>", "48 h or more after intubation", "As HAP, more resistant"],
["<b>Aspiration</b>", "Inhalation of oropharyngeal or gastric content", "Oral anaerobes, Gram-negatives, S. aureus"]])}

<h3>The organisms</h3>
${tbl(["Group", "Organisms", "Clinical clue"], [
["<b>Typical</b>", "<b>Streptococcus pneumoniae</b> (commonest), Haemophilus influenzae, Moraxella catarrhalis, Staphylococcus aureus", "Abrupt fever, productive cough, lobar consolidation, high white count"],
["<b>Atypical</b>", "Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila", "Gradual onset, dry cough, headache, often a clear chest X-ray mismatch with symptoms; Legionella adds GI upset, hyponatraemia and confusion"],
["<b>Viral</b>", "Influenza, RSV, SARS-CoV-2, adenovirus", "Epidemic, myalgia, and a risk of secondary bacterial (especially staphylococcal) pneumonia"]])}

<h3>How common is it, and who is at risk</h3>
<ul>
<li>Pneumonia is the world's leading infectious killer: WHO estimates it caused about <b>2.5 million deaths</b> in 2019, most of them adults and, in children, concentrated in the under-5s.${r(8)}</li>
<li>In South Asia the burden is high, driven by crowding, indoor biomass smoke, malnutrition and delayed care. A precise current Bhutan incidence figure was not in the sources reviewed. ${LB.bt("EVIDENCE GAP")}</li>
<li>Most deaths happen at the extremes of age and in people with comorbidity.</li></ul>
<h3>Risk factors and why</h3>
${tbl(["Risk factor", "Why"], [
["Age over 65", "Waning immunity, more comorbidity, blunted fever response"],
["Chronic lung disease (COPD, asthma, bronchiectasis)", "Damaged airway defences and colonised airways"],
["Smoking and indoor biomass smoke", "Impaired ciliary clearance and macrophage function"],
["Alcohol dependence", "Aspiration, poor nutrition, immune suppression"],
["Diabetes, CKD, liver disease, heart failure", "Impaired immunity and organ reserve"],
["Immunosuppression (HIV, steroids, chemotherapy)", "Loss of the cellular defences that contain the infection"],
["Recent influenza", "Viral damage opens the door to secondary bacterial pneumonia, especially S. aureus"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How pneumonia develops", [
F.s("Organisms reach the alveoli: micro-aspiration of throat flora, inhaled droplets, or blood spread"), F.a,
F.s("Defences overwhelmed: smoking, COPD, alcohol, diabetes, old age, viral infection, poor swallow"), F.a,
F.s("Alveolar inflammation → exudate, neutrophils and fibrin fill air spaces (<b>consolidation</b>)"), F.a,
F.b([
["Lung", F.e("V/Q mismatch → hypoxaemia; cough, sputum, crackles")],
["Body", F.e("Systemic inflammation → fever, sepsis, confusion, AKI")]]), F.a,
F.d("Complications"), F.a,
F.e("Parapneumonic effusion → empyema; lung abscess; respiratory failure; septic shock")])}
<h3>How the lung becomes solid</h3>
<ol class="chain">
<li><b>Entry:</b> organisms reach the alveoli by inhalation of droplets, aspiration of oropharyngeal secretions, or (less often) blood spread.</li>
<li><b>Alveolar inflammation:</b> the organism multiplies, the alveoli fill with neutrophils, fibrin, bacteria and oedema fluid — the <b>exudative</b> stage.</li>
<li><b>Consolidation:</b> the air-filled lung becomes solid. This is what you hear as crackles and bronchial breathing, and what the chest X-ray shows as a white shadow with <b>air bronchograms</b> (patent bronchi outlined against opaque alveoli).</li>
<li><b>Resolution:</b> over days to weeks, macrophages clear the exudate and the lung re-inflates. Lobar pneumonia usually resolves fully; bronchopneumonia (patchy, airway-centred) and severe disease may leave scarring or organise.</li></ol>
<h3>Lobar versus bronchopneumonia</h3>
<p><b>Lobar</b> pneumonia (classically pneumococcal) fills an entire lobe uniformly. <b>Bronchopneumonia</b> (staphylococcal, Gram-negative, aspiration) starts in the airways and gives patchy, peribronchial consolidation, often bilateral and with a higher risk of abscess and empyema.</p>
<h3>Why patients become hypoxaemic and septic</h3>
<p>Filled alveoli are perfused but not ventilated, creating right-to-left shunting — the main cause of hypoxaemia. The systemic illness (fever, tachycardia, hypotension) comes from the cytokine response to infection. In the most severe cases this spills into sepsis and septic shock, which is what kills. Understanding this explains the treatment: antibiotics to clear the organism, oxygen to correct the shunt, and fluids and organ support for the sepsis.</p>
<h3>Natural history, untreated</h3>
<p>Untreated pneumococcal pneumonia classically ran a 7–10 day course (the "crisis" of defervescence), but in the frail, the elderly and the immunocompromised it progresses to respiratory failure, empyema, bacteraemia and death. With timely antibiotics, most adults improve within 48–72 hours and recover fully.</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan STG 2024", "India (ICMR)", "ATS/IDSA 2019", "BTS 2009", "This guide"], [
["Healthy outpatient", "Amoxicillin 500 mg TID or co-trimoxazole 960 mg BD, 7 days", "Amoxicillin (or doxycycline)", "Amoxicillin 1 g TID or doxycycline 100 mg BD; macrolide if pneumococcal resistance &lt;25%", "Amoxicillin 500 mg–1 g TID", "Amoxicillin 1 g TID (or doxycycline); 500 mg TID acceptable where supply limits"],
["Outpatient with comorbidity", "Not specified", "Amoxicillin–clavulanate / cephalosporin + macrolide", "Co-amoxiclav or cephalosporin + macrolide/doxycycline, or respiratory FQ", "Co-amoxiclav + macrolide", "Co-amoxiclav or cephalosporin + macrolide"],
["Inpatient (non-severe)", "Ampicillin + gentamicin", "IV beta-lactam + macrolide", "Beta-lactam + macrolide, or respiratory FQ", "Amoxicillin + macrolide", "Beta-lactam + macrolide; ampicillin + gentamicin is a resource-limited alternative"],
["Severity score", "Clinical judgement", "CURB-65 / PSI", "PSI preferred; CURB-65 acceptable", "CURB-65", "CURB-65/CRB-65 at the bedside (cheap, no X-ray needed)"],
["Duration", "7 days", "5–7 days", "≥5 days; stop when afebrile 48–72 h and stable", "5–7 days", "5 days minimum, guided by response"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Typical pneumonia is abrupt and respiratory; atypical pneumonia is gradual and systemic. The two often blur, which is why empiric treatment usually covers both.</p>
${tbl(["Symptom or sign", "Mechanism", "What it tells you"], [
["Fever with rigors", "Cytokine response; rigors especially with pneumococcal bacteraemia", "Bacterial infection; blood cultures are worth doing"],
["Productive cough (purulent, sometimes rusty)", "Inflammatory exudate in the alveoli", "Rusty sputum is classic for pneumococcus"],
["Pleuritic chest pain", "Pleural inflammation", "Think parapneumonic effusion"],
["Breathlessness", "Shunt from consolidated lung; hypoxia", "Check SpO₂ now"],
["Tachypnoea", "Hypoxia and increased work of breathing", "RR ≥30 is a severity marker"],
["Tachycardia, hypotension", "Sepsis", "Assess for shock — a major severity criterion"],
["Confusion (especially elderly)", "Sepsis, hypoxia, hyponatraemia", "A CURB-65 point, and often the only sign in the elderly"],
["Dry cough, headache, myalgia, gradual onset", "Atypical organisms (Mycoplasma, Legionella)", "Add a macrolide or doxycycline"],
["Diarrhoea, confusion, hyponatraemia", "Legionella", "Urinary antigen; add a macrolide"]])}
${box("red", "Red flags — severe pneumonia", `<ul>
<li><b>Respiratory rate ≥30/min</b>, or oxygen saturation <b>&lt;92%</b>.</li>
<li><b>Systolic BP &lt;90 mmHg</b> or needing vasopressors — septic shock.</li>
<li><b>New confusion</b>, cyanosis, or new renal impairment.</li>
<li><b>Multilobar</b> consolidation on the chest X-ray.</li>
<li>Any of these with a high CURB-65 (≥3) means hospital — and usually ICU assessment.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Argues against", "Best test to separate"], [
["Tuberculosis", "Weeks of cough, night sweats, weight loss, upper-zone disease", "Acute onset; rapid response to antibiotics", "Xpert MTB/RIF on sputum; CXR pattern"],
["Acute bronchitis", "Cough, sometimes fever", "No focal chest signs; clear CXR", "Chest X-ray"],
["Congestive heart failure / pulmonary oedema", "Breathlessness, crackles, cardiomegaly, effusions", "No purulent sputum or high fever; BNP raised", "CXR, BNP, echo"],
["Pulmonary embolism with infarction", "Pleuritic pain, breathlessness, hypoxaemia", "Risk factors, clear sputum, no fever", "CT pulmonary angiography; D-dimer"],
["Lung cancer / post-obstructive pneumonia", "Smoker, weight loss, recurrent same-lobe pneumonia", "Fever, response to antibiotics", "CT; bronchoscopy; 6-week follow-up CXR"],
["Pulmonary vasculitis / organizing pneumonia", "Migratory infiltrates, systemic features", "No organism; poor antibiotic response", "CT, serology, biopsy"],
["Cryptogenic organizing pneumonia", "Persistent consolidation after apparent pneumonia", "No organism, no fever", "CT; response to steroids"]])}
<h3>The typical patient</h3>
<p>A 62-year-old smoker has three days of fever, rigors, a productive cough and right-sided pleuritic pain. He is tachypnoeic at 28, SpO₂ 93%, with crackles and bronchial breathing at the right base. This is <b>community-acquired pneumonia</b>, most likely pneumococcal. The next steps are a chest X-ray, CURB-65, oxygen and antibiotics — not a wait-and-see. If the same man had coughed for six weeks with weight loss and night sweats, tuberculosis would move to the front.</p>
` },

{ id: "invest", title: "Investigations", html: `
<h3>For every patient</h3>
${tbl(["Test", "Why", "What it shows"], [
["<b>Pulse oximetry</b>", "The single most important bedside test", "SpO₂ &lt;92% flags severity and the need for oxygen"],
["<b>Chest X-ray</b>", "Confirms the diagnosis and extent", "Consolidation, effusion, cavitation, multilobar disease"],
["Full blood count", "Severity and support for bacterial cause", "Leukocytosis; leukopenia is a severe-CAP minor criterion"],
["Urea and creatinine", "CURB-65 (urea) and baseline for drugs", "Urea &gt;7 mmol/L scores a point; AKI worsens prognosis"],
["CRP / procalcitonin (where available)", "Supports bacterial infection and monitors response", "Raised in bacterial pneumonia; procalcitonin can guide stopping"],
["Blood cultures", "In severe or hospitalised pneumonia", "Identify the organism in bacteraemic cases (do before antibiotics where possible)"]])}
<h3>When indicated</h3>
${tbl(["Test", "When", "Why"], [
["Sputum Gram stain and culture", "Productive cough, especially before antibiotics in hospital", "Identify the organism; good-quality (purulent, &lt;10 epithelial cells/field) samples only"],
["Arterial or venous blood gas", "SpO₂ &lt;92%, severe pneumonia", "Respiratory failure; PaO₂/FiO₂ ≤250 is a severe-CAP minor criterion"],
["Urinary antigens (pneumococcal, Legionella)", "Severe CAP, or Legionella suspected", "Rapid diagnosis; stays positive after antibiotics start"],
["Atypical serology or PCR (Mycoplasma, Chlamydophila, Legionella)", "Atypical picture or non-response", "Confirms atypical infection"],
["HIV test", "Recurrent or severe pneumonia, risk factors", "Pneumonia is a common presentation of undiagnosed HIV"],
["CT chest", "Non-resolution, suspected abscess, empyema or underlying cancer", "Better than X-ray for complications"]])}
` },

{ id: "staging", title: "Severity, scores and where to treat", html: `
<h3>CURB-65 / CRB-65</h3>
${tbl(["Feature", "Point"], [
["<b>C</b>onfusion (new)", "1"],
["<b>U</b>rea &gt;7 mmol/L (BUN &gt;19 mg/dL)", "1"],
["<b>R</b>espiratory rate ≥30/min", "1"],
["<b>B</b>lood pressure: systolic &lt;90 or diastolic ≤60 mmHg", "1"],
["Age ≥<b>65</b> years", "1"]])}
${tbl(["CURB-65", "CRB-65", "Action"], [
["0–1", "0", "Home treatment (mortality &lt;3%)"],
["2", "1–2", "Short admission or supervised outpatient treatment"],
["3–5", "3–4", "Hospital; score 3+ = severe pneumonia — assess for ICU"]])}
<p>CURB-65 was derived to predict 30-day mortality. It is deliberately simple; use it to support, not replace, judgement — a young person with SpO₂ 85% and one lobe scores low but still needs hospital.${r(5)}</p>

<h3>IDSA/ATS severe CAP criteria (2007)</h3>
${box("red", "Severe pneumonia = 1 major OR ≥3 minor criteria", `<p><b>Major:</b> invasive mechanical ventilation; septic shock needing vasopressors.</p><p><b>Minor (≥3):</b> respiratory rate ≥30; PaO₂/FiO₂ ≤250; multilobar infiltrates; confusion/disorientation; uraemia (BUN ≥20 mg/dL); leukopenia (WBC &lt;4,000); thrombocytopenia (&lt;100,000); hypothermia (&lt;36 °C); hypotension needing aggressive fluids.</p>`)}

<h3>Refer or admit when</h3>
<ul>
<li>CURB-65 ≥3, or any IDSA/ATS major criterion.</li>
<li>SpO₂ &lt;92% despite oxygen, or respiratory rate ≥30.</li>
<li>Septic shock, confusion, or significant comorbidity.</li>
<li>Pleural effusion (needs diagnostic tap), or inability to take oral antibiotics.</li>
<li>Failed outpatient treatment at 48–72 hours.</li></ul>
` },

{ id: "manage", title: "Management: empiric antibiotics and supportive care", html: `
<h3>Antibiotics by setting</h3>
${tbl(["Setting", "Preferred", "Notes"], [
["Healthy outpatient (no comorbidity)", dr("amoxicillin") + " 1 g TID, or " + dr("doxycycline") + " 100 mg BD", "ATS/IDSA 2019. Bhutan STG: amoxicillin 500 mg TID or co-trimoxazole 960 mg BD, 7 days"],
["Outpatient with comorbidity (lung/heart/kidney/liver disease, diabetes, alcohol, immunocompromise)", dr("coamoxiclav") + " or " + dr("cefuroxime") + " <b>+</b> " + dr("azithromycin", "macrolide") + "/doxycycline", "Or a respiratory fluoroquinolone (" + dr("levofloxacin") + " 750 mg daily) alone"],
["Inpatient, non-severe", dr("ceftriaxone") + " (or amoxicillin/ampicillin) <b>+</b> " + dr("azithromycin", "macrolide") + "/doxycycline", "Switch to oral once improving, afebrile and able to swallow"],
["Severe / ICU", dr("ceftriaxone") + " (or " + dr("piptazo", "piperacillin–tazobactam") + ") <b>+</b> " + dr("azithromycin", "macrolide"), "Add " + dr("gentamicin") + " or anti-pseudomonal cover only if Pseudomonas/MRSA risk or prior FQ use"]])}
<p>ATS/IDSA 2019 recommends <b>combination</b> beta-lactam + macrolide over fluoroquinolone monotherapy for hospitalised severe CAP, because macrolides are associated with better outcomes — even when the organism is not atypical.${r(4)}</p>

<h3>Duration and de-escalation</h3>
<ul>
<li>Treat for <b>at least 5 days</b>; stop when the patient has been afebrile for 48–72 hours and is clinically stable (the ATS/IDSA recommendation).</li>
<li>Longer courses (7–21 days) for <i>Legionella</i>, S. aureus bacteraemia, empyema, lung abscess or slow response.</li>
<li>Narrow the antibiotic once a pathogen and susceptibilities are known.</li></ul>

<h3>Supportive care that saves lives</h3>
${tbl(["Intervention", "Target"], [
["Oxygen", "Maintain SpO₂ ≥92% (94–98% in most); titrate down in COPD where target is 88–92%"],
["Fluids", "Euvolemia; avoid overloading (pneumonia causes ADH rise, so over-hydration risks pulmonary oedema and hyponatraemia)"],
["Analgesia and antipyretics", "Paracetamol for fever and pleuritic pain"],
["VTE prophylaxis", "Low-molecular-weight heparin for hospitalised, immobile patients"],
["Nutrition and early mobilisation", "Prevent deconditioning and delirium"],
["Smoking cessation", "Every admission is a chance to offer help"]])}
${box("amber", "Steroids in severe CAP", `<p>Routine corticosteroids are <b>not</b> recommended for severe CAP; they may reduce time to stability but do not clearly reduce mortality, and they harm in influenza. Reserve them for refractory septic shock under ICU care.${r(4)}</p>`)}
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card. Fluoroquinolones (" + dr("levofloxacin", "levofloxacin") + ", " + dr("moxifloxacin", "moxifloxacin") + ") and " + dr("cotrimoxazole", "co-trimoxazole") + " are covered in their own cards.</p>
${tbl(["Drug", "Adult dose", "Key cautions"], [
[dr("amoxicillin"), "500 mg–1 g three times daily", "Penicillin allergy; renal adjustment"],
[dr("coamoxiclav", "Co-amoxiclav"), "625 mg TID or 1 g BD", "Diarrhoea; cholestatic jaundice"],
[dr("doxycycline"), "100 mg twice daily", "Photosensitivity; avoid in pregnancy/under 8 y"],
[dr("azithromycin", "Azithromycin"), "500 mg daily (day 1 500, then 250 mg ×4 d)", "QT prolongation"],
[dr("cefuroxime"), "500 mg twice daily", "Cephalosporin allergy"],
[dr("ampicillin"), "1 g IV QID (with gentamicin)", "Rash; penicillin allergy"],
[dr("benzylpenicillin"), "1.2–2.4 g IV 4–6-hourly", "Penicillin allergy; neurotoxicity at high dose"],
[dr("gentamicin"), "5–7 mg/kg IV once daily", "Nephro- and ototoxicity; monitor levels"],
[dr("ceftriaxone"), "1–2 g IV/IM once daily", "Neonates: not with calcium"],
[dr("piptazo", "Piperacillin–tazobactam"), "4.5 g IV 6-hourly", "Severe/HAP; renal adjustment"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Older adults</h3>
<ul><li>Presentation is often <b>atypical</b>: confusion, falls or functional decline with little fever or cough. Have a low threshold for a chest X-ray.</li><li>Adjust doses for kidney function; watch drug interactions; avoid over-sedation.</li></ul>
<h3>Pregnancy</h3>
<ul><li>Pneumonia in pregnancy is serious and warrants early admission and antibiotics. Safe choices: <b>amoxicillin/co-amoxiclav, cephalosporins, macrolides (azithromycin), and penicillin</b>. Avoid doxycycline, tetracyclines and (ideally) fluoroquinolones.</li><li>Give oxygen generously — the fetus tolerates maternal hypoxaemia poorly.</li></ul>
<h3>COPD, asthma and heart failure</h3>
<ul><li>COPD: use a macrolide/doxycycline for atypical cover (Haemophilus and Moraxella are common), and continue inhaled therapy; target SpO₂ 88–92% if CO₂ retention.</li><li>Heart failure: avoid over-hydration; diuretics as indicated; watch for azithromycin/fluoroquinolone QT effects.</li></ul>
<h3>Immunocompromised and aspiration</h3>
<ul><li><b>Immunocompromised</b> (HIV, chemotherapy, steroids): broaden cover early (including <i>Pneumocystis</i> with co-trimoxazole if indicated) and consider fungal/viral causes.</li><li><b>Aspiration</b>: co-amoxiclav or a beta-lactam with anaerobic cover; think about swallowing, sedation and reflux.</li></ul>
` },

{ id: "scenarios", title: "Non-response, effusion, aspiration and hospital pneumonia", html: `
<h3>Not improving at 48–72 hours</h3>
<p>Roughly 1 in 7 patients with CAP responds slowly. Ask four questions: is the diagnosis right, is the organism resistant or atypical, is there a complication (effusion, empyema, abscess), and is there an underlying cause (cancer, obstruction, TB)? Re-examine, repeat the chest X-ray (or CT), re-culture, and reconsider.</p>
${tbl(["Situation", "What to do"], [
["Parapneumonic effusion", "Diagnostic pleural tap: pH &lt;7.2, frank pus, or loculation → drain (chest tube) and treat as empyema"],
["Empyema", "Chest drainage + antibiotics + early thoracic-surgery/radiology input; send fluid for culture"],
["Lung abscess", "Prolonged antibiotics (weeks) with anaerobic/streptococcal cover; drainage if large or not resolving"],
["Aspiration pneumonia", "Co-amoxiclav (or clindamycin + cephalosporin); protect the airway; treat the swallow problem"],
["Hospital-acquired / ventilator pneumonia", "Broad-spectrum cover by local resistance patterns (often " + dr("piptazo", "piperacillin–tazobactam") + " ± anti-MRSA); obtain lower-airway cultures"],
["Recurrent same-lobe pneumonia", "Think obstructing lesion: CT and bronchoscopy"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "How to recognise it", "Management"], [
["<b>Respiratory failure / ARDS</b>", "Early", "Worsening hypoxaemia, rising work of breathing", "Oxygen, NIV or ventilation, treat sepsis"],
["<b>Septic shock</b>", "Early", "Hypotension, lactate rise, organ failure", "Fluids, vasopressors, broad antibiotics, ICU"],
["<b>Parapneumonic effusion / empyema</b>", "Early–late", "Persistent fever, dullness, effusion on CXR", "Tap for pH; drain if empyema"],
["<b>Lung abscess</b>", "Late", "Fever, copious foul sputum, cavitation", "Prolonged antibiotics; drainage"],
["<b>Bacteraemia with metastatic spread</b>", "Early", "Meningitis, endocarditis, septic arthritis", "Blood cultures; targeted therapy"],
["<b>Atrial fibrillation / cardiac events</b>", "Early", "Palpitations, ECG changes", "Rate/rhythm control; pneumonia stresses the heart"],
["<b>Post-pneumonia debility</b>", "Late", "Fatigue, breathlessness for weeks", "Rehabilitation; repeat CXR at 6 weeks"]])}
<h3>Prognosis</h3>
<ul><li>Most healthy adults recover fully; mortality concentrates in the elderly, those with comorbidity, and severe CAP (where it can reach 20–40% in ICU).</li>
<li>Raised urea, confusion, hypotension, multilobar disease, hypoxia and leukopenia all worsen the outlook — which is exactly what CURB-65 and the severe-CAP criteria capture.</li></ul>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<h3>After the illness</h3>
<ul>
<li>Review at <b>48–72 hours</b> (or earlier if worsening) to confirm response and plan oral switch.</li>
<li>Arrange a <b>chest X-ray at 6 weeks</b> in smokers and anyone over 50 (or with incomplete resolution) to confirm clearing and exclude an underlying cancer.</li>
<li>Advise that cough and fatigue can last weeks after the infection has gone.</li></ul>
<h3>Prevention</h3>
${tbl(["Measure", "Who"], [
["<b>Pneumococcal vaccine</b> (PCV then PPSV23 for adults per local schedule)", "Adults ≥65, and younger adults with chronic disease, asplenia or immunosuppression"],
["<b>Influenza vaccine</b> (yearly)", "Everyone, especially older adults and those with chronic disease — prevents the influenza that precedes bacterial pneumonia"],
["Stop smoking and reduce biomass smoke", "The single most effective long-term protection for the lungs"],
["Good control of diabetes, heart and lung disease", "Reduces pneumonia risk and severity"]])}
${box("green", "What to tell the patient", `<ul><li>"Finish the antibiotic course even when you feel better; stopping early lets the infection come back."</li><li>"Come back if the fever returns, your breathing worsens, or you cough blood."</li><li>"The cough may last a few weeks — that is normal while the lung heals."</li><li>"If you smoke, this is the moment to stop; the pneumonia is your lungs asking for help."</li></ul>`)}
${box("red", "Return or seek help immediately if", `<ul><li>Breathlessness worsening, or blue lips.</li><li>New confusion, drowsiness or fainting.</li><li>Fever returning after improving, or coughing blood.</li><li>Chest pain that worsens.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>Pneumonia on the chest X-ray</h3>
<div class="pair">
${fig({ title: "Right upper lobe pneumonia", src: "images/pneumonia-rul.jpg", mod: "Chest X-ray (PA)", ctx: "Adult with community-acquired pneumonia", loc: "Right upper zone", find: "A dense opacity in the right upper lobe (circled) with a sharp lower border at the horizontal fissure", signs: "Lobar consolidation", interp: "Lobar consolidation with a fissure-bounded edge is the classic pneumococcal pattern. Air bronchograms would confirm it is alveolar, not pleural", ddx: "Collapse (would pull the fissure up), tumour, TB", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:PneumoniaRUL.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Right lower lobe pneumonia (lateral)", src: "images/pneumonia-rll.jpg", mod: "Chest X-ray (lateral)", ctx: "Same patient, lateral view", loc: "Right lower lobe", find: "A triangular retrocardiac opacity outlining the right lower lobe against the spine", signs: "Lower-lobe consolidation", interp: "The lateral film shows lower-lobe consolidation that is hidden behind the heart on the PA view — always get a lateral if the PA looks doubtful", ddx: "Pleural effusion, collapse", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:RLLpneumonia.PNG", lic: "CC BY-SA 3.0" })}
</div>
<h3>The organism</h3>
${fig({ title: "Streptococcus pneumoniae (Gram stain)", src: "images/spneumoniae-gram.jpg", mod: "Sputum Gram stain", ctx: "Sputum from a patient with pneumonia", loc: "Extracellular pairs", find: "Gram-positive, lancet-shaped cocci in pairs (diplococci)", signs: "Gram-positive diplococci", interp: "The commonest cause of community-acquired pneumonia. A good-quality sputum Gram stain can guide narrow, targeted therapy", ddx: "Other alpha-haemolytic streptococci (viridans) look similar — culture distinguishes", by: "CDC / Arnold Kaufman (PHIL #21340)", page: "https://commons.wikimedia.org/wiki/File:Gram_stain_of_Streptococcus_pneumoniae.jpg", lic: "Public domain (CC0)" })}
<h3>Link-only images</h3>
<ul><li>Lobar pneumonia with air bronchograms: <a href="https://radiopaedia.org/articles/lobar-pneumonia" target="_blank" rel="noopener">Radiopaedia</a> (link only)</li><li>Empyema and parapneumonic effusion on CT: <a href="https://radiopaedia.org/articles/empyema" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Community-acquired pneumonia: assess and place", [
F.s("Fever, cough, focal chest signs → confirm with chest X-ray"), F.a,
F.s("Pulse oximetry + CURB-65 (or CRB-65)"), F.a,
F.d("CURB-65 ≥3, SpO₂ &lt;92%, shock, or severe-CAP criteria?"), F.a,
F.b([["Yes", F.e("Hospital: IV antibiotics + oxygen; ICU if major criterion or shock")], ["No", F.s("CURB-65 2 or comorbidity?")]]), F.a,
F.d("CURB-65 2 or significant comorbidity?"), F.a,
F.b([["Yes", F.s("Short admission or supervised treatment: co-amoxiclav/ceftriaxone + macrolide")], ["No", F.ok("Home: amoxicillin 1 g TID or doxycycline 100 mg BD")]])])}
${F.chart("2 · Empiric antibiotics by setting", [
F.s("Confirm CAP and score severity"), F.a,
F.s("Outpatient, healthy → amoxicillin 1 g TID or doxycycline 100 mg BD"), F.a,
F.s("Outpatient, comorbidity → co-amoxiclav/cefuroxime + macrolide, or respiratory FQ"), F.a,
F.s("Inpatient non-severe → ceftriaxone + macrolide; de-escalate and switch to oral when stable"), F.a,
F.s("Severe/ICU → ceftriaxone or piperacillin–tazobactam + macrolide"), F.a,
F.ok("≥5 days total; stop when afebrile 48–72 h and stable")])}
${F.chart("3 · Not improving at 48–72 h", [
F.s("Still febrile or deteriorating on antibiotics"), F.a,
F.s("Re-examine, repeat CXR (or CT), re-culture, check SpO₂"), F.a,
F.d("Effusion present?"), F.a,
F.b([["Yes", F.s("Diagnostic tap: pH &lt;7.2 or pus → chest drain (empyema)")], ["No", F.s("Think atypical/resistant organism, abscess, TB, or obstruction")]]), F.a,
F.ok("Adjust antibiotics; bronchoscopy/CT if obstruction or non-resolution")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Check the saturation on everyone.</b> Hypoxaemia is the pneumonia complication you can treat in seconds, and it changes disposition instantly.</li>
<li><b>Count the respiratory rate yourself.</b> It is the most reproducible severity sign and the most often guessed.</li>
<li><b>In the elderly, confusion is the pneumonia.</b> Absence of cough and fever does not rule it out.</li>
<li><b>A "non-resolving pneumonia" is TB until proven otherwise</b> in South Asia — and a recurrent same-lobe pneumonia is an obstructing lesion until excluded.</li>
<li><b>Macrolides improve outcomes in severe CAP even beyond atypical cover</b> — keep them in the severe-CAP combination.</li>
<li><b>Rusty sputum, rigors and one lobe = pneumococcus</b>; dry cough, headache and a clear X-ray that "does not match" the illness = atypical.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Treating a chronic cough with a fluoroquinolone " + dr("levofloxacin") + " without considering TB", "Masks and delays TB, breeds resistance", "Think TB before broad-spectrum antibiotics in a prolonged cough"],
["Giving doxycycline in pregnancy or to a child under 8", "Tooth and bone damage", "Use amoxicillin or a macrolide instead"],
["Over-hydrating a patient with pneumonia", "Pulmonary oedema and hyponatraemia (pneumonia raises ADH)", "Aim for euvolemia; monitor intake/output"],
["Using steroids routinely in severe CAP", "No clear mortality benefit; harm in influenza", "Reserve for refractory septic shock"],
["Stopping antibiotics at day 3 because the fever settled", "Relapse", "At least 5 days; stop only when afebrile 48–72 h and stable"],
["Skipping the 6-week follow-up X-ray in a smoker", "Missed lung cancer", "Book the film before discharge"],
["Not draining an empyema", "Prolonged sepsis and trapped lung", "Tap any significant effusion; drain if pus or pH &lt;7.2"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis and severity</h3>
${qa("Student", "What are the five CURB-65 criteria?", "Confusion (new), Urea over 7 mmol/L, Respiratory rate 30/min or more, Blood pressure (systolic under 90 or diastolic 60 or less), age 65 or more.")}
${qa("Intern/MO", "How do you use the CURB-65 score to decide placement?", "0–1 home; 2 short admission or supervised outpatient treatment; 3 or more hospital (severe).")}
${qa("Intern/MO", "What are the IDSA/ATS major criteria for severe CAP?", "Invasive mechanical ventilation, or septic shock requiring vasopressors. One major, or three minor criteria, defines severe CAP.")}
${qa("Intern/MO", "Why is the respiratory rate the most important bedside sign?", "Tachypnoea reflects hypoxaemia and work of breathing, is reproducible, and is a severity criterion in both CURB-65 and the severe-CAP minor criteria.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "Empiric treatment for a healthy adult outpatient with CAP?", "Amoxicillin 1 g three times daily, or doxycycline 100 mg twice daily (ATS/IDSA 2019). Bhutan STG uses amoxicillin 500 mg TID or co-trimoxazole 960 mg BD for 7 days.")}
${qa("Intern/MO", "Empiric treatment for hospitalised non-severe CAP?", "A beta-lactam (ceftriaxone) plus a macrolide (azithromycin), or a respiratory fluoroquinolone.")}
${qa("Intern/MO", "How long should CAP be treated?", "At least 5 days; stop when the patient has been afebrile for 48–72 hours and is clinically stable.")}
${qa("Specialist", "Why keep a macrolide in severe CAP even when the organism is typical?", "Macrolides are associated with better outcomes in severe CAP, possibly through immunomodulatory and atypical-cover effects, not just direct antibacterial action.")}
</div>
<div class="qgroup"><h3>Complications and pitfalls</h3>
${qa("Intern/MO", "A patient is no better after 48 h of antibiotics. What are the four questions?", "Is the diagnosis right? Is the organism resistant or atypical? Is there a complication (effusion, empyema, abscess)? Is there an underlying cause (obstruction, TB, cancer)?")}
${qa("Intern/MO", "How do you manage a parapneumonic effusion?", "Diagnostic tap: frank pus, or pH under 7.2, or loculation → chest-tube drainage (empyema) plus antibiotics.")}
${qa("Intern/MO", "Why do you arrange a 6-week follow-up chest X-ray?", "To confirm radiographic clearing and exclude an underlying lung cancer, especially in smokers and people over 50.")}
${qa("Viva", "Why can over-hydration be dangerous in pneumonia?", "Pneumonia increases ADH secretion, so aggressive fluids can cause pulmonary oedema and dilutional hyponatraemia; aim for euvolemia.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §3.1 Pneumonia (adults) and §12.2.1 Pneumonia (children).</li>
<li id="ref-2">World Health Organization. Pocket Book of Hospital Care for Children, 2nd ed. Geneva, 2013 (§4.2 Pneumonia). <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">World Health Organization. Integrated Management of Childhood Illness (IMCI/IMNCI) chart booklet. Geneva, 2014. <a href="https://www.who.int/publications/i/item/9789241506823" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Metlay JP, Waterer GW, Long AC, et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia: An Official Clinical Practice Guideline of the ATS/IDSA. Am J Respir Crit Care Med 2019;200(7):e45–e67. <a href="https://doi.org/10.1164/rccm.201908-1581ST" target="_blank" rel="noopener">doi:10.1164/rccm.201908-1581ST</a></li>
<li id="ref-5">Lim WS, Baudouin SV, George RC, et al. BTS guidelines for the management of community-acquired pneumonia in adults: update 2009. Thorax 2009;64(Suppl III):iii1–iii55. <a href="https://doi.org/10.1136/thx.2009.121434" target="_blank" rel="noopener">doi:10.1136/thx.2009.121434</a></li>
<li id="ref-6">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) antibiotic book. Geneva, 2022. <a href="https://www.who.int/publications/i/item/WHO-MHP-HPS-EML-2022.02" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-7">ICMR, Department of Health Research, India. Standard Treatment Workflows: Community-Acquired Pneumonia and Severe Pneumonia. New Delhi, 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-8">World Health Organization. Pneumonia — fact sheet (2019 estimates). <a href="https://www.who.int/news-room/fact-sheets/detail/pneumonia" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-9">Harrison's Principles of Internal Medicine, 21st ed.; Oxford Handbook of Clinical Medicine — foundational pathophysiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["CURB-65 / CRB-65 criteria and thresholds", "<span class='pass'>Verified</span>", "BTS 2009 (urea &gt;7 mmol/L, RR ≥30, BP &lt;90/≤60, age ≥65)"],
["ATS/IDSA 2019 empiric regimens", "<span class='pass'>Verified</span>", "Amoxicillin 1 g TID / doxycycline; combination for severe CAP"],
["IDSA/ATS severe CAP criteria", "<span class='pass'>Verified</span>", "1 major or ≥3 minor (2007)"],
["Bhutan STG adult treatment", "<span class='pass'>Verified</span>", "Read directly from STG 2024 §3.1"],
["Antibiotic doses", "<span class='pass'>Checked</span>", "BNF/WHO AWaRe; see drug cards"],
["Bhutan national incidence figure", "<span class='flag'>Evidence gap</span>", "Not in the sources reviewed"],
["Images", "<span class='pass'>Done</span>", "Three Commons images; licences checked (CC BY-SA 3.0, public domain)"],
["References", "<span class='pass'>Done</span>", "All traceable; DOIs/links where available"]], "qc")}
` }
]
});
