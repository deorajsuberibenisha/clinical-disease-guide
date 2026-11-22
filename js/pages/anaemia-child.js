/* Anaemia — children and adolescents */
registerPage({
id: "anaemia-child",
title: "Anaemia — Children & Adolescents",
subtitle: "Four in ten Bhutanese young children are anaemic: altitude-adjusted cutoffs, iron by weight, worms and cow's milk, when to suspect thalassaemia or haemolysis, and when a child needs blood",
age: "Children & adolescents", specs: ["paeds", "onc", "ph"],
keywords: ["anaemia child", "anemia child", "iron deficiency child", "pallor child", "cow's milk anaemia", "hookworm", "thalassaemia", "HbE", "G6PD", "haemolytic anaemia child", "transfusion child", "iron supplementation infants", "adolescent girls anaemia", "WIFS", "severe anaemia child"],
related: ["anaemia-adult", "anaemia-preg", "ge-child", "ckd-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Iron deficiency in early childhood does more than make children pale: it slows learning and development, sometimes permanently. Most of it is preventable and treatable with iron, deworming and better complementary feeding. The doctor's job is to treat the common cause well and spot the uncommon ones — haemolysis, thalassaemia, marrow disease and blood loss.</p>
<div class="glance">
<div><h4>Define it (WHO 2024)</h4><p>6–23 months under 105 g/L; 2–4 years under 110; 5–11 years under 115; 12–14 years under 120 — plus altitude adjustment.</p></div>
<div><h4>Common causes</h4><p>Low-iron diet, early or excess cow's milk, hookworm, chronic infection, malaria (travel), SAM.</p></div>
<div><h4>Treat</h4><p>${dr("ferrous")} 3 mg/kg/day elemental iron (up to 6 in severe cases) for 3 months after Hb normalises; ${dr("albendazole")} from 12 months.</p></div>
<div><h4>Suspect something else</h4><p>Jaundice or big spleen (haemolysis, thalassaemia), low white cells or platelets (marrow), no response to iron.</p></div>
<div><h4>Transfuse</h4><p>Hb under 40 g/L, or under 60 g/L with breathing difficulty, heart failure, shock or severe malaria (WHO).</p></div>
<div><h4>Prevent</h4><p>Delayed cord clamping, iron-rich complementary foods from 6 months, iron supplements where anaemia is common.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan's 2015 National Nutrition Survey found anaemia in 42% of children and 29% of adolescent girls (Campbell 2018)${r(1, 2)}; a 2003 survey found 81% of under-fives anaemic. The STG (§4.3) gives iron, dietary advice (green leafy vegetables and meat; tea and milk away from iron-rich meals), monthly CBC and transfusion where needed. The WHO 2024 altitude adjustment matters for children living in Thimphu, Paro, Bumthang and other highland districts. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
${tbl(["Age", "Common causes", "Notes"], [
["Preterm and low-birth-weight infants", "Low iron stores at birth", "Iron from 2–4 weeks to 12 months (neonatal unit advice)"],
["6–23 months", "Iron-poor complementary food, cow's milk before 12 months or over 500 mL/day, infections", "Peak risk; brain development"],
["Preschool and school age", "Hookworm and other worms, poor diet, malaria, chronic infection (TB, HIV)", "School deworming"],
["Adolescent girls", "Menstruation, growth spurt, diet", "Also screen for heavy periods"],
["Any age", "Haemolysis (G6PD, thalassaemia, HbE, autoimmune), blood loss, CKD, leukaemia, aplastic anaemia", "Look at the whole blood count"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Why young children run out of iron", [
F.s("Birth stores last about 4–6 months (less if preterm or early cord clamping)"), F.a,
F.s("Rapid growth from 6 months needs more iron than breast milk provides"), F.a,
F.d("Iron-rich complementary foods?"), F.a,
F.b([["Yes", F.ok("Stores maintained")], ["No (or cow's milk, worms)", F.e("Iron deficiency → anaemia → slower development, poor appetite, infections")]])])}
<p>Cow's milk is low in iron, inhibits absorption and in infants can cause small intestinal blood loss — a common, fixable cause of severe anaemia in toddlers who drink a lot of milk and eat little else.${r(1, 2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Cutoffs", "Normal range for age and sex", "WHO 2024: new child cutoffs (6–23 months now under 105 g/L) and altitude adjustment", "WHO 2024 (calculator)"],
["Iron dose", "Iron supplements (dose not stated)", "3 mg/kg/day elemental (BNFc, AAP; range 2–6)", "3 mg/kg/day"],
["Transfusion threshold", "Hb at least 7 g/dL (adult wording)", "WHO Pocket Book: children Hb under 4 g/dL, or under 6 g/dL with distress, heart failure or severe malaria", "WHO child thresholds"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Points to", "Comment"], [
["Palmar pallor (IMNCI: some or severe)", "Anaemia", "Severe palmar pallor needs urgent Hb and referral"],
["Irritability, poor appetite, pica, slow development, poor school performance", "Iron deficiency", "—"],
["Jaundice, dark urine after illness or drugs", "G6PD or other haemolysis", "Ask about drugs and fava beans"],
["Big spleen, bone changes of the face, family history, needing transfusions", "Thalassaemia major", "Specialist care"],
["Bruising, fever, bone pain, lymph nodes", "Leukaemia, aplastic anaemia", "Urgent referral"],
["Breathlessness, fast pulse, gallop, enlarged liver", "Heart failure from severe anaemia", "Emergency"]])}
${box("red", "Danger signs", `<ul><li>Severe palmar pallor with fast breathing, lethargy or poor feeding</li><li>Heart failure: fast breathing, gallop rhythm, enlarged liver, oedema</li><li>Hb under 40 g/L, or under 60 g/L with distress</li><li>Bleeding, bruising, very low white cells or platelets</li></ul>`)}
<h3>The typical patient</h3>
<p>A 20-month-old boy from Bumthang is brought for poor appetite. He drinks over 1 litre of cow's milk a day and eats little else. Pale palms, no jaundice, spleen not felt. Hb 9.2 g/dL, MCV 62. Bumthang lies around 2600 m, so the altitude adjustment is 18 g/L — his adjusted Hb is 74 g/L: moderate anaemia (WHO 2024, 70–94 g/L at this age). <b>This is iron-deficiency anaemia from excess cow's milk.</b> He needs milk cut to under 500 mL a day, iron-rich foods, iron 3 mg/kg/day (about 33 mg elemental iron for 11 kg), albendazole 400 mg, and a Hb check in 4 weeks.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against iron deficiency", "Best test"], [
["β-thalassaemia trait or HbE trait", "Low MCV, normal ferritin, high RBC count, family history", "No response to iron", "Hb electrophoresis (HPLC)"],
["Thalassaemia major / HbE-β-thalassaemia", "Severe anaemia from infancy, big spleen, transfusion need", "—", "Electrophoresis; refer"],
["G6PD deficiency", "Episodic haemolysis after drugs, infection, fava beans; neonatal jaundice", "Normal between episodes", "G6PD screen"],
["Anaemia of inflammation", "Chronic infection, TB, HIV", "Ferritin normal or high", "CRP, ferritin"],
["Leukaemia, aplastic anaemia", "Pancytopenia, blasts, bruising", "—", "Film; urgent referral"],
["Lead poisoning", "Pica, abdominal pain, developmental regression", "—", "Blood lead (specialist)"],
["Malaria", "Travel, fever, splenomegaly", "—", "RDT"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Hb or CBC", "Diagnose and classify", "Adjust for altitude", "Essential"],
["MCV, film", "Microcytic, macrocytic, haemolysis, blasts", "—", "Essential"],
["Ferritin", "Iron stores", "Raised by infection: interpret with CRP", "Where available"],
["Stool for ova", "Hookworm", "—", "If over 1 year"],
["Malaria RDT", "Travel to malarious areas", "—", "Selected"],
["Reticulocytes, bilirubin, LDH, Coombs, G6PD", "Haemolysis", "—", "If jaundice or normocytic"],
["Hb electrophoresis", "Thalassaemia, HbE", "If microcytic with normal ferritin or poor iron response", "Selected"]])}
` },

{ id: "staging", title: "Is it anaemia? (WHO 2024, altitude-adjusted)", html: `
<p>Choose the child's age group and place of residence.${r(3)}</p>
<div class="calc" data-calc="hbcutoff"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Iron-deficiency anaemia</h3>
<ul><li>${dr("ferrous")} <b>3 mg/kg/day elemental iron</b> once daily (up to 6 mg/kg/day in severe anaemia; maximum 200 mg/day), between meals with water or juice, not milk or tea. Continue for 3 months after Hb is normal. Use paediatric drops or syrup where available; the Bhutan adult IFA tablet contains 65 mg elemental iron.${r(1, 4)}</li>
<li>${dr("albendazole")}: 12–23 months 200 mg, 2 years and over 400 mg once.</li>
<li>Diet: iron-rich foods (meat, liver, eggs, pulses, green leafy vegetables) with vitamin C; limit cow's milk to under 500 mL/day after 12 months; no cow's milk as the main drink before 12 months.</li>
<li>Recheck Hb at 4 weeks (expect a rise of at least 10 g/L); no rise → adherence, ongoing loss, infection, thalassaemia trait.</li>
<li>Do not give iron during acute severe infection or in the first phase of SAM treatment (follow the SAM protocol).</li></ul>
<h3>B. Severe anaemia</h3>
<ul><li>Admit. Transfuse if Hb under 40 g/L, or under 60 g/L with respiratory distress, heart failure, shock, impaired consciousness or high malaria parasitaemia (WHO): packed red cells 10 mL/kg (or whole blood 20 mL/kg) over 3–4 hours; furosemide 1 mg/kg if heart failure; in SAM, 10 mL/kg whole blood or packed cells slowly.${r(5)}</li></ul>
<h3>C. Haemolysis, thalassaemia, marrow disease</h3>
<ul><li>G6PD: stop the trigger, folic acid, transfuse if severe. Thalassaemia major: regular transfusion and chelation at a referral centre; no routine iron. Pancytopenia or blasts: urgent haematology referral.</li></ul>
<h3>D. Prevention</h3>
<ul><li>Delayed cord clamping (1–3 minutes) at birth; exclusive breastfeeding to 6 months, then iron-rich complementary foods.</li>
<li>WHO 2016: where anaemia in young children is 40% or more, daily iron supplements (10–12.5 mg elemental iron) for 3 consecutive months a year from 6–23 months; school deworming; weekly iron-folic acid for adolescent girls where programmes exist.${r(6)}</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "IMNCI palmar pallor check; iron and albendazole for some pallor; refer severe pallor"],
["District hospital", "CBC, film, transfusion; investigate non-responders"],
["Referral hospital", "Electrophoresis, G6PD, haematology, thalassaemia care"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("ferrous"), "3 mg/kg/day elemental iron (max 6 mg/kg/day; 200 mg/day)", "3 months after Hb normal"],
[dr("albendazole"), "12–23 months 200 mg; 2 years+ 400 mg once", "Worms"],
[dr("folic_acid"), "500 micrograms/kg daily (max 5 mg)", "Haemolysis or folate deficiency"],
[dr("iron_sucrose"), "Specialist only (max 7 mg/kg per dose)", "Malabsorption, intolerance"],
[dr("furosemide"), "1 mg/kg IV", "Heart failure during transfusion"],
["Packed red cells", "10 mL/kg over 3–4 hours", "WHO thresholds"]])}
` },

{ id: "populations", title: "Infants, adolescents and special groups", html: `
<ul><li><b>Preterm infants:</b> iron 2–4 mg/kg/day from 2–4 weeks to 12 months (neonatal unit advice).</li>
<li><b>Adolescent girls:</b> heavy periods, diet, pregnancy: treat as adults (see <a href="#/d/anaemia-adult">adult chapter</a>); ask about menstruation.</li>
<li><b>SAM:</b> iron is started only in the rehabilitation phase; transfusion rules differ.</li>
<li><b>CKD:</b> erythropoietin and IV iron (see <a href="#/d/ckd-child">CKD in children</a>).</li></ul>
` },

{ id: "scenarios", title: "Anaemia with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Malaria", "Treat malaria; transfuse by WHO criteria", "Haemolysis"],
["TB, HIV", "Treat infection; anaemia of inflammation", "Iron absorbed poorly"],
["Neonatal jaundice history", "Consider G6PD deficiency", "Recurrent haemolysis"],
["Heart disease", "Transfuse slowly with diuretic", "Overload"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Developmental and learning delay", "Iron deficiency in infancy", "Early treatment and prevention"],
["Heart failure", "Severe anaemia", "Transfusion with care"],
["Breath-holding spells, restless legs, pica", "Iron deficiency", "Iron"],
["Iron overload", "Repeated transfusions (thalassaemia)", "Chelation (specialist)"]])}
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Hb at 4 weeks and at the end of treatment; monthly CBC if severe (STG).</li></ul>
${box("green", "What to tell the family", `<ul><li>"Your child's blood is low in iron, which affects energy, appetite and learning. Iron medicine and better food will fix it."</li><li>Give the iron once a day between meals with water or juice, not with milk or tea. Stools may turn black.</li><li>Not more than 2 cups (500 mL) of cow's milk a day; offer meat, eggs, pulses and green vegetables.</li><li>Keep iron medicine out of reach — an overdose is dangerous for small children.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fast breathing, very tired, swelling</li><li>Yellow eyes or dark urine</li><li>Bruising, bleeding or fever that will not settle</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Iron-deficiency anaemia on blood film", src: "images/ida-smear.jpg", mod: "Peripheral blood smear", ctx: "Advanced iron deficiency", loc: "Red cells", find: "Small pale red cells, pencil cells", signs: "Microcytic hypochromic picture", interp: "Confirm with ferritin; if ferritin normal, think thalassaemia trait or HbE", by: "Ed Uthman", page: "https://commons.wikimedia.org/wiki/File:Iron-deficiency_Anemia,_Peripheral_Blood_Smear_(4422704616).jpg", lic: "CC BY 2.0" })}
${fig({ title: "Koilonychia", src: "images/koilonychia.jpg", mod: "Clinical photograph", ctx: "Iron deficiency", loc: "Nails", find: "Spoon-shaped nails", signs: "Koilonychia", interp: "Long-standing iron deficiency; in young children nails can be normally thin", by: "CHeitz", page: "https://commons.wikimedia.org/wiki/File:Koilonychia_iron_deficiency_anemia.jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Pale child", [
F.s("Hb (altitude-adjusted), MCV, film; check for jaundice, spleen, bruising"), F.a,
F.d("Danger signs or Hb under 40 (or under 60 with distress)?"), F.a,
F.b([["Yes", F.e("Admit; transfuse 10 mL/kg packed cells")], ["No", F.d("Microcytic, no jaundice or big spleen?")]]), F.a,
F.b([["Yes", F.s("Iron 3 mg/kg/day + albendazole + diet; Hb at 4 weeks")], ["No", F.s("Haemolysis, thalassaemia or marrow work-up; refer")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Ask how much milk the toddler drinks.</b></li>
<li>No rise in Hb after a month of iron: think adherence, worms, thalassaemia trait.</li>
<li>Pallor with jaundice is haemolysis, not iron deficiency.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Ignoring altitude", "Missed anaemia in highland children", "WHO 2024 adjustment"],
["Stopping iron when Hb normal", "Relapse", "3 more months"],
["Repeated iron for thalassaemia trait", "Iron overload, no benefit", "Electrophoresis"],
["Iron in acute phase of SAM", "Harm", "Follow SAM protocol"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the WHO 2024 Hb cutoff for children aged 6–23 months?", "Below 105 g/L at sea level, adjusted for altitude.")}
${qa("Intern/MO", "What is the treatment dose of iron in children?", "3 mg/kg/day elemental iron (up to 6 mg/kg/day), for 3 months after Hb normalises.")}
${qa("Intern/MO", "When should a child with anaemia be transfused (WHO)?", "Hb under 4 g/dL, or under 6 g/dL with respiratory distress, heart failure, shock, impaired consciousness or high malaria parasitaemia.")}
${qa("Specialist", "How do you distinguish thalassaemia trait from iron deficiency?", "Thalassaemia trait has normal ferritin, high red cell count and a low MCV out of proportion to Hb; confirm with electrophoresis.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Campbell RK, Aguayo VM, Kang Y et al. Epidemiology of anaemia in children, adolescent girls, and women in Bhutan. <i>Matern Child Nutr</i> 2018;14 Suppl 4:e12740. <a href="https://doi.org/10.1111/mcn.12740" target="_blank" rel="noopener">doi:10.1111/mcn.12740</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.3 Anaemia; IMNCI 2024; NEML 2025.</li>
<li id="ref-3">World Health Organization. Guideline on haemoglobin cutoffs to define anaemia in individuals and populations. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240088542" target="_blank" rel="noopener">who.int/publications/i/item/9789240088542</a></li>
<li id="ref-4">Baker RD, Greer FR; Committee on Nutrition, AAP. Diagnosis and prevention of iron deficiency and iron-deficiency anemia in infants and young children (0–3 years). <i>Pediatrics</i> 2010;126:1040–1050. <a href="https://doi.org/10.1542/peds.2010-2576" target="_blank" rel="noopener">doi:10.1542/peds.2010-2576</a></li>
<li id="ref-5">World Health Organization. Pocket Book of Hospital Care for Children, 2nd ed. Geneva: WHO; 2013 (severe anaemia and transfusion). <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-6">World Health Organization. Guideline: daily iron supplementation in infants and children. Geneva: WHO; 2016. <a href="https://www.who.int/publications/i/item/9789241549523" target="_blank" rel="noopener">who.int</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["WHO 2024 child cutoffs", "<span class='pass'>Verified</span>", "From WHO PDF"],
["Bhutan prevalence", "<span class='pass'>Checked</span>", "Campbell 2018 (NNS 2015)"],
["Bhutan thalassaemia/HbE prevalence", "<span class='flag'>Evidence gap</span>", "Not found"],
["Paediatric iron syrup on NEML", "<span class='flag'>Gap</span>", "Only the adult IFA tablet is listed"],
["Images", "<span class='pass'>Done</span>", "CC BY 2.0"]], "qc")}
` }
]
});
