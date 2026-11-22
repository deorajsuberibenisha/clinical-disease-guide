/* Seizures, epilepsy, status epilepticus and febrile seizures — children and neonates */
registerPage({
id: "epilepsy-child",
title: "Seizures, Epilepsy & Febrile Seizures — Children & Neonates",
subtitle: "Febrile seizures without fear, the convulsing child by the clock and the kilogram, neonatal seizures, infantile spasms and the common childhood epilepsies — and why routine diazepam prophylaxis is no longer advised",
age: "Children & neonates", specs: ["paeds", "neuro", "picu", "nicu", "neo", "emerg"],
keywords: ["febrile seizure", "febrile convulsion", "seizure child", "convulsion child", "status epilepticus child", "epilepsy child", "childhood absence epilepsy", "infantile spasms", "West syndrome", "neonatal seizures", "rolandic epilepsy", "self-limited epilepsy with centrotemporal spikes", "Dravet", "buccal midazolam", "rectal diazepam", "levetiracetam child", "phenobarbital neonate", "hypocalcaemia seizure", "hypoglycaemia seizure"],
related: ["epilepsy-adult", "meningitis-child", "sepsis-child", "dm-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A child having a seizure is the most frightening thing many parents ever see, and most seizures in children are short febrile seizures that do no harm. The skill is to treat the long one quickly and safely, find the serious cause when there is one — meningitis, low glucose, low calcium, malaria, head injury — and give families calm, clear advice.</p>
<div class="glance">
<div><h4>Simple febrile seizure</h4><p>6–60 months, fever, generalised, under 15 minutes, once in 24 hours, full recovery. No EEG, scan or long-term medicine.</p></div>
<div><h4>Seizure over 5 minutes</h4><p>${dr("diazepam")} 0.5 mg/kg rectally or 0.3 mg/kg IV (STG), or ${dr("midazolam")} 0.3 mg/kg buccal; repeat once.</p></div>
<div><h4>Still seizing (about 20 min)</h4><p>${dr("levetiracetam")} 40 mg/kg IV over 5 min, or ${dr("phenytoin")} 20 mg/kg over 20 min.</p></div>
<div><h4>Neonates</h4><p>${dr("phenobarbital")} 20 mg/kg IV first; correct glucose, calcium, magnesium; look for sepsis and meningitis.</p></div>
<div><h4>Always check</h4><p>Glucose; temperature; neck, fontanelle, rash; consciousness after the seizure.</p></div>
<div><h4>Epilepsy in children</h4><p>One drug, low and slow; valproate for generalised epilepsy in boys; levetiracetam or lamotrigine in girls who will reach childbearing age.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§12.1.1) defines febrile convulsion (6–60 months, fever 38 °C or more, generalised, under 15 minutes, no residual weakness) and treats it with ABC, SpO₂ over 92%, paracetamol 15 mg/kg and diazepam 0.3 mg/kg IV or 0.5 mg/kg rectally. It also suggests oral diazepam 0.3 mg/kg twice daily for 3 days during later fevers when the first seizure was before 1 year or parents are very anxious. Current AAP and NICE guidance advise against routine prophylaxis (side effects outweigh a small benefit), so this guide offers a rescue plan instead and explains the difference. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>About 1 in 25 children has a seizure in childhood, most often a febrile seizure. Epilepsy affects about 1 in 200 children.${r(1, 2)}</p>
${tbl(["Age", "Common causes", "Notes"], [
["Neonate", "Hypoxic-ischaemic encephalopathy, hypoglycaemia, hypocalcaemia, hypomagnesaemia, sepsis/meningitis, intracranial bleed, kernicterus, drug withdrawal, inborn errors", "Seizures are often subtle: lip-smacking, cycling, apnoea, staring"],
["3–12 months", "Infantile spasms (West syndrome), meningitis, metabolic causes, febrile seizures from 6 months", "Clusters of jerks on waking: urgent referral"],
["6 months–5 years", "<b>Febrile seizures</b> (2–5% of children), meningitis, cerebral malaria, gastroenteritis with electrolyte disturbance", "Simple febrile seizures do not cause brain damage"],
["School age", "Childhood absence epilepsy, self-limited epilepsy with centrotemporal spikes (rolandic), head injury, neurocysticercosis", "Many childhood epilepsies remit by adolescence"],
["Adolescence", "Juvenile myoclonic epilepsy, syncope, psychogenic events, alcohol and drugs", "Ask about morning jerks"],
["Any age", "Hypoglycaemia (fasting, diabetes, malnutrition), head injury, poisoning (kerosene, organophosphates, isoniazid), cerebral palsy", "Check glucose first"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Why young brains seize so easily", [
F.s("Developing brain: excitatory circuits mature before inhibitory ones"), F.a,
F.d("Trigger"), F.a,
F.b([["Fever (rising temperature, viral illness)", F.s("Febrile seizure in a genetically susceptible child aged 6–60 months")], ["Lesion, metabolic, genetic", F.s("Symptomatic seizures or epilepsy syndrome")]]), F.a,
F.d("Stops within 5 minutes?"), F.a,
F.b([["Yes", F.ok("Recovery; recurrence risk about 1 in 3 for febrile seizures")], ["No", F.e("Status: benzodiazepine resistance grows with time")]])])}
<p>A febrile seizure is a feature of the child's age and genes, not a sign that the fever was “too high”. That is why paracetamol makes the child comfortable but does not prevent the next seizure, and why long-term medicine is rarely justified.${r(3, 4)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Prophylaxis after febrile seizure", "Oral diazepam 0.3 mg/kg twice daily for 3 days with fevers if first seizure under 1 year or high parental anxiety", "AAP 2008: neither continuous nor intermittent anti-seizure medicine is recommended for simple febrile seizures; NICE similar", "No routine prophylaxis; rescue plan (rectal diazepam or buccal midazolam) for families of children with prolonged seizures or far from care " + LB.loc()],
["Antipyretics", "Tepid sponging and paracetamol", "Antipyretics do not prevent febrile seizures; tepid sponging adds discomfort", "Paracetamol for comfort; no sponging"],
["Second-line in status", "Not specified for children", "Levetiracetam 40 mg/kg or phenytoin 20 mg/kg (EcLiPSE, ConSEPT; NICE)", "Levetiracetam first where available"],
["Referral after febrile seizure", "Refer to the district hospital after prophylactic medication", "Simple febrile seizures do not need specialist referral; complex ones do", "Refer complex, recurrent, or uncertain cases"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Picture", "Features", "Clue"], [
["Simple febrile seizure", "Generalised stiffening and jerking at the start of a febrile illness, under 15 minutes, once in 24 hours, back to normal within an hour", "Look for the fever source (ears, throat, chest, urine)"],
["Complex febrile seizure", "Focal, 15 minutes or more, repeated within 24 hours, or Todd's weakness", "Admit and observe; consider LP and imaging"],
["Neonatal seizure", "Subtle movements: cycling, lip-smacking, eye deviation, apnoea; or focal clonic jerks", "Jitteriness stops with holding a limb; seizures do not"],
["Infantile spasms", "Clusters of sudden flexion of head, trunk and arms, often on waking; developmental regression", "Urgent EEG (hypsarrhythmia) and treatment"],
["Childhood absence", "Many brief blank spells a day, eyelid flutter; triggered by over-breathing", "Teacher notices daydreaming"],
["Rolandic (centrotemporal spikes)", "Night-time seizures with drooling, facial twitching, speech arrest in a school-age child", "Usually remits by mid-teens; often no medicine"],
["Status epilepticus", "Continuous seizure over 5 minutes", "Emergency"]])}
${box("red", "Danger signs — think beyond a febrile seizure", `<ul><li>Age under 6 months, or seizure without fever</li><li>Not fully awake within 1 hour; focal or prolonged seizure</li><li>Neck stiffness, bulging fontanelle, purpura, petechiae</li><li>Head injury, suspected non-accidental injury</li><li>Severe dehydration, malnutrition, travel to malaria areas</li></ul>`)}
<h3>The typical patient</h3>
<p>A 20-month-old girl from Gelephu had a two-minute generalised seizure at home on the first day of a fever. When seen 40 minutes later she is alert, playing and has a red eardrum. Temperature 39.2 °C; no neck stiffness or rash; fully vaccinated. <b>This is a simple febrile seizure with otitis media.</b> She needs treatment of the ear infection, paracetamol for comfort, and a calm explanation for her parents: febrile seizures are common, do not cause brain damage, and recur in about a third of children. They are taught first aid. No EEG, scan or long-term medicine is needed.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against seizure", "Best test"], [
["<b>Meningitis / encephalitis</b>", "Drowsy after the event, irritability, neck stiffness, fontanelle", "—", "LP (see <a href=\"#/d/meningitis-child\">meningitis</a>)"],
["Febrile rigors", "Shivering with fever, child conscious and responsive", "No loss of awareness", "Observation"],
["Breath-holding spell", "Crying, then breath held, blue or pale, brief stiffening", "Clear trigger (upset, minor bump)", "History"],
["Reflex anoxic seizure / syncope", "Pallor after a bump or fright", "Quick recovery", "History, ECG"],
["Jitteriness (neonate)", "Stimulus-sensitive tremor, stops with gentle holding", "No eye or autonomic signs", "Glucose, calcium"],
["Cerebral malaria", "Travel, anaemia, splenomegaly, low glucose", "—", "Malaria RDT"],
["Hypoglycaemia, hypocalcaemia", "Fasting, diarrhoea, rickets, neonatal", "—", "Glucose, calcium"],
["Gastro-oesophageal reflux (Sandifer)", "Arching after feeds", "—", "History"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Bedside glucose</b>", "Hypoglycaemia", "Every seizure", "Essential"],
["Temperature, full examination", "Febrile seizure source; meningism", "Ears, throat, chest, skin, fontanelle", "Essential"],
["Sodium, calcium, magnesium", "Neonates, diarrhoea, malnutrition, prolonged or unexplained seizures", "Not needed for a simple febrile seizure", "Selected"],
["Urine, malaria RDT, blood culture", "Fever source", "By clinical picture", "Selected"],
["Lumbar puncture", "Meningism, slow recovery; consider if on antibiotics or 6–12 months with incomplete Hib/pneumococcal vaccination", "Not for simple febrile seizures in a well child (AAP 2011)", "Selected"],
["EEG", "Afebrile seizures, infantile spasms (urgent), absences", "Not for simple febrile seizures", "Specialist"],
["CT/MRI", "Focal seizures or signs, head injury, raised pressure, regression", "MRI preferred for epilepsy", "Selected"],
["Cranial ultrasound", "Neonates: bleeding, HIE changes", "Bedside in NICU", "Neonates"]])}
` },

{ id: "staging", title: "Status epilepticus and febrile seizure tools", html: `
<h3>A. Convulsing child — timed doses by weight</h3>
<p>Treat a seizure lasting 5 minutes or more as status epilepticus. Count any benzodiazepine already given at home or before arrival.${r(5, 6, 7)}</p>
<div class="calc" data-calc="statusepi"></div>
<h3>B. Seizure with fever</h3>
<div class="calc" data-calc="febsz"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. During the seizure</h3>
<ol><li>Time it. Recovery position, clear the airway (suction), oxygen to keep SpO₂ over 92% (STG). Nothing in the mouth.</li>
<li>Check glucose: under 3 mmol/L → 10% dextrose 2 mL/kg IV.</li>
<li>At 5 minutes: ${dr("diazepam")} 0.5 mg/kg rectally or 0.3 mg/kg IV slowly (STG; max 10 mg), or ${dr("midazolam")} 0.3 mg/kg buccal (max 10 mg) or 0.2 mg/kg IM. Repeat once after 5–10 minutes if still seizing.</li>
<li>About 20 minutes (two benzodiazepine doses given): ${dr("levetiracetam")} 40 mg/kg IV (max 3 g) over 5 minutes, or ${dr("phenytoin")} 20 mg/kg IV over at least 20 minutes with ECG monitoring.${r(5, 6)}</li>
<li>40 minutes: the other second-line drug or ${dr("phenobarbital")} 20 mg/kg; call PICU/anaesthesia; rapid sequence intubation if still seizing.</li>
<li>Treat the cause: antibiotics if meningitis is possible (do not delay for LP), antimalarials, calcium or magnesium, pyridoxine for isoniazid poisoning.</li></ol>
<h3>B. Febrile seizures</h3>
<ul><li>Find and treat the source of fever. Paracetamol 15 mg/kg for comfort (does not prevent recurrence); no tepid sponging; light clothing.</li>
<li>Admit if: complex seizure, under 18 months with any doubt about meningitis, not fully recovered, parents unable to cope, or living far from care.</li>
<li>No routine anti-seizure prophylaxis (AAP).${r(3, 4)} For children with previous prolonged febrile seizures or who live far from a facility, teach the family to give <b>rectal diazepam 0.5 mg/kg</b> (or buccal midazolam where available) if a seizure lasts 5 minutes.</li></ul>
<h3>C. Neonatal seizures</h3>
<ul><li>Glucose, calcium, magnesium, sodium; blood culture and LP; cranial ultrasound.</li>
<li>${dr("phenobarbital")} 20 mg/kg IV over 15–20 minutes; further 10 mg/kg doses to 40 mg/kg. Second line: phenytoin 20 mg/kg, levetiracetam or midazolam infusion (NICU).${r(8)}</li>
<li>Hypocalcaemia: 10% calcium gluconate 2 mL/kg IV over 10 minutes with ECG monitoring. Hypomagnesaemia: magnesium sulfate 100 mg/kg (0.2 mL/kg of 50%) IV over 20 minutes.</li>
<li>Treat sepsis/meningitis; HIE: neonatal unit care.</li></ul>
<h3>D. Infantile spasms (West syndrome)</h3>
<ul><li>Urgent referral (days, not weeks): EEG shows hypsarrhythmia. Treatment by a paediatric neurologist: high-dose ${dr("prednisolone")} (for example 40–60 mg/day for 2 weeks, then taper) or ACTH; vigabatrin (not on NEML) especially in tuberous sclerosis. Early treatment improves development.${r(9)}</li></ul>
<h3>E. Childhood epilepsy — long-term medicine</h3>
${tbl(["Type", "First choice", "Avoid"], [
["Focal (including rolandic, if treatment needed)", dr("levetiracetam") + " or " + dr("lamotrigine") + "; " + dr("carbamazepine") + " where these are not available", "—"],
["Generalised tonic-clonic", dr("valproate") + " in boys; levetiracetam or lamotrigine in girls", "Valproate in girls who will reach childbearing age (unless others fail)"],
["Childhood absence", "Valproate (ethosuximide not on NEML); lamotrigine", "Carbamazepine, phenytoin"],
["Juvenile myoclonic", "Valproate (boys), levetiracetam", "Carbamazepine, phenytoin"],
["Dravet syndrome (prolonged febrile and afebrile seizures from infancy)", "Valproate, clobazam (specialist)", "Sodium-channel blockers: carbamazepine, phenytoin, lamotrigine"],
["Low-resource, unknown type", "Phenobarbital or levetiracetam", "—"]])}
<p>Start low, increase slowly; review school performance and behaviour (phenobarbital and levetiracetam can affect both). Consider stopping after 2 seizure-free years (STG: 3) by a slow taper.${r(2)}</p>
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "First aid, glucose, rectal or IV diazepam (STG doses); refer complex febrile seizures, all afebrile seizures and any child not recovering"],
["District hospital", "Status pathway with IV levetiracetam or phenytoin; LP and malaria testing; admit complex febrile seizures; start epilepsy treatment with follow-up"],
["Referral hospital / NICU / PICU", "EEG (KGUMSB), MRI, paediatric neurology, neonatal seizure management, PICU for refractory status"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("diazepam"), "0.3 mg/kg IV slowly or 0.5 mg/kg rectal (max 10 mg); repeat once", "STG first line"],
[dr("midazolam"), "0.3 mg/kg buccal or 0.2 mg/kg IM (max 10 mg)", "1 mg/mL vial: watch volume"],
[dr("levetiracetam"), "Status 40 mg/kg IV (max 3 g) over 5 min; maintenance 10–30 mg/kg twice daily", "Behaviour change"],
[dr("phenytoin"), "Status 20 mg/kg IV over ≥20 min (≤1 mg/kg/min)", "ECG; saline only"],
[dr("phenobarbital"), "Status 20 mg/kg IV; neonate 20 mg/kg, up to 40 mg/kg; maintenance 2.5–5 mg/kg/day", "Neonatal first line"],
[dr("valproate"), "10–15 mg/kg/day → 25–30 mg/kg/day (max 60)", "Avoid under 2 years if possible and in girls"],
[dr("carbamazepine"), "5 mg/kg at night → 5 mg/kg two or three times daily (max 20 mg/kg/day)", "Focal only"],
[dr("lamotrigine"), "Specialist weight-based slow titration", "Rash risk; halve with valproate"],
[dr("prednisolone"), "Infantile spasms: 40–60 mg/day (specialist)", "Blood pressure, glucose, infection"],
[dr("paracetamol"), "15 mg/kg 6-hourly (max 60 mg/kg/day)", "Comfort only"],
[dr("calcium_gluconate"), "10%: 2 mL/kg IV over 10 min (ECG)", "Hypocalcaemic seizures"]])}
` },

{ id: "populations", title: "Neonates, adolescents and special groups", html: `
<ul><li><b>Neonates:</b> subtle seizures; EEG confirms many. Phenobarbital first; treat the cause. Many neonatal seizures are acute and do not need long-term medicine after discharge.</li>
<li><b>Adolescent girls:</b> plan for future pregnancy: avoid valproate; folic acid; contraception counselling with enzyme-inducing drugs (see <a href="#/d/epilepsy-adult">adult chapter</a>).</li>
<li><b>Cerebral palsy and developmental disability:</b> epilepsy is common; carers need a written rescue plan.</li>
<li><b>Severe malnutrition:</b> hypoglycaemia, hypocalcaemia and hypomagnesaemia are common causes.</li>
<li><b>Schools:</b> teachers should know first aid; children with epilepsy should take part in school life with sensible precautions (swimming supervised one-to-one).</li></ul>
` },

{ id: "scenarios", title: "Seizures with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Diabetes on insulin", "Hypoglycaemia first: glucose", "See <a href=\"#/d/dm-child\">diabetes</a>"],
["Gastroenteritis", "Check sodium and glucose", "Hyponatraemia or hypernatraemia from fluids"],
["TB treatment", "Rifampicin lowers carbamazepine, phenytoin, valproate, lamotrigine; isoniazid raises phenytoin; pyridoxine prevents isoniazid seizures", "Interactions"],
["Head injury", "CT if focal, prolonged, or not recovering", "Bleed"],
["Vaccination after a febrile seizure", "Continue all vaccines; give paracetamol for post-vaccine fever if needed", "Febrile seizures are not a contraindication"],
["Known epilepsy with fever", "Fever lowers threshold; check adherence", "Breakthrough seizures"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Issue", "Recognition", "Management"], [
["Recurrent febrile seizures", "About 30%; higher if first under 18 months, family history, low fever at seizure, short fever duration", "Reassurance; rescue plan if prolonged"],
["Later epilepsy", "About 2–3% after simple, higher after complex febrile seizures", "Review afebrile seizures"],
["Aspiration, injury, respiratory depression", "During status or after benzodiazepines", "Airway care; two-dose limit"],
["Developmental and learning problems", "Epileptic encephalopathies, infantile spasms, medicine side effects", "Early specialist care; school support"],
["Stigma", "Children kept from school or play", "Family and school education"]])}
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Simple febrile seizure: no routine follow-up needed beyond treating the fever source.</li>
<li>Epilepsy: review growth, development, school, behaviour, adherence and side effects every 3–6 months.</li>
<li>Written seizure action plan for home and school.</li></ul>
${box("green", "What to tell the family (febrile seizure)", `<ul><li>"Febrile seizures are common between 6 months and 5 years. They look frightening but do not damage the brain."</li><li>About 1 in 3 children has another one during a future fever. Medicines to lower fever make your child comfortable but do not stop seizures.</li><li>If it happens again: lay your child on their side on the floor, away from hard things, nothing in the mouth, time it; if it lasts more than 5 minutes, give the rescue medicine if you have it and come to hospital.</li><li>Your child can be vaccinated as usual.</li></ul>`)}
${box("red", "Come to hospital at once if", `<ul><li>A seizure lasts more than 5 minutes, or another one follows</li><li>Your child is very sleepy, floppy, has a stiff neck, a rash that does not fade, or trouble breathing</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Absence seizure on EEG", src: "images/eeg-absence.png", mod: "Electroencephalogram (EEG)", ctx: "Child with brief staring spells", loc: "All channels, both hemispheres", find: "Sudden onset of regular, generalised spike-and-wave discharges at about 3 per second", signs: "3 Hz generalised spike-wave", interp: "Typical of childhood absence epilepsy: valproate or lamotrigine (ethosuximide where available); avoid carbamazepine", by: "Bromfield EB, Cavazos JE, Sirven JI (eds), An Introduction to Epilepsy", page: "https://commons.wikimedia.org/wiki/File:EEG_Absence_seizure.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "Neurocysticercosis on CT", src: "images/ncc-ct.jpg", mod: "CT brain", ctx: "Seizures in a child or adult from an endemic area", loc: "Brain parenchyma", find: "Multiple vesicular cysts and calcifications", signs: "Neurocysticercosis", interp: "A preventable cause of seizures in South Asian children too: anti-seizure medicine; specialist decision on albendazole with steroids", by: "Innocent Lule Segamwenge", page: "https://commons.wikimedia.org/wiki/File:Neurocysticercosis_brain_CT.jpg", lic: "CC BY 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child who has had a seizure", [
F.s("Still seizing? Treat by the clock (5 min benzodiazepine; 20 min levetiracetam/phenytoin)"), F.a,
F.s("Glucose; temperature; examine for meningism, rash, injury"), F.a,
F.d("Fever, age 6–60 months, generalised, under 15 min, full recovery?"), F.a,
F.b([["Yes", F.ok("Simple febrile seizure: treat the source, reassure, teach first aid")], ["No", F.d("Meningism, slow recovery, focal, under 6 months, no fever?")]]), F.a,
F.b([["Yes", F.e("Admit: LP/antibiotics, glucose/calcium/sodium, imaging as needed")], ["Recurrent afebrile seizures", F.s("EEG, consider epilepsy treatment, refer")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Count the doses given at home</b> — two benzodiazepine doses in total, then change drug.</li>
<li>A child who is not back to normal an hour after a febrile seizure needs assessment for meningitis.</li>
<li>Clusters of jerks in an infant are spasms until proven otherwise: refer urgently.</li>
<li>In neonates, check calcium and magnesium as well as glucose.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Routine diazepam prophylaxis for febrile seizures", "Sedation, ataxia, masks meningitis; does not change outcome", "Rescue plan instead"],
["Tepid sponging", "Discomfort, shivering; no prevention", "Paracetamol for comfort"],
["Third benzodiazepine dose", "Apnoea", "Second-line drug"],
["Missing hypoglycaemia", "Brain injury", "Glucose first"],
["Carbamazepine for absence or myoclonic seizures", "Worsens them", "Match drug to type"],
["Delaying infantile spasms referral", "Developmental loss", "Refer within days"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Define a simple febrile seizure.", "A generalised seizure under 15 minutes, once in 24 hours, with fever, in a child aged 6–60 months, with full recovery and no CNS infection or previous afebrile seizure.")}
${qa("Student", "What is the recurrence risk after a first febrile seizure?", "About 1 in 3.")}
${qa("Intern/MO", "What are the STG doses of diazepam for a convulsing child?", "0.3 mg/kg IV very slowly or 0.5 mg/kg rectally.")}
${qa("Intern/MO", "Which children with a febrile seizure need an LP?", "Those with meningeal signs or slow recovery; consider in children on antibiotics or aged 6–12 months with incomplete Hib/pneumococcal vaccination.")}
${qa("Intern/MO", "What is the first-line drug for neonatal seizures and its dose?", "Phenobarbital 20 mg/kg IV, with further 10 mg/kg doses up to 40 mg/kg.")}
${qa("Specialist", "What did EcLiPSE and ConSEPT show?", "Levetiracetam 40 mg/kg was as effective as phenytoin 20 mg/kg as second-line treatment for paediatric convulsive status epilepticus, and is quicker to give.")}
${qa("Specialist", "Why avoid sodium-channel blockers in Dravet syndrome?", "They worsen seizures in SCN1A-related epilepsy.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Subcommittee on Febrile Seizures, American Academy of Pediatrics. Febrile seizures: guideline for the neurodiagnostic evaluation of the child with a simple febrile seizure. <i>Pediatrics</i> 2011;127:389–394. <a href="https://doi.org/10.1542/peds.2010-3318" target="_blank" rel="noopener">doi:10.1542/peds.2010-3318</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Epilepsies in children, young people and adults (NG217), 2022 (updated 2025). <a href="https://www.nice.org.uk/guidance/ng217" target="_blank" rel="noopener">nice.org.uk/guidance/ng217</a></li>
<li id="ref-3">Steering Committee on Quality Improvement and Management, AAP. Febrile seizures: clinical practice guideline for the long-term management of the child with simple febrile seizures. <i>Pediatrics</i> 2008;121:1281–1286. <a href="https://doi.org/10.1542/peds.2008-0939" target="_blank" rel="noopener">doi:10.1542/peds.2008-0939</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.1.1 Febrile convulsion and §7.7 Seizure and epilepsy; IMNCI 2024; NEML 2025.</li>
<li id="ref-5">Lyttle MD, Rainford NEA, Gamble C et al. Levetiracetam versus phenytoin for second-line treatment of paediatric convulsive status epilepticus (EcLiPSE). <i>Lancet</i> 2019;393:2125–2134. <a href="https://doi.org/10.1016/S0140-6736(19)30724-X" target="_blank" rel="noopener">doi:10.1016/S0140-6736(19)30724-X</a></li>
<li id="ref-6">Dalziel SR, Borland ML, Furyk J et al. Levetiracetam versus phenytoin for second-line treatment of convulsive status epilepticus in children (ConSEPT). <i>Lancet</i> 2019;393:2135–2145. <a href="https://doi.org/10.1016/S0140-6736(19)30722-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(19)30722-6</a></li>
<li id="ref-7">Glauser T, Shinnar S, Gloss D et al. Evidence-based guideline: treatment of convulsive status epilepticus in children and adults. <i>Epilepsy Curr</i> 2016;16:48–61. <a href="https://doi.org/10.5698/1535-7597-16.1.48" target="_blank" rel="noopener">doi:10.5698/1535-7597-16.1.48</a></li>
<li id="ref-8">World Health Organization. Guidelines on neonatal seizures. Geneva: WHO; 2011. <a href="https://www.who.int/publications/i/item/9789241548304" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-9">O'Callaghan FJK, Edwards SW, Alber FD et al. Safety and effectiveness of hormonal treatment versus hormonal treatment with vigabatrin for infantile spasms (ICISS). <i>Lancet Neurol</i> 2017;16:33–42. <a href="https://doi.org/10.1016/S1474-4422(16)30294-0" target="_blank" rel="noopener">doi:10.1016/S1474-4422(16)30294-0</a></li>
<li id="ref-10">Bhutan Clinical Reference app: Seizures and status epilepticus (topic page and protocol, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='pass'>Verified</span>", "STG 2024 §12.1.1 read in full"],
["Status doses (two sources)", "<span class='pass'>Checked</span>", "EcLiPSE/ConSEPT, NICE NG217, BNFc"],
["Febrile seizure LP criteria", "<span class='pass'>Checked</span>", "AAP 2011; tested in calculator"],
["Neonatal doses", "<span class='flag'>Simplified</span>", "Follow the neonatal formulary for intervals and maintenance"],
["Buccal midazolam availability", "<span class='flag'>Gap</span>", "Not on NEML; injectable 1 mg/mL only"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a paediatrician or paediatric neurologist"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 4.0 / CC BY 4.0"]], "qc")}
` }
]
});
