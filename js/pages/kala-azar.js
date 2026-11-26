/* Kala-azar (visceral leishmaniasis) — all ages. Batch E-6, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §8.3.2 Kala azar (L. donovani, incubation 2–6 months, rK39, LD bodies, liposomal amphotericin B / amphotericin B
   deoxycholate / miltefosine; SSG or paromomycin alternatives; refer to the national guideline). Dorji T et al. AJTMH 2024 (review of VL elimination in
   Bhutan; full text in Europe PMC): 54 cases 1994–2022 in 14 districts, rK39 at all hospital levels, ELISA/PCR at RCDC since 2022, national guideline 2023,
   LAmB or miltefosine preferred, LAmB + miltefosine for HIV co-infection, LAmB on NEML at tertiary level. Scarpini S et al. Microorganisms 2022 (full text):
   single-dose LAmB 10 mg/kg first option in the Indian subcontinent; miltefosine 2–2.5 mg/kg for 28 days; rK39 sensitivity 97% in the subcontinent.
   FDA labels via the drug monographs (AmBisome VL schedule; Impavido doses by weight). NEML 2025: amphotericin B 50 mg liposomal.
   Not read: the Bhutan 2023 leishmaniasis guideline itself and WHO TRS 949 — regimens beyond the above are marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "kala-azar",
title: "Kala-azar (visceral leishmaniasis) — all ages",
subtitle: "Months of fever, a big spleen, wasting and pancytopenia in someone from the southern foothills or with travel to Bihar or Bengal: do the rK39 test and refer for liposomal amphotericin",
age: "All ages", specs: ["id", "medicine", "paeds"],
keywords: ["kala-azar", "visceral leishmaniasis", "VL", "Leishmania donovani", "black fever", "splenomegaly fever", "rK39", "LD bodies", "liposomal amphotericin B", "AmBisome", "miltefosine", "paromomycin", "sodium stibogluconate", "post-kala-azar dermal leishmaniasis", "PKDL", "sandfly"],
related: ["afi-adult", "malaria-adult", "tb-adult", "hiv-adult", "anaemia-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Kala-azar is rare in Bhutan — a few dozen cases in thirty years — so it is easily missed. But it is fatal without treatment and curable with one infusion. Think of it whenever fever has lasted more than two weeks, the spleen is large and malaria and TB have been excluded.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever for weeks, weight loss, a large spleen (often with a liver), pallor, darkening skin ${r(1)}.</p></div>
<div><h4>Test</h4><p><b>rK39 rapid test</b> (available at all hospital levels); LD bodies in bone marrow or spleen; ELISA/PCR at RCDC ${r(1, 2)}.</p></div>
<div><h4>Treat</h4><p>Liposomal amphotericin B — in the Indian subcontinent a <b>single dose of 10 mg/kg</b> is the first option ${r(3)}; miltefosine or combinations as alternatives ${r(1, 2)}.</p></div>
<div><h4>Report</h4><p>Notifiable; part of the regional elimination programme; spray and bed nets for the household ${r(1, 2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Between 1994 and 2022 Bhutan recorded 54 cases in 14 of its 20 districts; all endemic districts are below the elimination threshold of 1 case per 10,000 people a year ${r(2)}. A national leishmaniasis guideline was adopted in 2023 (not read for this page) ${r(2)}. Liposomal amphotericin B is on the NEML (50 mg vial) for tertiary hospitals; miltefosine has been obtained by special arrangement ${r(2, 5)}. Refer suspected cases to JDWNRH or a regional referral hospital ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Cause", "<i>Leishmania donovani</i>, a protozoan spread by the bite of infected female sandflies " + r(1)],
["Incubation", "2–6 months " + r(1)],
["Where", "More than 95% of the world's VL is in South Asia and East Africa " + r(3) + "; in Bhutan mostly eastern and southern districts — first confirmed cases from Khoma, Kengkhar and Gyelposhing in 2006 " + r(2)],
["Vectors in Bhutan", "Seven Phlebotomus and three Sergentomyia species documented " + r(2)],
["Name", "'Kala-azar' (black fever) from the greyish skin of some South Asian patients " + r(3)],
["Untreated", "Almost always fatal " + LB.exp()],
["Post-kala-azar dermal leishmaniasis (PKDL)", "Skin lesions after treatment, from blood-borne parasites; a reservoir for spread " + r(2)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("From sandfly bite to wasting", [F.s("Sandfly bite → promastigotes taken up by macrophages"), F.a, F.s("Amastigotes multiply in spleen, liver and bone marrow"), F.a, F.s("Huge spleen, marrow replacement → anaemia, neutropenia, low platelets"), F.a, F.e("Wasting, bleeding, secondary bacterial infections → death if untreated")])}
<p>Immune suppression — HIV especially — makes the disease more severe, harder to treat, and more likely to relapse ${r(2)} ${LB.exp()}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Indian subcontinent practice (review evidence)", "FDA label (AmBisome)", "This guide"], [
["Liposomal amphotericin B", "First choice (dose not given)", "Single dose 10 mg/kg — first option where a cold chain exists", "3 mg/kg/day on days 1–5, 14 and 21 (immunocompetent); 4 mg/kg/day days 1–5, 10, 17, 24, 31, 38 (immunocompromised)", "Single 10 mg/kg dose in immunocompetent patients, as in the region " + r(3) + "; FDA schedule if the national guideline or specialist prefers"],
["Miltefosine", "Alternative first choice", "2–2.5 mg/kg/day for 28 days; with paromomycin as a combination for remote areas", "30–44 kg 50 mg twice daily; 45 kg+ 50 mg three times daily, 28 days (12 years and over)", "Specialist choice; strict contraception " + r(3, 5)],
["HIV co-infection", "Not covered", "LAmB + miltefosine combination", "4 mg/kg schedule", "LAmB + miltefosine " + r(2)]
])}
<p>The STG lists drugs without doses and points to the national guideline. Until that guideline is in hand, the single 10 mg/kg dose used across the Indian subcontinent is the simplest regimen for an immunocompetent patient.</p>` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Prolonged fever (often for weeks), malaise, weight loss, abdominal discomfort from the spleen ${r(1)}.</li>
<li>Chronic diarrhoea in some ${r(1)}.</li>
<li>Late: darkening of the skin ("black fever") ${r(1)}.</li>
<li>Signs: pallor, marked splenomegaly, hepatomegaly, wasting ${r(1)}; bleeding and infections from pancytopenia ${LB.exp()}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 16-year-old boy from Samdrup Jongkhar has had fever on and off for two months, has lost weight, and his abdomen is swollen. His spleen reaches the umbilicus; Hb 7 g/dL, WBC 2,300, platelets 70,000. Malaria tests and sputum GeneXpert are negative. The rK39 test is positive. He is referred to JDWNRH, where he receives a single infusion of liposomal amphotericin B 10 mg/kg; the district starts household spraying and bed nets ${r(1, 2, 3)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Malaria (incl. hyper-reactive malarial splenomegaly)", "Smear / RDT; response to antimalarials"],
["Tuberculosis (disseminated, abdominal)", "Lymph nodes, chest film, GeneXpert"],
["Enteric fever", "Shorter illness, no massive spleen"],
["Lymphoma, leukaemia, myelofibrosis", "Blood film, marrow"],
["Cirrhosis with portal hypertension", "Liver signs, varices; afebrile"],
["Brucellosis, HIV-related infections", "Exposure history; serology"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>rK39 rapid test</b> — at all hospital levels in Bhutan ${r(2)}; sensitivity about 97% in the Indian subcontinent ${r(3)}. It stays positive for years after cure, so it cannot diagnose relapse ${LB.exp()}.</li>
<li><b>Parasitology</b>: LD bodies (amastigotes) in bone marrow or spleen aspirate ${r(1)}; splenic aspirate is the most sensitive but carries a bleeding risk of up to 1 in 1,000 ${r(3)}.</li>
<li>ELISA and PCR at RCDC (since 2022) ${r(2)}.</li>
<li>CBC (anaemia, leucopenia, thrombocytopenia) ${r(1)}; liver and kidney tests; <b>HIV test in everyone</b> ${LB.exp()}.</li>
</ul>` },
{ id: "staging", title: "Before treatment — risk check", html: `
${tbl(["Factor", "Why it matters"], [
["HIV co-infection", "Combination LAmB + miltefosine; higher relapse " + r(2)],
["Severe anaemia, bleeding, sepsis", "Transfuse, treat infection; refer urgently " + LB.exp()],
["Pregnancy", "Miltefosine is contraindicated; use liposomal amphotericin " + r(5)],
["Kidney impairment", "Prefer liposomal over conventional amphotericin " + LB.exp()],
["Relapse after treatment", "Different regimen; parasitological confirmation " + LB.exp()]
])}
<div class="calc" data-calc="kalaazarlamb"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. First choice — liposomal amphotericin B</h3>
<ul>
<li><b>Single dose 10 mg/kg IV</b> — the first-option regimen in the Indian subcontinent where a cold chain exists ${r(3)}.</li>
<li>FDA-labelled schedule (alternative): 3 mg/kg/day on days 1–5, 14 and 21; immunocompromised patients 4 mg/kg/day on days 1–5, 10, 17, 24, 31 and 38 ${r(5)}.</li>
<li>Infuse per the monograph (over about 2 hours); watch for infusion reactions, low potassium and creatinine rise ${r(5)} ${LB.exp()}.</li>
</ul>
<h3>2. Alternatives</h3>
${tbl(["Option", "Notes"], [
["Miltefosine (oral, 28 days)", "FDA: 30–44 kg 50 mg twice daily; 45 kg+ 50 mg three times daily with food; 12 years and over " + r(5) + ". Review evidence from the subcontinent: 2–2.5 mg/kg/day for 28 days " + r(3) + ". Teratogenic — exclude pregnancy, contraception during and after"],
["Combinations", "LAmB + miltefosine, LAmB + paromomycin, miltefosine + paromomycin — shorter courses used in the region; miltefosine + paromomycin for remote areas without a cold chain " + r(3)],
["Conventional amphotericin B deoxycholate", "STG option; nephrotoxic; daily infusions for weeks " + r(1) + " " + LB.exp()],
["Sodium stibogluconate, paromomycin", "STG alternatives; antimonial resistance is widespread in the subcontinent " + r(1, 3)]
])}
<h3>3. HIV co-infection</h3>
<p>Liposomal amphotericin B combined with miltefosine; start antiretroviral therapy ${r(2)} ${LB.exp()}.</p>
<h3>4. Supportive care</h3>
<p>Nutrition, transfusion for severe anaemia, treat bacterial infections, and follow at 6 and 12 months for relapse and PKDL ${LB.exp()}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("amphotericin-b", "Amphotericin B (liposomal)")} — NEML 2025: 50 mg liposomal powder ${r(4)}.</li>
<li>${D("miltefosine", "Miltefosine")} — not on NEML 2025; special procurement ${r(2, 4)}.</li>
<li>${D("paromomycin", "Paromomycin")} — the oral monograph is for amoebiasis; the injectable used for VL is not available in Bhutan ${LB.loc()}.</li>
<li>Sodium stibogluconate — no monograph; not on NEML ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Same mg/kg LAmB dose; miltefosine per weight (FDA from 12 years) " + r(3, 5)],
["Pregnancy", "Liposomal amphotericin B; never miltefosine " + r(5)],
["HIV", "LAmB + miltefosine; secondary prophylaxis is used by specialists " + r(2) + " " + LB.exp()],
["PKDL", "Refer; it maintains transmission " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Fever 3 weeks, spleen 6 cm, pancytopenia, malaria negative", "rK39 test; HIV test; refer if positive " + r(1, 2)],
["rK39 positive, 30 kg, not pregnant", "LAmB single dose 300 mg (10 mg/kg) " + r(3)],
["Woman of 25, rK39 positive, pregnancy test positive", "Liposomal amphotericin B — not miltefosine " + r(5)],
["Hypopigmented macules a year after cure", "Suspect PKDL — refer " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Bacterial infections, bleeding, severe anaemia ${LB.exp()}.</li>
<li>Relapse, especially with HIV ${r(2)} ${LB.exp()}.</li>
<li>PKDL ${r(2)}.</li>
<li>Drug toxicity: infusion reactions, hypokalaemia, nephrotoxicity (amphotericin); vomiting, hepatotoxicity and teratogenicity (miltefosine) ${r(5)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and prevention", html: `<ul>
<li>Review at the end of treatment and at 6 months (definitive cure) ${LB.exp()}.</li>
<li>Insecticide-treated bed nets; indoor and outdoor spraying ${r(1)}.</li>
<li>Case reporting supports Bhutan's elimination status ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Leishmania donovani in bone marrow", src: "images/leishmania-bone-marrow.png", mod: "Bone marrow smear (light microscopy)", ctx: "Visceral leishmaniasis", find: "Amastigotes (LD bodies) inside a bone marrow cell", signs: "Small oval bodies with nucleus and kinetoplast", interp: "Parasitological confirmation when rK39 is unavailable or unclear", by: "CDC / Dr L.L. Moore Jr.", page: "https://commons.wikimedia.org/wiki/File:Leishmania_donovani_01.png", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Prolonged fever with splenomegaly", [F.s("Exclude malaria; GeneXpert/TB work-up; CBC"), F.a, F.d("rK39 positive?"), F.a, F.b([["Yes", F.s("HIV test, pregnancy test; refer to referral hospital")], ["No", F.s("Marrow aspirate if still suspected; other causes")]]), F.a, F.ok("LAmB single 10 mg/kg (or alternative); notify; vector control"), F.a, F.s("Follow up at 6 months; watch for PKDL")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Repeated antimalarials for splenomegaly with fever", "Months lost", "rK39 early"],
["Using rK39 to diagnose relapse", "Stays positive for years", "Parasitology"],
["Miltefosine in a woman who may be pregnant", "Teratogenic", "Pregnancy test; contraception"],
["Forgetting HIV testing", "Different regimen and relapse risk", "Test everyone"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which rapid test is used for kala-azar in Bhutan?", "rK39 — available at all hospital levels.")}
${qa("Intern/MO", "What is the first-option regimen in the Indian subcontinent?", "A single dose of liposomal amphotericin B 10 mg/kg IV.")}
${qa("Specialist", "Regimen for HIV co-infection?", "Liposomal amphotericin B with miltefosine.")}
${qa("Specialist", "Why is miltefosine avoided in women of child-bearing age without contraception?", "It is teratogenic.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.3.2 Kala azar or leishmaniasis.</li>
<li id="ref-2">Dorji T, Dorjee S, Wangdi T, et al. Efforts toward the elimination of visceral leishmaniasis in South Asia: a review of progress in Bhutan. Am J Trop Med Hyg 2024;110(4):633–638. <a href="https://doi.org/10.4269/ajtmh.23-0642" target="_blank" rel="noopener">doi:10.4269/ajtmh.23-0642</a></li>
<li id="ref-3">Scarpini S, Dondi A, Totaro C, et al. Visceral leishmaniasis: epidemiology, diagnosis, and treatment regimens in different geographical areas with a focus on pediatrics. Microorganisms 2022;10(10):1887. <a href="https://doi.org/10.3390/microorganisms10101887" target="_blank" rel="noopener">doi:10.3390/microorganisms10101887</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-5">US FDA labels for liposomal amphotericin B (AmBisome) and miltefosine (Impavido), as summarised in the drug monographs of this guide.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §8.3.2", "<span class='pass'>Checked</span>", "Read from the STG text"],
["Bhutan epidemiology and programme", "<span class='pass'>Checked</span>", "Dorji 2024 full text"],
["Single-dose LAmB 10 mg/kg", "<span class='pass'>Checked</span>", "Scarpini 2022 full text; FDA schedule from the monograph"],
["Bhutan 2023 leishmaniasis guideline", "<span class='unv'>Not read</span>", "Not available to us; regimen details may differ — check the national guideline"],
["Follow-up timing, PKDL management", "<span class='unv'>Expert practice</span>", "Marked"],
["DOIs", "<span class='pass'>Checked</span>", "Crossref"],
["Calculator", "<span class='pass'>Checked</span>", "Tested in the browser"],
["Image", "<span class='pass'>Checked</span>", "CDC, public domain"]
], "qc")}` }
]
});
})();
