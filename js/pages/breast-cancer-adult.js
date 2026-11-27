/* Breast cancer — adults. NEW disease (batch N-1, 27 Nov 2026).
   Sources read directly: Bhutan MoH Guideline for screening gastric, cervical and breast cancers (final revision 16 Aug 2021; Bhutan Medical
   Library) — breast section: 3rd commonest cancer in Bhutanese women; risk factors; warning symptoms; BSE for awareness only; CBE not recommended
   for screening average-risk women; mammography target groups (40–65 with risk factors, > 40 with clinical indications, voluntary > 45);
   BI-RADS 0–6 and actions (3 → repeat at 12 months; 4–5 → biopsy; 6/suspicious mass → onco-surgeon); mammography always correlated with
   sonomammography; ultrasound, MRI, CT roles; core needle biopsy; DHIS-2 reporting; early treatment options;
   Cancer incidence and mortality in Bhutan 2019–2022 (PBCR; Bhutan Medical Library) — breast 135 cases, 7.9% of female cancers, CR 9.4,
   AAR 9.9 per 100,000; lower than India, Nepal, Sri Lanka; Health Flagship screening 2020–23 (93% breast coverage), now in routine services;
   surgery mainly at JDWNRH, chemotherapy started at JDWNRH or continued after Kolkata;
   ICMR/DHR Standard Treatment Workflow Breast cancer (July 2020) — symptoms ABCD; triple assessment; bilateral mammogram > 30 y; USG breast and
   axilla; core biopsy with ER/PR/HER2/Ki-67; FISH if HER2 2+; staging work-up only from stage 2B; DO NOT excise for diagnosis or biopsy
   before imaging; early vs advanced pathways; adjuvant chemotherapy if pT > 1 cm or node +ve; RT after BCS and after mastectomy with N+ or
   T3/T4; trastuzumab 12 months for HER2 +; hormone therapy ≥ 5 years (10 if high risk) — tamoxifen premenopausal, tamoxifen or AI
   postmenopausal; zoledronic acid; metastatic care incl. bone-modifying agent 4–12-weekly, palliative RT, pleurodesis;
   ICMR Consensus document for management of breast cancer (2016) — triple test; cyst/solid pathways; imaging by age (< 30 USG; ≥ 30 mammography
   ± USG); core biopsy preferred, FNAC acceptable; nipple discharge pathway; BCT eligibility and contraindications; SLNB or low axillary
   sampling; anthracycline ± taxane regimens; endocrine-alone for small node-negative ER+ low grade; RT 50 Gy/25 or 40 Gy/15; follow-up
   6-monthly for 5 years then yearly to 10, mammogram every 12–24 months, no routine tests;
   NEML 2025 text — cyclophosphamide, doxorubicin, fluorouracil, methotrexate listed; tamoxifen and aromatase inhibitors NOT found.
   NICE NG12 breast referral thresholds from earlier reading (marked). ESMO 2024 behind bot check — not read, not cited. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "breast-cancer-adult",
title: "Breast Cancer — Adults",
subtitle: "Never ignore a breast lump: do the triple assessment (examination, imaging, core biopsy) before any surgery, stage it, and plan surgery, radiotherapy and drug treatment in a multidisciplinary team — hormone tablets for every hormone-positive cancer",
age: "Adults (mostly women over 30)", specs: ["onc", "surg", "obg"],
keywords: ["breast cancer", "breast lump", "carcinoma breast", "triple assessment", "mammography", "BI-RADS", "core needle biopsy", "FNAC", "ER PR HER2", "tamoxifen", "letrozole", "aromatase inhibitor", "trastuzumab", "mastectomy", "breast conserving surgery", "sentinel node biopsy", "nipple discharge", "Paget's disease of the nipple", "metastatic breast cancer", "breast screening"],
related: ["mastitis-preg", "palliative-care", "lymphnode-adult", "cervical-cancer-adult", "gastric-cancer-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Breast cancer is the third commonest cancer in Bhutanese women (about 9.9 per 100,000 a year). It is curable when found early, but many women in South Asia present late. Every lump needs a full assessment — not reassurance and not a quick excision ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Lump in the breast or armpit, skin dimpling or puckering, nipple retraction, ulcer or blood-stained discharge, eczema of the nipple, change in shape ${r(1)} ${r(3)}.</p></div>
<div><h4>Triple assessment</h4><p>Clinical examination + imaging (ultrasound under 30; mammography ± ultrasound at 30 and over) + <b>core needle biopsy</b> with ER, PR and HER2 ${r(3)} ${r(4)}.</p></div>
<div><h4>Do not</h4><p>Excise a lump for diagnosis, or biopsy before imaging (ICMR) ${r(3)}.</p></div>
<div><h4>Treat</h4><p>Early: surgery, then chemotherapy / radiotherapy / hormones by stage and receptors. Hormone-positive: <a href="#/fdb/tamoxifen">tamoxifen</a> or an aromatase inhibitor for at least 5 years ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Breast screening was part of the Health Flagship Programme (2020–23, 93% coverage) and is now in routine services ${r(2)}. The national guideline uses mammography with sonomammography for women 40–65 with risk factors, over 40 with symptoms, and on request over 45, reported with BI-RADS and logged in DHIS-2 ${r(1)}. Surgery is mainly at JDWNRH; chemotherapy is started at JDWNRH or continued after referral to Kolkata ${r(2)}. <b>The NEML 2025 text lists cyclophosphamide, doxorubicin, fluorouracil and methotrexate, but no tamoxifen or aromatase inhibitor</b> — check supply for every hormone-positive patient ${r(5)} ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Burden in Bhutan", "135 cases in 2019–22 (7.9% of female cancers); age-adjusted rate 9.9 per 100,000 — lower than India, Nepal and Sri Lanka registries " + r(2)],
["Types", "Invasive ductal (no special type) most common; lobular; DCIS (pre-invasive); Paget's disease of the nipple"],
["Receptor groups", "Hormone receptor (ER/PR) positive; HER2 positive; triple negative — these decide drug treatment " + r(3)],
["Men", "Very rare but occurs " + r(1)],
["Outcome", "Early disease is curable; low survival in poorer countries is mainly from late presentation and limited treatment " + r(1)]
])}
<h3>Risk factors (Bhutan guideline)</h3>
<p>Family history of breast, uterine or ovarian cancer; BRCA1, BRCA2 or p53 mutations; no pregnancy, early periods, late menopause, late first birth; more than 10 years of oral contraceptive or HRT use; chest radiation; alcohol, obesity, inactivity and smoking. Most women with breast cancer have no identifiable risk factor. Breastfeeding and pregnancy before 30 are protective ${r(1)}.</p>
` },

{ id: "patho", title: "Pathophysiology and spread", html: `
${F.chart("Breast cancer", [F.s("Ductal or lobular epithelium — DCIS (in situ)"), F.a, F.s("Invasion of the basement membrane"), F.a, F.s("Lymphatic spread: axillary, internal mammary, supraclavicular nodes"), F.a, F.e("Blood spread: bone, lung, pleura, liver, brain")])}
<p>Signs of distant spread: bone pain, breathlessness or pleural effusion, jaundice or enlarged liver, ascites, headache ${r(3)}.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan screening guideline 2021", "India ICMR STW 2020 / consensus 2016", "This guide"], [
["Who gets mammography", "40–65 with risk factors; > 40 with symptoms; voluntary > 45", "Bilateral mammogram for women > 30 with a lump; USG under 30", "Symptomatic: by age (ICMR); screening: Bhutan target groups " + r(1) + r(3) + r(4)],
["Clinical breast examination", "Not for screening average-risk women", "First step of the triple assessment", "Examine every symptomatic woman " + r(1) + r(3)],
["Biopsy", "Core needle biopsy for suspicious lesions", "Core biopsy preferred; FNAC acceptable with good smears; never excise for diagnosis", "Core biopsy after imaging " + r(3) + r(4)],
["Staging scans", "CT after biopsy confirmation", "Only from stage 2B upwards (early: no metastatic work-up)", "ICMR — avoid unneeded scans in early disease " + r(1) + r(3)],
["Hormone therapy", "Listed as an option", "All ER/PR-positive: ≥ 5 years, up to 10 if high risk", "ICMR; check NEML supply " + r(3) + r(5)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<h3>ICMR 'ABCD' of breast cancer</h3>
${tbl(["Letter", "What to look for"], [
["A — Asymmetry", "Of breast, nipple–areola or axilla"],
["B — Bulge / lump", "Breast lump, prominent veins"],
["C — Colour change", "Redness, skin thickening, 'peau d'orange' oedema, satellite nodules, ulcer"],
["D — Deformity / discharge / distant spread", "Nipple retraction, dimpling, discharge; headache, jaundice, breathlessness, bone pain, ascites"]
])}
<p class="small">${r(3)}</p>
<h3>Examination</h3>
<p>Both breasts and both axillae, supraclavicular fossae; lump size, fixity to skin, muscle or chest wall; nodes; liver, chest, spine tenderness ${r(3)}.</p>
<h3>The typical patient</h3>
<p>A 46-year-old woman from Trongsa has noticed a painless hard lump in the upper outer left breast for 3 months, with slight skin puckering; a 1.5 cm mobile axillary node. <b>Suspected breast cancer</b>: refer to JDWNRH for triple assessment — mammography and ultrasound of breast and axilla, then core biopsy with ER, PR and HER2 — before any surgery ${r(3)} ${r(4)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Next step"], [
["Fibroadenoma", "Young woman, smooth mobile 'breast mouse'", "Ultrasound; core biopsy or excision if solid " + r(4)],
["Breast cyst", "Smooth, may be tender; fluid on ultrasound", "Aspirate; cytology if bloody, complex, refills or a lump remains " + r(4)],
["Fibrocystic change", "Cyclical lumpiness and pain", "Examine after the period; image if a discrete lump"],
["Breast abscess / mastitis", "Fever, red tender breast, lactation " + P("mastitis-preg", "Mastitis"), "Antibiotics, drainage; biopsy if it does not settle (inflammatory cancer can mimic)"],
["Tuberculous mastitis", "Sinus, abscess, axillary nodes", "Biopsy and culture"],
["Fat necrosis", "History of trauma", "Imaging and biopsy — can mimic cancer"]
])}
<h3>Nipple discharge (ICMR)</h3>
<ul><li>White (galactorrhoea), not pregnant or breastfeeding: prolactin and thyroid tests ${r(4)}.</li><li>Green or grumous: a course of antibiotics if not blood-stained, then reassess ${r(4)}.</li><li>Serous, yellow or blood-stained: mammography and/or ultrasound; single-duct bloody discharge → duct excision ${r(4)}.</li></ul>
` },

{ id: "invest", title: "Investigations", html: `
<h3>Triple assessment</h3>
<ol>
<li><b>Clinical breast examination</b> by an experienced clinician ${r(4)}.</li>
<li><b>Imaging:</b> under 30 and clinically benign — ultrasound; 30 and over, or any age with suspicion — bilateral mammography with ultrasound of breast and axilla. In Bhutan, mammography is always correlated with sonomammography ${r(1)} ${r(3)} ${r(4)}. MRI only in selected cases (dense breasts, implants, BRCA carriers, axillary node with no breast primary) ${r(1)} ${r(4)}.</li>
<li><b>Core needle biopsy</b> (preferred; image-guided if impalpable) for type, grade, ER, PR, HER2 and Ki-67; FISH if HER2 is 2+ on immunohistochemistry ${r(3)}. FNAC is acceptable where core biopsy is not possible ${r(4)}.</li>
</ol>
<h3>BI-RADS (Bhutan guideline)</h3>
${tbl(["Category", "Meaning", "Action"], [["0", "Incomplete", "Further imaging"], ["1", "Normal", "Routine"], ["2", "Benign", "Routine"], ["3", "Probably benign (≤ 2% malignant)", "Repeat mammogram in 12 months"], ["4", "Suspicious (2–95%)", "Biopsy"], ["5", "Highly suggestive (> 95%)", "Biopsy"], ["6", "Biopsy-proven cancer", "Refer to the onco-surgeon"]])}
<p class="small">${r(1)}</p>
<h3>Staging</h3>
<p>Stage up to 2A: no metastatic work-up. Stage 2B and above: chest X-ray, abdominal ultrasound and bone scan, or CT chest/abdomen with bone scan, or PET-CT ${r(3)}. Bhutan guideline: CT once cancer is confirmed ${r(1)}. Baseline blood count, liver and renal function, and echo before anthracyclines or trastuzumab ${LB.exp("STANDARD PRACTICE")}.</p>
` },

{ id: "staging", title: "Lump triage tool", html: `<div class="calc" data-calc="breastlump"></div>` },

{ id: "manage", title: "Management", html: `
<p>All patients should be discussed in a <b>multidisciplinary team</b> (surgeon, oncologist, radiotherapist, pathologist, radiologist, nurse, counsellor) ${r(3)}.</p>
<h3>Early breast cancer (T1–2, N0–1, M0)</h3>
<ul>
<li><b>Surgery first</b>: breast-conserving surgery (wide local excision) when eligible and radiotherapy is available, or modified radical mastectomy ${r(3)} ${r(4)}.</li>
<li><b>Axilla</b>: sentinel node biopsy or low axillary sampling if clinically node-negative; axillary dissection if nodes are positive ${r(3)} ${r(4)}.</li>
<li>Breast conservation is not suitable with diffuse microcalcification, multicentric tumour, repeatedly positive margins, previous chest radiotherapy, or if follow-up and radiotherapy cannot be completed ${r(4)}.</li>
<li>Large tumour in a small breast but wanting conservation: neoadjuvant chemotherapy, then reassess ${r(4)}.</li>
</ul>
<h3>Adjuvant treatment (after surgery)</h3>
<ul>
<li><b>Chemotherapy</b>: for tumours over 1 cm or node-positive disease, chosen by ER/PR/HER2 and Ki-67 — anthracycline-based (FAC/FEC) for node-negative; anthracycline plus taxane for node-positive ${r(3)} ${r(4)}. Small (under 2 cm), node-negative, hormone-positive, HER2-negative, low-grade tumours may need hormone therapy alone ${r(4)}.</li>
<li><b>Radiotherapy</b>: after every breast-conserving operation; after mastectomy if node-positive or T3/T4, or with positive margins. Usual dose 50 Gy in 25 fractions, or 40 Gy in 15 fractions over 3 weeks ${r(3)} ${r(4)}.</li>
<li><b>HER2-positive</b>: trastuzumab for 12 months (9 weeks to 6 months acceptable in some) ${r(3)}.</li>
<li><b>Hormone receptor-positive</b>: endocrine therapy for at least 5 years, up to 10 if high risk (e.g. node-positive) — <a href="#/fdb/tamoxifen">tamoxifen</a> before menopause; tamoxifen or an aromatase inhibitor such as <a href="#/fdb/letrozole">letrozole</a> after menopause ${r(3)}.</li>
<li>Bisphosphonate (zoledronic acid) can be added in postmenopausal women ${r(3)}.</li>
</ul>
<h3>Locally advanced (T3–4 or N2–3)</h3>
<p>Metastatic work-up; neoadjuvant chemotherapy (assess after 4 cycles); then mastectomy (or conservation in good responders), radiotherapy to all, and hormone or HER2 therapy as indicated ${r(3)} ${r(4)}.</p>
<h3>Metastatic disease</h3>
<ul>
<li>Aim: quality and length of life; palliative intent ${r(3)}.</li>
<li>Hormone-positive with bone or soft-tissue disease: hormone therapy first; chemotherapy (sequential single agents preferred) for visceral crisis or hormone-negative disease; HER2 therapy if positive ${r(3)}.</li>
<li>Bone metastases: bone-modifying agent (zoledronic acid) every 4–12 weeks; radiotherapy is the best treatment for bone pain ${r(3)}.</li>
<li>Malignant pleural effusion: chest drain and pleurodesis ${r(3)}. See ${P("pleural-effusion-adult", "Pleural effusion")}.</li>
<li>Pain and symptom control: ${P("palliative-care", "Palliative care")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug / treatment", "Use", "Bhutan NEML 2025"], [
["<a href=\"#/fdb/tamoxifen\">Tamoxifen</a> 20 mg daily", "ER/PR-positive, pre- and postmenopausal; DCIS " + r(3) + r(4) + " " + LB.exp("DOSE"), "Not found " + r(5)],
["<a href=\"#/fdb/letrozole\">Letrozole</a> / other aromatase inhibitors", "Postmenopausal ER/PR-positive " + r(3), "Not found " + r(5)],
["Cyclophosphamide, doxorubicin, fluorouracil (FAC/FEC/AC)", "Adjuvant and neoadjuvant chemotherapy (oncologist) " + r(4), "Listed " + r(5)],
["Methotrexate (CMF)", "Option with cardiac risk or older women " + r(4), "Listed " + r(5)],
["Taxanes (paclitaxel, docetaxel)", "Node-positive, high risk " + r(4), "Not found " + r(5)],
["Trastuzumab", "HER2-positive, 12 months " + r(3), "Not found " + r(5)],
["Zoledronic acid", "Bone metastases; adjuvant postmenopausal " + r(3), "Not found " + r(5)]
])}
<p class="small">Chemotherapy is prescribed only by oncologists. Doses depend on body surface area and blood counts.</p>
` },

{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Young women (under 40):</b> more aggressive tumours; fertility counselling before chemotherapy; ovarian suppression in premenopausal metastatic disease ${r(3)}.</li>
<li><b>Pregnancy and breastfeeding:</b> a lump that does not settle needs ultrasound and biopsy — do not dismiss it as a blocked duct.</li>
<li><b>Strong family history / BRCA:</b> earlier and MRI screening at specialist centres; lifelong 6–12-monthly follow-up after treatment ${r(1)} ${r(4)}.</li>
<li><b>Older or frail women:</b> hormone therapy alone may be reasonable for hormone-positive disease; radiotherapy may be omitted after conservation in selected low-risk older women ${r(4)}.</li>
<li><b>Men:</b> same assessment ${r(1)}.</li>
</ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Lump already excised elsewhere, no receptor results", "Get the report and blocks; re-image; revision excision or mastectomy and axillary surgery as needed " + r(4)],
["Woman refuses mastectomy", "Explain breast conservation needs radiotherapy and follow-up; consider neoadjuvant chemotherapy " + r(4)],
["Hormone-positive but no tamoxifen in stock", "Do not leave untreated — arrange supply through the oncology unit " + r(5) + " " + LB.loc()],
["Fungating tumour, bleeding", "Haemostatic radiotherapy; palliative surgery only for local symptoms; wound care " + r(3)],
["Family believes the lump is a 'nerve' problem", "Explain gently; involve family; arrange the triple assessment"]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Of disease: local ulceration, lymphoedema, bone fractures and spinal cord compression, hypercalcaemia, pleural effusion, liver failure, brain metastases. Of treatment: lymphoedema after axillary surgery, seroma, shoulder stiffness, chemotherapy neutropenia and cardiotoxicity, radiation skin reactions, early menopause; tamoxifen — hot flushes, clots, endometrial cancer; aromatase inhibitors — joint pain, bone loss ${r(3)} ${r(4)} ${LB.exp("STANDARD TEACHING")}.</p>` },

{ id: "followup", title: "Follow-up", html: `
<ul>
<li>Every 6 months for 5 years (sooner if symptoms), then yearly to 10 years, then every 2 years ${r(4)}.</li>
<li>History and examination at each visit; mammogram every 12–24 months (both breasts after conservation) ${r(4)}.</li>
<li>No routine blood tests or scans — they do not improve survival or quality of life ${r(4)}.</li>
<li>Support adherence to hormone tablets for 5–10 years; manage menopausal symptoms, bone health and lymphoedema.</li>
</ul>
` },

{ id: "images", title: "Images", html: `<p>No licensed clinical photograph is used. Self-examination and clinical examination diagrams are in the Bhutan screening guideline ${r(1)}. Use the lump triage tool above to decide the next step.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Breast lump", [F.s("History and clinical examination (both breasts, axillae)"), F.a, F.s("Imaging: USG under 30; mammography + USG at 30 and over"), F.a, F.d("Suspicious (BI-RADS 4–5) or solid?"), F.a, F.b([["Yes", F.e("Core biopsy with ER/PR/HER2 — refer to onco-surgeon")], ["Cyst", F.ok("Aspirate; follow up")], ["BI-RADS 3", F.ok("Repeat in 12 months")]]), F.a, F.ok("MDT: surgery, chemo/RT, hormone or HER2 therapy")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Excising a lump to 'see what it is'", "Spoils staging, receptor testing and conservation", "Triple assessment first " + r(3)],
["Biopsy before imaging", "Haematoma obscures the scan", "Image first " + r(3)],
["Full staging scans for every early cancer", "Cost, delay, false positives", "Only from stage 2B " + r(3)],
["Stopping tamoxifen after 1–2 years", "Recurrence", "At least 5 years " + r(3)],
["Reassuring a woman with a lump because she is young", "Late diagnosis", "Ultrasound ± biopsy " + r(4)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is the triple assessment?", "Clinical examination, imaging (mammography and/or ultrasound) and tissue diagnosis (core biopsy).")}
${qa("Intern/MO", "Imaging for a 25-year-old with a smooth mobile lump?", "Ultrasound first (under 30 and clinically benign).")}
${qa("Registrar", "Action for BI-RADS 3?", "Repeat mammography in 12 months (Bhutan guideline).")}
${qa("Registrar", "Who needs radiotherapy after mastectomy?", "Node-positive or T3/T4 disease, or positive margins.")}
${qa("Specialist", "Adjuvant endocrine therapy for a premenopausal ER-positive woman?", "Tamoxifen for at least 5 years, extended to 10 if high risk.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Guideline for screening gastric cancer, cervical cancer and breast cancer (final revision, August 2021).</li>
<li id="ref-2">Ministry of Health, Bhutan. Cancer incidence and mortality in Bhutan 2019–2022 (population-based cancer registry).</li>
<li id="ref-3">Indian Council of Medical Research / Department of Health Research. Standard Treatment Workflow: Breast cancer (ICD-10 C50). July 2020.</li>
<li id="ref-4">Indian Council of Medical Research. Consensus document for management of breast cancer. New Delhi: ICMR; 2016.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan screening guideline 2021", "<span class='pass'>Read</span>", "27 Nov 2026"], ["Bhutan PBCR 2019–22", "<span class='pass'>Read</span>", "Breast figures"], ["ICMR STW 2020 and consensus 2016", "<span class='pass'>Read</span>", "Library PDFs"], ["NEML 2025", "<span class='flag'>Gap</span>", "No tamoxifen, AI, taxane, trastuzumab, zoledronic acid found"], ["ESMO 2024", "<span class='unv'>Not read</span>", "Publisher bot check — not cited"], ["Tamoxifen dose, complications list", "<span class='unv'>Standard teaching</span>", "Marked"], ["Calculator", "<span class='pass'>New</span>", "breastlump"]], "qc")}` }
]
});
})();
