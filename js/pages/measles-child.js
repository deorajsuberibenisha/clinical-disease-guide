/* Measles, mumps and rubella (Bhutan STG 8.5.5–8.5.7, WHO) */
registerPage({
id: "measles-child",
title: "Measles, Mumps & Rubella",
subtitle: "Recognise the rash and spots, give vitamin A to every child with measles, treat complications early, isolate and notify, and vaccinate",
age: "Children (and adults)", specs: ["paeds", "id", "ph"],
keywords: ["measles", "rubeola", "Koplik spots", "vitamin A", "mumps", "parotitis", "orchitis", "rubella", "German measles", "congenital rubella", "MMR", "MR vaccine", "outbreak", "elimination"],
related: ["pneumonia-child", "sam-child", "ge-child", "redeye-child", "meningitis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Bhutan was verified as having eliminated measles in 2017. Every suspected case is a public health event — notify immediately — and every child with measles gets vitamin A.</p>
<div class="glance">
<div><h4>Measles</h4><p>Fever + cough/coryza/conjunctivitis, then rash from face down; Koplik's spots.</p></div>
<div><h4>Treat</h4><p>${dr("vitamin_a", "Vitamin A")} days 1 and 2; treat pneumonia, diarrhoea, eyes.</p></div>
<div><h4>Mumps / rubella</h4><p>Supportive; keep pregnant women away from rubella.</p></div>
<div><h4>Prevent</h4><p>${dr("mmr_vaccine", "MR/MMR")} 2 doses; contacts within 72 h.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 8.5.6 gives vitamin A once; WHO gives two doses. Measles and rubella are under case-based surveillance: notify the district health officer the same day and send samples as directed. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "The three diseases", html: `${tbl(["Disease", "Key features", "Main risks"], [["Measles", "High fever, 3 Cs, Koplik's spots, maculopapular rash day 3–4 spreading down", "Pneumonia, diarrhoea, blindness, encephalitis, SAM"], ["Mumps", "Painful parotid swelling", "Orchitis, meningitis, deafness, pancreatitis"], ["Rubella", "Mild fever, post-auricular nodes, fine pink rash", "Congenital rubella syndrome in pregnancy"]])}${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Measles", [F.s("Airborne — very contagious (R0 12–18)"), F.a, F.s("Immune suppression for weeks to years"), F.a, F.e("Secondary infections, vitamin A depletion → corneal damage")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "WHO", "This guide"], [["Vitamin A", "Once", "Two doses (day 1 and 2); third if eye signs", "WHO " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Measles: prodrome 2–4 days (fever, cough, coryza, red eyes), Koplik's spots, rash for 5–6 days then brown staining and peeling.</li><li>Complicated measles: pneumonia, stridor, diarrhoea/dehydration, mouth ulcers, eye signs, convulsions, malnutrition.</li></ul><h3>The typical patient</h3><p>A 2-year-old unvaccinated child returning from India has 4 days of fever, cough and red eyes, now a rash spreading from the face; Koplik's spots seen. <b>This is measles</b>: isolate, notify today, vitamin A 200,000 IU today and tomorrow, check for pneumonia and dehydration, vaccinate contacts.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Rubella", "Milder, nodes, short-lived rash"], ["Dengue", "Rash late, low platelets"], ["Scarlet fever", "Sandpaper rash, strawberry tongue"], ["Drug rash, Kawasaki", "Drug history; fever over 5 days with mucosal changes"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Serum measles/rubella IgM and throat/urine sample for PCR via the surveillance programme; chest X-ray if pneumonia.</p>` },
{ id: "staging", title: "Vitamin A and admission", html: `<div class="calc" data-calc="measlesvita"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Vitamin A by age, two doses.</li><li>Fever: paracetamol; fluids, continue feeding/breastfeeding.</li><li>Pneumonia: amoxicillin (severe: ampicillin + gentamicin); diarrhoea: ORS + zinc.</li><li>Eyes: clean, tetracycline eye ointment; corneal clouding — urgent eye care.</li><li>Mouth ulcers: clean with salt water; gentian violet.</li><li>Mumps: analgesia, fluids, scrotal support for orchitis.</li><li>Rubella: symptomatic; test exposed pregnant women.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("vitamin_a"), "50,000–200,000 IU by age", "Days 1 and 2"], [dr("amoxicillin"), "40 mg/kg 12-hourly", "Pneumonia"], [dr("tetracycline"), "Eye ointment", "Conjunctivitis"], [dr("mmr_vaccine"), "0.5 mL", "Contacts within 72 h"]])}` },
{ id: "populations", title: "Pregnancy and malnutrition", html: `<p>Rubella in the first 16 weeks: high risk of congenital rubella syndrome (deafness, cataract, heart defects) — counsel. Measles in SAM: high mortality, treat in hospital.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Suspected case in a school", "Notify, isolate 4 days after rash, check vaccination, vaccinate contacts"]])}` },
{ id: "complications", title: "Complications", html: `<p>Measles: pneumonia, laryngotracheobronchitis, diarrhoea, blindness, encephalitis, SSPE years later. Mumps: orchitis, meningitis, deafness. Rubella: arthritis, CRS.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Weight and nutrition for 1–2 months after measles; completion of vaccination.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Koplik's spots", src: "images/koplik.jpg", mod: "Clinical photograph", ctx: "Measles prodrome", loc: "Buccal mucosa", find: "White spots on red base opposite molars", signs: "Koplik's spots", interp: "Pathognomonic of measles; appear before the rash", by: "CDC", page: "https://commons.wikimedia.org/wiki/File:Koplik_spots,_measles_6111_lores.jpg", lic: "Public domain" })}${fig({ title: "Measles rash", src: "images/measles-rash.jpg", mod: "Clinical photograph", ctx: "Measles day 3", loc: "Face and trunk", find: "Confluent red maculopapular rash", interp: "Rash spreads from face downwards", by: "CDC/NIP/Barbara Rice", page: "https://commons.wikimedia.org/wiki/File:RougeoleDP.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fever + rash", [F.d("Cough/coryza/conjunctivitis + maculopapular rash?"), F.a, F.b([["Yes", F.e("Suspected measles: isolate, notify, vitamin A")], ["No", F.ok("Other rash causes")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No vitamin A", "Blindness, death", "Two doses"], ["Not notifying", "Outbreak", "Same-day notification"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Vitamin A dose for an 8-month-old with measles?", "100,000 IU on day 1 and day 2.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. Measles fact sheet, and Pocket book of hospital care for children, 2nd ed., 2013. <a href="https://www.who.int/news-room/fact-sheets/detail/measles" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, sections 8.5.5–8.5.7.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Vitamin A doses", "<span class='pass'>Checked</span>", "WHO"]], "qc")}` }
]
});
