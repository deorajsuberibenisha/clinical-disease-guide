/* Acute post-streptococcal glomerulonephritis — children (Bhutan STG 12.5.1, IPNA) */
registerPage({
id: "agn-child",
title: "Acute Post-Streptococcal Glomerulonephritis",
subtitle: "Cola-coloured urine, puffy face and high blood pressure after a sore throat or skin sores: restrict salt and fluid, give furosemide, control BP, clear the strep, and watch the kidneys",
age: "Children 5–12 years", specs: ["paeds", "neph"],
keywords: ["acute glomerulonephritis", "AGN", "post-streptococcal glomerulonephritis", "PSGN", "haematuria", "cola urine", "hypertension child", "low C3", "ASO", "hypertensive encephalopathy", "nephritic syndrome"],
related: ["nephrotic-child", "aki-child", "htn-child", "urti-child", "ssti-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">PSGN is the commonest cause of visible haematuria with oedema and hypertension in children. Most recover fully; the danger is in the first week — hypertensive encephalopathy, pulmonary oedema, AKI.</p>
<div class="glance">
<div><h4>Clues</h4><p>1–2 weeks after sore throat or 3–6 weeks after skin sores; cola urine, oedema, high BP.</p></div>
<div><h4>Treat</h4><p>Salt and fluid restriction, ${dr("furosemide")} 1–2 mg/kg.</p></div>
<div><h4>BP</h4><p>${dr("hydralazine_iv", "Hydralazine")} 0.15 mg/kg IV (STG) or nifedipine for emergencies.</p></div>
<div><h4>Strep</h4><p>Penicillin V 14 days (STG).</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 12.5.1: hydralazine 0.15 mg/kg IV stat if BP high, penicillin V 250 mg BD for 14 days, refer to a higher centre. Scabies with secondary infection is a common trigger in Bhutan. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Immune complex glomerulonephritis after group A streptococcal throat or skin infection; typical age 5–12; C3 low, recovering by 6–8 weeks.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("PSGN", [F.s("Strep antigens → immune complexes in glomeruli"), F.a, F.s("Inflammation → reduced filtration, salt and water retention"), F.e("Haematuria, oedema, hypertension, oliguria")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "International", "This guide"], [["First BP drug", "Hydralazine IV", "Loop diuretic first (volume-driven), then CCB", "Furosemide first; hydralazine/nifedipine for emergency " + LB.loc()], ["Antibiotic", "Penicillin V 14 days", "10 days or single benzathine (to eradicate)", "Either"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Cola/tea-coloured urine, reduced urine, puffy face and eyes, mild leg oedema, headache.</li><li>Hypertension (in most), crackles if overloaded, recent sore throat or infected scabies.</li></ul>${box("red", "Emergencies", `<ul><li>Headache, vomiting, seizures, visual loss: hypertensive encephalopathy</li><li>Breathlessness, crackles: pulmonary oedema</li><li>Anuria, rising creatinine, hyperkalaemia</li></ul>`)}<h3>The typical patient</h3><p>An 8-year-old (25 kg) in Sarpang had infected scabies 3 weeks ago; now cola urine and puffy eyes; BP 140/95. <b>This is post-streptococcal GN</b>: salt and fluid restriction, furosemide 25 mg, daily weight and BP, penicillin, check creatinine, C3, ASO; treat the family's scabies.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["IgA nephropathy", "Haematuria during (not after) infection"], ["HSP nephritis", "Purpura, joint, gut symptoms"], ["Nephrotic syndrome", "Heavy proteinuria, normal BP, no haematuria"], ["Lupus, other GN", "Persistent low C3 over 8 weeks, systemic features"], ["UTI, stones, trauma", "Urine culture, imaging"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Urine (RBCs, red cell casts, protein 1–2+), creatinine, electrolytes, C3 (low), ASO/anti-DNase B, throat/skin swab, FBC; chest X-ray if breathless.</p>` },
{ id: "staging", title: "AGN management tool", html: `<div class="calc" data-calc="agnplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Fluid restriction (insensible + urine output) and no added salt while oedematous/hypertensive.</li><li>Furosemide 1–2 mg/kg for oedema/hypertension.</li><li>Hypertension persisting: nifedipine/amlodipine; emergency — hydralazine IV 0.15 mg/kg or labetalol, lower by no more than 25% in 8 h.</li><li>Penicillin to eradicate strep; treat contacts' infections (scabies).</li><li>AKI management; dialysis rarely.</li><li>Refer: severe AKI, nephrotic-range protein, persistent low C3, no improvement — biopsy.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("furosemide"), "1–2 mg/kg", "First line"], [dr("hydralazine_iv"), "0.15 mg/kg IV", "Emergency (STG)"], [dr("nifedipine"), "0.25 mg/kg", "Hypertension"], [dr("amoxicillin"), "Or penicillin V 14 days", "Eradication"], [dr("permethrin"), "5% cream", "Scabies trigger"]])}` },
{ id: "populations", title: "Adults", html: `<p>Adults get post-infectious GN too, often after staph infections — worse prognosis; refer.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Seizure with BP 170/110", "Hypertensive encephalopathy — diazepam, controlled BP lowering, PICU"]])}` },
{ id: "complications", title: "Complications", html: `<p>Hypertensive encephalopathy, pulmonary oedema, AKI, hyperkalaemia; rarely rapidly progressive GN.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>BP normalises in 1–3 months; C3 by 8 weeks; microscopic haematuria may persist up to 1–2 years; urine and BP checks.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Urine casts", src: "images/urine-casts.jpg", mod: "Urine microscopy", ctx: "Glomerular disease", loc: "Urine sediment", find: "Casts in sediment", interp: "Red cell casts indicate glomerulonephritis", by: "Mohsenin V. J Intensive Care 2017;5:57", page: "https://commons.wikimedia.org/wiki/File:RTE_cast,_muddy_granular_cast,_WBC_cast_and_RBC_cast_in_urine.jpg", lic: "CC BY 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Cola urine + oedema", [F.s("BP, urine, creatinine, C3, ASO"), F.a, F.d("Emergency (encephalopathy, pulmonary oedema, AKI)?"), F.a, F.b([["Yes", F.e("Furosemide, IV antihypertensive, refer")], ["No", F.ok("Salt/fluid restriction, furosemide, penicillin, follow-up")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing BP measurement", "Encephalopathy", "BP in every haematuria"], ["IV fluids for 'dehydration'", "Pulmonary oedema", "Restrict fluids"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Latency of PSGN after strep skin infection?", "3–6 weeks (1–2 weeks after pharyngitis).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 12.5.1.</li><li id="ref-2">Kidney Disease: Improving Global Outcomes Glomerular Diseases Work Group. KDIGO 2021 clinical practice guideline for the management of glomerular diseases. Kidney Int. 2021;100:S1-S276. <a href="https://doi.org/10.1016/j.kint.2021.05.021" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["STG 12.5.1", "<span class='pass'>Read</span>", "Full text"]], "qc")}` }
]
});
