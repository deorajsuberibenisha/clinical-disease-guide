/* Neonatal and paediatric CPAP basics (WHO, bubble CPAP practice) */
registerPage({
id: "cpap-child",
title: "CPAP Basics (Newborns & Children)",
subtitle: "Bubble CPAP keeps small lungs open: choose the right prongs, set PEEP 5–7, titrate oxygen to target saturations, protect the nose, and recognise failure early",
age: "Newborns & children", specs: ["neo", "nicu", "picu", "paeds"],
keywords: ["CPAP", "bubble CPAP", "nasal prongs", "PEEP", "respiratory distress", "bronchiolitis", "RDS", "CPAP failure", "nasal injury", "oxygen targets"],
related: ["rds-child", "apnoea-child", "bronchiolitis-child", "pneumonia-child", "pards-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Indications</h4><p>Moderate distress (RDS, TTN, bronchiolitis, pneumonia), apnoea of prematurity.</p></div>
<div><h4>Settings</h4><p>PEEP 5–6 (newborn) / 5–7 (child); flow 5–8 / 8–12 L/min.</p></div>
<div><h4>Targets</h4><p>SpO₂ 90–95% (preterm), 92–98% (child).</p></div>
<div><h4>Failure</h4><p>FiO₂ 40%+ with low SpO₂, apnoea, rising CO₂, exhaustion.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bubble CPAP is used in district and referral hospital newborn units and paediatric wards; oxygen concentrators/cylinders with blenders allow FiO₂ titration. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Components", html: `${tbl(["Part", "Note"], [["Gas source", "Oxygen + air via blender (avoid 100% oxygen)"], ["Humidifier", "Warm, humidified gas"], ["Interface", "Short binasal prongs (size to nares), or mask"], ["Bubble chamber", "Expiratory limb depth = PEEP (cmH₂O)"]])}${r(1)}` },
{ id: "patho", title: "How it works", html: `${F.chart("CPAP", [F.s("Continuous positive pressure"), F.a, F.s("Prevents alveolar collapse, splints upper airway"), F.e("Better oxygenation, less work of breathing")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Option", "Option", "This guide"], [["Bronchiolitis support", "High-flow nasal cannula", "CPAP", "CPAP where HFNC unavailable " + LB.loc()]])}` },
{ id: "presentation", title: "Practical steps", html: `<ol><li>Explain to parents; position baby with neck neutral, roll under shoulders.</li><li>Choose prong size filling nares without blanching; secure with hat/strapping.</li><li>Set flow and PEEP; confirm continuous bubbling.</li><li>OG tube to vent stomach; suction nose gently as needed.</li><li>Observe SpO₂, RR, work of breathing hourly; skin checks 2–4-hourly.</li></ol><h3>The typical patient</h3><p>A 3-month-old with bronchiolitis in Phuentsholing has RR 70, recession, SpO₂ 88% on 2 L nasal oxygen. <b>Start bubble CPAP</b>: PEEP 6, flow 8 L/min, FiO₂ 40% titrated to SpO₂ 92–98%, OG tube, NG feeds; escalate if failing.</p>` },
{ id: "ddx", title: "Contraindications", html: `${tbl(["Contraindication", "Why"], [["Apnoea needing ventilation", "CPAP doesn't breathe for the baby"], ["Shock, decreased consciousness", "Needs intubation"], ["Choanal atresia, CDH, untreated pneumothorax", "Harm"]])}` },
{ id: "invest", title: "Monitoring", html: `<p>SpO₂ continuous, RR, HR, blood gas if worsening, chest X-ray if sudden deterioration (pneumothorax).</p>` },
{ id: "staging", title: "CPAP failure tool", html: `<div class="calc" data-calc="cpapcheck"></div><div class="calc" data-calc="silverman"></div>` },
{ id: "manage", title: "Weaning", html: `<ul><li>Wean FiO₂ to 21–30% first, then PEEP to 5, then trial off when stable 24 h.</li><li>Resume if distress returns.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `<p>Caffeine for preterm apnoea; surfactant for RDS failing CPAP (specialist).</p>` },
{ id: "populations", title: "Preterm", html: `<p>Early CPAP from birth reduces need for ventilation.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Sudden deterioration", "Check prongs, tubing, bubbling; pneumothorax (transilluminate/X-ray)"]])}` },
{ id: "complications", title: "Complications", html: `<p>Nasal septum injury, pneumothorax, abdominal distension, feed intolerance.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Nasal skin review; developmental follow-up of preterms.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Distress on oxygen", [F.s("Bubble CPAP"), F.a, F.d("Failing?"), F.a, F.b([["Yes", F.e("Escalate: intubate/surfactant/refer")], ["No", F.ok("Wean FiO₂ then PEEP")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No bubbling unnoticed", "No pressure delivered", "Check every hour"], ["Prongs too small", "Leak, failure", "Size correctly"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "What sets PEEP in bubble CPAP?", "The depth of the expiratory tube under water (cm = cmH₂O).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. Oxygen therapy for children: a manual for health workers. Geneva: WHO; 2016. <a href="https://www.who.int/publications/i/item/9789241549554" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Settings", "<span class='pass'>Checked</span>", "Standard practice"]], "qc")}` }
]
});
