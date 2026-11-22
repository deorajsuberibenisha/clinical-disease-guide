/* Heart failure drug cards.
   Bhutan sources: Standard Treatment Guidelines, 5th ed. 2024 (§2.2 adults, §12.3.1 children); PEN Interventions for Hospitals 2011.
   International: ESC 2021/2023, ACC/AHA/HFSA 2022, NICE NG106, BNF/BnFC, product labels. */
Object.assign(GUIDE.drugs, {

hydrochlorothiazide: {
  name: "Hydrochlorothiazide (HCTZ)", cls: "Thiazide diuretic", brands: "Esidrex, many generics",
  bt: "Listed — 25 mg tablet",
  moa: "<p>Inhibits sodium and chloride reabsorption in the distal tubule, producing a gentler diuresis than loop diuretics. Useful for mild congestion and hypertension, and the first-line diuretic in childhood heart failure in Bhutan.</p>",
  ind: "<p>Mild fluid overload in chronic heart failure; hypertension; childhood heart failure (Bhutan STG).</p>",
  ci: "<ul><li>Anuria; severe kidney impairment (ineffective below about CrCl 30 mL/min).</li><li>Sulfonamide allergy (cross-reactivity).</li><li>Refractory hypokalaemia or hyponatraemia.</li></ul>",
  adult: "<p><b>12.5–25 mg once daily</b> (up to 50 mg daily in resistant oedema). In heart failure it is usually an add-on to a loop diuretic rather than a replacement.</p>",
  child: "<p><b>1–2 mg/kg per dose once or twice daily</b> (Bhutan STG, childhood heart failure), maximum 50 mg/day.</p>",
  preg: "<p>Not first-line in pregnancy (can reduce placental perfusion); use only if clearly needed.</p>", bf: "<p>Can reduce milk supply with high doses; otherwise compatible.</p>",
  renal: "<p>Ineffective when CrCl is below about 30 mL/min — use a loop diuretic instead.</p>",
  hep: "<p>Caution in severe liver disease (electrolyte disturbance precipitates encephalopathy).</p>",
  elderly: "<p>Start low; watch for hyponatraemia and postural hypotension.</p>",
  inter: "<p>Lithium (levels rise), NSAIDs (blunt effect), digoxin (hypokalaemia increases toxicity).</p>",
  ae: "<p>Hypokalaemia, hyponatraemia, hyperuricaemia/gout, hyperglycaemia, hypercalcaemia, and raised lipids.</p>",
  mon: "<p>Potassium, sodium, creatinine and glucose periodically.</p>",
  src: "<p>Bhutan STG 2024 §12.3.1 and PEN 2011; ESC 2021 HF guideline; BNF/BnFC.</p>"
},

spironolactone: {
  name: "Spironolactone", cls: "Mineralocorticoid receptor antagonist (MRA)", brands: "Aldactone, Spiractone",
  bt: "Listed — 25 mg tablet",
  moa: "<p>Blocks aldosterone at the kidney and heart, reducing sodium retention, sympathetic drive and myocardial fibrosis. In heart failure it improves survival (RALES), not just symptoms.</p>",
  ind: "<p>Chronic HFrEF (NYHA II–IV) as one of the four pillars of therapy; ascites/oedema from hyperaldosteronism.</p>",
  ci: "<ul><li>Serum potassium over 5.0 mmol/L at start, or over 5.5 mmol/L during treatment.</li><li>eGFR under 30 mL/min/1.73 m² (or severe kidney failure) — caution.</li><li>Anuria.</li></ul>",
  adult: "<p><b>25 mg once daily</b>, increasing to 50 mg once daily after about 4 weeks if tolerated. Start low (12.5 mg on alternate days) in kidney impairment. Recheck potassium and creatinine at 1, 4, 8 and 12 weeks after any change.</p>",
  child: "<p>Specialist use in heart failure, typically 1 mg/kg once daily (maximum 25–50 mg/day), with careful potassium monitoring.</p>",
  preg: "<p>Avoid (anti-androgenic effects).</p>", bf: "<p>Compatible (levels in milk are low).</p>",
  renal: "<p class='warn'>Hyperkalaemia risk rises as eGFR falls. Avoid starting when eGFR is under 30; if already on it, stop if potassium is over 5.5 or eGFR falls below 15.</p>",
  hep: "<p>Caution in severe liver disease.</p>",
  inter: "<p>Ace inhibitors/ARBs, potassium supplements, trimethoprim, NSAIDs — all raise potassium; avoid combining casually.</p>",
  ae: "<p>Hyperkalaemia, gynaecomastia and breast tenderness (dose-related), menstrual irregularity, worsening kidney function.</p>",
  mon: "<p>Potassium and creatinine at baseline and 1–2 weeks after any dose change, then periodically.</p>",
  src: "<p>Pitt B et al. RALES, N Engl J Med 1999;341:709–717; ESC 2021/2023; ACC/AHA 2022; PEN 2011.</p>"
},

sacubitril: {
  name: "Sacubitril/valsartan (ARNI)", cls: "Angiotensin receptor–neprilysin inhibitor", brands: "Entresto",
  bt: "Not on the routine NEML list — available at referral level / via specialist prescription",
  moa: "<p>Combines valsartan (angiotensin II receptor blocker) with sacubitril (a neprilysin inhibitor that raises beneficial natriuretic peptides). Compared with an ACE inhibitor it reduces death and heart-failure hospitalisation in HFrEF (PARADIGM-HF).</p>",
  ind: "<p>Chronic HFrEF — replaces an ACE inhibitor/ARB as the first-line renin–angiotensin agent.</p>",
  ci: "<ul><li><b>Never combine with an ACE inhibitor</b> (angioedema) — wait 36 hours after the last ACEi dose before starting.</li><li>History of angioedema; pregnancy.</li></ul>",
  adult: "<p><b>Start 24/26 mg twice daily</b>, double every 2–4 weeks to the target <b>97/103 mg twice daily</b>. Start at 24/26 mg in those not already on an ACEi/ARB. Check blood pressure, potassium and creatinine during titration.</p>",
  child: "<p>Not established for routine paediatric use; specialist decision only.</p>",
  preg: "<p><b>Contraindicated</b> (fetotoxic, as with other RAS blockers).</p>", bf: "<p>Avoid (no data).</p>",
  renal: "<p>Start at 24/26 mg BD when eGFR is 30–60; use caution below 30. Watch potassium.</p>",
  hep: "<p>Avoid in severe liver disease (Child–Pugh C).</p>",
  inter: "<p>ACE inhibitors (contraindicated); potassium supplements and NSAIDs (hyperkalaemia); lithium.</p>",
  ae: "<p>Hypotension, hyperkalaemia, worsening kidney function, and angioedema (rare — more common in Black patients).</p>",
  mon: "<p>BP, potassium and creatinine at each titration step.</p>",
  src: "<p>McMurray JJV et al. PARADIGM-HF, N Engl J Med 2014;371:993–1004; ESC 2021/2023; ACC/AHA 2022; product label.</p>"
},

bisoprolol: {
  name: "Bisoprolol (and carvedilol, metoprolol succinate)", cls: "Beta-blocker (evidence-based for HFrEF)", brands: "Concor; carvedilol: Cardivas; metoprolol: Betaloc",
  bt: "Listed — bisoprolol and metoprolol tablets",
  moa: "<p>Blocks the harmful chronic sympathetic overdrive of heart failure, slowing the heart and protecting the myocardium from remodelling. The benefit builds over months, and starting it can transiently worsen symptoms — start low and go slow.</p>",
  ind: "<p>Chronic HFrEF (once euvolaemic) as one of the four pillars; rate control in atrial fibrillation.</p>",
  ci: "<ul><li>Marked bradycardia, heart block, or cardiogenic shock.</li><li>Severe asthma (carvedilol and metoprolol are less beta-1 selective; use caution).</li><li><b>Do not start during acute decompensation</b> — start when stable and euvolaemic.</li></ul>",
  adult: "<p><b>Bisoprolol:</b> 1.25 mg once daily, double every 2–4 weeks to 10 mg once daily.<br><b>Carvedilol:</b> 3.125 mg twice daily, double to 25 mg twice daily (50 mg BD if over 85 kg).<br><b>Metoprolol succinate:</b> 12.5–25 mg once daily to 200 mg once daily.<br>Titrate to the highest tolerated dose; expect a small, transient worsening at first.</p>",
  child: "<p>Specialist use in dilated cardiomyopathy (usually carvedilol), titrated slowly under paediatric cardiology care.</p>",
  preg: "<p>Safe and preferred in pregnancy (may cause fetal bradycardia/growth restriction — monitor).</p>", bf: "<p>Compatible; bisoprolol and metoprolol are preferred.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>Carvedilol needs caution in severe liver disease; bisoprolol/metoprolol are renally cleared.</p>",
  elderly: "<p>Start low; watch bradycardia and hypotension.</p>",
  inter: "<p>Verapamil/diltiazem (additive bradycardia/block), other negative chronotropes.</p>",
  ae: "<p>Bradycardia, hypotension, fatigue, dizziness, and (early) fluid retention or worsened breathlessness — treat with diuretics, not by stopping the beta-blocker.</p>",
  mon: "<p>Heart rate, BP and symptoms at each titration step.</p>",
  src: "<p>CIBIS-II, MERIT-HF, COPERNICUS trials; ESC 2021/2023; ACC/AHA 2022; BNF.</p>"
},

digoxin: {
  name: "Digoxin", cls: "Cardiac glycoside", brands: "Lanoxin",
  bt: "Listed — 0.25 mg tablet",
  moa: "<p>Inhibits the sodium–potassium pump, raising intracellular calcium and improving contractility, and slows conduction through the AV node. In heart failure it reduces hospitalisation (DIG trial) but not mortality — useful as a third- or fourth-line add-on and for rate control in atrial fibrillation.</p>",
  ind: "<p>HFrEF with persistent symptoms despite GDMT, or heart failure with rapid atrial fibrillation.</p>",
  ci: "<ul><li>Heart block (without pacemaker); ventricular arrhythmias.</li><li>Hypertrophic cardiomyopathy (with outflow obstruction).</li><li>Hypokalaemia — correct before use.</li></ul>",
  adult: "<p><b>62.5–250 micrograms once daily</b>, chosen by age, kidney function and size (typically 62.5–125 micrograms in the elderly or in kidney impairment). If rapid control is needed, a loading dose of 0.5–1 mg is given in divided doses. Target level 0.5–0.9 ng/mL.</p>",
  child: "<p>Specialist dosing by weight (digitalising then maintenance), under paediatric cardiology care.</p>",
  preg: "<p>Safe (monitor levels — they fall in pregnancy).</p>", bf: "<p>Compatible.</p>",
  renal: "<p class='warn'>Renally cleared with a narrow therapeutic index: reduce the dose in kidney impairment and monitor levels and toxicity closely.</p>",
  hep: "<p>No dose change.</p>",
  inter: "<p>Hypokalaemia (diuretics), amiodarone, verapamil, and clarithromycin raise digoxin levels — check levels and watch for toxicity.</p>",
  ae: "<p>Nausea, anorexia, visual disturbance (yellow vision), confusion, and arrhythmias (ectopics, AV block, atrial tachycardia with block).</p>",
  mon: "<p>Potassium, kidney function, and digoxin levels when starting, changing dose, or in toxicity.</p>",
  tox: "<p>Toxicity is more likely with hypokalaemia, kidney failure or interacting drugs. Features are GI, visual and arrhythmic; severe toxicity is treated with digoxin-specific antibody fragments (where available) and supportive care.</p>",
  src: "<p>Digitalis Investigation Group (DIG), N Engl J Med 1997;336:525–533; ESC 2021/2023; BNF.</p>"
},

gtn: {
  name: "Glyceryl trinitrate (GTN / nitroglycerin)", cls: "Nitrate — venous vasodilator", brands: "Angised, Nitrocin",
  bt: "Listed — sublingual tablets and IV infusion",
  moa: "<p>Releases nitric oxide, dilating veins (and arteries at higher doses) to reduce preload and pulmonary congestion. In acute pulmonary oedema it relieves breathlessness rapidly.</p>",
  ind: "<p>Acute pulmonary oedema / acute heart failure with a systolic BP over 110 mmHg.</p>",
  ci: "<ul><li>Systolic BP below about 90–100 mmHg, or aortic stenosis.</li><li>Recent phosphodiesterase-5 inhibitor (sildenafil/tadalafil) — profound hypotension.</li><li>Right ventricular infarction.</li></ul>",
  adult: "<p><b>Sublingual 0.4–0.8 mg</b> repeated, or <b>IV infusion 10–200 micrograms/min</b> titrated to BP and symptoms. Keep systolic BP above about 100 mmHg.</p>",
  child: "<p>Specialist use only.</p>",
  preg: "<p>Use only if clearly needed.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>Caution in severe liver disease.</p>",
  inter: "<p>Phosphodiesterase-5 inhibitors (contraindicated); other vasodilators.</p>",
  ae: "<p>Headache, flushing, hypotension, reflex tachycardia, and tolerance with continuous use.</p>",
  mon: "<p>BP continuously; titrate to symptom relief without dropping the pressure too far.</p>",
  src: "<p>ESC 2021 acute HF guideline; Bhutan STG 2024; BNF.</p>"
},

hydralazine: {
  name: "Hydralazine (with isosorbide dinitrate)", cls: "Arterial vasodilator + nitrate", brands: "Apresoline; isosorbide dinitrate: Isordil, Sorbitrate",
  bt: "Hydralazine and isosorbide dinitrate are listed (check local availability)",
  moa: "<p>Hydralazine dilates arteries (reducing afterload) and isosorbide dinitrate dilates veins; together they mimic the haemodynamic effect of an ACE inhibitor. The combination improves survival in HFrEF, particularly in people of African ancestry (A-HeFT).</p>",
  ind: "<p>HFrEF in people who cannot tolerate an ACE inhibitor, ARB or ARNI (renal failure, hyperkalaemia, or as an add-on in refractory cases).</p>",
  ci: "<ul><li>Systemic lupus erythematosus (hydralazine can cause a lupus-like syndrome).</li><li>Severe aortic stenosis; hypotension.</li></ul>",
  adult: "<p><b>Hydralazine 25–50 mg three times daily</b> (target 75 mg TID) <b>with isosorbide dinitrate 20–40 mg three times daily</b> (target 40 mg TID).</p>",
  child: "<p>Specialist use only.</p>",
  preg: "<p>Hydralazine is safe in pregnancy; isosorbide dinitrate is used for pre-eclampsia prevention in selected cases.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change — a useful option when ACE inhibitors/ARBs are limited by kidney function.</p>",
  hep: "<p>Caution in severe liver disease.</p>",
  inter: "<p>Other vasodilators (additive hypotension).</p>",
  ae: "<p>Headache, flushing, palpitations, fluid retention, and a drug-induced lupus syndrome with prolonged hydralazine.</p>",
  mon: "<p>BP, heart rate, and symptoms.</p>",
  src: "<p>Taylor AL et al. A-HeFT, N Engl J Med 2004;351:2049–2057; ESC 2021/2023; ACC/AHA 2022.</p>"
}
});
