/* Venous thromboembolism: DVT and PE — adults. Thin-page upgrade Round 2, 27 Nov 2026 (id, wells calculator, images kept).
   Sources: NICE NG158 Venous thromboembolic diseases (2020, updated 2023) read in browser — two-level Wells DVT/PE, ultrasound within 4 h or interim
   anticoagulation, D-dimer (age-adjusted > 50, point-of-care), PERC, CTPA/V/Q, outpatient low-risk PE, apixaban or rivaroxaban first, LMWH + VKA
   alternative, renal impairment, extremes of weight, cancer (DOAC), haemodynamically unstable PE (UFH + consider thrombolysis), no thrombolysis in
   stable PE, catheter-directed lysis for iliofemoral DVT, IVC filter only if anticoagulation contraindicated, 3-month review, provoked vs unprovoked;
   ESC 2019 PE and ASH 2020 (from the previous page version); Bhutan STG 2024 (no VTE section); NEML 2025 text (apixaban 5/2.5 mg, enoxaparin, heparin,
   warfarin, alteplase 50 mg vial, tenecteplase replacing streptokinase; dabigatran and rivaroxaban NOT listed — previous page corrected). */
registerPage({
id: "vte-adult",
title: "DVT & Pulmonary Embolism — Adults",
subtitle: "Use Wells and D-dimer to decide who needs imaging, anticoagulate early, thrombolyse high-risk PE, and treat for at least 3 months",
age: "Adults (including pregnancy)", specs: ["medicine", "emerg", "cardio", "resp"],
keywords: ["DVT", "deep vein thrombosis", "pulmonary embolism", "PE", "VTE", "Wells score", "D-dimer", "CTPA", "thrombolysis", "alteplase", "apixaban", "enoxaparin", "warfarin", "thromboprophylaxis"],
related: ["af-adult", "stroke-adult", "acs-adult", "pph-preg", "puerperal-preg", "pneumothorax-adult", "shock-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Pulmonary embolism is a common, often missed cause of breathlessness, collapse and sudden death — especially after surgery, in pregnancy and after delivery, and in cancer ${r(1)} ${r(4)}.</p>
<div class="glance">
<div><h4>Assess</h4><p>Two-level Wells score: unlikely → D-dimer; likely → imaging (leg ultrasound for DVT, CTPA for PE) ${r(4)}.</p></div>
<div><h4>Don't wait</h4><p>If imaging or D-dimer will take more than 4 hours, start interim therapeutic anticoagulation ${r(4)}.</p></div>
<div><h4>Treat</h4><p>Apixaban 10 mg twice daily for 7 days then 5 mg twice daily; or enoxaparin 1 mg/kg 12-hourly with warfarin until INR ≥ 2 twice ${r(4)} ${r(2)}.</p></div>
<div><h4>Shock</h4><p>PE with haemodynamic instability: UFH infusion and thrombolysis (alteplase) ${r(4)} ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG has no VTE section ${r(6)}. NEML 2025 lists apixaban 5 mg and 2.5 mg, enoxaparin, heparin, warfarin, alteplase 50 mg vials, and tenecteplase (replacing streptokinase); <b>dabigatran and rivaroxaban are not listed</b> ${r(5)}. CT pulmonary angiography is available at JDWNRH and some regional hospitals; elsewhere use leg ultrasound and bedside echo ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Risk factors", html: `${tbl(["Strong", "Moderate"], [["Major surgery, hip/knee replacement, major trauma, spinal injury", "Pregnancy and postpartum, oestrogen pill, cancer, chemotherapy"], ["Previous VTE", "Heart failure, stroke with paralysis, long travel, obesity, thrombophilia, high altitude and dehydration"]])}${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Virchow's triad", [F.s("Stasis + endothelial injury + hypercoagulability"), F.a, F.s("Leg vein thrombus"), F.a, F.e("Embolus → RV strain → shock and death")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "NICE NG158 (2020)", "ESC 2019 / ASH 2020", "This guide"], [
["First-line anticoagulant", "Apixaban or rivaroxaban; LMWH then dabigatran/edoxaban, or LMWH + VKA", "DOAC preferred over VKA", "Apixaban (only DOAC on NEML); LMWH + warfarin otherwise " + r(4) + r(2) + r(5)],
["Wells score", "Two-level (DVT ≥ 2 likely; PE > 4 likely)", "Wells or Geneva", "Two-level Wells " + r(4) + r(1)],
["D-dimer", "Consider age-adjusted threshold over 50; point-of-care if no lab", "Age-adjusted", "Age-adjusted " + r(4) + r(1)],
["Stable PE with RV dysfunction", "Do not thrombolyse; rescue if deteriorates", "Monitor; rescue thrombolysis", "Monitor " + r(4) + r(1)],
["Cancer VTE", "Consider DOAC; LMWH if unsuitable", "LMWH or DOAC", "Apixaban or LMWH " + r(4) + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>DVT: unilateral calf/leg swelling, pain, warmth, pitting oedema.</li><li>PE: sudden breathlessness, pleuritic chest pain, haemoptysis, tachycardia, hypoxia, syncope; may mimic pneumonia or ACS.</li></ul>${box("red", "High-risk PE", `<ul><li>SBP under 90 for 15 min or vasopressors, cardiac arrest</li><li>RV dilatation on echo with shock</li></ul>`)}<h3>The typical patient</h3><p>A 34-year-old woman 2 weeks after caesarean section in Phuentsholing has sudden breathlessness; HR 118, SpO₂ 90%, BP 112/70, swollen left calf. <b>This is likely PE (Wells over 4)</b>: start enoxaparin 1 mg/kg 12-hourly, CTPA or leg ultrasound + echo; breastfeeding-compatible anticoagulation (LMWH or warfarin) for at least 3 months and 6 weeks postpartum.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Cellulitis", "Erythema, fever"], ["Ruptured Baker's cyst", "Knee history, ultrasound"], ["Pneumonia", "Fever, consolidation"], ["ACS, pericarditis", "ECG and troponin pattern"], ["Pneumothorax", "Absent breath sounds, X-ray"]])}` },
{ id: "invest", title: "Investigations", html: `
<h3>Suspected DVT (NICE)</h3>
<ul><li>Wells ≥ 2 (likely): proximal leg ultrasound within 4 hours (D-dimer if negative); if no scan within 4 hours, D-dimer + interim anticoagulation + scan within 24 hours ${r(4)}.</li>
<li>Wells ≤ 1 (unlikely): D-dimer within 4 hours (interim anticoagulation if delayed); positive → ultrasound ${r(4)}.</li>
<li>Negative scan but positive D-dimer: stop interim anticoagulation; repeat scan 6–8 days later ${r(4)}.</li></ul>
<h3>Suspected PE (NICE)</h3>
<ul><li>History, examination, chest X-ray to exclude other causes; consider PERC if clinical suspicion is low ${r(4)}.</li>
<li>Wells > 4 (likely): CTPA immediately (V/Q SPECT if contrast allergy, CrCl < 30, or radiation concern) ${r(4)}.</li>
<li>Wells ≤ 4 (unlikely): D-dimer within 4 hours; positive → CTPA ${r(4)}.</li></ul>
<h3>Other tests</h3><p>ECG (tachycardia, RV strain), troponin, echo (RV dilatation), creatinine, FBC and clotting before anticoagulation ${r(1)}.</p>` },
{ id: "staging", title: "Wells score", html: `<div class="calc" data-calc="wells"></div>` },
{ id: "manage", title: "Management", html: `
<ul>
<li><b>Interim anticoagulation</b> while waiting for tests if results will take more than 4 hours — preferably a drug that can be continued ${r(4)}.</li>
<li><b>Confirmed proximal DVT or PE:</b> apixaban 10 mg twice daily for 7 days then 5 mg twice daily (or rivaroxaban); if unsuitable, LMWH for ≥ 5 days then dabigatran/edoxaban, or LMWH with warfarin for ≥ 5 days and until INR ≥ 2.0 on two readings ${r(4)} ${r(2)}.</li>
<li>Enoxaparin 1 mg/kg SC 12-hourly (1 mg/kg daily if CrCl under 30) ${r(2)} ${LB.exp("RENAL DOSE FROM PREVIOUS PAGE")}.</li>
<li><b>Renal impairment</b> (CrCl 15–50): apixaban, rivaroxaban, LMWH then edoxaban/dabigatran (if CrCl ≥ 30), or LMWH/UFH with VKA ${r(4)}.</li>
<li><b>Weight under 50 or over 120 kg:</b> monitor therapeutic levels ${r(4)}.</li>
<li><b>Haemodynamically unstable PE:</b> continuous UFH (80 units/kg bolus then 18 units/kg/h) and consider systemic thrombolysis — alteplase 100 mg over 2 hours ${r(4)} ${r(1)}.</li>
<li>Stable PE (even with RV dysfunction): no thrombolysis; rescue if it deteriorates ${r(4)}.</li>
<li>Iliofemoral DVT, symptoms < 14 days, good function, low bleeding risk: consider catheter-directed thrombolysis (specialist) ${r(4)}.</li>
<li>IVC filter only if anticoagulation is contraindicated or PE occurs despite anticoagulation ${r(4)}.</li>
<li>Low-risk PE: outpatient treatment using a validated risk tool, with written warning signs and a contact ${r(4)}.</li>
<li><b>Duration:</b> review at 3 months (3–6 months with cancer); stop after provoked VTE if the cause has gone; consider continuing after unprovoked VTE depending on bleeding risk ${r(4)}.</li>
</ul>
${box("amber", "Prevention", `<p>Assess VTE risk on admission and before surgery; pharmacological prophylaxis (e.g. enoxaparin) or mechanical measures by risk ${r(1)} ${LB.exp()}.</p>`)}` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Bhutan NEML"], [
[dr("apixaban"), "10 mg twice daily × 7 days → 5 mg twice daily " + r(2), "5 mg, 2.5 mg " + r(5)],
[dr("enoxaparin"), "1 mg/kg 12-hourly SC " + r(2), "Yes " + r(5)],
[dr("warfarin"), "Overlap with LMWH ≥ 5 days until INR ≥ 2 twice; target 2–3 " + r(4), "1 mg, 3 mg " + r(5)],
[dr("heparin_ufh", "Unfractionated heparin"), "80 units/kg bolus → 18 units/kg/h " + r(1), "Yes " + r(5)],
[dr("alteplase"), "100 mg over 2 h (unstable PE) " + r(1), "50 mg vial " + r(5)],
["Dabigatran / rivaroxaban / edoxaban", "Options in NICE " + r(4), "Not on NEML " + r(5)]
])}` },
{ id: "populations", title: "Pregnancy and cancer", html: `<ul><li>Pregnancy: LMWH throughout (no DOAC, no warfarin); at least 6 weeks postpartum and 3 months total. Leg ultrasound first; CTPA or V/Q if needed.</li><li>Cancer: LMWH or apixaban.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Shocked suspected PE, no CT", "Bedside echo: dilated RV → thrombolyse"], ["Major bleeding risk", "IVC filter only if anticoagulation impossible (specialist)"]])}` },
{ id: "complications", title: "Complications", html: `<p>Recurrence, post-thrombotic syndrome, chronic thromboembolic pulmonary hypertension, bleeding.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review at 3 months to decide on stopping; ask about persistent breathlessness (CTEPH); cancer screening only if symptoms.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Right leg DVT", src: "images/dvt-leg.jpg", mod: "Clinical photograph", ctx: "Deep vein thrombosis", loc: "Right leg", find: "Swollen, red right leg", interp: "Calculate Wells; ultrasound", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Deep_vein_thrombosis_of_the_right_leg.jpg", lic: "CC BY-SA 3.0" })}${fig({ title: "Femoral vein DVT on ultrasound", src: "images/dvt-us.jpg", mod: "Compression ultrasound", ctx: "DVT", loc: "Femoral vein", find: "Non-compressible vein with echogenic thrombus", interp: "Confirms DVT", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:Ultrasonography_of_deep_vein_thrombosis_of_the_femoral_vein_-annotated.jpg", lic: "CC0" })}${fig({ title: "Massive PE on CTPA", src: "images/pe-ctpa.jpg", mod: "CT pulmonary angiogram", ctx: "Pulmonary embolism", loc: "Pulmonary arteries", find: "Filling defects occluding pulmonary arteries", interp: "Massive PE: assess for thrombolysis", by: "Rvahudson", page: "https://commons.wikimedia.org/wiki/File:CTA_Chest_With_Massive_Pulmonary_Embolism_and_Complete_Occlusion.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected PE", [F.d("Shock?"), F.a, F.b([["Yes", F.e("Echo/CTPA if possible → thrombolysis")], ["No", F.s("Wells score")]]), F.a, F.b([["Unlikely", F.ok("D-dimer; normal → PE excluded")], ["Likely", F.ok("Anticoagulate + CTPA")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["D-dimer in high-probability patients", "False reassurance", "Image directly"], ["Waiting for imaging before anticoagulating", "Early death", "Start if likely and safe"], ["DOAC in pregnancy", "Fetal harm", "LMWH"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Enoxaparin treatment dose for 70 kg?", "70 mg SC 12-hourly.")}${qa("Intern/MO", "Two-level PE Wells score threshold for 'likely'?", "More than 4 points — go straight to CTPA.")}${qa("Registrar", "Should a normotensive PE with RV dilatation be thrombolysed?", "No (NICE) — anticoagulate and monitor; thrombolyse only if haemodynamic instability develops.")}${qa("Registrar", "How long to treat a provoked DVT after surgery?", "Review at 3 months; stop if the provoking factor has gone and the course was uncomplicated.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020;41:543-603. <a href="https://doi.org/10.1093/eurheartj/ehz405" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ortel TL, Neumann I, Ageno W, et al. American Society of Hematology 2020 guidelines for management of venous thromboembolism: treatment of DVT and PE. Blood Adv. 2020;4:4693-4738. <a href="https://doi.org/10.1182/bloodadvances.2020001830" target="_blank" rel="noopener">doi</a></li><li id="ref-3">Wells PS, Anderson DR, Rodger M, et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med. 2003;349:1227-1235. <a href="https://doi.org/10.1056/NEJMoa023153" target="_blank" rel="noopener">doi</a></li><li id="ref-4">National Institute for Health and Care Excellence. Venous thromboembolic diseases: diagnosis, management and thrombophilia testing (NG158), 2020, updated 2023.</li><li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li><li id="ref-6">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024 (no VTE section).</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOIs (ESC, ASH, Wells)", "<span class='pass'>Verified</span>", "Crossref (previous version)"], ["NICE NG158", "<span class='pass'>Checked</span>", "Read 27 Nov 2026"], ["NEML", "<span class='pass'>Corrected</span>", "Dabigatran/rivaroxaban not on NEML 2025"], ["Bhutan STG", "<span class='pass'>Checked</span>", "No VTE section"], ["Calculator", "<span class='pass'>Kept</span>", "wells"], ["Images", "<span class='pass'>Checked</span>", "Licensed Commons images"]], "qc")}` }
]
});
