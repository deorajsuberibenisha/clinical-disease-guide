/* Thyroid disease — newborns, children and adolescents */
registerPage({
id: "thyroid-child",
title: "Thyroid Disease — Newborns, Children & Adolescents",
subtitle: "Congenital hypothyroidism is a preventable cause of intellectual disability: find it early, treat within two weeks; then acquired hypothyroidism, Graves' disease and neonatal thyrotoxicosis",
age: "Children & adolescents", specs: ["paeds", "endo", "neo"],
keywords: ["congenital hypothyroidism", "newborn screening", "cretinism", "hypothyroidism child", "juvenile hypothyroidism", "Hashimoto child", "Graves disease child", "neonatal thyrotoxicosis", "goitre child", "short stature thyroid", "levothyroxine child", "carbimazole child"],
related: ["thyroid-adult", "anaemia-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A baby with congenital hypothyroidism usually looks normal at birth. Treated within the first two weeks, development is normal; untreated, the brain damage is permanent. In older children, slowing growth is often the only clue.</p>
<div class="glance">
<div><h4>Newborn clues</h4><ul><li>Prolonged jaundice</li><li>Poor feeding, constipation, sleepy</li><li>Large tongue, umbilical hernia, wide fontanelle</li></ul></div>
<div><h4>Older child</h4><ul><li><b>Slowing growth</b>, delayed bone age</li><li>Tiredness, falling school performance</li><li>Goitre; delayed or early puberty</li></ul></div>
<div><h4>Treat</h4><p>Newborn: ${dr("thyroxine")} <b>10–15 microgram/kg/day</b>, within 2 weeks of birth.</p></div>
<div><h4>Graves' in children</h4><p>${dr("carbimazole")} 0.75 mg/kg/day; propranolol; <b>no PTU</b> (liver failure).</p></div>
<div><h4>Babies of mothers with Graves'</h4><p>Check for neonatal thyrotoxicosis in the first two weeks.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG lists congenital hypothyroidism as a cause but gives no paediatric protocol. Universal newborn thyroid screening was not confirmed for Bhutan at the time of writing, so clinical suspicion matters: check TSH in any baby with prolonged jaundice and the features above. NEML thyroxine 25 microgram tablets can be crushed for infants. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes by age", html: `
${tbl(["Condition", "Causes", "Notes"], [
["<b>Congenital hypothyroidism</b> (about 1 in 2000–3000 births)", "Absent, small or misplaced thyroid (dysgenesis); defects in hormone making; iodine deficiency; maternal antithyroid drugs (transient)", "Commonest preventable cause of intellectual disability"],
["Acquired hypothyroidism", "Hashimoto's thyroiditis (adolescent girls, Down syndrome, type 1 diabetes, Turner syndrome); iodine deficiency", "Growth failure is the key sign"],
["Graves' disease", "TSH-receptor antibodies; adolescents, girls", "Behaviour change, falling grades, weight loss, tall stature"],
["Neonatal thyrotoxicosis", "Maternal TSH-receptor antibodies cross the placenta", "Days 1–14; can be life-threatening"],
["Central hypothyroidism", "Pituitary problems, after brain tumour treatment", "Low TSH with low free T4"]])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Why the first weeks matter", [
F.s("Thyroid hormone drives brain myelination and neuronal growth in the first 2–3 years"), F.a,
F.s("At birth, maternal T4 that crossed the placenta protects the baby briefly"), F.a,
F.d("Missing thyroid hormone after birth"), F.a,
F.b([["Treated within 2 weeks", F.ok("Normal development")], ["Late or no treatment", F.e("Permanent intellectual disability, short stature, deafness (cretinism)")]])])}
` },

{ id: "conflicts", title: "Where guidelines differ", html: `
${tbl(["Topic", "Bhutan STG 2024", "International (ESPE 2020, AAP 2023, BNFc)", "This guide"], [
["Newborn screening", "Not described", "Universal screening at 48–72 hours (TSH or T4)", "Screen where possible; otherwise test any baby with suggestive features " + LB.loc()],
["Starting dose", "Not given", "10–15 microgram/kg/day within 2 weeks", "As international"],
["Antithyroid drug in children", "Carbimazole (adult text)", "Carbimazole/methimazole only; PTU avoided (liver failure)", "As international"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Age", "Hypothyroidism", "Hyperthyroidism"], [
["Newborn", "Prolonged jaundice, poor feeding, hoarse cry, large tongue, umbilical hernia, large posterior fontanelle, constipation, hypothermia", "Irritability, poor weight gain, fast heart rate, goitre, prominent eyes (neonatal Graves')"],
["Child", "Slowed growth, delayed bone age and teeth, tiredness, constipation, goitre, poor school work", "Weight loss, hyperactivity, poor concentration, tremor, sweating, goitre, eye signs"],
["Adolescent", "Delayed (or occasionally early) puberty, heavy periods", "As adults; tall for age"]])}
<h3>The typical patient</h3>
<p>A 3-week-old girl from Samtse is still jaundiced, feeds slowly, sleeps a lot and has not opened her bowels for three days. She has a large tongue, an umbilical hernia and a wide posterior fontanelle. TSH is 180 mU/L with a low free T4. <b>This is congenital hypothyroidism</b>: prolonged jaundice with the classic soft signs and a very high TSH. Start thyroxine 12.5 microgram/kg/day today (do not wait for scans) and check TFTs at 2 and 4 weeks.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Breast-milk jaundice", "Well, feeding and growing", "Constipation, lethargy, hernia", "TSH, conjugated bilirubin"],
["Biliary atresia", "Pale stools, dark urine (conjugated)", "—", "Conjugated bilirubin, ultrasound"],
["Familial short stature, constitutional delay", "Normal growth velocity, family pattern", "Falling across centiles", "Growth chart, TSH"],
["ADHD, anxiety", "Behaviour change", "Weight loss, tachycardia, goitre", "TSH"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>TSH and free T4</b>", "Diagnosis", "Use age-specific ranges (newborn TSH is high in the first days)", "Essential"],
["Thyroid ultrasound or scan", "Absent or ectopic gland", "Must never delay treatment", "Optional"],
["TPO and TSH-receptor antibodies", "Hashimoto's or Graves'; maternal antibodies in newborns", "—", "Selected"],
["FBC, liver tests", "Before carbimazole", "—", "Essential for Graves'"],
["Growth chart, bone age", "Growth failure", "—", "Essential in older children"],
["Hearing test", "Congenital hypothyroidism", "—", "Recommended"]])}
` },

{ id: "staging", title: "Dose tool", html: `
<div class="calc" data-calc="thyroxdose"></div>
<p>Choose "Newborn" or "Child" in the tool. Adolescents near adult size use adult dosing.${r(1)}</p>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Congenital hypothyroidism</h3>
<ul><li>${dr("thyroxine")} <b>10–15 microgram/kg once daily</b>, started as soon as the diagnosis is made and within 2 weeks of birth: crush the tablet in a little breast milk or water and give from a spoon; do not mix with soya formula or iron.</li>
<li>Check free T4 and TSH at 2 and 4 weeks, then every 1–3 months in the first year, every 2–4 months until 3 years; keep free T4 in the upper half of normal and TSH normal.</li>
<li>At 3 years, a trial off treatment may be offered if a normal-sized gland was found (possible transient disease).</li>
<li>Developmental and hearing follow-up.</li></ul>
<h3>B. Acquired hypothyroidism</h3>
<ul><li>Thyroxine about 100 microgram/m²/day; increase slowly in long-standing cases (catch-up can be dramatic and may affect school behaviour).</li>
<li>Screen children with Down syndrome, Turner syndrome and type 1 diabetes yearly.</li></ul>
<h3>C. Graves' disease</h3>
<ul><li>${dr("carbimazole")} 0.75 mg/kg/day (maximum 30 mg) until euthyroid, then reduce; courses are longer than in adults (2 years or more); relapse is common.</li>
<li>${dr("propranolol")} 0.25–0.5 mg/kg three times daily for symptoms (avoid in asthma).</li>
<li><b>No propylthiouracil in children</b>: risk of fatal liver failure.</li>
<li>Agranulocytosis advice to the family.</li></ul>
<h3>D. Neonatal thyrotoxicosis</h3>
<ul><li>Check TFTs on day 3–5 and day 10–14 in babies of mothers with Graves' (especially with high antibodies or on treatment).</li>
<li>Treatment (specialist): carbimazole, propranolol, sometimes iodine; usually resolves in 1–3 months as maternal antibodies clear.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("thyroxine"), "Newborn 10–15 microgram/kg/day; child about 100 microgram/m²/day", "Crush; avoid soya and iron at the same time"],
[dr("carbimazole"), "0.75 mg/kg/day (max 30 mg)", "Agranulocytosis advice"],
[dr("propranolol"), "0.25–0.5 mg/kg three times daily", "Avoid in asthma"],
[dr("ptu"), "Avoid in children", "Liver failure"]])}
` },

{ id: "populations", title: "Children at higher risk", html: `
<ul><li>Down syndrome, Turner syndrome, type 1 diabetes, coeliac disease: yearly TSH.</li>
<li>Preterm and sick newborns: delayed TSH rise; repeat testing at 2–4 weeks.</li>
<li>Babies of mothers on antithyroid drugs: transient hypothyroidism possible.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Very high TSH but no scan available", "Treat now", "Scans never justify delay"],
["Family stops thyroxine after symptoms improve", "Explain lifelong need; check TSH", "Relapse harms growth and learning"],
["Graves' relapse in an adolescent", "Refer for radioiodine or surgery", "Long antithyroid courses fail often"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>Early-treated congenital hypothyroidism: normal intelligence in nearly all. Late treatment: lasting intellectual disability, short stature and deafness. Acquired hypothyroidism: catch-up growth may be incomplete if diagnosis is late. Graves': agranulocytosis risk, relapse, eye disease.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "What to tell parents", `<ul><li>"Your baby's thyroid gland is not making enough hormone. One small tablet a day, crushed in milk, lets the brain and body grow normally."</li><li>Never miss doses; bring the baby for every blood test.</li><li>On carbimazole: sore throat or fever means stop the tablets and get a blood test that day.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>The baby becomes very sleepy, will not feed or stays jaundiced</li><li>Fever or sore throat on carbimazole</li><li>Racing heart, sweating or weight loss</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Goitre", src: "images/goitre-large.jpg", mod: "Historical clinical photograph", ctx: "Iodine-deficiency era", loc: "Neck", find: "Large lobulated thyroid", signs: "Multinodular goitre", interp: "Iodine deficiency causes goitre and, in pregnancy, congenital hypothyroidism; iodised salt prevents both", by: "Martin Finborud", page: "https://commons.wikimedia.org/wiki/File:Kone_med_stor_struma.jpg", lic: "Public domain" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Newborn with possible hypothyroidism", [
F.s("Prolonged jaundice, poor feeding, constipation, large tongue, hernia, or abnormal screen"), F.a,
F.s("TSH and free T4 the same day"), F.a,
F.d("TSH high and free T4 low (or TSH very high)?"), F.a,
F.b([["Yes", F.e("Start thyroxine 10–15 microgram/kg today")], ["Borderline", F.s("Repeat in 1 week; treat if TSH stays high")]]), F.a,
F.ok("TFTs at 2 and 4 weeks; developmental and hearing follow-up")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Check TSH in every baby still jaundiced at 2 weeks</b> (3 weeks if preterm), with conjugated bilirubin.</li>
<li>Growth chart first: a child crossing height centiles downwards needs a TSH.</li>
<li>No PTU in children.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for a thyroid scan before treating", "Lost IQ points", "Treat immediately"],
["Giving thyroxine with soya milk or iron drops", "Poor absorption", "Separate by several hours"],
["Adult ranges for newborn TFTs", "Wrong diagnosis", "Age-specific ranges"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the starting dose of thyroxine in congenital hypothyroidism?", "10–15 microgram/kg once daily, within 2 weeks of birth.")}
${qa("Intern/MO", "Why should PTU be avoided in children?", "Risk of severe, sometimes fatal, liver failure.")}
${qa("Intern/MO", "Which sign often prompts a TSH test in a newborn?", "Prolonged jaundice beyond 2 weeks.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">van Trotsenburg P, Stoupa A, Léger J et al. Congenital hypothyroidism: a 2020–2021 consensus guidelines update — an ENDO-European Reference Network initiative endorsed by the European Society for Pediatric Endocrinology and the European Society for Endocrinology. <i>Thyroid</i> 2021;31:387–419. <a href="https://doi.org/10.1089/thy.2020.0333" target="_blank" rel="noopener">doi:10.1089/thy.2020.0333</a></li>
<li id="ref-2">Ross DS, Burch HB, Cooper DS et al. 2016 American Thyroid Association guidelines for hyperthyroidism and other causes of thyrotoxicosis. <i>Thyroid</i> 2016;26:1343–1421. <a href="https://doi.org/10.1089/thy.2016.0229" target="_blank" rel="noopener">doi:10.1089/thy.2016.0229</a></li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §5.2 Hypothyroidism; National Essential Medicines List and Formulary 2025.</li>
<li id="ref-4">BNF for Children: levothyroxine, carbimazole, propranolol (current edition).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Doses", "<span class='pass'>Checked</span>", "ESPE/ENDO-ERN 2021, BNFc, NEMF"],
["Bhutan newborn screening status", "<span class='flag'>Local check</span>", "Not confirmed"]], "qc")}
` }
]
});
