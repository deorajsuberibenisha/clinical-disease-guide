/* Leukaemia and lymphoma — recognition and first management, all ages. NEW disease (batch N-3, 28 Nov 2026).
   Sources read directly: NICE NG12 §1.10 Haematological cancers (read in browser 28 Nov 2026: very urgent FBC in adults with pallor, persistent
   fatigue, unexplained fever, persistent/recurrent infection, generalised lymphadenopathy, unexplained bruising, bleeding, petechiae or
   hepatosplenomegaly; children — immediate specialist assessment for unexplained petechiae or hepatosplenomegaly; very urgent FBC for pallor,
   fatigue, fever, persistent infection, generalised lymphadenopathy, persistent/unexplained bone pain, bruising or bleeding; myeloma ≥ 60 with
   persistent bone pain/unexplained fracture — FBC, calcium, ESR/PV, SPEP, serum free light chains (urine Bence-Jones); NHL/Hodgkin — referral for
   unexplained lymphadenopathy or splenomegaly, considering fever, night sweats, breathlessness, pruritus, weight loss; children within 48 h);
   Merck Manual Professional — Overview of leukemia (Feb 2026: WHO classification; acute vs chronic; cytopenias), Acute lymphoblastic leukemia
   (updated Nov 2026: commonest childhood cancer, ~75% of childhood leukaemias; fatigue, pallor, infection, bone pain, headache, bruising,
   bleeding; CNS and testicular involvement), Chronic myeloid leukemia (Oct 2026: Philadelphia chromosome 90–95%; BCR::ABL; TKIs);
   Bhutan PBCR 2019–2022 (childhood cancers: age-adjusted 76.5 per million boys, 94.2 per million girls; lymphoid leukaemia the leading childhood
   cancer in both sexes, NHL, Hodgkin among boys' leading sites); NEML 2025 (allopurinol 100 mg; cyclophosphamide; meropenem and piperacillin–
   tazobactam as used on sepsis pages; no imatinib found). Tumour lysis, leukostasis and neutropenic fever details are standard practice — marked.
   Covers both the 'Childhood leukaemia' and 'Leukaemia and lymphoma (adult)' items of the remaining-diseases list. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "leukaemia-lymphoma",
title: "Leukaemia & Lymphoma — all ages",
subtitle: "Pallor, fever, bruising, bone pain, lumps or a big spleen: do a full blood count and film the same day, refer urgently, and treat neutropenic fever and tumour lysis as emergencies while waiting for specialist care",
age: "All ages", specs: ["onc", "medicine", "paeds"],
keywords: ["leukaemia", "leukemia", "acute lymphoblastic leukaemia", "ALL", "acute myeloid leukaemia", "AML", "chronic myeloid leukaemia", "CML", "chronic lymphocytic leukaemia", "CLL", "lymphoma", "Hodgkin lymphoma", "non-Hodgkin lymphoma", "blasts on film", "pancytopenia", "petechiae child", "hepatosplenomegaly", "neutropenic fever", "tumour lysis syndrome", "leukostasis", "B symptoms", "night sweats"],
related: ["lymphnode-adult", "anaemia-adult", "bleeding-adult", "fever-approach", "sepsis-adult", "sepsis-child", "palliative-child", "palliative-care"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Leukaemia is the commonest cancer in Bhutanese children ${r(3)}, and leukaemias and lymphomas occur at every age. The first doctor's job is <b>recognition</b> — a same-day full blood count and film — then urgent referral, and safe management of infection and bleeding until specialist treatment starts ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect leukaemia</h4><p>Pallor, fatigue, fever, repeated infections, bruising, bleeding, petechiae, bone pain (children), big liver/spleen, lymph nodes ${r(1)}.</p></div>
<div><h4>Suspect lymphoma</h4><p>Painless persistent lymph nodes or spleen, with fever, night sweats, weight loss, itching or breathlessness ${r(1)}.</p></div>
<div><h4>Test</h4><p>FBC with <b>peripheral blood film</b> the same day; children with unexplained petechiae or hepatosplenomegaly — immediate specialist assessment ${r(1)}.</p></div>
<div><h4>Emergencies</h4><p>Neutropenic fever (antibiotics within 1 hour), bleeding, tumour lysis, very high white count, airway compression by a mediastinal mass ${LB.exp("STANDARD PRACTICE")}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bone-marrow examination, flow cytometry and chemotherapy start at JDWNRH; many patients continue treatment in India ${LB.loc()}. Childhood cancers in Bhutan: about 77–94 per million children a year, with lymphoid leukaemia the leading type ${r(3)}. Allopurinol is on the NEML; targeted drugs such as imatinib were not found ${r(4)}. For children, involve the paediatric palliative and support teams early — see ${P("palliative-child", "Palliative care — children")}.</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Type", "Who", "Typical picture"], [
["Acute lymphoblastic leukaemia (ALL)", "Mostly children (commonest childhood cancer, ~75% of childhood leukaemias); adults too", "Days–weeks: pallor, fever, bruising, bone pain, nodes, liver/spleen; CNS and testis can be involved " + r(2)],
["Acute myeloid leukaemia (AML)", "Mostly adults", "Cytopenias, infections, bleeding; gum swelling in some " + LB.exp("STANDARD")],
["Chronic myeloid leukaemia (CML)", "Adults", "Big spleen, very high white count; Philadelphia chromosome in 90–95%; tyrosine kinase inhibitors " + r(2)],
["Chronic lymphocytic leukaemia (CLL)", "Older adults", "Lymphocytosis, nodes; often found by chance " + LB.exp("STANDARD")],
["Hodgkin lymphoma", "Young adults and older people", "Painless neck/mediastinal nodes, B symptoms, itching " + r(1)],
["Non-Hodgkin lymphoma", "All ages", "Nodes, spleen, extranodal masses (gut, tonsil, skin); B symptoms " + r(1)],
["Myeloma", "Over 60", "Bone pain, fractures, anaemia, high calcium, kidney failure — see NG12 tests " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Leukaemia", [F.s("Genetic change in a blood stem cell"), F.a, F.s("Uncontrolled growth of abnormal cells; marrow replaced"), F.a, F.e("Anaemia, neutropenia (infection), thrombocytopenia (bleeding); organ infiltration")])}<p>Lymphomas arise from lymphocytes in nodes and other tissues ${LB.exp("STANDARD")}.</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG12", "Local reality", "This guide"], [
["Adult with possible leukaemia symptoms", "Very urgent FBC (within 48 h)", "FBC available at most hospitals; film needs a pathologist", "Same-day FBC and film; refer abnormal films urgently " + r(1) + " " + LB.loc()],
["Child with petechiae or big liver/spleen", "Immediate specialist assessment", "Paediatrician at referral hospital", "Same-day referral " + r(1)],
["Lymph node referral", "Unexplained lymphadenopathy/splenomegaly", "TB is common and mimics lymphoma", "Biopsy persistent nodes — do not give empirical TB treatment without tissue " + P("lymphnode-adult", "Lymphadenopathy")]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Bone-marrow failure</b>: pallor and tiredness (anaemia), fever and repeated infections (neutropenia), bruising, petechiae, gum or nose bleeding (low platelets) ${r(1)} ${r(2)}.</li>
<li><b>Infiltration</b>: lymph nodes, liver and spleen enlargement, bone pain or limp in children, gum swelling, skin lumps, headache or cranial nerve palsy (CNS), testicular swelling ${r(2)}.</li>
<li><b>Lymphoma</b>: painless rubbery nodes over weeks, fever, drenching night sweats, weight loss over 10%, itching; cough or facial swelling from a mediastinal mass ${r(1)} ${LB.exp("B SYMPTOM DEFINITION STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 5-year-old girl from Tsirang has 3 weeks of pallor, fever, leg pain and bruises; liver and spleen are palpable and there are petechiae on her legs. <b>Suspected acute leukaemia</b>: same-day FBC and film (blasts, low platelets), immediate referral to the JDWNRH paediatric team; if febrile with neutropenia, start IV antibiotics now ${r(1)} ${r(2)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Infections (viral, TB, malaria, typhoid, kala-azar)", "Fever with spleen; blood film and tests " + P("fever-approach", "Fever")],
["Aplastic anaemia", "Pancytopenia without nodes or organomegaly"],
["Immune thrombocytopenia", "Isolated low platelets, well child"],
["Megaloblastic or iron-deficiency anaemia", "Indices, film " + P("anaemia-adult", "Anaemia")],
["TB lymphadenitis", "Matted nodes, sinus; biopsy decides " + P("lymphnode-adult", "Lymphadenopathy")],
["Juvenile idiopathic arthritis", "Joint pain in children — check FBC before steroids"]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>FBC with peripheral smear</b> (blasts, cytopenias, very high white count) ${r(1)}.</li>
<li>Kidney function, uric acid, potassium, phosphate, calcium, LDH (tumour lysis risk) ${LB.exp("STANDARD")}.</li>
<li>Clotting screen (DIC, especially promyelocytic leukaemia) ${LB.exp("STANDARD")}.</li>
<li>Chest X-ray (mediastinal mass), blood cultures if febrile ${LB.exp("STANDARD")}.</li>
<li>Specialist: bone-marrow aspirate/biopsy, flow cytometry, cytogenetics (Philadelphia chromosome), lymph-node excision biopsy, CT staging ${r(2)}.</li>
<li>Myeloma (≥ 60 with bone pain or fracture): FBC, calcium, ESR, serum protein electrophoresis, free light chains or urine Bence-Jones ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Referral helper", html: `<div class="calc" data-calc="haemrefer"></div>` },

{ id: "manage", title: "Management", html: `
<h3>While waiting for specialist care</h3>
<ul>
<li><b>Neutropenic fever</b> (temperature ≥ 38 °C with low neutrophils, or a patient on chemotherapy with fever): cultures, then broad-spectrum IV antibiotics within 1 hour (e.g. ${dr("piptazo", "piperacillin–tazobactam")}) ${LB.exp("STANDARD — SEE FEVER APPROACH")}. See ${P("fever-approach", "Fever approach")} and ${P("sepsis-adult", "Sepsis")}.</li>
<li><b>Bleeding</b>: platelet and plasma transfusion as needed; avoid IM injections, aspirin and NSAIDs ${LB.exp("STANDARD")}.</li>
<li><b>Anaemia</b>: transfuse if symptomatic; very high white count — transfuse cautiously (leukostasis) ${LB.exp("STANDARD")}.</li>
<li><b>Tumour lysis prevention</b>: IV fluids and ${dr("allopurinol")} before chemotherapy; monitor potassium, phosphate, uric acid, creatinine ${LB.exp("STANDARD")}.</li>
<li><b>Mediastinal mass</b>: avoid lying flat and sedation/anaesthesia without specialist airway planning ${LB.exp("STANDARD")}.</li>
<li>Avoid steroids before diagnosis — they can mask leukaemia/lymphoma on biopsy ${LB.exp("STANDARD")}.</li>
</ul>
<h3>Specialist treatment</h3>
<ul>
<li>Acute leukaemias: multi-agent chemotherapy in phases; childhood ALL is often curable with full treatment ${r(2)} ${LB.exp("CURE RATES NOT QUOTED")}.</li>
<li>CML: oral tyrosine kinase inhibitor (e.g. imatinib) — long-term ${r(2)}.</li>
<li>Lymphomas: chemotherapy ± radiotherapy by type and stage ${LB.exp("STANDARD")}.</li>
<li>Psychosocial support, nutrition, vaccination review, infection prevention ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("allopurinol"), "Tumour lysis prevention " + LB.exp("STANDARD"), "100 mg " + r(4)],
[dr("piptazo", "Piperacillin–tazobactam"), "Neutropenic fever " + LB.exp("STANDARD"), "Listed (referral hospitals)"],
[dr("meropenem"), "Neutropenic fever, resistant organisms " + LB.exp("STANDARD"), "Listed (referral hospitals)"],
["Imatinib", "CML (oncologist) " + r(2), "Not found " + r(4)],
["Chemotherapy", "Oncology/haematology only", "Several agents listed (e.g. cyclophosphamide)"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children:</b> leg pain, limp, refusal to walk, pallor and bruising — FBC before treating as 'arthritis' or 'growing pains' ${r(1)} ${r(2)}.</li><li><b>Pregnancy:</b> specialist care; some treatments can be given after the first trimester ${LB.exp("STANDARD")}.</li><li><b>HIV:</b> higher lymphoma risk ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Fever in a child on chemotherapy, BHU far away", "IV/IM antibiotic dose now if available, urgent transfer — do not wait for counts " + LB.exp("STANDARD")],
["White count over 100 × 10⁹/L with breathlessness or confusion", "Leukostasis — fluids, urgent haematology, avoid rapid transfusion " + LB.exp("STANDARD")],
["Persistent neck nodes treated as TB without improvement", "Excision biopsy " + P("lymphnode-adult", "Lymphadenopathy")],
["Family wants traditional treatment first", "Explain curability and urgency; involve family and religious leaders " + LB.loc()]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Sepsis, bleeding, DIC, tumour lysis syndrome (high potassium, phosphate, uric acid; kidney failure), leukostasis, CNS involvement, superior vena cava or airway obstruction, treatment toxicity ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Shared care with the treating centre; check FBC as instructed; know the fever plan.</li><li>Late effects in childhood survivors (growth, heart, fertility, learning) ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. The peripheral blood film is the key first test.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Possible blood cancer", [F.s("Pallor, fever, bruising, bone pain, nodes, spleen"), F.a, F.s("Same-day FBC + film"), F.a, F.d("Blasts, cytopenias or very high WBC?"), F.a, F.b([["Yes", F.e("Urgent haematology/paediatric oncology; manage fever, bleeding, tumour lysis")], ["No, but nodes/spleen persist", F.s("Biopsy / specialist referral")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Steroids before diagnosis", "Masks leukaemia/lymphoma", "FBC/film and biopsy first " + LB.exp("STANDARD")],
["Delaying antibiotics in neutropenic fever", "Rapid death from sepsis", "Within 1 hour " + LB.exp("STANDARD")],
["Child's leg pain called 'growing pains'", "Missed leukaemia", "FBC if pallor, bruising or fever " + r(1)],
["Empirical TB treatment for nodes", "Missed lymphoma", "Biopsy persistent nodes"]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Child with unexplained petechiae and hepatosplenomegaly — NICE action?", "Immediate specialist assessment for leukaemia.")}
${qa("Intern/MO", "First test for suspected leukaemia?", "Full blood count with peripheral blood film, same day.")}
${qa("Registrar", "Tests for myeloma in a 65-year-old with back pain?", "FBC, calcium, ESR, serum protein electrophoresis and free light chains (or urine Bence-Jones).")}
${qa("Specialist", "What drives CML and how is it treated?", "BCR::ABL from the Philadelphia chromosome; tyrosine kinase inhibitors such as imatinib.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12), §1.10 Haematological cancers. <a href="https://www.nice.org.uk/guidance/ng12" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Merck Manual Professional Edition. Overview of leukemia (Feb 2026); Acute lymphoblastic leukemia (Nov 2026); Chronic myeloid leukemia (Oct 2026).</li>
<li id="ref-3">Ministry of Health, Bhutan. Cancer incidence and mortality in Bhutan 2019–2022 (childhood cancers).</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG12 §1.10", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Merck leukaemia pages", "<span class='pass'>Read</span>", "2026 updates"], ["Bhutan PBCR childhood cancers", "<span class='pass'>Read</span>", ""], ["Emergency management details", "<span class='unv'>Standard practice</span>", "Marked; no single guideline read"], ["Calculator", "<span class='pass'>New</span>", "haemrefer"]], "qc")}` }
]
});
})();
