/* Seizures, epilepsy and status epilepticus — adults */
registerPage({
id: "epilepsy-adult",
title: "Seizures, Epilepsy & Status Epilepticus — Adults",
subtitle: "The first seizure, the five-minute rule, choosing the right long-term medicine (and why valproate is avoided in young women), neurocysticercosis and alcohol, and living safely with epilepsy in Bhutan",
age: "Adults", specs: ["neuro", "medicine", "emerg", "psych"],
keywords: ["epilepsy", "seizure", "fits", "convulsion", "status epilepticus", "first seizure", "generalised tonic-clonic", "focal seizure", "absence", "myoclonic", "levetiracetam", "valproate", "carbamazepine", "lamotrigine", "phenytoin", "phenobarbitone", "neurocysticercosis", "alcohol withdrawal seizure", "eclampsia", "psychogenic non-epileptic seizure", "PNES", "SUDEP", "epilepsy pregnancy"],
related: ["epilepsy-child", "meningitis-adult", "stroke-adult", "cirrhosis-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most seizures stop on their own within two minutes. The emergency is the one that does not: after five minutes it is unlikely to stop without treatment, and the longer it runs the harder it is to stop. For the long term, the right diagnosis matters more than the drug, because a label of epilepsy means years of treatment, and in Bhutan, still, stigma.</p>
<div class="glance">
<div><h4>Five-minute rule</h4><p>A seizure lasting 5 minutes, or repeated seizures without recovery, is <b>status epilepticus</b>: treat now.</p></div>
<div><h4>Status: in order</h4><p>Glucose → ${dr("diazepam")} 10 mg IV or ${dr("midazolam")} 10 mg IM/buccal (once more at most) → ${dr("levetiracetam")} 60 mg/kg or ${dr("phenytoin")} 20 mg/kg → ICU.</p></div>
<div><h4>Pregnant or postpartum?</h4><p>Eclampsia: ${dr("magnesium_sulfate")}, not benzodiazepines alone.</p></div>
<div><h4>Epilepsy</h4><p>Two unprovoked seizures more than 24 hours apart, or one with a high risk of recurrence (ILAE).</p></div>
<div><h4>First choices</h4><p>Focal: ${dr("lamotrigine")} or ${dr("levetiracetam")}. Generalised: ${dr("valproate")} (men), levetiracetam or lamotrigine (women who could become pregnant). Where little else exists: ${dr("carbamazepine")} (focal) or ${dr("phenobarbital")}.</p></div>
<div><h4>Bhutan causes</h4><p>Neurocysticercosis, alcohol withdrawal, head injury, stroke, tuberculoma, eclampsia, low glucose or sodium.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§7.7) defines status epilepticus practically as any seizure over 5 minutes, advises against treating a single seizure (but investigating it, especially over 30 years), one drug at a time, at least 6 weeks before changing, and continuing for 3 seizure-free years before a slow taper. Its drug table lists phenobarbitone and phenytoin. NEML 2025 also carries levetiracetam (tablets and injection, to district hospitals), valproate, carbamazepine, lamotrigine and clobazam, so this guide uses the wider NICE and WHO choices. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>A <b>seizure</b> is a burst of abnormal, synchronised electrical activity in the brain causing sudden change in movement, sensation, behaviour or awareness. <b>Epilepsy</b> is a tendency to have unprovoked seizures. A seizure caused by an acute problem — low glucose, alcohol withdrawal, eclampsia, meningitis, a fresh head injury — is <b>acute symptomatic (provoked)</b> and is treated by fixing the cause, not by long-term anti-seizure medicine.${r(1, 2)}</p>
<h3>ILAE practical definition of epilepsy</h3>
<ul><li>At least two unprovoked seizures more than 24 hours apart; <b>or</b></li><li>One unprovoked seizure with a recurrence risk of at least 60% (for example an epileptic EEG, a structural brain lesion, or a seizure from a known old injury); <b>or</b></li><li>An epilepsy syndrome.</li></ul>
<p class="small">The STG text says “more than two” unprovoked seizures; the ILAE threshold is two. This guide follows the ILAE.</p>
${tbl(["Cause", "Clues", "Notes"], [
["Unknown or genetic", "Young onset, family history, normal scan", "About 60–75% (STG)"],
["<b>Neurocysticercosis</b>", "Pork tapeworm larvae in the brain; ring-enhancing cysts or calcifications on CT", "A leading preventable cause of adult-onset epilepsy in South Asia"],
["<b>Alcohol</b>", "Seizures 6–48 hours after the last drink; withdrawal tremor", "Provoked: treat withdrawal, not with long-term anti-seizure drugs"],
["Head injury, stroke, brain tumour", "Older adults; focal onset", "New epilepsy over 50 is often vascular"],
["Infection", "TB (tuberculoma), meningitis, encephalitis, cerebral malaria, HIV", "Treat the infection"],
["Metabolic", "Hypoglycaemia, low sodium, calcium or magnesium, uraemia, liver failure", "Check glucose first"],
["Eclampsia", "Pregnant from 20 weeks or within 6 weeks of delivery", "Magnesium sulfate"],
["Drugs and toxins", "Isoniazid overdose, tramadol, bupropion, organophosphates, withdrawal from benzodiazepines", "Pyridoxine for isoniazid"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From a single seizure to status epilepticus", [
F.s("Imbalance between excitation (glutamate) and inhibition (GABA) in a network of neurons"), F.a,
F.d("Where does it start?"), F.a,
F.b([["One area (focal)", F.s("Symptoms reflect that area; may spread to both sides (focal to bilateral tonic-clonic)")], ["Both hemispheres at once (generalised)", F.s("Tonic-clonic, absence, myoclonic, atonic")]]), F.a,
F.d("Stops within 2–5 minutes?"), F.a,
F.b([["Yes (most)", F.ok("Post-ictal recovery over minutes to hours")], ["No", F.e("GABA receptors withdraw from the cell surface: benzodiazepines lose power; after 30 minutes, neuronal injury begins")]])])}
<p>That receptor shift is why <b>timing matters</b>: benzodiazepines work best in the first minutes, and every delay makes the seizure more drug-resistant. It also explains why a second-line drug with a different mechanism (levetiracetam, phenytoin, valproate) is needed if two benzodiazepine doses fail.${r(3, 4)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Long-term first choice", "Phenobarbitone or phenytoin (table)", "NICE NG217: lamotrigine or levetiracetam (focal); valproate in men, lamotrigine/levetiracetam in women (generalised). WHO mhGAP: phenobarbital, carbamazepine, phenytoin, valproate, levetiracetam, lamotrigine", "NICE choices where stocked (NEML lists them to DH or RRH); phenobarbital or carbamazepine where they are the only option " + LB.loc()],
["Second-line in status", "Phenytoin (Bhutan EM practice)", "Levetiracetam, phenytoin (or fosphenytoin) or valproate are equally effective (ESETT); NICE: levetiracetam or phenytoin", "<b>Levetiracetam 60 mg/kg</b> first where available (faster, safer); phenytoin 20 mg/kg otherwise"],
["Phenytoin oral dose", "100–1000 mg/day (table)", "BNF: 150–300 mg to start, usually 200–500 mg/day, by levels", "BNF range; the STG figure appears to be a typographical error"],
["When to stop medicines", "After 3 seizure-free years, slowly", "NICE: discuss after at least 2 seizure-free years; taper over at least 3 months", "Discuss from 2 years; Bhutan practice of 3 years is reasonable"],
["Valproate in women", "Not addressed", "Avoid in girls and women who could become pregnant unless other drugs fail, with a pregnancy prevention programme (MHRA/EMA)", "As international"],
["Definition of epilepsy", "More than two unprovoked seizures", "Two unprovoked seizures, or one with high recurrence risk (ILAE 2014)", "ILAE"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Seizure type", "What happens", "Clue"], [
["Generalised tonic-clonic", "Sudden stiffening (often a cry), then rhythmic jerking of all limbs for 1–2 minutes; tongue bite (side), incontinence; confused and sleepy afterwards", "Eyes open during the event; lateral tongue bite is specific"],
["Focal aware", "Jerking of one limb or face, tingling, a rising stomach feeling, déjà vu, fear", "Patient remembers it"],
["Focal with impaired awareness", "Staring, lip-smacking, fumbling with hands, wandering; no memory", "Often temporal lobe"],
["Focal to bilateral tonic-clonic", "Starts focal, then becomes a full convulsion", "Ask about the warning (aura): it points to a focal cause"],
["Absence (rare in adults)", "Seconds of blank stare, many times a day", "Usually starts in childhood"],
["Myoclonic", "Brief jerks, often of the arms, soon after waking (dropping things)", "Juvenile myoclonic epilepsy; worsened by carbamazepine"],
["Status epilepticus", "Continuous seizure over 5 minutes, or repeated seizures without recovering between", "Emergency"]])}
<h3>Seizure or something else?</h3>
${tbl(["Feature", "Epileptic seizure", "Syncope (faint)", "Psychogenic non-epileptic seizure"], [
["Trigger", "Often none; sleep deprivation, alcohol, missed doses", "Standing, heat, pain, fear", "Emotional stress"],
["Duration", "1–2 minutes", "Seconds", "Often long (more than 5 minutes), waxing and waning"],
["Eyes", "Open", "Open or rolling up", "Often tightly closed, resisting opening"],
["Movements", "Stiffening then rhythmic jerking", "A few brief jerks are common", "Side-to-side head shaking, pelvic thrusting, asynchronous"],
["Afterwards", "Confused, sleepy, headache, sore muscles", "Quick recovery, pale, sweaty", "Often normal or crying"],
["Tongue bite, injury", "Side of tongue; injuries", "Rare", "Tip of tongue, if any"]])}
<h3>The typical patient</h3>
<p>A 34-year-old farmer from Tsirang had a first generalised convulsion at home last night, witnessed by his wife: he cried out, stiffened, shook for about two minutes, bit the side of his tongue and slept for an hour. He keeps pigs and is otherwise well; no alcohol for a week. Glucose and sodium are normal. CT shows several small calcified lesions and one ring-enhancing cyst. <b>This is a seizure due to neurocysticercosis.</b> He needs an anti-seizure medicine (a structural cause makes recurrence likely), assessment for antiparasitic treatment with steroids, advice not to drive, and family education on first aid and pork hygiene.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against seizure", "Best test"], [
["Vasovagal syncope", "Prodrome of nausea, sweating, dimming vision; quick recovery", "No post-ictal confusion", "History; ECG"],
["<b>Cardiac syncope</b>", "Collapse on exertion or lying down, palpitations, family sudden death", "—", "<b>ECG</b> (long QT, heart block, Brugada), echo"],
["Psychogenic non-epileptic seizure", "See table above", "—", "Video of the event, EEG during an event"],
["Hypoglycaemia", "Diabetes on insulin or sulfonylurea, alcohol", "—", "Glucose"],
["TIA or stroke", "Sudden weakness or numbness, negative symptoms", "Seizures cause positive symptoms (jerking, tingling)", "CT, MRI"],
["Migraine with aura", "Slowly spreading visual or sensory symptoms over minutes, then headache", "—", "History"],
["Alcohol withdrawal, delirium", "Tremor, sweating, hallucinations", "—", "History"],
["Movement disorders, tetany", "Low calcium: carpopedal spasm", "Consciousness preserved", "Calcium"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Bedside glucose</b>", "Hypoglycaemia", "Every seizure, at once", "Essential"],
["Sodium, calcium, magnesium, creatinine, LFT, CBC, GGT", "Provoking causes; baseline before medicines", "STG work-up", "Essential"],
["<b>ECG</b>", "Cardiac syncope mimicking seizure", "Every first seizure", "Essential"],
["Pregnancy test", "Eclampsia; drug choice", "Women of reproductive age", "Essential"],
["CT head (contrast if possible)", "Structural cause: neurocysticercosis, tumour, stroke, haemorrhage, tuberculoma", "Urgent if focal signs, head injury, anticoagulants, persistent confusion, fever, HIV, age over 40", "Most first seizures"],
["MRI brain", "Better for epilepsy causes (hippocampal sclerosis, small tumours, cortical malformations)", "Specialist decision (STG)", "Selected"],
["EEG", "Supports diagnosis and syndrome; predicts recurrence", "Available at KGUMSB (STG); a normal EEG does not exclude epilepsy", "Specialist"],
["Lumbar puncture", "Fever, meningism, immunosuppression", "After CT if indicated", "Selected"],
["Toxicology, alcohol history, drug levels", "Provoked seizures; adherence (phenytoin, carbamazepine levels)", "—", "Selected"]])}
` },

{ id: "staging", title: "Status epilepticus — timed doses", html: `
<p>Status epilepticus is any seizure lasting 5 minutes or more, or recurrent seizures without full recovery in between (STG, ILAE). Enter the weight for a timed plan with doses.${r(3, 4, 5, 6)}</p>
<div class="calc" data-calc="statusepi"></div>
<h3>Refer or admit</h3>
<ul><li><b>Status epilepticus</b> not stopping after a second-line drug: ICU.</li><li>First seizure with focal signs, persistent confusion, fever, head injury or abnormal CT.</li><li>Uncontrolled epilepsy on two adequate drugs: neurologist (drug-resistant epilepsy; surgery assessment).</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. First aid (teach every family)</h3>
<ul><li>Stay calm and time the seizure. Move the person away from fire, water, roads and hard objects; cushion the head.</li>
<li><b>Nothing in the mouth</b> — no spoon, cloth or fingers (STG). Do not hold the person down.</li>
<li>When the jerking stops, turn into the recovery position and stay until fully awake (30–60 minutes).</li>
<li>Get help if it lasts more than 5 minutes, repeats, or the person is injured, pregnant or has trouble breathing.</li></ul>
<h3>B. Status epilepticus (use the calculator above)</h3>
<ol><li>0–5 min: ABC, oxygen, glucose, IV access, bloods; thiamine before glucose if alcohol or malnutrition.</li>
<li>5 min: ${dr("diazepam")} 10 mg IV (or ${dr("midazolam")} 10 mg IM/buccal, or diazepam 10–20 mg rectally); repeat once after 5–10 minutes.</li>
<li>About 20 min: ${dr("levetiracetam")} 60 mg/kg IV (max 4.5 g) over 10–15 minutes, or ${dr("phenytoin")} 20 mg/kg IV in saline at up to 50 mg/minute with ECG monitoring.</li>
<li>40 min: the other second-line drug or ${dr("phenobarbital")} 20 mg/kg; then ICU, intubation and anaesthetic infusion.</li>
<li>Pregnant or postpartum: ${dr("magnesium_sulfate")} 4 g IV, then maintenance.</li>
<li>Find and treat the cause; restart or optimise long-term medicine.</li></ol>
<h3>C. After a first seizure</h3>
<ul><li>Look for a provoking cause and treat it. Usually no long-term medicine after a single unprovoked seizure (recurrence about 40% over 2 years); start if the EEG is epileptic, the scan shows a lesion, there is a neurological deficit, or the patient prefers to after discussion.${r(1, 7)}</li>
<li>Advise: no driving, no swimming alone, no work at heights or near fire until reviewed.</li></ul>
<h3>D. Choosing a long-term medicine</h3>
${tbl(["Epilepsy type", "First choice", "Alternatives", "Avoid"], [
["Focal (with or without bilateral spread)", dr("lamotrigine") + " or " + dr("levetiracetam"), dr("carbamazepine") + ", phenobarbital (low resource)", "—"],
["Generalised tonic-clonic", dr("valproate") + " (men and women who cannot become pregnant); lamotrigine or levetiracetam (women who could)", "Phenobarbital", "Valproate in women who could become pregnant"],
["Juvenile myoclonic epilepsy, myoclonic", "Valproate (men); levetiracetam", "Clobazam add-on (NEML, RRH)", "Carbamazepine, phenytoin, (lamotrigine can worsen myoclonus)"],
["Absence", "Valproate (ethosuximide is not on NEML)", "Lamotrigine", "Carbamazepine, phenytoin"],
["Unknown type, low-resource setting", "Levetiracetam or phenobarbital", "Valproate (men)", "—"]])}
<p>Start one drug at a low dose and increase slowly to the lowest dose that controls seizures. Wait at least 6 weeks at a reasonable dose before switching (STG). Two adequate trials failed = drug-resistant epilepsy: refer.${r(2, 8, 11)}</p>
<h3>E. Neurocysticercosis</h3>
<ul><li>Anti-seizure medicine for all with seizures.</li>
<li>Viable cysts (1–2): ${dr("albendazole")} 15 mg/kg/day (max 1200 mg) for 10–14 days with ${dr("dexamethasone")} or prednisolone (to blunt the reaction as cysts die); more cysts: albendazole plus praziquantel (specialist). Calcified lesions only: no antiparasitic drugs. Check the eyes first (fundoscopy) and do not treat with antiparasitics if there is raised pressure.${r(9)}</li></ul>
<h3>F. Alcohol-related seizures</h3>
<ul><li>Withdrawal seizures: benzodiazepines (diazepam) and thiamine; phenytoin does not help. Long-term anti-seizure medicine is not needed unless seizures occur without withdrawal (see <a href="#/d/cirrhosis-adult">alcohol and liver chapter</a>).</li></ul>
<h3>G. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "First aid, glucose, rectal or IV diazepam; phenobarbital or phenytoin tablets for known epilepsy (STG); refer status epilepticus after the first doses, and all new diagnoses"],
["District hospital", "Full status pathway including IV levetiracetam or phenytoin; CT referral; start long-term medicine with clear follow-up"],
["Referral hospital (JDWNRH, ERRH, CRRH)", "EEG (KGUMSB), MRI, neurology, ICU for refractory status, drug-resistant epilepsy assessment"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("diazepam"), "10 mg IV over 2–5 min, or 10–20 mg rectal; repeat once", "Status, first line"],
[dr("midazolam"), "10 mg IM or buccal (5 mg if 13–40 kg)", "No IV access; NEML vial is 1 mg/mL (volume)"],
[dr("levetiracetam"), "Status 60 mg/kg IV (max 4.5 g); maintenance 500 mg–1.5 g twice daily", "Few interactions; mood changes"],
[dr("phenytoin"), "Status 20 mg/kg IV ≤50 mg/min; maintenance 200–500 mg/day by levels", "ECG during loading; saline only"],
[dr("phenobarbital"), "Status 15–20 mg/kg IV; maintenance 60–180 mg at night", "Sedation; respiratory depression"],
[dr("valproate"), "500 mg–2 g/day (max 2.5 g)", "Not in women who could become pregnant"],
[dr("carbamazepine"), "100–200 mg twice daily → 400–600 mg twice daily", "Focal only; interactions; SJS (HLA-B*15:02)"],
[dr("lamotrigine"), "25 mg daily, slow increase to 100–200 mg/day", "Slow titration (rash); half with valproate"],
[dr("magnesium_sulfate"), "4 g IV, then 1 g/hour or 10 g IM", "Eclampsia"],
[dr("albendazole"), "15 mg/kg/day (max 1.2 g) for 10–14 days with steroid", "Viable neurocysticercosis cysts"]])}
` },

{ id: "populations", title: "Women, pregnancy and older adults", html: `
<h3>Women and girls who could become pregnant</h3>
<ul><li>Discuss pregnancy before choosing a drug. <b>Lamotrigine and levetiracetam</b> carry the lowest risk; <b>valproate the highest</b> (about 10% malformations, up to 40% developmental problems).${r(10)}</li>
<li>Folic acid 5 mg daily from before conception through the first trimester.</li>
<li>Carbamazepine, phenytoin, phenobarbital (and high-dose topiramate) make the combined pill, implant and emergency pill less reliable: copper IUD, levonorgestrel IUS or depot injection are better.</li></ul>
<h3>Pregnancy</h3>
<ul><li>Do not stop medicines suddenly: uncontrolled tonic-clonic seizures are dangerous for mother and baby. Specialist review early.</li>
<li>Lamotrigine and levetiracetam levels fall in pregnancy: review dose each trimester.</li>
<li>Any seizure after 20 weeks or within 6 weeks of delivery: think <b>eclampsia</b> first.</li>
<li>Baby: vitamin K at birth; breastfeeding is encouraged.</li></ul>
<h3>Older adults</h3>
<ul><li>New-onset seizures are often vascular or due to tumours: CT/MRI. Lamotrigine or levetiracetam at low doses; avoid enzyme inducers (interactions with anticoagulants and others) and sedating drugs.</li></ul>
` },

{ id: "scenarios", title: "Seizures with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["On TB treatment", "Rifampicin lowers carbamazepine, phenytoin, lamotrigine and valproate levels; isoniazid raises phenytoin and carbamazepine. Prefer levetiracetam", "Interactions"],
["HIV on ART", "Avoid enzyme inducers with many ARVs (dolutegravir dose must double with carbamazepine/phenytoin); prefer levetiracetam or lamotrigine", "Interactions"],
["Liver disease", "Avoid valproate; levetiracetam is preferred", "Hepatotoxicity"],
["Kidney disease", "Reduce levetiracetam; phenytoin levels misleading with low albumin", "Clearance"],
["Taking warfarin or DOAC", "Avoid carbamazepine, phenytoin, phenobarbital", "Enzyme induction"],
["Depression", "Caution with levetiracetam; lamotrigine may help mood", "Psychiatric effects"],
["Head injury", "Short-term levetiracetam or phenytoin for 1 week only in severe injury (early seizures)", "Neurosurgery advice"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Injury, burns, drowning", "Seizures near fire or water (open hearths, rivers)", "Safety advice; bathe in shallow water or shower"],
["Aspiration pneumonia", "Fever, cough after status", "Antibiotics; airway care"],
["Brain injury from prolonged status", "Coma, cognitive decline", "Prevent with early treatment"],
["<b>SUDEP</b> (sudden unexpected death in epilepsy)", "About 1 in 1000 adults with epilepsy each year; highest with frequent night-time tonic-clonic seizures", "Good control, adherence, discussion with patient"],
["Drug side effects", "Sedation, rash, weight change, bone loss, low sodium", "Review regularly"],
["Depression, anxiety, stigma", "Common", "Screen; counsel; involve family"]])}
<p>About two-thirds of people become seizure-free on the first or second drug. Untreated epilepsy (the treatment gap) is still common in low-income settings.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Seizure diary; review adherence, side effects, mood, contraception and pregnancy plans.</li>
<li>Drug levels only for phenytoin (and carbamazepine if toxicity or poor control).</li>
<li>Stopping: discuss after at least 2 (STG: 3) seizure-free years; taper over at least 3 months, one drug at a time.</li>
<li>Driving: advise no driving until seizure-free for a sustained period (internationally usually 12 months) — national rules in Bhutan not verified.</li>
<li>Neurocysticercosis prevention: wash hands, cook pork thoroughly, safe toilets, treat tapeworm carriers.</li></ul>
${box("green", "What to tell the patient and family", `<ul><li>Epilepsy is a medical condition, not a curse or a contagious illness. People with epilepsy can study, work and marry.</li><li>Take the medicine every day; never stop suddenly or change the dose yourself (STG).</li><li>No alcohol; regular sleep.</li><li>Avoid driving, swimming alone, climbing or working near open fire until your doctor says it is safe.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>A seizure lasts more than 5 minutes or repeats</li><li>A rash, fever with mouth ulcers, yellow eyes, or thoughts of self-harm after starting a medicine</li><li>You become pregnant</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Neurocysticercosis on CT", src: "images/ncc-ct.jpg", mod: "CT brain", ctx: "Patient with seizures from an endemic area", loc: "Brain parenchyma", find: "Multiple small cysts and calcified dots (A, before treatment) and their resolution (after treatment)", signs: "Vesicular cysts and calcifications of neurocysticercosis", interp: "A common, preventable cause of epilepsy: anti-seizure medicine; albendazole with steroid for viable cysts", by: "Innocent Lule Segamwenge", page: "https://commons.wikimedia.org/wiki/File:Neurocysticercosis_brain_CT.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Mesial temporal sclerosis on MRI", src: "images/mts-mri.jpg", mod: "MRI brain, coronal", ctx: "Adult with focal seizures with impaired awareness", loc: "Hippocampus", find: "Small, bright hippocampus on one side", signs: "Hippocampal (mesial temporal) sclerosis", interp: "The commonest cause of drug-resistant focal epilepsy in adults; may be curable with surgery", by: "Mercurytoxic", page: "https://commons.wikimedia.org/wiki/File:Mesial_Temporal_Sclerosis.jpg", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult after a seizure", [
F.s("Witness history, glucose, ECG, sodium/calcium, pregnancy test"), F.a,
F.d("Still seizing or a seizure over 5 minutes?"), F.a,
F.b([["Yes", F.e("Status pathway: benzodiazepine ×2 → levetiracetam or phenytoin → ICU")], ["No", F.d("Provoked (glucose, alcohol, eclampsia, infection, injury)?")]]), F.a,
F.b([["Yes", F.s("Treat the cause; no long-term medicine usually")], ["No", F.s("CT (and EEG/MRI by specialist)")]]), F.a,
F.d("Two unprovoked seizures, or one with lesion/epileptic EEG?"), F.a,
F.b([["Yes", F.ok("Start one anti-seizure medicine; safety advice; review")], ["No", F.s("Safety advice; review after any further event")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Check the glucose in every seizure.</b></li>
<li>Think eclampsia in any woman fitting after 20 weeks of pregnancy.</li>
<li>Two doses of benzodiazepine, then change drug class.</li>
<li>Ask about pork, pigs and tapeworm in a new adult-onset seizure in Bhutan.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting 30 minutes before treating", "Seizure becomes drug-resistant; brain injury", "Treat at 5 minutes"],
["Three or more benzodiazepine doses", "Respiratory arrest", "Two doses, then second line"],
["Phenytoin in dextrose or given fast", "Precipitation; arrhythmia, hypotension", "Saline, ≤50 mg/min, ECG"],
["Valproate for a young woman without counselling", "Birth defects, developmental harm", "Lamotrigine or levetiracetam"],
["Phenytoin for alcohol withdrawal seizures", "Ineffective", "Benzodiazepines, thiamine"],
["Calling syncope or PNES epilepsy", "Years of unnecessary drugs, stigma", "Witness history, ECG, video"],
["Stopping drugs abruptly", "Withdrawal seizures, status", "Taper slowly"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the practical definition of status epilepticus?", "A seizure lasting 5 minutes or more, or repeated seizures without full recovery between them.")}
${qa("Student", "Name three features that separate a seizure from a faint.", "Prolonged post-ictal confusion, lateral tongue bite, and longer rhythmic jerking with eyes open; syncope recovers quickly with a pale, sweaty prodrome.")}
${qa("Intern/MO", "What is the first step in any seizing patient after the airway?", "Check the blood glucose.")}
${qa("Intern/MO", "Give the adult second-line options in status epilepticus with doses.", "Levetiracetam 60 mg/kg IV (max 4.5 g), phenytoin 20 mg/kg IV at up to 50 mg/min, or valproate 40 mg/kg IV (max 3 g).")}
${qa("Intern/MO", "Why avoid valproate in young women?", "About 10% major malformations and up to 40% neurodevelopmental problems in exposed babies.")}
${qa("Specialist", "Which drugs can worsen myoclonic and absence seizures?", "Carbamazepine and phenytoin (and sometimes lamotrigine for myoclonus).")}
${qa("Specialist", "How do you treat viable neurocysticercosis cysts with seizures?", "Anti-seizure medicine plus albendazole 15 mg/kg/day for 10–14 days with steroids, after excluding raised pressure and ocular cysts; calcified lesions need no antiparasitic treatment.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Fisher RS, Acevedo C, Arzimanoglou A et al. ILAE official report: a practical clinical definition of epilepsy. <i>Epilepsia</i> 2014;55:475–482. <a href="https://doi.org/10.1111/epi.12550" target="_blank" rel="noopener">doi:10.1111/epi.12550</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Epilepsies in children, young people and adults (NG217), 2022 (updated 2025). <a href="https://www.nice.org.uk/guidance/ng217" target="_blank" rel="noopener">nice.org.uk/guidance/ng217</a></li>
<li id="ref-3">Trinka E, Cock H, Hesdorffer D et al. A definition and classification of status epilepticus — report of the ILAE Task Force. <i>Epilepsia</i> 2015;56:1515–1523. <a href="https://doi.org/10.1111/epi.13121" target="_blank" rel="noopener">doi:10.1111/epi.13121</a></li>
<li id="ref-4">Glauser T, Shinnar S, Gloss D et al. Evidence-based guideline: treatment of convulsive status epilepticus in children and adults (American Epilepsy Society). <i>Epilepsy Curr</i> 2016;16:48–61. <a href="https://doi.org/10.5698/1535-7597-16.1.48" target="_blank" rel="noopener">doi:10.5698/1535-7597-16.1.48</a></li>
<li id="ref-5">Kapur J, Elm J, Chamberlain JM et al. Randomized trial of three anticonvulsant medications for status epilepticus (ESETT). <i>N Engl J Med</i> 2019;381:2103–2113. <a href="https://doi.org/10.1056/NEJMoa1905795" target="_blank" rel="noopener">doi:10.1056/NEJMoa1905795</a></li>
<li id="ref-6">Silbergleit R, Durkalski V, Lowenstein D et al. Intramuscular versus intravenous therapy for prehospital status epilepticus (RAMPART). <i>N Engl J Med</i> 2012;366:591–600. <a href="https://doi.org/10.1056/NEJMoa1107494" target="_blank" rel="noopener">doi:10.1056/NEJMoa1107494</a></li>
<li id="ref-7">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §7.7 Seizure and epilepsy; National Essential Medicines List 2025; NEMF 2022.</li>
<li id="ref-8">World Health Organization. mhGAP Intervention Guide / Guideline for mental, neurological and substance use disorders (epilepsy module), 2023 update. <a href="https://www.who.int/publications/i/item/9789240084278" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-9">White AC Jr, Coyle CM, Rajshekhar V et al. Diagnosis and treatment of neurocysticercosis: 2017 clinical practice guidelines by IDSA and ASTMH. <i>Clin Infect Dis</i> 2018;66:e49–e75. <a href="https://doi.org/10.1093/cid/cix1084" target="_blank" rel="noopener">doi:10.1093/cid/cix1084</a></li>
<li id="ref-10">Medicines and Healthcare products Regulatory Agency. Valproate: pregnancy prevention programme and safety measures (Drug Safety Updates 2018–2024). <a href="https://www.gov.uk/guidance/valproate-use-by-women-and-girls" target="_blank" rel="noopener">gov.uk</a></li>
<li id="ref-11">Marson A, Burnside G, Appleton R et al. SANAD II (focal and generalised epilepsy arms). <i>Lancet</i> 2021;397:1363–1374 and 1375–1386. <a href="https://doi.org/10.1016/S0140-6736(21)00247-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(21)00247-6</a></li>
<li id="ref-12">Bhutan Clinical Reference app: Seizures and status epilepticus (topic page and protocol, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='flag'>Partly verified</span>", "§7.7 text read; status algorithm (Fig 7.3) is an image not reviewed; phenytoin dose range flagged"],
["Status epilepticus doses", "<span class='pass'>Checked</span>", "ESETT, RAMPART, NICE NG217 and BNF"],
["Long-term drug choice", "<span class='pass'>Checked</span>", "NICE NG217, SANAD II, WHO mhGAP"],
["HLA-B*15:02 frequency in Bhutan", "<span class='flag'>Evidence gap</span>", "Not found; counsel about rash"],
["Bhutan driving rules for epilepsy", "<span class='flag'>Not verified</span>", "International practice given"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a neurologist or physician"],
["Images", "<span class='pass'>Done</span>", "CC BY 4.0 / public domain"]], "qc")}
` }
]
});
