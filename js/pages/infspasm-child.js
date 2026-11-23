/* Infantile spasms (West syndrome) — UKISS, ICISS, AAN/CNS, ILAE */
registerPage({
id: "infspasm-child",
title: "Infantile Spasms (West Syndrome)",
subtitle: "Clusters of sudden jerks on waking in a baby with stalled development: get an EEG within days, start high-dose prednisolone (or vigabatrin for tuberous sclerosis) without delay, and find the cause",
age: "Infants 3–12 months (up to 2 years)", specs: ["paeds", "neuro", "picu"],
keywords: ["infantile spasms", "West syndrome", "hypsarrhythmia", "epileptic spasms", "prednisolone", "ACTH", "vigabatrin", "tuberous sclerosis", "developmental regression", "UKISS", "ICISS"],
related: ["epilepsy-child", "neoseizure-child", "asphyxia-child", "febsz-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">An epileptic encephalopathy: every week of delay worsens development. Parents often think the spasms are colic or startle.</p>
<div class="glance">
<div><h4>Triad</h4><p>Spasms in clusters + hypsarrhythmia on EEG + developmental arrest/regression.</p></div>
<div><h4>First line</h4><p>${dr("prednisolone")} 40 mg/day (UKISS) or ACTH.</p></div>
<div><h4>TSC</h4><p>${dr("vigabatrin")} first.</p></div>
<div><h4>Response</h4><p>Spasm-free + EEG at 2 weeks.</p></div>
</div>
${box("bt", "Bhutan note", `<p>EEG and paediatric neurology are at JDWNRH. ACTH and vigabatrin are not on the NEML; high-dose prednisolone (on NEML) is effective first line and should be started promptly after EEG confirmation — or on strong clinical suspicion if EEG will be delayed (specialist advice). ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Group", "Examples"], [["Structural-acquired", "HIE, neonatal stroke, meningitis, hypoglycaemic brain injury"], ["Structural-congenital", "Tuberous sclerosis, cortical malformations"], ["Genetic", "Down syndrome, CDKL5, ARX, STXBP1"], ["Metabolic", "PKU, biotinidase, pyridoxine dependency"], ["Unknown", "About a third"]])}${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("West syndrome", [F.s("Diffuse brain dysfunction in infancy"), F.a, F.s("Chaotic high-voltage EEG (hypsarrhythmia)"), F.e("Spasms + developmental regression")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "UKISS/ICISS", "US practice", "This guide"], [["First line", "Prednisolone or ACTH ± vigabatrin", "ACTH preferred, prednisolone accepted", "Prednisolone (available) " + LB.loc()], ["Combined therapy", "Better early response (ICISS), same long-term development", "Variable", "Add vigabatrin if available"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Brief symmetrical flexion (jack-knife) or extension of trunk/limbs, often in clusters on waking; may cry between spasms.</li><li>Loss of social smile, visual inattention, stalled motor skills.</li><li>Examine skin with Wood's lamp (ash-leaf macules), head circumference, dysmorphism, eyes.</li></ul><h3>The typical patient</h3><p>A 6-month-old (7 kg) in Gelephu, born after a difficult delivery, has clusters of 10–20 head nods with arm flexion on waking and has stopped smiling. <b>Probable infantile spasms</b>: video the episodes, urgent EEG, then prednisolone 10 mg four times daily; MRI and metabolic screen.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Colic", "Crying without stereotyped clusters"], ["Benign myoclonus of infancy", "Normal EEG and development"], ["Reflux (Sandifer)", "After feeds, arching"], ["Startle/hyperekplexia", "Triggered by stimuli"]])}` },
{ id: "invest", title: "Investigations", html: `<p>EEG (sleep and wake); MRI brain; Wood's lamp, echo/renal ultrasound if TSC suspected; metabolic screen; genetic testing; glucose, calcium, magnesium; pyridoxine trial in selected cases.</p>` },
{ id: "staging", title: "Treatment tool", html: `<div class="calc" data-calc="infspasm"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Prednisolone 40 mg/day × 2 weeks (60 mg if not responding at day 7), taper over 15 days; or ACTH.</li><li>Vigabatrin first line in TSC; add to steroids where available (ICISS).</li><li>Monitor BP, glucose, weight, infections; gastric protection.</li><li>No response at 2 weeks: switch class; then ketogenic diet, topiramate, valproate; surgery for focal lesions.</li><li>Early developmental therapy; family support.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("prednisolone"), "40–60 mg/day", "UKISS"], [dr("vigabatrin"), "100–150 mg/kg/day", "Not on NEML"], [dr("acth"), "Tetracosactide 0.5 mg IM alternate days", "Not on NEML"], [dr("valproate"), "20–40 mg/kg/day", "Second line"], [dr("levetiracetam"), "40–60 mg/kg/day", "Adjunct"]])}` },
{ id: "populations", title: "Down syndrome", html: `<p>Spasms in Down syndrome respond well to early treatment — do not attribute regression to the syndrome.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No EEG for weeks", "Video, specialist phone advice; start prednisolone if clinically convincing"], ["Hypertension on steroids", "Amlodipine; continue course if possible"]])}` },
{ id: "complications", title: "Complications", html: `<p>Intellectual disability, autism, Lennox–Gastaut syndrome; treatment: infection, hypertension, visual field loss (vigabatrin).</p>` },
{ id: "followup", title: "Follow-up", html: `<p>EEG at 2 weeks; neurodevelopmental follow-up; visual fields if on vigabatrin.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Hypsarrhythmia", src: "images/hypsarrhythmia.png", mod: "EEG", ctx: "Infantile spasms", loc: "All channels", find: "Chaotic, high-voltage slow waves and multifocal spikes", signs: "Hypsarrhythmia", interp: "With spasms = West syndrome; treat urgently", by: "Ralphelg", page: "https://commons.wikimedia.org/wiki/File:Hypsarrhythmia.png", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Clusters of spasms", [F.s("Video + urgent EEG"), F.a, F.d("TSC?"), F.a, F.b([["Yes", F.e("Vigabatrin")], ["No", F.ok("Prednisolone ± vigabatrin")]]), F.a, F.ok("Review at 2 weeks: clinical + EEG")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Calling spasms colic", "Delay, worse outcome", "Ask for a video"], ["Low-dose steroids", "Poor response", "UKISS doses"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Triad of West syndrome?", "Spasms, hypsarrhythmia, developmental regression.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">O'Callaghan FJK, Edwards SW, Alber FD, et al. Safety and effectiveness of hormonal treatment versus hormonal treatment with vigabatrin for infantile spasms (ICISS). Lancet Neurol. 2017;16:33-42. <a href="https://doi.org/10.1016/S1474-4422(16)30294-0" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Lux AL, Edwards SW, Hancock E, et al. The United Kingdom Infantile Spasms Study (UKISS). Lancet. 2004;364:1773-1778.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
