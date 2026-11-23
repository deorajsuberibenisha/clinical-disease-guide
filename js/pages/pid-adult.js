/* Pelvic inflammatory disease (CDC 2021, WHO 2021, Bhutan STG ch. 9) */
registerPage({
id: "pid-adult",
title: "Pelvic Inflammatory Disease (PID)",
subtitle: "Treat on clinical suspicion: lower abdominal pain with cervical motion, uterine or adnexal tenderness gets ceftriaxone, doxycycline and metronidazole for 14 days, and partners are treated",
age: "Sexually active women", specs: ["obg", "id"],
keywords: ["pelvic inflammatory disease", "PID", "salpingitis", "tubo-ovarian abscess", "cervical motion tenderness", "chlamydia", "gonorrhoea", "ceftriaxone doxycycline metronidazole", "infertility", "ectopic risk"],
related: ["sti-adult", "ectopic-preg", "appendicitis-adult", "uti-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">PID causes infertility, ectopic pregnancy and chronic pain. Because tests are imperfect, the threshold to treat is low.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Pelvic pain + cervical motion/uterine/adnexal tenderness.</p></div>
<div><h4>Exclude</h4><p>Pregnancy test (ectopic), appendicitis.</p></div>
<div><h4>Treat</h4><p>${dr("ceftriaxone")} + ${dr("doxycycline")} + ${dr("metronidazole")} 14 days.</p></div>
<div><h4>Partners</h4><p>Treat for gonorrhoea and chlamydia.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG chapter 9 (lower abdominal pain syndrome) follows WHO syndromic treatment: ceftriaxone + doxycycline + metronidazole. CDC 2021 uses ceftriaxone 500 mg IM. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Ascending infection of the upper genital tract by gonorrhoea, chlamydia, M. genitalium and vaginal anaerobes. Risk: young age, new/multiple partners, previous PID, recent IUD insertion (first 3 weeks).${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("PID", [F.s("Cervical infection ascends"), F.a, F.s("Endometritis, salpingitis, abscess"), F.e("Tubal scarring → infertility, ectopic")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG / WHO", "CDC 2021", "This guide"], [["Ceftriaxone", "250 mg IM", "500 mg IM", "500 mg where available " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Lower abdominal pain, abnormal discharge, deep dyspareunia, abnormal bleeding, fever.</li><li>Cervical motion, uterine or adnexal tenderness; mass suggests abscess.</li></ul><h3>The typical patient</h3><p>A 22-year-old in Phuentsholing has 4 days of lower abdominal pain and discharge; temperature 37.9 °C, cervical motion tenderness, negative pregnancy test. <b>This is PID</b>: ceftriaxone IM, doxycycline and metronidazole for 14 days, HIV/syphilis tests, partner treatment, review in 72 h.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Ectopic pregnancy", "Positive pregnancy test"], ["Appendicitis", "Right-sided, migratory pain, anorexia"], ["Ovarian torsion/cyst", "Sudden pain, mass on ultrasound"], ["UTI", "Urinary symptoms, dipstick"], ["Endometriosis", "Cyclical pain"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Pregnancy test, NAAT for gonorrhoea/chlamydia, wet mount, HIV, syphilis, FBC/CRP, ultrasound if mass or severe.</p>` },
{ id: "staging", title: "Treatment tool", html: `<div class="calc" data-calc="pidplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Outpatient: ceftriaxone IM once + doxycycline 100 mg BD × 14 days + metronidazole 500 mg BD × 14 days.</li><li>Admit if severe, abscess, pregnant, unable to take oral, no response in 72 h.</li><li>Partner treatment; abstain until completed; condoms.</li><li>IUD may stay if improving.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ceftriaxone"), "500 mg IM once (STG 250)", "Gonorrhoea"], [dr("doxycycline"), "100 mg BD × 14 days", "Chlamydia"], [dr("metronidazole"), "500 mg BD × 14 days", "Anaerobes"], [dr("azithromycin"), "1 g weekly × 2", "If doxycycline not possible"]])}` },
{ id: "populations", title: "Pregnancy and adolescents", html: `<p>Pregnancy: admit, no doxycycline. Adolescents: confidential care.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Not improving at 72 h", "Admit, ultrasound for abscess, IV antibiotics"]])}` },
{ id: "complications", title: "Complications", html: `<p>Tubo-ovarian abscess, infertility, ectopic pregnancy, chronic pelvic pain, Fitz-Hugh–Curtis syndrome.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review at 72 h and after treatment; retest for gonorrhoea/chlamydia at 3 months.</p>` },
{ id: "images", title: "Images", html: `<p>See the STI chapter.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Lower abdominal pain in a woman", [F.s("Pregnancy test"), F.a, F.d("Cervical motion/adnexal tenderness?"), F.a, F.b([["Yes", F.ok("Treat PID 14 days + partners")], ["No", F.s("Look for other causes")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Waiting for test results", "Tubal damage", "Treat empirically"], ["Not treating partner", "Reinfection", "Partner notification"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Outpatient regimen for PID?", "Ceftriaxone IM once + doxycycline and metronidazole for 14 days.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Workowski KA, Bachmann LH, Chan PA, et al. Sexually transmitted infections treatment guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187. <a href="https://doi.org/10.15585/mmwr.rr7004a1" target="_blank" rel="noopener">doi</a></li><li id="ref-2">World Health Organization. Guidelines for the management of symptomatic sexually transmitted infections. Geneva: WHO; 2021. <a href="https://www.who.int/publications/i/item/9789240024168" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
