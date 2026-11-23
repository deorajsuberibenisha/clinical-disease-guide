/* Nutritional rickets and osteomalacia (Global consensus 2016, Bhutan STG 13.13–13.14) */
registerPage({
id: "rickets-child",
title: "Rickets & Osteomalacia",
subtitle: "Bowed legs, wide wrists and a rachitic rosary in a toddler: confirm with ALP and X-ray, treat with vitamin D plus calcium for 12 weeks, and prevent with sunlight and supplements",
age: "Children (rickets), adults (osteomalacia)", specs: ["paeds", "endo", "ortho"],
keywords: ["rickets", "nutritional rickets", "vitamin D deficiency", "osteomalacia", "bow legs", "rachitic rosary", "hypocalcaemia", "tetany", "stoss therapy", "ALP"],
related: ["sam-child", "osteoporosis-adult", "hypo-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Even in sunny Bhutan, rickets occurs in infants kept indoors and wrapped, exclusively breastfed without vitamin D, and children with low calcium diets.</p>
<div class="glance">
<div><h4>Signs</h4><p>Wide wrists, bowing, rosary, delayed walking, tetany.</p></div>
<div><h4>Tests</h4><p>ALP high, phosphate low, X-ray wrist cupping.</p></div>
<div><h4>Treat</h4><p>${dr("cholecalciferol", "Vitamin D3")} by age × 12 weeks + calcium 500 mg/day.</p></div>
<div><h4>Prevent</h4><p>400 IU/day in infants; sunlight; calcium-rich foods.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 13.13–13.14 advise referral and sunlight/diet. High-dose cholecalciferol is not on NEML 2025; only calcium + D3 (250–600 IU) combination tablets — check supply at referral hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Defective mineralisation of growing bone (rickets) or bone matrix (osteomalacia). Nutritional: vitamin D deficiency (25-OH D under 30 nmol/L) and/or low calcium intake.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Rickets", [F.s("Low vitamin D/calcium"), F.a, F.s("Secondary hyperparathyroidism, low phosphate"), F.e("Unmineralised growth plates → deformity")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Global consensus 2016", "This guide"], [["Treatment", "Refer", "Vitamin D by age + calcium for 12 weeks", "Consensus " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Infants: craniotabes, delayed fontanelle closure, hypocalcaemic seizures/tetany, poor growth.</li><li>Toddlers: wrist widening, bow legs/knock knees, rosary, waddling gait, dental delay.</li><li>Adults: bone pain, proximal weakness.</li></ul><h3>The typical patient</h3><p>A 20-month-old in Gasa, rarely taken outdoors in winter, has bowed legs and wide wrists; ALP 1100 U/L, phosphate low. <b>This is nutritional rickets</b>: vitamin D3 3000–6000 IU daily (or 150,000 IU once) plus calcium 500 mg/day for 12 weeks, then 600 IU/day.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Physiological bowing", "Under 2 years, symmetrical, normal labs"], ["Hypophosphataemic rickets", "No response to vitamin D, family history"], ["Renal rickets", "Raised creatinine"], ["Blount's disease", "Asymmetrical, X-ray"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Calcium, phosphate, ALP, PTH, 25-OH vitamin D where available, creatinine; wrist/knee X-ray (cupping, fraying).</p>` },
{ id: "staging", title: "Dose tool", html: `<div class="calc" data-calc="ricketsdose"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Vitamin D3 by age for 12 weeks (daily or single dose) with calcium.</li><li>Symptomatic hypocalcaemia: IV calcium gluconate first.</li><li>Maintenance after treatment; diet, sunlight.</li><li>Severe deformity after healing: orthopaedics.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("cholecalciferol"), "By age (tool)", "Not on NEML"], [dr("calcium_vitd"), "Calcium 500 mg/day", "NEML"], [dr("calcium_gluconate"), "0.5 mL/kg 10% IV", "Tetany"]])}` },
{ id: "populations", title: "Pregnancy and infants", html: `<p>Pregnant women: vitamin D 600 IU/day; breastfed infants: 400 IU/day from birth to 12 months.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No high-dose vitamin D", "Use several combination tablets only for calcium; refer for vitamin D supply"]])}` },
{ id: "complications", title: "Complications", html: `<p>Seizures, cardiomyopathy (infants), fractures, deformity, pelvic narrowing in girls.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Calcium/ALP at 4 and 12 weeks; X-ray at 3 months.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Child with rickets", src: "images/rickets-child.jpg", mod: "Clinical photograph", ctx: "Nutritional rickets", loc: "Legs", find: "Bowed legs", interp: "Check ALP, phosphate, X-ray; treat with vitamin D and calcium", by: "Wikimedia Commons (public domain)", page: "https://commons.wikimedia.org/wiki/File:Child_suffering_from_rickets.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected rickets", [F.s("Ca, PO₄, ALP, X-ray"), F.a, F.d("Nutritional?"), F.a, F.b([["Yes", F.ok("Vitamin D + calcium 12 weeks")], ["No/no response", F.e("Refer — renal/genetic causes")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Vitamin D without calcium", "Poor healing", "Give both"], ["Missing hypocalcaemic seizures", "Death/cardiomyopathy", "Check calcium in infant seizures"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Vitamin D treatment for rickets at age 2?", "3000–6000 IU daily for 12 weeks (or 150,000 IU once) plus calcium 500 mg/day.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Munns CF, Shaw N, Kiely M, et al. Global consensus recommendations on prevention and management of nutritional rickets. J Clin Endocrinol Metab. 2016;101:394-415. <a href="https://doi.org/10.1210/jc.2015-2175" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, sections 13.13–13.14.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
