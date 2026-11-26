/* Clinical Disease Guide — Drug monograph database, batch V-2 (26 Nov 2026).
   End of V (vismodegib … vutrisiran); W has no further current FDA labels. Same rules as js/fdb-a2.js.
   Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js. */
(function () { // V-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const V2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("vismodegib", {
  inn: "Vismodegib", atc: "L01XJ01", cls: "Hedgehog pathway (smoothened) inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 150 mg [FDA]."],
  moa: "Binds smoothened, blocking hedgehog signalling [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Metastatic basal cell carcinoma, or locally advanced BCC recurring after surgery or unsuitable for surgery/radiation [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["BCC", "150 mg once daily, with or without food, until progression or toxicity [FDA]."], ["Before", "Pregnancy test within 7 days before starting [FDA]."], ["Interruptions", "Withhold up to 8 weeks for intolerable effects [FDA]."], ["Stop", "Permanently for SJS, TEN or DRESS [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Embryo-fetal death or severe birth defects — contraception for women during and 24 months after; men use condoms during and 3 months after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "No blood donation during and 24 months after [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Muscle spasms, alopecia, taste loss, weight loss, fatigue, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Embryo-fetal toxicity [FDA]", "Severe cutaneous reactions [FDA]", "Premature epiphyseal fusion in children [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Pregnancy testing [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vismodegib", "std", "Basal cell carcinoma — 150 mg once daily", "PO", ADULT, "fixed", 150, 24, { formulations: [{ form: "capsule", strength: 150, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["Pregnancy test within 7 days before starting"] })],
  sources: [["FDA", "Erivedge (vismodegib) — FDA label (DailyMed)", V2_DM("eb368bb6-80e3-4df9-8a85-91df0a2ada6a")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Hedgehog inhibitor for advanced basal cell carcinoma — 150 mg daily; strict pregnancy prevention.",
    boxedTitle: "Embryo-fetal toxicity",
    boxed: "ERIVEDGE can cause embryo-fetal death or severe birth defects when administered to a pregnant woman. ERIVEDGE is embryotoxic, fetotoxic, and teratogenic in animals. Teratogenic effects included severe midline defects, missing digits, and other irreversible malformations. Verify the pregnancy status of females of reproductive potential within 7 days prior to initiating ERIVEDGE. Advise pregnant women of the potential risks to a fetus. Advise females of reproductive potential to use effective contraception during and after ERIVEDGE. Advise males of the potential risk of ERIVEDGE exposure through semen and to use condoms with a pregnant partner or a female partner of reproductive potential [FDA].",
    adult: [{ ind: "Advanced basal cell carcinoma", text: "150 mg once daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("voclosporin", {
  inn: "Voclosporin", atc: "L04AD03", cls: "Calcineurin inhibitor",
  linked: [],
  forms: ["Capsules 7.9 mg [FDA]."],
  moa: "Inhibits calcineurin, reducing T-cell activation; stabilises podocytes [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — strong inhibitors contraindicated [FDA]."],
  ind: { adult: ["Active lupus nephritis, with mycophenolate and corticosteroids [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Lupus nephritis", "23.7 mg (three 7.9 mg capsules) twice daily, with MMF and corticosteroids [FDA]."], ["Taking", "Empty stomach, about 12 hours apart (at least 8 h); swallow whole; avoid grapefruit [FDA]."], ["Before", "Baseline eGFR and BP; not recommended if eGFR 45 or less unless benefit outweighs risk; do not start if BP over 165/105 [FDA]."], ["eGFR falls", "Reduce or stop per label table; check eGFR every 2 weeks for a month, then every 4 weeks for a year [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "Baseline eGFR 45 or less: not recommended [FDA].", hepatic: "Mild–moderate: 15.8 mg twice daily; severe: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Avoid (alcohol in capsules) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Not with cyclophosphamide [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Strong CYP3A4 inhibitors (e.g. ketoconazole, itraconazole, clarithromycin) [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Reduced eGFR, hypertension, diarrhoea, headache, anaemia, cough, UTI [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Malignancies and serious infections [FDA]", "Nephrotoxicity [FDA]", "Hypertension, neurotoxicity, hyperkalaemia, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["eGFR and BP every 2 weeks for 1 month, then every 4 weeks; potassium [FDA]."],
  local: notBT,
  calc: [C("voclosporin", "ln", "Lupus nephritis — 23.7 mg twice daily", "PO", ADULT, "fixed", 23.7, 12, { formulations: [{ form: "capsule", strength: 7.9, unit: "mg", whole: true }], rounding: "3 capsules", renal: [{ crcl_min: 0, crcl_max: 45, action: "avoid", note: "baseline eGFR 45 or less: not recommended unless benefit outweighs risk" }], flags: ["With MMF and corticosteroids", "Empty stomach; no grapefruit"] })],
  sources: [["FDA", "Lupkynis (voclosporin) — FDA label (DailyMed)", V2_DM("9f489295-1156-52c7-5fd0-5c4c52f9b813")], NEML_SRC],
  dose: { tagline: "Calcineurin inhibitor for lupus nephritis — 23.7 mg twice daily with MMF and steroids.",
    boxedTitle: "Malignancies and serious infections",
    boxed: "Increased risk for developing malignancies and serious infections with LUPKYNIS or other immunosuppressants that may lead to hospitalization or death [FDA].",
    adult: [{ ind: "Lupus nephritis", text: "23.7 mg twice daily.", calc: ["ln"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("von-willebrand-factor", {
  inn: "Von Willebrand factor / factor VIII complex (human)", atc: "B02BD06", cls: "Plasma-derived coagulation factor",
  linked: [],
  forms: ["Powder for injection; vials labelled in IU FVIII and IU VWF:RCo (Alphanate) [FDA]."],
  moa: "Replaces von Willebrand factor and factor VIII [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Haemophilia A bleeding and surgery [FDA].", "Surgery or invasive procedures in von Willebrand disease where desmopressin is ineffective or contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Same [FDA]."] },
  adult: [["VWD surgery", "Pre-operative 60 IU VWF:RCo/kg; then 40–60 IU VWF:RCo/kg [FDA]."], ["Haemophilia A", "IU = weight (kg) × desired FVIII rise (%) × 0.5 [FDA]."], ["Route", "IV only after reconstitution [FDA]."]],
  paed: { tiers: ["VWD surgery: pre-operative 75 IU VWF:RCo/kg; then 50–75 IU VWF:RCo/kg [FDA]."], transition: "Adult doses for adults.", calcNote: "IU/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Plasma-derived — small infection-transmission risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Thrombosis with high FVIII levels [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: NEP },
  contra: ["Anaphylaxis or severe reaction to the product [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Allergic reactions, fever, headache, pruritus [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Thromboembolism [FDA] [UNVERIFIED-KNOWLEDGE]", "Inhibitor development [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["VWF:RCo and FVIII levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("von-willebrand-factor", "vwd", "VWD surgery, adult — 60 IU VWF:RCo/kg pre-operatively", "IV", ADULT, "mg_per_kg", 60, null, { dose: { value: 60, unit: "IU", per: "dose" }, rounding: "round to whole vials", flags: ["Then 40–60 IU/kg"] }),
    C("von-willebrand-factor", "vwdc", "VWD surgery, child — 75 IU VWF:RCo/kg pre-operatively", "IV", pop(null, 216, null, null), "mg_per_kg", 75, null, { dose: { value: 75, unit: "IU", per: "dose" }, rounding: "round to whole vials", flags: ["Then 50–75 IU/kg"] })
  ],
  sources: [["FDA", "Alphanate (antihemophilic factor/von Willebrand factor complex, human) — FDA label (DailyMed)", V2_DM("5a7aea94-654c-4113-9014-c3137de0a931")], NEML_SRC],
  dose: { tagline: "VWF/FVIII concentrate — VWD surgery 60 IU/kg (child 75 IU/kg) VWF:RCo before the procedure.",
    adult: [{ ind: "VWD surgery", text: "60 IU VWF:RCo/kg, then 40–60 IU/kg.", calc: ["vwd"] }, { ind: "Haemophilia A", text: "kg × desired % rise × 0.5 IU." }],
    child: [{ ind: "VWD surgery", text: "75 IU VWF:RCo/kg, then 50–75 IU/kg.", calc: ["vwdc"] }] }
});

FDB_M("vonoprazan", {
  inn: "Vonoprazan", atc: "A02BX08", cls: "Potassium-competitive acid blocker",
  linked: [],
  forms: ["Tablets 10, 20 mg; also co-packaged with amoxicillin ± clarithromycin [FDA]."],
  moa: "Reversibly blocks the gastric proton pump by potassium competition [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Erosive oesophagitis healing and maintenance; heartburn of non-erosive GERD; H. pylori (with antibiotics) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Erosive oesophagitis", "20 mg once daily for 8 weeks [FDA]."], ["Maintenance", "10 mg once daily up to 6 months [FDA]."], ["Non-erosive GERD", "10 mg once daily for 4 weeks [FDA]."], ["H. pylori", "20 mg twice daily with amoxicillin 1 g three times daily (dual) or with amoxicillin 1 g + clarithromycin 500 mg twice daily (triple), 14 days [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Swallow", "Whole, with or without food [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "eGFR under 30: lower doses by indication (label) [FDA].", hepatic: "Moderate–severe: lower doses by indication (label) [FDA].", pregnancy: NEP, other: "Reduces absorption of pH-dependent drugs (e.g. rilpivirine — contraindicated) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Rilpivirine-containing products [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Gastritis, diarrhoea, abdominal distension, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["C. difficile diarrhoea, bone fracture, B12 deficiency, hypomagnesaemia with long use [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("vonoprazan", "ee", "Erosive oesophagitis — 20 mg once daily (8 weeks)", "PO", ADULT, "fixed", 20, 24, { formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "renal_note", note: "eGFR under 30: see label for lower dose" }] }),
    C("vonoprazan", "maint", "Maintenance / non-erosive GERD — 10 mg once daily", "PO", ADULT, "fixed", 10, 24, { formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "1 tablet" })
  ],
  sources: [["FDA", "Voquezna (vonoprazan) — FDA label (DailyMed)", V2_DM("0cc52ac5-77ec-4d66-a770-762a1a960914")], NEML_SRC],
  dose: { tagline: "Potassium-competitive acid blocker — 20 mg daily to heal oesophagitis, 10 mg to maintain.",
    adult: [{ ind: "Erosive oesophagitis", text: "20 mg daily × 8 weeks.", calc: ["ee"] }, { ind: "Maintenance / NERD", text: "10 mg daily.", calc: ["maint"] }, { ind: "H. pylori", text: "20 mg twice daily with amoxicillin ± clarithromycin × 14 days." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("vorasidenib", {
  inn: "Vorasidenib", atc: "L01XM04", cls: "IDH1/IDH2 inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 10, 40 mg [FDA]."],
  moa: "Inhibits mutant IDH1 and IDH2, lowering 2-hydroxyglutarate [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP1A2 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Grade 2 astrocytoma or oligodendroglioma with IDH1/IDH2 mutation after surgery [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Adults", "40 mg once daily, with or without food [FDA]."], ["Before", "Blood chemistry and liver tests [FDA]."]],
  paed: { tiers: ["12 years+, 40 kg or more: 40 mg once daily [FDA].", "12 years+, under 40 kg: 20 mg once daily [FDA]."], transition: "Adult dose from 40 kg.", calcNote: "Weight-based in adolescents." },
  adj: { renal: NEP, hepatic: "Child-Pugh B/C: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP1A2 inhibitors; smoking lowers levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Fatigue, headache, COVID-19/infections, musculoskeletal pain, diarrhoea, nausea, seizures [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests every 2 weeks for 2 months, then monthly for 2 years [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("vorasidenib", "std", "IDH-mutant grade 2 glioma, 40 kg+ — 40 mg once daily", "PO", pop(144, null, 40, null), "fixed", 40, 24, { formulations: [{ form: "tablet", strength: 40, unit: "mg", whole: true }], rounding: "1 tablet" }),
    C("vorasidenib", "lt40", "IDH-mutant glioma, 12 years+ under 40 kg — 20 mg once daily", "PO", pop(144, null, null, 40), "fixed", 20, 24, { formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "2 tablets" })
  ],
  sources: [["FDA", "Voranigo (vorasidenib) — FDA label (DailyMed)", V2_DM("31405fee-55b7-4857-987e-2724ee76be84")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "IDH inhibitor for grade 2 glioma — 40 mg daily (20 mg under 40 kg).",
    adult: [{ ind: "IDH-mutant grade 2 glioma", text: "40 mg once daily.", calc: ["std"] }],
    child: [{ ind: "12 years+", text: "40 mg (40 kg+) or 20 mg (under 40 kg) daily.", calc: ["std", "lt40"] }] }
});

FDB_M("voretigene-neparvovec", {
  inn: "Voretigene neparvovec", atc: "S01XA27", cls: "AAV2 gene therapy (RPE65)",
  linked: [],
  forms: ["Subretinal suspension 5 × 10¹² vg/mL, with diluent [FDA]."],
  moa: "Delivers a working RPE65 gene to retinal pigment epithelium [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Biallelic RPE65 mutation-associated retinal dystrophy with viable retinal cells [FDA]."], paed: ["From 12 months [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "1.5 × 10¹¹ vector genomes per eye, subretinal, in 0.3 mL [FDA]."], ["Timing", "Each eye on a separate day, at least 6 days apart [FDA]."], ["Steroids", "Prednisone 1 mg/kg/day (max 40 mg) for 7 days starting 3 days before each eye, then taper over 10 days [FDA]."]],
  paed: { tiers: ["From 12 months: same per-eye dose [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Fixed per-eye dose — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Avoid air travel and high altitude until the vitrectomy gas bubble clears [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: [NEP],
  ae: { common: ["Conjunctival hyperaemia, cataract, raised IOP, retinal tear [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Endophthalmitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Permanent loss of visual acuity, retinal abnormalities, chorioretinal atrophy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Eye examinations after surgery [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Luxturna (voretigene neparvovec-rzyl) — FDA label (DailyMed)", V2_DM("08313a24-e7ce-457a-bb3f-161bc45517ee")], NEML_SRC],
  dose: { tagline: "One-time RPE65 gene therapy — 1.5 × 10¹¹ vg subretinal per eye, eyes 6+ days apart.",
    adult: [{ ind: "RPE65 retinal dystrophy", text: "1.5 × 10¹¹ vg per eye, subretinal." }],
    child: [{ ind: "From 12 months", text: "Same." }] }
});

FDB_M("voriconazole", {
  inn: "Voriconazole", atc: "J02AC03", cls: "Triazole antifungal",
  linked: [],
  forms: ["Tablets 50, 200 mg; oral suspension 40 mg/mL; IV powder 200 mg [FDA]."],
  moa: "Inhibits fungal ergosterol synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Non-linear; CYP2C19 genotype affects levels; strong CYP3A4 inhibitor [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Invasive aspergillosis, candidaemia and deep Candida infections, oesophageal candidiasis, Scedosporium and Fusarium infections [FDA]."], paed: ["2 years and over [FDA]."] },
  adult: [["Invasive aspergillosis (IV)", "Load 6 mg/kg every 12 h for 24 hours, then 4 mg/kg every 12 h [FDA]."], ["Candidaemia (IV)", "Load 6 mg/kg every 12 h × 2, then 3–4 mg/kg every 12 h [FDA]."], ["Oral maintenance", "200 mg every 12 h; under 40 kg 100–150 mg every 12 h [FDA]."], ["Hepatic (Child-Pugh A/B)", "Half the maintenance dose [FDA]."], ["Kidney (CrCl under 50)", "Avoid IV (cyclodextrin vehicle); oral is fine [FDA]."], ["Oral timing", "1 hour before or after meals [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2 to under 12 years, and 12–14 years under 50 kg: IV load 9 mg/kg every 12 h × 24 h, then 8 mg/kg every 12 h; oral 9 mg/kg every 12 h (max 350 mg) [FDA].", "12–14 years 50 kg+ and 15 years+: adult dosing [FDA]."], transition: "Adult dosing from 15 years or 12–14 y at 50 kg+.", calcNote: "mg/kg every 12 h." },
  adj: { renal: "CrCl under 50: avoid IV unless benefit justifies; oral no change [FDA].", hepatic: "Child-Pugh A/B: halve maintenance [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Many interactions — check before use [FDA]." },
  tox: { human: "Visual disturbance, hepatotoxicity, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; haemodialysis clears the IV vehicle [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Sirolimus, rifampicin, carbamazepine, long-acting barbiturates, efavirenz 400 mg+, high-dose ritonavir, rifabutin, ergots, St John's wort, pimozide, quinidine, ivabradine, naloxegol, tolvaptan, lurasidone, venetoclax ramp-up [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Visual disturbance, fever, rash, nausea, vomiting, hallucinations, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation and arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE]", "Photosensitivity and skin cancer with long use; fluorosis/periostitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions, severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests; electrolytes and ECG; vision if over 28 days; trough levels where available [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("voriconazole", "load", "Invasive aspergillosis — IV loading 6 mg/kg every 12 h (first 24 h)", "IV", pop(180, null, null, null), "mg_per_kg", 6, 12, { formulations: [{ form: "reconstituted", strength: 10, unit: "mg/mL" }], rounding: "1 mL", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "avoid", note: "CrCl under 50: avoid IV (vehicle accumulates) — use oral" }], flags: ["Two doses only, then maintenance"] }),
    C("voriconazole", "ivm", "Invasive aspergillosis — IV maintenance 4 mg/kg every 12 h", "IV", pop(180, null, null, null), "mg_per_kg", 4, 12, { formulations: [{ form: "reconstituted", strength: 10, unit: "mg/mL" }], rounding: "1 mL", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "avoid", note: "CrCl under 50: avoid IV (vehicle accumulates) — use oral" }], flags: ["Child-Pugh A/B: halve maintenance"] }),
    C("voriconazole", "po", "Oral maintenance, 40 kg+ — 200 mg every 12 h", "PO", pop(180, null, 40, null), "fixed", 200, 12, { formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Under 40 kg: 100–150 mg every 12 h", "Child-Pugh A/B: halve"] }),
    C("voriconazole", "child", "Child 2–11 years — oral 9 mg/kg every 12 h (max 350 mg)", "PO", pop(24, 144, null, null), "mg_per_kg", 9, 12, { caps: { max_single: 350, unit: "mg" }, formulations: [{ form: "suspension", strength: 40, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["IV: load 9 mg/kg ×2, then 8 mg/kg every 12 h", "12–14 y under 50 kg: same child dosing"] })
  ],
  sources: [["FDA", "Vfend (voriconazole) — FDA label (DailyMed)", V2_DM("08d08721-1f4c-478a-8abf-d9c402d50553")], NEML_SRC],
  dose: { tagline: "Triazole for invasive aspergillosis — IV 6 mg/kg ×2 then 4 mg/kg every 12 h, or 200 mg oral twice daily.",
    adult: [{ ind: "Invasive aspergillosis", text: "IV 6 mg/kg every 12 h × 2, then 4 mg/kg every 12 h; oral 200 mg every 12 h.", calc: ["load", "ivm", "po"] }],
    child: [{ ind: "2–11 years", text: "Oral 9 mg/kg every 12 h (max 350 mg); IV load 9, then 8 mg/kg.", calc: ["child"] }] }
});

FDB_M("vorinostat", {
  inn: "Vorinostat", atc: "L01XH01", cls: "Histone deacetylase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 100 mg [FDA]."],
  moa: "Inhibits histone deacetylases [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Cutaneous T-cell lymphoma with progressive, persistent or recurrent disease after two systemic therapies [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["CTCL", "400 mg once daily with food [FDA]."], ["Intolerance", "300 mg once daily; then 300 mg daily for 5 consecutive days each week [FDA]."], ["Mild–moderate hepatic impairment", "Start 300 mg once daily [FDA]."], ["Capsules", "Do not open or crush [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: "Mild–moderate: 300 mg start; severe: not studied [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Warfarin INR may rise; valproate raises bleeding risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, fatigue, nausea, thrombocytopenia, anorexia, taste change [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pulmonary embolism and DVT [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe thrombocytopenia and anaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperglycaemia, dehydration [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, electrolytes, glucose, creatinine every 2 weeks for 2 months, then monthly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vorinostat", "std", "CTCL — 400 mg once daily with food", "PO", ADULT, "fixed", 400, 24, { formulations: [{ form: "capsule", strength: 100, unit: "mg", whole: true }], rounding: "4 capsules", flags: ["Intolerance or liver impairment: 300 mg"] })],
  sources: [["FDA", "Zolinza (vorinostat) — FDA label (DailyMed)", V2_DM("cd86ee78-2781-468b-930c-3c4677bcc092")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "HDAC inhibitor for refractory cutaneous T-cell lymphoma — 400 mg daily with food.",
    adult: [{ ind: "CTCL", text: "400 mg once daily with food.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("vortioxetine", {
  inn: "Vortioxetine", atc: "N06AX26", cls: "Multimodal serotonergic antidepressant",
  linked: [],
  forms: ["Tablets 5, 10, 20 mg [FDA]."],
  moa: "Serotonin reuptake inhibition plus 5-HT receptor modulation [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2D6 substrate — poor metabolisers max 10 mg [FDA]."],
  ind: { adult: ["Major depressive disorder [FDA]."], paed: ["Not approved [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["MDD", "10 mg once daily, then increase to 20 mg as tolerated; 5 mg if higher doses not tolerated [FDA]."], ["CYP2D6 poor metabolisers", "Max 10 mg/day [FDA]."], ["Stopping", "From 15–20 mg, reduce to 10 mg for a week first if possible [FDA]."], ["Before", "Screen for bipolar disorder [FDA]."]],
  paed: { tiers: ["Not approved [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Starting dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Strong CYP2D6 inhibitors: halve dose; strong inducers: consider increase [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs within 21 days; linezolid or IV methylene blue [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, constipation, vomiting, dizziness, sexual dysfunction, pruritus [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidality in young people [FDA]", "Serotonin syndrome, bleeding, mania, hyponatraemia, angle-closure glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality [FDA]."],
  local: notBT,
  calc: [C("vortioxetine", "mdd", "Depression — start 10 mg once daily", "PO", ADULT, "fixed", 10, 24, { formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Increase to 20 mg as tolerated", "CYP2D6 poor metaboliser: max 10 mg"] })],
  sources: [["FDA", "Trintellix (vortioxetine) — FDA label (DailyMed)", V2_DM("239215eb-be32-4286-9677-1e5556c6cccf")], NEML_SRC],
  dose: { tagline: "Antidepressant — 10 mg daily, up to 20 mg (5 mg if not tolerated).",
    boxedTitle: "Suicidal thoughts and behaviors",
    boxed: "Antidepressants increased the risk of suicidal thoughts and behavior in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors. TRINTELLIX is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Major depression", text: "10 mg daily → 20 mg.", calc: ["mdd"] }],
    child: [{ ind: "Children", text: "Not approved." }] }
});

FDB_M("vosoritide", {
  inn: "Vosoritide", atc: "M05BX07", cls: "C-type natriuretic peptide analogue",
  linked: [],
  forms: ["Powder for injection 0.4, 0.56, 1.2 mg vials (0.8 or 2 mg/mL after reconstitution) [FDA]."],
  moa: "Stimulates NPR-B, counteracting FGFR3 signalling at the growth plate [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Not for adults (closed epiphyses) [FDA]."], paed: ["Achondroplasia with open epiphyses, to increase linear growth [FDA]."] },
  adult: [["Adults", "Not indicated — stop when epiphyses close [FDA]."]],
  paed: { tiers: ["SC once daily; dose and volume by actual weight band from the label table (e.g. 3 kg 0.096 mg) [FDA].", "Before each dose: adequate food and 240–300 mL fluid in the hour before (hypotension) [FDA]."], transition: "Stop when epiphyses close [FDA].", calcNote: "Weight-band table — use the label table, no calculator." },
  adj: { renal: "eGFR under 60 mL/min/1.73 m²: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Monitor growth; adjust to current weight [FDA]." },
  tox: { human: "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Injection-site reactions, vomiting, low blood pressure, dizziness, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Symptomatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Growth every 3–6 months; weight for dose band [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Voxzogo (vosoritide) — FDA label (DailyMed)", V2_DM("228e8560-04a4-4bb1-a81f-29531a9e4d27")], NEML_SRC],
  dose: { tagline: "Daily SC injection for achondroplasia with open growth plates — dose by weight band.",
    adult: [{ ind: "Adults", text: "Not indicated." }],
    child: [{ ind: "Achondroplasia", text: "Once daily SC by weight-band table; fluids beforehand." }] }
});

FDB_M("voxelotor", {
  inn: "Voxelotor", atc: "B06AX03", cls: "Haemoglobin S polymerisation inhibitor",
  linked: [],
  forms: ["Tablets 500 mg; tablets for oral suspension 300 mg (Oxbryta) [FDA]."],
  moa: "Raises haemoglobin oxygen affinity, inhibiting HbS polymerisation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Sickle cell disease, 4 years and over (US label) [FDA] — withdrawn from the market worldwide by the manufacturer in September 2024 over safety concerns [UNVERIFIED-KNOWLEDGE]."], paed: ["4 years and over (label) [FDA]."] },
  adult: [["Status", "Withdrawn September 2024 — do not start; review existing patients with a haematologist [UNVERIFIED-KNOWLEDGE]."], ["Label dose (12 years+)", "1,500 mg once daily; severe hepatic impairment 1,000 mg [FDA]."]],
  paed: { tiers: ["4 to under 12 years: weight-based (label table) [FDA]."], transition: "Label dose from 12 years.", calcNote: "Withdrawn — no calculator." },
  adj: { renal: NEP, hepatic: "Child-Pugh C: 1,000 mg [FDA].", pregnancy: NEP, other: "Interferes with HPLC haemoglobin measurement [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, diarrhoea, abdominal pain, nausea, rash, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Excess vaso-occlusive crises and deaths seen in post-marketing studies (reason for withdrawal) [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Oxbryta (voxelotor) — FDA label (DailyMed)", V2_DM("3c557fac-29ec-483f-b691-8a935d4decc3")], NEML_SRC],
  dose: { tagline: "Sickle cell drug withdrawn worldwide in September 2024 — for reference only.",
    cautionTitle: "Withdrawn from the market",
    caution: "The manufacturer withdrew voxelotor from all markets in September 2024 after data showed more vaso-occlusive crises and deaths. Do not start it; refer current patients to a haematologist [UNVERIFIED-KNOWLEDGE].",
    adult: [{ ind: "Sickle cell disease (label)", text: "1,500 mg once daily — withdrawn." }],
    child: [{ ind: "4–11 years (label)", text: "Weight-based — withdrawn." }] }
});

FDB_M("vutrisiran", {
  inn: "Vutrisiran", atc: "N07XX18", cls: "Small interfering RNA (transthyretin silencer)",
  linked: [],
  forms: ["Prefilled syringe 25 mg/0.5 mL [FDA]."],
  moa: "Degrades transthyretin mRNA in the liver [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Polyneuropathy of hereditary ATTR amyloidosis [FDA].", "Cardiomyopathy of wild-type or hereditary ATTR [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["ATTR", "25 mg SC once every 3 months, by a healthcare professional [FDA]."], ["Missed dose", "Give as soon as possible, then every 3 months from that date [FDA]."], ["Vitamin A", "Supplement at the recommended daily allowance; check eye symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No change down to eGFR 15 [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Arthralgia, dyspnoea, reduced vitamin A [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Night blindness from low vitamin A [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Vision symptoms (vitamin A) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vutrisiran", "std", "ATTR amyloidosis — 25 mg SC every 3 months", "SC", ADULT, "fixed", 25, 2184, { rounding: "1 syringe", flags: ["Vitamin A supplement"] })],
  sources: [["FDA", "Amvuttra (vutrisiran) — FDA label (DailyMed)", V2_DM("8db0facb-81b6-4006-9239-27dc6409c5d3")], NEML_SRC],
  dose: { tagline: "TTR-silencing siRNA for ATTR amyloidosis — 25 mg SC every 3 months.",
    adult: [{ ind: "ATTR polyneuropathy / cardiomyopathy", text: "25 mg SC every 3 months.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

})(); // end V-2 scope

/* Brand names — BATCH V2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"vonoprazan":{"IN":[["Vono","Dr Reddy's Laboratories Ltd","Vono 20Mg Strip Of 10 Tablets"],["Vonomac","Macleods Pharmaceuticals","Vonomac 20Mg Strip Of 10 Tablets"],["Kabvie","Torrent Pharmaceuticals Ltd","Kabvie 20Mg Strip Of 10 Tablets"]],"BD":[["Vonix","ACME Laboratories Ltd","20 mg"],["Unigerd","NIPRO JMI Pharma Ltd","20 mg"],["Vonion","Orion Pharma Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/vono-20mg-strip-of-10-tablets-4214534","https://pharmeasy.in/online-medicine-order/vonomac-20mg-strip-of-10-tablets-4229285","https://pharmeasy.in/online-medicine-order/kabvie-20-tablet-10-no-s-4196757","https://medex.com.bd/brands/36359/unigerd-20-mg-tablet","https://medex.com.bd/brands/35180/vonion-10-mg-tablet"]},"vorasidenib":{"IN":[["Voranigo","Servier India Private Limited (formerly Known As Serdia Pharmaceuticals (india) Pvt Ltd)","Voranigo 40Mg Bottle Of 30 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/voranigo-40mg-bottle-of-30-tablets-4819791"]},"voriconazole":{"IN":[["Vorifast","Galcare Pharmaceutical Pvt Ltd","Vorifast 200Mg Strip Of 10 Tablets"],["Voritrol","Lupin","Voritrol 200Mg Strip Of 4 Tablets"],["Voritek","Cipla Limited","Voritek 200Mg Strip Of 4 Tablets"]],"BD":[["Vorifast","Healthcare Pharmaceuticals Ltd","100 mg"],["Vefend","ACME Laboratories Ltd","200 mg"],["Voricare","Delta Pharma PLC","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/vorifast-200mg-tab-10-s-210997","https://pharmeasy.in/online-medicine-order/voritrol-200mg-tablet-16962","https://pharmeasy.in/online-medicine-order/voritek-200mg-strip-of-4-tablets-6700","https://medex.com.bd/brands/34920/vorifast-100-mg-tablet","https://medex.com.bd/brands/36628/voricare-50-mg-tablet"]},"vortioxetine":{"IN":[["Vortidif","Sun Pharma","Vortidif 5Mg New Strip Of 10 Tablets"]],"BD":[["Vortiox","Synovia Pharma PLC","5 mg"],["Nytenso","Incepta Pharmaceuticals Ltd","10 mg"],["Vortixen","Everest Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/vortidif-5mg-new-strip-of-10-tablets-4328216","https://medex.com.bd/brands/35150/vortiox-5-mg-tablet","https://medex.com.bd/brands/35593/nytenso-10-mg-tablet","https://medex.com.bd/brands/36098/vortixen-5-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
