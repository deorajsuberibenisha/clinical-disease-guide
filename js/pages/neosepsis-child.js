/* Neonatal sepsis and possible serious bacterial infection in young infants (0–59 days) */
registerPage({
id: "neosepsis-child",
title: "Neonatal Sepsis & Serious Infection in Young Infants",
subtitle: "Newborns hide infection: recognise the WHO danger signs, start ampicillin and gentamicin within the hour, keep the baby warm and fed, and stop antibiotics when cultures are negative",
age: "Newborns (0–59 days)", specs: ["neo", "nicu", "paeds", "id"],
keywords: ["neonatal sepsis", "newborn sepsis", "early-onset sepsis", "late-onset sepsis", "possible serious bacterial infection", "PSBI", "young infant", "ampicillin gentamicin", "neonatal meningitis", "omphalitis", "hypothermia newborn", "maternal fever", "prolonged rupture of membranes", "IMNCI young infant"],
related: ["sepsis-child", "meningitis-child", "neojaundice-child", "bronchiolitis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Infection is one of the main reasons newborns die in South Asia. Babies rarely show fever or a clear source; instead they stop feeding, become quiet, breathe fast or get cold. Treat early on clinical signs and refine later.</p>
<div class="glance">
<div><h4>WHO danger signs (any one)</h4><ul><li>Not feeding well</li><li>Convulsions</li><li>Moves only when stimulated</li><li>Breathing 60/min or more</li><li>Severe chest indrawing</li><li>Temperature 37.5 °C or more, or under 35.5 °C</li></ul></div>
<div><h4>Early-onset risk</h4><p>Maternal fever, foul-smelling liquor, membranes ruptured over 18 hours, preterm labour.</p></div>
<div><h4>Antibiotics first</h4><p>${dr("ampicillin")} 50 mg/kg + ${dr("gentamicin")} 5 mg/kg (3 mg/kg under 2 kg in week 1) IV/IM, within 1 hour.</p></div>
<div><h4>Meningitis</h4><p>Ampicillin 100 mg/kg + ${dr("cefotaxime")}; at least 14 days.</p></div>
<div><h4>Supportive care</h4><p>Warmth (skin-to-skin), glucose, feeding, oxygen if SpO₂ under 90%.</p></div>
<div><h4>Stop early when safe</h4><p>Negative cultures and a well baby at 36–48 hours: stop antibiotics.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan Emergency Medicine Clinical Guidelines booklet (2018, ch.8A) gives the treat-for-sepsis criteria, the maternal-risk rule and the ampicillin intervals used here. Neonatal units with blood culture are at the national and regional referral hospitals; district hospitals start treatment and refer. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types, organisms and risk factors", html: `
${tbl(["Type", "Timing", "Usual organisms", "Risk factors"], [
["<b>Early-onset</b>", "First 72 hours", "Group B streptococcus, E. coli, Klebsiella, Listeria", "Maternal fever, chorioamnionitis, membranes over 18 hours, preterm birth"],
["<b>Late-onset</b>", "After 72 hours to 59 days", "Klebsiella, Staphylococcus aureus, coagulase-negative staph, Acinetobacter (hospital); pneumococcus, E. coli (community)", "Prolonged hospital stay, lines, preterm, poor cord care, bottle feeding"]])}
<p>In South Asian neonatal units, gram-negative organisms resistant to ampicillin and gentamicin are increasingly common; local culture data should guide second-line choices.${r(3)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Why newborns are vulnerable", [
F.s("Immature immunity: low neutrophil reserve, little maternal IgG if preterm, weak complement"), F.a,
F.s("Bacteria from the birth canal (early) or the environment and staff hands (late)"), F.a,
F.d("Bloodstream infection, often without a focus"), F.a,
F.b([["Brain", F.e("Meningitis (in up to a quarter of culture-positive sepsis)")], ["Circulation", F.e("Shock, acidosis")], ["Lungs", F.e("Pneumonia, apnoea")]]), F.a,
F.ok("Early antibiotics, warmth, glucose and feeding save most babies")])}
` },

{ id: "conflicts", title: "Where guidelines differ", html: `
${tbl(["Topic", "Bhutan EM booklet 2018", "WHO", "This guide"], [
["First-line antibiotics", "Ampicillin + gentamicin; cloxacillin for skin sources", "Ampicillin (or benzylpenicillin) + gentamicin", "Same " + LB.loc()],
["Gentamicin dose", "Table row incomplete in available text", "Week 1: 5 mg/kg (3 mg/kg if LBW) daily; weeks 2–4: 7.5 mg/kg daily", "WHO doses"],
["Referral not possible", "—", "PSBI: gentamicin IM + oral amoxicillin for 7 days", "Acceptable when the family cannot reach hospital"],
["Fever threshold", "Axillary 37.5 °C", "37.5 °C or more", "Same"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Sign", "Why it matters"], [
["Poor feeding after feeding well", "The most common early sign"],
["Lethargy, floppiness, moves only when stimulated", "Severe illness"],
["Fast breathing, grunting, chest indrawing, apnoea", "Pneumonia or sepsis"],
["Temperature instability (high or low)", "Preterm babies get cold rather than hot"],
["Convulsions, bulging fontanelle, high-pitched cry", "Meningitis"],
["Jaundice, abdominal distension, vomiting", "Sepsis, NEC, UTI"],
["Mottled skin, capillary refill over 3 seconds", "Shock"],
["Umbilical redness spreading to skin, pustules", "Omphalitis, skin infection"]])}
<h3>The typical patient</h3>
<p>A 6-day-old boy, 2.9 kg, from Tsirang has stopped breastfeeding since this morning and is sleepy. Temperature 38.2 °C, breathing 68/min with mild chest indrawing, capillary refill 3 seconds. His mother had a fever in labour. <b>This is possible serious bacterial infection (late early-onset sepsis)</b>: poor feeding, fever and fast breathing in the first week with a maternal risk factor. He needs blood culture if possible, glucose, ampicillin 145 mg every 12 hours and gentamicin 14.5 mg daily, warmth and NG feeds, and a lumbar puncture once stable.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Clues", "Test"], [
["Hypoglycaemia", "Jittery, floppy, poor feeding", "Glucose"],
["Hypothermia from cold exposure", "Cold room, poor wrapping", "Rewarm; still treat if unwell"],
["Congenital heart disease (duct-dependent)", "Collapse at days 3–14, weak femoral pulses, cyanosis", "Pulses, SpO₂ pre/post-ductal, echo"],
["Inborn error of metabolism", "Vomiting, coma, acidosis after feeds begin", "Ammonia, glucose, gas"],
["Transient tachypnoea of the newborn", "First hours after caesarean, otherwise well", "Observation"],
["Birth asphyxia", "Low Apgar, seizures in first day", "History"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Glucose", "Hypoglycaemia", "Treat if under 2.6 mmol/L", "Essential"],
["<b>Blood culture</b>", "Organism and sensitivity", "Before antibiotics, but never delay them", "Essential where available"],
["Lumbar puncture", "Meningitis", "In all culture-positive babies and those with neurological signs, once stable. CSF WBC 20/mm³ or more (under 7 days) or 10/mm³ or more (7 days or older) suggests meningitis (Bhutan EM booklet)", "Recommended"],
["FBC, CRP", "Support decisions", "Normal results early do not exclude sepsis; serial CRP helps stopping", "Recommended"],
["Urine culture (late-onset)", "UTI", "Suprapubic or catheter sample", "Selected"],
["Chest X-ray", "Pneumonia", "—", "If respiratory signs"]])}
` },

{ id: "staging", title: "Dose and fluid tool", html: `
<div class="calc" data-calc="neosepsis"></div>
<h3>Refer</h3>
<ul><li>Any danger sign: start antibiotics, keep warm, give expressed breast milk by cup or NG tube, and refer to a neonatal unit with the mother.</li><li>If the family cannot go: the WHO PSBI outpatient regimen with daily review.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. First hour</h3>
<ol><li><b>Warmth:</b> skin-to-skin or radiant warmer; target 36.5–37.5 °C.</li>
<li><b>Airway and breathing:</b> oxygen if SpO₂ under 90%; bag-mask for apnoea.</li>
<li><b>Circulation:</b> shock (cold, mottled, CRT over 3 seconds): 10 mL/kg 0.9% saline over 10–20 minutes, reassess, repeat once.</li>
<li><b>Glucose:</b> if under 2.6 mmol/L, 2 mL/kg 10% dextrose IV, then maintenance.</li>
<li><b>Antibiotics:</b> ${dr("ampicillin")} 50 mg/kg (100 mg/kg if meningitis) every 12 hours in week 1, every 8 hours after; ${dr("gentamicin")} 5 mg/kg once daily in week 1 (3 mg/kg if under 2 kg), 7.5 mg/kg from day 8. Skin or umbilical source: ${dr("cloxacillin")} 50 mg/kg.${r(1, 2)}</li></ol>

