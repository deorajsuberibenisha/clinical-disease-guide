/* Dengue — children, infants and neonates */
registerPage({
id: "dengue-child",
title: "Dengue — Children, Infants & Neonates",
subtitle: "The child who looks better as the fever settles: age-specific signs of shock, Bhutan's warning signs and groups, fluids by the kilogram and the hour, infants and newborns, and when to stop the drip",
age: "Children & neonates", specs: ["paeds", "id", "picu", "emerg", "ph"],
keywords: ["dengue child", "paediatric dengue", "pediatric dengue", "dengue infant", "neonatal dengue", "dengue shock syndrome child", "dengue warning signs child", "dengue fluids child", "haematocrit child dengue", "dengue haemorrhagic fever child", "Aedes"],
related: ["dengue-adult", "sepsis-child", "ge-child", "meningitis-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children leak plasma more readily than adults, compensate well and then crash quickly, and infants overload with fluid easily. So paediatric dengue care is about watching closely as the fever falls, reading pulse, pulse pressure and capillary refill against normal values for age, and giving fluid in small, measured steps.</p>
<div class="glance">
<div><h4>Danger window</h4><p>Days 3–7, as the fever falls: warning signs and shock appear now.</p></div>
<div><h4>Warning signs</h4><p>Abdominal pain, persistent vomiting, effusions or ascites, mucosal bleeding, lethargy or irritability, liver over 2 cm, rising haematocrit with falling platelets.</p></div>
<div><h4>Shock in children</h4><p>Fast pulse for age, pulse pressure 20 mmHg or less, cold hands, capillary refill over 2 seconds — often with a normal systolic BP.</p></div>
<div><h4>Fluids (B2)</h4><p>${dr("ringer_lactate")} or saline 5–7 → 3–5 → 2–3 mL/kg/h, guided by haematocrit; stop within 24–48 h.</p></div>
<div><h4>Fever and pain</h4><p>${dr("paracetamol")} 10–15 mg/kg 6-hourly; no ibuprofen, aspirin or IM injections. ${dr("ors")} and breastfeeding.</p></div>
<div><h4>Infants and neonates</h4><p>Always hospital care (Bhutan guideline); neonatal dengue mimics sepsis — ask about maternal fever.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The National Guideline on Clinical Management of Dengue in Bhutan (VDCP 2020) applies the same groups (A, B1, B2, C) and fluid steps to infants, children and adults, counts all children as a special population for admission decisions, and gives tables of normal vital signs and haematocrit by age (reproduced below). Its algorithm for compensated shock in children (Figure 6) is missing from the published PDF, so this chapter uses the WHO 2009 paediatric regimen for that step and says so. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Dengue virus (serotypes 1–4) spread by day-biting <i>Aedes</i> mosquitoes; in Bhutan, DENV-1 to 3 have been found, mostly in southern towns during and after the monsoon. Infants and young children may have only a non-specific fever with rash; older children have the classic illness. Severe dengue is less common in infants, but when it occurs the risk of death is higher.${r(1, 2)}</p>
${tbl(["Group", "Why at risk", "Notes"], [
["Infants under 1 year", "Maternal antibodies can enhance a first infection (6–9 months); small fluid reserve, leaky capillaries", "Hospital care for all infants (Bhutan guideline)"],
["Neonates", "Vertical transmission when the mother has dengue near delivery", "Shock or thrombocytopenia in the first 2 weeks; mimics sepsis"],
["Obese children", "Fluid calculations on actual weight overload them", "Use ideal weight for height"],
["Second infection", "Antibody-dependent enhancement", "Ask about past dengue"],
["Chronic illness, malnutrition", "Less reserve", "Admit (B1)"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("A child's course through dengue", [
F.s("Febrile phase: high fever, flushed, vomiting, poor feeding; febrile seizures possible in young children"), F.a,
F.s("Critical phase (days 3–7): plasma leaks; haematocrit rises; effusions"), F.a,
F.d("Compensation"), F.a,
F.b([["Maintained", F.ok("Tachycardia, narrow pulse pressure, then recovery with careful fluids")], ["Fails", F.e("Sudden hypotension, acidosis, bleeding, organ failure")]]), F.a,
F.s("Recovery: fluid returns to the circulation — continued IV fluid now causes overload")])}
<p>Children keep their systolic BP up by constricting vessels and raising the heart rate, so <b>BP falls late</b>. A narrowing pulse pressure, cold hands and slow capillary refill are the early signs. Infants are relatively more haemoconcentrated for a given haematocrit: an infant whose baseline is 30% and now 40% has leaked more than a child going from 42% to 50%.${r(1, 2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan guideline 2020", "International", "This guide and why"], [
["Compensated shock in children", "Figure 6 referenced but missing from the PDF", "WHO 2009: 10–20 mL/kg over 1 hour, then 10, 7, 5, 3 mL/kg/h", "WHO 2009 regimen, flagged as a gap"],
["Hypotensive shock bolus", "20 mL/kg over 30 minutes (all ages)", "WHO 2009: 20 mL/kg over 15 minutes", "Bhutan regimen; reassess immediately"],
["Prophylactic platelets", "May be considered under 10,000 without bleeding", "WHO: transfuse for bleeding; no paediatric benefit shown", "Bleeding or invasive procedure only"],
["Tepid sponging", "Fever control with antipyretics and tepid sponging (infants)", "Comfort measure only", "Paracetamol; sponging only if it comforts"],
["STG", "Paracetamol, bed rest, volume replacement, refer", "—", "Use the national dengue guideline"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Phase", "Children", "Watch for"], [
["Febrile", "Sudden high fever, flushing, headache, body aches (older children), vomiting, poor feeding, abdominal pain, rash, petechiae, positive tourniquet test (more specific in children)", "Dehydration, low glucose and sodium, febrile seizures"],
["Critical", "Fever settles; child may look better or become quiet and irritable; abdominal pain; vomiting; cool hands", "Warning signs, shock, bleeding"],
["Recovery", "Appetite returns, diuresis, itchy rash, slow pulse", "Overload: breathlessness, puffy eyes, crackles"]])}
<h3>Normal vital signs and hypotension by age (Bhutan guideline, Annexure 5)</h3>
${tbl(["Age", "Weight (approx.)", "Heart rate", "Breathing rate", "Hypotension (systolic below)"], [
["1 month", "4 kg", "110–180", "40–60", "70"],
["6 months", "8 kg", "110–170", "25–40", "70"],
["12 months", "10 kg", "110–170", "22–30", "72"],
["2 years", "12 kg", "90–150", "22–30", "74"],
["3 years", "14 kg", "75–135", "22–30", "78"],
["5 years", "18 kg", "65–135", "20–24", "82"],
["8 years", "26 kg", "60–130", "18–24", "90"],
["12 years", "42 kg", "60–110", "16–22", "90"],
["15 years and over", "—", "60–100", "12–18", "90"]])}
${box("red", "Shock in a child", `<ul><li><b>Compensated:</b> clear consciousness, capillary refill over 2 seconds, cool peripheries, weak pulse, tachycardia for age, normal systolic BP with rising diastolic and pulse pressure narrowing (20 mmHg or less), falling urine output</li><li><b>Hypotensive:</b> restless or drowsy, mottled cold skin, feeble or absent pulses, severe tachycardia, low or unrecordable BP, acidotic breathing, little or no urine</li></ul>`)}
<h3>The typical patient</h3>
<p>A 7-year-old boy from Samtse has had fever for four days. This morning the fever has gone but he is quiet, complains of tummy pain and has vomited twice. Weight 22 kg. Pulse 128, BP 100/84 (pulse pressure 16), capillary refill 3 seconds, cool hands, liver 3 cm. Haematocrit has risen from 38% to 47%; platelets 42,000. <b>This is dengue with compensated shock (Group C).</b> He needs crystalloid 10–20 mL/kg (220–440 mL) over 1 hour, haematocrit before and after, then a stepwise reduction (10, 7, 5, 3 mL/kg/h) if he improves, with hourly observations and urine output.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against dengue", "Best test"], [
["Septic shock, meningococcaemia", "Toxic from the start, purpura, high white count", "Dengue usually has low white cells", "Blood culture; see <a href=\"#/d/sepsis-child\">sepsis</a>"],
["Scrub typhus", "Eschar, lymph nodes, rural exposure", "—", "Scrub IgM"],
["Malaria", "Travel, anaemia, splenomegaly", "—", "RDT"],
["Measles, rubella, other viral exanthems", "Cough, conjunctivitis, Koplik spots", "—", "Clinical, serology"],
["Gastroenteritis with dehydration", "Diarrhoea predominant", "Rising haematocrit with falling platelets favours dengue", "CBC"],
["Appendicitis, intussusception", "Localised pain, guarding", "—", "Ultrasound"],
["Kawasaki disease, MIS-C", "Fever over 5 days, red eyes, lips, rash, swollen hands", "—", "Clinical criteria, echo"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>CBC with haematocrit</b>", "Baseline haematocrit early; daily until past the critical phase", "Leucopenia in children: total white count 2000 or less; thrombocytopenia under 100,000 (Bhutan Annexure 7 note)", "Essential"],
["NS1 (days 1–5), IgM (from day 5)", "Confirmation", "Do not delay treatment", "Essential"],
["Glucose, electrolytes, calcium, LFT, creatinine, albumin", "Hypoglycaemia, hyponatraemia, organ involvement", "Infants especially", "Group B and C"],
["Ultrasound chest and abdomen", "Early effusions, ascites, gallbladder wall oedema", "Easier than X-ray in children", "Selected"],
["Malaria, scrub typhus, blood culture", "Differentials", "—", "Southern districts"],
["Blood group and cross-match", "Shock", "—", "Group C"]])}
<h3>Age-specific haematocrit when no baseline is available (Bhutan Annexure 7)</h3>
${tbl(["Age", "Haematocrit (%)"], [
["1 month", "44"], ["2 months", "35"], ["6 months – 2 years", "36"], ["2–6 years", "37"], ["6–12 years", "40"], ["12–18 years", "41–43"]])}
` },

{ id: "staging", title: "Management group and fluid calculator", html: `
<p>Children are a special population in the Bhutan guideline: admit when in doubt, and always admit infants. Choose “Child or infant” in the fluid tool; use ideal weight for height in obese children.${r(1, 2, 3, 4, 5)}</p>
<div class="calc" data-calc="denguegroup"></div>
<div class="calc" data-calc="denguefluid"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. No warning signs (older child, drinking well, reliable daily review)</h3>
<ul><li>${dr("paracetamol")} 10–15 mg/kg 6-hourly (maximum 60 mg/kg/day). No ibuprofen, aspirin or IM injections.</li>
<li>${dr("ors")}, milk, juices, soups, water; continue breastfeeding. Enough to pass urine every 4–6 hours.</li>
<li>Daily review with CBC until past the critical phase; teach the warning signs.</li></ul>
<h3>B. Infants without warning signs (Bhutan guideline, Table 6)</h3>
<ul><li>Admit. Supportive care: ORS, juices and fluids with electrolytes and sugar; continue breastfeeding or formula and solids; paracetamol.</li></ul>
<h3>C. Warning signs (Group B2) — infants and children</h3>
<ol><li>Baseline haematocrit and weight.</li>
<li>${dr("ringer_lactate")} or 0.9% saline <b>5–7 mL/kg/h for 1–2 h, then 3–5 mL/kg/h for 2–4 h, then 2–3 mL/kg/h</b>, adjusted to clinical response and haematocrit; IV fluid is usually needed for only 24–48 hours.</li>
<li>Rising haematocrit or worsening signs: 5–10 mL/kg/h for 1–2 h, then reassess.</li>
<li>Aim for urine output about 1 mL/kg/h in children (0.5 mL/kg/h in adolescents); strict input–output; check glucose.</li></ol>
<h3>D. Compensated shock (Group C)</h3>
<ul><li>Crystalloid <b>10–20 mL/kg over 1 hour</b> (WHO 2009). Improved: 10 mL/kg/h for 1–2 h, 7 mL/kg/h for 2 h, 5 mL/kg/h for 4 h, 3 mL/kg/h, then stop within 24–48 hours.</li>
<li>Not improved: haematocrit rising → second bolus 10–20 mL/kg over 1 hour (colloid if already had crystalloid boluses); haematocrit falling → suspect bleeding → packed cells 5–10 mL/kg or whole blood 10–20 mL/kg.${r(2)}</li></ul>
<h3>E. Hypotensive shock</h3>
<ul><li><b>20 mL/kg over 30 minutes</b> (Bhutan Figure 7); improved → 10 mL/kg/h for 1 hour, then step down; not improved → decide by haematocrit as above. PICU care, glucose, calcium, acid–base.${r(1)}</li></ul>
<h3>F. Stop IV fluids when</h3>
<ul><li>Stable pulse, BP and perfusion; haematocrit falling with a good pulse; no fever for 24–48 hours; abdominal symptoms settling; urine output improving. Overload signs (puffy eyes, fast breathing, crackles, growing liver) → stop fluids; furosemide 1 mg/kg if BP is stable.</li></ul>
<h3>G. Discharge</h3>
<ul><li>No fever for 48 hours, eating and active, rising platelets, stable haematocrit without IV fluids.</li></ul>
<h3>H. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Older child without warning signs: paracetamol, ORS, daily review; refer all infants, warning signs and shock after discussing with the specialist; notify"],
["District hospital", "Haematocrit monitoring, IV fluids by the step ladder, blood bank; refer for PICU or blood products"],
["Referral hospital / PICU", "Shock management, ventilation, dialysis if needed"]])}
` },

{ id: "drugs", title: "Medicines and fluids", html: `
${tbl(["Item", "Child dose", "Notes"], [
[dr("paracetamol"), "10–15 mg/kg 6-hourly (max 60 mg/kg/day)", "Only antipyretic"],
[dr("ors"), "Frequent sips; continue breastfeeding", "Home and ward"],
[dr("ringer_lactate"), "B2: 5–7 → 3–5 → 2–3 mL/kg/h; shock: 10–20 or 20 mL/kg bolus", "Or 0.9% saline"],
["Colloid", "10–20 mL/kg", "Refractory shock"],
["Packed cells / whole blood", "5–10 mL/kg / 10–20 mL/kg", "Bleeding or falling haematocrit in shock"],
["Platelets", "1 unit per 10 kg", "Bleeding only"],
[dr("furosemide"), "0.5–1 mg/kg IV", "Fluid overload with stable BP (recovery phase)"],
["Avoid", "Ibuprofen, aspirin, IM injections, steroids", "—"]])}
` },

{ id: "populations", title: "Infants, neonates and adolescents", html: `
<ul><li><b>Infants:</b> hospital care; IV fluid with warning signs at 5–7 mL/kg/h for 1–2 h, then adjust; avoid overload; transfuse only for severe bleeding (Bhutan guideline).</li>
<li><b>Neonates:</b> if the mother had dengue in late pregnancy, admit the baby for observation; neonatal dengue may cause shock confused with sepsis — supportive care, watch platelets and haematocrit for 2 weeks.</li>
<li><b>Adolescents:</b> adult rules from about 15 years or 50 kg; ask about pregnancy in girls (see <a href="#/d/dengue-adult">adult chapter</a>).</li>
<li><b>Obese children:</b> calculate fluids on ideal weight for height.</li></ul>
` },

{ id: "scenarios", title: "Dengue with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Severe malnutrition", "Slower, smaller fluid volumes; glucose; specialist", "Heart failure risk"],
["Congenital heart disease", "Careful fluids; early PICU", "Overload"],
["Diarrhoea", "Check haematocrit and platelets; ORS", "Dengue can present with diarrhoea"],
["Febrile seizure during dengue", "Treat seizure; check glucose and sodium", "Febrile phase complication"],
["Co-infection (scrub typhus, malaria)", "Test and treat", "Southern districts"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Phase", "Complications", "Management"], [
["Febrile", "Dehydration, hyponatraemia, hypoglycaemia, febrile seizures", "Fluids, glucose, seizure care"],
["Critical", "Shock, bleeding, acidosis, hypocalcaemia, hepatitis, encephalopathy, myocarditis", "Shock regimen, correction, PICU"],
["Recovery", "Fluid overload, pulmonary oedema, hypokalaemia", "Stop fluids, diuretic if BP stable"]])}
<p>With timely care most children recover fully; deaths follow late recognition of shock, overload, or missed bleeding.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Notify through NEWARS. Remove standing water around homes and schools weekly; nets for daytime naps; long sleeves and repellent suitable for age.</li></ul>
${box("green", "What to tell the family", `<ul><li>"The fever going away does not mean your child is out of danger. Days 3 to 7 are the most important — bring your child for a check and blood test every day."</li><li>Give plenty of fluids and keep breastfeeding. Paracetamol only — no ibuprofen or aspirin.</li><li>Keep your child under a net during the day.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Tummy pain, repeated vomiting, bleeding from nose or gums, black stools</li><li>Unusually sleepy, irritable or floppy; cold hands and feet</li><li>No urine for 6 hours (infants: no wet nappy for 6 hours); fast breathing</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Positive tourniquet test", src: "images/tourniquet-test.gif", mod: "Clinical photograph", ctx: "Dengue fever", loc: "Forearm below the cuff", find: "Many petechiae", signs: "Positive tourniquet test", interp: "More specific in children (Bhutan guideline); supports dengue", by: "Centers for Disease Control and Prevention", page: "https://commons.wikimedia.org/wiki/File:Positive-tourniquet-test.gif", lic: "Public domain" })}
${fig({ title: "Recovery rash: islands of white in a sea of red", src: "images/dengue-rash-recovery.jpg", mod: "Clinical photograph", ctx: "Recovery phase", loc: "Legs", find: "Confluent erythema with pale islands", signs: "Convalescent dengue rash", interp: "Recovery phase — time to reduce and stop IV fluids", by: "Ranjan Premaratna", page: "https://commons.wikimedia.org/wiki/File:Dengue_recovery_rash_(White_islands_in_red_sea).jpg", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Aedes aegypti", src: "images/aedes-aegypti.jpg", mod: "Photograph", ctx: "Dengue vector", loc: "—", find: "Black mosquito with white leg bands", signs: "Day-biting Aedes", interp: "Daytime nets and container clean-up protect children", by: "John Ragai", page: "https://commons.wikimedia.org/wiki/File:Aedes_aegypti_mosquito.jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with suspected dengue", [
F.s("Fever; NS1/IgM; CBC with baseline haematocrit; vital signs against age norms"), F.a,
F.d("Shock (narrow pulse pressure, CRT over 2 s, cold hands) or severe bleeding?"), F.a,
F.b([["Yes", F.e("Compensated: 10–20 mL/kg over 1 h · Hypotensive: 20 mL/kg over 30 min; haematocrit; PICU")], ["No", F.d("Warning signs, infant, or cannot drink?")]]), F.a,
F.b([["Yes", F.s("Admit: 5–7 → 3–5 → 2–3 mL/kg/h by haematocrit")], ["No", F.ok("Home: paracetamol, ORS, daily CBC")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Measure pulse pressure</b>: 20 mmHg or less is shock even with a normal systolic BP.</li>
<li>Use age norms for heart rate and BP (table above).</li>
<li>An infant's haematocrit must be read against an infant's baseline.</li>
<li>When the itchy rash and diuresis appear, stop the drip.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for low BP to diagnose shock", "Late, sudden collapse", "Pulse pressure, CRT, cold hands"],
["Fluids on actual weight in obese children", "Overload", "Ideal weight for height"],
["Continuing IV fluids into recovery", "Pulmonary oedema", "Stop by 24–48 h"],
["Ibuprofen for fever", "Bleeding", "Paracetamol"],
["Platelets for a number", "No benefit", "Bleeding only"],
["Missing neonatal dengue", "Treated only as sepsis", "Ask about maternal fever"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "When is a child with dengue most at risk of shock?", "In the critical phase, around defervescence, usually days 3–7.")}
${qa("Student", "Why does BP fall late in children?", "Children compensate with tachycardia and vasoconstriction; narrowing pulse pressure and slow capillary refill come first.")}
${qa("Intern/MO", "What fluid plan does a child with warning signs receive?", "Crystalloid 5–7 mL/kg/h for 1–2 h, 3–5 mL/kg/h for 2–4 h, then 2–3 mL/kg/h, guided by haematocrit.")}
${qa("Intern/MO", "How is compensated shock treated in a child (WHO 2009)?", "Crystalloid 10–20 mL/kg over 1 hour, then 10, 7, 5 and 3 mL/kg/h stepwise if improving.")}
${qa("Intern/MO", "What is the normal haematocrit for a 4-year-old if no baseline exists?", "About 37% (Bhutan guideline Annexure 7).")}
${qa("Specialist", "A child in shock has a falling haematocrit. What do you suspect and give?", "Occult bleeding: packed cells 5–10 mL/kg or whole blood 10–20 mL/kg.")}
${qa("Specialist", "Name three signs of fluid overload in the recovery phase.", "Fast breathing, puffy eyes, crackles, enlarging liver, rising BP with bounding pulse.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Vector-borne Disease Control Programme, Ministry of Health, Bhutan. National Guideline on Clinical Management of Dengue in Bhutan (version 1), 2020 (sections 7, 11; Annexures 5–7).</li>
<li id="ref-2">World Health Organization. Dengue: guidelines for diagnosis, treatment, prevention and control. Geneva: WHO; 2009. <a href="https://www.who.int/publications/i/item/9789241547871" target="_blank" rel="noopener">who.int/publications/i/item/9789241547871</a></li>
<li id="ref-3">World Health Organization. WHO guidelines for clinical management of arboviral diseases: dengue, chikungunya, Zika and yellow fever. Geneva: WHO; 2025. <a href="https://www.who.int/publications/i/item/9789240111110" target="_blank" rel="noopener">who.int/publications/i/item/9789240111110</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.5.8 Dengue.</li>
<li id="ref-5">Bhutan Clinical Reference app: Dengue (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan dengue guideline (children, infants, annexures)", "<span class='pass'>Verified</span>", "Read directly from the PDF"],
["Paediatric compensated shock regimen", "<span class='flag'>Gap filled</span>", "Bhutan Figure 6 missing; WHO 2009 regimen used"],
["WHO 2025 arboviral guideline", "<span class='flag'>Not reviewed in full</span>", "Cited only"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY-SA 4.0 / CC BY 2.0"]], "qc")}
` }
]
});
