/* Superficial fungal skin infections (tinea, pityriasis versicolor, candidiasis) — all ages. Batch E-11, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.1.1.1 Dermatophytosis (incl. Table 16.1 griseofulvin — child dose cell unreadable in the PDF text), §16.1.1.2
   Pityriasis versicolor, §16.1.1.3 Candidiasis (filtered text); Merck Manual Professional: tinea capitis, corporis, pedis, onychomycosis,
   tinea versicolor, mucocutaneous candidiasis (2025–26); app drug monograph griseofulvin (FDA label: child > 2 y 10 mg/kg/day microsize);
   NEML 2025 text. Not read: BAD tinea capitis guideline, IADVL recalcitrant dermatophytosis consensus — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "fungal-skin",
title: "Fungal skin infections — tinea, pityriasis versicolor and candida",
subtitle: "Ring-shaped scaly patches, white scaly patches on the upper trunk, or red macerated folds with satellite spots: confirm with a skin scraping, treat beyond the edge and past clearance, never with steroid–antifungal combination creams",
age: "All ages", specs: ["derm", "medicine", "paeds", "id"],
keywords: ["tinea", "ringworm", "dermatophytosis", "tinea corporis", "tinea cruris", "jock itch", "tinea pedis", "athlete's foot", "tinea capitis", "kerion", "tinea faciei", "tinea manuum", "tinea unguium", "onychomycosis", "pityriasis versicolor", "tinea versicolor", "candidiasis", "intertrigo", "oral thrush", "chronic paronychia", "KOH mount", "griseofulvin", "miconazole", "fluconazole", "terbinafine", "steroid combination cream", "tinea incognito"],
related: ["rash-approach", "eczema", "psoriasis", "seb-napkin-dermatitis", "dm-adult", "hiv-adult", "sti-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Dermatophytes (Trichophyton, Microsporum, Epidermophyton) invade keratin in skin, hair and nails; <i>Malassezia</i> yeast causes pityriasis versicolor; <i>Candida</i> infects warm moist folds, mouth, genitals and nail folds ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Tinea</h4><p>Ring-shaped red plaque with central clearing and scaly edge; scalp: patchy hair loss with scale; nails: thick yellow ${r(1)}.</p></div>
<div><h4>Confirm</h4><p>Skin scraping or nail clipping for KOH mount (hyphae, spores) ${r(1)}.</p></div>
<div><h4>Treat</h4><p>Single lesion: miconazole 2% twice daily over and beyond the edge, until clear + 1 more week. Extensive, scalp, nails: oral treatment ${r(1)}.</p></div>
<div><h4>Avoid</h4><p>Over-the-counter steroid–antifungal combination creams — they make tinea spread ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: griseofulvin is the oral drug for dermatophytes (adults 750–1,000 mg a day for 4 weeks for tinea pedis and extensive tinea corporis; 750 mg a day for 3 months for nails; children with tinea capitis by body weight for 6–8 weeks — the mg/kg figure is unreadable in our copy); do a baseline liver test ${r(1)}. NEML: griseofulvin 250 mg, fluconazole, miconazole 2% cream, clotrimazole pessaries, nystatin; <b>no terbinafine or itraconazole</b>; selenium sulfide and ketoconazole shampoos must be bought ${r(4)}. Steroid–antifungal combination creams sold over the counter are a common cause of extensive, resistant tinea ${r(1)} ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Infection", "Where / how it looks"], [
["Tinea corporis / faciei", "Body, face: annular red plaque, central clearing, peripheral scale " + r(1) + r(2)],
["Tinea cruris", "Groin and flexures " + r(1)],
["Tinea pedis / manuum", "Soles, toe webs, palms: scaling, maceration; hand often one-sided " + r(1) + r(2)],
["Tinea capitis", "Children: patchy hair loss with scaling; kerion = boggy inflamed swelling from animal fungus " + r(1)],
["Tinea unguium (onychomycosis)", "Thick, yellow, crumbly nails " + r(1)],
["Pityriasis versicolor", "Pale or brown scaly patches on upper trunk; scale on gentle rubbing; worse in hot humid months; recurs " + r(1)],
["Candidiasis", "Red macerated folds with satellite pustules; white plaques in toe webs; oral thrush; curdy vulvovaginitis; red itchy glans; chronic paronychia (wet work) " + r(1)]
])}` },
{ id: "patho", title: "Why it spreads and recurs", html: `${F.chart("Tinea", [F.s("Contact with infected people, animals, soil, shared combs, towels, slippers, razors"), F.a, F.s("Fungus grows in keratin; warmth and sweat help"), F.a, F.d("Steroid cream applied?"), F.a, F.e("Itch reduced but fungus spreads — extensive, atypical 'tinea incognito'")])}
<p>Candida needs predisposing factors: obesity, diabetes, antibiotics, wet macerated skin, dentures, immunosuppression ${r(1)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Oral drug for tinea capitis", "Griseofulvin by weight 6–8 weeks", "Terbinafine first line for Trichophyton; griseofulvin better for Microsporum", "Griseofulvin (NEML); terbinafine not available " + r(1) + r(2)],
["Extensive tinea corporis", "Griseofulvin 750–1,000 mg/day 4 weeks", "Terbinafine or itraconazole 3–4 weeks; fluconazole alternative", "Griseofulvin or fluconazole " + r(1) + r(2)],
["Pityriasis versicolor", "Miconazole twice daily 6–8 weeks; shampoo as body wash; fluconazole 150 mg daily 7 days if needed", "Topical azole 2 weeks or selenium sulfide; fluconazole 2–4 weeks for extensive or recurrent", "Topical first; fluconazole for extensive " + r(1) + r(2)],
["Onychomycosis", "Griseofulvin 750 mg/day 3 months", "Terbinafine or itraconazole preferred; fluconazole an option", "Griseofulvin or fluconazole; treat only if symptomatic or diabetic " + r(1) + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<p>Tinea: itchy annular plaque with an active scaly edge; scalp lesions with broken hairs and scale; palms and soles with dry scaling; nails thick and yellow ${r(1)}. Pityriasis versicolor: hypo- or hyperpigmented fine scaly patches on the upper trunk ${r(1)}. Candida: red, moist folds with satellite papules or pustules ${r(1)}.</p>
<h3>The typical patient</h3>
<p>A 28-year-old with itchy spreading rings on the waist and groin has used a cream containing a steroid and antifungal from a shop for 3 months. KOH scraping shows hyphae. Stop the combination cream, apply miconazole 2% twice daily over and beyond the lesions, add oral griseofulvin for extensive disease (liver test first), wash and change clothes daily, do not share towels; continue until clear and 1 more week ${r(1)}.</p>
<div class="calc" data-calc="tinearx"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Eczema (nummular)", "Coin-shaped, no central clearing " + P("eczema", "eczema")],
["Psoriasis", "Thick silvery scale, nails pitted " + P("psoriasis", "psoriasis")],
["Pityriasis rosea", "Herald patch, collarette scale, trunk " + P("pr-papular-fde", "pityriasis rosea")],
["Vitiligo (vs pityriasis versicolor)", "No scale, chalk-white, often hands and face " + P("vitiligo", "vitiligo")],
["Leprosy (vs hypopigmented tinea/PV)", "Reduced sensation in the patch " + P("leprosy", "leprosy")],
["Alopecia areata (vs tinea capitis)", "Smooth bald patch, no scale " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `${tbl(["Test", "Notes"], [
["KOH mount of skin scraping / nail clipping / plucked hair", "Hyphae and spores; pityriasis versicolor shows both (dimorphic) " + r(1)],
["Fungal culture, Wood light", "Tinea capitis " + r(2)],
["Baseline liver function", "Before griseofulvin " + r(1)],
["Blood glucose, HIV test", "Recurrent or extensive candidiasis or tinea " + LB.exp()]
])}` },
{ id: "staging", title: "When is oral treatment needed?", html: `<p>Oral treatment: tinea capitis (always), nails, extensive or steroid-modified tinea corporis, tinea pedis not responding, extensive pityriasis versicolor, complicated candidiasis ${r(1)} ${r(2)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Dermatophytes (STG Table 16.1)</h3>
${tbl(["Type", "Treatment"], [
["Single lesion of corporis/cruris, no previous treatment", "Miconazole 2% cream twice daily until clear (+1 week) " + r(1)],
["Extensive or steroid-modified corporis", "Griseofulvin 750–1,000 mg/day for 4 weeks (adults) + topical " + r(1)],
["Tinea pedis", "Griseofulvin 750–1,000 mg/day 4 weeks (adults); dry the toe webs, open footwear, change socks " + r(1) + r(2)],
["Tinea unguium", "Griseofulvin 750 mg/day for 3 months (adults) " + r(1)],
["Tinea capitis (children)", "Griseofulvin by body weight for 6–8 weeks (FDA microsize: 10 mg/kg/day over 2 years) + selenium sulfide or ketoconazole shampoo twice weekly to reduce spread; kerion: short oral steroid " + r(1) + r(5) + r(2)]
])}
<p>Combine oral with topical; apply over and beyond the edge; continue until clear and 1 more week ${r(1)}.</p>
<h3>2. Pityriasis versicolor</h3>
<p>Miconazole 2% twice daily for 6–8 weeks or until clear; selenium sulfide or ketoconazole shampoo as a body wash; oral fluconazole 150 mg once daily for 7 days if needed (STG) ${r(1)}. Pale patches take months to repigment; recurrence is common ${r(2)}.</p>
<h3>3. Candidiasis</h3>
<p>Remove predisposing factors; nystatin for the mouth; miconazole 2% twice daily for skin; clotrimazole pessary for vaginal candidiasis (STG: 200 mg at night for 3 nights); oral antifungal for complicated disease ${r(1)}. Merck: fluconazole once weekly for 2–4 weeks for extensive intertrigo ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("miconazole", "Miconazole")} 2% cream — NEML ${r(4)}.</li>
<li>${D("griseofulvin", "Griseofulvin")} 250 mg — NEML; take with fatty food; not in pregnancy; men avoid fathering a child for 6 months; reduces contraceptive effect ${r(4)} ${r(5)}.</li>
<li>${D("fluconazole", "Fluconazole")} — NEML ${r(4)}.</li>
<li>${D("nystatin", "Nystatin")} — NEML ${r(4)}.</li>
<li>${D("clotrimazole", "Clotrimazole")} pessary — NEML ${r(4)}.</li>
<li>${D("itraconazole", "Itraconazole")}, terbinafine — not on NEML ${r(3)} ${r(4)}.</li>
<li>${D("ketoconazole", "Ketoconazole")} / ${D("selenium-sulfide", "selenium sulfide")} shampoo — purchase ${r(1)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Tinea capitis needs oral treatment; children may attend school during treatment " + r(2)],
["Pregnancy", "No griseofulvin; topical azoles " + r(5)],
["Diabetes", "Treat nail and foot fungus — cellulitis risk " + r(2)],
["Denture wearers", "Remove and clean dentures at night (antiseptic or nystatin) " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["6-year-old with scaly bald patch and a boggy swelling", "Kerion: griseofulvin by weight 6–8 weeks + short steroid; shampoo for family " + r(1) + r(2)],
["Teenager with pale scaly patches on the chest every summer", "Pityriasis versicolor: miconazole or shampoo body wash; fluconazole if extensive " + r(1)],
["Obese diabetic woman with red macerated groin folds and satellite spots", "Candida intertrigo: miconazole, keep dry, control glucose " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Extensive resistant tinea from steroid creams ${r(1)}.</li><li>Scarring alopecia from kerion ${r(2)}.</li><li>Cellulitis from foot fungus ${r(2)}.</li><li>Dermatophytid (id) reaction ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Review regularly until clear; refer to a dermatologist if no response ${r(1)}. Prevention: bathe and change clothes daily; do not share clothes, slippers, combs, towels, razors ${r(1)}.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Tinea corporis", src: "images/tinea-corporis-arm.jpg", mod: "Clinical photograph", ctx: "Tinea corporis", find: "Ring-shaped lesion with red scaly edge and clearer centre", interp: "Scrape for KOH; treat beyond the edge", by: "CDC / Dr Lucille K. Georg", page: "https://commons.wikimedia.org/wiki/File:Ringworm_on_the_arm,_or_tinea_corporis_due_to_Trichophyton_mentagrophytes_PHIL_2938_lores.jpg", lic: "Public domain" })}${fig({ title: "Pityriasis versicolor", src: "images/pityriasis-versicolor.jpg", mod: "Clinical photograph", ctx: "Pityriasis versicolor", find: "Small pale-brown finely scaly macules merging on the trunk", interp: "Malassezia yeast; recurs in hot weather", by: "Evanherk (nl.wikipedia)", page: "https://commons.wikimedia.org/wiki/File:P_versicolorklein.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Scaly or macerated rash", [F.s("KOH scraping"), F.a, F.d("Which?"), F.a, F.b([["Tinea", F.s("Topical if limited; oral if scalp, nails, extensive")], ["PV", F.s("Topical azole/shampoo; fluconazole if extensive")], ["Candida", F.s("Remove cause; miconazole/nystatin")]]), F.a, F.e("No response → check adherence, stop steroid creams, refer")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Steroid–antifungal creams", "Spread, resistance", "Plain antifungal " + r(1)],
["Stopping when itch stops", "Relapse", "Until clear + 1 week " + r(1)],
["Topical only for scalp ringworm", "Does not reach the hair", "Oral treatment " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How is tinea confirmed?", "Skin scraping for KOH mount showing hyphae and spores.")}
${qa("Specialist", "Why avoid steroid–antifungal combination creams?", "They suppress inflammation while the fungus spreads — extensive, atypical, resistant tinea.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.1.1 Fungal infections (dermatophytosis, pityriasis versicolor, candidiasis).</li>
<li id="ref-2">Merck Manual Professional Edition. Tinea capitis; Tinea corporis; Tinea pedis; Onychomycosis; Tinea versicolor; Mucocutaneous candidiasis; accessed Nov 2026.</li>
<li id="ref-3">Merck Manual Professional Edition. Table: Options for treatment of superficial fungal infections; accessed Nov 2026.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-5">US FDA. Griseofulvin microsize label (as summarised in this app's drug database).</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §16.1.1", "<span class='pass'>Checked</span>", "Child griseofulvin dose cell unreadable — FDA dose used"],
["Merck fungal pages", "<span class='pass'>Checked</span>", "Read"],
["BAD / IADVL guidelines", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "STG + FDA"],
["Images", "<span class='pass'>Checked</span>", "Licensed Commons images"]
], "qc")}` }
]
});
})();
