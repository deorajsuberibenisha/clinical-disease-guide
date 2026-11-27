/* Substance use disorders other than alcohol — opioids (SP+, heroin, codeine syrups, tramadol), cannabis, sedatives, stimulants, inhalants,
   tobacco and areca nut (adults). Batch E-7, 27 Nov 2026.
   Sources read directly: Bhutan STG 2024 §10.2.1 Substance use disorders (drugs used in Bhutan; table 10.1 intoxication and withdrawal signs;
   MERIT / CAGE-AID screening; supportive and symptomatic treatment: amitriptyline 25–100 mg HS 1–2 weeks, ibuprofen 400 mg PRN, dicyclomine 10 mg PRN,
   metoclopramide 10 mg PRN, ORS; brief intervention; family support) and §10.3 emergencies; NEML 2025 §22.4 (buprenorphine 2 mg at RRH with a
   psychiatrist; disulfiram) — no methadone, clonidine, nicotine replacement or varenicline on NEML. The Bhutanese, 9 May 2026: OST at JDWNRH / PEMA
   since Aug 2016 (buprenorphine, about 37 people, detox about 1 week, rehabilitation 3–5 months; PEMA helpline 1098). FDA labels via the drug
   monographs (buprenorphine, naloxone, methadone, nicotine, varenicline). WHO tobacco cessation guideline release 2 Jul 2024 (via news release;
   full PDF not read). Wesson & Ling 2003 COWS (DOI verified). Not read: WHO 2009 opioid dependence guideline, WHO 2014 overdose guideline,
   STG annex MERIT tool, NICE drug misuse guidance (marked). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "substance-use-adult",
title: "Drug use disorders — adults",
subtitle: "SP+, heroin ('brown sugar'), codeine syrups, cannabis, sleeping tablets, inhalants, tobacco and doma: recognise intoxication and withdrawal, treat withdrawal symptoms, give naloxone for overdose, use brief intervention, and link to OST and The PEMA",
age: "Adults", specs: ["psych", "medicine", "emerg"],
keywords: ["substance use disorder", "drug abuse", "drug addiction", "opioid use disorder", "opioid withdrawal", "opioid overdose", "SP+", "Spasmo Proxyvon", "tramadol", "heroin", "brown sugar", "codeine syrup", "Corex", "Phensedyl", "cannabis", "marijuana", "nitrazepam", "N10", "inhalants", "glue sniffing", "stimulants", "methamphetamine", "tobacco", "smoking cessation", "areca nut", "doma", "buprenorphine", "OST", "naloxone", "COWS", "PEMA", "brief intervention"],
related: ["alcohol-adult", "poisoning-adult", "depression-adult", "anxiety-adult", "psychosis-adult", "hiv-adult", "hepatitis-adult", "copd-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Substance use disorder is a chronic, relapsing illness of compulsive use despite harm — a brain disorder and a mental illness, not a moral failing ${r(1)}. In Bhutan the commonest drugs after alcohol are pharmaceutical opioids (SP+, codeine syrups), heroin, cannabis, sedatives and inhalants, with tobacco and areca nut very widely used ${r(1)}.</p>
<div class="glance">
<div><h4>Screen</h4><p>Ask everyone; MERIT or CAGE-AID screening tools (STG) ${r(1)}.</p></div>
<div><h4>Overdose</h4><p>Pinpoint pupils, slow breathing, drowsiness → airway, oxygen, <b>naloxone 0.4 mg IV/IM</b>, repeat every 2–3 minutes ${r(4)}.</p></div>
<div><h4>Withdrawal</h4><p>Opioid withdrawal is miserable but rarely dangerous: symptomatic treatment (STG) ${r(1)}; buprenorphine through the OST programme ${r(2)}. Sedative withdrawal can cause <b>seizures</b> ${r(1)}.</p></div>
<div><h4>Help</h4><p>Brief intervention, family support, referral to JDWNRH Psychiatry / The PEMA Centre; helpline <b>1098</b> ${r(1, 2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Opioid substitution therapy (OST) with supervised sublingual buprenorphine started at JDWNRH in August 2016; it is free and confidential, about 37 people were enrolled in May 2026, and people can come voluntarily to the Psychiatry Department or The PEMA Centre without a police referral. Pathway: detoxification (about 1 week), rehabilitation (3–5 months, at home or hospital-based), then recovery and aftercare. OST is currently only in Thimphu ${r(2)}. Buprenorphine 2 mg is on the NEML for regional referral hospitals with a psychiatrist; methadone, clonidine, nicotine replacement and varenicline are <b>not</b> listed ${r(3)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Group", "Examples used in Bhutan (STG)"], [
["Opioids", "Tramadol (SP+), heroin ('brown sugar'), dextropropoxyphene (SP / Spasmo-Proxyvon, Relipin), codeine tablets and syrups (Corex, Phensedyl), morphine, pethidine " + r(1)],
["Cannabinoids", "Marijuana, hashish — cannabis grows wild " + r(1) + " " + LB.exp()],
["Stimulants", "Amphetamine, methamphetamine (Ecstasy, Ice, Yaba), ephedrine in cough products, methylphenidate " + r(1)],
["Sedatives and hypnotics", "Nitrazepam (N10, Nitrosun), diazepam " + r(1)],
["Inhalants", "Glue, solvents, petrol " + r(1) + " " + LB.exp()],
["Nicotine and arecoline", "Tobacco (smoked and chewed); areca nut and betel (doma) " + r(1)],
["Key terms", "Intoxication (changes during or soon after use); tolerance (need more for the same effect); withdrawal (symptoms on stopping or cutting down after prolonged use) " + r(1)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("From use to disorder", [F.s("Drug releases dopamine in the reward pathway"), F.a, F.s("Repeated use: tolerance — more needed"), F.a, F.s("Stopping causes withdrawal → use to avoid withdrawal"), F.a, F.s("Craving, loss of control, life narrows around the drug"), F.a, F.e("Harm: overdose, HIV/hepatitis C from injecting, debt, crime, family breakdown")])}
<p>Withdrawal symptoms are generally the opposite of the drug's effects: opioid withdrawal brings dilated pupils, runny nose, tears, yawning, gooseflesh, diarrhoea and aches; sedative withdrawal brings tremor, sweating, fast pulse and seizures ${r(1)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (FDA labels; WHO)", "This guide"], [
["Opioid withdrawal", "Symptomatic: amitriptyline at night, ibuprofen, dicyclomine, metoclopramide, ORS", "Buprenorphine or methadone (opioid agonist) is more effective; clonidine/lofexidine for symptoms", "Symptomatic care everywhere; buprenorphine via OST/psychiatry where available " + r(1, 2) + " " + LB.int()],
["Long-term opioid treatment", "Refer to SUD programme / rehabilitation", "Agonist maintenance (methadone 80–120 mg/day or buprenorphine about 16 mg/day) reduces overdose and HIV", "Refer to OST; don't force abstinence-only " + r(4) + " " + LB.int()],
["Tobacco", "Listed as a drug of abuse; no cessation medicines in the SUD section", "WHO 2024: varenicline, NRT, bupropion, cytisine plus behavioural support", "Brief advice for every tobacco user; medicines if obtainable " + r(5) + " " + LB.int()],
["Amitriptyline for withdrawal insomnia", "25–100 mg at night for 1–2 weeks", "Not standard internationally " + LB.exp(), "Use the lower doses; overdose risk if mixing with other drugs " + LB.int()]
])}` },
{ id: "presentation", title: "Intoxication and withdrawal (STG table 10.1)", html: `${tbl(["Substance", "Intoxication", "Withdrawal"], [
["Opioids", "Euphoria then apathy, drowsiness or coma, slurred speech, <b>pinpoint pupils</b> (dilated if severe hypoxia), impaired attention", "Dysphoria, nausea, vomiting, muscle aches, tears and runny nose, dilated pupils, gooseflesh, sweating, diarrhoea, yawning, fever, insomnia " + r(1)],
["Cannabis", "Euphoria, anxiety, slowed time, poor coordination and judgement, red eyes, hunger, dry mouth, fast pulse", "Irritability, anxiety, sleep problems, vivid dreams, poor appetite, restlessness, low mood, tremor, sweating " + r(1)],
["Sedatives", "Slurred speech, incoordination, unsteady gait, nystagmus, stupor or coma", "Sweating, pulse over 100, tremor, insomnia, nausea, hallucinations, agitation, anxiety, <b>seizures</b> " + r(1)],
["Inhalants", "Dizziness, nystagmus, slurred speech, unsteady gait, lethargy, tremor, weakness, blurred vision, stupor", "— " + r(1)],
["Tobacco", "—", "Irritability, anxiety, poor concentration, increased appetite, restlessness, low mood, insomnia " + r(1)],
["Stimulants", "Fast or slow pulse, dilated pupils, BP change, sweating, agitation, chest pain, arrhythmia, confusion, seizures", "Low mood, fatigue, vivid dreams, sleep change, increased appetite " + r(1)]
])}
<h3>The typical patient</h3>
<p>A 27-year-old man from Phuentsholing comes with his mother. He has taken SP+ capsules daily for two years and now heroin; he stopped yesterday and has aches, diarrhoea, a running nose, yawning and gooseflesh. COWS is 14 (moderate). Treat the symptoms (ibuprofen, dicyclomine, metoclopramide, ORS, a little amitriptyline at night), give brief intervention, test for HIV and hepatitis B/C if he has injected, warn that tolerance falls quickly after stopping (overdose risk on relapse), and refer to JDWNRH Psychiatry or The PEMA for OST ${r(1, 2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Situation", "Think of"], [
["Coma with small pupils", "Opioids; also organophosphate poisoning (secretions, bradycardia), pontine stroke " + LB.exp()],
["Agitation, fever, dilated pupils", "Stimulants, anticholinergics, sedative or alcohol withdrawal, sepsis, thyrotoxicosis " + LB.exp()],
["Confusion in a drug user", "Delirium — hypoglycaemia, head injury, infection, mixed overdose " + r(6)],
["Psychosis", "Cannabis or stimulant psychosis versus primary psychotic or bipolar illness " + LB.exp()],
["'Withdrawal' with seizures", "Sedative or alcohol withdrawal; tramadol itself lowers the seizure threshold " + LB.exp()]
])}` },
{ id: "invest", title: "Assessment and investigations", html: `<ul>
<li>Vital signs and general examination; if unstable, follow the poisoning and overdose pathway ${r(1)}.</li>
<li>Screening: MERIT tool and/or CAGE-AID (STG annex) ${r(1)}; AUDIT for alcohol ${LB.int()}.</li>
<li>History: each substance, amount, route (injecting?), last use, past withdrawals and seizures, overdoses ${LB.exp()}.</li>
<li>Assess motivation, personality, social, interpersonal and occupational function; family and community support ${r(1)}.</li>
<li>Mental state: depression, anxiety, psychosis, suicide risk ${LB.exp()}.</li>
<li>Injecting: HIV, hepatitis B and C, abscesses, endocarditis ${r(2)} ${LB.exp()}.</li>
<li>Urine drug screen where available; glucose; LFTs ${LB.exp()}.</li>
</ul>` },
{ id: "staging", title: "Opioid withdrawal severity (COWS)", html: `
<div class="calc" data-calc="cows"></div>
<p>COWS scores 11 signs observed over a few minutes: 5–12 mild, 13–24 moderate, 25–36 moderately severe, more than 36 severe ${r(7)}. Buprenorphine should be started only when withdrawal is clearly present and at least 4 hours after the last short-acting opioid — otherwise it can precipitate withdrawal ${r(4)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Acute opioid overdose</h3>
<ul>
<li>Airway, breathing (bag-mask ventilation), oxygen ${LB.exp()}.</li>
<li><b>Naloxone 0.4–2 mg IV</b>, repeated every 2–3 minutes; IM or SC if no IV access; if no response after 10 mg, question the diagnosis ${r(4)}.</li>
<li>Naloxone wears off before many opioids — observe and repeat; tramadol overdose may also cause seizures ${r(4)} ${LB.exp()}.</li>
</ul>
<h3>2. Withdrawal — supportive (STG)</h3>
${tbl(["Symptom", "Treatment"], [
["Sleep or mood disturbance", "Amitriptyline 25–100 mg at night for 1–2 weeks " + r(1)],
["Aches and pains", "Ibuprofen 400 mg as needed, up to three times daily, for 3–5 days " + r(1)],
["Abdominal cramps", "Dicyclomine 10 mg as needed, up to three times daily, for 3–5 days " + r(1)],
["Vomiting", "Metoclopramide 10 mg as needed, up to three times daily, for 3–5 days " + r(1)],
["Loose stools", "ORS as tolerated " + r(1)],
["Seizures (sedative withdrawal)", "Manage seizures; sedative withdrawal needs a supervised benzodiazepine taper — refer " + r(1) + " " + LB.exp()]
])}
<p>Most patients can be managed as outpatients; some need admission and monitoring ${r(1)}.</p>
<h3>3. Opioid agonist treatment (OST)</h3>
<ul>
<li><b>Buprenorphine</b> (sublingual, supervised): first dose only when withdrawal is clear; label studies used 8 mg on day 1 and 16 mg on day 2; maintenance usually 4–24 mg once daily (target about 16 mg) ${r(4)}. In Bhutan, prescribed only by the OST team or a psychiatrist ${r(2, 3)}.</li>
<li>Methadone is used in other countries (stable at 80–120 mg/day) but is not available on the NEML ${r(3, 4)}.</li>
</ul>
<h3>4. Psychosocial treatment (everyone)</h3>
<ul>
<li>Assess motivation; family and community support; brief intervention ${r(1)}.</li>
<li>Brief intervention: give feedback on harms, stress personal responsibility, give clear advice, offer a menu of options, be empathic, support self-efficacy ${LB.exp("FRAMES — STG TEXT NOT FULLY LEGIBLE")}.</li>
<li>Refer to the SUD programme, The PEMA or rehabilitation; follow up 1–2 years ${r(1, 2)}.</li>
</ul>
<h3>5. Tobacco and areca nut</h3>
<ul>
<li>Ask every patient; brief advice to quit (even 30 seconds to 3 minutes helps) ${r(5)}.</li>
<li>WHO 2024 recommends varenicline, nicotine replacement, bupropion or cytisine with behavioural support ${r(5)} — none is on the NEML ${r(3)}.</li>
<li>Varenicline: 0.5 mg daily days 1–3, 0.5 mg twice daily days 4–7, then 1 mg twice daily for 12 weeks ${r(4)}. Nicotine patch: over 10 cigarettes a day 21 mg for 6 weeks, then 14 mg and 7 mg for 2 weeks each ${r(4)}.</li>
<li>Areca nut and betel chewing: advise stopping — oral cancer risk; examine the mouth ${LB.exp()}.</li>
</ul>
<h3>6. Cannabis, stimulants, inhalants</h3>
<p>No specific medicine; treat agitation (diazepam), psychosis (short antipsychotic course) and withdrawal symptoms; psychosocial care ${r(1, 6)} ${LB.exp()}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("naloxone", "Naloxone")} 0.4 mg/mL injection — NEML ${r(3)}.</li>
<li>${D("buprenorphine", "Buprenorphine")} 2 mg tablet — NEML (RRH with psychiatrist) ${r(3)}.</li>
<li>${D("amitriptyline", "Amitriptyline")}, ${D("ibuprofen", "ibuprofen")}, ${D("dicycloverine", "dicyclomine (dicycloverine)")}, ${D("metoclopramide", "metoclopramide")} — NEML ${r(3)}.</li>
<li>${D("diazepam", "Diazepam")} — NEML ${r(3)}.</li>
<li>${D("disulfiram", "Disulfiram")} 250 mg — NEML (alcohol) ${r(3)}.</li>
<li>${D("methadone", "Methadone")}, ${D("clonidine", "clonidine")}, ${D("naltrexone", "naltrexone")}, ${D("nicotine", "nicotine")}, ${D("varenicline", "varenicline")}, ${D("bupropion", "bupropion")} — not on NEML ${r(3)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Young people", "Often brought by parents; involve the family; school and peer support " + r(2)],
["Pregnancy", "Do not force abrupt opioid withdrawal; refer — buprenorphine continuation is usual practice " + LB.exp("NOT READ")],
["People who inject drugs", "HIV, hepatitis B/C testing and vaccination; clean needles; abscess care " + LB.exp()],
["Recent release from prison or rehabilitation", "Lost tolerance — high overdose risk if they use again " + LB.exp()],
["Coexisting mental illness", "Treat both together " + LB.exp()],
["Legal issues", "OST participants can show that a positive urine test is from treatment; legal implications to be clarified by authorities " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Unconscious 20-year-old, RR 6, pinpoint pupils", "Bag-mask ventilate; naloxone 0.4 mg IV, repeat; observe for re-sedation " + r(4)],
["Daily N10 user for a year wants to stop at once", "Risk of seizures — do not stop abruptly; refer for a supervised taper " + r(1) + " " + LB.exp()],
["Cannabis user with new paranoia", "Assess for psychosis; stop cannabis; short antipsychotic if needed; refer " + LB.exp()],
["Smoker with COPD", "Brief advice at every visit; medicines if obtainable " + r(5)],
["Heroin user asks for help but fears the police", "Voluntary, confidential OST at JDWNRH / PEMA — no police referral needed " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Overdose and death, especially mixing opioids with sedatives or alcohol ${LB.exp()}.</li>
<li>HIV, hepatitis C, abscesses from injecting ${r(2)}.</li>
<li>Seizures (sedative withdrawal, tramadol, stimulants) ${r(1)}.</li>
<li>Psychosis, depression, suicide ${LB.exp()}.</li>
<li>Debt, crime, dealing to finance use ${r(2)}.</li>
<li>Tobacco and areca: cancers, COPD, heart disease ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Review after 1–2 weeks; follow up for 1–2 years (STG) ${r(1)}.</li>
<li>Refer: SUD programme, rehabilitation, The PEMA, OST ${r(1, 2)}.</li>
<li>Relapse is common and is not failure — keep the door open ${LB.exp()}.</li>
<li>The PEMA helpline <b>1098</b>, email helpline@pema.gov.bt, call or text 17123239 ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Patient using drugs", [F.d("Overdose? (RR < 10, pinpoint pupils, coma)"), F.a, F.b([["Yes", F.e("Airway, ventilate, naloxone 0.4 mg, repeat")], ["No", F.d("Withdrawal?")]]), F.a, F.b([["Opioid", F.s("COWS; symptomatic care; refer for buprenorphine")], ["Sedative/alcohol", F.e("Seizure risk — supervised benzodiazepine taper")], ["None", F.s("Screen (MERIT/CAGE-AID), brief intervention")]]), F.a, F.ok("Family support, PEMA / OST referral, follow-up 1–2 years")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Single naloxone dose then discharge", "Re-sedation as naloxone wears off", "Observe; repeat doses"],
["Buprenorphine too early", "Precipitated withdrawal", "Wait for clear withdrawal (COWS) and 4 h after last short-acting opioid " + r(4)],
["Abrupt stop of N10 or diazepam", "Seizures", "Taper under supervision"],
["Moral lectures", "Patients stop attending", "Brief intervention; treat as illness " + r(1)],
["Ignoring tobacco", "The biggest killer of all", "Ask and advise every visit " + r(5)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is SP+?", "Spasmo-Proxyvon Plus — a tramadol-containing capsule widely misused as an opioid in Bhutan.")}
${qa("Intern/MO", "Pupils in opioid intoxication and withdrawal?", "Constricted in intoxication (may dilate with severe hypoxia); dilated in withdrawal.")}
${qa("Specialist", "When can buprenorphine be started?", "When moderate withdrawal is clearly present and at least 4 hours after the last short-acting opioid.")}
${qa("Specialist", "Which withdrawal syndromes can cause seizures?", "Sedative (benzodiazepine) and alcohol withdrawal.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.2.1 Substance use disorders (table 10.1).</li>
<li id="ref-2">Dema C. People unable to quit their dependence on drugs such as SP+ and heroin can seek free treatment at JDWNRH. The Bhutanese, 9 May 2026. <a href="https://thebhutanese.bt/?p=44266" target="_blank" rel="noopener">thebhutanese.bt</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025, §22.4 and related sections.</li>
<li id="ref-4">US Food and Drug Administration prescribing information for buprenorphine, methadone, naloxone, nicotine and varenicline, as summarised in this app's drug monographs.</li>
<li id="ref-5">World Health Organization. WHO releases first-ever clinical treatment guideline for tobacco cessation in adults. News release, 2 July 2024. <a href="https://www.who.int/news/item/02-07-2024-who-releases-first-ever-clinical-treatment-guideline-for-tobacco-cessation-in-adults" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-6">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.3 Psychiatric emergency.</li>
<li id="ref-7">Wesson DR, Ling W. The Clinical Opiate Withdrawal Scale (COWS). J Psychoactive Drugs 2003;35:253–9. <a href="https://doi.org/10.1080/02791072.2003.10400007" target="_blank" rel="noopener">doi:10.1080/02791072.2003.10400007</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §10.2.1", "<span class='pass'>Checked</span>", "Partly garbled in the PDF text; readable parts used"],
["OST in Bhutan", "<span class='pass'>Checked</span>", "The Bhutanese, May 2026"],
["NEML availability", "<span class='pass'>Checked</span>", "NEML 2025"],
["COWS items and bands", "<span class='pass'>Checked</span>", "Wesson & Ling 2003"],
["WHO opioid / overdose guidelines, MERIT tool, pregnancy", "<span class='unv'>Not read</span>", "Marked"],
["Images", "<span class='pass'>None</span>", "Not needed"]
], "qc")}` }
]
});
})();
