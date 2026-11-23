/* Skin and soft-tissue infections in adults: cellulitis, erysipelas, abscess, boils, impetigo, necrotising infection */
registerPage({
id: "ssti-adult",
title: "Skin and Soft-Tissue Infections — Adults",
subtitle: "Cellulitis and erysipelas, boils and abscesses, impetigo, infected bites and the one you must never miss, necrotising fasciitis: 5-day antibiotic courses, drainage before drugs, and treating the entry point",
age: "Adults", specs: ["derm", "medicine", "surg", "id"],
keywords: ["cellulitis", "erysipelas", "abscess", "boil", "furuncle", "carbuncle", "folliculitis", "impetigo", "ecthyma", "skin infection", "SSTI", "necrotising fasciitis", "necrotizing fasciitis", "Fournier", "pyomyositis", "MRSA", "cefalexin", "cloxacillin", "incision and drainage", "diabetic foot", "tinea pedis"],
related: ["ssti-child", "scabies-adult", "rabies-adult", "dm-adult", "sepsis-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most skin infections are streptococcal or staphylococcal and respond to five days of a cheap penicillin. Pus needs a knife more than a pill. The skill lies in spotting the rare patient whose pain is far worse than the skin looks: that is necrotising infection, and it needs a surgeon today.</p>
<div class="glance">
<div><h4>Cellulitis</h4><p>Spreading red, warm, tender skin: ${dr("cefalexin")} 500 mg 8-hourly or ${dr("cloxacillin")} 500 mg 6-hourly, <b>5 days</b>.</p></div>
<div><h4>Abscess</h4><p><b>Incise and drain.</b> Antibiotics only with spreading cellulitis, systemic illness, face or hand, or immunosuppression.</p></div>
<div><h4>Impetigo</h4><p>Few lesions: clean + ${dr("mupirocin")}. Widespread: oral antibiotic 5 days.</p></div>
<div><h4>Necrotising</h4><p>Pain out of proportion, rapid spread, bullae, crepitus, shock: <b>surgery now</b>.</p></div>
<div><h4>Elevate, mark, review</h4><p>Pen the edge; review at 48–72 hours. Redness often spreads a little on day 1.</p></div>
<div><h4>Entry point</h4><p>Treat toe-web tinea, wounds, oedema; check glucose.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §16.1.2 covers impetigo, ecthyma, folliculitis/furunculosis and cellulitis/erysipelas (amoxicillin or cephalexin; IV ceftriaxone or cloxacillin if severe; 5–6 days). Cefalexin is listed at referral hospitals; cloxacillin and amoxicillin reach PHC. MRSA is reported from Bhutanese hospital isolates but most community cellulitis is streptococcal. Fusidic acid (mentioned in the STG) is not on the NEML; mupirocin is. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Infection", "Layer and organism", "Look"], [
["Impetigo", "Epidermis; <i>S. aureus</i>, group A strep", "Honey-coloured crusts; bullous form with flaccid blisters"],
["Ecthyma", "Deeper impetigo; strep", "Punched-out crusted ulcers, often legs"],
["Folliculitis, furuncle, carbuncle", "Hair follicle; <i>S. aureus</i>", "Pustule → tender nodule → multi-headed abscess"],
["Erysipelas", "Upper dermis and lymphatics; strep", "Raised, sharply demarcated, bright red edge; face or leg"],
["Cellulitis", "Deeper dermis and fat; strep > staph", "Spreading, poorly demarcated redness, warmth, swelling"],
["Abscess", "Pus collection; <i>S. aureus</i>", "Fluctuant, tender swelling, sometimes pointing"],
["Necrotising soft-tissue infection", "Fascia; strep, mixed anaerobes, Clostridia", "Severe pain, rapid spread, dusky skin, bullae, crepitus, shock"]])}
` },

{ id: "patho", title: "How infection gets in", html: `
${F.chart("Portal → infection", [F.s("Broken skin: cuts, insect bites, scabies, toe-web tinea, eczema, ulcers, injections"), F.a, F.s("Bacteria spread in dermis and lymphatics; oedema and diabetes help them"), F.a, F.b([["Superficial", F.e("Impetigo, erysipelas, cellulitis")], ["Localised pus", F.e("Abscess (needs drainage)")], ["Fascial plane", F.e("Necrotising fasciitis: toxins, thrombosis, gangrene")]])])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "WHO AWaRe 2022 / IDSA 2014 / NICE NG141", "This guide"], [
["Cellulitis first line", "Amoxicillin or cephalexin; severe IV ceftriaxone or cloxacillin", "Cefalexin or cloxacillin (anti-staph and strep); amoxicillin alone misses staph", "Cefalexin or cloxacillin " + LB.int()],
["Duration", "5–6 days", "5 days, extend if not improving", "5 days"],
["Abscess antibiotics", "Systemic antibiotics for selected boils", "Drainage alone for simple abscess; antibiotics for listed risk features", "As IDSA " + LB.int()],
["Impetigo topical", "Neomycin, mupirocin or fusidic acid", "Hydrogen peroxide 1% (NICE) or mupirocin/fusidic acid; neomycin not recommended", "Mupirocin (on NEML); keep courses short"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> onset and speed of spread, pain severity, fever, portal (wound, bite, injection, tinea), diabetes, immunosuppression, previous episodes, drug use.</li>
<li><b>Examine:</b> mark the edge with a pen and time; warmth, tenderness, fluctuation (abscess), lymphangitis, bullae, crepitus, numbness; toe webs; pulses; vital signs.</li>
<li><b>Severity (Eron):</b> I — well, no comorbidity; II — systemically unwell or comorbidity; III — significant systemic upset or limb-threatening; IV — sepsis or necrotising infection.</li></ul>
${box("red", "Suspect necrotising infection if", `<ul><li>Pain far worse than the skin appearance, or pain beyond the red area</li><li>Rapid spread over hours despite antibiotics</li><li>Dusky, purple or grey skin, blisters, crepitus, numb skin</li><li>Tachycardia, hypotension, confusion</li></ul>`)}
<h3>The typical patient</h3>
<p>A 58-year-old woman with diabetes from Samdrup Jongkhar has a hot, red, swollen lower leg for 2 days with a temperature of 38.4 °C; she has itchy cracked skin between her toes. Her pulse is 96 and BP normal; there is no fluctuation, crepitus or blistering. <b>This is cellulitis, Eron class II</b> (diabetes, mild systemic upset) entering through tinea pedis. Mark the edge, elevate, check glucose; she can have oral cefalexin 500 mg 8-hourly for 5 days with review at 48 hours, plus clotrimazole between the toes — or IV cloxacillin if she worsens.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Deep vein thrombosis", "Calf swelling, less redness, no fever; ultrasound"], ["Venous (stasis) eczema", "Both legs, itchy, brownish, chronic"], ["Gout or septic arthritis", "Centred on a joint"], ["Insect bite reaction", "Itchy, central punctum, early"], ["Contact dermatitis", "Itch, sharp borders matching the contact"], ["Herpes zoster (early)", "Dermatomal pain, then vesicles"]])}` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "When"], [["Glucose / HbA1c", "All recurrent or severe infections"], ["CBC, creatinine, CRP, lactate", "Eron II–IV"], ["Blood cultures", "Sepsis, immunosuppression"], ["Pus culture", "Recurrent abscesses, failed treatment, hospital-acquired"], ["Ultrasound", "Unsure if pus present; DVT"], ["X-ray, CT", "Gas or deep collections; never delay surgery for imaging in suspected necrotising infection"]])}
` },

{ id: "staging", title: "Treatment tool", html: `<div class="calc" data-calc="sstiplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Cellulitis and erysipelas</h3>
<ul><li>Eron I: oral ${dr("cefalexin")} 500 mg 8-hourly or ${dr("cloxacillin")} 500 mg 6-hourly for 5 days. Penicillin allergy: ${dr("doxycycline")} 100 mg 12-hourly, or clindamycin where available.</li>
<li>Eron II–III: IV ${dr("cloxacillin")} 2 g 6-hourly or ${dr("ceftriaxone")} 2 g daily; switch to oral when improving.</li>
<li>Elevate the limb, analgesia, treat tinea, oedema and wounds; compression after recovery for recurrent leg cellulitis.</li>
<li>Recurrent (2 or more a year despite treating risk factors): consider prophylactic penicillin V or erythromycin specialist-advised.</li></ul>
<h3>B. Abscess and boils</h3>
<ul><li><b>Incision and drainage</b> under local anaesthetic: an adequate incision along skin lines, break loculi, irrigate; pack only large cavities. Warm compresses for small boils (STG).</li>
<li>Antibiotics (as cellulitis) if cellulitis over 5 cm, systemic signs, face, hand or perineum, immunosuppression, extremes of age, or failed drainage.</li>
<li>Recurrent boils: check glucose; decolonise the household: ${dr("mupirocin")} to nostrils twice daily for 5 days, chlorhexidine washes; avoid shaving legs (STG).</li></ul>
<h3>C. Impetigo and ecthyma</h3>
<ul><li>Clean and remove crusts; few lesions: ${dr("mupirocin")} 3 times daily for 5 days. Widespread, bullous or ecthyma: oral cefalexin or cloxacillin 5–7 days.</li></ul>
<h3>D. Necrotising soft-tissue infection</h3>
<ul><li>Resuscitate (see <a href="#/d/sepsis-adult">Sepsis</a>); urgent surgical debridement is the life-saving step; IV broad cover (e.g. ${dr("piptazo")} or ${dr("meropenem")}, plus clindamycin where available) and ${dr("metronidazole")} for perineal (Fournier's) disease.</li></ul>
<h3>E. Bites</h3>
<p>${dr("coamoxiclav")} for infected or high-risk bites; rabies PEP and tetanus (see <a href="#/d/rabies-adult">Dog bites and rabies</a>).</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("cefalexin"), "500 mg 8-hourly (1 g if obese) × 5 days", "First choice oral"],
[dr("cloxacillin"), "500 mg 6-hourly PO; 2 g 6-hourly IV", "Empty stomach orally"],
[dr("doxycycline"), "100 mg 12-hourly", "Penicillin allergy; covers most MRSA"],
[dr("ceftriaxone"), "2 g IV daily", "Severe cellulitis"],
[dr("mupirocin"), "Topical 3 times daily × 5 days", "Localised impetigo; nasal decolonisation"],
[dr("coamoxiclav"), "625 mg 8-hourly", "Bites"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Diabetes:</b> lower threshold for admission; examine feet; deep foot infection, osteomyelitis and necrotising infection are more common.</li><li><b>Pregnancy:</b> cefalexin and cloxacillin are safe; avoid doxycycline.</li><li><b>Older adults:</b> may present with confusion and low fever; cellulitis is often over-diagnosed for bilateral leg redness (usually venous eczema).</li><li><b>People who inject drugs:</b> abscesses, retained needles, endocarditis.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Redness spreading on day 1 of antibiotics", "Usually toxin-mediated; review at 48–72 h unless unwell", "Early spread is common"], ["Facial cellulitis near the eye with painful eye movements", "Orbital cellulitis: IV ceftriaxone + metronidazole, refer to eye/ENT", "Vision and brain at risk"], ["Abscess recurs after drainage", "Check for sinus, foreign body, diabetes, MRSA culture", "Underlying cause"], ["Leg swelling, fever and pain after a wound in river or paddy water", "Consider necrotising infection and water-borne organisms such as Aeromonas; culture, broad cover", "Environmental organisms"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Abscess formation, sepsis, recurrent cellulitis and lymphoedema, post-streptococcal glomerulonephritis (after impetigo), toxic shock, necrotising fasciitis (mortality 20–30%, higher with delay), osteomyelitis in diabetic feet. Uncomplicated cellulitis settles in 7–10 days.</p>` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "Advice to give", `<ul><li>Keep the limb raised; take the full 5-day course; drink fluids.</li><li>Treat itchy cracked skin between the toes; moisturise dry skin; control diabetes.</li><li>Cover cuts; do not squeeze boils; wash hands.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Redness spreads beyond the pen line after 48 hours, or blisters or dark patches appear</li><li>Pain becomes severe, fever rises, or you feel faint or confused</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Cellulitis of the lower leg and foot", src: "images/cellulitis-foot.jpg", mod: "Photograph", ctx: "Adult cellulitis", loc: "Lower leg and foot", find: "Diffuse redness and swelling without a sharp edge", interp: "Typical cellulitis: oral cefalexin or cloxacillin for 5 days if well; mark the edge", by: "cbinrva", page: "https://commons.wikimedia.org/wiki/File:Cellulitis_of_lower_leg_and_foot.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Impetigo of the face", src: "images/impetigo-face.jpg", mod: "Clinical photograph (historical)", ctx: "Non-bullous impetigo", loc: "Face", find: "Crusted, golden-yellow lesions around the mouth and cheeks", interp: "Extensive impetigo: oral antibiotic for 5 days; treat household contacts with lesions", by: "Wellcome Collection", page: "https://commons.wikimedia.org/wiki/File:Woman%27s_face_infected_with_impetigo_Wellcome_L0074829_(cropped).jpg", lic: "CC BY 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Red, hot, swollen skin", [F.s("Mark edge; vitals; glucose"), F.a, F.d("Necrotising features?"), F.a, F.b([["Yes", F.e("Resuscitate; surgeon now; IV broad antibiotics")], ["No", F.d("Pus?")]]), F.a, F.b([["Yes", F.s("Incise and drain; antibiotics only if risk features")], ["No", F.s("Cellulitis: Eron I oral 5 days; II–III IV")]]), F.a, F.ok("Elevate; treat portal; review 48–72 h")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Antibiotics without draining pus", "Abscess persists", "Incise and drain"], ["10–14-day courses for simple cellulitis", "Resistance, side effects", "5 days, extend only if needed"], ["Calling bilateral red legs cellulitis", "Usually venous eczema", "Cellulitis is rarely bilateral"], ["Missing necrotising fasciitis", "Death", "Pain out of proportion = surgeon"], ["Ignoring toe-web tinea", "Recurrence", "Treat the portal"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Difference between erysipelas and cellulitis?", "Erysipelas is superficial with a raised, sharply demarcated edge; cellulitis is deeper with poorly defined margins.")}
${qa("Intern/MO", "Duration of antibiotics for uncomplicated cellulitis?", "5 days (WHO AWaRe, IDSA), extended only if not improving.")}
${qa("Specialist", "Key early clinical clue to necrotising fasciitis?", "Pain and tenderness out of proportion to the visible skin changes, often extending beyond the redness.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.1.2 Bacterial skin infections; NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis 2014;59:e10–e52. <a href="https://doi.org/10.1093/cid/ciu296" target="_blank" rel="noopener">doi:10.1093/cid/ciu296</a></li>
<li id="ref-3">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) Antibiotic Book. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">National Institute for Health and Care Excellence. Cellulitis and erysipelas: antimicrobial prescribing (NG141), 2019; Impetigo: antimicrobial prescribing (NG153), 2020. <a href="https://www.nice.org.uk/guidance/ng141" target="_blank" rel="noopener">nice.org.uk</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §16.1.2", "<span class='pass'>Used</span>", "PDF images interrupt text; key lines recovered"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Local MRSA rate in community SSTI", "<span class='flag'>Unknown</span>", "No community data found"]], "qc")}` }
]
});
