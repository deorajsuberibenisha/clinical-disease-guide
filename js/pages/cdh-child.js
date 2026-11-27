/* Congenital diaphragmatic hernia — neonates. Batch E-9, 27 Nov 2026.
   Sources read: CDH EURO Consortium consensus 2015 update (Snoek 2016, Neonatology — full text on karger.com, read by a web-fetch agent and
   summarised with exact thresholds); Merck Manual Professional 'Diaphragmatic hernia' (Aug 2025); Bhutan STG 2024 §12.4.3 (no CDH section);
   NEML 2025 text (no sildenafil, inhaled nitric oxide or alprostadil found). Not read: Canadian CDH Collaborative 2023 update, CDH Study Group,
   TOTAL trial papers (cited via Merck) — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "cdh-child",
title: "Congenital diaphragmatic hernia — neonates",
subtitle: "A newborn in respiratory distress with a scaphoid abdomen and bowel in the chest: intubate at once, never bag-and-mask, decompress the stomach, ventilate gently and accept preductal saturations of 80–95% while arranging transfer",
age: "Neonates", specs: ["neo", "nicu", "paeds", "surg", "resp"],
keywords: ["congenital diaphragmatic hernia", "CDH", "Bochdalek hernia", "Morgagni hernia", "pulmonary hypoplasia", "persistent pulmonary hypertension", "scaphoid abdomen", "bowel sounds in chest", "lung-to-head ratio", "LHR", "FETO", "ECMO", "CDH EURO", "gentle ventilation", "permissive hypercapnia", "preductal saturation", "sildenafil", "inhaled nitric oxide", "patch repair"],
related: ["rds-child", "pphn-child", "asphyxia-child", "neoshock-child", "pneumothorax-child", "chd-child", "neotherm-child", "oesophageal-atresia-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In congenital diaphragmatic hernia (CDH) abdominal organs pass through a hole in the diaphragm into the chest, so the lungs and their blood vessels do not grow properly. The baby is born with small lungs and high pulmonary pressures. It affects about 1 in 4,000 births; 85% are left-sided and 95% posterolateral (Bochdalek) ${r(2)}. About half have another anomaly, especially heart disease ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Breathing difficulty from birth, scaphoid (sunken) abdomen, heart sounds displaced to the right, bowel sounds and absent breath sounds on one side ${r(2)}.</p></div>
<div><h4>Do at once</h4><p><b>Intubate</b> immediately; <b>no bag-and-mask ventilation</b>; nasogastric/orogastric tube on suction; peak pressure ideally 25 cm H₂O or less ${r(1)} ${r(2)}.</p></div>
<div><h4>Targets</h4><p>Preductal SpO₂ 80–95% (right hand), postductal above 70%; PaCO₂ 50–70 mmHg (6.9–9.3 kPa) is acceptable ${r(1)}.</p></div>
<div><h4>Surgery</h4><p>Not an emergency — repair after stabilisation (normal mean BP, preductal SpO₂ 85–95% on FiO₂ under 50%, lactate under 3, urine over 1 mL/kg/h) ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG has no CDH section ${r(4)}. Bhutan has no ECMO and no inhaled nitric oxide service that we could find, and sildenafil and alprostadil are not on the NEML 2025 ${r(3)} ${LB.exp("SERVICE AVAILABILITY NOT CONFIRMED")}. CDH EURO advises delivery at 39 weeks or later in a high-volume tertiary centre (at least 6 CDH babies a year) ${r(1)} — if CDH is seen on antenatal scan, discuss delivery at JDWNRH or referral abroad early ${LB.loc()}. An unexpected case should be intubated, decompressed and ventilated gently, then transferred intubated with a neonatal team ${LB.int()}.</p>`)}
` },
{ id: "overview", title: "The condition in brief", html: `${tbl(["Feature", "Detail"], [
["Types", "Posterolateral (Bochdalek) 95%; anterior (Morgagni) 5%; left 85%; bilateral 2% " + r(2)],
["Frequency", "About 1 in 4,000 live births " + r(2)],
["Associated anomalies", "About 50% (Merck); CDH EURO: about 25% chromosomal or genitourinary and about 20% cardiac " + r(1) + r(2)],
["Contents in the chest", "Small and large bowel, stomach, liver, spleen " + r(2)],
["Survival", "Reported average about 50% in population series (49% isolated left, 38% isolated right); two centres rose from 67% to 88% after adopting the standard protocol " + r(1)],
["Late presentation", "Small defects can present days later, or in childhood after an episode of enteritis " + r(2)]
])}` },
{ id: "patho", title: "How it makes babies ill", html: `
${F.chart("Mechanism", [F.s("Defect in the diaphragm in early pregnancy"), F.a, F.s("Gut (± liver) in the chest compresses the developing lungs"), F.a, F.s("Pulmonary hypoplasia of both lungs + abnormal pulmonary vessels"), F.a, F.d("After birth: swallowed air fills the gut in the chest"), F.a, F.e("Pulmonary hypertension, right-to-left shunt, hypoxia, ventricular dysfunction")])}
<p>Bag-and-mask ventilation blows air into the stomach and bowel in the chest and makes things worse ${r(2)}. Catecholamine-resistant hypotension from adrenal insufficiency is common ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "CDH EURO 2015", "Other sources", "This guide"], [
["Initial ventilation", "Conventional ventilation first (grade C); HFOV as rescue", "Merck: conventional or HFOV may be used " + r(2), "Conventional first " + r(1)],
["Surfactant", "Not routinely (grade D)", "—", "Not routinely " + r(1)],
["Spontaneous breathing at birth", "May be considered if good prognosis (left, o/e LHR over 50%, liver down)", "Most guidance: intubate all", "Intubate unless a specialist plan says otherwise " + LB.int()],
["Fetal tracheal occlusion (FETO)", "Not outside trials (2015)", "Merck 2025: survival benefit in severe cases (TOTAL trial 2021) but significant risks " + r(2), "Specialist fetal centres only " + LB.int()],
["Pulmonary vasodilators", "iNO trial if OI over 20 or pre–post difference over 10%; IV sildenafil considered for severe PH", "Canadian 2023 update " + LB.exp("NOT READ"), "Usually unavailable in Bhutan — transfer " + LB.loc()]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Finding", "Detail"], [
["Antenatal", "Ultrasound or fetal MRI: stomach or bowel in the chest, mediastinal shift; severity by observed/expected lung-to-head ratio and liver position (o/e LHR over 50% with liver down is a good-prognosis marker) " + r(1) + r(2)],
["At birth", "Respiratory distress immediately (severe) or within hours; cyanosis; scaphoid abdomen; displaced apex beat " + r(2)],
["Chest", "Absent breath sounds and bowel sounds on the affected side " + r(2)],
["Milder cases", "Mild distress after hours or days as more bowel herniates " + r(2)]
])}
<h3>The typical patient</h3>
<p>A term baby born at a district hospital becomes blue and breathless in the first minutes. The abdomen is flat, heart sounds are loudest on the right and there are no breath sounds on the left. Stop bag-and-mask ventilation, intubate, pass a large orogastric tube on suction, keep peak pressures low and aim for right-hand saturations of 80–95%. A chest X-ray shows bowel loops in the left chest. Call the neonatal team at JDWNRH for intubated transfer ${r(1)} ${r(2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Congenital pulmonary airway malformation (CPAM)", "Cystic lung lesion; normal abdomen and NG tube below the diaphragm " + LB.exp()],
["Tension pneumothorax", "Hyperlucent hemithorax without bowel pattern; transillumination " + LB.exp()],
["Eventration of the diaphragm", "Raised but intact diaphragm " + LB.exp()],
["Respiratory distress syndrome, PPHN from other causes", "No bowel in the chest " + LB.exp()],
["Oesophageal atresia", "Tube coils in the upper oesophagus " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Notes"], [
["Chest X-ray (with the gastric tube in place)", "Bowel loops in the hemithorax, mediastinal shift; immediately after birth the herniated gut may be an airless opaque mass " + r(2)],
["Preductal and postductal SpO₂", "Right hand vs foot; a difference over 10% suggests ductal shunting " + r(1)],
["Arterial line and blood gases", "Right radial preferred (preductal), umbilical as an alternative " + r(1)],
["Echocardiography", "Within 24 hours: structural heart disease, degree of pulmonary hypertension (above or below two-thirds systemic), ventricular function " + r(1)],
["Lactate, urine output, blood pressure", "Perfusion targets " + r(1)],
["Cranial ultrasound; genetic tests if other anomalies", "As able " + r(1)],
["CT/MRI", "Defect, contents and planning in selected cases " + r(2)]
])}` },
{ id: "staging", title: "Stability and ECMO criteria", html: `
<p>CDH EURO criteria to decide whether the baby is stable enough for surgery, or failing and needs ECMO referral ${r(1)}. Enter the latest values.</p>
<div class="calc" data-calc="cdhcheck"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Delivery room</h3>
<ul>
<li>Intubate immediately after birth; confirm with end-tidal CO₂ if available; no bag-and-mask ventilation; avoid neuromuscular blockers initially ${r(1)}.</li>
<li>Oro- or nasogastric tube on continuous or intermittent suction ${r(1)}.</li>
<li>Peak pressure as low as possible, preferably 25 cm H₂O or less; start below FiO₂ 1.0 and reduce FiO₂ when preductal SpO₂ is above 95% ${r(1)}.</li>
<li>No routine surfactant ${r(1)}.</li>
</ul>
<h3>2. Ventilation targets (intensive care)</h3>
${tbl(["Item", "Target"], [
["Initial settings (conventional, pressure-controlled)", "PIP under 25 cm H₂O, PEEP 3–5 cm H₂O, rate 40–60/min " + r(1)],
["Preductal SpO₂", "80–95% (first 2 hours: as low as 70% acceptable if improving); thereafter preferably 85–95%, down to 80% if pH over 7.2, lactate under 5 mmol/L and urine over 1 mL/kg/h " + r(1)],
["Postductal SpO₂", "Above 70% " + r(1)],
["PaCO₂", "50–70 mmHg (6.9–9.3 kPa); in the first 2 hours pH over 7.2 and PaCO₂ under 65 mmHg " + r(1)],
["Weaning", "Reduce PIP first; if PIP over 28 cm H₂O is needed, consider HFOV or ECMO " + r(1)]
])}
<h3>3. Circulation and pulmonary hypertension</h3>
<ul>
<li>Mean arterial pressure normal for gestation; no supranormal targets if preductal SpO₂ is 80–95% ${r(1)}.</li>
<li>Hypotension or poor perfusion: sodium chloride 0.9% 10–20 mL/kg, up to twice; then inotropes/vasopressors; hydrocortisone if these fail ${r(1)}.</li>
<li>Treat pulmonary hypertension if preductal SpO₂ is below 85% or perfusion is poor: inhaled nitric oxide 10–20 ppm for at least 1 hour if OI over 20 and/or pre–post difference over 10% — stop it if there is no response; IV sildenafil for severe PH; IV prostaglandin E1 if suprasystemic pulmonary pressure with right-to-left shunt at the foramen ovale ${r(1)}.</li>
</ul>
<h3>4. Sedation, fluids, feeding</h3>
<ul>
<li>Sedation with opioids (morphine, fentanyl) while ventilated; watch blood pressure, especially with midazolam ${r(1)}.</li>
<li>Fluids 40 mL/kg/day (including drugs) for the first 24 hours, then increase; diuretics for persistent positive balance; parenteral nutrition only before surgery; start antireflux treatment with enteral feeds ${r(1)}.</li>
</ul>
<h3>5. Surgery</h3>
<p>Elective repair once stable (criteria in the calculator); can be done on ECMO; no routine chest drain; minimally invasive repair has more recurrences; record the defect size. No recommendation for patch versus primary closure ${r(1)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("morphine", "Morphine")} — NEML 10 mg/mL injection; sedation/analgesia when ventilated ${r(1)} ${r(3)}.</li>
<li>${D("fentanyl", "Fentanyl")} — alternative opioid ${r(1)}.</li>
<li>${D("sodium-chloride", "Sodium chloride 0.9%")} — 10–20 mL/kg boluses (up to 2) ${r(1)}.</li>
<li>Dopamine, dobutamine — NEML; ${D("hydrocortisone", "hydrocortisone")} for refractory hypotension ${r(1)} ${r(3)}.</li>
<li>${D("nitric-oxide", "Inhaled nitric oxide")}, ${D("sildenafil", "sildenafil")} (IV), ${D("alprostadil", "alprostadil")} (prostaglandin E1) — specialist PH drugs; not found on the NEML 2025 ${r(3)}.</li>
<li>${D("omeprazole", "Omeprazole")} — NEML; antireflux treatment once feeds start ${r(1)} ${r(3)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Expected delivery before 34 weeks", "Antenatal corticosteroids " + r(1)],
["Right-sided CDH", "Lower survival (38% isolated right in the cited series) " + r(1)],
["Associated heart disease", "Echo early; affects ECMO decisions " + r(1) + r(2)],
["Late presenters", "Vomiting, respiratory symptoms or bowel obstruction in older infants — chest X-ray " + r(2)],
["Antenatal diagnosis", "Plan delivery in a tertiary centre; parents counselled by the fetal and surgical teams " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Baby deteriorates during bag-and-mask resuscitation; abdomen scaphoid", "Stop bagging, intubate, gastric tube on suction " + r(2)],
["Preductal SpO₂ 82%, pH 7.25, PaCO₂ 62 mmHg at 1 hour", "Acceptable — do not raise pressures to chase higher numbers " + r(1)],
["PIP 29 cm H₂O needed, preductal SpO₂ 78%, lactate 6", "Meets ECMO criteria — urgent specialist discussion; HFOV as rescue " + r(1)],
["Day 4: preductal SpO₂ 92% on FiO₂ 0.35, normal BP, lactate 1.8, urine 2 mL/kg/h", "Stable — plan elective repair " + r(1)],
["Antenatal scan at 22 weeks shows stomach in the chest", "Fetal medicine and paediatric surgery counselling; plan delivery at 39 weeks in a tertiary centre " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Persistent pulmonary hypertension; pneumothorax with high pressures ${r(1)} ${LB.exp()}.</li>
<li>Recurrent hernia (more after minimally invasive or patch repair) ${r(1)}.</li>
<li>Gastro-oesophageal reflux and feeding problems, chronic lung disease, heart failure, neurodevelopmental problems ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Long-term multidisciplinary follow-up for pulmonary hypertension, lung disease, reflux, growth and neurodevelopment ${r(2)}.</li>
<li>CDH EURO 2015 has no follow-up schedule ${r(1)}; local plan by the operating centre ${LB.loc()}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn with distress and scaphoid abdomen", [F.s("Stop bag-and-mask; intubate; gastric tube on suction"), F.a, F.s("PIP ≤ 25, PEEP 3–5; preductal SpO₂ 80–95%"), F.a, F.s("Chest X-ray: bowel in chest = CDH"), F.a, F.d("Meeting targets?"), F.a, F.b([["Yes", F.ok("Stabilise for days; elective repair when stable")], ["No", F.e("PH treatment, HFOV, ECMO criteria — urgent tertiary transfer")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Bag-and-mask ventilation", "Inflates the gut in the chest", "Intubate straight away " + r(2)],
["Chasing saturations of 100% and normal PaCO₂", "Barotrauma to hypoplastic lungs", "Accept 80–95% and PaCO₂ 50–70 " + r(1)],
["Rushing to theatre", "Surgery does not fix pulmonary hypoplasia", "Stabilise first " + r(1)],
["Measuring saturation on the foot only", "Misses ductal shunting", "Right hand (preductal) and foot " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Why is bag-and-mask ventilation avoided?", "It fills the herniated stomach and bowel with air and compresses the lungs further.")}
${qa("Intern/MO", "Target preductal saturation?", "80–95%; postductal above 70%.")}
${qa("Specialist", "Name three CDH EURO ECMO criteria.", "Cannot keep preductal SpO₂ over 85% or postductal over 70%; pH under 7.15 despite optimisation; PIP over 28 or MAP over 17 cm H₂O needed; lactate ≥ 5 with pH under 7.15; refractory hypotension with low urine output; OI ≥ 40 for 3 hours.")}
${qa("Specialist", "When is the baby ready for repair?", "Normal mean BP for gestation, preductal SpO₂ 85–95% on FiO₂ under 50%, lactate under 3 mmol/L, urine over 1 mL/kg/h.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Snoek KG, Reiss IKM, Greenough A et al.; CDH EURO Consortium. Standardized postnatal management of infants with congenital diaphragmatic hernia in Europe: the CDH EURO Consortium Consensus — 2015 update. Neonatology. 2016;110(1):66–74. doi:10.1159/000444210.</li>
<li id="ref-2">Belkind-Gerson J. Diaphragmatic hernia. Merck Manual Professional Edition; reviewed Aug 2025.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.4.3 Intestinal obstruction (no CDH section).</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["CDH EURO 2015 update", "<span class='pass'>Checked</span>", "Full text read; grades mostly D (expert opinion)"],
["Merck Manual 2025", "<span class='pass'>Checked</span>", "Read"],
["Canadian 2023 update, TOTAL trial", "<span class='unv'>Not read</span>", "Marked"],
["Bhutan ECMO/iNO availability", "<span class='unv'>Not confirmed</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Thresholds from CDH EURO"],
["Images", "<span class='pass'>None</span>", "No suitable licensed image"]
], "qc")}` }
]
});
})();
