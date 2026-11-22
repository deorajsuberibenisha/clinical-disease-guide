/* Anaemia — adults: approach and iron deficiency */
registerPage({
id: "anaemia-adult",
title: "Anaemia — Adults",
subtitle: "Adjust for altitude, read the MCV, find the cause of iron deficiency before you treat it, give iron once a day or on alternate days, and transfuse by the patient rather than the number",
age: "Adults", specs: ["onc", "medicine", "gi", "ph"],
keywords: ["anaemia", "anemia", "iron deficiency anaemia", "IDA", "microcytic", "macrocytic", "megaloblastic", "B12 deficiency", "folate deficiency", "haemolysis", "ferritin", "MCV", "iron sucrose", "Ganzoni", "transfusion threshold", "altitude haemoglobin", "WHO haemoglobin cutoffs 2024", "hookworm", "menorrhagia"],
related: ["anaemia-child", "anaemia-preg", "ckd-adult", "ugib-adult", "apd-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Anaemia is a sign, not a diagnosis. In Bhutan it is extremely common, mostly from iron deficiency, but iron deficiency itself always has a cause — blood loss from the gut or uterus, worms, poor diet, or poor absorption — and in an older adult that cause may be cancer. Measure correctly, classify by MCV, look for the cause, and treat both.</p>
<div class="glance">
<div><h4>Define it (WHO 2024)</h4><p>Hb below 120 g/L (women) or 130 g/L (men) at sea level — <b>add 14 g/L in Thimphu or Paro</b> (2000–2499 m).</p></div>
<div><h4>Small cells (low MCV)</h4><p>Iron deficiency (ferritin low), thalassaemia trait, anaemia of inflammation.</p></div>
<div><h4>Large cells (high MCV)</h4><p>B12 or folate deficiency, alcohol, liver disease, hypothyroidism, drugs, haemolysis (reticulocytes).</p></div>
<div><h4>Iron</h4><p>${dr("ferrous")} one tablet daily or on alternate days; 3 months beyond a normal Hb. IV ${dr("iron_sucrose")} if oral fails.</p></div>
<div><h4>Find the cause</h4><p>Men and post-menopausal women with iron deficiency need gut investigation (endoscopy ± colonoscopy).</p></div>
<div><h4>Transfuse</h4><p>Usually only below 70 g/L (80 g/L with heart disease) or with symptoms or bleeding.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The 2015 National Nutrition Survey found anaemia in 36% of non-pregnant women (Campbell 2018).${r(6, 7)} The STG (§4.3) groups causes into nutritional, destruction or loss, and reduced production; lists CBC, blood picture, LDH, bilirubin, Coombs test and reticulocytes; gives iron and, if needed, transfusion to a minimum Hb of 7 g/dL; and advises monthly CBC and referral for iron, B12 and folate studies. Much of Bhutan lives above 1000 m, so the WHO 2024 altitude adjustment changes who counts as anaemic. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Anaemia is a haemoglobin concentration below the normal range for age, sex, pregnancy status, altitude of residence and smoking (WHO 2024).${r(1)}</p>
${tbl(["Mechanism", "Causes", "Clues"], [
["<b>Iron deficiency</b> (commonest)", "Menstrual loss, GI bleeding (ulcer, NSAIDs, cancer, piles), hookworm, poor diet, pregnancy, coeliac disease, H. pylori, gastrectomy", "Low MCV, low ferritin"],
["B12 or folate deficiency", "Vegetarian diet, pernicious anaemia, metformin, alcohol, malabsorption", "High MCV, hypersegmented neutrophils"],
["Anaemia of inflammation / chronic disease", "TB, HIV, CKD, rheumatoid arthritis, cancer", "Normal or low MCV, normal or high ferritin"],
["Haemolysis", "G6PD deficiency (drugs, infections), autoimmune, malaria, snake envenoming", "Jaundice, high reticulocytes and LDH, low haptoglobin"],
["Bone marrow failure or infiltration", "Aplastic anaemia, leukaemia, myeloma, MDS", "Low white cells or platelets as well"],
["Haemoglobinopathy", "β-thalassaemia trait, HbE (South and South-East Asia)", "Low MCV with normal ferritin; family history"],
["Kidney disease", "Low erythropoietin", "See <a href=\"#/d/ckd-adult\">CKD</a>"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How iron deficiency develops", [
F.s("Iron loss or poor intake exceeds absorption"), F.a,
F.s("Stores fall first: ferritin drops (iron deficiency without anaemia)"), F.a,
F.s("Iron-restricted red cell production: MCV and MCH fall"), F.a,
F.e("Anaemia: tiredness, breathlessness, reduced work capacity; in severe cases heart failure")])}
<p>Hepcidin, the liver's iron hormone, rises after each iron dose and blocks absorption for about 24–48 hours. That is why <b>once-daily or alternate-day</b> iron is absorbed as well as, or better than, twice- or thrice-daily dosing, with fewer side effects. Inflammation also raises hepcidin, which explains why iron tablets work poorly in infection and chronic disease.${r(2, 3)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Definition", "Hb below the normal range for age and sex", "WHO 2024: new cutoffs plus mandatory adjustment for elevation of residence and smoking", "WHO 2024 with altitude adjustment (calculator)"],
["Oral iron dosing", "Iron supplements (dose not stated)", "One tablet daily or on alternate days (BSG 2021; Stoffel 2017)", "Once daily or alternate days"],
["Investigating iron deficiency", "Refer for iron, B12, folate studies where necessary", "BSG 2021: upper and lower GI investigation for men and post-menopausal women; coeliac serology for all", "BSG approach where endoscopy is available"],
["Transfusion threshold", "Hb at least 7 g/dL in uncomplicated patients", "AABB 2023: 70 g/L for most stable inpatients; 75–80 g/L in cardiac surgery or cardiovascular disease", "Consistent"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Points to", "Comment"], [
["Tiredness, breathlessness on exertion, palpitations, dizziness, headache", "Any anaemia", "Slowly developing anaemia may cause few symptoms even at low Hb"],
["Pallor of conjunctiva, palms, nail beds", "Anaemia", "Unreliable in mild anaemia: measure Hb"],
["Koilonychia, angular stomatitis, glossitis, pica (eating earth, ice)", "Iron deficiency", "—"],
["Jaundice, dark urine, splenomegaly", "Haemolysis", "Ask about G6PD-triggering drugs or fava beans"],
["Numbness, unsteady gait, memory loss, smooth red tongue", "B12 deficiency", "Treat urgently"],
["Weight loss, change in bowel habit, dyspepsia, melaena", "GI cancer or ulcer", "Investigate"],
["Bruising, infections, bone pain", "Marrow failure or infiltration", "Refer"]])}
${box("red", "Danger signs", `<ul><li>Breathless at rest, chest pain, heart failure</li><li>Active bleeding, melaena</li><li>Hb under 70 g/L with symptoms</li><li>Low platelets or white cells as well (pancytopenia)</li><li>Neurological signs of B12 deficiency</li></ul>`)}
<h3>The typical patient</h3>
<p>A 58-year-old man from Thimphu feels tired and breathless walking uphill. Hb 10.6 g/dL, MCV 71, ferritin 6 µg/L, platelets normal. He takes diclofenac for knee pain. At Thimphu's altitude the anaemia cutoff is about 14.4 g/dL, so he is clearly anaemic. <b>This is iron-deficiency anaemia in an older man until proven otherwise a GI cause.</b> He needs the NSAID stopped, oral iron one tablet daily, H. pylori testing, coeliac serology, and referral for upper endoscopy and colonoscopy — not iron tablets alone.</p>
` },

{ id: "ddx", title: "Differential diagnosis by MCV", html: `
${tbl(["MCV", "Main causes", "Key test"], [
["Low (under 80 fL)", "Iron deficiency; thalassaemia trait; anaemia of inflammation; sideroblastic (rare)", "Ferritin (low in iron deficiency; under 30 µg/L diagnostic, under 100 if inflammation); Hb electrophoresis if ferritin normal"],
["Normal (80–100 fL)", "Acute blood loss, chronic disease, CKD, mixed deficiency, early iron deficiency, haemolysis, marrow failure", "Reticulocytes, creatinine, film, LDH"],
["High (over 100 fL)", "B12 or folate deficiency, alcohol, liver disease, hypothyroidism, drugs (methotrexate, hydroxyurea, some ARVs), haemolysis (reticulocytes), MDS", "B12, folate, TSH, LFT, film"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["CBC with MCV, MCH, white cells, platelets", "Classify", "—", "Essential"],
["Peripheral blood film", "Morphology (pencil cells, target cells, hypersegmented neutrophils, spherocytes, blasts)", "STG", "Essential"],
["<b>Ferritin</b>", "Iron stores", "Under 30 µg/L = iron deficiency; acute-phase reactant — under 100 µg/L may still be deficient with inflammation", "Essential if microcytic"],
["Reticulocyte count, LDH, bilirubin, Coombs test", "Haemolysis or bleeding (STG)", "—", "If normocytic or suspected haemolysis"],
["B12, folate", "Macrocytosis", "Referral laboratories", "If macrocytic"],
["Creatinine, LFT, TSH, CRP", "Chronic disease causes", "—", "Selected"],
["Stool for ova (hookworm), occult blood", "Worms, GI loss", "—", "Iron deficiency"],
["Coeliac serology (tTG-IgA), H. pylori test", "Malabsorption, ulcer", "BSG 2021", "Iron deficiency"],
["Upper endoscopy ± colonoscopy", "GI source", "Men, post-menopausal women, alarm features", "Selected"],
["Hb electrophoresis (HPLC)", "Thalassaemia trait, HbE", "Before labelling iron-refractory", "Selected"],
["G6PD screen", "Haemolysis after drugs or infection", "Before primaquine, dapsone, rasburicase", "Selected"]])}
` },

{ id: "staging", title: "Is it anaemia, and how much iron?", html: `
<p>Use the WHO 2024 tool for the altitude-adjusted cutoff and severity, then the Ganzoni tool if IV iron is planned.${r(1)}</p>
<div class="calc" data-calc="hbcutoff"></div>
<div class="calc" data-calc="irondeficit"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Iron-deficiency anaemia</h3>
<ol><li><b>Treat the cause:</b> stop NSAIDs; treat H. pylori, ulcers, piles; ${dr("albendazole")} 400 mg once for hookworm; manage heavy menstrual bleeding (tranexamic acid, hormonal treatment, gynaecology); investigate the gut in men and post-menopausal women.${r(2)}</li>
<li>${dr("ferrous")} (ferrous sulphate 200 mg = 65 mg elemental iron, with folic acid 0.4 mg) <b>one tablet once daily, or on alternate days</b> if side effects; empty stomach or with orange juice; not with tea, milk, calcium or antacids.${r(3)}</li>
<li>Expect Hb to rise about 20 g/L in 3–4 weeks. If not: check adherence, ongoing blood loss, malabsorption (coeliac, H. pylori), wrong diagnosis (thalassaemia, inflammation).</li>
<li>Continue for 3 months after Hb is normal; check Hb and ferritin then.</li>
<li><b>IV iron</b> (${dr("iron_sucrose")}) if oral iron is not tolerated, fails, absorption is impaired, or rapid repletion is needed (before surgery, late pregnancy, CKD). Dose by the Ganzoni formula; 200 mg per dose.</li></ol>
<h3>B. B12 and folate deficiency</h3>
<ul><li>${dr("vitamin_b12")}: hydroxocobalamin 1 mg IM three times a week for 2 weeks, then every 3 months (pernicious anaemia); alternate days while neurological signs improve. Not on NEML 2025 — check local supply; high-dose oral B12 (1 mg daily) is an alternative.${r(4)}</li>
<li>${dr("folic_acid")} 5 mg daily for 4 months — <b>only after B12 is checked or replaced</b>.</li>
<li>Check potassium in the first days of treating severe megaloblastic anaemia.</li></ul>
<h3>C. Haemolysis and marrow failure</h3>
<ul><li>Stop the trigger (G6PD: drugs such as primaquine, dapsone, nitrofurantoin, high-dose aspirin; infections); folic acid; transfuse if severe; refer autoimmune haemolysis, pancytopenia or blasts to haematology.</li></ul>
<h3>D. Transfusion</h3>
<ul><li>Restrictive: transfuse below 70 g/L (STG minimum 7 g/dL), below 80 g/L with cardiovascular disease, or at any level with active bleeding or severe symptoms. One unit at a time with reassessment; slower with diuretic cover in heart failure.${r(5)}</li>
<li>Do not transfuse stable iron-deficiency or B12-deficiency anaemia that will respond to replacement, unless symptomatic or Hb very low.</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Hb, IFA tablets, albendazole; dietary advice; refer severe anaemia, men and older women with iron deficiency, macrocytosis, pancytopenia"],
["District hospital", "CBC, film, ferritin where available, IV iron sucrose, transfusion"],
["Referral hospital", "Endoscopy, colonoscopy, B12/folate, electrophoresis, haematology"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("ferrous"), "One tablet (65 mg elemental iron) once daily or alternate days", "3 months after Hb normal"],
[dr("iron_sucrose"), "200 mg IV per dose up to 3 times weekly; total by Ganzoni", "Observe 30 minutes"],
[dr("folic_acid"), "5 mg daily × 4 months", "After B12 checked"],
[dr("vitamin_b12"), "Hydroxocobalamin 1 mg IM 3×/week × 2 weeks, then 3-monthly", "Not on NEML 2025"],
[dr("albendazole"), "400 mg once", "Hookworm"],
[dr("tranexamic_acid"), "1 g three times daily during heavy periods", "Menorrhagia"]])}
` },

{ id: "populations", title: "Older adults, women and special groups", html: `
<ul><li><b>Older adults:</b> iron deficiency means GI investigation; transfuse cautiously (heart failure).</li>
<li><b>Women of reproductive age:</b> heavy periods and pregnancy are commonest causes; treat menorrhagia. Pregnancy: see <a href="#/d/anaemia-preg">anaemia in pregnancy</a>.</li>
<li><b>Vegetarians and monks:</b> B12 deficiency is common with strict vegetarian diets — consider B12 levels with macrocytosis or neuropathy.</li>
<li><b>Alcohol use:</b> macrocytosis, folate deficiency, GI bleeding.</li></ul>
` },

{ id: "scenarios", title: "Anaemia with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["CKD", "Erythropoietin plus IV iron (see CKD chapter)", "Low erythropoietin"],
["Heart failure", "IV iron improves symptoms in iron deficiency (ferritin under 100, or 100–299 with TSAT under 20%)", "ESC guidance"],
["TB, HIV", "Treat infection; anaemia of inflammation improves", "Hepcidin"],
["On metformin long term", "Check B12", "Malabsorption"],
["G6PD deficiency", "Avoid oxidant drugs", "Haemolysis"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["High-output heart failure", "Breathless, oedema, gallop", "Careful transfusion with diuretic"],
["Angina, falls, confusion in elderly", "—", "Treat anaemia and cause"],
["Missed GI cancer", "Iron deficiency in older adult", "Endoscopy"],
["Irreversible B12 neuropathy", "Numbness, ataxia", "Early B12"],
["Transfusion reactions, iron overload", "Fever, breathlessness; repeated transfusions", "Restrictive transfusion"]])}
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Hb at 2–4 weeks; monthly CBC during treatment and for a few months after (STG); ferritin at 3 months.</li>
<li>Prevention: iron-rich foods (meat, liver, pulses, green leafy vegetables) with vitamin C; tea and milk away from meals; deworming; treat heavy periods.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Your blood is low in iron. The tablets will help, but we also need to find out why it happened."</li><li>Take one tablet a day (or every other day) with water or orange juice, not with tea or milk. Black stools are normal.</li><li>Keep taking it for 3 months after your blood count is normal.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Black or bloody stools, vomiting blood</li><li>Breathless at rest, chest pain, fainting</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Koilonychia", src: "images/koilonychia.jpg", mod: "Clinical photograph", ctx: "Iron-deficiency anaemia", loc: "Fingernails", find: "Thin, flattened, spoon-shaped nails", signs: "Koilonychia", interp: "A sign of long-standing iron deficiency; look for the source of iron loss", by: "CHeitz", page: "https://commons.wikimedia.org/wiki/File:Koilonychia_iron_deficiency_anemia.jpg", lic: "CC BY 2.0" })}
${fig({ title: "Iron-deficiency anaemia on blood film", src: "images/ida-smear.jpg", mod: "Peripheral blood smear", ctx: "Advanced iron-deficiency anaemia", loc: "Red cells", find: "Small, pale red cells with large central pallor; pencil cells", signs: "Microcytic hypochromic anaemia", interp: "Confirm with low ferritin; distinguish from thalassaemia trait", by: "Ed Uthman", page: "https://commons.wikimedia.org/wiki/File:Iron-deficiency_Anemia,_Peripheral_Blood_Smear_(4422704616).jpg", lic: "CC BY 2.0" })}
</div>
<div class="pair">
${fig({ title: "Hypersegmented neutrophil", src: "images/hypersegmented-neutrophil.jpg", mod: "Peripheral blood smear", ctx: "Megaloblastic anaemia", loc: "Neutrophil", find: "Neutrophil with six or more nuclear lobes", signs: "Hypersegmentation", interp: "Points to B12 or folate deficiency; check both before giving folic acid", by: "Ed Uthman", page: "https://commons.wikimedia.org/wiki/File:Hyperlobated_Neutrophil_(8612790151).jpg", lic: "CC BY 2.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult with low haemoglobin", [
F.s("Altitude-adjusted Hb (WHO 2024); CBC, MCV, film"), F.a,
F.d("MCV?"), F.a,
F.b([["Low", F.s("Ferritin: low → iron deficiency → find cause + iron")], ["High", F.s("B12, folate, TSH, LFT, alcohol → replace B12 first")]]), F.a,
F.b([["Normal", F.s("Reticulocytes, creatinine, LDH, Coombs → bleeding, haemolysis, CKD, marrow")], ["Pancytopenia or blasts", F.e("Refer to haematology")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Adjust for altitude.</b> A Hb of 12.5 g/dL in a Thimphu woman is anaemia.</li>
<li>Iron deficiency in a man or post-menopausal woman needs a cause.</li>
<li>Low MCV with normal ferritin: think thalassaemia trait or inflammation.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Iron without looking for blood loss", "Missed GI cancer or ulcer", "Investigate"],
["Three iron tablets a day", "More side effects, no better absorption", "Once daily or alternate days"],
["Stopping iron when Hb is normal", "Stores empty; relapse", "3 more months"],
["Folic acid alone in macrocytic anaemia", "B12 neuropathy progresses", "Check or give B12 first"],
["Transfusing stable deficiency anaemia", "Risk without benefit", "Replace the deficiency"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the WHO 2024 Hb cutoff for anaemia in non-pregnant women?", "Below 120 g/L at sea level, adjusted upward for altitude of residence and smoking.")}
${qa("Student", "Give two causes of microcytic anaemia.", "Iron deficiency and thalassaemia trait (also anaemia of inflammation).")}
${qa("Intern/MO", "What is the altitude adjustment for a person living at 2300 m?", "14 g/L is added to the cutoff (or subtracted from the measured Hb).")}
${qa("Intern/MO", "Why give oral iron once daily or on alternate days?", "Each dose raises hepcidin, which blocks absorption for 24–48 hours; less frequent dosing absorbs as well with fewer side effects.")}
${qa("Specialist", "A man of 60 has iron-deficiency anaemia. What investigations are required?", "Coeliac serology, H. pylori, and upper and lower GI endoscopy (BSG 2021), plus urinalysis.")}
${qa("Specialist", "What are restrictive transfusion thresholds?", "70 g/L for most stable adults; 75–80 g/L with cardiovascular disease (AABB 2023).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">World Health Organization. Guideline on haemoglobin cutoffs to define anaemia in individuals and populations. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240088542" target="_blank" rel="noopener">who.int/publications/i/item/9789240088542</a></li>
<li id="ref-2">Snook J, Bhala N, Beales ILP et al. British Society of Gastroenterology guidelines for the management of iron deficiency anaemia in adults. <i>Gut</i> 2021;70:2030–2051. <a href="https://doi.org/10.1136/gutjnl-2021-325210" target="_blank" rel="noopener">doi:10.1136/gutjnl-2021-325210</a></li>
<li id="ref-3">Stoffel NU, Cercamondi CI, Brittenham G et al. Iron absorption from oral iron supplements given on consecutive versus alternate days and as single morning doses versus twice-daily split dosing in iron-depleted women. <i>Lancet Haematol</i> 2017;4:e524–e533. <a href="https://doi.org/10.1016/S2352-3026(17)30182-5" target="_blank" rel="noopener">doi:10.1016/S2352-3026(17)30182-5</a></li>
<li id="ref-4">Devalia V, Hamilton MS, Molloy AM. Guidelines for the diagnosis and treatment of cobalamin and folate disorders. <i>Br J Haematol</i> 2014;166:496–513. <a href="https://doi.org/10.1111/bjh.12959" target="_blank" rel="noopener">doi:10.1111/bjh.12959</a></li>
<li id="ref-5">Carson JL, Stanworth SJ, Guyatt G et al. Red blood cell transfusion: 2023 AABB international guidelines. <i>JAMA</i> 2023;330:1892–1902. <a href="https://doi.org/10.1001/jama.2023.12914" target="_blank" rel="noopener">doi:10.1001/jama.2023.12914</a></li>
<li id="ref-6">Campbell RK, Aguayo VM, Kang Y et al. Epidemiology of anaemia in children, adolescent girls, and women in Bhutan. <i>Matern Child Nutr</i> 2018;14 Suppl 4:e12740. <a href="https://doi.org/10.1111/mcn.12740" target="_blank" rel="noopener">doi:10.1111/mcn.12740</a></li>
<li id="ref-7">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.3 Anaemia; NEML 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["WHO 2024 cutoffs and altitude table", "<span class='pass'>Verified</span>", "Read from the WHO PDF; in calculator"],
["Bhutan town elevations in calculator", "<span class='flag'>Approximate</span>", "Rounded values; enter the exact elevation where known"],
["Bhutan STG content", "<span class='pass'>Verified</span>", "§4.3 (text partly missing in PDF)"],
["B12 on NEML", "<span class='flag'>Gap</span>", "Not listed"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a physician or haematologist"],
["Images", "<span class='pass'>Done</span>", "CC BY 2.0"]], "qc")}
` }
]
});
