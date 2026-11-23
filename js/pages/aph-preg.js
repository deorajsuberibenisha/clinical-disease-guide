/* Antepartum haemorrhage (WHO MCPC 2017, RCOG GTG 63, Bhutan) */
registerPage({
id: "aph-preg",
title: "Antepartum Haemorrhage (APH)",
subtitle: "Bleeding after 22–24 weeks: resuscitate, never do a vaginal examination until praevia is excluded, tell abruption from praevia, and deliver when mother or baby is at risk",
age: "Pregnant women after 22–24 weeks", specs: ["obg", "emerg"],
keywords: ["antepartum haemorrhage", "APH", "placenta praevia", "placental abruption", "abruptio placentae", "uterine rupture", "vasa praevia", "DIC", "no vaginal examination", "placenta accreta"],
related: ["pph-preg", "preeclampsia-preg", "anaemia-preg", "preterm-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">APH threatens both mother and baby. Abruption can hide most of the bleeding inside the uterus; praevia bleeds painlessly and can bleed catastrophically if examined.</p>
<div class="glance">
<div><h4>First</h4><p>Help, 2 large IV lines, crossmatch, bedside clot test.</p></div>
<div><h4>No VE</h4><p>Until placenta location known or in theatre.</p></div>
<div><h4>Abruption</h4><p>Painful tense uterus → deliver if heavy or fetal distress.</p></div>
<div><h4>Praevia</h4><p>Painless → caesarean if heavy; expectant if light and preterm.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Caesarean section is available at all district hospitals with obstetric cover; blood is scarce at peripheral hospitals — refer women with known praevia to deliver at a hospital with blood bank and theatre, and advise them to stay nearby from 34 weeks. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Cause", "Typical features"], [["Placental abruption", "Pain, tense tender 'woody' uterus, fetal distress/death, shock out of proportion to visible loss, hypertension"], ["Placenta praevia", "Painless recurrent bleeding, soft uterus, high/abnormal presenting part"], ["Uterine rupture", "Severe pain, shock, fetal parts palpable, previous caesarean"], ["Vasa praevia", "Bleeding at membrane rupture with sudden fetal distress"], ["Local", "Cervicitis, polyp, cancer, show"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Abruption", [F.s("Placenta separates (hypertension, trauma, smoking, cocaine)"), F.a, F.s("Retroplacental clot → consumption"), F.a, F.e("DIC, shock, fetal hypoxia")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "WHO MCPC", "RCOG GTG 63", "This guide"], [["Anti-D dose after 20 weeks", "300 µg (1500 IU)", "500 IU + Kleihauer", "Either " + LB.loc()], ["Steroids", "24–34 weeks if delivery likely in 7 days", "Same", "Same"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Amount and colour of bleeding, pain, fetal movements, previous caesarean, hypertension, trauma.</li><li>Pulse, BP, shock index, uterine tone and tenderness, fetal lie and heart rate.</li></ul>${box("red", "No digital vaginal examination", `<p>Gentle speculum only, after ultrasound excludes praevia — or in theatre with caesarean ready.</p>`)}<h3>The typical patient</h3><p>A 34-year-old para 3 at 35 weeks in Pemagatshel with pre-eclampsia has sudden abdominal pain and dark bleeding; the uterus is hard and tender, fetal heart 90/min, pulse 118. <b>This is placental abruption with fetal distress</b>: resuscitate, bedside clot test, crossmatch, magnesium sulfate, urgent caesarean; prepare for PPH and DIC.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Labour (show)", "Mucous, small, regular contractions"], ["Cervical lesion", "Speculum after praevia excluded"], ["Urinary/rectal bleeding", "Source"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Hb, group and crossmatch 4 units, coagulation; bedside clotting test (no clot in 7 min = coagulopathy); urine protein; ultrasound for placental site (not to exclude abruption); CTG/fetal heart.</p>` },
{ id: "staging", title: "Triage tool", html: `<div class="calc" data-calc="aphtriage"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Resuscitate: left tilt, oxygen, 2 large IV lines, crystalloid then blood; fresh whole blood/FFP for coagulopathy.</li><li><b>Abruption:</b> deliver urgently if heavy bleeding or fetal distress (caesarean if fetus alive and not imminently delivering; vaginal with amniotomy if fetus dead and mother stable).</li><li><b>Praevia:</b> heavy → caesarean whatever the gestation; light → admit, steroids if under 34 weeks, iron, blood available, deliver by caesarean at 36–37 weeks.</li><li><b>Rupture:</b> laparotomy.</li><li>Steroids (dexamethasone 6 mg IM 12-hourly × 4) 24–34 weeks; magnesium sulfate for neuroprotection under 32 weeks; anti-D if Rh negative.</li><li>Active third stage; expect PPH.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("dexamethasone"), "6 mg IM 12-hourly × 4", "24–34 weeks"], [dr("mgso4_obs", "Magnesium sulfate"), "4 g IV load + 1 g/h", "Neuroprotection under 32 weeks / pre-eclampsia"], [dr("anti_d"), "500–1500 IU IM", "Rh negative"], [dr("tranexamic_acid"), "1 g IV", "Postpartum bleeding"], [dr("oxytocin"), "10 units IM", "Third stage"]])}` },
{ id: "populations", title: "Previous caesarean", html: `<p>Praevia over a scar: suspect accreta — deliver at JDWNRH/regional hospital with blood and senior surgeons; hysterectomy may be needed.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Heavy bleeding at a BHU", "IV fluids, keep warm, emergency referral with a health worker; no VE"], ["Fetus dead, mother in DIC", "Correct coagulopathy, vaginal delivery preferred"]])}` },
{ id: "complications", title: "Complications", html: `<p>Shock, DIC, AKI, PPH, Sheehan syndrome, fetal death, preterm birth.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Hb and iron postnatally; recurrence risk of abruption about 1 in 10 — early booking and BP control next time.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Placenta praevia", src: "images/placenta-praevia.svg", mod: "Diagram", ctx: "Placenta praevia", loc: "Lower uterine segment", find: "Placenta covering or near the internal os", interp: "Painless bleeding; no vaginal examination", by: "Wikimedia Commons (after Medscape)", page: "https://commons.wikimedia.org/wiki/File:Placenta_previa-en.svg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Bleeding after 22 weeks", [F.s("Resuscitate, no VE, crossmatch, clot test"), F.a, F.d("Painful tense uterus?"), F.a, F.b([["Yes", F.e("Abruption → deliver if heavy/distress")], ["No", F.ok("Praevia → scan; caesarean if heavy")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Digital VE", "Torrential bleeding", "Scan first"], ["Judging abruption by visible loss", "Hidden bleeding, late shock", "Watch pulse, Hb, clotting"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Bedside test for coagulopathy?", "2 mL blood in a glass tube: no clot after 7 minutes or a soft clot that breaks down.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. Managing complications in pregnancy and childbirth: a guide for midwives and doctors, 2nd ed. Geneva: WHO; 2017. <a href="https://www.who.int/publications/i/item/9789241565493" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">Royal College of Obstetricians and Gynaecologists. Antepartum haemorrhage (Green-top Guideline No. 63), 2011.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["WHO MCPC", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
