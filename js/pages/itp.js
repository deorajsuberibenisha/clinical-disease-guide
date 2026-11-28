/* Immune thrombocytopenia (ITP) — adults and children. NEW disease (batch N-4, 28 Nov 2026).
   Sources read directly: ASH 2019 ITP guideline (Neunert et al., Blood Adv 2019;3:3829, PMC6963252 — recommendations 1–21 read 28 Nov 2026:
   adults newly diagnosed <30 ×10⁹/L asymptomatic/minor bleeding → corticosteroids (conditional); ≥30 → observation (strong); admit if new and <20;
   prednisone 0.5–2 mg/kg/day or dexamethasone 40 mg/day × 4 days; total ≤6 weeks; haematology follow-up within 24–72 h; children no/minor bleeding →
   observation and outpatient care; non-life-threatening mucosal bleeding → prednisone 2–4 mg/kg/day (max 120 mg) 5–7 days; second line TPO-RA,
   rituximab, splenectomy); Updated International Consensus Report 2019 (Provan et al., Blood Adv 2019;3:3780, PMC6880896 — read: emergency
   treatment = IV corticosteroids + IVIg, platelet transfusion must not be postponed in life-threatening bleeding/ICH; H. pylori test in appropriate
   areas, HBV/HIV/HCV in adults, smear review, marrow not needed at diagnosis; pregnancy: gestational thrombocytopenia, epidural data 70–100);
   Bhutan National Guidelines on Appropriate Clinical Use of Blood (1st ed 2009) — platelet concentrates 'not indicated' in ITP except life-
   threatening GI, GU or CNS bleeding with severe thrombocytopenia; 1 unit raises count 10–20 ×10⁹/L; NEML 2025 — prednisolone 5/20 mg tablets,
   dexamethasone 4 mg tab/inj, methylprednisolone 500 mg inj, tranexamic acid tab/inj; NO intravenous immunoglobulin (only anti-tetanus/anti-rabies
   immunoglobulins listed), no eltrombopag/romiplostim/rituximab. IWG phase definitions (newly diagnosed/persistent/chronic) and <100 ×10⁹/L cut-off
   are standard — marked. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "itp",
title: "Immune Thrombocytopenia (ITP) — adults & children",
subtitle: "Isolated low platelets in a well person: confirm on the film, exclude other causes, observe most children, give a short steroid course to adults with counts under 30, and treat life-threatening bleeding with steroids plus platelets at once",
age: "All ages", specs: ["medicine", "paeds", "emerg"],
keywords: ["ITP", "immune thrombocytopenia", "idiopathic thrombocytopenic purpura", "low platelets", "thrombocytopenia", "petechiae", "purpura", "bruising child", "platelet count", "prednisolone ITP", "dexamethasone ITP", "IVIG", "platelet transfusion", "gestational thrombocytopenia", "chronic ITP"],
related: ["bleeding-adult", "transfusion-adult", "leukaemia-lymphoma", "dengue-adult", "dengue-child", "hiv-adult", "hsp-child", "anaemia-child"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">ITP is an autoimmune low platelet count with <b>no other cause found</b>. Most children recover by themselves; adults more often run a chronic course. Treat the <b>bleeding</b>, not the number ${r(1)} ${r(3)}.</p>
<div class="glance">
<div><h4>Confirm</h4><p>Isolated low platelets on FBC, normal Hb (unless bleeding) and white cells; film shows no blasts, no fragments, no clumping ${r(2)}.</p></div>
<div><h4>Children</h4><p>No or skin-only bleeding → <b>observe</b> as outpatient, whatever the count; steroids only for mucosal bleeding (prednisolone 2–4 mg/kg/day, max 120 mg, 5–7 days) ${r(1)}.</p></div>
<div><h4>Adults</h4><p>New ITP with count &lt;30 ×10⁹/L → prednisolone 0.5–2 mg/kg/day (total course ≤ 6 weeks) or dexamethasone 40 mg daily × 4 days; ≥30 and well → observe ${r(1)}.</p></div>
<div><h4>Life-threatening bleed</h4><p>IV methylprednisolone/dexamethasone + platelet transfusion now, tranexamic acid, urgent haematology; IVIg where obtainable ${r(2)} ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Platelet concentrates are <b>not indicated</b> in ITP except for life-threatening bleeding (GI, genitourinary, CNS) ${r(3)}. Intravenous immunoglobulin, eltrombopag, romiplostim and rituximab are <b>not on the NEML</b> — steroids are the main first-line treatment here ${r(4)}. Before calling it ITP, think of <b>dengue</b>, malaria, HIV, hepatitis, leukaemia and drugs ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "Definitions", html: `
${tbl(["Term", "Meaning"], [
["ITP", "Platelets &lt;100 ×10⁹/L with no other cause " + LB.exp("IWG DEFINITION — STANDARD")],
["Newly diagnosed", "Within 3 months of diagnosis " + LB.exp("IWG")],
["Persistent", "3–12 months " + LB.exp("IWG")],
["Chronic", "More than 12 months " + LB.exp("IWG")],
["Secondary ITP", "With HIV, hepatitis C, H. pylori, SLE, lymphoma/CLL, drugs " + r(2)]
])}
<p>Incidence about 2–5 per 100 000 people a year ${r(1)}. In children it often follows a viral infection and most remit within months ${LB.exp("STANDARD")}.</p>
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("ITP", [F.s("Autoantibodies and T cells against platelets"), F.a, F.s("Platelets destroyed in spleen and liver; marrow production also impaired " + r(1)), F.a, F.e("Low count → skin and mucosal bleeding; serious bleeding uncommon")])}` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ASH 2019", "Consensus 2019 / Bhutan", "This guide"], [
["Child, skin bleeding only", "Observe, outpatient (any count)", "Similar", "Observe; admit if far from care or follow-up unsure " + r(1)],
["Adult steroid choice", "Prednisone 0.5–2 mg/kg or dexamethasone 40 mg × 4 d", "Similar", "Both on NEML; dexamethasone if fast response needed " + r(1) + " " + r(4)],
["Platelet transfusion", "Not part of routine therapy", "Bhutan: only for life-threatening bleeding", "Never for numbers alone " + r(3)],
["Emergency", "—", "IV steroids + IVIg ± platelets; do not delay platelets in ICH", "Steroids + platelets (IVIg rarely available) " + r(2)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Petechiae, purpura and bruises; gum bleeding, nosebleeds, heavy periods, blood in urine or stool ${r(2)}.</li>
<li>The person is otherwise <b>well</b>: no fever, weight loss, bone pain, lymph nodes or big liver/spleen — if present, think leukaemia, lymphoma or infection ${P("leukaemia-lymphoma", "Leukaemia & lymphoma")}.</li>
<li>Serious bleeding (intracranial, major GI) is uncommon and mostly at counts &lt;20 ×10⁹/L ${LB.exp("STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 4-year-old boy from Wangdue has had petechiae on his legs for 2 days, 2 weeks after a cold. He is playful, with no nodes or spleen. Platelets 18 ×10⁹/L, Hb and white cells normal, film shows large platelets only. <b>ITP with skin bleeding only</b>: observe at home with clear bleeding advice and review in a few days; no steroids or platelets ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Pseudothrombocytopenia (clumping)", "Film shows clumps; repeat in citrate tube"],
["Dengue", "Fever, leucopenia, rising haematocrit " + P("dengue-adult", "Dengue")],
["Leukaemia / aplastic anaemia", "Other cytopenias, blasts, nodes, spleen " + P("leukaemia-lymphoma", "Leukaemia")],
["HIV, hepatitis C, H. pylori", "Secondary ITP — test adults " + r(2)],
["Drug-induced (heparin, quinine, valproate, sulfonamides)", "Timing with new drug " + LB.exp("STANDARD")],
["TTP / HUS / DIC", "Fragments on film, anaemia, kidney injury, abnormal clotting " + P("bleeding-adult", "Bleeding disorders")],
["Gestational thrombocytopenia, pre-eclampsia/HELLP", "Pregnancy; mild fall; BP, liver tests " + r(2)],
["Hypersplenism (cirrhosis)", "Big spleen, liver disease " + P("cirrhosis-adult", "Cirrhosis")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>FBC with <b>peripheral smear reviewed</b> by a trained person ${r(2)}.</li>
<li>Adults: HIV, hepatitis B and C; H. pylori (stool antigen or breath test) in high-prevalence areas such as ours ${r(2)}.</li>
<li>Blood group, clotting screen if bleeding; pregnancy test where relevant ${LB.exp("STANDARD")}.</li>
<li>Bone marrow not needed at diagnosis; consider if atypical, not responding, or before splenectomy ${r(2)}.</li>
</ul>
` },

{ id: "staging", title: "ITP management helper", html: `<div class="calc" data-calc="itpplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Children ${r(1)}</h3>
<ul>
<li>No bleeding or skin bleeding only: <b>observe</b> as an outpatient — no steroids, no IVIg, whatever the count. Admit if far from care, social concerns or diagnosis uncertain.</li>
<li>Non-life-threatening mucosal bleeding or poor quality of life: ${dr("prednisolone")} 2–4 mg/kg/day (max 120 mg) for 5–7 days, then stop. Not longer than 7 days.</li>
<li>Not responding: specialist second-line treatment (TPO receptor agonist, rituximab; splenectomy last).</li>
</ul>
<h3>Adults ${r(1)}</h3>
<ul>
<li>Count ≥ 30 ×10⁹/L, no or minor bleeding: observe. Consider steroids if near 30, older than 60, on antiplatelets/anticoagulants, or a procedure is due.</li>
<li>Count &lt;30 ×10⁹/L: ${dr("prednisolone")} 0.5–2 mg/kg/day (taper; whole course ≤ 6 weeks) <b>or</b> ${dr("dexamethasone")} 40 mg daily for 4 days.</li>
<li>Newly diagnosed with &lt;20 ×10⁹/L: admission suggested. Haematology follow-up within 24–72 hours.</li>
<li>Monitor steroid side effects: BP, glucose, mood, sleep, stomach, eyes, bones.</li>
</ul>
<h3>Life-threatening bleeding (any age) ${r(2)} ${r(3)}</h3>
<ul>
<li>IV ${dr("methylprednisolone")} or ${dr("dexamethasone")}; <b>platelet transfusion — do not delay</b>, especially intracranial haemorrhage; ${dr("tranexamic_acid", "tranexamic acid")}; IVIg if it can be obtained; urgent haematology/neurosurgery.</li>
</ul>
<h3>Everyone</h3>
<ul><li>Avoid aspirin, NSAIDs and IM injections; no contact sports while count is very low; menstrual control (tranexamic acid) ${LB.exp("STANDARD")}.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "NEML 2025"], [
[dr("prednisolone"), "Child 2–4 mg/kg/day (max 120 mg) 5–7 days; adult 0.5–2 mg/kg/day, course ≤ 6 weeks " + r(1), "5 mg, 20 mg tablets"],
[dr("dexamethasone"), "Adult 40 mg daily × 4 days; child 0.6 mg/kg/day (max 40 mg) × 4 days " + r(1), "4 mg tablet, 4 mg/mL injection"],
[dr("methylprednisolone"), "Emergency IV (specialist dose) " + r(2), "500 mg injection"],
[dr("tranexamic_acid", "Tranexamic acid"), "Mucosal/menstrual bleeding " + LB.exp("STANDARD"), "Tablet and injection"],
["IVIg, TPO-RAs, rituximab", "Specialist " + r(1), "Not on NEML " + r(4)]
])}
` },

{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Pregnancy:</b> mild falls near term are usually gestational thrombocytopenia (counts below 100 are uncommon, below 80 rare); check smear, BP and liver tests for pre-eclampsia/HELLP ${r(2)}. Plan delivery and anaesthesia with obstetrics and haematology; epidural data are reassuring at 70–100 ×10⁹/L ${r(2)}. See ${P("preeclampsia-preg", "Pre-eclampsia")}.</li>
<li><b>Older adults:</b> more bleeding; lower threshold for treatment ${r(1)}.</li>
<li><b>HIV:</b> treat HIV (ART raises platelets) ${LB.exp("STANDARD")} ${P("hiv-adult", "HIV")}.</li>
</ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Child with count 5 ×10⁹/L, skin bruising only, lives 2 days' walk from a hospital", "Admit for observation (distance is a reason to admit) " + r(1)],
["Adult with headache and count 8 ×10⁹/L", "Treat as intracranial bleed until CT: IV steroids + platelets now " + r(2)],
["Parents ask for platelet transfusion 'to raise the count'", "Explain it is destroyed within hours and not indicated without serious bleeding " + r(3)],
["Fever and low platelets in monsoon", "Dengue/scrub typhus first, not ITP " + P("dengue-child", "Dengue (child)")]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Intracranial and GI haemorrhage (uncommon), heavy menstrual bleeding with anaemia, steroid side effects, chronic ITP ${r(1)} ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>FBC weekly at first, then less often as count recovers ${LB.exp("STANDARD")}.</li><li>Children not remitting by 12 months, or adults with persistent/chronic ITP: haematology review for second-line therapy ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Petechiae do not blanch on pressure.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Isolated low platelets", [F.s("FBC + smear: confirm, exclude other causes"), F.a, F.d("Life-threatening bleeding?"), F.a, F.b([["Yes", F.e("IV steroids + platelets + tranexamic acid; urgent specialist")], ["No", F.d("Child or adult?")]]), F.a, F.b([["Child", F.s("Skin only → observe; mucosal → 5–7 days prednisolone")], ["Adult", F.s("&lt;30 → short steroid course; ≥30 → observe")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Steroids for every child with low count", "Side effects, may mask leukaemia", "Observe skin-only bleeding " + r(1)],
["Prophylactic platelet transfusion in ITP", "Wasted, destroyed quickly, antibodies", "Only for life-threatening bleeding " + r(3)],
["Missing dengue or leukaemia", "Wrong treatment", "History, smear, other counts"],
["Long steroid courses", "Toxicity without benefit", "Adults ≤ 6 weeks, children ≤ 7 days " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Well 3-year-old, petechiae only, platelets 15 ×10⁹/L. Management?", "Observation as an outpatient with safety advice (ASH 2019) — no steroids or IVIg.")}
${qa("Intern/MO", "When are platelets transfused in ITP (Bhutan blood guideline)?", "Only for life-threatening GI, genitourinary or CNS bleeding.")}
${qa("Registrar", "Adult new ITP, count 22 ×10⁹/L, gum bleeding. Steroid options?", "Prednisolone 0.5–2 mg/kg/day (course ≤ 6 weeks) or dexamethasone 40 mg/day for 4 days.")}
${qa("Specialist", "Which tests for secondary ITP in adults?", "HIV, hepatitis B and C, H. pylori in high-prevalence regions; immunoglobulins; marrow only if atypical.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Neunert C, et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv 2019;3(23):3829–66. doi:10.1182/bloodadvances.2019000966. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/" target="_blank" rel="noopener">PMC6963252</a></li>
<li id="ref-2">Provan D, et al. Updated international consensus report on the investigation and management of primary immune thrombocytopenia. Blood Adv 2019;3(22):3780–817. doi:10.1182/bloodadvances.2019000812. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6880896/" target="_blank" rel="noopener">PMC6880896</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Guidelines on Appropriate Clinical Use of Blood (1st edition, 2009).</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["ASH 2019 recommendations 1–21", "<span class='pass'>Read</span>", "PMC, 28 Nov 2026"], ["International consensus 2019", "<span class='pass'>Read</span>", "Work-up, emergency, pregnancy"], ["Bhutan blood-use guideline", "<span class='pass'>Read</span>", "Platelet triggers"], ["NEML 2025", "<span class='pass'>Checked</span>", "No IVIg"], ["Phase definitions", "<span class='unv'>Standard</span>", "IWG; marked"]], "qc")}` }
]
});
})();
