/* Dementia — adults. NEW disease (batch N-3, 28 Nov 2026).
   Sources read directly: NICE NG97 Dementia: assessment, management and support (2018; recommendations read in browser 28 Nov 2026 — history from the
   person and an informant; examination and blood/urine tests for reversible causes; validated brief instruments (10-point cognitive screener, 6CIT);
   a normal score does not exclude dementia; IQCODE/FAQ for informants; refer to memory/old-age psychiatry service after excluding delirium,
   depression, sensory impairment and anticholinergic drugs; rapidly progressive → neurology (CJD); structural imaging to exclude reversible causes
   and help subtype; no case finding outside trials; delirium vs dementia — CAM/OSLA, treat delirium first if unsure; AChE inhibitors (donepezil,
   galantamine, rivastigmine) for mild–moderate Alzheimer's; memantine for moderate (if AChE not tolerated) or severe, add-on in moderate/severe;
   Lewy body dementia — donepezil or rivastigmine; vascular dementia — only if comorbid AD/PD dementia/DLB; none for frontotemporal dementia;
   minimise anticholinergic burden; distress — assess causes (pain, delirium, care), psychosocial first; antipsychotics only for risk of harm or
   severe distress, lowest dose, shortest time, review every 6 weeks; antipsychotic sensitivity in DLB/PD dementia; no valproate for agitation;
   psychological treatment for mild–moderate depression/anxiety, no routine antidepressants; no melatonin for insomnia in AD; equal access to
   care for comorbidities; pain assessment);
   Bhutan 'Integrated community-based health screening and assessment questionnaire for older people' (Bhutan Medical Library, read: intrinsic
   capacity screen incl. memory decline; 3-word delayed recall after 3 minutes — fewer than 2 = risk of dementia; depression 2-question screen);
   NEML 2025 (haloperidol, risperidone listed; donepezil, rivastigmine, galantamine, memantine NOT found); Bhutan STG palliative section (delirium:
   low-dose haloperidol, benzodiazepines preferred in Parkinson's disease — via parkinsons-adult). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "dementia-adult",
title: "Dementia — Adults",
subtitle: "Memory and thinking decline that affects daily life: exclude delirium, depression, hearing and vision loss, thyroid, B12 and drug causes, confirm with a specialist, support the family, and treat distress with care rather than sedatives",
age: "Older adults", specs: ["neuro", "psych", "medicine", "rehab"],
keywords: ["dementia", "Alzheimer's disease", "vascular dementia", "Lewy body dementia", "frontotemporal dementia", "memory loss", "cognitive impairment", "forgetfulness", "confusion elderly", "behavioural and psychological symptoms of dementia", "BPSD", "agitation dementia", "donepezil", "memantine", "carer support", "three-word recall"],
related: ["parkinsons-adult", "depression-adult", "psychosis-adult", "stroke-adult", "thyroid-adult", "thiamine-adult", "palliative-care", "hipfx-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Dementia is a progressive decline in memory and other thinking skills that interferes with daily life. It is not a normal part of ageing. Before labelling it, look for treatable causes — <b>delirium, depression, hearing or vision loss, thyroid disease, B12 deficiency and medicines</b> ${r(1)}.</p>
<div class="glance">
<div><h4>Screen</h4><p>Bhutan older-people screen: remember 3 words, recall after 3 minutes — fewer than 2 = at risk ${r(2)}. Ask a family member too ${r(1)}.</p></div>
<div><h4>Exclude</h4><p>Delirium (sudden, fluctuating), depression, sensory loss, anticholinergic drugs; bloods and urine; imaging when unclear ${r(1)}.</p></div>
<div><h4>Support</h4><p>Information, carer support, safety, activities, treat other illnesses equally ${r(1)}.</p></div>
<div><h4>Distress</h4><p>Look for pain, infection, constipation, environment first; antipsychotics only for severe distress or risk, lowest dose, review every 6 weeks ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The national community screening for older people includes a memory question and a 3-word recall test ${r(2)}. There is no STG section on dementia; specialist assessment is with psychiatry and neurology at JDWNRH ${LB.loc()}. <b>Donepezil, rivastigmine, galantamine and memantine were not found in the NEML 2025</b> — care is mostly non-drug and family-based ${r(3)}. Families usually provide care at home; involve them from the start ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Type", "Typical features", "Medicine (if available)"], [
["Alzheimer's disease", "Gradual loss of recent memory, then language and orientation", "AChE inhibitor (mild–moderate); memantine (moderate–severe) " + r(1)],
["Vascular dementia", "Stepwise decline, stroke history, vascular risk factors", "Treat risk factors; AChE only if mixed with Alzheimer's " + r(1) + " — " + P("stroke-adult", "Stroke")],
["Lewy body dementia", "Fluctuating attention, visual hallucinations, parkinsonism, falls; very sensitive to antipsychotics", "Donepezil or rivastigmine " + r(1)],
["Parkinson's disease dementia", "Dementia after established PD", "Cholinesterase inhibitor — " + P("parkinsons-adult", "Parkinson's")],
["Frontotemporal dementia", "Younger, personality and behaviour change, language problems", "No AChE inhibitors or memantine " + r(1)],
["Reversible or contributing causes", "Hypothyroidism, B12 deficiency, depression, alcohol/thiamine, normal-pressure hydrocephalus, subdural haematoma, HIV, syphilis", "Treat the cause " + LB.exp("STANDARD LIST")]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Dementia", [F.s("Neurodegeneration (amyloid, tau, Lewy bodies) or vascular damage"), F.a, F.s("Loss of neurons and connections"), F.a, F.e("Memory, language, judgement and function decline; behaviour change")])}<p>Anticholinergic medicines (e.g. trihexyphenidyl, chlorpheniramine, amitriptyline, oxybutynin) worsen cognition — review them ${r(1)} ${LB.exp("EXAMPLES STANDARD")}.</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG97", "Bhutan", "This guide"], [
["Screening", "No case finding outside trials; assess when suspected", "3-word recall in community screening of older people", "Use the screen to prompt full assessment, not to diagnose " + r(1) + r(2)],
["Cognitive test", "10-point cognitive screener or 6CIT", "3-word recall", "Recall plus history from family " + r(1) + r(2)],
["Drugs", "AChE inhibitors and memantine by type and stage", "Not on NEML", "Specialist decision; non-drug care central " + r(1) + r(3)]
])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul>
<li><b>History from the person and a family member</b>: memory, repeating questions, getting lost, managing money, cooking, medicines; behaviour and mood; how fast it developed ${r(1)}.</li>
<li><b>Delirium?</b> Sudden onset, fluctuating attention, drowsiness or agitation — treat the cause first (infection, dehydration, drugs, retention, constipation, pain) ${r(1)}.</li>
<li>Depression screen (two questions); hearing and vision check ${r(1)} ${r(2)}.</li>
<li>Medicine review for anticholinergic and sedative drugs ${r(1)}.</li>
<li>Neurological examination: focal signs, parkinsonism, gait ${r(1)}.</li>
<li>Cognitive test: 3-word recall (Bhutan screen), or a validated brief tool (10-point cognitive screener, 6CIT); a normal score does not exclude dementia ${r(1)} ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 74-year-old woman from Paro is brought by her son: over 2 years she has been forgetting conversations, repeating questions and twice left the stove on; she remembers 1 of 3 words after 3 minutes. No sudden change, mood fair, no new medicines. <b>Probable dementia (Alzheimer's type)</b>: bloods and urine, hearing check, refer for specialist assessment; safety plan for cooking; support for the family ${r(1)} ${r(2)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Delirium", "Sudden onset, fluctuating attention, medical illness — treat first " + r(1)],
["Depression", "Low mood, 'don't know' answers, rapid onset " + P("depression-adult", "Depression")],
["Hearing or vision loss", "Mistaken for confusion " + r(1)],
["Hypothyroidism, B12 deficiency", "Tests " + P("thyroid-adult", "Thyroid")],
["Alcohol / Wernicke–Korsakoff", "Drinking history " + P("thiamine-adult", "Thiamine")],
["Chronic subdural haematoma", "Falls, headache, fluctuating, focal signs — CT"],
["Normal age-related forgetfulness", "No effect on daily function"]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Blood and urine tests to exclude reversible causes — CBC, glucose/HbA1c, electrolytes, calcium, kidney and liver tests, thyroid function, B12 and folate; urine test ${r(1)} ${LB.exp("TEST LIST STANDARD")}.</li>
<li>Consider HIV and syphilis serology where risk exists ${LB.exp("STANDARD")}.</li>
<li><b>Structural imaging</b> (CT or MRI) to exclude reversible causes and help with the type, unless dementia is well established and the type is clear ${r(1)}.</li>
<li>Rapidly progressive dementia: neurology referral (CJD and similar) ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Cognitive screen helper", html: `<div class="calc" data-calc="cogscreen"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Care and support (most important)</h3>
<ul>
<li>Explain the diagnosis with the person and family; plan care, finances and future decisions while the person can still take part ${r(1)}.</li>
<li>Personalised activities, routine, exercise, social contact, good lighting and hearing/vision aids ${r(1)}.</li>
<li>Safety at home: cooking, fire, wandering, medicines, driving ${LB.exp("STANDARD")}.</li>
<li>Carer support and respite; watch for carer stress ${r(1)}.</li>
<li>Equal access to treatment for other illnesses; assess pain regularly (people with dementia under-report pain) ${r(1)}.</li>
</ul>
<h3>Medicines (specialist, if available)</h3>
<ul>
<li>Mild–moderate Alzheimer's: donepezil, galantamine or rivastigmine; memantine for moderate (if AChE inhibitors unsuitable) or severe disease, or added to an AChE inhibitor ${r(1)}.</li>
<li>Lewy body dementia: donepezil or rivastigmine ${r(1)}.</li>
<li>Vascular dementia: control BP, diabetes, lipids, stop smoking; AChE inhibitors only if mixed ${r(1)}.</li>
<li>Stop or reduce anticholinergic and sedative medicines ${r(1)}.</li>
</ul>
<h3>Distress, agitation and psychosis</h3>
<ol>
<li>Look for the cause: pain, infection, constipation, urinary retention, hunger, noise, unfamiliar carers, delirium ${r(1)}.</li>
<li>Psychosocial and environmental measures first; personalised activities ${r(1)}.</li>
<li>Antipsychotic only if the person may harm themselves or others, or has severe distress from agitation, hallucinations or delusions: lowest dose (e.g. ${dr("risperidone")} 0.25–0.5 mg ${LB.exp("DOSE")}), shortest time, review every 6 weeks, stop if no clear benefit ${r(1)}.</li>
<li><b>Lewy body or Parkinson's dementia: avoid typical antipsychotics</b> — severe sensitivity reactions ${r(1)}.</li>
<li>No valproate for agitation; no routine antidepressants for mild–moderate depression (psychological approaches instead); no melatonin for insomnia in Alzheimer's — sleep hygiene, daylight, activity ${r(1)}.</li>
</ol>
<h3>Late stage</h3>
<p>Swallowing problems, weight loss, infections, immobility — palliative approach; see ${P("palliative-care", "Palliative care")}.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
["Donepezil / rivastigmine / galantamine", "Mild–moderate Alzheimer's; Lewy body (donepezil, rivastigmine) " + r(1), "Not found " + r(3)],
["Memantine", "Moderate–severe Alzheimer's " + r(1), "Not found " + r(3)],
[dr("risperidone"), "Severe distress or risk only; low dose; review 6-weekly " + r(1), "2 mg " + r(3)],
[dr("haloperidol"), "Avoid in Lewy body/Parkinson's dementia " + r(1), "Injection " + r(3)]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Young-onset (under 65):</b> specialist assessment; genetic causes in some ${r(1)}.</li><li><b>In hospital:</b> high delirium risk — familiar faces, glasses and hearing aids, avoid restraints and sedatives ${r(1)} ${LB.exp("STANDARD")}.</li><li><b>After hip fracture or surgery:</b> see ${P("hipfx-adult", "Hip fracture")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Suddenly more confused", "Delirium until proved otherwise — check infection, urine, constipation, drugs, glucose " + r(1)],
["Wandering at night", "Routine, daylight, activity, safe environment; avoid sedatives " + r(1)],
["Family asks for 'sleeping tablets'", "Explain risks; sleep hygiene and activities first " + r(1)],
["Lewy body patient given haloperidol becomes rigid", "Stop it; supportive care; urgent review " + r(1)],
["Carer exhausted", "Respite, family meeting, community health worker support " + r(1) + " " + LB.loc()]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Falls and fractures, delirium, infections (pneumonia, UTI), malnutrition and dehydration, pressure ulcers, swallowing problems, carer burnout; antipsychotic harms — stroke, falls, death ${r(1)} ${LB.exp("ANTIPSYCHOTIC HARMS STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Review at least yearly, and when needs change: cognition, function, mood, behaviour, carer wellbeing, medicines ${r(1)}.</li><li>Antipsychotics reviewed every 6 weeks ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Memory complaint in an older adult", [F.d("Sudden or fluctuating?"), F.a, F.b([["Yes", F.e("Delirium — find and treat the cause")], ["No", F.s("History from family; 3-word recall / brief test")]]), F.a, F.s("Depression, hearing/vision, drugs, bloods, urine; imaging if unclear"), F.a, F.ok("Specialist diagnosis and type; care plan; carer support")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling delirium 'dementia'", "Missed treatable illness", "Ask about sudden change " + r(1)],
["Normal test = no dementia", "False reassurance", "History from family matters " + r(1)],
["Sedatives for behaviour", "Falls, stroke, death", "Find the cause; psychosocial first " + r(1)],
["Antipsychotic in Lewy body dementia", "Severe reactions", "Avoid " + r(1)],
["Ignoring the carer", "Breakdown of care at home", "Support and respite " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Bhutan community dementia screen?", "Three unrelated words, recall after 3 minutes — fewer than 2 = risk of dementia.")}
${qa("Intern/MO", "How to tell delirium from dementia?", "Delirium is sudden and fluctuating with impaired attention; treat delirium first if unsure.")}
${qa("Registrar", "When are antipsychotics appropriate in dementia?", "Only for risk of harm or severe distress from agitation or psychosis — lowest dose, shortest time, review every 6 weeks.")}
${qa("Specialist", "Drug for mild–moderate Lewy body dementia?", "Donepezil or rivastigmine.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Dementia: assessment, management and support for people living with dementia and their carers (NG97). London: NICE; 2018. <a href="https://www.nice.org.uk/guidance/ng97" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Integrated community-based health screening and assessment questionnaire for older people.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG97", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Bhutan older-people screening tool", "<span class='pass'>Read</span>", "Library PDF"], ["NEML 2025", "<span class='flag'>Gap</span>", "No dementia drugs"], ["Test list, risperidone dose", "<span class='unv'>Standard practice</span>", "Marked"], ["Calculator", "<span class='pass'>New</span>", "cogscreen"]], "qc")}` }
]
});
})();
