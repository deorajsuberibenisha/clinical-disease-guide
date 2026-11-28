/* Pancytopenia and aplastic anaemia — adults and children. NEW disease (batch N-5, 28 Nov 2026).
   Sources read directly: ASH 2026 guidelines for severe and very severe acquired aplastic anemia (Scheinberg et al., Blood Adv 2026;10(17):5962–90,
   PMC13546908, read 28 Nov 2026: AA = pancytopenia + hypocellular marrow, incidence 1.5–7 per million/year; bone marrow aspirate and biopsy essential
   (good practice); PNH clone, somatic mutation and telomere-length testing; matched-sibling HCT over IST if <40 (recs 13–14), IST over HCT if >40
   (15); IST + eltrombopag (22–23); second-line within 6 months of ATG if no response (30–31; very severe = neutrophils <0.2 ×10⁹/L);
   neutrophils <0.5 → mould-active antifungal and antibiotic prophylaxis (32–33)); Bhutan National Guidelines on Appropriate Clinical Use of Blood
   2009 (prophylactic platelets if <10 ×10⁹/L, <20 with fever/sepsis, <50 with bleeding; repeated transfusion → antibodies); NEML 2025
   (cyclosporine 25/50/100 mg up to NRH; no ATG, no eltrombopag; cotrimoxazole, folic acid listed). Camitta severity criteria and the general
   pancytopenia differential are standard — marked. Covers remaining-list item 'Aplastic anaemia and pancytopenia'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "pancytopenia-aplastic",
title: "Pancytopenia & Aplastic Anaemia",
subtitle: "Low red cells, white cells and platelets together: look at the film, think B12/folate, infection (kala-azar, TB, HIV, dengue), big spleen, leukaemia and drugs before calling it aplastic anaemia — and protect against infection and bleeding while the marrow is studied",
age: "All ages", specs: ["medicine", "onc", "paeds"],
keywords: ["pancytopenia", "aplastic anaemia", "aplastic anemia", "bone marrow failure", "low platelets and white cells", "hypocellular marrow", "PNH", "cyclosporine", "antithymocyte globulin", "ATG", "eltrombopag", "neutropenia", "megaloblastic pancytopenia", "hypersplenism", "Fanconi anaemia"],
related: ["anaemia-adult", "anaemia-child", "itp", "leukaemia-lymphoma", "kala-azar", "hiv-adult", "tb-adult", "dengue-adult", "cirrhosis-adult", "fever-approach", "transfusion-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Pancytopenia is a <b>finding, not a diagnosis</b>. In Bhutan the common causes are vitamin B12/folate deficiency, infections, a big spleen and leukaemia. Aplastic anaemia — an empty marrow — is rare (1.5–7 per million a year) but deadly if untreated ${r(1)} ${LB.exp("DIFFERENTIAL STANDARD")}.</p>
<div class="glance">
<div><h4>First tests</h4><p>FBC with film and reticulocytes, MCV, B12/folate, HIV, hepatitis, malaria/dengue/kala-azar where relevant, liver tests, spleen size ${LB.exp("STANDARD")}.</p></div>
<div><h4>Marrow</h4><p>Bone marrow aspirate and biopsy is essential to diagnose aplastic anaemia and exclude leukaemia/MDS ${r(1)}.</p></div>
<div><h4>Protect</h4><p>Fever with neutropenia → IV antibiotics within 1 hour; platelets only by triggers (&lt;10, &lt;20 with fever, &lt;50 with bleeding) ${r(2)}.</p></div>
<div><h4>Treat AA</h4><p>Under 40 with a matched sibling: transplant; otherwise immunosuppression (ATG + cyclosporine ± eltrombopag) ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Cyclosporine is on the NEML (up to NRH); ATG and eltrombopag are not, and transplant needs referral abroad ${r(3)} ${LB.loc()}. Use blood products carefully — repeated transfusions cause antibodies, and family donors should be avoided if a sibling may later donate marrow ${r(2)} ${LB.exp("STANDARD")}.</p>`)}
` },

{ id: "overview", title: "Causes of pancytopenia", html: `
${tbl(["Group", "Examples"], [
["Nutritional", "Vitamin B12 or folate deficiency (often with high MCV) " + P("anaemia-adult", "Anaemia")],
["Infection", "Kala-azar, TB (miliary), HIV, dengue, typhoid, brucellosis, severe sepsis " + P("kala-azar", "Kala-azar")],
["Spleen", "Hypersplenism in cirrhosis/portal hypertension " + P("cirrhosis-adult", "Cirrhosis")],
["Marrow infiltration", "Leukaemia, lymphoma, myeloma, metastases, myelofibrosis " + P("leukaemia-lymphoma", "Leukaemia")],
["Marrow failure", "Aplastic anaemia (acquired, or inherited e.g. Fanconi), PNH, hypoplastic MDS " + r(1)],
["Drugs/toxins", "Chemotherapy, chloramphenicol, carbamazepine, methotrexate, cotrimoxazole, benzene " + LB.exp("STANDARD")],
["Autoimmune", "SLE " + LB.exp("STANDARD")]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Aplastic anaemia", [F.s("Immune (T-cell) attack on stem cells — or inherited stem-cell defect"), F.a, F.s("Empty (hypocellular) marrow"), F.a, F.e("Anaemia, infections, bleeding")])} <p>${r(1)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ASH 2026", "Local reality", "This guide"], [
["First-line therapy", "HCT (young, sibling donor) or IST with ATG + eltrombopag", "No ATG/eltrombopag on NEML; transplant abroad", "Early referral; cyclosporine alone is a fallback only on specialist advice " + r(1) + " " + LB.loc()],
["Prophylaxis at neutrophils &lt;0.5", "Antifungal (mould-active) and antibiotic", "Posaconazole/voriconazole scarce", "Specialist; strict fever plan " + r(1)],
["Platelet transfusion", "—", "Bhutan triggers", "Use triggers, not routine " + r(2)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Anaemia: tiredness, pallor, breathlessness ${LB.exp("STANDARD")}.</li>
<li>Neutropenia: fever, mouth ulcers, recurrent infections ${LB.exp("STANDARD")}.</li>
<li>Thrombocytopenia: petechiae, bruising, gum and nose bleeding ${LB.exp("STANDARD")}.</li>
<li>Clues: <b>big spleen</b> → infection, hypersplenism or leukaemia, <i>not</i> aplastic anaemia; glossitis/neuropathy → B12; short stature, thumb or skin anomalies in a child → Fanconi ${LB.exp("STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 19-year-old student from Dagana has bruises, gum bleeding and fever. No spleen, liver or nodes. Hb 62 g/L, neutrophils 0.3, platelets 8 ×10⁹/L, reticulocytes very low; B12/folate normal; film without blasts. <b>Suspected severe aplastic anaemia</b>: IV antibiotics for fever, platelets (count &lt;20 with fever), urgent haematology for marrow biopsy and HLA typing of siblings ${r(1)} ${r(2)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Megaloblastic anaemia", "High MCV, hypersegmented neutrophils, low B12/folate"],
["Kala-azar", "Fever, huge spleen, weight loss " + P("kala-azar", "Kala-azar")],
["Leukaemia", "Blasts on film, nodes, organomegaly " + P("leukaemia-lymphoma", "Leukaemia")],
["Hypersplenism", "Big spleen, cirrhosis " + P("cirrhosis-adult", "Cirrhosis")],
["Dengue", "Acute fever, haematocrit rise, recovers " + P("dengue-adult", "Dengue")],
["ITP", "Only platelets low " + P("itp", "ITP")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>FBC, <b>film</b>, reticulocyte count, MCV ${LB.exp("STANDARD")}.</li>
<li>B12, folate, liver and kidney tests, LDH, HIV, hepatitis B/C, malaria, dengue, rK39 (kala-azar) as relevant ${LB.exp("STANDARD")}.</li>
<li><b>Bone marrow aspirate and trephine biopsy</b> (cellularity, morphology, cytogenetics) ${r(1)}.</li>
<li>For aplastic anaemia: PNH clone (flow cytometry), somatic mutations, telomere length; chromosome breakage in children/young adults (Fanconi) ${r(1)} ${LB.exp("BREAKAGE TEST STANDARD")}.</li>
<li>HLA typing of patient and siblings early ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "Pancytopenia helper", html: `<div class="calc" data-calc="pancyto"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Supportive care (all causes)</h3>
<ul>
<li>Fever with neutrophils &lt;0.5 ×10⁹/L: blood cultures, broad-spectrum IV antibiotics within 1 hour (e.g. ${dr("piptazo", "piperacillin–tazobactam")}) ${LB.exp("STANDARD")} ${P("fever-approach", "Fever approach")}.</li>
<li>Platelets: prophylactic if &lt;10 ×10⁹/L, &lt;20 with fever/sepsis, &lt;50 with bleeding ${r(2)}.</li>
<li>Red cells for symptomatic anaemia; irradiated/leucodepleted products where available for transplant candidates ${LB.exp("STANDARD")}.</li>
<li>${dr("tranexamic_acid", "Tranexamic acid")} and menstrual suppression for mucosal bleeding ${LB.exp("STANDARD")}; no IM injections, aspirin or NSAIDs.</li>
<li>Neutrophils &lt;0.5 in severe AA: antibiotic and mould-active antifungal prophylaxis (specialist) ${r(1)}.</li>
</ul>
<h3>Treat the cause</h3>
<ul><li>B12/folate replacement; treat kala-azar, TB, HIV; stop offending drugs ${LB.exp("STANDARD")}.</li></ul>
<h3>Severe/very severe aplastic anaemia ${r(1)}</h3>
<ul>
<li>Under 40 with a matched sibling donor: haematopoietic cell transplant.</li>
<li>Over 40, or no sibling donor: immunosuppression — ATG + ${dr("ciclosporin", "cyclosporine")} with eltrombopag.</li>
<li>No response by 6 months after ATG: second-line (transplant or repeat ATG).</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("ciclosporin", "Cyclosporine"), "Part of IST (specialist) " + r(1), "25/50/100 mg (up to NRH) " + r(3)],
[dr("piptazo", "Piperacillin–tazobactam"), "Febrile neutropenia " + LB.exp("STANDARD"), "Referral hospitals"],
[dr("tranexamic_acid", "Tranexamic acid"), "Mucosal bleeding " + LB.exp("STANDARD"), "Tablet, injection"],
["ATG, eltrombopag", "IST " + r(1), "Not listed " + r(3)]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children:</b> consider inherited marrow failure (Fanconi, telomere disease) — physical anomalies, family history ${r(1)} ${LB.exp("STANDARD")}.</li><li><b>Pregnancy:</b> AA can appear or relapse; transfusion support and specialist care ${LB.exp("STANDARD")}.</li><li><b>Older adults:</b> hypoplastic MDS is a key mimic — marrow cytogenetics ${r(1)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Pancytopenia with a huge spleen after travel to the southern border", "Kala-azar test, marrow/spleen aspirate " + P("kala-azar", "Kala-azar")],
["Family offers relatives as blood donors", "Avoid family donors if a sibling may give marrow " + LB.exp("STANDARD")],
["Pancytopenia on cotrimoxazole + methotrexate", "Stop both, folinic acid, specialist " + LB.exp("STANDARD")],
["No ATG available", "Refer early for treatment abroad; supportive care meanwhile"]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Sepsis, fungal infection, bleeding, transfusion iron overload and alloimmunisation, PNH or MDS/AML evolution, treatment toxicity (cyclosporine: kidneys, BP) ${r(1)} ${r(2)} ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>FBC and transfusion needs weekly during treatment ${LB.exp("STANDARD")}.</li><li>Cyclosporine levels, kidney function and BP ${LB.exp("STANDARD")}.</li><li>Long-term watch for clonal evolution ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. The trephine biopsy shows mostly fat in aplastic anaemia.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Pancytopenia", [F.s("Film, retics, MCV; fever plan if neutropenic"), F.a, F.d("Blasts, big spleen, high MCV, infection clue?"), F.a, F.b([["Yes", F.s("Treat/refer the specific cause")], ["No", F.e("Bone marrow biopsy → aplastic anaemia? → haematology: HCT or IST")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling it aplastic without a marrow biopsy", "Leukaemia/MDS missed", "Biopsy " + r(1)],
["Missing B12 deficiency", "Easily treated cause missed", "Check MCV, B12/folate"],
["Routine platelet transfusions", "Antibodies, refractoriness", "Use triggers " + r(2)],
["Steroids alone for AA", "Ineffective, infection risk", "Specialist IST " + LB.exp("STANDARD")]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Pancytopenia with a big spleen — is aplastic anaemia likely?", "No; think infection (kala-azar, malaria), hypersplenism or leukaemia/lymphoma.")}
${qa("Intern/MO", "Prophylactic platelet trigger in a stable patient (Bhutan guideline)?", "Below 10 ×10⁹/L (below 20 with fever or sepsis).")}
${qa("Registrar", "Treatment for a 25-year-old with severe AA and a matched sibling?", "Haematopoietic cell transplantation (ASH 2026).")}
${qa("Specialist", "What is added to ATG + cyclosporine in IST?", "Eltrombopag (adults and children).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Scheinberg P, et al. American Society of Hematology 2026 guidelines for the diagnosis and management of severe and very severe acquired aplastic anemia. Blood Adv 2026;10(17):5962–90. doi:10.1182/bloodadvances.2025019051. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13546908/" target="_blank" rel="noopener">PMC13546908</a></li>
<li id="ref-2">Ministry of Health, Bhutan. National Guidelines on Appropriate Clinical Use of Blood (1st edition, 2009).</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["ASH 2026 AA guideline", "<span class='pass'>Read</span>", "Recs 1–33, 28 Nov 2026"], ["Bhutan blood guideline", "<span class='pass'>Read</span>", "Platelet triggers"], ["Camitta criteria, differential", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
