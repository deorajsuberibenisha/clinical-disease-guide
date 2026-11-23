/* Diabetic ketoacidosis and hyperosmolar hyperglycaemic state — adults
   Sources: Bhutan STG 5.4; Bhutan Diabetes Protocol V3.0 (2023); ICMR DKA STW 2022; ICMR T1D guideline 2022;
   ADA/EASD/JBDS/AACE/DTS consensus 2024 (read in full, PMC11343900); JBDS 2022. */
registerPage({
id: "dka-adult",
title: "Diabetic Ketoacidosis (DKA) and HHS — Adults",
subtitle: "Recognise DKA by its three parts — high glucose, ketones and acidosis; give fluids first, check potassium before insulin, run a fixed-rate insulin drip, add dextrose rather than stopping insulin, find the trigger, and know how hyperosmolar hyperglycaemic state (HHS) differs",
age: "Adults", specs: ["endo", "medicine", "emerg"],
keywords: ["DKA", "diabetic ketoacidosis", "ketones", "beta-hydroxybutyrate", "fixed rate insulin infusion", "FRIII", "potassium", "HHS", "hyperosmolar hyperglycaemic state", "HONK", "euglycaemic DKA", "SGLT2 inhibitor", "anion gap", "Kussmaul", "sick day rules", "insulin omission"],
related: ["dm-adult", "dka-child", "hypo-adult", "sepsis-adult", "aki-adult", "potassium-adult", "acidbase-adult", "pancreatitis-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">DKA is a medical emergency in which a lack of insulin lets the liver pour out glucose and ketones. The result is dehydration, acidosis and a large loss of potassium. People rarely die of the high sugar. They die of low potassium, delayed fluids, missed infections, and in young people, brain swelling. The treatment is simple and must be done carefully, hour by hour.</p>
<div class="glance">
<div><h4>Diagnose (all three)</h4><p><b>D</b>: glucose 200 mg/dL or more, or known diabetes. <b>K</b>: blood ketones (β-hydroxybutyrate) 3.0 mmol/L or more, or urine ketones 2+. <b>A</b>: pH under 7.3 and/or bicarbonate under 18.</p></div>
<div><h4>Fluids first</h4><p>0.9% saline or ${dr("ringer_lactate")} 500–1000 mL/hour for 2–4 hours; 250 mL boluses if old, frail, heart or kidney failure.</p></div>
<div><h4>Potassium before insulin</h4><p>Under 3.5: give KCl 10 mmol/h and <b>delay insulin</b>. 3.5–5.0: 20–30 mmol per litre. 5.0 or more: none yet.</p></div>
<div><h4>Insulin</h4><p>${dr("insulin_soluble")} 0.1 unit/kg/hour IV. At glucose under 250 mg/dL, add 5–10% ${dr("dextrose")} and reduce to 0.05 unit/kg/h — never stop the drip early.</p></div>
<div><h4>Resolved</h4><p>Ketones under 0.6 mmol/L <b>and</b> pH 7.3 or more (or bicarbonate 18 or more). Start basal insulin 1–2 hours before stopping the drip.</p></div>
<div><h4>Find the trigger</h4><p>Missed insulin, infection (including TB), MI, pancreatitis, SGLT2 inhibitors, pregnancy, alcohol, new diabetes.</p></div>
</div>
${box("bt", "Bhutan note", `<p><b>STG 5.4</b> describes DKA as an emergency that is often precipitated by missed treatment or infection. It lists breathlessness, fever, vomiting, abdominal pain, low urine output and altered sensorium. It advises CBC, urine ketones, urine RE, blood sugar, renal function and electrolytes; hydration (20 mL/kg bolus and maintenance) as the mainstay; and referral to a higher centre. The <b>Diabetes Management Protocol V3.0 (2023)</b> defines a primary-care "hyperglycaemia emergency" as RBG over 250 mg/dL with any of: breathlessness, fever, vomiting or abdominal pain, low urine output, altered sensorium, BP under 90/60 or pregnancy. The response is IV normal saline 1 L over 2 hours, then 1 L every 4 hours, and referral. Soluble insulin, KCl, Ringer lactate and dextrose are on NEML 2025; blood ketone meters and SGLT2 inhibitors are not widely available. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>DKA usually occurs in type 1 diabetes, often as its first presentation. It also occurs in insulin-deficient type 2 diabetes, especially during severe illness, and in "ketosis-prone" type 2 diabetes, which is common in South Asians. HHS occurs mainly in older people with type 2 diabetes, who still make enough insulin to suppress ketones but not enough to control glucose. More than a third of adults with a hyperglycaemic crisis have features of both.${r(1, 2)}</p>
${tbl(["Trigger", "Notes for Bhutan"], [
["Missed or stopped insulin", "Commonest. Causes include cost, running out, fear of injections, use of traditional medicine instead of insulin, and stopping insulin when not eating"],
["Infection", "Pneumonia, UTI, skin and foot infection, TB; fever may be absent"],
["New-onset diabetes", "Type 1 in young adults; ketosis-prone type 2"],
["Acute illness", "MI, stroke, pancreatitis, trauma, surgery"],
["Drugs", "SGLT2 inhibitors (euglycaemic DKA), steroids, thiazides, antipsychotics"],
["Pregnancy", "DKA occurs at lower glucose levels; fetal death risk"],
["Alcohol, starvation, insulin pump failure", "—"]])}
<p>DKA in adults now has a mortality under 1% in good centres, but it is much higher in older people, in those with severe illness and where care is delayed. HHS has a mortality of 5–16%.${r(1)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("From insulin deficiency to DKA", [
F.s("Absolute or relative insulin deficiency + high glucagon, cortisol and adrenaline"), F.a,
F.b([["Liver", F.s("Gluconeogenesis and glycogenolysis → hyperglycaemia")], ["Fat", F.s("Lipolysis → free fatty acids → ketones (β-hydroxybutyrate, acetoacetate)")]]), F.a,
F.b([["Osmotic diuresis", F.e("Dehydration (often 5–8 L), sodium, potassium, phosphate loss")], ["Ketoacidosis", F.e("High anion gap acidosis, vomiting, Kussmaul breathing")]]), F.a,
F.s("Vomiting and dehydration worsen insulin resistance: a vicious cycle")])}
<p><b>Potassium:</b> the body is short of 3–6 mmol/kg, yet the serum level is usually normal or high at first, because acidosis and lack of insulin shift potassium out of cells. Insulin and fluids drive it back in, so it falls fast. That is why potassium must be known before insulin is given.${r(1)}</p>
<p><b>HHS</b> differs: there is enough insulin to stop ketone production, so the illness develops over days. Glucose rises very high (often over 600 mg/dL), and severe water loss leads to hyperosmolality, confusion, clotting and kidney failure.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG / protocol", "ICMR STW 2022 (India)", "Consensus 2024 (ADA/EASD/JBDS)", "This guide and why"], [
["Glucose criterion", "—", "—", "200 mg/dL or more, or known diabetes", "Consensus — catches euglycaemic DKA"],
["Bicarbonate criterion", "—", "Under 15–18", "Under 18", "Under 18"],
["First fluid", "20 mL/kg bolus (STG); 1 L over 2 h then 1 L every 4 h (PHC protocol)", "1 L 0.9% saline in first hour, then 250–500 mL/h", "0.9% saline or balanced crystalloid 500–1000 mL/h for 2–4 h", "500–1000 mL/h; balanced preferred where available " + LB.loc()],
["Insulin bolus", "—", "0.1 unit/kg IV bolus then 0.1 unit/kg/h", "No bolus unless IV access delayed", "No routine bolus"],
["When glucose falls", "—", "Add 5% dextrose at 250 mg/dL", "5–10% dextrose at 250 mg/dL; insulin down to 0.05 unit/kg/h", "Consensus (JBDS keeps 0.1 and adds 10% dextrose — also acceptable)"],
["Potassium threshold for delaying insulin", "—", "Under 3.3", "Under 3.5", "Under 3.5 (safer)"],
["Bicarbonate", "—", "pH under 6.9, or under 7.1 with hypotension or hyperkalaemia", "Consider if pH under 7.0", "Consider only if pH under 7.0"],
["Mild DKA", "Refer", "—", "Subcutaneous rapid-acting insulin 1–2-hourly acceptable", "SC option where pumps are scarce"],
["Resolution", "—", "Glucose under 250, normal anion gap, eating", "Ketones under 0.6 and pH 7.3 or more or HCO3 18 or more; not anion gap or urine ketones", "Consensus; anion gap if ketone meter unavailable"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "DKA", "HHS"], [
["Onset", "Hours to 1–2 days", "Days to weeks"],
["Thirst, polyuria, weight loss", "Yes", "Yes, marked"],
["Nausea, vomiting, abdominal pain", "Common (can mimic an acute abdomen)", "Less common"],
["Breathing", "Deep, sighing (Kussmaul); fruity (acetone) breath", "Normal"],
["Dehydration", "Moderate–severe", "Severe (deficit often 8–12 L)"],
["Mental state", "Alert to drowsy; coma in severe DKA", "Confusion, seizures, focal signs, coma (osmolality over 320)"],
["Glucose", "Usually 250–600 mg/dL; may be under 200 (euglycaemic)", "Usually over 600 mg/dL"]])}
${tbl(["Severity (consensus 2024)", "Mild", "Moderate", "Severe"], [
["β-hydroxybutyrate (mmol/L)", "3.0–6.0", "3.0–6.0", "Over 6.0"],
["pH", "Over 7.25 to under 7.30, or HCO3 15–18", "7.0–7.25", "Under 7.0"],
["Bicarbonate (mmol/L)", "15–18", "10 to under 15", "Under 10"],
["Mental status", "Alert", "Alert or drowsy", "Stupor or coma"],
["Suggested level of care", "Ward or observation", "Step-down or HDU", "ICU"]])}
${box("red", "Danger signs — senior help and HDU/ICU", `<ul><li>pH under 7.0, bicarbonate under 5, ketones over 6 mmol/L</li><li>Potassium under 3.5 or over 6.0 on admission</li><li>GCS under 12, SBP under 90, pulse over 100 or under 60, SpO₂ under 92%</li><li>Anion gap over 16, urine output under 0.5 mL/kg/h</li><li>Pregnancy, heart or kidney failure, age over 65</li></ul>`)}
<h3>The typical patient</h3>
<p>A 22-year-old woman from Wangdue Phodrang with type 1 diabetes since age 14 stopped her insulin two days ago because she was vomiting and "not eating". She is drowsy but rousable, with deep rapid breathing, pulse 118 and BP 96/60. Weight 50 kg, glucose 486 mg/dL, urine ketones 3+, venous pH 7.08, bicarbonate 8 mmol/L, potassium 5.6 mmol/L, sodium 131, chloride 98 (anion gap 25), creatinine 1.4 mg/dL. Urine microscopy shows pus cells. <b>This is severe DKA, by bicarbonate under 10, triggered by insulin omission and a probable UTI.</b> She receives 1 L 0.9% saline over the first hour, then about 500 mL/h. Insulin starts at 5 units/hour (0.1 × 50 kg), with no potassium in the first bag because K is 5.6. Potassium is rechecked at 2 hours, and from then 20–30 mmol KCl goes into each litre to keep K at 4–5. When glucose falls under 250 mg/dL, 10% dextrose is added and insulin is reduced to 2.5 units/hour. She gets ceftriaxone after a urine culture, and a full talk about sick-day rules before discharge: "Never stop insulin, even when you cannot eat."</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Test"], [
["Alcoholic ketoacidosis", "Alcohol binge then vomiting; glucose normal or low", "Glucose, ethanol; give thiamine and dextrose"],
["Starvation ketosis", "Bicarbonate rarely under 18; mild ketones", "History"],
["Lactic acidosis (sepsis, shock, metformin)", "Raised lactate", "Lactate"],
["Uraemic acidosis", "Very high creatinine", "Renal function"],
["Toxic alcohols, salicylates", "Osmolal gap; history", "Osmolal gap, salicylate level"],
["Euglycaemic DKA", "SGLT2 inhibitor, pregnancy, low intake; glucose under 200", "<b>Measure ketones and pH in any unwell person on an SGLT2 inhibitor</b>"],
["Acute abdomen (appendicitis, pancreatitis)", "Pain persists after acidosis corrects", "Examine again after 6–12 h; lipase, ultrasound"],
["Hypoglycaemia", "Drowsy patient on insulin", "Glucose first"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Capillary and lab glucose", "Diagnosis, hourly monitoring", "Meters read 'HI' above about 600 mg/dL", "Essential"],
["Blood ketones (β-hydroxybutyrate)", "Diagnosis and monitoring", "Preferred; urine ketones (nitroprusside) detect acetoacetate only and lag behind", "Essential where available"],
["Venous blood gas (pH, HCO3)", "Severity; repeat 2–4-hourly", "Venous is as good as arterial", "Essential"],
["Sodium, potassium, chloride, urea, creatinine", "Anion gap, K, AKI", "Anion gap = Na − (Cl + HCO3); normal about 12", "Essential"],
["Corrected sodium, effective osmolality", "HHS, mixed states, rate of change", "Calculator below", "Essential"],
["CBC", "Infection", "Leucocytosis up to about 25 × 10⁹/L occurs with DKA alone", "Essential"],
["ECG", "Potassium effects, silent MI", "Peaked T waves, U waves", "Essential"],
["Urine RE and culture, blood culture, chest X-ray", "Trigger", "Sputum for TB if cough", "As indicated"],
["Lipase or amylase", "Pancreatitis", "Amylase is often raised in DKA alone", "If pain persists"],
["Phosphate, magnesium", "Falls during treatment", "Replace only if severe or symptomatic", "Selected"],
["Pregnancy test", "Women of reproductive age", "—", "Essential"],
["HbA1c", "Chronic control", "—", "Later"]])}
<div class="calc" data-calc="osmo"></div>
` },

{ id: "staging", title: "First-hours plan", html: `
<p>Enter weight, blood pressure, potassium and glucose for the fluid, insulin, potassium and dextrose orders, following the 2024 consensus and the ICMR workflow.${r(1, 3)}</p>
<div class="calc" data-calc="dkaadult"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. First hour</h3>
<ol><li>ABC; two large IV cannulas; bloods (glucose, ketones, gas, electrolytes, creatinine, CBC, cultures); ECG and cardiac monitor.</li>
<li><b>Fluids:</b> 0.9% saline or ${dr("ringer_lactate")}: 500–1000 mL/hour for the first 2–4 hours (500 mL over 10–15 min boluses if SBP under 90; 250 mL boluses with reassessment if elderly, heart or kidney failure). Balanced crystalloids resolve DKA slightly faster and cause less hyperchloraemic acidosis.${r(1)}</li>
<li><b>Potassium before insulin.</b></li>
<li><b>Insulin:</b> fixed-rate ${dr("insulin_soluble")} 0.1 unit/kg/hour IV (50 units in 50 mL 0.9% saline = 1 unit/mL, by syringe pump; if no pump, a carefully counted drip in a burette). Continue the patient's usual long-acting insulin.</li>
<li>Catheterise only if no urine after 1 hour or the patient is unconscious; NG tube if vomiting and drowsy.</li></ol>
<h3>B. Potassium</h3>
${tbl(["Serum K (mmol/L)", "Action (consensus 2024)", "ICMR"], [
["Under 3.5", dr("kcl") + " 10 mmol/hour (central line or large vein, cardiac monitor); <b>hold insulin</b> until over 3.5", "Hold insulin under 3.3"],
["3.5–5.0", "20–30 mmol KCl in each litre to keep 4–5", "10–20 mmol/h while under 5.5"],
["5.0 or more", "None; recheck at 2 hours", "—"]])}
<p>Check potassium 2 hours after insulin starts, then 4-hourly. A level of 2.5 or under during treatment triples mortality.${r(1)}</p>
<h3>C. Glucose falling, acidosis persisting</h3>
<ul><li>When glucose is under 250 mg/dL, add 5–10% ${dr("dextrose")} (for example 10% at 125 mL/h, or D5 at 50–100 mL/h) and reduce insulin to 0.05 unit/kg/h. Keep glucose around 200 mg/dL until ketones are cleared.</li>
<li>Targets each hour: ketones fall by 0.5 mmol/L or more, bicarbonate rises by 3 or more, glucose falls by 50–70 mg/dL. If not, check the pump, line and dose, and look for an untreated trigger.</li></ul>
<h3>D. Mild DKA without a pump</h3>
<p>Alert patients with mild or uncomplicated moderate DKA can be treated with subcutaneous rapid-acting analogue (${dr("insulin_analogue")}) every 1–2 hours, plus fluids and potassium, in an emergency or step-down unit (Cochrane 2016: no difference from IV insulin). Soluble insulin given subcutaneously is slower and less predictable.${r(1, 5)}</p>
<h3>E. Other treatments</h3>
<ul><li>${dr("sodium_bicarbonate")}: consider only if pH is under 7.0. Give 100 mmol of 8.4% in 400 mL sterile water over 2 hours, repeated until pH is above 7.0, with extra potassium.</li>
<li>Phosphate: only if under 1.0 mmol/L with muscle weakness, or respiratory or cardiac compromise.</li>
<li>Thromboprophylaxis with ${dr("enoxaparin")} unless contraindicated (DKA and HHS are prothrombotic).</li>
<li>Antibiotics if infection is likely; do not wait for fever.</li></ul>
<h3>F. Resolution and switching to subcutaneous insulin</h3>
<ul><li>Resolved: ketones under 0.6 mmol/L and pH 7.3 or more (or bicarbonate 18 or more). Without a ketone meter: anion gap 12 or less, bicarbonate 18 or more and the patient eating.</li>
<li>Basal-bolus insulin: total daily dose 0.5–0.6 unit/kg (0.3 if frail or CKD), or the previous dose. Half as basal (NPH twice daily or a long-acting analogue), half as mealtime soluble or rapid-acting. In Bhutan, premixed 30/70 twice daily is often the practical choice.</li>
<li>Give basal insulin 1–2 hours before stopping the drip (30–60 minutes for rapid-acting with a meal).</li></ul>
<h3>G. HHS — what differs</h3>
<ul><li>Diagnosis: glucose 600 mg/dL or more, effective osmolality over 300 mOsm/kg (or total over 320), no significant ketoacidosis (β-hydroxybutyrate under 3.0, pH 7.3 or more, bicarbonate 15 or more).</li>
<li>Fluids are the main treatment: 0.9% saline first, then by sodium and osmolality. Glucose should fall no faster than 90–120 mg/dL per hour, sodium no more than 10 mmol/L in 24 hours, and osmolality by 3–8 mOsm/kg per hour.</li>
<li>Insulin is started only when glucose stops falling on fluids alone, at 0.05 unit/kg/h (earlier at 0.1 if ketones are high, as in mixed DKA/HHS).</li>
<li>Resolved: osmolality under 300, glucose under 250 mg/dL, urine output over 0.5 mL/kg/h and improved cognition. Full anticoagulant prophylaxis; watch the feet (pressure ulcers).${r(1)}</li></ul>
<h3>H. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "RBG over 250 with warning signs: 0.9% saline 1 L over 2 h (protocol), urine ketones, refer. Do not give insulin without a potassium result unless transfer will take many hours and senior advice is obtained"],
["District hospital", "Fluids, electrolytes, gas if available; soluble insulin infusion or hourly SC doses; ECG for potassium; antibiotics; refer severe DKA, HHS, pregnancy, or K under 3.5"],
["Referral hospital (JDWNRH, regional)", "HDU/ICU care, blood gases, ketone meters, central access for potassium, diabetes educator before discharge"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("insulin_soluble"), "0.1 unit/kg/h IV; 0.05 unit/kg/h once glucose under 250", "50 units in 50 mL saline; NEML"],
[dr("insulin_analogue"), "SC every 1–2 h for mild DKA (e.g. 0.2 unit/kg then 0.1 unit/kg hourly)", "Where available"],
[dr("kcl"), "20–30 mmol/L of fluid; 10 mmol/h if K under 3.5", "Never as IV bolus; maximum 20 mmol/h peripherally"],
[dr("ringer_lactate"), "500–1000 mL/h first 2–4 h", "Balanced crystalloid; NEML"],
[dr("dextrose"), "5–10% when glucose under 250 mg/dL", "With continued insulin"],
[dr("sodium_bicarbonate"), "100 mmol (8.4%) in 400 mL water over 2 h if pH under 7.0", "Rarely needed"],
[dr("enoxaparin"), "40 mg SC daily", "VTE prophylaxis"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and special groups", html: `
<ul><li><b>Pregnancy:</b> DKA can occur at glucose under 200 mg/dL. Fetal loss is 10–35%. Use the same treatment, with left lateral tilt, fetal monitoring, an obstetric team, and a higher dextrose rate to allow insulin to continue. Do not deliver an unstable mother for fetal distress — correct the DKA first.</li>
<li><b>Older adults, heart or kidney failure:</b> smaller fluid boluses (250 mL) and frequent review; HHS is more likely.</li>
<li><b>SGLT2 inhibitor users:</b> stop the drug; DKA may be euglycaemic. Give dextrose early so that insulin can continue. Do not restart until recovered and eating.</li>
<li><b>Young adults (under 25):</b> cerebral oedema can occur; use the slower paediatric approach for adolescents (see <a href="#/d/dka-child">DKA in children</a>).</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["No infusion pump", "Burette with counted drops, or hourly SC rapid-acting insulin for mild DKA", "Safe dosing"],
["Recurrent DKA", "Ask about cost, supply, insulin storage, depression, eating disorder, alcohol", "Most recurrence is insulin omission"],
["Abdominal pain persists after acidosis resolves", "Look for surgical cause", "DKA pain should settle with treatment"],
["Hyperchloraemic acidosis on day 2", "Normal anion gap acidosis from saline; switch to Ringer lactate", "Not persistent DKA if ketones are cleared"],
["Ketones cleared but patient not eating", "Continue IV insulin with dextrose", "Avoid rebound ketosis"],
["Mucormycosis (black nasal eschar, facial swelling)", "Urgent ENT, amphotericin", "Associated with DKA"]])}
` },

{ id: "complications", title: "Complications", html: `
${tbl(["Complication", "Prevention and treatment"], [
["Hypokalaemia", "Potassium in fluids; 2- then 4-hourly checks"],
["Hypoglycaemia", "Dextrose once glucose under 250; hourly glucose"],
["Cerebral oedema (adolescents, young adults)", "Avoid rapid falls in osmolality; mannitol 0.5–1 g/kg or 3% saline"],
["Hyperchloraemic acidosis", "Balanced fluids"],
["Venous thrombosis", "LMWH prophylaxis"],
["Acute kidney injury", "Fluids; avoid nephrotoxins"],
["Osmotic demyelination (HHS)", "Slow sodium correction"],
["Aspiration", "NG tube if vomiting and drowsy"]])}
` },

{ id: "followup", title: "Before discharge and follow-up", html: `
<ul><li>Find and treat the trigger; review insulin supply, storage (no fridge? cool clay pot or shaded water container), injection technique and glucose meter use.</li>
<li><b>Sick-day rules</b> taught to the patient and family; diabetes clinic review within 1–2 weeks.</li>
<li>Screen for depression and alcohol use; involve family support.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Never stop your insulin, even if you cannot eat. Your body needs insulin when you are ill — often more."</li><li>When ill: check sugar every 3–4 hours; drink fluids with sugar or salt; keep taking basal insulin; check urine ketones if you have strips.</li><li>Come to hospital the same day for vomiting that does not stop, fast or deep breathing, abdominal pain or drowsiness.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "Kussmaul breathing", src: "images/kussmaul-breathing.svg", mod: "Diagram", ctx: "Metabolic acidosis", loc: "Respiratory pattern", find: "Deep, regular, rapid breaths", signs: "Respiratory compensation for acidosis", interp: "Deep sighing breathing in a dehydrated patient: check glucose and ketones at once", by: "Jmarchn", page: "https://commons.wikimedia.org/wiki/File:Kussmaul_breath_no_lang.svg", lic: "CC0" })}
${fig({ title: "Urine strips for glucose and ketones", src: "images/urine-ketone-strip.jpg", mod: "Photograph", ctx: "Bedside test", loc: "Urine", find: "Colour pads for glucose and ketones", signs: "Ketonuria", interp: "Urine ketones of 2+ or more support DKA where blood ketone meters are not available, but they lag behind blood levels", by: "Caipira", page: "https://commons.wikimedia.org/wiki/File:Glucose_Ketones_in_urine.JPG", lic: "CC BY-SA 3.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult DKA: hour by hour", [
F.s("Glucose 200 or more or known diabetes + ketones 3 or more + pH under 7.3 / HCO3 under 18"), F.a,
F.s("Fluids 500–1000 mL/h; bloods, ECG"), F.a,
F.d("Potassium?"), F.a,
F.b([["Under 3.5", F.e("KCl 10 mmol/h; hold insulin")], ["3.5 or more", F.ok("Insulin 0.1 unit/kg/h; KCl 20–30 mmol/L if under 5")]]), F.a,
F.s("Glucose under 250: add dextrose; insulin 0.05 unit/kg/h"), F.a,
F.d("Ketones under 0.6 and pH 7.3 or more?"), F.a,
F.b([["Yes", F.ok("SC basal-bolus; stop drip 1–2 h later")], ["No", F.s("Continue; review trigger and dose")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>The urine strip can show less ketone as the patient improves (it measures acetoacetate) — follow blood ketones or bicarbonate instead.</li>
<li>A "normal" potassium in DKA hides a large deficit.</li>
<li>A white count of 20 in DKA may be stress alone — but look for infection anyway.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Insulin before knowing potassium", "Fatal hypokalaemia", "K result or ECG first"],
["Stopping insulin when glucose normalises", "Rebound ketoacidosis", "Add dextrose, keep insulin"],
["Stopping IV insulin without SC basal", "DKA returns within hours", "Basal 1–2 h before stopping"],
["Routine bicarbonate", "Hypokalaemia, CNS acidosis", "Only if pH under 7.0"],
["Missing euglycaemic DKA", "Delayed treatment", "Ketones in every unwell SGLT2i user"],
["Discharging without sick-day teaching", "Recurrence", "Teach patient and family"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the three diagnostic components of DKA?", "Glucose 200 mg/dL or more (or known diabetes), ketonaemia (β-hydroxybutyrate 3.0 mmol/L or more) and metabolic acidosis (pH under 7.3 and/or bicarbonate under 18 mmol/L).")}
${qa("Intern/MO", "Potassium is 3.1 mmol/L in a patient with DKA. What do you do?", "Give KCl 10 mmol/h with cardiac monitoring and delay insulin until potassium is above 3.5. Continue fluids.")}
${qa("Intern/MO", "A 60 kg patient's glucose falls to 230 mg/dL while pH is 7.18. What changes?", "Add 5–10% dextrose and reduce insulin from 6 to 3 units/hour (0.05 unit/kg/h). Do not stop insulin.")}
${qa("Specialist", "How is DKA resolution defined in the 2024 consensus, and why not the anion gap?", "Ketones under 0.6 mmol/L and pH 7.3 or more or bicarbonate 18 or more. Saline-induced hyperchloraemia can keep bicarbonate low and distort the anion gap even after ketones have cleared.")}
${qa("Specialist", "How does fluid and insulin management of HHS differ?", "Fluids alone first. Insulin at 0.05 unit/kg/h only when glucose stops falling. Glucose fall no more than 90–120 mg/dL/h and sodium no more than 10 mmol/L in 24 h.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Umpierrez GE, Davis GM, ElSayed NA et al. Hyperglycemic crises in adults with diabetes: a consensus report. <i>Diabetes Care</i> 2024;47:1257–1275. <a href="https://doi.org/10.2337/dci24-0032" target="_blank" rel="noopener">doi:10.2337/dci24-0032</a>. Also <i>Diabetologia</i> 2024;67:1455–1479, <a href="https://doi.org/10.1007/s00125-024-06183-8" target="_blank" rel="noopener">doi:10.1007/s00125-024-06183-8</a></li>
<li id="ref-2">Dhatariya KK; Joint British Diabetes Societies for Inpatient Care. The management of diabetic ketoacidosis in adults — an updated guideline from the JBDS. <i>Diabet Med</i> 2022;39:e14788. <a href="https://doi.org/10.1111/dme.14788" target="_blank" rel="noopener">doi:10.1111/dme.14788</a></li>
<li id="ref-3">Department of Health Research, ICMR. Standard Treatment Workflow: Diabetic ketoacidosis. New Delhi, 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §5.4 Diabetic ketoacidosis; and Diabetes Mellitus Management Protocol V3.0, 2023.</li>
<li id="ref-5">Andrade-Castellanos CA, Colunga-Lozano LE, Delgado-Figueroa N, Gonzalez-Padilla DA. Subcutaneous rapid-acting insulin analogues for diabetic ketoacidosis. <i>Cochrane Database Syst Rev</i> 2016;(1):CD011281. <a href="https://doi.org/10.1002/14651858.CD011281.pub2" target="_blank" rel="noopener">doi:10.1002/14651858.CD011281.pub2</a></li>
<li id="ref-6">Indian Council of Medical Research. Guidelines for Management of Type 1 Diabetes. New Delhi, 2022 (chapter 5, acute complications).</li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and protocol", "<span class='pass'>Read</span>", "STG 5.4; Diabetes Protocol V3.0 emergency box"],
["International guidance", "<span class='pass'>Read in full</span>", "2024 consensus (PMC11343900)"],
["India", "<span class='pass'>Read</span>", "ICMR STW 2022, ICMR T1D 2022"],
["Calculator", "<span class='pass'>Hand-checked</span>", "mg/dL; consensus thresholds"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}
` }
]
});
