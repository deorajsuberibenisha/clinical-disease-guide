/* Preterm labour and PPROM (WHO 2022, NICE NG25) */
registerPage({
id: "pretermlabour-preg",
title: "Preterm Labour & Preterm Rupture of Membranes",
subtitle: "Confirm labour or rupture, give steroids at 24–34 weeks, magnesium under 32 weeks, erythromycin for PPROM, and move the mother — not the baby — to a hospital with neonatal care",
age: "Pregnant women 22–37 weeks", specs: ["obg", "neo", "emerg"],
keywords: ["preterm labour", "PPROM", "preterm prelabour rupture of membranes", "antenatal corticosteroids", "dexamethasone", "magnesium sulfate neuroprotection", "tocolysis", "nifedipine", "erythromycin", "chorioamnionitis", "GBS prophylaxis", "in utero transfer"],
related: ["preterm-child", "aph-preg", "preeclampsia-preg", "puerperal-preg", "asphyxia-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">What happens before birth decides much of a preterm baby's outcome. Steroids, magnesium, antibiotics and in-utero transfer are cheap and effective.</p>
<div class="glance">
<div><h4>Steroids</h4><p>${dr("dexamethasone")} 6 mg IM 12-hourly × 4 at 24–34 weeks.</p></div>
<div><h4>Brain</h4><p>${dr("mgso4_obs", "Magnesium sulfate")} if under 32 weeks and birth imminent.</p></div>
<div><h4>PPROM</h4><p>${dr("erythromycin")} 250 mg QDS × 10 days; no co-amoxiclav.</p></div>
<div><h4>Transfer</h4><p>Before birth to JDWNRH/regional NICU.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG has no stand-alone preterm labour chapter; national maternal care follows WHO. Dexamethasone, magnesium sulfate, erythromycin and nifedipine (SR) are on the NEML. NICU care is at JDWNRH and regional referral hospitals — in-utero transfer is safer than transferring a preterm newborn over mountain roads. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Preterm birth (before 37 weeks) affects about 1 in 10 births. Risk factors: previous preterm birth, infection (UTI, chorioamnionitis), multiple pregnancy, pre-eclampsia, APH, short cervix, anaemia, young age.${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Preterm labour", [F.s("Infection/inflammation, stretch, bleeding, stress"), F.a, F.s("Cervical ripening, membrane rupture, contractions"), F.a, F.e("Preterm birth; chorioamnionitis risks mother and baby")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "WHO 2022", "NICE NG25", "This guide"], [["Tocolysis", "Not recommended to improve newborn outcomes", "Nifedipine 24–34 weeks to allow steroids/transfer", "Short nifedipine only for steroids/transfer " + LB.loc()], ["PPROM delivery", "Expectant to 37 weeks or induce from 34 (context)", "Expectant to 37 weeks", "Expectant with infection watch; discuss from 34 weeks"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Contractions, backache, show, gush of fluid, bleeding; confirm dates (early scan).</li><li>Sterile speculum (pooling of liquor), avoid digital exam in PPROM unless in labour.</li><li>Infection signs: fever, maternal/fetal tachycardia, tender uterus, foul liquor.</li></ul><h3>The typical patient</h3><p>A 24-year-old at 30 weeks in Dagana has a gush of clear fluid; no contractions, afebrile; speculum shows pooling. <b>This is PPROM at 30 weeks</b>: dexamethasone course, erythromycin 250 mg QDS, transfer to a hospital with NICU, monitor for chorioamnionitis.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Braxton Hicks", "Irregular, no cervical change"], ["UTI", "Dysuria; can trigger labour"], ["Urinary leakage, discharge", "No pooling; nitrazine/fern negative"], ["Abruption", "Pain, tense uterus, bleeding"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Speculum, urine culture, high vaginal swab, FBC/CRP, ultrasound (presentation, liquor, growth), fetal heart/CTG.</p>` },
{ id: "staging", title: "Preterm labour tool", html: `<div class="calc" data-calc="pretermlabour"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Antenatal corticosteroids at 24–34 weeks when birth likely within 7 days and newborn care is adequate.</li><li>Magnesium sulfate for neuroprotection under 32 weeks.</li><li>Tocolysis (nifedipine) only to complete steroids or transfer; not in infection, abruption, fetal distress.</li><li>PPROM: erythromycin 10 days; monitor temperature, pulse, fetal heart, CRP; deliver for infection.</li><li>Chorioamnionitis: IV ampicillin + gentamicin and delivery.</li><li>Intrapartum GBS prophylaxis for preterm labour.</li><li>Plan delivery mode by obstetric indications; neonatal team present.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("dexamethasone"), "6 mg IM 12-hourly × 4", "24–34 weeks"], [dr("mgso4_obs", "Magnesium sulfate"), "4 g IV then 1 g/h", "Under 32 weeks"], [dr("nifedipine"), "20 mg then 10–20 mg 4–6-hourly", "Max 48 h"], [dr("erythromycin"), "250 mg QDS × 10 days", "PPROM"], [dr("benzylpenicillin"), "3 g then 1.5 g 4-hourly", "GBS in labour"], [dr("ampicillin"), "2 g IV 6-hourly", "Chorioamnionitis"]])}` },
{ id: "populations", title: "Twins, diabetes", html: `<p>Steroids in diabetes raise glucose for 72 h — monitor and adjust insulin. Twins: same steroid dose.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Advanced labour at 28 weeks at a BHU", "Prepare for newborn resuscitation and KMC; call for transport; steroids if any time"], ["Uncertain dates", "Ultrasound; WHO advises steroids only when gestation is reasonably certain"]])}` },
{ id: "complications", title: "Complications", html: `<p>Chorioamnionitis, sepsis, cord prolapse, abruption; for the baby: RDS, IVH, NEC, sepsis, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Next pregnancy: early booking, treat UTI/bacteriuria, consider progesterone or cervical length assessment with a specialist.</p>` },
{ id: "images", title: "Images", html: `<p>See kangaroo mother care in the preterm newborn chapter.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Threatened preterm birth", [F.s("Confirm labour/PPROM, check infection"), F.a, F.s("Steroids 24–34 wk; Mg under 32 wk"), F.a, F.d("PPROM?"), F.a, F.b([["Yes", F.ok("Erythromycin, monitor, transfer")], ["No", F.ok("Nifedipine only for transfer/steroids")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Co-amoxiclav for PPROM", "NEC in babies", "Erythromycin"], ["Transferring the baby instead of the mother", "Worse outcomes", "In-utero transfer"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Antibiotic for PPROM?", "Erythromycin 250 mg four times daily for 10 days.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. WHO recommendations on antenatal corticosteroids for improving preterm birth outcomes / interventions to improve preterm birth outcomes. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240057296" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">Kenyon SL, Taylor DJ, Tarnow-Mordi W. Broad-spectrum antibiotics for preterm, prelabour rupture of fetal membranes: the ORACLE I randomised trial. Lancet. 2001;357:979-988. <a href="https://doi.org/10.1016/S0140-6736(00)04233-1" target="_blank" rel="noopener">doi</a></li><li id="ref-3">National Institute for Health and Care Excellence. Preterm labour and birth (NG25), 2015, updated 2022.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
