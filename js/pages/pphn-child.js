/* Persistent pulmonary hypertension of the newborn (Lakshminrusimha 2015, AHA/ATS paediatric PH 2015) */
registerPage({
id: "pphn-child",
title: "Persistent Pulmonary Hypertension of the Newborn (PPHN)",
subtitle: "A term or near-term baby with severe hypoxaemia and a pre–post ductal saturation gap: optimise lung inflation, avoid hyperoxia and acidosis, support blood pressure, and treat the cause",
age: "Newborns (term/near-term)", specs: ["neo", "nicu", "cardio"],
keywords: ["PPHN", "persistent pulmonary hypertension of the newborn", "meconium aspiration", "oxygenation index", "pre-ductal post-ductal saturation", "inhaled nitric oxide", "sildenafil", "milrinone", "hypoxaemic respiratory failure"],
related: ["asphyxia-child", "rds-child", "neosepsis-child", "chd-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Suspect</h4><p>Labile hypoxaemia, pre-ductal SpO₂ 5%+ higher than post-ductal.</p></div>
<div><h4>Confirm</h4><p>Echo: exclude cyanotic heart disease.</p></div>
<div><h4>Support</h4><p>Ventilate gently, surfactant for MAS/RDS, target SpO₂ 90–97%.</p></div>
<div><h4>Vasodilate</h4><p>iNO if available; ${dr("sildenafil")} otherwise.</p></div>
</div>
${box("bt", "Bhutan note", `<p>NICU ventilation at JDWNRH; inhaled nitric oxide and ECMO are not available in Bhutan — early recognition, gentle ventilation, BP support and oral sildenafil (specialist supply) are the main tools; consider early referral abroad for refractory cases. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Mechanism", "Examples"], [["Maladaptation", "Meconium aspiration, sepsis/pneumonia, asphyxia, RDS"], ["Maldevelopment", "Post-term, maternal NSAID/SSRI"], ["Underdevelopment", "Congenital diaphragmatic hernia, pulmonary hypoplasia"], ["Idiopathic", "'Black lung' PPHN"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("PPHN", [F.s("Pulmonary vascular resistance fails to fall at birth"), F.a, F.s("Right-to-left shunt across duct and foramen ovale"), F.e("Severe hypoxaemia, acidosis — vicious cycle")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "Current", "This guide"], [["Hyperventilation/alkalosis", "Used", "Harmful (brain injury, hearing loss)", "Normal pH and PaCO₂ " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Cyanosis within hours of birth, labile SpO₂ with handling, respiratory distress, loud single S2.</li></ul><h3>The typical patient</h3><p>A 3.4 kg term baby born through thick meconium is ventilated with FiO₂ 100%, MAP 14, post-ductal PaO₂ 45; pre-ductal SpO₂ 95%, post 84%. <b>PPHN with meconium aspiration</b>: OI 31 (severe) — surfactant, sedation, BP support, sildenafil; echo to exclude CHD.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Cyanotic CHD (TGA, TAPVD)", "Echo"], ["Severe lung disease alone", "No ductal gap"], ["Pneumothorax", "Sudden deterioration, transillumination/X-ray"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Pre/post-ductal SpO₂, ABG, CXR, echo, blood culture, glucose, calcium.</p>` },
{ id: "staging", title: "OI tool", html: `<div class="calc" data-calc="pphnoi"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Minimal handling, sedation/analgesia, warmth, glucose, calcium.</li><li>Optimise lung volume (PEEP, surfactant for MAS/RDS); avoid over-distension.</li><li>Oxygen to pre-ductal SpO₂ 90–97% — avoid hyperoxia.</li><li>BP: volume if low, adrenaline/noradrenaline; milrinone if good BP and LV dysfunction.</li><li>Pulmonary vasodilators: iNO (20 ppm) where available; sildenafil oral/IV.</li><li>Treat sepsis.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("sildenafil"), "0.5–2 mg/kg 6–8-hourly oral", "Not NEML"], [dr("adrenaline_inf", "Adrenaline"), "0.05–0.3 µg/kg/min", "BP"], [dr("noradrenaline"), "0.05–0.3 µg/kg/min", "BP"], [dr("ampicillin"), "50 mg/kg", "Sepsis cover"]])}` },
{ id: "populations", title: "CDH", html: `<p>Diaphragmatic hernia: intubate immediately (no bag-mask), NG decompression, gentle ventilation, refer.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["OI over 40, no ECMO", "Maximise therapy, honest discussion with family"]])}` },
{ id: "complications", title: "Complications", html: `<p>Death, hearing loss, neurodevelopmental impairment, chronic lung disease.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Hearing screen, developmental follow-up.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Hypoxaemic newborn", [F.s("Pre/post SpO₂, echo"), F.a, F.s("Lung recruitment, oxygen targets, BP"), F.a, F.ok("Vasodilator if OI over 25")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Hyperoxia", "Oxidative injury", "Target 90–97%"], ["Excess handling", "Crises", "Cluster care"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Pre–post ductal SpO₂ difference suggesting PPHN?", "5% or more.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Lakshminrusimha S, Keszler M. Persistent pulmonary hypertension of the newborn. NeoReviews. 2015;16:e680-e692. <a href="https://doi.org/10.1542/neo.16-12-e680" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
