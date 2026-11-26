/* Lung abscess — adults. Batch E-5, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §3.2 Lung abscess (amoxicillin 500 mg TDS or co-trimoxazole 960 mg BD × 7 days; IV ampicillin 1 g QID +
   gentamicin 80 mg OD if distressed; refer if no improvement; follow-up X-ray); BCR topic page "lungabsc"; NEML 2025.
   Merck Manual Professional "Lung abscess" (Sethi, peer reviewed by Rivera; updated Mar 2025) — read in the browser: causes, organisms,
   diagnosis, beta-lactam/beta-lactamase inhibitor first, alternatives, treat until X-ray resolution (3–6 weeks or longer), 7–10-day failure rule,
   no routine postural drainage, ~10% need surgery or drainage.
   Hadid, Stella, Maskey. J Thorac Dis 2024 (narrative review, full text via Europe PMC): antibiotics succeed in 63–67%, up to 37% need intervention,
   ≥6 cm less likely to respond, drainage options and mortality. ATS/IDSA CAP 2019 (Metlay et al.): anaerobic cover only if abscess or empyema suspected.
   Yousef et al. Children 2022 (case series and review, full text): child abscesses, prolonged courses. Not read: StatPearls (CAPTCHA), Kuhajda 2015. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "lung-abscess-adult",
title: "Lung abscess — adults",
subtitle: "Weeks of fever and foul, copious sputum in someone who aspirates — a thick-walled cavity with a fluid level: treat for weeks not days, exclude TB and cancer, and drain the few that do not settle",
age: "Adults", specs: ["resp", "id", "medicine", "surg"],
keywords: ["lung abscess", "pulmonary abscess", "cavity with air-fluid level", "aspiration", "anaerobic infection", "foul sputum", "putrid sputum", "necrotising pneumonia", "empyema", "amoxicillin clavulanate", "ampicillin sulbactam", "percutaneous drainage", "endoscopic drainage", "cavitating lesion"],
related: ["pneumonia-adult", "bronchiectasis-adult", "tb-adult", "lung-cancer-adult", "alcohol-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">A lung abscess is a pocket of pus in the lung, usually after someone with poor teeth and a reason to aspirate — drink, a seizure, a stroke, an anaesthetic — breathes in mouth bacteria. Most settle with antibiotics, but only if they are given for long enough. The two things not to miss are tuberculosis and a cancer blocking the bronchus.</p>
<div class="glance">
<div><h4>Suspect it</h4><p>Fever and rigors, cough with large amounts of <b>foul-smelling</b>, purulent or blood-stained sputum, weight loss — over days to weeks ${r(1, 2)}.</p></div>
<div><h4>Confirm it</h4><p>Chest X-ray: thick-walled cavity with an <b>air–fluid level</b>, often in a dependent segment; CT if unclear ${r(1, 2)}.</p></div>
<div><h4>Treat it</h4><p>Beta-lactam/beta-lactamase inhibitor (IV, then oral) <b>until the X-ray clears</b> — usually 3–6 weeks or more ${r(2)}.</p></div>
<div><h4>Not settling by 7–10 days?</h4><p>Look for resistant or unusual organisms, an obstructing tumour or foreign body, TB, empyema — and consider drainage ${r(2, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§3.2) gives oral amoxicillin 500 mg TDS or co-trimoxazole 960 mg BD for 7 days, IV ampicillin 1 g QID plus gentamicin 80 mg OD for respiratory distress, oxygen and paracetamol, and referral if there is no improvement ${r(1)}. Seven days is far shorter than international practice, and neither amoxicillin alone nor co-trimoxazole reliably covers beta-lactamase-producing mouth anaerobes; amoxicillin–clavulanate (NEML) or adding metronidazole is closer to what the evidence supports ${r(2)} ${LB.loc()}. In Bhutan every cavity also needs sputum AFB / GeneXpert.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Definition", "A localised collection of pus in the lung parenchyma " + r(1) + "; a necrotising infection with a pus-filled, circumscribed cavity " + r(2)],
["Primary (commonest)", "Aspiration of mouth secretions in people with gingivitis or poor oral hygiene and impaired consciousness (alcohol, drugs, anaesthesia, sedatives, seizures) or swallowing problems " + r(2)],
["Secondary", "Behind an obstructing bronchial cancer or foreign body; immunosuppression; septic emboli (IV drug use, right-sided endocarditis, Lemierre syndrome); spread from empyema or subphrenic abscess " + r(2)],
["STG causes", "Pneumonia, aspiration, staphylococcal septicaemia, bronchiectasis " + r(1)],
["Organisms", "Anaerobes (Peptostreptococcus, Fusobacterium, Prevotella, Bacteroides) — about half are mixed with aerobes (streptococci, staphylococci incl. MRSA, sometimes Klebsiella); Pseudomonas and other Gram-negatives, Nocardia, mycobacteria or fungi in the immunocompromised " + r(2)],
["Acute vs chronic", "Acute if 4 weeks or less, chronic if longer " + r(5)],
["Outcome", "Antibiotics alone succeed in about 63–67%; up to 37% need an additional procedure " + r(3)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("From aspiration to cavity", [F.s("Mouth bacteria aspirated (dependent segment: posterior upper lobe, apical lower lobe)"), F.a, F.s("Pneumonitis over 1–2 weeks"), F.a, F.s("Tissue necrosis → pus-filled cavity"), F.a, F.b([["Ruptures into a bronchus", F.s("Foul sputum coughed up; air–fluid level appears")], ["Spreads to pleura", F.e("Empyema (about 1 in 10)")]]), F.a, F.d("Large cavity, obstruction or unusual organism → antibiotics fail")])}
<p>Because the abscess wall is thick and poorly perfused, antibiotics take weeks to sterilise it, which is why short courses relapse ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (Merck 2025, ATS/IDSA 2019, reviews)", "This guide"], [
["First-line antibiotic", "Amoxicillin 500 mg TDS or co-trimoxazole 960 mg BD", "Beta-lactam/beta-lactamase inhibitor (ampicillin–sulbactam IV; amoxicillin–clavulanate orally); carbapenem or ceftriaxone + metronidazole if Gram-negatives suspected; moxifloxacin if penicillin-allergic; clindamycin used less now (C. difficile, resistance)", "Amoxicillin–clavulanate (or amoxicillin + metronidazole) — both NEML " + LB.loc()],
["Severe illness", "IV ampicillin 1 g QID + gentamicin 80 mg OD", "IV ampicillin–sulbactam or carbapenem", "IV ampicillin + metronidazole (± gentamicin per STG), or ceftriaxone + metronidazole " + LB.loc()],
["Duration", "7 days", "Until the X-ray shows resolution or a small stable scar — generally 3–6 weeks or longer", "Weeks, guided by fever, sputum and the X-ray " + LB.int()],
["Postural drainage", "Referral may lead to postural drainage", "No longer recommended — risk of spilling pus into other bronchi", "Do not use postural drainage for an abscess " + LB.int()],
["Anaerobic cover in aspiration pneumonia", "—", "Not routinely, unless lung abscess or empyema is suspected (ATS/IDSA) " + r(4), "An abscess needs anaerobic cover " + LB.int()]
])}
<p>The STG section is short and written for first contact. The most important change for a Bhutanese doctor is the <b>length</b> of treatment: sending a patient home after 7 days of amoxicillin is a common reason for relapse.</p>` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>High fever with rigors and chills; night sweats; weight loss and anorexia ${r(1, 2)}.</li>
<li>Cough with copious, foul-smelling, purulent, often blood-stained sputum; fetid breath ${r(1, 2)}.</li>
<li>Pleuritic chest pain, breathlessness ${r(1, 2)}.</li>
<li>Signs: tachypnoea, tachycardia, clubbing (chronic), dullness, bronchial breathing over the area; signs of periodontal disease ${r(1, 2)}.</li>
<li>Anaerobic abscesses evolve over weeks; aerobic ones (Staph, Klebsiella) present acutely like pneumonia ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 52-year-old man from Trashigang drinks heavily and had a seizure two weeks ago. Since then he has had fever, night sweats and a cough bringing up foul sputum. His teeth are poor. SpO₂ 94%. The X-ray shows a 5 cm thick-walled cavity with a fluid level in the right lower lobe. Sputum AFB and GeneXpert are negative. He is admitted for IV antibiotics with anaerobic cover, switched to oral amoxicillin–clavulanate when afebrile and stable, and treated until the cavity has closed on a repeat film about five weeks later; a dentist sees him before discharge ${r(1, 2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Cavitating pulmonary TB", "Upper zones, apical; subacute; sputum AFB / GeneXpert positive — always test in Bhutan"],
["Cavitating bronchial cancer (squamous)", "Smoker over 40; thick irregular wall, little surrounding consolidation; no response to antibiotics — bronchoscopy " + r(2)],
["Empyema with bronchopleural fistula", "Fluid level that crosses into the pleural space; lentiform shape — CT distinguishes " + r(2)],
["Infected bulla or cyst", "Thin wall; fluid level in a known bulla " + r(2)],
["Septic emboli", "Multiple peripheral cavities; IV drug use, endocarditis " + r(2)],
["Hydatid cyst, amoebic abscess, vasculitis", "Endemic exposure or systemic features " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Chest X-ray PA</b>: cavity with an air–fluid level in a dependent segment points to aspiration; multiple cavities suggest embolic disease; apical disease suggests TB ${r(1, 2)}.</li>
<li><b>CT chest</b>: when cavitation is uncertain, to look for an obstructing mass, to tell abscess from empyema or a bulla, and to plan drainage ${r(2)}.</li>
<li><b>Bloods</b>: full blood count; blood cultures (aerobic and anaerobic) ${r(1, 2)}.</li>
<li><b>Sputum</b>: Gram stain and culture; AFB / GeneXpert; fungal and mycobacterial culture when indicated ${r(1, 2)}.</li>
<li><b>Bronchoscopy</b>: to exclude cancer or a foreign body, and for samples in atypical, non-responding or immunocompromised patients ${r(2)}.</li>
<li>Pleural fluid (if an effusion): Gram stain, culture, pH ${r(2)}.</li>
<li>HIV test and glucose — immunosuppression and diabetes change the organisms ${LB.exp()}.</li>
</ul>` },
{ id: "staging", title: "Severity and when to worry", html: `
${tbl(["Feature", "Why it matters"], [
["Cavity 6 cm or more", "Less likely to respond to antibiotics alone; often needs drainage " + r(3)],
["Not better after 7–10 days of antibiotics", "Look for resistant/unusual organisms, obstruction, non-infective cavity — usually bronchoscopy " + r(2)],
["Post-obstructive abscess", "Antibiotic failure is most common here and with large cavities " + r(2)],
["Empyema", "Must be drained " + r(2)],
["Sepsis, hypoxia, large haemoptysis", "Admit; IV therapy; surgical opinion " + LB.exp()],
["Immunosuppression", "Wider organism range (Pseudomonas, Nocardia, fungi, mycobacteria) " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Supportive</h3>
<p>Oxygen if hypoxic, fluids, antipyretic (paracetamol), nutrition; salbutamol nebulisation if wheezing ${r(1)}. Position the patient with the abscess side down if there is a risk of spill (expert practice) ${LB.exp()}.</p>
<h3>2. Antibiotics</h3>
${tbl(["Setting", "Regimen", "Source"], [
["Severe, inpatient (international first choice)", "IV ampicillin–sulbactam; alternatives a carbapenem, or ceftriaxone + metronidazole (Gram-negatives suspected)", r(2)],
["Severe, Bhutan (NEML)", "IV ampicillin 1 g every 6 h + metronidazole 500 mg IV every 8 h (± gentamicin as in the STG), or ceftriaxone + metronidazole", r(1) + " " + LB.loc()],
["Less unwell / oral step-down", "Amoxicillin–clavulanate orally", r(2)],
["Penicillin allergy", "Moxifloxacin; or levofloxacin + metronidazole", r(2)],
["MRSA", "Linezolid or vancomycin", r(2)],
["STG first contact", "Amoxicillin 500 mg TDS or co-trimoxazole 960 mg BD; refer if not improving", r(1)]
])}
<p><b>Switch to oral</b> when the patient is afebrile and clinically stable ${r(2)}. <b>Duration</b>: until the chest X-ray shows complete resolution or a small, stable scar — generally 3–6 weeks or longer; bigger abscesses take longer ${r(2)}. Clindamycin is now used less because of <i>C. difficile</i> and resistance ${r(2)}.</p>
<h3>3. When antibiotics are not enough</h3>
<ul>
<li>No improvement in 7–10 days: re-image (CT), bronchoscopy, review cultures; think TB, cancer, foreign body, fungi ${r(2)}.</li>
<li><b>Drain any empyema</b> ${r(2)}.</li>
<li>Abscess drainage: percutaneous tube drainage (peripheral, pleural-based abscesses) or endoscopic catheter drainage (central abscess with a draining bronchus); endoscopic drainage had fewer complications and deaths in pooled reports ${r(3)}.</li>
<li>Surgery (usually lobectomy) for about 10% — failure of medical treatment, pulmonary gangrene; operative mortality can reach about 11% ${r(2, 3)}.</li>
<li><b>Do not</b> use postural drainage or chest physiotherapy to drain an abscess — pus can spill into other bronchi ${r(2)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("amoxicillin-clavulanate", "Amoxicillin–clavulanate")} — oral step-down; NEML lists amoxicillin 500 mg + clavulanic acid ${r(6)}.</li>
<li>${D("ampicillin", "Ampicillin")} 1 g IV every 6 hours and ${D("gentamicin", "gentamicin")} 80 mg once daily (STG) — NEML ${r(1)}.</li>
<li>${D("metronidazole", "Metronidazole")} 500 mg IV every 8 hours (NEML 5 mg/mL infusion) or 400 mg tablet orally every 8 hours (NEML 400 mg tablet) — adds anaerobic cover ${r(6)} ${LB.loc()}.</li>
<li>${D("ceftriaxone", "Ceftriaxone")} 1 g vial — NEML; with metronidazole when Gram-negatives are likely ${r(2, 6)}.</li>
<li>${D("amoxicillin", "Amoxicillin")} 500 mg TDS and ${D("sulfamethoxazole", "co-trimoxazole")} 960 mg BD — STG first-contact options ${r(1)}.</li>
<li>${D("moxifloxacin", "Moxifloxacin")} or ${D("levofloxacin", "levofloxacin")} + metronidazole for penicillin allergy ${r(2)} — in Bhutan moxifloxacin is NEML-listed for MDR-TB only; levofloxacin 250 mg tablet is on NEML ${r(6)}.</li>
<li>${D("meropenem", "Meropenem")} — not on NEML 2025; referral-centre procurement ${r(2, 6)}.</li>
<li>${D("vancomycin", "Vancomycin")} 500 mg vial (NEML) for MRSA; ${D("linezolid", "linezolid")} is NEML-listed for MDR-TB only ${r(2, 6)}.</li>
<li>${D("clindamycin", "Clindamycin")} — older alternative, now used less ${r(2)}.</li>
<li>${D("paracetamol", "Paracetamol")}; ${D("oxygen", "oxygen")}; ${D("salbutamol", "salbutamol")} if wheezing ${r(1)}.</li>
<li>Ampicillin–sulbactam has no monograph here and is not on NEML 2025 ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Alcohol use, seizures, stroke, dysphagia", "Treat the cause of aspiration; swallow assessment; thiamine in alcohol use " + LB.exp()],
["Poor dentition", "Dental review and treatment before discharge; STG advises oral hygiene " + r(1)],
["Immunocompromised / HIV", "Broader cover; early bronchoscopy for Nocardia, fungi, mycobacteria " + r(2)],
["Diabetes", "Think of Klebsiella and Staph " + LB.exp()],
["Pregnancy", "Beta-lactams and metronidazole are usable; avoid fluoroquinolones where possible " + LB.exp()],
["Children", "Rare; often secondary (congenital lung malformation, immune problem); IV therapy and total courses of several weeks are usual — paediatric referral " + r(5)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Day 10 on IV antibiotics, still febrile, 7 cm cavity", "CT, bronchoscopy, review cultures; discuss drainage " + r(2, 3)],
["Cavity in a 60-year-old smoker with little surrounding consolidation", "Suspect cavitating cancer — bronchoscopy/biopsy " + r(2)],
["Completed 7 days of amoxicillin, fever back after 1 week", "Readmit; anaerobic-active regimen for several weeks " + r(2)],
["Abscess with pleural fluid, pH low", "Empyema — chest drain " + r(2)],
["Upper-zone cavity, weight loss, no foul sputum", "TB first: sputum AFB / GeneXpert " + LB.loc()]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Empyema (about 10%), bronchopleural fistula ${r(2)}.</li>
<li>Haemoptysis — occasionally massive ${r(1)} ${LB.exp()}.</li>
<li>Spread to other lobes, sepsis, pulmonary gangrene ${r(2)}.</li>
<li>Persistent cavity, bronchiectasis ${LB.exp()}.</li>
<li>Brain abscess (haematogenous) ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Follow-up chest X-ray to confirm the cavity has healed ${r(1)}; continue antibiotics until it has ${r(2)}.</li>
<li>Oral hygiene and dental care ${r(1)}.</li>
<li>Stop alcohol; safe swallowing advice ${LB.exp()}.</li>
<li>If the cavity does not close or the patient smokes and is over 40, make sure a cancer has been excluded ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Lung cavity with an air–fluid level", src: "images/lung-abscess-cxr.jpg", mod: "Chest radiograph (PA)", ctx: "Cavitating infection (abscess vs TB)", loc: "Right upper to mid zone", find: "Thick-walled cavity with a horizontal air–fluid level; airspace and nodular opacities in both lungs", signs: "Air–fluid level", interp: "An abscess and TB can look alike — sputum AFB / GeneXpert in Bhutan", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Chest_X-ray_of_right_upper_to_mid_zone_lung_cavity_with_air_fluid_level.jpg", lic: "CC BY-SA 4.0" })}${fig({ title: "Bilateral pneumonia with abscesses", src: "images/lung-abscess-bilateral.jpg", mod: "Chest radiograph (PA)", ctx: "37-year-old man", loc: "Both lungs", find: "Bilateral consolidation with several cavities and abscesses", signs: "Multiple cavities", interp: "Multiple cavities raise septic emboli, Staph or Klebsiella", by: "Christaras A", page: "https://commons.wikimedia.org/wiki/File:XR_chest_-_pneumonia_with_abscess_and_caverns_-_d0.jpg", lic: "CC BY 2.5" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Cavity with fluid level on chest X-ray", [F.s("Sputum AFB / GeneXpert, Gram stain, culture; blood cultures; CBC"), F.a, F.b([["TB positive", F.e("Treat TB")], ["TB negative", F.s("Anaerobic-active antibiotics (IV if unwell)")]]), F.a, F.d("Better in 7–10 days?"), F.a, F.b([["Yes", F.ok("Oral step-down; continue until X-ray clears (3–6+ weeks)")], ["No", F.s("CT + bronchoscopy: obstruction? cancer? unusual organism? empyema?")]]), F.a, F.e("Drain empyema; drain abscess (percutaneous / endoscopic); surgery if all fails")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["7 days of antibiotics", "Relapse", "Weeks, until the film clears"],
["Amoxicillin alone", "Beta-lactamase anaerobes not covered", "Add clavulanate or metronidazole"],
["Postural drainage for an abscess", "Spills pus into healthy lung", "Antibiotics ± targeted drainage"],
["Not doing bronchoscopy in a non-responder", "Missed cancer or foreign body", "Bronchoscopy at 7–10 days"],
["Forgetting the teeth", "Source persists", "Dental review"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which STG regimen is given for a lung abscess with respiratory distress?", "IV ampicillin 1 g QID plus gentamicin 80 mg once daily, oxygen, paracetamol; refer if not improving.")}
${qa("Intern/MO", "How long is a lung abscess usually treated?", "Until the chest X-ray shows resolution or a small stable scar — generally 3–6 weeks or longer.")}
${qa("Specialist", "What should prompt bronchoscopy?", "No improvement after 7–10 days, atypical features, immunosuppression, suspected obstruction (cancer, foreign body).")}
${qa("Specialist", "Which abscesses usually need drainage?", "Those 6 cm or more, those failing antibiotics, and any with empyema (which must be drained).")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §3.2 Lung abscess.</li>
<li id="ref-2">Sethi S. Lung abscess. Merck Manual Professional Edition (peer reviewed by Rivera MP; last updated March 2025). <a href="https://www.merckmanuals.com/professional/pulmonary-disorders/lung-abscess/lung-abscess" target="_blank" rel="noopener">merckmanuals.com</a></li>
<li id="ref-3">Hadid W, Stella GM, Maskey AP, et al. Lung abscess: the non-conservative management: a narrative review. J Thorac Dis 2024;16(5):3431–3440. <a href="https://doi.org/10.21037/jtd-23-1561" target="_blank" rel="noopener">doi:10.21037/jtd-23-1561</a></li>
<li id="ref-4">Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the ATS and IDSA. Am J Respir Crit Care Med 2019;200(7):e45–e67. <a href="https://doi.org/10.1164/rccm.201908-1581ST" target="_blank" rel="noopener">doi:10.1164/rccm.201908-1581ST</a></li>
<li id="ref-5">Yousef L, Yousef A, Al-Shamrani A. Lung abscess case series and review of the literature. Children (Basel) 2022;9(7):1047. <a href="https://doi.org/10.3390/children9071047" target="_blank" rel="noopener">doi:10.3390/children9071047</a></li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §3.2", "<span class='pass'>Checked</span>", "Read from the STG text"],
["Antibiotic choice and duration", "<span class='pass'>Checked</span>", "Merck Manual 2025; anaerobic cover rule from ATS/IDSA 2019 " + r(4)],
["Drainage and outcomes", "<span class='pass'>Checked</span>", "Hadid 2024 full text"],
["Bhutan IV regimen with metronidazole", "<span class='unv'>Local adaptation</span>", "Built from NEML drugs and the international principle; marked"],
["No consensus guideline", "<span class='unv'>Note</span>", "There is no major society guideline for lung abscess; sources are a peer-reviewed reference text and reviews"],
["DOIs", "<span class='pass'>Checked</span>", "Crossref"],
["Images", "<span class='pass'>Checked</span>", "2 Commons images, licence checked per file"]
], "qc")}` }
]
});
})();
