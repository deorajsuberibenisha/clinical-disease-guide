/* Clinical Disease Guide — Drug monograph database, block L, batch L-1 (25 Nov 2026).
   Lacosamide … levamlodipine. Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed text "@LABEL" is filled from the saved FDA label by _work/tools/fdb-boxed-fill.js.
   Labels replaced: lansoprazole (Prevacid Rx, not an OTC pack). Deferred: lactic acid (pack picked a dialysis fluid). */
(function () { // L-1 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const CHEMO = "High-alert — chemotherapeutic agents (parenteral and oral) are on the ISMP list of high-alert medications [ISMP]";

FDB_M("lacosamide", {
  inn: "Lacosamide", atc: "N03AX18", cls: "Antiseizure medicine (sodium-channel slow inactivation)",
  linked: [],
  forms: ["Tablets 50–200 mg; oral solution 10 mg/mL; injection 10 mg/mL [FDA]."],
  moa: "Enhances slow inactivation of voltage-gated sodium channels [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 13 h; oral and IV doses are the same [FDA]."],
  ind: { adult: ["Partial-onset seizures (monotherapy or adjunct); adjunct for primary generalised tonic-clonic seizures [FDA]."], paed: ["Partial-onset seizures from 1 month; PGTCS adjunct from 4 years [FDA]."] },
  adult: [["Monotherapy (17 years and older)", "Start 100 mg twice daily; increase by 50 mg twice daily weekly; maximum 200 mg twice daily [FDA]."], ["Adjunctive therapy", "Start 50 mg twice daily; maximum 200 mg twice daily [FDA]."], ["Severe kidney impairment (CrCl < 30) or end-stage", "Reduce the maximum dose by 25% [FDA]."]],
  paed: { tiers: ["50 kg and over: 50 mg twice daily, increase weekly; monotherapy 150–200 mg twice daily, adjunct 100–200 mg twice daily [FDA].", "30 to < 50 kg: 1 mg/kg twice daily, increase by 1 mg/kg twice daily weekly to 2–4 mg/kg twice daily [FDA].", "Smaller children: weight-based schedule in the label [FDA]."], transition: "Adult doses from 50 kg / 17 years.", calcNote: "mg/kg twice daily 30–<50 kg." },
  adj: { renal: "CrCl < 30: maximum reduced by 25% [FDA].", hepatic: "Mild–moderate: reduce; severe: not recommended [FDA].", other: "PR prolongation and AV block — ECG if cardiac disease or other PR-prolonging drugs [FDA]." },
  tox: { human: "Dizziness, nausea, seizures, cardiac conduction disorders at high doses [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; ECG; haemodialysis removes about half [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Diplopia, headache, dizziness, nausea, somnolence [FDA]."], serious: ["Suicidal behaviour and ideation [FDA]", "Cardiac rhythm and conduction abnormalities [FDA]", "Dizziness and ataxia; DRESS [FDA]"] },
  monitor: ["ECG before and after titration in at-risk patients; mood [FDA]."],
  local: notBT,
  calc: [
    { drug: "lacosamide", indication_id: "adj_adult", label: "Adjunctive — adult starting dose", route: "PO/IV", population: { min_age_months: 204, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 200, max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 0, crcl_max: 29.999, action: "cap_daily", max_daily: 300 }], flags: ["Increase by 50 mg twice daily every week"], sources: ["FDA"] },
    { drug: "lacosamide", indication_id: "c30_50", label: "Child 30 to < 50 kg — starting dose", route: "PO/IV", population: { min_age_months: 1, max_age_months: 204, min_weight_kg: 30, max_weight_kg: 50 },
      basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 12, caps: {}, weight_basis: "actual", formulations: [{ form: "oral solution", strength: 10, unit: "mg/mL" }], rounding: "0.5 mL", renal: [], flags: ["Increase weekly to 2–4 mg/kg twice daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Lacosamide oral solution — Bryant Ranch, label effective 2026-11-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=024bca92-cac5-4832-a1ff-c1b3d5994ba0"], NEML_SRC],
  dose: { tagline: "Antiseizure medicine, oral or IV at the same dose.", adult: [{ ind: "Partial-onset seizures", text: "50–100 mg twice daily, up to 200 mg twice daily; CrCl < 30: max 300 mg/day.", calc: ["adj_adult"] }], child: [{ ind: "30–<50 kg", text: "1 mg/kg twice daily, up to 2–4 mg/kg twice daily.", calc: ["c30_50"] }] }
});

FDB_M("lanadelumab", {
  inn: "Lanadelumab", atc: "B06AC05", cls: "Plasma kallikrein inhibitor (monoclonal antibody)",
  linked: [],
  forms: ["Prefilled syringe or vial 300 mg/2 mL; 150 mg/mL syringe [FDA]."],
  moa: "Inhibits plasma kallikrein, reducing bradykinin [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 2 weeks [FDA]."],
  ind: { adult: ["Prophylaxis of hereditary angioedema attacks [FDA]."], paed: ["From 2 years [FDA]."] },
  adult: [["HAE prophylaxis (12 years and older)", "300 mg SC every 2 weeks; every 4 weeks may be considered if attack-free [FDA]."]],
  paed: { tiers: ["2 to < 12 years: dose by age per label (150 mg every 2–4 weeks) [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose from 12 years.", calcNote: "Fixed doses." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Not for treating acute attacks [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Injection-site reactions, upper respiratory infection, headache, rash, dizziness, diarrhoea, myalgia [FDA]."], serious: ["Hypersensitivity reactions [FDA]"] },
  monitor: ["Attack frequency [UNVERIFIED-KNOWLEDGE]."],
  local: notBT, calc: [],
  sources: [["FDA", "TAKHZYRO (lanadelumab-flyo) — Takeda, label effective 2026-09-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=15f99d8c-efe7-4f7d-aa20-0d0f1e30c6e8"], NEML_SRC],
  dose: { tagline: "Fortnightly injection to prevent hereditary angioedema attacks.", adult: [{ ind: "HAE prophylaxis", text: "300 mg SC every 2 weeks." }], child: [{ ind: "2–<12 years", text: "Age-based dosing per label." }] }
});

FDB_M("landiolol", {
  inn: "Landiolol", atc: "C07AB14", cls: "Ultra-short-acting beta-1-selective blocker (IV)",
  risk: "High-alert — IV adrenergic antagonists are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Atrial fibrillation — adults", "Short-term rate control [FDA]", "af-adult"]],
  forms: ["Powder for injection 280 mg vial [FDA]."],
  moa: "Highly selective beta-1 blockade with very short half-life [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 4 min [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Short-term reduction of ventricular rate in SVT including atrial fibrillation and flutter [FDA]."], paed: ["Supraventricular tachycardia [FDA]."] },
  adult: [["Normal cardiac function", "Start 9 mcg/kg/min IV; adjust every 10 min by 9 mcg/kg/min; maximum 36 mcg/kg/min [FDA]."], ["Impaired cardiac function", "Start 1 mcg/kg/min; adjust every 15 min by 1 mcg/kg/min; maximum 36 mcg/kg/min [FDA]."]],
  paed: { tiers: ["Paediatric SVT: per label weight-based infusion [FDA]."], transition: "Adult rates.", calcNote: "mcg/kg/min infusion." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Diabetes: may mask hypoglycaemia [FDA]." },
  tox: { human: "Bradycardia, hypotension [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop infusion — short action [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe sinus bradycardia, sick sinus syndrome, heart block above first degree [FDA].", "Decompensated heart failure; cardiogenic shock; pulmonary hypertension [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hypotension, bradycardia [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension, bradycardia, heart failure [FDA]", "Bronchospasm in reactive airway disease [FDA]"] },
  monitor: ["Continuous ECG and blood pressure [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "RAPIBLYK (landiolol) for injection — AOP Orphan, label effective 2026-10-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27e7f20f-78a4-f1a9-e063-6394a90ae465"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "IV ultra-short beta-blocker for rapid rate control.", adult: [{ ind: "SVT / AF rate control", text: "9 mcg/kg/min, titrate by 9 every 10 min to max 36 (impaired heart: start 1)." }], child: [{ ind: "SVT", text: "Per label." }] }
});

