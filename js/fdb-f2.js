/* Clinical Disease Guide — Drug monograph database, block F, batch 2 (26 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text copied from the label by _work/tools/fdb-boxed-fill.js. Label replaced: fexofenadine (adult 180 mg OTC tablet label).
   Deferred: ferrous fumarate (pack matched a combined contraceptive; Bhutan NEML uses ferrous sulphate + folic acid). */

/* ================= Batch F-2 (fdb-f2.js) ================= */
const F2_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const F2_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const F2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const F2_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const F2_NEP = "Not established in primary source. [NEP]";
const F2_LD = "Animal LD50: Not established in primary source. [NEP]";
const F2_LOC = { neml: F2_NOT, strengths: "—", stg: F2_NEP };
const F2_ONC = "High-alert — antineoplastic agents are on the ISMP list of high-alert medications [ISMP]";
const F2_PET = (key, inn, label, set, mbq, mci, use, wait) => FDB_M(key, {
  inn, atc: "V09", cls: "Diagnostic radiopharmaceutical (fluorine-18 PET agent)",
  linked: [],
  forms: ["Injection, multiple-dose vial; activity calibrated at the time of use [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not available [BT-NEML]."],
  moa: "Positron-emitting tracer that binds the imaging target for PET [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Fluorine-18 half-life about 110 minutes [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: [use + " [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["PET imaging", `${mbq} MBq (${mci} mCi) as an IV bolus; ${wait} [FDA].`], ["Radiation safety", "Handle with radiation safety measures; encourage hydration and voiding [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed activity — no calculator." },
  adj: { renal: F2_NEP, hepatic: F2_NEP, pregnancy: "Radiation exposure — weigh risk [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Image interpretation requires trained readers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F2_NEP, animal: F2_LD, manage: F2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, injection-site reactions, flushing (uncommon) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity (rare) [FDA] [UNVERIFIED-KNOWLEDGE]", "Radiation risk [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["None specific [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 (PET not available locally) [BT-NEML] [UNVERIFIED-KNOWLEDGE].", strengths: "—", stg: F2_NEP }, calc: [],
  sources: [["FDA", label + " — FDA label (DailyMed)", F2_DM(set)], F2_BT],
  dose: { tagline: "Diagnostic PET tracer — " + mbq + " MBq IV.", adult: [{ ind: "PET imaging", text: `${mbq} MBq (${mci} mCi) IV.` }], child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FESOTERODINE (FDA TOVIAZ NDA022030) ---------- */
FDB_M("fesoterodine", {
  inn: "Fesoterodine", atc: "G04BD11", cls: "Antimuscarinic (bladder)",
  linked: [],
  forms: ["Extended-release tablets 4, 8 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Prodrug of 5-hydroxymethyl tolterodine; muscarinic receptor antagonist [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal impairment and strong CYP3A4 inhibitors raise exposure [FDA]."],
  ind: { adult: ["Overactive bladder (urge incontinence, urgency, frequency) [FDA]."], paed: ["Neurogenic detrusor overactivity from 6 years, over 25 kg [FDA]."] },
  adult: [["OAB", "Start 4 mg once daily; may increase to 8 mg once daily [FDA]."], ["Renal (adults)", "CrCl 30–89: up to 8 mg; CrCl 15–29: 4 mg; under 15: 4 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Strong CYP3A4 inhibitors", "Maximum 4 mg [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["NDO 6 years+: over 25 kg to 35 kg 4 mg once daily (may increase to 8 mg); over 35 kg start 4 mg, after 1 week 8 mg once daily [FDA]."], transition: "Adult dose.", calcNote: "Swallow whole." },
  adj: { renal: "CrCl under 30: 4 mg once daily [FDA].", hepatic: "Severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: F2_NEP, other: "Heat prostration (reduced sweating); CNS effects [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Anticholinergic toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Supportive; ECG monitoring [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to fesoterodine, tolterodine or ingredients [FDA].", "Urinary retention, gastric retention, uncontrolled narrow-angle glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dry mouth, constipation, dry eyes, urinary tract infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Angioedema [FDA] [UNVERIFIED-KNOWLEDGE]", "Urinary retention [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Post-void residual if retention risk [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "fesoterodine", indication_id: "oab", label: "OAB — start 4 mg once daily", route: "PO", population: F2_ADULT, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 8, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 4, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "cap_daily", max_daily: 4, note: "CrCl under 30: maximum 4 mg/day" }], flags: ["May increase to 8 mg (not if CrCl under 30)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Toviaz (fesoterodine) — FDA label (DailyMed)", F2_DM("5be745f0-8ae7-4c3c-9962-37d6263326f1")], F2_BT],
  dose: { tagline: "Once-daily antimuscarinic for overactive bladder.",
    adult: [{ ind: "Overactive bladder", text: "4 mg once daily, up to 8 mg (4 mg max if CrCl under 30).", calc: ["oab"] }],
    child: [{ ind: "NDO 6 years+, over 25 kg", text: "4 mg, then 8 mg once daily." }] }
});

/* ---------- FEXINIDAZOLE (FDA NDA214429) ---------- */
FDB_M("fexinidazole", {
  inn: "Fexinidazole", atc: "P01CA03", cls: "Nitroimidazole antiprotozoal (trypanosomiasis)",
  linked: [],
  forms: ["Tablets 600 mg [FDA].", "Bhutan: not on the NEML (human African trypanosomiasis not endemic) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Nitroimidazole activated within trypanosomes to reactive metabolites [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Must be taken with food [FDA]."],
  ind: { adult: ["First- and second-stage human African trypanosomiasis due to T. brucei gambiense [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["6 years and over, at least 20 kg [FDA]."] },
  adult: [["35 kg and over", "1,800 mg (3 tablets) once daily for 4 days, then 1,200 mg (2 tablets) once daily for 6 days, with food [FDA]."], ["20 to under 35 kg", "1,200 mg (2 tablets) once daily for 4 days, then 600 mg (1 tablet) once daily for 6 days [FDA]."], ["Administration", "Do not break or crush; same time each day [FDA]."]],
  paed: { tiers: ["6 years+, 20 to under 35 kg: 1,200 mg × 4 days then 600 mg × 6 days [FDA]."], transition: "35 kg and over: adult regimen.", calcNote: "Weight bands." },
  adj: { renal: "Severe renal impairment: avoid [FDA].", hepatic: "Severe hepatic impairment: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: F2_NEP, other: "QT prolongation; neuropsychiatric reactions; neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F2_NEP, animal: F2_LD, manage: F2_NEP },
  contra: ["Hypersensitivity to fexinidazole or nitroimidazoles (metronidazole, tinidazole) [FDA].", "Severe hepatic impairment [FDA].", "Cockayne syndrome [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Vomiting, nausea, headache, insomnia, tremor, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Neuropsychiatric reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG, blood counts, neuropsychiatric status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "fexinidazole", indication_id: "hat", label: "HAT — loading dose by weight (days 1–4)", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: 20, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 20, max_weight_kg: 35, text: "1,200 mg once daily × 4 days, then 600 mg once daily × 6 days (with food)", daily: 1200 }, { min_weight_kg: 35, max_weight_kg: null, text: "1,800 mg once daily × 4 days, then 1,200 mg once daily × 6 days (with food)", daily: 1800 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "600 mg tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fexinidazole tablets — FDA label (DailyMed)", F2_DM("74a611bc-9977-46bb-b626-0370b3031628")], F2_BT],
  dose: { tagline: "Oral 10-day treatment for gambiense sleeping sickness — with food.",
    cautionTitle: "Limitation of use",
    caution: "Due to the decreased efficacy observed in patients with severe second stage HAT (cerebrospinal fluid white blood cell count (CSF-WBC) >100 cells/µL) due to T. brucei gambiense disease, Fexinidazole Tablets should only be used in these patients if there are no other available treatment options [FDA].",
    adult: [{ ind: "Human African trypanosomiasis", text: "35 kg+: 1,800 mg × 4 days, then 1,200 mg × 6 days.", calc: ["hat"] }],
    child: [{ ind: "6 years+, 20 kg+", text: "By weight band.", calc: ["hat"] }] }
});

/* ---------- FEXOFENADINE (FDA OTC 180 mg tablets ANDA211075) ---------- */
FDB_M("fexofenadine", {
  inn: "Fexofenadine", atc: "R06AX26", cls: "Second-generation (non-sedating) antihistamine",
  linked: [],
  forms: ["Tablets 60, 180 mg; orally disintegrating 30 mg; suspension 30 mg/5 mL (OTC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML (cetirizine is the NEML non-sedating antihistamine) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Selective peripheral H1 antagonist [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Fruit juices and aluminium/magnesium antacids reduce absorption [FDA]."],
  ind: { adult: ["Hay fever and other upper respiratory allergy symptoms (runny nose, sneezing, itchy watery eyes, itchy nose or throat) [FDA]."], paed: ["From 6 years (OTC tablets) [FDA]."] },
  adult: [["Allergy (12 years and over)", "180 mg once daily with water; not more than 1 tablet in 24 hours [FDA]."], ["Alternative", "60 mg twice daily (other products) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["6 to under 12 years: 30 mg every 12 hours on an empty stomach (ODT), maximum 60 mg/24 h [FDA].", "Under 6 years: do not use (OTC ODT label) [FDA]."], transition: "12 years: adult dose.", calcNote: "Avoid fruit juice." },
  adj: { renal: "Kidney disease: ask a doctor (dose may need to be lower) [FDA].", hepatic: F2_NEP, pregnancy: "Ask a health professional [FDA].", other: "Not with aluminium/magnesium antacids or fruit juices [FDA]." },
  tox: { human: "Dizziness, drowsiness, dry mouth [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Supportive; poison control [FDA]." },
  contra: ["Previous allergic reaction to the product or ingredients [FDA]."],
  ae: { common: ["Headache, nausea, dizziness (uncommon) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA]"] },
  monitor: ["Symptom response [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "fexofenadine", indication_id: "a12", label: "Allergy 12 years+ — 180 mg once daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 180, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 180, max_daily: 180, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 180, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Kidney disease: ask a doctor [FDA]", flags: ["With water; not with fruit juice"], sources: ["FDA"] },
    { drug: "fexofenadine", indication_id: "c6", label: "6 to under 12 years — 30 mg every 12 h", route: "PO", population: { min_age_months: 72, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 60, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "30 mg ODT or 30 mg/5 mL suspension", renal: [], flags: ["Empty stomach"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fexofenadine 180 mg (24-hour allergy) — FDA OTC label (DailyMed)", F2_DM("036f8eaa-7eb9-46f4-b42e-3c8c7e49e450")], ["FDA", "Children's Allegra (fexofenadine ODT) — FDA OTC label (DailyMed)", F2_DM("06115cea-5a44-409d-85ed-bb71743491c1")], F2_BT],
  dose: { tagline: "Non-sedating antihistamine — 180 mg once daily; not with fruit juice.",
    adult: [{ ind: "Allergic rhinitis", text: "180 mg once daily.", calc: ["a12"] }],
    child: [{ ind: "6–11 years", text: "30 mg every 12 hours.", calc: ["c6"] }] }
});

/* ---------- FEZOLINETANT (FDA VEOZAH NDA216578) ---------- */
FDB_M("fezolinetant", {
  inn: "Fezolinetant", atc: "G02CX06", cls: "Neurokinin-3 receptor antagonist",
  linked: [],
  forms: ["Tablets 45 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks NK3 receptors on KNDy neurons that drive hot flushes [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP1A2 substrate — contraindicated with CYP1A2 inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Moderate to severe vasomotor symptoms due to menopause [FDA]."], paed: ["Not applicable [NEP]."] },
  adult: [["Menopausal hot flushes", "45 mg once daily, swallowed whole [FDA]."], ["Liver tests", "Before starting, then monthly for 3 months, at 6 and 9 months, and if symptoms [FDA]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Severe (eGFR 15 to under 30) or ESRD: contraindicated [FDA].", hepatic: "Cirrhosis: contraindicated [FDA].", pregnancy: F2_NEP, other: F2_NEP },
  tox: { human: F2_NEP, animal: F2_LD, manage: F2_NEP },
  contra: ["Known cirrhosis [FDA].", "Severe renal impairment or ESRD [FDA].", "Concomitant CYP1A2 inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Abdominal pain, diarrhoea, insomnia, back pain, hot flush, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA]"] },
  monitor: ["Liver tests at baseline, monthly × 3, then 6 and 9 months [FDA]."],
  local: F2_LOC,
  calc: [
    { drug: "fezolinetant", indication_id: "vms", label: "Menopausal hot flushes — 45 mg once daily", route: "PO", population: F2_ADULT, basis: "fixed", dose: { value: 45, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 45, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 45, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "eGFR under 30 / ESRD: contraindicated [FDA]" }], flags: ["Liver tests before and during"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Veozah (fezolinetant) — FDA label (DailyMed)", F2_DM("cae9f798-24f9-4580-a4fc-e6c710cbda3c")], F2_BT],
  dose: { tagline: "Non-hormonal tablet for hot flushes — check liver tests.",
    boxedTitle: "Risks of hepatotoxicity", boxed: "Hepatotoxicity has occurred with the use of VEOZAH in the postmarketing setting. • Perform hepatic laboratory tests prior to initiation of treatment to evaluate for hepatic function and injury. Do not start VEOZAH if either aminotransferase is ≥ 2 x the upper limit of normal (ULN) or if the total bilirubin is ≥ 2 x ULN for the evaluating laboratory. • Perform follow-up hepatic laboratory testing monthly for the first 3 months, at 6 months, and 9 months of treatment. • Advise patients to discontinue VEOZAH immediately and seek medical attention including hepatic laboratory tests if they experience signs or symptoms that may suggest liver injury (new onset fatigue, decreased appetite, nausea, vomiting, pruritus, jaundice, pale feces, dark urine, or abdominal pain). • Discontinue VEOZAH if transaminase elevations are > 5 x ULN, or if transaminase elevations are > 3 x ULN and the total bilirubin level is > 2 x ULN. • If transaminase elevations > 3 x ULN occur, perform more frequent follow-up hepatic laboratory tests until resolution [FDA].",
    adult: [{ ind: "Menopausal vasomotor symptoms", text: "45 mg once daily.", calc: ["vms"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- FIBRINOGEN, HUMAN (FDA RIASTAP BLA125317) ---------- */
FDB_M("fibrinogen-human", {
  inn: "Fibrinogen, human", atc: "B02BB01", cls: "Plasma-derived fibrinogen concentrate",
  linked: [],
  forms: ["Powder for injection about 900–1,300 mg per vial (actual content on label) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML (cryoprecipitate used) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Replaces fibrinogen, the substrate for fibrin clot formation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F2_NEP],
  ind: { adult: ["Acute bleeding in congenital fibrinogen deficiency (afibrinogenaemia, hypofibrinogenaemia) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Known level", "Dose (mg/kg) = [target level (mg/dL) − measured level (mg/dL)] ÷ 1.7 (mg/dL per mg/kg) [FDA]."], ["Unknown level", "70 mg/kg [FDA]."], ["Target", "Keep fibrinogen at 100 mg/dL until haemostasis [FDA]."], ["Rate", "Not faster than 5 mL per minute [FDA]."]],
  paed: { tiers: ["Same formula [FDA]."], transition: "—", calcNote: "70 mg/kg if level unknown." },
  adj: { renal: F2_NEP, hepatic: F2_NEP, pregnancy: F2_NEP, other: "Not for dysfibrinogenaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Thrombosis risk [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known anaphylactic or severe systemic reactions to human plasma-derived products [FDA]."],
  ae: { common: ["Fever, headache, allergic reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thromboembolic events [FDA] [UNVERIFIED-KNOWLEDGE]", "Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Fibrinogen level during treatment [FDA]."],
  local: F2_LOC,
  calc: [
    { drug: "fibrinogen-human", indication_id: "unknown", label: "Bleeding, level unknown — 70 mg/kg IV", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 70, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Whole vials (check content per vial)", renal: [], flags: ["If level known: (target − measured) ÷ 1.7 mg/kg", "Not faster than 5 mL/min"], sources: ["FDA"] }
  ],
  sources: [["FDA", "RiaSTAP (fibrinogen concentrate, human) — FDA label (DailyMed)", F2_DM("903dc8d0-39da-462c-9dac-004e0c7a26cc")], F2_BT],
  dose: { tagline: "Fibrinogen concentrate for congenital deficiency bleeding — 70 mg/kg if level unknown.",
    adult: [{ ind: "Congenital fibrinogen deficiency bleeding", text: "(Target − measured) ÷ 1.7 mg/kg; 70 mg/kg if unknown; target 100 mg/dL.", calc: ["unknown"] }],
    child: [{ ind: "Congenital fibrinogen deficiency bleeding", text: "Same formula.", calc: ["unknown"] }] }
});

/* ---------- FIDAXOMICIN (FDA DIFICID NDA201699) ---------- */
FDB_M("fidaxomicin", {
  inn: "Fidaxomicin", atc: "A07AA12", cls: "Macrocyclic (macrolide-class) antibacterial",
  linked: [],
  forms: ["Tablets 200 mg; granules for suspension 40 mg/mL [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits bacterial RNA polymerase; narrow spectrum, minimal absorption [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal systemic absorption; no renal adjustment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["C. difficile-associated diarrhoea [FDA]."], paed: ["From 6 months [FDA]."] },
  adult: [["CDAD", "200 mg twice daily for 10 days, with or without food [FDA]."]],
  paed: { tiers: ["12.5 kg and over who can swallow tablets: 200 mg twice daily for 10 days [FDA].", "At least 4 kg: weight-based oral suspension twice daily for 10 days per label table [FDA]."], transition: "Tablet dose from 12.5 kg.", calcNote: "Suspension 40 mg/mL." },
  adj: { renal: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: F2_NEP, pregnancy: F2_NEP, other: "Not for systemic infections [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F2_NEP, animal: F2_LD, manage: F2_NEP },
  contra: ["Known hypersensitivity to fidaxomicin or ingredients [FDA]."],
  ae: { common: ["Nausea, vomiting, abdominal pain, GI bleeding, anaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity (angioedema, rash) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Clinical response [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "fidaxomicin", indication_id: "tab", label: "CDAD — 200 mg twice daily × 10 days (adults; children 12.5 kg+)", route: "PO", population: { min_age_months: 6, max_age_months: null, min_weight_kg: 12.5, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["10 days"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dificid (fidaxomicin) — FDA label (DailyMed)", F2_DM("dd966338-c820-4270-b704-09ef75fa3ceb")], F2_BT],
  dose: { tagline: "Narrow-spectrum C. difficile treatment with fewer recurrences.",
    adult: [{ ind: "C. difficile diarrhoea", text: "200 mg twice daily for 10 days.", calc: ["tab"] }],
    child: [{ ind: "6 months+", text: "12.5 kg+: 200 mg twice daily; smaller: suspension by weight." }] }
});

/* ---------- FILGRASTIM (FDA RELEUKO BLA761082) ---------- */
FDB_M("filgrastim", {
  inn: "Filgrastim", atc: "L03AA02", cls: "Granulocyte colony-stimulating factor (G-CSF)",
  linked: [],
  forms: ["Pre-filled syringes 300 mcg/0.5 mL, 480 mcg/0.8 mL; vials 300 mcg/mL, 480 mcg/1.6 mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML 2025 [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stimulates neutrophil production and function [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No adjustment in renal or hepatic impairment [FDA]."],
  ind: { adult: ["Febrile neutropenia prevention with myelosuppressive chemotherapy; AML induction/consolidation; bone marrow transplant; stem-cell mobilisation; severe chronic neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Same indications [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Chemotherapy / AML", "5 mcg/kg/day SC, short IV infusion (15–30 min) or continuous IV; start at least 24 h after chemotherapy; continue to ANC recovery [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Bone marrow transplant", "10 mcg/kg/day IV over no longer than 24 hours [FDA]."], ["Stem-cell mobilisation", "10 mcg/kg/day SC for at least 4 days before apheresis [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same mcg/kg doses [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "mcg/kg." },
  adj: { renal: "No adjustment [FDA].", hepatic: "No adjustment [FDA].", pregnancy: F2_NEP, other: "Not within 24 h before to 24 h after chemotherapy [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Leukocytosis, bone pain [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Stop; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serious allergic reactions to human G-CSFs (filgrastim or pegfilgrastim products) [FDA]."],
  ae: { common: ["Bone pain, pyrexia, rash, epistaxis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Splenic rupture, ARDS, sickle cell crisis, glomerulonephritis, capillary leak, aortitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count twice weekly during therapy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "filgrastim", indication_id: "chemo", label: "Chemotherapy neutropenia — 5 mcg/kg/day", route: "SC/IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mcg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 600, unit: "mcg/mL" }], rounding: "Round to nearest syringe (300 or 480 mcg) per local practice", renal: [], flags: ["Start at least 24 h after chemotherapy", "BMT: 10 mcg/kg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Releuko (filgrastim-ayow) — FDA label (DailyMed)", F2_DM("74e1ec6e-1630-4654-895c-2bd355f939e7")], F2_BT],
  dose: { tagline: "G-CSF to shorten chemotherapy neutropenia — 5 mcg/kg daily.",
    adult: [{ ind: "Chemotherapy neutropenia", text: "5 mcg/kg/day SC or IV until ANC recovery.", calc: ["chemo"] }, { ind: "BMT / mobilisation", text: "10 mcg/kg/day." }],
    child: [{ ind: "Chemotherapy neutropenia", text: "5 mcg/kg/day.", calc: ["chemo"] }] }
});

/* ---------- FINERENONE (FDA KERENDIA NDA215341) ---------- */
FDB_M("finerenone", {
  inn: "Finerenone", atc: "C03DA05", cls: "Non-steroidal mineralocorticoid receptor antagonist",
  linked: [],
  forms: ["Tablets 10, 20, 40 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Selective non-steroidal MR antagonist, reducing fibrosis and inflammation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — strong inhibitors contraindicated [FDA]."],
  ind: { adult: ["CKD with type 2 (or type 1) diabetes — reduce eGFR decline, ESKD, CV death, MI, HF hospitalisation [FDA].", "Heart failure with LVEF 40% or more [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start (by eGFR)", "eGFR 60 or more: 20 mg once daily; 25 to under 60: 10 mg once daily; under 25: not recommended to start [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Potassium", "Do not start if potassium over 5.0; 4.8–5.0 consider with extra monitoring [FDA]."], ["Target", "CKD with diabetes: 20 mg once daily after 4 weeks; HF with LVEF 40%+: 20 or 40 mg by eGFR and potassium [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Starting dose by eGFR (table) [FDA].", hepatic: "Child-Pugh C: avoid; A/B: no adjustment [FDA].", pregnancy: F2_NEP, other: "Avoid strong CYP3A4 inducers; potassium supplements raise hyperkalaemia risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Stop; treat hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA].", "Strong CYP3A4 inhibitors [FDA].", "Adrenal insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hyperkalaemia, hypotension, hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Potassium and eGFR at 4 weeks after start or change, then periodically [FDA]."],
  local: F2_LOC,
  calc: [
    { drug: "finerenone", indication_id: "ckd", label: "CKD + diabetes — start 20 mg (eGFR 60+) or 10 mg (25–59)", route: "PO", population: F2_ADULT, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 25, crcl_max: 59.999, action: "reduce_dose", set_value: 10, note: "eGFR 25 to under 60: start 10 mg" }, { crcl_min: 0, crcl_max: 24.999, action: "avoid", note: "eGFR under 25: not recommended to start [FDA]" }], renal_note: "Enter eGFR in the CrCl box", flags: ["Potassium must be 5.0 or less to start", "Check K and eGFR at 4 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Kerendia (finerenone) — FDA label (DailyMed)", F2_DM("fc726765-5d5a-4d6e-b037-b847bda9fb7c")], F2_BT],
  dose: { tagline: "Non-steroidal MRA for diabetic CKD and HFmrEF/HFpEF — watch potassium.",
    adult: [{ ind: "CKD with diabetes", text: "Start 20 mg (eGFR 60+) or 10 mg (25–59); target 20 mg.", calc: ["ckd"] }, { ind: "HF with LVEF 40%+", text: "Target 20–40 mg by eGFR and potassium." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FINGOLIMOD (FDA GILENYA NDA022527) ---------- */
FDB_M("fingolimod", {
  inn: "Fingolimod", atc: "L04AE01", cls: "Sphingosine 1-phosphate receptor modulator",
  linked: [],
  forms: ["Capsules 0.25, 0.5 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "S1P receptor modulator that retains lymphocytes in lymph nodes [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Exposure doubled in severe hepatic impairment [FDA]."],
  ind: { adult: ["Relapsing forms of multiple sclerosis [FDA]."], paed: ["10 years and over [FDA]."] },
  adult: [["Relapsing MS (adults; children 10+ over 40 kg)", "0.5 mg once daily [FDA]."], ["First-dose monitoring", "Observe for bradycardia at least 6 hours with hourly pulse and BP; ECG before and at the end of observation (also after interruption over 14 days) [FDA]."]],
  paed: { tiers: ["10 years and over, 40 kg or less: 0.25 mg once daily [FDA].", "10 years and over, over 40 kg: 0.5 mg once daily [FDA]."], transition: "Over 40 kg: 0.5 mg.", calcNote: "Capsules." },
  adj: { renal: F2_NEP, hepatic: "Severe: monitor closely [FDA].", pregnancy: "Fetal risk; contraception for 2 months after stopping [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Check varicella immunity, CBC, LFTs, eye examination (macular oedema) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bradycardia, AV block [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "ECG monitoring; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["In the last 6 months: MI, unstable angina, stroke, TIA, decompensated HF needing hospitalisation, or class III/IV HF [FDA].", "Mobitz II or third-degree AV block, sick sinus syndrome without pacemaker [FDA] [UNVERIFIED-KNOWLEDGE].", "Baseline QTc 500 ms or more; class Ia or III antiarrhythmics [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, raised liver enzymes, diarrhoea, cough, influenza, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bradyarrhythmia [FDA] [UNVERIFIED-KNOWLEDGE]", "Infections including PML and cryptococcal [FDA] [UNVERIFIED-KNOWLEDGE]", "Macular oedema, PRES, severe MS rebound on stopping [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["First-dose observation; CBC; LFTs; eye examination at 3–4 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "fingolimod", indication_id: "big", label: "Relapsing MS — 0.5 mg once daily (adults; 10+ years over 40 kg)", route: "PO", population: { min_age_months: 120, max_age_months: null, min_weight_kg: 40.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 0.5, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 0.5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["6-hour first-dose observation"], sources: ["FDA"] },
    { drug: "fingolimod", indication_id: "small", label: "Relapsing MS, 10+ years, 40 kg or less — 0.25 mg once daily", route: "PO", population: { min_age_months: 120, max_age_months: 216, min_weight_kg: null, max_weight_kg: 40.0001 }, basis: "fixed", dose: { value: 0.25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 0.25, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 0.25, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["6-hour first-dose observation"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Gilenya (fingolimod) — FDA label (DailyMed)", F2_DM("cc9e1c8c-0e2b-44e2-878b-27057f786be9")], F2_BT],
  dose: { tagline: "Oral MS therapy — 6-hour heart-rate watch after the first dose.",
    adult: [{ ind: "Relapsing MS", text: "0.5 mg once daily.", calc: ["big"] }],
    child: [{ ind: "Relapsing MS, 10 years+", text: "0.25 mg (40 kg or less) or 0.5 mg (over 40 kg).", calc: ["small", "big"] }] }
});

/* ---------- FITUSIRAN (FDA QFITLIA NDA219019) ---------- */
FDB_M("fitusiran", {
  inn: "Fitusiran", atc: "B02BX", cls: "Antithrombin-lowering siRNA",
  linked: [],
  forms: ["Pre-filled pen/vial 50 mg and 20 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "siRNA that lowers hepatic antithrombin, rebalancing haemostasis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F2_NEP],
  ind: { adult: ["Routine prophylaxis in haemophilia A or B with or without inhibitors, 12 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["12 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "50 mg SC once every 2 months; do not start if antithrombin activity under 60% [FDA]."], ["Adjust", "Keep antithrombin activity 15–35% by adjusting dose or frequency [FDA]."]],
  paed: { tiers: ["12 years and over: as adults [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed dose; AT-guided." },
  adj: { renal: F2_NEP, hepatic: "Avoid in hepatic impairment (Child-Pugh A, B, C) [FDA].", pregnancy: F2_NEP, other: "Reduce dose of factor concentrates/bypassing agents for breakthrough bleeds per label [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F2_NEP, animal: F2_LD, manage: F2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Raised ALT, nasopharyngitis, bacterial infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thrombotic events [FDA]", "Acute and recurrent gallbladder disease [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Antithrombin activity; liver tests [FDA]."],
  local: F2_LOC, calc: [],
  sources: [["FDA", "Qfitlia (fitusiran) — FDA label (DailyMed)", F2_DM("6dd2f8ac-6f90-4cbf-b197-97d74964135c")], F2_BT],
  dose: { tagline: "Every-2-month siRNA prophylaxis for haemophilia — AT-guided; thrombosis risk.",
    boxedTitle: "Thrombotic events and acute and recurrent gallbladder disease", boxed: "Thrombotic Events: Serious thrombotic events have occurred in QFITLIA-treated patients with risk factors including persistent antithrombin (AT) activity less than 15%, QFITLIA 80 mg once monthly dosing, an indwelling venous catheter, and the post-operative setting when bleed management guidelines were not followed. Interrupt QFITLIA in patients with a thrombotic event and manage as clinically indicated. Acute and Recurrent Gallbladder Disease: Gallbladder disease has occurred in QFITLIA-treated patients, some requiring cholecystectomy or developing complications (e.g., pancreatitis). Monitor for signs and symptoms of gallbladder disease. Consider interruption or discontinuation of QFITLIA if gallbladder disease occurs. Consider alternative treatment for hemophilia if history of symptomatic gallbladder disease [FDA].",
    adult: [{ ind: "Haemophilia A/B prophylaxis", text: "50 mg SC every 2 months; AT 15–35%." }],
    child: [{ ind: "12 years+", text: "As adults." }] }
});

/* ---------- FLAVOXATE (FDA tablets ANDA076835) ---------- */
FDB_M("flavoxate", {
  inn: "Flavoxate", atc: "G04BD02", cls: "Urinary antispasmodic",
  linked: [],
  forms: ["Tablets 100 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Smooth-muscle relaxant of the urinary tract [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F2_NEP],
  ind: { adult: ["Symptomatic relief of dysuria, urgency, nocturia, suprapubic pain, frequency and incontinence in cystitis, prostatitis, urethritis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Over 12 years [FDA]."] },
  adult: [["Urinary symptoms (over 12 years)", "100–200 mg three or four times daily; reduce as symptoms improve [FDA]."]],
  paed: { tiers: ["Under 12 years: not recommended [FDA]."], transition: "Over 12 years: adult dose.", calcNote: "Not a treatment for infection." },
  adj: { renal: F2_NEP, hepatic: F2_NEP, pregnancy: F2_NEP, other: "Use with caution in glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F2_NEP, animal: F2_LD, manage: F2_NEP },
  contra: ["Pyloric or duodenal obstruction, obstructive intestinal lesions or ileus, achalasia, GI haemorrhage, obstructive uropathies of the lower urinary tract [FDA]."],
  ae: { common: ["Nausea, dry mouth, nervousness, vertigo, headache, drowsiness, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Leukopenia (rare) [FDA] [UNVERIFIED-KNOWLEDGE]", "Mental confusion in elderly [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptoms [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "flavoxate", indication_id: "std", label: "Urinary symptoms — 100–200 mg three or four times daily", route: "PO", population: { min_age_months: 145, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose", value_max: 200 }, interval_h: 6, divided_doses: 4, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["3 or 4 times a day", "Over 12 years only"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Flavoxate hydrochloride tablets — FDA label (DailyMed)", F2_DM("f6a06eda-2480-4c0d-8d1e-9e3e89d3ee88")], F2_BT],
  dose: { tagline: "Urinary antispasmodic for dysuria and urgency.",
    adult: [{ ind: "Dysuria, urgency, frequency", text: "100–200 mg three or four times daily.", calc: ["std"] }],
    child: [{ ind: "Under 12 years", text: "Not recommended." }] }
});

/* ---------- FLECAINIDE (FDA tablets ANDA215599) ---------- */
FDB_M("flecainide", {
  inn: "Flecainide", atc: "C01BC04", cls: "Class IC antiarrhythmic",
  linked: [],
  forms: ["Tablets 50, 100, 150 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Potent sodium-channel blocker slowing conduction [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 12–27 hours; steady state after 3–5 days; longer in renal impairment [FDA]."],
  ind: { adult: ["Without structural heart disease: prevention of PSVT and paroxysmal AF/flutter [FDA].", "Life-threatening sustained VT [FDA]."], paed: ["Label includes paediatric dosing (specialist) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["PSVT / paroxysmal AF", "Start 50 mg every 12 hours; increase by 50 mg twice daily every 4 days; maximum 300 mg/day [FDA]."], ["Sustained VT (in hospital)", "Start 100 mg every 12 hours; increase by 50 mg twice daily every 4 days; most need 150 mg every 12 hours or less; maximum 400 mg/day [FDA]."], ["Severe renal impairment (CrCl 35 or less)", "Start 100 mg once daily (or 50 mg twice daily); monitor plasma levels [FDA]."], ["Increments", "No more often than every 4 days [FDA]."]],
  paed: { tiers: ["Specialist: per label body-surface-area dosing with plasma levels [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult calculator only." },
  adj: { renal: "CrCl 35 or less: 100 mg once daily start; levels [FDA].", hepatic: "Avoid in significant hepatic impairment unless benefit clearly outweighs risk [FDA].", pregnancy: F2_NEP, other: "In AF/flutter, combine with an AV-nodal blocker (risk of 1:1 conduction) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "QRS widening, bradycardia, VT, hypotension, death [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Sodium bicarbonate, pacing, supportive; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pre-existing second- or third-degree AV block, or right bundle branch block with left hemiblock, without a pacemaker [FDA].", "Cardiogenic shock [FDA] [UNVERIFIED-KNOWLEDGE].", "Recent MI or structural heart disease (CAST) [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dizziness, visual disturbance, dyspnoea, headache, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Proarrhythmia and excess mortality after MI (CAST) [FDA]", "Heart failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Conduction block [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG (PR, QRS); plasma levels in renal/hepatic impairment [FDA]."],
  local: F2_LOC,
  calc: [
    { drug: "flecainide", indication_id: "psvt", label: "PSVT / paroxysmal AF — start 50 mg every 12 h", route: "PO", population: F2_ADULT, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "CrCl 35 or less: start 100 mg once daily (or 50 mg twice daily); monitor levels [FDA]", flags: ["Increase by 50 mg twice daily every 4 days; maximum 300 mg/day", "No structural heart disease"], sources: ["FDA"] },
    { drug: "flecainide", indication_id: "vt", label: "Sustained VT — start 100 mg every 12 h (in hospital)", route: "PO", population: F2_ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 35, action: "extend_interval", factor: 24, note: "CrCl 35 or less: 100 mg once daily (or 50 mg twice daily)" }], flags: ["Start in hospital with monitoring", "Maximum 400 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Flecainide acetate tablets USP — FDA label (DailyMed)", F2_DM("74c1eb2a-a37f-4f33-86bf-51e0d1d0c2bc")], F2_BT],
  dose: { tagline: "Class IC antiarrhythmic — only in hearts without structural disease.",
    boxedTitle: "Mortality (CAST); ventricular pro-arrhythmic effects in atrial fibrillation/flutter", boxed: "Mortality Flecainide acetate was included in the National Heart Lung and Blood Institute's Cardiac Arrhythmia Suppression Trial (CAST), a long-term, multicenter, randomized, double-blind study in patients with asymptomatic non-life-threatening ventricular arrhythmias who had a myocardial infarction more than six days but less than two years previously. An excessive mortality or non-fatal cardiac arrest rate was seen in patients treated with flecainide acetate compared with that seen in patients assigned to a carefully matched placebo-treated group. This rate was 16/315 (5.1%) for flecainide acetate and 7/309 (2.3%) for the matched placebo. The average duration of treatment with flecainide acetate in this study was ten months. The applicability of the CAST results to other populations (e.g., those without recent myocardial infarction) is uncertain, but at present, it is prudent to consider the risks of Class IC agents (including flecainide acetate), coupled with the lack of any evidence of improved survival, generally unacceptable in patients without life-threatening ventricular arrhythmias, even if the patients are experiencing unpleasant, but not life-threatening, symptoms or signs. Ventricular Pro-arrhythmic Effects in Patients with Atrial Fibrillation/Flutter A review of the world literature revealed reports of 568 patients treated with oral flecainide acetate for paroxysmal atrial fibrillation/flutter (PAF). Ventricular tachycardia was experienced in 0.4% (2/568) of these patients [FDA].",
    adult: [{ ind: "PSVT / paroxysmal AF", text: "50 mg every 12 h, up to 300 mg/day.", calc: ["psvt"] }, { ind: "Sustained VT", text: "100 mg every 12 h, up to 400 mg/day.", calc: ["vt"] }],
    child: [{ ind: "Children", text: "Specialist only." }] }
});

/* ---------- FLIBANSERIN (FDA ADDYI NDA022526) ---------- */
FDB_M("flibanserin", {
  inn: "Flibanserin", atc: "G02CX02", cls: "5-HT1A agonist / 5-HT2A antagonist",
  linked: [],
  forms: ["Tablets 100 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Serotonin receptor modulation; mechanism in HSDD unknown [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — moderate/strong inhibitors contraindicated [FDA]."],
  ind: { adult: ["Acquired, generalised hypoactive sexual desire disorder in women under 65 [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not indicated [NEP]."] },
  adult: [["HSDD", "100 mg once daily at bedtime; stop after 8 weeks if no improvement [FDA]."], ["Alcohol", "Wait at least 2 hours after 1–2 drinks before taking; skip if 3 or more drinks [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not indicated [NEP]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: F2_NEP, hepatic: "Contraindicated in hepatic impairment [FDA].", pregnancy: F2_NEP, other: "Bedtime dosing (hypotension, syncope, CNS depression) [FDA]." },
  tox: { human: F2_NEP, animal: F2_LD, manage: F2_NEP },
  contra: ["Moderate or strong CYP3A4 inhibitors [FDA].", "Hepatic impairment [FDA].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dizziness, somnolence, nausea, fatigue, insomnia, dry mouth [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hypotension and syncope (with alcohol or CYP3A4 inhibitors) [FDA]", "CNS depression [FDA]"] },
  monitor: ["Response at 8 weeks [FDA]."],
  local: F2_LOC,
  calc: [
    { drug: "flibanserin", indication_id: "hsdd", label: "HSDD — 100 mg once daily at bedtime", route: "PO", population: F2_ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["At bedtime only", "Stop if no benefit after 8 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Addyi (flibanserin) — FDA label (DailyMed)", F2_DM("3819daf3-e935-2c53-c527-e1d57922f394")], F2_BT],
  dose: { tagline: "Bedtime tablet for HSDD — hypotension and syncope with alcohol.",
    boxedTitle: "Hypotension and syncope in certain settings", boxed: "Interaction with Alcohol The use of ADDYI and alcohol together close in time increases the risk of severe hypotension and syncope. Counsel patients to wait at least two hours after consuming one or two standard alcoholic drinks before taking ADDYI at bedtime or to skip their ADDYI dose if they have consumed three or more standard alcoholic drinks that evening. Contraindicated with Strong or Moderate CYP3A4 Inhibitors The concomitant use of ADDYI and moderate or strong CYP3A4 inhibitors increases flibanserin concentrations, which can cause severe hypotension and syncope. Therefore, the use of moderate or strong CYP3A4 inhibitors is contraindicated in patients taking ADDYI. Contraindicated in Patients with Hepatic Impairment The use of ADDYI in patients with hepatic impairment increases flibanserin concentrations, which can cause severe hypotension and syncope. Therefore, ADDYI is contraindicated in patients with hepatic impairment [FDA].",
    adult: [{ ind: "HSDD (premenopausal women)", text: "100 mg at bedtime.", calc: ["hsdd"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- RADIOPHARMACEUTICALS (fluorine-18 PET agents) ---------- */
F2_PET("florbetaben-18f-", "Florbetaben (18F)", "Neuraceq (florbetaben F 18)", "b0915068-cfd4-4d72-b9f8-7e31fe83cd1e", 300, "8.1", "PET of the brain to estimate amyloid-beta neuritic plaque density in adults with cognitive impairment", "slow bolus (6 s/mL) up to 10 mL, flush with 10 mL saline; image 15–20 min starting 45–130 min after");
F2_PET("florbetapir-18f-", "Florbetapir (18F)", "Amyvid (florbetapir F 18)", "bb5a5043-0f51-11df-8a39-0800200c9a66", 370, "10", "PET of the brain to estimate amyloid-beta neuritic plaque density in adults with cognitive impairment", "single bolus up to 10 mL; obtain 10-minute images starting about 30–50 minutes after");
F2_PET("flortaucipir-18f-", "Flortaucipir (18F)", "Tauvid (flortaucipir F 18)", "b483abad-5230-462a-adfb-1a65160f01d0", 370, "10", "PET of the brain to estimate tau neurofibrillary tangles in adults with cognitive impairment being evaluated for Alzheimer's disease", "bolus; initiate imaging about 80 minutes after");
F2_PET("flotufolastat-18f-", "Flotufolastat (18F)", "Posluma (flotufolastat F 18)", "907ac4a4-a088-4826-ab50-cfc31985c9d4", 296, "8", "PET of PSMA-positive lesions in men with prostate cancer (suspected metastasis or recurrence)", "bolus; initiate imaging about 60 minutes after, mid-thigh to skull base");
F2_PET("fluciclovine-18f-", "Fluciclovine (18F)", "Axumin (fluciclovine F 18)", "389a502e-a7d5-43dd-b6bf-f022ff23f3b9", 370, "10", "PET in men with suspected prostate cancer recurrence based on rising PSA after treatment", "bolus; initiate imaging 3–5 minutes after");

/* ---------- FLOXURIDINE (FDA ANDA075837) ---------- */
FDB_M("floxuridine", {
  inn: "Floxuridine", atc: "L01BC09", cls: "Pyrimidine antimetabolite (intra-arterial)", risk: F2_ONC,
  linked: [],
  forms: ["Powder for injection 500 mg vial (reconstitute to about 100 mg/mL) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Converted to 5-FU nucleotides; inhibits thymidylate synthase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["High hepatic first-pass extraction — suited to hepatic artery infusion [FDA]."],
  ind: { adult: ["Palliative management of GI adenocarcinoma metastatic to the liver by continuous regional intra-arterial infusion [FDA]."], paed: ["Not established [NEP]."] },
  adult: [["Hepatic artery infusion", "0.1–0.6 mg/kg/day by continuous arterial infusion (higher 0.4–0.6 mg/kg usually for hepatic artery) using a pump, until toxicity [FDA]."]],
  paed: { tiers: ["Not established [NEP]."], transition: "—", calcNote: "Specialist infusion." },
  adj: { renal: F2_NEP, hepatic: F2_NEP, pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hospitalise for the first course [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Stomatitis, diarrhoea, myelosuppression, GI ulceration [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Stop infusion; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Poor nutritional state, depressed bone marrow function, or potentially serious infections [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, stomatitis, localised erythema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE]", "Sclerosing cholangitis, GI ulceration [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, liver tests, stomatitis/diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "floxuridine", indication_id: "hai", label: "Hepatic artery infusion — 0.1–0.6 mg/kg/day", route: "IA", population: F2_ADULT, basis: "mg_per_kg", dose: { value: 0.1, unit: "mg", per: "dose", value_max: 0.6 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Pump infusion", renal: [], flags: ["Continuous arterial infusion per day", "0.4–0.6 mg/kg usual for hepatic artery"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Floxuridine for injection USP — FDA label (DailyMed)", F2_DM("c8edabc1-67cd-421b-a147-7c1f19f05b8e")], F2_BT],
  dose: { tagline: "Regional hepatic artery chemotherapy for liver metastases.",
    adult: [{ ind: "Liver metastases (HAI)", text: "0.1–0.6 mg/kg/day by continuous arterial infusion.", calc: ["hai"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FLUCYTOSINE (FDA ANCOBON NDA017001) ---------- */
FDB_M("flucytosine", {
  inn: "Flucytosine", atc: "J02AX01", cls: "Fluorinated pyrimidine antifungal",
  linked: [],
  forms: ["Capsules 250, 500 mg [FDA].", "Bhutan: not on the NEML [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converted in fungi to 5-fluorouracil, disrupting RNA and DNA synthesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted mainly by the kidneys — accumulates in renal impairment [FDA]."],
  ind: { adult: ["Serious Candida and/or Cryptococcus infections (septicaemia, endocarditis, UTI, meningitis, pulmonary), with amphotericin B [FDA]."], paed: ["Used per label mg/kg [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Serious Candida / Cryptococcus", "50–150 mg/kg/day in divided doses every 6 hours, with amphotericin B; give capsules a few at a time over 15 minutes to reduce nausea [FDA]."], ["Renal impairment", "Start at the lower dose; monitor blood levels and renal function [FDA]."]],
  paed: { tiers: ["Same mg/kg/day, divided every 6 h [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Capsules." },
  adj: { renal: "Extreme caution: lower dose, blood levels [FDA].", hepatic: "Monitor liver function [FDA].", pregnancy: F2_NEP, other: "Contraindicated in complete DPD deficiency [FDA]." },
  tox: { human: "Myelosuppression, hepatotoxicity, GI toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Haemodialysis removes it [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity [FDA].", "Known complete dihydropyrimidine dehydrogenase (DPD) deficiency [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bone marrow depression [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Cardiac toxicity, confusion, hallucinations [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, renal and hepatic function, flucytosine levels [FDA]."],
  local: F2_LOC,
  calc: [
    { drug: "flucytosine", indication_id: "std", label: "Serious Candida/Cryptococcus — 50–150 mg/kg/day in 4 doses", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "day", value_max: 150 }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "actual", formulations: [{ form: "cap", strength: 500, unit: "mg/cap" }], rounding: "Nearest capsule combination (250/500 mg)", renal: [], renal_note: "Renal impairment: use the lower end; monitor levels [FDA]", flags: ["With amphotericin B", "Every 6 hours"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ancobon (flucytosine) — FDA label (DailyMed)", F2_DM("aea0df00-a88c-4a16-abcf-750f3ff2004e")], F2_BT],
  dose: { tagline: "Antifungal partner to amphotericin B for cryptococcal meningitis — monitor counts and levels.",
    boxedTitle: "Use with extreme caution in renal impairment", boxed: "Use with extreme caution in patients with impaired renal function. Close monitoring of hematologic, renal and hepatic status of all patients is essential. These instructions should be thoroughly reviewed before administration of ANCOBON [FDA].",
    adult: [{ ind: "Cryptococcosis / candidiasis", text: "50–150 mg/kg/day in 4 doses with amphotericin B.", calc: ["std"] }],
    child: [{ ind: "Serious fungal infections", text: "Same mg/kg/day.", calc: ["std"] }] }
});

/* ---------- FLUDARABINE (FDA injection ANDA220196) ---------- */
FDB_M("fludarabine", {
  inn: "Fludarabine", atc: "L01BB05", cls: "Purine analogue antimetabolite", risk: F2_ONC,
  linked: [],
  forms: ["Injection 25 mg/mL (50 mg/2 mL) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits DNA polymerase, ribonucleotide reductase and DNA primase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — reduce dose by CrCl [FDA]."],
  ind: { adult: ["B-cell CLL: with cyclophosphamide and rituximab, or single agent [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["FCR", "25 mg/m² IV over 30 minutes on days 1–3 of each 28-day cycle × 6, with cyclophosphamide 250 mg/m² days 1–3 and rituximab [FDA]."], ["Single agent", "25 mg/m² IV over about 30 minutes daily on days 1–5 of each 28-day cycle [FDA]."], ["Renal", "CrCl 50–79: 20 mg/m²; 30–49: 15 mg/m²; under 30: dose not established [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "CrCl 50–79: 20 mg/m²; 30–49: 15 mg/m²; under 30: not established [FDA].", hepatic: F2_NEP, pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Irradiated blood products only (transfusion GVHD); PJP prophylaxis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "High doses: blindness, coma, death (CNS toxicity) [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Myelosuppression, infections, fever, nausea, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe neurotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Autoimmune haemolytic anaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Fatal pulmonary toxicity with pentostatin [FDA] [UNVERIFIED-KNOWLEDGE]", "Transfusion-associated GVHD [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, renal function, neurological status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "fludarabine", indication_id: "cll", label: "CLL — 25 mg/m² IV daily (days 1–3 FCR or days 1–5 single)", route: "IV", population: F2_ADULT, basis: "mg_per_m2", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 50, crcl_max: 79.999, action: "reduce_dose", set_value: 20, note: "CrCl 50–79: 20 mg/m²" }, { crcl_min: 30, crcl_max: 49.999, action: "reduce_dose", set_value: 15, note: "CrCl 30–49: 15 mg/m²" }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "CrCl under 30: a dosage has not been established [FDA]" }], flags: ["Each 28-day cycle", "Irradiated blood products only"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fludarabine phosphate injection — FDA label (DailyMed)", F2_DM("291f6ee2-f5d2-ae6c-e063-6294a90a5951")], F2_BT],
  dose: { tagline: "Purine analogue for CLL — reduce for CrCl under 80.",
    adult: [{ ind: "CLL", text: "25 mg/m² IV days 1–3 (FCR) or days 1–5 (alone) every 28 days.", calc: ["cll"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FLUDROCORTISONE (FDA tablets ANDA215279) ---------- */
FDB_M("fludrocortisone", {
  inn: "Fludrocortisone", atc: "H02AA02", cls: "Mineralocorticoid",
  linked: [],
  forms: ["Tablets 0.1 mg [FDA].", "Bhutan: not on the NEML 2025 search [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Potent mineralocorticoid: sodium retention and potassium excretion [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F2_NEP],
  ind: { adult: ["Partial replacement in primary and secondary adrenocortical insufficiency (Addison's) [FDA].", "Salt-losing adrenogenital syndrome [FDA]."], paed: ["Same (specialist) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Addison's disease", "Usual 0.1 mg daily (range 0.1 mg three times a week to 0.2 mg daily), with hydrocortisone 10–30 mg/day or cortisone 10–37.5 mg/day in divided doses [FDA]."], ["Transient hypertension", "Reduce to 0.05 mg daily [FDA]."], ["Salt-losing adrenogenital syndrome", "0.1–0.2 mg daily [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Specialist dosing [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult calculator." },
  adj: { renal: F2_NEP, hepatic: F2_NEP, pregnancy: F2_NEP, other: "Monitor BP, weight, oedema, potassium; increase glucocorticoid in stress [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypertension, oedema, hypokalaemia, weight gain [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Stop; correct potassium [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Systemic fungal infections [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Hypertension, oedema, hypokalaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Heart failure, hypokalaemic alkalosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, weight, electrolytes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC,
  calc: [
    { drug: "fludrocortisone", indication_id: "addison", label: "Addison's disease — 0.1 mg once daily", route: "PO", population: F2_ADULT, basis: "fixed", dose: { value: 0.1, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 0.2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.1, unit: "mg/tab" }], rounding: "Whole or half tablets", renal: [], flags: ["With hydrocortisone", "Hypertension: 0.05 mg daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fludrocortisone acetate tablets — FDA label (DailyMed)", F2_DM("933e28ef-05e8-419e-a786-21eab67f33a2")], F2_BT],
  dose: { tagline: "Mineralocorticoid replacement in Addison's disease — 0.1 mg daily.",
    adult: [{ ind: "Addison's disease", text: "0.1 mg daily with hydrocortisone (0.05–0.2 mg).", calc: ["addison"] }],
    child: [{ ind: "Children", text: "Specialist." }] }
});

/* ---------- FLUDROXYCORTIDE (US: flurandrenolide; FDA CORDRAN NDA016455) ---------- */
FDB_M("fludroxycortide", {
  inn: "Fludroxycortide (flurandrenolide)", atc: "D07AC07", cls: "Topical corticosteroid (medium potency; tape, cream, lotion)",
  linked: [],
  forms: ["Tape 4 mcg/cm²; cream/lotion 0.05% (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Topical anti-inflammatory corticosteroid [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Occlusion increases absorption [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Corticosteroid-responsive dermatoses, especially dry, scaling localised lesions [FDA]."], paed: ["Use the least amount (HPA suppression risk) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Tape", "Replace every 12 hours (may stay 24 hours if tolerated); may be used at night only [FDA]."], ["Occlusion", "For psoriasis or recalcitrant lesions; stop if infection develops [FDA]."]],
  paed: { tiers: ["Lowest effective amount; children are at greater risk of systemic effects [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable (topical) [NEP].", hepatic: "Not applicable (topical) [NEP].", pregnancy: F2_NEP, other: "Tape not for exudative lesions [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Systemic corticosteroid effects with heavy use [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Reduce use [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any component [FDA].", "Tape: exudative or weeping lesions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Burning, itching, dryness, folliculitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["HPA suppression, skin atrophy, striae [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Skin response [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC, calc: [],
  sources: [["FDA", "Cordran (flurandrenolide) — FDA label (DailyMed)", F2_DM("837a7b23-ab14-4f23-873d-bdee95177691")], F2_BT],
  dose: { tagline: "Topical steroid tape or cream for localised dermatoses.",
    adult: [{ ind: "Dermatoses", text: "Tape changed every 12 h (up to 24 h)." }],
    child: [{ ind: "Children", text: "Least amount, short courses." }] }
});

/* ---------- FLUNISOLIDE (FDA nasal solution ANDA074805) ---------- */
FDB_M("flunisolide", {
  inn: "Flunisolide", atc: "R01AD04", cls: "Intranasal corticosteroid",
  linked: [],
  forms: ["Nasal spray 25 mcg per spray (0.025%) [FDA].", "Bhutan: not on the NEML (beclometasone/fluticasone nasal used) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Topical anti-inflammatory corticosteroid [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F2_NEP],
  ind: { adult: ["Seasonal or perennial rhinitis [FDA]."], paed: ["6–14 years [FDA]."] },
  adult: [["Rhinitis", "2 sprays (50 mcg) each nostril twice daily (200 mcg/day); may increase to three times daily (300 mcg/day) [FDA]."]],
  paed: { tiers: ["6–14 years: 1 spray each nostril three times daily, or 2 sprays each nostril twice daily (150–200 mcg/day) [FDA].", "Under 6 years: not recommended [FDA]."], transition: "Adult dose.", calcNote: "Sprays — no calculator." },
  adj: { renal: "Not applicable [NEP].", hepatic: "Not applicable [NEP].", pregnancy: F2_NEP, other: "Growth monitoring in children [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F2_NEP, animal: F2_LD, manage: F2_NEP },
  contra: ["Hypersensitivity to any ingredient [FDA]."],
  ae: { common: ["Nasal burning/stinging, epistaxis, headache, altered taste [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Nasal septal perforation, candidiasis, glaucoma/cataract [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Nasal mucosa; growth in children [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F2_LOC, calc: [],
  sources: [["FDA", "Flunisolide nasal solution — FDA label (DailyMed)", F2_DM("50d87523-e1fb-4342-825f-9dba972c6a25")], F2_BT],
  dose: { tagline: "Steroid nasal spray for allergic rhinitis.",
    adult: [{ ind: "Rhinitis", text: "2 sprays each nostril twice daily (up to three times)." }],
    child: [{ ind: "6–14 years", text: "1 spray each nostril three times daily or 2 twice daily." }] }
});

/* ---------- FLUOCINOLONE ACETONIDE (FDA DERMA-SMOOTHE/FS NDA019452) ---------- */
FDB_M("fluocinolone-acetonide", {
  inn: "Fluocinolone acetonide", atc: "D07AC04 S01BA15", cls: "Topical corticosteroid (low–medium potency)",
  linked: [],
  forms: ["Scalp/body oil 0.01%; cream, ointment, solution 0.01–0.025%; ear drops; intravitreal implants (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Topical anti-inflammatory corticosteroid [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F2_NEP],
  ind: { adult: ["Psoriasis of the scalp (scalp oil) [FDA].", "Atopic dermatitis (body oil, other labels) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Atopic dermatitis from 3 months (body oil) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Scalp psoriasis", "Wet the scalp, apply a thin film, massage, cover with the shower cap, leave overnight or at least 4 hours, then shampoo; daily as needed; stop when controlled within 2 weeks [FDA]."]],
  paed: { tiers: ["Body oil for atopic dermatitis: per label (contains peanut oil) [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable (topical) [NEP].", hepatic: "Not applicable (topical) [NEP].", pregnancy: F2_NEP, other: "Contains refined peanut oil — caution in peanut allergy [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Systemic steroid effects with heavy use [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F2_LD, manage: "Reduce use [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Burning, dryness, itching, folliculitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["HPA suppression, skin atrophy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Response within 2 weeks [FDA]."],
  local: F2_LOC, calc: [],
  sources: [["FDA", "Derma-Smoothe/FS (fluocinolone acetonide 0.01%) — FDA label (DailyMed)", F2_DM("113e167a-a9fe-440e-9446-d6d87963ef46")], F2_BT],
  dose: { tagline: "Low-potency topical steroid oil for scalp psoriasis.",
    adult: [{ ind: "Scalp psoriasis", text: "Thin film overnight (at least 4 h), then shampoo; up to 2 weeks." }],
    child: [{ ind: "Children", text: "Per label (body oil)." }] }
});

/* Brand names — BATCH F2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"fesoterodine":{"IN":[["Fesobig","Msn Laboratories","Fesobig 4Mg Strip Of 10 Tablets"]],"BD":[["Fesotrex ER","Incepta Pharmaceuticals Ltd","4 mg"]],"src":["https://pharmeasy.in/online-medicine-order/fesobig-4mg-strip-of-10-tablets-4015274","https://medex.com.bd/brands/39276/fesotrex-er-4-mg-xr-tablet"]},"fexofenadine":{"IN":[["Altiva","Ranbaxy Laboratories (sun Pharma)","Altiva 120Mg Strip Of 10 Tablets"],["Histakem","Alkem Laboratories Ltd","Histakem 180Mg Strip Of 10 Tablets"],["Air","Systopic Laboratories","Air 180Mg Strip Of 10 Tablets"]],"BD":[["X-Din","Benham Pharmaceuticals Ltd","30 mg/5 ml"],["Fenadin","Renata PLC","120 mg"],["SB-Fexec","Sunman-Birdem Pharma Ltd","120 mg"]],"src":["https://pharmeasy.in/online-medicine-order/altiva-120mg-tablet-33999","https://pharmeasy.in/online-medicine-order/histakem-180mg-tablet-10-s-226261","https://pharmeasy.in/online-medicine-order/air-180mg-tab-10-s-216375","https://medex.com.bd/brands/27484/x-din-30-mg-oral-suspension","https://medex.com.bd/brands/20393/sb-fexec-120-mg-tablet"]},"fezolinetant":{"IN":[],"BD":[["Fezotan","ACME Laboratories Ltd","45 mg"],["Feoza","Square Pharmaceuticals PLC","45 mg"],["Felitan","Healthcare Pharmaceuticals Ltd","45 mg"]],"src":["https://medex.com.bd/brands/38876/fezotan-45-mg-tablet","https://medex.com.bd/brands/38920/feoza-45-mg-tablet","https://medex.com.bd/brands/39403/felitan-45-mg-tablet"]},"filgrastim":{"IN":[["Neukine","Intas Pharmaceuticals Ltd","Neukine 300Mcg Pre Filled Syringe Of 1Ml Solution For Injection"],["Religrast","Reliance Life Science","Religrast 300Mcg Pre Filled Syringe Of 0.5Ml Injection"],["Grastim","Dr Reddy's Laboratories Ltd","Grastim 300Mcg Injection 1Ml"]],"BD":[["Neupomax","Ziska Pharmaceuticals Ltd","300 mcg/0.5 ml"],["Zarzio","Nevian Lifescience PLC","300 mcg/0.5 ml"],["Filgram","Eskayef Pharmaceuticals Ltd","300 mcg/0.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/neukine-300mcg-pfs-inj-13902","https://pharmeasy.in/online-medicine-order/religrast-300mcg-pre-filled-syringe-injection-0-5ml-80653","https://pharmeasy.in/online-medicine-order/grastim-300mcg-injection-1ml-229842","https://medex.com.bd/brands/37560/neupomax-300-mcg-injection","https://medex.com.bd/brands/35459/zarzio-300-mcg-injection","https://medex.com.bd/brands/35158/filgram-300-mcg-injection"]},"finerenone":{"IN":[["Kerendia","Bayer Zydus Pharma","Kerendia 10Mg Strip Of 14 Tablets"],["Lyvelsa","Sun Pharma","Lyvelsa 10Mg Strip Of 14 Tablets"]],"BD":[["Renopro","Popular Pharmaceuticals PLC","10 mg"],["FinFit","Square Pharmaceuticals PLC","10 mg"],["Fincard","Aristopharma Ltd","20 mg"]],"src":["https://pharmeasy.in/online-medicine-order/kerendia-10mg-strip-of-14-tablets-3828199","https://pharmeasy.in/online-medicine-order/lyvelsa-10mg-strip-of-14-tablets-4152251","https://medex.com.bd/brands/37045/renopro-10-mg-tablet","https://medex.com.bd/brands/40194/finfit-10-mg-tablet","https://medex.com.bd/brands/39969/fincard-20-mg-tablet"]},"fingolimod":{"IN":[["Fingomod","Sun Pharma","Fingomod Strip Of 7 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/fingomod-capsule-7-s-233007"]},"flavoxate":{"IN":[["Urinol","Knoll Healthcare Pvt Ltd","Urinol 200Mg Strip Of 15 Tablets"],["Urikind","Mankind Pharmaceuticals Ltd","Urikind 200Mg Strip Of 10 Tablets"],["Urivel","Leeford Healthcare Ltd","Urivel Strip Of 10 Tablets"]],"BD":[["Flavox","Somatec Pharmaceuticals Ltd","200 mg"],["Urilax","Incepta Pharmaceuticals Ltd","100 mg"],["Uripay","Al-Madina Pharmaceuticals Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/urinol-200-mg-tablet-15-3017176","https://pharmeasy.in/online-medicine-order/urikind-200mg-tablet-18245","https://pharmeasy.in/online-medicine-order/urivel-tablet-16406","https://medex.com.bd/brands/15581/flavox-200-mg-tablet","https://medex.com.bd/brands/15582/urilax-100-mg-tablet","https://medex.com.bd/brands/29263/uripay-100-mg-tablet"]},"flecainide":{"IN":[["Flecarite","Torrent Pharmaceuticals Ltd","Flecarite 50Mg Strip Of 10 Tablets"],["Flecajol","Jolly Healthcare","Flecajol 100Mg Strip Of 10 Tablets"]],"BD":[["Flecard","UniMed UniHealth Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/flecarite-50mg-strip-of-10-tablets-27125","https://pharmeasy.in/online-medicine-order/flecajol-100mg-strip-of-10-tablets-4550614","https://medex.com.bd/brands/36969/flecard-50-mg-tablet"]},"flibanserin":{"IN":[],"BD":[["Pink Pill","ACME Laboratories Ltd","100 mg"],["Fliban","Square Pharmaceuticals PLC","100 mg"],["Fevigra","Navana Pharmaceuticals Ltd","100 mg"]],"src":["https://medex.com.bd/brands/32526/pink-pill-100-mg-tablet","https://medex.com.bd/brands/32596/fliban-100-mg-tablet","https://medex.com.bd/brands/33005/fevigra-100-mg-tablet"]},"flucytosine":{"IN":[["Cytoflu","Jolly Healthcare","Cytoflu 500 Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/cytoflu-500-mg-tablet-10-no-s-3732307"]},"fludarabine":{"IN":[["Adflu","Adley Labs","Adflu 50 Injection 1 No's"]],"BD":[["Fludara","Synovia Pharma PLC","50 mg/2 ml"],["Fludarabin Hexal","Nevian Lifescience PLC","50 mg/2 ml"]],"src":["https://pharmeasy.in/online-medicine-order/adflu-50-injection-1-no-s-4115185","https://medex.com.bd/brands/17102/fludara-50-mg-iv-infusion","https://medex.com.bd/brands/26688/fludarabin-hexal-50-mg-iv-infusion"]},"fludrocortisone":{"IN":[["Floricot","Samarth Life Sciences Pvt Ltd","Floricot 100Mcg Strip Of 10 Tablets"]],"BD":[["Aldocort","Incepta Pharmaceuticals Ltd","0.10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/floricot-100mcg-tablet-47456","https://medex.com.bd/brands/26052/aldocort-010-mg-tablet"]},"fluocinolone-acetonide":{"IN":[],"BD":[["Cinoderm","Drug International Ltd","0.025%"],["Fungakil","Ambee Pharmaceuticals Ltd","0.025%"]],"src":["https://medex.com.bd/brands/12624/cinoderm-0025-cream","https://medex.com.bd/brands/28034/fungakil-0025-ointment"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
