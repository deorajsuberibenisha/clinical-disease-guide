/* Clinical Disease Guide — Drug monograph database, block E, batch 3 (26 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text is copied from the label by _work/tools/fdb-boxed-fill.js (exact wording).
   Labels replaced for a standard product: esomeprazole (Nexium Rx), estradiol (oral tablets), ethanol (dehydrated alcohol injection).
   Deferred: estetrol (only with drospirenone), ethinylestradiol (no single-ingredient FDA label — but ethinylestradiol 50 µg tablet IS on the Bhutan NEML: build later from NEMF/WHO). */

/* ================= Batch E-3 (fdb-e3.js) ================= */
const E3_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const E3_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const E3_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const E3_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const E3_NEP = "Not established in primary source. [NEP]";
const E3_LD = "Animal LD50: Not established in primary source. [NEP]";
const E3_LOC = { neml: E3_NOT, strengths: "—", stg: E3_NEP };
const E3_ONC = "High-alert — antineoplastic agents are on the ISMP list of high-alert medications [ISMP]";

/* ---------- EPTIFIBATIDE (FDA injection ANDA213081) ---------- */
FDB_M("eptifibatide", {
  inn: "Eptifibatide", atc: "B01AC16", cls: "Glycoprotein IIb/IIIa inhibitor (antiplatelet)", risk: "High-alert — antithrombotic agents (glycoprotein IIb/IIIa inhibitors) are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Injection 2 mg/mL (bolus vial) and 0.75 mg/mL (infusion vial) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Reversibly blocks the platelet GP IIb/IIIa receptor, preventing fibrinogen binding and aggregation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["About 50% renal clearance — halve the infusion when CrCl under 50 [FDA]."],
  ind: { adult: ["Acute coronary syndrome managed medically or with PCI [FDA].", "PCI including intracoronary stenting [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["ACS", "180 mcg/kg IV bolus as soon as possible, then 2 mcg/kg/min (1 mcg/kg/min if CrCl under 50) until discharge or CABG, up to 72 hours [FDA]."], ["PCI", "180 mcg/kg bolus, a second 180 mcg/kg bolus 10 minutes later, then 2 mcg/kg/min (1 mcg/kg/min if CrCl under 50) for up to 18–24 hours after the procedure [FDA]."], ["With", "Aspirin 160–325 mg daily and heparin (target aPTT 50–70 s medically; ACT for PCI) [FDA]."], ["Before starting", "Haemoglobin/haematocrit, platelets, creatinine, PT/aPTT (and ACT for PCI) [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "CrCl under 50: infusion 1 mcg/kg/min (bolus unchanged); dialysis: contraindicated [FDA].", hepatic: "Not studied [FDA].", pregnancy: E3_NEP, other: "Stop if platelets fall below 100,000/mm³ [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bleeding [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Stop infusion (platelet function recovers in about 4 h); dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Bleeding diathesis, or active abnormal bleeding within the previous 30 days [FDA].", "Severe hypertension (systolic over 200 or diastolic over 110 mm Hg) not controlled [FDA].", "Major surgery within the preceding 6 weeks [FDA].", "Stroke within 30 days or any history of haemorrhagic stroke [FDA].", "Another parenteral GP IIb/IIIa inhibitor [FDA].", "Dependency on renal dialysis [FDA].", "Hypersensitivity (anaphylaxis, urticaria) [FDA]."],
  ae: { common: ["Bleeding, hypotension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Major bleeding [FDA] [UNVERIFIED-KNOWLEDGE]", "Thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bleeding sites, haemoglobin, platelets, aPTT/ACT [FDA]."],
  local: E3_LOC,
  calc: [
    { drug: "eptifibatide", indication_id: "bolus", label: "ACS / PCI — bolus 180 mcg/kg IV", route: "IV", population: E3_ADULT, basis: "mg_per_kg", dose: { value: 0.18, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["= 180 mcg/kg", "PCI: repeat the bolus after 10 minutes", "Then 2 mcg/kg/min (1 mcg/kg/min if CrCl under 50)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Eptifibatide injection — FDA label (DailyMed)", E3_DM("c0781dae-3ef6-4cab-b084-01d2e45f3764")], E3_BT],
  dose: { tagline: "IV GP IIb/IIIa inhibitor for ACS and PCI — halve the infusion if CrCl under 50.",
    adult: [{ ind: "ACS / PCI", text: "180 mcg/kg bolus (twice 10 min apart for PCI), then 2 mcg/kg/min (1 if CrCl under 50).", calc: ["bolus"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EPTINEZUMAB (FDA VYEPTI BLA761119) ---------- */
FDB_M("eptinezumab", {
  inn: "Eptinezumab", atc: "N02CD05", cls: "Anti-CGRP monoclonal antibody",
  linked: [],
  forms: ["Injection 100 mg/mL vial [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds CGRP ligand, blocking its receptor activity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal or hepatic impairment not expected to affect PK [FDA]."],
  ind: { adult: ["Preventive treatment of migraine in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Migraine prevention", "100 mg IV over about 30 minutes every 3 months; some benefit from 300 mg every 3 months [FDA]."], ["Dilution", "Only in 100 mL 0.9% sodium chloride [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment expected [FDA].", hepatic: "No adjustment expected [FDA].", pregnancy: E3_NEP, other: "Hypertension and Raynaud's reported with CGRP antagonists [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["Serious hypersensitivity to eptinezumab or excipients (anaphylaxis, angioedema) [FDA]."],
  ae: { common: ["Nasopharyngitis, hypersensitivity reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis, angioedema [FDA]", "Hypertension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; hypersensitivity during infusion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC, calc: [],
  sources: [["FDA", "Vyepti (eptinezumab-jjmr) — FDA label (DailyMed)", E3_DM("79065861-6aa5-4d1f-829f-3a6471286b36")], E3_BT],
  dose: { tagline: "Quarterly IV anti-CGRP infusion for migraine prevention.",
    adult: [{ ind: "Migraine prevention", text: "100 mg IV every 3 months (some 300 mg)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ERAVACYCLINE (FDA XERAVA NDA211109) ---------- */
FDB_M("eravacycline", {
  inn: "Eravacycline", atc: "J01AA13", cls: "Fluorocycline (tetracycline-class) antibacterial",
  linked: [],
  forms: ["Powder for injection 50 mg and 100 mg vials [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds the 30S ribosomal subunit, inhibiting protein synthesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate — strong inducers need a higher dose [FDA]."],
  ind: { adult: ["Complicated intra-abdominal infections in patients 18 years and over [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["cIAI", "1 mg/kg IV over about 60 minutes every 12 hours for 4–14 days [FDA]."], ["Severe hepatic impairment (Child-Pugh C)", "1 mg/kg every 12 hours on day 1, then 1 mg/kg every 24 hours [FDA]."], ["With strong CYP3A inducer", "1.5 mg/kg every 12 hours [FDA]."]],
  paed: { tiers: ["Not established; tetracycline-class tooth discolouration under 8 years [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Child-Pugh C: every 24 h from day 2; A and B: no change [FDA].", pregnancy: "Tooth discolouration and bone growth inhibition in the fetus — avoid [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Not for complicated UTI [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["Known hypersensitivity to eravacycline, tetracycline-class antibacterials or excipients [FDA]."],
  ae: { common: ["Infusion-site reactions, nausea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Intracranial hypertension, pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Clinical response; LFTs [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "eravacycline", indication_id: "ciai", label: "cIAI — 1 mg/kg IV every 12 h", route: "IV", population: E3_ADULT, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [], rounding: "Per vial reconstitution", renal: [], flags: ["Over 60 minutes, 4–14 days", "Child-Pugh C: every 24 h from day 2", "Strong CYP3A inducer: 1.5 mg/kg every 12 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Xerava (eravacycline) — FDA label (DailyMed)", E3_DM("a4b188d4-f467-470c-ad7b-25ffbdd8862a")], E3_BT],
  dose: { tagline: "IV tetracycline-class antibiotic for complicated intra-abdominal infection.",
    adult: [{ ind: "Complicated intra-abdominal infection", text: "1 mg/kg IV every 12 h for 4–14 days.", calc: ["ciai"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ERDAFITINIB (FDA BALVERSA NDA212018) ---------- */
FDB_M("erdafitinib", {
  inn: "Erdafitinib", atc: "L01EN01", cls: "FGFR kinase inhibitor", risk: E3_ONC,
  linked: [],
  forms: ["Tablets 3, 4, 5 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits FGFR1–4 kinases [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No clinically meaningful effect of mild–moderate hepatic or renal impairment (eGFR 30–89) [FDA]."],
  ind: { adult: ["Locally advanced or metastatic urothelial carcinoma with susceptible FGFR3 alterations after prior systemic therapy [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Urothelial carcinoma (FGFR3)", "8 mg once daily; increase to 9 mg daily if serum phosphate is below target and no ocular or other limiting toxicity at days 14–21 [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Before starting", "Confirm FGFR3 alteration [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment for eGFR 30–89; severe limited data [FDA].", hepatic: "No adjustment for Child-Pugh A or B; C limited data [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hyperphosphataemia; central serous retinopathy — eye examinations [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Hyperphosphataemia, stomatitis, diarrhoea, dry mouth, nail and skin changes, dry eye [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Central serous retinopathy / retinal pigment epithelial detachment [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Phosphate; ophthalmological examinations monthly for 4 months then every 3 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "erdafitinib", indication_id: "uc", label: "FGFR3 urothelial cancer — 8 mg once daily", route: "PO", population: E3_ADULT, basis: "fixed", dose: { value: 8, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 9, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 4, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["May increase to 9 mg by phosphate criteria"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Balversa (erdafitinib) — FDA label (DailyMed)", E3_DM("2a8aa5c0-6c92-4566-8c45-e8f4d1fc20ee")], E3_BT],
  dose: { tagline: "FGFR inhibitor for FGFR3-altered urothelial cancer — watch phosphate and eyes.",
    adult: [{ ind: "FGFR3 urothelial cancer", text: "8 mg once daily (9 mg by phosphate criteria).", calc: ["uc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ERENUMAB (FDA AIMOVIG BLA761077) ---------- */
FDB_M("erenumab", {
  inn: "Erenumab", atc: "N02CD01", cls: "Anti-CGRP receptor monoclonal antibody",
  linked: [],
  forms: ["Auto-injector 70 mg/mL and 140 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks the CGRP receptor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No difference in mild or moderate renal impairment [FDA]."],
  ind: { adult: ["Preventive treatment of migraine in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Migraine prevention", "70 mg SC once monthly; some benefit from 140 mg monthly [FDA]."], ["Missed dose", "Give as soon as possible, then monthly from that date [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment (mild–moderate) [FDA].", hepatic: E3_NEP, pregnancy: E3_NEP, other: "Constipation with serious complications; hypertension [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["Serious hypersensitivity to erenumab or excipients (anaphylaxis, angioedema) [FDA]."],
  ae: { common: ["Injection-site reactions, constipation, muscle spasms [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe constipation [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; bowel habit [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC, calc: [],
  sources: [["FDA", "Aimovig (erenumab-aooe) — FDA label (DailyMed)", E3_DM("b998ed05-94b0-47fd-b28f-cddd1e128fd8")], E3_BT],
  dose: { tagline: "Monthly self-injected anti-CGRP receptor antibody for migraine prevention.",
    adult: [{ ind: "Migraine prevention", text: "70 mg SC monthly (some 140 mg)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ERGOCALCIFEROL (FDA capsules NDA003444) ---------- */
FDB_M("ergocalciferol", {
  inn: "Ergocalciferol (vitamin D2)", atc: "A11CC01", cls: "Vitamin D2",
  linked: [],
  forms: ["Capsules 1.25 mg (50,000 IU) [FDA].", "Bhutan: not on the NEML as ergocalciferol [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converted to 25-hydroxy and 1,25-dihydroxy vitamin D2; raises calcium and phosphate absorption [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Fat-soluble; stored — toxicity can be prolonged [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypoparathyroidism [FDA].", "Refractory (vitamin D-resistant) rickets [FDA].", "Familial hypophosphataemia [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Vitamin D-resistant rickets [FDA]."] },
  adult: [["Vitamin D-resistant rickets", "12,000–500,000 IU daily, individualised under close supervision [FDA]."], ["Hypoparathyroidism", "50,000–200,000 IU daily with calcium lactate 4 g six times a day [FDA]."], ["Warning", "The range between therapeutic and toxic doses is narrow [FDA]."]],
  paed: { tiers: ["Vitamin D-resistant rickets: individualised as adults (12,000–500,000 IU daily) [FDA]."], transition: "—", calcNote: "High-dose capsule — no calculator; nutritional vitamin D doses are different." },
  adj: { renal: E3_NEP, hepatic: E3_NEP, pregnancy: E3_NEP, other: "Check calcium and phosphate every 2 weeks or more often; bone X-rays monthly until stable [FDA]." },
  tox: { human: "Hypervitaminosis D: hypercalcaemia, weakness, nausea, polyuria, renal damage, metastatic calcification [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Stop vitamin D; low-calcium diet, fluids; corticosteroids or other hypercalcaemia treatment [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypercalcaemia [FDA].", "Malabsorption syndrome [FDA].", "Abnormal sensitivity to the toxic effects of vitamin D [FDA].", "Hypervitaminosis D [FDA]."],
  ae: { common: ["Generally related to hypercalcaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypercalcaemia and nephrocalcinosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum calcium and phosphorus every 2 weeks or more often; monthly bone X-rays until stable [FDA]."],
  local: E3_LOC, calc: [],
  sources: [["FDA", "Ergocalciferol capsules USP — FDA label (DailyMed)", E3_DM("4ae38744-020d-4c37-a6f1-88f55c2f1047")], E3_BT],
  dose: { tagline: "High-dose vitamin D2 for hypoparathyroidism and resistant rickets — narrow margin.",
    cautionTitle: "Narrow therapeutic range",
    caution: "THE RANGE BETWEEN THERAPEUTIC AND TOXIC DOSES IS NARROW. DOSAGE MUST BE INDIVIDUALIZED UNDER CLOSE MEDICAL SUPERVISION [FDA].",
    adult: [{ ind: "Hypoparathyroidism", text: "50,000–200,000 IU daily with calcium." }, { ind: "Resistant rickets", text: "12,000–500,000 IU daily (specialist)." }],
    child: [{ ind: "Resistant rickets", text: "Individualised (specialist)." }] }
});

/* ---------- ERIBULIN (FDA HALAVEN NDA201532) ---------- */
FDB_M("eribulin", {
  inn: "Eribulin", atc: "L01XX41", cls: "Microtubule dynamics inhibitor (halichondrin analogue)", risk: E3_ONC,
  linked: [],
  forms: ["Injection 1 mg/2 mL (0.5 mg/mL) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits microtubule growth, causing G2/M arrest [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Reduce in hepatic and moderate–severe renal impairment [FDA]."],
  ind: { adult: ["Metastatic breast cancer after at least two chemotherapy regimens [FDA].", "Unresectable or metastatic liposarcoma after an anthracycline [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Standard", "1.4 mg/m² IV over 2–5 minutes on days 1 and 8 of a 21-day cycle [FDA]."], ["Hepatic", "Child-Pugh A: 1.1 mg/m²; Child-Pugh B: 0.7 mg/m² [FDA]."], ["Renal", "CrCl 15–49: 1.1 mg/m² [FDA]."], ["Administration", "Do not mix with other drugs or give with dextrose solutions [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "CrCl 15–49: 1.1 mg/m² [FDA].", hepatic: "Child-Pugh A 1.1 mg/m²; B 0.7 mg/m² [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "QT prolongation — correct potassium and magnesium [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Neutropenia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Neutropenia, fatigue, alopecia, peripheral neuropathy, nausea, constipation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Peripheral neuropathy [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before each dose; neuropathy; ECG if risk factors [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "eribulin", indication_id: "std", label: "Breast cancer / liposarcoma — 1.4 mg/m² days 1 and 8", route: "IV", population: E3_ADULT, basis: "mg_per_m2", dose: { value: 1.4, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 0.5, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 15, crcl_max: 49.999, action: "reduce_dose", set_value: 1.1, note: "CrCl 15–49: 1.1 mg/m²" }], flags: ["Days 1 and 8 of a 21-day cycle", "Child-Pugh A: 1.1 mg/m²; B: 0.7 mg/m²"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Halaven (eribulin mesylate) — FDA label (DailyMed)", E3_DM("31ce4750-ded5-4a0b-95e9-f229fa6bc822")], E3_BT],
  dose: { tagline: "Microtubule inhibitor for late-line breast cancer and liposarcoma.",
    adult: [{ ind: "Breast cancer / liposarcoma", text: "1.4 mg/m² IV days 1 and 8 every 21 days (lower in liver or kidney impairment).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ERLOTINIB (FDA tablets ANDA209267) ---------- */
FDB_M("erlotinib", {
  inn: "Erlotinib", atc: "L01EB02", cls: "EGFR tyrosine kinase inhibitor", risk: E3_ONC,
  linked: [],
  forms: ["Tablets 25, 100, 150 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Reversibly inhibits EGFR tyrosine kinase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Food increases absorption — take on an empty stomach; smoking lowers levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Metastatic NSCLC with EGFR exon 19 deletion or exon 21 L858R mutation [FDA].", "Pancreatic cancer with gemcitabine [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["NSCLC (EGFR mutation)", "150 mg once daily on an empty stomach [FDA]."], ["Pancreatic cancer", "100 mg once daily on an empty stomach, with gemcitabine [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Not studied; monitor (renal failure reported with dehydration) [FDA].", hepatic: "Hepatotoxicity can occur — periodic liver tests [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid PPIs; separate H2 blockers; CYP3A4 interactions [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Rash, diarrhoea, anorexia, fatigue, dyspnoea, cough [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity and hepatorenal syndrome [FDA]", "GI perforation, bullous skin disorders, corneal perforation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Periodic liver tests; renal function and electrolytes if dehydrated [FDA]."],
  local: E3_LOC,
  calc: [
    { drug: "erlotinib", indication_id: "nsclc", label: "EGFR-mutant NSCLC — 150 mg once daily (empty stomach)", route: "PO", population: E3_ADULT, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Pancreatic cancer: 100 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Erlotinib tablets — FDA label (DailyMed)", E3_DM("a3b2d622-b4d5-4819-862b-f8fd3adcec6f")], E3_BT],
  dose: { tagline: "EGFR inhibitor for EGFR-mutant lung cancer — empty stomach.",
    adult: [{ ind: "EGFR-mutant NSCLC", text: "150 mg once daily.", calc: ["nsclc"] }, { ind: "Pancreatic cancer", text: "100 mg once daily with gemcitabine." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ERTAPENEM (FDA NDA021337) ---------- */
FDB_M("ertapenem", {
  inn: "Ertapenem", atc: "J01DH03", cls: "Carbapenem antibacterial",
  linked: [],
  forms: ["Powder for injection 1 g vial (IV or IM) [FDA].", "Bhutan: not on the NEML (meropenem is the NEML carbapenem) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits bacterial cell-wall synthesis by binding penicillin-binding proteins [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — 500 mg daily when CrCl 30 or less [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Complicated intra-abdominal, skin and soft-tissue (incl. diabetic foot without osteomyelitis), community-acquired pneumonia, complicated UTI, acute pelvic infections [FDA] [UNVERIFIED-KNOWLEDGE].", "Prophylaxis after elective colorectal surgery [FDA]."], paed: ["From 3 months (treatment) [FDA]."] },
  adult: [["Treatment (13 years and over)", "1 g once daily IV (over 30 min) or IM; IV up to 14 days, IM up to 7 days [FDA]."], ["Surgical prophylaxis (adults)", "1 g single dose IV 1 hour before colorectal surgery [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Severe renal impairment", "CrCl 30 or less and ESRD: 500 mg daily; if given within 6 h before haemodialysis, give 150 mg after dialysis [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Diluent", "No dextrose-containing diluents; do not co-infuse with other drugs [FDA]."]],
  paed: { tiers: ["3 months–12 years: 15 mg/kg twice daily, not over 1 g/day, IV or IM [FDA].", "13 years and over: 1 g once daily [FDA]."], transition: "13 years: adult dose.", calcNote: "1 g vial." },
  adj: { renal: "CrCl 30 or less: 500 mg daily (adults) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: E3_NEP, pregnancy: E3_NEP, other: "Lowers valproate levels — avoid together [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: "Supportive; haemodialysis removes it [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to any component or other carbapenems, or anaphylaxis to beta-lactams [FDA].", "IM: amide local anaesthetic (lidocaine) hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, nausea, headache, infusion-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Renal function; seizures in CNS disease [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "ertapenem", indication_id: "adult", label: "13 years and over — 1 g once daily", route: "IV/IM", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 1000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "vial", strength: 1000, unit: "mg/vial" }], rounding: "Whole vial", renal: [{ crcl_min: 0, crcl_max: 30, action: "reduce_dose", set_value: 500, note: "CrCl 30 or less: 500 mg daily" }], flags: ["IV over 30 minutes; no dextrose diluents"], sources: ["FDA"] },
    { drug: "ertapenem", indication_id: "child", label: "3 months–12 years — 15 mg/kg twice daily (max 1 g/day)", route: "IV/IM", population: { min_age_months: 3, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Per reconstitution", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ertapenem for injection — FDA label (DailyMed)", E3_DM("41304b1d-7db4-468a-ab1d-04e56fb50de4")], E3_BT],
  dose: { tagline: "Once-daily carbapenem (no Pseudomonas cover) — 500 mg if CrCl 30 or less.",
    adult: [{ ind: "Serious infections", text: "1 g once daily IV/IM (500 mg if CrCl 30 or less).", calc: ["adult"] }],
    child: [{ ind: "3 months–12 years", text: "15 mg/kg twice daily, max 1 g/day.", calc: ["child"] }] }
});

/* ---------- ERTUGLIFLOZIN (FDA STEGLATRO NDA209803) ---------- */
FDB_M("ertugliflozin", {
  inn: "Ertugliflozin", atc: "A10BK04", cls: "SGLT2 inhibitor",
  linked: [],
  forms: ["Tablets 5, 15 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits renal SGLT2, increasing urinary glucose excretion [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [E3_NEP],
  ind: { adult: ["Glycaemic control in adults with type 2 diabetes [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Type 2 diabetes", "5 mg once daily in the morning; may increase to 15 mg [FDA]."], ["Renal", "Not recommended if eGFR under 45 [FDA]."], ["Surgery", "Withhold at least 4 days before surgery or prolonged fasting [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "eGFR under 45: not recommended [FDA].", hepatic: E3_NEP, pregnancy: "Not recommended in 2nd and 3rd trimesters [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Correct volume depletion first; ketoacidosis risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["Hypersensitivity to ertugliflozin or excipients (angioedema) [FDA]."],
  ae: { common: ["Genital mycotic infections, UTIs, increased urination [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ketoacidosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Volume depletion, AKI [FDA] [UNVERIFIED-KNOWLEDGE]", "Lower-limb amputation, Fournier's gangrene [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Renal function and volume status [FDA]."],
  local: E3_LOC,
  calc: [
    { drug: "ertugliflozin", indication_id: "t2dm", label: "Type 2 diabetes — 5 mg once daily", route: "PO", population: E3_ADULT, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 15, max_daily: 15, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 44.999, action: "avoid", note: "eGFR under 45: not recommended [FDA]" }], flags: ["May increase to 15 mg", "Stop 4 days before surgery"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Steglatro (ertugliflozin) — FDA label (DailyMed)", E3_DM("e6f3e718-bb99-48f1-ab94-b9f0af05fed6")], E3_BT],
  dose: { tagline: "SGLT2 inhibitor for type 2 diabetes — not if eGFR under 45.",
    adult: [{ ind: "Type 2 diabetes", text: "5 mg once daily; up to 15 mg.", calc: ["t2dm"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ESCITALOPRAM (FDA tablets ANDA078777) ---------- */
FDB_M("escitalopram", {
  inn: "Escitalopram", atc: "N06AB10", cls: "Selective serotonin reuptake inhibitor (SSRI)",
  linked: [],
  forms: ["Tablets 5, 10, 20 mg; oral solution 5 mg/5 mL (other labels) [FDA].", "Bhutan: not on the NEML (fluoxetine and sertraline are NEML SSRIs) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "S-enantiomer of citalopram; inhibits serotonin reuptake [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Lower dose in elderly and hepatic impairment [FDA]."],
  ind: { adult: ["Major depressive disorder [FDA].", "Generalised anxiety disorder [FDA]."], paed: ["MDD from 12 years; GAD from 7 years (per label) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["MDD / GAD", "10 mg once daily (morning or evening); may increase to 20 mg after at least 1 week; no added benefit at 20 mg for MDD in trials [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Elderly, hepatic impairment", "10 mg once daily [FDA]."]],
  paed: { tiers: ["MDD 12–17 years: 10 mg once daily; maximum 20 mg [FDA]."], transition: "Adult dose.", calcNote: "10 mg tablets." },
  adj: { renal: "No adjustment for mild–moderate; caution in severe [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "10 mg once daily [FDA].", pregnancy: E3_NEP, other: "QT prolongation (dose-related, less than citalopram); serotonin syndrome; bleeding with NSAIDs/anticoagulants; hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Seizures, QT prolongation, serotonin syndrome in overdose [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Supportive; ECG monitoring [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs with escitalopram or within 14 days of stopping either; linezolid or IV methylene blue [FDA].", "Pimozide [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to escitalopram or citalopram [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, insomnia, ejaculation disorder, somnolence, sweating, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts in young people [FDA]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyponatraemia, bleeding, mania, angle-closure glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality early in treatment; sodium in elderly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "escitalopram", indication_id: "std", label: "MDD / GAD — 10 mg once daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 20, max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Maximum 20 mg/day", "Elderly or hepatic impairment: 10 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Escitalopram tablets — FDA label (DailyMed)", E3_DM("253e8d6c-0c6a-4fa4-83fc-5cfbf4b08c0a")], E3_BT],
  dose: { tagline: "Well-tolerated SSRI for depression and anxiety — 10 mg once daily.",
    boxedTitle: "Suicidal thoughts and behaviors", boxed: "Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors. Escitalopram tablets are not approved for use in pediatric patients less than 12 years of age [FDA].",
    adult: [{ ind: "Depression / anxiety", text: "10 mg once daily; maximum 20 mg.", calc: ["std"] }],
    child: [{ ind: "MDD 12–17 years", text: "10 mg once daily; maximum 20 mg.", calc: ["std"] }] }
});

/* ---------- ESKETAMINE (FDA SPRAVATO NDA211243) ---------- */
FDB_M("esketamine", {
  inn: "Esketamine", atc: "N06AX27", cls: "NMDA receptor antagonist (nasal antidepressant)",
  linked: [],
  forms: ["Nasal spray device 28 mg (two sprays) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Non-selective NMDA receptor antagonist; S-enantiomer of ketamine [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Longer exposure in moderate hepatic impairment; severe not studied [FDA]."],
  ind: { adult: ["Treatment-resistant depression (alone or with an oral antidepressant) [FDA].", "Depressive symptoms in MDD with acute suicidal ideation or behaviour (with an oral antidepressant) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["TRD induction (weeks 1–4)", "Twice weekly: day 1 56 mg, then 56 mg or 84 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["TRD maintenance", "Weeks 5–8: 56 or 84 mg once weekly; week 9 onward: every 2 weeks or weekly, least frequent that maintains response [FDA]."], ["MDD with suicidal ideation", "84 mg twice weekly for 4 weeks (may reduce to 56 mg); review at 4 weeks [FDA]."], ["Setting", "Self-administered under supervision in a certified setting; BP before and after; observe at least 2 hours [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed device doses." },
  adj: { renal: E3_NEP, hepatic: "Moderate: longer monitoring; severe: not studied [FDA].", pregnancy: "Not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Raises blood pressure; REMS programme; no driving until next day after sleep [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["Aneurysmal vascular disease (aorta, intracranial, peripheral) or arteriovenous malformation [FDA].", "History of intracerebral haemorrhage [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to esketamine, ketamine or excipients [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dissociation, dizziness, nausea, sedation, vertigo, hypoaesthesia, anxiety, raised BP [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Sedation, dissociation, respiratory depression [FDA]", "Abuse and misuse [FDA]", "Suicidal thoughts [FDA]", "Hypertensive crisis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["BP before and about 40 minutes after dosing; observe at least 2 hours; respiratory status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC, calc: [],
  sources: [["FDA", "Spravato (esketamine) nasal spray — FDA label (DailyMed)", E3_DM("d81a6a79-a74a-44b7-822c-0dfa3036eaed")], E3_BT],
  dose: { tagline: "Supervised nasal antidepressant for resistant depression — sedation and BP rise.",
    boxedTitle: "Sedation; dissociation; respiratory depression; abuse and misuse; and suicidal thoughts and behaviors", boxed: "Risk for sedation, dissociation, and respiratory depression after administration. Monitor patients for at least two hours after administration. Potential for abuse and misuse. Consider the risks and benefits of prescribing SPRAVATO prior to using in patients at higher risk of abuse. Monitor patients for signs and symptoms of abuse and misuse. SPRAVATO is only available through a restricted program called the SPRAVATO REMS. Increased risk of suicidal thoughts and behaviors in pediatric and young adult patients taking antidepressants. Closely monitor all antidepressant-treated patients for clinical worsening and emergence of suicidal thoughts and behaviors. SPRAVATO is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Treatment-resistant depression", text: "56–84 mg twice weekly × 4 weeks, then weekly, then every 1–2 weeks." }, { ind: "MDD with suicidal ideation", text: "84 mg twice weekly for 4 weeks." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ESLICARBAZEPINE (FDA APTIOM NDA022416) ---------- */
FDB_M("eslicarbazepine", {
  inn: "Eslicarbazepine", atc: "N03AF04", cls: "Antiseizure medicine (voltage-gated sodium-channel blocker)",
  linked: [],
  forms: ["Tablets 200, 400, 600, 800 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Pro-drug of eslicarbazepine; stabilises inactivated sodium channels [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — halve doses if CrCl under 50 [FDA]."],
  ind: { adult: ["Partial-onset seizures [FDA]."], paed: ["Partial-onset seizures from 4 years [FDA]."] },
  adult: [["Partial-onset seizures", "Start 400 mg once daily (800 mg in some); increase weekly by 400–600 mg to 800–1,600 mg once daily [FDA]."], ["Renal (CrCl under 50)", "Halve the starting, titration and maintenance doses [FDA]."]],
  paed: { tiers: ["4–17 years, once daily by weight (start = maximum weekly step; maintenance): 11–21 kg 200 mg (400–600 mg); 22–31 kg 300 mg (500–800 mg); 32–38 kg 300 mg (600–900 mg); over 38 kg 400 mg (800–1,200 mg) [FDA]."], transition: "Adult dose.", calcNote: "Weight bands." },
  adj: { renal: "CrCl under 50: reduce by 50% [FDA].", hepatic: "No adjustment in mild–moderate [FDA].", pregnancy: E3_NEP, other: "Do not use with oxcarbazepine; lowers hormonal contraceptive levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "CNS effects (dizziness, somnolence), hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Supportive; haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to eslicarbazepine acetate or oxcarbazepine [FDA]."],
  ae: { common: ["Dizziness, somnolence, nausea, headache, diplopia, vomiting, fatigue, ataxia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["SJS/TEN, DRESS [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Suicidal thoughts [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sodium; skin reactions; mood [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "eslicarbazepine", indication_id: "adult", label: "Partial seizures adult — start 400 mg once daily", route: "PO", population: E3_ADULT, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 1600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "reduce_dose", set_value: 200, note: "CrCl under 50: halve all doses (start 200 mg)" }], flags: ["Increase weekly to 800–1,600 mg once daily"], sources: ["FDA"] },
    { drug: "eslicarbazepine", indication_id: "child", label: "Partial seizures 4–17 years — start by weight", route: "PO", population: { min_age_months: 48, max_age_months: 216, min_weight_kg: 11, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 11, max_weight_kg: 22, text: "Start 200 mg once daily; maintenance 400–600 mg/day", daily: 200 }, { min_weight_kg: 22, max_weight_kg: 32, text: "Start 300 mg once daily; maintenance 500–800 mg/day", daily: 300 }, { min_weight_kg: 32, max_weight_kg: 38.0001, text: "Start 300 mg once daily; maintenance 600–900 mg/day", daily: 300 }, { min_weight_kg: 38.0001, max_weight_kg: null, text: "Start 400 mg once daily; maintenance 800–1,200 mg/day", daily: 400 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Tablets", renal: [], flags: ["Increase weekly by no more than the starting dose", "CrCl under 50: halve doses"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Aptiom (eslicarbazepine acetate) — FDA label (DailyMed)", E3_DM("3d0c9554-eaeb-4694-8089-00133fcadce3")], E3_BT],
  dose: { tagline: "Once-daily sodium-channel antiseizure drug — watch sodium; halve in renal impairment.",
    adult: [{ ind: "Partial-onset seizures", text: "400 mg once daily, to 800–1,600 mg.", calc: ["adult"] }],
    child: [{ ind: "Partial-onset seizures, 4 years+", text: "200–400 mg start by weight; maintenance up to 1,200 mg.", calc: ["child"] }] }
});

/* ---------- ESMOLOL (FDA BREVIBLOC NDA019386) ---------- */
FDB_M("esmolol", {
  inn: "Esmolol", atc: "C07AB09", cls: "Ultra-short-acting cardioselective beta-1 blocker (IV)", risk: "High-alert — IV adrenergic antagonists are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Injection 10 mg/mL (vials, premixed bags); 20 mg/mL double-strength bags [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Cardioselective beta-1 blockade; hydrolysed by red-cell esterases (half-life about 9 minutes) [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No hepatic or renal adjustment needed for short infusions [FDA]."],
  ind: { adult: ["SVT or non-compensatory sinus tachycardia (rate control) [FDA].", "Intra- and postoperative tachycardia and hypertension [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["SVT / gradual control", "Optional loading 500 mcg/kg over 1 minute, then 50 mcg/kg/min for 4 minutes; titrate (repeat loading and increase by 50 mcg/kg/min steps). Usual maintenance 50–200 mcg/kg/min [FDA]."], ["Intra-op immediate control", "1 mg/kg bolus over 30 seconds, then 150 mcg/kg/min if needed [FDA]."], ["Maximum", "Tachycardia: over 200 mcg/kg/min not recommended; hypertension may need 250–300 mcg/kg/min [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Bolus calculated; infusion in mcg/kg/min." },
  adj: { renal: "No adjustment for maintenance infusion; caution with the risk factor of renal impairment [FDA].", hepatic: "No special precautions (esterase metabolism) [FDA].", pregnancy: E3_NEP, other: "Avoid extravasation and concentrations over 10 mg/mL into small veins [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bradycardia, hypotension, heart block, bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Stop the infusion (effects resolve in minutes); atropine, glucagon, pressors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe sinus bradycardia [FDA].", "Sick sinus syndrome, heart block greater than first degree without pacemaker [FDA] [UNVERIFIED-KNOWLEDGE].", "Decompensated heart failure, cardiogenic shock [FDA] [UNVERIFIED-KNOWLEDGE].", "IV calcium-channel blockers within a few hours [FDA] [UNVERIFIED-KNOWLEDGE].", "Pulmonary hypertension [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hypotension, injection-site reactions, nausea, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Symptomatic hypotension, bradycardia, heart failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]", "Tissue necrosis on extravasation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Continuous heart rate and blood pressure [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "esmolol", indication_id: "load", label: "SVT / gradual control — loading 500 mcg/kg over 1 min", route: "IV", population: E3_ADULT, basis: "mg_per_kg", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["= 500 mcg/kg", "Then 50 mcg/kg/min; titrate 50–200 mcg/kg/min"], sources: ["FDA"] },
    { drug: "esmolol", indication_id: "periop", label: "Intra-op immediate control — 1 mg/kg over 30 s", route: "IV", population: E3_ADULT, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Then 150 mcg/kg/min if necessary"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Brevibloc (esmolol hydrochloride) — FDA label (DailyMed)", E3_DM("38a8b23a-fca8-45f4-a09a-9c8b21f522cd")], E3_BT],
  dose: { tagline: "Ultra-short IV beta-blocker for SVT and peri-operative tachycardia/hypertension.",
    adult: [{ ind: "SVT / sinus tachycardia", text: "500 mcg/kg over 1 min, then 50–200 mcg/kg/min.", calc: ["load"] }, { ind: "Peri-operative", text: "1 mg/kg over 30 s, then 150 mcg/kg/min.", calc: ["periop"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ESOMEPRAZOLE (FDA NEXIUM NDA022101) ---------- */
FDB_M("esomeprazole", {
  inn: "Esomeprazole", atc: "A02BC05", cls: "Proton pump inhibitor",
  linked: [],
  forms: ["Delayed-release capsules 20, 40 mg; delayed-release oral suspension sachets [FDA].", "Bhutan: not on the NEML (omeprazole is the NEML PPI) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "S-isomer of omeprazole; irreversibly inhibits H+/K+-ATPase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Severe hepatic impairment: exposure markedly increased [FDA].", "Less than 1% excreted unchanged in urine — no renal adjustment [FDA]."],
  ind: { adult: ["Healing and maintenance of erosive oesophagitis; symptomatic GERD [FDA].", "H. pylori eradication (with amoxicillin and clarithromycin) [FDA] [UNVERIFIED-KNOWLEDGE].", "Reduce NSAID gastric ulcer risk; Zollinger-Ellison [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["From 1 month (weight-based) [FDA]."] },
  adult: [["Erosive oesophagitis healing", "20 or 40 mg once daily for 4–8 weeks (some need another 4–8 weeks) [FDA]."], ["Maintenance of healed EE", "20 mg once daily [FDA]."], ["Symptomatic GERD", "20 mg once daily for 4 weeks [FDA]."], ["Severe hepatic impairment", "Maximum 20 mg once daily [FDA]."]],
  paed: { tiers: ["12–17 years: EE 20 or 40 mg once daily for 4–8 weeks [FDA].", "1 month–11 years: weight-based per label [FDA]."], transition: "Adult dose.", calcNote: "Capsules; suspension for younger children." },
  adj: { renal: "No adjustment [FDA].", hepatic: "Child-Pugh C: maximum 20 mg/day [FDA].", pregnancy: E3_NEP, other: "Reduces clopidogrel activation; long-term PPI risks [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to substituted benzimidazoles or any component (anaphylaxis, angioedema, bronchospasm, interstitial nephritis, urticaria) [FDA].", "Rilpivirine-containing products [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, diarrhoea, nausea, flatulence, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute interstitial nephritis [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Fractures, hypomagnesaemia, B12 deficiency with long use [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Magnesium with long use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "esomeprazole", indication_id: "ee", label: "Erosive oesophagitis — 20–40 mg once daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose", value_max: 40 }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 20, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["4–8 weeks", "Severe hepatic impairment: maximum 20 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nexium (esomeprazole magnesium) — FDA label (DailyMed)", E3_DM("f4853677-1622-4037-688b-fdf533a11d96")], E3_BT],
  dose: { tagline: "PPI for reflux oesophagitis — 20 mg maximum in severe liver disease.",
    adult: [{ ind: "Erosive oesophagitis", text: "20–40 mg once daily for 4–8 weeks, then 20 mg.", calc: ["ee"] }, { ind: "Symptomatic GERD", text: "20 mg once daily for 4 weeks." }],
    child: [{ ind: "12–17 years", text: "20–40 mg once daily.", calc: ["ee"] }] }
});

/* ---------- ESTAZOLAM (FDA tablets ANDA074818) ---------- */
FDB_M("estazolam", {
  inn: "Estazolam", atc: "N05CD04", cls: "Benzodiazepine hypnotic",
  linked: [],
  forms: ["Tablets 1, 2 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Enhances GABA-A receptor activity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A metabolism — ketoconazole and itraconazole contraindicated [FDA]."],
  ind: { adult: ["Short-term management of insomnia [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Insomnia", "1 mg at bedtime; some need 2 mg [FDA]."], ["Elderly", "Healthy elderly 1 mg (increase with care); small or debilitated 0.5 mg [FDA]."], ["Stopping", "Taper gradually to avoid withdrawal [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Not studied [FDA].", hepatic: "Not studied [FDA].", pregnancy: "Not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Opioids together: profound sedation, respiratory depression and death [FDA]." },
  tox: { human: "Somnolence, confusion, impaired coordination, coma; respiratory depression with other depressants [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Supportive; flumazenil with caution (seizure risk) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Ketoconazole and itraconazole [FDA].", "Pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Somnolence, hypokinesia, dizziness, abnormal coordination, hangover [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression with opioids [FDA]", "Dependence, withdrawal, abuse [FDA]", "Complex sleep behaviours [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Daytime sedation; misuse; duration of use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "estazolam", indication_id: "ins", label: "Insomnia — 1 mg at bedtime", route: "PO", population: E3_ADULT, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }], rounding: "Whole or half tablets", renal: [], flags: ["Some need 2 mg", "Small/debilitated elderly: 0.5 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Estazolam tablets USP — FDA label (DailyMed)", E3_DM("a1e3b4bf-22e9-430a-a768-4d86ae886c9e")], E3_BT],
  dose: { tagline: "Benzodiazepine hypnotic for short-term insomnia — never with opioids casually.",
    boxedTitle: "Risks from concomitant use with opioids; abuse, misuse, and addiction; and dependence and withdrawal reactions", boxed: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of these drugs in patients for whom alternative treatment options are inadequate. Limit dosages and durations to the minimum required. Follow patients for signs and symptoms of respiratory depression and sedation. The use of benzodiazepines, including estazolam, exposes users to risks of abuse, misuse, and addiction, which can lead to overdose or death. Abuse and misuse of benzodiazepines commonly involve concomitant use of other medications, alcohol, and/or illicit substances, which is associated with an increased frequency of serious adverse outcomes. Before prescribing estazolam and throughout treatment, assess each patient's risk for abuse, misuse, and addiction. The continued use of benzodiazepines, including estazolam, may lead to clinically significant physical dependence. The risks of dependence and withdrawal increase with longer treatment duration and higher daily dose. Abrupt discontinuation or rapid dosage reduction of estazolam after continued use may precipitate acute withdrawal reactions, which can be life-threatening. To reduce the risk of withdrawal reactions, use a gradual taper to discontinue estazolam or reduce the dosage [FDA].",
    adult: [{ ind: "Insomnia", text: "1 mg at bedtime (some 2 mg; frail elderly 0.5 mg).", calc: ["ins"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ESTRADIOL (FDA oral tablets ANDA040275) ---------- */
FDB_M("estradiol", {
  inn: "Estradiol", atc: "G03CA03", cls: "Oestrogen",
  linked: [],
  forms: ["Tablets 0.5, 1, 2 mg; also patches, gels, vaginal cream, tablets and rings in other labels [FDA].", "Bhutan: not on the NEML as estradiol [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Natural oestrogen acting on oestrogen receptors [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Moderate to severe menopausal vasomotor symptoms; vulvar and vaginal atrophy [FDA].", "Female hypoestrogenism (hypogonadism, castration, primary ovarian failure) [FDA].", "Palliation of metastatic breast cancer (selected women and men) and androgen-dependent prostate cancer [FDA].", "Prevention of postmenopausal osteoporosis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Menopausal symptoms", "Usual start 1–2 mg daily, cyclic (e.g. 3 weeks on, 1 week off), lowest effective dose; review every 3–6 months [FDA]."], ["Hypoestrogenism", "1–2 mg daily, titrated [FDA]."], ["Breast cancer palliation", "10 mg three times daily for at least 3 months [FDA]."], ["Prostate cancer palliation", "1–2 mg three times daily [FDA]."], ["Uterus present", "Add a progestin to reduce endometrial cancer risk [FDA]."]],
  paed: { tiers: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: E3_NEP, hepatic: "Contraindicated in liver dysfunction or disease [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Not for use in pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Lowest dose for the shortest time [FDA]." },
  tox: { human: "Nausea, vomiting, withdrawal bleeding [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Undiagnosed abnormal genital bleeding [FDA].", "Known, suspected or history of breast cancer (except selected palliative use) [FDA].", "Oestrogen-dependent neoplasia [FDA] [UNVERIFIED-KNOWLEDGE].", "Active or past DVT, PE, stroke or MI [FDA] [UNVERIFIED-KNOWLEDGE].", "Liver dysfunction; known pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Breast tenderness, headache, nausea, bloating, breakthrough bleeding [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Endometrial cancer (unopposed) [FDA]", "Stroke, DVT, PE, MI [FDA]", "Breast cancer, dementia (with progestin, older women) [FDA]"] },
  monitor: ["Review need every 3–6 months; endometrial sampling for abnormal bleeding; breast examination, BP [FDA]."],
  local: E3_LOC,
  calc: [
    { drug: "estradiol", indication_id: "vms", label: "Menopausal symptoms — 1–2 mg daily (cyclic)", route: "PO", population: E3_ADULT, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose", value_max: 2 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["e.g. 3 weeks on, 1 week off", "Add progestin if uterus present"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Estradiol tablets USP — FDA label (DailyMed)", E3_DM("01789bad-4be4-ae22-e063-6294a90af392")], E3_BT],
  dose: { tagline: "Oral oestrogen for menopausal symptoms — add progestin if the uterus is present.",
    boxedTitle: "Estrogens increase the risk of endometrial cancer; cardiovascular disorders, breast cancer and probable dementia", boxed: "Close clinical surveillance of all women taking estrogens is important. Adequate diagnostic measures, including endometrial sampling when indicated, should be undertaken to rule out malignancy in all cases of undiagnosed persistent or recurring abnormal vaginal bleeding. There is no evidence that the use of “natural” estrogens results in a different endometrial risk profile than “synthetic” estrogens at equivalent estrogen doses. CARDIOVASCULAR AND OTHER RISKS Estrogens with or without progestins should not be used for the prevention of cardiovascular disease. The Women's Health Initiative (WHI) study reported increased risks of myocardial infarction, stroke, invasive breast cancer, pulmonary emboli, and deep vein thrombosis in postmenopausal women (50 to 79 years of age) during 5 years of treatment with oral conjugated estrogens (CE 0.625 mg) combined with medroxyprogesterone acetate (MPA 2.5 mg) relative to placebo. The Women's Health Initiative Memory Study (WHIMS), a substudy of WHI, reported increased risk of developing probable dementia in postmenopausal women 65 years of age or older during 4 years of treatment with oral conjugated estrogens plus medroxyprogesterone acetate relative to placebo. It is unknown whether this finding applies to younger postmenopausal women or to women taking estrogen alone therapy [FDA].",
    adult: [{ ind: "Menopausal symptoms", text: "1–2 mg daily, cyclic; lowest effective dose.", calc: ["vms"] }, { ind: "Breast / prostate cancer palliation", text: "10 mg three times daily / 1–2 mg three times daily." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- ESZOPICLONE (FDA LUNESTA NDA021476) ---------- */
FDB_M("eszopiclone", {
  inn: "Eszopiclone", atc: "N05CF04", cls: "Non-benzodiazepine hypnotic (cyclopyrrolone)",
  linked: [],
  forms: ["Tablets 1, 2, 3 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Positive modulator of GABA-A receptors [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["High-fat meal slows absorption [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Insomnia [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Insomnia", "Start 1 mg immediately before bed with at least 7–8 hours before waking; may increase to a maximum of 3 mg [FDA]."], ["Elderly, debilitated, severe hepatic impairment, potent CYP3A4 inhibitors", "Not over 2 mg [FDA]."], ["Food", "Not with or immediately after a meal [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: E3_NEP, hepatic: "Severe: maximum 2 mg [FDA].", pregnancy: E3_NEP, other: "Next-day impairment — no driving if less than a full night's sleep [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Excessive sedation to coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Supportive; flumazenil may help [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Previous complex sleep behaviours after eszopiclone [FDA].", "Known hypersensitivity to eszopiclone [FDA]."],
  ae: { common: ["Unpleasant taste, headache, somnolence, dizziness, dry mouth [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Complex sleep behaviours [FDA]", "CNS depression, next-day impairment [FDA] [UNVERIFIED-KNOWLEDGE]", "Anaphylaxis, angioedema [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sleep behaviours, daytime alertness [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "eszopiclone", indication_id: "ins", label: "Insomnia — start 1 mg at bedtime", route: "PO", population: E3_ADULT, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 3, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Maximum 3 mg", "Elderly, severe hepatic impairment, CYP3A4 inhibitors: maximum 2 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Lunesta (eszopiclone) — FDA label (DailyMed)", E3_DM("3821f4b7-a3c8-4920-ba80-18aa96532c09")], E3_BT],
  dose: { tagline: "Bedtime hypnotic — stop if any sleep-walking or sleep-driving.",
    boxedTitle: "Complex sleep behaviors", boxed: "Complex sleep behaviors including sleep-walking, sleep-driving, and engaging in other activities while not fully awake may occur following use of LUNESTA. Some of these events may result in serious injuries, including death. Discontinue LUNESTA immediately if a patient experiences a complex sleep behavior [FDA].",
    adult: [{ ind: "Insomnia", text: "1 mg at bedtime; maximum 3 mg (2 mg elderly).", calc: ["ins"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ETACRYNIC ACID (US: ethacrynic acid; FDA NDA016092) ---------- */
FDB_M("etacrynic-acid", {
  inn: "Etacrynic acid (ethacrynic acid)", atc: "C03CC01", cls: "Loop diuretic (non-sulfonamide)",
  linked: [],
  forms: ["Tablets 25 mg; ethacrynate sodium for injection 50 mg (other labels) [FDA].", "Bhutan: not on the NEML (furosemide is the NEML loop diuretic) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits Na-K-2Cl transport in the thick ascending limb [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Useful in sulfonamide allergy (no sulfonamide group) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Oedema needing a more potent diuretic: heart failure, cirrhosis, renal disease including nephrotic syndrome; ascites; lymphoedema [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Children (not infants) with nephrotic syndrome or congenital heart disease [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start (oral)", "Day 1: 50 mg once after a meal; day 2: 50 mg twice daily if needed; day 3: 100 mg morning and 50–100 mg later, by response [FDA]."], ["Maintenance", "Usually 50–200 mg daily, continuous or intermittent; adjust in 25–50 mg steps; a few need up to 200 mg twice daily [FDA]."]],
  paed: { tiers: ["Children (not infants): start 25 mg; increase cautiously in 25 mg steps [FDA].", "Infants: contraindicated [FDA]."], transition: "Adult dose.", calcNote: "25 mg tablets." },
  adj: { renal: "Contraindicated in anuria; stop if azotaemia or oliguria worsens [FDA].", hepatic: "Hepatic coma risk from electrolyte shifts [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: E3_NEP, other: "Ototoxicity, especially with aminoglycosides or high IV doses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Dehydration, hypovolaemia, hypokalaemia, hypochloraemic alkalosis [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Replace fluid and electrolytes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Anuria [FDA].", "Infants [FDA].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE].", "Severe watery diarrhoea from the drug [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Anorexia, GI upset, diarrhoea, electrolyte loss [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ototoxicity and deafness [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe dehydration, electrolyte depletion [FDA] [UNVERIFIED-KNOWLEDGE]", "GI bleeding [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Daily weight, electrolytes, renal function, hearing [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "etacrynic-acid", indication_id: "adult", label: "Oedema adult — start 50 mg once daily after a meal", route: "PO", population: E3_ADULT, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Step up over 3 days by response; maintenance usually 50–200 mg/day", "Contraindicated in anuria"], sources: ["FDA"] },
    { drug: "etacrynic-acid", indication_id: "child", label: "Oedema child (not infants) — start 25 mg", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Increase in 25 mg steps", "Not in infants"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ethacrynic acid tablets — FDA label (DailyMed)", E3_DM("f127598f-e6b3-4c35-800f-76e4217595ae")], E3_BT],
  dose: { tagline: "Potent loop diuretic without a sulfonamide group — ototoxic.",
    adult: [{ ind: "Oedema", text: "50 mg once daily, stepping up to 50–200 mg/day by response.", calc: ["adult"] }],
    child: [{ ind: "Oedema (not infants)", text: "25 mg, then 25 mg steps.", calc: ["child"] }] }
});

/* ---------- ETANERCEPT (FDA ENBREL BLA103795) ---------- */
FDB_M("etanercept", {
  inn: "Etanercept", atc: "L04AB01", cls: "TNF blocker (fusion protein)",
  linked: [],
  forms: ["Pre-filled syringes and auto-injectors 25 mg, 50 mg; multidose vial 25 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Soluble TNF receptor that binds TNF-α and -β [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No studies in renal or hepatic impairment [FDA]."],
  ind: { adult: ["Rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, plaque psoriasis [FDA]."], paed: ["Polyarticular JIA, paediatric plaque psoriasis, juvenile psoriatic arthritis [FDA]."] },
  adult: [["RA, PsA", "50 mg SC once weekly, with or without methotrexate [FDA]."], ["AS", "50 mg once weekly [FDA]."], ["Plaque psoriasis", "50 mg twice weekly for 3 months, then 50 mg once weekly [FDA]."], ["Before starting", "Test for TB (and treat latent TB); check hepatitis B [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["pJIA, paediatric psoriasis, JPsA: 0.8 mg/kg once weekly, maximum 50 mg per week [FDA]."], transition: "63 kg and over: 50 mg weekly.", calcNote: "Weekly dose." },
  adj: { renal: E3_NEP, hepatic: E3_NEP, pregnancy: E3_NEP, other: "No live vaccines; caution in heart failure, demyelinating disease, hepatitis B carriers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["Sepsis [FDA]."],
  ae: { common: ["Injection-site reactions, infections, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections including TB and invasive fungal infections [FDA]", "Lymphoma and other malignancies [FDA]", "Demyelination, heart failure, pancytopenia, lupus-like syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["TB testing; signs of infection; blood counts if symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "etanercept", indication_id: "paed", label: "pJIA / paediatric psoriasis — 0.8 mg/kg once weekly (max 50 mg)", route: "SC", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.8, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 50, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Multidose vial for small doses", renal: [], flags: ["Once weekly", "Maximum 50 mg per week"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Enbrel (etanercept) — FDA label (DailyMed)", E3_DM("a002b40c-097d-47a5-957f-7a7b1807af7f")], E3_BT],
  dose: { tagline: "Weekly TNF blocker for inflammatory arthritis and psoriasis — screen for TB.",
    boxedTitle: "Serious infections and malignancies", boxed: "SERIOUS INFECTIONS: Increased risk of serious infections leading to hospitalization or death, including tuberculosis (TB), bacterial sepsis, invasive fungal infections (such as histoplasmosis), and infections due to other opportunistic pathogens. Enbrel should be discontinued if a patient develops a serious infection or sepsis during treatment. Perform test for latent TB; if positive, start treatment for TB prior to starting Enbrel. Monitor all patients for active TB during treatment, even if initial latent TB test is negative. MALIGNANCIES: Lymphoma and other malignancies, some fatal, have been reported in children and adolescent patients treated with TNF-blockers, including Enbrel [FDA].",
    adult: [{ ind: "RA, PsA, AS", text: "50 mg SC once weekly." }, { ind: "Plaque psoriasis", text: "50 mg twice weekly × 3 months, then weekly." }],
    child: [{ ind: "pJIA, psoriasis, JPsA", text: "0.8 mg/kg weekly; maximum 50 mg.", calc: ["paed"] }] }
});

/* ---------- ETELCALCETIDE (FDA PARSABIV NDA208325) ---------- */
FDB_M("etelcalcetide", {
  inn: "Etelcalcetide", atc: "H05BX04", cls: "Calcimimetic (IV)",
  linked: [],
  forms: ["Injection 2.5 mg/0.5 mL, 5 mg/mL, 10 mg/2 mL vials [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Activates the calcium-sensing receptor on parathyroid cells, lowering PTH [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Cleared by dialysis [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Secondary hyperparathyroidism in adults with CKD on haemodialysis [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "5 mg IV bolus three times weekly at the end of haemodialysis, only if corrected calcium is at or above the lower limit of normal [FDA]."], ["Titration", "2.5–15 mg three times weekly; increase by 2.5 or 5 mg no more often than every 4 weeks, by PTH and calcium [FDA]."], ["Calcium", "Measure within 1 week after starting or changing dose [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "For haemodialysis patients [FDA].", hepatic: E3_NEP, pregnancy: E3_NEP, other: "Do not use with cinacalcet; stop cinacalcet at least 7 days before [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypocalcaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Calcium replacement [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to etelcalcetide or excipients [FDA]."],
  ae: { common: ["Decreased calcium, muscle spasms, diarrhoea, nausea, vomiting, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypocalcaemia, QT prolongation, seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Worsening heart failure, GI bleeding [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Corrected calcium within 1 week of start or change; PTH after 4 weeks [FDA]."],
  local: E3_LOC,
  calc: [
    { drug: "etelcalcetide", indication_id: "shpt", label: "Dialysis SHPT — 5 mg IV three times weekly", route: "IV", population: E3_ADULT, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 15, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["At the end of each haemodialysis", "Range 2.5–15 mg; change no more often than every 4 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Parsabiv (etelcalcetide) — FDA label (DailyMed)", E3_DM("cd270093-c6a8-4596-a4ab-e6aa0a2c8a0c")], E3_BT],
  dose: { tagline: "IV calcimimetic after dialysis for secondary hyperparathyroidism — watch calcium.",
    adult: [{ ind: "Secondary hyperparathyroidism (haemodialysis)", text: "5 mg IV three times weekly; range 2.5–15 mg.", calc: ["shpt"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ETEPLIRSEN (FDA EXONDYS 51 NDA206488) ---------- */
FDB_M("eteplirsen", {
  inn: "Eteplirsen", atc: "M09AX06", cls: "Antisense oligonucleotide (exon 51 skipping)",
  linked: [],
  forms: ["Injection 100 mg/2 mL and 500 mg/10 mL (50 mg/mL) vials [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Causes skipping of DMD exon 51, producing a shortened functional dystrophin [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal clearance lower in renal impairment; no specific adjustment recommended [FDA]."],
  ind: { adult: ["Duchenne muscular dystrophy with a mutation amenable to exon 51 skipping (accelerated approval) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["DMD (exon 51)", "30 mg/kg IV once weekly over 35–60 minutes through a 0.2 micron in-line filter; dilute before use [FDA]."]],
  paed: { tiers: ["Same mg/kg as adults [FDA]."], transition: "—", calcNote: "50 mg/mL vials." },
  adj: { renal: "No specific adjustment recommended; monitor [FDA].", hepatic: E3_NEP, pregnancy: E3_NEP, other: E3_NEP },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Balance disorder, vomiting, contact dermatitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including bronchospasm and hypotension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "eteplirsen", indication_id: "dmd", label: "DMD exon 51 — 30 mg/kg IV once weekly", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Dilute in 0.9% sodium chloride; 0.2 micron filter", "Once weekly"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Exondys 51 (eteplirsen) — FDA label (DailyMed)", E3_DM("33bff678-7829-479e-9110-b8e33a0bc0aa")], E3_BT],
  dose: { tagline: "Weekly exon-51-skipping infusion for Duchenne muscular dystrophy.",
    adult: [{ ind: "DMD (exon 51)", text: "30 mg/kg IV weekly.", calc: ["dmd"] }],
    child: [{ ind: "DMD (exon 51)", text: "30 mg/kg IV weekly.", calc: ["dmd"] }] }
});

/* ---------- ETHANOL — DEHYDRATED ALCOHOL INJECTION (FDA ANDA219569) ---------- */
FDB_M("ethanol", {
  inn: "Ethanol (dehydrated alcohol)", atc: "V03AZ01 D08AX08", cls: "Sclerosing / ablative agent (dehydrated alcohol injection)",
  linked: [],
  forms: ["Dehydrated alcohol injection (at least 98% ethanol), single-dose ampoules [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML as an injection [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Causes coagulation necrosis of tissue it is injected into [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [E3_NEP],
  ind: { adult: ["To induce controlled septal infarction in adults with symptomatic hypertrophic obstructive cardiomyopathy (alcohol septal ablation) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [NEP]."] },
  adult: [["Alcohol septal ablation", "Inject small volumes over 1–2 minutes into septal arterial branches, guided by the outflow gradient; usually 1–2 mL; maximum 5 mL per procedure [FDA]."]],
  paed: { tiers: ["Not established [NEP]."], transition: "—", calcNote: "Procedure — no calculator." },
  adj: { renal: E3_NEP, hepatic: E3_NEP, pregnancy: E3_NEP, other: "Not for methanol/ethylene glycol antidote use under this label [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E3_NEP, animal: E3_LD, manage: E3_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Conduction block (right bundle branch block, complete heart block needing pacemaker) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Complete heart block, ventricular arrhythmia, remote infarction from alcohol leak [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG and rhythm monitoring; temporary pacing available [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC, calc: [],
  sources: [["FDA", "Dehydrated alcohol injection — FDA label (DailyMed)", E3_DM("1d5ec6f9-d58f-4651-a4a1-93fec13fd438")], E3_BT],
  dose: { tagline: "Dehydrated alcohol for septal ablation in HOCM — 1–2 mL, maximum 5 mL.",
    adult: [{ ind: "Alcohol septal ablation", text: "1–2 mL into septal branches; maximum 5 mL." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ETHOSUXIMIDE (FDA ZARONTIN NDA012380) ---------- */
FDB_M("ethosuximide", {
  inn: "Ethosuximide", atc: "N03AD01", cls: "Succinimide antiseizure medicine",
  linked: [],
  forms: ["Capsules 250 mg; oral solution 250 mg/5 mL (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML 2025 [BT-NEML]."],
  moa: "Reduces T-type calcium currents in thalamic neurons [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 30 h children, 60 h adults) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Absence (petit mal) epilepsy [FDA]."], paed: ["Absence epilepsy from 3 years [FDA]."] },
  adult: [["Absence epilepsy (6 years and over, adults)", "Start 500 mg/day (2 capsules); increase by 250 mg/day every 4–7 days to control; doses over 1.5 g/day in divided doses only under strict supervision [FDA]."]],
  paed: { tiers: ["3–6 years: start 250 mg/day [FDA].", "6 years and over: start 500 mg/day [FDA].", "Optimal for most children: 20 mg/kg/day [FDA]."], transition: "Adult dose from 6 years.", calcNote: "250 mg capsules." },
  adj: { renal: "Use with extreme caution in known renal disease [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Use with extreme caution in known liver disease [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: E3_NEP, other: "May increase generalised tonic-clonic seizures in mixed epilepsy [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, CNS depression, coma with respiratory depression [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E3_LD, manage: "Supportive; haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of hypersensitivity to succinimides [FDA]."],
  ae: { common: ["Nausea, vomiting, abdominal pain, anorexia, drowsiness, headache, hiccups [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Blood dyscrasias (fatal reported) [FDA] [UNVERIFIED-KNOWLEDGE]", "SLE, SJS, DRESS [FDA] [UNVERIFIED-KNOWLEDGE]", "Suicidal thoughts [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Periodic blood counts, liver tests and urinalysis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E3_LOC,
  calc: [
    { drug: "ethosuximide", indication_id: "c3", label: "Absence epilepsy 3–6 years — start 250 mg/day", route: "PO", population: { min_age_months: 36, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "NEP", formulations: [{ form: "cap", strength: 250, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Increase by 250 mg/day every 4–7 days", "Optimal for most children about 20 mg/kg/day"], sources: ["FDA"] },
    { drug: "ethosuximide", indication_id: "c6", label: "Absence epilepsy 6 years and over — start 500 mg/day", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "NEP", formulations: [{ form: "cap", strength: 250, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Increase by 250 mg/day every 4–7 days", "Over 1.5 g/day only under strict supervision"], sources: ["FDA"] },
    { drug: "ethosuximide", indication_id: "opt", label: "Children — optimal 20 mg/kg/day", route: "PO", population: { min_age_months: 36, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 1500, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 250 mg capsule or solution", renal: [], flags: ["Above 1.5 g/day only under strict supervision"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Zarontin (ethosuximide) capsules — FDA label (DailyMed)", E3_DM("0e008f33-70a1-4bc6-b3a0-d45214418ab6")], E3_BT],
  dose: { tagline: "First choice for childhood absence seizures — check blood counts.",
    adult: [{ ind: "Absence epilepsy", text: "500 mg/day, increasing by 250 mg every 4–7 days.", calc: ["c6"] }],
    child: [{ ind: "Absence epilepsy", text: "3–6 years 250 mg/day; 6+ 500 mg/day; optimum about 20 mg/kg/day.", calc: ["c3", "c6", "opt"] }] }
});

/* Brand names — BATCH E3 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"eptifibatide":{"IN":[["Eptide","Ranbaxy Laboratories (sun Pharma)","Eptide 75Mg Injection 100Ml"]],"BD":[["Integril","Incepta Pharmaceuticals Ltd","0.75 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/eptide-75mg-inj-100ml-67653","https://medex.com.bd/brands/16480/integril-075-mg-injection"]},"erdafitinib":{"IN":[],"BD":[["Erdafixen","Everest Pharmaceuticals Ltd","4 mg"]],"src":["https://medex.com.bd/brands/38126/erdafixen-4-mg-tablet"]},"eribulin":{"IN":[["Embremma","Emcure Pharmaceuticals Ltd","Embremma 1Mg Vial Of 2Ml Solution For Injection"],["Mitobulin","Cipla Limited","Mitobulin Vial Of 1 Solution For Injection"],["Evaira","Cadila Healthcare Limited","Evaira Vial Of 2Ml Solution For Injection"]],"BD":[["Halaven","Radiant Pharmaceuticals Ltd","0.44 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/embremma-injection-2-ml-4115808","https://pharmeasy.in/online-medicine-order/mitobulin-vial-of-1-solution-for-injection-4375519","https://pharmeasy.in/online-medicine-order/evaira-vial-of-2ml-solution-for-injection-3885298","https://medex.com.bd/brands/38768/halaven-044-mg-iv-infusion"]},"erlotinib":{"IN":[["Erlonat","Natco Pharma Ltd","Erlonat 100Mg Bottle Of 30 Tablets"],["Zyceva","Zydus Lifesciences Limited","Zyceva 150Mg Bottle Of 30 Tablets"],["Erlot","Aureate Healthcare Pvt Ltd","Erlot 150 Mg Tab 30S"]],"BD":[["Erloren","Renata PLC","100 mg"],["Synteva","Synovia Pharma PLC","150 mg"],["Kaneva","Beximco Pharmaceuticals PLC","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/erlonat-100mg-tablet-25696","https://pharmeasy.in/online-medicine-order/zyceva-150mg-bottle-of-30-tablets-205899","https://pharmeasy.in/online-medicine-order/erlot-150-mg-tab-30s-4133850","https://medex.com.bd/brands/20029/erloren-100-mg-tablet","https://medex.com.bd/brands/36864/synteva-150-mg-tablet","https://medex.com.bd/brands/31440/kaneva-150-mg-tablet"]},"ertapenem":{"IN":[["Invanz","Msd Pharmaceuticals Indian Private Ltd","Invanz 1Gm Dry Vial Of 1 Powder For Injection"]],"BD":[["Erpen","Renata PLC","1 gm/vial"],["Wandara","Incepta Pharmaceuticals Ltd","1 gm/vial"],["Ertapen","Aristopharma Ltd","1 gm/vial"]],"src":["https://pharmeasy.in/online-medicine-order/invanz-1gm-inj-1-s-20328","https://medex.com.bd/brands/29298/erpen-1-gm-imiv-injection","https://medex.com.bd/brands/30495/wandara-1-gm-imiv-injection","https://medex.com.bd/brands/30496/ertapen-1-gm-imiv-injection"]},"ertugliflozin":{"IN":[],"BD":[["Ertoxa","Ziska Pharmaceuticals Ltd","5 mg"],["Ertu","Synovia Pharma PLC","5 mg"],["Ertuglif","Navana Pharmaceuticals Ltd","15 mg"]],"src":["https://medex.com.bd/brands/32867/ertoxa-5-mg-tablet","https://medex.com.bd/brands/33635/ertu-5-mg-tablet","https://medex.com.bd/brands/33727/ertuglif-15-mg-tablet"]},"escitalopram":{"IN":[["Newcita","Alkem Laboratories Ltd","Newcita 20Mg Strip Of 15 Tablets"],["Nexito","Sun Pharma","Nexito 10Mg Strip Of 20 Tablets"],["Essita","Solvate Laboratories Pvt Ltd","Essita 10Mg Strip Of 10 Tablets"]],"BD":[["Recita","Goodman Pharmaceuticals Ltd","5 mg"],["Escilex","Renata PLC","5 mg/5 ml"],["Desital","DBL Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/newcita-20mg-strip-of-15-tablets-4597500","https://pharmeasy.in/online-medicine-order/nexito-10-mg-tablet-20-3109978","https://pharmeasy.in/online-medicine-order/essita-10-mg-tablet-10-3110065","https://medex.com.bd/brands/30913/recita-5-mg-tablet","https://medex.com.bd/brands/37033/escilex-5-mg-oral-solution","https://medex.com.bd/brands/38509/desital-10-mg-tablet"]},"eslicarbazepine":{"IN":[["Eslizen","Intas Pharmaceuticals Ltd","Eslizen 400Mg Strip Of 10 Tablets"],["Zefretol","Sun Pharma","Zefretol 400Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/eslizen-400mg-tablet-14106","https://pharmeasy.in/online-medicine-order/zefretol-400mg-tablet-25593"]},"esomeprazole":{"IN":[["Esmetru","Avighna Medicare Pvt Ltd","Esmetru 40Mg Strip Of 10 Tablets"],["Esomefol","Leeford Healthcare Ltd","Esomefol 40Mg Strip Of 10 Tablets"],["Nexpro","Torrent Pharmaceuticals Ltd","Nexpro 20Mg Strip Of 15 Tablets"]],"BD":[["Prazia","Amico Laboratories Ltd","40 mg"],["Esover","Veritas Pharmaceuticals Ltd","40 mg"],["Esoz","Astra Biopharmaceuticals Ltd","20 mg"]],"src":["https://pharmeasy.in/online-medicine-order/esmetru-40mg-strip-of-10-tablets-3553716","https://pharmeasy.in/online-medicine-order/esomefol-40mg-strip-of-10-tablets-118652","https://pharmeasy.in/online-medicine-order/nexpro-20mg-tablet-26790","https://medex.com.bd/brands/29764/prazia-40-mg-ec-capsule","https://medex.com.bd/brands/29577/esover-40-mg-ec-capsule","https://medex.com.bd/brands/29470/esoz-20-mg-ec-capsule"]},"estradiol":{"IN":[["Emiphil","Leeford Healthcare Ltd","Emiphil 2Mg Strip Of 28 Tablets"],["Emgra","Emcure Pharmaceuticals Ltd","Emgra 2Mg Strip Of 28 Tablets"],["Estrabet","Abbott India Ltd","Estrabet Tube Of 80Gm Gel"]],"BD":[["Valestra","Nuvista Pharma PLC","1 mg"],["Evadol","Renata PLC","2 mg"]],"src":["https://pharmeasy.in/online-medicine-order/emiphil-2-4140795","https://pharmeasy.in/online-medicine-order/emgra-2mg-tablet-9407","https://pharmeasy.in/online-medicine-order/estrabet-gel-80gm-217780","https://medex.com.bd/brands/30310/valestra-1-mg-tablet","https://medex.com.bd/brands/35338/evadol-2-mg-tablet"]},"eszopiclone":{"IN":[["Zopilone","Incepta Pharmaceuticals Limited","Zopilone 1Mg Strip Of 10 Tablets"]],"BD":[["Sono","ACME Laboratories Ltd","1 mg"],["Sleepon","Silva Pharmaceuticals Ltd","1 mg"],["Zopilone","Incepta Pharmaceuticals Ltd","2 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zopilone-1mg-tab-186211","https://medex.com.bd/brands/4204/sono-1-mg-tablet","https://medex.com.bd/brands/4208/sleepon-1-mg-tablet","https://medex.com.bd/brands/4217/zopilone-2-mg-tablet"]},"etanercept":{"IN":[["Intacept","Intas Pharmaceuticals Ltd","Intacept 50Mg Pre Filled Syringe Of 1Ml Solution For Injection"]],"BD":[["Etacept","Healthcare Pharmaceuticals Ltd","25 mg/0.5 ml"],["Shieldex","Incepta Pharmaceuticals Ltd","50 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/intacept-50mg-injection-1ml-201296","https://medex.com.bd/brands/29200/etacept-25-mg-sc-injection","https://medex.com.bd/brands/39648/shieldex-50-mg-sc-injection"]},"ethosuximide":{"IN":[["Absenz","Sun Pharma","Absenz 250Mg Bottle Of 100Ml Solution"]],"BD":[["Serontin","Advanced Chemical Industries PLC","250 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/absenz-250mg-solution-100ml-217405","https://medex.com.bd/brands/4889/serontin-250-mg-syrup"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
