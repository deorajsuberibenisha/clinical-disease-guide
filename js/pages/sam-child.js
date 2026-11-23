/* Severe acute malnutrition */
registerPage({
id: "sam-child",
title: "Severe Acute Malnutrition — Children",
subtitle: "Recognise with MUAC, weight-for-height or oedema; stabilise gently with the WHO ten steps; then feed for catch-up growth, at home with RUTF wherever possible",
age: "Children 6–59 months (and young infants)", specs: ["paeds", "picu", "ph"],
keywords: ["severe acute malnutrition", "SAM", "malnutrition", "marasmus", "kwashiorkor", "oedematous malnutrition", "MUAC", "wasting", "F-75", "F-100", "RUTF", "ReSoMal", "appetite test", "WHO ten steps", "refeeding", "stunting"],
related: ["ge-child", "anaemia-child", "pneumonia-child", "tb-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children with severe acute malnutrition die of hypoglycaemia, hypothermia, infection and fluid overload, often in the first days in hospital. The WHO ten steps reverse this: careful, slow, warm, and frequent.</p>
<div class="glance">
<div><h4>Diagnose (6–59 months)</h4><ul><li><b>MUAC under 115 mm</b></li><li>Weight-for-height under −3 SD</li><li><b>Oedema of both feet</b></li></ul></div>
<div><h4>Admit if</h4><ul><li>Complications or danger signs</li><li>Fails the RUTF appetite test</li><li>Oedema +++</li><li>Under 6 months</li></ul></div>
<div><h4>First day</h4><p>Glucose, warmth, antibiotics, ReSoMal (not ORS), F-75 2-hourly day and night.</p></div>
<div><h4>Shock</h4><p>15 mL/kg IV over 1 hour only; watch breathing and liver.</p></div>
<div><h4>No iron yet</h4><p>Iron only once gaining weight.</p></div>
<div><h4>Catch-up</h4><p>F-100 or RUTF; aim over 10 g/kg/day weight gain.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan Emergency Medicine booklet (2018) and the JDWNRH OPD handbook follow the WHO approach. Wasting is now uncommon in Bhutan, but stunting and anaemia remain common, and SAM still appears with TB, chronic diarrhoea, disability and social hardship. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions and causes", html: `
${tbl(["Term", "Definition (WHO)"], [
["<b>Severe acute malnutrition</b>", "Weight-for-height/length under −3 SD, or MUAC under 115 mm (6–59 months), or bilateral pitting oedema"],
["Moderate acute malnutrition", "Weight-for-height −3 to −2 SD or MUAC 115–124 mm"],
["Marasmus", "Severe wasting: 'skin and bones', old-man face"],
["Kwashiorkor", "Oedematous malnutrition: oedema, skin peeling, sparse pale hair, enlarged fatty liver"],
["Complicated SAM", "Any danger sign, poor appetite, severe oedema, or medical complication: needs inpatient care"]])}
<p><b>Underlying causes</b> include poor feeding practices, food insecurity, repeated diarrhoea and infection, TB, HIV, congenital heart disease, cerebral palsy and feeding difficulties, and neglect. Treat the cause as well as the malnutrition.${r(1, 2)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Reductive adaptation: why normal treatment harms", [
F.s("Starvation → the body slows down: low metabolic rate, weak heart, small liver capacity"), F.a,
F.s("Cells lose potassium, gain sodium; immune response is blunted (no fever, no pus)"), F.a,
F.b([["Too much fluid or sodium", F.e("Heart failure")], ["Too much protein or calories too fast", F.e("Refeeding syndrome, liver strain")], ["Iron early", F.e("Feeds infection, free radicals")]]), F.a,
F.ok("Stabilise slowly with F-75, then rebuild with F-100 or RUTF")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Older practice", "WHO 2013", "This guide"], [
["Vitamin A", "Routine high dose for all on day 1", "Only if eye signs, measles, or no dose in the past month (F-75/RUTF contain vitamin A)", "WHO 2013 " + LB.loc()],
["Uncomplicated SAM", "Admit all", "Outpatient care with RUTF if appetite test passed", "Outpatient where follow-up is possible"],
["Oral antibiotics", "Co-trimoxazole", "Amoxicillin", "Amoxicillin"],
["Shock fluid", "—", "Ringer's lactate with 5% dextrose or half-strength Darrow's with 5% dextrose, 15 mL/kg/hour", "Same"]])}
` },

{ id: "presentation", title: "Clinical assessment", html: `
${tbl(["Check", "What to look for"], [
["MUAC, weight, length/height, oedema", "Classification; press both feet for 3 seconds"],
["Danger signs", "Lethargy, convulsions, unable to drink, vomiting everything"],
["Hypothermia, hypoglycaemia", "Axillary temperature under 35 °C; glucose under 3 mmol/L"],
["Dehydration and shock", "History of diarrhoea, thirst, sunken eyes (unreliable in SAM); cold hands, weak fast pulse"],
["Infection", "Fast breathing, chest signs, ear discharge, skin lesions, urinary symptoms (often without fever)"],
["Eyes", "Bitot's spots, corneal clouding or ulcer (vitamin A deficiency)"],
["Skin", "Peeling, ulcers, 'flaky paint' dermatosis (kwashiorkor)"],
["Appetite test", "Eats at least one-third of a 92 g RUTF sachet in 30 minutes"]])}
<h3>The typical patient</h3>
<p>A 16-month-old girl from a remote village in Gasa is brought with diarrhoea for 10 days. She weighs 6.2 kg, MUAC 108 mm, no oedema; she is lethargic, temperature 35.2 °C, glucose 2.6 mmol/L, and refuses RUTF. <b>This is complicated SAM (marasmus)</b> with hypothermia, hypoglycaemia and probable infection. She needs 50 mL of 10% glucose now, warming, IV ampicillin and gentamicin, ReSoMal for dehydration, and F-75 every 2 hours by NG tube if needed.</p>
` },

{ id: "ddx", title: "Look for underlying causes", html: `
${tbl(["Cause", "Clue", "Test"], [
["Tuberculosis", "Contact, chronic cough, fever, no weight gain on feeds", "Chest X-ray, gastric aspirate/Xpert, Mantoux"],
["HIV", "Oral thrush, recurrent infection, parental status", "HIV test"],
["Congenital heart disease", "Murmur, breathlessness when feeding", "Examination, echo"],
["Chronic diarrhoea, coeliac disease, worms", "Persistent diarrhoea", "Stool tests"],
["Cerebral palsy, feeding difficulty", "Developmental delay, choking", "Feeding assessment"],
["Neglect", "Social history", "Social support"]])}
` },

{ id: "invest", title: "Investigations", html: `
<p>Most decisions are clinical. Useful tests: glucose (always), haemoglobin, blood film for malaria where relevant, urine dipstick and culture, chest X-ray, HIV test, TB tests, electrolytes if available (low potassium is common; interpret sodium cautiously).${r(1)}</p>
` },

{ id: "staging", title: "Treatment plan tool", html: `
<div class="calc" data-calc="samplan"></div>
` },

{ id: "manage", title: "Management: the WHO ten steps", html: `
${tbl(["Step", "Stabilisation (days 1–7)", "Rehabilitation (weeks 2–6)"], [
["1. Hypoglycaemia", "Treat and prevent: feed 2-hourly day and night", "—"],
["2. Hypothermia", "Skin-to-skin, blankets, warm room", "—"],
["3. Dehydration", "ReSoMal (not standard ORS); IV only for shock", "—"],
["4. Electrolytes", "Potassium and magnesium (in F-75 / mineral mix)", "Continue"],
["5. Infection", "Antibiotics for all", "—"],
["6. Micronutrients", "Folic acid, zinc, copper, vitamin A (if indicated); no iron", "Add iron"],
["7. Cautious feeding", "F-75 130 mL/kg/day (100 if severe oedema)", "—"],
["8. Catch-up growth", "—", "F-100 or RUTF; over 10 g/kg/day"],
["9. Stimulation", "Tender loving care", "Play and stimulation"],
["10. Follow-up", "—", "Prepare for discharge and follow-up"]])}
<h3>Key doses</h3>
<ul><li><b>Hypoglycaemia:</b> 50 mL of 10% ${dr("dextrose")} or sucrose orally/NG; IV 5 mL/kg 10% dextrose if unconscious.</li>
<li><b>Antibiotics:</b> uncomplicated: ${dr("amoxicillin")} 25–40 mg/kg 12-hourly for 5 days. Complicated: ${dr("ampicillin")} 50 mg/kg 6-hourly for 2 days, then amoxicillin 15 mg/kg 8-hourly for 5 days, plus ${dr("gentamicin")} 7.5 mg/kg once daily for 7 days.</li>
<li><b>Dehydration:</b> ${dr("resomal", "ReSoMal")} 5 mL/kg every 30 minutes for 2 hours, then 5–10 mL/kg/hour up to 10 hours.</li>
<li><b>Shock:</b> 15 mL/kg over 1 hour (Ringer's lactate with 5% dextrose or half-strength Darrow's with 5% dextrose); blood 10 mL/kg over 3 hours if no improvement.</li>
<li><b>Feeds:</b> ${dr("f75", "F-75")} then F-100 or RUTF.</li>
<li>${dr("vitamin_a", "Vitamin A")} only with eye signs, measles, or no dose in the past month; ${dr("folic_acid")} 5 mg day 1 then 1 mg; ${dr("zinc")}.</li>
<li><b>Severe anaemia</b> (Hb under 4 g/dL, or under 6 with distress): packed cells 10 mL/kg slowly over 3 hours, furosemide if needed.</li></ul>
<h3>Outpatient care</h3>
<p>Uncomplicated SAM with a good appetite: RUTF (about 150–200 kcal/kg/day), amoxicillin, weekly or fortnightly review of weight, MUAC and oedema. Discharge when MUAC is 125 mm or more or weight-for-height −2 SD or more, with no oedema for 2 weeks.${r(2)}</p>
` },

{ id: "drugs", title: "Medicines and feeds", html: `
${tbl(["Item", "Dose", "Notes"], [
[dr("f75"), "130 mL/kg/day (100 if severe oedema) in 8–12 feeds", "Stabilisation"],
[dr("resomal"), "5 mL/kg/30 min × 2 h, then 5–10 mL/kg/h", "Not standard ORS"],
[dr("amoxicillin"), "25–40 mg/kg 12-hourly × 5 days (uncomplicated)", "—"],
[dr("ampicillin"), "50 mg/kg 6-hourly × 2 days (complicated)", "With gentamicin"],
[dr("gentamicin"), "7.5 mg/kg once daily × 7 days", "—"],
[dr("vitamin_a"), "50,000 / 100,000 / 200,000 IU by age", "Only if indicated"],
[dr("folic_acid"), "5 mg day 1, then 1 mg daily", "—"],
[dr("ferrous"), "Only in rehabilitation, once gaining weight", "Not in stabilisation"]])}
` },

{ id: "populations", title: "Young infants and special situations", html: `
<ul><li><b>Infants under 6 months:</b> admit; support breastfeeding (supplementary suckling technique) and treat the mother; F-75 or diluted F-100 if not breastfed.</li>
<li><b>HIV:</b> start co-trimoxazole prophylaxis and ART after stabilisation.</li>
<li><b>TB:</b> start treatment once stabilised; watch for refeeding and drug interactions.</li>
<li><b>Disability:</b> feeding assessment; thickened feeds, positioning.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Breathing faster and liver bigger during rehydration", "Stop fluids; reassess for overload", "Heart failure kills in SAM"],
["Not gaining weight after 2 weeks", "Check feeding practice, hidden infection (TB, UTI, HIV)", "Most common causes of failure"],
["Child with oedema given standard ORS", "Switch to ReSoMal; watch for heart failure", "Sodium overload"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Hypoglycaemia, hypothermia, sepsis, heart failure from fluids, refeeding syndrome (low phosphate, potassium, magnesium in the first days), corneal ulceration and blindness. With WHO protocols, inpatient mortality falls from 20–30% to under 5%. Long-term: stunting, developmental delay; ongoing nutrition and stimulation matter.</p>
` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "What to tell the family", `<ul><li>"Your child needs special milk or paste in small amounts often, day and night, to recover safely."</li><li>Keep feeding RUTF at home exactly as shown; continue breastfeeding.</li><li>Come for every follow-up visit; bring the child at once if not eating, vomiting, fever, cold or swelling.</li></ul>`)}
<p>Prevention: exclusive breastfeeding for 6 months, good complementary feeding, growth monitoring, immunisation, treatment of diarrhoea with ORS and zinc, deworming, and social support.</p>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Kwashiorkor", src: "images/kwashiorkor.jpg", mod: "Clinical photograph", ctx: "Oedematous malnutrition", loc: "Whole body", find: "Generalised oedema, skin changes, apathy", signs: "Kwashiorkor", interp: "Bilateral oedema alone defines SAM; needs inpatient care if severe or complicated", by: "CDC", page: "https://commons.wikimedia.org/wiki/File:Kwashiorkor_6180.jpg", lic: "Public domain" })}
${fig({ title: "Kwashiorkor skin changes", src: "images/kwashiorkor-skin.jpg", mod: "Clinical photograph", ctx: "Oedematous malnutrition", loc: "Legs", find: "Dark, peeling 'flaky paint' skin", signs: "Kwashiorkor dermatosis", interp: "Skin breaks easily and gets infected: gentle care and antibiotics", by: "Unknown (public domain)", page: "https://commons.wikimedia.org/wiki/File:Kwashiorkor_dermatosis.jpg", lic: "Public domain" })}
</div>
${fig({ title: "Measuring MUAC", src: "images/muac-uganda.jpg", mod: "Photograph", ctx: "Community nutrition screening", loc: "Mid-upper arm", find: "Colour-coded tape around the left mid-upper arm", interp: "Red (under 115 mm) = SAM; yellow (115–124 mm) = moderate", by: "USAID in Africa", page: "https://commons.wikimedia.org/wiki/File:Uganda_Nutrition_(26941720597).jpg", lic: "Public domain" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with possible SAM", [
F.s("MUAC, weight-for-height, oedema"), F.a,
F.d("SAM? Complications, oedema +++, under 6 months, or fails appetite test?"), F.a,
F.b([["Yes", F.e("Inpatient: ten steps, F-75, antibiotics, ReSoMal")], ["No", F.ok("Outpatient: RUTF, amoxicillin, weekly review")]]), F.a,
F.s("Appetite returns, oedema settling → F-100 or RUTF; iron; stimulation"), F.a,
F.ok("Discharge: MUAC 125 mm+ or WFH −2 SD+, no oedema 2 weeks")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Feed 2-hourly day and night</b> from the start: hypoglycaemia and hypothermia come at night.</li>
<li>Usual dehydration signs are unreliable in SAM.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Standard ORS or IV fluids for dehydration", "Sodium overload, heart failure", "ReSoMal; IV only for shock"],
["Iron in the first week", "Worsens infection", "Start in rehabilitation"],
["High-calorie feeds too early", "Refeeding syndrome", "F-75 first"],
["Missing TB or HIV", "Failure to recover", "Test when not improving"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the WHO criteria for SAM in children 6–59 months?", "MUAC under 115 mm, weight-for-height under −3 SD, or bilateral pitting oedema.")}
${qa("Intern/MO", "Why ReSoMal instead of standard ORS?", "Lower sodium and higher potassium: malnourished children retain sodium and are potassium-depleted.")}
${qa("Intern/MO", "When is iron started?", "Only in rehabilitation, once the child is gaining weight.")}
${qa("Specialist", "What shock fluid regimen is used in SAM?", "15 mL/kg over 1 hour of Ringer's lactate with 5% dextrose or half-strength Darrow's with 5% dextrose; blood 10 mL/kg if no improvement.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">World Health Organization. Pocket book of hospital care for children, 2nd ed. Geneva: WHO; 2013 (chapter 7, severe acute malnutrition). <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-2">World Health Organization. Guideline: updates on the management of severe acute malnutrition in infants and children. Geneva: WHO; 2013. <a href="https://www.who.int/publications/i/item/9789241506328" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Ministry of Health, Bhutan. Emergency Medicine Clinical Guidelines booklet 2018 (severe malnutrition); JDWNRH Paediatric OPD handbook B3.7; via Bhutan Clinical Reference app (Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["WHO protocol and doses", "<span class='pass'>Checked</span>", "WHO Pocket Book 2013, WHO 2013 update"],
["F-75/F-100/RUTF availability in Bhutan", "<span class='flag'>Local check</span>", "Confirm current supply"]], "qc")}
` }
]
});
