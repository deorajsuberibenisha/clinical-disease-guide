/* Bipolar affective disorder — mania, hypomania, bipolar depression and long-term care (adults). Batch E-7, 27 Nov 2026.
   Sources read directly: Bhutan STG 2024 §10.2.4 Mood disorders (mania: risperidone 2–12 mg/day in 3 doses, chlorpromazine 100–300 mg HS,
   haloperidol 5–10 mg IM / chlorpromazine 100 mg IM for agitation, diazepam 5–10 mg PRN; avoid amitriptyline/fluoxetine in mania or bipolar;
   duration 1 year / 5 years / life-long; refer first episode) and §10.3 emergencies (haloperidol 10 mg IM max 3/day; dystonia: promethazine,
   trihexyphenidyl); NEML 2025 §22 (carbamazepine 200 mg is the only listed 'bipolar' medicine; NO lithium; valproate 200 mg and lamotrigine 50 mg in
   the antiepileptic list). NICE CG185 Bipolar disorder (2014, updated to 2025) — primary care, mania, bipolar depression, long-term, lithium and
   valproate use read in the browser 27 Nov 2026. FDA label doses via the drug monographs (risperidone, olanzapine, quetiapine, lithium).
   Not read: Equetro carbamazepine label, FDA HLA-B*1502 text, CANMAT/ISBD 2018, WHO mhGAP 2023 (marked). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "bipolar-adult",
title: "Bipolar disorder — adults",
subtitle: "Mania, hypomania and bipolar depression: ask every depressed patient about past 'highs', treat mania with an antipsychotic and no antidepressant, and plan long-term mood stabilisation — with lithium unavailable on the Bhutan NEML",
age: "Adults", specs: ["psych", "medicine", "emerg"],
keywords: ["bipolar disorder", "bipolar affective disorder", "BPAD", "manic depression", "mania", "hypomania", "mixed episode", "bipolar depression", "mood stabiliser", "lithium", "lithium toxicity", "carbamazepine", "valproate", "risperidone", "olanzapine", "quetiapine", "haloperidol", "antidepressant-induced mania", "postpartum psychosis", "relapse prevention"],
related: ["depression-adult", "psychosis-adult", "substance-use-adult", "alcohol-adult", "thyroid-adult", "ppd-preg", "epilepsy-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Bipolar disorder is a long-term illness of mood swings: episodes of mania (or milder hypomania) and episodes of depression, with normal mood in between. It is often first diagnosed as depression, and an antidepressant given alone can tip the person into mania. Good long-term treatment prevents relapses that destroy jobs, money and families.</p>
<div class="glance">
<div><h4>Ask</h4><p>Every patient with depression: any past period of overactivity, little sleep or reckless behaviour lasting 4 days or more? ${r(2)}</p></div>
<div><h4>Mania now</h4><p>Stop the antidepressant; give an antipsychotic — risperidone (STG) ${r(1, 2)}; IM haloperidol or chlorpromazine if severely agitated ${r(1)}.</p></div>
<div><h4>Never</h4><p>Amitriptyline or fluoxetine on its own for a person with bipolar disorder ${r(1)}.</p></div>
<div><h4>Long term</h4><p>1st episode: treat at least 1 year; 2–3 episodes: 5 years; more than 3: life-long ${r(1)}. Lithium is the most effective long-term drug ${r(2)} but is <b>not</b> on the NEML ${r(4)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§10.2.4) treats mania with risperidone 2–12 mg a day in three divided doses and/or chlorpromazine 100–300 mg at night, IM haloperidol 5–10 mg or chlorpromazine 100 mg for agitation or refusal, and short-term diazepam; and it warns in capitals not to prescribe amitriptyline to patients with mania or bipolar disorder ${r(1)}. The NEML 2025 lists <b>carbamazepine 200 mg</b> as its bipolar medicine and does not list lithium; sodium valproate 200 mg, lamotrigine 50 mg, olanzapine, quetiapine and aripiprazole are listed ${r(4)}. Patients started on lithium in India need a reliable supply and level monitoring — check with the referral hospital ${LB.loc()}. Refer every first episode ${r(1)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Bipolar I", "At least one manic episode (often with depressive episodes) " + LB.exp("DSM-5-TR — NOT READ")],
["Bipolar II", "Hypomania and major depression, no full mania " + LB.exp()],
["Mania", "Elevated or irritable mood with more energy, less need for sleep, talkativeness, flight of ideas, distractibility, more goal-directed activity, risky spending or sex " + r(1)],
["Hypomania", "Milder, shorter, without psychosis or hospital-level impairment " + LB.exp()],
["Mixed state", "Manic and depressive symptoms together — treated as mania, watch for depression " + r(2)],
["Course", "Chronic, relapsing and remitting; needs long-term treatment " + r(1, 2)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("A relapse", [F.s("Trigger: missed medicine, sleep loss, alcohol or drugs, stress, antidepressant, childbirth"), F.a, F.s("Early warning signs: less sleep, more talk, irritability, spending"), F.a, F.s("Mania: poor judgement, risky acts, psychosis, exhaustion"), F.a, F.e("Debt, violence, accidents, broken relationships; then often depression and suicide risk")])}
<p>Spotting early warning signs and acting fast (sleep, contacting the clinic, adjusting medicine) is the core of relapse prevention ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024 / NEML 2025", "NICE CG185", "This guide"], [
["Antipsychotic for mania", "Risperidone 2–12 mg/day in 3 doses; chlorpromazine 100–300 mg at night", "Haloperidol, olanzapine, quetiapine or risperidone", "Risperidone first in Bhutan; FDA usual range for mania is 1–6 mg/day — doses above 6 mg add side effects " + r(1, 3) + " " + LB.int()],
["Long-term first line", "Duration rules; no drug named; carbamazepine on NEML", "Lithium; then an antipsychotic; then valproate combinations", "Continue the antipsychotic that worked; carbamazepine or valproate (men, women not able to become pregnant) when a mood stabiliser is needed " + LB.int()],
["Valproate", "Listed (antiepileptic)", "Not for anyone under 55 unless 2 specialists agree; avoid in women able to have children", "Specialist decision only " + r(2)],
["Bipolar depression", "Refer to mania doses; no antidepressant alone", "Fluoxetine + olanzapine, or quetiapine; lamotrigine", "Quetiapine (NEML) or olanzapine + fluoxetine, specialist " + r(2)],
["Duration", "1 year / 5 years / life-long by episode count", "Discuss long-term treatment after each episode", "Follow the STG rule as a minimum " + r(1)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Phase", "Features"], [
["Mania", "Elated or irritable mood, decreased need for sleep, talkativeness, flight of ideas, short attention, increased activity, risky spending or sex " + r(1) + "; grandiose or religious delusions and hallucinations in severe mania " + LB.exp()],
["Bipolar depression", "Low mood, loss of interest, fatigue, sleep and appetite change, hopelessness, suicidal thoughts " + r(1)],
["Between episodes", "Often well; some have residual symptoms " + r(2)]
])}
<h3>The typical patient</h3>
<p>A 24-year-old student was treated for depression with fluoxetine 3 months ago. His family now brings him: he has hardly slept for a week, talks non-stop, has spent his savings on a motorbike and says he has been chosen to lead the country. He is irritable and threatening. Stop fluoxetine, offer oral risperidone; if he refuses and is dangerous, IM haloperidol (with promethazine) under the emergency protocol; check glucose, thyroid and drug use; refer to psychiatry — a first episode ${r(1, 2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Substance-induced mania", "Stimulants, cannabis, steroids, antidepressants, alcohol withdrawal — ask and test urine if available " + r(2) + " " + LB.exp()],
["Hyperthyroidism", "Weight loss, tremor, tachycardia — TSH " + LB.exp()],
["Schizophrenia / other psychosis", "No marked mood elevation; persistent psychosis " + LB.exp()],
["Delirium", "Fluctuating consciousness, disorientation, medical illness " + r(5)],
["Unipolar depression", "No history of highs — but ask the family too " + r(2)],
["Brain lesion, epilepsy, HIV, neurosyphilis", "Late first onset (over 50), neurological signs " + LB.exp()],
["Personality disorder, ADHD", "Long-standing instability without discrete episodes " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Mental state and risk (suicide, violence, exploitation, debt); collateral history from family ${r(2)}.</li>
<li>Do not use questionnaires in primary care to diagnose bipolar disorder ${r(2)}.</li>
<li>Glucose, CBC, TSH; pregnancy test in women; urine drug screen if available ${LB.exp()}.</li>
<li>Before antipsychotics: weight, pulse, BP, fasting glucose or HbA1c, lipids; ECG if cardiac risk or inpatient ${r(2)}.</li>
<li>Before lithium: weight, U&E with calcium, eGFR, thyroid function, CBC; ECG if cardiac risk ${r(2)}.</li>
<li>Before valproate or carbamazepine: weight, CBC, LFTs ${r(2)} ${LB.exp("CARBAMAZEPINE — NOT IN CG185")}.</li>
</ul>` },
{ id: "staging", title: "How severe — where to treat", html: `${tbl(["Situation", "Action"], [
["Suspected mania or severe depression, or danger to self or others", "Urgent specialist assessment " + r(2)],
["First episode", "Refer (STG) " + r(1)],
["Mild symptoms with good family support", "Start treatment; review after 2 weeks or as needed (STG) " + r(1)],
["Severe agitation or violence", "Psychiatric emergency protocol — de-escalation, then medication " + r(5)],
["Pregnancy or postpartum", "Urgent referral — perinatal psychiatric emergency " + r(5)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Acute mania or hypomania</h3>
<ul>
<li>Calm, low-stimulation setting; advise against major decisions until recovered; involve carers ${r(2)}.</li>
<li><b>Stop any antidepressant</b> given alone and give an antipsychotic ${r(2)}.</li>
</ul>
${tbl(["Drug", "Dose", "Source"], [
["Risperidone 2 mg (NEML)", "Bhutan STG: start 2–6 mg/day in 3 divided doses, increase by 2 mg every 3 days to a maximum of 12 mg/day, for 2–4 weeks " + r(1), "FDA mania: start 2–3 mg/day, range 1–6 mg/day " + r(3)],
["Chlorpromazine 100 mg (NEML)", "100–300 mg at night for 2–4 weeks, with or instead of risperidone " + r(1), "Sedating; postural hypotension"],
["Olanzapine 10 mg (NEML)", "10–15 mg once daily " + r(3), "Weight gain, diabetes"],
["Quetiapine 50/300 mg (NEML)", "50 mg twice daily day 1, rising by 100 mg/day to 200 mg twice daily on day 4; usual 400–800 mg/day " + r(3), "Sedation, hypotension"],
["Diazepam 5 mg (NEML)", "5–10 mg as needed for 2–3 days for poor sleep and restlessness " + r(1), "Short term"],
["Agitation, refusing oral medicine", "Haloperidol 5–10 mg IM as needed or chlorpromazine 100 mg IM " + r(1) + "; emergency protocol: haloperidol 10 mg IM, may repeat after 1 hour, max 3 doses a day; promethazine 25–50 mg IM as adjunct " + r(5), "Not haloperidol in alcohol dependence — use diazepam " + r(5)]
])}
<p>If the first antipsychotic fails at full dose or is not tolerated, change to another; then add a mood stabiliser (lithium where available, otherwise valproate under specialist rules) ${r(2)}. Do not use lamotrigine for mania ${r(2)}.</p>
<h3>2. Bipolar depression (specialist)</h3>
<ul>
<li>Fluoxetine combined with olanzapine, or quetiapine alone (NEML: 300 mg at night after titration) ${r(2, 3)}.</li>
<li>Alternatives: olanzapine alone or lamotrigine ${r(2)}.</li>
<li>Never an antidepressant alone ${r(1)}; limit tablet supplies when suicide risk is high ${r(2)}.</li>
<li>Psychological therapy adapted for bipolar disorder ${r(2)}.</li>
</ul>
<h3>3. Long-term treatment</h3>
${tbl(["Option", "Notes"], [
["Continue the drug that worked in the acute episode", "Often the antipsychotic " + r(2)],
["Lithium (not on NEML)", "Most effective long-term; target level 0.6–0.8 mmol/L (0.8–1.0 for a 6-month trial after relapse); levels 1 week after starting and after each change, every 3 months in year 1, then every 6 months; U&E, calcium, eGFR, TFT every 6 months " + r(2)],
["Carbamazepine (NEML)", "Used as a mood stabiliser in Bhutan; enzyme inducer — interacts with contraceptives and many drugs; check CBC, sodium and LFTs; HLA-B*1502 (common in South and East Asian people) raises SJS risk " + LB.exp("FDA LABEL — NOT READ HERE")],
["Valproate (NEML)", "Not for women or girls able to become pregnant; under 55: two specialists must agree; men: contraception " + r(2)],
["Duration (STG)", "1st episode at least 1 year; 2–3 episodes at least 5 years; more than 3 episodes life-long " + r(1)],
["Stopping", "Taper over at least 4 weeks (lithium preferably up to 3 months); watch for relapse for 2 years " + r(2)]
])}
<h3>4. Psychosocial care</h3>
<p>Psychoeducation for the person and family: early warning signs, sleep routine, avoiding alcohol and drugs, adherence, crisis plan; help with debts and work ${r(1, 2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("risperidone", "Risperidone")} 2 mg — NEML ${r(4)}.</li>
<li>${D("chlorpromazine", "Chlorpromazine")} 100 mg tablet, 25 mg/mL injection — NEML ${r(4)}.</li>
<li>${D("haloperidol", "Haloperidol")} 5 mg/mL injection — NEML ${r(4)}.</li>
<li>${D("olanzapine", "Olanzapine")} 10 mg; ${D("quetiapine", "quetiapine")} 50 and 300 mg; ${D("aripiprazole", "aripiprazole")} 10 mg — NEML ${r(4)}.</li>
<li>${D("carbamazepine", "Carbamazepine")} 200 mg — NEML (bipolar) ${r(4)}.</li>
<li>${D("valproic-acid", "Sodium valproate")} 200 mg; ${D("lamotrigine", "lamotrigine")} 50 mg — NEML (antiepileptics) ${r(4)}.</li>
<li>${D("lithium", "Lithium")} — not on NEML ${r(4)}.</li>
<li>${D("promethazine", "Promethazine")} injection and ${D("trihexyphenidyl", "trihexyphenidyl")} 2 mg — for acute dystonia ${r(5)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Women who could become pregnant", "Avoid valproate; carbamazepine reduces hormonal contraception; plan pregnancy with a psychiatrist " + r(2) + " " + LB.exp()],
["Pregnancy and postpartum", "Very high relapse risk after delivery; postpartum psychosis is an emergency — refer immediately " + r(5)],
["Older people", "Same range of treatments; lower doses; lithium levels every 3 months " + r(2)],
["Substance use", "Treat alongside; drugs and alcohol trigger relapse " + r(2)],
["Kidney disease", "Avoid or closely monitor lithium " + r(2)],
["Adolescents", "Refer to specialist services " + LB.loc()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Depressed woman, 30, says she had a week of no sleep and 'too many plans' last year", "Possible bipolar II — do not start an antidepressant alone; refer for specialist assessment " + r(2)],
["Known bipolar on risperidone presents with insomnia", "Do not give amitriptyline (STG); short diazepam; look for early relapse " + r(1)],
["On lithium from India, now vomiting and diarrhoea, coarse tremor, confusion", "Suspect lithium toxicity: stop lithium, urgent level and U&E, IV fluids, refer " + r(2) + " " + LB.exp()],
["Stable 3 years after a single episode, wants to stop", "STG minimum met; taper slowly over weeks; monitor for 2 years " + r(1, 2)],
["Violent manic patient in the emergency room", "De-escalation; haloperidol 10 mg IM ± promethazine; check for alcohol dependence first " + r(5)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Suicide, especially in depressive and mixed phases ${LB.exp()}.</li>
<li>Debt, job loss, violence, sexual risk, legal problems ${r(2)}.</li>
<li>Metabolic syndrome from antipsychotics — annual health check: weight, BP, glucose/HbA1c, lipids, LFT ${r(2)}.</li>
<li>Lithium: hypothyroidism, raised calcium, kidney damage, neurotoxicity ${r(2)}.</li>
<li>Acute dystonia from antipsychotics: promethazine 25 mg IM or diazepam 10 mg IV, then trihexyphenidyl 2 mg three times daily for 1 week ${r(5)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Follow up regularly for at least one year of symptom-free period (STG) ${r(1)}.</li>
<li>Antipsychotic monitoring: pulse and BP after each dose change; weight weekly for 6 weeks then at 12 weeks; glucose and lipids at 12 weeks; then at least yearly ${r(2)}.</li>
<li>If defaulted with relapse: restart previous medicine, find out why they stopped, improve adherence (STG) ${r(1)}.</li>
<li>Re-refer if poor response, side effects, substance use, wish to stop, or pregnancy planned ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected mania", [F.d("Dangerous, refusing, severely agitated?"), F.a, F.b([["Yes", F.e("De-escalate; IM haloperidol ± promethazine (diazepam if alcohol-dependent)")], ["No", F.s("Oral risperidone (STG); stop antidepressant")]]), F.a, F.s("Exclude drugs, thyroid, delirium; refer first episode"), F.a, F.d("Response at 2–4 weeks?"), F.a, F.b([["Yes", F.ok("Continue ≥ 1 year; psychoeducation; relapse plan")], ["No", F.s("Switch antipsychotic, then add mood stabiliser (specialist)")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Antidepressant alone in a depressed patient with past highs", "Triggers mania or rapid cycling", "Always ask about highs first " + r(2)],
["Amitriptyline for insomnia in bipolar", "Can trigger mania", "Short diazepam; treat the relapse " + r(1)],
["Valproate in a young woman", "Major birth defects and developmental harm", "Avoid; specialist " + r(2)],
["NSAIDs with lithium", "Raises lithium levels", "Avoid OTC NSAIDs " + r(2)],
["Stopping after 3 months because 'well'", "High relapse", "Minimum 1 year after first episode " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What should you ask every patient presenting with depression?", "About previous periods of overactivity or disinhibited behaviour — 4 days or more suggests possible bipolar disorder.")}
${qa("Intern/MO", "Bhutan STG duration of treatment after a first manic episode?", "At least one year (2–3 episodes: 5 years; more than 3: life-long).")}
${qa("Specialist", "NICE lithium target level for a first prescription?", "0.6–0.8 mmol/L; 0.8–1.0 for at least 6 months if relapsed on lithium before.")}
${qa("Specialist", "Which drug should not be used to treat mania?", "Lamotrigine.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.2.4 Mood disorders.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Bipolar disorder: assessment and management. Clinical guideline CG185, September 2014 (updated to 2025). <a href="https://www.nice.org.uk/guidance/cg185" target="_blank" rel="noopener">nice.org.uk/guidance/cg185</a></li>
<li id="ref-3">US Food and Drug Administration prescribing information for risperidone, olanzapine and quetiapine, as summarised in this app's drug monographs.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025, §22 and antiepileptic medicines.</li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.3 Psychiatric emergency.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §10.2.4 and §10.3 doses", "<span class='pass'>Checked</span>", "Read from the STG text"],
["NICE CG185", "<span class='pass'>Checked</span>", "Mania, depression, long-term, lithium, valproate sections read"],
["NEML availability (no lithium)", "<span class='pass'>Checked</span>", "NEML 2025 §22"],
["Carbamazepine bipolar dosing, HLA-B*1502", "<span class='unv'>Not read</span>", "No dose given; marked"],
["Images", "<span class='pass'>None</span>", "Not needed"]
], "qc")}` }
]
});
})();
