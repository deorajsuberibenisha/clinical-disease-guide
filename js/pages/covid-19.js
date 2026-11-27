/* COVID-19 and seasonal influenza — all ages. Batch E-8, 27 Nov 2026.
   Sources read directly: Bhutan STG 2024 §8.5.1 COVID-19 and §8.5.2 influenza (isolation, supportive care, 'antiviral drugs' unnamed, vaccination, masks,
   hand and cough hygiene); BCR topic pages 'covid' and 'influenza'. WHO living guideline on drugs for covid-19, 14th iteration (Agarwal et al., BMJ
   Nov 2023) — read in the browser 27 Nov 2026: severity definitions, risk groups (high 6%, moderate 3%, low 0.5%), nirmatrelvir/ritonavir, remdesivir,
   molnupiravir, corticosteroids 7–10 days, IL-6 blockers, baricitinib. WHO Clinical practice guidelines for influenza 2024, executive summary (PDF, text
   saved _work/research/e7/who-influenza-2024-exec-summary.txt). RECOVERY (Horby NEJM 2021, DOI verified). NEML 2025 (no oseltamivir, nirmatrelvir,
   remdesivir, baricitinib or tocilizumab listed; dexamethasone, hydrocortisone, prednisolone, heparin, enoxaparin listed). FDA doses via the drug
   monographs (oseltamivir, remdesivir, baricitinib). Not read: Paxlovid label, WHO clinical management of COVID-19 (2023/2025), Bhutan national
   COVID-19 clinical protocol, WHO influenza full guideline risk definitions (marked). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "covid-19",
title: "COVID-19 and influenza — all ages",
subtitle: "Two respiratory viruses that look alike at the bedside: test when it changes management, isolate, treat most at home, check SpO₂, give steroids only when severe, and keep antivirals for the patients WHO says will benefit",
age: "All ages", specs: ["id", "resp", "medicine", "ph", "paeds", "emerg"],
keywords: ["COVID-19", "coronavirus", "SARS-CoV-2", "influenza", "flu", "seasonal influenza", "avian influenza", "H5N1", "oseltamivir", "Tamiflu", "baloxavir", "nirmatrelvir", "Paxlovid", "remdesivir", "molnupiravir", "dexamethasone COVID", "baricitinib", "tocilizumab", "rapid antigen test", "RT-PCR", "isolation", "silent hypoxia", "post-COVID", "long COVID", "flu vaccine"],
related: ["pneumonia-adult", "pneumonia-child", "urti-adult", "urti-child", "ards-adult", "sepsis-adult", "bronchitis-adult", "immunisation-schedule"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">COVID-19 and influenza both spread by droplets, both cause fever, cough, aches and tiredness, and both can kill older people and those with weak immunity. Most patients recover at home. The bedside decisions are the same for both: how sick is the patient (oxygen saturation), how high is their risk, and does an antiviral or a steroid help at this stage?</p>
<div class="glance">
<div><h4>Severity (WHO)</h4><p><b>Severe</b> = SpO₂ under 90% on air, signs of pneumonia, or severe respiratory distress (RR over 30 in adults). <b>Critical</b> = ARDS, sepsis, shock or need for ventilation ${r(2)}.</p></div>
<div><h4>Steroids</h4><p>COVID-19: <b>only</b> for severe or critical illness (dexamethasone 6 mg daily for up to 10 days) ${r(2, 6)}. Influenza: <b>not</b> recommended even when severe ${r(3)}.</p></div>
<div><h4>Antivirals</h4><p>COVID-19: nirmatrelvir/ritonavir for non-severe disease at high risk ${r(2)}. Influenza: oseltamivir for severe illness; baloxavir for non-severe at high risk ${r(3)}.</p></div>
<div><h4>No antibiotics</h4><p>For non-severe influenza with low probability of bacterial infection (strong WHO recommendation) ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§8.5.1 and §8.5.2) advises isolation, supportive management and unnamed 'antiviral drugs' for COVID-19, symptomatic care for influenza, and vaccination, masks, cough and hand hygiene and plenty of fluids ${r(1)}. None of the WHO-recommended antivirals (nirmatrelvir/ritonavir, remdesivir, molnupiravir, oseltamivir, baloxavir) or baricitinib/tocilizumab appear on the NEML 2025; dexamethasone, hydrocortisone, prednisolone, heparin and enoxaparin do ${r(4)}. Antivirals may be held as programme or pandemic stock — check with the hospital pharmacy and the national surveillance unit before promising them ${LB.loc()}. Report clusters of severe respiratory illness, and any suspected avian influenza, to the surveillance system ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The diseases in brief", html: `${tbl(["Feature", "COVID-19", "Influenza"], [
["Cause", "SARS-CoV-2 " + r(1), "Influenza A and B " + r(1)],
["Spread", "Droplets (and aerosols indoors) " + r(1), "Droplets " + r(1)],
["Incubation", "3–14 days " + r(7), "1–4 days " + r(1)],
["Typical symptoms", "Fever, cough, tiredness, loss of taste or smell, sore throat, headache, diarrhoea, chest pain " + r(1), "Fever, headache, sore throat, cough, nasal congestion, body aches, fatigue; vomiting and diarrhoea in children " + r(1)],
["Severe signs", "Breathlessness, hypoxia " + r(1), "Breathlessness, hypoxia " + r(1)],
["Season", "All year, waves " + LB.exp(), "Winter peaks in temperate Bhutan; may circulate year-round in the south " + LB.exp()],
["Vaccine", "COVID-19 vaccines " + r(1), "Seasonal influenza vaccine " + LB.exp()]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("From infection to severe disease", [F.s("Virus infects the airway"), F.a, F.s("Most: mild illness, immune control in a week"), F.a, F.d("Some (old, immunosuppressed, chronic disease)"), F.a, F.s("Viral pneumonia → hypoxia (may be 'silent' in COVID-19)"), F.a, F.s("COVID-19: excessive inflammation in week 2 — why steroids, IL-6 blockers and baricitinib help"), F.a, F.e("ARDS, sepsis, clotting, secondary bacterial pneumonia")])}
<p>Antivirals work best early, while the virus is replicating; anti-inflammatory drugs help later, when hypoxia shows the inflammatory phase has begun ${r(2)} ${LB.exp()}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "WHO", "This guide"], [
["COVID-19 antivirals", "'Antiviral drugs' — none named", "Nirmatrelvir/ritonavir: strong for high risk, conditional for moderate risk, against for low risk; remdesivir and molnupiravir conditional for high risk only", "WHO risk-based approach, if the drugs can be obtained " + r(2) + " " + LB.int()],
["Corticosteroids", "—", "COVID-19: strong for severe/critical, conditional against for non-severe. Influenza: conditional against", "Never steroids for mild COVID-19 or for influenza " + r(2, 3)],
["Influenza antivirals", "Symptomatic only", "Oseltamivir conditional for severe; baloxavir conditional for non-severe high risk; strong against oseltamivir for non-severe", "Oseltamivir for severe or hospitalised influenza " + r(3) + " " + LB.int()],
["Antibiotics", "—", "Strong against for non-severe influenza with low probability of bacterial co-infection", "Only with evidence of bacterial pneumonia " + r(3)],
["Testing", "CBC, chest X-ray, rapid antigen/antibody, PCR", "Influenza: NAAT for suspected severe; NAAT or digital immunoassay for non-severe", "Test when the result changes management or isolation " + r(1, 3)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Fever, cough, sore throat, headache, body aches, tiredness; loss of taste or smell suggests COVID-19 ${r(1)}.</li>
<li>Children with influenza often vomit or have diarrhoea ${r(1)}.</li>
<li><b>Danger signs:</b> breathlessness, SpO₂ under 90% (under 94% deserves close watch), RR over 30, accessory muscles, inability to complete sentences; in children very severe chest indrawing, grunting, cyanosis, inability to drink, lethargy, convulsions ${r(2)}.</li>
<li>COVID-19 hypoxia may be present with little breathlessness — measure SpO₂ ${LB.exp()}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 68-year-old woman with diabetes and heart failure in Trashigang has had fever and cough for 2 days; rapid antigen is positive for COVID-19. SpO₂ 95%, RR 20, chest clear. She is non-severe but at moderate risk of admission. Explain warning signs, check SpO₂ daily, isolate at home; nirmatrelvir/ritonavir is conditionally recommended if available within 5 days — but check her medicines for interactions. No dexamethasone and no antibiotics at this stage ${r(2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Bacterial pneumonia", "Focal signs, purulent sputum, high CRP, lobar X-ray " + LB.exp()],
["Dengue", "Fever with rash, low platelets, no prominent cough — test in season " + LB.loc()],
["Scrub typhus", "Eschar, lymphadenopathy, pneumonitis " + LB.loc()],
["Pulmonary TB", "Cough over 2 weeks, weight loss " + LB.loc()],
["Pertussis", "Paroxysmal cough " + LB.exp()],
["Heart failure, PE", "Orthopnoea, oedema; unilateral leg swelling, pleuritic pain " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Pulse oximetry</b> for everyone; repeat ${r(2)} ${LB.exp()}.</li>
<li>COVID-19: rapid antigen test or PCR ${r(1)}. Influenza: NAAT for suspected severe illness; NAAT or digital immunoassay for non-severe ${r(3)}.</li>
<li>Severe: CBC, chest X-ray ${r(1)}; glucose, creatinine, LFTs, blood culture; ABG where available ${LB.exp()}.</li>
<li>Before nirmatrelvir/ritonavir: full medicine list for interactions; kidney function ${LB.exp("PAXLOVID LABEL — NOT READ")}.</li>
<li>Before remdesivir: liver tests and prothrombin time ${r(5)}.</li>
</ul>` },
{ id: "staging", title: "Severity and risk", html: `
${tbl(["COVID-19 risk group (WHO 2023)", "Baseline risk of admission", "Who"], [
["High", "About 6%", "Immunodeficiency syndromes; autoimmune illness on immunosuppressants; solid organ transplant on immunosuppressants " + r(2)],
["Moderate", "About 3%", "Over 65; obesity; diabetes; active cancer; disability; chronic kidney, liver or cardiopulmonary disease; other chronic comorbidity " + r(2)],
["Low", "About 0.5%", "Everyone else — most patients " + r(2)]
])}
<div class="calc" data-calc="covidflurx"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Everyone</h3>
<ul>
<li>Isolation; mask; cough and hand hygiene ${r(1)}.</li>
<li>Paracetamol for fever and aches; fluids ${r(1)} ${LB.exp()}.</li>
<li>Return at once if breathless, SpO₂ falls, confused, or unable to drink ${LB.exp()}.</li>
</ul>
<h3>2. COVID-19 — non-severe</h3>
${tbl(["Risk", "WHO recommendation"], [
["High", "Nirmatrelvir/ritonavir (strong); remdesivir or molnupiravir (conditional) if nirmatrelvir/ritonavir is unsuitable " + r(2)],
["Moderate", "Nirmatrelvir/ritonavir (conditional); not remdesivir or molnupiravir " + r(2)],
["Low", "No antiviral " + r(2)],
["All", "No corticosteroids " + r(2)]
])}
<p>Nirmatrelvir 300 mg with ritonavir 100 mg twice daily for 5 days, started within 5 days of symptoms; lower dose in moderate kidney impairment; many interactions (statins, anticonvulsants, some antiarrhythmics and anticoagulants) ${LB.exp("PAXLOVID LABEL — NOT READ")}. Pregnant and breastfeeding people may consider it ${r(2)}.</p>
<h3>3. COVID-19 — severe or critical (hospital)</h3>
<ul>
<li>Oxygen to keep SpO₂ at 94% or above in severe illness (target 92–96% common practice) ${LB.exp("WHO CLINICAL MANAGEMENT — NOT READ")}; awake prone positioning ${LB.exp()}.</li>
<li><b>Dexamethasone 6 mg once daily</b> oral or IV for up to 10 days (or until discharge) ${r(6)}; WHO: systemic corticosteroids for 7–10 days (strong) ${r(2)}. Hydrocortisone or prednisolone are alternatives if dexamethasone is unavailable ${LB.exp()}.</li>
<li>Add an IL-6 receptor blocker (tocilizumab, sarilumab) <b>or</b> baricitinib (4 mg once daily up to 14 days) where available (strong) ${r(2, 5)}.</li>
<li>Remdesivir: conditional against in critical illness ${r(2)}; 200 mg IV day 1 then 100 mg daily if used ${r(5)}.</li>
<li>Thromboprophylaxis with heparin or enoxaparin ${LB.exp("WHO ANTICOAGULATION — NOT READ")}.</li>
<li>Critical: ARDS and sepsis pathways; refer to ICU ${LB.int()}.</li>
</ul>
<h3>4. Influenza</h3>
${tbl(["Situation", "WHO 2024"], [
["Severe influenza (hospitalised)", "Oseltamivir (conditional); not peramivir or zanamivir; no corticosteroids, macrolides (without bacterial infection), plasma or mTOR inhibitors " + r(3)],
["Non-severe, high risk of progression", "Baloxavir (conditional) " + r(3)],
["Non-severe, low risk", "No baloxavir (conditional); <b>no oseltamivir</b> for non-severe influenza (strong); no antibiotics if low probability of bacterial infection (strong) " + r(3)],
["Exposed in the last 48 h, extremely high risk", "Prophylaxis with baloxavir or oseltamivir (conditional) " + r(3)]
])}
<p>Oseltamivir dose (treatment, 5 days): 13 years and over 75 mg twice daily; children 1–12 years by weight — 15 kg or less 30 mg, 15.1–23 kg 45 mg, 23.1–40 kg 60 mg, over 40 kg 75 mg twice daily; infants 2 weeks to under 1 year 3 mg/kg twice daily; reduce in kidney impairment ${r(5)}. WHO's guideline concerns treatment started early; the CDC also treats hospitalised patients whenever they present ${LB.exp("CDC — NOT READ")}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("paracetamol", "Paracetamol")} — NEML.</li>
<li>${D("dexamethasone", "Dexamethasone")} 4 mg tablet and 4 mg/mL injection; ${D("hydrocortisone", "hydrocortisone")}; ${D("prednisolone", "prednisolone")} — NEML ${r(4)}.</li>
<li>${D("heparin", "Heparin")} 5,000 IU/mL; ${D("enoxaparin", "enoxaparin")} — NEML ${r(4)}.</li>
<li>${D("oseltamivir", "Oseltamivir")}, ${D("remdesivir", "remdesivir")}, ${D("baricitinib", "baricitinib")} — not on NEML ${r(4, 5)}.</li>
<li>Nirmatrelvir/ritonavir, molnupiravir, baloxavir, tocilizumab — not on NEML ${r(4)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Most mild; danger signs differ (grunting, chest indrawing, unable to drink, lethargy, convulsions) " + r(2) + "; oseltamivir by weight band " + r(5)],
["Pregnancy", "Higher risk of severe disease; nirmatrelvir/ritonavir may be considered " + r(2) + "; oseltamivir for severe influenza " + LB.exp()],
["Older adults", "Moderate-risk group for COVID-19; atypical presentation " + r(2)],
["Immunosuppressed (HIV with low CD4, transplant, chemotherapy)", "High-risk group: antiviral early " + r(2)],
["Health workers", "Masks, hand hygiene, vaccination; isolate when ill " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Healthy 30-year-old, COVID-19 positive, SpO₂ 98%", "Home care; no antiviral, no steroid, no antibiotic " + r(2)],
["Kidney transplant recipient, COVID-19 day 2, well", "High risk: nirmatrelvir/ritonavir — but tacrolimus interaction is major; specialist " + r(2) + " " + LB.exp()],
["COVID-19, SpO₂ 86%, RR 32", "Severe: oxygen, dexamethasone 6 mg, consider baricitinib or tocilizumab, thromboprophylaxis " + r(2, 6)],
["Influenza, 6-year-old, hospitalised with hypoxia, 18 kg", "Severe: oseltamivir 45 mg twice daily for 5 days; no steroids " + r(3, 5)],
["Influenza, healthy 25-year-old asking for 'Tamiflu'", "WHO: no oseltamivir for non-severe influenza; symptomatic care " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Viral pneumonia, ARDS, sepsis ${r(1)}.</li>
<li>Secondary bacterial pneumonia (influenza — Staphylococcus aureus, pneumococcus) ${LB.exp()}.</li>
<li>Venous thromboembolism (COVID-19) ${LB.exp()}.</li>
<li>Myocarditis, encephalitis, worsening of chronic disease ${LB.exp()}.</li>
<li>Post-COVID condition ('long COVID'): fatigue, breathlessness, poor concentration for months ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Vaccination (COVID-19; seasonal influenza for high-risk groups) ${r(1)} ${LB.exp()}.</li>
<li>Mask, cough hygiene, hand hygiene, isolation as advised, fluids ${r(1)}.</li>
<li>Home pulse oximetry for higher-risk patients where possible ${LB.exp()}.</li>
<li>Persistent symptoms beyond 4–12 weeks: review for post-COVID condition and other causes ${LB.exp()}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fever and cough — suspected COVID-19 or influenza", [F.s("Check SpO₂, RR, danger signs"), F.a, F.d("Severe? (SpO₂ < 90%, pneumonia signs, RR > 30)"), F.a, F.b([["Yes", F.e("Admit: oxygen; COVID-19 → dexamethasone ± baricitinib/IL-6 blocker; influenza → oseltamivir, no steroid")], ["No", F.d("Risk group?")]]), F.a, F.b([["High", F.s("COVID-19: nirmatrelvir/ritonavir; influenza: baloxavir")], ["Moderate", F.s("COVID-19: consider nirmatrelvir/ritonavir")], ["Low", F.ok("Home care, isolation, warning signs")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Dexamethasone for every COVID-19 patient", "Harm in non-severe illness", "Only if severe or critical " + r(2)],
["Steroids for influenza", "WHO advises against", "Oseltamivir and supportive care " + r(3)],
["Antibiotics 'just in case'", "No benefit, resistance", "Only with bacterial evidence " + r(3)],
["Not checking SpO₂", "Silent hypoxia missed", "Oximetry every visit"],
["Paxlovid without an interaction check", "Toxicity of co-medications", "Full medicine review first"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "WHO definition of severe COVID-19?", "Any of: SpO₂ < 90% on air, signs of pneumonia, or severe respiratory distress (adults: accessory muscle use, unable to complete sentences, RR > 30).")}
${qa("Intern/MO", "Dexamethasone dose in severe COVID-19?", "6 mg once daily orally or IV for up to 10 days (RECOVERY); WHO: corticosteroids for 7–10 days.")}
${qa("Specialist", "Which COVID-19 patients are 'high risk' in WHO's 2023 update?", "Immunodeficiency syndromes, transplant recipients on immunosuppressants, autoimmune disease on immunosuppressants (~6% admission risk).")}
${qa("Specialist", "WHO 2024 position on oseltamivir?", "Conditional for severe influenza; strong recommendation against for non-severe influenza; conditional for prophylaxis after exposure in extremely high-risk people.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.5.1 COVID-19 and §8.5.2 Influenza.</li>
<li id="ref-2">Agarwal A, Hunt BJ, Stegemann M, et al. A living WHO guideline on drugs for covid-19 (14th iteration, November 2023). BMJ 2020;370:m3379. <a href="https://doi.org/10.1136/bmj.m3379" target="_blank" rel="noopener">doi:10.1136/bmj.m3379</a></li>
<li id="ref-3">World Health Organization. Clinical practice guidelines for influenza: executive summary. Geneva: WHO; 2024 (ISBN 978-92-4-009775-9). <a href="https://www.who.int/publications/i/item/9789240097759" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-5">US Food and Drug Administration prescribing information for oseltamivir, remdesivir and baricitinib, as summarised in this app's drug monographs.</li>
<li id="ref-6">RECOVERY Collaborative Group (Horby P, et al.). Dexamethasone in hospitalized patients with Covid-19. N Engl J Med 2021;384:693–704. <a href="https://doi.org/10.1056/NEJMoa2021436" target="_blank" rel="noopener">doi:10.1056/NEJMoa2021436</a></li>
<li id="ref-7">Bhutan Clinical Reference app, topic page 'COVID-19' (3 Nov 2026), incubation period.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §8.5.1–8.5.2", "<span class='pass'>Checked</span>", "Brief; antivirals not named"],
["WHO COVID-19 drug guideline (Nov 2023)", "<span class='pass'>Checked</span>", "Read in the browser; later MAGICapp updates not read"],
["WHO influenza 2024", "<span class='pass'>Checked</span>", "Executive summary read; full risk definitions not read"],
["Nirmatrelvir/ritonavir dosing and interactions; oxygen targets; anticoagulation", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Tested in the browser"],
["Images", "<span class='pass'>None</span>", "Not needed"]
], "qc")}` }
]
});
})();
