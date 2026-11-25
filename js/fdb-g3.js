/* Clinical Disease Guide — Drug monograph database, block G, batch G-3 (25 Nov 2026).
   Drugs deferred from G for lack of an openFDA label, sourced openly: givinostat (DailyMed SPL, not in openFDA),
   gliclazide (no US product — UK SmPC on the electronic medicines compendium). Gonadorelin stays deferred
   (US labels are veterinary only). Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it). */

FDB_M("givinostat", {
  inn: "Givinostat", atc: "M09AX14", cls: "Histone deacetylase (HDAC) inhibitor",
  linked: [],
  forms: ["Oral suspension 8.86 mg/mL [FDA].", "Not on the Bhutan NEML 2025 [BT-NEML]."],
  moa: "Inhibits histone deacetylases, reducing inflammation and fibrosis in dystrophic muscle [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 6 h; extensively metabolised, not by CYP450 or UGT for the main pathways [FDA]."],
  ind: { adult: ["Duchenne muscular dystrophy from 6 years [FDA]."], paed: ["Duchenne muscular dystrophy, 6 years and older [FDA]."] },
  adult: [["Duchenne muscular dystrophy", "By weight, twice daily with food (same as children) [FDA]."]],
  paed: { tiers: ["10 to < 20 kg: 22.2 mg (2.5 mL) twice daily [FDA].", "20 to < 40 kg: 31 mg (3.5 mL) twice daily [FDA].", "40 to < 60 kg: 44.3 mg (5 mL) twice daily [FDA].", "60 kg or more: 53.2 mg (6 mL) twice daily [FDA].", "Reductions for low platelets, diarrhoea or high triglycerides follow the label's two-step table [FDA]."], transition: "Same weight bands at all ages from 6 years.", calcNote: "Weight-band dose twice daily." },
  adj: { renal: "No adjustment stated [NEP].", hepatic: "Exposure expected to increase [FDA].", pregnancy: "May cause fetal harm based on animal data [FDA].", other: "Do not start if platelets are below 150 × 10⁹/L [FDA]. Avoid with QT-prolonging drugs or high arrhythmia risk [FDA]." },
  tox: { human: "No overdose data in the label [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Diarrhoea, abdominal pain, thrombocytopenia, nausea or vomiting, raised triglycerides, fever (10% or more) [FDA]."], serious: ["Thrombocytopenia (33% in the trial) with bleeding; anaemia and neutropenia [FDA]", "QTc prolongation [FDA]", "Severe diarrhoea [FDA]"] },
  monitor: ["Platelets and triglycerides before starting and during treatment [FDA].", "ECG in cardiac disease or with QT-prolonging drugs [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "givinostat", indication_id: "dmd", label: "Duchenne muscular dystrophy — weight-band dose", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: 10, max_weight_kg: null },
      basis: "band", bands: [{ min_weight_kg: 10, max_weight_kg: 20, text: "22.2 mg (2.5 mL) twice daily", daily: 44.4 }, { min_weight_kg: 20, max_weight_kg: 40, text: "31 mg (3.5 mL) twice daily", daily: 62 }, { min_weight_kg: 40, max_weight_kg: 60, text: "44.3 mg (5 mL) twice daily", daily: 88.6 }, { min_weight_kg: 60, max_weight_kg: null, text: "53.2 mg (6 mL) twice daily", daily: 106.4 }],
      dose: { value: 0, unit: "mg", per: "dose" }, interval_h: 12, caps: {}, weight_basis: "actual", formulations: [{ form: "oral suspension", strength: 8.86, unit: "mg/mL" }], renal: [], flags: ["With food; platelets ≥ 150 × 10⁹/L to start"], sources: ["FDA"] }
  ],
  sources: [["FDA", "DUVYZAT (givinostat) oral suspension — Italfarmaco, label effective 2026-11-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a28a3db-7880-4ac2-a2f2-2b4e362aafb6"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Oral HDAC inhibitor for Duchenne muscular dystrophy from 6 years, dosed by weight.",
    cautionTitle: "Check platelets and triglycerides",
    caution: "Do not start if the platelet count is below 150 × 10⁹/L. Monitor platelets and triglycerides; reduce the dose for low platelets, moderate or severe diarrhoea, or fasting triglycerides of 300 mg/dL or more [FDA].",
    adult: [{ ind: "Duchenne muscular dystrophy", text: "By weight twice daily with food: 60 kg or more 53.2 mg (6 mL).", calc: ["dmd"] }],
    child: [{ ind: "Duchenne muscular dystrophy, 6 years+", text: "10–<20 kg 2.5 mL; 20–<40 kg 3.5 mL; 40–<60 kg 5 mL; ≥ 60 kg 6 mL — twice daily with food.", calc: ["dmd"] }] }
});

