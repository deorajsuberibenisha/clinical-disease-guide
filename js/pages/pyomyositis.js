/* Pyomyositis (tropical muscle abscess) — all ages. Batch E-16, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §13.7 Pyomyositis (S. aureus; pain, deep tender swelling, tense warm skin, cannot move limb; X-ray to exclude
   fracture; IV antibiotics 'Inj. PP or ceftriaxone'; fever and pain) — filtered text; Chattopadhyay B et al. Tropical pyomyositis. N Am J Med Sci
   2013;5:600–3 (Kolkata series: quadriceps 50%, iliopsoas 25%; S. aureus 75%, all MRSA; ultrasound first, MRI; aspiration gold standard; vancomycin,
   linezolid; muscle enzymes normal; mortality 0.5–2%) — Europe PMC PMC3842701; Verma S. Pyomyositis in children. Curr Infect Dis Rep 2016;18:12
   (three stages; > 90% S. aureus; CA-MRSA ~50% in India; MRI preferred; antibiotics ± drainage, surgery needed in 50%; IV then oral 2–3 weeks;
   cephalexin 100 mg/kg/day, clindamycin 30–40 mg/kg/day; complications) — PMC7102239. Not read: IDSA SSTI 2014 (site bot check) — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "pyomyositis",
title: "Pyomyositis (muscle abscess) — all ages",
subtitle: "Fever with deep, woody pain in a thigh, hip or buttock muscle — often after minor trauma — is a staphylococcal muscle abscess until proven otherwise: ultrasound or MRI, aspirate the pus, give anti-staphylococcal antibiotics, and drain",
age: "All ages", specs: ["surg", "ortho", "id", "paeds", "medicine"],
keywords: ["pyomyositis", "tropical pyomyositis", "muscle abscess", "psoas abscess", "iliopsoas abscess", "quadriceps abscess", "gluteal abscess", "Staphylococcus aureus", "MRSA", "CA-MRSA", "Panton-Valentine leukocidin", "woody muscle", "deep thigh pain fever", "pericapsular pyomyositis", "hip pain child fever"],
related: ["ssti-adult", "ssti-child", "bonejoint-adult", "bonejoint-child", "sepsis-adult", "sepsis-child", "hiv-adult", "potts-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Pyomyositis is bacterial infection of skeletal muscle, usually ending in an abscess; <i>Staphylococcus aureus</i> causes more than 90% ${r(1)} ${r(3)}. It is common in the tropics in healthy young people (peak 10–40 years, more in males) and increasingly seen with HIV and immunosuppression ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>High fever and muscle pain; deep tender swelling; skin intact but tense and warm; cannot move the limb normally ${r(1)} ${r(2)}.</p></div>
<div><h4>Sites</h4><p>Thigh (quadriceps) most often, then iliopsoas, gluteals, calf, arm, chest wall; can be multifocal (15–43%) ${r(2)} ${r(3)}.</p></div>
<div><h4>Confirm</h4><p>Ultrasound first, MRI best; aspiration of pus is the gold standard; CK usually normal ${r(2)} ${r(3)}.</p></div>
<div><h4>Treat</h4><p>IV anti-staphylococcal antibiotic + drainage; cover MRSA where common; then oral for 2–3 weeks ${r(1)} ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: IV antibiotics ("Inj. PP or ceftriaxone"), treat fever and pain, X-ray to exclude fracture, and refer for drainage ${r(1)}. In Indian series, community-acquired MRSA causes about half of cases and all S. aureus in one Kolkata series were methicillin-resistant — if a child or adult fails to improve on ceftriaxone/cloxacillin, think MRSA and get pus culture ${r(2)} ${r(3)} ${LB.loc()}. Ask about HIV and diabetes ${r(2)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Cause", "S. aureus > 90% (tropical and temperate); group A streptococcus 1–5%; occasionally E. coli, Klebsiella; viruses cause a different benign myositis " + r(2) + r(3)],
["Risk factors", "Muscle trauma or strenuous exercise, bacteraemia, HIV, diabetes, immunosuppression; malnutrition not consistently linked " + r(3)],
["PVL toxin", "Panton-Valentine leukocidin strains cause more necrosis " + r(3)],
["Mortality", "0.5–2% with treatment; higher if late " + r(2)]
])}` },
{ id: "patho", title: "Three stages", html: `${F.chart("Pyomyositis", [F.s("1. Invasive: woody, painful muscle, mild leukocytosis, no pus"), F.a, F.s("2. Suppurative (most present here): abscess, fever, severe pain, swelling"), F.a, F.e("3. Late: sepsis, metastatic abscesses, shock")])}<p>Normal muscle resists infection; after injury, released iron and bacteraemia allow abscess formation ${r(3)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Reviews", "This guide"], [
["Empirical antibiotic", "Penicillin (PP) or ceftriaxone", "Anti-staphylococcal; add MRSA cover (vancomycin, clindamycin, linezolid) where CA-MRSA is common", "Cloxacillin/cefazolin-type or ceftriaxone first; MRSA cover if severe or not improving " + r(1) + r(3) + " " + LB.int()],
["Drainage", "Refer", "Aspiration or surgical drainage; surgery eventually needed in about 50%", "Drain all suppurative abscesses " + r(1) + r(3)]
])}` },
{ id: "presentation", title: "Clinical features", html: `${tbl(["Feature", "Detail"], [
["Symptoms", "Fever (often > 39 °C), localised muscle pain, limp or refusal to move the limb " + r(1) + r(2)],
["Signs", "Deep tenderness, woody induration, later fluctuance; overlying skin may look normal " + r(1) + r(3)],
["Pelvic muscles", "Hip pain, flexed hip — mimics septic arthritis of the hip in children " + r(3)],
["Labs", "Leukocytosis with left shift, high ESR/CRP, anaemia; muscle enzymes normal or slightly raised; blood culture positive in a minority " + r(2) + r(3)]
])}
<div class="calc" data-calc="pyomyo"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Septic arthritis, osteomyelitis", "Joint effusion, bone changes " + P("bonejoint-child", "bone and joint infection")],
["Cellulitis, necrotising fasciitis", "Skin involvement; necrotising: pain out of proportion, rapid spread " + P("ssti-adult", "SSTI")],
["DVT", "Calf swelling, no fever " + P("vte-adult", "VTE")],
["Haematoma, muscle tear", "Trauma, no fever " + LB.exp()],
["Tuberculous (cold) abscess", "Psoas abscess from spine TB " + P("potts-adult", "spinal TB")],
["Sarcoma", "Painless enlarging mass " + P("bone-tumours", "bone and soft-tissue tumours")],
["Polymyositis, viral myositis", "Diffuse weakness, high CK " + r(2) + r(3)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul><li>CBC, ESR/CRP, blood culture, glucose, HIV ${r(2)} ${r(3)} ${LB.exp()}.</li><li>X-ray to exclude fracture/bone involvement ${r(1)}.</li><li>Ultrasound: hypoechoic collection; MRI: extent, multifocal disease, bone/joint ${r(2)} ${r(3)}.</li><li>Aspirate pus for Gram stain, culture and sensitivity (including TB/fungal if sterile) ${r(2)}.</li></ul>` },
{ id: "staging", title: "Severity", html: `${tbl(["Stage", "Management"], [
["Invasive (no pus)", "Antibiotics alone; reassess " + r(3)],
["Suppurative", "Antibiotics + aspiration or surgical drainage " + r(3)],
["Late / septic", "Resuscitation, broad IV cover including MRSA, drainage of all collections " + r(3)]
])}` },
{ id: "manage", title: "Treatment", html: `
<ul>
<li>IV antibiotics: STG penicillin or ceftriaxone ${r(1)}; MRSA cover (e.g. vancomycin 15 mg/kg 12-hourly, max 1 g/dose, as in the Kolkata series; or linezolid) when CA-MRSA is likely or no response ${r(2)} ${r(3)}.</li>
<li>Drain the abscess: needle aspiration or open drainage; repeat for new collections ${r(2)} ${r(3)}.</li>
<li>When better (usually a few days after drainage): oral for a further 2–3 weeks — methicillin-sensitive: cloxacillin, cephalexin 100 mg/kg/day or clindamycin 30–40 mg/kg/day (children); MRSA: clindamycin or linezolid by sensitivity ${r(3)}.</li>
<li>Analgesia, fluids; limb rest then mobilise ${r(1)} ${LB.exp()}.</li>
<li>Fever persisting after drainage: other collections, resistance, or drug fever ${r(3)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("ceftriaxone", "Ceftriaxone")} — NEML ${r(1)}.</li>
<li>${D("benzylpenicillin", "Benzylpenicillin")} ${r(1)}.</li>
<li>${D("cefalexin", "Cefalexin")} — oral step-down ${r(3)}.</li>
<li>${D("clindamycin", "Clindamycin")} — MRSA/MSSA step-down ${r(3)}.</li>
<li>${D("vancomycin", "Vancomycin")} — MRSA ${r(2)}.</li>
<li>${D("linezolid", "Linezolid")} — MRSA ${r(2)} ${r(3)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Pelvic pyomyositis mimics septic hip; multifocal disease; 1–2 per 4,000 paediatric admissions in the USA " + r(3)],
["HIV / immunosuppressed", "More frequent, atypical organisms " + r(2)],
["Athletes / recent trauma", "Muscle injury predisposes " + r(3)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["22-year-old labourer, fever 5 days, hard painful swollen thigh, normal skin", "Ultrasound, aspirate, IV antibiotics, drainage " + r(2)],
["8-year-old with fever and hip held flexed; hip ultrasound shows no effusion", "Consider pelvic pyomyositis — MRI " + r(3)],
["Still febrile 4 days after drainage on ceftriaxone", "Look for more collections; MRSA cover; culture " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Septic arthritis (25% in an Indian paediatric series), pneumonia (18%), osteomyelitis (5%) ${r(3)}.</li><li>Venous thrombosis, sepsis, ARDS, pericarditis, kidney failure, meningitis (late) ${r(3)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Review after stopping antibiotics; consider eliminating nasal carriage after recurrent staphylococcal infection ${r(3)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fever + deep muscle pain/swelling", [F.s("Ultrasound (MRI if available); bloods, culture"), F.a, F.d("Pus?"), F.a, F.b([["No (invasive)", F.s("IV antibiotic; recheck")], ["Yes", F.s("Aspirate/drain + IV antibiotic")]]), F.a, F.d("Improving?"), F.a, F.b([["Yes", F.ok("Oral 2–3 weeks")], ["No", F.e("MRSA cover, look for more collections")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Calling it a muscle strain", "Abscess enlarges, sepsis", "Fever + deep pain = image it " + r(2)],
["Relying on CK", "Usually normal", "Ultrasound/aspirate " + r(2)],
["Antibiotics without drainage", "Half need surgery", "Drain pus " + r(3)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Commonest organism in pyomyositis?", "Staphylococcus aureus (> 90%).")}${qa("Specialist", "Why may pyomyositis be mistaken for septic hip in a child?", "Pelvic muscle (obturator, iliopsoas) abscess causes hip pain and a flexed hip.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §13.7 Pyomyositis.</li>
<li id="ref-2">Chattopadhyay B, Mukhopadhyay M, Chatterjee A et al. Tropical pyomyositis. N Am J Med Sci. 2013;5(10):600–3. doi:10.4103/1947-2714.120796.</li>
<li id="ref-3">Verma S. Pyomyositis in children. Curr Infect Dis Rep. 2016;18(4):12. doi:10.1007/s11908-016-0520-2.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §13.7", "<span class='pass'>Checked</span>", "Short section"],
["Two open-access reviews", "<span class='pass'>Checked</span>", "Full text read"],
["IDSA SSTI 2014", "<span class='unv'>Not read</span>", "Site bot check"],
["Calculator", "<span class='pass'>Checked</span>", "Stage + child doses from Verma 2016"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
