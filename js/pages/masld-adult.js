/* Metabolic dysfunction-associated steatotic liver disease (MASLD, formerly NAFLD) — adults. NEW disease (batch N-1, 27 Nov 2026).
   Sources read directly: AASLD Practice Guidance on NAFLD (Rinella et al., Hepatology 2023; full text on PMC10735173, read in browser 27 Nov 2026:
   no population screening; FIB-4 for everyone with steatosis or metabolic risk; repeat every 1–2 years with pre-DM/T2DM/≥ 2 risk factors;
   FIB-4 < 1.3 primary care; ≥ 1.3 → VCTE/ELF or referral; > 2.67 or ALT raised > 6 months → refer; VCTE < 8 kPa rules out, > 12 kPa advanced
   fibrosis likely, ≥ 20 kPa cirrhosis; normal ALT does not exclude fibrosis; ultrasound not recommended to detect steatosis (low sensitivity);
   weight loss 3–5% improves steatosis, > 10% generally needed for NASH and fibrosis; caloric-deficit Mediterranean-type diet; activity;
   coffee ≥ 3 cups; alcohol mild ≤ 20 g/day women / 30 g men, heavy ≥ 40/60; abstain if ≥ F2; statins safe incl. compensated cirrhosis;
   screen for T2DM; bariatric surgery; semaglutide (T2DM/obesity) and pioglitazone (T2DM) improve NASH; vitamin E 800 IU in selected
   non-diabetics; no proven antifibrotic effect; metformin, UDCA, DPP-4, statins, silymarin NOT NASH treatments; lean NAFLD — BMI < 23 in
   Asians; cirrhosis → HCC and varices surveillance; first-degree relatives of NASH cirrhosis screened);
   Rinella et al. Multisociety Delphi consensus on new nomenclature (Hepatology 2023; PMC10653297 full text via Europe PMC: steatosis + any one
   cardiometabolic criterion = MASLD; MetALD and ALD by alcohol intake; cryptogenic SLD; children — exclude other causes first). The numeric
   cardiometabolic criteria and MetALD alcohol bands are in the consensus figure (image) and are transcribed here from the published figure
   (marked). BCR fatty-liver topic (Bhutan NCD screening 2024 lifestyle advice). NEML 2025: metformin, pioglitazone 15 mg, atorvastatin 10 mg
   listed; semaglutide and vitamin E not found. No STG section. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "masld-adult",
title: "Fatty Liver (MASLD) — Adults",
subtitle: "Fatty liver is common and usually silent. Check for metabolic risk and alcohol, calculate FIB-4 to find the few with liver scarring, and treat with weight loss, exercise, less alcohol and control of diabetes, blood pressure and cholesterol",
age: "Adults", specs: ["gi", "medicine", "endo"],
keywords: ["fatty liver", "MASLD", "NAFLD", "MASH", "NASH", "MetALD", "steatotic liver disease", "hepatic steatosis", "FIB-4", "fibroscan", "elastography", "raised ALT", "metabolic syndrome", "obesity liver", "diabetes liver", "pioglitazone", "semaglutide", "vitamin E", "lean fatty liver"],
related: ["obesity-adult", "dm-adult", "lipids-adult", "alcohol-adult", "cirrhosis-adult", "hcc-adult", "hepatitis-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">MASLD — fat in the liver with at least one metabolic risk factor (overweight, diabetes or prediabetes, high blood pressure, high triglycerides or low HDL) — is the commonest liver disease worldwide. Most people never get liver damage; the job is to find the minority with fibrosis and to cut heart disease risk, which is the main cause of death ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Define</h4><p>Steatosis + any 1 of 5 cardiometabolic criteria = MASLD. With significant alcohol: MetALD or alcohol-related disease ${r(2)}.</p></div>
<div><h4>Stage</h4><p><b>FIB-4</b> for everyone: under 1.3 low risk (primary care); 1.3 or more → elastography or referral; over 2.67 → refer ${r(1)}.</p></div>
<div><h4>Treat</h4><p>Weight loss (3–5% clears fat; over 10% for inflammation and fibrosis), activity, Mediterranean-style diet, little or no alcohol ${r(1)}.</p></div>
<div><h4>Protect</h4><p>Treat diabetes, BP and lipids — <b>statins are safe</b>; screen for diabetes ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>There is no STG section on fatty liver. Weight, waist, blood pressure, glucose and lipids are checked in the national community NCD screening programme, which fits MASLD case-finding ${r(3)} ${LB.loc()}. FIB-4 needs only age, AST, ALT and platelets — available at district hospitals; FibroScan is limited to referral centres ${LB.loc()}. Alcohol (ara and beer) often adds to metabolic risk, so many Bhutanese patients will have MetALD rather than pure MASLD ${LB.loc()}. NEML 2025 lists metformin, pioglitazone 15 mg and atorvastatin; semaglutide and vitamin E were not found ${r(4)}.</p>`)}
` },

{ id: "overview", title: "Names and definitions", html: `
${tbl(["Term", "Meaning"], [
["Steatotic liver disease (SLD)", "Umbrella term for fat in the liver from any cause " + r(2)],
["MASLD (was NAFLD)", "Steatosis + at least one cardiometabolic criterion, without significant alcohol or another cause " + r(2)],
["MASH (was NASH)", "MASLD with inflammation and liver-cell injury; can progress to fibrosis and cirrhosis " + r(2)],
["MetALD", "MASLD plus moderate alcohol (about 140–350 g a week for women, 210–420 g for men) " + r(2) + " " + LB.exp("FIGURE VALUES")],
["Alcohol-related liver disease (ALD)", "Steatosis with heavier alcohol use " + r(2)],
["Cryptogenic SLD", "Steatosis with no metabolic criterion and no other cause — reassess over time " + r(2)]
])}
<h3>Cardiometabolic criteria (any one)</h3>
${tbl(["Criterion", "Threshold (adult)"], [
["Weight", "BMI ≥ 25 kg/m² (≥ 23 in Asians) or waist above the ethnic cut-off (Asian: men ≥ 90 cm, women ≥ 80 cm)"],
["Glucose", "Fasting glucose ≥ 100 mg/dL (5.6 mmol/L), 2-hour ≥ 140 mg/dL, HbA1c ≥ 5.7%, type 2 diabetes, or treatment"],
["Blood pressure", "≥ 130/85 mmHg or treatment"],
["Triglycerides", "≥ 150 mg/dL (1.70 mmol/L) or treatment"],
["HDL cholesterol", "≤ 40 mg/dL (1.0 mmol/L) men, ≤ 50 mg/dL (1.3 mmol/L) women, or treatment"]
])}
<p class="small">From the multisociety consensus figure ${r(2)} ${LB.exp("TRANSCRIBED FROM FIGURE; ASIAN WAIST CUT-OFFS STANDARD")}. Lean MASLD occurs: BMI under 23 in Asians, often with visceral fat and less muscle ${r(1)}.</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("MASLD", [F.s("Insulin resistance, visceral fat, excess calories and fructose; genes (PNPLA3 common in Asians)"), F.a, F.s("Fat accumulates in liver cells (steatosis)"), F.a, F.s("Lipotoxicity → inflammation (MASH)"), F.a, F.e("Fibrosis → cirrhosis → liver failure, HCC")])}
<p>Alcohol is a co-factor that speeds progression ${r(1)}. Cardiovascular disease and non-liver cancers are commoner causes of death than liver disease ${r(1)}.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "AASLD 2023", "Common practice", "This guide"], [
["Ultrasound to find fatty liver", "Not recommended as the tool to identify steatosis (low sensitivity)", "Most MASLD in Bhutan is found on ultrasound", "Use the ultrasound finding as the trigger for FIB-4 — but a normal scan does not exclude MASLD " + r(1) + " " + LB.loc()],
["Raised ALT as the test", "Normal ALT does not exclude fibrosis", "ALT used to decide who is 'sick'", "Use FIB-4, not ALT alone " + r(1)],
["Medicines", "Semaglutide or pioglitazone with diabetes/obesity; vitamin E in selected non-diabetics", "Ursodeoxycholic acid, silymarin, 'liver tonics'", "No liver tonics; pioglitazone for diabetes with MASH " + r(1)],
["Alcohol", "Assess regularly; abstain if F2 fibrosis or more", "'A little is fine'", "Less is better; none with fibrosis " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Usually no symptoms; found on ultrasound or from raised liver enzymes ${r(1)}.</li>
<li>Tiredness, right upper abdominal discomfort in some.</li>
<li>Look for: BMI, waist, BP, acanthosis nigricans, signs of chronic liver disease (spider naevi, palmar erythema, splenomegaly, ascites).</li>
<li>Ask: alcohol (grams a week — a standard drink is about 10 g), diabetes, weight gain, medicines (steroids, amiodarone, methotrexate, tamoxifen), viral hepatitis risk ${r(1)} ${LB.exp("DRUG LIST STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 48-year-old office worker in Thimphu with type 2 diabetes, BMI 28 and waist 98 cm has an ultrasound showing 'fatty liver'; ALT 52, AST 40, platelets 210, drinks about 4 beers a week. <b>MASLD</b> (diabetes + overweight; alcohol under the MetALD range): FIB-4 = 48 × 40 ÷ (210 × √52) ≈ 1.27 — low risk. Plan: 7–10% weight loss, 150 minutes of activity a week, optimise diabetes care, atorvastatin, cut alcohol; repeat FIB-4 in 1–2 years ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Test"], [
["Alcohol-related liver disease", "Heavy drinking, AST > ALT, macrocytosis", "Alcohol history " + P("alcohol-adult", "Alcohol")],
["Hepatitis B or C", "Risk factors; common in the region", "HBsAg, anti-HCV " + P("hepatitis-adult", "Hepatitis")],
["Drug-induced steatosis", "Steroids, amiodarone, methotrexate, valproate, tamoxifen", "Medicine history"],
["Autoimmune hepatitis", "Women, high ALT, other autoimmune disease", "ANA, ASMA, IgG"],
["Wilson's disease (young)", "Under 40, neurological or psychiatric signs", "Caeruloplasmin"],
["Haemochromatosis", "High ferritin and transferrin saturation", "Iron studies"],
["Hypothyroidism, coeliac disease", "Symptoms; associated conditions", "TSH; tTG"]
])}
<p class="small">Ferritin is often mildly raised in MASLD itself.</p>
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>ALT, AST, platelets (for FIB-4), albumin, bilirubin, INR if advanced disease ${r(1)}.</li>
<li>HbA1c or fasting glucose (screen for diabetes), lipids, BP, BMI and waist ${r(1)}.</li>
<li>HBsAg, anti-HCV; other tests by the differential list.</li>
<li>Ultrasound: shows moderate–severe steatosis, liver surface, spleen and focal lesions; misses mild steatosis ${r(1)}.</li>
<li><b>FIB-4</b> = (age × AST) ÷ (platelets × √ALT). Under 1.3 low risk (2.0 if 65 or older); 1.3–2.67 indeterminate; over 2.67 high risk ${r(1)} ${LB.exp("AGE-ADJUSTED CUT-OFF")}.</li>
<li>Elastography (FibroScan) if FIB-4 ≥ 1.3: under 8 kPa rules out advanced fibrosis; 8–12 kPa grey zone; over 12 kPa advanced fibrosis likely; ≥ 20 kPa cirrhosis likely ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Calculators", html: `<div class="calc" data-calc="masldcheck"></div><div class="calc" data-calc="fib4"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Lifestyle — the core treatment</h3>
<ul>
<li><b>Weight loss</b> in those overweight: 3–5% improves fat; more than 10% is usually needed to improve MASH and fibrosis ${r(1)}.</li>
<li>Calorie-deficit diet; less refined carbohydrate, sugar and saturated fat; more fibre and unsaturated fat (Mediterranean-type). In Bhutan: smaller portions of white rice, fewer sweet drinks and fried snacks, more vegetables and pulses ${r(1)} ${LB.loc()}.</li>
<li>Increase activity — benefits even without weight loss; aim for 150 minutes a week ${r(1)} ${r(3)}.</li>
<li>Coffee (3 or more cups a day) is linked with less advanced disease ${r(1)}.</li>
<li><b>Alcohol</b>: assess at every visit; stop completely if there is significant (≥ F2) fibrosis ${r(1)}.</li>
<li>Lean MASLD: diet quality and exercise rather than weight loss ${r(1)}.</li>
</ul>
<h3>Treat the metabolic risk</h3>
<ul>
<li>${dr("atorvastatin")} — safe across MASLD including compensated cirrhosis; use for cardiovascular risk ${r(1)}. See ${P("lipids-adult", "Lipids")}.</li>
<li>Diabetes: screen everyone with MASLD; ${dr("pioglitazone")} improves MASH in type 2 diabetes; semaglutide for diabetes or obesity also improves MASH ${r(1)}. ${dr("metformin")} is fine for diabetes but does not treat MASH ${r(1)}. See ${P("dm-adult", "Diabetes")}.</li>
<li>Blood pressure control; high triglycerides by lifestyle ± fibrate or omega-3 ${r(1)}.</li>
<li>Vitamin E 800 IU daily may be considered in selected non-diabetic adults with biopsy-proven MASH (specialist) ${r(1)}.</li>
<li><b>Do not use</b> ursodeoxycholic acid, silymarin, statins, DPP-4 inhibitors or metformin as treatment for MASH — they do not improve liver histology ${r(1)}.</li>
<li>Bariatric surgery for those who meet obesity-surgery criteria (not in decompensated cirrhosis) ${r(1)}. See ${P("obesity-adult", "Obesity")}.</li>
</ul>
<h3>By fibrosis risk</h3>
${tbl(["FIB-4 / stiffness", "Plan"], [
["FIB-4 < 1.3", "Primary care; lifestyle and risk factors; repeat FIB-4 every 1–2 years if diabetes, prediabetes or ≥ 2 risk factors " + r(1)],
["FIB-4 1.3–2.67", "Elastography or ELF; refer if not available or results disagree " + r(1)],
["FIB-4 > 2.67, stiffness > 12 kPa, or ALT raised > 6 months", "Refer to gastroenterology/hepatology " + r(1)],
["Cirrhosis", "HCC surveillance (ultrasound ± AFP 6-monthly), varices screening, monitor for decompensation " + r(1) + " — see " + P("cirrhosis-adult", "Cirrhosis")]
])}
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Role in MASLD", "NEML 2025"], [
[dr("atorvastatin"), "Cardiovascular protection; safe in MASLD " + r(1), "10 mg " + r(4)],
[dr("pioglitazone"), "Type 2 diabetes with MASH (improves MASH; weight gain, oedema) " + r(1), "15 mg " + r(4)],
["Semaglutide", "Obesity or type 2 diabetes with MASH " + r(1), "Not found " + r(4)],
["Vitamin E 800 IU", "Selected non-diabetic biopsy-proven MASH " + r(1), "Not found " + r(4)],
[dr("metformin"), "For diabetes only — not a MASH treatment " + r(1), "Yes " + r(4)],
["Ursodeoxycholic acid, silymarin, 'liver tonics'", "No benefit — do not use " + r(1), "—"]
])}
` },

{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Type 2 diabetes:</b> higher risk of MASH and advanced fibrosis — screen with FIB-4 ${r(1)}.</li>
<li><b>Family history of MASH cirrhosis:</b> first-degree relatives should be offered fibrosis screening ${r(1)}.</li>
<li><b>PCOS:</b> androgen excess and insulin resistance raise the risk ${r(1)}.</li>
<li><b>Children with obesity:</b> exclude other causes before calling it MASLD (specialist) ${r(2)}.</li>
<li><b>Lean Asians:</b> MASLD at BMI under 23 is common ${r(1)}.</li>
</ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["'Fatty liver' on a routine scan, feels well", "Check metabolic risk, alcohol, HBsAg/HCV, FIB-4 — not just reassurance " + r(1)],
["FIB-4 1.8, no FibroScan in the district", "Refer for elastography or specialist review; meanwhile intensive lifestyle and risk-factor care " + r(1)],
["Patient asks for a liver tonic", "Explain no proven benefit; focus on weight, activity and alcohol " + r(1)],
["Heavy drinker with metabolic risk", "Treat as alcohol-related disease first — stop alcohol " + r(2) + " " + P("alcohol-adult", "Alcohol")],
["Cirrhosis on ultrasound", "Refer; HCC and varices surveillance " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>MASH, fibrosis, cirrhosis, liver failure, hepatocellular carcinoma (sometimes without cirrhosis); cardiovascular disease, type 2 diabetes, chronic kidney disease and non-liver cancers ${r(1)}. See ${P("hcc-adult", "Liver cancer")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Weight, waist, BP, HbA1c, lipids every 6–12 months.</li><li>FIB-4 every 1–2 years in those with diabetes, prediabetes or ≥ 2 risk factors ${r(1)}.</li><li>A drop in ALT of 17 U/L or more suggests improving disease activity ${r(1)}.</li><li>Cirrhosis: 6-monthly HCC surveillance ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image is used here. An ultrasound showing a bright liver supports steatosis but cannot stage fibrosis — use FIB-4 and elastography ${r(1)}.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Fatty liver found", [F.s("Metabolic criteria? Alcohol grams/week? Other causes (HBV, HCV, drugs)?"), F.a, F.s("Classify: MASLD / MetALD / ALD"), F.a, F.d("FIB-4"), F.a, F.b([["< 1.3", F.ok("Primary care; lifestyle; repeat in 1–2 years")], ["1.3–2.67", F.s("Elastography / refer")], ["> 2.67", F.e("Refer to hepatology")]]), F.a, F.ok("Treat diabetes, BP, lipids; statin; less or no alcohol")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling fatty liver harmless without FIB-4", "Missed fibrosis", "FIB-4 for all " + r(1)],
["Using normal ALT to reassure", "Advanced fibrosis often has normal ALT", "FIB-4 / elastography " + r(1)],
["Stopping statins because of fatty liver", "Lost heart protection", "Statins are safe " + r(1)],
["Prescribing liver tonics", "Cost, no benefit", "Lifestyle and risk-factor control " + r(1)],
["Ignoring alcohol", "Faster progression", "Ask grams per week at every visit " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What defines MASLD?", "Hepatic steatosis plus at least one of five cardiometabolic criteria, without significant alcohol or another cause.")}
${qa("Intern/MO", "FIB-4 formula and low-risk cut-off?", "(Age × AST) ÷ (platelets × √ALT); under 1.3 is low risk.")}
${qa("Registrar", "How much weight loss improves MASH and fibrosis?", "Usually more than 10% (3–5% improves steatosis).")}
${qa("Registrar", "Is atorvastatin safe in MASLD?", "Yes — including compensated cirrhosis.")}
${qa("Specialist", "Which drugs improve MASH histology?", "Semaglutide and pioglitazone (with diabetes/obesity) and vitamin E in selected non-diabetics; none proven to reverse fibrosis in the AASLD 2023 review.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Rinella ME, Neuschwander-Tetri BA, Siddiqui MS, et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology 2023;77:1797–1835. <a href="https://doi.org/10.1097/HEP.0000000000000323" target="_blank" rel="noopener">doi:10.1097/HEP.0000000000000323</a></li>
<li id="ref-2">Rinella ME, Lazarus JV, Ratziu V, et al. A multisociety Delphi consensus statement on new fatty liver disease nomenclature. Hepatology 2023;78:1966–1986. <a href="https://doi.org/10.1097/HEP.0000000000000520" target="_blank" rel="noopener">doi:10.1097/HEP.0000000000000520</a></li>
<li id="ref-3">Ministry of Health, Bhutan. Guideline for community-based screening of non-communicable diseases, 2024.</li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["AASLD 2023", "<span class='pass'>Read</span>", "PMC full text, 27 Nov 2026"], ["Nomenclature consensus", "<span class='pass'>Read</span>", "Text; numeric criteria from figure (marked)"], ["EASL–EASD–EASO 2024", "<span class='unv'>Not read</span>", "No open full text found"], ["Bhutan source", "<span class='unv'>Indirect</span>", "No STG section; NCD screening guideline"], ["Calculators", "<span class='pass'>New + reused</span>", "masldcheck (new), fib4 (existing)"]], "qc")}` }
]
});
})();
