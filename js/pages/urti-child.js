/* Upper respiratory infections in children: colds, pharyngitis, tonsillitis, sinusitis, red flags */
registerPage({
id: "urti-child",
title: "Sore Throat, Tonsillitis and Sinusitis — Children",
subtitle: "Colds are normal (6–8 a year), strep throat matters mainly from age 3 to 15, and the dangerous few are epiglottitis, quinsy, diphtheria and orbital cellulitis: weight-based amoxicillin and single-dose benzathine penicillin, and when tonsils should come out",
age: "Children", specs: ["paeds", "ent"],
keywords: ["sore throat child", "pharyngitis child", "tonsillitis child", "strep throat child", "scarlet fever", "common cold child", "runny nose", "sinusitis child", "epiglottitis", "quinsy child", "diphtheria", "rheumatic fever prevention", "tonsillectomy criteria", "Paradise criteria", "amoxicillin child", "benzathine penicillin child"],
related: ["urti-adult", "otitis-child", "pneumonia-child", "bronchiolitis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A child with a runny nose, cough and sore throat almost always has a virus and will be better in a week. Parents need reassurance, fever and pain relief, and clear signs to come back. Treat streptococcal tonsillitis properly in school-age children, because rheumatic heart disease is still with us.</p>
<div class="glance">
<div><h4>Colds</h4><p>6–8 a year is normal for young children; each lasts 7–10 days.</p></div>
<div><h4>Strep throat</h4><p>Mainly 3–15 years: fever, exudate, tender nodes, no cough; sometimes scarlet fever rash.</p></div>
<div><h4>Treat strep</h4><p>${dr("amoxicillin")} 50 mg/kg once daily (max 1 g) or 25 mg/kg BD for <b>10 days</b>, or ${dr("benzathine_pen", "benzathine penicillin")} IM once.</p></div>
<div><h4>Sinusitis</h4><p>Discharge or cough over 10 days, severe, or worsening again: amoxicillin.</p></div>
<div><h4>Under 3</h4><p>Strep throat is rare; look for other sources of fever.</p></div>
<div><h4>Red flags</h4><p>Drooling, stridor, toxic look, trismus, grey membrane, eye swelling.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §14.8 gives amoxicillin 15 mg/kg TDS for 7–10 days for bacterial pharyngitis in children, salt-water gargles for older children, and referral for recurrent tonsillitis (7/5/3 rule). Diphtheria has re-emerged in neighbouring countries where vaccine coverage fell; check the child's DPT/pentavalent record. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Condition", "Age", "Key features"], [
["Common cold", "All ages", "Runny or blocked nose, cough, mild fever, sore throat"],
["Viral pharyngitis", "All ages", "With cough, coryza, conjunctivitis (adenovirus), mouth ulcers (herpangina, hand-foot-mouth)"],
["Streptococcal tonsillitis", "Mainly 3–15 years", "Sudden fever, sore throat, headache, abdominal pain, exudate, tender nodes, palatal petechiae; no cough"],
["Scarlet fever", "3–10 years", "Strep throat + sandpaper rash, strawberry tongue, flushed cheeks with pale mouth"],
["Acute sinusitis", "Usually over 2 years", "Nasal discharge or day-time cough over 10 days, or severe/worsening"],
["Epiglottitis", "Unvaccinated (Hib) children", "High fever, toxic, drooling, stridor, sitting forward"],
["Quinsy", "Older children and teens", "One-sided severe pain, trismus, muffled voice"],
["Diphtheria", "Unvaccinated", "Grey adherent membrane, bull neck, stridor"]])}
` },

{ id: "patho", title: "Why children get so many", html: `
${F.chart("Immature immunity, many contacts", [F.s("Crèche, school and siblings expose children to many viruses"), F.a, F.s("Adenoids and tonsils large; Eustachian tubes short"), F.a, F.b([["Usual", F.ok("Self-limiting viral URTI")], ["Strep A", F.e("Tonsillitis → rheumatic fever, glomerulonephritis if untreated")], ["Bacterial spread", F.e("Otitis, sinusitis, orbital cellulitis")]])])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide"], [
["Child amoxicillin (strep)", "15 mg/kg TDS × 7–10 days", "50 mg/kg once daily (max 1 g) or 25 mg/kg BD (max 500 mg) × 10 days (IDSA 2012, AHA, AWaRe)", "Once- or twice-daily higher dose × 10 days " + LB.int()],
["Sinusitis amoxicillin", "Not specified", "80–90 mg/kg/day in 2 doses (AAP 2013, IDSA) or 40–50 mg/kg/day (AWaRe low-resistance settings); AWaRe 5 days, AAP 10 days", "80–90 mg/kg/day, 5–10 days"],
["Tonsillectomy referral", "7 / 5 / 3 episodes", "Paradise criteria (same numbers, each documented)", "Same"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> fever, cough, runny nose, drooling, voice change, breathing noise, eating and drinking, urine output, vaccinations, rheumatic fever in the family, number of throat infections this year.</li>
<li><b>Examine:</b> general look (toxic or playful), breathing and stridor, hydration, throat (if no stridor or drooling), nodes, ears, eyes, skin rash, heart murmur.</li></ul>
${box("red", "Danger signs", `<ul><li>Stridor, drooling, cannot swallow, sitting forward: possible epiglottitis — keep calm on the parent's lap, do not lie down or examine the throat, call for airway help</li><li>Grey membrane, bull neck (diphtheria)</li><li>Trismus, unilateral swelling (quinsy, deep neck infection)</li><li>Eyelid swelling with eye pain or reduced movement (orbital cellulitis)</li><li>Dehydration, lethargy, fast breathing</li></ul>`)}
<h3>The typical patient</h3>
<p>An 8-year-old (24 kg) in Bumthang has had sudden fever, headache, vomiting and a very sore throat since yesterday, with no cough. His tonsils are red with white patches and his front neck glands are tender. <b>This is likely streptococcal tonsillitis</b> (FeverPAIN 4, McIsaac 5). He needs paracetamol 360 mg, and amoxicillin 1 g once daily (50 mg/kg) for 10 days, or a single injection of benzathine penicillin 600,000 units.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Croup", "Barking cough, hoarse voice, stridor, well-looking"], ["Inhaled foreign body", "Sudden choking, unilateral wheeze"], ["Kawasaki disease", "Fever 5 days, red eyes, cracked lips, rash, swollen hands"], ["Infectious mononucleosis", "Teenagers, posterior nodes, spleen"], ["Hand-foot-mouth disease", "Mouth ulcers, palm and sole spots"], ["Dental abscess", "Tooth pain, facial swelling"]])}` },

{ id: "invest", title: "Investigations", html: `<p>Usually none. Rapid strep test or throat culture if available (not needed under 3 years). Throat swab and notify if diphtheria is suspected. Lateral neck X-ray is not needed and can be dangerous in suspected epiglottitis.</p>` },

{ id: "staging", title: "Sore throat tool", html: `<div class="calc" data-calc="sorethroat"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Colds and viral sore throats</h3>
<ul><li>${dr("paracetamol")} 15 mg/kg 6-hourly or ibuprofen 10 mg/kg 8-hourly (over 3 months) for discomfort; fluids; saline nose drops (STG); honey for cough over 1 year.</li>
<li>No antibiotics, antihistamines or cough syrups. Tell parents the usual course and when to return.</li></ul>
<h3>B. Streptococcal tonsillitis and scarlet fever</h3>
<ul><li>${dr("amoxicillin")} 50 mg/kg once daily (max 1 g) or 25 mg/kg twice daily (max 500 mg) for <b>10 days</b> (STG alternative 15 mg/kg TDS).</li>
<li>${dr("benzathine_pen", "Benzathine penicillin")} IM once: under 27 kg 600,000 units; 27 kg and over 1.2 million units — good when adherence is a worry.</li>
<li>Penicillin allergy: azithromycin 12 mg/kg (max 500 mg) once daily for 5 days.</li>
<li>Back to school after 24 hours of antibiotics.</li></ul>
<h3>C. Acute sinusitis</h3>
<ul><li>Persistent (over 10 days), severe or worsening: ${dr("amoxicillin")} 40–45 mg/kg twice daily (80–90 mg/kg/day, max 1 g per dose) for 5–10 days; ${dr("coamoxiclav")} if recent antibiotics or no response in 72 hours.</li>
<li>Eyelid swelling or neurological signs: IV ceftriaxone and urgent referral.</li></ul>
<h3>D. Emergencies</h3>
<ul><li>Epiglottitis: do not distress the child; oxygen without force; senior anaesthetist and ENT; IV ceftriaxone 80–100 mg/kg after the airway is secure.</li>
<li>Quinsy: IV benzylpenicillin + metronidazole; ENT drainage.</li>
<li>Diphtheria: isolate, notify, diphtheria antitoxin and penicillin or erythromycin; protect contacts.</li></ul>
<h3>E. Recurrent tonsillitis</h3>
<p>Refer for tonsillectomy if 7 or more well-documented episodes in 1 year, 5 a year for 2 years, or 3 a year for 3 years, or with quinsy or obstructive sleep apnoea (snoring with pauses, poor growth).</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("amoxicillin"), "Strep: 50 mg/kg OD (max 1 g) × 10 days; sinusitis 80–90 mg/kg/day in 2 doses", "STG: 15 mg/kg TDS"],
[dr("benzathine_pen"), "Under 27 kg 600,000 U; 27 kg+ 1.2 MU IM once", "Deep IM"],
[dr("azithromycin"), "12 mg/kg daily × 5 days (throat)", "Penicillin allergy"],
[dr("paracetamol"), "15 mg/kg 6-hourly", "Max 60 mg/kg/day"]])}
` },

{ id: "populations", title: "Infants and adolescents", html: `<ul><li><b>Infants under 3 months with fever:</b> do not label as a cold: assess for sepsis.</li><li><b>Under 3 years:</b> strep throat is rare; most exudative tonsillitis is viral (adenovirus).</li><li><b>Adolescents:</b> think of glandular fever and, with risk factors, gonococcal pharyngitis or acute HIV.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Parent wants antibiotics for green snot on day 3", "Explain colour does not mean bacteria; give a 10-day rule", "Most clear on their own"], ["Child with rheumatic heart disease and sore throat", "Treat promptly; check prophylaxis adherence", "Recurrence damages valves"], ["Child drooling and quiet, febrile, looks toxic", "Epiglottitis pathway; do not examine the throat", "Airway can obstruct suddenly"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Otitis media, sinusitis, quinsy, retropharyngeal abscess (young children: neck stiffness, drooling), rheumatic fever (2–4 weeks after strep throat), post-streptococcal glomerulonephritis, PANDAS (debated), orbital cellulitis. Most recover fully within a week.</p>` },

{ id: "followup", title: "Advice for parents", html: `
${box("green", "Advice", `<ul><li>Colds last 7–10 days and the cough up to 3 weeks; plenty of fluids and rest.</li><li>Give paracetamol or ibuprofen for comfort, not just to lower the temperature.</li><li>If antibiotics are given for a strep throat, finish all 10 days even when better.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Noisy breathing, drooling, cannot swallow</li><li>Not drinking, very sleepy, fast breathing</li><li>Swelling around the eye, or joint pains, chest pain or dark urine in the weeks after</li></ul>`)}
` },

{ id: "images", title: "Images", html: `<p>See the tonsillitis photograph in <a href="#/d/urti-adult">Sore throat — Adults</a>; the appearance is the same in children.</p>` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with sore throat", [F.s("Danger signs? (stridor, drooling, toxic, membrane)"), F.a, F.b([["Yes", F.e("Airway-first emergency pathway; refer")], ["No", F.d("Age 3+ with strep features (no cough, exudate, nodes, fever)?")]]), F.a, F.b([["No", F.ok("Viral: symptomatic care")], ["Yes", F.e("Amoxicillin 10 days or benzathine penicillin")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Examining the throat in suspected epiglottitis", "Complete obstruction", "Leave the child calm and upright"], ["5-day courses for strep throat", "Treatment failure, rheumatic fever", "10 days or single IM dose"], ["Missing diphtheria in an unvaccinated child", "Airway and heart death", "Look for the membrane; check vaccination"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why is strep throat important to treat in school-age children?", "To shorten illness and prevent rheumatic fever and suppurative complications.")}
${qa("Intern/MO", "Benzathine penicillin dose for a 20 kg child with strep throat?", "600,000 units deep IM once (under 27 kg).")}
${qa("Specialist", "What are the Paradise criteria for tonsillectomy?", "7 or more documented episodes in 1 year, 5 a year for 2 years, or 3 a year for 3 years.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §14.7–14.8; NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Shulman ST, Bisno AL, Clegg HW, et al. Clinical practice guideline for the diagnosis and management of group A streptococcal pharyngitis: 2012 update by the IDSA. Clin Infect Dis 2012;55:e86–e102. <a href="https://doi.org/10.1093/cid/cis629" target="_blank" rel="noopener">doi:10.1093/cid/cis629</a></li>
<li id="ref-3">Chow AW, Benninger MS, Brook I, et al. IDSA clinical practice guideline for acute bacterial rhinosinusitis in children and adults. Clin Infect Dis 2012;54:e72–e112. <a href="https://doi.org/10.1093/cid/cis370" target="_blank" rel="noopener">doi:10.1093/cid/cis370</a></li>
<li id="ref-4">Little P, Hobbs FDR, Moore M, et al. PRISM trial: clinical score and rapid antigen detection for sore throats. BMJ 2013;347:f5806. <a href="https://doi.org/10.1136/bmj.f5806" target="_blank" rel="noopener">doi:10.1136/bmj.f5806</a></li>
<li id="ref-5">World Health Organization. The WHO AWaRe Antibiotic Book. Geneva: WHO; 2022.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §14.8", "<span class='pass'>Used</span>", "Child dose compared with IDSA/AWaRe"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"]], "qc")}` }
]
});
