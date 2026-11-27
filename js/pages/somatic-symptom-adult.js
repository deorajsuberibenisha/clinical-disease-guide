/* Somatic symptom (psychosomatic) disorders — adults. Batch E-8, 27 Nov 2026.
   Sources read directly: Bhutan STG 2024 §10.2.5 Psychosomatic disorders (definition; symptoms; amitriptyline 12.5–100 mg HS increasing by 25 mg/week
   for 4 weeks or fluoxetine 20 mg up to 40 mg for 4 weeks plus symptomatic care; psychological first aid, psychoeducation, relaxation, reassurance after
   history and detailed examination; review at 4 weeks; refer if no improvement after second review or comorbidity). Merck Manual Professional
   'Somatic symptom disorder' (Dimsdale; full review June 2026) — read in the browser 27 Nov 2026. NEML 2025 §22. Not read: DSM-5-TR text, ICD-11 bodily
   distress disorder, NICE functional neurological disorder guidance, cited Cochrane reviews (marked). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "somatic-symptom-adult",
title: "Somatic symptom disorder — adults",
subtitle: "Real, distressing physical symptoms with excessive worry about them: examine well once, stop repeating tests, explain how stress and the body interact, see the patient regularly, and use CBT-style care with amitriptyline or fluoxetine when needed",
age: "Adults", specs: ["psych", "medicine"],
keywords: ["somatic symptom disorder", "psychosomatic disorder", "somatisation", "somatization", "medically unexplained symptoms", "functional symptoms", "bodily distress", "burning sensation whole body", "frequent attender", "doctor shopping", "illness anxiety", "hypochondriasis", "conversion disorder", "functional neurological disorder", "dissociative seizures", "chronic pain", "body aches", "amitriptyline", "fluoxetine"],
related: ["anxiety-adult", "depression-adult", "ptsd-adult", "headache-adult", "ibs-adult", "lbp-adult", "epilepsy-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Some patients come again and again with headaches, chest pains, body aches, burning all over, dizziness or stomach upset. Tests are normal, reassurance does not last, and both patient and doctor become frustrated. The symptoms are real; what defines somatic symptom disorder is how much distress, worry and time they consume ${r(1, 2)}.</p>
<div class="glance">
<div><h4>Define</h4><p>One or more distressing or disruptive symptoms for over 6 months, plus disproportionate thoughts, high health anxiety or excessive time spent on them ${r(2)}.</p></div>
<div><h4>Do once</h4><p>A thorough history and examination and necessary tests; then do not repeat tests unless symptoms change or new signs appear ${r(1, 2)}.</p></div>
<div><h4>Treat</h4><p>Validate, explain, relaxation, regular scheduled visits; CBT is first line ${r(1, 2)}. Bhutan STG: amitriptyline at night or fluoxetine ${r(1)}.</p></div>
<div><h4>Refer</h4><p>No improvement after the second review, or other mental or physical illness ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§10.2.5) stresses validating the symptoms, explaining the illness, and telling patients recovery may be slow and needs follow-up; it lists headaches, chest pain, nausea, vomiting, loose stools, abdominal, back and generalised aches, skin rashes, frequent urination and a burning sensation of the whole body ${r(1)}. In practice many patients also seek traditional medicine and rituals — ask about these respectfully and do not dismiss them ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The disorder in brief", html: `${tbl(["Feature", "Detail"], [
["Definition", "Physical symptoms with excessive thoughts, feelings and behaviours about them, causing major distress or problems functioning; may or may not accompany a diagnosed medical condition " + r(1, 2)],
["Not feigned", "Symptoms are not produced on purpose " + r(2)],
["Prevalence", "About 4–6% of adults; more often diagnosed in women; linked to low socioeconomic status and childhood adversity " + r(2)],
["Onset", "Usually before 30; fluctuates but rarely remits for long " + r(2)],
["Related conditions", "Illness anxiety disorder (minimal symptoms, high worry); functional neurological (conversion) disorder — weakness, non-epileptic seizures " + r(2) + " " + LB.exp()]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Stress and the body (STG)", [F.s("Emotional stress"), F.a, F.s("Physical symptoms (pain, palpitations, gut upset)"), F.a, F.s("Worry about serious disease; checking, repeated visits and tests"), F.a, F.s("More stress, poor sleep, less activity"), F.a, F.e("Symptoms worse — the cycle continues")])}
<p>Emotional stress can cause physical symptoms, physical symptoms cause more stress, and stress makes symptoms worse ${r(1)}. Negative tests rarely reassure and repeated testing can suggest the doctor is uncertain ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Merck Manual 2026", "This guide"], [
["First-line", "Medicine (amitriptyline or fluoxetine) plus psychosocial care", "CBT first; SSRI/SNRI second line, especially with depression", "Psychosocial care for all; add a medicine when distress or function is significant " + LB.int()],
["Referral", "After no improvement at second review", "Refer all to a psychiatrist even with a good GP relationship", "Primary care manages most; refer per STG " + LB.int()]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Headaches, chest pain, palpitations, nausea and vomiting, loose stools, abdominal, back or generalised aches, skin rashes, frequent urination, burning all over ${r(1)}.</li>
<li>Often many symptoms; sometimes one severe symptom, usually pain ${r(2)}.</li>
<li>Very anxious about health, hard to reassure, sensitive to drug side effects; may move between many doctors; some become depressed, angry or threaten suicide ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 45-year-old woman from Samtse has had a burning sensation all over the body, headaches and aches for two years. She has seen five doctors, a traditional healer and had three ultrasounds, all normal. She is sure something has been missed. Take a full history including stresses (her husband works abroad; her son failed exams), examine her fully, check a few relevant tests once, then explain clearly that the symptoms are real and linked to stress and sensitised nerves. Agree regular 4-weekly appointments, teach relaxation, start amitriptyline 12.5 mg at night, and screen for depression ${r(1, 2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Physical disease", "New or changing symptoms, objective signs, weight loss, fever, anaemia — always examine; patients can develop new illness " + r(2)],
["Depression", "Low mood and loss of interest dominate — PHQ-9 " + r(2)],
["Generalised anxiety", "Worry about many topics, not mainly about symptoms " + r(2)],
["Illness anxiety disorder", "Fear of having a disease with few or no symptoms " + r(2)],
["Functional neurological disorder", "Weakness, sensory loss or seizures inconsistent with neurological disease " + r(2)],
["PTSD", "History of trauma; nightmares, flashbacks " + LB.int()],
["Substance use", "Opioid or sedative seeking for 'pain' " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>At first presentation: extensive history (with family), thorough examination, and the tests needed to exclude a medical cause ${r(2)}.</li>
<li>Reasonable basics: CBC, glucose, thyroid, kidney and liver function, urine ${LB.exp()}.</li>
<li>Do <b>not</b> repeat tests once a cause is excluded, unless symptoms change significantly or new signs appear ${r(2)}.</li>
<li>Screen for depression (PHQ-9) and anxiety (GAD-7) ${LB.int()}.</li>
</ul>` },
{ id: "staging", title: "Diagnosis", html: `${tbl(["Criterion (DSM-5-TR via Merck)", "Detail"], [
["Symptoms", "One or more distressing or disruptive somatic symptoms " + r(2)],
["Excess", "At least one: disproportionate persistent thoughts about seriousness; persistently high anxiety about health or symptoms; excessive time and energy devoted to them " + r(2)],
["Duration", "More than 6 months (symptoms may vary) " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Psychosocial care (everyone)</h3>
<ul>
<li>Take the symptoms seriously and say so; explain the stress–body cycle; recovery is slow ${r(1)}.</li>
<li>Reassurance <b>after</b> a full history and examination — not before ${r(1)}.</li>
<li>Psychological first aid, psychoeducation, relaxation techniques ${r(1)}.</li>
<li>One coordinating clinician, regular scheduled visits (not symptom-driven), symptomatic relief, protection from unnecessary tests and procedures ${r(2)}.</li>
<li>CBT where available — first-line, with lasting benefit ${r(2)}.</li>
<li>Gradual return to activity and work; address life stresses ${LB.exp()}.</li>
</ul>
<h3>2. Medicines (STG)</h3>
${tbl(["Drug", "Dose"], [
["Amitriptyline 25 mg (NEML)", "12.5–100 mg at night, increase by 25 mg a week, for 4 weeks then review " + r(1)],
["Fluoxetine 20 mg (NEML)", "20 mg each morning after food; increase by 20 mg after 2 weeks to a maximum of 40 mg; review at 4 weeks " + r(1)],
["Symptomatic care", "Simple analgesia, etc., as appropriate " + r(1) + "; avoid opioids and benzodiazepines for chronic symptoms " + LB.exp()]
])}
<p>Antidepressants are second line internationally and help most when depression coexists ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("amitriptyline", "Amitriptyline")} 25 mg — NEML ${r(3)}.</li>
<li>${D("fluoxetine", "Fluoxetine")} 20 mg — NEML ${r(3)}.</li>
<li>${D("paracetamol", "Paracetamol")} — NEML.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Older adults", "Harder to diagnose — fatigue and pain are common with age; look harder for disease " + r(2)],
["Coexisting medical disease", "The diagnosis is not excluded by a real disease; e.g. invalid behaviour after full recovery from MI " + r(2)],
["Suicidal statements", "Take seriously; assess risk " + r(2)],
["Adolescents", "Family and school stresses; refer " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Frequent attender demanding a CT for headaches; normal examination", "Explain, agree a plan and regular visits; no CT without red flags " + r(2)],
["Known somatic symptom disorder, now new weight loss and anaemia", "Investigate — new disease is possible " + r(2)],
["Non-epileptic seizures after family conflict", "Functional neurological disorder — careful diagnosis, explanation, psychiatry " + LB.exp()],
["Burning body and low mood, PHQ-9 16", "Treat depression: fluoxetine; psychosocial care " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Iatrogenic harm from repeated tests, procedures and drugs ${r(2)}.</li>
<li>Depression, suicide threats or attempts ${r(2)}.</li>
<li>Dependence on others; loss of work; family strain ${r(2)}.</li>
<li>Benzodiazepine or opioid dependence ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Review after 4 weeks; increase the dose as needed and review again after 4 weeks; follow up regularly ${r(1)}.</li>
<li>Refer: no improvement after the second review, or coexisting mental or physical illness ${r(1)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Recurrent unexplained physical symptoms", [F.s("Full history (with family), examination, necessary tests — once"), F.a, F.d("Medical cause or red flags?"), F.a, F.b([["Yes", F.e("Treat the cause")], ["No", F.s("Validate and explain; screen for depression/anxiety")]]), F.a, F.s("Relaxation, psychoeducation, scheduled visits ± amitriptyline or fluoxetine"), F.a, F.d("Improved after two reviews?"), F.a, F.b([["Yes", F.ok("Continue; regular follow-up")], ["No", F.e("Refer to psychiatry")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["'It's all in your head'", "Patient feels dismissed and goes elsewhere", "Symptoms are real; explain the mechanism " + r(1)],
["Repeating normal tests", "Reinforces fear", "Test only when symptoms change " + r(2)],
["Reassuring before examining", "Not credible", "Examine first, then reassure " + r(1)],
["Ignoring new signs", "Missed disease", "Re-examine when things change " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Does a coexisting medical illness exclude somatic symptom disorder?", "No — the diagnosis is about excessive thoughts, feelings and behaviours, with or without a medical condition.")}
${qa("Intern/MO", "STG amitriptyline regimen?", "12.5–100 mg at night, increasing by 25 mg a week for four weeks, then review.")}
${qa("Specialist", "First-line treatment internationally?", "Psychotherapy, especially CBT; SSRIs/SNRIs second line.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.2.5 Psychosomatic disorders.</li>
<li id="ref-2">Dimsdale JE. Somatic symptom disorder. Merck Manual Professional Edition (peer reviewed by Zimmerman M; full review June 2026). <a href="https://www.merckmanuals.com/professional/psychiatric-disorders/somatic-symptom-and-related-disorders/somatic-symptom-disorder" target="_blank" rel="noopener">merckmanuals.com</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025, §22.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §10.2.5", "<span class='pass'>Checked</span>", "Read from the STG text"],
["Merck Manual 2026", "<span class='pass'>Checked</span>", "Read in the browser"],
["Functional neurological disorder, ICD-11, Cochrane reviews", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>None</span>", "No validated tool in use in Bhutan; PHQ-9/GAD-7 on linked pages"],
["Images", "<span class='pass'>None</span>", "Not needed"]
], "qc")}` }
]
});
})();