FDB_M("lanreotide", {
  inn: "Lanreotide", atc: "H01CB03", cls: "Somatostatin analogue (depot)",
  linked: [],
  forms: ["Prefilled syringes 60, 90, 120 mg (deep SC) [FDA]."],
  moa: "Somatostatin-receptor agonist reducing GH, IGF-1 and hormone secretion [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 23–30 days [FDA]."],
  ind: { adult: ["Acromegaly; GEP neuroendocrine tumours; carcinoid syndrome [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Acromegaly", "90 mg deep SC every 4 weeks for 3 months, then adjust by GH/IGF-1 [FDA]."], ["GEP-NETs; carcinoid syndrome", "120 mg every 4 weeks [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: "Acromegaly: lower starting dose in moderate–severe impairment [UNVERIFIED-KNOWLEDGE].", hepatic: "Lower starting dose [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Hypersensitivity to lanreotide [FDA]."],
  ae: { common: ["Diarrhoea, gallstones, abdominal pain, nausea, injection-site reactions [FDA]."], serious: ["Gallstones and complications [FDA]", "Hyper- or hypoglycaemia [FDA]", "Bradycardia [FDA]"] },
  monitor: ["Glucose, heart rate, gallbladder [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "SOMATULINE DEPOT (lanreotide) — Ipsen, label effective 2024-10-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e4a41fd-a753-4362-87ee-8cc56ed3660d"], NEML_SRC],
  dose: { tagline: "Monthly depot for acromegaly and neuroendocrine tumours.", adult: [{ ind: "Acromegaly", text: "90 mg every 4 weeks, then titrate." }, { ind: "GEP-NET / carcinoid", text: "120 mg every 4 weeks." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("lansoprazole", {
  inn: "Lansoprazole", atc: "A02BC03", cls: "Proton-pump inhibitor",
  linked: [],
  forms: ["Delayed-release capsules 15, 30 mg; orally disintegrating tablets [FDA]."],
  moa: "Irreversibly inhibits the gastric H+/K+ ATPase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take before a meal [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Duodenal and gastric ulcer; H. pylori eradication; NSAID ulcer healing and prevention; GERD and erosive oesophagitis; Zollinger-Ellison [FDA]."], paed: ["GERD and erosive oesophagitis from 1 year [FDA]."] },
  adult: [["Duodenal ulcer", "15 mg once daily for 4 weeks [FDA]."], ["Gastric ulcer; NSAID ulcer healing", "30 mg once daily for up to 8 weeks [FDA]."], ["GERD", "15 mg once daily up to 8 weeks; erosive oesophagitis 30 mg once daily up to 8 weeks [FDA]."], ["H. pylori triple therapy", "30 mg twice daily with amoxicillin 1 g and clarithromycin 500 mg twice daily for 10–14 days [FDA]."]],
  paed: { tiers: ["1–11 years, GERD/erosive oesophagitis: ≤ 30 kg 15 mg once daily; > 30 kg 30 mg once daily, up to 12 weeks [FDA].", "12–17 years: adult GERD doses [FDA]."], transition: "Adult doses from 12 years.", calcNote: "Weight band in children." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe impairment: lower dose [FDA].", other: "Long-term: low magnesium, B12, fractures [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No specific toxicity [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Diarrhoea, abdominal pain, nausea, headache [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute tubulointerstitial nephritis [FDA]", "C. difficile diarrhoea [FDA]", "Fractures, hypomagnesaemia, cutaneous lupus with long use [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Exclude gastric malignancy [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 (omeprazole is) [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "lansoprazole", indication_id: "child", label: "GERD — child 1–11 years", route: "PO", population: { min_age_months: 12, max_age_months: 144, min_weight_kg: null, max_weight_kg: null },
      basis: "band", bands: [{ min_weight_kg: 0, max_weight_kg: 30.001, text: "15 mg once daily (up to 12 weeks)", daily: 15 }, { min_weight_kg: 30.001, max_weight_kg: null, text: "30 mg once daily (up to 12 weeks)", daily: 30 }],
      dose: { value: 0, unit: "mg", per: "dose" }, interval_h: 24, caps: {}, weight_basis: "actual", formulations: [{ form: "cap", strength: 15, unit: "mg/cap" }], renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "PREVACID (lansoprazole) — Takeda, label effective 2025-07-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=71ba78cb-7e46-43eb-9425-fa130f537f84"], NEML_SRC],
  dose: { tagline: "Proton-pump inhibitor for ulcers, reflux and H. pylori.", adult: [{ ind: "Reflux / ulcer", text: "15–30 mg once daily; H. pylori 30 mg twice daily." }], child: [{ ind: "GERD, 1–11 years", text: "≤ 30 kg 15 mg; > 30 kg 30 mg once daily.", calc: ["child"] }] }
});

FDB_M("lanthanum-carbonate", {
  inn: "Lanthanum carbonate", atc: "V03AE03", cls: "Non-calcium phosphate binder",
  linked: [],
  forms: ["Chewable tablets 500, 750, 1,000 mg [FDA]."],
  moa: "Binds dietary phosphate in the gut [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal absorption; deposits in bone [FDA]."],
  ind: { adult: ["Hyperphosphataemia in end-stage kidney disease [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Hyperphosphataemia", "1,500 mg/day in divided doses with or just after meals; titrate every 2–3 weeks to phosphate target; chew or crush completely [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Titrated." },
  adj: { renal: "Designed for ESRD [FDA].", other: "Separate other oral drugs (binding) [FDA]. Radio-opaque on X-ray [FDA]." },
  tox: { human: "GI upset [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Hypersensitivity; bowel obstruction, ileus, faecal impaction [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, abdominal pain [UNVERIFIED-KNOWLEDGE]."], serious: ["GI obstruction, ileus, perforation, faecal impaction [FDA]"] },
  monitor: ["Serum phosphate during titration and regularly [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "Lanthanum carbonate chewable tablets — Prasco, label effective 2025-12-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bb263fe8-2bdf-4dba-807f-194f54a73654"], NEML_SRC],
  dose: { tagline: "Chewable phosphate binder for dialysis patients.", adult: [{ ind: "Hyperphosphataemia", text: "1,500 mg/day with meals, titrate every 2–3 weeks; chew completely." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("lapatinib", {
  inn: "Lapatinib", atc: "L01EH01", cls: "HER2/EGFR tyrosine kinase inhibitor", risk: CHEMO,
  linked: [],
  forms: ["Tablets 250 mg [FDA]."],
  moa: "Dual HER2 and EGFR kinase inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 24 h [FDA]."],
  ind: { adult: ["HER2-positive advanced breast cancer with capecitabine (after anthracycline, taxane, trastuzumab), or with letrozole in HR+ postmenopausal women [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["With capecitabine", "1,250 mg (5 tablets) once daily days 1–21, with capecitabine 2,000 mg/m²/day days 1–14, 21-day cycle [FDA]."], ["With letrozole", "1,500 mg once daily [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "Not studied [FDA].", hepatic: "Severe: reduce dose [UNVERIFIED-KNOWLEDGE].", other: "Take 1 h before or after food [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Diarrhoea, vomiting [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Severe hypersensitivity to lapatinib [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, hand-foot syndrome, rash, fatigue (over 20%) [FDA]."], serious: ["Hepatotoxicity [FDA]", "Decreased LVEF [FDA]", "QT prolongation; interstitial lung disease; severe diarrhoea [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LVEF before and during; liver tests every 4–6 weeks [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "TYKERB (lapatinib) — Novartis, label effective 2026-01-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eee37f88-ec6a-4c30-b8aa-e2c71f93088c"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Oral HER2 inhibitor for advanced breast cancer.", boxedTitle: "Hepatotoxicity", boxed: "Hepatotoxicity has been observed in clinical trials and postmarketing experience. The hepatotoxicity may be severe and deaths have been reported. Causality of the deaths is uncertain [FDA].",
    adult: [{ ind: "HER2+ breast cancer", text: "1,250 mg daily with capecitabine." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("laronidase", {
  inn: "Laronidase", atc: "A16AB05", cls: "Enzyme replacement (alpha-L-iduronidase)",
  linked: [],
  forms: ["Injection 2.9 mg/5 mL (0.58 mg/mL) [FDA]."],
  moa: "Replaces the missing lysosomal enzyme in MPS I [UNVERIFIED-KNOWLEDGE].",
  pk: ["Weekly IV infusion [FDA]."],
  ind: { adult: ["Hurler and Hurler-Scheie MPS I; Scheie form with moderate–severe symptoms [FDA]."], paed: ["Same [FDA]."] },
  adult: [["MPS I", "0.58 mg/kg IV once weekly, with antipyretic/antihistamine premedication [FDA]."]],
  paed: { tiers: ["Same 0.58 mg/kg weekly [FDA]."], transition: "Same.", calcNote: "mg/kg weekly." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Delay infusion during acute febrile or respiratory illness [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Infusion reactions: fever, chills, raised BP, tachycardia, low oxygen saturation [FDA]."], serious: ["Anaphylaxis; acute respiratory complications [FDA]"] },
  monitor: ["Airway and oxygen during infusion [FDA]."],
  local: notBT,
  calc: [
    { drug: "laronidase", indication_id: "mps1", label: "MPS I — weekly dose", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 0.58, unit: "mg", per: "dose" }, interval_h: 168, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 0.58, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Premedicate"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ALDURAZYME (laronidase) — Genzyme, label effective 2026-09-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a80ac249-cae4-41f3-88bb-344088b20e60"], NEML_SRC],
  dose: { tagline: "Weekly enzyme replacement for MPS I.", boxedTitle: "Anaphylaxis and acute respiratory complications", boxed: " [FDA].",
    adult: [{ ind: "MPS I", text: "0.58 mg/kg IV weekly.", calc: ["mps1"] }], child: [{ ind: "MPS I", text: "0.58 mg/kg IV weekly.", calc: ["mps1"] }] }
});

FDB_M("larotrectinib", {
  inn: "Larotrectinib", atc: "L01EX12", cls: "TRK inhibitor", risk: CHEMO,
  linked: [],
  forms: ["Capsules 25, 100 mg; oral solution 20 mg/mL [FDA]."],
  moa: "Selective inhibitor of TRK A, B and C [UNVERIFIED-KNOWLEDGE].",
  pk: ["Twice daily [FDA]."],
  ind: { adult: ["NTRK gene-fusion solid tumours (metastatic or unresectable) without satisfactory alternatives [FDA]."], paed: ["Same, all ages [FDA]."] },
  adult: [["NTRK fusion tumours", "100 mg twice daily [FDA]."]],
  paed: { tiers: ["BSA under 1 m²: 100 mg/m² twice daily [FDA].", "BSA 1 m² or more: 100 mg twice daily [FDA]."], transition: "100 mg twice daily from 1 m².", calcNote: "mg/m² in small children." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate–severe: reduce 50% [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Fatigue, raised liver enzymes, dizziness, nausea, cough, constipation [UNVERIFIED-KNOWLEDGE]."], serious: ["CNS effects: dizziness, cognitive impairment, mood and sleep disturbance [FDA]", "Hepatotoxicity [UNVERIFIED-KNOWLEDGE]", "Skeletal fractures [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests every 2 weeks for the first month, then monthly [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "larotrectinib", indication_id: "child", label: "Child BSA under 1 m²", route: "PO", population: { min_age_months: 0, max_age_months: 216, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_m2", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "oral solution", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Height needed; BSA ≥ 1 m²: 100 mg twice daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "VITRAKVI (larotrectinib) — Bayer, label effective 2026-05-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0c8ca614-58b2-4aa4-83d3-0387a8f782fd"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Tumour-agnostic TRK inhibitor for NTRK-fusion cancers.", adult: [{ ind: "NTRK fusion tumour", text: "100 mg twice daily." }], child: [{ ind: "BSA < 1 m²", text: "100 mg/m² twice daily.", calc: ["child"] }] }
});


FDB_M("lasmiditan", {
  inn: "Lasmiditan", atc: "N02CC08", cls: "Serotonin 5-HT1F agonist (ditan)",
  linked: [["Migraine", "Acute attack [FDA]", "migraine"]],
  forms: ["Tablets 50, 100 mg [FDA]."],
  moa: "Selective 5-HT1F agonist without vasoconstriction [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 5.7 h [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute treatment of migraine with or without aura (not prevention) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Acute migraine", "50, 100 or 200 mg orally as needed; no more than one dose in 24 h; a second dose for the same attack has not been shown to help [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Do not drive or operate machinery for at least 8 h after each dose [FDA]." },
  tox: { human: "CNS depression, dizziness [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Dizziness, fatigue, paraesthesia, sedation (5% or more) [FDA]."], serious: ["Driving impairment [FDA]", "CNS depression; serotonin syndrome; medication-overuse headache [FDA]"] },
  monitor: ["Headache frequency (overuse) [UNVERIFIED-KNOWLEDGE]."],
  local: notBT, calc: [],
  sources: [["FDA", "REYVOW (lasmiditan) tablets — Eli Lilly, label effective 2026-01-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=aea3358c-ff41-4490-9e6d-c7bf7b3de13f"], NEML_SRC],
  dose: { tagline: "Non-vasoconstricting acute migraine tablet; no driving for 8 h.", adult: [{ ind: "Acute migraine", text: "50–200 mg once in 24 h." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("latanoprostene-bunod", {
  inn: "Latanoprostene bunod", atc: "S01EE06", cls: "Nitric-oxide-donating prostaglandin analogue (eye drops)",
  linked: [],
  forms: ["Eye drops 0.024% [FDA]."],
  moa: "Increases uveoscleral and trabecular outflow [UNVERIFIED-KNOWLEDGE].",
  pk: ["Once daily in the evening [FDA]."],
  ind: { adult: ["Open-angle glaucoma or ocular hypertension [FDA]."], paed: ["Not recommended at 16 years and younger (pigmentation) [FDA]."] },
  adult: [["Glaucoma / ocular hypertension", "1 drop in the affected eye(s) once daily in the evening; not more often (less effective) [FDA]."]],
  paed: { tiers: ["Not recommended at 16 years and younger [FDA]."], transition: "Adults.", calcNote: "Eye drops." },
  adj: { renal: "Not applicable.", other: "Separate other eye drops by at least 5 min [FDA]." },
  tox: { human: "Not expected [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "—" },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Conjunctival hyperaemia, eye irritation, eye pain [UNVERIFIED-KNOWLEDGE]."], serious: ["Permanent iris pigmentation; eyelid darkening; eyelash changes; macular oedema [FDA]"] },
  monitor: ["Intraocular pressure [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 (latanoprost 0.005% is) [BT-NEML].", strengths: "Not available.", stg: "Not in Bhutan STG 2024 [BT-STG]." }, calc: [],
  sources: [["FDA", "VYZULTA (latanoprostene bunod) 0.024% — Bausch & Lomb, label effective 2024-02-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60ce7900-a677-4fc2-88d0-1603baa9dbd4"], NEML_SRC],
  dose: { tagline: "Once-nightly glaucoma drop.", adult: [{ ind: "Glaucoma", text: "1 drop each evening." }], child: [{ ind: "—", text: "Not recommended ≤ 16 years." }] }
});

FDB_M("lebrikizumab", {
  inn: "Lebrikizumab", atc: "D11AH10", cls: "IL-13 monoclonal antibody",
  linked: [],
  forms: ["Prefilled pen or syringe 250 mg/2 mL [FDA]."],
  moa: "Binds IL-13, blocking type 2 inflammation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Loading then every 2, then 4 weeks [FDA]."],
  ind: { adult: ["Moderate-to-severe atopic dermatitis not controlled by topical therapy [FDA]."], paed: ["12 years and older weighing at least 40 kg [FDA]."] },
  adult: [["Atopic dermatitis", "500 mg SC at weeks 0 and 2, then 250 mg every 2 weeks to week 16 or response; maintenance 250 mg every 4 weeks (or every 8 weeks) [FDA]."]],
  paed: { tiers: ["12 years and ≥ 40 kg: adult regimen [FDA]."], transition: "Same.", calcNote: "Fixed doses." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Complete vaccinations first; avoid live vaccines; treat helminth infections first [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Prior serious hypersensitivity to lebrikizumab [FDA]."],
  ae: { common: ["Conjunctivitis, injection-site reactions, herpes zoster [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA]", "Conjunctivitis and keratitis [FDA]"] },
  monitor: ["Eye symptoms [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "EBGLYSS (lebrikizumab-lbkz) — Eli Lilly, label effective 2026-09-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a774ea2-acde-4aaa-9a8f-ccba5a5b1d5f"], NEML_SRC],
  dose: { tagline: "IL-13 antibody for moderate–severe atopic dermatitis.", adult: [{ ind: "Atopic dermatitis", text: "500 mg at weeks 0 and 2, 250 mg every 2 weeks, then every 4 weeks." }], child: [{ ind: "12 years+, ≥ 40 kg", text: "Adult regimen." }] }
});

FDB_M("lecanemab", {
  inn: "Lecanemab", atc: "N06DX04", cls: "Anti-amyloid-beta monoclonal antibody",
  linked: [],
  forms: ["IV 500 mg/5 mL and 200 mg/2 mL vials; SC autoinjector 500 mg [FDA]."],
  moa: "Binds amyloid-beta protofibrils and promotes clearance [UNVERIFIED-KNOWLEDGE].",
  pk: ["Every 2 weeks IV [FDA]."],
  ind: { adult: ["Alzheimer's disease at the mild cognitive impairment or mild dementia stage, with confirmed amyloid [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Early Alzheimer's disease", "10 mg/kg IV over about 1 h every 2 weeks (or 500 mg SC weekly); after 18 months continue or switch to maintenance [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "mg/kg IV." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Test APOE ε4 status — homozygotes have more ARIA [FDA]. Caution with anticoagulants/thrombolytics [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Serious hypersensitivity to lecanemab [FDA]."],
  ae: { common: ["Infusion reactions, ARIA (microhaemorrhage, oedema), headache [FDA]."], serious: ["Amyloid-related imaging abnormalities, including serious and fatal events [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["MRI before starting and before the 5th, 7th and 14th infusions [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "lecanemab", indication_id: "ad", label: "Early Alzheimer's — IV every 2 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 336, caps: {}, weight_basis: "actual", infusion: { duration_h: 1 }, formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "LEQEMBI (lecanemab-irmb) — Eisai, label effective 2026-07-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9d1ff786-e577-410a-a273-c4d7d0e4e975"], NEML_SRC],
  dose: { tagline: "Anti-amyloid antibody for early Alzheimer's; MRI monitoring for ARIA.", boxedTitle: "Amyloid-related imaging abnormalities", boxed: "Monoclonal antibodies directed against aggregated forms of beta amyloid, including LEQEMBI, can cause amyloid related imaging abnormalities (ARIA), characterized as ARIA with edema (ARIA-E) and ARIA with hemosiderin deposition (ARIA-H). Incidence and timing of ARIA vary among treatments. ARIA usually occurs early in treatment and is usually asymptomatic, although serious and life-threatening events can occur. ARIA can be fatal. Serious intracerebral hemorrhage s > 1 cm, some of which have been fatal, have been observed in patients treated with this class of medications. Because ARIA-E can cause focal neurologic deficits that can mimic an ischemic stroke, treating clinicians should consider whether such symptoms could be due to ARIA-E before giving thrombolytic therapy to a patient being treated with LEQEMBI. ApoE ε4 Homozygotes Patients who are apolipoprotein E ε4 (ApoE ε4) homozygotes (approximately 15% of Alzheimer's disease patients) treated with this class of medications, including LEQEMBI, have a higher incidence of ARIA, including symptomatic, serious, and severe radiographic ARIA, compared to heterozygotes and noncarriers. Testing for ApoE ε4 status should be performed prior to initiation of treatment to inform the risk of developing ARIA. Prior to testing, prescribers should discuss with patients the risk of ARIA across genotypes and the implications of genetic testing results [FDA].",
    adult: [{ ind: "Early Alzheimer's", text: "10 mg/kg IV every 2 weeks.", calc: ["ad"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("lefamulin", {
  inn: "Lefamulin", atc: "J01XX12", cls: "Pleuromutilin antibiotic",
  linked: [["Pneumonia — adults", "Community-acquired bacterial pneumonia [FDA]", "pneumonia-adult"]],
  forms: ["Tablets 600 mg; IV 150 mg/15 mL [FDA]."],
  moa: "Binds the peptidyl transferase centre of the 50S ribosome [UNVERIFIED-KNOWLEDGE].",
  pk: ["Tablets at least 1 h before or 2 h after food [FDA]."],
  ind: { adult: ["Community-acquired bacterial pneumonia [FDA]."], paed: ["Not established under 18 years [FDA]."] },
  adult: [["CABP — IV", "150 mg IV over 60 min every 12 h for 5–7 days, with optional switch to tablets [FDA]."], ["CABP — oral", "600 mg every 12 h for 5 days [FDA]."], ["Severe liver impairment (IV)", "150 mg every 24 h; tablets not recommended in moderate–severe impairment [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment, including haemodialysis [FDA].", hepatic: "As above [FDA].", pregnancy: "May cause fetal harm — effective contraception [FDA].", other: "Avoid with QT-prolonging drugs; tablets contraindicated with strong/moderate CYP3A substrates that prolong QT [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Hypersensitivity to lefamulin or pleuromutilins [FDA].", "Tablets with CYP3A substrates that prolong QT (e.g. pimozide) [FDA]."],
  ae: { common: ["IV: infusion-site reactions, raised liver enzymes, nausea, hypokalaemia, insomnia, headache; oral: diarrhoea, nausea [FDA]."], serious: ["QT prolongation [FDA]", "Embryo-fetal toxicity [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["ECG if QT risk [FDA]."],
  local: notBT,
  calc: [
    { drug: "lefamulin", indication_id: "po", label: "CABP — adult oral", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 600, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["5 days"], sources: ["FDA"] }
  ],
  sources: [["FDA", "XENLETA (lefamulin) — label effective 2026-07-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eb972ea8-7502-422e-84bb-66cb8e93ca06"], NEML_SRC],
  dose: { tagline: "Pleuromutilin antibiotic for community-acquired pneumonia.", adult: [{ ind: "CABP", text: "600 mg orally every 12 h × 5 days, or 150 mg IV every 12 h.", calc: ["po"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("lemborexant", {
  inn: "Lemborexant", atc: "N05CJ02", cls: "Dual orexin receptor antagonist",
  linked: [],
  forms: ["Tablets 5, 10 mg [FDA]."],
  moa: "Blocks orexin OX1 and OX2 receptors, reducing wakefulness [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take immediately before bed with at least 7 h before waking [FDA]."],
  ind: { adult: ["Insomnia (sleep onset and/or maintenance) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Insomnia", "5 mg once nightly immediately before bed; may increase to 10 mg [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [FDA].", hepatic: "Moderate: maximum 5 mg; severe: avoid [UNVERIFIED-KNOWLEDGE].", other: "Next-day impairment, especially with 10 mg — caution with driving [FDA]." },
  tox: { human: "Somnolence [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Narcolepsy [FDA]."],
  ae: { common: ["Somnolence, headache, nightmares [UNVERIFIED-KNOWLEDGE]."], serious: ["CNS depression and daytime impairment [FDA]", "Sleep paralysis, hallucinations, cataplexy-like symptoms; complex sleep behaviours [FDA]"] },
  monitor: ["Daytime alertness [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "DAYVIGO (lemborexant) — Eisai, label effective 2025-02-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7074cb65-77b3-45d2-8e8d-da8dc0f70bfd"], NEML_SRC],
  dose: { tagline: "Orexin antagonist for insomnia.", adult: [{ ind: "Insomnia", text: "5 mg at bedtime; up to 10 mg." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("lenacapavir", {
  inn: "Lenacapavir", atc: "J05AX31", cls: "HIV-1 capsid inhibitor (long-acting)",
  linked: [["HIV — adults", "Multidrug-resistant HIV [FDA]", "hiv-adult"]],
  forms: ["Tablets 300 mg; SC injection 463.5 mg/1.5 mL [FDA]."],
  moa: "Inhibits multiple stages of the HIV capsid life cycle [UNVERIFIED-KNOWLEDGE].",
  pk: ["Residual concentrations for 12 months or longer after stopping [FDA]."],
  ind: { adult: ["Heavily treatment-experienced adults with multidrug-resistant HIV-1, with other antiretrovirals [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Initiation option 1", "Day 1: 927 mg SC (2 × 1.5 mL) + 600 mg orally; day 2: 600 mg orally; then 927 mg SC every 6 months [FDA]."], ["Initiation option 2", "Oral lead-in per label, then 927 mg SC every 6 months [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: "No adjustment (CrCl ≥ 15) [FDA].", other: "Strong CYP3A inducers contraindicated; many interactions [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["With strong CYP3A inducers [FDA]."],
  ae: { common: ["Nausea, injection-site reactions (nodules, swelling, pain) [FDA]."], serious: ["Immune reconstitution syndrome [FDA]", "Resistance with missed injections [FDA]"] },
  monitor: ["Adherence to the 6-month schedule; viral load [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "SUNLENCA (lenacapavir) — Gilead, label effective 2026-08-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e5652804-29c4-40d7-aeb2-0142ed2a7b5b"], NEML_SRC],
  dose: { tagline: "Six-monthly capsid inhibitor for multidrug-resistant HIV.", adult: [{ ind: "MDR HIV", text: "Oral + SC initiation, then 927 mg SC every 6 months." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("lenalidomide", {
  inn: "Lenalidomide", atc: "L04AX04", cls: "Immunomodulatory drug (thalidomide analogue)", risk: CHEMO,
  linked: [],
  forms: ["Capsules 2.5, 5, 10, 15, 20, 25 mg [FDA]."],
  moa: "Cereblon-mediated immunomodulatory and antiproliferative effects [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — adjust for CrCl [FDA]."],
  ind: { adult: ["Multiple myeloma (with dexamethasone; maintenance after transplant); del(5q) MDS; mantle cell, follicular and marginal zone lymphoma [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Myeloma with dexamethasone", "25 mg once daily on days 1–21 of 28-day cycles [FDA]."], ["Del(5q) MDS", "10 mg once daily [FDA]."], ["Kidney impairment (myeloma)", "CrCl 30–60: 10 mg daily; < 30 not on dialysis: 15 mg every other day; dialysis: 5 mg daily after dialysis [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose with kidney table." },
  adj: { renal: "As above [FDA].", pregnancy: "Contraindicated — REMS programme, two forms of contraception [FDA].", other: "Thromboprophylaxis recommended [FDA]." },
  tox: { human: "Myelosuppression [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Pregnancy [FDA].", "Severe hypersensitivity to lenalidomide [FDA]."],
  ae: { common: ["Diarrhoea, fatigue, anaemia, constipation, neutropenia, oedema, insomnia, cramps, back pain, rash (20% or more) [FDA]."], serious: ["Embryo-fetal toxicity [FDA]", "Neutropenia and thrombocytopenia [FDA]", "Venous and arterial thromboembolism [FDA]", "Second primary malignancies [FDA]"] },
  monitor: ["Blood counts weekly at first; pregnancy tests; VTE signs [FDA]."],
  local: notBT,
  calc: [
    { drug: "lenalidomide", indication_id: "mm", label: "Myeloma with dexamethasone — days 1–21", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 25, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 25, unit: "mg/cap" }, { form: "cap", strength: 10, unit: "mg/cap" }, { form: "cap", strength: 5, unit: "mg/cap" }], rounding: "Whole capsules",
      renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", set_value: 10, note: "CrCl 30–60: 10 mg once daily [FDA]" }, { crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 15, interval_h: 48, note: "CrCl < 30 (not on dialysis): 15 mg every other day; dialysis: 5 mg daily after dialysis [FDA]" }], flags: ["Days 1–21 of 28-day cycles"], sources: ["FDA"] }
  ],
  sources: [["FDA", "REVLIMID (lenalidomide) — Celgene/BMS, label effective 2023-03-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5fa97bf5-28a2-48f1-8955-f56012d296be"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Oral immunomodulator for myeloma and del(5q) MDS; REMS for pregnancy.", boxedTitle: "Embryo-fetal toxicity, haematologic toxicity, thromboembolism", boxed: "Embryo-Fetal Toxicity Do not use REVLIMID during pregnancy. Lenalidomide, a thalidomide analogue, caused limb abnormalities in a developmental monkey study. Thalidomide is a known human teratogen that causes severe life-threatening human birth defects. If lenalidomide is used during pregnancy, it may cause birth defects or embryo-fetal death. In females of reproductive potential, obtain 2 negative pregnancy tests before starting REVLIMID ® treatment. Females of reproductive potential must use 2 forms of contraception or continuously abstain from heterosexual sex during and for 4 weeks after REVLIMID treatment. To avoid embryo-fetal exposure to lenalidomide, REVLIMID is only available through a restricted distribution program, the Lenalidomide REMS program. Information about the Lenalidomide REMS program is available at www.lenalidomiderems.com or by calling the REMS Call Center at 1-888-423-5436. Hematologic Toxicity (Neutropenia and Thrombocytopenia) REVLIMID can cause significant neutropenia and thrombocytopenia. Eighty percent of patients with del 5q myelodysplastic syndromes had to have a dose delay/reduction during the major study. Thirty-four percent of patients had to have a second dose delay/reduction. Grade 3 or 4 hematologic toxicity was seen in 80% of patients enrolled in the study. Patients on therapy for del 5q myelodysplastic syndromes should have their complete blood counts monitored weekly for the first 8 weeks of therapy and at least monthly thereafter. Patients may require dose interruption and/or reduction [FDA].",
    adult: [{ ind: "Myeloma", text: "25 mg daily days 1–21; CrCl 30–60: 10 mg; < 30: 15 mg every other day.", calc: ["mm"] }], child: [{ ind: "—", text: "Not established." }] }
});


FDB_M("leniolisib", {
  inn: "Leniolisib", atc: "L03AX22", cls: "PI3K-delta inhibitor (immune disorder)",
  linked: [],
  forms: ["Tablets 40, 50, 70 mg [FDA]."],
  moa: "Inhibits overactive PI3K-delta signalling in APDS [UNVERIFIED-KNOWLEDGE].",
  pk: ["Twice daily [FDA]."],
  ind: { adult: ["Activated PI3K-delta syndrome (APDS) [FDA]."], paed: ["4 years and older weighing at least 27 kg [FDA]."] },
  adult: [["APDS (12 years and older)", "70 mg twice daily [FDA]."]],
  paed: { tiers: ["4 to < 12 years: 27 to < 38 kg 40 mg; 38 to < 45 kg 50 mg; ≥ 45 kg 70 mg — twice daily [FDA]."], transition: "70 mg from 12 years.", calcNote: "Weight bands 4–11 years." },
  adj: { renal: "No adjustment stated [NEP].", pregnancy: "May cause fetal harm — check pregnancy first [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Headache, sinusitis, atopic dermatitis (12 years and older) [FDA]."], serious: ["Embryo-fetal toxicity [FDA]"] },
  monitor: ["Pregnancy status [FDA]."],
  local: notBT,
  calc: [
    { drug: "leniolisib", indication_id: "child", label: "APDS — 4 to < 12 years", route: "PO", population: { min_age_months: 48, max_age_months: 144, min_weight_kg: 27, max_weight_kg: null },
      basis: "band", bands: [{ min_weight_kg: 27, max_weight_kg: 38, text: "40 mg twice daily", daily: 80 }, { min_weight_kg: 38, max_weight_kg: 45, text: "50 mg twice daily", daily: 100 }, { min_weight_kg: 45, max_weight_kg: null, text: "70 mg twice daily", daily: 140 }],
      dose: { value: 0, unit: "mg", per: "dose" }, interval_h: 12, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 40, unit: "mg/tab" }], renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "JOENJA (leniolisib) tablets — Pharming, label effective 2026-09-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eefbcef8-2130-4654-8f29-b58077e08212"], NEML_SRC],
  dose: { tagline: "Targeted tablet for activated PI3K-delta syndrome.", adult: [{ ind: "APDS", text: "70 mg twice daily." }], child: [{ ind: "APDS, 4–11 years", text: "40/50/70 mg twice daily by weight.", calc: ["child"] }] }
});

FDB_M("lenvatinib", {
  inn: "Lenvatinib", atc: "L01EX08", cls: "Multikinase (VEGFR) inhibitor", risk: CHEMO,
  linked: [],
  forms: ["Capsules 4, 10 mg [FDA]."],
  moa: "Inhibits VEGFR1–3, FGFR, PDGFR-alpha, KIT and RET [UNVERIFIED-KNOWLEDGE].",
  pk: ["Once daily [FDA]."],
  ind: { adult: ["Radioiodine-refractory differentiated thyroid cancer; renal cell carcinoma (with pembrolizumab or everolimus); hepatocellular carcinoma; endometrial carcinoma (with pembrolizumab) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Thyroid cancer", "24 mg once daily [FDA]."], ["Hepatocellular carcinoma", "12 mg once daily (≥ 60 kg) or 8 mg (< 60 kg) [FDA]."], ["Endometrial (with pembrolizumab)", "20 mg once daily [FDA]."], ["Severe kidney or liver impairment", "Lower doses per label (e.g. DTC 14 mg) [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "HCC dose by weight band." },
  adj: { renal: "Mild–moderate: no adjustment; severe: reduce [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Embryo-fetal toxicity [UNVERIFIED-KNOWLEDGE].", other: "Hold before surgery (wound healing) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No specific antidote [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Hypertension, fatigue, diarrhoea, arthralgia, decreased appetite and weight, nausea, stomatitis, proteinuria, hand-foot syndrome [FDA]."], serious: ["Severe hypertension; heart failure; arterial thromboembolism [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity; renal failure; GI perforation; haemorrhage [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, urine protein, liver and kidney function, thyroid [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "lenvatinib", indication_id: "hcc", label: "Hepatocellular carcinoma — by weight", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "band", bands: [{ min_weight_kg: 0, max_weight_kg: 60, text: "8 mg once daily", daily: 8 }, { min_weight_kg: 60, max_weight_kg: null, text: "12 mg once daily", daily: 12 }],
      dose: { value: 0, unit: "mg", per: "dose" }, interval_h: 24, caps: {}, weight_basis: "actual", formulations: [{ form: "cap", strength: 4, unit: "mg/cap" }], renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "LENVIMA (lenvatinib) — Eisai, label effective 2026-10-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f4bedd21-efde-44c6-9d9c-b48b78d7ed1e"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Oral multikinase inhibitor for thyroid, kidney, liver and endometrial cancers.", adult: [{ ind: "DTC", text: "24 mg daily." }, { ind: "HCC", text: "12 mg (≥ 60 kg) or 8 mg daily.", calc: ["hcc"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("lerodalcibep", {
  inn: "Lerodalcibep", atc: "C10AX", cls: "PCSK9 inhibitor (fusion protein)",
  linked: [["Lipid disorders — adults", "LDL lowering [FDA]", "lipids-adult"]],
  forms: ["Prefilled syringe 300 mg/1.2 mL [FDA]."],
  moa: "Binds PCSK9, increasing LDL-receptor recycling [UNVERIFIED-KNOWLEDGE].",
  pk: ["Monthly [FDA]."],
  ind: { adult: ["Hypercholesterolaemia including HeFH (adjunct to diet and exercise) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["LDL-C lowering", "300 mg SC once monthly [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment for eGFR ≥ 30 [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Injection-site reactions [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LDL-C [UNVERIFIED-KNOWLEDGE]."],
  local: notBT, calc: [],
  sources: [["FDA", "LEROCHOL (lerodalcibep) — LIB Therapeutics, label effective 2026-08-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=78c511a3-bc29-4e67-84b1-b966d1391cbf"], NEML_SRC],
  dose: { tagline: "Monthly PCSK9 injection to lower LDL.", adult: [{ ind: "LDL lowering", text: "300 mg SC monthly." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("letermovir", {
  inn: "Letermovir", atc: "J05AX18", cls: "CMV terminase inhibitor",
  linked: [],
  forms: ["Tablets 240, 480 mg; oral pellets; IV 20 mg/mL [FDA]."],
  moa: "Inhibits the CMV DNA terminase complex [UNVERIFIED-KNOWLEDGE].",
  pk: ["Same dose orally or IV [FDA]."],
  ind: { adult: ["CMV prophylaxis in CMV-seropositive allogeneic HSCT recipients and high-risk kidney transplant recipients [FDA]."], paed: ["From 6 months and 6 kg (HSCT) [FDA]."] },
  adult: [["HSCT", "480 mg once daily orally or IV over 1 h through day 100 (to day 200 if at risk) [FDA]."], ["Kidney transplant", "480 mg once daily through day 200 [FDA]."], ["With ciclosporin", "Reduce to 240 mg once daily [FDA]."]],
  paed: { tiers: ["12 years and older (≥ 30 kg HSCT / ≥ 40 kg kidney): adult dose [FDA].", "Younger children: weight-based per label [FDA]."], transition: "Adult dose from 12 years.", calcNote: "Fixed dose." },
  adj: { renal: "IV: monitor creatinine if CrCl < 50 (vehicle) [FDA].", hepatic: "Severe: not recommended [UNVERIFIED-KNOWLEDGE].", other: "Many interactions (ciclosporin, tacrolimus, voriconazole, statins) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["With pimozide or ergot alkaloids [FDA]; with pitavastatin or simvastatin when given with ciclosporin [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, diarrhoea, vomiting, peripheral oedema, cough, headache [UNVERIFIED-KNOWLEDGE]."], serious: ["Drug interactions; CMV reactivation after stopping [FDA]"] },
  monitor: ["CMV after prophylaxis ends [FDA]."],
  local: notBT,
  calc: [
    { drug: "letermovir", indication_id: "adult", label: "CMV prophylaxis — adult", route: "PO/IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: 30, max_weight_kg: null },
      basis: "fixed", dose: { value: 480, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 480, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 480, unit: "mg/tab" }, { form: "tab", strength: 240, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["With ciclosporin: 240 mg once daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "PREVYMIS (letermovir) — Merck, label effective 2026-01-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1b49df80-be4f-47e0-a0b7-123f3e69395b"], NEML_SRC],
  dose: { tagline: "CMV prophylaxis after stem-cell or kidney transplant.", adult: [{ ind: "CMV prophylaxis", text: "480 mg once daily (240 mg with ciclosporin).", calc: ["adult"] }], child: [{ ind: "6 months+", text: "Weight-based per label." }] }
});

FDB_M("letrozole", {
  inn: "Letrozole", atc: "L02BG04", cls: "Aromatase inhibitor", risk: CHEMO,
  linked: [],
  forms: ["Tablets 2.5 mg [FDA]."],
  moa: "Non-steroidal aromatase inhibition lowers oestrogen in postmenopausal women [UNVERIFIED-KNOWLEDGE].",
  pk: ["Once daily without regard to meals [FDA]."],
  ind: { adult: ["Postmenopausal hormone-receptor-positive breast cancer: adjuvant, extended adjuvant after tamoxifen, first- and second-line advanced [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Breast cancer", "2.5 mg once daily [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment if CrCl ≥ 10 [FDA].", hepatic: "Severe cirrhosis: 2.5 mg every other day [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated [FDA]." },
  tox: { human: "No specific effects [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Pregnancy [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Hot flushes, arthralgia, fatigue, oedema, headache, dizziness, raised cholesterol, sweating, bone pain [FDA]."], serious: ["Bone loss and fractures [UNVERIFIED-KNOWLEDGE]", "Cardiovascular events [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bone density; cholesterol [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Check Bhutan NEML oncology section [BT-NEML].", strengths: "2.5 mg.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "letrozole", indication_id: "bc", label: "Breast cancer — postmenopausal", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 2.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2.5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "FEMARA (letrozole) — Novartis, label effective 2026-06-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=82b77d74-085f-45ac-a7dd-1f5c038bf406"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Aromatase inhibitor for hormone-positive breast cancer after menopause.", adult: [{ ind: "Breast cancer", text: "2.5 mg once daily.", calc: ["bc"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("leuprorelin", {
  inn: "Leuprorelin (leuprolide)", atc: "L02AE02", cls: "GnRH agonist (depot)", risk: CHEMO,
  linked: [],
  forms: ["Subcutaneous depot 7.5 mg monthly (VABRINTY); other depots 1-, 3-, 4-, 6-monthly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Continuous GnRH stimulation suppresses LH/FSH and testosterone [UNVERIFIED-KNOWLEDGE].",
  pk: ["Monthly depot [FDA]."],
  ind: { adult: ["Advanced prostate cancer [FDA]."], paed: ["Not established for this product [FDA]."] },
  adult: [["Advanced prostate cancer", "7.5 mg SC every month (this product) [FDA]."]],
  paed: { tiers: ["Not established for this product [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Initial testosterone flare: bone pain, urinary obstruction, cord compression [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Hypersensitivity to GnRH or GnRH agonists or components [FDA]."],
  ae: { common: ["Malaise, fatigue, hot flushes/sweats, testicular atrophy (5% or more) [FDA]."], serious: ["Tumour flare [UNVERIFIED-KNOWLEDGE]", "Hyperglycaemia/diabetes; cardiovascular events; QT prolongation [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Testosterone, PSA, glucose [UNVERIFIED-KNOWLEDGE]."],
  local: notBT, calc: [],
  sources: [["FDA", "VABRINTY (leuprolide acetate) injectable suspension — Uronova, label effective 2026-04-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=008776cc-83f1-4f8c-819b-6471425da15f"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Monthly GnRH agonist depot for advanced prostate cancer.", adult: [{ ind: "Prostate cancer", text: "7.5 mg SC monthly." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("levacetylleucine", {
  inn: "Levacetylleucine", atc: "N07XX", cls: "Modified amino acid (neurological)",
  linked: [],
  forms: ["Granules for oral suspension 1 g per packet [FDA]."],
  moa: "Thought to improve neuronal energy metabolism [UNVERIFIED-KNOWLEDGE].",
  pk: ["Up to three times daily [FDA]."],
  ind: { adult: ["Neurological manifestations of Niemann-Pick type C; ataxia in ataxia-telangiectasia (≥ 15 kg) [FDA]."], paed: ["Same, ≥ 15 kg [FDA]."] },
  adult: [["By weight", "15 to < 25 kg: 1 g morning + 1 g evening; 25 to < 35 kg: 1 g three times daily; ≥ 35 kg: 2 g morning, 1 g afternoon, 1 g evening [FDA]."]],
  paed: { tiers: ["Same weight table [FDA]."], transition: "Same.", calcNote: "Weight-band daily dose." },
  adj: { renal: "No adjustment stated [NEP].", pregnancy: "May cause fetal harm — check pregnancy first [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Abdominal pain, dysphagia, upper respiratory infection, vomiting [FDA]."], serious: ["Embryo-fetal toxicity [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Pregnancy status [FDA]."],
  local: notBT,
  calc: [
    { drug: "levacetylleucine", indication_id: "npc", label: "NPC / A-T — daily dose by weight", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 15, max_weight_kg: null },
      basis: "band", bands: [{ min_weight_kg: 15, max_weight_kg: 25, text: "1 g morning + 1 g evening (2 g/day)", daily: 2000 }, { min_weight_kg: 25, max_weight_kg: 35, text: "1 g three times daily (3 g/day)", daily: 3000 }, { min_weight_kg: 35, max_weight_kg: null, text: "2 g morning, 1 g afternoon, 1 g evening (4 g/day)", daily: 4000 }],
      dose: { value: 0, unit: "mg", per: "dose" }, interval_h: null, caps: {}, weight_basis: "actual", formulations: [], renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "AQNEURSA (levacetylleucine) — IntraBio, label effective 2026-11-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f248e55-d1bb-13f9-e063-6294a90a05ce"], NEML_SRC],
  dose: { tagline: "Granules for Niemann-Pick type C and ataxia-telangiectasia.", adult: [{ ind: "NPC / A-T", text: "Weight-band dosing up to 4 g/day.", calc: ["npc"] }], child: [{ ind: "≥ 15 kg", text: "Same weight bands.", calc: ["npc"] }] }
});

FDB_M("levamlodipine", {
  inn: "Levamlodipine", atc: "C08CA17", cls: "Dihydropyridine calcium-channel blocker (S-enantiomer)",
  linked: [["Hypertension — adults", "Alternative to amlodipine [FDA]", "htn-adult"]],
  forms: ["Tablets 2.5, 5 mg [FDA]."],
  moa: "Active enantiomer of amlodipine; L-type calcium-channel blockade [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (as amlodipine) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypertension [FDA]."], paed: ["6–17 years: 1.25–2.5 mg daily effective [FDA]."] },
  adult: [["Hypertension", "2.5 mg once daily; maximum 5 mg once daily [FDA]."]],
  paed: { tiers: ["6–17 years: 1.25–2.5 mg once daily [FDA]."], transition: "Adult doses.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "Start low (1.25 mg) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Marked hypotension, reflex tachycardia [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; calcium [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known sensitivity to amlodipine [FDA]."],
  ae: { common: ["Dose-related oedema [FDA]."], serious: ["Worsening angina or MI on starting in severe CAD [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, ankle oedema [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 (amlodipine 5 mg is) [BT-NEML].", strengths: "Not available.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "levamlodipine", indication_id: "htn", label: "Hypertension — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2.5, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CONJUPRI (levamlodipine) — CSPC Ouyi, label effective 2024-12-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c3cca66e-348a-43e8-8f96-e995104dae3d"], NEML_SRC],
  dose: { tagline: "Active form of amlodipine for hypertension, at half the dose.", adult: [{ ind: "Hypertension", text: "2.5 mg daily, max 5 mg.", calc: ["htn"] }], child: [{ ind: "6–17 years", text: "1.25–2.5 mg daily." }] }
});

})();

/* brands — PharmEasy (India) and MedEx (Bangladesh), fetched 25 Nov 2026 */
(function(){ const B = {"lacosamide":{"IN":[["Lacoset","Sun Pharma","Lacoset 100Mg Strip Of 10 Tablets"],["Lacosam","Torrent Pharmaceuticals Ltd","Lacosam 100Mg Strip Of 15 Tablets"],["Lacosmile","Steris Healthcare","Lacosmile 200Mg Strip Of 10 Tablets"]],"BD":[["Lacomax","Incepta Pharmaceuticals Ltd","100 mg"],["Conva","Advanced Chemical Industries PLC","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lacoset-100mg-tablet-25575","https://pharmeasy.in/online-medicine-order/lacosam-100mg-tablet-15-s-233304","https://pharmeasy.in/online-medicine-order/lacosmile-200mg-strip-of-10-tablets-4486795","https://medex.com.bd/brands/37385/lacomax-100-mg-tablet","https://medex.com.bd/brands/39940/conva-100-mg-tablet"]},"lansoprazole":{"IN":[["Lanzol","Cipla Gx","Lanzol 30Mg Strip Of 10 Capsules"],["Junior Lanzol","Cipla Limited","Junior Lanzol 30Mg Strip Of 10 Orally Disintegrating Tablets"],["Lanzoprax","Macleods Pharmaceuticals","Lanzoprax 15Mg Kid Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/lanzol-30mg-capsule-6136","https://pharmeasy.in/online-medicine-order/junior-lanzol-30mg-tablet-6669","https://pharmeasy.in/online-medicine-order/lanzoprax-kid-15mg-strawberry-tab-10-s-220199"]},"lanthanum-carbonate":{"IN":[["Fosbait","Mankind Pharmaceuticals Ltd","Fosbait 500Mg Bottle Of 30 Tablets"]],"BD":[["Lanfos","Beacon Pharmaceuticals PLC","250 mg"]],"src":["https://pharmeasy.in/online-medicine-order/fosbait-500mg-tablet-21648","https://medex.com.bd/brands/30446/lanfos-250-mg-chewable-tablet"]},"lapatinib":{"IN":[["Tylidys","Cadila Healthcare Limited","Tylidys 250Mg Bottle Of 30 Tablets"],["Etibo","Samarth Life Sciences Pvt Ltd","Etibo 250Mg Bottle Of 30 Tablets"],["Libset","Intas Pharmaceuticals Ltd","Libset Bottle Of 30 Tablets"]],"BD":[["Lapacent","Incepta Pharmaceuticals Ltd","250 mg"],["Tyverb","Nevian Lifescience PLC","250 mg"],["Certus","Beacon Pharmaceuticals PLC","250 mg"]],"src":["https://pharmeasy.in/online-medicine-order/tylidys-250mg-bottle-of-30-tablets-3917602","https://pharmeasy.in/online-medicine-order/etibo-250-mg-tablet-30-no-s-4122375","https://pharmeasy.in/online-medicine-order/libset-tablet-30-no-s-4114483","https://medex.com.bd/brands/21420/lapacent-250-mg-tablet","https://medex.com.bd/brands/26675/tyverb-250-mg-tablet","https://medex.com.bd/brands/27279/certus-250-mg-tablet"]},"larotrectinib":{"IN":[],"BD":[["Larocent","Incepta Pharmaceuticals Ltd","100 mg"],["Lotenib","Drug International Ltd","100 mg"],["Vixo","Jenphar Bangladesh Ltd","100 mg"]],"src":["https://medex.com.bd/brands/33554/larocent-100-mg-capsule","https://medex.com.bd/brands/36708/lotenib-100-mg-capsule","https://medex.com.bd/brands/38630/vixo-100-mg-capsule"]},"lasmiditan":{"IN":[["Lasmidit","Icon Lifesciences","Lasmidit 100Mg Strip Of 4 Tablets"],["Migditan","Abbott Healthcare Pvt Ltd","Migditan 50Mg Strip Of 4 Tablets"]],"BD":[["Lasmi","Eskayef Pharmaceuticals Ltd","50 mg"],["Midita","Beximco Pharmaceuticals PLC","50 mg"],["Lamitan","ACME Laboratories Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lasmidit-100mg-strip-of-4-tablets-4315557","https://pharmeasy.in/online-medicine-order/migditan-50mg-strip-of-4-tablets-4167177","https://medex.com.bd/brands/33179/lasmi-50-mg-tablet","https://medex.com.bd/brands/33181/midita-50-mg-tablet","https://medex.com.bd/brands/33183/lamitan-50-mg-tablet"]},"latanoprostene-bunod":{"IN":[],"BD":[["Zultan","Aristopharma Ltd","0.024%"]],"src":["https://medex.com.bd/brands/37026/zultan-0024-eye-drop"]},"lefamulin":{"IN":[],"BD":[["Mulina","Beximco Pharmaceuticals PLC","600 mg"],["Lemulin","Renata PLC","150 mg/15 ml"],["Lefalin","ACME Laboratories Ltd","600 mg"]],"src":["https://medex.com.bd/brands/33730/mulina-600-mg-tablet","https://medex.com.bd/brands/33732/lemulin-150-mg-iv-infusion","https://medex.com.bd/brands/33734/lefalin-600-mg-tablet"]},"lenalidomide":{"IN":[["Lenalid","Natco Pharma Ltd","Lenalid 10Mg Bottle Of 30 Capsules"],["Adlinod","Adley Labs","Adlinod 10Mg Strip Of 10 Capsules"],["Relidomide","Reliance Formulation Pvt Ltd","Relidomide 10Mg Bottle Of 10 Capsules"]],"BD":[["Linamide","Beacon Pharmaceuticals PLC","10 mg"],["Ledomide","Renata PLC","10 mg"],["Mylomid","Drug International Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lenalid-10mg-capsule-25453","https://pharmeasy.in/online-medicine-order/adlinod-10mg-cap-184176","https://pharmeasy.in/online-medicine-order/relidomide-10mg-cap-155699","https://medex.com.bd/brands/17258/linamide-10-mg-capsule","https://medex.com.bd/brands/30364/ledomide-10-mg-capsule","https://medex.com.bd/brands/31175/mylomid-10-mg-capsule"]},"lenvatinib":{"IN":[["Glenvas","Glenmark Pharmaceuticals","Glenvas 4Mg Strip Of 10 Capsules"],["Lenshil","Shilpa Medicare Limited","Lenshil 4Mg Strip Of 10 Capsules"],["Lenvima","Eisai Pharmaceuticals","Lenvima 10Mg Strip Of 10 Capsules"]],"BD":[["Lenvakin","Ziska Pharmaceuticals Ltd","10 mg"],["Xenliva","Healthcare Pharmaceuticals Ltd","10 mg"],["Relenva","Renata PLC","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/glenvas-4mg-strip-of-10-capsules-3054849","https://pharmeasy.in/online-medicine-order/lenshil-4mg-strip-of-10-capsules-235267","https://pharmeasy.in/online-medicine-order/lenvima-10-mg-capsule-10-3104711","https://medex.com.bd/brands/33432/lenvakin-10-mg-capsule","https://medex.com.bd/brands/40005/xenliva-10-mg-capsule","https://medex.com.bd/brands/39762/relenva-10-mg-capsule"]},"letrozole":{"IN":[["Letroprime","Leeford Healthcare Ltd","Letroprime 2.5Mg Strip Of 5 Tablets"],["Letroheal","Healing Pharma India Pvt Ltd","Letroheal 2.5Mg Strip Of 10 Tablets"],["Fertolet","Cipla Limited","Fertolet Strip Of 5 Tablets"]],"BD":[["Arilet","UniMed UniHealth Pharmaceuticals Ltd","2.5 mg"],["Femara","Nevian Lifescience PLC","2.5 mg"],["Letrova","Ziska Pharmaceuticals Ltd","2.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/letroprime-2-5mg-strip-of-5-tablets-3104720","https://pharmeasy.in/online-medicine-order/letroheal-tablet-10-no-s-3734942","https://pharmeasy.in/online-medicine-order/fertolet-tablet-6655","https://medex.com.bd/brands/39634/arilet-25-mg-tablet","https://medex.com.bd/brands/15174/femara-25-mg-tablet","https://medex.com.bd/brands/38541/letrova-25-mg-tablet"]},"leuprorelin":{"IN":[["Lupride","Sun Pharma","Lupride Depot 3.75Mg Dry Vial Of 1 Powder For Injection"],["Luprodex","Bharat Serums \\u0026 Vaccines Ltd","Luprodex Depot 3.75Mg Dry Vial Of 1 Powder For Injection"],["Leuprolide","Lupin","Leuprolide Depot 3.75Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Lucrin Depot","UniMed UniHealth Pharmaceuticals Ltd","3.75 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lupride-depot-3-75mg-inj-25038","https://pharmeasy.in/online-medicine-order/luprodex-depot-3-75mg-inj-4577","https://pharmeasy.in/online-medicine-order/leuprolide-depot-3-75mg-combipack-vial-of-1-injection-3643142","https://medex.com.bd/brands/15699/lucrin-depot-375-mg-imsc-injection"]},"levamlodipine":{"IN":[],"BD":[["Esodip","Renata PLC","5 mg"],["Lamocard","Drug International Ltd","5 mg"],["Levamdocal","Beximco Pharmaceuticals PLC","5 mg"]],"src":["https://medex.com.bd/brands/32425/esodip-5-mg-tablet","https://medex.com.bd/brands/35261/lamocard-5-mg-tablet","https://medex.com.bd/brands/34361/levamdocal-5-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
