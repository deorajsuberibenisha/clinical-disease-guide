/* Psychosis and the agitated patient. Thin-page upgrade Round 3, 27 Nov 2026 (id, agitation calculator and related links kept).
   Sources: Bhutan STG 2024 §10.2.7 Psychotic disorders and §10.3 Psychiatric emergency (read from _work/stg-full.txt: acute/brief psychosis < 1 month,
   secondary causes incl. substances, steroids, ATT; schizophrenia ≥ 1 month symptoms, ≥ 6 months impairment; risperidone start 2–6 mg/day in 3 doses,
   increase 2 mg every 3 days to max 12 mg/day; and/or chlorpromazine 100–300 mg HS; haloperidol 5–10 mg IM PRN or chlorpromazine 100 mg IM PRN; diazepam
   5–10 mg PRN 2–3 days; duration 1st episode ≥ 1 year, 2–3 episodes ≥ 5 years; refer first episode, risk, comorbidity, no improvement; emergency:
   haloperidol 10 mg IM, repeat after 1 h, max 3 doses/day; promethazine 25–50 mg IM; chlorpromazine 50–100 mg IM 6-hourly; diazepam 5–10 mg IV slowly;
   oral diazepam 10 mg / risperidone 2 mg 8-hourly; no haloperidol in alcohol dependence; de-escalation; peripartum psychosis = emergency; dystonia
   promethazine 25 mg IM or diazepam 10 mg IV, then trihexyphenidyl 2 mg; catatonia — refer);
   ICMR/DHR Standard Treatment Workflow Psychosis Oct 2019 (read: PHC risperidone 2 mg HS × 1 week then 3–4 mg HS + trihexyphenidyl 2 mg morning;
   review 2 weeks then every 1–2 months; risperidone 2–8 mg/day, THP 2–6 mg/day; referral criteria; stabilisation 6 months, maintenance ~2 years after
   first episode, indefinite after more; adequate trial 6–8 weeks; clozapine after 2 failed antipsychotics; depot if non-adherent; ECT indications);
   NICE CG178 and NG10, WHO mhGAP 2.0 (previous page version); NEML 2025 §22.1 (aripiprazole 10, chlorpromazine 100 tab + 25 mg/mL inj, fluphenazine
   decanoate 25 mg/mL, haloperidol 5 mg/mL inj, olanzapine 10, quetiapine 50/300, risperidone 2; trihexyphenidyl 2; promethazine 25 mg/mL; lorazepam 1;
   clozapine NOT listed). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "psychosis-adult",
title: "Psychosis & the Agitated Patient",
subtitle: "Rule out medical and substance causes, keep everyone safe with de-escalation first, use the lowest effective antipsychotic dose, and work with the family for recovery",
age: "Adolescents & adults", specs: ["psych", "medicine", "emerg"],
keywords: ["psychosis", "schizophrenia", "acute psychosis", "brief psychotic disorder", "acute agitation", "rapid tranquillisation", "haloperidol", "risperidone", "olanzapine", "chlorpromazine", "fluphenazine depot", "clozapine", "delusions", "hallucinations", "catatonia", "postpartum psychosis", "peripartum psychosis", "dystonia", "neuroleptic malignant syndrome", "cannabis psychosis"],
related: ["depression-adult", "alcohol-adult", "poisoning-adult", "meningitis-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Psychosis — delusions, hallucinations and disorganised thinking or behaviour — is treatable, and early treatment improves the long-term outcome. It can be a sign of a physical illness or substance use, so look for those first ${r(1)}.</p>
<div class="glance">
<div><h4>Exclude</h4><p>Delirium, intoxication or withdrawal, head injury, infection, hypoglycaemia, medicines (steroids, anti-TB drugs) ${r(1)}.</p></div>
<div><h4>Calm</h4><p>De-escalation first; then oral medicine; IM ${dr("haloperidol")} with ${dr("promethazine")}, or diazepam, only if needed ${r(1)}.</p></div>
<div><h4>Treat</h4><p>${dr("risperidone")} — STG starts 2–6 mg/day; India's STW 2 mg at night, then 3–4 mg with trihexyphenidyl 2 mg ${r(1)} ${r(2)}.</p></div>
<div><h4>Continue</h4><p>At least 1 year after a first episode (STG; ~2 years in the India STW), 5 years or longer after 2–3 episodes ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §10.2.7 asks that every first episode be referred ${r(1)}. Psychiatric care is at JDWNRH (psychiatry ward) and district hospitals with a psychiatrist; counsellors and the national mental health programme support follow-up ${LB.loc()}. NEML 2025 lists risperidone, olanzapine, aripiprazole, quetiapine, chlorpromazine, haloperidol injection and fluphenazine decanoate; <b>clozapine is not on the NEML</b> ${r(5)}. Cannabis (which grows wild) and alcohol are common triggers ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Types of psychosis", html: `
${tbl(["Type", "Features", "Notes"], [
["Acute / brief psychotic episode", "Psychosis lasting less than a month", "May be primary or secondary " + r(1)],
["Secondary psychosis", "Substance intoxication or withdrawal; medicines (steroids, ATT); medical illness", "Treat the cause " + r(1)],
["Schizophrenia", "Psychotic symptoms ≥ 1 month with impaired functioning over 6 months; onset teens to late twenties", "Long-term treatment " + r(1)],
["Mood disorder with psychosis", "Mania or severe depression with psychotic features", "See " + P("depression-adult", "Depression") ],
["Peripartum psychosis", "Pregnancy or up to 1 year after birth", "Psychiatric emergency — refer at once " + r(1)],
["Delirium", "Confused, fluctuating, inattentive, medical cause", "Not primary psychosis — find and treat the medical cause"]
])}
` },
{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Psychosis", [F.s("Genetic and developmental vulnerability"), F.a, F.s("Triggers: cannabis, stimulants, alcohol withdrawal, stress, sleep loss, postpartum"), F.a, F.s("Excess dopamine signalling in mesolimbic pathways"), F.a, F.e("Delusions, hallucinations, disorganisation; negative symptoms and cognitive problems")])}
<p>Antipsychotics block dopamine D2 receptors — this treats positive symptoms but causes extrapyramidal side effects and raised prolactin ${LB.exp("STANDARD TEACHING")}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "India ICMR STW 2019", "NICE / WHO mhGAP", "This guide"], [
["Starting risperidone", "2–6 mg/day in 3 doses; +2 mg every 3 days; max 12 mg/day", "2 mg at night × 1 week, then 3–4 mg; range 2–8 mg/day", "Start low; lowest effective dose", "2 mg at night, increase by response (usual 4–6 mg) " + r(1) + r(2)],
["Anticholinergic", "For dystonia", "Trihexyphenidyl 2 mg every morning with risperidone", "Not routine; treat EPS when it occurs", "Only if EPS appears " + r(2) + r(3)],
["Duration after 1st episode", "At least 1 year", "About 2 years", "1–2 years", "1–2 years symptom-free " + r(1) + r(2)],
["IM sedation", "Haloperidol 10 mg (repeat after 1 h, max 3/day) ± promethazine; diazepam IV", "IV sedation in secondary care", "Haloperidol + promethazine, or lorazepam", "Haloperidol 5 mg + promethazine 25–50 mg IM (STG allows up to 10 mg) " + r(1) + r(3)],
["Alcohol-dependent patient", "Do NOT give haloperidol — diazepam", "—", "Benzodiazepine for withdrawal", "Diazepam " + r(1)],
["Treatment resistance", "Refer", "Clozapine after 2 adequate trials (6–8 weeks each)", "Clozapine", "Refer for clozapine (not on NEML) " + r(2) + r(5)]
])}
` },
{ id: "presentation", title: "Assessment", html: `
<h3>Core symptoms (STG)</h3>
<ul>
<li><b>Delusions:</b> firmly held false beliefs, not explained by culture or education — e.g. being poisoned, followed, controlled ${r(1)}.</li>
<li><b>Hallucinations:</b> perception without a stimulus — usually voices; talking or laughing to self ${r(1)} ${r(2)}.</li>
<li><b>Disorganised speech and behaviour;</b> poor self-care; social and occupational decline ${r(1)} ${r(2)}.</li>
<li><b>Negative symptoms:</b> flat expression, monotonous speech, loss of interest and motivation ${r(1)}.</li>
<li>Agitation, aggression, psychomotor changes ${r(1)}.</li>
</ul>
<h3>Cultural context</h3>
<p>Spirit possession and religious explanations are common in Bhutan. Respect the family's beliefs and work alongside traditional and religious healers, while making sure medical treatment is not delayed ${LB.loc()}.</p>
<h3>Always check</h3>
<p>Risk to self and others (suicide, violence), substance use, recent childbirth, medicines, fever, head injury, seizures, glucose; physical examination; capacity ${r(1)} ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 22-year-old man from Trashigang is brought by his family after 2 months of poor sleep, suspiciousness and talking to himself; he uses cannabis. No fever or confusion. <b>Likely first-episode psychosis</b>: physical exam and basic tests, risperidone 2 mg at night, psychoeducation, advice to stop cannabis, referral to the district psychiatrist, review in 1–2 weeks ${r(1)} ${r(2)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Action"], [
["Delirium", "Confused, fluctuating, inattentive; fever, hypoxia, drugs", "Treat the cause; low-dose haloperidol only if dangerous"],
["Alcohol withdrawal / DTs", "Tremor, sweating, seizures, hallucinations 1–3 days after stopping", "Diazepam, thiamine " + P("alcohol-adult", "Alcohol")],
["Intoxication (cannabis, stimulants)", "History, urine test", "Supportive; usually settles"],
["Encephalitis, meningitis, HIV, syphilis", "Fever, headache, seizures, focal signs", "LP, imaging " + P("meningitis-adult", "Meningitis")],
["Thyroid disease, hypoglycaemia, B12 deficiency", "Tests", "Treat"],
["Mania", "Elated or irritable mood, no sleep, pressured speech", "Mood stabiliser (specialist)"],
["Epilepsy (post-ictal or temporal lobe)", "Seizure history", "EEG, neurology"]
])}
` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li>Glucose, FBC, U&amp;E, LFT, thyroid function; HIV and syphilis; urine drug screen where available ${r(2)}.</li>
<li>Brain imaging and neurology review if signs suggest an organic cause, atypical onset or diagnostic confusion ${r(2)}.</li>
<li>Before and during antipsychotics: weight, waist, BP, glucose/HbA1c, lipids; ECG if cardiac risk or high doses ${LB.exp("NICE MONITORING")}.</li>
<li>Pregnancy test in women of reproductive age.</li>
</ul>
` },
{ id: "staging", title: "Agitation plan", html: `<div class="calc" data-calc="agitation"></div>` },
{ id: "manage", title: "Management", html: `
<h3>Acute agitation (STG §10.3)</h3>
<ol>
<li><b>Safety:</b> keep a safe distance and an exit; enough staff; call police if there is a weapon; inform the in-charge ${r(1)}.</li>
<li><b>De-escalation:</b> calm, empathetic approach with clear limits; listen; avoid arguing, aggressive postures and prolonged eye contact; reduce stimulation; address pain and other needs ${r(1)}.</li>
<li><b>Oral medicine first:</b> diazepam 10 mg, or risperidone 2 mg if psychotic, 8-hourly as needed ${r(1)}.</li>
<li><b>IM if needed:</b> ${dr("haloperidol")} 5–10 mg IM (repeat after 1 hour, maximum 3 doses a day) with or without ${dr("promethazine")} 25–50 mg IM; or ${dr("chlorpromazine")} 50–100 mg IM (watch for low BP); or diazepam 5–10 mg IV slowly ${r(1)}.</li>
<li><b>Alcohol dependence:</b> no haloperidol — use diazepam ${r(1)}.</li>
<li>Physical restraint only if chemical restraint fails and risk is high; monitor pulse, BP, breathing, temperature and consciousness after any injection ${r(1)} ${r(3)}.</li>
</ol>
<h3>Ongoing treatment</h3>
<ul>
<li><b>First choice:</b> ${dr("risperidone")}. India STW (PHC): 2 mg at night for 1 week, then 3–4 mg at night; adjust between 2 and 8 mg/day ${r(2)}. STG: 2–6 mg/day, increase by 2 mg every 3 days to a maximum of 12 mg/day ${r(1)}.</li>
<li>Alternatives (by side effects and cost): ${dr("olanzapine")} (sedating, weight gain), aripiprazole, quetiapine, ${dr("chlorpromazine")} 100–300 mg at night ${r(1)} ${r(2)} ${r(5)}.</li>
<li>Give each antipsychotic an adequate trial of 6–8 weeks at an adequate dose before changing ${r(2)}.</li>
<li>Poor adherence: depot <a href="#/fdb/fluphenazine">fluphenazine decanoate</a> ${LB.exp("DOSE: 12.5–25 MG EVERY 2–4 WEEKS")} ${r(2)} ${r(5)}.</li>
<li>Resistant to 2 antipsychotics: look for medical or neurological causes and adherence problems, then refer for clozapine ${r(2)}.</li>
<li>Short-term ${dr("diazepam", "diazepam")} 5–10 mg for 2–3 days for sleep and restlessness ${r(1)}.</li>
</ul>
<h3>Psychosocial care</h3>
<p>Psychological first aid, psychoeducation (it is an illness, it is treatable, side effects), family support and reducing high expressed emotion, regular follow-up, gradual return to work or school, substance-use help, vocational rehabilitation and disability benefits where needed ${r(1)} ${r(2)}.</p>
<h3>Electroconvulsive therapy (specialist)</h3>
<p>Consider for serious suicide risk, catatonia not responding to lorazepam, refusal of food or fluids, severe aggression, or clozapine-resistant illness ${r(2)}.</p>
<h3>How long</h3>
<p>Stabilisation: same dose for 6 months; then reduce to the lowest effective dose. First episode: at least 1 year (STG) to about 2 years (India STW); 2–3 episodes: at least 5 years; repeated episodes: indefinitely ${r(1)} ${r(2)}.</p>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes", "NEML 2025"], [
[dr("risperidone"), "2 mg at night → 3–4 mg (range 2–8; STG max 12 mg/day) " + r(1) + r(2), "EPS, prolactin, weight", "2 mg " + r(5)],
[dr("olanzapine"), "5–10 mg daily " + LB.exp("DOSE"), "Weight gain, diabetes", "10 mg " + r(5)],
[dr("chlorpromazine"), "100–300 mg at night (oral); 50–100 mg IM " + r(1), "Sedation, low BP", "100 mg tab; 25 mg/mL inj " + r(5)],
[dr("haloperidol"), "5–10 mg IM; repeat after 1 h; max 3 doses/day " + r(1), "Dystonia; not in alcohol dependence", "5 mg/mL inj " + r(5)],
[dr("promethazine"), "25–50 mg IM " + r(1), "With haloperidol; dystonia 25 mg IM", "25 mg/mL " + r(5)],
[dr("trihexyphenidyl"), "2 mg (range 2–6 mg/day) " + r(2), "EPS", "2 mg " + r(5)],
[dr("lorazepam"), "1–2 mg " + LB.exp("DOSE"), "Agitation; catatonia", "1 mg tab " + r(5)],
["Aripiprazole / quetiapine", "By specialist", "Less EPS / sedating", "10 mg; 50 and 300 mg " + r(5)]
])}
` },
{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Pregnancy and after birth:</b> psychosis or depression in pregnancy or up to 1 year after delivery is a psychiatric emergency — refer immediately ${r(1)}. Plan pregnancy with the psychiatrist; discuss obstetric risks and relapse risk ${r(2)}.</li>
<li><b>Adolescents:</b> involve the family and school; specialist care.</li>
<li><b>Older people:</b> new psychosis is often delirium or dementia — investigate; lower doses.</li>
<li><b>Substance use:</b> treat both; detoxification and brief interventions ${r(2)}.</li>
</ul>
` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Family wants only traditional healing", "Respect beliefs; explain the illness and medicine together; agree on follow-up " + LB.loc()],
["Refuses tablets at home", "Psychoeducation, involve family; consider depot " + r(2)],
["Catatonia (mute, immobile, not eating)", "Refer urgently; lorazepam; risk of dehydration, AKI, clots " + r(1) + r(2)],
["Patient with a weapon", "Secure the area, call police; do not approach alone " + r(1)],
["Fever, rigidity, confusion on antipsychotics", "Neuroleptic malignant syndrome — stop antipsychotic, cool, IV fluids, CK, refer " + LB.exp("STANDARD PRACTICE")]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Suicide, violence, self-neglect, homelessness, substance use; side effects — acute dystonia (can involve the larynx), akathisia, parkinsonism, tardive dyskinesia, weight gain, diabetes, raised prolactin, sexual dysfunction, neuroleptic malignant syndrome ${r(1)} ${r(2)}.</p>
${box("amber", "Acute dystonia (STG)", `<p>ABC first (laryngeal dystonia blocks the airway). Promethazine 25 mg IM or diazepam 10 mg IV slowly, then trihexyphenidyl 2 mg; usually settles in 10–30 minutes ${r(1)}.</p>`)}` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Review after 1 week (STG) or 2 weeks (India STW): symptoms and side effects — sleepiness, EPS, tiredness ${r(1)} ${r(2)}.</li><li>Then every 1–2 months: symptoms, functioning, EPS, weight, menstrual and sexual problems ${r(2)}.</li><li>Yearly metabolic check (weight, glucose, lipids, BP).</li><li>Relapse plan with the family: early warning signs, who to call.</li></ul>` },
{ id: "images", title: "Images", html: `<p>No clinical images are needed for this topic. The flowchart below summarises the first steps.</p>` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("New psychosis", [F.s("Safety; risk to self or others?"), F.a, F.d("Confused, febrile, intoxicated, withdrawing, postpartum?"), F.a, F.b([["Yes", F.e("Treat the cause / refer urgently")], ["No", F.s("Risperidone 2 mg at night; psychoeducation")]]), F.a, F.s("Review 1–2 weeks; adjust dose; refer first episode"), F.a, F.ok("Continue 1–2 years; family support; relapse plan")])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Missing delirium", "Untreated medical cause, death", "Examine, check glucose, oxygen, temperature " + r(1)],
["Haloperidol in alcohol withdrawal", "Seizures; masks withdrawal", "Diazepam " + r(1)],
["High doses too fast", "EPS, poor adherence", "Start low, go slow " + r(2)],
["Stopping after a few months", "Relapse", "1–2 years after first episode " + r(1) + r(2)],
["Ignoring the family", "Relapse, stigma", "Psychoeducation " + r(2)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Starting dose of risperidone at PHC (India STW)?", "2 mg at night for 1 week, then 3–4 mg at night.")}
${qa("Intern/MO", "Agitated patient with alcohol dependence — sedate with?", "Diazepam (oral or IV) — not haloperidol (STG).")}
${qa("Registrar", "Haloperidol IM limits in the STG?", "10 mg IM, repeat after 1 hour, maximum 3 doses a day.")}
${qa("Registrar", "How long to treat a first episode?", "At least 1 year symptom-free (STG); about 2 years (India STW).")}
${qa("Specialist", "When to consider clozapine?", "After 2 adequate antipsychotic trials (6–8 weeks each) fail, once medical causes and non-adherence are excluded.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.2.7 Psychotic disorders and §10.3 Psychiatric emergency.</li>
<li id="ref-2">Indian Council of Medical Research / Department of Health Research. Standard Treatment Workflow for the management of psychosis (ICD-10 F20–29). October 2019.</li>
<li id="ref-3">National Institute for Health and Care Excellence. Psychosis and schizophrenia in adults (CG178), 2014; Violence and aggression: short-term management (NG10), 2015.</li>
<li id="ref-4">World Health Organization. mhGAP Intervention Guide 2.0. Geneva: WHO; 2016.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025, §22.1.</li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["STG §10.2.7, §10.3", "<span class='pass'>Read</span>", "27 Nov 2026"], ["India STW 2019", "<span class='pass'>Read</span>", "Library PDF"], ["NEML 2025", "<span class='pass'>Checked</span>", "Clozapine not listed"], ["NICE / mhGAP", "<span class='unv'>Previous version</span>", "Not re-read"], ["Olanzapine, lorazepam, depot doses", "<span class='unv'>Marked</span>", "Not in the sources read"], ["Calculator", "<span class='pass'>Kept</span>", "agitation"]], "qc")}` }
]
});
})();
