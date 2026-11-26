/* Clinical Disease Guide — Drug monograph database, batch P-3 (26 Nov 2026).
   End of P (pexidartinib … pyrimethamine), Q (quazepam … quizartinib) and start of R (rabeprazole … rasburicase).
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js.
   Labels added: pyridostigmine 60 mg tablets (myasthenia) beside the military soman-pretreatment pack. */
(function () { // P-3 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const P3_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("pexidartinib", {
  inn: "Pexidartinib", atc: "L01EX15", cls: "CSF1R kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 125 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits colony-stimulating factor 1 receptor on tumour-associated macrophages [UNVERIFIED-KNOWLEDGE].",
  pk: ["High-fat meals double exposure — take with a low-fat meal [FDA]."],
  ind: { adult: ["Symptomatic tenosynovial giant cell tumour with severe morbidity, not amenable to surgery [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["TGCT", "250 mg twice daily with a low-fat meal (about 11–14 g fat) [FDA]."], ["Access", "US: restricted programme (REMS) because of liver toxicity [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Kidney / liver impairment", "Reduced doses per label [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "CrCl 15–89: 125 mg in the morning and 250 mg in the evening [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild (bilirubin raised): reduce per label [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A inhibitors/inducers and hepatotoxic drugs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Raised LDH, AST, ALT, hair colour change, fatigue, raised cholesterol, nausea, dysgeusia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious and fatal liver injury (mixed or cholestatic) [FDA]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests weekly for 8 weeks, every 2 weeks for 1 month, then every 3 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pexidartinib", "std", "TGCT — 250 mg twice daily with a low-fat meal", "PO", ADULT, "fixed", 250, 12, { formulations: [{ form: "capsule", strength: 125, unit: "mg", whole: true }], rounding: "2 capsules", flags: ["Low-fat meal only", "Weekly liver tests at first"] })],
  sources: [["FDA", "Turalio (pexidartinib) — FDA label (DailyMed)", P3_DM("7b0ec4bf-b2ac-49ee-96af-7740ad3f2e16")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "CSF1R inhibitor for inoperable tenosynovial giant cell tumour — 250 mg twice daily; liver toxicity.",
    boxedTitle: "Hepatotoxicity",
    boxed: "TURALIO can cause serious and potentially fatal liver injury, including vanishing bile duct syndrome. Monitor liver tests prior to initiation of TURALIO and at specified intervals during treatment. Withhold and dose reduce or permanently discontinue TURALIO based on severity of hepatotoxicity. Monitoring and prompt cessation of TURALIO may not eliminate the risk of serious and potentially fatal liver injury. TURALIO is available only through a restricted program called the TURALIO Risk Evaluation and Mitigation Strategy (REMS) Program [FDA].",
    adult: [{ ind: "Tenosynovial giant cell tumour", text: "250 mg twice daily with a low-fat meal.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("phenelzine", {
  inn: "Phenelzine", atc: "N06AF03", cls: "Monoamine oxidase inhibitor (non-selective, irreversible)",
  linked: [],
  forms: ["Tablets 15 mg [FDA]."],
  moa: "Irreversibly inhibits MAO-A and MAO-B, raising monoamines [UNVERIFIED-KNOWLEDGE].",
  pk: ["Effect lasts about 2 weeks after stopping (enzyme resynthesis) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Atypical, non-endogenous or neurotic depression not responding to other antidepressants [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "15 mg three times daily [FDA]."], ["Early phase", "Increase fairly quickly to at least 60 mg/day; up to 90 mg/day may be needed; response may take 4 weeks at 60 mg [FDA]."], ["Maintenance", "Reduce slowly over several weeks, possibly to 15 mg daily or every other day [FDA]."], ["Diet", "Avoid tyramine-rich foods and many drugs (sympathomimetics, other antidepressants, pethidine) [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "Severe impairment: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Contraindicated in liver disease [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Allow 14 days before starting other serotonergic or adrenergic drugs [FDA]." },
  tox: { human: "Agitation, hyperthermia, hypertension or hypotension, seizures, coma — may be delayed up to 12 hours [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; treat hypertensive crisis with phentolamine [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Phaeochromocytoma [FDA]", "Heart failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Liver disease or abnormal liver tests [FDA]", "Severe renal impairment [FDA] [UNVERIFIED-KNOWLEDGE]", "With SSRIs, SNRIs, TCAs, bupropion, buspirone, sympathomimetics, pethidine, dextromethorphan, tyramine-rich foods [FDA]"],
  ae: { common: ["Dizziness, headache, drowsiness, insomnia, weight gain, postural hypotension, sexual dysfunction [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypertensive crisis (tyramine, drugs) [FDA]", "Serotonin syndrome [FDA]", "Suicidal thoughts in young people [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; mood; diet adherence [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("phenelzine", "start", "Depression — start 15 mg three times daily", "PO", ADULT, "fixed", 15, 8, { formulations: [{ form: "tablet", strength: 15, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Increase to at least 60 mg/day; max 90 mg/day", "Tyramine-free diet"] })],
  sources: [["FDA", "Nardil (phenelzine) tablets — FDA label (DailyMed)", P3_DM("513a41d0-37d4-4355-8a6d-a2c643bce6fa")], NEML_SRC],
  dose: { tagline: "MAO inhibitor for treatment-resistant atypical depression — 15 mg three times daily; strict diet and drug rules.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Suicidality and Antidepressant Drugs Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of Nardil or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Nardil is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression (resistant/atypical)", text: "15 mg three times daily; 60–90 mg/day.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("propafenone", {
  inn: "Propafenone", atc: "C01BC03", cls: "Class IC antiarrhythmic",
  linked: [],
  forms: ["Extended-release capsules 225, 325, 425 mg [FDA].", "Immediate-release tablets 150, 225, 300 mg [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks fast sodium channels; mild beta-blocking effect [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2D6 (and 3A4, 1A2) metabolism; non-linear kinetics [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["ER: prolong time to recurrence of symptomatic atrial fibrillation without structural heart disease [FDA].", "IR: paroxysmal AF/SVT without structural heart disease; documented life-threatening ventricular arrhythmias [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["ER capsules", "225 mg every 12 hours; increase at least 5 days apart to 325 mg, then 425 mg every 12 hours [FDA]."], ["IR tablets", "150 mg every 8 hours; increase every 3–4 days to 225–300 mg every 8 hours [UNVERIFIED-KNOWLEDGE]."], ["Hepatic impairment", "About 20–30% of the usual dose [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Before starting", "Exclude structural heart disease; ECG [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — ER starting dose." },
  adj: { renal: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Reduce to 20–30% of the dose [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Raises digoxin and warfarin levels; avoid with CYP2D6 + CYP3A4 inhibitors together [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, bradycardia, conduction block, ventricular arrhythmias, seizures [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; sodium bicarbonate for QRS widening [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Heart failure, cardiogenic shock [FDA]", "Sinus node dysfunction, AV block or bundle branch block without a pacemaker [FDA]", "Bradycardia, marked hypotension [FDA]", "Bronchospastic disorders, severe COPD [FDA]", "Brugada syndrome [FDA]", "Marked electrolyte imbalance [FDA]"],
  ae: { common: ["Taste disturbance, dizziness, nausea, vomiting, constipation, palpitations, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Proarrhythmia and excess mortality (CAST) [FDA]", "Heart failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Conduction disturbances [FDA] [UNVERIFIED-KNOWLEDGE]", "Agranulocytosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Unmasking Brugada syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG (PR, QRS) after starting and dose changes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("propafenone", "er", "AF recurrence (ER) — 225 mg every 12 hours", "PO", ADULT, "fixed", 225, 12, { formulations: [{ form: "ER capsule", strength: 225, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["Increase at least 5 days apart to 325, then 425 mg", "Only without structural heart disease"] })],
  sources: [["FDA", "Propafenone hydrochloride ER capsules — FDA label (DailyMed)", P3_DM("2ecd6452-ccc3-493f-9a4a-69f0fbf67a42")], NEML_SRC],
  dose: { tagline: "Class IC antiarrhythmic for AF in structurally normal hearts — ER 225 mg every 12 hours.",
    boxedTitle: "Mortality",
    boxed: "• In the National Heart, Lung, and Blood Institute's Cardiac Arrhythmia Suppression Trial (CAST), a long-term, multicenter, randomized, double-blind trial in patients with asymptomatic non-life-threatening ventricular arrhythmias who had a myocardial infarction more than 6 days but less than 2 years previously, an increased rate of death or reversed cardiac arrest rate (7.7%; 56/730) was seen in patients treated with encainide or flecainide (Class IC antiarrhythmics) compared with that seen in patients assigned to placebo (3 %; 22/725). The average duration of treatment with encainide or flecainide in this trial was 10 months. • The applicability of the CAST results to other populations (e.g., those without recent myocardial infarction) or other antiarrhythmic drugs is uncertain, but at present, it is prudent to consider any IC antiarrhythmic to have a significant proarrhythmic risk in patients with structural heart disease. Given the lack of any evidence that these drugs improve survival, antiarrhythmic agents should generally be avoided in patients with non-life-threatening ventricular arrhythmias, even if the patients are experiencing unpleasant, but not life-threatening, symptoms or signs [FDA].",
    adult: [{ ind: "Atrial fibrillation (ER)", text: "225 mg every 12 h; up to 425 mg every 12 h.", calc: ["er"] }, { ind: "IR tablets", text: "150 mg every 8 h; up to 300 mg every 8 h." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("propylthiouracil", {
  inn: "Propylthiouracil", atc: "H03BA02", cls: "Thionamide antithyroid",
  linked: [],
  forms: ["Tablets 50 mg [FDA]."],
  moa: "Blocks thyroid peroxidase; also blocks peripheral T4→T3 conversion [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short half-life — three times daily [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Graves' disease or toxic multinodular goitre in patients intolerant of methimazole and not candidates for surgery/radioiodine [FDA].", "Before surgery or radioiodine in methimazole-intolerant patients [FDA]."], paed: ["Generally not recommended except when alternatives are unsuitable [FDA]."] },
  adult: [["Start", "300 mg/day in 3 doses about 8 hours apart; severe disease or large goitre 400 mg/day; occasionally 600–900 mg/day [FDA]."], ["Maintenance", "100–150 mg/day [FDA]."], ["First trimester", "Preferred over methimazole in the first trimester (methimazole embryopathy); switch afterwards [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Thyroid storm", "Used for its T4→T3 blocking effect [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["6 years and over (only if no alternative): start 50 mg daily, titrate carefully by TSH and free T4 [FDA]."], transition: "Adult dosing.", calcNote: "Adult starting dose." },
  adj: { renal: NEP, hepatic: "Severe liver injury risk — avoid in liver disease [FDA].", pregnancy: "First trimester preferred agent; methimazole later [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Warfarin effect may increase [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, epigastric pain, headache, fever, arthralgia, rash, pancytopenia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]."],
  ae: { common: ["Rash, itch, nausea, arthralgia, taste loss [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe liver injury and acute liver failure, including in children [FDA]", "Agranulocytosis — stop for sore throat/fever and check counts [FDA] [UNVERIFIED-KNOWLEDGE]", "ANCA vasculitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypothyroidism [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests and symptoms of liver injury; blood count if fever or sore throat; TSH and free T4 [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("propylthiouracil", "start", "Hyperthyroidism — start 100 mg every 8 hours (300 mg/day)", "PO", ADULT, "fixed", 100, 8, { formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }], rounding: "whole tablets", flags: ["Severe: 400 mg/day", "Maintenance 100–150 mg/day"] })],
  sources: [["FDA", "Propylthiouracil tablets — FDA label (DailyMed)", P3_DM("d819e532-09ac-434a-84a6-636c4204c7aa")], NEML_SRC],
  dose: { tagline: "Antithyroid drug — 300 mg/day in three doses; second line (except first trimester) because of liver failure risk.",
    boxedTitle: "Severe liver injury and acute liver failure",
    boxed: "Severe liver injury and acute liver failure, in some cases fatal, have been reported in patients treated with propylthiouracil. These reports of hepatic reactions include cases requiring liver transplantation in adult and pediatric patients. Propylthiouracil should be reserved for patients who cannot tolerate methimazole and in whom radioactive iodine therapy or surgery are not appropriate treatments for the management of hyperthyroidism. Propylthiouracil may be the treatment of choice when an antithyroid drug is indicated during or just prior to the first trimester of pregnancy [FDA].",
    adult: [{ ind: "Hyperthyroidism", text: "100 mg every 8 h (300 mg/day); maintenance 100–150 mg/day.", calc: ["start"] }],
    child: [{ ind: "6 years+ (only if no alternative)", text: "50 mg daily, titrated carefully." }] }
});

FDB_M("protein-c", {
  inn: "Protein C concentrate (human)", atc: "B01AD12", cls: "Plasma-derived anticoagulant protein",
  linked: [],
  forms: ["Powder for injection 500 and 1,000 IU vials [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Replaces protein C, which inactivates factors Va and VIIIa [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Severe congenital protein C deficiency: prevention and treatment of venous thrombosis and purpura fulminans [FDA]."], paed: ["Same, including neonates [FDA]."] },
  adult: [["Acute episode / short-term prophylaxis", "Initial 100–120 IU/kg; then 60–80 IU/kg every 6 hours for 3 doses; maintenance 45–60 IU/kg every 6 or 12 hours [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Long-term prophylaxis", "45–60 IU/kg every 12 hours [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Target", "Protein C activity 100% initially, then above 25% trough [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Rate", "Maximum 2 mL/min (0.2 mL/kg/min in children under 10 kg) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same IU/kg dosing [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "IU/kg adjusted to protein C activity — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Contains heparin traces — HIT caution [FDA] [UNVERIFIED-KNOWLEDGE]; sodium load in renal impairment [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Itching, rash, light-headedness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Bleeding with other anticoagulants [FDA] [UNVERIFIED-KNOWLEDGE]", "Transmission of infectious agents (plasma product) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Protein C activity (peak and trough) [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Ceprotin (protein C concentrate) — FDA label (DailyMed)", P3_DM("926914a9-78b2-40ea-b37d-2a55c09bf275")], NEML_SRC],
  dose: { tagline: "Protein C replacement for severe congenital deficiency and purpura fulminans — IU/kg by protein C activity.",
    adult: [{ ind: "Congenital protein C deficiency", text: "100–120 IU/kg, then 60–80 IU/kg every 6 h × 3, then 45–60 IU/kg every 6–12 h." }],
    child: [{ ind: "Neonates and children", text: "Same IU/kg schedule, guided by activity levels." }] }
});

FDB_M("protriptyline", {
  inn: "Protriptyline", atc: "N06AA11", cls: "Tricyclic antidepressant (secondary amine, activating)",
  linked: [],
  forms: ["Tablets 5, 10 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits noradrenaline (and serotonin) reuptake [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long half-life [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Depression, especially withdrawn and anergic patients [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Usual", "15–40 mg/day in 3 or 4 doses; up to 60 mg/day; increases in the morning dose [FDA]."], ["Adolescents and older adults", "5 mg three times daily to start, increasing gradually; monitor heart over 20 mg/day in older adults [FDA]."], ["Timing", "Last dose not late in the day (insomnia) [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "MAOIs within 14 days contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Arrhythmia, wide QRS, seizures, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "ECG; sodium bicarbonate; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs within 14 days [FDA] [UNVERIFIED-KNOWLEDGE]", "Acute recovery after MI [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Dry mouth, constipation, tachycardia, insomnia, anxiety, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts in young people [FDA]", "Arrhythmias [FDA] [UNVERIFIED-KNOWLEDGE]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Angle-closure glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood; ECG/heart rate in older adults [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("protriptyline", "std", "Depression — 15–40 mg/day in 3–4 doses (5–10 mg per dose)", "PO", ADULT, "fixed", 5, 8, { dose: { value: 5, value_max: 10, unit: "mg", per: "dose" }, caps: { max_daily: 60, unit: "mg" }, formulations: [{ form: "tablet", strength: 5, unit: "mg", whole: true }], rounding: "whole tablets", flags: ["3 or 4 doses a day; max 60 mg/day", "Older adults/adolescents: 5 mg three times daily"] })],
  sources: [["FDA", "Protriptyline hydrochloride tablets — FDA label (DailyMed)", P3_DM("c6c7c39e-e510-4f4a-bf7a-926f0e075d3a")], NEML_SRC],
  dose: { tagline: "Activating tricyclic antidepressant — 15–40 mg/day divided; max 60 mg.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Suicidality and Antidepressant Drugs Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of protriptyline hydrochloride or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Protriptyline hydrochloride is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression", text: "15–40 mg/day in 3–4 doses; max 60 mg/day.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("proxymetacaine", {
  inn: "Proxymetacaine (proparacaine)", atc: "S01HA04", cls: "Ester local anaesthetic (ophthalmic)",
  linked: [],
  forms: ["Eye drops 0.5% [FDA]."],
  moa: "Blocks sodium channels in corneal nerves [UNVERIFIED-KNOWLEDGE].",
  pk: ["Onset about 20 seconds; lasts 10–20 minutes [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Topical eye anaesthesia for tonometry, gonioscopy, foreign-body and suture removal, short corneal/conjunctival procedures [FDA]."], paed: ["Established in children [FDA]."] },
  adult: [["Tonometry / foreign body / sutures", "1–2 drops in each eye before the procedure [FDA]."], ["Short corneal or conjunctival procedures", "1 drop every 5–10 minutes for 5–7 doses [FDA]."], ["Storage", "Discard if the solution darkens [FDA]."]],
  paed: { tiers: ["Same drops [FDA]."], transition: "Same.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Never for patient self-use or prolonged use — corneal damage [FDA] [UNVERIFIED-KNOWLEDGE]. Protect the eye until sensation returns [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Rinse eye [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to proparacaine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Stinging, redness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Corneal epithelial damage and keratitis with prolonged use [FDA] [UNVERIFIED-KNOWLEDGE]", "Allergic contact dermatitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Alcaine (proparacaine) 0.5% — FDA label (DailyMed)", P3_DM("0c0fa0bf-977d-4539-b8dc-54c187c5b094")], NEML_SRC],
  dose: { tagline: "Topical eye anaesthetic for procedures — 1–2 drops; never for home use.",
    adult: [{ ind: "Eye procedures", text: "1–2 drops; for longer procedures 1 drop every 5–10 min × 5–7." }],
    child: [{ ind: "Eye procedures", text: "Same." }] }
});

FDB_M("prucalopride", {
  inn: "Prucalopride", atc: "A06AX05", cls: "Selective 5-HT4 receptor agonist (prokinetic)",
  linked: [],
  forms: ["Tablets 1, 2 mg [FDA]."],
  moa: "Stimulates colonic motility via 5-HT4 receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mainly renal excretion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Chronic idiopathic constipation [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["CIC", "2 mg once daily with or without food [FDA]."], ["Severe kidney impairment (CrCl under 30)", "1 mg once daily [FDA]."], ["Dialysis", "Avoid [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose with kidney step." },
  adj: { renal: "CrCl under 30: 1 mg daily; ESRD on dialysis: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: "Headache, nausea, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Intestinal perforation or obstruction, obstructive ileus, severe inflammatory bowel conditions [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Headache, abdominal pain, nausea, diarrhoea, abdominal distension, dizziness, vomiting, flatulence [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal ideation and behaviour, worsening depression [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood changes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("prucalopride", "cic", "Chronic constipation — 2 mg once daily", "PO", ADULT, "fixed", 2, 24, { formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["Stop for mood changes or suicidal thoughts"] })],
  sources: [["FDA", "Motegrity (prucalopride) tablets — FDA label (DailyMed)", P3_DM("bca1e4c6-4b2b-4876-8ab3-654629c4ff1b")], NEML_SRC],
  dose: { tagline: "5-HT4 agonist for chronic constipation — 2 mg daily (1 mg if CrCl under 30).",
    adult: [{ ind: "Chronic idiopathic constipation", text: "2 mg once daily (1 mg if CrCl under 30).", calc: ["cic"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("prussian-blue", {
  inn: "Prussian blue (ferric hexacyanoferrate II)", atc: "V03AB31", cls: "Ion-exchange antidote (caesium, thallium)",
  linked: [],
  forms: ["Capsules 500 mg (Radiogardase) [FDA]."],
  moa: "Binds caesium and thallium in the gut, interrupting enterohepatic recycling [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not absorbed [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Known or suspected internal contamination with radioactive caesium, or radioactive or non-radioactive thallium [FDA]."], paed: ["2–12 years [FDA]."] },
  adult: [["Adults and adolescents", "3 g orally three times daily, as soon as possible after contamination [FDA]."], ["Duration", "At least 30 days; guided by measured contamination [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Swallowing", "Capsules can be opened and mixed with bland food or liquid [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2–12 years: 1 g three times daily [FDA].", "Under 2 years: not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "3 g from 13 years.", calcNote: "Fixed doses by age." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Constipation slows elimination — add fibre/laxative [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Constipation, blue stools, blue teeth/mouth if capsules opened [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypokalaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Whole-body counts / urine and faeces radioactivity; potassium [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("prussian-blue", "adult", "Caesium/thallium contamination, 13 years+ — 3 g three times daily", "PO", pop(156, null, null, null), "fixed", 3000, 8, { formulations: [{ form: "capsule", strength: 500, unit: "mg", whole: true }], rounding: "6 capsules" }),
    C("prussian-blue", "child", "Caesium/thallium contamination, 2–12 years — 1 g three times daily", "PO", pop(24, 156, null, null), "fixed", 1000, 8, { formulations: [{ form: "capsule", strength: 500, unit: "mg", whole: true }], rounding: "2 capsules" })
  ],
  sources: [["FDA", "Radiogardase (Prussian blue) capsules — FDA label (DailyMed)", P3_DM("baa68c79-5f3d-468a-a510-58b9e978cd50")], NEML_SRC],
  dose: { tagline: "Antidote for radioactive caesium and thallium — 3 g three times daily (1 g in children 2–12).",
    adult: [{ ind: "Caesium / thallium contamination", text: "3 g three times daily for at least 30 days.", calc: ["adult"] }],
    child: [{ ind: "2–12 years", text: "1 g three times daily.", calc: ["child"] }] }
});

FDB_M("pseudoephedrine", {
  inn: "Pseudoephedrine", atc: "R01BA02", cls: "Sympathomimetic nasal decongestant (oral)",
  linked: [],
  forms: ["Tablets 30, 60 mg; extended-release 120 mg (12-hour) and 240 mg (24-hour) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Alpha-adrenergic vasoconstriction of nasal mucosa [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Nasal and sinus congestion from colds, hay fever or allergy (over the counter) [FDA]."], paed: ["12-hour product: not for under 12 years [FDA]."] },
  adult: [["12-hour ER (120 mg)", "1 tablet every 12 hours; no more than 2 in 24 hours [FDA]."], ["Immediate release", "60 mg every 4–6 hours; max 240 mg/day [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["12-hour product: not under 12 years [FDA].", "Decongestants are not recommended in young children [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing from 12 years.", calcNote: "Fixed OTC doses." },
  adj: { renal: "Reduce in severe impairment [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Avoid in the first trimester [UNVERIFIED-KNOWLEDGE].", other: "Not with MAOIs or within 2 weeks of stopping [FDA]. Ask a doctor first with heart disease, hypertension, thyroid disease, diabetes, prostate enlargement [FDA]." },
  tox: { human: "Agitation, hypertension, tachycardia, arrhythmia, seizures [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; benzodiazepines [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOI use within 2 weeks [FDA]."],
  ae: { common: ["Nervousness, insomnia, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypertension, tachyarrhythmia [UNVERIFIED-KNOWLEDGE]", "Ischaemic colitis, PRES/RCVS (rare) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure in hypertensive patients [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pseudoephedrine", "er12", "Nasal congestion (12-hour ER), 12 years+ — 120 mg every 12 hours", "PO", pop(144, null, null, null), "fixed", 120, 12, { formulations: [{ form: "ER tablet", strength: 120, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Max 2 tablets in 24 hours", "Stop if nervousness, dizziness or sleeplessness"] })],
  sources: [["FDA", "Pseudoephedrine HCl 12-hour tablets — FDA OTC label (DailyMed)", P3_DM("00a8327b-41f0-4498-ad13-331256b539f9")], NEML_SRC],
  dose: { tagline: "Oral decongestant — 120 mg ER every 12 hours from 12 years; avoid with MAOIs.",
    adult: [{ ind: "Nasal congestion", text: "120 mg ER every 12 h (max 240 mg/day).", calc: ["er12"] }],
    child: [{ ind: "Under 12 years", text: "Not with this product." }] }
});

FDB_M("pyridostigmine", {
  inn: "Pyridostigmine", atc: "N07AA02", cls: "Cholinesterase inhibitor",
  linked: [],
  forms: ["Tablets 60 mg [FDA].", "Extended-release 180 mg; syrup 60 mg/5 mL; injection [UNVERIFIED-KNOWLEDGE].", "30 mg tablets for military soman-nerve-agent pretreatment (separate label) [FDA]."],
  moa: "Reversibly inhibits acetylcholinesterase, raising acetylcholine at the neuromuscular junction [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short action — several doses a day [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Myasthenia gravis [FDA].", "Reversal of non-depolarising neuromuscular block (injection) [UNVERIFIED-KNOWLEDGE].", "Military: pretreatment against soman nerve agent [FDA]."], paed: ["Myasthenia gravis — used with weight-based dosing [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Myasthenia gravis", "Average ten 60 mg tablets daily, spaced through the day; mild cases one to six tablets a day; severe cases as many as twenty-five tablets a day [FDA]."], ["Titration", "Adjust size and timing to symptoms; cholinergic excess (cramps, sweating, salivation) means too much [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Soman pretreatment (military)", "Per the military label; stop and give atropine + pralidoxime at first sign of poisoning [FDA]."]],
  paed: { tiers: ["Myasthenia gravis: about 7 mg/kg/day in 5–6 doses [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing at adult weight.", calcNote: "Titrated to symptoms — no calculator." },
  adj: { renal: "Lower doses may be needed in kidney impairment [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Distinguish myasthenic from cholinergic crisis [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Cholinergic crisis: weakness, salivation, sweating, bradycardia, bronchospasm, diarrhoea [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; atropine; ventilatory support [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Mechanical intestinal or urinary obstruction [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity to anticholinesterases or bromides [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Nausea, vomiting, diarrhoea, abdominal cramps, salivation, sweating, muscle cramps, fasciculation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cholinergic crisis [UNVERIFIED-KNOWLEDGE]", "Bradycardia, bronchospasm in asthma [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Muscle strength and cholinergic side effects [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not found on the Bhutan NEML 2025 text extract [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Pyridostigmine bromide tablets 60 mg — FDA label (DailyMed)", P3_DM("0a114d99-e50b-49fe-9e0f-ccce279ffb4f")], ["FDA", "Pyridostigmine bromide 30 mg (soman pretreatment) — FDA label (DailyMed)", P3_DM("52d6f195-165a-400b-a13b-489e94bcf0b0")], NEML_SRC],
  dose: { tagline: "Cholinesterase inhibitor for myasthenia gravis — average ten 60 mg tablets a day, spread out and titrated to strength.",
    adult: [{ ind: "Myasthenia gravis", text: "One to twenty-five 60 mg tablets a day in divided doses; average ten tablets a day." }],
    child: [{ ind: "Myasthenia gravis", text: "About 7 mg/kg/day in 5–6 doses (titrate)." }] }
});

FDB_M("pyrimethamine", {
  inn: "Pyrimethamine", atc: "P01BD01", cls: "Dihydrofolate reductase inhibitor (antiprotozoal)",
  linked: [],
  forms: ["Tablets 25 mg [FDA]."],
  moa: "Inhibits parasite dihydrofolate reductase; synergistic with sulfonamides [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 4 days) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Toxoplasmosis, with a sulfonamide [FDA]."], paed: ["Toxoplasmosis, including congenital [FDA]."] },
  adult: [["Toxoplasmosis", "50–75 mg daily with 1–4 g of a sulfonamide (e.g. sulfadiazine) for 1–3 weeks, then half the dose for 4–5 more weeks [FDA]."], ["Folinic acid", "Give leucovorin with every course to protect the marrow [FDA]."]],
  paed: { tiers: ["1 mg/kg/day in 2 divided doses; after 2–4 days halve the dose and continue about 1 month, with a sulfonamide [FDA]."], transition: "Adult dosing at adult weight.", calcNote: "1 mg/kg/day in 2 doses." },
  adj: { renal: NEP, hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Folate antagonist — specialist use; give folinic acid [UNVERIFIED-KNOWLEDGE].", other: "Seizure disorders: use a small starting dose [FDA]." },
  tox: { human: "Vomiting, seizures, megaloblastic anaemia; deaths in children after accidental ingestion [FDA].", animal: LD, manage: "Leucovorin; supportive; seizure control [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]", "Megaloblastic anaemia due to folate deficiency [FDA]"],
  ae: { common: ["Anorexia, vomiting, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Folate-deficiency marrow suppression (megaloblastic anaemia, leukopenia, thrombocytopenia) [FDA]", "Severe skin reactions with the sulfonamide [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts with platelets twice weekly during treatment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("pyrimethamine", "adult", "Toxoplasmosis — 50–75 mg once daily (with sulfonamide + leucovorin)", "PO", ADULT, "fixed", 50, 24, { dose: { value: 50, value_max: 75, unit: "mg", per: "dose" }, formulations: [{ form: "tablet", strength: 25, unit: "mg", whole: true }], rounding: "whole tablets", flags: ["1–3 weeks, then half dose for 4–5 weeks", "Always with folinic acid"] }),
    C("pyrimethamine", "child", "Toxoplasmosis, child — 1 mg/kg/day in 2 doses", "PO", pop(null, 216, null, null), "mg_per_kg", 1, 12, { dose: { value: 1, unit: "mg", per: "day" }, divided_doses: 2, caps: { max_daily: 75, unit: "mg" }, formulations: [{ form: "tablet", strength: 25, unit: "mg" }], rounding: "nearest quarter tablet / compounded suspension", flags: ["After 2–4 days halve the dose for about 1 month", "With sulfonamide and folinic acid"] })
  ],
  sources: [["FDA", "Daraprim (pyrimethamine) tablets — FDA label (DailyMed)", P3_DM("f634f34b-0952-4dd3-9da3-f84b6ab823de")], NEML_SRC],
  dose: { tagline: "Antifolate for toxoplasmosis — 50–75 mg daily with a sulfonamide and folinic acid; child 1 mg/kg/day.",
    adult: [{ ind: "Toxoplasmosis", text: "50–75 mg daily with sulfadiazine + leucovorin.", calc: ["adult"] }],
    child: [{ ind: "Toxoplasmosis", text: "1 mg/kg/day in 2 doses, halved after 2–4 days.", calc: ["child"] }] }
});

FDB_M("quazepam", {
  inn: "Quazepam", atc: "N05CD10", cls: "Benzodiazepine hypnotic (long-acting)",
  linked: [],
  forms: ["Tablets 15 mg (scored) [FDA]."],
  moa: "GABA-A positive modulator (BZ1-preferring) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long-acting metabolites — next-day sedation risk [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Insomnia with difficulty falling or staying asleep [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Insomnia", "Start 7.5 mg at bedtime (half a 15 mg tablet); up to 15 mg if needed [FDA]."], ["Older or debilitated", "More sensitive — use the lowest dose [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: NEP, hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal sedation/withdrawal [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Complex sleep behaviours; no alcohol [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Somnolence, confusion, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; flumazenil with caution [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Sleep apnoea, pulmonary insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]", "Pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Daytime drowsiness, headache, fatigue, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression with opioids [FDA]", "Abuse, misuse, addiction [FDA]", "Dependence and withdrawal [FDA]", "Complex sleep behaviours [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Next-day impairment; dependence [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("quazepam", "start", "Insomnia — start 7.5 mg at bedtime", "PO", ADULT, "fixed", 7.5, 24, { formulations: [{ form: "tablet", strength: 15, unit: "mg" }], rounding: "half tablet", flags: ["Up to 15 mg if needed", "Short-term use"] })],
  sources: [["FDA", "Quazepam tablets — FDA label (DailyMed)", P3_DM("f7d63f3f-5303-48ab-bce2-35fd62c45799")], NEML_SRC],
  dose: { tagline: "Long-acting benzodiazepine hypnotic — 7.5 mg at bedtime, up to 15 mg.",
    boxedTitle: "Risks from concomitant opioid use; abuse, misuse and addiction; dependence and withdrawal reactions",
    boxed: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of these drugs in patients for whom alternative treatment options are inadequate. Limit dosages and durations to the minimum required. Follow patients for signs and symptoms of respiratory depression and sedation. The use of benzodiazepines, including Quazepam Tablets, exposes users to risks of abuse, misuse, and addiction, which can lead to overdose or death. Abuse and misuse of benzodiazepines commonly involve concomitant use of other medications, alcohol, and/or illicit substances, which is associated with an increased frequency of serious adverse outcomes. Before prescribing Quazepam Tablets and throughout treatment, assess each patient's risk for abuse, misuse, and addiction. The continued use of benzodiazepines, including Quazepam Tablets, may lead to clinically significant physical dependence. The risks of dependence and withdrawal increase with longer treatment duration and higher daily dose. Abrupt discontinuation or rapid dosage reduction of Quazepam Tablets after continued use may precipitate acute withdrawal reactions, which can be life-threatening. To reduce the risk of withdrawal reactions, use a gradual taper to discontinue Quazepam Tablets or reduce the dosage [FDA].",
    adult: [{ ind: "Insomnia", text: "7.5 mg at bedtime; up to 15 mg.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("quinapril", {
  inn: "Quinapril", atc: "C09AA06", cls: "ACE inhibitor",
  linked: [],
  forms: ["Tablets 5, 10, 20, 40 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Prodrug of quinaprilat; ACE inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypertension [FDA].", "Adjunct in heart failure [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hypertension", "10 or 20 mg once daily (not on diuretics); most need 20–80 mg/day as one or two doses; adjust every 2 weeks or more [FDA]."], ["On a diuretic", "Start 5 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Heart failure", "5 mg twice daily, titrated weekly; usual 20–40 mg/day in two doses [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Kidney (hypertension start)", "CrCl over 60: 10 mg; 30–60: 5 mg; 10–30: 2.5 mg [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult starting dose with kidney steps." },
  adj: { renal: "Start 10 mg (CrCl over 60), 5 mg (30–60), 2.5 mg (10–30) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Stop as soon as pregnancy is detected [FDA].", other: "Magnesium in tablets reduces tetracycline absorption [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "IV saline [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of ACE-inhibitor angioedema [FDA]", "With aliskiren in diabetes [FDA]", "Within 36 hours of sacubitril/valsartan [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Dizziness, cough, headache, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Angioedema [FDA]", "Hypotension [FDA]", "Hyperkalaemia, kidney function decline [FDA] [UNVERIFIED-KNOWLEDGE]", "Fetal toxicity [FDA]"] },
  monitor: ["Blood pressure, potassium, creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("quinapril", "htn", "Hypertension — start 10 mg once daily", "PO", ADULT, "fixed", 10, 24, { formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 30, crcl_max: 60, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 10, crcl_max: 29.999, action: "reduce_dose", factor: 0.25, interval_h: 24 }, { crcl_min: 0, crcl_max: 9.999, action: "avoid", note: "no label starting dose below CrCl 10 mL/min" }], flags: ["10 or 20 mg start; usual 20–80 mg/day", "On a diuretic: start 5 mg"] })],
  sources: [["FDA", "Quinapril tablets — FDA label (DailyMed)", P3_DM("da562e3b-4411-e750-e053-2a95a90ad7e5")], NEML_SRC],
  dose: { tagline: "ACE inhibitor — 10–20 mg once daily to start; usual 20–80 mg/day.",
    boxedTitle: "Fetal toxicity",
    boxed: "• When pregnancy is detected, discontinue quinapril tablets as soon as possible. • Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "10–20 mg once daily; usual 20–80 mg/day.", calc: ["htn"] }, { ind: "Heart failure", text: "5 mg twice daily, titrated." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("quinidine", {
  inn: "Quinidine", atc: "C01BA01", cls: "Class IA antiarrhythmic (also antimalarial)",
  linked: [],
  forms: ["Quinidine gluconate extended-release tablets 324 mg; quinidine sulfate tablets 200, 300 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "IV quinidine gluconate for severe malaria is no longer marketed in the US [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks sodium and potassium channels; also a blood schizonticide [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism; strong CYP2D6 inhibitor [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Conversion and prevention of atrial fibrillation/flutter [FDA].", "Suppression of documented life-threatening ventricular arrhythmias [FDA].", "Plasmodium falciparum malaria (IV, historical) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Malaria data only [FDA]."] },
  adult: [["AF conversion (ER gluconate)", "Start in hospital with ECG monitoring; e.g. 648 mg every 8 hours, increased cautiously; per label schedule [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Rate control first", "Control ventricular rate (digoxin, beta-blocker) before conversion — quinidine can speed AV conduction [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Tablets", "ER tablets may be halved; not crushed [FDA]."]],
  paed: { tiers: ["Antiarrhythmic use not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Specialist titration — no calculator." },
  adj: { renal: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Reduce dose [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Raises digoxin levels (halve digoxin) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "QT prolongation, torsades, cinchonism, hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "ECG; magnesium/pacing for torsades; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Prior thrombocytopenic purpura with quinidine/quinine [FDA] [UNVERIFIED-KNOWLEDGE]", "Complete AV block or pacemaker-dependent rhythms without pacing [FDA] [UNVERIFIED-KNOWLEDGE]", "Myasthenia gravis [FDA] [UNVERIFIED-KNOWLEDGE]", "With QT-prolonging drugs (ritonavir etc.) [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Diarrhoea (very common), nausea, cinchonism (tinnitus, headache, blurred vision) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased mortality in AF trials [FDA]", "QT prolongation and torsades [FDA] [UNVERIFIED-KNOWLEDGE]", "Immune thrombocytopenia, hepatitis, lupus-like syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG (QT); blood counts; liver tests; levels if available [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Quinidine gluconate ER tablets — FDA label (DailyMed)", P3_DM("ad2ad985-cca2-25b5-e053-2995a90a402f")], NEML_SRC],
  dose: { tagline: "Class IA antiarrhythmic — hospital initiation with ECG; raised mortality in AF trials.",
    boxedTitle: "Mortality",
    boxed: "In many trials of antiarrhythmic therapy for non-life-threatening arrhythmias, active antiarrhythmic therapy has resulted in increased mortality; the risk of active therapy is probably greatest in patients with structural heart disease. In the case of quinidine used to prevent or defer recurrence of atrial flutter/fibrillation, the best available data come from a meta-analysis described under CLINICAL PHARMACOLOGY/Clinical Effects above. In the patients studied in the trials there analyzed, the mortality associated with the use of quinidine was more than three times as great as the mortality associated with the use of placebo. Another meta-analysis, also described under CLINICAL PHARMACOLOGY/Clinical Effects, showed that in patients with various non-life-threatening ventricular arrhythmias, the mortality associated with the use of quinidine was consistently greater than that associated with the use of any of a variety of alternative antiarrhythmics [FDA].",
    adult: [{ ind: "AF/flutter; ventricular arrhythmias", text: "Specialist titration with ECG monitoring (label schedule)." }],
    child: [{ ind: "Children", text: "Not established (antiarrhythmic)." }] }
});

FDB_M("quizartinib", {
  inn: "Quizartinib", atc: "L01EX11", cls: "FLT3 kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 17.7, 26.5 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Selective FLT3-ITD inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate — halve dose with strong inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Newly diagnosed FLT3-ITD-positive AML: with induction and consolidation, then maintenance [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Induction (7+3)", "35.4 mg once daily on days 8–21 (days 6–19 with 5+2) [FDA]."], ["Consolidation", "35.4 mg once daily on days 6–19 [FDA]."], ["Maintenance", "26.5 mg daily days 1–14 of cycle 1, then 53 mg daily if QTcF 450 ms or less; up to 36 cycles [FDA]."], ["Before starting", "ECG; correct potassium and magnesium; QTcF must be 450 ms or less [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Phase-specific doses — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "REMS for QT risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "ECG monitoring; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hypokalaemia or hypomagnesaemia, long QT syndrome, history of ventricular arrhythmias or torsades [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Lymphopenia, thrombocytopenia, neutropenia, febrile neutropenia, diarrhoea, mucositis, nausea, infections [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation, torsades, cardiac arrest [FDA]", "Infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Differentiation syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG weekly during induction/consolidation and first maintenance month, then periodically; electrolytes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Vanflyta (quizartinib) — FDA label (DailyMed)", P3_DM("29cdbcfe-497d-4e78-bb7b-2d4acafe8e86")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "FLT3-ITD inhibitor for AML — 35.4 mg with chemotherapy, then 26.5–53 mg maintenance; QT monitoring.",
    boxedTitle: "QT prolongation, torsades de pointes, and cardiac arrest",
    boxed: "VANFLYTA prolongs the QT interval in a dose- and concentration-related manner. Prior to VANFLYTA administration and periodically, monitor for hypokalemia or hypomagnesemia, and correct deficiencies. Perform ECGs to monitor the QTc at baseline, weekly during induction and consolidation therapy, weekly for at least the first month of maintenance, and periodically thereafter. Torsades de pointes and cardiac arrest have occurred in patients receiving VANFLYTA. Do not administer VANFLYTA to patients with severe hypokalemia, severe hypomagnesemia, or long QT syndrome. Do not initiate treatment with VANFLYTA or escalate the VANFLYTA dose if the QT interval corrected by Fridericia's formula (QTcF) is greater than 450 ms. Monitor ECGs more frequently if concomitant use of drugs known to prolong the QT interval is required. Reduce the VANFLYTA dose when used concomitantly with strong CYP3A inhibitors, as they may increase quizartinib exposure. Because of the risk of QT prolongation, VANFLYTA is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the VANFLYTA REMS [FDA].",
    adult: [{ ind: "FLT3-ITD AML", text: "35.4 mg daily (days 8–21) with induction; 26.5 → 53 mg daily maintenance." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("rabeprazole", {
  inn: "Rabeprazole", atc: "A02BC04", cls: "Proton pump inhibitor",
  linked: [],
  forms: ["Delayed-release tablets 20 mg; sprinkle capsules 5, 10 mg (children) [FDA]."],
  moa: "Irreversibly inhibits gastric H+/K+-ATPase [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Healing and maintenance of erosive GERD; symptomatic GERD; duodenal ulcer; H. pylori eradication (with antibiotics); Zollinger–Ellison syndrome [FDA]."], paed: ["Symptomatic GERD 12 years+ (tablets); 1–11 years (sprinkle capsules) [FDA]."] },
  adult: [["Erosive GERD healing", "20 mg once daily for 4–8 weeks (another 8 weeks if not healed) [FDA]."], ["Maintenance / symptomatic GERD", "20 mg once daily [FDA]."], ["Duodenal ulcer", "20 mg once daily after breakfast for up to 4 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], ["H. pylori", "20 mg twice daily with amoxicillin 1 g and clarithromycin 500 mg twice daily for 7 days [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Zollinger–Ellison", "60 mg once daily, adjusted up to 100 mg daily or 60 mg twice daily [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["12 years+: 20 mg once daily up to 8 weeks [FDA].", "1–11 years (sprinkle): under 15 kg 5 mg daily (10 mg if needed); 15 kg and over 10 mg daily, up to 12 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Tablets from 12 years.", calcNote: "Fixed dose from 12 years." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution in severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Long-term PPI: low magnesium, B12 deficiency, fractures, C. difficile [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to rabeprazole or substituted benzimidazoles [FDA]", "With rilpivirine-containing products [FDA]"],
  ae: { common: ["Headache, abdominal pain, diarrhoea, nausea, flatulence [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Acute interstitial nephritis [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypomagnesaemia, B12 deficiency, bone fracture [FDA] [UNVERIFIED-KNOWLEDGE]", "Cutaneous/systemic lupus [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Magnesium on long-term use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("rabeprazole", "std", "GERD / ulcer, 12 years+ — 20 mg once daily", "PO", pop(144, null, null, null), "fixed", 20, 24, { formulations: [{ form: "DR tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Swallow whole", "H. pylori: 20 mg twice daily × 7 days"] })],
  sources: [["FDA", "Aciphex (rabeprazole) — FDA label (DailyMed)", P3_DM("1eb38279-0237-4967-be7a-c53a826c1138")], NEML_SRC],
  dose: { tagline: "PPI — 20 mg once daily for GERD and ulcers (twice daily in H. pylori regimens).",
    adult: [{ ind: "GERD / duodenal ulcer", text: "20 mg once daily.", calc: ["std"] }, { ind: "H. pylori", text: "20 mg twice daily with amoxicillin + clarithromycin × 7 days." }],
    child: [{ ind: "12 years+", text: "20 mg once daily.", calc: ["std"] }, { ind: "1–11 years", text: "Sprinkle capsules 5–10 mg by weight." }] }
});

FDB_M("raloxifene", {
  inn: "Raloxifene", atc: "G03XC01", cls: "Selective estrogen receptor modulator (SERM)",
  linked: [],
  forms: ["Tablets 60 mg [FDA]."],
  moa: "Oestrogen agonist on bone, antagonist on breast and uterus [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Treatment and prevention of postmenopausal osteoporosis [FDA].", "Reduction in risk of invasive breast cancer in postmenopausal women with osteoporosis or at high risk [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "60 mg once daily, any time, with or without food [FDA]."], ["Supplements", "Calcium and vitamin D if intake is low [FDA]."], ["Immobilisation", "Stop at least 72 hours before and during prolonged immobilisation [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Postmenopausal women.", calcNote: "Fixed dose." },
  adj: { renal: "Caution in moderate–severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated [FDA].", other: "Not with systemic oestrogens; cholestyramine reduces absorption [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Leg cramps, dizziness [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active or past venous thromboembolism [FDA]", "Pregnancy or possible pregnancy [FDA]", "Breastfeeding [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Hot flushes, leg cramps, peripheral oedema, flu-like symptoms, arthralgia, sweating [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Venous thromboembolism [FDA]", "Death from stroke in women with coronary disease or high risk [FDA]"] },
  monitor: ["VTE symptoms; bone density [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("raloxifene", "std", "Postmenopausal osteoporosis — 60 mg once daily", "PO", ADULT, "fixed", 60, 24, { formulations: [{ form: "tablet", strength: 60, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Calcium/vitamin D if needed", "Stop before prolonged immobilisation"] })],
  sources: [["FDA", "Evista (raloxifene) tablets — FDA label (DailyMed)", P3_DM("fcaaa6dc-74e8-4fb8-800c-5574bf0f8de9")], NEML_SRC],
  dose: { tagline: "SERM for postmenopausal osteoporosis and breast-cancer risk reduction — 60 mg daily; VTE and stroke risk.",
    boxedTitle: "Increased risk of venous thromboembolism and death from stroke",
    boxed: "Increased risk of deep vein thrombosis and pulmonary embolism have been reported with EVISTA. Women with active or past history of venous thromboembolism should not take EVISTA. Increased risk of death due to stroke occurred in a trial in postmenopausal women with documented coronary heart disease or at increased risk for major coronary events. Consider risk-benefit balance in women at risk for stroke [FDA].",
    adult: [{ ind: "Postmenopausal osteoporosis", text: "60 mg once daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("raltegravir", {
  inn: "Raltegravir", atc: "J05AJ01", cls: "HIV integrase strand transfer inhibitor (INSTI)",
  linked: [],
  forms: ["Film-coated tablets 400 mg; HD tablets 600 mg; chewable tablets 25, 100 mg; granules for suspension 100 mg — not interchangeable mg for mg [FDA]."],
  moa: "Blocks HIV integrase strand transfer [UNVERIFIED-KNOWLEDGE].",
  pk: ["UGT1A1 glucuronidation; rifampicin lowers levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["HIV-1 infection with other antiretrovirals [FDA]."], paed: ["From birth (2 kg and over) [FDA]."] },
  adult: [["Treatment-naive or suppressed", "1,200 mg (2 × 600 mg HD) once daily, or 400 mg twice daily [FDA]."], ["Treatment-experienced", "400 mg twice daily [FDA]."], ["With rifampicin", "800 mg twice daily [FDA]."]],
  paed: { tiers: ["25 kg and over: 400 mg twice daily (or 1,200 mg once daily if 40 kg+ and naive/suppressed) [FDA].", "3 kg to under 25 kg (4 weeks+): chewable tablet or suspension by weight (label table) [FDA].", "Neonates 2 kg+: suspension by weight (label table) [FDA]."], transition: "400 mg twice daily from 25 kg.", calcNote: "Fixed 400 mg from 25 kg; weight tables below." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No change in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Used in pregnancy (400 mg twice daily) [UNVERIFIED-KNOWLEDGE].", other: "Separate from aluminium/magnesium antacids (not recommended) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Insomnia, headache, nausea, fatigue, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe skin and hypersensitivity reactions (SJS/TEN, DRESS) [FDA] [UNVERIFIED-KNOWLEDGE]", "Myopathy/rhabdomyolysis, raised CK [FDA] [UNVERIFIED-KNOWLEDGE]", "Immune reconstitution syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Viral load, CD4; CK if symptoms [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("raltegravir", "bid", "HIV, 25 kg+ — 400 mg twice daily", "PO", pop(null, null, 25, null), "fixed", 400, 12, { formulations: [{ form: "tablet", strength: 400, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["With rifampicin: 800 mg twice daily"] }),
    C("raltegravir", "od", "HIV, naive/suppressed adults and 40 kg+ — 1,200 mg once daily (2 × 600 mg HD)", "PO", pop(null, null, 40, null), "fixed", 1200, 24, { formulations: [{ form: "HD tablet", strength: 600, unit: "mg", whole: true }], rounding: "2 tablets", flags: ["HD tablets only"] })
  ],
  sources: [["FDA", "Isentress / Isentress HD (raltegravir) — FDA label (DailyMed)", P3_DM("7e659505-c902-4906-9461-1cc83e2236d2")], NEML_SRC],
  dose: { tagline: "Integrase inhibitor for HIV — 400 mg twice daily or 1,200 mg once daily; weight tables in children.",
    adult: [{ ind: "HIV-1", text: "400 mg twice daily, or 1,200 mg once daily (naive/suppressed).", calc: ["bid", "od"] }],
    child: [{ ind: "25 kg and over", text: "400 mg twice daily.", calc: ["bid"] }, { ind: "Under 25 kg / neonates", text: "Chewable or suspension by weight (label tables)." }] }
});

FDB_M("ramelteon", {
  inn: "Ramelteon", atc: "N05CH02", cls: "Melatonin receptor agonist (MT1/MT2)",
  linked: [],
  forms: ["Tablets 8 mg [FDA]."],
  moa: "Melatonin receptor agonist promoting sleep onset [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP1A2 — fluvoxamine contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Insomnia with difficulty falling asleep [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Insomnia", "8 mg within 30 minutes of going to bed; not with or right after a high-fat meal; max 8 mg/day [FDA]."], ["Hepatic", "Severe: not recommended; moderate: caution [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: not recommended [FDA].", pregnancy: NEP, other: "Not with fluvoxamine [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of angioedema with ramelteon [FDA] [UNVERIFIED-KNOWLEDGE]", "With fluvoxamine [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Somnolence, dizziness, fatigue, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Angioedema and anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Complex sleep behaviours [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised prolactin, low testosterone [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [C("ramelteon", "std", "Insomnia (sleep onset) — 8 mg at bedtime", "PO", ADULT, "fixed", 8, 24, { formulations: [{ form: "tablet", strength: 8, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Within 30 min of bed; not after a high-fat meal", "Max 8 mg/day"] })],
  sources: [["FDA", "Ramelteon tablets — FDA label (DailyMed)", P3_DM("4c48076c-565a-423b-9bad-eea84aa32746")], NEML_SRC],
  dose: { tagline: "Melatonin agonist for sleep-onset insomnia — 8 mg at bedtime.",
    adult: [{ ind: "Sleep-onset insomnia", text: "8 mg within 30 min of bedtime.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ramipril", {
  inn: "Ramipril", atc: "C09AA05", cls: "ACE inhibitor",
  linked: [],
  forms: ["Capsules 1.25, 2.5, 5, 10 mg [FDA]."],
  moa: "Prodrug of ramiprilat; ACE inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Ramiprilat excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypertension [FDA].", "Reduce risk of MI, stroke and cardiovascular death in high-risk patients aged 55+ [FDA].", "Heart failure after MI [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hypertension", "2.5 mg once daily (not on diuretics); usual 2.5–20 mg/day as one or two doses [FDA]."], ["Cardiovascular risk reduction", "2.5 mg once daily for 1 week, 5 mg for 3 weeks, then 10 mg once daily [FDA]."], ["Heart failure after MI", "2.5 mg twice daily, increasing to 5 mg twice daily [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Kidney (CrCl 40 or less)", "25% of the usual dose; hypertension start 1.25 mg once daily, max 5 mg [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "CrCl 40 or less: 1.25 mg start (25% of usual dose), max 5 mg [FDA].", hepatic: "Caution — reduced conversion [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Stop as soon as pregnancy is detected [FDA].", other: "Not with aliskiren in diabetes; 36 h gap from sacubitril/valsartan [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "IV saline [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of ACE-inhibitor angioedema [FDA]", "With aliskiren in diabetes [FDA]", "Within 36 hours of sacubitril/valsartan [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Cough, dizziness, hypotension, headache, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Angioedema [FDA]", "Hypotension [FDA]", "Hyperkalaemia, kidney function decline [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia (class) [FDA] [UNVERIFIED-KNOWLEDGE]", "Fetal toxicity [FDA]"] },
  monitor: ["Blood pressure, potassium, creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("ramipril", "htn", "Hypertension / CV risk — start 2.5 mg once daily", "PO", ADULT, "fixed", 2.5, 24, { formulations: [{ form: "capsule", strength: 2.5, unit: "mg", whole: true }], rounding: "1 capsule", renal: [{ crcl_min: 0, crcl_max: 40, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["Hypertension usual 2.5–20 mg/day", "CV risk: 2.5 → 5 → 10 mg"] })],
  sources: [["FDA", "Ramipril capsules — FDA label (DailyMed)", P3_DM("245d3580-77c6-4c0f-b324-c8514b792c59")], NEML_SRC],
  dose: { tagline: "ACE inhibitor — 2.5 mg daily to start; 10 mg for cardiovascular protection; 1.25 mg if CrCl 40 or less.",
    boxedTitle: "Fetal toxicity",
    boxed: "When pregnancy is detected, discontinue ramipril as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "2.5 mg daily; usual 2.5–20 mg/day.", calc: ["htn"] }, { ind: "CV risk reduction", text: "2.5 mg × 1 week, 5 mg × 3 weeks, then 10 mg daily.", calc: ["htn"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ramucirumab", {
  inn: "Ramucirumab", atc: "L01FG02", cls: "Anti-VEGFR2 monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Injection 10 mg/mL (100, 500 mg vials) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks VEGF receptor 2, inhibiting angiogenesis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Gastric/GEJ adenocarcinoma, NSCLC (with erlotinib or docetaxel), colorectal cancer (with FOLFIRI), HCC with AFP 400 ng/mL or more [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Gastric (alone or with paclitaxel)", "8 mg/kg IV every 2 weeks [FDA]."], ["NSCLC with erlotinib", "10 mg/kg every 2 weeks [FDA]."], ["NSCLC with docetaxel", "10 mg/kg on day 1 of a 21-day cycle [FDA]."], ["Colorectal with FOLFIRI", "8 mg/kg every 2 weeks [FDA]."], ["HCC", "8 mg/kg every 2 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Premedication", "H1 antagonist before each infusion [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — mg/kg." },
  adj: { renal: NEP, hepatic: "Worsening in Child-Pugh B/C cirrhosis [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Withhold before surgery; stop for GI perforation or severe bleeding [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hypertension, diarrhoea, fatigue, proteinuria, peripheral oedema, epistaxis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Haemorrhage [FDA] [UNVERIFIED-KNOWLEDGE]", "GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Arterial thromboembolism [FDA] [UNVERIFIED-KNOWLEDGE]", "Impaired wound healing, RPLS, nephrotic syndrome, infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure every 2 weeks; urine protein; thyroid [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("ramucirumab", "m8", "Gastric / colorectal / HCC — 8 mg/kg IV every 2 weeks", "IV", ADULT, "mg_per_kg", 8, 336, { formulations: [{ form: "vial", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["H1 premedication"] }),
    C("ramucirumab", "m10", "NSCLC — 10 mg/kg IV (every 2 weeks with erlotinib; day 1 every 21 days with docetaxel)", "IV", ADULT, "mg_per_kg", 10, 336, { formulations: [{ form: "vial", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["With docetaxel: every 21 days"] })
  ],
  sources: [["FDA", "Cyramza (ramucirumab) — FDA label (DailyMed)", P3_DM("c6080942-dee6-423e-b688-1272c2ae90d4")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-VEGFR2 antibody — 8 mg/kg every 2 weeks (10 mg/kg in NSCLC).",
    cautionTitle: "Use with care",
    caution: "Bleeding, GI perforation, arterial thrombosis and poor wound healing can occur. Control blood pressure and check urine protein [FDA].",
    adult: [{ ind: "Gastric / colorectal / HCC", text: "8 mg/kg IV every 2 weeks.", calc: ["m8"] }, { ind: "NSCLC", text: "10 mg/kg IV.", calc: ["m10"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ranibizumab", {
  inn: "Ranibizumab", atc: "S01LA04", cls: "Anti-VEGF antibody fragment (intravitreal)",
  linked: [],
  forms: ["Intravitreal injection 10 mg/mL (0.5 mg/0.05 mL) and 6 mg/mL (0.3 mg/0.05 mL); biosimilars [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds VEGF-A, reducing vascular leakage and neovascularisation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal systemic exposure [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Neovascular (wet) AMD [FDA].", "Macular oedema after retinal vein occlusion [FDA].", "Diabetic macular oedema and diabetic retinopathy (0.3 mg) [FDA] [UNVERIFIED-KNOWLEDGE].", "Myopic choroidal neovascularisation [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Wet AMD", "0.5 mg intravitreally once a month; or 3 monthly doses then less often, or every 3 months after 4 monthly doses (less effective) [FDA]."], ["RVO macular oedema", "0.5 mg monthly [FDA] [UNVERIFIED-KNOWLEDGE]."], ["DME / diabetic retinopathy", "0.3 mg monthly [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Procedure", "Aseptic intravitreal injection by an ophthalmologist; check IOP after [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Intravitreal — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Ocular or periocular infection [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Conjunctival haemorrhage, eye pain, vitreous floaters, raised IOP [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Endophthalmitis and retinal detachment [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised intraocular pressure [FDA] [UNVERIFIED-KNOWLEDGE]", "Arterial thromboembolic events [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["IOP and retinal perfusion after injection; symptoms of endophthalmitis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Lucamzi (ranibizumab biosimilar) — FDA label (DailyMed)", P3_DM("68e44187-997a-4642-96b3-d082ac7cd38d")], NEML_SRC],
  dose: { tagline: "Intravitreal anti-VEGF for wet AMD and macular oedema — 0.5 mg monthly (0.3 mg in diabetic eye disease).",
    adult: [{ ind: "Wet AMD / RVO", text: "0.5 mg intravitreal monthly." }, { ind: "Diabetic macular oedema", text: "0.3 mg monthly." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ranitidine", {
  inn: "Ranitidine", atc: "A02BA02", cls: "H2-receptor antagonist",
  linked: [],
  forms: ["Tablets 75, 150 mg (over the counter, reformulated) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks gastric H2 receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted by the kidneys [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Relief and prevention of heartburn (OTC label) [FDA]."], paed: ["Under 12 years: ask a doctor [FDA]."] },
  adult: [["Heartburn", "1 tablet with water; to prevent, 30–60 minutes before trigger food or drink; up to twice daily, no more than 2 tablets in 24 hours [FDA]."], ["Availability", "Ranitidine was withdrawn worldwide in 2020 over NDMA (a probable carcinogen); some reformulated products have since returned in the US [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Under 12 years: ask a doctor [FDA]."], transition: "Same from 12 years.", calcNote: "Fixed OTC dose." },
  adj: { renal: "Reduce dose in kidney impairment (prescription use) [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Use famotidine or a PPI instead where ranitidine is unavailable [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Allergy to ranitidine or other acid reducers [FDA]."],
  ae: { common: ["Headache, constipation, diarrhoea [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatitis, blood dyscrasias, confusion in older adults (rare) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: { neml: "Removed from the Bhutan NEML 2025 (150 mg tablet and 25 mg/mL injection) because of NDMA contamination concerns [BT-NEML].", strengths: "No longer supplied through the Bhutan formulary [BT-NEML].", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [C("ranitidine", "otc", "Heartburn, 12 years+ — 1 tablet (150 mg) up to twice daily", "PO", pop(144, null, null, null), "fixed", 150, 12, { formulations: [{ form: "tablet", strength: 150, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["No more than 2 tablets in 24 hours", "Removed from the Bhutan NEML (NDMA)"] })],
  sources: [["FDA", "Ranitidine tablets (OTC) — FDA label (DailyMed)", P3_DM("aab81d9f-397d-49fb-8083-77a1872cc71f")], NEML_SRC],
  dose: { tagline: "H2 blocker — removed from the Bhutan NEML over NDMA; use famotidine or a PPI instead.",
    cautionTitle: "Use with care",
    caution: "Ranitidine was withdrawn in 2020 because of NDMA contamination and removed from the Bhutan NEML 2025. Prefer famotidine or a PPI [BT-NEML].",
    adult: [{ ind: "Heartburn (OTC)", text: "1 tablet up to twice daily; max 2 in 24 h.", calc: ["otc"] }],
    child: [{ ind: "Under 12 years", text: "Ask a doctor." }] }
});

FDB_M("rasagiline", {
  inn: "Rasagiline", atc: "N04BD02", cls: "Selective irreversible MAO-B inhibitor",
  linked: [],
  forms: ["Tablets 0.5, 1 mg [FDA]."],
  moa: "Inhibits MAO-B, raising striatal dopamine [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP1A2 metabolism — ciprofloxacin raises levels [FDA]."],
  ind: { adult: ["Parkinson's disease, alone or with other medicines [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Monotherapy / adjunct without levodopa", "1 mg once daily [FDA]."], ["With levodopa", "0.5 mg once daily, up to 1 mg [FDA]."], ["With ciprofloxacin or other CYP1A2 inhibitors", "0.5 mg once daily [FDA]."], ["Mild hepatic impairment", "0.5 mg once daily; moderate–severe: do not use [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild: 0.5 mg; moderate–severe: avoid [FDA].", pregnancy: NEP, other: "Avoid pethidine, tramadol, methadone, dextromethorphan, St John's wort, other MAOIs (14-day gap) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension or hypertension, agitation, serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pethidine, tramadol, methadone, propoxyphene, dextromethorphan, St John's wort, cyclobenzaprine, other MAOIs [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Headache, arthralgia, dyspepsia, dyskinesia (with levodopa), orthostatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serotonin syndrome with interacting drugs [FDA] [UNVERIFIED-KNOWLEDGE]", "Falling asleep during activities [FDA] [UNVERIFIED-KNOWLEDGE]", "Hallucinations, impulse control disorders [FDA] [UNVERIFIED-KNOWLEDGE]", "Melanoma (skin checks) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; skin; sleepiness [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("rasagiline", "mono", "Parkinson's (monotherapy) — 1 mg once daily", "PO", ADULT, "fixed", 1, 24, { formulations: [{ form: "tablet", strength: 1, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["With levodopa or ciprofloxacin / mild liver impairment: 0.5 mg"] })],
  sources: [["FDA", "Azilect (rasagiline) tablets — FDA label (DailyMed)", P3_DM("a40d0e73-3f9f-4b01-979d-402c9cdaeb60")], NEML_SRC],
  dose: { tagline: "MAO-B inhibitor for Parkinson's — 1 mg daily (0.5 mg with levodopa); serotonergic interactions.",
    adult: [{ ind: "Parkinson's disease", text: "1 mg once daily (0.5 mg with levodopa).", calc: ["mono"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("rasburicase", {
  inn: "Rasburicase", atc: "V03AF07", cls: "Recombinant urate oxidase",
  linked: [],
  forms: ["Powder for injection 1.5 mg and 7.5 mg vials with diluent [FDA]."],
  moa: "Converts uric acid to soluble allantoin [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Initial management of plasma uric acid in leukaemia, lymphoma and solid tumours receiving anticancer therapy expected to cause tumour lysis [FDA]."], paed: ["Same, from 1 month [FDA]."] },
  adult: [["Tumour lysis prevention/treatment", "0.2 mg/kg IV over 30 minutes once daily for up to 5 days [FDA]."], ["Course", "One course only; not beyond 5 days [FDA]."], ["Blood samples", "Uric acid samples: pre-chilled heparinised tube, on ice, assayed within 4 hours (drug keeps working in the tube) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Before use", "Screen higher-risk patients for G6PD deficiency [FDA]."]],
  paed: { tiers: ["1 month and over: 0.2 mg/kg IV once daily up to 5 days [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Never as IV bolus [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["G6PD deficiency [FDA]", "History of anaphylaxis, haemolysis or methaemoglobinaemia with rasburicase [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Vomiting, nausea, fever, peripheral oedema, anxiety, headache, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Haemolysis in G6PD deficiency [FDA]", "Methaemoglobinaemia [FDA]", "Falsely low uric acid if samples are not chilled [FDA]"] },
  monitor: ["Uric acid (chilled samples); haemolysis; methaemoglobin if symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("rasburicase", "std", "Tumour lysis — 0.2 mg/kg IV once daily (up to 5 days)", "IV", pop(1, null, null, null), "mg_per_kg", 0.2, 24, { formulations: [{ form: "reconstituted", strength: 1.5, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Over 30 minutes; never a bolus", "Screen for G6PD deficiency first"] })],
  sources: [["FDA", "Elitek (rasburicase) — FDA label (DailyMed)", P3_DM("0ae10bc4-6b65-402f-9db5-2d7753054922")], NEML_SRC],
  dose: { tagline: "Urate oxidase for tumour lysis — 0.2 mg/kg IV daily up to 5 days; never in G6PD deficiency.",
    boxedTitle: "Hypersensitivity reactions, hemolysis, methemoglobinemia, and interference with uric acid measurements",
    boxed: "Hypersensitivity Reactions Elitek can cause serious and fatal hypersensitivity reactions including anaphylaxis. Immediately and permanently discontinue Elitek in patients who experience a serious hypersensitivity reaction. Hemolysis Do not administer Elitek to patients with glucose-6-phosphate dehydrogenase (G6PD) deficiency. Immediately and permanently discontinue Elitek in patients developing hemolysis. Screen patients at higher risk for G6PD deficiency (e.g., patients of African or Mediterranean ancestry) prior to starting Elitek. Methemoglobinemia Elitek can result in methemoglobinemia in some patients. Immediately and permanently discontinue Elitek in patients developing methemoglobinemia. Interference with Uric Acid Measurements Elitek enzymatically degrades uric acid in blood samples left at room temperature. Collect blood samples in prechilled tubes containing heparin and immediately immerse and maintain sample in an ice water bath. Assay plasma samples within 4 hours of collection [FDA].",
    adult: [{ ind: "Tumour lysis syndrome", text: "0.2 mg/kg IV daily up to 5 days.", calc: ["std"] }],
    child: [{ ind: "1 month and over", text: "0.2 mg/kg IV daily up to 5 days.", calc: ["std"] }] }
});

})(); // end P-3 scope

/* Brand names — BATCH P3 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"rabeprazole":{"IN":[["Rebozen","Leeford Healthcare Ltd","Rebozen 20Mg Strip Of 10 Tablets"],["Cyra","Systopic Laboratories","Cyra 20Mg Strip Of 10 Tablets"]],"BD":[["Rabipep","Novatek Pharmaceuticals Ltd","20 mg"],["Rexiet","Labaid Pharma Ltd","10 mg"],["SB-Rabec","Sunman-Birdem Pharma Ltd","20 mg"]],"src":["https://pharmeasy.in/online-medicine-order/rebozen-20mg-tablet-16393","https://pharmeasy.in/online-medicine-order/cyra-20mg-strip-of-10-tablets-42557","https://medex.com.bd/brands/27223/rabipep-20-mg-ec-tablet","https://medex.com.bd/brands/26964/rexiet-10-mg-sprinkle-capsule","https://medex.com.bd/brands/24048/sb-rabec-20-mg-ec-tablet"]},"raloxifene":{"IN":[["Ralista","Cipla Limited","Ralista 60Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/ralista-60mg-tablet-6314"]},"raltegravir":{"IN":[["Isentress","Msd Pharmaceuticals Indian Private Ltd","Isentress 400Mg Bottle Of 60 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/isentress-400mg-bottle-of-60-tablets-20350"]},"ramelteon":{"IN":[["Ramitax","Ranbaxy Laboratories (sun Pharma)","Ramitax Strip Of 10 Tablets"]],"BD":[["Ramelta","Incepta Pharmaceuticals Ltd","8 mg"]],"src":["https://pharmeasy.in/online-medicine-order/ramitax-tablet-22932","https://medex.com.bd/brands/26057/ramelta-8-mg-tablet"]},"ramipril":{"IN":[["Rami Race","Knoll Healthcare Pvt Ltd","Rami Race 2.5Mg Strip Of 10 Tablets"],["Cardace","Emcure Pharmaceuticals Ltd","Cardace 1.25Mg Strip Of 15 Tablets"],["Ramistar","Lupin","Ramistar 1.25Mg Strip Of 15 Tablets"]],"BD":[["Primace","Beximco Pharmaceuticals PLC","10 mg"],["Unipril","ACME Laboratories Ltd","1.25 mg"],["Mypril","Eskayef Pharmaceuticals Ltd","2.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/rami-race-2-5mg-tablet-15991","https://pharmeasy.in/online-medicine-order/cardace-1-25mg-tablet-15-s-208754","https://pharmeasy.in/online-medicine-order/ramistar-1-25mg-tab-15-s-206503","https://medex.com.bd/brands/31887/primace-10-mg-tablet","https://medex.com.bd/brands/24061/unipril-125-mg-tablet","https://medex.com.bd/brands/24067/mypril-25-mg-tablet"]},"ramucirumab":{"IN":[],"BD":[["Cyramza","Healthcare Pharmaceuticals Ltd","10 mg/ml"]],"src":["https://medex.com.bd/brands/31235/cyramza-10-mg-iv-infusion"]},"ranibizumab":{"IN":[["Razumab","Intas Pharmaceuticals Ltd","Razumab 2.3Mg Vial Of 0.23Ml Solution For Injection"],["Accentrix","Novartis India Ltd","Accentrix Vial Of 1 Solution For Injection"],["Oceva","Sun Pharma","Oceva 10Mg Vial Of 0.23Ml Solution For Injection"]],"BD":[["Lucentis","Nevian Lifescience PLC","0.5 mg/0.05 ml"]],"src":["https://pharmeasy.in/online-medicine-order/razumab-2-3-mg-injection-0-23-ml-199129","https://pharmeasy.in/online-medicine-order/accentrix-inj-vial-1-s-191952","https://pharmeasy.in/online-medicine-order/oceva-10-mg-injection-1-no-s-4121072","https://medex.com.bd/brands/16219/lucentis-05-mg-injection"]},"ranitidine":{"IN":[["Truetidine","Avighna Medicare Pvt Ltd","Truetidine 150Mg Strip Of 30 Tablets"],["Rantac","J B Chemicals And Pharmaceuticals","Rantac 300Mg Strip Of 30 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/truetidine-150-30tab-3751982","https://pharmeasy.in/online-medicine-order/rantac-300mg-strip-of-30-tablets-189428"]},"rasagiline":{"IN":[["Rasagail","Steris Healthcare","Rasagail 1Mg Strip Of 10 Tablets"],["Rasaglide","Chemo Healthcare Pvt Ltd","Rasaglide 0.5Mg Strip Of 10 Tablets"],["Rasipar","Ajanta Pharma Limited","Rasipar 1Mg Strip Of 10 Tablets"]],"BD":[["Rasalet","Square Pharmaceuticals PLC","0.5 mg"],["Ragil","Eskayef Pharmaceuticals Ltd","0.5 mg"],["Rasagil","Healthcare Pharmaceuticals Ltd","0.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/rasagail-1mg-strip-of-10-tablets-4489959","https://pharmeasy.in/online-medicine-order/rasaglide-0-5mg-strip-of-10-tablets-4505376","https://pharmeasy.in/online-medicine-order/rasipar-1mg-strip-of-10-tablets-83925","https://medex.com.bd/brands/1119/rasalet-05-mg-tablet","https://medex.com.bd/brands/29005/ragil-05-mg-tablet","https://medex.com.bd/brands/29223/rasagil-05-mg-tablet"]},"rasburicase":{"IN":[["Rasbelon","Celon Laboratories Ltd","Rasbelon 1.5Mg Dry Vial Of 1 Powder For Injection"],["Rasby","Intas Pharmaceuticals Ltd","Rasby 1000/500 Mg Infusion 1"],["Fasturtec","Emcure Pharmaceuticals Ltd","Fasturtec 1.5 Mg Injection 3"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/rasbelon-1-5-mg-injection-1-no-s-3741336","https://pharmeasy.in/online-medicine-order/rasby-1000-500-mg-infusion-1-199856","https://pharmeasy.in/online-medicine-order/fasturtec-1-5-mg-injection-3-199650"]},"propafenone":{"IN":[["Pradil","Emcure Pharmaceuticals Ltd","Pradil 150Mg Strip Of 10 Tablets"]],"BD":[["Rythmosin","UniMed UniHealth Pharmaceuticals Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/pradil-150mg-tablet-9398","https://medex.com.bd/brands/2451/rythmosin-150-mg-tablet"]},"propylthiouracil":{"IN":[],"BD":[["Thiocil","Incepta Pharmaceuticals Ltd","50 mg"]],"src":["https://medex.com.bd/brands/33820/thiocil-50-mg-tablet"]},"proxymetacaine":{"IN":[["P Caine","Entod Pharmaceuticals Pvt Ltd","P Caine Eye Drops 5Ml"],["Paracain","Sunways (india) Pvt Ltd","Paracain 0.5% Bottle Of 5Ml Eye Drops"]],"BD":[["P-caine","Popular Pharmaceuticals PLC","0.5%"]],"src":["https://pharmeasy.in/online-medicine-order/p-caine-eye-drops-5ml-85526","https://pharmeasy.in/online-medicine-order/paracain-0-5-eye-drops-5ml-25877","https://medex.com.bd/brands/16230/p-caine-05-eye-drop"]},"prucalopride":{"IN":[["Pruvict","Torrent Pharmaceuticals Ltd","Pruvict 2Mg Strip Of 10 Tablets"],["Pruease","Sun Pharma","Pruease 2Mg Strip Of 10 Tablets"]],"BD":[["Prucon","Advanced Chemical Industries PLC","2 mg"],["Laxitab","NIPRO JMI Pharma Ltd","2 mg"],["Prucalo","Opsonin Pharma Ltd","1 mg"]],"src":["https://pharmeasy.in/online-medicine-order/pruvict-2mg-strip-of-10-tablets-174003","https://pharmeasy.in/online-medicine-order/pruease-2mg-strip-of-10-tablets-192888","https://medex.com.bd/brands/33896/prucon-2-mg-tablet","https://medex.com.bd/brands/33378/laxitab-2-mg-tablet","https://medex.com.bd/brands/33379/prucalo-1-mg-tablet"]},"pyridostigmine":{"IN":[["Gravitor","Sun Pharma","Gravitor 60Mg Strip Of 10 Tablets"],["Distinon","Samarth Life Sciences Pvt Ltd","Distinon 60Mg Strip Of 10 Tablets"]],"BD":[["Dostimid","UniMed UniHealth Pharmaceuticals Ltd","60 mg"],["Pyrostig","Popular Pharmaceuticals PLC","60 mg"]],"src":["https://pharmeasy.in/online-medicine-order/gravitor-60mg-strip-of-10-tablets-49449","https://pharmeasy.in/online-medicine-order/distinon-60mg-strip-of-10-tablets-43964","https://medex.com.bd/brands/11704/dostimid-60-mg-tablet","https://medex.com.bd/brands/11705/pyrostig-60-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
