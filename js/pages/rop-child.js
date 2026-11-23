/* Retinopathy of prematurity (AAP 2018, Indian NNF/RBSK guidance, ICROP3) */
registerPage({
id: "rop-child",
title: "Retinopathy of Prematurity (ROP)",
subtitle: "Every eligible preterm baby needs an eye examination by 4 weeks of age — control oxygen, book the screen before discharge, and treat type 1 ROP within days",
age: "Preterm infants", specs: ["neo", "nicu", "eye"],
keywords: ["retinopathy of prematurity", "ROP", "ROP screening", "oxygen targeting", "laser photocoagulation", "anti-VEGF", "bevacizumab", "ICROP", "plus disease", "preterm blindness"],
related: ["preterm-child", "rds-child", "neosepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Who</h4><p>Under 34 weeks or under 2000 g (regional), or sick preterms.</p></div>
<div><h4>When</h4><p>First exam by day 30 (day 14–21 if under 28 weeks/1200 g).</p></div>
<div><h4>Prevent</h4><p>SpO₂ 90–95%, avoid swings; treat sepsis.</p></div>
<div><h4>Treat</h4><p>Type 1 ROP: laser or anti-VEGF within 48–72 h.</p></div>
</div>
${box("bt", "Bhutan note", `<p>As NICU survival improves in Bhutan, ROP becomes a preventable cause of childhood blindness. ROP screening by ophthalmologists is at JDWNRH; treatment may need referral. South Asian criteria include bigger babies than Western criteria. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Classification (ICROP3)", html: `${tbl(["Feature", "Meaning"], [["Zone I–III", "Location (I most posterior, most dangerous)"], ["Stage 1–5", "Demarcation line → ridge → extraretinal proliferation → detachment"], ["Plus disease", "Dilated, tortuous posterior vessels — urgent"], ["A-ROP", "Aggressive ROP — treat urgently"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("ROP", [F.s("Preterm birth halts retinal vessel growth"), F.a, F.s("Hyperoxia then hypoxia → VEGF surge"), F.e("Abnormal vessels → scarring, detachment, blindness")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "AAP 2018", "Indian NNF", "This guide"], [["Screening criteria", "30 weeks or less / 1500 g or less", "Under 34 weeks / under 2000 g", "Regional criteria " + LB.loc()]])}` },
{ id: "presentation", title: "Risk factors", html: `<ul><li>Low gestation/weight, uncontrolled oxygen, sepsis, poor weight gain, transfusions, IVH.</li></ul><h3>The typical patient</h3><p>A 1300 g baby born at 30 weeks in Mongar, now day 10 and stable. <b>Eligible for ROP screening</b>: book eye exam by day 30 at JDWNRH, targeted oxygen, ensure the appointment before discharge.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Familial exudative vitreoretinopathy", "Term babies, family history"], ["Retinoblastoma", "White reflex in older infant"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Dilated indirect ophthalmoscopy (or RetCam telemedicine); repeat by findings.</p>` },
{ id: "staging", title: "Screening tool", html: `<div class="calc" data-calc="ropscreen"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Prevention: oxygen blenders, SpO₂ 90–95%, alarm limits, nutrition, infection control.</li><li>Type 1 ROP: laser or intravitreal anti-VEGF (specialist).</li><li>Follow-up exams until vascularisation complete; long-term refraction, squint, amblyopia checks.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `<p>Anti-VEGF (bevacizumab/ranibizumab) by ophthalmologist; mydriatic drops for examination.</p>` },
{ id: "populations", title: "Late preterm", html: `<p>Bigger preterms (32–34 weeks) with unregulated oxygen can still develop severe ROP.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Family lives far away", "Book exam before discharge; travel support"]])}` },
{ id: "complications", title: "Complications", html: `<p>Retinal detachment, blindness, myopia, strabismus.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Eye review at 6 months, 1 year, then yearly.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "ROP zones", src: "images/rop-zones.jpg", mod: "Diagram", ctx: "ICROP classification", loc: "Retina", find: "Zones I–III", interp: "Zone I disease is most dangerous", by: "Chiang MF, Quinn GE, Fielder AR et al.", page: "https://commons.wikimedia.org/wiki/File:Retinopathy_of_Prematurity_Zones.jpg", lic: "CC BY 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Preterm in NICU", [F.d("Eligible?"), F.a, F.b([["Yes", F.e("Exam by day 30, repeat until mature")], ["No", F.ok("Routine follow-up")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Discharge without eye booking", "Missed treatable ROP", "Checklist"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Latest timing for first ROP exam?", "By 4 weeks (day 30) of life.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Fierson WM, American Academy of Pediatrics Section on Ophthalmology. Screening examination of premature infants for retinopathy of prematurity. Pediatrics. 2018;142:e20183061. <a href="https://doi.org/10.1542/peds.2018-3061" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
