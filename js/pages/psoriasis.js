/* Psoriasis — all ages. Batch E-10, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.2.4 Psoriasis (types; investigations; hydrocortisone face/folds, triamcinolone body, 5% coal tar with salicylic
   acid at bedtime [salicylic acid strength unreadable in the PDF text], antihistamine, treat comorbidities, refer for systemic) — filtered text;
   NICE CG153 Psoriasis (2012, updated 2017: assessment, PsA annual check, CV risk, topical by site, steroid limits, referral, systemic criteria,
   methotrexate first choice, ciclosporin indications); Merck Manual Professional 'Psoriasis' (index only); NEML 2025 text. Not read: NICE TA
   biologics, PEST questionnaire items, AAD-NPF 2019 — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "psoriasis",
title: "Psoriasis — all ages",
subtitle: "Well-demarcated red plaques with thick silvery scale on elbows, knees and scalp: topical treatment first, steroids with breaks, look for arthritis and cardiovascular risk, and refer for systemic treatment when topical treatment is not enough",
age: "All ages", specs: ["derm", "medicine", "rheum", "paeds"],
keywords: ["psoriasis", "plaque psoriasis", "chronic plaque psoriasis", "guttate psoriasis", "scalp psoriasis", "flexural psoriasis", "inverse psoriasis", "erythrodermic psoriasis", "pustular psoriasis", "nail psoriasis", "psoriatic arthritis", "coal tar", "calcipotriol", "methotrexate psoriasis", "ciclosporin", "PASI", "body surface area"],
related: ["eczema", "seb-napkin-dermatitis", "rash-approach", "ra-adult", "lipids-adult", "dm-adult", "htn-adult", "obesity-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Psoriasis is a chronic immune skin disease triggered in predisposed people by trauma, infections, medicines, smoking, alcohol and stress ${r(1)}. The typical lesion is a sharply demarcated red plaque with thick silvery scale; scalp involvement and nail pitting are strong clues ${r(1)}.</p>
<div class="glance">
<div><h4>Types</h4><p>Chronic plaque (commonest), guttate (after strep throat; children, adolescents), flexural (red, no scale), erythrodermic, pustular ${r(1)}.</p></div>
<div><h4>First line</h4><p>Emollients + topical treatment by site: mild steroid for face/folds, moderate–potent steroid for body, coal tar for plaques and scalp ${r(1)} ${r(2)}.</p></div>
<div><h4>Check</h4><p>Arthritis every year; blood pressure, diabetes, lipids; CV risk if severe ${r(1)} ${r(2)}.</p></div>
<div><h4>Emergencies</h4><p>Erythroderma or generalised pustular psoriasis → same-day specialist care ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: hydrocortisone 1% for face and folds, triamcinolone 0.1% ointment twice daily for the body, and <b>5% coal tar with salicylic acid at bedtime</b> for plaques and scalp (not on face or folds; wash off in the morning, then moisturise and apply steroid); coal tar shampoo for scalp (purchase); antihistamine for itch; treat hypertension, diabetes and dyslipidaemia; refer to a higher centre for systemic therapy ${r(1)}. NEML: coal tar solution 20%, salicylic acid powder (compounded), methotrexate 2.5 mg, ciclosporin (national referral hospital); no calcipotriol ${r(3)}. STG work-up includes routine bloods, viral markers and RPR, and hand X-ray if small-joint arthritis ${r(1)}.</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Features"], [
["Chronic plaque", "Sharply demarcated red plaques with thick silvery scale; extensor surfaces, scalp; itch variable " + r(1)],
["Guttate", "Sudden small scaly papules after streptococcal upper respiratory infection; children and adolescents " + r(1)],
["Flexural (inverse)", "Red plaques without scale in folds " + r(1)],
["Erythrodermic", "Whole body red and scaling — emergency " + r(1) + r(2)],
["Pustular", "Acute pustular eruption, generalised or localised (palms/soles) " + r(1)],
["Nail", "Pitting, subungual hyperkeratosis " + r(1)]
])}` },
{ id: "patho", title: "How it develops", html: `${F.chart("Mechanism", [F.s("Genetic predisposition"), F.a, F.s("Trigger: trauma (Koebner), infection, drugs, smoking, alcohol, stress"), F.a, F.s("Immune activation (T cells, cytokines)"), F.a, F.s("Rapid keratinocyte turnover → thick scale"), F.a, F.d("Systemic inflammation → arthritis, cardiometabolic risk")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "NICE CG153", "This guide"], [
["First topical for trunk/limbs", "Triamcinolone 0.1% twice daily + coal tar at night", "Potent steroid once daily + vitamin D analogue once daily up to 4 weeks", "STG products (no calcipotriol on NEML); add potent steroid via dermatologist " + r(1) + r(2) + r(3)],
["Children", "—", "Refer all children at presentation", "Refer " + r(2)],
["Steroid breaks", "—", "4-week break between potent courses; potent max 8 weeks, very potent max 4 weeks continuously", "Follow NICE limits " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features and assessment", html: `
${tbl(["Assess", "How"], [
["Severity", "Physician's and patient's global assessment (clear → very severe), body surface area, high-impact sites (face, scalp, palms, soles, flexures, genitals), nails " + r(2)],
["Impact", "Physical, psychological and social wellbeing " + r(2)],
["Psoriatic arthritis", "Ask every year (especially first 10 years): joint pain, swelling, back pain; refer to rheumatology if suspected " + r(2)],
["Comorbidities", "Hypertension, diabetes, dyslipidaemia, obesity, alcohol, smoking, depression " + r(1) + r(2)],
["Systemic upset", "Fever, malaise — unstable forms " + r(2)]
])}
<p>Erythema may be underestimated on darker skin ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 35-year-old driver has thick silvery plaques on elbows, knees and scalp and pitted nails for 3 years; he drinks daily and smokes. Explain that it is chronic; triamcinolone 0.1% twice daily on body plaques, 5% coal tar with salicylic acid at night on plaques and scalp, hydrocortisone for any facial patches, daily petroleum jelly; check BP, sugar and lipids; ask about joints; advise on alcohol and smoking; review in 4 weeks ${r(1)} ${r(2)}.</p>
<div class="calc" data-calc="psoplan"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Eczema", "Itchy, ill-defined, flexural " + P("eczema", "eczema")],
["Seborrhoeic dermatitis", "Greasy scale, face folds " + P("seb-napkin-dermatitis", "seborrhoeic dermatitis")],
["Tinea", "Ring, active edge — scrape " + LB.exp()],
["Pityriasis rosea", "Herald patch, trunk 'Christmas tree' " + LB.exp()],
["Secondary syphilis", "Palms and soles — RPR " + r(1)],
["Lichen simplex", "Thickened itchy plaque from scratching " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Diagnosis is clinical. STG: routine blood tests, viral markers and RPR; hand X-ray if small-joint arthritis ${r(1)}. Before systemic treatment: blood count, liver and kidney function, hepatitis and HIV status ${LB.exp("PRE-SYSTEMIC LIST NOT READ IN DETAIL")}. Throat swab or ASO in guttate psoriasis ${LB.exp()}.</p>` },
{ id: "staging", title: "When is systemic treatment needed?", html: `
<p>NICE: offer systemic treatment when psoriasis cannot be controlled with topical treatment, has a significant impact, and is extensive (e.g. more than 10% body surface area or PASI above 10), or localised with severe functional impairment or distress (e.g. severe nails, high-impact sites), or phototherapy has failed ${r(2)}. Methotrexate is first choice; ciclosporin for rapid control, palmoplantar pustulosis or when planning conception ${r(2)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. All patients</h3>
<ul>
<li>Explain the chronic course; daily bathing and petroleum jelly or heavy cream at least twice a day ${r(1)}.</li>
<li>Review 4 weeks after a new topical treatment in adults, 2 weeks in children ${r(2)}.</li>
</ul>
<h3>2. Topical treatment by site</h3>
${tbl(["Site", "Bhutan STG", "NICE"], [
["Trunk and limbs", "Triamcinolone 0.1% ointment twice daily; 5% coal tar with salicylic acid at bedtime " + r(1), "Potent steroid + vitamin D analogue once daily each up to 4 weeks; then vitamin D twice daily; then potent steroid twice daily up to 4 weeks or coal tar " + r(2)],
["Scalp", "Coal tar preparation at night; coal tar shampoo " + r(1), "Potent steroid once daily up to 4 weeks; descale (salicylic acid, oils) " + r(2)],
["Face, flexures, genitals", "Hydrocortisone 1% twice daily " + r(1), "Mild–moderate steroid max 2 weeks; vulnerable to atrophy " + r(2)],
["Children", "—", "Calcipotriol (over 6 years) or potent steroid (over 1 year); refer " + r(2)]
])}
<p>Limits: no very potent steroid continuously beyond 4 weeks, no potent steroid beyond 8 weeks, 4-week break between courses, no very potent steroid in children ${r(2)}.</p>
<h3>3. Refer to a higher centre</h3>
<ul>
<li>Lesions on face and hands not controlled, poor response to topical treatment, extensive disease, arthritis, all children ${r(1)} ${r(2)}.</li>
<li>Same day: erythroderma, generalised pustular psoriasis ${r(2)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("triamcinolone", "Triamcinolone")} 0.1% ointment; ${D("hydrocortisone", "hydrocortisone")} 1% — NEML ${r(3)}.</li>
<li>${D("betamethasone", "Betamethasone dipropionate")} 0.05% (potent), ${D("clobetasol", "clobetasol")} 0.05% (very potent; not in children) — NEML, hospitals with a dermatologist ${r(3)} ${r(2)}.</li>
<li>${D("coal-tar", "Coal tar")} — NEML 20% solution for compounding ${r(3)}.</li>
<li>${D("calcipotriol", "Calcipotriol")} — vitamin D analogue; not on NEML ${r(2)} ${r(3)}.</li>
<li>${D("methotrexate", "Methotrexate")} 2.5 mg — NEML; specialist; weekly dosing with folic acid ${r(2)} ${LB.exp("DOSING NOT READ")}.</li>
<li>${D("ciclosporin", "Ciclosporin")} — NEML (national referral hospital) ${r(3)}.</li>
<li>${D("cetirizine", "Cetirizine")} for itch ${r(1)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children and young people", "Refer at presentation; PASI/BSA not validated in children " + r(2)],
["Planning pregnancy", "Ciclosporin preferred over methotrexate when systemic treatment cannot be avoided (men and women) " + r(2)],
["Darker skin", "Erythema underestimated " + r(2)],
["Severe psoriasis", "CV risk assessment at presentation and every 5 years " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Teenager with many small scaly spots 2 weeks after a sore throat", "Guttate psoriasis — topical treatment, refer (child/young person) " + r(1) + r(2)],
["Whole body red and scaling, shivering", "Erythrodermic psoriasis — admit, same-day specialist " + r(2)],
["Swollen finger joints and pitted nails", "Psoriatic arthritis — rheumatology " + r(2)],
["Plaques on 15% of body despite 3 months of topicals", "Meets systemic criteria — refer for methotrexate " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Psoriatic arthritis ${r(2)}.</li><li>Cardiovascular disease, metabolic syndrome ${r(2)}.</li><li>Depression and social impact ${r(2)}.</li><li>Steroid atrophy; rebound after stopping potent steroids ${LB.exp()}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Review at 4 weeks (adults) / 2 weeks (children) after starting a topical ${r(2)}.</li><li>Annual check for arthritis and for steroid side effects if using potent courses ${r(2)}.</li><li>Coal tar stains clothes and bedsheets ${r(1)}.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Plaque psoriasis", src: "images/psoriasis-back.jpg", mod: "Clinical photograph", ctx: "Chronic plaque psoriasis", find: "Raised, well-demarcated red plaques with silvery scale on the back", interp: "Classic chronic plaque psoriasis", by: "Marnanel", page: "https://commons.wikimedia.org/wiki/File:Psoriasis_on_back.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Psoriasis", [F.d("Erythroderma or generalised pustules?"), F.a, F.b([["Yes", F.e("Same-day specialist")], ["No", F.s("Topical by site + emollient; arthritis and CV screen")]]), F.a, F.d("Controlled at 4–8 weeks?"), F.a, F.b([["Yes", F.ok("Maintain; breaks between steroid courses")], ["No / > 10% BSA / high impact", F.e("Refer for systemic therapy")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Potent steroid continuously", "Atrophy, rebound, unstable psoriasis", "Courses with breaks " + r(2)],
["Coal tar on face or folds", "Irritation", "Body and scalp only " + r(1)],
["Ignoring joints", "Irreversible joint damage", "Ask every year " + r(2)],
["Oral steroids for psoriasis", "Can trigger pustular or erythrodermic flares on withdrawal", "Avoid " + LB.exp()]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "STG treatment for body plaques?", "Triamcinolone 0.1% ointment twice daily plus 5% coal tar with salicylic acid at bedtime.")}
${qa("Specialist", "NICE first-choice conventional systemic drug?", "Methotrexate; ciclosporin for rapid control, palmoplantar pustulosis or planned conception.")}
${qa("Specialist", "Which psoriasis presentations need same-day referral?", "Erythroderma and generalised pustular psoriasis.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.4 Psoriasis.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Psoriasis: assessment and management (CG153), 2012, updated 2017.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §16.2.4", "<span class='pass'>Checked</span>", "Partly scrambled; salicylic acid strength unreadable"],
["NICE CG153", "<span class='pass'>Checked</span>", "Read"],
["Methotrexate dosing, biologics", "<span class='unv'>Not read</span>", "Specialist only; marked"],
["Calculator", "<span class='pass'>Checked</span>", "NICE site rules + systemic criteria"],
["Images", "<span class='pass'>Checked</span>", "Licensed Commons image"]
], "qc")}` }
]
});
})();
