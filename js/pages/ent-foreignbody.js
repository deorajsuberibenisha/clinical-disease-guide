/* Foreign bodies in the ear and nose, and impacted earwax — all ages. Batch E-4, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §14.2 Impacted cerumen (softening with warmed cooking oil or diluted hydrogen peroxide for 5–7 days,
   then syringing with warm water along the canal roof; never after previous ear discharge), §14.4 Foreign body in the ear (wrap the child, hook,
   no forceps, seeds swell, refer for GA), §14.6 Foreign body in the nose (chronic one-sided discharge, hook, no forceps, button batteries are
   an emergency); NICE NG98 Hearing loss in adults §1.2 Removing earwax (read; last updated Oct 2023); Cook S et al. CMAJ 2012 ('mother's kiss',
   abstract read). */
(function () {
registerPage({
id: "ent-foreignbody",
title: "Foreign bodies in ear and nose; earwax",
subtitle: "One good attempt with the right tool beats many bad ones: wrap the child, use a hook not forceps, try the 'mother's kiss' for the nose, treat button batteries as an emergency, and soften wax before removing it",
age: "All ages", specs: ["ent", "paeds", "emerg"],
keywords: ["foreign body ear", "foreign body nose", "bead in nose", "seed in ear", "insect in ear", "button battery nose", "mother's kiss", "earwax", "impacted cerumen", "ear syringing", "ear irrigation", "microsuction", "wax softener", "cotton buds", "unilateral nasal discharge"],
related: ["otitis-adult", "otitis-child", "epistaxis-child", "urti-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Small children push beads, seeds, stones, paper and toy parts into their ears and noses; adults get insects in the ear and wax that blocks hearing. These problems are rarely dangerous, but clumsy attempts at removal often turn an easy job into one that needs a general anaesthetic.</p>
<div class="glance">
<div><h4>Button battery</h4><p>In the nose or ear it is an <b>emergency</b> — remove immediately ${r(1)}.</p></div>
<div><h4>Ear or nose object</h4><p>Wrap the child; one attempt with a blunt hook behind the object — <b>no forceps</b> for round objects ${r(1)}.</p></div>
<div><h4>Nose, cooperative child</h4><p>'Mother's kiss' first: about 60% success, no reported harm ${r(3)}.</p></div>
<div><h4>Wax</h4><p>Soften first; then irrigate with care — not if the drum may be perforated ${r(1, 2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG describes making a smooth hook from a paper clip, and referring when removal is not easy, because a general anaesthetic may be needed ${r(1)}. Electronic irrigators and microsuction are mainly at ENT clinics in referral hospitals; at other levels, softening plus careful syringing is still the usual method ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The problems in brief", html: `${tbl(["Problem", "Typical patient", "Key point"], [
["Ear foreign body", "Child aged 2–8; adults with cotton-bud tips or insects", "Seeds and beans swell with water — do not irrigate them " + r(1)],
["Nose foreign body", "Toddler", "Chronic one-sided, foul or blood-stained discharge suggests a forgotten object " + r(1)],
["Button battery", "Child", "Causes chemical burns within hours (septal perforation, canal damage) " + r(1) + " " + LB.exp()],
["Impacted wax", "Any age; hearing-aid users; cotton-bud users", "Deafness without pain; pain if hard or swollen with water " + r(1)]
])}` },
{ id: "patho", title: "Why things go wrong", html: `
${F.chart("Failed removal", [F.s("Round object, frightened child, forceps"), F.a, F.d("Object pushed deeper; canal or septum bleeds and swells"), F.a, F.e("Further attempts fail → general anaesthetic")])}
<p>Forceps grip flat objects well but push round ones further in, which is why the STG advises a hook passed behind the object ${r(1)}. Wax is normal and self-cleaning; cotton buds push it back and impact it ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE NG98 (adults)", "This guide"], [
["Wax removal method", "Softening 5–7 days, then syringing with warm water along the canal roof", "Do not offer manual syringing; electronic irrigation, microsuction or manual removal by trained staff", "Electronic irrigator or microsuction where available; careful syringing by a trained person otherwise " + LB.loc()],
["Softening", "Warmed cooking oil or diluted hydrogen peroxide, 5–7 days", "Softeners immediately before, or up to 5 days before, irrigation", "Olive or cooking oil drops for up to 5–7 days " + LB.exp()],
["Failed irrigation", "—", "Repeat softeners or instil water 15 min before a second try; refer after the second failure", "NICE"],
["Contraindication", "Never syringe after previous ear discharge", "Practitioner must know contraindications", "No irrigation with perforation, previous ear surgery or discharge " + r(1)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Ear: pain or itching, reduced hearing, buzzing (insect) ${r(1)}.</li>
<li>Nose: one-sided nasal discharge — chronic, blood-stained or foul-smelling — bad breath, discomfort ${r(1)}.</li>
<li>Wax: blocked ear, deafness without pain; pain if hard or swollen after water enters ${r(1)}.</li>
<li>Always examine both ears and both nostrils, and look for a second object.</li>
</ul>
<h3>The typical patient</h3>
<p>A 3-year-old in Paro has had a smelly discharge from the right nostril for 2 weeks. Torch examination shows a white bead. <b>Nasal foreign body.</b> Explain the mother's kiss: block the left nostril, the mother seals her mouth over the child's and gives one short, sharp puff. If it fails, wrap the child, and pass a blunt hook behind the bead — no forceps ${r(1, 3)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Presentation", "Consider"], [
["One-sided nasal discharge in a child", "Foreign body (most likely), sinusitis, choanal atresia (from birth)"],
["Ear pain and discharge", "Otitis externa or media — see Otitis"],
["Hearing loss with normal canal", "Glue ear, sensorineural loss — audiology (NICE: refer sudden loss urgently) " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Usually none: good light, headlamp or otoscope, nasal speculum.</li>
<li>X-ray if a button battery or metal object may have been swallowed or inhaled as well ${LB.exp()}.</li>
</ul>` },
{ id: "staging", title: "When to refer", html: `${tbl(["Situation", "Action"], [
["Button battery anywhere", "Remove immediately; refer at once if you cannot " + r(1)],
["Failed first attempt, uncooperative child, object deep or against the drum", "Refer to ENT — may need general anaesthetic " + r(1)],
["Bleeding or trauma from earlier attempts", "Refer"],
["Wax not cleared after two irrigation attempts", "Refer to ENT or a specialist ear-care service " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>Foreign body in the ear</h3>
<ol>
<li>Wrap the child in a cloth so they cannot move; good light ${r(1)}.</li>
<li>Pass a smooth blunt hook (e.g. a straightened paper clip with a smooth bent end) behind the object, twist and pull out. Do not use forceps on round objects ${r(1)}.</li>
<li>Do not irrigate seeds, beans or other vegetable matter — they swell ${r(1)}.</li>
<li>Live insect: drown it first with a few drops of oil or lidocaine, then remove ${LB.exp()}.</li>
<li>If not easy, refer — the patient may need a general anaesthetic ${r(1)}.</li>
</ol>
<h3>Foreign body in the nose</h3>
<ol>
<li>Mother's kiss (or a bag-valve-mask puff through the mouth) for a cooperative young child: overall success 59.9% (91/152) in case series, no adverse effects reported ${r(3)}.</li>
<li>Otherwise wrap the child and pass a blunt hook beyond the object to pull it forward; no forceps ${r(1)}.</li>
<li>Button battery: emergency removal ${r(1)}.</li>
<li>Refer if it fails ${r(1)}.</li>
</ol>
<h3>Impacted wax</h3>
<ol>
<li>Soften: a few drops of warmed (not hot) cooking oil, or diluted hydrogen peroxide, for 5–7 days (STG); NICE allows softeners just before or up to 5 days before irrigation ${r(1, 2)}.</li>
<li>Irrigate with water at body temperature, directing the stream along the roof of the canal — by a trained person, with an electronic irrigator where available ${r(1, 2)}.</li>
<li><b>Do not irrigate</b> after any history of ear discharge (possible perforation) ${r(1)}.</li>
<li>If unsuccessful, soften again or put water in the canal 15 minutes before a second try; refer after the second failure ${r(2)}.</li>
</ol>` },
{ id: "drugs", title: "Medicines and materials", html: `<ul>
<li>Cooking or olive oil (wax softening; insect drowning).</li>
<li>Lidocaine 2% (insect; topical anaesthesia in older children and adults) — NEML.</li>
<li>No antibiotics are needed after an uncomplicated removal ${LB.exp()}.</li>
</ul>` },
{ id: "populations", title: "Special groups", html: `${tbl(["Group", "What changes"], [
["Young children", "One calm attempt; sedation or GA rather than repeated struggling " + r(1)],
["Adults with a cotton-bud tip in the ear", "Usually easy with a hook or crocodile forceps (flat object)"],
["Diabetes, immune compromise", "Avoid canal trauma (risk of severe otitis externa) " + LB.exp()],
["Hearing-aid users", "Regular wax checks " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Child pushed a watch battery up the nose an hour ago", "Emergency removal now; refer immediately if not possible " + r(1)],
["Bean in a 5-year-old's ear", "Do not irrigate; hook; refer if it fails " + r(1)],
["Cockroach buzzing in an adult's ear at night", "Drown with oil, then remove " + LB.exp()],
["Elderly man, blocked ear, history of 'running ear' as a child", "Do not syringe; soften and refer for microsuction " + r(1, 2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Canal laceration, drum perforation, bleeding from forced removal.</li>
<li>Septal perforation and necrosis from button batteries ${r(1)} ${LB.exp()}.</li>
<li>Aspiration of a nasal object pushed backwards.</li>
<li>Otitis externa or perforation after irrigation ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Prevention and advice", html: `<ul>
<li>Keep small objects and button batteries away from young children ${r(1)}.</li>
<li>Do not clean ears with cotton buds or other objects — this damages the canal and pushes wax deeper ${r(2)}.</li>
<li>Return for pain, discharge or bleeding after removal.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Do not clean ears with cotton buds", src: "images/earwax-swab.jpg", mod: "Photograph", ctx: "Earwax care", find: "Earwax on a cotton bud, crossed out", interp: "Cotton buds push wax deeper and can injure the canal and drum", by: "Beat Ruest", page: "https://commons.wikimedia.org/wiki/File:Earwax_on_swab_crossed_out.jpg", lic: "CC BY-SA 4.0" })}${fig({ title: "Button battery on X-ray (swallowed)", src: "images/button-battery-xray.png", mod: "Radiograph", ctx: "Button battery ingestion in a child", find: "Round radio-opaque disc in the abdomen (arrow)", interp: "Button batteries cause rapid chemical injury — in the nose or ear remove at once; check for swallowed ones too", by: "Doc James", page: "https://commons.wikimedia.org/wiki/File:ButtonBatteryIngestion.png", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Object in ear or nose", [F.d("Button battery?"), F.a, F.b([["Yes", F.e("Emergency removal / immediate referral")], ["No", F.d("Nose and cooperative child?")]]), F.a, F.b([["Yes", F.s("Mother's kiss")], ["No", F.s("Wrap child, good light, blunt hook behind object")]]), F.a, F.d("Out?"), F.a, F.b([["Yes", F.ok("Check the other side; advice")], ["No", F.e("Stop; refer to ENT (GA)")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Forceps on a bead", "Pushes it deeper", "Hook behind it"],
["Irrigating a seed", "It swells", "Hook or refer"],
["Repeated attempts on a screaming child", "Trauma, need for GA anyway", "One good attempt, then refer"],
["Syringing an ear with a past discharge", "Perforation, infection", "Ask first"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which nasal foreign body is an emergency?", "A button battery — it burns tissue within hours.")}
${qa("Intern/MO", "Why avoid forceps for a round object?", "They push it further in; use a blunt hook behind it.")}
${qa("Specialist", "What did the review of the mother's kiss find?", "Overall success 59.9% in case series, with no adverse effects reported.")}
${qa("Specialist", "What does NICE say about manual ear syringing?", "Do not offer it; use electronic irrigation, microsuction or manual removal by trained staff.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §14.2 Impacted cerumen, §14.4 Foreign body in the ear, §14.6 Foreign body in the nose.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Hearing loss in adults: assessment and management (NG98), §1.2 Removing earwax. Last updated October 2023. <a href="https://www.nice.org.uk/guidance/ng98" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Cook S, Burton M, Glasziou P. Efficacy and safety of the "mother's kiss" technique: a systematic review of case reports and case series. CMAJ 2012;184:E904–E912. <a href="https://doi.org/10.1503/cmaj.111864" target="_blank" rel="noopener">doi:10.1503/cmaj.111864</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG wax and foreign-body steps", "<span class='pass'>Checked</span>", "Read from STG §14.2, 14.4, 14.6"],
["NICE earwax recommendations", "<span class='pass'>Checked</span>", "NG98 §1.2 read"],
["Mother's kiss figures", "<span class='pass'>Checked</span>", "CMAJ 2012 abstract"],
["Insect drowning, battery injury timing", "<span class='unv'>Expert opinion</span>", "Labelled"],
["Images", "<span class='pass'>Checked</span>", "2 Commons images, licence checked per file"]
], "qc")}` }
]
});
})();
