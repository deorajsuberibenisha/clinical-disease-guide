/* Prolonged and obstructed labour (with normal labour monitoring). Thin-page upgrade Round 3, 27 Nov 2026 (id, labourprogress calculator, related kept).
   Sources: Bhutan STG 2024 §11.6 Prolonged labour (text read from _work/stg-full.txt — 3 Ps, signs, partograph, reassess, vitals and FHR, pethidine,
   hydration, refer; flowchart via BCR extract — ≥ 12 h after 4 cm; obstructed signs; IV RL, Foley, ampicillin 1 g IV stat then 500 mg 6-hourly);
   Bhutan Midwifery Standards 2018 (Bhutan Medical Library, read: labour diagnosis by dilatation; VE 4-hourly to 7 cm, 2-hourly 7–10 cm, every 15–30 min
   in second stage; maternal temp 2-hourly, pulse 30-min, BP 4-hourly, urine each void; FHR every 30 min active / 15 min second stage (low risk), every
   15 / 5 min high risk; FHR < 110 or > 160 alert; ROM > 18 h → ampicillin and refer; thick meconium without CS facility → refer; partograph from 4 cm,
   alert line 1 cm/h, action line 4 h to the right; mobility, fluids, light diet, companion; pethidine 50 mg IM if no fetal distress and < 6 cm with
   naloxone available; refer if latent > 8 h, right of alert line, or labour > 12 h; oxytocin 10 IU IM in third stage, CCT, delayed cord clamping 1–3 min);
   WHO Labour Care Guide user's manual 2020 (downloaded from iris.who.int to _work/research/r3/dl: LCG from 5 cm; alert thresholds — cervix no progress
   ≥ 6 h at 5 cm, ≥ 5 h at 6, ≥ 3 h at 7, ≥ 2.5 h at 8, ≥ 2 h at 9; second stage ≥ 3 h nulliparous / ≥ 2 h multiparous; FHR < 110 or ≥ 160; contractions
   ≤ 2 or > 5 per 10 min, duration < 20 or > 60 s; pulse < 60 or ≥ 120; SBP < 80 or ≥ 140; DBP ≥ 90; temp < 35 or ≥ 37.5; protein/acetone ++; thick
   meconium or blood; OP/OT position; caput or moulding +++); WHO 2018 intrapartum care recommendations (downloaded: active first stage from 5 cm,
   usually ≤ 12 h first labours / ≤ 10 h later; 1 cm/h threshold inaccurate and not recommended; no intervention before 5 cm if mother and baby well;
   VE every 4 h; intermittent auscultation, no routine CTG; epidural or parenteral opioids on request; oral fluids and food; mobility; no routine
   amniotomy/early oxytocin/antispasmodics/IV fluids to prevent delay; second stage usually ≤ 3 h / ≤ 2 h; position of choice; own urge to push; no
   routine episiotomy; no fundal pressure; oxytocin 10 IU IM/IV for all births; delayed cord clamping ≥ 1 min; no routine antibiotics);
   Bhutan National Caesarean Section Guideline (read: urgency categories 1–4 with decision-to-delivery 30 min / 60 min / 4–6 h; TOLAC after one lower-
   segment CS, option in active labour > 5 cm; indications incl. CPD, failed operative vaginal delivery, malpresentation). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "labour-preg",
title: "Prolonged & Obstructed Labour",
subtitle: "Use the partograph or Labour Care Guide, think of the 3 Ps when progress slows, augment only when there is no obstruction, and act fast on signs of impending rupture",
age: "Women in labour", specs: ["obg", "emerg"],
keywords: ["prolonged labour", "obstructed labour", "normal labour", "partograph", "Labour Care Guide", "LCG", "active phase", "second stage", "cephalopelvic disproportion", "Bandl's ring", "oxytocin augmentation", "uterine rupture", "obstetric fistula", "malpresentation", "intermittent auscultation", "fetal heart rate", "prolonged rupture of membranes", "TOLAC", "VBAC"],
related: ["pph-preg", "puerperal-preg", "asphyxia-child", "aph-preg", "pretermlabour-preg", "preeclampsia-preg"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Obstructed labour causes uterine rupture, fistula, sepsis, PPH and stillbirth. A partograph or the WHO Labour Care Guide turns slow progress into a timely decision ${r(1)} ${r(3)}.</p>
<div class="glance">
<div><h4>Monitor</h4><p>Fetal heart every 30 min in active labour, every 15 min in second stage; maternal pulse every 30 min; VE every 4 hours ${r(2)} ${r(4)}.</p></div>
<div><h4>Alert</h4><p>No progress for 6 h at 5 cm, 5 h at 6, 3 h at 7, 2.5 h at 8, 2 h at 9 cm; second stage over 3 h (first baby) or 2 h ${r(3)}.</p></div>
<div><h4>Obstructed</h4><p>IV Ringer's lactate, catheter, ${dr("ampicillin")}, caesarean or urgent referral — <b>no oxytocin</b> ${r(1)}.</p></div>
<div><h4>Weak contractions</h4><p>Only without obstruction, and where caesarean is possible: amniotomy ± ${dr("oxytocin")} infusion ${r(1)} ${LB.loc()}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §11.6 defines prolonged labour as 12 hours or more after 4 cm ${r(1)}. The Midwifery Standards 2018 use the modified WHO partograph from 4 cm with an alert and action line and ask BHUs to refer if the latent phase passes 8 hours, progress crosses the alert line, or labour passes 12 hours ${r(2)}. WHO 2018 and the Labour Care Guide start the active phase at 5 cm and no longer use 1 cm/hour as the normal rate ${r(3)} ${r(4)}. Caesarean section is done at district hospitals with obstetric cover; the national CS guideline sets decision-to-delivery times ${r(5)} ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Definitions", html: `
${tbl(["Term", "Meaning"], [
["Labour", "Regular painful contractions with progressive cervical change; dilatation is the best sign " + r(2)],
["Latent first stage", "Up to 5 cm (WHO); no standard length — can be long " + r(4)],
["Active first stage", "From 5 cm (WHO; Bhutan partograph and STG: 4 cm) to full dilatation; usually ≤ 12 h in a first labour, ≤ 10 h later " + r(4) + r(1)],
["Second stage", "Full dilatation to birth; usually ≤ 3 h first labour, ≤ 2 h later " + r(4)],
["Prolonged labour (STG)", "12 hours or more after 4 cm without delivery " + r(1)],
["Prolonged latent phase (Bhutan midwifery)", "Not in active labour 8 hours after contractions or rupture of membranes — refer from BHU " + r(2)],
["Obstructed labour", "No descent despite good contractions because of a mechanical block (pelvis or baby) " + r(1)]
])}
` },
{ id: "patho", title: "Pathophysiology — the 3 Ps", html: `
${tbl(["P", "Problems"], [["Power", "Weak or uncoordinated contractions, poor maternal effort"], ["Passenger", "Malpresentation, malposition (OP), abnormal lie, large baby"], ["Passage", "Small or deformed bony pelvis, soft-tissue tumours"]])}
<p class="small">STG §11.6 ${r(1)}.</p>
${F.chart("Obstruction", [F.s("Disproportion or malpresentation"), F.a, F.s("Strong contractions thin the lower segment (Bandl's ring)"), F.a, F.e("Uterine rupture; pressure necrosis → vesicovaginal fistula; fetal death")])}
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024 / Midwifery Standards 2018", "WHO 2018 / LCG 2020", "This guide"], [
["Active phase starts", "4 cm (partograph)", "5 cm", "Use the LCG from 5 cm where adopted; the partograph from 4 cm is still acceptable " + r(2) + r(3) + " " + LB.loc()],
["Normal rate", "Alert line 1 cm/h; action line 4 h later", "1 cm/h is inaccurate; use time limits per centimetre", "LCG time limits " + r(3) + r(4)],
["Prolonged labour", "≥ 12 h after 4 cm; BHU refers at > 12 h", "Active stage usually ≤ 12 h (first) / ≤ 10 h (later)", "Act on LCG alerts; refer early from BHUs " + r(1) + r(2)],
["Interventions to prevent delay", "—", "No routine amniotomy, early oxytocin, antispasmodics or IV fluids", "Avoid routine use " + r(4)],
["Pain relief", "Pethidine 50 mg IM if < 6 cm and no fetal distress", "Epidural or parenteral opioids on request; relaxation, massage", "Offer choices; naloxone ready " + r(2) + r(4)],
["Antibiotic in obstructed labour", "Ampicillin 1 g IV then 500 mg 6-hourly", "—", "STG " + r(1)]
])}
` },
{ id: "presentation", title: "Assessment and monitoring", html: `
<h3>On admission</h3>
<p>History (onset of contractions, membranes, bleeding, fetal movements, previous CS), ANC record and gestation, vitals, abdominal exam (lie, presentation, fifths palpable, contractions in 10 minutes), fetal heart by Pinard or Doppler (no routine CTG), and VE with consent ${r(2)} ${r(4)}. Under 34 weeks: refer before delivery if possible ${r(2)}.</p>
<h3>Routine monitoring (Bhutan Midwifery Standards)</h3>
${tbl(["What", "How often"], [
["Fetal heart (count a full minute after a contraction)", "Every 30 min in active first stage; every 15 min in second stage (low risk). High risk: every 15 min and every 5 min"],
["Maternal pulse", "Every 30 min"],
["Temperature", "Every 2 hours"],
["Blood pressure", "Every 4 hours"],
["Urine (volume, protein, acetone)", "Each void; encourage voiding at least 2-hourly"],
["Vaginal examination", "4-hourly to 7 cm, 2-hourly 7–10 cm, every 15–30 min in second stage; also after membranes rupture"],
["Contractions", "Number in 10 min and duration, every 30 min"]
])}
<p class="small">${r(2)}</p>
<h3>WHO Labour Care Guide — alert values</h3>
${tbl(["Observation", "Alert"], [
["Fetal heart rate", "Under 110 or 160 and above; late or prolonged decelerations"],
["Liquor", "Thick meconium or blood"],
["Contractions", "2 or fewer, or more than 5, per 10 min; lasting under 20 or over 60 s"],
["Maternal pulse", "Under 60 or 120 and above"],
["Blood pressure", "Systolic under 80 or 140 and above; diastolic 90 and above"],
["Temperature", "Under 35.0 or 37.5 °C and above"],
["Urine", "Protein ++ or acetone ++"],
["Position, caput, moulding", "Occiput posterior or transverse; caput or moulding +++"],
["Cervix", "No progress for ≥ 6 h at 5 cm, ≥ 5 h at 6, ≥ 3 h at 7, ≥ 2.5 h at 8, ≥ 2 h at 9 cm"],
["Second stage", "≥ 3 h nulliparous, ≥ 2 h multiparous"]
])}
<p class="small">An alert means: reassess, tell the senior midwife or doctor, and record the action ${r(3)}.</p>
${box("red", "Impending rupture / obstruction", `<ul><li>Bandl's ring or a tender, stretched lower segment</li><li>Head 3/5 or more palpable at full dilatation; severe moulding; caput +++</li><li>Maternal tachycardia, dehydration, ketonuria, haematuria, distended bladder</li><li>Fetal distress</li></ul><p>${r(1)}</p>`)}
<h3>The typical patient</h3>
<p>A 19-year-old primigravida in Lhuentse has been at 6 cm for 6 hours with strong contractions; head 3/5 palpable, severe moulding, dark urine and pulse 116. <b>Obstructed labour</b>: IV Ringer's lactate, Foley catheter, ampicillin 1 g IV, no oxytocin, call the obstetrician — Category 1–2 caesarean or emergency transfer with a health worker ${r(1)} ${r(5)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Action"], [
["False labour", "Irregular contractions, no cervical change", "Reassure; review"],
["Latent phase", "Under 5 cm — slow progress is normal if mother and baby are well", "No augmentation or CS for slow latent progress " + r(4)],
["Inefficient contractions", "Weak, infrequent, no obstruction", "Amniotomy ± oxytocin where CS available"],
["Malposition (OP)", "Backache, slow descent", "Mobility, position change; review"],
["Uterine rupture", "Sudden pain, contractions stop, shock, fetal distress, presenting part recedes", "Resuscitate; laparotomy " + P("shock-adult", "Shock")]
])}
` },
{ id: "invest", title: "Investigations", html: `<ul><li>Haemoglobin, blood group and crossmatch (2 units for planned CS) ${r(5)}.</li><li>Urine for protein and ketones ${r(2)}.</li><li>Ultrasound for presentation or lie if uncertain.</li><li>CTG only when indicated (not routine in low-risk labour) ${r(4)}; see the iCTG SOP where available.</li></ul>` },
{ id: "staging", title: "Labour progress tool", html: `<div class="calc" data-calc="labourprogress"></div>` },
{ id: "manage", title: "Management", html: `
<h3>Supportive care in every labour (WHO 2018, Bhutan Midwifery Standards)</h3>
<ul>
<li>Companion of her choice; explain progress; consent before each examination ${r(2)} ${r(4)}.</li>
<li>Mobility and upright positions; oral fluids and light food for low-risk women ${r(2)} ${r(4)}.</li>
<li>Pain relief: positions, massage, breathing, warm water; ${dr("pethidine")} 50 mg IM if under 6 cm and no fetal distress, with naloxone available; epidural where an anaesthetist is available ${r(2)} ${r(4)}.</li>
<li>No routine shaving, enema, amniotomy, early oxytocin or IV fluids to speed labour ${r(4)}.</li>
</ul>
<h3>When progress is slow (no obstruction)</h3>
<ol>
<li>Reassess the 3 Ps; check bladder, hydration, pain, position ${r(1)}.</li>
<li>Rehydrate (oral or IV Ringer's lactate), empty the bladder, encourage mobility ${r(1)}.</li>
<li>Amniotomy if membranes intact, then ${dr("oxytocin")} infusion titrated to 3–5 contractions in 10 minutes with fetal heart monitoring — only in a facility that can do a caesarean ${LB.exp("REGIMEN BY HOSPITAL PROTOCOL")} ${LB.loc()}.</li>
<li>Reassess after 2–4 hours; if no progress, caesarean ${r(5)}.</li>
<li>At a BHU: refer at the triggers above — do not start oxytocin ${r(2)}.</li>
</ol>
<h3>Obstructed labour</h3>
<ul>
<li><b>No oxytocin.</b> IV Ringer's lactate for dehydration, Foley catheter, ${dr("ampicillin")} 1 g IV stat then 500 mg 6-hourly, pain relief, urgent caesarean or referral ${r(1)}.</li>
<li>Dead fetus with obstruction: caesarean, or destructive delivery by experienced hands only ${LB.exp("STANDARD PRACTICE")}.</li>
<li>Caesarean urgency: Category 1 (immediate threat — suspected rupture, abruption, cord prolapse, persistent fetal bradycardia) within 30 min; Category 2 within 60 min ${r(5)}.</li>
</ul>
<h3>Second stage</h3>
<ul>
<li>Position of her choice; push with her own urge; perineal massage, warm compresses and hands-on support; no routine episiotomy; no fundal pressure ${r(4)}.</li>
<li>Delay with the head low and engaged: assisted vaginal birth (vacuum) if criteria are met and the operator is trained; otherwise CS ${r(5)} ${LB.exp("CRITERIA")}.</li>
</ul>
<h3>Third stage and after</h3>
<ul>
<li>${dr("oxytocin")} 10 IU IM for every birth; controlled cord traction by trained staff; delayed cord clamping (at least 1 minute; 1–3 min in the Bhutan standard) ${r(2)} ${r(4)}.</li>
<li>Check bleeding, uterine tone, pulse and temperature regularly for 24 hours ${r(4)}. See ${P("pph-preg", "PPH")}.</li>
<li>After prolonged obstruction: bladder catheter for 7–14 days and check for fistula ${LB.exp("DURATION")}.</li>
</ul>
<h3>Ruptured membranes</h3>
<p>Ruptured more than 18 hours: start ampicillin and refer to hospital (Bhutan midwifery standard). Thick meconium where CS is not available: refer immediately ${r(2)}.</p>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("oxytocin"), "10 IU IM after birth (PPH prevention) " + r(2) + r(4) + "; augmentation by titrated infusion " + LB.exp("PROTOCOL"), "Never in obstruction"],
[dr("ampicillin"), "1 g IV stat then 500 mg 6-hourly " + r(1), "Prolonged/obstructed labour; ROM > 18 h"],
[dr("pethidine"), "50 mg IM " + r(2), "Under 6 cm, no fetal distress; naloxone ready"],
[dr("ringer_lactate"), "IV for dehydration " + r(1), "Not routinely to speed labour " + r(4)]
])}
` },
{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Previous caesarean:</b> trial of labour is an option after one lower-segment CS, including when she arrives in active labour over 5 cm, after discussion — only in a hospital with theatre ${r(5)}. Scar pain, bleeding or fetal distress = possible rupture.</li>
<li><b>Preterm (under 34 weeks):</b> refer before delivery if possible; call the paediatrician ${r(2)}. See ${P("pretermlabour-preg", "Preterm labour")}.</li>
<li><b>High risk (pre-eclampsia, heart disease):</b> closer fetal monitoring (every 15 / 5 min) and specialist care ${r(2)}.</li>
<li><b>Adolescents and short women:</b> higher risk of disproportion — deliver in a facility.</li>
</ul>
` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Obstructed labour at a BHU", "IV fluids, catheter, ampicillin, emergency transfer with a health worker; call ahead " + r(1)],
["Long road to the district hospital, latent phase at 8 h", "Refer now rather than at night or in bad weather " + r(2) + " " + LB.loc()],
["Woman refuses caesarean", "Explain risks with her companion; document; keep monitoring"],
["Fetal heart below 110 with thick meconium", "Left side, call senior, prepare urgent delivery " + r(3)],
["Dead fetus, obstructed", "Caesarean or destructive delivery by experts"]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Uterine rupture, PPH, puerperal sepsis, vesicovaginal or rectovaginal fistula, foot drop (nerve injury), stillbirth, neonatal asphyxia and sepsis ${r(1)}. See ${P("puerperal-preg", "Puerperal sepsis")} and ${P("asphyxia-child", "Birth asphyxia")}.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Bladder care; ask about leaking urine or faeces (fistula) before discharge and at the postnatal visit.</li><li>Counsel about the next birth: facility delivery, early arrival.</li><li>Debrief the woman and family.</li></ul>` },
{ id: "images", title: "Images", html: `<p>The WHO Labour Care Guide form and the modified WHO partograph are in the source documents ${r(3)} ${r(2)}. Use the calculator above to check progress against the LCG time limits.</p>` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Slow progress in active labour", [F.d("Signs of obstruction?"), F.a, F.b([["Yes", F.e("Fluids, catheter, ampicillin, CS / refer — no oxytocin")], ["No", F.s("3 Ps, hydrate, bladder, mobilise")]]), F.a, F.d("LCG alert time passed?"), F.a, F.b([["Yes", F.e("Amniotomy ± oxytocin (CS facility) or refer")], ["No", F.ok("Continue monitoring")]]), F.a, F.ok("Delivery; oxytocin 10 IU IM; watch for PPH")])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["No partograph or LCG", "Late recognition", "Chart from active labour " + r(2) + r(3)],
["Oxytocin in obstruction", "Uterine rupture", "Exclude obstruction first " + r(1)],
["Augmenting before 5 cm", "Unnecessary interventions and CS", "Latent phase can be long " + r(4)],
["Fundal pressure", "Uterine rupture, trauma", "Not recommended " + r(4)],
["Keeping a woman too long at a BHU", "Obstruction on the road", "Refer at the 8 h / alert / 12 h triggers " + r(2)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is Bandl's ring?", "A visible ridge between the thick upper and thin lower uterine segments — impending rupture.")}
${qa("Intern/MO", "How often should the fetal heart be checked in a low-risk woman?", "Every 30 minutes in active first stage, every 15 minutes in second stage (Bhutan midwifery standard).")}
${qa("Registrar", "WHO LCG alert for a woman at 7 cm?", "No progress for 3 hours or more.")}
${qa("Registrar", "First steps in obstructed labour?", "IV Ringer's lactate, catheter, ampicillin 1 g IV, no oxytocin, urgent caesarean or referral.")}
${qa("Specialist", "Why did WHO drop the 1 cm/hour rule?", "Many women progress more slowly with normal outcomes; the rule led to unnecessary interventions.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §11.6 Prolonged labour (with flowchart).</li>
<li id="ref-2">Ministry of Health, Bhutan. Midwifery Standards 2018: Intrapartum Care Standards 1–3.</li>
<li id="ref-3">World Health Organization. WHO Labour Care Guide: user's manual. Geneva: WHO; 2020. <a href="https://www.who.int/publications/i/item/9789240017566" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">World Health Organization. WHO recommendations: intrapartum care for a positive childbirth experience. Geneva: WHO; 2018. <a href="https://www.who.int/publications/i/item/9789241550215" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-5">Ministry of Health, Bhutan. National Caesarean Section Guideline.</li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["STG §11.6", "<span class='pass'>Read</span>", "Text; flowchart via BCR extract"], ["Bhutan Midwifery Standards 2018", "<span class='pass'>Read</span>", "Intrapartum standards"], ["WHO LCG 2020 and WHO 2018", "<span class='pass'>Read</span>", "Downloaded from WHO"], ["Oxytocin augmentation regimen", "<span class='unv'>Not sourced</span>", "Use hospital protocol"], ["Calculator", "<span class='pass'>Updated</span>", "Monitoring intervals now match the Bhutan standard"]], "qc")}` }
]
});
})();
