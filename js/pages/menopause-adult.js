/* Menopause (NICE NG23 2024 update, IMS) */
registerPage({
id: "menopause-adult",
title: "Menopause & Perimenopause",
subtitle: "Diagnose clinically over 45, offer HRT for symptoms after an informed discussion, always protect the uterus with a progestogen, use non-hormonal options when HRT is unsuitable, and investigate postmenopausal bleeding",
age: "Women 40+", specs: ["obg", "endo"],
keywords: ["menopause", "perimenopause", "HRT", "hormone replacement therapy", "hot flushes", "vasomotor symptoms", "premature ovarian insufficiency", "vaginal atrophy", "genitourinary syndrome", "osteoporosis", "conjugated oestrogen"],
related: ["osteoporosis-adult", "aub-adult", "contraception-adult", "depression-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Diagnose</h4><p>Over 45 with symptoms — no FSH needed.</p></div>
<div><h4>HRT</h4><p>${dr("conjugated_oestrogen", "Oestrogen")} + progestogen if uterus present.</p></div>
<div><h4>Non-hormonal</h4><p>${dr("venlafaxine")}, ${dr("gabapentin")}, CBT.</p></div>
<div><h4>Under 40</h4><p>Premature ovarian insufficiency — HRT until 51.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Conjugated oestrogen 0.625 mg and medroxyprogesterone are on the NEML; transdermal oestrogen and micronised progesterone are not. Average menopause is around 50; many women do not seek care — ask during NCD and cervical screening visits. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Definitions", html: `${tbl(["Term", "Meaning"], [["Menopause", "12 months after last period"], ["Perimenopause", "Irregular periods + symptoms"], ["POI", "Menopause under 40 (FSH raised twice, 4–6 weeks apart)"], ["Early menopause", "40–45"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Menopause", [F.s("Follicle depletion"), F.a, F.s("Oestrogen falls"), F.e("Hot flushes, sleep/mood change, vaginal atrophy, bone loss, CVD risk")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice (post-WHI)", "NICE 2024", "This guide"], [["Duration", "Shortest possible", "No arbitrary limit; review yearly", "NICE " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Hot flushes, night sweats, sleep disturbance, low mood, anxiety, brain fog, joint pain, vaginal dryness, urinary symptoms, reduced libido.</li></ul><h3>The typical patient</h3><p>A 51-year-old teacher in Thimphu has 10 hot flushes a day and poor sleep; last period 8 months ago; has a uterus; no contraindications. <b>Perimenopausal vasomotor symptoms</b>: conjugated oestrogen 0.625 mg daily + medroxyprogesterone 10 mg for 12–14 days each month; review at 3 months.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Thyroid disease", "TSH"], ["Pregnancy", "Test in perimenopause"], ["Depression", "Mood dominant"], ["Phaeochromocytoma, carcinoid", "Rare; episodic"]])}` },
{ id: "invest", title: "Investigations", html: `<p>None needed over 45; FSH under 45 with symptoms; BP, weight; breast and cervical screening up to date; bone density if risk.</p>` },
{ id: "staging", title: "HRT tool", html: `<div class="calc" data-calc="menohrt"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Lifestyle: exercise, weight, smoking cessation, limit alcohol/caffeine.</li><li>HRT: oestrogen + progestogen (cyclical if perimenopausal, continuous after 12 months); oestrogen alone after hysterectomy.</li><li>Vaginal oestrogen for genitourinary symptoms.</li><li>Non-hormonal: venlafaxine, gabapentin, CBT.</li><li>Contraception until 55 / after last period rules.</li><li>Bone health: calcium, vitamin D, exercise.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("conjugated_oestrogen"), "0.3–0.625 mg daily", "NEML"], [dr("dmpa", "Medroxyprogesterone"), "10 mg × 12–14 days/month or 2.5–5 mg daily", "Uterus present"], [dr("venlafaxine"), "37.5–75 mg", "Non-hormonal"], [dr("gabapentin"), "300 mg up to TDS", "Non-hormonal"]])}` },
{ id: "populations", title: "POI", html: `<p>Under 40: HRT or COC until 51 for bone and heart protection; refer for cause.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Bleeding on continuous HRT after 6 months", "Ultrasound ± endometrial biopsy"]])}` },
{ id: "complications", title: "Risks of HRT", html: `<p>Small increase in breast cancer (combined, duration-related), VTE (oral), stroke (oral, older); benefits: symptoms, bone, possibly heart if started under 60.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>3 months after starting, then yearly.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Menopausal symptoms", [F.d("Contraindication to HRT?"), F.a, F.b([["Yes", F.e("Non-hormonal options")], ["No", F.ok("HRT + progestogen if uterus")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Oestrogen alone with uterus", "Endometrial cancer", "Add progestogen"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Contraception after 50 — when can it stop?", "One year after the last period if over 50 (or at age 55).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">National Institute for Health and Care Excellence. Menopause: identification and management (NG23), updated 2024. <a href="https://www.nice.org.uk/guidance/ng23" target="_blank" rel="noopener">nice.org.uk</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["NEML HRT", "<span class='pass'>Checked</span>", "Conjugated oestrogen"]], "qc")}` }
]
});
