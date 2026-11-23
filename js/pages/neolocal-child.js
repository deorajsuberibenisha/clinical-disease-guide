/* Newborn local infections: umbilicus, skin, eyes, mouth */
registerPage({
id: "neolocal-child",
title: "Newborn Cord, Skin, Eye & Mouth Infections",
subtitle: "Omphalitis, skin pustules, neonatal conjunctivitis and thrush: Bhutan's 2025 IMNCI classification, when a local infection is really serious sepsis, dry cord care, eye prophylaxis at birth, and treating the mother too",
age: "Newborns and young infants", specs: ["neo", "paeds", "derm", "eye", "ph"],
keywords: ["omphalitis", "umbilical infection", "cord care", "chlorhexidine cord", "skin pustules newborn", "neonatal pustules", "staphylococcal skin infection newborn", "bullous impetigo", "staphylococcal scalded skin", "ophthalmia neonatorum", "neonatal conjunctivitis", "gonococcal conjunctivitis", "chlamydial conjunctivitis", "tetracycline eye ointment", "oral thrush", "nystatin", "local bacterial infection IMNCI", "umbilical granuloma"],
related: ["neosepsis-child", "neotherm-child", "redeye-child", "sti-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A few pustules, a moist red cord or sticky eyes are common in the first weeks of life. Most are minor and respond to simple treatment, but each can also be the first sign of life-threatening sepsis — or, in the eyes, of gonorrhoea that can blind a baby within days. The task is to sort mild from serious using clear rules, treat early, and remember the mother.</p>
<div class="glance">
<div><h4>Serious (PSBI) — refer</h4><p>More than 10 pustules, cord redness spreading onto the abdomen, or any danger sign: first-dose ampicillin + gentamicin.</p></div>
<div><h4>Local bacterial infection</h4><p>Red or pus-draining cord, 10 or fewer pustules, ear discharge: ${dr("amoxicillin")} 25 mg/kg twice daily × 5 days + ${dr("nitrofurazone")}.</p></div>
<div><h4>Neonatal conjunctivitis</h4><p>Pus from the eyes in the first 28 days: ${dr("ceftriaxone")} IM once + ${dr("azithromycin")} × 3 days; treat the parents.</p></div>
<div><h4>Thrush</h4><p>${dr("nystatin")} paste 6-hourly after feeds × 7 days; treat the mother's nipples.</p></div>
<div><h4>Prevent</h4><p>Clean birth, handwashing, nothing on the cord, ${dr("tetracycline")} 1% eye ointment at birth.</p></div>
<div><h4>Follow up</h4><p>In 2 days. Worse or no better: refer for IV antibiotics.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The IMNCI PHC Chart Booklet (2025) classifies a red or pus-draining umbilicus, 10 or fewer skin pustules, or ear discharge as <b>local bacterial infection</b> (oral amoxicillin, NFT ointment, review in 2 days), and more than 10 pustules or umbilical redness extending to the skin as <b>possible serious bacterial infection</b>. Purulent eye discharge in the first 28 days is <b>neonatal conjunctivitis</b>, treated with a single IM ceftriaxone dose plus 3 days of azithromycin. The Hospital IMNCI manual (2024) recommends dry cord care — nothing applied to the stump — and 1% tetracycline eye ointment at birth. STG §15.1 gives ceftriaxone 25–50 mg/kg IM (maximum 125 mg) for gonococcal ophthalmia. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
${tbl(["Infection", "Usual organisms", "Risk factors"], [
["<b>Omphalitis</b> (cord infection)", "<i>Staphylococcus aureus</i>, group A streptococcus, <i>E. coli</i>, <i>Klebsiella</i>; anaerobes in severe cases", "Home birth, unclean cord cutting, substances applied to the cord (dung, ash, oil), prolonged labour, low birth weight"],
["Skin pustules, bullous impetigo", "<i>S. aureus</i> (including MRSA), streptococci", "Crowding, poor hand hygiene, hospital stay"],
["Staphylococcal scalded skin syndrome", "Toxin-producing <i>S. aureus</i>", "Fever, tender red skin, peeling"],
["<b>Neonatal conjunctivitis</b>", "Gonococcus (days 2–5), chlamydia (days 5–14), staphylococci, other bacteria; HSV; chemical (first 24 h after prophylaxis)", "Untreated maternal gonorrhoea or chlamydia; no eye prophylaxis"],
["Oral thrush", "<i>Candida albicans</i>", "Bottle feeding, antibiotics, preterm"],
["Candida nappy dermatitis", "<i>Candida</i>", "Wet nappies, antibiotics; satellite lesions"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From a local infection to sepsis", [
F.s("Cord stump and skin colonised by bacteria from hands, birth canal or substances applied"), F.a,
F.s("Local infection: red, moist cord; pustules; sticky eyes"), F.a,
F.d("Treated early?"), F.a,
F.b([["Yes", F.ok("Heals in days")], ["No", F.e("Spreading cellulitis of the abdominal wall, necrotising fasciitis, portal vein thrombosis, liver abscess, sepsis, meningitis")]]), F.a,
F.e("Gonococcal conjunctivitis: corneal ulcer and perforation within days — blindness")])}
<p>The umbilical vessels lead straight to the portal and systemic circulations, so a cord infection can become sepsis quickly. Neisseria gonorrhoeae can penetrate an intact cornea, which is why gonococcal ophthalmia is an emergency.${r(1, 3)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan", "International", "This guide and why"], [
["Cord care", "Dry cord care: nothing on the stump (Hospital IMNCI 2024)", "WHO 2013/2022: dry cord care in facilities; 7.1% chlorhexidine digluconate to the stump for home births in high neonatal-mortality settings", "Dry cord care; chlorhexidine is not on NEML 2025 " + LB.loc()],
["Neonatal conjunctivitis", "IMNCI 2025: ceftriaxone + azithromycin for all purulent discharge; STG: ceftriaxone, maximum 125 mg", "CDC 2021: ceftriaxone 25–50 mg/kg (maximum 250 mg) for gonococcal; azithromycin 20 mg/kg × 3 days or erythromycin × 14 days for chlamydial", "IMNCI dual therapy where cause unknown"],
["Topical skin antibiotic", "NFT (nitrofurazone) ointment", "Mupirocin or fusidic acid; gentian violet in older IMCI versions", "NFT (on NEML to PHC); mupirocin where stocked"],
["Eye prophylaxis", "1% tetracycline ointment at birth", "WHO: tetracycline 1%, erythromycin 0.5% or povidone-iodine 2.5% within 1 hour", "Tetracycline (on NEML to PHC)"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Finding", "Meaning", "Classification (IMNCI 2025)"], [
["Moist, smelly cord without redness", "Poor cord hygiene", "Cord care advice"],
["Redness and pus limited to the cord stump", "Local omphalitis", "Local bacterial infection"],
["Redness, swelling, hardness spreading onto the abdominal wall", "Spreading omphalitis / cellulitis", "<b>Possible serious bacterial infection</b>"],
["10 or fewer small pustules", "Local skin infection", "Local bacterial infection"],
["More than 10 pustules, large blisters, peeling red skin", "Severe skin infection, SSSS", "<b>Possible serious bacterial infection</b>"],
["Purulent discharge, swollen lids, days 2–5", "Probably gonococcal", "Neonatal conjunctivitis — urgent"],
["Watery then purulent discharge, days 5–14", "Probably chlamydial (may be followed by pneumonia at 4–12 weeks)", "Neonatal conjunctivitis"],
["White plaques on tongue and cheeks that do not wipe off easily", "Thrush", "Local treatment"],
["Moist pink nodule at the base of a healed cord", "Umbilical granuloma", "Not infection: salt or silver nitrate"]])}
${box("red", "Danger signs — refer urgently", `<ul><li>Not feeding, lethargy, convulsions, fast breathing, chest indrawing, grunting</li><li>Temperature 37.5 °C or above or below 35.5 °C</li><li>Cord redness extending onto the abdomen, abdominal wall swelling or discoloration</li><li>More than 10 pustules, blisters, peeling skin</li><li>Corneal clouding or ulcer</li></ul>`)}
<h3>The typical patient</h3>
<p>A 6-day-old boy from Dagana is brought because his cord stump smells and has a little pus. His grandmother applied mustard oil to it. He feeds well, temperature 37.0 °C, and there is redness only at the base of the stump; no other pustules. Weight 3.0 kg. <b>This is a local bacterial infection (omphalitis limited to the stump).</b> He needs amoxicillin 75 mg (25 mg/kg) twice daily for 5 days, the cord cleaned with soap and water and dried, NFT ointment three times daily, advice not to apply anything else, and review in 2 days — sooner if redness spreads or he stops feeding.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Action"], [
["Erythema toxicum", "Small yellow-white papules on red bases, appear and fade, baby well (eosinophils)", "Reassure"],
["Milia, miliaria", "Tiny white or clear dots; heat", "Reassure; avoid overheating"],
["Transient neonatal pustular melanosis", "Pustules at birth leaving dark spots", "Reassure"],
["Neonatal herpes simplex", "Vesicles in clusters, eye or mouth lesions, ill baby", "Aciclovir; urgent referral"],
["Congenital syphilis", "Peeling palms and soles, snuffles", "VDRL/RPR; penicillin"],
["Blocked tear duct (nasolacrimal obstruction)", "Watery or sticky eye, white conjunctiva, weeks", "Massage; not urgent"],
["Chemical conjunctivitis", "First 24 hours after prophylaxis", "Self-limiting"],
["Umbilical granuloma, patent urachus, umbilical hernia", "Moist nodule; urine leak; reducible swelling", "Local treatment or surgical review"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Gram stain and culture of eye discharge", "Gonococcus (gram-negative intracellular diplococci)", "Before ceftriaxone if possible; never delay treatment", "Neonatal conjunctivitis"],
["Chlamydia NAAT", "Chlamydial conjunctivitis", "Where available", "Selected"],
["Pus swab culture", "Organism and sensitivity (MRSA)", "Severe or non-responding skin/cord infection", "Selected"],
["Sepsis screen (CBC, CRP, blood culture), glucose", "Systemic spread", "PSBI or ill baby", "If serious"],
["Maternal tests: syphilis, gonorrhoea, chlamydia, HIV", "Source; treat mother and partner", "—", "Neonatal conjunctivitis"]])}
` },

{ id: "staging", title: "Classify and treat (Bhutan IMNCI 2025)", html: `
<p>Tick the findings and enter the weight for the classification and doses.${r(2)}</p>
<div class="calc" data-calc="neolocal"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Local bacterial infection (cord, 10 or fewer pustules, ear discharge)</h3>
<ul><li>${dr("amoxicillin")} 25 mg/kg twice daily for 5 days (syrup 125 mg/5 mL: 2.5 mL for 2–3 kg, 3.5 mL for 3–4 kg, 5 mL for 4–5 kg); second line ${dr("cotrimoxazole")} 4 mg TMP/kg twice daily.</li>
<li>Caregiver: wash hands, gently wash off pus and crusts with soap and water, dry, apply ${dr("nitrofurazone")} (NFT) three times daily, wash hands again.</li>
<li>Keep the cord dry and exposed; fold the nappy below it; nothing applied to the stump.</li>
<li>Follow up in 2 days: worse → treat as serious infection.${r(2)}</li></ul>
<h3>B. Serious infection (PSBI)</h3>
<ul><li>First dose of IM ${dr("ampicillin")} 50 mg/kg + ${dr("gentamicin")}, prevent hypoglycaemia, keep warm, refer. In hospital: ${dr("cloxacillin")} 50 mg/kg (12-hourly in the first week, then 8-hourly) with gentamicin 4 mg/kg once daily for 7–10 days when pustules or omphalitis suggest staphylococci (Bhutan hospital IMNCI chart); add metronidazole for necrotising omphalitis; surgical review for fasciitis.${r(4)}</li></ul>
<h3>C. Neonatal conjunctivitis</h3>
<ul><li>${dr("ceftriaxone")} 25–50 mg/kg IM once (STG maximum 125 mg; avoid if jaundiced or preterm — cefotaxime 100 mg/kg IM/IV once instead) <b>plus</b> ${dr("azithromycin")} 20 mg/kg once daily for 3 days (covers chlamydia).</li>
<li>Irrigate the eyes with saline frequently (hourly for gonococcal) until discharge stops; caregiver cleans at least 4 times a day.</li>
<li>Gonococcal: admit, check for disseminated infection; refer urgently if the cornea is cloudy.</li>
<li><b>Treat the mother and her partner</b> for gonorrhoea and chlamydia; test for syphilis and HIV.${r(3, 5)}</li></ul>
<h3>D. Thrush and candida nappy rash</h3>
<ul><li>${dr("nystatin")} paste (4 × 500,000 IU tablets crushed in 10 mL glycerin) 6-hourly after feeds for 7 days; treat the mother's nipples; cup instead of bottle. Nappy candida: topical antifungal, frequent changes, air exposure.</li></ul>
<h3>E. Prevention</h3>
<ul><li>Clean birth and cord cutting; handwashing by everyone who touches the baby; dry cord care; exclusive breastfeeding.${r(1, 4, 6)}</li>
<li>Eye prophylaxis: clean each eye with a separate saline swab, then ${dr("tetracycline")} 1% eye ointment to both eyes within the first hour.</li>
<li>Antenatal syphilis, gonorrhoea and chlamydia screening and treatment.</li></ul>
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "IMNCI classification; amoxicillin, NFT, nystatin; ceftriaxone IM (250 mg vials) for conjunctivitis; refer PSBI with first doses"],
["District hospital", "Swabs, sepsis screen, IV antibiotics (cloxacillin + gentamicin)"],
["Referral hospital", "NICU, ophthalmology for corneal involvement, surgery for necrotising omphalitis"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("amoxicillin"), "25 mg/kg twice daily × 5 days", "Local bacterial infection"],
[dr("cotrimoxazole"), "4 mg TMP/kg twice daily × 5 days", "Second line (avoid in jaundiced newborns)"],
[dr("nitrofurazone"), "Thin layer three times daily", "Pustules, cord"],
[dr("ceftriaxone"), "25–50 mg/kg IM once (max 125 mg STG)", "Conjunctivitis"],
[dr("azithromycin"), "20 mg/kg once daily × 3 days", "Chlamydia cover; oral not on NEML"],
[dr("cloxacillin"), "50 mg/kg IV 12-hourly (week 1), 8-hourly after", "Staphylococcal infection"],
[dr("gentamicin"), "4 mg/kg once daily (hospital chart)", "With cloxacillin or ampicillin"],
[dr("nystatin"), "Paste 6-hourly × 7 days", "Thrush"],
[dr("tetracycline"), "1% eye ointment once at birth", "Prophylaxis"]])}
` },

{ id: "populations", title: "Preterm babies and special groups", html: `
<ul><li><b>Preterm and low-birth-weight babies:</b> lower threshold for IV antibiotics; skin is fragile.</li>
<li><b>Babies born at home</b> or with substances applied to the cord: check for omphalitis and tetanus risk (maternal tetanus immunisation).</li>
<li><b>Mother with untreated STI:</b> treat the baby prophylactically and examine carefully.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Jaundiced newborn needing ceftriaxone", "Use cefotaxime", "Ceftriaxone displaces bilirubin"],
["Recurrent skin abscesses", "Culture for MRSA; check family", "Carriage"],
["Delayed cord separation (over 3 weeks) with infections", "Consider leucocyte adhesion defect", "Immunodeficiency"],
["Persistent wet umbilicus with urine", "Patent urachus: surgical review", "—"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Sepsis, meningitis", "Danger signs", "IV antibiotics"],
["Necrotising fasciitis of the abdominal wall", "Rapid spread, discoloured skin, toxic", "Surgery, broad antibiotics"],
["Portal vein thrombosis, liver abscess", "Late; splenomegaly, varices", "Specialist"],
["Corneal ulcer, blindness", "Clouding, perforation", "Urgent ophthalmology"],
["Chlamydial pneumonia", "Staccato cough at 4–12 weeks", "Azithromycin"]])}
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
${box("green", "What to tell the family", `<ul><li>Wash your hands before touching the baby or the cord.</li><li>Keep the cord clean and dry; do not put oil, ash, dung, powder or anything else on it.</li><li>Give the medicine twice a day for 5 days; clean and apply the ointment three times a day.</li><li>Come back in 2 days, or at once if the redness spreads, the baby stops feeding or has fever.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Redness spreading around the navel, swelling of the belly</li><li>Many spots or blisters, peeling skin</li><li>Eye swelling with lots of pus, or the baby will not open the eyes</li><li>Not feeding, fever, cold, very sleepy, fast breathing</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Gonococcal ophthalmia neonatorum", src: "images/gonococcal-ophthalmia.jpg", mod: "Clinical photograph", ctx: "Newborn of a mother with untreated gonorrhoea", loc: "Eyes", find: "Swollen eyelids with copious pus", signs: "Hyperacute purulent conjunctivitis", interp: "Emergency: IM ceftriaxone, frequent saline irrigation, treat the parents; risk of corneal perforation", by: "CDC / J. Pledger", page: "https://commons.wikimedia.org/wiki/File:Gonococcal_ophthalmia_neonatorum.jpg", lic: "Public domain" })}
${fig({ title: "Healthy umbilicus at 7 days", src: "images/cord-normal.jpg", mod: "Clinical photograph", ctx: "7-day-old girl", loc: "Umbilicus", find: "Drying stump without surrounding redness", signs: "Normal cord healing", interp: "Compare with omphalitis: any redness of surrounding skin, swelling or pus is infection", by: "Stagiryta", page: "https://commons.wikimedia.org/wiki/File:P%C4%99pek.jpg", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Omphalitis (schematic)", src: "images/omphalitis-schematic.svg", mod: "Schematic illustration", ctx: "Teaching diagram", loc: "Umbilicus", find: "Redness and swelling around the cord stump", signs: "Omphalitis", interp: "Redness spreading onto the abdominal wall = possible serious bacterial infection", by: "Hariadhi", page: "https://commons.wikimedia.org/wiki/File:Omphalitis_by_hariadhi.svg", lic: "CC BY-SA 4.0", note: "Schematic, not a patient image." })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Young infant with cord, skin or eye problem", [
F.s("Check danger signs, temperature, feeding, extent of redness and number of pustules"), F.a,
F.d("Danger sign, >10 pustules, or spreading cord redness?"), F.a,
F.b([["Yes", F.e("PSBI: first-dose ampicillin + gentamicin, refer")], ["No", F.d("Which problem?")]]), F.a,
F.b([["Cord/pustules/ear", F.s("Amoxicillin 5 days + NFT; review day 2")], ["Pus from eyes", F.s("Ceftriaxone IM + azithromycin 3 days; treat parents")]]), F.a,
F.ok("Thrush: nystatin 7 days; treat mother's nipples")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Count the pustules and look beyond the cord.</b></li>
<li>Pus from a newborn's eyes in the first week is gonorrhoea until proven otherwise.</li>
<li>Treat the mother and partner, or the baby will be reinfected and the mother harmed.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating spreading omphalitis as local", "Sepsis, fasciitis", "Check abdominal wall"],
["Topical eye drops only for neonatal conjunctivitis", "Gonococcal and chlamydial infection need systemic treatment", "Ceftriaxone + azithromycin"],
["Ceftriaxone in a jaundiced newborn", "Kernicterus risk", "Cefotaxime"],
["Applying substances to the cord", "Infection, tetanus", "Dry cord care"],
["Missing the mother's STI", "Maternal complications, reinfection", "Test and treat parents"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is dry cord care?", "Keeping the stump clean, dry and uncovered with nothing applied to it.")}
${qa("Intern/MO", "How does IMNCI 2025 distinguish local from serious skin infection?", "Ten or fewer pustules = local bacterial infection; more than 10 pustules or umbilical redness spreading to the skin = possible serious bacterial infection.")}
${qa("Intern/MO", "What is the Bhutan treatment for neonatal conjunctivitis?", "Ceftriaxone 25–50 mg/kg IM once plus azithromycin 20 mg/kg daily for 3 days, eye cleaning, follow-up in 2 days, and treatment of the parents.")}
${qa("Intern/MO", "How is thrush treated?", "Nystatin paste 6-hourly after feeds for 7 days, and the mother's nipples if affected.")}
${qa("Specialist", "When does chlamydial conjunctivitis present, and what late complication follows?", "Usually days 5–14; afebrile pneumonia with staccato cough at 4–12 weeks.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Hospital-based IMNCI, 3rd edition, 2024 (§4.6 cord and eye care; §5.3 examination; chart booklet antibiotic tables).</li>
<li id="ref-2">Ministry of Health, Bhutan. IMNCI PHC Chart Booklet 2025 (pp. 37, 45, 51).</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §15.1 Ophthalmia neonatorum; NEML 2025.</li>
<li id="ref-4">World Health Organization. WHO recommendations on postnatal care of the mother and newborn. Geneva: WHO; 2013 (cord care with chlorhexidine). <a href="https://www.who.int/publications/i/item/9789241506649" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-5">Workowski KA, Bachmann LH, Chan PA et al. Sexually transmitted infections treatment guidelines, 2021. <i>MMWR Recomm Rep</i> 2021;70(4):1–187. <a href="https://doi.org/10.15585/mmwr.rr7004a1" target="_blank" rel="noopener">doi:10.15585/mmwr.rr7004a1</a></li>
<li id="ref-6">Imdad A, Bautista RMM, Senen KAA et al. Umbilical cord antiseptics for preventing sepsis and death among newborns. <i>Cochrane Database Syst Rev</i> 2015;(3):CD008635. <a href="https://doi.org/10.1002/14651858.CD008635.pub2" target="_blank" rel="noopener">doi:10.1002/14651858.CD008635.pub2</a></li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024/2025 and STG §15.1", "<span class='pass'>Verified</span>", "Read directly from PDFs and STG text"],
["Oral azithromycin on NEML", "<span class='flag'>Gap</span>", "Chart booklet uses tablets; NEML lists IV only"],
["Chlorhexidine for cord", "<span class='flag'>Not on NEML</span>", "Dry cord care used"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY-SA 4.0"]], "qc")}
` }
]
});
