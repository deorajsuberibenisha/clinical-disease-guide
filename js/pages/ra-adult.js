/* Rheumatoid arthritis — adults */
registerPage({
id: "ra-adult",
title: "Rheumatoid Arthritis — Adults",
subtitle: "Recognise early inflammatory arthritis, start weekly methotrexate within weeks, treat to target with DAS28, and protect patients from the side effects of steroids and DMARDs",
age: "Adults", specs: ["rheum", "medicine"],
keywords: ["rheumatoid arthritis", "RA", "inflammatory arthritis", "methotrexate", "DMARD", "hydroxychloroquine", "DAS28", "rheumatoid factor", "anti-CCP", "synovitis"],
related: ["oa-adult", "gout-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Rheumatoid arthritis damages joints in the first two years. Early methotrexate, adjusted every 1–3 months until the disease is quiet, prevents most deformity.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Swelling of 3+ joints or hand/foot small joints, morning stiffness over 30 minutes, for over 6 weeks.</p></div>
<div><h4>Start early</h4><p>${dr("methotrexate")} <b>once weekly</b> 7.5–15 mg, titrate to 15–25 mg, plus folic acid weekly.</p></div>
<div><h4>Bridge</h4><p>Short course of low-dose prednisolone while DMARD starts working.</p></div>
<div><h4>Target</h4><p>DAS28 remission (under 2.6) or low activity.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §13.9: rest, ibuprofen 400 mg three times daily, physiotherapy and referral for expert management. NEML has methotrexate 2.5 mg (NRH/RRH/DH) and hydroxychloroquine 200 mg (NRH/RRH); sulfasalazine and biologics are not listed. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Who gets it", html: `<p>About 0.5–1% of adults, women 2–3 times more than men, peak 30–60 years; smoking increases risk and severity.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Autoimmune synovitis", [F.s("Immune activation (RF, anti-CCP) → inflamed synovium (pannus)"), F.a, F.e("Cartilage and bone erosion → deformity; systemic inflammation → heart disease"), F.a, F.ok("DMARDs started early prevent erosions")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "EULAR 2022", "This guide"], [["Initial treatment", "Ibuprofen, physiotherapy, refer", "Methotrexate as soon as diagnosed, with short-term steroid", "Start methotrexate early (at district level with monitoring, or after specialist review) " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Symmetrical swelling and tenderness of MCP, PIP, wrist, MTP joints; morning stiffness over 30 minutes; fatigue.</li><li>Late: ulnar deviation, swan-neck and boutonnière deformities, nodules.</li><li>Extra-articular: anaemia, dry eyes, lung disease, vasculitis.</li></ul>
<h3>The typical patient</h3><p>A 40-year-old woman from Mongar has had painful swollen knuckles and wrists in both hands for 3 months, stiff for 2 hours each morning. ESR 52, rheumatoid factor positive. <b>This is early rheumatoid arthritis</b>: symmetrical small-joint synovitis over 6 weeks with long stiffness and positive serology. Start methotrexate weekly with folic acid, a short prednisolone bridge, and DAS28 monitoring.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Viral arthritis (chikungunya, parvovirus)", "Recent fever, self-limiting"], ["SLE", "Rash, ulcers, renal involvement"], ["Psoriatic arthritis", "Psoriasis, DIP involvement, dactylitis"], ["Osteoarthritis", "DIP/PIP bony swelling, short stiffness"], ["Gout (polyarticular)", "Tophi, crystals"]])}` },
{ id: "invest", title: "Investigations", html: `<p>ESR/CRP, rheumatoid factor and anti-CCP (where available), FBC, creatinine, liver tests, hepatitis B/C and TB screening before DMARDs, chest X-ray, X-rays of hands and feet.</p>` },
{ id: "staging", title: "Disease activity (DAS28)", html: `<div class="calc" data-calc="das28"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>${dr("methotrexate")} <b>once weekly</b>: start 7.5–15 mg, increase by 2.5–5 mg every 2–4 weeks to 15–25 mg; ${dr("folic_acid")} 5 mg once weekly on a different day.</li><li>Bridge: ${dr("prednisolone")} 5–10 mg daily, tapered off within 3 months.</li><li>Add ${dr("hydroxychloroquine")} 200–400 mg daily if not at target; refer for combination or biologic therapy if still active.</li><li>NSAID (${dr("ibuprofen")}) for symptoms only; physiotherapy, splints, occupational therapy.</li><li>Cardiovascular risk management, vaccinations (influenza, pneumococcal), bone protection with steroids.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("methotrexate"), "7.5–25 mg ONCE weekly", "FBC/LFT monitoring"], [dr("folic_acid"), "5 mg once weekly", "Reduces side effects"], [dr("hydroxychloroquine"), "200–400 mg daily", "Eye checks"], [dr("prednisolone"), "5–10 mg daily, taper", "Bridge only"], [dr("ibuprofen"), "400 mg TDS", "Symptoms"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Stop methotrexate 3 months before conception (both partners advised); hydroxychloroquine and low-dose prednisolone are compatible with pregnancy.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Mouth ulcers and falling white cells on methotrexate", "Stop, check FBC, folinic acid if toxic; check it was not taken daily"], ["Fever on methotrexate", "Infection risk: assess promptly"]])}` },
{ id: "complications", title: "Complications", html: `<p>Joint destruction, disability, cardiovascular disease, interstitial lung disease, infections, osteoporosis.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>DAS28 every 1–3 months until target; blood monitoring for methotrexate.</p>${box("red", "Come back at once if (on methotrexate)", `<ul><li>Sore throat, fever, mouth ulcers, bruising</li><li>New cough or breathlessness</li></ul>`)}` },
{ id: "images", title: "Images", html: `${fig({ title: "Rheumatoid arthritis of the hands", src: "images/ra-hands.jpg", mod: "Clinical photograph", ctx: "Long-standing RA", loc: "Hands", find: "Swelling of MCP joints and deformity", signs: "Rheumatoid hand", interp: "Early treatment prevents such damage", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Rheumatoid_Arthritis.JPG", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Inflammatory arthritis", [F.s("Synovitis >6 weeks, small joints, stiffness >30 min"), F.a, F.s("Bloods, screening, X-rays"), F.a, F.s("Methotrexate weekly + folic acid ± steroid bridge"), F.a, F.d("DAS28 at target by 3–6 months?"), F.a, F.b([["Yes", F.ok("Continue")], ["No", F.e("Add hydroxychloroquine / refer")]])])}` },
{ id: "pearls", title: "Pearls and mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Methotrexate taken daily", "Fatal toxicity", "Write the weekday; counsel"], ["Long-term steroids alone", "Osteoporosis, diabetes, infection", "DMARD early, taper steroid"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "How often is methotrexate taken for RA?", "Once weekly, with folic acid on another day.")}${qa("Specialist", "DAS28 remission threshold?", "Under 2.6.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Smolen JS, Landewé RBM, Bergstra SA et al. EULAR recommendations for the management of rheumatoid arthritis with synthetic and biological disease-modifying antirheumatic drugs: 2022 update. <i>Ann Rheum Dis</i> 2023;82:3–18. <a href="https://doi.org/10.1136/ard-2022-223356" target="_blank" rel="noopener">doi:10.1136/ard-2022-223356</a></li><li id="ref-2">Aletaha D, Neogi T, Silman AJ et al. 2010 rheumatoid arthritis classification criteria. <i>Arthritis Rheum</i> 2010;62:2569–2581. <a href="https://doi.org/10.1002/art.27584" target="_blank" rel="noopener">doi:10.1002/art.27584</a></li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §13.9.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DAS28 formula", "<span class='pass'>Checked</span>", "Prevoo 1995 ESR version"], ["NEML DMARDs", "<span class='pass'>Checked</span>", "Methotrexate, hydroxychloroquine listed; sulfasalazine not"]], "qc")}` }
]
});
