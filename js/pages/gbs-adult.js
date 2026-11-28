/* Guillain–Barré syndrome — adults and children. NEW disease (batch N-3, 28 Nov 2026).
   Sources read directly: Leonhard SE, Mandarakas MR, Gondim FAA, et al. Diagnosis and management of Guillain–Barré syndrome in ten steps. Nat Rev
   Neurol 2019;15:671–683 (open access, PMC6821638 full text via Europe PMC, DOI verified): typical rapidly progressive bilateral weakness with
   reduced/absent reflexes, nadir within 2 weeks (reconsider if nadir < 24 h or progression > 4 weeks); atypical presentations incl. young children
   (pain, refusal to walk, irritability); variants (pure motor 70% in Bangladesh; Miller Fisher); NINDS criteria box with features casting doubt
   (marked asymmetry, bladder/bowel dysfunction at onset, CSF cells > 50, sensory level, hyper-reflexia, fever at onset, nadir < 24 h); CSF protein
   raised but may be normal early; nerve conduction may be normal early; differential list (cord compression, myelitis, infections, CIDP,
   hypokalaemia, porphyria, B1/B12 deficiency, toxins incl. organophosphates, myasthenia, botulism, polio); ICU criteria; imminent respiratory
   insufficiency — breathless at rest/talking, unable to count to 15, accessory muscles, VC < 15–20 mL/kg or < 1 L; 22% ventilated in week 1;
   EGRIS score (days onset–admission, facial/bulbar weakness, MRC sum) 0–2 = 4%, 3–4 = 24%, ≥ 5 = 65%; treat if unable to walk 10 m; IVIg within
   2 weeks or plasma exchange within 4 weeks; IVIg 0.4 g/kg daily × 5 days = plasma exchange 200–250 mL/kg in 5 sessions; no steroids (oral
   steroids harmful); children IVIg 2 g/kg over 5 days preferred to 2 days (fewer TRFs); monitoring; complications (DVT, pressure ulcers, pain,
   infections, dysautonomia, psychological); 40% no improvement in 4 weeks; TRF 6–10%; acute-onset CIDP ~5%; mortality 3–10%; ~80% walk at 6 months;
   relapse 2–5%; rehabilitation);
   Bhutan VPD integrated surveillance guideline 2018 ch. 4 (via polio-afp page: every child < 15 with acute flaccid paralysis reported and 2 stools);
   NEML 2025 (no intravenous immunoglobulin found — only anti-tetanus and anti-rabies immunoglobulins). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "gbs-adult",
title: "Guillain–Barré Syndrome",
subtitle: "Rapidly ascending weakness with lost reflexes after an infection: admit, measure breathing capacity repeatedly, give IVIg or plasma exchange if the patient cannot walk 10 metres, and watch for respiratory failure and blood-pressure swings",
age: "All ages", specs: ["neuro", "medicine", "emerg", "picu", "paeds"],
keywords: ["Guillain-Barré syndrome", "GBS", "acute inflammatory demyelinating polyneuropathy", "AIDP", "AMAN", "acute flaccid paralysis", "ascending paralysis", "areflexia", "Miller Fisher syndrome", "IVIg", "intravenous immunoglobulin", "plasma exchange", "EGRIS", "vital capacity", "single breath count", "CSF albuminocytological dissociation", "Campylobacter"],
related: ["polio-afp", "icp-child", "stroke-adult", "potassium-adult", "poisoning-adult", "thiamine-adult", "vte-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Guillain–Barré syndrome (GBS) is an immune attack on the peripheral nerves, often 1–6 weeks after a diarrhoeal or respiratory infection. Weakness spreads over days, reflexes disappear, and about 1 in 5 patients need a ventilator in the first week ${r(1)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Bilateral, rapidly progressive weakness (usually legs first) with reduced or absent reflexes; tingling, back or limb pain; facial or swallowing weakness ${r(1)}.</p></div>
<div><h4>Breathing</h4><p>Count to 15 in one breath; vital capacity &lt; 15–20 mL/kg or &lt; 1 L, or breathless talking → ICU. Calculate EGRIS ${r(1)}.</p></div>
<div><h4>Treat</h4><p>Cannot walk 10 m: <b>IVIg 0.4 g/kg daily for 5 days</b> (within 2 weeks) or <b>plasma exchange</b> (within 4 weeks). <b>No steroids</b> ${r(1)}.</p></div>
<div><h4>Children</h4><p>Any child under 15 with acute flaccid weakness is reported as AFP the same day with 2 stool samples ${r(2)}. See ${P("polio-afp", "AFP / polio")}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>There is no STG section on GBS. Nerve conduction studies and ICU ventilation are at JDWNRH — refer early, before breathing fails ${LB.loc()}. <b>Intravenous immunoglobulin was not found in the NEML 2025</b>; plasma exchange depends on blood-bank capacity — arrange through the referral hospital without delay ${r(3)} ${LB.loc()}. In children, GBS is also an AFP case for polio surveillance ${r(2)}.</p>`)}
` },

{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Trigger", "Infection 1–6 weeks before in most (Campylobacter diarrhoea, respiratory viruses, CMV, EBV, Zika); rarely vaccines or surgery " + r(1) + " " + LB.exp("TIMING STANDARD")],
["Course", "Progression to nadir within 2 weeks (usually), plateau days to months, then recovery; monophasic " + r(1)],
["Variants", "Sensorimotor (classic); pure motor (common in South Asia — 70% in Bangladesh); Miller Fisher (ophthalmoplegia, ataxia, areflexia); bilateral facial palsy; pharyngeal–cervical–brachial " + r(1)],
["Outcome", "About 80% walk independently at 6 months; mortality 3–10% (respiratory and cardiovascular); relapse 2–5% " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("GBS", [F.s("Infection (e.g. Campylobacter)"), F.a, F.s("Molecular mimicry: antibodies against nerve gangliosides"), F.a, F.s("Demyelination (AIDP) or axonal damage (AMAN)"), F.a, F.e("Weakness, areflexia, respiratory and autonomic failure")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "International consensus (Leonhard 2019)", "Local reality", "This guide"], [
["First treatment", "IVIg (easier) or plasma exchange — equal", "IVIg not on NEML; plasma exchange limited", "Whichever the referral hospital can give fastest " + r(1) + r(3) + " " + LB.loc()],
["Steroids", "Not effective; oral steroids harmful", "Sometimes still given", "Do not give " + r(1)],
["Children's IVIg schedule", "2 g/kg over 5 days preferred (fewer TRFs than 2 days)", "—", "Over 5 days " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Bilateral weakness, often starting in the legs and ascending; may be proximal, distal or start in the arms ${r(1)}.</li>
<li>Reduced or absent tendon reflexes in weak limbs ${r(1)}.</li>
<li>Tingling, back or limb pain (can come before weakness) ${r(1)}.</li>
<li>Cranial nerves: bilateral facial weakness, swallowing problems; eye-movement palsy in Miller Fisher ${r(1)}.</li>
<li>Autonomic: fast or slow heart, blood-pressure swings, urinary retention, ileus ${r(1)}.</li>
<li>Young children: pain, refusal to walk, irritability, unsteady gait ${r(1)}.</li>
</ul>
${box("red", "Features that cast doubt", `<ul><li>Marked persistent asymmetry; bladder or bowel dysfunction at onset; sensory level (spinal cord)</li><li>CSF cells over 50/µL; fever at onset; nadir within 24 hours; progression beyond 4 weeks</li><li>Hyper-reflexia, clonus, extensor plantars; altered consciousness</li></ul><p>${r(1)}</p>`)}
<h3>The typical patient</h3>
<p>A 34-year-old farmer from Dagana had diarrhoea 2 weeks ago; for 4 days his legs have become weak and now he cannot stand; reflexes are absent, he can count only to 12 in one breath. <b>GBS with threatened respiratory failure</b>: admit to an ICU-capable hospital, vital capacity every few hours, IVIg or plasma exchange, DVT prophylaxis ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Spinal cord compression / transverse myelitis", "Sensory level, early bladder problems, brisk reflexes later — urgent MRI " + r(1)],
["Hypokalaemic paralysis", "Low potassium; rapid recovery with replacement " + P("potassium-adult", "Potassium")],
["Polio / other AFP (children)", "Asymmetric, fever, no sensory loss " + P("polio-afp", "AFP")],
["Organophosphate poisoning (intermediate syndrome)", "Exposure history " + P("poisoning-adult", "Poisoning")],
["Snakebite (neurotoxic)", "Ptosis, bite history"],
["Myasthenia gravis, botulism", "Fatigable ptosis; descending weakness, dilated pupils"],
["Thiamine deficiency, porphyria, critical illness neuropathy", "Context " + P("thiamine-adult", "Thiamine")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Bedside breathing tests: single-breath count, vital capacity (spirometer), SpO₂, blood gas; repeat often ${r(1)}.</li>
<li>Potassium, glucose, CBC, creatinine, liver tests, CK ${r(1)}.</li>
<li><b>Lumbar puncture</b>: raised protein with normal cell count; may be normal in the first week ${r(1)}.</li>
<li>Nerve conduction studies (demyelinating or axonal); may be normal early ${r(1)}.</li>
<li>ECG and continuous monitoring for arrhythmia ${r(1)}.</li>
<li>MRI spine if a cord lesion is possible ${r(1)}.</li>
<li>Children under 15: 2 stool samples ≥ 24 h apart within 14 days for polio surveillance ${r(2)}.</li>
</ul>
` },

{ id: "staging", title: "Respiratory risk (EGRIS)", html: `<div class="calc" data-calc="egris"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Admit to ICU if</h3>
<p>Breathing distress or imminent respiratory failure, severe autonomic instability, severe swallowing problems or weak cough, rapid progression, or EGRIS 5 or more ${r(1)}.</p>
<h3>Immunotherapy</h3>
<ul>
<li>Indication: unable to walk 10 m independently; consider also in walkers with rapid progression, bulbar or autonomic problems ${r(1)}.</li>
<li><b>IVIg 0.4 g/kg daily for 5 days</b> (total 2 g/kg), started within 2 weeks of onset ${r(1)}.</li>
<li>Or <b>plasma exchange</b> 200–250 mL plasma/kg over 5 sessions, within 4 weeks ${r(1)}.</li>
<li>Do not combine plasma exchange followed by IVIg; <b>corticosteroids do not help</b> (oral steroids worsen outcome) ${r(1)}.</li>
<li>Treatment-related fluctuation (worsening after initial improvement, 6–10%): a repeat course is common practice ${r(1)}.</li>
</ul>
<h3>Supportive care</h3>
<ul>
<li>Vital capacity and swallowing checked regularly; early intubation before exhaustion ${r(1)}.</li>
<li>Cardiac monitoring; treat BP swings cautiously ${r(1)}.</li>
<li>DVT prophylaxis (${dr("enoxaparin")}), pressure-area care, eye care, bladder and bowel care ${r(1)} ${LB.exp("DOSE AS VTE PAGE")}.</li>
<li>Treat pain (neuropathic pain common); support communication — paralysed patients are fully aware ${r(1)}.</li>
<li>Early physiotherapy and rehabilitation ${r(1)}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Treatment", "Dose", "Note"], [
["Intravenous immunoglobulin (IVIg)", "0.4 g/kg daily × 5 days (child: 2 g/kg over 5 days) " + r(1), "Not found in NEML 2025 " + r(3)],
["Plasma exchange", "200–250 mL/kg in 5 sessions " + r(1), "Referral centre"],
[dr("enoxaparin"), "Prophylactic dose " + LB.exp("DOSE"), "Bed-bound patients"],
["Corticosteroids", "<b>Not recommended</b> " + r(1), "Oral steroids harmful"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children:</b> atypical presentations; AFP reporting; IVIg 2 g/kg over 5 days ${r(1)} ${r(2)}.</li><li><b>Pregnancy:</b> neither IVIg nor plasma exchange is contraindicated ${r(1)}.</li><li><b>Miller Fisher syndrome:</b> usually recovers without treatment; monitor for limb or breathing weakness ${r(1)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Weak patient at a district hospital, count to 15 failing", "Arrange transfer to ICU now with airway support; do not wait for LP " + r(1) + " " + LB.loc()],
["No IVIg available", "Plasma exchange at the referral centre; supportive care is still life-saving " + r(1)],
["Worse 3 weeks after IVIg", "TRF vs progression vs acute-onset CIDP — neurologist " + r(1)],
["Child with sudden floppy legs", "AFP report and stools, plus GBS work-up " + r(2)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Respiratory failure, aspiration pneumonia, arrhythmias and BP instability, DVT/PE, pressure ulcers, urinary retention and infection, neuropathic pain, depression and anxiety, long-term weakness and fatigue ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up and rehabilitation", html: `<ul><li>Rehabilitation for strength, walking and fatigue; recovery can continue for years ${r(1)}.</li><li>About 80% walk independently at 6 months ${r(1)}.</li><li>Relapse in 2–5%; acute-onset CIDP in about 5% ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No image used. The single-breath count and vital capacity at the bedside matter more than any scan.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Rapid bilateral weakness + areflexia", [F.s("Breathing check (count, VC), potassium, glucose"), F.a, F.d("Imminent respiratory failure or EGRIS ≥ 5?"), F.a, F.b([["Yes", F.e("ICU; prepare to intubate")], ["No", F.s("Ward with frequent VC checks")]]), F.a, F.d("Cannot walk 10 m?"), F.a, F.b([["Yes", F.e("IVIg 0.4 g/kg × 5 d or plasma exchange")], ["No", F.ok("Monitor; treat if progressing")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Relying on SpO₂", "Falls late in neuromuscular failure", "Measure VC / single-breath count " + r(1)],
["Waiting for a raised CSF protein", "Often normal in week 1", "Treat on clinical grounds " + r(1)],
["Giving steroids", "No benefit; harm with oral", "IVIg or plasma exchange " + r(1)],
["Missing a cord lesion", "Paralysis", "Sensory level → MRI " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Bedside sign of imminent respiratory failure in GBS?", "Unable to count to 15 in one breath; VC < 15–20 mL/kg or < 1 L.")}
${qa("Registrar", "IVIg dose for GBS?", "0.4 g/kg daily for 5 days (2 g/kg total).")}
${qa("Registrar", "Treatment window for IVIg vs plasma exchange?", "IVIg within 2 weeks; plasma exchange within 4 weeks of onset.")}
${qa("Specialist", "What is an EGRIS of 5?", "High risk (about 65%) of needing ventilation within a week.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Leonhard SE, Mandarakas MR, Gondim FAA, et al. Diagnosis and management of Guillain–Barré syndrome in ten steps. Nat Rev Neurol 2019;15:671–683. <a href="https://doi.org/10.1038/s41582-019-0250-9" target="_blank" rel="noopener">doi:10.1038/s41582-019-0250-9</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Integrated surveillance guideline for selected vaccine-preventable diseases, 2018 — chapter 4, AFP surveillance.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["GBS ten-steps consensus 2019", "<span class='pass'>Read</span>", "Full text, DOI verified"], ["EAN/PNS 2023 guideline", "<span class='unv'>Not read</span>", "Not open access"], ["NEML 2025", "<span class='flag'>Gap</span>", "No IVIg"], ["Bhutan STG", "<span class='unv'>No section</span>", "AFP surveillance via polio page"], ["Calculator", "<span class='pass'>New</span>", "egris"]], "qc")}` }
]
});
})();
