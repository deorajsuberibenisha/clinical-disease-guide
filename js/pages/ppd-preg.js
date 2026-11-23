/* Postpartum depression and postpartum psychosis (NICE CG192, WHO mhGAP, EPDS) */
registerPage({
id: "ppd-preg",
title: "Postpartum Depression & Postpartum Psychosis",
subtitle: "Screen every mother with the EPDS, ask directly about self-harm, treat depression with talking therapy and sertraline or fluoxetine while breastfeeding continues, and treat postpartum psychosis as an emergency",
age: "Pregnant & postpartum women", specs: ["psych", "obg"],
keywords: ["postpartum depression", "postnatal depression", "perinatal depression", "EPDS", "Edinburgh Postnatal Depression Scale", "postpartum psychosis", "baby blues", "sertraline breastfeeding", "suicide postpartum", "perinatal mental health"],
related: ["depression-adult", "psychosis-adult", "anaemia-preg", "thyroid-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Blues</h4><p>Days 3–10, mild, resolves by 2 weeks — reassure.</p></div>
<div><h4>Depression</h4><p>EPDS 13+, 2+ weeks: therapy ± ${dr("fluoxetine")}/sertraline.</p></div>
<div><h4>Psychosis</h4><p>Confusion, delusions in first weeks → emergency admission.</p></div>
<div><h4>Ask</h4><p>Self-harm and thoughts of harming the baby.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Psychiatric services at JDWNRH and regional hospitals; community health workers and MCH clinics can screen with EPDS. Fluoxetine is on the NEML; sertraline is not. Suicide is a leading cause of death in young Bhutanese women — always ask. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Spectrum", html: `${tbl(["Condition", "Frequency", "Features"], [["Baby blues", "Up to 80%", "Tearful, labile, days 3–10, self-limiting"], ["Postnatal depression", "10–15%", "Low mood, anhedonia, guilt, anxiety, sleep beyond baby's needs, over 2 weeks"], ["Postpartum psychosis", "1–2 per 1000", "Onset days–2 weeks: confusion, mania, delusions about baby; bipolar risk"]])}${r(1)}` },
{ id: "patho", title: "Risk factors", html: `${F.chart("Risk", [F.s("Past depression/bipolar, family history"), F.a, F.s("Poor support, domestic violence, unplanned pregnancy, alcohol in the home"), F.e("Infant illness, traumatic birth, anaemia, thyroiditis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Preferred SSRI", "Available NEML", "This guide"], [["Breastfeeding", "Sertraline", "Fluoxetine", "Fluoxetine acceptable (monitor infant) " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Mood, anhedonia, sleep, appetite, guilt, anxiety, bonding, intrusive thoughts.</li><li>Risk: suicidal thoughts/plans, thoughts of harming the baby, neglect, psychosis.</li><li>Physical: anaemia, thyroid (postpartum thyroiditis), pain.</li></ul><h3>The typical patient</h3><p>A 28-year-old 6 weeks after delivery in Gelephu cries daily, cannot sleep even when the baby sleeps, feels a failure; EPDS 16, item 10 = 0. <b>Postnatal depression</b>: supportive counselling, family involvement, fluoxetine 20 mg (continue breastfeeding), check Hb and TSH, review in 2 weeks.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Baby blues", "Under 2 weeks, mild"], ["Thyroiditis", "TSH"], ["Anaemia", "Hb"], ["Bipolar disorder", "Elation, reduced need for sleep"]])}` },
{ id: "invest", title: "Investigations", html: `<p>EPDS; Hb, TSH; screen for domestic violence safely.</p>` },
{ id: "staging", title: "EPDS", html: `<div class="calc" data-calc="epds"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Mild: support, guided self-help, sleep protection, family help.</li><li>Moderate–severe: CBT/interpersonal therapy + SSRI (sertraline/fluoxetine), continue 6–12 months after remission.</li><li>Suicidal risk: urgent psychiatry; do not leave alone.</li><li>Postpartum psychosis: admission (with baby if possible), antipsychotic (olanzapine/quetiapine), mood stabiliser per specialist (avoid valproate in women of child-bearing potential).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("fluoxetine"), "20 mg daily", "Breastfeeding compatible"], [dr("olanzapine"), "5–10 mg", "Psychosis"], [dr("lorazepam"), "0.5–1 mg", "Short-term agitation"]])}` },
{ id: "populations", title: "Next pregnancy", html: `<p>History of psychosis or bipolar: specialist plan before birth; high recurrence.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Mother says the baby is evil", "Psychosis — emergency, ensure baby's safety"]])}` },
{ id: "complications", title: "Complications", html: `<p>Suicide, infanticide (rare), poor bonding, child development effects.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Every 2 weeks until improving; EPDS repeat.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Low mood after birth", [F.s("EPDS + risk questions"), F.a, F.d("Psychosis or active suicide risk?"), F.a, F.b([["Yes", F.e("Emergency psychiatry")], ["No", F.ok("Therapy ± SSRI, follow-up")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Stopping breastfeeding for SSRI", "Unnecessary harm", "SSRIs compatible"], ["Not asking about self-harm", "Missed risk", "Ask directly"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "EPDS cut-off for probable depression?", "13 or more (any positive item 10 needs risk assessment).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry. 1987;150:782-786. <a href="https://doi.org/10.1192/bjp.150.6.782" target="_blank" rel="noopener">doi</a></li><li id="ref-2">National Institute for Health and Care Excellence. Antenatal and postnatal mental health (CG192), updated 2020.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
