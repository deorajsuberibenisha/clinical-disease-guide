/* Ectopic pregnancy. Thin-page upgrade Round 4, 27 Nov 2026 (id, ectopicmtx calculator, image and related links kept).
   Sources: Bhutan STG 2024 §11.3 (read: risk factors — tubal surgery, sterilisation, previous ectopic, tubal pathology, infertility; symptoms and signs;
   Hb, ABO-Rh, urine test, crossmatch, USG; resuscitate with IV fluid 20 mL/kg then whole blood, pain relief, refer for surgery);
   NICE NG126 Ectopic pregnancy and miscarriage (2019, updated 2023; read in browser 27 Nov 2026: §1.4 symptoms/signs, atypical presentation, a third
   have no risk factors, refer unstable to A&E, pregnancy test for all women of reproductive age; §1.5–1.7 TVUS signs — adnexal mass with yolk sac or
   fetal pole = ectopic; empty sac 'bagel'/complex mass = high probability; empty uterus/pseudo-sac/free fluid = possible; §1.8 PUL — hCG 48 h apart:
   rise > 63% → likely IUP, scan 7–14 days (earlier if ≥ 1500); fall > 50% → urine test at 14 days; else review within 24 h; do not use hCG to locate
   the pregnancy; no progesterone; §1.14 expectant: stable, pain free, < 35 mm, no heartbeat, hCG ≤ 1000 (offer) or 1000–1500 (consider); hCG days 2, 4,
   7 with ≥ 15% falls; §1.15 methotrexate: no significant pain, unruptured, < 35 mm, no heartbeat, hCG < 1500, no IUP, can follow up; surgery first if pain,
   ≥ 35 mm, heartbeat, hCG ≥ 5000 or no follow-up; choice at 1500–4999; hCG days 4 and 7 then weekly; §1.16–1.17 laparoscopy; salpingectomy unless
   infertility risk factors, salpingotomy (1 in 5 need more treatment) with hCG day 7 then weekly; urine test 3 weeks after salpingectomy; §1.18 anti-D
   only from 12+0 weeks with medical/surgical management, ≥ 250 IU; none up to 11+6); NEML 2025 text (no anti-D immunoglobulin, no methotrexate
   injection — only 2.5 mg tablets — in the list read). Methotrexate 50 mg/m² single dose is the standard regimen (marked: not in NICE text). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "ectopic-preg",
title: "Ectopic Pregnancy",
subtitle: "Do a pregnancy test in every woman of reproductive age with abdominal pain or collapse; resuscitate and operate for rupture; choose methotrexate or surgery for stable cases",
age: "Women of reproductive age", specs: ["obg", "emerg"],
keywords: ["ectopic pregnancy", "ruptured ectopic", "tubal pregnancy", "pregnancy of unknown location", "PUL", "beta hCG", "methotrexate", "salpingectomy", "salpingotomy", "haemoperitoneum", "shoulder tip pain", "expectant management", "anti-D", "heterotopic pregnancy"],
related: ["miscarriage-preg", "acute-abdomen-adult", "appendicitis-adult", "sti-adult", "pid-adult", "shock-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Ruptured ectopic pregnancy is a leading cause of death in early pregnancy. Presentation is often atypical, and a third of women have no risk factor — so <b>do a pregnancy test in every woman of reproductive age with abdominal pain, bleeding or collapse</b> ${r(2)}.</p>
<div class="glance">
<div><h4>Unstable</h4><p>Two large lines, 20 mL/kg fluid then blood, crossmatch, straight to theatre ${r(1)}. See ${P("shock-adult", "Shock")}.</p></div>
<div><h4>Stable</h4><p>Transvaginal scan: an adnexal mass with a yolk sac or fetal pole separate from the ovary = ectopic ${r(2)}.</p></div>
<div><h4>Not seen (PUL)</h4><p>Two serum hCG levels 48 hours apart; treat as possible ectopic until the location is known ${r(2)}.</p></div>
<div><h4>Choose</h4><p>Expectant, methotrexate or surgery by pain, hCG, size and heartbeat (NICE criteria) ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §11.3: resuscitate (IV fluid 20 mL/kg then whole blood), give pain relief and refer for surgery ${r(1)}. Transvaginal ultrasound and serum hCG are available at referral hospitals and some district hospitals ${LB.loc()}. In the NEML 2025 text we hold, methotrexate is listed only as 2.5 mg tablets and anti-D immunoglobulin is not listed — so medical treatment and anti-D depend on the referral hospital's supply ${r(3)} ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Definition", "Implantation of the fertilised ovum outside the uterine cavity; most are tubal " + r(1)],
["Risk factors", "Previous ectopic, tubal surgery or sterilisation, documented tubal disease, infertility " + r(1)],
["No risk factor", "About a third of women " + r(2)],
["Heterotopic", "Intrauterine and ectopic together — rare; always scan both adnexae " + r(2)],
["Other sites", "Interstitial, cervical, caesarean scar, ovarian, abdominal — bleed heavily; specialist care"]
])}
` },
{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Tubal ectopic", [F.s("Damaged tube delays transport of the embryo"), F.a, F.s("Implantation in the tube wall"), F.a, F.d("Outcome"), F.a, F.b([["Resolves", F.ok("Tubal abortion / spontaneous resolution")], ["Grows", F.e("Rupture → haemoperitoneum → shock")]])])}
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE NG126", "This guide"], [
["Stable ectopic", "Refer for surgery", "Expectant, methotrexate or surgery by criteria", "NICE where hCG follow-up and methotrexate are available " + r(1) + r(2) + " " + LB.loc()],
["Surgery", "Refer for surgery", "Laparoscopic; salpingectomy unless infertility risk factors", "Laparoscopy where available; laparotomy if unstable " + r(2)],
["Resuscitation fluid", "20 mL/kg then whole blood", "Refer unstable women to emergency care", "Fluid bolus, early blood, theatre " + r(1)],
["Anti-D", "—", "Only from 12+0 weeks with medical or surgical management", "NICE; supply limited " + r(2) + r(3)]
])}
` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Symptoms", "Signs"], [
["Common: abdominal or pelvic pain, missed period, vaginal bleeding with or without clots", "Common: pelvic, adnexal or abdominal tenderness"],
["Other: breast tenderness, GI symptoms, dizziness or fainting, shoulder-tip pain, urinary symptoms, passing tissue, rectal pressure or pain on defecation", "Other: cervical motion tenderness, rebound or peritonism, pallor, distension, enlarged uterus, pulse > 100 or BP < 100/60, shock, orthostatic hypotension"]
])}
<p class="small">NICE §1.4 ${r(2)}; STG §11.3 ${r(1)}. Atypical presentation is common — symptoms can mimic gastroenteritis or UTI ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 27-year-old woman in Wangdue faints at work; pulse 124, BP 80/50, abdomen distended and tender; last period 7 weeks ago; urine pregnancy test positive. <b>Ruptured ectopic pregnancy</b>: two large-bore lines, 20 mL/kg crystalloid then blood, crossmatch, straight to theatre for salpingectomy ${r(1)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Miscarriage", "Intrauterine sac or products on scan; os may be open " + P("miscarriage-preg", "Miscarriage")],
["Ruptured corpus luteum cyst", "Free fluid; intrauterine pregnancy may be present"],
["Ovarian torsion", "Sudden severe pain, adnexal mass, vomiting"],
["Appendicitis", "Right iliac fossa pain, fever " + P("appendicitis-adult", "Appendicitis")],
["PID", "Fever, discharge, bilateral tenderness " + P("pid-adult", "PID")],
["UTI / gastroenteritis", "Symptoms overlap — always do a pregnancy test " + r(2)]
])}
` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Urine pregnancy test</b> — every woman of reproductive age with pain, bleeding or collapse ${r(2)}.</li>
<li>Hb, blood group and Rh, crossmatch ${r(1)}.</li>
<li><b>Transvaginal ultrasound</b> (transabdominal if TV is unacceptable or the uterus is enlarged) ${r(2)}:
<ul><li>Ectopic: adnexal mass moving separately from the ovary containing a yolk sac or fetal pole (with or without heartbeat).</li>
<li>High probability: adnexal mass with an empty sac ('bagel' or 'tubal ring' sign), or a complex inhomogeneous adnexal mass.</li>
<li>Possible: empty uterus, a pseudo-sac (fluid in the cavity), moderate–large free fluid (haemoperitoneum).</li>
<li>Look for a heterotopic pregnancy.</li></ul></li>
<li><b>Pregnancy of unknown location (PUL):</b> serum hCG twice, 48 hours apart ${r(2)}:
<ul><li>Rise of more than 63%: probable intrauterine pregnancy — scan in 7–14 days (sooner if hCG ≥ 1500 IU/L); ectopic still possible.</li>
<li>Fall of more than 50%: likely failing pregnancy — urine test 14 days later.</li>
<li>Anything in between: clinical review within 24 hours.</li>
<li>hCG does not locate the pregnancy; symptoms matter more than numbers. Serum progesterone does not help.</li></ul></li>
</ul>
` },
{ id: "staging", title: "Methotrexate suitability", html: `<div class="calc" data-calc="ectopicmtx"></div>` },
{ id: "manage", title: "Management", html: `
<h3>Ruptured or unstable</h3>
<p>Call for help; two large-bore cannulas; IV fluid 20 mL/kg then blood (STG — whole blood); crossmatch; analgesia; theatre for salpingectomy (laparotomy if unstable, laparoscopy if skills and equipment allow) ${r(1)} ${r(2)}. At a BHU or PHC: fluids, keep warm, urgent transfer to the nearest surgical hospital.</p>
<h3>Stable — choose by NICE criteria</h3>
${tbl(["Option", "When", "Follow-up"], [
["Expectant", "Stable and pain free; mass < 35 mm with no heartbeat; hCG ≤ 1000 IU/L (offer) or 1000–1500 (consider); able to return", "hCG on days 2, 4 and 7 — each should fall by ≥ 15%; then weekly to < 20 IU/L " + r(2)],
["Methotrexate", "No significant pain; unruptured; mass < 35 mm; no heartbeat; hCG < 1500 IU/L; no intrauterine pregnancy; able to return. Choice with surgery if hCG 1500–4999", "hCG on days 4 and 7, then weekly until negative; plateau or rise → reassess " + r(2)],
["Surgery", "Significant pain, mass ≥ 35 mm, heartbeat seen, hCG ≥ 5000 IU/L, or cannot return for follow-up", "Salpingectomy: urine test at 3 weeks. Salpingotomy: hCG at day 7 then weekly " + r(2)]
])}
<ul>
<li>Give methotrexate at the first visit only when the diagnosis is definite and a viable intrauterine pregnancy is excluded ${r(2)}.</li>
<li>Methotrexate dose: 50 mg/m² IM once ${LB.exp("STANDARD REGIMEN, NOT IN NICE TEXT")}; see the calculator. Avoid alcohol, folic acid and NSAIDs, and avoid pregnancy for some months ${LB.exp("STANDARD ADVICE")}.</li>
<li><b>Salpingectomy</b> unless she has other risk factors for infertility (e.g. a damaged other tube) — then consider salpingotomy; up to 1 in 5 need more treatment ${r(2)}.</li>
<li><b>Anti-D:</b> none up to 11+6 weeks; from 12+0 to 12+6 weeks give at least 250 IU to RhD-negative women having medical or surgical management ${r(2)}.</li>
<li>Written information: warning signs, a 24-hour contact, self-referral to early pregnancy care next time ${r(2)}.</li>
</ul>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("methotrexate"), "50 mg/m² IM once " + LB.exp("REGIMEN"), "Referral centres; injection not found in NEML 2025 text " + r(3)],
[dr("anti_d"), "≥ 250 IU IM (12+0 weeks or later) " + r(2), "Not found in NEML 2025 text " + r(3)],
[dr("morphine"), "Titrated IV", "Pain"],
[dr("ringer_lactate", "Ringer's lactate"), "20 mL/kg bolus then blood " + r(1), "Shock"]
])}
` },
{ id: "populations", title: "Special situations", html: `<ul><li>Caesarean scar, cervical and interstitial ectopics bleed heavily — specialist management.</li><li>Heterotopic pregnancy, especially after assisted conception ${r(2)}.</li><li>Future pregnancies: early scan; self-refer early ${r(2)}.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["No ultrasound, positive test, pain, stable", "Refer the same day; do not send home " + r(2)],
["Shock at a BHU", "IV fluids, keep warm, urgent ambulance or aeromedical retrieval to the nearest surgical hospital " + LB.loc()],
["Woman lives far away and cannot return for hCG checks", "Surgery rather than methotrexate or expectant care " + r(2)],
["hCG plateaus after methotrexate", "Reassess for further treatment " + r(2)],
["Slow pulse with haemoperitoneum", "Can be vagal — still resuscitate and operate"]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Rupture, haemorrhagic shock, death; persistent trophoblast after salpingotomy; methotrexate side effects; repeat ectopic; reduced fertility; grief and anxiety ${r(2)}.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>hCG until negative (methotrexate, salpingotomy, expectant) or urine test at 3 weeks (salpingectomy) ${r(2)}.</li><li>Counselling and support; contraception advice; early scan in the next pregnancy.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Blob sign of tubal ectopic", src: "images/ectopic-blob.png", mod: "Transvaginal ultrasound (annotated)", ctx: "Tubal ectopic pregnancy", loc: "Adnexa", find: "Inhomogeneous adnexal mass separate from the ovary", signs: "Blob sign", interp: "With an empty uterus and positive hCG: high probability of ectopic (NICE)", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:Blob_sign_of_ectopic_pregnancy_(hy).png", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Positive pregnancy test + pain or bleeding", [F.d("Unstable?"), F.a, F.b([["Yes", F.e("Resuscitate, blood, theatre")], ["No", F.s("Transvaginal scan")]]), F.a, F.d("Location?"), F.a, F.b([["Ectopic", F.e("Expectant / methotrexate / surgery by criteria")], ["Unknown", F.s("hCG 48 h apart")], ["Intrauterine", F.ok("Miscarriage or ongoing pregnancy")]])])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["No pregnancy test in a woman with abdominal pain", "Missed ectopic", "Test every woman of reproductive age " + r(2)],
["Using hCG to 'rule out' ectopic", "hCG cannot locate a pregnancy", "Scan and clinical review " + r(2)],
["Methotrexate without a certain diagnosis", "Harms a wanted intrauterine pregnancy", "Only with definite ectopic and IUP excluded " + r(2)],
["Sending a PUL home without a plan", "Rupture at home", "Written advice, 24-hour contact, repeat hCG " + r(2)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Woman with fainting and abdominal pain, 7 weeks amenorrhoea — first test?", "Urine pregnancy test (while resuscitating), then scan.")}
${qa("Registrar", "NICE criteria for methotrexate?", "No significant pain, unruptured, mass < 35 mm, no heartbeat, hCG < 1500 IU/L, no IUP, able to return.")}
${qa("Registrar", "hCG rises 70% in 48 hours with an empty uterus — what next?", "Probable developing intrauterine pregnancy: scan in 7–14 days (sooner if ≥ 1500); ectopic not excluded.")}
${qa("Specialist", "Salpingectomy or salpingotomy?", "Salpingectomy unless infertility risk factors such as a damaged other tube; salpingotomy needs hCG follow-up (1 in 5 need more treatment).")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §11.3 Ectopic pregnancy and ruptured ectopic pregnancy.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Ectopic pregnancy and miscarriage: diagnosis and initial management (NG126). London: NICE; 2019, updated 2023. <a href="https://www.nice.org.uk/guidance/ng126" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["STG §11.3", "<span class='pass'>Read</span>", "27 Nov 2026"], ["NICE NG126 §1.4–1.18", "<span class='pass'>Read</span>", "27 Nov 2026"], ["NEML 2025", "<span class='flag'>Gap</span>", "No anti-D; methotrexate tablets only"], ["Methotrexate dose", "<span class='unv'>Standard regimen</span>", "Not stated in NICE"], ["Calculator", "<span class='pass'>Kept</span>", "ectopicmtx"]], "qc")}` }
]
});
})();
