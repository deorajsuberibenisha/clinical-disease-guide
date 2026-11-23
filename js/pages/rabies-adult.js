/* Dog bite and rabies prevention (adults and children: same vaccine dose) */
registerPage({
id: "rabies-adult",
title: "Dog Bites and Rabies Prevention — Adults & Children",
subtitle: "Wound washing, WHO exposure categories, Bhutan's 1-week intradermal vaccine schedule, rabies immunoglobulin into the wound, bite-wound antibiotics and tetanus, and caring for the rare patient with clinical rabies",
age: "Adults and children", specs: ["emerg", "id", "ph", "paeds", "medicine"],
keywords: ["rabies", "dog bite", "animal bite", "cat bite", "monkey bite", "post-exposure prophylaxis", "PEP", "anti-rabies vaccine", "ARV", "PVRV", "intradermal", "rabies immunoglobulin", "ERIG", "RIG", "hydrophobia", "category III exposure", "wound washing"],
related: ["anaphylaxis-adult", "ssti-adult", "burns-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Rabies kills almost everyone who develops symptoms, and almost no one who gets proper care after a bite. Fifteen minutes of soap and water, three clinic visits and, for deep bites, immunoglobulin into the wound: that is the whole job, and it must never be delayed.</p>
<div class="glance">
<div><h4>Wash first</h4><p>Soap and running water for <b>15 minutes</b>, then povidone-iodine. Even if the bite was days ago.</p></div>
<div><h4>Categorise</h4><p>I: lick on intact skin — nothing. II: nibble or scratch without bleeding — vaccine. III: bite through skin, mucosal saliva — vaccine <b>plus</b> immunoglobulin.</p></div>
<div><h4>Vaccine</h4><p>${dr("rabies_vaccine")} <b>0.1 mL ID at 2 sites</b> on days 0, 3 and 7. Same dose at every age.</p></div>
<div><h4>Immunoglobulin</h4><p>${dr("erig")} <b>40 IU/kg</b> (max 3000 IU) infiltrated into and around the wounds, by day 7.</p></div>
<div><h4>Never delay</h4><p>No waiting to watch the dog first. Pregnancy and infancy are not contraindications.</p></div>
<div><h4>Also</h4><p>Tetanus, antibiotics for high-risk wounds, no primary suturing.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Rabies is endemic along the southern border (Samtse, Chukha, Sarpang, Samdrup Jongkhar) and outbreaks have reached interior districts; dog bites are common in towns with many free-roaming dogs. Vaccine is free and stocked to PHC level; ERIG is held at district hospitals and above. Follow the <b>National Guidelines for Management of Rabies (3rd ed. 2023, revised 2024)</b>. Clinical rabies and exposures to a probable rabid animal are notified at once through NEWARS. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Exposure categories", html: `
${tbl(["WHO category", "Exposure", "What to give"], [
["I", "Touching or feeding animals; licks on intact skin; contact with an animal's utensils", "Nothing if the history is reliable; wash the skin"],
["II", "Nibbling of uncovered skin; minor scratches or abrasions <b>without bleeding</b>; handling raw meat or carcasses of a rabid animal", "Wound care + vaccine at once"],
["III", "One or more <b>bites or scratches that break the skin</b>; licks on broken skin; saliva on lips, eyes or mouth; any bat contact", "Wound care + vaccine + rabies immunoglobulin"]])}
<p>Rats, mice and squirrels have not been shown to transmit rabies: no PEP. Dogs cause almost all human rabies in Bhutan; cats, cattle, monkeys, jackals and foxes can too.${r(1)}${r(2)}</p>
` },

{ id: "patho", title: "How rabies travels", html: `
${F.chart("From the bite to the brain", [
F.s("Virus in saliva enters muscle and nerve endings at the wound"), F.a, F.s("Slow travel along peripheral nerves (days to years: closer to the head = faster)"), F.a, F.e("Reaches spinal cord and brain → encephalomyelitis → death"), F.a,
F.ok("Washing removes virus; immunoglobulin neutralises it in the wound; vaccine builds antibody within 7–14 days")])}
<p>Once virus is inside the nerve, antibody cannot reach it. That is why immunoglobulin must go <b>into the wound</b>, and why bites on the face, head, neck, hands and genitals (rich in nerves, close to the brain) are the most urgent.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan (STG 2024, NEMF 2022, Rabies Guideline 2024)", "WHO 2018", "This guide"], [
["Leftover immunoglobulin", "NEMF: remaining volume IM away from the vaccine site", "Infiltrate the wounds only; leftover not needed IM", "Infiltrate as much as possible into wounds; dilute if many wounds " + LB.int()],
["ERIG maximum", "3000 IU (NEMF)", "40 IU/kg, no cap stated", "40 IU/kg up to 3000 IU " + LB.bt()],
["Vaccine route", "ID 2-2-2-0-0 recommended; IM 4 doses if ID impossible", "Same (1-week ID or 2-week IM)", "As both"],
["Stopping PEP if the dog stays healthy", "Not stated", "May stop if a dog or cat remains healthy for 10 days of observation", "Allowed only with reliable observation " + LB.int()]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> what animal, when, where on the body, through clothes or not; was it provoked; is the animal sick, behaving strangely, owned and vaccinated, available to watch for 10 days, dead or killed? Previous rabies vaccine? Immunosuppression? Tetanus status?</li>
<li><b>Examine:</b> number, depth and site of wounds; bleeding; tendon, joint or bone involvement in hand bites; signs of infection if late.</li></ul>
${box("red", "High-risk features: give immunoglobulin first, today", `<ul><li>Bites on the head, face, neck, hands, fingers or genitals</li><li>Multiple or deep bites</li><li>Unprovoked attack, or the animal was sick, died or disappeared</li><li>Immunocompromised person (immunoglobulin even for category II)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 7-year-old girl in Gelephu is brought 3 hours after a stray dog bit her cheek and hand while she walked to school. There are three punctures with bleeding. <b>This is a category III exposure in a high-risk site</b>: wash every wound for 15 minutes, infiltrate ERIG 40 IU/kg into all of them, give 0.1 mL ID vaccine at two sites today, and book days 3 and 7. Her age makes no difference to the vaccine dose.</p>
` },

{ id: "ddx", title: "Differential diagnosis (clinical rabies)", html: `${tbl(["Condition", "Clue"], [["Tetanus", "Trismus, spasms, clear mind, no hydrophobia"], ["Viral or Japanese encephalitis", "No bite history, no hydrophobia; CSF and MRI patterns"], ["Guillain–Barré syndrome", "Mimics paralytic rabies; no fever or agitation, no bite"], ["Organophosphate poisoning", "Secretions, pinpoint pupils, exposure history"], ["Delirium tremens", "Alcohol history, tremor, responds to benzodiazepines"], ["Rabies phobia (hysteria)", "Anxiety after a bite, no progressive signs"]])}` },

{ id: "invest", title: "Investigations", html: `
<p><b>No test is needed before PEP:</b> decisions are made on the exposure. Antibody testing after vaccination is only for immunocompromised patients.</p>
${tbl(["Test (suspected clinical rabies)", "Notes"], [["Saliva RT-PCR (3 samples, 3–6 hours apart)", "Through the Royal Centre for Disease Control"], ["Nuchal skin biopsy (hair follicles) for RT-PCR or antigen", "Most sensitive ante-mortem test"], ["Serum and CSF antibodies", "Useful only in the unvaccinated"], ["Brain tissue post mortem", "Confirms diagnosis"]])}
<p>A negative ante-mortem test does not exclude rabies. Send the head of a dead suspect animal (through the livestock sector) for testing.</p>
` },

{ id: "staging", title: "PEP tool", html: `<div class="calc" data-calc="rabiespep"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Wound care (every bite, even if late)</h3>
<ul><li>Wash and flush each wound for about <b>15 minutes</b> with soap or detergent and plenty of running water, then apply povidone-iodine or alcohol. No chilli, herbs, oil, salt or turmeric.</li>
<li>Do not suture primarily. If a face wound must be closed, infiltrate immunoglobulin first and close loosely a few hours later. Debride dead tissue.</li>
<li>Tetanus: ${dr("td_vaccine", "Td")} 0.5 mL IM if not boosted within 5 years (dirty wound); tetanus immunoglobulin if never immunised.</li>
<li>Antibiotic prophylaxis: ${dr("coamoxiclav")} 625 mg 8-hourly (child 15 mg/kg) for 3–5 days for deep punctures, hand, face or genital bites, cat bites, crush injury, or immunosuppression. Infected bites: 5–7 days.</li></ul>
<h3>B. Vaccine</h3>
<ul><li>${dr("rabies_vaccine")} <b>intradermal 0.1 mL at 2 sites</b> (both deltoids; anterolateral thigh under 2 years) on days 0, 3 and 7. A good ID injection raises a pale 'orange-peel' bleb; if it goes subcutaneous, repeat that site.</li>
<li>IM only if ID is impossible: 0.5 mL on days 0, 3, 7 and one between 14 and 28. Never into the buttock.</li>
<li>Late presenters (weeks or months later) still get full PEP, because the incubation period can be very long. A missed dose: continue the schedule, do not restart.</li>
<li>Previously vaccinated (full PrEP/PEP or 2 or more doses): 1 site ID on days 0 and 3; no immunoglobulin.</li></ul>
<h3>C. Rabies immunoglobulin</h3>
<ul><li>${dr("erig")} <b>40 IU/kg</b> (max 3000 IU): infiltrate into and around every wound with a fine needle; for fingers, infiltrate gently to avoid compartment pressure. Dilute with saline when wounds are many.</li>
<li>Give with the first vaccine dose, or as soon as possible up to day 7; never later (it would blunt the vaccine response). No skin test; keep ${dr("adrenaline_im", "IM adrenaline")} ready.</li>
<li>If supply is short, prioritise multiple or deep bites, head, neck, hands and genitals, the immunocompromised, and bites by a probably rabid animal.</li></ul>
<h3>D. Clinical rabies</h3>
<ul><li>No cure. Admit to a quiet, dim single room; staff use gloves, gown and eye protection (saliva).</li>
<li>Comfort care: ${dr("diazepam")} or midazolam for agitation and spasms, ${dr("paracetamol")}, IV fluids, morphine for distress; involve the family and provide spiritual care.</li>
<li>Notify immediately. Give PEP to family or staff with mucosal or broken-skin exposure to saliva.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("rabies_vaccine"), "0.1 mL ID × 2 sites, days 0, 3, 7", "Same for all ages and weights"],
[dr("erig"), "40 IU/kg (max 3000 IU) into wounds", "300 IU/mL: 1 mL per 7.5 kg"],
[dr("coamoxiclav"), "625 mg 8-hourly; child 15 mg/kg 8-hourly", "3–5 days prophylaxis; 5–7 days if infected"],
[dr("td_vaccine"), "0.5 mL IM", "If due"],
[dr("adrenaline_im"), "0.5 mg IM adult; child by age", "For immunoglobulin or vaccine anaphylaxis"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children:</b> most bites, and more on the face and head; full adult vaccine dose; ERIG by weight; distraction and topical anaesthetic help washing.</li><li><b>Pregnancy and breastfeeding:</b> vaccine and immunoglobulin are safe and must be given.</li><li><b>Immunocompromised:</b> immunoglobulin even for category II; consider a 3-visit IM schedule (days 0, 3, 7, 14–28) and antibody testing where available.</li><li><b>Travellers and high-risk workers</b> (vets, dog catchers, laboratory staff): pre-exposure 0.1 mL ID at 2 sites on days 0 and 7.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Bitten 3 months ago, never treated, well", "Full PEP now, including ERIG", "Incubation can exceed a year"], ["Owner says the dog is vaccinated", "Still give PEP unless there is reliable proof and the dog can be watched", "Dog vaccination coverage is uneven"], ["No ERIG in the facility", "Start vaccine now; refer or arrange ERIG within 7 days", "Never delay the vaccine for immunoglobulin"], ["Family ate meat of a rabid cow", "No PEP for cooked meat; category II if raw meat handled with cuts", "Cooking inactivates the virus"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Bite wounds: infection (Pasteurella, staphylococci, streptococci, anaerobes), tendon and joint injury, scarring. Immunoglobulin: anaphylaxis (rare), serum sickness. Clinical rabies: furious form (about 80%: hydrophobia, aerophobia, agitation, death in days) and paralytic form (ascending weakness, death in 1–3 weeks); survival is exceptional.</p>` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "Advice to give", `<ul><li>Wash any animal bite or scratch at once with soap and water for 15 minutes, then come to the health centre the same day.</li><li>Come on the exact dates on your vaccine card; keep the card for life.</li><li>Do not put herbs or chilli on wounds.</li><li>Vaccinate pet dogs and cats; teach children not to approach unknown or eating dogs.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>The wound becomes red, swollen, hot or pus-filled, or you develop fever</li><li>Tingling or pain at the healed bite site, difficulty swallowing, fear of water</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Dog with furious rabies", src: "images/rabid-dog.jpg", mod: "Photograph", ctx: "Rabid animal", loc: "—", find: "Drooling, agitation, unprovoked aggression", interp: "A dog that bites without provocation, changes behaviour, or dies within 10 days is presumed rabid: full PEP with immunoglobulin", by: "CDC Public Health Image Library", page: "https://commons.wikimedia.org/wiki/File:Rabid_dog.jpg", lic: "Public domain" })}
<p>Bite wounds are not shown: every bite that breaks the skin, however small, is category III.</p>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Animal bite", [F.s("Wash 15 minutes with soap and water"), F.a, F.d("Rodent? Category I?"), F.a, F.b([["Yes", F.ok("No PEP; wound care")], ["No", F.d("Previously vaccinated?")]]), F.a, F.b([["Yes", F.ok("ID 1 site days 0 and 3; no RIG")], ["No", F.e("ID 2 sites days 0, 3, 7; + ERIG 40 IU/kg if category III or immunocompromised")]]), F.a, F.s("Tetanus; antibiotics for high-risk wounds; no primary suture")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Quick rinse instead of 15-minute wash", "Leaves virus in the wound", "Time it"], ["No immunoglobulin for category III", "Most PEP failures", "Infiltrate every wound"], ["Waiting to see if the dog dies", "Lost days", "Start now; stop only after reliable 10-day observation"], ["Less than 0.1 mL per ID site, or SC injection", "Poor immunity", "Check for a bleb"], ["Restarting a delayed course", "Wastes vaccine", "Resume the schedule"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "A dog licks a child's intact arm. What PEP is needed?", "None (category I) if the history is reliable; wash the area.")}
${qa("Intern/MO", "ERIG dose for a 20 kg child with a category III bite?", "40 IU/kg = 800 IU = 2.7 mL of 300 IU/mL, infiltrated into and around the wounds.")}
${qa("Intern/MO", "Until what day can immunoglobulin be given after the first vaccine dose?", "Day 7; after that it may interfere with the active vaccine response.")}
${qa("Specialist", "Why do face and hand bites carry higher risk?", "Rich innervation and short nerve distance to the brain, so virus enters nerves faster and incubation is shorter.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. National Guidelines for Management of Rabies, 3rd ed. 2023 (rev. 2024); Standard Treatment Guidelines 2024 §8.5.9; National Essential Medicines Formulary 2022; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">World Health Organization. Rabies vaccines: WHO position paper, April 2018. Wkly Epidemiol Rec 2018;93:201–220. <a href="https://www.who.int/publications/i/item/who-wer9316" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Tenzin, Dhand NK, Gyeltshen T, et al. Dog bites in humans and estimating human rabies mortality in rabies endemic areas of Bhutan. PLoS Negl Trop Dis 2011;5:e1391. <a href="https://doi.org/10.1371/journal.pntd.0001391" target="_blank" rel="noopener">doi:10.1371/journal.pntd.0001391</a></li>
<li id="ref-4">Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the IDSA (animal bites). Clin Infect Dis 2014;59:e10–e52. <a href="https://doi.org/10.1093/cid/ciu296" target="_blank" rel="noopener">doi:10.1093/cid/ciu296</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan Rabies Guideline 2024", "<span class='pass'>Used</span>", "Via the app's summary of the guideline"], ["WHO 2018 position paper", "<span class='pass'>Used</span>", "Regimens match"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Current district rabies incidence", "<span class='flag'>Not stated</span>", "No recent national figure found"]], "qc")}` }
]
});
