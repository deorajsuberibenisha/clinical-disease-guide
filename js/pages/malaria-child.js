/* Malaria — children (Bhutan National Malaria Guideline 2024, WHO 2024) */
registerPage({
id: "malaria-child",
title: "Malaria — Children",
subtitle: "Children deteriorate fast: test every febrile child with travel or residence risk, dose by weight, watch glucose, and give artesunate at the first danger sign",
age: "Infants & children", specs: ["paeds", "id", "picu", "ph"],
keywords: ["childhood malaria", "paediatric malaria", "cerebral malaria", "severe anaemia", "artesunate child", "artemether lumefantrine weight band", "chloroquine child", "primaquine child"],
related: ["malaria-adult", "dengue-child", "sepsis-child", "meningitis-child", "anaemia-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Young children have little immunity and can go from fever to coma within a day. Glucose, anaemia and convulsions kill more than the parasite itself.</p>
<div class="glance">
<div><h4>Test</h4><p>RDT/smear for every febrile child with risk; children are often RDT-tested at BHU level.</p></div>
<div><h4>Falciparum</h4><p>${dr("artemether_lumefantrine", "AL")}: 5–14 kg 1 tab; 15–24 kg 2; 25–34 kg 3; 35 kg+ 4 per dose × 6.</p></div>
<div><h4>Vivax</h4><p>${dr("chloroquine")} 10, 10, 5 mg/kg; ${dr("primaquine")} 0.25 mg/kg × 14 d from 6 months.</p></div>
<div><h4>Severe</h4><p>${dr("artesunate")} 3 mg/kg if under 20 kg; glucose check; refer.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan 2024 uses the same protocols as adults with weight-based dosing (Annexures). Primaquine is not given under 6 months of age. Pre-referral IM artesunate can be given at any BHU. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Children under 5 years and children arriving from highly endemic areas are at greatest risk of severe malaria: cerebral malaria, severe anaemia and respiratory distress from acidosis.${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Why children get sick fast", [F.s("Low immunity → high parasite load"), F.a, F.s("Haemolysis + marrow suppression → severe anaemia"), F.a, F.e("Hypoglycaemia, acidosis, cerebral sequestration → coma, convulsions")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan 2024", "WHO 2024", "This guide"], [["Artesunate under 20 kg", "3 mg/kg", "3 mg/kg", "Same"], ["Infants under 5 kg", "Limited data — specialist", "AL by mg/kg same as 5 kg band", "Treat with AL, admit " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Fever, vomiting, poor feeding, irritability, cough or diarrhoea (often misleading).</li><li>Pallor, splenomegaly, fast breathing.</li></ul>${box("red", "Danger signs — treat as severe", `<ul><li>Unable to drink or breastfeed, repeated vomiting</li><li>Convulsions, lethargy, unconsciousness, unable to sit or stand</li><li>Deep (acidotic) breathing, severe pallor, jaundice, dark urine</li><li>Glucose under 3 mmol/L</li></ul>`)}<h3>The typical patient</h3><p>A 4-year-old (15 kg) from a Sarpang border village has fever for 2 days, then a convulsion. RDT positive for P. falciparum; glucose 2.4 mmol/L. <b>This is severe falciparum malaria</b>: 10% dextrose 2–5 mL/kg, artesunate 45 mg (3 mg/kg) IV, treat seizures, check Hb, refer to a hospital with paediatric HDU.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Meningitis", "Neck stiffness, bulging fontanelle — LP when stable; treat both if unsure"], ["Pneumonia", "Chest signs; acidotic breathing in malaria has clear chest"], ["Dengue", "Rash, low platelets"], ["Febrile convulsion", "Brief, recovers quickly — still test for malaria"]])}` },
{ id: "invest", title: "Investigations", html: `<p>RDT, thick and thin smear; glucose (bedside); Hb; in severe malaria lactate, electrolytes, creatinine, blood culture; LP when stable if coma persists.</p>` },
{ id: "staging", title: "Treatment calculator", html: `<div class="calc" data-calc="malariadose"></div>` },
{ id: "manage", title: "Management", html: `${tbl(["Weight", "AL tablets per dose (× 6 doses)"], [["5–14 kg", "1"], ["15–24 kg", "2"], ["25–34 kg", "3"], ["35 kg+", "4"]])}<ul><li>Dispersible AL can be mixed with breast milk; repeat the dose if vomited within 30 min.</li><li>Chloroquine syrup or crushed tablets by mg/kg.</li><li>Severe: artesunate 3 mg/kg (under 20 kg) IV/IM at 0, 12, 24 h then daily; glucose-containing maintenance fluids at maintenance rates (avoid boluses unless shocked); transfuse 10 mL/kg packed cells (20 mL/kg whole blood) if Hb under 5 g/dL, or under 7 with distress.</li><li>Seizures: diazepam/midazolam; check glucose.</li><li>Antibiotics (ceftriaxone) if meningitis or sepsis cannot be excluded.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("artemether_lumefantrine"), "Weight bands", "With milk"], [dr("chloroquine"), "10, 10, 5 mg/kg", "Vivax"], [dr("primaquine"), "0.25 mg/kg", "From 6 months"], [dr("artesunate"), "3 mg/kg (under 20 kg)", "Severe"], [dr("dextrose"), "10% 2–5 mL/kg", "Hypoglycaemia"]])}` },
{ id: "populations", title: "Infants", html: `<p>Under 6 months: no primaquine; vivax infants get chloroquine and are followed for relapse. Neonatal (congenital) malaria is rare: fever, anaemia, jaundice in the first weeks in a baby whose mother had malaria.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Coma after glucose corrected", "Cerebral malaria; airway, seizure control, LP when safe, refer"], ["Hb 4 g/dL, no blood available", "Pre-referral artesunate, oxygen, urgent transfer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Neurological sequelae after cerebral malaria (epilepsy, deficits), severe anaemia, AKI, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Smear follow-up per programme; Hb after 2–4 weeks; developmental check after cerebral malaria.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "P. falciparum ring forms", src: "images/pf-rings.jpg", mod: "Thin blood film", ctx: "Falciparum malaria", loc: "Red cells", find: "Small ring forms", interp: "Falciparum confirmed: AL or artesunate", by: "Lukas.S / Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Plasmodium_falciparum_02.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Febrile child with risk", [F.s("RDT + glucose"), F.a, F.d("Danger sign?"), F.a, F.b([["Yes", F.e("Artesunate 3 mg/kg, glucose, refer")], ["No", F.ok("AL or chloroquine by weight, review in 48 h")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Fluid boluses in severe malaria without shock", "Pulmonary oedema, death (FEAST)", "Maintenance fluids only"], ["Not checking glucose in a fitting child", "Treatable cause missed", "Bedside glucose"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "AL dose for an 18 kg child?", "2 tablets per dose at 0, 8, 24, 36, 48, 60 h.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Vector-borne Disease Control Programme, Ministry of Health, Bhutan. National Guideline for Diagnosis and Treatment of Malaria, 2024.</li><li id="ref-2">World Health Organization. WHO guidelines for malaria. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/guidelines-for-malaria" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Weight bands", "<span class='pass'>Checked</span>", "Bhutan 2024 / WHO"]], "qc")}` }
]
});