FDB_M("gliclazide", {
  inn: "Gliclazide", atc: "A10BB09", cls: "Sulfonylurea (oral antidiabetic)",
  risk: "High-alert — oral sulfonylurea hypoglycaemics are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Tablets 80 mg (scored); modified-release 30 and 60 mg [UK-SmPC].", "Not marketed in the US — no FDA label [NEP]."],
  moa: "Stimulates insulin release from pancreatic beta cells by closing ATP-sensitive potassium channels [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 10–12 h (80 mg tablets); 12–20 h (MR) [UK-SmPC].", "Strongly protein bound — dialysis does not help in overdose [UK-SmPC]."],
  ind: { adult: ["Type 2 diabetes in adults when diet, exercise and weight loss alone do not control blood glucose [UK-SmPC]."], paed: ["Not established in children [UK-SmPC]."] },
  adult: [["80 mg tablets", "Start 40–80 mg daily (½–1 tablet), increase until controlled; range 40–320 mg/day. A single dose should not exceed 160 mg; higher totals in two doses with the main meals [UK-SmPC]."], ["Modified-release 30 mg", "Start 30 mg once daily at breakfast; increase at intervals of at least 1 month to 60, 90, 120 mg; maximum 120 mg/day [UK-SmPC]."], ["Older patients; mild–moderate kidney impairment", "Same regimen with careful monitoring; patients at risk of hypoglycaemia start at the minimum dose [UK-SmPC]."]],
  paed: { tiers: ["Not established in children or adolescents [UK-SmPC]."], transition: "Adults only.", calcNote: "Fixed adult doses." },
  adj: { renal: "Mild–moderate: same dose with monitoring; severe: contraindicated (use insulin) [UK-SmPC].", hepatic: "Severe hepatic insufficiency: contraindicated [UK-SmPC].", pregnancy: "Avoid; switch to insulin before conception or as soon as pregnancy is found. Contraindicated in breastfeeding (neonatal hypoglycaemia) [UK-SmPC].", other: "Only if regular meals (including breakfast) are likely [UK-SmPC]. G6PD deficiency: haemolytic anaemia — consider a non-sulfonylurea [UK-SmPC]." },
  tox: { human: "Hypoglycaemia, which may be severe and prolonged (coma, convulsions) [UK-SmPC].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Moderate: oral carbohydrate and close monitoring. Coma: 50 mL of 20–30% glucose IV rapidly, then 10% glucose infusion to keep glucose above 1 g/L; hospital monitoring. Dialysis does not help [UK-SmPC]." },
  contra: ["Hypersensitivity to gliclazide, other sulfonylureas or sulphonamides [UK-SmPC].", "Type 1 diabetes; diabetic pre-coma, coma or ketoacidosis [UK-SmPC].", "Severe renal or hepatic insufficiency (use insulin) [UK-SmPC].", "Treatment with miconazole; breastfeeding [UK-SmPC]."],
  ae: { common: ["Hypoglycaemia (most frequent); abdominal pain, nausea, dyspepsia, diarrhoea, constipation — reduced by taking with breakfast [UK-SmPC]."], serious: ["Severe or prolonged hypoglycaemia [UK-SmPC]", "Skin reactions including SJS/TEN and DRESS [UK-SmPC]", "Blood disorders; hepatitis; haemolytic anaemia in G6PD deficiency [UK-SmPC]"] },
  monitor: ["Blood glucose and HbA1c; hypoglycaemia education [UK-SmPC].", "Careful glucose monitoring with fluoroquinolones [UK-SmPC]."],
  local: { neml: "Not listed on the Bhutan NEML 2025 text searched [BT-NEML].", strengths: "Not available through the Bhutan formulary (check local stock).", stg: "Type 2 diabetes per the Bhutan diabetes guideline [BT-STG]." },
  calc: [
    { drug: "gliclazide", indication_id: "t2dm", label: "Type 2 diabetes — 80 mg tablets, starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 40, value_max: 80, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 160, max_daily: 320, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 80, unit: "mg/tab" }], rounding: "Half tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "Severe renal insufficiency: contraindicated — use insulin" }], flags: ["Increase until controlled; above 160 mg/day give in two doses with meals"], sources: ["UK-SmPC"] }
  ],
  sources: [["UK-SmPC", "Gliclazide Milpharm 80 mg tablets — SmPC, Milpharm (Aurobindo), revised 28 Oct 2024 (electronic medicines compendium)", "https://www.medicines.org.uk/emc/product/7023/smpc"], ["UK-SmPC", "Diamicron 30 mg MR tablets — SmPC, Servier, revised Feb 2020 (electronic medicines compendium)", "https://www.medicines.org.uk/emc/product/1321/smpc"], ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Sulfonylurea for type 2 diabetes; take with breakfast and watch for hypoglycaemia.",
    cautionTitle: "Hypoglycaemia",
    caution: "Prescribe only if the patient is likely to eat regularly, including breakfast. Hypoglycaemia may be severe and prolonged and may need hospital treatment; risk rises with kidney or severe liver insufficiency and overdose [UK-SmPC].",
    adult: [{ ind: "Type 2 diabetes", text: "80 mg tablets: start 40–80 mg daily; up to 320 mg/day (single dose ≤ 160 mg). MR: 30 mg at breakfast, up to 120 mg.", calc: ["t2dm"] }],
    child: [{ ind: "—", text: "Not established." }] }
});
