/* Neonatal seizures — full depth (Thin-page Round 5, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (Module 1 §3.6.2.4 "For infant up to 4 weeks of age with seizures";
   Module 2 §6.11 Neonatal convulsion and spasm, incl. differential table and maintenance advice); WHO/ILAE/IBE
   Guidelines on neonatal seizures 2011 (Table 1, key recommendations — read from the WHO IRIS PDF); ILAE Task Force
   2023 special report (Pressler et al., Epilepsia 2023;64:2550-70 — all six recommendations and Table 2 doses);
   Bhutan NEML 2025 (strengths). Older page wrongly cited a "WHO 2023" guideline — corrected (the WHO guideline is 2011). */
registerPage({
id: "neoseizure-child",
title: "Neonatal Seizures",
subtitle: "Seizures in the first 28 days are often subtle and almost always have a cause. Check glucose first, treat the cause, give phenobarbital first line, avoid diazepam in newborns, and stop medicines before discharge once acute seizures have settled",
age: "Newborns (first 28 days)", specs: ["neo", "nicu", "neuro", "paeds"],
keywords: ["neonatal seizures", "neonatal convulsions", "newborn fits", "subtle seizures", "phenobarbital", "phenobarbitone", "levetiracetam", "phenytoin", "midazolam infusion", "lidocaine neonate", "HIE", "birth asphyxia seizures", "hypoglycaemia", "hypocalcaemia", "hypomagnesaemia", "neonatal meningitis", "jitteriness", "benign neonatal sleep myoclonus", "pyridoxine dependent epilepsy", "aEEG", "IMNCI"],
related: ["asphyxia-child", "neosepsis-child", "hypo-child", "tetanus-child", "meningitis-child", "epilepsy-child", "preterm-child", "neojaundice-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A newborn seizure is a sign, not a diagnosis. Most are caused by birth asphyxia (HIE), low blood glucose, low calcium, infection, bleeding or stroke. Many are subtle — lip smacking, eye deviation, cycling legs, apnoea — and many are seen only on EEG. Fix what can be fixed in minutes (glucose), find the cause, and control seizures with phenobarbital.</p>
<div class="glance">
<div><h4>First minute</h4><p>Airway, breathing, oxygen, warmth, IV access, <b>bedside glucose</b>.</p></div>
<div><h4>Low glucose</h4><p>Below <b>45 mg/dL (2.6 mmol/L)</b>: ${dr("dextrose", "10% dextrose 2 mL/kg")} IV, then infusion (Bhutan IMNCI).</p></div>
<div><h4>First line</h4><p>${dr("phenobarbital", "Phenobarbital")} <b>20 mg/kg IV over 20 min</b> (Bhutan 15–20 mg/kg; WHO and ILAE: first line).</p></div>
<div><h4>Still seizing</h4><p>More phenobarbital to a total of <b>40 mg/kg</b>, then ${dr("phenytoin", "phenytoin 20 mg/kg")} or ${dr("levetiracetam", "levetiracetam 40 mg/kg")}.</p></div>
<div><h4>Do not</h4><p>Give <b>diazepam</b> in the first 4 weeks (Bhutan IMNCI). Give phenobarbital "to prevent" seizures in HIE (WHO).</p></div>
<div><h4>Stop</h4><p>Acute seizures settled: stop medicines <b>before discharge</b> (ILAE 2023).</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Hospital IMNCI 2024 gives the newborn seizure steps: glucose under 45 mg/dL → 10% dextrose 2 mL/kg; phenobarbital 15–20 mg/kg over 20 min; repeat 5–10 mg/kg to a total of 40 mg/kg in a day; then phenytoin 20 mg/kg over 20 min; 10% calcium gluconate 2 mL/kg slowly if hypocalcaemic; and <b>no diazepam in the first 4 weeks</b>. NEML 2025 has phenobarbital injection 200 mg/mL, phenytoin injection 50 mg/mL, levetiracetam injection 100 mg/mL, midazolam 1 mg/mL, lignocaine 2% plain, 10% calcium gluconate and 50% magnesium sulfate. There is <b>no pyridoxine injection</b> on the NEML (only 25 mg tablets). Refer babies with refractory seizures or suspected HIE to the NICU at JDWNRH or the nearest regional referral hospital NICU. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes and when they appear", html: `
<p>Most newborn seizures are <b>acute provoked</b> seizures — the brain is reacting to an injury or a metabolic upset. Only about 10–15% are the first sign of a neonatal epilepsy (brain malformation, genetic or metabolic disease).${r(2)}</p>
${tbl(["Cause", "Typical timing", "Clues"], [
["<b>Hypoxic-ischaemic encephalopathy (HIE)</b>", "First 24 h (major cause in first 72 h)", "Difficult birth, needed resuscitation, low Apgar, abnormal tone and consciousness"],
["<b>Hypoglycaemia</b>", "Day 1–3, any time if not feeding", "Small (SGA), large (LGA), preterm, infant of diabetic mother, poor feeding, cold"],
["<b>Hypocalcaemia</b>", "Early: first 3 days; late: end of week 1", "SGA, LGA, infant of diabetic mother, asphyxia; late form with high-phosphate feeds (cow's or goat's milk)"],
["<b>Meningitis / sepsis</b>", "Most important cause after day 3", "Fever or low temperature, poor feeding, lethargy, bulging fontanelle"],
["<b>Intracranial bleeding</b>", "Day 1–7", "Preterm (IVH), sudden pallor, falling haemoglobin; term — traumatic birth"],
["<b>Arterial stroke</b>", "First days", "Focal clonic seizures of one side in an otherwise well-looking term baby"],
["<b>Sodium disorders</b>", "Any time", "Dehydration, high sodium with poor breastfeeding; low sodium with excess plain water"],
["<b>Kernicterus</b>", "Day 3–7", "Serious jaundice treated late; arching (opisthotonus), poor feeding"],
["<b>Drug withdrawal</b>", "Day 1–7", "Mother using opioids or barbiturates"],
["<b>Inborn errors, pyridoxine dependency, genetic epilepsy</b>", "Any time, often first days", "No other cause; seizures resistant to 2 drugs; family history"]])}
<p>Timing and clues from Bhutan IMNCI 2024 §6.11.${r(1)}</p>
` },

{ id: "patho", title: "Why newborn seizures look different", html: `
${F.chart("The newborn brain", [F.s("Excitatory (GABA-depolarising) circuits mature before inhibitory ones"), F.a, F.s("Seizures start easily but spread poorly"), F.a, F.e("Focal, fragmentary or subtle signs — rarely a classic generalised tonic-clonic fit"), F.a, F.e("Many seizures are electrographic only (no visible movement)"), F.a, F.e("After a drug the jerking may stop while the EEG seizure continues — 'uncoupling'")])}
<p>The ILAE notes that most neonatal seizures have no clinical signs and that drugs can stop the visible signs while EEG seizures continue. This is why EEG or aEEG, where available, is used to confirm and follow treatment.${r(3)} A higher seizure burden is associated with worse development, so treating seizures promptly matters.${r(3)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan IMNCI 2024", "WHO 2011", "ILAE 2023", "This guide"], [
["First line", "Phenobarbital 15–20 mg/kg over 20 min", "Phenobarbital (strong)", "Phenobarbital 20 mg/kg (moderate)", "Phenobarbital 20 mg/kg"],
["Further phenobarbital", "5–10 mg/kg repeats to a total of 40 mg/kg in a day", "Up to the maximal tolerated dose", "Second load 10–20 mg/kg; respiratory support ready", "10–20 mg/kg, total 40 mg/kg; bag-mask ready"],
["Second line", "Phenytoin 20 mg/kg", "Benzodiazepine, phenytoin or lidocaine (weak)", "Phenytoin or levetiracetam; midazolam or lidocaine possible", "Phenytoin (ECG) or levetiracetam; midazolam/lidocaine in NICU"],
["Diazepam", "Do not use in first 4 weeks", "Benzodiazepine allowed as second line", "Midazolam listed, not diazepam", "<b>No diazepam</b>; midazolam only in NICU"],
["Heart disease", "—", "Phenytoin/lidocaine need cardiac monitoring", "Levetiracetam preferred; no lidocaine", "Levetiracetam"],
["Electrographic-only seizures", "—", "Treat where EEG is available", "Treating them may improve outcome", "Treat if EEG/aEEG shows them"],
["Stopping", "Monotherapy; wean to phenobarbital 3–5 mg/kg/day. After asphyxia (§6.6): stop before discharge if neuro exam normal; if abnormal, continue 1 month, then taper over 2 weeks if exam normal, or refer for EEG", "Consider stopping if seizure-free over 72 h with normal exam and/or EEG", "Stop before discharge after acute provoked seizures, whatever the MRI/EEG", "Stop before discharge unless neonatal epilepsy is suspected"],
["Pyridoxine", "—", "Consider before AEDs if no cause found (specialist centre)", "Trial if no cause and resistant to second line", "Specialist trial; not on NEML as injection"],
["Prophylaxis in HIE", "—", "Do not give (strong)", "—", "Do not give"]])}
<p>Bhutan's numbers come from the Hospital IMNCI 2024.${r(1)} WHO from its 2011 key recommendations,${r(2)} ILAE from the 2023 special report.${r(3)} The ILAE second-line advice is expert consensus: no single second-line drug was clearly best (phenytoin was favoured by 61% and levetiracetam by 22% of experts).${r(3)} In the NEOLEV2 trial, phenobarbital stopped EEG seizures in 80% versus 28% with levetiracetam as first line.${r(4)}</p>
` },

{ id: "presentation", title: "Recognising a seizure", html: `
${tbl(["Type (Bhutan IMNCI / ILAE)", "What you see"], [
["<b>Subtle</b>", "Repeated blinking, eye deviation, eyelid fluttering, blank stare, lip smacking or chewing, cycling or swimming limb movements, apnoea"],
["<b>Clonic</b> (focal or multifocal)", "Rhythmic jerks of one limb or one side of the face; jerks do not stop when you hold the limb"],
["<b>Tonic</b>", "Sustained stiff posture of a limb, the trunk or the eyes"],
["<b>Myoclonic</b>", "Quick flexion jerks, usually of both arms"],
["<b>Autonomic / apnoea</b>", "Apnoea with a rising (not falling) heart rate, sudden change in blood pressure or a fall in SpO₂"]])}
<p>Seizure movements are often accompanied by changes in heart rate, blood pressure or SpO₂ (Bhutan IMNCI). WHO advises treating a clinical seizure that lasts more than 3 minutes, or brief serial seizures.${r(2)}</p>
<h3>Ask about</h3>
<ul><li>Labour and birth: fetal distress, difficult delivery, resuscitation, Apgar.</li><li>Feeding: how well, how often; first feed after birth.</li><li>Mother: diabetes, fever, prolonged rupture of membranes, drugs, tetanus vaccination, blood group.</li><li>Family history of newborn seizures or early infant deaths.</li><li>Home birth: how the cord was cut and dressed (tetanus).</li></ul>
<h3>The typical patient</h3>
<p>Pema, 3.2 kg, born at term after a long second stage, needed bag-mask ventilation and was floppy at birth. At 10 hours his right arm jerks rhythmically and his lips smack; the jerks continue when the arm is held. Glucose is 52 mg/dL. <b>Probable HIE with clonic seizures</b>: oxygen and warmth, phenobarbital 64 mg IV over 20 min, calcium and electrolytes, blood culture, and transfer to the NICU. Cooling is considered if he meets the criteria (see the asphyxia page).</p>
` },

{ id: "ddx", title: "What else it could be", html: `
${tbl(["Mimic", "Clues that it is not a seizure (Bhutan IMNCI 2024)"], [
["<b>Jitteriness (tremor)</b>", "Fast, small, oscillating (not jerking); started by arousal or stimulation; <b>stops with gentle restraint</b>; no autonomic change; no abnormal eye movement. Check glucose and calcium anyway"],
["<b>Benign neonatal sleep myoclonus</b>", "Multifocal jerks only while falling asleep or asleep; <b>stop on waking</b>; healthy, thriving term baby; birth to 3 months"],
["<b>Neonatal tetanus</b>", "Day 3–14 after unclean birth or cord care, mother not vaccinated; spasms provoked by touch; baby is <b>conscious</b> and cannot suck; trismus"],
["<b>Apnoea of prematurity</b>", "Preterm baby; heart rate falls with the apnoea (seizure apnoea often has a rising heart rate)"],
["<b>Startle (hyperekplexia)</b>", "Exaggerated startle with stiffening on touch or noise; stiffness ends when the baby is flexed at the neck and hips"],
["<b>Normal newborn movements</b>", "Sucking, random limb movements, stretching — not repetitive or stereotyped"]])}
<h3>Bedside recognition table</h3>
${tbl(["Look at", "Seizure", "Not a seizure"], [
["Limb held gently", "Jerks continue", "Tremor stops (jitteriness)"],
["Sleep–wake", "Any state", "Only in sleep, stops on waking (sleep myoclonus)"],
["Eyes", "Deviation, fixed stare, fluttering", "Normal"],
["Heart rate / SpO₂", "Rise in heart rate, fall in SpO₂", "Unchanged"],
["Trigger", "Usually none", "Touch or noise (jitteriness, tetanus spasms, startle)"]])}
${box("amber", "Tip", `<p>Hold the limb gently. Jitteriness stops; a clonic seizure keeps going under your hand. Video the event on a phone for the paediatrician.</p>`)}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "When", "What it tells you"], [
["<b>Bedside glucose</b>", "Immediately, then repeat", "Under 45 mg/dL (2.6 mmol/L) treat at once (Bhutan IMNCI)"],
["Calcium (total or ionised), magnesium, sodium", "All babies", "Hypocalcaemia is usually defined as total calcium under 2.0 mmol/L (8 mg/dL) or ionised under 1.0 mmol/L in term babies; low magnesium often travels with low calcium"],
["Blood culture, CRP, full blood count", "All babies", "Sepsis"],
["<b>Lumbar puncture</b>", "When stable, if any sign of infection or no clear cause", "Meningitis. If LP cannot be done, treat empirically for meningitis (WHO)"],
["Blood gas, lactate", "Suspected HIE or metabolic disease", "Acidosis, raised lactate"],
["Bilirubin", "Jaundiced baby", "Kernicterus risk"],
["<b>Cranial ultrasound</b>", "All, especially preterm", "IVH, large infarct, malformation"],
["<b>EEG / aEEG</b>", "Where available", "Confirms seizures, detects electrographic-only seizures and follows response (WHO: confirm all clinical seizures where available)"],
["MRI brain", "Later, in the first 1–2 weeks", "Pattern of HIE, stroke, malformation; prognosis"],
["Ammonia, amino acids, urine organic acids, genetic tests", "No cause found or refractory seizures", "Inborn errors, channelopathy, pyridoxine dependency"]])}
<p>WHO advises that imaging is used to find the cause or prognosis — not to decide whether a movement is a seizure or whether a drug worked.${r(2)}</p>
` },

{ id: "staging", title: "Seizure drug calculator", html: `
<p>Enter weight (and glucose if known). Doses follow Bhutan IMNCI 2024 with ILAE 2023 doses for second-line drugs, and volumes use the Bhutan NEML strengths.</p>
<div class="calc" data-calc="neoseizure"></div>
` },

{ id: "manage", title: "Management step by step", html: `
<h3>1. Stabilise (0–5 minutes)</h3>
<ul><li>Clear the airway, give oxygen if SpO₂ is low, bag-mask ventilate for apnoea. Keep warm (skin-to-skin or radiant warmer).</li><li>IV access; bedside glucose; take blood for calcium, magnesium, sodium, culture before drugs if it causes no delay.</li></ul>
<h3>2. Correct the quick causes</h3>
<ul><li>Glucose under 45 mg/dL: ${dr("dextrose", "10% dextrose 2 mL/kg")} IV, then a 10% dextrose infusion (60–80 mL/kg/day on day 1) and recheck in 30 minutes.</li><li>Low calcium: ${dr("calcium_gluconate", "10% calcium gluconate 2 mL/kg")} as a slow IV infusion with heart-rate monitoring, then oral supplements (Bhutan IMNCI). Stop if the heart rate falls; avoid extravasation.</li><li>Low magnesium (or low calcium that does not correct): ${dr("magnesium_sulfate", "magnesium sulfate")} 100 mg/kg (0.2 mL/kg of 50%) IV over 20 min or IM.</li></ul>
<h3>3. Anti-seizure medicine (if seizure lasts more than 3 minutes or keeps recurring)</h3>
<ol><li>${dr("phenobarbital", "Phenobarbital")} <b>20 mg/kg IV</b> diluted in 20 mL 5% dextrose or saline, over 20 minutes.</li><li>Still seizing 15–30 minutes later: a further <b>10–20 mg/kg</b> (Bhutan: 5–10 mg/kg repeats) up to a total of <b>40 mg/kg</b>. Have bag-mask and CPAP/ventilation ready.</li><li>Still seizing: ${dr("phenytoin", "phenytoin")} <b>20 mg/kg IV</b> in saline (never dextrose) over 20–30 minutes with ECG monitoring, <b>or</b> ${dr("levetiracetam", "levetiracetam")} <b>40 mg/kg IV</b> over 15 min (a further 20 mg/kg if needed). Choose levetiracetam if the baby has heart disease.</li><li>Refractory (NICU only): ${dr("midazolam", "midazolam")} 0.05–0.15 mg/kg IV, then 1 µg/kg/min, increasing by 1 µg/kg/min to a maximum of 5 µg/kg/min; or ${dr("lidocaine_iv", "lidocaine")} by the ILAE protocol — <b>never after phenytoin</b> and never with heart disease.</li><li>No cause found and still seizing: specialist trial of pyridoxine 100 mg IV with ventilation ready (ILAE).</li></ol>
<h3>4. Treat the cause</h3>
<ul><li>Sepsis or meningitis: start antibiotics without waiting for the LP (see neonatal sepsis page).</li><li>HIE: supportive care; therapeutic hypothermia within 6 hours where the NICU offers it — cooling reduces seizure burden (ILAE, weak evidence).${r(3)}</li><li>Jaundice: urgent phototherapy or exchange transfusion.</li><li>Feeds: tube feeds of expressed breast milk once stable; avoid cow's or goat's milk.</li></ul>
<h3>5. Maintenance and stopping</h3>
<ul><li>Use <b>one</b> drug. Maintenance phenobarbital 3–5 mg/kg/day (Bhutan) or 5 mg/kg/day (ILAE) only if seizures recur after the loading doses.</li><li>If two or more drugs were needed, stop them one at a time, phenobarbital last (WHO).</li><li>After acute provoked seizures have stopped, stop the medicine before discharge — even if the MRI or EEG is abnormal (ILAE). A single drug can be stopped without tapering (WHO); midazolam infusions need tapering.</li><li>Keep maintenance only if a neonatal epilepsy is suspected, with a paediatric neurologist.</li></ul>
${box("red", "Watch after every load", `<p>Phenobarbital, midazolam and pyridoxine can stop breathing. Count breathing and watch SpO₂ for at least 1 hour after each dose; keep a bag and mask of the right size at the cot.</p>`)}
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML strength)", "Dose", "Notes"], [
[dr("phenobarbital") + " 200 mg/mL inj", "Load 20 mg/kg IV over 20 min; further 10–20 mg/kg to total 40 mg/kg; maintenance 3–5 mg/kg/day once daily", "First line everywhere. Long half-life in week 1 and in preterm babies. Respiratory depression, poor feeding, low BP"],
[dr("phenytoin") + " 50 mg/mL inj", "Load 20 mg/kg IV over 20–30 min in saline; maintenance 5 mg/kg/day in 2 doses (max 7.5 mg/kg per dose); target level 10–20 µg/mL", "ECG monitoring — arrhythmia, AV block, low BP; irritant to veins. Poor oral absorption in neonates"],
[dr("levetiracetam") + " 100 mg/mL inj", "Load 40 mg/kg IV; second load 20 mg/kg; maintenance 40–60 mg/kg/day in 3 doses", "Preferred with heart disease. Mild sedation, irritability. Less effective than phenobarbital as first line"],
[dr("midazolam") + " 1 mg/mL inj", "Load 0.05–0.15 mg/kg IV; infusion 1 µg/kg/min, titrate in 1 µg/kg/min steps to max 5 µg/kg/min", "NICU only — respiratory depression, low BP. Taper off"],
[dr("lidocaine_iv") + " 2% plain", "ILAE: 2 mg/kg over 10 min, then 7 mg/kg/h for 4 h, 3.5 mg/kg/h for 12 h, 1.75 mg/kg/h for 12 h, then stop (reduce for preterm or cooling)", "NICU with cardiac monitoring only. Not after phenytoin, not with heart disease"],
[dr("dextrose") + " 10%", "2 mL/kg IV bolus, then infusion", "If glucose under 45 mg/dL (2.6 mmol/L)"],
[dr("calcium_gluconate") + " 10%", "2 mL/kg slow IV infusion, then oral", "Heart-rate monitoring; avoid extravasation; never mix with bicarbonate"],
[dr("magnesium_sulfate") + " 50%", "100 mg/kg (0.2 mL/kg) IV over 20 min or IM", "Low magnesium or calcium that does not correct"],
["Pyridoxine", "100 mg IV, then 30 mg/kg/day for 3–5 days (ILAE)", "Specialist trial; can cause apnoea. NEML has 25 mg tablets only"]])}
<p>Doses: Bhutan IMNCI 2024 for phenobarbital, phenytoin, dextrose and calcium;${r(1)} ILAE 2023 Table 2 for all second-line drugs and pyridoxine.${r(3)} <b>Diazepam is not used</b> in the first 4 weeks (Bhutan IMNCI).</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Preterm babies</b>", "Seizures are more often subtle or electrographic only; IVH is a common cause — do a cranial ultrasound. Phenobarbital clears more slowly; lidocaine dose is lower"],
["<b>Babies being cooled for HIE</b>", "Drug levels run higher — phenobarbital accumulates; avoid extra maintenance unless seizures recur"],
["<b>Heart disease</b>", "Levetiracetam second line; avoid phenytoin and lidocaine (ILAE)"],
["<b>Suspected channelopathy</b> (well baby, tonic seizures, normal imaging, family history)", "A sodium-channel blocker (phenytoin, or carbamazepine 10 mg/kg/day orally) may work best after phenobarbital (ILAE)"],
["<b>Home-born or referred baby</b>", "Ask about cord care (tetanus), feeds, warmth and glucose before transfer; give the first phenobarbital dose before transfer"],
["<b>Babies of diabetic mothers</b>", "Check glucose, calcium and magnesium together"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Apnoea after phenobarbital", "Bag-mask ventilation; CPAP or intubation; do not reverse — it settles as levels fall. Transfer with an escort able to ventilate"],
["Seizures continue after 40 mg/kg phenobarbital at a district hospital", "Phenytoin 20 mg/kg over 20–30 min with heart-rate monitoring, call the referral NICU, arrange transfer"],
["No glucometer", "Give 10% dextrose 2 mL/kg empirically (WHO, context-specific)"],
["LP not possible", "Treat empirically for meningitis at meningitis doses (WHO)"],
["Jerks stop but baby remains unresponsive", "Possible electrographic seizures — aEEG/EEG if available; otherwise watch for subtle signs and autonomic changes"],
["Parents ask about long-term epilepsy", "Explain the cause and that most acute provoked seizures do not become epilepsy; arrange development follow-up (ILAE: inform parents early)"]])}
` },

{ id: "complications", title: "Complications and outcome", html: `
<ul><li>From the drugs: apnoea, low blood pressure, poor feeding, arrhythmia (phenytoin, lidocaine).</li><li>From the cause and seizure burden: cerebral palsy, developmental delay, epilepsy later in infancy, learning and behaviour problems, visual and hearing loss.</li><li>Outcome depends mainly on the cause: hypocalcaemia from feeds and stroke often do well; severe HIE, major bleeds and brain malformations do badly.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Discharge off medicines in most babies (ILAE); explain what a seizure looks like and when to return.</li><li>If sent home on phenobarbital: write the dose in mg and mL, the stop date and the review date.</li><li>Developmental review at 3, 6, 12 and 18–24 months; hearing and vision screening.</li><li>Infant spasms or new seizures in the first year: refer to a paediatric neurologist.</li><li>Vaccinate on schedule — neonatal seizures are not a reason to delay vaccines.</li></ul>
` },

{ id: "images", title: "Images", html: `<p>No openly licensed photograph or EEG of neonatal seizures was found on Wikimedia Commons; use the bedside recognition table and video events on a phone.</p>` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Newborn with a possible seizure", [F.s("Airway, oxygen, warmth, IV; bedside glucose"), F.a, F.d("Glucose under 45 mg/dL?"), F.a, F.b([["Yes", F.e("10% dextrose 2 mL/kg, then infusion")], ["No", F.s("Take calcium, magnesium, sodium, culture")]]), F.a, F.d("Seizure more than 3 min or recurring?"), F.a, F.e("Phenobarbital 20 mg/kg IV over 20 min"), F.a, F.e("Still seizing: further 10–20 mg/kg to total 40 mg/kg"), F.a, F.e("Still seizing: phenytoin 20 mg/kg (ECG) or levetiracetam 40 mg/kg"), F.a, F.e("Refractory: NICU — midazolam or lidocaine; pyridoxine trial if no cause"), F.a, F.ok("Treat the cause; stop medicines before discharge")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Skipping the glucose check", "Brain injury from treatable hypoglycaemia", "Glucose before any drug"],
["Giving diazepam to a newborn", "Apnoea, and against the Bhutan protocol", "Phenobarbital first; midazolam only in NICU"],
["Calling jitteriness a seizure", "Unneeded sedating drugs", "Hold the limb; check for autonomic and eye signs"],
["Missing meningitis", "Death or disability", "LP when stable, or treat empirically"],
["Phenytoin in dextrose or fast push", "Precipitates; arrhythmia", "Saline only, over 20–30 min, ECG"],
["Giving lidocaine after phenytoin", "Cardiac arrhythmia", "Lidocaine only if no phenytoin given and no heart disease"],
["Sending home on phenobarbital for months", "Sedation, no proven benefit", "Stop before discharge after acute seizures (ILAE)"],
["Prophylactic phenobarbital in HIE without seizures", "No benefit (WHO strong)", "Treat only actual seizures"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "How do you tell jitteriness from a seizure?", "Jitteriness is fast, oscillating, stimulus-sensitive and stops with gentle restraint, with no eye or autonomic change. A seizure continues when the limb is held.")}
${qa("Student", "What is the most important cause of seizures in the first 72 hours, and after day 3?", "First 72 hours: perinatal asphyxia (HIE). After day 3: meningitis (Bhutan IMNCI 2024).")}
${qa("Intern/MO", "A 3 kg baby is seizing; glucose is 30 mg/dL. What do you give first?", "10% dextrose 6 mL (2 mL/kg) IV, then a dextrose infusion, and recheck glucose. Give phenobarbital 60 mg if the seizures continue.")}
${qa("Intern/MO", "Which benzodiazepine should not be used in the first 4 weeks in Bhutan?", "Diazepam (Bhutan IMNCI 2024 caution).")}
${qa("Intern/MO", "What is the maximum total phenobarbital loading dose in a day?", "40 mg/kg (Bhutan IMNCI; ILAE second load 10–20 mg/kg after 20 mg/kg).")}
${qa("Specialist", "What did NEOLEV2 show?", "Phenobarbital (20 + 20 mg/kg) stopped EEG seizures in 80% versus 28% with levetiracetam (40 + 20 mg/kg) as first-line treatment, supporting phenobarbital first line.")}
${qa("Specialist", "When should anti-seizure medicine be stopped after acute provoked neonatal seizures?", "Before discharge home, regardless of MRI or EEG findings, unless neonatal-onset epilepsy is suspected (ILAE 2023).")}
${qa("Specialist", "Which second-line drug is preferred with congenital heart disease, and which must be avoided?", "Levetiracetam preferred; lidocaine contraindicated (and not after phenytoin).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: Module 1 §3.6.2.4 and Module 2 §6.11 Neonatal convulsion and spasm.</li>
<li id="ref-2">World Health Organization, ILAE, IBE. Guidelines on neonatal seizures. Geneva: WHO; 2011. ISBN 9789241548304. <a href="https://www.who.int/publications/i/item/9789241548304" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Pressler RM, Abend NS, Auvin S, et al. Treatment of seizures in the neonate: guidelines and consensus-based recommendations — special report from the ILAE Task Force on Neonatal Seizures. Epilepsia 2023;64(10):2550–2570. <a href="https://doi.org/10.1111/epi.17745" target="_blank" rel="noopener">doi:10.1111/epi.17745</a></li>
<li id="ref-4">Sharpe C, Reiner GE, Davis SL, et al. Levetiracetam versus phenobarbital for neonatal seizures: a randomized controlled trial. Pediatrics 2020;145(6):e20193182. <a href="https://doi.org/10.1542/peds.2019-3182" target="_blank" rel="noopener">doi:10.1542/peds.2019-3182</a></li>
<li id="ref-5">Pressler RM, Cilio MR, Mizrahi EM, et al. The ILAE classification of seizures and the epilepsies: modification for seizures in the neonate. Epilepsia 2021;62(3):615–628. <a href="https://doi.org/10.1111/epi.16815" target="_blank" rel="noopener">doi:10.1111/epi.16815</a></li>
<li id="ref-6">Jajoo M, Anand P, Passi GR, et al. Treatment of seizures in the neonate: special report from the ILAE Task Force on Neonatal Seizures, 2022 (Indian perspective). Indian Pediatrics 2023;60(8):675–678. <a href="https://doi.org/10.1007/s13312-023-2970-6" target="_blank" rel="noopener">doi:10.1007/s13312-023-2970-6</a></li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024", "<span class='pass'>Read directly</span>", "All Bhutan doses, causes and mimics"],
["WHO 2011 neonatal seizures", "<span class='pass'>Read directly</span>", "Table 1 key recommendations from the WHO IRIS PDF. Earlier page cited a non-existent 'WHO 2023' guideline and a dead link — corrected"],
["ILAE 2023", "<span class='pass'>Read directly</span>", "Six recommendations and Table 2 doses"],
["Two-source doses", "<span class='pass'>Checked</span>", "Phenobarbital and phenytoin: IMNCI + ILAE. Dextrose and calcium: IMNCI + WHO. Levetiracetam, midazolam, lidocaine, pyridoxine: ILAE + NEOLEV2 (levetiracetam only)"],
["Magnesium dose and calcium cut-offs", "<span class='unv'>Not read</span>", "Common neonatal practice; not stated in IMNCI, WHO or ILAE — second source not read"],
["NEML 2025", "<span class='pass'>Checked</span>", "Strengths listed; no pyridoxine injection"],
["Cooling / EEG availability in Bhutan", "<span class='unv'>Not read</span>", "Not confirmed — ask the JDWNRH NICU"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "neoseizure (weights 1.2, 3, 4 kg; glucose low and normal)"]], "qc")}` }
]
});
