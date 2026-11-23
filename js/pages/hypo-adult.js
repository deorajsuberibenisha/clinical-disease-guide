/* Hypoglycaemia — adults (Bhutan STG 5.5, ADA 2024, JBDS) */
registerPage({
id: "hypo-adult",
title: "Hypoglycaemia — Adults",
subtitle: "Check glucose in anyone drowsy, fitting or behaving oddly; give fast sugar or IV dextrose immediately; then find out why and prevent the next one",
age: "Adults", specs: ["endo", "medicine", "emerg"],
keywords: ["hypoglycaemia", "low blood sugar", "hypo", "dextrose", "glucagon", "sulfonylurea", "insulin overdose", "alcohol", "Whipple triad"],
related: ["dm-adult", "dka-adult", "hypo-child", "alcohol-adult", "poisoning-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Glucose under 4 mmol/L (70 mg/dL) in a person with diabetes is hypoglycaemia; under 3 mmol/L (54 mg/dL) is clinically important. In people without diabetes, think of alcohol, sepsis, liver failure, malaria and drugs.</p>
<div class="glance">
<div><h4>Conscious</h4><p>15–20 g fast sugar; recheck in 15 min; then starch.</p></div>
<div><h4>Unconscious</h4><p>${dr("dextrose", "10% dextrose")} 150–200 mL IV (or 20% 75–100 mL).</p></div>
<div><h4>No IV</h4><p>${dr("glucagon")} 1 mg IM if available, or sugar by NG.</p></div>
<div><h4>After</h4><p>Find the cause; sulfonylurea hypos recur — admit.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 5.5: sugar by mouth if conscious; 25% dextrose IV if severe. 10–20% dextrose is now preferred internationally (less vein damage, less rebound). Glucagon is <b>not on the NEML</b>. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Commonest cause: insulin or sulfonylurea (glibenclamide, gliclazide, glipizide) with missed meals, exercise, alcohol or kidney impairment.${r(1, 2)}</p>${tbl(["Level", "Glucose", "Meaning"], [["1", "Under 3.9 mmol/L (70 mg/dL)", "Alert value"], ["2", "Under 3.0 mmol/L (54 mg/dL)", "Clinically significant"], ["3", "Any, needing help from another person", "Severe"]])}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Hypoglycaemia", [F.s("Glucose falls"), F.a, F.s("Adrenergic: sweating, tremor, palpitations, hunger"), F.a, F.e("Neuroglycopenic: confusion, odd behaviour, seizures, coma")])}<p>Repeated hypos blunt warning symptoms (hypoglycaemia unawareness); beta-blockers mask them.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "International", "This guide"], [["IV dextrose strength", "25%", "10% or 20%", "10% preferred; 25% if only option " + LB.loc()], ["Glucagon", "Not on NEML", "1 mg IM", "Use if available"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Sweating, shaking, hunger, palpitations, anxiety.</li><li>Confusion, slurred speech, aggression (mistaken for drunkenness), focal weakness (mimics stroke), seizures, coma.</li></ul><h3>The typical patient</h3><p>A 68-year-old on glibenclamide and with reduced eating during a chest infection is found confused at home in Trashigang; glucose 2.1 mmol/L. <b>This is sulfonylurea-induced hypoglycaemia</b>: 10% dextrose 200 mL IV, then 10% dextrose infusion and meals, admit for at least 24 h, stop glibenclamide (switch to a shorter-acting agent or metformin).</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Stroke", "Deficit persists after glucose corrected"], ["Alcohol intoxication", "Check glucose in every drunk patient"], ["Seizure, post-ictal state", "Glucose normal"], ["Insulinoma, adrenal failure", "Recurrent fasting hypos without diabetes"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Capillary glucose (confirm with lab if possible); in people without diabetes, take blood during the hypo for insulin, C-peptide, cortisol, beta-hydroxybutyrate and sulfonylurea screen before treating if it does not delay treatment.</p>` },
{ id: "staging", title: "Treatment calculator", html: `<div class="calc" data-calc="hypotreat"></div>` },
{ id: "manage", title: "Management", html: `<ol><li><b>Conscious:</b> 15–20 g fast sugar (150–200 mL juice, 4–5 sugar lumps); recheck 10–15 min; repeat up to 3 times; then long-acting carbohydrate.</li><li><b>Drowsy/unconscious:</b> recovery position; 10% dextrose 150–200 mL IV over 15 min (or 20% 75–100 mL; STG 25% 50 mL); recheck in 10 min.</li><li><b>No IV:</b> glucagon 1 mg IM (not in alcohol, starvation, liver disease) or sugar solution by NG tube.</li><li>Malnourished or alcohol: <b>thiamine</b> 100 mg IV before or with glucose.</li><li>Sulfonylurea or long-acting insulin: 10% dextrose infusion 100 mL/h, admit 24–72 h; octreotide 50 µg SC 12-hourly for refractory sulfonylurea overdose.</li><li>Do not omit insulin entirely in type 1 diabetes after recovery — adjust the next dose.</li></ol>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("dextrose"), "10% 150–200 mL IV", "STG: 25%"], [dr("glucagon"), "1 mg IM/SC", "Not on NEML"], [dr("thiamine"), "100 mg IV", "Alcohol, malnutrition"], [dr("octreotide"), "50 µg SC 12-hourly", "Refractory sulfonylurea"]])}` },
{ id: "populations", title: "Special groups", html: `<ul><li>Elderly and CKD: sulfonylureas accumulate — prefer gliclazide/glipizide at low dose or avoid.</li><li>Pregnancy: tight targets increase hypos; teach partners.</li><li>Drivers: no driving until 45 min after recovery; review licence rules after severe hypo.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Recurrent hypos at home", "Review doses, meals, alcohol, kidney function, injection sites"], ["Refuses admission after sulfonylurea hypo", "Explain recurrence risk for 24–72 h; document capacity"]])}` },
{ id: "complications", title: "Complications", html: `<p>Seizures, falls, injury, arrhythmia, brain injury, death; hypoglycaemia unawareness.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review medicines within days; carry sugar; teach family; consider less aggressive HbA1c targets in frail elderly.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Low glucose", [F.d("Can swallow safely?"), F.a, F.b([["Yes", F.ok("Fast sugar, recheck 15 min")], ["No", F.e("IV dextrose / glucagon / NG sugar")]]), F.a, F.ok("Snack, find cause, adjust treatment")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Discharging sulfonylurea hypo after recovery", "Recurrence hours later", "Admit, infusion"], ["Treating 'stroke' without checking glucose", "Missed reversible cause", "Glucose first"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Why give thiamine with glucose in an alcoholic?", "To prevent precipitating Wernicke encephalopathy.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">American Diabetes Association. Standards of Care in Diabetes — 2024, section 6: Glycemic goals and hypoglycemia. Diabetes Care. 2024;47(Suppl 1).</li><li id="ref-2">Joint British Diabetes Societies. The hospital management of hypoglycaemia in adults with diabetes mellitus, 2023 update.</li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 5.5.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["NEML glucagon", "<span class='pass'>Checked</span>", "Not listed"]], "qc")}` }
]
});
