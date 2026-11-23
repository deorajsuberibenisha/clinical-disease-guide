/* Respiratory distress in the newborn (European RDS 2022, Bhutan EM booklet, WHO) */
registerPage({
id: "rds-child",
title: "Respiratory Distress in the Newborn",
subtitle: "Score the distress, give oxygen to target saturations, start CPAP early, treat infection, keep warm, and know the causes: RDS, TTN, meconium aspiration, pneumonia, pneumothorax",
age: "Newborns", specs: ["neo", "nicu", "resp"],
keywords: ["neonatal respiratory distress", "RDS", "hyaline membrane disease", "TTN", "transient tachypnoea", "meconium aspiration", "CPAP", "surfactant", "Silverman score", "pneumothorax newborn", "grunting"],
related: ["preterm-child", "asphyxia-child", "neosepsis-child", "chd-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Fast breathing (60+), grunting, flaring and chest indrawing are danger signs. Bubble CPAP saves lives at district level.</p>
<div class="glance">
<div><h4>Score</h4><p>Silverman–Andersen (0–10).</p></div>
<div><h4>Oxygen</h4><p>Target SpO₂ 90–95% (preterm).</p></div>
<div><h4>CPAP</h4><p>5–6 cmH₂O for moderate distress.</p></div>
<div><h4>Infection</h4><p>${dr("ampicillin")} + ${dr("gentamicin")} if any risk.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan EM booklet: oxygen for cyanosis with HR over 100, CPAP for breathing babies with distress, surfactant if available and CPAP fails (surfactant not on NEML). Bubble CPAP is available in district hospital newborn units. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Cause", "Typical baby"], [["RDS (surfactant deficiency)", "Preterm, worsens over 48 h"], ["TTN", "Term caesarean, settles in 24–72 h"], ["Meconium aspiration", "Term/post-term, stained liquor"], ["Pneumonia/sepsis", "PROM, maternal fever"], ["Pneumothorax", "Sudden deterioration"], ["Congenital heart disease, diaphragmatic hernia, choanal atresia", "See relevant chapters"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("RDS", [F.s("Surfactant deficiency"), F.a, F.s("Alveolar collapse, low lung volume"), F.e("Hypoxia, grunting, increasing work of breathing")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan EM booklet", "European RDS 2022", "This guide"], [["Surfactant", "If CPAP fails", "Early rescue if FiO₂ over 0.30 on CPAP 6+", "Refer when FiO₂ over 0.30–0.40 " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>RR, grunting, flaring, recession, cyanosis, SpO₂, HR, temperature, glucose, perfusion.</li></ul><h3>The typical patient</h3><p>A term baby born by elective caesarean in Wangdue breathes at 80/min with mild recession at 2 hours, SpO₂ 92% in air. <b>Probable TTN</b>: warmth, observe, oxygen if SpO₂ under 90%, consider CPAP if worse, antibiotics only if risk factors or deterioration; should settle within 72 h.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Cyanotic CHD", "Cyanosis without much distress, no response to O₂"], ["Metabolic acidosis", "Deep breathing, gas"], ["Hypothermia/hypoglycaemia", "Check temperature, glucose"]])}` },
{ id: "invest", title: "Investigations", html: `<p>SpO₂, glucose, chest X-ray, blood gas, blood culture and CRP if infection possible.</p>` },
{ id: "staging", title: "Silverman–Andersen score", html: `<div class="calc" data-calc="silverman"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Warmth, minimal handling, glucose monitoring.</li><li>Oxygen via blender/nasal prongs to target SpO₂; never free-flow via self-inflating bag.</li><li>CPAP 5–6 cmH₂O for moderate distress; ventilation/surfactant at NICU if failing.</li><li>Antibiotics if infection risk; stop at 36–48 h if cultures negative and well.</li><li>IV fluids 60–80 mL/kg/day day 1, then feeds by tube when stable.</li><li>Pneumothorax with collapse: needle aspiration.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ampicillin"), "50 mg/kg 12-hourly", "Possible infection"], [dr("gentamicin"), "5 mg/kg 24–36-hourly", "Possible infection"], [dr("caffeine_citrate"), "20 mg/kg load", "Preterm under 34 weeks"]])}` },
{ id: "populations", title: "Preterm", html: `<p>See preterm chapter: antenatal steroids, early CPAP, caffeine.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Worsening on CPAP, no ventilator", "Refer early; maintain CPAP during transport if possible"]])}` },
{ id: "complications", title: "Complications", html: `<p>Pneumothorax, apnoea, chronic lung disease, retinopathy (excess oxygen), death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>ROP screening for preterms; growth and development.</p>` },
{ id: "images", title: "Images", html: `<p>See the preterm and resuscitation chapters.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn distress", [F.s("Warmth, SpO₂, glucose, score"), F.a, F.d("Moderate–severe?"), F.a, F.b([["Yes", F.e("CPAP + antibiotics; refer if failing")], ["No", F.ok("Oxygen if needed, observe")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Free-flow oxygen through self-inflating bag", "No oxygen delivered", "Use nasal prongs/flow-inflating"], ["100% oxygen in preterm", "ROP", "Target 90–95%"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Which newborn respiratory condition settles within 72 h after caesarean?", "Transient tachypnoea of the newborn.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Sweet DG, Carnielli VP, Greisen G, et al. European consensus guidelines on the management of respiratory distress syndrome: 2022 update. Neonatology. 2023;120:3-23. <a href="https://doi.org/10.1159/000528914" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Emergency booklet 2018, chapter 3B.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
