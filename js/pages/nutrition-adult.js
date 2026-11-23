/* Enteral and parenteral nutrition (ESPEN 2019, NICE CG32) */
registerPage({
id: "nutrition-adult",
title: "Enteral & Parenteral Nutrition",
subtitle: "Screen for malnutrition, use the gut whenever it works, start slowly with thiamine and electrolyte checks when refeeding risk is high, and keep parenteral nutrition for a non-functioning gut",
age: "Adults (child notes)", specs: ["medicine", "surg", "gi"],
keywords: ["parenteral nutrition", "TPN", "enteral nutrition", "NG feeding", "refeeding syndrome", "malnutrition", "hypophosphataemia", "thiamine", "ICU nutrition", "PEG"],
related: ["thiamine-adult", "pancreatitis-adult", "sam-child", "potassium-adult", "weightloss-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Targets</h4><p>25–30 kcal/kg/day; protein 1.2–1.5 g/kg/day.</p></div>
<div><h4>Route</h4><p>Gut works → enteral (oral supplements, NG). Gut fails over 7 days → PN.</p></div>
<div><h4>Refeeding</h4><p>Start 10 kcal/kg (5 if extreme); ${dr("thiamine")}; check K, PO₄, Mg daily.</p></div>
<div><h4>PN</h4><p>${dr("amino_acids")} + dextrose + ${dr("lipid_emulsion")}; central line asepsis.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Amino acid 10%, lipid emulsion 20% and dextrose are on the NEML; commercial all-in-one PN bags are limited — PN is compounded at referral hospitals. Ground-food NG feeds (rice, egg, milk, oil) blended locally are often used — ensure hygiene and energy density. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Indications", html: `${tbl(["Route", "Use when"], [["Oral supplements", "Can eat but not enough"], ["NG/NJ tube", "Unsafe swallow, low intake, ICU, burns, pancreatitis (tolerating)"], ["PEG", "Long term (over 4 weeks): stroke, head and neck cancer"], ["Parenteral", "Obstruction, prolonged ileus, high-output fistula, short bowel, failed enteral over 7 days"]])}${r(1)}` },
{ id: "patho", title: "Refeeding syndrome", html: `${F.chart("Refeeding", [F.s("Starvation depletes K, PO₄, Mg, thiamine"), F.a, F.s("Carbohydrate → insulin → intracellular shift"), F.e("Hypophosphataemia, arrhythmia, heart failure, Wernicke")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "ESPEN 2019 ICU", "This guide"], [["Early full feeding in ICU", "Yes", "Start low (under 70% target) in first days, advance by day 3–7", "ESPEN " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Malnutrition screening (weight loss, BMI, intake, illness severity), swallow, gut function.</li></ul><h3>The typical patient</h3><p>A 45 kg man with alcohol-related pancreatitis has eaten little for 2 weeks (BMI 17, phosphate 0.6). <b>High refeeding risk</b>: thiamine 300 mg/day, NG feeding at 450 kcal/day (10 kcal/kg), replace phosphate, K and Mg, increase over 4–7 days.</p>` },
{ id: "ddx", title: "Pitfalls", html: `${tbl(["Pitfall", "Fix"], [["PN when gut works", "Enteral safer and cheaper"], ["Misplaced NG tube", "Confirm with pH under 5.5 or X-ray before feeding"]])}` },
{ id: "invest", title: "Monitoring", html: `<p>Daily weight, fluid balance, glucose 4–6-hourly; K, PO₄, Mg daily for 1 week, then twice weekly; LFT and triglycerides weekly on PN.</p>` },
{ id: "staging", title: "Requirements and refeeding tool", html: `<div class="calc" data-calc="nutricalc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Enteral: start 10–30 mL/h continuous or bolus feeds; head up 30°; check aspirates if vomiting.</li><li>PN: central line (or peripheral for under 2 weeks with low osmolality), daily electrolytes, glucose control, add vitamins and trace elements.</li><li>Refeeding risk: slow start, thiamine, replace electrolytes.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("amino_acids"), "1–1.5 g/kg/day", "PN"], [dr("lipid_emulsion"), "Up to 1–1.5 g/kg/day", "PN"], [dr("thiamine"), "200–300 mg/day", "Refeeding risk"], [dr("kcl"), "By level", "Hypokalaemia"]])}` },
{ id: "populations", title: "Children and neonates", html: `<p>Use NICU/PICU weight-based protocols (preterm chapter for feeds); SAM uses F-75/F-100.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Phosphate 0.3 on day 2", "Halve feeds, IV phosphate, monitor ECG"]])}` },
{ id: "complications", title: "Complications", html: `<p>Refeeding, aspiration, tube displacement, diarrhoea; PN: line sepsis, thrombosis, liver dysfunction, hyperglycaemia.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Dietitian review; transition to oral as soon as possible.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Tube feeding", src: "images/tube-feeding.svg", mod: "Diagram", ctx: "Enteral nutrition", loc: "Nasogastric route", find: "Feeding tube into stomach", interp: "Use the gut when it works", by: "University of Michigan (Akiyao)", page: "https://commons.wikimedia.org/wiki/File:Tube_Feeding.svg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Malnourished patient", [F.d("Gut working?"), F.a, F.b([["Yes", F.ok("Oral/NG feeding")], ["No", F.e("PN")]]), F.a, F.ok("Refeeding precautions in all high-risk")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Full feeds day 1 after starvation", "Refeeding death", "Start low"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Key electrolyte in refeeding syndrome?", "Phosphate (also potassium and magnesium).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Singer P, Blaser AR, Berger MM, et al. ESPEN guideline on clinical nutrition in the intensive care unit. Clin Nutr. 2019;38:48-79. <a href="https://doi.org/10.1016/j.clnu.2018.08.037" target="_blank" rel="noopener">doi</a></li><li id="ref-2">National Institute for Health and Care Excellence. Nutrition support for adults (CG32), updated 2017.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
