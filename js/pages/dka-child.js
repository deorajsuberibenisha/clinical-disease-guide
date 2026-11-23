/* Diabetic ketoacidosis — children and adolescents
   Sources: Bhutan STG 5.4; Bhutan Hospital IMNCI 2024 (DKA only as a cause of breathlessness); ICMR Guidelines for Management of Type 1 Diabetes 2022 (ch. 5, read in full);
   ISPAD 2022 (Glaser, doi 10.1111/pedi.13406 — full text not accessible; only its listed changes used); PECARN FLUID trial (NEJM 2018); Muir 2004 cerebral oedema criteria. */
registerPage({
id: "dka-child",
title: "Diabetic Ketoacidosis (DKA) — Children and Adolescents",
subtitle: "Spot DKA in a breathless, vomiting or drowsy child; restore circulation without flooding; replace the deficit evenly over 24–48 hours; start insulin an hour after fluids at 0.05–0.1 unit/kg/hour with no bolus; manage potassium; and watch every hour for cerebral oedema, the main cause of death",
age: "Children and adolescents", specs: ["paeds", "endo", "picu", "emerg"],
keywords: ["paediatric DKA", "childhood DKA", "cerebral oedema", "cerebral edema", "ISPAD", "PECARN", "new onset type 1 diabetes", "insulin infusion child", "mannitol", "hypertonic saline", "fluid deficit", "Holliday-Segar", "sick day rules child"],
related: ["dka-adult", "dm-child", "hypo-child", "sepsis-child", "icp-child", "ge-child", "shock-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Many children with type 1 diabetes in South Asia are first diagnosed in DKA, often after days of being treated for "gastroenteritis", "pneumonia" or "worms". The diagnosis needs only a finger-prick glucose and a urine dip. Most deaths come from cerebral oedema, low potassium and delay. Steady, measured correction and an hourly neurological check save lives.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Vomiting with deep fast breathing, weight loss, bed-wetting, thirst; abdominal pain; drowsiness; candidal nappy rash in infants. <b>Check glucose in every sick child who is breathing fast without a chest cause.</b></p></div>
<div><h4>Diagnose</h4><p>Glucose over 200 mg/dL (11 mmol/L) + pH under 7.3 or bicarbonate under 18 + ketones (blood 3 mmol/L or more, or urine 2+).</p></div>
<div><h4>Circulation</h4><p>Shock: 0.9% saline 20 mL/kg, reassess. No shock: 10 mL/kg (to 20 mL/kg) over 20–60 minutes.</p></div>
<div><h4>Deficit</h4><p>Assume 5–10% (ICMR: 3, 6 or 9%) and replace evenly over 24–48 h with maintenance. Use the calculator.</p></div>
<div><h4>Insulin</h4><p>${dr("insulin_soluble")} 0.05–0.1 unit/kg/h, started <b>at least 1 hour after</b> fluids, <b>no bolus</b>, only once potassium is above 3.3.</p></div>
<div><h4>Brain</h4><p>Headache, slowing pulse, rising BP, falling GCS, incontinence: ${dr("mannitol")} 0.5–1 g/kg or ${dr("hypertonic_saline", "3% saline")} 2.5–5 mL/kg at once, before any scan.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 5.4 makes hydration the mainstay, starting with a 20 mL/kg bolus and maintenance, with referral to a higher centre. The Hospital IMNCI 3rd edition (2024) lists DKA only as a metabolic cause of fast breathing. There is no national paediatric DKA protocol, so this chapter follows ICMR 2022 (India) and ISPAD 2022. A practical point: a 20 mL/kg bolus is right for a shocked child, but a child who is not shocked should get 10 mL/kg and slow deficit replacement. Children are cared for at JDWNRH and regional referral hospitals. Soluble insulin, KCl, mannitol and 0.9% saline are on NEML 2025. Blood ketone meters are scarce, so use urine ketones with venous gas or serum bicarbonate. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is and who is at risk", html: `
<p>DKA is hyperglycaemia, ketosis and acidosis caused by insulin deficiency. In India, 28.7% of 2,335 young people with type 1 diabetes in the national registry (YDR) had DKA at diagnosis. Two Indian PICU series reported mortality of 12.7% and 13.2%, far higher than the 0.15–0.3% seen in well-resourced settings.${r(1)}</p>
${tbl(["Risk factor", "Notes"], [
["Age under 5 years, especially under 2", "Highest DKA rate at diagnosis; highest cerebral oedema risk"],
["Delayed diagnosis", "Symptoms mistaken for gastroenteritis, pneumonia, UTI, worms"],
["Insulin omission", "Commonest cause of recurrent DKA. Causes include cost, adolescents, eating disorders, family stress, and stopping insulin for 'alternative medicine'"],
["Intercurrent illness without sick-day rules", "Vomiting, fever, infection"],
["Low socioeconomic status, remote homes", "Late presentation"]])}
${tbl(["Severity (ICMR 2022)", "pH", "Bicarbonate (mmol/L)"], [
["Mild", "7.20–7.29", "10–15"],
["Moderate", "7.10–7.19", "5–10"],
["Severe", "Under 7.1", "Under 5"]])}
<p>ISPAD 2022 changed the bicarbonate threshold for diagnosis to under 18 mmol/L. The calculator grades severity by pH: under 7.3 mild, under 7.2 moderate, under 7.1 severe.${r(1, 2)}</p>
` },

{ id: "patho", title: "Pathophysiology and cerebral oedema", html: `
${F.chart("DKA in a child", [
F.s("Insulin deficiency + counter-regulatory hormones"), F.a,
F.b([["Hyperglycaemia", F.s("Osmotic diuresis: dehydration, Na, K, phosphate loss")], ["Ketogenesis", F.s("Acidosis: vomiting, Kussmaul breathing")]]), F.a,
F.e("Dehydration 5–10%; total-body K deficit 3–6 mmol/kg")])}
${F.chart("Cerebral oedema", [
F.s("Risk: young age, new diagnosis, severe acidosis, low pCO₂, high urea, sodium not rising as glucose falls, bicarbonate or insulin in the first hour"), F.a,
F.s("Brain hypoperfusion during DKA, then reperfusion and cell swelling with treatment"), F.a,
F.e("Usually 4–12 hours after treatment starts (can occur before or up to 24–48 h)")])}
<p>Cerebral oedema occurs in 0.5–1% of episodes, with 20–25% mortality, and accounts for 60–90% of DKA deaths in children. The PECARN FLUID trial (1,389 episodes) found no difference in neurological outcome between faster and slower rehydration, or between 0.45% and 0.9% saline. So the old fear of fluids should not leave a shocked child under-resuscitated, and calm, steady replacement remains the rule.${r(1, 3)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "ICMR 2022", "ISPAD 2022 / BSPED", "This guide and why"], [
["Bicarbonate criterion", "—", "Under 15", "Under 18 (ISPAD 2022)", "Under 18"],
["Initial bolus", "20 mL/kg", "10 mL/kg 0.9% over 1 h or less, repeat if needed", "Shock 20 mL/kg; otherwise 10–20 mL/kg over 20–30 min (ISPAD)", "Shock 20 mL/kg; no shock 10 mL/kg " + LB.loc()],
["Deficit", "—", "3%, 6% or 9% by clinical dehydration", "5–10%; BSPED: 5% if pH 7.1 or more, 10% if under 7.1", "Calculator uses BSPED bands; ICMR acceptable"],
["Replacement time", "—", "24–48 h evenly", "24–48 h", "48 h in the calculator (safer for the young)"],
["Maintenance", "—", "1500 mL/m²/day", "Holliday–Segar (BSPED: reduced formula)", "Holliday–Segar"],
["Fluid type", "—", "0.9% for 5–6 h, then 0.45% if Na rising", "0.45–0.9% saline or balanced; no goal of raising sodium (ISPAD 2022)", "0.9% saline with KCl; Ringer lactate acceptable"],
["Insulin", "—", "0.05–0.1 unit/kg/h, 1 h after fluids, no bolus", "0.05–0.1 unit/kg/h, 1–2 h after fluids, no bolus", "Same; 0.05 in young children and mild DKA"],
["Delay insulin if K under", "—", "3.3", "ISPAD: replace K first if hypokalaemic", "3.3"],
["Mannitol dose", "—", "0.25–1 g/kg over 20 min", "0.5–1 g/kg over 10–15 min", "0.5–1 g/kg"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Notes"], [
["Polyuria, polydipsia, weight loss, new bed-wetting", "Often for days or weeks; ants around urine"],
["Vomiting, abdominal pain", "Mistaken for gastroenteritis or appendicitis"],
["Deep, sighing, rapid breathing; acetone breath", "Mistaken for pneumonia or asthma; the chest is clear"],
["Dehydration, tachycardia, cool peripheries", "Children look less dry than they are (hyperosmolality keeps fluid in vessels)"],
["Drowsiness", "Coma is rare: think cerebral oedema"],
["Infants", "Irritability, poor feeding, weight loss, candidal nappy rash"]])}
${box("red", "Danger signs — PICU or senior help now", `<ul><li>Age under 5, especially under 2</li><li>pH under 7.1, bicarbonate under 5</li><li>Shock, GCS under 14, any neurological sign</li><li>Potassium under 3.3 or over 6, sodium falling during treatment</li><li>High urea, pCO₂ under 2.5 kPa (about 18 mmHg)</li></ul>`)}
<h3>The typical child</h3>
<p>An 8-year-old girl from Samtse, 20 kg, was treated for "stomach flu" three days ago. Now she is vomiting, breathing deeply and fast, and drowsy but answering questions (GCS 14). Pulse 132, capillary refill 3 seconds, BP normal for age. Glucose 520 mg/dL, urine ketones 3+, venous pH 7.08, bicarbonate 6, potassium 4.6. <b>This is severe DKA (pH under 7.1) at the onset of type 1 diabetes, without shock.</b> She gets 200 mL of 0.9% saline (10 mL/kg) over 30–60 minutes. Then 10% deficit (2,000 mL) minus the bolus, over 48 hours, plus Holliday–Segar maintenance (1,500 mL/day), comes to about <b>100 mL/hour</b> of 0.9% saline with KCl 40 mmol/L once she passes urine. Soluble insulin starts one hour after fluids at 0.05–0.1 unit/kg/h (1–2 units/hour). She has hourly glucose, GCS and heart rate checks, and a nurse is told exactly what headache or a slowing pulse means.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Test"], [
["Gastroenteritis with dehydration", "Diarrhoea; glucose normal", "Glucose, urine ketones (starvation ketones are usually mild)"],
["Pneumonia, bronchiolitis, asthma", "Chest signs, hypoxia", "Glucose; chest X-ray"],
["Sepsis", "Fever, shock; stress hyperglycaemia is usually under 200", "Gas, cultures"],
["Appendicitis or acute abdomen", "Pain persists after acidosis corrects", "Re-examine"],
["Salicylate or toxic ingestion", "History; respiratory alkalosis plus acidosis", "Levels"],
["Inborn errors of metabolism (infants)", "Recurrent ketoacidosis, hypoglycaemia", "Ammonia, lactate"],
["Stress hyperglycaemia", "Glucose high but no ketoacidosis", "Ketones, gas"]])}
` },

{ id: "invest", title: "Investigations and monitoring", html: `
${tbl(["Test", "When", "Why"], [
["Glucose (capillary)", "Hourly", "Aim for a fall of 50–75 mg/dL/h; add dextrose at 250"],
["Venous gas, Na, K, Cl, urea, creatinine", "Baseline, at 2 h, then 2–4-hourly", "Severity, K, corrected sodium, anion gap"],
["Blood ketones (or urine)", "1–2-hourly if meter available", "Resolution"],
["Corrected sodium", "Each sample", "Should rise as glucose falls; a fall warns of cerebral oedema"],
["CBC, cultures", "Baseline", "Infection (leucocytosis is common without infection)"],
["ECG", "If K delayed", "Peaked T (high K), U waves (low K)"],
["Weight", "Admission", "Use the real weight for doses"],
["Neuro observations: GCS, pupils, HR, BP, headache, behaviour", "Hourly (half-hourly if under 5 or severe)", "Cerebral oedema"],
["Fluid balance chart", "Hourly", "Input and output"],
["HbA1c, coeliac serology, thyroid, islet antibodies", "Once stable", "New diagnosis"]])}
<div class="calc" data-calc="osmo"></div>
` },

{ id: "staging", title: "Fluid and insulin plan", html: `
<p>Enter weight, pH and shock status for the bolus, deficit, maintenance, hourly rate and insulin dose (ISPAD/BSPED principles). For comparison, the ICMR method is maintenance 1500 mL/m²/day plus a 3, 6 or 9% deficit, given evenly over 24–48 hours.${r(1, 2)}</p>
<div class="calc" data-calc="dkafluid"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Resuscitation</h3>
<ul><li>Airway, breathing; oxygen if shocked; NG tube if vomiting and drowsy.</li>
<li><b>Shock</b> (weak pulses, hypotension, prolonged CRT with altered consciousness): 0.9% saline 20 mL/kg rapidly, reassess, and repeat 10 mL/kg if needed. Call PICU.</li>
<li><b>No shock:</b> 10 mL/kg 0.9% saline over 30–60 minutes (ISPAD: 10–20 mL/kg over 20–30 minutes).</li></ul>
<h3>B. Deficit and maintenance</h3>
<ul><li>Replace the deficit (5–10%) <b>evenly over 24–48 hours</b> plus maintenance. Do not add urine output to the replacement volume.</li>
<li>0.9% saline (or Ringer lactate) for at least the first 4–6 hours; then 0.45–0.9% saline according to sodium.</li>
<li>Oral fluids only when clearly improving and no longer vomiting.</li></ul>
<h3>C. Potassium</h3>
${tbl(["Serum K (mmol/L)", "KCl in fluid (ICMR)", "Insulin"], [
["Under 3.3", "40–60 mmol/L; correct first", "<b>Wait</b> until above 3.3"],
["3.3–4.3", "30–40 mmol/L", "Start"],
["4.3–5.3", "20–30 mmol/L", "Start"],
["Over 5.3", "0–20 mmol/L; add once urine flows and K falls", "Start"]])}
<p>The usual starting concentration is 40 mmol/L. Keep the maximum around 0.5 mmol/kg/h, with cardiac monitoring above that.${r(1)}</p>
<h3>D. Insulin</h3>
<ul><li>${dr("insulin_soluble")} 50 units in 50 mL 0.9% saline (1 unit/mL) by syringe pump, at 0.05–0.1 unit/kg/h. Start at least 1 hour after fluids begin. <b>No IV bolus</b>, because it raises the risk of cerebral oedema.</li>
<li>Use 0.05 unit/kg/h for young children, mild DKA, or if the glucose falls fast.</li>
<li>When glucose is under 250 mg/dL, add 5% dextrose to the saline (10% if under 150 or still falling fast). <b>Keep the insulin running</b> until the acidosis resolves; lower the rate only if glucose stays low despite 10% dextrose.</li>
<li>If glucose falls by more than 90–100 mg/dL per hour in the first hours, add dextrose earlier.</li></ul>
<h3>E. Bicarbonate and phosphate</h3>
<ul><li>${dr("sodium_bicarbonate")}: only for pH under 6.9 with poor cardiac contractility, or life-threatening hyperkalaemia. It raises cerebral oedema risk.</li>
<li>Phosphate: only if severe (under 1 mg/dL) or symptomatic.</li></ul>
<h3>F. Cerebral oedema</h3>
${tbl(["Criteria (Muir 2004)", "Features"], [
["Diagnostic (any one)", "Abnormal motor or verbal response to pain; decorticate or decerebrate posture; cranial nerve palsy (especially III, IV, VI); abnormal neurogenic breathing (grunting, tachypnoea, Cheyne–Stokes, apnoea)"],
["Major", "Altered or fluctuating consciousness; sustained heart-rate fall over 20/min not due to better volume or sleep; age-inappropriate incontinence"],
["Minor", "Vomiting; headache; lethargy; diastolic BP over 90 mmHg; age under 5"],
["Treat if", "One diagnostic, or two major, or one major plus two minor criteria"]])}
<ol><li>Treat <b>at once</b>, before imaging: ${dr("mannitol")} 0.5–1 g/kg IV over 10–20 minutes (repeat after 30 min–2 h if no response) <b>or</b> ${dr("hypertonic_saline", "3% saline")} 2.5–5 mL/kg over 10–15 minutes.</li>
<li>Head up 30°, reduce fluid rate by a third, avoid hypotension.</li>
<li>Intubate if failing airway; avoid hyperventilation unless herniating.</li>
<li>CT only after stabilisation, to exclude thrombosis or haemorrhage.${r(1, 4)}</li></ol>
<h3>G. Switching to subcutaneous insulin</h3>
<ul><li>When glucose is under 200 mg/dL, the child is eating, and at least two of: pH over 7.30, bicarbonate 15 or more (18 by ISPAD 2022), anion gap under 12, β-hydroxybutyrate under 1.</li>
<li>Give SC insulin before a meal; stop the infusion 30–60 minutes later (rapid-acting) or 1–2 hours later (soluble). Usual total 0.7–1 unit/kg/day for a new diagnosis (adolescents up to 1.2), as basal-bolus or twice-daily premixed. See <a href="#/d/dm-child">diabetes in children</a>.${r(1)}</li></ul>
<h3>H. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Glucose and urine ketones in any vomiting, breathless or drowsy child. Shock: 20 mL/kg 0.9% saline; no shock: 10 mL/kg, then maintenance. Refer urgently with a nurse. No insulin without a potassium result unless told to by a referral-hospital doctor"],
["District hospital", "Electrolytes; insulin infusion with a syringe pump (or SC hourly analogue for mild DKA); hourly neuro checks; refer under-5s, severe DKA, or any neurological sign"],
["Referral hospital (JDWNRH, regional)", "PICU; blood gas, ketone meter; diabetes education; registration with the paediatric diabetes clinic"]])}
` },

{ id: "drugs", title: "Medicines and doses (children)", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("insulin_soluble"), "0.05–0.1 unit/kg/h IV; no bolus", "Start 1 h after fluids; K above 3.3"],
["0.9% saline", "Shock 20 mL/kg; otherwise 10 mL/kg; then by calculator", "—"],
[dr("kcl"), "40 mmol/L of fluid (adjust by table)", "Maximum about 0.5 mmol/kg/h"],
[dr("dextrose"), "5% when glucose under 250 mg/dL; 10% under 150", "Added to saline"],
[dr("mannitol"), "0.5–1 g/kg over 10–20 min", "Cerebral oedema"],
[dr("hypertonic_saline", "3% saline"), "2.5–5 mL/kg over 10–15 min", "Alternative to mannitol"],
[dr("sodium_bicarbonate"), "Only pH under 6.9 with cardiovascular compromise", "Specialist"]])}
` },

