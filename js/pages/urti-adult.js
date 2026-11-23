/* Upper respiratory infections in adults: sore throat, tonsillitis, quinsy, sinusitis, common cold */
registerPage({
id: "urti-adult",
title: "Sore Throat, Tonsillitis and Sinusitis — Adults",
subtitle: "Most are viral and settle on their own: FeverPAIN and Centor to find the few streptococcal throats worth treating, 10 days of penicillin when you do, the 10-day rule for sinusitis, and the red flags of quinsy, epiglottitis and orbital spread",
age: "Adults", specs: ["ent", "medicine"],
keywords: ["sore throat", "pharyngitis", "tonsillitis", "strep throat", "group A streptococcus", "FeverPAIN", "Centor", "McIsaac", "quinsy", "peritonsillar abscess", "epiglottitis", "sinusitis", "rhinosinusitis", "common cold", "URTI", "upper respiratory tract infection", "amoxicillin", "benzathine penicillin", "rheumatic fever", "diphtheria", "glandular fever"],
related: ["urti-child", "otitis-adult", "pneumonia-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Upper respiratory infections are the commonest reason adults visit a health centre, and the commonest reason antibiotics are wasted. Good care here means honest reassurance, good pain relief and a clear plan for when to come back, with antibiotics saved for those who will truly benefit.</p>
<div class="glance">
<div><h4>Cold</h4><p>Runny nose, cough, sore throat: viral; 7–10 days; no antibiotic.</p></div>
<div><h4>Sore throat</h4><p>FeverPAIN 0–1 or Centor 0–2: no antibiotic. FeverPAIN 4–5 or Centor 3–4: consider antibiotic.</p></div>
<div><h4>Strep throat</h4><p>${dr("amoxicillin")} 500 mg TDS (or 1 g BD) for <b>10 days</b>, or benzathine penicillin 1.2 MU IM once.</p></div>
<div><h4>Sinusitis</h4><p>Antibiotic only if over 10 days without improvement, severe, or worsening after improving: amoxicillin 5 days.</p></div>
<div><h4>Red flags</h4><p>Drooling, trismus, muffled voice, stridor, unilateral swelling, eye swelling, severe headache.</p></div>
<div><h4>Pain relief</h4><p>${dr("paracetamol")} or ibuprofen; salt-water gargles (STG).</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §14.7–14.8: viral pharyngitis needs no antibiotic (salt gargles, paracetamol or ibuprofen, review in 2–3 days); bacterial pharyngitis (ill, exudate, tender nodes) is treated with amoxicillin 500 mg TDS for 7–10 days; refer quinsy and deep neck infections, and recurrent tonsillitis (7 in 1 year, 5 a year for 2 years, 3 a year for 3 years) for tonsillectomy. Rheumatic heart disease is still seen in Bhutan, which supports full 10-day treatment of streptococcal throats in young people. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Condition", "Cause", "Key features"], [
["Common cold", "Rhinovirus and others", "Runny or blocked nose, sneezing, mild sore throat, cough; 7–10 days"],
["Viral pharyngitis", "Adenovirus, influenza, EBV, others", "Sore throat with cough, runny nose, hoarseness, conjunctivitis"],
["Streptococcal pharyngitis / tonsillitis", "Group A Streptococcus (5–15% of adult sore throats)", "Fever, tonsillar exudate, tender anterior neck nodes, no cough"],
["Infectious mononucleosis", "EBV, teenagers and young adults", "Exudative tonsillitis, posterior nodes, fatigue, splenomegaly; rash with amoxicillin"],
["Quinsy (peritonsillar abscess)", "Strep, anaerobes", "Severe one-sided pain, trismus, muffled voice, uvula pushed away"],
["Epiglottitis", "H. influenzae, strep", "Severe pain, drooling, stridor, sitting forward: airway emergency"],
["Acute rhinosinusitis", "Viral (over 98%); bacterial occasionally", "Blocked nose, discoloured discharge, facial pain or pressure, reduced smell"],
["Diphtheria", "C. diphtheriae (unvaccinated)", "Grey adherent membrane, bull neck: notify, antitoxin"]])}
` },

{ id: "patho", title: "Why most need no antibiotic", html: `
${F.chart("Throat and sinus infections", [F.s("Viruses cause most: self-limiting in about a week"), F.a, F.b([["Group A strep throat", F.e("Antibiotics shorten symptoms by about a day and prevent rheumatic fever and quinsy")], ["Viral", F.ok("Antibiotics add side effects, cost and resistance, no benefit")]]), F.a, F.s("Scores and the 10-day rule pick the few who benefit")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide"], [
["Strep throat duration", "Amoxicillin 7–10 days", "10 days (IDSA 2012, WHO AWaRe); NICE 5–10 days of penicillin V", "10 days " + LB.int()],
["Who gets antibiotics", "Clinical bacterial features", "FeverPAIN 4–5 or Centor 3–4 (NICE NG84); IDSA tests before treating", "Scores; lower threshold in young people (rheumatic fever)"],
["Sinusitis antibiotic", "Not specified", "Amoxicillin 5 days only if 10 days+ or severe (NICE NG79, AWaRe)", "As international"],
["Single-dose option", "Not mentioned", "Benzathine penicillin 1.2 MU IM once (WHO, AHA)", "Offer when adherence is doubtful"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> duration, fever, cough and runny nose (suggest viral), difficulty swallowing saliva, voice change, trismus, facial pain, tooth pain, how many tonsillitis episodes this year, rheumatic fever history, vaccination (diphtheria).</li>
<li><b>Examine:</b> temperature, tonsils (size, exudate, asymmetry, uvula deviation, grey membrane), anterior and posterior neck nodes, ears, sinuses, eyes (periorbital swelling), spleen.</li></ul>
${box("red", "Red flags: refer or admit", `<ul><li>Drooling, unable to swallow saliva, stridor, sitting forward (epiglottitis): do not examine the throat with a spatula</li><li>Trismus, one-sided swelling, 'hot-potato' voice (quinsy)</li><li>Neck swelling or stiffness (deep neck infection, Lemierre syndrome)</li><li>Periorbital swelling, double vision, severe headache, confusion (complicated sinusitis)</li><li>Grey membrane (diphtheria)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 19-year-old student in Kanglung has had a very sore throat and fever of 38.6 °C for 2 days, no cough, swollen tender front neck glands and pus on both tonsils. <b>FeverPAIN 4 and Centor 4: streptococcal tonsillitis is likely</b>. She needs paracetamol and gargles, and amoxicillin 500 mg three times daily for 10 days (or one benzathine penicillin injection), with a reminder to finish the course.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Infectious mononucleosis", "Posterior nodes, fatigue, splenomegaly; avoid amoxicillin (rash)"], ["Acute HIV", "Sore throat, rash, ulcers after recent exposure"], ["Gonococcal pharyngitis", "Oral sex history"], ["Reflux, smoking, post-nasal drip", "Chronic, no fever"], ["Dental abscess", "Tooth pain, facial swelling"], ["Throat cancer", "Over 2–3 weeks, hoarseness, weight loss, smoker or drinker: refer (STG)"]])}` },

{ id: "invest", title: "Investigations", html: `<p>None for most. A rapid strep antigen test or throat culture (where available) confirms strep. Infectious mononucleosis: CBC (atypical lymphocytes), monospot. Sinus X-rays are not useful; CT only for complications. Throat swab for diphtheria if a membrane is seen.</p>` },

{ id: "staging", title: "Sore throat tool", html: `<div class="calc" data-calc="sorethroat"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Sore throat and tonsillitis</h3>
<ul><li>Everyone: ${dr("paracetamol")} 1 g 6-hourly or ibuprofen 400 mg 8-hourly; salt-water gargles (1 teaspoon in a glass of warm water) 2–3 times daily; fluids (STG).</li>
<li>Likely strep (tool above): ${dr("amoxicillin")} 500 mg TDS or 1 g BD for <b>10 days</b>; or ${dr("benzathine_pen", "benzathine penicillin")} 1.2 million units IM once. Penicillin allergy: azithromycin 500 mg daily for 5 days.</li>
<li>Back-up prescription for borderline cases: start if not better in 3–5 days.</li>
<li>Quinsy: refer for needle aspiration or incision; IV benzylpenicillin + metronidazole. Epiglottitis: keep calm, sitting up, oxygen; airway team; IV ceftriaxone.</li></ul>
<h3>B. Acute sinusitis</h3>
<ul><li>Under 10 days or improving: no antibiotic; analgesia, saline nasal rinses, steam; a short course of a nasal decongestant (up to 5 days) or a nasal steroid if prolonged.</li>
<li>Over 10 days without improvement, worsening after improving, or severe (fever 39 °C or more with purulent discharge and facial pain for 3–4 days): ${dr("amoxicillin")} 500 mg TDS (or 1 g TDS) for 5 days; ${dr("coamoxiclav")} if no response in 3 days.</li>
<li>Periorbital swelling, visual change, severe headache or confusion: urgent referral (orbital or intracranial spread).</li></ul>
<h3>C. Common cold</h3>
<p>Explain the 7–10-day course (cough can last 3 weeks); paracetamol, fluids, honey for cough; no antibiotics or antihistamines.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("amoxicillin"), "Strep throat 500 mg TDS or 1 g BD × 10 days; sinusitis 500 mg TDS × 5 days", "Avoid in glandular fever"],
[dr("benzathine_pen"), "1.2 MU IM once", "Strep throat; on NEML"],
[dr("azithromycin"), "500 mg daily × 5 days (throat), 3 days (sinus)", "Penicillin allergy"],
[dr("coamoxiclav"), "625 mg TDS × 5 days", "Sinusitis not responding"],
[dr("paracetamol"), "1 g 6-hourly", "Pain, fever"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> amoxicillin and penicillin are safe; avoid decongestants in the first trimester.</li><li><b>Rheumatic heart disease:</b> treat any sore throat promptly; continue secondary prophylaxis with benzathine penicillin every 3–4 weeks.</li><li><b>Immunosuppressed:</b> lower threshold for antibiotics; consider fungal sinusitis in uncontrolled diabetes (black nasal crusts = mucormycosis: emergency).</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Rash after amoxicillin for 'tonsillitis'", "Check for glandular fever; not usually true allergy", "EBV + amoxicillin rash"], ["Patient insists on an antibiotic for a cold", "Explain, give a symptom plan and a back-up rule", "Shared decisions reduce misuse"], ["Sinusitis with black crust in a diabetic", "Urgent ENT referral (mucormycosis)", "Rapidly fatal"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Quinsy, retropharyngeal or parapharyngeal abscess, Lemierre syndrome, rheumatic fever, post-streptococcal glomerulonephritis, otitis media; orbital cellulitis, meningitis and brain abscess from sinusitis. Most sore throats resolve in a week; sinusitis in 2–3 weeks.</p>` },

{ id: "followup", title: "Advice", html: `
${box("green", "Advice to give", `<ul><li>Most sore throats and colds get better on their own in a week; sinusitis may take 2–3 weeks.</li><li>Gargle with warm salt water, drink plenty, take paracetamol or ibuprofen.</li><li>If given an antibiotic for a strep throat, finish all 10 days.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>You cannot swallow your saliva, cannot open your mouth, or your voice becomes muffled</li><li>Swelling around the eye, double vision, severe headache or neck stiffness</li><li>Not better in 3–5 days</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Exudative tonsillitis", src: "images/tonsillitis.jpg", mod: "Photograph", ctx: "Acute tonsillitis", loc: "Oropharynx", find: "Swollen tonsils with white exudate", interp: "Exudate with fever, tender front nodes and no cough suggests streptococcus; also seen in glandular fever", by: "Nick Berman", page: "https://commons.wikimedia.org/wiki/File:Tonsillitis_Img.jpeg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Sore throat", [F.s("Red flags? (drooling, trismus, stridor, one-sided swelling)"), F.a, F.b([["Yes", F.e("Refer: quinsy, epiglottitis, deep neck infection")], ["No", F.d("FeverPAIN / Centor")]]), F.a, F.b([["Low", F.ok("Symptomatic care; no antibiotic")], ["Middle", F.s("No or back-up antibiotic")], ["High", F.e("Amoxicillin 10 days or benzathine penicillin")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Antibiotics for every sore throat", "Resistance, side effects", "Use the scores"], ["5-day courses for strep throat", "Relapse, rheumatic fever risk", "10 days"], ["Spatula in a drooling, stridulous patient", "Airway obstruction", "Leave them sitting up; call airway help"], ["Antibiotics for 4-day sinus symptoms", "No benefit", "10-day rule"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name the five FeverPAIN items.", "Fever in the last 24 h, Purulence, Attend rapidly (within 3 days), Inflamed tonsils, No cough or coryza.")}
${qa("Intern/MO", "When does acute sinusitis need an antibiotic?", "Symptoms over 10 days without improvement, worsening after initial improvement, or severe onset (fever 39 °C or more with purulent discharge and facial pain for 3–4 days).")}
${qa("Specialist", "Why treat streptococcal pharyngitis for 10 days?", "Shorter courses of penicillin fail to eradicate the organism as reliably; eradication prevents rheumatic fever.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §14.7–14.8 Pharyngitis; NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Little P, Hobbs FDR, Moore M, et al. Clinical score and rapid antigen detection test to guide antibiotic use for sore throats: randomised controlled trial of PRISM. BMJ 2013;347:f5806. <a href="https://doi.org/10.1136/bmj.f5806" target="_blank" rel="noopener">doi:10.1136/bmj.f5806</a></li>
<li id="ref-3">Shulman ST, Bisno AL, Clegg HW, et al. Clinical practice guideline for the diagnosis and management of group A streptococcal pharyngitis: 2012 update by the IDSA. Clin Infect Dis 2012;55:e86–e102. <a href="https://doi.org/10.1093/cid/cis629" target="_blank" rel="noopener">doi:10.1093/cid/cis629</a></li>
<li id="ref-4">Chow AW, Benninger MS, Brook I, et al. IDSA clinical practice guideline for acute bacterial rhinosinusitis in children and adults. Clin Infect Dis 2012;54:e72–e112. <a href="https://doi.org/10.1093/cid/cis370" target="_blank" rel="noopener">doi:10.1093/cid/cis370</a></li>
<li id="ref-5">National Institute for Health and Care Excellence. Sore throat (acute): antimicrobial prescribing (NG84), 2018; Sinusitis (acute): antimicrobial prescribing (NG79), 2017. WHO AWaRe Antibiotic Book, 2022.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §14.7–14.8", "<span class='pass'>Used</span>", "STG has no sinusitis section; international guidance used"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Bhutan RHD prevalence", "<span class='flag'>Not stated</span>", "No verified recent figure"]], "qc")}` }
]
});
