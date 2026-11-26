/* Clinical Disease Guide — Drug monograph database, block E, batch 4 (end of E; 26 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text copied from the label by _work/tools/fdb-boxed-fill.js. Labels replaced: etoposide (conventional injection ANDA074529); everolimus adds Afinitor (oncology) to Zortress (transplant).
   Deferred: etynodiol (only in combined pills). */

/* ================= Batch E-4 (fdb-e4.js) ================= */
const E4_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const E4_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const E4_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const E4_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const E4_NEP = "Not established in primary source. [NEP]";
const E4_LD = "Animal LD50: Not established in primary source. [NEP]";
const E4_LOC = { neml: E4_NOT, strengths: "—", stg: E4_NEP };
const E4_ONC = "High-alert — antineoplastic agents are on the ISMP list of high-alert medications [ISMP]";

/* ---------- ETODOLAC (FDA tablets ANDA074839) ---------- */
FDB_M("etodolac", {
  inn: "Etodolac", atc: "M01AB08", cls: "NSAID (pyranocarboxylic acid)",
  linked: [],
  forms: ["Tablets 400, 500 mg; capsules 200, 300 mg; extended-release tablets (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits cyclo-oxygenase, relatively COX-2 preferential [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [E4_NEP],
  ind: { adult: ["Acute pain [FDA].", "Osteoarthritis and rheumatoid arthritis [FDA]."], paed: ["Not established for immediate-release [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Acute pain", "200–400 mg every 6–8 hours; total up to 1,000 mg/day [FDA]."], ["OA / RA", "Start 300 mg twice or three times daily, or 400 mg or 500 mg twice daily; 600 mg/day may suffice long term; doses over 1,000 mg/day not adequately evaluated [FDA]."], ["Renal", "No adjustment generally needed in mild–moderate impairment; use with caution [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Mild–moderate: usually no adjustment, but caution; avoid in advanced renal disease [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: E4_NEP, pregnancy: "Avoid from about 20 weeks (oligohydramnios) and in the third trimester [FDA].", other: "Lowest effective dose for the shortest time [FDA]." },
  tox: { human: "Lethargy, drowsiness, nausea, vomiting, epigastric pain, GI bleeding [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E4_LD, manage: "Supportive; activated charcoal [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to etodolac [FDA].", "Asthma, urticaria or allergic reactions after aspirin or other NSAIDs [FDA].", "CABG surgery setting [FDA]."],
  ae: { common: ["Dyspepsia, abdominal pain, diarrhoea, nausea, headache, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["MI, stroke [FDA]", "GI bleeding, ulceration, perforation [FDA]", "Renal injury, hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["BP, renal function, GI bleeding signs [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "etodolac", indication_id: "pain", label: "Acute pain — 200–400 mg every 6–8 h (max 1,000 mg/day)", route: "PO", population: E4_ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose", value_max: 400 }, interval_h: 8, divided_doses: 3, caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }], rounding: "Whole tablets or capsules", renal: [], flags: ["Every 6–8 hours", "Maximum 1,000 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Etodolac tablets — FDA label (DailyMed)", E4_DM("19e56606-cc91-47d6-980d-5469c0147f74")], E4_BT],
  dose: { tagline: "NSAID for acute pain and arthritis — maximum 1,000 mg a day.",
    boxedTitle: "Risk of serious cardiovascular and gastrointestinal events", boxed: "Cardiovascular Thrombotic Events Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. Etodolac tablets, 400 mg and 500 mg are contraindicated in the setting of coronary artery bypass graft (CABG) surgery. Gastrointestinal Risk NSAIDs cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients are at greater risk for serious gastrointestinal (GI) events [FDA].",
    adult: [{ ind: "Acute pain", text: "200–400 mg every 6–8 h; maximum 1,000 mg/day.", calc: ["pain"] }, { ind: "OA / RA", text: "300 mg two or three times daily, or 400–500 mg twice daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ETOMIDATE (FDA AMIDATE NDA018227) ---------- */
FDB_M("etomidate", {
  inn: "Etomidate", atc: "N01AX07", cls: "IV general anaesthetic (imidazole hypnotic)", risk: "High-alert — IV general anaesthetic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Injection 2 mg/mL (20 mg/10 mL, 40 mg/20 mL) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Enhances GABA-A receptor activity; little cardiovascular depression [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short action; suppresses adrenal steroidogenesis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Induction of general anaesthesia [FDA].", "Supplementation of subpotent anaesthetics during short procedures [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Over 10 years [FDA]."] },
  adult: [["Induction (adults and children over 10 years)", "0.2–0.6 mg/kg IV, individualised; usual 0.3 mg/kg over 30–60 seconds [FDA]."], ["Under 10 years", "Inadequate data for a dose recommendation [FDA]."]],
  paed: { tiers: ["Over 10 years: adult dose (usual 0.3 mg/kg) [FDA].", "Under 10 years: inadequate data [FDA]."], transition: "Adult dose from over 10 years.", calcNote: "2 mg/mL." },
  adj: { renal: E4_NEP, hepatic: E4_NEP, pregnancy: E4_NEP, other: "Not for prolonged infusion (adrenal suppression) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Apnoea, hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E4_LD, manage: "Airway and ventilation; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to etomidate [FDA]."],
  ae: { common: ["Myoclonus, injection pain, nausea and vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Adrenal insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]", "Apnoea, laryngospasm [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Airway, oxygenation, blood pressure [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "etomidate", indication_id: "ind", label: "Induction — usual 0.3 mg/kg IV (range 0.2–0.6)", route: "IV", population: { min_age_months: 120, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.3, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Range 0.2–0.6 mg/kg, over 30–60 seconds", "Only for adults and children over 10 years (no data under 10)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Amidate (etomidate) — FDA label (DailyMed)", E4_DM("eb63c7d7-5eca-4751-be51-45cf4d7715aa")], E4_BT],
  dose: { tagline: "Haemodynamically stable induction agent — single doses only.",
    adult: [{ ind: "Induction of anaesthesia", text: "0.3 mg/kg IV (0.2–0.6) over 30–60 seconds.", calc: ["ind"] }],
    child: [{ ind: "Over 10 years", text: "As adults.", calc: ["ind"] }] }
});

/* ---------- ETONOGESTREL (FDA NEXPLANON NDA021529) ---------- */
FDB_M("etonogestrel", {
  inn: "Etonogestrel", atc: "G03AC08", cls: "Progestin-only contraceptive implant",
  linked: [],
  forms: ["Radiopaque subdermal implant 68 mg (NEXPLANON) [FDA].", "Bhutan: the NEML lists contraceptive implants — check the product in use [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Suppresses ovulation and thickens cervical mucus [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Enzyme-inducing drugs reduce effectiveness [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prevention of pregnancy for up to 5 years [FDA]."], paed: ["Post-menarchal adolescents (efficacy expected) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Contraception", "One implant subdermally on the inner non-dominant upper arm, over the triceps about 8–10 cm from the medial epicondyle and 3–5 cm below the bicipital groove; remove by the end of the 5th year [FDA]."], ["Training", "Only trained professionals should insert and remove [FDA]."]],
  paed: { tiers: ["Post-menarchal: as adults [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Implant — no calculator." },
  adj: { renal: E4_NEP, hepatic: "Contraindicated in active liver disease or liver tumours [FDA].", pregnancy: "Contraindicated (exclude pregnancy before insertion) [FDA].", other: "Strong CYP3A inducers (rifampicin, carbamazepine, efavirenz) reduce effectiveness — use backup [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: E4_NEP },
  contra: ["Known or suspected pregnancy [FDA].", "Current or past thrombosis or thromboembolic disorders [FDA].", "Liver tumours (benign or malignant) or active liver disease [FDA].", "Undiagnosed abnormal genital bleeding [FDA] [UNVERIFIED-KNOWLEDGE].", "Known or suspected breast cancer or progestin-sensitive cancer [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Irregular bleeding, headache, weight gain, acne, breast pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Insertion/removal complications, migration into vessels including pulmonary artery [FDA] [UNVERIFIED-KNOWLEDGE]", "Ectopic pregnancy if failure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Implant palpable after insertion; review at 5 years [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC, calc: [],
  sources: [["FDA", "Nexplanon (etonogestrel implant) — FDA label (DailyMed)", E4_DM("487f8a62-e142-457c-97cc-2e398fde7594")], E4_BT],
  dose: { tagline: "5-year contraceptive implant — insertion and removal by trained staff only.",
    boxedTitle: "Risk of complications due to improper insertion and removal", boxed: "Improper insertion of NEXPLANON increases the risk of complications. Proper training prior to first use of NEXPLANON can minimize the risk of improper NEXPLANON insertion. Because of the risk of complications due to improper insertion and removal NEXPLANON is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the NEXPLANON REMS [FDA].",
    adult: [{ ind: "Contraception", text: "One 68 mg implant in the inner upper arm; replace by 5 years." }],
    child: [{ ind: "Post-menarchal adolescents", text: "As adults." }] }
});

/* ---------- ETOPOSIDE (FDA injection ANDA074529) ---------- */
FDB_M("etoposide", {
  inn: "Etoposide", atc: "L01CB01", cls: "Podophyllotoxin (topoisomerase II inhibitor)", risk: E4_ONC,
  linked: [],
  forms: ["Injection 20 mg/mL (100 mg/5 mL, 500 mg/25 mL, 1 g/50 mL) [FDA] [UNVERIFIED-KNOWLEDGE]; oral capsules 50 mg (other labels).", "Bhutan: not found on the NEML 2025 search [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits topoisomerase II, causing DNA strand breaks [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Clearance correlates with creatinine clearance — reduce in renal impairment [FDA]."],
  ind: { adult: ["Refractory testicular tumours (combination) [FDA].", "Small cell lung cancer, first line (combination) [FDA]."], paed: ["Not established in the label; used in paediatric protocols [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Testicular cancer", "50–100 mg/m²/day on days 1–5, to 100 mg/m²/day on days 1, 3 and 5, with other drugs [FDA]."], ["Small cell lung cancer", "35 mg/m²/day for 4 days to 50 mg/m²/day for 5 days, with other drugs [FDA]."], ["Renal", "CrCl 15–50: 75% of dose initially; under 15: no data [FDA]."], ["Administration", "Dilute; infuse over 30–60 minutes (hypotension if rapid); avoid acrylic/ABS devices with undiluted drug [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Specialist protocol doses [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult label doses." },
  adj: { renal: "CrCl 15–50: 75% of dose [FDA].", hepatic: "Low albumin and raised bilirubin increase toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Secondary leukaemia risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe myelosuppression, mucositis [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E4_LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Previous hypersensitivity to etoposide or any component [FDA]."],
  ae: { common: ["Myelosuppression, nausea, vomiting, alopecia, anorexia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe myelosuppression with infection or bleeding [FDA]", "Hypotension with rapid infusion [FDA] [UNVERIFIED-KNOWLEDGE]", "Anaphylactic-type reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Secondary leukaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before each cycle; renal and liver function; BP during infusion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "etoposide", indication_id: "m100", label: "Testicular cancer — 50–100 mg/m²/day", route: "IV", population: E4_ADULT, basis: "mg_per_m2", dose: { value: 50, unit: "mg", per: "dose", value_max: 100 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.5 mL", renal: [{ crcl_min: 15, crcl_max: 50, action: "reduce_dose", set_value: 37.5, set_value_max: 75, note: "CrCl 15–50: 75% of dose" }], flags: ["Days 1–5 (or 100 mg/m² days 1, 3, 5)", "Infuse over 30–60 min"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Etoposide injection USP — FDA label (DailyMed)", E4_DM("0dddbe44-b4f4-431f-9011-8a54abbd4cbf")], E4_BT],
  dose: { tagline: "Topoisomerase II chemotherapy for testicular and small cell lung cancer.",
    boxedTitle: "Severe myelosuppression", boxed: "Etoposide injection should be administered under the supervision of a qualified physician experienced in the use of cancer chemotherapeutic agents. Severe myelosuppression with resulting infection or bleeding may occur [FDA].",
    adult: [{ ind: "Testicular cancer", text: "50–100 mg/m²/day days 1–5 (combination).", calc: ["m100"] }, { ind: "Small cell lung cancer", text: "35 mg/m²/day × 4 to 50 mg/m²/day × 5 days." }],
    child: [{ ind: "Children", text: "Specialist protocol." }] }
});

/* ---------- ETRANACOGENE DEZAPARVOVEC (FDA HEMGENIX BLA125772) ---------- */
FDB_M("etranacogene-dezaparvovec", {
  inn: "Etranacogene dezaparvovec", atc: "B02BD", cls: "AAV5 gene therapy (factor IX Padua)",
  linked: [],
  forms: ["Suspension for IV infusion (one-time) [FDA].", "Bhutan: not available [BT-NEML]."],
  moa: "Delivers a factor IX gene (Padua variant) to liver cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic impairment reduces FIX activity response [FDA]."],
  ind: { adult: ["Adults with haemophilia B on FIX prophylaxis, or with current or historical life-threatening haemorrhage, or repeated serious spontaneous bleeding [FDA]."], paed: ["Not indicated [NEP]."] },
  adult: [["Single dose", "2 × 10¹³ genome copies/kg IV after dilution in normal saline, at 500 mL/hour (8 mL/min) [FDA]."], ["Before", "Test for FIX inhibitors (do not give if positive) and liver health [FDA]."]],
  paed: { tiers: ["Not indicated [NEP]."], transition: "—", calcNote: "Gene therapy — no calculator." },
  adj: { renal: "Limited data in mild–moderate impairment [FDA].", hepatic: "Advanced impairment/cirrhosis not studied [FDA].", pregnancy: E4_NEP, other: "Monitor liver enzymes weekly for 3 months (immune hepatotoxicity) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: E4_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Raised ALT, headache, flu-like symptoms, infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatocellular carcinogenicity (theoretical) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver enzymes and FIX activity after dosing [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC, calc: [],
  sources: [["FDA", "Hemgenix (etranacogene dezaparvovec-drlb) — FDA label (DailyMed)", E4_DM("35b2db65-4c6c-4173-ab56-b2bca69193bd")], E4_BT],
  dose: { tagline: "One-time gene therapy for haemophilia B.",
    adult: [{ ind: "Haemophilia B", text: "2 × 10¹³ gc/kg IV once." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- ETRASIMOD (FDA VELSIPITY NDA216956) ---------- */
FDB_M("etrasimod", {
  inn: "Etrasimod", atc: "L04AE05", cls: "Sphingosine 1-phosphate receptor modulator",
  linked: [],
  forms: ["Tablets 2 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "S1P receptor modulator that retains lymphocytes in lymph nodes [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Extensive hepatic metabolism; higher exposure in severe hepatic impairment [FDA]."],
  ind: { adult: ["Moderately to severely active ulcerative colitis in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Ulcerative colitis", "2 mg once daily [FDA]."], ["Before starting", "CBC with lymphocytes (within 6 months), ECG, liver tests, eye examination if indicated, varicella immunity [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: E4_NEP, hepatic: "Severe hepatic impairment: not recommended [FDA].", pregnancy: "Can cause fetal harm; contraception during and for 1 week after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Bradyarrhythmia at start; macular oedema; avoid live vaccines [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: E4_NEP },
  contra: ["In the last 6 months: MI, unstable angina, stroke, TIA, decompensated heart failure needing hospitalisation, or class III/IV heart failure [FDA].", "Mobitz type II second- or third-degree AV block, sick sinus syndrome or sinoatrial block without a pacemaker [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, raised liver enzymes, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infections including PML [FDA] [UNVERIFIED-KNOWLEDGE]", "Bradyarrhythmia, AV block [FDA] [UNVERIFIED-KNOWLEDGE]", "Macular oedema, liver injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lymphocytes, liver tests, BP, eye symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "etrasimod", indication_id: "uc", label: "Ulcerative colitis — 2 mg once daily", route: "PO", population: E4_ADULT, basis: "fixed", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["ECG and CBC before starting"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Velsipity (etrasimod) — FDA label (DailyMed)", E4_DM("65171e4a-d136-4abc-b08c-c40c1b486ff6")], E4_BT],
  dose: { tagline: "Oral S1P modulator for ulcerative colitis — check ECG first.",
    adult: [{ ind: "Ulcerative colitis", text: "2 mg once daily.", calc: ["uc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ETRAVIRINE (FDA tablets NDA022187) ---------- */
FDB_M("etravirine", {
  inn: "Etravirine", atc: "J05AG04", cls: "Non-nucleoside reverse transcriptase inhibitor (second generation)",
  linked: [],
  forms: ["Tablets 25, 100, 200 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds HIV-1 reverse transcriptase; active against many NNRTI-resistant strains [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal clearance negligible [FDA].", "Must be taken after a meal [FDA]."],
  ind: { adult: ["Treatment-experienced HIV-1 with NNRTI resistance, with other antiretrovirals [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["2 years and over, at least 10 kg [FDA]."] },
  adult: [["HIV-1", "200 mg twice daily after a meal (also in pregnancy) [FDA]."]],
  paed: { tiers: ["2 to under 18 years (after a meal, twice daily): 10 to under 20 kg 100 mg; 20 to under 25 kg 125 mg; 25 to under 30 kg 150 mg; 30 kg and over 200 mg [FDA]."], transition: "30 kg: adult dose.", calcNote: "Tablets may be dispersed in water." },
  adj: { renal: "No adjustment [FDA].", hepatic: "No adjustment in Child-Pugh A or B; C not studied [FDA].", pregnancy: "200 mg twice daily [FDA].", other: "Many CYP3A/2C interactions [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Rash, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe skin reactions (SJS, TEN, DRESS) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic failure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Rash; liver tests; viral load [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "etravirine", indication_id: "adult", label: "HIV-1 adult — 200 mg twice daily after a meal", route: "PO", population: E4_ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["After a meal"], sources: ["FDA"] },
    { drug: "etravirine", indication_id: "child", label: "HIV-1 child 2 years+, 10 kg+ — by weight", route: "PO", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 10, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 10, max_weight_kg: 20, text: "100 mg twice daily after a meal", daily: 200 }, { min_weight_kg: 20, max_weight_kg: 25, text: "125 mg twice daily after a meal", daily: 250 }, { min_weight_kg: 25, max_weight_kg: 30, text: "150 mg twice daily after a meal", daily: 300 }, { min_weight_kg: 30, max_weight_kg: null, text: "200 mg twice daily after a meal", daily: 400 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "25 and 100 mg tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Etravirine tablets — FDA label (DailyMed)", E4_DM("50ca19cb-0f43-4d7b-8c9e-8b3aaded0546")], E4_BT],
  dose: { tagline: "Second-generation NNRTI for resistant HIV — after meals; watch for rash.",
    adult: [{ ind: "HIV-1 (treatment-experienced)", text: "200 mg twice daily after a meal.", calc: ["adult"] }],
    child: [{ ind: "HIV-1, 2 years+", text: "100–200 mg twice daily by weight.", calc: ["child"] }] }
});

/* ---------- ETRIPAMIL (FDA CARDAMYST NDA218571) ---------- */
FDB_M("etripamil", {
  inn: "Etripamil", atc: "C08DA", cls: "Short-acting calcium-channel blocker (nasal)",
  linked: [],
  forms: ["Nasal spray device delivering 2 sprays = 70 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "L-type calcium-channel blocker that slows AV-node conduction [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal or hepatic impairment effects unknown [FDA]."],
  ind: { adult: ["Conversion of acute symptomatic PSVT episodes to sinus rhythm [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["PSVT episode", "70 mg = one spray in each nostril as soon as possible after symptom onset; if symptoms persist after 10 minutes, a second 70 mg dose; maximum 140 mg in 24 hours [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: "Effect unknown [FDA].", hepatic: "Effect unknown [FDA].", pregnancy: E4_NEP, other: "Syncope/hypotension — sit when using [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: E4_NEP },
  contra: ["Hypersensitivity [FDA].", "Heart failure NYHA class II–IV [FDA].", "Wolff-Parkinson-White syndrome / pre-excitation [FDA] [UNVERIFIED-KNOWLEDGE].", "Second- or third-degree AV block, sick sinus syndrome without pacemaker [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nasal discomfort, nasal congestion, rhinorrhoea, epistaxis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Syncope, hypotension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Seek care if symptoms persist [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "etripamil", indication_id: "psvt", label: "PSVT — 70 mg nasal (one spray each nostril)", route: "Nasal", population: E4_ADULT, basis: "fixed", dose: { value: 70, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 70, max_daily: 140, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "One device", renal: [], flags: ["Repeat after 10 minutes if symptoms persist", "Maximum 140 mg in 24 hours"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cardamyst (etripamil) nasal spray — FDA label (DailyMed)", E4_DM("a92170b9-4f93-4b83-b2cd-cb85c52821cd")], E4_BT],
  dose: { tagline: "Self-administered nasal spray to stop PSVT episodes.",
    adult: [{ ind: "PSVT episode", text: "70 mg nasal; repeat once after 10 min; maximum 140 mg/24 h.", calc: ["psvt"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EVEROLIMUS (FDA ZORTRESS NDA021560 + AFINITOR NDA022334) ---------- */
FDB_M("everolimus", {
  inn: "Everolimus", atc: "L04AH02 L01EG02", cls: "mTOR inhibitor (immunosuppressant / antineoplastic)", risk: E4_ONC,
  linked: [],
  forms: ["Zortress tablets 0.25, 0.5, 0.75, 1 mg (transplant); Afinitor tablets 2.5, 5, 7.5, 10 mg and Disperz tablets for suspension (oncology/TSC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits mTOR, blocking T-cell proliferation and tumour growth signalling [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4/P-gp substrate — therapeutic drug monitoring for transplant and TSC [FDA]."],
  ind: { adult: ["Prophylaxis of kidney and liver transplant rejection (Zortress) [FDA].", "HR+/HER2– breast cancer (with exemestane), neuroendocrine tumours, renal cell carcinoma, TSC renal angiomyolipoma (Afinitor) [FDA]."], paed: ["TSC-associated SEGA and partial-onset seizures (Afinitor/Disperz) [FDA]."] },
  adult: [["Kidney transplant (Zortress)", "0.75 mg twice daily as soon as possible after transplant, with reduced-dose ciclosporin; trough 3–8 ng/mL [FDA]."], ["Liver transplant (Zortress)", "1 mg twice daily from 30 days after transplant, with reduced-dose tacrolimus; trough 3–8 ng/mL [FDA]."], ["Oncology (Afinitor)", "10 mg once daily (breast cancer, NET, RCC, TSC angiomyolipoma) [FDA]."], ["TSC SEGA / seizures (Afinitor)", "4.5 mg/m² (SEGA) or 5 mg/m² (seizures) once daily; trough 5–15 ng/mL [FDA]."], ["Hepatic (Afinitor 10 mg indications)", "Child-Pugh A 7.5 mg; B 5 mg; C 2.5 mg if benefit outweighs risk [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Hepatic (Zortress)", "Mild: reduce initial dose by one-third; moderate or severe: by one-half [FDA]."]],
  paed: { tiers: ["TSC SEGA: 4.5 mg/m² once daily; TSC seizures: 5 mg/m² once daily; titrate to trough 5–15 ng/mL [FDA]."], transition: "—", calcNote: "Do not combine Afinitor and Disperz forms for one dose." },
  adj: { renal: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Reduce (see dosing) [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A4 inhibitors; avoid live vaccines; stomatitis — dexamethasone mouthwash [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to everolimus, sirolimus or other rapamycin derivatives [FDA]."],
  ae: { common: ["Stomatitis, infections, rash, fatigue, diarrhoea, oedema, hyperglycaemia, hyperlipidaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Non-infectious pneumonitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious infections, malignancy (transplant) [FDA]", "Kidney graft thrombosis, nephrotoxicity with full-dose ciclosporin [FDA]", "Increased mortality in heart transplant (not recommended) [FDA]"] },
  monitor: ["Trough levels (transplant, TSC); glucose, lipids, renal function, blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "everolimus", indication_id: "kidney", label: "Kidney transplant — 0.75 mg twice daily", route: "PO", population: E4_ADULT, basis: "fixed", dose: { value: 0.75, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.75, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Target trough 3–8 ng/mL", "With reduced-dose ciclosporin"], sources: ["FDA"] },
    { drug: "everolimus", indication_id: "onc", label: "Oncology (Afinitor) — 10 mg once daily", route: "PO", population: E4_ADULT, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Child-Pugh A 7.5 mg; B 5 mg; C 2.5 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Zortress (everolimus) — FDA label (DailyMed)", E4_DM("e082a024-7850-400b-a5c2-2a140612562a")], ["FDA", "Afinitor / Afinitor Disperz (everolimus) — FDA label (DailyMed)", E4_DM("2150f73a-179b-4afc-b8ce-67c85cc72f04")], E4_BT],
  dose: { tagline: "mTOR inhibitor — low-dose transplant immunosuppressant or 10 mg anticancer dose.",
    boxedTitle: "Malignancies, serious infections, kidney graft thrombosis, nephrotoxicity and mortality in heart transplantation (Zortress)", boxed: "Malignancies and Serious Infections Only physicians experienced in immunosuppressive therapy and management of transplant patients should prescribe Zortress. Patients receiving the drug should be managed in facilities equipped and staffed with adequate laboratory and supportive medical resources. The physician responsible for maintenance therapy should have complete information requisite for the follow-up of the patient. Increased susceptibility to infection and the possible development of malignancies, such as lymphoma and skin cancer, may result from immunosuppression. Kidney Graft Thrombosis An increased risk of kidney arterial and venous thrombosis, resulting in graft loss, was reported, mostly within the first 30 days posttransplantation. Nephrotoxicity Increased nephrotoxicity can occur with use of standard doses of cyclosporine in combination with Zortress. Therefore, reduced doses of cyclosporine should be used in combination with Zortress in order to reduce renal dysfunction. It is important to monitor the cyclosporine and everolimus whole blood trough concentrations. Mortality in Heart Transplantation Increased mortality, often associated with serious infections, within the first three months posttransplantation was observed in a clinical trial of de novo heart transplant patients receiving immunosuppressive regimens with or without induction therapy. Use in heart transplantation is not recommended [FDA].",
    adult: [{ ind: "Kidney transplant", text: "0.75 mg twice daily (trough 3–8 ng/mL).", calc: ["kidney"] }, { ind: "Liver transplant", text: "1 mg twice daily from day 30." }, { ind: "Breast cancer, NET, RCC", text: "10 mg once daily.", calc: ["onc"] }],
    child: [{ ind: "TSC SEGA / seizures", text: "4.5–5 mg/m² once daily; trough 5–15 ng/mL." }] }
});

/* ---------- EVOLOCUMAB (FDA REPATHA BLA125522) ---------- */
FDB_M("evolocumab", {
  inn: "Evolocumab", atc: "C10AX13", cls: "PCSK9 inhibitor (monoclonal antibody)",
  linked: [],
  forms: ["Pre-filled syringe/autoinjector 140 mg/mL; on-body infusor 420 mg/3.5 mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds PCSK9, increasing LDL receptor recycling and lowering LDL-C [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No adjustment in renal or mild–moderate hepatic impairment [FDA]."],
  ind: { adult: ["Reduce major cardiovascular events in established CVD or high risk [FDA] [UNVERIFIED-KNOWLEDGE].", "Primary hyperlipidaemia including HeFH; HoFH [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["HeFH and HoFH from 10 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["CV risk / hyperlipidaemia / HeFH", "140 mg SC every 2 weeks or 420 mg once monthly [FDA]."], ["Switching regimen", "Give the first dose of the new regimen on the next scheduled date [FDA]."]],
  paed: { tiers: ["HeFH 10 years and over: 140 mg every 2 weeks or 420 mg monthly [FDA]."], transition: "Adult dose.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [FDA].", hepatic: "No adjustment Child-Pugh A or B; C no data [FDA].", pregnancy: E4_NEP, other: E4_NEP },
  tox: { human: E4_NEP, animal: E4_LD, manage: E4_NEP },
  contra: ["History of serious hypersensitivity to evolocumab or excipients [FDA]."],
  ae: { common: ["Nasopharyngitis, upper respiratory infection, injection-site reactions, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity, angioedema [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LDL-C 4–8 weeks after starting [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC, calc: [],
  sources: [["FDA", "Repatha (evolocumab) — FDA label (DailyMed)", E4_DM("cd61e902-166d-4aa6-9f3c-a18c1008d07e")], E4_BT],
  dose: { tagline: "PCSK9 antibody — 140 mg every 2 weeks or 420 mg monthly.",
    adult: [{ ind: "Hyperlipidaemia / CV risk", text: "140 mg SC every 2 weeks or 420 mg monthly." }],
    child: [{ ind: "HeFH 10 years+", text: "As adults." }] }
});

/* ---------- EXAGAMGLOGENE AUTOTEMCEL (FDA CASGEVY BLA125787) ---------- */
FDB_M("exagamglogene-autotemcel", {
  inn: "Exagamglogene autotemcel", atc: "B06AX05", cls: "Autologous CRISPR-edited stem-cell gene therapy (BCL11A enhancer)",
  linked: [],
  forms: ["Autologous CD34+ cell suspension for IV infusion [FDA].", "Bhutan: not available [BT-NEML]."],
  moa: "Edits the BCL11A erythroid enhancer to raise fetal haemoglobin [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable [NEP]."],
  ind: { adult: ["Sickle cell disease with recurrent vaso-occlusive crises, 12 years and over [FDA] [UNVERIFIED-KNOWLEDGE].", "Transfusion-dependent beta-thalassaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["From 2 years per current label [FDA]."] },
  adult: [["Single dose", "Minimum 3 × 10⁶ CD34+ cells/kg IV after full myeloablative conditioning (48 hours to 7 days before) [FDA]."], ["Before", "Stem-cell mobilisation and apheresis; consider seizure and hepatic VOD prophylaxis before busulfan conditioning [FDA]."]],
  paed: { tiers: ["Same per-kg cell dose (2 years and over) [FDA]."], transition: "—", calcNote: "Cell therapy — no calculator." },
  adj: { renal: "Not studied if eGFR under 60 [FDA].", hepatic: "Not studied [FDA].", pregnancy: E4_NEP, other: "Neutrophil and platelet engraftment delays; long-term follow-up [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: E4_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Mucositis, febrile neutropenia, decreased appetite (mainly conditioning) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Delayed engraftment, prolonged thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic VOD from busulfan [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts until engraftment; long-term follow-up [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC, calc: [],
  sources: [["FDA", "Casgevy (exagamglogene autotemcel) — FDA label (DailyMed)", E4_DM("7c3e12ad-e2fe-4d3f-a630-ea7364d9e846")], E4_BT],
  dose: { tagline: "One-time gene-edited stem-cell therapy for sickle cell disease and beta-thalassaemia.",
    adult: [{ ind: "SCD / TDT", text: "At least 3 × 10⁶ CD34+ cells/kg IV once after myeloablation." }],
    child: [{ ind: "2 years and over", text: "Same cell dose per kg." }] }
});

/* ---------- EXEMESTANE (FDA tablets NDA020753) ---------- */
FDB_M("exemestane", {
  inn: "Exemestane", atc: "L02BG06", cls: "Steroidal aromatase inactivator", risk: E4_ONC,
  linked: [],
  forms: ["Tablets 25 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Irreversibly inactivates aromatase, lowering oestrogen in postmenopausal women [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Higher exposure in moderate–severe hepatic or renal (CrCl under 35) impairment, no adjustment stated [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Adjuvant ER-positive early breast cancer in postmenopausal women after 2–3 years of tamoxifen, to complete 5 years [FDA].", "Advanced breast cancer in postmenopausal women after tamoxifen [FDA]."], paed: ["Not indicated [NEP]."] },
  adult: [["Breast cancer", "25 mg once daily after a meal [FDA]."], ["With strong CYP3A4 inducers", "50 mg once daily [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not indicated [NEP]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment stated [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No adjustment stated [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Not for premenopausal women; can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Bone density loss — assess BMD; check vitamin D [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: E4_NEP },
  contra: ["Known hypersensitivity to exemestane or excipients [FDA]."],
  ae: { common: ["Hot flushes, fatigue, arthralgia, headache, insomnia, sweating [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Reduced bone mineral density, fractures [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised cholesterol [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bone mineral density; lipids [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "exemestane", indication_id: "bc", label: "Breast cancer — 25 mg once daily after a meal", route: "PO", population: E4_ADULT, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Strong CYP3A4 inducers: 50 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Exemestane tablets — FDA label (DailyMed)", E4_DM("69abd0ff-b200-4d1a-b14a-80e980a8e781")], E4_BT],
  dose: { tagline: "Aromatase inactivator for postmenopausal ER-positive breast cancer.",
    adult: [{ ind: "Breast cancer (postmenopausal)", text: "25 mg once daily after a meal.", calc: ["bc"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- EXENATIDE (FDA BYETTA NDA021773) ---------- */
FDB_M("exenatide", {
  inn: "Exenatide", atc: "A10BJ01", cls: "GLP-1 receptor agonist (short-acting)",
  linked: [],
  forms: ["Pen 250 mcg/mL delivering 5 mcg or 10 mcg per dose [FDA] [UNVERIFIED-KNOWLEDGE]; once-weekly extended-release in other labels.", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "GLP-1 agonist: glucose-dependent insulin release, glucagon suppression, slower gastric emptying [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally cleared — not recommended if CrCl under 30 [FDA]."],
  ind: { adult: ["Type 2 diabetes (adjunct to diet and exercise) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Type 2 diabetes", "5 mcg SC twice daily within 60 minutes before morning and evening meals (or the two main meals, 6 h or more apart); after 1 month may increase to 10 mcg twice daily. Never after a meal [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "CrCl under 30 or ESRD: not recommended; caution after renal transplant [FDA].", hepatic: "No PK study [FDA].", pregnancy: E4_NEP, other: "Slows absorption of oral drugs; hypoglycaemia with sulfonylureas [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe nausea, vomiting, rapid fall in glucose [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E4_LD, manage: "Supportive; treat hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Prior severe hypersensitivity to exenatide or excipients [FDA].", "History of drug-induced immune thrombocytopenia from exenatide [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, dizziness, headache, jitteriness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Acute kidney injury [FDA]", "Hypoglycaemia with sulfonylurea [FDA] [UNVERIFIED-KNOWLEDGE]", "Immune thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Renal function, glucose, HbA1c [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E4_LOC,
  calc: [
    { drug: "exenatide", indication_id: "t2dm", label: "Type 2 diabetes — 5 mcg SC twice daily before meals", route: "SC", population: E4_ADULT, basis: "fixed", dose: { value: 5, unit: "mcg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 10, max_daily: 20, unit: "mcg" }, weight_basis: "NEP", formulations: [], rounding: "Pen dose", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "CrCl under 30 or ESRD: not recommended [FDA]" }], flags: ["Within 60 min before meals; never after a meal", "May increase to 10 mcg after 1 month"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Byetta (exenatide) — FDA label (DailyMed)", E4_DM("53d03c03-ebf7-418d-88a8-533eabd2ee4f")], E4_BT],
  dose: { tagline: "Twice-daily GLP-1 injection before meals — not if CrCl under 30.",
    adult: [{ ind: "Type 2 diabetes", text: "5 mcg twice daily before meals; 10 mcg after 1 month.", calc: ["t2dm"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EZETIMIBE (FDA ZETIA NDA021445) ---------- */
FDB_M("ezetimibe", {
  inn: "Ezetimibe", atc: "C10AX09", cls: "Cholesterol absorption inhibitor",
  linked: [],
  forms: ["Tablets 10 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks NPC1L1-mediated intestinal cholesterol absorption [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No renal adjustment [FDA]."],
  ind: { adult: ["Primary hyperlipidaemia with a statin or alone [FDA].", "HoFH with statins; sitosterolaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["HeFH from 10 years (with statin); sitosterolaemia from 9 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hyperlipidaemia", "10 mg once daily with or without food; check LDL-C from 4 weeks [FDA]."], ["Bile-acid sequestrants", "Take ezetimibe at least 2 hours before or 4 hours after [FDA]."]],
  paed: { tiers: ["10 mg once daily where indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [FDA].", hepatic: "Moderate or severe (Child-Pugh B or C): not recommended [FDA].", pregnancy: E4_NEP, other: "With statins: monitor liver enzymes per statin label [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E4_NEP, animal: E4_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity (anaphylaxis, angioedema, rash, urticaria) [FDA].", "With a statin: active liver disease or pregnancy (statin contraindications) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Upper respiratory infection, diarrhoea, arthralgia, sinusitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myopathy/rhabdomyolysis (rare, mostly with statins) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LDL-C from 4 weeks [FDA]."],
  local: E4_LOC,
  calc: [
    { drug: "ezetimibe", indication_id: "std", label: "Hyperlipidaemia — 10 mg once daily", route: "PO", population: { min_age_months: 108, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Not in moderate or severe hepatic impairment"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Zetia (ezetimibe) — FDA label (DailyMed)", E4_DM("174e45e0-45bb-48b7-9e60-8f6cfc1d22bb")], E4_BT],
  dose: { tagline: "Adds about 20% LDL lowering to a statin — 10 mg once daily.",
    adult: [{ ind: "Hyperlipidaemia", text: "10 mg once daily.", calc: ["std"] }],
    child: [{ ind: "HeFH 10 years+ / sitosterolaemia 9 years+", text: "10 mg once daily.", calc: ["std"] }] }
});

/* Brand names — BATCH E4 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"etodolac":{"IN":[["Etova","Ipca Laboratories","Etova Er 600Mg Strip Of 10 Tablets"],["Setolac","Zuventus Health Care Ltd","Setolac Er 300Mg Strip Of 10 Tablets"],["Proxym","Emcure Pharmaceuticals Ltd","Proxym Er 300Mg Strip Of 15 Tablets"]],"BD":[["Edolac","Opsonin Pharma Ltd","300 mg"],["Edolac ER","Opsonin Pharma Ltd","600 mg"],["Edopain","Incepta Pharmaceuticals Ltd","300 mg"]],"src":["https://pharmeasy.in/online-medicine-order/etova-er-600mg-tablet-14827","https://pharmeasy.in/online-medicine-order/setolac-er-300mg-strip-of-10-tablets-30203","https://pharmeasy.in/online-medicine-order/proxym-er-300mg-strip-of-15-tablets-3868075","https://medex.com.bd/brands/11144/edolac-300-mg-capsule","https://medex.com.bd/brands/11145/edolac-er-600-mg-xr-tablet","https://medex.com.bd/brands/11146/edopain-300-mg-capsule"]},"etoposide":{"IN":[["Adside","Adley Formulation","Adside 50Mg Strip Of 8 Capsules"],["Posid","Cadila Pharmaceuticals Limited","Posid 50Mg Bottle Of 8 Capsules"],["Etovel","Getwell Life Science Pvt Ltd","Etovel 100Mg Injection"]],"BD":[["Lastet","Nippon Kayaku Ltd","100 mg/5 ml"],["Eposide","Techno Drugs Ltd","100 mg/5 ml"],["Topoxin","Beacon Pharmaceuticals PLC","100 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/adside-50mg-cap-99524","https://pharmeasy.in/online-medicine-order/posid-50mg-capsule-5462","https://pharmeasy.in/online-medicine-order/etovel-100mg-inj-165566","https://medex.com.bd/brands/15078/lastet-100-mg-iv-infusion","https://medex.com.bd/brands/15080/eposide-100-mg-iv-infusion","https://medex.com.bd/brands/15081/topoxin-100-mg-iv-infusion"]},"etrasimod":{"IN":[],"BD":[["Etragut","Incepta Pharmaceuticals Ltd","2 mg"],["Etrasim","Navana Pharmaceuticals Ltd","2 mg"]],"src":["https://medex.com.bd/brands/39524/etragut-2-mg-tablet","https://medex.com.bd/brands/39868/etrasim-2-mg-tablet"]},"everolimus":{"IN":[["Evergraf","Mankind Pharmaceuticals Ltd","Evergraf 0.5Mg Strip Of 10 Tablets"],["Evermil","Glenmark Pharmaceuticals","Evermil 10Mg Strip Of 10 Tablets"],["Everogress","La Renon Healthcare Pvt Ltd","Everogress 0.5Mg Strip Of 10 Tablets"]],"BD":[["Certican","Nevian Lifescience PLC","0.25 mg"],["Xevirol","Beacon Pharmaceuticals PLC","5 mg"],["Afinitor","Nevian Lifescience PLC","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/evergraf-0-5mg-tablet-87794","https://pharmeasy.in/online-medicine-order/evermil-10mg-tablet-166655","https://pharmeasy.in/online-medicine-order/everogress-0-5mg-strip-of-10-tablets-4783736","https://medex.com.bd/brands/15153/certican-025-mg-tablet","https://medex.com.bd/brands/17265/xevirol-5-mg-tablet","https://medex.com.bd/brands/26673/afinitor-5-mg-tablet"]},"exemestane":{"IN":[["Aromasin","Pfizer Product India Private Limited","Aromasin 25Mg Strip Of 15 Tablets"],["Xcel","Celon Laboratories Ltd","Xcel 25Mg Strip Of 10 Tablets"]],"BD":[["Exemis","Eskayef Pharmaceuticals Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/aromasin-25mg-tablet-35413","https://pharmeasy.in/online-medicine-order/xcel-25mg-tablet-187225","https://medex.com.bd/brands/35638/exemis-25-mg-tablet"]},"ezetimibe":{"IN":[["Ezedoc","Lupin","Ezedoc 10Mg Strip Of 15 Tablets"],["Ezentia","Sun Pharma","Ezentia 10Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/ezedoc-10mg-strip-of-15-tablets-4674260","https://pharmeasy.in/online-medicine-order/ezentia-10mg-tablet-46485"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
