/* Pneumothorax — children and newborns. Batch E-3 part 2, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §3.4 and trauma chapter; NEML 2025. BTS 2023 (adults only; its conservative-care studies included
   patients from 14 years — online appendix A1). Speck KE et al., APSA Outcomes & Evidence-Based Practice Committee systematic review,
   J Pediatr Surg 2023 (abstract read); Bruschettini M et al., Cochrane 2019, needle aspiration vs tube drainage in newborns (abstract read).
   Paediatric analgesic doses: Bhutan STG §12.1.3 and FDA labels via the drug monographs.
   No paediatric pneumothorax guideline exists; equipment sizes and the child decompression site are expert practice and are labelled so. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "pneumothorax-child",
title: "Pneumothorax — children and newborns",
subtitle: "From the ventilated newborn who suddenly desaturates to the tall teenager with chest pain: decompress tension at once, then let symptoms guide how much you do",
age: "Children", specs: ["paeds", "resp", "emerg", "neo"],
keywords: ["pneumothorax child", "paediatric pneumothorax", "neonatal pneumothorax", "air leak newborn", "transillumination", "needle aspiration newborn", "chest drain child", "spontaneous pneumothorax adolescent", "tension pneumothorax child"],
related: ["pneumothorax-adult", "rds-child", "cpap-child", "trauma-child", "asthma-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Pneumothorax has two peaks in childhood: the newborn period, when stiff lungs and positive-pressure support make leaks common, and adolescence, when it behaves much as it does in young adults.</p>
<div class="glance">
<div><h4>Newborn on CPAP or ventilator</h4><p>Sudden desaturation, bradycardia, unequal chest: <b>think air leak</b>; transilluminate or scan, and aspirate if the baby is unstable ${r(3)}.</p></div>
<div><h4>Tension</h4><p>Decompress first, X-ray later; then a chest drain ${r(1)}.</p></div>
<div><h4>Teenager, few symptoms</h4><p>Observation is reasonable; aspiration or a drain if symptomatic ${r(2, 4)}.</p></div>
<div><h4>Air leak persists</h4><p>Paediatric surgical review — early VATS (24–48 h) may help ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG gives one short adult-style section: oxygen, pain relief and referral for a chest tube ${r(1)}. Newborns on CPAP at district hospitals need a cold light (or a phone torch in a dark room) and a 23–25 G butterfly ready at the cot side; JDWNRH and regional referral hospitals take babies who need a drain. ${LB.loc()}</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Group", "Typical cause", "Notes"], [
["Newborn", "Respiratory distress syndrome, meconium aspiration, resuscitation with bag and mask, CPAP or ventilation", "Commoner in the newborn period than at any other age " + r(3)],
["Infant / young child", "Pneumonia (especially staphylococcal), asthma, foreign body, trauma, procedures", "Look for the cause " + LB.exp()],
["Adolescent (PSP)", "Ruptured apical blebs; tall, thin, often male; smoking", "Managed much like young adults " + r(2)],
["Secondary", "Asthma, cystic fibrosis, TB, connective-tissue disease (e.g. Marfan)", "Lower threshold for a drain " + LB.exp()],
["Tension", "Any of the above, especially under positive pressure", "Emergency " + r(1)]
])}` },
{ id: "patho", title: "How it makes children ill", html: `
${F.chart("Air leak in a newborn", [F.s("Stiff, unevenly aerated lungs + positive pressure"), F.a, F.s("Alveoli over-distend and rupture"), F.a, F.b([["Interstitial", F.d("Pulmonary interstitial emphysema, pneumomediastinum")], ["Pleural", F.e("Pneumothorax → tension → bradycardia, shock")]])])}
<p>Small children have little reserve and a mobile mediastinum, so tension physiology develops quickly. In adolescents, the mechanism is the same as in young adults: bleb rupture in otherwise normal lungs ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "BTS 2023", "APSA 2023 review", "This guide"], [
["Who it covers", "Not age-specific", "Adults (some studies from 14 years)", "Adolescents and young adults", "Use BTS logic from about 14 years " + LB.exp()],
["First management of PSP", "Chest tube", "Symptom-guided; conservative if minimal symptoms", "Symptom-guided: observation, aspiration or tube", "Symptom-guided"],
["Persistent air leak", "—", "Surgical advice after 5–7 days", "Early surgery within 24–48 h may help", "Discuss with the paediatric surgeon by day 2–3 " + LB.loc()],
["Newborn", "—", "—", "—", "Needle aspiration first if unstable; drain if it recurs (Cochrane: evidence insufficient)"],
["Decompression site", "Not stated", "—", "—", "2nd intercostal space mid-clavicular, or 4th–5th space anterior to mid-axillary line " + LB.exp("NOT VERIFIED")]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<h3>Newborn</h3>
<ul><li>Sudden worsening on CPAP or ventilation: rising oxygen need, tachypnoea, grunting, bradycardia, falling blood pressure.</li>
<li>Asymmetric chest, displaced apex, quieter breath sounds on one side (often hard to hear in small babies).</li>
<li>Bright glow on transillumination of the affected side.</li></ul>
<h3>Older child and adolescent</h3>
<ul><li>Sudden one-sided chest pain and breathlessness; reduced breath sounds, hyper-resonance ${r(1)}.</li>
<li>Tension: distress, tracheal shift, tachycardia, hypotension ${r(1)}.</li></ul>
<h3>The typical patient</h3>
<p>A 15-year-old boy, tall and thin, felt left chest pain while playing football in Paro. His saturation is 98%, he talks in full sentences, and the X-ray shows a left pneumothorax with a 2.5 cm rim. He has no asthma. <b>Treat as adolescent PSP.</b> With few symptoms and a family who can return quickly, observe with analgesia and a repeat film; if pain or breathlessness limit him, aspirate. He should not fly until a film confirms resolution ${r(2, 4)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Congenital lobar emphysema or cystic lung lesion", "Lung markings within the lucency; mediastinal shift from birth — a drain is dangerous"],
["Diaphragmatic hernia", "Bowel loops in the chest; scaphoid abdomen"],
["Inhaled foreign body", "Choking episode, unilateral wheeze, hyperinflation"],
["Pneumomediastinum", "Air outlining the heart and thymus ('sail sign')"],
["Severe asthma", "Bilateral wheeze; but pneumothorax can complicate it"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Unstable child or baby with signs: decompress before imaging</b> ${r(1)}.</li>
<li>Newborn: transillumination with a cold light; bedside ultrasound in trained hands; chest X-ray (an anterior pneumothorax in a supine baby may show only a hyperlucent hemithorax) ${LB.exp()}.</li>
<li>Older child: erect chest X-ray ${r(1)}.</li>
<li>CT is not routinely needed in adolescent PSP — the APSA review found no evidence of benefit from cross-sectional imaging ${r(2)}.</li>
<li>Look for the cause: blood gas, infection screen, sweat test if cystic fibrosis is suspected, TB work-up ${LB.loc()}.</li>
</ul>` },
{ id: "staging", title: "Risk assessment", html: `
${tbl(["Feature", "Why it matters", "Usual response"], [
["Signs of tension or shock", "Life-threatening", "Decompress, then drain " + r(1)],
["On CPAP or ventilation", "Leak will grow under pressure", "Aspirate or drain " + r(3)],
["Underlying lung disease, hypoxia, bilateral", "Little reserve", "Drain and admit " + LB.exp()],
["Adolescent PSP, minimal symptoms", "Usually resolves", "Observe " + r(2)],
["Adolescent PSP, symptomatic", "Needs relief", "Aspiration or small drain " + r(2)]
])}
<p>For adolescents from about 14 years, the adult BTS pathway calculator can be used as a guide:</p>
<div class="calc" data-calc="ptxplan"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>Newborn</h3>
<ol>
<li>Stabilise: oxygen, review ventilator or CPAP pressures ${LB.exp()}.</li>
<li>Unstable baby: needle aspiration with a 23–25 G butterfly or a small cannula, a three-way tap and syringe, usually at the 2nd intercostal space in the mid-clavicular line ${LB.exp("NOT VERIFIED")}.</li>
<li>If the air re-accumulates or the baby is ventilated with an ongoing leak, insert a small chest drain. Cochrane (2 trials, 142 babies): no clear difference in mortality between aspiration and drainage; with the needle removed at once, 30% needed no drain afterwards; with the cannula left in place, none of 36 did — very low-quality evidence ${r(3)}.</li>
<li>A small, asymptomatic pneumothorax in a baby breathing on its own can often be watched closely ${LB.exp()}.</li>
</ol>
<h3>Older child and adolescent</h3>
<ol>
<li>Tension: decompress, then chest drain; transfer if needed ${r(1)}.</li>
<li>Minimal symptoms: observe with analgesia; repeat film; clear return advice ${r(2)}.</li>
<li>Symptomatic: needle aspiration or a small-bore drain ${r(2)}.</li>
<li>Ongoing air leak: early paediatric surgical review — VATS with stapled blebectomy plus a pleural procedure; early surgery within 24–48 h may help ${r(2)}.</li>
<li>Recurrence after surgery: repeat VATS with more intensive pleural treatment. Operating on the other side "just in case" is not supported ${r(2)}.</li>
</ol>` },
{ id: "drugs", title: "Medicines and doses", html: `${tbl(["Medicine", "Dose", "NEML 2025"], [
[D("paracetamol", "Paracetamol"), "15 mg/kg per dose every 6 hours (max 60 mg/kg/day under 2 years; 75 mg/kg/day, max 4 g, from 2 years) " + r(5), "250 mg/5 mL syrup, 500 mg tablet, suppository, injection"],
[D("ibuprofen", "Ibuprofen"), "7.5–10 mg/kg per dose three times daily, max 400 mg per dose " + r(1, 5), "400 mg tablet only — no syrup"],
[D("morphine", "Morphine"), "Severe pain, titrated IV with monitoring (see monograph)", "10 mg/mL injection"],
[D("lidocaine", "Lidocaine"), "Local anaesthetic before a drain; stay within the weight-based maximum on the monograph", "2% injection"],
[D("oxygen", "Oxygen"), "To keep saturation in the target range", "Yes"]
])}` },
{ id: "populations", title: "Special groups", html: `${tbl(["Group", "What changes"], [
["Preterm on CPAP", "Highest risk; check the chest whenever a baby suddenly worsens " + LB.exp()],
["Asthma", "Pneumothorax can complicate a severe attack — reassess if the child suddenly worsens " + LB.exp()],
["Cystic fibrosis", "Drain early; involve the CF or respiratory team " + LB.exp()],
["Trauma", "Part of the primary survey; transfer all chest injuries " + r(1)],
["Altitude and flying", "Do not fly or travel to high passes until a film shows full resolution; adult advice is to wait 7 days after that film " + r(6)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Preterm on CPAP suddenly drops saturation to 70% and heart rate to 80", "Transilluminate; if one side glows and the baby is unstable, needle aspirate now"],
["Term baby after bag-mask resuscitation, mild tachypnoea, small pneumothorax on film, stable", "Observe closely in SNCU; oxygen as needed"],
["14-year-old with second right pneumothorax", "Refer to paediatric surgery for VATS " + r(2)],
["Child with asthma attack suddenly worse, one-sided silent chest", "Suspect pneumothorax; X-ray if stable, decompress if not"]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Tension, cardiac arrest ${r(1)}.</li>
<li>Newborn: intraventricular haemorrhage linked to sudden pressure swings; recurrence; drain injury to lung or vessels ${LB.exp()}.</li>
<li>Persistent air leak, recurrence ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Repeat chest X-ray to confirm resolution before discharge from follow-up ${LB.exp()}.</li>
<li>Adolescents: no smoking; no diving; flying only after confirmed resolution (adult advice: 7 days after the clear film) ${r(6)}.</li>
<li>Explain recurrence risk and return advice in writing.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Right pneumothorax in a newborn", src: "images/ptx-neonate.jpg", mod: "Chest radiograph (AP, supine)", ctx: "Neonatal pneumothorax", loc: "Right hemithorax", find: "Hyperlucent right hemithorax with the collapsed lung edge visible and the mediastinum pushed slightly left", signs: "Lucency, absent lung markings laterally", interp: "Pneumothorax in a newborn — decompress if unstable", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Pneumothorax_rechts_bei_einem_Neugeborenen_0tageW_-_CR_ap_-_001.jpg", lic: "CC BY-SA 4.0" })}${fig({ title: "Tension pneumothorax (schematic)", src: "images/tension-ptx-schematic.png", mod: "Schematic", ctx: "Tension physiology", find: "Trapped air pushes the mediastinum and heart to the other side", interp: "Treat before any X-ray", by: "Baedr-9439", page: "https://commons.wikimedia.org/wiki/File:Tension-pneumothorax.png", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected pneumothorax in a child", [F.d("Unstable (shock, bradycardia, severe hypoxia)?"), F.a, F.b([["Yes", F.e("Needle decompression → chest drain")], ["No", F.d("Newborn on CPAP/ventilator, lung disease, or hypoxic?")]]), F.a, F.b([["Yes", F.e("Aspirate or drain; admit")], ["No (adolescent PSP)", F.d("Significant symptoms?")]]), F.a, F.b([["No", F.ok("Observe, analgesia, repeat film")], ["Yes", F.s("Aspiration or small drain; surgery if leak persists")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Blaming the CPAP machine when a baby desaturates", "Delays treatment of an air leak", "Check the chest and transilluminate"],
["Draining a congenital lung cyst", "Serious lung injury", "Look for lung markings; ultrasound or CT when unsure"],
["Using adult cannulas in infants", "Lung puncture", "Small butterfly or cannula; shallow insertion"],
["Waiting a week with an air leak in a teenager", "Longer stay", "Early surgical opinion"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Preterm baby on CPAP suddenly desaturates. First bedside test?", "Transillumination (or bedside ultrasound) of both sides of the chest, while checking the airway and equipment.")}
${qa("Intern/MO", "Ibuprofen dose for a 30 kg child?", "7.5–10 mg/kg per dose = 225–300 mg three times daily (max 400 mg per dose).")}
${qa("Specialist", "What did the APSA review advise for ongoing air leak in adolescents?", "Consider early VATS within 24–48 h, with stapled blebectomy plus a pleural procedure.")}
${qa("Specialist", "What does the Cochrane review say about aspiration vs drain in newborns?", "Two small trials; no clear mortality difference; evidence insufficient and of very low quality.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §3.4 Pneumothorax, trauma chapter, and §12.1.3 (paediatric analgesic doses); National Essential Medicines List 2025.</li>
<li id="ref-2">Speck KE, Kulaylat AN, Baerg JE, et al. Evaluation and management of primary spontaneous pneumothorax in adolescents and young adults: a systematic review from the APSA Outcomes & Evidence-Based Practice Committee. J Pediatr Surg 2023;58:1873–1885. <a href="https://doi.org/10.1016/j.jpedsurg.2023.03.018" target="_blank" rel="noopener">doi:10.1016/j.jpedsurg.2023.03.018</a></li>
<li id="ref-3">Bruschettini M, Romantsik O, Zappettini S, et al. Needle aspiration versus intercostal tube drainage for pneumothorax in the newborn. Cochrane Database Syst Rev 2019;2:CD011724. <a href="https://doi.org/10.1002/14651858.CD011724.pub3" target="_blank" rel="noopener">doi:10.1002/14651858.CD011724.pub3</a></li>
<li id="ref-4">Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society Guideline for pleural disease. Thorax 2023;78(Suppl 3):s1–s42. <a href="https://doi.org/10.1136/thorax-2022-219784" target="_blank" rel="noopener">doi:10.1136/thorax-2022-219784</a></li>
<li id="ref-5">US Food and Drug Administration prescribing information for paracetamol (acetaminophen) injection and ibuprofen, as summarised in this guide's drug monographs.</li>
<li id="ref-6">Coker RK, Armstrong A, Church AC, et al. BTS Clinical Statement on air travel for passengers with respiratory disease. Thorax 2022;77:329–350. <a href="https://doi.org/10.1136/thoraxjnl-2021-218110" target="_blank" rel="noopener">doi:10.1136/thoraxjnl-2021-218110</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Adolescent management", "<span class='pass'>Checked</span>", "APSA 2023 abstract; BTS 2023 for logic from 14 years"],
["Newborn evidence", "<span class='pass'>Checked</span>", "Cochrane 2019 abstract"],
["Needle sizes and decompression site in children", "<span class='unv'>Not verified</span>", "Common practice; no guideline text read — marked on the page"],
["Paracetamol and ibuprofen doses", "<span class='pass'>Checked</span>", "Bhutan STG + FDA label"],
["Images", "<span class='pass'>Checked</span>", "2 Commons images, licence checked per file"]
], "qc")}` }
]
});
})();
