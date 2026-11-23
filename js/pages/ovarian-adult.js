/* Ovarian cysts and ovarian torsion (RCOG GTG 62, IOTA, RMI) */
registerPage({
id: "ovarian-adult",
title: "Ovarian Cysts & Ovarian Torsion",
subtitle: "Most cysts in young women are functional and resolve; sudden severe one-sided pain with vomiting is torsion until proven otherwise — operate early to save the ovary; postmenopausal masses need risk scoring",
age: "Girls & women", specs: ["obg", "emerg", "surg"],
keywords: ["ovarian cyst", "ovarian torsion", "adnexal torsion", "functional cyst", "corpus luteum", "dermoid", "endometrioma", "ruptured cyst", "RMI", "CA-125", "IOTA", "ovarian cancer"],
related: ["ectopic-preg", "appendicitis-adult", "pid-adult", "pcos-adult", "acute-abdomen-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Torsion</h4><p>Sudden pain + vomiting + adnexal mass → laparoscopy, untwist, preserve ovary.</p></div>
<div><h4>Simple cyst</h4><p>Under 5 cm premenopausal: no follow-up needed; 5–7 cm: yearly scan.</p></div>
<div><h4>Complex/postmenopausal</h4><p>RMI (U × M × CA-125).</p></div>
<div><h4>Always</h4><p>Pregnancy test (ectopic).</p></div>
</div>
${box("bt", "Bhutan note", `<p>Ultrasound at district hospitals; laparoscopy at JDWNRH and regional hospitals; laparotomy where laparoscopy is unavailable — do not delay surgery for imaging when torsion is likely. CA-125 at referral laboratories. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Features"], [["Functional (follicular, corpus luteum)", "Simple, resolve in 6–12 weeks; can bleed/rupture"], ["Dermoid (mature teratoma)", "Fat, hair, calcification; torsion risk"], ["Endometrioma", "'Chocolate' cyst, dysmenorrhoea"], ["Cystadenoma", "Large, benign epithelial"], ["Malignant", "Solid areas, ascites, older women"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Torsion", [F.s("Mass (often 5–10 cm) acts as lead point"), F.a, F.s("Ovary twists on its pedicle"), F.e("Venous then arterial occlusion → necrosis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "Current", "This guide"], [["Necrotic-looking twisted ovary", "Remove", "Untwist and conserve (most recover)", "Conserve " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Torsion: sudden severe unilateral pain, nausea/vomiting, tender adnexal mass, low-grade fever.</li><li>Rupture: sudden pain, peritonism, haemoperitoneum (mid-cycle/luteal).</li><li>Malignancy: bloating, early satiety, urinary frequency, weight loss over 50.</li></ul><h3>The typical patient</h3><p>A 19-year-old student in Paro has sudden right iliac fossa pain and vomiting for 5 hours; pregnancy test negative; ultrasound shows a 7 cm right adnexal mass. <b>Suspected ovarian torsion</b>: analgesia, NPO, urgent laparoscopy — detorsion and cystectomy, preserve the ovary.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Ectopic pregnancy", "Positive test"], ["Appendicitis", "Migratory pain, normal ovaries"], ["PID/tubo-ovarian abscess", "Fever, discharge, bilateral"], ["Renal colic", "Haematuria, loin pain"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Pregnancy test, FBC, CRP; ultrasound (Doppler flow may be normal in torsion); CA-125 (postmenopausal/complex), AFP/hCG/LDH in girls with solid masses.</p>` },
{ id: "staging", title: "RMI calculator", html: `<div class="calc" data-calc="rmi"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Torsion: urgent laparoscopy, detorsion, cystectomy; oophorectomy only if clearly necrotic/malignant.</li><li>Simple premenopausal cyst under 5 cm: reassure; 5–7 cm: yearly ultrasound; over 7 cm or persistent: surgery.</li><li>Dermoid: cystectomy (torsion risk).</li><li>Postmenopausal: RMI; low risk simple cyst under 5 cm — repeat scan and CA-125 in 4–6 months; high risk — gynaecological oncology.</li><li>Ruptured haemorrhagic cyst: analgesia, observe; surgery if unstable.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("paracetamol"), "1 g", "Pain"], [dr("morphine"), "Titrated", "Severe pain"], [dr("coc"), "Daily", "Prevent new functional cysts"]])}` },
{ id: "populations", title: "Girls and pregnancy", html: `<p>Girls: torsion of a normal ovary can occur — consider in any abdominal pain with vomiting. Pregnancy: corpus luteum cysts common; torsion risk in first trimester.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Normal Doppler but classic history", "Still operate — Doppler can be falsely reassuring"]])}` },
{ id: "complications", title: "Complications", html: `<p>Loss of ovary, infertility, peritonitis, haemoperitoneum, missed cancer.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Repeat ultrasound for persisting cysts as above.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Dermoid cyst on CT", src: "images/dermoid-ct.png", mod: "CT", ctx: "Mature cystic teratoma", loc: "Pelvis", find: "Fat-containing ovarian mass with calcification", interp: "Benign; cystectomy (torsion risk)", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:DermoidCyst(CT).png", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Adnexal mass", [F.s("Pregnancy test"), F.a, F.d("Acute pain + vomiting?"), F.a, F.b([["Yes", F.e("Torsion → urgent laparoscopy")], ["No", F.ok("Ultrasound features, RMI if needed")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Waiting for Doppler loss of flow", "Ovary lost", "Clinical decision"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "RMI formula?", "Ultrasound score × menopausal score × CA-125.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Jacobs I, Oram D, Fairbanks J, et al. A risk of malignancy index incorporating CA 125, ultrasound and menopausal status for the accurate preoperative diagnosis of ovarian cancer. BJOG. 1990;97:922-929. <a href="https://doi.org/10.1111/j.1471-0528.1990.tb02448.x" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Royal College of Obstetricians and Gynaecologists. Management of suspected ovarian masses in premenopausal women (Green-top Guideline No. 62), 2011.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
