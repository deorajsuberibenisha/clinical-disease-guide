/* Miscarriage and molar pregnancy. Thin-page upgrade Round 4, 27 Nov 2026 (id, misoplan calculator, image and related links kept).
   Sources: Bhutan STG 2024 §11.2 Abortion and §11.4 Molar pregnancy (read: loss before 20 weeks (WHO) / 26 weeks (Bhutan NICU data); types and Table
   11.1 — threatened: bed rest, folic acid; incomplete: resuscitate, refer for evacuation; complete: observe; septic: admit, IV ampicillin + metronidazole,
   refer for evacuation; missed: admit, refer for evacuation; inevitable: resuscitate, refer, oral antibiotic; investigations; post-abortion care,
   contraception; mole: refer for suction evacuation, weekly hCG until 3 consecutive normal then monthly for 3 months (complete) / 1 month (partial),
   avoid pregnancy during follow-up, early scan next pregnancy);
   NICE NG126 (read in browser 27 Nov 2026: §1.6 viability rules — CRL < 7 mm or MSD < 25 mm without heartbeat/pole → rescan ≥ 7 days; ≥ 7 mm / ≥ 25 mm →
   second opinion and/or rescan; transabdominal → rescan ≥ 14 days; §1.9 threatened: return if bleeding worse or > 14 days; vaginal micronised
   progesterone 400 mg BD if previous miscarriage, to 16 weeks; §1.10 expectant 7–14 days first line unless haemorrhage risk, previous trauma, coagulopathy
   or infection; urine test at 3 weeks; §1.11 missed: mifepristone 200 mg then 48 h later misoprostol 800 µg; incomplete: misoprostol 600 µg (or 800);
   no mifepristone for incomplete; analgesia and antiemetics; urine test at 3 weeks; §1.12 MVA under local anaesthetic or theatre; §1.18 anti-D only
   from 12+0 weeks);
   WHO Medical management of abortion 2018 and PRISM trial (previous page version); NEML 2025 text (misoprostol 25 µg tablet and 100 µg tablet — the
   latter supplied to DH with a gynaecologist; no mifepristone; no anti-D; oxytocin 5 IU/mL; methylergometrine). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "miscarriage-preg",
title: "Miscarriage & Molar Pregnancy",
subtitle: "Classify by the os and the scan, resuscitate heavy bleeding, offer expectant, medical (misoprostol) or MVA management, treat sepsis aggressively, and follow moles with hCG",
age: "Pregnant women (under 20–24 weeks)", specs: ["obg", "emerg"],
keywords: ["miscarriage", "abortion", "threatened abortion", "threatened miscarriage", "incomplete abortion", "missed miscarriage", "inevitable abortion", "septic abortion", "misoprostol", "mifepristone", "MVA", "manual vacuum aspiration", "molar pregnancy", "hydatidiform mole", "gestational trophoblastic disease", "hCG follow-up", "progesterone", "recurrent miscarriage"],
related: ["ectopic-preg", "pph-preg", "sepsis-adult", "anaemia-preg", "shock-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">About 1 in 5 recognised pregnancies end in miscarriage, mostly from chromosomal problems — not anything the woman did. Kind words matter as much as the treatment ${LB.exp("STANDARD FIGURE")}.</p>
<div class="glance">
<div><h4>Classify</h4><p>Os open or closed, tissue passed, scan: threatened, inevitable, incomplete, complete, missed, septic ${r(1)}.</p></div>
<div><h4>Bleeding</h4><p>Resuscitate; remove products from the os; oxytocin or misoprostol; urgent evacuation ${r(1)}.</p></div>
<div><h4>Choices</h4><p>Expectant 7–14 days, ${dr("misoprostol")} (600 µg incomplete; mifepristone + 800 µg missed) or MVA ${r(2)}.</p></div>
<div><h4>Sepsis / mole</h4><p>Septic: IV ampicillin + metronidazole, then evacuation. Mole: suction evacuation and hCG follow-up ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §11.2 asks PHCs to resuscitate and refer incomplete, missed, inevitable and septic miscarriage for evacuation ${r(1)}. NEML 2025 lists misoprostol as 25 µg and 100 µg tablets (the 100 µg tablet at district hospitals with a gynaecologist) — so a 600 µg dose is six 100 µg tablets. Mifepristone and anti-D were not found in the NEML text ${r(4)} ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Types", html: `
${tbl(["Type", "Features", "STG plan", "Options (NICE/WHO)"], [
["Threatened", "Bleeding, os closed, pregnancy viable", "Bed rest, folic acid", "Reassure; return if worse or > 14 days; vaginal progesterone if previous miscarriage " + r(2)],
["Inevitable", "Pain, bleeding, cervix opening", "Resuscitate, refer, oral antibiotic", "Misoprostol or MVA"],
["Incomplete", "Os open, heavy bleeding, tissue partly passed", "Resuscitate, refer for evacuation", "Expectant, misoprostol 600 µg, or MVA " + r(2)],
["Complete", "Tissue passed, mild bleeding, empty uterus", "Observe and follow up", "Urine pregnancy test at 3 weeks " + r(2)],
["Missed", "Non-viable, os closed, spotting", "Admit, refer for evacuation", "Expectant, mifepristone + misoprostol, or MVA " + r(2)],
["Septic", "Bleeding, fever, abdominal pain", "Admit, IV ampicillin + metronidazole, refer for evacuation", "Antibiotics then prompt evacuation"]
])}
<p class="small">STG Table 11.1 ${r(1)}.</p>
` },
{ id: "patho", title: "Causes", html: `<ul><li>Chromosomal abnormalities (rise with maternal age) ${r(1)}.</li><li>Infections (TORCH), teratogenic medicines, diabetes, hypertension, trauma ${r(1)}.</li><li>Molar pregnancy: abnormal fertilisation with trophoblast overgrowth; complete or partial ${r(1)}.</li></ul>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE NG126 / WHO", "This guide"], [
["Threatened miscarriage", "Complete bed rest, folic acid", "No bed rest advice; progesterone 400 mg BD vaginally to 16 weeks if previous miscarriage", "Reassure; progesterone if previous miscarriage " + r(1) + r(2) + r(3)],
["Incomplete / missed", "Refer for evacuation", "Expectant first line (7–14 days) unless risk; medical or MVA as alternatives", "Offer choices where follow-up and drugs exist; evacuate if bleeding heavy or infected " + r(2) + " " + LB.loc()],
["Missed miscarriage medicine", "—", "Mifepristone 200 mg then misoprostol 800 µg at 48 h (NICE); misoprostol alone if no mifepristone (WHO)", "Misoprostol alone (no mifepristone on NEML) " + r(2) + r(3)],
["Anti-D", "—", "Only from 12+0 weeks with medical or surgical management", "NICE " + r(2)]
])}
` },
{ id: "presentation", title: "Assessment", html: `
<ul>
<li>Bleeding amount and clots, tissue passed, pain, fever, foul discharge, any interference with the pregnancy.</li>
<li>Pulse, BP, temperature; abdomen; speculum: os open or closed, products in the os; uterine size for dates ${r(1)}.</li>
<li>Always consider ectopic pregnancy if the uterus is empty and no previous scan confirmed an intrauterine pregnancy ${r(2)}. See ${P("ectopic-preg", "Ectopic pregnancy")}.</li>
</ul>
${box("red", "Emergency", `<ul><li>Shock — including 'cervical shock' from products in the os</li><li>Sepsis — fever, tachycardia, foul discharge, peritonism</li><li>Uterus much larger than dates with heavy bleeding (mole)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 30-year-old at 10 weeks in Haa has heavy bleeding with clots; pulse 110; os open with tissue in it. <b>Incomplete miscarriage</b>: remove products from the os with sponge forceps, IV fluids, misoprostol 600 µg orally (six 100 µg tablets) or MVA, Rh group, counselling ${r(1)} ${r(2)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Ectopic pregnancy", "Empty uterus, adnexal mass, pain out of proportion " + P("ectopic-preg", "Ectopic")], ["Molar pregnancy", "Uterus large for dates, hyperemesis, very high hCG " + r(1)], ["Cervical lesion or ectropion", "Seen on speculum"], ["Implantation bleeding", "Light, viable pregnancy"]])}` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li>Urine pregnancy test, Hb, ABO-Rh group, crossmatch if heavy bleeding ${r(1)}.</li>
<li><b>Ultrasound</b> (transvaginal where possible): heartbeat, crown–rump length (CRL), mean sac diameter (MSD), retained products ${r(2)}.</li>
<li><b>Do not diagnose miscarriage from one early scan</b> ${r(2)}:
<ul><li>CRL under 7 mm with no heartbeat, or MSD under 25 mm with no fetal pole → rescan at least 7 days later.</li>
<li>CRL 7 mm or more without heartbeat, or MSD 25 mm or more without a pole → second opinion and/or rescan at 7 days.</li>
<li>Transabdominal measurements → rescan at least 14 days later.</li>
<li>Do not use dates from the last period alone to decide whether a heartbeat should be seen.</li></ul></li>
<li>Septic: blood culture, FBC, creatinine, lactate. Molar: serum hCG, chest X-ray, LFT, RFT ${r(1)}.</li>
<li>Histology of products where possible (to detect mole).</li>
</ul>
` },
{ id: "staging", title: "Management planner", html: `<div class="calc" data-calc="misoplan"></div>` },
{ id: "manage", title: "Management", html: `
<h3>Heavy bleeding or shock</h3>
<p>Two large IV lines, fluid, crossmatch; remove products from the os with sponge forceps; ${dr("oxytocin")} 10 IU IM or misoprostol; urgent evacuation (MVA) ${r(1)} ${LB.exp("UTEROTONIC DOSE")}.</p>
<h3>Threatened</h3>
<p>Reassure; return if bleeding gets worse or lasts beyond 14 days. Vaginal micronised progesterone 400 mg twice daily, continued to 16 weeks if the heartbeat is confirmed, for women with a previous miscarriage ${r(2)}.</p>
<h3>Confirmed miscarriage (stable, not infected)</h3>
<ol>
<li><b>Expectant</b> for 7–14 days first, unless high bleeding risk (late first trimester), previous traumatic pregnancy experience, coagulopathy or infection ${r(2)}.</li>
<li><b>Medical</b> — missed: mifepristone 200 mg then misoprostol 800 µg (vaginal, oral or sublingual) 48 hours later; without mifepristone, misoprostol alone ${r(2)} ${r(3)}. Incomplete: misoprostol 600 µg once (800 µg acceptable); do not use mifepristone ${r(2)}. Give pain relief and anti-emetics ${r(2)}.</li>
<li><b>Surgical</b> — manual vacuum aspiration under local anaesthetic, or theatre ${r(2)}.</li>
<li>Urine pregnancy test 3 weeks later; positive → review for retained tissue, mole or ectopic ${r(2)}.</li>
</ol>
<h3>Septic miscarriage</h3>
<p>Admit, resuscitate, IV ${dr("ampicillin")} + ${dr("metronidazole")} (STG; add gentamicin if severe), then evacuation as soon as possible; treat as sepsis ${r(1)}. See ${P("sepsis-adult", "Sepsis")}.</p>
<h3>Molar pregnancy</h3>
<ul><li>Refer for suction evacuation (not medical) ${r(1)}.</li><li>Serum hCG weekly until 3 consecutive normal results, then monthly for 3 months (complete mole) or 1 month (partial mole) ${r(1)}.</li><li>Avoid pregnancy until follow-up is complete; early scan in the next pregnancy ${r(1)}.</li><li>Rising or plateauing hCG: gestational trophoblastic neoplasia — refer for chemotherapy ${r(1)}.</li></ul>
<h3>After every miscarriage</h3>
<p>Watch for bleeding and infection; contraception and preconception counselling; emotional support ${r(1)}. Anti-D only from 12+0 weeks with medical or surgical management (at least 250 IU) ${r(2)}.</p>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("misoprostol"), "Incomplete 600 µg once; missed 800 µg (after mifepristone 200 mg if available) " + r(2), "NEML 25 µg and 100 µg tablets " + r(4)],
["Mifepristone", "200 mg orally, 48 h before misoprostol " + r(2), "Not found in NEML 2025 text"],
["Micronised progesterone", "400 mg vaginally twice daily to 16 weeks " + r(2), "Threatened, previous miscarriage"],
[dr("oxytocin"), "10 IU IM " + LB.exp("DOSE"), "Heavy bleeding"],
[dr("ampicillin"), "IV (STG) " + r(1), "Septic"],
[dr("metronidazole"), "IV (STG) " + r(1), "Septic"],
[dr("anti_d"), "≥ 250 IU IM from 12+0 weeks " + r(2), "Not found in NEML 2025 text"]
])}
` },
{ id: "populations", title: "Recurrent miscarriage", html: `<p>Three or more losses: refer — antiphospholipid antibodies, karyotype, uterine anatomy, thyroid and diabetes checks ${LB.exp("STANDARD PRACTICE")}. Progesterone helps women with bleeding who have had a previous miscarriage ${r(2)}.</p>` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Bleeding continues after misoprostol", "MVA " + r(2)],
["No bleeding 48 h after misoprostol", "Contact the clinic for review " + r(2)],
["hCG plateaus after a mole", "Gestational trophoblastic neoplasia — refer " + r(1)],
["Empty uterus, no earlier scan", "Treat as pregnancy of unknown location until proved otherwise " + r(2)],
["Only 25 µg misoprostol tablets in stock", "Use 100 µg tablets if available; otherwise refer — 24 tablets for one dose is impractical " + LB.loc()]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Haemorrhage, sepsis, retained products, uterine perforation (MVA), Asherman's syndrome, Rh sensitisation, persistent trophoblastic disease, grief and depression ${r(1)} ${r(2)}.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Urine pregnancy test at 3 weeks after expectant or medical management ${r(2)}.</li><li>Mole: hCG schedule above ${r(1)}.</li><li>Contraception; next pregnancy — early booking and scan.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Complete molar pregnancy", src: "images/molar-us.jpg", mod: "Ultrasound", ctx: "Hydatidiform mole", loc: "Uterus", find: "Echogenic mass with many small cysts", signs: "Snowstorm / bunch-of-grapes appearance", interp: "Suction evacuation and hCG follow-up", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:Molar_pregnancy.jpg", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Bleeding in early pregnancy", [F.d("Shock or sepsis?"), F.a, F.b([["Yes", F.e("Resuscitate; antibiotics if septic; urgent evacuation")], ["No", F.s("Scan")]]), F.a, F.d("Findings"), F.a, F.b([["Viable", F.ok("Threatened — reassure ± progesterone")], ["Non-viable / retained", F.e("Expectant, misoprostol or MVA")], ["Empty uterus", F.s("PUL / ectopic pathway")]])])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Diagnosing miscarriage on one early scan", "Ending a viable pregnancy", "Follow NICE rescan rules " + r(2)],
["Forgetting ectopic with an empty uterus", "Rupture", "PUL pathway " + r(2)],
["Delaying evacuation in septic miscarriage", "Septic shock", "Antibiotics then prompt evacuation " + r(1)],
["Medical treatment for a mole", "Incomplete evacuation", "Suction evacuation " + r(1)],
["Blaming the woman", "Guilt, poor follow-up", "Explain chromosomal causes"]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Incomplete miscarriage at 9 weeks, stable — medical dose?", "Misoprostol 600 µg once (oral, vaginal or sublingual).")}
${qa("Intern/MO", "Septic miscarriage — STG antibiotics?", "IV ampicillin plus metronidazole, then refer for evacuation.")}
${qa("Registrar", "CRL 5 mm, no heartbeat on transvaginal scan — diagnosis?", "Not yet: rescan at least 7 days later.")}
${qa("Registrar", "hCG follow-up after complete mole (STG)?", "Weekly until 3 consecutive normal results, then monthly for 3 months.")}
${qa("Specialist", "Who should get vaginal progesterone?", "Women with bleeding, a scan-confirmed intrauterine pregnancy and a previous miscarriage — 400 mg twice daily to 16 weeks.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §11.2 Abortion and §11.4 Molar pregnancy.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Ectopic pregnancy and miscarriage: diagnosis and initial management (NG126). London: NICE; 2019, updated 2023. <a href="https://www.nice.org.uk/guidance/ng126" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">World Health Organization. Medical management of abortion. Geneva: WHO; 2018; Coomarasamy A, Devall AJ, Cheed V, et al. A randomized trial of progesterone in women with bleeding in early pregnancy (PRISM). N Engl J Med 2019;380:1815–1824. <a href="https://doi.org/10.1056/NEJMoa1813730" target="_blank" rel="noopener">doi:10.1056/NEJMoa1813730</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["STG §11.2, §11.4", "<span class='pass'>Read</span>", "27 Nov 2026"], ["NICE NG126", "<span class='pass'>Read</span>", "27 Nov 2026"], ["WHO 2018, PRISM", "<span class='unv'>Previous version</span>", "Not re-read"], ["NEML misoprostol strengths", "<span class='flag'>Practical gap</span>", "25 and 100 µg only"], ["Calculator", "<span class='pass'>Kept</span>", "misoplan"]], "qc")}` }
]
});
})();
