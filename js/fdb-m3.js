/* Clinical Disease Guide — Drug monograph database, block M, batch M-3 (26 Nov 2026).
   Midostaurin … montelukast. Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed text "@LABEL" is filled from the saved FDA label by _work/tools/fdb-boxed-fill.js (needs X_DM("set id") or setid= in the source URL).
   Labels replaced: minocycline (oral capsules, not the Emrosi rosacea pack), minoxidil (oral tablets, not the scalp foam pack),
   mitomycin (IV vial, not the Jelmyto pyelocalyceal gel pack), montelukast (all-ages generic label with granules),
   mitapivat (Pyrukynd for PK deficiency added beside the Aqvesme thalassaemia pack). */
(function () { // M-3 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const M3_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ALL = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";

FDB_M("midostaurin", {
  inn: "Midostaurin", atc: "L01EX10", cls: "Multi-kinase (FLT3, KIT) inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 25 mg [FDA]."],
  moa: "Inhibits FLT3 and KIT kinases and other receptor tyrosine kinases [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Metabolised by CYP3A4 to active metabolites; strong CYP3A inhibitors raise exposure [FDA]."],
  ind: { adult: ["Newly diagnosed FLT3-mutated AML, with standard cytarabine/daunorubicin induction and cytarabine consolidation (not as single-agent induction) [FDA].", "Aggressive systemic mastocytosis, SM with associated haematological neoplasm, mast cell leukaemia [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["AML", "50 mg orally twice daily with food on days 8–21 of each induction and consolidation cycle [FDA]."], ["Systemic mastocytosis / mast cell leukaemia", "100 mg orally twice daily with food until progression or unacceptable toxicity [FDA]."], ["Before each dose", "Give antiemetic prophylaxis [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Selection", "AML: FLT3 mutation by an FDA-approved test [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults only." },
  adj: { renal: "No adjustment for mild–moderate impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Not studied in severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Embryo-fetal toxicity — use effective contraception during and for 4 months after [FDA].", other: "Avoid strong CYP3A inducers; watch closely with strong CYP3A inhibitors [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to midostaurin or excipients (anaphylaxis, angioedema reported) [FDA]."],
  ae: { common: ["AML: febrile neutropenia, nausea, mucositis, vomiting, headache, petechiae, musculoskeletal pain, epistaxis [FDA].", "SM: nausea, vomiting, diarrhoea, oedema, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Interstitial lung disease / pneumonitis, sometimes fatal [FDA]", "Embryo-fetal toxicity [FDA]", "Myelosuppression and infection [FDA]"] },
  monitor: ["Blood counts; respiratory symptoms; for SM weekly for 4 weeks, every other week for 8 weeks, then monthly [FDA]."],
  local: notBT,
  calc: [
    { drug: "midostaurin", indication_id: "aml", label: "FLT3+ AML — 50 mg twice daily (days 8–21)", route: "PO", population: ADULT, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 25, unit: "mg", whole: true }], rounding: "whole capsules", renal: [], flags: ["Days 8–21 of each chemotherapy cycle", "With food"], sources: ["FDA"] },
    { drug: "midostaurin", indication_id: "sm", label: "Systemic mastocytosis — 100 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 25, unit: "mg", whole: true }], rounding: "whole capsules", renal: [], flags: ["Continuous", "With food"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Rydapt (midostaurin) capsules — FDA label (DailyMed)", M3_DM("11fa3fc9-6776-49a6-b1c1-653f627c3e58")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "FLT3 inhibitor for AML (50 mg twice daily) and advanced mastocytosis (100 mg twice daily).",
    cautionTitle: "Use with care",
    caution: "Can cause interstitial lung disease and pneumonitis, sometimes fatal — stop if confirmed. Harms the fetus. Give with food and antiemetic cover [FDA].",
    adult: [{ ind: "FLT3+ AML", text: "50 mg twice daily with food, days 8–21 of each cycle.", calc: ["aml"] }, { ind: "Systemic mastocytosis", text: "100 mg twice daily with food.", calc: ["sm"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mifepristone", {
  inn: "Mifepristone", atc: "G03XB01", cls: "Glucocorticoid- and progesterone-receptor antagonist",
  linked: [],
  forms: ["Tablets 300 mg (Korlym, Cushing's syndrome) [FDA].", "Tablets 200 mg (pregnancy termination products) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks the glucocorticoid (GR-II) and progesterone receptors [FDA].",
  pk: ["Long half-life; metabolised by CYP3A; strong CYP3A inhibitor of other drugs [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Korlym: hyperglycaemia from endogenous Cushing's syndrome in adults with type 2 diabetes or glucose intolerance who failed or cannot have surgery [FDA].", "200 mg product: medical termination of early pregnancy, followed by misoprostol, under national rules [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Cushing's syndrome (Korlym)", "300 mg once daily with a meal; raise by 300 mg every 2–4 weeks by response to a maximum 1,200 mg once daily, never above 20 mg/kg/day [FDA]."], ["Limits", "Kidney impairment or mild–moderate liver impairment: no more than 600 mg daily; with strong CYP3A inhibitors: no more than 900 mg daily [FDA]."], ["Before starting", "Negative pregnancy test (repeat if treatment stops for more than 14 days) [FDA]."], ["Pregnancy termination", "Different product and dose; follow national protocol [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adult starting dose only." },
  adj: { renal: "No more than 600 mg once daily [FDA].", hepatic: "Mild–moderate: no more than 600 mg once daily; severe: do not use [FDA].", pregnancy: "Contraindicated (Korlym) — terminates pregnancy [FDA].", other: "Contraindicated with simvastatin, lovastatin and narrow-range CYP3A substrates (ciclosporin, ergots, fentanyl, pimozide, quinidine, sirolimus, tacrolimus) and long-term corticosteroids [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose experience [FDA].", animal: LD, manage: "Supportive; watch for adrenal insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy [FDA]", "Drugs metabolised by CYP3A with a narrow range, simvastatin, lovastatin [FDA]", "Patients needing corticosteroids for serious illness [FDA] [UNVERIFIED-KNOWLEDGE]", "Unexplained vaginal bleeding, endometrial hyperplasia with atypia or endometrial cancer [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, fatigue, headache, low potassium, arthralgia, vomiting, oedema, hypertension, dizziness, endometrial thickening [FDA]."], serious: ["Adrenal insufficiency (cortisol levels do not guide dosing) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypokalaemia [FDA]", "Vaginal bleeding, endometrial hypertrophy [FDA]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Potassium before and during; glucose; signs of adrenal insufficiency; pregnancy test [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "mifepristone", indication_id: "cushing", label: "Cushing's syndrome (Korlym) — start 300 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_mg_per_kg_dose: 20 }, weight_basis: "actual", formulations: [{ form: "tablet", strength: 300, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], renal_note: "Kidney impairment: no more than 600 mg once daily [FDA].", flags: ["Starting dose — titrate by 300 mg every 2–4 weeks to max 1,200 mg and 20 mg/kg", "Negative pregnancy test first"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Korlym (mifepristone) tablets — FDA label (DailyMed)", M3_DM("542f3fae-8bc8-4f00-9228-e4b66c9ad6a9")], NEML_SRC],
  dose: { tagline: "Cortisol-receptor blocker for Cushing's hyperglycaemia — start 300 mg daily; never in pregnancy.",
    boxedTitle: "Termination of pregnancy",
    boxed: "Mifepristone is a potent antagonist of progesterone and cortisol via the progesterone and glucocorticoid (GR-II) receptors, respectively. The antiprogestational effects will result in the termination of pregnancy. Pregnancy must therefore be excluded before the initiation of treatment with KORLYM and prevented during treatment and for one month after stopping treatment by the use of a non-hormonal medically acceptable method of contraception unless the patient has had a surgical sterilization, in which case no additional contraception is needed. Pregnancy must also be excluded if treatment is interrupted for more than 14 days in females of reproductive potential [FDA].",
    adult: [{ ind: "Cushing's syndrome (Korlym)", text: "300 mg once daily with a meal; up to 1,200 mg (max 20 mg/kg).", calc: ["cushing"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("migalastat", {
  inn: "Migalastat", atc: "A16AX14", cls: "Pharmacological chaperone (alpha-galactosidase A)",
  linked: [],
  forms: ["Capsules 123 mg [FDA]."],
  moa: "Binds and stabilises amenable mutant alpha-Gal A so it reaches the lysosome [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mainly cleared by the kidneys; exposure rises greatly in severe impairment [FDA]."],
  ind: { adult: ["Fabry disease with an amenable GLA variant (accelerated approval) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Fabry disease", "123 mg every other day at the same time; never on consecutive days [FDA]."], ["Fasting", "No food or caffeine for 2 hours before and 2 hours after [FDA]."], ["Missed dose", "Take within 12 hours, otherwise skip to the next planned day [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults only." },
  adj: { renal: "Not recommended at eGFR under 30 mL/min/1.73 m² or on dialysis; no change at 30 and above [FDA].", hepatic: NEP, pregnancy: NEP, other: "Do not use with enzyme replacement therapy [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, nasopharyngitis, urinary tract infection, nausea, fever [FDA]."], serious: [NEP] },
  monitor: ["Kidney function, cardiac status and plasma lyso-Gb3 periodically [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "migalastat", indication_id: "fabry", label: "Fabry disease — 123 mg every other day", route: "PO", population: ADULT, basis: "fixed", dose: { value: 123, unit: "mg", per: "dose" }, interval_h: 48, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 123, unit: "mg", whole: true }], rounding: "1 capsule", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "not recommended at eGFR under 30 mL/min/1.73 m² or on dialysis (label uses eGFR)" }], flags: ["Never on consecutive days", "Fast 2 h before and after"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Galafold (migalastat) capsules — FDA label (DailyMed)", M3_DM("66dbd928-0f1c-48b1-a832-54e4abd9f1db")], NEML_SRC],
  dose: { tagline: "Oral chaperone for amenable Fabry variants — 123 mg every other day, fasting.",
    adult: [{ ind: "Fabry disease", text: "123 mg every other day; fast 2 h either side.", calc: ["fabry"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("miglitol", {
  inn: "Miglitol", atc: "A10BF02", cls: "Alpha-glucosidase inhibitor",
  linked: [],
  forms: ["Tablets 25, 50, 100 mg [FDA]."],
  moa: "Delays carbohydrate digestion in the small intestine, lowering post-meal glucose [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorbed and excreted unchanged by the kidneys; not metabolised [FDA]."],
  ind: { adult: ["Type 2 diabetes, with diet and exercise, alone or with a sulfonylurea [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "25 mg three times daily at the first bite of each main meal (or 25 mg once daily, building up) [FDA]."], ["Maintenance", "Usually 50 mg three times daily after 4–8 weeks; maximum 100 mg three times daily [FDA]."], ["Hypoglycaemia", "With a sulfonylurea or insulin, treat lows with glucose (dextrose), not sucrose [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults only." },
  adj: { renal: "Not recommended at serum creatinine over 2.0 mg/dL or CrCl under 25 mL/min [FDA].", hepatic: "No change — not metabolised [FDA].", pregnancy: NEP, other: "May reduce ranitidine and propranolol absorption [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Flatulence, diarrhoea, abdominal discomfort; no hypoglycaemia on its own [FDA].", animal: LD, manage: "Supportive [FDA]." },
  contra: ["Diabetic ketoacidosis [FDA]", "Inflammatory bowel disease, colonic ulceration, partial or predisposed intestinal obstruction [FDA]", "Chronic intestinal disease with marked digestion or absorption disorder [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Flatulence, diarrhoea, abdominal pain [FDA].", "Rash [FDA]."], serious: ["Hypoglycaemia when combined with sulfonylurea or insulin [FDA]"] },
  monitor: ["1-hour post-meal glucose during titration; HbA1c about every 3 months [FDA]."],
  local: notBT,
  calc: [
    { drug: "miglitol", indication_id: "start", label: "Type 2 diabetes — start 25 mg three times daily with meals", route: "PO", population: ADULT, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: null, caps: { max_single: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tablet", strength: 25, unit: "mg", whole: true }], rounding: "whole tablets", renal: [{ crcl_min: 0, crcl_max: 24.999, action: "avoid", note: "not recommended at CrCl under 25 mL/min" }], flags: ["At the first bite of each main meal", "Titrate to 50 mg three times daily after 4–8 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Miglitol tablets — FDA label (DailyMed)", M3_DM("f16ecb50-e54e-43e1-8789-eaf5bc94f332")], NEML_SRC],
  dose: { tagline: "Mealtime alpha-glucosidase inhibitor — start 25 mg with each main meal.",
    adult: [{ ind: "Type 2 diabetes", text: "25 mg three times daily with meals; usual 50 mg, max 100 mg three times daily.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const MIG40 = { min_age_months: 216, max_age_months: null, min_weight_kg: 40, max_weight_kg: 50 };
const MIG50 = { min_age_months: 216, max_age_months: null, min_weight_kg: 50, max_weight_kg: null };
FDB_M("miglustat", {
  inn: "Miglustat", atc: "A16AX06", cls: "Enzyme stabiliser / glucosylceramide synthase inhibitor",
  linked: [],
  forms: ["Capsules 65 mg (Opfolda) [FDA].", "Capsules 100 mg (Zavesca, Gaucher disease) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Opfolda: binds and stabilises cipaglucosidase alfa in the blood. Zavesca: inhibits glucosylceramide synthase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted mainly unchanged in urine; exposure rises with kidney impairment [FDA]."],
  ind: { adult: ["Opfolda: with Pombiliti (cipaglucosidase alfa) for late-onset Pompe disease, 40 kg and over, not improving on current ERT [FDA].", "Zavesca: mild–moderate type 1 Gaucher disease when ERT is not an option [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established for Opfolda [FDA]."] },
  adult: [["Pompe disease (Opfolda)", "50 kg and over: 260 mg; 40 to under 50 kg: 195 mg — orally every other week, about 1 hour before the Pombiliti infusion [FDA]."], ["Fasting", "Only an unsweetened drink; no food or other drinks for 2 hours before and after [FDA]."], ["Missed dose", "If Opfolda is missed, do not give Pombiliti; reschedule at least 24 hours after the last Opfolda [FDA]."], ["Gaucher disease (Zavesca)", "100 mg three times daily [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults, by weight band." },
  adj: { renal: "Opfolda, CrCl 30–59 or 15–29 mL/min: 195 mg (50 kg and over) or 130 mg (40 to under 50 kg); CrCl 60–89: usual dose [FDA].", hepatic: NEP, pregnancy: "Contraindicated with Pombiliti — verify pregnancy status first [FDA].", other: "Start 2 weeks after the last ERT dose [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy (with Pombiliti) [FDA]."],
  ae: { common: ["Headache, diarrhoea, fatigue, nausea, abdominal pain, fever [FDA]."], serious: ["Hypersensitivity and infusion reactions with Pombiliti [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Kidney function; pregnancy status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "miglustat", indication_id: "pompe50", label: "Pompe (Opfolda), 50 kg and over — 260 mg every other week", route: "PO", population: MIG50, basis: "fixed", dose: { value: 260, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 65, unit: "mg", whole: true }], rounding: "whole capsules", renal: [{ crcl_min: 15, crcl_max: 59.999, action: "reduce_dose", set_value: 195 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "no label dose below CrCl 15 mL/min" }], flags: ["With Pombiliti, 1 hour before the infusion", "Fast 2 h before and after"], sources: ["FDA"] },
    { drug: "miglustat", indication_id: "pompe40", label: "Pompe (Opfolda), 40 to under 50 kg — 195 mg every other week", route: "PO", population: MIG40, basis: "fixed", dose: { value: 195, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 65, unit: "mg", whole: true }], rounding: "whole capsules", renal: [{ crcl_min: 15, crcl_max: 59.999, action: "reduce_dose", set_value: 130 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "no label dose below CrCl 15 mL/min" }], flags: ["With Pombiliti, 1 hour before the infusion", "Fast 2 h before and after"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Opfolda (miglustat) capsules — FDA label (DailyMed)", M3_DM("d7c38298-37db-5a80-e053-2995a90aee40")], NEML_SRC],
  dose: { tagline: "Pompe disease with Pombiliti — 260 mg (or 195 mg) every other week; lower in kidney impairment.",
    cautionTitle: "Use with care",
    caution: "Contraindicated in pregnancy when used with Pombiliti — check pregnancy status before starting. Doses are lower when CrCl is under 60 mL/min [FDA].",
    adult: [{ ind: "Pompe, 50 kg and over", text: "260 mg every other week with Pombiliti.", calc: ["pompe50"] }, { ind: "Pompe, 40 to under 50 kg", text: "195 mg every other week with Pombiliti.", calc: ["pompe40"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("milnacipran", {
  inn: "Milnacipran", atc: "N06AX17", cls: "Serotonin–noradrenaline reuptake inhibitor (SNRI)",
  linked: [],
  forms: ["Tablets 12.5, 25, 50, 100 mg [FDA]."],
  moa: "Inhibits noradrenaline and serotonin reuptake [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mostly excreted unchanged in urine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Fibromyalgia [FDA]."], paed: ["Not approved; not recommended [FDA]."] },
  adult: [["Titration", "Day 1: 12.5 mg once; days 2–3: 12.5 mg twice daily; days 4–7: 25 mg twice daily; then 50 mg twice daily [FDA]."], ["Maintenance", "50 mg twice daily (100 mg/day); up to 100 mg twice daily by response [FDA]."], ["Stopping", "Taper — do not stop suddenly after long use [FDA]."]],
  paed: { tiers: ["Not recommended [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults only." },
  adj: { renal: "Moderate: caution. Severe (CrCl 5–29): halve to 25 mg twice daily (may raise to 50 mg twice daily). End-stage disease: not recommended [FDA].", hepatic: "No change; caution in severe impairment [FDA].", pregnancy: NEP, other: "Avoid in uncontrolled narrow-angle glaucoma and heavy alcohol use [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Limited experience; ingestions up to 1,000 mg were not fatal; higher doses cause vomiting, hypertension, tachycardia, seizures [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; no antidote [FDA]." },
  contra: ["MAOI within 14 days before, or within 5 days after stopping milnacipran; linezolid or IV methylene blue [FDA]."],
  ae: { common: ["Nausea, headache, constipation, dizziness, insomnia, hot flush, sweating, vomiting, palpitations, tachycardia, dry mouth, hypertension [FDA]."], serious: ["Suicidal thoughts [FDA]", "Serotonin syndrome [FDA]", "Raised blood pressure and heart rate [FDA]", "Bleeding risk with antiplatelets and anticoagulants [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyponatraemia, seizures, liver injury, urinary hesitancy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure and heart rate before and during; mood and suicidal thinking [FDA]."],
  local: notBT,
  calc: [
    { drug: "milnacipran", indication_id: "maint", label: "Fibromyalgia — 50 mg twice daily (after titration)", route: "PO", population: ADULT, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }, { form: "tablet", strength: 25, unit: "mg", whole: true }], rounding: "whole tablets", renal: [{ crcl_min: 5, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 12 }, { crcl_min: 0, crcl_max: 4.999, action: "avoid", note: "not recommended in end-stage kidney disease" }], flags: ["Reach this dose by the 1-week titration", "Taper when stopping"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Milnacipran hydrochloride tablets — FDA label (DailyMed)", M3_DM("b66b1850-0d2a-41d6-b0ad-c676166394c7")], NEML_SRC],
  dose: { tagline: "SNRI for fibromyalgia — titrate over a week to 50 mg twice daily.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Milnacipran hydrochloride is a selective serotonin and norepinephrine reuptake inhibitor (SNRI), similar to some drugs used for the treatment of depression and other psychiatric disorders. Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of such drugs in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on milnacipran hydrochloride should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Milnacipran hydrochloride is not approved for use in the treatment of major depressive disorder. Milnacipran hydrochloride is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Fibromyalgia", text: "Titrate over 1 week to 50 mg twice daily; up to 100 mg twice daily.", calc: ["maint"] }],
    child: [{ ind: "Children", text: "Not recommended." }] }
});

FDB_M("milrinone", {
  inn: "Milrinone", atc: "C01CE02", cls: "Phosphodiesterase-3 inhibitor (inodilator)",
  risk: "High-alert medication (IV inotropic medicine) [ISMP]",
  linked: [],
  forms: ["Injection 1 mg/mL (10, 20, 50 mL vials); premixed 200 microgram/mL in 5% dextrose [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits PDE-3 in heart and vascular muscle — raises contractility and dilates vessels [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted mainly by the kidneys; half-life lengthens markedly in kidney impairment [FDA]."],
  ind: { adult: ["Short-term IV treatment of acute decompensated heart failure, with ECG monitoring [FDA]."], paed: ["Not established by the label; used in paediatric cardiac intensive care (low cardiac output after cardiac surgery) [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Loading dose", "50 microgram/kg IV slowly over 10 minutes [FDA]."], ["Maintenance infusion", "0.375–0.75 microgram/kg/min (standard 0.5); total no more than 1.13 mg/kg/day [FDA]."], ["Dilution", "For example 20 mL (20 mg) + 80 mL diluent = 200 microgram/mL in 0.45% or 0.9% saline or 5% dextrose [FDA]."], ["Duration", "Not shown safe or effective beyond 48 hours [FDA]."]],
  paed: { tiers: ["Label: not established [FDA].", "Common ICU practice: 50–75 microgram/kg load, then 0.25–0.75 microgram/kg/min [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing.", calcNote: "Adult loading dose only — infusion rates are per minute and are not calculated here." },
  adj: { renal: "Lower the infusion rate by CrCl (mL/min/1.73 m²): 50 → 0.43; 40 → 0.38; 30 → 0.33; 20 → 0.28; 10 → 0.23; 5 → 0.2 microgram/kg/min [FDA].", hepatic: NEP, pregnancy: NEP, other: "Correct hypokalaemia first; furosemide precipitates in the same line [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension from vasodilation [FDA].", animal: LD, manage: "Reduce or stop the infusion; support blood pressure; no antidote [FDA]." },
  contra: ["Hypersensitivity [FDA]."],
  ae: { common: ["Ventricular ectopy, headache, hypotension [FDA]."], serious: ["Ventricular arrhythmias, including VT and VF (about 12%) [FDA]", "Supraventricular arrhythmias [FDA]", "Thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Worsening outflow obstruction in severe valve or hypertrophic subaortic stenosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Continuous ECG, blood pressure, fluid balance, potassium, kidney function, platelets [FDA]."],
  local: notBT,
  calc: [
    { drug: "milrinone", indication_id: "load", label: "Acute heart failure — loading dose 50 microgram/kg over 10 min", route: "IV", population: ADULT, basis: "mg_per_kg", dose: { value: 0.05, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Once only, slowly over 10 minutes", "Then infusion 0.375–0.75 microgram/kg/min — reduce by CrCl (table in monograph)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Milrinone lactate injection — FDA label (DailyMed)", M3_DM("07dddead-22ed-004c-e063-6294a90a76fc")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "IV inodilator for acute heart failure — 50 microgram/kg load, then 0.375–0.75 microgram/kg/min.",
    cautionTitle: "Use with care",
    caution: "Give only with continuous ECG monitoring and facilities to treat life-threatening ventricular arrhythmias. Reduce the infusion rate in kidney impairment. Not shown safe beyond 48 hours [FDA].",
    adult: [{ ind: "Acute decompensated heart failure", text: "50 microgram/kg over 10 min, then 0.375–0.75 microgram/kg/min.", calc: ["load"] }],
    child: [{ ind: "Children", text: "Not established by label; specialist ICU use only." }] }
});

const MIL30 = { min_age_months: 144, max_age_months: null, min_weight_kg: 30, max_weight_kg: 45 };
const MIL45 = { min_age_months: 144, max_age_months: null, min_weight_kg: 45, max_weight_kg: null };
FDB_M("miltefosine", {
  inn: "Miltefosine", atc: "P01CX04", cls: "Alkylphosphocholine antileishmanial",
  linked: [],
  forms: ["Capsules 50 mg [FDA]."],
  moa: "Not fully known; disrupts parasite membranes and lipid signalling [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long terminal half-life (weeks) — hence 5 months of contraception after treatment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Visceral leishmaniasis (L. donovani) [FDA].", "Cutaneous leishmaniasis (L. braziliensis, guyanensis, panamensis) [FDA].", "Mucosal leishmaniasis (L. braziliensis) [FDA]."], paed: ["12 years and over, 30 kg and over [FDA]."] },
  adult: [["30–44 kg", "50 mg twice daily with food for 28 days [FDA]."], ["45 kg and over", "50 mg three times daily with food for 28 days [FDA]."], ["Before starting", "Verify pregnancy status [FDA]."]],
  paed: { tiers: ["12 years and over, 30–44 kg: 50 mg twice daily for 28 days [FDA].", "12 years and over, 45 kg and over: 50 mg three times daily for 28 days [FDA].", "Under 12 years or under 30 kg: not established [FDA]."], transition: "Same weight bands.", calcNote: "Weight bands, 12 years and over." },
  adj: { renal: "Monitor serum creatinine weekly during and for 4 weeks after [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Monitor transaminases and bilirubin [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated; contraception during and for 5 months after [FDA].", other: "Vomiting and diarrhoea can cause dehydration and kidney injury — keep hydrated [FDA]. May reduce oral contraceptive effect if vomiting occurs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Vomiting, diarrhoea, abdominal pain [FDA].", animal: LD, manage: "Hydrate to protect the kidneys; replace electrolytes [FDA]." },
  contra: ["Pregnancy [FDA]", "Sjögren-Larsson syndrome [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, vomiting, diarrhoea, abdominal pain, headache, dizziness, raised transaminases and creatinine, reduced appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Embryo-fetal toxicity [FDA]", "Reproductive effects (impaired fertility in animals) [FDA]", "Kidney injury, hepatotoxicity [FDA]", "Thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Stevens-Johnson syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum creatinine, liver tests and platelets during treatment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "miltefosine", indication_id: "w30", label: "Leishmaniasis, 30–44 kg — 50 mg twice daily × 28 days", route: "PO", population: MIL30, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 50, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["28 consecutive days, with food", "12 years and over"], sources: ["FDA"] },
    { drug: "miltefosine", indication_id: "w45", label: "Leishmaniasis, 45 kg and over — 50 mg three times daily × 28 days", route: "PO", population: MIL45, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 50, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["28 consecutive days, with food", "12 years and over"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Impavido (miltefosine) capsules — FDA label (DailyMed)", M3_DM("57c515c8-f4af-b876-e063-6394a90af0cc")], NEML_SRC],
  dose: { tagline: "Oral antileishmanial — 50 mg two or three times daily by weight for 28 days; never in pregnancy.",
    boxedTitle: "Embryo-fetal toxicity",
    boxed: "• Pregnancy: IMPAVIDO is contraindicated in pregnancy. Based on animal data, miltefosine may cause fetal harm. • Females of Reproductive Potential: Verify pregnancy status prior to initiating IMPAVIDO. To prevent pregnancy, females of reproductive potential should use effective contraception during treatment and for 5 months after the last dose [FDA].",
    adult: [{ ind: "Leishmaniasis, 30–44 kg", text: "50 mg twice daily for 28 days.", calc: ["w30"] }, { ind: "Leishmaniasis, 45 kg+", text: "50 mg three times daily for 28 days.", calc: ["w45"] }],
    child: [{ ind: "12 years+, 30 kg+", text: "Same weight bands.", calc: ["w30", "w45"] }] }
});

const MINO_CH = { min_age_months: 96, max_age_months: 216, min_weight_kg: null, max_weight_kg: null };
FDB_M("minocycline", {
  inn: "Minocycline", atc: "J01AA08", cls: "Tetracycline antibacterial",
  linked: [],
  forms: ["Capsules and tablets 50, 75, 100 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Extended-release tablets/capsules for acne or rosacea (separate dosing) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds the 30S ribosomal subunit and blocks protein synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Well absorbed with or without food; lipophilic [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Infections due to susceptible organisms: rickettsial infections, respiratory and urinary infections, chlamydia, syphilis and gonorrhoea when penicillin is unsuitable, meningococcal carriage, acne (adjunct), Mycobacterium marinum [FDA]."], paed: ["Over 8 years only, unless benefit outweighs tooth-discolouration risk [FDA]."] },
  adult: [["Usual", "200 mg first dose, then 100 mg every 12 hours [FDA]."], ["Alternative", "100–200 mg first, then 50 mg four times daily [FDA]."], ["Meningococcal carriage", "100 mg every 12 hours for 5 days [FDA]."], ["Chlamydia / Ureaplasma", "100 mg every 12 hours for at least 7 days [FDA]."], ["M. marinum", "100 mg every 12 hours for 6–8 weeks [FDA]."], ["Administration", "Swallow whole with plenty of water [FDA]."]],
  paed: { tiers: ["Over 8 years: 4 mg/kg first dose, then 2 mg/kg every 12 hours, not more than the adult dose [FDA].", "8 years and under: avoid unless benefit outweighs the risk [FDA]."], transition: "Adult dosing at adult weight.", calcNote: "mg/kg over 8 years, capped at adult doses." },
  adj: { renal: "Total no more than 200 mg in 24 hours; monitor BUN and creatinine [FDA].", hepatic: "Caution — hepatotoxicity reported [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Avoid — tooth discolouration and bone effects in the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Separate from antacids, iron, calcium and zinc [UNVERIFIED-KNOWLEDGE]. Dizziness/vertigo — caution driving [FDA]." },
  tox: { human: "Dizziness, nausea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; not removed well by dialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any tetracycline [FDA]."],
  ae: { common: ["Dizziness, vertigo, nausea, diarrhoea, photosensitivity [FDA]."], serious: ["Permanent tooth discolouration in children under 8 [FDA]", "C. difficile diarrhoea [FDA]", "Hepatotoxicity and autoimmune hepatitis, lupus-like syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "DRESS and other hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Intracranial hypertension [FDA] [UNVERIFIED-KNOWLEDGE]", "Skin, nail and tissue hyperpigmentation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Long courses: blood counts, kidney and liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "minocycline", indication_id: "load_adult", label: "Adult — first dose 200 mg", route: "PO", population: ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 100, unit: "mg", whole: true }], rounding: "whole capsules", renal: [], flags: ["Then 100 mg every 12 hours"], sources: ["FDA"] },
    { drug: "minocycline", indication_id: "maint_adult", label: "Adult — 100 mg every 12 hours", route: "PO", population: ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 100, unit: "mg", whole: true }], rounding: "whole capsules", renal: [], renal_note: "Kidney impairment: no more than 200 mg in 24 hours; monitor BUN and creatinine [FDA].", flags: ["After a 200 mg first dose"], sources: ["FDA"] },
    { drug: "minocycline", indication_id: "load_child", label: "Child over 8 years — first dose 4 mg/kg (max 200 mg)", route: "PO", population: MINO_CH, basis: "mg_per_kg", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "capsule", strength: 50, unit: "mg" }], rounding: "nearest capsule strength", renal: [], flags: ["Then 2 mg/kg every 12 hours"], sources: ["FDA"] },
    { drug: "minocycline", indication_id: "maint_child", label: "Child over 8 years — 2 mg/kg every 12 hours (max 100 mg)", route: "PO", population: MINO_CH, basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: { max_single: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "capsule", strength: 50, unit: "mg" }], rounding: "nearest capsule strength", renal: [], flags: ["Not more than the adult dose"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Minocycline hydrochloride capsules — FDA label (DailyMed)", M3_DM("0760232b-21a6-2b13-e063-6394a90a22c1")], NEML_SRC],
  dose: { tagline: "Tetracycline — 200 mg first, then 100 mg every 12 hours; children only over 8 years.",
    cautionTitle: "Use with care",
    caution: "Avoid in children 8 years and under and in pregnancy — permanent tooth discolouration. Causes dizziness and vertigo; can cause liver injury and lupus-like reactions on long courses [FDA].",
    adult: [{ ind: "Susceptible infections", text: "200 mg first, then 100 mg every 12 hours.", calc: ["load_adult", "maint_adult"] }],
    child: [{ ind: "Over 8 years", text: "4 mg/kg first (max 200 mg), then 2 mg/kg every 12 hours (max 100 mg).", calc: ["load_child", "maint_child"] }] }
});

const MINOX_AD = { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const MINOX_CH = { min_age_months: null, max_age_months: 144, min_weight_kg: null, max_weight_kg: null };
FDB_M("minoxidil", {
  inn: "Minoxidil", atc: "C02DC01", cls: "Direct arteriolar vasodilator (K-ATP opener)",
  linked: [],
  forms: ["Tablets 2.5, 10 mg (hypertension) [FDA].", "Topical solution 2% and 5%, foam 5% (hair loss; ATC D11AX01) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Opens potassium channels in arteriolar smooth muscle, causing direct vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Oral: full effect of a dose takes at least 3 days [FDA]."],
  ind: { adult: ["Oral: severe symptomatic hypertension, or hypertension with target-organ damage, not controlled on maximum doses of a diuretic plus two other antihypertensives [FDA].", "Topical: androgenetic hair loss (over-the-counter) [UNVERIFIED-KNOWLEDGE]."], paed: ["Oral: same, limited experience — careful titration [FDA]."] },
  adult: [["Over 12 years", "Start 5 mg once daily; increase to 10, 20, then 40 mg daily (single or divided) at least 3 days apart; usual 10–40 mg/day; maximum 100 mg/day [FDA]."], ["Dose frequency", "Once daily if supine diastolic falls less than 30 mmHg; otherwise two equal doses [FDA]."], ["Always with", "A beta-blocker (or other sympathetic suppressant) and a diuretic, often a loop diuretic [FDA]."], ["Topical hair loss", "Not for oral use for hair loss — not an approved indication [FDA]."]],
  paed: { tiers: ["Under 12 years: start 0.2 mg/kg once daily; increase by 50–100% steps; usual 0.25–1 mg/kg/day; maximum 50 mg/day [FDA].", "12 years and over: adult dosing [FDA]."], transition: "Adult dosing from 12 years.", calcNote: "Starting doses only." },
  adj: { renal: "Dialysis and kidney failure patients may need smaller doses; close supervision [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Malignant hypertension or guanethidine: start in hospital [FDA]." },
  tox: { human: "Hypotension, tachycardia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "IV saline; avoid adrenaline-type pressors that worsen tachycardia; phenylephrine if needed [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Phaeochromocytoma [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Salt and water retention, oedema, tachycardia, hypertrichosis (in about 80%) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pericardial effusion and tamponade [FDA]", "Worsening angina [FDA]", "Heart failure from fluid retention [FDA]", "ECG T-wave changes [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight, fluid and electrolytes, heart rate, blood pressure; watch for pericardial effusion [FDA]."],
  local: notBT,
  calc: [
    { drug: "minoxidil", indication_id: "start_adult", label: "Hypertension, over 12 years — start 5 mg once daily", route: "PO", population: MINOX_AD, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_daily: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tablet", strength: 2.5, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["With a beta-blocker and a diuretic", "Titrate 10 → 20 → 40 mg/day, at least 3 days apart"], sources: ["FDA"] },
    { drug: "minoxidil", indication_id: "start_child", label: "Hypertension, under 12 years — start 0.2 mg/kg once daily", route: "PO", population: MINOX_CH, basis: "mg_per_kg", dose: { value: 0.2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_daily: 50, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tablet", strength: 2.5, unit: "mg" }], rounding: "nearest half tablet if practical", renal: [], flags: ["With a beta-blocker and a diuretic", "Increase in 50–100% steps; usual 0.25–1 mg/kg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Minoxidil tablets — FDA label (DailyMed)", M3_DM("02d7399f-94cc-f718-f214-587301edd138")], NEML_SRC],
  dose: { tagline: "Reserve vasodilator for resistant hypertension — always with a beta-blocker and a diuretic.",
    boxedTitle: "Warning",
    boxed: "Minoxidil tablets contain the powerful antihypertensive agent, minoxidil, which may produce serious adverse effects. It can cause pericardial effusion, occasionally progressing to tamponade, and angina pectoris may be exacerbated. Minoxidil should be reserved for hypertensive patients who do not respond adequately to maximum therapeutic doses of a diuretic and two other antihypertensive agents. In experimental animals, minoxidil caused several kinds of myocardial lesions as well as other adverse cardiac effects. Minoxidil must be administered under close supervision, usually concomitantly with therapeutic doses of a beta-adrenergic blocking agent to prevent tachycardia and increased myocardial workload. It must also usually be given with a diuretic, frequently one acting in the ascending limb of the loop of Henle, to prevent serious fluid accumulation. Patients with malignant hypertension and those already receiving guanethidine should be hospitalized when minoxidil is first administered so that they can be monitored to avoid too rapid, or large orthostatic, decreases in blood pressure [FDA].",
    adult: [{ ind: "Resistant hypertension", text: "5 mg once daily; usual 10–40 mg/day; max 100 mg/day.", calc: ["start_adult"] }],
    child: [{ ind: "Under 12 years", text: "0.2 mg/kg once daily; usual 0.25–1 mg/kg/day; max 50 mg/day.", calc: ["start_child"] }, { ind: "12 years and over", text: "Adult dosing.", calc: ["start_adult"] }] }
});

const MIRA_CH = { min_age_months: 36, max_age_months: 216, min_weight_kg: 35, max_weight_kg: null };
FDB_M("mirabegron", {
  inn: "Mirabegron", atc: "G04BD12", cls: "Beta-3 adrenergic agonist",
  linked: [],
  forms: ["Extended-release tablets 25, 50 mg [FDA].", "Granules for extended-release oral suspension 8 mg/mL (Myrbetriq Granules) — not interchangeable mg for mg with tablets [FDA]."],
  moa: "Relaxes the detrusor via beta-3 receptors, increasing bladder capacity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Moderate CYP2D6 inhibitor [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Overactive bladder (urge incontinence, urgency, frequency), alone or with solifenacin [FDA]."], paed: ["Neurogenic detrusor overactivity, 3 years and over [FDA]."] },
  adult: [["Overactive bladder", "25 mg once daily (alone or with solifenacin 5 mg); may increase to 50 mg after 4–8 weeks [FDA]."], ["Kidney (eGFR)", "30–89: 25 mg, max 50 mg; 15–29: 25 mg, max 25 mg; under 15 or dialysis: not recommended [FDA]."], ["Liver (Child-Pugh)", "A: 25 mg, max 50 mg; B: 25 mg, max 25 mg; C: not recommended [FDA]."], ["Administration", "Swallow whole; do not chew, divide or crush [FDA]."]],
  paed: { tiers: ["NDO, 35 kg and over: tablets 25 mg once daily, up to 50 mg after 4–8 weeks — or granules 6 mL (48 mg), up to 10 mL (80 mg) [FDA].", "NDO, 11 to under 22 kg (granules): start 3 mL (24 mg), max 6 mL (48 mg) [FDA].", "NDO, 22 to under 35 kg (granules): start 4 mL (32 mg), max 8 mL (64 mg) [FDA]."], transition: "Tablets from 35 kg.", calcNote: "Tablet dose from 35 kg; granule doses by weight band (text)." },
  adj: { renal: "eGFR 15–29: maximum 25 mg daily; under 15 or dialysis: not recommended [FDA].", hepatic: "Child-Pugh B: maximum 25 mg; C: not recommended [FDA].", pregnancy: NEP, other: "Raises digoxin levels (start lowest digoxin dose); raises other CYP2D6 substrates (metoprolol, desipramine) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Palpitations and raised pulse at 400 mg [FDA].", animal: LD, manage: "Supportive; monitor pulse, BP and ECG [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to mirabegron or ingredients [FDA]."],
  ae: { common: ["Hypertension, nasopharyngitis, urinary tract infection, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Raised blood pressure — not for severe uncontrolled hypertension [FDA] [UNVERIFIED-KNOWLEDGE]", "Urinary retention, especially with outlet obstruction or antimuscarinics [FDA]", "Angioedema of face, lips, tongue or larynx [FDA]"] },
  monitor: ["Blood pressure periodically, more often in children [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "mirabegron", indication_id: "oab", label: "Overactive bladder — 25 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "ER tablet", strength: 25, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "not recommended at eGFR under 15 or on dialysis (label uses eGFR)" }], renal_note: "eGFR 15–29: maximum 25 mg daily [FDA].", flags: ["May increase to 50 mg after 4–8 weeks", "Swallow whole"], sources: ["FDA"] },
    { drug: "mirabegron", indication_id: "ndo35", label: "Neurogenic detrusor overactivity, 3 years+ and 35 kg+ — 25 mg once daily", route: "PO", population: MIRA_CH, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "ER tablet", strength: 25, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "not recommended at eGFR under 15 or on dialysis (label uses eGFR)" }], flags: ["Tablets; take with food", "May increase to 50 mg after 4–8 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Myrbetriq (mirabegron) ER tablets and granules — FDA label (DailyMed)", M3_DM("ba9e9e15-e666-4c56-9271-2e24739cfa2d")], NEML_SRC],
  dose: { tagline: "Beta-3 agonist for overactive bladder — 25 mg once daily, up to 50 mg.",
    adult: [{ ind: "Overactive bladder", text: "25 mg once daily; up to 50 mg after 4–8 weeks.", calc: ["oab"] }],
    child: [{ ind: "NDO, 35 kg and over", text: "25 mg once daily (tablet); up to 50 mg.", calc: ["ndo35"] }, { ind: "NDO, under 35 kg", text: "Granules by weight: 11–21 kg 24–48 mg; 22–34 kg 32–64 mg once daily." }] }
});

FDB_M("mirikizumab", {
  inn: "Mirikizumab", atc: "L04AC24", cls: "Interleukin-23 (p19) antagonist monoclonal antibody",
  linked: [],
  forms: ["IV vial 300 mg/15 mL; prefilled pens/syringes 100 mg/mL and 200 mg/2 mL for SC use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds the p19 subunit of IL-23, blocking IL-23 signalling [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Moderately to severely active ulcerative colitis [FDA].", "Moderately to severely active Crohn's disease [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["UC induction", "300 mg IV over at least 30 minutes at weeks 0, 4 and 8 [FDA]."], ["UC maintenance", "200 mg SC at week 12, then every 4 weeks [FDA]."], ["Crohn's induction", "900 mg IV over at least 90 minutes at weeks 0, 4 and 8 [FDA]."], ["Crohn's maintenance", "300 mg SC (100 mg + 200 mg) at week 12, then every 4 weeks [FDA]."], ["Before starting", "Test for TB; check liver enzymes and bilirubin; complete vaccinations [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults only — fixed doses." },
  adj: { renal: NEP, hepatic: "Stop if drug-induced liver injury is suspected [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid live vaccines [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of serious hypersensitivity to mirikizumab or excipients [FDA]."],
  ae: { common: ["Upper respiratory infection, arthralgia, injection-site reactions, headache, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis [FDA]", "Serious infections; tuberculosis [FDA]", "Hepatotoxicity [FDA]"] },
  monitor: ["Liver enzymes and bilirubin at baseline and up to 24 weeks of induction, then as needed; signs of infection [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "mirikizumab", indication_id: "uc_ind", label: "Ulcerative colitis induction — 300 mg IV at weeks 0, 4, 8", route: "IV", population: ADULT, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 20, unit: "mg/mL" }], rounding: "1 vial (300 mg/15 mL)", renal: [], flags: ["Three doses only", "Then 200 mg SC every 4 weeks from week 12"], sources: ["FDA"] },
    { drug: "mirikizumab", indication_id: "cd_ind", label: "Crohn's disease induction — 900 mg IV at weeks 0, 4, 8", route: "IV", population: ADULT, basis: "fixed", dose: { value: 900, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 20, unit: "mg/mL" }], rounding: "3 vials (300 mg/15 mL)", renal: [], flags: ["Three doses only, over at least 90 min", "Then 300 mg SC every 4 weeks from week 12"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Omvoh (mirikizumab-mrkz) — FDA label (DailyMed)", M3_DM("472cbe04-263e-433d-9a0f-58c1b50b715a")], NEML_SRC],
  dose: { tagline: "IL-23 blocker for UC and Crohn's — IV induction at weeks 0, 4, 8, then SC every 4 weeks.",
    adult: [{ ind: "Ulcerative colitis", text: "300 mg IV at weeks 0, 4, 8; then 200 mg SC every 4 weeks.", calc: ["uc_ind"] }, { ind: "Crohn's disease", text: "900 mg IV at weeks 0, 4, 8; then 300 mg SC every 4 weeks.", calc: ["cd_ind"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mirvetuximab-soravtansine", {
  inn: "Mirvetuximab soravtansine", atc: "L01FX26", cls: "Folate receptor-alpha antibody–drug conjugate (maytansinoid DM4)",
  risk: ONC,
  linked: [],
  forms: ["Injection 100 mg/20 mL (5 mg/mL) single-dose vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds folate receptor-alpha on tumour cells and releases DM4, a microtubule inhibitor [FDA].",
  pk: [NEP],
  ind: { adult: ["FRα-positive, platinum-resistant epithelial ovarian, fallopian tube or primary peritoneal cancer after 1–3 prior regimens [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "6 mg/kg of adjusted ideal body weight (AIBW) IV every 3 weeks until progression or unacceptable toxicity [FDA]."], ["AIBW", "AIBW = IBW + 0.4 × (actual weight − IBW); female IBW (kg) = 0.9 × height (cm) − 92 [FDA]."], ["Dilute", "In 5% dextrose only — incompatible with normal saline [FDA]."], ["Premedicate", "Corticosteroid, antihistamine, antipyretic, antiemetic; ophthalmic steroid drops and lubricating eye drops [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults only.", calcNote: "No calculator — dosing uses adjusted ideal body weight, which this calculator does not compute." },
  adj: { renal: NEP, hepatic: "Avoid in moderate or severe impairment (bilirubin over 1.5 × ULN) [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Ocular toxicity — eye exam before and every other cycle for the first 8 cycles [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Raised AST/ALT, fatigue, blurred vision, nausea, diarrhoea, abdominal pain, keratopathy, peripheral neuropathy, low lymphocytes, neutrophils and magnesium [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ocular toxicity (keratopathy, visual impairment, uveitis) [FDA]", "Pneumonitis [FDA]", "Peripheral neuropathy [FDA]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Ophthalmic exam including visual acuity and slit lamp; respiratory symptoms; neuropathy; liver tests [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Elahere (mirvetuximab soravtansine-gynx) — FDA label (DailyMed)", M3_DM("00c424b5-6ccd-48ab-9e88-1986451120e2")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "FRα antibody–drug conjugate for platinum-resistant ovarian cancer — 6 mg/kg AIBW every 3 weeks; eye care essential.",
    boxedTitle: "Ocular toxicity",
    boxed: "ELAHERE can cause severe ocular toxicities, including visual impairment, keratopathy, dry eye, photophobia, eye pain, and uveitis. Conduct an ophthalmic exam including visual acuity and slit lamp exam prior to initiation of ELAHERE, every other cycle for the first 8 cycles, and as clinically indicated. Administer prophylactic artificial tears and ophthalmic topical steroids. Withhold ELAHERE for ocular toxicities until improvement and resume at the same or reduced dose. Discontinue ELAHERE for Grade 4 ocular toxicities [FDA].",
    adult: [{ ind: "Platinum-resistant ovarian cancer (FRα+)", text: "6 mg/kg adjusted ideal body weight IV every 3 weeks, in 5% dextrose." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mitapivat", {
  inn: "Mitapivat", atc: "B06AX04", cls: "Pyruvate kinase activator",
  linked: [],
  forms: ["Tablets 5, 20, 50 mg (Pyrukynd) [FDA].", "Tablets 100 mg (Aqvesme) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Allosterically activates red-cell pyruvate kinase, raising ATP and lowering 2,3-DPG [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Metabolised by CYP3A [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Aqvesme: anaemia in adults with alpha- or beta-thalassaemia [FDA].", "Pyrukynd: haemolytic anaemia in adults with pyruvate kinase deficiency [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Thalassaemia (Aqvesme)", "100 mg twice daily, long term; stop if no benefit [FDA]."], ["PK deficiency (Pyrukynd)", "5 mg twice daily for 4 weeks; then 20 mg twice daily if Hb below normal or recent transfusion; then 50 mg twice daily after another 4 weeks if still needed (maximum 50 mg twice daily). Stop if no benefit by 24 weeks [FDA]."], ["Stopping", "Pyrukynd: taper to avoid acute haemolysis; Aqvesme: taper not needed [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Missed dose", "Take if 4 hours late or less; otherwise skip [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adult starting doses." },
  adj: { renal: NEP, hepatic: "Aqvesme: avoid in cirrhosis; stop if liver injury is suspected [FDA].", pregnancy: NEP, other: "Avoid strong CYP3A inhibitors and inducers [FDA] [UNVERIFIED-KNOWLEDGE]. Aqvesme only through a restricted (REMS) programme in the US [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, insomnia (thalassaemia) [FDA].", "Oestrone/oestradiol changes, back pain, arthralgia (PK deficiency) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatocellular injury (Aqvesme boxed warning) [FDA]", "Acute haemolysis on abrupt stopping [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Aqvesme: ALT, AST, ALP and fractionated bilirubin at baseline and every 4 weeks for 24 weeks [FDA]. Pyrukynd: Hb and transfusion need before each dose step [FDA]."],
  local: notBT,
  calc: [
    { drug: "mitapivat", indication_id: "thal", label: "Thalassaemia (Aqvesme) — 100 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Liver tests every 4 weeks for 24 weeks"], sources: ["FDA"] },
    { drug: "mitapivat", indication_id: "pkd", label: "PK deficiency (Pyrukynd) — start 5 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: { max_single: 50, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tablet", strength: 5, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Step up every 4 weeks: 20 mg, then 50 mg twice daily, by Hb", "Taper when stopping"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Aqvesme (mitapivat) tablets — FDA label (DailyMed)", M3_DM("1d4e2654-1636-0d01-e063-6394a90af303")], ["FDA", "Pyrukynd (mitapivat) tablets — FDA label (DailyMed)", M3_DM("4ccee896-e313-4c6c-9674-b4746ada0a90")], NEML_SRC],
  dose: { tagline: "Pyruvate kinase activator — 100 mg twice daily for thalassaemia; 5→50 mg twice daily for PK deficiency.",
    boxedTitle: "Hepatocellular injury (Aqvesme)",
    boxed: "AQVESME can cause serious hepatocellular injury. Measure liver laboratory tests (ALT, AST, alkaline phosphatase, and total bilirubin with fractionation) at baseline and every 4 weeks for 24 weeks and then as clinically indicated. Avoid use of AQVESME in patients with cirrhosis. Discontinue AQVESME if hepatic injury is suspected. Because of the risk of hepatocellular injury, AQVESME is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the AQVESME REMS [FDA].",
    adult: [{ ind: "Thalassaemia (Aqvesme)", text: "100 mg twice daily.", calc: ["thal"] }, { ind: "PK deficiency (Pyrukynd)", text: "5 mg twice daily, stepping to 20 then 50 mg twice daily by Hb.", calc: ["pkd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mitomycin", {
  inn: "Mitomycin", atc: "L01DC03", cls: "Antitumour antibiotic (alkylating)",
  risk: ONC,
  linked: [],
  forms: ["Powder for injection 5, 20, 40 mg vials [FDA] [UNVERIFIED-KNOWLEDGE].", "Pyelocalyceal gel (Jelmyto), intravesical solution and ophthalmic kit (Mitosol) — separate products [UNVERIFIED-KNOWLEDGE]."],
  moa: "Cross-links DNA after activation, inhibiting DNA synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Disseminated adenocarcinoma of the stomach or pancreas, with other agents, when other treatment has failed [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["IV", "20 mg/m² IV as a single dose every 6–8 weeks after full blood recovery [FDA]."], ["Dose by prior nadir", "WBC over 4,000 and platelets over 100,000: 100%; 3,000–3,999 / 75,000–99,999: 100%; 2,000–2,999 / 25,000–74,999: 70%; under 2,000 / under 25,000: 50% [FDA]."], ["Before repeat", "WBC at least 4,000/mm³ and platelets at least 100,000/mm³ [FDA]."], ["Note", "Doses over 20 mg/m² are more toxic and no more effective [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing.", calcNote: "Adults — mg/m²." },
  adj: { renal: "Avoid if serum creatinine over 1.7 mg/dL [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Extravasation causes cellulitis, ulceration and slough — IV only [FDA]." },
  tox: { human: "Severe myelosuppression, fever, nausea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; no antidote [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]", "Thrombocytopenia, coagulation disorder or increased bleeding tendency [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Myelosuppression, nausea, vomiting, anorexia, fever, alopecia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cumulative bone marrow suppression [FDA]", "Haemolytic uraemic syndrome, mostly at cumulative doses of 60 mg or more [FDA]", "Pulmonary toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Extravasation necrosis [FDA]"] },
  monitor: ["Blood counts during and for at least 8 weeks after; kidney function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "mitomycin", indication_id: "iv20", label: "Gastric/pancreatic cancer — 20 mg/m² IV once, every 6–8 weeks", route: "IV", population: ADULT, basis: "mg_per_m2", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 0.5, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Single dose; repeat every 6–8 weeks after blood recovery", "Reduce by prior nadir (70% or 50%)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Mitomycin for injection — FDA label (DailyMed)", M3_DM("0171a1c8-c474-4ec1-a11d-6b93a21ca460")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Antitumour antibiotic — 20 mg/m² IV every 6–8 weeks; cumulative marrow suppression and HUS.",
    boxedTitle: "Warning",
    boxed: "Mitomycin should be administered under the supervision of a qualified physician experienced in the use of cancer chemotherapeutic agents. Appropriate management of therapy and complications is possible only when adequate diagnostic and treatment facilities are readily available. Bone marrow suppression, notably thrombocytopenia and leukopenia, which may contribute to overwhelming infections in an already compromised patient, is the most common and severe of the toxic effects of mitomycin. Hemolytic Uremic Syndrome (HUS) a serious complication of chemotherapy, consisting primarily of microangiopathic hemolytic anemia, thrombocytopenia, and irreversible renal failure has been reported in patients receiving systemic mitomycin. The syndrome may occur at any time during systemic therapy with mitomycin as a single agent or in combination with other cytotoxic drugs, however, most cases occur at doses ≥60 mg of mitomycin. Blood product transfusion may exacerbate the symptoms associated with this syndrome. The incidence of the syndrome has not been defined [FDA].",
    adult: [{ ind: "Gastric or pancreatic adenocarcinoma", text: "20 mg/m² IV once every 6–8 weeks.", calc: ["iv20"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mitotane", {
  inn: "Mitotane", atc: "L01XX23", cls: "Adrenolytic (adrenal cytotoxic)",
  risk: ONC,
  linked: [],
  forms: ["Tablets 500 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Damages adrenal cortical mitochondria and blocks steroid synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Lipophilic; accumulates in fat; very long elimination — levels persist for months after stopping [FDA]."],
  ind: { adult: ["Inoperable, functional or non-functional adrenocortical carcinoma [FDA]."], paed: ["Effectiveness not established; may harm neuro-psychological development [FDA]."] },
  adult: [["Start", "2–6 g daily in 3–4 divided doses with food [FDA]."], ["Target", "Raise by tolerance to a plasma level of 14–20 mg/L, usually reached in 3–5 months; check levels every 2 weeks at first, then monthly [FDA]."], ["High levels", "Over 20 mg/L without toxicity: consider reducing by 50–75% [FDA]."], ["Handling", "Hazardous drug — caregivers wear gloves [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "No calculator — titrated to plasma level." },
  adj: { renal: NEP, hepatic: "Hepatotoxicity — monitor liver tests [FDA].", pregnancy: "Can harm the fetus; contraception during and after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Adrenal insufficiency is expected — give glucocorticoid replacement; strong CYP3A4 inducer [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Levels over 20 mg/L: sedation, lethargy, vertigo, weakness, gait disturbance [FDA].", animal: LD, manage: "Withhold; long elimination — supportive [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Anorexia, nausea, vomiting, diarrhoea, lethargy, somnolence, dizziness, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Adrenal insufficiency and adrenal crisis [FDA]", "CNS toxicity [FDA]", "Ovarian macrocysts in premenopausal women [FDA]", "Hepatotoxicity [FDA]", "Haematological toxicity; prolonged bleeding time [FDA]"] },
  monitor: ["Mitotane plasma levels; cortisol replacement needs; liver tests; blood counts; neurological status; pelvic ultrasound in premenopausal women [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Lysodren (mitotane) tablets — FDA label (DailyMed)", M3_DM("4046a224-8832-daa2-e063-6294a90a11d7")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Adrenal cytotoxic for adrenocortical carcinoma — 2–6 g/day titrated to 14–20 mg/L.",
    boxedTitle: "Adrenal crisis in the setting of shock, severe trauma or infection",
    boxed: "Patients treated with LYSODREN are at increased risk for developing adrenal crisis in the setting of shock, severe trauma or infection that may lead to death. If shock, severe trauma or infection occurs or develops, temporarily discontinue LYSODREN and administer exogenous steroids. Monitor patients closely for infections and instruct patients to contact their physician immediately if injury, infection, or any other concomitant illness occurs [FDA].",
    adult: [{ ind: "Adrenocortical carcinoma", text: "2–6 g/day in 3–4 doses with food; titrate to plasma 14–20 mg/L." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mitoxantrone", {
  inn: "Mitoxantrone", atc: "L01DB07", cls: "Anthracenedione (topoisomerase II inhibitor)",
  risk: ONC,
  linked: [],
  forms: ["Injection concentrate 2 mg/mL (10, 12.5, 15 mL vials) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Intercalates DNA and inhibits topoisomerase II [UNVERIFIED-KNOWLEDGE].",
  pk: ["Cleared mainly by the liver; reduced in hepatic impairment [FDA]."],
  ind: { adult: ["Secondary progressive, progressive relapsing or worsening relapsing-remitting multiple sclerosis [FDA].", "Pain from advanced hormone-refractory prostate cancer, with corticosteroids [FDA].", "Initial therapy of acute non-lymphocytic leukaemia (ANLL/AML) in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Multiple sclerosis", "12 mg/m² IV over 5–15 minutes every 3 months; lifetime cumulative dose no more than 140 mg/m²; LVEF before every dose; not if LVEF under 50% [FDA]."], ["Prostate cancer", "12–14 mg/m² IV every 21 days, with corticosteroids [FDA]."], ["AML induction", "12 mg/m² daily on days 1–3 with cytarabine 100 mg/m²/day continuous infusion for 7 days [FDA]."], ["Administration", "Slowly into a freely running IV infusion — never SC, IM or intra-arterial [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adults — mg/m²." },
  adj: { renal: NEP, hepatic: "MS: do not use with abnormal liver tests; cancer: reduce dose in hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "MS: pregnancy test before each dose; can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Colours urine blue-green for 24 hours [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bolus 140–180 mg/m² caused fatal leukopenia and infection [FDA].", animal: LD, manage: "No antidote; supportive, watch marrow and heart [FDA]." },
  contra: ["Hypersensitivity [FDA]."],
  ae: { common: ["Nausea, alopecia, menstrual disorders, urinary tract infection, upper respiratory infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiotoxicity and heart failure, may be fatal and appear years later [FDA]", "Secondary AML [FDA]", "Severe myelosuppression [FDA]", "Extravasation tissue damage [FDA]"] },
  monitor: ["LVEF before each dose (MS) and yearly after stopping; blood counts before each course; liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "mitoxantrone", indication_id: "ms", label: "Multiple sclerosis — 12 mg/m² IV every 3 months", route: "IV", population: ADULT, basis: "mg_per_m2", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Every 3 months; lifetime total no more than 140 mg/m²", "LVEF before every dose; not if under 50%"], sources: ["FDA"] },
    { drug: "mitoxantrone", indication_id: "prostate", label: "Prostate cancer — 12–14 mg/m² IV every 21 days", route: "IV", population: ADULT, basis: "mg_per_m2", dose: { value: 12, value_max: 14, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["With corticosteroids"], sources: ["FDA"] },
    { drug: "mitoxantrone", indication_id: "aml", label: "AML induction — 12 mg/m² daily, days 1–3", route: "IV", population: ADULT, basis: "mg_per_m2", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["3 days only, with cytarabine 100 mg/m²/day for 7 days"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Mitoxantrone injection (concentrate) — FDA label (DailyMed)", M3_DM("1634528a-30c5-4309-acc8-4c0293ae14ae")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anthracenedione for MS, prostate cancer and AML — cardiotoxic; lifetime MS limit 140 mg/m².",
    boxedTitle: "Warning",
    boxed: "Mitoxantrone injection (concentrate) should be administered under the supervision of a physician experienced in the use of cytotoxic chemotherapy agents. Mitoxantrone injection (concentrate) should be given slowly into a freely flowing intravenous infusion. It must never be given subcutaneously, intramuscularly, or intra-arterially. Severe local tissue damage may occur if there is extravasation during administration. NOT FOR INTRATHECAL USE. Severe injury with permanent sequelae can result from intrathecal administration. Except for the treatment of acute nonlymphocytic leukemia, mitoxantrone injection (concentrate) therapy generally should not be given to patients with baseline neutrophil counts of less than 1,500 cells/mm 3. In order to monitor the occurrence of bone marrow suppression, primarily neutropenia, which may be severe and result in infection, it is recommended that frequent peripheral blood cell counts be performed on all patients receiving mitoxantrone injection (concentrate). Cardiotoxicity Congestive heart failure (CHF), potentially fatal, may occur either during therapy with mitoxantrone injection (concentrate) or months to years after termination of therapy. Cardiotoxicity risk increases with cumulative mitoxantrone injection (concentrate) dose and may occur whether or not cardiac risk factors are present. Presence or history of cardiovascular disease, radiotherapy to the mediastinal/pericardial area, previous therapy with other anthracyclines or anthracenediones, or use of other cardiotoxic drugs may increase this risk [FDA].",
    adult: [{ ind: "Multiple sclerosis", text: "12 mg/m² IV every 3 months (lifetime max 140 mg/m²).", calc: ["ms"] }, { ind: "Prostate cancer", text: "12–14 mg/m² IV every 21 days.", calc: ["prostate"] }, { ind: "AML induction", text: "12 mg/m² daily × 3 days with cytarabine.", calc: ["aml"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("modafinil", {
  inn: "Modafinil", atc: "N06BA07", cls: "Wakefulness-promoting agent",
  linked: [],
  forms: ["Tablets 100, 200 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Not fully known; inhibits dopamine reuptake [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism; induces CYP3A4 — lowers hormonal contraceptive levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Excessive sleepiness from narcolepsy, obstructive sleep apnoea (with CPAP where indicated), or shift work disorder [FDA]."], paed: ["Not approved; serious rashes reported in children [FDA]."] },
  adult: [["Narcolepsy / OSA", "200 mg once in the morning; 400 mg/day tolerated but no clear added benefit [FDA]."], ["Shift work disorder", "200 mg about 1 hour before the shift [FDA]."], ["Severe hepatic impairment", "Half the usual dose [FDA]."], ["Older adults", "Consider a lower dose [FDA]."]],
  paed: { tiers: ["Not approved; serious skin reactions reported [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults only." },
  adj: { renal: NEP, hepatic: "Severe: half the dose [FDA].", pregnancy: NEP, other: "Use non-hormonal or additional contraception during and for 1 month after [FDA] [UNVERIFIED-KNOWLEDGE]. Controlled substance (Schedule IV in the US) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "1,000–1,600 mg/day in trials: insomnia, restlessness, anxiety, tachycardia, hypertension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; cardiac monitoring [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to modafinil or armodafinil [FDA]."],
  ae: { common: ["Headache, nausea, nervousness, rhinitis, back pain, diarrhoea, anxiety, insomnia, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious rash including SJS [FDA]", "Angioedema and anaphylaxis [FDA]", "Multi-organ hypersensitivity (DRESS) [FDA]", "Psychiatric symptoms (mania, psychosis, suicidal thoughts) [FDA]", "Persistent sleepiness — not a substitute for sleep [FDA]"] },
  monitor: ["Sleepiness, mood, blood pressure in cardiovascular disease [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "modafinil", indication_id: "std", label: "Narcolepsy, OSA or shift work — 200 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }, { form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["Morning (or 1 h before the shift)", "Severe liver impairment: 100 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Provigil (modafinil) tablets — FDA label (DailyMed)", M3_DM("0391f182-1958-9fef-a944-53b229ce99e7")], NEML_SRC],
  dose: { tagline: "Wakefulness agent for narcolepsy, OSA and shift work — 200 mg once daily.",
    cautionTitle: "Use with care",
    caution: "Stop at the first sign of rash — serious skin reactions including Stevens-Johnson syndrome have occurred, mostly in children. Lowers hormonal contraceptive effect [FDA].",
    adult: [{ ind: "Narcolepsy / OSA / shift work", text: "200 mg once daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not approved." }] }
});

FDB_M("moexipril", {
  inn: "Moexipril", atc: "C09AA13", cls: "ACE inhibitor",
  linked: [],
  forms: ["Tablets 7.5, 15 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Prodrug of moexiprilat; inhibits angiotensin-converting enzyme [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take 1 hour before meals — food reduces absorption [FDA]."],
  ind: { adult: ["Hypertension, alone or with thiazide diuretics [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hypertension", "7.5 mg once daily 1 hour before a meal; usual 7.5–30 mg daily in 1–2 doses; doses over 60 mg/day not studied [FDA]."], ["On a diuretic", "Stop the diuretic 2–3 days before if possible; otherwise start 3.75 mg under supervision [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing at 18 years.", calcNote: "Adults only." },
  adj: { renal: "CrCl 40 mL/min/1.73 m² or less: start 3.75 mg once daily; maximum 15 mg daily [FDA].", hepatic: NEP, pregnancy: "Stop as soon as pregnancy is detected — fetal toxicity [FDA].", other: "Do not combine with aliskiren in diabetes [FDA]." },
  tox: { human: "Hypotension (by analogy with other ACE inhibitors) [FDA].", animal: "Single oral doses of 2 g/kg caused significant lethality in mice [FDA] [UNVERIFIED-KNOWLEDGE].", manage: "IV normal saline [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]", "History of ACE-inhibitor angioedema [FDA]", "With aliskiren in diabetes [FDA]"],
  ae: { common: ["Cough, dizziness, diarrhoea, flu-like symptoms, fatigue, flushing [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Angioedema, including intestinal [FDA]", "Hypotension [FDA]", "Hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Kidney function decline [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia/agranulocytosis (class) [FDA]"] },
  monitor: ["Blood pressure before the next dose; potassium and creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "moexipril", indication_id: "htn", label: "Hypertension — start 7.5 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 7.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 7.5, unit: "mg" }], rounding: "half tablets allowed (scored)", renal: [{ crcl_min: 0, crcl_max: 40, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["1 hour before a meal", "On a diuretic: start 3.75 mg", "Kidney: maximum 15 mg/day at CrCl 40 or less"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Moexipril hydrochloride tablets — FDA label (DailyMed)", M3_DM("baac91ad-f8ee-4694-89f8-5c47a8eda39a")], NEML_SRC],
  dose: { tagline: "ACE inhibitor — 7.5 mg once daily before a meal; 3.75 mg with diuretics or CrCl 40 or less.",
    boxedTitle: "Fetal toxicity",
    boxed: "• When pregnancy is detected, discontinue moexipril hydrochloride as soon as possible. • Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus. See [FDA].",
    adult: [{ ind: "Hypertension", text: "7.5 mg once daily; usual 7.5–30 mg/day.", calc: ["htn"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mogamulizumab", {
  inn: "Mogamulizumab", atc: "L01FX09", cls: "Anti-CCR4 monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Injection 20 mg/5 mL (4 mg/mL) single-dose vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds CCR4 on malignant T cells and causes antibody-dependent cell-mediated cytotoxicity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsed or refractory mycosis fungoides or Sézary syndrome after at least one systemic therapy [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "1 mg/kg IV over at least 60 minutes on days 1, 8, 15 and 22 of the first 28-day cycle, then days 1 and 15 of each later cycle [FDA]."], ["Premedication", "Diphenhydramine and paracetamol before the first infusion [FDA]."], ["Dilution", "In 0.9% saline to 0.1–3 mg/mL; never SC or rapid IV [FDA]."], ["Rash", "Grade 2–3: interrupt and give at least 2 weeks of topical steroid; grade 4 or SJS/TEN: stop permanently [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Allogeneic stem-cell transplant after mogamulizumab has more severe GVHD [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Rash (drug eruption), infusion reactions, fatigue, diarrhoea, musculoskeletal pain, upper respiratory infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Dermatologic toxicity including SJS/TEN [FDA]", "Infusion reactions [FDA]", "Infections [FDA]", "Autoimmune complications [FDA] [UNVERIFIED-KNOWLEDGE]", "Complications of allogeneic HSCT [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Skin throughout; infusion reactions; signs of infection and autoimmune disease [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "mogamulizumab", indication_id: "std", label: "MF / Sézary — 1 mg/kg IV (weekly × 4, then every 2 weeks)", route: "IV", population: ADULT, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 4, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Cycle 1: days 1, 8, 15, 22; later cycles: days 1 and 15", "Over at least 60 minutes"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Poteligeo (mogamulizumab-kpkc) — FDA label (DailyMed)", M3_DM("e53960ab-42a1-40d1-9c7d-eb013fe7f18f")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-CCR4 antibody for MF and Sézary syndrome — 1 mg/kg weekly × 4, then every 2 weeks.",
    cautionTitle: "Use with care",
    caution: "Watch the skin throughout — severe drug eruptions including SJS/TEN occur. Infusion reactions are common with the first dose; premedicate [FDA].",
    adult: [{ ind: "Mycosis fungoides / Sézary syndrome", text: "1 mg/kg IV days 1, 8, 15, 22 of cycle 1, then days 1 and 15.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("molindone", {
  inn: "Molindone", atc: "N05AE02", cls: "First-generation (typical) antipsychotic",
  linked: [],
  forms: ["Tablets 5, 10, 25, 50 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Dopamine D2 receptor antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Schizophrenia [FDA]."], paed: ["Under 12 years: not recommended [FDA]."] },
  adult: [["Start", "50–75 mg/day; increase to 100 mg/day in 3–4 days; up to 225 mg/day in severe illness [FDA]."], ["Maintenance", "Mild: 5–15 mg three or four times daily; moderate: 10–25 mg three or four times daily; severe: up to 225 mg/day [FDA]."], ["Older or debilitated", "Start lower [FDA]."]],
  paed: { tiers: ["Under 12 years: not recommended [FDA]."], transition: "Adult dosing from 12 years [UNVERIFIED-KNOWLEDGE].", calcNote: "No calculator — titrated." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Third-trimester exposure: neonatal extrapyramidal and withdrawal symptoms [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Tablets may contain calcium sulfate — can reduce tetracycline and phenytoin absorption [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Extrapyramidal symptoms, sedation, hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; gastric lavage per label; anticholinergic for dystonia [FDA]." },
  contra: ["Severe CNS depression or coma [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Drowsiness, extrapyramidal symptoms, akathisia, dry mouth, blurred vision [FDA]."], serious: ["Tardive dyskinesia [FDA]", "Neuroleptic malignant syndrome [FDA]", "Leukopenia, neutropenia, agranulocytosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Increased death in elderly with dementia [FDA]"] },
  monitor: ["Movement disorders; blood counts if risk factors; temperature [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Molindone hydrochloride tablets — FDA label (DailyMed)", M3_DM("1275e92f-9573-4d0c-8e77-1c9ac47696d2")], NEML_SRC],
  dose: { tagline: "Typical antipsychotic for schizophrenia — 50–75 mg/day, up to 100–225 mg/day.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis",
    boxed: "Increased Mortality in Elderly Patients with Dementia-Related Psychosis – Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. Analyses of seventeen placebo-controlled trials (modal duration of 10 weeks), largely in patients taking atypical antipsychotic drugs, revealed a risk of death in drug-treated patients of between 1.6 to 1.7 times the risk of death in placebo-treated patients. Over the course of a typical 10-week controlled trial, the rate of death in drug-treated patients was about 4.5%, compared to a rate of about 2.6% in the placebo group. Although the causes of death were varied, most of the deaths appeared to be either cardiovascular (e.g., heart failure, sudden death) or infectious (e.g., pneumonia) in nature. Observational studies suggest that, similar to atypical antipsychotic drugs, treatment with conventional antipsychotic drugs may increase mortality. The extent to which the findings of increased mortality in observational studies may be attributed to the antipsychotic drug as opposed to some characteristic(s) of the patients is not clear. Molindone Hydrochloride Tablets, USP are not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia", text: "Start 50–75 mg/day in 3–4 doses; usual up to 100 mg/day; max 225 mg/day." }],
    child: [{ ind: "Under 12 years", text: "Not recommended." }] }
});

FDB_M("momelotinib", {
  inn: "Momelotinib", atc: "L01EJ04", cls: "JAK1/JAK2 and ACVR1 inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 100, 150, 200 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits JAK1/JAK2 and ACVR1, lowering hepcidin and improving anaemia [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Intermediate- or high-risk myelofibrosis (primary or post-PV/ET) in adults with anaemia [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Myelofibrosis", "200 mg once daily with or without food; swallow whole [FDA]."], ["Severe hepatic impairment (Child-Pugh C)", "Start 150 mg once daily [FDA]."], ["Missed dose", "Take the next dose the following day [FDA]."], ["Toxicity", "Reduce in steps for low platelets, low neutrophils or liver enzyme rises (label table) [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: "Child-Pugh C: 150 mg daily; A–B: no change [FDA].", pregnancy: NEP, other: "Screen for hepatitis B before starting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "No antidote; supportive [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Thrombocytopenia, haemorrhage, bacterial infection, fatigue, dizziness, diarrhoea, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections and hepatitis B reactivation [FDA]", "Thrombocytopenia and neutropenia [FDA]", "Hepatotoxicity [FDA]", "Severe cutaneous adverse reactions [FDA]", "Major adverse cardiovascular events, thrombosis, malignancy (JAK-inhibitor class) [FDA]"] },
  monitor: ["Blood counts with platelets and liver tests before and during [FDA]."],
  local: notBT,
  calc: [
    { drug: "momelotinib", indication_id: "mf", label: "Myelofibrosis with anaemia — 200 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Child-Pugh C: 150 mg once daily", "CBC and liver tests before and during"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ojjaara (momelotinib) tablets — FDA label (DailyMed)", M3_DM("4a672fd1-eb7b-4aa9-9b23-845e4b5dc400")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "JAK inhibitor for myelofibrosis with anaemia — 200 mg once daily.",
    cautionTitle: "Use with care",
    caution: "Screen for hepatitis B and active infection first. Monitor platelets, neutrophils and liver tests. JAK-inhibitor class risks: major cardiovascular events, thrombosis and malignancy [FDA].",
    adult: [{ ind: "Myelofibrosis with anaemia", text: "200 mg once daily.", calc: ["mf"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mometasone", {
  inn: "Mometasone furoate", atc: "R01AD09", cls: "Corticosteroid (nasal, topical, inhaled)",
  linked: [],
  forms: ["Nasal spray 50 microgram/spray [FDA].", "Cream, ointment, lotion 0.1% (ATC D07AC13) [FDA] [UNVERIFIED-KNOWLEDGE].", "Inhaler (ATC R03BA07) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Potent glucocorticoid receptor agonist with local anti-inflammatory action [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very low systemic availability from the nose [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Nasal: hay fever and other upper respiratory allergy symptoms [FDA].", "Cream: corticosteroid-responsive dermatoses [FDA]."], paed: ["Nasal: 2 years and over [FDA].", "Cream: 2 years and over [FDA]."] },
  adult: [["Nasal (12 years and over)", "2 sprays in each nostril once daily [FDA]."], ["Cream 0.1%", "Thin film once daily; stop when controlled; reassess if no better in 2 weeks [FDA]."]],
  paed: { tiers: ["Nasal, 2–11 years: 1 spray in each nostril once daily, adult supervision; shortest time needed (growth may slow) [FDA].", "Nasal, under 2 years: do not use [FDA].", "Cream, 2 years and over: once daily, no more than 3 weeks; not under 2 years; not in nappy area [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult nasal dose from 12 years.", calcNote: "Fixed sprays — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Topical: HPA-axis suppression in about 16% of children in one study; avoid occlusion and large areas [FDA]." },
  tox: { human: "Chronic overuse: Cushingoid effects, HPA suppression [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Reduce or stop gradually [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]."],
  ae: { common: ["Nasal: headache, nosebleed, pharyngitis [UNVERIFIED-KNOWLEDGE].", "Topical: burning, itching, skin atrophy [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Slowed growth in children [FDA]", "HPA-axis suppression [FDA]", "Nasal septal perforation, glaucoma, cataract [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Growth in children on long-term use [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Nasonex 24HR Allergy (mometasone furoate) nasal spray — FDA label (DailyMed)", M3_DM("13696a8b-366a-4a5e-adea-d5b7bff9e46f")], ["FDA", "Mometasone furoate cream 0.1% — FDA label (DailyMed)", M3_DM("16e134c7-39fb-4d16-9c24-a6df438967bf")], NEML_SRC],
  dose: { tagline: "Corticosteroid — nasal spray once daily for allergic rhinitis; 0.1% cream once daily for dermatoses.",
    adult: [{ ind: "Allergic rhinitis", text: "2 sprays each nostril once daily." }, { ind: "Dermatoses", text: "0.1% cream once daily." }],
    child: [{ ind: "Allergic rhinitis, 2–11 years", text: "1 spray each nostril once daily." }, { ind: "Dermatoses, 2 years+", text: "0.1% cream once daily, up to 3 weeks." }] }
});

FDB_M("monoethanolamine-oleate", {
  inn: "Monoethanolamine oleate (ethanolamine oleate)", atc: "C05BB01", cls: "Sclerosant",
  linked: [],
  forms: ["Injection 5% (50 mg/mL), 2 mL ampoules [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Irritates the vein lining, causing inflammation, thrombosis and fibrosis of the varix [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Oesophageal varices that have recently bled, to prevent rebleeding (not for varices that have not bled) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Sclerotherapy", "1.5–5 mL per varix by intravariceal injection; no more than 20 mL per session [FDA]."], ["Repeat", "At the bleed, then after 1 week, 6 weeks, 3 months and 6 months as needed [FDA]."], ["Lower doses", "Child-Pugh C liver disease or heart/lung disease: usually less than the maximum [FDA]."], ["Avoid", "Submucosal injection — more ulceration [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Per-varix volume — no calculator." },
  adj: { renal: NEP, hepatic: "Child-Pugh C: use less than the maximum [FDA].", pregnancy: NEP, other: "Does not treat portal hypertension [FDA]." },
  tox: { human: "Overdose causes severe intramural oesophageal necrosis, sometimes fatal [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to ethanolamine, oleic acid or ethanolamine oleate [FDA]."],
  ae: { common: ["Retrosternal pain, fever (per session about 13% have complications) [FDA]."], serious: ["Pleural effusion, oesophageal ulcer and stricture, pneumonia [FDA]", "Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Acute kidney injury with haemoglobinuria at high doses [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Chest symptoms, fever and swallowing after each session [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Ethamolin (ethanolamine oleate) injection — FDA label (DailyMed)", M3_DM("a9c1d8c5-443e-400e-a42c-16a25fb47231")], NEML_SRC],
  dose: { tagline: "Variceal sclerosant after a bleed — 1.5–5 mL per varix, max 20 mL per session.",
    cautionTitle: "Use with care",
    caution: "For physicians experienced in sclerotherapy only. Overdose causes oesophageal necrosis that can be fatal; keep to no more than 20 mL per session [FDA].",
    adult: [{ ind: "Bleeding oesophageal varices", text: "1.5–5 mL per varix; max 20 mL per session." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("monomethyl-fumarate", {
  inn: "Monomethyl fumarate", atc: "L04AX11", cls: "Fumarate (Nrf2 activator) for multiple sclerosis",
  linked: [],
  forms: ["Delayed-release capsules 95 mg [FDA]."],
  moa: "Active metabolite of dimethyl fumarate; activates the Nrf2 pathway [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsing forms of multiple sclerosis (CIS, relapsing-remitting, active secondary progressive) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "95 mg twice daily for 7 days [FDA]."], ["Maintenance", "190 mg (two 95 mg capsules) twice daily [FDA]."], ["Intolerance", "Temporarily 95 mg twice daily; return to 190 mg twice daily within 4 weeks [FDA]."], ["Flushing", "Non-enteric-coated aspirin up to 325 mg 30 minutes before may help [FDA]."], ["Before starting", "Blood count with lymphocytes; liver tests [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults — fixed doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Do not take with dimethyl fumarate or diroximel fumarate [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to monomethyl, dimethyl or diroximel fumarate [FDA]", "Taking dimethyl or diroximel fumarate [FDA]"],
  ae: { common: ["Flushing, abdominal pain, diarrhoea, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis and angioedema [FDA]", "Progressive multifocal leukoencephalopathy [FDA]", "Herpes zoster and other opportunistic infections [FDA]", "Lymphopenia [FDA]", "Liver injury [FDA]", "Serious GI reactions [FDA]"] },
  monitor: ["Lymphocyte count before, 6 months after starting, then every 6–12 months; liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "monomethyl-fumarate", indication_id: "start", label: "Relapsing MS — 95 mg twice daily for 7 days", route: "PO", population: ADULT, basis: "fixed", dose: { value: 95, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "DR capsule", strength: 95, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["Days 1–7 only, then 190 mg twice daily"], sources: ["FDA"] },
    { drug: "monomethyl-fumarate", indication_id: "maint", label: "Relapsing MS — 190 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 190, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "DR capsule", strength: 95, unit: "mg", whole: true }], rounding: "2 capsules", renal: [], flags: ["From day 8", "Swallow whole"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Bafiertam (monomethyl fumarate) delayed-release capsules — FDA label (DailyMed)", M3_DM("a161f9d4-70f1-4097-957a-eafb35d3274f")], NEML_SRC],
  dose: { tagline: "Oral fumarate for relapsing MS — 95 mg twice daily for a week, then 190 mg twice daily.",
    cautionTitle: "Use with care",
    caution: "Check lymphocytes before and during — prolonged lymphopenia raises the risk of PML. Never combine with dimethyl or diroximel fumarate [FDA].",
    adult: [{ ind: "Relapsing MS", text: "95 mg twice daily × 7 days, then 190 mg twice daily.", calc: ["start", "maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const MON_INF = { min_age_months: 6, max_age_months: 24, min_weight_kg: null, max_weight_kg: null };
const MON_PRE = { min_age_months: 24, max_age_months: 72, min_weight_kg: null, max_weight_kg: null };
const MON_SCH = { min_age_months: 72, max_age_months: 180, min_weight_kg: null, max_weight_kg: null };
const MON_AD = { min_age_months: 180, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
FDB_M("montelukast", {
  inn: "Montelukast", atc: "R03DC03", cls: "Leukotriene receptor antagonist",
  linked: [],
  forms: ["Tablets 10 mg; chewable tablets 4, 5 mg; oral granules 4 mg sachet [FDA]."],
  moa: "Blocks the cysteinyl leukotriene (CysLT1) receptor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism (CYP2C8, 3A4) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prophylaxis and chronic treatment of asthma [FDA].", "Prevention of exercise-induced bronchoconstriction [FDA].", "Allergic rhinitis — only when other treatments are unsuitable [FDA]."], paed: ["Asthma from 12 months; perennial allergic rhinitis from 6 months; seasonal from 2 years; EIB from 6 years [FDA]."] },
  adult: [["15 years and over", "10 mg once daily in the evening (asthma); EIB: 10 mg at least 2 hours before exercise, no second dose within 24 hours [FDA]."], ["Both asthma and rhinitis", "One dose daily in the evening [FDA]."], ["Not for", "Acute asthma attacks [FDA]."]],
  paed: { tiers: ["6–23 months: one 4 mg granule sachet once daily [FDA].", "2–5 years: 4 mg chewable tablet or granules once daily [FDA].", "6–14 years: 5 mg chewable tablet once daily [FDA].", "Granules: give within 15 minutes of opening [FDA]."], transition: "10 mg tablet from 15 years.", calcNote: "Age bands." },
  adj: { renal: "No change [UNVERIFIED-KNOWLEDGE].", hepatic: "No change in mild–moderate; severe not studied [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Do not stop inhaled or oral steroids abruptly when starting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Thirst, somnolence, mydriasis, hyperkinesia, abdominal pain in reported overdoses [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [FDA]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Upper respiratory infection, fever, headache, pharyngitis, cough, abdominal pain, diarrhoea [FDA]."], serious: ["Serious neuropsychiatric events — agitation, depression, sleep disturbance, suicidal thoughts [FDA]", "Eosinophilic granulomatosis with polyangiitis (Churg-Strauss) on steroid taper [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood, behaviour and sleep — ask families about changes [FDA]."],
  local: notBT,
  calc: [
    { drug: "montelukast", indication_id: "inf", label: "6–23 months — 4 mg granules once daily", route: "PO", population: MON_INF, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "granules sachet", strength: 4, unit: "mg", whole: true }], rounding: "1 sachet", renal: [], flags: ["Asthma from 12 months; perennial rhinitis from 6 months", "Evening"], sources: ["FDA"] },
    { drug: "montelukast", indication_id: "pre", label: "2–5 years — 4 mg once daily", route: "PO", population: MON_PRE, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "chewable tablet", strength: 4, unit: "mg", whole: true }], rounding: "1 tablet or sachet", renal: [], flags: ["Evening for asthma"], sources: ["FDA"] },
    { drug: "montelukast", indication_id: "sch", label: "6–14 years — 5 mg chewable once daily", route: "PO", population: MON_SCH, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "chewable tablet", strength: 5, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Evening for asthma"], sources: ["FDA"] },
    { drug: "montelukast", indication_id: "ad", label: "15 years and over — 10 mg once daily", route: "PO", population: MON_AD, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Evening for asthma", "EIB: 2 h before exercise"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Montelukast sodium tablets, chewable tablets and granules — FDA label (DailyMed)", M3_DM("64a3b181-e8d8-4caf-9f1b-e0063d0bd94a")], NEML_SRC],
  dose: { tagline: "Leukotriene blocker for asthma and rhinitis — 4, 5 or 10 mg once daily by age; watch mood.",
    boxedTitle: "Serious neuropsychiatric events",
    boxed: "Serious neuropsychiatric (NP) events have been reported with the use of montelukast sodium. The types of events reported were highly variable, and included, but were not limited to, agitation, aggression, depression, sleep disturbances, suicidal thoughts and behavior (including suicide). The mechanisms underlying NP events associated with montelukast sodium use are currently not well understood. Because of the risk of NP events, the benefits of montelukast sodium may not outweigh the risks in some patients, particularly when the symptoms of disease may be mild and adequately treated with alternative therapies. Reserve use of montelukast sodium for patients with allergic rhinitis who have an inadequate response or intolerance to alternative therapies. In patients with asthma or exercise-induced bronchoconstriction, consider the benefits and risks before prescribing montelukast sodium. Discuss the benefits and risks of montelukast sodium with patients and caregivers when prescribing montelukast sodium. Advise patients and/or caregivers to be alert for changes in behavior or new NP symptoms when taking montelukast sodium. If changes in behavior are observed, or if new NP symptoms or suicidal thoughts and/or behavior occur, advise patients to discontinue montelukast sodium and contact a healthcare provider immediately [FDA].",
    adult: [{ ind: "Asthma / EIB / rhinitis", text: "10 mg once daily in the evening.", calc: ["ad"] }],
    child: [{ ind: "6–23 months", text: "4 mg granules once daily.", calc: ["inf"] }, { ind: "2–5 years", text: "4 mg once daily.", calc: ["pre"] }, { ind: "6–14 years", text: "5 mg chewable once daily.", calc: ["sch"] }] }
});

})(); // end M-3 scope

/* Brand names — BATCH M3 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"midostaurin":{"IN":[["Midostar","Zydus Healthcare Limited","Midostar Strip Of 4 Tablets"],["Tauritmo","Sandoz Private Limited","Tauritmo 25Mg Strip Of 4 Softgel Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/midostar-tablet-4-no-s-4120006","https://pharmeasy.in/online-medicine-order/tauritmo-25mg-strip-of-4-softgel-capsules-4003117"]},"mifepristone":{"IN":[],"BD":[["Mifeston","Incepta Pharmaceuticals Ltd","200 mg"],["MIF","Renata PLC","200 mg"]],"src":["https://medex.com.bd/brands/16624/mifeston-200-mg-tablet"]},"miglitol":{"IN":[],"BD":[["Diaset","Advanced Chemical Industries PLC","25 mg"]],"src":["https://medex.com.bd/brands/5477/diaset-25-mg-tablet"]},"milnacipran":{"IN":[],"BD":[["Milran","Beacon Pharmaceuticals PLC","12.5 mg"],["Neocipran","The IBN SINA Pharmaceutical PLC","50 mg"]],"src":["https://medex.com.bd/brands/16625/milran-125-mg-tablet","https://medex.com.bd/brands/16627/neocipran-50-mg-tablet"]},"milrinone":{"IN":[["Milrilact","Aaa Pharma Trade Pvt Ltd","Milrilact Injection 10Ml"],["Milrineon","Neon Laboratories Limited","Milrineon Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/milrilact-inj-10ml-92850","https://pharmeasy.in/online-medicine-order/milrineon-inj-182008"]},"miltefosine":{"IN":[],"BD":[["Miltefos","Popular Pharmaceuticals PLC","50 mg"]],"src":["https://medex.com.bd/brands/30484/miltefos-50-mg-capsule"]},"minocycline":{"IN":[["Minoz Od","Ranbaxy Laboratories (sun Pharma)","Minoz Od 100Mg Strip Of 10 Capsules"],["Minoz","Ranbaxy Laboratories (sun Pharma)","Minoz 100Mg Strip Of 10 Tablets"]],"BD":[["Minocin","UniMed UniHealth Pharmaceuticals Ltd","50 mg"],["Cynocap","Sharif Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/minoz-od-100mg-capsule-22572","https://pharmeasy.in/online-medicine-order/minoz-100mg-tablet-22570","https://medex.com.bd/brands/28966/minocin-50-mg-capsule","https://medex.com.bd/brands/38908/cynocap-50-mg-capsule"]},"minoxidil":{"IN":[["Minoxinol","Knoll Healthcare Pvt Ltd","Minoxinol 5% Solution 60Ml"]],"BD":[["Hairgrow","Eskayef Pharmaceuticals Ltd","2%"],["Grow Hair","Pharmik Laboratories Ltd","5%"],["Splendora","Square Pharmaceuticals PLC","2%"]],"src":["https://pharmeasy.in/online-medicine-order/minoxinol-5-solution-60ml-231259","https://medex.com.bd/brands/26757/hairgrow-2-scalp-solution","https://medex.com.bd/brands/37719/grow-hair-5-scalp-solution","https://medex.com.bd/brands/33498/splendora-2-scalp-solution"]},"mirabegron":{"IN":[["Begroease","Leeford Healthcare Ltd","Begroease 50Mg Strip Of 10 Tablets"],["Mirago","Ranbaxy Laboratories (sun Pharma)","Mirago 25Mg Strip Of 10 Tablets"],["Mirbeg","Ipca Laboratories","Mirbeg 25Mg Strip Of 10 Tablets"]],"BD":[["Migron ER","The IBN SINA Pharmaceutical PLC","50 mg"],["Mirabeg ER","General Pharmaceuticals Ltd","25 mg"],["Miragon","Advanced Chemical Industries PLC","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/begroease-50mg-strip-of-10-tablets-4008862","https://pharmeasy.in/online-medicine-order/mirago-25mg-strip-of-10-tablets-191203","https://pharmeasy.in/online-medicine-order/mirbeg-25mg-strip-of-10-tablets-191826","https://medex.com.bd/brands/39366/migron-er-50-mg-xr-tablet","https://medex.com.bd/brands/16628/mirabeg-er-25-mg-xr-tablet","https://medex.com.bd/brands/39230/miragon-50-mg-pr-tablet"]},"mitomycin":{"IN":[["Mito","Neon Laboratories Limited","Mito 10Mg Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/mito-10-injection-1-no-s-4120142","https://pharmeasy.in/online-medicine-order/mitomycin-40mg-inj-1-s-212650"]},"modafinil":{"IN":[["Modafil","Intas Pharmaceuticals Ltd","Modafil 200Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/modafil-200mg-tablet-13567"]},"mometasone":{"IN":[["Momesone","Intas Pharmaceuticals Ltd","Momesone 0.1% Tube Of 25Gm Cream"],["Elosone","Leeford Healthcare Ltd","Elosone Tube Of 10Gm Cream"],["Momate","Glenmark Pharmaceuticals","Momate 0.1% Tube Of 20Gm Cream"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/momesone-cream-25gm-13956","https://pharmeasy.in/online-medicine-order/elosone-cream-16352","https://pharmeasy.in/online-medicine-order/momate-0-1-tube-of-20gm-cream-2975261"]},"montelukast":{"IN":[],"BD":[["Ezair","Novo Healthcare and Pharma Ltd","10 mg"],["Monas","ACME Laboratories Ltd","10 mg"],["Arokast FT","Navana Pharmaceuticals Ltd","5 mg"]],"src":["https://medex.com.bd/brands/29276/ezair-10-mg-tablet","https://medex.com.bd/brands/26902/arokast-ft-5-mg-flash-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