<h3>B. Meningitis or failure to improve in 48 hours</h3>
<ul><li>${dr("cefotaxime")} 50 mg/kg (every 12 hours if preterm in week 1, every 8 hours in term babies in week 1, every 6 hours after) with ampicillin; switch to culture-guided treatment (meropenem for resistant gram-negatives in NICU).</li>
<li>Avoid ceftriaxone in jaundiced or premature neonates and never with IV calcium.</li></ul>

<h3>C. Supportive care</h3>
<ul><li>Fluids by day of life (60 mL/kg on day 1 rising to 150 mL/kg by day 5–7) as 10% dextrose, with electrolytes from day 3; start expressed breast milk by NG tube as soon as possible.</li>
<li>Monitor temperature, glucose, breathing, perfusion and urine output; watch for jaundice.</li></ul>

<h3>D. Duration</h3>
<ul><li>Cultures negative and baby well at 36–48 hours: <b>stop antibiotics</b>.</li>
<li>Culture-positive or clinical sepsis: 7–10 days. Meningitis: at least 14 days (21 for gram-negative). Osteomyelitis: 3–6 weeks.</li></ul>

<h3>E. Prevention</h3>
<ul><li>Clean birth and cord care (chlorhexidine where umbilical infection is common), early and exclusive breastfeeding, kangaroo care, hand hygiene in neonatal units, intrapartum antibiotics for maternal fever or GBS risk.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Interval"], [
[dr("ampicillin"), "50 mg/kg (100 mg/kg in meningitis)", "12-hourly in week 1, 8-hourly after"],
[dr("gentamicin"), "Week 1: 5 mg/kg (3 mg/kg if under 2 kg); 8 days or older: 7.5 mg/kg", "Once daily"],
[dr("cefotaxime"), "50 mg/kg", "12-hourly preterm week 1; 8-hourly term week 1; 6-hourly after"],
[dr("cloxacillin"), "50 mg/kg", "12-hourly week 1, 8-hourly after"],
[dr("dextrose"), "10%: 2 mL/kg bolus for hypoglycaemia; maintenance by day of life", "—"]])}
` },

{ id: "populations", title: "Preterm and low-birthweight babies", html: `
<ul><li>Hypothermia, apnoea and hypoglycaemia are commoner than fever; lower doses of gentamicin in week 1; gentamicin levels where available.</li>
<li>Late-onset sepsis in NICU: think of lines, resistant organisms and fungi.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Well baby, mother with fever in labour", "Observe closely for 48 hours; treat if any sign or two maternal risk factors (Bhutan EM booklet)", "Avoid both missed sepsis and unnecessary antibiotics"],
["Family refuses referral", "WHO PSBI regimen with daily follow-up", "Better than no treatment"],
["Still unwell at 48 hours on first-line drugs", "Cultures, LP, switch to cefotaxime or per culture", "Resistance"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Septic shock, meningitis with hearing loss, hydrocephalus and developmental delay, NEC, DIC. Mortality is highest in preterm babies and with gram-negative or resistant organisms. Babies who had meningitis need hearing and developmental follow-up.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "What to tell parents", `<ul><li>"Newborns show infection by feeding poorly or becoming sleepy. The injections treat the infection; keeping your baby warm and fed helps them recover."</li><li>Keep the cord clean and dry; breastfeed often.</li></ul>`)}
${box("red", "Bring your baby back at once if", `<ul><li>Not feeding, very sleepy or floppy</li><li>Fast or difficult breathing, fits</li><li>Too hot or too cold</li><li>Redness spreading around the cord</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Omphalitis", src: "images/omphalitis.svg", mod: "Illustration", ctx: "Umbilical cord infection", loc: "Umbilical stump", find: "Redness and swelling spreading onto the abdominal skin around the cord", signs: "Omphalitis", interp: "A source of neonatal sepsis: IV cloxacillin plus gentamicin; cord care prevents it", by: "Hariadhi", page: "https://commons.wikimedia.org/wiki/File:Omphalitis_by_hariadhi.svg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Young infant (0–59 days) who is unwell", [
F.d("Any danger sign?"), F.a,
F.b([["Yes", F.e("Glucose, warmth, culture if possible, ampicillin + gentamicin within 1 h, refer")], ["No", F.s("Feeding advice, local infection care, review in 2 days")]]), F.a,
F.d("At 36–48 h: cultures negative and baby well?"), F.a,
F.b([["Yes", F.ok("Stop antibiotics")], ["No", F.s("Continue 7–10 days; LP; adjust to culture")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Poor feeding is a danger sign.</b></li>
<li>A cold baby can be septic.</li>
<li>Check glucose in every sick newborn.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for fever", "Late treatment", "Treat on WHO signs"],
["Adult or child gentamicin intervals", "Toxicity", "Neonatal once-daily dosing by age and weight"],
["Ceftriaxone with calcium infusions", "Fatal precipitates", "Use cefotaxime in neonates"],
["Continuing antibiotics despite negative cultures", "Resistance, NEC, fungal infection", "Review at 36–48 h"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name four WHO danger signs in a young infant.", "Not feeding well, convulsions, moving only when stimulated, breathing 60/min or more, severe chest indrawing, temperature 37.5 °C or more or under 35.5 °C.")}
${qa("Intern/MO", "Dose ampicillin and gentamicin for a 3 kg, 4-day-old baby.", "Ampicillin 150 mg every 12 hours; gentamicin 15 mg once daily.")}
${qa("Specialist", "When can antibiotics be stopped?", "At 36–48 hours if blood cultures are negative and the baby is clinically well.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">World Health Organization. Pocket book of hospital care for children, 2nd ed. Geneva: WHO; 2013 (chapter 3, problems of the neonate and young infant). <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-2">World Health Organization. Managing possible serious bacterial infection in young infants when referral is not feasible. Geneva: WHO; 2015. <a href="https://www.who.int/publications/i/item/9789241509268" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">World Health Organization. The WHO AWaRe antibiotic book. Geneva: WHO; 2022 (sepsis in neonates). <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Emergency Medicine Clinical Guidelines booklet 2018, ch.8A Neonatal sepsis; via Bhutan Clinical Reference app (Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Doses", "<span class='pass'>Checked</span>", "WHO Pocket Book 2013; Bhutan EM booklet ampicillin intervals"],
["Bhutan gentamicin table row", "<span class='flag'>Incomplete source</span>", "WHO doses used"],
["Local resistance data", "<span class='flag'>Not available</span>", "Second-line choice should follow unit culture data"]], "qc")}
` }
]
});
