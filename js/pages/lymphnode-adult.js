/* Lymphadenopathy: approach (Bhutan STG 4.6, AFP 2016, NICE NG12) */
registerPage({
id: "lymphnode-adult",
title: "Lymphadenopathy: Approach",
subtitle: "Most enlarged nodes are reactive — but hard, fixed, supraclavicular, generalised or persistent nodes with fever or weight loss need tissue diagnosis, and in Bhutan TB is the commonest cause of persistent cervical nodes",
age: "Adults & children", specs: ["medicine", "paeds", "id", "onc"],
keywords: ["lymphadenopathy", "enlarged lymph nodes", "cervical lymphadenitis", "TB lymphadenitis", "scrofula", "lymphoma", "FNAC", "excision biopsy", "supraclavicular node", "generalised lymphadenopathy", "HIV"],
related: ["tb-adult", "tb-child", "hiv-adult", "weightloss-adult", "ssti-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Reactive</h4><p>Small, soft, tender, mobile, with local infection — observe 2–4 weeks.</p></div>
<div><h4>Red flags</h4><p>Over 2 cm, hard/fixed/matted, supraclavicular, generalised, B symptoms, over 4–6 weeks.</p></div>
<div><h4>Tissue</h4><p>FNAC + Xpert for TB; excision biopsy for suspected lymphoma.</p></div>
<div><h4>Don't</h4><p>Repeated antibiotics or steroids without a diagnosis.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 4.6: CBC, CRP, ESR, LFT, blood picture, chest X-ray, ultrasound, Mantoux, viral markers, FNAC/biopsy; antibiotics only if infected; persistent nodes need FNAC. Xpert on node aspirates is available through the NTP laboratories. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Group", "Examples"], [["Infection", "Reactive (throat, teeth, scalp, skin), bacterial lymphadenitis, TB, HIV, EBV, scrub typhus (eschar), toxoplasma, brucella"], ["Malignancy", "Lymphoma, leukaemia, metastatic (head and neck, stomach, lung, breast)"], ["Autoimmune", "SLE, RA, Kikuchi"], ["Other", "Drug reaction (phenytoin), sarcoidosis, Kawasaki (children)"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Node enlargement", [F.s("Reactive lymphocyte proliferation or infiltration"), F.a, F.s("Granulomas (TB), malignant cells (lymphoma/metastasis)"), F.e("Persistent, firm, matted nodes")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Common practice", "Evidence", "This guide"], [["Empirical antibiotics", "Repeated courses", "One course at most if signs of bacterial infection", "Tissue diagnosis if persisting " + LB.loc()], ["Empirical TB treatment", "Common", "Confirm with FNAC/Xpert/histology where possible", "Confirm first"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Site, size, consistency, tenderness, mobility, matting, sinus; other node groups; liver/spleen; skin, throat, breast, testes; eschar.</li><li>History: duration, fever, night sweats, weight loss, TB contact, HIV risk, cat contact, drugs.</li></ul><h3>The typical patient</h3><p>A 23-year-old woman in Dagana has painless matted left cervical nodes for 2 months, evening fevers and 4 kg weight loss. <b>Suspected TB lymphadenitis</b>: FNAC with Xpert and cytology, chest X-ray, HIV test; start TB treatment on confirmation.</p>` },
{ id: "ddx", title: "Mimics", html: `${tbl(["Condition", "Clue"], [["Thyroid nodule", "Moves with swallowing"], ["Branchial/thyroglossal cyst", "Congenital, midline/anterior"], ["Lipoma, sebaceous cyst", "Superficial, punctum"], ["Salivary gland", "Related to meals"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC and film, ESR/CRP, HIV, chest X-ray, ultrasound of node; FNAC with Xpert/AFB/culture/cytology; excision biopsy (whole node) if lymphoma suspected or FNAC non-diagnostic; LDH.</p>` },
{ id: "staging", title: "Red flag tool", html: `<div class="calc" data-calc="nodecheck"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Reactive: treat local cause; review in 2–4 weeks.</li><li>Acute bacterial lymphadenitis: cloxacillin/amoxicillin–clavulanate; drain abscess.</li><li>TB lymphadenitis: standard 6-month regimen; nodes may enlarge/paradoxical reaction — continue treatment.</li><li>Lymphoma/metastasis: urgent oncology/surgical referral.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("coamoxiclav"), "625 mg TDS × 7 days", "Bacterial"], [dr("cloxacillin"), "500 mg QDS", "Staph"], [dr("rifampicin"), "TB regimen", "TB lymphadenitis"]])}` },
{ id: "populations", title: "Children", html: `<p>Cervical nodes up to 1–1.5 cm are common and usually reactive; suspect TB with contact/chronic nodes; consider Kawasaki (fever 5 days) and leukaemia (pallor, bruising).</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["FNAC non-diagnostic, node growing", "Excision biopsy"]])}` },
{ id: "complications", title: "Complications", html: `<p>Sinus formation (TB), delayed cancer diagnosis, airway compression (mediastinal nodes).</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Reassess at 2–4 weeks; any persistent node gets tissue.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Tuberculous cervical lymphadenitis", src: "images/tb-cervical-lymphadenitis.jpg", mod: "Clinical photograph", ctx: "Scrofula", loc: "Neck", find: "Matted cervical nodes", interp: "FNAC with Xpert", by: "Mirmillon", page: "https://commons.wikimedia.org/wiki/File:Tuberculose_ganglionnaire_se_fistulisant.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Enlarged node", [F.d("Red flags?"), F.a, F.b([["Yes", F.e("FNAC/biopsy + bloods + CXR")], ["No", F.ok("Treat cause, review 2–4 weeks")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Steroids before biopsy", "Masks lymphoma", "Biopsy first"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Which node site is always significant?", "Supraclavicular.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Gaddey HL, Riegel AM. Unexplained lymphadenopathy: evaluation and differential diagnosis. Am Fam Physician. 2016;94:896-903.</li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 4.6.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["STG 4.6", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
