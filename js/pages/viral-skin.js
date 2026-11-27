/* Viral skin infections (herpes simplex, herpes zoster, warts, molluscum contagiosum) — all ages. Batch E-11, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.1.3 viral infections (herpes zoster: aciclovir 800 mg 5×/day 10–14 days for all, within 5 days; herpes
   simplex: primary aciclovir 400 mg tds 10 days, recurrent labialis ointment, recurrent genital 400 mg tds 5 days; molluscum: resolves 6–9 months,
   gentle expression; warts: 20% salicylic acid ~12 weeks, cryotherapy at JDWNRH, tretinoin for plane warts, podophyllin for anogenital weekly,
   imiquimod, electrocautery) — filtered text; Merck Manual Professional: herpes zoster, herpes simplex, warts, molluscum (2025–26); NEML 2025.
   Not read: NICE CKS shingles, BAD warts, CDC STI 2021 herpes (separate STI page cites it) — marked. Chickenpox has its own page. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "viral-skin",
title: "Viral skin infections — herpes simplex, shingles, warts and molluscum",
subtitle: "Grouped painful blisters on lips or genitals (herpes simplex), a painful band of blisters on one side (shingles), rough papules (warts) or shiny umbilicated papules (molluscum): aciclovir early for herpes, patience or simple destruction for warts and molluscum",
age: "All ages", specs: ["derm", "medicine", "paeds", "id"],
keywords: ["herpes simplex", "cold sore", "herpes labialis", "gingivostomatitis", "genital herpes", "herpes zoster", "shingles", "postherpetic neuralgia", "ophthalmic zoster", "aciclovir", "acyclovir", "warts", "verruca", "plantar wart", "plane warts", "genital warts", "HPV", "salicylic acid wart", "cryotherapy", "podophyllin", "molluscum contagiosum", "Tzanck"],
related: ["chickenpox-child", "sti-adult", "eczema", "rash-approach", "hiv-adult", "redeye-adult", "bells-palsy-adult", "hfmd-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Herpes simplex</h4><p>Grouped vesicles that ulcerate and heal without scars, on lips, face or genitals; primary attack in children = gingivostomatitis with fever ${r(1)}.</p></div>
<div><h4>Shingles</h4><p>Burning pain in one dermatome, then grouped vesicles that do not cross the midline; thoracic and ophthalmic most common ${r(1)}.</p></div>
<div><h4>Warts</h4><p>Rough papules (HPV); many resolve in children; salicylic acid 20% daily for about 12 weeks ${r(1)}.</p></div>
<div><h4>Molluscum</h4><p>Shiny pink or white umbilicated papules with cheesy core; resolve in 6–9 months; avoid aggressive treatment in children ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: <b>all</b> shingles patients get oral aciclovir 800 mg five times daily for 10–14 days, started within 5 days; no topical antibiotic or aciclovir on zoster lesions ${r(1)}. Primary gingivostomatitis or genital herpes: aciclovir 400 mg three times daily for 10 days; recurrent genital herpes: 400 mg three times daily for 5 days ${r(1)}. Cryotherapy with liquid nitrogen is available at JDWNRH ${r(1)}. NEML: aciclovir 400 mg tablets, aciclovir 3% eye ointment (hospitals with an ophthalmologist), salicylic acid powder, podophyllum resin; no valaciclovir, imiquimod or tretinoin ${r(3)}.</p>`)}
` },
{ id: "overview", title: "The infections in brief", html: `${tbl(["Infection", "Cause and spread", "Typical sites"], [
["Herpes simplex", "HSV-1 and HSV-2; saliva, direct contact, sexual; latent with recurrences triggered by colds and stress " + r(1), "Lips, face, mouth, genitals, perianal " + r(1)],
["Herpes zoster", "Reactivation of varicella virus in a partially immune person " + r(1), "One dermatome; thoracic, ophthalmic (V1) " + r(1)],
["Warts", "HPV (2, 4 common; 3 plane; 6, 11, 16, 18 anogenital); direct contact " + r(1), "Hands, feet, face, anogenital " + r(1)],
["Molluscum", "Poxvirus; direct contact; sexual in adults " + r(1), "Children: trunk, limbs; adults: genital " + r(1)]
])}` },
{ id: "patho", title: "Latency", html: `${F.chart("Herpes viruses", [F.s("Primary infection"), F.a, F.s("Virus hides in sensory ganglia"), F.a, F.d("Trigger: illness, stress, age, immunosuppression"), F.a, F.e("Recurrence (HSV) or shingles (VZV) along the nerve")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Who gets antivirals for shingles", "All patients", "Often reserved for age ≥ 50, severe pain, face (eye/ear) involvement, immunocompromise; some experts treat all", "Treat all who present early (STG); essential in the groups Merck lists " + r(1) + r(2)],
["Time window", "Within 5 days", "Best within 72 hours of the rash; less effective later unless new lesions", "As early as possible; still treat to day 5 or with new lesions " + LB.int()],
["Duration", "10–14 days", "7–10 days", "STG duration " + r(1) + r(2)],
["Molluscum treatment", "Leave to resolve (6–9 months); gentle expression", "Lesions may last up to 2–3 years; painless options first in children", "Usually leave alone " + r(1) + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Condition", "Features"], [
["Primary HSV-1 (children)", "Acute gingivostomatitis with fever, malaise, headache, tender neck nodes " + r(1)],
["Primary HSV-2", "Painful genital or perianal vesicles that ulcerate " + r(1) + " → " + P("sti-adult", "STI page")],
["Recurrent HSV", "Same site; tingling then grouped vesicles " + r(1)],
["Herpes zoster", "Burning pain, then grouped vesicles in one dermatome, not crossing the midline " + r(1)],
["Ophthalmic zoster", "Forehead, eyelid, tip of the nose — urgent eye review " + r(2)],
["Warts", "Common (hands, feet), plane (face), plantar (painful, flat), anogenital " + r(1)],
["Molluscum", "Asymptomatic shiny umbilicated papules with cheesy core " + r(1)]
])}
<div class="calc" data-calc="herpesrx"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Chickenpox", "Generalised crops " + P("chickenpox-child", "chickenpox")],
["Impetigo", "Honey crusts " + P("ssti-child", "skin infection")],
["Hand, foot and mouth disease", "Mouth ulcers + hand/foot vesicles " + P("hfmd-child", "HFMD")],
["Syphilis (genital ulcer)", "Painless chancre " + P("sti-adult", "STI")],
["Corns (vs plantar wart)", "Corns keep skin lines; warts interrupt them and bleed when pared " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Herpes simplex and zoster are clinical diagnoses; Tzanck smear (giant cells) if doubtful and a pathologist is available ${r(1)}. HIV test in severe, recurrent or multi-dermatomal zoster or extensive molluscum in adults ${LB.exp()}.</p>` },
{ id: "staging", title: "Red flags", html: `<ul><li>Zoster near the eye (V1, tip of the nose) — ophthalmology; ear zoster with facial palsy — ENT ${r(2)}.</li><li>Immunocompromised, disseminated lesions — IV aciclovir ${r(2)}.</li><li>Eczema herpeticum — see ${P("eczema", "eczema")}.</li><li>Neonatal herpes, encephalitis — IV aciclovir ${r(2)}.</li></ul>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Herpes zoster</h3>
<p>Oral aciclovir 800 mg five times daily for 10–14 days, starting within 5 days (STG) ${r(1)}; analgesia, wet compresses; keep lesions dry; no topical antibiotic or aciclovir ointment on zoster; treat postherpetic neuralgia ${r(1)} ${r(2)}.</p>
<h3>2. Herpes simplex</h3>
${tbl(["Situation", "STG treatment"], [
["Primary gingivostomatitis or genital herpes", "Aciclovir 400 mg three times daily for 10 days; analgesics, antipyretics, fluids " + r(1)],
["Recurrent herpes labialis", "Aciclovir ointment 4–5 times daily " + r(1)],
["Recurrent genital herpes", "Aciclovir 400 mg three times daily for 5 days " + r(1)]
])}
<h3>3. Warts</h3>
<ul>
<li>Many resolve on their own in children ${r(1)}.</li>
<li>20% salicylic acid daily (or wart paint) for about 12 weeks; cryotherapy (JDWNRH, painful) ${r(1)}.</li>
<li>Plane facial warts: tretinoin 0.025% at night for about 12 weeks (purchase; sunscreen); electrocautery ${r(1)}.</li>
<li>Anogenital warts: podophyllin once weekly under supervision, protecting normal skin with petroleum jelly; not in pregnancy; imiquimod 2–3 times a week ${r(1)}.</li>
</ul>
<h3>4. Molluscum</h3>
<p>Reassure; resolves in months (up to 2–3 years); gentle expression of the core; reduce spread in the family ${r(1)} ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("aciclovir", "Aciclovir")} 400 mg tablet — NEML ${r(3)}.</li>
<li>${D("valaciclovir", "Valaciclovir")} — better absorbed; not on NEML ${r(2)} ${r(3)}.</li>
<li>Salicylic acid — NEML powder for compounding ${r(3)}.</li>
<li>Podophyllum resin — NEML ${r(3)}.</li>
<li>${D("imiquimod", "Imiquimod")} — not on NEML ${r(3)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Pregnancy", "No podophyllin " + r(1) + "; genital herpes near delivery — obstetric plan " + LB.exp()],
["Immunocompromised", "Treat zoster and HSV always; consider IV aciclovir " + r(2)],
["Older adults", "Most benefit from zoster antivirals; postherpetic neuralgia commoner " + r(2)],
["Children with molluscum and eczema", "Molluscum spreads by scratching; treat the eczema " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["65-year-old, 2 days of painful vesicles on the forehead and nose tip", "Ophthalmic zoster: aciclovir 800 mg 5×/day, urgent eye review " + r(1) + r(2)],
["3-year-old with fever, swollen bleeding gums and mouth ulcers, not drinking", "Primary herpetic gingivostomatitis: aciclovir, analgesia, fluids; admit if dehydrated " + r(1)],
["Child with 10 shiny umbilicated papules", "Molluscum: reassure, avoid scratching " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Postherpetic neuralgia (can last months) ${r(1)}.</li><li>Eye damage from ophthalmic zoster or HSV keratitis ${r(2)}.</li><li>Secondary bacterial infection ${r(1)}.</li><li>HSV encephalitis, neonatal herpes ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Counsel about zoster pain duration ${r(1)}; review warts after 12 weeks of treatment ${r(1)}; refer facial or resistant warts for cautery ${r(1)}.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Herpes zoster", src: "images/zoster-thigh.jpg", mod: "Clinical photograph", ctx: "Herpes zoster", find: "Clusters of vesicles on a red base in one area", interp: "Dermatomal vesicles = shingles; start aciclovir early", by: "Rosser1954", page: "https://commons.wikimedia.org/wiki/File:Shingles_rash,_thigh._Caused_by_the_herpes_zoster_virus.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Vesicles or papules", [F.d("Pattern?"), F.a, F.b([["One dermatome, painful", F.e("Zoster: aciclovir 800 mg 5×/day")], ["Lips/genitals, grouped", F.s("HSV: aciclovir 400 mg tds")], ["Rough papules", F.s("Warts: salicylic acid 12 weeks")], ["Umbilicated papules", F.ok("Molluscum: reassure")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Waiting for blisters to crust before treating zoster", "Antivirals work early", "Start at diagnosis " + r(2)],
["Topical aciclovir on zoster", "Not effective", "Oral " + r(1)],
["Aggressive treatment of molluscum in toddlers", "Pain, scars; it resolves", "Reassure " + r(1) + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "STG aciclovir dose for shingles?", "800 mg five times daily for 10–14 days, started within 5 days.")}
${qa("Specialist", "Which zoster needs urgent eye review?", "Ophthalmic division (forehead, eyelid, tip of the nose).")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.1.3 Viral infections.</li>
<li id="ref-2">Merck Manual Professional Edition. Herpes zoster; Herpes simplex virus infections; Warts; Molluscum contagiosum; accessed Nov 2026.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §16.1.3", "<span class='pass'>Checked</span>", "Partly scrambled; readable parts used"],
["Merck pages", "<span class='pass'>Checked</span>", "Read"],
["NICE CKS shingles, BAD warts", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "STG doses"],
["Images", "<span class='pass'>Checked</span>", "Licensed Commons image"]
], "qc")}` }
]
});
})();
