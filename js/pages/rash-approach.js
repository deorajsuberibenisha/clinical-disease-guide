/* Approach to rash — all ages. Batch E-9b (owner request, 27 Nov 2026).
   Sources read: Merck Manual Professional 'Description of skin lesions' (Benedetti, Aug 2026) and 'Evaluation of the dermatologic patient'
   (Aug 2026); Merck 'Fever' (Jul 2024 — fever with rash, petechial/purpuric rash, drug hypersensitivity); NICE NG240 meningitis and meningococcal
   disease (2024 — red flags, look all over incl. conjunctivae, darker skin, rash can change from blanching to non-blanching, pre-hospital
   antibiotics); NICE NG143 (non-blanching rash red feature; Kawasaki features); Bhutan IMNCI 2024 §11 (differential of fever with rash; fever with
   rash notifiable); Bhutan STG 2024 ch. 16 (dermatology chapter structure; urticaria wheal duration 30 min–24 h). Not read: BAD/NICE CKS rash
   pages, UKHSA rash in pregnancy, DermNet — marked. Disease details live on linked pages. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "rash-approach",
title: "Approach to rash — all ages",
subtitle: "First decide if the patient is ill (fever, shock, non-blanching rash, mucosal erosions, peeling skin): then describe the lesion — macule, papule, plaque, vesicle, bulla, pustule, wheal, petechia — and its distribution to narrow the cause",
age: "All ages", specs: ["derm", "emerg", "paeds", "medicine", "id"],
keywords: ["rash", "approach to rash", "skin rash", "fever and rash", "exanthem", "maculopapular", "petechiae", "purpura", "non-blanching rash", "glass test", "vesicles", "blisters", "bullae", "pustules", "wheals", "hives", "target lesions", "erythroderma", "drug rash", "drug eruption", "itchy rash", "skin lesion description", "primary morphology", "measles rash", "meningococcal rash", "scrub typhus rash", "dengue rash"],
related: ["fever-approach", "measles-child", "chickenpox-child", "hfmd-child", "dengue-adult", "dengue-child", "scrub-adult", "scrub-child", "meningitis-child", "meningitis-adult", "sepsis-child", "sjs-adult", "sjs-child", "kawasaki-child", "scabies-adult", "ssti-adult", "ssti-child", "anaphylaxis-adult", "anaphylaxis-child", "hsp-child", "sti-adult", "neolocal-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Most rashes are harmless, but a few are emergencies: meningococcal disease, dengue with bleeding, Stevens-Johnson syndrome/toxic epidermal necrolysis, anaphylaxis, necrotising soft tissue infection, erythroderma and eczema herpeticum. Skin diagnosis is driven by <b>what the lesion looks like</b> and <b>where it is</b>, refined by the history ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>1. Is the patient ill?</h4><p>Fever, shock, altered consciousness, mucosal involvement, skin pain or peeling, rapidly spreading rash ${r(3)} ${r(4)}.</p></div>
<div><h4>2. Does it blanch?</h4><p>Press a glass or finger: non-blanching petechiae or purpura with fever = meningococcal disease until proven otherwise ${r(4)} ${LB.exp("GLASS TEST NOT DESCRIBED IN NG240")}.</p></div>
<div><h4>3. Describe it</h4><p>Lesion type, colour, surface (scale, crust), arrangement, distribution, mucosa, nails, scalp ${r(1)} ${r(2)}.</p></div>
<div><h4>4. History</h4><p>New drugs, contacts, vaccination, travel, sexual history, occupation, atopy, itch, timing ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Fever with rash is a <b>notifiable</b> condition under IMNCI — think measles and rubella (unvaccinated, cough, red eyes), dengue (petechiae, bleeding), scrub typhus (rash on the trunk spreading outwards, black eschar) and meningococcal disease ${r(5)}. Petechiae are harder to see on darker skin — look at the conjunctivae and all over the body including the nappy area ${r(4)}. Patch testing for allergic contact dermatitis is available at JDWNRH ${r(6)}.</p>`)}
` },
{ id: "overview", title: "Describing lesions", html: `${tbl(["Term", "Meaning", "Examples"], [
["Macule / patch", "Flat colour change; macule < 10 mm, patch > 10 mm", "Freckle; vitiligo; measles, rubella, rickettsial rashes " + r(1)],
["Papule / plaque", "Raised, palpable; papule < 10 mm, plaque > 10 mm", "Warts, insect bites, acne; psoriasis " + r(1)],
["Nodule", "Firm lesion extending into dermis or subcutis", "Cysts, lipomas, infections " + r(1)],
["Vesicle / bulla", "Fluid blister; vesicle < 10 mm, bulla > 10 mm", "Herpes, chickenpox, contact dermatitis; burns, drug reactions, pemphigus, pemphigoid " + r(1)],
["Pustule", "Vesicle containing pus", "Folliculitis, acne, pustular psoriasis " + r(1)],
["Wheal (urticaria)", "Raised, itchy, oedematous; each lasts < 24 hours", "Drugs, stings, infections, physical triggers " + r(1)],
["Scale", "Heaped-up keratin", "Psoriasis, seborrhoeic dermatitis, fungal infection, pityriasis rosea " + r(1)],
["Crust", "Dried serum, blood or pus", "Impetigo " + r(1)],
["Petechia / purpura", "Non-blanching bleeding into skin; purpura > 2 mm", "Meningococcal disease, dengue, low platelets, vasculitis " + r(3) + r(4)],
["'Maculopapular'", "Loosely used for many red rashes — non-specific; better to describe exactly", r(1)]
])}` },
{ id: "patho", title: "How to think", html: `
${F.chart("Morphology first", [F.s("Look: lesion type, colour, surface"), F.a, F.s("Where: flexures, extensors, palms/soles, trunk, sun-exposed, mucosa"), F.a, F.s("Generate a morphological differential"), F.a, F.s("History and examination narrow it"), F.a, F.d("Still unsure? → scrapings, swabs, biopsy, refer")])}
<p>Experienced clinicians often form a differential from the appearance and distribution before taking the history, then use history, examination and tests to narrow it ${r(2)}. Erythema may be less visible on darker skin — look for swelling, texture change and pigment change instead ${r(1)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Source A", "Source B", "This guide"], [
["Rash in suspected meningococcal disease", "NICE NG240: do not rule it out because there is no rash; rash can change from blanching to non-blanching", "Common teaching relies on the glass test " + LB.exp(), "Glass test helps, but an ill febrile patient needs antibiotics regardless " + r(4)],
["'Maculopapular rash'", "Merck: avoid the term — non-specific", "IMNCI uses it (measles, scrub typhus)", "Describe exactly; use local terms for notification " + r(1) + r(5)]
])}` },
{ id: "presentation", title: "History and examination", html: `
${tbl(["Ask", "Why"], [
["When and where it started, how it spread, how it changed, triggers", "Pattern and evolution " + r(2)],
["Itch, pain, burning", "Itch: eczema, urticaria, scabies; pain: zoster, cellulitis, SJS/TEN, necrotising infection " + LB.exp()],
["Fever, unwell, joint pains, red eyes, sore mouth", "Systemic illness " + r(3)],
["New medicine in the last 8 weeks (also herbal), injections", "Drug eruption, SJS/TEN, DRESS " + r(2) + r(3)],
["Contacts, school outbreaks, vaccination status", "Measles, chickenpox, HFMD, scabies " + r(5)],
["Travel, fields, forest, animals", "Scrub typhus, dengue, anthrax " + r(5)],
["Sexual history", "Secondary syphilis, HIV seroconversion, herpes " + r(2) + r(3)],
["Occupation, hair dye, jewellery, cement", "Contact dermatitis " + r(2) + r(6)],
["Personal/family atopy or psoriasis; systemic disease", "Eczema, psoriasis, diabetes, lupus " + r(2)]
])}
<p><b>Examine everything:</b> whole skin, scalp, nails and mucous membranes (mouth, eyes, genitals); a hand lens or dermatoscope helps ${r(2)}. Check temperature, pulse, BP, capillary refill, lymph nodes, liver and spleen.</p>
<div class="calc" data-calc="rashsort"></div>` },
{ id: "ddx", title: "Differential by pattern", html: `
<h3>Fever with rash</h3>
${tbl(["Pattern", "Think of"], [
["Non-blanching petechiae / purpura, ill", P("meningitis-child", "Meningococcal disease") + ", " + P("sepsis-child", "sepsis") + ", severe " + P("dengue-child", "dengue") + " " + r(3) + r(4)],
["Blanching red macules/papules from the face downwards, cough, coryza, red eyes", P("measles-child", "Measles") + " (rubella: milder, nodes behind the ears) " + r(5)],
["Rash starting on trunk and axillae, sparing face, palms and soles; eschar; nodes", P("scrub-child", "Scrub typhus") + " / rickettsial fever " + r(5)],
["Flushing then petechiae, bleeding gums, abdominal pain", P("dengue-adult", "Dengue") + " " + r(5)],
["Vesicles in crops, all stages together", P("chickenpox-child", "Chickenpox") + " " + LB.exp()],
["Vesicles on hands, feet and mouth", P("hfmd-child", "Hand, foot and mouth disease") + " " + LB.exp()],
["Fever ≥ 5 days, red eyes, red lips, swollen hands and feet, rash", P("kawasaki-child", "Kawasaki disease") + " " + r(7)],
["Target lesions, mucosal erosions, skin pain, peeling after a new drug", P("sjs-adult", "SJS/TEN") + " " + r(3)],
["Painful spreading erythema, fever", P("ssti-adult", "Cellulitis / necrotising infection") + " " + r(3)],
["Generalised nodes, rash, sore throat, new sexual partner", "HIV seroconversion, secondary syphilis, infectious mononucleosis " + r(3) + " → " + P("sti-adult", "STI page")],
["Black painless ulcer with swelling after handling animals", P("anthrax", "Cutaneous anthrax") + " " + LB.loc()]
])}
<h3>Rash without fever</h3>
${tbl(["Pattern", "Think of"], [
["Wheals lasting under 24 hours ± lip/eye swelling", "Urticaria / angioedema; with breathing or circulation problems = " + P("anaphylaxis-adult", "anaphylaxis") + " " + r(1) + r(6)],
["Itchy papules in finger webs, wrists, genitals; family itching, worse at night", P("scabies-adult", "Scabies") + " " + LB.exp()],
["Itchy dry patches in flexures (or cheeks/extensors in infants)", "Atopic eczema " + LB.exp("DERMATOLOGY PAGES IN PROGRESS")],
["Well-defined plaques with silvery scale on elbows, knees, scalp; nail pits", "Psoriasis " + r(6)],
["Ring with scaly edge, clearing centre", "Tinea " + LB.exp()],
["Greasy scale on scalp, eyebrows, nasolabial folds", "Seborrhoeic dermatitis " + r(6)],
["Honey-coloured crusts", P("ssti-child", "Impetigo") + " " + r(1)],
["Dermatomal painful vesicles", "Herpes zoster " + LB.exp()],
["Palpable purpura on legs and buttocks in a child, abdominal pain, joint pain", P("hsp-child", "IgA vasculitis (HSP)") + " " + LB.exp()],
["Petechiae and bruising without fever", "Low platelets (ITP, leukaemia, aplasia), vasculitis — FBC " + LB.exp()],
["Recurring single dusky patch at the same site after a drug", "Fixed drug eruption " + r(6)],
["Patch with loss of sensation", "Leprosy — test sensation " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Situation", "Tests"], [
["Most rashes", "None — clinical diagnosis " + r(2)],
["Fever with petechiae/purpura", "FBC with platelets, blood culture, CRP, coagulation; meningococcal PCR; do not delay antibiotics " + r(4) + " " + LB.exp("TEST LIST PARTLY COMMON PRACTICE")],
["Fever with rash (notifiable)", "Measles/rubella serology per national surveillance; dengue NS1/IgM, CBC; scrub typhus IgM " + r(5) + " " + LB.loc()],
["Scaly rash", "Skin scrapings for fungus (KOH) " + LB.exp()],
["Pustules, crusts, infected eczema", "Pus swab " + r(6)],
["Allergic contact dermatitis", "Patch test (JDWNRH) " + r(6)],
["Chronic urticaria", "CBC, ESR, CRP " + r(6)],
["Genital ulcer or generalised rash with nodes", "Syphilis (RPR) and HIV tests " + r(3) + " " + LB.loc()],
["Unclear, blistering or suspected malignancy", "Skin biopsy, refer to dermatology " + r(2)]
])}` },
{ id: "staging", title: "Emergency rashes", html: `
${tbl(["Emergency", "Clues", "Do now"], [
["Meningococcal disease", "Non-blanching rash with lesions > 2 mm, spreading petechiae, or petechiae with meningitis features; ill appearance; cold hands; shock", "IV/IM ceftriaxone or benzylpenicillin immediately (pre-hospital if transfer is delayed); emergency transfer " + r(4)],
["Severe dengue", "Petechiae, mucosal bleeding, abdominal pain, rising haematocrit", P("dengue-child", "Dengue fluids") + " " + r(5)],
["SJS/TEN", "Skin pain, target lesions, blisters, mucosal erosions, new drug", "Stop the drug; burns-type care; refer " + P("sjs-adult", "SJS page")],
["Anaphylaxis", "Wheals + breathing or circulation problems", "IM adrenaline " + P("anaphylaxis-child", "anaphylaxis page")],
["Necrotising soft tissue infection", "Pain out of proportion, rapid spread, dusky skin, crepitus", "Surgery + IV antibiotics " + P("ssti-adult", "SSTI page") + " " + LB.exp()],
["Eczema herpeticum", "Rapidly worsening painful eczema, clustered blisters, punched-out erosions, fever", "Systemic aciclovir; same-day dermatology (ophthalmology if near eyes) " + r(8)],
["Erythroderma / generalised pustular psoriasis", "Whole skin red; fever, unwell", "Same-day specialist assessment " + r(9)]
])}` },
{ id: "manage", title: "General management", html: `
<ul>
<li>Treat the cause; stop suspected drugs (record the reaction) ${r(3)}.</li>
<li>Itch: emollients; non-sedating antihistamine such as cetirizine for urticaria ${r(6)}.</li>
<li>Weeping, oozing eczema: dilute pink potassium permanganate soaks or saline soaks, then emollient and topical steroid (STG) ${r(6)}.</li>
<li>Topical steroid potency matched to site: mild (hydrocortisone 1%) for face and folds, moderate–potent (triamcinolone 0.1%) for trunk and limbs ${r(6)}.</li>
<li>Isolate and notify suspected measles; fever with rash is notifiable ${r(5)}.</li>
<li>Refer: diagnostic uncertainty, blistering disease, severe or extensive disease, suspected skin cancer, no response to first-line treatment ${r(2)} ${r(6)} ${LB.int()}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("ceftriaxone", "Ceftriaxone")} or ${D("benzylpenicillin", "benzylpenicillin")} — suspected meningococcal disease ${r(4)}.</li>
<li>${D("epinephrine", "Adrenaline")} IM — anaphylaxis ${LB.loc()}.</li>
<li>${D("aciclovir", "Aciclovir")} — eczema herpeticum, severe chickenpox or zoster ${r(8)}.</li>
<li>${D("cetirizine", "Cetirizine")} 10 mg — NEML; urticaria, itch ${r(6)}.</li>
<li>${D("hydrocortisone", "Hydrocortisone")} 1% cream, ${D("triamcinolone", "triamcinolone")} 0.1% ointment — NEML topical steroids ${r(6)}.</li>
<li>${D("miconazole", "Miconazole")} 2% cream — NEML; fungal and napkin rashes ${r(6)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Newborns", "Most newborn rashes are benign (erythema toxicum, milia, neonatal acne) — but pustules or vesicles in an unwell baby may be infection (HSV, staph) " + P("neolocal-child", "neonatal local infections") + " " + LB.exp()],
["Darker skin", "Redness less visible; petechiae best seen in conjunctivae and mouth; psoriasis and eczema may look violaceous or grey " + r(1) + r(4)],
["Pregnancy", "Chickenpox, measles, rubella and parvovirus exposure need urgent advice " + LB.exp("UKHSA RASH IN PREGNANCY NOT READ")],
["Immunocompromised", "Disseminated zoster, fungal infection, atypical appearances " + r(3)],
["Older adults", "Drug eruptions, bullous pemphigoid, skin cancer " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["3-year-old with fever and a few non-blanching spots on the legs, cold hands", "Treat as meningococcal disease: ceftriaxone now, emergency transfer " + r(4)],
["Unvaccinated 5-year-old, fever, cough, red eyes, rash spreading from the face", "Measles: isolate, vitamin A, notify " + r(5) + " → " + P("measles-child", "measles")],
["Farmer with fever, rash on trunk and a black scab in the groin", "Scrub typhus — doxycycline " + r(5)],
["Woman started on carbamazepine 3 weeks ago: target lesions, sore mouth, red eyes", "SJS — stop the drug, admit " + P("sjs-adult", "SJS")],
["Child with itchy wheals that move from place to place, otherwise well", "Acute urticaria — cetirizine; look for triggers " + r(6)],
["Whole family itching at night, papules in finger webs", "Scabies — treat all contacts at once " + P("scabies-adult", "scabies")]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Secondary bacterial infection (often <i>S. aureus</i>) of eczema and itchy rashes ${r(6)}.</li>
<li>Sepsis, DIC, gangrene in meningococcal disease ${LB.exp()}.</li>
<li>Scarring, pigment change (especially in darker skin) ${r(1)}.</li>
<li>Steroid atrophy from potent steroids on the face or folds ${r(9)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Review topical steroid courses at about 2 weeks (STG) ${r(6)}.</li>
<li>Tell families to watch for a rash that changes from blanching to non-blanching and to return at once ${r(4)}.</li>
<li>Refer to a dermatologist if first-line treatment fails (STG) ${r(6)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Patient with a rash", [F.d("Ill? fever, shock, mucosa, skin pain, spreading?"), F.a, F.b([["Yes", F.e("Emergency rash table: meningococcal, dengue, SJS/TEN, anaphylaxis, necrotising infection")], ["No", F.s("Describe lesion and distribution")]]), F.a, F.d("Non-blanching?"), F.a, F.b([["Yes + fever", F.e("Antibiotics now; transfer")], ["Yes, no fever", F.s("FBC/platelets; vasculitis, ITP")], ["No", F.s("Morphological differential → history → treat or refer")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Not undressing the patient", "Petechiae, eschars and scabies burrows are missed", "Examine all skin, mouth, eyes, genitals " + r(2) + r(4)],
["Reassured by a blanching rash", "Meningococcal rash may start blanching", "Re-examine; safety-net " + r(4)],
["Calling everything 'maculopapular'", "Hides the diagnosis", "Use exact terms " + r(1)],
["Missing the drug history", "SJS/TEN and DRESS progress if the drug continues", "Ask about every new drug in 8 weeks " + r(3)],
["Steroid cream on an undiagnosed ring rash", "Tinea spreads ('tinea incognito')", "Scrape first " + LB.exp()]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Size cut-off between macule and patch, papule and plaque, vesicle and bulla?", "10 mm.")}
${qa("Intern/MO", "What does a non-blanching rash with fever mean?", "Meningococcal disease until proven otherwise — give ceftriaxone or benzylpenicillin and transfer.")}
${qa("Specialist", "Where do you look for petechiae in darker skin?", "Conjunctivae (and mouth); check all over including the nappy area.")}
${qa("Specialist", "Typical distribution of scrub typhus rash per IMNCI?", "Starts on the trunk and axillae, spreads outward, sparing face, palms and soles; may have an eschar.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Benedetti J. Description of skin lesions. Merck Manual Professional Edition; reviewed Aug 2026.</li>
<li id="ref-2">Benedetti J. Evaluation of the dermatologic patient. Merck Manual Professional Edition; reviewed Aug 2026.</li>
<li id="ref-3">Bush LM, Vazquez-Pertejo MT. Fever. Merck Manual Professional Edition; reviewed Jul 2024.</li>
<li id="ref-4">National Institute for Health and Care Excellence. Meningitis (bacterial) and meningococcal disease: recognition, diagnosis and management (NG240), 2024.</li>
<li id="ref-5">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (hospital-based), 2024 — §11 differential diagnosis of fever with rash.</li>
<li id="ref-6">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, chapter 16 Dermatology (eczema, seborrhoeic dermatitis, psoriasis, urticaria, fixed drug eruption).</li>
<li id="ref-7">National Institute for Health and Care Excellence. Fever in under 5s (NG143), 2019, updated 2021.</li>
<li id="ref-8">National Institute for Health and Care Excellence. Atopic eczema in under 12s (CG57), 2007, updated 2023.</li>
<li id="ref-9">National Institute for Health and Care Excellence. Psoriasis: assessment and management (CG153), 2012, updated 2017.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Merck lesion description and evaluation", "<span class='pass'>Checked</span>", "Read"],
["NICE NG240, NG143, CG57, CG153", "<span class='pass'>Checked</span>", "Read"],
["Bhutan IMNCI §11, STG ch. 16", "<span class='pass'>Checked</span>", "STG text partly scrambled; readable parts used"],
["DermNet, CKS, UKHSA pregnancy", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Pattern sorter built from the tables on this page"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
