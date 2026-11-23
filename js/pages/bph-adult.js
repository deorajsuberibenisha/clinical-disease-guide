/* BPH and urinary retention */
registerPage({
id: "bph-adult",
title: "Benign Prostatic Hyperplasia & Urinary Retention — Men",
subtitle: "Score the symptoms, exclude cancer, infection and retention, start tamsulosin for bothersome symptoms with finasteride for large glands, and catheterise and refer acute retention",
age: "Adult men", specs: ["uro", "medicine"],
keywords: ["BPH", "benign prostatic hyperplasia", "prostate", "LUTS", "lower urinary tract symptoms", "urinary retention", "catheter", "IPSS", "tamsulosin", "finasteride", "PSA", "nocturia"],
related: ["stones-adult", "uti-adult", "ckd-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Most older men have some urinary symptoms. Treat when they bother the man, and watch for the complications: retention, infection, stones and kidney damage.</p>
<div class="glance">
<div><h4>Assess</h4><p>IPSS score, DRE, urine dipstick, creatinine, post-void residual (ultrasound).</p></div>
<div><h4>Treat</h4><p>Lifestyle; ${dr("tamsulosin")} 0.4 mg daily; add ${dr("finasteride")} 5 mg for large prostates.</p></div>
<div><h4>Acute retention</h4><p>Catheterise, then tamsulosin and trial without catheter; refer (STG).</p></div>
<div><h4>Refer</h4><p>Residual over 250 mL (STG), retention, haematuria, raised creatinine, hard nodular prostate.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §6.8: avoid fluids before bedtime; catheterise and refer acute retention; refer if post-void residual over 250 mL; continue tamsulosin and finasteride at night if prescribed by a surgeon. Both drugs are on the NEML (NRH/RRH/DH). ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Who gets it", html: `<p>Benign enlargement of the transition zone of the prostate with age; symptoms in about a third of men over 60 and half over 80.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Outflow obstruction", [F.s("Prostate growth + smooth-muscle tone narrow the urethra"), F.a, F.s("Bladder works harder → frequency, urgency, weak stream"), F.a, F.e("Retention, infection, stones, back-pressure kidney damage"), F.a, F.ok("Alpha-blockers relax; 5-ARIs shrink; surgery removes obstruction")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "EAU/AUA", "This guide"], [["Starting drugs", "Continue if prescribed by surgeon", "Primary care may start alpha-blocker for bothersome LUTS", "Start tamsulosin in primary care after basic checks " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Storage: frequency, urgency, nocturia. Voiding: hesitancy, weak or intermittent stream, straining, dribbling, incomplete emptying.</li><li>DRE: smooth, enlarged, rubbery (hard nodules suggest cancer).</li></ul>${box("red", "Red flags", `<ul><li>Painful acute retention or painless chronic retention with overflow</li><li>Visible haematuria, hard irregular prostate</li><li>Raised creatinine, recurrent UTI, bladder stones</li></ul>`)}
<h3>The typical patient</h3><p>A 68-year-old man from Paro gets up 3 times a night, has a weak stream and strains; IPSS 18, smooth enlarged prostate, urine clear, creatinine normal, residual 90 mL. <b>This is moderate BPH-related LUTS</b>: tamsulosin 0.4 mg daily, less evening fluid and caffeine; add finasteride if the prostate is large; review in 4–6 weeks.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Prostate cancer", "Hard nodule, high PSA"], ["Urethral stricture", "Previous urethritis or catheter, younger, very thin stream"], ["UTI / prostatitis", "Dysuria, fever"], ["Diabetes, heart failure, diuretics", "Polyuria, nocturia"], ["Neurogenic bladder", "Diabetes, spinal disease"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Urine dipstick, creatinine, ultrasound for prostate volume and post-void residual (STG), PSA after counselling if it would change management, frequency-volume chart for nocturia.</p>` },
{ id: "staging", title: "IPSS score", html: `<div class="calc" data-calc="ipss"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Lifestyle: less fluid in the evening and before travel (STG), cut caffeine and alcohol, double voiding, bladder training.</li><li>${dr("tamsulosin")} 0.4 mg once daily (effect within days).</li><li>${dr("finasteride")} 5 mg daily added for prostate over about 40 mL (benefit after 6 months).</li><li><b>Acute retention:</b> urethral catheter (suprapubic if impossible, by trained staff); start tamsulosin; trial without catheter after 2–3 days; refer.</li><li><b>Chronic retention</b> with high residual or raised creatinine: catheter, watch for post-obstructive diuresis, refer.</li><li>Surgery (TURP) for refractory symptoms, recurrent retention, stones, renal impairment.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("tamsulosin"), "0.4 mg daily", "Postural dizziness"], [dr("finasteride"), "5 mg daily", "Halves PSA"]])}` },
{ id: "populations", title: "Older men", html: `<p>Avoid anticholinergics and decongestants (precipitate retention); review medicines.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Cannot pass a catheter", "Do not force; suprapubic puncture by trained staff; refer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Acute retention, UTI, bladder stones, haematuria, obstructive uropathy and CKD.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review at 4–6 weeks, then yearly.</p>${box("red", "Come back at once if", `<ul><li>Unable to pass urine</li><li>Blood in urine, fever</li></ul>`)}` },
{ id: "images", title: "Images", html: `<p>No routine images; ultrasound measures prostate size and residual urine.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Male LUTS", [F.s("IPSS, DRE, urine, creatinine, residual"), F.a, F.d("Retention or red flags?"), F.a, F.b([["Yes", F.e("Catheter / refer")], ["No", F.s("Lifestyle ± tamsulosin ± finasteride")]])])}` },
{ id: "pearls", title: "Pearls and mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing chronic retention", "Kidney failure", "Measure residual, creatinine"], ["Forcing a catheter", "False passage", "Refer"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "STG residual volume for referral?", "Over 250 mL.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Lerner LB, McVary KT, Barry MJ et al. Management of lower urinary tract symptoms attributed to benign prostatic hyperplasia: AUA guideline part I. <i>J Urol</i> 2021;206:806–817. <a href="https://doi.org/10.1097/JU.0000000000002183" target="_blank" rel="noopener">doi:10.1097/JU.0000000000002183</a></li><li id="ref-2">European Association of Urology. Guidelines on management of non-neurogenic male LUTS, 2024. <a href="https://uroweb.org/guidelines" target="_blank" rel="noopener">uroweb.org</a></li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §6.8.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Guidance", "<span class='pass'>Checked</span>", "AUA 2021, EAU 2024"]], "qc")}` }
]
});
