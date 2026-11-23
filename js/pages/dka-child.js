/* Diabetic ketoacidosis — children (ISPAD 2022, Bhutan STG 5.4) */
registerPage({
id: "dka-child",
title: "Diabetic Ketoacidosis (DKA) — Children",
subtitle: "Restore circulation, replace the deficit slowly over 24–48 hours, start insulin 1 hour after fluids at 0.05–0.1 unit/kg/hour, and watch every hour for cerebral oedema",
age: "Children & adolescents", specs: ["paeds", "endo", "picu", "emerg"],
keywords: ["paediatric DKA", "childhood DKA", "cerebral oedema", "ISPAD", "new onset type 1 diabetes", "insulin infusion child", "mannitol", "hypertonic saline"],
related: ["dka-adult", "dm-child", "hypo-child", "sepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In Bhutan many children with type 1 diabetes are first diagnosed in DKA. Cerebral oedema is the main cause of death: slow, steady correction and hourly neurological checks save lives.</p>
<div class="glance">
<div><h4>Circulation</h4><p>10–20 mL/kg 0.9% saline over 20–30 min if poorly perfused.</p></div>
<div><h4>Deficit</h4><p>Assume 5–10% and replace over 24–48 h with maintenance (calculator).</p></div>
<div><h4>Insulin</h4><p>${dr("insulin_soluble", "Soluble insulin")} 0.05–0.1 unit/kg/h, starting 1 h after fluids.</p></div>
<div><h4>Brain</h4><p>Headache, slowing pulse, rising BP, confusion → ${dr("mannitol")} 0.5–1 g/kg or ${dr("hypertonic_saline", "3% saline")} 2.5–5 mL/kg.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 5.4 advises initial saline and referral; paediatric DKA is managed at JDWNRH and regional referral hospitals following ISPAD. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Same biochemical definition as adults (pH under 7.3 or bicarbonate under 18 per ISPAD, ketones 3 or more, glucose over 11). Severity: mild pH under 7.3, moderate under 7.2, severe under 7.1.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Cerebral oedema risk", [F.s("Young age, new diagnosis, severe acidosis, high urea, low pCO₂"), F.a, F.s("Cerebral hypoperfusion and reperfusion during treatment"), F.a, F.e("Oedema, typically 4–12 h after starting")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "ISPAD 2022", "This guide"], [["Fluid rate", "Very restrictive", "PECARN: faster or slower rehydration both safe; deficit over 24–48 h", "ISPAD"], ["Insulin dose", "0.1 unit/kg/h", "0.05–0.1 unit/kg/h", "0.05 in young or mild; 0.1 otherwise " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Polyuria, polydipsia, weight loss, bedwetting, vomiting, abdominal pain, deep breathing.</li><li>Often mistaken for gastroenteritis, pneumonia or appendicitis.</li></ul>${box("red", "Cerebral oedema warning signs", `<ul><li>Headache, vomiting recurring after improvement</li><li>Falling heart rate, rising BP, irregular breathing</li><li>Irritability, confusion, incontinence, falling GCS, pupil changes</li></ul>`)}<h3>The typical patient</h3><p>A 9-year-old (25 kg) is brought with 2 weeks of thirst and weight loss, now vomiting and breathless. Glucose 31, pH 7.08, ketones 6. <b>This is severe DKA at new diagnosis</b>: 10 mL/kg saline, deficit 10% replaced over 48 h, insulin 1.25–2.5 units/h from the second hour, hourly neuro checks.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Gastroenteritis", "Glucose normal; check glucose in every sick child"], ["Pneumonia/asthma", "Kussmaul breathing with clear chest"], ["Appendicitis", "Pain persisting after acidosis resolves"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose hourly, ketones 1–2 hourly, gas and electrolytes 2–4 hourly; corrected sodium (should rise as glucose falls); HbA1c, antibodies, TSH, coeliac screen later.</p>` },
{ id: "staging", title: "Fluid calculator", html: `<div class="calc" data-calc="dkafluid"></div>` },
{ id: "manage", title: "Management", html: `<ol><li>Shock: 20 mL/kg boluses until perfused. Poor perfusion: 10–20 mL/kg over 20–30 min.</li><li>Then deficit (5–10%) + maintenance over 24–48 h using 0.9% saline or Ringer's with KCl 40 mmol/L.</li><li>Insulin 0.05–0.1 unit/kg/h from 1 h after fluids; no bolus.</li><li>Add dextrose (5%, then 10%) when glucose under 14–17 mmol/L or falling over 5 mmol/L/h.</li><li>Cerebral oedema: raise head, mannitol 0.5–1 g/kg over 10–15 min or 3% saline 2.5–5 mL/kg; reduce fluids; PICU; imaging after stabilisation.</li><li>Switch to SC insulin when ketones under 0.6 and eating.</li></ol>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("insulin_soluble"), "0.05–0.1 unit/kg/h", "1 h after fluids"], [dr("kcl"), "40 mmol/L", "Unless anuric or K over 5.5"], [dr("mannitol"), "0.5–1 g/kg", "Cerebral oedema"], [dr("hypertonic_saline"), "3% 2.5–5 mL/kg", "Alternative"]])}` },
{ id: "populations", title: "Young children and new diagnoses", html: `<p>Under 5 years and new diagnoses have the highest cerebral oedema risk: use 0.05 unit/kg/h and 1:1 nursing.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Sodium falling as glucose falls", "Cerebral oedema risk: slow fluids, check fluid tonicity"], ["No PICU locally", "Stabilise, start treatment, transfer with mannitol drawn up"]])}` },
{ id: "complications", title: "Complications", html: `<p>Cerebral oedema (0.5–1%), hypokalaemia, hypoglycaemia, thrombosis, aspiration.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Diabetes education for family and school, insulin regimen, sick-day rules, glucometer and strips; follow-up within a week.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed: diagnosis is biochemical.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Child with DKA", [F.s("Perfusion? bolus 10–20 mL/kg"), F.a, F.s("Deficit + maintenance over 24–48 h"), F.a, F.s("Insulin 0.05–0.1 unit/kg/h after 1 h"), F.a, F.d("Neuro deterioration?"), F.a, F.b([["Yes", F.e("Mannitol / 3% saline, PICU")], ["No", F.ok("Hourly checks until resolved")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Insulin bolus", "Rapid osmolar shifts", "Infusion only"], ["Missing new diabetes as gastroenteritis", "Late DKA", "Glucose in every vomiting child"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Insulin rate for a 20 kg child?", "1–2 units/hour (0.05–0.1 unit/kg/h), starting 1 hour after fluids.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Glaser N, Fritsch M, Priyambada L, et al. ISPAD Clinical Practice Consensus Guidelines 2022: Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatr Diabetes. 2022;23:835-856. <a href="https://doi.org/10.1111/pedi.13406" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 5.4.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
