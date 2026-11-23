/* ARDS — adults (Berlin 2012, Global definition 2023, ATS 2024, ARDSNet) */
registerPage({
id: "ards-adult",
title: "Acute Respiratory Distress Syndrome (ARDS) — Adults",
subtitle: "Recognise hypoxaemic respiratory failure with bilateral infiltrates not explained by the heart, ventilate with low tidal volumes, prone the moderate–severe, keep fluids conservative, and treat the cause",
age: "Adults", specs: ["medicine", "emerg", "resp"],
keywords: ["ARDS", "acute respiratory distress syndrome", "Berlin definition", "P/F ratio", "lung protective ventilation", "low tidal volume", "prone positioning", "PEEP", "driving pressure", "high flow nasal oxygen", "ARDSNet", "corticosteroids ARDS"],
related: ["pards-child", "sepsis-adult", "pneumonia-adult", "pancreatitis-adult", "shock-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Define</h4><p>Within 1 week; bilateral opacities; not cardiac; P/F 300 or less on PEEP 5+.</p></div>
<div><h4>Ventilate</h4><p>Vt 6 mL/kg PBW (4–8), plateau ≤30, driving pressure ≤15.</p></div>
<div><h4>P/F under 150</h4><p>Prone 12–16 h/day; higher PEEP.</p></div>
<div><h4>Cause</h4><p>Pneumonia, sepsis, aspiration, pancreatitis, trauma, transfusion.</p></div>
</div>
${box("bt", "Bhutan note", `<p>ICU ventilation is available at JDWNRH and regional referral hospitals; district hospitals stabilise with oxygen, high-flow or NIV where available, awake proning, and early referral. Altitude lowers PaO₂ — the Berlin definition suggests adjusting P/F for barometric pressure (× barometric pressure/760) above 1000 m. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Severity (Berlin)", html: `${tbl(["Severity", "P/F (on PEEP 5+)", "Mortality (approx.)"], [["Mild", "201–300", "27%"], ["Moderate", "101–200", "32%"], ["Severe", "100 or less", "45%"]])}<p>The 2023 global definition adds high-flow oxygen (30 L/min+) and SpO₂/FiO₂ ratio (315 or less) for settings without blood gas.${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("ARDS", [F.s("Direct or indirect lung injury"), F.a, F.s("Alveolar-capillary leak, protein-rich oedema, surfactant loss"), F.a, F.s("Shunt, low compliance ('baby lung')"), F.e("Ventilator-induced injury if large volumes")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "ATS 2024", "This guide"], [["Corticosteroids", "Not recommended", "Conditional recommendation for ARDS", "Consider (e.g. dexamethasone) " + LB.loc()], ["Neuromuscular blockade", "Routine 48 h in severe", "Not routine (ROSE)", "Only for dyssynchrony/severe hypoxaemia"], ["Higher PEEP", "Variable", "Higher PEEP without recruitment manoeuvres in moderate–severe", "Same"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Worsening breathlessness and hypoxaemia within days of a trigger; crackles; high oxygen need; bilateral infiltrates.</li></ul><h3>The typical patient</h3><p>A 52-year-old man with severe pancreatitis in Mongar becomes hypoxic on day 2: SpO₂ 86% on 15 L mask, bilateral infiltrates, echo normal. <b>ARDS</b>: high-flow/NIV trial, then intubation; height 165 cm → PBW 61.5 kg → Vt 370 mL; PEEP 10–14; P/F 110 → prone positioning; conservative fluids after shock resolves.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Cardiogenic pulmonary oedema", "Raised JVP, echo LV dysfunction, BNP"], ["Bilateral pneumonia", "Can coexist"], ["Diffuse alveolar haemorrhage", "Falling Hb, haemoptysis"], ["Miliary TB, PCP", "Subacute, immunosuppressed"]])}` },
{ id: "invest", title: "Investigations", html: `<p>ABG (P/F), chest X-ray/CT, lung ultrasound, echo, cultures, lactate, lipase, BNP.</p>` },
{ id: "staging", title: "Ventilation calculator", html: `<div class="calc" data-calc="ardsvent"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Oxygen to SpO₂ 92–96% (88–92% if hypercapnic risk); HFNO or NIV trial with close watch; awake proning.</li><li>Intubate early if worsening; lung-protective ventilation; PEEP by ARDSNet table; plateau ≤30.</li><li>Prone 12–16 h/day if P/F under 150.</li><li>Conservative fluids once shock resolved; diuretics as tolerated.</li><li>Treat cause (antibiotics, source control); VTE prophylaxis, nutrition, sedation holds.</li><li>Refractory: recruitment, inhaled pulmonary vasodilator, ECMO referral (not in Bhutan — early transfer discussion).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("dexamethasone"), "6–20 mg/day (protocol-based)", "Consider"], [dr("furosemide"), "Titrated", "Conservative fluids"], [dr("enoxaparin"), "40 mg daily", "VTE prophylaxis"]])}` },
{ id: "populations", title: "Pregnancy and altitude", html: `<p>Pregnancy: target SpO₂ 95%+, left tilt, prone with padding possible; altitude: interpret P/F with barometric correction.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No ventilator, SpO₂ 85% on mask", "Non-rebreather + nasal prongs, awake prone, CPAP if available, urgent transfer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Barotrauma, VAP, ICU weakness, fibrosis, long-term cognitive and physical impairment.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Post-ICU rehabilitation; pulmonary function at 3–6 months.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "ARDS chest X-ray", src: "images/ards-xray.jpg", mod: "Chest X-ray", ctx: "ARDS", loc: "Both lungs", find: "Bilateral diffuse alveolar opacities", interp: "Not explained by heart failure → ARDS", by: "Samir (Wikimedia Commons)", page: "https://commons.wikimedia.org/wiki/File:ARDS_X-Ray.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Hypoxaemia + bilateral infiltrates", [F.s("Exclude cardiac cause (echo)"), F.a, F.s("HFNO/NIV trial or intubate"), F.a, F.s("Vt 6 mL/kg PBW, Pplat ≤30, PEEP"), F.a, F.d("P/F under 150?"), F.a, F.b([["Yes", F.e("Prone 12–16 h/day")], ["No", F.ok("Continue, treat cause")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Tidal volume by actual weight", "Over-distension", "Use predicted body weight"], ["Late proning", "Lost survival benefit", "Prone early in P/F under 150"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Predicted body weight formula (male)?", "50 + 0.91 × (height cm − 152.4).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Qadir N, Sahetya S, Munshi L, et al. An update on management of adult patients with acute respiratory distress syndrome: an official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2024;209:24-36. <a href="https://doi.org/10.1164/rccm.202311-2011ST" target="_blank" rel="noopener">doi</a></li><li id="ref-2">ARDS Definition Task Force. Acute respiratory distress syndrome: the Berlin definition. JAMA. 2012;307:2526-2533.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
