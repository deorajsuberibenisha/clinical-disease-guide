/* Eye injuries — all ages. Batch E-4, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §15.9 Ocular trauma (corneal laceration, ruptured globe, corneal and conjunctival foreign bodies,
   traumatic iritis, hyphaema, orbital blow-out fracture), §15.10.4 eyelid laceration, §15.11 chemical injuries, §15.12 corneal abrasion,
   §15.13 subconjunctival haemorrhage; NEML 2025.
   Heath Jeffery RC, Dobes J, Chen FK. Eye injuries: understanding ocular trauma. Aust J Gen Pract 2022 (full text read: irrigation to pH 7.0–7.5,
   no pad after chemical injury, open-globe care incl. oral ciprofloxacin 750 mg twice daily, red-flag table).
   Cochrane: Lim 2016 (patching for corneal abrasion); Gharaibeh 2019 (medical interventions for traumatic hyphaema) — abstracts read. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "eye-injury",
title: "Eye injuries",
subtitle: "Wash a chemical eye before anything else, never press on an eye that may be open, look under the lids for the hidden foreign body, and send the red flags to an ophthalmologist the same day",
age: "All ages", specs: ["eye", "emerg", "paeds"],
keywords: ["eye injury", "ocular trauma", "chemical eye injury", "alkali burn eye", "corneal abrasion", "corneal foreign body", "rust ring", "hyphaema", "hyphema", "open globe", "ruptured globe", "penetrating eye injury", "intraocular foreign body", "blow-out fracture", "eyelid laceration", "subconjunctival haemorrhage", "traumatic iritis", "fluorescein"],
related: ["redeye-adult", "redeye-child", "headinjury-adult", "trauma-adult", "tetanus-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Most eye injuries seen in Bhutan come from farm work, wood cutting, stone carving, metal grinding, arrows and darts, and lime or fertiliser splashes ${r(1)}. A few minutes of the right first aid saves more sight than anything done later.</p>
<div class="glance">
<div><h4>Chemical splash</h4><p><b>Irrigate immediately</b> — tap water, saline or Ringer's lactate — at least 15 minutes and until the pH is 7.0–7.5; sweep the fornices ${r(1, 2)}.</p></div>
<div><h4>Possible open globe</h4><p>Shield, no pressure, no ointment, nil by mouth, anti-emetic, antibiotic, tetanus, same-day ophthalmology ${r(1, 2)}.</p></div>
<div><h4>Abrasion / foreign body</h4><p>Anaesthetic drop, remove, fluorescein, ${D("chloramphenicol", "chloramphenicol")} ointment; evert the upper lid ${r(1, 2)}.</p></div>
<div><h4>Hyphaema</h4><p>Head up, shield, paracetamol only — no aspirin or NSAIDs — and refer ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG lists lime (used as white-wash) and fertiliser as common alkalis, and car-battery acid ${r(1)}. Ophthalmologists work at JDWNRH and regional and some district hospitals; lignocaine 4%, chloramphenicol 1% eye ointment, homatropine 2% and cyclopentolate 1% drops are on the NEML for hospitals with an eye unit ${r(5)}.</p>`)}
` },
{ id: "overview", title: "Types of injury", html: `${tbl(["Injury", "Typical cause", "Urgency"], [
["Chemical (alkali, acid)", "Lime, fertiliser (ammonia), cement; battery acid " + r(1, 2), "Emergency — irrigate before anything else"],
["Open globe (rupture or full-thickness laceration)", "Sharp objects, arrows, darts; blunt force on a weak eye " + r(1), "Emergency — same day"],
["Intraocular foreign body", "Hammering or grinding metal without goggles " + r(2), "Emergency — may leave almost no visible wound"],
["Hyphaema", "Blunt trauma, sport " + r(1), "Same day"],
["Orbital blow-out fracture", "Fist, ball, fall " + r(1), "Same day if entrapment or vision change"],
["Corneal abrasion / surface foreign body", "Twigs, dust, grit, contact lenses " + r(1), "Treat locally; review 1–3 days"],
["Eyelid laceration", "Sharp objects, dog bites (children) " + r(1, 2), "Refer if lid margin or tear duct involved"],
["Subconjunctival haemorrhage", "Minor trauma, coughing, hypertension " + r(1), "Usually harmless"]
])}` },
{ id: "patho", title: "Why speed matters", html: `
${F.chart("Chemical injury", [F.s("Alkali dissolves cell membranes and penetrates deeply; acid coagulates surface proteins"), F.a, F.d("Limbal stem cells damaged (white, ischaemic limbus)"), F.a, F.e("Failed corneal healing → scarring, vascularisation, symblepharon, blindness")])}
<p>Alkalis (lime, ammonia, caustic soda) generally injure more deeply than acids ${r(2)}. Every second of contact adds damage, which is why washing comes before history, visual acuity or examination ${r(1, 2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Current evidence", "This guide"], [
["Patching a corneal abrasion", "Chloramphenicol ointment, pad and bandage for 24 hours", "Cochrane 2016 (12 trials, 1,080 people): patching does not speed healing or reduce pain; may slightly slow healing at 24 h", "Ointment without a pad for most; a pad only for comfort in selected patients, never if infection is possible " + LB.int()],
["Pad after chemical injury", "Not stated", "Do not pad (AJGP 2022)", "No pad"],
["Irrigation end-point", "'3 Ps': prompt, profuse, prolonged", "≥ 15 minutes and until pH 7.0–7.5", "Both — use litmus paper where available " + r(2)],
["Open-globe antibiotic", "Systemic antibiotic within 6 hours (drug name unreadable in the PDF text)", "Oral ciprofloxacin 750 mg twice daily on the way (AJGP 2022)", "Ciprofloxacin (NEML 500 mg tablet) " + LB.exp("ONE SOURCE")],
["Hyphaema drugs", "Cycloplegic, no aspirin/NSAIDs, paracetamol, refer", "Cochrane 2019: no drug improves final vision; antifibrinolytics cut rebleeding", "Follow the STG; antifibrinolytics only by the ophthalmologist"]
])}` },
{ id: "presentation", title: "History and examination", html: `
<ul>
<li>What hit the eye, how fast, with what (metal on metal → intraocular foreign body), chemical name and contact time, glasses or goggles worn ${r(2)}.</li>
<li><b>Visual acuity in both eyes</b> — before any procedure (except chemical injury: wash first) ${r(1, 2)}.</li>
<li>Look with a torch: lids, conjunctiva, cornea (clear?), anterior chamber depth and blood, pupil shape (peaked pupil points to the wound), red reflex ${r(1, 2)}.</li>
<li>Fluorescein under blue light: green stain = epithelial defect; dye washed away by a stream of aqueous (Seidel sign) = full-thickness wound ${r(2)}.</li>
<li>Evert the upper lid for hidden foreign bodies, unless an open globe is possible ${r(1, 2)}.</li>
<li>Eye movements, double vision, numb cheek (blow-out fracture) ${r(1)}.</li>
</ul>
${box("red", "Red flags — same-day ophthalmology", `<ul><li>Reduced vision; no or poor red reflex; relative afferent pupillary defect</li><li>Peaked or irregular pupil, shallow or very deep anterior chamber, positive Seidel test</li><li>Limbal whitening, large epithelial defect after chemical injury</li><li>Hypopyon; hyphaema</li><li>Diplopia with proptosis or restricted upward gaze; vomiting or slow pulse on eye movement (entrapment)</li><li>Lid laceration through the margin or near the inner corner (tear duct)</li></ul><p>From AJGP 2022 table 1 and the STG ${r(1, 2)}.</p>`)}
<h3>The typical patient</h3>
<p>A 30-year-old mason in Punakha got slaked lime in his right eye while white-washing a house. He arrives in pain, eye screwed shut. <b>Before asking anything more</b>, lie him down, put in lignocaine 4% if available and irrigate with saline or Ringer's lactate for at least 15 minutes, evert the lids and sweep out lime particles, then check pH and repeat until 7.0–7.5. The limbus is white in one quadrant — chloramphenicol ointment, no pad, urgent referral to the eye unit ${r(1, 2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Presentation", "Consider"], [
["Red painful eye after 'something flew in'", "Corneal foreign body, abrasion — or intraocular foreign body if hammering metal " + r(2)],
["Red eye without trauma", "Conjunctivitis, keratitis, iritis, acute glaucoma — see Red eye"],
["Pain on eye movement after a punch", "Blow-out fracture; retrobulbar haemorrhage if proptosis and tight orbit " + r(2)],
["Subconjunctival haemorrhage after a blow", "Usually benign — but think of rupture if the chamber is very deep or the haemorrhage is extensive " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Visual acuity (Snellen chart or count fingers) — record for medicolegal reasons too ${r(1, 2)}.</li>
<li>pH paper on the conjunctiva after chemical injury ${r(2)}.</li>
<li>Fluorescein staining ${r(2)}.</li>
<li>Orbital X-ray (STG) or CT orbits with fine cuts for suspected intraocular foreign body or fracture; <b>no MRI</b> if a metallic foreign body is possible ${r(1, 2)}.</li>
<li>Do not measure eye pressure or force the lids open when an open globe is possible ${r(2)}.</li>
</ul>` },
{ id: "staging", title: "Triage by injury", html: `
${tbl(["Category", "Where to manage"], [
["Simple abrasion, superficial foreign body, subconjunctival haemorrhage", "BHU / district hospital; review in 1–3 days " + r(2)],
["Chemical injury with clear cornea and normal limbus", "Irrigate, ointment, review next day " + LB.exp()],
["Chemical injury with limbal whitening or corneal haze", "Irrigate, then urgent eye unit " + r(2)],
["Hyphaema, traumatic iritis, blow-out fracture", "Refer to eye unit the same day " + r(1)],
["Open globe, intraocular foreign body, lid-margin or canalicular laceration", "Emergency referral after first aid " + r(1, 2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>Chemical injury</h3>
<ol>
<li>Lie the patient flat; topical anaesthetic (lignocaine 4% if available) ${r(1)}.</li>
<li>Irrigate at once — tap water if nothing else, then normal saline or Ringer's lactate (about 2 L) for at least 15 minutes ${r(1, 2)}.</li>
<li>Evert the lids; sweep the fornices with a cotton swab or glass rod to remove particles (lime) ${r(1)}.</li>
<li>Check pH; keep irrigating until 7.0–7.5 and compare with the other eye ${r(2)}.</li>
<li>${D("chloramphenicol", "Chloramphenicol")} 1% ointment 4–6 times a day; no pad; refer urgently for limbal ischaemia or corneal opacity ${r(1, 2)}.</li>
</ol>
<h3>Suspected open globe</h3>
<ul>
<li>Rigid shield (or the bottom of a paper cup) — <b>no pad, no pressure, no ointment, no drops</b> ${r(1, 2)}.</li>
<li>Nil by mouth; note the time of the last meal; bed rest, head up; avoid straining ${r(1)}.</li>
<li>Anti-emetic: ${D("metoclopramide", "metoclopramide")} 10 mg IM every 8 hours as needed (STG) to avoid Valsalva ${r(1)}.</li>
<li>Systemic antibiotic within 6 hours: ${D("ciprofloxacin", "ciprofloxacin")} 750 mg orally twice daily (AJGP) ${r(1, 2)}.</li>
<li>Analgesia; tetanus prophylaxis ${r(1, 2)}; refer to the nearest ophthalmologist as soon as possible.</li>
</ul>
<h3>Corneal abrasion and surface foreign body</h3>
<ul>
<li>Anaesthetic drop; remove a loose foreign body with saline irrigation or a moist cotton bud; an embedded one with a 25 G needle tip under magnification — refer if deep, central, or a rust ring remains ${r(1, 2)}.</li>
<li>Fluorescein to check; ${D("chloramphenicol", "chloramphenicol")} ointment four times daily (STG: 5 days) ${r(1, 2)}.</li>
<li>Do not routinely pad (Cochrane: no faster healing, no less pain) ${r(3)}. Never give anaesthetic drops to take home ${LB.exp()}.</li>
<li>Review in 1–3 days; refer if an infiltrate (white spot) appears ${r(2)}.</li>
<li>Conjunctival lacerations over 1.5 cm need repair ${r(1)}.</li>
</ul>
<h3>Hyphaema</h3>
<ul>
<li>Head elevated, shield at all times, cycloplegic (homatropine) if available, paracetamol; avoid aspirin, NSAIDs and sedatives; refer ${r(1)}.</li>
<li>No drug improves final vision; tranexamic acid and aminocaproic acid reduce rebleeding — an ophthalmologist's decision ${r(4)}.</li>
</ul>
<h3>Blow-out fracture and lid laceration</h3>
<ul>
<li>Blow-out: no nose blowing; amoxicillin for those with sinusitis, diabetes or immune compromise (STG); refer — urgent for entrapment (especially the 'white-eye' fracture in children) ${r(1, 2)}.</li>
<li>Lid laceration: antibiotic ointment, tetanus and systemic antibiotic, gentle pad, refer for precise repair ${r(1)}.</li>
</ul>
<h3>Subconjunctival haemorrhage</h3>
<p>Reassure; paracetamol, not aspirin or ibuprofen; cold compresses; check BP and bleeding tendency; it fades in a few weeks ${r(1)}.</p>` },
{ id: "drugs", title: "Medicines (NEML 2025)", html: `${tbl(["Medicine", "Use", "NEML"], [
[D("chloramphenicol", "Chloramphenicol 1%"), "Abrasion, foreign body, chemical injury", "Eye ointment"],
[D("lidocaine", "Lignocaine 4%"), "Topical anaesthesia before irrigation or removal", "4% solution (hospital)"],
[D("ciprofloxacin", "Ciprofloxacin"), "Open globe prophylaxis", "500 mg tablet; infusion"],
[D("metoclopramide", "Metoclopramide"), "Prevent vomiting in open globe", "Tablet and injection"],
[D("homatropine", "Homatropine 2%") + " / cyclopentolate 1%", "Cycloplegia (hyphaema, iritis)", "Eye drops (district hospitals with an eye unit)"],
[D("paracetamol", "Paracetamol"), "Analgesia", "Yes"],
[D("td-vaccine", "Td vaccine") + ", " + D("tetanus-immunoglobulin", "tetanus immunoglobulin"), "Tetanus prophylaxis", "Yes"]
])}` },
{ id: "populations", title: "Children", html: `<ul>
<li>Children may hide an injury — examine both eyes in any child with a swollen lid after play ${LB.exp()}.</li>
<li>Lid injuries in children are often from dog bites; check the tear duct ${r(2)}.</li>
<li>'White-eye' blow-out fracture in under-18s: marked restriction of vertical eye movement with a quiet white eye, sometimes nausea and slow pulse — needs CT and early repair ${r(2)}.</li>
<li>Examination may need sedation or anaesthesia — refer rather than force the lids ${LB.exp()}.</li>
</ul>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Welder with gritty eye, no goggles, small corneal wound", "Suspect intraocular foreign body: shield, X-ray/CT, refer — do not treat as simple abrasion " + r(2)],
["Child hit by a dart; peaked pupil", "Open globe: shield, NPO, anti-emetic, antibiotic, tetanus, urgent referral " + r(1, 2)],
["Battery acid in the eye", "Irrigate to normal pH; assess limbus " + r(1, 2)],
["Football to the eye, half the anterior chamber filled with blood", "Hyphaema: head up, shield, paracetamol, refer " + r(1)],
["Twig scratch, fluorescein shows a linear defect, vision normal", "Chloramphenicol ointment; no pad; review in 1–3 days " + r(2, 3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Corneal scarring, limbal stem-cell failure, symblepharon after chemical injury ${r(2)}.</li>
<li>Endophthalmitis after penetrating injury or retained foreign body ${r(2)}.</li>
<li>Rebleeding, raised eye pressure and corneal blood staining after hyphaema ${r(4)}.</li>
<li>Sympathetic ophthalmia (rare) after penetrating injury ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and prevention", html: `<ul>
<li>Abrasion and foreign body: review in 1–3 days ${r(2)}; corneal laceration: daily until the epithelium heals ${r(1)}.</li>
<li>Prevention: goggles for grinding, hammering, wood cutting and spraying; keep lime and chemicals away from children; supervise archery and dart games ${LB.loc()}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Corneal abrasion stained with fluorescein", src: "images/corneal-abrasion-fluorescein.jpg", mod: "Clinical photograph, cobalt blue light", ctx: "Corneal abrasion", find: "Bright green area where the corneal epithelium is missing", interp: "Epithelial defect — treat with ointment; check for a hidden foreign body under the upper lid", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Human_cornea_with_abrasion_highlighted_by_fluorescein_staining.jpg", lic: "CC BY-SA 3.0" })}${fig({ title: "Hyphaema", src: "images/hyphaema.jpg", mod: "Clinical photograph", ctx: "Blunt eye trauma", find: "Blood layering in the lower half of the anterior chamber", interp: "Hyphaema — head up, shield, no NSAIDs, refer", by: "Rakesh Ahuja, MD", page: "https://commons.wikimedia.org/wiki/File:Hyphema_-_occupying_half_of_anterior_chamber_of_eye.jpg", lic: "CC BY-SA 2.5" })}${fig({ title: "Chemical burn of the eye", src: "images/chemical-eye-burn.jpg", mod: "Clinical photograph", ctx: "Chemical injury", find: "Hazy cornea with limbal damage", interp: "Severe chemical injury — limbal stem cells affected; needs specialist care", by: "Secker GA, Daniels JT", page: "https://commons.wikimedia.org/wiki/File:Chemical_burn_injury..jpg", lic: "CC BY 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Eye injury", [F.d("Chemical?"), F.a, F.b([["Yes", F.e("Irrigate ≥ 15 min → pH 7.0–7.5 → sweep fornices → assess limbus")], ["No", F.d("Possible open globe? (sharp object, peaked pupil, Seidel +, metal on metal)")]]), F.a, F.b([["Yes", F.e("Shield, NPO, anti-emetic, antibiotic, tetanus, refer now")], ["No", F.s("Acuity, fluorescein, evert lids")]]), F.a, F.b([["Abrasion / FB", F.ok("Remove, ointment, review 1–3 days")], ["Hyphaema, fracture, lid margin", F.e("Refer same day")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Checking vision before washing a chemical eye", "Minutes of extra damage", "Wash first"],
["Patching every abrasion", "No benefit; may slow healing", "Ointment, no pad"],
["Treating a metal-grinding injury as an abrasion", "Retained foreign body → endophthalmitis", "Imaging and referral"],
["Pressing on a ruptured eye to open the lids", "Extrusion of eye contents", "Shield and refer"],
["Ibuprofen for hyphaema", "Rebleeding", "Paracetamol"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "When do you stop irrigating a chemical eye injury?", "After at least 15 minutes and when the conjunctival pH is 7.0–7.5 (compare with the other eye).")}
${qa("Intern/MO", "Which is usually worse: lime or battery acid?", "Lime (an alkali) — alkalis penetrate more deeply.")}
${qa("Specialist", "What did the Cochrane review find about patching corneal abrasions?", "No faster healing or better pain relief; healing at 24 h may be slightly slower with a patch.")}
${qa("Specialist", "Which drugs reduce rebleeding in hyphaema, and do they improve vision?", "Tranexamic acid and aminocaproic acid reduce rebleeding; no drug improved final visual acuity.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §15.9–15.13 (ocular trauma, eyelid laceration, chemical injuries, corneal abrasion, subconjunctival haemorrhage).</li>
<li id="ref-2">Heath Jeffery RC, Dobes J, Chen FK. Eye injuries: understanding ocular trauma. Aust J Gen Pract 2022;51:476–482. <a href="https://doi.org/10.31128/AJGP-03-21-5921" target="_blank" rel="noopener">doi:10.31128/AJGP-03-21-5921</a></li>
<li id="ref-3">Lim CHL, Turner A, Lim BX. Patching for corneal abrasion. Cochrane Database Syst Rev 2016;7:CD004764. <a href="https://doi.org/10.1002/14651858.CD004764.pub3" target="_blank" rel="noopener">doi:10.1002/14651858.CD004764.pub3</a></li>
<li id="ref-4">Gharaibeh A, Savage HI, Scherer RW, et al. Medical interventions for traumatic hyphema. Cochrane Database Syst Rev 2019;1:CD005431. <a href="https://doi.org/10.1002/14651858.CD005431.pub4" target="_blank" rel="noopener">doi:10.1002/14651858.CD005431.pub4</a></li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG first aid and drug choices", "<span class='pass'>Checked</span>", "Read from STG §15.9–15.13"],
["Irrigation end-point, red flags, open-globe care", "<span class='pass'>Checked</span>", "AJGP 2022 full text"],
["Patching evidence", "<span class='pass'>Checked</span>", "Cochrane 2016 abstract"],
["Hyphaema drug evidence", "<span class='pass'>Checked</span>", "Cochrane 2019 abstract"],
["Ciprofloxacin 750 mg twice daily", "<span class='unv'>One source</span>", "AJGP; STG drug name unreadable"],
["Images", "<span class='pass'>Checked</span>", "3 Commons images, licence checked per file"]
], "qc")}` }
]
});
})();
