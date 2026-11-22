/* Hypertension drug cards (new ids only; hydrochlorothiazide, losartan, enalapril, amlodipine, nifedipine, labetalol, spironolactone,
   bisoprolol/metoprolol, gtn and atorvastatin cards already exist and are reused).
   Bhutan sources: Hypertension Screening & Management Protocol v3.5 (15 Jan 2025) and v3.0 (2023); STG 2024 §2.3; NEMF 2022 / NEML 2025.
   International: WHO 2021 pharmacological treatment of hypertension; ISH 2020; ESC 2024; ESH 2023; AHA/ACC 2025; ICMR STW 2026; NICE NG133/NG136; BNF. */
Object.assign(GUIDE.drugs, {

methyldopa: {
  name: "Methyldopa", cls: "Centrally acting alpha-2 agonist", brands: "Aldomet, Dopegyt",
  bt: "Listed: 250 mg tablet, down to PHC (NEML 2025).",
  moa: "<p>Converted in the brain to a false transmitter that stimulates central alpha-2 receptors, reducing sympathetic outflow. It has the longest safety record of any antihypertensive in pregnancy, including long-term follow-up of exposed children.</p>",
  ind: "<p>Chronic or gestational hypertension in pregnancy (with labetalol and nifedipine SR as alternatives). Rarely used outside pregnancy because of side effects.</p>",
  ci: "<ul><li>Depression (history of severe depression); active liver disease; phaeochromocytoma.</li><li>Avoid after delivery if possible (raises the risk of postnatal depression); switch to enalapril, nifedipine or amlodipine.</li></ul>",
  adult: "<p><b>250 mg two to three times daily</b>, increased every 2 or more days; usual 500 mg–2 g/day in 2–4 doses, <b>maximum 3 g/day</b> (NEMF). Elderly: start 125 mg twice daily, max 2 g/day.</p>",
  child: "<p>Specialist use: 10 mg/kg/day in 2–4 doses, max 65 mg/kg/day or 3 g/day.</p>",
  preg: "<p>Safe in all trimesters; a first-line choice.</p>", bf: "<p>Compatible, but stop postpartum where possible because of depression risk.</p>",
  renal: "<p>Increase the dosing interval in severe impairment (e.g. 8-hourly → 12–24-hourly).</p>", hep: "<p>Avoid in active liver disease; can cause hepatitis.</p>",
  elderly: "<p>Sedation, postural hypotension; prefer other drugs.</p>",
  inter: "<p>Iron (reduces absorption), lithium (toxicity), MAO inhibitors, other antihypertensives.</p>",
  ae: "<p>Sedation, tiredness, depression, dry mouth, nasal stuffiness, postural hypotension; positive Coombs test (common) and haemolytic anaemia (rare); drug-induced hepatitis.</p>",
  mon: "<p>BP; LFT and full blood count if unwell or on long courses.</p>",
  src: "<p>NEMF 2022 / NEML 2025; NICE NG133 (hypertension in pregnancy); ISH 2020; BNF.</p>"
},

hydralazine_iv: {
  name: "Hydralazine IV (acute severe hypertension)", cls: "Direct arteriolar vasodilator", brands: "Apresoline",
  bt: "Listed: 20 mg/mL injection (down to PHC) and 25 mg tablet (to DH). For heart failure use, see the hydralazine + nitrate card.",
  moa: "<p>Relaxes arteriolar smooth muscle directly, lowering BP within 10–20 minutes. Reflex tachycardia and headache are common, so it is often combined with a beta-blocker outside pregnancy.</p>",
  ind: "<p><b>Severe hypertension in pregnancy, pre-eclampsia and eclampsia</b> (with labetalol and oral nifedipine as alternatives); second-line in hypertensive emergency when labetalol is unsuitable.</p>",
  ci: "<ul><li>Aortic dissection (reflex tachycardia increases shear stress; give a beta-blocker first).</li><li>Acute coronary syndrome (reflex tachycardia); systemic lupus erythematosus; severe tachycardia.</li></ul>",
  adult: "<p><b>5–10 mg diluted in 10 mL saline by slow IV injection</b> over at least 2 minutes, repeated every 20–30 minutes as needed (NEMF), usually to a total of 20–30 mg. <b>Infusion</b>: 200–300 micrograms/min initially, then 50–150 micrograms/min. In pregnancy aim for BP around 140–150/90–100 mmHg, and consider a small crystalloid preload (up to 500 mL) to prevent a sudden fall that harms the fetus.</p>",
  child: "<p>1 month–11 years: 100–500 micrograms/kg slow IV, repeated every 4–6 h (max 3 mg/kg/day, 60 mg/day); 12–17 years: 5–10 mg (NEMF).</p>",
  preg: "<p>Widely used for severe hypertension in pregnancy. More maternal hypotension and fetal distress than labetalol, so watch the fetal heart rate.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Reduce the dose or lengthen the interval in severe impairment.</p>", hep: "<p>Caution.</p>",
  elderly: "<p>Use smaller doses (5 mg).</p>",
  inter: "<p>Other antihypertensives and MgSO₄ (additive hypotension); diazoxide.</p>",
  ae: "<p>Tachycardia, palpitations, headache, flushing, nausea, sudden hypotension (fetal distress); drug-induced lupus with long-term oral use above 100 mg/day.</p>",
  mon: "<p>BP every 5 minutes for the first 30 minutes after each dose, then every 15–30 minutes; continuous fetal heart monitoring in pregnancy.</p>",
  src: "<p>NEMF 2022 (hydralazine monograph); NICE NG133; ACOG Committee Opinion 767 (2019); BNF.</p>"
}
});
