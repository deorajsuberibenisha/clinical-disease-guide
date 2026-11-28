/* Motor neurone disease (MND/ALS) — adults. NEW disease (batch N-6, 28 Nov 2026).
   Sources read directly: NICE NG42 Motor neurone disease: assessment and management (read in browser 28 Nov 2026: §1.1 early features — loss of
   dexterity, falls, speech/swallowing problems, tongue fasciculations, weakness, wasting, twitching, cramps, stiffness, unexplained breathlessness,
   daytime sleepiness, morning headache, orthopnoea; cognitive presentations incl. frontotemporal dementia; refer without delay naming MND; §1.8
   cramps quinine first then baclofen, then tizanidine/dantrolene/gabapentin; spasticity baclofen etc; exercise, orthoses; sialorrhoea —
   antimuscarinic first, glycopyrronium if cognitive impairment; §1.9 riluzole for ALS (TA20); §1.11 nutrition, swallowing assessment, discuss
   gastrostomy early and regularly, risks of late gastrostomy; §1.13–1.15 monitor respiratory function, treat reversible causes, offer NIV for
   respiratory impairment (life-prolonging), opioids for breathlessness, benzodiazepines when anxiety; cough augmentation, breath stacking);
   NEML 2025 (no riluzole; quinine 300 mg, baclofen 10 mg, glycopyrrolate 0.2 mg/mL inj, amitriptyline, morphine, diazepam/lorazepam listed).
   El Escorial/Gold Coast criteria not read — diagnosis left to neurologist. Covers remaining-list item 'Motor neurone disease'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "mnd-adult",
title: "Motor Neurone Disease (MND / ALS)",
subtitle: "Painless progressive weakness with wasting and twitching, slurred speech or choking, with normal sensation: refer to neurology naming MND, then plan early for swallowing, breathing, communication and end-of-life wishes",
age: "Adult", specs: ["neuro", "rehab", "medicine"],
keywords: ["motor neurone disease", "MND", "amyotrophic lateral sclerosis", "ALS", "fasciculations", "tongue fasciculation", "bulbar palsy", "progressive muscular atrophy", "riluzole", "gastrostomy MND", "non-invasive ventilation MND", "sialorrhoea", "drooling", "frontotemporal dementia"],
related: ["neuropathy-adult", "myasthenia-adult", "cord-compression-adult", "neckpain-adult", "palliative-care", "dementia-adult", "stroke-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">MND destroys upper and lower motor neurones: <b>weakness, wasting, fasciculations and brisk reflexes together</b>, with normal sensation. It is progressive and fatal, but good planning greatly improves life ${r(1)} ${LB.exp("CLINICAL PATTERN STANDARD")}.</p>
<div class="glance">
<div><h4>Early signs</h4><p>Clumsy hands, tripping, slurred speech, choking, tongue twitching, cramps, unexplained breathlessness, morning headache or sleepiness ${r(1)}.</p></div>
<div><h4>Refer</h4><p>To neurology <b>without delay</b>, naming MND in the letter ${r(1)}.</p></div>
<div><h4>Plan early</h4><p>Gastrostomy discussion early; breathing checks; non-invasive ventilation when breathing weakens; communication aids; advance care planning ${r(1)}.</p></div>
<div><h4>Symptoms</h4><p>Cramps: ${dr("quinine")} then ${dr("baclofen")}; drooling: antimuscarinic; breathlessness: opioids ± benzodiazepine ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Riluzole is <b>not on the NEML</b>; quinine, baclofen, glycopyrrolate injection, morphine and benzodiazepines are ${r(2)}. Gastrostomy and NIV are available only at referral hospitals — discuss early with the patient and family ${LB.loc()}. Link with the palliative care team: ${P("palliative-care", "Palliative care")}.</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Type", "Features"], [
["Amyotrophic lateral sclerosis (ALS)", "Upper + lower motor neurone signs; commonest " + LB.exp("STANDARD")],
["Progressive bulbar palsy", "Speech and swallowing first " + r(1)],
["Progressive muscular atrophy", "Lower motor neurone only " + LB.exp("STANDARD")],
["Primary lateral sclerosis", "Upper motor neurone only, slower " + LB.exp("STANDARD")],
["MND with frontotemporal dementia", "Behaviour change, emotional lability " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("MND", [F.s("Degeneration of motor neurones in cortex, brainstem and spinal cord"), F.a, F.s("Upper (stiff, brisk reflexes) + lower (wasting, fasciculation) signs"), F.a, F.e("Weakness of limbs, bulbar and breathing muscles")])} <p>${LB.exp("STANDARD")}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG42", "Local reality", "This guide"], [
["Riluzole", "Recommended for ALS", "Not on NEML", "Discuss with neurologist; cost/supply " + r(1) + " " + r(2)],
["NIV", "Offer for respiratory impairment", "Limited machines", "Discuss early; referral hospital " + r(1) + " " + LB.loc()],
["Gastrostomy", "Discuss early; avoid late placement", "Endoscopy at referral hospitals", "Plan before weight loss and breathing decline " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Limb onset: weak grip, wasted hand muscles, foot drop, falls ${r(1)}.</li>
<li>Bulbar onset: slurred speech, choking, drooling, tongue wasting and fasciculation ${r(1)}.</li>
<li>Muscle cramps, twitching, stiffness ${r(1)}.</li>
<li>Breathing: breathlessness on exertion or lying flat, morning headache, daytime sleepiness, poor cough ${r(1)}.</li>
<li>Cognitive/behavioural change, emotional lability ${r(1)}.</li>
<li><b>Not typical</b>: sensory loss, bladder involvement early, eye movement weakness — think of other causes ${LB.exp("STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 61-year-old farmer from Lhuentse has had 8 months of weakness in his right hand and now trips on his left foot. Wasted hand muscles, fasciculations in both arms and the tongue, brisk reflexes, normal sensation. <b>Suspected MND</b>: urgent neurology referral naming MND; exclude cervical myelopathy on MRI; begin planning swallowing and breathing reviews ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Cervical myelopathy / radiculopathy", "Sensory signs, neck pain, MRI " + P("neckpain-adult", "Neck pain")],
["Myasthenia gravis", "Fatigable, eyes involved, no wasting " + P("myasthenia-adult", "Myasthenia")],
["Multifocal motor neuropathy, CIDP", "Nerve studies; treatable " + P("neuropathy-adult", "Neuropathy")],
["Thyrotoxic myopathy, inclusion body myositis", "Blood tests, CK, biopsy " + LB.exp("STANDARD")],
["Post-polio syndrome", "Old polio " + P("polio-afp", "Polio")],
["Brainstem stroke or tumour", "Sudden or other signs " + P("stroke-adult", "Stroke")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>MRI brain/cervical spine to exclude structural causes ${LB.exp("STANDARD")}.</li>
<li>Nerve conduction studies and EMG (specialist) ${LB.exp("STANDARD")}.</li>
<li>Bloods: CK, thyroid, calcium, B12, HIV, protein electrophoresis ${LB.exp("STANDARD")}.</li>
<li>Breathing: symptoms, vital capacity/SNIP where available, oxygen saturation, blood gases ${r(1)} ${LB.exp("TESTS STANDARD")}.</li>
<li>Weight and swallowing assessment at diagnosis and each review ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "MND care-needs helper", html: `<div class="calc" data-calc="mndcheck"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Disease-modifying</h3>
<ul><li>Riluzole for ALS where obtainable (neurologist) ${r(1)}.</li></ul>
<h3>Symptoms ${r(1)}</h3>
<ul>
<li>Cramps: ${dr("quinine")} first; then ${dr("baclofen")}; then tizanidine, dantrolene or ${dr("gabapentin")}.</li>
<li>Spasticity: baclofen, tizanidine, dantrolene or gabapentin; physiotherapy, orthoses without delay.</li>
<li>Drooling: posture, suction, antimuscarinic (e.g. ${dr("amitriptyline")} or atropine drops); glycopyrronium if cognitive impairment ${LB.exp("EXAMPLES STANDARD")}.</li>
<li>Breathlessness: treat infection and secretions; ${dr("morphine")} for breathlessness; benzodiazepine if anxiety (${dr("lorazepam")}) ${r(1)}.</li>
<li>Ineffective cough: breath stacking, manual assisted cough; mechanical cough assist if available.</li>
</ul>
<h3>Nutrition ${r(1)}</h3>
<ul><li>Swallow assessment, texture-modified food, supplements; discuss gastrostomy <b>early</b> and repeatedly; late gastrostomy carries more risk.</li></ul>
<h3>Breathing ${r(1)}</h3>
<ul><li>Offer non-invasive ventilation for respiratory impairment — improves symptoms and prolongs life; urgent NIV if worsening.</li></ul>
<h3>Communication and planning ${r(1)}</h3>
<ul><li>Speech therapy, communication aids; psychological and carer support; advance care planning including NIV and gastrostomy wishes and place of death ${P("palliative-care", "Palliative care")}.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
["Riluzole", "ALS " + r(1), "Not listed " + r(2)],
[dr("quinine"), "Cramps, first-line " + r(1), "300 mg tablet"],
[dr("baclofen"), "Cramps (2nd line), spasticity " + r(1), "10 mg tablet"],
["Glycopyrronium", "Drooling with cognitive impairment " + r(1), "Glycopyrrolate 0.2 mg/mL injection"],
[dr("morphine"), "Breathlessness " + r(1), "Tablet, injection"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>With frontotemporal dementia:</b> capacity assessment before gastrostomy decisions; carers' support ${r(1)}.</li><li><b>Young adults or family history:</b> genetic forms — specialist ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Choking and weight loss but refuses gastrostomy", "Respect choice; texture changes, supplements; revisit regularly " + r(1)],
["Morning headache and sleepiness", "Nocturnal hypoventilation — refer for NIV " + r(1)],
["Chest infection in advanced MND", "Treat reversible cause; follow advance care plan " + r(1)],
["Family asks for 'tonic' injections", "Explain no benefit; focus on supported care"]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Aspiration pneumonia, malnutrition, respiratory failure, falls, contractures, depression, carer burnout ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Multidisciplinary review every 2–3 months: weight, swallow, breathing, cough, mobility, mood, cognition, communication ${r(1)} ${LB.exp("INTERVAL STANDARD")}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Progressive painless weakness + wasting/fasciculation", [F.s("Normal sensation? Mixed UMN + LMN signs?"), F.a, F.s("Refer neurology naming MND; MRI to exclude myelopathy"), F.a, F.e("MDT: swallowing → gastrostomy; breathing → NIV; symptoms; advance care plan")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Late gastrostomy", "Higher risk procedure", "Discuss early " + r(1)],
["Missing nocturnal hypoventilation", "Avoidable symptoms and death", "Ask about morning headache, sleepiness " + r(1)],
["Labelling bulbar MND as stroke", "Delay", "Progressive course, tongue fasciculation"],
["No advance care plan", "Crisis decisions", "Plan from diagnosis " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Combination of signs suggesting MND?", "Upper and lower motor neurone signs together (wasting, fasciculation, brisk reflexes) with normal sensation.")}
${qa("Intern/MO", "First-line drug for cramps in MND (NICE)?", "Quinine; baclofen second-line.")}
${qa("Registrar", "Signs of respiratory impairment to ask about?", "Breathlessness lying flat, morning headache, daytime sleepiness, weak cough.")}
${qa("Specialist", "Which treatment prolongs life in MND with respiratory impairment?", "Non-invasive ventilation (and riluzole modestly in ALS).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Motor neurone disease: assessment and management (NG42). <a href="https://www.nice.org.uk/guidance/ng42" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG42", "<span class='pass'>Read</span>", "§1.1, 1.8–1.15, 28 Nov 2026"], ["Diagnostic criteria, investigations", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
