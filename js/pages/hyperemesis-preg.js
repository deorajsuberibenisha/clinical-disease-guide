/* Nausea and vomiting of pregnancy and hyperemesis gravidarum (RCOG GTG 69, 2024) */
registerPage({
id: "hyperemesis-preg",
title: "Hyperemesis Gravidarum & Nausea/Vomiting of Pregnancy",
subtitle: "Score severity with PUQE, use antiemetics early and in combination, rehydrate with saline and potassium, give thiamine, prevent VTE, and look for other causes",
age: "Pregnant women (mostly first trimester)", specs: ["obg", "emerg"],
keywords: ["hyperemesis gravidarum", "nausea and vomiting of pregnancy", "NVP", "PUQE score", "ondansetron pregnancy", "promethazine", "metoclopramide", "thiamine", "Wernicke", "ketonuria", "molar pregnancy"],
related: ["thiamine-adult", "miscarriage-preg", "uti-adult", "thyroid-adult", "sodium-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Define HG</h4><p>Severe vomiting, unable to keep fluids, 5%+ weight loss, ketonuria/dehydration/electrolyte problems.</p></div>
<div><h4>Antiemetics</h4><p>${dr("promethazine")} → ${dr("ondansetron")}/${dr("metoclopramide")}.</p></div>
<div><h4>Fluids</h4><p>0.9% saline + KCl — not dextrose alone.</p></div>
<div><h4>Protect</h4><p>${dr("thiamine")} 100 mg daily; ${dr("enoxaparin")} while admitted.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG lists hyperemesis under molar pregnancy symptoms; RCOG 2024 is followed here. Promethazine, ondansetron, metoclopramide and thiamine are on the NEML; cyclizine, prochlorperazine and doxylamine–pyridoxine are not. Day-case IV rehydration avoids admission for many women. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>NVP affects up to 80% of pregnancies; HG about 1–3%. Peaks at 9–13 weeks; usually settles by 20 weeks. Risk: previous HG, multiple or molar pregnancy, family history.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("HG", [F.s("High hCG, GDF15 sensitivity"), F.a, F.s("Persistent vomiting"), F.e("Dehydration, hypokalaemia, hyponatraemia, thiamine deficiency, weight loss")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "RCOG 2024", "This guide"], [["Ondansetron in 1st trimester", "Avoid", "Use if needed; tiny cleft risk discussed", "Use with counselling " + LB.loc()], ["Ambulatory care", "Admit", "Day-case IV fluids where possible", "Day case if stable"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>PUQE score, weight, hydration, pulse, BP, urine ketones, mental state (Wernicke), eye signs.</li><li>Abdominal pain, fever, urinary symptoms → other causes.</li></ul><h3>The typical patient</h3><p>A 26-year-old at 9 weeks in Mongar vomits 8 times daily, cannot keep fluids down, ketones 3+, pulse 110, weight down 4 kg. <b>Hyperemesis gravidarum (PUQE 14)</b>: IV saline with KCl, promethazine + ondansetron, thiamine 100 mg, enoxaparin, ultrasound (twins/mole), U&E, TSH.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["UTI/pyelonephritis", "Fever, dysuria, loin pain"], ["Molar pregnancy, twins", "Ultrasound, high hCG"], ["Gastroenteritis, hepatitis, pancreatitis", "Diarrhoea, jaundice, pain"], ["Thyrotoxicosis", "Tremor, goitre (transient biochemical hyperthyroidism is common in HG)"], ["DKA, Addison's", "Glucose, BP"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Urine dipstick (ketones) and culture, U&E, glucose, FBC, LFT, TFT, ultrasound.</p>` },
{ id: "staging", title: "PUQE score", html: `<div class="calc" data-calc="puqe"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Mild: diet advice, ginger, oral antiemetic.</li><li>Moderate–severe: IV 0.9% saline/Hartmann's with KCl per U&E; antiemetics IV/IM; thiamine; PPI if reflux; VTE prophylaxis; stop iron temporarily.</li><li>Refractory: combination antiemetics; hydrocortisone 100 mg IV BD then prednisolone taper (specialist); enteral feeding if severe weight loss.</li><li>Mental health support; discuss termination only as the woman's choice after full treatment.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("promethazine"), "25 mg 8-hourly", "First line"], [dr("ondansetron"), "4–8 mg 8-hourly", "Second line"], [dr("metoclopramide"), "10 mg 8-hourly (max 5 days)", "Dystonia risk"], [dr("thiamine"), "100 mg daily", "Prevent Wernicke"], [dr("enoxaparin"), "40 mg daily", "Admitted"], [dr("famotidine"), "20 mg twice daily", "Reflux"]])}` },
{ id: "populations", title: "Next pregnancy", html: `<p>Recurrence is common — start antiemetics early.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Confusion and nystagmus", "Wernicke — high-dose IV thiamine before glucose"], ["Na 120", "Slow correction (see sodium chapter)"]])}` },
{ id: "complications", title: "Complications", html: `<p>Wernicke encephalopathy, hyponatraemia, hypokalaemia, VTE, Mallory–Weiss tear, malnutrition, depression; low birth weight.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Weekly weight/PUQE until improving; continue antiemetics as needed.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Vomiting in pregnancy", [F.s("PUQE, hydration, ketones, U&E"), F.a, F.d("HG criteria?"), F.a, F.b([["Yes", F.e("IV fluids + KCl, antiemetics, thiamine, VTE prophylaxis")], ["No", F.ok("Oral antiemetics, diet, review")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Dextrose without thiamine", "Wernicke", "Thiamine first"], ["Under-treating", "Suffering, termination requests", "Early combination antiemetics"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "IV fluid for hyperemesis?", "0.9% saline (or Hartmann's) with potassium as needed — not dextrose alone.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Nelson-Piercy C, Dean C, Shehmar M, et al. The management of nausea and vomiting in pregnancy and hyperemesis gravidarum (Green-top Guideline No. 69). BJOG. 2024;131:e1-e30. <a href="https://doi.org/10.1111/1471-0528.17739" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
