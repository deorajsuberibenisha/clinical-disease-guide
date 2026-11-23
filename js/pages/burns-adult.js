/* Burns — adults */
registerPage({
id: "burns-adult",
title: "Burns — Adults",
subtitle: "Stop the burning, cool for 20 minutes, assess airway and size properly, start measured fluids for big burns, control pain, dress simply, and refer the burns that need specialist care",
age: "Adults", specs: ["surg", "emerg", "rehab"],
keywords: ["burns", "scald", "thermal injury", "rule of nines", "TBSA", "Parkland formula", "fluid resuscitation burns", "inhalation injury", "electrical burn", "chemical burn", "escharotomy", "silver sulfadiazine", "burn dressing", "bukhari burns"],
related: ["burns-child", "sepsis-adult", "headinjury-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In Bhutan, burns come from open fires, bukharis (wood stoves), hot water, butter lamps and electricity. Early cooling, accurate sizing and the right amount of fluid decide most outcomes.</p>
<div class="glance">
<div><h4>First aid</h4><p>Stop burning; <b>cool running water for 20 minutes</b> (up to 3 hours after); remove jewellery; cover with cling film; keep the patient warm.</p></div>
<div><h4>Airway</h4><p>Facial burns, singed nasal hair, soot, hoarse voice, stridor, enclosed-space fire: <b>early airway assessment</b>.</p></div>
<div><h4>Size</h4><p>Rule of nines or palm (1%); count only partial and full thickness.</p></div>
<div><h4>Fluids (15% TBSA or more)</h4><p>${dr("ringer_lactate", "Ringer's lactate")}: Parkland 4 mL × kg × %TBSA (STG), half in 8 h; titrate to urine 0.5 mL/kg/h.</p></div>
<div><h4>Pain</h4><p>${dr("morphine")} IV titrated; ${dr("paracetamol")}.</p></div>
<div><h4>Refer</h4><p>Over 15% TBSA, full thickness, face/hands/feet/genitals/joints, circumferential, inhalation, electrical, chemical (STG).</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §1.9 gives depth by degree, the rule of nines, Parkland at 4 mL/kg/%, an analgesia table, one antibiotic "by availability", tetanus prophylaxis, silver sulfadiazine, and referral criteria. International burn guidance (WHO, ISBI) <b>does not recommend routine systemic antibiotics</b> for burns: treat infection when it appears. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types and depth", html: `
${tbl(["Depth (STG degree)", "Appearance", "Healing"], [
["Superficial (1st)", "Red, dry, painful, no blisters", "Days; not counted in TBSA"],
["Superficial partial (2nd)", "Red, moist, blisters, very painful, blanches", "Under 2–3 weeks with little scarring"],
["Deep partial (3rd in STG)", "Pale, mottled, less painful, does not blanch", "Over 3 weeks; often needs grafting"],
["Full thickness (4th in STG)", "White, waxy, leathery or charred, painless", "Needs excision and grafting"]])}
<p>Burn types: flame, scald, contact, electrical (deep damage hidden under small skin wounds; arrhythmia risk), chemical (keep irrigating), and inhalation injury.${r(1)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Why large burns cause shock", [
F.s("Burned skin releases inflammatory mediators"), F.a,
F.s("Capillaries leak everywhere (burns over about 15–20% TBSA)"), F.a,
F.d("Fluid shifts out of the circulation in the first 24 hours"), F.a,
F.b([["Under-resuscitation", F.e("Burn shock, AKI, deeper burns")], ["Over-resuscitation", F.e("Oedema, compartment syndromes, lung failure")]]), F.a,
F.ok("Measured fluids titrated to urine output")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (ATLS 10, ISBI, WHO)", "This guide"], [
["Fluid formula", "Parkland 4 mL/kg/%TBSA", "ATLS: start 2 mL/kg/% adults, 3 mL/kg/% children, then titrate", "Calculator offers both; titrate to urine output either way " + LB.loc()],
["Antibiotics", "One antibiotic by availability", "No routine systemic prophylaxis; treat proven infection", "No routine antibiotics"],
["Dressings", "Silver sulfadiazine", "Simple non-adherent dressings for superficial; silver products for deep", "Match dressing to depth"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>ABCDE:</b> airway (inhalation injury), breathing (circumferential chest burns restrict breathing), circulation, disability, exposure (keep warm).</li>
<li>History: mechanism, time, enclosed space, chemicals or electricity, other injuries, tetanus status, weight.</li>
<li>Estimate TBSA (rule of nines; palm 1% for scattered burns) and depth.</li></ul>
${box("red", "Danger signs", `<ul><li>Hoarseness, stridor, soot in mouth, facial burns, enclosed-space fire</li><li>Circumferential burns of limbs or chest</li><li>Carbon monoxide: headache, confusion (pulse oximetry is falsely normal)</li><li>Electrical injury: arrhythmias, dark urine</li></ul>`)}
<h3>The typical patient</h3>
<p>A 42-year-old woman, 55 kg, fell against a bukhari 2 hours ago. Her whole right arm and the front of her trunk have blistered and white patches. <b>This is a major burn of about 27% TBSA</b> (arm 9% + front of trunk 18%): Parkland gives 5,940 mL Ringer's lactate in 24 hours, 2,970 mL by 8 hours after the burn — about 495 mL/hour for the next 6 hours, adjusted to urine output. She needs analgesia, a catheter, and referral to a burns unit.</p>
` },

{ id: "ddx", title: "Associated injuries and pitfalls", html: `
${tbl(["Consider", "Why"], [["Carbon monoxide or cyanide poisoning", "Enclosed fires; give 100% oxygen"], ["Trauma from falls or explosions", "Primary survey"], ["Non-accidental injury, self-harm", "Pattern and story"], ["Seizure or intoxication causing the burn", "History"]])}
` },

{ id: "invest", title: "Investigations", html: `
<p>Small burns: none. Major burns: FBC, electrolytes, creatinine, glucose, group and save; blood gas with carboxyhaemoglobin if smoke exposure; ECG and CK after electrical injury; urine for myoglobin.${r(2)}</p>
` },

{ id: "staging", title: "Area and fluid tool", html: `
<div class="calc" data-calc="burnfluid"></div>
` },

{ id: "manage", title: "Management", html: `
<ol><li><b>First aid:</b> cool running water 20 minutes; never ice; chemical burns: irrigate for at least 30 minutes; electrical: switch off the source first.</li>
<li><b>Airway:</b> early intubation by an experienced person if inhalation injury threatens the airway (swelling worsens over hours).</li>
<li><b>Oxygen:</b> 100% if smoke exposure.</li>
<li><b>Fluids:</b> 15% TBSA or more: Ringer's lactate by Parkland (from the time of the burn), titrated to urine 0.5 mL/kg/hour; catheter.</li>
<li><b>Analgesia:</b> ${dr("morphine")} 0.1 mg/kg IV titrated; ${dr("paracetamol")} 1 g; avoid NSAIDs in major burns (kidneys).</li>
<li><b>Wound care:</b> clean, deroof large blisters, simple non-adherent dressing for superficial burns; ${dr("silver_sulfadiazine")} for deep burns; elevate limbs.</li>
<li><b>Escharotomy</b> for circumferential full-thickness burns causing limb ischaemia or restricted breathing (by trained staff).</li>
<li><b>Tetanus</b> prophylaxis; nutrition (high protein, early feeding); DVT prophylaxis in major burns.</li>
<li><b>Antibiotics</b> only for infection (fever with spreading redness, wound change, sepsis); ${dr("cloxacillin")} for cellulitis per STG.</li>
<li><b>Refer</b> per STG criteria.</li></ol>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("ringer_lactate"), "Parkland 4 mL/kg/%TBSA in 24 h (half in 8 h)", "Titrate to urine"],
[dr("morphine"), "0.1 mg/kg IV, titrated", "Major burns"],
[dr("paracetamol"), "1 g 6–8-hourly", "STG table"],
[dr("silver_sulfadiazine"), "1% cream daily", "Deep burns"],
[dr("cloxacillin"), "500 mg 6-hourly", "Infection only"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Older adults, heart or kidney disease:</b> careful fluids, earlier referral.</li><li><b>Pregnancy:</b> resuscitate the mother; obstetric review.</li><li><b>Epilepsy:</b> burns from fits near fires are common: seizure control and stove safety.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [["Long transfer with a major burn", "Start fluids, catheter, analgesia, keep warm, document times", "Burn shock develops within hours"], ["Electrical burn with small skin wounds", "ECG, CK, urine; admit", "Deep muscle injury"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Burn shock, AKI, sepsis, inhalation lung injury, compartment syndrome, contractures, hypertrophic scars and psychological trauma. Mortality rises with age, TBSA and inhalation injury. Early excision, grafting, physiotherapy and splinting reduce disability.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "What to tell the patient", `<ul><li>Keep dressings clean and dry; return for dressing changes.</li><li>Moisturise healed skin; protect from sun; do the stretching exercises to prevent tight scars.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fever, spreading redness, pus or bad smell</li><li>Increasing pain or swelling</li></ul>`)}
<p>Prevention: stove guards, keeping children away from bukharis and hot liquids, safe butter lamps, electrical safety.</p>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Rule of nines", src: "images/rule-of-nines.svg", mod: "Diagram", ctx: "Estimating burn size", loc: "Body regions", find: "Head 9%, each arm 9%, front and back of trunk 18% each, each leg 18%, perineum 1%", interp: "Use for adults; children need age-adjusted charts (larger head, smaller legs)", by: "Rocuronium Bromide", page: "https://commons.wikimedia.org/wiki/File:Wallace_Rule_of_Nines.svg", lic: "CC0" })}
${fig({ title: "Deep partial-thickness burn", src: "images/burn-deep-partial.png", mod: "Clinical photograph", ctx: "Burn depth", loc: "Skin", find: "Pale, mottled areas that do not blanch", signs: "Deep partial thickness", interp: "Likely to need surgery; refer", by: "Baedr-9439", page: "https://commons.wikimedia.org/wiki/File:Deep-partial-thickness-burn.png", lic: "CC0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Burn arrival", [
F.s("Stop burning, cool 20 min, ABCDE, oxygen if smoke"), F.a,
F.s("TBSA and depth; weigh"), F.a,
F.b([["Under 15%", F.ok("Oral fluids, analgesia, dressings, review")], ["15% or more", F.s("Ringer's lactate (Parkland), catheter, analgesia")]]), F.a,
F.e("Referral criteria met → burns unit")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>Cooling helps up to 3 hours after the burn.</li><li>Fluid formula time starts from the burn, not from arrival.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [["Counting simple redness in TBSA", "Too much fluid", "Partial and full thickness only"], ["Toothpaste, butter, ice", "Infection, deeper burns", "Cool water"], ["Routine antibiotics", "Resistance", "Treat infection only"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the Parkland formula?", "4 mL × weight (kg) × %TBSA of Ringer's lactate in 24 hours, half in the first 8 hours from the burn.")}
${qa("Intern/MO", "Urine output target in adult burns?", "0.5 mL/kg/hour (about 30–50 mL/hour).")}
${qa("Intern/MO", "Signs of inhalation injury?", "Facial burns, singed nasal hair, soot in the mouth, hoarseness, stridor, enclosed-space fire.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">ISBI Practice Guidelines Committee. ISBI practice guidelines for burn care. <i>Burns</i> 2016;42:953–1021. <a href="https://doi.org/10.1016/j.burns.2016.05.013" target="_blank" rel="noopener">doi:10.1016/j.burns.2016.05.013</a></li>
<li id="ref-2">American College of Surgeons. Advanced Trauma Life Support (ATLS), 10th ed. Chicago: ACS; 2018 (thermal injuries).</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.9 Burns.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [["Bhutan STG", "<span class='pass'>Verified</span>", "§1.9 via the app's STG page"], ["Fluids and referral", "<span class='pass'>Checked</span>", "ATLS 10, ISBI 2016"]], "qc")}
` }
]
});
