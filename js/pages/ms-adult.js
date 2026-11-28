/* Multiple sclerosis — adults. NEW disease (batch N-6, 28 Nov 2026).
   Sources read directly: NICE NG220 Multiple sclerosis in adults: management (2022, amended 2026; read in browser 28 Nov 2026: §1.1 common
   presentations — monocular visual loss with painful eye movement, diplopia, ascending sensory disturbance/weakness, Lhermitte's, progressive gait
   problems; usually <50, previous episodes, evolving >24 h, persisting days–weeks then improving, no fever; do not suspect MS for fatigue,
   depression, dizziness or vague sensory symptoms alone; exclude alternatives; neurologist diagnosis with 2024 revised McDonald criteria; CIS
   review; optic neuritis → neurologist; NMOSD by specialist. §1.4 exercise, stop smoking, vaccinations. §1.5 fatigue (other causes, self-management,
   exercise, no B12 injections, no hyperbaric O2; amantadine/modafinil/SSRI via specialist), spasticity (baclofen first line), oscillopsia
   (gabapentin then memantine), emotional lability (amitriptyline), pain (neuropathic per CG173). §1.7 relapse = new/worse symptoms >24 h without
   infection after ≥1 month stable; exclude UTI/chest infection; not if >3 months; treat if affects usual tasks, within 14 days; oral
   methylprednisolone 0.5 g daily × 5 days; IV 1 g daily 3–5 days if oral fails or admitted; no lower doses; no home supply; inform MS team.
   §1.8 DMTs by technology appraisals (interferon beta, glatiramer, teriflunomide, dimethyl fumarate, ocrelizumab, ofatumumab, cladribine etc.));
   NEML 2025 (methylprednisolone 500 mg injection only; baclofen 10 mg; gabapentin; amitriptyline; no DMTs, no oral methylprednisolone).
   Covers remaining-list item 'Multiple sclerosis'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "ms-adult",
title: "Multiple Sclerosis",
subtitle: "A young adult with painful loss of vision in one eye, double vision, numbness rising up the legs or Lhermitte's sign, evolving over days and then improving: exclude infection and mimics, refer to neurology, treat disabling relapses with high-dose methylprednisolone, and support long-term symptoms",
age: "Adult", specs: ["neuro", "rehab", "eye"],
keywords: ["multiple sclerosis", "MS", "demyelination", "optic neuritis", "Lhermitte's sign", "clinically isolated syndrome", "CIS", "MS relapse", "methylprednisolone MS", "McDonald criteria", "neuromyelitis optica", "NMOSD", "spasticity baclofen", "MS fatigue", "transverse myelitis", "internuclear ophthalmoplegia"],
related: ["neuropathy-adult", "cord-compression-adult", "redeye-adult", "stroke-adult", "depression-adult", "uti-adult", "brain-tumour-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">MS is an immune disease of the brain and spinal cord with episodes (relapses) of neurological loss that build up over days, last days–weeks and then improve — usually in adults under 50 ${r(1)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Painful monocular vision loss, double vision, ascending numbness/weakness, Lhermitte's sign, progressive gait/balance problems ${r(1)}.</p></div>
<div><h4>Do not suspect</h4><p>Fatigue, depression, dizziness or vague tingling alone ${r(1)}.</p></div>
<div><h4>Relapse</h4><p>New/worse symptoms &gt;24 h after ≥1 month stable, no infection. If disabling: methylprednisolone 0.5 g oral × 5 days or 1 g IV × 3–5 days, within 14 days ${r(1)}.</p></div>
<div><h4>Long-term</h4><p>Neurologist; disease-modifying therapy; exercise, stop smoking; manage fatigue, spasticity, bladder, pain, mood ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>MRI is at JDWNRH; disease-modifying drugs are <b>not on the NEML</b> and need referral or private supply ${r(2)} ${LB.loc()}. Methylprednisolone is available as 500 mg injection only — for relapses use IV 1 g daily (2 vials) on specialist advice ${r(1)} ${r(2)}. Always exclude TB, B12 deficiency, HIV and neurocysticercosis before labelling MS ${LB.exp("LOCAL MIMICS — STANDARD")}.</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Type", "Pattern"], [
["Clinically isolated syndrome (CIS)", "First episode (optic neuritis, myelitis, brainstem) — review for MS " + r(1)],
["Relapsing–remitting", "Relapses with recovery; most common at onset " + LB.exp("STANDARD")],
["Secondary progressive", "Gradual worsening after years of relapses " + LB.exp("STANDARD")],
["Primary progressive", "Progressive from onset (often walking) " + LB.exp("STANDARD")],
["NMOSD (different disease)", "Severe optic neuritis + long myelitis; aquaporin-4 antibodies; specialist " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("MS", [F.s("Immune attack on myelin in brain, optic nerves, spinal cord"), F.a, F.s("Plaques disseminated in time and space"), F.a, F.e("Relapses; axonal loss → progressive disability")])} <p>${LB.exp("STANDARD")}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG220", "Local reality", "This guide"], [
["Relapse steroid", "Oral methylprednisolone 0.5 g × 5 d", "Only IV 500 mg vials on NEML", "IV 1 g daily 3–5 d (NICE alternative) " + r(1) + " " + r(2)],
["DMTs", "Many options by TA", "None on NEML", "Neurologist; referral " + r(1) + " " + LB.loc()],
["Diagnosis", "2024 McDonald criteria, MRI", "MRI at JDWNRH", "Refer; exclude local mimics " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Optic neuritis: blurred/lost vision in one eye over days, pain on eye movement, colour desaturation ${r(1)} ${LB.exp("DETAILS STANDARD")}.</li>
<li>Brainstem: double vision, vertigo, facial numbness ${r(1)}.</li>
<li>Spinal cord: numbness or weakness rising from the feet, band-like sensation, bladder urgency, Lhermitte's sign ${r(1)}.</li>
<li>Progressive: worsening walking and balance over months–years ${r(1)}.</li>
<li>Other: fatigue (heat-sensitive), pain, cognitive change, mood, emotional lability ${r(1)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 27-year-old teacher from Paro has blurred vision in her right eye with pain on moving it, worse over 4 days. Two years ago her legs were numb for 3 weeks and recovered. No fever. <b>Probable optic neuritis with a previous episode — suspected MS</b>: ophthalmology confirmation, neurology referral, MRI brain and spine ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Neuromyelitis optica spectrum", "Severe optic neuritis, long-segment myelitis, AQP4 antibodies " + r(1)],
["B12 deficiency myelopathy", "Anaemia, posterior column loss " + P("anaemia-adult", "Anaemia")],
["Spinal cord compression, TB spine", "Back pain, sensory level " + P("cord-compression-adult", "Cord compression")],
["Neurocysticercosis, TB, HIV, syphilis", "Seizures, cysts, systemic features " + P("neurocysticercosis", "Neurocysticercosis")],
["Stroke / vasculitis / SLE", "Sudden onset, older, systemic disease " + P("stroke-adult", "Stroke")],
["Functional neurological disorder", "Inconsistent signs " + LB.exp("STANDARD")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>MRI brain and spinal cord (with contrast) ${r(1)} ${LB.exp("PROTOCOL STANDARD")}.</li>
<li>Bloods to exclude mimics: FBC, B12, thyroid, HIV, syphilis, ANA, aquaporin-4/MOG antibodies if NMOSD suspected ${LB.exp("STANDARD")}.</li>
<li>CSF oligoclonal bands (specialist) ${LB.exp("STANDARD")}.</li>
<li>In suspected relapse: urine dipstick/culture and chest assessment to exclude infection ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "MS relapse helper", html: `<div class="calc" data-calc="msrelapse"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Relapse ${r(1)}</h3>
<ul>
<li>Confirm: new/worse symptoms &gt;24 h, after ≥1 month stable, infection excluded, not &gt;3 months.</li>
<li>Treat only if it affects usual activities, ideally within 14 days: ${dr("methylprednisolone")} 0.5 g orally daily for 5 days, or 1 g IV daily for 3–5 days if oral fails, not tolerated or admission is needed. No lower doses; no home supplies.</li>
<li>Warn about insomnia, mood change, high glucose; tell the MS team (relapse frequency affects DMT choice).</li>
</ul>
<h3>Disease-modifying therapy</h3>
<ul><li>Neurologist decides (interferon beta, glatiramer, teriflunomide, dimethyl fumarate, ocrelizumab, ofatumumab, cladribine and others) ${r(1)}.</li></ul>
<h3>Symptoms ${r(1)}</h3>
<ul>
<li>Fatigue: look for other causes (sleep, infection, anaemia, thyroid, depression, drugs); self-management, exercise including yoga; no B12 injections for fatigue.</li>
<li>Spasticity: treat triggers (pressure sores, bladder/bowel, infection, pain); ${dr("baclofen")} first-line; physiotherapy.</li>
<li>Oscillopsia: ${dr("gabapentin")}, then memantine. Emotional lability: ${dr("amitriptyline")}. Neuropathic pain: as in ${P("neuropathy-adult", "Neuropathy")}.</li>
<li>Exercise, stop smoking, vaccinations; mood and cognition review.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("methylprednisolone"), "Relapse: 0.5 g oral × 5 d or 1 g IV × 3–5 d " + r(1), "500 mg injection only"],
[dr("baclofen"), "Spasticity, first-line " + r(1), "10 mg tablet"],
[dr("gabapentin"), "Oscillopsia, neuropathic pain " + r(1), "300 mg capsule"],
[dr("amitriptyline"), "Emotional lability, pain " + r(1), "25 mg tablet"],
["Disease-modifying therapies", "Neurologist " + r(1), "Not listed " + r(2)]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> relapses fall in pregnancy and rise after delivery; DMT plans with neurologist before conception ${LB.exp("STANDARD")}.</li><li><b>Diabetes:</b> high-dose steroids worsen glucose — monitor ${r(1)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["'Relapse' with fever and burning urine", "Pseudo-relapse from UTI — treat infection, no steroids " + r(1) + " " + P("uti-adult", "UTI")],
["Symptoms for 4 months", "Not a relapse — progression; review " + r(1)],
["Patient asks for steroids at home 'just in case'", "Not recommended " + r(1)],
["Very severe optic neuritis and myelitis", "Think NMOSD — urgent specialist " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Disability, falls, bladder dysfunction and UTIs, pressure ulcers, depression, cognitive impairment, osteoporosis (steroids, immobility) ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Comprehensive review at least yearly: mobility, bladder/bowel, fatigue, mood, cognition, pain, spasticity, vision, speech and swallowing, DMT safety (NG220 §1.6) ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("New neurological symptoms in a young adult", [F.d("Focal, evolving &gt;24 h, no fever?"), F.a, F.b([["Yes", F.s("Exclude mimics; refer neurology; MRI")], ["No / vague only", F.s("Do not suspect MS; look for other causes")]]), F.a, F.e("Relapse disabling? → methylprednisolone within 14 days; MS team")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Steroids for a pseudo-relapse", "Infection worsens", "Check urine/chest first " + r(1)],
["Low-dose prednisolone for relapse", "Ineffective", "Methylprednisolone 0.5–1 g " + r(1)],
["Diagnosing MS from vague symptoms", "Harmful label", "Need focal signs and MRI " + r(1)],
["Missing NMOSD", "Some MS drugs worsen NMOSD", "AQP4 antibodies " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Definition of an MS relapse (NICE)?", "New or worse symptoms lasting >24 h without infection, after at least 1 month of stability.")}
${qa("Intern/MO", "Relapse treatment dose?", "Oral methylprednisolone 0.5 g daily for 5 days (or IV 1 g daily for 3–5 days).")}
${qa("Registrar", "First-line drug for spasticity in MS?", "Oral baclofen.")}
${qa("Specialist", "Which criteria are used to diagnose MS?", "The 2024 revised McDonald criteria with clinical, MRI and laboratory findings.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Multiple sclerosis in adults: management (NG220, 2022; amended 2026). <a href="https://www.nice.org.uk/guidance/ng220" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG220", "<span class='pass'>Read</span>", "§1.1, 1.4, 1.5, 1.7, 1.8"], ["Types, investigations", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
