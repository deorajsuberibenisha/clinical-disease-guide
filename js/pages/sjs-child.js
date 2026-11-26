/* Stevens–Johnson syndrome / toxic epidermal necrolysis in children — full depth (Batch E-2, 26 Nov 2026).
   Sources read directly: Bhutan STG 2024 §16.3.2; Ting et al., J Paediatr Child Health 2026 (systematic review of systemic therapy in 1608 children);
   Heuer et al., JDDG 2025 meta-analysis (all ages); Canavan et al., JAAD 2015 (Mycoplasma pneumoniae-induced rash and mucositis, via abstract
   details summarised in searches); BAD 2019 paediatric guideline (McPherson et al.) cited from its published summary (infections are a more common
   trigger in children; specialist-unit care; long-term eye, skin, lung and psychological follow-up); Bhutan NEML 2025. */
registerPage({
id: "sjs-child",
title: "Stevens–Johnson Syndrome & TEN — Children",
subtitle: "In children the trigger is often an infection, especially Mycoplasma, as well as drugs such as antiepileptics and sulfonamides. Stop suspect drugs, distinguish Mycoplasma-induced mucositis, nurse the child like a burn in a specialist unit, protect the eyes, and plan years of follow-up",
age: "Children & adolescents", specs: ["derm", "paeds", "picu"],
keywords: ["Stevens-Johnson syndrome child", "SJS child", "toxic epidermal necrolysis child", "TEN child", "Mycoplasma pneumoniae", "MIRM", "Mycoplasma-induced rash and mucositis", "RIME", "erythema multiforme child", "staphylococcal scalded skin syndrome", "SSSS", "antiepileptic", "lamotrigine", "carbamazepine", "co-trimoxazole", "mucositis", "conjunctivitis"],
related: ["sjs-adult", "burns-child", "measles-child", "chickenpox-child", "hfmd-child", "epilepsy-child", "hiv-child", "redeye-child", "ssti-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">SJS/TEN is rare in children but frightening and dangerous. Compared with adults, infections (above all <i>Mycoplasma pneumoniae</i>) are a more common trigger, and mortality is lower, but eye, skin and lung damage can last for years (BAD 2019).</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever, sore eyes and mouth, then painful dusky spots and blisters, with two or more inflamed mucosal sites.</p></div>
<div><h4>Stop</h4><p>Every drug started in the last 8 weeks that is not essential (antiepileptics, co-trimoxazole, NSAIDs, antibiotics).</p></div>
<div><h4>Think Mycoplasma</h4><p>Cough or chest signs with severe mucositis and little skin: <b>Mycoplasma-induced rash and mucositis</b> (MIRM).</p></div>
<div><h4>Measure</h4><p>% skin detached: <b>&lt; 10% SJS</b>, 10–30% overlap, <b>&gt; 30% TEN</b> (STG). SCORTEN is not validated in children.</p></div>
<div><h4>Specialist unit</h4><p>Refer early (STG): PICU, burns or dermatology, with ophthalmology every day.</p></div>
<div><h4>Supportive care</h4><p>Warmth, dressings, eye and mouth care, pain relief, fluids by weight, early feeding. No drug has clearly beaten supportive care.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §16.3.2 applies to children too: stop the drug, clean the eyes with saline and involve ophthalmology, mouthwash and mupirocin around the mouth, clean genital erosions with mupirocin or neomycin, handle the skin gently, use Vaseline gauze, give analgesia, and <b>refer as soon as SJS/TEN is suspected</b>. Paediatric intensive care, dermatology and ophthalmology are at JDWNRH. Common culprits in Bhutanese children: carbamazepine, phenytoin and phenobarbital for epilepsy, co-trimoxazole, and NSAIDs. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "How children differ from adults", html: `
${tbl(["Feature", "Children", "Adults"], [
["Triggers", "Drugs and infections (Mycoplasma in particular; BAD 2019)", "Mostly drugs"],
["Mortality", "Lower", "Higher, rising with age and SCORTEN"],
["Severity score", "SCORTEN not validated", "SCORTEN"],
["Long-term problems", "Eyes, skin, nails, teeth, lungs, growth and psychological effects; school disruption", "Eyes, skin, genital, psychological"],
["Evidence for drugs", "1608 children in 260 studies: no benefit of systemic therapy over supportive care on mortality or length of stay (Ting 2026)", "Similar (Heuer 2025)"]])}
${r(1, 2)}
` },

{ id: "patho", title: "What happens", html: `
<p>Drug or infection antigens trigger cytotoxic T cells and natural killer cells to destroy keratinocytes, so the epidermis separates from the dermis. Mucous membranes of the eyes, mouth and genitals, and sometimes the airways, are involved early. The skin behaves like a partial-thickness burn: the child loses heat, fluid and protein and is at risk of infection.</p>
` },

{ id: "conflicts", title: "Where evidence differs", html: `
${tbl(["Point", "Evidence", "This guide"], [
["Systemic corticosteroids and IVIG", "Most-used therapies in children, but no association with lower mortality or shorter stay (Ting 2026)", "Not routine; specialist decision"],
["Ciclosporin and TNF-α inhibitors", "Trends towards lower mortality and (ciclosporin) shorter stay, not statistically significant (Ting 2026)", "Specialist option early in the course"],
["Mycoplasma-associated disease", "Distinct pattern (MIRM): prominent mucositis, sparse skin, generally better prognosis (Canavan 2015)", "Treat the Mycoplasma; supportive care; specialist review"]])}
` },

{ id: "presentation", title: "Clinical features", html: `
${tbl(["Phase", "In a child"], [
["Prodrome", "Fever, red sore eyes, sore throat, refusing food and drink, irritability"],
["Skin", "Painful dusky or purpuric spots and flat atypical targets, blisters, peeling sheets (Nikolsky sign)"],
["Mucosa", "Crusted bleeding lips, mouth ulcers (cannot eat or drink), purulent conjunctivitis, genital erosions (painful urination, urinary retention)"],
["Mycoplasma pattern (MIRM)", "Cough, chest signs or pneumonia; severe mucositis of mouth, eyes and genitals with few or no skin lesions"]])}
<h3>A typical patient</h3>
<p>A 9-year-old boy with epilepsy started carbamazepine 3 weeks ago. He now has fever, red eyes, painful mouth ulcers and dusky blistering spots over his chest and back, with about 8% of his skin detached. <b>Diagnosis</b>: SJS (under 10%). <b>Action</b>: stop carbamazepine; give a non-aromatic antiepileptic after discussion with the paediatrician (levetiracetam is often used); record a severe carbamazepine allergy; analgesia; fluids by weight; eye cleaning and same-day ophthalmology; mouthwash and white soft paraffin to the lips; Vaseline gauze to erosions; refer to the PICU and dermatology at JDWNRH.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "How it differs"], [
["Staphylococcal scalded skin syndrome (SSSS)", "Young child, tender red skin with superficial peeling, crusting around mouth and eyes but no mucosal ulcers; well-appearing"],
["Erythema multiforme", "Raised typical targets on the hands and limbs, often after herpes simplex; mucosa mild or one site"],
["Mycoplasma-induced rash and mucositis", "Severe mucositis with sparse skin rash and respiratory infection"],
["Chickenpox, measles, hand-foot-mouth disease", "Typical rash pattern and course; no sheets of detachment"],
["Kawasaki disease", "Red lips and eyes without ulcers or exudate; fever 5 days; peeling fingertips later"],
["Burns, scalds, abuse", "History, pattern, no mucosal disease"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["FBC, kidney and liver tests, electrolytes, glucose, albumin, CRP, gas", "Severity, fluids, organ function"],
["Mycoplasma testing (PCR or serology), chest X-ray if cough", "Infection-related disease"],
["Skin biopsy", "Confirms full-thickness necrosis; excludes SSSS (superficial split)"],
["Swabs and cultures", "Infection and sepsis"],
["Herpes simplex test where erythema multiforme is possible", "Different management"]])}
` },

{ id: "staging", title: "Severity", html: `
<p>Classify by detached skin (STG): <b>under 10% SJS, 10–30% overlap, over 30% TEN</b>. Count only detached or detachable skin, using the child's palm (about 1% of body surface) or a paediatric burns chart. Record it daily. SCORTEN is an adult score and is not validated in children, so use clinical severity (extent, mucosal sites, dehydration, sepsis, organ dysfunction).</p>
` },

{ id: "manage", title: "Management", html: `
<ol>
<li><b>Stop suspect drugs</b>; replace essential ones with unrelated classes (for epilepsy, avoid carbamazepine, phenytoin, phenobarbital and lamotrigine after an aromatic antiepileptic reaction).</li>
<li><b>Refer early</b> to a specialist unit (STG; BAD 2019).</li>
<li><b>Warm room</b>, barrier nursing, a soft mattress, gentle handling; parents present.</li>
<li><b>Skin</b>: leave detached skin in place; non-adherent dressings (Vaseline gauze); white soft paraffin as an emollient; mupirocin to the perioral and genital areas (STG).</li>
<li><b>Eyes</b>: saline cleaning, lubricants and ophthalmology review every day; early specialist treatment prevents scarring.</li>
<li><b>Mouth</b>: mouthwashes, lip emollient, analgesic gel; NG feeding if the child cannot eat.</li>
<li><b>Genitals</b>: cleaning, emollient, dressings; urinary catheter if retention or severe involvement.</li>
<li><b>Fluids by weight</b>: maintenance plus losses, guided by urine output; avoid overload.</li>
<li><b>Pain</b>: regular paracetamol and opioids by weight; extra cover for dressings; avoid NSAIDs.</li>
<li><b>Infection</b>: culture and treat; treat Mycoplasma with a macrolide when it is the trigger.</li>
<li><b>Systemic immunomodulation</b>: specialist decision; no therapy has clear benefit (Ting 2026).</li>
</ol>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML 2025)", "Use", "Notes"], [
[dr("mupirocin", "Mupirocin 2%"), "Perioral and genital erosions", "STG"],
["White soft paraffin", "Lips, skin, gauze", "Listed"],
[dr("ciclosporin", "Ciclosporin"), "Specialist option", "Trend to benefit in children, not significant"],
[dr("ivig", "Human immunoglobulin"), "Specialist option", "No clear benefit"],
["Paracetamol, morphine", "Pain", "Doses by weight"],
["Macrolide (azithromycin)", "Mycoplasma-triggered disease", "Treat the infection"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Children with epilepsy</b>", "Plan a safe alternative antiepileptic with the neurologist before discharge"],
["<b>Children with HIV</b>", "Co-trimoxazole and nevirapine are common culprits; choose alternatives with the HIV team"],
["<b>Adolescents</b>", "Adult-type drug triggers; consider pregnancy and recreational drugs; psychological support"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Child with severe mouth and eye ulcers but almost no skin rash and a cough", "Think MIRM: Mycoplasma testing, macrolide, supportive care, ophthalmology", "Different cause and outlook"],
["Seizures restart after stopping carbamazepine", "Levetiracetam (or valproate) after specialist advice", "Unrelated structures"],
["Parents want to treat at home with traditional remedies", "Explain the danger to eyes and life; admit", "Rapid progression and blindness"],
["Child refuses to drink because of mouth pain", "Analgesia before feeds, NG tube, IV fluids", "Dehydration and kidney injury"]])}
` },

{ id: "complications", title: "Complications and long-term effects", html: `
<p>Sepsis, dehydration, kidney injury, pneumonia and respiratory failure in the acute phase. Long-term: dry eyes, scarring and visual loss; skin pigment changes and nail loss; dental problems; lung damage (bronchiolitis obliterans); genital adhesions; anxiety and school difficulties. BAD 2019 stresses long-term care for eye, skin, lung and psychological effects.${r(3)}</p>
` },

{ id: "followup", title: "Follow-up", html: `
${box("red", "Never again", `<ul><li>Record the culprit drug and related drugs as a severe allergy in the child's health book and all records; give the family a written card.</li><li>Tell siblings' doctors: genetic risk can be shared.</li></ul>`)}
${box("green", "Follow-up", `<ul><li>Ophthalmology for months to years.</li><li>Dermatology, dental and respiratory review; growth and nutrition checks.</li><li>Psychological support for the child and parents; school reintegration plan.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Mucosal desquamation in SJS", src: "images/sjs-mucosa.jpg", mod: "Photograph", ctx: "Stevens–Johnson syndrome", loc: "Lips and mouth", find: "Haemorrhagic crusting and peeling of the lips", interp: "Painful mucositis stops children eating and drinking: plan analgesia and feeding", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Mucosal_desquamation_in_a_person_with_Stevens%E2%80%93Johnson_syndrome.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Conjunctivitis in SJS", src: "images/sjs-conjunctivitis.jpg", mod: "Photograph", ctx: "Ocular involvement", loc: "Eye", find: "Red, inflamed conjunctiva", interp: "Daily ophthalmology review to prevent scarring", by: "Jonathan Trobe, MD, University of Michigan Kellogg Eye Center", page: "https://commons.wikimedia.org/wiki/File:Stevens-Johnson_Syndrome_Conjunctivitis.jpg", lic: "CC BY 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with blisters and mucosal ulcers", [F.d("Two or more mucosal sites + painful dusky rash or detachment?"), F.a, F.b([["Yes", F.e("Stop suspect drugs; % detachment; Mycoplasma test; biopsy")], ["No", F.s("Consider SSSS, erythema multiforme, viral rash")]]), F.a, F.e("Refer early: PICU, dermatology, ophthalmology"), F.a, F.ok("Supportive care; macrolide if Mycoplasma; specialist decision on immunomodulation; lifelong allergy record")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling it SSSS and giving more antibiotics", "Culprit continues; wrong diagnosis", "Look for mucosal ulcers; biopsy"],
["Missing Mycoplasma", "Infection untreated", "Ask about cough; test"],
["Replacing carbamazepine with phenytoin", "Cross-reaction", "Use an unrelated antiepileptic"],
["Skipping the eyes", "Blindness", "Ophthalmology daily"],
["Using SCORTEN to reassure parents", "Not validated in children", "Clinical severity"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Which infection commonly triggers SJS-like disease in children?", "Mycoplasma pneumoniae — Mycoplasma-induced rash and mucositis (MIRM), with severe mucositis and sparse skin lesions.")}
${qa("Intern/MO", "How do you tell SSSS from TEN in a young child?", "SSSS has superficial peeling without mucosal ulcers and the child often looks well; TEN has painful full-thickness detachment with mucosal ulcers; biopsy confirms.")}
${qa("Intern/MO", "What antiepileptic would you avoid after carbamazepine-induced SJS?", "Other aromatic antiepileptics — phenytoin, phenobarbital, lamotrigine; use an unrelated drug such as levetiracetam.")}
${qa("Specialist", "What did the 2026 paediatric systematic review find?", "Across 1608 children, systemic therapy was not associated with lower mortality or shorter stay than supportive care; ciclosporin and TNF-α inhibitors showed non-significant trends towards benefit.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ting S, Chua K, et al. Systemic therapy for paediatric Stevens–Johnson syndrome and toxic epidermal necrolysis: a systematic review of current evidence and limitations. J Paediatr Child Health 2026;62:1570–1577. <a href="https://doi.org/10.1111/jpc.70432" target="_blank" rel="noopener">doi:10.1111/jpc.70432</a></li>
<li id="ref-2">Heuer R, Paulmann M, et al. Systemic immunomodulating therapies for epidermal necrolysis: a systematic review and meta-analysis. J Dtsch Dermatol Ges 2025;24:34–42. <a href="https://doi.org/10.1111/ddg.15804" target="_blank" rel="noopener">doi:10.1111/ddg.15804</a></li>
<li id="ref-3">McPherson T, Exton LS, et al. British Association of Dermatologists' guidelines for the management of Stevens–Johnson syndrome/toxic epidermal necrolysis in children and young people, 2018. Br J Dermatol 2019;181:37–54. <a href="https://doi.org/10.1111/bjd.17841" target="_blank" rel="noopener">doi:10.1111/bjd.17841</a> (summary points only; full text not read)</li>
<li id="ref-4">Canavan TN, Mathes EF, Frieden I, Shinkai K. Mycoplasma pneumoniae–induced rash and mucositis as a syndrome distinct from Stevens-Johnson syndrome and erythema multiforme: a systematic review. J Am Acad Dermatol 2015;72:239–245. <a href="https://doi.org/10.1016/j.jaad.2014.06.026" target="_blank" rel="noopener">doi:10.1016/j.jaad.2014.06.026</a></li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.3.2; National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §16.3.2", "<span class='pass'>Read directly</span>", ""],
["Paediatric systematic review 2026", "<span class='pass'>Read directly</span>", "Abstract and key points"],
["BAD 2019 paediatric guideline", "<span class='flag'>Summary only</span>", "Full text behind a bot check"],
["MIRM features", "<span class='flag'>Secondary summaries</span>", "Canavan 2015 DOI verified; full text not read"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"]], "qc")}` }
]
});
