/* Cancer warning signs and early referral — adults. NEW disease/topic (batch N-6, 28 Nov 2026).
   Sources read directly: NICE NG12 Suspected cancer: recognition and referral (site-organised recommendations, read 28 Nov 2026 — 1.1 lung (≥40
   unexplained haemoptysis; CXR for ≥40 with 2+ symptoms or ever-smoker with 1+), 1.2.1/1.2.7 oesophageal/stomach (dysphagia, or ≥55 with weight
   loss + upper abdominal pain/reflux/dyspepsia), 1.2.4–1.2.5 pancreas (≥40 jaundice; ≥60 weight loss + GI symptoms or new diabetes → CT), 1.2.11
   liver (mass → ultrasound), 1.3.1 colorectal FIT triggers, 1.4.1 breast (≥30 unexplained lump; ≥50 one-nipple changes), 1.5 gynaecological
   (ascites/pelvic mass; persistent bloating, early satiety, pelvic pain, urinary urgency >12 times/month → CA125 ≥40 with age-specific thresholds
   or ultrasound ≤39; ≥55 post-menopausal bleeding; cervix appearance), 1.6 urological (malignant-feeling prostate; PSA with LUTS/ED/haematuria;
   ≥45 visible haematuria; testicular change), 1.7.1 melanoma 7-point checklist ≥3, 1.8 head and neck (≥45 persistent hoarseness or neck lump;
   mouth ulcer >3 weeks; thyroid lump), 1.9 brain, 1.10 haematological, 1.11 sarcoma, 1.13 non-specific (≥60 weight loss >5% in 6 months;
   unexplained appetite loss; DVT)); Bhutan Cancer incidence and mortality 2019–2022 (PBCR: males — stomach, oesophagus, liver, lung, colon;
   females — cervix, stomach, breast, lung, ovary; overall top 5 stomach, cervix, head and neck, colorectal, lung; stomach and cervical rates highest
   compared with other registries). Local service notes marked. Covers remaining-list item 'Cancer warning signs and early referral'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "cancer-warning-adult",
title: "Cancer Warning Signs & Early Referral — Adults",
subtitle: "Bhutan's commonest cancers (stomach, cervix, oesophagus, liver, head and neck, bowel, lung, breast) are curable mainly when caught early: know the symptom-and-age triggers, test or refer on the same visit, and safety-net everyone else",
age: "Adult", specs: ["onc", "medicine", "ph"],
keywords: ["cancer warning signs", "red flag symptoms", "suspected cancer referral", "NICE NG12", "unexplained weight loss", "dysphagia", "haemoptysis", "post-menopausal bleeding", "breast lump", "visible haematuria", "mouth ulcer 3 weeks", "hoarseness", "rectal bleeding", "safety netting", "early detection cancer Bhutan"],
related: ["gastric-cancer-adult", "oesophageal-cancer-adult", "hcc-adult", "cervical-cancer-adult", "lung-cancer-adult", "colorectal-cancer-adult", "breast-cancer-adult", "ovarian-adult", "leukaemia-lymphoma", "myeloma-adult", "brain-tumour-adult", "weightloss-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In Bhutan the leading cancers are <b>stomach, cervix, head and neck, colorectal and lung</b>; in men also oesophagus and liver, in women breast and ovary. Stomach and cervical cancer rates are among the highest of registries compared ${r(2)}.</p>
<div class="glance">
<div><h4>Swallowing / stomach</h4><p>Dysphagia at any age, or ≥55 with weight loss + dyspepsia/reflux/upper abdominal pain → endoscopy ${r(1)}.</p></div>
<div><h4>Bleeding</h4><p>Haemoptysis ≥40; visible haematuria ≥45; post-menopausal bleeding ≥55; rectal bleeding with other symptoms ${r(1)}.</p></div>
<div><h4>Lumps and sores</h4><p>Breast lump ≥30; neck or thyroid lump; mouth ulcer &gt;3 weeks; testicular change; changing mole ${r(1)}.</p></div>
<div><h4>Non-specific</h4><p>≥60 with &gt;5% weight loss in 6 months; unexplained appetite loss; new DVT → look for the cancer ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Endoscopy, CT and biopsy are available at JDWNRH and regional referral hospitals; Pap/VIA and HPV screening run in all districts ${LB.loc()}. The NICE triggers are UK-based; they are used here as a minimum — in Bhutan, with high stomach and oesophageal cancer rates, many clinicians endoscope earlier ${LB.loc()}. Use same-day referral notes naming "suspected cancer".</p>`)}
` },

{ id: "overview", title: "Triggers by site (NICE NG12)", html: `
${tbl(["Site", "Trigger → action"], [
["Oesophagus / stomach", "Dysphagia; or ≥55 + weight loss + upper abdominal pain, reflux or dyspepsia → suspected-cancer referral " + r(1) + " " + P("gastric-cancer-adult", "Gastric") + " · " + P("oesophageal-cancer-adult", "Oesophageal")],
["Liver", "Upper abdominal mass consistent with enlarged liver → urgent ultrasound " + r(1) + " " + P("hcc-adult", "HCC")],
["Pancreas", "≥40 with jaundice → refer; ≥60 with weight loss + GI symptoms or new diabetes → CT " + r(1)],
["Colorectal", "FIT for: abdominal mass, change in bowel habit, iron-deficiency anaemia, ≥40 weight loss + pain, ≥50 rectal bleeding/pain/weight loss " + r(1) + " " + P("colorectal-cancer-adult", "Colorectal")],
["Lung", "≥40 unexplained haemoptysis → refer; CXR if ≥40 with 2 symptoms (or smoker with 1): cough, fatigue, breathlessness, chest pain, weight or appetite loss " + r(1) + " " + P("lung-cancer-adult", "Lung")],
["Breast", "≥30 unexplained lump; ≥50 one-nipple discharge/retraction " + r(1) + " " + P("breast-cancer-adult", "Breast")],
["Cervix", "Cervix looks malignant on examination → refer " + r(1) + " " + P("cervical-cancer-adult", "Cervical")],
["Endometrium", "≥55 post-menopausal bleeding → refer " + r(1)],
["Ovary", "Persistent bloating, early satiety, pelvic pain, urinary urgency (&gt;12 times/month): CA125 if ≥40 (age-specific thresholds) or ultrasound if ≤39; ascites/pelvic mass → refer " + r(1) + " " + P("ovarian-adult", "Ovarian")],
["Bladder / kidney", "≥45 unexplained visible haematuria (no UTI or persisting after treatment) " + r(1)],
["Prostate", "Hard/irregular prostate → refer; PSA + DRE with LUTS, erectile dysfunction or visible haematuria " + r(1)],
["Testis", "Painless enlargement or change in shape/texture " + r(1)],
["Head and neck", "Mouth ulcer &gt;3 weeks; persistent neck lump; ≥45 persistent hoarseness; thyroid lump " + r(1)],
["Skin", "Pigmented lesion with weighted 7-point score ≥3 " + r(1)],
["Blood / brain / bone", P("leukaemia-lymphoma", "Leukaemia") + " · " + P("myeloma-adult", "Myeloma") + " · " + P("brain-tumour-adult", "Brain tumours") + " · X-ray suggesting bone sarcoma " + r(1)]
])}
` },

{ id: "patho", title: "Why early matters", html: `${F.chart("Delay", [F.s("Symptom ignored or treated without a diagnosis (e.g. months of antacids)"), F.a, F.s("Stage advances"), F.a, F.e("Cure → palliation")])} <p>Stomach cancer overall survival in Bhutan falls sharply with time after diagnosis, reflecting late presentation ${r(2)}.</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG12 (UK)", "Bhutan context", "This guide"], [
["Endoscopy age threshold", "≥55 with weight loss + dyspepsia", "High stomach/oesophageal cancer rates; H. pylori common", "Lower threshold for alarm features at any age " + LB.loc()],
["Colorectal triage", "FIT", "FIT not widely available", "Refer on symptoms; FIT where available " + r(1) + " " + LB.loc()],
["Cervical cancer", "Refer on appearance", "Screening programme (VIA/HPV)", "Screen and refer " + P("cervical-cancer-adult", "Cervical")]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Persistent symptoms that are <b>unexplained</b>, <b>new</b>, or <b>not responding</b> to usual treatment ${r(1)}.</li>
<li>Combinations (e.g. weight loss + dyspepsia) raise risk more than single symptoms ${r(1)}.</li>
<li>Repeated visits for the same complaint are themselves a warning sign ${LB.exp("STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 58-year-old man from Chukha has taken antacids for 4 months for "gastritis"; he has lost 6 kg and food now sticks. <b>Dysphagia + age + weight loss</b>: same-week endoscopy with biopsy — not another antacid course ${r(1)} ${P("oesophageal-cancer-adult", "Oesophageal cancer")}.</p>
` },

{ id: "ddx", title: "Common benign mimics", html: `
${tbl(["Symptom", "Benign causes to consider (but not assume)"], [
["Weight loss", "TB, diabetes, thyroid, depression, HIV " + P("weightloss-adult", "Weight loss")],
["Haemoptysis", "TB, bronchiectasis " + P("tb-adult", "TB")],
["Dyspepsia", "H. pylori, peptic ulcer " + P("gerd-adult", "GERD")],
["Neck lump", "TB lymphadenitis " + P("lymphnode-adult", "Lymphadenopathy")],
["Post-menopausal bleeding", "Atrophy, HRT " + P("aub-adult", "AUB")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Use the site-specific test in the trigger table: endoscopy, CXR, ultrasound, FIT, CA125, PSA, biopsy ${r(1)}.</li>
<li>FBC, liver tests, calcium, HbA1c (new diabetes with weight loss — pancreas) ${r(1)}.</li>
<li>Do not let a negative first test end the story if symptoms continue — safety-net ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Cancer warning-sign helper", html: `<div class="calc" data-calc="cancerflag"></div>` },

{ id: "manage", title: "What to do", html: `
<ul>
<li>Refer or test <b>at the same visit</b>; write "suspected cancer" and the trigger on the referral ${r(1)} ${LB.loc()}.</li>
<li>Explain honestly why you are referring; give a date and contact ${LB.exp("STANDARD")}.</li>
<li><b>Safety-net</b> everyone not meeting criteria: return if symptoms persist, change or new ones appear ${r(1)}.</li>
<li>Encourage screening: cervical (VIA/HPV), breast awareness, stop tobacco/doma and alcohol, H. pylori treatment ${LB.loc()}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `<p>Not a treatment topic. Avoid masking: do not give repeated PPI/antacid courses to patients with alarm features without endoscopy ${LB.exp("STANDARD")}.</p>` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children:</b> parents' persistent concern is itself a reason to refer; see ${P("leukaemia-lymphoma", "Leukaemia")} and ${P("brain-tumour-adult", "Brain tumours")} ${r(1)}.</li><li><b>Pregnancy:</b> breast lumps and bleeding still need assessment ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Haemoptysis in a 45-year-old, sputum AFB negative", "CXR ± CT — lung cancer as well as TB " + r(1)],
["Young woman, breast lump 'probably fibroadenoma'", "Under 30: non-urgent assessment; ≥30: suspected-cancer referral " + r(1)],
["Mouth ulcer in a doma chewer for 4 weeks", "Oral cancer referral " + r(1)],
["Patient cannot travel to JDWNRH", "Arrange via health assistant/referral system; follow up the result " + LB.loc()]
])}
` },

{ id: "complications", title: "Consequences of delay", html: `<p>Late stage at diagnosis, fewer curative options, higher cost and lower survival ${r(2)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Track every referral until a result is known ${LB.exp("STANDARD")}.</li><li>Review patients with persistent symptoms even after a normal test ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Unexplained persistent symptom", [F.d("Matches an age + symptom trigger?"), F.a, F.b([["Yes", F.e("Test/refer same visit; 'suspected cancer'")], ["No", F.s("Treat likely cause; safety-net; review")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Months of antacids with weight loss", "Stomach/oesophageal cancer missed", "Endoscopy for alarm features " + r(1)],
["Haematuria treated as UTI repeatedly", "Bladder/kidney cancer missed", "≥45 visible haematuria → refer " + r(1)],
["Post-menopausal bleeding ignored", "Endometrial cancer missed", "≥55 → refer " + r(1)],
["No safety-net", "Lost to follow-up", "Clear return advice " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which symptom alone, at any age, triggers referral for oesophago-gastric cancer?", "Dysphagia.")}
${qa("Intern/MO", "Age threshold for visible haematuria (bladder/kidney cancer)?", "45 and over, unexplained or persisting after UTI treatment.")}
${qa("Registrar", "Which non-specific symptom in people ≥60 needs urgent investigation?", "Unexplained weight loss >5% within 6 months.")}
${qa("Specialist", "Top five cancers in Bhutan (PBCR 2019–22, sites combined)?", "Stomach, cervix, head and neck, colorectal and lung.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12; updated 2026). <a href="https://www.nice.org.uk/guidance/ng12" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Cancer incidence and mortality in Bhutan 2019–2022 (Population-Based Cancer Registry).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG12 site recommendations", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Bhutan PBCR 2019–22", "<span class='pass'>Read</span>", "Leading sites"], ["Local service notes", "<span class='unv'>Local practice</span>", "Marked"]], "qc")}` }
]
});
})();
