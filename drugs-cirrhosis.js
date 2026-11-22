/* Cirrhosis, portal hypertension and alcohol-related liver disease drug cards.
   Bhutan sources: STG 2024 §4.4 Cirrhosis, §4.7 Hepatic encephalopathy, §4.1.5 GI bleeding, §10.2.2 Alcohol use disorder;
   NEMF 2022 / NEML 2025 (monographs and levels).
   International: EASL 2018 decompensated cirrhosis; AASLD 2021 ascites/SBP/HRS guidance; Baveno VII 2022; AASLD 2024 portal hypertension guidance;
   EASL 2018 and AASLD 2019 alcohol-related liver disease; BNF. Doses cross-checked against at least two sources. */
Object.assign(GUIDE.drugs, {

spironolactone_asc: {
  name: "Spironolactone (for ascites in cirrhosis)", cls: "Aldosterone antagonist (potassium-sparing diuretic)", brands: "Aldactone",
  bt: "Listed: 25 mg tablet (see the heart failure card for HF doses). The cirrhosis dose is much higher than the heart failure dose.",
  moa: "<p>In cirrhosis, the kidneys hold on to salt because aldosterone levels are very high (the circulation 'feels' under-filled because the splanchnic vessels are dilated). Spironolactone blocks aldosterone at the distal tubule, so it is the backbone of ascites treatment. A loop diuretic alone works poorly here.</p>",
  ind: "<p>Grade 2 (moderate) ascites, and after large-volume paracentesis to stop the fluid coming back; with furosemide for recurrent ascites.</p>",
  ci: "<ul><li>Hyperkalaemia (K⁺ above 5.5 mmol/L), acute kidney injury, Addison's disease.</li><li>Stop all diuretics in hepatorenal syndrome, severe hyponatraemia (Na under 125), overt encephalopathy or significant AKI.</li></ul>",
  adult: "<p><b>Start 100 mg once daily</b>, alone for a first episode of moderate ascites, or <b>with furosemide 40 mg</b> (keep the 100:40 ratio, which balances potassium). Increase every 3–7 days in steps of 100 mg/40 mg to a <b>maximum of 400 mg spironolactone + 160 mg furosemide daily</b> (AASLD 2021; EASL 2018; NEMF 100–400 mg).</p><p><b>Target weight loss:</b> up to 0.5 kg/day without leg oedema, up to 1 kg/day with oedema; faster loss risks kidney injury.</p>",
  child: "<p>Paediatric ascites: 1–3 mg/kg/day in 1–2 doses (specialist, max 400 mg/day).</p>",
  preg: "<p>Avoid (anti-androgenic effects on a male fetus).</p>", bf: "<p>Compatible.</p>",
  renal: "<p class='warn'>Stop if creatinine rises (AKI) or potassium exceeds 5.5–6.0 mmol/L.</p>",
  hep: "<p>This is the indication. Watch for encephalopathy from over-diuresis and electrolyte shifts.</p>",
  elderly: "<p>Start 50–100 mg; check electrolytes within a week.</p>",
  inter: "<p>ACE inhibitors/ARBs, potassium supplements, trimethoprim, NSAIDs (avoid NSAIDs entirely in cirrhosis).</p>",
  ae: "<p>Hyperkalaemia, hyponatraemia, AKI, painful gynaecomastia (amiloride 10–40 mg daily is an alternative), muscle cramps.</p>",
  mon: "<p>Weight daily; creatinine, sodium and potassium after 3–7 days and after each dose change.</p>",
  other: "<p class='warn'><b>Bhutan STG 2024 prints spironolactone '70–100 mg daily' (§4.4).</b> This is below the effective range for cirrhotic ascites. This guide follows NEMF 2022 and AASLD/EASL: 100–400 mg daily.</p>",
  src: "<p>AASLD 2021 (Biggins SW et al., Hepatology 2021;74:1014–48); EASL 2018 decompensated cirrhosis; NEMF 2022; Bhutan STG 2024 §4.4.</p>"
},

carvedilol: {
  name: "Carvedilol (for portal hypertension)", cls: "Non-selective beta-blocker with alpha-1 blocking activity", brands: "Cardivas, Carloc",
  bt: "Listed: 3.125 mg and 12.5 mg tablets (NRH/RRH). Propranolol 40 mg is available down to DH.",
  moa: "<p>Blocks beta-1 receptors (lowers cardiac output) and beta-2 receptors (lets splanchnic vessels constrict, cutting portal inflow). Its alpha-1 effect also lowers resistance inside the liver. It lowers portal pressure more than propranolol and is easier to take once daily, so Baveno VII prefers it.</p>",
  ind: "<p><b>Clinically significant portal hypertension</b> in compensated cirrhosis, to prevent first decompensation (PREDESCI); primary prophylaxis of variceal bleeding (instead of banding); secondary prophylaxis with banding.</p>",
  ci: "<ul><li>Asthma, heart block, bradycardia under 50/min, severe peripheral arterial disease.</li><li>Reduce or stop if SBP falls below 90 mmHg, sodium below 130 mmol/L, or AKI develops; hold during acute bleeding, sepsis or SBP.</li></ul>",
  adult: "<p><b>6.25 mg once daily</b>; after 3 days increase to <b>6.25 mg twice daily (12.5 mg/day)</b>, the usual target and maximum for portal hypertension. Do not titrate to heart rate (unlike propranolol). Keep SBP at or above 90 mmHg.</p>",
  child: "<p>Not established for portal hypertension in children (specialist).</p>",
  preg: "<p>Use only if clearly needed; neonatal bradycardia and hypoglycaemia possible.</p>", bf: "<p>Limited data; probably compatible at low dose.</p>",
  renal: "<p>No dose change; reduce or stop in AKI.</p>", hep: "<p>Used in cirrhosis at low dose; avoid in decompensated disease with refractory ascites and SBP below 90.</p>",
  elderly: "<p>Postural hypotension; start at 3.125 mg if frail.</p>",
  inter: "<p>Other antihypertensives, verapamil/diltiazem, insulin (masks hypoglycaemia).</p>",
  ae: "<p>Hypotension, dizziness, fatigue, breathlessness, bradycardia.</p>",
  mon: "<p>BP and pulse at each visit; creatinine and sodium if ascites present.</p>",
  src: "<p>de Franchis R et al. Baveno VII, J Hepatol 2022;76:959–74; Villanueva C et al. PREDESCI, Lancet 2019; AASLD 2024 portal hypertension guidance; NEMF 2022.</p>"
},

propranolol: {
  name: "Propranolol (for portal hypertension)", cls: "Non-selective beta-blocker", brands: "Ciplar, Inderal",
  bt: "Listed: 40 mg tablet (NRH/RRH/DH). Bhutan STG 2024 uses propranolol 20 mg BD in cirrhosis.",
  moa: "<p>Reduces cardiac output (beta-1) and causes splanchnic vasoconstriction (beta-2), lowering blood flow into the portal system and the pressure in the varices.</p>",
  ind: "<p>Prevention of first variceal bleed (primary prophylaxis) and of re-bleeding (with band ligation); clinically significant portal hypertension when carvedilol is unavailable.</p>",
  ci: "<ul><li>Asthma, heart block, bradycardia, hypotension.</li><li>Reduce or stop in refractory ascites with SBP under 90, sodium under 130, AKI, SBP or active bleeding.</li></ul>",
  adult: "<p><b>20–40 mg twice daily</b> (STG: 20 mg BD), increased every 2–3 days to a resting <b>heart rate of 55–60/min</b> with SBP at or above 90 mmHg. Maximum about <b>160 mg/day with ascites</b> and 320 mg/day without (AASLD).</p>",
  child: "<p>Specialist use: 0.5–1 mg/kg/day in 2–3 doses, titrated (paediatric portal hypertension).</p>",
  preg: "<p>Usable; watch fetal growth and neonatal bradycardia/hypoglycaemia.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change; reduce or stop in AKI.</p>", hep: "<p>Higher levels in severe liver disease; start low.</p>",
  elderly: "<p>Start 10–20 mg twice daily.</p>",
  inter: "<p>Verapamil, diltiazem, amiodarone (bradycardia); insulin (masks hypoglycaemia).</p>",
  ae: "<p>Fatigue, cold extremities, bradycardia, hypotension, bronchospasm, sleep disturbance.</p>",
  mon: "<p>Pulse and BP at each visit.</p>",
  other: "<p>Do not stop suddenly (rebound tachycardia and portal pressure rise). NEMF lists propranolol only for migraine and thyroid; the portal hypertension dose comes from STG and international guidance.</p>",
  src: "<p>Bhutan STG 2024 §4.4; Baveno VII 2022; AASLD 2024 portal hypertension guidance; BNF.</p>"
},

lactulose: {
  name: "Lactulose", cls: "Non-absorbable disaccharide (osmotic laxative)", brands: "Duphalac, Looz",
  bt: "Listed: 10 g/15 mL solution, 100 mL bottle (NRH/RRH/DH).",
  moa: "<p>Colonic bacteria break lactulose down into acids. The acid traps ammonia as ammonium (which cannot be absorbed) and the laxative effect clears nitrogen-producing bacteria from the gut. This is why it treats and prevents hepatic encephalopathy.</p>",
  ind: "<p>Treatment of overt hepatic encephalopathy; secondary prevention after a first episode; constipation.</p>",
  ci: "<p>Bowel obstruction; galactosaemia.</p>",
  adult: "<p><b>Acute encephalopathy:</b> 25–30 mL orally (or by nasogastric tube) every 1–2 hours until a soft stool is passed, then <b>15–30 mL two to three times daily</b>, adjusted to <b>2–3 soft stools a day</b> (STG and NEMF: 30 mL 8-hourly). In coma: <b>lactulose enema</b> 300 mL in 700 mL water, retained 30–60 minutes, every 4–6 hours.</p><p><b>Prevention after an episode:</b> continue indefinitely, titrated to 2–3 soft stools.</p>",
  child: "<p>Encephalopathy (12–17 years): as adult. Younger children: specialist dosing (about 1–2 mL/kg/day in divided doses).</p>",
  preg: "<p>Safe.</p>", bf: "<p>Safe.</p>",
  renal: "<p>No dose change; watch for dehydration and hypernatraemia from over-purging.</p>", hep: "<p>This is the main indication.</p>",
  elderly: "<p>Same; watch fluid balance.</p>",
  ae: "<p>Bloating, flatulence, cramps; <b>over-use causes dehydration, hypernatraemia and AKI, which worsen encephalopathy.</b> Aim for 2–3 soft stools, not diarrhoea.</p>",
  mon: "<p>Stool frequency, sodium, creatinine.</p>",
  src: "<p>Bhutan STG 2024 §4.7; NEMF 2022; EASL 2022 hepatic encephalopathy guideline; AASLD/EASL 2014 HE guideline.</p>"
},

rifaximin: {
  name: "Rifaximin", cls: "Minimally absorbed rifamycin antibiotic", brands: "Xifaxan, Rcifax",
  bt: "<b>Not on NEML 2025.</b> STG 2024 uses IV metronidazole instead for encephalopathy.",
  moa: "<p>Stays in the gut lumen and reduces ammonia-producing bacteria. Added to lactulose it halves recurrence of encephalopathy and reduces hospital admissions (Bass 2010).</p>",
  ind: "<p>Add-on to lactulose to prevent recurrence after a second episode of overt hepatic encephalopathy.</p>",
  ci: "<p>Hypersensitivity to rifamycins; bowel obstruction.</p>",
  adult: "<p><b>550 mg twice daily</b> (or 400 mg three times daily), long term, with lactulose.</p>",
  child: "<p>Not established under 18.</p>",
  preg: "<p>Avoid (limited data).</p>", bf: "<p>Probably compatible (minimal absorption).</p>",
  renal: "<p>No dose change.</p>", hep: "<p>No dose change; caution in Child-Pugh C (higher absorption).</p>",
  ae: "<p>Nausea, dizziness, peripheral oedema; rarely <i>C. difficile</i>.</p>",
  src: "<p>Bass NM et al. N Engl J Med 2010;362:1071–81; EASL 2022 HE guideline.</p>"
},

metronidazole: {
  name: "Metronidazole", cls: "Nitroimidazole antibiotic", brands: "Flagyl, Metrogyl",
  bt: "Listed: 400 mg tablet (to PHC) and 500 mg/100 mL IV (to DH).",
  moa: "<p>Kills anaerobic bacteria and protozoa by damaging their DNA. In encephalopathy it reduces ammonia-producing gut anaerobes, an older alternative to rifaximin.</p>",
  ind: "<p>Bhutan STG 2024: hepatic encephalopathy (IV, with lactulose). Also anaerobic and intra-abdominal infection, amoebiasis, giardiasis, <i>C. difficile</i>, bacterial vaginosis.</p>",
  ci: "<p>First trimester (relative); alcohol use during and 48 h after (disulfiram-like reaction).</p>",
  adult: "<p><b>Encephalopathy (STG):</b> 500 mg IV 8-hourly, for a short course only (up to about 1 week). <b>Anaerobic infection:</b> 500 mg IV 8-hourly or 400 mg orally 8-hourly.</p>",
  child: "<p>7.5 mg/kg per dose 8-hourly (max 500 mg per dose).</p>",
  preg: "<p>Usable after the first trimester when needed.</p>", bf: "<p>Short courses compatible (may alter milk taste).</p>",
  renal: "<p>No dose change (reduce in dialysis per local protocol).</p>", hep: "<p class='warn'>Accumulates in severe liver disease. Reduce the dose (e.g. 8-hourly → 12-hourly) and keep the course short, because long courses cause neurotoxicity (peripheral neuropathy, cerebellar signs) that can be confused with encephalopathy.</p>",
  inter: "<p>Alcohol (flushing, vomiting); warfarin (INR rises); lithium.</p>",
  ae: "<p>Metallic taste, nausea; peripheral neuropathy and encephalopathy with prolonged use.</p>",
  other: "<p>International guidelines (EASL 2022) prefer rifaximin over metronidazole for long-term use because of neurotoxicity. The STG choice reflects availability.</p>",
  src: "<p>Bhutan STG 2024 §4.7; NEMF 2022; EASL 2022 HE guideline; BNF.</p>"
},

terlipressin: {
  name: "Terlipressin", cls: "Vasopressin analogue (splanchnic vasoconstrictor)", brands: "Glypressin, Terlinz",
  bt: "Listed: 1 mg/10 mL injection (NRH/RRH). At DH, octreotide (or vasopressin) is the available vasoactive drug.",
  moa: "<p>Constricts the dilated splanchnic arteries, cutting blood flow into the portal system and lowering variceal pressure. In hepatorenal syndrome, it restores effective circulating volume and kidney perfusion.</p>",
  ind: "<p>Suspected variceal bleeding (start before endoscopy); hepatorenal syndrome-AKI (with albumin).</p>",
  ci: "<ul><li><b>Ischaemic heart disease, peripheral or mesenteric ischaemia, uncontrolled arrhythmia.</b></li><li><b>Hypoxia (SpO₂ under 90%)</b> or fluid overload: risk of respiratory failure (CONFIRM trial).</li><li>Pregnancy (uterine contraction).</li></ul>",
  adult: "<p><b>Variceal bleeding:</b> <b>2 mg IV every 4 hours</b> until bleeding is controlled, then <b>1 mg every 4 hours</b>; 1 mg doses if under 50 kg; total 2–5 days (NEMF: up to 72 h).</p><p><b>Hepatorenal syndrome:</b> 1 mg IV every 4–6 hours (or continuous infusion 2 mg/day), increased to 2 mg every 4–6 hours if creatinine has not fallen by 25% at day 3; with albumin 20–40 g/day (specialist).</p>",
  child: "<p>Specialist: 20–40 micrograms/kg every 4–6 hours.</p>",
  preg: "<p>Contraindicated.</p>", bf: "<p>Avoid.</p>",
  renal: "<p>Used for HRS; monitor fluid status carefully.</p>", hep: "<p>No dose change.</p>",
  elderly: "<p>Higher ischaemic risk; ECG first.</p>",
  ae: "<p>Abdominal cramps and diarrhoea, pallor, hypertension, bradycardia, <b>digital, skin, mesenteric or myocardial ischaemia</b>, hyponatraemia, pulmonary oedema.</p>",
  mon: "<p>ECG, BP, SpO₂, sodium, fluid balance; stop for chest pain, cyanosis of fingers or abdominal pain.</p>",
  src: "<p>Baveno VII 2022; EASL 2018; AASLD 2021 (HRS); NEMF 2022; Wong F et al. CONFIRM, N Engl J Med 2021.</p>"
},

octreotide: {
  name: "Octreotide", cls: "Somatostatin analogue (splanchnic vasoconstrictor)", brands: "Sandostatin",
  bt: "Listed: 50 micrograms/mL injection (NRH/RRH/DH). STG 2024 recommends it for suspected variceal bleeding 'if available'.",
  moa: "<p>Inhibits the release of gut vasodilator hormones (such as glucagon), causing splanchnic vasoconstriction and reducing portal blood flow.</p>",
  ind: "<p>Suspected variceal bleeding (start at presentation, before endoscopy, continue 2–5 days); the vasoactive drug of choice where terlipressin is unavailable or contraindicated.</p>",
  ci: "<p>Hypersensitivity.</p>",
  adult: "<p><b>50 micrograms IV bolus</b> (repeat in the first hour if bleeding continues), then <b>infusion 50 micrograms/hour for 2–5 days</b> (STG range: bolus 50–100 micrograms, infusion 25–50 micrograms/hour; NEMF 25–50).</p><p><i>Example:</i> 500 micrograms in 50 mL saline = 10 micrograms/mL; run at 5 mL/hour for 50 micrograms/hour.</p>",
  child: "<p>1 microgram/kg bolus (max 50), then 1–2 micrograms/kg/hour (specialist).</p>",
  preg: "<p>Use if needed for life-threatening bleeding.</p>", bf: "<p>Probably compatible.</p>",
  renal: "<p>No dose change for short infusion.</p>", hep: "<p>No dose change.</p>",
  ae: "<p>Hyperglycaemia or hypoglycaemia, nausea, abdominal cramps, bradycardia.</p>",
  mon: "<p>Blood glucose 4–6-hourly; heart rate.</p>",
  src: "<p>Bhutan STG 2024 §4.1.5; NEMF 2022; Baveno VII 2022; EASL 2018.</p>"
},

albumin: {
  name: "Human albumin 20%", cls: "Plasma protein (colloid)", brands: "Human albumin solution",
  bt: "Listed: 20% solution, 100 mL bottle (20 g) (NRH/RRH).",
  moa: "<p>Expands the effective circulating volume and binds toxins and inflammatory molecules. In cirrhosis it prevents the circulatory collapse that follows a large paracentesis, and it lowers kidney failure and death in spontaneous bacterial peritonitis.</p>",
  ind: "<p>After <b>large-volume paracentesis (over 5 L)</b>; <b>spontaneous bacterial peritonitis</b>; <b>hepatorenal syndrome</b> and the diagnostic albumin challenge in AKI.</p>",
  ci: "<p>Heart failure or fluid overload (use with caution); severe anaemia.</p>",
  adult: "<p><b>After paracentesis over 5 L:</b> <b>6–8 g per litre removed</b> (e.g. 8 L drained = 50–60 g, i.e. 2½–3 bottles of 20%). NEMF: 100 mL (20 g) per 3 L removed, or per 2 L if renal function is impaired.</p><p><b>SBP:</b> <b>1.5 g/kg within 6 hours of diagnosis (day 1), then 1 g/kg on day 3</b> (max about 150 g and 100 g).</p><p><b>AKI in cirrhosis / HRS:</b> 1 g/kg/day for 2 days (max 100 g/day) as a volume challenge, then 20–40 g/day with terlipressin if HRS is confirmed.</p>",
  child: "<p>Paracentesis: 1 g/kg (specialist); SBP as adult per kg.</p>",
  preg: "<p>Compatible.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Used in AKI of cirrhosis; monitor for overload.</p>", hep: "<p>Main indication. Routine long-term albumin infusion is not recommended outside trials.</p>",
  ae: "<p>Fluid overload and pulmonary oedema (especially with terlipressin), allergic reactions (rare).</p>",
  mon: "<p>Fluid balance, chest examination, SpO₂.</p>",
  src: "<p>AASLD 2021; EASL 2018; Sort P et al. N Engl J Med 1999 (SBP albumin); NEMF 2022.</p>"
},

vitamin_k: {
  name: "Phytomenadione (vitamin K₁)", cls: "Vitamin K (clotting factor cofactor)", brands: "Kenadion",
  bt: "Listed: 10 mg/mL injection (to PHC). STG 2024 lists 'vitamin K and other supplements' in cirrhosis.",
  moa: "<p>Needed by the liver to make clotting factors II, VII, IX and X. It corrects a raised INR only when the cause is vitamin K <b>deficiency</b> (poor diet, cholestasis, antibiotics), not when the liver simply cannot make the factors.</p>",
  ind: "<p>Raised INR in cirrhosis with suspected deficiency (cholestasis, malnutrition, alcohol use), once; warfarin reversal; newborn prophylaxis.</p>",
  ci: "<p>Avoid rapid IV injection (anaphylactoid reactions).</p>",
  adult: "<p><b>10 mg IV slowly (over 20–30 minutes, diluted) once daily for 3 days.</b> If the INR does not improve, the problem is synthetic failure; do not keep giving it.</p>",
  child: "<p>Neonate: 1 mg IM at birth (0.5 mg if preterm under 1.5 kg). Child: 250–300 micrograms/kg IV (max 10 mg).</p>",
  preg: "<p>Compatible.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No change.</p>", hep: "<p>Little effect in severe synthetic failure.</p>",
  ae: "<p>Anaphylactoid reactions with fast IV injection; injection-site pain.</p>",
  other: "<p><b>INR in cirrhosis does not measure bleeding risk well</b>: anticoagulant proteins fall too, so the balance is 'rebalanced'. Do not give fresh frozen plasma just to correct the INR before banding or paracentesis (Baveno VII; AASLD). FFP and platelets are for active bleeding (STG: keep platelets above 50,000/mm³ in active bleeding).</p>",
  src: "<p>NEMF 2022; Bhutan STG 2024 §4.4; Baveno VII 2022; AGA 2021 coagulation in cirrhosis update.</p>"
},

thiamine: {
  name: "Thiamine (vitamin B₁)", cls: "Vitamin", brands: "Benerva",
  bt: "Listed: 100 mg/mL injection (to DH) and 75 mg tablet (to PHC).",
  moa: "<p>A cofactor for carbohydrate metabolism in the brain. Heavy drinkers are often deficient, and a load of glucose without thiamine can precipitate <b>Wernicke's encephalopathy</b> (confusion, ataxia, eye-movement palsy), which can leave permanent memory loss (Korsakoff's syndrome).</p>",
  ind: "<p>Every patient with harmful drinking, alcohol withdrawal, malnutrition or alcohol-related liver disease; suspected Wernicke's encephalopathy (treat on suspicion).</p>",
  ci: "<p>Hypersensitivity (rare anaphylaxis with IV use; have resuscitation available).</p>",
  adult: "<p><b>Bhutan STG:</b> 100 mg IV stat, then 75 mg orally two to three times daily for up to 3 months.</p><p><b>Suspected Wernicke's (international, e.g. RCP/NICE):</b> <b>500 mg IV three times daily for 3 days</b>, then 250 mg daily for 3–5 days, then oral. <b>At-risk patients (prophylaxis):</b> 250 mg IV/IM daily for 3–5 days, then oral 100 mg two to three times daily.</p><p><b>Always give thiamine before or with any glucose.</b></p>",
  child: "<p>Wernicke's/at risk: specialist dosing (e.g. 100 mg IV daily in adolescents).</p>",
  preg: "<p>Safe; essential in hyperemesis gravidarum.</p>", bf: "<p>Safe.</p>",
  renal: "<p>No change.</p>", hep: "<p>No change.</p>",
  ae: "<p>Rare anaphylaxis (IV); give by slow infusion over 30 minutes.</p>",
  other: "<p class='warn'>The STG IV dose (100 mg once) is lower than the dose international guidance uses to <b>treat</b> Wernicke's encephalopathy. Use the higher regimen when Wernicke's is suspected (confusion, ataxia or ophthalmoplegia in a drinker).</p>",
  src: "<p>Bhutan STG 2024 §10.2.2; NEMF 2022; NICE CG100 (alcohol-use disorders: physical complications); EFNS 2010 Wernicke guideline.</p>"
},

norfloxacin: {
  name: "Norfloxacin (SBP prophylaxis)", cls: "Fluoroquinolone antibiotic", brands: "Norflox",
  bt: "Listed: 400 mg tablet (NRH/RRH). Ciprofloxacin 500 mg (to DH) or co-trimoxazole are alternatives.",
  moa: "<p>Kills Gram-negative gut bacteria that translocate into ascitic fluid, preventing spontaneous bacterial peritonitis.</p>",
  ind: "<p><b>Secondary prophylaxis after an episode of SBP</b> (long term); primary prophylaxis when ascitic protein is under 1.5 g/dL with advanced liver or kidney dysfunction (specialist decision).</p>",
  ci: "<p>Quinolone allergy; history of tendon rupture with quinolones; QT prolongation.</p>",
  adult: "<p><b>400 mg once daily</b>, long term. Alternatives: <b>ciprofloxacin 500 mg once daily</b> or <b>co-trimoxazole 960 mg once daily</b>.</p><p><b>Variceal bleeding:</b> use IV <b>ceftriaxone 1 g daily for up to 7 days</b> instead (STG, Baveno VII), not oral norfloxacin.</p>",
  child: "<p>Not routine; specialist.</p>",
  preg: "<p>Avoid (use co-trimoxazole after the first trimester, or seek advice).</p>", bf: "<p>Avoid.</p>",
  renal: "<p>CrCl under 30: 400 mg once daily (no change for prophylaxis dose).</p>", hep: "<p>No change.</p>",
  inter: "<p>Antacids, iron, zinc (separate by 2 hours); warfarin; theophylline.</p>",
  ae: "<p>Nausea, tendinopathy, QT prolongation, <i>C. difficile</i>, selection of resistant organisms.</p>",
  src: "<p>EASL 2018; AASLD 2021; BSG 2020 ascites guideline; NEMF 2022.</p>"
},

ppi_iv: {
  name: "Omeprazole (IV and oral) in upper GI bleeding", cls: "Proton-pump inhibitor", brands: "Omez, Prilosec",
  bt: "Listed: 40 mg injection vial and 20 mg capsule (to DH). STG 2024 prefers IV omeprazole 80 mg over IV ranitidine.",
  moa: "<p>Blocks the parietal-cell proton pump, raising gastric pH. A higher pH stabilises the clot on a bleeding peptic ulcer. It does not treat variceal bleeding itself.</p>",
  ind: "<p>Upper GI bleeding before endoscopy (peptic ulcer is the commonest cause even in cirrhosis); after endoscopic treatment of a peptic ulcer; short course after variceal banding (reduces post-banding ulcer bleeding).</p>",
  ci: "<p>Hypersensitivity.</p>",
  adult: "<p><b>Before endoscopy:</b> <b>80 mg IV bolus</b> (STG), then 40 mg IV twice daily (or 8 mg/hour infusion after high-risk ulcer therapy for 72 h). <b>Stop or step down</b> once endoscopy shows varices without ulcer.</p><p><b>Long term:</b> do not continue a PPI in cirrhosis without a clear indication: long-term use is linked to SBP, encephalopathy and <i>C. difficile</i>. (STG lists omeprazole 20 mg BD in cirrhosis; review the need regularly.)</p>",
  child: "<p>1 mg/kg once daily IV/oral (max 40 mg).</p>",
  preg: "<p>Compatible.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No change.</p>", hep: "<p>Severe impairment: max 20 mg/day orally for maintenance.</p>",
  inter: "<p>Clopidogrel (weaker effect: pantoprazole preferred), methotrexate, some antiretrovirals.</p>",
  ae: "<p>Headache, diarrhoea; long term: SBP, <i>C. difficile</i>, hypomagnesaemia, B₁₂ deficiency.</p>",
  src: "<p>Bhutan STG 2024 §4.1.5 and §4.4; Baveno VII 2022; NICE CG141; NEMF 2022.</p>"
},

tenofovir_hbv: {
  name: "Tenofovir disoproxil (for hepatitis B)", cls: "Nucleotide analogue (HBV polymerase inhibitor)", brands: "Viread, Tenvir",
  bt: "Listed: 300 mg tablet (NRH/RRH), 'for hepatitis B infections only'.",
  moa: "<p>Blocks hepatitis B virus replication, with a very high barrier to resistance. In cirrhosis, suppressing HBV lowers the risk of decompensation and liver cancer and can partly reverse fibrosis.</p>",
  ind: "<p><b>All patients with HBV-related cirrhosis and detectable HBV DNA</b>, whatever the ALT (WHO 2024, EASL); decompensated HBV cirrhosis (start at once); chronic hepatitis B meeting treatment criteria; prevention of mother-to-child transmission when viral load is high.</p>",
  ci: "<p>Hypersensitivity. Caution with significant kidney disease or osteoporosis (consider entecavir or tenofovir alafenamide, not on NEML).</p>",
  adult: "<p><b>300 mg once daily</b>, usually lifelong in cirrhosis. Never stop without specialist advice: stopping can cause a fatal flare.</p>",
  child: "<p>Age 2 years and over (WHO 2024): weight-based (8 mg/kg once daily, max 300 mg) or tablet at 35 kg and over; specialist.</p>",
  preg: "<p>Safe and recommended when indicated (WHO).</p>", bf: "<p>Compatible.</p>",
  renal: "<p class='warn'>CrCl 30–49: 300 mg every 48 h; 10–29: every 72–96 h; dialysis: weekly after dialysis. Check creatinine and phosphate.</p>", hep: "<p>No change.</p>",
  inter: "<p>Nephrotoxic drugs (aminoglycosides, NSAIDs).</p>",
  ae: "<p>Kidney tubular injury (Fanconi syndrome), reduced bone density, nausea.</p>",
  mon: "<p>Creatinine and phosphate every 3–6 months; HBV DNA at 6–12 months; ultrasound ± AFP every 6 months for liver cancer surveillance.</p>",
  src: "<p>WHO 2024 Guidelines for the prevention, diagnosis, care and treatment of chronic hepatitis B; EASL 2017 HBV guideline; NEMF 2022 / NEML 2025.</p>"
},

diazepam: {
  name: "Diazepam (alcohol withdrawal)", cls: "Long-acting benzodiazepine", brands: "Valium, Calmpose",
  bt: "Listed: 5 mg tablet and 5 mg/mL injection (to PHC). Lorazepam 1 mg tablet only at NRH.",
  moa: "<p>Enhances GABA-A activity, replacing the depressant effect that alcohol has been providing. A long half-life gives a smooth, self-tapering withdrawal and protects against seizures and delirium tremens.</p>",
  ind: "<p>Alcohol withdrawal (prevention and treatment of seizures and delirium tremens); status epilepticus; acute agitation.</p>",
  ci: "<ul><li>Respiratory depression, sleep apnoea, myasthenia gravis.</li><li><b>Decompensated cirrhosis or hepatic encephalopathy:</b> diazepam accumulates. Use symptom-triggered small doses, or lorazepam where available.</li></ul>",
  adult: "<p><b>Bhutan STG fixed taper:</b> days 1–2: 15 mg three times daily; days 3–4: 10 mg TDS; days 5–6: 5 mg TDS; days 7–8: 5 mg at night. <b>Extra for agitation or DTs:</b> 5–10 mg IV slowly, repeated after 30 minutes, max 40 mg/day per STG (more may be needed under specialist monitoring).</p><p><b>Symptom-triggered</b> dosing using the CIWA-Ar score (international) gives less drug for the same effect, and is preferred in liver disease and in hospital.</p>",
  child: "<p>Status epilepticus: 0.3 mg/kg IV (max 10 mg) or 0.5 mg/kg rectally. Not for withdrawal.</p>",
  preg: "<p>Avoid long courses (neonatal withdrawal, floppy infant).</p>", bf: "<p>Avoid regular use.</p>",
  renal: "<p>No major change; caution.</p>", hep: "<p class='warn'>Prolonged half-life; risk of precipitating encephalopathy. Reduce dose and use symptom-triggered dosing; lorazepam or oxazepam are preferred where available.</p>",
  elderly: "<p>Lower doses; falls and over-sedation.</p>",
  inter: "<p>Alcohol, opioids, other sedatives (respiratory depression).</p>",
  ae: "<p>Sedation, respiratory depression, ataxia, dependence if prolonged.</p>",
  mon: "<p>Withdrawal score (CIWA-Ar), sedation, respiratory rate, vital signs 6–8-hourly (STG).</p>",
  src: "<p>Bhutan STG 2024 §10.2.2; NEMF 2022; NICE CG100; ASAM 2020 alcohol withdrawal guideline.</p>"
}
});
