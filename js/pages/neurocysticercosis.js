/* Neurocysticercosis and taeniasis — all ages. NEW disease (batch N-1, 27 Nov 2026).
   Sources read directly: Bhutan STG 2024 §8.4.4 Tapeworms (taeniasis/cysticercosis: definition, causes, incubation, symptoms,
   stool for ova, niclosamide for intestinal infection, albendazole for neurocysticercosis, refer, hygiene); STG epilepsy section
   (NCC as a cause; EEG at KGUMSB, MRI specialist decision); IDSA/ASTMH 2017 guideline (White et al., Clin Infect Dis 2018 — executive
   summary recs 1–33, Tables 1–3, read on PMC); WHO guidelines on management of Taenia solium neurocysticercosis 2021 (summary of
   recommendations, read from IRIS PDF); Garcia et al., Lancet Infect Dis 2014 combination trial (citation); Bhutan NEML 2025
   (albendazole 400 mg, niclosamide 500 mg, prednisolone 5/20 mg, dexamethasone 4 mg tab and 4 mg/mL inj; no praziquantel). */
registerPage({
id: "neurocysticercosis",
title: "Neurocysticercosis & Taeniasis — all ages",
subtitle: "The commonest preventable cause of adult-onset epilepsy in pork-eating, low-sanitation areas. Image the brain, classify the cysts, control seizures, give albendazole with steroids only for living cysts and only when pressure in the head is not raised, leave calcified scars alone — and treat the tapeworm carrier in the family",
age: "All ages", specs: ["neuro", "id", "medicine", "paeds", "nsurg"],
keywords: ["neurocysticercosis", "NCC", "cysticercosis", "Taenia solium", "pork tapeworm", "taeniasis", "tapeworm", "brain cyst", "single enhancing lesion", "calcified granuloma", "ring enhancing lesion", "seizures", "late-onset epilepsy", "hydrocephalus", "intraventricular cyst", "subarachnoid cysticercosis", "ocular cysticercosis", "albendazole", "praziquantel", "niclosamide", "dexamethasone", "EITB"],
related: ["epilepsy-adult", "epilepsy-child", "headache-adult", "worms-child", "icp-child", "coma-adult", "tb-adult", "hiv-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">People with an intestinal pork tapeworm (<i>Taenia solium</i>) pass eggs in their stool. When someone swallows those eggs — through unwashed hands, food or water — larvae lodge in muscle, skin, eye and brain as small cysts. Brain cysts cause seizures, headache and raised intracranial pressure. Eating undercooked pork gives the tapeworm; swallowing eggs gives cysticercosis — so vegetarians can get it too.</p>
<div class="glance">
<div><h4>Suspect</h4><p>New seizures (often focal) in a teenager or adult, chronic headache, signs of raised pressure; pork in the diet or a tapeworm carrier at home.</p></div>
<div><h4>Image</h4><p><b>CT</b> shows calcifications; <b>MRI</b> shows living cysts, ventricles and subarachnoid disease (WHO, IDSA).</p></div>
<div><h4>Before treating</h4><p>Exclude raised ICP; <b>examine the fundi</b> (eye cysts); think of TB and strongyloides if long steroids are planned.</p></div>
<div><h4>Living cysts</h4><p>${dr("albendazole", "Albendazole")} 15 mg/kg/day (max 1200 mg) in 2 doses with food for 10–14 days <b>with corticosteroid started first</b>.</p></div>
<div><h4>Calcified only</h4><p><b>No antiparasitic drug</b> — antiseizure medicine only.</p></div>
<div><h4>Seizures</h4><p>Antiseizure medicine for everyone with seizures; continue at least 2 years with calcified disease (WHO).</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan STG 2024 §8.4.4 covers tapeworms: <i>T. solium</i> (pork) and <i>T. saginata</i> (beef); stool for ova and parasites; <b>niclosamide</b> for intestinal infection; <b>albendazole</b> for neurocysticercosis with referral; good hand and food hygiene and thorough cooking of meat. The epilepsy section lists neurocysticercosis as a cause, with EEG at KGUMSB and MRI on specialist decision. NEML 2025 has albendazole 400 mg, niclosamide 500 mg chewable, prednisolone and dexamethasone; <b>praziquantel is not listed</b>. CT is available at JDWNRH and regional referral hospitals; MRI and neurosurgery at JDWNRH. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Forms of the disease", html: `
${tbl(["Form (IDSA 2017)", "Imaging", "Usual problem"], [
["<b>Viable parenchymal</b>", "Cysts with fluid and often a visible scolex ('hole with a dot')", "Seizures"],
["<b>Single enhancing lesion (SEL)</b>", "One ring- or nodular-enhancing lesion under 2 cm — a dying cyst", "Seizures; common in South Asia"],
["<b>Calcified parenchymal</b>", "Small calcifications (usually 1–5 mm) on CT, sometimes with oedema", "Recurrent seizures; no living parasite"],
["<b>Cysticercal encephalitis</b>", "Many inflamed cysts with diffuse brain swelling", "Raised ICP — children and young women"],
["<b>Intraventricular</b>", "Cyst in a ventricle, obstructive hydrocephalus", "Raised ICP, sudden deterioration"],
["<b>Subarachnoid</b> (racemose)", "Grape-like cysts in basal cisterns or Sylvian fissure", "Hydrocephalus, meningitis, stroke — most severe"],
["<b>Spinal</b>", "Cysts in spinal subarachnoid space or cord", "Radicular pain, weakness"],
["<b>Ocular</b>", "Cyst in vitreous, retina or orbit", "Visual loss — classified separately"]])}
<p>Classification from IDSA 2017 Table 1.${r(2)} Taeniasis itself (adult worm in the gut) causes mild abdominal symptoms and passage of segments (Bhutan STG).${r(1)}</p>
` },

{ id: "patho", title: "Life cycle", html: `
${F.chart("Taenia solium", [F.s("Pig eats human faeces with eggs → cysts in pork"), F.a, F.s("Person eats undercooked pork → adult tapeworm in the gut (taeniasis)"), F.a, F.e("Carrier passes eggs → hands, food, water"), F.a, F.e("Anyone who swallows eggs → larvae in brain, muscle, eye (cysticercosis)"), F.a, F.e("Living cyst (little inflammation) → dying cyst (inflammation, seizures) → calcified scar"), F.a, F.ok("Break the cycle: treat carriers, toilets, hand washing, pig confinement, cooked pork")])}
<p>Treatment kills living cysts, which provokes inflammation — that is why steroids are started before albendazole, and why antiparasitic drugs are dangerous when brain pressure is already raised.${r(2)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan STG 2024", "WHO 2021", "IDSA 2017", "This guide"], [
["Imaging", "MRI specialist decision", "MRI tool of choice; CT for calcifications or if no MRI", "Both MRI and non-contrast CT", "CT first (available); MRI at JDWNRH for viable, ventricular, subarachnoid disease"],
["Living parenchymal cysts", "Albendazole; refer", "Anthelmintic + corticosteroid (strong)", "Albendazole 10–14 days for 1–2 cysts; add praziquantel for more than 2 cysts", "Albendazole + steroid; praziquantel combination at JDWNRH if available"],
["Single enhancing lesion", "—", "Albendazole + corticosteroid (conditional)", "Albendazole 1–2 weeks + steroid", "Albendazole 7–14 days + steroid"],
["Calcified lesions", "—", "AEDs at least 2 years", "No antiparasitic; no routine steroid", "No antiparasitic; AEDs"],
["Stopping AEDs after SEL", "—", "Consider 6 months after last seizure if lesion resolved without calcification", "Seizure-free 6 months and lesion resolved, no risk factors", "Same"],
["Stopping AEDs, viable cysts", "—", "—", "Consider after 24 seizure-free months with cyst resolution", "2 years"]])}
<p>Bhutan STG;${r(1)} IDSA 2017;${r(2)} WHO 2021.${r(3)} In the combination trial, albendazole plus praziquantel cleared cysts better than albendazole alone in people with more than 2 cysts.${r(4)} Praziquantel is not on the Bhutan NEML.</p>
` },

{ id: "presentation", title: "Clinical features", html: `
<ul><li><b>Seizures</b> — the commonest presentation; focal seizures with or without spread; often first seizure in adolescence or adulthood.</li><li><b>Headache</b>, vomiting, papilloedema, reduced consciousness — raised ICP from hydrocephalus or encephalitis.</li><li>Focal weakness or stroke (subarachnoid disease with vasculitis); cognitive or personality change (STG).</li><li>Visual loss (ocular cysts); spinal pain or weakness.</li><li>Small painless lumps under the skin or in muscle (subcutaneous cysticerci).</li><li>Taeniasis: mild abdominal pain, nausea, passing tapeworm segments in the stool.</li></ul>
<h3>The typical patient</h3>
<p>Sangay, 19, from a village where pigs roam freely, has his first generalised seizure at school; his family recalls brief episodes of left-hand jerking for months. CT shows one 12 mm ring-enhancing lesion in the right frontal lobe with oedema; no hydrocephalus; fundi normal. <b>Single enhancing lesion from neurocysticercosis</b>: carbamazepine (or levetiracetam), prednisolone 1 mg/kg started 1–2 days before albendazole 400 mg twice daily with food for 14 days, then a repeat scan at 6 months. His mother's stool is examined for tapeworm eggs and the household is counselled on toilets, hand washing and cooking pork thoroughly.</p>
` },

{ id: "ddx", title: "Other causes of a brain lesion with seizures", html: `
${tbl(["Condition", "Clue"], [
["<b>Tuberculoma</b>", "Usually over 2 cm, irregular, with midline shift; TB elsewhere, HIV; important in Bhutan"],
["Brain abscess", "Fever, rapidly enlarging lesion, thin smooth ring"],
["Primary brain tumour or metastasis", "Older, progressive deficits, irregular thick enhancement"],
["Toxoplasmosis", "HIV with low CD4, multiple lesions in basal ganglia"],
["Hydatid cyst", "Large single cyst without scolex visible on CT, dog contact"],
["Stroke, vascular malformation", "Sudden deficit"]])}
<p>A single small (under 2 cm), round lesion with no midline shift in a patient with seizures and no other illness is most often a cysticercus in South Asia.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["<b>CT head (non-contrast ± contrast)</b>", "Calcifications, enhancing lesions, hydrocephalus"],
["<b>MRI brain</b>", "Living cysts, scolex, ventricular and subarachnoid cysts (3D sequences)"],
["<b>Fundoscopy</b> before treatment", "Papilloedema; ocular cysts (treating an eye cyst with drugs can blind) — IDSA strong"],
["Serology (EITB) where available", "Confirmatory; avoid crude-antigen ELISA (IDSA)"],
["Stool for ova and parasites", "Tapeworm carrier (Bhutan STG); test household members"],
["Liver tests and blood count", "Baseline; monitor if albendazole is given for more than 14 days"],
["Screen for TB and Strongyloides", "If prolonged steroids are planned (IDSA)"],
["HIV test", "Alters differential diagnosis (WHO: treat NCC the same in HIV)"],
["EEG", "If seizure type unclear (KGUMSB)"]])}
` },

{ id: "staging", title: "Treatment planner", html: `
<p>Choose the form, number of living cysts, weight and whether ICP is raised. Doses follow IDSA 2017 and WHO 2021; strengths from the Bhutan NEML.</p>
<div class="calc" data-calc="nccplan"></div>
` },

{ id: "manage", title: "Management by form", html: `
<h3>1. Everyone</h3>
<ul><li>Seizures: start an antiseizure medicine (carbamazepine, phenytoin, valproate or levetiracetam by availability, cost and interactions — IDSA).</li><li>Raised ICP first: dexamethasone or mannitol for brain swelling; urgent neurosurgery (JDWNRH) for hydrocephalus. <b>No antiparasitic drug while ICP is raised</b> (IDSA strong).</li></ul>
<h3>2. Viable parenchymal cysts</h3>
<ul><li>1–2 cysts: ${dr("albendazole")} 15 mg/kg/day in 2 doses with fatty food, max 1200 mg/day, for 10–14 days.</li><li>More than 2 cysts: albendazole + praziquantel 50 mg/kg/day for 10–14 days (IDSA) — specialist, praziquantel not on NEML.</li><li>Corticosteroid started before albendazole and continued through it: ${dr("prednisolone")} 1 mg/kg/day, or ${dr("dexamethasone")} 0.1 mg/kg/day (adults often 6–8 mg/day), then taper.</li><li>MRI or CT every 6 months until cysts resolve; retreat if cysts persist at 6 months.</li></ul>
<h3>3. Single enhancing lesion</h3>
<ul><li>Albendazole 15 mg/kg/day (max 800 mg/day for SEL in IDSA Table 2) for 1–2 weeks with steroid; antiseizure medicine.</li><li>Stop antiseizure medicine after 6 seizure-free months if the lesion has resolved without calcification (WHO, IDSA).</li></ul>
<h3>4. Calcified lesions</h3>
<ul><li>No antiparasitic drugs; antiseizure medicine for at least 2 years (WHO); steroids not routinely.</li></ul>
<h3>5. Cysticercal encephalitis</h3>
<ul><li>Corticosteroids and ICP care; <b>avoid antiparasitic drugs</b> (they worsen oedema).</li></ul>
<h3>6. Ventricular, subarachnoid, spinal and ocular disease</h3>
<ul><li>Specialist neurosurgical care: endoscopic removal of lateral or third ventricle cysts; shunt if not removable; subarachnoid disease needs prolonged albendazole with steroids.</li><li>Ocular cysts: ophthalmic surgery before any antiparasitic drug.</li></ul>
<h3>7. Taeniasis and prevention</h3>
<ul><li>${dr("niclosamide")} 2 g single dose chewed (adult) for the intestinal tapeworm (Bhutan STG); albendazole is an alternative.</li><li>Test and treat household members; toilets and hand washing; keep pigs penned; cook pork until no pink remains.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML)", "Dose", "Notes"], [
[dr("albendazole", "Albendazole 400 mg"), "15 mg/kg/day in 2 doses with food (max 1200 mg/day; 800 mg/day for SEL) for 10–14 days", "Steroid first. Check liver tests and WBC if over 14 days. Avoid in first-trimester pregnancy"],
["Praziquantel (not on NEML)", "50 mg/kg/day in 3 doses with albendazole for more than 2 cysts", "Specialist; dexamethasone lowers praziquantel levels"],
[dr("prednisolone", "Prednisolone 5/20 mg"), "1 mg/kg/day (often 40–60 mg in adults) during therapy, then taper", "Start before albendazole"],
[dr("dexamethasone", "Dexamethasone 4 mg tab / 4 mg/mL inj"), "0.1 mg/kg/day; adults 6–8 mg/day; higher for encephalitis or subarachnoid disease", "Gastric protection if prolonged"],
[dr("niclosamide", "Niclosamide 500 mg"), "Adult 2 g once, chewed; child 1 g (11–34 kg) or 2 g (over 34 kg)", "Intestinal tapeworm (Bhutan STG)"],
[dr("carbamazepine"), "Start 100–200 mg twice daily, titrate", "Focal seizures; drug interactions"],
[dr("levetiracetam"), "250–500 mg twice daily, titrate", "Few interactions"]])}
<p>Antiparasitic and steroid doses: IDSA 2017;${r(2)} indications WHO 2021;${r(3)} niclosamide: Bhutan STG names the drug — doses are standard labelling (not in STG).</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Children</b>", "Single enhancing lesions very common; albendazole 15 mg/kg/day; cysticercal encephalitis more common — no antiparasitic drugs"],
["<b>Pregnancy</b>", "Control seizures; delay albendazole until after the first trimester or after delivery unless severe"],
["<b>HIV</b>", "Treat as for people without HIV (WHO)"],
["<b>People needing long steroids</b>", "Screen or treat empirically for strongyloides (ivermectin) and latent TB (IDSA)"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["CT shows a single ring lesion; cannot get MRI", "Treat as SEL if under 2 cm, no midline shift, no TB features; repeat CT at 3–6 months"],
["Patient on albendazole has more seizures and headache", "Expected inflammation — continue steroid, check for raised ICP, CT if worse"],
["Headache, vomiting, papilloedema", "Do not start albendazole — urgent CT and neurosurgical referral"],
["Lesion over 2 cm with midline shift", "Think tuberculoma, abscess or tumour — refer"],
["Many calcifications, seizures controlled", "No antiparasitic; continue AEDs at least 2 years"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Epilepsy, status epilepticus.</li><li>Hydrocephalus, sudden death from ventricular cysts.</li><li>Stroke and chronic meningitis (subarachnoid disease).</li><li>Blindness (ocular cysts).</li><li>Treatment-related: brain swelling, seizures during treatment, steroid side effects, albendazole liver injury.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Repeat imaging every 6 months until cysts resolve (IDSA).</li><li>Seizure diary; review antiseizure medicine at 6 months (SEL) or 2 years (viable or calcified).</li><li>Household stool screening and hygiene follow-up by the health assistant.</li></ul>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Neurocysticercosis on CT", src: "images/ncc-ct.jpg", mod: "CT brain", ctx: "Patient with seizures from an endemic area", loc: "Brain parenchyma", find: "Cystic and calcified lesions", interp: "Parenchymal neurocysticercosis — classify by stage before treatment", by: "Innocent Lule Segamwenge", page: "https://commons.wikimedia.org/wiki/File:Neurocysticercosis_brain_CT.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Extraparenchymal neurocysticercosis", src: "images/ncc-extraparenchymal-mri.jpg", mod: "MRI brain", ctx: "Subarachnoid / ventricular disease", loc: "Cisterns and ventricles", find: "Cystic lesions outside the brain substance", interp: "Severe form — specialist and neurosurgical care", by: "Bazan R, Hamamoto Filho PT, et al.", page: "https://commons.wikimedia.org/wiki/File:Extraparenchymal_neurocysticercosis_MRI.jpg", lic: "CC BY 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Seizure or headache, NCC suspected", [F.s("Control seizures; CT (MRI if available); fundoscopy"), F.a, F.d("Raised ICP, hydrocephalus or encephalitis?"), F.a, F.b([["Yes", F.e("Steroids / mannitol; neurosurgery; NO antiparasitic")], ["No", F.d("Form?")]]), F.a, F.b([["Calcified only", F.ok("Antiseizure medicine only")], ["Viable or SEL", F.e("Steroid first, then albendazole 10–14 days")]]), F.a, F.ok("Repeat imaging 6-monthly; treat household tapeworm carriers")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Albendazole with raised ICP", "Brain swelling, herniation", "Treat ICP first"],
["No steroid with albendazole", "More seizures and oedema", "Start steroid before"],
["Treating calcified lesions with albendazole", "No benefit", "Antiseizure medicine only"],
["Skipping fundoscopy", "Ocular cyst blindness", "Look at the fundi"],
["Labelling every ring lesion NCC", "Missed TB, abscess, tumour", "Size, shift, clinical context"],
["Forgetting the family", "Ongoing egg exposure", "Stool test and treat carriers"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "How can a vegetarian get neurocysticercosis?", "By swallowing Taenia solium eggs from a human tapeworm carrier (contaminated hands, food, water) — not from eating pork.")}
${qa("Student", "What does a scolex look like on imaging?", "A small dot inside a cyst — the 'hole with a dot' sign of a living cysticercus.")}
${qa("Intern/MO", "Albendazole dose for a 50 kg adult with one viable cyst?", "750 mg/day (15 mg/kg) in 2 doses with food for 10–14 days, with prednisolone or dexamethasone started first.")}
${qa("Intern/MO", "Should calcified NCC be treated with albendazole?", "No — antiseizure medicine only (IDSA, WHO).")}
${qa("Specialist", "When is praziquantel added?", "More than 2 viable parenchymal cysts: albendazole 15 mg/kg/day + praziquantel 50 mg/kg/day for 10–14 days (IDSA 2017).")}
${qa("Specialist", "When can AEDs be stopped after a single enhancing lesion?", "After about 6 seizure-free months if the lesion has resolved without calcification and there are no risk factors (WHO 2021, IDSA).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.4.4 Tapeworms (taeniasis) and epilepsy section.</li>
<li id="ref-2">White AC Jr, Coyle CM, Rajshekhar V, et al. Diagnosis and treatment of neurocysticercosis: 2017 clinical practice guidelines by IDSA and ASTMH. Clin Infect Dis 2018;66(8):e49–e75. <a href="https://doi.org/10.1093/cid/cix1084" target="_blank" rel="noopener">doi:10.1093/cid/cix1084</a></li>
<li id="ref-3">World Health Organization. WHO guidelines on management of Taenia solium neurocysticercosis. Geneva: WHO; 2021. ISBN 9789240032231. <a href="https://www.who.int/publications/i/item/9789240032231" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Garcia HH, Gonzales I, Lescano AG, et al. Efficacy of combined antiparasitic therapy with praziquantel and albendazole for neurocysticercosis: a double-blind, randomised controlled trial. Lancet Infect Dis 2014;14(8):687–695. <a href="https://doi.org/10.1016/S1473-3099(14)70779-0" target="_blank" rel="noopener">doi:10.1016/S1473-3099(14)70779-0</a></li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §8.4.4", "<span class='pass'>Read directly</span>", "Drugs named without doses"],
["IDSA 2017", "<span class='pass'>Read directly</span>", "Executive summary and Tables 1–3 (PMC). Note: IDSA rec 14 says praziquantel 50 mg/kg/day, Table 2 prints 15 mg/kg/d — the trial used 50 mg/kg/day"],
["WHO 2021", "<span class='pass'>Read directly</span>", "Summary of recommendations (IRIS PDF)"],
["Two-source doses", "<span class='pass'>Checked</span>", "Albendazole 15 mg/kg/day: IDSA + epilepsy page/drug card. Steroid doses: IDSA footnotes only. Niclosamide: standard labelling"],
["Combination trial result", "<span class='unv'>Not read</span>", "Cited from IDSA summary; abstract not re-read"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "nccplan"]], "qc")}` }
]
});
