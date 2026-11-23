/* Paediatric cardiac arrest and post-resuscitation care (AHA 2020, Bhutan STG 1.3) */
registerPage({
id: "postarrest-child",
title: "Paediatric Cardiac Arrest & Post-Arrest Care",
subtitle: "Most childhood arrests are hypoxic: high-quality CPR with ventilation, adrenaline every 3–5 minutes, treat reversible causes, then protect the brain with normal oxygen, CO₂, BP, glucose and temperature",
age: "Infants & children", specs: ["paeds", "picu", "emerg"],
keywords: ["paediatric cardiac arrest", "PALS", "CPR child", "adrenaline 0.01 mg/kg", "defibrillation 4 J/kg", "ROSC", "post-arrest care", "targeted temperature", "4Hs 4Ts"],
related: ["shock-child", "anaphylaxis-child", "icp-child", "asphyxia-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>CPR</h4><p>15:2 (two rescuers), 100–120/min, one-third chest depth.</p></div>
<div><h4>Drugs</h4><p>${dr("adrenaline_im", "Adrenaline")} 0.01 mg/kg (0.1 mL/kg of 1:10,000) IV/IO every 3–5 min.</p></div>
<div><h4>Shock</h4><p>VF/pVT: 2 J/kg then 4 J/kg (max 10 J/kg); amiodarone 5 mg/kg.</p></div>
<div><h4>After ROSC</h4><p>SpO₂ 94–99%, normocapnia, BP above 5th centile, no fever.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 1.3 uses AHA 2020 BLS (30:2 single rescuer); the BCR arrest protocol covers child ALS. Adrenaline and amiodarone are on the NEML; PICU at JDWNRH. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Reversible causes", html: `${tbl(["Hs", "Ts"], [["Hypoxia", "Tension pneumothorax"], ["Hypovolaemia", "Tamponade"], ["Hypo/hyperkalaemia, metabolic", "Toxins"], ["Hypothermia", "Thrombosis"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Child arrest", [F.s("Respiratory failure or shock"), F.a, F.s("Bradycardia → asystole/PEA"), F.e("Post-arrest syndrome: brain injury, myocardial dysfunction")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older", "AHA 2020", "This guide"], [["Ventilation with advanced airway", "Every 6–8 s", "Every 2–3 s (20–30/min)", "AHA " + LB.loc()]])}` },
{ id: "presentation", title: "Algorithm", html: `<ol><li>Unresponsive, not breathing normally: 5 rescue breaths (European) / start CPR; check pulse (max 10 s).</li><li>CPR 15:2 with bag-mask, oxygen; attach monitor.</li><li>Non-shockable: adrenaline ASAP, every 3–5 min.</li><li>Shockable: shock 2 J/kg → CPR 2 min → 4 J/kg → adrenaline after 2nd shock → amiodarone 5 mg/kg after 3rd.</li><li>Treat 4 Hs/4 Ts.</li></ol><h3>The typical patient</h3><p>A 3-year-old (14 kg) pulled from a river in Punakha is pulseless. <b>Drowning arrest</b>: 5 rescue breaths, CPR 15:2, adrenaline 0.14 mg IV/IO every 3–5 min; after ROSC — SpO₂ 94–99%, normocapnia, SBP over 76, prevent fever, PICU.</p>` },
{ id: "ddx", title: "Bradycardia with pulse", html: `<p>HR under 60 with poor perfusion despite oxygen/ventilation → start CPR.</p>` },
{ id: "invest", title: "Investigations", html: `<p>Glucose, gas, electrolytes, lactate, ECG, chest X-ray, echo.</p>` },
{ id: "staging", title: "Post-ROSC targets", html: `<div class="calc" data-calc="postrosc"></div>` },
{ id: "manage", title: "Post-arrest care", html: `<ul><li>Avoid hypoxia/hyperoxia, hypo/hypercapnia, hypotension.</li><li>Temperature: prevent fever; consider 32–34 °C only in PICU.</li><li>Glucose, electrolytes, seizure treatment.</li><li>Find the cause; PICU transfer; family support.</li><li>No early prognostication (wait 72 h).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("adrenaline_im", "Adrenaline 1:10,000"), "0.01 mg/kg IV/IO", "Every 3–5 min"], [dr("dextrose"), "10% 2–5 mL/kg", "Hypoglycaemia"], [dr("calcium_gluconate"), "0.5 mL/kg 10%", "Hyperkalaemia/hypocalcaemia"]])}` },
{ id: "populations", title: "Infants", html: `<p>Two-thumb encircling technique; 3:1 in newborns (see newborn resuscitation).</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["When to stop", "Senior decision, consider causes, family presence"]])}` },
{ id: "complications", title: "Complications", html: `<p>Hypoxic brain injury, myocardial dysfunction, multi-organ failure.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Neurodevelopmental assessment; family bereavement support if death.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Pulseless child", [F.s("CPR 15:2 + oxygen"), F.a, F.d("Shockable?"), F.a, F.b([["Yes", F.e("Shock 2 → 4 J/kg, adrenaline, amiodarone")], ["No", F.ok("Adrenaline every 3–5 min")]]), F.a, F.ok("ROSC → post-arrest targets")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Neglecting ventilation", "Most arrests are hypoxic", "Bag-mask with oxygen"], ["Hyperoxia after ROSC", "Brain injury", "Titrate oxygen"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Adrenaline dose in paediatric arrest?", "0.01 mg/kg (0.1 mL/kg of 1:10,000) IV/IO every 3–5 minutes.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Topjian AA, Raymond TT, Atkins D, et al. Part 4: Pediatric basic and advanced life support: 2020 American Heart Association guidelines for CPR and ECC. Circulation. 2020;142(16 Suppl 2):S469-S523. <a href="https://doi.org/10.1161/CIR.0000000000000901" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
