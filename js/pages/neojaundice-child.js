/* Neonatal jaundice */
registerPage({
id: "neojaundice-child",
title: "Neonatal Jaundice — Newborns",
subtitle: "Most newborn jaundice is harmless; the skill is spotting the dangerous kinds early: jaundice in the first day, rapidly rising bilirubin, and pale stools",
age: "Newborns", specs: ["neo", "paeds", "nicu"],
keywords: ["neonatal jaundice", "newborn jaundice", "hyperbilirubinaemia", "hyperbilirubinemia", "physiological jaundice", "phototherapy", "exchange transfusion", "kernicterus", "bilirubin encephalopathy", "ABO incompatibility", "Rh disease", "G6PD", "breast milk jaundice", "prolonged jaundice", "conjugated jaundice", "biliary atresia", "transcutaneous bilirubin"],
related: ["thyroid-child", "hepatitis-child", "sepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">About 6 in 10 term and 8 in 10 preterm babies look yellow in the first week. Bilirubin becomes dangerous only when it rises high enough to enter the brain, which phototherapy prevents. A few patterns always need action.</p>
<div class="glance">
<div><h4>Always abnormal</h4><ul><li><b>Jaundice in the first 24 hours</b></li><li>Rapid rise (over 5 mg/dL, 85 µmol/L, a day)</li><li>Yellow palms and soles</li><li>Jaundice beyond 14 days (21 if preterm)</li><li>Pale stools, dark urine (conjugated)</li></ul></div>
<div><h4>Measure</h4><p>Serum or transcutaneous bilirubin, <b>plotted against age in hours</b> on a gestation-specific chart.</p></div>
<div><h4>Treat</h4><p><b>Phototherapy</b> above the threshold; keep breastfeeding. Near exchange level: intensive phototherapy, ${dr("ivig", "IVIG")} for isoimmune disease, exchange transfusion.</p></div>
<div><h4>Emergency</h4><p>Lethargy, poor feeding, high-pitched cry, arching: <b>acute bilirubin encephalopathy</b> — immediate exchange.</p></div>
<div><h4>Pale stools</h4><p>Think <b>biliary atresia</b>: surgery works best before 60 days.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG has no neonatal jaundice section; the JDWNRH Paediatric OPD handbook (B4.2) follows AAP 2022 hour-specific thresholds. Phototherapy is available in hospitals; exchange transfusion at the national and regional referral hospitals. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types and causes", html: `
${tbl(["Type", "Timing and clues", "Causes"], [
["<b>Physiological</b>", "Appears day 2–3, peaks day 3–5, gone by 2 weeks; baby well and feeding", "Short red-cell life, immature liver conjugation"],
["<b>Pathological, unconjugated</b>", "First 24 hours, rapid rise, high levels, unwell baby", "<b>Haemolysis</b> (ABO or Rh incompatibility, G6PD deficiency, spherocytosis), sepsis, bruising and cephalohaematoma, polycythaemia, poor feeding"],
["Breastfeeding jaundice", "First week, poor intake, weight loss over 10%", "Inadequate milk: support feeding"],
["Breast-milk jaundice", "Well baby, jaundice into weeks 2–12", "Milk factors; harmless once other causes are excluded"],
["<b>Prolonged</b>", "Beyond 14 days (21 in preterm)", "Breast-milk jaundice, hypothyroidism, infection, haemolysis, <b>conjugated</b> causes"],
["<b>Conjugated</b>", "Direct bilirubin over 1 mg/dL (17 µmol/L) or over 20% of total; pale stools, dark urine", "<b>Biliary atresia</b>, neonatal hepatitis, infections, metabolic disease"]])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("From red cells to the brain", [
F.s("Newborns break down more red cells (high Hb, short red-cell life) → more bilirubin"), F.a,
F.s("Immature liver enzyme (UGT1A1) conjugates slowly; gut reabsorbs some bilirubin"), F.a,
F.d("Unconjugated bilirubin rises"), F.a,
F.b([["Moderate", F.ok("Yellow skin only; resolves")], ["Very high, or with acidosis, sepsis, low albumin", F.e("Free bilirubin crosses into the brain: acute encephalopathy → kernicterus (deafness, cerebral palsy)")]]), F.a,
F.ok("Phototherapy turns bilirubin into water-soluble forms excreted in urine and stool")])}
` },

{ id: "conflicts", title: "Where guidelines differ", html: `
${tbl(["Topic", "JDWNRH handbook (AAP 2022)", "NICE CG98", "This guide"], [
["Thresholds", "Hour-specific, by gestation and neurotoxicity risk factors; generally higher than earlier guidance", "Gestation-specific charts; table for 38 weeks or more", "The calculator uses NICE (lower, safer thresholds); follow the AAP charts where your unit uses them " + LB.loc()],
["Visual assessment", "Not reliable; measure", "Do not rely on visual inspection alone", "Measure every jaundiced baby in the first week"],
["IVIG", "For isoimmune disease near exchange", "If bilirubin rises over 8.5 µmol/L/h despite intensive phototherapy", "As AAP/NICE where available"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li>Look in daylight; press the skin. Jaundice spreads head to toe, but <b>visual estimates are unreliable</b>, especially in darker skin: always measure.</li>
<li>History: age in hours, gestation, feeding, weight loss, mother's blood group and antibodies, siblings with jaundice or G6PD deficiency, stool and urine colour.</li>
<li>Examine: weight, hydration, bruising, cephalohaematoma, liver and spleen, signs of sepsis, neurological state.</li></ul>
${box("red", "Danger signs", `<ul><li>Jaundice in the first 24 hours</li><li>Lethargy, poor feeding, high-pitched cry, hypertonia or arching, fever</li><li>Pale stools or dark urine</li><li>Weight loss over 10%</li></ul>`)}
<h3>The typical patient</h3>
<p>A boy born at 39 weeks in Thimphu to a mother with group O blood is noticeably yellow at 20 hours. Bilirubin is 10 mg/dL (171 µmol/L); the baby is group A and Coombs positive. <b>This is haemolytic disease from ABO incompatibility</b>: jaundice in the first day, a mother with group O and a group A baby, and a positive Coombs test. At 20 hours the NICE phototherapy threshold is about 183 µmol/L, so he is just below it but rising fast: start phototherapy now, recheck in 4–6 hours, and prepare for IVIG if it keeps climbing.</p>
` },

{ id: "ddx", title: "Causes to look for", html: `
${tbl(["Clue", "Think of", "Test"], [
["First 24 hours, mother O or Rh negative", "Isoimmune haemolysis", "Baby blood group, Coombs, Hb, reticulocytes"],
["Boy, rapid rise, family history", "G6PD deficiency", "G6PD screen"],
["Unwell, fever or low temperature", "Sepsis, UTI", "Blood culture, urine"],
["Large bruise or cephalohaematoma", "Extravascular blood", "Clinical"],
["Prolonged with constipation, large tongue", "Hypothyroidism", "TSH (see thyroid, children)"],
["Pale stools, dark urine", "Biliary atresia, hepatitis", "Conjugated bilirubin, ultrasound, urgent referral"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Total serum bilirubin</b> (or transcutaneous)", "Plot against age in hours", "Confirm high transcutaneous values with serum", "Essential"],
["Blood group and Coombs (baby); mother's group", "Isoimmune haemolysis", "Especially if jaundice in the first 24 hours", "Essential if early or high"],
["Hb, haematocrit, reticulocytes, blood film", "Haemolysis, polycythaemia", "—", "If haemolysis suspected"],
["G6PD", "Deficiency", "—", "Recommended in high levels"],
["<b>Conjugated (direct) bilirubin</b>", "Conjugated jaundice", "All prolonged jaundice and pale stools", "Essential when prolonged"],
["Blood culture, urine", "Sepsis", "—", "If unwell"],
["TSH", "Hypothyroidism", "Prolonged jaundice", "When prolonged"]])}
` },

{ id: "staging", title: "Threshold tool", html: `
<div class="calc" data-calc="nnjthreshold"></div>
<p>NICE thresholds for babies 38 weeks or more; for preterm babies the tool gives the NICE plateau and points to the gestation chart.${r(1, 2)}</p>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Supportive care</h3>
<ul><li>Frequent breastfeeding (8–12 times a day); expressed milk or formula top-ups if intake is poor; avoid water or glucose water.</li>
<li>Recheck bilirubin according to how close it is to the threshold.</li></ul>
<h3>B. Phototherapy</h3>
<ul><li>Start when bilirubin is at or above the threshold for age and gestation.</li>
<li>Baby naked except for a nappy, eyes covered, maximum skin exposure, light close to the baby; turn regularly; continue breastfeeding with short breaks.</li>
<li>Recheck bilirubin 4–6 hours after starting, then every 6–12 hours; stop when 50 µmol/L (3 mg/dL) below the threshold; recheck 12–18 hours after stopping (rebound).</li>
<li>Intensive (multiple) phototherapy if the level is rising fast or near exchange.</li></ul>
<h3>C. Near or above the exchange threshold</h3>
<ul><li>Admit to NICU; intensive phototherapy; IV access; group-specific blood ordered.</li>
<li>${dr("ivig", "IVIG")} 0.5–1 g/kg for isoimmune haemolysis if bilirubin keeps rising.</li>
<li><b>Exchange transfusion</b> (double-volume, 160–180 mL/kg) at or above the threshold, or immediately with signs of encephalopathy.</li></ul>
<h3>D. Conjugated jaundice</h3>
<p>Urgent paediatric referral: check stool colour (stool colour card), conjugated bilirubin, ultrasound; biliary atresia needs a Kasai operation, ideally before 45–60 days.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("ivig"), "0.5–1 g/kg IV over 2 hours; may repeat in 12 h", "Isoimmune haemolysis near exchange"],
[dr("thyroxine"), "10–15 microgram/kg/day", "If prolonged jaundice is from hypothyroidism"]])}
<p>Phenobarbital, ursodeoxycholic acid and herbal remedies are not recommended for unconjugated jaundice. Avoid giving the baby drugs that displace bilirubin (ceftriaxone in jaundiced neonates, sulphonamides).</p>
` },

{ id: "populations", title: "Preterm and high-risk babies", html: `
<ul><li><b>Preterm:</b> lower thresholds, higher risk; follow the gestation chart; jaundice can be prolonged to 21 days.</li>
<li><b>G6PD deficiency:</b> avoid naphthalene (mothballs), certain drugs and fava beans in breastfeeding mothers' diets; treat early.</li>
<li><b>Babies discharged before 72 hours:</b> a bilirubin check or visit within 1–2 days.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Yellow baby at home, family uses sunlight", "Bring for a bilirubin test", "Sunlight is unreliable and risks burns or chilling"],
["Jaundice at 3 weeks, well baby, yellow stools", "Check conjugated bilirubin and TSH", "Most is breast-milk jaundice, but exclude atresia and hypothyroidism"],
["Rapid rise in a baby with an O-positive mother", "Coombs test; phototherapy early", "ABO haemolysis"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p><b>Acute bilirubin encephalopathy</b> (lethargy, hypotonia then hypertonia, arching, high-pitched cry, fever, seizures) can progress to <b>kernicterus</b>: athetoid cerebral palsy, hearing loss, upward gaze palsy and dental enamel defects. With timely phototherapy and exchange it is almost entirely preventable. Babies with high bilirubin need a hearing test.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "What to tell parents", `<ul><li>"Yellowness is common in the first week. A simple blood or skin test tells us if your baby needs light treatment."</li><li>Feed often, at least 8–12 times a day.</li><li>Check the colour of the stools: they should be yellow or green, never pale or white.</li></ul>`)}
${box("red", "Bring your baby back at once if", `<ul><li>Yellowness spreads to the legs, palms or soles, or deepens</li><li>Your baby is sleepy, not feeding well, or has a high-pitched cry</li><li>Stools are pale or white, or urine is dark</li><li>Jaundice continues past 2 weeks</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Phototherapy", src: "images/phototherapy-infant.png", mod: "Illustration", ctx: "Treatment of neonatal jaundice", loc: "Baby under blue light", find: "Baby naked except for a nappy, eyes shielded, under a phototherapy lamp", interp: "Maximum skin exposure and close light make phototherapy more effective", by: "BruceBlaus", page: "https://commons.wikimedia.org/wiki/File:Infant_Under_Bili_Lights.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "Baby receiving phototherapy", src: "images/phototherapy-photo.jpg", mod: "Photograph", ctx: "Neonatal unit", loc: "Phototherapy unit", find: "Infant under blue phototherapy light", interp: "Continue breastfeeding during phototherapy", by: "Vtbijoy", page: "https://commons.wikimedia.org/wiki/File:Phototherapy.jpg", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Jaundiced newborn", [
F.d("Under 24 hours old, or unwell, or pale stools?"), F.a,
F.b([["Yes", F.e("Urgent bilirubin (total and conjugated), group, Coombs, Hb; senior review")], ["No", F.s("Measure bilirubin; plot by hours and gestation")]]), F.a,
F.b([["Below threshold", F.ok("Feeding support; recheck as needed")], ["Above phototherapy", F.s("Phototherapy; recheck 4–6 h")], ["Near exchange", F.e("NICU, intensive phototherapy, IVIG, exchange")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Never call jaundice in the first 24 hours physiological.</b></li>
<li>Plot bilirubin against age in hours, not days.</li>
<li>Pale stools mean conjugated jaundice until proven otherwise.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Relying on how yellow the baby looks", "Missed high bilirubin", "Measure"],
["Stopping breastfeeding", "Dehydration, worse jaundice", "Feed more often"],
["Missing biliary atresia in a 'breast-milk jaundice' baby", "Liver failure", "Conjugated bilirubin after 2 weeks"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "When is newborn jaundice always pathological?", "Within the first 24 hours of life.")}
${qa("Intern/MO", "What must be checked in jaundice lasting beyond 14 days?", "Conjugated bilirubin (and stool colour), plus TSH.")}
${qa("Intern/MO", "Signs of acute bilirubin encephalopathy?", "Lethargy, poor feeding, high-pitched cry, hypertonia or arching, fever, seizures.")}
${qa("Specialist", "When is IVIG used?", "Isoimmune haemolytic disease with bilirubin rising despite intensive phototherapy or near the exchange threshold.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Kemper AR, Newman TB, Slaughter JL et al. Clinical practice guideline revision: management of hyperbilirubinemia in the newborn infant 35 or more weeks of gestation. <i>Pediatrics</i> 2022;150:e2022058859. <a href="https://doi.org/10.1542/peds.2022-058859" target="_blank" rel="noopener">doi:10.1542/peds.2022-058859</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Jaundice in newborn babies under 28 days (CG98). 2010, updated 2016. <a href="https://www.nice.org.uk/guidance/cg98" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">JDWNRH Paediatric OPD handbook, B4.2 Neonatal jaundice; via Bhutan Clinical Reference app (Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["NICE threshold table (38+ weeks)", "<span class='pass'>Checked</span>", "Implemented in calculator"],
["Preterm thresholds before 72 hours", "<span class='flag'>Chart needed</span>", "Calculator shows plateau and links to NICE charts"],
["Bhutan STG", "<span class='flag'>No section</span>", "Local handbook (JDWNRH) used"]], "qc")}
` }
]
});
