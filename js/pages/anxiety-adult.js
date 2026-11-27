/* Anxiety disorders — generalised anxiety disorder, panic disorder, social anxiety (adults). Batch E-7, 27 Nov 2026.
   Sources read directly: Bhutan STG 2024 §10.2.3 Anxiety disorders (amitriptyline 12.5–100 mg HS, fluoxetine 20 mg, diazepam 5 mg PRN 2–3 days,
   duration ≥ illness or 6 months, review 2–4 weeks, monthly ≥ 6 months, psychological first aid, psychoeducation, relaxation) and §10.3 emergencies;
   NEML 2025 §22 (no sertraline or escitalopram; fluoxetine, amitriptyline, venlafaxine XR 75, mirtazapine, clonazepam, diazepam, lorazepam, propranolol 40).
   NICE CG113 Generalised anxiety disorder and panic disorder in adults (2011, updated June 2020) — full recommendations read in the browser 27 Nov 2026.
   Spitzer 2006 GAD-7 (DOI verified via Crossref). Not read: WHO mhGAP 2023 guideline, DSM-5-TR text, NICE CG159 social anxiety (marked where used). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "anxiety-adult",
title: "Anxiety and panic — adults",
subtitle: "Generalised anxiety, panic attacks and social anxiety: recognise them behind palpitations, chest pain and 'tension', rule out the physical mimics once, then psychoeducation, relaxation, an SSRI if needed — and no long-term benzodiazepines",
age: "Adults", specs: ["psych", "medicine", "emerg"],
keywords: ["anxiety", "generalised anxiety disorder", "GAD", "panic attack", "panic disorder", "agoraphobia", "social anxiety", "social phobia", "worry", "palpitations anxiety", "hyperventilation", "GAD-7", "GAD-2", "fluoxetine anxiety", "sertraline", "benzodiazepine dependence", "diazepam", "relaxation", "CBT", "psychological first aid"],
related: ["depression-adult", "ptsd-adult", "alcohol-adult", "substance-use-adult", "thyroid-adult", "acs-adult", "syncope-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Anxiety disorders are among the commonest mental disorders in primary care and are often missed because the patient presents with the body — racing heart, chest tightness, dizziness, tingling, stomach upset or poor sleep. Once the physical causes are reasonably excluded, naming the problem and explaining it is itself treatment.</p>
<div class="glance">
<div><h4>Three common types</h4><p><b>Generalised anxiety</b> — excessive worry most days for 6 months or more; <b>panic disorder</b> — recurrent unexpected attacks peaking within minutes; <b>social anxiety</b> — fear of being judged, with avoidance ${r(1)}.</p></div>
<div><h4>Screen</h4><p>GAD-2: nervous or on edge? unable to stop or control worrying? ${r(2)} Then GAD-7: 10 or more suggests a clinically important anxiety disorder ${r(3)}.</p></div>
<div><h4>Treat</h4><p>Step up: education and monitoring → guided self-help → CBT/applied relaxation <b>or</b> an SSRI ${r(2)}. Bhutan: fluoxetine 20 mg each morning or amitriptyline at night ${r(1)}.</p></div>
<div><h4>Avoid</h4><p>Benzodiazepines beyond a short crisis (STG: diazepam 2–3 days only) ${r(1, 2)}; antipsychotics and sedating antihistamines for anxiety in primary care ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§10.2.3) gives amitriptyline or fluoxetine, diazepam 5 mg as needed for 2–3 days only as add-on for severe restlessness, and psychological first aid, psychoeducation and relaxation for everyone; treat for at least as long as the illness lasted or 6 months, whichever is longer ${r(1)}. Sertraline (NICE first choice) is <b>not</b> on the NEML 2025 — fluoxetine is the listed SSRI; venlafaxine XR 75 mg and mirtazapine are listed for specialist use ${r(4)}. 24-hour help: <b>The PEMA helpline 1098</b> ${r(5)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Disorder", "Core feature", "Typical duration / pattern"], [
["Generalised anxiety disorder (GAD)", "Persistent, excessive, hard-to-control worry about many things, with restlessness, fatigue, poor concentration, irritability, muscle tension, poor sleep", "Most days for 6 months or more " + r(1)],
["Panic disorder", "Recurrent unexpected surges of intense fear peaking within minutes, then worry about further attacks and avoidance", "Attacks last minutes; disorder is the recurrence and fear of it " + r(1)],
["Agoraphobia", "Fear and avoidance of places where escape would be hard (crowds, buses, being alone outside)", "Often with panic disorder " + LB.exp()],
["Social anxiety disorder", "Fear of being judged, embarrassed or humiliated; social situations avoided or endured with intense fear", r(1)],
["Panic attack (single)", "Can occur in any anxiety disorder, depression, substance use or physical illness — one attack is not panic disorder", r(2)]
])}
<p>Anxiety very often coexists with depression, alcohol or drug use and chronic physical illness; treat the disorder that is more severe and more likely to improve overall function first ${r(2)}.</p>` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("The anxiety cycle", [F.s("Trigger or worry thought"), F.a, F.s("Threat system fires: adrenaline, fast heart, fast breathing, tense muscles"), F.a, F.s("Body sensations read as danger (\"heart attack\", \"going mad\")"), F.a, F.s("More fear → more symptoms; avoidance brings short relief"), F.a, F.e("Avoidance and reassurance-seeking keep the fear going")])}
<p>Over-breathing lowers carbon dioxide and causes tingling of the lips and fingers, light-headedness and chest tightness, which feel alarming and feed the next attack ${LB.exp()}. CBT and applied relaxation work by breaking this cycle — understanding the sensations, reducing avoidance and learning to tolerate the feelings ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE CG113 (2011–2020)", "This guide"], [
["First drug", "Amitriptyline 12.5–100 mg at night <b>or</b> fluoxetine 20 mg each morning", "SSRI — sertraline first (cost-effective); then another SSRI or an SNRI; pregabalin if neither tolerated", "Fluoxetine first in Bhutan (NEML SSRI); amitriptyline when insomnia dominates and overdose risk is low " + LB.int()],
["Benzodiazepines", "Diazepam 5 mg as needed for 2–3 days for severe restlessness", "Not for GAD except short-term in crises; never for panic disorder", "Agree: a few days at most; never as the main treatment " + LB.int()],
["Tricyclics", "First-line option", "Panic: imipramine or clomipramine only after an SSRI fails at 12 weeks; highest overdose risk", "Prefer fluoxetine when there is any suicide risk " + LB.int()],
["How long", "≥ illness duration or 6 months (whichever longer)", "GAD: at least 1 year if effective; panic: 6 months after the optimal dose, then taper", "6–12 months after recovery, then slow taper " + LB.int()],
["Psychological care", "Psychological first aid, psychoeducation, relaxation", "Stepped: education → self-help (CBT-based) → CBT or applied relaxation 12–15 sessions", "Both — the first steps can be delivered by any trained health worker " + LB.exp()]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Group", "Symptoms"], [
["Psychological", "Uneasiness, excessive worry that will not stop, irritability, poor concentration, fear of losing control or dying " + r(1)],
["Physical", "Palpitations, dry mouth, sweating, cold or tingling hands and feet, nausea, dizziness, tiredness, muscle tension, chest tightness, breathlessness " + r(1)],
["Sleep", "Difficulty falling asleep, waking with worry " + r(1)],
["Panic attack", "Sudden surge: pounding heart, breathlessness, choking, chest pain, trembling, sweating, dizziness, numbness, fear of dying — peaks within minutes " + r(1)]
])}
<p>Think of GAD in people who attend often with a chronic physical problem, seek repeated reassurance about bodily symptoms, or worry about many different things ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 29-year-old civil servant in Thimphu has visited the emergency room three times in two months with sudden palpitations, chest tightness and numb hands, each time fearing a heart attack. ECGs were normal. Between attacks she worries about the next one and has stopped taking the bus. Explain panic clearly, show her slow breathing, give written information, check thyroid function and her caffeine and alcohol use, and plan CBT-based self-help; if attacks continue, start fluoxetine 10–20 mg with a warning that anxiety may rise briefly in the first week ${r(1, 2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Hyperthyroidism", "Weight loss, heat intolerance, tremor, goitre — TSH " + LB.exp()],
["Arrhythmia (SVT, AF)", "Abrupt onset and offset, very fast regular pulse — ECG during symptoms " + LB.exp()],
["Acute coronary syndrome", "Older, risk factors, exertional or crushing pain — never assume panic in a patient with cardiac risk " + LB.exp()],
["Asthma, PE, hypoxia", "Wheeze, low SpO₂, leg swelling " + LB.exp()],
["Hypoglycaemia", "On insulin or sulfonylurea; sweaty and confused — check glucose " + LB.exp()],
["Substance use or withdrawal", "Caffeine, alcohol withdrawal, cannabis, stimulants, stopping benzodiazepines — ask every patient " + r(2)],
["Depression", "Low mood and loss of pleasure — often coexists; screen with PHQ-9 " + r(2)],
["PTSD", "Anxiety tied to a past trauma, with nightmares and flashbacks — see the PTSD page " + LB.int()],
["Phaeochromocytoma (rare)", "Paroxysms with very high blood pressure and headache " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Do the <b>minimum</b> needed to exclude physical causes, once, and explain the results — repeated tests reinforce fear ${r(2)}.</li>
<li>Pulse, blood pressure, weight; ECG if palpitations or chest pain; blood glucose ${LB.exp()}.</li>
<li>TSH (and CBC if tired or pale) where symptoms suggest it ${LB.exp()}.</li>
<li>Ask about caffeine, alcohol, tobacco, cannabis, over-the-counter and herbal products — interactions and lack of safety data ${r(2)}.</li>
<li>In the emergency room after a panic attack: ask if already treated, do minimum tests, do not usually admit, refer to primary care with written information ${r(2)}.</li>
</ul>` },
{ id: "staging", title: "Severity and stepped care", html: `
<div class="calc" data-calc="gad7"></div>
${tbl(["Step (NICE)", "Who", "What"], [
["1", "All known or suspected GAD", "Identify, explain, give information; active monitoring " + r(2)],
["2", "Not improved after step 1", "Low-intensity psychological care: self-help based on CBT (at least 6 weeks), guided self-help 5–7 sessions, or psychoeducation groups " + r(2)],
["3", "Marked functional impairment or not improved after step 2", "CBT or applied relaxation (12–15 weekly 1-hour sessions) <b>or</b> drug treatment — equal evidence; patient's choice " + r(2)],
["4", "Severe, treatment-refractory, self-neglect or risk of self-harm", "Specialist mental health care " + r(2)]
])}
<p>Severity is judged by distress and function, not only by symptom counts ${r(2)}. GAD-7 bands: 5 mild, 10 moderate, 15 severe ${r(3)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Everyone — psychosocial care</h3>
<ul>
<li><b>Psychoeducation</b>: the symptoms are real, caused by the body's alarm system, not dangerous, and treatable ${r(1, 2)}.</li>
<li><b>Psychological first aid</b> after a recent stressor; <b>relaxation</b> — slow breathing (breathe in for about 4 seconds, out for about 6), progressive muscle relaxation ${r(1)} ${LB.exp("BREATHING TIMES — COMMON PRACTICE")}.</li>
<li>Reduce caffeine; stop alcohol used to "calm nerves"; regular exercise; regular sleep ${r(2)} ${LB.exp()}.</li>
<li>Gradually face, rather than avoid, feared situations ${r(2)}.</li>
</ul>
<h3>2. Medicines (when chosen or when psychological care is not enough)</h3>
${tbl(["Drug", "Dose", "Notes"], [
["Fluoxetine (NEML)", "20 mg each morning after food; review at 2–4 weeks; Bhutan STG for depression increases by 20 mg to 40 mg if needed " + r(1) + "; panic: some start at 10 mg to avoid a jittery first week " + LB.exp("10 MG START — COMMON PRACTICE"), "Full effect builds over 1 week or more; may briefly increase anxiety at first " + r(2)],
["Amitriptyline (NEML)", "12.5–25 mg at night, increase by 25 mg a week; range 12.5–100 mg " + r(1), "Useful with insomnia; dangerous in overdose — give small supplies if any suicide risk " + r(2)],
["Sertraline (not on NEML)", "NICE first choice for GAD " + r(2), "If available privately: 25–50 mg daily " + LB.exp("NOT READ — BNF")],
["Venlafaxine XR 75 mg (NEML, specialist)", "Second line after an SSRI " + r(2, 4), "Withdrawal syndrome; toxic in overdose " + r(2)],
["Diazepam 5 mg (NEML)", "As needed for 2–3 days only, for severe restlessness " + r(1), "Not for panic disorder; not long term " + r(2)],
["Propranolol 40 mg (NEML)", "For situational physical symptoms (tremor, palpitations) " + LB.exp("NOT IN STG OR NICE CG113"), "Not in asthma; not a treatment for GAD"]
])}
<h3>3. Safety when prescribing an SSRI or SNRI</h3>
<ul>
<li><b>Under 30 years:</b> warn about a small increase in suicidal thinking early on; see within 1 week and check weekly for the first month ${r(2)}.</li>
<li>Bleeding risk with NSAIDs or aspirin, especially in older people — consider a gastroprotective drug ${r(2)}.</li>
<li>Avoid combining several serotonergic drugs; ask about stimulant use ${r(2)}.</li>
<li>Do not stop suddenly: dizziness, tingling, nausea, headache, sweating, anxiety and poor sleep can follow; taper slowly ${r(2)}.</li>
</ul>
<h3>4. Managing an acute panic attack</h3>
<p>Calm, quiet space; check vital signs and glucose; explain what is happening; coach slow breathing; avoid injections and benzodiazepines where possible; do not admit; give written information and arrange follow-up ${r(2)} ${LB.exp()}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("fluoxetine", "Fluoxetine")} 20 mg capsule — NEML ${r(4)}.</li>
<li>${D("amitriptyline", "Amitriptyline")} 25 mg tablet — NEML ${r(4)}.</li>
<li>${D("venlafaxine", "Venlafaxine")} 75 mg XR tablet — NEML ${r(4)}.</li>
<li>${D("mirtazapine", "Mirtazapine")} 15 mg — NEML (depression section) ${r(4)}.</li>
<li>${D("diazepam", "Diazepam")} 5 mg tablet; ${D("clonazepam", "clonazepam")} 0.5 mg; ${D("lorazepam", "lorazepam")} 1 mg — NEML, short-term only ${r(4)}.</li>
<li>${D("propranolol", "Propranolol")} 40 mg — NEML ${r(4)}.</li>
<li>${D("sertraline", "Sertraline")}, ${D("escitalopram", "escitalopram")}, pregabalin — not on NEML ${r(4)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Young adults (under 30)", "Review within 1 week of an SSRI and weekly for a month " + r(2)],
["Older adults", "New anxiety in later life — look harder for physical illness, depression and medicines; SSRI bleeding risk " + r(2) + " " + LB.exp()],
["Pregnancy and breastfeeding", "Psychological care first; any perinatal mental illness — STG treats as urgent referral " + LB.loc()],
["Learning disability or cognitive impairment", "Same treatments, adapted delivery; specialist advice if moderate–severe " + r(2)],
["Alcohol or drug use", "Harmful or dependent use treated first; it often improves the anxiety " + r(2)],
["Adolescents", "Refer — the STG refers mental illness in those 18 or under for depression; family involvement " + LB.loc()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Farmer, 45, 'tension' and headaches for a year, worries constantly about money and children's exams; GAD-7 13", "Explain GAD; relaxation and problem-solving; fluoxetine 20 mg if function is impaired; review in 2–4 weeks " + r(1, 2)],
["Student, 22, panic attacks before exams; asks for 'sleeping tablets'", "No benzodiazepine; CBT-based self-help; if fluoxetine started, review at 1 week and weekly for a month " + r(2)],
["Man, 52, smoker, 'panic' with chest pain on climbing stairs", "Not panic until cardiac disease is excluded — ECG, troponin pathway " + LB.exp()],
["Woman taking diazepam 10 mg daily for 3 years", "Do not stop abruptly; plan a slow taper with support " + LB.exp("NICE NG215 — NOT READ")],
["Anxiety with heavy evening drinking", "Address the alcohol first — AUDIT; see the alcohol page " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Depression and suicidal thoughts — ask ${r(2)}.</li>
<li>Alcohol and sedative misuse as self-medication ${r(2)}.</li>
<li>Benzodiazepine dependence; falls and sedation in older people ${LB.exp()}.</li>
<li>Repeated emergency visits and unnecessary investigations ${r(2)}.</li>
<li>Agoraphobia and loss of work or study ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>STG: review after 2–4 weeks; increase the dose if minimal improvement; monthly for at least 6 months ${r(1)}.</li>
<li>NICE: on a drug, review every 2–4 weeks for 3 months, then every 3 months; continue at least a year in GAD ${r(2)}.</li>
<li><b>Refer</b> if severe with no improvement after a dose increase (STG) ${r(1)}, or after two treatments without benefit, or with risk of self-harm, self-neglect or major comorbidity ${r(2)}.</li>
<li>Helpline: The PEMA 1098 (24 hours) ${r(5)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Adult with anxiety symptoms", [F.d("Red flags or physical cause? (chest pain with risk factors, very fast pulse, low SpO₂, hypoglycaemia, thyroid signs)"), F.a, F.b([["Yes", F.e("Treat the physical cause")], ["No", F.s("GAD-2 / GAD-7; ask about alcohol, drugs, depression, suicide")]]), F.a, F.s("Explain; relaxation; self-help; reduce caffeine and alcohol"), F.a, F.d("Better after 4–6 weeks?"), F.a, F.b([["Yes", F.ok("Continue; monthly review")], ["No / marked impairment", F.s("Fluoxetine 20 mg (or amitriptyline at night) ± CBT")]]), F.a, F.d("No response after dose increase, or risk?"), F.a, F.e("Refer to psychiatry")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Diazepam for weeks", "Dependence, worse long-term outcome in panic", "2–3 days at most; SSRI and psychological care " + r(1, 2)],
["Endless tests", "Each new test feeds the fear", "Minimum necessary, then a clear explanation"],
["Stopping fluoxetine at 4 weeks when better", "High relapse", "Continue 6–12 months, then taper"],
["Missing alcohol use", "Withdrawal mimics anxiety", "Ask about drinking every time"],
["Amitriptyline 100 mg supply to a suicidal patient", "Fatal in overdose", "Small supplies; prefer fluoxetine"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What are the two GAD-2 questions?", "Over the last 2 weeks: feeling nervous, anxious or on edge; not being able to stop or control worrying.")}
${qa("Intern/MO", "How long does the Bhutan STG allow diazepam for anxiety?", "5 mg as needed for 2–3 days, as add-on for severe anxiousness or restlessness.")}
${qa("Specialist", "Which drugs does NICE say should not be used for panic disorder?", "Benzodiazepines, sedating antihistamines and antipsychotics.")}
${qa("Specialist", "What extra monitoring does NICE advise for SSRIs in people under 30?", "Warn about suicidal thinking, see within 1 week and monitor weekly for the first month.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.2.3 Anxiety disorders.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Generalised anxiety disorder and panic disorder in adults: management. Clinical guideline CG113, January 2011 (updated June 2020). <a href="https://www.nice.org.uk/guidance/cg113" target="_blank" rel="noopener">nice.org.uk/guidance/cg113</a></li>
<li id="ref-3">Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med 2006;166:1092–7. <a href="https://doi.org/10.1001/archinte.166.10.1092" target="_blank" rel="noopener">doi:10.1001/archinte.166.10.1092</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025, §22 Medicines for mental and behavioural disorders.</li>
<li id="ref-5">Dema C. People unable to quit their dependence on drugs such as SP+ and heroin can seek free treatment at JDWNRH. The Bhutanese, 9 May 2026 (PEMA helpline 1098). <a href="https://thebhutanese.bt/?p=44266" target="_blank" rel="noopener">thebhutanese.bt</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §10.2.3 doses", "<span class='pass'>Checked</span>", "Read from the STG text"],
["NICE CG113", "<span class='pass'>Checked</span>", "Full recommendations read in the browser"],
["NEML availability", "<span class='pass'>Checked</span>", "NEML 2025 §22"],
["GAD-7 items and bands", "<span class='pass'>Checked</span>", "Spitzer 2006"],
["Sertraline, propranolol, slow taper of benzodiazepines", "<span class='unv'>Not read</span>", "BNF and NICE NG215 not read; marked"],
["Images", "<span class='pass'>None</span>", "Clinical diagnosis"]
], "qc")}` }
]
});
})();
