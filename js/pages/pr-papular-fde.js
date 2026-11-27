/* Pityriasis rosea, papular urticaria and fixed drug eruption — all ages. Batch E-11, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.2.5 Pityriasis rosea, §16.2.9 Papular urticaria (insect bite reaction), §16.3.1 Fixed drug eruption (filtered
   text); Merck Manual Professional 'Pityriasis rosea' (remits within ~5 weeks; antipruritics; acyclovir in early widespread disease; pregnancy risk
   in first 15 weeks); NEML 2025. Not read: Merck drug eruptions page in full, BAD papular urticaria — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "pr-papular-fde",
title: "Pityriasis rosea, papular urticaria and fixed drug eruption",
subtitle: "Three common self-limiting rashes: a herald patch followed by oval scaly patches on the trunk (pityriasis rosea), crops of itchy bite papules in children (papular urticaria), and a dusky patch that returns at the same spot each time a drug is taken (fixed drug eruption)",
age: "All ages", specs: ["derm", "paeds", "medicine"],
keywords: ["pityriasis rosea", "herald patch", "Christmas tree rash", "collarette scale", "papular urticaria", "insect bite reaction", "bed bugs", "fleas", "fixed drug eruption", "FDE", "drug rash", "dusky patch", "cotrimoxazole rash", "sulfonamide", "paracetamol rash"],
related: ["rash-approach", "urticaria", "psoriasis", "fungal-skin", "sti-adult", "sjs-adult", "scabies-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Pityriasis rosea</h4><p>Adolescents and young adults: a single herald patch with collarette scale, then many oval patches on the trunk; mild itch; clears in 6–8 weeks; test for syphilis in adults ${r(1)} ${r(4)}.</p></div>
<div><h4>Papular urticaria</h4><p>Children, summer: recurrent itchy papules on limbs and waist from insect bites; each lasts 5–7 days; outgrown by 6–7 years ${r(2)}.</p></div>
<div><h4>Fixed drug eruption</h4><p>Dusky violet plaque (sometimes blistered, or oral/genital ulcer) at the same site after each dose of a drug ${r(3)}.</p></div>
<div><h4>Treatment</h4><p>Reassure; cetirizine and calamine for itch; triamcinolone 0.1% twice daily on lesions; stop the culprit drug ${r(1)} ${r(2)} ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG fixed drug eruption culprits: sulfonamides (cotrimoxazole), paracetamol, barbiturates, carbamazepine and tetracyclines; the reaction reappears if the drug is taken again — record the allergy ${r(3)}. Papular urticaria: avoid keeping pets at home, reduce dust; a change of place may help ${r(2)}. NEML: cetirizine, calamine powder, triamcinolone 0.1% ${r(5)}.</p>`)}
` },
{ id: "overview", title: "The conditions in brief", html: `${tbl(["Condition", "Cause", "Course"], [
["Pityriasis rosea", "Possibly HHV-6/7 reactivation; some drugs " + r(1), "Remits in about 5–8 weeks; recurrence rare " + r(1) + r(4)],
["Papular urticaria", "Exaggerated reaction to insect bites " + r(2), "Crops for years; improves with age " + r(2)],
["Fixed drug eruption", "Drug hypersensitivity; first episode 1–2 weeks after exposure, later within 24 hours " + r(3), "Recurs at the same site with each exposure; leaves pigmentation " + r(3) + " " + LB.exp()]
])}` },
{ id: "patho", title: "Patterns", html: `<p>PR lesions follow skin lines on the back ('Christmas tree'); papular urticaria lesions are grouped on exposed skin; FDE is single or few, sharply defined ${r(1)} ${r(2)} ${r(3)} ${LB.exp()}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["PR antiviral", "Not mentioned", "Short aciclovir course may help early widespread disease; offer in pregnancy", "Consider in pregnancy (specialist) " + r(1) + r(4)],
["PR duration", "6–8 weeks", "About 5 weeks", "Several weeks " + r(1) + r(4)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Condition", "Look for"], [
["Pityriasis rosea", "Herald patch, then oval pink scaly patches on trunk; atypical variants " + r(1)],
["Papular urticaria", "Itchy papules on limbs and waist, sometimes surrounding wheal or blister; excoriations and infection " + r(2)],
["Fixed drug eruption", "Red-violet dusky plaque(s), may blister; oral or genital ulcer " + r(3)]
])}
<div class="calc" data-calc="smallrash"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Secondary syphilis (vs PR)", "Palms and soles, nodes; RPR " + r(1) + " " + P("sti-adult", "STI")],
["Tinea (vs herald patch)", "Active edge; KOH " + P("fungal-skin", "fungal skin")],
["Guttate psoriasis", "Thicker scale, after sore throat " + P("psoriasis", "psoriasis")],
["Scabies (vs papular urticaria)", "Burrows, finger webs, family " + P("scabies-adult", "scabies")],
["SJS/TEN (vs bullous FDE)", "Mucosal erosions, widespread, systemic illness " + P("sjs-adult", "SJS/TEN")]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Clinical diagnosis. PR in adults: syphilis serology (RPR) to exclude secondary syphilis ${r(1)}.</p>` },
{ id: "staging", title: "When to worry", html: `<p>Refer PR if persistent ${r(1)}; FDE with widespread blisters or mucosal involvement — think SJS/TEN ${LB.exp()}; PR in the first 15 weeks of pregnancy is linked to preterm birth or fetal loss ${r(4)}.</p>` },
{ id: "manage", title: "Treatment", html: `
${tbl(["Condition", "Treatment"], [
["Pityriasis rosea", "Explain it clears on its own in 6–8 weeks; cetirizine once daily if itchy; triamcinolone 0.1% twice daily for symptoms " + r(1) + "; sunlight may hasten resolution " + r(4)],
["Papular urticaria", "Cetirizine (age-appropriate dose); frequent calamine; triamcinolone 0.1% on lesions only twice daily; treat infection; insect control " + r(2)],
["Fixed drug eruption", "Stop and avoid the drug; triamcinolone 0.1% twice daily; short oral steroid course if severe " + r(3)]
])}` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("cetirizine", "Cetirizine")} — NEML ${r(5)}.</li>
<li>${D("calamine", "Calamine")} — NEML powder ${r(5)}.</li>
<li>${D("triamcinolone", "Triamcinolone")} 0.1% — NEML ${r(5)}.</li>
<li>${D("aciclovir", "Aciclovir")} — PR in pregnancy or early widespread disease (specialist) ${r(4)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `<p>Pregnancy and PR: refer, aciclovir may be offered ${r(4)}. Children with papular urticaria: most outgrow it by 6–7 years ${r(2)}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["20-year-old with one scaly oval patch, then many on the back a week later", "PR: RPR, reassure, cetirizine if itchy " + r(1)],
["4-year-old with crops of itchy papules on legs every summer", "Papular urticaria: calamine, cetirizine, insect control " + r(2)],
["Dusky patch on the lip each time cotrimoxazole is taken", "FDE: stop and record allergy; triamcinolone " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Secondary infection of scratched bites ${r(2)}.</li><li>Persistent pigmentation after FDE ${LB.exp()}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Refer persistent PR ${r(1)}; warn that FDE reappears if the drug is taken again ${r(3)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Self-limiting rash?", [F.d("Pattern"), F.a, F.b([["Herald patch + trunk ovals", F.s("PR: RPR; reassure")], ["Crops of bite papules", F.s("Papular urticaria: calamine, cetirizine")], ["Same spot after a drug", F.e("FDE: stop drug, record allergy")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Treating PR as tinea for weeks", "Unnecessary drugs", "Recognise herald patch; it resolves " + r(1)],
["Missing syphilis", "Looks like PR", "RPR in adults " + r(1)],
["Not recording the FDE drug", "Re-exposure", "Write it in the record and tell the patient " + r(3)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Which test do adults with suspected PR need?", "Syphilis serology (RPR).")}${qa("Intern/MO", "Name three drugs that cause FDE (STG).", "Sulfonamides, paracetamol, barbiturates, carbamazepine, tetracyclines.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.5 Pityriasis rosea.</li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.9 Papular urticaria.</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.3.1 Fixed drug eruption.</li>
<li id="ref-4">Merck Manual Professional Edition. Pityriasis rosea; accessed Nov 2026.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG sections", "<span class='pass'>Checked</span>", "Partly scrambled"],
["Merck pityriasis rosea", "<span class='pass'>Checked</span>", "Read"],
["Merck drug eruptions (full)", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "STG"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
