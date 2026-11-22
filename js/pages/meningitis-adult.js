/* Meningitis and encephalitis — adults */
registerPage({
id: "meningitis-adult",
title: "Meningitis & Encephalitis — Adults",
subtitle: "Fever with headache, stiff neck or confusion: antibiotics and dexamethasone within the hour, when CT must come before the lumbar puncture, reading the CSF, and the Bhutan causes not to miss — TB, scrub typhus, Japanese encephalitis and herpes",
age: "Adults", specs: ["neuro", "id", "medicine", "emerg", "ph"],
keywords: ["meningitis", "bacterial meningitis", "meningococcal", "pneumococcal meningitis", "encephalitis", "HSV encephalitis", "herpes encephalitis", "Japanese encephalitis", "acute encephalitis syndrome", "AES", "tuberculous meningitis", "TB meningitis", "cryptococcal meningitis", "scrub typhus meningitis", "lumbar puncture", "CSF", "Kernig sign", "Brudzinski", "neck stiffness", "dexamethasone meningitis", "Listeria", "chemoprophylaxis"],
related: ["meningitis-child", "sepsis-adult", "tb-adult", "stroke-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Bacterial meningitis kills within hours and leaves many survivors deaf or disabled. Every hour of delay in antibiotics raises the risk of death. So the rule is simple: suspect it, take blood cultures, and give dexamethasone and antibiotics within the first hour — the lumbar puncture and scan can follow.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever, headache, neck stiffness, altered consciousness (all three in under half); vomiting, photophobia, seizures, petechial rash.</p></div>
<div><h4>First hour</h4><p>Blood cultures → ${dr("dexamethasone")} 10 mg IV → ${dr("ceftriaxone")} 2 g IV 12-hourly. Add ${dr("ampicillin")} 2 g 4-hourly if over 50 or immunosuppressed.</p></div>
<div><h4>Encephalitis?</h4><p>Confusion, behaviour change, focal signs or seizures: add ${dr("aciclovir")} 10 mg/kg 8-hourly; think of scrub typhus (${dr("doxycycline")}), JE, malaria, TB.</p></div>
<div><h4>CT before LP only if</h4><p>Immunocompromised, known CNS disease, new seizure, papilloedema, low or falling GCS, focal deficit.</p></div>
<div><h4>CSF</h4><p>Bacterial: turbid, neutrophils, high protein, low glucose. TB: lymphocytes, very high protein, low glucose. Viral: lymphocytes, normal glucose.</p></div>
<div><h4>Public health</h4><p>Notify DPHO/CMO; ${dr("ciprofloxacin")} 500 mg once for close contacts of meningococcal disease.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§7.4) treats bacterial meningitis as a medical emergency with antibiotics and steroids as early as possible, CT and lumbar puncture with GeneXpert, and serology for dengue, scrub typhus and malaria. It lists ceftriaxone 2 g 12-hourly with gentamicin, or ampicillin or benzylpenicillin. Parts of the dose text are missing in the PDF; this guide uses the Bhutan Clinical Reference transcription and international guidance, and drops gentamicin (it barely enters the CSF). ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p><b>Meningitis</b> is inflammation of the membranes around the brain and spinal cord; <b>encephalitis</b> is inflammation of the brain itself, with altered behaviour, consciousness or focal signs. They overlap (meningoencephalitis), and in the first hour they are treated together.${r(1, 2)}</p>
${tbl(["Cause", "Who / clues", "Notes"], [
["<b>Streptococcus pneumoniae</b>", "Commonest in adults; after otitis, sinusitis, pneumonia, skull fracture with CSF leak, alcohol, no spleen", "Highest mortality (about 20%) and deafness"],
["<b>Neisseria meningitidis</b>", "Young adults, crowded living (hostels, monasteries, army); petechial or purpuric rash", "Can kill in hours from septicaemia; outbreaks: notify"],
["Listeria monocytogenes", "Over 50, pregnancy, diabetes, alcohol, immunosuppression", "Resistant to cephalosporins: needs ampicillin"],
["Haemophilus influenzae type b", "Now rare in adults; Hib vaccine is in the routine Bhutan schedule", "—"],
["<b>Mycobacterium tuberculosis</b>", "Subacute: headache and fever for 1–3 weeks, cranial nerve palsies, confusion; HIV", "Common and deadly in Bhutan; see <a href=\"#/d/tb-adult\">TB</a>"],
["Viruses", "Enteroviruses (summer), HSV (encephalitis), varicella, mumps, HIV seroconversion, <b>Japanese encephalitis</b> (southern districts, monsoon)", "Viral meningitis is usually benign; HSV encephalitis is not"],
["<b>Scrub typhus</b> (<i>Orientia</i>)", "Fever, eschar, lymph nodes, monsoon to autumn, rural work", "An important treatable cause of meningoencephalitis in Bhutan and neighbouring India: doxycycline"],
["Cryptococcus", "Advanced HIV; slow headache, raised pressure", "Cryptococcal antigen; no dexamethasone"],
["Others", "Cerebral malaria (travel), neurocysticercosis, brain abscess, autoimmune encephalitis", "—"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From the nose to the brain", [
F.s("Bacteria colonise the nasopharynx (or spread from ear, sinus, blood)"), F.a,
F.s("Invasion into the bloodstream and across the blood–brain barrier"), F.a,
F.s("Bacteria multiply freely in CSF (few defences); cell-wall breakdown triggers intense inflammation"), F.a,
F.b([["Brain swelling, raised pressure", F.e("Coma, herniation")], ["Vasculitis, thrombosis", F.e("Strokes, seizures")]]), F.a,
F.e("Damage to cochlea and nerves → deafness, cranial palsies")])}
<p>Much of the damage comes from the body's own inflammatory response, which antibiotics briefly worsen as bacteria die. That is the reason for giving <b>dexamethasone before or with the first antibiotic dose</b>: it dampens this surge and reduces deafness and death in pneumococcal meningitis.${r(3, 4)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Empirical antibiotic", "Ceftriaxone 2 g 12-hourly + gentamicin 7.5 mg/kg/day; or ampicillin or benzylpenicillin", "Ceftriaxone or cefotaxime (WHO 2025, ESCMID 2016, UK 2016, IDSA 2004); no aminoglycoside; penicillin alone only for proven sensitive organisms", "<b>Ceftriaxone 2 g 12-hourly</b>; penicillin/ampicillin when ceftriaxone is unavailable; no gentamicin (poor CSF penetration)"],
["Listeria cover", "Not stated", "Add amoxicillin/ampicillin: over 50 (ESCMID), over 60 (UK), immunosuppressed, pregnant", "Over 50 or any risk factor — the safer threshold"],
["Dexamethasone", "With antibiotics, as early as possible (dose missing in PDF; 10 mg per BCR)", "10 mg 6-hourly for 4 days with first dose (ESCMID, UK, IDSA, WHO 2025 in non-epidemic settings); Cochrane: benefit in high-income settings, not shown in low-income settings with high HIV", "Give it: Bhutan has low HIV prevalence and good follow-up of pneumococcal disease"],
["CT before LP", "CT brain listed for all", "IDSA: wide criteria (Hasbun); UK: narrower (GCS under 12, focal signs, seizures, papilloedema, immunocompromise)", "Use the criteria in the calculator; never delay antibiotics for CT"],
["India", "—", "ICMR 2019: ceftriaxone ± vancomycin; ampicillin for Listeria risk; dexamethasone", "Consistent; vancomycin only for proven resistant pneumococcus"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Meaning", "Comment"], [
["Headache, fever, neck stiffness", "Meningeal irritation", "The classic triad is present in under half; almost all have at least two of headache, fever, stiff neck, altered consciousness"],
["Confusion, drowsiness, coma", "Brain involvement or raised pressure", "Check GCS hourly"],
["Kernig's and Brudzinski's signs", "Meningeal irritation", "Specific but insensitive: a negative test does not exclude meningitis"],
["Petechial or purpuric rash (does not blanch under a glass)", "Meningococcal septicaemia", "Treat immediately, even before blood tests"],
["Seizures, focal weakness, cranial nerve palsy", "Cortical involvement, vasculitis, TB (basal)", "CT first"],
["Behaviour change, hallucinations, speech problems, memory loss", "Encephalitis (temporal lobe: HSV)", "Aciclovir"],
["Eschar (black, painless scab), lymph nodes", "Scrub typhus", "Look in the groin, armpits, under the breasts and waistband"],
["Weeks of headache, weight loss, cranial nerve palsies", "TB meningitis", "Subacute course"]])}
${box("red", "Danger signs", `<ul><li>GCS falling or under 12; unequal or poorly reacting pupils</li><li>Rising BP with slow pulse (Cushing response: impending herniation)</li><li>Spreading purpura, shock</li><li>Repeated seizures</li></ul>`)}
<h3>The typical patient</h3>
<p>A 22-year-old monk from a monastery in Punakha has had fever and a severe headache since yesterday, vomited three times, and is now drowsy and irritable. Temperature 39.6 °C, pulse 118, BP 104/66, GCS 13, marked neck stiffness, a few non-blanching spots on the legs. <b>This is meningococcal meningitis until proven otherwise.</b> Blood cultures, dexamethasone 10 mg IV and ceftriaxone 2 g IV within minutes; fluids for borderline BP; CT first because the GCS is reduced; notify the DPHO; ciprofloxacin for the monks who share his room.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Subarachnoid haemorrhage", "Thunderclap headache, no fever at onset", "—", "CT; LP for xanthochromia"],
["Cerebral malaria", "Travel to endemic area, anaemia, low glucose", "—", "Malaria RDT/smear"],
["Scrub typhus, dengue, leptospirosis", "Eschar, rash, thrombocytopenia, monsoon", "—", "Serology, IgM ELISA, NS1"],
["Brain abscess", "Focal signs, ear or dental source, slower course", "—", "Contrast CT"],
["Septic encephalopathy", "Pneumonia or UTI with confusion", "No meningism", "Source; LP if doubt"],
["Migraine, sinusitis", "Recurrent pattern, facial pain", "Fever absent", "Clinical"],
["Neuroleptic malignant syndrome, heat stroke, drug toxicity", "Drug history, rigidity, heat exposure", "—", "History, CK"],
["Autoimmune encephalitis", "Psychiatric change, movement disorder, young woman", "Normal CSF glucose", "Specialist antibody tests"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Blood cultures</b>", "Positive in about half of bacterial meningitis", "Before antibiotics, but never delay them", "Essential"],
["Glucose (paired with CSF), CBC, CRP, creatinine, electrolytes, clotting, lactate", "Severity, SIADH, safe LP", "Low sodium is common", "Essential"],
["Malaria RDT, dengue NS1/IgM, scrub typhus IgM, HIV test", "STG work-up; treatable mimics", "—", "Essential in Bhutan"],
["<b>Lumbar puncture</b>", "Diagnosis and organism", "Opening pressure, cells, protein, glucose, Gram stain, culture, GeneXpert (TB), cryptococcal antigen (HIV), HSV PCR where available", "Essential unless contraindicated"],
["CT head", "Before LP when indicated; abscess, hydrocephalus, infarcts", "Does not exclude raised pressure", "Selected"],
["MRI", "Encephalitis (temporal lobe changes in HSV; thalamic in JE)", "Referral centre", "Selected"],
["JE IgM (CSF and serum)", "Japanese encephalitis", "Sentinel sites (RCDC)", "Acute encephalitis syndrome"],
["Throat swab, skin lesion scraping", "Meningococcus", "—", "If rash"]])}
<h3>Reading the CSF</h3>
${tbl(["", "Normal", "Bacterial", "Viral", "TB", "Fungal (Cryptococcus)"], [
["Appearance", "Clear", "Turbid", "Clear", "Clear or cloudy; may form a web clot", "Clear"],
["Opening pressure (cmH₂O)", "10–20", "Raised", "Normal or slightly raised", "Raised", "Very high (often over 25)"],
["White cells (/µL)", "Under 5", "Hundreds to thousands, mostly neutrophils", "10–500, lymphocytes (neutrophils early)", "50–500, lymphocytes", "0–100s, lymphocytes"],
["Protein (g/L)", "Under 0.45", "Over 1", "Normal to 1", "1–5 (often very high)", "Raised"],
["CSF:blood glucose", "Over 0.6", "Under 0.4", "Normal", "Under 0.5", "Low"],
["Other", "—", "Gram stain positive in about 60–80% before antibiotics", "PCR", "GeneXpert MTB/RIF Ultra", "India ink, cryptococcal antigen"]])}
<p>Antibiotics given before the LP sterilise the culture within hours but leave the cell count, protein and glucose changes for a day or two.</p>
` },

{ id: "staging", title: "First-hour decisions", html: `
<p>Work through this as soon as meningitis is suspected. It sets the antibiotic regimen, Listeria and HSV cover, and whether CT must come before the LP.${r(1, 2, 7)}</p>
<div class="calc" data-calc="meningadult"></div>
<h3>Refer or transfer</h3>
<ul><li>All suspected bacterial meningitis and encephalitis to a hospital with CT, CSF analysis and HDU (regional or national referral hospital) — <b>after the first doses</b>.</li>
<li>ICU: GCS 8 or less, uncontrolled seizures, shock, respiratory failure.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. The first hour (all suspected bacterial meningitis)</h3>
<p>Based on the STG with WHO 2025, NICE NG240, ESCMID, UK and IDSA guidance.${r(9, 5, 11, 1, 2, 6)}</p>
<ol><li>ABC, oxygen, IV access; glucose; blood cultures.</li>
<li>${dr("dexamethasone")} <b>10 mg IV</b> with or just before the first antibiotic, then 6-hourly for 4 days.${r(3, 4)}</li>
<li>${dr("ceftriaxone")} <b>2 g IV every 12 hours</b>. Add ${dr("ampicillin")} 2 g IV every 4 hours if over 50, pregnant, diabetic, alcohol-dependent or immunosuppressed (Listeria). Where ceftriaxone is unavailable: ampicillin 2 g 4-hourly or ${dr("benzylpenicillin")} 4 million units 4-hourly (STG), and transfer.</li>
<li>Possible encephalitis: ${dr("aciclovir")} 10 mg/kg IV 8-hourly.${r(8)} Possible scrub typhus: ${dr("doxycycline")} 100 mg twice daily.</li>
<li>CT if indicated, then LP if safe.</li>
<li>Fluids to keep normal blood pressure and perfusion; then normal maintenance. Restrict only for low sodium with SIADH.</li>
<li>Seizures: ${dr("diazepam")} 10 mg IV (STG) or lorazepam/midazolam, then phenytoin or levetiracetam.</li>
<li>Raised pressure: head up 30°, treat fever, ${dr("mannitol")} 0.5–1 g/kg IV, ICU.</li>
<li>Paracetamol for fever and headache.</li></ol>
<h3>B. Once the organism is known</h3>
${tbl(["Organism", "Treatment", "Duration"], [
["Meningococcus", "Ceftriaxone (or benzylpenicillin if sensitive)", "5–7 days"],
["Pneumococcus", "Ceftriaxone; add vancomycin (or rifampicin) only if cephalosporin-resistant", "10–14 days"],
["H. influenzae", "Ceftriaxone", "7–10 days"],
["Listeria", "Ampicillin 2 g 4-hourly (± gentamicin for synergy, specialist)", "21 days"],
["No organism, bacterial picture", "Ceftriaxone", "10–14 days"],
["HSV encephalitis", "Aciclovir 10 mg/kg 8-hourly", "14–21 days"],
["TB meningitis", "National TB regimen (2HRZE/10HR) plus dexamethasone taper", "12 months — see <a href=\"#/d/tb-adult\">TB</a>"],
["Cryptococcal (HIV)", "Specialist: amphotericin + flucytosine/fluconazole; therapeutic LPs; delay ART", "Weeks to months"]])}
<p>Stop dexamethasone if a non-pneumococcal, non-Hib cause is confirmed (UK practice); continue for pneumococcal or unknown cause.${r(2)}</p>
<h3>C. Japanese encephalitis and acute encephalitis syndrome</h3>
<ul><li>No antiviral works: supportive care — airway, seizure control, raised pressure care, fluids, glucose, nursing.</li>
<li>Until JE is confirmed, cover the treatable causes: aciclovir, doxycycline (scrub typhus), ceftriaxone, and antimalarials if travel suggests.</li>
<li>Notify; vector control (STG: nets, repellents, piggeries away from houses).${r(9, 10)}</li></ul>
<h3>D. Public health</h3>
<ul><li>Notify suspected meningococcal disease, clusters, and acute encephalitis syndrome to the DPHO/CMO.</li>
<li>Chemoprophylaxis for household and close contacts (and staff who did mouth-to-mouth or intubation without a mask): ${dr("ciprofloxacin")} 500 mg once, or ${dr("rifampicin")} 600 mg 12-hourly for 2 days, or ceftriaxone 250 mg IM once (pregnancy). The patient also needs it if treated with penicillin alone.</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Do not wait: ceftriaxone 2 g IV/IM (8 × 250 mg vials, which are listed to PHC level; if fewer are available, give what you have) or ampicillin 2 g IM/IV, plus dexamethasone 10 mg, then urgent referral with an escort"],
["District hospital", "Full first-hour bundle; LP if no CT criteria; refer if CT needed, GCS falling, or no improvement"],
["Regional or national referral hospital", "CT/MRI, CSF analysis with GeneXpert, ICU, JE testing"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("ceftriaxone"), "2 g IV 12-hourly", "First-line empirical"],
[dr("ampicillin"), "2 g IV 4-hourly", "Listeria cover; STG alternative"],
[dr("benzylpenicillin"), "4 million units (2.4 g) IV 4-hourly", "Proven sensitive meningococcus; STG alternative"],
[dr("dexamethasone"), "10 mg IV 6-hourly for 4 days", "Start with the first antibiotic"],
[dr("aciclovir"), "10 mg/kg IV 8-hourly over 1 hour", "HSV encephalitis; hydrate; renal dose adjustment"],
[dr("doxycycline"), "100 mg twice daily (IV or oral)", "Scrub typhus"],
[dr("vancomycin"), "15–20 mg/kg IV 8–12-hourly (levels)", "Only for resistant pneumococcus"],
[dr("mannitol"), "0.5–1 g/kg IV over 20 minutes", "Raised intracranial pressure (STG)"],
[dr("diazepam"), "10 mg IV slowly (STG)", "Seizures"],
[dr("ciprofloxacin"), "500 mg once", "Meningococcal contacts"],
[dr("rifampicin"), "600 mg 12-hourly for 2 days", "Contact prophylaxis alternative"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and immunosuppression", html: `
<ul><li><b>Pregnancy:</b> add ampicillin for Listeria; ceftriaxone and dexamethasone are safe; avoid ciprofloxacin for prophylaxis (use ceftriaxone 250 mg IM).</li>
<li><b>Older adults:</b> fewer classic signs, more confusion; add ampicillin; higher mortality.</li>
<li><b>HIV and immunosuppression:</b> CT before LP; cryptococcal antigen; TB and Listeria are common; hold dexamethasone if cryptococcal disease is likely.</li>
<li><b>After head injury or neurosurgery:</b> different organisms (staphylococci, gram-negatives): vancomycin + meropenem or ceftazidime, specialist care.</li></ul>
` },

{ id: "scenarios", title: "Meningitis with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Septic shock with purpura", "Treat shock first (see <a href=\"#/d/sepsis-adult\">sepsis</a>); LP deferred", "Meningococcal septicaemia kills faster than meningitis"],
["CSF leak, recurrent meningitis", "Pneumococcal vaccine; ENT/neurosurgery", "Skull base defect"],
["Diabetes", "Glucose control on steroids", "Hyperglycaemia"],
["Alcohol dependence", "Ampicillin; thiamine; withdrawal care", "Listeria; Wernicke's"],
["Anticoagulation or low platelets", "Correct before LP", "Spinal haematoma"],
["TB contact or HIV, subacute illness", "GeneXpert on CSF; start TB treatment on suspicion", "TBM mortality rises with delay"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Raised intracranial pressure, herniation", "Falling GCS, pupils, Cushing response", "ICU, mannitol, head up"],
["Seizures, status epilepticus", "—", "Benzodiazepine, then phenytoin or levetiracetam"],
["Hyponatraemia (SIADH)", "Low sodium, confusion", "Fluid restriction if euvolaemic"],
["Hydrocephalus", "Drowsiness, CT dilated ventricles (TB, pneumococcus)", "Neurosurgery"],
["Stroke, venous sinus thrombosis", "Focal signs", "Imaging; specialist"],
["Hearing loss", "In up to a third after pneumococcal meningitis", "<b>Hearing test before discharge or within 4 weeks</b>; early cochlear referral"],
["Subdural empyema, abscess", "Persistent fever, focal signs", "Contrast CT, neurosurgery"]])}
<p>Mortality is about 20% for pneumococcal and 5–10% for meningococcal meningitis; untreated HSV encephalitis kills about 70%. Delay in treatment is the strongest modifiable factor.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Hearing test for every survivor of bacterial meningitis; review for memory, mood and seizures.</li>
<li>Pneumococcal vaccine after CSF leak, splenectomy or recurrent meningitis.</li>
<li>Japanese encephalitis: protection from mosquito bites; vaccine for travellers to high-risk areas (no routine JE vaccination programme identified in Bhutan — flagged).</li></ul>
${box("green", "What to tell the family", `<ul><li>"This is a serious infection of the lining of the brain. The first hours of treatment matter most, and we have started."</li><li>Close contacts may need a single preventive tablet.</li><li>Recovery can take weeks; tiredness, headaches and poor concentration are common.</li></ul>`)}
${box("red", "Come back if", `<ul><li>Hearing loss, new weakness, fits, or behaviour change after discharge</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Meningococcal rash", src: "images/meningococcal-rash.jpg", mod: "Clinical photograph", ctx: "Woman with typical meningococcaemia", loc: "Back of the right hand", find: "Star-shaped (stellate) haemorrhagic spots that do not blanch", signs: "Purpura of meningococcal septicaemia", interp: "A non-blanching rash with fever is meningococcal disease until proven otherwise: antibiotics immediately", by: "A. I. Hlei, A. V. Shkurba", page: "https://commons.wikimedia.org/wiki/File:%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B2%D0%B8%D1%81%D0%B8%D0%BF_%D0%BD%D0%B0_%D0%BA%D0%B8%D1%81%D1%82%D1%96_%D0%BF%D1%80%D0%B8_%D0%BC%D0%B5%D0%BD%D1%96%D0%BD%D0%B3%D0%BE%D0%BA%D0%BE%D0%BA%D1%86%D0%B5%D0%BC%D1%96%D1%97.jpg", lic: "Public domain" })}
${fig({ title: "Gram stain of CSF: Neisseria meningitidis", src: "images/nmen-csf-gram.jpg", mod: "Gram stain, oil immersion (×1000)", ctx: "CSF from a patient with meningitis", loc: "CSF smear", find: "Pink (gram-negative) kidney-bean-shaped diplococci with neutrophils", signs: "Gram-negative diplococci", interp: "Meningococcal meningitis; culture confirmed N. meningitidis", by: "Microman12345", page: "https://commons.wikimedia.org/wiki/File:Neisseria_meningitidis_CSF_Gram_1000.jpg", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Kernig's sign (historical photograph)", src: "images/kernig-sign.jpg", mod: "Clinical photograph, early 20th century", ctx: "Cerebrospinal meningitis", loc: "Hip and knee", find: "With the hip flexed, the examiner cannot straighten the knee because of pain and hamstring spasm", signs: "Kernig's sign; head retraction", interp: "Specific but insensitive: its absence does not exclude meningitis", by: "R. G. Wiener, Harlem Hospital", page: "https://commons.wikimedia.org/wiki/File:Kernig%27s_sign_cerebrospinal_meningitis.jpg", lic: "Public domain" })}
${fig({ title: "Herpes simplex encephalitis on MRI", src: "images/hsv-encephalitis-mri.jpg", mod: "MRI brain, coronal T2", ctx: "33-year-old woman with fever, agitation, confusion and mutism", loc: "Both temporal lobes and hippocampi", find: "High signal in the medial temporal lobes", signs: "Temporal lobe encephalitis", interp: "Typical of HSV encephalitis: aciclovir for 14–21 days", by: "Laughlin Dawes", page: "https://commons.wikimedia.org/wiki/File:Hsv_encephalitis.jpg", lic: "CC BY 3.0" })}
</div>
<div class="pair">
${fig({ title: "Pneumococcal meningitis at autopsy", src: "images/pneumococcal-meningitis-path.jpg", mod: "Gross pathology", ctx: "Fatal pneumococcal meningitis", loc: "Brain surface under the dura", find: "Yellow-grey pus coating the brain", signs: "Purulent leptomeningitis", interp: "Shows why bacterial meningitis is a race against time", by: "CDC / Dr Edwin P. Ewing Jr.", page: "https://commons.wikimedia.org/wiki/File:Streptococcus_pneumoniae_meningitis,_gross_pathology_33_lores.jpg", lic: "Public domain" })}
${fig({ title: "Hydrocephalus in tuberculous meningitis", src: "images/tbm-hydrocephalus-ct.jpg", mod: "CT brain, axial", ctx: "Patient with tuberculous meningitis", loc: "Ventricles", find: "Dilated ventricles; calcified choroid plexus", signs: "Communicating hydrocephalus", interp: "A common complication of TB meningitis: may need a shunt", by: "Komolafe M, Sunmonu T, Esan O et al.", page: "https://commons.wikimedia.org/wiki/File:Tuberculous-meningitis-scan.jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Suspected meningitis or encephalitis — adult", [
F.s("Fever with headache, neck stiffness, confusion, seizures or rash"), F.a,
F.s("Blood cultures → dexamethasone 10 mg → ceftriaxone 2 g (± ampicillin, ± aciclovir, ± doxycycline)"), F.a,
F.d("CT criteria? (immunocompromised, CNS disease, new seizure, papilloedema, low GCS, focal deficit)"), F.a,
F.b([["Yes", F.s("CT, then LP if safe")], ["No", F.s("LP now")]]), F.a,
F.d("CSF picture"), F.a,
F.b([["Neutrophils, low glucose", F.s("Bacterial: complete course by organism")], ["Lymphocytes", F.s("Viral, TB, fungal, scrub: GeneXpert, crypto antigen, serology")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Antibiotics first, investigations second.</b></li>
<li>Dexamethasone must go in with (or before) the first antibiotic dose to work.</li>
<li>Look for an eschar in every febrile confused patient in Bhutan.</li>
<li>Lymphocytic meningitis with low glucose is TB until proven otherwise.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for CT or LP before antibiotics", "Every hour raises mortality", "Blood culture and treat"],
["Adding gentamicin for meningitis", "Poor CSF penetration; kidney and ear toxicity", "Ceftriaxone alone (± ampicillin)"],
["Forgetting Listeria in older or immunosuppressed adults", "Cephalosporins do not cover it", "Add ampicillin"],
["Missing HSV encephalitis", "Untreated mortality about 70%", "Aciclovir on suspicion"],
["No hearing test", "Missed deafness, lost window for implants", "Audiology before discharge"],
["Not notifying meningococcal disease", "Outbreak in hostels, monasteries", "Notify and give prophylaxis"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the classic triad of bacterial meningitis?", "Fever, neck stiffness and altered mental state — present together in under half of patients.")}
${qa("Student", "Describe the CSF in bacterial meningitis.", "Turbid, raised pressure, neutrophils in hundreds to thousands, protein over 1 g/L, CSF:blood glucose under 0.4.")}
${qa("Intern/MO", "When should dexamethasone be given and at what dose?", "10 mg IV with or just before the first antibiotic dose, then 6-hourly for 4 days.")}
${qa("Intern/MO", "Which adults need ampicillin added?", "Over 50, pregnant, diabetic, alcohol-dependent or immunosuppressed — to cover Listeria.")}
${qa("Intern/MO", "Name the indications for CT before LP.", "Immunocompromise, known CNS disease, new seizure, papilloedema, reduced or falling consciousness, focal deficit.")}
${qa("Specialist", "Why does this guide drop gentamicin from the STG regimen?", "Aminoglycosides penetrate CSF poorly, add toxicity, and are not in WHO, ESCMID, UK or IDSA regimens.")}
${qa("Specialist", "A febrile confused farmer from Sarpang has an eschar on the groin and lymphocytic CSF. What do you give?", "Doxycycline for scrub typhus (with empirical cover until other causes are excluded).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">van de Beek D, Cabellos C, Dzupova O et al. ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. <i>Clin Microbiol Infect</i> 2016;22 Suppl 3:S37–S62. <a href="https://doi.org/10.1016/j.cmi.2016.01.007" target="_blank" rel="noopener">doi:10.1016/j.cmi.2016.01.007</a></li>
<li id="ref-2">McGill F, Heyderman RS, Michael BD et al. The UK joint specialist societies guideline on the diagnosis and management of acute meningitis and meningococcal sepsis in immunocompetent adults. <i>J Infect</i> 2016;72:405–438. <a href="https://doi.org/10.1016/j.jinf.2016.01.007" target="_blank" rel="noopener">doi:10.1016/j.jinf.2016.01.007</a></li>
<li id="ref-3">de Gans J, van de Beek D. Dexamethasone in adults with bacterial meningitis. <i>N Engl J Med</i> 2002;347:1549–1556. <a href="https://doi.org/10.1056/NEJMoa021334" target="_blank" rel="noopener">doi:10.1056/NEJMoa021334</a></li>
<li id="ref-4">Brouwer MC, McIntyre P, Prasad K, van de Beek D. Corticosteroids for acute bacterial meningitis. <i>Cochrane Database Syst Rev</i> 2015;(9):CD004405. <a href="https://doi.org/10.1002/14651858.CD004405.pub5" target="_blank" rel="noopener">doi:10.1002/14651858.CD004405.pub5</a></li>
<li id="ref-5">World Health Organization. WHO guidelines on meningitis diagnosis, treatment and care. Geneva: WHO; 2025. <a href="https://www.who.int/publications/i/item/9789240108042" target="_blank" rel="noopener">who.int/publications/i/item/9789240108042</a></li>
<li id="ref-6">Tunkel AR, Hartman BJ, Kaplan SL et al. Practice guidelines for the management of bacterial meningitis. <i>Clin Infect Dis</i> 2004;39:1267–1284. <a href="https://doi.org/10.1086/425368" target="_blank" rel="noopener">doi:10.1086/425368</a></li>
<li id="ref-7">Hasbun R, Abrahams J, Jekel J, Quagliarello VJ. Computed tomography of the head before lumbar puncture in adults with suspected meningitis. <i>N Engl J Med</i> 2001;345:1727–1733. <a href="https://doi.org/10.1056/NEJMoa010399" target="_blank" rel="noopener">doi:10.1056/NEJMoa010399</a></li>
<li id="ref-8">Tunkel AR, Glaser CA, Bloch KC et al. The management of encephalitis: clinical practice guidelines by the IDSA. <i>Clin Infect Dis</i> 2008;47:303–327. <a href="https://doi.org/10.1086/589747" target="_blank" rel="noopener">doi:10.1086/589747</a></li>
<li id="ref-9">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024: §7.4 Bacterial meningitis; §8.5.4 Japanese encephalitis. NEMF 2022; NEML 2025.</li>
<li id="ref-10">Japanese encephalitis surveillance, Bhutan, 2011–2018. <i>Emerg Infect Dis</i> 2020;26(9). <a href="https://wwwnc.cdc.gov/eid/article/26/9/20-0620" target="_blank" rel="noopener">wwwnc.cdc.gov/eid/article/26/9/20-0620</a></li>
<li id="ref-11">National Institute for Health and Care Excellence. Meningitis (bacterial) and meningococcal disease: recognition, diagnosis and management (NG240), 2024. <a href="https://www.nice.org.uk/guidance/ng240" target="_blank" rel="noopener">nice.org.uk/guidance/ng240</a></li>
<li id="ref-12">Bhutan Clinical Reference app: Bacterial meningitis (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='flag'>Partly verified</span>", "STG §7.4 PDF text drops doses and the steroid line; BCR transcription used"],
["Doses (two sources)", "<span class='pass'>Checked</span>", "ESCMID/UK guidelines and BNF"],
["WHO 2025 meningitis guideline", "<span class='flag'>Summary only</span>", "Recommendations taken from the WHO announcement and secondary summary; full text not reviewed"],
["Bhutan JE vaccine status", "<span class='flag'>Not verified</span>", "No routine programme found in public sources"],
["Pneumococcal vaccine in the Bhutan schedule", "<span class='flag'>Not verified</span>", "Not stated in this chapter"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY 3.0 / CC BY 2.0 / CC BY-SA 4.0"]], "qc")}
` }
]
});
