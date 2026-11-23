/* Malaria — children
   Sources: National Guideline for Diagnosis and Treatment of Malaria in Bhutan, 6th edition 2024 (Protocols A–E, annexures; read in full);
   Bhutan Hospital IMNCI 2024; WHO Guidelines for malaria; WHO Severe malaria 2014; AQUAMAT 2010. */
registerPage({
id: "malaria-child",
title: "Malaria — Children",
subtitle: "In a child with fever from southern Bhutan or across the border, test the same hour; dose chloroquine, primaquine and artemether–lumefantrine by weight or age band; avoid primaquine under 6 months; spot severe malaria (prostration, convulsions, breathing difficulty, severe anaemia, hypoglycaemia) and give artesunate 3 mg/kg if under 20 kg without delay",
age: "Children", specs: ["paeds", "id", "emerg", "ph"],
keywords: ["malaria child", "paediatric malaria", "cerebral malaria child", "severe malaria child", "artesunate 3 mg/kg", "Blantyre coma scale", "chloroquine syrup", "primaquine child", "artemether-lumefantrine child", "severe anaemia malaria", "hypoglycaemia malaria", "congenital malaria"],
related: ["malaria-adult", "dengue-child", "sepsis-child", "meningitis-child", "anaemia-child", "febsz-child", "statusep-child", "afi-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children have little immunity to malaria, and falciparum can turn from "just fever" to coma or severe anaemia within a day. In Bhutan malaria is now rare, so it is easy to forget. Always ask where the child has been, test every unexplained fever from a malaria area, and dose by weight.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever (over 37.5 °C) with no other cause, in a child living in or returning from southern Bhutan below 1,700 m, India or another endemic area.</p></div>
<div><h4>Test</h4><p>Blood film or RDT within 1 hour; RDT positives also need microscopy.</p></div>
<div><h4>P. vivax</h4><p>${dr("chloroquine")} 3 days by age/weight + ${dr("primaquine")} 0.5 mg/kg for 7 days (not under 6 months; G6PD first).</p></div>
<div><h4>P. falciparum</h4><p>${dr("artemether_lumefantrine")} by weight (1–4 tablets × 6 doses) + single primaquine 0.5 mg/kg (not under 6 months). Mixed: AL + 7-day primaquine.</p></div>
<div><h4>Severe</h4><p>${dr("artesunate")} <b>3 mg/kg</b> if under 20 kg (2.4 mg/kg if 20 kg or more) IV/IM at 0, 12, 24 h, then daily; glucose, transfusion, seizure control.</p></div>
<div><h4>Programme</h4><p>Admit for 3 days; DOT; follow-up smears; notify VDCP.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The <b>National Malaria Guideline 2024 (6th edition)</b> gives age-band chloroquine and primaquine doses (Protocol A) and weight-band artemether–lumefantrine (Protocol B). Primaquine is not given to infants under 6 months. Artesunate is 3.0 mg/kg for children under 20 kg. Hypoglycaemia in severe malaria is defined as glucose under 54 mg/dL in children under 5. Chloroquine syrup and dispersible formulations may not be available at every facility: crush tablets, mix with water or sugar, and give by spoon. The <b>Hospital IMNCI (2024)</b> classifies fever with a danger sign as very severe febrile disease, to be tested for malaria in risk areas and given pre-referral treatment. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Who is at risk", html: `
<p>P. vivax and P. falciparum (and mixed infections) occur in Bhutan. Transmission happens only below 1,700 m, mostly April–September. From 2019 to 2023 all active foci were in Sarpang, and 45% of cases were imported. Children of migrant families, children in border towns (Gelephu, Phuentsholing, Samdrup Jongkhar, Samtse), and children returning from India are at greatest risk. Congenital malaria can occur in babies of mothers infected during pregnancy.${r(1)}</p>
${tbl(["Age group", "Special features"], [
["Under 6 months", "Rare but severe; no primaquine; congenital malaria (fever, jaundice, anaemia, splenomegaly in the first weeks)"],
["6 months to 5 years", "Highest risk of severe anaemia, hypoglycaemia, convulsions, respiratory distress (acidosis)"],
["School-age children", "Cerebral malaria more likely; adult-like presentations"]])}
` },

{ id: "patho", title: "Pathophysiology in children", html: `
${F.chart("Why children get severe falciparum malaria", [
F.s("No acquired immunity + fast parasite multiplication"), F.a,
F.b([["Red cell destruction", F.e("Severe anaemia → heart failure")], ["Sequestration in brain", F.e("Coma, convulsions")], ["Metabolic", F.e("Hypoglycaemia, lactic acidosis → deep breathing")]]), F.a,
F.s("Death within hours if untreated")])}
<p>In children, "respiratory distress" in malaria is usually acidotic (deep) breathing from metabolic acidosis and anaemia, not pneumonia. Treat the malaria, give glucose and blood, and avoid fluid overload.${r(2)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan 2024", "WHO", "This guide and why"], [
["Chloroquine dosing", "Age bands (Protocol A)", "10, 10, 5 mg/kg base", "Weight when known (calculator); age band otherwise " + LB.loc()],
["Pv primaquine", "0.5 mg/kg × 7 days, from 6 months", "0.25–0.5 mg/kg × 7–14 days; from 6 months", "Bhutan"],
["Pf single primaquine", "0.5 mg/kg", "0.25 mg/kg", "Bhutan, WHO shown"],
["Artesunate under 20 kg", "3.0 mg/kg", "3.0 mg/kg", "Same"],
["Severe anaemia threshold", "Hb under 7 g/dL", "Hb under 5 g/dL in children (with parasitaemia over 10,000/µL)", "Treat as severe if under 7; transfuse by clinical state"],
["Hypoglycaemia", "Under 54 mg/dL (under 5 years); under 40 older", "Under 40 mg/dL (2.2 mmol/L)", "Bhutan (safer)"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Notes"], [
["Fever, irritability, poor feeding, vomiting", "Often without rigors in young children"],
["Diarrhoea, cough", "May mislead towards gastroenteritis or pneumonia"],
["Pallor, splenomegaly", "Chronic or repeated infection"],
["Febrile convulsions", "Any convulsion with falciparum counts as a danger sign; more than 2 in 24 h is severe malaria"]])}
${box("red", "Severe malaria in children — any one, with a positive test", `<ul><li>Prostration (cannot sit unsupported, or cannot breastfeed if too young to sit)</li><li>Impaired consciousness (Blantyre coma score under 3), more than 2 convulsions in 24 h</li><li>Deep (acidotic) breathing, respiratory distress, SpO₂ under 92%</li><li>Severe anaemia (Hb under 7 g/dL, Bhutan), heart failure</li><li>Hypoglycaemia (under 54 mg/dL if under 5 years)</li><li>Jaundice, dark urine, oliguria, bleeding, shock (SBP under 70 mmHg)</li><li>Parasitaemia over 10%</li></ul>`)}
<h3>The typical child</h3>
<p>An 8-year-old boy (25 kg) from a family of labourers in Samtse has had fever every other day for 5 days, with headache and vomiting once. He is alert and drinking, with a temperature of 38.9 °C and a palpable spleen. The RDT is positive for P. vivax, the film shows vivax trophozoites, Hb is 10.8 g/dL and the G6PD rapid test is normal. <b>This is uncomplicated vivax malaria.</b> He is admitted for 3 days. Chloroquine by weight is 250 mg base (about 1½ tablets) on days 0 and 1 and 125 mg on day 2; the age table (5–8 years) gives 2, 2 and 1 tablets. Primaquine is 12.5 mg (about 1¾ tablets of 7.5 mg) daily for 7 days, continued at home by DOT with his schoolteacher as DOT provider. His parents are told to stop primaquine and return if his urine turns dark.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Test"], [
["Dengue", "Rash, bleeding, rising haematocrit", "NS1/IgM"],
["Scrub typhus", "Eschar, nodes", "IgM; doxycycline or azithromycin"],
["Bacterial meningitis", "Neck stiffness, bulging fontanelle — cannot be told from cerebral malaria clinically", "LP once stable; cover with ceftriaxone"],
["Pneumonia", "Crackles, focal signs", "Chest X-ray"],
["Sepsis, UTI, enteric fever", "Focus, culture", "Cultures"],
["Febrile seizure", "Brief, recovers quickly", "Malaria test in risk areas"],
["Other haemolysis", "G6PD deficiency, haemoglobinopathies", "Film, G6PD"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes"], [
["Thick and thin film; RDT", "Diagnosis, species, density", "Repeat if negative and still febrile"],
["Glucose", "Hypoglycaemia", "On arrival, then 4-hourly in severe malaria"],
["Hb / haematocrit, CBC", "Anaemia, thrombocytopenia", "—"],
["G6PD", "Before 7-day primaquine", "Rapid test"],
["Creatinine, bilirubin, lactate or blood gas", "Severe malaria", "—"],
["Blood culture", "Severe malaria (bacteraemia is common in children)", "Before antibiotics"],
["Lumbar puncture", "Coma or convulsions without clear cause", "When stable"],
["Dried blood spot", "RCDC/NMRL", "Programme requirement"]])}
` },

{ id: "staging", title: "Treatment by weight", html: `
<p>Enter weight, age in months, species, severity and G6PD status.${r(1)}</p>
<div class="calc" data-calc="malariadose"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. P. vivax — chloroquine by age (Bhutan Protocol A; 250 mg tablet = 150 mg base; syrup 50 mg base/5 mL)</h3>
${tbl(["Age", "Day 0", "Day 1", "Day 2", "Primaquine (7.5 mg tablets), daily × 7 days"], [
["Under 1 year", "½ tablet (7.5 mL syrup)", "½ tablet (7.5 mL)", "¼ tablet (3.75 mL)", "0.5 mg/kg — only if over 6 months"],
["1–4 years", "1 tablet (15 mL)", "1 tablet (15 mL)", "½ tablet (7.5 mL)", "0.5 mg/kg"],
["5–8 years", "2 tablets", "2 tablets", "1 tablet", "2 tablets"],
["9–15 years", "3 tablets", "3 tablets", "1½ tablets", "3 tablets"],
["Over 15 years", "4 tablets", "4 tablets", "2 tablets", "4 tablets"]])}
<p>Use weight-based dosing (10, 10 and 5 mg/kg base) for children who are small or large for their age. G6PD deficient: primaquine 0.75 mg/kg once weekly for 8 weeks. If a dose is vomited within 1 hour, repeat it.${r(1)}</p>
<h3>B. P. falciparum — artemether–lumefantrine (Protocol B)</h3>
${tbl(["Weight", "Tablets (20/120 mg) per dose at 0, 8, 24, 36, 48, 60 h", "Primaquine"], [
["Under 15 kg", "1", "Single 0.5 mg/kg on day 0 (not under 6 months)"],
["15–24 kg", "2", "Single 0.5 mg/kg"],
["25–34 kg", "3", "Single 0.5 mg/kg"],
["35 kg or more", "4", "Single 0.5 mg/kg"]])}
<p>Give with milk or food. Crush and mix with water for small children; dispersible tablets where available. Mixed infection: AL + primaquine 0.5 mg/kg daily for 7 days (Protocol C).</p>
<h3>C. Severe malaria</h3>
<ol><li>ABC; recovery position; oxygen if SpO₂ under 92%; glucose now.</li>
<li>${dr("artesunate")} <b>3.0 mg/kg if under 20 kg</b> (2.4 mg/kg if 20 kg or more) IV or IM at 0, 12 and 24 hours, then daily; at least 24 hours of injections, then a full AL course. In AQUAMAT (African children), artesunate reduced mortality by 22.5% compared with quinine.${r(3)}</li>
<li>Pre-referral (PHC or BHU): one IM dose of artesunate and urgent referral, with glucose (sugar solution by mouth or NG if no IV).</li>
<li>Hypoglycaemia (under 54 mg/dL under 5 years): 10% dextrose 2–5 mL/kg, then glucose-containing maintenance fluid; recheck 4-hourly.</li>
<li>Convulsions: diazepam 0.5 mg/kg rectally or 0.3 mg/kg IV, or midazolam (see <a href="#/d/statusep-child">status epilepticus</a>); check glucose.</li>
<li>Severe anaemia: transfuse screened blood (10 mL/kg packed cells or 20 mL/kg whole blood) if Hb under 7 with distress, or under 5.</li>
<li>Fluids: maintenance only, unless the child is dehydrated or in shock. Avoid boluses in severe malaria without shock (FEAST trial harm in febrile children).</li>
<li>Antibiotics (ceftriaxone) if bacterial infection cannot be excluded, especially in coma or shock.${r(1, 2)}</li></ol>
<h3>D. Programme actions</h3>
<ul><li>Admit all confirmed cases for 3 days; DOT for every dose; follow-up smears (Pf day 0, 1, 2, 28; Pv day 0, 1, 2, 7, 28, 3 months, up to 1 year); notify VDCP; dried blood spot to RCDC.</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Test febrile children from risk areas; treat uncomplicated malaria; IM artesunate pre-referral and glucose for severe; refer with a health worker"],
["District hospital", "3-day admission, DOT, severe malaria care, transfusion"],
["Referral hospital (CRRH Gelephu, JDWNRH, ERRH)", "PICU, exchange or repeated transfusion, second-line DHA–PPQ"]])}
` },

{ id: "drugs", title: "Medicines and doses (children)", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("chloroquine"), "10 mg/kg base days 0 and 1, 5 mg/kg day 2 (or age table)", "Bitter: give with sugar; repeat if vomited within 1 h"],
[dr("primaquine"), "0.5 mg/kg daily × 7 days (Pv); single 0.5 mg/kg (Pf)", "Not under 6 months; G6PD; DOT"],
[dr("artemether_lumefantrine"), "1–4 tablets by weight × 6 doses", "With milk or fat"],
[dr("artesunate"), "3.0 mg/kg (under 20 kg); 2.4 mg/kg (20 kg or more)", "IV slow bolus or IM (anterior thigh)"],
[dr("quinine"), "20 mg/kg over 4 h, then 10 mg/kg 8-hourly (max 600 mg/dose, 1,800 mg/day in children)", "Only if no artesunate or artemether; hypoglycaemia"],
["DHA–piperaquine (second line)", "Under 25 kg: DHA 4 mg/kg + PPQ 24 mg/kg daily × 3 days", "Referral hospitals"]])}
` },

