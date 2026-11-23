/* Uterine fibroids (FIGO 2011/2018, ACOG 2021) */
registerPage({
id: "fibroids-adult",
title: "Uterine Fibroids (Leiomyomas)",
subtitle: "Common, benign and often silent: treat heavy bleeding and anaemia, relieve pressure symptoms, plan surgery by size, site and wish for pregnancy, and watch for red degeneration in pregnancy",
age: "Women of reproductive age", specs: ["obg"],
keywords: ["fibroids", "leiomyoma", "myoma", "heavy menstrual bleeding", "myomectomy", "hysterectomy", "FIGO classification", "red degeneration", "submucosal fibroid", "anaemia"],
related: ["aub-adult", "anaemia-adult", "ovarian-adult", "pcos-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Symptoms</h4><p>Heavy periods, pressure, subfertility, pain — many have none.</p></div>
<div><h4>Medical</h4><p>${dr("tranexamic_acid")}, NSAIDs, COC/progestogens, LNG-IUS; iron.</p></div>
<div><h4>Surgery</h4><p>Myomectomy (fertility) or hysterectomy.</p></div>
<div><h4>Red flag</h4><p>Rapid growth after menopause → sarcoma concern.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Ultrasound at district hospitals; myomectomy/hysterectomy at referral hospitals. GnRH agonists and ulipristal are not on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "FIGO location", html: `${tbl(["Type", "Location", "Effect"], [["0–2", "Submucosal", "Heavy bleeding, subfertility — hysteroscopic resection"], ["3–5", "Intramural", "Bleeding, bulk"], ["6–7", "Subserosal / pedunculated", "Pressure; torsion of pedunculated fibroid"], ["8", "Cervical, other", "Obstruction"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Fibroids", [F.s("Oestrogen/progesterone-dependent smooth muscle tumours"), F.a, F.s("Grow in reproductive years, shrink after menopause"), F.e("Degeneration (pain), bleeding, pressure")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Option", "Note", "This guide"], [["Pre-operative shrinkage", "GnRH agonist 3 months", "Not available on NEML", "Iron and correct anaemia first " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Heavy/prolonged periods, anaemia, pelvic pressure, frequency, constipation, enlarged irregular uterus.</li></ul><h3>The typical patient</h3><p>A 42-year-old with heavy periods and Hb 8.6 has a 16-week-size irregular uterus; ultrasound shows multiple intramural fibroids; family complete. <b>Symptomatic fibroids</b>: iron, tranexamic acid during menses, then hysterectomy at a referral hospital.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Adenomyosis", "Diffuse tender bulky uterus"], ["Ovarian mass", "Separate from uterus on scan"], ["Pregnancy", "Test"], ["Sarcoma", "Rapid growth, postmenopausal"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Pregnancy test, Hb, ultrasound (size, number, location); endometrial sampling if 45+ or risk.</p>` },
{ id: "staging", title: "AUB tool", html: `<div class="calc" data-calc="aubplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Asymptomatic: no treatment; ultrasound if growing.</li><li>Heavy bleeding: TXA, NSAID, hormonal methods (LNG-IUS less effective with distorted cavity).</li><li>Submucosal: hysteroscopic resection.</li><li>Fertility wish: myomectomy.</li><li>Completed family/severe: hysterectomy.</li><li>Red degeneration in pregnancy: analgesia (paracetamol, opioids; avoid NSAIDs after 20 weeks), rest.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("tranexamic_acid"), "1 g TDS", "During menses"], [dr("ibuprofen"), "400 mg TDS", "Pain/bleeding"], [dr("ferrous"), "60–120 mg elemental", "Anaemia"], [dr("dmpa", "Medroxyprogesterone"), "10 mg TDS (acute)", "Bleeding"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Most fibroids cause no problems; risks: pain, malpresentation, obstructed labour (cervical/low fibroids), PPH.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Acute torsion of pedunculated fibroid", "Surgical emergency"]])}` },
{ id: "complications", title: "Complications", html: `<p>Anaemia, infertility, miscarriage, pain, urinary retention, hydronephrosis.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Hb, symptoms; shrink after menopause.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Subserosal fibroid", src: "images/fibroid-diagram.png", mod: "Diagram", ctx: "Leiomyoma", loc: "Uterus", find: "Fibroid on outer surface", interp: "Pressure symptoms; rarely bleeding", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:Subserosal_uterine_fibroid.png", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fibroids", [F.d("Symptomatic?"), F.a, F.b([["Yes", F.e("Medical → surgical by site and fertility wish")], ["No", F.ok("Observe")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Surgery with Hb 7", "Transfusion, risk", "Correct anaemia first"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Which fibroid type most affects fertility?", "Submucosal (FIGO 0–2).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Munro MG, Critchley HOD, Broder MS, Fraser IS. FIGO classification system (PALM-COEIN) for causes of abnormal uterine bleeding in nongravid women of reproductive age. Int J Gynaecol Obstet. 2011;113:3-13. <a href="https://doi.org/10.1016/j.ijgo.2010.11.011" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
