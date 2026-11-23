/* Polycystic ovary syndrome (International guideline 2023, Bhutan infertility guidance) */
registerPage({
id: "pcos-adult",
title: "Polycystic Ovary Syndrome (PCOS)",
subtitle: "Diagnose with Rotterdam criteria after excluding other causes, screen for diabetes and mood problems, and treat what matters to the woman — cycles, skin, weight or fertility",
age: "Adolescent girls & women", specs: ["obg", "endo"],
keywords: ["PCOS", "polycystic ovary syndrome", "Rotterdam criteria", "anovulation", "hirsutism", "acne", "infertility", "letrozole", "clomiphene", "metformin", "insulin resistance", "endometrial hyperplasia"],
related: ["aub-adult", "dm-adult", "lipids-adult", "contraception-adult", "ovarian-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Rotterdam</h4><p>2 of: irregular cycles, hyperandrogenism, polycystic ovaries.</p></div>
<div><h4>Screen</h4><p>Glucose/HbA1c, lipids, BP, mood.</p></div>
<div><h4>No pregnancy wish</h4><p>${dr("coc", "COC")} ± ${dr("metformin")}; lifestyle.</p></div>
<div><h4>Fertility</h4><p>${dr("letrozole")} first line; ${dr("clomiphene")} alternative.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan infertility clinics (JDWNRH, CRRH, ERRH) use clomiphene 50–150 mg with metformin for PCOS; letrozole is the 2023 international first line but is not on the NEML. Ultrasound and hormone tests are at referral hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>PCOS affects about 1 in 10 women; it is the commonest cause of anovulatory infertility. Linked to insulin resistance, type 2 diabetes, gestational diabetes, dyslipidaemia, sleep apnoea, depression and endometrial cancer.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("PCOS", [F.s("Insulin resistance + high LH"), F.a, F.s("Ovarian androgen excess"), F.e("Arrested follicles, anovulation, hirsutism")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan clinics", "International 2023", "This guide"], [["Ovulation induction", "Clomiphene + metformin", "Letrozole first line", "Letrozole if available, else clomiphene " + LB.loc()], ["Ultrasound in adolescents", "Used", "Not within 8 years of menarche", "International"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Irregular or absent periods, hirsutism, acne, scalp hair loss, weight gain, acanthosis nigricans, subfertility.</li></ul><h3>The typical patient</h3><p>A 27-year-old in Thimphu has 3–4 periods a year, acne and facial hair; BMI 29; ultrasound shows polycystic ovaries; TSH and prolactin normal. <b>PCOS</b>: weight loss support, COC for cycles and skin, OGTT and lipids; when trying to conceive, letrozole/clomiphene after semen analysis.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Hypothyroidism", "TSH"], ["Hyperprolactinaemia", "Prolactin, galactorrhoea"], ["Non-classic CAH", "17-OH progesterone"], ["Cushing's", "Striae, hypertension, proximal weakness"], ["Androgen-secreting tumour", "Rapid virilisation, very high testosterone"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Pregnancy test, TSH, prolactin, testosterone/SHBG, 17-OHP; ultrasound (adults); OGTT/HbA1c, lipids.</p>` },
{ id: "staging", title: "Rotterdam tool", html: `<div class="calc" data-calc="pcoscheck"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Lifestyle: 5–10% weight loss improves cycles and ovulation.</li><li>Cycles/endometrial protection: COC or cyclical progestogen (withdrawal bleed at least every 3 months).</li><li>Hirsutism/acne: COC; cosmetic measures; spironolactone with contraception (specialist).</li><li>Metabolic: metformin 500 mg titrated to 1–2 g/day.</li><li>Fertility: letrozole or clomiphene (max 6 cycles), metformin adjunct; gonadotrophins/IVF at specialist level.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("coc"), "1 daily", "Cycles, skin"], [dr("metformin"), "500 mg–1 g twice daily", "Metabolic"], [dr("letrozole"), "2.5–7.5 mg days 3–7", "Not NEML"], [dr("clomiphene"), "50–150 mg days 2–6", "Specialist"], [dr("dmpa", "Medroxyprogesterone"), "10 mg × 10–14 days", "Withdrawal bleed"], [dr("folic_acid"), "0.4–5 mg daily", "Pre-conception"]])}` },
{ id: "populations", title: "Pregnancy and adolescents", html: `<p>Higher GDM risk — early OGTT. Adolescents: diagnose cautiously; treat symptoms.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Amenorrhoea 1 year", "Pregnancy test, progestogen withdrawal, consider endometrial assessment"]])}` },
{ id: "complications", title: "Complications", html: `<p>Type 2 diabetes, GDM, endometrial hyperplasia/cancer, depression, sleep apnoea, cardiovascular risk.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Glucose every 1–3 years; weight, BP, mood yearly.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Irregular cycles + androgen signs", [F.s("Exclude pregnancy, thyroid, prolactin, CAH"), F.a, F.s("Rotterdam criteria"), F.a, F.ok("Treat by goal; screen metabolic")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Ultrasound alone for diagnosis", "Over-diagnosis", "Rotterdam + exclusions"], ["No endometrial protection", "Hyperplasia", "Bleed every 3 months"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "First-line ovulation induction in PCOS (2023 guideline)?", "Letrozole.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Teede HJ, Tay CT, Laven JJE, et al. Recommendations from the 2023 international evidence-based guideline for the assessment and management of polycystic ovary syndrome. J Clin Endocrinol Metab. 2023;108:2447-2469. <a href="https://doi.org/10.1210/clinem/dgad463" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
