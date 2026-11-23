/* Hand, foot and mouth disease (Bhutan STG 16.1.3.4, WHO WPRO 2011) */
registerPage({
id: "hfmd-child",
title: "Hand, Foot & Mouth Disease",
subtitle: "Mild in most children: fluids, paracetamol and soft food — but watch every child for enterovirus 71 danger signs such as lethargy, vomiting and myoclonic jerks",
age: "Children under 5 (all ages)", specs: ["paeds", "id", "derm"],
keywords: ["hand foot and mouth disease", "HFMD", "enterovirus 71", "EV71", "coxsackievirus", "herpangina", "myoclonic jerks", "brainstem encephalitis", "onychomadesis", "outbreak"],
related: ["chickenpox-child", "measles-child", "meningitis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">HFMD outbreaks occur in Bhutanese schools and crèches. Most children recover in a week; a few with EV71 develop encephalitis or cardiopulmonary failure.</p>
<div class="glance">
<div><h4>Rash</h4><p>Vesicles on palms, soles, buttocks; mouth ulcers.</p></div>
<div><h4>Treat</h4><p>${dr("paracetamol")}, fluids, cold soft food.</p></div>
<div><h4>Danger</h4><p>Lethargy, vomiting, jerks, ataxia, weakness, fast breathing.</p></div>
<div><h4>Prevent</h4><p>Hand washing, stay home while unwell.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 16.1.3.4: supportive care. The MoH hosts the WHO WPRO HFMD clinical guide for staging and outbreak response; notify clusters to the district health office. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Coxsackievirus A16 and A6 (mild), EV71 (severe); faecal-oral and droplet spread; incubation 3–7 days.${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("EV71", [F.s("Viraemia"), F.a, F.s("Brainstem invasion"), F.e("Autonomic storm → neurogenic pulmonary oedema, shock")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "WHO WPRO", "This guide"], [["Severe cases", "Not detailed", "Staging 1–4 with IVIG/milrinone in ICU", "WPRO staging " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Fever, sore mouth, poor feeding; grey oval vesicles with red halo on palms/soles; mouth ulcers.</li><li>Atypical (CA6): widespread blisters, eczema herpeticum-like.</li></ul><h3>The typical patient</h3><p>A 3-year-old in a Thimphu crèche has fever, mouth ulcers and blisters on hands and feet; alert, drinking. <b>Stage 1 HFMD</b>: paracetamol, cold fluids, stay home until well, return for jerks, vomiting or drowsiness.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Chickenpox", "Trunk-first, crops, spares palms/soles"], ["Herpetic gingivostomatitis", "Gum swelling, front of mouth"], ["Measles", "3 Cs, Koplik spots"], ["Scabies", "Burrows, itch, no fever"]])}` },
{ id: "invest", title: "Investigations", html: `<p>None in mild cases; throat/stool swab in outbreaks/severe; glucose, FBC, CSF, chest X-ray in severe.</p>` },
{ id: "staging", title: "Staging tool", html: `<div class="calc" data-calc="hfmdstage"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Stage 1: home care, analgesia, hydration.</li><li>Stage 2+: admit, close monitoring, refer.</li><li>Dehydration: ORS/IV fluids.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("paracetamol"), "15 mg/kg 6-hourly", "Fever, pain"], [dr("ivig"), "1 g/kg (specialist)", "Stage 2–3"]])}` },
{ id: "populations", title: "Adults and pregnancy", html: `<p>Usually mild; near-term maternal infection can cause neonatal disease.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["School outbreak", "Exclusion while unwell, hand hygiene, cleaning, notify"]])}` },
{ id: "complications", title: "Complications", html: `<p>Dehydration, encephalitis, AFP, pulmonary oedema, myocarditis, nail shedding.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Recheck in 24–48 h if fever high or over 3 days.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "HFMD rash on the foot", src: "images/hfmd-foot.jpg", mod: "Clinical photograph", ctx: "Hand, foot and mouth disease", loc: "Sole", find: "Oval vesicles with red halo", interp: "Typical HFMD", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Characteristic_rash_of_hand,_foot,_and_mouth_disease,_on_a_human_foot.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("HFMD", [F.d("Danger signs?"), F.a, F.b([["Yes", F.e("Admit, stage, refer")], ["No", F.ok("Home care, safety-net")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing myoclonus", "EV71 encephalitis", "Ask about startle jerks in sleep"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Which virus causes severe HFMD?", "Enterovirus 71.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization Regional Office for the Western Pacific. A guide to clinical management and public health response for hand, foot and mouth disease. 2011.</li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 16.1.3.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["WPRO staging", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
