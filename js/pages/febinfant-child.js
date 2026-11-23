/* Fever in young infants (AAP 2021, NICE NG143, WHO PSBI) */
registerPage({
id: "febinfant-child",
title: "Fever in Young Infants (Under 3 Months)",
subtitle: "A fever of 38 °C or more in a baby under 3 months is serious until proven otherwise: assess appearance, test urine and blood, decide on lumbar puncture by age, and start antibiotics early when in doubt",
age: "Infants 0–90 days", specs: ["paeds", "neo", "id", "emerg"],
keywords: ["febrile infant", "fever neonate", "serious bacterial infection", "UTI infant", "lumbar puncture", "AAP 2021", "procalcitonin", "PSBI", "possible serious bacterial infection", "young infant sepsis"],
related: ["neosepsis-child", "uti-child", "meningitis-child", "sepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Young infants cannot localise infection. About 1 in 10 febrile infants has a bacterial infection — mostly UTI, sometimes bacteraemia or meningitis.</p>
<div class="glance">
<div><h4>Under 22 days</h4><p>Full work-up including LP; admit; IV antibiotics.</p></div>
<div><h4>22–60 days</h4><p>Urine, blood culture, markers; LP by markers (AAP).</p></div>
<div><h4>Ill-appearing</h4><p>Any age: full work-up + antibiotics now.</p></div>
<div><h4>Doses</h4><p>${dr("ampicillin")} + ${dr("gentamicin")} (≤28 d) / ${dr("ceftriaxone")} (over 28 d).</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan uses WHO PSBI (possible serious bacterial infection) criteria at health centres: any young infant with fever 37.5 °C+ and danger signs gets pre-referral IM gentamicin + ampicillin/amoxicillin and referral. Procalcitonin is limited to referral hospitals; CRP is widely available. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Infection", "Notes"], [["UTI", "Commonest bacterial cause (E. coli)"], ["Bacteraemia", "GBS, E. coli, Listeria (rare), S. aureus"], ["Meningitis", "Highest risk under 28 days"], ["HSV", "First 3 weeks; vesicles, seizures, raised ALT"], ["Viral", "Most common overall (enterovirus, RSV, influenza)"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Young infant", [F.s("Immature immunity, maternal-acquired organisms"), F.a, F.s("Non-specific signs"), F.e("Rapid progression to sepsis/meningitis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "AAP 2021", "NICE NG143", "This guide"], [["LP 29–60 days", "Not if markers normal", "Under 1 month all; 1–3 months if unwell or markers raised", "AAP where markers available " + LB.loc()], ["Home observation", "Possible 22–28 d if all low risk", "No", "Admit in remote settings"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Appearance (colour, tone, cry, feeding, responsiveness), temperature (rectal/axillary 38 °C+), perfusion, fontanelle, rash, jaundice.</li><li>WHO danger signs: not feeding, convulsions, fast breathing 60+, severe chest indrawing, temperature 37.5+ or under 35.5, movement only when stimulated.</li></ul><h3>The typical patient</h3><p>A 5-week-old (4.2 kg) in Paro has fever 38.6 °C for 12 hours, feeding a little less, looks well. Urine dipstick positive. <b>Febrile infant with probable UTI</b>: urine culture, blood culture, CRP; if markers normal LP not required (AAP); ceftriaxone 210 mg IV/IM then oral cefixime; ultrasound kidneys.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Overwrapping", "Recheck after unwrapping (still treat as febrile if 38+)"], ["Post-vaccine fever", "Within 48 h of vaccines, well — still assess under 8 weeks"], ["Dehydration fever", "Poor breastfeeding, weight loss"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Urinalysis + culture (catheter/suprapubic), blood culture, FBC, CRP ± procalcitonin, LP by age/markers, chest X-ray if respiratory signs, HSV PCR if risk.</p>` },
{ id: "staging", title: "AAP 2021 tool", html: `<div class="calc" data-calc="febinfant"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Under 22 days or ill: admit, full work-up, ampicillin + gentamicin (or + cefotaxime if meningitis), aciclovir if HSV risk.</li><li>22–28 days: admit; antibiotics if markers abnormal or LP not possible.</li><li>29–60 days: low risk — no LP/antibiotics with 24–36 h review; UTI — ceftriaxone then oral cefixime 10 days.</li><li>PSBI at health centres: pre-referral gentamicin 5 mg/kg IM + amoxicillin/ampicillin; refer.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ampicillin"), "50 mg/kg 8–12-hourly", "≤28 days"], [dr("gentamicin"), "5 mg/kg daily", "≤28 days"], [dr("cefotaxime"), "50 mg/kg 8–12-hourly", "Meningitis"], [dr("ceftriaxone"), "50–100 mg/kg daily", "Over 28 days"], [dr("cefixime"), "8 mg/kg/day", "Oral UTI step-down"], [dr("aciclovir"), "20 mg/kg 8-hourly", "HSV"]])}` },
{ id: "populations", title: "Preterm infants", html: `<p>Excluded from AAP pathway — manage as high risk.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["LP unsuccessful", "Treat with meningitic doses; retry later"], ["Family lives hours away", "Admit for observation"]])}` },
{ id: "complications", title: "Complications", html: `<p>Meningitis sequelae, sepsis, death; renal scarring after UTI.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review cultures at 24–36 h; renal ultrasound after first febrile UTI under 6 months.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Infant under 3 months, 38 °C+", [F.d("Ill-appearing or under 22 days?"), F.a, F.b([["Yes", F.e("Full work-up + LP + IV antibiotics")], ["No", F.s("Urine, blood culture, CRP/PCT")]]), F.a, F.ok("LP and antibiotics by markers and age")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Sending home a febrile neonate", "Missed meningitis", "Admit under 28 days"], ["Bag urine for culture", "Contamination", "Catheter/SPA"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Commonest serious bacterial infection in febrile infants?", "Urinary tract infection.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Pantell RH, Roberts KB, Adams WG, et al. Evaluation and management of well-appearing febrile infants 8 to 60 days old. Pediatrics. 2021;148:e2021052228. <a href="https://doi.org/10.1542/peds.2021-052228" target="_blank" rel="noopener">doi</a></li><li id="ref-2">World Health Organization. Managing possible serious bacterial infection in young infants when referral is not feasible. Geneva: WHO; 2015.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
