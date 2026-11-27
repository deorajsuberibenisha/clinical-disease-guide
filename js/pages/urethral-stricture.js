/* Urethral stricture — adults (mainly men). Batch E-15, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §6.5 Urethral stricture (causes incl. STI and catheterisation; poor stream improving on straining, recurrent UTI,
   spraying, dysuria; ultrasound KUB with post-void residual; STI screen; asymptomatic → follow up; complications retention, stones, UTI,
   hydronephrosis; refer to surgeon) — filtered text; Merck Manual Professional 'Urethral stricture' (causes, symptoms, retrograde urethrography or
   cystoscopy, dilation/urethrotomy, self-catheterisation, urethroplasty with buccal graft). Not read: AUA urethral stricture guideline, EAU 2023 —
   marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "urethral-stricture",
title: "Urethral stricture — adults",
subtitle: "A weak or split urine stream in a younger man, often after urethritis, a fall astride, or a catheter: confirm with urethrography, do not force a catheter, relieve retention suprapubically if needed, and refer to a surgeon",
age: "Adults", specs: ["uro", "surg", "medicine"],
keywords: ["urethral stricture", "urethral narrowing", "weak urine stream", "spraying urine", "split stream", "difficult catheterisation", "straddle injury", "gonorrhoea stricture", "retrograde urethrogram", "urethrotomy", "urethral dilatation", "urethroplasty", "suprapubic catheter", "urinary retention", "lichen sclerosus"],
related: ["bph-adult", "uti-adult", "sti-adult", "stones-adult", "aki-adult", "trauma-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>What</h4><p>Scarring and narrowing of the anterior urethra from trauma (commonest — straddle injury, catheter or scope), STI (gonorrhoea), lichen sclerosus, or unknown cause ${r(1)} ${r(2)}.</p></div>
<div><h4>Suspect</h4><p>Poor stream that improves on straining, double or spraying stream, hesitancy, incomplete emptying, recurrent UTI — especially a man under 60 ${r(1)} ${r(2)}.</p></div>
<div><h4>Confirm</h4><p>Retrograde urethrography or cystoscopy; ultrasound with post-void residual; screen for STI ${r(1)} ${r(2)}.</p></div>
<div><h4>Do not</h4><p>Force a urethral catheter — if retention and a catheter will not pass, suprapubic drainage and refer ${r(2)} ${LB.exp("SUPRAPUBIC ADVICE COMMON PRACTICE")}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: asymptomatic strictures can be followed clinically; refer symptomatic patients to a surgeon for evaluation and management; complications include retention, bladder stones, recurrent UTI and hydronephrosis ${r(1)}. Treat STIs promptly to prevent strictures ${P("sti-adult", "STI")} ${LB.int()}.</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Cause", "Note"], [
["Trauma", "Most common — straddle injury, iatrogenic (catheter, endoscopy) " + r(2)],
["Infection", "Gonorrhoea, chronic urethritis " + r(1) + r(2)],
["Lichen sclerosus", "Skin disease of the glans and meatus " + r(2)],
["Malignancy", "Rare urethral cancer " + r(2)],
["Idiopathic", "Many cases " + r(2)]
])}` },
{ id: "patho", title: "How it causes problems", html: `${F.chart("Stricture", [F.s("Injury to urethral lining/spongy tissue"), F.a, F.s("Scar contracts → narrow lumen"), F.a, F.s("High-pressure voiding, residual urine"), F.a, F.e("Retention, UTI, prostatitis, stones, diverticulum/abscess, hydronephrosis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Investigation", "Ultrasound KUB + post-void residual; STI screen", "Retrograde urethrography or cystoscopy to confirm", "Both " + r(1) + r(2)],
["Repeated dilatation", "—", "Avoid repeated dilatation/urethrotomy for long, recurrent or complex strictures — urethroplasty", "Surgeon's decision " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `${tbl(["Symptom/sign", "Detail"], [
["Voiding", "Poor stream improving on straining, hesitancy, double/spraying stream, incomplete emptying, dribbling " + r(1) + r(2)],
["Infection", "Recurrent UTI, prostatitis, dysuria " + r(1) + r(2)],
["Complications", "Acute retention, palpable bladder; periurethral abscess, fistula " + r(2)],
["Clue", "Difficult catheterisation " + r(2)]
])}` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["BPH", "Older man, enlarged prostate " + P("bph-adult", "BPH")],
["Neurogenic bladder", "Diabetes, spinal disease " + LB.exp()],
["Meatal stenosis", "Narrow opening visible " + LB.exp()],
["Bladder stone", "Interrupted stream, haematuria " + P("stones-adult", "stones")]
])}` },
{ id: "invest", title: "Investigations", html: `<ul><li>Urine routine and culture ${LB.exp()}.</li><li>Ultrasound KUB with post-void residual (hydronephrosis, stones) ${r(1)}.</li><li>STI screen ${r(1)}.</li><li>Retrograde urethrography or cystoscopy (location and length) ${r(2)}.</li><li>Renal function if retention or hydronephrosis ${LB.exp()}.</li></ul>` },
{ id: "staging", title: "Treatment choice", html: `${tbl(["Stricture", "Option"], [
["Short, first-time", "Dilatation or internal urethrotomy " + r(2)],
["Long, recurrent, complex", "Avoid repeat dilatation; urethroplasty (often buccal mucosa graft) " + r(2)],
["Unfit or awaiting surgery", "Self-catheterisation " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<ul>
<li>Asymptomatic: clinical follow-up ${r(1)}.</li>
<li>Symptomatic: refer to surgeon; dilatation, urethrotomy, self-catheterisation or urethroplasty as above ${r(1)} ${r(2)}.</li>
<li>Acute retention: one gentle attempt with a small catheter; if it fails, suprapubic catheter by trained staff and urgent surgical referral ${LB.exp("NOT IN SOURCES READ")}.</li>
<li>Treat UTI and STI ${r(1)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<p>Antibiotics for UTI per culture — ${P("uti-adult", "UTI page")}; STI treatment — ${P("sti-adult", "STI page")} ${LB.int()}.</p>` },
{ id: "populations", title: "Special situations", html: `<p>Men after pelvic fracture or straddle injury; men with past gonorrhoea; long-term catheter users ${r(2)}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["35-year-old with weak spraying stream, past urethral discharge", "STI screen, ultrasound PVR, urethrography; refer " + r(1) + r(2)],
["Retention; catheter will not pass", "Stop; suprapubic drainage; urgent surgeon " + LB.exp()]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Retention, bladder stones, recurrent UTI, hydronephrosis ${r(1)}.</li><li>Diverticulum, abscess, fistula ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Strictures often recur after dilatation — follow symptoms and flow ${r(2)} ${LB.exp()}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Weak stream in a younger man", [F.s("History: trauma, STI, catheter"), F.a, F.s("Urine, US with PVR, STI screen"), F.a, F.s("Urethrography/cystoscopy"), F.a, F.d("Retention?"), F.a, F.b([["Yes, catheter fails", F.e("Suprapubic + urgent surgeon")], ["No", F.ok("Surgical referral for dilatation/urethroplasty")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Forcing a catheter", "False passage, bleeding", "Stop and refer " + LB.exp()],
["Assuming BPH in a 35-year-old", "Missed stricture", "Think stricture under 60 " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Commonest cause of urethral stricture?", "Trauma (straddle injury or instrumentation).")}${qa("Specialist", "Confirmatory test?", "Retrograde urethrography or cystoscopy.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §6.5 Urethral stricture.</li>
<li id="ref-2">Merck Manual Professional Edition. Urethral stricture; accessed Nov 2026.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §6.5", "<span class='pass'>Checked</span>", "Read"],
["Merck", "<span class='pass'>Checked</span>", "Read"],
["AUA / EAU guidelines", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>None</span>", "—"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