{ id: "populations", title: "Special groups", html: `
<ul><li><b>Infants under 6 months:</b> AL or chloroquine by weight; no primaquine. Give vivax radical cure after 6 months of age (repeat G6PD if needed).</li>
<li><b>Congenital malaria:</b> fever, jaundice, anaemia, hepatosplenomegaly in the first weeks in a baby of a mother with malaria in pregnancy; film the baby.</li>
<li><b>Severe acute malnutrition:</b> higher risk of severe malaria and bacteraemia; careful fluids.</li>
<li><b>Sickle cell disease, G6PD deficiency:</b> haemolysis risk; extra care with primaquine.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Child vomits AL", "Repeat if within 1 hour; if repeated vomiting, treat as severe (parenteral artesunate)", "Treatment failure risk"],
["Coma with positive film", "Treat severe malaria; still exclude meningitis and hypoglycaemia", "Co-existing bacterial meningitis"],
["Dark urine on primaquine", "Stop; Hb; transfuse if Hb under 7 (or under 9 with ongoing haemolysis)", "G6PD haemolysis"],
["Fever returns after 1–3 weeks following artesunate, Hb falling", "Post-artesunate delayed haemolysis", "Check Hb weekly for 4 weeks"],
["Parasites persist on day 3", "Report; check adherence; second line", "Possible resistance"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Cerebral malaria in children carries 10–20% mortality, and about 1 in 10 survivors have lasting neurological problems (epilepsy, learning difficulties). Severe anaemia, hypoglycaemia and acidosis are the main killers in young children. Repeated vivax relapses cause chronic anaemia and school absence. Early treatment prevents almost all deaths.${r(2)}</p>
` },

