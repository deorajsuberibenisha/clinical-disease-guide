/* Acute bronchitis — adults (child antibiotic doses from NICE noted). Batch E-5, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §3.5 Acute bronchitis (viral; antipyretics, antihistamines, antibiotics for moderate and severe cases,
   hydration, steam, stop smoking); BCR topic page "bronchitis"; NEML 2025.
   NICE NG120 Cough (acute): antimicrobial prescribing (Feb 2019, amended 2021) — read in the browser: course up to 3–4 weeks, no routine antibiotic,
   antibiotics shorten cough by about half a day, higher-risk criteria, back-up prescribing, no bronchodilators/steroids/mucolytics, self-care,
   adult and child antibiotic tables. Merck Manual Professional "Acute bronchitis" (Sethi; updated Apr 2025) — read: aetiology (>95% viral; bacteria
   <5%), pertussis testing after 10–14 days, X-ray triggers, cough resolves within 2 weeks in 80%, symptomatic care, beta-agonist only if wheezing.
   Not read: CHEST 2020 acute bronchitis guideline, Cochrane 2017 (blocked). No licensed image needed (clinical diagnosis) — Images section left empty. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "bronchitis-adult",
title: "Acute bronchitis — adults",
subtitle: "A chest cold: cough for up to three or four weeks after a viral infection, with or without sputum — rule out pneumonia, TB and pertussis, then reassure, treat symptoms and keep antibiotics for the few who need them",
age: "Adults", specs: ["resp", "medicine", "id"],
keywords: ["acute bronchitis", "chest cold", "acute cough", "productive cough", "viral bronchitis", "antibiotics for cough", "back-up antibiotic prescription", "delayed antibiotic", "honey for cough", "cough medicine", "pertussis in adults", "post-viral cough"],
related: ["pneumonia-adult", "urti-adult", "pertussis", "asthma-adult", "copd-adult", "tb-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Acute bronchitis is one of the commonest reasons for a clinic visit and one of the commonest reasons antibiotics are wasted. It is almost always viral, lasts longer than patients expect, and gets better on its own. The doctor's real job is to find the few who have pneumonia, TB, pertussis or an exacerbation of a chronic lung disease.</p>
<div class="glance">
<div><h4>What it is</h4><p>Cough (with or without sputum), sometimes fever, chest soreness and wheeze, after a cold ${r(1, 3)}.</p></div>
<div><h4>Expect</h4><p>Cough lasting <b>up to 3–4 weeks</b> ${r(2)}; it settles within 2 weeks in about 80% ${r(3)}.</p></div>
<div><h4>Antibiotics?</h4><p>Not routinely: they do not improve overall recovery and shorten cough by only about <b>half a day</b> ${r(2)}. Give them if the patient is systemically very unwell, and consider them for higher-risk people ${r(2)}.</p></div>
<div><h4>Do not miss</h4><p>Pneumonia (fast breathing, hypoxia, focal signs), <b>TB if cough over 2 weeks</b>, pertussis after 10–14 days of paroxysms ${r(3)} ${LB.loc()}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§3.5) advises antipyretics, antihistamines, fluids, steam inhalation, avoiding dust and smoke, stopping smoking, and antibiotics for moderate and severe cases ${r(1)}. NICE notes that antihistamines do not help cough ${r(2)}, so they are optional. In Bhutan any cough lasting more than 2 weeks should be tested for TB (sputum AFB / GeneXpert) under the national TB programme ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Definition", "Inflammation of the trachea and bronchi after an upper respiratory infection, in someone without chronic lung disease " + r(3)],
["Cause", "Viral in more than 95% — rhinovirus, influenza, parainfluenza, RSV, coronaviruses including SARS-CoV-2, metapneumovirus " + r(3) + "; STG: viruses most common " + r(1)],
["Bacteria", "Mycoplasma pneumoniae, Bordetella pertussis, Chlamydia pneumoniae — under 5%, sometimes in outbreaks " + r(3)],
["Not acute bronchitis", "Acute worsening in asthma, COPD, bronchiectasis or cystic fibrosis is an exacerbation of that disease " + r(3)],
["Course", "Up to 3–4 weeks " + r(2) + "; 80% within 2 weeks, a few up to 8 weeks " + r(3)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Why the cough lingers", [F.s("Virus infects the airway lining"), F.a, F.s("Epithelial damage and inflammation"), F.a, F.s("Sensitive cough receptors, extra mucus, temporary airway twitchiness"), F.a, F.ok("Lining heals over weeks — cough is the last symptom to go")])}
<p>Purulent (yellow or green) sputum reflects inflammatory cells, not bacteria; sputum colour does not tell viral from bacterial infection or predict a response to antibiotics ${r(3)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE NG120 2019", "Merck 2025", "This guide"], [
["Antibiotics", "For moderate and severe cases", "Not routinely; immediate if systemically very unwell; immediate or back-up if higher risk", "Usually not; for pertussis or known outbreaks (macrolide)", "NICE criteria give 'moderate–severe' a working definition " + LB.int()],
["Antihistamines", "Yes (with antipyretics)", "Limited evidence they do not help cough", "—", "Optional; avoid sedating ones by day " + LB.exp()],
["Bronchodilators / steroids", "—", "Not unless underlying airways disease such as asthma", "Inhaled beta-agonist for a few days if wheezing", "Salbutamol only if wheezing " + LB.int()],
["Mucolytics", "—", "Do not offer", "Evidence weak", "Not needed " + r(2)],
["Steam inhalation", "Yes", "—", "—", "Harmless if done safely (scald risk) " + LB.exp()]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Cough, dry or productive (clear or yellow sputum), often after cold symptoms; mild fever; chest soreness from coughing; wheeze ${r(1, 3)}.</li>
<li>Usually 5 days or more of symptoms before the visit ${r(3)}.</li>
<li>Examination: often normal, or scattered rhonchi and wheeze ${r(3)}.</li>
<li>High or prolonged fever suggests influenza, pneumonia or COVID-19 ${r(3)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 34-year-old teacher in Paro has had a cough for 9 days after a cold, now bringing up yellow sputum, with a sore chest. She is afebrile, respiratory rate 16, SpO₂ 98%, chest clear apart from a few wheezes. She asks for an antibiotic because the sputum is yellow. Explain that the cough can last 3–4 weeks, that sputum colour does not mean bacteria, and that antibiotics shorten the cough by about half a day while causing diarrhoea and nausea in some people. Suggest honey, fluids and paracetamol, and to come back if she becomes breathless, feverish, or is still coughing after 3 weeks (when TB testing is due) ${r(2, 3)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Pneumonia", "Pulse over 100, RR over 24, temperature over 38 °C, focal crackles, hypoxia, confusion in older people — chest X-ray " + LB.exp("ACP/CDC 2016 CRITERIA — NOT READ") + " " + r(3)],
["Pulmonary TB", "Cough over 2 weeks, weight loss, night sweats, haemoptysis — sputum AFB / GeneXpert " + LB.loc()],
["Pertussis", "Paroxysms, whoop, post-tussive vomiting; test after 10–14 days, especially if unvaccinated or exposed " + r(3)],
["Asthma / cough-variant asthma", "Recurrent episodes, night cough, wheeze; spirometry " + r(3)],
["COPD exacerbation", "Smoker with chronic symptoms before this illness " + r(3)],
["COVID-19 / influenza", "Fever, myalgia, loss of smell; test when indicated " + r(3)],
["Heart failure, PE, lung cancer", "Breathlessness out of proportion, haemoptysis, risk factors — NICE asks to refer when these are suspected " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Usually none — the diagnosis is clinical ${r(3)}.</li>
<li><b>Pulse oximetry</b> if breathless ${r(3)}.</li>
<li><b>Chest X-ray</b> if pneumonia or another serious illness is suspected (ill appearance, confusion, high fever, fast breathing, hypoxia, focal signs), with a lower threshold in older people ${r(3)}; STG lists CBC and chest X-ray ${r(1)}.</li>
<li>Sputum Gram stain and culture are not needed ${r(3)}.</li>
<li><b>Sputum AFB / GeneXpert</b> if cough over 2 weeks ${LB.loc()}.</li>
<li>Pertussis, influenza or SARS-CoV-2 testing when suspected clinically ${r(3)}.</li>
<li>Cough that worsens after improving, or lasts over 8 weeks, needs reassessment including an X-ray ${r(3)}.</li>
</ul>` },
{ id: "staging", title: "Who might need an antibiotic (NICE)", html: `
${tbl(["Group", "Action"], [
["Not systemically very unwell, not higher risk", "No antibiotic; explain why " + r(2)],
["Systemically very unwell", "Immediate antibiotic " + r(2)],
["Higher risk of complications — significant heart, lung, kidney, liver or neuromuscular disease, immunosuppression, cystic fibrosis; young children born prematurely; over 65 with 2 or more, or over 80 with 1 or more of: admission in the past year, diabetes, heart failure, current oral steroids", "Immediate or back-up antibiotic " + r(2)],
["Worsening rapidly or significantly", "Reassess for pneumonia, sepsis, cardiorespiratory failure; consider previous antibiotics and resistance " + r(2)]
])}
<div class="calc" data-calc="bronchitisabx"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Advice for everyone</h3>
<ul>
<li>The usual course is up to 3–4 weeks; come back if symptoms worsen rapidly, do not improve after 3–4 weeks, or the patient becomes very unwell ${r(2)}.</li>
<li>Paracetamol and fluids ${r(1, 3)}; stop smoking, avoid dust and smoke ${r(1)}.</li>
</ul>
<h3>2. Self-care with some evidence (NICE)</h3>
<ul>
<li>Honey (over 1 year of age) ${r(2)}.</li>
<li>Pelargonium (12 years and over) ${r(2)}.</li>
<li>Cough medicines with guaifenesin, or with cough suppressants other than codeine (12 years and over; not with persistent cough as in asthma, or heavy secretions) ${r(2)}.</li>
<li>Limited evidence suggests antihistamines, decongestants and codeine cough medicines do <b>not</b> help ${r(2)}.</li>
</ul>
<h3>3. What not to give</h3>
<p>No oral or inhaled bronchodilator or corticosteroid unless there is underlying airways disease such as asthma; no mucolytics ${r(2)}. A short course of inhaled salbutamol is reasonable if the patient is wheezing ${r(3)}.</p>
<h3>4. Antibiotics — when they are given (adults)</h3>
${tbl(["Choice", "Dose and length (adults 18+)"], [
["First choice", "Doxycycline 200 mg on day 1, then 100 mg once daily for 4 days (5 days in total) " + r(2)],
["Alternatives", "Amoxicillin 500 mg three times daily for 5 days; clarithromycin 250–500 mg twice daily for 5 days; erythromycin 250–500 mg four times daily or 500–1,000 mg twice daily for 5 days " + r(2)],
["Pregnancy", "No doxycycline; amoxicillin preferred; erythromycin if a macrolide is needed " + r(2)],
["Pertussis or Mycoplasma outbreak", "Macrolide (azithromycin or clarithromycin) " + r(3) + " — see the pertussis page"]
])}
<p>A <b>back-up</b> prescription means the patient uses it only if symptoms worsen rapidly or significantly ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("paracetamol", "Paracetamol")} — NEML.</li>
<li>${D("doxycycline", "Doxycycline")} 100 mg capsule — NEML; not in pregnancy or under 12 years ${r(2, 4)}.</li>
<li>${D("amoxicillin", "Amoxicillin")} 250 mg capsule and 125 mg/5 mL syrup — NEML ${r(2, 4)}.</li>
<li>${D("erythromycin", "Erythromycin")} stearate 250 mg tablets — NEML; ${D("clarithromycin", "clarithromycin")} is NEML-listed for H. pylori only; ${D("azithromycin", "azithromycin")} is on NEML only as a 500 mg IV injection ${r(4)}.</li>
<li>${D("salbutamol", "Salbutamol")} MDI — only if wheezing ${r(3)}.</li>
<li>${D("guaifenesin", "Guaifenesin")} — over-the-counter, 12 years and over ${r(2)}.</li>
<li>${D("codeine", "Codeine")} cough medicines — not recommended ${r(2)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Under 5 with fever: follow fever assessment; if an antibiotic is needed (NICE): amoxicillin 125 mg (1–11 months), 250 mg (1–4 years), 500 mg (5–17 years) three times daily for 5 days " + r(2) + " — see the child respiratory pages"],
["Pregnancy", "Amoxicillin if needed; no doxycycline " + r(2)],
["Older adults", "Lower threshold for X-ray — pneumonia may present without fever or signs " + r(3)],
["Asthma or COPD", "Treat as an exacerbation of that disease " + r(3)],
["Cough over 2 weeks", "TB testing (national programme) " + LB.loc()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Healthy 25-year-old, 6 days of cough, yellow sputum, normal vital signs", "No antibiotic; explain course; honey, fluids " + r(2)],
["70-year-old with diabetes and heart failure, 5 days of productive cough, stable", "Higher risk (over 65 with 2 criteria): immediate or back-up antibiotic " + r(2)],
["Cough 3 weeks, night sweats, weight loss", "Sputum AFB / GeneXpert and chest X-ray " + LB.loc()],
["Paroxysmal cough for 2 weeks with vomiting after coughing", "Test for pertussis; macrolide " + r(3)],
["SpO₂ 91%, RR 28, crackles at right base", "This is pneumonia until proved otherwise — X-ray and pneumonia pathway " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Secondary bacterial pneumonia (uncommon) ${LB.exp()}.</li>
<li>Prolonged post-viral cough; transient airway hyper-responsiveness ${r(3)}.</li>
<li>Antibiotic adverse effects — diarrhoea and nausea — and resistance when antibiotics are overused ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Return if worse, breathless, very unwell, or still coughing after 3–4 weeks ${r(2)}.</li>
<li>Cough beyond 8 weeks needs evaluation for asthma, reflux, postnasal drip and other causes ${r(3)}.</li>
<li>Smoking cessation advice at every visit ${r(1)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Adult with acute cough", [F.d("Red flags? (RR > 24, SpO₂ low, focal signs, confusion, haemoptysis, weight loss)"), F.a, F.b([["Yes", F.e("Chest X-ray; pneumonia / sepsis / PE / cancer pathways")], ["No", F.d("Cough over 2 weeks?")]]), F.a, F.b([["Yes", F.s("Sputum AFB / GeneXpert; consider pertussis")], ["No", F.d("Systemically very unwell or higher risk?")]]), F.a, F.b([["Very unwell", F.s("Immediate antibiotic (doxycycline first choice)")], ["Higher risk", F.s("Immediate or back-up antibiotic")], ["Neither", F.ok("No antibiotic; self-care; safety-net")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Antibiotics for yellow sputum", "Colour does not mean bacteria", "Explain; back-up script only for higher-risk people"],
["Salbutamol or steroids for every cough", "No benefit without airways disease", "Only if wheezing or asthma"],
["Treating repeated 'bronchitis' in a smoker", "Missed COPD or cancer", "Spirometry; X-ray if over 40 with risk factors"],
["Forgetting TB", "Ongoing transmission", "Test every cough over 2 weeks"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How long does the cough of acute bronchitis usually last?", "Up to 3–4 weeks (NICE); about 80% settle within 2 weeks.")}
${qa("Intern/MO", "By how much do antibiotics shorten the cough?", "About half a day on average, with no improvement in overall clinical condition.")}
${qa("Specialist", "Name NICE's higher-risk groups.", "Significant heart, lung, kidney, liver or neuromuscular disease; immunosuppression; cystic fibrosis; young children born prematurely; over 65 with ≥ 2 or over 80 with ≥ 1 of: admission in the past year, diabetes, heart failure, oral steroids.")}
${qa("Specialist", "First-choice antibiotic for adults when one is needed?", "Doxycycline 200 mg on day 1, then 100 mg daily for 4 days.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §3.5 Acute bronchitis.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Cough (acute): antimicrobial prescribing. NICE guideline NG120, February 2019 (amended 2021). <a href="https://www.nice.org.uk/guidance/ng120" target="_blank" rel="noopener">nice.org.uk/guidance/ng120</a></li>
<li id="ref-3">Sethi S. Acute bronchitis. Merck Manual Professional Edition (peer reviewed by Rivera MP; last updated April 2025). <a href="https://www.merckmanuals.com/professional/pulmonary-disorders/acute-bronchitis/acute-bronchitis" target="_blank" rel="noopener">merckmanuals.com</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §3.5", "<span class='pass'>Checked</span>", "Read from the STG text"],
["NICE NG120 recommendations and doses", "<span class='pass'>Checked</span>", "Full recommendations page read in the browser"],
["Aetiology, testing, duration", "<span class='pass'>Checked</span>", "Merck Manual 2025"],
["Pneumonia vital-sign triggers", "<span class='unv'>Not read</span>", "ACP/CDC 2016 not reachable; marked"],
["Calculator", "<span class='pass'>Checked</span>", "NICE antibiotic decision tool tested in the browser"],
["Images", "<span class='pass'>None</span>", "Clinical diagnosis; no image needed"]
], "qc")}` }
]
});
})();
