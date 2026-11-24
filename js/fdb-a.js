/* Clinical Disease Guide — Drug monograph database, block A (TEST SET: 4 drugs for format review, 23 Nov 2026).
   Built with the "Bhutan Clinical Formulary — Monograph Build Prompt v2" (template, source hierarchy, tags, calculator laws).
   Every value carries a source tag: [FDA] [WHO-EML] [WHO-GL] [NLM] [BT-STG] [BT-NEML] [NEP] [UNVERIFIED-KNOWLEDGE].
   Sources read live this run: openFDA/DailyMed labels (set ids below), PubChem toxicity, Bhutan NEML 2025 and STG 2024 text.
   Not yet checked live this run: WHO EML 2025 listing and WHO guidelines → tagged [UNVERIFIED-KNOWLEDGE].
   Calculator block = the prompt's Section 6 JSON, plus three documented extensions: "label", "bands" (for basis "band"),
   "dose.value_max" (a dose range), "infusion.duration_h" and "infusion.diluent_bands". */
window.FDB = window.FDB || {};
Object.assign(window.FDB, {
  abacavir: {
    inn: "Abacavir", letter: "A", atc: "J05AF06", cls: "Antiretroviral — nucleoside reverse transcriptase inhibitor (NRTI)", risk: "Standard",
    linked: [["HIV — adults", "Alternative first-line backbone with 3TC (+ DTG) [BT-STG]", "hiv-adult"], ["HIV — children", "Preferred paediatric NRTI with 3TC (+ DTG) [BT-STG]", "hiv-child"]],
    forms: [
      "Tablet 300 mg (scored), PO [FDA]; oral solution 20 mg/mL [FDA].",
      "Tablet may be halved along the score for paediatric weight bands [FDA] — why: Table 1 doses use ½ tablets.",
      "Take with or without food [FDA]."
    ],
    moa: "Converted intracellularly to carbovir triphosphate (dGTP analogue) → competes with dGTP and terminates the viral DNA chain → inhibits HIV-1 reverse transcriptase [FDA].",
    pk: [
      "Bioavailability (tablet) 83%; t½ 1.54 ± 0.63 h; clearance 0.80 L/h/kg [FDA].",
      "Metabolised by alcohol dehydrogenase and glucuronyl transferase, not CYP450; renal excretion of unchanged drug is minor [FDA].",
      "Ethanol: abacavir AUC ↑41%, t½ ↑26% — why: shared alcohol dehydrogenase pathway [FDA].",
      "Methadone: oral methadone clearance ↑22%; a small number of patients may need a higher methadone dose [FDA].",
      "Riociguat: riociguat AUC ↑ with abacavir/dolutegravir/lamivudine; riociguat dose may need reduction [FDA]."
    ],
    ind: {
      adult: ["HIV-1 infection, in combination with other antiretrovirals [FDA] — why: NRTI backbone; renal-sparing alternative to tenofovir [BT-STG]."],
      paed: ["HIV-1 infection from 3 months of age (FDA label) [FDA]; Bhutan and WHO use weight bands from 3 kg [BT-STG] — why: ABC + 3TC is the preferred paediatric NRTI backbone."]
    },
    adult: [
      ["HIV-1 infection", "600 mg/day PO as 300 mg every 12 h or 600 mg once daily [FDA]. Max 600 mg/day [FDA]. Why: equivalent daily exposure; once daily aids adherence."],
      ["Mild hepatic impairment (Child-Pugh A)", "200 mg every 12 h using oral solution 10 mL [FDA]. Why: AUC ↑89% and t½ ↑58% in mild impairment."]
    ],
    paed: {
      tiers: [
        "≥3 months, oral solution: 8 mg/kg every 12 h or 16 mg/kg once daily; max 600 mg/day [FDA].",
        "≥14 kg and able to swallow tablets (300 mg scored): 14–<20 kg 150 mg every 12 h (or 300 mg once daily); ≥20–<25 kg 150 mg AM + 300 mg PM (or 450 mg once daily); ≥25 kg 300 mg every 12 h (or 600 mg once daily) [FDA].",
        "Bhutan weight bands (every 12 h): 3–<6 kg 60 mg; 6–<10 kg 80 mg; 10–<14 kg 120 mg; 14–<20 kg 150 mg; 20–<25 kg 150 mg AM + 300 mg PM; ≥25 kg 300 mg [BT-STG]. ⚠ DISCREPANCY: FDA starts at 3 months (age); Bhutan bands start at 3 kg and give fixed mg per band — both cap at 600 mg/day."
      ],
      transition: "≥25 kg → adult dose 300 mg every 12 h / 600 mg once daily [FDA][BT-STG].",
      calcNote: "Weight-based solution dose capped at 300 mg per 12-h dose (600 mg/day). Tablet bands only for ≥14 kg. Below 3 months: no FDA dose — calculator refuses."
    },
    adj: {
      icu: "Not applicable (no sedative effect; oral only).",
      renal: "No dose adjustment; PK not studied in renal impairment, renal excretion of unchanged drug minor [FDA]. Bhutan guideline: no adjustment, useful when tenofovir is nephrotoxic [BT-STG]. HD/PD: removal not known [FDA].",
      hepatic: "Child-Pugh A: 200 mg every 12 h (oral solution) [FDA]. Child-Pugh B or C: contraindicated [FDA] — why: safety and PK not established.",
      preg: "Pregnancy: APR >1,300 first-trimester exposures, birth-defect prevalence 3.2% vs background 2.7% — no increased risk shown [FDA]. Lactation: FDA/CDC advise not to breastfeed (HIV transmission) [FDA]; ⚠ DISCREPANCY: WHO supports breastfeeding on suppressive ART in settings like Bhutan [UNVERIFIED-KNOWLEDGE].",
      immuno: "Immune reconstitution syndrome may occur after starting ART [FDA].",
      metabolic: "Lactic acidosis and severe hepatomegaly with steatosis reported with nucleoside analogues; suspend if suspected [FDA]. Oral solution excipients: check the product insert [NEP].",
      other: "Myocardial infarction: observational studies associate abacavir with MI risk; consider in patients with high cardiovascular risk [FDA]."
    },
    tox: {
      human: "Toxic/lethal human dose: Not established in primary source. [NEP]",
      animal: "Animal LD50: Not established in primary source. [NEP] (PubChem has no non-human toxicity values for abacavir [NLM].)",
      manage: "No specific antidote; monitor and give standard supportive care [FDA]. Removal by haemodialysis or peritoneal dialysis is not known [FDA]."
    },
    contra: [
      "HLA-B*5701 positive [FDA] — why: much higher risk of fatal multi-organ hypersensitivity.",
      "Prior hypersensitivity to abacavir [FDA] — why: rechallenge can kill within hours.",
      "Moderate or severe hepatic impairment [FDA].",
      "BOXED WARNING: serious, sometimes fatal hypersensitivity; screen HLA-B*5701 before starting or restarting; stop immediately if suspected; NEVER restart any abacavir product after a reaction [FDA]."
    ],
    ae: {
      common: ["Nausea, headache, malaise/fatigue, diarrhoea, fever, rash [BT-STG] (FDA lists in Section 6)."],
      serious: ["Hypersensitivity reaction (multi-organ) [FDA]", "Lactic acidosis/hepatic steatosis [FDA]", "Myocardial infarction [FDA]", "SJS/TEN (post-marketing) [FDA]", "Immune reconstitution syndrome [FDA]"]
    },
    monitor: [
      "HLA-B*5701 before the first dose — why: contraindicated if positive [FDA].",
      "Symptoms of hypersensitivity (fever, rash, GI, respiratory, constitutional) especially in the first 6 weeks — why: early withdrawal prevents death [FDA].",
      "LFTs and lactate if symptomatic — why: lactic acidosis/steatosis [FDA].",
      "Cardiovascular risk factors — why: MI association [FDA]."
    ],
    local: {
      neml: "NEML 2025: Abacavir 300 mg tablet (V) and 20 mg/mL syrup 240 mL (V) — NRH and RRH [BT-NEML]. ABC 60 + 3TC 30 + DTG 5 mg paediatric FDC added 2025, till DH [BT-NEML].",
      strengths: "300 mg tablet; 20 mg/mL syrup [BT-NEML] — same strengths as the FDA label [FDA].",
      stg: "Bhutan HIV guideline 2024: 300 mg every 12 h or 600 mg once daily; Child-Pugh A 200 mg every 12 h [BT-STG] — agrees with FDA. Paediatric weight bands differ in form (see ⚠ above)."
    },
    verify: [
      ["Adult dose", "300 mg twice daily or 600 mg once daily", "600 mg/day as 300 mg q12h or 600 mg OD [FDA]", "✅ Match", "Keep"],
      ["Child dose", "3 months–16 years: 8 mg/kg twice daily, max 300 mg twice daily", "≥3 months: 8 mg/kg q12h or 16 mg/kg OD, max 600 mg/day [FDA]", "✏️ Correct (minor)", "Add once-daily option and tablet bands"],
      ["Contraindications", "HLA-B*5701 positive; moderate or severe hepatic impairment", "Also prior abacavir hypersensitivity; boxed warning [FDA]", "⚠ Discrepancy", "Add prior hypersensitivity + boxed warning"],
      ["Renal", "No dose adjustment", "No adjustment; PK not studied [FDA]", "✅ Match", "Keep"],
      ["Hepatic", "Child-Pugh A 200 mg twice daily; moderate–severe contraindicated", "Same [FDA]", "✅ Match", "Keep"],
      ["Antidote / overdose", "—", "None specific; dialysability unknown [FDA]", "❓ Unverifiable (absent)", "Add"]
    ],
    calc: [
      { drug: "abacavir", indication_id: "hiv_adult", label: "HIV — adult / ≥25 kg (twice daily)", route: "PO",
        population: { min_age_months: null, max_age_months: null, min_weight_kg: 25, max_weight_kg: null },
        basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
        caps: { max_single: 300, max_daily: 600, adult_ceiling_single: 300, adult_ceiling_daily: 600, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 25, age_years: null },
        infusion: { conc_max: null, rate: null, unit: null },
        formulations: [{ form: "tab", strength: 300, unit: "mg/tab" }, { form: "susp", strength: 20, unit: "mg/mL" }],
        rounding: "Whole or half 300 mg tablets", renal: [], flags: [], sources: ["FDA", "BT-STG"] },
      { drug: "abacavir", indication_id: "hiv_paed_solution", label: "HIV — child ≥3 months, oral solution (twice daily)", route: "PO",
        population: { min_age_months: 3, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 8, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
        caps: { max_single: 300, max_daily: 600, adult_ceiling_single: 300, adult_ceiling_daily: 600, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 25, age_years: null },
        infusion: { conc_max: null, rate: null, unit: null },
        formulations: [{ form: "susp", strength: 20, unit: "mg/mL" }],
        rounding: "Round volume to 0.1 mL [NEP — no rounding rule in label]", renal: [], flags: [], sources: ["FDA"] },
      { drug: "abacavir", indication_id: "hiv_paed_tablet_band", label: "HIV — child ≥14 kg, 300 mg tablet bands (FDA)", route: "PO",
        population: { min_age_months: 3, max_age_months: null, min_weight_kg: 14, max_weight_kg: null },
        basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
        bands: [
          { min_weight_kg: 14, max_weight_kg: 20, text: "150 mg (½ tab) AM + 150 mg (½ tab) PM — or 300 mg once daily", daily: 300 },
          { min_weight_kg: 20, max_weight_kg: 25, text: "150 mg (½ tab) AM + 300 mg (1 tab) PM — or 450 mg once daily", daily: 450 },
          { min_weight_kg: 25, max_weight_kg: null, text: "300 mg (1 tab) every 12 h — or 600 mg once daily", daily: 600 }],
        caps: { max_single: 300, max_daily: 600, adult_ceiling_single: 300, adult_ceiling_daily: 600, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 25, age_years: null },
        infusion: { conc_max: null, rate: null, unit: null },
        formulations: [{ form: "tab", strength: 300, unit: "mg/tab" }],
        rounding: "Half-tablet steps (scored)", renal: [], flags: [], sources: ["FDA"] },
      { drug: "abacavir", indication_id: "hiv_paed_bt_band", label: "HIV — child, Bhutan HIV guideline 2024 weight bands (twice daily)", route: "PO",
        population: { min_age_months: null, max_age_months: null, min_weight_kg: 3, max_weight_kg: null },
        basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
        bands: [
          { min_weight_kg: 3, max_weight_kg: 6, text: "60 mg twice daily (3 mL of 20 mg/mL)", daily: 120 },
          { min_weight_kg: 6, max_weight_kg: 10, text: "80 mg twice daily (4 mL of 20 mg/mL)", daily: 160 },
          { min_weight_kg: 10, max_weight_kg: 14, text: "120 mg twice daily (6 mL of 20 mg/mL)", daily: 240 },
          { min_weight_kg: 14, max_weight_kg: 20, text: "150 mg twice daily (½ × 300 mg tablet)", daily: 300 },
          { min_weight_kg: 20, max_weight_kg: 25, text: "150 mg morning + 300 mg evening", daily: 450 },
          { min_weight_kg: 25, max_weight_kg: null, text: "300 mg twice daily", daily: 600 }],
        caps: { max_single: 300, max_daily: 600, adult_ceiling_single: 300, adult_ceiling_daily: 600, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 25, age_years: null },
        infusion: { conc_max: null, rate: null, unit: null },
        formulations: [{ form: "susp", strength: 20, unit: "mg/mL" }, { form: "tab", strength: 300, unit: "mg/tab" }],
        rounding: "Fixed band doses", renal: [], flags: [], sources: ["BT-STG"] }
    ],
    sources: [
      ["FDA", "ZIAGEN (abacavir) tablets and oral solution — ViiV, label effective 2023-09-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ca73b519-015a-436d-aa3c-af53492825a1"],
      ["BT-STG", "National Guidelines on Treatment and Management of HIV & AIDS 2024, Bhutan (Tables 6–7, abacavir monograph)", ""],
      ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""],
      ["NLM", "PubChem CID 441300 — no toxicity values recorded", "https://pubchem.ncbi.nlm.nih.gov/compound/441300"]
    ]
  },

  acetazolamide: {
    inn: "Acetazolamide", letter: "A", atc: "S01EC01", cls: "Carbonic anhydrase inhibitor (sulfonamide derivative)", risk: "Standard",
    linked: [
      ["Acute mountain sickness", "First-line prevention/treatment adjunct [FDA][BT-STG]", "altitude-adult"],
      ["Glaucoma (open-angle, secondary; pre-op angle closure)", "Adjunct [FDA]", ""],
      ["Epilepsy (absence and other seizures)", "Adjunct [FDA]", "epilepsy-adult"],
      ["Oedema (heart failure, drug-induced)", "Adjunct, intermittent [FDA]", ""]
    ],
    forms: [
      "Tablet 125 mg and 250 mg (250 mg scored in quarters), PO [FDA].",
      "Injection 500 mg vial (lyophilised): reconstitute with ≥5 mL sterile water; direct IV preferred; IM not recommended — why: IM is painful due to alkaline pH [FDA]. Reconstituted: 12 h room temp, 3 days 2–8 °C, no preservative [FDA]."
    ],
    moa: "Inhibits carbonic anhydrase → ↓ aqueous humour secretion (↓ IOP), bicarbonate diuresis and mild metabolic acidosis (respiratory stimulation at altitude; CNS anticonvulsant effect) [FDA].",
    pk: [
      "t½: Not established in primary source. [NEP]",
      "High-dose aspirin: anorexia, tachypnoea, lethargy, metabolic acidosis, coma and death reported — why: additive acidosis and salicylate CNS entry [FDA].",
      "Phenytoin levels ↑ (osteomalacia risk); primidone absorption ↓; lithium excretion ↑; quinidine excretion ↓; methenamine action blocked; ciclosporin levels may ↑; with sodium bicarbonate → renal calculi [FDA]."
    ],
    ind: {
      adult: ["Acute mountain sickness prevention/amelioration (rapid ascent) [FDA]; treatment of AMS [BT-STG] — why: acidosis drives ventilation.", "Glaucoma: chronic open-angle, secondary, pre-operative acute angle-closure [FDA].", "Epilepsy (absence and others), adjunct [FDA].", "Oedema: heart failure, drug-induced — adjunct [FDA]."],
      paed: ["Epilepsy: 8–30 mg/kg/day divided (label gives the dose for 'pediatric patients and adults') [FDA] — but safety and effectiveness in children not established; growth retardation with long-term use [FDA]. Other paediatric indications/doses: Not established in primary source. [NEP]"]
    },
    adult: [
      ["Acute mountain sickness (FDA)", "500–1,000 mg/day PO in divided doses; 1,000 mg for rapid ascent (rescue/military); start 24–48 h before ascent, continue 48 h at altitude or longer [FDA]. Max 1,000 mg/day."],
      ["Acute mountain sickness (Bhutan)", "250 mg PO twice daily [BT-STG] — with stopping ascent, rest, descent; dexamethasone 4 mg QID for severe symptoms."],
      ["Open-angle glaucoma", "250 mg to 1 g per 24 h; divide doses above 250 mg; >1 g/day gives no added effect [FDA]."],
      ["Secondary / pre-op angle-closure glaucoma", "250 mg every 4 h (some respond to 250 mg twice daily short term); acute: 500 mg then 125–250 mg every 4 h; IV for rapid IOP relief [FDA]."],
      ["Epilepsy", "8–30 mg/kg/day divided; optimum 375–1,000 mg/day; add-on start 250 mg once daily [FDA]. >1 g/day no better [FDA]."],
      ["Heart-failure oedema", "250–375 mg once each morning (5 mg/kg); give on alternate days or 2 days on/1 off — why: renal carbonic anhydrase must recover [FDA]."],
      ["Drug-induced oedema", "250–375 mg once daily for 1–2 days, alternating with a rest day [FDA]."]
    ],
    paed: {
      tiers: ["Epilepsy: 8–30 mg/kg/day in divided doses; daily total should not exceed 1,000 mg (doses >1 g/day no better) [FDA]."],
      transition: "Not established in primary source. [NEP] — calculator caps at the adult ceiling (1,000 mg/day).",
      calcNote: "Paediatric safety not established in the FDA label; epilepsy range only. No paediatric AMS or glaucoma dose in ranked sources [NEP]."
    },
    adj: {
      icu: "Not applicable.",
      renal: "Contraindicated in marked kidney disease [FDA]; elderly with reduced renal function → severe metabolic acidosis [FDA]. CrCl bands: Not established in primary source. [NEP] Dialysable [FDA].",
      hepatic: "Contraindicated in marked liver disease and cirrhosis — why: hepatic encephalopathy (↓ ammonia excretion) [FDA].",
      preg: "Pregnancy: teratogenic (limb defects) in mice, rats, hamsters, rabbits; no adequate human studies — use only if benefit justifies risk [FDA]. Lactation: decide whether to stop nursing or the drug [FDA].",
      immuno: "Not applicable.",
      metabolic: "Diabetes: hyper- or hypoglycaemia reported; caution in conditions predisposing to electrolyte/acid–base imbalance incl. diabetes [FDA]. Hypokalaemia, hyponatraemia, metabolic acidosis [FDA].",
      other: "Sulfonamide cross-sensitivity possible [FDA]. Impaired alveolar ventilation (e.g. severe COPD) — caution, acidosis may worsen [FDA]. Elderly: severe acidosis with reduced renal function [FDA]."
    },
    tox: {
      human: "Toxic/lethal human dose: Not established in primary source. [NEP] Expected effects: electrolyte imbalance, acidosis, CNS effects [FDA].",
      animal: "Animal LD50: Not established in primary source. [NEP] (No PubChem non-human toxicity values found this run [NLM].)",
      manage: "No specific antidote → supportive; monitor K⁺ and pH; correct acidosis with sodium bicarbonate → haemodialysis is effective (dialysable), especially with renal failure [FDA]."
    },
    contra: [
      "Hypersensitivity to acetazolamide or excipients; possible sulfonamide cross-sensitivity [FDA].",
      "Low serum sodium and/or potassium [FDA] — why: further loss.",
      "Marked kidney or liver disease; cirrhosis [FDA] — why: acidosis, hepatic encephalopathy.",
      "Adrenal (suprarenal) failure; hyperchloraemic acidosis [FDA].",
      "Long-term use in chronic non-congestive angle-closure glaucoma [FDA] — why: masks organic angle closure.",
      "Boxed warning: none [FDA]."
    ],
    ae: {
      common: ["Paraesthesia, taste change, polyuria, drowsiness, nausea, loss of appetite [FDA] — why: CA inhibition and acidosis."],
      serious: ["SJS/TEN, fulminant hepatic necrosis, agranulocytosis, aplastic anaemia, anaphylaxis (sulfonamide reactions) [FDA]", "Metabolic acidosis, hypokalaemia [FDA]", "Renal calculi, crystalluria, renal failure [FDA]", "Growth retardation in children on long-term therapy [FDA]"]
    },
    monitor: [
      "Electrolytes (K⁺, Na⁺) and bicarbonate periodically — why: hypokalaemia and acidosis [FDA].",
      "CBC and platelets at baseline and periodically — why: blood dyscrasias [FDA].",
      "IOP when used for glaucoma — why: dose is titrated to ocular tension [FDA]."
    ],
    local: {
      neml: "NEML 2025: Acetazolamide 250 mg tablet (E) — NRH, RRH; DH where there is an ophthalmologist [BT-NEML]. No injection on NEML 2025 [BT-NEML].",
      strengths: "250 mg tablet only [BT-NEML] (FDA also lists 125 mg and 500 mg IV) [FDA].",
      stg: "STG 2024 §1.8.1 AMS: 250 mg BID PO [BT-STG]. ⚠ DISCREPANCY: FDA AMS dose 500–1,000 mg/day divided (Bhutan's 500 mg/day equals the FDA lower end; FDA higher dose for rapid ascent)."
    },
    verify: [
      ["Glaucoma adult dose", "250–750 mg/day divided", "250 mg–1 g per 24 h [FDA]", "✏️ Correct (minor)", "Max 1 g/day"],
      ["Child dose", "8–30 mg/kg daily, max 750 mg", "Epilepsy 8–30 mg/kg/day; no paediatric glaucoma dose; >1 g/day no benefit [FDA]", "⚠ Discrepancy", "Limit to epilepsy; cap per label (not 750 mg)"],
      ["Mountain sickness", "Prophylaxis 125–250 mg BID; treatment 250 mg BID ~3 days", "500–1,000 mg/day divided, start 24–48 h before [FDA]; 250 mg BID [BT-STG]", "⚠ Discrepancy", "Show FDA and STG side by side"],
      ["Contraindications", "Includes 'severe pulmonary obstruction'", "Label lists caution in impaired alveolar ventilation, not a contraindication [FDA]", "✏️ Correct (minor)", "Move to cautions"],
      ["Renal", "CrCl 10–50 q12h; <10 avoid", "Contraindicated in marked kidney disease; no CrCl bands [FDA]", "❓ Unverifiable", "Keep only label wording"],
      ["Antidote / overdose", "—", "Supportive, bicarbonate, dialysable [FDA]", "❓ Unverifiable (absent)", "Add"]
    ],
    calc: [
      { drug: "acetazolamide", indication_id: "ams_adult_fda", label: "Acute mountain sickness — adult (FDA 500 mg/day)", route: "PO",
        population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
        basis: "fixed", dose: { value: 250, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
        caps: { max_single: 500, max_daily: 1000, adult_ceiling_single: 500, adult_ceiling_daily: 1000, unit: "mg" },
        weight_basis: "NEP", bsa_formula: "mosteller", adult_transition: { weight_kg: null, age_years: 18 },
        infusion: { conc_max: null, rate: null, unit: null }, formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }],
        rounding: "Quarter-tablet steps (250 mg tablet scored in quarters)", renal: [], renal_note: "Contraindicated in marked kidney disease; the label gives no CrCl cut-off [FDA]",
        flags: [], sources: ["FDA", "BT-STG"] },
      { drug: "acetazolamide", indication_id: "glaucoma_open_angle", label: "Open-angle glaucoma — adult", route: "PO",
        population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
        basis: "fixed", dose: { value: 250, unit: "mg", per: "day", value_max: 1000 }, interval_h: 24, divided_doses: 1,
        caps: { max_single: null, max_daily: 1000, adult_ceiling_single: null, adult_ceiling_daily: 1000, unit: "mg" },
        weight_basis: "NEP", bsa_formula: "mosteller", adult_transition: { weight_kg: null, age_years: 18 },
        infusion: { conc_max: null, rate: null, unit: null }, formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }],
        rounding: "Divide doses above 250 mg/day", renal: [], renal_note: "Contraindicated in marked kidney disease; the label gives no CrCl cut-off [FDA]",
        flags: [], sources: ["FDA"] },
      { drug: "acetazolamide", indication_id: "epilepsy", label: "Epilepsy — child or adult (8–30 mg/kg/day)", route: "PO",
        population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 8, value_max: 30, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3,
        caps: { max_single: null, max_daily: 1000, adult_ceiling_single: null, adult_ceiling_daily: 1000, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: null, age_years: null },
        infusion: { conc_max: null, rate: null, unit: null }, formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }],
        rounding: "Divided doses [FDA]; number of divisions not stated — calculator shows 3 [NEP]", renal: [],
        flags: [], sources: ["FDA"] }
    ],
    sources: [
      ["FDA", "Acetazolamide tablets USP 125/250 mg — Lifestar Pharma, label effective 2026-11-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0913db35-3f08-4d82-8394-486bd9a487c4"],
      ["FDA", "Acetazolamide for injection USP 500 mg — Avet, label effective 2026-04-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4dd56001-4941-4ff0-9f30-02a1bcc4fe7e"],
      ["BT-STG", "Bhutan Standard Treatment Guidelines 2024, §1.8.1 Acute mountain sickness", ""],
      ["BT-NEML", "Bhutan National Essential Medicines List 2025, 20.4", ""]
    ]
  },

  acetylcysteine: {
    inn: "Acetylcysteine", letter: "A", atc: "V03AB23 (antidote); R05CB01 (mucolytic)", cls: "Antidote (glutathione precursor); mucolytic", risk: "Standard — not on the ISMP high-alert list (checked 2018 list + 2024 update); dosing-error risk with the multi-bag IV infusion [FDA]",
    linked: [
      ["Poisoning — adults (paracetamol)", "First-line antidote [FDA][BT-STG]", "poisoning-adult"], ["Poisoning — children (paracetamol)", "First-line antidote [FDA]", "poisoning-child"],
      ["Viscid bronchial secretions (inhaled)", "Adjunct mucolytic [FDA]", ""]
    ],
    forms: [
      "Injection 200 mg/mL (6,000 mg/30 mL vial) [FDA]; Bhutan: 200 mg/mL 2 mL vial [BT-NEML].",
      "Hyperosmolar (2,600 mOsmol/L) → must be diluted in sterile water, 0.45% NaCl or 5% dextrose; 0.45% NaCl preferred — why: more consistent osmolarity, less free water [FDA].",
      "Reduce total volume for patients <40 kg or on fluid restriction — why: fluid overload/hyponatraemia [FDA].",
      "Inhalation solution 10% and 20% (30 mL vials): nebulise 3–5 mL of 20% (or 6–10 mL of 10%) 3–4 times daily [FDA]."
    ],
    moa: "Maintains/restores hepatic glutathione and acts as an alternative substrate that conjugates the toxic paracetamol metabolite (NAPQI) → limits hepatocellular necrosis [FDA]. Inhaled: breaks mucoprotein disulfide bonds [FDA].",
    pk: [
      "IV: terminal t½ 5.6 h; clearance 0.11 L/h/kg, renal ~30%; Vd 0.47 L/kg; protein binding 66–87% [FDA].",
      "Hepatic impairment: t½ ↑80%, AUC ↑1.6-fold — not clinically meaningful [FDA].",
      "Effect is time-critical: maximal protection if started within 0–8 h of ingestion; efficacy falls after 8 h, limited at 15–24 h but do not withhold [FDA]."
    ],
    ind: {
      adult: ["Prevent or lessen hepatic injury after a potentially hepatotoxic paracetamol ingestion — acute or repeated supratherapeutic [FDA].", "Adjunct for abnormal, viscid mucus (inhaled) [FDA]."],
      paed: ["Paracetamol poisoning in children ≥5 kg (three-bag regimen) [FDA]; <5 kg not studied [FDA]."]
    },
    adult: [
      ["Paracetamol poisoning — three-bag (21 h), ≥41 kg", "Bag 1: 150 mg/kg in 200 mL over 1 h; Bag 2: 50 mg/kg in 500 mL over 4 h; Bag 3: 100 mg/kg in 1,000 mL over 16 h. Total 300 mg/kg [FDA]. ≥100 kg: 15,000 / 5,000 / 10,000 mg (dose capped at 100 kg) [FDA]."],
      ["Paracetamol poisoning — two-bag (20 h), ≥41 kg", "Bag 1: 200 mg/kg in 1,000 mL over 4 h; Bag 2: 100 mg/kg in 500 mL over 16 h [FDA]. ≥100 kg: 20,000 / 10,000 mg [FDA]. Fewer hypersensitivity reactions than three-bag [FDA]."],
      ["Bhutan STG", "150 mg/kg in 200 mL D5 over 1 h → 50 mg/kg in 500 mL D5 over 4 h → 100 mg/kg in 500 mL D5 over 16 h [BT-STG]. ⚠ DISCREPANCY: bag 3 diluent 500 mL (STG) vs 1,000 mL (FDA, 41–99 kg)."],
      ["Continue beyond 21 h", "If massive overdose, co-ingestants, pre-existing liver disease, or paracetamol still detectable/ALT rising after the last bag — continue at the maintenance rate [FDA]."]
    ],
    paed: {
      tiers: [
        "5–20 kg: 150 mg/kg in 3 mL/kg over 1 h → 50 mg/kg in 7 mL/kg over 4 h → 100 mg/kg in 14 mL/kg over 16 h [FDA].",
        "21–40 kg: same mg/kg in 100 mL → 250 mL → 500 mL [FDA].",
        "≥41 kg: adult volumes; two-bag regimen allowed [FDA]. <5 kg: not studied [FDA]."
      ],
      transition: "≥41 kg → adult volumes and two-bag option [FDA].",
      calcNote: "Three-bag for ≤40 kg (mandatory) [FDA]. Dose weight capped at 100 kg. Diluent by weight band. Need for treatment is decided on the Rumack–Matthew nomogram (4–24 h level) — not by this calculator."
    },
    adj: {
      icu: "Not applicable (no sedation); watch fluid balance in ICU — why: large diluent volumes.",
      renal: "No adjustment stated; haemodialysis may remove some acetylcysteine [FDA].",
      hepatic: "No adjustment — PK change not clinically meaningful [FDA].",
      preg: "Pregnancy: data insufficient; delaying treatment raises maternal and fetal risk → treat as indicated [FDA]. Lactation: no data; nearly cleared 30 h after dosing — mother may pump and discard for 30 h [FDA].",
      immuno: "Not applicable.",
      metabolic: "Fluid restriction / <40 kg: reduce volume (hyponatraemia, seizures reported with excess free water) [FDA]. Diabetes: no specific adjustment [NEP].",
      other: "Asthma/atopy: higher risk of anaphylactoid reactions and bronchospasm — not a contraindication; treat and continue [FDA]. Inhaled form can cause bronchospasm in asthma [FDA]."
    },
    tox: {
      human: "Acetylcysteine overdose (dosing errors): fatal anaphylaxis, cerebral oedema, haemolytic-uraemic syndrome reported [FDA]. Exact toxic human dose: Not established in primary source. [NEP]",
      animal: "LD50: dog oral 1 g/kg; rat oral 3 g/kg and >6 g/kg; mouse oral >3 g/kg; dog intraperitoneal 700 mg/kg [NLM].",
      manage: "Stop the infusion → manage anaphylaxis/oedema → supportive; may restart cautiously after a hypersensitivity reaction once symptoms settle [FDA]."
    },
    contra: [
      "Previous hypersensitivity reaction to acetylcysteine [FDA].",
      "Boxed warning: none [FDA]."
    ],
    ae: {
      common: ["Anaphylactoid reactions (rash, urticaria, flushing, pruritus) mostly during bag 1 [FDA] — why: rapid high-concentration loading.", "Nausea, vomiting [FDA]."],
      serious: ["Anaphylaxis, bronchospasm, hypotension [FDA]", "Fluid overload, hyponatraemia, seizures in small children [FDA]"]
    },
    monitor: [
      "Paracetamol level ≥4 h post-ingestion (nomogram) — why: decides need to treat [FDA].",
      "AST, ALT, bilirubin, INR, creatinine, BUN, glucose, electrolytes at start and after the last bag — why: decide whether to continue [FDA].",
      "Observe during and after infusion, especially bag 1 — why: anaphylaxis [FDA].",
      "Fluid balance and sodium in children and fluid-restricted patients [FDA]."
    ],
    local: {
      neml: "NEML 2025: Acetylcysteine 200 mg/mL injection 2 mL vial (V) — NRH, RRH, DH; replaced the 10 mL ampoule [BT-NEML].",
      strengths: "200 mg/mL (2 mL vial = 400 mg) [BT-NEML]; FDA vial 30 mL = 6,000 mg [FDA] — why it matters: a 60 kg bag 1 (9,000 mg) needs ~23 Bhutan vials.",
      stg: "STG 2024: three-bag 150/50/100 mg/kg in D5 [BT-STG] — agrees on doses; ⚠ bag 3 volume 500 mL vs FDA 1,000 mL."
    },
    verify: [
      ["Doses (mg/kg)", "150 / 50 / 100 mg/kg", "150 / 50 / 100 mg/kg [FDA]", "✅ Match", "Keep"],
      ["Weight bands", "≥40 kg; 20–39 kg; up to 20 kg", "5–20, 21–40, 41–99, ≥100 kg [FDA]", "✏️ Correct (minor)", "Use FDA bands; add ≥100 kg cap and <5 kg not studied"],
      ["Two-bag regimen", "—", "200 mg/kg over 4 h + 100 mg/kg over 16 h, ≥41 kg [FDA]", "❓ Unverifiable (absent)", "Add"],
      ["Contraindications", "Severe tachycardia, cardiovascular disease (IHD)", "Only previous hypersensitivity [FDA]", "⚠ Discrepancy", "Remove unsupported contraindications"],
      ["Lactation", "Unknown, use with caution", "No data; pump and discard 30 h [FDA]", "✏️ Correct (minor)", "Update"],
      ["Overdose", "—", "Anaphylaxis, cerebral oedema, HUS [FDA]", "❓ Unverifiable (absent)", "Add"]
    ],
    calc: [
      { drug: "acetylcysteine", indication_id: "pcm_3bag_bag1", label: "Paracetamol poisoning — three-bag: Bag 1 (loading, 1 h)", route: "IV",
        population: { min_age_months: null, max_age_months: null, min_weight_kg: 5, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: null, divided_doses: null,
        caps: { max_single: 15000, max_daily: null, adult_ceiling_single: 15000, adult_ceiling_daily: null, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 41, age_years: null },
        infusion: { conc_max: null, rate: null, unit: "mL/h", duration_h: 1,
          diluent_bands: [{ min_weight_kg: 5, max_weight_kg: 21, mL_per_kg: 3 }, { min_weight_kg: 21, max_weight_kg: 41, mL: 100 }, { min_weight_kg: 41, max_weight_kg: null, mL: 200 }] },
        formulations: [{ form: "inj", strength: 200, unit: "mg/mL" }],
        rounding: "Draw up to 0.1 mL", renal: [], flags: [], sources: ["FDA", "BT-STG"] },
      { drug: "acetylcysteine", indication_id: "pcm_3bag_bag2", label: "Three-bag: Bag 2 (4 h)", route: "IV",
        population: { min_age_months: null, max_age_months: null, min_weight_kg: 5, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: null, divided_doses: null,
        caps: { max_single: 5000, max_daily: null, adult_ceiling_single: 5000, adult_ceiling_daily: null, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 41, age_years: null },
        infusion: { conc_max: null, rate: null, unit: "mL/h", duration_h: 4,
          diluent_bands: [{ min_weight_kg: 5, max_weight_kg: 21, mL_per_kg: 7 }, { min_weight_kg: 21, max_weight_kg: 41, mL: 250 }, { min_weight_kg: 41, max_weight_kg: null, mL: 500 }] },
        formulations: [{ form: "inj", strength: 200, unit: "mg/mL" }],
        rounding: "Draw up to 0.1 mL", renal: [], flags: [], sources: ["FDA"] },
      { drug: "acetylcysteine", indication_id: "pcm_3bag_bag3", label: "Three-bag: Bag 3 (16 h)", route: "IV",
        population: { min_age_months: null, max_age_months: null, min_weight_kg: 5, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: null, divided_doses: null,
        caps: { max_single: 10000, max_daily: null, adult_ceiling_single: 10000, adult_ceiling_daily: null, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 41, age_years: null },
        infusion: { conc_max: null, rate: null, unit: "mL/h", duration_h: 16,
          diluent_bands: [{ min_weight_kg: 5, max_weight_kg: 21, mL_per_kg: 14 }, { min_weight_kg: 21, max_weight_kg: 41, mL: 500 }, { min_weight_kg: 41, max_weight_kg: null, mL: 1000 }] },
        formulations: [{ form: "inj", strength: 200, unit: "mg/mL" }],
        rounding: "Draw up to 0.1 mL", renal: [], flags: [], sources: ["FDA"] },
      { drug: "acetylcysteine", indication_id: "pcm_2bag_bag1", label: "Two-bag (≥41 kg): Bag 1 (4 h)", route: "IV",
        population: { min_age_months: null, max_age_months: null, min_weight_kg: 41, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: null, divided_doses: null,
        caps: { max_single: 20000, max_daily: null, adult_ceiling_single: 20000, adult_ceiling_daily: null, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 41, age_years: null },
        infusion: { conc_max: null, rate: null, unit: "mL/h", duration_h: 4, diluent_bands: [{ min_weight_kg: 41, max_weight_kg: null, mL: 1000 }] },
        formulations: [{ form: "inj", strength: 200, unit: "mg/mL" }],
        rounding: "Draw up to 0.1 mL", renal: [], flags: [], sources: ["FDA"] },
      { drug: "acetylcysteine", indication_id: "pcm_2bag_bag2", label: "Two-bag (≥41 kg): Bag 2 (16 h)", route: "IV",
        population: { min_age_months: null, max_age_months: null, min_weight_kg: 41, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: null, divided_doses: null,
        caps: { max_single: 10000, max_daily: null, adult_ceiling_single: 10000, adult_ceiling_daily: null, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 41, age_years: null },
        infusion: { conc_max: null, rate: null, unit: "mL/h", duration_h: 16, diluent_bands: [{ min_weight_kg: 41, max_weight_kg: null, mL: 500 }] },
        formulations: [{ form: "inj", strength: 200, unit: "mg/mL" }],
        rounding: "Draw up to 0.1 mL", renal: [], flags: [], sources: ["FDA"] }
    ],
    sources: [
      ["FDA", "ACETADOTE (acetylcysteine) injection — Cumberland, label effective 2025-04-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=472f158a-5ab9-4308-8e49-1116e6ea3d39"],
      ["FDA", "Acetylcysteine solution 10%/20% (inhalation) — Hospira, label effective 2026-05-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5558a5f5-e821-473b-7d8a-5d33d09f0586"],
      ["NLM", "PubChem CID 12035 — Non-human toxicity values", "https://pubchem.ncbi.nlm.nih.gov/compound/12035"],
      ["BT-STG", "Bhutan Standard Treatment Guidelines 2024 — paracetamol poisoning", ""],
      ["BT-NEML", "Bhutan National Essential Medicines List 2025, 4.2", ""]
    ]
  },

  aciclovir: {
    inn: "Aciclovir", letter: "A", atc: "J05AB01", cls: "Antiviral — nucleoside analogue (guanosine), HSV/VZV DNA polymerase inhibitor", risk: "Standard (IV: nephrotoxicity — infuse over ≥1 h)",
    linked: [
      ["Herpes simplex encephalitis", "First-line, IV [FDA]", ""],
      ["Neonatal HSV infection", "First-line, IV [FDA]", ""],
      ["Herpes zoster (shingles)", "First-line, PO; IV if immunocompromised [FDA][BT-STG]", ""],
      ["Genital herpes (initial, recurrent, suppression)", "First-line, PO [FDA][BT-STG]", "sti-adult"],
      ["Chickenpox", "PO ≥2 years; IV if immunocompromised [FDA]", "chickenpox-child"]
    ],
    forms: [
      "Tablets 400 mg, 800 mg; capsules 200 mg; suspension (bioequivalent to capsules) [FDA].",
      "IV (acyclovir sodium): infuse over ≥1 h at ≤7 mg/mL — why: bolus or high concentration precipitates in renal tubules (solubility 2.5 mg/mL) and 10 mg/mL causes phlebitis [FDA]. Never IM, SC, oral or ocular use of the injection [FDA]. Use within 24 h of dilution [FDA]."
    ],
    moa: "Phosphorylated by viral thymidine kinase → aciclovir triphosphate inhibits viral DNA polymerase and terminates the chain → stops HSV/VZV replication [UNVERIFIED-KNOWLEDGE].",
    pk: [
      "Oral bioavailability 10–20%, falls as dose rises; protein binding 9–33%; t½ 2.5–3.3 h (children 7 months–7 years ~2.6 h) [FDA].",
      "Renally cleared — t½ and clearance depend on renal function [FDA]; haemodialysis t½ ~5 h, a 6-h session lowers levels 60% [FDA].",
      "Probenecid ↑ aciclovir exposure (↓ renal clearance) [FDA]."
    ],
    ind: {
      adult: ["HSV encephalitis; mucocutaneous HSV in immunocompromised; severe initial genital herpes (IV) [FDA].", "Zoster; genital herpes initial, intermittent, suppressive; chickenpox (PO) [FDA].", "Zoster in immunocompromised (IV) [FDA]."],
      paed: ["Neonatal HSV, birth–3 months (IV) [FDA].", "HSV encephalitis 3 months–12 years (IV) [FDA].", "Chickenpox ≥2 years (PO) [FDA].", "Immunocompromised HSV/VZV <12 years (IV) [FDA]."]
    },
    adult: [
      ["HSV encephalitis (≥12 y)", "10 mg/kg IV over 1 h every 8 h for 10 days [FDA]."],
      ["Mucocutaneous HSV, immunocompromised (≥12 y)", "5 mg/kg IV over 1 h every 8 h for 7 days [FDA]."],
      ["Severe initial genital herpes (≥12 y)", "5 mg/kg IV over 1 h every 8 h for 5 days [FDA]."],
      ["Zoster, immunocompromised (≥12 y)", "10 mg/kg IV over 1 h every 8 h for 7 days [FDA]."],
      ["Any IV indication", "Never exceed 20 mg/kg every 8 h; obese: dose on ideal body weight [FDA]."],
      ["Herpes zoster (PO)", "800 mg every 4 h, 5 times daily for 7–10 days [FDA]. ⚠ DISCREPANCY: STG 800 mg 5×/day for 10–14 days, start within 5 days [BT-STG]."],
      ["Initial genital herpes (PO)", "200 mg every 4 h, 5 times daily for 10 days [FDA]. ⚠ DISCREPANCY: STG 400 mg TDS for 10 days [BT-STG] — daily total 1,000 mg (FDA) vs 1,200 mg (STG)."],
      ["Recurrent genital herpes", "Episodic: 200 mg 5×/day for 5 days [FDA] vs 400 mg TDS for 5 days [BT-STG]. Suppression: 400 mg twice daily up to 12 months then re-evaluate [FDA]."],
      ["Chickenpox (>40 kg)", "800 mg 4 times daily for 5 days [FDA]."]
    ],
    paed: {
      tiers: [
        "Birth–3 months, neonatal HSV: 10 mg/kg IV over 1 h every 8 h for 10 days [FDA]. ⚠ DISCREPANCY: CDC 2021 recommends 20 mg/kg IV every 8 h for 14 days (skin/mucous membranes) or 21 days (disseminated/CNS) [CDC]; the FDA label notes 15–20 mg/kg has been used but calls its safety unknown [FDA]. This guide shows the CDC regimen as current practice.",
        "3 months–12 years, HSV encephalitis: 20 mg/kg IV every 8 h for 10 days [FDA].",
        "<12 years, immunocompromised: HSV 10 mg/kg IV q8h × 7 days; zoster 20 mg/kg IV q8h × 7 days [FDA].",
        "≥2 years, chickenpox: 20 mg/kg PO 4 times daily (80 mg/kg/day) for 5 days; >40 kg → adult 800 mg QID [FDA]."
      ],
      transition: "IV: ≥12 years → adult mg/kg doses [FDA]. PO chickenpox: >40 kg → 800 mg four times daily [FDA].",
      calcNote: "IV cap: 20 mg/kg per 8 h for any patient [FDA]. Chickenpox cap 800 mg per dose. Renal: apply CrCl table. Obese adults: ideal body weight."
    },
    adj: {
      icu: "Hydrate well; avoid with other nephrotoxins where possible — why: crystal nephropathy [FDA].",
      renal: "IV (CrCl mL/min/1.73 m²): >50 → 100% q8h; 25–50 → 100% q12h; 10–25 → 100% q24h; 0–10 → 50% q24h [FDA]. PO 800 mg 5×/day: 10–25 → q8h; 0–10 → q12h. PO 200 mg 5×/day or 400 mg q12h: 0–10 → 200 mg q12h [FDA]. HD: give an extra dose after each dialysis; PD: no supplement [FDA].",
      hepatic: "No adjustment stated in primary source. [NEP]",
      preg: "Pregnancy and lactation: FDA label wording not extracted this run [NEP] — to verify (LactMed) next pass.",
      immuno: "IV for immunocompromised HSV/VZV (doses above); TTP/HUS reported in immunocompromised patients [FDA].",
      metabolic: "Diabetes/excipients: Not established in primary source. [NEP]",
      other: "Elderly: reduced renal function — adjust; CNS effects (agitation, confusion) more likely [FDA]."
    },
    tox: {
      human: "Ingestions up to 20 g (100 capsules) reported: agitation, coma, seizures, lethargy [FDA]. Renal tubular precipitation when intratubular concentration >2.5 mg/mL → AKI, especially after bolus IV [FDA].",
      animal: "LD50: mouse oral >10,000 mg/kg; mouse intraperitoneal 1,000 mg/kg [NLM].",
      manage: "No antidote → stop/hold drug, hydrate → haemodialysis for AKI/anuria (removes ~60% in 6 h) [FDA]."
    },
    contra: [
      "Hypersensitivity to aciclovir or valaciclovir [FDA].",
      "Boxed warning: none [FDA]."
    ],
    ae: {
      common: ["Nausea, vomiting, diarrhoea, headache, malaise (PO) [FDA]; phlebitis at IV site [FDA]."],
      serious: ["Acute kidney injury (crystal nephropathy) [FDA]", "Neurotoxicity: agitation, confusion, seizures, coma — esp. renal impairment [FDA]", "TTP/HUS in immunocompromised [FDA]"]
    },
    monitor: [
      "Creatinine/urine output before and during IV therapy — why: dose depends on CrCl; AKI risk [FDA].",
      "Hydration and infusion time ≥1 h — why: prevents tubular precipitation [FDA].",
      "Neurological status in renal impairment — why: accumulation [FDA]."
    ],
    local: {
      neml: "NEML 2025: Acyclovir 400 mg tablet (E) — NRH, RRH, DH; 500 mg lyophilised injection (E) — NRH, RRH; 3% eye ointment (E) [BT-NEML].",
      strengths: "400 mg tablet; 500 mg vial [BT-NEML]. No oral suspension on NEML — why it matters: chickenpox mg/kg doses must be rounded to 400 mg tablet fractions.",
      stg: "STG 2024: zoster 800 mg 5×/day 10–14 days; genital HSV 400 mg TDS × 10 days (initial), × 5 days (recurrent) [BT-STG] — ⚠ differ from FDA duration/regimen (see adult dosing)."
    },
    verify: [
      ["IV dose (immunocompromised HSV)", "Adult 5 mg/kg IV q8h for 5–7 days", "5 mg/kg q8h × 7 days [FDA]", "✅ Match", "Keep"],
      ["IV renal table", "25–50: q12h; 10–25: q12h; <10: 50% q24h", "10–25 → q24h (not q12h) [FDA]", "⚠ Discrepancy", "Correct 10–25 band to every 24 h"],
      ["Oral renal table", "10–25: 800 mg q8h; <10: 200 mg q12h / 800 mg q12h", "Same [FDA]", "✅ Match", "Keep"],
      ["Encephalitis / neonatal doses", "Not in app entry (truncated)", "10 mg/kg q8h adult; 20 mg/kg child; neonate 10 mg/kg q8h [FDA] vs 20 mg/kg q8h 14–21 days [CDC]", "⚠ Discrepancy", "Add both; show CDC as current practice"],
      ["Infusion rule", "Infuse over 1 hour; hydrate", "≥1 h, ≤7 mg/mL, never bolus [FDA]", "✏️ Correct (minor)", "Add concentration limit"],
      ["Overdose", "—", "Up to 20 g; AKI; dialysis [FDA]", "❓ Unverifiable (absent)", "Add"]
    ],
    calc: [
      { drug: "aciclovir", indication_id: "hse_adult", label: "HSV encephalitis — ≥12 years (IV)", route: "IV",
        population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3,
        caps: { max_single: null, max_daily: null, adult_ceiling_single: null, adult_ceiling_daily: null, unit: "mg", max_mg_per_kg_dose: 20 },
        weight_basis: "ideal", bsa_formula: "mosteller", adult_transition: { weight_kg: null, age_years: 12 },
        infusion: { conc_max: 7, rate: "over 1 h", unit: "mg/mL", duration_h: 1 },
        formulations: [{ form: "solution (vial 500 mg/10 mL)", strength: 50, unit: "mg/mL" }, { form: "inj", strength: 500, unit: "mg/vial" }],
        rounding: "To nearest 5 mg [NEP]",
        renal: [{ crcl_min: 25, crcl_max: 50, action: "extend_interval", factor: 12 }, { crcl_min: 10, crcl_max: 25, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 10, action: "reduce_dose", factor: 0.5, interval_h: 24 }],
        flags: [], sources: ["FDA"] },
      { drug: "aciclovir", indication_id: "hse_child", label: "HSV encephalitis — 3 months to 12 years (IV)", route: "IV",
        population: { min_age_months: 3, max_age_months: 144, min_weight_kg: null, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3,
        caps: { max_single: null, max_daily: null, adult_ceiling_single: null, adult_ceiling_daily: null, unit: "mg", max_mg_per_kg_dose: 20 },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: null, age_years: 12 },
        infusion: { conc_max: 7, rate: "over 1 h", unit: "mg/mL", duration_h: 1 },
        formulations: [{ form: "solution (vial 500 mg/10 mL)", strength: 50, unit: "mg/mL" }, { form: "inj", strength: 500, unit: "mg/vial" }],
        rounding: "To nearest 5 mg [NEP]",
        renal: [{ crcl_min: 25, crcl_max: 50, action: "extend_interval", factor: 12 }, { crcl_min: 10, crcl_max: 25, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 10, action: "reduce_dose", factor: 0.5, interval_h: 24 }],
        flags: [], sources: ["FDA"] },
      { drug: "aciclovir", indication_id: "neonatal_hsv", label: "Neonatal HSV — birth to 3 months (IV)", route: "IV",
        population: { min_age_months: 0, max_age_months: 3, min_weight_kg: null, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3,
        caps: { max_single: null, max_daily: null, adult_ceiling_single: null, adult_ceiling_daily: null, unit: "mg", max_mg_per_kg_dose: 20 },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: null, age_years: null },
        infusion: { conc_max: 7, rate: "over 1 h", unit: "mg/mL", duration_h: 1 },
        formulations: [{ form: "solution (vial 500 mg/10 mL)", strength: 50, unit: "mg/mL" }, { form: "inj", strength: 500, unit: "mg/vial" }],
        rounding: "To nearest 1 mg [NEP]", renal: [],
        pma_note: "CDC 2021: 20 mg/kg IV every 8 h (14 days skin/mucous membranes; 21 days disseminated/CNS). FDA label: 10 mg/kg every 8 h for 10 days.",
        flags: ["NEONATE_REQUIRES_PMA"], sources: ["FDA", "CDC"] },
      { drug: "aciclovir", indication_id: "chickenpox_child", label: "Chickenpox — child ≥2 years (PO)", route: "PO",
        population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
        basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4,
        caps: { max_single: 800, max_daily: 3200, adult_ceiling_single: 800, adult_ceiling_daily: 3200, unit: "mg" },
        weight_basis: "actual", bsa_formula: "mosteller", adult_transition: { weight_kg: 40, age_years: null },
        infusion: { conc_max: null, rate: null, unit: null },
        formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }, { form: "tab", strength: 800, unit: "mg/tab" }],
        rounding: "Round to the nearest half tablet [NEP]",
        renal: [], flags: [], sources: ["FDA"] },
      { drug: "aciclovir", indication_id: "zoster_adult_po", label: "Herpes zoster — adult (PO)", route: "PO",
        population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
        basis: "fixed", dose: { value: 800, unit: "mg", per: "dose" }, interval_h: 4, divided_doses: 5,
        caps: { max_single: 800, max_daily: 4000, adult_ceiling_single: 800, adult_ceiling_daily: 4000, unit: "mg" },
        weight_basis: "NEP", bsa_formula: "mosteller", adult_transition: { weight_kg: null, age_years: 18 },
        infusion: { conc_max: null, rate: null, unit: null },
        formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }, { form: "tab", strength: 800, unit: "mg/tab" }],
        rounding: "Whole tablets", renal: [{ crcl_min: 10, crcl_max: 25, action: "extend_interval", factor: 8 }, { crcl_min: 0, crcl_max: 10, action: "extend_interval", factor: 12 }],
        flags: [], sources: ["FDA", "BT-STG"] }
    ],
    sources: [
      ["FDA", "Acyclovir tablets USP 400/800 mg — American Health Packaging, label effective 2026-09-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05f42300-2a06-45f1-a9b9-6e5c84ae58ec"],
      ["FDA", "Acyclovir sodium injection — ProPharma, label effective 2025-07-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a7cf9e-f21b-06c2-e063-6394a90aa623"],
      ["CDC", "Sexually Transmitted Infections Treatment Guidelines, 2021 — Herpes: neonatal herpes — CDC, page reviewed 2022-09-21", "https://www.cdc.gov/std/treatment-guidelines/herpes.htm"],
      ["NLM", "PubChem CID 135398513 — Non-human toxicity values", "https://pubchem.ncbi.nlm.nih.gov/compound/135398513"],
      ["BT-STG", "Bhutan Standard Treatment Guidelines 2024 — herpes zoster; genital herpes", ""],
      ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]
    ]
  }
});
/* Common trade names — Bhutan, India, Bangladesh. Brands are NOT regulator-verified: they were checked this run on
   national pharmacy/drug-index listings (India: PharmEasy, 1mg, Medindia, GNH; Bangladesh: MedEx, ePharma, Arogga).
   Each row: [brand, company, product]. "src" holds the links checked. Bhutan dispenses by generic name (NEML). */
