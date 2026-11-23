/* IgA vasculitis (Henoch–Schönlein purpura) (Bhutan STG 12.6, SHARE 2019) */
registerPage({
id: "hsp-child",
title: "IgA Vasculitis (Henoch–Schönlein Purpura)",
subtitle: "Palpable purpura on the legs and buttocks with joint, gut or kidney involvement in a well child: give pain relief, steroids for severe gut pain, and check urine and BP for 6 months",
age: "Children 3–15 years", specs: ["paeds", "rheum", "neph"],
keywords: ["Henoch Schonlein purpura", "HSP", "IgA vasculitis", "palpable purpura", "arthritis", "abdominal pain", "intussusception", "HSP nephritis", "haematuria", "prednisolone"],
related: ["agn-child", "nephrotic-child", "meningitis-child", "acute-abdomen-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">The commonest childhood vasculitis. Children usually look well — a sick, febrile child with purpura has meningococcal sepsis until proven otherwise.</p>
<div class="glance">
<div><h4>Rash</h4><p>Symmetric palpable purpura, legs and buttocks, normal platelets.</p></div>
<div><h4>Pain</h4><p>${dr("paracetamol")}/${dr("ibuprofen")} (avoid NSAID if kidney involved).</p></div>
<div><h4>Gut pain</h4><p>${dr("prednisolone")} 1 mg/kg/day 1–2 weeks (STG); exclude intussusception.</p></div>
<div><h4>Kidneys</h4><p>Urine dipstick and BP for 6 months.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 12.6: hydration, nutrition and pain relief for mild disease; prednisolone 1 mg/kg/day for 1–2 weeks then taper for abdominal or joint pain; monitor BP and urine for 6 months. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>IgA-mediated small-vessel vasculitis, often after an upper respiratory infection; peak age 4–6; self-limiting in weeks, recurrence in a third.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("IgA vasculitis", [F.s("Abnormal IgA1 immune complexes"), F.a, F.s("Deposit in skin, gut, joint and glomerular vessels"), F.e("Purpura, arthritis, colic/bleeding, nephritis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "SHARE 2019", "This guide"], [["Steroids for joints", "Yes (1 mg/kg)", "Orchitis, severe pain, gut; not to prevent nephritis", "Gut pain/severe symptoms " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Purpura (all), arthralgia/arthritis of knees and ankles (75%), colicky abdominal pain ± bleeding (50–75%), nephritis (30–50%, usually mild), scrotal swelling.</li></ul>${box("red", "Red flags", `<ul><li>Fever, unwell, purpura spreading: meningococcal sepsis</li><li>Severe colic, red-currant stool, mass: intussusception</li><li>Nephrotic-range proteinuria, high BP, rising creatinine</li></ul>`)}<h3>The typical patient</h3><p>A 6-year-old in Punakha has a raised purple rash on both legs and buttocks after a cold, with swollen ankles and colicky tummy ache; platelets normal; urine 1+ blood. <b>This is IgA vasculitis</b>: analgesia, ultrasound if colic severe, prednisolone if gut pain significant, urine and BP checks for 6 months.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Meningococcal sepsis", "Sick, febrile, non-blanching rash anywhere"], ["ITP", "Low platelets, flat petechiae"], ["Leukaemia", "Cytopenias, bone pain"], ["Child abuse", "Pattern, story"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC (normal platelets), clotting if bleeding, urine dipstick and UPCR, creatinine, BP; ultrasound for abdominal pain.</p>` },
{ id: "staging", title: "Kidney follow-up", html: `${tbl(["When", "Check"], [["Diagnosis", "BP, urine dipstick, creatinine"], ["Weekly for 4 weeks", "BP, dipstick"], ["Months 2, 3, 6 (12)", "BP, dipstick"], ["Refer", "UPCR over 100 mg/mmol, high BP, raised creatinine, persistent proteinuria"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Rest, hydration, analgesia.</li><li>Prednisolone 1–2 mg/kg/day for 1–2 weeks for severe abdominal pain, orchitis, or severe arthritis.</li><li>Intussusception/perforation: surgery.</li><li>Nephritis: refer to paediatric nephrology (ACE inhibitor, immunosuppression if severe).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("paracetamol"), "15 mg/kg", "Pain"], [dr("ibuprofen"), "10 mg/kg", "Avoid with nephritis"], [dr("prednisolone"), "1 mg/kg/day", "Gut pain"]])}` },
{ id: "populations", title: "Adults", html: `<p>Rarer, more kidney involvement — refer.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Lost to follow-up", "Give family dipsticks or arrange BHU urine checks"]])}` },
{ id: "complications", title: "Complications", html: `<p>Intussusception, GI bleeding, nephritis (CKD in 1–2%), orchitis, recurrence.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>6 months of BP and urine; pregnancy in women with past HSP nephritis needs BP and urine monitoring.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Small-vessel vasculitis on the legs", src: "images/vasculitis-legs.jpg", mod: "Clinical photograph", ctx: "Cutaneous vasculitis", loc: "Lower legs", find: "Palpable purpura", interp: "Palpable purpura with normal platelets suggests vasculitis", by: "Diasbuenasio", page: "https://commons.wikimedia.org/wiki/File:Vasculitis_on_legs.jpg", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Purpura", [F.d("Sick/febrile?"), F.a, F.b([["Yes", F.e("Treat as meningococcal sepsis")], ["No", F.s("Platelets normal? → IgA vasculitis")]]), F.a, F.ok("Analgesia, steroids if gut pain, 6-month urine/BP")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No urine follow-up", "Missed nephritis", "Schedule checks"], ["Assuming HSP in a sick child", "Missed sepsis", "Look at the child"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "How long to monitor urine after HSP?", "At least 6 months.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ozen S, Marks SD, Brogan P, et al. European consensus-based recommendations for diagnosis and treatment of immunoglobulin A vasculitis — the SHARE initiative. Rheumatology. 2019;58:1607-1616. <a href="https://doi.org/10.1093/rheumatology/kez041" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 12.6.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
