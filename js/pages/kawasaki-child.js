/* Kawasaki disease (AHA 2017) */
registerPage({
id: "kawasaki-child",
title: "Kawasaki Disease",
subtitle: "Fever for 5 days with red eyes, red lips, rash, swollen hands and a neck node: give IVIG and aspirin within 10 days to prevent coronary aneurysms",
age: "Children under 5 (any age)", specs: ["paeds", "cardio", "rheum"],
keywords: ["Kawasaki disease", "mucocutaneous lymph node syndrome", "coronary artery aneurysm", "IVIG", "aspirin", "incomplete Kawasaki", "strawberry tongue", "desquamation", "echocardiography", "MIS-C"],
related: ["measles-child", "scrub-child", "hf-child", "sepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Kawasaki disease is the leading cause of acquired heart disease in children in many countries, and is common in East and South Asian children. Untreated, 1 in 4 develop coronary aneurysms.</p>
<div class="glance">
<div><h4>Criteria</h4><p>Fever 5+ days + 4 of 5: eyes, mouth, rash, extremities, node.</p></div>
<div><h4>Incomplete</h4><p>2–3 features + raised CRP/ESR → labs/echo.</p></div>
<div><h4>Treat</h4><p>${dr("ivig", "IVIG")} 2 g/kg + ${dr("aspirin")} within 10 days.</p></div>
<div><h4>Heart</h4><p>Echo at diagnosis, 2 and 6 weeks.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG has no Kawasaki chapter. IVIG and paediatric echocardiography are available at JDWNRH — refer suspected cases early, especially infants under 6 months who often have incomplete features. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Acute medium-vessel vasculitis of unknown cause, peak age 6 months–5 years.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Kawasaki", [F.s("Unknown trigger in a susceptible child"), F.a, F.s("Vasculitis of coronary arteries"), F.e("Aneurysm, thrombosis, MI")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "AHA 2017", "Japan 2020", "This guide"], [["Aspirin acute dose", "80–100 or 30–50 mg/kg/day", "30–50 mg/kg/day", "30–50 mg/kg/day " + LB.loc()], ["Steroids", "High-risk cases", "High-risk (score-based)", "Specialist decision"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>High fever 5+ days, very irritable child.</li><li>Bilateral non-purulent conjunctivitis; red cracked lips, strawberry tongue; polymorphous rash; red swollen hands/feet then peeling in week 2–3; unilateral neck node.</li><li>BCG scar redness in infants is a useful sign.</li></ul><h3>The typical patient</h3><p>A 2-year-old (12 kg) in Thimphu has had fever for 6 days, red eyes, red cracked lips, a rash and swollen hands; CRP 120. <b>This is complete Kawasaki disease</b>: IVIG 24 g over 10–12 h, aspirin 360–600 mg/day, echo, then low-dose aspirin for 6–8 weeks.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Measles", "Cough, Koplik spots"], ["Scarlet fever", "Positive strep, responds to penicillin"], ["Scrub typhus", "Eschar"], ["Drug reaction/SJS", "Drug, mucosal blistering"], ["MIS-C", "COVID link, more GI/shock"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC (later high platelets), CRP, ESR, albumin, ALT, urine; echo; ECG.</p>` },
{ id: "staging", title: "Criteria and dose tool", html: `<div class="calc" data-calc="kawasaki"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>IVIG 2 g/kg single infusion over 10–12 h within 10 days (also later if still febrile/inflamed).</li><li>Aspirin 30–50 mg/kg/day until afebrile 48 h, then 3–5 mg/kg daily for 6–8 weeks (longer with aneurysms).</li><li>IVIG-resistant (fever 36 h+): second IVIG ± steroids/infliximab (specialist).</li><li>Giant aneurysms: anticoagulation + aspirin, cardiology.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ivig"), "2 g/kg over 10–12 h", "Within 10 days"], [dr("aspirin"), "30–50 → 3–5 mg/kg/day", "6–8 weeks"]])}` },
{ id: "populations", title: "Infants", html: `<p>Under 6 months: high aneurysm risk and often incomplete — consider in any infant with 7+ days of unexplained fever.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Influenza/varicella on aspirin", "Reye risk — pause aspirin, use alternative antiplatelet"]])}` },
{ id: "complications", title: "Complications", html: `<p>Coronary aneurysms, myocarditis, MI, valve regurgitation; macrophage activation.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Echo at 1–2 and 4–6 weeks; long-term cardiology if aneurysms; delay live vaccines 11 months after IVIG.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Kawasaki lips and tongue", src: "images/kawasaki-lips.jpg", mod: "Clinical photograph", ctx: "Kawasaki disease", loc: "Mouth", find: "Strawberry tongue, red swollen cracked lips", interp: "One of the five principal features", by: "Dong Soo Kim (derivative)", page: "https://commons.wikimedia.org/wiki/File:Kawasaki_symptoms_B.jpg", lic: "CC BY 2.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fever 5+ days", [F.d("4+ principal features?"), F.a, F.b([["Yes", F.e("IVIG + aspirin, echo")], ["2–3", F.s("CRP/ESR + supplementary labs/echo")]]), F.a, F.ok("Low-dose aspirin 6–8 weeks")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Waiting for all criteria in infants", "Aneurysms", "Think incomplete KD"], ["No echo follow-up", "Missed aneurysm", "Book echoes"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "IVIG dose in Kawasaki disease?", "2 g/kg as a single infusion over 10–12 hours.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">McCrindle BW, Rowley AH, Newburger JW, et al. Diagnosis, treatment, and long-term management of Kawasaki disease: a scientific statement for health professionals from the American Heart Association. Circulation. 2017;135:e927-e999. <a href="https://doi.org/10.1161/CIR.0000000000000484" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
