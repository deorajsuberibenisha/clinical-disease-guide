/* Thiamine deficiency: beriberi and Wernicke encephalopathy (WHO 1999, NEMF) */
registerPage({
id: "thiamine-adult",
title: "Thiamine Deficiency: Beriberi & Wernicke",
subtitle: "Unexplained heart failure or neuropathy in a polished-rice eater, an alcohol-dependent patient who is confused, or a sick breastfed infant: give thiamine now — it is cheap, safe and life-saving",
age: "Adults, adolescents & infants", specs: ["medicine", "neuro", "paeds", "ph"],
keywords: ["thiamine", "vitamin B1", "beriberi", "wet beriberi", "dry beriberi", "infantile beriberi", "Wernicke encephalopathy", "Korsakoff", "shoshin", "polished rice", "monastic school outbreak", "refeeding", "hyperemesis"],
related: ["alcohol-adult", "hyperemesis-preg", "hf-adult", "sam-child", "ftt-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Wet</h4><p>High-output heart failure, oedema, warm peripheries.</p></div>
<div><h4>Dry</h4><p>Symmetrical neuropathy, burning feet, foot drop.</p></div>
<div><h4>Wernicke</h4><p>Confusion, ataxia, eye signs — any one is enough to treat.</p></div>
<div><h4>Treat</h4><p>${dr("thiamine")} IV/IM now, before glucose.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Outbreaks of beriberi-like neuropathy and heart failure have been reported among young monks and nuns in monastic institutions in Bhutan eating mainly polished rice. Thiamine (oral and injection) is on the NEML. Every institution with a rice-dominant diet should diversify meals and supplement during outbreaks. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Forms", html: `${tbl(["Form", "Who", "Features"], [["Wet beriberi", "Adolescents/adults on polished rice, alcohol", "Breathlessness, oedema, tachycardia, raised JVP, bounding pulses; shoshin = acute cardiovascular collapse with lactic acidosis"], ["Dry beriberi", "Same", "Sensorimotor neuropathy, calf tenderness, absent ankle jerks"], ["Infantile", "Breastfed infants 2–6 months of deficient mothers", "Hoarse/absent cry, vomiting, restlessness, heart failure, sudden death"], ["Wernicke–Korsakoff", "Alcohol, hyperemesis, malnutrition, bariatric", "Confusion, ataxia, nystagmus/ophthalmoplegia; memory loss"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Thiamine", [F.s("Co-factor for glucose metabolism (pyruvate dehydrogenase)"), F.a, F.s("Body stores last only 2–3 weeks"), F.e("Energy failure in heart and nerves; glucose load precipitates crisis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "NEMF", "UK practice (RCP)", "This guide"], [["Wernicke dose", "100 mg IV then 50–100 mg daily", "200–500 mg IV three times daily", "High dose IV where available " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<h3>The typical patient</h3><p>Several 14–17-year-old novice monks in a monastic school develop leg swelling, breathlessness and numb, weak legs; diet mostly polished rice. <b>Beriberi outbreak</b>: thiamine 100 mg IV/IM for those with heart failure, oral thiamine for all residents, diet change, report to district health office.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Guillain–Barré", "Rapid ascending weakness, areflexia, CSF protein"], ["Other heart failure", "No dietary risk, no response to thiamine"], ["B12 deficiency, diabetes neuropathy", "Labs"], ["Alcohol intoxication", "Wernicke often missed — treat anyway"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Clinical diagnosis; response to thiamine is diagnostic. ECG, chest X-ray, echo (high output), lactate; blood thiamine if available (before treatment).</p>` },
{ id: "staging", title: "Treatment tool", html: `<div class="calc" data-calc="thiaminecalc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Thiamine immediately on suspicion; IV for wet beriberi, shoshin and Wernicke.</li><li>Infant: treat infant and mother; continue breastfeeding.</li><li>Heart failure supportive care; cautious diuretics.</li><li>Outbreak: supplement all at risk; diet diversification (parboiled/red rice, pulses, eggs, meat).</li><li>Always give thiamine before glucose in alcohol/malnutrition/hyperemesis.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("thiamine"), "100–500 mg IV (by form)", "Then oral"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Hyperemesis gravidarum: thiamine 100 mg daily — Wernicke is a preventable cause of maternal death and disability.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Infant collapses with heart failure, mother eats polished rice", "Thiamine IV/IM immediately — dramatic recovery within hours"]])}` },
{ id: "complications", title: "Complications", html: `<p>Cardiogenic shock, sudden death, Korsakoff amnesia, permanent neuropathy.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Neuropathy improves over months; diet counselling.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Dry beriberi", src: "images/beriberi-dry.jpg", mod: "Historical photograph", ctx: "Dry beriberi", loc: "Legs", find: "Wasting and paralysis", interp: "Neuropathy from thiamine deficiency", by: "W. Hamilton Jefferys", page: "https://commons.wikimedia.org/wiki/File:Late_stage_of_paralysis_with_atrophy_in_dry_beriberi.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected thiamine deficiency", [F.s("Thiamine now (IV if cardiac/Wernicke)"), F.a, F.s("Then glucose/feeding"), F.a, F.ok("Diet change; screen others")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Glucose before thiamine", "Precipitates Wernicke", "Thiamine first"], ["Missing outbreak", "More deaths", "Ask about diet and others affected"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Classic triad of Wernicke encephalopathy?", "Confusion, ataxia, ophthalmoplegia/nystagmus.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. Thiamine deficiency and its prevention and control in major emergencies. WHO/NHD/99.13. Geneva: WHO; 1999. <a href="https://www.who.int/publications/i/item/WHO-NHD-99.13" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["NEML thiamine", "<span class='pass'>Checked</span>", "Listed"]], "qc")}` }
]
});
