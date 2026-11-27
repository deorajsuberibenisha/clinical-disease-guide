/* Puerperal (maternal) sepsis. Thin-page upgrade Round 4, 27 Nov 2026 (id, puerperalcalc calculator and related links kept).
   Sources: Bhutan STG 2024 §11.7 Puerperal sepsis (read: onset from ROM/labour to day 42; causes — CS/instrumental delivery, prolonged labour, prolonged
   ROM, multiple VEs, diabetes, anaemia, obesity, meconium; signs — pelvic pain, fever > 38.5 °C, foul discharge, delayed involution, tachypnoea,
   tachycardia, tender uterus; investigations — Hb, CBC, CRP, urine and blood culture, LFT, RFT, USG; IV ampicillin + gentamicin + metronidazole,
   analgesia, refer for evacuation of retained products, pelvic abscess, transfusion, or no improvement in 48 h; drain pelvic abscess);
   Bhutan Midwifery Standards 2018, Life-Saving Standard 5 (read: puerperal pyrexia ≥ 38 °C on 2 occasions 24 h apart excluding first 24 h within
   6 weeks; causes list; ampicillin 1–2 g IV 6-hourly + gentamicin 5 mg/kg/day in 3 divided doses + metronidazole 500 mg IV 8-hourly; evacuate retained
   products after antibiotics; drain abscess; stop parenteral antibiotics after 48 h afebrile, no oral continuation needed; refer if no improvement;
   flowchart — BHU: mild → admit, ampicillin 1 g IV 6-hourly, metronidazole 400 mg TDS, PCM, refer; DH: ampicillin 1 g 6-hourly, metronidazole
   500 mg 8-hourly IV, gentamicin 80 mg 8-hourly if urine output normal, Foley, USG, gentle evacuation, transfuse, refer if no improvement in 48 h);
   Bhutan Quick Guide to Sepsis 2025 (read: women pregnant or within 6 weeks of birth, miscarriage or termination are a high-risk group; NEWS for
   screening); WHO recommendations for prevention and treatment of maternal peripartum infections 2015 (downloaded to r3/dl: no routine prophylaxis
   for uncomplicated vaginal birth, episiotomy, operative vaginal birth, meconium, term PROM or PTL with intact membranes; prophylaxis for CS (before
   incision, single dose 1st-gen cephalosporin or penicillin), manual removal of placenta, 3rd/4th-degree tears, PPROM, GBS colonisation; povidone-iodine
   vaginal cleansing before CS; chorioamnionitis ampicillin + once-daily gentamicin; endometritis clindamycin + gentamicin). Clindamycin not found in the
   NEML 2025 text read. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "puerperal-preg",
title: "Puerperal (Maternal) Sepsis",
subtitle: "Fever within 6 weeks of birth: look for the uterus and all other sources, give ampicillin + metronidazole + gentamicin early, remove retained products, and escalate if no better in 48 hours",
age: "Postpartum women", specs: ["obg", "id", "emerg"],
keywords: ["puerperal sepsis", "maternal sepsis", "puerperal pyrexia", "endometritis", "postpartum fever", "retained products", "pelvic abscess", "group A streptococcus", "ampicillin gentamicin metronidazole", "clindamycin", "chorioamnionitis", "caesarean wound infection", "mastitis", "septic pelvic thrombophlebitis"],
related: ["sepsis-adult", "pph-preg", "uti-adult", "vte-adult", "labour-preg", "mastitis-preg", "shock-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Infection of the genital tract after birth is a major preventable cause of maternal death. Women who are pregnant or within 6 weeks of birth, miscarriage or termination are a high-risk group for sepsis — screen with NEWS ${r(1)} ${r(3)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever, foul lochia, tender or bulky uterus, pelvic pain, fast pulse or breathing, within 42 days of birth ${r(1)} ${r(2)}.</p></div>
<div><h4>Treat early</h4><p>IV ${dr("ampicillin")} + ${dr("gentamicin")} + ${dr("metronidazole")}; fluids; cultures first if no delay ${r(1)} ${r(2)}.</p></div>
<div><h4>Source</h4><p>Ultrasound for retained products → evacuation after antibiotics start; drain any abscess ${r(1)} ${r(2)}.</p></div>
<div><h4>Escalate</h4><p>No better in 48 hours → refer; look for abscess, other sources, resistant organisms ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Midwifery Standards set out what a BHU and a district hospital do: BHU — assess, admit mild cases, ampicillin 1 g IV 6-hourly, oral metronidazole, paracetamol, refer; district hospital — IV ampicillin, metronidazole and gentamicin (gentamicin only if urine output is normal), catheter, ultrasound, gentle evacuation, transfusion, refer if not better in 48 hours ${r(2)}. Use the national sepsis quick guide (NEWS) for screening and escalation ${r(3)}. See ${P("sepsis-adult", "Sepsis — adults")}.</p>`)}
` },
{ id: "overview", title: "Definitions and causes", html: `
${tbl(["Term", "Meaning"], [
["Puerperal pyrexia", "Temperature 38 °C or more on 2 occasions 24 hours apart (excluding the first 24 hours) within 6 weeks of birth " + r(2)],
["Puerperal sepsis", "Infection of the genital tract after birth — endometritis, endomyometritis, parametritis (pelvic cellulitis) " + r(2)],
["STG definition", "From rupture of membranes or labour to day 42, with two or more features: pelvic pain, fever over 38.5 °C, foul discharge, delayed involution " + r(1)]
])}
<h3>Causes of fever after birth</h3>
<p>Puerperal sepsis; urinary tract infection; breast engorgement, mastitis or abscess; caesarean wound infection; pneumonia; septic pelvic thrombophlebitis; malaria or TB recrudescence; viral infections ${r(2)}. See ${P("mastitis-preg", "Mastitis")} and ${P("uti-adult", "UTI")}.</p>
<h3>Risk factors (STG)</h3>
<p>Caesarean or instrumental delivery, prolonged labour, prolonged rupture of membranes, many vaginal examinations, diabetes, anaemia, obesity, meconium-stained liquor ${r(1)}.</p>
` },
{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Puerperal sepsis", [F.s("Vaginal and bowel organisms (and group A streptococcus) enter the raw placental site"), F.a, F.s("Endometritis → myometritis → parametritis, pelvic abscess"), F.a, F.e("Bacteraemia → septic shock, multi-organ failure")])}
<p>Retained placental tissue keeps infection going until it is removed ${r(2)}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG / Midwifery Standards", "WHO 2015", "This guide"], [
["First-line antibiotics (endometritis)", "Ampicillin + gentamicin + metronidazole", "Clindamycin + gentamicin", "Ampicillin + gentamicin + metronidazole (clindamycin not found in NEML 2025) " + r(1) + r(2) + r(4)],
["Gentamicin dose", "5 mg/kg/day in 3 doses, or 80 mg 8-hourly (DH flowchart)", "Once daily (chorioamnionitis)", "5 mg/kg once daily if urine output normal " + r(2) + r(4) + " " + LB.exp("ONCE-DAILY DOSING")],
["Fever threshold", "STG > 38.5 °C; Midwifery ≥ 38 °C twice", "—", "≥ 38 °C, or any NEWS trigger " + r(1) + r(2) + r(3)],
["Oral step-down", "Stop IV after 48 h afebrile; no oral needed", "—", "Bhutan standard " + r(2)]
])}
` },
{ id: "presentation", title: "Assessment", html: `
<ul>
<li>Temperature, pulse, BP, respiratory rate, SpO₂, consciousness — calculate NEWS ${r(3)}.</li>
<li>Uterus (tenderness, height for days since birth), lochia (smell, amount), perineum and caesarean wound, breasts, loins, chest, calves ${r(1)} ${r(2)}.</li>
<li>Retained products: bulky uterus, heavy or prolonged bleeding.</li>
</ul>
${box("red", "Red flags", `<ul><li>Pulse over 120, systolic BP under 90, RR over 25, confusion — septic shock</li><li>Severe pain out of proportion — group A streptococcus or necrotising infection</li><li>Diarrhoea and vomiting with fever and rash — toxic shock</li></ul><p>${LB.exp("STANDARD RED FLAGS")}</p>`)}
<h3>The typical patient</h3>
<p>A 26-year-old 5 days after a prolonged labour in Mongar has fever 39 °C, pulse 118, foul lochia and a tender uterus. <b>Puerperal sepsis (endometritis)</b>: blood culture, ampicillin + metronidazole IV, gentamicin (urine output normal), fluids, ultrasound for retained products and gentle evacuation once antibiotics have started ${r(1)} ${r(2)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["UTI / pyelonephritis", "Dysuria, loin pain; normal lochia " + r(2)], ["Mastitis / breast abscess", "Red, tender breast " + P("mastitis-preg", "Mastitis")], ["Wound infection", "Red, discharging wound"], ["DVT / septic pelvic thrombophlebitis", "Calf swelling; fever despite antibiotics " + P("vte-adult", "VTE")], ["Malaria, pneumonia", "Endemic area; chest signs " + r(2)]])}` },
{ id: "invest", title: "Investigations", html: `<ul><li>Hb, CBC, CRP; blood culture before antibiotics if it does not delay treatment; urine routine and culture; high vaginal swab ${r(1)}.</li><li>Creatinine, LFT; lactate if available ${r(1)}.</li><li>Ultrasound: retained products, pelvic collection ${r(1)} ${r(2)}.</li><li>Chest X-ray if chest signs; malaria test where relevant ${r(2)}.</li></ul>` },
{ id: "staging", title: "Antibiotic plan", html: `<div class="calc" data-calc="puerperalcalc"></div>` },
{ id: "manage", title: "Management", html: `
<h3>Antibiotics</h3>
<ul>
<li><b>Severe or hospital care:</b> ${dr("ampicillin")} 1–2 g IV 6-hourly + ${dr("gentamicin")} 5 mg/kg/day + ${dr("metronidazole")} 500 mg IV 8-hourly ${r(2)}. Give gentamicin only if urine output is normal ${r(2)}.</li>
<li><b>Mild, at a BHU:</b> ampicillin 1 g IV 6-hourly + metronidazole 400 mg orally three times daily + paracetamol; refer if not better ${r(2)}.</li>
<li>Stop IV antibiotics once she has been afebrile for 48 hours; there is no benefit from continuing oral antibiotics ${r(2)}.</li>
<li>WHO first line for endometritis is clindamycin + gentamicin ${r(5)} — use if available and the local regimen fails.</li>
<li>No improvement after 48 hours: refer; look for an abscess, retained tissue, thrombophlebitis, another source; broaden antibiotics by culture ${r(1)} ${r(2)}.</li>
</ul>
<h3>Source control and support</h3>
<ul>
<li>Remove retained placental fragments after antibiotics have started — gentle evacuation ${r(1)} ${r(2)}.</li>
<li>Drain a pelvic abscess ${r(1)}.</li>
<li>Paracetamol and tepid sponging; Foley catheter and urine output; transfuse if anaemic ${r(2)}.</li>
<li>Septic shock: fluid boluses, noradrenaline, ICU — see ${P("shock-adult", "Shock")} and ${P("sepsis-adult", "Sepsis")}.</li>
<li>Continue breastfeeding; thromboprophylaxis if immobile ${LB.exp("STANDARD PRACTICE")}.</li>
</ul>
<h3>Prevention (WHO 2015)</h3>
${tbl(["Give prophylaxis", "Do not give routine prophylaxis"], [
["Caesarean section — single dose of a first-generation cephalosporin or penicillin before skin incision; vaginal povidone-iodine before CS", "Uncomplicated vaginal birth"],
["Manual removal of the placenta", "Episiotomy"],
["Third- or fourth-degree perineal tear", "Operative vaginal birth"],
["Preterm prelabour rupture of membranes", "Meconium-stained liquor; term prelabour rupture; preterm labour with intact membranes"],
["GBS colonisation (intrapartum)", "Routine antibiotics in the 2nd or 3rd trimester"]
])}
<p class="small">${r(5)}. Clean birth practices, fewer vaginal examinations and good hand hygiene matter as much ${r(2)}.</p>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("ampicillin"), "1–2 g IV 6-hourly " + r(2), "STG/Midwifery first line"],
[dr("gentamicin"), "5 mg/kg/day " + r(2), "Only with normal urine output; DH flowchart 80 mg 8-hourly"],
[dr("metronidazole"), "500 mg IV 8-hourly; 400 mg orally TDS (mild) " + r(2), "Anaerobes"],
["Clindamycin", "With gentamicin (WHO first line) " + r(5), "Not found in NEML 2025 text"],
[dr("ceftriaxone"), "2 g IV daily " + LB.exp("ALTERNATIVE"), "If gentamicin unsafe"],
[dr("enoxaparin"), "40 mg SC daily " + LB.exp("DOSE"), "Thromboprophylaxis if immobile"]
])}
` },
{ id: "populations", title: "Special groups", html: `<ul><li><b>After caesarean:</b> examine the wound; consider collection or wound infection ${r(2)}.</li><li><b>After miscarriage or termination:</b> same high-risk group — see ${P("miscarriage-preg", "Miscarriage")} ${r(3)}.</li><li><b>HIV, diabetes, anaemia:</b> higher risk; lower threshold to admit ${r(1)}.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Fever persists after 48 h of antibiotics", "Refer; ultrasound for abscess or retained tissue; check calves and breasts; broaden by culture " + r(2)],
["Low urine output", "No gentamicin; fluids; catheter " + r(2)],
["Home birth, fever on day 4, far from a hospital", "First antibiotic dose at the BHU, then referral " + r(2) + " " + LB.loc()],
["Rapidly spreading pain and shock", "Group A strep — urgent senior help, IV antibiotics, ICU " + LB.exp("STANDARD PRACTICE")]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Pelvic abscess, peritonitis, septic pelvic thrombophlebitis, septic shock, DIC, multi-organ failure, death; later infertility ${r(1)} ${r(2)}.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Review at 48 hours: fever, pulse, uterus ${r(2)}.</li><li>Postnatal visits: Hb, wound, breastfeeding, mood, contraception.</li><li>Audit maternal sepsis cases; notify maternal deaths.</li></ul>` },
{ id: "images", title: "Images", html: `<p>No clinical images are needed. Use the NEWS chart in the ${P("sepsis-adult", "Sepsis")} chapter for screening.</p>` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Fever after birth", [F.s("Vitals and NEWS; examine uterus, lochia, wound, breasts, urine, chest, calves"), F.a, F.d("Genital tract source?"), F.a, F.b([["Yes", F.e("Ampicillin + gentamicin + metronidazole; scan; evacuate retained products")], ["No", F.ok("Treat the other cause")]]), F.a, F.d("Better in 48 h?"), F.a, F.b([["No", F.e("Refer; abscess, thrombophlebitis, resistance")], ["Yes", F.ok("Stop IV after 48 h afebrile")]])])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating fever as 'normal after delivery'", "Late sepsis", "Examine fully; NEWS " + r(3)],
["Evacuating before antibiotics", "Bacteraemia", "Antibiotics first " + r(2)],
["Gentamicin with low urine output", "Kidney damage", "Check urine output " + r(2)],
["Routine antibiotics after every birth", "Resistance without benefit", "Prophylaxis only for WHO indications " + r(5)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Definition of puerperal pyrexia?", "38 °C or more on 2 occasions 24 hours apart, excluding the first 24 hours, within 6 weeks of birth.")}
${qa("Intern/MO", "Antibiotics for puerperal sepsis (Bhutan)?", "IV ampicillin + gentamicin + metronidazole.")}
${qa("Registrar", "When can IV antibiotics stop?", "After 48 hours without fever; oral continuation is not needed.")}
${qa("Registrar", "Which births need antibiotic prophylaxis (WHO)?", "Caesarean (before incision), manual removal of placenta, 3rd/4th-degree tears, PPROM, GBS colonisation.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §11.7 Puerperal sepsis.</li>
<li id="ref-2">Ministry of Health, Bhutan. Midwifery Standards 2018: Life-Saving Midwifery Practice Standard 5 — Puerperal sepsis.</li>
<li id="ref-3">Ministry of Health, Bhutan. Quick Guide to Sepsis Management, 1st ed. 2025.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-5">World Health Organization. WHO recommendations for prevention and treatment of maternal peripartum infections. Geneva: WHO; 2015. <a href="https://www.who.int/publications/i/item/9789241549363" target="_blank" rel="noopener">who.int</a></li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["STG §11.7", "<span class='pass'>Read</span>", "27 Nov 2026"], ["Bhutan Midwifery Standard 5", "<span class='pass'>Read</span>", "27 Nov 2026"], ["Bhutan Sepsis Guide 2025", "<span class='pass'>Read</span>", "High-risk group, NEWS"], ["WHO 2015", "<span class='pass'>Read</span>", "Downloaded from WHO"], ["Red flags, thromboprophylaxis", "<span class='unv'>Standard practice</span>", "Marked"], ["Calculator", "<span class='pass'>Updated</span>", "Step-down advice matches Bhutan standard"]], "qc")}` }
]
});
})();