{ id: "followup", title: "Follow-up and prevention", html: `
<ul><li>Follow-up smears and DOT completion; Hb at 2–4 weeks after severe malaria; neurodevelopmental review after cerebral malaria.</li>
<li>Prevention: insecticide-treated nets for all children in risk areas, screens, repellents; screening of returning migrant families.</li></ul>
${box("green", "What to tell the family", `<ul><li>"Give every dose, even when the fever has gone — the last doses stop the malaria coming back."</li><li>If your child vomits within an hour, come back for a repeat dose.</li><li>On primaquine: stop and come back if the urine turns dark, or the child looks pale, yellow or breathless.</li><li>Let your child sleep under a net every night.</li></ul>`)}
${box("red", "Come back the same day if", `<ul><li>Fits, very sleepy or cannot sit</li><li>Fast or deep breathing</li><li>Cannot drink or vomits everything</li><li>Very pale, yellow, or passing dark urine</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "P. falciparum ring forms", src: "images/pf-rings.jpg", mod: "Thin blood film (Giemsa)", ctx: "Febrile child", loc: "Red cells", find: "Small rings, multiple per cell", signs: "P. falciparum", interp: "Any danger sign with Pf: parenteral artesunate", by: "Lukas.S / Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Plasmodium_falciparum_02.jpg", lic: "Public domain" })}
${fig({ title: "P. vivax trophozoites", src: "images/pv-troph.jpg", mod: "Thin blood film (Giemsa)", ctx: "Fever every other day", loc: "Red cells", find: "Enlarged red cells, amoeboid trophozoites, Schüffner's dots", signs: "P. vivax", interp: "Chloroquine plus 7-day primaquine (from 6 months, G6PD normal)", by: "CDC PHIL", page: "https://commons.wikimedia.org/wiki/File:Immature_and_mature_trophozoites_of_the_Plasmodium_vivax_parasite_PHIL_2720_lores.jpg", lic: "Public domain" })}
${fig({ title: "Anopheles mosquito feeding", src: "images/anopheles-feeding.jpg", mod: "Photograph", ctx: "Vector", loc: "Skin", find: "Female Anopheles feeding", signs: "Malaria vector", interp: "Nets every night protect children", by: "CDC / James Gathany", page: "https://commons.wikimedia.org/wiki/File:Anopheles_albimanus_mosquito.jpg", lic: "Public domain" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Febrile child from a malaria area", [
F.s("Test within 1 hour; check glucose if unwell"), F.a,
F.d("Danger sign?"), F.a,
F.b([["Yes", F.e("Artesunate 3 mg/kg (under 20 kg); glucose; refer/PICU")], ["No", F.d("Species")]]), F.a,
F.b([["Pv", F.ok("CQ 3 days + PQ 7 days (over 6 months, G6PD)")], ["Pf/mixed", F.ok("AL by weight + PQ")]]), F.a,
F.s("Admit 3 days; DOT; follow-up smears; notify")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>Deep breathing in a child with malaria is acidosis — think anaemia and hypoglycaemia, not pneumonia.</li>
<li>Check glucose in every child with severe malaria and recheck often, especially on quinine.</li>
<li>A child under 20 kg needs the higher artesunate dose (3 mg/kg).</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating fever without a malaria test in risk areas", "Missed malaria or wrong treatment", "Test first"],
["2.4 mg/kg artesunate in small children", "Underdosing", "3 mg/kg under 20 kg"],
["Primaquine under 6 months", "Haemolysis", "Delay radical cure"],
["Fluid boluses in severe malaria without shock", "Fluid overload, death", "Maintenance fluids only"],
["Missing hypoglycaemia", "Brain injury", "Glucose 4-hourly"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the artesunate dose for a 12 kg child with severe malaria?", "3 mg/kg = 36 mg IV/IM at 0, 12 and 24 h, then daily until able to take oral treatment (at least 24 h), then a full AL course.")}
${qa("Intern/MO", "How many tablets of artemether–lumefantrine per dose for an 18 kg child?", "2 tablets per dose (15–24 kg), at 0, 8, 24, 36, 48 and 60 hours.")}
${qa("Intern/MO", "From what age can primaquine be given?", "6 months (Bhutan 2024); G6PD should be checked before the 7-day course.")}
${qa("Specialist", "Why are fluid boluses avoided in children with severe malaria?", "Fluid boluses in febrile children with impaired perfusion increased mortality (FEAST); severe malaria often has acidosis and anaemia rather than hypovolaemia.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Vector-borne Disease Control Programme, Ministry of Health, Bhutan. National Guideline for Diagnosis and Treatment of Malaria in Bhutan, 6th edition. Gelephu: VDCP, 2024.</li>
<li id="ref-2">World Health Organization. WHO guidelines for malaria. Geneva: WHO (living guideline). <a href="https://www.who.int/publications/i/item/guidelines-for-malaria" target="_blank" rel="noopener">who.int</a>; and Severe malaria. <i>Trop Med Int Health</i> 2014;19 Suppl 1:7–131.</li>
<li id="ref-3">Dondorp AM, Fanello CI, Hendriksen ICE et al. Artesunate versus quinine in the treatment of severe falciparum malaria in African children (AQUAMAT): an open-label, randomised trial. <i>Lancet</i> 2010;376:1647–1657. <a href="https://doi.org/10.1016/S0140-6736(10)61924-1" target="_blank" rel="noopener">doi:10.1016/S0140-6736(10)61924-1</a></li>
<li id="ref-4">Maitland K, Kiguli S, Opoka RO et al. Mortality after fluid bolus in African children with severe infection (FEAST). <i>N Engl J Med</i> 2011;364:2483–2495. <a href="https://doi.org/10.1056/NEJMoa1101549" target="_blank" rel="noopener">doi:10.1056/NEJMoa1101549</a></li>
<li id="ref-5">Ministry of Health, Bhutan. Hospital IMNCI, 3rd edition, 2024; National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan guideline", "<span class='pass'>Read in full</span>", "Protocols A–E"],
["Calculator", "<span class='pass'>Updated</span>", "Bhutan 2024 regimens"],
["Conflicts", "<span class='flag'>Noted</span>", "Pf single PQ dose; severe anaemia threshold"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "3 licensed images"]], "qc")}
` }
]
});
