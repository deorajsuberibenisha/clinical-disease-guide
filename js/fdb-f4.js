/* Clinical Disease Guide — Drug monograph database, block F–G, batch F-4 (25 Nov 2026).
   The end of F (frovatriptan … futibatinib) and the start of G. Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments
   in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text copied from the label by _work/tools/fdb-boxed-fill.js. Set IDs copied from saved label JSONs (never typed). */

const F4_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const F4_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const F4_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const F4_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const F4_NEP = "Not established in primary source. [NEP]";
const F4_LD = "Animal LD50: Not established in primary source. [NEP]";
const F4_LOC = { neml: F4_NOT, strengths: "—", stg: F4_NEP };
const F4_ONC = "Oncology specialist only — dosing, dose changes for toxicity and monitoring follow the full label and the treating protocol.";

FDB_M("frovatriptan", {
  inn: "Frovatriptan", atc: "N02CC07", cls: "Triptan (5-HT1B/1D agonist)",
  linked: [],
  forms: ["Tablet 2.5 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Serotonin 5-HT1B/1D agonist: constricts cranial vessels and inhibits trigeminal neuropeptide release [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 26 hours) compared with other triptans [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute treatment of migraine with or without aura in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Migraine attack", "2.5 mg with fluid; if the migraine returns after relief, a second tablet at least 2 hours later; maximum 7.5 mg (3 tablets) in 24 hours [FDA]."], ["No response", "A second dose is not shown to help an attack that did not respond [FDA]."], ["Not for prevention", "Acute treatment only [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: F4_NEP, pregnancy: F4_NEP, other: "Serotonin syndrome with SSRIs or SNRIs; do not use within 24 hours of another triptan or ergot [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive; ECG monitoring [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Ischaemic coronary artery disease or coronary vasospasm [FDA].", "Wolff–Parkinson–White or other accessory-pathway arrhythmias [FDA].", "History of stroke, TIA or hemiplegic or basilar migraine [FDA].", "Peripheral vascular disease; ischaemic bowel disease; uncontrolled hypertension [FDA] [UNVERIFIED-KNOWLEDGE].", "Another triptan or ergot within 24 hours [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dizziness, fatigue, paraesthesia, dry mouth, chest or throat tightness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myocardial ischaemia, infarction, arrhythmia [FDA]", "Stroke [FDA]", "Serotonin syndrome [FDA]", "Medication-overuse headache [FDA]"] },
  monitor: ["Cardiovascular risk assessment before first use in at-risk patients [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [
    { drug: "frovatriptan", indication_id: "migraine", label: "Migraine attack — 2.5 mg", route: "PO", population: F4_ADULT, basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 2.5, max_daily: 7.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2.5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["May repeat after at least 2 h if migraine returns", "Maximum 3 tablets (7.5 mg) in 24 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Frovatriptan succinate tablets — FDA label (DailyMed)", F4_DM("92c91060-c06e-4a8a-b586-a3fb25c33433")], F4_BT],
  dose: { tagline: "Long-acting triptan for migraine attacks — not with heart disease.",
    adult: [{ ind: "Migraine attack", text: "2.5 mg; repeat after at least 2 h if it returns; maximum 7.5 mg/day.", calc: ["migraine"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("fruquintinib", {
  inn: "Fruquintinib", atc: "L01EK04", cls: "VEGFR kinase inhibitor (antineoplastic)",
  linked: [],
  forms: ["Capsules 1 mg, 5 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits VEGF receptors 1, 2 and 3 [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F4_NEP],
  ind: { adult: ["Metastatic colorectal cancer after fluoropyrimidine, oxaliplatin and irinotecan chemotherapy, anti-VEGF therapy and, if RAS wild-type, anti-EGFR therapy [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Metastatic colorectal cancer", "5 mg once daily on days 1–21 of each 28-day cycle, until progression or unacceptable toxicity; swallow whole [FDA]."], ["Missed dose", "Take if less than 12 hours late [FDA]."], ["Specialist", F4_ONC]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Oncology — no calculator." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: "Embryo-fetal toxicity — effective contraception [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Control blood pressure before starting; withhold for surgery and active infection [FDA]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Hypertension, palmar-plantar erythrodysaesthesia, proteinuria, dysphonia, fatigue, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Haemorrhage [FDA]", "Infections [FDA]", "GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Impaired wound healing; arterial thromboembolism [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, urine protein, liver tests, bleeding [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Fruzaqla (fruquintinib) — FDA label (DailyMed)", F4_DM("186d786e-dc8a-45f2-b5e1-01ac0201879f")], F4_BT],
  dose: { tagline: "Oral VEGFR inhibitor for refractory metastatic colorectal cancer.",
    adult: [{ ind: "Metastatic colorectal cancer", text: "5 mg once daily, days 1–21 of each 28-day cycle." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("fulvestrant", {
  inn: "Fulvestrant", atc: "L02BA03", cls: "Selective oestrogen-receptor degrader (antineoplastic)",
  linked: [],
  forms: ["Injection 250 mg/5 mL prefilled syringe (IM) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds and degrades the oestrogen receptor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life; monthly IM dosing after loading [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Postmenopausal HR-positive advanced breast cancer, alone or with a CDK4/6 inhibitor (ribociclib and others) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Advanced breast cancer", "500 mg IM as two 5 mL injections (one in each buttock, 1–2 minutes each) on days 1, 15 and 29, then once monthly [FDA]."], ["Moderate hepatic impairment", "250 mg (one 5 mL injection) on days 1, 15 and 29, then monthly [FDA]."], ["Specialist", F4_ONC]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Fixed IM dose." },
  adj: { renal: F4_NEP, hepatic: "Moderate impairment: 250 mg [FDA].", pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Caution with bleeding disorders or anticoagulants (IM injection) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to fulvestrant or components (urticaria, angioedema reported) [FDA]."],
  ae: { common: ["Injection-site pain, nausea, fatigue, hot flushes, joint pain, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Injection-site sciatica or neuralgia [FDA] [UNVERIFIED-KNOWLEDGE]", "Bleeding at the injection site [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests; response [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Cligavyx (fulvestrant) — FDA label (DailyMed)", F4_DM("e20d8ca3-8837-4003-8b01-1ebec342062a")], F4_BT],
  dose: { tagline: "Monthly IM oestrogen-receptor degrader for advanced breast cancer.",
    adult: [{ ind: "Advanced breast cancer", text: "500 mg IM (2 × 5 mL) on days 1, 15, 29, then monthly; 250 mg in moderate hepatic impairment." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("futibatinib", {
  inn: "Futibatinib", atc: "L01EN04", cls: "FGFR kinase inhibitor (antineoplastic)",
  linked: [],
  forms: ["Tablet 4 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Irreversible FGFR1–4 inhibitor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F4_NEP],
  ind: { adult: ["Previously treated unresectable or metastatic intrahepatic cholangiocarcinoma with an FGFR2 fusion or rearrangement (accelerated approval) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Cholangiocarcinoma (FGFR2)", "20 mg once daily until progression or unacceptable toxicity; swallow whole; confirm FGFR2 fusion first [FDA]."], ["Hyperphosphataemia", "Phosphate 5.5–7 mg/dL: continue and start phosphate-lowering therapy, check weekly; above 7: adjust therapy and dose per label [FDA]."], ["Specialist", F4_ONC]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Oncology — no calculator." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A and P-gp inhibitors or inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Hyperphosphataemia, nail toxicity, alopecia, dry mouth and eyes, diarrhoea, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Retinal pigment epithelial detachment [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe hyperphosphataemia and soft-tissue mineralisation [FDA]"] },
  monitor: ["Serum phosphate; eye examinations at baseline and regularly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Lytgobi (futibatinib) — FDA label (DailyMed)", F4_DM("0b1332a1-0581-4707-9bf6-1eccfa39bef4")], F4_BT],
  dose: { tagline: "FGFR inhibitor for FGFR2-fusion cholangiocarcinoma — watch phosphate and eyes.",
    adult: [{ ind: "Intrahepatic cholangiocarcinoma (FGFR2)", text: "20 mg once daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("galantamine", {
  inn: "Galantamine", atc: "N06DA04", cls: "Acetylcholinesterase inhibitor (anti-dementia)",
  linked: [],
  forms: ["Tablets 4, 8, 12 mg; extended-release capsules; oral solution [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Reversible acetylcholinesterase inhibitor and nicotinic receptor modulator [UNVERIFIED-KNOWLEDGE].",
  pk: [F4_NEP],
  ind: { adult: ["Mild to moderate Alzheimer's dementia [FDA]."], paed: ["Not indicated [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Alzheimer's dementia", "Start 4 mg twice daily; after at least 4 weeks 8 mg twice daily; after at least 4 more weeks may increase to 12 mg twice daily; with food and plenty of fluid [FDA]."], ["Moderate hepatic impairment", "No more than 16 mg/day; not in severe impairment [FDA]."], ["CrCl 9–59", "No more than 16 mg/day; not if CrCl is under 9 [FDA]."]],
  paed: { tiers: ["Not indicated. [NEP]"], transition: "Adults only.", calcNote: "Starting dose with kidney limit." },
  adj: { renal: "CrCl 9–59: maximum 16 mg/day; under 9: do not use [FDA].", hepatic: "Moderate: maximum 16 mg/day; severe: do not use [FDA].", pregnancy: F4_NEP, other: "Bradycardia and heart block; GI bleeding risk with NSAIDs; exaggerates suxamethonium [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Cholinergic crisis: nausea, vomiting, bradycardia, hypotension, weakness, seizures [UNVERIFIED-KNOWLEDGE].", animal: F4_LD, manage: "Supportive; atropine for cholinergic effects [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to galantamine or excipients [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, anorexia, weight loss, dizziness, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bradycardia, AV block, syncope [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious skin reactions (SJS) [FDA] [UNVERIFIED-KNOWLEDGE]", "GI bleeding [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Pulse, weight, cognition [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [
    { drug: "galantamine", indication_id: "start", label: "Alzheimer's dementia — start 4 mg twice daily", route: "PO", population: F4_ADULT, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 12, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 4, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 8.999, action: "avoid", note: "CrCl under 9: do not use [FDA]" }], renal_note: "CrCl 9–59: no more than 16 mg/day [FDA]", flags: ["After 4 weeks 8 mg twice daily; after 4 more weeks up to 12 mg twice daily", "With food"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Galantamine tablets — FDA label (DailyMed)", F4_DM("261889d3-41c8-4655-98f7-41317778e7a1")], F4_BT],
  dose: { tagline: "Cholinesterase inhibitor for Alzheimer's — titrate every 4 weeks; kidney limit.",
    adult: [{ ind: "Alzheimer's dementia", text: "4 mg twice daily, then 8 mg and up to 12 mg twice daily at 4-week steps; maximum 16 mg/day if CrCl 9–59.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

// Gadolinium-based contrast agents (GBCA): same structure, label-specific dose and strength.
// Boxed text: each label's own boxed warning, extracted with the _work/tools/fdb-boxed-fill.js logic.
const F4_GBCA_BOX = {
 "gadobutrol": "Risk Associated with Intrathecal Use Intrathecal administration of gadolinium-based contrast agents (GBCAs) can cause serious adverse reactions including death, coma, encephalopathy, and seizures. GADAVIST is not approved for intrathecal use. Nephrogenic Systemic Fibrosis GBCAs increase the risk for nephrogenic systemic fibrosis (NSF) among patients with impaired elimination of the drugs. Avoid use of GADAVIST in these patients unless the diagnostic information is essential and not available with non-contrasted MRI or other modalities. NSF may result in fatal or debilitating fibrosis affecting the skin, muscle and internal organs. The risk for NSF appears highest among patients with: Chronic, severe kidney disease (GFR 60 years, hypertension or diabetes), estimate the glomerular filtration rate (GFR) through laboratory testing. For patients at highest risk for NSF, do not exceed the recommended GADAVIST dose and allow a sufficient period of time for elimination of the drug from the body prior to any re-administration [FDA].",
 "gadodiamide": "Intrathecal administration of gadolinium-based contrast agents (GBCAs) can cause serious adverse reactions including death, coma, encephalopathy, and seizures. OMNISCAN is not approved for intrathecal use. GBCAs increase the risk for nephrogenic systemic fibrosis among patients with impaired elimination of the drugs. Avoid use of OMNISCAN in these patients unless the diagnostic information is essential and not available with non-contrasted MRI or other modalities. Do not administer OMNISCAN to patients with: chronic, severe kidney disease (GFR < 30 mL/min/1.73m²), or acute kidney injury. Screen patients for acute kidney injury and other conditions that may reduce renal function. For patients at risk for chronically reduced renal function (e.g., age > 60 years, hypertension or diabetes), estimate the glomerular filtration rate (GFR) through laboratory testing [FDA].",
 "gadopiclenol": "Risk Associated with Intrathecal Use Intrathecal administration of gadolinium-based contrast agents (GBCAs) can cause serious adverse reactions including death, coma, encephalopathy, and seizures. Vueway is not approved for intrathecal use. Nephrogenic Systemic Fibrosis GBCAs increase the risk for nephrogenic systemic fibrosis (NSF) among patients with impaired elimination of the drugs. Avoid use of Vueway in these patients unless the diagnostic information is essential and not available with non-contrasted MRI or other modalities. NSF may result in fatal or debilitating fibrosis affecting the skin, muscle and internal organs. The risk for NSF appears highest among patients with: Chronic, severe kidney disease (GFR 60 years, hypertension, diabetes), estimate the glomerular filtration rate (GFR) through laboratory testing. For patients at highest risk for NSF, do not exceed the recommended Vueway dose and allow a sufficient period of time for elimination of the drug from the body prior to any re-administration [FDA].",
 "gadoquatrane": "Risk Associated with Intrathecal Use Intrathecal administration of gadolinium-based contrast agents (GBCAs) can cause serious adverse reactions including death, coma, encephalopathy, and seizures. AMBELVIST is not approved for intrathecal use. Nephrogenic Systemic Fibrosis GBCAs increase the risk for nephrogenic systemic fibrosis (NSF) among patients with impaired elimination of the drugs. Avoid use of AMBELVIST in these patients unless the diagnostic information is essential and not available with non-contrasted MRI or other modalities. NSF may result in fatal or debilitating fibrosis affecting the skin, muscle, and internal organs. The risk for NSF appears highest among patients with: Chronic, severe kidney disease (GFR 60 years, hypertension, or diabetes), estimate the glomerular filtration rate (GFR) through laboratory testing. For patients at highest risk for NSF, do not exceed the recommended AMBELVIST dose and allow a sufficient period of time for elimination of the drug from the body prior to any re-administration [FDA].",
 "gadoteridol": "Risk Associated with Intrathecal Use Intrathecal administration of gadolinium-based contrast agents (GBCAs) can cause serious adverse reactions including death, coma, encephalopathy, and seizures. ProHance is not approved for intrathecal use. Nephrogenic Systemic Fibrosis GBCAs increase the risk for nephrogenic systemic fibrosis (NSF) among patients with impaired elimination of the drugs. Avoid use of ProHance in these patients unless the diagnostic information is essential and not available with non- contrasted MRI or other modalities. NSF may result in fatal or debilitating systemic fibrosis affecting the skin, muscle and internal organs. The risk for NSF appears highest among patients with: chronic, severe kidney disease (GFR less than 30 mL/min/1.73m 2 ), or acute kidney injury Screen patients for acute kidney injury and other conditions that may reduce renal function. For patients at risk for chronically reduced renal function (e.g. age greater than 60 years, hypertension or diabetes), estimate the glomerular filtration rate (GFR) through laboratory testing. For patients at highest risk for NSF, do not exceed the recommended ProHance dose and allow a sufficient period of time for elimination of the drug from the body prior to re-administration [FDA]."
};
const F4_GBCA = (key, inn, cls, label, set, conc, doseTxt, mlkg, ages, extra) => FDB_M(key, {
  inn, atc: "V08CA", cls,
  linked: [],
  forms: [`Injection ${conc} (IV) [FDA].`, "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Paramagnetic gadolinium chelate: shortens T1 relaxation, brightening tissues on MRI [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted unchanged by the kidney; small amounts of gadolinium are retained in brain, bone and skin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Contrast-enhanced MRI (CNS and other indications per label) [FDA]."], paed: [ages] },
  adult: [["MRI", doseTxt], ["Volume", `${mlkg} mL/kg [FDA].`], ["Kidney", "Screen for acute kidney injury or eGFR under 30 before use — NSF risk [FDA]."]].concat(extra || []),
  paed: { tiers: [ages], transition: "Same per-kg dose.", calcNote: "mL/kg by weight — no mg calculator." },
  adj: { renal: "Avoid unless essential in eGFR under 30 or acute kidney injury (nephrogenic systemic fibrosis); haemodialysis soon after in dialysis patients [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: F4_NEP, pregnancy: "Use only if essential (gadolinium crosses the placenta) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Intravenous only — never intrathecal [FDA]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive; haemodialysis removes it [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of hypersensitivity to the agent [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, nausea, injection-site reactions, dizziness, altered taste [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Nephrogenic systemic fibrosis [FDA]", "Anaphylactoid reactions [FDA]", "Serious harm if given intrathecally [FDA]", "Gadolinium retention [FDA]"] },
  monitor: ["eGFR risk screen; observe for reactions after injection [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", label + " — FDA label (DailyMed)", F4_DM(set)], F4_BT],
  dose: { tagline: "Gadolinium MRI contrast — IV only; screen the kidneys.",
    boxedTitle: "Risk associated with intrathecal use and nephrogenic systemic fibrosis",
    boxed: F4_GBCA_BOX[key],
    adult: [{ ind: "Contrast MRI", text: doseTxt.replace(/ \[FDA\]\.?$/, "") + "." }],
    child: [{ ind: "Children", text: ages.replace(/ \[FDA\]\.?$/, "") + "." }] }
});

F4_GBCA("gadobutrol", "Gadobutrol", "Gadolinium-based MRI contrast (macrocyclic)", "Gadavist (gadobutrol)", "b7afe34d-b70f-41a5-b89c-561bdf29f046", "1 mmol/mL",
  "0.1 mmol/kg (0.1 mL/kg) actual body weight IV bolus; for cardiac MRI split into two equal injections [FDA].", "0.1", "Adults and children including term neonates: 0.1 mmol/kg [FDA].");
F4_GBCA("gadodiamide", "Gadodiamide", "Gadolinium-based MRI contrast (linear)", "Omniscan (gadodiamide)", "1e9a37e2-f28a-4373-bf0f-3e9b60f42d8a", "0.5 mmol/mL",
  "CNS: 0.1 mmol/kg (0.2 mL/kg) IV bolus; body (thorax, abdomen, pelvis): 0.1 mmol/kg; kidney: 0.05 mmol/kg (0.1 mL/kg) [FDA].", "0.1–0.2", "Children 2–16 years: same per-kg doses as adults [FDA].");
if (window.FDB && window.FDB.gadodiamide) window.FDB.gadodiamide.contra.push("Chronic severe kidney disease (GFR under 30) or acute kidney injury [FDA].");
F4_GBCA("gadopiclenol", "Gadopiclenol", "Gadolinium-based MRI contrast (macrocyclic, high relaxivity)", "Vueway (gadopiclenol)", "192725e9-e83e-1a36-33f2-abee55792ab3", "0.5 mmol/mL",
  "0.05 mmol/kg (0.1 mL/kg) actual body weight IV at about 2 mL/second, then a saline flush [FDA].", "0.1", "Adults and children including term neonates: 0.05 mmol/kg [FDA].");
F4_GBCA("gadoquatrane", "Gadoquatrane", "Gadolinium-based MRI contrast (macrocyclic, tetrameric)", "Ambelvist (gadoquatrane)", "fac80f5d-8d37-4237-bb52-0faef0dd46aa", "0.1 mmol/mL",
  "0.01 mmol/kg (0.1 mL/kg) actual body weight IV at 1–4 mL/second, then a saline flush [FDA].", "0.1", "Adults and children including term neonates: 0.01 mmol/kg; adjust flow rate and flush for age [FDA].");
F4_GBCA("gadoteridol", "Gadoteridol", "Gadolinium-based MRI contrast (macrocyclic)", "ProHance (gadoteridol)", "778aee03-7d4c-481a-be8a-a75db0702f5a", "0.5 mmol/mL",
  "0.1 mmol/kg (0.2 mL/kg) as rapid IV infusion or bolus, then at least 5 mL saline flush [FDA].", "0.2", "Adults and children including term neonates: 0.1 mmol/kg [FDA].");

FDB_M("galcanezumab", {
  inn: "Galcanezumab", atc: "N02CD02", cls: "Anti-CGRP monoclonal antibody (migraine prevention)",
  linked: [],
  forms: ["Prefilled pen or syringe 120 mg/mL; 100 mg/mL syringe for cluster headache [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds calcitonin gene-related peptide (CGRP) ligand [FDA].",
  pk: ["Long half-life (about 27 days) — monthly dosing [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Preventive treatment of migraine; episodic cluster headache in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Migraine prevention", "240 mg SC loading dose (two 120 mg injections), then 120 mg SC monthly [FDA]."], ["Episodic cluster headache", "300 mg SC (three 100 mg injections) at the start of the cluster period, then monthly until it ends [FDA]."], ["Site", "Abdomen, thigh, back of the upper arm or buttock [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Fixed SC dose." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: F4_NEP, other: "Raised blood pressure reported with CGRP antibodies [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serious hypersensitivity to galcanezumab or excipients [FDA]."],
  ae: { common: ["Injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis and angioedema [FDA]", "Hypertension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; headache diary [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Emgality (galcanezumab-gnlm) — FDA label (DailyMed)", F4_DM("33a147be-233a-40e8-a55e-e40936e28db0")], F4_BT],
  dose: { tagline: "Monthly anti-CGRP injection for migraine prevention and cluster headache.",
    adult: [{ ind: "Migraine prevention", text: "240 mg SC once, then 120 mg monthly." }, { ind: "Episodic cluster headache", text: "300 mg SC at cluster onset, then monthly." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("gallium-68ga-edotreotide", {
  inn: "Gallium (68Ga) edotreotide (Ga-68 DOTATOC)", atc: "V09IX", cls: "Diagnostic radiopharmaceutical (somatostatin-receptor PET agent)",
  linked: [],
  forms: ["Injection for IV use; activity calibrated at time of use [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not available [BT-NEML]."],
  moa: "Somatostatin-analogue tracer binding somatostatin receptors on neuroendocrine tumours, imaged by PET [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Gallium-68 half-life about 68 minutes [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["PET localisation of somatostatin-receptor-positive neuroendocrine tumours [FDA]."], paed: ["Same, in children [FDA]."] },
  adult: [["NET imaging", "148 MBq (4 mCi) IV bolus; image 55–90 minutes later [FDA]."]],
  paed: { tiers: ["1.59 MBq/kg (0.043 mCi/kg), range 11.1–111 MBq (0.3–3 mCi), IV bolus [FDA]."], transition: "Adult dose.", calcNote: "Radioactivity dose — nuclear medicine only." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: "Radiation exposure to the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Somatostatin analogues can reduce uptake — time imaging per label [FDA] [UNVERIFIED-KNOWLEDGE]. Radiation-safety handling [FDA]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Hydration and frequent voiding to reduce radiation dose [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["None common reported [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Radiation exposure risk [FDA]"] },
  monitor: ["Nuclear-medicine protocol [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Ga-68 DOTATOC (edotreotide) — FDA label (DailyMed)", F4_DM("c4d185c3-d520-462d-ba50-4f4ee485ace3")], F4_BT],
  dose: { tagline: "PET tracer for neuroendocrine tumours — nuclear medicine only.",
    adult: [{ ind: "NET PET", text: "148 MBq (4 mCi) IV; image at 55–90 minutes." }],
    child: [{ ind: "Children", text: "1.59 MBq/kg (11.1–111 MBq)." }] }
});

FDB_M("gallium-68ga-gozetotide", {
  inn: "Gallium (68Ga) gozetotide (Ga-68 PSMA-11)", atc: "V09IX", cls: "Diagnostic radiopharmaceutical (PSMA PET agent)",
  linked: [],
  forms: ["Injection for IV use; activity calibrated at time of use [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not available [BT-NEML]."],
  moa: "Binds prostate-specific membrane antigen; imaged by PET [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Gallium-68 half-life about 68 minutes; urinary excretion [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["PET of PSMA-positive lesions in men with prostate cancer: suspected metastasis before definitive therapy, or suspected recurrence with rising PSA; selection for PSMA-targeted therapy [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not applicable [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["PSMA PET", "111–259 MBq (3–7 mCi) IV bolus; a diuretic may be given at injection; void just before imaging; image 50–100 minutes later [FDA]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "Adults.", calcNote: "Radioactivity dose — nuclear medicine only." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: "Not indicated in women [UNVERIFIED-KNOWLEDGE].", other: "Radiation-safety handling; hydrate and void often [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Hydration and frequent voiding [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Nausea, fatigue, diarrhoea (uncommon) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Radiation exposure risk [FDA]", "Image misinterpretation (uptake is not cancer-specific) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Nuclear-medicine protocol [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Gallium Ga-68 PSMA-11 (gozetotide) — FDA label (DailyMed)", F4_DM("b6253a7b-0f73-36be-e053-2a95a90a9015")], F4_BT],
  dose: { tagline: "PSMA PET tracer for prostate cancer staging and recurrence.",
    adult: [{ ind: "Prostate cancer PSMA PET", text: "111–259 MBq (3–7 mCi) IV; image at 50–100 minutes." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

FDB_M("galsulfase", {
  inn: "Galsulfase", atc: "A16AB08", cls: "Enzyme replacement therapy (N-acetylgalactosamine 4-sulfatase)",
  linked: [],
  forms: ["Concentrate for IV infusion 1 mg/mL (5 mL vial) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Replaces the deficient lysosomal enzyme in MPS VI [FDA].",
  pk: [F4_NEP],
  ind: { adult: ["Mucopolysaccharidosis VI (Maroteaux–Lamy syndrome) — improves walking and stair-climbing [FDA]."], paed: ["Same [FDA]."] },
  adult: [["MPS VI", "1 mg/kg IV infusion once weekly, under supervision able to manage anaphylaxis [FDA]."], ["Premedication", "Antihistamine with or without antipyretic 30–60 minutes before [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["1 mg/kg IV once weekly [FDA]."], transition: "Same per-kg dose.", calcNote: "Weekly mg/kg infusion." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: F4_NEP, other: "Watch for fluid overload in cardiorespiratory compromise; sleep apnoea and airway disease increase risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Stop infusion; treat reactions [FDA]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Infusion reactions, rash, fever, headache, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis and severe hypersensitivity [FDA]", "Acute cardiorespiratory failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Spinal cord compression [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Vital signs during and after infusion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [
    { drug: "galsulfase", indication_id: "mps6", label: "MPS VI — 1 mg/kg IV once weekly", route: "IV", population: { min_age_months: 0, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 5, unit: "mg/vial" }], rounding: "Whole vials, dilute per label", renal: [], flags: ["Infusion with anaphylaxis support available"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Naglazyme (galsulfase) — FDA label (DailyMed)", F4_DM("59341250-deac-ed71-3823-a4f5d64dbd77")], F4_BT],
  dose: { tagline: "Weekly enzyme replacement for MPS VI — anaphylaxis risk.",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Anaphylaxis has occurred during the early course of enzyme replacement therapy and after extended duration of therapy. Initiate NAGLAZYME in a healthcare setting with appropriate medical monitoring and support measures, including access to cardiopulmonary resuscitation equipment. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue NAGLAZYME and immediately initiate appropriate medical treatment, including use of epinephrine. Inform patients of the symptoms of life-threatening hypersensitivity reactions, including anaphylaxis and to seek immediate medical care should symptoms occur [FDA].",
    adult: [{ ind: "MPS VI", text: "1 mg/kg IV once weekly.", calc: ["mps6"] }],
    child: [{ ind: "MPS VI", text: "1 mg/kg IV once weekly.", calc: ["mps6"] }] }
});

FDB_M("ganaxolone", {
  inn: "Ganaxolone", atc: "N03AX27", cls: "Neuroactive steroid (GABA-A positive modulator) antiseizure",
  linked: [],
  forms: ["Oral suspension 50 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Positive allosteric modulator of synaptic and extrasynaptic GABA-A receptors [FDA].",
  pk: ["Take with food (absorption increases) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Seizures with CDKL5 deficiency disorder, 2 years and older [FDA]."], paed: ["CDKL5 deficiency disorder, 2 years and older [FDA]."] },
  adult: [["Over 28 kg", "Start 50 mg three times daily (150 mg/day); titrate per label schedule to a maximum of 600 mg three times daily (1,800 mg/day); with food [FDA]."], ["Severe hepatic impairment", "See the label [FDA]."], ["Stopping", "Withdraw gradually [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["28 kg or less: start 2 mg/kg three times daily (6 mg/kg/day); titrate to a maximum of 21 mg/kg three times daily (63 mg/kg/day) [FDA].", "Over 28 kg: adult schedule [FDA].", "Under 2 years: not established [FDA]."], transition: "Weight-based up to 28 kg.", calcNote: "Starting doses only — titration follows the label schedule." },
  adj: { renal: F4_NEP, hepatic: "Severe impairment: label adjustment [FDA].", pregnancy: F4_NEP, other: "Sedation with other CNS depressants; strong CYP3A4 inducers lower levels [FDA] [UNVERIFIED-KNOWLEDGE]. Schedule V controlled substance (US) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Sedation, somnolence [UNVERIFIED-KNOWLEDGE].", animal: F4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Somnolence, fever, salivary hypersecretion, seasonal allergy [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Somnolence and sedation [FDA]", "Suicidal thoughts (antiseizure class) [FDA]", "Withdrawal seizures [FDA]"] },
  monitor: ["Sedation; mood; seizure diary [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [
    { drug: "ganaxolone", indication_id: "le28", label: "CDKL5 deficiency, 28 kg or less — start 2 mg/kg three times daily", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: 28.0001 }, basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 8, caps: {}, weight_basis: "actual", formulations: [{ form: "oral suspension", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Titrate per label to a maximum of 21 mg/kg three times daily", "With food"], sources: ["FDA"] },
    { drug: "ganaxolone", indication_id: "gt28", label: "CDKL5 deficiency, over 28 kg — start 50 mg three times daily", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: 28.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 8, caps: { max_single: 600, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "oral suspension", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Titrate per label to a maximum of 600 mg three times daily", "With food"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ztalmy (ganaxolone) — FDA label (DailyMed)", F4_DM("d91612c4-b03a-4be4-a1ee-6a13e3b83d4e")], F4_BT],
  dose: { tagline: "Neurosteroid for CDKL5 deficiency seizures — slow titration, with food.",
    adult: [{ ind: "CDKL5 deficiency (over 28 kg)", text: "50 mg three times daily, titrated to a maximum of 600 mg three times daily.", calc: ["gt28"] }],
    child: [{ ind: "28 kg or less", text: "2 mg/kg three times daily, titrated to a maximum of 21 mg/kg three times daily.", calc: ["le28"] }] }
});

FDB_M("ganciclovir", {
  inn: "Ganciclovir", atc: "J05AB06", cls: "Nucleoside antiviral (CMV)",
  linked: [],
  forms: ["Powder for IV infusion 500 mg vial [FDA] [UNVERIFIED-KNOWLEDGE].", "Ophthalmic gel 0.15% (herpetic keratitis) — separate product [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Phosphorylated by CMV UL97 kinase; inhibits viral DNA polymerase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion — reduce the dose by creatinine clearance [FDA]."],
  ind: { adult: ["CMV retinitis in immunocompromised adults, including AIDS [FDA].", "Prevention of CMV disease in transplant recipients at risk [FDA]."], paed: ["Not established in the label [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["CMV retinitis — induction", "5 mg/kg IV over 1 hour every 12 hours for 14–21 days [FDA]."], ["Maintenance", "5 mg/kg IV once daily 7 days a week, or 6 mg/kg once daily 5 days a week [FDA]."], ["Transplant prevention", "5 mg/kg every 12 hours for 7–14 days, then 5 mg/kg once daily (or 6 mg/kg 5 days a week) to 100–120 days post-transplant [FDA]."], ["Kidney (induction)", "CrCl 50–69: 2.5 mg/kg every 12 h; 25–49: 2.5 mg/kg every 24 h; 10–24: 1.25 mg/kg every 24 h; under 10: 1.25 mg/kg three times a week after haemodialysis [FDA]."], ["Kidney (maintenance)", "CrCl 50–69: 2.5 mg/kg; 25–49: 1.25 mg/kg; 10–24: 0.625 mg/kg — every 24 h; under 10: 0.625 mg/kg three times a week after haemodialysis [FDA]."]],
  paed: { tiers: ["Not established in the label [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult per-kg dose.", calcNote: "Infuse over 1 hour; never IV bolus or IM." },
  adj: { renal: "Reduce by CrCl (see table) [FDA].", hepatic: F4_NEP, pregnancy: "Fetal toxicity — effective contraception during and after treatment [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Additive marrow toxicity with zidovudine, mycophenolate and other myelosuppressives; seizures with imipenem [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Marrow suppression, renal impairment, seizures [UNVERIFIED-KNOWLEDGE].", animal: F4_LD, manage: "Haemodialysis and hydration; G-CSF for neutropenia [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to ganciclovir or valganciclovir [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Fever, diarrhoea, nausea, neutropenia, anaemia, thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Granulocytopenia, anaemia, thrombocytopenia, pancytopenia [FDA]", "Impaired fertility [FDA]", "Birth defects [FDA]", "Acute kidney injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count and platelets frequently; creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [
    { drug: "ganciclovir", indication_id: "induction", label: "CMV — induction 5 mg/kg IV every 12 h", route: "IV", population: F4_ADULT, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 500, unit: "mg/vial" }], rounding: "Vial fractions", infusion: { duration_h: 1 },
      renal: [{ crcl_min: 50, crcl_max: 69.999, action: "reduce_dose", set_value: 2.5, interval_h: 12 }, { crcl_min: 25, crcl_max: 49.999, action: "reduce_dose", set_value: 2.5, interval_h: 24 }, { crcl_min: 10, crcl_max: 24.999, action: "reduce_dose", set_value: 1.25, interval_h: 24 }, { crcl_min: 0, crcl_max: 9.999, action: "avoid", note: "CrCl under 10: 1.25 mg/kg three times a week after haemodialysis only [FDA]" }],
      flags: ["Infuse over 1 hour", "Blood count before and during"], sources: ["FDA"] },
    { drug: "ganciclovir", indication_id: "maint", label: "CMV — maintenance 5 mg/kg IV once daily", route: "IV", population: F4_ADULT, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 500, unit: "mg/vial" }], rounding: "Vial fractions", infusion: { duration_h: 1 },
      renal: [{ crcl_min: 50, crcl_max: 69.999, action: "reduce_dose", set_value: 2.5, interval_h: 24 }, { crcl_min: 25, crcl_max: 49.999, action: "reduce_dose", set_value: 1.25, interval_h: 24 }, { crcl_min: 10, crcl_max: 24.999, action: "reduce_dose", set_value: 0.625, interval_h: 24 }, { crcl_min: 0, crcl_max: 9.999, action: "avoid", note: "CrCl under 10: 0.625 mg/kg three times a week after haemodialysis only [FDA]" }],
      flags: ["Or 6 mg/kg once daily 5 days a week", "Infuse over 1 hour"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ganciclovir for injection — FDA label (DailyMed)", F4_DM("35addab5-09db-4f8a-9c69-6fbce33ecc37")], F4_BT],
  dose: { tagline: "IV antiviral for CMV — dose by creatinine clearance; watch the blood count.",
    boxedTitle: "Hematologic toxicity, impairment of fertility, fetal toxicity, mutagenesis and carcinogenesis",
    boxed: "• Hematologic Toxicity: Granulocytopenia, anemia, thrombocytopenia, and pancytopenia have been reported in patients treated with Ganciclovir for Injection. • Impairment of Fertility: Based on animal data and limited human data, Ganciclovir for Injection may cause temporary or permanent inhibition of spermatogenesis in males and suppression of fertility in females. • Fetal Toxicity: Based on animal data, Ganciclovir for Injection has the potential to cause birth defects in humans. • Mutagenesis and Carcinogenesis: Based on animal data, Ganciclovir for Injection has the potential to cause cancers in humans [FDA].",
    adult: [{ ind: "CMV retinitis / transplant prevention", text: "5 mg/kg IV every 12 h (induction), then 5 mg/kg once daily; reduce by CrCl.", calc: ["induction", "maint"] }],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

FDB_M("ganirelix", {
  inn: "Ganirelix", atc: "H01CC01", cls: "GnRH antagonist (fertility treatment)",
  linked: [],
  forms: ["Prefilled syringe 250 microgram/0.5 mL (SC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Competitive GnRH-receptor antagonist: prevents a premature LH surge [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F4_NEP],
  ind: { adult: ["Inhibition of premature LH surges in women undergoing controlled ovarian hyperstimulation [FDA]."], paed: ["Not applicable. [NEP]"] },
  adult: [["Ovarian stimulation", "250 microgram SC once daily from the mid-to-late follicular phase (after FSH from cycle day 2–3) until the day of hCG [FDA]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "—", calcNote: "Fixed SC dose — fertility specialist." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: "Contraindicated in known or suspected pregnancy [FDA].", other: "Packaging may contain natural rubber latex [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: F4_NEP },
  contra: ["Hypersensitivity to ganirelix, GnRH or any GnRH analogue [FDA].", "Known or suspected pregnancy [FDA]."],
  ae: { common: ["Abdominal pain, headache, injection-site reaction, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ovarian hyperstimulation syndrome (with the regimen) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"] },
  monitor: ["Ultrasound follicle tracking [FDA]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Ganirelix acetate injection — FDA label (DailyMed)", F4_DM("32fb74ff-993a-49fe-8943-e029372b863e")], F4_BT],
  dose: { tagline: "Daily GnRH antagonist to prevent premature ovulation in IVF cycles.",
    adult: [{ ind: "Controlled ovarian stimulation", text: "250 microgram SC once daily until hCG." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

FDB_M("garadacimab", {
  inn: "Garadacimab", atc: "B06AC", cls: "Anti-factor XIIa monoclonal antibody (HAE prophylaxis)",
  linked: [],
  forms: ["Prefilled pen or syringe 200 mg (SC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits activated factor XII, reducing bradykinin production [FDA].",
  pk: [F4_NEP],
  ind: { adult: ["Prevention of hereditary angioedema attacks, 12 years and older [FDA]."], paed: ["12 years and older [FDA]."] },
  adult: [["HAE prophylaxis", "Loading 400 mg SC (two 200 mg injections) on day 1, then 200 mg SC once monthly; self-administration possible [FDA]."]],
  paed: { tiers: ["12 years and older: adult dose [FDA].", "Under 12: not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose from 12 years.", calcNote: "Fixed SC dose." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: F4_NEP, other: "May prolong aPTT (laboratory interference) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: F4_NEP },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Injection-site reactions, nasopharyngitis, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Attack frequency [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Andembry (garadacimab) — FDA label (DailyMed)", F4_DM("07b0b671-db81-49f0-a402-0c0219db7fa2")], F4_BT],
  dose: { tagline: "Monthly anti-FXIIa injection to prevent HAE attacks.",
    adult: [{ ind: "HAE prophylaxis", text: "400 mg SC once, then 200 mg SC monthly." }],
    child: [{ ind: "12 years and older", text: "Same as adults." }] }
});

FDB_M("gatifloxacin", {
  inn: "Gatifloxacin (eye drops)", atc: "S01AE06", cls: "Fluoroquinolone antibacterial (ophthalmic)",
  linked: [],
  forms: ["Ophthalmic solution 0.5% [FDA] [UNVERIFIED-KNOWLEDGE].", "Systemic gatifloxacin is no longer marketed in the US [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits bacterial DNA gyrase and topoisomerase IV [UNVERIFIED-KNOWLEDGE].",
  pk: ["Local action [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Bacterial conjunctivitis (S. aureus, S. epidermidis, S. pneumoniae, H. influenzae and others) [FDA]."], paed: ["1 year and older [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Bacterial conjunctivitis", "Day 1: 1 drop every 2 hours while awake, up to 8 times; days 2–7: 1 drop 2–4 times daily while awake [FDA]."]],
  paed: { tiers: ["1 year and older: same as adults [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Drops — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: F4_NEP, other: "Do not wear contact lenses during conjunctivitis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Not applicable. [NEP]" },
  contra: ["Hypersensitivity to gatifloxacin, other quinolones or components [FDA]."],
  ae: { common: ["Eye irritation, worsening conjunctivitis, taste disturbance [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA]", "Superinfection with prolonged use [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Response in 2–3 days [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Zymaxid (gatifloxacin ophthalmic solution) — FDA label (DailyMed)", F4_DM("1160b16c-929a-4e85-9c0b-1d8c96a7678b")], F4_BT],
  dose: { tagline: "Fluoroquinolone eye drop for bacterial conjunctivitis.",
    adult: [{ ind: "Bacterial conjunctivitis", text: "Day 1: every 2 h while awake (up to 8 times); days 2–7: 2–4 times daily." }],
    child: [{ ind: "1 year and older", text: "Same as adults." }] }
});

FDB_M("gefitinib", {
  inn: "Gefitinib", atc: "L01EB01", cls: "EGFR tyrosine kinase inhibitor (antineoplastic)",
  linked: [],
  forms: ["Tablet 250 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits EGFR tyrosine kinase [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 metabolism; absorption falls with high gastric pH [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["First-line metastatic NSCLC with EGFR exon 19 deletion or exon 21 L858R mutation [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["EGFR-mutant NSCLC", "250 mg once daily with or without food [FDA]."], ["Specialist", F4_ONC]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Oncology — no calculator." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid PPIs if possible; strong CYP3A4 inducers: 500 mg daily [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Rash, acne, diarrhoea, dry skin, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Keratitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests; new cough or breathlessness; eye symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Iressa (gefitinib) — FDA label (DailyMed)", F4_DM("827d60e8-7e07-41b7-c28b-49ef1c4a5a41")], F4_BT],
  dose: { tagline: "Oral EGFR inhibitor for EGFR-mutant lung cancer.",
    adult: [{ ind: "EGFR-mutant NSCLC", text: "250 mg once daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("gemcitabine", {
  inn: "Gemcitabine", atc: "L01BC05", cls: "Nucleoside metabolic inhibitor (antineoplastic)",
  risk: "High-alert medication (parenteral chemotherapy) [ISMP]",
  linked: [],
  forms: ["Powder for IV infusion 200 mg, 1 g, 2 g vials; solution for infusion [FDA] [UNVERIFIED-KNOWLEDGE].", "Intravesical system (bladder cancer) — separate product [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Pyrimidine analogue: inhibits DNA synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short infusion; longer infusions raise toxicity [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Ovarian cancer (with carboplatin), metastatic breast cancer (with paclitaxel), NSCLC (with cisplatin), pancreatic adenocarcinoma [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Ovarian cancer", "1,000 mg/m² IV over 30 minutes on days 1 and 8 of each 21-day cycle [FDA]."], ["Breast cancer", "1,250 mg/m² IV over 30 minutes on days 1 and 8 of each 21-day cycle [FDA]."], ["NSCLC", "1,000 mg/m² on days 1, 8 and 15 of each 28-day cycle, or 1,250 mg/m² on days 1 and 8 of each 21-day cycle [FDA]."], ["Pancreatic cancer", "1,000 mg/m² once weekly for 7 weeks, 1 week off, then weekly for 3 of every 4 weeks [FDA]."], ["Dose changes", "Reduce or hold for low neutrophils or platelets on the treatment day per the label tables [FDA]."], ["Specialist", F4_ONC]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Body-surface-area dose — check the cycle day and blood counts." },
  adj: { renal: "Haemolytic uraemic syndrome reported — monitor renal function [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Hepatotoxicity; caution in hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Infusions longer than 60 minutes or more often than weekly increase toxicity [FDA] [UNVERIFIED-KNOWLEDGE]. Radiation sensitiser [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Myelosuppression, paraesthesia, rash [UNVERIFIED-KNOWLEDGE].", animal: F4_LD, manage: "Supportive; blood counts [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to gemcitabine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, vomiting, fever, rash, oedema, raised liver enzymes, proteinuria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelosuppression [FDA]", "Pulmonary toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Haemolytic uraemic syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Capillary leak syndrome; PRES [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count before each dose; renal and liver function [FDA]."],
  local: F4_LOC,
  calc: [
    { drug: "gemcitabine", indication_id: "g1000", label: "1,000 mg/m² IV over 30 min (ovarian, NSCLC, pancreatic)", route: "IV", population: F4_ADULT, basis: "mg_per_m2", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 1000, unit: "mg/vial" }], rounding: "Vial fractions", infusion: { duration_h: 0.5 }, renal: [], flags: ["HIGH_ALERT", "Schedule depends on the cancer — check the protocol and cycle day", "Blood count before each dose"], sources: ["FDA", "ISMP"] },
    { drug: "gemcitabine", indication_id: "g1250", label: "1,250 mg/m² IV over 30 min (breast, NSCLC 21-day schedule)", route: "IV", population: F4_ADULT, basis: "mg_per_m2", dose: { value: 1250, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 1000, unit: "mg/vial" }], rounding: "Vial fractions", infusion: { duration_h: 0.5 }, renal: [], flags: ["HIGH_ALERT", "Days 1 and 8 of each 21-day cycle", "Blood count before each dose"], sources: ["FDA", "ISMP"] }
  ],
  sources: [["FDA", "Gemcitabine for injection USP — FDA label (DailyMed)", F4_DM("44bcc16c-341d-49e8-a1c6-95d084667aca")], F4_BT, ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "IV antimetabolite chemotherapy — BSA dose, 30-minute infusion, check counts.",
    cautionTitle: "Use with care",
    caution: "Chemotherapy — oncology specialist only. Longer infusions or more frequent dosing increase toxicity. Check the blood count before every dose [FDA].",
    adult: [{ ind: "Pancreatic, ovarian, NSCLC", text: "1,000 mg/m² IV over 30 minutes per protocol schedule.", calc: ["g1000"] }, { ind: "Breast cancer", text: "1,250 mg/m² IV over 30 minutes, days 1 and 8 of 21.", calc: ["g1250"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("gemfibrozil", {
  inn: "Gemfibrozil", atc: "C10AB04", cls: "Fibrate (lipid-lowering)",
  linked: [],
  forms: ["Tablet 600 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "PPAR-alpha agonist: lowers triglycerides and VLDL [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP2C8 and OATP1B1 inhibitor — many interactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Very high triglycerides (types IV and V) with pancreatitis risk, not controlled by diet [FDA].", "Coronary risk reduction in selected type IIb patients (label) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hypertriglyceridaemia", "1,200 mg/day in two doses, 30 minutes before the morning and evening meals [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Adults only.", calcNote: "Fixed dose." },
  adj: { renal: "Contraindicated in severe renal dysfunction [FDA].", hepatic: "Contraindicated in hepatic dysfunction, including primary biliary cirrhosis [FDA].", pregnancy: F4_NEP, other: "Contraindicated with simvastatin, repaglinide, dasabuvir, selexipag; avoid other statins (myopathy); raises warfarin effect [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Abdominal cramps, abnormal liver tests, diarrhoea, raised CK, muscle and joint pain, nausea, vomiting; a child recovered after 9 g [FDA].", animal: F4_LD, manage: "Symptomatic supportive care [FDA]." },
  contra: ["Hepatic or severe renal dysfunction, including primary biliary cirrhosis [FDA].", "Pre-existing gallbladder disease [FDA].", "Hypersensitivity [FDA].", "With simvastatin, repaglinide, dasabuvir or selexipag [FDA]."],
  ae: { common: ["Dyspepsia, abdominal pain, diarrhoea, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myopathy and rhabdomyolysis, especially with statins [FDA]", "Gallstones [FDA]", "Blood dyscrasias [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lipids; liver tests; blood count; muscle symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [
    { drug: "gemfibrozil", indication_id: "tg", label: "Hypertriglyceridaemia — 600 mg twice daily", route: "PO", population: F4_ADULT, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 600, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Contraindicated in severe renal dysfunction [FDA]", flags: ["30 minutes before morning and evening meals", "Not with simvastatin or repaglinide"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Gemfibrozil tablets — FDA label (DailyMed)", F4_DM("16d0326a-a55b-448b-be24-a16182aaef5a")], F4_BT],
  dose: { tagline: "Fibrate for very high triglycerides — dangerous with statins.",
    adult: [{ ind: "Very high triglycerides", text: "600 mg twice daily before meals.", calc: ["tg"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("gemtuzumab-ozogamicin", {
  inn: "Gemtuzumab ozogamicin", atc: "L01FX02", cls: "CD33-directed antibody–drug conjugate (antineoplastic)",
  risk: "High-alert medication (parenteral chemotherapy) [ISMP]",
  linked: [],
  forms: ["Powder for IV infusion 4.5 mg vial [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Anti-CD33 antibody carrying calicheamicin, which breaks DNA in CD33-positive leukaemic cells [UNVERIFIED-KNOWLEDGE].",
  pk: [F4_NEP],
  ind: { adult: ["Newly diagnosed CD33-positive AML (adults and children 1 month and older) and relapsed or refractory CD33-positive AML (2 years and older) [FDA]."], paed: ["Newly diagnosed AML from 1 month; relapsed AML from 2 years [FDA]."] },
  adult: [["Newly diagnosed AML (with daunorubicin and cytarabine)", "Induction 3 mg/m² (up to one 4.5 mg vial) on days 1, 4 and 7; consolidation 3 mg/m² on day 1 [FDA]."], ["Other regimens", "Per the full label [FDA]."], ["Specialist", F4_ONC]],
  paed: { tiers: ["Newly diagnosed AML: 3 mg/m² if BSA 0.6 m² or more; 0.1 mg/kg if BSA under 0.6 m² [FDA]."], transition: "BSA-based.", calcNote: "Oncology protocol — no calculator." },
  adj: { renal: F4_NEP, hepatic: "Hepatotoxicity and VOD — see the boxed warning [FDA].", pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Premedicate (corticosteroid, antihistamine, paracetamol) for infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to gemtuzumab ozogamicin or components (anaphylaxis reported) [FDA]."],
  ae: { common: ["Haemorrhage, infection, fever, nausea, mucositis, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatic veno-occlusive disease [FDA]", "Infusion reactions and anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Haemorrhage [FDA] [UNVERIFIED-KNOWLEDGE]", "Prolonged cytopenias [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, weight and liver size (VOD); blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Mylotarg (gemtuzumab ozogamicin) — FDA label (DailyMed)", F4_DM("32fd2bb2-1cfa-4250-feb8-d7956c794e05")], F4_BT, ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Anti-CD33 antibody–drug conjugate for AML — watch for veno-occlusive disease.",
    boxedTitle: "Hepatotoxicity",
    boxed: "Hepatotoxicity, including severe or fatal hepatic veno-occlusive disease (VOD), also known as sinusoidal obstruction syndrome (SOS), has been reported in association with the use of MYLOTARG as a single agent, and as part of a combination chemotherapy regimen. Monitor frequently for signs and symptoms of VOD after treatment with MYLOTARG [FDA].",
    adult: [{ ind: "Newly diagnosed CD33+ AML", text: "3 mg/m² (maximum one 4.5 mg vial) days 1, 4, 7 with induction chemotherapy." }],
    child: [{ ind: "1 month and older", text: "3 mg/m² (BSA 0.6 m² or more) or 0.1 mg/kg (BSA under 0.6 m²)." }] }
});

FDB_M("gepirone", {
  inn: "Gepirone", atc: "N06AX", cls: "5-HT1A agonist antidepressant",
  linked: [],
  forms: ["Extended-release tablets 18.2, 36.3, 54.5, 72.6 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Selective serotonin 5-HT1A receptor agonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 metabolism — strong inhibitors contraindicated [FDA]."],
  ind: { adult: ["Major depressive disorder in adults [FDA]."], paed: ["Not approved [FDA]."] },
  adult: [["Before starting", "Correct electrolytes and do an ECG; do not start if QTc is above 450 msec; repeat ECGs during titration [FDA]."], ["Major depression", "18.2 mg once daily with food; may increase to 36.3 mg on day 4, 54.5 mg after day 7 and 72.6 mg after another week (maximum) [FDA]."], ["Elderly, CrCl under 50, moderate hepatic impairment", "Start 18.2 mg; may increase to 36.3 mg (maximum) after 7 days [FDA]."], ["Moderate CYP3A4 inhibitor", "Reduce the dose by 50% [FDA]."]],
  paed: { tiers: ["Not approved [FDA]."], transition: "Adults only.", calcNote: "Titration with ECGs — no calculator." },
  adj: { renal: "CrCl under 50: maximum 36.3 mg [FDA].", hepatic: "Moderate: maximum 36.3 mg; severe: contraindicated [FDA].", pregnancy: F4_NEP, other: "Do not escalate if QTcF rises above 450 msec [FDA]." },
  tox: { human: "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F4_LD, manage: "ECG monitoring; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to gepirone [FDA].", "Baseline QTc above 450 msec; congenital long QT [FDA].", "Strong CYP3A4 inhibitors [FDA].", "Severe hepatic impairment [FDA].", "MAOI use within 14 days [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dizziness, nausea, insomnia, abdominal pain, dyspepsia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation [FDA]", "Suicidal thoughts in young adults [FDA]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Activation of mania [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG at baseline, during titration and periodically; electrolytes; mood [FDA]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Exxua (gepirone) extended-release tablets — FDA label (DailyMed)", F4_DM("0c78edd8-6acb-433c-9d34-2527da8d64e1")], F4_BT],
  dose: { tagline: "5-HT1A antidepressant — ECG before and during titration.",
    boxedTitle: "Suicidal thoughts and behaviors",
    boxed: "Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening and emergence of suicidal thoughts and behaviors. EXXUA is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Major depression", text: "18.2 mg once daily with food, titrated to a maximum of 72.6 mg (36.3 mg if elderly, CrCl under 50 or moderate hepatic impairment)." }],
    child: [{ ind: "Children", text: "Not approved." }] }
});

FDB_M("gepotidacin", {
  inn: "Gepotidacin", atc: "J01XX", cls: "Triazaacenaphthylene antibacterial (type II topoisomerase inhibitor)",
  linked: [],
  forms: ["Tablet 750 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits bacterial DNA gyrase and topoisomerase IV at a site distinct from fluoroquinolones [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F4_NEP],
  ind: { adult: ["Uncomplicated UTI in females 12 years and older weighing at least 40 kg [FDA].", "Uncomplicated urogenital gonorrhoea, 12 years and older and at least 45 kg, with limited or no alternatives [FDA]."], paed: ["12 years and older within the weight limits [FDA]."] },
  adult: [["Uncomplicated UTI (females)", "1,500 mg (two 750 mg tablets) twice daily, about 12 hours apart, for 5 days, after a meal [FDA]."], ["Urogenital gonorrhoea", "3,000 mg (four tablets), then a second 3,000 mg dose about 12 hours later [FDA]."]],
  paed: { tiers: ["12 years and older: uUTI if at least 40 kg; gonorrhoea if at least 45 kg — adult doses [FDA]."], transition: "Weight limits apply.", calcNote: "Fixed doses with weight limits." },
  adj: { renal: "Severe renal impairment: see the label [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: F4_NEP, pregnancy: F4_NEP, other: "QT prolongation possible; acetylcholinesterase inhibition — caution in myasthenia and with suxamethonium [FDA] [UNVERIFIED-KNOWLEDGE]. Strong CYP3A4 inhibitors and inducers interact [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Cholinergic effects [UNVERIFIED-KNOWLEDGE].", animal: F4_LD, manage: "Supportive; atropine for cholinergic symptoms [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of severe hypersensitivity to gepotidacin [FDA]."],
  ae: { common: ["Diarrhoea, nausea, abdominal pain, flatulence, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Acetylcholinesterase-inhibition effects [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]", "C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptom resolution; ECG if QT risk [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [
    { drug: "gepotidacin", indication_id: "uti", label: "Uncomplicated UTI (females, 40 kg and over) — 1,500 mg twice daily for 5 days", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: 40, max_weight_kg: null }, basis: "fixed", dose: { value: 1500, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 1500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 750, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [], flags: ["After a meal", "5 days"], sources: ["FDA"] },
    { drug: "gepotidacin", indication_id: "gc", label: "Urogenital gonorrhoea (45 kg and over) — 3,000 mg, repeated once 12 h later", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: 45, max_weight_kg: null }, basis: "fixed", dose: { value: 3000, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 3000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 750, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [], flags: ["Two doses only", "After a meal"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Blujepa (gepotidacin) — FDA label (DailyMed)", F4_DM("80b57cfe-7819-4d95-a57d-014af42f118d")], F4_BT],
  dose: { tagline: "New oral antibacterial for uncomplicated UTI and gonorrhoea.",
    adult: [{ ind: "Uncomplicated UTI (females)", text: "1,500 mg twice daily for 5 days after meals.", calc: ["uti"] }, { ind: "Urogenital gonorrhoea", text: "3,000 mg twice, 12 hours apart.", calc: ["gc"] }],
    child: [{ ind: "12 years and older", text: "Adult doses if weight limits are met (40 kg UTI; 45 kg gonorrhoea).", calc: ["uti", "gc"] }] }
});

FDB_M("gilteritinib", {
  inn: "Gilteritinib", atc: "L01EX13", cls: "FLT3 kinase inhibitor (antineoplastic)",
  linked: [],
  forms: ["Tablet 40 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits FLT3 (ITD and TKD mutations) and AXL [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Relapsed or refractory FLT3-mutated AML in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Relapsed/refractory FLT3+ AML", "120 mg once daily with or without food; response may be delayed — continue at least 6 months if no unacceptable toxicity [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Specialist", F4_ONC]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Oncology — no calculator." },
  adj: { renal: F4_NEP, hepatic: F4_NEP, pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A inducers; QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F4_NEP, animal: F4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to gilteritinib or excipients (anaphylaxis reported) [FDA]."],
  ae: { common: ["Raised liver enzymes, fatigue, myalgia, oedema, rash, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Differentiation syndrome [FDA]", "PRES [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG, electrolytes, liver tests, blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F4_LOC,
  calc: [],
  sources: [["FDA", "Xospata (gilteritinib) — FDA label (DailyMed)", F4_DM("b5ff59aa-9c0d-49a8-9053-1f179b482383")], F4_BT],
  dose: { tagline: "Oral FLT3 inhibitor for relapsed AML — watch for differentiation syndrome.",
    boxedTitle: "Differentiation syndrome",
    boxed: "Patients treated with XOSPATA have experienced symptoms of differentiation syndrome, which can be fatal or life-threatening if not treated. Symptoms may include fever, dyspnea, hypoxia, pulmonary infiltrates, pleural or pericardial effusions, rapid weight gain or peripheral edema, hypotension, or renal dysfunction. If differentiation syndrome is suspected, initiate corticosteroid therapy and hemodynamic monitoring until symptom resolution [FDA].",
    adult: [{ ind: "Relapsed/refractory FLT3+ AML", text: "120 mg once daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* Brand names — BATCH F4 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"fruquintinib":{"IN":[],"BD":[["Frutinib","Ziska Pharmaceuticals Ltd","5 mg"]],"src":["https://medex.com.bd/brands/39734/frutinib-5-mg-capsule"]},"fulvestrant":{"IN":[["Faslodex","Astrazeneca Pharma India Ltd","Faslodex 250Mg Injection 5Ml"],["Fulzos","Hetero Healthcare Limited","Fulzos 250Mg Pre Filled Syringe Of 5Ml Injection"],["V Strant","Bdr Pharmaceuticals Internationals Pvt Ltd","V Strant 50Mg Pre Filled Syringe Of 5Ml Injection"]],"BD":[["Fulvest","Eskayef Pharmaceuticals Ltd","250 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/faslodex-250mg-inj-5ml-69826","https://pharmeasy.in/online-medicine-order/fulzos-250mg-pre-filled-syringe-of-5ml-injection-3995165","https://pharmeasy.in/online-medicine-order/v-strant-injection-5-ml-4119501","https://medex.com.bd/brands/35456/fulvestrant-sdz-250-mg-im-injection","https://medex.com.bd/brands/33991/fulvestrant-250-mg-im-injection"]},"galantamine":{"IN":[["Galamer","Sun Pharma","Galamer 4Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/galamer-4mg-tablet-48236"]},"gatifloxacin":{"IN":[["Zymaxid","Allergan India Pvt Ltd","Zymaxid 0.5% Bottle Of 2.5Ml Eye Drops"],["Gatilox","Sun Pharma","Gatilox 0.3% Bottle Of 5Ml Eye Drops"],["Zymar","Allergan India Pvt Ltd","Zymar 0.3%W/V Bottle Of 5Ml Eye Drops"]],"BD":[["Gatiflox","Incepta Pharmaceuticals Ltd","0.3%"],["Zymar","Eskayef Pharmaceuticals Ltd","0.3%"],["Tget","Opsonin Pharma Ltd","0.3%"]],"src":["https://pharmeasy.in/online-medicine-order/zymaxid-0-5-eye-drops-2-5ml-2998","https://pharmeasy.in/online-medicine-order/gatilox-0-3-eye-drops-5ml-48442","https://pharmeasy.in/online-medicine-order/zymar-0-3-w-v-eye-drops-5ml-2971","https://medex.com.bd/brands/9396/gatiflox-03-eye-drop","https://medex.com.bd/brands/28430/zymar-03-eye-drop","https://medex.com.bd/brands/32467/tget-d-03-01-eye-drop"]},"gefitinib":{"IN":[["Geftinat","Natco Pharma Ltd","Geftinat 250Mg Strip Of 30 Tablets"],["Geftistar","Lupin","Geftistar 250Mg Strip Of 10 Tablets"],["Geffy","Intas Pharmaceuticals Ltd","Geffy 250Mg Strip Of 10 Tablets"]],"BD":[["Gefinix","Beacon Pharmaceuticals PLC","250 mg"],["Geficent","Incepta Pharmaceuticals Ltd","250 mg"],["Seberb","Genvio Pharma Ltd","250 mg"]],"src":["https://pharmeasy.in/online-medicine-order/geftinat-250mg-tablet-25428","https://pharmeasy.in/online-medicine-order/geftistar-250mg-tablet-101079","https://pharmeasy.in/online-medicine-order/geffy-250mg-tablet-13929","https://medex.com.bd/brands/16515/gefinix-250-mg-tablet","https://medex.com.bd/brands/17312/geficent-250-mg-tablet","https://medex.com.bd/brands/28187/seberb-250-mg-tablet"]},"gemcitabine":{"IN":[["Gemwem","Wembrace Biopharma Private Limited","Gemwem 1000Mg Dry Vial Of 1 Powder For Injection"],["Amgicin","Adley Formulation","Amgicin 200Mg Injection"],["Shilgem","Shilpa Medicare Limited","Shilgem-Rtu 200 Mg / 5.26 Ml Inj"]],"BD":[["Gemcit","Renata PLC","200 mg/5.26 ml"],["Gemzen","Beximco Pharmaceuticals PLC","200 mg/5.26 ml"]],"src":["https://pharmeasy.in/online-medicine-order/gemwem-1000mg-dry-vial-of-1-powder-for-injection-4128410","https://pharmeasy.in/online-medicine-order/amgicin-200mg-inj-99539","https://pharmeasy.in/online-medicine-order/shilgem-rtu-200-mg-5-26-ml-inj-4134822","https://medex.com.bd/brands/26692/gemcitabin-hexal-1-gm-iv-infusion","https://medex.com.bd/brands/17302/gemcitabine-phares-200-mg-iv-infusion","https://medex.com.bd/brands/35430/gemzen-200-mg-iv-infusion"]},"gemfibrozil":{"IN":[["Lopid","Pfizer Limited","Lopid 300Mg Strip Of 10 Capsules"]],"BD":[["Gelicon","Eskayef Pharmaceuticals Ltd","300 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lopid-300mg-capsule-21810","https://medex.com.bd/brands/29943/gelicon-300-mg-capsule"]},"gilteritinib":{"IN":[],"BD":[["Gilternib","Everest Pharmaceuticals Ltd","40 mg"],["Giltela","Jenphar Bangladesh Ltd","40 mg"]],"src":["https://medex.com.bd/brands/38127/gilternib-40-mg-tablet","https://medex.com.bd/brands/39603/giltela-40-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();

/* Brand names — gadolinium agents of batch F-4 (India: PharmEasy; Bangladesh: MedEx) */
(function () { const B = {"gadobutrol":{"IN":[["Gadovist","Bayer Zydus Pharma","Gadovist Vial Of 7.5Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/gadovist-vial-of-7-5ml-solution-for-injection-528154"]},"gadodiamide":{"IN":[],"BD":[["Gadoscan","Popular Pharmaceuticals PLC","287 mg/ml"],["Diascan","Techno Drugs Ltd","287 mg/ml"]],"src":["https://medex.com.bd/brands/16513/gadoscan-287-mg-injection","https://medex.com.bd/brands/16514/diascan-287-mg-injection"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
