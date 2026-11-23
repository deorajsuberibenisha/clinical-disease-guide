/* Prolonged and obstructed labour (Bhutan STG 11.6, WHO Labour Care Guide 2020, WHO MCPC) */
registerPage({
id: "labour-preg",
title: "Prolonged & Obstructed Labour",
subtitle: "Use the partograph or Labour Care Guide, think of the 3 Ps when progress slows, augment only when there is no obstruction, and act fast on signs of impending rupture",
age: "Women in labour", specs: ["obg", "emerg"],
keywords: ["prolonged labour", "obstructed labour", "partograph", "Labour Care Guide", "cephalopelvic disproportion", "Bandl's ring", "oxytocin augmentation", "uterine rupture", "obstetric fistula", "malpresentation"],
related: ["pph-preg", "puerperal-preg", "asphyxia-child", "aph-preg"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Obstructed labour causes uterine rupture, fistula, sepsis, PPH and stillbirth. The partograph turns slow progress into a timely decision.</p>
<div class="glance">
<div><h4>Monitor</h4><p>Partograph/LCG: cervix, descent, contractions, fetal heart, maternal vitals.</p></div>
<div><h4>3 Ps</h4><p>Power, passenger, passage.</p></div>
<div><h4>Obstructed</h4><p>Fluids, catheter, antibiotics, caesarean — <b>no oxytocin</b>.</p></div>
<div><h4>Weak contractions</h4><p>Amniotomy ± ${dr("oxytocin")} augmentation where caesarean is available.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 11.6: prolonged labour if over 12 h after 4 cm; IV Ringer's lactate, Foley catheter, ampicillin 1 g IV stat then 500 mg 6-hourly, pethidine, refer. Bhutan uses the WHO partograph; caesarean section is available at district hospitals with obstetric cover. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Definitions", html: `${tbl(["Term", "Meaning"], [["Active phase", "From 5 cm (WHO 2018; STG: 4 cm)"], ["Prolonged active phase", "Crossing the action line, or LCG time limits at each centimetre"], ["Prolonged second stage", "Over 3 h nulliparous, over 2 h multiparous (with epidural longer)"], ["Obstructed", "No descent despite good contractions — mechanical"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Obstruction", [F.s("Disproportion or malpresentation"), F.a, F.s("Strong contractions → thinning lower segment (Bandl's ring)"), F.a, F.e("Rupture, fistula from pressure necrosis, fetal death")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG / partograph", "WHO 2018/2020 LCG", "This guide"], [["Active phase start", "4 cm", "5 cm", "LCG thresholds " + LB.loc()], ["Expected rate", "1 cm/h", "Slower acceptable (time limits per cm)", "Use LCG limits; act on obstruction any time"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Maternal: pulse, BP, temperature, dehydration, ketones, bladder, exhaustion.</li><li>Abdomen: fifths palpable, lie, contractions, lower segment tenderness, Bandl's ring.</li><li>VE: dilatation, station, position, moulding, caput, liquor.</li></ul>${box("red", "Impending rupture/obstruction", `<ul><li>Bandl's ring, tender stretched lower segment</li><li>Head 3/5+ palpable with full dilatation, severe moulding</li><li>Haematuria, maternal tachycardia, fetal distress</li></ul>`)}<h3>The typical patient</h3><p>A 19-year-old primigravida in Lhuentse has been at 6 cm for 6 hours with strong contractions; head 3/5 palpable, severe moulding, dark urine. <b>This is obstructed labour</b>: IV Ringer's, catheter, ampicillin, no oxytocin, urgent caesarean or transfer.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["False labour", "Irregular contractions, no cervical change"], ["Latent phase", "Under 5 cm — slower progress is normal"], ["Inefficient contractions", "Weak, infrequent — augmentation if no obstruction"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Hb, group and crossmatch; urine for ketones/protein; ultrasound for presentation if uncertain.</p>` },
{ id: "staging", title: "Labour progress tool", html: `<div class="calc" data-calc="labourprogress"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Support, mobilise, hydrate, empty bladder, pain relief (pethidine 50–100 mg IM).</li><li>Inefficient uterine action: amniotomy; oxytocin infusion titrated (start 2.5 units in 500 mL, increase every 30 min) with fetal monitoring — not in obstruction, not grand multipara or scar outside a hospital.</li><li>Obstructed: Ringer's lactate, catheter, ampicillin 2 g IV, caesarean (or symphysiotomy/destructive delivery for dead fetus in expert hands).</li><li>Second stage delay with head engaged: assisted vaginal birth (vacuum) if criteria met.</li><li>After delivery: active third stage, PPH watch, catheter 7–14 days if prolonged obstruction (fistula prevention).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("oxytocin"), "Titrated infusion", "Augmentation only without obstruction"], [dr("ampicillin"), "2 g IV (STG 1 g)", "Prolonged/obstructed labour"], [dr("pethidine"), "50–100 mg IM", "Analgesia"], [dr("ringer_lactate"), "1 L over 1–2 h", "Dehydration"]])}` },
{ id: "populations", title: "Previous caesarean", html: `<p>Trial of labour only in hospital with theatre; avoid high-dose oxytocin; scar pain or bleeding = rupture.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Obstructed labour at BHU", "IV fluids, catheter, antibiotics, emergency transfer with a health worker"], ["Dead fetus, obstructed", "Caesarean or destructive delivery by experts"]])}` },
{ id: "complications", title: "Complications", html: `<p>Uterine rupture, PPH, sepsis, vesicovaginal/rectovaginal fistula, nerve injury, stillbirth, neonatal asphyxia.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Bladder care; screen for fistula (leaking urine); counselling about the next birth (facility delivery).</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Slow progress", [F.d("Signs of obstruction?"), F.a, F.b([["Yes", F.e("Fluids, catheter, antibiotics, caesarean")], ["No", F.s("Amniotomy ± oxytocin, reassess in 2–4 h")]]), F.a, F.ok("Delivery; PPH prevention")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No partograph", "Late recognition", "Record every 4 h (VE), fetal heart every 30 min"], ["Oxytocin in obstruction", "Rupture", "Exclude obstruction first"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "What is Bandl's ring?", "A visible ridge between thick upper and thin lower uterine segments — impending rupture.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. WHO Labour Care Guide: user's manual. Geneva: WHO; 2020. <a href="https://www.who.int/publications/i/item/9789240017566" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 11.6.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["STG flowchart", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
