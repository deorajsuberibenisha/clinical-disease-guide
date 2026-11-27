/* Leprosy (Hansen disease) — all ages. Batch E-11, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.1.2.5 Leprosy (PB/MB definitions with slit-skin smear; incubation 5–20 years; symptoms; nerve examination;
   SSS from ear lobe, forehead and two active patches; MDT blister packs PB 6 months, MB 12 months; contact tracing; reactions → continue MDT and
   refer; 'for details refer to National leprosy guideline') — filtered text; Merck Manual Professional 'Leprosy' (2025: classification ≤ 5 / ≥ 6
   lesions, WHO 2018 adult regimens for PB and MB, reactions type 1 and 2, single-dose rifampicin PEP for contacts ≥ 2 years); BBS news on Bhutan
   leprosy (elimination 1997; district clusters, late detection); web search summary of WHO child MDT doses (NOT read at WHO source); NEML 2025.
   Not read: Bhutan national leprosy guideline, WHO 2018 guideline full text — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "leprosy",
title: "Leprosy (Hansen disease) — all ages",
subtitle: "A pale or red patch with reduced feeling, or thickened nerves with weak hands or feet: test sensation, feel the nerves, refer for slit-skin smear, and treat with 6 or 12 months of multidrug therapy — leprosy is curable and stops spreading once treatment starts",
age: "All ages", specs: ["derm", "id", "medicine", "neuro", "ph"],
keywords: ["leprosy", "Hansen disease", "Mycobacterium leprae", "paucibacillary", "multibacillary", "MDT", "multidrug therapy", "slit skin smear", "thickened nerve", "ulnar nerve", "common peroneal nerve", "anaesthetic patch", "claw hand", "foot drop", "lagophthalmos", "lepra reaction", "type 1 reaction", "reversal reaction", "erythema nodosum leprosum", "ENL", "dapsone", "clofazimine", "rifampicin", "post-exposure prophylaxis single dose rifampicin"],
related: ["fungal-skin", "vitiligo", "rash-approach", "tb-adult", "diabeticfoot-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Leprosy is a chronic infection of skin and nerves by <i>Mycobacterium leprae</i>, spread by respiratory droplets from untreated patients; incubation is 5–20 years ${r(1)}. Nerve damage causes disability of hands, feet and eyes; treatment cures the infection but does not reverse established nerve damage ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Pale or red patch, plaque or shiny nodules with <b>reduced sensation</b>; tender thick nerves; weakness of hands, feet or eyelids; numbness, tingling; painless ulcers ${r(1)}.</p></div>
<div><h4>Examine</h4><p>Light touch (cotton wisp, paper edge) and pin in the patch; feel ulnar and common peroneal nerves; test small hand muscles, wrist and foot drop ${r(1)}.</p></div>
<div><h4>Classify</h4><p>Paucibacillary (PB): up to 5 lesions, smear negative. Multibacillary (MB): 6 or more lesions, nerve involvement or positive smear ${r(1)} ${r(2)}.</p></div>
<div><h4>Treat</h4><p>MDT blister packs: PB 6 months, MB 12 months — rifampicin monthly (supervised) + daily dapsone and clofazimine ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan was certified by WHO as having eliminated leprosy as a public-health problem in 1997, but news reports describe clusters in some districts and late detection linked to reduced surveillance ${r(4)} ${LB.exp("CASE NUMBERS AND DATES NOT CONFIRMED")}. The STG asks staff to refer suspected cases to a higher centre for diagnosis (slit-skin smear from ear lobe, forehead and two active patches), to use MDT blister packs, to trace household and community contacts, and to follow the National Leprosy Guideline for details ${r(1)} ${LB.exp("NATIONAL GUIDELINE NOT READ")}. NEML: rifampicin, dapsone 50 mg, clofazimine 50 and 100 mg ${r(5)}.</p>`)}
` },
{ id: "overview", title: "Classification", html: `${tbl(["Type", "Features"], [
["Paucibacillary (tuberculoid end)", "Few (≤ 5) well-defined hypopigmented anaesthetic patches; strong immunity; smear negative; less contagious " + r(1) + r(2)],
["Multibacillary (lepromatous/borderline)", "Many lesions (≥ 6), nodules, skin thickening, loss of eyebrows, nerve involvement, positive smear; weak immunity; contagious if untreated " + r(1) + r(2)],
["Pure neural", "Thickened nerves and weakness without skin lesions " + LB.exp()]
])}` },
{ id: "patho", title: "How damage happens", html: `${F.chart("Nerve damage", [F.s("M. leprae invades skin and Schwann cells of peripheral nerves"), F.a, F.s("Loss of sensation, sweating, muscle power"), F.a, F.d("Unnoticed injury and burns"), F.a, F.e("Ulcers, infection, deformity (claw hand, foot drop, eye exposure)")])}
<p>Immune reactions (type 1 reversal reactions and type 2 erythema nodosum leprosum) can damage nerves quickly, even during or after treatment ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "WHO 2018 (via Merck)", "USA (Merck)", "This guide"], [
["PB regimen", "Rifampicin + clofazimine monthly + daily dapsone and clofazimine for 6 months (same three drugs as MB)", "Rifampicin + moxifloxacin + minocycline monthly 12 months", "National programme blister packs (WHO) " + r(1) + r(2)],
["MB regimen", "Same three drugs 12 months", "Same US combination 24 months", "WHO 12 months " + r(2)],
["Contacts", "Single-dose rifampicin for contacts ≥ 2 years after excluding leprosy and TB", "—", "Follow national programme " + r(2) + " " + LB.loc()]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Feature", "Look for"], [
["Skin", "Hypopigmented or red patches, plaques, shiny nodules; non-itchy; reduced or lost sensation in the patch " + r(1) + r(2)],
["Nerves", "Thickened, sometimes tender: ulnar (elbow), common peroneal (fibular head) commonly " + r(1)],
["Motor", "Weak small hand muscles, wasting, wrist drop, foot drop, weak eye closure " + r(1)],
["Sensory", "Numbness, tingling, painless burns and ulcers on hands and feet " + r(1)],
["Lepromatous", "Symmetric nodules, thickened facial skin, loss of eyebrows " + r(2)]
])}
<div class="calc" data-calc="leprosyclass"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue — sensation is normal"], [
["Pityriasis versicolor", "Fine scale, upper trunk " + P("fungal-skin", "fungal skin")],
["Vitiligo", "Chalk-white, normal sensation " + P("vitiligo", "vitiligo")],
["Tinea", "Active scaly edge, itchy " + P("fungal-skin", "fungal skin")],
["Pityriasis alba", "Children's face, ill-defined pale patches " + LB.exp()],
["Diabetic or other neuropathy", "Glove-and-stocking, no skin patches " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Diagnosis is mainly clinical; refer to a higher centre for slit-skin smear from the ear lobe, forehead and two active patches stained for acid-fast bacilli ${r(1)}; biopsy or molecular tests where available ${r(2)}. Exclude TB before rifampicin prophylaxis ${r(2)}.</p>` },
{ id: "staging", title: "Leprosy reactions", html: `${tbl(["Reaction", "Features", "Treatment"], [
["Type 1 (reversal)", "Existing lesions swell and redden; new lesions; acute nerve pain or palsy", "Continue MDT, refer; prednisone 40–60 mg daily for 5 days then low dose for months (Merck) " + r(1) + r(2)],
["Type 2 (ENL)", "Fever, painful red nodules, arthralgia, malaise", "Continue MDT, refer; mild: aspirin; significant: prednisone 40–60 mg for 1 week; recurrent: thalidomide (specialist, not in possible pregnancy) " + r(1) + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Multidrug therapy (adults, WHO)</h3>
${tbl(["Type", "Monthly supervised", "Daily self-administered", "Duration"], [
["PB", "Rifampicin 600 mg + clofazimine 300 mg", "Dapsone 100 mg + clofazimine 50 mg", "6 months " + r(1) + r(2)],
["MB", "Rifampicin 600 mg + clofazimine 300 mg", "Dapsone 100 mg + clofazimine 50 mg", "12 months " + r(1) + r(2)]
])}
<p>Children 10–14 years (WHO child blister pack): rifampicin 450 mg + clofazimine 150 mg monthly; clofazimine 50 mg on alternate days and dapsone 50 mg daily; under 10 years: weight-adjusted doses from the national programme ${LB.exp("CHILD DOSES FROM SEARCH SUMMARY — NOT READ AT WHO SOURCE")}.</p>
<h3>2. Prevention of disability</h3>
<ul><li>Daily self-care: inspect hands and feet, soak and oil dry skin, protect from burns, proper footwear; protect eyes ${r(1)} ${LB.exp()}.</li><li>Treat ulcers early; physiotherapy for weakness ${LB.exp()}.</li></ul>
<h3>3. Public health</h3>
<p>Treatment compliance and completion; household and community contact tracing; leprosy is not contagious once treatment starts ${r(1)} ${r(2)}; contacts ≥ 2 years may receive a single dose of rifampicin after excluding leprosy and TB ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("rifampicin", "Rifampicin")} — NEML; red urine; liver toxicity, flu-like syndrome ${r(2)} ${r(5)}.</li>
<li>${D("dapsone", "Dapsone")} 50 mg — NEML; haemolysis (check G6PD where possible), severe allergy (dapsone syndrome) ${r(2)} ${r(5)}.</li>
<li>${D("clofazimine", "Clofazimine")} 50 / 100 mg — NEML; reversible skin darkening ${r(2)} ${r(5)}.</li>
<li>${D("prednisolone", "Prednisolone")} — reactions ${r(2)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Household contacts, especially children, should be watched " + r(2)],
["Pregnancy", "MDT is continued " + LB.exp() + "; no thalidomide " + r(2)],
["People with diabetes", "Neuropathy can be confused — look for skin patches and thick nerves " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Farmer with 3 pale patches on the back, cannot feel cotton wool in them", "Probable PB leprosy: refer for smear; MDT 6 months; examine family " + r(1)],
["Patient on MDT with new painful swelling of patches and sudden foot drop", "Type 1 reaction: continue MDT, steroids, urgent referral " + r(1) + r(2)],
["Painless burn on the hand of a man with claw fingers", "Neuropathic hand — leprosy assessment; self-care " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Disability: claw hand, foot drop, ulcers, lagophthalmos and blindness ${r(1)} ${r(2)}.</li><li>Reactions with nerve damage ${r(2)}.</li><li>Stigma — counsel and protect confidentiality ${LB.int()}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Monthly supervised doses; look for reactions at every visit (fever, joint pain, swelling of lesions, new lesions, acute nerve pain or palsy) — continue MDT and refer ${r(1)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Skin patch or neuropathy", [F.s("Test sensation in patch; feel nerves; test power"), F.a, F.d("Reduced sensation or thick nerve?"), F.a, F.b([["No", F.s("Other diagnosis")], ["Yes", F.s("Refer for slit-skin smear; classify PB / MB")]]), F.a, F.ok("MDT 6 or 12 months; contact tracing; self-care"), F.a, F.e("Reaction? continue MDT + steroids, refer")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Not testing sensation in pale patches", "Leprosy missed for years", "Cotton wisp test in every hypopigmented patch " + r(1)],
["Stopping MDT during a reaction", "Infection persists", "Continue MDT + treat reaction " + r(1)],
["Thinking elimination means no cases", "Late detection, disability", "Keep suspecting " + r(4)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How many lesions define MB leprosy?", "Six or more (or a positive smear / nerve involvement).")}
${qa("Specialist", "Adult WHO MDT monthly supervised dose?", "Rifampicin 600 mg + clofazimine 300 mg; daily dapsone 100 mg + clofazimine 50 mg; PB 6 months, MB 12 months.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.1.2.5 Leprosy.</li>
<li id="ref-2">Merck Manual Professional Edition. Leprosy; reviewed 2025 (cites WHO Guidelines for the diagnosis, treatment and prevention of leprosy, 2018).</li>
<li id="ref-3">World Health Organization. Guidelines for the diagnosis, treatment and prevention of leprosy. 2018 (not read directly).</li>
<li id="ref-4">Bhutan Broadcasting Service. News reports on leprosy cases in Bhutan (dates uncertain).</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG leprosy", "<span class='pass'>Checked</span>", "Partly scrambled; refers to national guideline"],
["Merck leprosy (WHO 2018 regimens)", "<span class='pass'>Checked</span>", "Read"],
["Bhutan national leprosy guideline; WHO 2018 full text; child doses", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Classification + adult regimen"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
