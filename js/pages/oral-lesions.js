/* Mouth ulcers, oral thrush, premalignant lesions and oral cancer — all ages. Batch E-12, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §17.4.1 Oral candidiasis, §17.5 Aphthous ulceration, §17.6 Premalignant lesions (leukoplakia, erythroplakia,
   lichen planus, oral submucous fibrosis), §17.8 Oral cancer (filtered text); Merck Manual Professional 'Recurrent aphthous stomatitis' and
   'Oral growths' (red flags; biopsy lesions persisting more than a few weeks; leukoplakia); NICE NG12 suspected cancer 1.8.2–1.8.4 (oral cancer);
   NEML 2025. Not read: WHO oral cancer screening, Indian OSMF guidelines — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "oral-lesions",
title: "Mouth ulcers, oral thrush and oral cancer",
subtitle: "Most mouth ulcers heal in 1–2 weeks; any ulcer, white or red patch, or lump that lasts more than 3 weeks — especially in a doma or tobacco user — needs referral for biopsy to exclude oral cancer",
age: "All ages", specs: ["ent", "medicine", "onc", "paeds"],
keywords: ["mouth ulcer", "aphthous ulcer", "recurrent aphthous stomatitis", "canker sore", "oral thrush", "oral candidiasis", "angular cheilitis", "denture stomatitis", "leukoplakia", "erythroplakia", "oral lichen planus", "oral submucous fibrosis", "OSMF", "betel quid", "doma", "areca nut", "oral cancer", "mouth cancer", "squamous cell carcinoma mouth", "non-healing ulcer"],
related: ["toothache", "oral-health", "viral-skin", "hiv-adult", "substance-use-adult", "fungal-skin"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Aphthous ulcers</h4><p>Small, shallow, painful round ulcers with white-yellow centre and red rim, often preceded by tingling; recur ${r(1)}.</p></div>
<div><h4>Thrush</h4><p>Creamy white patches that wipe off on tongue, cheeks, palate; angular cracks; nystatin ${r(2)}.</p></div>
<div><h4>Premalignant</h4><p>Leukoplakia (white), erythroplakia (red velvety — higher risk), lichen planus, submucous fibrosis (blanching, stiff mouth, from areca nut) ${r(3)}.</p></div>
<div><h4>Refer</h4><p>Unexplained ulcer > 3 weeks, persistent neck lump, oral lump, red or red-white patch ${r(5)}; weight loss, difficulty swallowing ${r(4)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Chewing betel quid/doma (areca nut) and tobacco are major causes of oral submucous fibrosis, leukoplakia and oral cancer; the STG asks staff to stress quitting, regular self-examination and dental screening ${r(3)} ${r(6)}. NEML: nystatin, fluconazole, triamcinolone 0.1% oral paste ${r(7)}. About 90% of oral cancers are squamous cell carcinomas ${r(6)}.</p>`)}
` },
{ id: "overview", title: "Conditions", html: `${tbl(["Condition", "Features"], [
["Recurrent aphthous stomatitis", "Round/oval sores, white or yellow centre, red border; triggers: stress, hormones, deficiencies " + r(1)],
["Oral candidiasis", "Wipeable white plaques, redness, burning, angular cheilitis, under dentures; risks: steroids, antibiotics, diabetes, HIV, cancer treatment, poor hygiene; neonates " + r(2)],
["Leukoplakia", "White patch that cannot be wiped off and is not another lesion; tobacco, alcohol, irritation " + r(3) + r(4)],
["Erythroplakia", "Red velvety patch; higher malignant potential " + r(3)],
["Oral submucous fibrosis", "Blanched, stiff mucosa, burning with spicy food, limited mouth opening, reduced palate movement; betel nut " + r(3)],
["Oral cancer", "Non-healing ulcer, white or red patch, lump, loose teeth, weight loss " + r(6)]
])}` },
{ id: "patho", title: "From habit to cancer", html: `${F.chart("Areca nut and tobacco", [F.s("Chronic irritation of mucosa"), F.a, F.s("Leukoplakia, erythroplakia, submucous fibrosis"), F.a, F.d("Dysplasia"), F.a, F.e("Squamous cell carcinoma")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck / NICE", "This guide"], [
["Aphthous ulcer treatment", "Vitamin B, C, zinc, folate or iron supplements; topical steroids contraindicated in viral ulcers", "Merck: topical steroids are the mainstay (triamcinolone paste several times daily ~2 weeks); supplements help some", "Triamcinolone oral paste for aphthous ulcers (not herpes) " + r(1) + r(4)],
["When to refer an ulcer", "Large or persistent, with fever or swollen glands", "NICE: unexplained ulcer more than 3 weeks — suspected cancer referral", "3 weeks rule " + r(1) + r(5)]
])}` },
{ id: "presentation", title: "Clinical features", html: `<p>Look at the whole mouth with good light: tongue (sides and under), floor of mouth, cheeks, gums, palate; feel for lumps and neck nodes ${LB.exp()}. Red flags: weight loss, neck mass, persistent sore throat, difficulty swallowing ${r(4)}.</p>
<div class="calc" data-calc="oralca"></div>` },
{ id: "ddx", title: "Differential of mouth ulcers", html: `${tbl(["Cause", "Clue"], [
["Herpes simplex", "Clustered vesicles, gingivostomatitis " + P("viral-skin", "viral skin")],
["Hand, foot and mouth disease", "Child, hand/foot lesions " + P("hfmd-child", "HFMD")],
["Traumatic ulcer", "Sharp tooth or denture edge; heals when removed " + r(3)],
["Behçet disease, IBD, coeliac", "Genital ulcers, gut symptoms " + LB.exp()],
["SJS, drug reaction", "Widespread erosions, skin rash " + P("sjs-adult", "SJS")],
["Cancer", "Painless, indurated, non-healing " + r(6)]
])}` },
{ id: "invest", title: "Investigations", html: `<p>KOH smear for candida if unsure ${r(4)}; FBC, iron, folate, B12 in recurrent ulcers ${LB.exp()}; glucose and HIV test in recurrent thrush ${LB.exp()}; biopsy of any lesion persisting more than a few weeks ${r(4)}.</p>` },
{ id: "staging", title: "Refer for suspected oral cancer (NICE NG12)", html: `<ul><li>Unexplained oral ulceration lasting more than 3 weeks, or a persistent unexplained neck lump — suspected cancer pathway ${r(5)}.</li><li>Lump on the lip or in the mouth, or a red or red-and-white patch — urgent dental assessment ${r(5)}.</li></ul>` },
{ id: "manage", title: "Treatment", html: `
<h3>Aphthous ulcers</h3><ul><li>Topical steroid (triamcinolone 0.1% oral paste) several times daily for about 2 weeks, early ${r(4)}; supplements (B vitamins, C, zinc, folate, iron) ${r(1)}; avoid acidic, spicy food; stress management ${r(1)}.</li><li>Severe or continuous: specialist; short oral prednisone ${r(4)}.</li></ul>
<h3>Oral thrush</h3><ul><li>Remove causes; nystatin 100,000 units 6-hourly (STG) ${r(2)}; severe or immunocompromised: fluconazole 150 mg daily for 7 days (or itraconazole) and refer ${r(2)}.</li><li>Disinfect dentures; remove at night ${r(2)}.</li></ul>
<h3>Premalignant lesions</h3><ul><li>Stop tobacco and areca nut; remove sharp teeth/denture irritation; refer to dentist/oral surgeon for biopsy ${r(3)}.</li><li>Submucous fibrosis: supplements (vitamins A, C, iron), mouth-opening physiotherapy, refer ${r(3)}.</li></ul>
<h3>Oral cancer</h3><p>Symptomatic care and referral for biopsy and treatment ${r(6)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("triamcinolone", "Triamcinolone")} 0.1% oral paste — NEML ${r(7)}.</li>
<li>${D("nystatin", "Nystatin")} — NEML ${r(7)}.</li>
<li>${D("fluconazole", "Fluconazole")} — NEML ${r(7)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Neonates", "Thrush is common in the first weeks; treat if feeding affected " + r(2)],
["HIV / immunosuppressed", "Recurrent thrush — systemic antifungal; HIV test " + r(2) + " " + P("hiv-adult", "HIV")],
["Denture wearers", "Denture stomatitis; hygiene " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["55-year-old doma chewer with a painless ulcer on the tongue for 5 weeks", "Suspected oral cancer: urgent referral for biopsy " + r(5)],
["Student with 2 small painful ulcers before exams", "Aphthous: triamcinolone paste, reassure " + r(1) + r(4)],
["Baby with white patches that wipe off and poor feeding", "Thrush: nystatin " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Malignant change of leukoplakia, erythroplakia, OSMF ${r(3)}.</li><li>Trismus in OSMF ${r(3)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Review any lesion at 2–3 weeks; refer if not healed ${r(5)}; regular dental screening for habit users ${r(3)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Mouth lesion", [F.d("Wipes off?"), F.a, F.b([["Yes", F.s("Thrush: nystatin")], ["No", F.d("Present > 3 weeks or red/white patch or lump?")]]), F.a, F.b([["Yes", F.e("Refer for biopsy (cancer)")], ["No", F.ok("Aphthous/traumatic: treat, review in 2–3 weeks")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Repeated courses of antifungals for a fixed white patch", "Delays cancer diagnosis", "Biopsy if it doesn't wipe off " + r(4)],
["Steroid paste on herpes", "Worsens viral ulcers", "Steroids only for aphthous " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Which oral patch has the highest malignant potential?", "Erythroplakia (red velvety patch).")}${qa("Specialist", "NICE trigger for suspected oral cancer referral?", "Unexplained oral ulcer lasting more than 3 weeks or a persistent unexplained neck lump.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.5 Aphthous ulceration.</li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.4.1 Oral candidiasis.</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.6 Premalignant lesions.</li>
<li id="ref-4">Merck Manual Professional Edition. Recurrent aphthous stomatitis; Oral growths; accessed Nov 2026.</li>
<li id="ref-5">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12), 1.8.2–1.8.4.</li>
<li id="ref-6">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.8 Oral cancer.</li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §17.4–17.8", "<span class='pass'>Checked</span>", "Partly scrambled"],
["Merck, NICE NG12", "<span class='pass'>Checked</span>", "Read"],
["WHO oral cancer screening", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "NICE NG12 + STG risks"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
