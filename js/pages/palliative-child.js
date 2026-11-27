/* Palliative and end-of-life care — infants, children and young people. Batch E-14, 27 Nov 2026.
   Sources read: Basic Symptom Control in Paediatric Palliative Care 2024 (Jassal et al.) with APPM Master Formulary 6th edition (Together for Short
   Lives PDF: morphine starting doses by age band, breakthrough 1/10–1/6, MR and infusion conversion, oral:IV 3:1 evidence, dyspnoea 25–50% of pain
   dose, ideal body weight, lower starting doses for high-risk, laxative; midazolam seizure/agitation doses; glycopyrronium; hyoscine butylbromide;
   senna; ondansetron; paracetamol weight-based dosing); NICE NG61 End of life care for infants, children and young people (2016, updated 2019:
   shared decisions, named specialist, Advance Care Plan, preferred place of care/death, signs of dying, non-drug pain measures, neuropathic pain,
   agitation, breathlessness, hydration, after death and bereavement); adult palliative-care page (Bhutan STG ch. 18 — no child doses); NEML 2025.
   Not read: WHO 2018 'Integrating palliative care into paediatrics', WHO 2020 chronic pain in children dosing annexes. WHO 2012 child pain guideline
   was withdrawn — not used. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "palliative-child",
title: "Palliative and end-of-life care — infants, children and young people",
subtitle: "Plan care with the child and family, relieve pain with weight- and age-based morphine started low and titrated, always give a laxative, anticipate seizures, secretions and agitation, and support the family before and after death",
age: "Neonates, children and young people", specs: ["paeds", "neo", "onc", "nicu", "picu"],
keywords: ["paediatric palliative care", "children palliative care", "end of life care child", "life-limiting condition", "advance care plan", "morphine child dose", "oral morphine children", "breakthrough pain child", "opioid conversion child", "midazolam buccal end of life", "terminal seizures", "noisy breathing child", "glycopyrronium", "hyoscine butylbromide", "constipation opioid child", "senna child", "neonatal palliative care", "bereavement", "place of death"],
related: ["palliative-care", "sepsis-child", "epilepsy-child", "statusep-child", "hiv-child", "ckd-child", "devdelay-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Children's palliative care starts when a life-limiting condition is diagnosed and runs alongside disease treatment. Children and parents have a central role in decisions; every child should have a named lead specialist and an Advance Care Plan ${r(2)}.</p>
<div class="glance">
<div><h4>Pain</h4><p>Paracetamol by weight; for moderate–severe pain, oral morphine at an age-band starting dose, then titrate; breakthrough 1/10–1/6 of the daily dose ${r(1)}.</p></div>
<div><h4>Always</h4><p>A regular stimulant laxative (senna) with regular opioids; non-drug comfort measures ${r(1)} ${r(2)}.</p></div>
<div><h4>Anticipate</h4><p>Seizures (buccal midazolam), noisy secretions (glycopyrronium), agitation, breathlessness (morphine 25–50% of pain dose) ${r(1)}.</p></div>
<div><h4>Family</h4><p>Agree preferred place of care and death; support siblings; explain practical steps after death; bereavement support ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG palliative chapter has no doses for children ${r(4)}. NEML morphine forms are <b>10 mg tablets, 15 mg extended-release tablets and 10 mg/mL injection — there is no oral morphine solution</b>, so small paediatric oral doses need a pharmacy-prepared liquid or a careful plan with the paediatric and palliative team ${r(5)} ${LB.loc()}. NEML also has midazolam injection (used buccally in many settings), glycopyrrolate injection, senna 15 mg, lactulose, ondansetron, diazepam and paracetamol syrup and suppositories ${r(5)}. For adults see ${P("palliative-care", "palliative care (adults)")}.</p>`)}
` },
{ id: "overview", title: "Who needs it", html: `${tbl(["Group", "Examples"], [
["Life-limiting conditions", "Cancer, severe neurological impairment, complex congenital heart disease, end-stage kidney disease, HIV with advanced disease " + r(1) + " " + LB.exp("EXAMPLE LIST SIMPLIFIED")],
["Neonates", "Perinatal palliative care for babies with conditions incompatible with long life " + r(1)],
["Signs of the last hours or days (NICE)", "Changed breathing (noisy, laboured, irregular), poor perfusion and temperature instability, loss of interest in food and drink, marked fall in urine, reduced awareness, intractable seizures, profound weakness, rising pain " + r(2)]
])}` },
{ id: "patho", title: "Principles", html: `${F.chart("Care pathway", [F.s("Diagnosis of life-limiting condition — tell child (if appropriate) and family"), F.a, F.s("Named specialist; Advance Care Plan; preferred place of care"), F.a, F.s("Symptom control + psychological, social, spiritual support"), F.a, F.d("Approaching end of life"), F.a, F.s("Anticipatory medicines; parenteral route available at home"), F.a, F.ok("Death, care of the body, bereavement support")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Source", "Note", "This guide"], [
["Oral : IV morphine ratio", "APPM 2024", "Systematic reviews suggest up to 3:1 may be more appropriate than the older 2:1", "Convert oral → infusion by dividing by 3 (APPM) " + r(1)],
["Child pain dosing source", "WHO 2012 child pain guideline", "Withdrawn by WHO; replaced by 2020 chronic pain guideline " + r(3), "APPM/BNFc-based doses " + r(1)],
["Resuscitation", "NICE NG61", "Attempt resuscitation unless a 'do not attempt resuscitation' decision is in place", "Discuss and record in the Advance Care Plan " + r(2)]
])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Pain: use age-appropriate scales and observation; ask the child and parents ${r(1)} ${r(2)}.</li><li>Look for treatable causes of agitation (pain, full bladder, constipation, hypoxia, drugs) ${r(2)}.</li><li>Neuropathic pain: consider gabapentin, low-dose amitriptyline, or specialist ketamine/methadone ${r(2)}.</li></ul>
<div class="calc" data-calc="childmorphine"></div>` },
{ id: "ddx", title: "Reversible problems to check", html: `${tbl(["Problem", "Clue"], [
["Constipation", "Opioids, immobility — laxative " + r(1)],
["Urinary retention", "Opioid side effect, commoner in children " + r(1)],
["Opioid toxicity", "Myoclonic twitching, drowsiness — reduce dose " + r(1)],
["Infection, seizures, raised ICP", "Treat if in line with the care plan " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Keep tests to those that change comfort or decisions; monitor non-invasively in the last days ${r(2)}.</p>` },
{ id: "staging", title: "Morphine starting doses (opioid-naive, APPM 2024)", html: `${tbl(["Age", "By mouth / rectum", "IV or SC bolus", "IV/SC infusion per 24 h"], [
["Neonate", "80 mcg/kg 6-hourly", "40 mcg/kg 6-hourly", "160 mcg/kg " + r(1)],
["1–2 months", "120 mcg/kg 6-hourly", "60 mcg/kg 6-hourly", "240 mcg/kg " + r(1)],
["3–5 months", "120 mcg/kg 4-hourly", "60 mcg/kg 4-hourly", "360 mcg/kg " + r(1)],
["6–23 months", "200 mcg/kg 4-hourly", "80 mcg/kg 4-hourly", "480 mcg/kg " + r(1)],
["2–11 years", "200–300 mcg/kg 4-hourly (max 10 mg/dose)", "80–100 mcg/kg 4-hourly (max 5 mg/dose)", "480–600 mcg/kg (max 20 mg) " + r(1)],
["12 years and over", "200 mcg/kg or 5–10 mg 4-hourly (max 10 mg/dose)", "80–100 mcg/kg or 2.5–5 mg 4-hourly (max 5 mg/dose)", "480–600 mcg/kg (max 30 mg) or 20–30 mg " + r(1)]
])}
<p>Start lower (1/10 to 1/2 of these) in children at higher risk of adverse effects; use ideal body weight in obese children; caution in kidney and liver impairment; avoid rectal route with low platelets or neutropenia ${r(1)}.</p>` },
{ id: "manage", title: "Symptom management", html: `
<h3>1. Pain</h3>
<ul>
<li>Non-drug: calm environment, music, holding, massage, warmth or cold, sucrose for neonates ${r(2)}.</li>
<li>Paracetamol by weight, e.g. child 1 month–5 years: 20–30 mg/kg once then 15–20 mg/kg 4–6-hourly, max 75 mg/kg/day ${r(1)}.</li>
<li>Morphine: start as in the table; once settled for 2–3 days add up the 24-hour total (regular + breakthrough) ${r(1)}.</li>
<li>Breakthrough: 1/10–1/6 of the total daily morphine dose every 1–4 hours as needed; review the regular dose if more than 2 breakthrough doses in 24 hours ${r(1)}.</li>
<li>Modified-release: total daily oral dose ÷ 2 every 12 hours ${r(1)}.</li>
<li>Subcutaneous/IV infusion: total daily oral dose ÷ 3 over 24 hours ${r(1)}.</li>
</ul>
<h3>2. Breathlessness and cough</h3><p>Treat the cause where possible; morphine at 25–50% of the pain dose (child 1 month and over); midazolam for anxiety with breathlessness ${r(1)}.</p>
<h3>3. Seizures at the end of life</h3><p>Buccal/intranasal midazolam: neonate 300 mcg/kg (max 1.25 mg); 1–2 months 300 mcg/kg (max 2.5 mg); 3–11 months 2.5 mg; 1–4 years 5 mg; 5–9 years 7.5 mg; 10 years and over 10 mg — may repeat once after at least 10 minutes. IV/SC bolus 200 mcg/kg (max 10 mg). Continuous infusion 1 mg/kg/24 h, increasing up to 7 mg/kg/24 h (max 60 mg/24 h) — specialist ${r(1)}.</p>
<h3>4. Noisy secretions</h3><p>Glycopyrronium SC/IV: 1 month–11 years 4 mcg/kg 3–4 times daily, up to 10 mcg/kg (max 200 mcg/dose); 12 years and over 200 mcg 3–4 times daily; works better started early ${r(1)}. Hyoscine butylbromide is an alternative ${r(1)}. Explain that noisy breathing distresses others more than the child ${r(1)}.</p>
<h3>5. Constipation</h3><p>Senna (first choice for opioid constipation): 1 month–3 years 3.75–15 mg; 4–5 years 3.75–30 mg; 6–17 years 7.5–30 mg once daily, adjust ${r(1)}.</p>
<h3>6. Nausea and vomiting</h3><p>Ondansetron (6 months and over) 100–150 mcg/kg every 8–12 hours, max 8 mg/dose ${r(1)}.</p>
<h3>7. Agitation</h3><p>Treat causes; non-drug comfort; then medicines (e.g. midazolam) with specialist advice ${r(1)} ${r(2)}.</p>
<h3>8. Hydration and nutrition</h3><p>Discuss whether tube or IV fluids are in the child's best interests; review regularly ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("morphine", "Morphine")} — NEML 10 mg tablet, 15 mg ER tablet, 10 mg/mL injection; no oral solution ${r(5)}.</li>
<li>${D("midazolam", "Midazolam")} 1 mg/mL injection — NEML ${r(5)}.</li>
<li>${D("glycopyrronium", "Glycopyrronium (glycopyrrolate)")} 0.2 mg/mL injection — NEML ${r(5)}.</li>
<li>${D("senna", "Senna")} 15 mg tablet; ${D("lactulose", "lactulose")} — NEML ${r(5)}.</li>
<li>${D("ondansetron", "Ondansetron")} 2 and 4 mg tablets, injection — NEML ${r(5)}.</li>
<li>${D("paracetamol", "Paracetamol")} syrup, suppository, injection — NEML ${r(5)}.</li>
<li>${D("diazepam", "Diazepam")} — NEML; seizure alternative ${r(5)} ${r(1)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Neonates", "Longer half-life, higher volume of distribution; 6-hourly morphine; variable oral absorption " + r(1)],
["Kidney or liver impairment", "Reduce dose or lengthen interval; avoid morphine in severe renal impairment " + r(1)],
["Children on benzodiazepines + opioids", "Additive respiratory depression — lowest effective doses, change one drug at a time " + r(1)],
["Siblings", "Need age-appropriate support " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["4-year-old (16 kg) with relapsed leukaemia, moderate–severe bone pain, no opioid before", "Oral morphine 200–300 mcg/kg = 3.2–4.8 mg 4-hourly; senna; breakthrough 1/10–1/6 of daily total " + r(1)],
["Same child needing 3 breakthrough doses a day", "Add up the 24-h total and raise the regular dose " + r(1)],
["Child at home with a seizure lasting 5 minutes in the last days", "Buccal midazolam age dose; repeat once after 10 minutes if needed " + r(1)],
["Parents ask whether their child can die at home", "Agree preferred place; plan anticipatory medicines and parenteral route; community support " + r(2)]
])}` },
{ id: "complications", title: "Opioid side effects", html: `<ul><li>Constipation, nausea, drowsiness; children have more itching and urinary retention ${r(1)}.</li><li>Toxicity: myoclonic twitching — reduce ${r(1)}.</li></ul>` },
{ id: "followup", title: "After death", html: `<p>Explain care of the body, legal steps, registration, funeral arrangements and any post-mortem in writing; offer bereavement support to parents and siblings ${r(2)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Child with moderate–severe pain", [F.s("Non-drug measures + paracetamol by weight"), F.a, F.s("Oral morphine age-band start dose (lower if high risk) + senna"), F.a, F.s("Breakthrough 1/10–1/6 of daily total, 1–4-hourly"), F.a, F.d("> 2 breakthrough doses / 24 h?"), F.a, F.b([["Yes", F.s("Increase regular dose (total ÷ 6 every 4 h, or MR ÷ 2)")], ["No", F.ok("Continue; review daily")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Adult doses for children", "Overdose in small children", "mcg/kg by age band " + r(1)],
["No laxative", "Painful constipation", "Senna with regular opioids " + r(1)],
["Using 2:1 oral:IV automatically", "May overdose IV", "Divide oral by 3 (APPM) " + r(1)],
["Waiting until secretions are severe", "Antisecretory drugs work better early", "Start early " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Oral morphine starting dose for a 3-year-old (APPM)?", "200–300 mcg/kg every 4 hours, maximum 10 mg per dose.")}
${qa("Intern/MO", "Breakthrough dose rule?", "1/10 to 1/6 of the total daily morphine dose every 1–4 hours as needed.")}
${qa("Specialist", "Converting oral morphine to a subcutaneous infusion in children (APPM 2024)?", "Divide the total daily oral dose by three.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Jassal SS (ed.). Basic Symptom Control in Paediatric Palliative Care, 2024, with the APPM Master Formulary 6th edition. Together for Short Lives / Association for Paediatric Palliative Medicine.</li>
<li id="ref-2">National Institute for Health and Care Excellence. End of life care for infants, children and young people with life-limiting conditions: planning and management (NG61), 2016, updated 2019.</li>
<li id="ref-3">World Health Organization. Guidelines on the management of chronic pain in children. 2020 (not read in detail; the 2012 persisting-pain guideline was withdrawn).</li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, chapter 18 Palliative care.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["APPM formulary 2024 doses", "<span class='pass'>Checked</span>", "Morphine, midazolam, glycopyrronium, senna, ondansetron, paracetamol read"],
["NICE NG61", "<span class='pass'>Checked</span>", "Read"],
["Bhutan STG ch. 18", "<span class='pass'>Checked</span>", "No child doses"],
["WHO 2020 dosing annexes", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "APPM age bands"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
