/* Antepartum haemorrhage. Thin-page upgrade Round 4, 27 Nov 2026 (id, aphtriage calculator, image and related links kept).
   Sources: Bhutan Midwifery Standards 2018, Life-Saving Standard 2 'Bleeding in late pregnancy and childbirth' (read: APH = bleeding after 22 weeks
   until delivery; bleeding causes 50% of maternal deaths in Bhutan; abruption vs praevia vs ruptured uterus features; abruption → urgent delivery, ARM
   and trial of labour if near term, cephalic and > 4 cm, otherwise CS; praevia → prolong to 36+6 weeks if possible, corticosteroids if early delivery
   needed, CS in most, PPH risk; rupture → resuscitation and laparotomy; NO vaginal examination until praevia excluded by ultrasound; level I (BHU):
   BP, pulse, pallor, POG, blood loss, IV RL/NS, Foley, resuscitate, group and Hb, ampicillin 1 g (abruption, rupture), refer to CEmONC with escort and
   2 donors; level II (DH): transfuse, ultrasound, PVE only after praevia excluded, ARM if > 4 cm, else refer if no CS);
   India MoHFW STG Obstetrics & Gynaecology — APH and abruptio placentae (read: praevia painless recurrent bright red, high presenting part,
   malpresentation; no PV except in theatre with CS ready; TAS/TVS; > 20 mm from os after 35 weeks → trial of labour; any overlap → CS; types I–IV;
   abruption types and Sher grades 1–3; risk factors; complications incl. DIC, renal failure, Rh sensitisation; deliver within 8 h with ARM + oxytocin
   2.5 (max 5) units in 500 mL if bleeding heavy and vaginal delivery feasible; CS if fetus alive and delivery not imminent; anti-D if Rh-negative;
   betamethasone 12 mg IM × 2, 12 h apart if < 34 weeks);
   RCOG Green-top 27a Placenta praevia and accreta (Jauniaux 2019, DOI title verified, full text not read) and RCOG GTG 63 APH 2011, WHO MCPC 2017
   (previous page version). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "aph-preg",
title: "Antepartum Haemorrhage (APH)",
subtitle: "Bleeding after 22–24 weeks: resuscitate, never do a vaginal examination until praevia is excluded, tell abruption from praevia, and deliver when mother or baby is at risk",
age: "Pregnant women after 22–24 weeks", specs: ["obg", "emerg"],
keywords: ["antepartum haemorrhage", "APH", "placenta praevia", "placenta previa", "placental abruption", "abruptio placentae", "concealed haemorrhage", "uterine rupture", "vasa praevia", "DIC", "no vaginal examination", "placenta accreta", "Sher grade", "couvelaire uterus"],
related: ["pph-preg", "preeclampsia-preg", "anaemia-preg", "preterm-child", "pretermlabour-preg", "labour-preg", "shock-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Bleeding causes about half of maternal deaths in Bhutan; most is after birth, but APH — bleeding after 22 weeks and before delivery — can kill mother and baby within hours ${r(1)}.</p>
<div class="glance">
<div><h4>Never</h4><p><b>No vaginal examination</b> until ultrasound has excluded placenta praevia — or only in theatre with caesarean ready ${r(1)} ${r(2)}.</p></div>
<div><h4>Painful, tense uterus</h4><p>Placental abruption — bleeding may be hidden; shock out of proportion; deliver urgently ${r(1)}.</p></div>
<div><h4>Painless, soft uterus</h4><p>Placenta praevia — high presenting part or malpresentation; caesarean in most ${r(1)} ${r(2)}.</p></div>
<div><h4>Pain then sudden relief + shock</h4><p>Ruptured uterus — laparotomy now ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan Midwifery Standards: at a BHU check BP, pulse, pallor and gestation, start Ringer's lactate or saline, insert a Foley catheter, resuscitate, group and Hb, give ampicillin 1 g for abruption or rupture, and refer to a comprehensive EmONC hospital <b>with a medical escort and 2 blood donors</b>. District hospitals transfuse, scan, and either deliver or refer ${r(1)}.</p>`)}
` },
{ id: "overview", title: "Causes compared", html: `
${tbl(["Feature", "Placental abruption", "Placenta praevia", "Ruptured uterus"], [
["Bleeding", "Revealed, concealed or mixed; dark", "Painless, recurrent, bright red; often mild at first", "Variable; shock out of proportion"],
["Pain", "Constant abdominal pain", "None", "Severe pain in labour, relieved suddenly after a strong contraction"],
["Uterus", "Tense, tender, 'woody'; fetal parts hard to feel", "Soft, non-tender; fetal parts easy to feel", "Distended, tender, abnormal contour; fetal parts easily felt"],
["Fetus", "Reduced or absent movements; distress or death", "Usually normal", "Absent fetal heart"],
["Associations", "Hypertension, trauma, prior abruption, PPROM, multiple pregnancy, smoking", "Previous CS, multiparity, malpresentation, high head", "Obstructed labour, uterine scar, misuse of oxytocin"]
])}
<p class="small">Bhutan Midwifery Standards ${r(1)}; India STG ${r(2)}.</p>
` },
{ id: "patho", title: "Grading and types", html: `
<h3>Abruption — Sher grades (India STG)</h3>
${tbl(["Grade", "Features"], [["1", "Under 100–150 mL bleeding, non-tender uterus, no fetal distress (often a retrospective 'herald' bleed)"], ["2", "Tender uterus, fetal distress, concealed haemorrhage"], ["3", "Fetal death, maternal shock, extensive concealed haemorrhage, coagulopathy"]])}
<h3>Placenta praevia types</h3>
${tbl(["Type", "Placenta"], [["I", "Dips into the lower segment"], ["II", "Reaches the os but does not cover it"], ["III", "Covers the internal os"], ["IV", "Covers the os even at full dilatation"]])}
<p class="small">${r(2)}. Many placentas low at 18 weeks 'migrate' as the lower segment forms — rescan later in pregnancy ${r(2)}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan Midwifery Standards", "India STG", "RCOG / WHO", "This guide"], [
["Corticosteroid", "Dexamethasone (see preterm labour)", "Betamethasone 12 mg × 2, 12 h apart (< 34 w)", "Dexamethasone 6 mg × 4 or betamethasone 12 mg × 2", "Dexamethasone 6 mg IM 12-hourly × 4 (NEML) " + r(1) + r(2)],
["Praevia — timing", "Prolong to 36+6 weeks if possible", "By type, bleeding and maturity", "Planned birth late preterm/early term", "Aim for 36–37 weeks unless bleeding forces earlier " + r(1) + r(3)],
["Abruption — vaginal birth", "ARM and trial of labour if near term, cephalic, > 4 cm", "ARM + oxytocin, deliver within 8 h if feasible", "Vaginal if fetus dead and mother stable", "Vaginal if dead fetus or advanced labour; CS if fetus alive and delivery not imminent " + r(1) + r(2)],
["Anti-D", "—", "If Rh-negative", "Dose by local supply and Kleihauer", "Give where available " + r(2) + " " + LB.loc()]
])}
` },
{ id: "presentation", title: "Assessment", html: `
<ul>
<li>Amount and colour of bleeding, pain, fetal movements, previous caesarean, hypertension, trauma, labour ${r(1)}.</li>
<li>Pulse, BP, pallor, shock index; uterine tone, tenderness and contour; fundal height; lie and presentation; fetal heart ${r(1)}.</li>
<li>Show (blood-stained mucus) at the onset of labour is not APH ${r(1)}.</li>
</ul>
${box("red", "No digital vaginal examination", `<p>A vaginal examination with a low placenta can provoke torrential bleeding. Gentle speculum only after ultrasound excludes praevia — or examine in theatre with caesarean ready ${r(1)} ${r(2)}.</p>`)}
<h3>The typical patient</h3>
<p>A 34-year-old para 3 at 35 weeks in Pemagatshel with pre-eclampsia has sudden abdominal pain and dark bleeding; the uterus is hard and tender, fetal heart 90/min, pulse 118. <b>Placental abruption with fetal distress</b>: resuscitate, bedside clot test, crossmatch, magnesium sulfate for pre-eclampsia, urgent caesarean; prepare for PPH and DIC ${r(1)} ${r(2)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Show / labour", "Blood-stained mucus with contractions " + r(1)], ["Cervical lesion or ectropion", "Seen on speculum after praevia excluded"], ["Vasa praevia", "Bleeding at membrane rupture with sudden fetal distress"], ["Ruptured uterus", "Scar, obstructed labour, oxytocin " + r(1)], ["Haematuria / rectal bleeding", "Source outside the vagina"]])}` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li>Hb, blood group and crossmatch (2–4 units), clotting screen or bedside clot test, creatinine ${r(1)} ${r(2)}.</li>
<li><b>Ultrasound</b>: placental site (transvaginal by a skilled operator is safer and more accurate than transabdominal), presentation, fetal wellbeing. After 35 weeks: placental edge more than 20 mm from the os → trial of labour possible; any overlap → caesarean ${r(2)}.</li>
<li>Ultrasound often misses abruption — a normal scan does not exclude it ${LB.exp("STANDARD TEACHING")}.</li>
<li>Kleihauer where available for Rh-negative women.</li>
</ul>
` },
{ id: "staging", title: "APH triage", html: `<div class="calc" data-calc="aphtriage"></div>` },
{ id: "manage", title: "Management", html: `
<h3>All women</h3>
<ul>
<li>Left lateral tilt, oxygen, two large IV lines, Ringer's lactate or saline, Foley catheter, blood early; fresh whole blood or FFP for coagulopathy ${r(1)} ${r(2)}.</li>
<li>BHU or PHC: stabilise and refer with an escort and 2 donors; ampicillin 1 g if abruption or rupture is suspected ${r(1)}.</li>
</ul>
<h3>Placental abruption</h3>
<ul>
<li>Needs urgent delivery ${r(1)}.</li>
<li>Near term, cephalic, cervix more than 4 cm: amniotomy and trial of labour; if bleeding is heavy and vaginal birth feasible, deliver within 8 hours (ARM ± low-dose oxytocin — India STG: 2.5 units, not more than 5, in 500 mL) ${r(1)} ${r(2)}.</li>
<li>Fetus alive and birth not imminent, or fetal distress: caesarean ${r(1)} ${r(2)}.</li>
<li>Fully dilated: forceps or vacuum ${r(2)}.</li>
<li>Watch for DIC, renal failure and PPH ${r(2)}.</li>
</ul>
<h3>Placenta praevia</h3>
<ul>
<li>Heavy bleeding: caesarean whatever the gestation ${r(2)}.</li>
<li>Light or stopped bleeding: admit; aim to continue to about 36+6 weeks; corticosteroids if early birth is likely; iron; blood available ${r(1)}.</li>
<li>Mode: type I and anterior type II — trial of vaginal birth is possible; posterior type II, III, IV — caesarean ${r(2)}.</li>
<li>Previous caesarean with an anterior low placenta: think accreta — deliver at a centre with senior surgeons and blood ${r(3)}.</li>
</ul>
<h3>Ruptured uterus</h3>
<p>Resuscitate and perform immediate laparotomy — repair or hysterectomy ${r(1)}. See ${P("shock-adult", "Shock")}.</p>
<h3>For the baby</h3>
<ul><li>Under 34 weeks with birth likely within 7 days: dexamethasone 6 mg IM 12-hourly × 4 ${r(1)}. See ${P("pretermlabour-preg", "Preterm labour")}.</li><li>Under 32 weeks with imminent birth: magnesium sulfate for fetal neuroprotection ${LB.exp("WHO 2015")}.</li><li>Paediatrician at delivery.</li></ul>
<h3>After delivery</h3>
<p>Active management of the third stage; expect PPH ${r(1)} ${r(2)}. See ${P("pph-preg", "PPH")}.</p>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("dexamethasone"), "6 mg IM 12-hourly × 4 " + r(1), "Under 34 weeks"],
[dr("mgso4_obs", "Magnesium sulfate"), "4 g IV load + 1 g/h " + LB.exp("REGIMEN"), "Neuroprotection under 32 weeks / pre-eclampsia"],
[dr("ampicillin"), "1 g IV " + r(1), "Before referral (abruption, rupture)"],
[dr("oxytocin"), "Augmentation 2.5 units in 500 mL (max 5) " + r(2) + "; 10 units IM third stage", "Not in obstruction or with suspected rupture"],
[dr("anti_d"), "Per local protocol " + r(2), "Rh negative; supply limited"],
[dr("tranexamic_acid"), "1 g IV " + LB.exp("PPH USE"), "Postpartum bleeding"]
])}
` },
{ id: "populations", title: "Special groups", html: `<ul><li><b>Previous caesarean:</b> higher risk of praevia, accreta and rupture ${r(3)}.</li><li><b>Pre-eclampsia:</b> abruption risk — see ${P("preeclampsia-preg", "Pre-eclampsia")}.</li><li><b>Trauma (road crashes, falls):</b> abruption can follow even minor abdominal trauma ${r(2)}.</li><li><b>Rh-negative women:</b> feto-maternal haemorrhage risk ${r(2)}.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Heavy bleeding at a BHU, 3 hours from a hospital", "IV fluids, catheter, ampicillin, escort, 2 donors, call ahead; consider aeromedical retrieval " + r(1) + " " + LB.loc()],
["Dead fetus, abruption, mother stable", "Vaginal delivery with ARM; correct clotting " + r(1)],
["Recurrent small bleeds from praevia at 30 weeks", "Admit or stay near the hospital; steroids; iron; blood available " + r(1)],
["Clotting test shows no clot by 7 minutes", "DIC — fresh whole blood / FFP, deliver " + LB.exp("BEDSIDE TEST")],
["Placenta praevia with previous CS", "Plan for accreta at a referral centre " + r(3)]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Maternal: haemorrhagic shock, DIC, renal failure, PPH, Couvelaire uterus, hysterectomy, death. Fetal: hypoxia, prematurity, growth restriction (chronic abruption), stillbirth. Rh sensitisation ${r(2)}.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Hb and iron after delivery.</li><li>Next pregnancy: early scan for placental site; higher abruption risk — control blood pressure.</li><li>Debrief, especially after stillbirth.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Placenta praevia", src: "images/placenta-praevia.svg", mod: "Diagram", ctx: "Placenta praevia", loc: "Lower uterine segment", find: "Placenta covering or near the internal os", interp: "Painless bleeding; no vaginal examination", by: "Wikimedia Commons (after Medscape)", page: "https://commons.wikimedia.org/wiki/File:Placenta_previa-en.svg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Bleeding after 22 weeks", [F.s("Resuscitate; NO vaginal examination"), F.a, F.d("Pain and uterus?"), F.a, F.b([["Tense, tender", F.e("Abruption — urgent delivery")], ["Soft, painless", F.s("Praevia — ultrasound; CS if heavy")], ["Pain stopped, shock", F.e("Rupture — laparotomy")]]), F.a, F.ok("Steroids if < 34 weeks; prepare for PPH")])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Digital vaginal examination", "Torrential bleeding from praevia", "Ultrasound first " + r(1)],
["Judging loss by visible blood in abruption", "Concealed haemorrhage, late shock", "Watch pulse, BP, uterine size " + r(1)],
["Referring without donors or escort", "Death on the road", "Escort + 2 donors " + r(1)],
["Forgetting PPH after delivery", "Second haemorrhage", "Active third stage, uterotonics ready " + r(1)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Painless bright red bleeding at 32 weeks, soft uterus — first rule?", "No vaginal examination until ultrasound excludes placenta praevia.")}
${qa("Intern/MO", "What does a BHU send with a woman referred for APH?", "A medical escort and 2 blood donors, with IV fluids running and a catheter in (Bhutan Midwifery Standards).")}
${qa("Registrar", "Placental edge 25 mm from the os at 36 weeks — mode of birth?", "Trial of labour is reasonable (more than 20 mm).")}
${qa("Registrar", "Sher grade 3 abruption — features?", "Fetal death, maternal shock, extensive concealed bleeding, coagulopathy.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Midwifery Standards 2018: Life-Saving Midwifery Practice Standard 2 — Bleeding in late pregnancy and childbirth (antepartum haemorrhage).</li>
<li id="ref-2">Ministry of Health &amp; Family Welfare, Government of India. Standard Treatment Guidelines — Obstetrics &amp; Gynaecology: Antepartum haemorrhage; Abruptio placenta.</li>
<li id="ref-3">Jauniaux E, Alfirevic Z, Bhide AG, et al. Placenta praevia and placenta accreta: diagnosis and management. Green-top Guideline No. 27a. BJOG 2019;126:e1–e48. <a href="https://doi.org/10.1111/1471-0528.15306" target="_blank" rel="noopener">doi:10.1111/1471-0528.15306</a></li>
<li id="ref-4">Royal College of Obstetricians and Gynaecologists. Antepartum haemorrhage (Green-top Guideline No. 63), 2011; World Health Organization. Managing complications in pregnancy and childbirth, 2nd ed. 2017.</li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan Midwifery Standard 2", "<span class='pass'>Read</span>", "27 Nov 2026"], ["India STG APH/abruption", "<span class='pass'>Read</span>", "Library PDF"], ["RCOG GTG 27a", "<span class='unv'>Title/DOI only</span>", "Full text not read"], ["MgSO4 and TXA regimens", "<span class='unv'>Marked</span>", "Not in the sources read"], ["Calculator", "<span class='pass'>Kept</span>", "aphtriage"]], "qc")}` }
]
});
})();
