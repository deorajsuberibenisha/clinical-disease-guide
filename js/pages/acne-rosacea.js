/* Acne vulgaris and rosacea — adolescents and adults. Batch E-10, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.2.7 Acne and §16.2.8 Rosacea (filtered text); NICE NG198 Acne vulgaris (2021, updated 2023: skin care, diet,
   referral, severity definitions, table 1 options, 12-week review, antibiotic limits, maintenance, scarring); Merck Manual Professional 'Acne
   vulgaris' (isotretinoin cautions) and 'Rosacea' (phases, triggers, treatment); NEML 2025 text. Not read: NICE CKS rosacea, AAD acne 2024,
   isotretinoin MHRA 2023 measures in full — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "acne-rosacea",
title: "Acne and rosacea — adolescents and adults",
subtitle: "Acne: treat early to prevent scarring with a 12-week topical course (plus an oral tetracycline for moderate–severe acne), never antibiotics alone; rosacea: avoid triggers, no steroid creams, topical metronidazole and doxycycline",
age: "Adolescents and adults", specs: ["derm", "medicine", "paeds"],
keywords: ["acne", "acne vulgaris", "pimples", "comedones", "blackheads", "whiteheads", "nodular acne", "cystic acne", "acne scarring", "benzoyl peroxide", "clindamycin gel", "adapalene", "doxycycline acne", "lymecycline", "isotretinoin", "acne fulminans", "rosacea", "facial flushing", "rhinophyma", "ocular rosacea", "metronidazole cream", "steroid-induced rosacea"],
related: ["eczema", "seb-napkin-dermatitis", "rash-approach", "pcos-adult", "depression-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead"><b>Acne</b> usually starts at 12–14 years with recurrent facial spots, sometimes on the back and chest; it has real psychological impact and should be treated to prevent scarring ${r(1)} ${r(3)}. <b>Rosacea</b> is a chronic adult condition of central facial flushing, redness, telangiectasia, papules and pustules, sometimes eye involvement and a thickened nose ${r(2)} ${r(5)}.</p>
<div class="glance">
<div><h4>Acne severity (NICE)</h4><p>Mild–moderate: comedones, up to 34 inflammatory lesions, up to 2 nodules. Moderate–severe: 35 or more inflammatory lesions or 3 or more nodules ${r(3)}.</p></div>
<div><h4>Acne treatment</h4><p>12-week course of a topical combination; add oral doxycycline (or lymecycline) for moderate–severe; never an antibiotic alone; antibiotics no longer than 6 months ${r(3)}.</p></div>
<div><h4>Rosacea</h4><p>Avoid sun, alcohol, heat, spicy food; sunscreen; mild cleanser; metronidazole 1% cream twice daily; doxycycline for papules/pustules or eye involvement ${r(2)} ${r(5)}.</p></div>
<div><h4>Never</h4><p>Steroid creams on rosacea or acne — they make it worse ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG notes that <b>no topical acne medicines are available in hospitals</b>: clindamycin gel and 2.5% or 5% benzoyl peroxide gel (alone or combined) must be bought; for moderate–severe acne, oral doxycycline 100 mg once daily for 4–6 months with topical therapy, or referral ${r(1)}. Rosacea: metronidazole 1% cream (purchase) twice daily for 6 months; doxycycline 100 mg once daily for 4–6 months; refer if papules and pustules or no response ${r(2)}. NEML has doxycycline 100 mg; it has no benzoyl peroxide, topical clindamycin, retinoids, isotretinoin or topical metronidazole ${r(4)}. Note the STG doxycycline course (4–6 months) is close to NICE's 6-month antibiotic limit ${r(3)}.</p>`)}
` },
{ id: "overview", title: "The conditions in brief", html: `${tbl(["Feature", "Acne vulgaris", "Rosacea"], [
["Age", "Starts 12–14 years; continues through teens " + r(1), "Usually 30–50 years; fair skin, but under-recognised in dark skin " + r(5)],
["Lesions", "Comedones, papules, pustules, nodules, cysts, scars " + r(1), "Flushing, persistent central redness, telangiectasia, papules, pustules (no comedones) " + r(2) + r(5)],
["Causes", "Puberty hormones, excess sebum, bacterial overgrowth; also topical creams, oral drugs, occupation " + r(1), "Unknown; vascular instability, Demodex mites; triggers: sun, alcohol, hot and spicy food, heat, stress; steroid creams worsen " + r(2) + r(5)],
["Late stage", "Scarring, pigmentation " + r(3), "Rhinophyma, ocular rosacea " + r(5)]
])}` },
{ id: "patho", title: "How they develop", html: `${F.chart("Acne", [F.s("Androgens at puberty → more sebum"), F.a, F.s("Blocked follicle = comedone"), F.a, F.s("Bacterial overgrowth + inflammation"), F.a, F.e("Papules, pustules, nodules → scars")])}
<p>Rosacea has four phases: pre-rosacea flushing and stinging, vascular (redness, oedema, telangiectasia), inflammatory (papules, pustules), and late (phymatous thickening) ${r(5)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "NICE NG198 / Merck", "This guide"], [
["First-line acne topical", "Clindamycin gel and/or benzoyl peroxide (purchase)", "Fixed combinations: adapalene + BPO, tretinoin + clindamycin, or BPO + clindamycin, once daily in the evening", "BPO ± clindamycin is the realistic option in Bhutan " + r(1) + r(3)],
["Oral antibiotic duration", "Doxycycline 100 mg daily 4–6 months", "Review at 12 weeks; stop if clear; antibiotics beyond 6 months only exceptionally", "Review at 12 weeks; stop as soon as possible " + r(1) + r(3)],
["Rosacea doxycycline", "100 mg once daily 4–6 months", "Merck: 40 mg sub-antimicrobial once daily, or 50–100 mg; lowest dose that controls", "100 mg (NEML strength), reduce when controlled " + r(2) + r(5)],
["Facial wash", "2% salicylic acid face wash twice daily", "Non-alkaline (syndet) cleanser twice daily", "Either " + r(1) + r(3)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Condition", "Look for"], [
["Acne", "Comedones, papules, pustules on face, back, chest; nodules and cysts; scars; pigmentation " + r(1)],
["Acne fulminans", "Sudden severe ulcerating acne with fever — same-day referral " + r(3)],
["Rosacea", "Central facial and forehead redness with telangiectasia; papules and pustules; burning; triggers " + r(2)],
["Ocular rosacea", "Gritty, red eyes, eyelid inflammation, blepharoconjunctivitis, keratitis " + r(5)]
])}
<div class="calc" data-calc="acneplan"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Steroid-induced acne/rosacea", "History of steroid creams or oral steroids " + r(2)],
["Folliculitis", "Pustules on hair follicles of trunk or limbs " + P("ssti-adult", "skin infection")],
["Perioral dermatitis", "Papules around the mouth, often after steroid creams " + LB.exp()],
["Seborrhoeic dermatitis", "Greasy scale in folds " + P("seb-napkin-dermatitis", "seborrhoeic dermatitis")],
["PCOS (women with acne + irregular periods + hirsutism)", P("pcos-adult", "PCOS")],
["Lupus (malar rash)", "Spares nasolabial folds; systemic symptoms " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Diagnosis is clinical. Hormonal assessment if acne with features of androgen excess ${LB.exp()}. Before isotretinoin (specialist): pregnancy test, blood count, liver tests, fasting glucose, lipids ${r(5)}.</p>` },
{ id: "staging", title: "Acne severity (NICE)", html: `${tbl(["Severity", "Definition"], [
["Mild to moderate", "Any of: any number of comedones; up to 34 inflammatory lesions; up to 2 nodules " + r(3)],
["Moderate to severe", "Either or both: 35 or more inflammatory lesions; 3 or more nodules " + r(3)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Acne — skin care</h3>
<ul><li>Non-alkaline cleanser twice daily; avoid oil-based and comedogenic products; do not pick ${r(3)}; STG: wash face and neck twice daily, mild cleanser or 2% salicylic acid wash, gels not oily creams ${r(1)}.</li><li>No specific diet is proven ${r(3)}.</li></ul>
<h3>2. Acne — 12-week course (NICE table 1)</h3>
${tbl(["Severity", "Options"], [
["Any", "Adapalene + benzoyl peroxide (not in pregnancy); tretinoin + clindamycin (not in pregnancy/breastfeeding) " + r(3)],
["Mild–moderate", "Benzoyl peroxide + clindamycin (cautious use in pregnancy) " + r(3)],
["Moderate–severe", "Adapalene + BPO, or azelaic acid, <b>plus</b> oral doxycycline or lymecycline once daily (not under 12, not in pregnancy) " + r(3)],
["If those unsuitable", "Benzoyl peroxide alone; trimethoprim or a macrolide instead of a tetracycline " + r(3)]
])}
<ul><li>Effects take 6–8 weeks; review at 12 weeks; stop the antibiotic if clear, continue up to 12 more weeks if improving ${r(3)}.</li><li>Maintenance (frequent relapse): adapalene + BPO, review at 12 weeks ${r(3)}.</li></ul>
<h3>3. Acne — refer</h3>
<p>Same day: acne fulminans. Refer: diagnostic doubt, acne conglobata, nodulo-cystic acne, scarring, persistent pigmentation, failure of 2 courses (mild–moderate) or of a course with oral antibiotic (moderate–severe), psychological distress ${r(3)}. Isotretinoin is specialist-only (pregnancy prevention, monitoring) ${r(5)}.</p>
<h3>4. Rosacea</h3>
<ul>
<li>Avoid irritating soaps and creams; mild cleanser and moisturiser; daily sunscreen and hat; avoid alcohol and sun ${r(2)}.</li>
<li>Metronidazole 1% cream twice daily (STG: 6 months) or azelaic acid ${r(2)} ${r(5)}.</li>
<li>Oral doxycycline for multiple papules/pustules or ocular rosacea; reduce to the lowest effective dose ${r(2)} ${r(5)}.</li>
<li>Do not use steroid creams ${r(2)}.</li>
<li>Persistent redness: brimonidine or oxymetazoline (specialist); rhinophyma: surgery/laser ${r(5)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("benzoyl-peroxide", "Benzoyl peroxide")} 2.5–5% — not on NEML (purchase) ${r(1)} ${r(4)}.</li>
<li>${D("clindamycin", "Clindamycin")} gel — not on NEML (purchase) ${r(1)} ${r(4)}.</li>
<li>${D("adapalene", "Adapalene")}, tretinoin, ${D("azelaic-acid", "azelaic acid")} — not on NEML ${r(3)} ${r(4)}.</li>
<li>${D("doxycycline", "Doxycycline")} 100 mg — NEML ${r(4)}.</li>
<li>${D("metronidazole", "Metronidazole")} 1% cream — topical form not on NEML ${r(2)} ${r(4)}.</li>
<li>${D("isotretinoin", "Isotretinoin")} — specialist only; teratogenic ${r(5)}.</li>
<li>${D("ivermectin", "Ivermectin")} 1% cream — rosacea alternative ${r(5)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Pregnancy and breastfeeding", "No retinoids or tetracyclines; BPO + clindamycin with caution " + r(3)],
["Under 12 years", "No tetracyclines " + r(3)],
["Darker skin", "Post-inflammatory pigmentation; rosacea under-recognised " + r(3) + r(5)],
["Mental health", "Acne can cause significant distress — ask and refer " + r(3)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["16-year-old with 20 papules and comedones", "Mild–moderate: BPO ± clindamycin gel in the evening 12 weeks; skin care; review " + r(3) + r(1)],
["19-year-old with 40 inflamed spots and 4 nodules on face and back", "Moderate–severe: topical + doxycycline 12 weeks; review; refer if no response " + r(3)],
["Woman using betamethasone cream on facial 'pimples' with burning red face", "Stop steroid; rosacea treatment; expect a flare when stopping " + r(2) + " " + LB.exp()],
["Teenager with ulcerating acne and fever", "Acne fulminans — same-day referral " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Scarring and pigmentation ${r(3)}.</li><li>Psychological distress, depression ${r(3)}.</li><li>Antibiotic resistance with long courses ${r(3)}.</li><li>Rhinophyma; ocular rosacea (keratitis) ${r(5)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Review acne treatment at 12 weeks ${r(3)}; follow moderate and severe acne for response ${r(1)}; rosacea: control, not cure — maintain trigger avoidance ${r(5)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Facial spots", [F.d("Comedones, teenager?"), F.a, F.b([["Acne", F.s("Grade severity → 12-week course")], ["Flushing, telangiectasia, adult", F.s("Rosacea: triggers, metronidazole, doxycycline")]]), F.a, F.d("Fever, ulceration, nodules, scars?"), F.a, F.e("Refer (same day for acne fulminans)")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Oral antibiotic alone for acne", "Resistance, relapse", "Always with a topical " + r(3)],
["Stopping after 2–3 weeks", "Effects take 6–8 weeks", "12-week course " + r(3)],
["Steroid cream for rosacea or acne", "Worsens both", "Never " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "NICE definition of moderate–severe acne?", "35 or more inflammatory lesions and/or 3 or more nodules.")}
${qa("Intern/MO", "What should never be put on rosacea?", "Steroid creams.")}
${qa("Specialist", "Maximum usual duration of an antibiotic-containing acne treatment?", "6 months, reviewing every 3 months.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.7 Acne.</li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.8 Rosacea.</li>
<li id="ref-3">National Institute for Health and Care Excellence. Acne vulgaris: management (NG198), 2021, updated 2023.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-5">Merck Manual Professional Edition. Acne vulgaris; Rosacea; accessed Nov 2026.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §16.2.7–16.2.8", "<span class='pass'>Checked</span>", "Partly scrambled; readable parts used"],
["NICE NG198", "<span class='pass'>Checked</span>", "Read"],
["Merck acne and rosacea", "<span class='pass'>Checked</span>", "Read"],
["NICE CKS rosacea, AAD", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "NICE definitions + Bhutan availability"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
