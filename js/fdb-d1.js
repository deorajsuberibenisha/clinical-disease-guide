/* Clinical Disease Guide — Drug monograph database, block D, batch 1 (24 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it). */

/* ================= Batch D-1 (fdb-d1.js) ================= */

/* ---------- DABIGATRAN ETEXILATE (FDA PRADAXA capsules NDA022512 + oral pellets NDA214358, Boehringer Ingelheim) ---------- */
FDB_M("dabigatran-etexilate", {
  inn: "Dabigatran etexilate", atc: "B01AE07", cls: "Direct oral anticoagulant (direct thrombin inhibitor)", risk: "High-alert — anticoagulants, including direct thrombin inhibitors, are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Atrial fibrillation — adults", "Stroke prevention in non-valvular AF [FDA]", "af-adult"], ["Venous thromboembolism — adults", "DVT/PE treatment, recurrence prevention, hip replacement prophylaxis [FDA]", "vte-adult"]],
  forms: ["Capsules 75 mg, 110 mg, 150 mg — swallow whole [FDA].", "Oral pellets 20, 30, 40, 50, 110, 150 mg packets (children 3 months to under 12 years) [FDA].", "Capsules and pellets are NOT interchangeable mg for mg; do not combine dosage forms [FDA]."],
  moa: "Prodrug of dabigatran, a reversible direct thrombin inhibitor [FDA].",
  pk: ["Mainly renal elimination; half-life and anticoagulant effect increase in renal impairment [FDA].", "Half-life about 9–11 h in children taking pellets [FDA].", "Low protein binding (about 35%); haemodialysis removes some drug [FDA]."],
  ind: { adult: ["Reduce stroke and systemic embolism in non-valvular AF [FDA].", "Treat DVT/PE after 5–10 days of parenteral anticoagulant; reduce recurrence [FDA].", "DVT/PE prophylaxis after hip replacement [FDA]."], paed: ["VTE treatment (after at least 5 days of parenteral anticoagulant) and recurrence reduction: capsules 8 to under 18 years; pellets 3 months to under 12 years [FDA]."] },
  adult: [["Non-valvular AF", "CrCl over 30: 150 mg twice daily; CrCl 15–30: 75 mg twice daily [FDA]."], ["DVT/PE treatment", "150 mg twice daily after 5–10 days of parenteral anticoagulation (CrCl over 30) [FDA]."], ["Reduce DVT/PE recurrence", "150 mg twice daily (CrCl over 30) [FDA]."], ["After hip replacement", "110 mg on the first day, then 220 mg once daily (CrCl over 30) [FDA]."]],
  paed: { tiers: ["Capsules, 8 to under 18 years (actual weight, twice daily): 11–<16 kg 75 mg; 16–<26 kg 110 mg; 26–<41 kg 150 mg; 41–<61 kg 185 mg; 61–<81 kg 220 mg; 81 kg or more 260 mg [FDA].", "Pellets, 3 months to under 12 years: age- and weight-based table in the label [FDA]."], transition: "Adult doses from 18 years [FDA].", calcNote: "Weight bands for capsules; 185 mg = 110 + 75 mg capsule, 260 mg = 150 + 110 mg capsule. Re-check the band as weight changes." },
  adj: { renal: "AF: CrCl 15–30 → 75 mg twice daily; CrCl under 15 or dialysis → no recommendation. VTE indications: CrCl 30 or less or dialysis → no recommendation [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Stop before invasive procedures when possible and restart promptly [FDA]. Mechanical heart valves: contraindicated; bioprosthetic valves and triple-positive antiphospholipid syndrome: not recommended [FDA]." },
  tox: { human: "Bleeding [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop drug, find the source and support; idarucizumab is a specific reversal agent for adults; haemodialysis removes some dabigatran (limited data) [FDA]." },
  contra: ["Active pathological bleeding [FDA].", "Serious hypersensitivity to dabigatran or excipients [FDA].", "Mechanical prosthetic heart valve [FDA]."],
  ae: { common: ["Dyspepsia, gastritis-like symptoms, bleeding [FDA]."], serious: ["Major and fatal bleeding [FDA]", "Spinal/epidural haematoma with neuraxial procedures [FDA]", "Thrombosis after premature stopping [FDA]"] },
  monitor: ["Kidney function before starting and when clinically indicated; signs of bleeding; haemoglobin [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dabigatran-etexilate", indication_id: "af", label: "Non-valvular AF — 150 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 15, crcl_max: 30, action: "reduce_dose", set_value: 75 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", text: "CrCl under 15 or on dialysis: no dosing recommendation" }], flags: ["HIGH_ALERT"], sources: ["FDA"] },
    { drug: "dabigatran-etexilate", indication_id: "vte", label: "DVT/PE treatment or recurrence — 150 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 30, action: "avoid", text: "CrCl 30 or less or on dialysis: no dosing recommendation" }], flags: ["HIGH_ALERT", "Start after 5–10 days of parenteral anticoagulant"], sources: ["FDA"] },
    { drug: "dabigatran-etexilate", indication_id: "p1", label: "8–17 years, 11 to under 16 kg — 75 mg twice daily", route: "PO", population: { min_age_months: 96, max_age_months: 216, min_weight_kg: 11, max_weight_kg: 16 }, basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 75, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["HIGH_ALERT"], sources: ["FDA"] },
    { drug: "dabigatran-etexilate", indication_id: "p2", label: "8–17 years, 16 to under 26 kg — 110 mg twice daily", route: "PO", population: { min_age_months: 96, max_age_months: 216, min_weight_kg: 16, max_weight_kg: 26 }, basis: "fixed", dose: { value: 110, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 110, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 110, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["HIGH_ALERT"], sources: ["FDA"] },
    { drug: "dabigatran-etexilate", indication_id: "p3", label: "8–17 years, 26 to under 41 kg — 150 mg twice daily", route: "PO", population: { min_age_months: 96, max_age_months: 216, min_weight_kg: 26, max_weight_kg: 41 }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 150, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 150, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["HIGH_ALERT", "Or two 75 mg capsules"], sources: ["FDA"] },
    { drug: "dabigatran-etexilate", indication_id: "p4", label: "8–17 years, 41 to under 61 kg — 185 mg twice daily", route: "PO", population: { min_age_months: 96, max_age_months: 216, min_weight_kg: 41, max_weight_kg: 61 }, basis: "fixed", dose: { value: 185, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 185, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "One 110 mg + one 75 mg capsule", renal: [], flags: ["HIGH_ALERT", "Give as one 110 mg + one 75 mg capsule"], sources: ["FDA"] },
    { drug: "dabigatran-etexilate", indication_id: "p5", label: "8–17 years, 61 to under 81 kg — 220 mg twice daily", route: "PO", population: { min_age_months: 96, max_age_months: 216, min_weight_kg: 61, max_weight_kg: 81 }, basis: "fixed", dose: { value: 220, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 220, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 110, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["HIGH_ALERT"], sources: ["FDA"] },
    { drug: "dabigatran-etexilate", indication_id: "p6", label: "8–17 years, 81 kg or more — 260 mg twice daily", route: "PO", population: { min_age_months: 96, max_age_months: 216, min_weight_kg: 81, max_weight_kg: null }, basis: "fixed", dose: { value: 260, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 260, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "One 150 mg + one 110 mg capsule", renal: [], flags: ["HIGH_ALERT", "Give as one 150 mg + one 110 mg capsule"], sources: ["FDA"] }
  ],
  sources: [["FDA", "PRADAXA (dabigatran etexilate) capsules — Boehringer Ingelheim, NDA022512, label effective 2025-06-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ba74e3cd-b06f-4145-b284-5fd6b84ff3c9"], ["FDA", "PRADAXA oral pellets — Boehringer Ingelheim, NDA214358, label effective 2025-06-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9ac0a64a-8666-45f7-9d4f-40fd894f7e6d"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Twice-daily oral thrombin inhibitor; dose depends on kidney function.",
    boxedTitle: "Premature discontinuation increases thrombotic events; spinal/epidural hematoma",
    boxed: "Premature discontinuation of any oral anticoagulant, including PRADAXA, increases the risk of thrombotic events. To reduce this risk, consider coverage with another anticoagulant if PRADAXA is discontinued for a reason other than pathological bleeding or completion of a course of therapy. Epidural or spinal hematomas may occur in patients treated with PRADAXA who are receiving neuraxial anesthesia or undergoing spinal puncture [FDA].",
    adult: [{ ind: "Non-valvular AF", text: "150 mg twice daily; 75 mg twice daily if CrCl 15–30.", calc: ["af"] }, { ind: "DVT/PE treatment or recurrence", text: "150 mg twice daily (CrCl over 30), after 5–10 days of parenteral anticoagulant.", calc: ["vte"] }, { ind: "After hip replacement", text: "110 mg on day 1, then 220 mg once daily." }],
    child: [{ ind: "VTE, 8–17 years (capsules)", text: "75–260 mg twice daily by weight band.", calc: ["p1", "p2", "p3", "p4", "p5", "p6"] }, { ind: "3 months to 11 years", text: "Oral pellets — use the label's age-and-weight table." }] }
});

/* ---------- DABRAFENIB (FDA TAFINLAR, Novartis, NDA202806/NDA217514, eff. 2026-05-20) ---------- */
FDB_M("dabrafenib", {
  inn: "Dabrafenib", atc: "L01EC02", cls: "BRAF kinase inhibitor",
  linked: [["BRAF V600 melanoma, NSCLC, anaplastic thyroid cancer, solid tumours, low-grade glioma", "[FDA]", ""]],
  forms: ["Capsules 50 mg, 75 mg [FDA].", "Tablets for oral suspension 10 mg [FDA]."],
  moa: "Inhibits mutant BRAF V600 kinase [FDA].",
  pk: ["Terminal half-life about 8 h; active metabolites 10–22 h [FDA].", "Highly protein bound — haemodialysis unlikely to help in overdose [FDA]."],
  ind: { adult: ["BRAF V600E melanoma (alone); with trametinib for BRAF V600E/K melanoma (including adjuvant), BRAF V600E NSCLC, anaplastic thyroid cancer and solid tumours [FDA]."], paed: ["Weight-based dosing in children from 1 year (with trametinib) [FDA]."] },
  adult: [["All indications", "150 mg twice daily, at least 1 h before or 2 h after a meal [FDA]."]],
  paed: { tiers: ["Capsules (26 kg or more): 26–37 kg 75 mg twice daily; 38–50 kg 100 mg twice daily; 51 kg or more 150 mg twice daily [FDA].", "Tablets for oral suspension: 8–9 kg 20 mg up to 46–50 kg 130 mg twice daily; 51 kg or more 150 mg twice daily (full table in label) [FDA]."], transition: "Adult dose at 51 kg or more [FDA].", calcNote: "Capsule weight bands only; under 26 kg use the suspension table." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Confirm BRAF V600 mutation with an approved test before starting [FDA]." },
  tox: { human: "No overdose information [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; dialysis unlikely to help [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Pyrexia, rash, fatigue, headache, arthralgia [NEP]."], serious: ["New primary skin cancers, haemorrhage, uveitis, serious pyrexia, hyperglycaemia [NEP]"] },
  monitor: ["Skin checks, temperature, glucose [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dabrafenib", indication_id: "adult", label: "Adult — 150 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dabrafenib", indication_id: "c1", label: "Child 26–37 kg — 75 mg twice daily", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: 26, max_weight_kg: 38 }, basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 75, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dabrafenib", indication_id: "c2", label: "Child 38–50 kg — 100 mg twice daily", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: 38, max_weight_kg: 51 }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 50, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dabrafenib", indication_id: "c3", label: "Child 51 kg or more — 150 mg twice daily", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: 51, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 150, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TAFINLAR (dabrafenib) capsules and tablets for oral suspension — Novartis, label effective 2026-05-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fee1e6b1-e1a5-4254-9f2e-a70e0f8dbdea"]],
  dose: { tagline: "Oral BRAF inhibitor, usually paired with trametinib.",
    adult: [{ ind: "BRAF V600 cancers", text: "150 mg twice daily on an empty stomach.", calc: ["adult"] }],
    child: [{ ind: "Children (capsules, 26 kg or more)", text: "75–150 mg twice daily by weight.", calc: ["c1", "c2", "c3"] }, { ind: "Under 26 kg", text: "Use tablets for oral suspension (label weight table)." }] }
});

/* ---------- DACARBAZINE (FDA, Hikma ANDA075812, eff. 2025-09-22) ---------- */
FDB_M("dacarbazine", {
  inn: "Dacarbazine", atc: "L01AX04", cls: "Alkylating agent (triazene)",
  linked: [["Metastatic malignant melanoma; Hodgkin lymphoma (second line, combination)", "[FDA]", ""]],
  forms: ["Powder for injection 200 mg vial; reconstitute with 19.7 mL sterile water → 10 mg/mL [FDA]."],
  moa: "Alkylating agent [NEP].",
  pk: ["Biphasic: initial half-life 19 min, terminal 5 h [FDA]."],
  ind: { adult: ["Metastatic malignant melanoma [FDA].", "Hodgkin's disease, second line, with other agents [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Melanoma", "2–4.5 mg/kg/day IV for 10 days, repeat every 4 weeks; or 250 mg/m²/day IV for 5 days, repeat every 3 weeks [FDA]."], ["Hodgkin's disease", "150 mg/m²/day for 5 days every 4 weeks; or 375 mg/m² on day 1 every 15 days, with other drugs [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "BSA dosing; needs height." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Hepatic necrosis reported [FDA].", preg: "Teratogenic in animals [FDA].", other: "IV only; protect from light; reconstituted vial 72 h at 4 °C or 8 h at room temperature [FDA]." },
  tox: { human: "Marrow depression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; monitor blood counts [FDA]." },
  contra: ["Hypersensitivity to dacarbazine [FDA]."],
  ae: { common: ["Anorexia, nausea, vomiting [NEP]."], serious: ["Haemopoietic depression [FDA]", "Hepatic necrosis [FDA]", "Anaphylaxis [NEP]"] },
  monitor: ["Blood counts; liver tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dacarbazine", indication_id: "mel", label: "Melanoma — 250 mg/m² daily for 5 days", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 250, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj (reconstituted)", strength: 10, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: ["Repeat every 3 weeks"], sources: ["FDA"] },
    { drug: "dacarbazine", indication_id: "hd", label: "Hodgkin — 375 mg/m² on day 1 (every 15 days)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 375, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj (reconstituted)", strength: 10, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: ["With other drugs"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dacarbazine for injection — Hikma (ANDA075812), label effective 2025-09-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0d81315c-7021-4091-b703-ad135390c936"]],
  dose: { tagline: "IV alkylator for melanoma and Hodgkin regimens.",
    boxedTitle: "Hemopoietic depression, hepatic necrosis, carcinogenic and teratogenic",
    boxed: "It is recommended that dacarbazine be administered under the supervision of a qualified physician experienced in the use of cancer chemotherapeutic agents. Hemopoietic depression is the most common toxicity with dacarbazine. Hepatic necrosis has been reported. Studies have demonstrated this agent to have a carcinogenic and teratogenic effect when used in animals. In treatment of each patient, the physician must weigh carefully the possibility of achieving therapeutic benefit against the risk of toxicity [FDA].",
    adult: [{ ind: "Melanoma", text: "250 mg/m²/day for 5 days every 3 weeks (or 2–4.5 mg/kg/day for 10 days every 4 weeks).", calc: ["mel"] }, { ind: "Hodgkin's disease", text: "375 mg/m² day 1 every 15 days, or 150 mg/m²/day for 5 days every 4 weeks.", calc: ["hd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DACOMITINIB (FDA VIZIMPRO, Pfizer, NDA211288, eff. 2026-06-23) ---------- */
FDB_M("dacomitinib", {
  inn: "Dacomitinib", atc: "L01EB07", cls: "EGFR tyrosine kinase inhibitor (second generation, irreversible)",
  linked: [["EGFR-mutant metastatic NSCLC — first line", "[FDA]", ""]],
  forms: ["Tablets 15 mg, 30 mg, 45 mg [FDA]."],
  moa: "Irreversible pan-HER (EGFR/HER2/HER4) kinase inhibitor [NEP].",
  pk: ["Half-life about 70 h [FDA]."],
  ind: { adult: ["First-line metastatic NSCLC with EGFR exon 19 deletion or exon 21 L858R mutation [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["NSCLC", "45 mg once daily with or without food until progression or unacceptable toxicity [FDA]."], ["Dose reductions", "First 30 mg, then 15 mg once daily [FDA]."], ["Missed or vomited dose", "Do not make up; take the next scheduled dose [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Interstitial lung disease (any grade): stop permanently [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, rash, paronychia, stomatitis [NEP]."], serious: ["Interstitial lung disease [FDA]", "Severe diarrhoea, dermatologic reactions [NEP]"] },
  monitor: ["Respiratory symptoms, stool frequency, skin [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "VIZIMPRO (dacomitinib) tablets — Pfizer, label effective 2026-06-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4ab27d2f-e385-4e9c-b324-fa69c10b855a"]],
  dose: { tagline: "Once-daily EGFR inhibitor for EGFR-mutant lung cancer.",
    adult: [{ ind: "EGFR-mutant NSCLC", text: "45 mg once daily; reduce to 30 mg, then 15 mg for toxicity." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DACTINOMYCIN (FDA, Eugia ANDA203385, eff. 2024-06-18) ---------- */
FDB_M("dactinomycin", {
  inn: "Dactinomycin", atc: "L01DA01", cls: "Cytotoxic antibiotic (actinomycin)",
  linked: [["Wilms tumour, rhabdomyosarcoma, Ewing sarcoma, testicular cancer, gestational trophoblastic neoplasia", "[FDA]", ""]],
  forms: ["Powder for injection 500 mcg single-dose vial [FDA]."],
  moa: "Binds DNA and blocks RNA synthesis [NEP].",
  pk: ["Do not breastfeed for 14 days after the last dose (limited half-life data) [FDA]."],
  ind: { adult: ["Wilms tumour, rhabdomyosarcoma, Ewing sarcoma, metastatic non-seminomatous testicular cancer (combination regimens) [FDA].", "Gestational trophoblastic neoplasia (single agent or combination) [FDA].", "Regional perfusion with melphalan for locally recurrent solid tumours [FDA]."], paed: ["Wilms tumour, rhabdomyosarcoma, Ewing sarcoma [FDA]."] },
  adult: [["Wilms tumour", "45 mcg/kg IV once every 3–6 weeks for up to 26 weeks [FDA]."], ["Rhabdomyosarcoma", "15 mcg/kg IV daily for 5 days every 3–9 weeks for up to 112 weeks [FDA]."], ["Ewing sarcoma", "1250 mcg/m² IV every 3 weeks for 51 weeks [FDA]."], ["Testicular cancer", "1000 mcg/m² IV every 3 weeks with cisplatin-based therapy [FDA]."], ["GTN", "Low-risk: 12 mcg/kg IV daily for 5 days; high-risk: 500 mcg IV days 1 and 2 every 2 weeks (combination) [FDA]."], ["Regional perfusion", "Lower limb or pelvis 50 mcg/kg; upper limb 35 mcg/kg, once, with melphalan [FDA]."]],
  paed: { tiers: ["Same mcg/kg and mcg/m² regimens as adults [FDA]."], transition: "Same [FDA].", calcNote: "Unit is micrograms (mcg) — check twice." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Highly toxic; extravasation causes severe tissue damage [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, vomiting, mucositis, alopecia, myelosuppression [NEP]."], serious: ["Hepatic veno-occlusive disease, severe myelosuppression, extravasation necrosis, secondary malignancy [NEP]"] },
  monitor: ["Blood counts, liver and kidney function [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dactinomycin", indication_id: "wilms", label: "Wilms tumour — 45 mcg/kg every 3–6 weeks", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 45, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 500, unit: "mcg/vial" }], rounding: "Nearest mcg", renal: [], flags: ["Micrograms — not mg"], sources: ["FDA"] },
    { drug: "dactinomycin", indication_id: "rms", label: "Rhabdomyosarcoma — 15 mcg/kg daily × 5 days", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mcg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 500, unit: "mcg/vial" }], rounding: "Nearest mcg", renal: [], flags: ["Micrograms — not mg"], sources: ["FDA"] },
    { drug: "dactinomycin", indication_id: "ewing", label: "Ewing sarcoma — 1250 mcg/m² every 3 weeks", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 1250, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 500, unit: "mcg/vial" }], rounding: "Nearest mcg", renal: [], flags: ["Micrograms — not mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dactinomycin for injection — Eugia US (ANDA203385), label effective 2024-06-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5da55538-2602-4704-a9da-603c9f7ff7dc"]],
  dose: { tagline: "Microgram-dosed cytotoxic for paediatric solid tumours and GTN.",
    adult: [{ ind: "Wilms / rhabdomyosarcoma / Ewing", text: "45 mcg/kg every 3–6 weeks; 15 mcg/kg daily × 5; 1250 mcg/m² every 3 weeks.", calc: ["wilms", "rms", "ewing"] }, { ind: "GTN", text: "12 mcg/kg daily for 5 days (low risk)." }],
    child: [{ ind: "Children", text: "Same mcg/kg and mcg/m² regimens.", calc: ["wilms", "rms", "ewing"] }] }
});

/* ---------- DALBAVANCIN (FDA DALVANCE, Allergan, NDA021883, eff. 2025-01-13) ---------- */
FDB_M("dalbavancin", {
  inn: "Dalbavancin", atc: "J01XA04", cls: "Lipoglycopeptide antibacterial (long-acting)",
  linked: [["Skin and soft tissue infection — adults", "ABSSSI due to Gram-positive bacteria [FDA]", "ssti-adult"], ["Skin and soft tissue infection — children", "[FDA]", "ssti-child"]],
  forms: ["Powder for injection 500 mg vial [FDA]."],
  moa: "Binds the D-alanyl-D-alanine terminus of cell-wall precursors, blocking cell-wall synthesis [NEP].",
  pk: ["Very long terminal half-life (about 346 h) — one dose or two doses a week apart treat the infection [FDA]."],
  ind: { adult: ["Acute bacterial skin and skin-structure infection (ABSSSI) caused by susceptible Gram-positive organisms [FDA]."], paed: ["ABSSSI from birth [FDA]."] },
  adult: [["ABSSSI, CrCl 30 or more or on regular haemodialysis", "1500 mg IV once, or 1000 mg then 500 mg one week later; infuse over 30 min [FDA]."], ["CrCl under 30, not on regular haemodialysis", "1125 mg once, or 750 mg then 375 mg one week later [FDA]."]],
  paed: { tiers: ["Birth to under 6 years: 22.5 mg/kg once (max 1500 mg) [FDA].", "6 to under 18 years: 18 mg/kg once (max 1500 mg) [FDA]."], transition: "Adult dosing from 18 years [FDA].", calcNote: "Single dose. Children with CLcr under 30 mL/min/1.73 m²: not studied." },
  adj: { renal: "Adults with CrCl under 30 not on regular haemodialysis: 1125 mg (or 750 + 375 mg); on regular haemodialysis: no change [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Infuse over 30 min to reduce infusion reactions [FDA]." },
  tox: { human: "No dose-limiting toxicity seen up to 4500 mg cumulative in volunteers [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Observation and supportive care [FDA]." },
  contra: ["Known hypersensitivity to dalbavancin [FDA]."],
  ae: { common: ["Nausea, headache, diarrhoea [NEP]."], serious: ["Hypersensitivity (caution with glycopeptide allergy), infusion reactions, ALT rise, C. difficile diarrhoea [NEP]"] },
  monitor: ["Clinical response; liver tests if symptoms [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dalbavancin", indication_id: "adult", label: "Adult ABSSSI — 1500 mg once", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1500, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "reconstituted (500 mg + 25 mL), before dilution", strength: 20, unit: "mg/mL" }, { form: "vial", strength: 500, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 0.5 }, renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 1125 }], renal_note: "CrCl under 30 and not on regular haemodialysis: 1125 mg. On regular haemodialysis use the full 1500 mg [FDA]", flags: ["Or 1000 mg, then 500 mg one week later"], sources: ["FDA"] },
    { drug: "dalbavancin", indication_id: "c0", label: "Birth to 5 years — 22.5 mg/kg once (max 1500 mg)", route: "IV", population: { min_age_months: 0, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 22.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "reconstituted (500 mg + 25 mL), before dilution", strength: 20, unit: "mg/mL" }, { form: "vial", strength: 500, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 0.5 }, renal: [], renal_note: "Children with CLcr under 30 mL/min/1.73 m²: dose not studied [FDA]", flags: [], sources: ["FDA"] },
    { drug: "dalbavancin", indication_id: "c6", label: "6–17 years — 18 mg/kg once (max 1500 mg)", route: "IV", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 18, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "reconstituted (500 mg + 25 mL), before dilution", strength: 20, unit: "mg/mL" }, { form: "vial", strength: 500, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 0.5 }, renal: [], renal_note: "Children with CLcr under 30 mL/min/1.73 m²: dose not studied [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "DALVANCE (dalbavancin) for injection — Allergan, label effective 2025-01-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4b4674d8-4d1e-4728-8465-d42ada33fa5c"]],
  dose: { tagline: "One-dose IV lipoglycopeptide for Gram-positive skin infection.",
    adult: [{ ind: "ABSSSI", text: "1500 mg once over 30 min (or 1000 mg + 500 mg a week later); 1125 mg if CrCl under 30 and not on haemodialysis.", calc: ["adult"] }],
    child: [{ ind: "Birth to 5 years", text: "22.5 mg/kg once (max 1500 mg).", calc: ["c0"] }, { ind: "6–17 years", text: "18 mg/kg once (max 1500 mg).", calc: ["c6"] }] }
});

/* ---------- DALTEPARIN (FDA FRAGMIN, Pfizer, NDA020287, eff. 2025-09-30) ---------- */
FDB_M("dalteparin", {
  inn: "Dalteparin", atc: "B01AB04", cls: "Low molecular weight heparin", risk: "High-alert — anticoagulants, including low molecular weight heparin, are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Venous thromboembolism — adults", "Prophylaxis and extended treatment in cancer [FDA]", "vte-adult"], ["Acute coronary syndrome — adults", "Unstable angina / non-Q-wave MI with aspirin [FDA]", "acs-adult"]],
  forms: ["Prefilled syringes 2500, 5000, 7500, 12,500, 15,000, 18,000 units [FDA].", "Graduated syringe 10,000 units/mL [FDA]."],
  moa: "Enhances antithrombin inhibition of factor Xa and thrombin [NEP].",
  pk: ["Anti-Xa half-life longer in haemodialysis patients and with age [FDA]."],
  ind: { adult: ["Unstable angina and non-Q-wave MI (with aspirin) [FDA].", "DVT prophylaxis: abdominal surgery, hip replacement, immobile medical patients [FDA].", "Extended treatment of symptomatic VTE in cancer (6 months) [FDA]."], paed: ["Treatment of symptomatic VTE from birth (gestational age at least 35 weeks) [FDA]."] },
  adult: [["Unstable angina / non-Q-wave MI", "120 units/kg SC every 12 h (max 10,000 units per dose) with aspirin, usually 5–8 days [FDA]."], ["Abdominal surgery prophylaxis", "2500 or 5000 units SC once daily (schedules in label) [FDA]."], ["Hip replacement prophylaxis", "Post-op start: 2500 units 4–8 h after surgery, then 5000 units daily; pre-op options in label [FDA]."], ["Medical patients", "5000 units SC once daily [FDA]."], ["Cancer VTE", "Month 1: 200 units/kg once daily (weight-band syringes: 56 kg or less 10,000; 57–68 kg 12,500; 69–82 kg 15,000; 83 kg or more 18,000 units). Months 2–6: about 150 units/kg once daily, max 18,000 units/day [FDA]."]],
  paed: { tiers: ["Birth (GA 35 weeks or more) to under 2 years: 150 units/kg SC twice daily [FDA].", "2 to under 8 years: 125 units/kg twice daily [FDA].", "8 to under 17 years: 100 units/kg twice daily [FDA].", "Check anti-Xa 4 h after a dose (before the 4th dose); adjust by 25 units/kg to target 0.5–1 units/mL [FDA]."], transition: "Adult regimens from 17 years [FDA].", calcNote: "Starting doses only — titrate to anti-Xa." },
  adj: { renal: "Severe impairment: monitor anti-Xa (accumulation) [NEP].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Not for IM use; do not mix with other injections [FDA]. Thrombocytopenia in cancer or children: label dose reductions [FDA]." },
  tox: { human: "Haemorrhage [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Slow IV protamine 1 mg per 100 anti-Xa units given; a second 0.5 mg per 100 units if aPTT still long at 2–4 h [FDA]." },
  contra: ["Active major bleeding [FDA].", "History of heparin-induced thrombocytopenia [FDA].", "Hypersensitivity to dalteparin [FDA].", "Treatment doses in patients having epidural/neuraxial anaesthesia [FDA]."],
  ae: { common: ["Bleeding, injection-site haematoma, raised transaminases [NEP]."], serious: ["Spinal/epidural haematoma [FDA]", "Major bleeding [FDA]", "Heparin-induced thrombocytopenia [NEP]"] },
  monitor: ["Platelets, haemoglobin; anti-Xa in children, renal failure, pregnancy or extremes of weight [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dalteparin", indication_id: "ua", label: "Unstable angina / NSTEMI — 120 units/kg every 12 h (max 10,000)", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 120, unit: "units", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 10000, unit: "units" }, weight_basis: "actual", formulations: [{ form: "syringe", strength: 10000, unit: "units/mL" }], rounding: "Nearest 100 units", renal: [], flags: ["HIGH_ALERT", "With aspirin"], sources: ["FDA"] },
    { drug: "dalteparin", indication_id: "c0", label: "VTE treatment, birth to under 2 years — 150 units/kg twice daily", route: "SC", population: { min_age_months: 0, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 150, unit: "units", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "syringe", strength: 10000, unit: "units/mL" }], rounding: "Nearest 10 units", renal: [], flags: ["HIGH_ALERT", "Gestational age at least 35 weeks", "Titrate to anti-Xa 0.5–1 units/mL"], sources: ["FDA"] },
    { drug: "dalteparin", indication_id: "c2", label: "VTE treatment, 2–7 years — 125 units/kg twice daily", route: "SC", population: { min_age_months: 24, max_age_months: 96, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 125, unit: "units", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "syringe", strength: 10000, unit: "units/mL" }], rounding: "Nearest 10 units", renal: [], flags: ["HIGH_ALERT", "Titrate to anti-Xa 0.5–1 units/mL"], sources: ["FDA"] },
    { drug: "dalteparin", indication_id: "c8", label: "VTE treatment, 8–16 years — 100 units/kg twice daily", route: "SC", population: { min_age_months: 96, max_age_months: 204, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 100, unit: "units", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "syringe", strength: 10000, unit: "units/mL" }], rounding: "Nearest 10 units", renal: [], flags: ["HIGH_ALERT", "Titrate to anti-Xa 0.5–1 units/mL"], sources: ["FDA"] }
  ],
  sources: [["FDA", "FRAGMIN (dalteparin sodium) injection — Pfizer, label effective 2025-09-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23527b8b-9b28-4e6d-9751-33b143975ac7"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Once- or twice-daily LMWH for VTE prophylaxis, cancer VTE and ACS.",
    boxedTitle: "Spinal/epidural hematomas",
    boxed: "Epidural or spinal hematomas may occur in patients who are anticoagulated with low molecular weight heparins (LMWH) or heparinoids and are receiving neuraxial anesthesia or undergoing spinal puncture. These hematomas may result in long-term or permanent paralysis. Consider these risks when scheduling patients for spinal procedures [FDA].",
    adult: [{ ind: "Unstable angina / NSTEMI", text: "120 units/kg every 12 h (max 10,000 units) with aspirin.", calc: ["ua"] }, { ind: "DVT prophylaxis", text: "2500–5000 units once daily (surgery or medical)." }, { ind: "Cancer-associated VTE", text: "200 units/kg daily for month 1, then 150 units/kg daily (max 18,000 units/day)." }],
    child: [{ ind: "VTE treatment (start)", text: "150 / 125 / 100 units/kg twice daily by age; titrate to anti-Xa.", calc: ["c0", "c2", "c8"] }] }
});

/* ---------- DANAZOL (FDA, Chartwell ANDA077246, eff. 2024-10-10) ---------- */
FDB_M("danazol", {
  inn: "Danazol", atc: "G03XA01", cls: "Synthetic androgen (pituitary gonadotropin inhibitor)",
  linked: [["Endometriosis; hereditary angioedema prophylaxis", "[FDA]", ""]],
  forms: ["Capsules 50 mg, 100 mg, 200 mg [FDA]."],
  moa: "Suppresses the pituitary–ovarian axis; raises C1-esterase inhibitor levels [NEP].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Endometriosis amenable to hormonal management [FDA].", "Prevention of hereditary angioedema attacks (males and females) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Endometriosis, moderate–severe", "800 mg/day in two divided doses; titrate down to keep amenorrhoea; 3–6 months (up to 9) [FDA]."], ["Endometriosis, mild", "200–400 mg/day in two divided doses [FDA]."], ["Hereditary angioedema", "Start 200 mg two or three times daily; after response, reduce by 50% or less every 1–3 months [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Markedly impaired renal function: contraindicated [FDA].", hepatic: "Markedly impaired hepatic function: contraindicated [FDA].", preg: "Contraindicated — androgenic effects on the female fetus; exclude pregnancy and use non-hormonal contraception [FDA].", other: "Start during menstruation [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Undiagnosed abnormal genital bleeding [FDA].", "Markedly impaired hepatic, renal or cardiac function [FDA].", "Pregnancy; breastfeeding [FDA].", "Porphyria [FDA].", "Androgen-dependent tumour [FDA].", "Active or past thrombosis/thromboembolism [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Weight gain, acne, oily skin, hirsutism, voice deepening, menstrual changes [NEP]."], serious: ["Thromboembolism and stroke (boxed) [FDA]", "Peliosis hepatis and liver adenoma (boxed) [FDA]", "Benign intracranial hypertension (boxed) [FDA]"] },
  monitor: ["Liver tests, lipids, signs of thrombosis and raised intracranial pressure [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Danazol capsules — Chartwell RX (ANDA077246), label effective 2024-10-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=55ad6325-16f6-4f0c-a1dc-734847052d0b"]],
  dose: { tagline: "Androgenic hormone for endometriosis and angioedema prevention.",
    boxedTitle: "Pregnancy; thromboembolism; peliosis hepatis; intracranial hypertension",
    boxed: "Use of danazol in pregnancy is contraindicated. A sensitive test (e.g., beta subunit test if available) capable of determining early pregnancy is recommended immediately prior to start of therapy. Additionally a non-hormonal method of contraception should be used during therapy. Thromboembolism, thrombotic and thrombophlebitic events including sagittal sinus thrombosis and life-threatening or fatal strokes have been reported [FDA].",
    adult: [{ ind: "Endometriosis", text: "200–800 mg/day in two divided doses for 3–6 months." }, { ind: "Hereditary angioedema", text: "200 mg two or three times daily, then taper to the lowest effective dose." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DANICOPAN (FDA VOYDEYA, Alexion, NDA218037, eff. 2026-05-12) ---------- */
FDB_M("danicopan", {
  inn: "Danicopan", atc: "L04AJ09", cls: "Complement factor D inhibitor",
  linked: [["Paroxysmal nocturnal haemoglobinuria — extravascular haemolysis (add-on)", "[FDA]", ""]],
  forms: ["Tablets 50 mg, 100 mg [FDA]."],
  moa: "Inhibits complement factor D (alternative pathway) [FDA].",
  pk: ["Half-life about 7 h [FDA]."],
  ind: { adult: ["Add-on to ravulizumab or eculizumab for extravascular haemolysis in adults with PNH — not for monotherapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["PNH (add-on)", "150 mg three times daily; may increase to 200 mg three times daily if Hb rise is under 2 g/dL after 4 weeks, transfusion was needed, or response is inadequate [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Vaccinate against meningococcus (A, C, W, Y, B) and pneumococcus at least 2 weeks before; prescribers enrol in the REMS [FDA]. Stopping without taper raised ALT in volunteers [FDA]." },
  tox: { human: "Transient ALT rise after stopping high doses without taper [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; dialysis effect unknown [FDA]." },
  contra: ["Starting in a patient with unresolved serious infection by encapsulated bacteria (N. meningitidis, S. pneumoniae, H. influenzae type b) [FDA]."],
  ae: { common: ["Headache, raised liver enzymes [NEP]."], serious: ["Serious meningococcal and other encapsulated-bacterial infections [FDA]"] },
  monitor: ["Signs of infection; Hb; liver tests [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "VOYDEYA (danicopan) tablets — Alexion, label effective 2026-05-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ab8d1cbd-a28b-4d49-82ab-5c7460719ac7"]],
  dose: { tagline: "Oral factor D inhibitor added to C5 blockade in PNH.",
    boxedTitle: "Serious infections caused by encapsulated bacteria",
    boxed: "VOYDEYA, a complement inhibitor, increases the risk of serious infections, especially those caused by encapsulated bacteria, such as Neisseria meningitidis, Streptococcus pneumoniae, and Haemophilus influenzae type B. Life-threatening and fatal infections with encapsulated bacteria have occurred in patients treated with complement inhibitors. These infections may become rapidly life-threatening or fatal if not recognized and treated early. Complete or update vaccination for encapsulated bacteria specifically, Neisseria meningitidis and Streptococcus pneumoniae at least 2 weeks prior to the first dose of VOYDEYA, unless the risks of delaying therapy with VOYDEYA outweigh the risk of developing a serious infection [FDA].",
    adult: [{ ind: "PNH (with ravulizumab or eculizumab)", text: "150 mg three times daily; up to 200 mg three times daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DANTROLENE (FDA oral dantrolene sodium NDA017443 + IV REVONTO ANDA078378) ---------- */
FDB_M("dantrolene", {
  inn: "Dantrolene", atc: "M03CA01", cls: "Direct-acting skeletal muscle relaxant (ryanodine receptor antagonist)",
  linked: [["Malignant hyperthermia (treatment and prevention)", "[FDA]", ""], ["Chronic spasticity (spinal cord injury, stroke, cerebral palsy, MS)", "[FDA]", "stroke-adult"]],
  forms: ["Capsules 25 mg, 50 mg, 100 mg [FDA].", "IV powder 20 mg vial (with 3 g mannitol); reconstitute with 60 mL sterile water without bacteriostatic agent — not with dextrose or saline; use within 6 h, protect from light [FDA]."],
  moa: "Reduces calcium release from the sarcoplasmic reticulum of skeletal muscle [FDA].",
  pk: ["IV half-life about 4–8 h [FDA].", "Oral biologic half-life about 8 h in adults [FDA]."],
  ind: { adult: ["Malignant hyperthermia crisis (IV) and pre-/peri-operative prevention in susceptible patients [FDA].", "Chronic spasticity from upper motor neuron disorders (oral) — not for rheumatic muscle spasm [FDA]."], paed: ["Malignant hyperthermia: same mg/kg as adults [FDA].", "Spasticity: weight-based titration (oral) [FDA]."] },
  adult: [["Malignant hyperthermia crisis", "Rapid IV push from at least 1 mg/kg, continued until signs subside or a cumulative 10 mg/kg is reached; repeat if signs return [FDA]."], ["MH prevention (IV)", "2.5 mg/kg infused over about 1 h, starting about 1.25 h before anaesthesia [FDA]."], ["MH prevention (oral)", "4–8 mg/kg/day in 3–4 divided doses for 1–2 days before surgery; last dose 3–4 h before [FDA]."], ["Spasticity (oral)", "25 mg once daily ×7 days → 25 mg three times daily ×7 → 50 mg three times daily ×7 → 100 mg three times daily; max 100 mg four times daily; stop if no benefit in 45 days [FDA]."]],
  paed: { tiers: ["Malignant hyperthermia: same mg/kg doses as adults [FDA].", "Spasticity: 0.5 mg/kg once daily ×7 days → 0.5 mg/kg three times daily ×7 → 1 mg/kg three times daily ×7 → 2 mg/kg three times daily; max 100 mg four times daily [FDA]."], transition: "Same [FDA].", calcNote: "Calculator gives the MH bolus and the IV prophylaxis dose; 20 mg vial = 60 mL." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Active liver disease (hepatitis, cirrhosis): contraindicated for oral long-term use [FDA].", preg: "Not established in primary source. [NEP]", other: "Hepatotoxicity risk higher in women, over 35 years and with doses of 800 mg/day or more [FDA]." },
  tox: { human: "Muscle weakness, altered consciousness, vomiting, diarrhoea, crystalluria [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; large IV fluid volumes to prevent crystalluria; airway support; ECG monitoring [FDA]." },
  contra: ["Oral: active hepatic disease [FDA].", "Oral: where spasticity is needed for posture, balance or function [FDA]."],
  ae: { common: ["Drowsiness, dizziness, weakness, malaise, diarrhoea [NEP]."], serious: ["Hepatotoxicity — fatal hepatitis (boxed, oral) [FDA]", "Respiratory muscle weakness with IV use [NEP]"] },
  monitor: ["Liver tests at baseline and during oral therapy; during MH: temperature, end-tidal CO₂, potassium, CK, urine output [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dantrolene", indication_id: "mh", label: "Malignant hyperthermia — 1 mg/kg rapid IV push (repeat)", route: "IV", population: { min_age_months: 0, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (20 mg + 60 mL water)", strength: 0.3333, unit: "mg/mL" }, { form: "vial", strength: 20, unit: "mg/vial" }], rounding: "Nearest mg", renal: [], flags: ["Repeat until signs subside — maximum cumulative 10 mg/kg", "Each 20 mg vial is mixed with 60 mL sterile water"], sources: ["FDA"] },
    { drug: "dantrolene", indication_id: "pro", label: "MH prevention — 2.5 mg/kg IV over about 1 h", route: "IV", population: { min_age_months: 0, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (20 mg + 60 mL water)", strength: 0.3333, unit: "mg/mL" }, { form: "vial", strength: 20, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 1 }, renal: [], flags: ["Start about 1.25 h before anaesthesia"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dantrolene sodium capsules — NDA017443 (Bryant Ranch repackager), label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db715aef-83ca-4608-befa-8288ab4adeea"], ["FDA", "REVONTO (dantrolene sodium) for injection — ANDA078378 (ProPharma), label effective 2025-12-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3edcfad5-00ad-7587-e063-6394a90addf3"]],
  dose: { tagline: "The antidote for malignant hyperthermia; oral form for spasticity.",
    boxedTitle: "Hepatotoxicity (oral)",
    boxed: "Dantrolene sodium has a potential for hepatotoxicity, and should not be used in conditions other than those recommended. Symptomatic hepatitis (fatal and non-fatal) has been reported at various dose levels of the drug. The incidence reported in patients taking up to 400 mg/day is much lower than in those taking doses of 800 mg or more per day [FDA].",
    adult: [{ ind: "Malignant hyperthermia", text: "1 mg/kg rapid IV push, repeat to a cumulative 10 mg/kg.", calc: ["mh"] }, { ind: "MH prevention", text: "2.5 mg/kg IV over 1 h before anaesthesia.", calc: ["pro"] }, { ind: "Spasticity", text: "25 mg daily, titrate weekly to 100 mg three times daily (max 100 mg four times daily)." }],
    child: [{ ind: "Malignant hyperthermia", text: "Same mg/kg as adults.", calc: ["mh", "pro"] }, { ind: "Spasticity", text: "0.5 mg/kg daily, titrate weekly to 2 mg/kg three times daily (max 100 mg four times daily)." }] }
});

/* ---------- DAPAGLIFLOZIN (FDA FARXIGA, AstraZeneca, NDA202293, eff. 2026-07-10) ---------- */
FDB_M("dapagliflozin", {
  inn: "Dapagliflozin", atc: "A10BK01", cls: "SGLT2 inhibitor",
  linked: [["Type 2 diabetes — adults", "Glycaemic control; HF risk reduction [FDA] [BT-NEML]", "dm-adult"], ["Heart failure — adults", "Reduce CV death and HF hospitalisation [FDA]", "hf-adult"], ["Chronic kidney disease — adults", "Slow eGFR decline [FDA]", "ckd-adult"], ["Type 2 diabetes — children 10 years and older", "[FDA]", "dm-child"]],
  forms: ["Tablets 5 mg, 10 mg [FDA]; 10 mg in Bhutan [BT-NEML]."],
  moa: "Blocks sodium–glucose co-transporter 2 in the proximal tubule, increasing urinary glucose loss [NEP].",
  pk: ["Terminal half-life about 12.9 h [FDA]."],
  ind: { adult: ["CKD at risk of progression; heart failure; T2DM with CV disease or risk factors (HF hospitalisation) [FDA].", "Glycaemic control in T2DM [FDA]."], paed: ["Glycaemic control in T2DM from 10 years [FDA]."] },
  adult: [["Glycaemic control", "5 mg once daily; may increase to 10 mg [FDA]."], ["HF, CKD, CV risk reduction", "10 mg once daily [FDA]."]],
  paed: { tiers: ["10 years and older, T2DM: 5 mg once daily, up to 10 mg [FDA]."], transition: "Same as adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Do not start if eGFR under 25; may continue 10 mg if eGFR falls below 25 on treatment. Not recommended for glycaemic control if eGFR under 45 (ineffective) [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Correct volume depletion first; withhold at least 3 days before surgery or prolonged fasting [FDA]. Not for type 1 diabetes glycaemic control [FDA]." },
  tox: { human: "No overdoses reported in trials [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis not studied [FDA]." },
  contra: ["Serious hypersensitivity to dapagliflozin (anaphylaxis, angioedema) [FDA]."],
  ae: { common: ["Genital fungal infection, urinary tract infection, increased urination [NEP]."], serious: ["Ketoacidosis (including euglycaemic) [NEP]", "Volume depletion [FDA]", "Necrotising fasciitis of the perineum (Fournier's) [NEP]"] },
  monitor: ["Kidney function before starting and as indicated; volume status [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: dapagliflozin 10 mg tablet [BT-NEML].", strengths: "10 mg.", stg: "Not specified in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "dapagliflozin", indication_id: "adult", label: "HF / CKD / CV risk — 10 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 24.999, action: "avoid", text: "eGFR under 25: do not start (may continue 10 mg if already on it)" }], renal_note: "Label uses eGFR; for glycaemic control it is not recommended if eGFR is under 45 [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "FARXIGA (dapagliflozin) tablets — AstraZeneca (A-S Medication repackager), label effective 2026-07-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01f90c94-71cb-4a1f-81ff-8004b850529b"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Once-daily SGLT2 inhibitor for diabetes, heart failure and CKD.",
    adult: [{ ind: "Heart failure, CKD, CV risk", text: "10 mg once daily.", calc: ["adult"] }, { ind: "Type 2 diabetes (glucose)", text: "5 mg once daily, up to 10 mg." }],
    child: [{ ind: "T2DM, 10 years and older", text: "5 mg once daily, up to 10 mg." }] }
});

/* ---------- DAPRODUSTAT (FDA JESDUVROQ, GSK, NDA216951, eff. 2023-08-30) ---------- */
FDB_M("daprodustat", {
  inn: "Daprodustat", atc: "B03XA07", cls: "Hypoxia-inducible factor prolyl hydroxylase (HIF-PH) inhibitor",
  linked: [["Anaemia of CKD on dialysis — adults", "[FDA]", "ckd-adult"]],
  forms: ["Tablets 1, 2, 4, 6, 8 mg (and higher strengths in label) [FDA]."],
  moa: "Inhibits HIF prolyl hydroxylase, raising endogenous erythropoietin [FDA].",
  pk: ["Terminal half-life about 1–4 h [FDA].", "CYP2C8 substrate — strong inhibitors (gemfibrozil) contraindicated [FDA]."],
  ind: { adult: ["Anaemia of CKD in adults on dialysis for at least 4 months [FDA].", "Not for patients not on dialysis, or as a substitute for transfusion [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Anaemia of CKD on dialysis", "Once daily; starting dose by baseline Hb, liver function and concomitant drugs (label table); use the lowest dose that reduces transfusion; do not target Hb above 11 g/dL [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Table-based starting dose — no calculator." },
  adj: { renal: "For dialysis patients only [FDA].", hepatic: "Check liver tests before starting; starting dose depends on liver function [FDA].", preg: "Not established in primary source. [NEP]", other: "Give iron when ferritin under 100 ng/mL or TSAT under 20% [FDA]." },
  tox: { human: "Headache, nausea [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; not removed by haemodialysis [FDA]." },
  contra: ["Strong CYP2C8 inhibitors such as gemfibrozil [FDA].", "Uncontrolled hypertension [FDA]."],
  ae: { common: ["Hypertension, thrombotic vascular events, abdominal pain [NEP]."], serious: ["Death, MI, stroke, VTE, vascular access thrombosis (boxed) [FDA]", "Gastrointestinal erosion [NEP]"] },
  monitor: ["Hb every 2 weeks at first, then monthly; BP; iron; liver tests [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "JESDUVROQ (daprodustat) tablets — GlaxoSmithKline, label effective 2023-08-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d82aa06e-5a33-4844-99b7-4701313455a4"]],
  dose: { tagline: "Oral HIF-PH inhibitor for anaemia in dialysis patients.",
    boxedTitle: "Increased risk of death, MI, stroke, VTE and vascular access thrombosis",
    boxed: "JESDUVROQ increases the risk of thrombotic vascular events, including major adverse cardiovascular events (MACE). Targeting a hemoglobin level greater than 11 g/dL is expected to further increase the risk of death and arterial venous thrombotic events, as occurs with erythropoietin stimulating agents (ESAs), which also increase erythropoietin levels. No trial has identified a hemoglobin target level, dose of JESDUVROQ, or dosing strategy that does not increase these risks. Use the lowest dose of JESDUVROQ sufficient to reduce the need for red blood cell transfusions [FDA].",
    adult: [{ ind: "Anaemia of CKD on dialysis", text: "Once daily; starting dose from the label table (Hb, liver, CYP2C8); keep Hb no higher than 11 g/dL." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DAPSONE (FDA oral tablets ANDA086841 + ACZONE gel 7.5% NDA207154) ---------- */
FDB_M("dapsone", {
  inn: "Dapsone", atc: "J04BA02 (oral); D10AX05 (topical)", cls: "Sulfone antibacterial (anti-leprosy)",
  linked: [["Leprosy (with rifampicin ± clofazimine)", "[FDA] [BT-NEML]", ""], ["Dermatitis herpetiformis", "[FDA]", ""], ["Acne vulgaris (7.5% gel)", "[FDA]", ""]],
  forms: ["Tablets 25 mg, 100 mg (US) [FDA]; 50 mg in Bhutan [BT-NEML].", "Gel 7.5% (75 mg/g) for acne [FDA]."],
  moa: "Inhibits bacterial folate synthesis (like sulfonamides); anti-inflammatory action on neutrophils [NEP].",
  pk: ["Levels vary with acetylator status [FDA]."],
  ind: { adult: ["Leprosy, as part of multidrug therapy [FDA].", "Dermatitis herpetiformis [FDA].", "Acne vulgaris — 7.5% gel from 9 years [FDA]."], paed: ["Leprosy and dermatitis herpetiformis: correspondingly smaller doses [FDA].", "Acne gel from 9 years [FDA]."] },
  adult: [["Leprosy (MDT)", "100 mg daily without interruption, with one or more other anti-leprosy drugs [FDA]."], ["Dermatitis herpetiformis", "Start 50 mg daily; titrate within 50–300 mg daily; reduce to the lowest maintenance dose [FDA]."], ["Acne (7.5% gel)", "Pea-sized amount to the whole face once daily; reassess at 12 weeks [FDA]."]],
  paed: { tiers: ["Leprosy and DH: 'correspondingly smaller doses' — no mg/kg dose in the US label [FDA]. WHO paediatric MDT blister packs are used in practice [NEP].", "Acne gel 7.5%: 9 years and older, once daily [FDA]."], transition: "Adult dose for adults [FDA].", calcNote: "No label mg/kg dose for children — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Treat severe anaemia before starting; haemolysis and methaemoglobinaemia are poorly tolerated in severe cardiopulmonary disease [FDA]. Check G6PD (haemolysis risk) [NEP]." },
  tox: { human: "Methaemoglobinaemia, haemolysis [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Methylene blue for symptomatic methaemoglobinaemia (not in G6PD deficiency) [NEP]." },
  contra: ["Hypersensitivity to dapsone or its derivatives [FDA].", "Gel: none [FDA]."],
  ae: { common: ["Haemolysis, methaemoglobinaemia, nausea, headache [NEP]."], serious: ["Agranulocytosis, aplastic anaemia and other blood dyscrasias — deaths reported [FDA]", "Severe cutaneous reactions; dapsone hypersensitivity syndrome [NEP]", "Peripheral neuropathy [NEP]"] },
  monitor: ["Full blood count weekly for the first month, monthly for 6 months, then every 6 months [FDA]. Warn patients to report sore throat, fever, pallor, purpura or jaundice [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: dapsone 50 mg tablet [BT-NEML].", strengths: "50 mg.", stg: "Bhutan STG 2024: dapsone with clofazimine in leprosy MDT [BT-STG]." },
  calc: [
    { drug: "dapsone", indication_id: "lep", label: "Leprosy (adult MDT) — 100 mg daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Always with other anti-leprosy drugs"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dapsone tablets — AvKARE (ANDA086841), label effective 2026-01-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=13002250-b4c5-5890-e063-6394a90a2036"], ["FDA", "ACZONE (dapsone) gel 7.5% — Almirall, label effective 2025-10-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=22058b7d-a578-4eaa-a476-ac982337f02a"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Sulfone for leprosy MDT and dermatitis herpetiformis; gel for acne.",
    adult: [{ ind: "Leprosy", text: "100 mg daily with rifampicin (± clofazimine).", calc: ["lep"], bt: "Bhutan NEML: 50 mg tablets (100 mg = two tablets)." }, { ind: "Dermatitis herpetiformis", text: "Start 50 mg daily; 50–300 mg daily." }, { ind: "Acne", text: "7.5% gel once daily." }],
    child: [{ ind: "Leprosy / DH", text: "Smaller doses — follow WHO paediatric MDT packs." }, { ind: "Acne, 9 years and older", text: "7.5% gel once daily." }] }
});

/* ---------- DAPTOMYCIN (FDA, Sagent NDA208385, eff. 2026-08-06) ---------- */
FDB_M("daptomycin", {
  inn: "Daptomycin", atc: "J01XX09", cls: "Cyclic lipopeptide antibacterial",
  linked: [["Complicated skin and soft tissue infection — adults", "[FDA]", "ssti-adult"], ["Skin and soft tissue infection — children 1–17 years", "[FDA]", "ssti-child"], ["S. aureus bacteraemia / right-sided endocarditis", "[FDA]", "sepsis-adult"]],
  forms: ["Powder for injection 350 mg vial (500 mg vials also marketed) [FDA]."],
  moa: "Inserts into the bacterial membrane, causing depolarisation and cell death [NEP].",
  pk: ["Haemodialysis removes about 15% over 4 h [FDA]."],
  ind: { adult: ["Complicated skin and skin-structure infections [FDA].", "S. aureus bacteraemia, including right-sided endocarditis [FDA].", "Not for pneumonia (inactivated by surfactant) or left-sided S. aureus endocarditis [FDA]."], paed: ["cSSSI and S. aureus bacteraemia, 1–17 years [FDA]."] },
  adult: [["cSSSI", "4 mg/kg IV every 24 h for 7–14 days [FDA]."], ["S. aureus bacteraemia", "6 mg/kg IV every 24 h for 2–6 weeks [FDA]."], ["CrCl under 30, haemodialysis or CAPD", "Same mg/kg every 48 h (after dialysis on dialysis days) [FDA]."], ["Administration (adults)", "IV injection over 2 min or infusion over 30 min in 0.9% saline [FDA]."]],
  paed: { tiers: ["cSSSI: 12–17 y 5 mg/kg; 7–11 y 7 mg/kg; 2–6 y 9 mg/kg; 1 to under 2 y 10 mg/kg — every 24 h, up to 14 days [FDA].", "S. aureus bacteraemia: 12–17 y 7 mg/kg; 7–11 y 9 mg/kg; 1–6 y 12 mg/kg — every 24 h, up to 42 days [FDA].", "Infuse over 30 min (7 years and older) or 60 min (1–6 years); never as a 2-min push in children [FDA]."], transition: "Adult doses from 18 years [FDA].", calcNote: "Children with renal impairment: dose not established. Not recommended under 12 months [FDA]." },
  adj: { renal: "Adults with CrCl under 30 (including HD and CAPD): give every 48 h [FDA]. Children: not established [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Not recommended under 12 months of age [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; maintain glomerular filtration; haemodialysis removes about 15% in 4 h [FDA]." },
  contra: ["Known hypersensitivity to daptomycin [FDA]."],
  ae: { common: ["Diarrhoea, headache, raised CK, infusion-site reactions [NEP]."], serious: ["Myopathy and rhabdomyolysis [NEP]", "Eosinophilic pneumonia [NEP]", "DRESS, anaphylaxis [NEP]", "Peripheral neuropathy [NEP]"] },
  monitor: ["CK weekly (more often with renal impairment or statins); muscle pain; respiratory symptoms [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "daptomycin", indication_id: "a_ssti", label: "Adult cSSSI — 4 mg/kg every 24 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "extend_interval", factor: 48 }], renal_note: "Haemodialysis or CAPD: every 48 h, after dialysis on dialysis days [FDA]", flags: [], sources: ["FDA"] },
    { drug: "daptomycin", indication_id: "a_bact", label: "Adult S. aureus bacteraemia — 6 mg/kg every 24 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 6, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "extend_interval", factor: 48 }], renal_note: "Haemodialysis or CAPD: every 48 h, after dialysis on dialysis days [FDA]", flags: [], sources: ["FDA"] },
    { drug: "daptomycin", indication_id: "s12", label: "cSSSI 12–17 years — 5 mg/kg every 24 h", route: "IV", population: { min_age_months: 144, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 0.5 }, renal: [], renal_note: "Children with renal impairment: dose not established [FDA]", flags: [], sources: ["FDA"] },
    { drug: "daptomycin", indication_id: "s7", label: "cSSSI 7–11 years — 7 mg/kg every 24 h", route: "IV", population: { min_age_months: 84, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 7, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 0.5 }, renal: [], renal_note: "Children with renal impairment: dose not established [FDA]", flags: [], sources: ["FDA"] },
    { drug: "daptomycin", indication_id: "s2", label: "cSSSI 2–6 years — 9 mg/kg every 24 h", route: "IV", population: { min_age_months: 24, max_age_months: 84, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 9, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 1 }, renal: [], renal_note: "Children with renal impairment: dose not established [FDA]", flags: [], sources: ["FDA"] },
    { drug: "daptomycin", indication_id: "s1", label: "cSSSI 1 to under 2 years — 10 mg/kg every 24 h", route: "IV", population: { min_age_months: 12, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 1 }, renal: [], renal_note: "Children with renal impairment: dose not established [FDA]", flags: [], sources: ["FDA"] },
    { drug: "daptomycin", indication_id: "b12", label: "S. aureus bacteraemia 12–17 years — 7 mg/kg every 24 h", route: "IV", population: { min_age_months: 144, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 7, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 0.5 }, renal: [], renal_note: "Children with renal impairment: dose not established [FDA]", flags: [], sources: ["FDA"] },
    { drug: "daptomycin", indication_id: "b7", label: "S. aureus bacteraemia 7–11 years — 9 mg/kg every 24 h", route: "IV", population: { min_age_months: 84, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 9, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 0.5 }, renal: [], renal_note: "Children with renal impairment: dose not established [FDA]", flags: [], sources: ["FDA"] },
    { drug: "daptomycin", indication_id: "b1", label: "S. aureus bacteraemia 1–6 years — 12 mg/kg every 24 h", route: "IV", population: { min_age_months: 12, max_age_months: 84, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (350 mg in 7 mL NaCl 0.9%)", strength: 50, unit: "mg/mL" }, { form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 1 }, renal: [], renal_note: "Children with renal impairment: dose not established [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Daptomycin for injection — Sagent (NDA208385), label effective 2026-08-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4a0ad110-e55e-4d3b-84f8-dd0b924fe2f6"]],
  dose: { tagline: "Once-daily IV lipopeptide for MRSA skin infection and bacteraemia (not pneumonia).",
    adult: [{ ind: "cSSSI", text: "4 mg/kg every 24 h for 7–14 days (every 48 h if CrCl under 30).", calc: ["a_ssti"] }, { ind: "S. aureus bacteraemia", text: "6 mg/kg every 24 h for 2–6 weeks (every 48 h if CrCl under 30).", calc: ["a_bact"] }],
    child: [{ ind: "cSSSI, 1–17 years", text: "10 / 9 / 7 / 5 mg/kg every 24 h by age.", calc: ["s1", "s2", "s7", "s12"] }, { ind: "S. aureus bacteraemia, 1–17 years", text: "12 / 9 / 7 mg/kg every 24 h by age.", calc: ["b1", "b7", "b12"] }] }
});

/* ---------- DARATUMUMAB (FDA DARZALEX IV, Janssen, BLA761036, eff. 2026-11-10) ---------- */
FDB_M("daratumumab", {
  inn: "Daratumumab", atc: "L01FC01", cls: "Anti-CD38 monoclonal antibody",
  linked: [["Multiple myeloma (combination or monotherapy)", "[FDA]", ""]],
  forms: ["IV solution 20 mg/mL: 100 mg/5 mL, 400 mg/20 mL vials [FDA].", "A separate subcutaneous product (daratumumab with hyaluronidase) is dosed differently — not interchangeable [NEP]."],
  moa: "Binds CD38 on myeloma cells, causing immune-mediated cell death [NEP].",
  pk: ["Terminal half-life about 18 ± 9 days [FDA]."],
  ind: { adult: ["Multiple myeloma: newly diagnosed (with lenalidomide-dexamethasone, bortezomib-melphalan-prednisone, or bortezomib-thalidomide-dexamethasone) and relapsed/refractory (combinations or monotherapy) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["All regimens", "16 mg/kg actual body weight IV, diluted in 0.9% saline [FDA]."], ["Monotherapy or with lenalidomide/pomalidomide (4-week cycles)", "Weekly weeks 1–8; every 2 weeks weeks 9–24; every 4 weeks from week 25 until progression [FDA]."], ["Other combinations", "Schedules differ — see label tables [FDA]."], ["Premedication", "Corticosteroid, antipyretic and antihistamine before each infusion; post-infusion steroid [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "16 mg/kg per dose; schedule depends on regimen." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Type and screen before starting — interferes with indirect antiglobulin (cross-match) tests [FDA]. Give with emergency equipment available [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Severe hypersensitivity (e.g. anaphylaxis) to daratumumab or components [FDA]."],
  ae: { common: ["Infusion reactions (mostly first infusion), fatigue, upper respiratory infection, neutropenia [NEP]."], serious: ["Infusion-related reactions [FDA]", "Neutropenia and thrombocytopenia; serious infections [NEP]", "Interference with blood cross-matching [FDA]"] },
  monitor: ["Infusion reactions; blood counts; signs of infection [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "daratumumab", indication_id: "mm", label: "Multiple myeloma — 16 mg/kg IV per dose", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 16, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: ["Schedule by regimen — weekly, then every 2, then every 4 weeks (monotherapy/D-Rd)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "DARZALEX (daratumumab) injection for IV use — Janssen Biotech, label effective 2026-11-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4d0efe9-5e54-467e-9eb4-56fa7d53b60b"]],
  dose: { tagline: "Anti-CD38 antibody backbone of myeloma regimens.",
    adult: [{ ind: "Multiple myeloma", text: "16 mg/kg IV weekly ×8, every 2 weeks ×8, then every 4 weeks (monotherapy/D-Rd); premedicate.", calc: ["mm"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DARBEPOETIN ALFA (FDA ARANESP, Amgen, BLA103951, eff. 2026-07-07) ---------- */
FDB_M("darbepoetin-alfa", {
  inn: "Darbepoetin alfa", atc: "B03XA02", cls: "Erythropoiesis-stimulating agent (long-acting)",
  linked: [["Anaemia of chronic kidney disease — adults", "[FDA]", "ckd-adult"], ["Anaemia of chronic kidney disease — children", "[FDA]", "ckd-child"], ["Anaemia from myelosuppressive chemotherapy", "[FDA]", "anaemia-adult"]],
  forms: ["Single-dose vials 25, 40, 60, 100, 200 mcg [FDA].", "Prefilled syringes 10–500 mcg [FDA]."],
  moa: "Stimulates erythropoiesis like erythropoietin, with a longer half-life [NEP].",
  pk: ["Terminal half-life about 21 h (IV, dialysis patients) [FDA]."],
  ind: { adult: ["Anaemia of CKD (on and not on dialysis) [FDA].", "Anaemia from myelosuppressive chemotherapy with at least 2 more months planned [FDA].", "Not for cancer patients on hormonal, biologic or radiotherapy alone, or when cure is intended [FDA]."], paed: ["Anaemia of CKD, 1 month to 16 years [FDA]."] },
  adult: [["CKD on dialysis", "Start 0.45 mcg/kg IV or SC weekly, or 0.75 mcg/kg every 2 weeks; IV preferred in haemodialysis [FDA]."], ["CKD not on dialysis", "Start 0.45 mcg/kg every 4 weeks [FDA]."], ["Chemotherapy anaemia", "2.25 mcg/kg SC weekly, or 500 mcg SC every 3 weeks [FDA]."]],
  paed: { tiers: ["CKD: 0.45 mcg/kg IV or SC weekly; not on dialysis may start 0.75 mcg/kg every 2 weeks [FDA]."], transition: "Adult regimens [FDA].", calcNote: "Starting doses only — titrate to Hb." },
  adj: { renal: "Indication itself [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Give iron when ferritin under 100 mcg/L or TSAT under 20%; check Hb weekly until stable [FDA]." },
  tox: { human: "Hb above target; severe hypertension [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop or reduce; phlebotomy if needed [FDA]." },
  contra: ["Uncontrolled hypertension [FDA].", "Pure red cell aplasia after an erythropoietin product [FDA].", "Serious allergic reactions to darbepoetin [FDA]."],
  ae: { common: ["Hypertension, oedema, dyspnoea, cough [NEP]."], serious: ["Death, MI, stroke, VTE, vascular access thrombosis, tumour progression (boxed) [FDA]", "Seizures; pure red cell aplasia [NEP]"] },
  monitor: ["Hb weekly after start or dose change until stable; BP; iron status [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "darbepoetin-alfa", indication_id: "ckd", label: "CKD — start 0.45 mcg/kg weekly", route: "IV/SC", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.45, unit: "mcg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest available syringe/vial", renal: [], flags: ["Not on dialysis (adults): 0.45 mcg/kg every 4 weeks"], sources: ["FDA"] },
    { drug: "darbepoetin-alfa", indication_id: "chemo", label: "Chemotherapy anaemia — 2.25 mcg/kg weekly", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2.25, unit: "mcg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest available syringe/vial", renal: [], flags: ["Or 500 mcg every 3 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ARANESP (darbepoetin alfa) injection — Amgen, label effective 2026-07-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0fd36cb9-c4f6-4167-93c9-8530865db3f9"]],
  dose: { tagline: "Long-acting ESA for anaemia of CKD and chemotherapy.",
    boxedTitle: "ESAs increase the risk of death, MI, stroke, VTE, vascular access thrombosis and tumour progression",
    boxed: "Chronic Kidney Disease: In controlled trials, patients experienced greater risks for death, serious adverse cardiovascular reactions, and stroke when administered erythropoiesis-stimulating agents (ESAs) to target a hemoglobin level of greater than 11 g/dL. No trial has identified a hemoglobin target level, Aranesp dose, or dosing strategy that does not increase these risks. Use the lowest Aranesp dose sufficient to reduce the need for red blood cell (RBC) transfusions. Cancer: ESAs shortened overall survival and/or increased the risk of tumor progression or recurrence in clinical studies of patients with breast, non-small cell lung, head and neck, lymphoid, and cervical cancers [FDA].",
    adult: [{ ind: "CKD on dialysis", text: "0.45 mcg/kg weekly or 0.75 mcg/kg every 2 weeks.", calc: ["ckd"] }, { ind: "CKD not on dialysis", text: "0.45 mcg/kg every 4 weeks." }, { ind: "Chemotherapy anaemia", text: "2.25 mcg/kg weekly or 500 mcg every 3 weeks.", calc: ["chemo"] }],
    child: [{ ind: "CKD, 1 month–16 years", text: "0.45 mcg/kg weekly (or 0.75 mcg/kg every 2 weeks if not on dialysis).", calc: ["ckd"] }] }
});

/* ---------- DARIDOREXANT (FDA QUVIVIQ, Idorsia, NDA214985, eff. 2026-02-26) ---------- */
FDB_M("daridorexant", {
  inn: "Daridorexant", atc: "N05CJ03", cls: "Dual orexin receptor antagonist (hypnotic)",
  linked: [["Insomnia — adults", "Sleep onset and/or maintenance [FDA]", ""]],
  forms: ["Tablets 25 mg, 50 mg [FDA]."],
  moa: "Blocks orexin OX1 and OX2 receptors, reducing wake drive [NEP].",
  pk: ["Terminal half-life about 8 h [FDA].", "CYP3A4 substrate [FDA]."],
  ind: { adult: ["Insomnia with difficulty falling or staying asleep [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Insomnia", "25–50 mg once nightly within 30 min of bed, with at least 7 h before planned waking; a meal can delay effect [FDA]."], ["Moderate CYP3A4 inhibitors", "Max 25 mg nightly [FDA]."], ["Strong CYP3A4 inhibitors; strong or moderate inducers", "Avoid [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Moderate impairment: max 25 mg nightly; severe: not recommended [FDA].", preg: "Not established in primary source. [NEP]", other: "Next-day impairment possible — caution with driving [NEP]." },
  tox: { human: "Somnolence, muscle weakness, cataplexy-like symptoms, sleep paralysis (single doses up to 200 mg) [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; no antidote [FDA]." },
  contra: ["Narcolepsy [FDA].", "Hypersensitivity (angioedema reported) [FDA]."],
  ae: { common: ["Headache, somnolence, fatigue [NEP]."], serious: ["CNS depression and complex sleep behaviours [NEP]", "Sleep paralysis, hallucinations, cataplexy-like symptoms [NEP]", "Worsening depression/suicidal thoughts [NEP]"] },
  monitor: ["Next-day alertness; mood [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "QUVIVIQ (daridorexant) tablets — Idorsia, label effective 2026-02-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a2d1503-b816-40c9-9fac-7e03c5a3bcef"]],
  dose: { tagline: "Orexin-blocking sleeping tablet.",
    adult: [{ ind: "Insomnia", text: "25–50 mg at bedtime (max 25 mg with moderate CYP3A4 inhibitors or moderate liver impairment)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DARIFENACIN (FDA ER tablets, Torrent ANDA205209, eff. 2026-02-10) ---------- */
FDB_M("darifenacin", {
  inn: "Darifenacin", atc: "G04BD10", cls: "Antimuscarinic (M3-selective) for overactive bladder",
  linked: [["Overactive bladder", "Urge incontinence, urgency, frequency [FDA]", ""]],
  forms: ["Extended-release tablets 7.5 mg, 15 mg — swallow whole [FDA]."],
  moa: "Blocks muscarinic M3 receptors in the detrusor [NEP].",
  pk: ["Half-life 13–19 h with chronic dosing [FDA].", "CYP3A4 and CYP2D6 metabolism [NEP]."],
  ind: { adult: ["Overactive bladder with urge urinary incontinence, urgency and frequency [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Overactive bladder", "7.5 mg once daily; may increase to 15 mg once daily after 2 weeks [FDA]."], ["Moderate hepatic impairment or potent CYP3A4 inhibitors", "Max 7.5 mg daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Child-Pugh B: max 7.5 mg; Child-Pugh C: not recommended [FDA].", preg: "Not established in primary source. [NEP]", other: "Potent CYP3A4 inhibitors (ketoconazole, itraconazole, ritonavir, clarithromycin): max 7.5 mg [FDA]." },
  tox: { human: "Severe antimuscarinic effects; up to 75 mg caused only abnormal vision in trials [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic and supportive; ECG monitoring [FDA]." },
  contra: ["Urinary retention [FDA].", "Gastric retention [FDA].", "Uncontrolled narrow-angle glaucoma [FDA]."],
  ae: { common: ["Dry mouth, constipation [NEP]."], serious: ["Urinary retention, angioedema, heat prostration, CNS effects [NEP]"] },
  monitor: ["Bladder emptying, bowel habit [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Darifenacin extended-release tablets — Torrent (ANDA205209), label effective 2026-02-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e84f1ae3-b9a2-4a15-a299-c75373891cc1"]],
  dose: { tagline: "Once-daily bladder antimuscarinic.",
    adult: [{ ind: "Overactive bladder", text: "7.5 mg once daily, up to 15 mg (max 7.5 mg with moderate liver disease or strong CYP3A4 inhibitors)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DAROLUTAMIDE (FDA NUBEQA, Bayer, NDA212099, eff. 2026-09-28) ---------- */
FDB_M("darolutamide", {
  inn: "Darolutamide", atc: "L02BB06", cls: "Androgen receptor inhibitor",
  linked: [["Prostate cancer — nmCRPC and mCSPC", "[FDA]", ""]],
  forms: ["Tablets 300 mg — swallow whole with food [FDA]."],
  moa: "Blocks androgen binding, nuclear translocation and AR-mediated transcription [NEP].",
  pk: ["Effective half-life about 20 h (with active metabolite) [FDA].", "Saturable absorption [FDA]."],
  ind: { adult: ["Non-metastatic castration-resistant prostate cancer [FDA].", "Metastatic castration-sensitive prostate cancer, alone or with docetaxel [FDA]."], paed: ["Not applicable. [NEP]"] },
  adult: [["All indications", "600 mg (two 300 mg tablets) twice daily with food, with a GnRH agonist/antagonist or after orchiectomy [FDA]."], ["With docetaxel (mCSPC)", "Start the first of 6 docetaxel cycles within 6 weeks of starting darolutamide [FDA]."], ["Severe renal impairment (not on HD) or moderate hepatic impairment", "300 mg twice daily [FDA]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { renal: "eGFR 15–29 not on haemodialysis: 300 mg twice daily [FDA].", hepatic: "Child-Pugh B: 300 mg twice daily [FDA].", preg: "Not indicated in females [NEP].", other: "Missed dose: take as soon as remembered, not two doses together [NEP]." },
  tox: { human: "900 mg twice daily studied without dose-limiting toxicity [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote; supportive [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, pain in extremity, rash [NEP]."], serious: ["Ischaemic heart disease, heart failure [NEP]", "Seizure [NEP]"] },
  monitor: ["PSA, liver tests, cardiovascular symptoms [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "darolutamide", indication_id: "adult", label: "Prostate cancer — 600 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 300, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 300 }], renal_note: "Label band is eGFR 15–29 not on haemodialysis; no dose given for dialysis [FDA]", flags: ["Take with food"], sources: ["FDA"] }
  ],
  sources: [["FDA", "NUBEQA (darolutamide) tablets — Bayer, label effective 2026-09-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a7cb212-56e4-4b9d-a73d-bfee7fe4735e"]],
  dose: { tagline: "Twice-daily androgen receptor blocker for prostate cancer.",
    adult: [{ ind: "nmCRPC / mCSPC", text: "600 mg twice daily with food (300 mg twice daily in severe kidney or moderate liver impairment).", calc: ["adult"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- DARUNAVIR (FDA PREZISTA, Janssen, NDA021976/NDA202895, eff. 2025-08-29) ---------- */
FDB_M("darunavir", {
  inn: "Darunavir", atc: "J05AE10", cls: "HIV-1 protease inhibitor (boosted)",
  linked: [["HIV — adults", "With ritonavir and other antiretrovirals [FDA]", "hiv-adult"], ["HIV — children 3 years and older", "[FDA]", "hiv-child"]],
  forms: ["Tablets 75, 150, 600, 800 mg [FDA].", "Oral suspension 100 mg/mL [FDA]."],
  moa: "Inhibits HIV-1 protease, blocking viral maturation [NEP].",
  pk: ["Half-life about 15 h with ritonavir [FDA].", "Highly protein bound — dialysis unlikely to help [FDA]."],
  ind: { adult: ["HIV-1 infection, always with ritonavir and other antiretrovirals [FDA]."], paed: ["From 3 years and at least 10 kg [FDA]."] },
  adult: [["Treatment-naïve, or experienced with no darunavir resistance substitutions", "800 mg with ritonavir 100 mg once daily with food [FDA]."], ["At least one darunavir resistance substitution, or no genotype", "600 mg with ritonavir 100 mg twice daily with food [FDA]."], ["Pregnancy", "600 mg with ritonavir 100 mg twice daily with food [FDA]."]],
  paed: { tiers: ["Naïve, or experienced without resistance substitutions (once daily with food): 15–<30 kg 600 mg + ritonavir 100 mg; 30–<40 kg 675 mg + ritonavir 100 mg; 40 kg or more 800 mg + ritonavir 100 mg [FDA].", "Experienced with resistance substitutions, 10–<15 kg: twice-daily suspension 200–280 mg with ritonavir 32–48 mg (label table) [FDA]."], transition: "Do not exceed the adult dose [FDA].", calcNote: "Once-daily bands for at least 15 kg. 675 mg is given as 6.8 mL of suspension per the label." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Severe impairment: not recommended [FDA].", preg: "600/100 mg twice daily [FDA].", other: "Monitor liver tests before and during therapy [FDA]. Sulfonamide moiety — caution with sulfonamide allergy [NEP]." },
  tox: { human: "Limited data [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; dialysis unlikely to help [FDA]." },
  contra: ["With drugs highly dependent on CYP3A where high levels are dangerous, and drugs that reduce darunavir effect: alfuzosin; colchicine in renal/hepatic impairment; rifampicin; lurasidone, pimozide; dronedarone, ivabradine, ranolazine; ergot derivatives; St John's wort; elbasvir/grazoprevir; lomitapide, lovastatin, simvastatin; naloxegol; sildenafil for PAH; oral midazolam, triazolam [FDA]."],
  ae: { common: ["Diarrhoea, nausea, headache, rash, abdominal pain [FDA]."], serious: ["Drug-induced hepatitis [FDA]", "Severe skin reactions (SJS/TEN, DRESS) [NEP]"] },
  monitor: ["Liver tests; HIV RNA, CD4; lipids and glucose [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "darunavir", indication_id: "a_naive", label: "Adult (no resistance) — 800 mg + ritonavir 100 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 800, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 800, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 800, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Always with ritonavir 100 mg and food"], sources: ["FDA"] },
    { drug: "darunavir", indication_id: "a_exp", label: "Adult (resistance or pregnancy) — 600 mg + ritonavir 100 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 600, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Always with ritonavir 100 mg and food"], sources: ["FDA"] },
    { drug: "darunavir", indication_id: "c15", label: "Child 15 to under 30 kg — 600 mg + ritonavir 100 mg once daily", route: "PO", population: { min_age_months: 36, max_age_months: 216, min_weight_kg: 15, max_weight_kg: 30 }, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 600, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 100, unit: "mg/mL" }, { form: "tab", strength: 600, unit: "mg/tab" }], rounding: "Label volumes", renal: [], flags: ["No darunavir resistance substitutions", "With ritonavir 100 mg (1.25 mL of 80 mg/mL) and food"], sources: ["FDA"] },
    { drug: "darunavir", indication_id: "c30", label: "Child 30 to under 40 kg — 675 mg + ritonavir 100 mg once daily", route: "PO", population: { min_age_months: 36, max_age_months: 216, min_weight_kg: 30, max_weight_kg: 40 }, basis: "fixed", dose: { value: 675, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 675, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 100, unit: "mg/mL" }], rounding: "Label rounds suspension to 6.8 mL", renal: [], flags: ["No darunavir resistance substitutions", "Suspension: give 6.8 mL (label rounding); tablets: 600 mg + 75 mg", "With ritonavir 100 mg and food"], sources: ["FDA"] },
    { drug: "darunavir", indication_id: "c40", label: "Child 40 kg or more — 800 mg + ritonavir 100 mg once daily", route: "PO", population: { min_age_months: 36, max_age_months: 216, min_weight_kg: 40, max_weight_kg: null }, basis: "fixed", dose: { value: 800, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 800, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 100, unit: "mg/mL" }, { form: "tab", strength: 800, unit: "mg/tab" }], rounding: "Label volumes", renal: [], flags: ["No darunavir resistance substitutions", "With ritonavir 100 mg and food"], sources: ["FDA"] }
  ],
  sources: [["FDA", "PREZISTA (darunavir) tablets and oral suspension — Janssen, label effective 2025-08-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=814301f9-c990-46a5-b481-2879a521a16f"]],
  dose: { tagline: "Ritonavir-boosted protease inhibitor; take with food.",
    adult: [{ ind: "No darunavir resistance", text: "800 mg + ritonavir 100 mg once daily.", calc: ["a_naive"] }, { ind: "Resistance, unknown genotype, or pregnancy", text: "600 mg + ritonavir 100 mg twice daily.", calc: ["a_exp"] }],
    child: [{ ind: "3 years and older, at least 15 kg (no resistance)", text: "600 / 675 / 800 mg + ritonavir 100 mg once daily by weight.", calc: ["c15", "c30", "c40"] }, { ind: "10–14 kg with resistance", text: "Twice-daily suspension per label table." }] }
});

/* ---------- DASATINIB (FDA, Prasco NDA021986, eff. 2026-10-29) ---------- */
FDB_M("dasatinib", {
  inn: "Dasatinib", atc: "L01EA02", cls: "BCR-ABL and SRC-family tyrosine kinase inhibitor",
  linked: [["Ph+ chronic myeloid leukaemia; Ph+ ALL", "[FDA]", ""]],
  forms: ["Tablets 20, 50, 70, 80, 100, 140 mg — swallow whole, do not crush or cut [FDA]."],
  moa: "Inhibits BCR-ABL (including many imatinib-resistant forms) and SRC kinases [NEP].",
  pk: ["Terminal half-life 3–5 h [FDA].", "CYP3A4 substrate — avoid strong inducers and St John's wort [FDA]."],
  ind: { adult: ["Newly diagnosed chronic-phase Ph+ CML [FDA].", "Chronic, accelerated or blast-phase Ph+ CML resistant or intolerant to imatinib [FDA].", "Ph+ ALL resistant or intolerant to prior therapy [FDA]."], paed: ["Chronic-phase Ph+ CML and newly diagnosed Ph+ ALL (with chemotherapy), 1 year and older [FDA]."] },
  adult: [["Chronic-phase CML", "100 mg once daily [FDA]."], ["Accelerated/blast-phase CML or Ph+ ALL", "140 mg once daily [FDA]."]],
  paed: { tiers: ["Once daily by weight: 10–<20 kg 40 mg; 20–<30 kg 60 mg; 30–<45 kg 70 mg; 45 kg or more 100 mg [FDA].", "Tablets not recommended under 10 kg; recalculate every 3 months [FDA].", "Ph+ ALL: start on or before day 15 of induction; continue for 2 years [FDA]."], transition: "Adult dosing [FDA].", calcNote: "Weight bands — whole tablets only (do not cut)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Strong CYP3A4 inducers: avoid [FDA]. Avoid antacids within 2 h; avoid H2 blockers/PPIs [NEP]." },
  tox: { human: "Severe myelosuppression and bleeding (280 mg/day for 1 week) [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor blood counts closely; supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Myelosuppression, fluid retention, diarrhoea, headache, rash [NEP]."], serious: ["Pleural effusion [NEP]", "Pulmonary arterial hypertension [NEP]", "Bleeding; QT prolongation [NEP]"] },
  monitor: ["Blood counts weekly for 2 months then monthly; fluid retention; chest symptoms [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dasatinib", indication_id: "cp", label: "Adult chronic-phase CML — 100 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dasatinib", indication_id: "adv", label: "Adult advanced CML or Ph+ ALL — 140 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 140, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 140, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 140, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dasatinib", indication_id: "c10", label: "Child 10 to under 20 kg — 40 mg once daily", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: 10, max_weight_kg: 20 }, basis: "fixed", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 20, unit: "mg/tab", whole: true }], rounding: "Whole tablets — do not cut", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dasatinib", indication_id: "c20", label: "Child 20 to under 30 kg — 60 mg once daily", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: 20, max_weight_kg: 30 }, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 20, unit: "mg/tab", whole: true }], rounding: "Whole tablets — do not cut", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dasatinib", indication_id: "c30", label: "Child 30 to under 45 kg — 70 mg once daily", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: 30, max_weight_kg: 45 }, basis: "fixed", dose: { value: 70, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 70, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 70, unit: "mg/tab", whole: true }], rounding: "Whole tablets — do not cut", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dasatinib", indication_id: "c45", label: "Child 45 kg or more — 100 mg once daily", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: 45, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 100, unit: "mg/tab", whole: true }], rounding: "Whole tablets — do not cut", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dasatinib tablets — Prasco (NDA021986), label effective 2026-10-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1931e73f-918c-4d69-9543-de9643513d05"]],
  dose: { tagline: "Second-generation TKI for Ph+ leukaemias.",
    adult: [{ ind: "Chronic-phase CML", text: "100 mg once daily.", calc: ["cp"] }, { ind: "Advanced CML or Ph+ ALL", text: "140 mg once daily.", calc: ["adv"] }],
    child: [{ ind: "CML / Ph+ ALL, 1 year and older", text: "40 / 60 / 70 / 100 mg once daily by weight.", calc: ["c10", "c20", "c30", "c45"] }] }
});

/* ---------- DASIGLUCAGON (FDA ZEGALOGUE, Novo Nordisk, NDA214231, eff. 2023-01-01) ---------- */
FDB_M("dasiglucagon", {
  inn: "Dasiglucagon", atc: "H04AA02", cls: "Glucagon analogue (ready-to-use)",
  linked: [["Severe hypoglycaemia — adults", "[FDA]", "hypo-adult"], ["Severe hypoglycaemia — children 6 years and older", "[FDA]", "hypo-child"]],
  forms: ["0.6 mg/0.6 mL single-dose autoinjector or prefilled syringe [FDA]."],
  moa: "Glucagon receptor agonist — raises blood glucose by hepatic glycogenolysis [NEP].",
  pk: ["Half-life about 30 min [FDA]."],
  ind: { adult: ["Severe hypoglycaemia in people with diabetes [FDA]."], paed: ["From 6 years [FDA]."] },
  adult: [["Severe hypoglycaemia", "0.6 mg SC (abdomen, buttock, thigh or upper arm); call emergency help; if no response in 15 min, give another dose from a new device; give oral carbohydrate once able [FDA]."]],
  paed: { tiers: ["6 years and older: 0.6 mg SC, same as adults [FDA]."], transition: "Same [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Ineffective if liver glycogen is depleted (starvation, adrenal insufficiency, chronic hypoglycaemia) [NEP]." },
  tox: { human: "Nausea, vomiting, reduced GI motility, rise in BP and heart rate; potassium may fall [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor and correct potassium; phentolamine for marked BP rise [FDA]." },
  contra: ["Phaeochromocytoma [FDA].", "Insulinoma [FDA]."],
  ae: { common: ["Nausea, vomiting, headache, injection-site pain [NEP]."], serious: ["Hypertensive crisis in phaeochromocytoma [FDA]", "Rebound hypoglycaemia in insulinoma [FDA]"] },
  monitor: ["Blood glucose until recovered; potassium if overdose [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "dasiglucagon", indication_id: "hypo", label: "Severe hypoglycaemia (6 years and older) — 0.6 mg SC", route: "SC", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.6, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 0.6, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "autoinjector", strength: 1, unit: "mg/mL" }], rounding: "Whole device", renal: [], flags: ["Repeat once after 15 min from a new device if no response"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ZEGALOGUE (dasiglucagon) injection — Novo Nordisk, label effective 2023-01-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14704879-872c-4967-8779-04a3bbdfb4e6"]],
  dose: { tagline: "Ready-to-use rescue glucagon analogue.",
    adult: [{ ind: "Severe hypoglycaemia", text: "0.6 mg SC; repeat once after 15 min if needed.", calc: ["hypo"] }],
    child: [{ ind: "6 years and older", text: "0.6 mg SC.", calc: ["hypo"] }, { ind: "Under 6 years", text: "Not established — use glucagon." }] }
});

/* ---------- DATOPOTAMAB DERUXTECAN (FDA DATROWAY, Daiichi Sankyo, BLA761394, eff. 2026-05-27) ---------- */
FDB_M("datopotamab-deruxtecan", {
  inn: "Datopotamab deruxtecan", atc: "L01FX35", cls: "TROP2-directed antibody–drug conjugate (topoisomerase I inhibitor payload)",
  linked: [["EGFR-mutant NSCLC after prior therapy; HR+/HER2− or triple-negative breast cancer", "[FDA]", ""]],
  forms: ["Powder for injection 100 mg vial [FDA]."],
  moa: "Antibody binds TROP2; released deruxtecan inhibits topoisomerase I [FDA].",
  pk: ["Median elimination half-life about 4 days [FDA]."],
  ind: { adult: ["Locally advanced or metastatic EGFR-mutated NSCLC after EGFR-directed therapy and platinum chemotherapy (accelerated approval) [FDA].", "Breast cancer indications per label [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["All indications", "6 mg/kg (max 540 mg for 90 kg or more) IV every 3 weeks until progression or toxicity [FDA]."], ["Preparation", "Reconstitute with sterile water; dilute in 5% dextrose only — not saline; no IV push [FDA]."], ["Premedication and eye care", "Premedicate for infusion reactions and nausea; eye examination and prophylactic eye drops per label [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "6 mg/kg capped at 540 mg." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Missed dose: give as soon as possible and keep a 3-week interval [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Stomatitis, nausea, fatigue, alopecia, keratitis [NEP]."], serious: ["Interstitial lung disease/pneumonitis [NEP]", "Ocular surface toxicity [NEP]", "Stomatitis [NEP]"] },
  monitor: ["Respiratory symptoms, eye exams, mouth [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "datopotamab-deruxtecan", indication_id: "adult", label: "6 mg/kg every 3 weeks (max 540 mg)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 6, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 540, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "vial", strength: 100, unit: "mg/vial" }], rounding: "Nearest mg", renal: [], flags: ["Dilute in 5% dextrose only"], sources: ["FDA"] }
  ],
  sources: [["FDA", "DATROWAY (datopotamab deruxtecan-dlnk) for injection — Daiichi Sankyo, label effective 2026-05-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2950227c-6230-4ca4-a135-46e44d9424a0"]],
  dose: { tagline: "TROP2 antibody–drug conjugate given every 3 weeks.",
    adult: [{ ind: "NSCLC / breast cancer", text: "6 mg/kg IV every 3 weeks (max 540 mg).", calc: ["adult"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DAUNORUBICIN (FDA, Hikma NDA050731, eff. 2024-02-15) ---------- */
FDB_M("daunorubicin", {
  inn: "Daunorubicin", atc: "L01DB02", cls: "Anthracycline cytotoxic antibiotic",
  linked: [["Acute myeloid leukaemia — adults (induction)", "[FDA]", ""], ["Acute lymphoblastic leukaemia — children and adults", "[FDA]", ""]],
  forms: ["Injection 5 mg/mL (20 mg/4 mL vial) [FDA]."],
  moa: "Intercalates DNA and inhibits topoisomerase II [NEP].",
  pk: ["Initial half-life 45 min; terminal 18.5 h; active metabolite daunorubicinol 26.7 h [FDA]."],
  ind: { adult: ["Remission induction in acute non-lymphocytic leukaemia (myelogenous, monocytic, erythroid) [FDA].", "Remission induction in ALL [FDA]."], paed: ["Remission induction in ALL [FDA]."] },
  adult: [["AML induction, under 60 years", "45 mg/m²/day IV days 1–3 (first course), days 1–2 (later courses), with cytarabine 100 mg/m²/day for 7 (then 5) days [FDA]."], ["AML induction, 60 years and older", "30 mg/m²/day IV on the same schedule [FDA]."], ["Adult ALL", "45 mg/m²/day IV days 1–3 with vincristine, prednisone and asparaginase [FDA]."]],
  paed: { tiers: ["ALL: 25 mg/m² IV on day 1 every week with vincristine 1.5 mg/m² and prednisone 40 mg/m² daily; usually 4 courses [FDA].", "Under 2 years or BSA under 0.5 m²: dose by weight (1 mg/kg) instead of BSA [FDA]."], transition: "Adult regimens [FDA].", calcNote: "BSA dosing. Cumulative limit: 400–550 mg/m² adults, 300 mg/m² children over 2 years, 10 mg/kg under 2 years." },
  adj: { renal: "Serum creatinine over 3 mg/dL: reduce dose by 50% [FDA].", hepatic: "Bilirubin 1.2–3 mg/dL: reduce 25%; over 3 mg/dL: reduce 50% [FDA].", preg: "Not established in primary source. [NEP]", other: "Into a fast-running IV infusion only — never IM or SC; extravasation causes severe necrosis [FDA]." },
  tox: { human: "Myelosuppression, cardiotoxicity [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to daunorubicin [FDA]."],
  ae: { common: ["Alopecia, nausea, vomiting, mucositis, red urine [NEP]."], serious: ["Cardiomyopathy and heart failure, dose-related (boxed) [FDA]", "Severe myelosuppression (boxed) [FDA]", "Extravasation necrosis (boxed) [FDA]"] },
  monitor: ["Cardiac function (LVEF) before and during; cumulative dose; blood counts; liver and kidney tests [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "daunorubicin", indication_id: "aml", label: "AML induction (under 60 years) — 45 mg/m² daily, days 1–3", route: "IV", population: { min_age_months: 216, max_age_months: 720, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 45, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], renal_note: "Serum creatinine over 3 mg/dL: give 50% of the dose [FDA]", flags: ["Track cumulative dose (400–550 mg/m² limit)"], sources: ["FDA"] },
    { drug: "daunorubicin", indication_id: "aml60", label: "AML induction (60 years and older) — 30 mg/m² daily, days 1–3", route: "IV", population: { min_age_months: 720, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], renal_note: "Serum creatinine over 3 mg/dL: give 50% of the dose [FDA]", flags: ["Track cumulative dose"], sources: ["FDA"] },
    { drug: "daunorubicin", indication_id: "pall", label: "Child ALL — 25 mg/m² weekly (BSA 0.5 m² or more, 2 years and older)", route: "IV", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "Nearest 0.1 mg", renal: [], flags: ["If BSA under 0.5 m², use 1 mg/kg instead", "Cumulative limit 300 mg/m²"], sources: ["FDA"] },
    { drug: "daunorubicin", indication_id: "pinf", label: "Child ALL under 2 years — 1 mg/kg weekly", route: "IV", population: { min_age_months: 0, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "Nearest 0.1 mg", renal: [], flags: ["Cumulative limit 10 mg/kg under 2 years"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Daunorubicin hydrochloride injection — Hikma (NDA050731), label effective 2024-02-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=227784a8-ce68-4dd4-8ac5-a65265969677"]],
  dose: { tagline: "Anthracycline for acute leukaemia induction — watch the cumulative dose.",
    boxedTitle: "Extravasation necrosis; cardiotoxicity; myelosuppression",
    boxed: "Daunorubicin Hydrochloride Injection must be given into a rapidly flowing intravenous infusion. It must never be given by the intramuscular or subcutaneous route. Severe local tissue necrosis will occur if there is extravasation during administration. Myocardial toxicity manifested in its most severe form by potentially fatal congestive heart failure may occur either during therapy or months to years after termination of therapy. The incidence of myocardial toxicity increases after a total cumulative dose exceeding 400 to 550 mg/m² in adults, 300 mg/m² in children more than 2 years of age, or 10 mg/kg in children less than 2 years of age. Severe myelosuppression occurs when used in therapeutic doses; this may lead to infection or hemorrhage [FDA].",
    adult: [{ ind: "AML induction", text: "45 mg/m²/day days 1–3 (30 mg/m² if 60 or older) with cytarabine.", calc: ["aml", "aml60"] }, { ind: "Adult ALL", text: "45 mg/m²/day days 1–3 with other agents." }],
    child: [{ ind: "ALL", text: "25 mg/m² weekly (1 mg/kg under 2 years or BSA under 0.5 m²).", calc: ["pall", "pinf"] }] }
});

/* ---------- DECITABINE (FDA, Sun Pharma NDA205582, eff. 2020-07-23) ---------- */
FDB_M("decitabine", {
  inn: "Decitabine", atc: "L01BC08", cls: "Hypomethylating nucleoside metabolic inhibitor",
  linked: [["Myelodysplastic syndromes — adults", "[FDA]", ""]],
  forms: ["Powder for injection 50 mg vial [FDA]."],
  moa: "Incorporates into DNA and inhibits DNA methyltransferase [NEP].",
  pk: ["Short half-life (under 1 h) [NEP]."],
  ind: { adult: ["MDS of all FAB subtypes and IPSS intermediate-1, intermediate-2 and high-risk groups, previously treated or untreated [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Three-day regimen", "15 mg/m² IV over 3 h every 8 h for 3 days; repeat every 6 weeks [FDA]."], ["Five-day regimen", "20 mg/m² IV over 1 h daily for 5 days; repeat every 4 weeks [FDA]."], ["Cycle rules", "Repeat when ANC at least 1000/µL and platelets at least 50,000/µL; at least 4 cycles; delay and reduce for haematologic toxicity [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "BSA dosing; needs height." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Consider antiemetic premedication; baseline CBC, liver panel, creatinine [FDA]." },
  tox: { human: "Increased myelosuppression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote; standard supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Neutropenia, thrombocytopenia, anaemia, fever, nausea [NEP]."], serious: ["Febrile neutropenia, serious infection [NEP]"] },
  monitor: ["CBC with platelets before each cycle; liver and kidney tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "decitabine", indication_id: "d5", label: "MDS — 20 mg/m² daily × 5 days (every 4 weeks)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 50, unit: "mg/vial" }], rounding: "Nearest 0.1 mg", infusion: { duration_h: 1 }, renal: [], flags: [], sources: ["FDA"] },
    { drug: "decitabine", indication_id: "d3", label: "MDS — 15 mg/m² every 8 h × 3 days (every 6 weeks)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 50, unit: "mg/vial" }], rounding: "Nearest 0.1 mg", infusion: { duration_h: 3 }, renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Decitabine for injection — Sun Pharmaceutical (NDA205582), label effective 2020-07-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c155d6ba-9a16-406c-919e-65a149689ab9"]],
  dose: { tagline: "Hypomethylating agent for MDS.",
    adult: [{ ind: "MDS (5-day)", text: "20 mg/m² over 1 h daily × 5, every 4 weeks.", calc: ["d5"] }, { ind: "MDS (3-day)", text: "15 mg/m² over 3 h every 8 h × 3 days, every 6 weeks.", calc: ["d3"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DEFERASIROX (FDA EXJADE tablets for oral suspension, Novartis, NDA021882, eff. 2026-01-28) ---------- */
FDB_M("deferasirox", {
  inn: "Deferasirox", atc: "V03AC03", cls: "Oral iron chelator",
  linked: [["Thalassaemia — transfusional iron overload", "[FDA]", "thal-child"], ["Transfusion therapy — chronic iron overload", "[FDA]", "transfusion-adult"]],
  forms: ["Exjade tablets for oral suspension 125, 250, 500 mg — disperse in water, orange or apple juice [FDA].", "Film-coated deferasirox tablets/granules (Jadenu-type) use different mg/kg doses — not interchangeable mg for mg [NEP]."],
  moa: "Tridentate chelator binding iron (2:1), excreted mainly in faeces [NEP].",
  pk: ["Elimination half-life 8–16 h [FDA].", "Doubles theophylline exposure (CYP1A2 inhibition) [FDA]."],
  ind: { adult: ["Chronic transfusional iron overload, 2 years and older [FDA].", "Non-transfusion-dependent thalassaemia with LIC at least 5 mg Fe/g dry weight and ferritin over 300 mcg/L, 10 years and older [FDA]."], paed: ["Transfusional iron overload from 2 years; NTDT from 10 years [FDA]."] },
  adult: [["Transfusional iron overload (eGFR over 60)", "Start 20 mg/kg once daily as suspension, to the nearest whole tablet; adjust every 3–6 months by ferritin; doses above 40 mg/kg not recommended [FDA]."], ["NTDT (eGFR over 60)", "Start 10 mg/kg once daily [FDA]."], ["Start criteria (transfusional)", "At least 100 mL/kg packed cells (about 20 units for 40 kg) and ferritin consistently over 1000 mcg/L [FDA]."], ["Ferritin falls", "Under 1000 mcg/L twice: consider reducing (especially above 25 mg/kg/day); under 500 mcg/L: interrupt [FDA]."]],
  paed: { tiers: ["2 years and older: same mg/kg as adults [FDA]."], transition: "Same [FDA].", calcNote: "Rounded to the nearest 125 mg (whole tablet), per the label." },
  adj: { renal: "eGFR under 40 mL/min/1.73 m²: contraindicated; eGFR 40–60: halve the starting dose [FDA].", hepatic: "Child-Pugh B: reduce starting dose by 50%; Child-Pugh C: avoid [FDA].", preg: "Not established in primary source. [NEP]", other: "Measure serum creatinine twice before starting; baseline hearing and eye tests [FDA]." },
  tox: { human: "Hepatitis; in one child 2–3× dose for 6 days caused acute renal and liver failure [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the drug; supportive care [FDA]." },
  contra: ["eGFR under 40 mL/min/1.73 m² [FDA].", "Poor performance status; high-risk MDS; advanced malignancy [FDA].", "Platelets under 50 × 10⁹/L [FDA].", "Hypersensitivity to deferasirox [FDA]."],
  ae: { common: ["Abdominal pain, nausea, vomiting, diarrhoea, rash, rise in creatinine [FDA]."], serious: ["Acute renal failure (boxed) [FDA]", "Hepatic failure (boxed) [FDA]", "Gastrointestinal haemorrhage (boxed) [FDA]", "Auditory and ocular disturbances; cytopenias [NEP]"] },
  monitor: ["Serum creatinine and urine protein monthly (weekly for the first month if at risk); liver tests; ferritin monthly; yearly hearing and eye tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "deferasirox", indication_id: "tio", label: "Transfusional iron overload — start 20 mg/kg once daily (Exjade)", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab for suspension", strength: 125, unit: "mg/tab" }], round_to: 125, rounding: "Nearest whole tablet (125 mg)", renal: [{ crcl_min: 40, crcl_max: 60, action: "reduce_dose", factor: 0.5 }, { crcl_min: 0, crcl_max: 39.999, action: "avoid", text: "eGFR under 40: contraindicated" }], renal_note: "Label bands use eGFR mL/min/1.73 m² [FDA]", flags: ["Exjade (dispersible) only — not film-coated tablets", "Doses above 40 mg/kg not recommended"], sources: ["FDA"] },
    { drug: "deferasirox", indication_id: "ntdt", label: "NTDT — start 10 mg/kg once daily (Exjade)", route: "PO", population: { min_age_months: 120, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab for suspension", strength: 125, unit: "mg/tab" }], round_to: 125, rounding: "Nearest whole tablet (125 mg)", renal: [{ crcl_min: 40, crcl_max: 60, action: "reduce_dose", factor: 0.5 }, { crcl_min: 0, crcl_max: 39.999, action: "avoid", text: "eGFR under 40: contraindicated" }], renal_note: "Label bands use eGFR mL/min/1.73 m² [FDA]", flags: ["Exjade (dispersible) only — not film-coated tablets"], sources: ["FDA"] }
  ],
  sources: [["FDA", "EXJADE (deferasirox) tablets for oral suspension — Novartis, label effective 2026-01-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3495a70c-870c-4968-940e-8baea152cf85"]],
  dose: { tagline: "Once-daily oral iron chelator — check kidneys and liver monthly.",
    boxedTitle: "Renal failure, hepatic failure and gastrointestinal hemorrhage",
    boxed: "Exjade can cause acute renal failure and death, particularly in patients with comorbidities and those who are in the advanced stages of their hematologic disorders. Evaluate baseline renal function prior to starting or increasing Exjade dosing in all patients. Exjade is contraindicated in adult and pediatric patients with eGFR less than 40 mL/min/1.73 m². Measure serum creatinine in duplicate prior to initiation of therapy. Monitor renal function at least monthly. Exjade can cause hepatic injury including hepatic failure and death. Measure serum transaminases and bilirubin in all patients prior to initiating treatment, every 2 weeks during the first month, and at least monthly thereafter. Exjade can cause gastrointestinal (GI) hemorrhages, which may be fatal, especially in elderly patients who have advanced hematologic malignancies and/or low platelet counts. Monitor patients and discontinue Exjade for suspected GI ulceration or hemorrhage [FDA].",
    adult: [{ ind: "Transfusional iron overload", text: "20 mg/kg once daily (max 40 mg/kg), titrated to ferritin.", calc: ["tio"] }, { ind: "NTDT", text: "10 mg/kg once daily.", calc: ["ntdt"] }],
    child: [{ ind: "2 years and older", text: "Same mg/kg as adults.", calc: ["tio", "ntdt"] }] }
});

/* ---------- DEFERIPRONE (FDA FERRIPROX, Chiesi, NDA021825/NDA212269, eff. 2026-01-28) ---------- */
FDB_M("deferiprone", {
  inn: "Deferiprone", atc: "V03AC02", cls: "Oral iron chelator",
  linked: [["Thalassaemia — transfusional iron overload", "[FDA]", "thal-child"]],
  forms: ["Tablets 1000 mg — two formulations: twice-a-day and three-times-a-day; check the tablet matches the regimen [FDA]."],
  moa: "Bidentate iron chelator; iron complex excreted in urine [NEP].",
  pk: ["Elimination half-life about 2 h [FDA]."],
  ind: { adult: ["Transfusional iron overload in thalassaemia syndromes, sickle cell disease or other anaemias, 8 years and older [FDA].", "Not established in MDS or Diamond–Blackfan anaemia [FDA]."], paed: ["From 8 years [FDA]."] },
  adult: [["Iron overload", "Start 75 mg/kg/day (actual weight) in 2 doses (twice-a-day tablet) or 3 doses (three-times-a-day tablet); max 99 mg/kg/day [FDA]."]],
  paed: { tiers: ["8 years and older: same mg/kg as adults [FDA]."], transition: "Same [FDA].", calcNote: "Per-day dose split by formulation; tablets are scored — check the label table for tablet counts." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Interrupt for neutropenia or infection [FDA]." },
  tox: { human: "Cerebellar signs, diplopia, nystagmus, psychomotor slowing, hypotonia in children on 2.5–3× dose for over a year [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the drug — signs regress; no antidote [FDA]." },
  contra: ["Hypersensitivity to deferiprone or excipients (Henoch–Schönlein purpura, urticaria, periorbital oedema reported) [FDA]."],
  ae: { common: ["Nausea, vomiting, abdominal pain, arthralgia, raised ALT, red-brown urine [NEP]."], serious: ["Agranulocytosis and neutropenia (boxed) [FDA]", "Zinc deficiency [NEP]"] },
  monitor: ["ANC before starting and regularly while on therapy [FDA]; weekly ANC is common practice; ferritin; liver tests [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "deferiprone", indication_id: "bid", label: "Iron overload — 75 mg/kg/day in 2 doses (twice-a-day tablet)", route: "PO", population: { min_age_months: 96, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 75, unit: "mg", per: "day", value_max: 99 }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [], rounding: "Use the label tablet table", renal: [], flags: ["Twice-a-day 1000 mg tablet only"], sources: ["FDA"] },
    { drug: "deferiprone", indication_id: "tid", label: "Iron overload — 75 mg/kg/day in 3 doses (three-times-a-day tablet)", route: "PO", population: { min_age_months: 96, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 75, unit: "mg", per: "day", value_max: 99 }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [], rounding: "Use the label tablet table", renal: [], flags: ["Three-times-a-day 1000 mg tablet only"], sources: ["FDA"] }
  ],
  sources: [["FDA", "FERRIPROX (deferiprone) tablets — Chiesi USA, label effective 2026-01-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=946718ff-df43-1baa-74d1-e5bcfbe8ad86"]],
  dose: { tagline: "Oral iron chelator — watch the neutrophil count.",
    boxedTitle: "Agranulocytosis and neutropenia",
    boxed: "FERRIPROX can cause agranulocytosis that can lead to serious infections and death. Neutropenia may precede the development of agranulocytosis. Measure the absolute neutrophil count (ANC) before starting FERRIPROX therapy and monitor regularly while on therapy. Interrupt FERRIPROX therapy if neutropenia develops. Interrupt FERRIPROX if infection develops, and monitor the ANC more frequently. Advise patients taking FERRIPROX to report immediately any symptoms indicative of infection [FDA].",
    adult: [{ ind: "Transfusional iron overload", text: "75 mg/kg/day in 2 or 3 doses (by tablet type); max 99 mg/kg/day.", calc: ["bid", "tid"] }],
    child: [{ ind: "8 years and older", text: "Same mg/kg as adults.", calc: ["bid", "tid"] }] }
});

/* ---------- DEFEROXAMINE (FDA DESFERAL, Novartis, NDA016267, eff. 2025-06-17) ---------- */
FDB_M("deferoxamine", {
  inn: "Deferoxamine", atc: "V03AC01", cls: "Parenteral iron chelator (antidote)",
  linked: [["Poisoning — adults (acute iron)", "[FDA]", "poisoning-adult"], ["Poisoning — children (acute iron)", "[FDA]", "poisoning-child"], ["Thalassaemia — transfusional iron overload", "[FDA]", "thal-child"]],
  forms: ["Powder for injection 500 mg vial (deferoxamine mesylate) [FDA]."],
  moa: "Binds ferric iron to form ferrioxamine, excreted in urine (turns it reddish) [NEP].",
  pk: ["Iron chelate excreted mainly by the kidney [FDA]."],
  ind: { adult: ["Adjunct in acute iron intoxication [FDA].", "Transfusional iron overload in chronic anaemia [FDA].", "Not for primary haemochromatosis (phlebotomy preferred) [FDA]."], paed: ["Same indications [FDA]."] },
  adult: [["Acute iron poisoning — IM (not in shock)", "1000 mg, then 500 mg every 4–12 h as needed; max 6000 mg in 24 h [FDA]."], ["Acute iron poisoning — IV (cardiovascular collapse only)", "1000 mg at no more than 15 mg/kg/h, then 500 mg every 4–12 h at up to 125 mg/h; max 6000 mg in 24 h [FDA]."], ["Chronic iron overload — SC infusion", "20–60 mg/kg/day (about 25 if ferritin under 2000 ng/mL, 35 if 2000–3000, up to 55 if higher) [FDA]."], ["Chronic iron overload — IV", "Adults 40–50 mg/kg/day over 8–12 h, 5–7 days a week [FDA]."]],
  paed: { tiers: ["Chronic iron overload: 20–40 mg/kg/day (IV over 8–12 h, 5–7 days a week); max 40 mg/kg/day in children [FDA].", "Acute poisoning: same regimen as adults [FDA]."], transition: "Adult maximum 60 mg/kg/day [FDA].", calcNote: "Minimum daily dose 20 mg/kg; maximum 40 mg/kg/day (children) or 60 mg/kg/day (adults)." },
  adj: { renal: "Severe renal disease or anuria: contraindicated [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Rapid IV infusion or bolus causes hypotension and shock [FDA]." },
  tox: { human: "Hypotension, tachycardia, GI upset, transient vision loss, aphasia, CNS depression, bradycardia, acute renal failure; ARDS with excessive IV doses in acute iron poisoning [FDA].", animal: "IV LD50: mice 287 mg/kg, rats 329 mg/kg [FDA].", manage: "Stop or slow the infusion; supportive care [NEP]." },
  contra: ["Hypersensitivity to deferoxamine (anaphylaxis reported) [FDA].", "Severe renal disease or anuria [FDA]."],
  ae: { common: ["Injection-site pain and swelling, reddish urine [NEP]."], serious: ["Hypotension with rapid infusion [FDA]", "Ocular and auditory toxicity with long-term use [NEP]", "Yersinia and mucormycosis infections [NEP]", "Growth retardation in children at high doses [NEP]"] },
  monitor: ["BP during IV use; urine colour and iron; yearly eye and hearing tests; growth in children [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "deferoxamine", indication_id: "acute", label: "Acute iron poisoning — 1000 mg, then 500 mg every 4–12 h", route: "IM/IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_daily: 6000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "reconstituted for IV/SC (500 mg + 5 mL water)", strength: 95, unit: "mg/mL" }, { form: "vial", strength: 500, unit: "mg/vial" }], rounding: "Whole vials", renal: [], flags: ["IV only in cardiovascular collapse — max 15 mg/kg/h for the first 1000 mg", "Maximum 6000 mg in 24 h"], sources: ["FDA"] },
    { drug: "deferoxamine", indication_id: "chronic_c", label: "Chronic iron overload (child) — 20–40 mg/kg/day", route: "SC/IV", population: { min_age_months: 0, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "day", value_max: 40 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted for IV/SC (500 mg + 5 mL water)", strength: 95, unit: "mg/mL" }, { form: "vial", strength: 500, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 8 }, renal: [], flags: ["Infuse over 8–12 h, 5–7 days a week"], sources: ["FDA"] },
    { drug: "deferoxamine", indication_id: "chronic_a", label: "Chronic iron overload (adult) — 20–60 mg/kg/day", route: "SC/IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "day", value_max: 60 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted for IV/SC (500 mg + 5 mL water)", strength: 95, unit: "mg/mL" }, { form: "vial", strength: 500, unit: "mg/vial" }], rounding: "Nearest mg", infusion: { duration_h: 8 }, renal: [], flags: ["IV: 40–50 mg/kg/day over 8–12 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "DESFERAL (deferoxamine mesylate) for injection — Novartis, label effective 2025-06-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a7174843-5965-49fc-b842-f7eff7b48bbc"]],
  dose: { tagline: "Parenteral iron chelator for iron poisoning and transfusional overload.",
    adult: [{ ind: "Acute iron poisoning", text: "1000 mg IM (IV only in shock, max 15 mg/kg/h), then 500 mg every 4–12 h; max 6 g/day.", calc: ["acute"] }, { ind: "Chronic iron overload", text: "20–60 mg/kg/day SC or IV over 8–12 h.", calc: ["chronic_a"] }],
    child: [{ ind: "Chronic iron overload", text: "20–40 mg/kg/day over 8–12 h.", calc: ["chronic_c"] }, { ind: "Acute iron poisoning", text: "Same regimen as adults.", calc: ["acute"] }] }
});

/* ---------- DEFIBROTIDE (FDA DEFITELIO, Jazz, NDA208114, eff. 2025-07-01) ---------- */
FDB_M("defibrotide", {
  inn: "Defibrotide", atc: "B01AX01", cls: "Oligonucleotide with antithrombotic and profibrinolytic action",
  linked: [["Hepatic veno-occlusive disease (sinusoidal obstruction syndrome) after HSCT", "[FDA]", ""]],
  forms: ["Injection 200 mg/2.5 mL (80 mg/mL) vial [FDA]."],
  moa: "Protects endothelial cells and enhances fibrinolysis [NEP].",
  pk: ["Elimination half-life under 2 h [FDA].", "Not dialysable [FDA]."],
  ind: { adult: ["Hepatic VOD/SOS with renal or pulmonary dysfunction after HSCT [FDA]."], paed: ["Same, in children [FDA]."] },
  adult: [["VOD/SOS", "6.25 mg/kg every 6 h as a 2-h IV infusion, on baseline (pre-conditioning) weight; at least 21 days, up to 60 days until resolution [FDA]."], ["Administration", "Dilute; 0.2 micron in-line filter; flush with D5W or saline before and after; no other IV drugs in the same line at the same time [FDA]."]],
  paed: { tiers: ["Same mg/kg as adults [FDA]."], transition: "Same [FDA].", calcNote: "Use weight before the HSCT conditioning regimen." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Before each dose confirm no significant bleeding and stable haemodynamics on no more than one vasopressor [FDA]." },
  tox: { human: "No overdose cases [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; no antidote; not dialysable [FDA]." },
  contra: ["Systemic anticoagulant or fibrinolytic therapy at the same time [FDA].", "Hypersensitivity to defibrotide or excipients [FDA]."],
  ae: { common: ["Hypotension, diarrhoea, vomiting, nausea, epistaxis [NEP]."], serious: ["Haemorrhage (including pulmonary and GI) [NEP]", "Hypersensitivity [FDA]"] },
  monitor: ["Signs of bleeding; haemodynamics [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "defibrotide", indication_id: "vod", label: "VOD/SOS — 6.25 mg/kg every 6 h (2-h infusion)", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 6.25, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "baseline (pre-conditioning)", formulations: [{ form: "inj", strength: 80, unit: "mg/mL" }], rounding: "Nearest mg", infusion: { duration_h: 2 }, renal: [], flags: ["Use weight before HSCT conditioning", "0.2 micron in-line filter"], sources: ["FDA"] }
  ],
  sources: [["FDA", "DEFITELIO (defibrotide sodium) injection — Jazz Pharmaceuticals, label effective 2025-07-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c3db989-d7ad-41ed-9ebf-698dcf6c24ec"]],
  dose: { tagline: "Treatment for veno-occlusive disease after stem-cell transplant.",
    adult: [{ ind: "VOD/SOS after HSCT", text: "6.25 mg/kg every 6 h over 2 h for at least 21 days.", calc: ["vod"] }],
    child: [{ ind: "Children", text: "Same mg/kg.", calc: ["vod"] }] }
});

/* ---------- DEFLAZACORT (FDA EMFLAZA, PTC Therapeutics, NDA208684/NDA208685, eff. 2026-10-13) ---------- */
FDB_M("deflazacort", {
  inn: "Deflazacort", atc: "H02AB13", cls: "Corticosteroid (oxazoline derivative of prednisolone)",
  linked: [["Duchenne muscular dystrophy", "[FDA]", ""], ["Steroid-responsive conditions (Bhutan use)", "[BT-NEML]", ""]],
  forms: ["Tablets 6, 18, 30, 36 mg [FDA]; 6 mg and 30 mg in Bhutan [BT-NEML].", "Oral suspension 22.75 mg/mL [FDA]."],
  moa: "Glucocorticoid receptor agonist [NEP].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Duchenne muscular dystrophy [FDA]."], paed: ["Duchenne muscular dystrophy from 2 years [FDA]."] },
  adult: [["DMD", "About 0.9 mg/kg once daily; tablets: round up to the nearest possible dose (any combination of strengths); suspension: round up to the nearest 0.1 mL [FDA]."], ["Stopping", "Taper gradually if given for more than a few days [FDA]."]],
  paed: { tiers: ["2 years and older: 0.9 mg/kg once daily [FDA]."], transition: "Same [FDA].", calcNote: "Rounded up to a multiple of 6 mg (smallest tablet), as the label says to round up." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Give all vaccines before starting; live vaccines at least 4–6 weeks before [FDA]. Avoid grapefruit juice [FDA]. Moderate or strong CYP3A4 inhibitors: give one-third of the dose [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Acute: gastric lavage or emesis then supportive care; chronic: reduce dose temporarily or alternate days [FDA]." },
  contra: ["Hypersensitivity to deflazacort or inactive ingredients [FDA]."],
  ae: { common: ["Cushingoid appearance, weight gain, increased appetite, hirsutism, upper respiratory infection [NEP]."], serious: ["Adrenal suppression and crisis on withdrawal [FDA]", "Serious infections; SJS/TEN [NEP]", "Hyperglycaemia, cataract, osteoporosis, growth suppression [NEP]"] },
  monitor: ["Weight, BP, glucose, growth, eyes, bone health [NEP]."],
  local: { neml: "On the Bhutan NEML 2025: deflazacort 6 mg and 30 mg tablets [BT-NEML].", strengths: "6 mg, 30 mg.", stg: "Not specified in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "deflazacort", indication_id: "dmd", label: "DMD — 0.9 mg/kg once daily (round up)", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.9, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 6, unit: "mg/tab" }], round_to: 6, round_mode: "up", rounding: "Round up to a multiple of 6 mg", renal: [], flags: ["Suspension 22.75 mg/mL: round up to the nearest 0.1 mL instead"], sources: ["FDA"] }
  ],
  sources: [["FDA", "EMFLAZA (deflazacort) tablets and oral suspension — PTC Therapeutics, label effective 2026-10-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=31b347d2-f156-4055-9d8f-7cf0df420296"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Once-daily steroid for Duchenne muscular dystrophy.",
    adult: [{ ind: "DMD", text: "0.9 mg/kg once daily, rounded up.", calc: ["dmd"] }],
    child: [{ ind: "DMD, 2 years and older", text: "0.9 mg/kg once daily, rounded up.", calc: ["dmd"], bt: "Bhutan NEML: 6 mg and 30 mg tablets." }] }
});

/* ---------- DEGARELIX (FDA FIRMAGON, Ferring, NDA022201, eff. 2024-01-30) ---------- */
FDB_M("degarelix", {
  inn: "Degarelix", atc: "L02BX02", cls: "GnRH receptor antagonist",
  linked: [["Advanced prostate cancer", "[FDA]", ""]],
  forms: ["Powder for SC injection: 240 mg starting kit (two 120 mg vials) and 80 mg maintenance vial, with prefilled diluent [FDA]."],
  moa: "Blocks pituitary GnRH receptors, rapidly lowering testosterone without a flare [NEP].",
  pk: ["Depot gives a median terminal half-life of about 53 days [FDA]."],
  ind: { adult: ["Advanced prostate cancer [FDA]."], paed: ["Not applicable. [NEP]"] },
  adult: [["Start", "240 mg SC as two 120 mg injections (40 mg/mL) in the abdomen [FDA]."], ["Maintenance", "80 mg SC (20 mg/mL) every 28 days, first dose 28 days after the start [FDA]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not indicated in females [NEP].", other: "Healthcare professional gives it; abdomen only, away from waistband and ribs; rotate sites [FDA]." },
  tox: { human: "No overdose reports [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; symptomatic and supportive care [FDA]." },
  contra: ["Severe hypersensitivity to degarelix or components [FDA]."],
  ae: { common: ["Injection-site reactions, hot flushes, weight gain, raised transaminases [NEP]."], serious: ["QT prolongation [NEP]", "Hypersensitivity [FDA]"] },
  monitor: ["PSA and testosterone; ECG and electrolytes if QT risk [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "FIRMAGON (degarelix) for injection — Ferring, label effective 2024-01-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ab11dd8a-0fd9-4013-89ab-e114557c7e4b"]],
  dose: { tagline: "Monthly GnRH antagonist injection for prostate cancer.",
    adult: [{ ind: "Advanced prostate cancer", text: "240 mg SC (2 × 120 mg) to start, then 80 mg every 28 days." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- DELAFLOXACIN (FDA BAXDELA, Melinta, NDA208610/NDA208611, eff. 2025-08-01) ---------- */
FDB_M("delafloxacin", {
  inn: "Delafloxacin", atc: "J01MA23", cls: "Fluoroquinolone antibacterial",
  linked: [["Skin and soft tissue infection — adults", "ABSSSI [FDA]", "ssti-adult"], ["Community-acquired pneumonia — adults", "[FDA]", "pneumonia-adult"]],
  forms: ["Tablets 450 mg [FDA].", "Powder for injection 300 mg vial [FDA]."],
  moa: "Inhibits bacterial DNA gyrase and topoisomerase IV [NEP].",
  pk: ["Half-life about 4–8 h [NEP].", "Haemodialysis removes about 19% [FDA]."],
  ind: { adult: ["ABSSSI and community-acquired bacterial pneumonia caused by susceptible bacteria [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ABSSSI and CABP", "300 mg IV over 60 min every 12 h, or 450 mg orally every 12 h; ABSSSI 5–14 days, CABP 5–10 days [FDA]."], ["Antacids, iron, zinc, sucralfate", "Give tablets at least 2 h before or 6 h after [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose; IV dose is reduced if eGFR 15–29." },
  adj: { renal: "eGFR 15–29: IV 200 mg every 12 h, oral unchanged; under 15 (including haemodialysis): not recommended [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Avoid in myasthenia gravis [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Observation and supportive care [FDA]." },
  contra: ["Hypersensitivity to delafloxacin or any fluoroquinolone [FDA]."],
  ae: { common: ["Nausea, diarrhoea, headache, raised transaminases [NEP]."], serious: ["Tendinitis/tendon rupture, peripheral neuropathy, CNS effects, myasthenia exacerbation (boxed) [FDA]", "C. difficile diarrhoea; dysglycaemia; aortic aneurysm [NEP]"] },
  monitor: ["Tendon pain, neuropathy, mental status, glucose in diabetes [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "delafloxacin", indication_id: "iv", label: "ABSSSI / CABP — 300 mg IV every 12 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "vial", strength: 300, unit: "mg/vial" }], rounding: "Whole vial", infusion: { duration_h: 1 }, renal: [{ crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 200 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", text: "eGFR under 15 or haemodialysis: not recommended" }], renal_note: "Label bands use eGFR (MDRD) [FDA]", flags: [], sources: ["FDA"] },
    { drug: "delafloxacin", indication_id: "po", label: "ABSSSI / CABP — 450 mg orally every 12 h", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 450, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 450, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 450, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 14.999, action: "avoid", text: "eGFR under 15 or haemodialysis: not recommended" }], renal_note: "No oral adjustment for eGFR 15–89 [FDA]", flags: ["2 h before or 6 h after antacids, iron, zinc, sucralfate"], sources: ["FDA"] }
  ],
  sources: [["FDA", "BAXDELA (delafloxacin) tablets and injection — Melinta Therapeutics, label effective 2025-08-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fb77637a-88d9-4aea-958f-e270030ce30d"]],
  dose: { tagline: "Fluoroquinolone with MRSA activity for skin infection and CAP.",
    boxedTitle: "Tendinitis, tendon rupture, peripheral neuropathy, CNS effects and exacerbation of myasthenia gravis",
    boxed: "Fluoroquinolones have been associated with disabling and potentially irreversible serious adverse reactions that have occurred together, including: tendinitis and tendon rupture, peripheral neuropathy, central nervous system effects. Discontinue BAXDELA immediately and avoid the use of fluoroquinolones, including BAXDELA, in patients who experience any of these serious adverse reactions. Fluoroquinolones may exacerbate muscle weakness in patients with myasthenia gravis. Avoid BAXDELA in patients with known history of myasthenia gravis [FDA].",
    adult: [{ ind: "ABSSSI / CABP", text: "300 mg IV or 450 mg orally every 12 h (IV 200 mg if eGFR 15–29).", calc: ["iv", "po"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DELANDISTROGENE MOXEPARVOVEC (FDA ELEVIDYS, Sarepta, BLA125781, eff. 2026-08-12) ---------- */
FDB_M("delandistrogene-moxeparvovec", {
  inn: "Delandistrogene moxeparvovec", atc: "M09AX15", cls: "AAV vector gene therapy (micro-dystrophin)",
  linked: [["Duchenne muscular dystrophy (ambulatory, 4 years and older)", "[FDA]", ""]],
  forms: ["Suspension for IV infusion 1.33 × 10¹³ vector genomes/mL in 10 mL vials, supplied as a weight-matched kit [FDA]."],
  moa: "Delivers a micro-dystrophin gene to muscle [FDA].",
  pk: ["Serum vector genome half-life about 12 h; mostly cleared by 1 week [FDA]."],
  ind: { adult: ["Not indicated in adults outside the label population [NEP]."], paed: ["Ambulatory DMD patients 4 years and older with a confirmed DMD gene mutation [FDA]."] },
  adult: [["Not applicable", "See children [NEP]."]],
  paed: { tiers: ["10–<70 kg: 1.33 × 10¹⁴ vg/kg; 70 kg or more: 9.31 × 10¹⁵ vg — single IV infusion over 1–2 h at under 10 mL/kg/h [FDA].", "Corticosteroids from 1 day before for at least 60 days [FDA].", "Only if anti-AAVrh74 antibody titre under 1:400; postpone with infection in the past 4 weeks [FDA]."], transition: "Not applicable.", calcNote: "Single dose in vector genomes — pharmacy prepares the kit; no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not recommended with preexisting liver impairment (GGT over 2× ULN or raised bilirubin) [FDA].", preg: "Not established in primary source. [NEP]", other: "Stay near an appropriate facility for at least 2 months after infusion [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Any deletion in exon 8 and/or exon 9 of the DMD gene [FDA]."],
  ae: { common: ["Vomiting, nausea, liver enzyme rise, pyrexia [NEP]."], serious: ["Acute serious liver injury and liver failure (boxed) [FDA]", "Immune-mediated myositis; myocarditis [NEP]"] },
  monitor: ["Liver function weekly for 3 months and until normal; troponin and platelets before infusion [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ELEVIDYS (delandistrogene moxeparvovec-rokl) suspension — Sarepta Therapeutics, label effective 2026-08-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3525abcd-fbd2-46c5-9706-cffdf2e8a361"]],
  dose: { tagline: "One-time gene therapy for ambulatory Duchenne patients.",
    boxedTitle: "Acute serious liver injury and acute liver failure",
    boxed: "Acute serious liver injury, including life-threatening and fatal acute liver failure, has occurred with ELEVIDYS. Patients with preexisting liver impairment may be at higher risk. Prior to infusion, assess liver function by clinical examination and laboratory testing. Administer systemic corticosteroids before and after ELEVIDYS infusion. Continue to monitor liver function weekly for the first 3 months after infusion and continue until results are unremarkable. Instruct patients to maintain proximity to an appropriate healthcare facility, as determined by the healthcare provider, for at least 2 months following ELEVIDYS infusion [FDA].",
    adult: [{ ind: "Adults", text: "Not applicable." }],
    child: [{ ind: "Ambulatory DMD, 4 years and older", text: "Single IV infusion: 1.33 × 10¹⁴ vg/kg (10–<70 kg) or 9.31 × 10¹⁵ vg (70 kg or more)." }] }
});

/* ---------- DELGOCITINIB (FDA ANZUPGO cream 2%, LEO Pharma, NDA219155, eff. 2026-11-13) ---------- */
FDB_M("delgocitinib", {
  inn: "Delgocitinib", atc: "D11AH11", cls: "Topical Janus kinase (JAK) inhibitor",
  linked: [["Chronic hand eczema — adults", "Moderate to severe, after topical steroids [FDA]", ""]],
  forms: ["Cream 2% (20 mg/g) [FDA]."],
  moa: "Inhibits JAK1–3 and TYK2 in the skin [NEP].",
  pk: ["Average half-life about 21 h after repeated application [FDA]."],
  ind: { adult: ["Moderate to severe chronic hand eczema with inadequate response to, or unsuitable for, topical corticosteroids [FDA].", "Not with other JAK inhibitors or potent immunosuppressants [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Chronic hand eczema", "Thin layer twice daily to affected hands and wrists only; max 30 g per 2 weeks or 60 g per month [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Topical." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Complete immunisations, including herpes zoster, before starting [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Wash off; supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Application-site pruritus and pain [NEP]."], serious: ["Serious infections, herpes zoster (class risk) [NEP]"] },
  monitor: ["Skin infections [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ANZUPGO (delgocitinib) cream 2% — LEO Pharma, label effective 2026-11-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a59bf36e-6f04-4b47-b385-8040c95f040c"]],
  dose: { tagline: "JAK-inhibitor cream for chronic hand eczema.",
    adult: [{ ind: "Chronic hand eczema", text: "Twice daily to hands and wrists; max 30 g per 2 weeks." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DEMECLOCYCLINE (FDA, Amneal ANDA065425, eff. 2026-04-02) ---------- */
FDB_M("demeclocycline", {
  inn: "Demeclocycline", atc: "J01AA01", cls: "Tetracycline antibacterial",
  linked: [["Rickettsial infections, mycoplasma, chlamydia and other tetracycline-susceptible infections", "[FDA]", ""], ["SIADH (off-label)", "[NEP]", "sodium-adult"]],
  forms: ["Tablets 150 mg, 300 mg [NEP]."],
  moa: "Binds the 30S ribosome, blocking protein synthesis; also blocks renal ADH action [NEP].",
  pk: ["Serum half-life 10–16 h [FDA].", "Not removed by haemodialysis or peritoneal dialysis [FDA]."],
  ind: { adult: ["Rickettsial infections, Mycoplasma pneumoniae, chlamydial infections and other susceptible organisms (label list) [FDA]."], paed: ["Children over 8 years [FDA]."] },
  adult: [["Infections", "600 mg/day: 150 mg four times daily or 300 mg twice daily; continue 24–48 h after symptoms settle [FDA]."], ["Administration", "1 h before or 2 h after meals with plenty of water; separate from antacids, calcium, magnesium, iron [FDA]."]],
  paed: { tiers: ["Over 8 years: 7–13 mg/kg/day in 2–4 divided doses; not above 600 mg/day [FDA]."], transition: "Adult dose [FDA].", calcNote: "Shown as twice-daily doses." },
  adj: { renal: "Use with caution; reduce doses and/or extend intervals [FDA].", hepatic: "Use with caution; reduce doses and/or extend intervals [FDA].", preg: "Tetracyclines can harm fetal teeth and bone [NEP].", other: "Photosensitivity is marked — avoid sun [NEP]. Nephrogenic diabetes insipidus can occur [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop, treat symptoms; not removed by dialysis [FDA]." },
  contra: ["Hypersensitivity to any tetracycline [FDA]."],
  ae: { common: ["Nausea, diarrhoea, photosensitivity [NEP]."], serious: ["Tooth discolouration under 8 years [NEP]", "Nephrogenic diabetes insipidus [NEP]", "Intracranial hypertension [NEP]"] },
  monitor: ["Kidney function; sodium if used for SIADH [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "demeclocycline", indication_id: "adult", label: "Adult — 300 mg twice daily (600 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 300, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Kidney impairment: lower doses and/or longer intervals [FDA]", flags: ["Or 150 mg four times daily"], sources: ["FDA"] },
    { drug: "demeclocycline", indication_id: "child", label: "Child over 8 years — 7–13 mg/kg/day in 2 doses (max 600 mg/day)", route: "PO", population: { min_age_months: 97, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 7, unit: "mg", per: "day", value_max: 13 }, interval_h: 12, divided_doses: 2, caps: { max_daily: 600, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Nearest ¼ tablet", renal: [], renal_note: "Kidney impairment: lower doses and/or longer intervals [FDA]", flags: ["Can also be split into 3–4 doses"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Demeclocycline hydrochloride tablets — Amneal (ANDA065425), label effective 2026-04-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=539add06-e0a0-401a-b4f6-20776084aa9c"]],
  dose: { tagline: "Tetracycline antibiotic; also used off-label for SIADH.",
    adult: [{ ind: "Infections", text: "150 mg four times daily or 300 mg twice daily.", calc: ["adult"] }],
    child: [{ ind: "Over 8 years", text: "7–13 mg/kg/day in 2–4 doses (max 600 mg/day).", calc: ["child"] }] }
});

/* ---------- DENILEUKIN DIFTITOX (FDA LYMPHIR, Citius, BLA761312, eff. 2025-01-23) ---------- */
FDB_M("denileukin-diftitox", {
  inn: "Denileukin diftitox", atc: "L01XX29", cls: "IL-2 receptor-directed cytotoxic fusion protein",
  linked: [["Cutaneous T-cell lymphoma (relapsed/refractory, stage I–III)", "[FDA]", ""]],
  forms: ["Powder for injection 300 mcg vial [FDA]."],
  moa: "IL-2 fused to diphtheria toxin fragments; kills CD25-expressing cells [NEP].",
  pk: ["Terminal half-life about 112 min (cycle 1, day 1) [FDA]."],
  ind: { adult: ["Relapsed or refractory stage I–III CTCL after at least one prior systemic therapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["CTCL", "9 mcg/kg/day (actual weight) IV over 60 min on days 1–5 of a 21-day cycle [FDA]."], ["Before each cycle", "Check liver and kidney function; delay if albumin under 3 g/dL [FDA]."], ["Premedication (cycles 1–3)", "Paracetamol (acetaminophen) 650 mg orally and an antihistamine (e.g. diphenhydramine 25 mg IV) at least 30 min before [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Unit is micrograms (mcg)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Withhold until capillary leak resolves, or stop by severity [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, fatigue, oedema, infusion reactions, hypoalbuminaemia [NEP]."], serious: ["Capillary leak syndrome (boxed) [FDA]", "Infusion reactions; visual loss; hepatotoxicity [NEP]"] },
  monitor: ["Weight, oedema, BP and albumin each cycle; vision [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "denileukin-diftitox", indication_id: "ctcl", label: "CTCL — 9 mcg/kg/day, days 1–5 of 21-day cycle", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 9, unit: "mcg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 300, unit: "mcg/vial" }], rounding: "Nearest mcg", infusion: { duration_h: 1 }, renal: [], flags: ["Micrograms — not mg", "Delay cycle if albumin under 3 g/dL"], sources: ["FDA"] }
  ],
  sources: [["FDA", "LYMPHIR (denileukin diftitox-cxdl) for injection — Citius Pharmaceuticals, label effective 2025-01-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ac3613d7-4304-40e7-a3f5-adb8a8adca5d"]],
  dose: { tagline: "IL-2–toxin fusion protein for relapsed CTCL.",
    boxedTitle: "Capillary leak syndrome",
    boxed: "Capillary leak syndrome (CLS), including life-threatening or fatal reactions, can occur in patients receiving LYMPHIR. Monitor patients for signs and symptoms of CLS during treatment. Withhold LYMPHIR until CLS resolves, or permanently discontinue based on severity [FDA].",
    adult: [{ ind: "CTCL", text: "9 mcg/kg/day IV days 1–5 every 21 days.", calc: ["ctcl"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DENOSUMAB (FDA Prolia-type 60 mg [Conexxence biosimilar BLA761398] + XGEVA 120 mg [BLA125320]) ---------- */
FDB_M("denosumab", {
  inn: "Denosumab", atc: "M05BX04", cls: "RANK ligand inhibitor (monoclonal antibody)",
  linked: [["Osteoporosis — postmenopausal women and men; glucocorticoid-induced", "[FDA]", "osteoporosis-adult"], ["Bone metastases, myeloma, giant cell tumour of bone, hypercalcaemia of malignancy (120 mg product)", "[FDA]", "calcium-adult"]],
  forms: ["60 mg/mL prefilled syringe (osteoporosis products, e.g. Prolia and biosimilars) [FDA].", "120 mg/1.7 mL vial (oncology product Xgeva and biosimilars) [FDA].", "The two strengths are different products — check which one is ordered [NEP]."],
  moa: "Binds RANKL, blocking osteoclast formation and bone resorption [NEP].",
  pk: ["Mean half-life about 25 days; levels fall over 4–5 months [FDA]."],
  ind: { adult: ["60 mg: postmenopausal osteoporosis at high fracture risk; men with osteoporosis; glucocorticoid-induced osteoporosis; bone loss on androgen deprivation (prostate) or aromatase inhibitors (breast) [FDA].", "120 mg: prevent skeletal events in myeloma and bone metastases from solid tumours; giant cell tumour of bone; hypercalcaemia of malignancy refractory to bisphosphonates [FDA]."], paed: ["120 mg: only skeletally mature adolescents with giant cell tumour of bone [FDA]."] },
  adult: [["Osteoporosis (60 mg product)", "60 mg SC every 6 months; plus calcium 1000 mg and vitamin D at least 400 IU daily [FDA]."], ["Myeloma / bone metastases (120 mg product)", "120 mg SC every 4 weeks; calcium and vitamin D as needed [FDA]."], ["Giant cell tumour of bone; hypercalcaemia of malignancy", "120 mg SC every 4 weeks with extra 120 mg doses on days 8 and 15 of the first month [FDA]."]],
  paed: { tiers: ["Skeletally mature adolescents with giant cell tumour of bone: adult 120 mg regimen [FDA].", "Otherwise not established [FDA]."], transition: "Adult dosing [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "eGFR under 30 or dialysis: high risk of severe hypocalcaemia — evaluate for CKD-MBD first and supervise by an expert (boxed for the 60 mg product) [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Contraindicated (60 mg product) — rule out pregnancy before each dose [FDA].", other: "Correct hypocalcaemia before starting [FDA]. Stopping causes rebound bone loss and multiple vertebral fractures — plan follow-on therapy [NEP]. Dental check before starting (osteonecrosis of the jaw) [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypocalcaemia (correct first) [FDA].", "Pregnancy (60 mg product) [FDA].", "Hypersensitivity to denosumab [FDA]."],
  ae: { common: ["Back pain, limb pain, musculoskeletal pain, raised cholesterol, cystitis [NEP]."], serious: ["Severe hypocalcaemia, especially in advanced CKD (boxed) [FDA]", "Osteonecrosis of the jaw; atypical femoral fracture [NEP]", "Multiple vertebral fractures after stopping [NEP]", "Serious infections; dermatitis [NEP]"] },
  monitor: ["Calcium before each dose (and within 14 days if CKD); vitamin D; dental health [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CONEXXENCE (denosumab-bnht) 60 mg injection, Prolia biosimilar — Fresenius Kabi, label effective 2026-11-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=39a0a789-778f-4695-b3a9-61643e6396cd"], ["FDA", "XGEVA (denosumab) 120 mg injection — Amgen, label effective 2026-06-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=628f0998-1206-4001-aeee-18133aa9f3bf"]],
  dose: { tagline: "RANKL antibody: 60 mg every 6 months for osteoporosis; 120 mg monthly in cancer.",
    boxedTitle: "Severe hypocalcemia in patients with advanced kidney disease (60 mg product)",
    boxed: "Patients with advanced chronic kidney disease (eGFR < 30 mL/min/1.73 m²), including dialysis-dependent patients, are at greater risk of severe hypocalcemia following denosumab products administration. Severe hypocalcemia resulting in hospitalization, life-threatening events and fatal cases have been reported. The presence of chronic kidney disease-mineral bone disorder (CKD-MBD) markedly increases the risk of hypocalcemia in these patients. Prior to initiating Conexxence in patients with advanced chronic kidney disease, evaluate for the presence of CKD-MBD. Treatment with Conexxence in these patients should be supervised by a healthcare provider with expertise in the diagnosis and management of CKD-MBD [FDA].",
    adult: [{ ind: "Osteoporosis", text: "60 mg SC every 6 months with calcium and vitamin D." }, { ind: "Myeloma / bone metastases", text: "120 mg SC every 4 weeks." }, { ind: "Giant cell tumour; hypercalcaemia of malignancy", text: "120 mg every 4 weeks plus extra doses on days 8 and 15 of month 1." }],
    child: [{ ind: "Skeletally mature adolescents (giant cell tumour)", text: "120 mg regimen." }, { ind: "Other children", text: "Not established." }] }
});

/* ---------- DEOXYCHOLIC ACID (FDA KYBELLA, Kythera/Allergan, NDA206333, eff. 2026-09-11) ---------- */
FDB_M("deoxycholic-acid", {
  inn: "Deoxycholic acid", atc: "D11AX24", cls: "Cytolytic injectable (adipocytolytic)",
  linked: [["Submental fat (cosmetic)", "[FDA]", ""]],
  forms: ["Injection 10 mg/mL, 2 mL vials [FDA]."],
  moa: "Disrupts adipocyte cell membranes [NEP].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Improve the appearance of moderate to severe submental fullness in adults — not for fat elsewhere [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Submental fat", "2 mg/cm² (0.2 mL injections 1 cm apart), up to 50 injections (100 mg, 10 mL) per session; up to 6 sessions at least 1 month apart [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Procedural — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Avoid the marginal mandibular nerve area; healthcare provider only [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Infection at the injection area [FDA]."],
  ae: { common: ["Swelling, bruising, pain, numbness, induration at the site [NEP]."], serious: ["Marginal mandibular nerve injury (asymmetric smile) [NEP]", "Dysphagia; skin ulceration and necrosis [NEP]"] },
  monitor: ["Local reaction; nerve function [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "KYBELLA (deoxycholic acid) injection — Kythera Biopharmaceuticals, label effective 2026-09-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe431ed4-ea6f-4e99-b4bc-ec25ae7b8553"]],
  dose: { tagline: "Injectable fat-dissolving agent for the double chin.",
    adult: [{ ind: "Submental fat", text: "0.2 mL injections 1 cm apart (max 10 mL) per session; up to 6 sessions." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DEPEMOKIMAB (FDA EXDENSUR, GSK, BLA761458, eff. 2026-06-10) ---------- */
FDB_M("depemokimab", {
  inn: "Depemokimab", atc: "R03DX12", cls: "Anti-IL-5 monoclonal antibody (long-acting)",
  linked: [["Severe eosinophilic asthma — adults", "Add-on maintenance [FDA]", "asthma-adult"], ["Severe eosinophilic asthma — 12 years and older", "[FDA]", "asthma-child"]],
  forms: ["100 mg/mL single-dose prefilled syringe [FDA]."],
  moa: "Binds IL-5, reducing eosinophil production and survival [NEP].",
  pk: ["Long half-life allows 6-monthly dosing [NEP]."],
  ind: { adult: ["Add-on maintenance for severe asthma with an eosinophilic phenotype, 12 years and older; not for acute bronchospasm [FDA]."], paed: ["From 12 years [FDA]."] },
  adult: [["Severe eosinophilic asthma", "100 mg SC once every 6 months (upper arm, thigh or abdomen, 5 cm from the navel), by a healthcare provider [FDA]."], ["Missed dose", "Give as soon as possible, then every 6 months from that date [FDA]."]],
  paed: { tiers: ["12 years and older: 100 mg every 6 months [FDA]."], transition: "Same [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Do not stop inhaled or systemic steroids abruptly [NEP]. Treat helminth infection first [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive with monitoring [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Upper respiratory infection, injection-site reactions [NEP]."], serious: ["Hypersensitivity [NEP]"] },
  monitor: ["Asthma control; eosinophils [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "EXDENSUR (depemokimab-ulaa) injection — GlaxoSmithKline, label effective 2026-06-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=30332b20-2ac0-42ad-a775-d3ca7f5fe29f"]],
  dose: { tagline: "Twice-yearly anti-IL-5 injection for eosinophilic asthma.",
    adult: [{ ind: "Severe eosinophilic asthma", text: "100 mg SC every 6 months." }],
    child: [{ ind: "12 years and older", text: "100 mg SC every 6 months." }] }
});

/* ---------- DESFLURANE (FDA SUPRANE, Baxter (Henry Schein), NDA020118, eff. 2026-07-15) ---------- */
FDB_M("desflurane", {
  inn: "Desflurane", atc: "N01AB07", cls: "Volatile inhalational anaesthetic (fluorinated ether)",
  linked: [["General anaesthesia — induction (adults) and maintenance (adults and children)", "[FDA]", ""]],
  forms: ["Volatile liquid 100% — use only a desflurane-specific heated vaporiser [FDA]."],
  moa: "General anaesthetic — enhances inhibitory and reduces excitatory neurotransmission [NEP].",
  pk: ["Low blood solubility — rapid onset and recovery [NEP]."],
  ind: { adult: ["Induction and maintenance of anaesthesia for inpatient and outpatient surgery [FDA]."], paed: ["Maintenance only, after induction with another agent and tracheal intubation [FDA].", "Contraindicated for induction in children (airway events) [FDA]."] },
  adult: [["Dosing", "Titrate to effect; MAC falls with age and with nitrous oxide, opioids and benzodiazepines (label table) [FDA]."]],
  paed: { tiers: ["Maintenance only; MAC by age in the label table [FDA]."], transition: "Same [FDA].", calcNote: "Titrated by inspired concentration — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "History of moderate to severe hepatic dysfunction after halogenated anaesthetics: contraindicated [FDA].", preg: "Not established in primary source. [NEP]", other: "Only trained anaesthesia personnel; airway, ventilation and resuscitation equipment available [FDA]. Reduces neuromuscular blocker needs [FDA]." },
  tox: { human: "Deep anaesthesia, cardiac and respiratory depression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop desflurane; secure airway; ventilate with oxygen; support circulation [FDA]." },
  contra: ["Known or suspected susceptibility to malignant hyperthermia [FDA].", "Induction of anaesthesia in children [FDA].", "Sensitivity to desflurane or other halogenated agents [FDA].", "History of moderate–severe hepatic dysfunction after halogenated anaesthetics [FDA].", "When general anaesthesia is contraindicated [FDA]."],
  ae: { common: ["Cough, breath-holding, laryngospasm, nausea and vomiting [NEP]."], serious: ["Malignant hyperthermia [FDA]", "Perioperative hyperkalaemia in myopathies [NEP]", "Hypotension and respiratory depression with depth [FDA]"] },
  monitor: ["End-tidal agent, BP, ECG, oxygenation, temperature [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "SUPRANE (desflurane) liquid for inhalation — Baxter (Henry Schein distributor), label effective 2026-07-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a3e4c8e5-bff0-4a8f-8401-e9866c846ee2"]],
  dose: { tagline: "Fast-offset volatile anaesthetic — not for induction in children.",
    adult: [{ ind: "Anaesthesia", text: "Titrate to effect by end-tidal concentration (MAC falls with age and N₂O)." }],
    child: [{ ind: "Maintenance only", text: "After induction with another agent and intubation." }] }
});

/* ---------- DESIPRAMINE (FDA NORPRAMIN, Validus, NDA014399, eff. 2025-07-03) ---------- */
FDB_M("desipramine", {
  inn: "Desipramine", atc: "N06AA01", cls: "Tricyclic antidepressant (secondary amine)",
  linked: [["Depression — adults", "[FDA]", "depression-adult"]],
  forms: ["Tablets 10, 25, 50, 75, 100, 150 mg [NEP]."],
  moa: "Mainly blocks noradrenaline reuptake [NEP].",
  pk: ["Long half-life; after fluoxetine allow at least 5 weeks before starting a TCA [FDA]."],
  ind: { adult: ["Depression [FDA]."], paed: ["Not recommended in children [FDA]."] },
  adult: [["Depression", "Usual 100–200 mg/day; severely ill up to 300 mg/day; above 300 mg/day not recommended; start low and increase [FDA]."], ["Adolescents and older people", "25–100 mg/day, usual max 100 mg; severely ill up to 150 mg/day; above 150 mg/day not recommended [FDA]."], ["High doses", "300 mg/day should usually be started in hospital with ECG monitoring [FDA]."]],
  paed: { tiers: ["Children: not recommended [FDA].", "Adolescents: 25–100 mg/day (max 150 mg/day) [FDA]."], transition: "Adult dose [FDA].", calcNote: "Titrated — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "QRS/QT/PR prolongation signals toxicity — reduce dose [FDA]." },
  tox: { human: "Overdose death rate higher than other TCAs; rapid onset of arrhythmias, seizures, coma [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Hospital monitoring; contact a poison centre; sodium bicarbonate for QRS widening is standard practice [FDA] [NEP]." },
  contra: ["MAOIs for psychiatric disorders now or within 14 days; starting with linezolid or IV methylene blue [FDA].", "Recovery phase after MI; hypersensitivity [NEP]."],
  ae: { common: ["Dry mouth, constipation, drowsiness, dizziness, postural hypotension [FDA]."], serious: ["Suicidality in young people (boxed) [FDA]", "Arrhythmias, sudden death [NEP]", "Serotonin syndrome with serotonergic drugs [FDA]"] },
  monitor: ["Mood and suicidality; ECG at high doses or in heart disease [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "NORPRAMIN (desipramine hydrochloride) tablets — Validus, label effective 2025-07-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=70b562ea-9f21-4e4a-b3ed-0590b2892f6a"]],
  dose: { tagline: "Noradrenergic tricyclic antidepressant — dangerous in overdose.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of NORPRAMIN or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older [FDA].",
    adult: [{ ind: "Depression", text: "100–200 mg/day (max 300 mg); older people 25–100 mg/day (max 150 mg)." }],
    child: [{ ind: "Children", text: "Not recommended." }, { ind: "Adolescents", text: "25–100 mg/day (max 150 mg)." }] }
});

/* ---------- DESLORATADINE (FDA CLARINEX, Organon, NDA021165, eff. 2025-05-17) ---------- */
FDB_M("desloratadine", {
  inn: "Desloratadine", atc: "R06AX27", cls: "Second-generation (non-sedating) antihistamine",
  linked: [["Allergic rhinitis and chronic urticaria", "[FDA]", ""]],
  forms: ["Tablets 5 mg [FDA].", "Oral solution 0.5 mg/mL and orally disintegrating tablets 2.5 mg, 5 mg (generic) [FDA]."],
  moa: "Selective peripheral H1 antagonist; active metabolite of loratadine [NEP].",
  pk: ["Mean half-life about 27 h [FDA].", "Not removed by haemodialysis [FDA]."],
  ind: { adult: ["Seasonal allergic rhinitis (from 2 years); perennial allergic rhinitis and chronic idiopathic urticaria (from 6 months) [FDA]."], paed: ["From 6 months (perennial rhinitis, urticaria) or 2 years (seasonal rhinitis) [FDA]."] },
  adult: [["All indications", "5 mg once daily, with or without food [FDA]."]],
  paed: { tiers: ["6–11 months: 1 mg (2 mL solution) once daily [FDA].", "12 months–5 years: 1.25 mg (2.5 mL) once daily [FDA].", "6–11 years: 2.5 mg (5 mL or one 2.5 mg ODT) once daily [FDA].", "12 years and older: 5 mg once daily [FDA]."], transition: "Adult dose from 12 years [FDA].", calcNote: "Fixed age-band doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Seasonal allergic rhinitis is labelled from 2 years only [FDA]." },
  tox: { human: "Somnolence at 10–20 mg/day [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Remove unabsorbed drug; symptomatic care; not dialysable [FDA]." },
  contra: ["Hypersensitivity to desloratadine, its ingredients, or loratadine [FDA]."],
  ae: { common: ["Pharyngitis, dry mouth, fatigue, headache [NEP]."], serious: ["Hypersensitivity including anaphylaxis [FDA]"] },
  monitor: ["Symptom control [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "desloratadine", indication_id: "i6", label: "6–11 months — 1 mg once daily", route: "PO", population: { min_age_months: 6, max_age_months: 12, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 1, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "solution", strength: 0.5, unit: "mg/mL" }], rounding: "Label volume", renal: [], flags: ["Perennial rhinitis or urticaria only under 2 years"], sources: ["FDA"] },
    { drug: "desloratadine", indication_id: "c1", label: "12 months–5 years — 1.25 mg once daily", route: "PO", population: { min_age_months: 12, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1.25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 1.25, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "solution", strength: 0.5, unit: "mg/mL" }], rounding: "Label volume", renal: [], flags: [], sources: ["FDA"] },
    { drug: "desloratadine", indication_id: "c6", label: "6–11 years — 2.5 mg once daily", route: "PO", population: { min_age_months: 72, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 2.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "solution", strength: 0.5, unit: "mg/mL" }], rounding: "Label volume", renal: [], flags: ["Or one 2.5 mg ODT"], sources: ["FDA"] },
    { drug: "desloratadine", indication_id: "adult", label: "12 years and older — 5 mg once daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CLARINEX (desloratadine) tablets — Organon, label effective 2025-05-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c671342e-69a2-4ca5-abc2-8166ed4240d4"]],
  dose: { tagline: "Once-daily non-sedating antihistamine.",
    adult: [{ ind: "Allergic rhinitis, urticaria", text: "5 mg once daily.", calc: ["adult"] }],
    child: [{ ind: "6–11 months", text: "1 mg once daily.", calc: ["i6"] }, { ind: "1–5 years", text: "1.25 mg once daily.", calc: ["c1"] }, { ind: "6–11 years", text: "2.5 mg once daily.", calc: ["c6"] }] }
});

/* ---------- DESMOPRESSIN (FDA tablets ANDA077414, injection ANDA216922, oral solution DESMODA NDA219873) ---------- */
FDB_M("desmopressin", {
  inn: "Desmopressin", atc: "H01BA02", cls: "Synthetic vasopressin analogue (V2 agonist)",
  linked: [["Central diabetes insipidus", "[FDA] [BT-NEML]", ""], ["Bleeding — haemophilia A and von Willebrand disease type 1", "[FDA]", "bleeding-adult"], ["Primary nocturnal enuresis — children 6 years and older", "[FDA]", ""], ["Hyponatraemia (adverse effect)", "[FDA]", "sodium-adult"]],
  forms: ["Tablets 0.1 mg, 0.2 mg [FDA]; 100 mcg (0.1 mg) in Bhutan [BT-NEML].", "Injection 4 mcg/mL [FDA].", "Oral solution 0.05 mg/mL (DESMODA) [FDA]."],
  moa: "Stimulates renal V2 receptors (antidiuresis) and raises factor VIII and von Willebrand factor [NEP].",
  pk: ["Mainly renal excretion — risk of hyponatraemia rises with kidney impairment and age [FDA]."],
  ind: { adult: ["Central diabetes insipidus; temporary polyuria after head trauma or pituitary surgery [FDA].", "Haemophilia A or von Willebrand disease type 1 with factor VIII over 5% (injection) [FDA].", "Not for nephrogenic diabetes insipidus [FDA]."], paed: ["Primary nocturnal enuresis from 6 years (tablets) [FDA].", "Injection: haemophilia A/vWD from 3 months; diabetes insipidus from 12 years [FDA]."] },
  adult: [["Central DI — tablets", "Start 0.05 mg twice daily; adjust within 0.1–1.2 mg/day in 2–3 doses (most 0.1–0.8 mg/day) [FDA]."], ["Central DI — injection", "2–4 mcg/day SC or IV in 1–2 doses (do not dilute) [FDA]."], ["Haemophilia A / vWD type 1", "0.3 mcg/kg (max 20 mcg) IV in 50 mL saline (10 mL if 10 kg or less) over 15–30 min; 30 min before surgery; may repeat after 8–12 h, then daily [FDA]."], ["Fluid", "Restrict fluid intake during treatment [FDA]."]],
  paed: { tiers: ["Nocturnal enuresis (6 years and older): 0.2 mg at bedtime; up to 0.6 mg; limit fluid from 1 h before until the next morning [FDA].", "Central DI (tablets): start 0.05 mg twice daily, titrate [FDA].", "Haemophilia A / vWD (3 months and older): 0.3 mcg/kg IV (max 20 mcg) [FDA]."], transition: "Same [FDA].", calcNote: "Calculator gives the haemostatic IV dose and the diluent volume." },
  adj: { renal: "CrCl under 50: contraindicated [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Long experience without clear harm (injection label) [FDA].", other: "Interrupt enuresis treatment during acute illness with fluid or electrolyte imbalance [FDA]. Tachyphylaxis with repeated haemostatic doses [FDA]." },
  tox: { human: "Water intoxication: confusion, drowsiness, headache, weight gain, hyponatraemic seizures [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce dose or frequency or stop; restrict fluid; treat hyponatraemia; no antidote [FDA]." },
  contra: ["Hyponatraemia or history of hyponatraemia [FDA].", "CrCl under 50 mL/min [FDA].", "Hypersensitivity to desmopressin [FDA]."],
  ae: { common: ["Headache, flushing, nausea [NEP]."], serious: ["Severe hyponatraemia with seizures [FDA]", "Thrombosis (injection) [NEP]", "Anaphylaxis [FDA]"] },
  monitor: ["Serum sodium (before, within a week, and periodically), urine volume and osmolality; BP and pulse during IV infusion [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: desmopressin 100 mcg tablet [BT-NEML].", strengths: "100 mcg (0.1 mg) tablet.", stg: "Not specified in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "desmopressin", indication_id: "haem", label: "Haemophilia A / vWD type 1 — 0.3 mcg/kg IV (max 20 mcg)", route: "IV", population: { min_age_months: 3, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.3, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 20, unit: "mcg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 4, unit: "mcg/mL" }], rounding: "Nearest 0.1 mcg", infusion: { duration_h: 0.5, diluent_bands: [{ min_weight_kg: 0, max_weight_kg: 10.001, mL: 10 }, { min_weight_kg: 10.001, max_weight_kg: null, mL: 50 }] }, renal: [{ crcl_min: 0, crcl_max: 49.999, action: "avoid", text: "CrCl under 50: contraindicated" }], flags: ["Infuse over 15–30 min in 0.9% saline", "Factor VIII must be over 5%", "Restrict fluids; check sodium"], sources: ["FDA"] },
    { drug: "desmopressin", indication_id: "enur", label: "Nocturnal enuresis (6 years and older) — 0.2 mg at bedtime", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.2, unit: "mg", per: "dose", value_max: 0.6 }, interval_h: 24, divided_doses: 1, caps: { max_single: 0.6, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.1, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "avoid", text: "CrCl under 50: contraindicated" }], flags: ["Limit fluids from 1 h before until morning"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Desmopressin acetate tablets — American Health Packaging (ANDA077414), label effective 2025-11-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0d447b48-3f4b-430e-9e68-d8b9401c002e"], ["FDA", "Desmopressin acetate injection 4 mcg/mL — Fresenius Kabi (ANDA216922), label effective 2023-09-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0d96944d-736d-4b56-b726-d21eacd8bc85"], ["FDA", "DESMODA (desmopressin acetate) oral solution — Eton, label effective 2026-03-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c0e1356-d14f-cfb4-e063-6294a90acd27"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Antidiuretic for diabetes insipidus and enuresis; IV for mild bleeding disorders.",
    adult: [{ ind: "Central diabetes insipidus", text: "Tablets 0.05 mg twice daily, adjust to 0.1–1.2 mg/day; injection 2–4 mcg/day.", bt: "Bhutan NEML: 0.1 mg tablets (0.05 mg = half tablet)." }, { ind: "Haemophilia A / vWD type 1", text: "0.3 mcg/kg IV over 15–30 min (max 20 mcg).", calc: ["haem"] }],
    child: [{ ind: "Nocturnal enuresis, 6 years and older", text: "0.2 mg at bedtime, up to 0.6 mg.", calc: ["enur"] }, { ind: "Haemophilia A / vWD, 3 months and older", text: "0.3 mcg/kg IV (max 20 mcg).", calc: ["haem"] }, { ind: "Central DI", text: "0.05 mg twice daily, titrate." }] }
});

/* ---------- DESOGESTREL (FDA desogestrel/ethinyl estradiol COC, ISIBLOOM ANDA202789, eff. 2026-08-12) ---------- */
FDB_M("desogestrel", {
  inn: "Desogestrel", atc: "G03AC09", cls: "Third-generation progestogen (in combined oral contraceptives)",
  linked: [["Contraception", "Combined oral contraceptive with ethinyl estradiol [FDA]", "contraception-adult"]],
  forms: ["US: only as combined tablets with ethinyl estradiol (e.g. desogestrel 0.15 mg / EE 0.03 mg, 21 active + 7 inactive) [FDA].", "Desogestrel-only 75 mcg tablets are marketed outside the US — not covered by this FDA label [NEP]."],
  moa: "Prodrug of etonogestrel; with estrogen suppresses ovulation [NEP].",
  pk: ["3-keto-desogestrel half-life about 38 ± 20 h at steady state [FDA]."],
  ind: { adult: ["Prevention of pregnancy (combined pill) [FDA]."], paed: ["After menarche — as adults [NEP]."] },
  adult: [["Combined pill", "One active tablet daily for 21 days, then one inactive tablet for 7 days; Day 1 or Sunday start; not more than 24 h between tablets [FDA]."], ["After delivery (not breastfeeding)", "May start 4 weeks postpartum; use backup until 7 active tablets taken [FDA]."]],
  paed: { tiers: ["After menarche: as adults [NEP]."], transition: "Same.", calcNote: "Fixed regimen." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Liver tumours or active liver disease: contraindicated (combined pills) [NEP].", preg: "Not for use in pregnancy [NEP].", other: "Smokers over 35: do not use (boxed) [FDA]." },
  tox: { human: "No serious effects after large ingestions by young children; nausea, withdrawal bleeding [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reassurance; symptomatic [FDA]." },
  contra: ["Current or past thrombophlebitis or thromboembolic disorders; known thrombophilia [FDA].", "Cerebrovascular or coronary artery disease; complicated valvular heart disease [FDA].", "BP 160/100 or higher; diabetes with vascular involvement [FDA].", "Other contraindications listed in the label (e.g. migraine with focal signs, breast cancer, liver disease, pregnancy, heavy smoking over 35) [FDA]."],
  ae: { common: ["Breakthrough bleeding, nausea, breast tenderness, headache [NEP]."], serious: ["Venous thromboembolism (higher than with levonorgestrel pills) [NEP]", "Stroke and MI, especially in smokers [FDA]"] },
  monitor: ["BP; migraine; VTE risk factors [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ISIBLOOM (desogestrel and ethinyl estradiol tablets) — ANDA202789 (Bryant Ranch repackager), label effective 2026-08-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4a8f278f-f505-4537-8deb-74e8927df8c6"]],
  dose: { tagline: "Progestogen used in combined oral contraceptive pills.",
    boxedTitle: "Cardiovascular risk associated with smoking",
    boxed: "Cigarette smoking increases the risk of serious cardiovascular events from combination oral contraceptive use. This risk increases with age, particularly in women over 35 years of age, and with the number of cigarettes smoked. For this reason, combination oral contraceptives, including desogestrel and ethinyl estradiol tablets, should not be used by women who are over 35 years of age and smoke [FDA].",
    adult: [{ ind: "Contraception (combined pill)", text: "One active tablet daily ×21, then 7 inactive." }],
    child: [{ ind: "After menarche", text: "As adults." }] }
});

/* ---------- DESONIDE (FDA cream/lotion 0.05%, NDA019048, eff. 2025-05-01) ---------- */
FDB_M("desonide", {
  inn: "Desonide", atc: "D07AB08", cls: "Low- to medium-potency topical corticosteroid",
  linked: [["Corticosteroid-responsive dermatoses (eczema, dermatitis)", "[FDA]", ""]],
  forms: ["Cream 0.05%; lotion 0.05% [FDA]."],
  moa: "Topical glucocorticoid — anti-inflammatory, antipruritic, vasoconstrictive [NEP].",
  pk: ["Systemic absorption increases with large areas, broken skin and occlusion [NEP]."],
  ind: { adult: ["Inflammatory and pruritic corticosteroid-responsive dermatoses [FDA]."], paed: ["Same; children absorb proportionally more — use the smallest effective amount [NEP]."] },
  adult: [["Dermatoses", "Thin film 2–3 times daily; stop when controlled; reassess if no improvement in 2 weeks; no occlusive dressings [FDA]."]],
  paed: { tiers: ["Same as adults; least amount and shortest time [NEP]."], transition: "Same.", calcNote: "Topical." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Shake lotion well [FDA]." },
  tox: { human: "Enough may be absorbed to cause systemic effects (HPA suppression) [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Withdraw gradually [NEP]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Burning, itching, irritation, dryness [NEP]."], serious: ["HPA-axis suppression, skin atrophy, striae [NEP]"] },
  monitor: ["Skin response; HPA axis if large areas long-term in children [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Desonide cream and lotion 0.05% — NDA019048 (Proficient Rx repackager), label effective 2025-05-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=81a8b199-524e-40e4-898a-c485cbf8bc22"]],
  dose: { tagline: "Mild topical steroid for eczema and dermatitis.",
    adult: [{ ind: "Dermatoses", text: "Thin film 2–3 times daily; no occlusion." }],
    child: [{ ind: "Children", text: "Same; least amount, shortest time." }] }
});

/* ---------- DESOXIMETASONE (FDA topical spray 0.25%, Sun Pharma NDA204141, eff. 2025-07-08) ---------- */
FDB_M("desoximetasone", {
  inn: "Desoximetasone", atc: "D07AC03", cls: "High-potency topical corticosteroid",
  linked: [["Plaque psoriasis — adults", "[FDA]", ""]],
  forms: ["Topical spray 0.25% (2.5 mg/g) [FDA].", "Creams, gels and ointments (0.05%, 0.25%) are separate products with their own labels [NEP]."],
  moa: "Topical glucocorticoid [NEP].",
  pk: ["Can be absorbed enough to cause systemic effects [FDA]."],
  ind: { adult: ["Plaque psoriasis, 18 years and older (spray) [FDA]."], paed: ["Spray: not established under 18 years [FDA]."] },
  adult: [["Plaque psoriasis (spray)", "Thin film twice daily, rub in gently; stop when controlled; not beyond 4 weeks; not on face, axilla or groin; no occlusion unless directed [FDA]."]],
  paed: { tiers: ["Spray not established under 18 years [FDA]."], transition: "Adults [FDA].", calcNote: "Topical." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Do not use where atrophy is present [FDA]." },
  tox: { human: "Systemic corticosteroid effects with excessive use [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Withdraw or reduce frequency [NEP]." },
  contra: ["None (spray) [FDA]."],
  ae: { common: ["Application-site dryness, irritation, pruritus [NEP]."], serious: ["HPA-axis suppression [FDA]", "Skin atrophy [NEP]"] },
  monitor: ["HPA axis if large areas are treated [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Desoximetasone topical spray 0.25% — Sun Pharmaceutical (NDA204141), label effective 2025-07-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b046ab97-ba1a-4be6-a238-09670b38b397"]],
  dose: { tagline: "Potent topical steroid spray for plaque psoriasis.",
    adult: [{ ind: "Plaque psoriasis", text: "Thin film twice daily, max 4 weeks; avoid face and skin folds." }],
    child: [{ ind: "Children", text: "Spray not established under 18 years." }] }
});

/* ---------- DESVENLAFAXINE (FDA PRISTIQ ER, Wyeth/Pfizer, NDA021992, eff. 2026-04-28) ---------- */
FDB_M("desvenlafaxine", {
  inn: "Desvenlafaxine", atc: "N06AX23", cls: "Serotonin–noradrenaline reuptake inhibitor (SNRI)",
  linked: [["Depression — adults", "[FDA]", "depression-adult"]],
  forms: ["Extended-release tablets 25, 50, 100 mg — swallow whole [FDA]."],
  moa: "Inhibits serotonin and noradrenaline reuptake; major active metabolite of venlafaxine [FDA].",
  pk: ["Renally cleared — dose limits in kidney impairment [FDA]."],
  ind: { adult: ["Major depressive disorder in adults [FDA]."], paed: ["Not approved in children [FDA]."] },
  adult: [["MDD", "50 mg once daily (starting and therapeutic dose); no added benefit above 50 mg/day [FDA]."], ["Stopping", "Reduce gradually; 25 mg/day is for tapering [FDA]."], ["Hepatic impairment (moderate–severe)", "Max 100 mg/day [FDA]."]],
  paed: { tiers: ["Not approved [FDA]."], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Moderate impairment: max 50 mg/day; severe or ESRD: max 25 mg daily or 50 mg every other day [FDA].", hepatic: "Moderate–severe: max 100 mg/day [FDA].", preg: "Not established in primary source. [NEP]", other: "MAOI washout: 7 days after stopping before an MAOI; 14 days after an MAOI before starting [FDA]." },
  tox: { human: "Venlafaxine data: tachycardia, somnolence, seizures, QT prolongation, serotonin syndrome [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; poison centre advice [NEP]." },
  contra: ["Hypersensitivity to desvenlafaxine or venlafaxine (angioedema reported) [FDA].", "MAOIs for psychiatric disorders within the washout periods; starting with linezolid or IV methylene blue [FDA]."],
  ae: { common: ["Nausea, dizziness, insomnia, sweating, constipation, sexual dysfunction [NEP]."], serious: ["Suicidal thoughts in young people (boxed) [FDA]", "Serotonin syndrome; raised BP; bleeding; hyponatraemia; angle-closure glaucoma [NEP]", "Discontinuation syndrome [NEP]"] },
  monitor: ["Mood and suicidality; BP [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "desvenlafaxine", indication_id: "mdd", label: "MDD — 50 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "ER tab", strength: 25, unit: "mg/tab", whole: true }, { form: "ER tab", strength: 50, unit: "mg/tab", whole: true }], rounding: "Whole tablets — do not split", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 25 }], renal_note: "CrCl 30–50: max 50 mg/day. Under 30 or ESRD: 25 mg daily (or 50 mg every other day) [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "PRISTIQ (desvenlafaxine) extended-release tablets — Wyeth/Pfizer, label effective 2026-04-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f43610c-f290-46ea-d186-4f998ed99fce"]],
  dose: { tagline: "Once-daily SNRI antidepressant; 50 mg is the dose.",
    boxedTitle: "Suicidal thoughts and behaviors",
    boxed: "Antidepressants increased the risk of suicidal thoughts and behavior in children, adolescents, and young adults in short-term studies. These studies did not show an increase in the risk of suicidal thoughts and behavior with antidepressant use in patients over age 24; there was a reduction in risk with antidepressant use in patients aged 65 and older. In patients of all ages who are started on antidepressant therapy, monitor closely for worsening, and for emergence of suicidal thoughts and behaviors. Advise families and caregivers of the need for close observation and communication with the prescriber. PRISTIQ is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression", text: "50 mg once daily (25 mg daily if CrCl under 30).", calc: ["mdd"] }],
    child: [{ ind: "Children", text: "Not approved." }] }
});

/* ---------- DEUCRAVACITINIB (FDA SOTYKTU, BMS, NDA214958, eff. 2026-06-30) ---------- */
FDB_M("deucravacitinib", {
  inn: "Deucravacitinib", atc: "L04AF07", cls: "Tyrosine kinase 2 (TYK2) inhibitor",
  linked: [["Plaque psoriasis and psoriatic arthritis — adults", "[FDA]", ""]],
  forms: ["Tablets 6 mg — do not crush, cut or chew [FDA]."],
  moa: "Allosteric TYK2 inhibitor, blocking IL-23, IL-12 and type I interferon signalling [NEP].",
  pk: ["Terminal half-life about 10 h [FDA].", "Haemodialysis removes about 5% per session [FDA]."],
  ind: { adult: ["Moderate to severe plaque psoriasis (candidates for systemic or phototherapy) [FDA].", "Active psoriatic arthritis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Psoriasis / psoriatic arthritis", "6 mg once daily with or without food [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Child-Pugh C: not recommended; A–B: no change [FDA].", preg: "Not established in primary source. [NEP]", other: "Test for TB first — do not use in active TB; treat latent TB before starting; complete vaccinations [FDA]. Not with other potent immunosuppressants [FDA]." },
  tox: { human: "No human overdose experience [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; dialysis removes little [FDA]." },
  contra: ["Hypersensitivity to deucravacitinib or excipients [FDA]."],
  ae: { common: ["Upper respiratory infection, raised CK, herpes simplex, mouth ulcers, acne [NEP]."], serious: ["Serious infections; tuberculosis [FDA]", "Malignancy; rhabdomyolysis [NEP]"] },
  monitor: ["TB screening; signs of infection; CK if muscle symptoms; lipids, liver tests [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "SOTYKTU (deucravacitinib) tablets — Bristol-Myers Squibb, label effective 2026-06-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff4d7258-5068-4cdf-9692-8cae04c3198e"]],
  dose: { tagline: "Once-daily oral TYK2 inhibitor for psoriasis.",
    adult: [{ ind: "Plaque psoriasis / psoriatic arthritis", text: "6 mg once daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DEURUXOLITINIB (FDA LEQSELVI, Sun Pharma, NDA217900, eff. 2026-09-28) ---------- */
FDB_M("deuruxolitinib", {
  inn: "Deuruxolitinib", atc: "L04AF09", cls: "Janus kinase (JAK1/JAK2) inhibitor",
  linked: [["Severe alopecia areata — adults", "[FDA]", ""]],
  forms: ["Tablets 8 mg [FDA]."],
  moa: "Inhibits JAK1 and JAK2 [NEP].",
  pk: ["Mean elimination half-life about 4 h [FDA].", "CYP2C9 metabolism — poor metabolisers and CYP2C9 inhibitors are contraindicated [FDA]."],
  ind: { adult: ["Severe alopecia areata; not with other JAK inhibitors, biologic immunomodulators, ciclosporin or other potent immunosuppressants [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Severe alopecia areata", "8 mg twice daily [FDA]."], ["Before starting", "CYP2C9 genotype; check for CYP2C9 inhibitors; TB and viral hepatitis screening; blood counts, lipids, liver tests per label [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Interrupt for serious infection until controlled [FDA]." },
  tox: { human: "No human overdose experience [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic and supportive; no antidote [FDA]." },
  contra: ["CYP2C9 poor metabolisers [FDA].", "Moderate or strong CYP2C9 inhibitors [FDA]."],
  ae: { common: ["Headache, acne, nasopharyngitis, raised CK [NEP]."], serious: ["Serious infections, mortality, malignancy, MACE, thrombosis (boxed) [FDA]"] },
  monitor: ["Blood counts, lipids, liver tests; TB; skin cancer checks [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "LEQSELVI (deuruxolitinib) tablets — Sun Pharmaceutical, label effective 2026-09-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a603f231-d09e-4bad-ad5e-b55f865da095"]],
  dose: { tagline: "Oral JAK inhibitor for severe alopecia areata.",
    boxedTitle: "Serious infections, mortality, malignancy, major adverse cardiovascular events and thrombosis",
    boxed: "Increased risk of serious bacterial, fungal, viral and opportunistic infections, including tuberculosis (TB), that may lead to hospitalization or death. Interrupt treatment with LEQSELVI if a serious infection occurs until the infection is controlled. LEQSELVI treatment is not recommended in patients with active tuberculosis. Test for latent TB before and during therapy; treat latent TB prior to use. Higher rate of all-cause mortality, including sudden cardiovascular death, was observed with another Janus kinase (JAK) inhibitor vs. TNF blockers in rheumatoid arthritis (RA) patients. LEQSELVI is not approved for use in RA patients. Malignancies were reported in patients treated with LEQSELVI. Higher rate of lymphomas and lung cancers was observed with another JAK inhibitor vs. TNF blockers in RA patients. Higher rate of major adverse cardiovascular events (MACE) (defined as cardiovascular death, myocardial infarction, and stroke) was observed with another JAK inhibitor vs. TNF blockers in RA patients. Thrombosis, including cerebral venous sinus thrombosis (CVT), deep vein thrombosis (DVT) and pulmonary embolism (PE) have been reported in patients treated with LEQSELVI [FDA].",
    adult: [{ ind: "Severe alopecia areata", text: "8 mg twice daily (after CYP2C9 genotyping)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DEUTETRABENAZINE (FDA AUSTEDO / AUSTEDO XR, Teva, NDA208082/NDA216354, eff. 2025-02-28) ---------- */
FDB_M("deutetrabenazine", {
  inn: "Deutetrabenazine", atc: "N07XX16", cls: "Vesicular monoamine transporter 2 (VMAT2) inhibitor",
  linked: [["Huntington's chorea and tardive dyskinesia — adults", "[FDA]", ""]],
  forms: ["Tablets 6, 9, 12 mg (AUSTEDO) [FDA].", "Extended-release tablets 6–48 mg (AUSTEDO XR) [FDA]."],
  moa: "Reversibly depletes presynaptic monoamines by inhibiting VMAT2 [NEP].",
  pk: ["Active metabolites (α- and β-HTBZ) half-lives about 7–12 h [FDA].", "CYP2D6 metabolism — strong inhibitors (paroxetine) raise exposure [FDA]."],
  ind: { adult: ["Chorea of Huntington's disease [FDA].", "Tardive dyskinesia [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Start", "AUSTEDO XR 12 mg once daily, or AUSTEDO 6 mg twice daily with food [FDA]."], ["Titrate", "Increase by 6 mg/day weekly to response; max 48 mg/day [FDA]."], ["Poor CYP2D6 metabolisers", "Max 36 mg/day [FDA]."], ["Switching from tetrabenazine", "Stop tetrabenazine and start the next day (label conversion table) [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Titrated — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Hepatic impairment: contraindicated [FDA].", preg: "Not established in primary source. [NEP]", other: "AUSTEDO: doses of 12 mg/day or more in two divided doses [FDA]. Swallow whole [FDA]." },
  tox: { human: "Tetrabenazine overdose: acute dystonia, oculogyric crisis, nausea, vomiting, sedation, hypotension, confusion, hallucinations, tremor [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "General supportive and symptomatic care; cardiac rhythm and vital sign monitoring [FDA]." },
  contra: ["Huntington's disease with suicidality or untreated/inadequately treated depression [FDA].", "Hepatic impairment [FDA].", "Reserpine (wait 20 days after stopping) [FDA].", "MAOIs (and within 14 days) [FDA].", "Tetrabenazine or valbenazine [FDA]."],
  ae: { common: ["Somnolence, diarrhoea, dry mouth, fatigue, insomnia [NEP]."], serious: ["Depression and suicidality in Huntington's (boxed) [FDA]", "QT prolongation; neuroleptic malignant syndrome; parkinsonism; akathisia [NEP]"] },
  monitor: ["Mood and suicidality; ECG if QT risk [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "AUSTEDO and AUSTEDO XR (deutetrabenazine) tablets — Teva Neuroscience, label effective 2025-02-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7ea3c60a-45c7-44cc-afc2-d87fa53993c0"]],
  dose: { tagline: "VMAT2 inhibitor for Huntington's chorea and tardive dyskinesia.",
    boxedTitle: "Depression and suicidality in patients with Huntington's disease",
    boxed: "AUSTEDO XR and AUSTEDO can increase the risk of depression and suicidal thoughts and behavior (suicidality) in patients with Huntington's disease. Anyone considering the use of AUSTEDO XR or AUSTEDO must balance the risks of depression and suicidality with the clinical need for treatment of chorea. Closely monitor patients for the emergence or worsening of depression, suicidality, or unusual changes in behavior. Patients, their caregivers, and families should be informed of the risk of depression and suicidality and should be instructed to report behaviors of concern promptly to the treating physician. Particular caution should be exercised in treating patients with a history of depression or prior suicide attempts or ideation, which are increased in frequency in Huntington's disease [FDA].",
    adult: [{ ind: "Huntington's chorea / tardive dyskinesia", text: "12 mg/day, increase by 6 mg/day weekly; max 48 mg/day (36 mg in poor CYP2D6 metabolisers)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* brands (India: PharmEasy, molecule-matched; Bangladesh: MedEx) */
(function(){ const B = {"dabigatran-etexilate":{"IN":[["Dabigo","Sun Pharma (Ranbaxy)","Dabigo 150Mg Strip Of 10 Capsules"],["Dabistar","Lupin","Dabistar 110Mg Strip Of 10 Capsules"],["Dabiclot","Alkem Laboratories Ltd","Dabiclot 110Mg Strip Of 10 Capsules"]],"BD":[["Dabixta","UniMed UniHealth Pharmaceuticals Ltd","75 mg"],["Pradaxa","Radiant Pharmaceuticals Ltd","110 mg"],["Dabiran","Healthcare Pharmaceuticals Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/dabigo-150mg-strip-of-10-capsules-194256","https://pharmeasy.in/online-medicine-order/dabistar-110mg-strip-of-10-capsules-194112","https://pharmeasy.in/online-medicine-order/dabiclot-110mg-strip-of-10-capsules-194182","https://medex.com.bd/brands/20527/dabixta-75-mg-capsule","https://medex.com.bd/brands/30009/pradaxa-110-mg-capsule","https://medex.com.bd/brands/32712/dabiran-150-mg-capsule"]},"dabrafenib":{"IN":[["Rafinlar","Novartis Healthcare Pvt Ltd","Rafinlar 50Mg Bottle Of 28 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/rafinlar-50-mg-capsule-28-no-s-4120649"]},"dacarbazine":{"IN":[],"BD":[["Dacarzin","Beacon Pharmaceuticals PLC","200 mg/vial"]],"src":["https://medex.com.bd/brands/26011/dacarzin-200-mg-iv-infusion"]},"dacomitinib":{"IN":[["Dacoplice","Pfizer Product India Private Limited","Dacoplice 30Mg Bottle Of 30 Tablets"]],"BD":[["Dacocent","Incepta Pharmaceuticals Ltd","45 mg"],["Daconib","Everest Pharmaceuticals Ltd","45 mg"]],"src":["https://pharmeasy.in/online-medicine-order/dacoplice-30mg-bottle-of-30-tablets-3995158","https://medex.com.bd/brands/33162/dacocent-45-mg-tablet","https://medex.com.bd/brands/34679/daconib-45-mg-tablet"]},"dalbavancin":{"IN":[["Dalbonova","BDR Pharmaceuticals Internationals Pvt Ltd","Dalbonova 500Mg Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/dalbonova-500mg-dry-vial-of-1-powder-for-injection-4196049"]},"dalteparin":{"IN":[["Fragmin","Pfizer Product India Private Limited","Fragmin 2500Iu Pre Filled Syringe Of 0.2Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/fragmin-2500iu-injection-0-2ml-47939"]},"danazol":{"IN":[["Danogen","Cipla Limited","Danogen 100Mg Strip Of 10 Capsules"],["Gynazol","Sun Pharma","Gynazol 100Mg Strip Of 10 Capsules"],["Gonablok","Win-Medicare Pvt Ltd","Gonablok 100Mg Strip Of 10 Capsules"]],"BD":[["Danazol","The IBN SINA Pharmaceutical PLC","100 mg"],["Danamet","Eskayef Pharmaceuticals Ltd","100 mg"],["Danzol","Renata PLC","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/danogen-100mg-capsule-42842","https://pharmeasy.in/online-medicine-order/gynazol-100mg-capsule-49520","https://pharmeasy.in/online-medicine-order/gonablok-100mg-capsule-49352","https://medex.com.bd/brands/5989/danazol-100-mg-capsule","https://medex.com.bd/brands/5981/danamet-100-mg-capsule","https://medex.com.bd/brands/5983/danzol-100-mg-capsule"]},"dantrolene":{"IN":[],"BD":[["Relaxo","Ziska Pharmaceuticals Ltd","25 mg"],["Trolen","Drug International Ltd","25 mg"],["Danlene","Incepta Pharmaceuticals Ltd","25 mg"]],"src":["https://medex.com.bd/brands/16385/relaxo-25-mg-capsule","https://medex.com.bd/brands/19658/trolen-25-mg-capsule","https://medex.com.bd/brands/19660/danlene-25-mg-capsule"]},"dapagliflozin":{"IN":[["Dapzigard","Leeford Healthcare Ltd","Dapzigard 10Mg Strip Of 15 Tablets"],["Dapasmart","Healing Pharma India Pvt Ltd","Dapasmart 10 Strip Of 10 Tablets"],["Dapaford","Leeford Healthcare Ltd","Dapaford 10Mg Strip Of 15 Tablets"]],"BD":[["Dapaglip","Incepta Pharmaceuticals Ltd","5 mg"],["Dapazin","Concord Pharmaceuticals Ltd","5 mg"],["Glycema","Advanced Chemical Industries PLC","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/dapzigard-10-4140770","https://pharmeasy.in/online-medicine-order/dapasmart-10-tablet-10-no-s-3732382","https://pharmeasy.in/online-medicine-order/dapaford-10-tablet-15-no-s-3732378","https://medex.com.bd/brands/16387/dapaglip-5-mg-tablet","https://medex.com.bd/brands/16388/dapazin-5-mg-tablet","https://medex.com.bd/brands/19661/glycema-5-mg-tablet"]},"daprodustat":{"IN":[],"BD":[["Daprotab","Incepta Pharmaceuticals Ltd","2 mg"],["Danemia","DBL Pharmaceuticals Ltd","6 mg"],["Aprodust","The IBN SINA Pharmaceutical PLC","4 mg"]],"src":["https://medex.com.bd/brands/37596/daprotab-2-mg-tablet","https://medex.com.bd/brands/39442/danemia-6-mg-tablet","https://medex.com.bd/brands/38393/aprodust-4-mg-tablet"]},"dapsone":{"IN":[["Dapsone","Glaxosmithkline","Dapsone 100Mg Bottle Of 1000 Tablets"],["Acnedap","Cipla Limited","Acnedap 5% Tube Of 15Gm Gel"]],"BD":[["Dapgel","Ziska Pharmaceuticals Ltd","7.5%"],["Acnesone","Incepta Pharmaceuticals Ltd","7.5%"]],"src":["https://pharmeasy.in/online-medicine-order/dapsone-100mg-bottle-of-1000-tablets-42853","https://pharmeasy.in/online-medicine-order/acnedap-5-gel-15gm-6822","https://medex.com.bd/brands/26721/dapgel-75-gel","https://medex.com.bd/brands/30844/acnesone-75-gel"]},"daptomycin":{"IN":[["Dapnat","Natco Pharma Ltd","Dapnat 350Mg Vial Of 0.35Gm Powder For Injection"],["Agidap","Mylan Pharmaceuticals Private Limited - A Viatris Company","Agidap 350 Mg Injection 1 Ml"],["Daptoma","Gland Pharma Limited","Daptoma 350 Mg Injection 1"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/dapnat-350mg-vial-of-0-35gm-powder-for-injection-111541","https://pharmeasy.in/online-medicine-order/agidap-350-mg-injection-1-ml-200751","https://pharmeasy.in/online-medicine-order/daptoma-350-mg-injection-1-3103254"]},"daratumumab":{"IN":[["Darzalex","Janssen","Darzalex 100Mg Vial Of 5Ml Solution For Infusion"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/darzalex-100mg-vial-of-5ml-solution-for-infusion-528227"]},"darbepoetin-alfa":{"IN":[["Cresp","Dr Reddy's Laboratories Ltd","Cresp 40Mcg Pre Filled Syringe Of 0.4Ml Injection"],["Darbecon","Concord Biotech Limited","Darbecon 40Mcg Pre Filled Syringe Of 0.4Ml Injection"],["Juvobin","La Renon Healthcare Pvt Ltd","Juvobin 40Mcg Pre Filled Syringe Of 0.4Ml Injection"]],"BD":[["Darboren","Square Pharmaceuticals PLC","25 mcg/0.42 ml"],["Embardia","Incepta Pharmaceuticals Ltd","60 mcg/0.3 ml"],["Darbagen","Advanced Chemical Industries PLC","100 mcg/0.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/cresp-40mcg-pre-filled-syringe-injection-0-4ml-8531","https://pharmeasy.in/online-medicine-order/darbecon-40mg-pre-filled-syringe-of-0-4ml-injection-3532313","https://pharmeasy.in/online-medicine-order/juvobin-40mcg-inj-1-s-208351","https://medex.com.bd/brands/30063/darboren-25-mcg-injection","https://medex.com.bd/brands/35294/embardia-60-mcg-injection","https://medex.com.bd/brands/34377/darbagen-100-mcg-injection"]},"darifenacin":{"IN":[["Dariten Od","Sun Pharma (Ranbaxy)","Dariten Od 7.5Mg Strip Of 10 Tablets"],["Darilong","Sun Pharma","Darilong 7.5Mg Strip Of 10 Tablets"],["Darif","Alembic Pharmaceuticals Ltd","Darif 7.5Mg Strip Of 10 Tablets"]],"BD":[["Darifen ER","ACME Laboratories Ltd","7.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/dariten-od-7-5mg-tablet-22838","https://pharmeasy.in/online-medicine-order/darilong-7-5mg-tablet-25494","https://pharmeasy.in/online-medicine-order/darif-7-5mg-tablet-2160","https://medex.com.bd/brands/15627/darifen-er-75-mg-xr-tablet"]},"darolutamide":{"IN":[],"BD":[["Damid","Eskayef Pharmaceuticals Ltd","300 mg"],["Darota","Beacon Pharmaceuticals PLC","300 mg"]],"src":["https://medex.com.bd/brands/36942/damid-300-mg-tablet","https://medex.com.bd/brands/38157/darota-300-mg-tablet"]},"darunavir":{"IN":[["Daruvir","Cipla Limited","Daruvir 800Mg Bottle Of 30 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/daruvir-800-mg-tablet-30-206257"]},"dasatinib":{"IN":[["Spnib","Zydus Healthcare Limited","Spnib 50Mg Bottle Of 60 Tablets"],["Dyronib","Hetero Healthcare Limited","Dyronib 50Mg Bottle Of 60 Tablets"],["Daslemia","Intas Pharmaceuticals Ltd","Daslemia 100 Bottle Of 30 Tablets"]],"BD":[["Dasacent","Incepta Pharmaceuticals Ltd","140 mg"],["Dasatin","Jenphar Bangladesh Ltd","20 mg"],["Dasaren","Renata PLC","140 mg"]],"src":["https://pharmeasy.in/online-medicine-order/spnib-50mg-bottle-of-60-tablets-3917439","https://pharmeasy.in/online-medicine-order/dyronib-50-mg-tablet-60-no-s-4115250","https://pharmeasy.in/online-medicine-order/daslemia-100-tablet-30-no-s-3732392","https://medex.com.bd/brands/30221/dasacent-140-mg-tablet","https://medex.com.bd/brands/39803/dasatin-20-mg-tablet","https://medex.com.bd/brands/36741/dasaren-140-mg-tablet"]},"daunorubicin":{"IN":[["Daunomac","Admac Life Sciences","Daunomac 20 Mg Inj"]],"BD":[["Rubicin","Beacon Pharmaceuticals PLC","20 mg/4 ml"],["Dorubin","Drug International Ltd","20 mg/4 ml"],["Daunobin","Healthcare Pharmaceuticals Ltd","20 mg/4 ml"]],"src":["https://pharmeasy.in/online-medicine-order/daunomac-20-mg-inj-4133701","https://medex.com.bd/brands/16886/rubicin-20-mg-iv-infusion","https://medex.com.bd/brands/31179/dorubin-20-mg-iv-infusion","https://medex.com.bd/brands/32001/daunobin-20-mg-iv-infusion"]},"decitabine":{"IN":[],"BD":[["Decitabine-Sun","Sun Pharmaceutical (Bangladesh) Ltd","50 mg/vial"]],"src":["https://medex.com.bd/brands/36931/decitabine-sun-50-mg-injection"]},"deferasirox":{"IN":[["Defrijet","Sun Pharma","Defrijet 500Mg Strip Of 10 Tablets"],["Desifer","Sun Pharma","Desifer 400Mg Mango Flavour Strip Of 6 Tablets"],["Defesem","Chemo Healthcare Pvt Ltd","Defesem 500Mg Dt Strip Of 10 Tablets"]],"BD":[["Jadenu","Nevian Lifescience PLC","90 mg"],["Ferasirrox","UniMed UniHealth Pharmaceuticals Ltd","250 mg"],["Chelova FCT","Jenphar Bangladesh Ltd","180 mg"]],"src":["https://pharmeasy.in/online-medicine-order/defrijet-500mg-tab-25638","https://pharmeasy.in/online-medicine-order/desifer-400mg-mango-flavour-tablet-6-s-187005","https://pharmeasy.in/online-medicine-order/defesem-500mg-dt-strip-of-10-tablets-4491592","https://medex.com.bd/brands/13151/jadenu-90-mg-tablet","https://medex.com.bd/brands/13153/ferasirrox-250-mg-dispersible-tablet","https://medex.com.bd/brands/30846/chelova-fct-180-mg-tablet"]},"deferiprone":{"IN":[["Kelfer","Cipla Limited","Kelfer 500Mg Bottle Of 50 Capsules"]],"BD":[["Feripon","Drug International Ltd","500 mg"],["Defera","Jenphar Bangladesh Ltd","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/kelfer-500-strip-of-50-capsules-173503","https://medex.com.bd/brands/13156/feripon-500-mg-tablet","https://medex.com.bd/brands/32821/defera-500-mg-tablet"]},"deferoxamine":{"IN":[["Desferal","Novartis India Ltd","Desferal 0.5Gm Injection"]],"BD":[["Desferal","Nevian Lifescience PLC","500 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/desferal-0-5gm-inj-43254","https://medex.com.bd/brands/26679/desferal-500-mg-injection"]},"deflazacort":{"IN":[["Deflac","Avighna Medicare Pvt Ltd","Deflac 6Mg Strip Of 10 Tablets"],["Defcort","Macleods Pharmaceuticals","Defcort 6Mg Strip Of 10 Tablets"],["Defza","Wallace Pharmaceuticals","Defza 6Mg Strip Of 10 Tablets"]],"BD":[["Defcort","Eskayef Pharmaceuticals Ltd","6 mg"],["Deflazit","Incepta Pharmaceuticals Ltd","18 mg"],["Zodef","Renata PLC","6 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/deflac-6mg-tab-104263","https://pharmeasy.in/online-medicine-order/defcort-6mg-strip-of-10-tablets-169533","https://pharmeasy.in/online-medicine-order/defza-6mg-strip-of-10-tablets-28893","https://medex.com.bd/brands/32264/defcort-6-mg-tablet","https://medex.com.bd/brands/38202/deflazit-18-mg-tablet","https://medex.com.bd/brands/33648/zodef-6-mg-oral-suspension"]},"degarelix":{"IN":[["Degrelax","Zydus Lifesciences Limited","Degrelax 80Mg Dry Vial Of 1 Powder For Injection"],["Degalix","BDR Pharmaceuticals Internationals Pvt Ltd","Degalix 120Mg Dry Vial Of 1 Powder For Injection"],["Degapride","Sun Pharma (Ranbaxy)","Degapride 120Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Firmagon","Radiant Pharmaceuticals Ltd","80 mg/vial"],["Degaris","Eskayef Pharmaceuticals Ltd","80 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/degrelax-80-mg-dry-vial-of-1-powder-for-injection-4827865","https://pharmeasy.in/online-medicine-order/degalix-120-injection-1-no-s-4117556","https://pharmeasy.in/online-medicine-order/degapride-120mg-inj-1-s-221997","https://medex.com.bd/brands/30018/firmagon-80-mg-sc-injection","https://medex.com.bd/brands/37294/degaris-80-mg-sc-injection"]},"delafloxacin":{"IN":[],"BD":[["Delaflox","ACME Laboratories Ltd","300 mg/vial"],["Delameg","Incepta Pharmaceuticals Ltd","300 mg/vial"],["Delaxin","Beximco Pharmaceuticals PLC","300 mg/vial"]],"src":["https://medex.com.bd/brands/31530/delaflox-300-mg-iv-infusion","https://medex.com.bd/brands/33227/delameg-300-mg-iv-infusion","https://medex.com.bd/brands/36344/delaxin-300-mg-iv-infusion"]},"demeclocycline":{"IN":[["Ledermycin","Pfizer Limited","Ledermycin 300Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/ledermycin-300mg-tab-52516"]},"denosumab":{"IN":[["Olimab","Intas Pharmaceuticals Ltd","Olimab 60Mg Pre Filled Syringe Of 1Ml Solution For Injection"],["Denosta","Shilpa Biological Private Limited","Denosta 60Mg Pre Filled Syringe Of 1Ml Injection"],["Denuril","Alkem Laboratories Ltd","Denuril 60Mg Pre Filled Syringe Of 1Ml Injection"]],"BD":[["Denosis","Incepta Pharmaceuticals Ltd","60 mg/ml"],["Denomab","Healthcare Pharmaceuticals Ltd","60 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/olimab-60mg-inj-1ml-214775","https://pharmeasy.in/online-medicine-order/denosta-60-mg-ml-inj-4133716","https://pharmeasy.in/online-medicine-order/denuril-injection-1-ml-4122528","https://medex.com.bd/brands/17308/denosis-60-mg-sc-injection","https://medex.com.bd/brands/34439/denomab-60-mg-sc-injection"]},"desloratadine":{"IN":[["Alides","Leeford Healthcare Ltd","Alides 5Mg Strip Of 10 Tablets"],["Dazit","Sun Pharma (Ranbaxy)","Dazit 10Mg Strip Of 15 Tablets"],["Deslor","Sun Pharma","Deslor 5Mg Strip Of 15 Tablets"]],"BD":[["Deslosil","Silco Pharmaceutical Ltd","5 mg"],["Rhinex","Cosmic Pharma Ltd","5 mg"],["Doralin","Goodman Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/alides-tablet-118302","https://pharmeasy.in/online-medicine-order/dazit-10mg-strip-of-15-tablets-3110806","https://pharmeasy.in/online-medicine-order/deslor-5mg-strip-of-15-tablets-3053804","https://medex.com.bd/brands/31466/deslosil-5-mg-tablet","https://medex.com.bd/brands/19711/rhinex-5-mg-tablet","https://medex.com.bd/brands/30851/doralin-5-mg-tablet"]},"desmopressin":{"IN":[["Minirin","Ferring Pharmaceuticals Pvt Ltd","Minirin 0.1Mg Bottle Of 15 Tablets"],["Minirin Melt","Corona Remedies Pvt Ltd","Minirin Melt 60Mcg Strip Of 10 Tablets"]],"BD":[["Minirin Melt","Radiant Pharmaceuticals Ltd","60 mcg"],["Nocpres","Healthcare Pharmaceuticals Ltd","100 mcg"],["Enurex","UniMed UniHealth Pharmaceuticals Ltd","360 mcg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/minirin-0-1mg-tablet-10591","https://pharmeasy.in/online-medicine-order/minirin-melt-60mcg-strip-of-10-tablets-10607","https://medex.com.bd/brands/30016/minirin-melt-60-mcg-sublingual-tablet","https://medex.com.bd/brands/33640/nocpres-100-mcg-tablet","https://medex.com.bd/brands/35588/enurex-360-mcg-oral-solution"]},"desogestrel":{"IN":[["Cerazette","Organon India Limited","Cerazette Strip Of 28 Tablets"]],"BD":[["Bredicon","Renata PLC","0.075 mg"],["POP-D","Incepta Pharmaceuticals Ltd","0.075 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cerazette-strip-of-28-tablets-40019","https://medex.com.bd/brands/6096/bredicon-0075-mg-tablet","https://medex.com.bd/brands/6097/pop-d-0075-mg-tablet"]},"desonide":{"IN":[["Desoadd","Intas Pharmaceuticals Ltd","Desoadd 0.05% Tube Of 15Gm Cream"],["Desowen","Galderma India Pvt Ltd","Desowen 0.05% Bottle Of 30Ml Lotion"],["Desosoft","KLM Laboratories Pvt Ltd","Desosoft 0.05% Tube Of 10Gm Cream"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/desoadd-0-05-cream-15gm-191374","https://pharmeasy.in/online-medicine-order/desowen-0-05-lotion-30ml-43258","https://pharmeasy.in/online-medicine-order/desosoft-0-05-cream-10gm-171307"]},"desoximetasone":{"IN":[["Emcor","Emcutix Biopharmaceuticals Limited","Emcor Tube Of 15Gm Cream"]],"BD":[["Desocort","Incepta Pharmaceuticals Ltd","0.25%"]],"src":["https://pharmeasy.in/online-medicine-order/emcor-cream-15gm-175822","https://medex.com.bd/brands/26048/desocort-025-cream"]},"desvenlafaxine":{"IN":[["Mdd","Abbott Healthcare Pvt Ltd","Mdd Xr 50Mg Strip Of 10 Tablets"]],"BD":[["Nevola","Ziska Pharmaceuticals Ltd","100 mg"],["Hapytab","Eskayef Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/mdd-xr-50mg-tablet-477","https://medex.com.bd/brands/16430/nevola-100-mg-xr-tablet","https://medex.com.bd/brands/19726/hapytab-50-mg-xr-tablet"]},"deucravacitinib":{"IN":[],"BD":[["Deucrava","Ziska Pharmaceuticals Ltd","6 mg"],["Cravacin","Everest Pharmaceuticals Ltd","6 mg"],["Sorivanib","UniMed UniHealth Pharmaceuticals Ltd","6 mg"]],"src":["https://medex.com.bd/brands/35108/deucrava-6-mg-tablet","https://medex.com.bd/brands/35175/cravacin-6-mg-tablet","https://medex.com.bd/brands/39963/sorivanib-6-mg-tablet"]},"deutetrabenazine":{"IN":[],"BD":[["Ajuben","Incepta Pharmaceuticals Ltd","6 mg"]],"src":["https://medex.com.bd/brands/33446/ajuben-6-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
