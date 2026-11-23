/* Alcohol use disorder and withdrawal (adults) */
registerPage({
id: "alcohol-adult",
title: "Alcohol Use Disorder and Withdrawal",
subtitle: "Bhutan's biggest preventable killer: AUDIT screening and brief intervention, safe detoxification with diazepam and thiamine, delirium tremens, Wernicke's encephalopathy, and staying sober with family, PEMA and rehabilitation support",
age: "Adults", specs: ["psych", "medicine", "emerg", "gi"],
keywords: ["alcohol", "alcohol use disorder", "alcoholism", "alcohol dependence", "harmful drinking", "ara", "chhang", "bangchang", "alcohol withdrawal", "delirium tremens", "DTs", "withdrawal seizures", "Wernicke", "Korsakoff", "thiamine", "diazepam", "CIWA-Ar", "AUDIT", "CAGE", "brief intervention", "detoxification", "disulfiram", "relapse prevention", "PEMA"],
related: ["cirrhosis-adult", "ugib-adult", "pancreatitis-adult", "depression-adult", "headinjury-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Alcohol-related liver disease is the leading cause of death in Bhutan's hospitals, yet most of the people who die were sitting in our clinics years earlier with stomach pains, injuries or high blood pressure. Asking every adult about alcohol, and responding kindly and practically, is one of the most useful things a clinician here can do.</p>
<div class="glance">
<div><h4>Screen everyone</h4><p>AUDIT (10 questions) or CAGE-AID (STG); AUDIT-C for a quick check.</p></div>
<div><h4>Brief intervention</h4><p>5–10 minutes of feedback and advice (5As, or 5Rs if not ready) cuts drinking.</p></div>
<div><h4>Withdrawal</h4><p>Starts 6–24 h after the last drink; fits at 12–48 h; DTs at 48–72 h.</p></div>
<div><h4>Detox</h4><p>${dr("diazepam")} 15 → 10 → 5 mg TDS → 5 mg at night, 2 days each (STG), or by CIWA-Ar.</p></div>
<div><h4>Thiamine</h4><p>${dr("thiamine")} <b>before glucose</b>; high-dose IV if confused, ataxic or eye signs.</p></div>
<div><h4>After detox</h4><p>Psychoeducation, family, AA, PEMA and rehabilitation; follow up 1–2 years.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §10.2.2 calls alcohol-related disorders the leading cause of morbidity and mortality in Bhutan and asks that <b>all patients</b> be screened. Home-brewed <i>ara</i> (distilled, often strong and of unknown strength) and <i>bangchang</i>/<i>chhang</i> are widely made and shared, and drinking is woven into hospitality and ceremony, so advice must be culturally careful. The Pema Secretariat (PEMA) links patients to rehabilitation and recovery services. Naltrexone and acamprosate are not on the NEML; ${dr("disulfiram")} is available at referral hospitals. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Spectrum and definitions", html: `
${tbl(["Pattern", "Meaning", "Response"], [
["Low-risk drinking", "AUDIT under 8", "Reinforce; no alcohol in pregnancy, when driving, or with certain illnesses"],
["Hazardous use", "AUDIT 8–15: pattern that risks harm", "Simple advice"],
["Harmful use", "AUDIT 16–19: harm already present (physical, mental, social)", "Brief counselling, monitoring"],
["Dependence", "AUDIT 20 or more; craving, tolerance, withdrawal, loss of control, drinking despite harm (ICD-11: 2 of 3 features over 12 months)", "Assessment, detox, relapse prevention, referral"]])}
<p>One standard drink is about 10 g alcohol. Home-distilled ara can be 30–50% alcohol: one cup may hold several standard drinks.</p>
` },

{ id: "patho", title: "Dependence and withdrawal", html: `
${F.chart("Why stopping is dangerous", [
F.s("Chronic alcohol enhances GABA and blocks glutamate (NMDA)"), F.a, F.s("Brain adapts: fewer GABA effects, more glutamate receptors"), F.a,
F.e("Sudden stop → unopposed excitation: tremor, sweats, fits, hallucinations, delirium tremens"), F.a,
F.ok("Long-acting benzodiazepines replace the GABA effect and are tapered over a week")])}
<p>Poor diet and alcohol block thiamine uptake; giving glucose without thiamine can tip a patient into <b>Wernicke's encephalopathy</b> (confusion, ataxia, eye movement palsies), which can become permanent Korsakoff amnesia.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE CG100/CG115, WHO mhGAP 2023", "This guide"], [
["Detox regimen", "Fixed diazepam taper over 8 days", "Fixed or symptom-triggered (CIWA-Ar); symptom-triggered uses less drug", "Either; CIWA-Ar tool for inpatients " + LB.int()],
["Thiamine", "100 mg IV stat, then 75 mg PO 2–3 times daily up to 3 months", "Prophylactic oral 200–300 mg/day; suspected Wernicke's: high-dose IV (e.g. 500 mg 8-hourly for 3–5 days)", "STG plus high-dose IV if Wernicke's suspected"],
["Insomnia after detox", "Amitriptyline 25–100 mg at night for 1–2 weeks", "Sleep hygiene; avoid sedatives with dependence potential", "Short course only if needed"],
["Relapse-prevention drugs", "Disulfiram (NRH/RRH)", "Acamprosate or naltrexone first; disulfiram second line", "Disulfiram for motivated, supervised patients " + LB.loc()]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Screen:</b> AUDIT (tool below) or CAGE-AID; ask what, how much, how often, and the time of the last drink.</li>
<li><b>Dependence:</b> morning drinking, shakes relieved by alcohol, previous withdrawal fits or DTs, failed attempts to stop.</li>
<li><b>Harms:</b> injuries, GI bleeding, jaundice, ascites, pancreatitis, hypertension, atrial fibrillation, neuropathy, depression, suicidal thoughts, family violence, work and money problems.</li>
<li><b>Examine:</b> pulse, BP, temperature, tremor, sweating, orientation, gait, eye movements (nystagmus, palsies), liver signs, injuries (head!).</li></ul>
${box("red", "Danger signs", `<ul><li>Seizure, confusion, hallucinations, fever, tachycardia over 120</li><li>Ataxia, eye movement palsy, confusion (Wernicke's)</li><li>Head injury, GI bleeding, hypoglycaemia, infection</li><li>Suicidal thoughts</li></ul>`)}
<h3>The typical patient</h3>
<p>A 46-year-old driver from Trashigang is admitted with a fractured wrist. On the second day he is sweating, his hands shake, his pulse is 118 and he picks at the sheets, saying insects are crawling on the bed. His wife says he drinks a bottle of ara every day. <b>This is alcohol withdrawal heading towards delirium tremens</b>, 36–48 hours after his last drink. He needs diazepam now and on a schedule, thiamine before any glucose, a quiet lit room with his wife present, and a search for infection, hypoglycaemia and head injury.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Hepatic encephalopathy", "Liver disease, asterixis, constipation, no tremor-sweats pattern"], ["Wernicke's encephalopathy", "Ataxia, eye signs; can coexist"], ["Head injury, subdural haematoma", "Falls; focal signs; drowsiness"], ["Sepsis, meningitis", "Fever, neck stiffness"], ["Hypoglycaemia", "Check glucose"], ["Thyrotoxicosis, stimulant use, anxiety", "History, thyroid signs"]])}` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [["Glucose", "Hypoglycaemia is common"], ["LFT, GGT, MCV, platelets, INR", "Liver disease, heavy use"], ["Electrolytes, magnesium, phosphate", "Low K, Mg, PO₄ (refeeding)"], ["Lipase", "Abdominal pain"], ["CT head", "Head injury, first fit, focal signs or unexplained confusion"], ["Hepatitis B and C serology", "Coexisting liver disease"]])}
` },

{ id: "staging", title: "Screening and withdrawal tools", html: `
<h3>AUDIT</h3><div class="calc" data-calc="audit"></div>
<h3>CIWA-Ar</h3><div class="calc" data-calc="ciwa"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Brief intervention (all hazardous and harmful drinkers)</h3>
<ul><li><b>5As</b> for those ready to change: Ask, Advise, Assess readiness, Assist (plan, goals, coping), Arrange follow-up. <b>5Rs</b> for those not ready: Relevance, Risks, Rewards, Roadblocks, Repetition (STG Table 10.3).</li>
<li>Give personal feedback (liver tests, BP, injuries), clear advice, and a menu of options; respect autonomy; involve family if the patient agrees.</li></ul>
<h3>B. Detoxification</h3>
<ul><li>Outpatient detox only if mild, no past fits or DTs, a sober supporter at home, and review every 2–3 days (STG). Otherwise admit.</li>
<li>${dr("diazepam")}: 15 mg TDS × 2 days, 10 mg TDS × 2, 5 mg TDS × 2, 5 mg at night × 2 (STG). Or symptom-triggered 10–20 mg when CIWA-Ar is 10 or more. Severe agitation or DTs: 5–10 mg IV slowly, repeat every 30 minutes as needed with monitoring.</li>
<li>Liver failure or elderly: lorazepam (NRH) or smaller diazepam doses; avoid over-sedation.</li>
<li>Withdrawal seizure: diazepam; no long-term antiepileptic needed if purely withdrawal-related. Avoid phenytoin.</li>
<li>Hallucinations or agitation not settling: haloperidol 2–5 mg as an add-on (not alone, as it lowers seizure threshold).</li></ul>
<h3>C. Thiamine and nutrition</h3>
<ul><li>${dr("thiamine")} 100 mg IV stat before glucose (STG), then 75 mg orally 2–3 times daily for up to 3 months. Suspected Wernicke's: 500 mg IV 8-hourly for 3–5 days, then 250 mg daily.</li>
<li>Replace potassium, magnesium and phosphate; multivitamins; feed early.</li></ul>
<h3>D. Staying well</h3>
<ul><li>Psychoeducation, relapse-prevention skills (triggers, urges, alternatives), family involvement, AA groups, and referral through PEMA to rehabilitation (STG).</li>
<li>${dr("disulfiram")} 250 mg daily for motivated, abstinent patients with a supervising family member, no heart disease or psychosis.</li>
<li>Treat coexisting depression, anxiety and liver disease (see <a href="#/d/cirrhosis-adult">Cirrhosis</a>).</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("diazepam"), "STG 8-day taper; or 10–20 mg by CIWA-Ar", "Long-acting; reduce in liver failure"],
[dr("thiamine"), "100 mg IV stat, then 75 mg PO 2–3/day; Wernicke's 500 mg IV 8-hourly", "Before glucose"],
[dr("disulfiram"), "500 mg daily 1–2 weeks, then 250 mg daily", "Supervised; no alcohol for 24 h before"],
[dr("amitriptyline"), "25 mg at night, 1–2 weeks (STG)", "Persistent insomnia only"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> no safe level of alcohol (fetal alcohol spectrum disorder). Withdrawal in pregnancy: admit; benzodiazepines are still used for the shortest time.</li><li><b>Older adults:</b> lower tolerance, falls, interactions; lower benzodiazepine doses.</li><li><b>Adolescents:</b> ask privately; brief intervention works; look for family drinking and mental health problems.</li><li><b>Liver disease:</b> see the cirrhosis chapter; lorazepam or oxazepam rather than diazepam.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Family brings him 'to be locked up'", "Talk with the patient; explain voluntary treatment and options", "Coercion rarely works"], ["Detox requested during a festival", "Plan a date with support; brief intervention now", "Timing and support matter"], ["Withdrawal fit in the ward", "Diazepam, look for head injury and hypoglycaemia", "Other causes coexist"], ["Patient relapses after rehab", "Normalise; restart the plan", "Relapse is part of recovery"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Withdrawal seizures, DTs (mortality up to 5% if untreated), Wernicke–Korsakoff syndrome, alcohol-related liver disease and cirrhosis, pancreatitis, GI bleeding, cardiomyopathy, atrial fibrillation, cancers (mouth, oesophagus, liver, breast), injuries, depression and suicide, family violence. Stopping drinking improves liver disease even after cirrhosis has developed.</p>` },

{ id: "followup", title: "Follow-up", html: `
<p>Review weekly during and after detox, then monthly; follow up for relapse prevention for 1–2 years (STG). Repeat LFT and AUDIT to show progress.</p>
${box("green", "Advice to give", `<ul><li>Never stop heavy drinking suddenly on your own: get medical help.</li><li>Avoid alcohol completely in pregnancy, with liver disease, heart disease, hypertension, diabetes, depression or psychosis, and before driving or using machinery (STG).</li><li>Join a support group; tell family how they can help.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Shaking, confusion, seeing things, a fit</li><li>Vomiting blood, black stools, yellow eyes</li><li>Thoughts of harming yourself</li></ul>`)}
` },

{ id: "images", title: "Images", html: `<p>No image is needed for this chapter. For the physical consequences, see <a href="#/d/cirrhosis-adult">Cirrhosis</a> and <a href="#/d/ugib-adult">Upper GI bleeding</a>.</p>` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Alcohol in the clinic and ward", [F.s("Screen with AUDIT"), F.a, F.d("Score?"), F.a, F.b([["Under 8", F.ok("Reinforce")], ["8–19", F.s("Brief intervention; review")], ["20+", F.e("Assess dependence; plan detox; refer")]]), F.a, F.s("Detox: diazepam + thiamine; treat complications; relapse prevention; PEMA/AA")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Glucose before thiamine", "Wernicke's", "Thiamine first"], ["Under-treating withdrawal", "Fits, DTs", "Use CIWA-Ar or full taper"], ["Not asking about alcohol", "Missed chance", "Screen every adult"], ["Judgemental tone", "Patient disengages", "Feedback, empathy, options"], ["Long-term benzodiazepine prescriptions", "New dependence", "Stop by day 8–10"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "When do withdrawal seizures and DTs typically occur?", "Seizures 12–48 hours, delirium tremens 48–72 hours after the last drink.")}
${qa("Intern/MO", "Bhutan STG diazepam detox schedule?", "15 mg TDS for 2 days, 10 mg TDS for 2 days, 5 mg TDS for 2 days, then 5 mg at night for 2 days.")}
${qa("Specialist", "Classic triad of Wernicke's encephalopathy?", "Confusion, ataxia and ophthalmoplegia (nystagmus, gaze palsy); often incomplete, so treat on suspicion.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.2.2 Alcohol use disorder (Table 10.2 withdrawal timeline, Table 10.3 brief intervention); NEMF 2022; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Saunders JB, Aasland OG, Babor TF, de la Fuente JR, Grant M. Development of the Alcohol Use Disorders Identification Test (AUDIT). Addiction 1993;88:791–804. <a href="https://doi.org/10.1111/j.1360-0443.1993.tb02093.x" target="_blank" rel="noopener">doi:10.1111/j.1360-0443.1993.tb02093.x</a></li>
<li id="ref-3">Sullivan JT, Sykora K, Schneiderman J, Naranjo CA, Sellers EM. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict 1989;84:1353–1357. <a href="https://doi.org/10.1111/j.1360-0443.1989.tb00737.x" target="_blank" rel="noopener">doi:10.1111/j.1360-0443.1989.tb00737.x</a></li>
<li id="ref-4">National Institute for Health and Care Excellence. Alcohol-use disorders: diagnosis and management of physical complications (CG100, 2010, updated 2017) and harmful drinking and dependence (CG115, 2011). <a href="https://www.nice.org.uk/guidance/cg115" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-5">World Health Organization. mhGAP Intervention Guide, version 2.0 (and 2023 guideline update). Geneva: WHO.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §10.2.2", "<span class='pass'>Used</span>", "Doses and tables transcribed"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Naltrexone, acamprosate", "<span class='flag'>Not on NEML 2025</span>", "Disulfiram only"]], "qc")}` }
]
});
