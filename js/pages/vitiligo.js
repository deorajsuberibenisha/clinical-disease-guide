/* Vitiligo — all ages. Batch E-11, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.4.1 Vitiligo (autoimmune/oxidative destruction of melanocytes; white hair in lesions; hydrocortisone 1% bd face
   [tacrolimus preferred]; triamcinolone 0.1% elsewhere; refer extensive; better response if localised and in children; long-term treatment;
   Koebner — trauma, tight clothing) — filtered text; Merck Manual Professional 'Vitiligo' (prevalence up to 2%; sun protection; camouflage; potent
   topical steroid ± calcipotriene; calcineurin inhibitors face/groin; NB-UVB for widespread; excimer; short oral steroid for rapidly spreading;
   surgery; depigmentation; psychological impact); NEML 2025. Not read: BAD 2022 vitiligo guideline, VETF consensus — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "vitiligo",
title: "Vitiligo — all ages",
subtitle: "Chalk-white, well-defined patches with normal sensation: protect from sun, treat limited patches with a topical steroid (mild on the face), refer widespread or fast-spreading disease, and take the emotional impact seriously",
age: "All ages", specs: ["derm", "medicine", "paeds"],
keywords: ["vitiligo", "white patches", "depigmentation", "leukoderma", "segmental vitiligo", "poliosis", "white hair", "Koebner", "repigmentation", "narrowband UVB", "tacrolimus vitiligo", "camouflage", "autoimmune thyroid"],
related: ["fungal-skin", "leprosy", "thyroid-adult", "rash-approach", "depression-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Vitiligo is loss of pigment-making cells (melanocytes) from autoimmune and oxidative-stress damage, giving white patches; hair in the patch may turn white ${r(1)}. It affects up to 2% of people and can be psychologically devastating ${r(2)}.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Milky-white, well-defined patches with <b>normal sensation</b>; often face, hands, around orifices, sites of trauma or tight clothing ${r(1)} ${LB.exp()}.</p></div>
<div><h4>Treat limited</h4><p>Face: hydrocortisone 1% twice daily (tacrolimus preferred); elsewhere: triamcinolone 0.1% ${r(1)}.</p></div>
<div><h4>Protect</h4><p>White skin burns — sunscreen and clothing; make-up camouflage for small patches ${r(2)}.</p></div>
<div><h4>Refer</h4><p>Extensive or rapidly spreading disease — dermatologist (phototherapy) ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: hydrocortisone 1% twice daily for facial lesions (tacrolimus preferred where available), triamcinolone 0.1% for other sites, refer extensive disease; explain that response is better in limited disease and in children and that treatment is long-term ${r(1)}. NEML has hydrocortisone 1%, triamcinolone 0.1%, betamethasone 0.05% and clobetasol 0.05% (hospitals with a dermatologist); no topical tacrolimus ${r(3)}. Always test sensation in a pale patch to exclude leprosy ${P("leprosy", "leprosy")}.</p>`)}
` },
{ id: "overview", title: "Types and course", html: `${tbl(["Feature", "Detail"], [
["Non-segmental (generalised)", "Symmetric patches; may spread over years " + LB.exp()],
["Segmental", "One side, one area; often starts in childhood; stabilises " + LB.exp()],
["Koebner phenomenon", "New patches at sites of trauma and tight clothing (belt) " + r(1)],
["Course", "Unpredictable; repigmentation is slow and may not last " + r(2)]
])}` },
{ id: "patho", title: "Mechanism", html: `${F.chart("Vitiligo", [F.s("Genetic + autoimmune + oxidative stress"), F.a, F.s("T cells destroy melanocytes"), F.a, F.e("White patches; white hairs (poor repigmentation)")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Body patches", "Triamcinolone 0.1%", "Potent steroid first line ± calcipotriene; watch atrophy", "Triamcinolone; potent via dermatologist " + r(1) + r(2)],
["Widespread", "Refer", "Narrowband UVB preferred", "Refer " + r(1) + r(2)],
["Rapid spread", "—", "Low-dose oral steroid for a couple of weeks + NB-UVB", "Specialist " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `<p>Well-demarcated depigmented macules and patches; white hair within lesions (poliosis); no scale; normal sensation ${r(1)}. Ask about thyroid disease and other autoimmune conditions ${LB.exp()}.</p>
<div class="calc" data-calc="vitplan"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Leprosy", "Hypopigmented (not white), reduced sensation " + P("leprosy", "leprosy")],
["Pityriasis versicolor", "Fine scale, upper trunk " + P("fungal-skin", "fungal skin")],
["Pityriasis alba", "Children's face, ill-defined, slightly scaly " + LB.exp()],
["Post-inflammatory hypopigmentation", "After eczema or psoriasis " + LB.exp()],
["Chemical leukoderma", "Contact with rubber, hair dye chemicals " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Clinical diagnosis ${r(2)}. Consider thyroid function in generalised vitiligo ${LB.exp("NOT READ")}.</p>` },
{ id: "staging", title: "Extent", html: `<p>Limited (few patches) vs extensive; stable vs rapidly progressing (over weeks to months) ${r(2)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<ul>
<li>Sun protection of white skin (clothing, sunscreen) ${r(2)}.</li>
<li>Face and folds: hydrocortisone 1% twice daily (STG) or a calcineurin inhibitor (tacrolimus) — fewer steroid side effects ${r(1)} ${r(2)}.</li>
<li>Other sites: triamcinolone 0.1% (STG); potent steroid under specialist supervision, watch for atrophy ${r(1)} ${r(2)}.</li>
<li>Widespread: narrowband UVB phototherapy (specialist) ${r(2)}.</li>
<li>Camouflage make-up for small patches ${r(2)}.</li>
<li>Psychological support ${r(2)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("hydrocortisone", "Hydrocortisone")} 1% — NEML ${r(3)}.</li>
<li>${D("triamcinolone", "Triamcinolone")} 0.1% — NEML ${r(3)}.</li>
<li>${D("tacrolimus", "Tacrolimus")} ointment — preferred for face; not on NEML as a topical ${r(1)} ${r(3)}.</li>
<li>${D("calcipotriol", "Calcipotriol")} — with steroid; not on NEML ${r(2)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `<p>Children respond better ${r(1)}; avoid potent steroids on children's faces ${LB.exp()}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Girl with white patches around the eyes and lips, sensation normal", "Hydrocortisone 1% twice daily; sunscreen; review; refer if spreading " + r(1)],
["Man with rapidly spreading patches over 2 months", "Refer — oral steroid + phototherapy may be considered " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Sunburn of depigmented skin ${r(2)}.</li><li>Psychological distress, stigma ${r(2)}.</li><li>Steroid atrophy ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Long-term treatment; review response every few months; refer if no response ${r(1)} ${LB.exp()}.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Segmental vitiligo", src: "images/vitiligo-segmental.jpg", mod: "Clinical photograph", ctx: "Vitiligo", find: "Well-defined white patches on one side of the face and neck", interp: "Depigmentation with normal sensation", by: "La Verdad", page: "https://commons.wikimedia.org/wiki/File:Vitiligo_segmentar.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("White patch", [F.d("Sensation reduced?"), F.a, F.b([["Yes", F.e("Leprosy work-up")], ["No", F.d("Scale?")]]), F.a, F.b([["Scale", F.s("Fungal / pityriasis alba")], ["No scale, chalk white", F.ok("Vitiligo: steroid by site, sun protection; refer if extensive")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Not testing sensation", "Leprosy missed", "Test every pale patch " + r(1)],
["Potent steroid long-term on the face", "Atrophy", "Mild steroid or tacrolimus " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "STG treatment for facial vitiligo?", "Hydrocortisone 1% twice daily (tacrolimus preferred where available).")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.4.1 Vitiligo.</li>
<li id="ref-2">Merck Manual Professional Edition. Vitiligo; accessed Nov 2026.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §16.4.1", "<span class='pass'>Checked</span>", "Partly scrambled"],
["Merck vitiligo", "<span class='pass'>Checked</span>", "Read"],
["BAD 2022 guideline", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "STG + Merck"],
["Images", "<span class='pass'>Checked</span>", "Licensed Commons image"]
], "qc")}` }
]
});
})();
