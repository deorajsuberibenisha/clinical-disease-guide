/* Meningitis and encephalitis — children and neonates */
registerPage({
id: "meningitis-child",
title: "Meningitis & Encephalitis — Children & Neonates",
subtitle: "The irritable, feverish baby without a stiff neck: recognising meningitis by age, antibiotics by weight, dexamethasone after 3 months, full fluids, when to delay the LP, and hearing checks for every survivor",
age: "Children & neonates", specs: ["paeds", "neuro", "picu", "nicu", "neo", "id"],
keywords: ["meningitis child", "paediatric meningitis", "pediatric meningitis", "neonatal meningitis", "bacterial meningitis child", "bulging fontanelle", "meningococcal disease child", "Hib meningitis", "pneumococcal meningitis child", "group B streptococcus meningitis", "acute encephalitis syndrome", "Japanese encephalitis child", "TB meningitis child", "Bacterial Meningitis Score", "lumbar puncture child", "febrile convulsion meningitis", "hearing loss after meningitis"],
related: ["meningitis-adult", "sepsis-child", "tb-child", "pneumonia-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In young children meningitis rarely looks like the textbook. A baby may only be feverish, floppy, irritable when handled and feeding poorly. The neck may be soft. Think of it early, give the first antibiotic dose without waiting for the lumbar puncture, and follow every survivor for hearing and development.</p>
<div class="glance">
<div><h4>Suspect</h4><ul><li>Infant: fever or low temperature, irritability, poor feeding, bulging fontanelle, seizures, high-pitched cry</li><li>Older child: headache, vomiting, neck stiffness, drowsiness, rash</li></ul></div>
<div><h4>Antibiotics (over 3 months)</h4><p>${dr("ceftriaxone")} 100 mg/kg once daily (max 4 g). STG first-level: ${dr("ampicillin")} 50 mg/kg 6-hourly + ${dr("gentamicin")} 7.5 mg/kg daily, then refer.</p></div>
<div><h4>Young infants</h4><p>Under 3 months: ${dr("cefotaxime")} + ampicillin (Listeria, GBS). Neonates: ampicillin + gentamicin or cefotaxime.</p></div>
<div><h4>Dexamethasone</h4><p>Over 3 months: 0.15 mg/kg (max 10 mg) 6-hourly for 4 days, with the first antibiotic dose. Not in neonates.</p></div>
<div><h4>Fluids</h4><p>Full maintenance — do not restrict routinely. Correct shock first.</p></div>
<div><h4>Afterwards</h4><p>Hearing test within 4 weeks; development and seizure follow-up (STG).</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§12.1.2) gives ampicillin 50 mg/kg 6-hourly with gentamicin 7.5 mg/kg once daily, diazepam for convulsions, NG feeds to prevent hypoglycaemia, coma care, stabilisation and referral, and asks you to notify the DPHO/CMO when more than one similar case appears. WHO and NICE prefer ceftriaxone after the newborn period and add dexamethasone over 3 months; this guide gives both, keeping the STG regimen for first-level care where ceftriaxone is not stocked. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Infection and inflammation of the meninges (meningitis) and often the brain (meningoencephalitis). The organisms change with age, which is why the empirical antibiotics change too.${r(1, 2)}</p>
${tbl(["Age", "Main bacteria", "Notes"], [
["Neonate (under 1 month)", "Group B streptococcus, <i>E. coli</i> and other gram-negatives, <i>Listeria</i>", "Often part of neonatal sepsis; 1 in 4 septic neonates with positive blood culture has meningitis"],
["1–3 months", "GBS, <i>E. coli</i>, pneumococcus, meningococcus, Hib", "Overlap period: cover Listeria and GBS"],
["Over 3 months", "Pneumococcus, meningococcus, Hib (unvaccinated)", "Hib vaccine is in the routine Bhutan pentavalent vaccine"],
["Any age, subacute", "<i>Mycobacterium tuberculosis</i>", "Weeks of irritability, vomiting, weight loss, cranial nerve palsies; TB contact — see <a href=\"#/d/tb-child\">TB</a>"],
["Encephalitis", "HSV (all ages, neonates especially), enteroviruses, Japanese encephalitis (children in southern districts, monsoon), scrub typhus, measles, mumps", "Acute encephalitis syndrome: fever with altered consciousness or seizures"]])}
<p>Risks: young age, no or incomplete vaccination, crowding, malnutrition, sickle cell disease or no spleen, CSF leak or cochlear implant, ventricular shunt, HIV.</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Why infants are hit hardest", [
F.s("Immature immunity; bacteria enter blood from nose, gut or birth canal"), F.a,
F.s("Cross the blood–brain barrier; multiply in CSF"), F.a,
F.s("Inflammation: brain swelling, vasculitis, damage to the cochlea"), F.a,
F.b([["Open fontanelle", F.s("Bulges instead of a stiff neck; head circumference may grow")], ["Older child", F.s("Neck stiffness, headache, vomiting")]]), F.a,
F.e("Deafness, seizures, hydrocephalus, developmental delay, death")])}
<p>The fontanelle and open sutures let the infant's skull expand, so classic meningeal signs are often missing under about 18 months. Dexamethasone reduces severe hearing loss, mainly in Hib meningitis; its benefit in pneumococcal disease in children is less certain, and it is not used in neonates.${r(5)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Empirical antibiotic (over 1–3 months)", "Ampicillin 50 mg/kg 6-hourly + gentamicin 7.5 mg/kg daily", "Ceftriaxone 100 mg/kg/day (WHO Pocket Book) or 80–100 mg/kg (NICE/BNFc); ampicillin + chloramphenicol where ceftriaxone is unavailable (WHO 2013)", "<b>Ceftriaxone</b> where stocked; STG regimen before referral from BHU/PHC"],
["Under 3 months", "Same as above", "Cefotaxime + amoxicillin/ampicillin (NICE)", "Cefotaxime + ampicillin; ceftriaxone only if not jaundiced or preterm"],
["Dexamethasone", "Not mentioned for children", "Over 3 months, with first dose (NICE NG240, WHO 2013 where intensive care is available; WHO 2025)", "Give over 3 months, not after antibiotic pre-treatment"],
["Fluids", "IV maintenance; NG feeds", "Full maintenance; restriction harms (Cochrane 2016)", "Full maintenance unless SIADH or raised pressure"],
["Duration", "Not stated", "Meningococcus 5–7 days; Hib 10; pneumococcus 10–14; GBS 14; gram-negative neonatal 21; Listeria 21", "As international"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Age", "Features", "Pitfall"], [
["Neonate", "Temperature instability, poor feeding, lethargy, apnoea, jaundice, seizures, bulging fontanelle", "Looks like any neonatal sepsis: LP is part of the work-up"],
["Infant", "Fever, irritability (worse when picked up: paradoxical irritability), high-pitched cry, vomiting, bulging fontanelle, seizures", "Neck stiffness absent in many"],
["Older child", "Headache, fever, vomiting, photophobia, neck stiffness, Kernig's and Brudzinski's signs, drowsiness", "Partial treatment blunts signs"],
["Meningococcal disease", "Rash: may start maculopapular, then petechiae or purpura; cold hands, leg pain, mottling, shock", "Septicaemia can kill before meningitis develops"],
["TB meningitis", "Weeks of irritability, vomiting, poor weight gain, then drowsiness, squint or palsies", "Often mistaken for gastroenteritis"],
["Encephalitis", "Fever with altered behaviour, consciousness or seizures", "A febrile seizure is brief, with full recovery; prolonged or focal seizures, or slow recovery, need investigation"]])}
${box("red", "Danger signs (IMNCI: very severe febrile disease)", `<ul><li>Lethargic or unconscious; convulsions; unable to drink or breastfeed; vomits everything</li><li>Stiff neck or bulging fontanelle</li><li>Purpura, poor perfusion, shock</li><li>Signs of raised pressure: falling GCS, unequal pupils, abnormal posture, slow pulse with high BP</li></ul>`)}
<h3>The typical patient</h3>
<p>An 8-month-old boy from Samtse has had fever for a day, vomited three times, and cries when his mother picks him up. He is drowsy but rousable, the fontanelle is full and tense, and his neck is not stiff. Weight 8 kg. <b>This is probable bacterial meningitis.</b> After a blood culture he gets ceftriaxone 800 mg IV and dexamethasone 1.2 mg IV straight away. He has no signs of raised pressure and is not shocked, so an LP follows. Fluids are given at full maintenance, glucose is checked, and he is referred to a paediatrician.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against meningitis", "Best test"], [
["Simple febrile seizure", "6 months–5 years, brief generalised seizure, full recovery within an hour", "Persistent drowsiness, meningism, focal or prolonged seizure", "Observation; LP if any doubt, especially under 12 months or on antibiotics"],
["Cerebral malaria", "Travel, anaemia, splenomegaly, hypoglycaemia", "—", "RDT, smear"],
["Severe dehydration or electrolyte disturbance", "Diarrhoea, low or high sodium", "—", "Electrolytes, glucose"],
["Hypoglycaemia", "Fasting, malnutrition", "—", "Bedside glucose"],
["Scrub typhus, dengue", "Eschar, rash, low platelets", "—", "Serology, NS1"],
["Head injury, non-accidental injury", "History, bruises, retinal haemorrhages", "—", "CT, skeletal survey"],
["Intussusception", "Episodic crying, drowsiness, red-currant stool", "—", "Ultrasound"],
["Brain abscess, tumour", "Focal signs, slow course", "—", "CT/MRI"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Blood culture</b>, glucose, CBC, CRP, electrolytes, creatinine, clotting", "Organism, severity, SIADH, safe LP", "Before antibiotics, never delaying them", "Essential"],
["Malaria RDT, dengue and scrub tests where relevant", "Mimics", "—", "Essential in endemic areas"],
["<b>Lumbar puncture</b>", "Cells, protein, glucose, Gram stain, culture, GeneXpert, PCR where available", "Delay if: signs of raised pressure, shock, extensive purpura, within 30 minutes of a seizure or still convulsing, platelets under 100 or coagulopathy, skin infection over the site", "Essential when safe"],
["CT head", "Focal signs, raised pressure, before LP when indicated", "Do not delay antibiotics", "Selected"],
["Ultrasound through the fontanelle", "Ventriculitis, hydrocephalus, abscess in infants", "Bedside in NICU", "Selected"],
["Chest X-ray, Mantoux, gastric aspirate GeneXpert", "TB meningitis", "—", "Subacute illness"],
["Urine culture", "Infant fever work-up", "—", "Infants"]])}
<h3>Normal CSF by age (approximate)</h3>
${tbl(["Age", "White cells (/µL)", "Protein (g/L)", "CSF:blood glucose"], [
["Term neonate", "Up to 20", "Up to 1.0", "Over 0.6"],
["1–3 months", "Up to 10", "Up to 0.6–0.8", "Over 0.6"],
["Over 3 months", "Under 5", "Under 0.4", "Over 0.6"]])}
<p>Bacterial meningitis: neutrophils raised, protein raised, glucose ratio under 0.4. TB: lymphocytes, very high protein, low glucose. Viral: lymphocytes, normal glucose. Bloody taps and prior antibiotics make interpretation harder.</p>
` },

{ id: "staging", title: "Risk scores and first orders", html: `
<h3>A. Bacterial Meningitis Score</h3>
<p>For children with CSF pleocytosis who are not critically ill, a score of 0 identifies very low risk of bacterial meningitis. It was built in high-income emergency departments: use it to support, not replace, judgement.${r(4)}</p>
<div class="calc" data-calc="bms"></div>
<h3>B. Weight-based first orders</h3>
<div class="calc" data-calc="meningchild"></div>
<h3>Refer</h3>
<ul><li>Every child with suspected meningitis or encephalitis, after the first doses, to a hospital with a paediatrician; PICU for GCS 8 or less, repeated seizures, shock or raised pressure.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Immediate care</h3>
<ol><li>ABC; oxygen; IV or IO access. If no access: IM antibiotics (STG) and NG feeds.</li>
<li>Check glucose; treat below 3 mmol/L with 10% dextrose 2–5 mL/kg.</li>
<li>Shock: 10 mL/kg fluid boluses, reassess, follow <a href="#/d/sepsis-child">sepsis</a>.</li>
<li>Blood culture; then antibiotics <b>within 1 hour</b>:${r(1, 2, 6)}
<ul><li>Over 3 months: ${dr("ceftriaxone")} 100 mg/kg once daily (max 4 g), or 50 mg/kg 12-hourly.</li>
<li>1–3 months: ${dr("cefotaxime")} 50 mg/kg 6-hourly + ${dr("ampicillin")} 50 mg/kg 6-hourly.</li>
<li>Neonates: ampicillin 100 mg/kg per dose (meningitis dose) + ${dr("gentamicin")} 5 mg/kg daily, or cefotaxime + ampicillin.</li>
<li>STG first-level: ampicillin 50 mg/kg 6-hourly + gentamicin 7.5 mg/kg once daily (good urine output), then refer.</li></ul></li>
<li>${dr("dexamethasone")} 0.15 mg/kg (max 10 mg) 6-hourly for 4 days, over 3 months, with or before the first antibiotic (not after 12 hours; not in neonates, cerebral malaria or after antibiotic pre-treatment).${r(2, 5)}</li>
<li>Encephalitis features: add ${dr("aciclovir")} (neonates 20 mg/kg 8-hourly; 3 months–11 years 500 mg/m² 8-hourly). Possible scrub typhus: ${dr("doxycycline")} (2.2 mg/kg twice daily, max 100 mg).</li></ol>
<h3>B. Supportive care</h3>
<ul><li><b>Fluids:</b> full maintenance after shock is corrected; restrict to two-thirds only with low sodium (SIADH) or signs of raised pressure. Fluid restriction does not improve outcome.${r(7)}</li>
<li><b>Seizures:</b> ${dr("diazepam")} 0.3 mg/kg IV or 0.5 mg/kg rectally (STG), or buccal midazolam 0.3 mg/kg; then phenytoin 20 mg/kg or levetiracetam 40 mg/kg IV.</li>
<li><b>Raised pressure:</b> head up 30°, avoid hypotonic fluids, ${dr("mannitol")} 0.5 g/kg IV, PICU.</li>
<li><b>Unconscious child (STG):</b> NG tube, urinary catheter, eye care, turn 2-hourly, feeds to prevent hypoglycaemia.</li>
<li>Paracetamol for fever; nutrition.</li></ul>
<h3>C. Duration by organism</h3>
${tbl(["Organism", "Duration"], [
["Meningococcus", "5–7 days"],
["H. influenzae type b", "10 days"],
["Pneumococcus", "10–14 days"],
["Group B streptococcus (neonate)", "14 days (longer if complicated)"],
["Gram-negative bacilli (neonate)", "21 days"],
["Listeria", "21 days"],
["No organism, bacterial picture, over 3 months", "10 days"],
["TB meningitis", "12 months per BT-PED, with prednisolone"]])}
<h3>D. Public health</h3>
<ul><li>Notify the DPHO/CMO for meningococcal disease, clusters (STG), and acute encephalitis syndrome.</li>
<li>Contact prophylaxis (single dose): ${dr("ciprofloxacin")} 1 month–4 years 125 mg; 5–11 years 250 mg; 12 years and over 500 mg; or ${dr("rifampicin")} 10 mg/kg (5 mg/kg under 1 month) 12-hourly for 2 days.</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "IM ampicillin + gentamicin (STG) or ceftriaxone if available; diazepam for seizures; keep warm and fed; refer with escort"],
["District hospital", "Ceftriaxone, dexamethasone, LP when safe, full maintenance fluids; refer if GCS falling, focal signs, repeated seizures"],
["Referral hospital / NICU / PICU", "CT, CSF GeneXpert, neonatal meningitis care, PICU, audiology"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("ceftriaxone"), "100 mg/kg once daily (max 4 g), or 50 mg/kg 12-hourly", "Over 1 month (avoid in jaundiced or preterm neonates)"],
[dr("cefotaxime"), "50 mg/kg 6-hourly (neonates 8–12-hourly by age)", "Under 3 months"],
[dr("ampicillin"), "50 mg/kg 6-hourly (STG); neonatal meningitis 100 mg/kg per dose", "Listeria and GBS cover"],
[dr("gentamicin"), "7.5 mg/kg once daily (5 mg/kg neonates)", "STG regimen; good urine output"],
[dr("dexamethasone"), "0.15 mg/kg (max 10 mg) 6-hourly × 4 days", "Over 3 months only"],
[dr("aciclovir"), "Neonate 20 mg/kg 8-hourly; 3 months–11 years 500 mg/m² 8-hourly", "HSV encephalitis, 14–21 days"],
[dr("doxycycline"), "2.2 mg/kg twice daily (max 100 mg)", "Scrub typhus (short courses safe at any age)"],
[dr("diazepam"), "0.3 mg/kg IV or 0.5 mg/kg rectal (max 10 mg)", "Seizures (STG)"],
[dr("mannitol"), "0.5 g/kg IV over 20 minutes", "Raised pressure"],
[dr("ciprofloxacin"), "125 / 250 / 500 mg once by age", "Contact prophylaxis"],
[dr("rifampicin"), "10 mg/kg 12-hourly × 2 days (5 mg/kg under 1 month)", "Contact prophylaxis alternative"]])}
` },

{ id: "populations", title: "Neonates, adolescents and special groups", html: `
<ul><li><b>Neonates:</b> meningitis is part of the sepsis work-up; LP in every neonate with positive blood culture or seizures if stable. Avoid ceftriaxone with jaundice or calcium infusions. No dexamethasone.</li>
<li><b>Adolescents:</b> manage like adults (see <a href="#/d/meningitis-adult">adult chapter</a>), with adult doses from about 12 years or 50 kg.</li>
<li><b>Severe malnutrition:</b> signs are blunted; low threshold for LP; careful fluids.</li>
<li><b>Ventricular shunt:</b> staphylococci and gram-negatives: vancomycin + cefotaxime or meropenem, neurosurgery.</li>
<li><b>Sickle cell disease or no spleen:</b> pneumococcal risk; vaccination and prophylaxis.</li></ul>
` },

{ id: "scenarios", title: "Meningitis with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Febrile seizure in a child on antibiotics", "Lower threshold for LP", "Partially treated meningitis hides its signs"],
["Purpura and shock", "Shock management first; LP deferred", "Meningococcal septicaemia"],
["TB contact, weeks of illness", "GeneXpert, start TB treatment + prednisolone on suspicion", "TBM outcomes depend on stage at treatment"],
["Cerebral malaria possible", "Antimalarial too; no dexamethasone", "Steroids harm in cerebral malaria"],
["Measles or mumps outbreak", "Consider viral encephalitis", "—"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Hearing loss", "Common after pneumococcal and Hib meningitis", "<b>Formal hearing test within 4 weeks</b>; urgent cochlear implant referral if profound (ossification)"],
["Seizures and epilepsy", "During and after the illness", "Anticonvulsants; neurology follow-up"],
["Subdural effusion or empyema", "Persistent fever, enlarging head, focal signs", "Ultrasound/CT; drainage if empyema"],
["Hydrocephalus", "Bulging fontanelle, rising head circumference", "Neurosurgery"],
["SIADH", "Low sodium", "Fluid adjustment"],
["Developmental delay, cerebral palsy, vision loss", "Follow-up", "Early intervention and rehabilitation"]])}
<p>Mortality ranges from about 5% (meningococcal meningitis) to over 15% (pneumococcal, neonatal gram-negative), and up to a third of survivors have lasting problems. Early treatment improves both.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Hearing test for every child after bacterial meningitis (NICE: within 4 weeks).</li>
<li>Review at 4–6 weeks and again for development, school performance, behaviour and seizures (STG: follow up for deafness).</li>
<li>Vaccination: pentavalent (Hib), and pneumococcal and measles vaccines per the national schedule.</li></ul>
${box("green", "What to tell the family", `<ul><li>"Your child has a serious infection around the brain. We have started the strongest treatment, and the first days matter most."</li><li>Family members who live with the child may need one preventive dose.</li><li>Come for every follow-up visit, including the hearing test, even if your child seems fine.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fits, unusual sleepiness, a growing head, weakness, or the child stops responding to sounds</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Meningococcal rash", src: "images/meningococcal-rash.jpg", mod: "Clinical photograph", ctx: "Typical meningococcaemia (adult patient; the rash is the same in children)", loc: "Back of the hand", find: "Stellate haemorrhagic spots that do not blanch", signs: "Purpura", interp: "Fever with a non-blanching rash: ceftriaxone now", by: "A. I. Hlei, A. V. Shkurba", page: "https://commons.wikimedia.org/wiki/File:%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B2%D0%B8%D1%81%D0%B8%D0%BF_%D0%BD%D0%B0_%D0%BA%D0%B8%D1%81%D1%82%D1%96_%D0%BF%D1%80%D0%B8_%D0%BC%D0%B5%D0%BD%D1%96%D0%BD%D0%B3%D0%BE%D0%BA%D0%BE%D0%BA%D1%86%D0%B5%D0%BC%D1%96%D1%97.jpg", lic: "Public domain" })}
${fig({ title: "Infant with basal meningitis (historical photograph)", src: "images/infant-opisthotonus.jpg", mod: "Clinical photograph, St Bartholomew's Hospital archive", ctx: "Five-month-old infant with posterior basal meningitis", loc: "Whole body posture", find: "Head and back arched backwards, limbs stiff", signs: "Opisthotonus — late, severe meningeal irritation", interp: "A late sign from the pre-antibiotic era; today we aim to treat long before this", by: "Wellcome Collection", page: "https://commons.wikimedia.org/wiki/File:Child_suffering_from_post_basal_meningitis_Wellcome_L0061793.jpg", lic: "CC BY 4.0" })}
</div>
<div class="pair">
${fig({ title: "Gram stain of CSF: Neisseria meningitidis", src: "images/nmen-csf-gram.jpg", mod: "Gram stain (×1000)", ctx: "CSF in meningococcal meningitis", loc: "CSF smear", find: "Gram-negative diplococci among neutrophils", signs: "Gram-negative diplococci", interp: "Meningococcal meningitis: 5–7 days ceftriaxone; notify; contact prophylaxis", by: "Microman12345", page: "https://commons.wikimedia.org/wiki/File:Neisseria_meningitidis_CSF_Gram_1000.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Hydrocephalus in tuberculous meningitis", src: "images/tbm-hydrocephalus-ct.jpg", mod: "CT brain, axial", ctx: "Tuberculous meningitis", loc: "Ventricles", find: "Dilated ventricles", signs: "Hydrocephalus", interp: "Common in childhood TBM: neurosurgical review", by: "Komolafe M, Sunmonu T, Esan O et al.", page: "https://commons.wikimedia.org/wiki/File:Tuberculous-meningitis-scan.jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Febrile child — could this be meningitis?", [
F.s("Fever + irritability, drowsiness, bulging fontanelle, neck stiffness, seizure or rash"), F.a,
F.s("ABC, glucose, blood culture"), F.a,
F.s("Antibiotics by age (± dexamethasone over 3 months) within 1 hour"), F.a,
F.d("Contraindication to LP? (raised pressure, shock, purpura, recent seizure, bleeding risk)"), F.a,
F.b([["Yes", F.s("Treat fully; LP later when safe")], ["No", F.s("LP: cells, protein, glucose, Gram, culture, GeneXpert")]]), F.a,
F.e("Complete course by organism; hearing test within 4 weeks")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>No stiff neck does not mean no meningitis</b> in a baby.</li>
<li>A child irritable when held and calmer when left alone has meningism until proven otherwise.</li>
<li>Give the first dose before the LP if there will be any delay.</li>
<li>Every survivor needs a hearing test.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for LP before antibiotics", "Delay increases death and deafness", "Treat first"],
["LP in a child with raised pressure or shock", "Herniation, collapse", "Check contraindications"],
["Routine fluid restriction", "Lower brain perfusion", "Full maintenance"],
["Dexamethasone in neonates or cerebral malaria", "No benefit; harm", "Over 3 months, bacterial meningitis only"],
["Ceftriaxone in a jaundiced newborn or with calcium infusions", "Kernicterus; fatal precipitates", "Cefotaxime"],
["No hearing test", "Missed deafness, speech delay", "Audiology within 4 weeks"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why is neck stiffness often absent in infants?", "The open fontanelle and sutures let pressure dissipate, and infants show irritability, poor feeding and a bulging fontanelle instead.")}
${qa("Student", "Which organisms cause neonatal meningitis?", "Group B streptococcus, E. coli and other gram-negatives, and Listeria.")}
${qa("Intern/MO", "What is the STG first-level antibiotic regimen for childhood meningitis?", "Ampicillin 50 mg/kg 6-hourly plus gentamicin 7.5 mg/kg once daily, then refer.")}
${qa("Intern/MO", "Who gets dexamethasone, and at what dose?", "Children over 3 months with bacterial meningitis: 0.15 mg/kg (max 10 mg) 6-hourly for 4 days, with or before the first antibiotic dose.")}
${qa("Intern/MO", "List contraindications to an immediate LP in a child.", "Signs of raised pressure, shock, extensive purpura, within 30 minutes of a seizure or still convulsing, coagulopathy or low platelets, skin infection at the site.")}
${qa("Specialist", "What are the components of the Bacterial Meningitis Score?", "Positive CSF Gram stain (2), CSF neutrophils 1000/µL or more, CSF protein 80 mg/dL or more, blood neutrophils 10,000/µL or more, seizure at or before presentation (1 each).")}
${qa("Specialist", "Why add ampicillin to cefotaxime under 3 months?", "Cephalosporins do not cover Listeria (and ampicillin improves GBS and enterococcal cover).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">World Health Organization. Pocket Book of Hospital Care for Children, 2nd ed. Geneva: WHO; 2013 (meningitis §6.3; neonatal §3.9). <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Meningitis (bacterial) and meningococcal disease: recognition, diagnosis and management (NG240), 2024, including evidence review G4 (corticosteroids). <a href="https://www.nice.org.uk/guidance/ng240" target="_blank" rel="noopener">nice.org.uk/guidance/ng240</a></li>
<li id="ref-3">World Health Organization. WHO guidelines on meningitis diagnosis, treatment and care. Geneva: WHO; 2025. <a href="https://www.who.int/publications/i/item/9789240108042" target="_blank" rel="noopener">who.int/publications/i/item/9789240108042</a></li>
<li id="ref-4">Nigrovic LE, Kuppermann N, Macias CG et al. Clinical prediction rule for identifying children with cerebrospinal fluid pleocytosis at very low risk of bacterial meningitis. <i>JAMA</i> 2007;297:52–60. <a href="https://doi.org/10.1001/jama.297.1.52" target="_blank" rel="noopener">doi:10.1001/jama.297.1.52</a></li>
<li id="ref-5">Brouwer MC, McIntyre P, Prasad K, van de Beek D. Corticosteroids for acute bacterial meningitis. <i>Cochrane Database Syst Rev</i> 2015;(9):CD004405. <a href="https://doi.org/10.1002/14651858.CD004405.pub5" target="_blank" rel="noopener">doi:10.1002/14651858.CD004405.pub5</a></li>
<li id="ref-6">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.1.2 Meningitis (children); IMNCI 2024; NEMF 2022; NEML 2025; Bhutan paediatric TB guideline 2024.</li>
<li id="ref-7">Maconochie IK, Bhaumik S. Fluid therapy for acute bacterial meningitis. <i>Cochrane Database Syst Rev</i> 2016;(11):CD004786. <a href="https://doi.org/10.1002/14651858.CD004786.pub5" target="_blank" rel="noopener">doi:10.1002/14651858.CD004786.pub5</a></li>
<li id="ref-8">Bhutan Clinical Reference app: Bacterial meningitis (topic page and child protocol, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='pass'>Verified</span>", "STG 2024 §12.1.2 (one bullet missing in PDF text)"],
["Doses (two sources)", "<span class='pass'>Checked</span>", "WHO Pocket Book 2013 and BNFc/NICE; neonatal intervals simplified — follow the neonatal formulary"],
["Bacterial Meningitis Score", "<span class='pass'>Checked</span>", "Nigrovic 2007; tested in calculator"],
["WHO 2025 meningitis guideline", "<span class='flag'>Summary only</span>", "Full text not reviewed"],
["Bhutan pneumococcal and JE vaccine status", "<span class='flag'>Not verified</span>", "Not stated as fact in this chapter"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a paediatrician or paediatric neurologist"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY 4.0 / CC BY-SA 4.0 / CC BY 2.0"]], "qc")}
` }
]
});
