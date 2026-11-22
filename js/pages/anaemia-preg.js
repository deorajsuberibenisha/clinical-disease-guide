/* Anaemia in pregnancy and after birth */
registerPage({
id: "anaemia-preg",
title: "Anaemia in Pregnancy & After Birth",
subtitle: "Daily iron and folic acid for every mother, trimester-specific and altitude-adjusted cutoffs, when to switch to IV iron, deworming after the first trimester, and getting Hb up before the bleeding risk of delivery",
age: "Pregnancy", specs: ["obg", "onc", "ph"],
keywords: ["anaemia in pregnancy", "anemia pregnancy", "iron folic acid pregnancy", "IFA", "IV iron pregnancy", "iron sucrose pregnancy", "postpartum anaemia", "thalassaemia pregnancy", "deworming pregnancy", "albendazole pregnancy", "haemoglobin pregnancy cutoff", "WHO 2024 pregnancy trimester"],
related: ["anaemia-adult", "anaemia-child", "dm-pregnancy", "hepatitis-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Anaemia makes pregnancy riskier for both mother and baby: preterm birth, low birth weight, and — above all — a mother who cannot tolerate even ordinary blood loss at delivery. Most of it is iron deficiency, which daily iron-folic acid prevents and treats. The task is to give it to every woman, check Hb at each visit, and act early when it is not working.</p>
<div class="glance">
<div><h4>Define it (WHO 2024)</h4><p>Hb below 110 g/L (1st and 3rd trimester) or 105 g/L (2nd trimester) — add the altitude adjustment.</p></div>
<div><h4>Every woman</h4><p>${dr("ferrous")} (IFA: 65 mg iron + 0.4 mg folic acid) one tablet daily from booking, through pregnancy and 3 months after birth.</p></div>
<div><h4>Anaemic</h4><p>Check adherence; IFA once or twice daily; recheck Hb in 2–4 weeks; deworm after the first trimester.</p></div>
<div><h4>IV iron</h4><p>${dr("iron_sucrose")} in 2nd or 3rd trimester if oral iron fails, is not tolerated, or Hb is low after 34 weeks.</p></div>
<div><h4>Refer</h4><p>Hb under 70 g/L, symptoms, failure to respond, or suspected thalassaemia (STG: refer if Hb under 7 g/dL).</p></div>
<div><h4>After birth</h4><p>Check Hb after significant bleeding; iron for 3 months; IV iron if Hb under 100 g/L and symptomatic.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§11.1) defines anaemia in pregnancy as Hb under 11 g/dL (mild 9–11, moderate 7–8.9, severe under 7), gives iron with folic acid and vitamin C daily from 12 weeks, deworming at 20 weeks, a recheck in 2 weeks if anaemic, and referral if Hb is under 7 g/dL or not improving. The STG prints albendazole as “100 mg”; the national formulary dose is 400 mg, which this guide uses. In the 2015 National Nutrition Survey, 28% of pregnant women were anaemic (Campbell 2018). ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
${tbl(["Cause", "Clues", "Notes"], [
["<b>Iron deficiency</b>", "Low MCV and ferritin; poor diet, closely spaced pregnancies, heavy periods before pregnancy, teenage pregnancy", "Most common"],
["Folate deficiency", "Macrocytosis, twins, poor diet, anti-seizure drugs", "Folic acid in IFA"],
["Hookworm and other worms", "Rural, barefoot", "Albendazole after the first trimester"],
["Thalassaemia trait, HbE", "Low MCV with normal ferritin; family history", "Partner testing"],
["Malaria (travel), HIV, TB", "Fever, weight loss", "Treat infection"],
["Haemolysis, bleeding", "Jaundice; antepartum haemorrhage", "—"],
["Physiological haemodilution", "Plasma volume rises more than red cells", "Why the cutoffs are lower in pregnancy"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Iron in pregnancy", [
F.s("Pregnancy needs about 1000 mg extra iron (baby, placenta, expanded red cell mass, delivery loss)"), F.a,
F.s("Most women start with low stores"), F.a,
F.d("Daily IFA taken?"), F.a,
F.b([["Yes", F.ok("Hb maintained; stores for baby")], ["No", F.e("Anaemia: fatigue, infection risk, preterm birth, low birth weight, poor tolerance of PPH")]])])}
<p>The baby takes iron from the mother even when she is deficient, but babies of iron-deficient mothers are born with smaller stores and become anaemic earlier in infancy.${r(1, 2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Cutoffs and severity", "Hb under 11 g/dL; mild 9–11, moderate 7–8.9, severe under 7", "WHO 2024: trimester-specific (110 / 105 / 110 g/L), mild 100–109 (95–104 second trimester), moderate 70–99 (70–94), severe under 70; altitude adjustment", "WHO 2024 with altitude adjustment; severe threshold the same"],
["Start of IFA", "From 12 weeks", "WHO 2016 ANC: daily iron 30–60 mg and folic acid 0.4 mg throughout pregnancy, from as early as possible (folic acid ideally before conception)", "From booking; folic acid before conception where possible"],
["Albendazole dose", "Printed as 100 mg", "NEMF and WHO: 400 mg single dose after the first trimester", "400 mg"],
["IV iron", "Not mentioned", "BSH 2020, FIGO: IV iron in 2nd/3rd trimester for intolerance, non-response, or Hb under 100 g/L after 34 weeks", "IV iron sucrose (on NEML to PHC)"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Points to", "Comment"], [
["Tiredness, breathlessness, palpitations, dizziness", "Anaemia", "Overlap with normal pregnancy"],
["Pallor of conjunctiva, palms, nail beds; pica (earth, ice)", "Iron deficiency", "Measure Hb at every visit"],
["Breathless at rest, oedema, fast pulse", "Severe anaemia with heart failure", "Emergency"],
["Jaundice", "Haemolysis, hepatitis", "See hepatitis chapter"],
["Fever", "Malaria, UTI, TB", "Treat cause"]])}
${box("red", "Danger signs — refer", `<ul><li>Hb under 70 g/L, or breathlessness at rest</li><li>Heart failure signs</li><li>Bleeding in pregnancy</li><li>Severe anaemia near term (high risk at delivery)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 24-year-old woman at 30 weeks from Paro feels tired. She stopped her IFA tablets because they upset her stomach. Hb 9.8 g/dL; Paro is about 2200–2300 m, so the adjustment is 14 g/L and her adjusted Hb is 84 g/L: moderate anaemia. <b>This is iron-deficiency anaemia in the third trimester.</b> She should try one IFA tablet every other day at bedtime with juice; if Hb has not risen in 2–3 weeks, or she cannot tolerate it, IV iron sucrose (about 1000 mg in five doses by the Ganzoni formula) so that she reaches delivery with a safe Hb. She also needs albendazole 400 mg and a plan for active management of the third stage.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against iron deficiency", "Best test"], [
["Thalassaemia or HbE trait", "Low MCV, normal ferritin, family history", "No response to iron", "Hb electrophoresis; test partner"],
["Folate or B12 deficiency", "High MCV", "—", "B12, folate"],
["Malaria", "Travel, fever", "—", "RDT"],
["Haemolysis (G6PD, HELLP)", "Jaundice, low platelets, high BP", "—", "Film, LDH, LFT"],
["Hidden blood loss", "Haemorrhoids, ulcer, APH", "—", "History, examination"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Hb at booking, 28 weeks and 36 weeks (and each visit if anaemic)", "Screening", "Adjust for trimester and altitude", "Essential"],
["CBC, MCV, film", "Type of anaemia", "—", "If anaemic"],
["Ferritin", "Confirms iron deficiency (under 30 µg/L)", "Not needed to start iron in typical cases", "Where available"],
["Hb electrophoresis", "Low MCV with normal ferritin, family history", "Partner testing if positive", "Selected"],
["Stool ova, malaria RDT, urine", "Worms, malaria, UTI", "—", "Selected"]])}
` },

{ id: "staging", title: "Is it anaemia, and how much IV iron?", html: `
<p>Choose the trimester and place of residence; use the Ganzoni tool with pre-pregnancy weight (target Hb 11 g/dL in pregnancy).${r(3)}</p>
<div class="calc" data-calc="hbcutoff"></div>
<div class="calc" data-calc="irondeficit"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Prevention (every pregnant woman)</h3>
<ul><li>${dr("ferrous")} IFA tablet <b>once daily</b> from booking until 3 months after delivery; with water or juice, not tea, milk or calcium tablets (separate calcium by 2 hours).${r(1, 4)}</li>
<li>${dr("albendazole")} 400 mg once after the first trimester (STG: at 20 weeks).</li>
<li>Diet: an extra meal a day, iron-rich foods, vitamin C.</li></ul>
<h3>B. Anaemia found</h3>
<ol><li>Check adherence and side effects; try alternate-day or night-time dosing; treat constipation.</li>
<li>Treatment dose: 1 tablet once or twice daily (about 65–130 mg elemental iron).</li>
<li>Recheck Hb at 2–4 weeks (STG: 2 weeks): expect a rise of about 10 g/L in 2 weeks.</li>
<li>No rise, intolerance, or Hb under 100 g/L after 34 weeks: ${dr("iron_sucrose")} IV (second or third trimester), total dose by Ganzoni, 200 mg per dose.${r(5)}</li>
<li>Low MCV with normal ferritin or no response: Hb electrophoresis and partner testing.</li></ol>
<h3>C. Severe anaemia (Hb under 70 g/L)</h3>
<ul><li>Refer to a hospital with blood bank and obstetrics. Transfuse if near term, symptomatic, bleeding, or heart failure (one unit at a time, slowly, with furosemide if overloaded); IV iron if more than about 4 weeks from delivery and stable.</li></ul>
<h3>D. Delivery and after</h3>
<ul><li>Deliver in a facility; active management of the third stage; group and save.</li>
<li>Postpartum: Hb after significant bleeding; oral iron for 3 months; IV iron if Hb under 100 g/L with symptoms or intolerance; transfuse only for severe symptomatic anaemia or ongoing bleeding.</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "IFA for all, Hb each visit, albendazole; IV iron sucrose is listed to PHC level (with resuscitation equipment); refer Hb under 70 g/L"],
["District hospital", "CBC, IV iron, transfusion, delivery planning"],
["Referral hospital", "Electrophoresis, haematology, high-risk obstetrics"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("ferrous"), "IFA 1 tablet daily (prevention); 1–2 daily (treatment)", "Ferrous sulphate 200 mg + folic acid 0.4 mg"],
[dr("iron_sucrose"), "200 mg IV per dose; total by Ganzoni", "2nd/3rd trimester only"],
[dr("folic_acid"), "0.4 mg daily (5 mg if high risk)", "From before conception"],
[dr("albendazole"), "400 mg once after first trimester", "STG misprint 100 mg"],
[dr("furosemide"), "20–40 mg IV", "Overload during transfusion"]])}
` },

{ id: "populations", title: "Teenagers, multiple pregnancy and special groups", html: `
<ul><li><b>Adolescent pregnancy:</b> higher anaemia risk; extra nutritional support.</li>
<li><b>Twins:</b> higher iron and folate needs; check Hb more often.</li>
<li><b>Thalassaemia trait:</b> folic acid 5 mg; iron only if ferritin is low; partner testing and genetic counselling.</li>
<li><b>Women on anti-seizure drugs:</b> folic acid 5 mg (see epilepsy chapter).</li></ul>
` },

{ id: "scenarios", title: "Anaemia with other conditions in pregnancy", html: `
${tbl(["Situation", "What changes", "Why"], [
["Placenta praevia, previous PPH", "Correct anaemia early; plan delivery at a hospital with blood", "Bleeding risk"],
["Hepatitis B or C", "IV iron is fine; avoid in active infection", "—"],
["Malaria", "Treat malaria; iron after treatment", "Haemolysis"],
["Gestational diabetes", "Usual iron", "—"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Preterm birth, low birth weight", "—", "Prevention with IFA"],
["Poor tolerance of PPH; maternal death", "Shock after modest blood loss", "Correct anaemia before delivery"],
["Heart failure", "Severe anaemia", "Careful transfusion"],
["Infant anaemia", "Low iron stores in the baby", "Delayed cord clamping; infant iron where indicated"]])}
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Hb at each antenatal visit if anaemic, and at 2–4 weeks after starting treatment.</li>
<li>Postpartum IFA for 3 months; space the next pregnancy at least 2 years.</li></ul>
${box("green", "What to tell the mother", `<ul><li>"Iron tablets protect you and your baby, especially at delivery."</li><li>Take one tablet a day with water or juice — not with tea, milk or calcium. Black stools and mild constipation are normal.</li><li>If the tablets upset your stomach, take them at night or every other day, and tell us — there is an injection if needed.</li></ul>`)}
${box("red", "Come at once if", `<ul><li>Breathless at rest, chest pain, fainting</li><li>Any bleeding in pregnancy</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "Iron-deficiency anaemia on blood film", src: "images/ida-smear.jpg", mod: "Peripheral blood smear", ctx: "Iron deficiency", loc: "Red cells", find: "Small, pale red cells", signs: "Microcytic hypochromic picture", interp: "In pregnancy, start iron; if MCV is low with normal ferritin, test for thalassaemia trait", by: "Ed Uthman", page: "https://commons.wikimedia.org/wiki/File:Iron-deficiency_Anemia,_Peripheral_Blood_Smear_(4422704616).jpg", lic: "CC BY 2.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Anaemia in pregnancy", [
F.s("Hb at booking, 28 and 36 weeks (trimester and altitude adjusted)"), F.a,
F.d("Anaemic?"), F.a,
F.b([["No", F.ok("IFA daily; albendazole after first trimester")], ["Yes", F.d("Hb under 70 or symptomatic?")]]), F.a,
F.b([["Yes", F.e("Refer: transfuse or IV iron by gestation")], ["No", F.s("IFA 1–2 daily; recheck Hb in 2–4 weeks")]]), F.a,
F.d("Rising?"), F.a,
F.b([["Yes", F.ok("Continue to 3 months after birth")], ["No or intolerant", F.s("IV iron sucrose (2nd/3rd trimester); check for thalassaemia")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Every mother, every day: IFA.</b></li>
<li>A woman at 34 weeks with Hb under 100 g/L needs IV iron, not more time.</li>
<li>Use 400 mg albendazole, not the STG's misprinted 100 mg.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Accepting non-adherence", "Anaemic at delivery", "Address side effects; IV iron"],
["IV iron in the first trimester", "Avoided (limited safety data)", "Second trimester onward"],
["Missing thalassaemia trait", "Unneeded iron; missed partner testing", "Electrophoresis"],
["Ignoring altitude", "Underdiagnosis in highland women", "WHO 2024 adjustment"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the WHO 2024 Hb cutoffs in pregnancy?", "Under 110 g/L in the first and third trimesters and under 105 g/L in the second, adjusted for altitude.")}
${qa("Intern/MO", "What does the Bhutan IFA tablet contain?", "Ferrous sulphate 200 mg (65 mg elemental iron) and folic acid 0.4 mg.")}
${qa("Intern/MO", "When should IV iron be considered in pregnancy?", "In the second or third trimester for intolerance or non-response to oral iron, or Hb under 100 g/L after 34 weeks.")}
${qa("Specialist", "What is the correct albendazole dose for antenatal deworming?", "400 mg single dose after the first trimester (the STG's 100 mg is a misprint).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">World Health Organization. WHO recommendations on antenatal care for a positive pregnancy experience. Geneva: WHO; 2016. <a href="https://www.who.int/publications/i/item/9789241549912" target="_blank" rel="noopener">who.int/publications/i/item/9789241549912</a></li>
<li id="ref-2">Campbell RK, Aguayo VM, Kang Y et al. Epidemiology of anaemia in children, adolescent girls, and women in Bhutan. <i>Matern Child Nutr</i> 2018;14 Suppl 4:e12740. <a href="https://doi.org/10.1111/mcn.12740" target="_blank" rel="noopener">doi:10.1111/mcn.12740</a></li>
<li id="ref-3">World Health Organization. Guideline on haemoglobin cutoffs to define anaemia in individuals and populations. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240088542" target="_blank" rel="noopener">who.int/publications/i/item/9789240088542</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §11.1 Anaemia in pregnancy; NEMF 2022 (albendazole); NEML 2025.</li>
<li id="ref-5">Pavord S, Daru J, Prasannan N et al. UK guidelines on the management of iron deficiency in pregnancy. <i>Br J Haematol</i> 2020;188:819–830. <a href="https://doi.org/10.1111/bjh.16221" target="_blank" rel="noopener">doi:10.1111/bjh.16221</a></li>
<li id="ref-6">Bhutan Clinical Reference app: Anaemia in pregnancy (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG §11.1", "<span class='flag'>Indirect</span>", "Not in the PDF text layer; BCR transcription used"],
["Albendazole misprint", "<span class='pass'>Resolved</span>", "NEMF 400 mg used"],
["WHO 2024 pregnancy cutoffs", "<span class='pass'>Verified</span>", "From WHO PDF"],
["Images", "<span class='pass'>Done</span>", "CC BY 2.0"]], "qc")}
` }
]
});
