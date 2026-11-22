/* Drug cards. Opened by tapping a drug name anywhere in the guide.
   Doses checked against the sources named on each card. "bt" = Bhutan National Essential Medicines List 2025. */
Object.assign(GUIDE.drugs, {

furosemide: {
  name: "Furosemide", cls: "Loop diuretic", brands: "Lasix",
  bt: "Listed — 10 mg/mL injection (2 mL), 40 mg tablet; down to district hospitals",
  moa: "<p>Blocks the Na-K-2Cl co-transporter in the thick ascending limb of the loop of Henle. It must reach the tubule to work: it is protein-bound, gets into the urine by tubular secretion, and so needs bigger doses as GFR falls or when albumin is low.</p>",
  ind: "<p>Treats fluid overload (pulmonary oedema, hypertension from volume) in AKI and CKD. It does <b>not</b> treat or shorten AKI. Using it to turn oliguria into non-oliguria does not improve survival or recovery.<sup>KDIGO 2012; KDIGO AKI/AKD draft 2026</sup> It can also be used as a <i>furosemide stress test</i> to predict progression.</p>",
  ci: "<ul><li>Hypovolaemia or dehydration: it worsens pre-renal AKI.</li><li>Anuria from obstruction: relieve the obstruction first.</li><li>Severe hypokalaemia or hyponatraemia; hepatic precoma.</li><li>Sulfonamide allergy: cross-reactivity is rare, but take care.</li></ul>",
  adult: "<ul><li><b>Fluid overload in AKI:</b> 40–80 mg IV bolus. Patients already on loop diuretics, or with a low GFR, usually need more; titrate to response. Give no faster than 4 mg/min.</li><li><b>Furosemide stress test (euvolaemic or hypervolaemic stage 1–2 AKI):</b> 1 mg/kg IV if loop-naïve, 1.5 mg/kg if previously exposed. Replace urine losses. Less than 200 mL urine in 2 hours predicts progression to stage 3.<sup>Chawla 2013</sup></li><li><b>CKD oedema or hypertension:</b> 40 mg orally once or twice daily, increased as needed. Advanced CKD often needs 80–250 mg/day.</li><li>No response to a large IV dose (roughly 160–250 mg) is itself information: start planning RRT rather than escalating further.</li></ul>",
  child: "<p><b>0.5–1 mg/kg per dose</b> IV or orally, every 6–12 hours. Oliguric AKI under specialist care may use up to 2 mg/kg per dose. IV rate no faster than 0.5 mg/kg/min (max 4 mg/min).</p><p class='warn'>⚠ Upper caps differ between paediatric formularies (BNFC, RCH, Lexicomp). Confirm the maximum against your unit's formulary before going above 1 mg/kg per dose.</p>",
  neo: "<p>0.5–1 mg/kg IV or oral every 12–24 hours. Use every 24 hours if postmenstrual age is under 31 weeks. The half-life in preterm babies can exceed 24 hours, so drug builds up with repeated doses. Monitor sodium, potassium and calcium (hypercalciuria and nephrocalcinosis), and hearing.</p>",
  preg: "<p>Use only for pulmonary oedema or heart failure. Avoid it for pre-eclampsia or gestational hypertension, where it lowers placental perfusion.</p>",
  bf: "<p>Passes into milk in small amounts. High doses may suppress lactation. Short courses are acceptable.</p>",
  renal: "<p>Bigger doses are needed as GFR falls, because less drug reaches the tubule. It is not removed by haemodialysis.</p>",
  hep: "<p>In cirrhosis, hypokalaemia and alkalosis can precipitate encephalopathy. Start low, and usually pair with spironolactone in ascites.</p>",
  elderly: "<p>Higher risk of dehydration, postural hypotension, falls and hyponatraemia.</p>",
  inter: "<ul><li>Aminoglycosides and vancomycin: additive ototoxicity and nephrotoxicity.</li><li>Lithium: levels rise.</li><li>Digoxin: hypokalaemia increases toxicity.</li><li>NSAIDs: blunt the diuretic effect and add to AKI risk.</li></ul>",
  ae: "<p>Hypokalaemia, hyponatraemia, hypomagnesaemia, metabolic alkalosis, dehydration, hyperuricaemia, ototoxicity (rapid IV or high doses), hypercalciuria in infants.</p>",
  mon: "<p>Urine output, weight, BP, electrolytes and creatinine daily in hospital. Hearing if repeated high doses are given.</p>",
  tox: "<p>Overdose causes profound diuresis, hypovolaemia and electrolyte loss. Treat with fluids and electrolyte replacement. Ototoxicity relates to peak concentration (fast IV push), not only to total dose.</p>",
  src: "<p>KDIGO AKI 2012 §3.4; KDIGO AKI/AKD 2026 public draft §3.3 and 2.3; Chawla LS et al. Crit Care 2013;17:R207; BNF/BNFC monographs; Bhutan NEML 2025.</p>"
},

calcium_gluconate: {
  name: "Calcium gluconate 10%", cls: "Membrane stabiliser (hyperkalaemia); calcium salt",
  bt: "Listed — 100 mg/mL (10%) 10 mL ampoule; down to district hospitals",
  moa: "<p>Raises the threshold potential of cardiac muscle and so protects the heart from hyperkalaemia within minutes. It does <b>not</b> lower potassium. The effect lasts only 30–60 minutes, so potassium-lowering treatment must follow.</p>",
  ind: "<p>Hyperkalaemia with ECG changes (peaked T waves, wide QRS, absent P waves, bradycardia, sine wave), UKKA 2026 gives IV calcium <b>only when the ECG shows changes</b>; a high K⁺ with a normal ECG is treated with shift and removal therapy.</p>",
  ci: "<ul><li><b>Digoxin toxicity:</b> calcium can precipitate arrhythmia. Seek specialist advice; give slowly if essential.</li><li>Never give in the same line as sodium bicarbonate (precipitates as calcium carbonate).</li><li>Extravasation causes tissue necrosis: use a large vein, and a central line in neonates where possible.</li></ul>",
  adult: "<ul><li><b>UK Kidney Association (July 2026):</b> 30 mL of 10% (6.8 mmol) IV <b>over 10 minutes</b>, only if there are ECG changes. Repeat the ECG; give further doses if changes persist. In cardiac arrest or peri-arrest, calcium chloride 10% 10 mL over 5 minutes is preferred (MHRA 2023 alert on under-dosing with gluconate).</li><li><b>ICMR India STW (2026):</b> 10 mL of 10% IV over 2–5 minutes with ECG monitoring, repeatable up to 3 times.</li><li>The 30 mL dose gives about 6.8 mmol of calcium; 10 mL gives about 2.2 mmol. See the comparison in the AKI chapter.</li></ul>",
  child: "<p><b>0.68 mL/kg of 10% (0.15 mmol/kg), max 30 mL</b>, IV or IO. Give over 2–5 minutes if unstable, or 15–20 minutes if stable. Repeat up to twice if the ECG is not normalising.<sup>RCH Melbourne, Aug 2024</sup> Many UK/APLS protocols use 0.5 mL/kg (max 20 mL); either is acceptable.</p>",
  neo: "<p>Hyperkalaemia in neonates is defined as K⁺ above 6.0 mmol/L. Use the same per-kg dose, given slowly with ECG monitoring through a secure (ideally central) line. Peripheral extravasation in neonates causes severe burns.</p>",
  preg: "<p>Safe to use. The benefit far outweighs any risk.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Use as above. In CKD with a high phosphate, repeated calcium raises the calcium × phosphate product; give for the emergency only.</p>",
  inter: "<p>Digoxin (see above); ceftriaxone in neonates (fatal precipitates, so do not co-infuse); bicarbonate and phosphate solutions.</p>",
  ae: "<p>Bradycardia and hypotension if given too fast; tissue necrosis on extravasation; hypercalcaemia with repeated doses.</p>",
  mon: "<p>Continuous ECG during and after the dose.</p>",
  tox: "<p>Hypercalcaemia (confusion, polyuria, arrhythmia) with repeated large doses. There is no fixed human toxic threshold; monitor serum calcium if more than 2–3 doses are needed.</p>",
  src: "<p>UK Kidney Association, Management of Hyperkalaemia in Adults (July 2020; updated Oct 2023 and July 2026); MHRA Drug Safety Update 2023 (calcium gluconate under-dosing); ICMR STW Acute Kidney Injury, July 2026; RCH Melbourne CPG Hyperkalaemia (updated Aug 2024); Bhutan NEML 2025.</p>"
},

insulin_glucose: {
  name: "Soluble insulin with glucose", cls: "Potassium shift therapy", brands: "Actrapid, Huminsulin R",
  bt: "Listed — <b>insulin soluble 40 IU/mL</b> (U-40); dextrose 50% and 25% listed",
  moa: "<p>Insulin drives potassium into cells by stimulating Na⁺/K⁺-ATPase. It lowers serum K⁺ by about 0.6–1.0 mmol/L starting within 15 minutes and peaking at 30–60 minutes. The effect then wanes over the next few hours (RCH: 2–3 hours), so K⁺ <b>rebounds</b> unless potassium is also removed. Glucose is given to prevent hypoglycaemia.</p>",
  ind: "<p>Moderate or severe hyperkalaemia (K⁺ 6.0 mmol/L or more), or any hyperkalaemia with ECG changes, after calcium.</p>",
  ci: "<p>None absolute in the emergency. In marked hyperglycaemia many units reduce or omit the glucose; this is local practice, not a UKKA recommendation. </p>",
  adult: "<ul><li><b>UK Kidney Association (July 2026):</b> 10 units soluble insulin in 25 g glucose by IV infusion over 15 minutes, for moderate (6.0–6.4) or severe (≥6.5 mmol/L) hyperkalaemia (25 g = 50 mL of 50% or 125 mL of 20%). If the pre-treatment glucose was under 7.0 mmol/L, follow with 10% glucose at 50 mL/h for 5 hours.</li><li><b>ICMR India:</b> 10 units in 50 mL of 50% dextrose or 100 mL of 25% dextrose.</li><li>Check capillary glucose before treatment and regularly for at least 6 hours (UKKA 2026 returned to a 6-hour monitoring period). Hypoglycaemia peaks at 1–3 hours and is more common in kidney failure.</li></ul>",
  child: "<p><b>Severe:</b> glucose 10% 5 mL/kg IV bolus (if not hyponatraemic), then soluble insulin <b>0.1 unit/kg IV, max 10 units</b>, then an insulin–glucose infusion. <b>Moderate:</b> 10% glucose with 0.9% saline at maintenance plus insulin infusion 0.1 unit/kg/h. Check glucose every 30–60 minutes.<sup>RCH Aug 2024</sup></p>",
  neo: "<p>Neonatal units use insulin infusions (typically 0.1 unit/kg/h) with glucose, under neonatal specialist direction. Glucose checks every 30 minutes initially.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Safe.</p>",
  renal: "<p>Insulin is cleared by the kidney, so its effect lasts longer in kidney failure. Hypoglycaemia risk is higher; extend glucose monitoring.</p>",
  other: "<p class='warn'><b>Bhutan safety point:</b> soluble insulin on the NEML is 40 units/mL. 10 units = 0.25 mL. Drawing it into a U-100 syringe and reading the \"10\" mark gives the wrong dose. Use a U-40 syringe, or draw 0.25 mL with a 1 mL syringe and confirm with a second person.</p>",
  ae: "<p>Hypoglycaemia (the main danger), hypokalaemia with repeated doses.</p>",
  mon: "<p>Glucose as above; potassium at 1, 2, 4, 6 and 24 hours to catch rebound.</p>",
  tox: "<p>Insulin overdose causes prolonged hypoglycaemia, worse in kidney failure. Treat with glucose infusion and close monitoring.</p>",
  src: "<p>UK Kidney Association, Management of Hyperkalaemia in Adults (July 2020; updated Oct 2023 and July 2026); ICMR STW AKI July 2026; RCH Hyperkalaemia CPG Aug 2024; Bhutan NEML 2025.</p>"
},

salbutamol: {
  name: "Salbutamol (nebulised)", cls: "β2-agonist — potassium shift", brands: "Asthalin",
  bt: "Listed — respirator solution 5 mg/mL (down to PHC), 100 microgram inhaler",
  moa: "<p>β2 stimulation activates Na⁺/K⁺-ATPase and shifts potassium into cells. It lowers K⁺ by about 0.5–1 mmol/L in 30 minutes, lasting 2–3 hours. It adds to the effect of insulin.</p>",
  ind: "<p>An add-on to insulin–glucose in hyperkalaemia. Never use it alone: up to 40% of patients with kidney failure do not respond.</p>",
  ci: "<p>Tachyarrhythmia; use caution in ischaemic heart disease (consider a smaller dose of 10 mg or skipping it).</p>",
  adult: "<p><b>10–20 mg nebulised</b> (UKKA); ICMR uses 10 mg (four 2.5 mg respules). With the 5 mg/mL solution, 10 mg = 2 mL.</p>",
  child: "<p><b>25 kg or less: 2.5 mg; over 25 kg: 5 mg</b> nebulised, repeat every 1–2 hours.<sup>RCH Aug 2024</sup> IV salbutamol only after senior discussion.</p>",
  neo: "<p>Nebulised or IV salbutamol has been used in neonatal hyperkalaemia, but evidence is limited. Neonatal specialist decision.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Safe.</p>",
  renal: "<p>No adjustment for single emergency doses.</p>",
  ae: "<p>Tachycardia, tremor, hyperglycaemia, palpitations.</p>",
  src: "<p>UK Kidney Association, Management of Hyperkalaemia in Adults (July 2020; updated Oct 2023 and July 2026); ICMR STW AKI 2026; RCH Aug 2024; Bhutan NEML 2025.</p>"
},

sodium_bicarbonate: {
  name: "Sodium bicarbonate", cls: "Alkalinising agent",
  bt: "Listed — <b>7.5% injection</b> (≈0.9 mmol/mL; to DH with OT) and 500 mg tablet",
  moa: "<p>Buffers hydrogen ions. In acidosis it shifts potassium into cells (a modest effect). In CKD, correcting chronic acidosis reduces muscle wasting and bone loss and may slow progression.</p>",
  ind: "<ul><li><b>AKI with severe metabolic acidosis (pH under 7.20):</b> IV bicarbonate is suggested over RRT unless another urgent RRT indication exists.<sup>KDIGO AKI/AKD draft 2026, Rec 3.1.3 (2C)</sup></li><li>Hyperkalaemia <b>with</b> metabolic acidosis.</li><li><b>CKD metabolic acidosis:</b> oral, when serum bicarbonate is persistently under 18 mmol/L (KDIGO 2024) or under 20 mmol/L with eGFR under 30 (NICE NG203).</li></ul>",
  ci: "<ul><li>Fluid overload or pulmonary oedema (it is a large sodium load).</li><li>Hypocalcaemia: alkalinisation lowers ionised calcium and can trigger tetany or seizures. Correct calcium first.</li><li>Never in the same line as calcium.</li></ul>",
  adult: "<ul><li><b>IV (severe acidosis):</b> 50–100 mmol over 30–60 minutes, then reassess the gas. 8.4% = 1 mmol/mL. <b>Bhutan's 7.5% ≈ 0.9 mmol/mL</b>, so 100 mmol is about 112 mL.</li><li><b>Oral (CKD):</b> start 500 mg (about 6 mmol) two or three times daily; titrate to bicarbonate 22–26 mmol/L. Usual range 1.5–6 g/day.</li></ul>",
  child: "<ul><li><b>Severe hyperkalaemia with acidosis:</b> 1–3 mmol/kg IV over 5 minutes. <b>Mild–moderate:</b> 1 mmol/kg over 30 minutes.<sup>RCH</sup> With 7.5% solution, 1 mmol ≈ 1.1 mL.</li><li><b>CKD acidosis (oral):</b> typically 1–2 mmol/kg/day in 2–4 divided doses, titrated to bicarbonate 22 mmol/L or more. Correcting acidosis is part of growth care.</li></ul>",
  neo: "<p>Avoid rapid boluses (risk of intraventricular haemorrhage in preterm babies). If used, dilute to 4.2% (0.5 mmol/mL) and give slowly under neonatal guidance.</p>",
  preg: "<p>Acceptable when indicated; watch sodium and fluid load.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Oral therapy is a sodium load (each 500 mg tablet contains about 6 mmol sodium). Watch BP and oedema.</p>",
  ae: "<p>Sodium and fluid overload, hypokalaemia, hypocalcaemic tetany, metabolic alkalosis, bloating (oral).</p>",
  mon: "<p>Blood gas, sodium, potassium, ionised calcium; BP and weight with oral therapy.</p>",
  tox: "<p>Excess causes metabolic alkalosis, hypernatraemia and hypokalaemia.</p>",
  src: "<p>KDIGO AKI/AKD public draft 2026 (Rec 3.1.3); KDIGO CKD 2024 PP 3.10.1; NICE NG203 (2021); RCH Aug 2024; ICMR STW CKD 2026 (venous bicarbonate below 18 mEq/L); Bhutan NEML 2025.</p>"
},

polystyrene: {
  name: "Calcium polystyrene sulfonate", cls: "Potassium-binding resin", brands: "Calcium Resonium, K-Bind",
  bt: "Listed — powder; RRH, and DH with a specialist",
  moa: "<p>Exchanges calcium for potassium in the colon, so potassium is lost in stool. The onset is slow (hours) and the effect is unpredictable. It is used for ongoing control, not for the emergency.</p>",
  ind: "<p>Moderate hyperkalaemia, or after emergency treatment while waiting for dialysis or recovery. <b>UKKA 2026 no longer recommends calcium resonium routinely</b>, for either acute or chronic hyperkalaemia, because newer binders (SZC, patiromer) work faster and more reliably. In Bhutan it remains the only binder on the NEML, so it is still used here, with these limits in mind.</p>",
  ci: "<ul><li>Bowel obstruction, ileus, recent bowel surgery: risk of colonic necrosis.</li><li>Neonates by mouth (risk of necrosis and impaction).</li><li>Hypercalcaemia.</li></ul>",
  adult: "<p><b>15 g orally 3–4 times daily</b> in water (not fruit juice). Or 30 g rectally as a retention enema, held for 9 hours, then irrigate. Give lactulose to prevent constipation.</p>",
  child: "<p><b>0.5–1 g/kg every 6 hours, max 30 g per dose</b>, oral or rectal, with lactulose.<sup>RCH Aug 2024</sup> Separate oral doses from other oral medicines by at least 3 hours.</p>",
  neo: "<p>Rectal route only, under neonatal specialist advice. Oral use is avoided.</p>",
  preg: "<p>Not absorbed; acceptable if needed.</p>", bf: "<p>Not absorbed; compatible.</p>",
  inter: "<p>Binds other oral drugs (levothyroxine, lithium and others): separate by 3 hours or more. Avoid sorbitol (necrosis).</p>",
  ae: "<p>Constipation and faecal impaction, colonic necrosis (rare but serious), hypercalcaemia, hypomagnesaemia.</p>",
  mon: "<p>Potassium daily; bowel action.</p>",
  src: "<p>UK Kidney Association, Management of Hyperkalaemia in Adults (July 2020; updated Oct 2023 and July 2026) (Guidelines 8.1 and 16.6); RCH Aug 2024; KDIGO CKD 2024 PP 3.11.2.1 (check local availability); Bhutan NEML 2025.</p>"
},

szc: {
  name: "Sodium zirconium cyclosilicate", cls: "Selective potassium binder", brands: "Lokelma",
  bt: "Not listed — not on Bhutan NEML 2025",
  moa: "<p>An inorganic crystal that traps potassium in exchange for sodium and hydrogen throughout the gut. It lowers K⁺ within about an hour.</p>",
  ind: "<p>Acute hyperkalaemia (alongside insulin–glucose) and chronic hyperkalaemia that would otherwise force a stop to ACE inhibitors or ARBs.</p>",
  ci: "<p>Use caution in oedema or heart failure (sodium load: about 400 mg sodium per 5 g).</p>",
  adult: "<p><b>10 g three times daily for up to 72 hours</b>, then 5 g once daily maintenance (range 5 g on alternate days to 10 g daily).</p>",
  child: "<p>Not licensed for children. Specialist use only.</p>",
  preg: "<p>Not absorbed; limited data.</p>", bf: "<p>Not absorbed; likely compatible.</p>",
  ae: "<p>Oedema, hypokalaemia.</p>",
  src: "<p>UKKA 2020/2023; product SmPC.</p>"
},

noradrenaline: {
  name: "Noradrenaline (norepinephrine)", cls: "Vasopressor (α1 > β1 agonist)",
  bt: "Listed — 2 mg/mL (2 mL) ampoule (check your store: 1 mg/mL also appears)",
  moa: "<p>Constricts arterioles and raises mean arterial pressure. In shock with AKI it restores kidney perfusion pressure once the circulation is filled.</p>",
  ind: "<p>Hypotension not corrected by an initial fluid bolus in patients with or at risk of AKI. Fluids and vasopressors are used together, not one instead of the other.<sup>KDIGO 2026 draft PP 3.2.2</sup> Target MAP above 65 mmHg in most adults (Rec 3.2.1, 2C); higher in chronic hypertension.</p>",
  ci: "<p>Uncorrected hypovolaemia (fill first). Extravasation causes tissue necrosis.</p>",
  adult: "<p>Start <b>0.05–0.1 microgram/kg/min</b> and titrate to MAP. Usual range up to 0.5 microgram/kg/min; above this, add vasopressin or other agents in ICU. Central line preferred; short-term peripheral use through a large proximal vein with close watching is acceptable.</p>",
  child: "<p><b>0.05–1 microgram/kg/min</b>, titrated to age-appropriate BP targets.</p>",
  neo: "<p>0.05–1 microgram/kg/min under NICU care.</p>",
  preg: "<p>Use when needed to maintain maternal perfusion.</p>",
  renal: "<p>No adjustment.</p>",
  ae: "<p>Arrhythmia, peripheral and gut ischaemia, extravasation necrosis.</p>",
  mon: "<p>Continuous BP (arterial line ideally), urine output, lactate, peripheries.</p>",
  src: "<p>KDIGO AKI/AKD 2026 public draft §3.2; Surviving Sepsis Campaign 2021; Bhutan NEML 2025.</p>"
},

theophylline: {
  name: "Theophylline (single neonatal dose)", cls: "Adenosine receptor antagonist (methylxanthine)",
  bt: "Not listed — no IV theophylline or aminophylline on NEML 2025",
  moa: "<p>After asphyxia, adenosine constricts the afferent arteriole and drops GFR. Theophylline blocks adenosine receptors and preserves renal blood flow.</p>",
  ind: "<p>Term neonates with <b>severe perinatal asphyxia</b>, to prevent AKI. The KDIGO 2026 draft recommends a single dose (Rec 3.12.4.1, grade 1A).</p>",
  ci: "<p>Seizure risk is a theoretical concern. Most trials pre-date routine therapeutic hypothermia, so the evidence is weaker for cooled babies.</p>",
  neo: "<p>Randomised trials used a <b>single IV dose of 5–8 mg/kg</b> within the first hour of life, most often 5 mg/kg. KDIGO 2012 already suggested a single dose (2B), and the 2026 draft strengthens this to 1A without stating a dose. Jenik et al. (Pediatrics 2000) used 8 mg/kg; most later trials used 5 mg/kg.</p><p class='warn'>⚠ Confirm the dose with your neonatal formulary. The aminophylline equivalent is about 1.25× the theophylline dose (aminophylline is ~80% theophylline).</p>",
  other: "<p class='warn'><b>Bhutan:</b> not on the NEML, so it would need special procurement.</p>",
  ae: "<p>Tachycardia, feed intolerance, seizures at toxic levels.</p>",
  src: "<p>KDIGO AKI/AKD 2026 public review draft, Rec 3.12.4.1. Dose range from the trials summarised there; not independently verified against a neonatal formulary.</p>"
},

enalapril: {
  name: "Enalapril", cls: "ACE inhibitor",
  bt: "Listed — 5 mg tablet; down to DH",
  moa: "<p>Blocks conversion of angiotensin I to II. This dilates the efferent arteriole, lowering glomerular pressure and proteinuria, and lowers systemic BP. The early rise in creatinine (up to 30%) reflects this haemodynamic effect and is expected.</p>",
  ind: "<p>CKD with albuminuria: recommended for A3 without diabetes (1B) and A2–A3 with diabetes (1B); suggested for A2 without diabetes (2C).<sup>KDIGO 2024</sup> Also hypertension and heart failure. Restart after AKI once stable (KDIGO 2026 draft, Rec 6.2.1).</p>",
  ci: "<ul><li><b>Pregnancy</b>: fetotoxic.</li><li>Angioedema history; bilateral renal artery stenosis.</li><li>Do not combine with an ARB or aliskiren.</li><li><b>Hold during AKI, dehydration or acute illness</b> (sick-day rule).</li></ul>",
  adult: "<p>Start 2.5–5 mg once daily; titrate every 2–4 weeks to the <b>highest tolerated dose, max 40 mg/day</b> (once daily or in two doses). Check creatinine and potassium 2–4 weeks after each change.</p>",
  child: "<p>Age 1 month or older: start <b>0.08 mg/kg once daily (up to 5 mg)</b>; max <b>0.6 mg/kg/day (up to 40 mg)</b>.<sup>AAP 2017</sup> Not recommended if eGFR is under 30. A liquid can be made from tablets by the pharmacy.</p>",
  neo: "<p>Avoid in preterm neonates (renal failure, profound hypotension). Term neonates: specialist only, with very low starting doses.</p>",
  preg: "<p><b>Contraindicated</b> in the 2nd and 3rd trimesters (oligohydramnios, renal agenesis-like fetopathy, skull hypoplasia). Stop when pregnancy is planned or confirmed, and counsel women of child-bearing age.</p>",
  bf: "<p>Acceptable: very low milk levels. Enalapril is a preferred ACE inhibitor in breastfeeding.</p>",
  renal: "<p>Start low when eGFR is under 30; continue even when eGFR falls below 30 (KDIGO 2024 PP 3.6.7). If creatinine rises more than 30% within 4 weeks, <b>review</b>: look for volume depletion, NSAIDs or renal artery stenosis, and reduce the dose or pause (KDIGO PP 3.6.4). Also review if potassium cannot be controlled. Partly removed by dialysis.</p>",
  hep: "<p>It is a prodrug activated in the liver; the response may be reduced.</p>",
  elderly: "<p>Start low; watch postural hypotension and potassium.</p>",
  inter: "<p>Potassium-sparing diuretics, potassium supplements, trimethoprim, NSAIDs (the \"triple whammy\" with diuretics), lithium.</p>",
  ae: "<p>Dry cough (about 10%; switch to an ARB), hyperkalaemia, first-dose hypotension, angioedema, creatinine rise.</p>",
  mon: "<p>BP, creatinine and potassium at 2–4 weeks, then with routine CKD bloods.</p>",
  src: "<p>KDIGO CKD 2024 §3.6; Flynn JT et al. AAP Clinical Practice Guideline, Pediatrics 2017;140:e20171904; KDIGO AKI/AKD 2026 draft §6.2; Bhutan NEML 2025.</p>"
},

losartan: {
  name: "Losartan", cls: "Angiotensin II receptor blocker (ARB)",
  bt: "Listed — 25 mg and 50 mg tablets, down to PHC (NEML 2025). Second-line in the Bhutan Hypertension Protocol v3.5 (add 25 mg OD to hydrochlorothiazide).",
  moa: "<p>Blocks AT1 receptors; the kidney effects are the same as an ACE inhibitor, without the cough.</p>",
  ind: "<p>As for enalapril; use when an ACE inhibitor causes cough. Diabetic kidney disease evidence: RENAAL trial.</p>",
  ci: "<p>Pregnancy; combination with an ACE inhibitor; hold in AKI and sick days.</p>",
  adult: "<p>Start 25–50 mg once daily; titrate to <b>100 mg once daily</b> (highest tolerated dose).</p>",
  child: "<p>Age 6 years or older: <b>0.7 mg/kg once daily (up to 50 mg)</b>; max <b>1.4 mg/kg/day (up to 100 mg)</b>.<sup>AAP 2017</sup> Not recommended if eGFR is under 30.</p>",
  preg: "<p><b>Contraindicated</b>, as for ACE inhibitors.</p>", bf: "<p>No data; an ACE inhibitor (enalapril) is preferred.</p>",
  renal: "<p>No dose change for kidney function. Same creatinine and potassium rules as ACE inhibitors.</p>",
  hep: "<p>Use a lower starting dose (25 mg) in hepatic impairment.</p>",
  ae: "<p>Hyperkalaemia, hypotension, creatinine rise.</p>",
  src: "<p>KDIGO CKD 2024 §3.6; AAP 2017; Brenner BM et al. RENAAL, NEJM 2001;345:861–869; Bhutan NEML 2025.</p>"
},

dapagliflozin: {
  name: "Dapagliflozin", cls: "SGLT2 inhibitor", brands: "Forxiga, Dapa, others",
  bt: "Listed — 10 mg tablet; NRH and RRH",
  moa: "<p>Blocks sodium–glucose reabsorption in the proximal tubule. More sodium reaches the macula densa, which restores tubuloglomerular feedback, constricts the afferent arteriole and lowers glomerular hyperfiltration. The small early fall in eGFR (about 3–5 mL/min) is expected and protective, not harmful.</p>",
  ind: "<p><b>KDIGO 2024 (1A):</b> T2D with CKD and eGFR 20 or more; any adult CKD with eGFR 20 or more and ACR 200 mg/g (20 mg/mmol) or more; heart failure regardless of albuminuria. <b>2B:</b> eGFR 20–45 with ACR below 200 mg/g. Benefit was shown in DAPA-CKD with and without diabetes.</p>",
  ci: "<ul><li>Type 1 diabetes (risk of ketoacidosis).</li><li>Kidney transplant, polycystic kidney disease and immunosuppression for glomerular disease: excluded from trials, so seek specialist advice.</li><li>Recurrent genital or urinary infection; foot ulceration.</li></ul>",
  adult: "<p><b>10 mg once daily</b>, no titration. Start if eGFR is 20 or more; once started, continue below 20 until dialysis, if tolerated (KDIGO PP 3.7.1). <b>Sick-day rule:</b> withhold during vomiting, prolonged fasting, surgery or critical illness.</p>",
  child: "<p>Paediatric CKD use is not established. KDIGO 2024 says SGLT2 inhibitors \"may be considered in older children\". Specialist decision only.</p>",
  preg: "<p>Avoid (animal data show kidney toxicity in late development).</p>", bf: "<p>Avoid.</p>",
  renal: "<p>Glycaemic effect is lost when eGFR is under 45, but kidney and heart protection remain.</p>",
  hep: "<p>No dose change is needed for mild–moderate impairment; experience in severe impairment is limited, so use with caution.</p>",
  elderly: "<p>Watch for volume depletion, especially with loop diuretics.</p>",
  inter: "<p>Diuretics (volume depletion); insulin or sulfonylureas (hypoglycaemia: reduce their doses).</p>",
  ae: "<p>Genital mycotic infection, volume depletion, euglycaemic ketoacidosis, Fournier's gangrene (rare).</p>",
  mon: "<p>eGFR and volume status at 2–4 weeks; there is no need to stop for the expected dip.</p>",
  src: "<p>KDIGO CKD 2024 §3.7; Heerspink HJL et al. DAPA-CKD, NEJM 2020;383:1436–1446; EMPA-KIDNEY Collaborative Group, NEJM 2023;388:117–127; Bhutan NEML 2025.</p>"
},

finerenone: {
  name: "Finerenone", cls: "Non-steroidal mineralocorticoid receptor antagonist", brands: "Kerendia",
  bt: "Not listed — not on NEML 2025",
  moa: "<p>Blocks mineralocorticoid receptors in kidney, heart and vessels, reducing inflammation and fibrosis. It raises potassium less than spironolactone.</p>",
  ind: "<p>Adults with T2D, eGFR above 25, normal potassium and persistent albuminuria (ACR above 30 mg/g) despite maximum tolerated RAS inhibitor (KDIGO 2024 Rec 3.8.1, 2A). Can be added to a RAS inhibitor and an SGLT2 inhibitor.</p>",
  ci: "<p>K⁺ above 5.0 mmol/L at start; adrenal insufficiency; strong CYP3A4 inhibitors.</p>",
  adult: "<p>K⁺ 4.8 or below: start <b>10 mg daily if eGFR 25–59</b>, <b>20 mg if 60 or more</b>. K⁺ 4.9–5.5: continue and monitor. K⁺ above 5.5: hold.<sup>KDIGO 2024 Fig. 26</sup></p>",
  child: "<p>Not studied in children.</p>",
  preg: "<p>Avoid.</p>", bf: "<p>Avoid.</p>",
  src: "<p>KDIGO CKD 2024 §3.8; Bakris GL et al. FIDELIO-DKD, NEJM 2020;383:2219–2229.</p>"
},

amlodipine: {
  name: "Amlodipine", cls: "Dihydropyridine calcium-channel blocker",
  bt: "Listed — 5 mg tablet; down to PHC",
  moa: "<p>Relaxes arteriolar smooth muscle. It is BP-neutral for proteinuria, so it is usually added to a RAS inhibitor rather than replacing one.</p>",
  ind: "<p>Essential hypertension: one of the three first-line classes (WHO 2021, ISH 2020, ESC 2024), alone or with an ACE inhibitor/ARB; preferred in older adults and people of African or South Asian ancestry when a single drug is used. In CKD it is added to a RAS inhibitor (or used first when a RAS inhibitor is contraindicated or pregnancy is planned). KDIGO 2024 names a CCB and/or diuretic as add-on therapy in children.</p>",
  ci: "<p>Cardiogenic shock; severe aortic stenosis.</p>",
  adult: "<p>5 mg once daily; max 10 mg.</p>",
  child: "<p><b>1–5 years:</b> 0.1 mg/kg/day, max 0.6 mg/kg/day (up to 5 mg/day). <b>6 years or older:</b> 2.5 mg daily, max 10 mg/day.<sup>AAP 2017</sup></p>",
  preg: "<p>Limited data but widely used; nifedipine and labetalol have more pregnancy evidence.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No adjustment; not dialysed.</p>", hep: "<p>Start at a lower dose; the half-life is prolonged.</p>",
  ae: "<p>Ankle oedema, flushing, gum hypertrophy.</p>",
  src: "<p>AAP 2017; KDIGO CKD 2024 (paediatric figure); BNF; Bhutan NEML 2025.</p>"
},

nifedipine: {
  name: "Nifedipine", cls: "Dihydropyridine calcium-channel blocker",
  bt: "Listed — 20 mg sustained-release tablet; down to DH",
  moa: "<p>Arteriolar vasodilator.</p>",
  ind: "<p>Adult hypertension as the calcium-channel blocker step (Bhutan STG 2024: add after an ARB/ACE inhibitor); hypertension in pregnancy (sustained-release only); hypertensive urgency in children.</p>",
  ci: "<p>Avoid immediate-release capsules for rapid BP lowering in adults (uncontrolled falls, stroke, MI).</p>",
  adult: "<p>Sustained-release 20 mg twice daily (max 90 mg/day for some MR forms; follow the product).</p>",
  child: "<p><b>Hypertensive urgency (stable child):</b> oral 0.25–0.5 mg/kg/day (max 20 mg), titrated to max 3 mg/kg/day (max 120 mg).<sup>RCH Hypertension CPG, 2021</sup> Hypertensive emergency (encephalopathy or other end-organ signs) needs IV therapy: lower BP by no more than 25% of the planned reduction over the first 8 hours, and the rest over the next 12–24 hours (AAP 2017).</p>",
  preg: "<p>First-line choice in pregnancy hypertension (sustained-release).</p>", bf: "<p>Compatible.</p>",
  ae: "<p>Headache, flushing, reflex tachycardia, oedema.</p>",
  src: "<p>RCH Hypertension in children and adolescents CPG (updated June 2021); AAP 2017; Bhutan NEML 2025.</p>"
},

labetalol: {
  name: "Labetalol", cls: "Combined α1- and β-blocker",
  bt: "Listed — 5 mg/mL (20 mL) injection; to RRH/DH",
  moa: "<p>Lowers peripheral resistance without reflex tachycardia.</p>",
  ind: "<p>Hypertensive emergency (including in AKI with volume-independent hypertension, and in pregnancy).</p>",
  ci: "<p>Asthma, heart block, decompensated heart failure, bradycardia.</p>",
  adult: "<p>20 mg IV over 2 minutes, then 40–80 mg every 10 minutes to a total of 300 mg; or an infusion of 0.5–2 mg/min.</p>",
  child: "<p>IV bolus <b>0.2–1 mg/kg (max 40 mg per dose)</b>, or infusion <b>0.25–3 mg/kg/h</b>.<sup>AAP 2017</sup> Reduce BP by no more than 25% of the planned reduction over the first 8 hours.</p>",
  preg: "<p>First-line IV drug for severe hypertension in pregnancy.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No adjustment.</p>", hep: "<p>Reduce the dose; hepatotoxicity is rare.</p>",
  ae: "<p>Hypotension, bradycardia, bronchospasm, scalp tingling.</p>",
  src: "<p>AAP 2017 (acute severe hypertension table); BNF; Bhutan NEML 2025.</p>"
},

atorvastatin: {
  name: "Atorvastatin", cls: "HMG-CoA reductase inhibitor (statin)",
  bt: "Listed — 10 mg tablet; down to DH",
  moa: "<p>Lowers LDL cholesterol. In CKD, statin-based therapy reduces atherosclerotic events (SHARP trial).</p>",
  ind: "<p>KDIGO 2024: all adults aged 50 or more with eGFR under 60 not on dialysis (1A); aged 50 or more with CKD G1–G2 (1B); aged 18–49 with diabetes, coronary disease, prior stroke or high 10-year risk (2A). Do not start routinely in people already on dialysis.</p>",
  ci: "<p>Active liver disease; pregnancy.</p>",
  adult: "<p>10–20 mg once daily for primary prevention in CKD (up to 80 mg in established vascular disease).</p>",
  child: "<p>Not routine in paediatric CKD. Specialist lipid assessment for familial hyperlipidaemia.</p>",
  preg: "<p>Stop when pregnancy is planned or confirmed.</p>", bf: "<p>Avoid.</p>",
  renal: "<p><b>No dose adjustment</b> at any GFR. This is why it is preferred over rosuvastatin in advanced CKD.</p>",
  inter: "<p>Clarithromycin, azole antifungals, ciclosporin (myopathy).</p>",
  ae: "<p>Myalgia, myopathy and rhabdomyolysis (rare), raised transaminases.</p>",
  src: "<p>KDIGO CKD 2024 §3.15.1; Baigent C et al. SHARP, Lancet 2011;377:2181–2192; Bhutan NEML 2025.</p>"
},

epoetin: {
  name: "Erythropoietin (epoetin alfa/beta)", cls: "Erythropoiesis-stimulating agent (ESA)",
  bt: "Listed — 2,000 IU (0.5 mL) injection; NRH and RRH",
  moa: "<p>Replaces the erythropoietin the failing kidney no longer makes.</p>",
  ind: "<p>Anaemia of CKD after iron deficiency and other causes are corrected. KDIGO 2026: consider an ESA for symptomatic renal anaemia, generally at <b>Hb 8.5–10 g/dL</b>, after correcting iron deficiency; the decision is individualised. The aim is to avoid transfusion, not to normalise Hb.</p>",
  ci: "<p>Uncontrolled hypertension; active malignancy (use caution); pure red-cell aplasia after ESA.</p>",
  adult: "<p>Usual starting dose <b>20–50 IU/kg three times weekly</b> (SC or IV; KDIGO 2012 dosing), adjusted no more often than every 4 weeks. KDIGO 2026: aim for Hb of about <b>10–11.5 g/dL</b> and do not exceed 11.5 g/dL; never aim above 13 g/dL, because higher targets increased stroke and cardiovascular events (TREAT, CHOIR). ICMR India: titrate to Hb 10–11 g/dL.</p>",
  child: "<p>KDIGO 2026 individualises the Hb target in children; the optimal target is not known (KDIGO 2012 had suggested 11–12 g/dL). Weight-based dosing; younger children often need higher per-kg doses. Prescribe through a paediatric nephrologist.</p>",
  preg: "<p>Can be used; requirements rise in pregnancy.</p>", bf: "<p>Compatible (not orally absorbed).</p>",
  renal: "<p>The SC route is preferred before dialysis.</p>",
  ae: "<p>Hypertension, seizures (with a rapid Hb rise), access thrombosis, headache.</p>",
  mon: "<p>Hb every month while starting, then every 3 months; BP; iron status.</p>",
  src: "<p>KDIGO 2026 Clinical Practice Guideline for the Management of Anemia in CKD (Kidney Int 2026;109(1S):S1–S99; executive summary doi:10.1016/j.kint.2025.06.005); ICMR STW CKD 2026; Bhutan NEML 2025.</p>"
},

iron_sucrose: {
  name: "Iron sucrose (IV)", cls: "Parenteral iron",
  bt: "Listed — 20 mg/mL (5 mL) injection",
  moa: "<p>Delivers iron directly to macrophages and marrow, bypassing poor gut absorption in CKD (hepcidin is raised in CKD).</p>",
  ind: "<p>Iron deficiency in CKD not responding to or not tolerating oral iron; all patients on haemodialysis who need iron. KDIGO 2026 (adults): <b>not on dialysis</b> — give iron if ferritin is under 100 ng/mL with TSAT under 40%, or ferritin 100–300 with TSAT under 25%; <b>on haemodialysis</b> — if ferritin is 500 or less and TSAT 30% or less. Withhold iron if ferritin is over 700 ng/mL or TSAT is 40% or more.</p>",
  ci: "<p>Previous serious reaction to IV iron; active bacteraemia; iron overload; first trimester.</p>",
  adult: "<p>100–200 mg slow IV per dose (max 200 mg per injection). Non-dialysis CKD course: 200 mg on 5 occasions over 14 days (1,000 mg total). Observe for 30 minutes after each dose.</p>",
  child: "<p>Age 2 years or older (product label): <b>0.5 mg/kg, max 100 mg per dose</b>, every 2 weeks (haemodialysis) or every 4 weeks (non-dialysis or PD), for 12 weeks. Iron thresholds in children are individualised by the paediatric nephrologist (KDIGO 2026).</p>",
  preg: "<p>Avoid in the first trimester; acceptable in the 2nd and 3rd.</p>", bf: "<p>Compatible.</p>",
  ae: "<p>Hypotension, hypersensitivity (rare), metallic taste, phlebitis.</p>",
  mon: "<p>Ferritin and TSAT at least every 3 months; do not check within 1 week of a dose.</p>",
  src: "<p>KDIGO 2026 Anemia in CKD; Venofer product label; Bhutan NEML 2025.</p>"
},

ferrous: {
  name: "Ferrous sulphate (oral iron)", cls: "Oral iron",
  bt: "Listed — ferrous sulphate 200 mg + folic acid 0.4 mg tablet; down to PHC",
  moa: "<p>Replaces iron. 200 mg ferrous sulphate contains about 65 mg elemental iron.</p>",
  ind: "<p>First-line iron replacement in non-dialysis CKD and in children (KDIGO 2012; ICMR 2026).</p>",
  ci: "<p>Iron overload; repeated transfusion.</p>",
  adult: "<p>One tablet once daily, or on alternate days (better absorption and fewer side effects). Take apart from phosphate binders and calcium.</p>",
  child: "<p><b>3 mg/kg/day of elemental iron</b> (range 2–6), once daily or in divided doses. Use a paediatric syrup where available.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Safe.</p>",
  inter: "<p>Phosphate binders, calcium, antacids, tetracyclines and quinolones reduce absorption: separate by 2 hours.</p>",
  ae: "<p>Constipation, nausea, black stools.</p>",
  tox: "<p>Iron poisoning in young children is serious: <b>more than 20 mg/kg of elemental iron</b> needs assessment, and over 60 mg/kg is potentially severe. Store safely.</p>",
  src: "<p>KDIGO 2026 Anemia in CKD; ICMR STW CKD 2026; Bhutan NEML 2025; standard toxicology thresholds (TOXBASE/UpToDate summaries).</p>"
},

calcitriol: {
  name: "Calcitriol", cls: "Active vitamin D (1,25-dihydroxy-vitamin D3)",
  bt: "Listed — 0.25 microgram capsule; NRH and RRH",
  moa: "<p>Replaces the active vitamin D that the failing kidney cannot make (loss of 1-α-hydroxylase); suppresses PTH and raises calcium absorption.</p>",
  ind: "<p>Adults: not routinely used in CKD G3a–G5 before dialysis; reserve for severe and progressive hyperparathyroidism (KDIGO CKD-MBD 2017). Children: may be used to keep calcium in the age-appropriate range and to protect growth.</p>",
  ci: "<p>Hypercalcaemia; high phosphate (correct first).</p>",
  adult: "<p>0.25 microgram daily or on alternate days, adjusted by calcium, phosphate and PTH.</p>",
  child: "<p>Specialist weight- and PTH-guided dosing.</p>",
  preg: "<p>Use only if clearly needed.</p>",
  ae: "<p>Hypercalcaemia, hyperphosphataemia, vascular calcification.</p>",
  mon: "<p>Calcium and phosphate every 1–3 months; PTH.</p>",
  src: "<p>KDIGO 2017 Clinical Practice Guideline Update for CKD-MBD, Kidney Int Suppl 2017;7:1–59; Bhutan NEML 2025.</p>"
},

calcium_carbonate: {
  name: "Calcium carbonate (as phosphate binder)", cls: "Calcium-based phosphate binder",
  bt: "Listed — 1250 mg (500 mg elemental calcium) tablet; also 500 mg tablet",
  moa: "<p>Binds dietary phosphate in the gut when <b>taken with meals</b>. Taken between meals, it acts only as a calcium supplement.</p>",
  ind: "<p>Hyperphosphataemia in CKD G3a–G5D. KDIGO 2017 suggests <b>restricting</b> calcium-based binders in adults because of vascular calcification. ICMR India starts with calcium binders and switches to non-calcium binders if calcium is above 9 mg/dL, there is vascular calcification or PTH is low.</p>",
  ci: "<p>Hypercalcaemia; adynamic bone disease; extensive vascular calcification.</p>",
  adult: "<p>1–2 tablets (500–1,000 mg elemental calcium) with each main meal. Keep <b>elemental calcium from binders at or below 1,500 mg/day</b> (KDOQI 2003).</p>",
  child: "<p>Dose by meal phosphate content and age; specialist and dietitian guided.</p>",
  ae: "<p>Hypercalcaemia, constipation.</p>",
  src: "<p>KDIGO CKD-MBD 2017; KDOQI Bone Metabolism Guidelines 2003; ICMR STW CKD 2026; Bhutan NEML 2025.</p>"
},

sevelamer: {
  name: "Sevelamer", cls: "Non-calcium phosphate binder", brands: "Renvela, Sevelamer carbonate",
  bt: "Listed — 800 mg tablet; RRH, and DH with a medical specialist",
  moa: "<p>A non-absorbed polymer that binds phosphate in the gut; it also lowers LDL.</p>",
  ind: "<p>Hyperphosphataemia, especially with high calcium, vascular calcification or low PTH.</p>",
  ci: "<p>Bowel obstruction.</p>",
  adult: "<p>800–1,600 mg three times daily with meals; titrate by 800 mg per meal every 2 weeks to target phosphate.</p>",
  child: "<p>Age 6 years or older (label, by body surface area): BSA 0.75 to under 1.2 m² — 800 mg three times daily; 1.2 m² or more — 1,600 mg three times daily; then titrate.</p>",
  inter: "<p>Reduces absorption of ciprofloxacin, mycophenolate and levothyroxine: separate doses.</p>",
  ae: "<p>Bloating, constipation, metabolic acidosis (hydrochloride form).</p>",
  src: "<p>KDIGO CKD-MBD 2017; Renvela product label; Bhutan NEML 2025.</p>"
},

metformin: {
  name: "Metformin", cls: "Biguanide",
  bt: "Listed — 500 mg tablet and 1 g SR tablet",
  moa: "<p>Lowers hepatic glucose output. It is excreted unchanged by the kidney, so accumulation in kidney failure risks lactic acidosis.</p>",
  ind: "<p>First-line glucose-lowering in T2D with CKD, with eGFR adjustment.</p>",
  ci: "<p>eGFR under 30; AKI; shock, sepsis, hypoxia; iodinated contrast when eGFR is under 30 or AKI is present.</p>",
  adult: "<p><b>eGFR 45 or more:</b> usual dose (max 2 g/day). <b>eGFR 30–44:</b> KDIGO 2022 allows starting at half dose and titrating to a maximum of 1 g/day; many product labels advise not starting at this level. If already taking it, reduce to max 1 g/day. <b>eGFR under 30:</b> stop (ICMR 2026; KDIGO Diabetes in CKD 2022).</p>",
  preg: "<p>Used in gestational diabetes; crosses the placenta.</p>",
  other: "<p><b>Sick-day rule:</b> withhold during vomiting, diarrhoea or dehydration.</p>",
  ae: "<p>GI upset, B12 deficiency, lactic acidosis (rare).</p>",
  src: "<p>KDIGO 2022 Diabetes Management in CKD; ICMR STW CKD 2026; KDIGO AKI/AKD 2026 draft (contrast practice point).</p>"
},

somatropin: {
  name: "Somatropin (recombinant growth hormone)", cls: "Growth hormone",
  bt: "Not listed — not on NEML 2025; would need referral or special procurement",
  moa: "<p>Overcomes the GH resistance of CKD (low free IGF-1).</p>",
  ind: "<p>Children with CKD G3–G5 or on dialysis with persistent short stature or poor height velocity <b>after</b> correcting malnutrition, acidosis, salt and water depletion, and hyperparathyroidism.</p>",
  ci: "<p>Closed epiphyses; active malignancy; after kidney transplant (specialist decision).</p>",
  child: "<p>Usual dose <b>0.045–0.05 mg/kg/day SC</b> (about 0.35 mg/kg/week), at bedtime.</p>",
  ae: "<p>Benign intracranial hypertension, slipped capital femoral epiphysis, hyperglycaemia.</p>",
  src: "<p>KDOQI Clinical Practice Guideline for Nutrition in Children with CKD (2008 update); product labels.</p>"
},

hepb_vaccine: {
  name: "Hepatitis B vaccine (CKD schedule)", cls: "Recombinant vaccine",
  bt: "Listed — hepatitis B vaccine injection; down to PHC",
  moa: "<p>People with CKD respond poorly to vaccines, so higher doses are used.</p>",
  ind: "<p>All non-immune people with progressive CKD, ideally <b>before</b> dialysis (response falls as GFR drops).</p>",
  adult: "<p><b>ICMR 2026:</b> if HBV-negative, 20 micrograms IM into each deltoid (40 micrograms total) at 0, 1, 2 and 6 months. Check anti-HBs 1–2 months after the series; revaccinate if under 10 mIU/mL.</p>",
  child: "<p>Complete the national (EPI) schedule. Children nearing dialysis may need higher doses or boosters, guided by anti-HBs levels.</p>",
  src: "<p>ICMR STW CKD July 2026; Bhutan NEML 2025.</p>"
}
});
