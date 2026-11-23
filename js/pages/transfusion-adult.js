/* Blood transfusion and reactions (WHO, Bhutan PPH guideline 2016 MTP, BSH 2016) */
registerPage({
id: "transfusion-adult",
title: "Blood Transfusion & Transfusion Reactions",
subtitle: "Transfuse only when it helps, check identity at the bedside every time, give the right volume at the right rate, activate the massive transfusion protocol early, and stop at the first sign of a reaction",
age: "Adults & children", specs: ["medicine", "emerg", "surg", "obg", "paeds"],
keywords: ["blood transfusion", "transfusion reaction", "massive transfusion protocol", "MTP", "packed red cells", "whole blood", "FFP", "platelets", "TACO", "TRALI", "haemolytic reaction", "restrictive transfusion", "blood donation"],
related: ["bleeding-adult", "pph-preg", "anaemia-adult", "thal-child", "ugib-adult", "shock-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Threshold</h4><p>Hb under 7 g/dL (under 8 cardiac) if stable; bleeding — clinical.</p></div>
<div><h4>Dose</h4><p>Adult 1 unit ≈ +1 g/dL; child 10–15 mL/kg red cells or 20 mL/kg whole blood.</p></div>
<div><h4>MTP</h4><p>6 RBC + 4 FFP + 5 platelets + TXA (Bhutan PPH).</p></div>
<div><h4>Reaction</h4><p>Stop, saline, check identity, treat, report.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The National Blood Transfusion Service relies on voluntary donors; peripheral hospitals keep lists of grouped donors ('walking blood bank') — the PPH guideline asks facilities to identify 3–4 O-negative donors in advance. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Components", html: `${tbl(["Component", "Use", "Dose"], [["Whole blood", "Acute haemorrhage where components unavailable", "Child 20 mL/kg"], ["Packed red cells", "Anaemia, bleeding", "Adult 1 unit; child 10–15 mL/kg"], ["FFP", "Coagulopathy with bleeding", "15 mL/kg"], ["Platelets", "Bleeding with low count; procedures", "1 adult dose; child 10–15 mL/kg"], ["Cryoprecipitate", "Fibrinogen under 1.5 g/L", "Adult 10 units; child 5–10 mL/kg"]])}${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Acute haemolytic reaction", [F.s("ABO-incompatible red cells"), F.a, F.s("Complement-mediated intravascular haemolysis"), F.e("Fever, back pain, shock, haemoglobinuria, DIC, AKI")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Liberal", "Restrictive (current)", "This guide"], [["Stable adult threshold", "Hb 9–10", "Hb 7 (8 cardiac/orthopaedic)", "Restrictive " + LB.loc()], ["Children with severe malaria anaemia", "—", "Hb under 5, or under 7 with distress (WHO)", "WHO"]])}` },
{ id: "presentation", title: "Reactions", html: `${tbl(["Reaction", "Features", "Action"], [["Mild allergic", "Itchy rash only", "Slow, antihistamine, continue if settles"], ["Febrile non-haemolytic", "Fever under 1.5 °C rise, stable", "Paracetamol, slow, observe"], ["Anaphylaxis", "Stridor, wheeze, hypotension", "Stop, adrenaline IM, never restart"], ["Acute haemolytic", "Fever, rigors, back pain, hypotension, dark urine", "Stop, saline, check identity, DIC/AKI care, notify blood bank"], ["TACO", "Breathlessness, high BP, crackles", "Stop, sit up, furosemide, oxygen"], ["TRALI", "Hypoxia, bilateral infiltrates within 6 h, low BP", "Stop, oxygen/ventilation, no diuretic"], ["Bacterial contamination", "High fever, shock soon after start", "Stop, cultures (patient + bag), broad antibiotics"]])}<h3>The typical patient</h3><p>A 65-year-old woman receiving her second unit for anaemia becomes breathless with BP 180/100 and crackles. <b>Transfusion-associated circulatory overload</b>: stop, sit up, oxygen, furosemide 40 mg IV; next units slower with furosemide.</p>` },
{ id: "ddx", title: "Differential", html: `${tbl(["Condition", "Clue"], [["Sepsis unrelated", "Infection focus"], ["Underlying disease fever", "Present before transfusion"]])}` },
{ id: "invest", title: "Investigations after a reaction", html: `<p>Repeat identity check; send bag and giving set, clotted and EDTA samples (repeat group, DAT, Hb, bilirubin, LDH), urine for haemoglobin, cultures if febrile/shocked, chest X-ray if breathless.</p>` },
{ id: "staging", title: "Transfusion calculator", html: `<div class="calc" data-calc="mtpcalc"></div>` },
{ id: "manage", title: "Safe transfusion", html: `<ul><li>Consent/explanation; correct sample labelling at the bedside.</li><li>Bedside check: name, ID, group, unit number, expiry, bag intact.</li><li>Observations: before, at 15 min, then hourly; complete within 4 h.</li><li>Child: whole blood 20 mL/kg (or red cells 10–15 mL/kg) over 3–4 h; furosemide 1 mg/kg if heart failure.</li><li>MTP: activate for ongoing major bleeding; 1:1:1-type ratios, TXA, calcium, warmth.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("blood_products"), "By component", "See calculator"], [dr("tranexamic_acid"), "1 g IV", "Bleeding"], [dr("adrenaline_im", "Adrenaline"), "0.5 mg IM", "Anaphylaxis"], [dr("furosemide"), "20–40 mg IV", "TACO"], [dr("cetirizine"), "10 mg", "Mild allergic"]])}` },
{ id: "populations", title: "Pregnancy and children", html: `<p>Rh-negative women of child-bearing age: Rh-negative blood where possible. Neonates: small aliquots, irradiated/CMV-safe where available (specialist).</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No blood bank, PPH", "Pre-identified donors, fresh whole blood, TXA, uterotonics, urgent referral"], ["Jehovah's Witness / refusal", "Respect informed refusal; cell salvage, TXA, iron, early senior input"]])}` },
{ id: "complications", title: "Complications", html: `<p>Reactions (above), iron overload, alloimmunisation, infection, hypothermia, hyperkalaemia, hypocalcaemia with massive transfusion.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Post-transfusion Hb; report all reactions to the blood bank; document units.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Blood unit", src: "images/blood-bag.jpg", mod: "Photograph", ctx: "Transfusion", loc: "Blood bag", find: "Labelled red cell unit", interp: "Check label against patient at the bedside", by: "Wikimedia Commons (CC0)", page: "https://commons.wikimedia.org/wiki/File:Blood_bag_2020.jpg", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Reaction during transfusion", [F.s("Stop, saline, vitals, identity check"), F.a, F.d("Severe (shock, breathless, back pain)?"), F.a, F.b([["Yes", F.e("Treat, don't restart, notify blood bank, samples")], ["No", F.ok("Mild: treat, restart slowly")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Skipping bedside check", "ABO-incompatible transfusion", "Two-person check"], ["Transfusing stable Hb 8", "Unneeded risk", "Restrictive threshold"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "First action if fever and back pain start during a transfusion?", "Stop the transfusion, keep the line open with saline, check identity, and treat as possible haemolytic reaction.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">New HV, Berryman J, Bolton-Maggs PHB, et al. Guidelines on transfusion for fetuses, neonates and older children. Br J Haematol. 2016;175:784-828. <a href="https://doi.org/10.1111/bjh.14233" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. National guideline for management of postpartum haemorrhage, 2016 (blood transfusion and MTP sections).</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
