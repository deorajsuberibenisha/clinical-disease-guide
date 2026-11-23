/* Necrotising enterocolitis (modified Bell staging, Walsh & Kliegman 1986) */
registerPage({
id: "nec-child",
title: "Necrotising Enterocolitis (NEC)",
subtitle: "A preterm baby with feed intolerance, a swollen belly and bloody stools: stop feeds, decompress, give antibiotics, X-ray serially, and call the surgeon early",
age: "Newborns (mostly preterm)", specs: ["neo", "nicu", "surg"],
keywords: ["necrotising enterocolitis", "NEC", "Bell staging", "pneumatosis intestinalis", "portal venous gas", "pneumoperitoneum", "feed intolerance", "bloody stool", "preterm"],
related: ["preterm-child", "neosepsis-child", "acute-abdomen-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">NEC is the commonest gastrointestinal emergency of preterm babies. Breast milk is the best prevention.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Distension, bilious aspirates, bloody stool, apnoea, instability.</p></div>
<div><h4>Stop</h4><p>Nil by mouth, NG free drainage, IV fluids.</p></div>
<div><h4>Antibiotics</h4><p>${dr("ampicillin")} + ${dr("gentamicin")} + ${dr("metronidazole")}.</p></div>
<div><h4>Surgery</h4><p>Perforation or deterioration.</p></div>
</div>
${box("bt", "Bhutan note", `<p>No STG chapter; neonatal surgery is at JDWNRH. District hospitals should stabilise (NPO, NG, IV fluids, antibiotics, warmth) and refer. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Inflammatory bowel necrosis, mostly in babies under 32 weeks in the second week of life; risk factors: prematurity, formula feeding, rapid feed advancement, asphyxia, congenital heart disease, polycythaemia.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("NEC", [F.s("Immature gut + abnormal bacteria + formula"), F.a, F.s("Mucosal injury, gas in bowel wall"), F.e("Necrosis, perforation, sepsis")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Practice A", "Practice B", "This guide"], [["NPO duration stage II", "14 days", "Shorter (5–7 days) in recent studies", "7–14 days by stage " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Feed intolerance, bilious aspirates, distension, tenderness, bloody stools, absent bowel sounds.</li><li>Systemic: apnoea, bradycardia, temperature instability, shock.</li></ul><h3>The typical patient</h3><p>A 1.4 kg baby born at 30 weeks, on formula day 10, develops distension, bilious aspirates and blood in stool; X-ray shows pneumatosis. <b>Bell stage IIA NEC</b>: NPO, NG drainage, IV fluids, ampicillin + gentamicin + metronidazole for 7–10 days, serial X-rays, surgical review.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Sepsis with ileus", "No pneumatosis"], ["Malrotation/volvulus", "Bilious vomiting in a term baby — emergency contrast"], ["Spontaneous intestinal perforation", "Extreme preterm, early, no pneumatosis"], ["Swallowed maternal blood", "Apt test"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Abdominal X-ray (AP + lateral decubitus), FBC, platelets, CRP, gas, lactate, blood culture, clotting.</p>` },
{ id: "staging", title: "Bell staging tool", html: `<div class="calc" data-calc="necbell"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>NPO, NG free drainage, IV fluids/parenteral nutrition.</li><li>Antibiotics by stage (tool).</li><li>Treat shock, thrombocytopenia, DIC; ventilate if needed.</li><li>Surgery: pneumoperitoneum, clinical deterioration, fixed loop, abdominal wall erythema.</li><li>Reintroduce breast milk slowly.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ampicillin"), "50 mg/kg 12-hourly (8-hourly after day 7)", ""], [dr("gentamicin"), "5 mg/kg 24–36-hourly", "Levels"], [dr("metronidazole"), "7.5 mg/kg 12-hourly", "Anaerobes"], [dr("cefotaxime"), "50 mg/kg 12-hourly", "Alternative"]])}` },
{ id: "populations", title: "Term babies", html: `<p>NEC in term babies suggests congenital heart disease, asphyxia or polycythaemia.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Perforation, no surgeon nearby", "Peritoneal drain by trained person may stabilise for transfer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Perforation, sepsis, strictures, short bowel syndrome, neurodevelopmental impairment, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Watch for strictures (feed intolerance weeks later); growth; development.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Pneumatosis intestinalis and portal gas", src: "images/nec-xray.jpg", mod: "Abdominal X-ray", ctx: "Neonatal NEC", loc: "Abdomen", find: "Bubbly gas in bowel wall; gas in portal veins", signs: "Pneumatosis intestinalis, portal venous gas", interp: "Bell stage II NEC", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Distended preterm", [F.s("NPO, NG, X-ray, bloods, antibiotics"), F.a, F.d("Pneumoperitoneum or deteriorating?"), F.a, F.b([["Yes", F.e("Surgery")], ["No", F.ok("Medical management by stage")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Formula when breast milk possible", "NEC risk", "Breast milk"], ["Late surgical referral", "Perforation", "Serial X-rays"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Radiological sign of Bell stage II NEC?", "Pneumatosis intestinalis.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Walsh MC, Kliegman RM. Necrotizing enterocolitis: treatment based on staging criteria. Pediatr Clin North Am. 1986;33:179-201. <a href="https://doi.org/10.1016/S0031-3955(16)34975-6" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
