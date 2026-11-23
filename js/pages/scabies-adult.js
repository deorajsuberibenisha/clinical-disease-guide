/* Scabies (all ages) */
registerPage({
id: "scabies-adult",
title: "Scabies — Adults & Children",
subtitle: "Night-time itch shared by the household: the IACS 2020 diagnostic criteria, permethrin applied properly and repeated after a week, treating everyone the same night, crusted scabies, and outbreaks in schools and monasteries",
age: "Adults and children", specs: ["derm", "paeds", "ph", "medicine"],
keywords: ["scabies", "itch", "itching at night", "Sarcoptes scabiei", "mites", "burrows", "permethrin", "sulphur ointment", "ivermectin", "crusted scabies", "Norwegian scabies", "nodular scabies", "post-scabies itch", "household contacts", "institutional outbreak", "boarding school", "monastery"],
related: ["ssti-child", "ssti-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Scabies is the itch that keeps the whole family awake. It is easy to cure, but only if every person in the household is treated on the same night, the cream is applied everywhere, and the treatment is repeated a week later. Most 'treatment failures' are a missed contact or a missed second dose.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Itch worse at night + others at home itching + papules in finger webs, wrists, waist, genitals.</p></div>
<div><h4>Treat</h4><p>${dr("permethrin")} 5% neck to toes (whole body in infants and elderly), overnight, <b>repeat day 8</b>.</p></div>
<div><h4>Everyone</h4><p>All household and close contacts, same night, even without itch.</p></div>
<div><h4>Babies under 2 months</h4><p>${dr("sulphur_oint", "Sulphur ointment")} 5–6% daily for 3 nights.</p></div>
<div><h4>Crusted scabies</h4><p>Thick crusts, little itch: permethrin + oral ${dr("ivermectin")}; isolate; refer.</p></div>
<div><h4>Expect itch</h4><p>Itch lasts 2–4 weeks after cure: ${dr("cetirizine")} and emollients.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §16.1.4.1 recommends permethrin 5% overnight, repeated after 1 week (safe in pregnancy, lactation and babies over 2 months), or sulphur 10% ointment daily for 3 nights (6% in babies), oral antihistamine, and treatment of all family members with washing of clothes and bedding. Permethrin reaches PHC. Scabies outbreaks are common in boarding schools, monastic schools, nunneries and crowded homes in winter. Ivermectin is not on the NEML. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Diagnosis (IACS 2020)", html: `
${tbl(["Level", "Criteria"], [
["Confirmed", "Mites, eggs or faeces seen on skin scraping, dermoscopy or microscopy"],
["Clinical", "Burrows; or typical lesions on male genitalia; or typical lesions in a typical distribution with 2 history features"],
["Suspected", "Typical lesions in a typical distribution with 1 history feature; or atypical lesions with 2 history features"]])}
<p><b>History features:</b> itch, and a close contact who itches. <b>Typical distribution:</b> finger webs, wrists, elbows, axillae, waist and umbilicus, buttocks, genitals, nipples and areolae; in infants, also palms, soles, scalp and face.${r(2)}</p>
` },

{ id: "patho", title: "The mite", html: `
${F.chart("Life cycle and itch", [F.s("Female mite burrows into the epidermis, lays 2–3 eggs a day"), F.a, F.s("Spread by skin-to-skin contact (sleeping together, carrying children); rarely bedding"), F.a, F.e("Itch from hypersensitivity begins 3–6 weeks after first infestation (1–3 days on re-infestation)"), F.a, F.ok("Contacts are infectious before they itch: treat them all together")])}
<p>Typical scabies involves only 10–15 mites. Crusted scabies (immunosuppression, elderly, disability, leprosy) involves thousands to millions and is highly contagious.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "WHO 2023 / international", "This guide"], [
["Permethrin area", "Whole body including webs, genitals, under nails", "Neck down in adults; include scalp, face, ears in children under 2, elderly and crusted cases", "As international " + LB.int()],
["Ivermectin", "Not mentioned (NEMF: crusted scabies only)", "Oral 200 microgram/kg, 2 doses 7 days apart; mass drug administration where prevalence is 10% or more", "Crusted scabies and outbreaks; source via specialist"],
["Sulphur", "10% daily for 3 days; 6% in babies", "5–10%; for infants under 2 months and pregnancy where permethrin is unavailable", "As STG"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> itch worse at night, how long, who else at home or school itches, recent treatment and how it was used.</li>
<li><b>Examine:</b> finger webs, wrists, waist, genitals (nodules on the penis or scrotum are almost diagnostic), breasts, feet; burrows are short grey wavy lines; look for secondary impetigo.</li>
<li><b>Infants:</b> vesicles and pustules on palms and soles, scalp and face involvement, irritability and poor feeding.</li></ul>
${box("red", "Crusted scabies: think of it when", `<ul><li>Thick grey-yellow crusts on hands, feet, elbows, scalp; little itch</li><li>Older, immunosuppressed (HIV, steroids), disabled or institutionalised patients</li><li>Health workers caring for the patient start itching</li></ul>`)}
<h3>The typical patient</h3>
<p>A 26-year-old nun from a nunnery in Punakha has had an intensely itchy rash for 3 weeks, worst at night; five other nuns in her room are also scratching. She has papules and excoriations in her finger webs, wrists and around the waist. <b>This is scabies with an institutional cluster</b>. Everyone in the nunnery needs permethrin on the same night and again on day 8, bedding washed or sealed in bags, and a check for crusted cases; ivermectin through the specialist may help if the outbreak is large.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Atopic eczema", "Flexures, personal or family atopy, not shared"], ["Papular urticaria (insect bites)", "Exposed areas, clusters, seasonal"], ["Contact dermatitis", "Site of contact"], ["Dermatitis herpetiformis", "Extensor blisters, gluten"], ["Pediculosis corporis", "Lice and eggs in clothing seams"], ["Psoriasis (vs crusted scabies)", "Well-defined plaques; scraping shows no mites"]])}` },

{ id: "invest", title: "Investigations", html: `<p>Clinical diagnosis in most cases. Dermoscopy ('delta-wing jet' sign) or skin scraping in mineral oil under the microscope confirms it. Crusted scabies: scrapings are full of mites; check for HIV and other immunosuppression.</p>` },

{ id: "staging", title: "Household treatment planner", html: `<div class="calc" data-calc="scabiesplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Typical scabies</h3>
<ul><li>${dr("permethrin")} 5% cream: cool, dry skin; apply from the neck to the toes, including finger webs, under nails, genitals and soles (scalp, face and ears too in children under 2 and the elderly); leave 8–12 hours (overnight); wash off. Re-apply to hands if washed during that time. <b>Repeat after 7 days.</b></li>
<li>Treat <b>all household and close contacts</b> on the same night, whether or not they itch.</li>
<li>Next morning: wash clothes, sheets and towels used in the past 3 days in hot water and dry in the sun, or seal in a bag for 72 hours.</li>
<li>Itch: ${dr("cetirizine")} or another antihistamine for 1–2 weeks (STG), emollients; a mild topical steroid for persistent nodules.</li>
<li>Secondary impetigo: treat as well (see <a href="#/d/ssti-child">Skin infections in children</a>).</li></ul>
<h3>B. Alternatives</h3>
<ul><li>${dr("sulphur_oint", "Sulphur ointment")} 10% (6% in infants) daily for 3 nights, repeated after 1 week (STG): infants under 2 months, or if permethrin is unavailable.</li>
<li>${dr("ivermectin")} 200 microgram/kg orally, repeated after 7 days (15 kg and over, not pregnant): when topical treatment is impractical, for outbreaks, and with permethrin for crusted scabies.</li></ul>
<h3>C. Crusted scabies</h3>
<ul><li>Admit and isolate; staff wear gloves and gowns. Soften crusts (salicylic acid or urea emollient) and remove.</li>
<li>Permethrin daily for 7 days, then twice weekly until cured, plus ivermectin on days 1, 2, 8, 9 and 15 (and 22, 29 if severe). Treat all contacts and staff.</li></ul>
<h3>D. Outbreaks (schools, monasteries, nursing homes)</h3>
<p>Line-list cases; treat everyone (residents and staff) on the same day, twice, 7 days apart; wash bedding; look for crusted cases; inform the district health office.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("permethrin"), "5% neck to toes, 8–12 h, repeat day 8", "Over 2 months; safe in pregnancy"],
[dr("sulphur_oint"), "10% (infant 5–6%) daily × 3 nights, repeat after 1 week", "Under 2 months"],
[dr("ivermectin"), "200 microgram/kg, repeat day 8", "Not on NEML; 15 kg+, not pregnant"],
[dr("cetirizine"), "By age", "Itch"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy and breastfeeding:</b> permethrin is safe (wash off nipples before feeds); no ivermectin.</li><li><b>Infants:</b> include scalp and face (avoid eyes and mouth); put mittens on to stop licking hands; sulphur under 2 months.</li><li><b>Elderly and immunosuppressed:</b> atypical and crusted forms; include scalp.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Still itching 2 weeks after treatment", "Normal post-scabies itch if no new burrows; antihistamine, emollient", "Itch persists 2–4 weeks"], ["Itching again at 6 weeks", "Re-infestation from an untreated contact; re-treat everyone", "Commonest cause of failure"], ["Family cannot afford tubes for all", "Plan quantities with the tool; supply from PHC", "Partial treatment fails"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Secondary impetigo, cellulitis and sepsis; post-streptococcal glomerulonephritis and, in endemic settings, possibly rheumatic heart disease; sleep loss and school absence. Cure rates with two correct permethrin applications exceed 90%.</p>` },

{ id: "followup", title: "Advice", html: `
${box("green", "Advice to give", `<ul><li>Everyone at home is treated the same night and again 7 days later.</li><li>Cover every part of the skin from the neck down, including between fingers and toes, under nails and the genitals.</li><li>Wash bedding and clothes the next morning; things that cannot be washed go into a closed bag for 3 days.</li><li>Itch can last 2–4 weeks; this does not mean the treatment failed.</li></ul>`)}
${box("red", "Come back if", `<ul><li>New burrows or spots after 2 weeks</li><li>Sores with pus, fever, or a puffy face</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Scabies on the hand and fingers", src: "images/scabies-hand.jpg", mod: "Photograph", ctx: "Typical scabies", loc: "Hand, finger webs", find: "Small papules, excoriations and burrows in the finger webs and side of fingers", interp: "Classic site: look here first in anyone with night-time itch", by: "Gzzz", page: "https://commons.wikimedia.org/wiki/File:Scabies_hand_and_fingers_2.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Sarcoptes scabiei mite", src: "images/sarcoptes-mite.jpg", mod: "Light microscopy", ctx: "Skin scraping", loc: "—", find: "Round-bodied mite with short legs", interp: "Seeing the mite, eggs or faeces confirms scabies", by: "Kalumet", page: "https://commons.wikimedia.org/wiki/File:Sarcoptes_scabei_2.jpg", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Itchy family", [F.s("Night itch + contacts + typical sites"), F.a, F.d("Crusted or outbreak?"), F.a, F.b([["Yes", F.e("Permethrin + ivermectin; isolate; treat all residents and staff")], ["No", F.s("Permethrin all contacts same night; repeat day 8")]]), F.a, F.ok("Wash bedding; antihistamine; treat impetigo; review at 4 weeks if itch persists")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Treating only the patient", "Re-infestation", "Whole household, same night"], ["Skipping the second application", "Eggs hatch", "Repeat on day 8"], ["Only treating itchy areas", "Mites elsewhere survive", "Neck to toes"], ["Steroid cream alone", "Mites multiply (may become crusted)", "Diagnose and treat scabies"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why must asymptomatic contacts be treated?", "Itch develops 3–6 weeks after infestation, so contacts can carry and spread mites before symptoms.")}
${qa("Intern/MO", "How is permethrin applied for an adult?", "To cool, dry skin from neck to toes including webs, under nails and genitals; left 8–12 hours then washed off; repeated after 7 days.")}
${qa("Specialist", "Who gets crusted scabies, and why is it dangerous?", "Immunosuppressed, elderly or disabled people; huge mite numbers make it highly contagious and cause outbreaks.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.1.4.1 Scabies; NEMF 2022; NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Engelman D, Yoshizumi J, Hay RJ, et al. The 2020 International Alliance for the Control of Scabies Consensus Criteria for the Diagnosis of Scabies. Br J Dermatol 2020;183:808–820. <a href="https://doi.org/10.1111/bjd.18943" target="_blank" rel="noopener">doi:10.1111/bjd.18943</a></li>
<li id="ref-3">Romani L, Whitfeld MJ, Koroivueta J, et al. Mass drug administration for scabies control in a population with endemic disease. N Engl J Med 2015;373:2305–2313. <a href="https://doi.org/10.1056/NEJMoa1500987" target="_blank" rel="noopener">doi:10.1056/NEJMoa1500987</a></li>
<li id="ref-4">World Health Organization. Scabies fact sheet and public health control guidance (2023). <a href="https://www.who.int/news-room/fact-sheets/detail/scabies" target="_blank" rel="noopener">who.int</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §16.1.4.1", "<span class='pass'>Used</span>", "PDF images interrupt text; Clinical Reference summary used"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Ivermectin", "<span class='flag'>Not on NEML 2025</span>", "Specialist sourcing"], ["Bhutan scabies prevalence", "<span class='flag'>Unknown</span>", "No national survey found"]], "qc")}` }
]
});
