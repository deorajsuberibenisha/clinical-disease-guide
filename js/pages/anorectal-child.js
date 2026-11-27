/* Anorectal malformations (imperforate anus) — neonates and children. Batch E-9, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §12.4.8 Anorectal anomalies; Levitt MA, Peña A. Anorectal malformations. Orphanet J Rare Dis 2007 (full text via
   Europe PMC PMC1971061 — classification, associated anomalies, newborn decision-making, colostomy, PSARP, dilatations, functional outcomes,
   bowel management); Merck Manual Professional 'Anal atresia' (Aug 2025); NEML 2025 text. Not read: Krickenbeck 2005 paper itself, de Blaauw
   2024 Nat Rev Dis Primers, ARM-Net consensus, StatPearls — marked. Hegar dilator size chart not in the review text — not given. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "anorectal-child",
title: "Anorectal malformations (imperforate anus) — neonates and children",
subtitle: "Look at every newborn's bottom: if there is no normal anus, pass a nasogastric tube, start IV fluids, check the urine for meconium, wait 16–24 hours before deciding on anoplasty or colostomy, and screen for VACTERL",
age: "Neonates and children", specs: ["neo", "nicu", "paeds", "surg", "uro"],
keywords: ["anorectal malformation", "ARM", "imperforate anus", "anal atresia", "rectoperineal fistula", "rectovestibular fistula", "rectourethral fistula", "rectobladder neck fistula", "cloaca", "common channel", "hydrocolpos", "PSARP", "posterior sagittal anorectoplasty", "anoplasty", "divided colostomy", "distal colostogram", "cross-table lateral", "sacral ratio", "tethered cord", "VACTERL", "anal dilatation", "bowel management"],
related: ["oesophageal-atresia-child", "hirschsprung-child", "abdominal-wall-child", "uti-child", "constipation-child", "down-child", "chd-child", "neosepsis-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Anorectal malformations range from a small, misplaced anal opening to a cloaca in which rectum, vagina and urethra share one channel. They affect about 1 in 5,000 babies (1 in 3,000–5,000) ${r(2)} ${r(3)}, and half or more have other anomalies ${r(3)}. The diagnosis should be made at the first newborn examination ${r(3)}; a missed case presents with distension and vomiting, and can perforate ${r(1)}.</p>
<div class="glance">
<div><h4>Look</h4><p>No anal opening or a tiny one; meconium on the perineum, scrotal raphe or vestibule; meconium in the urine; flat bottom with no gluteal fold or anal dimple (high defect) ${r(1)} ${r(2)}.</p></div>
<div><h4>Do</h4><p>Nasogastric tube, IV fluids and antibiotics, nil by mouth ${r(1)} ${r(2)}. Then <b>wait 16–24 hours</b> — meconium needs that long to appear through a fistula ${r(2)}.</p></div>
<div><h4>Decide</h4><p>Perineal fistula: anoplasty without colostomy. Urinary fistula, flat bottom, rectum more than 1 cm from skin on prone X-ray: divided colostomy first ${r(2)}.</p></div>
<div><h4>Screen</h4><p>Renal and pelvic ultrasound (genitourinary defects in about 50%), spine and sacrum, heart, oesophagus (pass a tube) ${r(2)} ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG says diagnosis is made by examining the anus (and passing a thermometer), and advises a nasogastric tube and referral to the nearest higher centre ${r(1)}. Refer to the paediatric surgeon at JDWNRH ${LB.loc()}. Do <b>not</b> attempt a 'cut-back' or perineal operation in a district hospital — a blind newborn perineal operation can damage the urethra and other pelvic structures ${r(2)}. A girl with a single perineal opening has a cloaca until proven otherwise and needs specialist care ${r(2)}.</p>`)}
` },
{ id: "overview", title: "The condition in brief", html: `${tbl(["Feature", "Detail"], [
["Frequency", "About 1 in 5,000 live births (Merck: 1 in 3,000–5,000); sibling risk up to 1 in 100 " + r(2) + r(3)],
["Male types", "Rectoperineal fistula; rectourethral fistula (bulbar or prostatic); rectobladder-neck fistula (about 10%); imperforate anus without fistula (about 5%, common in Down syndrome); rectal atresia (about 1%) " + r(2)],
["Female types", "Rectoperineal fistula; rectovestibular fistula (commonest); cloaca (common channel under or over 3 cm); true rectovaginal fistula is almost non-existent — most were missed cloacas " + r(2)],
["Associated", "Genitourinary defects about 50%; tethered cord about 25%; sacral and vertebral anomalies; VACTERL; hemisacrum always with a presacral mass " + r(2)],
["Associations (Merck)", "Half or more have other anomalies, e.g. VACTERL " + r(3)]
])}` },
{ id: "patho", title: "Why the 16–24 hour wait matters", html: `
<p>The lowest rectum is wrapped in a funnel of voluntary muscle that keeps it collapsed. Only when the abdomen distends (after 16–24 hours) is pressure high enough to push meconium through a perineal or urinary fistula. Deciding earlier means operating without knowing the anatomy ${r(2)}.</p>
${F.chart("Newborn with no normal anus", [F.s("NG tube, IV fluids, antibiotics"), F.a, F.s("Inspect perineum and urine repeatedly for 16–24 h"), F.a, F.d("Clinical clue found?"), F.a, F.b([["Perineal fistula", F.ok("Anoplasty (newborn) — no colostomy")], ["Urine meconium, flat bottom, vestibular fistula, cloaca", F.e("Colostomy first (specialist)")], ["No clue", F.s("Prone cross-table lateral X-ray")]])])}` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Levitt & Peña 2007", "Other sources", "This guide"], [
["Rectovestibular fistula in the newborn", "Colostomy is the safest option unless the surgeon is very experienced; failed newborn repairs are the commonest redo referral", "Merck 2025: several malformations can be repaired in one stage (2022 meta-analysis) " + r(3), "Colostomy unless an experienced paediatric colorectal surgeon repairs it " + r(2) + " " + LB.int()],
["Diagnosis by thermometer", "—", "STG: examine the anus and insert a thermometer " + r(1), "Inspection is the key; never force an instrument " + LB.int()],
["Colostomy type", "Divided descending colostomy (not loop or transverse)", "—", "Divided descending " + r(2)],
["Anal dilatations after PSARP", "Twice daily from 2 weeks, size up weekly to an age-based target", "Hirschsprung guidance (ERNICA) found routine dilatation not useful after pull-through — different operation", "Follow the operating surgeon " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Finding", "Meaning"], [
["Meconium at the perineum, 'bucket-handle' skin tag, anal membrane with meconium visible, black-ribbon midline raphe", "Low (perineal fistula) " + r(2)],
["Meconium or air in the urine (boys)", "Rectourinary fistula " + r(2)],
["Flat bottom: no midline gluteal fold, no anal dimple", "Poor muscles — high defect " + r(2)],
["Girl: normal urethra and vagina plus a third opening in the vestibule", "Rectovestibular fistula " + r(2)],
["Girl: one perineal opening, small genitalia, abdominal mass", "Cloaca; mass is often a distended vagina (hydrocolpos, 50% of cloacas) " + r(2)],
["Late diagnosis", "Severe abdominal distension, risk of perforation " + r(1)]
])}
<h3>The typical patient</h3>
<p>A baby boy at a district hospital has no anal opening on the first check. Pass a nasogastric tube, start IV fluids and antibiotics, keep nil by mouth and look at the perineum and a urine sample every few hours. At 20 hours there are flecks of meconium in the urine — a rectourinary fistula. He needs a divided descending colostomy at JDWNRH; the definitive posterior sagittal repair comes later after a distal colostogram ${r(2)}.</p>
<div class="calc" data-calc="armplan"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Anteriorly placed anus / anal stenosis", "Part of the same spectrum " + r(3)],
["Hirschsprung disease", "Normal anus, delayed meconium " + LB.exp()],
["Rectal atresia", "Anus looks normal but a thermometer stops 1–2 cm in " + r(2)],
["Cloacal exstrophy", "Open lower abdominal wall " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Notes"], [
["Urinalysis", "Meconium = urinary fistula " + r(2) + r(3)],
["Abdominal and pelvic ultrasound", "Genitourinary defects (about 50%); hydrocolpos in cloaca " + r(2)],
["Prone cross-table lateral X-ray with pelvis raised and a perineal marker (after 24 h)", "Rectal gas within 1 cm of the skin: treat as perineal fistula; more than 1 cm: colostomy " + r(2)],
["Spine and sacrum X-ray (lateral)", "Sacral ratio, hemisacrum, hemivertebrae " + r(2)],
["Spinal ultrasound (newborn to 3 months)", "Tethered cord " + r(2)],
["Echocardiogram, NG tube, limb X-rays", "VACTERL screen " + r(2) + r(3)],
["Distal colostogram (high-pressure, after colostomy)", "Exact fistula level before definitive repair " + r(2)]
])}` },
{ id: "staging", title: "Prognosis by type", html: `
${tbl(["Group", "Bowel control"], [
["Good prognosis: perineal fistula, vestibular fistula, rectal atresia, rectobulbar urethral fistula, imperforate anus without fistula", "Usually voluntary bowel movements; constipation is the main problem " + r(2)],
["Poor prognosis: rectobladder-neck fistula, long-channel cloaca, poor sacrum or flat bottom", "More often true incontinence — bowel management " + r(2)],
["All ARM", "About 75% have voluntary bowel movements; about 40% totally continent; about 25% incontinent and need bowel management " + r(2)],
["Cloaca and urine", "Intermittent catheterisation needed in 69% with a common channel over 3 cm vs 20% under 3 cm " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. First 24–48 hours (two questions)</h3>
<ol>
<li>Is there an associated anomaly that threatens life now (heart, oesophageal atresia, urinary obstruction)? ${r(2)}</li>
<li>Primary repair without colostomy, or colostomy first? Decide after 16–24 hours of observation ${r(2)}.</li>
</ol>
<ul>
<li>IV line for fluids and antibiotics; nasogastric tube to prevent vomiting and aspiration ${r(2)}; STG: nasogastric tube and refer ${r(1)}.</li>
<li>Cloaca: decide whether the vagina (hydrocolpos) needs draining and whether urinary diversion is needed — to prevent sepsis and acidosis ${r(2)}.</li>
</ul>
<h3>2. Colostomy</h3>
<p>Divided descending colostomy with separate stomas: diverts completely, protects the urinary tract, allows a distal colostogram, avoids megarectum. Avoid loop and transverse colostomies and stomas placed too distally ${r(2)}.</p>
<h3>3. Definitive repair</h3>
<ul>
<li>Posterior sagittal anorectoplasty (PSARP) — about 90% of boys need no abdominal approach; rectobladder-neck fistulas and about 30% of cloacas need laparotomy or laparoscopy ${r(2)}.</li>
<li>Cloaca with common channel over 3 cm: specialised centre only ${r(2)}.</li>
<li>Laparoscopically assisted repair is an option; long-term continence data still limited ${r(2)}.</li>
</ul>
<h3>4. After repair</h3>
<ul>
<li>Urinary catheter about 5–7 days after rectourethral fistula repair ${r(2)}.</li>
<li>Anal calibration at 2 weeks, then dilatations twice daily, increasing the dilator size weekly to the age-appropriate size; then close the colostomy ${r(2)}.</li>
<li>Expect nappy rash after colostomy closure — barrier creams ${r(2)}.</li>
<li>Treat constipation early and aggressively ${r(2)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("ampicillin", "Ampicillin")} + ${D("gentamicin", "gentamicin")} — NEML; IV antibiotics before surgery and when a urinary fistula is present ${r(2)} ${r(4)} ${LB.exp("ANTIBIOTIC CHOICE NOT NAMED IN SOURCE")}.</li>
<li>${D("lactulose", "Lactulose")} and other laxatives — constipation after repair ${r(2)} ${r(3)}.</li>
<li>${D("glycerin-suppository", "Glycerin suppository")} / enemas — part of bowel management ${r(2)}.</li>
<li>${D("loperamide", "Loperamide")} — slows transit in children with loose stools after resection of the distal bowel ${r(2)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Girls with one perineal opening", "Cloaca — specialist centre; check for hydrocolpos and urinary obstruction " + r(2)],
["Down syndrome", "Imperforate anus without fistula is common " + r(2)],
["Hemisacrum or abnormal sacrum", "Presacral mass; worse continence " + r(2)],
["Tethered cord", "Worse bowel and bladder function; neurosurgery review " + r(2)],
["Siblings", "Higher recurrence risk (up to 1 in 100) " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Boy with meconium in a midline raphe at 18 hours", "Perineal fistula — newborn anoplasty by a paediatric surgeon, no colostomy " + r(2)],
["Girl with stool from an opening in the vestibule", "Rectovestibular fistula — colostomy unless an experienced surgeon will repair; fistula may be dilated meanwhile " + r(2)],
["No clue at 24 hours", "Prone cross-table lateral X-ray: under 1 cm = perineal approach; over 1 cm = colostomy " + r(2)],
["Three-year-old after PSARP soiling daily", "Look for constipation and overflow first; contrast enema; bowel management if true incontinence " + r(2)],
["Single perineal opening and a lower abdominal mass", "Cloaca with hydrocolpos — urgent specialist drainage plan " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Missed diagnosis: distension, perforation ${r(1)}.</li>
<li>Urinary tract injury during blind newborn perineal surgery; wound dehiscence and infection without diversion ${r(2)}.</li>
<li>Hyperchloraemic acidosis and UTI from a rectourinary fistula with a loop colostomy ${r(2)}.</li>
<li>Anal stricture without dilatations ${r(2)}.</li>
<li>Constipation (the commonest problem), megarectum, overflow soiling; true faecal incontinence ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Lifelong attention to constipation: laxatives and diet at the first sign ${r(2)}.</li>
<li>Bowel pattern before toilet training predicts continence: 1–3 formed stools a day with pushing is a good sign; constant passage without feeling suggests bowel management will be needed ${r(2)}.</li>
<li>Bowel management for true incontinence: a daily enema or colonic irrigation adjusted over a week with daily X-rays, keeping the child clean for 24 hours ${r(2)}.</li>
<li>Urology follow-up, especially after cloaca ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("No normal anus at the newborn check", [F.s("NG tube, IV fluids, antibiotics; VACTERL screen (renal US, echo, spine)"), F.a, F.s("Observe perineum and urine for 16–24 hours"), F.a, F.d("Boy or girl — what is found?"), F.a, F.b([["Perineal fistula", F.ok("Newborn anoplasty")], ["Urinary meconium / flat bottom / vestibular / cloaca", F.e("Divided colostomy; later PSARP")], ["Nothing", F.s("Prone lateral X-ray: ≤ 1 cm anoplasty, > 1 cm colostomy")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Not examining the anus at birth", "Diagnosed only when the baby is distended", "Inspect every newborn " + r(1) + r(3)],
["Deciding in the first hours", "Meconium has not had time to appear", "Wait 16–24 hours " + r(2)],
["Calling it a 'rectovaginal fistula'", "Usually a missed cloaca", "Count the perineal openings " + r(2)],
["Loop or transverse colostomy", "Incomplete diversion, UTI, megarectum", "Divided descending colostomy " + r(2)],
["Calling soiling 'incontinence'", "Often overflow from constipation", "Treat constipation first " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Why wait 16–24 hours before deciding?", "Meconium needs abdominal pressure to appear through a perineal or urinary fistula.")}
${qa("Intern/MO", "What does meconium in the urine of a boy mean?", "A rectourinary fistula — colostomy first.")}
${qa("Specialist", "Commonest anorectal malformation in girls?", "Rectovestibular fistula.")}
${qa("Specialist", "What proportion of children with ARM have voluntary bowel movements?", "About 75%; about 40% are totally continent.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.4.8 Anorectal anomalies.</li>
<li id="ref-2">Levitt MA, Peña A. Anorectal malformations. Orphanet J Rare Dis. 2007;2:33. doi:10.1186/1750-1172-2-33.</li>
<li id="ref-3">Belkind-Gerson J. Anal atresia (imperforate anus). Merck Manual Professional Edition; reviewed Aug 2025.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §12.4.8", "<span class='pass'>Checked</span>", "Read"],
["Levitt & Peña 2007", "<span class='pass'>Checked</span>", "Full text read (Europe PMC)"],
["Merck Manual 2025", "<span class='pass'>Checked</span>", "Read"],
["Krickenbeck paper, 2024 Nat Rev Dis Primers", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Decision rules from Levitt & Peña"],
["Images", "<span class='pass'>None</span>", "No suitable licensed image"]
], "qc")}` }
]
});
})();