const FDB_BRANDS = {
  abacavir: {
    BT: "Supplied by generic name (NEML 2025: 300 mg tablet, 20 mg/mL syrup) [BT-NEML]",
    IN: [["Abamune", "Cipla", "300 mg tablet — listed as discontinued on PharmEasy"], ["Abamune-L", "Cipla", "abacavir 600 mg + lamivudine 300 mg (combination)"]],
    BD: "No Bangladesh brand found on MedEx this run — Not established in primary source. [NEP]",
    src: ["https://pharmeasy.in/online-medicine-order/abamune-300mg-tablet-32636"]
  },
  acetazolamide: {
    BT: "Supplied by generic name (NEML 2025: 250 mg tablet) [BT-NEML]",
    IN: [["Diamox", "Sun Pharma (Pfizer Ltd, Goa site)", "250 mg tablet"]],
    BD: [["Acemox", "ACME Laboratories", "250 mg tablet"], ["Remox", "Reman Drug Laboratories", "250 mg tablet"], ["Edimox", "Gaco Pharmaceuticals", "250 mg tablet"]],
    src: ["https://pharmeasy.in/online-medicine-order/diamox-strip-of-15-tablets-29623", "https://medindia.net/drug-price/acetazolamide/diamox-250mg.htm", "https://medex.com.bd/generics/26/acetazolamide", "https://medex.com.bd/brands/228/remox"]
  },
  acetylcysteine: {
    BT: "Supplied by generic name (NEML 2025: 200 mg/mL injection, 2 mL vial) [BT-NEML]",
    IN: [["Mucomix", "Samarth Life Sciences", "200 mg/mL injection (1 mL, 2 mL, 5 mL)"]],
    BD: [["Mucomist", "—", "600 mg/3 mL nebuliser solution; 600 mg tablet (no IV form listed)"], ["Nacsol", "—", "600 mg (oral)"], ["Viscotin", "—", "effervescent granules; nebuliser solution"]],
    src: ["https://pharmeasy.in/online-medicine-order/mucomix-200mg-injection-23839", "https://medex.com.bd/generics/6/acetylcysteine/brand-names"]
  },
  aciclovir: {
    BT: "Supplied by generic name (NEML 2025: 400 mg tablet, 500 mg injection, 3% eye ointment) [BT-NEML]",
    IN: [["Zovirax", "GSK", "400 mg tablet"], ["Acivir DT", "Cipla", "400 mg dispersible tablet"]],
    BD: [["Virux", "Square Pharmaceuticals", "400 mg tablet"], ["Simplovir", "Incepta", "400 mg tablet"], ["Novirax", "Drug International", "400 mg tablet"], ["Acerux", "—", "400 mg tablet; 200 mg/5 mL suspension"]],
    src: ["https://pharmeasy.in/online-medicine-order/zovirax-400mg-tablet-11455", "https://pharmeasy.in/online-medicine-order/acivir-dt-400mg-strip-of-10-tablets-4065816", "https://medex.com.bd/brands/158/virux", "https://epharma.com.bd/en/medicines/otc-medicines/virux-400mg-10pcs-5423", "https://epharma.com.bd/en/medicines/viral/simplovir-400-20pcs-box-14963", "https://medex.com.bd/brands/142/acerux-400-mg-tablet"]
  }
};
for (const k in FDB_BRANDS) if (window.FDB[k]) window.FDB[k].brands = FDB_BRANDS[k];

