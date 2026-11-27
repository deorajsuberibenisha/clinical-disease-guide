/* Parkinson's disease — adults. NEW disease (batch N-2, 27 Nov 2026).
   Sources read directly: NICE NG71 Parkinson's disease in adults (2017; recommendations read in browser 27 Nov 2026 — suspect with tremor,
   stiffness, slowness, balance or gait problems; refer quickly and untreated to a specialist; clinical diagnosis (UK Brain Bank criteria); review
   diagnosis every 6–12 months; no structural MRI to diagnose PD; SPECT only if essential tremor vs parkinsonism unclear; never stop drugs abruptly
   (acute akinesia, NMS), no 'drug holidays', give doses on time in hospital; levodopa if symptoms affect quality of life; choice of dopamine
   agonist/levodopa/MAO-B if not; no ergot agonists first line; warn about impulse control disorders and sleepiness; adjuncts for fluctuations;
   amantadine for dyskinesia; no anticholinergics once fluctuations/dyskinesia; daytime sleepiness — no driving; REM sleep behaviour disorder —
   clonazepam or melatonin; orthostatic hypotension — review drugs, midodrine, fludrocortisone; hallucinations — treat triggers, reduce PD drugs,
   quetiapine (no cognitive impairment), clozapine; no olanzapine; phenothiazines and butyrophenones worsen PD; dementia — cholinesterase inhibitor;
   drooling — glycopyrronium, botulinum toxin; no vitamin E/CoQ10 neuroprotection);
   Merck Manual Professional 'Parkinson disease' (last updated Oct 2026: unilateral rest tremor, cogwheel rigidity, bradykinesia, hypomimia,
   micrographia, later postural instability; diagnosis clinical, tremor attenuates on finger–nose, strength and sensation normal; carbidopa/levodopa
   increased every 4–7 days, up to 2–3 tablets 4–5 times a day; most need 400–1200 mg levodopa/day every 2–5 h, preferably not with food; early
   levodopa does not hasten loss of effect; dyskinesias with progression; amantadine, MAO-B, anticholinergics in few);
   Bhutan STG 2024 palliative section (benzodiazepines rather than antipsychotics for delirium in Parkinson's disease); NEML 2025 (levodopa 250 mg +
   carbidopa 25 mg tablet; trihexyphenidyl 2 mg; quetiapine 50 mg; no dopamine agonist, MAO-B, COMT, amantadine found). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
const F2 = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "parkinsons-adult",
title: "Parkinson's Disease — Adults",
subtitle: "Slowness with rest tremor or stiffness, usually starting on one side: confirm it is not drug-induced, start levodopa when symptoms affect daily life, never stop it suddenly, and manage falls, mood, sleep, constipation, low blood pressure and hallucinations",
age: "Adults (mostly over 50)", specs: ["neuro", "medicine", "rehab", "psych"],
keywords: ["Parkinson's disease", "parkinsonism", "tremor", "rest tremor", "pill-rolling", "bradykinesia", "rigidity", "cogwheel", "shuffling gait", "levodopa", "carbidopa", "trihexyphenidyl", "drug-induced parkinsonism", "essential tremor", "dyskinesia", "wearing off", "falls elderly", "hallucinations Parkinson", "neuroleptic malignant syndrome"],
related: ["depression-adult", "psychosis-adult", "stroke-adult", "palliative-care", "syncope-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Parkinson's disease is a slowly progressive brain disease causing slowness (bradykinesia) with rest tremor and/or rigidity, usually beginning on one side. It is diagnosed clinically. Treatment does not stop progression, but <b>levodopa greatly improves daily life</b> ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Tremor, stiffness, slowness, small handwriting, soft voice, shuffling gait or falls ${r(1)} ${r(2)}.</p></div>
<div><h4>Exclude</h4><p>Drug-induced parkinsonism (haloperidol, chlorpromazine, metoclopramide, prochlorperazine, flunarizine) and essential tremor ${r(1)} ${LB.exp("DRUG LIST STANDARD")}.</p></div>
<div><h4>Treat</h4><p>${F2("levodopa", "Levodopa/carbidopa")} when symptoms affect quality of life; start low, increase every 4–7 days ${r(1)} ${r(2)}.</p></div>
<div><h4>Never</h4><p>Stop Parkinson's medicines suddenly — risk of akinesia and neuroleptic malignant syndrome; give doses on time in hospital ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>There is no STG section on Parkinson's disease; neurologists are at JDWNRH ${LB.loc()}. NEML 2025 lists <b>levodopa 250 mg + carbidopa 25 mg tablets</b>, trihexyphenidyl 2 mg and quetiapine; dopamine agonists, MAO-B and COMT inhibitors and amantadine were not found ${r(4)}. The STG palliative section prefers benzodiazepines over antipsychotics for delirium in Parkinson's disease ${r(3)}.</p>`)}
` },

{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Who", "Usually over 50; men slightly more; young-onset occurs"],
["Core motor signs", "Bradykinesia plus rest tremor and/or rigidity; postural instability later " + r(2)],
["Non-motor", "Constipation, loss of smell, REM sleep behaviour disorder (acting out dreams), depression, anxiety, orthostatic hypotension, urinary symptoms, drooling, dementia and hallucinations later " + r(1)],
["Course", "Slowly progressive; motor fluctuations and dyskinesias appear with progression " + r(2)],
["Parkinsonism, not PD", "Drug-induced, vascular (stroke), atypical (PSP, MSA, Lewy body dementia), Wilson's disease in the young"]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Parkinson's disease", [F.s("Loss of dopamine neurons in the substantia nigra (Lewy bodies)"), F.a, F.s("Basal ganglia circuit imbalance"), F.a, F.e("Bradykinesia, rigidity, tremor; non-motor symptoms from wider brain involvement")])}
<p>Levodopa is converted to dopamine in the brain; carbidopa blocks its breakdown in the body, reducing nausea. As neurons are lost, each dose lasts less long — causing 'wearing off' and dyskinesias ${r(2)}.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG71", "Local practice", "This guide"], [
["First treatment", "Levodopa if quality of life affected; agonist or MAO-B options otherwise", "Only levodopa/carbidopa and trihexyphenidyl on NEML", "Levodopa/carbidopa; specialist imports other drugs " + r(1) + r(4)],
["Anticholinergics", "Not once fluctuations or dyskinesia; cognitive harm", "Trihexyphenidyl often given for tremor", "Only for young patients with tremor and no cognitive problems " + r(1) + r(2) + " " + LB.exp("AGE RESTRICTION STANDARD")],
["Brain imaging", "No structural MRI to diagnose PD", "CT often requested", "Image only if atypical features (stroke, tumour, hydrocephalus) " + r(1)],
["Antipsychotics", "Quetiapine or clozapine; never olanzapine, phenothiazines or haloperidol", "Haloperidol used for agitation", "Avoid haloperidol; low-dose quetiapine; benzodiazepine for delirium (STG) " + r(1) + r(3)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Rest tremor</b>: slow, coarse, 'pill-rolling', one hand first, worse with stress, settles on movement and in sleep ${r(2)}.</li>
<li><b>Rigidity</b>: lead-pipe or cogwheel ${r(2)}.</li>
<li><b>Bradykinesia</b>: slow, shrinking repetitive movements (finger taps), small handwriting, masked face, reduced blinking, soft monotonous speech ${r(2)}.</li>
<li><b>Gait</b>: stooped, small shuffling steps, reduced arm swing, turning en bloc, freezing; falls later ${r(2)}.</li>
<li>Strength, sensation and reflexes normal; plantars flexor ${r(2)}.</li>
</ul>
<h3>Red flags for another cause</h3>
<p>Early falls or dementia, symmetrical onset, poor response to levodopa, gaze palsy, early severe autonomic failure, cerebellar signs, pyramidal signs, onset under 40 (check for Wilson's disease), recent antipsychotic or anti-sickness drugs ${r(1)} ${LB.exp("RED FLAG LIST STANDARD")}.</p>
<h3>The typical patient</h3>
<p>A 66-year-old retired farmer from Lhuentse has 18 months of right-hand rest tremor, slowness doing up buttons and smaller handwriting; cogwheel rigidity on the right; no antipsychotic drugs. <b>Probable Parkinson's disease</b>: refer to a neurologist; if daily life is affected, start levodopa/carbidopa at a low dose and increase slowly; advise exercise, fibre and fluids for constipation ${r(1)} ${r(2)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Essential tremor", "Postural/action tremor of both hands, head or voice, family history, improves with alcohol; no bradykinesia " + r(1)],
["Drug-induced parkinsonism", "Haloperidol, chlorpromazine, risperidone, metoclopramide, prochlorperazine, flunarizine; symmetrical; improves after stopping " + LB.exp("STANDARD")],
["Vascular parkinsonism", "Legs more than arms, stroke history, CT/MRI white-matter disease " + P("stroke-adult", "Stroke")],
["Lewy body dementia", "Early dementia, visual hallucinations, fluctuating alertness"],
["PSP / MSA", "Early falls, gaze palsy (PSP); severe autonomic failure, cerebellar signs (MSA)"],
["Wilson's disease", "Under 40, liver disease, Kayser–Fleischer rings"],
["Depression, hypothyroidism", "Slowness without tremor or rigidity " + P("depression-adult", "Depression")]
])}
` },

{ id: "invest", title: "Investigations", html: `<ul><li>Diagnosis is clinical (UK Brain Bank criteria); review it every 6–12 months ${r(1)}.</li><li>No routine brain MRI or CT; image only for atypical features ${r(1)}.</li><li>Under 40: caeruloplasmin, liver tests, slit-lamp for Wilson's disease ${LB.exp("STANDARD")}.</li><li>TSH, B12 if cognitive or mood symptoms; lying and standing BP ${r(1)}.</li><li>A clear response to levodopa supports the diagnosis ${r(2)}.</li></ul>` },

{ id: "staging", title: "Parkinsonism helper", html: `<div class="calc" data-calc="pdplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Motor symptoms</h3>
<ul>
<li><b>Levodopa/carbidopa</b> when symptoms affect quality of life — early use does not shorten its benefit ${r(1)} ${r(2)}.</li>
<li>Start low and increase every 4–7 days to the lowest effective dose; most need 400–1200 mg levodopa a day in 3–5 doses, ideally 30–60 minutes before meals (protein reduces absorption) ${r(2)} ${LB.exp("MEAL TIMING")}.</li>
<li>With the NEML 250/25 tablet: start with ¼ tablet (62.5 mg levodopa) three times a day and increase by ¼ tablet a dose each week ${LB.exp("STARTING DOSE — TABLET ROUND-DOWN")}. Nausea: take with a few biscuits; domperidone (not metoclopramide) ${LB.exp("STANDARD")}.</li>
<li>Specialist options when available: dopamine agonists, MAO-B or COMT inhibitors for wearing off; amantadine for dyskinesia ${r(1)}.</li>
<li>${dr("trihexyphenidyl")}: only for younger patients with troublesome tremor and normal cognition; avoid in older people (confusion, urinary retention) ${r(1)} ${LB.exp("AGE RESTRICTION")}.</li>
<li>Deep brain stimulation for selected patients abroad ${r(2)}.</li>
</ul>
<h3>Safety</h3>
<ul>
<li><b>Never stop suddenly</b> — if nil by mouth or vomiting, give levodopa by nasogastric tube; neuroleptic malignant syndrome risk ${r(1)}.</li>
<li>Give doses on time in hospital ${r(1)}.</li>
<li>Warn about sleepiness and sudden sleep (no driving), impulse control disorders (gambling, shopping, eating, sexual) ${r(1)}.</li>
</ul>
<h3>Non-motor symptoms</h3>
<ul>
<li><b>Hallucinations/psychosis</b>: look for infection, dehydration, new drugs; reduce PD drugs (specialist); low-dose ${F2("quetiapine", "quetiapine")} if no cognitive impairment; <b>never haloperidol, chlorpromazine or olanzapine</b> ${r(1)}. Delirium: benzodiazepine preferred over antipsychotics (STG) ${r(3)}.</li>
<li><b>Orthostatic hypotension</b>: review antihypertensives and diuretics; fluids, salt, head-up bed; midodrine or fludrocortisone (specialist) ${r(1)}.</li>
<li><b>Depression and anxiety</b>: treat (see ${P("depression-adult", "Depression")}) ${r(1)}.</li>
<li><b>Constipation</b>: fluids, fibre, laxatives ${LB.exp("STANDARD")}.</li>
<li><b>Sleep</b>: REM sleep behaviour disorder — clonazepam or melatonin ${r(1)}.</li>
<li><b>Dementia</b>: cholinesterase inhibitor ${r(1)}.</li>
<li><b>Drooling</b>: speech therapy; glycopyrronium; botulinum toxin ${r(1)}.</li>
</ul>
<h3>Therapy</h3>
<p>Physiotherapy (gait, balance, falls), occupational therapy (home safety), speech and language therapy (voice, swallowing) ${r(1)}.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[F2("levodopa", "Levodopa + carbidopa"), "First-line when symptoms affect life; titrate every 4–7 days " + r(1) + r(2), "250/25 mg tablet " + r(4)],
[dr("trihexyphenidyl"), "Tremor in younger patients only " + r(1), "2 mg " + r(4)],
[F2("quetiapine", "Quetiapine"), "Hallucinations without cognitive impairment, low dose " + r(1), "50 mg " + r(4)],
["Dopamine agonists, MAO-B, COMT inhibitors, amantadine", "Adjuncts (specialist) " + r(1), "Not found " + r(4)],
["Haloperidol, chlorpromazine, metoclopramide, olanzapine", "<b>Avoid</b> — worsen parkinsonism " + r(1), "—"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Older and frail:</b> falls, fractures, confusion with anticholinergics ${r(1)}.</li><li><b>Hospital admission:</b> keep the home timetable; NG levodopa if nil by mouth ${r(1)}.</li><li><b>Young onset:</b> exclude Wilson's disease; work and family support.</li><li><b>End of life:</b> palliative care, swallowing, communication ${P("palliative-care", "Palliative care")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Agitated, hallucinating patient on the ward", "Treat infection/dehydration; benzodiazepine or low-dose quetiapine; never haloperidol " + r(1) + r(3)],
["Nil by mouth after surgery", "Levodopa by NG tube; do not stop " + r(1)],
["Fever, rigidity, confusion after a missed supply", "Possible NMS-like syndrome — restart levodopa, cool, fluids, CK, urgent referral " + r(1) + " " + LB.exp("MANAGEMENT")],
["Tremor started after metoclopramide or haloperidol", "Drug-induced — stop the drug, review in weeks"],
["Village patient cannot get tablets regularly", "Plan supply with the BHU; family taught never to stop suddenly " + LB.loc()]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Falls and fractures, aspiration pneumonia, weight loss, depression, dementia, psychosis, orthostatic hypotension, motor fluctuations and dyskinesias, impulse control disorders, neuroleptic malignant syndrome on sudden withdrawal ${r(1)} ${r(2)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Review every 6–12 months (diagnosis, drugs, non-motor symptoms) ${r(1)}.</li><li>Ask about hallucinations, impulse control, sleepiness and mood at each visit ${r(1)}.</li><li>Carer support and assessment ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No image used. Watch the patient walk, write a sentence and tap fingers — the signs are seen, not scanned ${r(1)}.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Tremor or slowness", [F.d("Bradykinesia + rest tremor or rigidity?"), F.a, F.b([["No", F.ok("Essential tremor or other cause")], ["Yes", F.s("Parkinsonism")]]), F.a, F.d("Drug cause or red flags?"), F.a, F.b([["Yes", F.e("Stop drug / specialist for atypical")], ["No", F.s("Probable PD — refer")]]), F.a, F.ok("Levodopa/carbidopa when life is affected; therapy; non-motor care")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Haloperidol or metoclopramide in PD", "Severe worsening", "Quetiapine / domperidone " + r(1)],
["Stopping levodopa on admission", "Akinesia, NMS", "Continue; NG if needed " + r(1)],
["Trihexyphenidyl in an older patient", "Confusion, retention, falls", "Avoid " + r(1)],
["Delaying levodopa 'to save it'", "Unnecessary disability", "Early levodopa does not shorten benefit " + r(2)],
["Calling essential tremor 'Parkinson's'", "Wrong drugs", "Look for bradykinesia " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Three core motor features?", "Bradykinesia plus rest tremor and/or rigidity (postural instability later).")}
${qa("Intern/MO", "Which antipsychotic is preferred for hallucinations in PD?", "Low-dose quetiapine (clozapine if it fails); never haloperidol or olanzapine.")}
${qa("Registrar", "Why never stop levodopa suddenly?", "Acute akinesia and neuroleptic malignant syndrome.")}
${qa("Registrar", "NICE first-line when symptoms affect quality of life?", "Levodopa.")}
${qa("Specialist", "What causes wearing off and dyskinesia?", "Disease progression with pulsatile levodopa stimulation — not cumulative levodopa exposure.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Parkinson's disease in adults (NG71). London: NICE; 2017. <a href="https://www.nice.org.uk/guidance/ng71" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Merck Manual Professional Edition. Parkinson disease (last updated Oct 2026).</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024 — palliative care: delirium.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG71", "<span class='pass'>Read</span>", "27 Nov 2026"], ["Merck (Oct 2026)", "<span class='pass'>Read</span>", "Signs, levodopa titration"], ["NEML 2025", "<span class='flag'>Gap</span>", "Only levodopa/carbidopa 250/25 and trihexyphenidyl"], ["Starting dose with 250/25 tablet", "<span class='unv'>Practical rounding</span>", "Marked"], ["Bhutan STG", "<span class='unv'>No PD section</span>", "Palliative delirium note only"], ["Calculator", "<span class='pass'>New</span>", "pdplan"]], "qc")}` }
]
});
})();
