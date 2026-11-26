/* Clinical Disease Guide — Drug monograph database, block I, batch I-1 (25 Nov 2026).
   Ibalizumab … insulin aspart. Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed text "@LABEL" is filled from the saved FDA label by _work/tools/fdb-boxed-fill.js.
   Labels replaced where the pack picked another product: imatinib (Gleevec tablets, not the oral solution), insulin aspart
   (NovoLog, not the 70/30 premix), infliximab (Remicade, the originator). Iloprost: only the IV frostbite product (AURLUMYN) has a current label. */
(function () { // I-1 scope (keeps the helper constants out of the global scope)
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const CHEMO = "High-alert — chemotherapeutic agents (parenteral and oral) are on the ISMP list of high-alert medications [ISMP]";

FDB_M("ibalizumab", {
  inn: "Ibalizumab", atc: "J05AX23", cls: "CD4-directed post-attachment HIV-1 inhibitor (monoclonal antibody)",
  linked: [["HIV — adults", "Multidrug-resistant HIV salvage [FDA]", "hiv-adult"]],
  forms: ["Injection 200 mg/1.33 mL (150 mg/mL) [FDA]."],
  moa: "Binds CD4 and blocks viral entry after attachment [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long-acting: maintenance every 2 weeks [FDA]."],
  ind: { adult: ["Heavily treatment-experienced adults with multidrug-resistant HIV-1 failing their regimen, with other antiretrovirals [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Multidrug-resistant HIV-1", "2,000 mg IV loading dose, then 800 mg every 2 weeks, as a diluted infusion or undiluted IV push [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: "No adjustment stated [NEP].", pregnancy: "Monitor exposed infants (B-cell effects) [FDA].", other: "Always with an optimised background regimen [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Prior hypersensitivity to ibalizumab [FDA]."],
  ae: { common: ["Diarrhoea, dizziness, nausea, rash (5% or more) [FDA]."], serious: ["Infusion and anaphylactic reactions [FDA]", "Immune reconstitution inflammatory syndrome [FDA]"] },
  monitor: ["Observe after infusion; viral load [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "TROGARZO (ibalizumab-uiyk) — Theratechnologies, label effective 2026-01-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c548ad82-9d1f-4d16-95b6-4e6106badf43"], NEML_SRC],
  dose: { tagline: "Fortnightly IV antibody for multidrug-resistant HIV.", adult: [{ ind: "MDR HIV-1", text: "2,000 mg load, then 800 mg every 2 weeks." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("ibrutinib", {
  inn: "Ibrutinib", atc: "L01EL01", cls: "Bruton tyrosine kinase (BTK) inhibitor", risk: CHEMO,
  linked: [],
  forms: ["Capsules 70, 140 mg; tablets 140–560 mg; oral suspension [FDA]."],
  moa: "Irreversible BTK inhibitor blocking B-cell receptor signalling [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 4–6 h [FDA].", "Strong CYP3A inhibitors and inducers: avoid or adjust [FDA]."],
  ind: { adult: ["CLL/SLL (including 17p deletion); Waldenström macroglobulinaemia; chronic GVHD after failure of systemic therapy [FDA]."], paed: ["Chronic GVHD from 1 year [FDA]."] },
  adult: [["CLL/SLL, Waldenström", "420 mg once daily [FDA]."], ["Chronic GVHD (12 years and older)", "420 mg once daily [FDA]."]],
  paed: { tiers: ["Chronic GVHD, 1 to < 12 years: 240 mg/m² once daily (up to 420 mg) [FDA]."], transition: "420 mg from 12 years.", calcNote: "Fixed adult dose; child mg/m²." },
  adj: { renal: "No adjustment for mild–moderate impairment [UNVERIFIED-KNOWLEDGE].", hepatic: "Reduce dose; avoid in severe impairment [UNVERIFIED-KNOWLEDGE].", pregnancy: "Embryo-fetal toxicity [FDA].", other: "Withhold 3–7 days around surgery (bleeding) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Limited data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Thrombocytopenia, diarrhoea, fatigue, musculoskeletal pain, neutropenia, rash, anaemia, bruising, nausea (30% or more) [FDA]."], serious: ["Haemorrhage [FDA]", "Infections [FDA]", "Arrhythmias, heart failure and sudden death; hypertension [FDA]", "Cytopenias; second primary cancers; tumour lysis [FDA]"] },
  monitor: ["Blood counts monthly; blood pressure; ECG if palpitations [FDA]."],
  local: notBT,
  calc: [
    { drug: "ibrutinib", indication_id: "cll", label: "CLL / Waldenström — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 420, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 420, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 140, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] },
    { drug: "ibrutinib", indication_id: "cgvhd_child", label: "Chronic GVHD — 1 to < 12 years", route: "PO", population: { min_age_months: 12, max_age_months: 144, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_m2", dose: { value: 240, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 420, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "oral suspension", strength: 70, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Height needed for body-surface area"], sources: ["FDA"] }
  ],
  sources: [["FDA", "IMBRUVICA (ibrutinib) — Pharmacyclics, label effective 2025-10-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0dfd0279-ff17-4ea9-89be-9803c71bab44"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Once-daily BTK inhibitor for CLL, Waldenström and chronic GVHD.", adult: [{ ind: "CLL / WM / cGVHD", text: "420 mg once daily.", calc: ["cll"] }], child: [{ ind: "cGVHD, 1–<12 years", text: "240 mg/m² once daily (max 420 mg).", calc: ["cgvhd_child"] }] }
});

FDB_M("ibutilide", {
  inn: "Ibutilide", atc: "C01BD05", cls: "Class III antiarrhythmic (IV)",
  risk: "High-alert — IV antiarrhythmics are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Atrial fibrillation — adults", "Pharmacological cardioversion of recent-onset AF/flutter [FDA]", "af-adult"]],
  forms: ["Injection 0.1 mg/mL (1 mg in 10 mL) [FDA]."],
  moa: "Prolongs repolarisation (activates slow inward sodium current) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 6 h (2–12 h) [FDA]."],
  ind: { adult: ["Rapid conversion of recent-onset atrial fibrillation or flutter to sinus rhythm [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["60 kg or more", "1 mg IV over 10 min; if not converted 10 min after the end, a second 1 mg over 10 min [FDA]."], ["Under 60 kg", "0.01 mg/kg (0.1 mL/kg) over 10 min; may repeat once [FDA]."], ["Stop the infusion", "As soon as the arrhythmia ends, or with VT or marked QT prolongation [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Weight-based under 60 kg." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Correct potassium and magnesium first; avoid with other class I/III antiarrhythmics and QT drugs [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Ventricular arrhythmias, torsades, AV block [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; magnesium, pacing or cardioversion [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to ibutilide [FDA]."],
  ae: { common: ["Ventricular ectopy, headache, hypotension [UNVERIFIED-KNOWLEDGE]."], serious: ["Polymorphic VT / torsades de pointes [FDA]"] },
  monitor: ["Continuous ECG for at least 4 h after the infusion or until QTc returns to baseline [FDA]."],
  local: notBT,
  calc: [
    { drug: "ibutilide", indication_id: "u60", label: "AF/flutter conversion — under 60 kg", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: 60 },
      basis: "mg_per_kg", dose: { value: 0.01, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1, unit: "mg" }, weight_basis: "actual", infusion: { duration_h: 0.1667 }, formulations: [{ form: "inj", strength: 0.1, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Over 10 min; may repeat once after 10 min"], sources: ["FDA"] },
    { drug: "ibutilide", indication_id: "o60", label: "AF/flutter conversion — 60 kg or more", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: 60, max_weight_kg: null },
      basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 0.1, unit: "mg/mL" }], rounding: "Whole vial", renal: [], flags: ["Over 10 min; may repeat once after 10 min"], sources: ["FDA"] }
  ],
  sources: [["FDA", "CORVERT (ibutilide fumarate) injection — Pfizer, label effective 2024-01-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2428969a-7431-4e94-9503-ad5c680e2ea4"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "IV class III drug for rapid cardioversion of recent AF or flutter; continuous ECG.",
    boxedTitle: "Life-threatening arrhythmias — appropriate treatment environment", boxed: "LIFE-THREATENING ARRHYTHMIAS—APPROPRIATE TREATMENT ENVIRONMENT CORVERT can cause potentially fatal arrhythmias, particularly sustained polymorphic ventricular tachycardia, usually in association with QT prolongation (torsades de pointes), but sometimes without documented QT prolongation. In registration studies, these arrhythmias, which require cardioversion, occurred in 1.7% of treated patients during, or within a number of hours of, use of CORVERT. These arrhythmias can be reversed if treated promptly. It is essential that CORVERT be administered in a setting of continuous ECG monitoring and by personnel trained in identification and treatment of acute ventricular arrhythmias, particularly polymorphic ventricular tachycardia. Patients with atrial fibrillation of more than 2 to 3 days' duration must be adequately anticoagulated, generally for at least 2 weeks. CHOICE OF PATIENTS Patients with chronic atrial fibrillation have a strong tendency to revert after conversion to sinus rhythm and treatments to maintain sinus rhythm carry risks. Patients to be treated with CORVERT, therefore, should be carefully selected such that the expected benefits of maintaining sinus rhythm outweigh the immediate risks of CORVERT, and the risks of maintenance therapy, and are likely to offer an advantage compared with alternative management [FDA].",
    adult: [{ ind: "AF / flutter", text: "≥ 60 kg: 1 mg over 10 min; < 60 kg: 0.01 mg/kg; may repeat once.", calc: ["o60", "u60"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("icatibant", {
  inn: "Icatibant", atc: "B06AC02", cls: "Bradykinin B2-receptor antagonist",
  linked: [],
  forms: ["Prefilled syringe 30 mg/3 mL [FDA]."],
  moa: "Blocks bradykinin B2 receptors, reducing swelling in hereditary angioedema [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short half-life (about 1–2 h) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute attacks of hereditary angioedema, 18 years and older [FDA]."], paed: ["Not established below 18 years [FDA]."] },
  adult: [["Acute HAE attack", "30 mg subcutaneously in the abdomen; repeat every 6 h if needed; no more than 3 doses in 24 h [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment expected [UNVERIFIED-KNOWLEDGE].", other: "Laryngeal attacks: go to hospital immediately even after treatment [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Injection-site reactions (very common), fever, raised transaminases, dizziness [UNVERIFIED-KNOWLEDGE]."], serious: ["Airway obstruction from the attack itself [FDA]"] },
  monitor: ["Airway in laryngeal attacks [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "FIRAZYR (icatibant) injection — Takeda, label effective 2025-07-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ed6657ca-ab68-477a-9968-e12dc928b540"], NEML_SRC],
  dose: { tagline: "Subcutaneous treatment for acute hereditary angioedema attacks.", adult: [{ ind: "Acute HAE", text: "30 mg SC in the abdomen." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("idarubicin", {
  inn: "Idarubicin", atc: "L01DB06", cls: "Anthracycline (topoisomerase II inhibitor)", risk: CHEMO,
  linked: [],
  forms: ["Injection 1 mg/mL (5, 10, 20 mg vials) [FDA]."],
  moa: "Intercalates DNA and inhibits topoisomerase II [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 22 h alone, 20 h with cytarabine [FDA]."],
  ind: { adult: ["Acute myeloid leukaemia, in combination chemotherapy [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["AML induction", "12 mg/m² IV over 10–15 min on days 1–3, with cytarabine [FDA]."], ["Kidney impairment", "GFR < 30 mL/min or haemodialysis: reduce the dose by 33% [FDA]."], ["Liver impairment", "Bilirubin > 2.6–< 5 mg/dL: reduce by 50%; > 5 mg/dL: avoid [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "mg/m² per protocol." },
  adj: { renal: "GFR < 30 or dialysis: −33% [FDA].", hepatic: "By bilirubin (above) [FDA].", pregnancy: "Embryo-fetal toxicity [FDA].", other: "Cumulative cardiotoxicity [FDA]." },
  tox: { human: "Severe myelosuppression, mucositis, cardiotoxicity [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Infection, nausea/vomiting, alopecia, abdominal pain/diarrhoea, haemorrhage, mucositis (30% or more) [FDA]."], serious: ["Cardiomyopathy [FDA]", "Severe myelosuppression [FDA]", "Extravasation necrosis; secondary malignancies; tumour lysis [FDA]"] },
  monitor: ["Cardiac function (LVEF), blood counts, kidney and liver function before each course [FDA]."],
  local: notBT,
  calc: [
    { drug: "idarubicin", indication_id: "aml", label: "AML induction — 12 mg/m² days 1–3", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_m2", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: 24, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.1 mL",
      renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.67, note: "GFR under 30 or haemodialysis: reduce the dose by 33% [FDA]" }], flags: ["Days 1–3 only, with cytarabine"], sources: ["FDA"] }
  ],
  sources: [["FDA", "IDAMYCIN PFS (idarubicin HCl) injection — Pfizer, label effective 2026-04-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a5a6d93-cc1e-4d7f-8da1-446c134503b3"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anthracycline for AML induction.", boxedTitle: "Cardiomyopathy, secondary malignancies, extravasation", boxed: "• Cardiomyopathy: IDAMYCIN PFS can cause myocardial damage, including acute left ventricular failure, during or after termination of therapy. The risk of cardiomyopathy is increased in patients who have received prior anthracyclines or who have pre-existing cardiac disease. Assess left ventricular cardiac function prior to initiation of IDAMYCIN PFS and during and after treatment. • Secondary Malignancies: Secondary acute myelogenous leukemia (AML) and myelodysplastic syndrome (MDS) occur at a higher incidence in patients treated with anthracyclines, including IDAMYCIN PFS. • Extravasation and Tissue Necrosis: Extravasation of IDAMYCIN PFS during administration can result in local tissue injury and necrosis. Immediately terminate the infusion of IDAMYCIN PFS and institute the recommended management procedures [FDA].",
    adult: [{ ind: "AML induction", text: "12 mg/m² IV days 1–3 with cytarabine; GFR < 30: −33%.", calc: ["aml"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("idarucizumab", {
  inn: "Idarucizumab", atc: "V03AB37", cls: "Dabigatran reversal agent (antibody fragment)",
  linked: [],
  forms: ["Injection 2.5 g/50 mL vials (two vials = one dose) [FDA]."],
  moa: "Binds dabigatran with very high affinity, neutralising it [UNVERIFIED-KNOWLEDGE].",
  pk: ["Initial half-life about 47 min [FDA]."],
  ind: { adult: ["Reversal of dabigatran for emergency surgery or life-threatening bleeding [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dabigatran reversal", "5 g IV (two 2.5 g vials as consecutive infusions or bolus); a second 5 g may be considered if bleeding recurs with raised clotting times [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed 5 g." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Restart anticoagulation when appropriate (thrombosis risk) [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Hypokalaemia, delirium, constipation, fever, pneumonia [UNVERIFIED-KNOWLEDGE]."], serious: ["Thromboembolism after reversal [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["Coagulation tests (aPTT, ECT) after reversal [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "PRAXBIND (idarucizumab) injection — Boehringer Ingelheim, label effective 2024-01-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c7400f8a-dcf4-a6df-6d07-983081b1bf34"], NEML_SRC],
  dose: { tagline: "Specific antidote for dabigatran.", adult: [{ ind: "Dabigatran reversal", text: "5 g IV (2 × 2.5 g)." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("idecabtagene-vicleucel", {
  inn: "Idecabtagene vicleucel", atc: "L01XL07", cls: "BCMA-directed CAR-T cell therapy", risk: CHEMO,
  linked: [],
  forms: ["Cell suspension, 300–510 × 10⁶ CAR-positive T cells per dose [FDA]."],
  moa: "Autologous T cells engineered to target BCMA on myeloma cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["Single infusion; cells expand and persist [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Relapsed or refractory multiple myeloma after 2 or more prior lines (IMiD, PI, anti-CD38) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Myeloma", "Single IV infusion of 300–510 × 10⁶ CAR+ T cells after cyclophosphamide–fludarabine lymphodepletion; premedicate with paracetamol and an H1 antihistamine; no leukodepleting filter; tocilizumab available [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Certified centres only." },
  adj: { renal: "See lymphodepleting drugs [FDA].", other: "Avoid prophylactic steroids [FDA]." },
  tox: { human: "Not applicable.", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "CRS/neurotoxicity algorithms." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["CRS, infections, fatigue, musculoskeletal pain, hypogammaglobulinaemia [UNVERIFIED-KNOWLEDGE]."], serious: ["Cytokine release syndrome; neurological toxicity; HLH/MAS [FDA]", "Prolonged cytopenia; secondary haematological malignancies [FDA]"] },
  monitor: ["Daily for CRS and neurotoxicity for at least 7 days; stay near the centre for 4 weeks [UNVERIFIED-KNOWLEDGE]."],
  local: notBT, calc: [],
  sources: [["FDA", "ABECMA (idecabtagene vicleucel) — Celgene/BMS, label effective 2025-11-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b90c1fe7-f5cc-464e-958a-af36e9c26d7c"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "One-time CAR-T infusion for heavily treated myeloma.", boxedTitle: "CRS, neurotoxicity, HLH/MAS, cytopenia, secondary malignancies", boxed: "• Cytokine Release Syndrome (CRS), including fatal or life-threatening reactions, occurred in patients following treatment with ABECMA. Do not administer ABECMA to patients with active infection or inflammatory disorders. Treat severe or life-threatening CRS with tocilizumab or tocilizumab and corticosteroids. • Neurologic toxicities, which may be severe or life-threatening, occurred following treatment with ABECMA, including concurrently with CRS, after CRS resolution, or in the absence of CRS. Monitor for neurologic events after treatment with ABECMA. Provide supportive care and/or corticosteroids as needed. • Hemophagocytic Lymphohistiocytosis/Macrophage Activation Syndrome (HLH/MAS) including fatal and life-threatening reactions, occurred in patients following treatment with ABECMA. HLH/MAS can occur with CRS or neurologic toxicities. • Prolonged Cytopenia with bleeding and infection, including fatal outcomes following stem cell transplantation for hematopoietic recovery, occurred following treatment with ABECMA. • T cell malignancies have occurred following treatment of hematologic malignancies with BCMA- and CD19-directed genetically modified autologous T cell immunotherapies, including ABECMA [FDA].",
    adult: [{ ind: "Myeloma", text: "Single infusion 300–510 × 10⁶ CAR+ T cells." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("idelalisib", {
  inn: "Idelalisib", atc: "L01EM01", cls: "PI3K-delta inhibitor", risk: CHEMO,
  linked: [],
  forms: ["Tablets 100, 150 mg [FDA]."],
  moa: "Inhibits PI3K-delta signalling in malignant B cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 8 h [FDA]."],
  ind: { adult: ["Relapsed CLL with rituximab, when rituximab alone is appropriate due to comorbidity [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Relapsed CLL", "150 mg orally twice daily, with rituximab [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "Monitor; hepatotoxicity [FDA].", pregnancy: "Embryo-fetal toxicity [FDA].", other: "PJP and CMV prophylaxis/monitoring [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Serious hypersensitivity to idelalisib; history of TEN with any drug [FDA]."],
  ae: { common: ["Diarrhoea, pneumonia, fever, fatigue, rash, cough, nausea (30% or more) [FDA]."], serious: ["Hepatotoxicity, severe diarrhoea/colitis, pneumonitis, infections, intestinal perforation [FDA]", "Severe cutaneous reactions; neutropenia [FDA]"] },
  monitor: ["Liver tests every 2 weeks for 3 months; blood counts; symptoms of colitis and pneumonitis [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "idelalisib", indication_id: "cll", label: "Relapsed CLL — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["With rituximab"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ZYDELIG (idelalisib) tablets — Gilead, label effective 2026-09-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=efbdafa9-d18c-4e85-b4a2-1e620fc74e50"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "PI3K-delta inhibitor for relapsed CLL with rituximab.", boxedTitle: "Fatal and serious toxicities", boxed: "Fatal and/or serious hepatotoxicity occurred in 16% of Zydelig-treated patients. Monitor hepatic function prior to and during treatment. Interrupt and then reduce or discontinue Zydelig as recommended. Fatal and/or serious and severe diarrhea or colitis occurred in 20% of Zydelig-treated patients. Monitor for the development of severe diarrhea or colitis. Interrupt and then reduce or discontinue Zydelig as recommended. Fatal and/or serious pneumonitis occurred in 4% of Zydelig-treated patients. Monitor for pulmonary symptoms and bilateral interstitial infiltrates. Interrupt or discontinue Zydelig as recommended. Fatal and/or serious infections occurred in 48% of Zydelig-treated patients. Monitor for signs and symptoms of infection. Interrupt Zydelig if infection is suspected. Fatal and serious intestinal perforation can occur in Zydelig-treated patients across clinical trials. Discontinue Zydelig for intestinal perforation [FDA].",
    adult: [{ ind: "Relapsed CLL", text: "150 mg twice daily with rituximab.", calc: ["cll"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("idursulfase", {
  inn: "Idursulfase", atc: "A16AB09", cls: "Enzyme replacement (iduronate-2-sulfatase)",
  linked: [],
  forms: ["Injection 6 mg/3 mL (2 mg/mL) [FDA]."],
  moa: "Replaces the missing lysosomal enzyme in Hunter syndrome [UNVERIFIED-KNOWLEDGE].",
  pk: ["Weekly IV infusion [FDA]."],
  ind: { adult: ["Hunter syndrome (MPS II) [FDA]."], paed: ["Hunter syndrome from 16 months [FDA]."] },
  adult: [["MPS II", "0.5 mg/kg IV once weekly [FDA]."]],
  paed: { tiers: ["Same 0.5 mg/kg weekly [FDA]."], transition: "Same.", calcNote: "mg/kg weekly." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Severe genotypes: more reactions and antibodies [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Headache, pruritus, musculoskeletal pain, urticaria, diarrhoea, cough [FDA]."], serious: ["Anaphylaxis during or up to 24 h after infusion [FDA]"] },
  monitor: ["Observe during and after infusions with resuscitation available [FDA]."],
  local: notBT,
  calc: [
    { drug: "idursulfase", indication_id: "mps2", label: "Hunter syndrome — weekly dose", route: "IV", population: { min_age_months: 16, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 168, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ELAPRASE (idursulfase) — Takeda, label effective 2025-04-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=60cba843-5aab-4dd7-96dc-66648d413be3"], NEML_SRC],
  dose: { tagline: "Weekly enzyme replacement for Hunter syndrome.", boxedTitle: "Risk of anaphylaxis", boxed: "Life-threatening anaphylactic reactions have occurred in some patients during and up to 24 hours after ELAPRASE infusions. Anaphylaxis, presenting as respiratory distress, hypoxia, hypotension, urticaria and/or angioedema of throat or tongue have been reported to occur during and after ELAPRASE infusions, regardless of duration of the course of treatment. Closely observe patients during and after ELAPRASE administration and be prepared to manage anaphylaxis. Inform patients of the signs and symptoms of anaphylaxis and have them seek immediate medical care should symptoms occur. Patients with compromised respiratory function or acute respiratory disease may be at risk of serious acute exacerbation of their respiratory compromise due to hypersensitivity reactions and require additional monitoring [FDA].",
    adult: [{ ind: "MPS II", text: "0.5 mg/kg IV weekly.", calc: ["mps2"] }], child: [{ ind: "MPS II, 16 months+", text: "0.5 mg/kg IV weekly.", calc: ["mps2"] }] }
});

FDB_M("ifosfamide", {
  inn: "Ifosfamide", atc: "L01AA06", cls: "Alkylating agent (oxazaphosphorine)", risk: CHEMO,
  linked: [],
  forms: ["Powder for injection 1 g and 3 g vials [FDA]."],
  moa: "Prodrug activated in the liver; cross-links DNA [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 15 h [FDA]."],
  ind: { adult: ["Third-line chemotherapy of germ-cell testicular cancer, in combination [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Testicular cancer", "1.2 g/m²/day IV over at least 30 min for 5 days, every 3 weeks; with mesna and at least 2 L fluid per day [FDA]."]],
  paed: { tiers: ["Not established in the label; renal rickets and growth failure reported [FDA]."], transition: "Adults.", calcNote: "mg/m² per protocol." },
  adj: { renal: "Monitor closely; consider dose changes [FDA].", pregnancy: "Embryo-fetal toxicity [FDA].", other: "Always with mesna and hydration [FDA]." },
  tox: { human: "Myelosuppression, encephalopathy, haemorrhagic cystitis, nephrotoxicity [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; methylene blue has been used for encephalopathy [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to ifosfamide [FDA].", "Urinary outflow obstruction [FDA]."],
  ae: { common: ["Myelosuppression, nausea, vomiting, alopecia, haematuria [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe myelosuppression [FDA]", "Encephalopathy [FDA]", "Nephrotoxicity and haemorrhagic cystitis [FDA]", "Cardiotoxicity; pulmonary toxicity [FDA]"] },
  monitor: ["Blood counts, urinalysis for haematuria, kidney function, neurological state [FDA]."],
  local: notBT,
  calc: [
    { drug: "ifosfamide", indication_id: "gct", label: "Testicular cancer — 1.2 g/m²/day × 5", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_m2", dose: { value: 1200, unit: "mg", per: "dose" }, interval_h: 24, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 1000, unit: "mg/vial" }], rounding: "Nearest 10 mg", renal: [], renal_note: "Kidney impairment: monitor closely and consider dose modification [FDA]", flags: ["5 days, every 3 weeks; with mesna and 2 L fluid daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ifosfamide for injection — Baxter, label effective 2026-10-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=91e433a9-6800-43a6-ac13-a49a04a5aecd"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Alkylating chemotherapy given with mesna and hydration.", boxedTitle: "Myelosuppression, encephalopathy, nephrotoxicity, urotoxicity", boxed: "• Myelosuppression can be severe and lead to fatal infections. Monitor blood counts prior to and at intervals after each treatment cycle. • Encephalopathy can be severe and may result in death. Monitor for CNS toxicity and discontinue treatment for encephalopathy. • Nephrotoxicity can be severe and result in renal failure. Hemorrhagic cystitis can be severe and can be reduced by the prophylactic use of mesna [FDA].",
    adult: [{ ind: "Testicular cancer (third line)", text: "1.2 g/m²/day × 5 days every 3 weeks, with mesna.", calc: ["gct"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("iloperidone", {
  inn: "Iloperidone", atc: "N05AX14", cls: "Atypical antipsychotic",
  linked: [],
  forms: ["Tablets 1, 2, 4, 6, 8, 10, 12 mg [FDA]."],
  moa: "Dopamine D2 and serotonin 5-HT2A antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Twice daily without regard to meals [FDA]."],
  ind: { adult: ["Schizophrenia; acute manic or mixed episodes of bipolar I disorder [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Schizophrenia", "Start 1 mg twice daily and titrate slowly (to avoid orthostatic hypotension) to 6–12 mg twice daily [FDA]."], ["Bipolar mania", "Start 1 mg twice daily, titrate to 12 mg twice daily [FDA]."], ["CYP2D6 poor metabolisers", "Halve the dose [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Titration schedule." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "Not recommended in severe impairment [UNVERIFIED-KNOWLEDGE].", other: "Avoid other QT-prolonging drugs [FDA]." },
  tox: { human: "Sedation, tachycardia, hypotension, QT prolongation [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; ECG monitoring." },
  contra: ["Known hypersensitivity (anaphylaxis, angioedema reported) [FDA]."],
  ae: { common: ["Dizziness, dry mouth, fatigue, nasal congestion, orthostatic hypotension, weight gain [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased mortality in older patients with dementia [FDA]", "QT prolongation and sudden death [FDA]", "Stroke/TIA in dementia; NMS; tardive dyskinesia; metabolic changes [FDA]"] },
  monitor: ["Blood pressure during titration; ECG if QT risk; weight, glucose, lipids [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "FANAPT (iloperidone) tablets — Vanda, label effective 2026-05-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33f60b40-3fca-11de-8f56-0002a5d5c51b"], NEML_SRC],
  dose: { tagline: "Atypical antipsychotic needing slow titration (orthostasis, QT).", boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis", boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. FANAPT is not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia / mania", text: "1 mg twice daily, titrate to 6–12 mg twice daily." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("iloprost", {
  inn: "Iloprost", atc: "B01AC11", cls: "Prostacyclin analogue",
  linked: [],
  forms: ["Injection 100 mcg/mL (AURLUMYN, IV) [FDA]."],
  moa: "Vasodilates and inhibits platelet aggregation, improving perfusion of frostbitten digits [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 20–30 min [FDA]."],
  ind: { adult: ["Severe frostbite, to reduce the risk of digit amputation [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Severe frostbite", "IV infusion starting 0.5 ng/kg/min, increase by 0.5 ng/kg/min every 30 min as tolerated to a maximum of 2 ng/kg/min; 6 h each day for up to 8 days [FDA]."], ["eGFR < 30 or Child-Pugh B/C", "Start 0.5 ng/kg/min (kidney) or 0.25 ng/kg/min (liver); may lower to 0.25 if not tolerated [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "ng/kg/min infusion." },
  adj: { renal: "eGFR < 30: may lower to 0.25 ng/kg/min [FDA].", hepatic: "Child-Pugh B/C: start 0.25 ng/kg/min [FDA].", other: "Correct hypotension first [FDA]." },
  tox: { human: "Hypotension, headache, flushing [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop or slow the infusion." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Headache, flushing, palpitations, nausea, hypotension [UNVERIFIED-KNOWLEDGE]."], serious: ["Symptomatic hypotension [FDA]"] },
  monitor: ["Vital signs before and with every dose increase [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Frostbite care per Bhutan STG high-altitude section [BT-STG]." }, calc: [],
  sources: [["FDA", "AURLUMYN (iloprost) injection — BTG, label effective 2026-08-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=34036fc0-6832-d066-e063-6394a90a18a4"], NEML_SRC],
  dose: { tagline: "IV prostacyclin to save digits in severe frostbite.", adult: [{ ind: "Severe frostbite", text: "0.5 → max 2 ng/kg/min, 6 h daily for up to 8 days." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("imatinib", {
  inn: "Imatinib", atc: "L01EA01", cls: "BCR-ABL / KIT tyrosine kinase inhibitor", risk: CHEMO,
  linked: [],
  forms: ["Tablets 100, 400 mg (take with a meal and a large glass of water) [FDA]."],
  moa: "Inhibits BCR-ABL, KIT and PDGFR kinases [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 18 h [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Ph+ CML (chronic, accelerated, blast phase); Ph+ ALL; MDS/MPD with PDGFR rearrangement; systemic mastocytosis; HES/CEL; DFSP; KIT+ GIST [FDA]."], paed: ["Newly diagnosed Ph+ CML chronic phase; Ph+ ALL [FDA]."] },
  adult: [["CML chronic phase", "400 mg once daily [FDA]."], ["CML accelerated/blast, Ph+ ALL", "600 mg once daily [FDA]."], ["GIST (adjuvant or metastatic)", "400 mg once daily [UNVERIFIED-KNOWLEDGE]."], ["DFSP", "800 mg/day [FDA]."], ["Kidney impairment", "CrCl 40–59: max 600 mg; 20–39: start 50% (max 400 mg); < 20: use caution (100 mg tolerated) [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Ph+ CML chronic phase and Ph+ ALL: 340 mg/m²/day (max 600 mg) [FDA]."], transition: "Adult doses from 18 years.", calcNote: "mg/m² in children." },
  adj: { renal: "Reduce (see above) [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: reduce by 25% [UNVERIFIED-KNOWLEDGE].", pregnancy: "Embryo-fetal toxicity [FDA].", other: "Growth retardation in children [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, oedema, myelosuppression [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Diarrhoea, fatigue, nausea, oedema, low haemoglobin, rash, vomiting, abdominal pain [FDA]."], serious: ["Severe fluid retention [FDA]", "Cytopenias [FDA]", "Heart failure; hepatotoxicity; GI bleeding; severe skin reactions [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight (fluid), blood counts weekly for the first month then monthly, liver tests [FDA]."],
  local: { neml: "Not identified on the Bhutan NEML 2025 text searched [BT-NEML].", strengths: "Check oncology supply (often via access programmes).", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "imatinib", indication_id: "cml", label: "CML chronic phase — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }, { form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["With a meal"], sources: ["FDA"] },
    { drug: "imatinib", indication_id: "child", label: "Ph+ CML / ALL — child", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_m2", dose: { value: 340, unit: "mg", per: "day" }, interval_h: 24, caps: { max_daily: 600, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Nearest 50 mg", renal: [], flags: ["Height needed for body-surface area"], sources: ["FDA"] }
  ],
  sources: [["FDA", "GLEEVEC (imatinib mesylate) tablets — Novartis, label effective 2026-07-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=211ef2da-2868-4a77-8055-1cb2cd78e24b"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Oral TKI for CML, Ph+ ALL and GIST.", adult: [{ ind: "CML chronic phase", text: "400 mg once daily with food.", calc: ["cml"] }], child: [{ ind: "Ph+ CML / ALL", text: "340 mg/m²/day (max 600 mg).", calc: ["child"] }] }
});

FDB_M("imetelstat", {
  inn: "Imetelstat", atc: "L01XX80", cls: "Telomerase inhibitor (oligonucleotide)", risk: CHEMO,
  linked: [],
  forms: ["Powder for injection 47 mg and 188 mg vials [FDA]."],
  moa: "Binds the RNA template of telomerase, killing malignant progenitor cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["Every 4 weeks [FDA]."],
  ind: { adult: ["Lower-risk MDS with transfusion-dependent anaemia (≥ 4 RBC units/8 weeks) not responding to or ineligible for ESAs [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["MDS", "7.1 mg/kg IV over 2 h every 4 weeks; premedicate (antihistamine, steroid) [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "mg/kg every 4 weeks." },
  adj: { renal: "No adjustment stated [NEP].", pregnancy: "Embryo-fetal toxicity [UNVERIFIED-KNOWLEDGE].", other: "Delay or reduce for cytopenias [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Low platelets, white cells and neutrophils; raised AST and alkaline phosphatase [FDA]."], serious: ["Grade 3–4 thrombocytopenia and neutropenia [FDA]", "Infusion reactions [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before starting, weekly for 2 cycles, then before each cycle [FDA]."],
  local: notBT,
  calc: [
    { drug: "imetelstat", indication_id: "mds", label: "MDS — every 4 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 7.1, unit: "mg", per: "dose" }, interval_h: 672, caps: {}, weight_basis: "actual", infusion: { duration_h: 2 }, formulations: [{ form: "vial", strength: 188, unit: "mg/vial" }], rounding: "Nearest mg", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "RYTELO (imetelstat) — Geron, label effective 2026-04-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b0fab7ca-e578-43c5-9df6-bdaff4182257"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Monthly telomerase inhibitor for transfusion-dependent lower-risk MDS.", adult: [{ ind: "MDS", text: "7.1 mg/kg IV over 2 h every 4 weeks.", calc: ["mds"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("imiglucerase", {
  inn: "Imiglucerase", atc: "A16AB02", cls: "Enzyme replacement (glucocerebrosidase)",
  linked: [],
  forms: ["Powder for injection 400 units [FDA]."],
  moa: "Replaces glucocerebrosidase in Gaucher disease [UNVERIFIED-KNOWLEDGE].",
  pk: ["Plasma enzyme half-life minutes; dosed every 2 weeks typically [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Non-CNS manifestations of type 1 or type 3 Gaucher disease [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Gaucher disease", "2.5 units/kg three times a week up to 60 units/kg every 2 weeks IV, titrated to severity and goals [FDA]."]],
  paed: { tiers: ["Same range [FDA]."], transition: "Same.", calcNote: "Units/kg." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Infusion reactions, headache, pruritus [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Infusion-associated reactions [FDA]"] },
  monitor: ["Observe during infusion; haemoglobin, platelets, organ volume [UNVERIFIED-KNOWLEDGE]."],
  local: notBT, calc: [],
  sources: [["FDA", "CEREZYME (imiglucerase) — Genzyme, label effective 2026-08-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=df60f030-866b-4374-a31f-8ae3f6b45c38"], NEML_SRC],
  dose: { tagline: "Enzyme replacement for Gaucher disease.", boxedTitle: "Hypersensitivity including anaphylaxis", boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Anaphylaxis has occurred during the early course of enzyme replacement therapy and after extended duration of therapy. Initiate CEREZYME in a healthcare setting with appropriate medical monitoring and support measures, including access to cardiopulmonary resuscitation equipment. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue CEREZYME and immediately initiate appropriate medical treatment, including use of epinephrine. Inform patients of the symptoms of life-threatening hypersensitivity reactions, including anaphylaxis and to seek immediate medical care should symptoms occur [FDA].",
    adult: [{ ind: "Gaucher disease", text: "2.5 units/kg 3×/week to 60 units/kg every 2 weeks." }], child: [{ ind: "Gaucher disease", text: "Same." }] }
});

FDB_M("imipramine", {
  inn: "Imipramine", atc: "N06AA02", cls: "Tricyclic antidepressant",
  linked: [],
  forms: ["Tablets 10, 25, 50 mg [FDA]."],
  moa: "Inhibits noradrenaline and serotonin reuptake; anticholinergic [UNVERIFIED-KNOWLEDGE].",
  pk: ["Benefit in depression may take 1–3 weeks [FDA]."],
  ind: { adult: ["Depression [FDA]."], paed: ["Temporary adjunct for nocturnal enuresis from 6 years [FDA]."] },
  adult: [["Depression — outpatients", "75 mg/day, increase to 150 mg/day; over 200 mg/day not recommended; maintenance 50–150 mg/day [FDA]."], ["Depression — hospitalised", "100 mg/day in divided doses, increased gradually [FDA]."], ["Older patients and adolescents", "30–40 mg/day; rarely over 100 mg/day [FDA]."]],
  paed: { tiers: ["Enuresis, 6 years and older: 25 mg 1 h before bedtime; after 1 week up to 50 mg (under 12) or 75 mg (over 12); more than 75 mg adds no benefit [FDA]."], transition: "Adult doses from 18 years.", calcNote: "Fixed doses." },
  adj: { renal: "Use with care [UNVERIFIED-KNOWLEDGE].", hepatic: "Use with care [UNVERIFIED-KNOWLEDGE].", other: "Cardiac disease: arrhythmia risk [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Overdose is dangerous: arrhythmias, wide QRS, seizures, coma, hypotension [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "ECG; sodium bicarbonate for wide QRS; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAO inhibitors (hyperpyretic crises, seizures) [FDA].", "Acute recovery after myocardial infarction; hypersensitivity [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dry mouth, constipation, drowsiness, dizziness; in enuresis — nervousness, sleep disorders, tiredness, mild GI upset [FDA]."], serious: ["Suicidality in young people [FDA]", "Arrhythmias, orthostatic hypotension [UNVERIFIED-KNOWLEDGE]", "Seizures; angle-closure glaucoma [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidal thoughts; ECG in cardiac disease [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "Imipramine hydrochloride tablets — Bryant Ranch, label effective 2026-11-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20af582f-08ba-4281-a2df-0bcf68c58594"], NEML_SRC],
  dose: { tagline: "Tricyclic antidepressant; also short-term for childhood bedwetting.", boxedTitle: "Suicidality and antidepressant drugs", boxed: "Suicidality and Antidepressant Drugs Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of imipramine hydrochloride or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Imipramine hydrochloride is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression", text: "75 mg/day → 150 mg/day; max 200 mg/day (outpatients)." }], child: [{ ind: "Enuresis, 6 years+", text: "25 mg at bedtime; up to 50 mg (< 12 y) or 75 mg (> 12 y)." }] }
});

FDB_M("imiquimod", {
  inn: "Imiquimod", atc: "D06BB10", cls: "Topical immune-response modifier",
  linked: [],
  forms: ["Cream 3.75% (pump or packets) [FDA]; 5% also marketed [UNVERIFIED-KNOWLEDGE]."],
  moa: "TLR7 agonist inducing local cytokines [UNVERIFIED-KNOWLEDGE].",
  pk: ["Topical; minimal absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Actinic keratoses of the face or balding scalp (immunocompetent adults) [FDA].", "External genital and perianal warts [FDA]."], paed: ["Genital warts from 12 years [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Actinic keratosis (3.75%)", "Thin layer once daily at bedtime to the whole face or scalp for two 2-week cycles separated by 2 weeks off; up to 0.5 g per application [FDA]."], ["Genital warts (3.75%)", "Once daily at bedtime until clear or up to 8 weeks; up to 0.25 g; wash off after about 8 h [FDA]."]],
  paed: { tiers: ["AK: not established [FDA]."], transition: "Adults.", calcNote: "Topical." },
  adj: { renal: "Not applicable.", other: "Not for oral, ophthalmic, intra-anal or intravaginal use [FDA]." },
  tox: { human: "Excess use worsens skin reactions; flu-like illness [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; wash off." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Local erythema, crusting, scaling, oedema, erosion; headache; flu-like symptoms [FDA]."], serious: ["Intense local inflammation; severe vulvar swelling with urinary retention [FDA]"] },
  monitor: ["Local reaction; interrupt if severe [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "Imiquimod cream 3.75% — Teva, label effective 2025-06-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9f2cbefd-f295-47e2-8a9e-3e7c5812c963"], NEML_SRC],
  dose: { tagline: "Immune-modifying cream for actinic keratoses and genital warts.", adult: [{ ind: "Genital warts", text: "Nightly for up to 8 weeks; wash off after 8 h." }, { ind: "Actinic keratosis", text: "Nightly 2 weeks on, 2 off, 2 on." }], child: [{ ind: "—", text: "Not established for AK." }] }
});

FDB_M("inavolisib", {
  inn: "Inavolisib", atc: "L01EM04", cls: "PI3K-alpha inhibitor", risk: CHEMO,
  linked: [],
  forms: ["Tablets 3 mg, 9 mg [FDA]."],
  moa: "Inhibits mutant PI3K-alpha signalling [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 15 h [FDA]."],
  ind: { adult: ["Endocrine-resistant PIK3CA-mutated HR+/HER2− advanced breast cancer, with palbociclib and fulvestrant [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Breast cancer", "9 mg once daily [FDA]."], ["Kidney impairment", "eGFR 30–< 60: 6 mg once daily; < 30: 3 mg once daily [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose, kidney-adjusted." },
  adj: { renal: "As above [FDA].", pregnancy: "Embryo-fetal toxicity [UNVERIFIED-KNOWLEDGE].", other: "Check glucose and HbA1c first [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Hyperglycaemia, stomatitis, diarrhoea, cytopenias, nausea, rash [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe or fatal hyperglycaemia including ketoacidosis [FDA]", "Stomatitis; diarrhoea [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Fasting glucose and HbA1c before and during treatment [FDA]."],
  local: notBT,
  calc: [
    { drug: "inavolisib", indication_id: "bc", label: "Breast cancer — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 9, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 9, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 9, unit: "mg/tab" }, { form: "tab", strength: 3, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", set_value: 6, note: "eGFR 30–< 60: 6 mg once daily [FDA]" }, { crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 3, note: "eGFR < 30: 3 mg once daily [FDA]" }], flags: ["With palbociclib and fulvestrant"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ITOVEBI (inavolisib) tablets — Genentech, label effective 2026-04-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5de59f5b-e5db-410f-b692-658686ef4107"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "PI3K-alpha inhibitor for PIK3CA-mutated breast cancer; watch glucose.", adult: [{ ind: "Breast cancer", text: "9 mg daily; eGFR 30–<60: 6 mg; <30: 3 mg.", calc: ["bc"] }], child: [{ ind: "—", text: "Not established." }] }
});


FDB_M("inclisiran", {
  inn: "Inclisiran", atc: "C10AX16", cls: "PCSK9-directed small interfering RNA",
  linked: [["Lipid disorders — adults", "LDL lowering add-on [FDA]", "lipids-adult"]],
  forms: ["Prefilled syringe 284 mg/1.5 mL [FDA]."],
  moa: "Silences PCSK9 mRNA in the liver, raising LDL-receptor numbers [UNVERIFIED-KNOWLEDGE].",
  pk: ["Twice-yearly maintenance after the second dose [FDA]."],
  ind: { adult: ["Hypercholesterolaemia (adjunct to diet and exercise) [FDA]."], paed: ["Heterozygous familial hypercholesterolaemia from 12 years [FDA]."] },
  adult: [["LDL-C lowering", "284 mg SC initially, again at 3 months, then every 6 months, by a health professional [FDA]."]],
  paed: { tiers: ["12 years and older with HeFH: same schedule [FDA]."], transition: "Same.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "No adjustment in mild–moderate [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Prior serious hypersensitivity to inclisiran or excipients [FDA]."],
  ae: { common: ["Injection-site reactions, arthralgia, bronchitis [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis and angioedema [FDA]"] },
  monitor: ["LDL-C response [UNVERIFIED-KNOWLEDGE]."],
  local: notBT, calc: [],
  sources: [["FDA", "LEQVIO (inclisiran) — Novartis, label effective 2026-08-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6fc0afca-4513-4c35-b594-6544aee29a44"], NEML_SRC],
  dose: { tagline: "Twice-yearly injection to lower LDL cholesterol.", adult: [{ ind: "LDL lowering", text: "284 mg SC at 0 and 3 months, then every 6 months." }], child: [{ ind: "HeFH, 12 years+", text: "Same schedule." }] }
});

FDB_M("indapamide", {
  inn: "Indapamide", atc: "C03BA11", cls: "Thiazide-like diuretic",
  linked: [["Hypertension — adults", "Diuretic option [FDA]", "htn-adult"]],
  forms: ["Tablets 1.25, 2.5 mg [FDA]."],
  moa: "Inhibits sodium reabsorption in the distal tubule; some direct vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Once-daily morning dosing [FDA]."],
  ind: { adult: ["Hypertension [FDA].", "Salt and fluid retention in heart failure [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Hypertension", "1.25 mg each morning; after 4 weeks 2.5 mg; after another 4 weeks 5 mg (consider adding another drug instead) [FDA]."], ["Oedema in heart failure", "2.5 mg each morning; 5 mg after 1 week if needed [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "Anuria: contraindicated [FDA].", pregnancy: "Routine diuretic use in pregnancy is inappropriate [FDA].", other: "Older women: severe hyponatraemia with hypokalaemia — dose-related [FDA]." },
  tox: { human: "Electrolyte depletion, dehydration [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Fluids and electrolytes." },
  contra: ["Anuria [FDA].", "Hypersensitivity to indapamide or other sulfonamide-derived drugs [FDA]."],
  ae: { common: ["Hypokalaemia, dizziness, headache, fatigue [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hyponatraemia with hypokalaemia, mainly older women [FDA]"] },
  monitor: ["Sodium and potassium, especially in older patients [FDA]."],
  local: notBT,
  calc: [
    { drug: "indapamide", indication_id: "htn", label: "Hypertension — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 1.25, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 5, max_daily: 5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1.25, unit: "mg/tab" }, { form: "tab", strength: 2.5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Each morning; step up every 4 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Indapamide tablets — Preferred Pharmaceuticals, label effective 2026-05-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=59cd3331-7afe-432a-8b50-39533fd5f392"], NEML_SRC],
  dose: { tagline: "Thiazide-like diuretic for hypertension; watch sodium in older women.", adult: [{ ind: "Hypertension", text: "1.25 mg each morning; up to 2.5–5 mg.", calc: ["htn"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("indium-111in-pentetreotide", {
  inn: "Indium (111In) pentetreotide", atc: "V09IB01", cls: "Radiopharmaceutical (somatostatin-receptor scintigraphy)",
  linked: [],
  forms: ["Kit for preparation of indium In-111 pentetreotide injection [FDA]."],
  moa: "Binds somatostatin receptors on neuroendocrine tumours [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mainly renal excretion — hydrate well [FDA]."],
  ind: { adult: ["Scintigraphic localisation of somatostatin-receptor-positive neuroendocrine tumours [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Imaging", "111 MBq (3 mCi) IV for planar imaging; 222 MBq (6 mCi) for SPECT; hydrate well; mild laxative from the evening before for 48 h [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Nuclear medicine dosing." },
  adj: { renal: "Kidney impairment: slower clearance, higher radiation dose [UNVERIFIED-KNOWLEDGE].", other: "Therapeutic octreotide may reduce sensitivity — consider pausing [FDA]." },
  tox: { human: "Not applicable.", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Hydration." },
  contra: ["None known [FDA]."],
  ae: { common: ["Rare: dizziness, flushing, nausea [UNVERIFIED-KNOWLEDGE]."], serious: ["None common [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Never add to TPN or inject into TPN lines [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "OCTREOSCAN (kit for indium In-111 pentetreotide) — Curium, label effective 2022-02-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=93d8f3b2-1216-41dc-a63d-0e812b33891d"]],
  dose: { tagline: "Radiotracer for imaging neuroendocrine tumours.", adult: [{ ind: "Imaging", text: "111 MBq planar; 222 MBq SPECT, IV." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("indocyanine-green", {
  inn: "Indocyanine green", atc: "V04CX01", cls: "Optical imaging dye",
  linked: [],
  forms: ["Ready-to-use injection 25 mg/10 mL (2.5 mg/mL) [FDA]."],
  moa: "Binds plasma proteins and fluoresces under near-infrared light; excreted in bile [UNVERIFIED-KNOWLEDGE].",
  pk: ["Rapid hepatic clearance into bile [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Fluorescence imaging of vessels, blood flow and perfusion in surgery; extremity perfusion; extrahepatic bile ducts [FDA]."], paed: ["Vessel and perfusion imaging from birth [FDA]."] },
  adult: [["Vessels and perfusion", "1.25–5 mg IV per injection [FDA]."], ["Extremity perfusion through the skin", "3.75–10 mg IV [FDA]."]],
  paed: { tiers: ["Under 1 month: 0.15 mg/kg [FDA].", "1 month and older: 1.25–5 mg [FDA]."], transition: "Adult doses.", calcNote: "Neonatal mg/kg." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Hypersensitivity to indocyanine green [FDA]."],
  ae: { common: ["Anaphylaxis and urticaria were the most reported reactions [FDA]."], serious: ["Anaphylaxis, including deaths [FDA]"] },
  monitor: ["Resuscitation personnel and equipment available [FDA]."],
  local: notBT,
  calc: [
    { drug: "indocyanine-green", indication_id: "neo", label: "Imaging — under 1 month", route: "IV", population: { min_age_months: 0, max_age_months: 1, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 0.15, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2.5, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ZYOGREEN (indocyanine green) injection — Sagent, label effective 2026-07-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b2de0c9a-0065-4f2c-9983-add39525f3a3"]],
  dose: { tagline: "Near-infrared dye for surgical perfusion and bile-duct imaging.", adult: [{ ind: "Imaging", text: "1.25–5 mg IV (3.75–10 mg through skin)." }], child: [{ ind: "Imaging", text: "< 1 month 0.15 mg/kg; older 1.25–5 mg.", calc: ["neo"] }] }
});

FDB_M("inebilizumab", {
  inn: "Inebilizumab", atc: "L04AG10", cls: "CD19-directed cytolytic antibody",
  linked: [],
  forms: ["Injection 100 mg/10 mL [FDA]."],
  moa: "Depletes CD19-positive B cells and plasmablasts [UNVERIFIED-KNOWLEDGE].",
  pk: ["Twice-yearly maintenance [FDA]."],
  ind: { adult: ["AQP4-antibody-positive NMOSD; IgG4-related disease; generalised myasthenia gravis [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["NMOSD / IgG4-RD", "300 mg IV, 300 mg 2 weeks later, then 300 mg every 6 months; premedicate; observe 1 h [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Screen for hepatitis B, TB and immunoglobulins first [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Life-threatening infusion reaction to inebilizumab [FDA].", "Active hepatitis B; active or untreated latent TB [FDA]."],
  ae: { common: ["Urinary tract infection, arthralgia (NMOSD) [FDA]."], serious: ["Infusion reactions [FDA]", "Serious infections; PML; hypogammaglobulinaemia [FDA]"] },
  monitor: ["Immunoglobulins; infections [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "UPLIZNA (inebilizumab-cdon) — Horizon/Amgen, label effective 2026-09-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=834db232-afb0-4dcf-93e0-009ce8245c20"], NEML_SRC],
  dose: { tagline: "Six-monthly B-cell-depleting infusion for NMOSD and IgG4-related disease.", adult: [{ ind: "NMOSD / IgG4-RD", text: "300 mg IV at 0 and 2 weeks, then every 6 months." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("infliximab", {
  inn: "Infliximab", atc: "L04AB02", cls: "Anti-TNF monoclonal antibody",
  linked: [["Crohn's disease — adults", "Moderate–severe or fistulising [FDA]", "crohns-adult"], ["Inflammatory bowel disease — children", "From 6 years [FDA]", "ibd-child"], ["Rheumatoid arthritis — adults", "With methotrexate [FDA]", "ra-adult"]],
  forms: ["Powder for infusion 100 mg vial (originator and biosimilars) [FDA]."],
  moa: "Neutralises TNF-alpha [UNVERIFIED-KNOWLEDGE].",
  pk: ["Induction at 0, 2, 6 weeks, then every 8 weeks [FDA]."],
  ind: { adult: ["Crohn's disease, ulcerative colitis, rheumatoid arthritis (with methotrexate), ankylosing spondylitis, psoriatic arthritis, plaque psoriasis [FDA]."], paed: ["Crohn's disease and ulcerative colitis from 6 years [FDA]."] },
  adult: [["Crohn's disease, UC, psoriatic arthritis, psoriasis", "5 mg/kg IV at 0, 2 and 6 weeks, then every 8 weeks; some Crohn's patients may need 10 mg/kg [FDA]."], ["Rheumatoid arthritis", "3 mg/kg at 0, 2, 6 weeks then every 8 weeks, with methotrexate; up to 10 mg/kg or every 4 weeks [FDA]."], ["Ankylosing spondylitis", "5 mg/kg at 0, 2, 6 weeks then every 6 weeks [FDA]."]],
  paed: { tiers: ["Crohn's disease and UC, 6 years and older: 5 mg/kg at 0, 2, 6 weeks then every 8 weeks [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg per infusion." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", other: "Moderate–severe heart failure: doses above 5 mg/kg contraindicated [FDA]." },
  tox: { human: "Single doses up to 20 mg/kg tolerated [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Doses above 5 mg/kg in moderate or severe heart failure [FDA].", "Hypersensitivity to infliximab or murine proteins [FDA]."],
  ae: { common: ["Infections, infusion reactions, headache, abdominal pain [FDA]."], serious: ["Serious infections including TB and invasive fungal infection [FDA]", "Malignancy including hepatosplenic T-cell lymphoma [FDA]", "Hepatotoxicity; heart failure; demyelination; lupus-like syndrome [FDA]"] },
  monitor: ["TB screening before starting; hepatitis B; infections; liver tests [FDA]."],
  local: notBT,
  calc: [
    { drug: "infliximab", indication_id: "ibd", label: "Crohn's / UC — 5 mg/kg per infusion", route: "IV", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 100, unit: "mg/vial" }], rounding: "Nearest mg", renal: [], flags: ["Weeks 0, 2, 6, then every 8 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "REMICADE (infliximab) — Janssen, label effective 2025-06-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a0a046c1-056d-45a9-bfd9-13b47c24f257"], NEML_SRC],
  dose: { tagline: "Anti-TNF infusion for IBD and inflammatory arthritis; screen for TB first.", boxedTitle: "Serious infections and malignancy", boxed: "SERIOUS INFECTIONS Patients treated with REMICADE are at increased risk for developing serious infections that may lead to hospitalization or death. Most patients who developed these infections were taking concomitant immunosuppressants such as methotrexate or corticosteroids. REMICADE should be discontinued if a patient develops a serious infection or sepsis. Reported infections include: Active tuberculosis, including reactivation of latent tuberculosis. Patients with tuberculosis have frequently presented with disseminated or extrapulmonary disease. Patients should be tested for latent tuberculosis before REMICADE use and during therapy. Treatment for latent infection should be initiated prior to REMICADE use. Invasive fungal infections, including histoplasmosis, coccidioidomycosis, candidiasis, aspergillosis, blastomycosis, and pneumocystosis. Patients with histoplasmosis or other invasive fungal infections may present with disseminated, rather than localized, disease. Antigen and antibody testing for histoplasmosis may be negative in some patients with active infection. Empiric anti-fungal therapy should be considered in patients at risk for invasive fungal infections who develop severe systemic illness. Bacterial, viral and other infections due to opportunistic pathogens, including Legionella and Listeria. The risks and benefits of treatment with REMICADE should be carefully considered prior to initiating therapy in patients with chronic or recurrent infection. Patients should be closely monitored for the development of signs and symptoms of infection during and after treatment with REMICADE, including the possible development of tuberculosis in patients who tested negative for latent tuberculosis infection prior to initiating therapy. MALIGNANCY Lymphoma and other malignancies, some fatal, have been reported in children and adolescent patients treated with TNF blockers, including REMICADE. Postmarketing cases of hepatosplenic T-cell lymphoma (HSTCL), a rare type of T-cell lymphoma, have been reported in patients treated with TNF blockers including REMICADE. These cases have had a very aggressive disease course and have been fatal. Almost all patients had received treatment with azathioprine or 6-mercaptopurine concomitantly with a TNF blocker at or prior to diagnosis. The majority of reported REMICADE cases have occurred in patients with Crohn's disease or ulcerative colitis and most were in adolescent and young adult males [FDA].",
    adult: [{ ind: "Crohn's / UC", text: "5 mg/kg at 0, 2, 6 weeks, then every 8 weeks.", calc: ["ibd"] }, { ind: "RA", text: "3 mg/kg with methotrexate." }], child: [{ ind: "Crohn's / UC, 6 years+", text: "5 mg/kg at 0, 2, 6 weeks, then every 8 weeks.", calc: ["ibd"] }] }
});

FDB_M("inotuzumab-ozogamicin", {
  inn: "Inotuzumab ozogamicin", atc: "L01FB01", cls: "CD22-directed antibody–drug conjugate", risk: CHEMO,
  linked: [],
  forms: ["Powder for infusion 0.9 mg vial [FDA]."],
  moa: "Delivers calicheamicin into CD22-positive leukaemic cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["Weekly within 3–4-week cycles [FDA]."],
  ind: { adult: ["Relapsed or refractory CD22-positive B-cell precursor ALL [FDA]."], paed: ["Same, from 1 year [FDA]."] },
  adult: [["Cycle 1", "1.8 mg/m² per cycle: 0.8 mg/m² day 1, 0.5 mg/m² days 8 and 15 (3–4-week cycle); premedicate [FDA]."]],
  paed: { tiers: ["1 year and older: same mg/m² schedule [FDA]."], transition: "Same.", calcNote: "mg/m² per protocol." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "VOD risk — monitor closely [FDA].", other: "Higher post-HSCT non-relapse mortality [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Thrombocytopenia, fever, anaemia, vomiting, infection, haemorrhage, neutropenia, nausea, raised transaminases (20% or more) [FDA]."], serious: ["Hepatotoxicity including veno-occlusive disease [FDA]", "Increased post-transplant non-relapse mortality [FDA]", "Myelosuppression; infusion reactions; QT prolongation [FDA]"] },
  monitor: ["Liver tests and signs of VOD; blood counts; ECG if QT risk [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "BESPONSA (inotuzumab ozogamicin) — Pfizer, label effective 2026-02-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cc7014b1-c775-411d-b374-8113248b4077"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Antibody–drug conjugate for relapsed CD22+ ALL.", boxedTitle: "Hepatotoxicity including VOD; post-HSCT mortality", boxed: "HEPATOTOXICITY, INCLUDING VOD • Hepatotoxicity, including fatal and life-threatening VOD occurred in patients with relapsed or refractory acute lymphoblastic leukemia (ALL) who received BESPONSA. The risk of VOD was greater in patients who underwent HSCT after BESPONSA treatment; use of HSCT conditioning regimens containing 2 alkylating agents and last total bilirubin level ≥ upper limit of normal (ULN) before HSCT were significantly associated with an increased risk of VOD. • Other risk factors for VOD in patients treated with BESPONSA included ongoing or prior liver disease, prior HSCT, increased age, later salvage lines, and a greater number of BESPONSA treatment cycles. • Elevation of liver tests may require dosing interruption, dose reduction, or permanent discontinuation of BESPONSA. Permanently discontinue treatment if VOD occurs. If severe VOD occurs, treat according to standard medical practice. INCREASED RISK OF POST-HSCT NON-RELAPSE MORTALITY • There was higher post-HSCT non-relapse mortality rate in patients receiving BESPONSA, resulting in a higher Day 100 post-HSCT mortality rate [FDA].",
    adult: [{ ind: "Relapsed ALL", text: "Cycle 1: 0.8 mg/m² day 1, 0.5 mg/m² days 8 and 15." }], child: [{ ind: "Relapsed ALL, 1 year+", text: "Same mg/m² schedule." }] }
});

FDB_M("insulin-aspart", {
  inn: "Insulin aspart", atc: "A10AB05", cls: "Rapid-acting insulin analogue",
  risk: "High-alert — insulin (subcutaneous and IV) is on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["100 units/mL vial, cartridge and prefilled pen [FDA].", "Bhutan stocks human insulin 40 IU/mL (soluble, isophane, mixtard), not aspart [BT-NEML]."],
  moa: "Rapid-acting insulin analogue covering mealtime glucose rises [UNVERIFIED-KNOWLEDGE].",
  pk: ["Inject 5–10 min before a meal [FDA]."],
  ind: { adult: ["Glycaemic control in diabetes mellitus [FDA]."], paed: ["Glycaemic control in children with diabetes [FDA]."] },
  adult: [["Mealtime insulin", "Individualised; inject SC 5–10 min before a meal, usually with an intermediate- or long-acting insulin; also by pump or IV under supervision [FDA]."]],
  paed: { tiers: ["Same principles, individualised [FDA]."], transition: "Same.", calcNote: "No fixed calculator — doses are individual." },
  adj: { renal: "Lower needs in kidney impairment — monitor glucose [UNVERIFIED-KNOWLEDGE].", hepatic: "Lower needs — monitor [UNVERIFIED-KNOWLEDGE].", other: "Never share pens, even with a new needle [FDA]." },
  tox: { human: "Hypoglycaemia, possibly severe; hypokalaemia [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Oral or IV glucose, glucagon; monitor for recurrence [UNVERIFIED-KNOWLEDGE]." },
  contra: ["During hypoglycaemia [FDA].", "Hypersensitivity to insulin aspart or excipients [FDA]."],
  ae: { common: ["Hypoglycaemia, injection-site reactions, lipodystrophy, weight gain [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hypoglycaemia [FDA]", "Hypokalaemia [FDA]", "Hyper- or hypoglycaemia after regimen changes [FDA]"] },
  monitor: ["Blood glucose; HbA1c; potassium when given IV [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 — Bhutan uses human soluble, isophane and mixtard insulin 40 IU/mL [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Diabetes per the Bhutan diabetes guideline [BT-STG]." }, calc: [],
  sources: [["FDA", "NOVOLOG (insulin aspart) injection — Novo Nordisk (A-S Medication), label effective 2023-12-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=13891e5a-e57a-46e8-911c-2f680352b52b"], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Rapid-acting mealtime insulin.", cautionTitle: "Check the strength",
    caution: "NovoLog is 100 units/mL; the Bhutan NEML human insulins are 40 IU/mL. Use the matching syringe — confusing strengths causes serious dosing errors [BT-NEML].",
    adult: [{ ind: "Diabetes", text: "Individual dose SC 5–10 min before meals with basal insulin." }], child: [{ ind: "Diabetes", text: "Individual dosing." }] }
});

})();

/* brands (India: PharmEasy, molecule-matched; Bangladesh: MedEx) */
(function(){ const B = {"ibrutinib":{"IN":[],"BD":[["Ibrucent","Incepta Pharmaceuticals Ltd","140 mg"],["Ibrunib","Jenphar Bangladesh Ltd","140 mg"],["Ibruxen","Everest Pharmaceuticals Ltd","140 mg"]],"src":["https://medex.com.bd/brands/25998/ibrucent-140-mg-capsule","https://medex.com.bd/brands/27010/ibrunib-140-mg-capsule","https://medex.com.bd/brands/28836/ibruxen-140-mg-capsule"]},"idarubicin":{"IN":[["Idarubitec","United Biotech (p) Ltd","Idarubitec 10Mg Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/idarubitec-10-mg-dry-vial-of-1-powder-for-injection-4827824"]},"ifosfamide":{"IN":[["Ifos","Cipla Limited","Ifos 1Gm Injection 1"],["Ifosym","Symbion Life Science","Ifosym 1Gm Dry Vial Of 1 Powder For Injection"]],"BD":[["Xifos","Beacon Pharmaceuticals PLC","1 gm/vial"],["Fosfa","Drug International Ltd","2 gm/vial"]],"src":["https://pharmeasy.in/online-medicine-order/ifos-1gm-injection-1-4209817","https://pharmeasy.in/online-medicine-order/ifosym-1gm-dry-vial-of-1-powder-for-injection-4819546","https://medex.com.bd/brands/17266/xifos-1-gm-iv-infusion","https://medex.com.bd/brands/31172/fosfa-2-gm-iv-infusion"]},"iloperidone":{"IN":[],"BD":[["Ilodon","Beacon Pharmaceuticals PLC","2 mg"]],"src":["https://medex.com.bd/brands/16555/ilodon-2-mg-tablet"]},"imatinib":{"IN":[["Imatib","Cipla Limited","Imatib 400Mg Strip Of 10 Tablets"],["Matiny","Aureate Healthcare Pvt Ltd","Matiny 400Mg Strip Of 10 Tablets"],["Veenat","Natco Pharma Ltd","Veenat 400Mg Strip Of 10 Tablets"]],"BD":[["Tyrokin","Renata PLC","100 mg"],["Imakin","Ziska Pharmaceuticals Ltd","400 mg"],["Glivec","Nevian Lifescience PLC","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/imatib-400mg-tablet-6555","https://pharmeasy.in/online-medicine-order/matiny-400-mg-strip-of-10-tablets-4828113","https://pharmeasy.in/online-medicine-order/veenat-400mg-strip-of-10-tablets-25429","https://medex.com.bd/brands/29305/tyrokin-100-mg-tablet","https://medex.com.bd/brands/35190/imakin-400-mg-tablet","https://medex.com.bd/brands/35022/glivec-100-mg-capsule"]},"imipramine":{"IN":[],"BD":[["Depram","Square Pharmaceuticals PLC","25 mg"],["Pinor","Aristopharma Ltd","25 mg"],["Pramin","Incepta Pharmaceuticals Ltd","25 mg"]],"src":["https://medex.com.bd/brands/4453/depram-25-mg-tablet","https://medex.com.bd/brands/4454/pinor-25-mg-tablet","https://medex.com.bd/brands/4455/pramin-25-mg-tablet"]},"imiquimod":{"IN":[["Imiquad","Glenmark Pharmaceuticals","Imiquad Sachet Of 0.25Gm Cream (Pack Of 3)"]],"BD":[["Iminod","Ziska Pharmaceuticals Ltd","5%"],["Imiclara","UniMed UniHealth Pharmaceuticals Ltd","5%"]],"src":["https://pharmeasy.in/online-medicine-order/imiquad-cream-0-25gm-1-3-50853","https://medex.com.bd/brands/26081/iminod-5-cream","https://medex.com.bd/brands/29164/imiclara-5-cream"]},"inclisiran":{"IN":[["Crenzlo","Novartis Healthcare Pvt Ltd","Crenzlo 284Mg Pre Filled Syringe Of 1.5Ml Solution For Injection"],["Tilpazan","Lupin","Tilpazan 284Mg Pre Filled Syringe Of 1.5Ml Solution For Injection"]],"BD":[["LEQVIO","Nevian Lifescience PLC","284 mg/1.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/crenzlo-284mg-pre-filled-syringe-of-1-5ml-solution-for-injection-4380350","https://pharmeasy.in/online-medicine-order/tilpazan-284mg-pre-filled-syringe-of-1-5ml-solution-for-injection-4255872","https://medex.com.bd/brands/39620/leqvio-284-mg-sc-injection"]},"indapamide":{"IN":[["Natrilix","Entero Healthcare Solutions Private Limited","Natrilix 1.5Mg Sr Strip Of 10 Tablets"],["Indipil","Eris Life Sciences Pvt Ltd","Indipil 1.5Mg Strip Of 10 Tablets"],["Lorvas","Torrent Pharmaceuticals Ltd","Lorvas 2.5 Mg Strip Of 10 Tablets"]],"BD":[["Indicontin","Mundipharma (BD) Pvt","1.5 mg"],["Indimide SR","Healthcare Pharmaceuticals Ltd","1.5 mg"],["Indelix SR","Beximco Pharmaceuticals PLC","1.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/natrilix-1-5mg-sr-tab-10-s-24290","https://pharmeasy.in/online-medicine-order/indipil-1-5mg-strip-of-10-tablets-4299809","https://pharmeasy.in/online-medicine-order/lorvas-2-5-mg-tab-10-s-26763","https://medex.com.bd/brands/32725/indicontin-15-mg-sr-tablet","https://medex.com.bd/brands/32724/indimide-sr-15-mg-sr-tablet","https://medex.com.bd/brands/21009/indelix-sr-15-mg-sr-tablet"]},"infliximab":{"IN":[["Infimab","Sun Pharma (Ranbaxy)","Infimab 100Mg Dry Vial Of 1 Powder For Injection"],["Remicade","Fulford (india) Ltd","Remicade 100Mg Vial Of 10Ml Injection"]],"BD":[["Remicade","UniMed UniHealth Pharmaceuticals Ltd","100 mg/20 ml"]],"src":["https://pharmeasy.in/online-medicine-order/infimab-injection-1-ml-196755","https://pharmeasy.in/online-medicine-order/remicade-100mg-inj-10ml-75793","https://medex.com.bd/brands/28303/remicade-100-mg-injection"]},"insulin-aspart":{"IN":[["Novorapid","Novo Nordisk India Pvt Ltd","Novorapid Penfill Cartridge Of 3Ml Solution For Injection"],["Fiasp","Novo Nordisk India Pvt Ltd","Fiasp Penfill 100Iu Cartridge Of 3Ml Solution For Injection"]],"BD":[["Fiasp FlexTouch","Novo Nordisk Pharma (Pvt","100 IU/ml"],["Rapilog","Square Pharmaceuticals PLC","100 IU/ml"]],"src":["https://pharmeasy.in/online-medicine-order/novorapid-penfill-injection-3ml-677","https://pharmeasy.in/online-medicine-order/fiasp-100iu-penfill-3ml-222549","https://medex.com.bd/brands/35984/fiasp-flextouch-100-iu-sc-injection","https://medex.com.bd/brands/33434/rapilog-100-iu-sc-injection"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
