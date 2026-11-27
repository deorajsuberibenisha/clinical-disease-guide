/* Newborn resuscitation and birth asphyxia / HIE — full depth (Thin-page Round 5, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (Module 2 §4.8 neonatal resuscitation incl. ETT table, adrenaline, volume,
   stopping, §4.8.8 transfer list; §6.6 perinatal asphyxia; §6.4 glucose/fluid table); AHA–AAP 2025 Part 5 Neonatal Resuscitation
   (cpr.heart.org, read in browser: cord, normothermia, ventilation rate, pressures, oxygen by gestation, compressions, adrenaline IV and
   ETT doses, access, volume, suction, cooling, 20 min); ERC 2025 vs AHA 2025 comparison (Trevisanuto et al., Neonatology 2026);
   HELIX trial abstract (Lancet Glob Health 2021); Bhutan NEML 2025. */
registerPage({
id: "asphyxia-child",
title: "Newborn Resuscitation & Birth Asphyxia",
subtitle: "Warm, dry and stimulate; ventilate within the golden minute — good ventilation fixes most babies; compress only after 30 seconds of ventilation that moves the chest; then protect the brain with warmth, glucose, seizure control and careful fluids",
age: "Newborns", specs: ["neo", "nicu", "paeds", "emerg", "obg"],
keywords: ["neonatal resuscitation", "newborn resuscitation", "birth asphyxia", "perinatal asphyxia", "golden minute", "bag mask ventilation", "MR SOPA", "chest compressions newborn", "adrenaline newborn", "epinephrine neonate", "umbilical venous catheter", "HIE", "hypoxic ischaemic encephalopathy", "Sarnat", "therapeutic hypothermia", "cooling", "HELIX", "Helping Babies Breathe", "NRP", "Apgar", "delayed cord clamping", "meconium"],
related: ["neoseizure-child", "preterm-child", "rds-child", "neosepsis-child", "hypo-child", "labour-preg", "pph-preg", "postarrest-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">About 85% of term babies breathe on their own within 30 seconds; another 10% start with drying and stimulation; about 3% need bag-mask ventilation, and only about 1 in 1000 need chest compressions or adrenaline (Bhutan IMNCI 2024). Ventilation that moves the chest is the single most important step.</p>
<div class="glance">
<div><h4>Before birth</h4><p>Warm room, warmer on, towels, bag with masks 0 and 1, suction, timer, stethoscope. <b>Check the bag before every birth</b>.</p></div>
<div><h4>First 30 s</h4><p>Warm, dry, stimulate, position, clear secretions only if needed. Vigorous baby: skin-to-skin, cord clamped at <b>60 s or later</b>.</p></div>
<div><h4>Golden minute</h4><p>Apnoea, gasping or HR under 100: <b>bag-mask ventilation</b> with air (term) at 40–60/min (Bhutan) — AHA 2025 30–60/min.</p></div>
<div><h4>HR under 60</h4><p>After 30 s of ventilation that moves the chest: compressions <b>3:1</b>, 2-thumb technique, oxygen 100%.</p></div>
<div><h4>Drug</h4><p>${dr("adrenaline_arrest", "Adrenaline 1:10,000")} <b>0.1–0.3 mL/kg</b> IV/UVC every 3–5 min; ETT 0.5–1 mL/kg while access is obtained.</p></div>
<div><h4>After</h4><p>Normal temperature, glucose 45 mg/dL+, fluids by day, phenobarbital for seizures, refer moderate–severe asphyxia.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan's Hospital IMNCI 2024 follows the AHA 2020 newborn algorithm (Chart 10): PPV at 40–60 breaths/min, starting pressure 20–25 cmH₂O, air for 35 weeks and over and 21–30% oxygen below 35 weeks, adrenaline 1:10,000 0.1–0.3 mL/kg IV (0.3–1 mL/kg by ETT), saline 10 mL/kg for blood loss, and stopping if the Apgar is 0 at 20 minutes. Severe perinatal asphyxia, convulsions or encephalopathy are on the IMNCI list for transfer to neonatal intensive care. <b>Therapeutic cooling is not routine in Bhutan:</b> a large South Asian trial (HELIX) found cooling increased deaths in units like ours — see "Where guidance differs". Adrenaline 1 mg/mL, normal saline, Ringer's lactate, 10% dextrose and phenobarbital injection are on the NEML 2025. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Who needs resuscitation", html: `
<p>Bhutan IMNCI defines perinatal asphyxia as an Apgar score under 7 at 1 minute: moderate (4–6, slow breathing or gasping) and severe (0–3, not breathing).${r(1)} Many babies who need help cannot be predicted, so a trained person and a checked bag-mask must be at <b>every birth</b>.${r(2)}</p>
${tbl(["Before labour", "During labour and birth"], [
["Pre-eclampsia, diabetes, maternal infection or fever", "Fetal distress (abnormal heart rate, thick meconium)"],
["Preterm (under 37 weeks), post-term, growth restriction", "Prolonged or obstructed labour, shoulder dystocia"],
["Multiple pregnancy, breech, known anomaly", "Cord prolapse, abruption, placenta praevia, heavy bleeding"],
["No antenatal care", "Opioids or general anaesthesia for the mother, emergency caesarean, instrumental birth"]])}
` },

{ id: "patho", title: "What happens in asphyxia", html: `
${F.chart("Interrupted placental gas exchange", [F.s("Hypoxia, high CO₂, acidosis"), F.a, F.s("Primary apnoea — responds to drying and stimulation"), F.a, F.e("Gasping, then secondary apnoea — only ventilation restarts breathing"), F.a, F.e("Heart rate and blood pressure fall; heart and brain injured"), F.a, F.e("Reperfusion: delayed brain cell death over 6–72 h (HIE)"), F.a, F.e("Multi-organ injury: kidney, liver, heart, gut, clotting")])}
<p>A baby who is not breathing at birth may be in either primary or secondary apnoea — you cannot tell — so if drying does not start breathing within seconds, ventilate. The heart of a newborn usually slows because of lack of oxygen, not heart disease; this is why ventilation, not compression, comes first.${r(2)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan IMNCI 2024", "AHA–AAP 2025", "ERC 2025", "This guide"], [
["Cord clamping (vigorous)", "—", "Defer at least 60 s", "Defer at least 60 s; longer if stable", "60 s or more"],
["Cord milking", "—", "May be reasonable in non-vigorous babies 35 weeks+", "Alternative when deferral is not possible, 28 weeks+", "Only if trained; never under 28 weeks"],
["Ventilation rate", "IMNCI 40–60/min; EM booklet 2018 30–50/min (40 in EENC steps)", "30–60/min", "30/min", "40–60/min (Bhutan; within AHA range)"],
["Start pressure", "20–25 cmH₂O (max 30 preterm)", "20–30 cmH₂O, PEEP may help", "25 (under 32 w) or 30 cmH₂O; five 2–3 s inflations; PEEP 6", "20–25, raise to move the chest"],
["Starting oxygen", "Air 35 w+; 21–30% under 35 w", "Air 35 w+; 21–30% at 32–34 w; 30–100% under 32 w", "Air 32 w+; 30% under 32 w", "AHA 2025 bands"],
["ETT adrenaline", "IMNCI 0.3–1 mL/kg; EM booklet 2018 0.5–1 mL/kg of 1:10,000", "0.05–0.1 mg/kg (= 0.5–1 mL/kg)", "—", "0.5–1 mL/kg"],
["When to check HR after compressions", "After 60 s", "After 60 s", "Every 30 s (HR rising?)", "After 60 s"],
["Stopping", "Apgar 0 at 20 min", "No HR after 20 min of full resuscitation: discuss", "Around 20 min", "20 min, with senior and family"],
["<b>Therapeutic cooling for HIE</b>", "Not mentioned; refer moderate–severe", "Within 6 h, 36 w+, under trial protocols in capable units", "Recommended in high-income settings", "<b>Do not cool</b> in Bhutan outside a trial: HELIX showed more deaths in South Asian NICUs"]])}
<p><b>HELIX</b> (seven tertiary NICUs in India, Sri Lanka and Bangladesh, 408 babies with moderate or severe encephalopathy) found that whole-body cooling to 33.5 °C did not reduce death or disability (50% vs 47%) but <b>increased death</b> (42% vs 31%). Its authors concluded cooling should not be offered in low- and middle-income countries, even with tertiary care.${r(5)} The benefit of cooling comes from high-income trials such as TOBY.${r(6)} The ERC–AHA comparison is from Trevisanuto and colleagues.${r(4)} The Bhutan Emergency booklet 2018 values are from its chapter 3B.${r(9)}</p>
` },

{ id: "presentation", title: "Assessment at birth and after", html: `
<h3>At birth — three questions (Bhutan IMNCI)</h3>
<ul><li>Term gestation? Good muscle tone? Breathing or crying?</li><li>All yes: stay with the mother, skin-to-skin, dry, keep warm, watch breathing, tone and colour.</li><li>Any no: to the warmer for the initial steps. Gasping counts as not breathing.</li></ul>
<h3>Heart rate</h3>
<p>Feel the base of the cord or listen with a stethoscope for 6 seconds and multiply by 10 (Bhutan IMNCI). ECG leads are the most reliable once compressions start (AHA). Put a pulse oximeter on the <b>right hand or wrist</b>.</p>
<h3>Target pre-ductal SpO₂ (AHA 2020 algorithm in Bhutan IMNCI Chart 10)</h3>
${tbl(["Time after birth", "1 min", "2 min", "3 min", "4 min", "5 min", "10 min"], [["SpO₂", "60–65%", "65–70%", "70–75%", "75–80%", "80–85%", "85–95%"]])}
<h3>After resuscitation — look for encephalopathy (modified Sarnat)</h3>
${tbl(["Feature", "Mild", "Moderate", "Severe"], [
["Consciousness", "Hyperalert, irritable", "Lethargic", "Stupor or coma"],
["Tone", "Normal or increased", "Hypotonia", "Flaccid"],
["Suck and Moro", "Weak suck, strong Moro", "Weak suck, incomplete Moro", "Absent"],
["Pupils, heart rate", "Dilated, tachycardia", "Small, bradycardia", "Unequal or fixed; variable HR"],
["Breathing", "Normal", "Periodic", "Apnoea"],
["Seizures", "None", "Common", "Less common; decerebrate posturing"]])}
<p>Staging after Sarnat and Sarnat.${r(7)} Bhutan IMNCI lists irritability or coma, abnormal tone, convulsions, apnoea and poor sucking in the first 2–3 days, with hypoglycaemia, shock, acute kidney injury and multi-organ failure.${r(1)}</p>
<h3>The typical patient</h3>
<p>After a prolonged second stage at a district hospital, a 3 kg term baby is floppy and not breathing. She is dried, the head is positioned, and bag-mask ventilation with air starts at 40 breaths a minute. The chest does not move — the midwife repositions the mask and opens the mouth (MR SOPA) — then the chest rises and the heart rate climbs from 70 to 140 within 30 seconds. She gasps at 4 minutes. Apgar 3, 6 and 8. At 6 hours she is lethargic and hypotonic with a weak suck: <b>moderate HIE</b>. She is kept warm (not cooled), glucose is checked, fluids start at 60 mL/kg/day, and she is transferred to the NICU; at 14 hours she has subtle seizures and receives phenobarbital 60 mg.</p>
` },

{ id: "ddx", title: "Baby not responding — think", html: `
${tbl(["Problem", "Clue", "Action"], [
["<b>Ineffective ventilation</b> (commonest)", "No chest movement, HR not rising", "MR SOPA: Mask, Reposition, Suction, Open mouth, Pressure up (max 30 preterm, 40 term), Alternative airway"],
["Pneumothorax", "Sudden worsening, one-sided breath sounds", "Transillumination; needle aspiration"],
["Hypovolaemia", "Pale, weak pulses, history of bleeding or abruption", "Saline or Ringer's lactate 10 mL/kg over 5–10 min; repeat"],
["Congenital diaphragmatic hernia", "Scaphoid abdomen, heart sounds displaced", "Intubate; no prolonged mask ventilation; gastric tube"],
["Airway obstruction", "Choanal atresia, Pierre Robin", "Oral airway; prone position"],
["Congenital heart disease, PPHN", "Cyanosis with good ventilation and HR", "Oxygen, referral, echo"],
["Maternal opioids", "Breathing poorly with good HR", "Ventilate; naloxone is not part of the algorithm"],
["Sepsis", "Maternal fever, prolonged rupture of membranes", "Antibiotics after resuscitation"]])}
` },

{ id: "invest", title: "Investigations after resuscitation", html: `
${tbl(["Test", "Why"], [
["Glucose — at 30 min, then 2–4 hourly", "Hypoglycaemia is common and harms the injured brain (treat under 45 mg/dL)"],
["Cord or early blood gas (if available)", "pH under 7.0 or base deficit 16 or more supports asphyxia"],
["Sodium, potassium, calcium, creatinine, urine output", "Acute kidney injury, fluid retention, hypocalcaemia"],
["Full blood count, platelets, clotting", "Bleeding, DIC"],
["Liver enzymes", "Hypoxic liver injury"],
["Blood culture, CRP", "If infection risk factors"],
["Cranial ultrasound; MRI at 5–14 days", "Brain injury pattern and prognosis"],
["EEG / aEEG where available", "Seizures, background severity"],
["Echo if cyanosis or shock", "PPHN, poor heart function"]])}
` },

{ id: "staging", title: "Sizes and doses calculator", html: `
<p>Enter weight (estimate if needed) and gestation. Gives ETT size and depth, oxygen start, adrenaline volumes, saline and dextrose.</p>
<div class="calc" data-calc="neoresus"></div>
` },

{ id: "manage", title: "Resuscitation step by step", html: `
<h3>Preparation</h3>
<ul><li>Risk assessment before every birth; team briefing; warm room (25–28 °C), warmer on, warm towels, plastic bag for babies under 32 weeks.</li><li>Self-inflating bag (200–750 mL) with pop-off valve, masks size 0 and 1, oxygen at 10 L/min, suction at about 100 mmHg, laryngoscope blades 0 and 1, ETTs 2.5–4.0, UVC set, adrenaline drawn up when risk is high.</li></ul>
<h3>Initial steps (within 30 seconds)</h3>
<ol><li>Vigorous: skin-to-skin, defer cord clamping 60 s or more, dry and cover.</li><li>Not vigorous: to the warmer; dry (not under 32 weeks — plastic wrap); gentle stimulation (rub back); sniffing position with a shoulder roll; suction mouth then nose <b>only</b> if secretions block the airway. No routine suction, even with meconium (AHA 2025).</li></ol>
<h3>Ventilation (by 60 seconds)</h3>
<ol><li>Apnoea, gasping, or HR under 100: bag-mask ventilation, mask covering chin, mouth and nose but not eyes, 40–60/min ("Breathe-two-three"), start at 20–25 cmH₂O.</li><li>Air for 35 weeks and over; 21–30% oxygen at 32–34 weeks; 30% or more under 32 weeks, then titrate to the SpO₂ table.</li><li>HR should rise within 15 seconds. If not, check chest movement and do MR SOPA; use a laryngeal mask or ETT if mask ventilation fails.</li><li>After 30 s of effective ventilation: HR 100 or more — wean; HR 60–99 — continue; HR under 60 — compressions.</li></ol>
<h3>Chest compressions</h3>
<ul><li>Lower third of the sternum, 2-thumb encircling technique, depth one-third of the chest, full recoil.</li><li><b>3 compressions : 1 breath</b> — 90 compressions and 30 breaths a minute ("One-and-two-and-three-and-breathe"). Oxygen to 100%. Intubate or use a laryngeal mask if possible.</li><li>Recheck HR after 60 s. Stop compressions when HR is over 60; keep ventilating.</li></ul>
<h3>Adrenaline and volume</h3>
<ul><li>HR still under 60 after 30 s of effective ventilation plus 60 s of compressions: ${dr("adrenaline_arrest", "adrenaline")} 1:10,000 (1 mL of 1 mg/mL + 9 mL saline) <b>0.1–0.3 mL/kg IV/UVC/IO</b>, flush with 3 mL saline. Repeat every 3–5 min.</li><li>While the UVC is being placed: ETT adrenaline 0.5–1 mL/kg. Give IV adrenaline as soon as access is ready.</li><li>Pale, poor pulses or known blood loss: normal saline or Ringer's lactate 10 mL/kg over 5–10 min, repeat once if needed.</li><li>No sodium bicarbonate in the delivery room (Bhutan IMNCI).</li></ul>
<h3>Stopping</h3>
<p>If there is no heart rate after about 20 minutes of complete, effective resuscitation, the senior clinician discusses stopping with the team and family (Bhutan IMNCI: Apgar 0 at 20 minutes; AHA 2025).</p>
<h3>Post-resuscitation care (Bhutan IMNCI §6.6)</h3>
<ul><li>Radiant warmer; aim 36.5–37.5 °C; avoid both cold and overheating (fever worsens brain injury).</li><li>Glucose checks; treat under 45 mg/dL with 10% dextrose 2 mL/kg.</li><li>Babies with emergency signs: IV maintenance fluid by day of life (day 1: 60 mL/kg/day 10% dextrose, rising by 20 mL/kg/day). Watch urine output; reduce if oliguric.</li><li>Seizures: ${dr("phenobarbital", "phenobarbital")} 20 mg/kg — see the neonatal seizures page.</li><li>Feeding: if no emergency signs, vomiting or distension, start breast milk (by tube if poor suck) at 15–20 mL/kg/day and increase by 15–20 mL/kg/day while tapering IV fluids.</li><li>Refer moderate and severe asphyxia to the NICU.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine", "Dose", "Notes"], [
[dr("adrenaline_arrest", "Adrenaline 1:10,000 (0.1 mg/mL)"), "0.1–0.3 mL/kg (0.01–0.03 mg/kg) IV/UVC/IO every 3–5 min; ETT 0.5–1 mL/kg (0.05–0.1 mg/kg)", "Make from 1 mg/mL: 1 mL + 9 mL saline. Flush 3 mL. Bhutan IMNCI ETT 0.3–1 mL/kg"],
["Normal saline / Ringer's lactate", "10 mL/kg over 5–10 min; repeat if needed", "Hypovolaemia or blood loss only"],
[dr("dextrose", "10% dextrose"), "2 mL/kg IV bolus; then infusion", "Glucose under 45 mg/dL"],
[dr("phenobarbital"), "20 mg/kg IV over 20 min", "Seizures only — not as prophylaxis (WHO)"],
["Oxygen", "Air at the start for 35 weeks and over; titrate to SpO₂", "100% during compressions"]])}
<p>Adrenaline doses agree in Bhutan IMNCI 2024 and AHA 2025.${r(1)}${r(2)}</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Preterm under 32 weeks</b>", "Plastic wrap without drying, warm mattress, hat; start 30% oxygen; CPAP for breathing babies with distress; PIP max 30; size 0 mask. See preterm and RDS pages"],
["<b>Meconium-stained liquor</b>", "Same algorithm. No routine oral or tracheal suction; intubate and suction only if the trachea is obstructed during ventilation (AHA 2025)"],
["<b>Home or BHU birth</b>", "Helping Babies Breathe steps: dry, keep warm, clear airway if needed, stimulate, bag-mask by the golden minute; call and transfer with the mother"],
["<b>Babies born before arrival / in an ambulance</b>", "Warmth first: skin-to-skin with the mother, cover the head"],
["<b>Extreme prematurity or lethal anomaly</b>", "Plan with the parents and the senior before birth where possible"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["One health worker alone", "Ventilate first — that saves most babies; call for help while ventilating"],
["No oxygen", "Air is correct for term babies; ventilation matters more than oxygen"],
["Cannot place UVC", "Intraosseous needle in the proximal tibia; ETT adrenaline meanwhile"],
["Chest not moving with bag-mask", "MR SOPA; laryngeal mask (2 kg+ and 34 weeks+) or ETT"],
["Asked to cool the baby", "Explain HELIX; keep normal temperature 36.5–37.5 °C; avoid fever"],
["Parents ask what happens next", "Explain honestly that the first 72 hours show how much the brain is affected; seizures and feeding are watched closely"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li><b>Brain:</b> HIE, seizures, cerebral palsy, intellectual disability, epilepsy, vision and hearing loss.</li><li><b>Kidney:</b> acute kidney injury, fluid overload, low sodium.</li><li><b>Heart and lungs:</b> poor cardiac function, PPHN, meconium aspiration, pneumothorax.</li><li><b>Metabolic:</b> hypoglycaemia, hypocalcaemia.</li><li><b>Gut and liver:</b> feeding intolerance, NEC, raised liver enzymes.</li><li><b>Blood:</b> thrombocytopenia, DIC.</li><li><b>From resuscitation:</b> rib fractures, liver laceration (compressions too low), pneumothorax from high pressures.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Neurological examination before discharge (Bhutan IMNCI: stop phenobarbital if normal).</li><li>Developmental review at 3, 6, 12 and 18–24 months; early physiotherapy if tone is abnormal.</li><li>Hearing screen and eye review.</li><li>Debrief the team; record times, steps and Apgar scores.</li><li>Support the family; plan the next pregnancy and birth in a facility.</li></ul>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Helping Babies Breathe action plan", src: "images/hbb-action-plan.jpg", mod: "Algorithm", ctx: "Basic newborn resuscitation", loc: "Delivery room", find: "Prepare, dry, keep warm, clear airway if needed, stimulate, ventilate within the golden minute", interp: "Basic resuscitation for every birth attendant", by: "American Academy of Pediatrics / Helping Babies Survive", page: "https://commons.wikimedia.org/wiki/File:Helping-babies-breathe-2018-action-plan.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Umbilical venous catheter", src: "images/umbilical-catheter.png", mod: "Illustration", ctx: "Emergency vascular access in the delivery room", loc: "Umbilical stump", find: "Catheter in the umbilical vein", interp: "For emergency adrenaline and fluids, insert only 2–4 cm until blood flows back", by: "BruceBlaus", page: "https://commons.wikimedia.org/wiki/File:Umbilical_Catheter.png", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Newborn at birth", [F.s("Term? Tone? Breathing or crying?"), F.a, F.b([["All yes", F.ok("Skin-to-skin, delay cord clamping 60 s+")], ["Any no", F.s("Warm, dry, stimulate, position, clear airway if needed")]]), F.a, F.d("Apnoea/gasping or HR under 100?"), F.a, F.e("Bag-mask ventilation by 60 s; SpO₂ on right hand"), F.a, F.d("Chest moving? HR rising?"), F.a, F.e("No: MR SOPA, alternative airway"), F.a, F.d("HR under 60 after 30 s effective ventilation?"), F.a, F.e("Compressions 3:1, 100% O₂, intubate"), F.a, F.d("HR under 60 after 60 s?"), F.a, F.e("Adrenaline IV/UVC 0.1–0.3 mL/kg; saline if blood loss"), F.a, F.ok("Post-resuscitation care; refer moderate–severe")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Long suction and rubbing before ventilating", "Delays ventilation; vagal bradycardia", "Ventilate by 60 seconds"],
["Starting compressions before effective ventilation", "Heart is starved of oxygen, not pump", "Fix the chest movement first"],
["Untested bag or wrong mask size", "Leak, no inflation", "Check before every birth; masks 0 and 1"],
["100% oxygen for a term baby", "Higher mortality than air", "Start with air"],
["Letting the baby get cold", "More deaths, hypoglycaemia", "Warm chain; plastic for under 32 weeks"],
["Overheating or cooling an asphyxiated baby", "Fever worsens HIE; cooling increased deaths in HELIX", "Aim 36.5–37.5 °C"],
["Forgetting glucose after resuscitation", "Brain injury", "Check at 30 min"],
["Routine tracheal suction for meconium", "No benefit, delays breaths", "Ventilate; suction only for obstruction"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What proportion of newborns need chest compressions or adrenaline?", "About 0.1% (Bhutan IMNCI 2024).")}
${qa("Student", "What does MR SOPA stand for?", "Mask adjust, Reposition head, Suction, Open mouth, Pressure increase, Alternative airway.")}
${qa("Intern/MO", "When do you start compressions?", "HR under 60 despite 30 seconds of ventilation that moves the chest; 3:1, 90 compressions and 30 breaths a minute, oxygen 100%.")}
${qa("Intern/MO", "A 2.5 kg baby needs adrenaline. What is the IV volume of 1:10,000?", "0.25–0.75 mL (0.1–0.3 mL/kg), flushed with 3 mL saline.")}
${qa("Intern/MO", "Which oxygen do you start with for a baby at 33 weeks?", "21–30% (AHA 2025: 32–34 weeks); titrate to the SpO₂ targets.")}
${qa("Specialist", "What did the HELIX trial show?", "In South Asian tertiary NICUs, cooling did not reduce death or disability (50% vs 47%) and increased death (42% vs 31%).")}
${qa("Specialist", "When can stopping resuscitation be discussed?", "No heart rate after about 20 minutes of complete resuscitation (AHA 2025; Bhutan IMNCI Apgar 0 at 20 minutes).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: Module 2 §4.8 Neonatal resuscitation, §4.8.8 transfer, §6.4 glucose and fluids, §6.6 Perinatal asphyxia.</li>
<li id="ref-2">Lee HC, Strand ML, Finan E, et al. Part 5: Neonatal resuscitation: 2025 American Heart Association and American Academy of Pediatrics guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation 2025;152(16 Suppl 2):S385–S423. <a href="https://doi.org/10.1161/CIR.0000000000001367" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001367</a></li>
<li id="ref-3">Hogeveen M, Monnelly V, Binkhorst M, et al. European Resuscitation Council Guidelines 2025: newborn resuscitation and support of transition of infants at birth. Resuscitation 2025;215:110766. <a href="https://doi.org/10.1016/j.resuscitation.2025.110766" target="_blank" rel="noopener">doi:10.1016/j.resuscitation.2025.110766</a></li>
<li id="ref-4">Trevisanuto D, Ramaswamy VV, Nimbalkar S, Weiner GM. 2025 American and European guidelines on neonatal resuscitation: concordance and differences. Neonatology 2026. <a href="https://doi.org/10.1159/000552450" target="_blank" rel="noopener">doi:10.1159/000552450</a></li>
<li id="ref-5">Thayyil S, Pant S, Montaldo P, et al. Hypothermia for moderate or severe neonatal encephalopathy in low-income and middle-income countries (HELIX): a randomised controlled trial in India, Sri Lanka, and Bangladesh. Lancet Glob Health 2021;9(9):e1273–e1285. <a href="https://doi.org/10.1016/S2214-109X(21)00264-3" target="_blank" rel="noopener">doi:10.1016/S2214-109X(21)00264-3</a></li>
<li id="ref-6">Azzopardi DV, Strohm B, Edwards AD, et al. Moderate hypothermia to treat perinatal asphyxial encephalopathy (TOBY). N Engl J Med 2009;361(14):1349–1358. <a href="https://doi.org/10.1056/NEJMoa0900854" target="_blank" rel="noopener">doi:10.1056/NEJMoa0900854</a></li>
<li id="ref-7">Sarnat HB, Sarnat MS. Neonatal encephalopathy following fetal distress: a clinical and electroencephalographic study. Arch Neurol 1976;33(10):696–705. <a href="https://doi.org/10.1001/archneur.1976.00500100030012" target="_blank" rel="noopener">doi:10.1001/archneur.1976.00500100030012</a></li>
<li id="ref-8">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-9">Emergency Medical Services Division, Ministry of Health, Bhutan. Clinical orientation manual — Chapter 3B Neonatal resuscitation, 2018. <a href="https://moh.gov.bt/wp-content/uploads/2025/01/Chapter-3B-Neonatal-Resus.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024", "<span class='pass'>Read directly</span>", "§4.8, §6.6, glucose/fluid table, transfer list"],
["Bhutan EM booklet 2018 ch. 3B", "<span class='pass'>Read directly</span>", "moh.gov.bt PDF in browser; old page wrongly gave its ETT dose as 0.3–1 mL/kg (booklet says 0.5–1)"],
["AHA–AAP 2025 Part 5", "<span class='pass'>Read directly</span>", "cpr.heart.org in browser: rate, pressures, oxygen, compressions, adrenaline, volume, suction, cooling, 20 min"],
["ERC 2025", "<span class='unv'>Not read</span>", "Differences taken from the Trevisanuto 2026 comparison review (read)"],
["HELIX abstract", "<span class='pass'>Read directly</span>", "Europe PMC"],
["Two-source doses", "<span class='pass'>Checked</span>", "Adrenaline IV, saline, dextrose: IMNCI + AHA. ETT adrenaline: AHA 0.5–1 vs IMNCI 0.3–1 mL/kg shown"],
["SpO₂ table", "<span class='pass'>Checked</span>", "AHA 2020 algorithm reproduced as Bhutan IMNCI Chart 10"],
["Sarnat table", "<span class='pass'>Checked</span>", "Standard modified Sarnat features; original 1976 paper not re-read"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "neoresus (0.8, 1.6, 3.2 kg; 28, 33, 39 weeks)"]], "qc")}` }
]
});