/* Dose card (what the page shows first). Each row: ind = indication, text = dose in plain words, calc = calculator block id(s)
   used for "Your patient", bt = Bhutan STG/guideline wording when it differs. Every number here is taken from the sourced
   fields above (FDA unless marked). boxed = boxed-warning summary shown under the name. */
const FDB_DOSE = {
  abacavir: {
    boxedTitle: "Fatal hypersensitivity — test HLA-B*5701 first",
    boxed: "Serious, sometimes fatal, multi-organ hypersensitivity reactions occur, mostly in HLA-B*5701 carriers but also in non-carriers. Screen for HLA-B*5701 before starting or restarting; do not use if positive or after any previous abacavir reaction. Stop at once if a reaction is suspected, even if another diagnosis is possible. Never restart abacavir or any abacavir-containing product after a reaction — severe reactions, including death, can occur within hours [FDA].",
    adult: [
      { ind: "HIV-1 infection (with other antiretrovirals)", text: "300 mg twice daily or 600 mg once daily. Maximum 600 mg/day.", calc: ["hiv_adult"] },
      { ind: "Mild liver impairment (Child-Pugh A)", text: "200 mg twice daily (10 mL of 20 mg/mL solution). Moderate or severe impairment: do not use." }
    ],
    child: [
      { ind: "HIV-1, age 3 months and over — oral solution", text: "8 mg/kg twice daily, or 16 mg/kg once daily. Maximum 300 mg per dose (600 mg/day).", calc: ["hiv_paed_solution"] },
      { ind: "HIV-1, 14 kg and over — 300 mg scored tablet", text: "14–<20 kg: 150 mg twice daily · 20–<25 kg: 150 mg morning + 300 mg evening · 25 kg and over: 300 mg twice daily. The same daily total may be given once daily.", calc: ["hiv_paed_tablet_band"] },
      { ind: "Bhutan HIV guideline 2024 (twice daily)", text: "3–<6 kg 60 mg · 6–<10 kg 80 mg · 10–<14 kg 120 mg · 14–<20 kg 150 mg · 20–<25 kg 150 mg morning + 300 mg evening · 25 kg and over 300 mg.", calc: ["hiv_paed_bt_band"], bt: "Bhutan bands start from 3 kg with no age limit; the FDA label starts at 3 months." }
    ]
  },
  acetazolamide: {
    adult: [
      { ind: "Acute mountain sickness — prevention", text: "500–1,000 mg/day in divided doses (1,000 mg for rapid ascent). Start 24–48 h before ascent; continue 48 h at altitude or longer.", calc: ["ams_adult_fda"], bt: "Bhutan STG 2024: 250 mg twice daily, with rest, no further ascent, and descent if not improving." },
      { ind: "Open-angle glaucoma", text: "250 mg to 1 g per 24 h; divide doses above 250 mg. More than 1 g/day adds no benefit.", calc: ["glaucoma_open_angle"] },
      { ind: "Secondary or acute angle-closure glaucoma (before surgery)", text: "250 mg every 4 h (some respond to 250 mg twice daily). Acute: 500 mg, then 125–250 mg every 4 h. IV for rapid pressure control." },
      { ind: "Epilepsy (add-on)", text: "8–30 mg/kg/day in divided doses; usual 375–1,000 mg/day. Starting as add-on: 250 mg once daily.", calc: ["epilepsy"] },
      { ind: "Oedema — heart failure or drug-induced", text: "250–375 mg once each morning, on alternate days or 2 days on and 1 day off." }
    ],
    child: [
      { ind: "Epilepsy (add-on)", text: "8–30 mg/kg/day in divided doses. Doses above 1 g/day give no added benefit, so the calculator holds the daily total at 1 g.", calc: ["epilepsy"] },
      { ind: "Other uses (mountain sickness, glaucoma)", text: "No child dose in the FDA label. Safety in children is not established; long-term use can slow growth." }
    ]
  },
  acetylcysteine: {
    cautionTitle: "Acetylcysteine overdose can be fatal",
    caution: "Fatal and life-threatening reactions have followed acetylcysteine overdose: anaphylaxis (often during the loading dose — low blood pressure, rash, angioedema, bronchospasm), cerebral oedema (confusion, abnormal pupils, seizures) and haemolytic-uraemic syndrome (haemolysis, low platelets, acute kidney injury). If overdose is suspected, stop the infusion and treat; haemodialysis removes acetylcysteine. Each bag's dose is calculated from the patient's weight in kg [FDA].",
    adult: [
      { ind: "Paracetamol poisoning — three-bag regimen (21 h)", text: "Bag 1: 150 mg/kg in 200 mL over 1 h → Bag 2: 50 mg/kg in 500 mL over 4 h → Bag 3: 100 mg/kg in 1,000 mL over 16 h. Weight above 100 kg: dose as 100 kg.", calc: ["pcm_3bag_bag1", "pcm_3bag_bag2", "pcm_3bag_bag3"], bt: "Bhutan STG 2024: same doses in 5% dextrose, but bag 3 in 500 mL." },
      { ind: "Paracetamol poisoning — two-bag regimen (20 h), 41 kg and over", text: "Bag 1: 200 mg/kg in 1,000 mL over 4 h → Bag 2: 100 mg/kg in 500 mL over 16 h. Fewer allergic reactions than the three-bag regimen.", calc: ["pcm_2bag_bag1", "pcm_2bag_bag2"] },
      { ind: "When to continue beyond 21 h", text: "Massive overdose, other drugs taken, existing liver disease, or paracetamol still detectable or ALT rising after the last bag: continue at the bag-3 rate and recheck." },
      { ind: "Thick bronchial secretions (nebulised)", text: "3–5 mL of 20% (or 6–10 mL of 10%) 3–4 times daily." }
    ],
    child: [
      { ind: "Paracetamol poisoning, 5 kg and over — three-bag regimen", text: "Same mg/kg as adults. Diluent: 5–20 kg 3 mL/kg → 7 mL/kg → 14 mL/kg; 21–40 kg 100 mL → 250 mL → 500 mL. Under 40 kg always use the three-bag regimen. Under 5 kg: not studied.", calc: ["pcm_3bag_bag1", "pcm_3bag_bag2", "pcm_3bag_bag3"] }
    ]
  },
  aciclovir: {
    adult: [
      { ind: "Herpes simplex encephalitis", text: "10 mg/kg IV over 1 h every 8 h for 10 days.", calc: ["hse_adult"] },
      { ind: "Herpes simplex, immunocompromised (skin/mucosa)", text: "5 mg/kg IV over 1 h every 8 h for 7 days." },
      { ind: "Severe first episode of genital herpes", text: "5 mg/kg IV over 1 h every 8 h for 5 days." },
      { ind: "Shingles, immunocompromised", text: "10 mg/kg IV over 1 h every 8 h for 7 days." },
      { ind: "Shingles (oral)", text: "800 mg five times daily (every 4 h while awake) for 7–10 days.", calc: ["zoster_adult_po"], bt: "Bhutan STG 2024: 800 mg five times daily for 10–14 days, started within 5 days." },
      { ind: "Genital herpes — first episode (oral)", text: "200 mg five times daily for 10 days.", bt: "Bhutan STG 2024: 400 mg three times daily for 10 days." },
      { ind: "Genital herpes — recurrence / suppression", text: "Recurrence: 200 mg five times daily for 5 days. Suppression: 400 mg twice daily for up to 12 months, then review.", bt: "Bhutan STG 2024 (recurrence): 400 mg three times daily for 5 days." },
      { ind: "Chickenpox (over 40 kg)", text: "800 mg four times daily for 5 days." },
      { ind: "All IV doses", text: "Never more than 20 mg/kg every 8 h. Obese patients: dose on ideal body weight." }
    ],
    child: [
      { ind: "Neonatal herpes simplex (birth to 3 months)", text: "Current practice (CDC 2021): 20 mg/kg IV over 1 h every 8 h — 14 days if limited to skin and mucous membranes, 21 days for disseminated or CNS disease. The FDA label still states 10 mg/kg every 8 h for 10 days.", calc: ["neonatal_hsv"], bt: "No neonatal herpes regimen found in Bhutan STG 2024." },
      { ind: "Herpes simplex encephalitis (3 months to 12 years)", text: "20 mg/kg IV over 1 h every 8 h for 10 days.", calc: ["hse_child"] },
      { ind: "Immunocompromised, under 12 years", text: "Herpes simplex: 10 mg/kg IV every 8 h for 7 days. Shingles: 20 mg/kg IV every 8 h for 7 days." },
      { ind: "Chickenpox (2 years and over)", text: "20 mg/kg four times daily for 5 days; maximum 800 mg per dose (over 40 kg: adult dose).", calc: ["chickenpox_child"] }
    ]
  }
};
for (const k in FDB_DOSE) if (window.FDB[k]) window.FDB[k].dose = FDB_DOSE[k];
/* One-line plain description shown under the drug name. */
const FDB_TAGLINE = {
  abacavir: "Antiretroviral for HIV-1, given with other antiretrovirals in adults and children.",
  acetazolamide: "For acute mountain sickness, glaucoma, epilepsy and oedema.",
  acetylcysteine: "Antidote for paracetamol poisoning; also an inhaled mucolytic.",
  aciclovir: "Antiviral for herpes simplex and varicella-zoster (chickenpox, shingles)."
};
for (const k in FDB_TAGLINE) if (window.FDB[k] && window.FDB[k].dose) window.FDB[k].dose.tagline = FDB_TAGLINE[k];

/* Master index: worldwide drug list A–Z (WHO ATC via NLM RxClass, 3,118 ingredients) is loaded from fdb-index.js when built.
   TRACKER: Done [A — test set: abacavir, acetazolamide, acetylcysteine, aciclovir] | Next batch: awaiting format approval | Discrepancies open: 11 | Verified existing: 4/4 */
