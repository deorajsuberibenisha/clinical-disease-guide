/* Paediatric ARDS (PALICC-2 2023) */
registerPage({
id: "pards-child",
title: "Paediatric ARDS (PARDS)",
subtitle: "Diagnose with the oxygenation or saturation index, support early with oxygen and non-invasive ventilation, then ventilate gently with limited pressures and adequate PEEP",
age: "Children (beyond the newborn period)", specs: ["paeds", "picu", "resp"],
keywords: ["PARDS", "paediatric ARDS", "PALICC-2", "oxygenation index", "oxygen saturation index", "OI", "OSI", "lung protective ventilation child", "PEEP", "prone child", "high flow", "CPAP"],
related: ["ards-adult", "pneumonia-child", "sepsis-child", "bronchiolitis-child", "dengue-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Define</h4><p>New infiltrate(s) within 7 days, not cardiac; OI or OSI on invasive ventilation (PALICC-2).</p></div>
<div><h4>Severity</h4><p>OI under 16 / OSI under 12 mild–moderate; above = severe.</p></div>
<div><h4>Ventilate</h4><p>Vt 4–8 mL/kg; plateau ≤28; ΔP ≤15; PEEP 5–15.</p></div>
<div><h4>Targets</h4><p>SpO₂ 92–97%; pH 7.20+.</p></div>
</div>
${box("bt", "Bhutan note", `<p>PICU care is at JDWNRH. District hospitals: oxygen, bubble CPAP (effective in children), treat the cause (pneumonia, sepsis, dengue), and refer early. The JDWNRH paediatric guide uses the PALICC-2 lung-protective bundle. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "PALICC-2 definition", html: `${tbl(["Mode", "Criteria"], [["Invasive ventilation", "OI = FiO₂ × MAP × 100 / PaO₂: 4–16 mild/moderate, 16+ severe; OSI = FiO₂ × MAP × 100 / SpO₂: 5–12 mild/moderate, 12+ severe"], ["Non-invasive (CPAP/NIV 5+)", "P/F 300 or less or S/F 250 or less (SpO₂ 97% or less)"], ["Possible PARDS", "High-flow/oxygen with S/F 250 or less, not meeting full criteria"]])}<p>Unilateral infiltrates count in children; exclude cardiac failure and perinatal lung disease.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("PARDS", [F.s("Pneumonia, sepsis, aspiration, drowning, trauma"), F.a, F.s("Leaky alveolar-capillary membrane"), F.e("Hypoxaemia, low compliance, risk of ventilator injury")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Adults", "PALICC-2", "This guide"], [["Severity metric", "P/F", "OI/OSI", "PALICC-2 " + LB.loc()], ["Prone", "Strong for P/F under 150", "Consider in severe PARDS", "Severe PARDS"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Tachypnoea, grunting, recession, hypoxaemia despite oxygen; trigger illness.</li></ul><h3>The typical patient</h3><p>A 3-year-old (14 kg) with severe pneumonia is intubated: FiO₂ 60%, MAP 14, SpO₂ 90%. <b>OSI 9.3 — mild/moderate PARDS</b>: Vt 56–112 mL (4–8 mL/kg), PEEP 8–10, plateau ≤28, permissive hypercapnia, antibiotics, conservative fluids after stabilisation.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Cardiac failure/myocarditis", "Hepatomegaly, gallop, echo"], ["Bronchiolitis/asthma", "Obstructive pattern"], ["Pulmonary haemorrhage", "Blood in ETT"]])}` },
{ id: "invest", title: "Investigations", html: `<p>SpO₂, blood gas, chest X-ray, lung ultrasound, echo, cultures, dengue/malaria tests by risk.</p>` },
{ id: "staging", title: "OI/OSI calculator", html: `<div class="calc" data-calc="pardscalc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Oxygen; bubble CPAP or NIV for possible/mild PARDS with close monitoring; intubate if worsening.</li><li>Lung-protective ventilation; PEEP titrated; avoid hyperoxia.</li><li>Severe: prone, neuromuscular blockade for dyssynchrony, consider HFOV as rescue, ECMO referral.</li><li>Fluids: avoid positive balance after resuscitation.</li><li>Nutrition, sedation protocol, VAP bundle.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ceftriaxone"), "75–100 mg/kg", "Pneumonia/sepsis"], [dr("furosemide"), "0.5–1 mg/kg", "Fluid overload"], [dr("midazolam"), "Infusion", "Sedation"]])}` },
{ id: "populations", title: "Infants and chronic illness", html: `<p>Congenital heart disease and chronic lung disease have modified criteria (PALICC-2) — specialist care.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No PICU bed", "CPAP, oxygen, prone if tolerated, early call to JDWNRH"]])}` },
{ id: "complications", title: "Complications", html: `<p>Air leak, VAP, fluid overload, neurodevelopmental and respiratory sequelae.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Lung function and development screening after severe PARDS.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "ARDS chest X-ray", src: "images/ards-xray.jpg", mod: "Chest X-ray", ctx: "Acute respiratory distress syndrome", loc: "Both lungs", find: "Diffuse alveolar opacities", interp: "Same appearance in PARDS (may be unilateral)", by: "Samir (Wikimedia Commons)", page: "https://commons.wikimedia.org/wiki/File:ARDS_X-Ray.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Hypoxaemic child", [F.s("Oxygen → CPAP/NIV"), F.a, F.d("Worsening?"), F.a, F.b([["Yes", F.e("Intubate, lung-protective ventilation, OI/OSI")], ["No", F.ok("Continue, treat cause")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["PEEP lower than ARDSNet table", "Higher mortality", "Adequate PEEP"], ["Large tidal volumes", "Lung injury", "4–8 mL/kg"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Formula for oxygenation index?", "FiO₂ × mean airway pressure × 100 ÷ PaO₂.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Emeriaud G, López-Fernández YM, Iyer NP, et al. Executive summary of the second international guidelines for the diagnosis and management of pediatric acute respiratory distress syndrome (PALICC-2). Pediatr Crit Care Med. 2023;24:143-168. <a href="https://doi.org/10.1097/PCC.0000000000003147" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
