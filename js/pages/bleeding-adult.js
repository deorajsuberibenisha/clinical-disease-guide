/* Bleeding disorders and coagulopathy (WHO MCPC, Bhutan dengue guideline, WFH 2020) */
registerPage({
id: "bleeding-adult",
title: "Bleeding Disorders & Coagulopathy",
subtitle: "Tell platelet-type from factor-type bleeding, use the bedside clotting test, restore volume, treat the cause, and replace only what is missing",
age: "Adults & children", specs: ["medicine", "emerg", "paeds", "obg"],
keywords: ["bleeding disorder", "coagulopathy", "DIC", "haemophilia", "von Willebrand", "thrombocytopenia", "ITP", "vitamin K deficiency", "warfarin reversal", "FFP", "cryoprecipitate", "platelet transfusion", "20 minute whole blood clotting test", "bedside clotting test"],
related: ["transfusion-adult", "pph-preg", "dengue-adult", "snakebite-adult", "cirrhosis-adult", "aph-preg"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Pattern</h4><p>Petechiae/mucosal = platelets/VWD; joints/muscle/deep = factors.</p></div>
<div><h4>Bedside</h4><p>No clot in 7 min (obstetric) / 20WBCT (snakebite) = coagulopathy.</p></div>
<div><h4>Replace</h4><p>${dr("blood_products", "FFP")} 15 mL/kg, cryo if fibrinogen under 1.5, platelets if bleeding under 50 (20 if not).</p></div>
<div><h4>Specific</h4><p>${dr("vitamin_k")}, ${dr("tranexamic_acid")}, ASV, factor concentrates.</p></div>
</div>
${box("bt", "Bhutan note", `<p>FFP, platelets and whole blood are available at hospital blood banks; cryoprecipitate and factor VIII/IX concentrates are limited (JDWNRH). Dengue and snakebite are leading causes of acquired coagulopathy — follow those chapters' product thresholds. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Type", "Examples"], [["Platelets — low", "ITP, dengue, sepsis/DIC, leukaemia, aplastic anaemia, drugs, hypersplenism"], ["Platelets — dysfunction", "Aspirin/clopidogrel, uraemia, von Willebrand disease"], ["Factors — inherited", "Haemophilia A (VIII), B (IX), VWD"], ["Factors — acquired", "Liver disease, vitamin K deficiency (newborn, malabsorption), warfarin/DOACs, DIC, snake envenoming, dilution after massive transfusion"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("DIC", [F.s("Trigger: sepsis, obstetric, trauma, venom, malignancy"), F.a, F.s("Widespread clotting consumes platelets and factors"), F.e("Bleeding + microthrombi, organ failure")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Practice", "Evidence", "This guide"], [["Platelets in dengue without bleeding", "Common", "Only if under 10,000 or before procedures", "Bhutan dengue guideline " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>History: lifelong vs new, family, drugs (warfarin, aspirin, NSAIDs), liver disease, snakebite, pregnancy, dengue.</li><li>Examination: petechiae, purpura, mucosal bleeding, haemarthrosis, hepatosplenomegaly, lymph nodes.</li></ul><h3>The typical patient</h3><p>A 9-year-old boy in Paro with a swollen painful knee after a minor fall, and an uncle with 'bleeding disease'; aPTT prolonged, PT and platelets normal. <b>Probable haemophilia</b>: factor VIII/IX assay, ice, rest, analgesia (no NSAIDs/IM injections), factor concentrate via JDWNRH; FFP only if concentrate unavailable (haemophilia B).</p>` },
{ id: "ddx", title: "Lab patterns", html: `${tbl(["Platelets", "PT/INR", "aPTT", "Think"], [["Low", "Normal", "Normal", "ITP, dengue, marrow"], ["Normal", "Normal", "Long", "Haemophilia, VWD, heparin"], ["Normal", "Long", "Normal/long", "Warfarin, vitamin K deficiency, liver"], ["Low", "Long", "Long", "DIC, liver failure, massive transfusion, envenoming"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC and film, PT/INR, aPTT, fibrinogen, D-dimer, LFT, creatinine, bedside clotting test/20WBCT; factor assays, VWF studies at referral.</p>` },
{ id: "staging", title: "Transfusion tool", html: `<div class="calc" data-calc="mtpcalc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Resuscitate; local pressure; treat the cause.</li><li>DIC: treat cause; FFP 15 mL/kg if bleeding with long PT/aPTT; cryo for fibrinogen under 1.5; platelets if bleeding and under 50,000.</li><li>Warfarin bleeding: stop, vitamin K 5–10 mg IV, FFP/PCC.</li><li>Newborn: vitamin K 1 mg IM at birth prevents haemorrhagic disease.</li><li>ITP: observe if no bleeding; prednisolone/IVIG if bleeding or very low (specialist).</li><li>Haemophilia: factor concentrate; desmopressin for mild haemophilia A/VWD; tranexamic acid for mucosal bleeding.</li><li>Snakebite coagulopathy: antivenom (not FFP alone).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("vitamin_k"), "5–10 mg IV (adult)", "Warfarin, deficiency"], [dr("tranexamic_acid"), "1 g IV/oral 8-hourly", "Mucosal/trauma/PPH"], [dr("blood_products"), "FFP 15 mL/kg etc.", "By deficit"], [dr("desmopressin"), "0.3 µg/kg IV", "Mild haemophilia A/VWD"], [dr("asv"), "Per protocol", "Snakebite"]])}` },
{ id: "populations", title: "Pregnancy and newborn", html: `<p>Obstetric DIC (abruption, PPH, eclampsia, AFE) — deliver and replace. Newborn bleeding: vitamin K deficiency, thrombocytopenia (maternal ITP/alloimmune), sepsis.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No lab, oozing from drips after delivery", "Bedside clot test, fresh whole blood, tranexamic acid, treat PPH cause"]])}` },
{ id: "complications", title: "Complications", html: `<p>Haemorrhagic shock, intracranial bleeding, joint destruction (haemophilia), transfusion reactions.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Haemophilia register and family screening; bleeding card; avoid NSAIDs/IM injections.</p>` },
{ id: "images", title: "Images", html: `<p>See dengue and snakebite chapters for bedside tests.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Bleeding patient", [F.s("Resuscitate, FBC, PT, aPTT, fibrinogen, clot test"), F.a, F.d("Pattern?"), F.a, F.ok("Replace what is missing + treat cause")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["IM injections in haemophilia", "Muscle haematoma", "IV/oral/SC only"], ["Platelets for every low count", "Waste, alloimmunisation", "Bleeding/threshold based"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Isolated prolonged aPTT in a boy with haemarthrosis?", "Haemophilia A or B — check factor VIII/IX.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. Managing complications in pregnancy and childbirth, 2nd ed. 2017 (coagulopathy). <a href="https://www.who.int/publications/i/item/9789241565493" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">Srivastava A, Santagostino E, Dougall A, et al. WFH guidelines for the management of hemophilia, 3rd edition. Haemophilia. 2020;26(Suppl 6):1-158.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Bhutan dengue thresholds", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
