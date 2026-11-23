/* Cervical cancer — screening and management (Bhutan screening guideline, WHO 2021, FIGO 2018) */
registerPage({
id: "cervical-cancer-adult",
title: "Cervical Cancer & Screening — Women",
subtitle: "Vaccinate girls, screen women from 30 with HPV testing, treat pre-cancer the same day where possible, and refer suspected cancer quickly",
age: "Women", specs: ["obg", "onc", "ph"],
keywords: ["cervical cancer", "HPV", "HPV vaccine", "cervical screening", "HPV DNA", "VIA", "Pap smear", "thermal ablation", "LEEP", "CIN", "FIGO staging", "post-coital bleeding"],
related: ["sti-adult", "hiv-adult", "anaemia-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Cervical cancer is almost entirely preventable. Bhutan was one of the first countries in Asia to introduce HPV vaccination (2010) and is moving to HPV-DNA screening toward the WHO 90-70-90 elimination targets.</p>
<div class="glance">
<div><h4>Vaccinate</h4><p>HPV vaccine for girls (and boys) 9–14 years.</p></div>
<div><h4>Screen</h4><p>HPV-DNA from 30 (25 with HIV), every 5–10 years.</p></div>
<div><h4>Treat pre-cancer</h4><p>Thermal ablation or LEEP; screen-and-treat.</p></div>
<div><h4>Symptoms</h4><p>Post-coital, intermenstrual or postmenopausal bleeding → speculum exam, refer.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan's national cervical cancer screening guideline uses HPV-DNA testing (including self-sampling) with VIA/colposcopy triage and thermal ablation/LEEP. Radiotherapy is at JDWNRH or by referral abroad. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Persistent high-risk HPV (types 16, 18 cause about 70%) causes CIN, which progresses over 10–20 years. HIV increases the risk six-fold.${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("HPV to cancer", [F.s("HPV infection (most clear in 2 years)"), F.a, F.s("Persistent infection → CIN 2/3"), F.a, F.e("Invasive cancer")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "WHO 2021", "This guide"], [["Primary test", "Pap smear / VIA", "HPV-DNA", "HPV-DNA " + LB.loc()], ["Start age", "25", "30 (25 for HIV)", "WHO"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Pre-cancer: no symptoms.</li><li>Cancer: post-coital, intermenstrual or postmenopausal bleeding, offensive discharge, pelvic pain; late: leg swelling, kidney failure (ureteric obstruction), fistula.</li></ul><h3>The typical patient</h3><p>A 47-year-old woman in Lhuentse, never screened, has post-coital bleeding; speculum shows a friable growth on the cervix. <b>This is suspected cervical cancer</b>: biopsy (or refer urgently), Hb, creatinine, staging, gynaecological oncology referral.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Cervical ectropion", "Smooth red area; screening normal"], ["Cervicitis (STI)", "Discharge, test for chlamydia/gonorrhoea"], ["Cervical polyp", "Pedunculated"], ["Endometrial cancer", "Postmenopausal bleeding, thick endometrium"]])}` },
{ id: "invest", title: "Investigations", html: `<p>HPV-DNA test; VIA/colposcopy triage; biopsy of any visible lesion; for cancer: FBC, creatinine, ultrasound kidneys, chest X-ray, MRI pelvis where available.</p>` },
{ id: "staging", title: "Screening tool and FIGO stage", html: `<div class="calc" data-calc="cervscreen"></div>${tbl(["FIGO 2018", "Extent", "Usual treatment"], [["I", "Confined to cervix", "Surgery (radical hysterectomy) or chemoradiation"], ["II", "Beyond uterus, not pelvic wall/lower vagina", "Chemoradiation"], ["III", "Pelvic wall, lower vagina, hydronephrosis, nodes", "Chemoradiation"], ["IV", "Bladder/rectum or distant", "Palliative"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Screen-positive: triage and treat with thermal ablation (if eligible) or LEEP; retest at 12 months.</li><li>Suspected cancer: urgent referral; correct anaemia.</li><li>Palliative care: pain, bleeding (vaginal packing, tranexamic acid, radiotherapy), offensive discharge (metronidazole), fistula care, kidney obstruction.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Use"], [[dr("tranexamic_acid"), "Bleeding"], [dr("metronidazole"), "Offensive discharge"], [dr("morphine"), "Pain"]])}` },
{ id: "populations", title: "Women living with HIV and pregnancy", html: `<ul><li>HIV: start at 25, every 3–5 years.</li><li>Pregnancy: screening can be done; treatment of CIN usually deferred to postpartum unless cancer suspected.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Woman declines speculum exam", "Offer HPV self-sampling"]])}` },
{ id: "complications", title: "Complications", html: `<p>Haemorrhage, renal failure, fistula, lymphoedema; treatment: radiation cystitis/proctitis, early menopause.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>After cancer treatment: review every 3–6 months for 2 years; after pre-cancer treatment: HPV test at 12 months.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Squamous cell carcinoma of the cervix (Pap)", src: "images/cervix-scc-pap.jpg", mod: "Cytology, Pap stain", ctx: "Cervical cancer", loc: "Cervix", find: "Pleomorphic, keratinised malignant squamous cells", interp: "Confirms malignancy; needs biopsy and staging", by: "Unknown author (Wikimedia Commons)", page: "https://commons.wikimedia.org/wiki/File:Squamous_cell_carcinoma_in_the_cervix,_pap_stain.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Screening", [F.s("HPV-DNA from 30"), F.a, F.d("Positive?"), F.a, F.b([["No", F.ok("Repeat in 5–10 years")], ["Yes", F.e("Triage → ablation/LEEP; cancer → refer")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Treating post-coital bleeding without speculum", "Missed cancer", "Always look"], ["Losing screen-positive women", "Cancer develops", "Screen-and-treat same visit"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Screening start age for a woman living with HIV?", "25 years, every 3–5 years.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. WHO guideline for screening and treatment of cervical pre-cancer lesions for cervical cancer prevention, 2nd ed. Geneva: WHO; 2021. <a href="https://www.who.int/publications/i/item/9789240030824" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">Bhatla N, Berek JS, Cuello Fredes M, et al. Revised FIGO staging for carcinoma of the cervix uteri. Int J Gynaecol Obstet. 2019;145:129-135. <a href="https://doi.org/10.1002/ijgo.12749" target="_blank" rel="noopener">doi</a></li><li id="ref-3">Ministry of Health, Bhutan. National guideline for cervical cancer screening and management, 2021.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
