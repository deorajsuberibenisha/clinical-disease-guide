/* Hypoglycaemia — children and newborns (WHO ETAT, ISPAD 2022, Bhutan STG/EM booklet) */
registerPage({
id: "hypo-child",
title: "Hypoglycaemia — Children & Newborns",
subtitle: "Check glucose in every sick, fitting or drowsy child; give 10% dextrose by weight; feed newborns early; and look for the cause",
age: "Newborns, infants & children", specs: ["paeds", "neo", "nicu", "emerg"],
keywords: ["neonatal hypoglycaemia", "childhood hypoglycaemia", "dextrose 10% 2 mL/kg", "ETAT", "glucose gel", "SAM hypoglycaemia", "malaria hypoglycaemia", "inborn errors"],
related: ["hypo-adult", "dka-child", "sam-child", "neosepsis-child", "malaria-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Children have small glycogen stores: fasting, infection, malnutrition and malaria quickly cause hypoglycaemia. Newborns at risk need early feeding and glucose checks.</p>
<div class="glance">
<div><h4>Threshold</h4><p>Under 3 mmol/L (54 mg/dL) in children (WHO ETAT under 2.5; under 3 in SAM); newborn under 2.6 mmol/L (common local threshold).</p></div>
<div><h4>IV</h4><p>${dr("dextrose", "10% dextrose")} 2–5 mL/kg (newborn 2 mL/kg).</p></div>
<div><h4>No IV</h4><p>Sugar solution 5 mL/kg by NG; glucose gel in newborns.</p></div>
<div><h4>Then</h4><p>Feed or glucose-containing fluid; recheck in 15–30 min.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan EM booklet: 10% dextrose 5 mL/kg (or 25% 2 mL/kg if only option); NG sugar water 20 g in 200 mL. SAM children receive F-75 or sugar water at admission (see SAM chapter). ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Group", "Common causes"], [["Newborn", "Prematurity, small or large for dates, infant of diabetic mother, hypothermia, sepsis, asphyxia, delayed feeding"], ["Child", "Fasting with illness (ketotic), severe malaria, sepsis, SAM, quinine, insulin in type 1 diabetes, salicylate or alcohol"], ["Rare", "Hyperinsulinism, adrenal insufficiency, inborn errors, growth hormone deficiency"]])}${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Neonatal transition", [F.s("Cord clamped → glucose falls in first 1–2 h"), F.a, F.s("Normal babies mobilise glycogen and ketones"), F.a, F.e("At-risk babies cannot → seizures, brain injury")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan EM booklet", "WHO / BAPM / ISPAD", "This guide"], [["Bolus", "10% 5 mL/kg (or 25% 2 mL/kg)", "10% 2–5 mL/kg; newborn 2 mL/kg", "10% 2–5 mL/kg " + LB.loc()], ["Newborn threshold", "Under 2.6 mmol/L", "BAPM: 2.0 first 48 h with feeding plan; under 1.0 always treat IV", "2.6 operational threshold"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Newborn: jitteriness, poor feeding, hypotonia, apnoea, cyanosis, seizures — or no symptoms.</li><li>Child: pallor, sweating, irritability, drowsiness, seizures, coma.</li></ul><h3>The typical patient</h3><p>A 2-year-old (11 kg) with 2 days of vomiting and no food is drowsy; glucose 2.2 mmol/L, ketones high. <b>This is ketotic hypoglycaemia from fasting illness</b>: 10% dextrose 22–55 mL IV, then 5–10% dextrose maintenance fluids, oral feeds when able; investigate if recurrent.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Sepsis/meningitis", "Fever, bulging fontanelle — treat both"], ["Seizure disorder", "Glucose normal"], ["Hypocalcaemia (newborn)", "Jittery with normal glucose"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Bedside glucose; in unexplained hypoglycaemia take a 'critical sample' during the episode (glucose, insulin, C-peptide, cortisol, GH, ketones, lactate, ammonia, urine organic acids); sepsis screen; malaria test where relevant.</p>` },
{ id: "staging", title: "Treatment calculator", html: `<div class="calc" data-calc="hypotreat"></div>` },
{ id: "manage", title: "Management", html: `<ul><li><b>Child, IV:</b> 10% dextrose 2–5 mL/kg over 2–3 min, then maintenance with 5–10% dextrose; recheck in 15 min.</li><li><b>Child, no IV:</b> 5 mL/kg sugar solution (20 g in 200 mL) by NG; sugar under the tongue; IO access if needed.</li><li><b>Newborn:</b> breastfeed or 10 mL/kg expressed milk; buccal 40% glucose gel 0.5 mL/kg; if persistent or symptomatic, 10% dextrose 2 mL/kg then infusion 60–90 mL/kg/day; increase to glucose infusion rate 8–10 mg/kg/min if needed and refer.</li><li><b>Type 1 diabetes:</b> 0.3 g/kg fast sugar; severe: glucagon 0.5 mg (under 25 kg) or 1 mg IM, or dextrose.</li><li>Prevent: early feeding, warmth, glucose checks for at-risk newborns (pre-feed for 24–48 h).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("dextrose"), "10% 2–5 mL/kg", "Newborn 2 mL/kg"], [dr("glucagon"), "0.5–1 mg IM", "Not on NEML"]])}` },
{ id: "populations", title: "SAM and malaria", html: `<p>SAM: treat glucose under 3 mmol/L with 50 mL 10% dextrose or sugar solution, then F-75 every 30 min for 2 h; keep warm. Severe malaria and quinine: 4-hourly glucose.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Newborn needing glucose infusion rate over 8 mg/kg/min", "Hyperinsulinism likely — refer, critical sample"], ["Recurrent fasting hypos in a toddler", "Investigate: critical sample, endocrine/metabolic review"]])}` },
{ id: "complications", title: "Complications", html: `<p>Seizures, brain injury (occipital), developmental delay, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Newborns with prolonged hypoglycaemia: developmental follow-up. Children with diabetes: review insulin, teach glucagon/sugar use to school.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Sick child", [F.s("Check glucose"), F.a, F.d("Low?"), F.a, F.b([["Yes", F.e("10% dextrose 2–5 mL/kg or NG sugar")], ["No", F.ok("Continue ETAT assessment")]]), F.a, F.ok("Maintenance glucose, feed, find cause")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["50% dextrose in children", "Vein damage, hyperosmolar", "10% only"], ["Bolus without follow-on infusion", "Rebound hypoglycaemia", "Start maintenance glucose"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Dextrose bolus for a 3 kg newborn with glucose 1.6?", "6 mL of 10% dextrose IV, then infusion 60–90 mL/kg/day.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Abraham MB, Karges B, Dovc K, et al. ISPAD Clinical Practice Consensus Guidelines 2022: Assessment and management of hypoglycemia in children and adolescents with diabetes. Pediatr Diabetes. 2022;23:1322-1340. <a href="https://doi.org/10.1111/pedi.13443" target="_blank" rel="noopener">doi</a></li><li id="ref-2">World Health Organization. Pocket book of hospital care for children, 2nd ed. Geneva: WHO; 2013. <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li><li id="ref-3">British Association of Perinatal Medicine. Identification and management of neonatal hypoglycaemia in the full term infant, 2017.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
