/* Eczema (atopic and contact dermatitis) — all ages. Batch E-10, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.2.1 Eczema (types; KMnO4 soaks; triamcinolone 0.1% oint bd body; 2-week review; patch test at JDWNRH; children:
   ointments, avoid soap, moisturise 2–3×/day) — PDF text partly scrambled, read with a filter; NICE CG57 Atopic eczema in under 12s (2007, updated
   2023/2025 — diagnosis, severity table 1, stepped care table 2, emollients, steroid potency by site and age, weekend therapy, antihistamines,
   infection, eczema herpeticum); Merck Manual Professional 'Atopic dermatitis' and 'Contact dermatitis' (2025–26); NEML 2025 text.
   Not read: NICE TA81/TA82 in full, BAD adult eczema guideline, AAD 2023 — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "eczema",
title: "Eczema (atopic and contact dermatitis) — all ages",
subtitle: "Itchy, dry, red skin: emollients every day for everyone, a topical steroid matched to severity and body site for flares, soaks for weeping skin, and a look for infection and triggers",
age: "All ages", specs: ["derm", "paeds", "medicine"],
keywords: ["eczema", "atopic dermatitis", "atopic eczema", "dermatitis", "contact dermatitis", "allergic contact dermatitis", "irritant contact dermatitis", "hand eczema", "nummular dermatitis", "discoid eczema", "stasis dermatitis", "lichen simplex", "emollient", "topical steroid", "triamcinolone", "hydrocortisone cream", "potassium permanganate soak", "wet wrap", "eczema herpeticum", "infected eczema", "hair dye allergy", "patch test", "weekend therapy"],
related: ["rash-approach", "seb-napkin-dermatitis", "psoriasis", "urticaria", "scabies-adult", "ssti-child", "ssti-adult", "asthma-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Eczema (dermatitis) is a group of itchy skin conditions that can be acute (red, oozing, blistered), subacute or chronic (dry, thick, darker) ${r(1)}. <b>Atopic eczema</b> starts in infancy or early childhood and often improves with age; <b>contact dermatitis</b> follows irritants or allergens such as detergents, hair dye, nickel and cement ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Diagnose (child)</h4><p>Itchy skin plus 3 or more: flexural dermatitis (cheeks/extensors ≤ 18 months), previous flexural dermatitis, dry skin in the past year, asthma/rhinitis (or atopic first-degree relative under 4 y), onset under 2 y ${r(2)}.</p></div>
<div><h4>Always</h4><p>Emollients for the whole body, every day, even when clear — large amounts (250–500 g a week in children); no soap ${r(2)} ${r(1)}.</p></div>
<div><h4>Flares</h4><p>Topical steroid by severity and site: mild for face; moderate (triamcinolone 0.1%) for body; review at 2 weeks ${r(1)} ${r(2)}.</p></div>
<div><h4>Danger</h4><p>Rapidly worsening painful eczema with punched-out erosions = <b>eczema herpeticum</b>: systemic aciclovir, same-day referral ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG uses <b>dilute pink potassium permanganate soaks three times a day</b> (or saline) to dry weeping eczema, <b>triamcinolone 0.1% ointment twice daily</b> for the body, hydrocortisone 1% for the face and folds, cetirizine 10 mg for itch, and review after 2 weeks ${r(1)}. Patch testing for allergic contact dermatitis is available at JDWNRH ${r(1)}. NEML has hydrocortisone 1%, triamcinolone 0.1%, betamethasone dipropionate 0.05% and clobetasol 0.05% (the last two supplied to hospitals with a dermatologist), KMnO₄ crystals and cetirizine; <b>no emollient product is listed</b> — the STG suggests petroleum jelly or heavy creams ${r(4)} ${r(1)}. Hair dye (paraphenylenediamine) is a common cause of severe allergic contact dermatitis ${r(1)}.</p>`)}
` },
{ id: "overview", title: "Types of eczema", html: `${tbl(["Type", "Features"], [
["Atopic dermatitis", "Infancy or early childhood; face and extensors in infants, flexures later; often with asthma and rhinitis; Asian and Black children may have extensor, discoid or follicular patterns " + r(1) + r(2)],
["Irritant contact dermatitis", "Strong irritants briefly or weak irritants for long (detergents, alkalis, cutting oils) " + r(1)],
["Allergic contact dermatitis", "Delayed (type IV) reaction after previous sensitisation: hair dye, nickel, cement, preservatives in creams, plants " + r(1)],
["Nummular (discoid)", "Coin-shaped vesicular or crusted plaques on limbs; persistent, recurrent " + r(1)],
["Vesicular hand/foot dermatitis", "Recurrent itchy vesicles or bullae on palms and soles " + r(1)],
["Stasis dermatitis", "Lower legs with varicose veins, oedema, haemosiderin " + r(1)],
["Lichen simplex / nodular prurigo", "Thickened plaques or nodules from chronic scratching — nape, legs, anogenital " + r(1)]
])}` },
{ id: "patho", title: "How it develops", html: `
${F.chart("Itch–scratch cycle", [F.s("Skin barrier defect (atopy) or irritant/allergen contact"), F.a, F.s("Inflammation and itch"), F.a, F.s("Scratching damages the barrier further"), F.a, F.d("Infection (S. aureus, herpes simplex)?"), F.a, F.e("Flares, thickening, sleep loss")])}
<p>Treatment works on both sides: repair the barrier (emollients, no soap) and calm inflammation (topical steroids) ${r(3)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE CG57 (children)", "Other", "This guide"], [
["Preventing flares", "Consider topical steroid on 2 consecutive days a week on problem areas for frequent flares (2–3/month); review in 3–6 months", "Merck: steroids should be stopped once controlled and never used to prevent recurrences " + r(3), "Weekend therapy is an option for frequent flares in children under review " + LB.int()],
["Antihistamines", "Not routinely; 1-month trial of non-sedating if severe or with urticaria; sedating 7–14 days for sleep (≥ 6 months)", "STG: cetirizine 10 mg " + r(1) + "; Merck: sedating at bedtime may help itch " + r(3), "Use for sleep and severe itch only"],
["Weeping eczema", "—", "STG: KMnO₄ or saline soaks three times a day " + r(1), "Use soaks; stop once dry"],
["Bath additives", "Do not offer (BATHE trial)", "—", "Leave-on emollient as soap substitute " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Stage", "Look for"], [
["Acute", "Red, swollen papules and plaques with vesicles, weeping and crusts; often secondary S. aureus infection " + r(1)],
["Chronic", "Drier, thicker, darker (lichenified) plaques, less vesiculation " + r(1)],
["Severity (NICE)", "Mild: dry areas, infrequent itch; moderate: dry skin, frequent itch, redness ± excoriation and local thickening; severe: widespread dryness, incessant itch, redness, bleeding, oozing, cracking, pigment change " + r(2)],
["Infection", "Weeping pustules, crusts, rapid worsening, fever, failure to respond " + r(2)],
["Eczema herpeticum", "Rapidly worsening painful eczema, clustered blisters like early cold sores, punched-out 1–3 mm erosions, fever " + r(2)]
])}
<h3>The typical patient</h3>
<p>A 3-year-old has itchy, dry, red patches behind the knees and in the elbow creases, waking at night; her father has asthma. She is washed with soap daily. Stop soap, give a large tub of petroleum jelly or emollient for the whole body 2–3 times a day, a moderate steroid (triamcinolone 0.1%) once or twice daily on active patches for up to 2 weeks (mild hydrocortisone on the face), cut nails short, and review in 2 weeks ${r(1)} ${r(2)}.</p>
<div class="calc" data-calc="eczstep"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Scabies", "Burrows in finger webs, family itch, night itch " + P("scabies-adult", "scabies")],
["Seborrhoeic dermatitis", "Greasy scale on scalp, eyebrows, nasolabial folds " + P("seb-napkin-dermatitis", "seborrhoeic dermatitis")],
["Psoriasis", "Well-demarcated plaques with silvery scale, nail pits " + P("psoriasis", "psoriasis")],
["Tinea", "Ring with active scaly edge — scrape first " + LB.exp()],
["Impetigo", "Honey crusts " + P("ssti-child", "skin infection")]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "When"], [
["None", "Most eczema is a clinical diagnosis " + r(3)],
["Pus swab", "Suspected secondary bacterial infection " + r(1)],
["Patch test (JDWNRH)", "Suspected allergic contact dermatitis; worsening of controlled eczema; reaction to topical treatments " + r(1) + r(2)],
["Food allergy assessment", "Immediate reactions to a food, or moderate–severe infant eczema not controlled, especially with gut symptoms or faltering growth; no high-street allergy tests " + r(2)],
["Venous Doppler", "Stasis dermatitis with varicose veins " + r(1)]
])}` },
{ id: "staging", title: "Stepped care (NICE)", html: `
${tbl(["Severity", "Treatment options"], [
["Mild", "Emollients + mild-potency topical steroid " + r(2)],
["Moderate", "Emollients + moderate-potency steroid; topical calcineurin inhibitors (specialist); bandages " + r(2)],
["Severe", "Emollients + potent steroid; calcineurin inhibitors; bandages; phototherapy; systemic therapy (specialist) " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Skin care (all)</h3>
<ul>
<li>Emollients every day on the whole body, more often and in larger amounts than other treatments; smooth on, do not rub; use as soap substitute ${r(2)}.</li>
<li>STG: bathe daily (bedtime), pat dry, moisturise face and body immediately, then apply medicines; avoid soap in children (mild soap once a week); petroleum jelly or heavy creams ${r(1)}.</li>
<li>Avoid triggers: irritants (soaps, detergents), allergens, wool next to skin; short nails ${r(1)} ${r(2)} ${r(3)}.</li>
</ul>
<h3>2. Topical corticosteroids</h3>
<ul>
<li>Potency by severity and site; apply once or twice daily only to active eczema (or active in the last 48 hours); continue about 48 hours after the flare settles ${r(2)}.</li>
<li>Face and neck: mild (hydrocortisone 1%); moderate only 3–5 days for severe flares. Axillae/groin: moderate or potent only 7–14 days ${r(2)}.</li>
<li>No potent steroid under 12 months without specialist advice; no very potent steroid in children without specialist advice ${r(2)}.</li>
<li>STG: triamcinolone 0.1% ointment twice daily on the body for 2 weeks, then review (1 week if severe) ${r(1)}.</li>
<li>Not controlled in 7–14 days: exclude infection; from 12 months, a potent steroid for up to 14 days (not face/neck); then refer ${r(2)}.</li>
</ul>
<h3>3. Weeping eczema</h3>
<p>Potassium permanganate soaks — dilute pale pink, almost transparent, three times daily; soak hands and feet directly, apply on gauze elsewhere; avoid eyes; saline is an alternative; wet wraps where available ${r(1)}. NICE: whole-body wet wraps not first line, only by trained staff, 7–14 days with steroids ${r(2)}.</p>
<h3>4. Infection</h3>
<ul>
<li>Oral or topical antibiotics if infected ${r(1)}; replace topical products after an infection ${r(2)}.</li>
<li>Suspected herpes simplex lesion: oral aciclovir; eczema herpeticum: systemic aciclovir + same-day dermatology (ophthalmology if near the eye) ${r(2)}.</li>
</ul>
<h3>5. Contact dermatitis</h3>
<p>Identify and avoid the irritant or allergen (lifelong for allergens); cool compresses; mid-potency steroid (triamcinolone 0.1%); a 7–14 day oral steroid course for severe blistering or extensive disease; healing may take up to 3 weeks ${r(3)}.</p>
<h3>6. Refer</h3>
<p>No response to the above, diagnostic doubt, severe or widespread disease, need for systemic treatment or phototherapy ${r(1)} ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("hydrocortisone", "Hydrocortisone")} 1% cream — NEML; mild potency (face, folds, infants) ${r(4)}.</li>
<li>${D("triamcinolone", "Triamcinolone")} 0.1% ointment — NEML; moderately potent (STG) ${r(1)} ${r(4)}.</li>
<li>${D("betamethasone", "Betamethasone dipropionate")} 0.05% and ${D("clobetasol", "clobetasol")} 0.05% — potent / very potent; NEML, supplied to hospitals with a dermatologist ${r(4)}.</li>
<li>${D("potassium-permanganate", "Potassium permanganate")} crystals — NEML; soaks ${r(1)} ${r(4)}.</li>
<li>${D("cetirizine", "Cetirizine")} 10 mg — NEML ${r(1)}; ${D("hydroxyzine", "hydroxyzine")} (sedating, bedtime) ${r(3)}.</li>
<li>${D("tacrolimus", "Tacrolimus")} ointment — second line, specialist (NEML lists only oral tacrolimus) ${r(2)} ${r(4)}.</li>
<li>${D("aciclovir", "Aciclovir")} — eczema herpeticum ${r(2)}.</li>
<li>${D("mupirocin", "Mupirocin")} 2% — NEML; small infected areas ${r(4)} ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Infants", "Mild steroids; no potent steroid under 12 months without specialist; bottle-fed under 6 months with uncontrolled moderate–severe eczema: 6–8 week trial of extensively hydrolysed or amino acid formula " + r(2)],
["Breastfed babies", "Unknown whether mother's diet helps; consider allergen-specific exclusion only if food allergy strongly suspected " + r(2)],
["Darker skin", "Redness less visible; pigment change common; extensor and follicular patterns " + r(2)],
["Workers (cement, cleaning, health care)", "Irritant/allergic hand dermatitis — protection, substitutes " + r(1)],
["Older adults with leg eczema", "Stasis dermatitis — treat veins and oedema " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Woman with swollen, weeping face and scalp 2 days after dyeing her hair", "Allergic contact dermatitis to hair dye: soaks, steroid, oral steroid if severe; avoid dye; patch test later " + r(1) + r(3)],
["Child's eczema suddenly painful with punched-out erosions and fever", "Eczema herpeticum: systemic aciclovir, same-day referral " + r(2)],
["Weeping eczema on both hands of a cleaner", "KMnO₄ soaks, triamcinolone, gloves with cotton liners, avoid detergents " + r(1)],
["Toddler with eczema flaring every 2 weeks", "Check adherence and emollient amount; consider weekend steroid therapy " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Secondary bacterial infection (S. aureus) ${r(1)}; eczema herpeticum ${r(2)}.</li>
<li>Sleep loss, school and work disruption, psychological impact on child and carers ${r(2)}.</li>
<li>Steroid side effects with misuse: skin thinning, striae, infection; adrenal suppression with widespread potent use in infants ${r(3)}.</li>
<li>Pigment change and lichenification ${r(1)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Review after 2 weeks of steroid (1 week if severe) ${r(1)}.</li>
<li>Give a written plan for flares: start treatment early, continue about 48 hours after settling ${r(2)}.</li>
<li>Most atopic eczema improves as children grow, but not all ${r(1)} ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Atopic eczema", src: "images/atopic-dermatitis-child.jpg", mod: "Clinical photograph", ctx: "Atopic dermatitis", find: "Red, scratched, dry patches in the elbow crease of a child", interp: "Flexural, itchy, dry = atopic eczema", by: "Eisfelder (de.wikipedia)", page: "https://commons.wikimedia.org/wiki/File:Atopic_dermatitis_child.JPG", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Itchy red dry skin", [F.s("Emollient + no soap for everyone"), F.a, F.d("Weeping / infected / eczema herpeticum?"), F.a, F.b([["Weeping", F.s("KMnO₄ or saline soaks")], ["Infected", F.s("Antibiotic; new tubs of creams")], ["Herpeticum", F.e("Aciclovir; same-day referral")]]), F.a, F.s("Steroid by severity and site (face mild; body moderate)"), F.a, F.d("Better at 2 weeks?"), F.a, F.b([["Yes", F.ok("Step down; flare plan")], ["No", F.e("Recheck diagnosis, adherence, contact allergy; refer")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Small tubes of emollient", "Not enough to repair the barrier", "250–500 g a week in children " + r(2)],
["Steroid phobia → undertreatment", "Uncontrolled eczema, sleep loss", "Explain benefits outweigh harms when used correctly " + r(2)],
["Potent steroid on the face", "Atrophy, rosacea-like eruption", "Mild potency on the face " + r(2)],
["Missing herpes", "Eczema herpeticum can blind or kill", "Look for punched-out erosions " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How do you dry weeping eczema with NEML supplies?", "Dilute pale-pink potassium permanganate soaks three times daily (or saline).")}
${qa("Intern/MO", "Which steroid for a child's face?", "Mild potency (hydrocortisone 1%); moderate only 3–5 days for severe flares.")}
${qa("Specialist", "When do NICE suggest weekend steroid therapy?", "Frequent flares (2–3 a month) once controlled — 2 consecutive days a week on problem areas, review in 3–6 months.")}
${qa("Specialist", "Signs of eczema herpeticum?", "Rapidly worsening painful eczema, clustered blisters, uniform punched-out erosions 1–3 mm, fever, lethargy.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.1 Eczema.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Atopic eczema in under 12s: diagnosis and management (CG57), 2007, updated 2023.</li>
<li id="ref-3">Merck Manual Professional Edition. Atopic dermatitis (eczema); Contact dermatitis; accessed Nov 2026.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §16.2.1", "<span class='pass'>Checked</span>", "Partly scrambled text; readable parts used"],
["NICE CG57", "<span class='pass'>Checked</span>", "Read"],
["Merck atopic and contact dermatitis", "<span class='pass'>Checked</span>", "Read"],
["Adult eczema guidelines (BAD, AAD)", "<span class='unv'>Not read</span>", "Adult advice from STG and Merck"],
["Calculator", "<span class='pass'>Checked</span>", "NICE table 1/2 and potency rules"],
["Images", "<span class='pass'>Checked</span>", "Licensed Commons image"]
], "qc")}` }
]
});
})();
