/* Stevens–Johnson syndrome and toxic epidermal necrolysis in adults — full depth (Batch E-2, 26 Nov 2026).
   Sources read directly: Bhutan STG 2024 §16.3.2 (definition, SATAN drugs, onset within 8 weeks, prodrome 1–3 days, classification by detachment,
   supportive care, refer early) and the Bhutan Clinical Reference topic "Severe drug reactions"; Heuer et al., JDDG 2025 systematic review and
   meta-analysis of systemic immunomodulating therapies; Schneider & Cohen, Adv Ther 2017 (SCORTEN factors and mortality table); Kumar & Das,
   Indian J Dermatol 2018 (supportive care in India; ciclosporin regimen). The UK BAD 2016 adult guideline (Creamer et al.) is cited for context;
   its full text was behind a bot check and was not read. Bhutan NEML 2025. */
registerPage({
id: "sjs-adult",
title: "Stevens–Johnson Syndrome & Toxic Epidermal Necrolysis — Adults",
subtitle: "A burn-like drug reaction of skin and mucous membranes. Stop the culprit drug at once, score the severity, move the patient to a unit that can nurse a burn, protect the eyes, mouth and genitals, and keep immunomodulating drugs for specialist decisions, because supportive care is what saves lives",
age: "Adults", specs: ["derm", "emerg", "medicine"],
keywords: ["Stevens-Johnson syndrome", "SJS", "toxic epidermal necrolysis", "TEN", "Lyell syndrome", "epidermal necrolysis", "severe cutaneous adverse reaction", "SCAR", "SCORTEN", "Nikolsky sign", "drug reaction", "carbamazepine", "allopurinol", "nevirapine", "co-trimoxazole", "lamotrigine", "phenytoin", "HLA-B*15:02", "ciclosporin SJS", "IVIG SJS", "fixed drug eruption", "DRESS"],
related: ["sjs-child", "burns-adult", "anaphylaxis-adult", "hiv-adult", "gout-adult", "epilepsy-adult", "redeye-adult", "sepsis-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">SJS and TEN are the same disease at different extents: the epidermis dies and peels off, and the mouth, eyes and genitals ulcerate. It is almost always caused by a drug started in the previous 8 weeks. Mortality rises with the area of skin lost and with age. Early withdrawal of the culprit drug and expert supportive care are the only treatments shown to improve outcome.</p>
<div class="glance">
<div><h4>Suspect</h4><p>New drug within 8 weeks; fever, sore eyes, painful swallowing, then <b>painful</b> dusky spots that blister, with <b>two or more mucosal sites</b>.</p></div>
<div><h4>Stop the drug</h4><p>Every suspect drug, today. Record the name, dose and start date.</p></div>
<div><h4>Measure</h4><p>% of body surface detached: <b>SJS &lt; 10%</b>, overlap 10–30%, <b>TEN &gt; 30%</b>. Calculate <b>SCORTEN</b>.</p></div>
<div><h4>Move</h4><p>Refer early (STG) to an ICU, burns or dermatology unit; warm room, barrier nursing.</p></div>
<div><h4>Protect</h4><p>Eyes daily by ophthalmology; mouth and genital care; non-adherent dressings; pain relief; fluids; nutrition.</p></div>
<div><h4>Specialist drugs</h4><p>${dr("ciclosporin", "Ciclosporin")} or etanercept may be considered; no therapy has clearly beaten supportive care.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §16.3.2 lists the common culprits with the mnemonic <b>SATAN</b>: Sulfonamides and sulfasalazine, Allopurinol, Tetracyclines and thioacetazone, Antiepileptics, NSAIDs and nevirapine. Supportive care: clean the eyes with saline and consult ophthalmology; mouthwash and mupirocin around the mouth; clean the genital area with mupirocin or neomycin ointment; gentle handling; Vaseline gauze for erosions; analgesia; <b>refer to a higher centre as soon as SJS/TEN is suspected</b>. In Bhutan, carbamazepine, phenytoin, allopurinol, co-trimoxazole (including HIV prophylaxis), nevirapine and NSAIDs are the usual suspects. Mupirocin, white soft paraffin, ciclosporin and human immunoglobulin are on the NEML 2025. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions and spectrum", html: `
${tbl(["Category", "Skin detachment (% BSA)", "Notes"], [
["<b>Stevens–Johnson syndrome</b>", "Under 10%", "Mucosal involvement usually severe"],
["<b>SJS/TEN overlap</b>", "10–30%", ""],
["<b>Toxic epidermal necrolysis</b>", "Over 30%", "Highest mortality"]])}
<p>This classification is used by the STG and by international consensus (Bastuji-Garin 1993). The incidence in Germany is about 0.9 cases per million people per year (Heuer 2025). Rare, but every hospital will see it.${r(1)}</p>
${tbl(["Mimic or relative", "How it differs"], [
["Erythema multiforme major", "Typical raised targets on the limbs, often after herpes simplex; little skin detachment"],
["DRESS (drug reaction with eosinophilia and systemic symptoms)", "Later onset (2–8 weeks), facial swelling, eosinophilia, liver and kidney involvement; skin rarely detaches"],
["Fixed drug eruption (generalised bullous)", "Recurs at the same sites with each exposure; patients usually less ill"],
["Staphylococcal scalded skin syndrome", "Mostly young children; superficial split; no mucosal ulcers"],
["Acute generalised exanthematous pustulosis", "Many small pustules on red skin, within days of the drug"]])}
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Epidermal necrolysis", [F.s("Drug (or its metabolite) presented by certain HLA types"), F.a, F.s("Cytotoxic T cells and NK cells release granulysin, Fas ligand, perforin"), F.a, F.e("Widespread keratinocyte death; epidermis separates from dermis"), F.a, F.b([["Skin", F.e("Like a partial-thickness burn: fluid, heat and protein loss, infection")], ["Mucosa", F.e("Eyes, mouth, genitals, airways and gut ulcerate")]]), F.a, F.ok("Re-epithelialisation over 2–3 weeks if the patient survives")])}
<p>Genetic risk is strong in South and East Asians. For carbamazepine, the US label advises testing for <b>HLA-B*15:02</b> in patients of Asian ancestry before starting it; allopurinol reactions are linked to HLA-B*58:01. This matters in Bhutan, where carbamazepine and allopurinol are common prescriptions.</p>
` },

{ id: "conflicts", title: "Where evidence and guidance differ", html: `
${tbl(["Point", "Options", "Evidence", "This guide"], [
["Systemic corticosteroids", "Used widely in India and Asia; avoided by some centres", "No clear mortality benefit; possible infection risk", "Not routine; specialist decision early in the course"],
["Ciclosporin", "3 mg/kg/day for 10 days, then taper (open trial)", "2025 meta-analysis: lower mortality than IVIG (RR 0.18), but no clear superiority over supportive care", "Consider in a specialist unit"],
["IVIG", "Previously popular", "Not superior to supportive care; inferior to ciclosporin in the meta-analysis", "Not first line"],
["Etanercept", "TNF-α inhibitor", "Only agent with a mortality benefit against supportive care in the meta-analysis (RR 0.32), with imprecision", "Specialist option where available"],
["Ambient temperature", "Indian review: 31–32 °C", "Large-surface heat loss as in burns", "Keep the room warm; avoid chilling during dressings"]])}
<p>The 2025 systematic review of 43 studies concluded that <b>supportive care remains the primary treatment</b>.${r(1)}</p>
` },

{ id: "presentation", title: "Clinical features", html: `
${tbl(["Phase", "Features"], [
["Prodrome (1–3 days before the rash, STG)", "Fever, stinging eyes, sore throat, painful swallowing, myalgia, malaise"],
["Skin", "Painful (not itchy) dusky red or purpuric macules and atypical flat targets starting on the trunk, spreading to face and limbs; blisters; sheets of wrinkled skin that slide off with gentle pressure (Nikolsky sign); raw red erosions"],
["Mucosa (two or more sites)", "Haemorrhagic lip crusts, mouth ulcers, conjunctivitis with discharge and pseudomembranes, genital erosions; sometimes airways and gut"],
["Systemic", "High fever, tachycardia, dehydration, low albumin, high glucose, kidney injury, liver enzyme rise"]])}
<h3>A typical patient</h3>
<p>A 46-year-old man started carbamazepine 3 weeks ago for trigeminal neuralgia. He has had 2 days of fever and sore eyes and now has painful dusky patches on his chest that blister and peel when touched, crusted lips, mouth ulcers and red eyes. About 20% of his skin is detached. Heart rate 124, urea 12 mmol/L, glucose 9 mmol/L, bicarbonate 21. <b>SCORTEN 4</b> (age, heart rate, detachment over 10%, urea), predicted mortality about 58%. <b>Action</b>: stop carbamazepine and any other new drug; record it as a serious allergy; IV access through intact skin; warm room; daily ophthalmology; mouthwash and mupirocin around the lips; Vaseline gauze to erosions; analgesia; fluids by urine output; refer the same day to the ICU at the referral hospital.</p>
` },

{ id: "ddx", title: "Which drug?", html: `
${tbl(["High-risk drugs (STG SATAN and international lists)", "Notes"], [
["Sulfonamides: co-trimoxazole, sulfasalazine", "Common in people with HIV on co-trimoxazole"],
["Allopurinol", "Higher risk at high starting doses and in kidney disease"],
["Antiepileptics: carbamazepine, phenytoin, phenobarbital, lamotrigine", "Lamotrigine risk higher with fast titration or with valproate"],
["Nevirapine", "Early weeks of HIV treatment"],
["NSAIDs (oxicams), tetracyclines, thioacetazone", ""],
["Others reported: penicillins and cephalosporins, fluoroquinolones, antiretrovirals, anti-tuberculosis drugs", ""]])}
<p>Think about every drug started in the last 8 weeks, including traditional and over-the-counter medicines. A drug started more than 8 weeks earlier, or one taken safely for months, is less likely to be the cause. Specialist units use structured causality assessment (for example the ALDEN algorithm) to decide which drugs are safe to restart.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["Full blood count, urea and creatinine, electrolytes, glucose, bicarbonate, liver tests, albumin, CRP", "SCORTEN, fluid and organ assessment"],
["Blood gas, lactate", "Bicarbonate for SCORTEN; shock"],
["Skin biopsy (edge of a blister)", "Full-thickness epidermal necrosis confirms the diagnosis and excludes mimics"],
["Swabs of skin, eyes and mucosa; blood cultures if febrile", "Sepsis is the main cause of death"],
["Chest X-ray, oxygen saturation", "Airway and lung involvement"],
["HIV test where appropriate; Mycoplasma serology if infection is suspected", "Cause and drug choices"]])}
<div class="calc" data-calc="scorten"></div>
` },

{ id: "staging", title: "Estimating detached skin", html: `
<p>Count only skin that is detached or detachable (blisters, erosions, positive Nikolsky sign), not red skin that is still attached. Use the rule of nines or the patient's palm (about 1% of body surface) as in burns. Record the % daily: it often extends for a few days after the drug is stopped.</p>
` },

{ id: "manage", title: "Management", html: `
<ol>
<li><b>Stop all suspect drugs</b> immediately; avoid starting new drugs from the same classes.</li>
<li><b>Refer early</b> (STG) to an ICU, burns or dermatology unit that can nurse extensive skin loss.</li>
<li><b>Environment</b>: single warm room (the Indian review uses 31–32 °C), barrier nursing, pressure-relieving mattress, minimal shearing when moving the patient.</li>
<li><b>Skin</b>: leave detached epidermis in place as a natural dressing; drain large blisters by piercing; cover erosions with non-adherent dressings (Vaseline gauze, STG); mupirocin or neomycin to the genital and perioral areas (STG); avoid adhesive tape.</li>
<li><b>Eyes</b>: daily ophthalmology review (STG); saline cleaning, lubricants, topical antibiotic and steroid drops as advised; amniotic membrane in specialist centres to prevent scarring and blindness.</li>
<li><b>Mouth</b>: mouthwashes, white soft paraffin to the lips, analgesic gels; soft or liquid diet; NG tube if needed.</li>
<li><b>Genitals</b>: daily cleaning, emollient, non-adherent dressings; urinary catheter in women and men with severe involvement to prevent strictures and adhesions.</li>
<li><b>Fluids</b>: oral or IV by urine output (the Indian review targets 50–80 mL/h); do not use burn formulas blindly — fluid needs are often less than in burns of the same size (expert opinion).</li>
<li><b>Nutrition</b>: early enteral feeding.</li>
<li><b>Pain</b>: regular analgesia and extra cover for dressings.</li>
<li><b>Infection</b>: no routine prophylactic antibiotics; culture and treat when sepsis is suspected.</li>
<li><b>VTE prophylaxis</b> and glucose control.</li>
<li><b>Immunomodulation</b>: a specialist decision, ideally early. Ciclosporin 3 mg/kg/day for 10 days then tapered over a month is the most commonly reported regimen; etanercept where available.</li>
</ol>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML 2025)", "Use", "Notes"], [
[dr("ciclosporin", "Ciclosporin"), "Specialist immunomodulation", "3 mg/kg/day for 10 days, then taper (Kumar & Das 2018); kidney and BP monitoring"],
[dr("ivig", "Human immunoglobulin"), "Not first line", "Inferior to ciclosporin in the 2025 meta-analysis"],
[dr("mupirocin", "Mupirocin 2%"), "Perioral and genital erosions (STG)", "Listed"],
["White soft paraffin", "Lips, skin emollient, Vaseline gauze", "Listed"],
["Morphine and paracetamol", "Pain, especially for dressings", "Avoid NSAIDs (a culprit class)"],
["Ophthalmic lubricants, antibiotic and steroid drops", "Eye protection", "As advised by ophthalmology"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>People with HIV</b>", "Much higher risk (co-trimoxazole, nevirapine); careful choice of replacement drugs with the HIV team"],
["<b>Older adults</b>", "Higher mortality (age is a SCORTEN factor); kidney injury; allopurinol dose by kidney function"],
["<b>Pregnancy</b>", "Treat as above; fetal monitoring; obstetric involvement"],
["<b>Epilepsy patients</b>", "Choose an antiepileptic from a different class; avoid aromatic antiepileptics (carbamazepine, phenytoin, phenobarbital, lamotrigine) if one caused SJS/TEN; levetiracetam or valproate are often used"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Patient on several new drugs", "Stop all non-essential drugs; replace essential ones with unrelated classes", "Culprit uncertain"],
["Seizures after stopping carbamazepine", "Levetiracetam or valproate (unrelated structure)", "Avoid cross-reacting aromatic antiepileptics"],
["Long road transfer needed", "Dress erosions, warm the patient, IV access through intact skin, analgesia, document drugs", "Hypothermia and pain during transport"],
["Family asks about future medicines", "Give a written list of the culprit and related drugs; record in the health book", "Re-exposure can be fatal"]])}
` },

{ id: "complications", title: "Complications and long-term effects", html: `
<p><b>Acute:</b> sepsis (the main cause of death), dehydration and kidney injury, pneumonia and respiratory failure, gut bleeding, hypothermia. <b>Long term:</b> eye damage (dry eye, scarring, eyelid problems, blindness), skin colour changes and nail loss, oral and dental problems, genital adhesions and strictures, lung damage, and psychological distress. SCORTEN predicts mortality: about 3% (0–1 factors), 12% (2), 35% (3), 58% (4) and 90% (5 or more).${r(2)}</p>
` },

{ id: "followup", title: "Follow-up", html: `
${box("red", "Never again", `<ul><li>Write the drug (and related drugs) as a severe allergy in the health book, hospital record and prescription system.</li><li>Give the patient a written card.</li><li>First-degree relatives may share HLA risk; tell them about the reaction.</li></ul>`)}
${box("green", "Follow-up care", `<ul><li>Ophthalmology follow-up for months to years.</li><li>Dermatology, dental and gynaecology or urology review as needed.</li><li>Psychological support.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Toxic epidermal necrolysis", src: "images/ten-skin.jpg", mod: "Photograph", ctx: "TEN", loc: "Trunk", find: "Large areas of epidermal detachment with exposed red dermis", interp: "Burn-like skin loss: measure % detached and score SCORTEN", by: "Madhero88", page: "https://commons.wikimedia.org/wiki/File:Toxic-epidermal-necrolysis.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Mucosal desquamation in SJS", src: "images/sjs-mucosa.jpg", mod: "Photograph", ctx: "Stevens–Johnson syndrome", loc: "Lips and mouth", find: "Haemorrhagic crusting and peeling of the lips", interp: "Mucosal involvement at two or more sites is typical", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Mucosal_desquamation_in_a_person_with_Stevens%E2%80%93Johnson_syndrome.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Conjunctivitis in SJS", src: "images/sjs-conjunctivitis.jpg", mod: "Photograph", ctx: "Ocular involvement", loc: "Eye", find: "Red, inflamed conjunctiva", interp: "Daily ophthalmology review to prevent scarring and blindness", by: "Jonathan Trobe, MD, University of Michigan Kellogg Eye Center", page: "https://commons.wikimedia.org/wiki/File:Stevens-Johnson_Syndrome_Conjunctivitis.jpg", lic: "CC BY 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Suspected SJS/TEN", [F.s("New drug within 8 weeks + fever + painful dusky rash + 2 mucosal sites"), F.a, F.e("Stop all suspect drugs now"), F.a, F.e("Estimate % detachment; SCORTEN; bloods; biopsy"), F.a, F.e("Refer: ICU, burns or dermatology unit"), F.a, F.e("Warm room, barrier nursing, eyes daily, mouth and genital care, dressings, fluids, feeding, analgesia"), F.a, F.d("Specialist immunomodulation?"), F.a, F.b([["Consider", F.e("Ciclosporin or etanercept, early")], ["Always", F.ok("Supportive care; record allergy for life")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Continuing the drug while 'watching'", "Mortality rises with delay", "Stop it on suspicion"],
["Calling it chickenpox or measles", "Delay", "Pain, mucosal ulcers and Nikolsky sign point to SJS"],
["Pulling off loose skin", "Larger wounds", "Leave it as a dressing"],
["No eye review", "Blindness", "Ophthalmology daily"],
["Starting phenytoin after carbamazepine SJS", "Cross-reaction", "Levetiracetam or valproate"],
["Routine antibiotics", "Resistance, more drug exposure", "Treat infection when present"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "How are SJS, overlap and TEN distinguished?", "By skin detachment: under 10% SJS, 10–30% overlap, over 30% TEN.")}
${qa("Intern/MO", "Name the SATAN drug groups.", "Sulfonamides and sulfasalazine, Allopurinol, Tetracyclines and thioacetazone, Antiepileptics, NSAIDs and nevirapine.")}
${qa("Intern/MO", "List the seven SCORTEN factors.", "Age 40 or more, malignancy, heart rate over 120, detachment over 10% at day 1, urea over 10 mmol/L, glucose over 14 mmol/L, bicarbonate under 20 mmol/L.")}
${qa("Specialist", "What did the 2025 meta-analysis conclude about systemic therapies?", "No clear superiority over supportive care; ciclosporin was associated with lower mortality than IVIG, and etanercept showed a mortality benefit against supportive care with imprecision.")}
${qa("Specialist", "What genetic test is advised before starting carbamazepine in people of Asian ancestry?", "HLA-B*15:02, strongly associated with carbamazepine-induced SJS/TEN.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Heuer R, Paulmann M, et al. Systemic immunomodulating therapies for epidermal necrolysis (Stevens-Johnson syndrome/toxic epidermal necrolysis): a systematic review and meta-analysis. J Dtsch Dermatol Ges 2025;24:34–42. <a href="https://doi.org/10.1111/ddg.15804" target="_blank" rel="noopener">doi:10.1111/ddg.15804</a></li>
<li id="ref-2">Bastuji-Garin S, Fouchard N, Bertocchi M, et al. SCORTEN: a severity-of-illness score for toxic epidermal necrolysis. J Invest Dermatol 2000;115:149–153. <a href="https://doi.org/10.1046/j.1523-1747.2000.00061.x" target="_blank" rel="noopener">doi:10.1046/j.1523-1747.2000.00061.x</a>; mortality table as given in Schneider JA, Cohen PR. Adv Ther 2017;34:1235–1244. <a href="https://doi.org/10.1007/s12325-017-0530-y" target="_blank" rel="noopener">doi:10.1007/s12325-017-0530-y</a></li>
<li id="ref-3">Kumar R, Das A, et al. Management of Stevens-Johnson syndrome–toxic epidermal necrolysis: looking beyond guidelines! Indian J Dermatol 2018;63:117–124. <a href="https://doi.org/10.4103/ijd.IJD_583_17" target="_blank" rel="noopener">doi:10.4103/ijd.IJD_583_17</a></li>
<li id="ref-4">Creamer D, Walsh SA, et al. U.K. guidelines for the management of Stevens–Johnson syndrome/toxic epidermal necrolysis in adults 2016. Br J Dermatol 2016;174:1194–1227. <a href="https://doi.org/10.1111/bjd.14530" target="_blank" rel="noopener">doi:10.1111/bjd.14530</a> (cited for context; full text not read)</li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.3.2 Stevens–Johnson syndrome/toxic epidermal necrolysis; National Essential Medicines List 2025; Bhutan Clinical Reference topic "Severe drug reactions".</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §16.3.2", "<span class='pass'>Read directly</span>", "SATAN, classification, supportive care, refer early"],
["2025 meta-analysis (Heuer)", "<span class='pass'>Read directly</span>", "Abstract and introduction"],
["SCORTEN factors and mortality", "<span class='pass'>Read in Schneider & Cohen 2017</span>", "Original paper verified on Crossref"],
["UK BAD 2016 guideline", "<span class='flag'>Not read</span>", "Behind a bot check; specific BAD recommendations not quoted"],
["Ambient temperature and urine output targets", "<span class='flag'>Single source</span>", "Indian review (Kumar & Das 2018)"],
["HLA-B*15:02 advice", "<span class='flag'>From the carbamazepine label</span>", "Standard prescribing advice"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "scorten"]], "qc")}` }
]
});