{ id: "populations", title: "Special groups", html: `
<ul><li><b>Infants and under-5s:</b> highest risk of cerebral oedema; 0.05 unit/kg/h insulin; half-hourly neuro checks; PICU.</li>
<li><b>Adolescents with recurrent DKA:</b> nearly always missed insulin — explore cost, supply, mood, eating disorders and family conflict; supervised injections.</li>
<li><b>Mixed DKA/HHS</b> (glucose over 600 mg/dL, osmolality over 320): larger fluid volumes, slower insulin (0.025–0.05 unit/kg/h once glucose stops falling with fluids), PICU.</li>
<li><b>Malnourished children:</b> cautious fluids; watch for refeeding and heart failure.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Corrected sodium falling during treatment", "Review fluids; consider higher-sodium fluid; increase neuro checks", "Cerebral oedema risk"],
["Glucose under 70 mg/dL", "10% dextrose 2 mL/kg; increase dextrose in fluid; reduce insulin only if needed", "Do not stop insulin"],
["Acidosis not improving after 6–8 h", "Check insulin preparation, line, dose; sepsis; hyperchloraemia", "—"],
["No syringe pump", "Hourly SC rapid-acting analogue 0.1 unit/kg (0.05 in young children) for mild/moderate DKA in trained hands", "Safe alternative"],
["Severe abdominal pain persisting", "Surgical review", "Appendicitis, pancreatitis"]])}
` },

