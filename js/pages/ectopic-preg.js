/* Ectopic pregnancy (Bhutan STG 11.3, NICE NG126, RCOG) */
registerPage({
id: "ectopic-preg",
title: "Ectopic Pregnancy",
subtitle: "Do a pregnancy test in every woman of reproductive age with abdominal pain or collapse; resuscitate and operate for rupture; choose methotrexate or surgery for stable cases",
age: "Women of reproductive age", specs: ["obg", "emerg"],
keywords: ["ectopic pregnancy", "ruptured ectopic", "tubal pregnancy", "pregnancy of unknown location", "PUL", "beta hCG", "methotrexate", "salpingectomy", "haemoperitoneum", "shoulder tip pain"],
related: ["miscarriage-preg", "acute-abdomen-adult", "appendicitis-adult", "sti-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Ruptured ectopic pregnancy is a leading cause of early-pregnancy death. The pregnancy test is the single most important investigation.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Missed period + pain ± bleeding; collapse; shoulder-tip pain.</p></div>
<div><h4>Unstable</h4><p>2 large IV lines, 20 mL/kg then blood (STG), straight to theatre.</p></div>
<div><h4>Stable</h4><p>Transvaginal scan + serum hCG; methotrexate, expectant or surgery.</p></div>
<div><h4>Rh negative</h4><p>${dr("anti_d", "Anti-D")} after surgery.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 11.3: resuscitate with 20 mL/kg then whole blood; pain relief; refer for surgery. Laparotomy is available at district hospitals with surgeons; laparoscopy at JDWNRH and regional hospitals. Methotrexate injection is not in NEML 2025 — medical treatment is limited to referral centres. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>About 1–2% of pregnancies; 95% in the fallopian tube. Risk factors: previous ectopic, PID/chlamydia, tubal surgery or sterilisation, IUD in situ, IVF, smoking — but half have no risk factor.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Tubal ectopic", [F.s("Damaged tube delays transport"), F.a, F.s("Implantation in tube"), F.a, F.e("Tubal stretch → pain; rupture → haemoperitoneum, shock")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "NICE NG126", "This guide"], [["Stable ectopic", "Refer for surgery", "Methotrexate, expectant or surgery by hCG/size", "NICE where methotrexate available " + LB.loc()], ["Surgery type", "Laparotomy", "Laparoscopic salpingectomy", "Laparoscopy where available"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Amenorrhoea 6–8 weeks, lower abdominal pain, vaginal bleeding (often scanty, dark).</li><li>Rupture: dizziness, collapse, shoulder-tip pain, guarding, cervical motion tenderness, pallor; bradycardia can occur (vagal).</li><li>Atypical: diarrhoea, urinary symptoms — check pregnancy test.</li></ul><h3>The typical patient</h3><p>A 27-year-old woman in Wangdue faints at work; pulse 124, BP 80/50, abdomen distended and tender; last period 7 weeks ago; urine hCG positive. <b>This is ruptured ectopic pregnancy</b>: 2 large-bore lines, 20 mL/kg crystalloid then blood, crossmatch, straight to theatre for salpingectomy.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Miscarriage", "Intrauterine sac on scan, tissue passed"], ["Appendicitis", "Pregnancy test usually negative"], ["Ruptured corpus luteum cyst", "Can mimic exactly — scan/surgery"], ["PID", "Fever, discharge, negative pregnancy test"], ["Ovarian torsion", "Sudden pain, vomiting, adnexal mass"]])}` },
{ id: "invest", title: "Investigations", html: `<ul><li>Urine pregnancy test — every woman 12–55 with pain or collapse.</li><li>Transvaginal ultrasound: empty uterus + adnexal mass/free fluid.</li><li>Serum hCG; repeat at 48 h for pregnancy of unknown location (rise under 63% or fall under 50% suggests ectopic).</li><li>Hb, group and crossmatch, Rh status.</li></ul>` },
{ id: "staging", title: "Methotrexate suitability", html: `<div class="calc" data-calc="ectopicmtx"></div>` },
{ id: "manage", title: "Management", html: `<ul><li><b>Unstable/ruptured:</b> resuscitate (permissive, blood early) and laparotomy/laparoscopy — salpingectomy.</li><li><b>Stable:</b> NICE — methotrexate first-line if no significant pain, no heartbeat, hCG under 1500, mass under 35 mm; surgery if hCG 5000 or more, heartbeat, mass 35 mm+, or pain; choice in between. Expectant if hCG under 1000 and falling.</li><li>Salpingectomy if the other tube is healthy; salpingotomy if it is damaged (then hCG follow-up).</li><li>Anti-D 250 IU for Rh-negative women having surgery.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("methotrexate"), "50 mg/m² IM once", "Referral centres"], [dr("anti_d"), "250 IU IM", "Rh negative"], [dr("morphine"), "Titrated IV", "Pain"]])}` },
{ id: "populations", title: "Special situations", html: `<p>Caesarean scar, cervical and interstitial ectopics bleed heavily — specialist management. Heterotopic pregnancy after IVF.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No ultrasound, positive test, pain, stable", "Refer the same day; do not send home"], ["Shock at a BHU", "IV fluids, keep warm, urgent ambulance to the nearest surgical hospital"]])}` },
{ id: "complications", title: "Complications", html: `<p>Haemorrhagic shock, death, reduced fertility, recurrence (10–15%).</p>` },
{ id: "followup", title: "Follow-up", html: `<p>hCG until under 15–20 IU/L after medical/conservative treatment; early scan at 6 weeks next pregnancy; contraception advice.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Blob sign of tubal ectopic", src: "images/ectopic-blob.png", mod: "Transvaginal ultrasound (annotated)", ctx: "Tubal ectopic pregnancy", loc: "Adnexa", find: "Inhomogeneous adnexal mass separate from the ovary", signs: "Blob sign", interp: "With an empty uterus and positive hCG: ectopic", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:Blob_sign_of_ectopic_pregnancy_(hy).png", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Pain/bleeding + positive test", [F.d("Haemodynamically unstable?"), F.a, F.b([["Yes", F.e("Resuscitate → theatre")], ["No", F.s("TVUS + serum hCG")]]), F.a, F.ok("Ectopic: methotrexate / surgery / expectant; PUL: hCG at 48 h")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No pregnancy test", "Missed ectopic", "Test every woman of reproductive age"], ["Waiting for scan when shocked", "Death", "Theatre"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "STG fluid for ruptured ectopic in shock?", "20 mL/kg bolus followed by whole blood, then surgery.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">National Institute for Health and Care Excellence. Ectopic pregnancy and miscarriage: diagnosis and initial management (NG126), 2019, updated 2023. <a href="https://www.nice.org.uk/guidance/ng126" target="_blank" rel="noopener">nice.org.uk</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 11.3.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["NEML methotrexate injection", "<span class='flag'>Not listed</span>", "Tablet only"]], "qc")}` }
]
});
