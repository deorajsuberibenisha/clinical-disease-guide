/* Symptom care during chemotherapy — adults (child notes). NEW topic (batch N-7, 28 Nov 2026).
   Sources read directly: MASCC antiemetic consensus recommendations for resource-limited settings (Bosnjak SM, et al. Support Care Cancer
   2025;33(3):181, doi:10.1007/s00520-025-09211-4 — abstract read 28 Nov 2026: MASCC/ESMO 2023 best regimens when available; for HEC (cisplatin,
   AC) without an NK1-receptor antagonist: single doses of 5-HT3 antagonist + dexamethasone + olanzapine before chemotherapy, then olanzapine and
   dexamethasone on days 2–4; O10PD (olanzapine 10 mg, palonosetron, dexamethasone) 'better'; ondansetron/granisetron 'good' if palonosetron
   unaffordable; no guideline possible for NK1-free MEC alternatives); MASCC/ESMO 2023 update introduction (Herrstedt J, et al. Support Care Cancer
   2024;32:57) — citation only; NICE CG151 Neutropenic sepsis (read 28 Nov 2026: suspect in anyone unwell on anticancer treatment, refer
   immediately; diagnose if neutrophils ≤0.5×10⁹/L with temperature >38 °C or sepsis signs; piperacillin–tazobactam monotherapy as empiric IV
   therapy; do not remove central lines initially; risk-stratify with a validated score — outpatient therapy for low risk; fluoroquinolone
   prophylaxis when significant neutropenia is expected (leukaemia, transplant, solid tumours); no routine G-CSF); this app's fever-approach page
   (neutropenic sepsis detail); NEML 2025 (ondansetron 2 mg/4 mg tab and inj, olanzapine 10 mg, dexamethasone, metoclopramide, loperamide,
   senna, nystatin, fluconazole 100 mg; no NK1 antagonist, no palonosetron found). Mucositis, diarrhoea, constipation, fatigue and extravasation
   care are standard practice — marked. Covers remaining-list item 'Symptom care during chemotherapy'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "chemo-symptoms",
title: "Symptom Care During Chemotherapy",
subtitle: "Prevent nausea with the right antiemetic combination for each regimen, treat any fever with low neutrophils as an emergency, and manage mouth sores, diarrhoea, constipation, fatigue and drip-site leaks so that treatment can continue safely",
age: "Adult (child notes)", specs: ["onc", "medicine", "emerg", "paeds"],
keywords: ["chemotherapy side effects", "chemotherapy-induced nausea and vomiting", "CINV", "antiemetic", "ondansetron", "olanzapine antiemetic", "dexamethasone antiemetic", "febrile neutropenia", "neutropenic sepsis", "mucositis", "mouth ulcers chemotherapy", "chemotherapy diarrhoea", "extravasation", "cancer fatigue", "supportive care oncology"],
related: ["fever-approach", "leukaemia-lymphoma", "breast-cancer-adult", "colorectal-cancer-adult", "palliative-care", "palliative-child", "sepsis-adult", "ge-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Good symptom care keeps patients on schedule and alive. The two priorities are <b>preventing nausea and vomiting</b> and treating <b>fever during neutropenia</b> as an emergency ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Nausea</h4><p>Match prophylaxis to the regimen. Without an NK1 antagonist (as in Bhutan): ondansetron + dexamethasone + <b>olanzapine</b> for highly emetogenic chemotherapy ${r(1)}.</p></div>
<div><h4>Fever</h4><p>Unwell or temperature &gt;38 °C on chemotherapy → treat as neutropenic sepsis: cultures, IV ${dr("piptazo", "piperacillin–tazobactam")} immediately ${r(2)} ${P("fever-approach", "Fever approach")}.</p></div>
<div><h4>Mouth, gut</h4><p>Mouth care, nystatin/fluconazole for thrush; loperamide and fluids for diarrhoea (exclude infection); laxatives with opioids/antiemetics ${LB.exp("STANDARD")}.</p></div>
<div><h4>Leaks</h4><p>Pain or swelling at the drip site → stop the infusion, aspirate, elevate, call oncology (extravasation) ${LB.exp("STANDARD")}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Ondansetron, olanzapine, dexamethasone, metoclopramide, loperamide, senna, nystatin and fluconazole are on the NEML; <b>aprepitant/fosaprepitant and palonosetron were not found</b> ${r(3)}. Chemotherapy is given at JDWNRH; many patients live far away — give a written fever plan and the oncology ward phone number ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "Emetic risk of chemotherapy", html: `
${tbl(["Risk group", "Examples"], [
["High (HEC)", "Cisplatin; anthracycline + cyclophosphamide (AC) " + r(1)],
["Moderate (MEC)", "Carboplatin (AUC ≥5), oxaliplatin, irinotecan, many others " + r(1) + " " + LB.exp("EXAMPLES STANDARD")],
["Low / minimal", "Many targeted drugs, weekly taxanes, vincristine " + LB.exp("STANDARD")]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("CINV", [F.s("Chemotherapy releases serotonin from gut cells; substance P centrally"), F.a, F.s("Acute (first 24 h) and delayed (days 2–5) phases"), F.a, F.e("5-HT3 antagonists, dexamethasone, NK1 antagonists, olanzapine")])} <p>${LB.exp("STANDARD")}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "MASCC/ESMO 2023 (best)", "MASCC resource-limited 2025", "This guide"], [
["HEC prophylaxis", "Includes NK1 antagonist", "5-HT3 + dexamethasone + olanzapine; then olanzapine + dexamethasone days 2–4", "Resource-limited regimen with ondansetron " + r(1)],
["5-HT3 choice", "Palonosetron preferred in some settings", "Ondansetron/granisetron acceptable", "Ondansetron (NEML) " + r(1) + " " + r(3)],
["MEC without NK1", "—", "No recommendation possible (limited data)", "Oncologist decides " + r(1)]
])}
` },

{ id: "presentation", title: "Common problems", html: `
${tbl(["Problem", "Typical timing / signs"], [
["Nausea/vomiting", "Acute within 24 h; delayed days 2–5; anticipatory before cycles " + LB.exp("STANDARD")],
["Neutropenic fever", "Usually 7–14 days after chemotherapy; fever may be the only sign " + r(2) + " " + LB.exp("TIMING STANDARD")],
["Mucositis", "Sore mouth, ulcers, poor intake from day 5–14 " + LB.exp("STANDARD")],
["Diarrhoea", "Irinotecan, 5-FU/capecitabine; dehydration risk " + LB.exp("STANDARD")],
["Constipation", "Vincristine, ondansetron, opioids " + LB.exp("STANDARD")],
["Fatigue, low mood", "Common; exclude anaemia, thyroid, depression " + LB.exp("STANDARD")],
["Extravasation", "Burning, swelling at cannula during infusion " + LB.exp("STANDARD")]
])}
<h3>The typical patient</h3>
<p>A 46-year-old woman from Punakha on AC chemotherapy for breast cancer vomited for 3 days after her first cycle despite ondansetron alone. <b>Inadequate HEC prophylaxis</b>: next cycle ondansetron + dexamethasone + olanzapine 10 mg before chemotherapy, then olanzapine + dexamethasone on days 2–4 ${r(1)} ${P("breast-cancer-adult", "Breast cancer")}.</p>
` },

{ id: "ddx", title: "Do not miss", html: `
${tbl(["Symptom on chemotherapy", "Also consider"], [
["Vomiting", "Bowel obstruction, hypercalcaemia, brain metastases, raised ICP " + P("brain-tumour-adult", "Brain tumours")],
["Fever", "Neutropenic sepsis first; also line infection, pneumonia, UTI " + P("fever-approach", "Fever")],
["Breathlessness", "Pulmonary embolism, pneumonia, anaemia, effusion " + P("vte-adult", "VTE")],
["Diarrhoea", "C. difficile, infection, neutropenic enterocolitis " + LB.exp("STANDARD")],
["Back pain, leg weakness", "Cord compression " + P("cord-compression-adult", "Cord compression")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Fever: FBC (neutrophils), cultures (blood, line, urine), kidney/liver tests, CRP, lactate; chest X-ray only if indicated ${r(2)}.</li>
<li>Vomiting: electrolytes, calcium, kidney function, glucose ${LB.exp("STANDARD")}.</li>
<li>Diarrhoea: stool culture, C. difficile, electrolytes ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "Chemotherapy symptom helper", html: `<div class="calc" data-calc="cinvplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Nausea and vomiting ${r(1)}</h3>
<ul>
<li>HEC without NK1 antagonist: ${dr("ondansetron")} + ${dr("dexamethasone")} + ${dr("olanzapine")} (10 mg) before chemotherapy; olanzapine + dexamethasone days 2–4.</li>
<li>Moderate/low: per oncology protocol (commonly 5-HT3 antagonist ± dexamethasone) ${LB.exp("STANDARD")}.</li>
<li>Breakthrough: ${dr("metoclopramide")} or extra olanzapine; check for other causes ${LB.exp("STANDARD")}.</li>
<li>Olanzapine causes sedation — warn about driving and falls ${LB.exp("STANDARD")}.</li>
</ul>
<h3>Neutropenic sepsis ${r(2)}</h3>
<ul>
<li>Suspect in anyone unwell on anticancer treatment; refer immediately; give IV piperacillin–tazobactam without waiting for the count.</li>
<li>Confirm: neutrophils ≤0.5 ×10⁹/L with temperature &gt;38 °C or sepsis signs; risk-stratify — low risk may complete treatment as outpatient.</li>
<li>Prevention: fluoroquinolone (ciprofloxacin) prophylaxis when significant neutropenia is expected; no routine G-CSF.</li>
</ul>
<h3>Other symptoms ${LB.exp("STANDARD")}</h3>
<ul>
<li>Mouth: soft brush, salt or bicarbonate rinses, ${dr("nystatin")} or ${dr("fluconazole")} for thrush, analgesia; check intake.</li>
<li>Diarrhoea: fluids/ORS, ${dr("loperamide")} once infection excluded; admit if severe, febrile or dehydrated.</li>
<li>Constipation: ${dr("senna")} and fluids, especially with vincristine, ondansetron and opioids.</li>
<li>Fatigue: check Hb, thyroid, mood; gentle exercise; sleep.</li>
<li>Extravasation: stop, aspirate, elevate, cold (most) or warm (vinca alkaloids) compress per protocol, oncology review.</li>
<li>Tumour lysis and cord compression: see ${P("leukaemia-lymphoma", "Leukaemia & lymphoma")} and ${P("cord-compression-adult", "Cord compression")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("ondansetron"), "5-HT3 antagonist " + r(1), "2/4 mg tab, injection"],
[dr("olanzapine"), "10 mg in HEC regimens " + r(1), "10 mg tablet"],
[dr("dexamethasone"), "Antiemetic backbone " + r(1), "Tablet, injection"],
[dr("metoclopramide"), "Breakthrough nausea " + LB.exp("STANDARD"), "Tablet, injection"],
[dr("piptazo", "Piperacillin–tazobactam"), "Neutropenic sepsis " + r(2), "Referral hospitals"],
[dr("loperamide"), "Diarrhoea (no infection) " + LB.exp("STANDARD"), "Listed"],
["Aprepitant / palonosetron", "Best HEC regimens " + r(1), "Not found " + r(3)]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children:</b> neutropenic fever plan as for adults; antiemetic doses per paediatric oncology; see ${P("leukaemia-lymphoma", "Leukaemia")} ${P("palliative-child", "Palliative care (child)")}.</li><li><b>Older adults:</b> dehydration and falls with olanzapine/sedation ${LB.exp("STANDARD")}.</li><li><b>Diabetes:</b> dexamethasone raises glucose — monitor ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Fever at home 10 days after chemotherapy, 4 hours from hospital", "First antibiotic dose at nearest facility; travel now " + r(2)],
["Vomiting despite full prophylaxis", "Check calcium, obstruction, brain; add olanzapine/metoclopramide"],
["Severe mouth ulcers, not eating", "Analgesia, antifungal, fluids; tell oncology (dose delay)"],
["Patient wants to stop chemotherapy due to nausea", "Optimise the next cycle's regimen before deciding " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Dehydration and AKI, electrolyte disturbance, sepsis, malnutrition, treatment delays, tissue necrosis after extravasation ${r(2)} ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Ask about nausea, intake, bowel habit and fever at every cycle; adjust the next cycle's antiemetics ${LB.exp("STANDARD")}.</li><li>Written fever card with phone numbers ${LB.loc()}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Patient on chemotherapy, unwell", [F.d("Fever or sepsis signs?"), F.a, F.b([["Yes", F.e("Neutropenic sepsis: cultures, IV piperacillin–tazobactam now")], ["No", F.s("Nausea / mouth / bowel / fatigue — symptom plan; review next cycle")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for the neutrophil count before antibiotics", "Death from sepsis", "Treat immediately " + r(2)],
["Ondansetron alone for cisplatin/AC", "Severe delayed vomiting", "Add dexamethasone + olanzapine " + r(1)],
["Loperamide for infective diarrhoea", "Toxic megacolon", "Exclude infection first"],
["Forgetting laxatives with ondansetron/opioids", "Constipation, obstruction", "Prophylactic senna"]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Definition of neutropenic sepsis (NICE)?", "Neutrophils ≤0.5×10⁹/L with temperature >38 °C or other signs of significant sepsis during anticancer treatment.")}
${qa("Intern/MO", "Empiric antibiotic (NICE CG151)?", "Piperacillin–tazobactam monotherapy.")}
${qa("Registrar", "HEC antiemetic regimen without an NK1 antagonist (MASCC 2025)?", "5-HT3 antagonist + dexamethasone + olanzapine before chemotherapy; olanzapine + dexamethasone days 2–4.")}
${qa("Specialist", "Is routine G-CSF recommended to prevent neutropenic sepsis?", "No, unless part of the regimen or to maintain dose intensity.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Bosnjak SM, et al. MASCC antiemetic consensus recommendations: resource-limited settings. Support Care Cancer 2025;33(3):181. doi:10.1007/s00520-025-09211-4 (based on the MASCC/ESMO 2023 update: Herrstedt J, et al. Support Care Cancer 2024;32:57).</li>
<li id="ref-2">National Institute for Health and Care Excellence. Neutropenic sepsis: prevention and management in people with cancer (CG151). <a href="https://www.nice.org.uk/guidance/cg151" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["MASCC resource-limited 2025", "<span class='pass'>Abstract read</span>", "28 Nov 2026"], ["NICE CG151", "<span class='pass'>Read</span>", ""], ["Mucositis, diarrhoea, extravasation", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