{ id: "complications", title: "Complications", html: `
${tbl(["Complication", "Notes"], [
["Cerebral oedema", "0.5–1%; 20–25% die, many survivors have brain injury"],
["Hypokalaemia, hypoglycaemia", "Prevent with monitoring"],
["Hyperchloraemic acidosis", "Normal anion gap acidosis after saline; not treatment failure"],
["Acute kidney injury", "Common; usually recovers"],
["Venous thrombosis", "Especially with femoral lines"],
["Infections, mucormycosis", "Look for them"],
["Aspiration", "NG tube if drowsy and vomiting"]])}
` },

{ id: "followup", title: "Discharge, prevention and counselling", html: `
<ul><li>Diabetes education for the child and family: insulin injection, storage, glucose monitoring, hypoglycaemia, sick-day rules.</li>
<li>Register with the paediatric diabetes clinic; school plan; ensure a reliable insulin supply.</li>
<li>Prevention at the community level: teach health workers to check glucose in any child with vomiting, fast breathing, weight loss or bed-wetting.</li></ul>
${box("green", "What to tell the family", `<ul><li>"Insulin is the only treatment for type 1 diabetes. Never stop it, even if your child is not eating — call or come instead."</li><li>When ill: check sugar every 3–4 hours, give fluids, check urine ketones.</li><li>Come the same day for vomiting, fast or deep breathing, stomach pain, drowsiness or confusion.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "Kussmaul breathing", src: "images/kussmaul-breathing.svg", mod: "Diagram", ctx: "Metabolic acidosis", loc: "Respiratory pattern", find: "Deep, rapid, regular breathing", signs: "Compensation for acidosis", interp: "A child breathing like this with a clear chest needs a glucose check", by: "Jmarchn", page: "https://commons.wikimedia.org/wiki/File:Kussmaul_breath_no_lang.svg", lic: "CC0" })}
${fig({ title: "Urine strips for glucose and ketones", src: "images/urine-ketone-strip.jpg", mod: "Photograph", ctx: "Bedside test", loc: "Urine", find: "Colour pads for glucose and ketones", signs: "Glycosuria and ketonuria", interp: "Available at every BHU: glucose plus ketones in a sick child means probable DKA", by: "Caipira", page: "https://commons.wikimedia.org/wiki/File:Glucose_Ketones_in_urine.JPG", lic: "CC BY-SA 3.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with suspected DKA", [
F.s("Glucose over 200 + ketones + pH under 7.3 or HCO3 under 18"), F.a,
F.d("Shock?"), F.a,
F.b([["Yes", F.e("0.9% saline 20 mL/kg, reassess, PICU")], ["No", F.s("10 mL/kg over 30–60 min")]]), F.a,
F.s("Deficit + maintenance evenly over 48 h; KCl 40 mmol/L"), F.a,
F.s("After 1 h, K over 3.3: insulin 0.05–0.1 unit/kg/h, no bolus"), F.a,
F.s("Glucose under 250: add dextrose, keep insulin"), F.a,
F.d("Headache, slow pulse, falling GCS?"), F.a,
F.b([["Yes", F.e("Mannitol or 3% saline now")], ["No", F.ok("Continue; switch to SC when resolved")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>"Fast breathing with a clear chest" is DKA, acidosis or poisoning until proven otherwise.</li>
<li>Headache during DKA treatment is cerebral oedema until proven otherwise.</li>
<li>Do not chase glucose down: aim for a steady fall and clear the ketones.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Missing the diagnosis (treated as gastroenteritis)", "Late, severe DKA", "Glucose in every sick vomiting child"],
["Insulin bolus or insulin in the first hour", "Cerebral oedema", "No bolus; wait 1 h"],
["Repeated large boluses without shock", "Fluid overload", "10 mL/kg, then calculator"],
["Stopping insulin when glucose falls", "Persistent ketoacidosis", "Add dextrose"],
["Waiting for CT to treat cerebral oedema", "Herniation", "Mannitol first"],
["Routine bicarbonate", "Cerebral oedema, hypokalaemia", "Only in extremis"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why is an insulin bolus avoided in children with DKA?", "It causes a rapid fall in glucose and osmolality and is associated with cerebral oedema. The infusion is started at least 1 hour after fluids, without a bolus.")}
${qa("Intern/MO", "Calculate the hourly fluid rate for a 20 kg child with pH 7.08, not shocked.", "Bolus 200 mL; deficit 10% = 2,000 mL minus 200 mL = 1,800 mL over 48 h = 37.5 mL/h; maintenance (Holliday–Segar) 1,500 mL/day = 62.5 mL/h; total about 100 mL/h.")}
${qa("Intern/MO", "Potassium is 3.0 mmol/L. What do you do?", "Give potassium in the fluids (40–60 mmol/L) and do not start insulin until potassium is above 3.3.")}
${qa("Specialist", "What did the PECARN FLUID trial show?", "In 1,389 episodes, faster versus slower rehydration and 0.45% versus 0.9% saline made no difference to neurological outcomes.")}
${qa("Specialist", "Give the Muir criteria that trigger treatment for cerebral oedema.", "One diagnostic criterion, or two major, or one major plus two minor criteria.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Indian Council of Medical Research. Guidelines for Management of Type 1 Diabetes. New Delhi: ICMR, 2022. Chapter 5: Acute complications — diabetic ketoacidosis, hypoglycaemia and infections.</li>
<li id="ref-2">Glaser N, Fritsch M, Priyambada L et al. ISPAD Clinical Practice Consensus Guidelines 2022: diabetic ketoacidosis and hyperglycemic hyperosmolar state. <i>Pediatr Diabetes</i> 2022;23:835–856. <a href="https://doi.org/10.1111/pedi.13406" target="_blank" rel="noopener">doi:10.1111/pedi.13406</a></li>
<li id="ref-3">Kuppermann N, Ghetti S, Schunk JE et al. Clinical trial of fluid infusion rates for pediatric diabetic ketoacidosis. <i>N Engl J Med</i> 2018;378:2275–2287. <a href="https://doi.org/10.1056/NEJMoa1716816" target="_blank" rel="noopener">doi:10.1056/NEJMoa1716816</a></li>
<li id="ref-4">Muir AB, Quisling RG, Yang MCK, Rosenbloom AL. Cerebral edema in childhood diabetic ketoacidosis: natural history, radiographic findings, and early identification. <i>Diabetes Care</i> 2004;27:1541–1546. <a href="https://doi.org/10.2337/diacare.27.7.1541" target="_blank" rel="noopener">doi:10.2337/diacare.27.7.1541</a></li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §5.4; Hospital IMNCI 3rd edition, 2024.</li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG / IMNCI", "<span class='pass'>Read</span>", "STG 5.4; no paediatric DKA protocol"],
["India", "<span class='pass'>Read in full</span>", "ICMR T1D 2022 chapter 5"],
["ISPAD 2022", "<span class='flag'>Partial</span>", "Full text not accessible (publisher block); only its listed changes used"],
["Calculator", "<span class='pass'>Hand-checked</span>", "20 kg, pH 7.08 → about 100 mL/h"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}
` }
]
});
