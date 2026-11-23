/* Infertility: evaluation and first treatment (Bhutan infertility guidance, NICE CG156, WHO 2025) */
registerPage({
id: "infertility-adult",
title: "Infertility: Evaluation & First Treatment",
subtitle: "Evaluate both partners after 12 months (6 if the woman is 35+): semen analysis first, then ovulation and tubes; treat anovulation, prevent STIs and puerperal sepsis, and refer early when age or findings demand",
age: "Couples", specs: ["obg", "uro", "endo"],
keywords: ["infertility", "subfertility", "semen analysis", "ovulation", "HSG", "tubal factor", "clomiphene", "letrozole", "IUI", "IVF", "male infertility", "PCOS"],
related: ["pcos-adult", "pid-adult", "sti-adult", "fibroids-adult", "thyroid-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>When</h4><p>12 months trying; 6 months if 35+; sooner with known risk.</p></div>
<div><h4>Male</h4><p>Semen analysis first.</p></div>
<div><h4>Female</h4><p>Ovulation (mid-luteal progesterone), tubes (HSG day 7–9), TSH, prolactin.</p></div>
<div><h4>Treat</h4><p>${dr("clomiphene")}/${dr("letrozole")} for anovulation; IUI at JDWNRH/CRRH/ERRH.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan infertility guidance: basic evaluation by a GDMO then gynaecology referral; IUI is available at JDWNRH, CRRH and ERRH; IVF requires referral abroad. STIs and postpartum sepsis are leading preventable causes of tubal infertility. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Factor", "Share (approx.)", "Examples"], [["Male", "30%", "Low count/motility, varicocele, past orchitis, erectile dysfunction"], ["Ovulatory", "25%", "PCOS, thyroid, hyperprolactinaemia, low weight, POI"], ["Tubal/pelvic", "20%", "PID, TB, post-abortion/postpartum sepsis, endometriosis"], ["Uterine", "Under 10%", "Fibroids, Asherman's"], ["Unexplained", "25%", ""]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Conception requires", [F.s("Healthy sperm"), F.a, F.s("Ovulation"), F.a, F.s("Patent tubes"), F.e("Receptive uterus")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan clinics", "International", "This guide"], [["First-line ovulation induction", "Clomiphene", "Letrozole (PCOS)", "Either by availability " + LB.loc()]])}` },
{ id: "presentation", title: "History and examination", html: `<ul><li>Both: duration, frequency of intercourse, previous pregnancies, STIs, surgery, drugs, smoking, alcohol, BMI.</li><li>Woman: cycles, dysmenorrhoea, galactorrhoea, hirsutism, pelvic exam.</li><li>Man: testicular size, varicocele, sexual function.</li></ul><h3>The typical patient</h3><p>A couple in Phuentsholing, woman 32 with cycles every 45–60 days, trying 14 months. <b>Infertility with probable anovulation (PCOS)</b>: semen analysis, TSH/prolactin, HSG; then letrozole or clomiphene with monitoring; weight advice.</p>` },
{ id: "ddx", title: "Genital TB", html: `<p>Consider in women with tubal blockage, scanty periods, past TB — endometrial biopsy for Xpert/histology.</p>` },
{ id: "invest", title: "Investigations", html: `<p>Semen analysis; mid-luteal progesterone; TSH, prolactin; FSH/LH day 2–5 if irregular; HSG; pelvic ultrasound; rubella, HIV, HBV, syphilis; AMH where available.</p>` },
{ id: "staging", title: "Work-up tool", html: `<div class="calc" data-calc="infertplan"></div><div class="calc" data-calc="pcoscheck"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Lifestyle: BMI 19–30, stop smoking, limit alcohol, intercourse every 2–3 days, folic acid.</li><li>Anovulation: clomiphene 50–150 mg days 2–6 or letrozole 2.5–7.5 mg days 3–7 (max 6 cycles, ultrasound monitoring); metformin in PCOS.</li><li>Hyperprolactinaemia: bromocriptine/cabergoline (specialist); hypothyroidism: thyroxine.</li><li>Tubal: surgery or IVF (abroad).</li><li>Male factor: urology; IUI or IVF/ICSI.</li><li>Unexplained: IUI then IVF.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("clomiphene"), "50–150 mg days 2–6", "Max 6 cycles"], [dr("letrozole"), "2.5–7.5 mg days 3–7", "Not NEML"], [dr("metformin"), "500 mg BD–TDS", "PCOS"], [dr("folic_acid"), "400 µg daily", "All"], [dr("thyroxine"), "By TSH", "Hypothyroid"]])}` },
{ id: "populations", title: "Age 35+", html: `<p>Investigate after 6 months; refer early for assisted reproduction counselling.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Azoospermia", "Repeat, FSH, testosterone, urology referral"]])}` },
{ id: "complications", title: "Complications of treatment", html: `<p>Multiple pregnancy, ovarian hyperstimulation, emotional distress.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Monitor ovulation induction cycles; psychological support for both partners.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Couple not conceiving", [F.s("Semen analysis"), F.a, F.s("Ovulation + tubes + thyroid/prolactin"), F.a, F.ok("Treat factor; refer for IUI/IVF")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Investigating only the woman", "Missed male factor", "Semen analysis first"], ["Clomiphene without tubal check", "Wasted cycles", "HSG first"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "First investigation of an infertile couple?", "Semen analysis.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">National Institute for Health and Care Excellence. Fertility problems: assessment and treatment (CG156), updated 2017.</li><li id="ref-2">World Health Organization. Guideline for the prevention, diagnosis and treatment of infertility. Geneva: WHO; 2025.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Bhutan infertility guidance", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
