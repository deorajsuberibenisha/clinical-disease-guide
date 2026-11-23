/* Depression and suicide risk (adults, with adolescents and the perinatal period) */
registerPage({
id: "depression-adult",
title: "Depression and Suicide Risk",
subtitle: "Recognising depression behind tiredness and body aches, PHQ-9, how to ask about suicide and act on the answer, fluoxetine and amitriptyline at Bhutanese doses, psychological care, and when to refer",
age: "Adults and adolescents", specs: ["psych", "medicine"],
keywords: ["depression", "major depressive disorder", "low mood", "suicide", "suicidal ideation", "self-harm", "suicide risk assessment", "PHQ-9", "PHQ-2", "antidepressant", "fluoxetine", "amitriptyline", "SSRI", "bipolar depression", "postnatal depression", "perinatal depression", "safety plan", "means restriction", "psychological first aid"],
related: ["alcohol-adult", "poisoning-adult", "thyroid-adult", "anaemia-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Depression often walks into the clinic as headaches, back pain, poor sleep or 'weakness'. Asking two simple questions, about mood and about enjoyment, finds most of it. Asking directly about suicide does not plant the idea; it saves lives.</p>
<div class="glance">
<div><h4>Two questions</h4><p>In the last 2 weeks, have you felt down or hopeless? Lost interest or pleasure? Either yes → PHQ-9.</p></div>
<div><h4>Ask about suicide</h4><p>Thoughts, plan, means, past attempts, protective factors. Every depressed patient, every visit.</p></div>
<div><h4>Mild</h4><p>Psychoeducation, activity, sleep, problem-solving; review in 2–4 weeks.</p></div>
<div><h4>Moderate–severe</h4><p>${dr("fluoxetine")} 20 mg each morning plus psychological support.</p></div>
<div><h4>Duration</h4><p>At least 6 months after recovery (STG: at least as long as the illness).</p></div>
<div><h4>Refer</h4><p>Psychosis, high suicide risk, bipolar disorder, under 18, perinatal, no response.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §10.2.4 recommends amitriptyline 12.5–100 mg at night or fluoxetine 20–40 mg each morning, for at least as long as the illness or 6 months, with review every 2–4 weeks; refer under-18s, perinatal depression, psychosis and suicidal patients. Suicide is a recognised public health priority in Bhutan; pesticides and hanging are common methods in the region, so <b>means restriction</b> (locking away pesticides and medicines) matters. Emergency number: <b>112</b>. Psychiatric care is at JDWNRH and regional referral hospitals, with counsellors and trained medical officers in districts. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Diagnosis", html: `
<p><b>Depressive episode</b> (ICD-11, DSM-5): for at least 2 weeks, most of the day, nearly every day, <b>depressed mood or loss of interest</b>, plus enough of: change in sleep or appetite, tiredness, poor concentration, worthlessness or guilt, hopelessness, slowing or agitation, thoughts of death or suicide, with impaired daily functioning.</p>
${tbl(["Severity", "Features", "PHQ-9 guide"], [["Mild", "Distressed but still managing most activities", "5–9 (mild) to 10–14"], ["Moderate", "Clear difficulty with work, home or social life", "10–19"], ["Severe", "Unable to function; may have psychotic features or high suicide risk", "20–27"]])}
` },

{ id: "patho", title: "Why it happens", html: `
${F.chart("Many roads into depression", [
F.b([["Biological", F.s("Family history, chronic illness (diabetes, TB, HIV, stroke), hypothyroidism, alcohol, some medicines")], ["Psychological", F.s("Loss, trauma, low self-esteem, rumination")], ["Social", F.s("Poverty, unemployment, migration, isolation, family conflict, violence")]]), F.a,
F.e("Changes in stress hormones, sleep, monoamine and neuroplasticity systems"), F.a,
F.ok("Treatment works on all three: support, problem-solving, activity, and medicine when needed")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE NG222 / WHO mhGAP", "This guide"], [
["First-line drug", "Amitriptyline (insomnia) or fluoxetine (students, hypersomnia)", "SSRI first; TCAs avoided because of overdose toxicity", "Fluoxetine first; amitriptyline only with low suicide risk and supervised supply " + LB.int()],
["Mild depression", "Drug treatment discussed for all", "Psychological interventions first; antidepressants not routine for mild", "Psychological first " + LB.int()],
["Duration", "At least as long as the illness or 6 months", "At least 6 months after remission; 2 years if recurrent", "Both"],
["Adolescents", "Refer all under 18", "Psychological therapy first; fluoxetine if moderate–severe, with therapy", "Refer; fluoxetine under specialist guidance"]])}
` },

{ id: "presentation", title: "Assessment and suicide risk", html: `
<ul><li><b>Ask:</b> mood, interest, sleep, appetite, energy, concentration, guilt, hopelessness; how long; what is happening in their life; alcohol and drugs; past episodes; any time of feeling unusually high or needing little sleep (bipolar).</li>
<li><b>Examine:</b> appearance, speech, psychomotor change, psychotic features; look for physical causes (thyroid, anaemia, chronic illness).</li></ul>
<h3>Asking about suicide (in private, calmly)</h3>
<ol><li>'Sometimes when people feel like this, they feel life is not worth living. Have you felt that?'</li>
<li>'Have you had thoughts of ending your life?' If yes: 'Have you thought how? Do you have the means (pesticide, rope, tablets)? Have you made plans or preparations? Have you tried before?'</li>
<li>'What has kept you going so far?' (family, children, faith, hopes)</li></ol>
${tbl(["Risk level (clinical judgement)", "Features", "Action"], [["High", "Current plan, means available, recent attempt, psychosis, severe hopelessness, intoxication, unable to agree a safety plan", "Do not leave alone; remove means; involve family; emergency referral (112, nearest hospital with a psychiatrist or MO)"], ["Moderate", "Thoughts without a firm plan, some risk factors, can engage", "Safety plan, means restriction with family, review within 1–2 days, refer"], ["Low", "Passing thoughts, no plan, good supports", "Treat depression, safety plan, review within a week"]])}
${box("red", "Risk factors", `<ul><li>Previous attempt (the strongest predictor)</li><li>Male, older age, living alone, recent loss, unemployment, debt</li><li>Alcohol or drug use; chronic painful illness</li><li>Access to pesticides, firearms or stockpiled medicines</li></ul>`)}
<h3>The typical patient</h3>
<p>A 34-year-old mother of two from Punakha has come three times in two months with headaches and tiredness; tests were normal. Today she says she cannot sleep, has stopped weaving, and cries most days since her husband went to work abroad. When asked, she admits thinking her children would be better off without her, but has no plan. <b>This is moderate depression with suicidal thoughts</b>: she needs a PHQ-9, a safety plan made with her and her sister, pesticides at home locked away, fluoxetine 20 mg with problem-solving support, and review within a week.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Bipolar depression", "Past mania or hypomania: antidepressant alone can trigger mania"], ["Grief", "Waves of sadness linked to the loss, preserved self-worth; usually improves over months"], ["Hypothyroidism, anaemia", "Cold intolerance, weight gain; pallor; tests"], ["Alcohol use disorder", "AUDIT; depression often lifts after 2–4 weeks sober"], ["Dementia (older adults)", "Progressive memory loss"], ["Medicines", "Steroids, beta-blockers, efavirenz, isotretinoin"], ["Psychotic disorder", "Hallucinations, delusions out of keeping with mood"]])}` },

{ id: "invest", title: "Investigations", html: `<p>No test diagnoses depression. Check what the history suggests: TSH, haemoglobin, glucose, HIV where indicated, LFT if drinking; sodium in older adults starting an SSRI.</p>` },

{ id: "staging", title: "PHQ-9", html: `<div class="calc" data-calc="phq9"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. For everyone</h3>
<ul><li><b>Psychoeducation:</b> depression is common and treatable, not a personal weakness or failing; recovery takes weeks.</li>
<li><b>Behavioural activation:</b> small daily activities that used to bring pleasure or meaning; regular sleep and meals; walking; reduce alcohol.</li>
<li><b>Problem-solving:</b> list problems, pick one, plan small steps. Involve family and community supports; address violence and debt where possible.</li>
<li><b>Psychological first aid and relaxation</b> (STG); refer for structured therapy (CBT, interpersonal therapy) where available.</li></ul>
<h3>B. Antidepressants (moderate–severe, or mild that persists)</h3>
<ul><li>${dr("fluoxetine")} 20 mg each morning after food; review at 2–4 weeks; increase by 20 mg if partial response (max 60 mg; elderly 40 mg).</li>
<li>${dr("amitriptyline")} 25 mg at night, increasing by 25 mg weekly to 75–100 mg (STG range 12.5–100 mg): useful when insomnia or pain dominate, but <b>dangerous in overdose</b> — supply 1–2 weeks at a time and only if suicide risk is low.</li>
<li>Expect side effects before benefit; improvement starts at 2–4 weeks; full effect at 6–8 weeks. If no response at 4–6 weeks on an adequate dose, check adherence, then increase or switch.</li>
<li>Continue for at least 6 months after recovery; 2 years or more after 2–3 episodes. Taper over 4 weeks.</li></ul>
<h3>C. Suicide risk</h3>
<ul><li>Make a <b>safety plan</b> together: warning signs, coping steps, people to call, how to reach help (112), and removing means.</li>
<li>Ask family to lock away pesticides, rope, and medicines; dispense small quantities.</li>
<li>High risk: stay with the patient, emergency referral with escort; do not send home alone.</li></ul>
<h3>D. Refer (STG)</h3>
<p>Psychotic features, catatonia, high suicide risk, bipolar disorder, pregnancy or postpartum, under 18, co-occurring substance use, or no improvement after dose increases.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("fluoxetine"), "20 mg each morning; up to 60 mg", "First choice; safe in overdose; adolescents with specialist"],
[dr("amitriptyline"), "25–100 mg at night", "Insomnia or pain; toxic in overdose"]])}
<p>Only fluoxetine is listed among SSRIs on the NEML 2025; sertraline (preferred in breastfeeding and heart disease) and escitalopram are not.</p>
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Adolescents:</b> irritability, school decline, withdrawal, self-harm; see alone and with family; refer (STG); fluoxetine with therapy for moderate–severe, with weekly review for agitation and suicidal thoughts in the first month.</li><li><b>Perinatal:</b> screen in pregnancy and after birth; postnatal depression affects the baby's growth and development; psychological care first; fluoxetine or sertraline if needed; puerperal psychosis is an emergency.</li><li><b>Older adults:</b> more physical complaints and memory problems; avoid amitriptyline (falls, confusion); check sodium on SSRIs.</li><li><b>Chronic illness</b> (diabetes, TB, HIV, stroke, cancer): depression worsens adherence and outcomes; screen routinely.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Family says it is spirit possession", "Respect beliefs; combine with medical care; involve trusted community or religious figures", "Engagement improves adherence"], ["Patient refuses medicine", "Psychological support, frequent review", "Mild–moderate depression responds"], ["Started fluoxetine, now very energetic, sleeping 2 hours", "Stop antidepressant, assess for mania, refer", "Bipolar switch"], ["After a suicide attempt with pesticide", "Medical treatment, then full risk assessment before discharge; follow up within a week", "Highest risk is in the weeks after"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Suicide, self-harm, alcohol misuse, worsening physical illness, loss of work and relationships, effects on children. Most people recover within 3–6 months with treatment; about half have another episode, so early-warning signs and continued treatment matter.</p>` },

{ id: "followup", title: "Follow-up", html: `
<p>Review within 1–2 weeks after starting treatment (sooner if suicidal or under 25), then every 2–4 weeks, then monthly for at least 6 months (STG). Repeat PHQ-9 to track progress; ask about suicide every visit.</p>
${box("green", "Advice to give", `<ul><li>Medicines take 2–4 weeks to help; do not stop suddenly.</li><li>Keep small daily routines; talk to someone you trust; avoid alcohol.</li><li>If you feel like harming yourself, call 112 or come to the health centre at once.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `<p>No clinical images are needed for this chapter.</p>` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Low mood in the clinic", [F.s("Two screening questions → PHQ-9"), F.a, F.d("Suicide risk?"), F.a, F.b([["High", F.e("Stay with patient; remove means; emergency referral")], ["Low–moderate", F.s("Safety plan; treat depression")]]), F.a, F.d("Severity?"), F.a, F.b([["Mild", F.ok("Psychological care; review 2–4 weeks")], ["Moderate–severe", F.s("Fluoxetine 20 mg + psychological care; review 2 weeks")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Not asking about suicide", "Missed risk", "Ask directly, every time"], ["Large amitriptyline supplies", "Lethal overdose", "Fluoxetine, or 1–2 weeks at a time"], ["Antidepressant alone in bipolar disorder", "Mania", "Ask about past highs"], ["Stopping at 4 weeks because 'better'", "Relapse", "Continue at least 6 months"], ["Investigating endlessly for body symptoms", "Delays care", "Screen for depression early"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the two core symptoms of depression?", "Depressed mood and loss of interest or pleasure (anhedonia), for at least 2 weeks.")}
${qa("Intern/MO", "Why is fluoxetine preferred to amitriptyline when suicide risk is present?", "Fluoxetine is relatively safe in overdose; tricyclics cause fatal arrhythmias and seizures.")}
${qa("Specialist", "What is the strongest single predictor of suicide?", "A previous suicide attempt.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.2.4 Mood disorders, §10.3 Psychiatric emergencies (suicidality), Annexure PHQ-9 and suicide screening tool; NEMF 2022; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Kroenke K, Spitzer RL, Williams JBW. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med 2001;16:606–613. <a href="https://doi.org/10.1046/j.1525-1497.2001.016009606.x" target="_blank" rel="noopener">doi:10.1046/j.1525-1497.2001.016009606.x</a></li>
<li id="ref-3">Cipriani A, Furukawa TA, Salanti G, et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 2018;391:1357–1366. <a href="https://doi.org/10.1016/S0140-6736(17)32802-7" target="_blank" rel="noopener">doi:10.1016/S0140-6736(17)32802-7</a></li>
<li id="ref-4">Posner K, Brown GK, Stanley B, et al. The Columbia–Suicide Severity Rating Scale. Am J Psychiatry 2011;168:1266–1277. <a href="https://doi.org/10.1176/appi.ajp.2011.10111704" target="_blank" rel="noopener">doi:10.1176/appi.ajp.2011.10111704</a></li>
<li id="ref-5">National Institute for Health and Care Excellence. Depression in adults: treatment and management (NG222). 2022. <a href="https://www.nice.org.uk/guidance/ng222" target="_blank" rel="noopener">nice.org.uk</a>; World Health Organization. mhGAP Intervention Guide 2.0 and mhGAP guideline update 2023.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §10.2.4, §10.3", "<span class='pass'>Used</span>", "Suicide section partly an image in the PDF; Clinical Reference summary used"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Bhutan suicide statistics", "<span class='flag'>Not stated</span>", "No verified recent figure"], ["Sertraline", "<span class='flag'>Not on NEML 2025</span>", "Fluoxetine only SSRI"]], "qc")}` }
]
});
