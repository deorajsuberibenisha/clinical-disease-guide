/* Clinical Disease Guide — Drug monograph database, block C, batch 1 (24 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it). */

/* ================= Batch C-1 (fdb-c1.js) ================= */

/* ---------- CABAZITAXEL (FDA JEVTANA, Sanofi, NDA201023, eff. 2025-10-07) ---------- */
FDB_M("cabazitaxel", {
  inn: "Cabazitaxel", atc: "L01CD04", cls: "Taxane (microtubule inhibitor)",
  linked: [["Metastatic castration-resistant prostate cancer after docetaxel", "With prednisone [FDA]", ""]],
  forms: ["Injection kit 60 mg/1.5 mL with diluent; two dilutions needed [FDA]."],
  moa: "Binds tubulin, stabilising microtubules and blocking cell division [FDA].",
  pk: ["CYP3A substrate — avoid strong inhibitors (or reduce dose 25%) [FDA]."],
  ind: { adult: ["mCRPC previously treated with docetaxel, with prednisone [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["mCRPC", "20 mg/m² IV over 1 h every 3 weeks with prednisone 10 mg daily; 25 mg/m² in selected patients [FDA]."], ["Premedication (30 min before each dose)", "Antihistamine (e.g. diphenhydramine 25 mg), corticosteroid (dexamethasone 8 mg) and an H2 antagonist IV; antiemetic as needed [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/m² (needs height)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Mild: 20 mg/m². Moderate (bilirubin >1.5–3 × ULN): 15 mg/m². Severe (>3 × ULN): contraindicated [FDA].", preg: "Not indicated in females [FDA].", other: "Age 65+: more fatal outcomes and neutropenia — monitor closely [FDA]." },
  tox: { human: "Overdose (including from preparation errors) worsens marrow suppression and GI toxicity; fatal outcomes reported [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote; specialised unit, G-CSF, supportive care [FDA]." },
  contra: ["Neutrophils ≤1,500/mm³ [FDA].", "Severe hypersensitivity to cabazitaxel or polysorbate 80 drugs [FDA].", "Severe liver impairment (bilirubin >3 × ULN) [FDA]."],
  ae: { common: ["Neutropenia, anaemia, diarrhoea, fatigue, nausea, vomiting, constipation, asthenia [NEP]."], serious: ["Neutropenic deaths (boxed) [FDA]", "Severe hypersensitivity (boxed) [FDA]", "GI toxicity; renal failure; cystitis; interstitial lung disease [FDA]"] },
  monitor: ["Blood counts frequently [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cabazitaxel", indication_id: "std", label: "mCRPC — 20 mg/m² IV every 3 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [], infusion: { duration_h: 1 }, rounding: "To 0.1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "JEVTANA (cabazitaxel) injection — Sanofi, label effective 2025-10-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=de3d9c26-572b-4ea4-9b2d-dd58a2b3e8fa"]],
  dose: { tagline: "Second-line taxane infusion for castration-resistant prostate cancer.",
    boxedTitle: "Neutropenia and hypersensitivity",
    boxed: "Neutropenic deaths have been reported. Obtain frequent blood counts to monitor for neutropenia. JEVTANA is contraindicated in patients with neutrophil counts of ≤1,500 cells/mm3. Primary prophylaxis with G-CSF is recommended in patients with high-risk clinical features. Consider primary prophylaxis with G-CSF in all patients receiving a dose of 25 mg/m2. Severe hypersensitivity can occur and may include generalized rash/erythema, hypotension and bronchospasm. Discontinue JEVTANA immediately if severe reactions occur and administer appropriate therapy. Contraindicated if history of severe hypersensitivity reactions to cabazitaxel or to drugs formulated with polysorbate 80.",
    adult: [
      { ind: "mCRPC after docetaxel", text: "20 mg/m² IV over 1 hour every 3 weeks with prednisone 10 mg daily (25 mg/m² in selected patients). Premedicate every dose.", calc: ["std"] },
      { ind: "Liver impairment", text: "Mild: 20 mg/m². Moderate: 15 mg/m². Severe: contraindicated." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CABERGOLINE (FDA tablets, Mylan, NDA020664 = DOSTINEX, eff. 2026-06-30) ---------- */
FDB_M("cabergoline", {
  inn: "Cabergoline", atc: "G02CB03", cls: "Ergot-derived dopamine D2 agonist",
  linked: [["Hyperprolactinaemia (idiopathic or pituitary adenoma)", "First-line dopamine agonist [FDA]", ""]],
  forms: ["Tablets 0.5 mg (scored) [FDA]."],
  moa: "Long-acting D2 agonist that directly inhibits prolactin secretion [FDA].",
  pk: ["Half-life 63–69 h — twice-weekly dosing [FDA].", "Not with D2 antagonists (phenothiazines, butyrophenones, metoclopramide) [FDA]."],
  ind: { adult: ["Hyperprolactinaemic disorders, idiopathic or due to pituitary adenoma [FDA].", "Not for suppressing postpartum lactation [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Hyperprolactinaemia", "Start 0.25 mg twice weekly; increase by 0.25 mg twice weekly no more often than every 4 weeks; maximum 1 mg twice weekly [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Twice-weekly dosing." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "If conception occurs, stop if risks outweigh benefit [FDA].", other: "Echocardiogram before starting and every 6–12 months; do not use with valvular disease [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Support blood pressure [FDA]." },
  contra: ["Uncontrolled hypertension [FDA].", "Hypersensitivity to ergot derivatives [FDA].", "Cardiac valvulopathy or pericardial fibrosis (history) [FDA].", "Pulmonary, pericardial or retroperitoneal fibrosis (history) [FDA]."],
  ae: { common: ["Nausea, headache, dizziness, constipation, fatigue [NEP]."], serious: ["Cardiac valvulopathy, pericardial fibrosis [FDA]", "Pleural/pulmonary/retroperitoneal fibrosis [FDA]", "Orthostatic hypotension [FDA]", "Impulse-control disorders [FDA]"] },
  monitor: ["Prolactin monthly while titrating [NEP].", "Echocardiogram every 6–12 months [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cabergoline", indication_id: "prl", label: "Hyperprolactinaemia — 0.25 mg twice weekly (max 1 mg twice weekly)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.25, unit: "mg", per: "dose", value_max: 1 }, interval_h: 84, divided_doses: 1, caps: { max_single: 1, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.5, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Cabergoline tablets (NDA020664, DOSTINEX) — Mylan, label effective 2026-06-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e497366b-a124-4d7f-bd45-a883c392d4bb"]],
  dose: { tagline: "Twice-weekly dopamine agonist for high prolactin.",
    cautionTitle: "Not for stopping breast milk after delivery",
    caution: "Avoid use of CABERGOLINE for the inhibition or suppression of postpartum physiologic lactation because of the risk of serious adverse reactions. (FDA label, 1)",
    adult: [{ ind: "Hyperprolactinaemia", text: "0.25 mg twice weekly; increase by 0.25 mg twice weekly every 4 weeks or more. Maximum 1 mg twice weekly.", calc: ["prl"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CABOTEGRAVIR (FDA APRETUDE PrEP, ViiV, NDA215499, eff. 2025-04-11) ---------- */
FDB_M("cabotegravir", {
  inn: "Cabotegravir", atc: "J05AJ04", cls: "HIV integrase strand-transfer inhibitor (long-acting injectable)",
  linked: [["HIV-1 pre-exposure prophylaxis (PrEP)", "Long-acting injection [FDA]", ""], ["HIV-1 treatment", "With rilpivirine (CABENUVA, separate product) [NEP]", ""]],
  forms: ["Extended-release injectable suspension 600 mg/3 mL (200 mg/mL), gluteal IM [FDA].", "Tablets 30 mg (oral lead-in) [FDA]."],
  moa: "Blocks HIV integrase strand transfer [NEP].",
  pk: ["Levels may persist 12 months or longer after the last injection [FDA].", "UGT1A1 inducers (e.g. rifampicin, rifapentine, carbamazepine, phenytoin) — contraindicated [FDA]."],
  ind: { adult: ["PrEP to reduce sexually acquired HIV-1 in people at risk, weighing at least 35 kg, HIV-negative [FDA]."], paed: ["Adolescents weighing at least 35 kg [FDA]."] },
  adult: [["PrEP", "600 mg (3 mL) gluteal IM, two injections 1 month apart, then every 2 months. Optional oral lead-in 30 mg daily for about 1 month [FDA]."], ["Before every injection", "Test for HIV-1 (including acute infection) [FDA]."]],
  paed: { tiers: ["35 kg and over: as adults [FDA].", "Under 35 kg: not recommended [FDA]."], transition: "Weight-based (35 kg) [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Pregnancy registry; long tail of exposure [FDA].", other: "Injections may be given up to 7 days before or after the scheduled date [FDA]." },
  tox: { human: "No specific treatment [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; dialysis unlikely to help; consider prolonged exposure [FDA]." },
  contra: ["Unknown or positive HIV-1 status [FDA].", "Previous hypersensitivity to cabotegravir [FDA].", "With strong UGT1A1 inducers (rifampicin, rifapentine, carbamazepine, oxcarbazepine, phenytoin, phenobarbital) [FDA]."],
  ae: { common: ["Injection-site reactions, diarrhoea, headache, fever, fatigue, sleep disorders, nausea, dizziness [FDA]."], serious: ["HIV resistance if infection is missed (boxed) [FDA]", "Hypersensitivity incl. SJS [FDA]", "Hepatotoxicity; depressive disorders [FDA]"] },
  monitor: ["HIV test before each injection [FDA].", "STI screening and risk reduction [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "APRETUDE (cabotegravir extended-release injectable suspension) — ViiV, label effective 2025-04-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4338428e-43d4-4e02-ac9d-bd98e738a7da"]],
  dose: { tagline: "Two-monthly injection for HIV pre-exposure prophylaxis.",
    boxedTitle: "Risk of drug resistance if HIV infection is undiagnosed",
    boxed: "Individuals must be tested for HIV-1 infection prior to initiating APRETUDE or oral cabotegravir, and with each subsequent injection of APRETUDE, using a test approved or cleared by the FDA for the diagnosis of acute or primary HIV-1 infection. Drug-resistant HIV-1 variants have been identified with use of APRETUDE by individuals with undiagnosed HIV-1 infection. Do not initiate APRETUDE for HIV-1 PrEP unless negative infection status is confirmed. Individuals who acquire HIV-1 while receiving APRETUDE for PrEP must transition to a complete HIV-1 treatment regimen.",
    adult: [{ ind: "HIV PrEP (35 kg and over)", text: "600 mg IM (gluteal) at month 1 and month 2, then every 2 months. HIV test before each injection." }],
    child: [{ ind: "Adolescents under 35 kg", text: "Not recommended." }] }
});

/* ---------- CABOZANTINIB (FDA CABOMETYX tablets, Exelixis, NDA208692, eff. 2025-10-19) ---------- */
FDB_M("cabozantinib", {
  inn: "Cabozantinib", atc: "L01EX07", cls: "Multi-kinase inhibitor (MET, VEGFR, AXL, RET)",
  linked: [["Advanced renal cell carcinoma", "Alone or with nivolumab [FDA]", ""], ["Hepatocellular carcinoma after sorafenib", "TKI [FDA]", ""], ["Differentiated thyroid cancer; neuroendocrine tumours", "TKI [FDA]", ""]],
  forms: ["CABOMETYX tablets 20, 40, 60 mg [FDA].", "Other cabozantinib products (COMETRIQ capsules, OMCAZIO capsules) are NOT interchangeable mg-for-mg [FDA]."],
  moa: "Inhibits MET, VEGFR-1/2/3, AXL, RET, ROS1 and other tyrosine kinases [FDA].",
  pk: ["Take on an empty stomach (1 h before or 2 h after food) [FDA].", "Strong CYP3A inhibitors: reduce dose; strong inducers: increase dose [FDA]."],
  ind: { adult: ["Advanced RCC (alone or first-line with nivolumab); HCC after sorafenib; DTC after VEGFR therapy; pancreatic and extra-pancreatic NETs [FDA]."], paed: ["DTC and NETs, 12 years and over [FDA]."] },
  adult: [["RCC alone, HCC, DTC, NETs", "60 mg once daily [FDA]."], ["RCC with nivolumab", "40 mg once daily [FDA]."], ["Surgery", "Stop at least 3 weeks before (including dental) [FDA]."]],
  paed: { tiers: ["12 years and over: 40 kg+ 60 mg once daily; under 40 kg 40 mg once daily [FDA]."], transition: "Adult dose from 40 kg [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Moderate (Child-Pugh B): 60 → 40 mg (40 → 20 mg in children under 40 kg) [FDA].", preg: "Can cause fetal harm [FDA].", other: "Adolescents: monitor open growth plates [FDA]." },
  tox: { human: "Twice the intended dose for 9 days: memory impairment, mental status changes [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor; supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, fatigue, hand–foot syndrome, decreased appetite, hypertension, nausea, vomiting, weight loss [NEP]."], serious: ["Haemorrhage; perforations and fistulas [FDA]", "Thromboembolism; hypertensive crisis; cardiac failure [FDA]", "Osteonecrosis of the jaw; wound complications; proteinuria; RPLS [FDA]"] },
  monitor: ["Blood pressure, urine protein, liver tests, thyroid function [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cabozantinib", indication_id: "std", label: "CABOMETYX — 60 mg once daily (40 mg with nivolumab)", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: 40, max_weight_kg: null }, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, max_daily: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 60, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "CABOMETYX (cabozantinib) tablets — Exelixis, label effective 2025-10-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3850cce2-6137-42e5-a792-d318c4a4b3b5"], ["FDA", "OMCAZIO (cabozantinib) capsules — Handa, label effective 2026-11-11 (not interchangeable)", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0a58965-24c8-4f4e-ac71-9b36226c7b18"]],
  dose: { tagline: "Multi-kinase inhibitor tablet for kidney, liver, thyroid and neuroendocrine cancers.",
    cautionTitle: "Cabozantinib products are not interchangeable",
    caution: "Do NOT substitute CABOMETYX tablets with cabozantinib capsules. (FDA CABOMETYX label, 2.1) OMCAZIO is not substitutable on a mg-to-mg basis with other cabozantinib products. (FDA OMCAZIO label, boxed warning)",
    adult: [
      { ind: "RCC (alone), HCC, DTC, NETs — CABOMETYX", text: "60 mg once daily on an empty stomach.", calc: ["std"] },
      { ind: "RCC with nivolumab", text: "40 mg once daily." },
      { ind: "Moderate liver impairment", text: "60 → 40 mg once daily." }
    ],
    child: [{ ind: "DTC or NETs, 12 years and over", text: "40 kg and over: 60 mg once daily. Under 40 kg: 40 mg once daily.", calc: ["std"] }] }
});

/* ---------- CAFFEINE CITRATE (FDA caffeine citrate injection, Hikma, NDA020793 = CAFCIT, eff. 2024-04-08) ---------- */
FDB_M("caffeine", {
  inn: "Caffeine", atc: "N06BC01", cls: "Methylxanthine respiratory stimulant",
  linked: [["Apnoea of prematurity", "First-line treatment [FDA][BT-NEML]", ""]],
  forms: ["Caffeine citrate injection and oral solution 20 mg/mL (= 10 mg/mL caffeine base) [FDA][BT-NEML]."],
  moa: "Adenosine-receptor antagonist; stimulates the respiratory centre and diaphragm [NEP].",
  pk: ["Neonatal half-life 3–4 days (adult-like by about 9 months: 5 h); ~86% excreted unchanged in neonates [FDA].", "Measure baseline levels if previously on theophylline or if mother took caffeine [FDA]."],
  ind: { adult: ["Not applicable (neonatal indication) [FDA]."], paed: ["Apnoea of prematurity [FDA]."] },
  adult: [["Adults", "Not indicated (neonatal product) [FDA]."]],
  paed: { tiers: ["Loading: 20 mg/kg caffeine citrate (1 mL/kg) IV over 30 min, once [FDA].", "Maintenance: 5 mg/kg caffeine citrate (0.25 mL/kg) IV over 10 min or orally every 24 h, starting 24 h after the load [FDA].", "Doses are of caffeine CITRATE — caffeine base is half [FDA]."], transition: "Neonates/infants only [FDA].", calcNote: "Caffeine citrate mg/kg; 20 mg/mL solution. Calculator limited to infants under 6 months [NEP]." },
  adj: { renal: "Use with caution; monitor levels and adjust [FDA].", hepatic: "Use with caution; monitor levels and adjust [FDA].", preg: "Not applicable. [NEP]", other: "Serious toxicity above 50 mg/L serum caffeine [FDA]." },
  tox: { human: "Levels 24–350 mg/L reported: fever, tachypnoea, jitteriness, tremor, hypertonia, seizures, vomiting, hyperglycaemia, tachycardia, heart failure [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop caffeine; supportive care; treat seizures [NEP]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Feeding intolerance, irritability, tachycardia [NEP]."], serious: ["Necrotising enterocolitis — monitor (causality not established) [FDA]", "Seizures, toxicity at high levels [FDA]"] },
  monitor: ["Heart rate, feeding tolerance, signs of NEC [FDA].", "Serum caffeine levels periodically [FDA]."],
  local: { neml: "Caffeine citrate 20 mg/mL oral solution and injection are on the Bhutan NEML 2025 [BT-NEML].", strengths: "20 mg/mL oral and injection.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "caffeine", indication_id: "load", label: "Loading — caffeine citrate 20 mg/kg IV over 30 min, once", route: "IV", population: { min_age_months: null, max_age_months: 6, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], infusion: { duration_h: 0.5 }, rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "caffeine", indication_id: "maint", label: "Maintenance — caffeine citrate 5 mg/kg every 24 h (from 24 h after load)", route: "IV/PO", population: { min_age_months: null, max_age_months: 6, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "soln", strength: 20, unit: "mg/mL" }], rounding: "To 0.05 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Caffeine citrate injection USP 20 mg/mL — Hikma (NDA020793), label effective 2024-04-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=21489401-f2a7-47d3-897a-4b7efa04dd7a"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Caffeine citrate for apnoea of prematurity — loading then daily maintenance.",
    cautionTitle: "Citrate vs base",
    caution: "NOTE THAT THE DOSE OF CAFFEINE BASE IS ONE-HALF THE DOSE WHEN EXPRESSED AS CAFFEINE CITRATE (e.g., 20 mg of caffeine citrate is equivalent to 10 mg of caffeine base). (FDA label, Dosage and Administration)",
    adult: [{ ind: "Adults", text: "Not indicated." }],
    child: [
      { ind: "Apnoea of prematurity — loading", text: "Caffeine citrate 20 mg/kg (1 mL/kg) IV over 30 minutes, once.", calc: ["load"] },
      { ind: "Maintenance", text: "Caffeine citrate 5 mg/kg (0.25 mL/kg) IV over 10 minutes or orally every 24 hours, starting 24 hours after the load.", calc: ["maint"] }
    ] }
});

/* ---------- CALASPARGASE PEGOL (FDA ASPARLAS, Servier, BLA761102, eff. 2024-10-08) ---------- */
FDB_M("calaspargase-pegol", {
  inn: "Calaspargase pegol", atc: "L01XX86", cls: "Pegylated E. coli L-asparaginase (long-acting)",
  linked: [["Acute lymphoblastic leukaemia (age 1 month–21 years)", "Part of multi-agent chemotherapy [FDA]", ""]],
  forms: ["Injection 3,750 units/5 mL (750 units/mL) vial [FDA]."],
  moa: "Depletes plasma asparagine; leukaemic cells cannot make their own and die [NEP].",
  pk: ["Long-acting — no more often than every 21 days [FDA]."],
  ind: { adult: ["ALL in young adults up to 21 years [FDA]."], paed: ["ALL, 1 month to 21 years, in multi-agent regimens [FDA]."] },
  adult: [["ALL (up to 21 years)", "2,500 units/m² IV no more often than every 21 days [FDA]."], ["Premedication", "Paracetamol, an H1 blocker (e.g. diphenhydramine) and an H2 blocker (e.g. famotidine) 30–60 min before [FDA]."]],
  paed: { tiers: ["1 month and over: 2,500 units/m² IV no more often than every 21 days [FDA]."], transition: "Same dose to age 21 [FDA].", calcNote: "units/m² (needs height)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Monitor for hepatotoxicity, including VOD [FDA].", preg: "Not established in primary source. [NEP]", other: "Observe for 1 hour after each dose [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Serious hypersensitivity to pegylated asparaginase [FDA].", "Serious pancreatitis, thrombosis or haemorrhage with previous asparaginase [FDA].", "Severe hepatic impairment [NEP]."],
  ae: { common: ["Raised transaminases and bilirubin, pancreatitis, abnormal clotting tests [FDA]."], serious: ["Hypersensitivity/anaphylaxis [FDA]", "Pancreatitis; hyperglycaemia [FDA]", "Thrombosis; haemorrhage [FDA]", "Hepatotoxicity incl. VOD [FDA]"] },
  monitor: ["Glucose, liver tests, coagulation [FDA].", "Observe 1 h after infusion [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "calaspargase-pegol", indication_id: "all", label: "ALL — 2,500 units/m² IV every 21 days or longer", route: "IV", population: { min_age_months: 1, max_age_months: 264, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 2500, unit: "units", per: "dose" }, interval_h: 504, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 750, unit: "units/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "ASPARLAS (calaspargase pegol-mknl) injection — Servier, label effective 2024-10-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6585bd0d-bd78-4341-9e87-0f7664821f05"]],
  dose: { tagline: "Long-acting asparaginase for childhood and young-adult ALL.",
    adult: [{ ind: "ALL (to age 21)", text: "2,500 units/m² IV, no more often than every 21 days. Premedicate.", calc: ["all"] }],
    child: [{ ind: "ALL, 1 month and over", text: "2,500 units/m² IV, no more often than every 21 days. Premedicate; observe 1 hour.", calc: ["all"] }] }
});

/* ---------- CALCIFEDIOL (FDA RAYALDEE ER capsules, OPKO, NDA208010, eff. 2024-01-19) ---------- */
FDB_M("calcifediol", {
  inn: "Calcifediol", atc: "H05BX05", cls: "Vitamin D3 analogue (25-hydroxyvitamin D3)",
  linked: [["Secondary hyperparathyroidism in CKD stage 3–4 with low vitamin D", "Extended-release calcifediol [FDA]", ""]],
  forms: ["Extended-release capsules 30 mcg [FDA]."],
  moa: "Prohormone of calcitriol; raises 25-hydroxyvitamin D and suppresses PTH [NEP].",
  pk: ["Phenobarbital and other enzyme-inducing anticonvulsants shorten its half-life [FDA]."],
  ind: { adult: ["Secondary hyperparathyroidism in adults with CKD stage 3–4 and 25-OH vitamin D under 30 ng/mL [FDA].", "Not for stage 5 or dialysis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Secondary hyperparathyroidism (CKD 3–4)", "30 mcg once daily at bedtime (calcium must be below 9.8 mg/dL). After 3 months, may increase to 60 mcg if PTH above goal and calcium <9.8, phosphorus <5.5 and 25-OH D <100 ng/mL [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "For CKD 3–4 only [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Monitor more closely with digoxin (hypercalcaemia worsens digitalis toxicity) [FDA]." },
  tox: { human: "Hypercalcaemia, hypercalciuria, hyperphosphataemia, PTH oversuppression; constipation, poor appetite, dehydration, fatigue, weakness, vomiting [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; emesis/lavage if early; serial calcium measurements [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Anaemia, nasopharyngitis, raised creatinine, dyspnoea, cough, heart failure, constipation [FDA]."], serious: ["Hypercalcaemia [FDA]", "Adynamic bone disease [FDA]"] },
  monitor: ["Calcium, phosphorus, 25-OH vitamin D and intact PTH 3 months after starting or changing dose [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "calcifediol", indication_id: "shpt", label: "CKD 3–4 SHPT — 30 mcg at bedtime (max 60 mcg)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mcg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, max_daily: 60, unit: "mcg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 30, unit: "mcg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "RAYALDEE (calcifediol) extended-release capsules — OPKO, label effective 2024-01-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a95effd-32a5-46b6-a30e-7f4f9bf8cc77"]],
  dose: { tagline: "Extended-release vitamin D prohormone for secondary hyperparathyroidism in CKD 3–4.",
    adult: [{ ind: "Secondary hyperparathyroidism, CKD 3–4", text: "30 mcg at bedtime; after 3 months may raise to 60 mcg if PTH still high and calcium, phosphate and vitamin D allow.", calc: ["shpt"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CALCIPOTRIOL (FDA calcipotriene 0.005% cream, NDA020554, eff. 2026-08-06) ---------- */
FDB_M("calcipotriol", {
  inn: "Calcipotriol", atc: "D05AX02", cls: "Topical vitamin D analogue",
  linked: [["Plaque psoriasis", "Topical [FDA]", ""]],
  forms: ["Cream, ointment, scalp solution, foam 0.005% [NEP]; combinations with betamethasone dipropionate [NEP]."],
  moa: "Vitamin D receptor agonist — slows keratinocyte proliferation and promotes differentiation [NEP].",
  pk: ["Can be absorbed enough to raise serum calcium with excessive use [FDA]."],
  ind: { adult: ["Plaque psoriasis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Plaque psoriasis", "Thin layer twice daily, rubbed in gently; studied for 8 weeks [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Topical — no weight calculation." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Not on the face [FDA]." },
  tox: { human: "Raised serum calcium with excessive use [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop until calcium is normal [FDA]." },
  contra: ["Hypersensitivity [FDA].", "Hypercalcaemia or vitamin D toxicity [FDA].", "Use on the face [FDA]."],
  ae: { common: ["Skin irritation, burning, itching [NEP]."], serious: ["Contact dermatitis [FDA]", "Hypercalcaemia [FDA]"] },
  monitor: ["Calcium if large areas treated [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Calcipotriene cream 0.005% (NDA020554) — Prasco, label effective 2026-08-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=377eafda-737c-4ba2-9ec5-61209b8814ed"]],
  dose: { tagline: "Vitamin D cream for plaque psoriasis; keep off the face.",
    adult: [{ ind: "Plaque psoriasis", text: "Thin layer twice daily, rubbed in; not on the face." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CALCITRIOL (FDA oral solution ANDA209798 (ROCALTROL-type); VECTICAL ointment NDA022087) ---------- */
FDB_M("calcitriol", {
  inn: "Calcitriol", atc: "A11CC04", cls: "Active vitamin D (1,25-dihydroxycholecalciferol)",
  linked: [["Hypocalcaemia and bone disease on chronic dialysis", "Active vitamin D [FDA]", ""], ["Secondary hyperparathyroidism, pre-dialysis CKD", "Active vitamin D [FDA]", ""], ["Hypoparathyroidism / pseudohypoparathyroidism", "Active vitamin D [FDA]", ""], ["Plaque psoriasis", "Topical ointment [FDA]", ""]],
  forms: ["Oral solution 1 mcg/mL [FDA]; capsules 0.25 and 0.5 mcg [NEP]; Bhutan: 0.25 mcg tablet [BT-NEML].", "Ointment 3 mcg/g (VECTICAL) [FDA]."],
  moa: "The most potent form of vitamin D — increases intestinal calcium absorption and acts on bone and parathyroid [FDA].",
  pk: ["Short-acting; hypercalcaemia resolves within 2–7 days of stopping [FDA].", "Withhold other pharmacological vitamin D doses [FDA].", "Caution with digoxin (hypercalcaemia → arrhythmias) [FDA]."],
  ind: { adult: ["Hypocalcaemia on chronic dialysis; secondary hyperparathyroidism with CrCl 15–55 not on dialysis; hypoparathyroidism [FDA].", "Topical: mild–moderate plaque psoriasis [FDA]."], paed: ["Pre-dialysis CKD and hypoparathyroidism (doses below); psoriasis ointment from 2 years [FDA]."] },
  adult: [["Dialysis", "Start 0.25 mcg daily; increase by 0.25 mcg/day every 4–8 weeks; most need 0.5–1 mcg/day [FDA]."], ["Hypoparathyroidism", "Start 0.25 mcg each morning; increase every 2–4 weeks; most adults 0.5–2 mcg daily [FDA]."], ["Pre-dialysis CKD", "0.25 mcg/day, up to 0.5 mcg/day if needed [FDA]."], ["Psoriasis ointment", "Twice daily; maximum 200 g per week; not on eyes, lips or face [FDA]."]],
  paed: { tiers: ["Pre-dialysis CKD: 3 years+ 0.25 mcg/day (up to 0.5); under 3 years 10–15 ng/kg/day [FDA].", "Hypoparathyroidism: 1–5 years usually 0.25–0.75 mcg daily; 6 years+ 0.5–2 mcg daily [FDA].", "Psoriasis ointment: 2–6 years maximum 100 g/week; 7+ years 200 g/week [FDA]."], transition: "Adult doses [FDA].", calcNote: "mcg doses; ng/kg/day under 3 years." },
  adj: { renal: "Indicated in CKD; check calcium at least twice weekly while titrating [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Keep calcium × phosphate product under 70 mg²/dL² [FDA]. Ensure calcium intake of at least 600 mg/day [FDA]." },
  tox: { human: "Hypercalcaemia, hypercalciuria, hyperphosphataemia; vascular and soft-tissue calcification with chronic excess [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; low-calcium diet; daily calcium until normal (2–7 days); restart at 0.25 mcg/day less [FDA]." },
  contra: ["Hypercalcaemia or vitamin D toxicity [FDA].", "Hypersensitivity to calcitriol or class [FDA]."],
  ae: { common: ["Topical: hypercalcaemia, hypercalciuria, skin discomfort [FDA]."], serious: ["Hypercalcaemia (weakness, headache, nausea, vomiting, constipation, polyuria) [FDA]", "Nephrocalcinosis, vascular calcification [FDA]"] },
  monitor: ["Serum calcium at least twice weekly during titration, then monthly [FDA].", "Phosphate, PTH, alkaline phosphatase [FDA]."],
  local: { neml: "Calcitriol 0.25 mcg tablet is on the Bhutan NEML 2025 [BT-NEML].", strengths: "0.25 mcg tablet.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "calcitriol", indication_id: "start", label: "Start — 0.25 mcg once daily", route: "PO", population: { min_age_months: 36, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.25, unit: "mcg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 2, max_daily: 2, unit: "mcg" }, weight_basis: "NEP", formulations: [{ form: "soln", strength: 1, unit: "mcg/mL" }], rounding: "Whole capsules/tablets or 0.05 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "calcitriol", indication_id: "under3", label: "Pre-dialysis CKD, under 3 years — 10–15 ng/kg/day", route: "PO", population: { min_age_months: null, max_age_months: 36, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.01, unit: "mcg", per: "dose", value_max: 0.015 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "soln", strength: 1, unit: "mcg/mL" }], rounding: "To 0.01 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Calcitriol oral solution 1 mcg/mL — Rising Pharma (ANDA209798), label effective 2025-04-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1bd717a4-5fdf-4697-a6b2-9df55c6517bb"], ["FDA", "VECTICAL (calcitriol) ointment 3 mcg/g — Galderma, label effective 2026-11-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a1567da9-af74-4afd-9ac5-8b53ec5d7cbf"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Active vitamin D for dialysis bone disease, CKD hyperparathyroidism and hypoparathyroidism.",
    adult: [
      { ind: "Dialysis / hypoparathyroidism / pre-dialysis CKD", text: "Start 0.25 mcg once daily; titrate slowly with calcium checks twice weekly. Usual: dialysis 0.5–1 mcg/day; hypoparathyroidism 0.5–2 mcg/day.", calc: ["start"] },
      { ind: "Psoriasis (ointment)", text: "Twice daily; maximum 200 g a week." }
    ],
    child: [
      { ind: "Pre-dialysis CKD, 3 years+", text: "0.25 mcg/day, up to 0.5 mcg/day.", calc: ["start"] },
      { ind: "Pre-dialysis CKD, under 3 years", text: "10–15 ng/kg/day.", calc: ["under3"] },
      { ind: "Hypoparathyroidism", text: "1–5 years: usually 0.25–0.75 mcg daily. 6 years+: 0.5–2 mcg daily." }
    ] }
});

/* ---------- CALCIUM ACETATE (FDA capsules 667 mg, ANDA203135, eff. 2026-11-11) ---------- */
FDB_M("calcium-acetate", {
  inn: "Calcium acetate", atc: "V03AE07", cls: "Calcium-based phosphate binder",
  linked: [["Hyperphosphataemia in end-stage kidney disease", "Phosphate binder [FDA]", ""]],
  forms: ["Capsules/tablets 667 mg (169 mg elemental calcium) [NEP]."],
  moa: "Binds dietary phosphate in the gut to form insoluble calcium phosphate [NEP].",
  pk: ["Take with meals [FDA].", "Avoid other calcium supplements and calcium-based antacids [FDA].", "May reduce absorption of some oral drugs (e.g. tetracyclines, fluoroquinolones) — separate doses [NEP]."],
  ind: { adult: ["Reduce serum phosphorus in end-stage kidney disease [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ESKD hyperphosphataemia", "Start 2 capsules (1,334 mg) with each meal; increase every 2–3 weeks to target phosphate as long as calcium allows; most need 3–4 capsules with each meal [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Per meal." },
  adj: { renal: "Indicated in ESKD [FDA].", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Hypercalcaemia worsens digitalis toxicity [FDA]." },
  tox: { human: "Hypercalcaemia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce or stop; severe cases may need haemodialysis [FDA]." },
  contra: ["Hypercalcaemia [FDA]."],
  ae: { common: ["Hypercalcaemia, nausea, vomiting [FDA]."], serious: ["Severe hypercalcaemia [FDA]"] },
  monitor: ["Serum calcium twice weekly early, then regularly; phosphate [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "calcium-acetate", indication_id: "eskd", label: "ESKD — 1,334 mg (2 caps) with each meal", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1334, unit: "mg", per: "dose", value_max: 2668 }, interval_h: 8, divided_doses: 3, caps: { max_single: 2668, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 667, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Calcium acetate capsules 667 mg (ANDA203135) — label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2072d9f4-abb1-4699-bde5-6041dd79cad5"]],
  dose: { tagline: "Calcium phosphate binder taken with meals in dialysis patients.",
    adult: [{ ind: "Hyperphosphataemia (ESKD)", text: "2 capsules (667 mg each) with each meal; raise every 2–3 weeks; usually 3–4 capsules per meal.", calc: ["eskd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CALCIUM CHLORIDE (FDA calcium chloride 10% injection, NDA021117, eff. 2026-10-27) ---------- */
FDB_M("calcium-chloride", {
  inn: "Calcium chloride", atc: "B05XA07", cls: "Calcium salt (parenteral)",
  linked: [["Acute symptomatic hypocalcaemia", "IV calcium [FDA]", ""]],
  forms: ["Injection 10% (100 mg/mL = 27 mg or 1.4 mEq elemental calcium per mL), 10 mL syringe [FDA]."],
  moa: "Replaces ionised calcium [NEP].",
  pk: ["About three times more elemental calcium per mL than 10% calcium gluconate [NEP]."],
  ind: { adult: ["Acute symptomatic hypocalcaemia (not for long-term use) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Acute symptomatic hypocalcaemia", "200–1,000 mg slow IV into a central or deep vein; maximum rate 1 mL (100 mg) per minute; repeat as needed [FDA]."], ["Kidney impairment", "Start 200 mg [FDA]."]],
  paed: { tiers: ["2.7–5 mg/kg slow IV (central or deep vein); kidney impairment start 2.7 mg/kg [FDA].", "This syringe product cannot deliver doses under 200 mg — use another product [FDA]."], transition: "Adult range [FDA].", calcNote: "mg of calcium chloride (not elemental)." },
  adj: { renal: "Start at the low end (adults 200 mg; children 2.7 mg/kg) [FDA].", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Never IM or SC (tissue necrosis); never as a bolus [FDA]." },
  tox: { human: "Hypercalcaemia (≥12 mg/dL): short QT, bradycardia, hypertension, nausea, vomiting, constipation, weakness, confusion, seizures, coma [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive care [FDA]." },
  contra: ["Ventricular fibrillation; asystole and electromechanical dissociation [FDA].", "Newborns (28 days or younger) who need IV ceftriaxone [FDA]."],
  ae: { common: ["Tingling, heat sensation, chalky taste [NEP]."], serious: ["Fatal ceftriaxone–calcium precipitates in neonates [FDA]", "Hypotension, bradycardia, arrhythmias, syncope with rapid injection [FDA]", "Arrhythmias with digoxin [FDA]", "Tissue necrosis and calcinosis on extravasation [FDA]", "Aluminium toxicity [FDA]"] },
  monitor: ["Serum (ionised) calcium; ECG during injection [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 (calcium gluconate is the listed IV calcium) [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "calcium-chloride", indication_id: "adult", label: "Adult — 200–1,000 mg slow IV (max 100 mg/min)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose", value_max: 1000 }, interval_h: null, divided_doses: 1, caps: { max_single: 1000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "calcium-chloride", indication_id: "child", label: "Child — 2.7–5 mg/kg slow IV", route: "IV", population: { min_age_months: null, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2.7, unit: "mg", per: "dose", value_max: 5 }, interval_h: null, divided_doses: 1, caps: { max_single: 1000, adult_ceiling_single: 1000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Calcium chloride injection USP 10% (NDA021117) — label effective 2026-10-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a3b8e0e-efb0-465b-84cb-d120b3096ebd"]],
  dose: { tagline: "Concentrated IV calcium for acute symptomatic hypocalcaemia — slow, central or deep vein.",
    cautionTitle: "Slow IV only — central or deep vein",
    caution: "Administer Calcium Chloride Injection by slow intravenous infusion in a central or deep vein in adults and pediatric patients (with or without renal impairment); do not administer by bolus. The maximum recommended infusion rate is 1 mL/minute (100 mg/minute). Do not use intramuscularly or subcutaneously. (FDA label, 2.1)",
    adult: [{ ind: "Acute symptomatic hypocalcaemia", text: "200–1,000 mg slow IV, maximum 100 mg (1 mL) per minute; repeat as needed. Kidney impairment: start 200 mg.", calc: ["adult"] }],
    child: [{ ind: "Acute symptomatic hypocalcaemia", text: "2.7–5 mg/kg slow IV; kidney impairment start 2.7 mg/kg.", calc: ["child"] }] }
});

/* ---------- CALCIUM FOLINATE / LEUCOVORIN (FDA VYKOURA injection, NDA220406, eff. 2026-03-12) ---------- */
FDB_M("calcium-folinate", {
  inn: "Calcium folinate", atc: "V03AF03", cls: "Reduced folate (folinic acid)",
  linked: [["Methotrexate rescue / overdose; folate-antagonist overdose", "Antidote [FDA]", ""], ["Colorectal cancer with fluorouracil", "Modulator [FDA]", ""], ["Megaloblastic anaemia from folate deficiency (oral not possible)", "Replacement [FDA]", ""]],
  forms: ["Injection 10 mg/mL (50, 350, 500 mg vials) [FDA].", "Tablets 5, 10, 15, 25 mg [NEP]."],
  moa: "Bypasses dihydrofolate reductase, supplying reduced folate to normal cells [NEP].",
  pk: ["Do not mix with fluorouracil (precipitate) [FDA].", "Glucarpidase lowers leucovorin — separate by 2 h [FDA].", "High folate may reduce phenobarbital, phenytoin, primidone effect [FDA]."],
  ind: { adult: ["High-dose methotrexate rescue; impaired methotrexate elimination; folate-antagonist overdose; colorectal cancer with 5-FU; megaloblastic anaemia when oral therapy is not feasible [FDA].", "Not for pernicious anaemia [FDA]."], paed: ["Same, adult and paediatric [FDA]."] },
  adult: [["Rescue after high-dose methotrexate (12–15 g/m²)", "15 mg (about 10 mg/m²) IV/IM every 6 h starting 24 h after the start of methotrexate, until methotrexate level below 0.05 micromolar; adjust by levels [FDA]."], ["Impaired MTX elimination or overdose", "10 mg/m² IV/IM every 6 h, starting as soon as possible, until MTX level below 0.01 micromolar [FDA]."], ["Colorectal cancer", "20–500 mg/m² per regimen, given before fluorouracil [FDA]."], ["Megaloblastic anaemia", "Up to 1 mg/day IV until response [FDA]."]],
  paed: { tiers: ["Same mg/m² regimens as adults [FDA]."], transition: "—", calcNote: "mg/m² (needs height)." },
  adj: { renal: "Rescue doses rise with creatinine and MTX levels — follow label Table 1 [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Calcium content: IV no faster than 160 mg per minute; never intrathecal [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Severe hypersensitivity to leucovorin, levoleucovorin or folic acid [FDA]."],
  ae: { common: ["With high-dose MTX: stomatitis, vomiting. With 5-FU: diarrhoea, stomatitis, nausea [FDA]."], serious: ["Anaphylaxis [FDA]", "Hypercalcaemia with fast injection [FDA]", "Fatal if given intrathecally [FDA]"] },
  monitor: ["Methotrexate levels and creatinine at least daily during rescue [FDA].", "Urine pH ≥7 and IV fluids (3 L/day) [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "calcium-folinate", indication_id: "mtx", label: "MTX overdose / delayed elimination — 10 mg/m² IV/IM every 6 h", route: "IV/IM", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "VYKOURA (leucovorin calcium) injection — Avyxa, label effective 2026-03-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d122b875-435e-4e00-b945-7a0546df95c2"]],
  dose: { tagline: "Folinic acid: methotrexate rescue and antidote, and partner to fluorouracil.",
    cautionTitle: "Never intrathecal; rate limit",
    caution: "Do not administer intrathecally. VYKOURA may be harmful or fatal if given intrathecally. Due to the calcium content, inject no more than 16 mL (160 mg) of VYKOURA intravenously per minute. (FDA label, 2.1 and 5.2)",
    adult: [
      { ind: "High-dose MTX rescue", text: "15 mg (≈10 mg/m²) every 6 hours from 24 h after MTX start, until MTX <0.05 micromolar; adjust by levels." },
      { ind: "MTX overdose or delayed elimination", text: "10 mg/m² IV/IM every 6 hours until MTX <0.01 micromolar.", calc: ["mtx"] },
      { ind: "Colorectal cancer", text: "20–500 mg/m² per regimen, before fluorouracil." },
      { ind: "Megaloblastic anaemia (folate)", text: "Up to 1 mg a day IV." }
    ],
    child: [{ ind: "Children", text: "Same mg/m² regimens.", calc: ["mtx"] }] }
});

/* ---------- CALCIUM GLUCONATE (FDA 10% injection, Fresenius, NDA208418, eff. 2024-08-21) ---------- */
FDB_M("calcium-gluconate", {
  inn: "Calcium gluconate", atc: "A12AA03", cls: "Calcium salt (parenteral)",
  linked: [["Acute symptomatic hypocalcaemia", "IV calcium [FDA][BT-NEML]", ""], ["Hyperkalaemia with ECG changes; magnesium toxicity", "Membrane stabilisation [UNVERIFIED-KNOWLEDGE]", ""]],
  forms: ["Injection 10% (100 mg/mL = 9.3 mg or 0.465 mEq elemental calcium per mL), 10 mL [FDA][BT-NEML].", "Premixed bags 1 g/50 mL and 2 g/100 mL in saline [FDA]."],
  moa: "Replaces ionised calcium [NEP].",
  pk: ["Incompatible with phosphate- or bicarbonate-containing fluids [FDA]."],
  ind: { adult: ["Acute symptomatic hypocalcaemia (not for long-term use) [FDA]."], paed: ["Neonates and children [FDA]."] },
  adult: [["Acute symptomatic hypocalcaemia", "Bolus 1,000–2,000 mg, repeat every 6 h if needed; or infusion starting 5.4–21.5 mg/kg/h. Dilute in 5% dextrose or saline to 10–50 mg/mL; bolus no faster than 200 mg/min [FDA]."]],
  paed: { tiers: ["Neonates (≤1 month): bolus 100–200 mg/kg, repeat every 6 h; or infusion starting 17–33 mg/kg/h [FDA].", "Children (>1 month to <17 years): bolus 29–60 mg/kg, repeat every 6 h; or infusion starting 8–13 mg/kg/h [FDA].", "Bolus no faster than 100 mg/min in children and neonates [FDA]."], transition: "Adult dose from 17 years [FDA].", calcNote: "mg of calcium gluconate (10% = 100 mg/mL)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Calcium every 4–6 h on bolus dosing; every 1–4 h on infusion [FDA]." },
  tox: { human: "Hypercalcaemia (≥12 mg/dL): weakness, confusion, hallucinations, seizures, coma; diuresis [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive care [FDA]." },
  contra: ["Hypercalcaemia [FDA].", "Neonates (28 days or younger) receiving ceftriaxone [FDA]."],
  ae: { common: ["Tingling, heat sensation, injection-site irritation [NEP]."], serious: ["Fatal ceftriaxone–calcium precipitates in neonates [FDA]", "Arrhythmias with digoxin [FDA]", "Hypotension, bradycardia, arrhythmias with rapid injection [FDA]", "Calcinosis cutis and tissue necrosis [FDA]", "Aluminium toxicity [FDA]"] },
  monitor: ["Serum calcium; ECG during bolus [FDA]."],
  local: { neml: "Calcium gluconate 100 mg/mL (10 mL) injection is on the Bhutan NEML 2025 [BT-NEML].", strengths: "10% injection, 10 mL ampoule.", stg: "Not mentioned by name in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "calcium-gluconate", indication_id: "adult", label: "Adult bolus — 1,000–2,000 mg (max 200 mg/min), repeat every 6 h", route: "IV", population: { min_age_months: 204, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose", value_max: 2000 }, interval_h: 6, divided_doses: 4, caps: { max_single: 2000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "To 0.5 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "calcium-gluconate", indication_id: "child", label: "Child (>1 month–<17 y) bolus — 29–60 mg/kg every 6 h (max 100 mg/min)", route: "IV", population: { min_age_months: 1, max_age_months: 204, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 29, unit: "mg", per: "dose", value_max: 60 }, interval_h: 6, divided_doses: 4, caps: { max_single: 2000, adult_ceiling_single: 2000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "calcium-gluconate", indication_id: "neonate", label: "Neonate (≤1 month) bolus — 100–200 mg/kg every 6 h (max 100 mg/min)", route: "IV", population: { min_age_months: null, max_age_months: 1, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 100, unit: "mg", per: "dose", value_max: 200 }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Calcium gluconate injection 10% — Fresenius Kabi (NDA208418), label effective 2024-08-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1aaf5c76-e526-4d8b-887e-cc3c4f39cc8b"], ["FDA", "Calcium gluconate in sodium chloride injection — WG Critical Care (NDA210906), label effective 2026-07-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0deed071-d89d-420e-b4b4-797dce0ad8f0"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "IV calcium of choice for symptomatic hypocalcaemia — dilute and give slowly.",
    cautionTitle: "Ceftriaxone in neonates; slow injection",
    caution: "Calcium Gluconate Injection is contraindicated in neonates (28 days of age or younger) receiving ceftriaxone. Cases of fatal outcomes in neonates have occurred. For bolus administration, DO NOT exceed an infusion rate of 200 mg/minute in adult patients or 100 mg/minute in pediatric patients. (FDA label, 4, 5.2 and Table 1)",
    adult: [{ ind: "Acute symptomatic hypocalcaemia", text: "1,000–2,000 mg IV (diluted to 10–50 mg/mL) no faster than 200 mg/min; repeat every 6 hours if needed. Or infusion from 5.4–21.5 mg/kg/h.", calc: ["adult"] }],
    child: [
      { ind: "Children >1 month to <17 years", text: "29–60 mg/kg IV no faster than 100 mg/min; repeat every 6 hours if needed. Or infusion from 8–13 mg/kg/h.", calc: ["child"] },
      { ind: "Neonates (≤1 month)", text: "100–200 mg/kg IV no faster than 100 mg/min; repeat every 6 hours if needed. Or infusion from 17–33 mg/kg/h. Never with ceftriaxone.", calc: ["neonate"] }
    ] }
});

/* ---------- CAMIZESTRANT (FDA ETCAMAH, AstraZeneca, NDA220359, eff. 2026-09-04) ---------- */
FDB_M("camizestrant", {
  inn: "Camizestrant", atc: "L02BA05", cls: "Oral selective estrogen receptor degrader (SERD)",
  linked: [["HR+/HER2− advanced breast cancer with ESR1 mutation", "With a CDK4/6 inhibitor [FDA]", ""]],
  forms: ["Tablets 75 mg [FDA]."],
  moa: "Antagonises and degrades the estrogen receptor, including ESR1-mutant receptor [NEP].",
  pk: ["Half-life about 23 h [FDA].", "Avoid strong/moderate CYP3A inducers; avoid CYP2C9/2C19 substrates during and 2 weeks after [FDA]."],
  ind: { adult: ["HR+, HER2− locally advanced/metastatic breast cancer with ESR1 mutation detected during aromatase inhibitor + CDK4/6 inhibitor therapy, combined with a CDK4/6 inhibitor (accelerated approval) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ESR1-mutant breast cancer", "75 mg once daily with or without food, with abemaciclib, palbociclib or ribociclib [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Dose depends on the partner CDK4/6 inhibitor — see label [FDA].", preg: "Can cause fetal harm [FDA].", other: "ECG before starting; monitor heart rate in the first 30 days [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; ECG [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Low neutrophils, leucocytes, haemoglobin, lymphocytes, platelets; visual disturbances; fatigue [FDA]."], serious: ["QTc prolongation and arrhythmia with ribociclib or other QT drugs (boxed) [FDA]", "Bradycardia [FDA]"] },
  monitor: ["ECG and heart rate [FDA].", "Blood counts [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "camizestrant", indication_id: "std", label: "75 mg once daily (with a CDK4/6 inhibitor)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 75, max_daily: 75, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 75, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "ETCAMAH (camizestrant) tablets — AstraZeneca, label effective 2026-09-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c54223d3-f3c7-4186-afa0-429d84805826"]],
  dose: { tagline: "Oral SERD for ESR1-mutant hormone-receptor-positive breast cancer.",
    boxedTitle: "Arrhythmia risk with QTc-prolonging drugs",
    boxed: "ETCAMAH in combination with ribociclib, a QTc interval prolonging drug and a strong CYP3A inhibitor, or in combination with other QTc interval prolonging drugs, can increase the risk of Torsades de Pointes, other ventricular arrhythmias, and sudden death. Avoid concomitant use of ETCAMAH with products (other than ribociclib) known to prolong the QTc interval and/or have a known risk of Torsades de Pointes. If concomitant use with other products cannot be avoided, monitor the QTc interval more frequently. Obtain ECG prior to initiation and monitor heart rate and QTc interval.",
    adult: [{ ind: "ESR1-mutant HR+/HER2− breast cancer", text: "75 mg once daily with a CDK4/6 inhibitor.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CANAGLIFLOZIN (FDA INVOKANA, NDA204042, eff. 2026-09-21) ---------- */
FDB_M("canagliflozin", {
  inn: "Canagliflozin", atc: "A10BK02", cls: "SGLT2 inhibitor",
  linked: [["Type 2 diabetes", "Glucose lowering; cardiovascular and kidney protection [FDA]", ""], ["Diabetic kidney disease with albuminuria", "Kidney protection [FDA]", ""]],
  forms: ["Tablets 100 mg and 300 mg [FDA]."],
  moa: "Inhibits SGLT2, increasing urinary glucose loss [NEP].",
  pk: ["Take before the first meal of the day [FDA].", "UGT inducers (rifampicin, phenytoin, phenobarbital, ritonavir) lower levels — increase dose if eGFR ≥60 [FDA].", "Negligibly removed by haemodialysis [FDA]."],
  ind: { adult: ["Type 2 diabetes glycaemic control; reduce MACE in T2D with CVD; reduce ESKD, creatinine doubling, CV death and heart-failure admission in T2D with diabetic nephropathy and albuminuria >300 mg/day [FDA]."], paed: ["Type 2 diabetes, 10 years and over [FDA]."] },
  adult: [["Type 2 diabetes", "100 mg once daily before the first meal; may increase to 300 mg if eGFR ≥60 and more control needed [FDA]."], ["Other indications", "100 mg once daily [FDA]."]],
  paed: { tiers: ["10 years and over: 100 mg once daily, up to 300 mg if eGFR ≥60 [FDA]."], transition: "Same doses [FDA].", calcNote: "Fixed dose; kidney bands by eGFR." },
  adj: { renal: "eGFR 30–<60: maximum 100 mg. Under 30: do not start; may continue 100 mg if already on it with albuminuria >300 mg/day [FDA].", hepatic: "Not recommended in severe impairment [NEP].", preg: "Not established in primary source. [NEP]", other: "Correct volume depletion first [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; not dialysable [FDA]." },
  contra: ["Serious hypersensitivity to canagliflozin (anaphylaxis, angioedema) [FDA]."],
  ae: { common: ["Genital fungal infections, urinary tract infection, increased urination [NEP]."], serious: ["Ketoacidosis [FDA]", "Lower-limb amputation [FDA]", "Volume depletion and AKI [FDA]", "Urosepsis, pyelonephritis, Fournier's gangrene [FDA]", "Bone fracture; hypoglycaemia with insulin/sulfonylureas [FDA]"] },
  monitor: ["Kidney function, volume status, feet [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "canagliflozin", indication_id: "t2d", label: "Type 2 diabetes — 100 mg once daily (300 mg if eGFR ≥60)", route: "PO", population: { min_age_months: 120, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose", value_max: 300 }, interval_h: 24, divided_doses: 1, caps: { max_single: 300, max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets",
    renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "eGFR under 30: do not start (may continue 100 mg if already on it with albuminuria >300 mg/day)" }], renal_note: "eGFR 30–59: maximum 100 mg once daily. The label uses eGFR.", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "INVOKANA (canagliflozin) tablets — Janssen (NDA204042), label effective 2026-09-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e946ba3-02c4-4a10-9d5e-f2d87b534dc3"]],
  dose: { tagline: "SGLT2 inhibitor for type 2 diabetes with heart and kidney protection.",
    adult: [
      { ind: "Type 2 diabetes", text: "100 mg once daily before breakfast; 300 mg if eGFR 60+ and more control needed.", calc: ["t2d"] },
      { ind: "eGFR 30–59", text: "Maximum 100 mg once daily." },
      { ind: "eGFR under 30", text: "Do not start (may continue 100 mg in albuminuric kidney disease)." }
    ],
    child: [{ ind: "Type 2 diabetes, 10 years and over", text: "100 mg once daily; up to 300 mg if eGFR 60+.", calc: ["t2d"] }] }
});

/* ---------- CANAKINUMAB (FDA ILARIS, Novartis, BLA125319, eff. 2026-06-08) ---------- */
FDB_M("canakinumab", {
  inn: "Canakinumab", atc: "L04AC08", cls: "Interleukin-1β blocking monoclonal antibody",
  linked: [["Periodic fever syndromes (CAPS, TRAPS, HIDS/MKD, FMF)", "Biologic [FDA]", ""], ["Still's disease (SJIA, AOSD)", "Biologic [FDA]", ""], ["Gout flares when NSAIDs/colchicine unsuitable", "Single injection [FDA]", ""]],
  forms: ["Injection 150 mg/mL vial, SC [FDA]."],
  moa: "Binds IL-1β and blocks its receptor interaction [NEP].",
  pk: ["Half-life about 26 days [FDA]."],
  ind: { adult: ["CAPS (FCAS, MWS), TRAPS, HIDS/MKD, FMF; adult-onset Still's; gout flares in selected adults [FDA]."], paed: ["CAPS from 4 years; TRAPS, HIDS/MKD, FMF; SJIA from 2 years [FDA]."] },
  adult: [["CAPS (over 40 kg)", "150 mg SC every 8 weeks [FDA]."], ["TRAPS, HIDS/MKD, FMF (over 40 kg)", "150 mg every 4 weeks; may increase to 300 mg every 4 weeks [FDA]."], ["Still's disease", "4 mg/kg (maximum 300 mg) every 4 weeks [FDA]."], ["Gout flare", "150 mg SC once; at least 12 weeks before re-treatment [FDA]."]],
  paed: { tiers: ["CAPS 15–40 kg: 2 mg/kg every 8 weeks (up to 3 mg/kg) [FDA].", "TRAPS/HIDS/FMF ≤40 kg: 2 mg/kg every 4 weeks (up to 4 mg/kg) [FDA].", "Still's disease (7.5 kg and over): 4 mg/kg (maximum 300 mg) every 4 weeks [FDA]."], transition: "Fixed doses over 40 kg [FDA].", calcNote: "mg/kg with caps." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "No live vaccines; avoid during active infection [FDA]." },
  tox: { human: "No confirmed overdose [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor and treat symptoms [FDA]." },
  contra: ["Confirmed hypersensitivity to canakinumab or excipients [FDA]."],
  ae: { common: ["Nasopharyngitis, diarrhoea, influenza, rhinitis, nausea, headache, bronchitis, gastroenteritis [FDA]."], serious: ["Serious infections [FDA]", "Hypersensitivity and DRESS [FDA]", "Macrophage activation syndrome [FDA]"] },
  monitor: ["Infections; TB screening [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "canakinumab", indication_id: "still", label: "Still's disease — 4 mg/kg (max 300 mg) every 4 weeks", route: "SC", population: { min_age_months: 24, max_age_months: null, min_weight_kg: 7.5, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 150, unit: "mg/mL" }], rounding: "To 0.01 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "ILARIS (canakinumab) injection — Novartis, label effective 2026-06-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7d271f3b-e4f9-4d80-8dcf-28d49123f80e"]],
  dose: { tagline: "IL-1β antibody for periodic fever syndromes, Still's disease and hard-to-treat gout flares.",
    adult: [
      { ind: "CAPS (over 40 kg)", text: "150 mg SC every 8 weeks." },
      { ind: "TRAPS, HIDS/MKD, FMF (over 40 kg)", text: "150 mg every 4 weeks; up to 300 mg." },
      { ind: "Still's disease", text: "4 mg/kg (maximum 300 mg) every 4 weeks.", calc: ["still"] },
      { ind: "Gout flare", text: "150 mg SC once; wait at least 12 weeks before another dose." }
    ],
    child: [
      { ind: "SJIA (2 years+, 7.5 kg+)", text: "4 mg/kg (maximum 300 mg) every 4 weeks.", calc: ["still"] },
      { ind: "CAPS 15–40 kg", text: "2 mg/kg every 8 weeks (up to 3 mg/kg)." },
      { ind: "TRAPS/HIDS/FMF ≤40 kg", text: "2 mg/kg every 4 weeks (up to 4 mg/kg)." }
    ] }
});

/* ---------- CANDESARTAN (FDA candesartan cilexetil, NDA020838 = ATACAND, eff. 2026-01-15) ---------- */
FDB_M("candesartan", {
  inn: "Candesartan", atc: "C09CA06", cls: "Angiotensin II receptor blocker (ARB)",
  linked: [["Hypertension (adults and children 1–<17 years)", "ARB [FDA]", "htn-adult"], ["Heart failure (NYHA II–IV)", "Reduces CV death and HF admission [FDA]", ""]],
  forms: ["Tablets 4, 8, 16, 32 mg [FDA]; oral suspension can be compounded [NEP]."],
  moa: "Prodrug; blocks angiotensin II at AT1 receptors [NEP].",
  pk: ["Half-life about 9 h [FDA].", "Not removed by haemodialysis [FDA].", "Lithium, NSAIDs, potassium-raising drugs, aliskiren interact [NEP]."],
  ind: { adult: ["Hypertension [FDA].", "Heart failure NYHA II–IV [FDA]."], paed: ["Hypertension, 1 to under 17 years [FDA]."] },
  adult: [["Hypertension", "16 mg once daily; usual 8–32 mg daily, once or in two doses [FDA]."], ["Heart failure", "Start 4 mg once daily; double about every 2 weeks to a target of 32 mg once daily [FDA]."]],
  paed: { tiers: ["1 to <6 years: start 0.2 mg/kg once daily (suspension); range 0.05–0.4 mg/kg/day [FDA].", "6 to <17 years, under 50 kg: start 4–8 mg once daily; range 4–16 mg [FDA].", "6 to <17 years, over 50 kg: start 8–16 mg once daily; range 4–32 mg [FDA].", "Under 1 year: do not use (kidney development) [NEP]."], transition: "Adult dosing from 17 years [FDA].", calcNote: "mg/kg under 6 years; weight bands from 6 years." },
  adj: { renal: "Volume-depleted or impaired kidney function: start lower and monitor [NEP].", hepatic: "Moderate impairment: start 8 mg (hypertension) [NEP].", preg: "Boxed: stop when pregnancy is detected [FDA].", other: "Monitor kidney function and potassium, especially in heart failure [FDA]." },
  tox: { human: "Hypotension, dizziness, tachycardia (or vagal bradycardia) [FDA].", animal: "No lethality at single oral doses up to 2,000 mg/kg in mice, rats and dogs [FDA].", manage: "Supportive; not dialysable [FDA]." },
  contra: ["Hypersensitivity to candesartan [FDA].", "With aliskiren in diabetes [FDA]."],
  ae: { common: ["Headache, dizziness; in heart failure: hypotension, abnormal kidney function, hyperkalaemia [FDA]."], serious: ["Fetal toxicity (boxed) [FDA]", "Hypotension; kidney impairment; hyperkalaemia [FDA]"] },
  monitor: ["Blood pressure, creatinine, potassium [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "candesartan", indication_id: "htn", label: "Adult hypertension — 16 mg once daily (8–32 mg)", route: "PO", population: { min_age_months: 204, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 16, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 32, max_daily: 32, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 16, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "candesartan", indication_id: "hf", label: "Heart failure — start 4 mg once daily (target 32 mg)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 32, max_daily: 32, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 4, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "candesartan", indication_id: "child_small", label: "Child 1–<6 years — 0.2 mg/kg once daily (0.05–0.4 mg/kg)", route: "PO", population: { min_age_months: 12, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_mg_per_kg_dose: 0.4, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "To 0.1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Candesartan cilexetil tablets (NDA020838, ATACAND) — label effective 2026-01-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=15601654-76da-04cf-e063-6394a90a2cb5"]],
  dose: { tagline: "Once-daily ARB for high blood pressure and heart failure.",
    boxedTitle: "Fetal toxicity",
    boxed: "When pregnancy is detected, discontinue candesartan cilexetil as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus.",
    adult: [
      { ind: "Hypertension", text: "16 mg once daily; usual 8–32 mg a day.", calc: ["htn"] },
      { ind: "Heart failure", text: "Start 4 mg once daily; double every 2 weeks as tolerated to 32 mg.", calc: ["hf"] }
    ],
    child: [
      { ind: "Hypertension, 1 to under 6 years", text: "0.2 mg/kg once daily (range 0.05–0.4 mg/kg a day).", calc: ["child_small"] },
      { ind: "Hypertension, 6 to under 17 years", text: "Under 50 kg: 4–8 mg once daily (up to 16 mg). Over 50 kg: 8–16 mg once daily (up to 32 mg)." }
    ] }
});

/* ---------- CANGRELOR (FDA KENGREAL, Chiesi, NDA204958, eff. 2025-10-21) ---------- */
FDB_M("cangrelor", {
  inn: "Cangrelor", atc: "B01AC25", cls: "IV P2Y12 platelet inhibitor (reversible, very short-acting)",
  linked: [["PCI in patients not on a P2Y12 inhibitor", "Periprocedural antiplatelet [FDA]", ""]],
  forms: ["Powder for injection 50 mg vial [FDA]."],
  moa: "Directly and reversibly blocks the platelet P2Y12 receptor [NEP].",
  pk: ["Half-life 3–6 min; no antiplatelet effect 1 h after stopping [FDA].", "Clopidogrel or prasugrel given during the infusion will not work — give them immediately after stopping; ticagrelor can be given during or right after [NEP]."],
  ind: { adult: ["Adjunct to PCI to reduce periprocedural MI, repeat revascularisation and stent thrombosis, in patients not on a P2Y12 inhibitor or GP IIb/IIIa inhibitor [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["PCI", "30 mcg/kg IV bolus before PCI, then immediately 4 mcg/kg/min for at least 2 h or the length of the procedure, whichever is longer; then an oral P2Y12 inhibitor [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Bolus calculated; infusion rate from text." },
  adj: { renal: "No adjustment [NEP].", hepatic: "No adjustment [NEP].", preg: "Not established in primary source. [NEP]", other: "Dedicated IV line [FDA]." },
  tox: { human: "Overdoses up to 10× bolus or 3.5× infusion without clinical sequelae [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Effect gone within 1 h of stopping [FDA]." },
  contra: ["Significant active bleeding [FDA].", "Hypersensitivity to cangrelor [FDA]."],
  ae: { common: ["Bleeding [FDA]."], serious: ["Bleeding [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["Bleeding [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cangrelor", indication_id: "bolus", label: "PCI — IV bolus 30 mcg/kg (then 4 mcg/kg/min)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "To 10 mcg [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "KENGREAL (cangrelor) for injection — Chiesi, label effective 2025-10-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=88b434fa-8891-4fd5-9d86-7ea64667c08f"]],
  dose: { tagline: "Ultra-short-acting IV P2Y12 inhibitor for PCI.",
    adult: [{ ind: "PCI (not on a P2Y12 inhibitor)", text: "30 mcg/kg IV bolus before PCI, then 4 mcg/kg/min for at least 2 hours or the procedure, whichever is longer. Then an oral P2Y12 inhibitor.", calc: ["bolus"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CANNABIDIOL (FDA EPIDIOLEX, Jazz, NDA210365, eff. 2026-05-29) ---------- */
FDB_M("cannabidiol", {
  inn: "Cannabidiol", atc: "N03AX24", cls: "Cannabinoid antiseizure medicine",
  linked: [["Lennox–Gastaut syndrome; Dravet syndrome", "Add-on antiseizure medicine [FDA]", ""], ["Tuberous sclerosis complex seizures", "Add-on [FDA]", ""]],
  forms: ["Oral solution 100 mg/mL [FDA]."],
  moa: "Mechanism not fully known; not via cannabinoid receptors [NEP].",
  pk: ["Half-life 56–61 h [FDA].", "Valproate increases liver-enzyme rises; clobazam levels rise [FDA].", "CYP3A4/2C19 inducers and inhibitors alter levels [NEP]."],
  ind: { adult: ["Seizures of LGS, Dravet syndrome or TSC [FDA]."], paed: ["1 year and over [FDA]."] },
  adult: [["LGS or Dravet", "Start 2.5 mg/kg twice daily; after 1 week 5 mg/kg twice daily; maximum 10 mg/kg twice daily (20 mg/kg/day) [FDA]."], ["TSC", "Start 2.5 mg/kg twice daily; increase weekly by 2.5 mg/kg twice daily to 12.5 mg/kg twice daily (25 mg/kg/day) [FDA]."]],
  paed: { tiers: ["1 year and over: same mg/kg as adults [FDA]."], transition: "Same mg/kg [FDA].", calcNote: "mg/kg per dose, twice daily." },
  adj: { renal: "No adjustment [NEP].", hepatic: "Moderate or severe (Child-Pugh B/C): lower doses and slower titration per label Table 1; mild: no change [FDA].", preg: "Not established in primary source. [NEP]", other: "Check ALT, AST and bilirubin before starting [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to cannabidiol or ingredients (e.g. sesame oil) [FDA]."],
  ae: { common: ["Somnolence, decreased appetite, diarrhoea, raised transaminases, fatigue, rash, insomnia, infections [NEP]."], serious: ["Hepatic injury (especially with valproate) [FDA]", "Somnolence and sedation [FDA]", "Suicidal behaviour [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["ALT, AST, bilirubin at 1, 3 and 6 months, then periodically [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cannabidiol", indication_id: "lgs", label: "LGS/Dravet — 2.5 mg/kg twice daily to start (max 10 mg/kg twice daily)", route: "PO", population: { min_age_months: 12, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2.5, unit: "mg", per: "dose", value_max: 10 }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "soln", strength: 100, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "EPIDIOLEX (cannabidiol) oral solution — Jazz, label effective 2026-05-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8bf27097-4870-43fb-94f0-f3d0871d1eec"]],
  dose: { tagline: "Plant-derived cannabidiol oral solution for LGS, Dravet and TSC seizures.",
    adult: [
      { ind: "LGS or Dravet", text: "2.5 mg/kg twice daily → 5 mg/kg twice daily after 1 week → up to 10 mg/kg twice daily.", calc: ["lgs"] },
      { ind: "TSC", text: "2.5 mg/kg twice daily, up weekly by 2.5 mg/kg to 12.5 mg/kg twice daily." }
    ],
    child: [{ ind: "1 year and over", text: "Same mg/kg as adults.", calc: ["lgs"] }] }
});

/* ---------- CAPECITABINE (FDA XELODA, NDA020896, eff. 2026-02-05) ---------- */
FDB_M("capecitabine", {
  inn: "Capecitabine", atc: "L01BC06", cls: "Oral fluoropyrimidine (5-FU prodrug)",
  linked: [["Colon and rectal cancer (adjuvant, perioperative, metastatic)", "Oral chemotherapy [FDA]", ""], ["Breast cancer, advanced", "Alone or with docetaxel [FDA]", ""], ["Gastric, oesophageal, pancreatic cancer", "Combinations [FDA]", ""]],
  forms: ["Tablets 150 mg and 500 mg [FDA]."],
  moa: "Converted to fluorouracil in tissues; inhibits thymidylate synthase [NEP].",
  pk: ["Take within 30 min after a meal, about 12 h apart; swallow whole [FDA].", "Warfarin: INR rises and bleeding (boxed) [FDA].", "Phenytoin levels rise [NEP]."],
  ind: { adult: ["Colorectal, breast, gastric/oesophageal/GEJ and pancreatic cancers, as labelled [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Adjuvant colon / metastatic colorectal (single agent)", "1,250 mg/m² twice daily for days 1–14 of each 21-day cycle (adjuvant up to 8 cycles) [FDA]."], ["With oxaliplatin", "1,000 mg/m² twice daily days 1–14 every 21 days [FDA]."], ["Rectal cancer with radiation", "825 mg/m² twice daily [FDA]."], ["Breast cancer", "1,000 or 1,250 mg/m² twice daily days 1–14 every 21 days (alone or with docetaxel 75 mg/m²) [FDA]."], ["Rounding", "Round to the nearest 150 mg to use whole tablets [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/m² rounded to the nearest 150 mg." },
  adj: { renal: "CrCl 30–50 (Cockcroft–Gault): reduce dose by 25%. Under 30: no dose established [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Test for DPYD variants before starting [FDA]." },
  tox: { human: "Overdose: severe diarrhoea, mucositis, myelosuppression [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Uridine triacetate within 96 h; dialysis may lower 5'-DFUR [FDA]." },
  contra: ["Severe hypersensitivity to fluorouracil or capecitabine [FDA]."],
  ae: { common: ["Diarrhoea, hand–foot syndrome, nausea, vomiting, fatigue, stomatitis, abdominal pain [NEP]."], serious: ["Death in complete DPD deficiency (boxed) [FDA]", "Bleeding with warfarin (boxed) [FDA]", "Cardiotoxicity; diarrhoea; dehydration; kidney toxicity [FDA]", "Serious skin reactions; myelosuppression [FDA]"] },
  monitor: ["Blood counts, kidney function, hydration [FDA].", "INR closely if on warfarin [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "capecitabine", indication_id: "mono", label: "Single agent — 1,250 mg/m² twice daily, days 1–14 of 21", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 1250, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [], round_to: 150, rounding: "Nearest 150 mg (whole tablets) [FDA]", renal: [{ crcl_min: 30, crcl_max: 50, action: "reduce_dose", factor: 0.75, interval_h: 12 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "CrCl under 30: dose not established" }], flags: [], sources: ["FDA"] },
    { drug: "capecitabine", indication_id: "combo", label: "With oxaliplatin / breast — 1,000 mg/m² twice daily, days 1–14 of 21", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [], round_to: 150, rounding: "Nearest 150 mg (whole tablets) [FDA]", renal: [{ crcl_min: 30, crcl_max: 50, action: "reduce_dose", factor: 0.75, interval_h: 12 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "CrCl under 30: dose not established" }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "XELODA (capecitabine) tablets — label effective 2026-02-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e702d84d-7162-4751-bf37-d724cc7e45a5"]],
  dose: { tagline: "Oral 5-FU prodrug for colorectal, breast and GI cancers — check DPYD first.",
    boxedTitle: "Complete DPD deficiency; bleeding with vitamin K antagonists",
    boxed: "Increased risk of serious adverse reactions or death in patients with complete DPD deficiency. Test patients for genetic variants of DPYD prior to initiating XELODA unless immediate treatment is necessary. Avoid use of XELODA in patients with certain homozygous or compound heterozygous DPYD variants that result in complete DPD deficiency. Increased risk of bleeding with concomitant use of Vitamin K antagonists: Altered coagulation parameters and/or bleeding, including death, have been reported in patients taking XELODA concomitantly with oral vitamin K antagonists, such as warfarin. Clinically significant increases in prothrombin time (PT) and international normalized ratio (INR) have been reported in patients who were on stable doses of a vitamin K antagonist at the time XELODA was introduced. These events occurred in patients with and without liver metastases. Monitor INR more frequently and adjust the dose of the vitamin K antagonist as appropriate.",
    adult: [
      { ind: "Colorectal (single agent)", text: "1,250 mg/m² twice daily on days 1–14 of each 21-day cycle, within 30 minutes after a meal.", calc: ["mono"] },
      { ind: "With oxaliplatin; breast cancer", text: "1,000 mg/m² twice daily on days 1–14 (breast: 1,000 or 1,250 mg/m²).", calc: ["combo"] },
      { ind: "Rectal cancer with radiation", text: "825 mg/m² twice daily." },
      { ind: "Kidney impairment", text: "CrCl 30–50: 75% of the dose. Under 30: not established." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CAPIVASERTIB (FDA TRUQAP, AstraZeneca, NDA218197, eff. 2026-09-16) ---------- */
FDB_M("capivasertib", {
  inn: "Capivasertib", atc: "L01EX27", cls: "AKT kinase inhibitor",
  linked: [["HR+/HER2− advanced breast cancer with PIK3CA/AKT1/PTEN alteration", "With fulvestrant [FDA]", ""], ["PTEN-deficient metastatic prostate cancer", "Per label [FDA]", ""]],
  forms: ["Tablets 160 mg and 200 mg [NEP]."],
  moa: "Inhibits AKT1, AKT2 and AKT3 [NEP].",
  pk: ["Half-life about 8 h [FDA].", "Avoid strong CYP3A inducers; reduce dose with strong inhibitors [NEP]."],
  ind: { adult: ["HR+, HER2− advanced breast cancer with PIK3CA/AKT1/PTEN alteration after endocrine therapy, with fulvestrant [FDA].", "PTEN-deficient metastatic prostate cancer, per label [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["All indications", "400 mg twice daily for 4 days, then 3 days off, each week [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose; 4 days on, 3 off." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Mild: no change; moderate: monitor closely for adverse reactions [FDA].", preg: "Can cause fetal harm [NEP].", other: "Check glucose and HbA1c before starting and regularly [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Severe hypersensitivity to capivasertib [FDA]."],
  ae: { common: ["Diarrhoea, skin reactions, raised glucose, low lymphocytes, low haemoglobin, nausea, fatigue, stomatitis, vomiting [NEP]."], serious: ["Severe hyperglycaemia including DKA, sometimes fatal [FDA]", "Diarrhoea [FDA]", "Cutaneous adverse reactions [FDA]"] },
  monitor: ["Fasting glucose and HbA1c [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "capivasertib", indication_id: "std", label: "400 mg twice daily, 4 days on / 3 days off", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 400, max_daily: 800, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "TRUQAP (capivasertib) tablets — AstraZeneca, label effective 2026-09-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d698c106-2322-401e-b738-cbd83c843ecf"]],
  dose: { tagline: "AKT inhibitor tablet for selected breast and prostate cancers.",
    adult: [{ ind: "Breast cancer (with fulvestrant) or PTEN-deficient prostate cancer", text: "400 mg twice daily for 4 days, then 3 days off, every week.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CAPLACIZUMAB (FDA CABLIVI, Genzyme, BLA761112, eff. 2026-04-24) ---------- */
FDB_M("caplacizumab", {
  inn: "Caplacizumab", atc: "B01AX07", cls: "Anti-von Willebrand factor nanobody",
  linked: [["Acquired thrombotic thrombocytopenic purpura (aTTP)", "With plasma exchange and immunosuppression [FDA]", ""]],
  forms: ["Powder for injection 11 mg vial with prefilled diluent syringe [NEP]."],
  moa: "Binds the A1 domain of von Willebrand factor, blocking platelet adhesion [NEP].",
  pk: ["Half-life depends on concentration and vWF levels [FDA]."],
  ind: { adult: ["aTTP with plasma exchange and immunosuppressive therapy [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["aTTP — day 1", "11 mg IV bolus at least 15 min before plasma exchange, then 11 mg SC after plasma exchange [FDA]."], ["During daily plasma exchange", "11 mg SC once daily after each exchange [FDA]."], ["After plasma exchange", "11 mg SC once daily for 30 days beyond the last exchange; may extend up to 28 more days if disease persists [FDA]."]],
  paed: { tiers: ["12 years and over: as adults [FDA]."], transition: "Same dose [FDA].", calcNote: "Fixed 11 mg doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Hold 7 days before elective surgery or dental procedures [FDA]." },
  tox: { human: "Increased bleeding risk [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor for bleeding; consider von Willebrand factor concentrate [FDA]." },
  contra: ["Previous severe hypersensitivity to caplacizumab [FDA]."],
  ae: { common: ["Epistaxis, headache, gingival bleeding; children: epistaxis, tachycardia [FDA]."], serious: ["Serious and fatal bleeding [FDA]"] },
  monitor: ["Bleeding; platelets; ADAMTS13 [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CABLIVI (caplacizumab-yhdp) for injection — Genzyme (Sanofi), label effective 2026-04-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2348f06e-8004-4040-832e-e9e86a39f905"]],
  dose: { tagline: "Anti-vWF nanobody for acquired TTP with plasma exchange.",
    adult: [{ ind: "Acquired TTP", text: "Day 1: 11 mg IV before plasma exchange, then 11 mg SC after. Then 11 mg SC daily after each exchange, and for 30 days after the last exchange." }],
    child: [{ ind: "12 years and over", text: "As adults." }] }
});

/* ---------- CAPMATINIB (FDA TABRECTA, Novartis, NDA213591, eff. 2026-10-26) ---------- */
FDB_M("capmatinib", {
  inn: "Capmatinib", atc: "L01EX17", cls: "MET kinase inhibitor",
  linked: [["Metastatic NSCLC with MET exon 14 skipping", "Targeted therapy [FDA]", ""]],
  forms: ["Tablets 150 mg and 200 mg [NEP]."],
  moa: "Inhibits MET tyrosine kinase [NEP].",
  pk: ["Half-life about 6.5 h [FDA].", "Avoid strong/moderate CYP3A inducers [NEP]."],
  ind: { adult: ["Metastatic NSCLC with MET exon 14 skipping [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["MET exon 14 NSCLC", "400 mg twice daily, with or without food [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Photosensitivity — sun protection [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Oedema, nausea, musculoskeletal pain, fatigue, vomiting, dyspnoea, cough, decreased appetite [FDA]."], serious: ["Interstitial lung disease — stop permanently [FDA]", "Hepatotoxicity [FDA]", "Pancreatic toxicity [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["Liver tests, amylase/lipase; respiratory symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "capmatinib", indication_id: "std", label: "400 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 400, max_daily: 800, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "TABRECTA (capmatinib) tablets — Novartis, label effective 2026-10-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=455892c3-d144-4ba8-9ab4-79cabff9876d"]],
  dose: { tagline: "MET inhibitor tablet for MET exon 14-skipping lung cancer.",
    adult: [{ ind: "MET exon 14 metastatic NSCLC", text: "400 mg twice daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CAPTOPRIL (FDA tablets, ANDA074505; original CAPOTEN) ---------- */
FDB_M("captopril", {
  inn: "Captopril", atc: "C09AA01", cls: "ACE inhibitor (short-acting, sulfhydryl)",
  linked: [["Hypertension", "ACE inhibitor [FDA]", "htn-adult"], ["Heart failure", "With diuretics ± digoxin [FDA]", ""], ["LV dysfunction after myocardial infarction", "Survival benefit [FDA]", ""], ["Diabetic nephropathy (type 1, proteinuria >500 mg/day)", "Kidney protection [FDA]", ""]],
  forms: ["Tablets 12.5, 25, 50, 100 mg [NEP]."],
  moa: "Inhibits angiotensin-converting enzyme [NEP].",
  pk: ["Take 1 hour before meals [FDA].", "Half-life under 2–3 h; excreted by the kidneys — accumulates in kidney impairment [FDA].", "Removed by haemodialysis in adults; not by peritoneal dialysis [FDA]."],
  ind: { adult: ["Hypertension; heart failure; LV dysfunction after MI (EF ≤40%); diabetic nephropathy in type 1 diabetes with retinopathy [FDA]."], paed: ["Safety and effectiveness not established; infants and newborns are more sensitive to hypotension and oliguria [FDA]."] },
  adult: [["Hypertension", "25 mg two or three times daily; after 1–2 weeks may increase to 50 mg two or three times daily; usually not above 50 mg three times daily; maximum 450 mg/day [FDA]."], ["Heart failure", "25 mg three times daily (6.25–12.5 mg three times daily if volume-depleted or hypotensive); most respond to 50–100 mg three times daily; maximum 450 mg/day [FDA]."], ["After MI (from day 3)", "Test dose 6.25 mg, then 12.5 mg three times daily, rising to 25 mg three times daily and target 50 mg three times daily [FDA]."], ["Diabetic nephropathy", "25 mg three times daily [FDA]."]],
  paed: { tiers: ["Not established in the label; reported weight-based doses are comparable to or lower than adult doses [FDA].", "Newborns and infants: risk of excessive, prolonged hypotension, oliguria and seizures [FDA]."], transition: "Adult doses [FDA].", calcNote: "Fixed adult doses." },
  adj: { renal: "Significant impairment: lower starting dose, smaller increments, slow titration (1–2 week intervals); prefer a loop diuretic [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Boxed: stop when pregnancy is detected [FDA].", other: "Neutropenia/agranulocytosis risk, especially with kidney impairment and collagen vascular disease [FDA]." },
  tox: { human: "Hypotension [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "IV normal saline volume expansion; haemodialysis removes captopril in adults [FDA]." },
  contra: ["Hypersensitivity to captopril or any ACE inhibitor (e.g. prior angioedema) [FDA].", "With aliskiren in diabetes [FDA].", "With a neprilysin inhibitor (sacubitril) or within 36 h [FDA]."],
  ae: { common: ["Rash, taste disturbance, cough, proteinuria (about 1%) [NEP]."], serious: ["Angioedema (head/neck, intestinal) [FDA]", "Neutropenia/agranulocytosis [FDA]", "Hypotension; hyperkalaemia; kidney impairment [FDA]", "Fetal toxicity (boxed) [FDA]"] },
  monitor: ["WBC every 2 weeks for 3 months in kidney impairment/collagen disease [NEP].", "Urine protein, creatinine, potassium [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "captopril", indication_id: "htn", label: "Hypertension — 25 mg two or three times daily (max 450 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose", value_max: 50 }, interval_h: 8, divided_doses: 3, caps: { max_single: 150, max_daily: 450, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Half tablets", renal: [], renal_note: "Significant kidney impairment: lower starting dose and slow titration.", flags: [], sources: ["FDA"] },
    { drug: "captopril", indication_id: "hf", label: "Heart failure — 25 mg three times daily (6.25–12.5 mg if hypotensive)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 150, max_daily: 450, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Half/quarter tablets", renal: [], renal_note: "Significant kidney impairment: lower starting dose and slow titration.", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Captopril tablets USP (ANDA074505) — label effective 2026-11-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=65ed6e70-f1ee-437e-965c-d1b1fdadd832"]],
  dose: { tagline: "Short-acting ACE inhibitor for hypertension, heart failure, post-MI and diabetic nephropathy.",
    boxedTitle: "Fetal toxicity",
    boxed: "When pregnancy is detected, discontinue captopril tablets as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus.",
    adult: [
      { ind: "Hypertension", text: "25 mg two or three times daily 1 hour before meals; may raise to 50 mg two or three times daily. Maximum 450 mg a day.", calc: ["htn"] },
      { ind: "Heart failure", text: "25 mg three times daily (6.25–12.5 mg if volume-depleted or low BP); usual 50–100 mg three times daily.", calc: ["hf"] },
      { ind: "After MI (LVEF ≤40%)", text: "6.25 mg test dose, then 12.5 → 25 → 50 mg three times daily." },
      { ind: "Diabetic nephropathy", text: "25 mg three times daily." }
    ],
    child: [{ ind: "Children", text: "Not established in the label; newborns are very sensitive to hypotension." }] }
});

/* ---------- CARBACHOL (FDA MIOSTAT 0.01% intraocular, Alcon, NDA016968, eff. 2023-02-10) ---------- */
FDB_M("carbachol", {
  inn: "Carbachol", atc: "S01EB02", cls: "Cholinergic agonist (intraocular miotic)",
  linked: [["Miosis during eye surgery", "Intraocular [FDA]", ""]],
  forms: ["Intraocular solution 0.01% single-dose vial [FDA]."],
  moa: "Direct cholinergic agonist causing pupil constriction [NEP].",
  pk: ["Maximal miosis within 2–5 min [FDA]."],
  ind: { adult: ["Miosis during surgery; reduces IOP rise in the first 24 h after cataract surgery [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Intraocular", "No more than 0.5 mL gently instilled into the anterior chamber, before or after sutures [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Single intraocular dose." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Caution in heart failure, asthma, peptic ulcer, hyperthyroidism, GI spasm, urinary obstruction, Parkinson's [FDA]. Stopper contains latex [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Atropine for systemic cholinergic effects [NEP]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Systemic: flushing, sweating, epigastric distress, cramps, bladder tightness, headache [FDA]."], serious: ["Corneal clouding, bullous keratopathy, retinal detachment, iritis [FDA]"] },
  monitor: ["Post-operative IOP [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "MIOSTAT (carbachol intraocular solution) 0.01% — Alcon, label effective 2023-02-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f28d7a56-e079-4a8b-ad81-9a97c780de67"]],
  dose: { tagline: "Intraocular miotic used during cataract surgery.",
    adult: [{ ind: "Intra-operative miosis", text: "Up to 0.5 mL of 0.01% into the anterior chamber, once." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CARBAMAZEPINE (FDA TEGRETOL, Novartis, NDA018927, eff. 2026-08-20) ---------- */
FDB_M("carbamazepine", {
  inn: "Carbamazepine", atc: "N03AF01", cls: "Antiseizure medicine (iminostilbene, sodium-channel blocker)",
  linked: [["Focal and generalised tonic-clonic epilepsy", "Not for absence seizures [FDA]", "epilepsy-adult"], ["Trigeminal neuralgia", "First-line [FDA]", ""], ["Bipolar mania", "Extended-release capsule (EQUETRO) [NEP]", ""]],
  forms: ["Tablets 200 mg; chewable 100 mg; XR tablets 100, 200, 400 mg; suspension 100 mg/5 mL [FDA].", "Bhutan: 200 mg tablet [BT-NEML]."],
  moa: "Blocks voltage-gated sodium channels, reducing repetitive firing [NEP].",
  pk: ["Auto-induction: half-life 25–65 h at first, falling to 12–17 h on repeated doses [FDA].", "Target total plasma level 4–12 mcg/mL [FDA].", "Strong CYP3A4 inducer — many interactions [FDA]."],
  ind: { adult: ["Epilepsy: complex partial, generalised tonic-clonic and mixed seizures [FDA].", "Trigeminal neuralgia [FDA]."], paed: ["Epilepsy in children of all ages [FDA]."] },
  adult: [["Epilepsy (over 12 years)", "Start 200 mg twice daily (tablets/XR); increase weekly by up to 200 mg/day in 3–4 divided doses (XR twice daily). Usual maintenance 800–1200 mg/day. Do not usually exceed 1000 mg/day at 12–15 years and 1200 mg/day above 15 years [FDA]."], ["Trigeminal neuralgia", "Day 1: 100 mg twice daily; increase by up to 200 mg/day (100 mg every 12 h) only as needed. Usual 400–800 mg/day; maximum 1200 mg/day [FDA]."]],
  paed: { tiers: ["Under 6 years: 10–20 mg/kg/day in 2–3 doses (tablets) or 4 doses (suspension); increase weekly; usually below 35 mg/kg/day [FDA].", "6–12 years: 100 mg twice daily; increase weekly by up to 100 mg/day; usual 400–800 mg/day; maximum 1000 mg/day [FDA]."], transition: "Adult dosing from 12 years [FDA].", calcNote: "Starting doses; titrate weekly to response and levels." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Use with caution; hepatic failure reported — stop if liver dysfunction appears [FDA].", preg: "Can cause fetal harm, including spina bifida [FDA].", other: "Screen for HLA-B*1502 in patients of Asian ancestry before starting [FDA]." },
  tox: { human: "Lowest known lethal dose: adults 3.2 g; children 1.6 g (3-year-old) [FDA].", animal: "Oral LD50: mice 1100–3750 mg/kg; rats 3850–4025 mg/kg [FDA].", manage: "Supportive; activated charcoal; monitor ECG, breathing and for delayed absorption [FDA]." },
  contra: ["History of bone marrow depression [FDA].", "Hypersensitivity to carbamazepine or tricyclic compounds [FDA].", "With MAO inhibitors, or within 14 days of them [FDA].", "With nefazodone [FDA]."],
  ae: { common: ["Dizziness, drowsiness, unsteadiness, nausea, vomiting [FDA]."], serious: ["SJS/TEN (boxed) [FDA]", "Aplastic anaemia and agranulocytosis (boxed) [FDA]", "DRESS; hyponatraemia (SIADH); hepatic failure; AV block [FDA]", "Suicidal thoughts (antiepileptic class) [FDA]"] },
  monitor: ["Baseline full blood count and liver tests; levels 4–12 mcg/mL; sodium [FDA]."],
  local: { neml: "Carbamazepine 200 mg tablet [BT-NEML].", strengths: "200 mg tablet.", stg: "Listed in Bhutan STG 2024 (interaction context) [BT-STG]." },
  calc: [
    { drug: "carbamazepine", indication_id: "u6", label: "Epilepsy, under 6 years — start 10–20 mg/kg/day in 2–3 doses", route: "PO", population: { min_age_months: 0, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "day", value_max: 20 }, interval_h: 8, divided_doses: 3, caps: { adult_ceiling_daily: 1000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 20, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "carbamazepine", indication_id: "c612", label: "Epilepsy, 6–12 years — start 100 mg twice daily", route: "PO", population: { min_age_months: 72, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "carbamazepine", indication_id: "adult", label: "Epilepsy, over 12 years — start 200 mg twice daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["12–15 years: usually not above 1000 mg/day"], sources: ["FDA"] },
    { drug: "carbamazepine", indication_id: "tn", label: "Trigeminal neuralgia — day 1: 100 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TEGRETOL / TEGRETOL-XR (carbamazepine) — Novartis, label effective 2026-08-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8d409411-aa9f-4f3a-a52c-fbcb0c3ec053"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Sodium-channel antiseizure medicine for focal/tonic-clonic epilepsy and trigeminal neuralgia.",
    boxedTitle: "Serious dermatologic reactions and HLA-B*1502 allele; aplastic anaemia and agranulocytosis",
    boxed: "Serious and sometimes fatal dermatologic reactions, including toxic epidermal necrolysis (TEN) and Stevens-Johnson syndrome (SJS), have been reported during treatment with Tegretol. … Patients with ancestry in genetically at-risk populations should be screened for the presence of HLA-B*1502 prior to initiating treatment with Tegretol. Patients testing positive for the allele should not be treated with Tegretol unless the benefit clearly outweighs the risk. Aplastic anemia and agranulocytosis have been reported in association with the use of Tegretol. … Complete pretreatment hematological testing should be obtained as a baseline.",
    adult: [
      { ind: "Epilepsy (over 12 years)", text: "Start 200 mg twice daily; increase weekly by up to 200 mg/day. Usual 800–1200 mg/day; usually not above 1200 mg/day (1000 mg/day at 12–15 years).", calc: ["adult"] },
      { ind: "Trigeminal neuralgia", text: "100 mg twice daily on day 1; increase only as needed. Usual 400–800 mg/day; maximum 1200 mg/day.", calc: ["tn"] }
    ],
    child: [
      { ind: "Under 6 years", text: "10–20 mg/kg/day in 2–3 doses; increase weekly; usually below 35 mg/kg/day.", calc: ["u6"] },
      { ind: "6–12 years", text: "100 mg twice daily; increase weekly by up to 100 mg/day; maximum 1000 mg/day.", calc: ["c612"] }
    ] }
});

/* ---------- CARBINOXAMINE (FDA ER oral suspension, Neos, NDA022556, eff. 2026-03-12) ---------- */
FDB_M("carbinoxamine", {
  inn: "Carbinoxamine", atc: "R06AA08", cls: "First-generation H1 antihistamine (ethanolamine)",
  linked: [["Allergic rhinitis and urticaria", "Sedating antihistamine [FDA]", ""]],
  forms: ["Extended-release oral suspension 4 mg/5 mL [FDA].", "Tablets 4 mg and 6 mg; oral solution 4 mg/5 mL [NEP]."],
  moa: "H1 receptor antagonist with anticholinergic and sedative effects [FDA].",
  pk: ["Half-life about 17 h [FDA]."],
  ind: { adult: ["Seasonal/perennial/vasomotor rhinitis, allergic conjunctivitis, mild urticaria and angioedema, dermatographism; adjunct after acute anaphylaxis is controlled; reactions to blood or plasma [FDA]."], paed: ["2 years and over [FDA]."] },
  adult: [["Adults and 12 years and over", "6–16 mg (7.5–20 mL ER suspension) every 12 hours [FDA]."]],
  paed: { tiers: ["Under 2 years: contraindicated — deaths reported [FDA].", "2–3 years: 3–4 mg (3.75–5 mL) every 12 h [FDA].", "4–5 years: 3–8 mg (3.75–10 mL) every 12 h [FDA].", "6–11 years: 6–12 mg (7.5–15 mL) every 12 h [FDA]."], transition: "Adult dose from 12 years [FDA].", calcNote: "Age bands from the ER suspension label (about 0.2–0.4 mg/kg/day)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "No identified drug-associated risk in decades of antihistamine use [FDA].", other: "Elderly: start low; watch for confusion and over-sedation [FDA]. Contains sodium metabisulfite [FDA]." },
  tox: { human: "CNS depression or stimulation, hallucinations, convulsions, death; atropine-like signs [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; monitor vital signs and ECG; do not induce vomiting [FDA]." },
  contra: ["Children under 2 years [FDA].", "Hypersensitivity to carbinoxamine or ingredients [FDA].", "Patients taking MAO inhibitors [FDA]."],
  ae: { common: ["Sedation, sleepiness, dizziness, disturbed coordination, epigastric distress, thick bronchial secretions [FDA]."], serious: ["Paediatric deaths under 2 years [FDA]", "Sulfite anaphylaxis [FDA]"] },
  monitor: ["Sedation [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "carbinoxamine", indication_id: "c23", label: "2–3 years — 3–4 mg every 12 h", route: "PO", population: { min_age_months: 24, max_age_months: 48, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 3, unit: "mg", per: "dose", value_max: 4 }, interval_h: 12, divided_doses: 2, caps: { max_single: 4, max_daily: 8, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "ER susp", strength: 0.8, unit: "mg/mL" }], rounding: "Nearest 0.25 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "carbinoxamine", indication_id: "c45", label: "4–5 years — 3–8 mg every 12 h", route: "PO", population: { min_age_months: 48, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 3, unit: "mg", per: "dose", value_max: 8 }, interval_h: 12, divided_doses: 2, caps: { max_single: 8, max_daily: 16, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "ER susp", strength: 0.8, unit: "mg/mL" }], rounding: "Nearest 0.25 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "carbinoxamine", indication_id: "c611", label: "6–11 years — 6–12 mg every 12 h", route: "PO", population: { min_age_months: 72, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 6, unit: "mg", per: "dose", value_max: 12 }, interval_h: 12, divided_doses: 2, caps: { max_single: 12, max_daily: 24, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "ER susp", strength: 0.8, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "carbinoxamine", indication_id: "adult", label: "12 years and over — 6–16 mg every 12 h", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 6, unit: "mg", per: "dose", value_max: 16 }, interval_h: 12, divided_doses: 2, caps: { max_single: 16, max_daily: 32, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "ER susp", strength: 0.8, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Carbinoxamine maleate extended-release oral suspension — Neos Therapeutics, label effective 2026-03-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=199f46e5-6288-5627-e063-6294a90ae086"]],
  dose: { tagline: "Sedating antihistamine; never under 2 years of age.",
    adult: [{ ind: "Allergic conditions (12 years and over)", text: "6–16 mg (ER suspension 7.5–20 mL) every 12 hours.", calc: ["adult"] }],
    child: [
      { ind: "Under 2 years", text: "Contraindicated — deaths reported." },
      { ind: "2–3 years", text: "3–4 mg (3.75–5 mL) every 12 hours.", calc: ["c23"] },
      { ind: "4–5 years", text: "3–8 mg (3.75–10 mL) every 12 hours.", calc: ["c45"] },
      { ind: "6–11 years", text: "6–12 mg (7.5–15 mL) every 12 hours.", calc: ["c611"] }
    ] }
});

/* ---------- CARBOPLATIN (FDA carboplatin injection, Teva, ANDA077269; original PARAPLATIN discontinued) ---------- */
FDB_M("carboplatin", {
  inn: "Carboplatin", atc: "L01XA02", cls: "Platinum alkylating-like antineoplastic",
  linked: [["Advanced ovarian carcinoma", "With cyclophosphamide (label); widely used with paclitaxel [FDA]", "ovarian-adult"]],
  forms: ["Injection 10 mg/mL: 50, 150, 450, 600 mg vials [FDA]."],
  moa: "Forms platinum–DNA cross-links that block DNA replication [FDA].",
  pk: ["Mainly excreted by the kidneys — dose by kidney function [FDA].", "Platinum bound to plasma proteins: half-life at least 5 days [FDA]."],
  ind: { adult: ["Initial treatment of advanced ovarian carcinoma with other agents; recurrent ovarian carcinoma as single agent [FDA]."], paed: ["Safety and effectiveness not established [FDA]."] },
  adult: [["Ovarian cancer — with cyclophosphamide", "300 mg/m² IV on day 1 every 4 weeks for 6 cycles [FDA]."], ["Recurrent ovarian cancer — single agent", "360 mg/m² IV on day 1 every 4 weeks [FDA]."], ["Formula (Calvert) dosing", "Total dose (mg) = target AUC (mg/mL·min) × (GFR + 25); usual target AUC 4–6 [FDA]."], ["Repeat only when", "Neutrophils at least 2,000/mm³ and platelets at least 100,000/mm³ [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "BSA dosing; needs height." },
  adj: { renal: "Single agent, CrCl 41–59: 250 mg/m²; CrCl 16–40: 200 mg/m²; below 15: no recommendation [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [FDA].", other: "Avoid aluminium needles/sets — carboplatin reacts with aluminium [FDA]. Avoid aminoglycosides [FDA]." },
  tox: { human: "Bone marrow suppression and liver toxicity; vision loss at high doses [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No known antidote; supportive care [FDA]." },
  contra: ["History of severe allergic reaction to carboplatin or platinum compounds [FDA].", "Severe bone marrow depression or significant bleeding [FDA]."],
  ae: { common: ["Myelosuppression, nausea and vomiting, peripheral neuropathy, electrolyte loss (Mg, K, Ca) [FDA]."], serious: ["Severe bone marrow suppression (boxed) [FDA]", "Anaphylaxis within minutes (boxed) [FDA]", "Ototoxicity [FDA]"] },
  monitor: ["Full blood count before each cycle and weekly; electrolytes; creatinine [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "carboplatin", indication_id: "combo", label: "With cyclophosphamide — 300 mg/m² every 4 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], renal_note: "Kidney impairment raises the risk of severe marrow suppression; consider formula (AUC) dosing", flags: [], sources: ["FDA"] },
    { drug: "carboplatin", indication_id: "single", label: "Single agent — 360 mg/m² every 4 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 360, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "Nearest mg", renal: [{ crcl_min: 41, crcl_max: 59.999, action: "reduce_dose", set_value: 250 }, { crcl_min: 16, crcl_max: 40.999, action: "reduce_dose", set_value: 200 }, { crcl_min: 0, crcl_max: 15.999, action: "avoid", note: "data too limited for a recommendation below 16 mL/min" }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Carboplatin injection — Teva Parenteral Medicines (ANDA077269), label effective 2022-08-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e176b6ef-2ff6-498b-a9d8-7a634d147f37"]],
  dose: { tagline: "Platinum chemotherapy dosed by BSA or by target AUC and kidney function.",
    boxedTitle: "Warning",
    boxed: "Carboplatin injection 10 mg/mL should be administered under the supervision of a qualified physician experienced in the use of cancer chemotherapeutic agents. Appropriate management of therapy and complications is possible only when adequate treatment facilities are readily available. Bone marrow suppression is dose related and may be severe, resulting in infection and/or bleeding. Anemia may be cumulative and may require transfusion support. Vomiting is another frequent drug related side effect. Anaphylactic-like reactions to carboplatin have been reported and may occur within minutes of carboplatin injection administration. Epinephrine, corticosteroids, and antihistamines have been employed to alleviate symptoms.",
    adult: [
      { ind: "Advanced ovarian cancer (with cyclophosphamide)", text: "300 mg/m² IV on day 1 every 4 weeks for 6 cycles — or AUC dosing.", calc: ["combo"] },
      { ind: "Recurrent ovarian cancer (single agent)", text: "360 mg/m² IV every 4 weeks; kidney impairment: 250 mg/m² (CrCl 41–59) or 200 mg/m² (CrCl 16–40).", calc: ["single"] },
      { ind: "AUC (Calvert) dosing", text: "Dose in mg = target AUC × (GFR + 25); usual AUC 4–6." }
    ],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CARBOPROST (FDA HEMABATE, Pfizer, NDA017989, eff. 2026-03-30) ---------- */
FDB_M("carboprost", {
  inn: "Carboprost", atc: "G02AD04", cls: "Prostaglandin F2α analogue (oxytocic)",
  linked: [["Postpartum haemorrhage from uterine atony", "When usual methods fail [FDA]", "pph-preg"], ["Second-trimester abortion (13–20 weeks)", "Hospital use [FDA]", ""]],
  forms: ["Injection 250 micrograms/mL (1 mL ampoule) — refrigerate [FDA]."],
  moa: "Stimulates myometrial contraction [NEP].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Postpartum haemorrhage from uterine atony not controlled by conventional methods [FDA].", "Abortion between 13 and 20 weeks and related conditions [FDA]."], paed: ["Not applicable. [NEP]"] },
  adult: [["Refractory postpartum bleeding", "250 micrograms (1 mL) deep IM; repeat at 15–90 minute intervals if needed; total not more than 2 mg (8 doses) [FDA]."], ["Abortion", "250 micrograms deep IM, then 250 micrograms every 1½–3½ h; may increase to 500 micrograms; total not more than 12 mg, nor for more than 2 days [FDA]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "—", calcNote: "Fixed IM doses." },
  adj: { renal: "Contraindicated in active kidney disease [FDA].", hepatic: "Contraindicated in active liver disease [FDA].", preg: "Not for a viable fetus [FDA].", other: "Caution in asthma, hypo/hypertension, anaemia, diabetes, epilepsy, scarred uterus [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity, including anaphylaxis and angioedema [FDA].", "Acute pelvic inflammatory disease [FDA].", "Active cardiac, pulmonary, renal or hepatic disease [FDA]."],
  ae: { common: ["Vomiting and diarrhoea (about two-thirds), nausea, fever, flushing [FDA]."], serious: ["Bronchospasm in asthma [NEP]", "Hypertension [NEP]"] },
  monitor: ["Blood loss, uterine tone, BP, oxygen saturation [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "HEMABATE (carboprost tromethamine) injection — Pharmacia & Upjohn (Pfizer), label effective 2026-03-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3d282998-ff0c-480a-bd80-155606ef0a65"]],
  dose: { tagline: "IM prostaglandin for refractory postpartum haemorrhage; avoid in asthma.",
    boxedTitle: "Warnings",
    boxed: "HEMABATE Sterile Solution (carboprost tromethamine), like other potent oxytocic agents, should be used only with strict adherence to recommended dosages. HEMABATE should be used by medically trained personnel in a hospital which can provide immediate intensive care and acute surgical facilities.",
    adult: [
      { ind: "Postpartum haemorrhage (uterine atony)", text: "250 micrograms (1 mL) deep IM; repeat every 15–90 min if needed. Maximum 2 mg (8 doses)." },
      { ind: "Abortion (13–20 weeks)", text: "250 micrograms deep IM every 1½–3½ h (up to 500 micrograms). Maximum 12 mg; not more than 2 days." }
    ],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- CARFILZOMIB (FDA KYPROLIS, Onyx/Amgen, NDA202714, eff. 2025-06-18) ---------- */
FDB_M("carfilzomib", {
  inn: "Carfilzomib", atc: "L01XG02", cls: "Proteasome inhibitor (irreversible)",
  linked: [["Relapsed or refractory multiple myeloma", "Alone or with dexamethasone ± lenalidomide, daratumumab or isatuximab [FDA]", ""]],
  forms: ["Powder for injection 10, 30, 60 mg vials [FDA]."],
  moa: "Irreversibly binds the 20S proteasome [FDA].",
  pk: ["Half-life 1 hour or less [FDA]."],
  ind: { adult: ["Relapsed/refractory multiple myeloma after 1–3 lines (combinations) or 1 or more lines (single agent) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Once weekly 20/70 mg/m² (30-min infusion)", "20 mg/m² on cycle 1 day 1, then 70 mg/m² on days 8 and 15, then days 1, 8, 15 of each 28-day cycle (Kd, DKd) [FDA]."], ["Twice weekly 20/56 mg/m² (30-min infusion)", "20 mg/m² days 1–2 of cycle 1, then 56 mg/m² (Kd, DKd, Isa-Kd, monotherapy) [FDA]."], ["Twice weekly 20/27 mg/m² (10-min infusion)", "20 mg/m² days 1–2 of cycle 1, then 27 mg/m² (KRd, monotherapy) [FDA]."], ["BSA", "Use actual BSA; if above 2.2 m², dose on 2.2 m² [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "BSA dosing capped at 2.2 m²; needs height." },
  adj: { renal: "No starting dose change; on dialysis give after the session [FDA].", hepatic: "Mild or moderate impairment: reduce dose by 25% [FDA].", preg: "Can cause fetal harm [FDA].", other: "Hydrate before cycle 1 doses; premedicate with dexamethasone; thromboprophylaxis recommended [FDA]." },
  tox: { human: "200 mg in error: chills, hypotension, renal insufficiency, thrombocytopenia, lymphopenia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No specific antidote; supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Anaemia, diarrhoea, fatigue, hypertension, pyrexia, upper respiratory infection, thrombocytopenia, cough, dyspnoea, insomnia [NEP]."], serious: ["Cardiac failure and ischaemia [FDA]", "Acute renal failure; tumour lysis syndrome [FDA]", "Pulmonary toxicity and pulmonary hypertension [FDA]", "Hypertensive crisis; venous thrombosis; haemorrhage [FDA]", "Hepatotoxicity; TMA; PRES; PML [FDA]"] },
  monitor: ["BP, creatinine, platelets, potassium, uric acid; cardiac and respiratory symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "carfilzomib", indication_id: "start", label: "Cycle 1 start dose — 20 mg/m² (BSA capped at 2.2 m²)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 44, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj (reconstituted)", strength: 2, unit: "mg/mL" }], rounding: "Nearest 0.1 mg", renal: [], flags: [], sources: ["FDA"] },
    { drug: "carfilzomib", indication_id: "w70", label: "Once weekly — 70 mg/m² (BSA capped at 2.2 m²)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 70, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: { max_single: 154, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj (reconstituted)", strength: 2, unit: "mg/mL" }], rounding: "Nearest 0.1 mg", renal: [], flags: [], sources: ["FDA"] },
    { drug: "carfilzomib", indication_id: "t56", label: "Twice weekly — 56 mg/m² (BSA capped at 2.2 m²)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 56, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 123.2, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj (reconstituted)", strength: 2, unit: "mg/mL" }], rounding: "Nearest 0.1 mg", renal: [], flags: [], sources: ["FDA"] },
    { drug: "carfilzomib", indication_id: "t27", label: "Twice weekly — 27 mg/m² (BSA capped at 2.2 m²)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 27, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 59.4, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj (reconstituted)", strength: 2, unit: "mg/mL" }], rounding: "Nearest 0.1 mg", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "KYPROLIS (carfilzomib) for injection — Onyx Pharmaceuticals (Amgen), label effective 2025-06-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea66eb30-e665-4693-99a1-a9d3b4bbe2d6"]],
  dose: { tagline: "IV proteasome inhibitor for relapsed myeloma; BSA dosing capped at 2.2 m².",
    adult: [
      { ind: "Cycle 1 days 1 (and 2)", text: "20 mg/m² for the first doses.", calc: ["start"] },
      { ind: "Once weekly regimen (Kd, DKd)", text: "70 mg/m² over 30 min on days 8 and 15 of cycle 1, then days 1, 8, 15 every 28 days.", calc: ["w70"] },
      { ind: "Twice weekly 56 mg/m² (Kd, DKd, Isa-Kd, alone)", text: "56 mg/m² over 30 min, days 1, 2, 8, 9, 15, 16.", calc: ["t56"] },
      { ind: "Twice weekly 27 mg/m² (KRd, alone)", text: "27 mg/m² over 10 min, days 1, 2, 8, 9, 15, 16.", calc: ["t27"] }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CARGLUMIC ACID (FDA CARBAGLU, Recordati, NDA022562, eff. 2024-01-25) ---------- */
FDB_M("carglumic-acid", {
  inn: "Carglumic acid", atc: "A16AA05", cls: "Carbamoyl phosphate synthetase 1 (CPS1) activator",
  linked: [["Hyperammonaemia due to NAGS deficiency", "Acute and chronic [FDA]", ""], ["Acute hyperammonaemia in propionic or methylmalonic acidaemia", "With other ammonia-lowering therapy [FDA]", ""]],
  forms: ["Tablets for oral suspension 200 mg, scored into quarters (50 mg) [FDA]."],
  moa: "Synthetic analogue of N-acetylglutamate; activates CPS1 in the urea cycle [FDA].",
  pk: ["Half-life about 25–31 h [FDA].", "Disperse in water; do not swallow whole or crush; give just before meals or feeds; can be given by NG or gastrostomy tube [FDA]."],
  ind: { adult: ["Acute hyperammonaemia (adjunct) and chronic maintenance in NAGS deficiency [FDA].", "Acute hyperammonaemia due to PA or MMA (adjunct) [FDA]."], paed: ["All ages, from birth [FDA]."] },
  adult: [["NAGS deficiency — acute", "100–250 mg/kg/day in 2–4 divided doses [FDA]."], ["NAGS deficiency — chronic", "10–100 mg/kg/day in 2–4 divided doses; titrate to normal ammonia for age [FDA]."], ["PA or MMA — acute", "15 kg or less: 150 mg/kg/day; over 15 kg: 3.3 g/m²/day; in 2 equal doses 12 h apart, rounded up to the nearest 50 mg; until ammonia below 50 micromol/L, maximum 7 days [FDA]."]],
  paed: { tiers: ["Same mg/kg and g/m² doses as adults [FDA]."], transition: "Same dosing at all ages [FDA].", calcNote: "Actual body weight; doses rounded up to the nearest 50 mg (quarter tablet)." },
  adj: { renal: "eGFR 60–89: no change. eGFR 30–59: NAGS acute 50–125 mg/kg/day, chronic 5–50 mg/kg/day; PA/MMA 75 mg/kg/day (≤15 kg) or 1.7 g/m²/day (>15 kg). eGFR 15–29: NAGS acute 15–60 mg/kg/day, chronic 2–25 mg/kg/day; PA/MMA 25 mg/kg/day (≤15 kg) or 0.55 g/m²/day (>15 kg) [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Monitor plasma ammonia closely [FDA]." },
  tox: { human: "650 mg/kg/day: MSG-like syndrome — tachycardia, sweating, bronchial secretions, fever, restlessness; resolved on dose reduction [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce the dose [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["NAGS: infections, vomiting, abdominal pain, fever, tonsillitis, anaemia; PA/MMA: neutropenia, anaemia, vomiting, electrolyte imbalance, decreased appetite, hypoglycaemia, lethargy [NEP]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Plasma ammonia [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "carglumic-acid", indication_id: "pa15", label: "PA/MMA acute, 15 kg or less — 150 mg/kg/day in 2 doses", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: 15.0001 }, basis: "mg_per_kg", dose: { value: 150, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", round_to: 50, round_mode: "up", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Up to nearest 50 mg (quarter tablet)", renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", set_value: 75 }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 25 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "the label gives no dose below eGFR 15 mL/min/1.73 m²" }], renal_note: "Label bands use eGFR (mL/min/1.73 m²)", flags: ["Maximum 7 days"], sources: ["FDA"] },
    { drug: "carglumic-acid", indication_id: "pa16", label: "PA/MMA acute, over 15 kg — 3.3 g/m²/day in 2 doses", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 15.0001, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 3300, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", round_to: 50, round_mode: "up", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Up to nearest 50 mg (quarter tablet)", renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", set_value: 1700 }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 550 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "the label gives no dose below eGFR 15 mL/min/1.73 m²" }], renal_note: "Label bands use eGFR (mL/min/1.73 m²)", flags: ["Maximum 7 days"], sources: ["FDA"] },
    { drug: "carglumic-acid", indication_id: "nags", label: "NAGS deficiency, acute — 100–250 mg/kg/day in 2 doses", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 100, unit: "mg", per: "day", value_max: 250 }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Quarter tablets (50 mg)", renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", set_value: 50, set_value_max: 125 }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 15, set_value_max: 60 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "the label gives no dose below eGFR 15 mL/min/1.73 m²" }], renal_note: "Label bands use eGFR (mL/min/1.73 m²); renal doses rounded to the nearest 50 mg", flags: ["Can be split into 2–4 doses"], sources: ["FDA"] }
  ],
  sources: [["FDA", "CARBAGLU (carglumic acid) tablets for oral suspension — Recordati Rare Diseases, label effective 2024-01-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=10175e73-5172-4dde-a508-8a88b7afc0a1"]],
  dose: { tagline: "Urea-cycle activator for NAGS deficiency and acute PA/MMA hyperammonaemia.",
    adult: [
      { ind: "NAGS deficiency, acute", text: "100–250 mg/kg/day in 2–4 doses.", calc: ["nags"] },
      { ind: "NAGS deficiency, chronic", text: "10–100 mg/kg/day in 2–4 doses; titrate to normal ammonia." },
      { ind: "PA or MMA, acute (15 kg or less)", text: "150 mg/kg/day in 2 doses 12 h apart, rounded up to 50 mg; maximum 7 days.", calc: ["pa15"] },
      { ind: "PA or MMA, acute (over 15 kg)", text: "3.3 g/m²/day in 2 doses 12 h apart, rounded up to 50 mg; maximum 7 days.", calc: ["pa16"] }
    ],
    child: [{ ind: "All ages", text: "Same doses as adults (mg/kg or g/m²).", calc: ["nags", "pa15", "pa16"] }] }
});

/* ---------- CARIPRAZINE (FDA VRAYLAR, AbbVie, NDA204370) ---------- */
FDB_M("cariprazine", {
  inn: "Cariprazine", atc: "N05AX15", cls: "Atypical antipsychotic (D3/D2 partial agonist)",
  linked: [["Schizophrenia", "Antipsychotic [FDA]", "psychosis-adult"], ["Bipolar I disorder — mania and depression", "[FDA]", ""], ["Major depressive disorder — adjunct", "Add-on to antidepressant [FDA]", ""]],
  forms: ["Capsules 1.5, 3, 4.5, 6 mg (and lower strengths) [FDA]."],
  moa: "Partial agonist at dopamine D3/D2 and serotonin 5-HT1A receptors; 5-HT2A antagonist [NEP].",
  pk: ["Very long half-life of cariprazine and its active metabolites — dose changes take several weeks to show in plasma [FDA].", "Strong CYP3A4 inhibitors: halve the dose; CYP3A4 inducers: not recommended [FDA]."],
  ind: { adult: ["Schizophrenia; bipolar I mania/mixed; bipolar depression; MDD adjunct [FDA]."], paed: ["Schizophrenia 13 years and over; bipolar mania 10 years and over [FDA]."] },
  adult: [["Schizophrenia", "Start 1.5 mg once daily; 1.5–6 mg daily; maximum 6 mg [FDA]."], ["Bipolar mania", "Start 1.5 mg; usual 3–6 mg daily; maximum 6 mg [FDA]."], ["Bipolar depression", "Start 1.5 mg; 1.5 or 3 mg daily; maximum 3 mg [FDA]."], ["MDD adjunct", "Start 1.5 mg; 1.5 or 3 mg daily; maximum 3 mg [FDA]."]],
  paed: { tiers: ["Schizophrenia 13–17 years: start 0.5 mg; 1.5–4.5 mg daily; maximum 4.5 mg [FDA].", "Bipolar mania 10–17 years: start 0.5 mg; 3 or 4.5 mg daily; maximum 4.5 mg [FDA]."], transition: "Adult dosing from 18 years [FDA].", calcNote: "Fixed once-daily doses." },
  adj: { renal: "CrCl 30 or more: no change; below 30: not recommended (not studied) [FDA].", hepatic: "Child-Pugh 5–9: no change; 10–15: not recommended [FDA].", preg: "Neonatal extrapyramidal/withdrawal symptoms with third-trimester use [NEP].", other: "Monitor for late adverse reactions for several weeks after start or dose change [FDA]." },
  tox: { human: "48 mg/day accidental: orthostasis and sedation, full recovery [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No specific antidote; supportive care [FDA]." },
  contra: ["Hypersensitivity to cariprazine [FDA]."],
  ae: { common: ["Extrapyramidal symptoms and akathisia, nausea, insomnia, sedation, weight gain [NEP]."], serious: ["Increased mortality in elderly dementia psychosis (boxed) [FDA]", "Suicidal thoughts (boxed) [FDA]", "Neuroleptic malignant syndrome; tardive dyskinesia [FDA]", "Leukopenia/agranulocytosis; metabolic changes [FDA]"] },
  monitor: ["Glucose, lipids, weight; CBC if low WBC history [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cariprazine", indication_id: "scz", label: "Schizophrenia — 1.5–6 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1.5, unit: "mg", per: "dose", value_max: 6 }, interval_h: 24, divided_doses: 1, caps: { max_single: 6, max_daily: 6, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 1.5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "not recommended below CrCl 30 mL/min (not studied)" }], flags: [], sources: ["FDA"] },
    { drug: "cariprazine", indication_id: "bpd", label: "Bipolar depression / MDD adjunct — 1.5–3 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1.5, unit: "mg", per: "dose", value_max: 3 }, interval_h: 24, divided_doses: 1, caps: { max_single: 3, max_daily: 3, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 1.5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "not recommended below CrCl 30 mL/min (not studied)" }], flags: [], sources: ["FDA"] },
    { drug: "cariprazine", indication_id: "ped", label: "Children (schizophrenia 13–17 y, mania 10–17 y) — start 0.5 mg, maximum 4.5 mg daily", route: "PO", population: { min_age_months: 120, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose", value_max: 4.5 }, interval_h: 24, divided_doses: 1, caps: { max_single: 4.5, max_daily: 4.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 1.5, unit: "mg/cap" }], rounding: "Capsule strengths", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "not recommended below CrCl 30 mL/min (not studied)" }], flags: ["Schizophrenia only from 13 years"], sources: ["FDA"] }
  ],
  sources: [["FDA", "VRAYLAR (cariprazine) capsules — AbbVie (repackager listing), label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3435ec73-86ed-46d1-bd1f-ee6c30209123"]],
  dose: { tagline: "Once-daily D3/D2 partial-agonist antipsychotic with a very long half-life.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis and suicidal thoughts and behaviors",
    boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. VRAYLAR is not approved for the treatment of patients with dementia-related psychosis. Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for the emergence of suicidal thoughts and behaviors.",
    adult: [
      { ind: "Schizophrenia", text: "Start 1.5 mg once daily; 1.5–6 mg daily. Maximum 6 mg.", calc: ["scz"] },
      { ind: "Bipolar mania", text: "Start 1.5 mg once daily; usual 3–6 mg. Maximum 6 mg.", calc: ["scz"] },
      { ind: "Bipolar depression; MDD add-on", text: "Start 1.5 mg once daily; 1.5 or 3 mg. Maximum 3 mg.", calc: ["bpd"] }
    ],
    child: [
      { ind: "Schizophrenia (13–17 years)", text: "Start 0.5 mg once daily; 1.5–4.5 mg. Maximum 4.5 mg.", calc: ["ped"] },
      { ind: "Bipolar mania (10–17 years)", text: "Start 0.5 mg once daily; 3 or 4.5 mg. Maximum 4.5 mg.", calc: ["ped"] }
    ] }
});

/* ---------- CARISOPRODOL (FDA SOMA, Viatris, NDA011792, eff. 2025-08-29) ---------- */
FDB_M("carisoprodol", {
  inn: "Carisoprodol", atc: "M03BA02", cls: "Centrally acting muscle relaxant (carbamate; schedule IV in US)",
  linked: [["Acute painful musculoskeletal conditions", "Short-term only [FDA]", ""]],
  forms: ["Tablets 250 mg and 350 mg [FDA]."],
  moa: "Central muscle relaxant; active metabolite meprobamate is anxiolytic and sedative [NEP].",
  pk: ["Half-life about 2 h; meprobamate about 10 h [FDA].", "CYP2C19 poor metabolisers have higher exposure [FDA]."],
  ind: { adult: ["Discomfort from acute, painful musculoskeletal conditions in adults; up to 2–3 weeks [FDA]."], paed: ["Not established below 16 years [FDA]."] },
  adult: [["Acute musculoskeletal pain", "250–350 mg three times a day and at bedtime; maximum duration 2–3 weeks [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose four times a day." },
  adj: { renal: "Use with caution (not studied) [FDA].", hepatic: "Use with caution (not studied) [FDA].", preg: "Not established in primary source. [NEP]", other: "Abuse, dependence and withdrawal; additive sedation with alcohol, benzodiazepines, opioids [FDA]." },
  tox: { human: "CNS depression, coma, respiratory depression, hypotension, seizures; serotonin syndrome reported [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; consider multiple-drug involvement [FDA]." },
  contra: ["Acute intermittent porphyria [FDA].", "Hypersensitivity to a carbamate such as meprobamate [FDA]."],
  ae: { common: ["Drowsiness, dizziness, headache [FDA]."], serious: ["Abuse and dependence; withdrawal [FDA]", "Seizures [FDA]"] },
  monitor: ["Sedation; misuse [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "carisoprodol", indication_id: "std", label: "250–350 mg three times a day and at bedtime", route: "PO", population: { min_age_months: 192, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose", value_max: 350 }, interval_h: 6, divided_doses: 4, caps: { max_single: 350, max_daily: 1400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 350, unit: "mg/tab" }], rounding: "Whole tablets (250 or 350 mg)", renal: [], renal_note: "Kidney impairment: use with caution", flags: ["Maximum 2–3 weeks"], sources: ["FDA"] }],
  sources: [["FDA", "SOMA (carisoprodol) tablets — Viatris Specialty, label effective 2025-08-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6297cf20-830a-11dc-94c8-0002a5d5c51b"]],
  dose: { tagline: "Sedating muscle relaxant for short-term acute back and muscle pain; misuse risk.",
    adult: [{ ind: "Acute musculoskeletal pain", text: "250–350 mg three times a day and at bedtime, for up to 2–3 weeks.", calc: ["std"] }],
    child: [{ ind: "Under 16 years", text: "Not established." }] }
});

/* ---------- CARMUSTINE (FDA carmustine for injection, NDA017422; original BiCNU) ---------- */
FDB_M("carmustine", {
  inn: "Carmustine", atc: "L01AD01", cls: "Nitrosourea alkylating agent",
  linked: [["Brain tumours (glioblastoma, glioma, medulloblastoma, metastases)", "Palliative [FDA]", ""], ["Multiple myeloma", "With prednisone [FDA]", ""], ["Relapsed Hodgkin and non-Hodgkin lymphoma", "Combination therapy [FDA]", ""]],
  forms: ["Powder for injection 100 mg with 3 mL dehydrated alcohol diluent [FDA].", "Implantable wafer 7.7 mg (GLIADEL) [NEP]."],
  moa: "Alkylates and cross-links DNA and RNA; carbamoylates proteins [NEP].",
  pk: ["Half-life 15–75 minutes after IV infusion; crosses the blood–brain barrier [FDA]."],
  ind: { adult: ["Palliative therapy: brain tumours; multiple myeloma with prednisone; relapsed/refractory Hodgkin and non-Hodgkin lymphoma [FDA]."], paed: ["Safety and effectiveness not established; high risk of delayed pulmonary toxicity in children [FDA]."] },
  adult: [["Single agent, untreated patients", "150–200 mg/m² IV every 6 weeks, as one dose or split (75–100 mg/m² on 2 successive days); infuse over at least 2 h [FDA]."], ["Next dose by prior nadir", "WBC >4000 and platelets >100,000: 100%; WBC 3000–3999 / platelets 75,000–99,999: 100%; WBC 2000–2999 / platelets 25,000–74,999: 70%; WBC <2000 / platelets <25,000: 50% [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "BSA dosing; needs height." },
  adj: { renal: "Evaluate kidney function before and during treatment; monitor for toxicity [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [FDA].", other: "Lower the dose with other myelosuppressive drugs or depleted marrow [FDA]. Baseline and periodic lung function tests [FDA]." },
  tox: { human: "Myeloablation [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No proven antidote; supportive care [FDA]." },
  contra: ["Previous hypersensitivity to carmustine or its components [FDA]."],
  ae: { common: ["Delayed myelosuppression (platelets ~4 weeks, WBC 5–6 weeks), nausea and vomiting, flushing with fast infusion [FDA]."], serious: ["Myelosuppression (boxed) [FDA]", "Pulmonary toxicity, including delayed fibrosis years later (boxed) [FDA]", "Extravasation; secondary malignancy [FDA]"] },
  monitor: ["Blood counts weekly for at least 6 weeks after each dose; lung function; kidney and liver tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "carmustine", indication_id: "std", label: "Single agent — 150–200 mg/m² every 6 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 150, unit: "mg", per: "dose", value_max: 200 }, interval_h: 1008, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj (reconstituted)", strength: 3.3, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: ["Lower in combination therapy or depleted marrow"], sources: ["FDA"] }],
  sources: [["FDA", "Carmustine for injection — Avet Pharmaceuticals (NDA017422), label effective 2026-04-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b9b47082-32ee-4abb-a7b2-52292894d3f8"]],
  dose: { tagline: "Nitrosourea for brain tumours, myeloma and lymphoma; delayed marrow and lung toxicity.",
    boxedTitle: "Myelosuppression and pulmonary toxicity",
    boxed: "Carmustine for Injection, USP causes suppression of marrow function (including thrombocytopenia and leukopenia), which may contribute to bleeding and overwhelming infections. Monitor blood counts weekly for at least 6 weeks after each dose. Adjust dosage based on nadir blood counts from the prior dose. Do not administer a repeat course of Carmustine for Injection until blood counts recover. Carmustine for Injection causes dose-related pulmonary toxicity. Patients receiving greater than 1400 mg/m² cumulative dose are at significantly higher risk than those receiving less. Delayed pulmonary toxicity can occur years after treatment, and can result in death, particularly in patients treated in childhood.",
    adult: [{ ind: "Single agent (previously untreated)", text: "150–200 mg/m² IV over at least 2 h every 6 weeks (or 75–100 mg/m² on 2 days in a row).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established; high risk of late lung toxicity." }] }
});

/* ---------- CARTEOLOL (FDA ophthalmic solution 1%, Sandoz, ANDA075476; original OCUPRESS) ---------- */
FDB_M("carteolol", {
  inn: "Carteolol", atc: "S01ED05", cls: "Non-selective beta-blocker with intrinsic sympathomimetic activity (ophthalmic)",
  linked: [["Open-angle glaucoma and ocular hypertension", "Topical beta-blocker [FDA]", ""]],
  forms: ["Eye drops 1% [FDA]."],
  moa: "Reduces aqueous humour production [NEP].",
  pk: ["Not detected in plasma after eye use, but may be absorbed systemically [FDA]."],
  ind: { adult: ["Chronic open-angle glaucoma and ocular hypertension, alone or with other agents [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Glaucoma / ocular hypertension", "1 drop of 1% in the affected eye(s) twice a day [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Eye drops — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Systemic beta-blocker effects can occur: caution in diabetes, thyrotoxicosis, myasthenia, before surgery [FDA]." },
  tox: { human: "Bradycardia, bronchospasm, heart failure, hypotension [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Flush the eye; if swallowed, stop the drug and monitor vital signs [FDA]." },
  contra: ["Bronchial asthma or history of asthma; severe COPD [FDA].", "Sinus bradycardia; second- or third-degree AV block; overt cardiac failure; cardiogenic shock [FDA].", "Hypersensitivity to any component [FDA]."],
  ae: { common: ["Transient eye irritation, burning, tearing, conjunctival hyperaemia [NEP]."], serious: ["Bronchospasm and death in asthma [FDA]", "Cardiac failure [FDA]"] },
  monitor: ["IOP; pulse [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Carteolol hydrochloride ophthalmic solution 1% — Sandoz, label effective 2025-04-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=571fe550-399d-4296-835c-37aa1ab9b409"]],
  dose: { tagline: "Beta-blocker eye drop for glaucoma; avoid in asthma and bradycardia.",
    adult: [{ ind: "Glaucoma / ocular hypertension", text: "1 drop of 1% twice a day." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CARVEDILOL (FDA COREG, Waylis, NDA020297, eff. 2026-07-31) ---------- */
FDB_M("carvedilol", {
  inn: "Carvedilol", atc: "C07AG02", cls: "Non-selective beta-blocker with alpha-1 blockade",
  linked: [["Chronic heart failure (HFrEF)", "Survival benefit with ACE inhibitor/diuretic [FDA]", "hf-adult"], ["LV dysfunction after myocardial infarction", "[FDA]", ""], ["Hypertension", "[FDA]", "htn-adult"]],
  forms: ["Tablets 3.125, 6.25, 12.5, 25 mg [FDA].", "Bhutan: 3.125 mg and 12.5 mg tablets [BT-NEML]."],
  moa: "Blocks beta-1, beta-2 and alpha-1 receptors [NEP].",
  pk: ["Take with food to reduce orthostatic effects [FDA].", "Half-life 7–10 h [FDA]."],
  ind: { adult: ["Mild to severe chronic heart failure; LV dysfunction after MI (EF ≤40%); hypertension [FDA]."], paed: ["Effectiveness not established below 18 years [FDA]."] },
  adult: [["Heart failure", "Start 3.125 mg twice daily for 2 weeks; then 6.25, 12.5 and 25 mg twice daily at intervals of at least 2 weeks. Maximum 25 mg twice daily under 85 kg; 50 mg twice daily over 85 kg (mild–moderate HF) [FDA]."], ["After MI", "Start 6.25 mg twice daily; increase to 12.5 then 25 mg twice daily every 3–10 days [FDA]."], ["Hypertension", "Start 6.25 mg twice daily; increase to 12.5 then 25 mg twice daily every 1–2 weeks; maximum 50 mg/day [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Starting doses; titrate by the schedule." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Contraindicated in severe hepatic impairment [FDA].", preg: "Not established in primary source. [NEP]", other: "Do not stop abruptly in coronary disease — taper over 1–2 weeks [FDA]. Masks hypoglycaemia [FDA]." },
  tox: { human: "Severe hypotension, bradycardia, cardiac failure, cardiogenic shock, arrest; bronchospasm, seizures [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supine, intensive care; atropine 2 mg IV for bradycardia; glucagon 5–10 mg IV over 30 s then 5 mg/h; sympathomimetics by effect; pacing if refractory [FDA]." },
  contra: ["Bronchial asthma or related bronchospastic conditions [FDA].", "Second- or third-degree AV block; sick sinus syndrome; severe bradycardia (without pacemaker) [FDA].", "Cardiogenic shock or decompensated HF needing IV inotropes [FDA].", "Severe hepatic impairment [FDA].", "Hypersensitivity to carvedilol [FDA]."],
  ae: { common: ["Dizziness, fatigue, hypotension, bradycardia, weight gain, diarrhoea, hyperglycaemia [NEP]."], serious: ["Worsening heart failure and fluid retention [FDA]", "Bradycardia, AV block [FDA]", "Bronchospasm [FDA]"] },
  monitor: ["Pulse, BP, weight and HF symptoms during titration [FDA]."],
  local: { neml: "Carvedilol 3.125 mg and 12.5 mg tablets [BT-NEML].", strengths: "3.125 mg and 12.5 mg tablets.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "carvedilol", indication_id: "hf", label: "Heart failure — start 3.125 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 3.125, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 50, max_daily: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 3.125, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Double every 2 weeks or more as tolerated"], sources: ["FDA"] },
    { drug: "carvedilol", indication_id: "mi", label: "After MI / hypertension — start 6.25 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 6.25, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 25, max_daily: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 6.25, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "COREG (carvedilol) tablets — Waylis Therapeutics, label effective 2026-07-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=07c619c6-4a0c-445e-94fa-664a54f68a39"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Alpha/beta-blocker for heart failure, post-MI LV dysfunction and hypertension; start low.",
    adult: [
      { ind: "Heart failure", text: "3.125 mg twice daily with food; double every 2 weeks or more to 25 mg twice daily (50 mg twice daily if over 85 kg).", calc: ["hf"] },
      { ind: "After MI (EF ≤40%)", text: "6.25 mg twice daily; increase to 12.5 then 25 mg twice daily every 3–10 days.", calc: ["mi"] },
      { ind: "Hypertension", text: "6.25 mg twice daily; increase every 1–2 weeks to 25 mg twice daily. Maximum 50 mg a day.", calc: ["mi"] }
    ],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CASIMERSEN (FDA AMONDYS 45, Sarepta, NDA213026, eff. 2026-01-09) ---------- */
FDB_M("casimersen", {
  inn: "Casimersen", atc: "M09AX13", cls: "Antisense oligonucleotide (exon 45 skipping)",
  linked: [["Duchenne muscular dystrophy — exon 45 amenable", "Accelerated approval [FDA]", ""]],
  forms: ["Injection 100 mg/2 mL (50 mg/mL) vial [FDA]."],
  moa: "Binds dystrophin pre-mRNA to skip exon 45, restoring a shortened dystrophin [NEP].",
  pk: ["Short plasma half-life (about 3.5 h); no accumulation with weekly dosing [FDA]."],
  ind: { adult: ["DMD with a confirmed DMD mutation amenable to exon 45 skipping [FDA]."], paed: ["Indicated, including children [FDA]."] },
  adult: [["DMD (exon 45)", "30 mg/kg IV once weekly over 35–60 minutes through a 0.2 micron in-line filter; dilute first [FDA]."]],
  paed: { tiers: ["30 mg/kg once weekly, as adults [FDA]."], transition: "Same dose [FDA].", calcNote: "Weight-based weekly dose." },
  adj: { renal: "Measure cystatin C, urine dipstick and urine protein:creatinine ratio before starting and during treatment; creatinine is unreliable in DMD [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Take urine samples before the infusion or at least 48 h after [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Serious hypersensitivity to casimersen or ingredients [FDA]."],
  ae: { common: ["Upper respiratory infection, cough, fever, headache, joint pain, throat pain [NEP]."], serious: ["Hypersensitivity, angioedema, anaphylaxis [FDA]", "Kidney toxicity (animal data) [FDA]"] },
  monitor: ["Cystatin C, urine dipstick, UPCR [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "casimersen", indication_id: "std", label: "30 mg/kg IV once weekly", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "AMONDYS 45 (casimersen) injection — Sarepta Therapeutics, label effective 2026-01-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9e5fd44-eeda-4580-bba1-a734828bbcc3"]],
  dose: { tagline: "Weekly IV exon-45-skipping therapy for Duchenne muscular dystrophy.",
    adult: [{ ind: "DMD (exon 45 amenable)", text: "30 mg/kg IV once weekly over 35–60 minutes.", calc: ["std"] }],
    child: [{ ind: "DMD (exon 45 amenable)", text: "30 mg/kg IV once weekly.", calc: ["std"] }] }
});

/* ---------- CASPOFUNGIN (FDA caspofungin acetate for injection, Fresenius Kabi, NDA206110; original CANCIDAS) ---------- */
FDB_M("caspofungin", {
  inn: "Caspofungin", atc: "J02AX04", cls: "Echinocandin antifungal",
  linked: [["Candidaemia and invasive candidiasis", "[FDA]", ""], ["Febrile neutropenia — empirical antifungal", "[FDA]", ""], ["Invasive aspergillosis (refractory/intolerant)", "[FDA]", ""], ["Oesophageal candidiasis", "[FDA]", ""]],
  forms: ["Powder for injection 50 mg and 70 mg vials [FDA]."],
  moa: "Inhibits synthesis of β(1,3)-D-glucan in the fungal cell wall [NEP].",
  pk: ["Long terminal phase, half-life 40–50 h [FDA].", "Not dialysable [FDA]."],
  ind: { adult: ["Empirical therapy in febrile neutropenia; candidaemia and intra-abdominal, peritoneal, pleural Candida; oesophageal candidiasis; invasive aspergillosis refractory to or intolerant of other therapy [FDA]."], paed: ["3 months of age and older [FDA]."] },
  adult: [["Most indications", "70 mg loading dose on day 1, then 50 mg once daily; may increase to 70 mg daily if response is inadequate [FDA]."], ["Oesophageal candidiasis", "50 mg once daily, no loading dose [FDA]."], ["With rifampicin", "70 mg once daily; consider 70 mg with nevirapine, efavirenz, carbamazepine, dexamethasone or phenytoin [FDA]."]],
  paed: { tiers: ["3 months–17 years: 70 mg/m² loading dose on day 1, then 50 mg/m² once daily; never more than 70 mg per dose [FDA].", "Under 3 months: not established [FDA]."], transition: "Adult dosing from 18 years [FDA].", calcNote: "BSA dosing in children (needs height); IV over about 1 hour." },
  adj: { renal: "No adjustment [FDA].", hepatic: "Moderate (adults): 35 mg once daily after 70 mg load where appropriate; no data in severe impairment or in children [FDA].", preg: "May cause fetal harm (animal data) [FDA].", other: "Do not use dextrose-containing diluents; do not give as IV bolus [FDA]." },
  tox: { human: "210 mg single dose: no significant reactions [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; not dialysable [FDA]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Fever, chills, raised liver enzymes, diarrhoea, hypokalaemia, infusion-site reactions [NEP]."], serious: ["Anaphylaxis; histamine-mediated reactions; SJS/TEN [FDA]", "Hepatic dysfunction [FDA]"] },
  monitor: ["Liver tests; potassium [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "caspofungin", indication_id: "load", label: "Adult loading dose — 70 mg on day 1", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 70, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 70, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vial", renal: [], flags: [], sources: ["FDA"] },
    { drug: "caspofungin", indication_id: "maint", label: "Adult maintenance — 50 mg once daily", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 70, max_daily: 70, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vial", renal: [], flags: ["Moderate liver impairment: 35 mg"], sources: ["FDA"] },
    { drug: "caspofungin", indication_id: "pload", label: "Child (3 months–17 years) loading — 70 mg/m² on day 1 (max 70 mg)", route: "IV", population: { min_age_months: 3, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 70, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 70, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest mg", renal: [], flags: [], sources: ["FDA"] },
    { drug: "caspofungin", indication_id: "pmaint", label: "Child (3 months–17 years) — 50 mg/m² once daily (max 70 mg)", route: "IV", population: { min_age_months: 3, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 70, max_daily: 70, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest mg", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Caspofungin acetate for injection — Fresenius Kabi (NDA206110), label effective 2026-01-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e76d8d83-3691-451c-a32c-d91448c54d16"]],
  dose: { tagline: "IV echinocandin for invasive Candida, aspergillosis salvage and febrile neutropenia.",
    adult: [
      { ind: "Candidaemia, invasive candidiasis, febrile neutropenia, aspergillosis", text: "70 mg IV on day 1, then 50 mg once daily (70 mg if response is poor or with rifampicin).", calc: ["load", "maint"] },
      { ind: "Oesophageal candidiasis", text: "50 mg IV once daily, no loading dose.", calc: ["maint"] },
      { ind: "Moderate liver impairment", text: "70 mg on day 1 where appropriate, then 35 mg once daily." }
    ],
    child: [{ ind: "3 months to 17 years", text: "70 mg/m² on day 1, then 50 mg/m² once daily; no dose above 70 mg.", calc: ["pload", "pmaint"] }] }
});

/* ---------- CATRIDECACOG (FDA TRETTEN, Novo Nordisk, BLA125398, eff. 2020-06-30) ---------- */
FDB_M("catridecacog", {
  inn: "Catridecacog", atc: "B02BD11", cls: "Recombinant coagulation factor XIII A-subunit",
  linked: [["Congenital factor XIII A-subunit deficiency", "Routine prophylaxis [FDA]", ""]],
  forms: ["Powder for injection about 2500 IU per vial (2000–3125 IU; actual on carton) [FDA]."],
  moa: "Replaces the A-subunit of factor XIII, which cross-links fibrin to stabilise clots [NEP].",
  pk: ["Half-life about 5–7 days [FDA]."],
  ind: { adult: ["Routine prophylaxis of bleeding in congenital FXIII A-subunit deficiency; not for B-subunit deficiency [FDA]."], paed: ["Children included in studies [FDA]."] },
  adult: [["Routine prophylaxis", "35 IU/kg IV once monthly, aiming for trough FXIII activity of 10% or more; adjust if needed; infuse no faster than 1–2 mL/min [FDA]."]],
  paed: { tiers: ["35 IU/kg once monthly, as adults [FDA]."], transition: "Same dose [FDA].", calcNote: "Weight-based monthly dose; vial content varies — use the IU on the vial." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Check for neutralising antibodies if FXIII activity is lower than expected [FDA]." },
  tox: { human: "2.3 times the dose: no signs or symptoms [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to the active substance or excipients [FDA]."],
  ae: { common: ["Headache, limb pain, injection-site pain [NEP]."], serious: ["Hypersensitivity [FDA]", "Thrombosis [FDA]", "Inhibitor development [FDA]"] },
  monitor: ["FXIII activity trough [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "catridecacog", indication_id: "std", label: "35 IU/kg IV once monthly", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 35, unit: "IU", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest vial content", renal: [], flags: ["Once monthly"], sources: ["FDA"] }],
  sources: [["FDA", "TRETTEN (coagulation factor XIII A-subunit, recombinant) — Novo Nordisk, label effective 2020-06-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8664978e-1814-4930-aca5-97a24455f6df"]],
  dose: { tagline: "Monthly recombinant FXIII-A for congenital A-subunit deficiency.",
    adult: [{ ind: "Routine prophylaxis", text: "35 IU/kg IV once a month; target trough FXIII activity 10% or more.", calc: ["std"] }],
    child: [{ ind: "Routine prophylaxis", text: "35 IU/kg IV once a month.", calc: ["std"] }] }
});

/* ---------- CEFACLOR (FDA cefaclor, Carlsbad, ANDA065146, eff. 2025-05-01; original CECLOR) ---------- */
FDB_M("cefaclor", {
  inn: "Cefaclor", atc: "J01DC04", cls: "Second-generation oral cephalosporin",
  linked: [["Acute otitis media", "[FDA]", ""], ["Pharyngitis and tonsillitis (strep)", "At least 10 days [FDA]", ""], ["Lower respiratory, urinary and skin infections", "[FDA]", ""]],
  forms: ["Capsules 250 mg and 500 mg; suspension 125, 187, 250, 375 mg/5 mL [NEP]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Half-life under 1 h; about 2–3 h in anuria [FDA]."],
  ind: { adult: ["Otitis media, lower respiratory tract infection, pharyngitis/tonsillitis, UTI, skin infections caused by susceptible organisms [FDA]."], paed: ["1 month and older [FDA]."] },
  adult: [["Usual", "250 mg every 8 hours; may double (500 mg every 8 h) for severe infection such as pneumonia [FDA]."]],
  paed: { tiers: ["20 mg/kg/day in divided doses every 8 h [FDA].", "Serious infection, otitis media: 40 mg/kg/day; maximum 1 g/day [FDA].", "Under 1 month: not established [FDA]."], transition: "Adult dose from about 40 kg [NEP].", calcNote: "mg/kg/day ÷ 3." },
  adj: { renal: "Dose usually unchanged in kidney impairment [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Serum-sickness-like reactions, mostly in children [FDA]." },
  tox: { human: "Nausea, vomiting, epigastric distress, diarrhoea [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [FDA]." },
  contra: ["Known allergy to cephalosporins [FDA]."],
  ae: { common: ["Diarrhoea, rash, eosinophilia [NEP]."], serious: ["Anaphylaxis; serum-sickness-like reaction [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Clinical response [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefaclor", indication_id: "child", label: "Child — 20–40 mg/kg/day ÷ every 8 h (max 1 g/day)", route: "PO", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "day", value_max: 40 }, interval_h: 8, divided_doses: 3, caps: { max_daily: 1000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cefaclor", indication_id: "adult", label: "Adult — 250 mg every 8 h (500 mg if severe)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose", value_max: 500 }, interval_h: 8, divided_doses: 3, caps: { max_single: 500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 250, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefaclor capsules/suspension — Carlsbad Technology (ANDA065146), label effective 2025-05-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2f61354e-bcb0-41aa-955f-51eabc11387b"]],
  dose: { tagline: "Oral second-generation cephalosporin given every 8 hours.",
    adult: [{ ind: "Usual infections", text: "250 mg every 8 hours; 500 mg every 8 hours for severe infection.", calc: ["adult"] }],
    child: [{ ind: "1 month and older", text: "20 mg/kg/day in 3 doses; 40 mg/kg/day for otitis media or serious infection. Maximum 1 g a day.", calc: ["child"] }] }
});

/* ---------- CEFADROXIL (FDA cefadroxil capsules, ANDA065392, eff. 2026-06-01; original DURICEF) ---------- */
FDB_M("cefadroxil", {
  inn: "Cefadroxil", atc: "J01DB05", cls: "First-generation oral cephalosporin",
  linked: [["Urinary tract infection", "[FDA]", ""], ["Skin and soft-tissue infection, impetigo", "[FDA]", ""], ["Streptococcal pharyngitis/tonsillitis", "10 days [FDA]", ""]],
  forms: ["Capsules 500 mg; tablets 1 g; suspension 250 mg/5 mL and 500 mg/5 mL [NEP]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Acid-stable; take with or without food [FDA].", "About 63% of a 1 g dose removed by a 6–8 h haemodialysis [FDA]."],
  ind: { adult: ["UTI (E. coli, P. mirabilis, Klebsiella); skin infections (staphylococci, streptococci); group A strep pharyngitis/tonsillitis [FDA]."], paed: ["UTI, pharyngitis, impetigo, skin infections [FDA]."] },
  adult: [["Uncomplicated cystitis", "1–2 g a day once daily or in 2 doses [FDA]."], ["Other UTI", "2 g a day in 2 doses [FDA]."], ["Skin infection", "1 g a day once daily or in 2 doses [FDA]."], ["Strep pharyngitis", "1 g a day once daily or in 2 doses for 10 days [FDA]."]],
  paed: { tiers: ["UTI and other skin infections: 30 mg/kg/day in 2 doses every 12 h [FDA].", "Pharyngitis, tonsillitis, impetigo: 30 mg/kg/day once daily or in 2 doses [FDA]."], transition: "Adult doses for larger children [NEP].", calcNote: "30 mg/kg/day ÷ 2." },
  adj: { renal: "Adults: 1 g first, then 500 mg every 12 h (CrCl 25–50), every 24 h (10–25) or every 36 h (0–10); over 50: normal [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Cross-allergy in up to 10% of penicillin-allergic patients [FDA]." },
  tox: { human: "Children under 6: under 250 mg/kg of cephalosporins not associated with significant outcomes [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; over 250 mg/kg consider gastric emptying [FDA]." },
  contra: ["Known allergy to cephalosporins [FDA]."],
  ae: { common: ["Diarrhoea, nausea, dyspepsia, rash [FDA]."], serious: ["Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Kidney function in elderly [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefadroxil", indication_id: "child", label: "Child — 30 mg/kg/day in 2 doses", route: "PO", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: { adult_ceiling_daily: 2000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cefadroxil", indication_id: "adult", label: "Adult — 500 mg–1 g every 12 h (1–2 g a day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose", value_max: 1000 }, interval_h: 12, divided_doses: 2, caps: { max_single: 1000, max_daily: 2000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 500, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 25.001, crcl_max: 50, action: "reduce_dose", set_value: 500, interval_h: 12 }, { crcl_min: 10.001, crcl_max: 25, action: "reduce_dose", set_value: 500, interval_h: 24 }, { crcl_min: 0, crcl_max: 10, action: "reduce_dose", set_value: 500, interval_h: 36 }], renal_note: "Kidney impairment: give 1 g as the first dose, then the maintenance below", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefadroxil capsules USP (ANDA065392), label effective 2026-06-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=57eebea5-28b6-44a3-888b-76950f6038f4"]],
  dose: { tagline: "Oral first-generation cephalosporin; once or twice daily.",
    adult: [
      { ind: "Cystitis", text: "1–2 g a day, once daily or in 2 doses.", calc: ["adult"] },
      { ind: "Skin infection; strep pharyngitis (10 days)", text: "1 g a day, once daily or in 2 doses.", calc: ["adult"] }
    ],
    child: [{ ind: "UTI, skin, pharyngitis, impetigo", text: "30 mg/kg/day in 2 doses (pharyngitis/impetigo: may give once daily).", calc: ["child"] }] }
});

/* ---------- CEFALEXIN (US: cephalexin; FDA capsules ANDA065253, eff. 2026-11-06; original KEFLEX) ---------- */
FDB_M("cefalexin", {
  inn: "Cefalexin", atc: "J01DB01", cls: "First-generation oral cephalosporin",
  linked: [["Skin and soft-tissue infection", "[FDA]", ""], ["Urinary tract infection", "[FDA]", ""], ["Otitis media; respiratory infection; bone infection", "[FDA]", ""]],
  forms: ["Capsules 250 mg and 500 mg; suspension 125 mg/5 mL and 250 mg/5 mL [NEP].", "Bhutan: 250 mg capsule [BT-NEML]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Excreted by the kidneys; probenecid slows excretion [FDA]."],
  ind: { adult: ["Respiratory tract infection, otitis media, skin and soft tissue, bone, genitourinary infections (including acute prostatitis) [FDA]."], paed: ["Over 1 year [FDA]."] },
  adult: [["Usual (15 years and over)", "250 mg every 6 hours, or 500 mg every 12 hours, for 7–14 days [FDA]."], ["Severe infection", "Up to 4 g a day in 2–4 divided doses [FDA]."]],
  paed: { tiers: ["Over 1 year: 25–50 mg/kg/day in divided doses [FDA].", "Severe infection: 50–100 mg/kg/day [FDA].", "Otitis media: 75–100 mg/kg/day [FDA].", "Not more than the adult dose [FDA]."], transition: "Adult dose from 15 years [FDA].", calcNote: "mg/kg/day ÷ 4 (every 6 h)." },
  adj: { renal: "15 years and over: CrCl 30–59: max 1 g/day; 15–29: 250 mg every 8–12 h; 5–14 (not on dialysis): 250 mg every 24 h; 1–4: 250 mg every 48–60 h. No data for haemodialysis or for children under 15 [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Decades of use have not shown drug-associated risk [FDA].", other: "Raises metformin levels [FDA]." },
  tox: { human: "Nausea, vomiting, epigastric distress, diarrhoea, haematuria [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; dialysis not shown to help [FDA]." },
  contra: ["Hypersensitivity to cefalexin or other cephalosporins [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, dyspepsia, abdominal pain [NEP]."], serious: ["Anaphylaxis, SJS/TEN [FDA]", "C. difficile diarrhoea [FDA]", "Haemolytic anaemia (Coombs positive) [FDA]", "Seizures with kidney impairment [FDA]"] },
  monitor: ["Kidney function; PT in at-risk patients [NEP]."],
  local: { neml: "Cefalexin 250 mg capsule (district hospital supply, with conditions) [BT-NEML].", strengths: "250 mg capsule.", stg: "Listed in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefalexin", indication_id: "child", label: "Child over 1 year — 25–50 mg/kg/day ÷ every 6 h", route: "PO", population: { min_age_months: 12, max_age_months: 180, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 25, unit: "mg", per: "day", value_max: 50 }, interval_h: 6, divided_doses: 4, caps: { adult_ceiling_daily: 4000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], renal_note: "No kidney dose guidance under 15 years", flags: [], sources: ["FDA"] },
    { drug: "cefalexin", indication_id: "om", label: "Child otitis media — 75–100 mg/kg/day ÷ every 6 h", route: "PO", population: { min_age_months: 12, max_age_months: 180, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 75, unit: "mg", per: "day", value_max: 100 }, interval_h: 6, divided_doses: 4, caps: { adult_ceiling_daily: 4000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], renal_note: "No kidney dose guidance under 15 years", flags: [], sources: ["FDA"] },
    { drug: "cefalexin", indication_id: "adult", label: "15 years and over — 250 mg every 6 h", route: "PO", population: { min_age_months: 180, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_daily: 4000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 250, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 30, crcl_max: 59.999, action: "cap_daily", max_daily: 1000 }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 250, interval_h: 12 }, { crcl_min: 5, crcl_max: 14.999, action: "reduce_dose", set_value: 250, interval_h: 24 }, { crcl_min: 1, crcl_max: 4.999, action: "reduce_dose", set_value: 250, interval_h: 48 }, { crcl_min: 0, crcl_max: 0.999, action: "avoid", note: "no label dose; on dialysis there is not enough information" }], renal_note: "CrCl 15–29: every 8–12 h; 1–4: every 48–60 h; not for patients on haemodialysis (no data)", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cephalexin capsules USP (ANDA065253), label effective 2026-11-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2506895d-f3e0-4be9-95cb-7a6fd44de46d"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Oral first-generation cephalosporin for skin, urinary and ear infections.",
    adult: [
      { ind: "Usual (15 years and over)", text: "250 mg every 6 hours or 500 mg every 12 hours for 7–14 days.", calc: ["adult"] },
      { ind: "Severe infection", text: "Up to 4 g a day in 2–4 doses." }
    ],
    child: [
      { ind: "Over 1 year", text: "25–50 mg/kg/day in divided doses (severe: 50–100 mg/kg/day).", calc: ["child"] },
      { ind: "Otitis media", text: "75–100 mg/kg/day in divided doses.", calc: ["om"] }
    ] }
});

/* ---------- CEFAZOLIN (FDA cefazolin for injection, Hikma ANDA065143 and WG Critical Care NDA211413; original ANCEF/KEFZOL) ---------- */
FDB_M("cefazolin", {
  inn: "Cefazolin", atc: "J01DB04", cls: "First-generation parenteral cephalosporin",
  linked: [["Surgical prophylaxis", "First-line [FDA]", ""], ["Skin, bone, joint, urinary and respiratory infections; endocarditis; septicaemia", "[FDA]", ""]],
  forms: ["Powder for injection 500 mg, 1 g, 2 g, 3 g, 10 g vials [FDA].", "Bhutan: 500 mg powder for injection [BT-NEML]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Half-life about 1.8 h; excreted by the kidneys [FDA]."],
  ind: { adult: ["Respiratory, urinary, skin, biliary, bone and joint, genital infections; septicaemia; endocarditis; perioperative prophylaxis [FDA]."], paed: ["Children; not recommended in premature infants and neonates [FDA]."] },
  adult: [["Moderate to severe infection", "500 mg–1 g every 6–8 hours [FDA]."], ["Mild gram-positive infection", "250–500 mg every 8 hours [FDA]."], ["Uncomplicated UTI", "1 g every 12 hours [FDA]."], ["Severe (endocarditis, septicaemia)", "1–1.5 g every 6 hours; rarely up to 12 g a day [FDA]."], ["Surgical prophylaxis", "1–2 g IV 30–60 min before surgery; 500 mg–1 g during surgery of 2 h or more; 500 mg–1 g every 6–8 h for 24 h after [FDA]."]],
  paed: { tiers: ["25–50 mg/kg/day in 3–4 doses; up to 100 mg/kg/day for severe infection [FDA].", "Not recommended in premature infants and neonates [FDA]."], transition: "Adult doses [NEP].", calcNote: "mg/kg/day ÷ 3 (every 8 h)." },
  adj: { renal: "Adults (after a loading dose): CrCl 55 or more: full dose; 35–54: full dose at least every 8 h; 11–34: half the dose every 12 h; 10 or less: half the dose every 18–24 h. Children: CrCl 40–70: 60% of daily dose every 12 h; 20–40: 25% every 12 h; 5–20: 10% every 24 h [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Decades of cephalosporin use have not shown drug-associated risk [FDA].", other: "May lower prothrombin activity — check PT and give vitamin K if needed [FDA]." },
  tox: { human: "Seizures with accidental overdose in kidney impairment [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the drug; supportive care [FDA]." },
  contra: ["Immediate hypersensitivity to cefazolin, cephalosporins, penicillins or other beta-lactams [FDA]."],
  ae: { common: ["Diarrhoea, nausea, phlebitis at the injection site, rash [NEP]."], serious: ["Anaphylaxis [FDA]", "Seizures in kidney impairment [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Kidney function; PT in at-risk patients [FDA]."],
  local: { neml: "Cefazolin 500 mg powder for injection (supplied where there is a surgeon) [BT-NEML].", strengths: "500 mg vial.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefazolin", indication_id: "proph", label: "Surgical prophylaxis — 1–2 g IV 30–60 min before incision", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose", value_max: 2000 }, interval_h: null, divided_doses: 1, caps: { max_single: 2000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [], flags: ["Repeat 500 mg–1 g if surgery lasts 2 h or more"], sources: ["FDA"] },
    { drug: "cefazolin", indication_id: "adult", label: "Adult moderate–severe infection — 500 mg–1 g every 8 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose", value_max: 1000 }, interval_h: 8, divided_doses: 3, caps: { max_single: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Nearest 250 mg", renal: [{ crcl_min: 11, crcl_max: 34.999, action: "reduce_dose", factor: 0.5, interval_h: 12 }, { crcl_min: 0, crcl_max: 10.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], renal_note: "Kidney impairment: give a full loading dose first; CrCl 35–54: full dose not more often than every 8 h; CrCl 10 or less: every 18–24 h", flags: [], sources: ["FDA"] },
    { drug: "cefazolin", indication_id: "child", label: "Child — 25–50 mg/kg/day ÷ every 8 h (severe up to 100)", route: "IV", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 25, unit: "mg", per: "day", value_max: 50 }, interval_h: 8, divided_doses: 3, caps: { adult_ceiling_daily: 6000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [{ crcl_min: 40.001, crcl_max: 70, action: "reduce_dose", set_value: 15, set_value_max: 30, interval_h: 12 }, { crcl_min: 20.001, crcl_max: 40, action: "reduce_dose", set_value: 6.25, set_value_max: 12.5, interval_h: 12 }, { crcl_min: 5, crcl_max: 20, action: "reduce_dose", set_value: 2.5, set_value_max: 5, interval_h: 24 }, { crcl_min: 0, crcl_max: 4.999, action: "avoid", note: "no label dose below CrCl 5 in children" }], renal_note: "Children with kidney impairment: give a full loading dose first; then 60% (CrCl 40–70), 25% (20–40) or 10% (5–20) of the normal daily dose", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefazolin for injection USP — Hikma (ANDA065143), label effective 2024-04-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=06091653-e568-4e82-acc7-aefbce16de17"], ["FDA", "Cefazolin for injection 2 g/3 g — WG Critical Care (NDA211413), label effective 2026-02-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4f3a9248-a354-4c77-bf5b-9eed38f00219"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "IV/IM first-generation cephalosporin; the standard surgical prophylaxis antibiotic.",
    adult: [
      { ind: "Surgical prophylaxis", text: "1–2 g IV 30–60 min before incision; repeat 500 mg–1 g in surgery of 2 h or more; 500 mg–1 g every 6–8 h for 24 h after.", calc: ["proph"] },
      { ind: "Moderate to severe infection", text: "500 mg–1 g every 6–8 hours.", calc: ["adult"] },
      { ind: "Endocarditis, septicaemia", text: "1–1.5 g every 6 hours." }
    ],
    child: [{ ind: "1 month and older", text: "25–50 mg/kg/day in 3–4 doses; up to 100 mg/kg/day if severe. Not for neonates.", calc: ["child"] }] }
});

/* ---------- CEFDINIR (FDA capsules ANDA065434 and suspension ANDA065473; original OMNICEF) ---------- */
FDB_M("cefdinir", {
  inn: "Cefdinir", atc: "J01DD15", cls: "Third-generation oral cephalosporin",
  linked: [["Acute otitis media", "[FDA]", ""], ["Sinusitis; pharyngitis/tonsillitis", "[FDA]", ""], ["Community-acquired pneumonia; skin infection", "[FDA]", ""]],
  forms: ["Capsules 300 mg; suspension 125 mg/5 mL and 250 mg/5 mL [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Half-life about 1.7 h; excreted by the kidneys [FDA].", "Take 2 h apart from aluminium/magnesium antacids and iron [FDA]."],
  ind: { adult: ["CAP, acute bronchitis exacerbation, maxillary sinusitis, pharyngitis/tonsillitis, uncomplicated skin infection [FDA]."], paed: ["6 months to 12 years: otitis media, sinusitis, pharyngitis, skin infection [FDA]."] },
  adult: [["13 years and over", "300 mg every 12 h, or 600 mg once daily (not for pneumonia or skin infection); total 600 mg/day [FDA]."]],
  paed: { tiers: ["6 months–12 years: 7 mg/kg every 12 h or 14 mg/kg once daily (skin infection: every 12 h only); maximum 600 mg/day [FDA].", "43 kg or more: 600 mg/day [FDA]."], transition: "Adult dose from 13 years [FDA].", calcNote: "7 mg/kg every 12 h; 600 mg/day maximum." },
  adj: { renal: "Adults CrCl <30: 300 mg once daily. Children CrCl <30 mL/min/1.73 m²: 7 mg/kg (up to 300 mg) once daily. Haemodialysis: 300 mg or 7 mg/kg every other day and after each session [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Red stools possible with iron-containing foods [NEP]." },
  tox: { human: "No human overdose data; beta-lactam overdose: nausea, vomiting, diarrhoea, convulsions [FDA].", animal: "Rodents: single oral 5600 mg/kg produced no adverse effects [FDA].", manage: "Haemodialysis removes cefdinir [FDA]." },
  contra: ["Known allergy to cephalosporins [FDA]."],
  ae: { common: ["Diarrhoea, vaginal moniliasis, nausea, headache, rash [NEP]."], serious: ["Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Clinical response [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefdinir", indication_id: "child", label: "6 months–12 years — 7 mg/kg every 12 h (max 600 mg/day)", route: "PO", population: { min_age_months: 6, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 7, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 300, max_daily: 600, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 25, unit: "mg/mL" }, { form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 7, interval_h: 24, max_daily: 300 }], flags: [], sources: ["FDA"] },
    { drug: "cefdinir", indication_id: "adult", label: "13 years and over — 300 mg every 12 h", route: "PO", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 300, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 300, interval_h: 24 }], renal_note: "Haemodialysis: 300 mg every other day and after each session", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefdinir capsules USP (ANDA065434), label effective 2026-10-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3c2130f9-a0d8-4a4e-bcad-36379202b7bb"], ["FDA", "Cefdinir for oral suspension — Aurobindo (ANDA065473), label effective 2024-02-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=06fbdb63-d32f-4212-9962-f1de15597dda"]],
  dose: { tagline: "Oral third-generation cephalosporin, once or twice daily.",
    adult: [
      { ind: "13 years and over", text: "300 mg every 12 hours (or 600 mg once daily except pneumonia and skin infection).", calc: ["adult"] },
      { ind: "CrCl under 30", text: "300 mg once daily." }
    ],
    child: [{ ind: "6 months to 12 years", text: "7 mg/kg every 12 hours or 14 mg/kg once daily (skin: every 12 h). Maximum 600 mg a day.", calc: ["child"] }] }
});

/* ---------- CEFEPIME (FDA cefepime injection, Baxter, NDA050817, eff. 2026-06-25; original MAXIPIME) ---------- */
FDB_M("cefepime", {
  inn: "Cefepime", atc: "J01DE01", cls: "Fourth-generation cephalosporin (antipseudomonal)",
  linked: [["Hospital pneumonia; Pseudomonas infection", "[FDA]", "pneumonia-adult"], ["Febrile neutropenia — empirical", "2 g every 8 h [FDA]", ""], ["Complicated UTI; skin; intra-abdominal (with metronidazole)", "[FDA]", ""]],
  forms: ["Powder for injection 500 mg, 1 g, 2 g; premixed 1 g/50 mL and 2 g/100 mL [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis; stable to many beta-lactamases [NEP].",
  pk: ["Half-life about 2 h; about 13 h on haemodialysis [FDA].", "Infuse over about 30 minutes [FDA]."],
  ind: { adult: ["Pneumonia, empirical febrile neutropenia, uncomplicated/complicated UTI, uncomplicated skin infection, complicated intra-abdominal infection with metronidazole [FDA]."], paed: ["2 months to 16 years [FDA]."] },
  adult: [["Pneumonia", "1–2 g every 8–12 h; Pseudomonas: 2 g every 8 h; 10 days [FDA]."], ["Febrile neutropenia", "2 g every 8 h for 7 days or until neutropenia resolves [FDA]."], ["Mild–moderate UTI", "0.5–1 g every 12 h, 7–10 days [FDA]."], ["Severe UTI; skin infection", "2 g every 12 h, 10 days [FDA]."], ["Complicated intra-abdominal", "2 g every 8–12 h with metronidazole, 7–10 days [FDA]."]],
  paed: { tiers: ["2 months–16 years: 50 mg/kg every 12 h; every 8 h for febrile neutropenia; not more than the adult dose [FDA]."], transition: "Adult dose for children over 40 kg [NEP].", calcNote: "50 mg/kg per dose; capped at 2 g." },
  adj: { renal: "CrCl ≤60: see table — e.g. 2 g every 8 h becomes 2 g every 12 h (30–60), 2 g every 24 h (11–29), 1 g every 24 h (<11). Haemodialysis: 1 g day 1, then 500 mg every 24 h (febrile neutropenia 1 g every 24 h), after dialysis. CAPD: usual dose every 48 h. Children: proportional changes [FDA].", hepatic: "No adjustment [NEP].", preg: "Decades of cephalosporin use have not shown drug-associated risk [FDA].", other: "Neurotoxicity (encephalopathy, myoclonus, non-convulsive status) with unadjusted doses in kidney impairment [FDA]." },
  tox: { human: "Encephalopathy, myoclonus, seizures, neuromuscular excitability [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis (not peritoneal) removes cefepime [FDA]." },
  contra: ["Immediate hypersensitivity to cefepime, cephalosporins, penicillins or other beta-lactams [FDA]."],
  ae: { common: ["Local infusion reactions, positive Coombs test, low phosphate, raised ALT/AST, prolonged PT/PTT, rash [FDA]."], serious: ["Neurotoxicity in kidney impairment [FDA]", "Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Kidney function; mental status [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefepime", indication_id: "q8", label: "Adult — 2 g every 8 h (febrile neutropenia, Pseudomonas)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2000, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, max_daily: 6000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "premix", strength: 20, unit: "mg/mL" }], rounding: "Whole bag", renal: [{ crcl_min: 30, crcl_max: 60, action: "extend_interval", factor: 12 }, { crcl_min: 11, crcl_max: 29.999, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 10.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], renal_note: "Haemodialysis: 1 g every 24 h after dialysis (febrile neutropenia)", flags: [], sources: ["FDA"] },
    { drug: "cefepime", indication_id: "q12", label: "Adult — 2 g every 12 h (severe UTI, skin)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2000, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 2000, max_daily: 4000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "premix", strength: 20, unit: "mg/mL" }], rounding: "Whole bag", renal: [{ crcl_min: 30, crcl_max: 60, action: "extend_interval", factor: 24 }, { crcl_min: 11, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 10.999, action: "reduce_dose", factor: 0.25, interval_h: 24 }], renal_note: "Haemodialysis: 1 g on day 1, then 500 mg every 24 h after dialysis", flags: [], sources: ["FDA"] },
    { drug: "cefepime", indication_id: "q12-1g", label: "Adult — 1 g every 12 h (mild–moderate UTI, pneumonia)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 1000, max_daily: 2000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "premix", strength: 20, unit: "mg/mL" }], rounding: "Whole bag", renal: [{ crcl_min: 30, crcl_max: 60, action: "extend_interval", factor: 24 }, { crcl_min: 11, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 10.999, action: "reduce_dose", factor: 0.25, interval_h: 24 }], renal_note: "Haemodialysis: 1 g on day 1, then 500 mg every 24 h after dialysis", flags: [], sources: ["FDA"] },
    { drug: "cefepime", indication_id: "child", label: "Child 2 months–16 years — 50 mg/kg every 12 h (max 2 g)", route: "IV", population: { min_age_months: 2, max_age_months: 192, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 2000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [{ crcl_min: 30, crcl_max: 60, action: "extend_interval", factor: 24 }, { crcl_min: 11, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 10.999, action: "reduce_dose", factor: 0.25, interval_h: 24 }], renal_note: "Children: label advises changes proportional to the adult table", flags: [], sources: ["FDA"] },
    { drug: "cefepime", indication_id: "child-fn", label: "Child febrile neutropenia — 50 mg/kg every 8 h (max 2 g)", route: "IV", population: { min_age_months: 2, max_age_months: 192, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [{ crcl_min: 30, crcl_max: 60, action: "extend_interval", factor: 12 }, { crcl_min: 11, crcl_max: 29.999, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 10.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], renal_note: "Children: label advises changes proportional to the adult table", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefepime injection (Galaxy) — Baxter Healthcare, label effective 2026-06-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be5f8ca6-7232-423a-a2d5-cccb7abe7921"]],
  dose: { tagline: "IV fourth-generation antipseudomonal cephalosporin; cut the dose in kidney impairment to avoid neurotoxicity.",
    adult: [
      { ind: "Febrile neutropenia; Pseudomonas pneumonia", text: "2 g IV every 8 hours.", calc: ["q8"] },
      { ind: "Severe UTI; skin infection", text: "2 g IV every 12 hours.", calc: ["q12"] },
      { ind: "Pneumonia (non-Pseudomonas); mild–moderate UTI", text: "1–2 g every 8–12 h (UTI 0.5–1 g every 12 h).", calc: ["q12-1g"] },
      { ind: "Intra-abdominal (with metronidazole)", text: "2 g every 8–12 hours.", calc: ["q8", "q12"] }
    ],
    child: [
      { ind: "2 months to 16 years", text: "50 mg/kg IV every 12 hours (max 2 g per dose).", calc: ["child"] },
      { ind: "Febrile neutropenia", text: "50 mg/kg IV every 8 hours (max 2 g per dose).", calc: ["child-fn"] }
    ] }
});

/* ---------- CEFIDEROCOL (FDA FETROJA, Shionogi, NDA209445, eff. 2026-02-24) ---------- */
FDB_M("cefiderocol", {
  inn: "Cefiderocol", atc: "J01DI04", cls: "Siderophore cephalosporin (reserve antibiotic)",
  linked: [["Complicated UTI including pyelonephritis (resistant Gram-negatives)", "Limited options [FDA]", ""], ["Hospital-acquired / ventilator-associated pneumonia", "[FDA]", ""]],
  forms: ["Powder for injection 1 g vial [FDA]."],
  moa: "Binds iron and enters Gram-negative bacteria through iron-transport channels; inhibits cell-wall synthesis [NEP].",
  pk: ["Half-life 2–3 h; about 60% removed by a 3–4 h haemodialysis [FDA]."],
  ind: { adult: ["18 years and over: cUTI and HABP/VABP caused by susceptible Gram-negative organisms [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["CrCl 60–119", "2 g every 8 h, each infused over 3 hours, for 7–14 days [FDA]."], ["CrCl 120 or more", "2 g every 6 h [FDA]."], ["CrCl 30–59", "1.5 g every 8 h [FDA]."], ["CrCl 15–29", "1 g every 8 h [FDA]."], ["CrCl under 15 (± haemodialysis)", "0.75 g every 12 h; give right after dialysis [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Dose set by CrCl; 3-hour infusion." },
  adj: { renal: "Adjust by CrCl (Cockcroft-Gault) — see adult rows; CRRT has its own table in the label [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Decades of cephalosporin use have not shown drug-associated risk [FDA].", other: "Higher all-cause mortality than best available therapy in carbapenem-resistant infections — monitor response closely [FDA]. False-positive urine dipstick (protein, ketones, blood) [FDA]." },
  tox: { human: "No overdose information [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis removes about 60% [FDA]." },
  contra: ["Severe hypersensitivity to cefiderocol, other beta-lactams or any component [FDA]."],
  ae: { common: ["Diarrhoea, infusion-site reactions, constipation, rash, candidiasis, cough, raised liver tests, headache, low potassium, nausea, vomiting [NEP]."], serious: ["Increased all-cause mortality in carbapenem-resistant infections [FDA]", "Hypersensitivity [FDA]", "C. difficile diarrhoea [FDA]", "Seizures [FDA]"] },
  monitor: ["CrCl during treatment; clinical response [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cefiderocol", indication_id: "std", label: "2 g every 8 h over 3 hours (CrCl 60–119)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2000, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, max_daily: 8000, unit: "mg" }, weight_basis: "NEP", formulations: [], infusion: { duration_h: 3 }, rounding: "Whole vials", renal: [{ crcl_min: 120, crcl_max: null, action: "extend_interval", factor: 6 }, { crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", set_value: 1500, interval_h: 8 }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 1000, interval_h: 8 }, { crcl_min: 0, crcl_max: 14.999, action: "reduce_dose", set_value: 750, interval_h: 12 }], renal_note: "Haemodialysis: give right after the session; CRRT: label table", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "FETROJA (cefiderocol) for injection — Shionogi, label effective 2026-02-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=75c0c785-38e0-4049-a6fb-b77581f5b35c"]],
  dose: { tagline: "Reserve IV cephalosporin for resistant Gram-negative cUTI and hospital pneumonia; dose by CrCl.",
    adult: [{ ind: "cUTI; HABP/VABP", text: "2 g IV every 8 h over 3 h (CrCl 60–119). CrCl ≥120: every 6 h; 30–59: 1.5 g; 15–29: 1 g every 8 h; <15: 0.75 g every 12 h.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CEFIXIME (FDA cefixime capsules/suspension, Lupin, NDA203195; original SUPRAX) ---------- */
FDB_M("cefixime", {
  inn: "Cefixime", atc: "J01DD08", cls: "Third-generation oral cephalosporin",
  linked: [["Uncomplicated UTI", "[FDA]", ""], ["Otitis media; pharyngitis/tonsillitis", "Suspension for otitis media [FDA]", ""], ["Uncomplicated gonorrhoea (cervical/urethral)", "400 mg single dose [FDA]", ""]],
  forms: ["Capsules 400 mg; chewable tablets; suspension 100 mg/5 mL and 200 mg/5 mL [FDA].", "Bhutan: 200 mg tablet [BT-NEML]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Half-life 3–4 h (up to 9 h) [FDA].", "Not removed by haemodialysis or peritoneal dialysis [FDA]."],
  ind: { adult: ["Uncomplicated UTI, otitis media, pharyngitis/tonsillitis, acute exacerbation of chronic bronchitis, uncomplicated cervical/urethral gonorrhoea [FDA]."], paed: ["6 months and older [FDA]."] },
  adult: [["Usual", "400 mg once daily (or 200 mg every 12 h) [FDA]."], ["Uncomplicated gonorrhoea", "400 mg as a single dose [FDA]."], ["Strep pyogenes", "At least 10 days [FDA]."]],
  paed: { tiers: ["6 months and older: 8 mg/kg/day once daily or 4 mg/kg every 12 h [FDA].", "Over 45 kg or over 12 years: adult dose [FDA].", "Otitis media: use the suspension, not tablets/capsules [FDA]."], transition: "Adult dose over 45 kg or 12 years [FDA].", calcNote: "8 mg/kg/day; maximum 400 mg." },
  adj: { renal: "Adults: CrCl 60 or more: normal. CrCl 21–59 or haemodialysis: 260 mg a day (13 mL of 100 mg/5 mL or 6.5 mL of 200 mg/5 mL). CrCl 20 or less or CAPD: about 172–176 mg a day (8.6 mL of 100 mg/5 mL or 4.4 mL of 200 mg/5 mL) [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Decades of cephalosporin use have not shown drug-associated risk [FDA].", other: "Raises carbamazepine levels; prolongs PT with warfarin [FDA]." },
  tox: { human: "Single doses up to 2 g in volunteers: same profile as normal doses [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Gastric lavage may be indicated; no antidote; not dialysable [FDA]." },
  contra: ["Known allergy to cefixime or other cephalosporins [FDA]."],
  ae: { common: ["Diarrhoea (16%), nausea, loose stools, abdominal pain, dyspepsia, vomiting [FDA]."], serious: ["Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Clinical response [NEP]."],
  local: { neml: "Cefixime 200 mg tablet [BT-NEML].", strengths: "200 mg tablet.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefixime", indication_id: "child", label: "Child 6 months–12 years (up to 45 kg) — 8 mg/kg once daily", route: "PO", population: { min_age_months: 6, max_age_months: 144, min_weight_kg: null, max_weight_kg: 45.0001 }, basis: "mg_per_kg", dose: { value: 8, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 400, max_daily: 400, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 20, unit: "mg/mL" }, { form: "susp", strength: 40, unit: "mg/mL" }], rounding: "Label weight chart", renal: [], renal_note: "Children: no kidney dose table in the label", flags: ["Or 4 mg/kg every 12 h"], sources: ["FDA"] },
    { drug: "cefixime", indication_id: "adult", label: "Adult — 400 mg once daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 400, unit: "mg/cap" }], rounding: "Whole capsule", renal: [{ crcl_min: 21, crcl_max: 59.999, action: "reduce_dose", set_value: 260, interval_h: 24 }, { crcl_min: 0, crcl_max: 20.999, action: "reduce_dose", set_value: 172, interval_h: 24 }], renal_note: "Reduced doses use the suspension; haemodialysis: 260 mg a day; CAPD: about 172 mg a day", flags: [], sources: ["FDA"] },
    { drug: "cefixime", indication_id: "gc", label: "Uncomplicated gonorrhoea — 400 mg once", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 400, unit: "mg/cap" }], rounding: "Whole capsule", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefixime capsules and oral suspension — Lupin (NDA203195), label effective 2026-08-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3194433c-c04e-442b-9668-fbeb0a15bac7"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Once-daily oral third-generation cephalosporin.",
    adult: [
      { ind: "UTI, otitis, pharyngitis, bronchitis", text: "400 mg once daily (or 200 mg every 12 h).", calc: ["adult"] },
      { ind: "Uncomplicated gonorrhoea", text: "400 mg as a single dose.", calc: ["gc"] }
    ],
    child: [{ ind: "6 months to 12 years (up to 45 kg)", text: "8 mg/kg once daily (or 4 mg/kg every 12 h). Maximum 400 mg a day.", calc: ["child"] }] }
});

/* ---------- CEFOTAXIME (FDA CLAFORAN, NDA050547, eff. 2026-08-14) ---------- */
FDB_M("cefotaxime", {
  inn: "Cefotaxime", atc: "J01DD01", cls: "Third-generation parenteral cephalosporin",
  linked: [["Neonatal sepsis and meningitis", "Safe in neonates [FDA]", "neosepsis-child"], ["Bacterial meningitis", "High dose [FDA]", ""], ["Serious lower respiratory, urinary, intra-abdominal infections; septicaemia", "[FDA]", ""], ["Gonorrhoea", "Single IM dose [FDA]", ""]],
  forms: ["Powder for injection 500 mg, 1 g, 2 g [FDA].", "Bhutan: 1 g powder for injection vial [BT-NEML]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Half-life about 1 h in adults; longer in low-birth-weight neonates [FDA]."],
  ind: { adult: ["Lower respiratory, genitourinary (including gonorrhoea), gynaecological, bacteraemia/septicaemia, skin, intra-abdominal, bone and joint, CNS infections; perioperative prophylaxis [FDA]."], paed: ["Neonates to adolescents [FDA]."] },
  adult: [["Gonococcal urethritis/cervicitis; rectal gonorrhoea (female)", "0.5 g IM single dose [FDA]."], ["Rectal gonorrhoea (male)", "1 g IM single dose [FDA]."], ["Uncomplicated infection", "1 g every 12 h IM or IV [FDA]."], ["Moderate to severe", "1–2 g every 8 h [FDA]."], ["Septicaemia", "2 g every 6–8 h IV [FDA]."], ["Life-threatening", "2 g every 4 h IV; maximum 12 g/day [FDA]."], ["Surgical prophylaxis", "1 g IM or IV 30–90 min before surgery; caesarean: 1 g IV at cord clamping, then 1 g at 6 and 12 h [FDA]."]],
  paed: { tiers: ["Birth to 7 days: 50 mg/kg every 12 h IV [FDA].", "8–28 days: 50 mg/kg every 8 h IV [FDA].", "29 days–12 years under 50 kg: 50–180 mg/kg/day in 4–6 doses; higher doses for meningitis [FDA].", "50 kg or more: adult dose; maximum 12 g/day [FDA]."], transition: "Adult dose from 50 kg [FDA].", calcNote: "Neonates by age; children mg/kg/day ÷ 4." },
  adj: { renal: "CrCl under 20 mL/min/1.73 m²: halve the dose [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Do not give as a rapid bolus (<60 s) through a central line — arrhythmia reported [FDA]. Check blood counts in courses over 10 days [FDA]." },
  tox: { human: "Most overdoses without toxicity; raised BUN/creatinine; reversible encephalopathy with high beta-lactam doses [FDA].", animal: "Mice and rats: significant mortality above 6000 mg/kg/day parenterally [FDA].", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to cefotaxime or cephalosporins [FDA]."],
  ae: { common: ["Injection-site inflammation, rash, pruritus, fever, eosinophilia, diarrhoea [FDA]."], serious: ["Anaphylaxis [FDA]", "Arrhythmia with rapid central bolus [FDA]", "C. difficile colitis [FDA]", "Neutropenia, agranulocytosis [FDA]"] },
  monitor: ["Blood counts if over 10 days; kidney function [FDA]."],
  local: { neml: "Cefotaxime 1 g powder for injection vial [BT-NEML].", strengths: "1 g vial.", stg: "STG 2024 (neonatal conjunctivitis): a single dose of 100 mg/kg IV or IM is an alternative treatment [BT-STG]." },
  calc: [
    { drug: "cefotaxime", indication_id: "neo", label: "Neonate (under 1 month) — 50 mg/kg every 12 h (every 8 h from day 8)", route: "IV", population: { min_age_months: 0, max_age_months: 1, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest 5 mg", renal: [{ crcl_min: 0, crcl_max: 19.999, action: "reduce_dose", factor: 0.5 }], flags: ["From day 8 to day 28: every 8 h"], sources: ["FDA"] },
    { drug: "cefotaxime", indication_id: "child", label: "Child 1 month–12 years under 50 kg — 50–180 mg/kg/day ÷ every 6 h", route: "IV", population: { min_age_months: 1, max_age_months: 144, min_weight_kg: null, max_weight_kg: 50 }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "day", value_max: 180 }, interval_h: 6, divided_doses: 4, caps: { adult_ceiling_daily: 12000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [{ crcl_min: 0, crcl_max: 19.999, action: "reduce_dose", factor: 0.5 }], flags: ["Higher end for meningitis"], sources: ["FDA"] },
    { drug: "cefotaxime", indication_id: "adult", label: "Adult moderate–severe — 1–2 g every 8 h", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose", value_max: 2000 }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, max_daily: 12000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [{ crcl_min: 0, crcl_max: 19.999, action: "reduce_dose", factor: 0.5 }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CLAFORAN (cefotaxime for injection) — SteriMax (NDA050547), label effective 2026-08-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=434fb630-c8d6-4583-b3ee-8e4ba6552c3d"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "IV/IM third-generation cephalosporin; safe in newborns.",
    adult: [
      { ind: "Moderate to severe infection", text: "1–2 g every 8 hours.", calc: ["adult"] },
      { ind: "Septicaemia / life-threatening", text: "2 g every 6–8 h; up to 2 g every 4 h. Maximum 12 g a day." },
      { ind: "Gonorrhoea", text: "0.5 g IM once (1 g for rectal gonorrhoea in males)." },
      { ind: "Surgical prophylaxis", text: "1 g IM or IV 30–90 min before surgery." }
    ],
    child: [
      { ind: "Birth to 28 days", text: "50 mg/kg IV every 12 h (first week) or every 8 h (days 8–28).", calc: ["neo"] },
      { ind: "1 month–12 years (under 50 kg)", text: "50–180 mg/kg/day in 4–6 doses; high end for meningitis.", calc: ["child"] }
    ] }
});

/* ---------- CEFOTETAN (FDA CEFOTAN, PAI Pharma, NDA050588, eff. 2024-04-08) ---------- */
FDB_M("cefotetan", {
  inn: "Cefotetan", atc: "J01DC05", cls: "Cephamycin (second-generation cephalosporin, anaerobic cover)",
  linked: [["Surgical prophylaxis (abdominal, gynaecological, caesarean)", "[FDA]", ""], ["Gynaecological, intra-abdominal, urinary, skin and bone infections", "[FDA]", ""]],
  forms: ["Powder for injection 1 g, 2 g, 10 g [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis; stable to many beta-lactamases [NEP].",
  pk: ["Half-life 3–4.6 h; longer in kidney impairment [FDA]."],
  ind: { adult: ["UTI, lower respiratory, skin, gynaecological, intra-abdominal, bone and joint infections; perioperative prophylaxis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["UTI", "500 mg every 12 h, or 1–2 g every 24 h, or 1–2 g every 12 h [FDA]."], ["Skin (mild–moderate)", "2 g every 24 h IV or 1 g every 12 h [FDA]."], ["Other sites", "1–2 g every 12 h [FDA]."], ["Severe", "2 g every 12 h IV [FDA]."], ["Life-threatening", "3 g every 12 h IV [FDA]."], ["Prophylaxis", "1–2 g IV once, 30–60 min before surgery; caesarean: at cord clamping [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed adult doses." },
  adj: { renal: "CrCl over 30: usual dose every 12 h; 10–30: every 24 h; under 10: every 48 h (or keep 12-hourly at half or quarter dose) [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Immune haemolytic anaemia, sometimes fatal, reported with cephalosporins — cefotetan especially [FDA]." },
  tox: { human: "No human overdose information [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Treat symptoms; consider haemodialysis, especially with kidney impairment [FDA]." },
  contra: ["Known allergy to cephalosporins [FDA].", "Previous cephalosporin-associated haemolytic anaemia [FDA]."],
  ae: { common: ["Diarrhoea, nausea, raised liver tests, eosinophilia, positive Coombs test [FDA]."], serious: ["Immune haemolytic anaemia [FDA]", "Bleeding / hypoprothrombinaemia [NEP]", "C. difficile colitis [FDA]"] },
  monitor: ["Haemoglobin; PT in at-risk patients [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefotetan", indication_id: "proph", label: "Surgical prophylaxis — 1–2 g IV once", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose", value_max: 2000 }, interval_h: null, divided_doses: 1, caps: { max_single: 2000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cefotetan", indication_id: "tx", label: "Treatment — 1–2 g every 12 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose", value_max: 2000 }, interval_h: 12, divided_doses: 2, caps: { max_single: 3000, max_daily: 6000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [{ crcl_min: 10, crcl_max: 30, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 9.999, action: "extend_interval", factor: 48 }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CEFOTAN (cefotetan for injection) — PAI Pharma, label effective 2024-04-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f1510f5e-d001-44e0-accb-27cf79fd4f9a"]],
  dose: { tagline: "IV cephamycin with anaerobic cover, used mainly for surgical prophylaxis.",
    adult: [
      { ind: "Surgical prophylaxis", text: "1–2 g IV once, 30–60 min before surgery (caesarean: at cord clamping).", calc: ["proph"] },
      { ind: "Treatment", text: "1–2 g every 12 hours; severe 2 g every 12 h; life-threatening 3 g every 12 h.", calc: ["tx"] }
    ],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CEFOXITIN (FDA cefoxitin for injection, Fresenius Kabi ANDA065414; original MEFOXIN) ---------- */
FDB_M("cefoxitin", {
  inn: "Cefoxitin", atc: "J01DC01", cls: "Cephamycin (second-generation cephalosporin, anaerobic cover)",
  linked: [["Intra-abdominal and gynaecological infections (mixed anaerobes)", "[FDA]", ""], ["Surgical prophylaxis (GI, hysterectomy, caesarean)", "[FDA]", ""]],
  forms: ["Powder for injection 1 g, 2 g, 10 g; premixed 1 g and 2 g with dextrose [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis; stable to many beta-lactamases [NEP].",
  pk: ["Half-life 41–59 minutes; longer in kidney impairment [FDA]."],
  ind: { adult: ["Lower respiratory, urinary, intra-abdominal, gynaecological, bone and joint, skin infections; septicaemia; prophylaxis [FDA]."], paed: ["3 months and older [FDA]."] },
  adult: [["Uncomplicated", "1 g every 6–8 h IV (3–4 g/day) [FDA]."], ["Moderately severe or severe", "1 g every 4 h or 2 g every 6–8 h (6–8 g/day) [FDA]."], ["High dose (e.g. gas gangrene)", "2 g every 4 h or 3 g every 6 h (12 g/day) [FDA]."], ["Prophylaxis", "2 g IV 30–60 min before incision, then 2 g every 6 h for no more than 24 h; caesarean: 2 g at cord clamping (± 2 g at 4 and 8 h) [FDA]."]],
  paed: { tiers: ["3 months and older: 80–160 mg/kg/day in 4–6 doses; maximum 12 g/day [FDA].", "Prophylaxis: 30–40 mg/kg at the same times as adults [FDA].", "Birth to 3 months: no recommendation [FDA]."], transition: "Adult doses [NEP].", calcNote: "mg/kg/day ÷ 4 (every 6 h)." },
  adj: { renal: "Loading dose 1–2 g, then: CrCl 30–50: 1–2 g every 8–12 h; 10–29: 1–2 g every 12–24 h; 5–9: 0.5–1 g every 12–24 h; under 5: 0.5–1 g every 24–48 h. Haemodialysis: 1–2 g after each session. Children: modify as for adults [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Decades of cephalosporin use have not shown drug-associated risk [FDA].", other: "Premixed dextrose form: avoid with corn allergy [FDA]." },
  tox: { human: "No human overdose information [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Treat symptoms [FDA]." },
  contra: ["Hypersensitivity to cefoxitin or other beta-lactams [FDA].", "Corn hypersensitivity (dextrose premix only) [FDA]."],
  ae: { common: ["Thrombophlebitis at the infusion site, rash, diarrhoea, eosinophilia [NEP]."], serious: ["Anaphylaxis [FDA]", "C. difficile colitis [FDA]"] },
  monitor: ["Kidney function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefoxitin", indication_id: "proph", label: "Adult prophylaxis — 2 g IV before incision", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2000, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 2000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [], flags: ["Then 2 g every 6 h for no more than 24 h"], sources: ["FDA"] },
    { drug: "cefoxitin", indication_id: "adult", label: "Adult — 1–2 g every 8 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose", value_max: 2000 }, interval_h: 8, divided_doses: 3, caps: { max_single: 3000, max_daily: 12000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [{ crcl_min: 30, crcl_max: 50, action: "extend_interval", factor: 12 }, { crcl_min: 10, crcl_max: 29.999, action: "extend_interval", factor: 24 }, { crcl_min: 5, crcl_max: 9.999, action: "reduce_dose", set_value: 500, set_value_max: 1000, interval_h: 24 }, { crcl_min: 0, crcl_max: 4.999, action: "reduce_dose", set_value: 500, set_value_max: 1000, interval_h: 48 }], renal_note: "Kidney impairment: 1–2 g loading dose first. Label interval ranges — CrCl 30–50: every 8–12 h; 10–29 and 5–9: every 12–24 h; under 5: every 24–48 h (calculator shows the longer interval)", flags: [], sources: ["FDA"] },
    { drug: "cefoxitin", indication_id: "child", label: "Child 3 months and older — 80–160 mg/kg/day ÷ every 6 h", route: "IV", population: { min_age_months: 3, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 80, unit: "mg", per: "day", value_max: 160 }, interval_h: 6, divided_doses: 4, caps: { max_daily: 12000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [], renal_note: "Children with kidney impairment: modify as for adults", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefoxitin for injection USP — Fresenius Kabi (ANDA065414), label effective 2023-07-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a9d1e7b-96ee-4e6c-a1e8-47b76b924422"]],
  dose: { tagline: "IV cephamycin with anaerobic cover for abdominal/pelvic infection and surgical prophylaxis.",
    adult: [
      { ind: "Surgical prophylaxis", text: "2 g IV 30–60 min before incision, then 2 g every 6 h for no more than 24 h.", calc: ["proph"] },
      { ind: "Treatment", text: "1–2 g every 6–8 hours; up to 12 g a day for severe infection.", calc: ["adult"] }
    ],
    child: [
      { ind: "3 months and older", text: "80–160 mg/kg/day in 4–6 doses. Maximum 12 g a day.", calc: ["child"] },
      { ind: "Prophylaxis", text: "30–40 mg/kg at the adult times." }
    ] }
});

/* Brands for batch C-1 — India (PharmEasy) and Bangladesh (MedEx), built 24 Nov 2026 with _work/tools/fdb-brands.js. */
(function () {
  const B = {"cabazitaxel":{"BT":"Bhutan supplies by generic name.","IN":[["Arbaz","Adley Pharmaceutical Private Limited","Arbaz 60 Mg Injection 1.5 Ml"],["Cabazirix","Therdose Pharma Private Limited","Cabazirix 60 Injection 6 Ml"],["Zevtaxel","Zee Laboratories Ltd","Zevtaxel 60Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Jevtana","Synovia Pharma PLC","60 mg/1.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/arbaz-60-mg-injection-1-5-ml-4120803","https://pharmeasy.in/online-medicine-order/cabazirix-60-injection-6-ml-4117071","https://pharmeasy.in/online-medicine-order/zevtaxel-60mg-dry-vial-of-1-powder-for-injection-4819946","https://medex.com.bd/brands/17241/jevtana-60-mg-iv-infusion"]},"cabergoline":{"BT":"Bhutan supplies by generic name.","IN":[["Cabernol","Knoll Healthcare Pvt Ltd","Cabernol 0.5Mg Strip Of 4 Tablets"],["Caberford","Leeford Healthcare Ltd","Caberford 0.25Mg Strip Of 4 Tablets"],["Caberlin","Sun Pharma","Caberlin 0.5Mg Strip Of 4 Tablets"]],"BD":[["Cabergol","Popular Pharmaceuticals PLC","0.5 mg"],["Cabolin","Renata PLC","0.5 mg"],["Argolin","Opsonin Pharma Ltd","0.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cabernol-0-5mg-strip-of-4-tablets-2936584","https://pharmeasy.in/online-medicine-order/caberford-0-25mg-strip-of-4-tablets-4497876","https://pharmeasy.in/online-medicine-order/caberlin-0-5mg-tablet-38551","https://medex.com.bd/brands/5977/cabergol-05-mg-tablet","https://medex.com.bd/brands/5978/cabolin-05-mg-tablet","https://medex.com.bd/brands/5979/argolin-05-mg-tablet"]},"cabozantinib":{"BT":"Bhutan supplies by generic name.","IN":[["Kabonib","Adley Formulation","Kabonib 40 Bottle Of 30 Tablets"],["Cabozanib","Bdr Pharmaceuticals Internationals Pvt Ltd","Cabozanib 60Mg Bottle Of 30 Tablets"],["Cabtiro","Bajaj Healthcare Ltd","Cabtiro 40Mg Bottle Of 30 Tablets"]],"BD":[["Caboz","Beacon Pharmaceuticals PLC","20 mg"],["Comarit","Genvio Pharma Ltd","20 mg"],["Cazar","Jenphar Bangladesh Ltd","20 mg"]],"src":["https://pharmeasy.in/online-medicine-order/kabonib-40-tablet-30-no-s-4114801","https://pharmeasy.in/online-medicine-order/cabozanib-60-tablet-30-no-s-4118351","https://pharmeasy.in/online-medicine-order/cabtiro-40mg-bottle-of-30-tablets-4517416","https://medex.com.bd/brands/27307/caboz-20-mg-capsule","https://medex.com.bd/brands/29318/comarit-20-mg-capsule","https://medex.com.bd/brands/32809/cazar-20-mg-capsule"]},"calcipotriol":{"BT":"Bhutan supplies by generic name.","IN":[["Sorvate","Eris Life Sciences Pvt Ltd","Sorvate 3Mcg Tube Of 20Gm Ointment"],["Calpsor","Eris Life Sciences Pvt Ltd","Calpsor Bottle Of 15Ml Lotion"],["Pasitrex","Ranbaxy Laboratories (sun Pharma)","Pasitrex Tube Of 15Gm Ointment"]],"BD":[["Dyvon","Square Pharmaceuticals PLC","0.005% w/w"],["Planex","Incepta Pharmaceuticals Ltd","0.005% w/w"],["Dovonex","Drug International Ltd","0.005% w/w"]],"src":["https://pharmeasy.in/online-medicine-order/sorvate-3mcg-oint-20gm-11776","https://pharmeasy.in/online-medicine-order/calpsor-lotion-4831","https://pharmeasy.in/online-medicine-order/pasitrex-tube-of-15gm-ointment-4141341","https://medex.com.bd/brands/12732/dyvon-0005-w-ointment","https://medex.com.bd/brands/13052/planex-0005-w-ointment","https://medex.com.bd/brands/34730/dovonex-0005-w-ointment"]},"calcitriol":{"BT":"Bhutan supplies by generic name.","IN":[["Rocaltrol","Abbott Healthcare Pvt Ltd","Rocaltrol 0.25Mcg Strip Of 10 Softgel Capsules"],["Laretol","La Renon Healthcare Pvt Ltd","Laretol 0.25Mcg Strip Of 15 Softgel Capsules"],["Calciterolin","Steris Healthcare","Calciterolin 0.25Mcg Strip Of 10 Softgel Capsules"]],"BD":[["Ostriol","NIPRO JMI Pharma Ltd","0.25 mcg"],["D-Act","Healthcare Pharmaceuticals Ltd","0.25 mcg"],["G-Calcitriol","Gonoshasthaya Pharma Ltd","1 mcg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/rocaltrol-0-25mcg-strip-of-10-capsules-261","https://pharmeasy.in/online-medicine-order/laretol-0-25mcg-strip-of-15-softgel-capsules-4750551","https://pharmeasy.in/online-medicine-order/calciterolin-capsule-10-no-s-4117808","https://medex.com.bd/brands/13524/ostriol-025-mcg-capsule","https://medex.com.bd/brands/38648/d-act-025-mcg-capsule","https://medex.com.bd/brands/35230/g-calcitriol-1-mcg-injection"]},"calcium-acetate":{"BT":"Bhutan supplies by generic name.","IN":[["Phostat","Zydus Lifesciences Limited","Phostat 667Mg Strip Of 10 Tablets"],["Lanum","La Renon Healthcare Pvt Ltd","Lanum 667Mg Strip Of 15 Tablets"],["Septacal","Septalyst Lifesciences Pvt Ltd","Septacal 667Mg Strip Of 10 Tablets"]],"BD":[["Hypophos","Popular Pharmaceuticals PLC","667 mg"],["Remophos","Advanced Chemical Industries PLC","667 mg"],["G-Hypophos","Gonoshasthaya Pharma Ltd","667 mg"]],"src":["https://pharmeasy.in/online-medicine-order/phostat-667mg-strip-of-10-tablets-198257","https://pharmeasy.in/online-medicine-order/lanum-667mg-strip-of-15-tablets-4329176","https://pharmeasy.in/online-medicine-order/septacal-667mg-strip-of-10-tablets-24267","https://medex.com.bd/brands/15644/hypophos-667-mg-tablet","https://medex.com.bd/brands/15645/remophos-667-mg-tablet","https://medex.com.bd/brands/18454/g-hypophos-667-mg-tablet"]},"calcium-folinate":{"BT":"Bhutan supplies by generic name.","IN":[["Biovorin","Zydus Lifesciences Limited","Biovorin 15Mg Strip Of 10 Tablets"],["Leucorin","Samarth Life Sciences Pvt Ltd","Leucorin 15Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/biovorin-15mg-tablet-37864","https://pharmeasy.in/online-medicine-order/leucorin-15mg-strip-of-10-tablets-23836"]},"calcium-gluconate":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Calcium-Jayson","Jayson Pharmaceutical Ltd","500 mg/5 ml"],["Calcium Ambee","Ambee Pharmaceuticals Ltd","500 mg/5 ml"],["G-Calcium Gluconate","Gonoshasthaya Pharma Ltd","500 mg/5 ml"]],"src":["https://medex.com.bd/brands/14255/calcium-jayson-500-mg-iv-infusion","https://medex.com.bd/brands/28025/calcium-ambee-500-mg-iv-infusion","https://medex.com.bd/brands/14261/g-calcium-gluconate-500-mg-iv-infusion"]},"canagliflozin":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Canaglif","Square Pharmaceuticals PLC","100 mg"],["Canarol","Drug International Ltd","100 mg"],["Diacana","NIPRO JMI Pharma Ltd","100 mg"]],"src":["https://medex.com.bd/brands/16349/canaglif-100-mg-tablet","https://medex.com.bd/brands/16350/canarol-100-mg-tablet","https://medex.com.bd/brands/16351/diacana-100-mg-tablet"]},"candesartan":{"BT":"Bhutan supplies by generic name.","IN":[["Actinsar","Rene Lifescience Pvt Ltd","Actinsar 8Mg Strip Of 10 Tablets"]],"BD":[["Giran","Aristopharma Ltd","8 mg"]],"src":["https://pharmeasy.in/online-medicine-order/actinsar-8-tablet-23412","https://medex.com.bd/brands/2685/giran-8-mg-tablet"]},"capecitabine":{"BT":"Bhutan supplies by generic name.","IN":[["Capsy","Intas Pharmaceuticals Ltd","Capsy 500Mg Strip Of 10 Tablets"],["Capetero","Hetero Healthcare Limited","Capetero 500Mg Strip Of 10 Tablets"],["Relicitabine","Reliance Life Science","Relicitabine 500Mg Strip Of 10 Tablets"]],"BD":[["Captabine","Techno Drugs Ltd","500 mg"],["Xeloda","Roche Bangladesh Ltd","500 mg"],["Xitabin","Beacon Pharmaceuticals PLC","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/capsy-500mg-tablet-111039","https://pharmeasy.in/online-medicine-order/capetero-500-mg-tablet-10-204091","https://pharmeasy.in/online-medicine-order/relicitabine-500mg-tab-155589","https://medex.com.bd/brands/15041/captabine-500-mg-tablet","https://medex.com.bd/brands/15042/xeloda-500-mg-tablet","https://medex.com.bd/brands/17268/xitabin-500-mg-tablet"]},"capmatinib":{"BT":"Bhutan supplies by generic name.","IN":[["Rahika","Novartis Healthcare Pvt Ltd","Rahika 200 Mg Tablet 12 No's"]],"BD":[["Capmaxen","Everest Pharmaceuticals Ltd","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/rahika-200-mg-tablet-12-no-s-4093756","https://medex.com.bd/brands/38125/capmaxen-200-mg-tablet"]},"captopril":{"BT":"Bhutan supplies by generic name.","IN":[["Capotril","Lupin","Capotril 25Mg Strip Of 10 Tablets"],["Angiopril","Torrent Pharmaceuticals Ltd","Angiopril 25Mg Strip Of 10 Tablets"],["Aceten","Dr Reddy's Laboratories Ltd","Aceten 12.5Mg Strip Of 10 Tablets"]],"BD":[["Acetor","Drug International Ltd","25 mg"],["Angiten","The IBN SINA Pharmaceutical PLC","25 mg"],["Catopil","Zenith Pharmaceuticals Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/capotril-25mg-tab-39006","https://pharmeasy.in/online-medicine-order/angiopril-25mg-tablet-34894","https://pharmeasy.in/online-medicine-order/aceten-12-5mg-tab-32768","https://medex.com.bd/brands/2594/acetor-25-mg-tablet","https://medex.com.bd/brands/2595/angiten-25-mg-tablet","https://medex.com.bd/brands/2597/catopil-25-mg-tablet"]},"carbamazepine":{"BT":"Bhutan supplies by generic name.","IN":[["Zeptol Cr","Sun Pharma","Zeptol Cr 400Mg Strip Of 10 Tablets"],["Mazetol","Abbott Healthcare Pvt Ltd","Mazetol 200Mg Strip Of 10 Tablets"],["Zen","Intas Pharmaceuticals Ltd","Zen Retard 200Mg Strip Of 10 Tablets"]],"BD":[["Zeptol CR","Sun Pharmaceutical (Bangladesh) Ltd","400 mg"],["Cazep","Opsonin Pharma Ltd","100 mg/5 ml"],["Cazep CR","Opsonin Pharma Ltd","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zeptol-cr-400mg-tablet-25339","https://pharmeasy.in/online-medicine-order/mazetol-200mg-strip-of-10-tablets-201","https://pharmeasy.in/online-medicine-order/zen-retard-200mg-tablet-10-s-13722","https://medex.com.bd/brands/4815/zeptol-cr-400-mg-cr-tablet","https://medex.com.bd/brands/34706/cazep-100-mg-oral-suspension","https://medex.com.bd/brands/34705/cazep-cr-200-mg-cr-tablet"]},"carboplatin":{"BT":"Bhutan supplies by generic name.","IN":[["Carboplatin","Pfizer Product India Private Limited","Carboplatin 150Mg Vial Of 15Ml Injection (Pfizer)"],["Carbopa","Intas Pharmaceuticals Ltd","Carbopa 450Mg Vial Of 45Ml Injection"],["Carbotero","Hetero Healthcare Limited","Carbotero 450Mg Vial Of 45Ml Injection"]],"BD":[["Carboplatin Hexal","Nevian Lifescience PLC","10 mg/ml"],["Carboplatin Sindan","BOTS Pvt","10 mg/ml"],["Carbotin","Techno Drugs Ltd","10 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/carboplatin-150mg-inj-15ml-39069","https://pharmeasy.in/online-medicine-order/carbopa-450mg-inj-45ml-68386","https://pharmeasy.in/online-medicine-order/carbotero-450-mg-injection-45-ml-205403","https://medex.com.bd/brands/15091/carboplatin-hexal-10-mg-iv-infusion","https://medex.com.bd/brands/17277/carboplatin-sindan-10-mg-iv-infusion","https://medex.com.bd/brands/15093/carbotin-10-mg-iv-infusion"]},"carboprost":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Carbestop","Incepta Pharmaceuticals Ltd","250 mcg/ml"]],"src":["https://medex.com.bd/brands/26047/carbestop-250-mcg-injection"]},"carfilzomib":{"BT":"Bhutan supplies by generic name.","IN":[["Mylocar","Bdr Pharmaceuticals Internationals Pvt Ltd","Mylocar 60Mg Dry Vial Of 1 Powder For Injection"],["Carfimib","Adley Labs","Carfimib 30Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Carfilez","Beacon Pharmaceuticals PLC","10 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/mylocar-60mg-dry-vial-of-1-powder-for-injection-4195652","https://pharmeasy.in/online-medicine-order/carfimib-30-mg-dry-vial-of-1-powder-for-injection-4827848","https://medex.com.bd/brands/36079/carfilez-10-mg-injection"]},"cariprazine":{"BT":"Bhutan supplies by generic name.","IN":[["Carispec","Sun Pharma","Carispec 6Mg Strip Of 10 Capsules"],["Carinia","Intas Pharmaceuticals Ltd","Carinia 4.5 Strip Of 10 Capsules"]],"BD":[["Caripran","Incepta Pharmaceuticals Ltd","1.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/carispec-6-capsule-10-no-s-4120158","https://pharmeasy.in/online-medicine-order/carinia-4-5-capsule-10-no-s-4122357","https://medex.com.bd/brands/37379/caripran-15-mg-capsule"]},"carisoprodol":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Carilax","Incepta Pharmaceuticals Ltd","250 mg"],["Caridol","Eskayef Pharmaceuticals Ltd","250 mg"],["Somalax","Navana Pharmaceuticals Ltd","250 mg"]],"src":["https://medex.com.bd/brands/26193/carilax-250-mg-tablet","https://medex.com.bd/brands/30982/caridol-250-mg-tablet","https://medex.com.bd/brands/34845/somalax-250-mg-tablet"]},"carmustine":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Carmustine","Renata PLC","100 mg/vial"]],"src":["https://medex.com.bd/brands/34513/carmustine-100-mg-iv-infusion"]},"carvedilol":{"BT":"Bhutan supplies by generic name.","IN":[["Carvenol","Knoll Healthcare Pvt Ltd","Carvenol 3.125Mg Strip Of 10 Tablets"],["Carvediol","Steris Healthcare","Carvediol Cr 10 Strip Of 10 Tablets"],["Carca","Intas Pharmaceuticals Ltd","Carca Cr 10Mg Strip Of 15 Tablets"]],"BD":[["Vedilol","Eskayef Pharmaceuticals Ltd","12.5 mg"],["Arilol","Pacific Pharmaceuticals Ltd","25 mg"],["Dilgard","General Pharmaceuticals Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/carvenol-3-125mg-tablet-109599","https://pharmeasy.in/online-medicine-order/carvediol-cr-10-tablet-10-no-s-3731548","https://pharmeasy.in/online-medicine-order/carca-cr-10mg-tablet-15-s-226126","https://medex.com.bd/brands/30040/vedilol-125-mg-tablet","https://medex.com.bd/brands/30721/arilol-25-mg-tablet","https://medex.com.bd/brands/30726/dilgard-25-mg-tablet"]},"caspofungin":{"BT":"Bhutan supplies by generic name.","IN":[["Brufungin","Brawn Laboratories Ltd","Brufungin 50Mg Dry Vial Of 1 Powder For Injection"],["Bdcaspo","Bdr Pharmaceuticals Internationals Pvt Ltd","Bdcaspo 70Mg Dry Vial Of 1 Powder For Injection"],["Casocan","Celon Laboratories Ltd","Casocan 50 Dry Vial Of 1 Powder For Injection"]],"BD":[["Caspogin","Healthcare Pharmaceuticals Ltd","50 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/brufungin-50mg-dry-vial-of-1-powder-for-injection-3803942","https://pharmeasy.in/online-medicine-order/bdcaspo-70-mg-injection-1-no-s-4115861","https://pharmeasy.in/online-medicine-order/casocan-50-injection-1-no-s-3731553","https://medex.com.bd/brands/33400/caspogin-50-mg-iv-infusion"]},"cefaclor":{"BT":"Bhutan supplies by generic name.","IN":[["Keflor","Ranbaxy Laboratories (sun Pharma)","Keflor 125Mg Oral Suspension 30Ml"],["Distaclor","Lupin","Distaclor 125Mg Bottle Of 60Ml Dry Syrup"],["Kefwin","Ikon Remedies Private Limited","Kefwin 50Mg Bottle Of 10Ml Dry Suspension"]],"BD":[["Loracef","Square Pharmaceuticals PLC","125 mg/5 ml"],["Abaclor","Advanced Chemical Industries PLC","250 mg"],["Oticef","Alco Pharma Ltd","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/keflor-125mg-oral-suspension-30ml-51816","https://pharmeasy.in/online-medicine-order/distaclor-125mg-bottle-of-60ml-dry-syrup-4332789","https://pharmeasy.in/online-medicine-order/kefwin-oral-drops-3934202","https://medex.com.bd/brands/7124/loracef-125-mg-powder-for-suspension","https://medex.com.bd/brands/30731/abaclor-250-mg-capsule","https://medex.com.bd/brands/27873/oticef-500-mg-capsule"]},"cefadroxil":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Cefador","Somatec Pharmaceuticals Ltd","500 mg"],["Droxil","Rangs Pharmaceuticals Ltd","125 mg/1.25 ml"],["Sefanid","Drug International Ltd","500 mg"]],"src":["https://medex.com.bd/brands/30739/cefador-500-mg-capsule","https://medex.com.bd/brands/27801/droxil-125-mg-pediatric-drop","https://medex.com.bd/brands/28384/sefanid-500-mg-capsule"]},"cefalexin":{"BT":"Bhutan supplies by generic name.","IN":[["Cephadex","Cipla Gx","Cephadex 500Mg Strip Of 10 Capsules"],["Sporidex","Ranbaxy Laboratories (sun Pharma)","Sporidex 500Mg Strip Of 10 Capsules"],["Phexin","Glaxosmithkline","Phexin 500Mg Strip Of 10 Capsules"]],"BD":[["Cefalex","Drug International Ltd","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cephadex-500mg-capsule-39959","https://pharmeasy.in/online-medicine-order/sporidex-500mg-capsule-22804","https://pharmeasy.in/online-medicine-order/phexin-500mg-capsule-11394","https://medex.com.bd/brands/6699/cefalex-500-mg-capsule"]},"cefazolin":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Cefazoline Panpharma","City Overseas Ltd","1 gm/5 ml"],["Zolibac","Square Pharmaceuticals PLC","1 gm/vial"],["Cefazol","Incepta Pharmaceuticals Ltd","500 mg/vial"]],"src":["https://medex.com.bd/brands/34411/cefazoline-panpharma-1-gm-imiv-injection","https://medex.com.bd/brands/26292/zolibac-1-gm-imiv-injection"]},"cefdinir":{"BT":"Bhutan supplies by generic name.","IN":[["Sefdin","Unichem Laboratories Ltd","Sefdin 300Mg Strip Of 10 Tablets"],["Cefrine","Macleods Pharmaceuticals","Cefrine 300Mg Strip Of 10 Capsules"],["Dinitag","Ikon Remedies Private Limited","Dinitag 125Mg Bottle Of 30Ml Dry Suspension"]],"BD":[["Cefexta","UniMed UniHealth Pharmaceuticals Ltd","300 mg"],["Efdinir","Incepta Pharmaceuticals Ltd","300 mg"],["Adinir","ACME Laboratories Ltd","300 mg"]],"src":["https://pharmeasy.in/online-medicine-order/sefdin-300mg-tab-10-s-3741818","https://pharmeasy.in/online-medicine-order/cefrine-300mg-strip-of-10-capsules-3483150","https://pharmeasy.in/online-medicine-order/dinitag-dry-syrup-3934197","https://medex.com.bd/brands/7439/cefexta-300-mg-capsule","https://medex.com.bd/brands/7449/efdinir-300-mg-capsule","https://medex.com.bd/brands/28233/adinir-300-mg-capsule"]},"cefepime":{"BT":"Bhutan supplies by generic name.","IN":[["Novapime","Lupin","Novapime Dry Vial 1Gm Powder For Injection"]],"BD":[["Xtrapime","Asiatic Laboratories Ltd","500 mg/vial"],["Efepime","Ziska Pharmaceuticals Ltd","2 gm/vial"],["Tetracef","Beximco Pharmaceuticals PLC","2 gm/vial"]],"src":["https://pharmeasy.in/online-medicine-order/novapime-1gm-inj-55655","https://medex.com.bd/brands/18680/xtrapime-500-mg-imiv-injection","https://medex.com.bd/brands/30754/efepime-2-gm-injection","https://medex.com.bd/brands/30760/tetracef-2-gm-injection"]},"cefixime":{"BT":"Bhutan supplies by generic name.","IN":[["Cefxtrue","Avighna Medicare Pvt Ltd","Cefxtrue 100Mg Strip Of 10 Tablets"],["Cefix","Cipla Gx","Cefix 200Mg Strip Of 10 Tablets"],["Ceftas","Intas Pharmaceuticals Ltd","Ceftas 200Mg Strip Of 10 Tablets"]],"BD":[["Cefixime-A","Ad-din Pharmaceuticals Ltd","400 mg"],["Duracef","Navana Pharmaceuticals Ltd","25 mg/ml"],["Fix-A","ACME Laboratories Ltd","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cefxtrue-100mg-strip-of-10-tablets-3553786","https://pharmeasy.in/online-medicine-order/cefix-200mg-tab-6631","https://pharmeasy.in/online-medicine-order/ceftas-200mg-tab-39777","https://medex.com.bd/brands/36546/cefixime-a-400-mg-capsule","https://medex.com.bd/brands/18774/duracef-25-mg-pediatric-drop"]},"cefotaxime":{"BT":"Bhutan supplies by generic name.","IN":[["Taxim","Alkem Laboratories Ltd","Taxim Vial Of 1Gm Powder For Injection"],["Seftoxim","Zee Laboratories Ltd","Seftoxim 1000Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Taxceph","The IBN SINA Pharmaceutical PLC","250 mg/5 ml"],["Cefot","Advanced Chemical Industries PLC","2 gm/10 ml"],["Cetaxim","Globe Pharmaceuticals Ltd","500 mg/10 ml"]],"src":["https://pharmeasy.in/online-medicine-order/taxim-vial-of-1gm-powder-for-injection-2459","https://pharmeasy.in/online-medicine-order/seftoxim-1000mg-dry-vial-of-1-powder-for-injection-3870252","https://medex.com.bd/brands/7720/taxceph-250-mg-imiv-injection","https://medex.com.bd/brands/38141/cefot-2-gm-imiv-injection","https://medex.com.bd/brands/30765/cetaxim-500-mg-imiv-injection"]}};
  Object.entries(B).forEach(([id, b]) => { if (window.FDB[id]) window.FDB[id].brands = b; });
})();
