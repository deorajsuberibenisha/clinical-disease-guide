/* Clinical Disease Guide — Drug monograph database, batch I-2 (26 Nov 2026).
   I tail of the A–Z pack run, part 1: insulin degludec … istradefylline (26 records).
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js.
   Labels swapped in: LANTUS (pack was the LANGLARA biosimilar), CRESEMBA (isavuconazole was wrongly deferred), SARCLISA IV (pack was the SC "Escena"),
   CLARAVIS isotretinoin (pack was ABSORICA LD, not interchangeable). Interferon beta natural deferred (duplicate of beta-1a / AVONEX).
   Insulins: no calculator, like insulin-aspart and insulin-human (dose is individual); label starting rules are in the text. */
(function () { // I-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const insBT = { neml: "Not on the Bhutan NEML 2025 — the NEML insulins are human soluble, isophane and mixtard, all 40 IU/mL [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const I2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ANY = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const INS = "High-alert medication (insulin) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});
const U100 = { cautionTitle: "Check the strength", caution: "This insulin is 100 units/mL (U-100); the Bhutan NEML human insulins are 40 IU/mL. Use the matching syringe or pen — confusing strengths causes serious dosing errors [BT-NEML]." };
const INS_COMMON = {
  adj: { renal: "Renal impairment: more frequent glucose monitoring and dose adjustment may be needed [FDA].", hepatic: "Hepatic impairment: more frequent glucose monitoring and dose adjustment may be needed [FDA].", pregnancy: "Insulin is the standard treatment for diabetes in pregnancy [UNVERIFIED-KNOWLEDGE].", other: "Thiazolidinediones: fluid retention and heart failure. Beta-blockers may mask hypoglycaemia. Never share pens between patients [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypoglycaemia, possibly prolonged; hypokalaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Oral or IV glucose, glucagon; prolonged observation for long-acting insulin; potassium [FDA] [UNVERIFIED-KNOWLEDGE]." },
  ae: { common: ["Hypoglycaemia, injection-site reactions, lipodystrophy, weight gain, oedema [FDA]."], serious: ["Severe hypoglycaemia [FDA]", "Hypokalaemia [FDA]", "Hypersensitivity, anaphylaxis [FDA]", "Localised cutaneous amyloidosis at repeated sites [FDA]"] },
  monitor: ["Blood glucose; HbA1c; potassium when at risk [FDA]."]
};

FDB_M("insulin-degludec", Object.assign({
  inn: "Insulin degludec", atc: "A10AE06", cls: "Ultra-long-acting basal insulin analogue", risk: INS,
  linked: [],
  forms: ["Injection 100 units/mL (3 mL FlexTouch pen; 10 mL vial) and 200 units/mL (3 mL pen) [FDA]."],
  moa: "Long-acting human insulin analogue forming soluble multi-hexamers in the skin → slow, steady absorption [UNVERIFIED-KNOWLEDGE].",
  pk: ["Duration over 42 hours — once daily at any time of day in adults [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Glycaemic control in diabetes mellitus [FDA].", "Not for diabetic ketoacidosis [FDA]."], paed: ["1 year and older [FDA]."] },
  adult: [["Type 1, insulin-naïve", "About ⅓–½ of the total daily insulin dose as degludec, the rest as short-acting insulin split between meals. Total daily dose as a rule 0.2–0.4 units/kg [FDA]."], ["Type 2, insulin-naïve", "10 units once daily [FDA]."], ["Switching (adults)", "Same unit dose as the total daily long- or intermediate-acting insulin [FDA]."], ["Switching (children 1 y+)", "Start at 80% of the total daily long/intermediate dose to lower hypoglycaemia risk [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Titration", "Increase no more often than every 3–4 days [FDA]."], ["Timing", "Adults: any time of day. Children: same time every day [FDA]."]],
  paed: { tiers: ["1 year and older: individualised; same time each day; under 5 units/day → use the U-100 vial [FDA]."], transition: "Same rules.", calcNote: "Individual dose — no calculator." },
  contra: ["During hypoglycaemia [FDA].", "Hypersensitivity to insulin degludec or excipients [FDA]."],
  local: insBT,
  calc: [],
  sources: [["FDA", "Insulin degludec (TRESIBA) injection — FDA label (DailyMed)", I2_DM("7a4bd8e5-7af4-4573-97c2-9945faf6a7dd")], ISMP_SRC, NEML_SRC],
  dose: Object.assign({ tagline: "Once-daily ultra-long basal insulin — T2 start 10 units; titrate every 3–4 days.",
    adult: [{ ind: "Type 1 diabetes", text: "⅓–½ of total daily insulin (TDD ~0.2–0.4 units/kg) once daily." }, { ind: "Type 2 diabetes", text: "10 units once daily; titrate." }],
    child: [{ ind: "1 year and older", text: "Individualised once daily at the same time." }] }, U100)
}, INS_COMMON));

FDB_M("insulin-detemir", Object.assign({
  inn: "Insulin detemir", atc: "A10AE05", cls: "Long-acting basal insulin analogue", risk: INS,
  linked: [],
  forms: ["Injection 100 units/mL (3 mL FlexPen; 10 mL vial) [FDA]."],
  moa: "Long-acting insulin analogue bound to albumin via a fatty-acid chain → slow absorption [UNVERIFIED-KNOWLEDGE].",
  pk: ["Once or twice daily [FDA]."],
  ind: { adult: ["Glycaemic control in diabetes mellitus [FDA].", "Not for diabetic ketoacidosis [FDA]."], paed: ["Children with diabetes [FDA]."] },
  adult: [["Type 1, insulin-naïve", "About ⅓–½ of total daily insulin as detemir; rest as pre-meal short-acting insulin. TDD as a rule 0.2–0.4 units/kg [FDA]."], ["Type 2 (on oral drugs or GLP-1 agonist)", "10 units (or 0.1–0.2 units/kg) once daily in the evening, or divided twice daily [FDA]."], ["Switching", "From glargine or NPH: unit for unit [FDA]."], ["Never", "IV, in a pump, diluted or mixed with other insulins [FDA]."]],
  paed: { tiers: ["Individualised once or twice daily [FDA]."], transition: "Same rules.", calcNote: "Individual dose — no calculator." },
  contra: ["During hypoglycaemia [FDA].", "Hypersensitivity to insulin detemir or excipients (anaphylaxis reported) [FDA]."],
  local: insBT,
  calc: [],
  sources: [["FDA", "LEVEMIR (insulin detemir) injection — FDA label (DailyMed)", I2_DM("82192527-99aa-4b53-8ce9-9173668d309c")], ISMP_SRC, NEML_SRC],
  dose: Object.assign({ tagline: "Basal insulin once or twice daily — T2 start 10 units (0.1–0.2 units/kg) in the evening.",
    adult: [{ ind: "Type 1 diabetes", text: "⅓–½ of total daily insulin as detemir." }, { ind: "Type 2 diabetes", text: "10 units (0.1–0.2 units/kg) once daily in the evening." }],
    child: [{ ind: "Children", text: "Individualised." }] }, U100)
}, INS_COMMON));

FDB_M("insulin-glargine", Object.assign({
  inn: "Insulin glargine", atc: "A10AE04", cls: "Long-acting basal insulin analogue", risk: INS,
  linked: [],
  forms: ["LANTUS 100 units/mL (10 mL vial; 3 mL SoloStar pen) [FDA].", "TOUJEO 300 units/mL and biosimilars (e.g. LANGLARA) also exist [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Long-acting insulin analogue that precipitates in the skin and is released slowly [UNVERIFIED-KNOWLEDGE].",
  pk: ["Once daily at the same time each day [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Glycaemic control in diabetes mellitus [FDA].", "Not for diabetic ketoacidosis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Type 1 diabetes in children [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Type 1", "About ⅓ of total daily insulin requirements as glargine; the rest as pre-meal short-acting insulin [FDA]."], ["Type 2, not on insulin", "0.2 units/kg or up to 10 units once daily [FDA]."], ["Switching", "From TOUJEO once daily: 80% of the TOUJEO dose. From once-daily NPH: same dose. From twice-daily NPH: 80% of the total NPH dose [FDA]."], ["Never", "Dilute or mix with other insulins; not IV for routine use [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Type 1: individualised, about ⅓ of total daily insulin [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same rules.", calcNote: "Individual dose — no calculator." },
  contra: ["During hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to insulin glargine or excipients [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: insBT,
  calc: [],
  sources: [["FDA", "LANTUS (insulin glargine) injection — FDA label (DailyMed)", I2_DM("d5e07a0c-7e14-4756-9152-9fea485d654a")], ISMP_SRC, NEML_SRC],
  dose: Object.assign({ tagline: "Once-daily basal insulin — T2 start 0.2 units/kg or up to 10 units; T1 about ⅓ of daily insulin.",
    adult: [{ ind: "Type 1 diabetes", text: "About ⅓ of total daily insulin once daily." }, { ind: "Type 2 diabetes", text: "0.2 units/kg or up to 10 units once daily." }],
    child: [{ ind: "Type 1 diabetes", text: "Individualised." }] }, U100)
}, INS_COMMON));

FDB_M("insulin-glulisine", Object.assign({
  inn: "Insulin glulisine", atc: "A10AB06", cls: "Rapid-acting mealtime insulin analogue", risk: INS,
  linked: [],
  forms: ["Injection 100 units/mL (10 mL vial; 3 mL SoloStar pen) [FDA]."],
  moa: "Rapid-acting insulin analogue for mealtime glucose [UNVERIFIED-KNOWLEDGE].",
  pk: ["Onset within minutes; inject 15 minutes before or within 20 minutes after starting a meal [FDA]."],
  ind: { adult: ["Glycaemic control in diabetes mellitus [FDA]."], paed: ["Children with diabetes [FDA]."] },
  adult: [["Subcutaneous", "Within 15 min before or 20 min after starting a meal; usually with an intermediate- or long-acting insulin [FDA]."], ["Pump", "Per pump manual; do not mix in the pump [FDA]."], ["IV", "Only under medical supervision, diluted to 0.05–1 unit/mL in 0.9% sodium chloride (PVC bags) [FDA]."]],
  paed: { tiers: ["Individualised mealtime dosing [FDA]."], transition: "Same rules.", calcNote: "Individual dose — no calculator." },
  contra: ["During hypoglycaemia [FDA].", "Hypersensitivity to insulin glulisine or excipients [FDA]."],
  local: insBT,
  calc: [],
  sources: [["FDA", "APIDRA (insulin glulisine) injection — FDA label (DailyMed)", I2_DM("e7af6a7a-8046-4fb4-9979-4ec4230b23aa")], ISMP_SRC, NEML_SRC],
  dose: Object.assign({ tagline: "Rapid mealtime insulin — inject up to 15 min before or 20 min after starting a meal.",
    adult: [{ ind: "Diabetes (mealtime)", text: "Individual dose SC around meals, with basal insulin." }],
    child: [{ ind: "Diabetes", text: "Individualised." }] }, U100)
}, INS_COMMON));

FDB_M("insulin-lispro", Object.assign({
  inn: "Insulin lispro", atc: "A10AB04", cls: "Rapid-acting mealtime insulin analogue", risk: INS,
  linked: [],
  forms: ["Injection 100 units/mL (10 mL vial; 3 mL KwikPen and Junior KwikPen) [FDA].", "200 units/mL KwikPen and mixes also exist [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Rapid-acting insulin analogue for mealtime glucose [UNVERIFIED-KNOWLEDGE].",
  pk: ["Inject within 15 minutes before or immediately after a meal [FDA]."],
  ind: { adult: ["Glycaemic control in diabetes mellitus [FDA]."], paed: ["Children with diabetes [FDA]."] },
  adult: [["Subcutaneous", "Abdominal wall, thigh, upper arm or buttock, within 15 min before or immediately after a meal [FDA]."], ["Pump", "Per pump manual [FDA]."], ["IV", "Only after dilution and under medical supervision [FDA]."], ["Pens", "No dose conversion — the window shows units [FDA]."]],
  paed: { tiers: ["Individualised mealtime dosing [FDA]."], transition: "Same rules.", calcNote: "Individual dose — no calculator." },
  contra: ["During hypoglycaemia [FDA].", "Hypersensitivity to insulin lispro or excipients [FDA]."],
  local: insBT,
  calc: [],
  sources: [["FDA", "Insulin lispro (HUMALOG) injection — FDA label (DailyMed)", I2_DM("2be14cbb-197a-4da8-82c8-2443594e7f6f")], ISMP_SRC, NEML_SRC],
  dose: Object.assign({ tagline: "Rapid mealtime insulin — within 15 min before or right after a meal.",
    adult: [{ ind: "Diabetes (mealtime)", text: "Individual dose SC around meals, with basal insulin." }],
    child: [{ ind: "Diabetes", text: "Individualised." }] }, U100)
}, INS_COMMON));

FDB_M("interferon-beta-1a", {
  inn: "Interferon beta-1a", atc: "L03AB07", cls: "Interferon (MS disease-modifying therapy)",
  linked: [],
  forms: ["AVONEX 30 micrograms/0.5 mL prefilled syringe or autoinjector (IM) [FDA]."],
  moa: "Immunomodulator; exact mechanism in MS unknown [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsing forms of MS (clinically isolated syndrome, relapsing-remitting, active secondary progressive) in adults [FDA]."], paed: [NEP] },
  adult: [["Dose (AVONEX)", "30 micrograms IM once a week [FDA]."], ["Titration", "May start 7.5 micrograms and add 7.5 micrograms weekly for 3 weeks to 30 micrograms (less flu-like illness) [FDA]."], ["Support", "Analgesic/antipyretic on injection days; first injection supervised [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Hepatic injury reported — monitor [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Hypersensitivity to natural or recombinant interferon beta or components [FDA].", "Old lyophilised AVONEX: albumin hypersensitivity [FDA]."],
  ae: { common: ["Flu-like symptoms, myalgia, headache, injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Depression and suicide [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic injury [FDA] [UNVERIFIED-KNOWLEDGE]", "Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Thrombotic microangiopathy, cytopenias, seizures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts and liver tests periodically; mood [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("interferon-beta-1a", "std", "Relapsing MS — 30 micrograms IM once weekly", "IM", ADULT, "fixed", 30, 168, { dose: { value: 30, unit: "mcg", per: "dose" }, caps: { max_single: 30, unit: "mcg" }, formulations: [], rounding: "Prefilled syringe/pen", flags: ["May titrate from 7.5 mcg, +7.5 mcg weekly", "AVONEX (IM) only — other beta-1a products differ"] })],
  sources: [["FDA", "AVONEX (interferon beta-1a) injection — FDA label (DailyMed)", I2_DM("d70a39cc-de15-4c12-a1ec-8063b69ea0e1")], NEML_SRC],
  dose: { tagline: "Weekly IM interferon for relapsing MS — 30 micrograms; flu-like symptoms early.",
    adult: [{ ind: "Relapsing MS", text: "30 micrograms IM once weekly.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("interferon-beta-1b", {
  inn: "Interferon beta-1b", atc: "L03AB08", cls: "Interferon (MS disease-modifying therapy)",
  linked: [],
  forms: ["For injection 0.3 mg lyophilised powder vial (SC) [FDA]."],
  moa: "Immunomodulator; exact mechanism in MS unknown [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsing forms of MS in adults [FDA]."], paed: [NEP] },
  adult: [["Dose", "0.25 mg (1 mL) SC every other day [FDA]."], ["Titration", "Weeks 1–2: 0.0625 mg (0.25 mL); 3–4: 0.125 mg; 5–6: 0.1875 mg; week 7 on: 0.25 mg [FDA]."], ["Missed dose", "Take when remembered; next about 48 h later; never two days running [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Hypersensitivity to natural or recombinant interferon beta, albumin or mannitol [FDA]."],
  ae: { common: ["Flu-like symptoms, injection-site reactions, lymphopenia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Injection-site necrosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Depression and suicide [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts and liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("interferon-beta-1b", "std", "Relapsing MS — 0.25 mg SC every other day (after titration)", "SC", ADULT, "fixed", 0.25, 48, { caps: { max_single: 0.25, unit: "mg" }, formulations: [{ form: "reconstituted", strength: 0.25, unit: "mg/mL" }], rounding: "0.25 mL steps", flags: ["Titrate over 6 weeks: 0.0625 → 0.125 → 0.1875 → 0.25 mg", "Never on two consecutive days"] })],
  sources: [["FDA", "BETASERON (interferon beta-1b) for injection — FDA label (DailyMed)", I2_DM("66311f74-0472-4fa3-848a-06002ca0def5")], NEML_SRC],
  dose: { tagline: "Every-other-day SC interferon for MS — titrate to 0.25 mg over 6 weeks.",
    adult: [{ ind: "Relapsing MS", text: "0.25 mg SC every other day.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("interferon-gamma", {
  inn: "Interferon gamma", atc: "L03AB03", cls: "Interferon (gamma-1b)",
  linked: [],
  forms: ["Injection 100 mcg (2 million IU) per 0.5 mL single-dose vial [FDA]."],
  moa: "Immune modulator that activates phagocytes and macrophages [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Reduce serious infections in chronic granulomatous disease (CGD) [FDA].", "Delay progression of severe malignant osteopetrosis [FDA]."], paed: ["Same [FDA]."] },
  adult: [["BSA over 0.5 m²", "50 mcg/m² (1 million IU/m²) SC three times weekly (e.g. Mon, Wed, Fri) [FDA]."], ["BSA 0.5 m² or less", "1.5 mcg/kg per dose SC three times weekly [FDA]."], ["Severe reactions", "Reduce by 50% or hold until resolved [FDA]."]],
  paed: { tiers: ["As above by BSA [FDA]."], transition: "Same.", calcNote: "Check BSA: over 0.5 m² → mcg/m²." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Hypersensitivity to interferon gamma, E. coli-derived products or components [FDA]."],
  ae: { common: ["Fever, headache, rash, chills, injection-site reactions, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiac effects, CNS effects, myelosuppression, liver enzyme rises [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, chemistries and urinalysis before and every 3 months [FDA]."],
  local: notBT,
  calc: [
    C("interferon-gamma", "bsa", "CGD / osteopetrosis (BSA over 0.5 m²) — 50 mcg/m² SC three times weekly", "SC", ANY, "mg_per_m2", 50, null, { dose: { value: 50, unit: "mcg", per: "dose" }, formulations: [{ form: "inj", strength: 200, unit: "mcg/mL" }], rounding: "0.01 mL", flags: ["Three times weekly (e.g. Mon/Wed/Fri)", "Only if BSA over 0.5 m² — otherwise use 1.5 mcg/kg"] }),
    C("interferon-gamma", "kg", "CGD / osteopetrosis (BSA 0.5 m² or less) — 1.5 mcg/kg SC three times weekly", "SC", ANY, "mg_per_kg", 1.5, null, { dose: { value: 1.5, unit: "mcg", per: "dose" }, formulations: [{ form: "inj", strength: 200, unit: "mcg/mL" }], rounding: "0.01 mL", flags: ["Three times weekly", "Only if BSA 0.5 m² or less"] })
  ],
  sources: [["FDA", "ACTIMMUNE (interferon gamma-1b) injection — FDA label (DailyMed)", I2_DM("5d0b1256-1981-4519-94f4-a4a2f98bd8a3")], NEML_SRC],
  dose: { tagline: "Three-times-weekly SC interferon for CGD and osteopetrosis — 50 mcg/m² (1.5 mcg/kg if BSA ≤0.5 m²).",
    adult: [{ ind: "CGD / osteopetrosis", text: "50 mcg/m² SC three times weekly.", calc: ["bsa"] }],
    child: [{ ind: "BSA over 0.5 m²", text: "50 mcg/m² three times weekly.", calc: ["bsa"] }, { ind: "BSA 0.5 m² or less", text: "1.5 mcg/kg three times weekly.", calc: ["kg"] }] }
});

FDB_M("iobenguane-123i", {
  inn: "Iobenguane (123I)", atc: "V09IX01", cls: "Diagnostic radiopharmaceutical (MIBG scintigraphy)", risk: "Radiopharmaceutical — trained staff and radiation safety",
  linked: [],
  forms: ["Injection 2 mCi/mL (74 MBq/mL) at calibration, 5 mL single-use vial [FDA]."],
  moa: "Noradrenaline analogue taken up by adrenergic tissue; I-123 allows gamma imaging [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — renal impairment increases radiation exposure and lowers image quality [FDA]."],
  ind: { adult: ["Detection of pheochromocytoma or neuroblastoma (adjunct); myocardial sympathetic innervation in heart failure [FDA]."], paed: ["Neuroblastoma imaging [FDA]."] },
  adult: [["Dose", "16 years and over, or under 16 and 70 kg or more: 10 mCi (370 MBq) IV [FDA]."], ["Under 16 years and under 70 kg", "Scale the adult activity by weight (label table) [FDA]."], ["Thyroid", "Thyroid blockade in patients at risk; hydrate to lower bladder dose [FDA]."]],
  paed: { tiers: ["Weight-scaled activity from the label table [FDA]."], transition: "16 years: 10 mCi.", calcNote: "Radioactivity — no calculator." },
  adj: { renal: "Higher radiation exposure, poorer images [FDA].", hepatic: NEP, pregnancy: NEP, other: "Many drugs reduce MIBG uptake (e.g. tricyclics, labetalol, sympathomimetics) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Hypersensitivity to iobenguane or iobenguane sulfate [FDA]."],
  ae: { common: ["Dizziness, rash, injection-site haemorrhage [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "AdreView (iobenguane I-123) injection — FDA label (DailyMed)", I2_DM("c89d3ecc-4f4c-4566-8808-79152344194d")], NEML_SRC],
  dose: { tagline: "MIBG scan agent — 10 mCi IV in adults; block the thyroid first.",
    adult: [{ ind: "MIBG scintigraphy", text: "10 mCi (370 MBq) IV." }],
    child: [{ ind: "Under 16 y and under 70 kg", text: "Weight-scaled activity." }] }
});

FDB_M("ioflupane-123i", {
  inn: "Iodine ioflupane (123I)", atc: "V09AB03", cls: "Diagnostic radiopharmaceutical (dopamine transporter SPECT)", risk: "Radiopharmaceutical — trained staff and radiation safety",
  linked: [],
  forms: ["Injection 185 MBq (5 mCi) in 2.5 mL (74 MBq/mL) at calibration [FDA]."],
  moa: "Binds striatal dopamine transporters; I-123 SPECT shows their density [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Adjunct SPECT imaging of striatal dopamine transporter in suspected parkinsonian syndromes or dementia with Lewy bodies (adults) [FDA]."], paed: [NEP] },
  adult: [["Dose", "111–185 MBq (3–5 mCi) IV over at least 20 seconds [FDA]."], ["Thyroid", "Thyroid blocking agent at least 1 hour before [FDA]."], ["Imaging", "SPECT 3–6 hours after injection [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Radioactivity — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Drugs binding the dopamine transporter (e.g. bupropion, amphetamines) may affect images [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Known serious hypersensitivity to ioflupane I-123 [FDA]."],
  ae: { common: ["Headache, nausea, vertigo, dry mouth [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "DaTscan (ioflupane I-123) injection — FDA label (DailyMed)", I2_DM("ef7804d7-c691-495b-8aaf-5bc54fd5d9f6")], NEML_SRC],
  dose: { tagline: "DaT-SPECT agent — 111–185 MBq IV after thyroid blockade; image at 3–6 h.",
    adult: [{ ind: "DaT SPECT", text: "111–185 MBq (3–5 mCi) IV." }],
    child: [{ ind: "Children", text: NEP }] }
});

const CONTRAST = (inn, atc, brand, setid, forms, extraAdult, contra, tagline, bTitle, bText) => ({
  inn, atc, cls: "Non-ionic iodinated contrast agent",
  linked: [],
  forms,
  moa: "Iodine absorbs X-rays, opacifying vessels and tissues [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted unchanged [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Intra-arterial and intravenous radiographic procedures (angiography, CT) per label concentration tables [FDA]."], paed: ["Selected procedures per label [FDA]."] },
  adult: [["Dose", "Individualise volume and concentration by procedure, age, weight, vessel size and flow, using the label tables; lowest dose for adequate images [FDA]."]].concat(extraAdult),
  paed: { tiers: ["Per label weight-based tables [FDA]."], transition: "Adult tables for adults.", calcNote: "Procedure tables — no calculator." },
  adj: { renal: "Contrast-induced acute kidney injury risk — hydrate; caution in renal impairment [FDA].", hepatic: NEP, pregnancy: NEP, other: "Metformin: hold around contrast in renal impairment per guidance [UNVERIFIED-KNOWLEDGE]. Thyroid function tests may be affected; thyroid dysfunction in children 0–3 years [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra,
  ae: { common: ["Warmth, nausea, headache, injection-site pain [UNVERIFIED-KNOWLEDGE]."], serious: ["Fatal reactions if given intrathecally [FDA]", "Hypersensitivity and anaphylactoid reactions [FDA]", "Contrast-induced acute kidney injury [FDA]", "Thyroid dysfunction (infants), severe cutaneous reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Hydration; kidney function in at-risk patients; thyroid function in infants 0–3 years after exposure [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", brand + " — FDA label (DailyMed)", I2_DM(setid)], NEML_SRC],
  dose: { tagline, boxedTitle: bTitle, boxed: bText,
    adult: [{ ind: "Radiographic imaging", text: "Volume and concentration from the label procedure tables." }],
    child: [{ ind: "Children", text: "Label weight-based tables." }] }
});
FDB_M("iomeprol", CONTRAST("Iomeprol", "V08AB10", "IOMERVU (iomeprol) injection", "cb2e0e00-7c93-0fb4-89a5-861641662a5a", ["Injection 250, 300, 350, 400 mg iodine/mL (bottles) [FDA] [UNVERIFIED-KNOWLEDGE]."], [["Maximum", "Label maximum recommended human dose 86,000 mg iodine [FDA]."]], ["None [FDA]."], "Non-ionic contrast — intravascular only; dose from procedure tables; never intrathecal.", "Risks associated with intrathecal administration", "Intrathecal administration, even if inadvertent, may cause death, convulsions, cerebral hemorrhage, coma, paralysis, arachnoiditis, acute renal failure, cardiac arrest, seizures, rhabdomyolysis, hyperthermia, and brain edema. IOMERVU is for intra-arterial or intravenous use only [FDA]."));
FDB_M("iopamidol", CONTRAST("Iopamidol", "V08AB04", "ISOVUE (iopamidol) injection", "ae8c18c9-3e7d-4515-b980-120025a88fc1", ["Injection 200, 250, 300, 370 mg iodine/mL [FDA]."], [["Children (maximum cumulative)", "Neonates 5 mL/kg; 4 weeks and older 8 mL/kg (label table) [FDA]."]], ["None [FDA]."], "Non-ionic contrast — intravascular or oral; never intrathecal; child max 5–8 mL/kg.", "Risks associated with intrathecal administration", "Intrathecal administration of ISOVUE, even if inadvertent, can cause death, convulsions, cerebral hemorrhage, coma, paralysis, arachnoiditis, acute renal failure, cardiac arrest, seizures, rhabdomyolysis, hyperthermia, and brain edema. ISOVUE is for intra-arterial, intravenous, or oral use only [FDA]."));
FDB_M("ioversol", CONTRAST("Ioversol", "V08AB07", "OPTIRAY (ioversol) injection", "6cb6ca5f-b249-49b0-a9eb-8aa583da7c74", ["Injection 240, 300, 320, 350 mg iodine/mL [FDA] [UNVERIFIED-KNOWLEDGE]."], [["Maximum cumulative (examples)", "Cerebral arteriography 200 mL; coronary 250 mL (label tables) [FDA]."]], ["Symptomatic hyperthyroidism [FDA]."], "Non-ionic contrast — intravascular only; not in symptomatic hyperthyroidism; never intrathecal.", "Not for intrathecal use", "Inadvertent intrathecal administration may cause death, convulsions, cerebral hemorrhage, coma, paralysis, arachnoiditis, acute renal failure, cardiac arrest, seizures, rhabdomyolysis, hyperthermia, and brain edema [FDA]."));

FDB_M("ipilimumab", {
  inn: "Ipilimumab", atc: "L01FX04", cls: "Anti-CTLA-4 monoclonal antibody (immune checkpoint inhibitor)", risk: ONC,
  linked: [],
  forms: ["Injection 50 mg/10 mL and 200 mg/40 mL (5 mg/mL) [FDA]."],
  moa: "Blocks CTLA-4, releasing a brake on T-cell activation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Melanoma (unresectable/metastatic; adjuvant), advanced renal cell carcinoma, MSI-H/dMMR colorectal cancer, hepatocellular carcinoma, metastatic NSCLC, malignant pleural mesothelioma, oesophageal squamous cell carcinoma — mostly with nivolumab [FDA]."], paed: ["Melanoma 12 years and older; MSI-H/dMMR colorectal cancer in children [FDA]."] },
  adult: [["Melanoma (metastatic)", "3 mg/kg every 3 weeks for up to 4 doses, alone or right after nivolumab 1 mg/kg [FDA]."], ["Melanoma (adjuvant)", "10 mg/kg every 3 weeks × 4, then every 12 weeks up to 3 years per label [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Renal cell carcinoma", "1 mg/kg right after nivolumab 3 mg/kg every 3 weeks × 4 [FDA]."], ["MSI-H/dMMR colorectal", "1 mg/kg right after nivolumab every 3 weeks × 4 (nivolumab 240 mg if 40 kg+, 3 mg/kg if under 40 kg) [FDA]."], ["Hepatocellular", "3 mg/kg right after nivolumab 1 mg/kg every 3 weeks × 4 [FDA]."], ["NSCLC / mesothelioma / oesophageal SCC", "1 mg/kg every 6 weeks with nivolumab [FDA]."], ["Then", "Continue nivolumab alone per its label [FDA]."]],
  paed: { tiers: ["Melanoma 12 years and older: as adults [FDA].", "MSI-H/dMMR colorectal: 1 mg/kg with nivolumab (3 mg/kg if under 40 kg) every 3 weeks × 4 [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg actual weight." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Fetal harm (CTLA-4 blockade) — contraception [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, diarrhoea, pruritus, rash, colitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Immune-mediated colitis, hepatitis, dermatitis (incl. SJS/TEN), endocrinopathies (hypophysitis, thyroid, adrenal), pneumonitis, nephritis, neuropathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, thyroid function, electrolytes and glucose before each dose; symptoms of colitis and endocrinopathy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("ipilimumab", "mel", "Melanoma / HCC — 3 mg/kg IV every 3 weeks × 4", "IV", pop(144, null, null, null), "mg_per_kg", 3, 504, { formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL (then dilute)", infusion: { duration_h: 0.5 }, flags: ["Up to 4 doses", "With nivolumab 1 mg/kg (given first, same day) when combined"] }),
    C("ipilimumab", "q3w1", "RCC / MSI-H CRC — 1 mg/kg IV every 3 weeks × 4 (after nivolumab)", "IV", pop(144, null, null, null), "mg_per_kg", 1, 504, { formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL (then dilute)", infusion: { duration_h: 0.5 }, flags: ["Given right after nivolumab on the same day", "Then nivolumab alone"] }),
    C("ipilimumab", "q6w", "NSCLC / mesothelioma / oesophageal SCC — 1 mg/kg IV every 6 weeks", "IV", ADULT, "mg_per_kg", 1, 1008, { formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL (then dilute)", infusion: { duration_h: 0.5 }, flags: ["With nivolumab per label"] })
  ],
  sources: [["FDA", "YERVOY (ipilimumab) injection — FDA label (DailyMed)", I2_DM("2265ef30-253e-11df-8a39-0800200c9a66")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-CTLA-4 checkpoint antibody — 3 mg/kg (melanoma, HCC) or 1 mg/kg (most combinations); watch for immune colitis and endocrinopathy.",
    adult: [{ ind: "Melanoma / HCC", text: "3 mg/kg every 3 weeks × 4.", calc: ["mel"] }, { ind: "RCC / MSI-H CRC", text: "1 mg/kg every 3 weeks × 4 with nivolumab.", calc: ["q3w1"] }, { ind: "NSCLC / mesothelioma / oesophageal", text: "1 mg/kg every 6 weeks with nivolumab.", calc: ["q6w"] }],
    child: [{ ind: "Melanoma 12 y+", text: "3 mg/kg every 3 weeks × 4.", calc: ["mel"] }, { ind: "MSI-H CRC 12 y+", text: "1 mg/kg every 3 weeks × 4.", calc: ["q3w1"] }] }
});

FDB_M("iptacopan", {
  inn: "Iptacopan", atc: "L04AJ08", cls: "Complement factor B inhibitor (oral)",
  linked: [],
  forms: ["Capsules 200 mg [FDA]."],
  moa: "Inhibits factor B of the alternative complement pathway [FDA].",
  pk: [NEP],
  ind: { adult: ["Paroxysmal nocturnal haemoglobinuria (PNH) [FDA].", "Slowing kidney decline in primary IgA nephropathy at risk of progression [FDA].", "C3 glomerulopathy — reduce proteinuria [FDA]."], paed: [NEP] },
  adult: [["Dose", "200 mg twice daily with or without food; swallow whole [FDA]."], ["Before starting", "Vaccinate against pneumococcus and meningococcus (A, C, W, Y and B) at least 2 weeks before; if urgent, give antibiotic prophylaxis and vaccinate as soon as possible. REMS enrolment [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Strong CYP2C8 inducers/inhibitors affect levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Serious hypersensitivity to iptacopan or excipients [FDA].", "Starting in a patient with unresolved serious infection from encapsulated bacteria (S. pneumoniae, N. meningitidis, H. influenzae type b) [FDA]."],
  ae: { common: ["Headache, nasopharyngitis, diarrhoea, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections by encapsulated bacteria [FDA]", "Haemolysis after stopping (PNH) [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised lipids [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Signs of meningococcal infection; haemolysis markers if stopped [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("iptacopan", "std", "PNH / IgAN / C3G — 200 mg twice daily", "PO", ADULT, "fixed", 200, 12, { caps: { max_single: 200, unit: "mg" }, formulations: [{ form: "cap", strength: 200, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Vaccinate (pneumococcal, meningococcal ACWY + B) at least 2 weeks before", "REMS"] })],
  sources: [["FDA", "FABHALTA (iptacopan) capsules — FDA label (DailyMed)", I2_DM("a76b5845-6e21-4d3b-ad07-cd8df1b60bee")], NEML_SRC],
  dose: { tagline: "Oral complement inhibitor — 200 mg twice daily; vaccinate against encapsulated bacteria first.",
    boxedTitle: "Serious infections caused by encapsulated bacteria", boxed: "FABHALTA, a complement inhibitor, increases the risk of serious infections, especially those caused by encapsulated bacteria, such as Streptococcus pneumoniae, Neisseria meningitidis, and Haemophilus influenzae type b. Life-threatening and fatal infections with encapsulated bacteria have occurred in patients treated with complement inhibitors. These infections may become rapidly life-threatening or fatal if not recognized and treated early. Complete or update vaccination for encapsulated bacteria at least 2 weeks prior to the first dose of FABHALTA, unless the risks of delaying therapy with FABHALTA outweigh the risk of developing a serious infection. Comply with the most current Advisory Committee on Immunization Practices (ACIP) recommendations for vaccinations against encapsulated bacteria in patients receiving a complement inhibitor. See Warnings and Precautions for additional guidance on the management of the risk of serious infections caused by encapsulated bacteria. Patients receiving FABHALTA are at increased risk for invasive disease caused by encapsulated bacteria, even if they develop antibodies following vaccination. Monitor patients for early signs and symptoms of serious infections and evaluate immediately if infection is suspected. Because of the risk of serious infections caused by encapsulated bacteria, FABHALTA is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the FABHALTA REMS [FDA].",
    adult: [{ ind: "PNH / IgA nephropathy / C3G", text: "200 mg twice daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("irbesartan", {
  inn: "Irbesartan", atc: "C09CA04", cls: "Angiotensin II receptor blocker (ARB)",
  linked: [],
  forms: ["Tablets 75, 150, 300 mg [FDA]."],
  moa: "Blocks angiotensin II AT1 receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["With or without food [FDA]."],
  ind: { adult: ["Hypertension [FDA].", "Diabetic nephropathy in type 2 diabetes with hypertension [FDA]."], paed: [NEP] },
  adult: [["Hypertension", "150 mg once daily; up to 300 mg once daily [FDA]."], ["Diabetic nephropathy", "300 mg once daily [FDA]."], ["Volume or salt depleted (vigorous diuretics, haemodialysis)", "Start 75 mg once daily [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "No adjustment stated; watch creatinine and potassium [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Fetal toxicity — stop when pregnancy detected [FDA].", other: "Aliskiren in diabetes: contraindicated. Lithium toxicity; NSAIDs; potassium-sparing drugs raise potassium [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, tachycardia or bradycardia [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; not removed by haemodialysis [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA].", "With aliskiren in diabetes [FDA]."],
  ae: { common: ["Diarrhoea, dyspepsia, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension in volume depletion [FDA]", "Hyperkalaemia, renal impairment [FDA]", "Fetal toxicity [FDA]"] },
  monitor: ["BP, creatinine, potassium [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("irbesartan", "htn", "Hypertension — 150 mg once daily (up to 300)", "PO", ADULT, "fixed", 150, 24, { caps: { max_single: 300, unit: "mg" }, formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Volume/salt depleted or on haemodialysis: start 75 mg", "Maximum 300 mg"] }),
    C("irbesartan", "dn", "Diabetic nephropathy — 300 mg once daily", "PO", ADULT, "fixed", 300, 24, { caps: { max_single: 300, unit: "mg" }, formulations: [{ form: "tab", strength: 300, unit: "mg/tab" }], rounding: "Whole tablets" })
  ],
  sources: [["FDA", "Irbesartan tablets — FDA label (DailyMed)", I2_DM("44b72da1-4434-461f-8e3c-264ad46f85df")], NEML_SRC],
  dose: { tagline: "Once-daily ARB — 150 mg (max 300); 300 mg for diabetic nephropathy; never in pregnancy.",
    boxedTitle: "Fetal toxicity", boxed: "• When pregnancy is detected, discontinue irbesartan tablets as soon as possible. • Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "150 mg once daily; up to 300 mg.", calc: ["htn"] }, { ind: "Diabetic nephropathy", text: "300 mg once daily.", calc: ["dn"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("irinotecan", {
  inn: "Irinotecan", atc: "L01CE02", cls: "Topoisomerase I inhibitor (camptothecin)", risk: ONC,
  linked: [],
  forms: ["Injection 20 mg/mL (40 mg/2 mL, 100 mg/5 mL, 300 mg/15 mL) [FDA]."],
  moa: "Active metabolite SN-38 inhibits topoisomerase I → DNA breaks [UNVERIFIED-KNOWLEDGE].",
  pk: ["SN-38 cleared by UGT1A1 glucuronidation — UGT1A1*28 homozygotes have more neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Metastatic colorectal cancer: first-line with 5-FU/leucovorin; or after progression on 5-FU-based therapy [FDA]."], paed: [NEP] },
  adult: [["Combination regimen 1", "125 mg/m² IV over 90 min on days 1, 8, 15, 22 with LV 20 mg/m² and bolus 5-FU, every 6 weeks [FDA]."], ["Combination regimen 2", "180 mg/m² IV over 90 min on days 1, 15, 29 with LV 200 mg/m² and 5-FU 400 mg/m² bolus + 600 mg/m² over 22 h on days 1, 2, 15, 16, 29, 30 [FDA]."], ["Single agent 1", "125 mg/m² over 90 min weekly × 4, then 2-week rest [FDA]."], ["Single agent 2", "350 mg/m² over 90 min every 3 weeks [FDA]."], ["Reduce", "Consider one dose level lower after pelvic/abdominal radiotherapy, performance status 2, raised bilirubin, or UGT1A1*28 homozygous. Bilirubin over 2 mg/dL: no recommended dose [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "Renal failure reported with volume depletion from vomiting/diarrhoea; dialysis not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Bilirubin over 2 mg/dL: dose cannot be recommended [FDA].", pregnancy: "Fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Strong CYP3A4 inducers/inhibitors and UGT1A1 inhibitors: avoid [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe diarrhoea and neutropenia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; aggressive diarrhoea management [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to irinotecan or excipients [FDA]."],
  ae: { common: ["Diarrhoea (early cholinergic and late), nausea, vomiting, neutropenia, alopecia, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe late diarrhoea [FDA]", "Severe myelosuppression, neutropenic fever [FDA]", "Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Renal failure from dehydration [FDA]"] },
  monitor: ["Blood counts before each dose; diarrhoea and hydration [FDA].", "Atropine for early cholinergic symptoms; loperamide for late diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("irinotecan", "wk", "Colorectal — 125 mg/m² IV over 90 min weekly (regimen 1 / single agent 1)", "IV", ADULT, "mg_per_m2", 125, 168, { formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL (then dilute)", infusion: { duration_h: 1.5 }, flags: ["Days 1, 8, 15, 22 then rest per regimen", "Consider one level lower: prior pelvic RT, PS 2, high bilirubin, UGT1A1*28/*28"] }),
    C("irinotecan", "q2w", "Colorectal (with infusional 5-FU) — 180 mg/m² IV every 2 weeks", "IV", ADULT, "mg_per_m2", 180, 336, { formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL (then dilute)", infusion: { duration_h: 1.5 }, flags: ["Days 1, 15, 29 of the regimen"] }),
    C("irinotecan", "q3w", "Colorectal single agent — 350 mg/m² IV every 3 weeks", "IV", ADULT, "mg_per_m2", 350, 504, { formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL (then dilute)", infusion: { duration_h: 1.5 } })
  ],
  sources: [["FDA", "CAMPTOSAR (irinotecan) injection — FDA label (DailyMed)", I2_DM("e518dfc6-7e93-4fee-a66c-51e1ab71c056")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Colorectal-cancer topoisomerase inhibitor — 125, 180 or 350 mg/m² by regimen; early and late diarrhoea can kill.",
    boxedTitle: "Diarrhea and myelosuppression", boxed: "• Early and late forms of diarrhea can occur. Early diarrhea may be accompanied by cholinergic symptoms which may be prevented or ameliorated by atropine. Late diarrhea can be life threatening and should be treated promptly with loperamide. Monitor patients with diarrhea and give fluid and electrolytes as needed. Institute antibiotic therapy if patients develop ileus, fever, or severe neutropenia. Interrupt CAMPTOSAR and reduce subsequent doses if severe diarrhea occurs. • Severe myelosuppression may occur [FDA].",
    adult: [{ ind: "Metastatic colorectal cancer", text: "125 mg/m² weekly, 180 mg/m² every 2 weeks, or 350 mg/m² every 3 weeks by regimen.", calc: ["wk", "q2w", "q3w"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("isatuximab", {
  inn: "Isatuximab", atc: "L01FC02", cls: "Anti-CD38 monoclonal antibody", risk: ONC,
  linked: [],
  forms: ["Injection 100 mg/5 mL and 500 mg/25 mL (20 mg/mL) for IV infusion [FDA].", "A subcutaneous product (SARCLISA Escena) also exists [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds CD38 on myeloma cells → antibody-dependent killing and apoptosis [UNVERIFIED-KNOWLEDGE].",
  pk: ["No dose change for renal impairment including ESRD [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Multiple myeloma: with pomalidomide + dexamethasone (2+ prior lines incl. lenalidomide and a PI); with carfilzomib + dexamethasone (1–3 prior lines); with bortezomib + lenalidomide + dexamethasone (newly diagnosed) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "10 mg/kg actual body weight IV [FDA]."], ["With pomalidomide or carfilzomib", "Cycle 1 (28 days): days 1, 8, 15, 22; cycle 2 on: days 1 and 15 [FDA]."], ["With VRd (newly diagnosed)", "Cycle 1 (42 days): days 1, 8, 15, 22, 29; cycles 2–4: days 1, 15, 29; cycles 5–17 (28 days): days 1, 15; cycle 18 on: day 1 [FDA]."], ["Premedication", "Dexamethasone, paracetamol, H2 blocker, diphenhydramine [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Embryo-fetal harm possible [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Interferes with blood-bank antibody screening (indirect Coombs) — type and screen before starting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Severe hypersensitivity to isatuximab or excipients [FDA]."],
  ae: { common: ["Neutropenia, infusion reactions, pneumonia, upper respiratory infection, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion-related reactions [FDA]", "Neutropenia, infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Second primary malignancies [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts; infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("isatuximab", "std", "Multiple myeloma — 10 mg/kg IV per scheduled dose", "IV", ADULT, "mg_per_kg", 10, 168, { formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL (then dilute)", flags: ["Interval by cycle: weekly in cycle 1, then every 2 weeks (then every 4 weeks from cycle 18 with VRd)", "Premedicate; actual body weight"] })],
  sources: [["FDA", "SARCLISA (isatuximab-irfc) injection for IV use — FDA label (DailyMed)", I2_DM("a0473462-6f9d-4eca-a5bf-8620aea68e8a")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-CD38 antibody for myeloma — 10 mg/kg IV weekly in cycle 1, then every 2 weeks; premedicate.",
    adult: [{ ind: "Multiple myeloma", text: "10 mg/kg IV by cycle schedule.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("isavuconazole", {
  inn: "Isavuconazole", atc: "J02AC05", cls: "Triazole antifungal (given as the prodrug isavuconazonium sulfate)",
  linked: [],
  forms: ["For injection 372 mg isavuconazonium sulfate (= 200 mg isavuconazole) vial [FDA].", "Capsules 186 mg (= 100 mg isavuconazole) and 74.5 mg (= 40 mg) [FDA]."],
  moa: "Inhibits fungal lanosterol 14-alpha-demethylase (ergosterol synthesis) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life — loading doses every 8 h for 48 h [FDA] [UNVERIFIED-KNOWLEDGE].", "Capsules with or without food [FDA]."],
  ind: { adult: ["Invasive aspergillosis and invasive mucormycosis [FDA]."], paed: ["Injection: 1 year and older. Capsules: 6 years and older weighing 16 kg or more [FDA]."] },
  adult: [["Loading", "372 mg isavuconazonium (1 vial IV, or 2 × 186 mg capsules) every 8 hours for 6 doses (48 h) [FDA]."], ["Maintenance", "372 mg once daily, starting 12–24 h after the last loading dose [FDA]."], ["IV", "Through an in-line filter over at least 1 hour [FDA]."], ["Doses here", "All doses are written as isavuconazonium sulfate (372 mg = 200 mg isavuconazole) [FDA]."]],
  paed: { tiers: ["IV 1 to under 3 years (under 18 kg): 15 mg/kg every 8 h × 6, then 15 mg/kg daily [FDA].", "IV 3 to under 18 years under 37 kg: 10 mg/kg every 8 h × 6, then daily; 37 kg and over: 372 mg [FDA].", "Capsules (74.5 mg) 6–17 years: 16–17 kg 2 caps; 18–24 kg 3; 25–31 kg 4; 32 kg+ 5 — every 8 h × 6, then once daily [FDA].", "Maximum single dose for any child: 372 mg [FDA]."], transition: "Adult dose from 37 kg (IV) or 32 kg (capsules).", calcNote: "mg of isavuconazonium sulfate." },
  adj: { renal: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe hepatic impairment: only if benefit outweighs risk; monitor [FDA].", pregnancy: "Fetal harm in animals [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Strong CYP3A4 inhibitors (ketoconazole, high-dose ritonavir) and strong inducers (rifampicin, carbamazepine, St John's wort, long-acting barbiturates): contraindicated [FDA]." },
  tox: { human: "Higher doses: more adverse reactions (headache, dizziness, nausea, taste change) [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; not removed by haemodialysis [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to isavuconazole [FDA].", "Strong CYP3A4 inhibitors or inducers [FDA].", "Familial short QT syndrome [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, headache, raised liver enzymes, hypokalaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "QT shortening [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests at start and during therapy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("isavuconazole", "load", "Aspergillosis / mucormycosis — 372 mg every 8 h × 6 doses (load)", "IV/PO", pop(216, null, null, null), "fixed", 372, 8, { caps: { max_single: 372, unit: "mg" }, formulations: [{ form: "vial", strength: 372, unit: "mg/vial" }, { form: "cap", strength: 186, unit: "mg/cap" }], rounding: "Whole vial / capsules", flags: ["mg of isavuconazonium sulfate (372 mg = 200 mg isavuconazole)", "6 doses over 48 h, then 372 mg once daily from 12–24 h later"] }),
    C("isavuconazole", "maint", "Maintenance — 372 mg once daily", "IV/PO", pop(216, null, null, null), "fixed", 372, 24, { caps: { max_single: 372, unit: "mg" }, formulations: [{ form: "vial", strength: 372, unit: "mg/vial" }, { form: "cap", strength: 186, unit: "mg/cap" }], rounding: "Whole vial / capsules", flags: ["mg of isavuconazonium sulfate"] }),
    C("isavuconazole", "c1", "Child IV 1 to under 3 years (under 18 kg) — 15 mg/kg", "IV", pop(12, 36, null, 18), "mg_per_kg", 15, 8, { caps: { max_single: 372, unit: "mg" }, formulations: [{ form: "vial", strength: 372, unit: "mg/vial" }], rounding: "Per pharmacy", flags: ["Every 8 h × 6 doses, then 15 mg/kg once daily", "mg of isavuconazonium sulfate"] }),
    C("isavuconazole", "c3", "Child IV 3–17 years under 37 kg — 10 mg/kg", "IV", pop(36, 216, null, 37), "mg_per_kg", 10, 8, { caps: { max_single: 372, unit: "mg" }, formulations: [{ form: "vial", strength: 372, unit: "mg/vial" }], rounding: "Per pharmacy", flags: ["Every 8 h × 6 doses, then 10 mg/kg once daily", "37 kg and over: 372 mg"] })
  ],
  sources: [["FDA", "CRESEMBA (isavuconazonium sulfate) capsules and for injection — FDA label (DailyMed)", I2_DM("8f7f73b8-586a-4df0-935f-fecd4696c16c")], NEML_SRC],
  dose: { tagline: "Broad azole for aspergillosis and mucormycosis — 372 mg every 8 h × 6, then 372 mg daily (as the prodrug).",
    adult: [{ ind: "Invasive aspergillosis / mucormycosis", text: "372 mg every 8 h × 6, then 372 mg once daily.", calc: ["load", "maint"] }],
    child: [{ ind: "1 to under 3 years (IV)", text: "15 mg/kg every 8 h × 6, then daily.", calc: ["c1"] }, { ind: "3–17 years under 37 kg (IV)", text: "10 mg/kg every 8 h × 6, then daily.", calc: ["c3"] }, { ind: "Capsules 6 y+ (16 kg+)", text: "2–5 × 74.5 mg capsules by weight." }] }
});

FDB_M("isocarboxazid", {
  inn: "Isocarboxazid", atc: "N06AF01", cls: "Monoamine oxidase inhibitor (non-selective, irreversible)",
  linked: [],
  forms: ["Tablets 10 mg [FDA]."],
  moa: "Irreversibly inhibits MAO-A and MAO-B [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Depression — not a first-choice antidepressant [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "10 mg twice daily; increase by 10 mg every 2–4 days to 40 mg/day by the end of week 1; then by up to 20 mg/week to a maximum of 60 mg/day, in 2–4 doses [FDA]."], ["Caution", "Limited experience above 40 mg/day [FDA]."], ["Response", "May take 3–6 weeks; after response, reduce slowly over weeks [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "Severe renal impairment: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Liver disease or abnormal LFTs: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Tyramine-rich foods and many drugs cause hypertensive crisis or serotonin syndrome — see contraindications [FDA]." },
  tox: { human: "Agitation, hallucinations, hyperpyrexia, hyper- or hypotension, seizures — may be delayed [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; monitor for at least 24 h [UNVERIFIED-KNOWLEDGE]." },
  contra: ["With other MAOIs or dibenzazepine derivatives; sympathomimetics including amphetamines; some CNS depressants including narcotics and alcohol; antihypertensives, diuretics, antihistamines, sedatives or anaesthetics; bupropion; buspirone; dextromethorphan; SSRIs and other serotonergic drugs; tyramine-rich food [FDA] [UNVERIFIED-KNOWLEDGE].", "Cerebrovascular disease, heart failure, phaeochromocytoma, liver disease, severe renal impairment, history of headache [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Orthostatic hypotension, dizziness, headache, dry mouth, insomnia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypertensive crisis [FDA] [UNVERIFIED-KNOWLEDGE]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Suicidality in young people [FDA]"] },
  monitor: ["BP; mood and suicidality [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("isocarboxazid", "start", "Depression — start 10 mg twice daily", "PO", ADULT, "fixed", 10, 12, { caps: { max_daily: 60, unit: "mg" }, formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Up to 40 mg/day by end of week 1; max 60 mg/day in 2–4 doses", "Tyramine diet and drug interaction rules"] })],
  sources: [["FDA", "MARPLAN (isocarboxazid) tablets — FDA label (DailyMed)", I2_DM("95fde749-44ad-4668-86c4-0ff17bca0074")], NEML_SRC],
  dose: { tagline: "Old MAOI antidepressant — 10 mg twice daily up to 60 mg/day; strict diet and drug-interaction rules.",
    boxedTitle: "Suicidality and antidepressant drugs", boxed: "Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies with Major Depressive Disorder (MDD) and other psychiatric disorders. Anyone considering the use of Marplan or any other antidepressant in a child, adolescent or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Marplan is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression (not first choice)", text: "10 mg twice daily; max 60 mg/day.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("isoprenaline", {
  inn: "Isoprenaline", atc: "C01CA02", cls: "Non-selective beta-adrenergic agonist",
  linked: [],
  forms: ["Injection 0.2 mg/mL (1 mg/5 mL) [FDA]."],
  moa: "Stimulates beta-1 and beta-2 receptors → higher heart rate and contractility, bronchodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very short acting — given by infusion [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Haemodynamic support in distributive shock and low-output shock [FDA].", "Bronchospasm during anaesthesia [FDA]."], paed: [NEP] },
  adult: [["Shock", "0.5–5 mcg/min IV infusion: e.g. 1 mg (5 mL) in 500 mL D5W = 2 mcg/mL; 0.25–2.5 mL/min. Rates over 30 mcg/min have been used in advanced shock [FDA]."], ["Bronchospasm (anaesthesia)", "10–20 mcg IV injection (after dilution) [FDA]."], ["Titrate", "By heart rate, CVP, BP and urine flow; if heart rate over 110/min, reduce or stop [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Infusion rate — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Other sympathomimetics add effects [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Tachycardia, arrhythmias, hypotension or hypertension [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop the infusion; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Tachycardia [FDA].", "Ventricular arrhythmias [FDA].", "Angina pectoris [FDA]."],
  ae: { common: ["Palpitations, tachycardia, tremor, headache, flushing [UNVERIFIED-KNOWLEDGE]."], serious: ["Ventricular arrhythmias, myocardial ischaemia [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Continuous ECG, BP, heart rate, urine output [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Isoproterenol hydrochloride injection — FDA label (DailyMed)", I2_DM("051acbc2-7bf8-4059-e063-6394a90a115b")], NEML_SRC],
  dose: { tagline: "Beta-agonist infusion — 0.5–5 mcg/min; slow down if heart rate over 110.",
    adult: [{ ind: "Shock", text: "0.5–5 mcg/min IV infusion (2 mcg/mL in D5W)." }, { ind: "Bronchospasm under anaesthesia", text: "10–20 mcg IV." }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("isopropanol", {
  inn: "Isopropanol", atc: "D08AX05", cls: "Alcohol antiseptic (skin preparation)",
  linked: [],
  forms: ["Pre-operative skin preparation applicators containing isopropyl alcohol (e.g. SoluPrep S) [FDA].", "70% isopropyl alcohol swabs (OTC) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Denatures microbial proteins [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Pre-operative skin preparation to reduce bacteria [FDA]."], paed: ["Use with care in premature infants and under 2 months (irritation, chemical burns) [FDA]."] },
  adult: [["Application", "Clean, dry, intact skin. Dry sites: back-and-forth strokes 30 seconds; moist sites (e.g. groin): 2 minutes. Do not let solution pool; avoid hairy areas [FDA]."], ["Fire risk", "Flammable — let it dry completely before drapes and diathermy [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Premature infants and under 2 months: use with care [FDA]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: "Ingestion: CNS depression, gastritis, ketosis without acidosis [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Allergy to the product [FDA] [UNVERIFIED-KNOWLEDGE].", "Not on open wounds or mucous membranes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Skin irritation, dryness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Chemical burns in infants [FDA]", "Surgical fire [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "3M SoluPrep S (isopropyl alcohol skin prep) — FDA label (DailyMed)", I2_DM("084aa305-5863-441a-a94d-36bc1b05195a")], NEML_SRC],
  dose: { tagline: "Alcohol skin prep — scrub 30 s (dry) or 2 min (moist); let dry fully: flammable.",
    adult: [{ ind: "Pre-operative skin prep", text: "Apply per product; dry completely before draping." }],
    child: [{ ind: "Infants", text: "Care under 2 months (burns)." }] }
});

FDB_M("isosorbide-mononitrate", {
  inn: "Isosorbide mononitrate", atc: "C01DA14", cls: "Organic nitrate (anti-anginal)",
  linked: [],
  forms: ["Tablets 10, 20 mg (immediate release) [FDA].", "Extended-release tablets 30, 60, 120 mg exist [UNVERIFIED-KNOWLEDGE]."],
  moa: "Nitric oxide donor; venodilation lowers preload and myocardial oxygen demand [UNVERIFIED-KNOWLEDGE].",
  pk: ["Asymmetric twice-daily dosing (7 h apart) leaves a nitrate-free interval to limit tolerance [FDA]."],
  ind: { adult: ["Prevention and treatment of angina from coronary artery disease; too slow for an acute attack [FDA]."], paed: [NEP] },
  adult: [["Angina (IR tablets)", "20 mg twice daily, the two doses 7 hours apart (e.g. 8 am and 3 pm) [FDA]."], ["Small stature", "May start 5 mg (½ × 10 mg), at least 10 mg by day 2–3 [FDA]."], ["No adjustment", "Elderly, hepatic or renal impairment [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "No adjustment [FDA].", hepatic: "No adjustment [FDA].", pregnancy: NEP, other: "PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) and riociguat: contraindicated — severe hypotension [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, headache, syncope, methaemoglobinaemia [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Leg elevation, fluids; methylene blue for methaemoglobinaemia [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Allergy to isosorbide mononitrate [FDA].", "PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) [FDA]."],
  ae: { common: ["Headache, dizziness, flushing [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension, syncope [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["BP; angina frequency [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 — the NEML nitrate is isosorbide dinitrate 5 mg sublingual [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [C("isosorbide-mononitrate", "std", "Angina — 20 mg, then 20 mg 7 hours later (each day)", "PO", ADULT, "fixed", 20, null, { caps: { max_single: 20, unit: "mg" }, formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Two doses a day, 7 HOURS apart (not every 12 h)", "Small stature: may start 5 mg"] })],
  sources: [["FDA", "Isosorbide mononitrate tablets — FDA label (DailyMed)", I2_DM("3e0e013f-6887-fa72-e063-6294a90a18ca")], NEML_SRC],
  dose: { tagline: "Angina prevention — 20 mg twice daily, 7 hours apart (nitrate-free night); never with sildenafil-type drugs.",
    adult: [{ ind: "Angina prevention", text: "20 mg at e.g. 8 am and 3 pm.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("isotretinoin", {
  inn: "Isotretinoin", atc: "D10BA01", cls: "Oral retinoid", risk: "iPLEDGE REMS — severe birth defects",
  linked: [],
  forms: ["Capsules 10, 20, 30, 40 mg (CLARAVIS and generics) [FDA] [UNVERIFIED-KNOWLEDGE].", "ABSORICA / ABSORICA LD are different formulations — not interchangeable mg for mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Retinoid that shrinks sebaceous glands and reduces sebum [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take with food [FDA]."],
  ind: { adult: ["Severe recalcitrant nodular acne (nodules 5 mm or more) unresponsive to conventional therapy including systemic antibiotics, in non-pregnant patients 12 years and older [FDA]."], paed: ["12 years and older [FDA]."] },
  adult: [["Dose", "0.5–1 mg/kg/day in two divided doses with food for 15–20 weeks [FDA]."], ["Very severe (scarring, trunk) adults", "Up to 2 mg/kg/day in two doses [FDA]."], ["Never", "Once daily dosing is not recommended; missed dose — skip it [FDA]."], ["Before", "Pregnancy excluded and documented (iPLEDGE); fasting lipids and liver tests [FDA]."], ["Second course", "Not before 2 months off treatment [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["12 years and older: 0.5–1 mg/kg/day in two doses [FDA]."], transition: "Same mg/kg.", calcNote: "Two doses daily with food." },
  adj: { renal: NEP, hepatic: "Hepatotoxicity — monitor liver tests [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "CONTRAINDICATED — extremely high risk of life-threatening birth defects; two forms of contraception; iPLEDGE [FDA].", other: "Tetracyclines (intracranial hypertension) and vitamin A supplements: avoid [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Vomiting, flushing, cheilosis, abdominal pain, headache, dizziness, ataxia [FDA].", animal: LD, manage: "Pregnancy test if able to conceive; men avoid unprotected sex for a month (semen levels) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy [FDA].", "Hypersensitivity to isotretinoin, vitamin A or components [FDA]."],
  ae: { common: ["Dry lips (cheilitis), dry skin and eyes, nosebleeds, myalgia, raised lipids [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Birth defects [FDA]", "Depression, psychosis, suicide [FDA] [UNVERIFIED-KNOWLEDGE]", "Intracranial hypertension [FDA] [UNVERIFIED-KNOWLEDGE]", "Pancreatitis, hepatotoxicity, severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Hearing and vision changes [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Monthly pregnancy tests (iPLEDGE) [FDA] [UNVERIFIED-KNOWLEDGE].", "Fasting lipids and liver tests before and during [FDA].", "Mood every visit [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("isotretinoin", "std", "Severe nodular acne (12 y+) — 0.5–1 mg/kg/day ÷ twice daily", "PO", pop(144, null, null, null), "mg_per_kg", 0.5, 12, { dose: { value: 0.5, unit: "mg", per: "day", value_max: 1 }, divided_doses: 2, formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }, { form: "cap", strength: 20, unit: "mg/cap" }], rounding: "Whole capsules — never split", flags: ["With food; 15–20 weeks", "Adults with very severe disease: up to 2 mg/kg/day", "CLARAVIS-type capsules only — ABSORICA doses differ", "Pregnancy excluded (iPLEDGE)"] })],
  sources: [["FDA", "CLARAVIS (isotretinoin) capsules — FDA label (DailyMed)", I2_DM("a31fd109-d0fd-4ab9-ba98-a3d64333c18d")], NEML_SRC],
  dose: { tagline: "Severe nodular acne — 0.5–1 mg/kg/day in two doses with food; absolutely no pregnancy (iPLEDGE).",
    boxedTitle: "Embryo-fetal toxicity — contraindicated in pregnancy", boxed: "Claravis can cause life-threatening birth defects and is contraindicated in pregnancy. There is an extremely high risk that life-threatening birth defects will result if pregnancy occurs while taking any amount of Claravis even for short periods of time. Potentially any fetus exposed during pregnancy can be affected. There are no accurate means of determining prenatally whether an exposed fetus has been affected. If pregnancy occurs, discontinue Claravis immediately and refer the patient to an Obstetrician-Gynecologist experienced in reproductive toxicity for further evaluation and counseling. Because of the risk of embryo-fetal toxicity, Claravis is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the iPLEDGE REMS [FDA].",
    adult: [{ ind: "Severe nodular acne", text: "0.5–1 mg/kg/day in 2 doses × 15–20 weeks.", calc: ["std"] }],
    child: [{ ind: "12 years and older", text: "0.5–1 mg/kg/day in 2 doses.", calc: ["std"] }] }
});

FDB_M("isradipine", {
  inn: "Isradipine", atc: "C08CA03", cls: "Dihydropyridine calcium channel blocker",
  linked: [],
  forms: ["Capsules 2.5, 5 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks L-type calcium channels in vascular smooth muscle → vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Higher exposure in the elderly, hepatic impairment and mild renal impairment — start dose unchanged [FDA]."],
  ind: { adult: ["Hypertension, alone or with a thiazide [FDA]."], paed: [NEP] },
  adult: [["Hypertension", "2.5 mg twice daily; response in 2–3 h, maximum effect in 2–4 weeks. Increase by 5 mg/day every 2–4 weeks to a maximum of 20 mg/day; little extra effect and more adverse effects above 10 mg/day [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "Start 2.5 mg twice daily [FDA].", hepatic: "Start 2.5 mg twice daily [FDA].", pregnancy: NEP, other: "CYP3A4 inhibitors raise levels [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, tachycardia [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; calcium, vasopressors [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any ingredient [FDA]."],
  ae: { common: ["Headache, dizziness, oedema, palpitations, flushing [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["BP [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("isradipine", "std", "Hypertension — 2.5 mg twice daily", "PO", ADULT, "fixed", 2.5, 12, { caps: { max_daily: 20, unit: "mg" }, formulations: [{ form: "cap", strength: 2.5, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Increase by 5 mg/day every 2–4 weeks; max 20 mg/day", "Little gain above 10 mg/day"] })],
  sources: [["FDA", "Isradipine capsules — FDA label (DailyMed)", I2_DM("fdb4c50e-6e6f-a43d-e053-6294a90aa24f")], NEML_SRC],
  dose: { tagline: "Twice-daily dihydropyridine — 2.5 mg bid, max 20 mg/day (usually ≤10).",
    adult: [{ ind: "Hypertension", text: "2.5 mg twice daily; max 20 mg/day.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("istradefylline", {
  inn: "Istradefylline", atc: "N04CX01", cls: "Adenosine A2A receptor antagonist",
  linked: [],
  forms: ["Tablets 20, 40 mg [FDA]."],
  moa: "Adenosine A2A receptor antagonist [FDA].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Adjunct to levodopa/carbidopa in Parkinson's disease with OFF episodes [FDA]."], paed: [NEP] },
  adult: [["Dose", "20 mg once daily; may increase to 40 mg once daily; no titration needed [FDA]."], ["Smokers (20+ cigarettes/day)", "40 mg once daily [FDA]."], ["Strong CYP3A4 inhibitors", "Maximum 20 mg; strong inducers: avoid [FDA]."], ["Liver", "Moderate: maximum 20 mg; severe: avoid [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Moderate: max 20 mg; severe: avoid [FDA].", pregnancy: "Fetal harm in animals [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Smoking lowers levels [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Dyskinesia, dizziness, constipation, nausea, hallucination, insomnia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Dyskinesia, hallucinations/psychosis, impulse control disorders [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Dyskinesia; psychiatric symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("istradefylline", "std", "Parkinson's OFF episodes — 20 mg once daily (up to 40)", "PO", ADULT, "fixed", 20, 24, { dose: { value: 20, unit: "mg", per: "dose", value_max: 40 }, caps: { max_single: 40, unit: "mg" }, formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Heavy smokers: 40 mg", "Strong CYP3A4 inhibitor or moderate hepatic impairment: max 20 mg"] })],
  sources: [["FDA", "NOURIANZ (istradefylline) tablets — FDA label (DailyMed)", I2_DM("a7d008cb-b273-4049-a5d2-9c6902910d58")], NEML_SRC],
  dose: { tagline: "Add-on for Parkinson's OFF time — 20–40 mg once daily.",
    adult: [{ ind: "Parkinson's (with levodopa)", text: "20 mg once daily; up to 40 mg.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

})(); // end I-2 scope

/* Brand names — BATCH I2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"insulin-degludec":{"IN":[["Tresiba","Novo Nordisk India Pvt Ltd","Tresiba Penfill 100Iu Cartridge Of 3Ml Solution For Injection"]],"BD":[["Tresiba","Novo Nordisk Pharma (Pvt","100 IU/ml"]],"src":["https://pharmeasy.in/online-medicine-order/tresiba-100iu-penfill-3ml-194016","https://medex.com.bd/brands/16840/tresiba-100-iu-sc-injection"]},"insulin-detemir":{"IN":[["Levemir","Novo Nordisk India Pvt Ltd","Levemir Flexpen 100Iu Pre Filled Pen Of 3Ml Solution For Injection"]],"BD":[["Levemir Flexpen","Novo Nordisk Pharma (Pvt","100 IU/ml"]],"src":["https://pharmeasy.in/online-medicine-order/levemir-flexpen-injection-3ml-726","https://medex.com.bd/brands/16832/levemir-flexpen-100-iu-sc-injection"]},"insulin-glargine":{"IN":[["Lantus","Sanofi","Lantus 100Iu Cartridge Of 3Ml Solution For Injection"],["Toujeo","Sanofi","Toujeo 300Iu Cartridge Of 1.5Ml Solution For Injection"],["Basugine","Lupin","Basugine 100Iu Cartridge Of 3Ml Injection"]],"BD":[["Insul Glargine","Popular Pharmaceuticals PLC","100 IU/ml"],["Insulet GN","Aristopharma Ltd","100 IU/ml"],["Lantus SoloStar","Synovia Pharma PLC","100 IU/ml"]],"src":["https://pharmeasy.in/online-medicine-order/lantus-100iu-cartridge-3ml-23967","https://pharmeasy.in/online-medicine-order/toujeo-300iu-ml-cartridge-of-1-5ml-solution-for-injection-3510825","https://pharmeasy.in/online-medicine-order/basugine-100iu-cartridge-17214","https://medex.com.bd/brands/16836/insul-glargine-100-iu-sc-injection","https://medex.com.bd/brands/16837/insulet-gn-100-iu-sc-injection","https://medex.com.bd/brands/16838/lantus-solostar-100-iu-sc-injection"]},"insulin-glulisine":{"IN":[["Apidra","Sanofi","Apidra 100Iu Cartridge Of 3Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/apidra-100iu-cartridge-inj-24048"]},"insulin-lispro":{"IN":[["Humalog","Cipla Limited","Humalog 100Iu Cartridge Of 3Ml Solution For Injection"],["Lyumjev","Cipla Limited","Lyumjev 100Iu Cartridge Of 3Ml Solution For Injection"],["Eglucent","Lupin","Eglucent Rapid 100Iu Cartridge Of 3Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/humalog-100iu-cartridge-of-3ml-solution-for-injection-50503","https://pharmeasy.in/online-medicine-order/lyumjev-100iu-cartridge-of-3ml-solution-for-injection-4147634","https://pharmeasy.in/online-medicine-order/eglucent-rapid-100iu-cartridge-3ml-208319"]},"interferon-beta-1a":{"IN":[["Rebif","Serum Institute Of India Private Limited","Rebif (Merck) 44 Mcg Injection 1"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/rebif-merck-44-mcg-injection-1-196763"]},"iopamidol":{"IN":[["Lek Pamidol","J B Chemicals And Pharmaceuticals","Lek Pamidol 370 Mg Infusion 100 Ml"],["Iopamiro","Merck Limited","Iopamiro 370Mg Injection 30Ml"]],"BD":[["Amidol","Incepta Pharmaceuticals Ltd","370 mg/50 ml"],["Diapamiro","Techno Drugs Ltd","370 mg/50 ml"],["Lopitrast","The IBN SINA Pharmaceutical PLC","370 mg/50 ml"]],"src":["https://pharmeasy.in/online-medicine-order/lek-pamidol-370-mg-infusion-100-ml-196775","https://pharmeasy.in/online-medicine-order/iopamiro-370mg-inj-30ml-75601","https://medex.com.bd/brands/21057/amidol-370-mg-injection","https://medex.com.bd/brands/21061/diapamiro-370-mg-injection","https://medex.com.bd/brands/36881/lopitrast-370-mg-injection"]},"irbesartan":{"IN":[["Irovel","Sun Pharma","Irovel 150Mg Strip Of 10 Tablets"]],"BD":[["Arbitan","Opsonin Pharma Ltd","75 mg"],["Cavapro","UniMed UniHealth Pharmaceuticals Ltd","75 mg"],["Irbes","Eskayef Pharmaceuticals Ltd","75 mg"]],"src":["https://pharmeasy.in/online-medicine-order/irovel-150mg-tablet-51254","https://medex.com.bd/brands/2689/arbitan-75-mg-tablet","https://medex.com.bd/brands/2691/cavapro-75-mg-tablet","https://medex.com.bd/brands/2694/irbes-75-mg-tablet"]},"irinotecan":{"IN":[["Irinotel","Fresenius Kabi India Pvt Ltd","Irinotel 100Mg Vial Of 5Ml Injection"],["Foiri","Cadila Healthcare Limited","Foiri 100Mg Vial Of 5Ml Injection"],["Irinozee","Zee Laboratories Ltd","Irinozee 100Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Irinox","Beacon Pharmaceuticals PLC","20 mg/ml"],["Irinotesin","BOTS Pvt","20 mg/ml"],["Irotin","Techno Drugs Ltd","20 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/irinotel-100-mg-injection-5-ml-196777","https://pharmeasy.in/online-medicine-order/foiri-100mg-vial-of-5ml-injection-3899771","https://pharmeasy.in/online-medicine-order/irinozee-100mg-dry-vial-of-1-powder-for-injection-4819329","https://medex.com.bd/brands/17256/irinox-20-mg-iv-infusion","https://medex.com.bd/brands/17274/irinotesin-20-mg-iv-infusion","https://medex.com.bd/brands/17325/irotin-20-mg-iv-infusion"]},"isoprenaline":{"IN":[["Isolin","Samarth Life Sciences Pvt Ltd","Isolin 2Mg Ampoule Of 1Ml Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/isolin-2mg-injection-1-s-51296"]},"isosorbide-mononitrate":{"IN":[["Monit","Intas Pharmaceuticals Ltd","Monit Sr 30Mg Strip Of 15 Tablets"],["Isotrate","Knoll Healthcare Pvt Ltd","Isotrate 10Mg Strip Of 10 Tablets"],["Monotrate","Sun Pharma","Monotrate Sr 30Mg Strip Of 10 Tablets"]],"BD":[["A-Card","ACME Laboratories Ltd","20 mg"],["Monocard","Drug International Ltd","20 mg"],["Monocard-SR","Drug International Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/monit-sr-30mg-strip-of-15-tablets-14254","https://pharmeasy.in/online-medicine-order/isotrate-10mg-strip-of-10-tablets-195285","https://pharmeasy.in/online-medicine-order/monotrate-sr-30mg-tablet-25072","https://medex.com.bd/brands/3039/a-card-20-mg-tablet","https://medex.com.bd/brands/3046/monocard-20-mg-tablet","https://medex.com.bd/brands/3047/monocard-sr-50-mg-sr-capsule"]},"isotretinoin":{"IN":[["Isotrenol","Knoll Healthcare Pvt Ltd","Isotrenol 20Mg Strip Of 10 Capsules"],["Accufine","Healing Pharma India Pvt Ltd","Accufine 20Mg Strip Of 10 Capsules"],["Rosarex","Avighna Medicare Pvt Ltd","Rosarex 20Mg Strip Of 10 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/isotrenol-20mg-capsule-10-s-228249","https://pharmeasy.in/online-medicine-order/accufine-20mg-strip-of-10-capsules-236323","https://pharmeasy.in/online-medicine-order/rosarex-20mg-strip-of-10-capsules-3553929"]},"istradefylline":{"IN":[],"BD":[["Aric","Incepta Pharmaceuticals Ltd","20 mg"]],"src":["https://medex.com.bd/brands/33449/aric-20-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
