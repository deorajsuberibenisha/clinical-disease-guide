/* Neonatal seizures (WHO 2023 guidelines, ILAE) */
registerPage({
id: "neoseizure-child",
title: "Neonatal Seizures",
subtitle: "Recognise subtle seizures, correct glucose, calcium and magnesium, give phenobarbital first, treat sepsis and look for HIE, and stop maintenance drugs early",
age: "Newborns (first 28 days)", specs: ["neo", "nicu", "neuro"],
keywords: ["neonatal seizures", "neonatal convulsions", "phenobarbital", "levetiracetam", "HIE", "hypoglycaemia", "hypocalcaemia", "neonatal meningitis", "subtle seizures"],
related: ["asphyxia-child", "neosepsis-child", "hypo-child", "epilepsy-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Newborn seizures are often subtle — lip smacking, cycling, eye deviation, apnoea. Most have a cause: HIE, infection, low glucose, calcium or magnesium, stroke.</p>
<div class="glance">
<div><h4>Fix</h4><p>Glucose, calcium, magnesium first.</p></div>
<div><h4>First line</h4><p>${dr("phenobarbital")} 20 mg/kg IV.</p></div>
<div><h4>Second line</h4><p>${dr("levetiracetam")}, ${dr("phenytoin")} or midazolam.</p></div>
<div><h4>Stop</h4><p>Maintenance only if needed; stop before discharge (WHO).</p></div>
</div>
${box("bt", "Bhutan note", `<p>No STG chapter; Bhutan EM booklet: phenobarbital first line. Phenobarbital, phenytoin, levetiracetam, calcium gluconate and magnesium sulfate are on the NEML; EEG is at JDWNRH. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Cause", "Typical timing"], [["HIE", "First 24–48 h after asphyxia"], ["Hypoglycaemia", "Any time, high-risk babies"], ["Sepsis/meningitis", "Any time"], ["Hypocalcaemia, hypomagnesaemia", "Day 2–3 or late (cow's milk)"], ["Stroke, haemorrhage", "Focal seizures"], ["Withdrawal, metabolic, genetic", "Rare"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Neonatal brain", [F.s("Excitatory networks mature first"), F.a, F.s("Seizures often electrographic only"), F.e("Clinical signs subtle; EEG confirms")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "WHO 2023", "This guide"], [["Maintenance", "Continue for months", "Stop before discharge if normal exam/EEG", "WHO " + LB.loc()], ["Second line", "Phenytoin", "Phenytoin, levetiracetam, midazolam, lidocaine", "Levetiracetam/phenytoin"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Subtle: eye deviation, blinking, chewing, cycling, apnoea with tachycardia.</li><li>Clonic, tonic, myoclonic.</li><li>Not seizures: jitteriness (stops when limb held, stimulus-sensitive, no eye signs).</li></ul><h3>The typical patient</h3><p>A 3 kg term baby born after a difficult delivery has rhythmic jerking of the right arm and lip smacking at 12 hours; glucose 3.8. <b>Seizures with probable HIE</b>: phenobarbital 60 mg IV, check calcium, magnesium, sepsis screen and LP when stable, refer to NICU.</p>` },
{ id: "ddx", title: "Mimics", html: `${tbl(["Condition", "Clue"], [["Jitteriness", "Stops with gentle restraint"], ["Benign sleep myoclonus", "Only in sleep, stops on waking"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose, calcium, magnesium, sodium, blood culture, CRP, LP, blood gas; cranial ultrasound; EEG; MRI later.</p>` },
{ id: "staging", title: "Seizure drug tool", html: `<div class="calc" data-calc="neoseizure"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>ABC, oxygen, glucose correction.</li><li>Phenobarbital 20 mg/kg; repeat 10–20 mg/kg if needed.</li><li>Second line: levetiracetam 40–60 mg/kg or phenytoin 20 mg/kg.</li><li>Treat cause: antibiotics for sepsis/meningitis, calcium/magnesium.</li><li>Maintenance only for recurrence; stop before discharge if well.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("phenobarbital"), "20 mg/kg IV", "First line"], [dr("levetiracetam"), "40–60 mg/kg IV", "Second line"], [dr("phenytoin"), "20 mg/kg IV over 30 min", "Second line"], [dr("calcium_gluconate"), "2 mL/kg 10% IV", "Hypocalcaemia"], [dr("magnesium_sulfate"), "100 mg/kg", "Hypomagnesaemia"]])}` },
{ id: "populations", title: "Preterm", html: `<p>Higher risk of IVH-related seizures; cranial ultrasound.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Apnoea after phenobarbital", "Bag-mask, CPAP/ventilation; refer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Brain injury, cerebral palsy, epilepsy, developmental delay.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Neurodevelopmental follow-up; hearing and vision screening.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn seizure", [F.s("ABC, glucose, Ca, Mg"), F.a, F.s("Phenobarbital 20 mg/kg"), F.a, F.d("Continuing?"), F.a, F.b([["Yes", F.e("Repeat phenobarbital → levetiracetam/phenytoin")], ["No", F.ok("Treat cause, observe")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Calling jitteriness a seizure", "Unneeded drugs", "Hold the limb"], ["Missing meningitis", "Death/disability", "LP"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "First-line drug for neonatal seizures?", "Phenobarbital 20 mg/kg IV.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. Guidelines on the management of seizures in the neonatal period. Geneva: WHO; 2023. <a href="https://www.who.int/publications/i/item/9789240055414" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["WHO 2023", "<span class='pass'>Checked</span>", "Doses"]], "qc")}` }
]
});
