/* Abnormal uterine bleeding (Bhutan STG 11.10, FIGO PALM-COEIN 2018, ACOG) */
registerPage({
id: "aub-adult",
title: "Abnormal Uterine Bleeding (AUB)",
subtitle: "Exclude pregnancy, classify with PALM-COEIN, treat heavy bleeding with tranexamic acid, NSAIDs or hormones, sample the endometrium when risk is high, and always investigate postmenopausal bleeding",
age: "Women of reproductive age & postmenopausal", specs: ["obg"],
keywords: ["abnormal uterine bleeding", "AUB", "heavy menstrual bleeding", "menorrhagia", "PALM-COEIN", "fibroids", "endometrial hyperplasia", "postmenopausal bleeding", "tranexamic acid", "medroxyprogesterone", "LNG-IUS", "anovulatory bleeding", "PCOS"],
related: ["anaemia-adult", "miscarriage-preg", "ectopic-preg", "cervical-cancer-adult", "contraception-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>First</h4><p>Pregnancy test; Hb.</p></div>
<div><h4>Classify</h4><p>PALM (structural) – COEIN (non-structural).</p></div>
<div><h4>Treat</h4><p>${dr("tranexamic_acid")}, ${dr("ibuprofen")}, ${dr("coc", "COC")} (STG), ${dr("dmpa", "progestogen")}.</p></div>
<div><h4>Sample</h4><p>Age 45+ or risk factors; all postmenopausal bleeding.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 11.10: healthy weight, counselling, NSAIDs, combined pill, refer for surgery when needed; refer all postmenopausal bleeding. Ultrasound at district hospitals; hysteroscopy/endometrial sampling at referral hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "PALM-COEIN", html: `${tbl(["Structural (PALM)", "Non-structural (COEIN)"], [["Polyp", "Coagulopathy (VWD, anticoagulants)"], ["Adenomyosis", "Ovulatory dysfunction (PCOS, thyroid, adolescence, perimenopause)"], ["Leiomyoma (fibroid)", "Endometrial"], ["Malignancy/hyperplasia", "Iatrogenic (IUD, hormones, anticoagulants)"], ["", "Not yet classified"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Anovulatory bleeding", [F.s("No ovulation → unopposed oestrogen"), F.a, F.s("Thick unstable endometrium"), F.e("Irregular heavy bleeding; hyperplasia risk")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "NICE/ACOG", "This guide"], [["First line HMB", "NSAID, COC", "LNG-IUS first; TXA, NSAID, COC", "TXA/NSAID/COC; LNG-IUS where available " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Pattern (heavy, irregular, intermenstrual, postcoital, postmenopausal), duration, pain, symptoms of anaemia, bleeding history, drugs, contraception, weight, thyroid, PCOS features.</li><li>Abdominal and speculum exam; bimanual (fibroids).</li></ul><h3>The typical patient</h3><p>A 38-year-old in Trashigang has heavy periods with clots for a year; Hb 9.2; bulky uterus. <b>Heavy menstrual bleeding, likely fibroids</b>: pregnancy test, ultrasound, tranexamic acid 1 g TDS during menses + ibuprofen, iron; refer for LNG-IUS/myomectomy/hysterectomy depending on findings and wishes.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Pregnancy complications", "Positive test"], ["Cervical cancer/polyp", "Postcoital bleeding — speculum"], ["Endometrial cancer", "Postmenopausal, obesity, PCOS, diabetes"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Pregnancy test, FBC, ferritin; TSH, coagulation (if heavy since menarche); ultrasound; endometrial sampling when indicated; cervical screening up to date.</p>` },
{ id: "staging", title: "AUB tool", html: `<div class="calc" data-calc="aubplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Acute heavy bleeding: resuscitate, TXA, high-dose progestogen or COC, D&C if failing.</li><li>Chronic HMB: TXA + NSAID during menses; COC; cyclical/continuous progestogen; LNG-IUS; DMPA.</li><li>Structural: polypectomy, myomectomy, hysterectomy.</li><li>Anovulatory (PCOS): COC or cyclical progestogen to protect the endometrium; weight loss.</li><li>Iron for anaemia.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("tranexamic_acid"), "1 g TDS during menses", "Up to 4 days"], [dr("ibuprofen"), "400 mg TDS", "During menses"], [dr("coc"), "1 daily", "STG"], [dr("dmpa"), "MPA 10–20 mg TDS × 7 days (acute)", "Or DMPA injection"], [dr("ferrous"), "60–120 mg elemental", "Anaemia"]])}` },
{ id: "populations", title: "Adolescents", html: `<p>Heavy bleeding from menarche: screen for von Willebrand disease; anovulatory cycles common.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Hb 5, still bleeding", "Transfuse, TXA, high-dose progestogen, gynaecology"]])}` },
{ id: "complications", title: "Complications", html: `<p>Iron deficiency anaemia, missed cancer, reduced quality of life.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review in 3 months; Hb; refer if not controlled.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("AUB", [F.s("Pregnancy test, Hb"), F.a, F.d("Postmenopausal / age 45+ / risk?"), F.a, F.b([["Yes", F.e("Ultrasound + endometrial sampling")], ["No", F.ok("Medical treatment + ultrasound")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Hormones without pregnancy test", "Missed pregnancy", "Test first"], ["Not referring PMB", "Missed cancer", "Refer all"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Tranexamic acid dose for heavy menstrual bleeding?", "1 g three times daily for up to 4 days during menses.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Munro MG, Critchley HOD, Fraser IS, FIGO Menstrual Disorders Committee. The two FIGO systems for normal and abnormal uterine bleeding symptoms and classification of causes of abnormal uterine bleeding in the reproductive years: 2018 revisions. Int J Gynaecol Obstet. 2018;143:393-408. <a href="https://doi.org/10.1002/ijgo.12666" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 11.10.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
