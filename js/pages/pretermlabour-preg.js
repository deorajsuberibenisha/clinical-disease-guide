/* Preterm labour and PPROM. Thin-page upgrade Round 4, 27 Nov 2026 (id, pretermlabour calculator and related links kept).
   Sources: Bhutan Midwifery Standards 2018, High-Risk Obstetrics Standard 2 (read: preterm labour = contractions 24–37 weeks; PPROM = rupture ≥ 1 h
   before labour < 37 weeks; risk factors; sterile speculum; CBC, vaginal swab, urine; intact membranes < 34 w and cervix < 4 cm: tocolyse — nifedipine
   40 mg then 10–20 mg QID, or IV salbutamol 2.5 mg in 500 mL RL at 20–30 drops/min, or IV terbutaline 0.1 mg in 5% glucose 5 → 10 µg/min; keep maternal
   pulse < 120; dexamethasone 6 mg IM × 4, 12-hourly; cervix ≥ 4 cm: nifedipine 40 mg then 20 mg BD for 24 h + dexamethasone 12 mg × 2, 12-hourly, for
   transfer; PPROM < 34 w: speculum, no tocolysis, ampicillin 2 g then 1 g 6-hourly, dexamethasone, refer to CEmONC; with infection: IV ampicillin 1 g TDS +
   metronidazole 500 mg TDS until delivery then oral amoxicillin + metronidazole 5 days, induce with oxytocin 5 IU in 500 mL NS or misoprostol 50 µg (2–3
   doses) by Bishop score; PPROM > 34 w: refer if < 36 w, induce at ≥ 37 w at DH, ampicillin, erythromycin 500 mg TDS if allergic; no tocolysis with
   ruptured membranes; tocolysis only for steroids or in-utero transfer; same steroid dose for twins);
   NICE NG25 Preterm labour and birth (2015, updated 2022; read in browser 27 Nov 2026: progesterone/cerclage for short cervix ≤ 25 mm with history;
   PPROM: speculum, pooling = diagnosis, IGFBP-1/PAMG-1 if no pooling, no nitrazine; erythromycin 250 mg QID up to 10 days; no co-amoxiclav; emergency
   cerclage 16–27+6 w; suspected PTL ≤ 29+6 → treat; ≥ 30 w → cervical length (> 15 mm unlikely) or fFN; nifedipine tocolysis 26–33+6 (consider
   24–25+6), oxytocin antagonist if contraindicated, NO betamimetics; steroids offer 24–33+6, consider 22–23+6 and 34–35+6, single repeat course, max 2;
   MgSO4 offer 24–29+6, consider 30–33+6: 4 g IV over 15 min then 1 g/h to birth or 24 h, monitor 4-hourly; CS consider for breech 26–36+6;
   cord clamping ≥ 60 s);
   WHO recommendations on antenatal corticosteroids 2022 (downloaded to r3/dl: 24–34 weeks when GA accurate, birth likely within 7 days, no maternal
   infection, adequate childbirth and newborn care incl. CPAP; give even if course may not complete; PPROM without infection yes; chorioamnionitis no;
   planned CS 34–36+6 no; IM dexamethasone or betamethasone total 24 mg; one repeat course after ≥ 7 days; tocolysis may be considered to complete a
   course; no 'just in case' use); NEML 2025 (dexamethasone 4 mg/mL, nifedipine 20 mg SR, magnesium sulfate 50%, ampicillin, erythromycin 250 mg). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "pretermlabour-preg",
title: "Preterm Labour & Preterm Rupture of Membranes",
subtitle: "Confirm labour or rupture, give steroids at 24–34 weeks, magnesium under 32 weeks, antibiotics for PPROM, and move the mother — not the baby — to a hospital with neonatal care",
age: "Pregnant women 22–37 weeks", specs: ["obg", "neo", "emerg"],
keywords: ["preterm labour", "preterm labor", "PPROM", "preterm prelabour rupture of membranes", "antenatal corticosteroids", "dexamethasone", "betamethasone", "magnesium sulfate neuroprotection", "tocolysis", "nifedipine", "salbutamol", "terbutaline", "erythromycin", "chorioamnionitis", "in utero transfer", "cervical length", "fetal fibronectin", "cerclage", "vaginal progesterone"],
related: ["preterm-child", "aph-preg", "preeclampsia-preg", "puerperal-preg", "asphyxia-child", "labour-preg", "rds-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Preterm birth is a leading cause of newborn death. Three treatments given to the mother save babies: <b>corticosteroids</b>, <b>magnesium sulfate</b> before very early birth, and <b>transfer before birth</b> to a hospital with neonatal care ${r(1)} ${r(2)} ${r(3)}.</p>
<div class="glance">
<div><h4>Steroids</h4><p>${dr("dexamethasone")} 6 mg IM every 12 hours × 4 at 24–34 weeks when birth is likely within 7 days and there is no infection ${r(1)} ${r(3)}.</p></div>
<div><h4>Magnesium</h4><p>4 g IV over 15 min then 1 g/h, if birth expected within 24 h at 24–29+6 weeks (consider to 33+6) ${r(2)}.</p></div>
<div><h4>Tocolysis</h4><p>Only to finish steroids or allow transfer; intact membranes only — ${dr("nifedipine")} first ${r(1)} ${r(2)}.</p></div>
<div><h4>PPROM</h4><p>Speculum to confirm; no tocolysis; antibiotics; steroids; refer ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan Midwifery Standards give tocolysis and steroid regimens for district hospitals and ask that women under 34 weeks with PPROM, or in preterm labour, be referred to a comprehensive EmONC hospital with neonatal care (JDWNRH or the regional referral hospitals) ${r(1)} ${LB.loc()}. Newborns under 34 weeks need special support at birth; a paediatrician should attend ${r(1)}. NEML 2025 lists dexamethasone 4 mg/mL, nifedipine 20 mg SR, magnesium sulfate 50% and erythromycin ${r(4)}.</p>`)}
` },
{ id: "overview", title: "Definitions and risk factors", html: `
${tbl(["Term", "Meaning"], [
["Preterm labour", "Uterine contractions with cervical change between 24 and 37 weeks " + r(1)],
["PPROM", "Rupture of membranes 1 hour or more before labour, before 37 weeks " + r(1)],
["High likelihood of birth within 7 days (WHO)", "PPROM without labour, or spontaneous preterm labour with intact membranes " + r(3)]
])}
<p><b>Risk factors:</b> previous preterm birth, adolescent or older mother, infections (pyelonephritis, genital tract infection, systemic infection), twins or polyhydramnios, trauma, uterine abnormalities, abruption, cervical weakness, social and economic stress ${r(1)}.</p>
` },
{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Preterm birth", [F.s("Infection/inflammation, overdistension, bleeding, cervical weakness, stress"), F.a, F.s("Prostaglandins → contractions, cervical change, membrane rupture"), F.a, F.e("Preterm birth: RDS, IVH, NEC, sepsis, death")])}
<p>Corticosteroids mature the fetal lungs and reduce death, RDS and intraventricular haemorrhage ${r(1)} ${r(3)}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan Midwifery Standards 2018", "NICE NG25", "WHO 2022", "This guide"], [
["Tocolytic", "Nifedipine, or IV salbutamol or terbutaline", "Nifedipine; oxytocin antagonist if contraindicated; NO betamimetics", "May be considered to complete steroids", "Nifedipine; avoid betamimetics where nifedipine is available " + r(1) + r(2) + r(3)],
["Steroid regimen", "Dexamethasone 6 mg × 4 (12 mg × 2 if ≥ 4 cm, for transfer)", "Betamethasone or dexamethasone", "Dexamethasone or betamethasone, total 24 mg IM", "Dexamethasone 6 mg × 4 (NEML) " + r(1) + r(3)],
["Steroid window", "Under 34 weeks", "Offer 24–33+6; consider 34–35+6", "24–34 weeks, with conditions", "24–34 weeks " + r(3)],
["PPROM antibiotic", "Ampicillin 2 g IV then 1 g 6-hourly; erythromycin if allergic", "Erythromycin 250 mg 4 × daily up to 10 days; no co-amoxiclav", "—", "Erythromycin (NICE) where oral treatment is possible; ampicillin IV per Bhutan standard for transfer " + r(1) + r(2)],
["Magnesium sulfate", "—", "Offer 24–29+6; consider 30–33+6", "—", "NICE " + r(2)]
])}
` },
{ id: "presentation", title: "Assessment", html: `
<ul>
<li>Pelvic or back pain, regular contractions, increased or mucus-bloody discharge, leaking fluid ${r(1)}.</li>
<li>Confirm gestation (early scan if available) — WHO steroid advice depends on accurate dating ${r(3)}.</li>
<li><b>Sterile speculum</b>: pooling of liquor confirms PPROM — no further test needed; no pooling → IGFBP-1 or PAMG-1 test if available; do not use nitrazine ${r(1)} ${r(2)}.</li>
<li>Avoid repeated digital examinations with ruptured membranes.</li>
<li>Infection signs: fever, maternal or fetal tachycardia, tender uterus, foul liquor ${r(1)}.</li>
<li>Over 30 weeks with suspected labour: transvaginal cervical length (more than 15 mm makes labour unlikely) or fetal fibronectin where available ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 22-year-old at 31 weeks in Samdrup Jongkhar has regular painful contractions, cervix 2 cm, membranes intact, no fever. <b>Preterm labour</b>: nifedipine 40 mg, dexamethasone 6 mg IM, magnesium sulfate if birth seems imminent, and transfer to a hospital with neonatal care before birth ${r(1)} ${r(2)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Braxton Hicks", "Irregular, painless, no cervical change"], ["UTI / pyelonephritis", "Dysuria, loin pain — can trigger labour " + r(1)], ["Placental abruption", "Pain, tense uterus, bleeding " + P("aph-preg", "APH")], ["Urinary incontinence or discharge", "No pooling on speculum " + r(2)]])}` },
{ id: "invest", title: "Investigations", html: `<ul><li>FBC, urine microscopy and culture, high vaginal swab for culture where available ${r(1)}.</li><li>Ultrasound: presentation, growth, liquor, placenta; cervical length where trained ${r(2)}.</li><li>Fetal heart monitoring.</li></ul>` },
{ id: "staging", title: "What to give", html: `<div class="calc" data-calc="pretermlabour"></div>` },
{ id: "manage", title: "Management", html: `
<h3>Preterm labour, membranes intact, under 34 weeks</h3>
<ol>
<li>Admit and assess gestation and cervix ${r(1)}.</li>
<li><b>Corticosteroids:</b> dexamethasone 6 mg IM every 12 hours for 4 doses; start even if the course may not be completed ${r(1)} ${r(3)}. Bhutan standard: if the cervix is 4 cm or more, dexamethasone 12 mg IM × 2, 12 hours apart, to cover transfer ${r(1)}.</li>
<li><b>Tocolysis</b> only to complete steroids or allow transfer (cervix under 4 cm): nifedipine 40 mg orally then 10–20 mg four times daily (Bhutan); if 4 cm or more, 40 mg then 20 mg twice daily for 24 hours ${r(1)}. NICE uses nifedipine and advises against betamimetics; the Bhutan standard also lists IV salbutamol or terbutaline (keep maternal pulse under 120) ${r(1)} ${r(2)}.</li>
<li><b>Magnesium sulfate</b> for fetal neuroprotection if birth is expected within 24 hours: offer at 24–29+6 weeks, consider at 30–33+6 — 4 g IV over 15 minutes then 1 g/hour until birth or for 24 hours; check pulse, BP, breathing and knee reflexes at least 4-hourly; reduce or stop if urine output falls ${r(2)}.</li>
<li>Transfer the mother before birth to a hospital with neonatal care ${r(1)}.</li>
</ol>
<h3>PPROM</h3>
<ul>
<li>Do <b>not</b> tocolyse ${r(1)}.</li>
<li>Antibiotics: NICE — erythromycin 250 mg orally 4 times a day for up to 10 days or until labour (oral penicillin if intolerant; never co-amoxiclav) ${r(2)}. Bhutan standard — ampicillin 2 g IV then 1 g 6-hourly; erythromycin 500 mg three times daily if penicillin-allergic ${r(1)}.</li>
<li>Steroids if under 34 weeks and no infection ${r(1)} ${r(3)}.</li>
<li>Under 34 weeks: refer to a comprehensive EmONC hospital ${r(1)}. 34–36 weeks: refer if under 36 weeks, admit and deliver; 37 weeks or more: induce at the district hospital ${r(1)}.</li>
</ul>
<h3>PPROM with infection (chorioamnionitis)</h3>
<p>Start IV ampicillin 1 g 8-hourly + metronidazole 500 mg 8-hourly until delivery, then oral amoxicillin 500 mg and metronidazole 500 mg three times daily for 5 days; refer; induce with oxytocin 5 IU in 500 mL saline or misoprostol 50 µg (2–3 doses) by Bishop score ${r(1)}. No steroids with chorioamnionitis (WHO) and no tocolysis ${r(3)} ${r(1)}.</p>
<h3>Birth</h3>
<ul><li>Caesarean has no known benefit for the baby in preterm labour, but consider it for breech at 26–36+6 weeks ${r(2)}.</li><li>Wait at least 60 seconds before clamping the cord ${r(2)}.</li><li>Paediatrician present; warmth, kangaroo mother care ${r(1)}. See ${P("preterm-child", "Preterm newborn")}.</li></ul>
<h3>Prevention in the next pregnancy</h3>
<p>Previous spontaneous preterm birth or loss and a cervix of 25 mm or less at 16–24 weeks: vaginal progesterone or cervical cerclage (specialist) ${r(2)}.</p>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("dexamethasone"), "6 mg IM 12-hourly × 4 " + r(1) + r(3), "One repeat course after ≥ 7 days if again high risk " + r(3)],
[dr("nifedipine"), "40 mg orally, then 10–20 mg four times daily " + r(1), "Intact membranes only; watch BP"],
[dr("mgso4_obs", "Magnesium sulfate"), "4 g IV over 15 min, then 1 g/h " + r(2), "Neuroprotection; monitor toxicity"],
["Erythromycin", "250 mg orally 4 × daily up to 10 days " + r(2), "PPROM (NICE); 500 mg TDS if penicillin-allergic (Bhutan)"],
[dr("ampicillin"), "2 g IV then 1 g 6-hourly (PPROM); 1 g 8-hourly + metronidazole (infection) " + r(1), "Bhutan standard"],
["Salbutamol / terbutaline IV", "See Bhutan standard " + r(1), "NICE: do not use betamimetics " + r(2)]
])}
` },
{ id: "populations", title: "Special groups", html: `<ul><li><b>Twins:</b> same steroid dose as a singleton ${r(1)} ${r(3)}.</li><li><b>Diabetes:</b> steroids raise glucose — monitor and adjust insulin ${r(3)}.</li><li><b>Pre-eclampsia:</b> steroids recommended when preterm birth is likely; magnesium for both indications ${r(3)}. See ${P("preeclampsia-preg", "Pre-eclampsia")}.</li><li><b>Next pregnancy:</b> high risk — close monitoring ${r(1)}.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Unsure dates, no early scan", "WHO steroid advice assumes accurate dating — use ultrasound at presentation; discuss " + r(3)],
["31 weeks, contractions, 3 hours from JDWNRH", "Steroids, nifedipine, transfer now with escort " + r(1) + " " + LB.loc()],
["PPROM at 28 weeks with fever", "No steroids or tocolysis; IV antibiotics; deliver " + r(1) + r(3)],
["Cervix fully dilated at 30 weeks", "Do not transfer in labour; magnesium, call paediatrician, warm room " + LB.loc()],
["Only salbutamol available", "Use with care (pulse < 120) to allow transfer, per Bhutan standard " + r(1)]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Baby: RDS, IVH, NEC, sepsis, death. Mother: chorioamnionitis, sepsis, abruption; nifedipine hypotension; magnesium toxicity; pulmonary oedema with betamimetics ${r(1)} ${r(2)}.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Postnatal: infection watch, breastfeeding support for the preterm baby, contraception and spacing.</li><li>Next pregnancy: early booking; cervical length assessment if available ${r(2)}.</li></ul>` },
{ id: "images", title: "Images", html: `<p>See kangaroo mother care in the ${P("preterm-child", "preterm newborn")} chapter.</p>` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Threatened preterm birth", [F.d("Membranes ruptured?"), F.a, F.b([["Yes (PPROM)", F.e("No tocolysis; antibiotics; steroids if < 34 w and no infection")], ["No", F.s("Steroids 24–34 w; nifedipine to allow course/transfer")]]), F.a, F.d("Birth within 24 h and < 34 w?"), F.a, F.b([["Yes", F.e("Magnesium sulfate")], ["No", F.ok("Monitor")]]), F.a, F.ok("Transfer the mother before birth")])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for the full course before transfer", "Delays transfer; WHO says start anyway", "Start steroids, then transfer " + r(3)],
["Tocolysis with ruptured membranes", "Infection risk", "Never " + r(1)],
["Steroids 'just in case' weeks before birth", "Newborn harms with long intervals", "Only if birth likely within 7 days " + r(3)],
["Co-amoxiclav for PPROM", "More necrotising enterocolitis (ORACLE I)", "Erythromycin " + r(2) + r(5)],
["Transferring the baby instead of the mother", "Worse outcomes", "In-utero transfer " + r(1)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Dexamethasone regimen for fetal lung maturity?", "6 mg IM every 12 hours for 4 doses (24 mg total).")}
${qa("Intern/MO", "Should you tocolyse a woman with PPROM at 30 weeks?", "No.")}
${qa("Registrar", "Magnesium sulfate regimen for neuroprotection?", "4 g IV over 15 minutes, then 1 g/hour until birth or 24 hours.")}
${qa("Registrar", "Which antibiotic does NICE advise for PPROM, and which to avoid?", "Erythromycin 250 mg four times daily up to 10 days; avoid co-amoxiclav.")}
${qa("Specialist", "WHO conditions for antenatal steroids?", "24–34 weeks, accurate dating, birth likely within 7 days, no maternal infection, adequate childbirth and newborn care.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Midwifery Standards 2018: Standard on High-Risk Obstetrics 2 — Preterm labour and preterm premature rupture of membranes.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Preterm labour and birth (NG25). London: NICE; 2015, updated 2022. <a href="https://www.nice.org.uk/guidance/ng25" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">World Health Organization. WHO recommendations on antenatal corticosteroids for improving preterm birth outcomes. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240057296" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-5">Kenyon SL, Taylor DJ, Tarnow-Mordi W. Broad-spectrum antibiotics for preterm, prelabour rupture of fetal membranes: the ORACLE I randomised trial. Lancet 2001;357:979–988. <a href="https://doi.org/10.1016/S0140-6736(00)04233-1" target="_blank" rel="noopener">doi:10.1016/S0140-6736(00)04233-1</a></li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan Midwifery Standard (preterm)", "<span class='pass'>Read</span>", "27 Nov 2026"], ["NICE NG25", "<span class='pass'>Read</span>", "27 Nov 2026"], ["WHO ACS 2022", "<span class='pass'>Read</span>", "Downloaded from WHO"], ["Betamimetic tocolysis", "<span class='flag'>Conflict</span>", "Bhutan lists; NICE advises against"], ["Calculator", "<span class='pass'>Corrected</span>", "Regimens now from Bhutan standard, NICE and WHO"]], "qc")}` }
]
});
})();
