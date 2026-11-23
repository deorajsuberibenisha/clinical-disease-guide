/* Birth asphyxia and newborn resuscitation (AHA/ILCOR 2020, Helping Babies Breathe, Bhutan EM booklet 2018) */
registerPage({
id: "asphyxia-child",
title: "Newborn Resuscitation & Birth Asphyxia",
subtitle: "Dry, warm and stimulate; ventilate within the golden minute; compress only after effective ventilation; then look after the brain with warmth, glucose and seizure control",
age: "Newborns", specs: ["neo", "nicu", "paeds", "emerg"],
keywords: ["neonatal resuscitation", "birth asphyxia", "golden minute", "bag mask ventilation", "MR SOPA", "chest compressions newborn", "adrenaline newborn", "HIE", "hypoxic ischaemic encephalopathy", "Sarnat", "therapeutic hypothermia", "Helping Babies Breathe"],
related: ["preterm-child", "neosepsis-child", "hypo-child", "pph-preg"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">About 1 in 10 newborns need help to start breathing; fewer than 1 in 100 need more than bag-mask ventilation. Good ventilation is the key to almost every resuscitation.</p>
<div class="glance">
<div><h4>First 30 s</h4><p>Dry, warm, stimulate; clear airway only if obstructed.</p></div>
<div><h4>Golden minute</h4><p>Not breathing or HR under 100 → bag-mask with air.</p></div>
<div><h4>HR under 60</h4><p>After 30 s good ventilation: compressions 3:1, 100% O₂.</p></div>
<div><h4>Drug</h4><p>${dr("adrenaline_im", "Adrenaline")} 1:10,000 0.1–0.3 mL/kg IV/UVC.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan EM booklet 2018 (chapter 3B): ventilation rate 30–50/min (ILCOR 40–60), ETT adrenaline 0.3–1 mL/kg of 1:10,000. All delivery points have bag-masks; Helping Babies Breathe training is national policy. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Risk factors", html: `<p>Prolonged or obstructed labour, abruption, cord prolapse, breech, preterm, meconium, maternal sedation or infection, pre-eclampsia. Be ready at every birth: warm area, bag and masks sizes 0 and 1, suction, timer.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Asphyxia", [F.s("Reduced placental gas exchange"), F.a, F.s("Primary apnoea (responds to stimulation) → secondary apnoea (needs ventilation)"), F.a, F.e("Bradycardia, hypotension, brain injury (HIE)")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan EM booklet", "ILCOR/AHA 2020", "This guide"], [["Ventilation rate", "30–50/min", "40–60/min", "40–60 " + LB.loc()], ["ETT adrenaline", "0.3–1 mL/kg", "0.5–1 mL/kg", "0.5–1 mL/kg"], ["Meconium", "Older: tracheal suction", "No routine suction; ventilate", "ILCOR"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>At birth: term? breathing or crying? good tone?</li><li>Heart rate (stethoscope, ECG leads best), SpO₂ right hand.</li><li>After resuscitation: Sarnat staging of encephalopathy (consciousness, tone, reflexes, seizures).</li></ul><h3>The typical patient</h3><p>After a prolonged second stage in Zhemgang, a 3 kg baby is floppy and not breathing; HR 70. <b>This is a non-breathing newborn</b>: dry, warm, position, bag-mask with air at 40–60/min; after 30 s of chest-rising breaths HR rises to 130 and the baby breathes. Then: warmth, glucose, observe for seizures and poor feeding.</p>` },
{ id: "ddx", title: "Poor response — think", html: `${tbl(["Problem", "Clue"], [["Ineffective ventilation", "No chest rise — MR SOPA"], ["Pneumothorax", "Asymmetric breath sounds"], ["Hypovolaemia", "Pale, weak pulses — saline 10 mL/kg"], ["Diaphragmatic hernia", "Scaphoid abdomen — intubate, no mask"], ["Congenital heart disease", "Cyanosis despite ventilation"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose; cord/blood gas where available; electrolytes, calcium; sepsis screen if risk.</p>` },
{ id: "staging", title: "Sizes and doses", html: `<div class="calc" data-calc="neoresus"></div>` },
{ id: "manage", title: "Management", html: `<ol><li>Delayed cord clamping 30–60 s if baby is vigorous.</li><li>Dry, warm, stimulate within 30 s.</li><li>Apnoea/gasping or HR under 100: bag-mask ventilation 40–60/min with air (21–30% O₂ if under 35 weeks); MR SOPA if no chest rise.</li><li>HR under 60 after 30 s effective ventilation: intubate if possible, compressions 3:1 (90 compressions + 30 breaths/min), 100% O₂.</li><li>HR still under 60: adrenaline IV/UVC 0.01–0.03 mg/kg every 3–5 min; saline 10 mL/kg if blood loss.</li><li>Stop after 20 min with no heart rate (team and family decision).</li><li><b>Post-resuscitation:</b> normothermia (avoid hyperthermia), glucose 2.6+ mmol/L, fluids 60 mL/kg/day, treat seizures (phenobarbital 20 mg/kg), monitor urine; refer moderate–severe HIE for cooling within 6 h where available.</li></ol>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("adrenaline_im", "Adrenaline 1:10,000"), "0.1–0.3 mL/kg IV", "ETT 0.5–1 mL/kg"], [dr("phenobarbital"), "20 mg/kg IV load", "Seizures"], [dr("dextrose"), "10% 2 mL/kg", "Hypoglycaemia"]])}` },
{ id: "populations", title: "Preterm", html: `<p>Plastic bag, lower pressures (PIP 20–25), 21–30% oxygen, CPAP early — see preterm chapter.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Meconium, baby not vigorous", "Start ventilation; suction only if obstructed"], ["No UVC skills", "IO in the tibia, or ETT adrenaline"]])}` },
{ id: "complications", title: "Complications", html: `<p>HIE, seizures, AKI, hypoglycaemia, hypocalcaemia, PPHN, cerebral palsy, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Neurodevelopmental follow-up for HIE; hearing screening; support for family.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Helping Babies Breathe action plan", src: "images/hbb-action-plan.jpg", mod: "Algorithm", ctx: "Newborn resuscitation", loc: "Delivery room", find: "Prepare, dry, clear airway, stimulate, ventilate within the golden minute", interp: "Basic resuscitation for every birth attendant", by: "American Academy of Pediatrics / Helping Babies Survive", page: "https://commons.wikimedia.org/wiki/File:Helping-babies-breathe-2018-action-plan.jpg", lic: "CC BY 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn at birth", [F.s("Dry, warm, stimulate"), F.a, F.d("Breathing and HR over 100?"), F.a, F.b([["Yes", F.ok("Routine care with mother")], ["No", F.e("Bag-mask within 60 s")]]), F.a, F.d("HR under 60 after 30 s good ventilation?"), F.a, F.e("Compressions 3:1 + adrenaline")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Prolonged suction/rubbing", "Delays ventilation", "Bag-mask by 60 s"], ["Compressions before effective ventilation", "Wasted effort", "Fix ventilation first"], ["Letting the baby get cold", "Worse outcomes", "Warm chain"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "When to start chest compressions?", "HR under 60 despite 30 seconds of effective ventilation; ratio 3:1.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Aziz K, Lee HC, Escobedo MB, et al. Part 5: Neonatal resuscitation: 2020 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2020;142(16 Suppl 2):S524-S550. <a href="https://doi.org/10.1161/CIR.0000000000000902" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Emergency booklet 2018, chapter 3B: Neonatal resuscitation.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
