/* Chickenpox and shingles (Bhutan STG 16.1.3, UKHSA, CDC) */
registerPage({
id: "chickenpox-child",
title: "Chickenpox & Shingles",
subtitle: "Supportive care for healthy children; aciclovir for adolescents, adults, pregnant women and the immunocompromised; watch for skin infection and pneumonia",
age: "Children & adults", specs: ["paeds", "id", "derm"],
keywords: ["chickenpox", "varicella", "shingles", "herpes zoster", "aciclovir", "calamine", "varicella pneumonia", "secondary bacterial infection", "VZIG", "post-herpetic neuralgia", "Reye syndrome"],
related: ["measles-child", "ssti-child", "pneumonia-adult", "redeye-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Chickenpox is mild in most children but dangerous in adults, pregnancy, newborns and the immunocompromised.</p>
<div class="glance">
<div><h4>Child</h4><p>Paracetamol, ${dr("calamine")}, ${dr("cetirizine", "antihistamine")}; no aspirin.</p></div>
<div><h4>Adult/teen</h4><p>${dr("aciclovir")} 800 mg 5×/day × 7 days within 24 h.</p></div>
<div><h4>High risk</h4><p>IV aciclovir 10 mg/kg 8-hourly; refer.</p></div>
<div><h4>Shingles</h4><p>Aciclovir within 72 h; eye involvement → urgent eye review.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 16.1.3: children under 12 supportive (antihistamine, calamine, antipyretic); adults aciclovir 800 mg five times daily for 7 days; pregnancy oral aciclovir and refer; immunocompromised IV aciclovir. Varicella vaccine is not in the Bhutan EPI. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Varicella-zoster virus spreads by air and contact; incubation 10–21 days; infectious from 2 days before rash until all lesions crust. Reactivation causes shingles.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("VZV", [F.s("Primary infection → chickenpox"), F.a, F.s("Virus dormant in dorsal root ganglia"), F.a, F.e("Reactivation (age, immunosuppression) → shingles")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "International", "This guide"], [["Healthy adolescents", "Supportive under 12; aciclovir adults", "Consider aciclovir 12+", "Aciclovir 12+ within 24 h " + LB.loc()], ["Ibuprofen", "Not mentioned", "Avoid (invasive strep risk)", "Avoid"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Fever, then itchy crops: papules → vesicles ('dew drop on a rose petal') → pustules → crusts, lesions at different stages, trunk first, mucosa involved.</li><li>Shingles: dermatomal pain then grouped vesicles, not crossing the midline.</li></ul>${box("red", "Complications", `<ul><li>Spreading redness, very painful lesions, high fever after day 4 (strep/staph, necrotising fasciitis)</li><li>Cough, breathlessness (varicella pneumonia, adults/smokers/pregnancy)</li><li>Ataxia, drowsiness (cerebellitis, encephalitis)</li><li>Zoster near the eye/nose tip (ophthalmicus)</li></ul>`)}<h3>The typical patient</h3><p>A 28-year-old teacher in Trashiyangtse has fever and a vesicular rash on the trunk for 18 hours; his pupils have chickenpox. <b>Adult chickenpox</b>: aciclovir 800 mg five times daily for 7 days, fluids, warn about breathlessness, no school until crusted.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Hand, foot and mouth disease", "Hands, feet, mouth; young children"], ["Impetigo", "Honey crusts, localised"], ["Insect bites, scabies", "No fever, distribution"], ["Disseminated HSV, eczema herpeticum", "Eczema background, punched-out erosions"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Clinical; PCR of vesicle fluid if unsure or immunocompromised; chest X-ray if respiratory symptoms.</p>` },
{ id: "staging", title: "Aciclovir decision tool", html: `<div class="calc" data-calc="chickenpox"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Supportive: paracetamol, calamine, antihistamine, short nails, daily bath.</li><li>Aciclovir for adolescents/adults (within 24 h), pregnancy (refer), immunocompromised and complications (IV).</li><li>Secondary infection: cloxacillin/cefalexin; necrotising infection — surgery.</li><li>Shingles: aciclovir 800 mg 5×/day × 7 days within 72 h (or later if new lesions, eye, immunocompromised); analgesia; post-herpetic neuralgia — amitriptyline.</li><li>Exposure in pregnancy/immunocompromised/newborn: check immunity; VZIG if available, otherwise aciclovir days 7–14 after exposure.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("aciclovir"), "800 mg 5×/day × 7 days", "IV 10 mg/kg if severe"], [dr("calamine"), "2–3 times daily", "Itch"], [dr("cetirizine"), "Age-based", "Itch"], [dr("paracetamol"), "15 mg/kg", "Fever"], [dr("amitriptyline"), "10–25 mg at night", "Post-herpetic neuralgia"]])}` },
{ id: "populations", title: "Pregnancy and newborns", html: `<p>Maternal chickenpox: pneumonia risk; fetal varicella syndrome under 20 weeks (about 1–2%); rash in the mother 7 days before to 7 days after delivery → neonatal VZIG/aciclovir.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Child on steroids for nephrotic syndrome exposed", "Urgent: VZIG or aciclovir prophylaxis"]])}` },
{ id: "complications", title: "Complications", html: `<p>Skin infection, pneumonia, encephalitis, cerebellar ataxia, Reye syndrome (aspirin), post-herpetic neuralgia, zoster ophthalmicus.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Return for warning signs; exclusion from school/work until crusted.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Adult chickenpox, day 5", src: "images/chickenpox-adult.jpg", mod: "Clinical photograph", ctx: "Chickenpox in a 30-year-old", loc: "Back", find: "Vesicles, pustules and crusts at different stages", signs: "Polymorphic crops", interp: "Adult: aciclovir; watch for pneumonia", by: "Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Chickenpox_Adult_back.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Vesicular rash", [F.d("High risk (adult, pregnant, immunocompromised, complication)?"), F.a, F.b([["Yes", F.e("Aciclovir (IV if severe), refer")], ["No", F.ok("Supportive, isolate until crusted")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Aspirin in children", "Reye syndrome", "Paracetamol"], ["No aciclovir for adults", "Pneumonia", "Within 24 h"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Aciclovir dose for adult chickenpox?", "800 mg five times daily for 7 days.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 16.1.3.</li><li id="ref-2">UK Health Security Agency. Guidelines on post-exposure prophylaxis for varicella and shingles, 2024. <a href="https://www.gov.uk/government/publications/post-exposure-prophylaxis-for-chickenpox-and-shingles" target="_blank" rel="noopener">gov.uk</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["STG 16.1.3", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
