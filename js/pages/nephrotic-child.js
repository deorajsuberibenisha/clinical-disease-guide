/* Nephrotic syndrome — children (KDIGO 2021, IPNA 2023, Bhutan STG 12.5.2) */
registerPage({
id: "nephrotic-child",
title: "Nephrotic Syndrome — Children",
subtitle: "Puffy eyes and frothy urine: confirm heavy proteinuria, treat with prednisolone by body surface area, watch for infection and clots, and teach families to dipstick at home",
age: "Children 1–12 years", specs: ["paeds", "neph"],
keywords: ["nephrotic syndrome", "minimal change disease", "steroid sensitive nephrotic syndrome", "prednisolone", "proteinuria", "oedema", "relapse", "steroid resistant", "peritonitis", "hypoalbuminaemia"],
related: ["ckd-child", "aki-child", "htn-child", "uti-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Most children have minimal change disease, which responds to steroids but often relapses. Infection, not the kidney, is the main danger.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Oedema + urine protein 3+ (UPCR over 200 mg/mmol) + albumin under 25 g/L.</p></div>
<div><h4>Treat</h4><p>${dr("prednisolone")} 60 mg/m²/day × 4 weeks, then 40 mg/m² alternate days × 4 weeks.</p></div>
<div><h4>Watch</h4><p>Peritonitis, cellulitis, clots, hypovolaemia.</p></div>
<div><h4>Refer</h4><p>Under 1 or over 12 years, haematuria, high BP, low C3, AKI, steroid resistance.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 12.5.2 describes the condition and advises referral to a higher centre. Paediatric nephrology care is at JDWNRH. Prednisolone is on the NEML at all levels. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>About 90% are idiopathic (mostly minimal change); secondary causes: post-infectious GN, HSP, SLE, hepatitis B, malaria.${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Nephrotic syndrome", [F.s("Podocyte injury → heavy proteinuria"), F.a, F.s("Low albumin → oedema; liver makes lipids and clotting factors"), F.a, F.e("Infection (lost immunoglobulins), thrombosis, hypovolaemia")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "KDIGO 2021 / IPNA 2023", "This guide"], [["Initial course", "12 weeks or longer", "8–12 weeks (4+4 or 6+6)", "4 + 4 weeks " + LB.loc()], ["Steroid resistance", "8 weeks", "No remission after 4 weeks (confirm by 6)", "IPNA"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Periorbital swelling (often in the morning), leg and scrotal oedema, ascites, frothy urine, weight gain.</li><li>BP usually normal; haematuria and high BP suggest nephritis.</li></ul>${box("red", "Complications", `<ul><li>Fever + abdominal pain: spontaneous peritonitis</li><li>Cold hands, abdominal pain, low BP, high haematocrit: hypovolaemia</li><li>Headache, seizures, limb swelling: thrombosis</li></ul>`)}<h3>The typical patient</h3><p>A 4-year-old (17 kg, 105 cm) in Thimphu has puffy eyes for a week and tense ascites; urine protein 4+, albumin 14 g/L, BP normal, no haematuria. <b>This is steroid-sensitive-type nephrotic syndrome</b>: prednisolone 40 mg daily for 4 weeks, then 30 mg alternate days for 4 weeks, salt restriction, home dipstick.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Acute glomerulonephritis", "Haematuria, hypertension, low C3, less protein"], ["Malnutrition (kwashiorkor)", "Low protein intake, no proteinuria"], ["Heart failure, liver disease", "No heavy proteinuria"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Urine dipstick, UPCR, albumin, creatinine, electrolytes, cholesterol, FBC, C3, hepatitis B, TB screen (before steroids); HIV/malaria as indicated.</p>` },
{ id: "staging", title: "Prednisolone calculator", html: `<div class="calc" data-calc="nephroticdose"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Prednisolone by BSA (calculator).</li><li>No-added-salt diet; normal protein; fluid restriction only if hyponatraemic.</li><li>Oedema: diuretics with care (risk of hypovolaemia); albumin 20% 0.5–1 g/kg + furosemide only for severe symptomatic oedema with normal circulation.</li><li>Penicillin prophylaxis while oedematous is used in some units; pneumococcal vaccination once in remission.</li><li>Relapse (3+ protein for 3 days): prednisolone 60 mg/m² until remission, then 40 mg/m² alternate days for 4 weeks.</li><li>Frequent relapses or steroid dependence/resistance: refer (levamisole, cyclophosphamide, calcineurin inhibitors, rituximab, biopsy).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("prednisolone"), "60 mg/m²/day (max 60)", "Then 40 mg/m² AD"], [dr("furosemide"), "1–2 mg/kg", "With care"], [dr("albumin"), "20% 0.5–1 g/kg", "Severe oedema"], [dr("ceftriaxone"), "50–100 mg/kg", "Peritonitis"]])}` },
{ id: "populations", title: "Under 1 and over 12 years", html: `<p>Congenital/infantile nephrotic syndrome and adolescent onset are less likely to be minimal change — refer before steroids.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Family far from hospital", "Home dipstick diary, written relapse plan, prednisolone supply"], ["Chickenpox contact on steroids", "Varicella immunoglobulin or aciclovir prophylaxis"]])}` },
{ id: "complications", title: "Complications", html: `<p>Peritonitis, cellulitis, sepsis, thrombosis, hypovolaemia, AKI, steroid side effects (growth, BP, behaviour, cataract).</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Daily dipstick at home first months; BP, growth, eyes; vaccination (no live vaccines on high-dose steroids).</p>` },
{ id: "images", title: "Images", html: `<p>See the pitting oedema image in the heart failure chapter.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Oedematous child", [F.s("Dipstick protein, albumin, BP, haematuria"), F.a, F.d("Typical (1–12 y, no haematuria/high BP)?"), F.a, F.b([["Yes", F.ok("Prednisolone 4 + 4 weeks")], ["No", F.e("Refer — biopsy may be needed")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Aggressive diuretics", "Hypovolaemia, thrombosis", "Assess circulation"], ["Ignoring abdominal pain with fever", "Peritonitis deaths", "Ceftriaxone"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Definition of steroid resistance?", "No remission after 4 weeks of daily prednisolone 60 mg/m².")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Trautmann A, Boyer O, Hodson E, et al. IPNA clinical practice recommendations for the diagnosis and management of children with steroid-sensitive nephrotic syndrome. Pediatr Nephrol. 2023;38:877-919. <a href="https://doi.org/10.1007/s00467-022-05739-3" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Kidney Disease: Improving Global Outcomes Glomerular Diseases Work Group. KDIGO 2021 clinical practice guideline for the management of glomerular diseases. Kidney Int. 2021;100:S1-S276. <a href="https://doi.org/10.1016/j.kint.2021.05.021" target="_blank" rel="noopener">doi</a></li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 12.5.2.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOIs", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
