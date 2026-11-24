/* Clinical Disease Guide — Drug monograph database, block B, batch 2 (24 Nov 2026). Completes letter B.
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it). */

/* ================= Batch B-2 (fdb-b2.js) ================= */

/* ---------- BREMELANOTIDE (FDA VYLEESI, Cosette, NDA210557, eff. 2026-11-05) ---------- */
FDB_M("bremelanotide", {
  inn: "Bremelanotide", atc: "G02CX05", cls: "Melanocortin receptor agonist",
  linked: [["Hypoactive sexual desire disorder (premenopausal women)", "On-demand injection [FDA]", ""]],
  forms: ["Autoinjector 1.75 mg/0.3 mL SC [FDA]."],
  moa: "Non-selective melanocortin receptor agonist, mainly MC1R and MC4R [FDA].",
  pk: ["Slows gastric emptying — may reduce absorption of oral drugs; avoid with oral naltrexone [FDA]."],
  ind: { adult: ["Acquired, generalised HSDD in premenopausal women, not due to another condition, relationship or drug [FDA].", "Not for postmenopausal women or men [FDA]."], paed: ["Not indicated [NEP]."] },
  adult: [["HSDD", "1.75 mg SC (abdomen or thigh) as needed, at least 45 min before sexual activity. No more than 1 dose in 24 h; more than 8 doses a month not recommended [FDA]."]],
  paed: { tiers: ["Not indicated [NEP]."], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Stop if pregnancy suspected; use effective contraception [FDA].", other: "Ensure blood pressure is controlled before and during use [FDA]." },
  tox: { human: "No overdoses reported; nausea, hyperpigmentation and BP rise more likely at higher doses [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [FDA]." },
  contra: ["Uncontrolled hypertension or known cardiovascular disease [FDA]."],
  ae: { common: ["Nausea (40%), flushing, injection-site reactions, headache, vomiting [FDA]."], serious: ["Transient BP rise and heart-rate fall after each dose [FDA]", "Focal hyperpigmentation (face, gums, breasts) [FDA]"] },
  monitor: ["Blood pressure; skin pigmentation [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "VYLEESI (bremelanotide) injection — Cosette, label effective 2026-11-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f1d0c1b5-2f39-4bad-a6a4-0066e3ad5dcf"]],
  dose: { tagline: "On-demand injection for low sexual desire in premenopausal women.",
    adult: [{ ind: "HSDD (premenopausal women)", text: "1.75 mg SC at least 45 minutes before sexual activity. Maximum 1 dose in 24 hours and 8 doses a month." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- BRENTUXIMAB VEDOTIN (FDA ADCETRIS, Seagen, BLA125388, eff. 2025-11-11) ---------- */
FDB_M("brentuximab-vedotin", {
  inn: "Brentuximab vedotin", atc: "L01FX05", cls: "CD30-directed antibody–drug conjugate (MMAE payload)",
  linked: [["Classical Hodgkin lymphoma", "First-line (with AVD) and relapsed [FDA]", ""], ["Anaplastic large cell and other CD30+ T-cell lymphomas", "Treatment [FDA]", ""]],
  forms: ["Powder for injection 50 mg vial [FDA]."],
  moa: "Binds CD30 and delivers the microtubule inhibitor MMAE into tumour cells [FDA].",
  pk: ["ADC half-life 4–6 days; MMAE 3–4 days [FDA].", "Strong CYP3A4 inhibitors raise MMAE exposure [FDA]."],
  ind: { adult: ["Stage III–IV cHL (with AVD); cHL consolidation after auto-HSCT; relapsed cHL; sALCL and CD30+ PTCL; CD30+ cutaneous T-cell lymphoma; relapsed large B-cell lymphoma, as labelled [FDA]."], paed: ["Previously untreated high-risk cHL, 2 years and over, with chemotherapy [FDA]."] },
  adult: [["Monotherapy", "1.8 mg/kg (maximum 180 mg) IV over 30 min every 3 weeks [FDA]."], ["Untreated stage III–IV cHL with AVD", "1.2 mg/kg (maximum 120 mg) every 2 weeks, up to 12 doses [FDA]."], ["Untreated PTCL with CHP", "1.8 mg/kg (maximum 180 mg) every 3 weeks [FDA]."]],
  paed: { tiers: ["High-risk cHL, 2 years and over: 1.8 mg/kg (maximum 180 mg) every 3 weeks, up to 5 doses, with chemotherapy [FDA]."], transition: "Same mg/kg, capped [FDA].", calcNote: "mg/kg with an absolute cap." },
  adj: { renal: "CrCl over 30: no change. Under 30: avoid [FDA].", hepatic: "Mild: reduced dose by indication — e.g. 0.9 mg/kg (max 90 mg) every 2 weeks with AVD, or every 3 weeks in LBCL; see label section 2.3. Moderate or severe: avoid [FDA].", preg: "Can cause fetal harm; do not breastfeed [FDA].", other: "Never with bleomycin (lung toxicity) [FDA]." },
  tox: { human: "No antidote [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor, especially for neutropenia; supportive care [FDA]." },
  contra: ["Concomitant bleomycin [FDA]."],
  ae: { common: ["Peripheral neuropathy, fatigue, nausea, diarrhoea, neutropenia, URTI, fever [NEP]."], serious: ["PML (boxed) [FDA]", "Peripheral neuropathy [FDA]", "Anaphylaxis/infusion reactions [FDA]", "Neutropenia, serious infections, tumour lysis [FDA]", "Hepatotoxicity, pulmonary toxicity, pancreatitis, GI complications [FDA]"] },
  monitor: ["Blood counts before each dose [FDA].", "Neuropathy; liver tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "brentuximab-vedotin", indication_id: "mono", label: "1.8 mg/kg (max 180 mg) IV every 3 weeks", route: "IV", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1.8, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: 1, caps: { max_single: 180, adult_ceiling_single: 180, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 50, unit: "mg/vial" }], infusion: { duration_h: 0.5 }, rounding: "To 0.1 mg [NEP]", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "CrCl under 30: avoid" }], flags: [], sources: ["FDA"] },
    { drug: "brentuximab-vedotin", indication_id: "avd", label: "Untreated cHL with AVD — 1.2 mg/kg (max 120 mg) every 2 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1.2, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 120, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 50, unit: "mg/vial" }], infusion: { duration_h: 0.5 }, rounding: "To 0.1 mg [NEP]", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "CrCl under 30: avoid" }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ADCETRIS (brentuximab vedotin) for injection — Seagen (Pfizer), label effective 2025-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3904f8dd-1aef-3490-e48f-bd55f32ed67f"]],
  dose: { tagline: "CD30 antibody–drug conjugate for Hodgkin and CD30-positive T-cell lymphomas.",
    boxedTitle: "Progressive multifocal leukoencephalopathy (PML)",
    boxed: "JC virus infection resulting in PML and death can occur in patients receiving ADCETRIS.",
    adult: [
      { ind: "Monotherapy, PTCL with CHP", text: "1.8 mg/kg (maximum 180 mg) IV over 30 minutes every 3 weeks.", calc: ["mono"] },
      { ind: "Untreated stage III–IV cHL (with AVD)", text: "1.2 mg/kg (maximum 120 mg) every 2 weeks, up to 12 doses.", calc: ["avd"] },
      { ind: "Kidney or liver impairment", text: "CrCl under 30 or moderate/severe liver impairment: avoid. Mild liver impairment: lower dose per label." }
    ],
    child: [{ ind: "High-risk cHL, 2 years and over", text: "1.8 mg/kg (maximum 180 mg) every 3 weeks, up to 5 doses, with chemotherapy.", calc: ["mono"] }] }
});

/* ---------- BREXPIPRAZOLE (FDA REXULTI, NDA205422, eff. 2026-11-16) ---------- */
FDB_M("brexpiprazole", {
  inn: "Brexpiprazole", atc: "N05AX16", cls: "Atypical antipsychotic (D2/5-HT1A partial agonist)",
  linked: [["Schizophrenia", "Antipsychotic [FDA]", ""], ["Major depressive disorder", "Add-on to an antidepressant [FDA]", ""], ["Agitation in Alzheimer's dementia", "Treatment [FDA]", ""]],
  forms: ["Tablets 0.25, 0.5, 1, 2, 3 and 4 mg [NEP]."],
  moa: "Partial agonist at D2 and 5-HT1A receptors; antagonist at 5-HT2A [NEP].",
  pk: ["Once daily, with or without food [FDA].", "CYP3A4/CYP2D6 substrate: strong inhibitor of either → half dose; both → quarter dose; strong CYP3A4 inducer → double [FDA]."],
  ind: { adult: ["Adjunct for MDD [FDA].", "Schizophrenia [FDA].", "Agitation associated with Alzheimer's dementia (not as-needed) [FDA]."], paed: ["Schizophrenia, 13 years and over [FDA].", "MDD in children: not established [FDA]."] },
  adult: [["MDD (adjunct)", "Start 0.5–1 mg/day; target 2 mg/day; maximum 3 mg/day [FDA]."], ["Schizophrenia", "Start 1 mg/day; target 2–4 mg/day; maximum 4 mg/day [FDA]."], ["Alzheimer's agitation", "Start 0.5 mg/day; target 2 mg/day; maximum 3 mg/day [FDA]."]],
  paed: { tiers: ["Schizophrenia 13–17 years: start 0.5 mg/day; target 2–4 mg/day; maximum 4 mg/day [FDA]."], transition: "Adult doses from 18 years [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "CrCl under 60: maximum 2 mg/day (MDD, Alzheimer's agitation) or 3 mg/day (schizophrenia) [FDA].", hepatic: "Moderate–severe: same maximums as kidney impairment [FDA].", preg: "Third-trimester exposure: neonatal extrapyramidal/withdrawal symptoms [FDA].", other: "CYP2D6 poor metabolisers: half dose [FDA]." },
  tox: { human: "Limited experience [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; airway and ventilation; activated charcoal reduces absorption [FDA]." },
  contra: ["Known hypersensitivity to brexpiprazole [FDA]."],
  ae: { common: ["Weight gain, akathisia, somnolence, tremor, headache [NEP]."], serious: ["Increased mortality in elderly with dementia-related psychosis (boxed) [FDA]", "Suicidal thoughts in young people (boxed) [FDA]", "Stroke/TIA in elderly with dementia [FDA]", "NMS, tardive dyskinesia, metabolic changes, compulsive behaviours, neutropenia, orthostasis, seizures [FDA]"] },
  monitor: ["Weight, glucose, lipids [FDA].", "Mood and suicidality in young adults [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "brexpiprazole", indication_id: "scz", label: "Schizophrenia — 1 mg/day, target 2–4 mg/day", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose", value_max: 4 }, interval_h: 24, divided_doses: 1, caps: { max_single: 4, max_daily: 4, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }], rounding: "Tablet strengths", renal: [], renal_note: "CrCl under 60: maximum 3 mg/day for schizophrenia (2 mg/day for MDD or Alzheimer's agitation).", flags: [], sources: ["FDA"] },
    { drug: "brexpiprazole", indication_id: "mdd", label: "MDD adjunct — 0.5–1 mg/day, target 2 mg (max 3 mg)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose", value_max: 3 }, interval_h: 24, divided_doses: 1, caps: { max_single: 3, max_daily: 3, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.5, unit: "mg/tab" }], rounding: "Tablet strengths", renal: [], renal_note: "CrCl under 60: maximum 2 mg/day.", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "REXULTI (brexpiprazole) tablets — Otsuka (NDA205422), label effective 2026-11-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=df891816-3fdb-4347-8bf0-c18bc40f1d70"]],
  dose: { tagline: "Once-daily atypical antipsychotic for schizophrenia, add-on in depression, and Alzheimer's agitation.",
    boxedTitle: "Increased mortality in elderly with dementia-related psychosis; suicidal thoughts",
    boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at increased risk of death. REXULTI is not approved for the treatment of patients with dementia-related psychosis without agitation associated with dementia due to Alzheimer's disease. Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients. Closely monitor all antidepressant-treated patients for clinical worsening and emergence of suicidal thoughts and behaviors. Safety and effectiveness of REXULTI have not been established in pediatric patients with MDD.",
    adult: [
      { ind: "Schizophrenia", text: "Start 1 mg once daily; target 2–4 mg; maximum 4 mg.", calc: ["scz"] },
      { ind: "Depression (add-on)", text: "Start 0.5–1 mg once daily; target 2 mg; maximum 3 mg.", calc: ["mdd"] },
      { ind: "Alzheimer's agitation", text: "Start 0.5 mg once daily; target 2 mg; maximum 3 mg." },
      { ind: "CrCl under 60 or moderate–severe liver impairment", text: "Maximum 3 mg (schizophrenia) or 2 mg (other uses) a day." }
    ],
    child: [{ ind: "Schizophrenia, 13–17 years", text: "Start 0.5 mg once daily; target 2–4 mg; maximum 4 mg." }] }
});

/* ---------- BREXUCABTAGENE AUTOLEUCEL (FDA TECARTUS, Kite, BLA125703, eff. 2026-06-16) ---------- */
FDB_M("brexucabtagene-autoleucel", {
  inn: "Brexucabtagene autoleucel", atc: "L01XL06", cls: "CD19-directed autologous CAR T-cell therapy",
  linked: [["Mantle cell lymphoma, relapsed/refractory", "CAR T-cell therapy [FDA]", ""], ["B-cell precursor ALL, relapsed/refractory (adults)", "CAR T-cell therapy [FDA]", ""]],
  forms: ["Cell suspension for IV infusion, about 68 mL bag [FDA]."],
  moa: "Patient's own T cells engineered with a CD19 CAR (CD28 and CD3-zeta domains) [FDA].",
  pk: ["Single infusion [FDA]."],
  ind: { adult: ["Relapsed/refractory mantle cell lymphoma [FDA].", "Relapsed/refractory B-ALL [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["MCL", "One infusion: 2 × 10⁶ CAR-positive viable T cells/kg, maximum 2 × 10⁸ [FDA]."], ["ALL", "One infusion: 1 × 10⁶ cells/kg, maximum 1 × 10⁸ [FDA]."], ["Before infusion", "Cyclophosphamide/fludarabine lymphodepletion; premedicate with paracetamol and diphenhydramine; have tocilizumab available; no leukodepleting filter [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Cell dose — not calculated here." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not recommended in pregnancy [FDA].", other: "Do not give with active infection or inflammatory disorders [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "CRS: tocilizumab ± steroids; neurotoxicity: supportive care/steroids [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["CRS, fever, encephalopathy, hypotension, infections, fatigue, tachycardia, chills, hypoxia, tremor [FDA]."], serious: ["Cytokine release syndrome (boxed) [FDA]", "Neurological toxicity (boxed) [FDA]", "Secondary T-cell malignancies (boxed) [FDA]", "HLH/MAS, prolonged cytopenias, hypogammaglobulinaemia, severe infections [FDA]"] },
  monitor: ["CRS and neurological signs after infusion [FDA].", "Blood counts; immunoglobulins [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "TECARTUS (brexucabtagene autoleucel) suspension for IV infusion — Kite, label effective 2026-06-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a16108c2-7ca7-45af-965e-54bda4713022"]],
  dose: { tagline: "One-time CAR T-cell infusion for relapsed mantle cell lymphoma and adult B-ALL.",
    boxedTitle: "Cytokine release syndrome, neurologic toxicities and secondary blood cancers",
    boxed: "Cytokine Release Syndrome (CRS), including life-threatening reactions, occurred in patients receiving TECARTUS. Do not administer TECARTUS to patients with active infection or inflammatory disorders. Treat severe or life-threatening CRS with tocilizumab or tocilizumab and corticosteroids. Neurologic toxicities, including life-threatening reactions, occurred in patients receiving TECARTUS, including concurrently with CRS or after CRS resolution. Monitor for neurologic toxicities after treatment with TECARTUS. Provide supportive care and/or corticosteroids, as needed. T cell malignancies have occurred following treatment of hematologic malignancies with BCMA- and CD19-directed genetically modified autologous T cell immunotherapies, including TECARTUS.",
    adult: [
      { ind: "Mantle cell lymphoma", text: "One infusion of 2 × 10⁶ CAR-positive T cells/kg (maximum 2 × 10⁸)." },
      { ind: "B-cell ALL", text: "One infusion of 1 × 10⁶ CAR-positive T cells/kg (maximum 1 × 10⁸)." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BRIGATINIB (FDA ALUNBRIG, Takeda, NDA208772, eff. 2026-01-12) ---------- */
FDB_M("brigatinib", {
  inn: "Brigatinib", atc: "L01ED04", cls: "ALK tyrosine kinase inhibitor",
  linked: [["ALK-positive metastatic NSCLC", "First-line or later TKI [FDA]", ""]],
  forms: ["Tablets 30, 90 and 180 mg [FDA]."],
  moa: "Inhibits ALK (and ROS1, IGF-1R, FLT-3, some EGFR mutants) [FDA].",
  pk: ["Half-life about 25 h [FDA].", "Avoid strong/moderate CYP3A inhibitors and inducers (or adjust dose) [FDA]."],
  ind: { adult: ["ALK-positive metastatic NSCLC detected by an approved test [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ALK+ NSCLC", "90 mg once daily for 7 days, then 180 mg once daily, with or without food [FDA]."], ["After an interruption of 14 days or more (not for side effects)", "Restart at 90 mg for 7 days before going back up [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Severe (CrCl 15–29): reduce about 50% (180 → 90 mg; 90 → 60 mg) [FDA].", hepatic: "Severe (Child-Pugh C): reduce about 40% (180 → 120 mg; 120 → 90 mg; 90 → 60 mg) [FDA].", preg: "Can cause fetal harm; do not breastfeed [FDA].", other: "—" },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, fatigue, nausea, rash, cough, myalgia, headache, hypertension [NEP]."], serious: ["Interstitial lung disease/pneumonitis, especially in the first week [FDA]", "Hypertension; bradycardia [FDA]", "Visual disturbance [FDA]", "CPK, pancreatic enzyme rises; hyperglycaemia; photosensitivity [FDA]"] },
  monitor: ["Respiratory symptoms in the first week [FDA].", "BP after 2 weeks then monthly; heart rate [FDA].", "CPK, lipase/amylase, glucose [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "brigatinib", indication_id: "maint", label: "From day 8 — 180 mg once daily (90 mg days 1–7)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 180, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 180, max_daily: 180, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 180, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], renal_note: "CrCl under 15 not studied.", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "ALUNBRIG (brigatinib) tablets — Takeda, label effective 2026-01-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0fe9ff20-d402-41f3-bc1e-7002ea7007db"]],
  dose: { tagline: "Once-daily ALK inhibitor tablet for ALK-positive lung cancer.",
    adult: [
      { ind: "ALK-positive metastatic NSCLC", text: "90 mg once daily for 7 days, then 180 mg once daily.", calc: ["maint"] },
      { ind: "Severe kidney (CrCl 15–29) or severe liver impairment", text: "Kidney: about half the dose (180 → 90 mg). Liver: about 40% less (180 → 120 mg)." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BRIMONIDINE (FDA ALPHAGAN P, Allergan, NDA021262, eff. 2025-09-18; OTC LUMIFY 0.025%) ---------- */
FDB_M("brimonidine", {
  inn: "Brimonidine", atc: "S01EA05", cls: "Alpha-2 adrenergic agonist (ophthalmic)",
  linked: [["Open-angle glaucoma / ocular hypertension", "IOP-lowering drop [FDA]", ""], ["Eye redness (minor irritation)", "Low-strength OTC drop [FDA]", ""]],
  forms: ["Eye drops 0.1% and 0.15% (ALPHAGAN P); 0.2% generic [NEP].", "0.025% OTC redness reliever (LUMIFY) [FDA].", "0.33% gel for facial rosacea (separate product) [NEP]."],
  moa: "Alpha-2 agonist — reduces aqueous production and increases uveoscleral outflow [NEP].",
  pk: ["Systemic absorption can cause sedation and low BP, especially in small children [FDA]."],
  ind: { adult: ["Raised IOP in open-angle glaucoma or ocular hypertension [FDA].", "OTC 0.025%: eye redness from minor irritation [FDA]."], paed: ["Glaucoma drops: contraindicated under 2 years [FDA].", "OTC redness drops: 5 years and over [FDA]."] },
  adult: [["Glaucoma / ocular hypertension", "1 drop in the affected eye(s) three times daily, about 8 h apart; space other drops 5 min apart [FDA]."], ["Eye redness (0.025% OTC)", "1 drop every 6–8 h; no more than 4 times a day [FDA]."]],
  paed: { tiers: ["Under 2 years: contraindicated (apnoea, bradycardia, coma, hypotension, hypothermia reported in infants) [FDA].", "2–7 years: marked somnolence common — use with caution [FDA].", "OTC 0.025%: 5 years and over [FDA]."], transition: "Adult dosing [FDA].", calcNote: "Eye drops — no weight calculation." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Ask a health professional (OTC) [FDA].", other: "Caution with CNS depressants, antihypertensives, MAOIs and tricyclics [NEP]." },
  tox: { human: "Infants: apnoea, bradycardia, hypotension, hypothermia, lethargy, coma [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Neonates and infants under 2 years [FDA].", "Hypersensitivity to any component [FDA]."],
  ae: { common: ["Allergic conjunctivitis, conjunctival hyperaemia, eye itching, dry mouth, fatigue, somnolence [NEP]."], serious: ["Severe CNS and cardiorespiratory depression in infants [FDA]"] },
  monitor: ["IOP; sleepiness in children [FDA]."],
  local: { neml: "Brimonidine 0.2% eye drop (5 mL) is on the Bhutan NEML 2025 — supplied to district hospitals with an eye unit [BT-NEML].", strengths: "0.2% eye drops.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ALPHAGAN P (brimonidine tartrate ophthalmic solution) 0.1%/0.15% — Allergan, label effective 2025-09-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=264c4494-c225-486f-888a-caaf36be46b3"], ["FDA", "LUMIFY (brimonidine 0.025%) redness reliever — Bausch & Lomb, Drug Facts, effective 2026-03-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=022de945-0b26-40ae-8e88-d3fe2464d106"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Alpha-2 agonist eye drop for glaucoma; never in babies under 2.",
    cautionTitle: "Not for infants under 2 years",
    caution: "ALPHAGAN P is contraindicated in neonates and infants (pediatric patients younger than 2 years old). During postmarketing surveillance, apnea, bradycardia, coma, hypotension, hypothermia, hypotonia, lethargy, pallor, respiratory depression, and somnolence have been reported in infants receiving brimonidine. (FDA label, 4.1 and 8.4)",
    adult: [
      { ind: "Glaucoma or ocular hypertension", text: "1 drop in the affected eye(s) three times daily, about 8 hours apart." },
      { ind: "Eye redness (0.025% OTC)", text: "1 drop every 6–8 hours; no more than 4 times a day." }
    ],
    child: [
      { ind: "Under 2 years", text: "Contraindicated." },
      { ind: "2 years and over", text: "As adults, with caution — sleepiness is common in young children." }
    ] }
});

/* ---------- BRINCIDOFOVIR (FDA TEMBEXA, Emergent, NDA214460, eff. 2025-07-23) ---------- */
FDB_M("brincidofovir", {
  inn: "Brincidofovir", atc: "J05AB17", cls: "Orthopoxvirus nucleotide analogue (cidofovir prodrug)",
  linked: [["Smallpox (variola) — treatment", "Strategic-stockpile antiviral [FDA]", ""]],
  forms: ["Tablets 100 mg [FDA].", "Oral suspension 10 mg/mL [FDA]."],
  moa: "Lipid conjugate of cidofovir; inhibits orthopoxvirus DNA polymerase [FDA].",
  pk: ["Active diphosphate half-life about 113 h [FDA].", "OATP1B1/1B3 inhibitors raise levels — avoid or give them at least 3 h after [FDA]."],
  ind: { adult: ["Human smallpox disease only (efficacy from animal models) [FDA]."], paed: ["Including neonates [FDA]."] },
  adult: [["Smallpox, 48 kg or more", "200 mg (two 100 mg tablets or 20 mL suspension) once weekly for 2 doses [FDA]."]],
  paed: { tiers: ["10 to under 48 kg: 4 mg/kg suspension once weekly × 2 [FDA].", "Under 10 kg: 6 mg/kg suspension once weekly × 2 [FDA]."], transition: "200 mg from 48 kg [FDA].", calcNote: "Two weekly doses only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Check liver tests before and during [FDA].", preg: "May cause fetal harm — use an alternative if feasible; pregnancy test before starting [FDA].", other: "Do not give with IV cidofovir [FDA]." },
  tox: { human: "No clinical overdose experience [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, abdominal pain [FDA]."], serious: ["Increased mortality with longer use (boxed) [FDA]", "Raised transaminases and bilirubin [FDA]", "Embryo-fetal toxicity [FDA]"] },
  monitor: ["Liver tests; pregnancy test [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "brincidofovir", indication_id: "adult", label: "48 kg+ — 200 mg once weekly × 2", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 48, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "brincidofovir", indication_id: "mid", label: "10 to under 48 kg — 4 mg/kg once weekly × 2", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 10, max_weight_kg: 48 }, basis: "mg_per_kg", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 10, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "brincidofovir", indication_id: "small", label: "Under 10 kg — 6 mg/kg once weekly × 2", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: 10 }, basis: "mg_per_kg", dose: { value: 6, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "susp", strength: 10, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TEMBEXA (brincidofovir) tablets and oral suspension — Emergent BioDefense, label effective 2025-07-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0784838e-00bd-4b14-9b7e-653b7fbb7eea"]],
  dose: { tagline: "Oral antiviral held for smallpox treatment — two weekly doses.",
    boxedTitle: "Increased mortality with longer use",
    boxed: "An increased incidence of mortality was seen in TEMBEXA-treated subjects compared to placebo-treated subjects in a 24-week clinical trial when TEMBEXA was evaluated in another disease.",
    adult: [{ ind: "Smallpox (48 kg or more)", text: "200 mg once weekly for 2 doses.", calc: ["adult"] }],
    child: [
      { ind: "10 to under 48 kg", text: "4 mg/kg (suspension) once weekly for 2 doses.", calc: ["mid"] },
      { ind: "Under 10 kg (including neonates)", text: "6 mg/kg once weekly for 2 doses.", calc: ["small"] }
    ] }
});

/* ---------- BRINZOLAMIDE (FDA AZOPT 1%, NDA020816, eff. 2023-11-24) ---------- */
FDB_M("brinzolamide", {
  inn: "Brinzolamide", atc: "S01EC04", cls: "Carbonic anhydrase inhibitor (ophthalmic)",
  linked: [["Open-angle glaucoma / ocular hypertension", "IOP-lowering drop [FDA]", ""]],
  forms: ["Ophthalmic suspension 1% (10 mg/mL) [FDA]."],
  moa: "Inhibits carbonic anhydrase II in the ciliary body, reducing aqueous humour [FDA].",
  pk: ["Absorbed systemically; whole-blood half-life about 111 days (binds red-cell carbonic anhydrase) [FDA]."],
  ind: { adult: ["Raised IOP in ocular hypertension or open-angle glaucoma [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Glaucoma / ocular hypertension", "1 drop in the affected eye(s) 3 times daily; shake well; space other drops 10 min apart [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Eye drops — no weight calculation." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "No adequate human data [FDA].", other: "Oral carbonic anhydrase inhibitors together: not recommended [FDA]." },
  tox: { human: "Oral overdose may cause electrolyte imbalance, acidosis, nervous-system effects [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor electrolytes (especially K⁺) and blood pH [FDA]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Blurred vision; bitter, sour or unusual taste [FDA]."], serious: ["Sulfonamide-type reactions (SJS/TEN, blood dyscrasias) [FDA]", "Corneal oedema with low endothelial cell counts [FDA]"] },
  monitor: ["IOP [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "AZOPT (brinzolamide ophthalmic suspension) 1% — label effective 2023-11-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0afb6589-51ba-432c-aed1-20a12d5d3455"]],
  dose: { tagline: "Carbonic anhydrase inhibitor eye drop for glaucoma.",
    adult: [{ ind: "Glaucoma or ocular hypertension", text: "1 drop in the affected eye(s) 3 times daily. Shake well." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BRIVARACETAM (FDA BRIVIACT, UCB, NDA205836–8, eff. 2026-11-05) ---------- */
FDB_M("brivaracetam", {
  inn: "Brivaracetam", atc: "N03AX23", cls: "Antiseizure medicine (SV2A ligand)",
  linked: [["Focal (partial-onset) seizures", "Monotherapy or add-on [FDA]", ""]],
  forms: ["Tablets 10, 25, 50, 75, 100 mg; oral solution 10 mg/mL; injection 50 mg/5 mL [FDA]."],
  moa: "High, selective affinity for synaptic vesicle protein 2A [FDA].",
  pk: ["Half-life about 9 h [FDA].", "IV dose = oral dose [FDA].", "Rifampicin lowers levels — double the dose; raises carbamazepine epoxide and phenytoin [FDA]."],
  ind: { adult: ["Partial-onset seizures [FDA]."], paed: ["1 month and over [FDA]."] },
  adult: [["Adults (16 years+)", "50 mg twice daily; adjust 25–100 mg twice daily [FDA]."]],
  paed: { tiers: ["50 kg+: start 25–50 mg twice daily; range 25–100 mg twice daily [FDA].", "20 to under 50 kg: start 0.5–1 mg/kg twice daily; range 0.5–2 mg/kg twice daily [FDA].", "11 to under 20 kg: start 0.5–1.25 mg/kg twice daily; range 0.5–2.5 mg/kg twice daily [FDA].", "Under 11 kg: start 0.75–1.5 mg/kg twice daily; range 0.75–3 mg/kg twice daily [FDA]."], transition: "Adult dosing from 16 years [FDA].", calcNote: "mg/kg per dose, twice daily." },
  adj: { renal: "No adjustment needed; no data in end-stage disease on dialysis — not recommended [FDA].", hepatic: "All stages: adults start 25 mg twice daily, maximum 75 mg twice daily; children reduced per label Table 2 [FDA].", preg: "Animal data suggest possible fetal harm [FDA].", other: "Withdraw gradually [FDA]." },
  tox: { human: "1,400 mg single dose: somnolence and dizziness. Overdose: vertigo, imbalance, fatigue, nausea, diplopia, anxiety, bradycardia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Standard supportive care; no antidote [FDA]." },
  contra: ["Hypersensitivity to brivaracetam or inactive ingredients (bronchospasm, angioedema) [FDA]."],
  ae: { common: ["Somnolence, sedation, dizziness, fatigue, nausea [NEP]."], serious: ["Suicidal behaviour and ideation [FDA]", "Psychiatric reactions (psychosis, aggression, depression) [FDA]", "Bronchospasm, angioedema [FDA]", "Serious skin reactions [FDA]"] },
  monitor: ["Mood and behaviour [FDA].", "Seizure control [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "brivaracetam", indication_id: "adult", label: "16 years+ — 50 mg twice daily (25–100 mg bd)", route: "PO/IV", population: { min_age_months: 192, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }, { form: "soln", strength: 10, unit: "mg/mL" }], rounding: "Tablet strengths", renal: [], flags: [], sources: ["FDA"] },
    { drug: "brivaracetam", indication_id: "c20", label: "Child 20–<50 kg — start 0.5–1 mg/kg twice daily", route: "PO/IV", population: { min_age_months: 1, max_age_months: 192, min_weight_kg: 20, max_weight_kg: 50 }, basis: "mg_per_kg", dose: { value: 0.5, unit: "mg", per: "dose", value_max: 1 }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, max_daily: 200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "soln", strength: 10, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "brivaracetam", indication_id: "c11", label: "Child 11–<20 kg — start 0.5–1.25 mg/kg twice daily", route: "PO/IV", population: { min_age_months: 1, max_age_months: 192, min_weight_kg: 11, max_weight_kg: 20 }, basis: "mg_per_kg", dose: { value: 0.5, unit: "mg", per: "dose", value_max: 1.25 }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, max_daily: 200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "soln", strength: 10, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "brivaracetam", indication_id: "c0", label: "Child under 11 kg (1 month+) — start 0.75–1.5 mg/kg twice daily", route: "PO/IV", population: { min_age_months: 1, max_age_months: 192, min_weight_kg: null, max_weight_kg: 11 }, basis: "mg_per_kg", dose: { value: 0.75, unit: "mg", per: "dose", value_max: 1.5 }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, max_daily: 200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "soln", strength: 10, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "BRIVIACT (brivaracetam) tablets, oral solution, injection — UCB, label effective 2026-11-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3cf2f439-0e97-443e-8e33-25ecef616f6c"]],
  dose: { tagline: "Twice-daily antiseizure medicine for focal seizures, oral or IV.",
    adult: [
      { ind: "Focal seizures (16 years+)", text: "50 mg twice daily; range 25–100 mg twice daily. IV dose = oral dose.", calc: ["adult"] },
      { ind: "Liver impairment", text: "Start 25 mg twice daily; maximum 75 mg twice daily." }
    ],
    child: [
      { ind: "50 kg and over", text: "Start 25–50 mg twice daily; range 25–100 mg twice daily." },
      { ind: "20 to under 50 kg", text: "Start 0.5–1 mg/kg twice daily; up to 2 mg/kg twice daily.", calc: ["c20"] },
      { ind: "11 to under 20 kg", text: "Start 0.5–1.25 mg/kg twice daily; up to 2.5 mg/kg twice daily.", calc: ["c11"] },
      { ind: "Under 11 kg (1 month+)", text: "Start 0.75–1.5 mg/kg twice daily; up to 3 mg/kg twice daily.", calc: ["c0"] }
    ] }
});

/* ---------- BRODALUMAB (FDA SILIQ, Bausch, BLA761032, eff. 2026-05-28) ---------- */
FDB_M("brodalumab", {
  inn: "Brodalumab", atc: "L04AC12", cls: "IL-17 receptor A antagonist — monoclonal antibody",
  linked: [["Plaque psoriasis, moderate–severe, after other systemic therapies fail", "Biologic [FDA]", ""]],
  forms: ["Prefilled syringe 210 mg/1.5 mL [FDA]."],
  moa: "Blocks IL-17RA, inhibiting IL-17A, IL-17F, IL-17C, IL-17A/F and IL-25 signalling [FDA].",
  pk: ["May alter CYP450 substrate levels when started or stopped [FDA]."],
  ind: { adult: ["Moderate–severe plaque psoriasis after failure or loss of response to other systemic therapies [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Plaque psoriasis", "210 mg SC at weeks 0, 1 and 2, then every 2 weeks. Consider stopping if no adequate response by 12–16 weeks [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "No human data; IgG crosses the placenta [FDA].", other: "Screen for TB before starting [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Crohn's disease [FDA].", "Clinically significant hypersensitivity to brodalumab [FDA]."],
  ae: { common: ["Arthralgia, headache, fatigue, diarrhoea, oropharyngeal pain [FDA]."], serious: ["Suicidal ideation and behaviour (boxed) [FDA]", "Serious infections; TB [FDA]", "Crohn's disease flare [FDA]", "Anaphylaxis [FDA]"] },
  monitor: ["Mood, depression, suicidal thoughts [FDA].", "Infections [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "SILIQ (brodalumab) injection — Bausch Health, label effective 2026-05-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a550c33-456a-4833-814e-8591aea7c688"]],
  dose: { tagline: "IL-17 receptor biologic for difficult plaque psoriasis; restricted for suicide risk.",
    boxedTitle: "Suicidal ideation and behaviour",
    boxed: "Suicidal ideation and behavior, including completed suicides, have occurred in patients treated with SILIQ. Prior to prescribing SILIQ, weigh the potential risks and benefits in patients with a history of depression and/or suicidal ideation or behavior. Patients with new or worsening suicidal ideation and behavior should be referred to a mental health professional, as appropriate. Advise patients and caregivers to seek medical attention for manifestations of suicidal ideation or behavior, new onset or worsening depression, anxiety, or other mood changes. Because of the observed suicidal behavior in subjects treated with SILIQ, SILIQ is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the SILIQ REMS Program.",
    adult: [{ ind: "Plaque psoriasis (after other systemic therapies)", text: "210 mg SC at weeks 0, 1 and 2, then every 2 weeks." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BROLUCIZUMAB (FDA BEOVU, Novartis, BLA761125, eff. 2026-10-26) ---------- */
FDB_M("brolucizumab", {
  inn: "Brolucizumab", atc: "S01LA06", cls: "VEGF-A inhibitor (intravitreal antibody fragment)",
  linked: [["Neovascular (wet) age-related macular degeneration", "Intravitreal anti-VEGF [FDA]", ""], ["Diabetic macular oedema", "Intravitreal anti-VEGF [FDA]", ""]],
  forms: ["Intravitreal injection 6 mg/0.05 mL (120 mg/mL), prefilled syringe or vial [FDA]."],
  moa: "Binds VEGF-A isoforms, blocking VEGFR-1 and VEGFR-2 [FDA].",
  pk: ["Systemic half-life about 4 days [FDA]."],
  ind: { adult: ["Wet AMD [FDA].", "Diabetic macular oedema [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Wet AMD", "6 mg intravitreal monthly (every 25–31 days) for 3 doses, then every 8–12 weeks [FDA]."], ["Diabetic macular oedema", "6 mg every 6 weeks (39–45 days) for 5 doses, then every 8–12 weeks [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Fixed intravitreal dose." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Anti-VEGF mechanism may pose fetal risk [FDA].", other: "Report any change in vision at once (retinal vasculitis/occlusion) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor IOP [NEP]." },
  contra: ["Ocular or periocular infection [FDA].", "Active intraocular inflammation [FDA].", "Hypersensitivity to brolucizumab [FDA]."],
  ae: { common: ["Blurred vision, cataract, conjunctival haemorrhage, vitreous floaters, eye pain [NEP]."], serious: ["Retinal vasculitis and/or retinal vascular occlusion [FDA]", "Endophthalmitis, retinal detachment [FDA]", "Raised IOP; arterial thromboembolism [FDA]"] },
  monitor: ["Vision and IOP after each injection [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "BEOVU (brolucizumab-dbll) intravitreal injection — Novartis, label effective 2026-10-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5d1dc1fa-a2d3-46ed-9e9a-c1a036590d3d"]],
  dose: { tagline: "Intravitreal anti-VEGF injection for wet AMD and diabetic macular oedema.",
    adult: [
      { ind: "Wet AMD", text: "6 mg intravitreal monthly × 3, then every 8–12 weeks." },
      { ind: "Diabetic macular oedema", text: "6 mg every 6 weeks × 5, then every 8–12 weeks." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BROMFENAC (FDA bromfenac ophthalmic 0.07%, Bausch & Lomb, NDA203168, eff. 2026-05-05) ---------- */
FDB_M("bromfenac", {
  inn: "Bromfenac", atc: "S01BC11", cls: "NSAID (ophthalmic)",
  linked: [["After cataract surgery — inflammation and pain", "Topical NSAID [FDA]", ""]],
  forms: ["Ophthalmic solution 0.07% [FDA]; 0.075% and 0.09% products also exist [NEP]."],
  moa: "Inhibits COX-1 and COX-2, blocking prostaglandin synthesis [FDA].",
  pk: ["Low systemic exposure after eye use [FDA]."],
  ind: { adult: ["Postoperative inflammation and ocular pain after cataract surgery [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Cataract surgery", "1 drop once daily in the affected eye, starting 1 day before surgery, on the day of surgery and for 14 days after [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Eye drops — no weight calculation." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Avoid late in pregnancy (NSAID effect on the ductus arteriosus) [FDA].", other: "Contains sodium sulfite — allergic reactions in sensitive people, especially asthmatics [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Anterior chamber inflammation, foreign-body sensation, eye pain, photophobia, blurred vision [FDA]."], serious: ["Sulfite allergic reactions [FDA]", "Delayed healing; keratitis, corneal thinning or melt [FDA]", "Increased bleeding of ocular tissues [FDA]"] },
  monitor: ["Corneal health in prolonged use [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Bromfenac ophthalmic solution 0.07% — Bausch & Lomb (NDA203168), label effective 2026-05-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=246e2110-6a2d-4e22-8e37-72d80796b9af"]],
  dose: { tagline: "Once-daily NSAID eye drop around cataract surgery.",
    adult: [{ ind: "Cataract surgery", text: "1 drop once daily from the day before surgery until 14 days after." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BROMOCRIPTINE (FDA bromocriptine mesylate, NDA017962 = PARLODEL, eff. 2026-07-27) ---------- */
FDB_M("bromocriptine", {
  inn: "Bromocriptine", atc: "N04BC01", cls: "Ergot-derived dopamine agonist",
  linked: [["Hyperprolactinaemia and prolactinoma", "Dopamine agonist [FDA]", ""], ["Acromegaly", "Adjunct [FDA]", ""], ["Parkinson's disease", "Dopamine agonist [FDA]", ""]],
  forms: ["Tablets 2.5 mg (scored); capsules 5 mg [FDA]."],
  moa: "Ergot dopamine-receptor agonist: lowers prolactin (pituitary) and stimulates striatal dopamine receptors [FDA].",
  pk: ["Take with food [FDA].", "CYP3A4 substrate: avoid strong inhibitors; reduce dose with moderate ones [FDA].", "Dopamine antagonists reduce its effect; alcohol worsens side effects [FDA]."],
  ind: { adult: ["Hyperprolactinaemia-related amenorrhoea, galactorrhoea, infertility, hypogonadism [FDA].", "Prolactin-secreting adenomas [FDA].", "Acromegaly [FDA].", "Parkinson's disease [FDA].", "Not for suppressing postpartum lactation [FDA]."], paed: ["Prolactin-secreting adenomas, 11 years and over [FDA]."] },
  adult: [["Hyperprolactinaemia", "1.25–2.5 mg once daily; increase by up to 2.5 mg every 2–7 days; usual 2.5–15 mg once daily [FDA]."], ["Prolactinoma", "1.25–2.5 mg once daily; usual 2.5–10 mg once daily [FDA]."], ["Acromegaly", "1.25–2.5 mg at bedtime for 3 days; increase by 1.25–2.5 mg every 3–7 days; maximum 100 mg/day [FDA]."], ["Parkinson's disease", "1.25 mg twice daily; increase by 1.25 mg twice daily every 14–28 days; maximum 100 mg/day [FDA]."]],
  paed: { tiers: ["Prolactinoma, 11 years and over: as adults [FDA]."], transition: "Adult doses [FDA].", calcNote: "Titrated fixed doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Pregnancy test every 4 weeks during amenorrhoea; contraception if pregnancy not wanted or large adenoma [FDA].", other: "Echocardiogram before starting — do not use if valvular disease [FDA]." },
  tox: { human: "Nausea, vomiting, sweating, dizziness, severe hypotension, confusion, hallucinations, repetitive yawning; children: vomiting, somnolence, fever [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [FDA]." },
  contra: ["Cardiac valve disease or pericardial fibrosis (history) [FDA].", "Pleural, pulmonary or retroperitoneal fibrosis (history) [FDA].", "Uncontrolled hypertension [FDA].", "Hypersensitivity to bromocriptine or other ergot alkaloids [FDA]."],
  ae: { common: ["Nausea, headache, dizziness, fatigue, vomiting, orthostatic hypotension [NEP]."], serious: ["Cardiac valvulopathy, pericardial fibrosis [FDA]", "Pleural/pulmonary/retroperitoneal fibrosis [FDA]", "Hypotension [FDA]", "Postpartum stroke, seizures, MI if used to stop lactation [FDA]", "Impulse-control disorders; sudden sleep; hallucinations [FDA]"] },
  monitor: ["Echocardiogram every 6–12 months [FDA].", "Blood pressure [FDA].", "Prolactin; pregnancy tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bromocriptine", indication_id: "prl", label: "Hyperprolactinaemia — 1.25–2.5 mg once daily to start", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1.25, unit: "mg", per: "dose", value_max: 2.5 }, interval_h: 24, divided_doses: 1, caps: { max_single: 15, max_daily: 15, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2.5, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Bromocriptine mesylate tablets and capsules (NDA017962, PARLODEL) — label effective 2026-07-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=17f3a343-1782-4799-95ba-31dfe93be2cf"]],
  dose: { tagline: "Dopamine agonist for high prolactin, prolactinoma, acromegaly and Parkinson's.",
    cautionTitle: "Not for stopping breast milk after delivery",
    caution: "Avoid use of bromocriptine mesylate for the inhibition or suppression of postpartum physiologic lactation because of the risk of serious adverse reactions. (FDA label, 1 and 5.4)",
    adult: [
      { ind: "Hyperprolactinaemia", text: "Start 1.25–2.5 mg once daily with food; raise by up to 2.5 mg every 2–7 days; usual 2.5–15 mg a day.", calc: ["prl"] },
      { ind: "Prolactinoma", text: "Start 1.25–2.5 mg once daily; usual 2.5–10 mg a day." },
      { ind: "Acromegaly", text: "1.25–2.5 mg at bedtime × 3 days, then up by 1.25–2.5 mg every 3–7 days; maximum 100 mg a day." },
      { ind: "Parkinson's disease", text: "1.25 mg twice daily; up by 1.25 mg twice daily every 2–4 weeks; maximum 100 mg a day." }
    ],
    child: [{ ind: "Prolactinoma, 11 years and over", text: "As adults." }] }
});

/* ---------- BROMPHENIRAMINE (FDA: only in combinations — brompheniramine/pseudoephedrine/dextromethorphan syrup, ANDA203375) ---------- */
FDB_M("brompheniramine", {
  inn: "Brompheniramine", atc: "R06AB01", cls: "First-generation (alkylamine) antihistamine",
  linked: [["Allergic rhinitis / common cold symptoms", "In combination cough-cold products [FDA]", ""]],
  forms: ["US: syrups/liquids in combination (e.g. brompheniramine 2 mg + pseudoephedrine 30 mg + dextromethorphan 10 mg per 5 mL) [NEP].", "Single-ingredient products marketed in some countries [NEP]."],
  moa: "H1-receptor antagonist with anticholinergic and sedative effects [NEP].",
  pk: ["Additive sedation with alcohol and CNS depressants; MAOIs intensify anticholinergic effects [FDA]."],
  ind: { adult: ["Cough and upper-respiratory symptoms with allergy or common cold (combination syrup) [FDA]."], paed: ["Combination syrup: 2 years and over; infants 6 months–2 years only as directed by a physician [FDA]."] },
  adult: [["Combination syrup (12 years+)", "10 mL every 4 h; no more than 6 doses in 24 h [FDA]."]],
  paed: { tiers: ["6 to under 12 years: 5 mL every 4 h [FDA].", "2 to under 6 years: 2.5 mL every 4 h [FDA].", "Maximum 6 doses in 24 h [FDA].", "Not in newborns or premature infants [FDA]."], transition: "Adult volume from 12 years [FDA].", calcNote: "Product-specific volumes — not calculated." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Contraindicated in nursing mothers (combination) [FDA].", other: "Not for asthma or other lower respiratory conditions [FDA]." },
  tox: { human: "Children: overdose may cause hallucinations, convulsions and death; CNS depression or stimulation, anticholinergic effects [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Hypersensitivity to any ingredient [FDA].", "Newborns, premature infants, nursing mothers [FDA].", "Severe hypertension or coronary disease; with MAOIs (combination) [FDA]."],
  ae: { common: ["Sedation; dry mouth, nose and throat; thick bronchial secretions; dizziness [FDA]."], serious: ["Hallucinations and seizures in young children [FDA]", "Arrhythmias, hypertension (pseudoephedrine component) [FDA]"] },
  monitor: ["Sedation; correct dosing device for children [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Brompheniramine maleate, pseudoephedrine HCl and dextromethorphan HBr syrup — Acella (ANDA203375), label effective 2026-03-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1045e307-f60d-482d-8e06-40e72b84c651"]],
  dose: { tagline: "Sedating antihistamine, mainly found in combination cough-and-cold syrups.",
    adult: [{ ind: "Combination syrup (12 years and over)", text: "10 mL every 4 hours; no more than 6 doses in 24 hours." }],
    child: [
      { ind: "6 to under 12 years", text: "5 mL every 4 hours (maximum 6 doses a day)." },
      { ind: "2 to under 6 years", text: "2.5 mL every 4 hours (maximum 6 doses a day)." },
      { ind: "Under 2 years", text: "Only as directed by a physician; never in newborns or premature infants." }
    ] }
});

/* ---------- BUDESONIDE (FDA: ENTOCORT EC-type capsules NDA021324; PULMICORT RESPULES NDA020929) ---------- */
FDB_M("budesonide", {
  inn: "Budesonide", atc: "R03BA02", cls: "Corticosteroid with high first-pass metabolism (inhaled, nasal, gut-targeted oral)",
  linked: [["Asthma — maintenance (nebulised, young children)", "Inhaled corticosteroid [FDA]", ""], ["Crohn's disease (ileum/ascending colon)", "Oral controlled-release steroid [FDA]", ""], ["Allergic rhinitis", "Nasal spray [NEP]", ""]],
  forms: ["Nebuliser suspension 0.25 mg/2 mL, 0.5 mg/2 mL, 1 mg/2 mL (PULMICORT RESPULES) [FDA].", "Delayed-release capsules 3 mg (Crohn's) [FDA].", "Inhalers, nasal sprays, extended-release tablets (ulcerative colitis) and rectal foam also exist [NEP]."],
  moa: "Potent glucocorticoid (receptor affinity about 15× prednisolone) with weak mineralocorticoid effect; extensive first-pass metabolism limits systemic exposure [FDA].",
  pk: ["CYP3A4 substrate — ketoconazole raised oral exposure 8-fold; avoid strong inhibitors and grapefruit juice [FDA]."],
  ind: { adult: ["Mild–moderate active Crohn's disease of the ileum/ascending colon; maintenance up to 3 months [FDA]."], paed: ["Nebulised: asthma maintenance, 12 months to 8 years [FDA].", "Crohn's disease: 8 years and over, over 25 kg [FDA]."] },
  adult: [["Active Crohn's disease", "9 mg once daily in the morning for up to 8 weeks; repeat courses for recurrences [FDA]."], ["Crohn's maintenance", "6 mg once daily for up to 3 months, then taper off [FDA]."]],
  paed: { tiers: ["Asthma (nebulised, 12 months–8 years): bronchodilators only before — 0.5 mg/day (once daily or 0.25 mg twice daily), maximum 0.5 mg/day; on inhaled steroids — 0.5 mg/day, up to 1 mg/day; on oral steroids — 1 mg/day (0.5 mg twice or 1 mg once). Consider 0.25 mg once daily in symptomatic children not responding to non-steroid therapy [FDA].", "Crohn's disease, 8–17 years and over 25 kg: 9 mg once daily up to 8 weeks, then 6 mg once daily for 2 weeks [FDA]."], transition: "Adult regimens [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Moderate (Child-Pugh B): consider 3 mg once daily (oral capsules) [FDA].", preg: "Animal data suggest possible fetal harm; human data insufficient [FDA].", other: "Taper slowly when switching from systemic steroids [FDA]." },
  tox: { human: "Acute toxicity rare; chronic excess causes hypercorticism and adrenal suppression [FDA].", animal: "Single oral 200 mg/kg (female) and 400 mg/kg (male) lethal in mice [FDA].", manage: "Gastric lavage or emesis then supportive care (acute); reduce dose temporarily (chronic) [FDA]." },
  contra: ["Hypersensitivity to budesonide or any ingredient [FDA]."],
  ae: { common: ["Nebulised: respiratory infection, rhinitis, cough, otitis media, oral thrush [FDA].", "Oral: headache, respiratory infection, nausea, back pain [NEP]."], serious: ["Hypercorticism and adrenal suppression [FDA]", "Infections incl. severe varicella or measles [FDA]", "Kaposi's sarcoma; growth effects in children [FDA]"] },
  monitor: ["Growth in children; signs of hypercorticism [FDA]."],
  local: { neml: "Budesonide 50 mcg nasal spray has been replaced on the Bhutan NEML 2025 by fluticasone furoate nasal spray [BT-NEML].", strengths: "Not supplied (replaced by fluticasone furoate).", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "budesonide", indication_id: "crohn", label: "Active Crohn's — 9 mg once daily (up to 8 weeks)", route: "PO", population: { min_age_months: 96, max_age_months: null, min_weight_kg: 25.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 9, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 9, max_daily: 9, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 3, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] },
    { drug: "budesonide", indication_id: "neb", label: "Asthma, 12 months–8 years — 0.5 mg/day nebulised (max 1 mg/day)", route: "Inhaled", population: { min_age_months: 12, max_age_months: 108, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "day", value_max: 1 }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole respules (0.25, 0.5, 1 mg)", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Budesonide delayed-release capsules 3 mg (NDA021324, ENTOCORT EC) — label effective 2026-02-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33def4dc-b469-f987-e063-6294a90ace0b"], ["FDA", "PULMICORT RESPULES (budesonide inhalation suspension) — AstraZeneca, label effective 2019-10-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=33cd9834-76df-4f26-3fa2-aab6b9eee8f2"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Steroid used nebulised for childhood asthma, orally for Crohn's, and as a nasal spray.",
    adult: [
      { ind: "Active Crohn's disease", text: "9 mg once daily in the morning for up to 8 weeks.", calc: ["crohn"] },
      { ind: "Crohn's maintenance", text: "6 mg once daily for up to 3 months, then taper." },
      { ind: "Moderate liver impairment", text: "Consider 3 mg once daily (oral)." }
    ],
    child: [
      { ind: "Asthma, 12 months–8 years (nebulised)", text: "0.5 mg a day (once daily or 0.25 mg twice daily); up to 1 mg a day if previously on steroids. Jet nebuliser only.", calc: ["neb"] },
      { ind: "Crohn's disease, 8–17 years over 25 kg", text: "9 mg once daily up to 8 weeks, then 6 mg for 2 weeks.", calc: ["crohn"] }
    ] }
});

/* ---------- BULEVIRTIDE (FDA HEPCLUDEX, Gilead, BLA761468, eff. 2026-05-22) ---------- */
FDB_M("bulevirtide", {
  inn: "Bulevirtide", atc: "J05AX28", cls: "HDV entry inhibitor (NTCP-directed lipopeptide)",
  linked: [["Chronic hepatitis D (delta) infection", "Antiviral, with HBV management [FDA]", ""]],
  forms: ["Powder for injection 8.5 mg vial, SC [FDA]."],
  moa: "Binds NTCP on hepatocytes, blocking HDV (and HBV) entry [FDA].",
  pk: ["Peptide catabolism — low interaction potential; >99% protein-bound [FDA]."],
  ind: { adult: ["Chronic HDV infection without cirrhosis or with compensated cirrhosis (accelerated approval) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Chronic hepatitis D", "8.5 mg SC once daily, continued while responding; manage hepatitis B alongside [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Decompensated cirrhosis: not indicated [FDA].", preg: "Insufficient human data; no embryo-fetal effects in animals [FDA].", other: "After stopping: monitor liver tests, HBV DNA and HDV RNA for at least 6 months [FDA]." },
  tox: { human: "No overdose data [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; dialysis unlikely to help [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Injection-site reactions, headache, abdominal pain, fatigue, pruritus [FDA]."], serious: ["Severe hepatitis D/B flare after stopping (boxed) [FDA]", "Hypersensitivity, including anaphylaxis [FDA]"] },
  monitor: ["ALT, HBV DNA, HDV RNA during and for 6 months after [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bulevirtide", indication_id: "hdv", label: "8.5 mg SC once daily", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 8.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 8.5, max_daily: 8.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 8.5, unit: "mg/vial" }], rounding: "Whole vial", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "HEPCLUDEX (bulevirtide) for injection — Gilead, label effective 2026-05-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=12391cc2-38c2-4cf5-86d3-2be9370127fc"]],
  dose: { tagline: "Daily injection that blocks hepatitis D virus entry into liver cells.",
    boxedTitle: "Severe hepatitis D and B flares after stopping",
    boxed: "Severe acute exacerbations of hepatitis D and hepatitis B may occur after HEPCLUDEX is discontinued, especially in patients with cirrhosis, who may be at increased risk of more severe flares or progression to hepatic decompensation. Monitor hepatic function closely with both clinical and laboratory follow-up, including hepatitis B virus (HBV) DNA and hepatitis delta virus (HDV) RNA viral load, for at least six months in patients who discontinue HEPCLUDEX. Resumption of antiviral therapy may be warranted.",
    adult: [{ ind: "Chronic hepatitis D", text: "8.5 mg SC once daily.", calc: ["hdv"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BUMETANIDE (FDA tablets NDA018225 = BUMEX; injection ANDA218746) ---------- */
FDB_M("bumetanide", {
  inn: "Bumetanide", atc: "C03CA02", cls: "Loop diuretic",
  linked: [["Oedema — heart failure, liver disease, kidney disease/nephrotic syndrome", "Loop diuretic [FDA]", ""]],
  forms: ["Tablets 0.5, 1 and 2 mg [NEP].", "Injection 0.25 mg/mL (IV/IM) [NEP]."],
  moa: "Inhibits Na-K-2Cl co-transport in the thick ascending limb of the loop of Henle [NEP].",
  pk: ["Rapid onset, short action; half-life 1–1.5 h in adults; about 6 h (up to 15 h) in neonates [FDA].", "Oral and IV give almost equal diuresis [FDA].", "Ototoxicity risk with aminoglycosides; reduces lithium clearance; NSAIDs/probenecid blunt the effect [FDA]."],
  ind: { adult: ["Oedema of heart failure, liver and kidney disease including nephrotic syndrome; may work after furosemide allergy [FDA]."], paed: ["Safety and effectiveness under 18 years not established; displaces bilirubin — concern in jaundiced neonates [FDA]."] },
  adult: [["Oral", "0.5–2 mg once daily; if needed repeat every 4–5 h up to 10 mg/day. Intermittent schedules (alternate days, or 3–4 days on, 1–2 off) are safest for long-term control [FDA]."], ["IV or IM", "0.5–1 mg (IV over 1–2 min); repeat every 2–3 h if needed, maximum 10 mg/day; switch to oral as soon as possible [FDA]."], ["Liver failure", "Keep the dose to a minimum [FDA]."]],
  paed: { tiers: ["Not established under 18 years [FDA]."], transition: "Adults only [FDA].", calcNote: "Fixed adult doses." },
  adj: { renal: "Stop if urea/creatinine rise sharply or oliguria develops in progressive kidney disease; contraindicated in anuria [FDA].", hepatic: "Minimum dose; contraindicated in hepatic coma [FDA].", preg: "Not established in primary source. [NEP]", other: "Elderly: watch for dehydration and thrombosis [FDA]." },
  tox: { human: "Profound water and electrolyte loss, dehydration, circulatory collapse, thrombosis [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Replace fluid and electrolytes with careful monitoring [FDA]." },
  contra: ["Anuria [FDA].", "Hepatic coma; severe electrolyte depletion until corrected [FDA].", "Hypersensitivity to bumetanide [FDA]."],
  ae: { common: ["Muscle cramps, dizziness, hypotension, headache, nausea, hepatic encephalopathy in liver disease [FDA]."], serious: ["Profound diuresis with electrolyte depletion (boxed) [FDA]", "Hypokalaemia [FDA]", "Ototoxicity [FDA]", "SJS/TEN [FDA]"] },
  monitor: ["Potassium, sodium, creatinine, urea [FDA].", "Weight, fluid balance, BP [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 (furosemide is the listed loop diuretic) [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "bumetanide", indication_id: "po", label: "Oral — 0.5–2 mg once daily (max 10 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose", value_max: 2 }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, max_daily: 10, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "bumetanide", indication_id: "iv", label: "IV/IM — 0.5–1 mg (repeat every 2–3 h, max 10 mg/day)", route: "IV/IM", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose", value_max: 1 }, interval_h: null, divided_doses: 1, caps: { max_single: 10, max_daily: 10, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 0.25, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Bumetanide tablets (NDA018225, BUMEX) — Edenbridge, label effective 2025-12-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=32c4372e-54ea-4fc8-b9f8-827fa4c8edd3"], ["FDA", "Bumetanide injection — Camber (ANDA218746), label effective 2025-04-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=084b34ad-36ba-43bd-a43a-1f4b4da26d8f"]],
  dose: { tagline: "Potent short-acting loop diuretic for oedema (about 40× furosemide by weight).",
    boxedTitle: "Profound diuresis with water and electrolyte depletion",
    boxed: "Bumetanide is a potent diuretic which, if given in excessive amounts, can lead to a profound diuresis with water and electrolyte depletion. Therefore, careful medical supervision is required, and dose and dosage schedule have to be adjusted to the individual patient's needs.",
    adult: [
      { ind: "Oedema — oral", text: "0.5–2 mg once daily; repeat every 4–5 hours if needed, maximum 10 mg a day.", calc: ["po"] },
      { ind: "Oedema — IV/IM", text: "0.5–1 mg (IV over 1–2 minutes); repeat every 2–3 hours if needed, maximum 10 mg a day.", calc: ["iv"] }
    ],
    child: [{ ind: "Under 18 years", text: "Not established (bilirubin displacement in neonates)." }] }
});

/* ---------- BUPIVACAINE (FDA SENSORCAINE NDA018304; BUPIVACAINE SPINAL ANDA071810) ---------- */
FDB_M("bupivacaine", {
  inn: "Bupivacaine", atc: "N01BB01", cls: "Long-acting amide local anaesthetic",
  linked: [["Spinal anaesthesia (caesarean, lower abdominal, perineal, lower limb)", "Hyperbaric 0.75% or 0.5% in dextrose [FDA][BT-NEML]", ""], ["Epidural, nerve block, infiltration", "Plain 0.25–0.5% [FDA]", ""]],
  forms: ["Plain 0.25%, 0.5%, 0.75% (with or without adrenaline 1:200,000) [FDA].", "Hyperbaric (spinal) 0.75% in 8.25% dextrose [FDA]; Bhutan: 0.5% in 8% dextrose, 4 mL ampoule [BT-NEML]."],
  moa: "Blocks voltage-gated sodium channels in nerve membranes [NEP].",
  pk: ["Half-life about 2.7 h in adults; longer in neonates [NEP].", "Cardiotoxic at high plasma levels — more than other amides [NEP]."],
  ind: { adult: ["Local or regional anaesthesia/analgesia for surgery, dental, diagnostic and obstetric procedures; only 0.25% and 0.5% for obstetrics [FDA].", "Not for IV regional anaesthesia (Bier block) [FDA]."], paed: ["Under 12 years: not recommended in the Sensorcaine label [FDA]."] },
  adult: [["Maximum single dose", "175 mg without adrenaline; 225 mg with adrenaline 1:200,000. May repeat up to every 3 h; do not exceed 400 mg in 24 h [FDA]."], ["Spinal (hyperbaric 0.75%)", "Vaginal delivery about 6 mg; lower limb/perineal about 7.5 mg; lower abdominal about 12 mg; caesarean 7.5–10.5 mg [FDA]."], ["Technique", "Smallest dose and concentration needed; inject slowly in increments with frequent aspiration; reduce in elderly, debilitated, cardiac or liver disease [FDA]."]],
  paed: { tiers: ["Under 12 years: not recommended (Sensorcaine) [FDA]."], transition: "Adult limits from 12 years [FDA].", calcNote: "Maximum safe dose depends on weight in practice — not calculated here." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Reduce dose in liver disease [FDA].", preg: "0.75% not for obstetric epidural (cardiac arrest reported) [FDA].", other: "Methaemoglobinaemia risk: G6PD deficiency, infants under 6 months, oxidising drugs [FDA]." },
  tox: { human: "High plasma levels: CNS excitation then depression, seizures, arrhythmias, cardiovascular collapse [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop injecting; oxygen, airway, ventilation; treat seizures; circulatory support; lipid emulsion in local-anaesthetic systemic toxicity [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Obstetric paracervical block (fetal bradycardia and death) [FDA].", "Hypersensitivity to bupivacaine or any amide local anaesthetic [FDA]."],
  ae: { common: ["Hypotension, bradycardia (spinal/epidural), nausea [NEP]."], serious: ["Local anaesthetic systemic toxicity: seizures, cardiac arrest [FDA]", "Methaemoglobinaemia [FDA]", "Chondrolysis with intra-articular infusion [FDA]"] },
  monitor: ["Cardiovascular and respiratory signs and consciousness after each injection [FDA]."],
  local: { neml: "Bupivacaine 0.5% + dextrose 8% (4 mL) and bupivacaine 0.5% preservative-free (20 mL) are on the Bhutan NEML 2025 — supplied to district hospitals with an operating theatre [BT-NEML].", strengths: "0.5% heavy (spinal) and 0.5% plain.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "SENSORCAINE (bupivacaine HCl) injection — label effective 2026-11-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=100201ad-6e4d-4e91-8b5c-621d0bf0dcc2"], ["FDA", "Bupivacaine Spinal (bupivacaine in dextrose) — Hospira (ANDA071810), label effective 2026-04-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a8d2539-4422-4312-0298-207ef1a2948e"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Long-acting local anaesthetic for spinal, epidural, nerve block and infiltration.",
    cautionTitle: "Maximum dose and cardiotoxicity",
    caution: "The rapid injection of a large volume of local anesthetic solution should be avoided and fractional (incremental) doses should be used when feasible. Maximum single dose 175 mg without epinephrine and 225 mg with epinephrine 1:200,000; total daily doses should not exceed 400 mg in 24 hours. (FDA Sensorcaine label)",
    adult: [
      { ind: "Spinal (hyperbaric)", text: "Vaginal delivery ~6 mg; lower limb/perineum ~7.5 mg; lower abdomen ~12 mg; caesarean 7.5–10.5 mg." },
      { ind: "Blocks and infiltration (plain)", text: "Smallest effective dose. Maximum 175 mg (225 mg with adrenaline) per dose; not over 400 mg in 24 hours." }
    ],
    child: [{ ind: "Under 12 years", text: "Not recommended in the FDA label." }] }
});

/* ---------- BUPRENORPHINE (FDA: sublingual tablets ANDA090622; transdermal NDA021306) ---------- */
FDB_M("buprenorphine", {
  inn: "Buprenorphine", atc: "N07BC01", cls: "Partial mu-opioid agonist",
  risk: "High-alert — opioids are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Opioid use disorder — substitution treatment", "Sublingual tablets [FDA][BT-NEML]", ""], ["Severe persistent pain", "Transdermal patch [FDA]", ""]],
  forms: ["Sublingual tablets 8 mg [FDA]; 2 mg also marketed [NEP]; Bhutan: 2 mg tablet [BT-NEML].", "Transdermal patches 5, 7.5, 10, 15, 20 mcg/h (7-day) [FDA].", "Buprenorphine/naloxone films/tablets, injections and implants exist [NEP]."],
  moa: "Partial agonist at mu, antagonist at kappa receptors; high affinity — can precipitate withdrawal in people on full agonists [FDA].",
  pk: ["Long action — once-daily sublingual dosing [FDA].", "Patch: apparent half-life about 26 h after removal [FDA].", "Benzodiazepines and other CNS depressants — coma and death reported [FDA].", "CYP3A4 inhibitors raise levels [NEP]."],
  ind: { adult: ["Opioid dependence (sublingual) [FDA].", "Severe persistent pain needing an opioid when alternatives fail (patch) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Opioid use disorder — induction", "First dose only when clear moderate withdrawal is present and at least 4 h after the last short-acting opioid. Studies: 8 mg on day 1, 16 mg on day 2 (2–4 mg increments may be used on day 1) [FDA]."], ["Maintenance", "Adjust by 2–4 mg steps; usual 4–24 mg once daily (target about 16 mg) [FDA]."], ["Patch (pain)", "5–20 mcg/h every 7 days; 7.5–20 mcg/h only for opioid-tolerant patients on up to 80 mg/day oral morphine equivalent [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Severe impairment: consider an alternative; monitor [FDA].", preg: "Prolonged use may cause neonatal opioid withdrawal syndrome [FDA].", other: "Prescribe naloxone with treatment; taper gradually when stopping [FDA]." },
  tox: { human: "Respiratory depression, somnolence to coma, miosis (or mydriasis with hypoxia), bradycardia, hypotension, death [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Airway and ventilation; naloxone (large or repeated doses may be needed); monitor at least 24 h [FDA]." },
  contra: ["Hypersensitivity to buprenorphine [FDA].", "Patch: significant respiratory depression, acute severe asthma without monitoring, GI obstruction [FDA]."],
  ae: { common: ["Headache, nausea, constipation, sweating, insomnia, withdrawal symptoms; patch-site reactions [NEP]."], serious: ["Respiratory depression, especially with benzodiazepines [FDA]", "Addiction, misuse, diversion [FDA]", "Fatal exposure in children [FDA]", "Hepatitis; adrenal insufficiency; QT prolongation (patch) [FDA]"] },
  monitor: ["Sedation and breathing, especially with other depressants [FDA].", "Liver tests [NEP].", "Diversion; supervised dosing early [FDA]."],
  local: { neml: "Buprenorphine 2 mg tablet is on the Bhutan NEML 2025 — supplied to regional referral hospitals with a psychiatrist [BT-NEML].", strengths: "2 mg sublingual tablet.", stg: "Not mentioned in Bhutan STG 2024; used in the national opioid substitution programme [BT-STG]." },
  calc: [{ drug: "buprenorphine", indication_id: "oud", label: "OUD maintenance — usual 4–24 mg SL once daily", route: "SL", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose", value_max: 24 }, interval_h: 24, divided_doses: 1, caps: { max_single: 24, max_daily: 24, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2, unit: "mg/tab", whole: true }], rounding: "Whole 2 mg tablets — do not cut", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Buprenorphine HCl sublingual tablets (ANDA090622) — label effective 2026-07-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=11686845-f5fd-4e96-8a4f-9b132bf48840"], ["FDA", "Buprenorphine transdermal system (NDA021306) — Rhodes, label effective 2026-05-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2738feae-316e-426f-971c-5f142ac01b60"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Partial opioid agonist for opioid substitution therapy and severe chronic pain.",
    cautionTitle: "Induction only in clear withdrawal; beware sedatives",
    caution: "To avoid precipitating withdrawal, induction with buprenorphine sublingual tablets should be undertaken when objective and clear signs of withdrawal are evident. Warn patients of the potential danger of self-administration of benzodiazepines or other CNS depressants while under treatment with buprenorphine sublingual tablets. (FDA label, 2 and 5.2)",
    adult: [
      { ind: "Opioid use disorder — induction", text: "When in clear moderate withdrawal (≥4 h after short-acting opioids): e.g. 8 mg on day 1, 16 mg on day 2 (2–4 mg steps allowed)." },
      { ind: "Opioid use disorder — maintenance", text: "4–24 mg sublingually once daily, adjusted in 2–4 mg steps; whole tablets under the tongue.", calc: ["oud"] },
      { ind: "Severe persistent pain (patch)", text: "5–20 mcg/h patch changed every 7 days, per opioid tolerance." }
    ],
    child: [{ ind: "Children", text: "Not established; accidental exposure can be fatal." }] }
});

/* ---------- BUPROPION (FDA bupropion XL, ANDA211020; original WELLBUTRIN XL) ---------- */
FDB_M("bupropion", {
  inn: "Bupropion", atc: "N06AX12", cls: "Aminoketone antidepressant (noradrenaline–dopamine reuptake inhibitor)",
  linked: [["Major depressive disorder", "Antidepressant [FDA]", ""], ["Seasonal affective disorder — prevention", "XL formulation [FDA]", ""], ["Smoking cessation", "SR formulation (separate product) [NEP]", ""]],
  forms: ["Extended-release (XL) tablets 150 mg and 300 mg [NEP]; immediate- and sustained-release products also exist [NEP]."],
  moa: "Weak inhibitor of noradrenaline and dopamine reuptake [NEP].",
  pk: ["Half-life about 21 h; hydroxybupropion about 20 h [FDA].", "Inhibits CYP2D6 — raises some antidepressants, antipsychotics, metoprolol, flecainide/propafenone [FDA].", "CYP2B6 inducers lower levels [FDA]."],
  ind: { adult: ["Major depressive disorder [FDA].", "Prevention of seasonal affective disorder [FDA]."], paed: ["Not established (boxed suicidality warning for young people) [FDA]."] },
  adult: [["Depression (XL)", "150 mg once daily in the morning; after 4 days may increase to 300 mg once daily; maximum 450 mg/day (seizure risk) [FDA]."], ["Seasonal affective disorder (XL)", "Start in autumn: 150 mg daily, after 1 week 300 mg daily, through winter [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults only [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Consider reducing dose and/or frequency [FDA].", hepatic: "Moderate–severe: 150 mg every other day (XL). Mild: consider reducing dose/frequency [FDA].", preg: "First-trimester data have not shown increased malformations [FDA].", other: "Raise doses gradually to limit seizure risk [FDA]." },
  tox: { human: "Overdoses up to 30 g: seizures (about one third), hallucinations, tachycardia, conduction disturbances, coma [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; treat seizures; ECG monitoring [NEP]." },
  contra: ["Seizure disorder [FDA].", "Current or prior bulimia or anorexia nervosa [FDA].", "Abrupt stop of alcohol, benzodiazepines, barbiturates or antiepileptics [NEP].", "MAOI within 14 days [NEP]."],
  ae: { common: ["Dry mouth, nausea, insomnia, dizziness, anxiety, tremor, sweating [NEP]."], serious: ["Suicidal thoughts in young people (boxed) [FDA]", "Seizures (dose-related) [FDA]", "Neuropsychiatric events in smoking cessation [FDA]", "Hypertension; mania; angle-closure glaucoma [FDA]"] },
  monitor: ["Mood, suicidality [FDA].", "Blood pressure [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bupropion", indication_id: "mdd", label: "Depression (XL) — 150 mg once daily, then 300 mg", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose", value_max: 300 }, interval_h: 24, divided_doses: 1, caps: { max_single: 450, max_daily: 450, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 150, unit: "mg/tab", whole: true }], rounding: "Whole XL tablets — do not split", renal: [], renal_note: "Kidney impairment: consider a lower dose and/or less frequent dosing.", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Bupropion HCl extended-release tablets (XL), ANDA211020 — label effective 2026-10-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=136f29fa-a859-4efb-8365-1382716d6f8f"]],
  dose: { tagline: "Activating antidepressant (also used to stop smoking); avoid in seizures or eating disorders.",
    boxedTitle: "Suicidal thoughts and behaviours",
    boxed: "Antidepressants increased the risk of suicidal thoughts and behavior in children, adolescents, and young adults in short-term trials. These trials did not show an increase in the risk of suicidal thoughts and behavior with antidepressant use in subjects aged 65 and older. In patients of all ages who are started on antidepressant therapy, monitor closely for worsening, and for emergence of suicidal thoughts and behaviors. Advise families and caregivers of the need for close observation and communication with the prescriber.",
    adult: [
      { ind: "Depression (XL)", text: "150 mg once daily in the morning; after 4 days 300 mg once daily. Maximum 450 mg a day.", calc: ["mdd"] },
      { ind: "Moderate–severe liver impairment", text: "150 mg every other day." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BUROSUMAB (FDA CRYSVITA, Kyowa Kirin, BLA761068, eff. 2026-04-22) ---------- */
FDB_M("burosumab", {
  inn: "Burosumab", atc: "M05BX05", cls: "FGF23-blocking monoclonal antibody",
  linked: [["X-linked hypophosphataemia (XLH)", "Disease-specific therapy [FDA]", ""], ["Tumour-induced osteomalacia (unresectable)", "Therapy [FDA]", ""]],
  forms: ["Injection 10, 20 and 30 mg/mL single-dose vials, SC [FDA]."],
  moa: "Inhibits FGF23, restoring renal phosphate reabsorption and active vitamin D production [FDA].",
  pk: ["Half-life about 19 days [FDA].", "Never with oral phosphate or active vitamin D analogues (hyperphosphataemia) [FDA]."],
  ind: { adult: ["XLH; tumour-induced osteomalacia [FDA]."], paed: ["XLH from 6 months; TIO from 2 years [FDA]."] },
  adult: [["XLH", "1 mg/kg rounded to the nearest 10 mg (maximum 90 mg) SC every 4 weeks; may increase to the same dose every 2 weeks [FDA]."], ["TIO", "Start 0.5 mg/kg every 4 weeks; up to 2 mg/kg (maximum 180 mg) every 2 weeks [FDA]."], ["Before starting", "Stop oral phosphate and active vitamin D for 1 week [FDA]."]],
  paed: { tiers: ["XLH, under 10 kg: 1 mg/kg (nearest 1 mg) every 2 weeks [FDA].", "XLH, 10 kg and over: 0.8 mg/kg (nearest 10 mg; minimum 10, maximum 90 mg) every 2 weeks; may increase to about 2 mg/kg (maximum 90 mg) [FDA].", "TIO, 2 years and over: 0.4 mg/kg (nearest 10 mg) every 2 weeks, up to 2 mg/kg (maximum 180 mg) [FDA]."], transition: "Adult schedule from 18 years [FDA].", calcNote: "mg/kg, label rounding steps." },
  adj: { renal: "Contraindicated in severe kidney impairment or end-stage disease [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "No human data; monkey effects only at 15× exposure [FDA].", other: "Hold if fasting phosphate is above normal [FDA]." },
  tox: { human: "No overdose reports [FDA].", animal: "Ectopic mineralisation at supra-physiological phosphate in rabbits and monkeys [FDA].", manage: "Supportive care [NEP]." },
  contra: ["With oral phosphate and/or active vitamin D analogues [FDA].", "Serum phosphorus within or above the normal range for age [FDA].", "Severe kidney impairment or end-stage kidney disease [FDA]."],
  ae: { common: ["Children: fever, injection-site reactions, cough, vomiting, limb pain, headache [NEP]."], serious: ["Hypersensitivity [FDA]", "Hyperphosphataemia and nephrocalcinosis [FDA]", "Hypercalcaemia [FDA]", "Restless legs; injection-site reactions [NEP]"] },
  monitor: ["Fasting serum phosphorus every 2 weeks for the first month, then periodically [NEP].", "Calcium and PTH in high-risk patients [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "burosumab", indication_id: "child10", label: "Child XLH, 10 kg+ — 0.8 mg/kg every 2 weeks (nearest 10 mg, 10–90 mg)", route: "SC", population: { min_age_months: 6, max_age_months: 216, min_weight_kg: 10, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.8, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 90, unit: "mg" }, weight_basis: "actual", formulations: [], round_to: 10, rounding: "Nearest 10 mg [FDA]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "burosumab", indication_id: "child_small", label: "Child XLH, under 10 kg — 1 mg/kg every 2 weeks (nearest 1 mg)", route: "SC", population: { min_age_months: 6, max_age_months: 216, min_weight_kg: null, max_weight_kg: 10 }, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], round_to: 1, rounding: "Nearest 1 mg [FDA]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "burosumab", indication_id: "adult", label: "Adult XLH — 1 mg/kg every 4 weeks (nearest 10 mg, max 90 mg)", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: { max_single: 90, unit: "mg" }, weight_basis: "actual", formulations: [], round_to: 10, rounding: "Nearest 10 mg [FDA]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CRYSVITA (burosumab-twza) injection — Kyowa Kirin, label effective 2026-04-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=102f96a0-6e3a-4fc1-b204-34d604683af6"]],
  dose: { tagline: "Antibody injection for X-linked hypophosphataemia and tumour-induced osteomalacia.",
    adult: [
      { ind: "XLH", text: "1 mg/kg (nearest 10 mg, maximum 90 mg) SC every 4 weeks.", calc: ["adult"] },
      { ind: "Tumour-induced osteomalacia", text: "0.5 mg/kg every 4 weeks, up to 2 mg/kg (maximum 180 mg) every 2 weeks." }
    ],
    child: [
      { ind: "XLH, 10 kg and over", text: "0.8 mg/kg (nearest 10 mg; 10–90 mg) every 2 weeks; up to about 2 mg/kg.", calc: ["child10"] },
      { ind: "XLH, under 10 kg (6 months+)", text: "1 mg/kg (nearest 1 mg) every 2 weeks.", calc: ["child_small"] }
    ] }
});

/* ---------- BUSPIRONE (FDA tablets, ANDA204582) ---------- */
FDB_M("buspirone", {
  inn: "Buspirone", atc: "N05BE01", cls: "Azapirone anxiolytic (5-HT1A partial agonist)",
  linked: [["Generalised anxiety disorder", "Non-benzodiazepine anxiolytic [FDA]", ""]],
  forms: ["Tablets 5, 7.5, 10, 15 and 30 mg [NEP]."],
  moa: "Partial agonist at 5-HT1A receptors; not sedating like benzodiazepines; no cross-tolerance [NEP].",
  pk: ["Take consistently with or without food (food increases bioavailability) [FDA].", "Higher levels and longer half-life in liver or kidney impairment [FDA].", "CYP3A4 inhibitors (e.g. ketoconazole, grapefruit juice in large amounts) raise levels [NEP]."],
  ind: { adult: ["Anxiety disorders (GAD) or short-term relief of anxiety [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Anxiety", "Start 7.5 mg twice daily (15 mg/day); increase by 5 mg/day every 2–3 days as needed. Usual 20–30 mg/day in divided doses; maximum 60 mg/day [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Increased levels in kidney impairment — use with caution [FDA].", hepatic: "Increased levels in liver impairment — use with caution [FDA].", preg: "Not established in primary source. [NEP]", other: "Does not prevent benzodiazepine withdrawal — taper those separately [NEP]." },
  tox: { human: "Up to 375 mg/day: nausea, vomiting, dizziness, drowsiness, miosis, gastric distress; no deaths from buspirone alone [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic and supportive care [FDA]." },
  contra: ["Hypersensitivity to buspirone [FDA].", "MAOI for depression now or within 14 days [FDA]."],
  ae: { common: ["Dizziness, nausea, headache, nervousness, light-headedness, excitement [FDA]."], serious: ["Serotonin syndrome with other serotonergic drugs [FDA]", "Raised BP with MAOIs [FDA]"] },
  monitor: ["Response after 1–2 weeks [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "buspirone", indication_id: "gad", label: "Anxiety — start 7.5 mg twice daily (max 60 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 7.5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 30, max_daily: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 15, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Buspirone HCl tablets USP (ANDA204582) — label effective 2026-06-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1d883a13-4877-c6c7-e063-6294a90a5137"]],
  dose: { tagline: "Non-sedating, non-habit-forming anxiolytic for generalised anxiety.",
    adult: [{ ind: "Generalised anxiety", text: "7.5 mg twice daily; increase by 5 mg a day every 2–3 days. Usual 20–30 mg a day; maximum 60 mg a day.", calc: ["gad"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BUSULFAN (FDA MYLERAN tablets, NDA009386, eff. 2025-01-08) ---------- */
FDB_M("busulfan", {
  inn: "Busulfan", atc: "L01AB01", cls: "Alkylating agent (alkyl sulfonate)",
  linked: [["Chronic myeloid leukaemia — palliative", "Oral (historical) [FDA]", ""], ["Conditioning before stem-cell transplant", "IV busulfan (separate product) [NEP]", ""]],
  forms: ["Tablets 2 mg (MYLERAN) [NEP].", "IV injection 6 mg/mL (BUSULFEX) for transplant conditioning [NEP]."],
  moa: "Bifunctional alkylating agent — cross-links DNA [NEP].",
  pk: ["Half-life about 2.5 h [FDA]."],
  ind: { adult: ["Palliative treatment of CML [FDA]."], paed: ["Same weight-based dose as adults [FDA]."] },
  adult: [["CML remission induction", "4–8 mg total daily; about 60 mcg/kg or 1.8 mg/m² daily. Reserve doses above 4 mg/day for the most compelling symptoms [FDA]."]],
  paed: { tiers: ["About 60 mcg/kg or 1.8 mg/m² daily, as adults [FDA]."], transition: "Same mg/kg [FDA].", calcNote: "mcg/kg/day." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Stop at the first sign of unusual marrow depression [FDA]." },
  tox: { human: "Bone marrow depression and pancytopenia; mucositis, nausea, vomiting, diarrhoea [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote; emesis/lavage and charcoal if recent; supportive care; dialysis may be considered [FDA]." },
  contra: ["CML diagnosis not firmly established [FDA].", "Previous hypersensitivity to busulfan [FDA]."],
  ae: { common: ["Myelosuppression, hyperpigmentation, amenorrhoea [NEP]."], serious: ["Severe bone-marrow hypoplasia (boxed) [FDA]", "Secondary leukaemia (leukaemogenesis) [FDA]", "Pulmonary fibrosis ('busulfan lung') [NEP]", "Hepatic veno-occlusive disease / nodular regenerative hyperplasia with thioguanine [FDA]"] },
  monitor: ["Blood counts at least weekly during induction [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "busulfan", indication_id: "cml", label: "CML induction — 60 mcg/kg once daily", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 60, unit: "mcg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 8000, unit: "mcg" }, weight_basis: "actual", formulations: [], rounding: "To 0.5 tablet (2 mg) [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "MYLERAN (busulfan) tablets — Waylis Therapeutics, label effective 2025-01-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2da33e5b-dcfb-4cdf-b163-50398e42f41c"]],
  dose: { tagline: "Oral alkylating agent for palliative CML (IV form used in transplant conditioning).",
    boxedTitle: "Severe bone marrow hypoplasia; leukaemogenesis",
    boxed: "MYLERAN is a potent drug. It should not be used unless a diagnosis of chronic myelogenous leukemia has been adequately established and the responsible physician is knowledgeable in assessing response to chemotherapy. MYLERAN can induce severe bone marrow hypoplasia. Reduce or discontinue the dosage immediately at the first sign of any unusual depression of bone marrow function as reflected by an abnormal decrease in any of the formed elements of the blood. A bone marrow examination should be performed if the bone marrow status is uncertain. SEE WARNINGS FOR INFORMATION REGARDING BUSULFAN-INDUCED LEUKEMOGENESIS IN HUMANS.",
    adult: [{ ind: "CML (palliative)", text: "4–8 mg a day (about 60 mcg/kg or 1.8 mg/m²); keep to 4 mg a day unless symptoms are compelling.", calc: ["cml"] }],
    child: [{ ind: "Children", text: "About 60 mcg/kg or 1.8 mg/m² a day.", calc: ["cml"] }] }
});

/* ---------- BUTENAFINE (FDA LOTRIMIN ULTRA 1% cream, NDA021307, eff. 2025-12-05) ---------- */
FDB_M("butenafine", {
  inn: "Butenafine", atc: "D01AE23", cls: "Benzylamine antifungal (topical)",
  linked: [["Tinea cruris, tinea pedis, tinea corporis", "Topical antifungal [FDA]", ""]],
  forms: ["Cream 1% (OTC) [FDA]."],
  moa: "Inhibits squalene epoxidase, blocking fungal ergosterol synthesis [NEP].",
  pk: ["Topical; minimal absorption [NEP]."],
  ind: { adult: ["Jock itch (tinea cruris); also athlete's foot and ringworm [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Jock itch (12 years+)", "Wash and dry the skin; apply once daily for 2 weeks [FDA]."], ["Athlete's foot (between the toes)", "Twice daily for 1 week or once daily for 4 weeks [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["12 years and over: as adults [FDA].", "Under 12 years: ask a doctor [FDA]."], transition: "—", calcNote: "Topical — no weight calculation." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Not for nails, scalp or vaginal yeast infection [FDA]." },
  tox: { human: "If swallowed, get medical help [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity [NEP]."],
  ae: { common: ["Burning, stinging, irritation [NEP]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Response by 2–4 weeks [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "LOTRIMIN ULTRA (butenafine HCl 1%) jock itch cream — Bayer, Drug Facts, effective 2025-12-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9dfa08fb-0913-4326-b1eb-1425df6a2c82"]],
  dose: { tagline: "Once-daily antifungal cream for jock itch and other tinea.",
    adult: [{ ind: "Jock itch", text: "Apply once a day to clean, dry skin for 2 weeks." }],
    child: [{ ind: "Under 12 years", text: "Ask a doctor." }] }
});

/* ---------- BUTOCONAZOLE (FDA GYNAZOLE-1 2% vaginal cream, ANDA200923, eff. 2023-06-01) ---------- */
FDB_M("butoconazole", {
  inn: "Butoconazole", atc: "G01AF15", cls: "Imidazole antifungal (vaginal)",
  linked: [["Vulvovaginal candidiasis", "Single-dose vaginal cream [FDA]", ""]],
  forms: ["Vaginal cream 2% in a prefilled applicator (about 5 g = 100 mg) [FDA]."],
  moa: "Inhibits fungal ergosterol synthesis [NEP].",
  pk: ["Small vaginal absorption [NEP]."],
  ind: { adult: ["Vulvovaginal candidiasis confirmed by KOH smear or culture, in non-pregnant women [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Vaginal candidiasis", "One applicatorful (about 5 g, 100 mg) intravaginally, once [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Single vaginal dose." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Safety in pregnancy not established [FDA].", other: "Contains mineral oil — weakens condoms and diaphragms for 72 h [FDA]. Recurrent infections may be an early sign of HIV [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable. [NEP]" },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Vulvovaginal burning, itching, soreness, swelling; pelvic pain or cramping [FDA]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Symptom resolution [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "GYNAZOLE-1 (butoconazole nitrate vaginal cream 2%) — Padagis, label effective 2023-06-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=125d8ede-db38-4eb9-a6be-19208687f36a"]],
  dose: { tagline: "Single-dose vaginal antifungal cream for thrush.",
    adult: [{ ind: "Vaginal candidiasis (non-pregnant)", text: "One applicatorful (about 5 g) intravaginally, once." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BUTORPHANOL (FDA injection, Hospira, ANDA074626, eff. 2026-11-16) ---------- */
FDB_M("butorphanol", {
  inn: "Butorphanol", atc: "N02AF01", cls: "Mixed agonist–antagonist opioid (kappa agonist, partial mu agonist)",
  risk: "High-alert — opioids are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Moderate–severe pain needing an opioid", "Injection [FDA]", ""], ["Labour analgesia (early labour)", "IV/IM [FDA]", ""], ["Pre-anaesthetic medication; balanced anaesthesia", "IV/IM [FDA]", ""]],
  forms: ["Injection 1 mg/mL and 2 mg/mL [NEP].", "Nasal spray 10 mg/mL (separate product) [NEP]."],
  moa: "Full kappa-opioid agonist and partial mu agonist [FDA].",
  pk: ["Half-life about 4.5 h; metabolite about 18 h; doubles when CrCl under 30 [FDA].", "Oral bioavailability only 5–17% — given by injection or nasal spray [FDA].", "With benzodiazepines/CNS depressants: profound sedation, respiratory depression, death [FDA]."],
  ind: { adult: ["Pain severe enough for an opioid when alternatives are inadequate; pre-op; balanced anaesthesia; labour [FDA]."], paed: ["Not recommended under 18 years [FDA]."] },
  adult: [["Pain — IV", "1 mg every 3–4 h as needed (range 0.5–2 mg) [FDA]."], ["Pain — IM", "2 mg every 3–4 h as needed (range 1–4 mg); single doses above 4 mg not studied [FDA]."], ["Labour (term, early labour)", "1–2 mg IV or IM; may repeat after 4 h. Use other analgesia if delivery expected within 4 h [FDA]."], ["Pre-operative", "2 mg IM 60–90 min before surgery [FDA]."], ["Elderly, liver or kidney impairment", "1 mg, then 1 mg after 90–120 min if needed; repeat doses generally no closer than 6 h [FDA]."]],
  paed: { tiers: ["Not recommended under 18 years [FDA]."], transition: "Adults only [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Initial 1 mg, repeat in 90–120 min; then no more often than every 6 h [FDA].", hepatic: "As for kidney impairment [FDA].", preg: "Prolonged use: neonatal opioid withdrawal syndrome [FDA].", other: "Can precipitate withdrawal in opioid-dependent patients [NEP]." },
  tox: { human: "Respiratory depression, somnolence to coma, miosis, bradycardia, hypotension, death [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Airway and ventilation; naloxone [FDA]." },
  contra: ["Significant respiratory depression [FDA].", "Acute or severe asthma without monitoring/resuscitation [FDA].", "GI obstruction including paralytic ileus [FDA].", "Hypersensitivity to butorphanol [FDA]."],
  ae: { common: ["Somnolence, dizziness, nausea, vomiting, sweating [NEP]."], serious: ["Respiratory depression (boxed) [FDA]", "Addiction, abuse, misuse (boxed) [FDA]", "Neonatal opioid withdrawal (boxed) [FDA]", "Adrenal insufficiency; severe hypotension [FDA]"] },
  monitor: ["Respiration and sedation, especially after first doses [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "butorphanol", indication_id: "iv", label: "Pain IV — 1 mg every 3–4 h (0.5–2 mg)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 4, divided_doses: 6, caps: { max_single: 2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "extend_interval", factor: 6 }], renal_note: "Kidney or liver impairment: 1 mg, then 1 mg after 90–120 min if needed; repeats generally no closer than every 6 h.", flags: [], sources: ["FDA"] },
    { drug: "butorphanol", indication_id: "im", label: "Pain IM — 2 mg every 3–4 h (1–4 mg)", route: "IM", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 4, divided_doses: 6, caps: { max_single: 4, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], renal_note: "Elderly, kidney or liver impairment: start 1 mg (repeat after 90–120 min if needed); repeats generally no closer than every 6 h.", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Butorphanol tartrate injection — Hospira (ANDA074626), label effective 2026-11-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9822ca3f-aee2-46e5-8a96-495400e65d10"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Injectable mixed agonist–antagonist opioid for pain, labour and pre-anaesthesia.",
    boxedTitle: "Addiction, respiratory depression, neonatal withdrawal, benzodiazepine risk",
    boxed: "Addiction, Abuse, and Misuse: Because the use of Butorphanol Tartrate Injection exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient’s risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Life-Threatening Respiratory Depression: Serious, life-threatening, or fatal respiratory depression may occur with use of Butorphanol Tartrate Injection, especially during initiation or following a dosage increase. To reduce the risk of respiratory depression, proper dosing and titration of Butorphanol Tartrate Injection are essential. Risks From Concomitant Use With Benzodiazepines Or Other CNS Depressants: Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of Butorphanol Tartrate Injection and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate. Neonatal Opioid Withdrawal Syndrome (NOWS): Advise pregnant women using opioids for an extended period of time of the risk of Neonatal Opioid Withdrawal Syndrome, which may be life-threatening if not recognized and treated. Ensure that management by neonatology experts will be available at delivery.",
    adult: [
      { ind: "Pain — IV", text: "1 mg every 3–4 hours as needed (0.5–2 mg).", calc: ["iv"] },
      { ind: "Pain — IM", text: "2 mg every 3–4 hours as needed (1–4 mg).", calc: ["im"] },
      { ind: "Early labour (term)", text: "1–2 mg IV or IM; may repeat after 4 hours." },
      { ind: "Elderly, liver or kidney impairment", text: "1 mg, then 1 mg after 90–120 minutes if needed; repeats usually no more often than every 6 hours." }
    ],
    child: [{ ind: "Under 18 years", text: "Not recommended." }] }
});

/* Brands for batch B-2 — India (PharmEasy) and Bangladesh (MedEx), built 24 Nov 2026 with _work/tools/fdb-brands.js. */
(function () {
  const B = {"brentuximab-vedotin":{"BT":"Bhutan supplies by generic name.","IN":[["Adcetris","Takeda Pharmaceuticals","Adcetris 50Mg Dry Vial Of 1 Powder For Infusion"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/adcetris-50-mg-injection-1-no-s-4122621"]},"brexpiprazole":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Brexi","Eskayef Pharmaceuticals Ltd","0.5 mg"],["Brexpa","Renata PLC","1 mg"]],"src":["https://medex.com.bd/brands/28399/brexi-05-mg-tablet","https://medex.com.bd/brands/33437/brexpa-1-mg-tablet"]},"brigatinib":{"BT":"Bhutan supplies by generic name.","IN":[["Alunbrig","Takeda Pharmaceuticals","Alunbrig 180Mg Bottle Of 28 Tablets"]],"BD":[["Trepmac","Genvio Pharma Ltd","90 mg"],["Biganib","Drug International Ltd","90 mg"],["Brigacent","Incepta Pharmaceuticals Ltd","180 mg"]],"src":["https://pharmeasy.in/online-medicine-order/alunbrig-180mg-bottle-of-28-tablets-4798238","https://medex.com.bd/brands/29331/trepmac-90-mg-tablet","https://medex.com.bd/brands/33122/biganib-90-mg-tablet","https://medex.com.bd/brands/33124/brigacent-180-mg-tablet"]},"brimonidine":{"BT":"Bhutan supplies by generic name.","IN":[["Bidin","Ajanta Pharma Limited","Bidin Ls Bottle Of 5Ml Eye Drops"],["Alphagan","Allergan India Pvt Ltd","Alphagan Z Bottle Of 5Ml Eye Drops"],["Brimodin","Cipla Limited","Brimodin Bottle Of 5Ml Eye Drops"]],"BD":[["Eyelia","Healthcare Pharmaceuticals Ltd","0.025%"],["Bricoma OSD","Opsonin Pharma Ltd","0.2%"],["Luminor","Popular Pharmaceuticals PLC","0.025%"]],"src":["https://pharmeasy.in/online-medicine-order/bidin-ls-eye-drops-1423","https://pharmeasy.in/online-medicine-order/alphagan-z-eye-drops-5ml-33871","https://pharmeasy.in/online-medicine-order/brimodin-eye-drops-5ml-38215","https://medex.com.bd/brands/32723/eyelia-0025-eye-drop","https://medex.com.bd/brands/32965/bricoma-osd-02-eye-drop","https://medex.com.bd/brands/28455/luminor-0025-eye-drop"]},"brinzolamide":{"BT":"Bhutan supplies by generic name.","IN":[["Brinzox","Ajanta Pharma Limited","Brinzox Bottle Of 5Ml Eye Drops"],["Azopt","J B Chemicals And Pharmaceuticals","Azopt Bottle Of 5Ml Eye Drops"],["Brintod","Entod Pharmaceuticals Pvt Ltd","Brintod Bottle Of 5Ml Eye Drops"]],"BD":[["Azomid","Beximco Pharmaceuticals PLC","1%"],["Genazopt","General Pharmaceuticals Ltd","1%"],["Azobrin","Healthcare Pharmaceuticals Ltd","1%"]],"src":["https://pharmeasy.in/online-medicine-order/brinzox-eye-drops-1438","https://pharmeasy.in/online-medicine-order/azopt-eye-drops-2013","https://pharmeasy.in/online-medicine-order/brintod-eye-drop-5-ml-3731342","https://medex.com.bd/brands/30673/azomid-1-ophthalmic-suspension","https://medex.com.bd/brands/26560/genazopt-1-ophthalmic-suspension","https://medex.com.bd/brands/32647/azobrin-1-ophthalmic-suspension"]},"brivaracetam":{"BT":"Bhutan supplies by generic name.","IN":[["Brevipil","Sun Pharma","Brevipil 50Mg Strip Of 10 Tablets"],["Brivetam","Leeford Healthcare Ltd","Brivetam 100Mg Strip Of 10 Tablets"],["Brivepsy","Cipla Limited","Brivepsy 50Mg Strip Of 10 Tablets"]],"BD":[["Bivara","Advanced Chemical Industries PLC","25 mg"],["Brevipil","Sun Pharmaceutical (Bangladesh) Ltd","25 mg"],["Epicure","Incepta Pharmaceuticals Ltd","50 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/brevipil-50mg-strip-of-10-tablets-3110543","https://pharmeasy.in/online-medicine-order/brivetam-100mg-strip-of-10-tablets-4265442","https://pharmeasy.in/online-medicine-order/brivepsy-50mg-strip-of-10-tablets-4051970","https://medex.com.bd/brands/33052/bivara-25-mg-tablet","https://medex.com.bd/brands/38377/brevipil-25-mg-tablet","https://medex.com.bd/brands/34924/epicure-50-mg-oral-solution"]},"brolucizumab":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["VSIQQ","Nevian Lifescience PLC","6 mg/0.05 ml"]],"src":["https://medex.com.bd/brands/35019/vsiqq-6-mg-iv-infusion"]},"bromfenac":{"BT":"Bhutan supplies by generic name.","IN":[["Megabrom","Sun Pharma","Megabrom 0.09% Bottle Of 5Ml Eye Drops"],["Unibrom","Ajanta Pharma Limited","Unibrom Bak Free Sterile Bottle Of 5Ml Eye Drops"],["Bromvue","Ipca Laboratories","Bromvue Bottle Of 5Ml Eye Drops"]],"BD":[["Optifen","Globe Pharmaceuticals Ltd","0.09%"],["Bromnac","Opsonin Pharma Ltd","0.07%"],["BFC","Nipa Pharmaceuticals Ltd","0.09%"]],"src":["https://pharmeasy.in/online-medicine-order/megabrom-0-09-eye-drops-5ml-25517","https://pharmeasy.in/online-medicine-order/unibrom-bak-free-sterile-eye-drop-5-ml-4002498","https://pharmeasy.in/online-medicine-order/bromvue-eye-drops-5ml-4419","https://medex.com.bd/brands/18352/optifen-009-eye-drop","https://medex.com.bd/brands/39662/bromnac-007-eye-drop","https://medex.com.bd/brands/38724/bfc-009-eye-drop"]},"bromocriptine":{"BT":"Bhutan supplies by generic name.","IN":[["Sicriptin","Serum Institute Of India Private Limited","Sicriptin 2.5Mg Strip Of 10 Tablets"]],"BD":[["Bromocriptine","City Overseas Ltd","2.5 mg"],["Bromergon","Nevian Lifescience PLC","2.5 mg"],["Bromodel","Opsonin Pharma Ltd","2.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/sicriptin-2-5mg-tablet-24336","https://medex.com.bd/brands/5109/bromocriptine-25-mg-tablet","https://medex.com.bd/brands/5108/bromergon-25-mg-tablet","https://medex.com.bd/brands/5110/bromodel-25-mg-tablet"]},"budesonide":{"BT":"Bhutan supplies by generic name.","IN":[["Budure","Avighna Medicare Pvt Ltd","Budure 0.5Mg 2Ml Packet Of 5 Respules"],["Budecort","Cipla Limited","Budecort 0.5Mg 2Ml Packet Of 5 Respules"],["Budez","Sun Pharma","Budez Cr 3Mg Strip Of 10 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/budure-0-5mg-packet-of-5-2ml-respules-2985303","https://pharmeasy.in/online-medicine-order/budecort-0-5mg-packet-of-2ml-1-5-respules-38421","https://pharmeasy.in/online-medicine-order/budez-3mg-cr-cap-38437"]},"bumetanide":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Bumecard","Incepta Pharmaceuticals Ltd","1 mg"],["Conart","Advanced Chemical Industries PLC","1 mg"],["Urinide","Navana Pharmaceuticals Ltd","1 mg"]],"src":["https://medex.com.bd/brands/2830/bumecard-1-mg-tablet","https://medex.com.bd/brands/2833/conart-1-mg-tablet","https://medex.com.bd/brands/2834/urinide-1-mg-tablet"]},"bupivacaine":{"BT":"Bhutan supplies by generic name.","IN":[["Marcain","Abbott Healthcare Pvt Ltd","Marcain 0.5% Injection"]],"BD":[["Buva","Beacon Pharmaceuticals PLC","0.5%"],["Ultracaine","Jayson Pharmaceutical Ltd","0.25%"],["Bupi","Popular Pharmaceuticals PLC","0.5%"]],"src":["https://pharmeasy.in/online-medicine-order/marcain-0-5-inj-53462","https://medex.com.bd/brands/39508/buva-05-injection","https://medex.com.bd/brands/30682/ultracaine-025-injection","https://medex.com.bd/brands/15517/bupi-05-injection"]},"bupropion":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Depnox SR","Jayson Pharmaceutical Ltd","150 mg"],["Zybex SR","Beximco Pharmaceuticals PLC","150 mg"],["Bupinex XR","Everest Pharmaceuticals Ltd","150 mg"]],"src":["https://medex.com.bd/brands/4554/depnox-sr-150-mg-sr-tablet","https://medex.com.bd/brands/30683/zybex-sr-150-mg-sr-tablet","https://medex.com.bd/brands/40007/bupinex-xr-150-mg-xr-tablet"]},"busulfan":{"BT":"Bhutan supplies by generic name.","IN":[["Busulmax","Getwell Life Science Pvt Ltd","Busulmax 60Mg Injection"],["Busefan","Halsted Pharma","Busefan 60Mg Dry Vial Of 1 Powder For Injection"],["Bufatas","Intas Pharmaceuticals Ltd","Bufatas 60 Mg Injection 10 Ml"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/busulmax-60mg-inj-165604","https://pharmeasy.in/online-medicine-order/busefan-60mg-dry-vial-of-1-powder-for-injection-4819941","https://pharmeasy.in/online-medicine-order/bufatas-60-mg-injection-10-ml-205301"]},"butenafine":{"BT":"Bhutan supplies by generic name.","IN":[["Fintop","Glenmark Pharmaceuticals","Fintop 1% Tube Of 15Gm Cream"]],"BD":[["Fintop","Drug International Ltd","1%"],["Tenafin","Beximco Pharmaceuticals PLC","1%"]],"src":["https://pharmeasy.in/online-medicine-order/fintop-1-cream-15gm-47219","https://medex.com.bd/brands/12984/fintop-1-cream","https://medex.com.bd/brands/30688/tenafin-1-cream"]}};
  Object.entries(B).forEach(([id, b]) => { if (window.FDB[id]) window.FDB[id].brands = b; });
})();
