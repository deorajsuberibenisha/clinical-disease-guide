/* Infant of a diabetic mother (pregestational diabetes and GDM) */
registerPage({
id: "idm-child",
title: "Infant of a Diabetic Mother",
subtitle: "Why the baby of a mother with diabetes is big, hungry for glucose and at risk of breathing, heart, calcium and blood problems — and how early feeding, a glucose schedule and a careful examination keep most of them on the postnatal ward",
age: "Newborns", specs: ["neo", "nicu", "paeds", "endo", "obg"],
keywords: ["infant of diabetic mother", "IDM", "neonatal hypoglycaemia", "macrosomia", "large for gestational age", "gestational diabetes baby", "hyperinsulinism", "polycythaemia", "hypocalcaemia newborn", "hypertrophic cardiomyopathy newborn", "shoulder dystocia", "brachial plexus injury", "respiratory distress syndrome", "caudal regression", "small left colon", "glucose infusion rate"],
related: ["dm-pregnancy", "hypo-child", "neojaundice-child", "rds-child", "neotherm-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Babies of mothers with diabetes have been bathed in extra glucose and have made extra insulin to match. When the cord is cut, the glucose stops but the insulin does not — so the first hours bring a real risk of hypoglycaemia. Most of these babies do well with skin-to-skin, an early first feed and a fixed glucose-check schedule; the doctor's job is to spot the few with injury, breathing problems, a thick heart muscle or malformations.</p>
<div class="glance">
<div><h4>First hour</h4><p>Skin-to-skin, keep warm, breastfeed within 30–60 minutes. No routine separation.</p></div>
<div><h4>Glucose schedule (Bhutan)</h4><p>Pre-feed checks at <b>1, 2, 3, 6, 12, 24, 36 and 48 hours</b>.</p></div>
<div><h4>Low glucose</h4><p>25–45 mg/dL and well: feed and recheck in 1 hour. Below 25, or symptomatic below 45: ${dr("dextrose")} 10% 2 mL/kg, then infusion (GIR 6 mg/kg/min).</p></div>
<div><h4>Examine for</h4><p>Birth injury (brachial plexus, clavicle), breathing difficulty, murmur, plethora, jaundice, malformations (heart, spine, kidneys, bowel).</p></div>
<div><h4>Other blood tests</h4><p>Haematocrit if plethoric; calcium if jittery or unwell; bilirubin if jaundiced.</p></div>
<div><h4>Refer</h4><p>Glucose not maintained on GIR 10, respiratory distress, cardiomyopathy, major malformation.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Hospital IMNCI manual (2024, Chart 11, adapted from Nepal's FB-IMNCI 2019) lists infants of diabetic mothers among babies to screen, sets the first glucose check at 1 hour of birth, and gives a fixed schedule for these infants: 1, 2, 3, 6, 12, 24, 36 and 48 hours. Hypoglycaemia is defined as under 45 mg/dL; under 25 mg/dL or any symptoms means IV dextrose (2 mL/kg 10% bolus, then a glucose infusion rate of 6, increasing to 8 and 10 mg/kg/min), with referral to level III care if glucose stays under 45 mg/dL. Gestational diabetes is increasingly diagnosed in Bhutan under universal antenatal screening (see <a href="#/d/dm-pregnancy">diabetes in pregnancy</a>). ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>An infant of a diabetic mother (IDM) is a baby born to a mother with type 1, type 2 or gestational diabetes. The risks rise with poorer maternal control, especially in early pregnancy (malformations) and late pregnancy (macrosomia and hypoglycaemia).${r(1, 2)}</p>
${tbl(["Problem", "Mechanism", "How common / notes"], [
["<b>Hypoglycaemia</b>", "Fetal hyperinsulinism persists after birth", "Common in the first 24–48 hours; mostly asymptomatic"],
["Macrosomia (over 4 kg) / large for gestational age", "Insulin acts as a fetal growth hormone", "Shoulder dystocia, brachial plexus palsy, clavicle fracture, asphyxia"],
["Respiratory distress", "Insulin delays surfactant maturation; caesarean birth; transient tachypnoea", "Even near term"],
["Hypertrophic cardiomyopathy (septal hypertrophy)", "Insulin-driven myocardial growth", "Usually resolves over months; outflow obstruction in a few"],
["Polycythaemia, hyperviscosity", "Chronic fetal hypoxia raises erythropoietin", "Plethora, jaundice, renal vein thrombosis"],
["Hyperbilirubinaemia", "Polycythaemia, immature liver", "—"],
["Hypocalcaemia, hypomagnesaemia", "Delayed parathyroid response", "First 24–72 hours"],
["Congenital malformations", "Hyperglycaemia during organogenesis (pregestational diabetes)", "Heart (TGA, VSD), caudal regression, neural tube defects, renal anomalies, small left colon"],
["Growth restriction", "Maternal vascular disease (long-standing diabetes)", "SGA babies also hypoglycaemic"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("The Pedersen pathway", [
F.s("Maternal hyperglycaemia → glucose crosses the placenta (insulin does not)"), F.a,
F.s("Fetal pancreas makes extra insulin (fetal hyperinsulinism)"), F.a,
F.b([["Growth", F.s("Macrosomia, organomegaly, septal hypertrophy")], ["Metabolism", F.s("Delayed lung maturity, high oxygen use → polycythaemia")]]), F.a,
F.s("Birth: maternal glucose supply stops; insulin stays high"), F.a,
F.e("Hypoglycaemia in the first hours, lowest at 1–3 hours"), F.a,
F.ok("Insulin settles over 24–72 hours with feeding")])}
<p>Because the baby's insulin is high, ketones are also suppressed: the brain has no alternative fuel, which is why these babies are screened even though they look well.${r(3)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan IMNCI 2024", "International", "This guide and why"], [
["First glucose check", "At 1 hour of birth", "NICE NG3: 2–4 hours after birth, before the second feed; AAP 2011: 30 minutes after the first feed", "Bhutan schedule (1, 2, 3, 6, 12, 24, 36, 48 h) " + LB.loc()],
["Operational threshold", "45 mg/dL (2.6 mmol/L)", "AAP 2011: IV glucose if under 25 (0–4 h) or under 35 (4–24 h) in asymptomatic babies; target over 45 before feeds. PES 2015: over 50 (first 48 h), over 60 after", "Bhutan 45 mg/dL; PES targets after 48 h for persistent cases"],
["Symptomatic threshold", "Symptoms with 25–45 → IV dextrose", "AAP: treat symptomatic under 40 mg/dL with IV glucose", "Bhutan"],
["Dextrose gel", "Not in IMNCI", "40% dextrose gel 200 mg/kg buccal reduces NICU admission (Sugar Babies trial)", "Not on NEML; use feeds and IV dextrose"],
["Antenatal colostrum expression", "Not addressed", "From 36 weeks is safe in low-risk diabetic pregnancies (DAME trial)", "Encourage where safe"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Finding", "Think of", "Action"], [
["Large, plump, red baby with puffy face", "Macrosomia, plethora", "Glucose schedule; haematocrit"],
["Jittery, poor feeding, lethargy, apnoea, seizures, hypothermia", "Hypoglycaemia (or hypocalcaemia)", "Glucose now; calcium"],
["Limp arm, absent Moro on one side", "Brachial plexus (Erb's) palsy", "Physiotherapy; X-ray clavicle"],
["Fast breathing, grunting, chest indrawing", "RDS, transient tachypnoea, heart failure", "Oxygen, chest X-ray, NICU"],
["Murmur, poor perfusion, heart failure", "Septal hypertrophy with outflow obstruction, congenital heart disease", "Echo; avoid inotropes in obstructive HCM"],
["Deep red colour, sluggish", "Polycythaemia (venous haematocrit over 65%)", "Hydration; partial exchange if symptomatic"],
["Flank mass, haematuria", "Renal vein thrombosis", "Ultrasound; refer"],
["Abdominal distension, no meconium", "Small left colon syndrome", "Contrast enema; surgical review"]])}
${box("red", "Danger signs", `<ul><li>Glucose under 25 mg/dL, or any symptoms with glucose under 45 mg/dL</li><li>Seizures, apnoea, lethargy</li><li>Respiratory distress or cyanosis</li><li>Signs of heart failure or shock</li></ul>`)}
<h3>The typical patient</h3>
<p>A 4.3 kg boy is born at 38 weeks in Mongar to a mother with gestational diabetes on metformin. He is placed skin-to-skin and breastfeeds at 40 minutes. At 1 hour his glucose is 34 mg/dL; he is pink, active and feeding well. <b>This is asymptomatic early hypoglycaemia in an infant of a diabetic mother (Bhutan Flowchart 1).</b> He breastfeeds again and expressed colostrum is given by cup; at 2 hours glucose is 48 mg/dL. Checks continue at 3, 6, 12, 24, 36 and 48 hours, all over 45 mg/dL. He is examined for birth injury (both arms move well) and murmurs, and goes home on day 2 with breastfeeding established.</p>
` },

{ id: "ddx", title: "Differential diagnosis of hypoglycaemia", html: `
${tbl(["Cause", "Clue", "Next step"], [
["IDM transient hyperinsulinism", "Maternal diabetes, macrosomia, settles by 48–72 h", "Feeds ± IV glucose"],
["Persistent congenital hyperinsulinism", "GIR over 10 mg/kg/min, beyond 72 h, no maternal diabetes", "Specialist: insulin and ketones during hypoglycaemia; diazoxide"],
["Sepsis", "Temperature instability, poor perfusion", "Sepsis screen and antibiotics"],
["Hypothermia", "Cold baby", "Rewarm (see <a href=\"#/d/neotherm-child\">thermal care</a>)"],
["SGA/preterm (low stores)", "Small baby", "Early frequent feeds"],
["Beckwith–Wiedemann syndrome", "Macroglossia, omphalocele, hemihypertrophy", "Genetics referral"],
["Hypopituitarism, adrenal insufficiency", "Micropenis, midline defects, prolonged jaundice", "Endocrine work-up"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Blood glucose</b> (pre-feed)", "Hypoglycaemia", "Bhutan schedule 1, 2, 3, 6, 12, 24, 36, 48 h; confirm low meter values in the laboratory without delaying treatment", "Essential"],
["Haematocrit (venous)", "Polycythaemia", "If plethoric or symptomatic", "Selected"],
["Calcium (and magnesium)", "Hypocalcaemia", "If jittery with normal glucose, seizures or unwell", "Selected"],
["Bilirubin", "Jaundice", "Visual check daily; measure if yellow", "Selected"],
["Chest X-ray, blood gas", "Respiratory distress", "—", "If distressed"],
["Echocardiogram", "Murmur, heart failure, cyanosis", "Referral centre", "Selected"],
["Ultrasound of spine, kidneys, head", "Suspected malformations", "—", "Selected"],
["X-ray clavicle and arm", "Birth injury", "—", "If arm weakness"]])}
` },

{ id: "staging", title: "Glucose plan and infusion rate", html: `
<p>Enter the glucose, the baby's age and weight for the Bhutan flowchart step and the infusion rate in mL/hour.${r(1, 3)}</p>
<div class="calc" data-calc="idmglucose"></div>
<h3>Glucose infusion rate (GIR)</h3>
<p>GIR (mg/kg/min) = infusion rate (mL/h) × dextrose concentration (%) ÷ (6 × weight in kg). With 10% dextrose, GIR 6 mg/kg/min ≈ 0.6 mL/kg/h ≈ 86 mL/kg/day. Needing more than 10–12 mg/kg/min suggests persistent hyperinsulinism or another cause: refer.</p>
` },

{ id: "manage", title: "Management", html: `
<h3>A. At birth</h3>
<ul><li>Paediatrician or trained provider at delivery if large baby, poor maternal control or preterm (shoulder dystocia, resuscitation).</li>
<li>Dry, skin-to-skin, cap, keep warm — cold increases glucose use (see <a href="#/d/neotherm-child">thermal care</a>).</li>
<li>Breastfeed within 30–60 minutes and then every 2–3 hours (at least 8 feeds a day); give any antenatally expressed colostrum.${r(4)}</li>
<li>Vitamin K; full examination for birth injury and malformations.</li></ul>
<h3>B. Glucose monitoring and treatment (Bhutan Chart 11)</h3>
${tbl(["Glucose", "Action"], [
["45 mg/dL or more", "Continue feeds every 2–3 hours; follow the schedule (1, 2, 3, 6, 12, 24, 36, 48 h)"],
["25–45 mg/dL, no symptoms", "Breastfeed or give expressed breast milk by cup now; recheck after 1 hour or before the next feed; increase frequency or volume"],
["Under 25 mg/dL, or symptoms with under 45", "10% dextrose 2 mL/kg IV over 2–5 minutes (NG if no IV), then infusion at GIR 6 mg/kg/min; recheck in 30 minutes"],
["Still low or symptomatic", "Repeat bolus; GIR 8, then 10 mg/kg/min; refer for level III care if still under 45 mg/dL"],
["Over 45 mg/dL twice on IV", "Reduce GIR by 2 mg/kg/min at a time while increasing feeds; stop IV when feeds give two-thirds of needs"]])}
<p>Continue breastfeeding during IV treatment whenever the baby can feed. Avoid formula top-ups unless clinically needed; expressed breast milk is preferred. Buccal 40% dextrose gel is an option where available (not on NEML 2025).${r(1, 3, 5, 6)}</p>
<h3>C. Other problems</h3>
<ul><li><b>Respiratory distress:</b> oxygen, CPAP, chest X-ray; surfactant at NICU for RDS (see <a href="#/d/rds-child">RDS</a>).</li>
<li><b>Hypertrophic cardiomyopathy:</b> echo; avoid inotropes and diuretics in obstructive forms; beta-blocker (propranolol) on specialist advice; usually resolves in 6 months.</li>
<li><b>Polycythaemia:</b> venous haematocrit over 65% with symptoms → partial exchange transfusion with saline at a referral centre; asymptomatic → adequate fluids and observe.</li>
<li><b>Hypocalcaemia</b> (symptomatic): ${dr("calcium_gluconate")} 10% 2 mL/kg IV slowly over 10 minutes with ECG monitoring.</li>
<li><b>Jaundice:</b> phototherapy by thresholds (see <a href="#/d/neojaundice-child">neonatal jaundice</a>).</li>
<li><b>Brachial plexus palsy:</b> gentle positioning, physiotherapy from week 1; refer if no recovery by 3 months.</li></ul>
<h3>D. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["Antenatal (all levels)", "Plan delivery at a hospital with a paediatrician and glucose testing; teach colostrum expression from 36 weeks if safe"],
["District hospital", "Skin-to-skin, early feeds, glucose schedule, IV dextrose; examine for injury and malformations"],
["Referral NICU", "Persistent hypoglycaemia, RDS, cardiomyopathy, exchange transfusion, surgery"]])}
` },

{ id: "drugs", title: "Medicines and fluids", html: `
${tbl(["Item", "Dose", "Notes"], [
[dr("dextrose"), "10% 2 mL/kg bolus; infusion GIR 6–10 mg/kg/min", "GIR 6 ≈ 86 mL/kg/day of D10"],
[dr("calcium_gluconate"), "10%: 2 mL/kg IV over 10 minutes (ECG)", "Symptomatic hypocalcaemia"],
[dr("vitamin_k"), "1 mg IM", "At birth"],
[dr("propranolol"), "Specialist only", "Obstructive septal hypertrophy"],
["40% dextrose gel", "200 mg/kg buccal", "Not on NEML 2025"]])}
` },

{ id: "populations", title: "Preterm, growth-restricted and twin IDMs", html: `
<ul><li><b>Preterm IDM:</b> higher risk of RDS and hypoglycaemia; NICU care if under 32 weeks or 1500 g (Bhutan IMNCI).</li>
<li><b>SGA IDM</b> (mother with long-standing diabetes and vascular disease): low stores <i>and</i> hyperinsulinism — very high hypoglycaemia risk.</li>
<li><b>Mother on insulin in labour:</b> maternal hyperglycaemia in labour worsens neonatal hypoglycaemia: tight maternal intrapartum control matters.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Mother on metformin only, well controlled", "Same schedule; usually fewer low values", "Risk still present"],
["Baby cannot breastfeed (sleepy, distressed)", "Expressed colostrum by cup or NG; IV if needed", "Avoid prolonged fasting"],
["Hypoglycaemia beyond 72 hours", "Critical sample (insulin, ketones, cortisol); refer", "Persistent hyperinsulinism"],
["Murmur on day 2", "Echo before discharge if possible", "Septal hypertrophy or CHD"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Hypoglycaemic brain injury", "Seizures, poor feeding; later developmental delay", "Prevent with schedule and prompt treatment"],
["Birth injury", "Arm weakness, fractures", "Physiotherapy, splinting"],
["RDS", "Distress", "Respiratory support"],
["Cardiomyopathy", "Heart failure, murmur", "Echo, specialist"],
["Later obesity and type 2 diabetes", "Childhood", "Healthy growth, breastfeeding"]])}
<p>Most infants of diabetic mothers with good maternal control need no NICU care. Long-term, they have a higher risk of obesity and diabetes, which breastfeeding and healthy family habits help to reduce.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Discharge when feeding well and pre-feed glucose has been over 45 mg/dL on the schedule; review within 2–3 days.</li>
<li>Mother: postpartum glucose test (OGTT at 6–12 weeks after GDM); lifelong diabetes screening; plan future pregnancies with good control and folic acid.</li></ul>
${box("green", "What to tell the mother", `<ul><li>"Your baby made extra insulin while you were pregnant, so we check the sugar for two days and feed often."</li><li>Breastfeed every 2–3 hours, day and night; keep the baby warm and skin-to-skin.</li><li>Breastfeeding also lowers your own future risk of diabetes.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Your baby is sleepy and will not feed, shakes or jerks, turns blue, or breathes fast</li><li>Becomes very yellow</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Macrosomic newborn", src: "images/macrosomic-baby.jpg", mod: "Photograph", ctx: "Newborn weighing about 5 kg", loc: "Whole baby", find: "Large, plump baby with chubby face and limbs", signs: "Macrosomia (birth weight over 4 kg)", interp: "Check for maternal diabetes, birth injury and hypoglycaemia", by: "Andwhatsnext (English Wikipedia)", page: "https://commons.wikimedia.org/wiki/File:New-baby-boy-weight-11-pounds.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Birth weight by gestational age", src: "images/bw-ga-chart.jpg", mod: "Chart", ctx: "Classifying newborn size", loc: "—", find: "Percentile curves separating small, appropriate and large for gestational age", signs: "LGA above the 90th percentile", interp: "Large-for-gestational-age babies need glucose screening, as do small ones", by: "Yehudamalul", page: "https://commons.wikimedia.org/wiki/File:Weight_vs_gestational_Age.jpg", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Infant of a diabetic mother — first 48 hours", [
F.s("Skin-to-skin, warm, breastfeed within 30–60 min; examine"), F.a,
F.s("Pre-feed glucose at 1, 2, 3, 6, 12, 24, 36, 48 h"), F.a,
F.d("Result?"), F.a,
F.b([["45 or more", F.ok("Continue feeds and schedule")], ["25–45, well", F.s("Feed now; recheck in 1 h")]]), F.a,
F.b([["Under 25 or symptomatic", F.e("D10 2 mL/kg, GIR 6 → 8 → 10; recheck 30 min")], ["Still low on GIR 10", F.e("Refer level III")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Feed first, then check.</b> Early, frequent breastfeeding prevents most low values.</li>
<li>Jitteriness with normal glucose: check calcium.</li>
<li>Listen to the heart and look at both arms before discharge.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Separating mother and baby for observation", "Delays feeding; cold", "Skin-to-skin on the ward"],
["Stopping checks after one normal value", "Late hypoglycaemia", "Complete the 48-hour schedule"],
["Large IV boluses (e.g. 25% dextrose)", "Rebound hypoglycaemia, vein damage", "10% 2 mL/kg then infusion"],
["Inotropes for heart failure in septal hypertrophy", "Worsens outflow obstruction", "Echo first"],
["Missing an Erb's palsy", "Late physiotherapy", "Examine arms"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why do infants of diabetic mothers become hypoglycaemic?", "Fetal hyperinsulinism continues after maternal glucose supply stops at birth.")}
${qa("Intern/MO", "What is Bhutan's glucose monitoring schedule for an IDM?", "1, 2, 3, 6, 12, 24, 36 and 48 hours.")}
${qa("Intern/MO", "How much 10% dextrose gives a GIR of 6 mg/kg/min in a 3.5 kg baby?", "About 12.6 mL/h (6 × 3.5 × 0.6).")}
${qa("Intern/MO", "Name four complications other than hypoglycaemia.", "Macrosomia with birth injury, respiratory distress, hypertrophic cardiomyopathy, polycythaemia, jaundice, hypocalcaemia, malformations.")}
${qa("Specialist", "Why avoid inotropes in IDM cardiomyopathy?", "Septal hypertrophy may obstruct the left ventricular outflow; inotropes increase the obstruction.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Hospital-based IMNCI, 3rd edition, 2024: §6.5 Hypoglycaemia and Chart 11 (Flowcharts 1 and 2, from Nepal FB-IMNCI 2019).</li>
<li id="ref-2">National Institute for Health and Care Excellence. Diabetes in pregnancy: management from preconception to the postnatal period (NG3), 2015 (updated 2020). <a href="https://www.nice.org.uk/guidance/ng3" target="_blank" rel="noopener">nice.org.uk/guidance/ng3</a></li>
<li id="ref-3">Adamkin DH; Committee on Fetus and Newborn. Postnatal glucose homeostasis in late-preterm and term infants. <i>Pediatrics</i> 2011;127:575–579. <a href="https://doi.org/10.1542/peds.2010-3851" target="_blank" rel="noopener">doi:10.1542/peds.2010-3851</a></li>
<li id="ref-4">Forster DA, Moorhead AM, Jacobs SE et al. Advising women with diabetes in pregnancy to express breastmilk in late pregnancy (DAME): a multicentre, unblinded, randomised controlled trial. <i>Lancet</i> 2017;389:2204–2213. <a href="https://doi.org/10.1016/S0140-6736(17)31373-9" target="_blank" rel="noopener">doi:10.1016/S0140-6736(17)31373-9</a></li>
<li id="ref-5">Thornton PS, Stanley CA, De Leon DD et al. Recommendations from the Pediatric Endocrine Society for evaluation and management of persistent hypoglycemia in neonates, infants, and children. <i>J Pediatr</i> 2015;167:238–245. <a href="https://doi.org/10.1016/j.jpeds.2015.03.057" target="_blank" rel="noopener">doi:10.1016/j.jpeds.2015.03.057</a></li>
<li id="ref-6">Harris DL, Weston PJ, Signal M, Chase JG, Harding JE. Dextrose gel for neonatal hypoglycaemia (the Sugar Babies Study). <i>Lancet</i> 2013;382:2077–2083. <a href="https://doi.org/10.1016/S0140-6736(13)61645-1" target="_blank" rel="noopener">doi:10.1016/S0140-6736(13)61645-1</a></li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan Chart 11 (image flowcharts)", "<span class='pass'>Verified</span>", "Read from rendered PDF pages 82–83"],
["AAP 2011 thresholds and doses", "<span class='pass'>Verified</span>", "Read from the paper"],
["GIR arithmetic", "<span class='pass'>Checked</span>", "Calculator tested"],
["Dextrose gel on NEML", "<span class='flag'>Gap</span>", "Not listed"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 3.0"]], "qc")}
` }
]
});
