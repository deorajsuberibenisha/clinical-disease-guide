/* Apnoea of prematurity (AAP 2016, WHO 2022) */
registerPage({
id: "apnoea-child",
title: "Apnoea of Prematurity",
subtitle: "Pauses of 20 seconds or more (or shorter with bradycardia/desaturation) in preterm babies: exclude sepsis and other causes, give caffeine, support with CPAP, and monitor until resolved",
age: "Preterm infants", specs: ["neo", "nicu"],
keywords: ["apnoea of prematurity", "apnea", "caffeine citrate", "bradycardia", "desaturation", "CPAP", "preterm monitoring", "secondary apnoea"],
related: ["preterm-child", "neosepsis-child", "cpap-child", "rds-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Define</h4><p>Pause 20 s+, or shorter with HR under 100 or SpO₂ under 80%.</p></div>
<div><h4>Exclude</h4><p>Sepsis, hypoglycaemia, temperature, anaemia, seizures, NEC.</p></div>
<div><h4>Treat</h4><p>${dr("caffeine_citrate")} 20 mg/kg then 5–10 mg/kg/day.</p></div>
<div><h4>Support</h4><p>CPAP if frequent or severe.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Caffeine citrate is on the NEML (oral and IV); apnoea monitors and pulse oximeters are available in NICUs; WHO 2022 recommends caffeine for preterm babies under 34 weeks. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Almost universal under 28 weeks, common under 34 weeks; starts day 2–7; resolves by 36–40 weeks' corrected age. New apnoea in a previously well baby, or in a term baby, is secondary until proven otherwise.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Apnoea", [F.s("Immature brainstem respiratory control"), F.a, F.s("Central, obstructive or mixed pauses"), F.e("Bradycardia, desaturation, brain injury risk if frequent")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "AAP", "WHO 2022", "This guide"], [["Prophylactic caffeine", "For apnoea", "All under 34 weeks", "WHO " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<h3>The typical patient</h3><p>A 1.2 kg baby born at 29 weeks has 6 apnoeas with bradycardia today, needing gentle stimulation; temperature and glucose normal, CRP normal. <b>Apnoea of prematurity</b>: caffeine 24 mg load then 6–12 mg daily; CPAP if continues.</p>` },
{ id: "ddx", title: "Secondary causes", html: `${tbl(["Cause", "Clue"], [["Sepsis/meningitis", "New/increasing apnoea, instability"], ["Hypoglycaemia, electrolytes", "Bloods"], ["Seizures", "Eye/limb movements"], ["Anaemia", "Hb"], ["NEC", "Abdomen"], ["Maternal opioids/MgSO₄", "History"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose, FBC, CRP/culture, electrolytes, Hb; cranial ultrasound; blood gas.</p>` },
{ id: "staging", title: "Apnoea tool", html: `<div class="calc" data-calc="apnoeaplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Stimulation, airway position, oxygen as needed.</li><li>Caffeine; CPAP/NIPPV; ventilation if failing.</li><li>Transfuse if anaemic per thresholds.</li><li>Stop caffeine at ~34 weeks' corrected age when event-free 5–7 days; observe 5–8 days before discharge.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("caffeine_citrate"), "20 mg/kg → 5–10 mg/kg/day", "Hold if HR over 180"]])}` },
{ id: "populations", title: "Term babies", html: `<p>Apnoea in term babies is always secondary — full work-up.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Apnoea after vaccination in preterm", "Monitor 48 h; usually self-limiting"]])}` },
{ id: "complications", title: "Complications", html: `<p>Hypoxic injury, need for ventilation.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Parent education; safe sleep.</p>` },
{ id: "images", title: "Images", html: `<p>See preterm chapter.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Preterm apnoea", [F.s("Stimulate, support, look for cause"), F.a, F.s("Caffeine"), F.a, F.ok("CPAP if persists")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing sepsis", "Death", "Screen new apnoea"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Caffeine citrate loading dose?", "20 mg/kg.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Eichenwald EC, Committee on Fetus and Newborn. Apnea of prematurity. Pediatrics. 2016;137:e20153757. <a href="https://doi.org/10.1542/peds.2015-3757" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
