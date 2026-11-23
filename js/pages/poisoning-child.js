/* Poisoning in children: accidental ingestions, kerosene, iron, paracetamol, organophosphates, adolescent self-harm */
registerPage({
id: "poisoning-child",
title: "Poisoning — Children",
subtitle: "Toddlers who swallow what they find and adolescents who overdose on purpose: weight-based antidotes, the small-dose killers, kerosene, iron tablets, paracetamol, pesticides, button batteries, and making the home safe",
age: "Children", specs: ["paeds", "emerg"],
keywords: ["child poisoning", "accidental ingestion", "toddler", "kerosene", "hydrocarbon", "iron poisoning", "iron tablets", "paracetamol overdose child", "organophosphate child", "button battery", "atropine child", "N-acetylcysteine child", "adolescent overdose", "self-harm adolescent", "one pill can kill"],
related: ["poisoning-adult", "anaphylaxis-child", "sepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most toddlers who swallow something are well and go home after a few hours of observation. The art is knowing the few substances where one tablet or one mouthful can kill, and acting early for those, while never missing the teenager whose 'accident' was not an accident.</p>
<div class="glance">
<div><h4>Two peaks</h4><p>1–5 years: accidental, small amounts. Adolescents: intentional, often several drugs.</p></div>
<div><h4>Kerosene</h4><p>No vomiting, no charcoal, no lavage. Watch 6 hours for cough and fast breathing.</p></div>
<div><h4>Iron tablets</h4><p>Mother's iron-folate tablets: over 20 mg/kg elemental iron needs assessment; over 60 mg/kg is dangerous.</p></div>
<div><h4>Paracetamol</h4><p>150 mg/kg or more, or level above the line: ${dr("acetylcysteine")} by weight.</p></div>
<div><h4>Pesticides</h4><p>${dr("atropine")} 0.02–0.05 mg/kg IV every 5 minutes, doubling, until the chest is clear.</p></div>
<div><h4>Button battery</h4><p>In the oesophagus: emergency removal within 2 hours.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §1.4 gives child doses for atropine (0.05 mg/kg) and pralidoxime (20–50 mg/kg then 10–20 mg/kg/h). Common in Bhutan: kerosene and diesel stored in drink bottles, iron-folate tablets from antenatal care, paracetamol syrup overdoses from repeated dosing, pesticides kept in the house, and ara or other alcohol. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What children swallow", html: `
${tbl(["Group", "Examples", "Risk"], [
["Usually harmless in small amounts", "Most plants, crayons, silica gel, oral contraceptives, small amounts of soap or toothpaste", "Observe at home with advice"],
["<b>Dangerous in one or two doses</b> for a 10 kg child", "Tricyclics (amitriptyline), opioids (tramadol, codeine), sulfonylureas (glibenclamide), calcium-channel blockers (nifedipine, amlodipine), clonidine, camphor, methyl salicylate oils", "Admit and observe 12–24 hours"],
["Hydrocarbons", "Kerosene, petrol, diesel, lamp oil", "Aspiration pneumonitis"],
["Corrosives", "Toilet and drain cleaners, battery acid, bleach", "Burns of mouth and oesophagus"],
["Iron", "Iron-folate tablets", "Shock, liver failure"],
["Pesticides and rat poison", "Organophosphates, zinc phosphide, anticoagulants", "Cholinergic crisis, shock, bleeding"],
["Button batteries, magnets", "Remote controls, toys", "Oesophageal perforation within hours"]])}
` },

{ id: "patho", title: "Why children are different", html: `
${F.chart("Small body, big dose", [
F.s("A single adult tablet is a large mg/kg dose for a 10 kg toddler"), F.a, F.b([["Hydrocarbons", F.e("Low viscosity → aspirated into lungs → chemical pneumonitis")], ["Iron", F.e("Corrodes gut, then mitochondrial poisoning → acidosis, shock, liver failure")], ["Batteries", F.e("Electrical current in the oesophagus → liquefactive burn in 2 hours")]]), F.a,
F.ok("Early recognition and observation prevent most deaths")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide"], [
["Atropine (child)", "0.05 mg/kg IV every 5 minutes", "0.02 mg/kg (min 0.1 mg), doubling (BNFc, Eddleston)", "Start 0.02–0.05 mg/kg; titrate to a clear chest"],
["Pralidoxime (child)", "20–50 mg/kg, then 10–20 mg/kg/h", "WHO/NEMF 30 mg/kg, then 8 mg/kg/h", "WHO dose " + LB.int()],
["Charcoal dose", "1 g/kg (NEMF infants); child 1–2 y 25–50 g", "1 g/kg, max 50 g", "1 g/kg, max 50 g"],
["Ipecac or salt water to induce vomiting", "Not advised", "Not advised (AACT)", "Never"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> what (bring the bottle), the most that could have been taken (count missing tablets; assume the worst), when, who found the child, vomiting, cough or choking.</li>
<li><b>Examine:</b> airway, breathing rate and effort, SpO₂, GCS (AVPU), pupils, secretions, mouth burns, drooling, heart rate and rhythm, glucose.</li>
<li><b>Adolescents:</b> speak alone; ask about intent, mood, alcohol, school, relationships and abuse. Paracetamol is often taken with other drugs.</li></ul>
${box("red", "Danger signs", `<ul><li>Coughing, choking or fast breathing after kerosene</li><li>Drowsiness, fits, hypoglycaemia</li><li>Vomiting blood or bloody diarrhoea after iron</li><li>Drooling, refusal to swallow (battery or corrosive)</li><li>Wet, slow and pinpoint (pesticide)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 2-year-old in Wangdue drank from a soft-drink bottle of kerosene 30 minutes ago, coughed and gagged, and now breathes at 50 per minute. <b>This is hydrocarbon aspiration</b>: the danger is in the lungs, not the stomach. Do not make him vomit or give charcoal. Give oxygen, observe at least 6 hours, and get a chest X-ray if symptoms persist; antibiotics only if pneumonia develops later.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Sepsis or meningitis", "Fever, rash, bulging fontanelle"], ["Hypoglycaemia (other cause)", "Check glucose in every drowsy child"], ["Head injury, including abuse", "Bruises, inconsistent story"], ["Encephalitis", "Fever, fits"], ["Inborn error of metabolism", "Infant, recurrent episodes"]])}` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "When"], [["Glucose", "Every drowsy child; sulfonylureas, alcohol, beta-blockers cause hypoglycaemia"], ["ECG", "Tricyclics, calcium-channel blockers, aconite"], ["Paracetamol level at 4 hours", "Possible paracetamol ingestion; every adolescent overdose"], ["Serum iron at 4–6 hours, glucose, gas", "Iron over 20 mg/kg"], ["Abdominal X-ray", "Iron tablets (radio-opaque), button battery (also neck and chest)"], ["Chest X-ray", "Persistent symptoms after hydrocarbon (changes appear at 6 hours)"]])}
` },

{ id: "staging", title: "Antidote tools", html: `
<p>Select 'Child' and enter the weight.</p>
<h3>Paracetamol</h3><div class="calc" data-calc="pcmnac"></div>
<h3>Organophosphate</h3><div class="calc" data-calc="opatropine"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. General</h3>
<ul><li>ABC; glucose (2 mL/kg 10% dextrose if low); ${dr("diazepam")} 0.3 mg/kg IV (0.5 mg/kg PR) for seizures.</li>
<li>${dr("activated_charcoal")} 1 g/kg (max 50 g) within 1 hour for adsorbable poisons with a safe airway; flavour with juice. Not for kerosene, iron, corrosives or alcohol.</li>
<li>Small-dose killers: admit and observe 12–24 hours even if well.</li></ul>
<h3>B. Specific poisons</h3>
${tbl(["Poison", "Management"], [
["<b>Kerosene and hydrocarbons</b>", "No vomiting, charcoal or lavage. Oxygen; observe 6 hours; well at 6 hours with normal SpO₂ = home. Antibiotics only for later pneumonia; no steroids"],
["<b>Iron</b>", "Calculate elemental iron (ferrous sulphate 200 mg = 60–65 mg iron). Under 20 mg/kg: observe. 20–60 mg/kg: observe 6 hours, fluids. Over 60 mg/kg, shock or acidosis: IV fluids and desferrioxamine 15 mg/kg/h (not on NEML: refer to NRH)"],
["<b>Paracetamol</b>", "Tool above; NAC with NEMF volumes: under 20 kg 3, 7 and 14 mL/kg of 5% dextrose"],
["<b>Organophosphates</b>", dr("atropine") + " 0.02–0.05 mg/kg IV, doubling every 5 minutes to a clear chest; " + dr("pralidoxime") + " 30 mg/kg then 8 mg/kg/h; decontaminate skin"],
["<b>Opioids</b> (tramadol, codeine syrups)", dr("naloxone") + " 0.1 mg/kg (max 2 mg) IV/IM, repeat; observe 6 hours after last dose"],
["<b>Sulfonylureas</b>", "Glucose; frequent feeds; admit 24 hours (glibenclamide)"],
["<b>Tricyclics</b>", "ECG; sodium bicarbonate 1–2 mmol/kg if QRS over 100 ms; diazepam for fits"],
["<b>Corrosives</b>", "Nothing by mouth; airway; refer for endoscopy if drooling, vomiting or stridor"],
["<b>Button battery</b>", "In the oesophagus on X-ray: emergency endoscopic removal (give 10 mL honey every 10 minutes, up to 6 doses, to children over 1 year while transferring, if within 12 hours); in the stomach: usually passes"],
["<b>Alcohol (ara, beer)</b>", "Hypoglycaemia is the main danger in young children: glucose, warmth, observation"]])}
<h3>C. Adolescents and safeguarding</h3>
<ul><li>Every intentional overdose: admit, psychosocial assessment before discharge, family meeting, remove means at home; refer to child and adolescent mental health (STG: refer all under 18 with depression).</li>
<li>Repeated 'accidents' or an implausible story: consider neglect or deliberate poisoning.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("atropine"), "0.02–0.05 mg/kg IV, doubling", "Chest clear = target"],
[dr("pralidoxime"), "30 mg/kg, then 8 mg/kg/h", "Organophosphates"],
[dr("acetylcysteine"), "150 → 50 → 100 mg/kg", "Weight-based dextrose volume"],
[dr("naloxone"), "0.1 mg/kg (max 2 mg)", "Repeat; short-acting"],
[dr("activated_charcoal"), "1 g/kg (max 50 g)", "Within 1 hour, safe airway"],
[dr("diazepam"), "0.3 mg/kg IV / 0.5 mg/kg PR", "Seizures"]])}
` },

{ id: "populations", title: "Infants", html: `<ul><li>Infants rarely poison themselves: think of dosing errors (concentrated drops), traditional remedies, and deliberate poisoning.</li><li>Camphor and oil balms rubbed on or given by mouth cause seizures.</li><li>Breastfeeding mothers on medicines: most are safe; ask before stopping breastfeeding.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Unknown number of tablets missing", "Assume the maximum", "Safer"], ["Parent gave salt water to cause vomiting", "Check sodium; observe", "Salt water can cause fatal hypernatraemia"], ["Kerosene child well, SpO₂ 98% at 6 h", "Discharge with advice", "Delayed pneumonitis is rare after 6 well hours"], ["Teenager denies intent but took 30 tablets", "Treat as intentional; mental health review", "Minimisation is common"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Hydrocarbon pneumonitis (usually resolves in a week), oesophageal strictures after corrosives or batteries, liver failure (iron, paracetamol), hypoxic brain injury after seizures or apnoea. Child mortality from accidental poisoning is low when treated promptly; adolescents remain at risk of repeat self-harm.</p>` },

{ id: "followup", title: "Prevention at home", html: `
${box("green", "Advice for families", `<ul><li>Keep medicines, iron tablets, pesticides and kerosene locked and high, in original containers. Never store kerosene in drink bottles.</li><li>Buy child-resistant containers where possible; put medicines away straight after use.</li><li>Use the measuring syringe for syrups; write down dose times so two carers do not both give a dose.</li><li>Keep button batteries away from children; tape remote-control battery covers.</li><li>Bring the container to hospital in any poisoning.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Cough, fast breathing or fever in the next 2 days (kerosene)</li><li>Vomiting, drowsiness or yellow eyes</li></ul>`)}
` },

{ id: "images", title: "Images", html: `<p>No suitable openly licensed images of childhood poisoning were found. See the aconite plant in <a href="#/d/poisoning-adult">Poisoning — Adults</a>.</p>` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child who swallowed something", [F.s("ABC, glucose; identify substance and maximum amount"), F.a, F.d("Small-dose killer, kerosene, iron, battery, pesticide, or symptomatic?"), F.a, F.b([["No", F.ok("Observe 4–6 hours; advice; home")], ["Yes", F.e("Specific plan; admit; antidote by weight")]]), F.a, F.s("Prevention advice; safeguarding or mental health review if needed")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Inducing vomiting after kerosene", "Aspiration", "Never induce vomiting"], ["Ignoring a single amitriptyline tablet in a toddler", "Seizures, arrhythmia", "Admit and monitor"], ["Using charcoal for iron", "Does not bind", "Fluids, desferrioxamine"], ["Missing a battery on X-ray as a coin", "Perforation", "Look for the double-ring halo"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why is vomiting dangerous after kerosene?", "Kerosene is easily aspirated into the lungs during vomiting, causing chemical pneumonitis.")}
${qa("Intern/MO", "A 12 kg child swallowed 6 ferrous sulphate 200 mg tablets. Risk?", "About 6 × 65 = 390 mg elemental iron = 32 mg/kg: moderate; observe at least 6 hours, check iron level, give fluids, watch for vomiting, diarrhoea, shock.")}
${qa("Specialist", "How does a button battery injure the oesophagus?", "Current generates hydroxide at the negative pole, causing a liquefactive alkaline burn within 2 hours.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.4 Poisoning and overdose; National Essential Medicines Formulary 2022; NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet 2008;371:597–607. <a href="https://doi.org/10.1016/S0140-6736(07)61202-1" target="_blank" rel="noopener">doi:10.1016/S0140-6736(07)61202-1</a></li>
<li id="ref-3">Chiew AL, Reith D, Pomerleau A, et al. Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand. Med J Aust 2020;212:175–183. <a href="https://doi.org/10.5694/mja2.50428" target="_blank" rel="noopener">doi:10.5694/mja2.50428</a></li>
<li id="ref-4">World Health Organization. Pocket Book of Hospital Care for Children, 2nd ed. Geneva: WHO; 2013 (§1.10 Common poisoning).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §1.4 child doses", "<span class='pass'>Used</span>", "Atropine and pralidoxime"], ["Desferrioxamine", "<span class='flag'>Not on NEML 2025</span>", "Refer severe iron poisoning"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"]], "qc")}` }
]
});
