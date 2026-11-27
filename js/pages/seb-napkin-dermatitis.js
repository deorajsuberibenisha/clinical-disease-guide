/* Seborrhoeic dermatitis and napkin (nappy) dermatitis — all ages. Batch E-10, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.2.2 Seborrheic dermatitis and §16.2.3 Napkin dermatitis (filtered from partly scrambled PDF text); Merck Manual
   Professional 'Seborrheic dermatitis' (2025–26); NICE CG57 (shampoo advice for infants with eczema); NEML 2025 text. Not read: NICE CKS
   seborrhoeic dermatitis and nappy rash, any napkin dermatitis guideline beyond the STG — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "seb-napkin-dermatitis",
title: "Seborrhoeic and napkin dermatitis — all ages",
subtitle: "Greasy scale on the scalp, face folds and chest (seborrhoeic) or a glazed red nappy area sparing the skin folds (irritant napkin): gentle skin care, an imidazole cream, and only mild steroid on the face and nappy area",
age: "All ages", specs: ["derm", "paeds", "medicine", "neo"],
keywords: ["seborrhoeic dermatitis", "seborrheic dermatitis", "cradle cap", "dandruff", "infantile seborrhoeic dermatitis", "Malassezia", "napkin dermatitis", "nappy rash", "diaper rash", "diaper dermatitis", "candida nappy rash", "miconazole cream", "ketoconazole shampoo", "barrier cream", "zinc"],
related: ["eczema", "psoriasis", "rash-approach", "neolocal-child", "hiv-adult", "hiv-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead"><b>Seborrhoeic dermatitis</b> is a mild, chronic eczema in areas rich in sebaceous glands and in skin folds, linked to overgrowth of the skin yeast <i>Malassezia</i> ${r(1)} ${r(3)}. <b>Napkin dermatitis</b> is irritation of the nappy area from urine, faeces, occlusive plastic pants and wet nappies, often with yeast overgrowth ${r(2)}.</p>
<div class="glance">
<div><h4>Infant seb derm</h4><p>Greasy, adherent scales on the vertex and fontanelle (cradle cap): oil massage and daily mild shampoo; miconazole 2% if persistent; do not pick off scales ${r(1)}.</p></div>
<div><h4>Adult seb derm</h4><p>Greasy scale or dry scaly plaques: scalp, eyebrows, nasolabial folds, chest, back, armpits, groin; miconazole 2% + hydrocortisone 1% on face/folds ${r(1)}.</p></div>
<div><h4>Napkin dermatitis</h4><p>Moist, glazed, sore redness of thighs, genitals and buttocks <b>sparing the folds</b>; frequent changes, wash and emollient, nappy-free time, zinc barrier; miconazole a few days ${r(2)}.</p></div>
<div><h4>Think again</h4><p>Severe or resistant adult seborrhoeic dermatitis can be a sign of HIV ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: cloth napkins should be changed often and washed thoroughly; if possible use disposable diapers changed several times a day and in the night, not left overnight; leave the baby without a napkin for a few hours a day ${r(2)}. NEML has miconazole 2% cream, hydrocortisone 1% cream, triamcinolone 0.1% ointment and zinc oxide powder; ketoconazole shampoo is not listed (purchase) ${r(4)}.</p>`)}
` },
{ id: "overview", title: "The conditions in brief", html: `${tbl(["Feature", "Seborrhoeic dermatitis", "Irritant napkin dermatitis"], [
["Cause", "Malassezia yeast; not excess sebum " + r(1) + r(3), "Urine, faeces, plastic pants, prolonged soiled nappies, yeast " + r(2)],
["Age", "Infants (first months) and adults (chronic, relapsing) " + r(1), "Babies in nappies " + r(2)],
["Sites", "Scalp, face, eyebrows, nasolabial folds, retro-auricular, sternum, interscapular, armpits, umbilicus, groin " + r(1) + r(3), "Inner thighs, genitals, buttocks — folds spared " + r(2)],
["Associations", "HIV, some neurological disorders (e.g. Parkinson disease) " + r(3), "Diarrhoea, infrequent changes " + LB.exp()]
])}` },
{ id: "patho", title: "How it develops", html: `${F.chart("Napkin dermatitis", [F.s("Wet occluded skin"), F.a, F.s("Urine + faeces enzymes damage barrier"), F.a, F.s("Irritant redness on convex surfaces"), F.a, F.d("Lasts > 3 days or satellite spots?"), F.a, F.e("Candida overgrowth — involves folds")])}
<p>Candida infection is suggested by involvement of the folds and satellite papules or pustules ${LB.exp("CANDIDA FEATURES NOT IN STG TEXT READ")}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "Merck / NICE", "This guide"], [
["Scalp treatment (adults)", "Miconazole + hydrocortisone / triamcinolone; wash daily", "Merck: ketoconazole 2% shampoo at least twice weekly, then 1–2 times weekly long-term", "Antifungal shampoo if available; steroid solution only as needed " + r(1) + r(3)],
["Infant hair washing", "Mild shampoo daily", "NICE (infants with eczema): leave-on emollient instead of shampoo under 12 months", "Mild shampoo for cradle cap; emollient wash if also eczema " + r(1) + r(5)],
["Diapers", "Disposable preferred if possible", "—", "Whatever allows frequent changes " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Condition", "Look for"], [
["Infantile seborrhoeic dermatitis", "Mild greasy adherent scales on vertex and anterior fontanelle; may extend to face and folds; secondary Candida possible " + r(1)],
["Adult seborrhoeic dermatitis", "Chronic relapsing; greasy or dry scale on scalp (dandruff), eyebrows, nasolabial folds, behind ears, sternum, between shoulder blades, armpits, umbilicus, groin; occasional itch " + r(1) + r(3)],
["Napkin dermatitis", "Moist, glazed, sore erythema of inner thighs, genitals, buttocks, sparing folds " + r(2)]
])}` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Atopic eczema", "Itchy, flexural, dry; family atopy " + P("eczema", "eczema")],
["Psoriasis (scalp, flexural, napkin)", "Well-defined, thicker scale, nail pits " + P("psoriasis", "psoriasis")],
["Tinea capitis", "Hair loss, broken hairs, scale — scrape " + LB.exp()],
["Candida napkin rash", "Folds involved, satellite lesions " + LB.exp()],
["Scabies in infants", "Papules/pustules on palms, soles, axillae " + LB.exp()],
["Langerhans cell histiocytosis", "Scaly, purpuric, persistent scalp and fold rash in an infant — refer " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Diagnosis is clinical ${r(3)}. Consider HIV testing in severe, extensive or treatment-resistant adult seborrhoeic dermatitis ${r(3)} ${LB.int()}; skin scraping if tinea is possible ${LB.exp()}.</p>` },
{ id: "staging", title: "Treatment helper", html: `<div class="calc" data-calc="sebnapkin"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Infantile seborrhoeic dermatitis</h3>
<ul><li>Gently massage the scalp with oil and wash daily with a mild shampoo; miconazole 2% cream if lesions persist; avoid picking off scales and strong shampoos ${r(1)}.</li></ul>
<h3>2. Adult seborrhoeic dermatitis</h3>
<ul>
<li>Face and folds: miconazole 2% cream with hydrocortisone 1% cream ${r(1)}.</li>
<li>Body: moderately potent steroid (triamcinolone 0.1% ointment or fluticasone 0.05% cream) with miconazole ${r(1)}.</li>
<li>Scalp: antifungal shampoo (ketoconazole 1–2%) at least twice weekly, then once or twice weekly long-term; keratolytic or tar shampoos; steroid solution only as needed ${r(3)}.</li>
<li>Wash daily; moisturise; counsel about the chronic relapsing course ${r(1)}.</li>
</ul>
<h3>3. Napkin dermatitis</h3>
<ul>
<li>Change nappies frequently, including at night; wash cloth napkins thoroughly; wash the skin at every change and apply emollient ${r(2)}.</li>
<li>Nappy-free time for a few hours a day ${r(2)}.</li>
<li>Zinc barrier cream to prevent recurrence ${r(2)}.</li>
<li>Miconazole 2% cream for a few days ${r(2)}.</li>
<li>Only mild steroid (hydrocortisone 1%) if inflamed, short courses ${LB.exp("NOT IN STG TEXT READ")}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("miconazole", "Miconazole")} 2% cream — NEML ${r(4)}.</li>
<li>${D("hydrocortisone", "Hydrocortisone")} 1% cream — NEML ${r(4)}.</li>
<li>${D("triamcinolone", "Triamcinolone")} 0.1% ointment — NEML ${r(4)}.</li>
<li>${D("ketoconazole", "Ketoconazole")} 2% shampoo/cream — not on the NEML ${r(3)} ${r(4)}.</li>
<li>Zinc oxide — NEML powder (compounded barrier preparations) ${r(4)} ${LB.loc()}.</li>
<li>${D("coal-tar", "Coal tar")} — NEML 20% solution; tar shampoos ${r(3)} ${r(4)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["People with HIV", "More frequent and severe seborrhoeic dermatitis " + r(3) + " " + P("hiv-adult", "HIV")],
["Newborns", "Cradle cap is common and harmless; persistent or purpuric rash needs review " + LB.exp()],
["Beard and eyebrows", "Lower-potency steroid; less often " + r(3)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["6-week-old with thick yellow scales on the scalp", "Oil massage, daily mild shampoo, no picking; miconazole if persistent " + r(1)],
["9-month-old with bright red nappy area sparing folds; cloth napkins changed twice a day", "Change more often including at night; washing, emollient, nappy-free time, zinc barrier; miconazole a few days " + r(2)],
["Adult with severe new facial seborrhoeic dermatitis and weight loss", "Treat; test for HIV " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Secondary Candida infection ${r(1)}.</li><li>Steroid side effects on the face (atrophy, telangiectasia, perioral dermatitis) with potent steroids ${r(3)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Adult seborrhoeic dermatitis relapses — maintenance shampoo once or twice a week ${r(3)}; refer if not responding ${LB.int()}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Scaly or nappy-area rash", [F.d("Where?"), F.a, F.b([["Scalp/face folds", F.s("Seborrhoeic: imidazole ± mild steroid; antifungal shampoo")], ["Nappy area, folds spared", F.s("Irritant: changes, emollient, barrier, miconazole")], ["Folds + satellites", F.s("Candida: miconazole")]]), F.a, F.e("Not better → reconsider (psoriasis, tinea, scabies, HIV)")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Scraping off cradle cap", "Sore, infected scalp", "Oil and gentle washing " + r(1)],
["Potent steroid in the nappy area", "Occlusion increases absorption and atrophy", "Mild only, short " + LB.exp()],
["Leaving a wet napkin overnight", "Main cause of napkin dermatitis", "Change at night " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which skin is spared in irritant napkin dermatitis?", "The skin folds.")}
${qa("Intern/MO", "STG treatment for adult facial seborrhoeic dermatitis?", "Miconazole 2% cream with hydrocortisone 1% cream.")}
${qa("Specialist", "Which infection should you consider in severe adult seborrhoeic dermatitis?", "HIV.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.2 Seborrheic dermatitis.</li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.3 Napkin dermatitis.</li>
<li id="ref-3">Merck Manual Professional Edition. Seborrheic dermatitis; accessed Nov 2026.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-5">National Institute for Health and Care Excellence. Atopic eczema in under 12s (CG57), updated 2023.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §16.2.2–16.2.3", "<span class='pass'>Checked</span>", "Partly scrambled; readable parts used"],
["Merck seborrhoeic dermatitis", "<span class='pass'>Checked</span>", "Read"],
["NICE CKS seb derm / nappy rash", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "STG-based"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
