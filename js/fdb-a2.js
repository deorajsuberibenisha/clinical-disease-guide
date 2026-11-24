/* Clinical Disease Guide — Drug monograph database, block A, batch 2 (owner: batches of ~50; 24 Nov 2026).
   Same rules as js/fdb-a.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Research packs: _work/fdb/packs/<drug>.txt.
   M(id, record) fills empty defaults so sparse sections simply stay hidden on the page. */
window.FDB = window.FDB || {};
(function () {
  const M = (id, o) => {
    const d = Object.assign({ letter: "A", risk: "Standard", linked: [], forms: [], moa: "", pk: [], ind: { adult: [], paed: [] }, adult: [], paed: { tiers: [], transition: "", calcNote: "" },
      adj: {}, tox: {}, contra: [], ae: { common: [], serious: [] }, monitor: [], local: {}, verify: [], calc: [], sources: [], brands: {}, dose: { adult: [], child: [] } }, o);
    d.dose = Object.assign({ adult: [], child: [] }, d.dose);
    window.FDB[id] = d;
  };
  window.FDB_M = M;
})();

/* ---------- ABALOPARATIDE (FDA TYMLOS label, Radius, eff. 2026-08-11) ---------- */
FDB_M("abaloparatide", {
  inn: "Abaloparatide", atc: "H05AA04", cls: "Parathyroid hormone-related peptide (PTHrP 1-34) analogue — bone anabolic",
  linked: [["Osteoporosis — postmenopausal women at high fracture risk", "Anabolic treatment, up to 2 years [FDA]", ""], ["Osteoporosis — men at high fracture risk", "Anabolic treatment to increase bone density [FDA]", ""]],
  forms: ["Prefilled pen 3,120 mcg/1.56 mL (2,000 mcg/mL); each pen gives 30 daily doses of 80 mcg in 40 mcL [FDA].", "Subcutaneous injection into the periumbilical abdomen; rotate site daily; never IV or IM [FDA].", "Give the first doses sitting or lying down — why: orthostatic hypotension can occur [FDA].", "Before first use refrigerate 2–8 °C; after first use keep up to 30 days at 20–25 °C; do not freeze [FDA]."],
  moa: "Agonist at the PTH1 receptor → cAMP signalling → stimulates osteoblasts and new bone formation on trabecular and cortical surfaces [FDA].",
  pk: ["Half-life about 1 h [FDA].", "No drug-interaction studies have been performed [FDA]."],
  ind: { adult: ["Postmenopausal osteoporosis at high fracture risk (previous osteoporotic fracture or several risk factors), or failure/intolerance of other therapy — reduces vertebral and non-vertebral fractures [FDA].", "Men with osteoporosis at high fracture risk — to increase bone density [FDA]."], paed: ["Not indicated; safety not established. Not recommended in children with open epiphyses — why: higher baseline osteosarcoma risk [FDA]."] },
  adult: [["Osteoporosis (women and men)", "80 mcg subcutaneously once daily, with calcium and vitamin D if dietary intake is low. Total use over a lifetime: not more than 2 years [FDA]."]],
  paed: { tiers: ["Not recommended in children [FDA]."], transition: "Not applicable.", calcNote: "Fixed adult dose only." },
  adj: { icu: "Not applicable.", renal: "No dose adjustment for mild, moderate or severe kidney impairment; exposure is about 2-fold higher in severe impairment, so monitor for adverse reactions [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not indicated in women of reproductive potential; no human pregnancy or breast-milk data [FDA].", immuno: "Not applicable.", metabolic: "Avoid in pre-existing hypercalcaemia or hypercalcaemic disorders such as primary hyperparathyroidism [FDA]. Check urine calcium if hypercalciuria or active kidney stones are suspected [FDA].", other: "Elderly: no overall difference in safety or effectiveness in trials (most patients were over 65) [FDA]." },
  tox: { human: "Accidental 400 mcg in one day (5× the dose): weakness, headache, nausea, vertigo; calcium normal next day [FDA]. Expected effects of overdose: hypercalcaemia, nausea, vomiting, dizziness, tachycardia, orthostatic hypotension, headache [FDA].", animal: "Animal LD50: Not established in primary source. [NEP] Rats: dose-dependent osteosarcoma at 4–28× human exposure [FDA].", manage: "No specific antidote → stop the drug, check serum calcium and phosphate, give supportive care such as hydration; not expected to be dialysable [FDA]." },
  contra: ["Severe hypersensitivity to abaloparatide or the excipients (anaphylaxis, angioedema, dyspnoea, urticaria have occurred) [FDA]."],
  ae: { common: ["Women: hypercalciuria, dizziness, nausea, headache, palpitations, fatigue, upper abdominal pain, vertigo [FDA].", "Men: injection-site redness, swelling and pain, dizziness, joint pain, nausea, diarrhoea, abdominal pain, bone pain [FDA]."], serious: ["Hypersensitivity, including anaphylaxis [FDA]", "Osteosarcoma risk (seen in rats; unknown in humans) [FDA]", "Orthostatic hypotension [FDA]", "Hypercalcaemia; hypercalciuria and kidney stones [FDA]"] },
  monitor: ["Serum calcium — why: hypercalcaemia [FDA].", "Urine calcium if hypercalciuria or stones suspected [FDA].", "Blood pressure/symptoms after the first doses — why: orthostatic hypotension [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "abaloparatide", indication_id: "osteoporosis", label: "Osteoporosis — adult", route: "SC",
    population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
    basis: "fixed", dose: { value: 80, unit: "mcg", per: "dose" }, interval_h: 24, divided_doses: 1,
    caps: { max_single: 80, max_daily: 80, adult_ceiling_single: 80, adult_ceiling_daily: 80, unit: "mcg" }, weight_basis: "NEP", bsa_formula: "mosteller",
    adult_transition: { weight_kg: null, age_years: 18 }, infusion: { conc_max: null, rate: null, unit: null },
    formulations: [{ form: "pen", strength: 80, unit: "mcg/dose" }], rounding: "One pen dose", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "TYMLOS (abaloparatide) injection — Radius Health, label effective 2026-08-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=712143d9-e21e-4013-bb3b-3426a21060a8"]],
  dose: { tagline: "Daily injection that builds bone in severe osteoporosis.",
    cautionTitle: "Osteosarcoma risk — limit to 2 years",
    caution: "Abaloparatide caused osteosarcoma in rats; the human risk is unknown. Avoid in people at higher risk (open epiphyses, Paget's disease, bone metastases or skeletal cancer, previous skeletal radiation, hereditary osteosarcoma disorders). Lifetime use beyond 2 years is not recommended [FDA].",
    adult: [{ ind: "Osteoporosis — women after menopause and men, at high fracture risk", text: "80 mcg subcutaneously once daily, at about the same time each day. Add calcium and vitamin D if intake is low. No more than 2 years over a lifetime.", calc: ["osteoporosis"] }],
    child: [{ ind: "Children", text: "Not recommended — safety not established, and higher osteosarcoma risk while growth plates are open." }] }
});

/* ---------- ABATACEPT (FDA ORENCIA label, BMS/Squibb, BLA125118, eff. 2025-11-13) ---------- */
FDB_M("abatacept", {
  inn: "Abatacept", atc: "L04AA24", cls: "Selective T-cell costimulation modulator (CTLA-4–Ig fusion protein); biologic DMARD",
  linked: [["Rheumatoid arthritis — adults, moderate to severe", "Biologic DMARD, alone or with non-biologic DMARDs [FDA]", ""], ["Polyarticular juvenile idiopathic arthritis (2 years and over)", "Biologic DMARD [FDA]", ""], ["Psoriatic arthritis (2 years and over)", "Biologic DMARD [FDA]", ""], ["Acute graft-versus-host disease — prophylaxis in stem-cell transplant", "With a calcineurin inhibitor and methotrexate [FDA]", ""]],
  forms: ["IV: 250 mg lyophilised powder vial; reconstitute and dilute using only the silicone-free syringe supplied [FDA].", "IV infusion over 30 min (arthritis) or 60 min (GVHD prophylaxis) [FDA].", "SC: prefilled syringes 50 mg/0.4 mL, 87.5 mg/0.7 mL, 125 mg/mL; 125 mg/mL autoinjector [FDA].", "The IV product contains maltose: some glucose meters read falsely high on infusion day — use a glucose-specific method [FDA]."],
  moa: "Binds CD80/CD86 on antigen-presenting cells → blocks the CD28 costimulatory signal → prevents full T-cell activation that drives synovial inflammation [FDA].",
  pk: ["Terminal half-life about 2–3 weeks (14–20 days in the label's PK tables) [FDA].", "Do not combine with TNF antagonists, other biologic RA/PsA drugs or JAK inhibitors — why: more serious infections without extra benefit (infections 63% vs 43% with TNF antagonists) [FDA].", "Live vaccines: not during treatment or within 3 months after stopping; responses to other vaccines may be blunted [FDA]."],
  ind: { adult: ["Moderately to severely active rheumatoid arthritis [FDA].", "Active psoriatic arthritis [FDA].", "Prophylaxis of acute GVHD with a calcineurin inhibitor and methotrexate in matched or 1-allele-mismatched unrelated-donor stem-cell transplant [FDA]."], paed: ["Polyarticular JIA, 2 years and over (IV from 6 years; SC from 2 years) [FDA].", "Psoriatic arthritis, 2 years and over (SC) [FDA].", "Acute GVHD prophylaxis, 2 years and over (IV) [FDA]."] },
  adult: [["Rheumatoid arthritis / psoriatic arthritis — IV", "By weight: under 60 kg 500 mg (2 vials); 60–100 kg 750 mg (3 vials); over 100 kg 1,000 mg (4 vials). Over 30 min at weeks 0, 2 and 4, then every 4 weeks [FDA]."], ["Rheumatoid arthritis — SC", "125 mg once weekly, with or without one weight-based IV loading dose first [FDA]."], ["Psoriatic arthritis — SC", "125 mg once weekly, no IV loading dose [FDA]."], ["Acute GVHD prophylaxis (6 years and over)", "10 mg/kg IV (max 1,000 mg) over 60 min the day before transplant, then on days 5, 14 and 28 [FDA]."]],
  paed: { tiers: ["pJIA, IV, 6 years and over: under 75 kg 10 mg/kg; 75 kg and over the adult weight-band dose (max 1,000 mg) [FDA].", "pJIA or PsA, SC, 2 years and over, once weekly, no loading: 10–<25 kg 50 mg; 25–<50 kg 87.5 mg; 50 kg and over 125 mg [FDA].", "GVHD prophylaxis, 2–<6 years: 15 mg/kg IV the day before transplant, then 12 mg/kg on days 5, 14 and 28 [FDA]."], transition: "IV: 75 kg and over → adult weight bands. SC: 50 kg and over → 125 mg weekly [FDA].", calcNote: "IV dose capped at 1,000 mg; weight bands as in the label." },
  adj: { icu: "Not applicable.", renal: "No dose adjustment information; not studied [NEP].", hepatic: "No dose adjustment information; not studied [NEP].", preg: "Human pregnancy data insufficient; in rats immune function was altered at 11× the human dose. Infants exposed in the womb: weigh the risks before live vaccines [FDA].", immuno: "Serious infections: screen for latent TB (treat first) and viral hepatitis before starting; stop if a serious infection develops. CMV and EBV reactivation in GVHD prophylaxis [FDA].", metabolic: "IV product contains maltose: false-high readings on some glucose meters on infusion day [FDA].", other: "COPD: more respiratory adverse events [FDA]." },
  tox: { human: "Doses up to 50 mg/kg IV have been given without apparent toxic effect [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote → monitor for adverse reactions and treat symptoms [FDA]." },
  contra: ["None listed in the label [FDA]."],
  ae: { common: ["Headache, upper respiratory tract infection, nasopharyngitis, nausea [FDA]."], serious: ["Serious infections, including TB reactivation [FDA]", "Hypersensitivity and anaphylaxis [FDA]", "COPD exacerbation [FDA]", "CMV/EBV reactivation after stem-cell transplant [FDA]"] },
  monitor: ["TB and viral hepatitis screening before starting [FDA].", "Signs of infection throughout [FDA].", "Vaccinations up to date before starting; no live vaccines on treatment [FDA].", "CMV/EBV during GVHD prophylaxis [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "abatacept", indication_id: "ra_iv", label: "RA / PsA — IV, adult weight bands", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null,
      bands: [{ min_weight_kg: 0.3, max_weight_kg: 60, text: "500 mg (2 × 250 mg vials) IV over 30 min — weeks 0, 2, 4, then every 4 weeks", daily: null }, { min_weight_kg: 60, max_weight_kg: 100.001, text: "750 mg (3 × 250 mg vials) IV over 30 min — weeks 0, 2, 4, then every 4 weeks", daily: null }, { min_weight_kg: 100.001, max_weight_kg: null, text: "1,000 mg (4 × 250 mg vials) IV over 30 min — weeks 0, 2, 4, then every 4 weeks", daily: null }],
      caps: { max_single: 1000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 250, unit: "mg/vial" }], rounding: "Whole vials (weight bands)", renal: [], flags: [], sources: ["FDA"] },
    { drug: "abatacept", indication_id: "ra_sc", label: "RA / PsA — SC, adult", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 125, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: null,
      caps: { max_single: 125, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 125, unit: "mg/mL" }], rounding: "One prefilled syringe", renal: [], flags: [], sources: ["FDA"] },
    { drug: "abatacept", indication_id: "pjia_iv", label: "pJIA — IV, 6 years and over, under 75 kg", route: "IV", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: 75 },
      basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null,
      caps: { max_single: 1000, adult_ceiling_single: 1000, unit: "mg" }, weight_basis: "actual", infusion: { duration_h: 0.5 }, formulations: [{ form: "inj", strength: 250, unit: "mg/vial" }], rounding: "Exact mg from reconstituted vials [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "abatacept", indication_id: "pjia_sc", label: "pJIA / PsA — SC, 2 years and over (weekly)", route: "SC", population: { min_age_months: 24, max_age_months: null, min_weight_kg: 10, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: null,
      bands: [{ min_weight_kg: 10, max_weight_kg: 25, text: "50 mg SC once weekly (50 mg/0.4 mL syringe)", daily: null }, { min_weight_kg: 25, max_weight_kg: 50, text: "87.5 mg SC once weekly (87.5 mg/0.7 mL syringe)", daily: null }, { min_weight_kg: 50, max_weight_kg: null, text: "125 mg SC once weekly (125 mg/mL syringe)", daily: null }],
      caps: { max_single: 125, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Fixed syringe sizes", renal: [], flags: [], sources: ["FDA"] },
    { drug: "abatacept", indication_id: "gvhd_6y", label: "GVHD prophylaxis — 6 years and over", route: "IV", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: null, divided_doses: null,
      caps: { max_single: 1000, adult_ceiling_single: 1000, unit: "mg" }, weight_basis: "actual", infusion: { duration_h: 1 }, formulations: [{ form: "inj", strength: 250, unit: "mg/vial" }], rounding: "Exact mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "abatacept", indication_id: "gvhd_2to6", label: "GVHD prophylaxis, 2 to under 6 years — day before transplant (15 mg/kg)", route: "IV", population: { min_age_months: 24, max_age_months: 72, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: null, divided_doses: null,
      caps: {}, weight_basis: "actual", infusion: { duration_h: 1 }, formulations: [{ form: "inj", strength: 250, unit: "mg/vial" }], rounding: "Exact mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "abatacept", indication_id: "gvhd_2to6_later", label: "GVHD prophylaxis, 2 to under 6 years — days 5, 14, 28 (12 mg/kg)", route: "IV", population: { min_age_months: 24, max_age_months: 72, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: null, divided_doses: null,
      caps: {}, weight_basis: "actual", infusion: { duration_h: 1 }, formulations: [{ form: "inj", strength: 250, unit: "mg/vial" }], rounding: "Exact mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ORENCIA (abatacept) injection — E.R. Squibb & Sons (BMS), label effective 2025-11-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0836c6ac-ee37-5640-2fed-a3185a0b16eb"]],
  dose: { tagline: "Biologic for rheumatoid arthritis, juvenile and psoriatic arthritis, and GVHD prevention.",
    cautionTitle: "Serious infections — screen for TB and hepatitis first",
    caution: "Serious infections occur. Screen for latent tuberculosis (treat it first) and viral hepatitis before starting, update vaccines, give no live vaccines during treatment or for 3 months after, and stop if a serious infection develops. Do not combine with TNF antagonists, other biologics or JAK inhibitors [FDA].",
    adult: [
      { ind: "Rheumatoid or psoriatic arthritis — IV", text: "By weight: under 60 kg 500 mg · 60–100 kg 750 mg · over 100 kg 1,000 mg, over 30 min at weeks 0, 2 and 4, then every 4 weeks.", calc: ["ra_iv"] },
      { ind: "Rheumatoid arthritis — SC", text: "125 mg once weekly, with or without one weight-based IV loading dose first.", calc: ["ra_sc"] },
      { ind: "Psoriatic arthritis — SC", text: "125 mg once weekly (no IV loading dose)." },
      { ind: "GVHD prophylaxis (stem-cell transplant)", text: "10 mg/kg IV (max 1,000 mg) over 60 min the day before transplant, then on days 5, 14 and 28.", calc: ["gvhd_6y"] }
    ],
    child: [
      { ind: "Polyarticular JIA — IV, 6 years and over", text: "Under 75 kg: 10 mg/kg over 30 min at weeks 0, 2, 4, then every 4 weeks. 75 kg and over: adult weight-band dose (max 1,000 mg).", calc: ["pjia_iv"] },
      { ind: "Polyarticular JIA or psoriatic arthritis — SC, 2 years and over", text: "Once weekly, no loading dose: 10–<25 kg 50 mg · 25–<50 kg 87.5 mg · 50 kg and over 125 mg.", calc: ["pjia_sc"] },
      { ind: "GVHD prophylaxis", text: "6 years and over: 10 mg/kg (max 1,000 mg). 2 to under 6 years: 15 mg/kg the day before transplant, then 12 mg/kg on days 5, 14 and 28. Each over 60 min.", calc: ["gvhd_6y", "gvhd_2to6", "gvhd_2to6_later"] }
    ] }
});

/* ---------- ABEMACICLIB (FDA VERZENIO label, Eli Lilly, NDA208716, eff. 2026-09-18) ---------- */
FDB_M("abemaciclib", {
  inn: "Abemaciclib", atc: "L01EF03", cls: "Kinase inhibitor — cyclin-dependent kinase 4/6 (CDK4/6) inhibitor; antineoplastic",
  linked: [["Breast cancer, HR-positive HER2-negative — early, node-positive, high recurrence risk", "Adjuvant, with tamoxifen or an aromatase inhibitor, for 2 years [FDA]", ""], ["Breast cancer, HR-positive HER2-negative — advanced or metastatic", "With an aromatase inhibitor, fulvestrant or imlunestrant; or alone after chemotherapy [FDA]", ""]],
  forms: ["Tablets 50, 100, 150, 200 mg [FDA].", "Swallow whole; do not chew, crush or split; do not take broken or cracked tablets [FDA].", "Missed or vomited dose: do not take an extra dose; take the next dose at the usual time [FDA]."],
  moa: "Inhibits CDK4 and CDK6 → blocks retinoblastoma-protein phosphorylation → arrests the cell cycle in G1 in oestrogen-receptor-positive breast cancer cells [FDA].",
  pk: ["Half-life 18.3 h; cleared mainly by hepatic CYP3A4 to active metabolites [FDA].", "Ketoconazole: avoid (AUC predicted up to 16-fold higher) [FDA].", "Other strong CYP3A inhibitors: reduce to 100 mg twice daily (or from 100 to 50 mg twice daily if already reduced); restore the dose 3–5 inhibitor half-lives after stopping it [FDA].", "Strong and moderate CYP3A inducers: avoid [FDA]."],
  ind: { adult: ["HR+, HER2– node-positive early breast cancer at high risk of recurrence, with endocrine therapy [FDA].", "HR+, HER2– advanced/metastatic breast cancer with an aromatase inhibitor, fulvestrant or imlunestrant (ESR1-mutated), or as monotherapy after endocrine therapy and chemotherapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["With endocrine therapy (fulvestrant, tamoxifen, imlunestrant or an aromatase inhibitor)", "150 mg orally twice daily, with or without food. Early breast cancer: for 2 years; advanced disease: until progression or unacceptable toxicity [FDA]."], ["Monotherapy", "200 mg orally twice daily [FDA]."], ["Dose reductions for adverse reactions", "Combination: 150 → 100 → 50 mg twice daily. Monotherapy: 200 → 150 → 100 → 50 mg twice daily. Stop if 50 mg twice daily is not tolerated [FDA]."], ["Premenopausal women and men", "Also give a GnRH agonist when combined with an aromatase inhibitor, fulvestrant or imlunestrant [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Not applicable.", calcNote: "Adult fixed doses only." },
  adj: { icu: "Not applicable.", renal: "No adjustment for CrCl 30–89 mL/min (Cockcroft–Gault); severe impairment (CrCl under 30), end-stage kidney disease or dialysis: pharmacokinetics unknown [FDA].", hepatic: "Child-Pugh A or B: no adjustment. Child-Pugh C: give once daily instead of twice daily — why: half-life rises from 24 to 55 h [FDA].", preg: "Can cause fetal harm (teratogenic in rats at human exposures); advise effective contraception; do not breastfeed [FDA].", immuno: "Neutropenia: infections more common [FDA].", metabolic: "Not applicable.", other: "Venous thromboembolism: watch for clots and pulmonary embolism [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No specific antidote → supportive care [NEP]." },
  contra: ["None listed in the label [FDA]."],
  ae: { common: ["Diarrhoea, infections, neutropenia, fatigue, nausea, abdominal pain, anaemia, vomiting, leucopenia (20% or more) [FDA]."], serious: ["Severe diarrhoea with dehydration [FDA]", "Neutropenia [FDA]", "Interstitial lung disease/pneumonitis, sometimes fatal — stop permanently if grade 3–4 [FDA]", "Hepatotoxicity [FDA]", "Venous thromboembolism [FDA]"] },
  monitor: ["Full blood count before starting, every 2 weeks for 2 months, monthly for 2 months, then as needed — why: neutropenia [FDA].", "Liver tests on the same schedule — why: hepatotoxicity [FDA].", "Diarrhoea: start an antidiarrhoeal and fluids at the first loose stool and tell the prescriber [FDA].", "Respiratory symptoms or new imaging changes — why: pneumonitis [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "abemaciclib", indication_id: "combo", label: "With endocrine therapy — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 150, max_daily: 300, unit: "mg" },
      weight_basis: "NEP", formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets — never split", renal: [], flags: [], sources: ["FDA"] },
    { drug: "abemaciclib", indication_id: "mono", label: "Monotherapy — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 200, max_daily: 400, unit: "mg" },
      weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets — never split", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "VERZENIO (abemaciclib) tablets — Eli Lilly, label effective 2026-09-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be4bc0de-0fdc-4d46-8d25-be43c79e6a06"]],
  dose: { tagline: "CDK4/6 inhibitor tablet for hormone-receptor-positive breast cancer.",
    adult: [
      { ind: "With endocrine therapy", text: "150 mg twice daily. Early breast cancer: 2 years. Advanced disease: until progression or toxicity. Reduce to 100 mg, then 50 mg twice daily for side effects.", calc: ["combo"] },
      { ind: "Monotherapy", text: "200 mg twice daily. Reduce in steps to 150, 100, then 50 mg twice daily for side effects.", calc: ["mono"] },
      { ind: "With a strong CYP3A inhibitor (not ketoconazole)", text: "Reduce to 100 mg twice daily (or to 50 mg twice daily if already on 100 mg). Avoid ketoconazole altogether." },
      { ind: "Severe liver impairment (Child-Pugh C)", text: "Same dose, once daily instead of twice daily." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ABIRATERONE ACETATE (FDA ZYTIGA label, Janssen, NDA202379, eff. 2025-03-28; YONSA-type 125 mg micronised label NDA210308 checked for the formulation difference) ---------- */
FDB_M("abiraterone", {
  inn: "Abiraterone", atc: "L02BX03", cls: "Androgen-biosynthesis inhibitor (CYP17 inhibitor); hormonal antineoplastic",
  linked: [["Metastatic castration-resistant prostate cancer", "With prednisone and androgen deprivation [FDA]", ""], ["Metastatic high-risk castration-sensitive prostate cancer", "With prednisone and androgen deprivation [FDA]", ""]],
  forms: ["Standard abiraterone acetate (ZYTIGA-type): tablets 250 mg and 500 mg [FDA].", "Take once daily on an empty stomach: no food 2 h before and 1 h after — why: food raises exposure 5- to 17-fold [FDA].", "Swallow whole with water; do not crush or chew [FDA].", "Fine-particle 125 mg tablets (YONSA-type) are a different product: 500 mg once daily with methylprednisolone 4 mg twice daily, with or without food. The two are not interchangeable — check which product is dispensed [FDA]."],
  moa: "Abiraterone inhibits CYP17 (17α-hydroxylase/C17,20-lyase) in testicular, adrenal and tumour tissue → stops androgen synthesis; the rise in ACTH increases mineralocorticoids, so a corticosteroid is co-prescribed [FDA].",
  pk: ["Terminal half-life 12 ± 5 h in metastatic prostate cancer [FDA].", "Strong CYP3A4 inducers (phenytoin, carbamazepine, rifampicin, rifabutin, phenobarbital): avoid; if unavoidable give 1,000 mg twice daily only while the inducer is used [FDA].", "Inhibits CYP2D6: avoid CYP2D6 substrates with a narrow therapeutic index [FDA].", "Not with radium-223 — why: more fractures and deaths [FDA]."],
  ind: { adult: ["Metastatic castration-resistant prostate cancer, with prednisone [FDA].", "Metastatic high-risk castration-sensitive prostate cancer, with prednisone [FDA]."], paed: ["Not indicated. [NEP]"] },
  adult: [["Metastatic castration-resistant prostate cancer", "1,000 mg orally once daily on an empty stomach, with prednisone 5 mg twice daily; continue a GnRH analogue unless orchidectomised [FDA]."], ["Metastatic castration-sensitive prostate cancer", "1,000 mg once daily with prednisone 5 mg once daily [FDA]."], ["Moderate liver impairment (Child-Pugh B) at baseline", "250 mg once daily; stop for good if ALT/AST over 5× ULN or bilirubin over 3× ULN [FDA]."], ["Hepatotoxicity during treatment", "Hold until recovery; restart at a lower dose; stop if severe [FDA]."]],
  paed: { tiers: ["Not indicated. [NEP]"], transition: "Not applicable.", calcNote: "Adult fixed doses only." },
  adj: { icu: "Not applicable.", renal: "No dose change in kidney impairment [FDA].", hepatic: "Child-Pugh B: 250 mg once daily with close liver tests. Child-Pugh C: do not use [FDA].", preg: "Not for women; can cause fetal harm. Men with partners who could become pregnant: use effective contraception [FDA].", immuno: "Not applicable.", metabolic: "Severe hypoglycaemia reported in diabetes with pioglitazone or repaglinide — monitor glucose [FDA]. Hypokalaemia (mineralocorticoid excess) — correct before starting [FDA].", other: "Cardiovascular disease: monitor closely — why: hypertension, fluid retention, hypokalaemia [FDA]. Adrenal insufficiency: higher steroid doses may be needed around stress [FDA]." },
  tox: { human: "Human overdose experience is limited [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No specific antidote → stop the drug, supportive care, monitor for arrhythmias and heart failure, check liver function [FDA]." },
  contra: ["None listed in the label [FDA]."],
  ae: { common: ["Fatigue, joint pain, hypertension, nausea, oedema, hypokalaemia, hot flush, diarrhoea [FDA]."], serious: ["Hypokalaemia, fluid retention, cardiac events (mineralocorticoid excess) [FDA]", "Hepatotoxicity, sometimes fatal [FDA]", "Adrenocortical insufficiency [FDA]", "Fractures and death with radium-223 [FDA]"] },
  monitor: ["ALT, AST, bilirubin before starting, every 2 weeks for 3 months, then monthly (weekly in the first month if Child-Pugh B) [FDA].", "Blood pressure, potassium and fluid retention at least monthly [FDA].", "Blood glucose in diabetes [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "abiraterone", indication_id: "mcrpc", label: "Prostate cancer — standard abiraterone (250/500 mg tablets)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 1000, max_daily: 1000, unit: "mg" },
      weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }, { form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ZYTIGA (abiraterone acetate) tablets — Janssen Biotech, label effective 2025-03-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e338e89-3cf2-48eb-b6e2-a06c608c6513"], ["FDA", "Abiraterone acetate 125 mg fine-particle tablets (YONSA-type) — label effective 2026-06-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=445e70a1-25bd-8fc1-e063-6394a90a1a43"]],
  dose: { tagline: "Hormone therapy tablet for advanced prostate cancer, taken with prednisone.",
    cautionTitle: "Two products, two different doses",
    caution: "Standard abiraterone (250/500 mg tablets) is 1,000 mg once daily on an empty stomach with prednisone. Fine-particle 125 mg tablets (YONSA-type) are 500 mg once daily with methylprednisolone, with or without food. They are not interchangeable — giving the wrong dose or taking the standard product with food changes exposure many-fold [FDA].",
    adult: [
      { ind: "Metastatic castration-resistant prostate cancer", text: "1,000 mg once daily on an empty stomach (no food 2 h before, 1 h after) with prednisone 5 mg twice daily. Continue the GnRH analogue.", calc: ["mcrpc"] },
      { ind: "Metastatic high-risk castration-sensitive prostate cancer", text: "1,000 mg once daily with prednisone 5 mg once daily.", calc: ["mcrpc"] },
      { ind: "Moderate liver impairment (Child-Pugh B)", text: "250 mg once daily. Child-Pugh C: do not use." },
      { ind: "With a strong CYP3A4 inducer that cannot be avoided", text: "1,000 mg twice daily during the inducer only, then back to once daily." }
    ],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- ACAMPROSATE (FDA acamprosate calcium DR tablets, ANDA219904, eff. 2026-10-26) ---------- */
FDB_M("acamprosate", {
  inn: "Acamprosate", atc: "N07BB03", cls: "Alcohol-dependence treatment (glutamate/GABA modulator)",
  linked: [["Alcohol dependence — maintenance of abstinence", "With psychosocial support, after withdrawal [FDA]", ""]],
  forms: ["Delayed-release (enteric-coated) tablets 333 mg [FDA].", "With or without food; with meals was used in trials [FDA]."],
  moa: "Not fully understood; thought to restore the balance between glutamate excitation and GABA inhibition altered by chronic alcohol [FDA].",
  pk: ["Terminal half-life about 20–33 h; cleared by the kidneys unchanged [FDA].", "No important interactions with alcohol, diazepam, disulfiram or naltrexone [FDA]."],
  ind: { adult: ["Maintenance of abstinence in alcohol dependence in patients already abstinent at the start [FDA]."], paed: ["Safety and efficacy not established [FDA]."] },
  adult: [["Alcohol dependence", "666 mg (2 × 333 mg) three times daily; start as soon as possible after withdrawal; continue if the patient relapses [FDA]."], ["CrCl 30–50 mL/min", "333 mg three times daily [FDA]."], ["CrCl 30 mL/min or less", "Contraindicated [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Not applicable.", calcNote: "Adult dose; kidney bands from the label." },
  adj: { renal: "CrCl 30–50 mL/min: 333 mg three times daily. CrCl 30 or less: contraindicated [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Teratogenic in rats and rabbits; use only if benefit justifies risk. Caution when breastfeeding [FDA].", other: "Depression and suicidality: more common than placebo (2.4% vs 0.8% in year-long studies) — monitor [FDA]." },
  tox: { human: "Acute overdoses up to 56 g: only diarrhoea attributed; hypercalcaemia possible only with chronic overdose [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic and supportive care [FDA]." },
  contra: ["Hypersensitivity to acamprosate [FDA].", "Severe kidney impairment (CrCl 30 mL/min or less) [FDA]."],
  ae: { common: ["Diarrhoea, nausea, flatulence, anxiety, depression, dizziness, insomnia, itching [FDA]."], serious: ["Suicidal ideation and depression [FDA]"] },
  monitor: ["Kidney function — why: dose depends on CrCl [FDA].", "Mood and suicidal thoughts [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "acamprosate", indication_id: "alcohol", label: "Alcohol dependence — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
    basis: "fixed", dose: { value: 666, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 666, max_daily: 1998, unit: "mg" },
    weight_basis: "NEP", formulations: [{ form: "tab", strength: 333, unit: "mg/tab" }], rounding: "Whole 333 mg tablets",
    renal: [{ crcl_min: 30.001, crcl_max: 50, action: "reduce_dose", factor: 0.5, interval_h: 8 }, { crcl_min: 0, crcl_max: 30, action: "avoid", factor: null, note: "CrCl 30 mL/min or less — contraindicated" }], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Acamprosate calcium delayed-release tablets — AvPAK, label effective 2026-10-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5ebfa8c9-acba-b77e-e063-6294a90ab712"]],
  dose: { tagline: "Helps people with alcohol dependence stay abstinent after withdrawal.",
    adult: [{ ind: "Alcohol dependence (after withdrawal)", text: "666 mg (two 333 mg tablets) three times daily. CrCl 30–50: 333 mg three times daily. CrCl 30 or less: do not use.", calc: ["alcohol"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ACARBOSE (FDA acarbose tablets USP, ANDA202271, eff. 2026-11-10) ---------- */
FDB_M("acarbose", {
  inn: "Acarbose", atc: "A10BF01", cls: "Alpha-glucosidase inhibitor; oral antidiabetic",
  linked: [["Type 2 diabetes — adults", "Add-on to diet and exercise; alone or with metformin, sulfonylurea or insulin [FDA]", "dm-adult"]],
  forms: ["Tablets 25, 50, 100 mg [FDA].", "Take with the first bite of each main meal — why: it slows carbohydrate digestion from that meal [FDA]."],
  moa: "Competitively inhibits intestinal alpha-glucosidases → delays carbohydrate digestion → lowers the rise in glucose after meals [FDA].",
  pk: ["Plasma half-life of activity about 2 h [FDA].", "Drugs that raise glucose (thiazides, steroids, phenothiazines, thyroid hormone, oestrogens, phenytoin, isoniazid and others) may reduce control [FDA]."],
  ind: { adult: ["Type 2 diabetes, adjunct to diet and exercise [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Type 2 diabetes", "Start 25 mg three times daily with meals (or 25 mg once daily, building up); adjust every 4–8 weeks to 50 mg three times daily; up to 100 mg three times daily only if over 60 kg. Maximum: 50 mg three times daily if 60 kg or less; 100 mg three times daily if over 60 kg [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Maximum depends on weight (60 kg cut-off)." },
  adj: { renal: "Not established in primary source (label studies limited). [NEP]", hepatic: "Contraindicated in cirrhosis [FDA]. Raised transaminases more likely at high doses and low body weight [FDA].", metabolic: "Alone it does not cause hypoglycaemia; with a sulfonylurea or insulin it can — treat hypoglycaemia with glucose (dextrose), not table sugar, because acarbose blocks sucrose breakdown [UNVERIFIED-KNOWLEDGE].", other: "Not applicable." },
  tox: { human: "Overdose does not cause hypoglycaemia; it causes flatulence, diarrhoea and abdominal discomfort that settle [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No carbohydrate-containing food or drink for 4–6 h [FDA]." },
  contra: ["Hypersensitivity [FDA].", "Diabetic ketoacidosis; cirrhosis [FDA].", "Inflammatory bowel disease, colonic ulceration, partial or predisposition to intestinal obstruction, chronic intestinal disease of digestion or absorption [FDA]."],
  ae: { common: ["Flatulence (74%), diarrhoea (31%), abdominal pain (19%) [FDA]."], serious: ["Raised liver enzymes [FDA]"] },
  monitor: ["1-hour post-meal glucose during titration, then HbA1c about every 3 months [FDA].", "Liver enzymes at higher doses [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "acarbose", indication_id: "t2dm_start", label: "Type 2 diabetes — starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 25, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "acarbose", indication_id: "t2dm_max", label: "Type 2 diabetes — maximum for this weight", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3,
      bands: [{ min_weight_kg: 0.3, max_weight_kg: 60.001, text: "Maximum 50 mg three times daily (60 kg or less)", daily: 150 }, { min_weight_kg: 60.001, max_weight_kg: null, text: "Maximum 100 mg three times daily (over 60 kg)", daily: 300 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Weight cut-off 60 kg", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Acarbose tablets USP — Chartwell RX, label effective 2026-11-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d1b627e1-d78d-47dd-93f5-2bf4998466ba"]],
  dose: { tagline: "Tablet taken with meals that blunts the rise in blood sugar after eating.",
    adult: [{ ind: "Type 2 diabetes", text: "Start 25 mg three times daily with the first bite of each meal; increase every 4–8 weeks to 50 mg three times daily. Maximum 50 mg three times daily if 60 kg or less, 100 mg three times daily if over 60 kg.", calc: ["t2dm_start", "t2dm_max"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("abrocitinib", {
  inn: "Abrocitinib", atc: "D11AH08", cls: "Janus kinase 1 (JAK1) inhibitor; oral",
  linked: [],
  forms: ["Tablets 50 mg, 100 mg, 200 mg (film-coated) [FDA].", "Once daily, with or without food; a missed dose is skipped if under 12 h to the next dose [FDA]."],
  moa: "Reversibly inhibits JAK1 at the ATP-binding site (selective over JAK2, JAK3 and TYK2) → reduces the cytokine signalling that drives atopic dermatitis [FDA].",
  pk: ["Strong CYP2C19 inhibitors: 50 mg daily (100 mg if no response) [FDA].", "Avoid moderate–strong inhibitors of both CYP2C19 and CYP2C9, and strong or moderate CYP2C19 or CYP2C9 inducers [FDA].", "May raise levels of some P-gp and CYP2C19 substrates — monitor narrow-margin drugs [FDA]."],
  ind: { adult: ["Refractory moderate-to-severe atopic dermatitis not controlled by other systemic drugs, including biologics, or when those are inadvisable [FDA]."], paed: ["Same indication from 12 years of age [FDA]."] },
  adult: [["Atopic dermatitis", "100 mg once daily; 200 mg once daily if no adequate response; stop if no response to 200 mg. Use the lowest effective dose [FDA]."]],
  paed: { tiers: ["12 years and older: as adults [FDA].", "Under 12 years: not established [FDA]."], transition: "Adult dosing from 12 years.", calcNote: "Fixed dose; kidney function changes the dose." },
  adj: { renal: "eGFR 60–89: 100 mg daily. eGFR 30–59: 50 mg daily (100 mg if no response). eGFR under 30 or ESRD: not recommended [FDA].", hepatic: "Severe (Child-Pugh C): not recommended [FDA].", preg: "Data insufficient to establish risk; rat studies showed dystocia and skeletal variations; a pregnancy registry exists [FDA]. Breastfeeding not recommended [FDA].", metabolic: "CYP2C19 poor metabolisers: 50 mg daily (100 mg if no response) [FDA]. Hypoglycaemia reported in people with diabetes [FDA].", other: "Before starting: TB test (treat latent TB first), viral hepatitis screen, CBC (do not start if platelets under 150,000/mm³, lymphocytes under 500, neutrophils under 1,000 or Hb under 8 g/dL), vaccinations including zoster [FDA]." },
  tox: { human: "No human overdose experience; no specific antidote [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; contact a poisons centre [FDA]." },
  contra: ["Antiplatelet therapy other than low-dose aspirin (81 mg or less daily) during the first 3 months of treatment [FDA]."],
  ae: { common: ["Nausea, headache, herpes simplex, raised creatine kinase, dizziness, urinary tract infection, acne, vomiting [FDA]."], serious: ["Serious infections including TB and herpes zoster; malignancy; major cardiovascular events; thrombosis; thrombocytopenia [FDA]"] },
  monitor: ["CBC with platelets before starting, 4 weeks after starting and 4 weeks after a dose increase [FDA].", "Lipids after starting [FDA].", "TB symptoms throughout, even after a negative baseline test [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "abrocitinib", indication_id: "ad", label: "Atopic dermatitis — starting dose", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }, { form: "tab", strength: 100, unit: "mg/tab" }, { form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 30, crcl_max: 59.99, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.99, action: "avoid", factor: null, note: "eGFR under 30 or ESRD — not recommended" }],
      flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CIBINQO (abrocitinib) tablets — Pfizer, label effective 2026-10-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=16c12a56-4550-414b-ac9d-b785b41fea6b"]],
  dose: { tagline: "Once-daily tablet for severe eczema that has not responded to other systemic treatments.",
    boxedTitle: "Serious infections, mortality, malignancy, cardiovascular events and thrombosis",
    boxed: "Increased risk of serious bacterial, fungal, viral and opportunistic infections leading to hospitalization or death, including tuberculosis. Test for latent TB before and during therapy. Higher all-cause mortality, including sudden cardiovascular death, malignancy, major adverse cardiovascular events and thrombosis were observed with another JAK inhibitor versus TNF blockers in rheumatoid arthritis patients [FDA].",
    adult: [{ ind: "Atopic dermatitis (refractory, moderate–severe)", text: "100 mg once daily; increase to 200 mg once daily if the response is not adequate; stop if there is no response to 200 mg. eGFR 30–59, strong CYP2C19 inhibitors or CYP2C19 poor metabolisers: 50 mg once daily (100 mg if no response).", calc: ["ad"] }],
    child: [{ ind: "12 years and older", text: "As adults.", calc: ["ad"] }, { ind: "Under 12 years", text: "Not established." }] }
});

FDB_M("acalabrutinib", {
  inn: "Acalabrutinib", atc: "L01EL02", cls: "Bruton tyrosine kinase (BTK) inhibitor; oral antineoplastic",
  linked: [],
  forms: ["Tablets 100 mg (film-coated) [FDA].", "Swallow whole with water; do not chew, crush, dissolve or cut; with or without food [FDA].", "Missed by more than 3 hours: skip it; do not take extra tablets [FDA]."],
  moa: "Acalabrutinib and its active metabolite ACP-5862 bind covalently to BTK → block B-cell receptor signalling → stop malignant B-cell proliferation and survival [FDA].",
  pk: ["Terminal half-life about 1.4 h (acalabrutinib) and 6.4 h (ACP-5862) [FDA].", "Strong CYP3A inhibitors: avoid; for short courses (up to 7 days) interrupt and resume 24 h after the inhibitor stops [FDA].", "Moderate CYP3A inhibitors: 100 mg once daily [FDA].", "Strong CYP3A inducers: avoid; if unavoidable, 200 mg about every 12 h [FDA]."],
  ind: { adult: ["Mantle cell lymphoma: previously untreated, with bendamustine and rituximab, if ineligible for autologous transplant; or after at least one prior therapy [FDA].", "Chronic lymphocytic leukaemia or small lymphocytic lymphoma, alone or with obinutuzumab or venetoclax [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["MCL, CLL, SLL", "100 mg about every 12 hours until progression or unacceptable toxicity (with venetoclax: until completion of 14 cycles of 28 days) [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose; interacting drugs change it." },
  adj: { renal: "Not established in primary source (no change specified). [NEP]", hepatic: "Severe impairment: avoid [FDA].", preg: "May cause fetal harm and dystocia (animal data); advise not to breastfeed [FDA].", other: "Toxicity: interrupt; once resolved, resume; at repeat occurrences reduce to 100 mg once daily; stop at the 4th occurrence (label tables 2–4) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Upper respiratory tract infection, diarrhoea, headache, musculoskeletal pain (30% or more) [FDA]."], serious: ["Serious and opportunistic infections; haemorrhage; cytopenias; second primary cancers; atrial arrhythmias; drug-induced liver injury [FDA]"] },
  monitor: ["Full blood count regularly [FDA].", "Liver function throughout treatment [FDA].", "Bleeding, infection and arrhythmia symptoms; sun protection [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "acalabrutinib", indication_id: "bcell", label: "MCL, CLL, SLL — standard dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 100, unit: "mg/tab", whole: true }], rounding: "Whole tablets; do not cut", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CALQUENCE (acalabrutinib) tablets — AstraZeneca, label effective 2026-02-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b1409184-3267-4d8c-8f17-4e01f69828b1"]],
  dose: { tagline: "Twice-daily tablet for B-cell blood cancers (CLL and mantle cell lymphoma).",
    adult: [{ ind: "Mantle cell lymphoma, CLL, SLL", text: "100 mg about every 12 hours. With a moderate CYP3A inhibitor: 100 mg once daily. With a strong CYP3A inducer (if unavoidable): 200 mg about every 12 hours. Avoid strong CYP3A inhibitors and severe liver impairment.", calc: ["bcell"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("acebutolol", {
  inn: "Acebutolol", atc: "C07AB04", cls: "Cardioselective beta-blocker with intrinsic sympathomimetic activity",
  linked: [["Hypertension — adults", "Alone or with a thiazide [FDA]", "htn-adult"]],
  forms: ["Capsules 200 mg, 400 mg [FDA].", "Stop gradually over about 2 weeks — why: sudden withdrawal can worsen angina or precipitate MI [FDA]."],
  moa: "Blocks beta-1 adrenergic receptors (selectivity falls at higher doses), with mild intrinsic sympathomimetic activity → lowers heart rate, contractility and blood pressure, and suppresses ventricular ectopy [FDA].",
  pk: ["Half-life 3–4 h; active metabolite diacetolol 8–13 h [FDA].", "Older patients have about 2-fold higher bioavailability [FDA].", "Additive AV-node and blood-pressure effects with digoxin, calcium-channel blockers and other antihypertensives [FDA]."],
  ind: { adult: ["Hypertension [FDA].", "Ventricular premature beats [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Hypertension", "Start 400 mg once daily (twice daily if needed for 24-hour control); usual 400–800 mg/day; up to 1,200 mg/day in two doses [FDA]."], ["Ventricular premature beats", "Start 200 mg twice daily; increase gradually; usual 600–1,200 mg/day [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Daily dose halved below CrCl 50 and quartered below 25." },
  adj: { renal: "CrCl under 50 mL/min: reduce the daily dose by 50%; under 25 mL/min: by 75% [FDA].", hepatic: "Use cautiously [FDA].", preg: "Crosses the placenta; neonatal half-life 6–14 h — observe the newborn for bradycardia and hypoglycaemia [FDA].", other: "Older adults: lower maintenance doses; avoid more than 800 mg/day [FDA]." },
  tox: { human: "Beta-blocker overdose: extreme bradycardia, AV block, conduction delay, hypotension, heart failure, seizures, bronchospasm, hypoglycaemia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Atropine for bradycardia; vasopressors for hypotension; glucagon may help; bronchodilator for bronchospasm; acebutolol is dialysable [FDA]." },
  contra: ["Persistent severe bradycardia [FDA].", "Second- or third-degree heart block [FDA].", "Overt cardiac failure; cardiogenic shock [FDA]."],
  ae: { common: ["Fatigue, dizziness, headache, nausea, dyspepsia [FDA]."], serious: ["Heart failure, bradycardia, bronchospasm, masked hypoglycaemia, positive antinuclear antibodies with rare lupus-like syndrome [FDA]"] },
  monitor: ["Heart rate and blood pressure [FDA].", "Signs of heart failure [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 (atenolol, metoprolol and propranolol are the listed beta-blockers) [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "acebutolol", indication_id: "htn", label: "Hypertension — starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 1200, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "cap", strength: 200, unit: "mg/cap" }, { form: "cap", strength: 400, unit: "mg/cap" }], rounding: "Whole capsules",
      renal: [{ crcl_min: 25, crcl_max: 49.99, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 24.99, action: "reduce_dose", factor: 0.25, interval_h: 24 }], flags: [], sources: ["FDA"] },
    { drug: "acebutolol", indication_id: "vpb", label: "Ventricular premature beats — starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1200, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "cap", strength: 200, unit: "mg/cap" }], rounding: "Whole capsules",
      renal: [{ crcl_min: 25, crcl_max: 49.99, action: "reduce_dose", factor: 0.5, interval_h: 12 }, { crcl_min: 0, crcl_max: 24.99, action: "reduce_dose", factor: 0.25, interval_h: 12 }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Acebutolol hydrochloride capsules USP — AvKARE, label effective 2026-01-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fa40a564-a579-15c1-e053-6294a90ad8e9"]],
  dose: { tagline: "Heart-selective beta-blocker capsule for high blood pressure and extra heartbeats.",
    adult: [{ ind: "Hypertension", text: "Start 400 mg once daily (or 200 mg twice daily); usual 400–800 mg/day; maximum 1,200 mg/day in two doses. Older adults: avoid more than 800 mg/day.", calc: ["htn"] }, { ind: "Ventricular premature beats", text: "Start 200 mg twice daily; increase gradually to 600–1,200 mg/day.", calc: ["vpb"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("aceclidine", {
  inn: "Aceclidine", atc: "S01EB08", cls: "Muscarinic agonist eye drop (miotic)",
  linked: [],
  forms: ["Ophthalmic solution 1.44% in single-dose vials [FDA].", "Remove contact lenses; reinsert after 10 minutes. Space other eye drops by 5 minutes [FDA]."],
  moa: "Stimulates muscarinic receptors on the iris sphincter with little ciliary-muscle effect → small pupil (pinhole effect) → better near vision [FDA].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Presbyopia in adults [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Presbyopia", "One drop in each eye, wait 2 minutes, then a second drop in each eye, once daily, from the same single-dose vial [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Eye drop; no weight-based calculation." },
  adj: { preg: "No adequate human data; no harm in rat and rabbit studies at high exposures [FDA]. No lactation data [FDA].", other: "Examine the retina before starting [FDA]." },
  tox: { human: "Sensitive patients may develop salivation, sweating, gut overactivity and slow pulse; ingestion can cause sweating, nausea, tremor, bradycardia and low blood pressure [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Usually recovers spontaneously; IV fluids for dehydration [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Instillation-site irritation (20%), dim vision (16%), headache (13%) [FDA]."], serious: ["Retinal tear or detachment (rare, with miotics) [FDA]"] },
  monitor: ["Retinal examination before treatment [FDA].", "Urgent review for flashes, floaters or vision loss [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "VIZZ (aceclidine ophthalmic solution) 1.44% — LENZ Therapeutics, label effective 2026-01-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7aed8024-ad30-44d6-8f3b-63338ad3ce52"]],
  dose: { tagline: "Once-daily eye drop that narrows the pupil to sharpen near vision in presbyopia.",
    adult: [{ ind: "Presbyopia", text: "One drop in each eye, wait 2 minutes, then a second drop in each eye, once daily, from the same single-dose vial. Do not drive if vision is dim or blurred; take care at night." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("acetohydroxamic-acid", {
  inn: "Acetohydroxamic acid", atc: "G04BX03", cls: "Urease inhibitor (urinary)",
  linked: [["Kidney stones — adults", "Adjunct for struvite stones with chronic urea-splitting infection [FDA]", "stones-adult"]],
  forms: ["Tablets 250 mg [FDA].", "Take on an empty stomach at 6–8-hour intervals [FDA]."],
  moa: "Inhibits bacterial urease → less urinary ammonia and alkalinity → slows struvite stone growth and helps antibiotics work [FDA].",
  pk: ["Half-life about 5–10 h, longer in kidney impairment [FDA].", "Chelates iron: oral iron and AHA reduce each other's absorption — use IM iron if iron is needed [FDA].", "Alcohol with AHA has caused rash [FDA]."],
  ind: { adult: ["Adjunct in chronic urea-splitting urinary infection, not instead of surgery or antibiotics [FDA]."], paed: ["Same indication; starting dose 10 mg/kg/day [FDA]."] },
  adult: [["Chronic urea-splitting infection", "10–15 mg/kg/day in 3–4 doses; start 12 mg/kg/day every 6–8 hours; maximum 1.5 g/day [FDA]."]],
  paed: { tiers: ["Children: start 10 mg/kg/day, titrate with close clinical and blood monitoring [FDA]."], transition: "Adult dosing in adults.", calcNote: "Weight-based, capped at 1.5 g/day; serum creatinine over 1.8 mg/dL → no more than 1 g/day every 12 h." },
  adj: { renal: "Serum creatinine over 1.8 mg/dL: no more than 1 g/day, every 12 hours. Creatinine over 2.5 mg/dL or CrCl under 20 mL/min: contraindicated [FDA].", preg: "Contraindicated in pregnancy and in women not using reliable contraception [FDA].", other: "Long-term use beyond 7 years not studied [FDA]." },
  tox: { human: "Expected: anorexia, malaise, lethargy, tremor, anxiety, nausea, vomiting, raised reticulocytes and severe haemolysis; possible falls in platelets and white cells [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Hospital care; symptomatic treatment; transfusion if needed [FDA]." },
  contra: ["Disease that surgery and antibiotics can cure; urine infected by non-urease organisms; infection controllable by oral antibiotics [FDA].", "Serum creatinine over 2.5 mg/dL and/or CrCl under 20 mL/min [FDA].", "Pregnancy, or women not using contraception [FDA]."],
  ae: { common: ["Headache, gastrointestinal upset, anxiety, depression (up to 30% have some reaction) [FDA]."], serious: ["Coombs-negative haemolytic anaemia; phlebitis and deep vein thrombosis [FDA]"] },
  monitor: ["CBC with reticulocytes after 2 weeks, then every 3 months; reduce dose if reticulocytes over 6% [FDA].", "Kidney function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "acetohydroxamic-acid", indication_id: "ureasplit", label: "Urea-splitting infection — adult start", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 12, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 1500, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Nearest whole tablet [NEP]",
      renal: [{ crcl_min: 0, crcl_max: 19.99, action: "avoid", factor: null, note: "CrCl under 20 mL/min (or creatinine over 2.5 mg/dL) — contraindicated" }],
      renal_note: "Serum creatinine over 1.8 mg/dL: no more than 1 g/day, given every 12 hours [FDA]", flags: [], sources: ["FDA"] },
    { drug: "acetohydroxamic-acid", indication_id: "ureasplit_child", label: "Urea-splitting infection — child start", route: "PO", population: { min_age_months: 0, max_age_months: 216, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 1500, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Nearest practical tablet fraction [NEP]",
      renal: [{ crcl_min: 0, crcl_max: 19.99, action: "avoid", factor: null, note: "CrCl under 20 mL/min — contraindicated" }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "LITHOSTAT (acetohydroxamic acid) tablets — Mission Pharmacal, label effective 2026-01-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6660b616-a82d-9109-19ce-2bdf9747acea"]],
  dose: { tagline: "Tablet that blocks bacterial urease to slow infection-related (struvite) kidney stones.",
    adult: [{ ind: "Chronic urea-splitting urinary infection (adjunct)", text: "Start 12 mg/kg/day in 3 doses (every 6–8 hours) on an empty stomach; usual 10–15 mg/kg/day; maximum 1.5 g/day. Serum creatinine over 1.8 mg/dL: maximum 1 g/day every 12 hours. Over 2.5 mg/dL or CrCl under 20: do not use.", calc: ["ureasplit"] }],
    child: [{ ind: "Children", text: "Start 10 mg/kg/day in divided doses, with close monitoring of blood counts.", calc: ["ureasplit_child"] }] }
});

FDB_M("acetic-acid", {
  inn: "Acetic acid", atc: "S02AA10", cls: "Antiseptic ear drop (otic acidifier)",
  linked: [["Otitis externa and otitis — adults", "Superficial infection of the external ear canal [FDA]", "otitis-adult"]],
  forms: ["Otic solution 2% [FDA].", "Clean out wax and debris first so the drops reach the infected skin [FDA]."],
  moa: "Acidifies the external ear canal → inhibits bacteria and fungi that need a neutral pH [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable (topical in the ear canal)."],
  ind: { adult: ["Superficial infections of the external auditory canal [FDA]."], paed: ["Same; 3–4 drops may be enough in children [FDA]."] },
  adult: [["External ear infection", "Insert a cotton wick soaked in the solution and keep it moist with 3–5 drops every 4–6 hours for at least 24 h; then remove and instil 5 drops 3–4 times daily as long as needed [FDA]."]],
  paed: { tiers: ["As adults; 3–4 drops may be sufficient because the ear canal is smaller [FDA]."], transition: "Adult volume as the ear canal grows.", calcNote: "Topical; no weight-based calculation." },
  adj: { other: "Stop promptly if irritation or sensitisation occurs [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["Hypersensitivity [FDA].", "Perforated eardrum [FDA]."],
  ae: { common: ["Occasional stinging or burning [FDA]."], serious: ["Local irritation (very rare) [FDA]"] },
  monitor: ["Clinical response; check the eardrum is intact before use [FDA]."],
  local: { neml: "Not found on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Acetic acid otic solution 2% — NuCare Pharmaceuticals, label effective 2024-07-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7470a1ed-bc00-cb52-e053-2a91aa0a5c7d"]],
  dose: { tagline: "Acidifying ear drop for superficial infections of the outer ear canal.",
    adult: [{ ind: "External ear canal infection", text: "Clean the canal. Wick soaked in solution for at least 24 h, kept moist with 3–5 drops every 4–6 hours; then 5 drops 3–4 times daily. Do not use if the eardrum is perforated." }],
    child: [{ ind: "Children", text: "As adults; 3–4 drops may be enough." }] }
});

FDB_M("acetylcholine", {
  inn: "Acetylcholine", atc: "S01EB09", cls: "Cholinergic agonist (intraocular miotic)",
  linked: [],
  forms: ["20 mg acetylcholine chloride powder for intraocular solution, with diluent [FDA].", "Unstable once mixed: prepare immediately before use and discard the rest [FDA]."],
  moa: "Stimulates muscarinic receptors of the iris sphincter → rapid miosis within seconds [FDA].",
  pk: ["Rapidly hydrolysed by cholinesterase, so the effect is brief [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Rapid miosis after lens delivery in cataract surgery, and in penetrating keratoplasty, iridectomy and other anterior-segment surgery [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Anterior-segment surgery", "0.5–2 mL instilled gently into the anterior chamber, parallel to the iris and tangential to the pupil border; in cataract surgery only after the lens is delivered [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Surgical single use; no calculation." },
  adj: { other: "The supplied filter has a priming volume of about 0.6 mL [FDA]." },
  tox: { human: "Systemic absorption (rare): bradycardia, hypotension, flushing, breathing difficulty, sweating [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Atropine 0.5–1 mg IM or IV; adrenaline 0.1–1 mg SC for severe cardiovascular or bronchoconstrictor responses [FDA]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Corneal oedema or clouding (infrequent) [FDA]."], serious: ["Corneal decompensation; systemic cholinergic effects [FDA]"] },
  monitor: ["Heart rate and blood pressure during surgery [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "MIOCHOL-E (acetylcholine chloride intraocular solution) — Bausch & Lomb, label effective 2023-03-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e701ef07-9499-4b56-931f-f4eb3eedbe24"]],
  dose: { tagline: "Intraocular solution that constricts the pupil within seconds during eye surgery.",
    adult: [{ ind: "Anterior-segment eye surgery", text: "0.5–2 mL instilled gently into the anterior chamber (after lens delivery in cataract surgery). Prepare immediately before use. Keep atropine ready." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("acitretin", {
  inn: "Acitretin", atc: "D05BB02", cls: "Oral retinoid (antipsoriatic)",
  linked: [],
  forms: ["Capsules 10 mg, 17.5 mg, 25 mg [FDA].", "Once daily with the main meal [FDA].", "Dispense no more than a 1-month supply, with the Medication Guide each time [FDA]."],
  moa: "Retinoid acting on nuclear retinoid receptors → normalises keratinocyte growth and differentiation and reduces inflammation in psoriasis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mean elimination half-life 49 h; more than 98% eliminated within 2 months [FDA].", "With alcohol, acitretin is converted to etretinate, which persists far longer [FDA].", "With methotrexate: increased risk of hepatitis — combination contraindicated [FDA]."],
  ind: { adult: ["Severe psoriasis in adults, prescribed by clinicians experienced in systemic retinoids [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Severe psoriasis", "Start 25–50 mg once daily with the main meal; maintenance 25–50 mg daily by response. Relapses treated as for initial therapy [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose range." },
  adj: { renal: "Severe kidney impairment: contraindicated [FDA].", hepatic: "Severe liver impairment: contraindicated [FDA].", preg: "Contraindicated in pregnancy and for 3 years after stopping; two negative pregnancy tests before starting; reliable contraception during and for 3 years after [FDA].", metabolic: "Chronic abnormally raised blood lipids: contraindicated [FDA].", other: "Females of childbearing potential: no alcohol during treatment and for 2 months after [FDA]. Do not donate blood during and for at least 3 years after treatment [FDA]. Reduce phototherapy doses when combined [FDA]." },
  tox: { human: "Acute overdose resembles hypervitaminosis A (headache, vertigo); one patient took 525 mg and only vomited [FDA].", animal: "Oral LD50 more than 4,000 mg/kg in mice and rats [FDA].", manage: "Stop the drug at once; pregnancy test and contraception counselling in women of childbearing potential [FDA]." },
  contra: ["Pregnancy or intended pregnancy within 3 years; women unable to use reliable contraception [FDA].", "Severely impaired liver or kidney function [FDA].", "Chronic abnormally raised blood lipids [FDA].", "With methotrexate; with tetracyclines (raised intracranial pressure) [FDA]."],
  ae: { common: ["Hypervitaminosis-A-like effects: dry lips and skin, hair loss, peeling, dry eyes, nail changes [FDA]."], serious: ["Severe birth defects; hepatotoxicity; pancreatitis; raised intracranial pressure; raised lipids; depression [FDA]"] },
  monitor: ["Liver function tests before treatment, every 1–2 weeks until stable, then as indicated [FDA].", "Pregnancy tests before and during treatment [FDA].", "Blood lipids [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "acitretin", indication_id: "psoriasis", label: "Severe psoriasis — starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 25, value_max: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 50, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }, { form: "cap", strength: 25, unit: "mg/cap" }], rounding: "Whole capsules",
      renal: [], renal_note: "Severely impaired kidney function — contraindicated [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Acitretin capsules USP — AvKARE, label effective 2026-10-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6af396c2-af3e-436d-ba9a-583637495910"]],
  dose: { tagline: "Daily retinoid capsule for severe psoriasis; causes severe birth defects.",
    boxedTitle: "Pregnancy: contraindicated during and for 3 years after treatment",
    boxed: "Acitretin must not be used by females who are pregnant, or who intend to become pregnant during therapy or at any time for at least 3 years following discontinuation of therapy, or who may not use reliable contraception during treatment and for at least 3 years after. Major human fetal abnormalities have been reported. Concurrent ethanol ingestion is associated with formation of etretinate, which has a much longer elimination half-life [FDA].",
    adult: [{ ind: "Severe psoriasis", text: "25–50 mg once daily with the main meal; maintenance 25–50 mg daily by response.", calc: ["psoriasis"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("acoramidis", {
  inn: "Acoramidis", atc: "C01EB25", cls: "Transthyretin (TTR) stabiliser",
  linked: [],
  forms: ["Tablets 356 mg (film-coated) [FDA].", "Swallow whole; do not cut, crush or chew; with or without food [FDA]."],
  moa: "Binds transthyretin at its thyroxine-binding sites → slows break-up of the TTR tetramer into monomers, the rate-limiting step in amyloid formation [FDA].",
  pk: ["Effective half-life about 6 h [FDA].", "Metabolised by UGT glucuronidation: avoid UGT inducers and strong CYP3A inducers [FDA].", "Inhibits CYP2C9: monitor sensitive CYP2C9 substrates [FDA]."],
  ind: { adult: ["Cardiomyopathy of wild-type or variant transthyretin amyloidosis (ATTR-CM), to reduce cardiovascular death and hospitalisation [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ATTR cardiomyopathy", "712 mg (two 356 mg tablets) twice daily [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { preg: "Data insufficient; no embryofetal abnormalities in rats and rabbits at high exposures [FDA]." },
  tox: { human: "No clinical overdose experience [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic and supportive [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea (11.6% vs 7.6% placebo), upper abdominal pain (5.5% vs 1.4%) [FDA]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Clinical response and heart failure status [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "acoramidis", indication_id: "attrcm", label: "ATTR cardiomyopathy", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 712, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 712, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 356, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ATTRUBY (acoramidis) tablets — BridgeBio Pharma, label effective 2026-06-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=913552ef-875d-4cb7-bf05-a7d20a394c38"]],
  dose: { tagline: "Twice-daily tablet that stabilises transthyretin in amyloid heart disease.",
    adult: [{ ind: "Transthyretin amyloid cardiomyopathy", text: "712 mg (two 356 mg tablets) twice daily.", calc: ["attrcm"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("adagrasib", {
  inn: "Adagrasib", atc: "L01XX77", cls: "KRAS G12C inhibitor; oral antineoplastic",
  linked: [],
  forms: ["Tablets 200 mg [FDA].", "Swallow whole; do not chew, crush or split; same time each day, with or without food [FDA].", "Vomited dose: do not repeat. Missed by more than 4 hours: skip [FDA]."],
  moa: "Covalently binds the mutant cysteine of KRAS G12C and locks it in the inactive state → blocks downstream growth signalling, sparing wild-type KRAS [FDA].",
  pk: ["Terminal half-life 23 h [FDA].", "Avoid strong CYP3A4 inducers; avoid strong CYP3A4 inhibitors until adagrasib is at steady state [FDA].", "Avoid sensitive CYP3A4, CYP2C9, CYP2D6 and P-gp substrates where small changes matter, and other QT-prolonging drugs [FDA]."],
  ind: { adult: ["KRAS G12C-mutated locally advanced or metastatic non-small cell lung cancer after at least one prior systemic therapy (accelerated approval) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["KRAS G12C NSCLC", "600 mg twice daily until progression or unacceptable toxicity. Reductions: 400 mg twice daily, then 600 mg once daily; stop if 600 mg once daily is not tolerated [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { preg: "No human data; animal toxicity at about twice human exposure; do not breastfeed [FDA].", other: "Up to two dose reductions for adverse reactions (label Table 1) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, diarrhoea, vomiting, fatigue, musculoskeletal pain, hepatotoxicity, renal impairment, oedema, dyspnoea, reduced appetite (25% or more) [FDA]."], serious: ["Severe gastrointestinal reactions, QTc prolongation, hepatotoxicity, interstitial lung disease or pneumonitis [FDA]"] },
  monitor: ["Liver tests before starting and monthly for 3 months, then as indicated [FDA].", "ECG and potassium/magnesium in those at risk or on QT-prolonging drugs [FDA].", "New respiratory symptoms (pneumonitis) [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "adagrasib", indication_id: "nsclc", label: "KRAS G12C NSCLC — standard dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 200, unit: "mg/tab", whole: true }], rounding: "Whole tablets; do not split", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "KRAZATI (adagrasib) tablets — Mirati Therapeutics, label effective 2026-08-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0b8bf078-34c2-4f45-9012-38a8ac082b01"]],
  dose: { tagline: "Targeted tablet for lung cancer carrying the KRAS G12C mutation.",
    adult: [{ ind: "KRAS G12C-mutated NSCLC", text: "600 mg (three 200 mg tablets) twice daily. Dose reductions: 400 mg twice daily, then 600 mg once daily.", calc: ["nsclc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("adenosine", {
  inn: "Adenosine", atc: "C01EB10", cls: "Antiarrhythmic (AV-node blocker); endogenous nucleoside",
  linked: [],
  forms: ["Injection 3 mg/mL (2 mL vial) [FDA] [BT-NEML].", "Rapid IV bolus only: inject into a vein or as close to the patient as possible on the line, followed at once by a rapid saline flush [FDA]."],
  moa: "Slows conduction through the AV node and interrupts re-entry pathways → restores sinus rhythm in paroxysmal SVT, including WPW-related SVT [FDA].",
  pk: ["Half-life under 10 seconds [FDA].", "Caffeine and theophylline antagonise it [FDA].", "Digoxin, and less often digoxin with verapamil: rare ventricular fibrillation [FDA]."],
  ind: { adult: ["Conversion of paroxysmal SVT, including that with accessory pathways (WPW); try vagal manoeuvres first when appropriate [FDA].", "Does not convert atrial flutter, atrial fibrillation or VT [FDA]."], paed: ["Same; weight-based doses [FDA]."] },
  adult: [["Paroxysmal SVT", "6 mg rapid IV bolus over 1–2 seconds; if no conversion within 1–2 minutes, 12 mg; the 12 mg dose may be repeated once [FDA]."]],
  paed: { tiers: ["Under 50 kg: 0.05–0.1 mg/kg rapid IV bolus with flush; repeat in 1–2 minutes increasing by 0.05–0.1 mg/kg until sinus rhythm or a maximum single dose of 0.3 mg/kg [FDA].", "50 kg or more: adult doses [FDA].", "Doses above 12 mg are not recommended for any patient [FDA]."], transition: "Adult doses from 50 kg.", calcNote: "Weight-based under 50 kg; single dose never above 12 mg." },
  adj: { other: "Have resuscitation equipment ready; continuous ECG [FDA]. Do not give further doses to a patient who develops high-grade AV block [FDA]." },
  tox: { human: "Effects are brief because the half-life is under 10 seconds [FDA].", animal: "LD50 mouse intraperitoneal 500 mg/kg [PubChem].", manage: "Treat prolonged effects individually; methylxanthines (caffeine, theophylline) are competitive antagonists [FDA]." },
  contra: ["Second- or third-degree AV block, sick sinus syndrome or symptomatic bradycardia, unless a functioning pacemaker is present [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Facial flushing (18%), shortness of breath (12%), chest pressure (7%), headache, light-headedness [FDA]."], serious: ["Transient or prolonged asystole (sometimes fatal); ventricular fibrillation (rare); bronchospasm [FDA]"] },
  monitor: ["Continuous ECG and blood pressure during and after the bolus [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: adenosine 3 mg/mL injection, 2 mL [BT-NEML].", strengths: "3 mg/mL, 2 mL.", stg: "Not found in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "adenosine", indication_id: "svt_adult", label: "PSVT — 50 kg or more, first dose", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: 50, max_weight_kg: null },
      basis: "fixed", dose: { value: 6, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 12, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "inj", strength: 3, unit: "mg/mL" }], rounding: "Exact mL; rapid bolus with saline flush", renal: [], flags: [], sources: ["FDA"] },
    { drug: "adenosine", indication_id: "svt_child", label: "PSVT — under 50 kg, first dose", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: 49.99 },
      basis: "mg_per_kg", dose: { value: 0.05, value_max: 0.1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 12, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 3, unit: "mg/mL" }], rounding: "Exact mL (dilute for small doses as per local practice) [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Adenosine injection USP — Sagent Pharmaceuticals, label effective 2026-07-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=546642f2-662f-46cf-9d82-5bb3bdcc7677"], ["PubChem", "Adenosine (CID 60961) — Non-human toxicity values, NLM", "https://pubchem.ncbi.nlm.nih.gov/compound/60961"]],
  dose: { tagline: "Ultra-short-acting IV bolus that stops re-entrant supraventricular tachycardia.",
    adult: [{ ind: "Paroxysmal SVT", text: "6 mg rapid IV bolus over 1–2 seconds with an immediate saline flush; if not converted in 1–2 minutes, 12 mg; may repeat 12 mg once. Never more than 12 mg per dose.", calc: ["svt_adult"] }],
    child: [{ ind: "Paroxysmal SVT, under 50 kg", text: "0.05–0.1 mg/kg rapid IV bolus with flush; if not converted in 1–2 minutes, increase by 0.05–0.1 mg/kg per dose up to 0.3 mg/kg (never more than 12 mg per dose). 50 kg or more: adult doses.", calc: ["svt_child", "svt_adult"] }] }
});

FDB_M("adalimumab", {
  inn: "Adalimumab", atc: "L04AB04", cls: "Tumour necrosis factor (TNF) blocker; monoclonal antibody (biosimilars available)",
  linked: [["Crohn's disease — adults", "Induction and maintenance [FDA]", "crohns-adult"], ["Ulcerative colitis — adults", "Induction and maintenance [FDA]", "uc-adult"], ["IBD — children", "Crohn's disease from 6 years [FDA]", "ibd-child"], ["Rheumatoid arthritis — adults", "With or without methotrexate [FDA]", "ra-adult"]],
  forms: ["Prefilled syringes and autoinjectors 40 mg/0.4 mL, 40 mg/0.8 mL, 80 mg/0.8 mL (product-specific; also 10 mg and 20 mg paediatric syringes for some products) [FDA].", "Subcutaneous injection [FDA]."],
  moa: "Binds TNF-alpha and blocks its interaction with TNF receptors → reduces inflammation in arthritis, psoriasis, IBD, hidradenitis and uveitis [FDA].",
  pk: ["Mean terminal half-life about 2 weeks (10–20 days) [FDA].", "Do not combine with other biologics (e.g. anakinra, abatacept); live vaccines should not be given [FDA]."],
  ind: { adult: ["Rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, Crohn's disease, ulcerative colitis, plaque psoriasis, hidradenitis suppurativa, uveitis [FDA]."], paed: ["Polyarticular JIA and uveitis from 2 years; Crohn's disease from 6 years; hidradenitis suppurativa from 12 years [FDA]."] },
  adult: [["RA, PsA, AS", "40 mg every other week; in RA without methotrexate, 40 mg weekly or 80 mg every other week may help [FDA]."], ["Crohn's disease, ulcerative colitis", "160 mg on day 1 (or split over 2 days), 80 mg on day 15, then 40 mg every other week from day 29. UC: stop if no remission by day 57 [FDA]."], ["Plaque psoriasis, adult uveitis", "80 mg, then 40 mg every other week starting 1 week later [FDA]."], ["Hidradenitis suppurativa", "160 mg day 1, 80 mg day 15, then 40 mg weekly or 80 mg every other week from day 29 [FDA]."]],
  paed: { tiers: ["JIA or uveitis, 2 years and older: 10 to under 15 kg 10 mg; 15 to under 30 kg 20 mg; 30 kg or more 40 mg — every other week [FDA].", "Crohn's disease, 6 years and older: 17 to under 40 kg — 80 mg day 1, 40 mg day 15, then 20 mg every other week; 40 kg or more — 160 mg day 1, 80 mg day 15, then 40 mg every other week [FDA].", "Hidradenitis, 12 years and older: 30 to under 60 kg — 80 mg day 1, then 40 mg every other week from day 8; 60 kg or more — adult regimen [FDA].", "Not studied under 2 years or under 10 kg (JIA/uveitis) [FDA]."], transition: "Adult doses at the top weight bands.", calcNote: "Weight bands; fixed syringe sizes." },
  adj: { other: "Test for TB before and during treatment; treat latent TB first. Screen for hepatitis B [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Infections (upper respiratory, sinusitis), injection-site reactions, headache, rash (over 10%) [FDA]."], serious: ["Serious infections including TB and invasive fungal infections; lymphoma and other malignancies (including hepatosplenic T-cell lymphoma); hepatitis B reactivation; demyelinating disease; heart failure; cytopenias; lupus-like syndrome [FDA]"] },
  monitor: ["TB evaluation before and periodically during treatment [FDA].", "Signs of infection, malignancy and heart failure [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary; biosimilars used in India.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "adalimumab", indication_id: "ra", label: "RA, PsA, AS — adult maintenance", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: { max_single: 80, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "inj", strength: 40, unit: "mg/dose" }], rounding: "Whole prefilled syringe or pen", renal: [], flags: [], sources: ["FDA"] },
    { drug: "adalimumab", indication_id: "jia", label: "JIA or uveitis — 2 years and over (every other week)", route: "SC", population: { min_age_months: 24, max_age_months: null, min_weight_kg: 10, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null,
      bands: [{ min_weight_kg: 10, max_weight_kg: 15, text: "10 mg SC every other week", daily: null }, { min_weight_kg: 15, max_weight_kg: 30, text: "20 mg SC every other week", daily: null }, { min_weight_kg: 30, max_weight_kg: null, text: "40 mg SC every other week", daily: null }],
      caps: { max_single: 40, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Fixed syringe sizes", renal: [], flags: [], sources: ["FDA"] },
    { drug: "adalimumab", indication_id: "cd_child", label: "Crohn's disease — 6 years and over", route: "SC", population: { min_age_months: 72, max_age_months: null, min_weight_kg: 17, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null,
      bands: [{ min_weight_kg: 17, max_weight_kg: 40, text: "Day 1: 80 mg; day 15: 40 mg; then 20 mg every other week from day 29", daily: null }, { min_weight_kg: 40, max_weight_kg: null, text: "Day 1: 160 mg (or split over 2 days); day 15: 80 mg; then 40 mg every other week from day 29", daily: null }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Fixed syringe sizes", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "AMJEVITA (adalimumab-atto) injection — Amgen, label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c44bd5b-4464-40a4-8933-8680950f00f2"]],
  dose: { tagline: "Injectable TNF blocker for inflammatory arthritis, IBD, psoriasis, hidradenitis and uveitis.",
    boxedTitle: "Serious infections and malignancy",
    boxed: "Patients treated with adalimumab products are at increased risk for serious infections that may lead to hospitalization or death, including active tuberculosis (including reactivation of latent TB), invasive fungal infections and other opportunistic infections. Test for latent TB before and during use. Lymphoma and other malignancies, some fatal, have been reported in children and adolescents treated with TNF blockers [FDA].",
    adult: [{ ind: "Rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis", text: "40 mg SC every other week (RA without methotrexate: 40 mg weekly or 80 mg every other week).", calc: ["ra"] }, { ind: "Crohn's disease and ulcerative colitis", text: "160 mg on day 1, 80 mg on day 15, then 40 mg every other week from day 29. UC: stop if no remission by day 57." }, { ind: "Plaque psoriasis, uveitis", text: "80 mg, then 40 mg every other week from 1 week later." }, { ind: "Hidradenitis suppurativa", text: "160 mg day 1, 80 mg day 15, then 40 mg weekly or 80 mg every other week." }],
    child: [{ ind: "JIA or uveitis (2 years and over)", text: "10 to under 15 kg: 10 mg; 15 to under 30 kg: 20 mg; 30 kg or more: 40 mg — every other week.", calc: ["jia"] }, { ind: "Crohn's disease (6 years and over)", text: "17 to under 40 kg: 80 mg, 40 mg on day 15, then 20 mg every other week. 40 kg or more: 160 mg, 80 mg on day 15, then 40 mg every other week.", calc: ["cd_child"] }] }
});

FDB_M("adapalene", {
  inn: "Adapalene", atc: "D10AD03", cls: "Topical retinoid (acne)",
  linked: [],
  forms: ["Topical gel (over-the-counter product) [FDA]."],
  moa: "Retinoid-receptor agonist in the skin → normalises follicular keratinisation and reduces inflammation in acne [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable (topical)."],
  ind: { adult: ["Acne [FDA]."], paed: ["12 years and older; under 12 years ask a doctor [FDA]."] },
  adult: [["Acne", "Once daily: clean and pat dry, then apply a thin layer to the whole affected area (for example the whole face). Do not use more than once a day — more does not work faster and worsens irritation [FDA]."]],
  paed: { tiers: ["12 years and older: as adults [FDA].", "Under 12 years: ask a doctor [FDA]."], transition: "Adult use from 12 years.", calcNote: "Topical; no calculation." },
  adj: { other: "For external use only [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["Not established in primary source. [NEP]"],
  ae: { common: ["Skin irritation, dryness, redness, stinging (worse with overuse) [FDA]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Response over weeks; irritation [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "DIFFERIN (adapalene) gel, OTC drug facts — Galderma, label effective 2022-12-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0739d631-171b-42a8-bd55-0022b8df2d8a"]],
  dose: { tagline: "Once-daily retinoid gel for acne.",
    adult: [{ ind: "Acne", text: "Thin layer to the whole affected area once daily after gentle cleansing. Not more than once a day." }],
    child: [{ ind: "12 years and older", text: "As adults." }, { ind: "Under 12 years", text: "Ask a doctor." }] }
});

FDB_M("afamelanotide", {
  inn: "Afamelanotide", atc: "D02BB02", cls: "Melanocortin-1 receptor agonist (subcutaneous implant)",
  linked: [],
  forms: ["Implant 16 mg (bioresorbable rod, about 1.7 cm) [FDA].", "Inserted by a trained health professional above the anterior supra-iliac crest with the supplied cannula [FDA]."],
  moa: "Activates the melanocortin-1 receptor → increases skin eumelanin → more pain-free light exposure in erythropoietic protoporphyria [FDA].",
  pk: ["Apparent half-life about 15 h from the controlled-release implant [FDA]."],
  ind: { adult: ["Adults with erythropoietic protoporphyria and a history of phototoxic reactions, to increase pain-free light exposure [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Erythropoietic protoporphyria", "One 16 mg implant subcutaneously every 2 months; continue sun and light protection [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Single implant; no calculation." },
  adj: { preg: "No human data; no developmental harm in rats at up to 12 times the human dose [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Remove the implant if a serious hypersensitivity reaction occurs [FDA]." },
  contra: ["History of severe hypersensitivity to afamelanotide or excipients [FDA]."],
  ae: { common: ["Implant-site reaction, nausea, oropharyngeal pain, cough, fatigue, dizziness, skin hyperpigmentation, somnolence, melanocytic naevus (over 2%) [FDA]."], serious: ["Anaphylaxis and serious hypersensitivity (post-marketing) [FDA]"] },
  monitor: ["Full skin examination twice yearly (pigmentation, naevi) [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "SCENESSE (afamelanotide) implant — Clinuvel, label effective 2026-05-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=94f53286-11dd-7fbb-e053-2a95a90a7c48"]],
  dose: { tagline: "Two-monthly skin implant that raises light tolerance in erythropoietic protoporphyria.",
    adult: [{ ind: "Erythropoietic protoporphyria", text: "One 16 mg implant under the skin every 2 months, inserted by a trained professional; keep using sun protection." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("afatinib", {
  inn: "Afatinib", atc: "L01EB03", cls: "Irreversible ErbB-family (EGFR/HER2/HER4) tyrosine kinase inhibitor",
  linked: [],
  forms: ["Tablets 20 mg, 30 mg, 40 mg [FDA].", "Take at least 1 hour before or 2 hours after a meal; do not take a missed dose within 12 hours of the next [FDA]."],
  moa: "Covalently binds the kinase domains of EGFR (ErbB1), HER2 (ErbB2) and HER4 (ErbB4) → irreversibly blocks ErbB signalling in EGFR-mutated tumours [FDA].",
  pk: ["Elimination half-life 37 h on repeat dosing [FDA].", "P-gp inhibitors (ritonavir, ciclosporin, ketoconazole, itraconazole, erythromycin, verapamil, amiodarone and others): reduce by 10 mg/day if not tolerated [FDA].", "Chronic P-gp inducers: increase by 10 mg/day as tolerated [FDA]."],
  ind: { adult: ["First-line metastatic NSCLC with non-resistant EGFR mutations [FDA].", "Metastatic squamous NSCLC progressing after platinum chemotherapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["NSCLC", "40 mg once daily until progression or intolerance. After a withheld adverse reaction, restart 10 mg/day lower [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose; severe kidney impairment → 30 mg." },
  adj: { renal: "Severe impairment (eGFR 15–29): 30 mg once daily [FDA]. Under 15 or dialysis: not studied [FDA].", preg: "Can cause fetal harm; use effective contraception; do not breastfeed [FDA].", other: "Withhold for grade 3 or higher reactions, grade 2 diarrhoea lasting 2 days on antidiarrhoeals, or prolonged grade 2 skin reactions; resume 10 mg/day lower [FDA]." },
  tox: { human: "Two adolescents who took 360 mg (mixed ingestion) had nausea, vomiting, weakness, dizziness, headache, abdominal pain and mildly raised amylase, and recovered [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, rash or acneiform dermatitis, stomatitis, paronychia, dry skin, reduced appetite, nausea, vomiting, pruritus (20% or more) [FDA]."], serious: ["Severe diarrhoea with dehydration and kidney failure; bullous or exfoliative skin reactions; interstitial lung disease; fatal hepatotoxicity; GI perforation; keratitis [FDA]"] },
  monitor: ["Liver tests periodically [FDA].", "Hydration and kidney function with diarrhoea [FDA].", "New respiratory or eye symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "afatinib", indication_id: "nsclc", label: "NSCLC — standard dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 40, unit: "mg/tab" }, { form: "tab", strength: 30, unit: "mg/tab" }, { form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 15, crcl_max: 29.99, action: "reduce_dose", factor: 0.75, interval_h: 24 }, { crcl_min: 0, crcl_max: 14.99, action: "avoid", factor: null, note: "eGFR under 15 or dialysis — not studied" }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "GILOTRIF (afatinib) tablets — Boehringer Ingelheim, label effective 2025-11-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fd638e5e-8032-e7ca-0179-95e96ab5d387"]],
  dose: { tagline: "Daily tablet for EGFR-mutated or squamous non-small cell lung cancer.",
    adult: [{ ind: "Non-small cell lung cancer", text: "40 mg once daily on an empty stomach (1 h before or 2 h after food). Severe kidney impairment (eGFR 15–29): 30 mg daily. After a withheld toxicity: restart 10 mg/day lower.", calc: ["nsclc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("albendazole", {
  inn: "Albendazole", atc: "P02CA03", cls: "Benzimidazole anthelmintic",
  linked: [["Worms — children", "Single-dose deworming [BT-STG] [WHO-GL]", "worms-child"], ["Liver abscess — adults", "Hydatid cyst is a differential [FDA]", "liverabscess-adult"]],
  forms: ["Tablets 200 mg [FDA]; 400 mg chewable tablets (Bhutan) [BT-NEML].", "Take with food (fat increases absorption for tissue infections); tablets may be crushed or chewed [FDA]."],
  moa: "Benzimidazole that binds parasite tubulin → blocks microtubule formation and glucose uptake → parasite death [UNVERIFIED-KNOWLEDGE].",
  pk: ["Active metabolite albendazole sulfoxide, half-life 8–12 h [FDA].", "Dexamethasone raises sulfoxide levels by about 56%; praziquantel by about 50%; cimetidine doubles bile and cyst levels [FDA].", "Induces CYP1A: monitor theophylline [FDA]."],
  ind: { adult: ["Parenchymal neurocysticercosis (Taenia solium) [FDA].", "Cystic hydatid disease of liver, lung and peritoneum (Echinococcus granulosus) [FDA].", "Intestinal worms (single dose; not an FDA-labelled use) [BT-STG] [WHO-GL]."], paed: ["Same; weight-based under 60 kg [FDA]. Deworming from 12 months [WHO-GL]."] },
  adult: [["Hydatid disease", "60 kg or more: 400 mg twice daily with meals; under 60 kg: 15 mg/kg/day in 2 doses (maximum 800 mg/day) — 28-day cycles with 14 days off, 3 cycles [FDA]."], ["Neurocysticercosis", "Same doses for 8–30 days, with steroids and anticonvulsants as needed [FDA]."], ["Intestinal worms", "400 mg once [BT-STG] [WHO-GL]."]],
  paed: { tiers: ["Hydatid or neurocysticercosis: 15 mg/kg/day in 2 doses, maximum 800 mg/day [FDA].", "Deworming: 12–23 months 200 mg once; 2 years and older 400 mg once [WHO-GL]."], transition: "400 mg twice daily from 60 kg (tissue infections).", calcNote: "Under 60 kg: 15 mg/kg/day capped at 800 mg/day." },
  adj: { hepatic: "Monitor liver enzymes before each cycle and every 2 weeks; stop if clinically significant rises [FDA].", preg: "Avoid in pregnancy except where no alternative exists; pregnancy test before therapy [FDA]. Single-dose deworming after the first trimester is used in public-health programmes [WHO-GL].", other: "Examine for retinal lesions before neurocysticercosis treatment [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic and supportive care [FDA]." },
  contra: ["Hypersensitivity to benzimidazoles [FDA]."],
  ae: { common: ["Hydatid: abnormal liver tests, abdominal pain, nausea, vomiting, reversible hair loss, headache, dizziness, fever [FDA].", "Neurocysticercosis: headache, nausea, vomiting, raised intracranial pressure, meningeal signs [FDA]."], serious: ["Bone marrow suppression (fatalities reported); hepatitis; seizures and raised intracranial pressure in neurocysticercosis [FDA]"] },
  monitor: ["Blood counts at the start of each 28-day cycle and every 2 weeks [FDA].", "Liver enzymes on the same schedule [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: albendazole 400 mg tablet, including chewable and flavoured-chewable [BT-NEML].", strengths: "400 mg.", stg: "STG 2024: 400 mg single dose for intestinal worms; 400 mg 12-hourly for 3 months (hydatid); used for neurocysticercosis [BT-STG]." },
  verify: [["Adult dose (worms)", "400 mg once; repeat after 2–3 weeks if heavy or pinworm", "400 mg single dose [BT-STG] [WHO-GL]; FDA label covers tissue infections only", "✅ Match", "Keep"], ["Child dose (worms)", "12–24 months 200 mg; 2 years and over 400 mg", "Same [WHO-GL]", "✅ Match", "Keep"], ["Tissue infections", "Not in the guide card", "15 mg/kg/day, max 800 mg/day; 400 mg twice daily if 60 kg or more [FDA]", "✏️ Add", "Added in this monograph"]],
  calc: [
    { drug: "albendazole", indication_id: "tissue", label: "Hydatid or neurocysticercosis", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
      bands: [{ min_weight_kg: 0.3, max_weight_kg: 60, text: "15 mg/kg/day in 2 doses with meals (maximum 800 mg/day)", daily: null }, { min_weight_kg: 60, max_weight_kg: null, text: "400 mg twice daily with meals", daily: 800 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "200 mg tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "albendazole", indication_id: "tissue_kg", label: "Hydatid or neurocysticercosis — under 60 kg (mg/kg)", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: 59.99 },
      basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 800, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Nearest half tablet [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "albendazole", indication_id: "worms", label: "Intestinal worms — single dose", route: "PO", population: { min_age_months: 12, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 0.3, max_weight_kg: null, text: "12–23 months: 200 mg once. 2 years and older: 400 mg once", daily: null }],
      caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Chew or crush", renal: [], flags: [], sources: ["BT-STG", "WHO-GL"] }
  ],
  sources: [["FDA", "Albendazole tablets — Amneal Pharmaceuticals, label effective 2019-09-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=06b5eefc-0b95-4862-b9b6-770063f2adf0"], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["WHO-GL", "Guideline: preventive chemotherapy to control soil-transmitted helminth infections in at-risk population groups — WHO, 2017", "https://www.who.int/publications/i/item/9789241550116"]],
  dose: { tagline: "Broad-spectrum worm tablet; single dose for gut worms, long courses for hydatid and neurocysticercosis.",
    adult: [{ ind: "Intestinal worms", text: "400 mg once (chewed or swallowed). Repeat after 2–3 weeks for heavy infection or pinworm.", calc: ["worms"], bt: "Bhutan STG: 400 mg single dose." }, { ind: "Hydatid disease", text: "60 kg or more: 400 mg twice daily with meals; under 60 kg: 15 mg/kg/day in 2 doses (maximum 800 mg/day). 28 days on, 14 days off, for 3 cycles.", calc: ["tissue", "tissue_kg"], bt: "Bhutan STG: 400 mg 12-hourly for 3 months." }, { ind: "Neurocysticercosis", text: "Same doses for 8–30 days, with steroids and anticonvulsants as needed.", calc: ["tissue", "tissue_kg"] }],
    child: [{ ind: "Intestinal worms", text: "12–23 months: 200 mg once. 2 years and older: 400 mg once.", calc: ["worms"] }, { ind: "Hydatid or neurocysticercosis", text: "15 mg/kg/day in 2 doses with meals (maximum 800 mg/day).", calc: ["tissue_kg"] }] }
});

FDB_M("aflibercept", {
  inn: "Aflibercept", atc: "S01LA05", cls: "VEGF inhibitor (intravitreal); also an IV oncology product (ziv-aflibercept)",
  linked: [["Diabetes — adults", "Diabetic macular oedema and diabetic retinopathy [FDA]", "dm-adult"]],
  forms: ["Intravitreal injection 2 mg (0.05 mL of 40 mg/mL) in single-dose vials and prefilled syringes [FDA].", "Given by a trained ophthalmologist with aseptic technique [FDA]."],
  moa: "Soluble decoy receptor that binds VEGF-A and placental growth factor → blocks new vessel growth and leakage in the retina [FDA].",
  pk: ["Not established in primary source for intravitreal use. [NEP]"],
  ind: { adult: ["Neovascular (wet) age-related macular degeneration [FDA].", "Macular oedema after retinal vein occlusion [FDA].", "Diabetic macular oedema and diabetic retinopathy [FDA]."], paed: ["Not established in primary source for these products. [NEP]"] },
  adult: [["Wet AMD", "2 mg every 4 weeks for 3 doses, then 2 mg every 8 weeks; some need every 4 weeks; every 12 weeks after 1 year of effective therapy is less effective [FDA]."], ["Macular oedema after RVO", "2 mg every 4 weeks [FDA]."], ["DME, diabetic retinopathy", "2 mg every 4 weeks for 5 doses, then every 8 weeks [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed intravitreal dose; no calculation." },
  adj: { other: "Monitor intraocular pressure and perfusion of the optic nerve head after injection [FDA]." },
  tox: { human: "A larger injected volume may raise intraocular pressure [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor intraocular pressure and treat if needed [FDA]." },
  contra: ["Ocular or periocular infection [FDA].", "Active intraocular inflammation [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Conjunctival haemorrhage, eye pain, cataract, vitreous detachment, floaters, raised intraocular pressure (5% or more) [FDA]."], serious: ["Endophthalmitis, retinal detachment, retinal vasculitis with or without occlusion, arterial thromboembolic events [FDA]"] },
  monitor: ["Intraocular pressure after each injection [FDA].", "Report pain, redness, light sensitivity or vision change at once (endophthalmitis) [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "PAVBLU (aflibercept-ayyh) intravitreal injection — Amgen, label effective 2026-10-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c61062f3-80ec-4a20-8c28-46e468592a06"]],
  dose: { tagline: "Eye injection that blocks VEGF in wet macular degeneration and diabetic eye disease.",
    adult: [{ ind: "Wet age-related macular degeneration", text: "2 mg (0.05 mL) intravitreal every 4 weeks for 3 doses, then every 8 weeks." }, { ind: "Macular oedema after retinal vein occlusion", text: "2 mg every 4 weeks." }, { ind: "Diabetic macular oedema, diabetic retinopathy", text: "2 mg every 4 weeks for 5 doses, then every 8 weeks." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("agalsidase-beta", {
  inn: "Agalsidase beta", atc: "A16AB04", cls: "Enzyme replacement therapy (alpha-galactosidase A)",
  linked: [],
  forms: ["Powder for infusion 5 mg and 35 mg vials; reconstitute and dilute before use [FDA]."],
  moa: "Supplies alpha-galactosidase A, which enters lysosomes and breaks down the accumulated globotriaosylceramide (GL-3) of Fabry disease [FDA].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Confirmed Fabry disease [FDA]."], paed: ["Confirmed Fabry disease from 2 years of age [FDA]."] },
  adult: [["Fabry disease", "1 mg/kg IV every 2 weeks; initial infusion rate no more than 0.25 mg/min (15 mg/hour), slowly increased if tolerated [FDA]."]],
  paed: { tiers: ["2 years and older: 1 mg/kg every 2 weeks, as adults [FDA]."], transition: "Same mg/kg dose at all ages.", calcNote: "1 mg/kg; vials 5 mg and 35 mg." },
  adj: { other: "Consider premedication with antihistamines, antipyretics and/or corticosteroids. Start in a setting with resuscitation equipment [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["None [FDA]."],
  ae: { common: ["Upper respiratory infection, chills, fever, headache, cough, paraesthesia, fatigue, peripheral oedema, dizziness, rash (20% or more) [FDA]."], serious: ["Anaphylaxis and severe hypersensitivity (about 1%); infusion-associated reactions [FDA]"] },
  monitor: ["Observe during and after every infusion for hypersensitivity [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "agalsidase-beta", indication_id: "fabry", label: "Fabry disease — every 2 weeks", route: "IV", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 35, unit: "mg/vial" }, { form: "inj", strength: 5, unit: "mg/vial" }], rounding: "Exact mg from reconstituted vials [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "FABRAZYME (agalsidase beta) for injection — Genzyme, label effective 2025-08-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=988513ab-b06f-4dd0-93f7-d2d4531dcce4"]],
  dose: { tagline: "Fortnightly enzyme infusion that replaces the missing enzyme in Fabry disease.",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis, early in therapy and after extended treatment. Initiate in a healthcare setting with appropriate monitoring and resuscitation equipment. If anaphylaxis occurs, discontinue and give appropriate treatment including epinephrine [FDA].",
    adult: [{ ind: "Fabry disease", text: "1 mg/kg IV every 2 weeks. Start the infusion at no more than 0.25 mg/min (15 mg/hour).", calc: ["fabry"] }],
    child: [{ ind: "Fabry disease (2 years and older)", text: "1 mg/kg IV every 2 weeks.", calc: ["fabry"] }] }
});

FDB_M("alcaftadine", {
  inn: "Alcaftadine", atc: "S01GX11", cls: "H1-antihistamine eye drop",
  linked: [["Red eye — adults", "Allergic itchy eyes [FDA]", "redeye-adult"]],
  forms: ["Ophthalmic solution (over-the-counter) [FDA].", "Remove contact lenses; reinsert after at least 10 minutes. Space other eye products by 5 minutes [FDA]."],
  moa: "Blocks histamine H1 receptors in the conjunctiva → relieves allergic itching [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable (eye drop)."],
  ind: { adult: ["Temporary relief of itchy eyes from pollen, grass, animal hair and dander [FDA]."], paed: ["2 years and older; under 2 consult a doctor [FDA]."] },
  adult: [["Allergic itchy eyes", "1 drop in each affected eye once daily [FDA]."]],
  paed: { tiers: ["2 years and older: as adults [FDA].", "Under 2 years: consult a doctor [FDA]."], transition: "Same dose from 2 years.", calcNote: "Eye drop; no calculation." },
  adj: { other: "Do not use for contact-lens irritation, or if the solution is cloudy or discoloured [FDA]." },
  tox: { human: "If swallowed, get medical help or call a poisons centre [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Sensitivity to any ingredient [FDA]."],
  ae: { common: ["Not established in primary source (OTC label). [NEP]"], serious: ["Stop and see a doctor for eye pain, vision change, increasing redness, or itch lasting more than 72 hours [FDA]"] },
  monitor: ["Symptoms; review if worse after 72 hours [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "LASTACAFT (alcaftadine ophthalmic solution), OTC drug facts — Allergan, label effective 2022-08-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a3002410-4bf1-4182-9d7c-8193eb7cd215"]],
  dose: { tagline: "Once-daily antihistamine eye drop for allergic itchy eyes.",
    adult: [{ ind: "Allergic itchy eyes", text: "1 drop in each affected eye once daily." }],
    child: [{ ind: "2 years and older", text: "As adults." }, { ind: "Under 2 years", text: "Consult a doctor." }] }
});

FDB_M("alclometasone", {
  inn: "Alclometasone", atc: "D07AB10", cls: "Topical corticosteroid, low-to-medium potency",
  linked: [],
  forms: ["Ointment 0.05% (alclometasone dipropionate) [FDA]."],
  moa: "Topical glucocorticoid → anti-inflammatory, antipruritic and vasoconstrictive effects in the skin [UNVERIFIED-KNOWLEDGE].",
  pk: ["Can be absorbed enough to cause systemic effects, especially under occlusion or over large areas [FDA]."],
  ind: { adult: ["Inflammatory and itchy corticosteroid-responsive dermatoses [FDA]."], paed: ["From 1 year; safety beyond 3 weeks not established; not recommended under 1 year [FDA]."] },
  adult: [["Steroid-responsive dermatoses", "Thin film 2–3 times daily, massaged in; stop when controlled; reassess if no improvement in 2 weeks [FDA]."]],
  paed: { tiers: ["1 year and older: as adults, for no more than 3 weeks [FDA].", "Under 1 year: not recommended [FDA].", "Do not apply under nappies or plastic pants (they act as occlusion) [FDA]."], transition: "Adult use at any age above 1 year.", calcNote: "Topical; no calculation." },
  adj: { other: "No occlusive dressings unless directed [FDA]. Older adults: no dose change [FDA]." },
  tox: { human: "Topical absorption can produce systemic corticosteroid effects [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop or reduce use [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Itching, burning, redness (about 1%) [FDA]."], serious: ["With prolonged or occluded use: folliculitis, acneiform eruption, hypopigmentation, perioral dermatitis, skin atrophy, HPA-axis suppression [FDA]"] },
  monitor: ["Response at 2 weeks; limit duration in children [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Alclometasone dipropionate ointment USP 0.05% — Sun Pharmaceutical, label effective 2025-08-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b0dccd6-dee1-49dd-8c6d-82df5c7ee36c"]],
  dose: { tagline: "Mild-to-moderate steroid ointment for eczema and other itchy rashes.",
    adult: [{ ind: "Steroid-responsive dermatoses", text: "Thin film 2–3 times daily; stop when controlled; reassess after 2 weeks if not better." }],
    child: [{ ind: "1 year and older", text: "As adults, for up to 3 weeks; not under nappies." }, { ind: "Under 1 year", text: "Not recommended." }] }
});

FDB_M("alfuzosin", {
  inn: "Alfuzosin", atc: "G04CA01", cls: "Alpha-1 adrenergic blocker (uroselective)",
  linked: [["Benign prostatic hyperplasia — adults", "Lower urinary tract symptoms [FDA]", "bph-adult"]],
  forms: ["Extended-release tablets 10 mg [FDA].", "Take with food, with the same meal each day — absorption is 50% lower fasting. Do not chew or crush [FDA]."],
  moa: "Blocks post-synaptic alpha-1 receptors in the prostate, bladder neck and prostatic urethra → relaxes smooth muscle → better urine flow [FDA].",
  pk: ["Half-life about 10 h [FDA].", "Potent CYP3A4 inhibitors (ketoconazole, itraconazole, ritonavir): contraindicated [FDA].", "Do not combine with other alpha-blockers; caution with PDE5 inhibitors, antihypertensives and nitrates [FDA]."],
  ind: { adult: ["Signs and symptoms of benign prostatic hyperplasia [FDA].", "Not for hypertension; not for children [FDA]."], paed: ["Not indicated [FDA]."] },
  adult: [["Benign prostatic hyperplasia", "10 mg once daily with the same meal each day [FDA]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { renal: "CrCl under 30 mL/min: use with caution [FDA].", hepatic: "Moderate or severe (Child-Pugh B or C): contraindicated; mild: caution [FDA].", other: "Rule out prostate cancer first. Tell the eye surgeon before cataract surgery (floppy iris syndrome) [FDA]. Caution with QT prolongation [FDA]." },
  tox: { human: "Hypotension [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Lie the patient flat; IV fluids, then vasopressors if needed; dialysis unlikely to help (82–90% protein-bound) [FDA]." },
  contra: ["Moderate or severe hepatic impairment [FDA].", "With potent CYP3A4 inhibitors [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Dizziness, upper respiratory infection, headache, fatigue [FDA]."], serious: ["Postural hypotension and syncope; angina; priapism (rare) [FDA]"] },
  monitor: ["Blood pressure, especially after the first doses [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 (tamsulosin is the listed alpha-blocker) [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alfuzosin", indication_id: "bph", label: "Benign prostatic hyperplasia", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab", whole: true }], rounding: "Whole tablet; do not crush", renal: [], renal_note: "CrCl under 30 mL/min — use with caution [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "UROXATRAL (alfuzosin HCl) extended-release tablets — Advanz Pharma, label effective 2024-12-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9fc7f119-f36b-44cf-945d-940160f3afe3"]],
  dose: { tagline: "Once-daily alpha-blocker that eases urine flow in an enlarged prostate.",
    adult: [{ ind: "Benign prostatic hyperplasia", text: "10 mg once daily, swallowed whole, with the same meal each day.", calc: ["bph"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("allopurinol", {
  inn: "Allopurinol", atc: "M04AA01", cls: "Xanthine oxidase inhibitor (urate-lowering)",
  linked: [["Gout — adults", "Long-term urate lowering [FDA] [BT-STG]", "gout-adult"]],
  forms: ["Tablets 100 mg and 300 mg (scored) [FDA]; 100 mg in Bhutan [BT-NEML].", "Doses above 300 mg/day are given in divided doses [FDA]. Drink plenty of fluid (urine output at least 2 L/day) [FDA]."],
  moa: "Allopurinol and its metabolite oxipurinol inhibit xanthine oxidase → less uric acid is made [FDA].",
  pk: ["Oxipurinol half-life is greatly prolonged in severe kidney impairment [FDA].", "Azathioprine or mercaptopurine: reduce their dose to one-third to one-quarter with allopurinol 300–600 mg/day [FDA].", "May prolong dicumarol and chlorpropamide effects [FDA]."],
  ind: { adult: ["Primary or secondary gout (attacks, tophi, joint destruction, uric acid stones, nephropathy) [FDA].", "Raised uric acid during cancer therapy [FDA].", "Recurrent calcium oxalate stones with hyperuricosuria [FDA].", "Not for asymptomatic hyperuricaemia [FDA]."], paed: ["Secondary hyperuricaemia with malignancy [FDA]."] },
  adult: [["Gout", "Start 100 mg daily; increase by 100 mg each week until serum urate is 6 mg/dL or less; mild gout usually 200–300 mg/day, tophaceous 400–600 mg/day; maximum 800 mg/day [FDA]."], ["Cancer therapy", "600–800 mg/day for 2–3 days with high fluid intake [FDA]."]],
  paed: { tiers: ["Secondary hyperuricaemia with cancer: under 6 years 150 mg daily; 6–10 years 300 mg daily; reassess after 48 hours [FDA]."], transition: "Adult dosing above 10 years [NEP].", calcNote: "Kidney function caps the daily dose." },
  adj: { renal: "CrCl 10–20 mL/min: 200 mg/day is suitable. Under 10: no more than 100 mg/day. Under 3: the dosing interval may need lengthening [FDA]. ACR 2020 instead starts low (50 mg/day in CKD stage 3 or worse) and titrates to target [UNVERIFIED-KNOWLEDGE].", hepatic: "Monitor liver tests periodically, especially early [FDA].", other: "Stop at the first sign of rash [FDA]. Flare prophylaxis when starting [NEP]." },
  tox: { human: "Massive overdose not reported [FDA].", animal: "Oral LD50: mouse 700 mg/kg; rat 6,000 mg/kg [FDA].", manage: "No specific antidote; supportive care [FDA]." },
  contra: ["Previous severe reaction to allopurinol [FDA]."],
  ae: { common: ["Acute gout attacks early in treatment (about 6% in early studies) [FDA].", "Rash [FDA]."], serious: ["Severe hypersensitivity: exfoliative or purpuric rash, Stevens–Johnson syndrome, vasculitis, irreversible hepatotoxicity, death [FDA]"] },
  monitor: ["Serum urate until at target [FDA].", "Liver and kidney function, blood counts early in treatment [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: allopurinol 100 mg tablet [BT-NEML].", strengths: "100 mg.", stg: "STG 2024: allopurinol to reduce uric acid in gout [BT-STG]." },
  verify: [["Adult dose", "Start 100 mg (50 mg if eGFR under 30), titrate to urate under 6 mg/dL; max 900 mg", "Start 100 mg, +100 mg weekly to urate ≤6 mg/dL; max 800 mg/day [FDA]", "⚠ Discrepancy", "FDA maximum 800 mg/day; guide card says 900 mg (ACR practice) — label value shown"], ["Kidney", "Low start, titrate to target (ACR 2020)", "CrCl 10–20: 200 mg/day; under 10: ≤100 mg/day [FDA]", "⚠ Discrepancy", "Both shown; FDA caps in the calculator"]],
  calc: [
    { drug: "allopurinol", indication_id: "gout_start", label: "Gout — starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 800, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "allopurinol", indication_id: "gout_max", label: "Gout — maximum daily dose for this kidney function", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 800, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 800, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 10, crcl_max: 20, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 9.99, action: "reduce_dose", factor: 0.25, interval_h: 24 }], flags: [], sources: ["FDA"] },
    { drug: "allopurinol", indication_id: "child_ca", label: "Cancer-related hyperuricaemia — child", route: "PO", population: { min_age_months: 0, max_age_months: 131, min_weight_kg: null, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1,
      bands: [{ min_weight_kg: 0.3, max_weight_kg: null, text: "Under 6 years: 150 mg daily. 6–10 years: 300 mg daily. Reassess after 48 hours", daily: null }],
      caps: {}, weight_basis: "NEP", formulations: [], rounding: "By age", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Allopurinol tablets USP — label effective 2023-02-01 (NDA018877/018832)", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0ca4baed-c5d8-4de4-ac17-6e5d1df15c03"], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Daily tablet that lowers uric acid to prevent gout attacks, tophi and urate stones.",
    adult: [{ ind: "Gout", text: "Start 100 mg once daily; increase by 100 mg each week until serum urate is 6 mg/dL or less (usual 200–600 mg/day; maximum 800 mg/day; divide doses above 300 mg). CrCl 10–20: 200 mg/day; under 10: no more than 100 mg/day. Stop at the first rash.", calc: ["gout_start", "gout_max"], bt: "Bhutan NEML: 100 mg tablets." }, { ind: "Uric acid rise during cancer therapy", text: "600–800 mg/day for 2–3 days with plenty of fluid." }],
    child: [{ ind: "Cancer-related hyperuricaemia", text: "Under 6 years: 150 mg daily; 6–10 years: 300 mg daily; reassess after 48 hours.", calc: ["child_ca"] }] }
});

FDB_M("aliskiren", {
  inn: "Aliskiren", atc: "C09XA02", cls: "Direct renin inhibitor (antihypertensive)",
  linked: [["Hypertension — adults", "Alternative antihypertensive [FDA]", "htn-adult"]],
  forms: ["Tablets 150 mg, 300 mg [FDA].", "Keep a routine pattern with meals — high-fat meals substantially reduce absorption [FDA]."],
  moa: "Directly inhibits renin → less angiotensin I and II → vasodilatation and lower blood pressure [FDA].",
  pk: ["Accumulation half-life about 24 h; 85–90% of the effect by 2 weeks [FDA].", "Avoid with ciclosporin or itraconazole [FDA].", "NSAIDs can worsen kidney function in older, volume-depleted or kidney-impaired patients [FDA].", "Poorly dialysed [FDA]."],
  ind: { adult: ["Hypertension [FDA]."], paed: ["Hypertension in children 6 years and older weighing 50 kg or more [FDA]."] },
  adult: [["Hypertension", "150 mg once daily; increase to 300 mg once daily if needed. Doses above 300 mg add diarrhoea, not effect [FDA]."]],
  paed: { tiers: ["6 years and older and 50 kg or more: as adults [FDA].", "Under 2 years: contraindicated [FDA].", "Other children: not established [FDA]."], transition: "Adult dosing at 50 kg from 6 years.", calcNote: "Fixed dose." },
  adj: { renal: "Avoid with ACE inhibitors or ARBs if CrCl under 60 mL/min; monitor creatinine and potassium periodically [FDA].", preg: "Stop as soon as pregnancy is detected (fetal toxicity) [FDA].", other: "Correct volume or salt depletion first (hypotension) [FDA]." },
  tox: { human: "Most likely hypotension [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis is not adequate [FDA]." },
  contra: ["With ARBs or ACE inhibitors in diabetes [FDA].", "Children under 2 years [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Diarrhoea (dose-related) [FDA]."], serious: ["Anaphylaxis and head and neck angioedema; hypotension; hyperkalaemia; worsening kidney function [FDA]"] },
  monitor: ["Blood pressure; serum creatinine and potassium periodically [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "aliskiren", indication_id: "htn", label: "Hypertension — adult starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "With an ACE inhibitor or ARB and CrCl under 60 mL/min — avoid the combination [FDA]", flags: [], sources: ["FDA"] },
    { drug: "aliskiren", indication_id: "htn_child", label: "Hypertension — 6 years and over, 50 kg or more", route: "PO", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: 50, max_weight_kg: null },
      basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TEKTURNA (aliskiren) tablets — label effective 2024-03-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3dd61fa5-1620-4ebf-bbdb-ede29b92fce2"]],
  dose: { tagline: "Once-daily renin inhibitor tablet for high blood pressure.",
    boxedTitle: "Fetal toxicity",
    boxed: "When pregnancy is detected, discontinue as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "150 mg once daily; 300 mg once daily if needed. Do not combine with an ACE inhibitor or ARB in diabetes.", calc: ["htn"] }],
    child: [{ ind: "6 years and older, 50 kg or more", text: "As adults.", calc: ["htn_child"] }, { ind: "Under 2 years", text: "Contraindicated." }] }
});

FDB_M("almotriptan", {
  inn: "Almotriptan", atc: "N02CC05", cls: "Triptan (5-HT1B/1D agonist)",
  linked: [],
  forms: ["Tablets 6.25 mg, 12.5 mg [FDA]."],
  moa: "Stimulates 5-HT1B/1D (and 1F) receptors → cranial vasoconstriction and less release of pain neuropeptides → relieves migraine [FDA].",
  pk: ["Half-life 3–4 h [FDA].", "Ketoconazole (strong CYP3A4 inhibitor): 6.25 mg single dose, maximum 12.5 mg/day [FDA].", "Not within 24 h of ergots or another triptan; serotonin syndrome with SSRIs or SNRIs [FDA]."],
  ind: { adult: ["Acute treatment of migraine with or without aura [FDA]."], paed: ["Adolescents 12–17 years with migraine attacks usually lasting 4 hours or more [FDA]."] },
  adult: [["Migraine attack", "6.25 or 12.5 mg (12.5 mg tends to work better); if the headache returns, repeat after 2 hours; maximum 25 mg/day [FDA]."]],
  paed: { tiers: ["12–17 years: as adults [FDA].", "Under 12 years: not established [FDA]."], transition: "Same dose from 12 years.", calcNote: "Kidney and liver impairment halve the doses." },
  adj: { renal: "Severe impairment: start 6.25 mg; maximum 12.5 mg/day [FDA].", hepatic: "Start 6.25 mg; maximum 12.5 mg/day [FDA].", other: "Cardiovascular evaluation before the first dose if coronary risk factors are present; consider giving the first dose under observation [FDA]." },
  tox: { human: "Single doses up to 200 mg in volunteers caused no serious events; hypertension or cardiovascular symptoms could occur [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; monitor ECG and blood pressure [NEP]." },
  contra: ["Ischaemic heart disease, coronary vasospasm, other significant cardiovascular disease [FDA].", "Stroke or TIA history; peripheral vascular disease including ischaemic bowel [FDA].", "Uncontrolled hypertension [FDA].", "Within 24 h of an ergot or another triptan [FDA].", "Hemiplegic or basilar migraine [FDA]."],
  ae: { common: ["Adults: nausea, dry mouth, paraesthesia. Adolescents: dizziness, somnolence, headache, paraesthesia, nausea, vomiting [FDA]."], serious: ["Myocardial infarction, arrhythmias, stroke, GI ischaemia, serotonin syndrome, medication-overuse headache [FDA]"] },
  monitor: ["Cardiovascular risk before starting [FDA].", "Headache frequency (medication overuse) [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "almotriptan", indication_id: "migraine", label: "Migraine attack — per dose", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 12.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 12.5, max_daily: 25, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 12.5, unit: "mg/tab" }, { form: "tab", strength: 6.25, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [], renal_note: "Severe kidney impairment (label gives no CrCl cut-off): start 6.25 mg, maximum 12.5 mg/day [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Almotriptan tablets USP — Ajanta Pharma USA, label effective 2025-12-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6fa380c4-c885-4743-85bf-88819ae68645"]],
  dose: { tagline: "Triptan tablet taken at the start of a migraine attack.",
    adult: [{ ind: "Migraine attack", text: "6.25–12.5 mg; repeat after 2 hours if the headache returns; maximum 25 mg/day. Severe kidney or any liver impairment: start 6.25 mg, maximum 12.5 mg/day.", calc: ["migraine"] }],
    child: [{ ind: "12–17 years", text: "As adults.", calc: ["migraine"] }, { ind: "Under 12 years", text: "Not established." }] }
});

FDB_M("alogliptin", {
  inn: "Alogliptin", atc: "A10BH04", cls: "DPP-4 inhibitor (gliptin)",
  linked: [["Type 2 diabetes — adults", "Add-on to diet and exercise [FDA]", "dm-adult"]],
  forms: ["Tablets 25 mg, 12.5 mg, 6.25 mg; do not split [FDA].", "With or without food; do not double a missed dose [FDA]."],
  moa: "Inhibits DPP-4 → higher active GLP-1 and GIP → glucose-dependent insulin release and less glucagon [FDA].",
  pk: ["Terminal half-life about 21 h [FDA].", "With a sulfonylurea or insulin, lower their doses to avoid hypoglycaemia [FDA].", "About 7% removed by 3 hours of haemodialysis [FDA]."],
  ind: { adult: ["Type 2 diabetes, adjunct to diet and exercise; not for type 1 diabetes [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Type 2 diabetes", "25 mg once daily. CrCl 30–59: 12.5 mg once daily. CrCl under 30 or ESRD: 6.25 mg once daily [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Kidney function sets the dose." },
  adj: { renal: "Assess before starting and periodically. CrCl 60 or more: 25 mg. 30 to under 60: 12.5 mg. Under 30 or ESRD: 6.25 mg [FDA].", hepatic: "Hepatic failure (sometimes fatal) reported; stop if liver injury is suspected [FDA].", other: "Consider heart-failure risk before starting [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; haemodialysis is unlikely to help [FDA]." },
  contra: ["Serious hypersensitivity (anaphylaxis, angioedema, severe skin reactions) [FDA]."],
  ae: { common: ["Nasopharyngitis, headache, upper respiratory infection [FDA]."], serious: ["Acute pancreatitis; heart failure; serious hypersensitivity including SJS; hepatic failure; severe joint pain; bullous pemphigoid [FDA]"] },
  monitor: ["Kidney function before and periodically [FDA].", "Liver tests at baseline and if symptoms [FDA].", "HbA1c [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alogliptin", indication_id: "t2dm", label: "Type 2 diabetes", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 25, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 25, unit: "mg/tab", whole: true }, { form: "tab", strength: 12.5, unit: "mg/tab", whole: true }, { form: "tab", strength: 6.25, unit: "mg/tab", whole: true }], rounding: "Whole tablets; do not split",
      renal: [{ crcl_min: 30, crcl_max: 59.99, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.99, action: "reduce_dose", factor: 0.25, interval_h: 24 }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Alogliptin tablets — Padagis Israel, label effective 2025-04-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b25f155a-1259-47c2-aa3b-7c1356e4c7f6"]],
  dose: { tagline: "Once-daily gliptin tablet for type 2 diabetes, dosed by kidney function.",
    adult: [{ ind: "Type 2 diabetes", text: "25 mg once daily. CrCl 30–59: 12.5 mg. CrCl under 30 or dialysis: 6.25 mg.", calc: ["t2dm"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("aldesleukin", {
  inn: "Aldesleukin", atc: "L03AC01", cls: "Interleukin-2 (lymphocyte growth factor); immunotherapy",
  linked: [],
  forms: ["Powder for injection 22 million IU (1.3 mg) per vial; 18 million IU (1.1 mg) per mL when reconstituted [FDA].", "15-minute IV infusion; inpatient hospital with an intensive care facility only [FDA]."],
  moa: "Recombinant IL-2 → expands and activates T cells and NK cells → anti-tumour immune activity [UNVERIFIED-KNOWLEDGE].",
  pk: ["Distribution half-life 13 min; elimination half-life 85 min [FDA].", "Avoid glucocorticoids (reduce antitumour effect) [FDA].", "Delayed reactions to iodinated contrast after treatment [FDA]."],
  ind: { adult: ["Metastatic renal cell carcinoma in adults [FDA].", "Metastatic melanoma in adults [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Metastatic RCC or melanoma", "600,000 IU/kg (0.037 mg/kg) every 8 hours by 15-minute IV infusion, up to 14 doses; after 9 days' rest, up to another 14 doses (28 per course, as tolerated). Re-evaluate about 4 weeks after the course [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Dose in IU/kg every 8 h." },
  adj: { other: "Baseline cardiac, pulmonary, neurological, renal, haematological and chemistry evaluation; toxicity managed by withholding doses, not by reducing them [FDA]." },
  tox: { human: "Higher doses bring faster severe toxicity [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; IV dexamethasone may lessen life-threatening toxicity [FDA]." },
  contra: ["Severe hypersensitivity to aldesleukin [FDA].", "Organ allografts [FDA].", "Significant cardiac, pulmonary, renal or hepatic impairment [FDA]."],
  ae: { common: ["Capillary leak with hypotension, oedema and weight gain; fever, chills, nausea, vomiting, diarrhoea, oliguria, confusion [UNVERIFIED-KNOWLEDGE]."], serious: ["Capillary leak syndrome, neurological toxicity and coma, serious infections including sepsis and endocarditis, kidney toxicity, autoimmune disorders [FDA]"] },
  monitor: ["Vital signs, fluid balance, kidney and liver tests, blood counts throughout [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "aldesleukin", indication_id: "hd_il2", label: "Metastatic RCC or melanoma — per dose", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 600000, unit: "units", per: "dose" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", infusion: { duration_h: 0.25 },
      formulations: [{ form: "inj", strength: 18000000, unit: "units/mL" }], rounding: "Exact volume of reconstituted solution [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "PROLEUKIN (aldesleukin) for injection — Iovance Biotherapeutics, label effective 2024-12-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3c516ad-d405-4fbe-af6a-962080dbfa7d"]],
  dose: { tagline: "High-dose interleukin-2 infusion for metastatic kidney cancer and melanoma, given only in ICU-capable hospitals.",
    boxedTitle: "Capillary leak syndrome, neurological toxicity and serious infections",
    boxed: "Capillary leak syndrome, including life-threatening or fatal reactions, has occurred. Do not administer to patients with significant cardiac, pulmonary, renal and hepatic impairment; administer in a hospital setting with an intensive care facility. Neurologic toxicities, which may be life-threatening or result in coma or permanent deficits, and serious infections including sepsis and bacterial endocarditis have occurred [FDA].",
    adult: [{ ind: "Metastatic renal cell carcinoma or melanoma", text: "600,000 IU/kg every 8 hours by 15-minute infusion, up to 14 doses; 9 days' rest; then up to 14 more doses.", calc: ["hd_il2"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("alectinib", {
  inn: "Alectinib", atc: "L01ED03", cls: "ALK tyrosine kinase inhibitor",
  linked: [],
  forms: ["Capsules 150 mg [FDA].", "Take with food; swallow whole — do not open or dissolve [FDA]."],
  moa: "Inhibits anaplastic lymphoma kinase (ALK) → blocks growth of ALK-rearranged lung cancer [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 33 h (alectinib) and 31 h (active metabolite M4) [FDA].", "Over 99% protein-bound: haemodialysis unlikely to help [FDA]."],
  ind: { adult: ["Adjuvant treatment after resection of ALK-positive NSCLC (tumours 4 cm or more, or node-positive) [FDA].", "ALK-positive metastatic NSCLC [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ALK-positive NSCLC", "600 mg twice daily with food — adjuvant for 2 years (or until recurrence); metastatic until progression. Reductions: 450 mg, then 300 mg twice daily [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose; severe liver impairment → 450 mg." },
  adj: { hepatic: "Severe (Child-Pugh C): 450 mg twice daily [FDA].", renal: "Withhold for severe kidney impairment during treatment; resume at a reduced dose on recovery or stop [FDA].", preg: "Can cause fetal harm; effective contraception [FDA]." },
  tox: { human: "No overdose experience; no antidote [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Hepatotoxicity, constipation, fatigue, myalgia, oedema, rash, cough (20% or more) [FDA]."], serious: ["Hepatotoxicity; interstitial lung disease; kidney impairment; bradycardia; severe myalgia with raised CK; haemolytic anaemia; photosensitivity [FDA]"] },
  monitor: ["Liver tests every 2 weeks for 3 months, then monthly [FDA].", "Heart rate and blood pressure; CK every 2 weeks during the first month [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alectinib", indication_id: "nsclc", label: "ALK-positive NSCLC", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "cap", strength: 150, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ALECENSA (alectinib) capsules — Genentech, label effective 2026-08-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=42c49deb-713b-427a-9670-08af08adcffb"]],
  dose: { tagline: "Twice-daily capsule for ALK-positive lung cancer, after surgery or for advanced disease.",
    adult: [{ ind: "ALK-positive NSCLC", text: "600 mg (four 150 mg capsules) twice daily with food — 2 years after resection, or until progression in metastatic disease. Severe liver impairment: 450 mg twice daily.", calc: ["nsclc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("alemtuzumab", {
  inn: "Alemtuzumab", atc: "L04AG06", cls: "Anti-CD52 monoclonal antibody (cytolytic)",
  linked: [],
  forms: ["Injection 30 mg/1 mL single-dose vial [FDA].", "IV infusion over 2 hours; never IV push or bolus [FDA]."],
  moa: "Binds CD52 on lymphocytes → antibody-dependent lysis → depletes malignant B cells in CLL [FDA].",
  pk: ["Half-life about 11 h after the first 30 mg dose and about 6 days after the last [FDA]."],
  ind: { adult: ["Single agent for B-cell chronic lymphocytic leukaemia [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["B-CLL", "Escalate: 3 mg daily until infusion reactions are grade 2 or less, then 10 mg daily likewise, then 30 mg three times weekly on alternate days, for 12 weeks in total. Never more than 30 mg per dose or 90 mg per week. Re-escalate if dosing is held 7 days or more [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Escalation schedule; no weight-based calculation." },
  adj: { other: "Premedicate with oral antihistamine and paracetamol; PCP and herpes prophylaxis during and after treatment [FDA]. No live vaccines after recent treatment [FDA]." },
  tox: { human: "Doses above the limit caused marrow aplasia, infections and severe infusion reactions; one patient given 80 mg died [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive care; no specific antidote [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Cytopenias, infusion-related reactions, CMV and other infections, nausea, vomiting, diarrhoea, insomnia (10% or more) [FDA]."], serious: ["Fatal pancytopenia or marrow hypoplasia, autoimmune thrombocytopenia and haemolytic anaemia, severe infections including CMV and PCP [FDA]"] },
  monitor: ["CBC and platelets weekly during therapy; CD4 count after therapy until 200 cells/µL or more [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CAMPATH (alemtuzumab) injection — Genzyme, label effective 2025-11-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4f5f7255-7abc-4328-bd1a-ceaf139ef3e0"]],
  dose: { tagline: "Antibody infusion that depletes lymphocytes, used for B-cell chronic lymphocytic leukaemia.",
    boxedTitle: "Cytopenias, infusion-related reactions and infections",
    boxed: "Serious, including fatal, cytopenias, infusion-related reactions and infections can occur. Limit doses to 30 mg (single) and 90 mg (cumulative weekly); higher doses increase the risk of pancytopenia. Escalate gradually and monitor during infusion. Give prophylaxis against Pneumocystis jirovecii pneumonia and herpes virus infections [FDA].",
    adult: [{ ind: "B-cell CLL", text: "Escalate 3 mg → 10 mg → 30 mg (each step once reactions are grade 2 or less), then 30 mg three times weekly on alternate days for 12 weeks in total. Never more than 30 mg per dose or 90 mg per week." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("alglucosidase-alfa", {
  inn: "Alglucosidase alfa", atc: "A16AB07", cls: "Enzyme replacement therapy (acid alpha-glucosidase)",
  linked: [],
  forms: ["Powder for infusion 50 mg vial; 5 mg/mL after reconstitution, then diluted [FDA]."],
  moa: "Supplies acid alpha-glucosidase, which enters lysosomes and breaks down the glycogen that accumulates in Pompe disease [UNVERIFIED-KNOWLEDGE].",
  pk: ["Clearance about 25 mL/h/kg [FDA]."],
  ind: { adult: ["Pompe disease (acid alpha-glucosidase deficiency) [FDA]."], paed: ["Pompe disease, including infantile-onset [FDA]."] },
  adult: [["Pompe disease", "20 mg/kg IV every 2 weeks; initial rate no more than 1 mg/kg/hour, increased stepwise as tolerated [FDA]."]],
  paed: { tiers: ["All ages: 20 mg/kg every 2 weeks [FDA]."], transition: "Same mg/kg at all ages.", calcNote: "20 mg/kg; vials 50 mg." },
  adj: { other: "Compromised cardiac or respiratory function: risk of acute exacerbation from fluid overload — extra monitoring [FDA]. Supervise by staff able to manage anaphylaxis [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["None [FDA]."],
  ae: { common: ["Hypersensitivity reactions: anaphylaxis, rash, fever, flushing, urticaria, headache, sweating, nausea, cough, reduced oxygen saturation (5% or more) [FDA]."], serious: ["Anaphylaxis; immune-mediated reactions (proteinuria, nephrotic syndrome, necrotising skin lesions); acute cardiorespiratory failure [FDA]"] },
  monitor: ["Observe during and after infusions [FDA].", "Urine protein and skin for immune-mediated reactions [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alglucosidase-alfa", indication_id: "pompe", label: "Pompe disease — every 2 weeks", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 50, unit: "mg/vial" }], rounding: "Round up to whole vials for preparation; give the exact mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "LUMIZYME (alglucosidase alfa) for injection — Genzyme, label effective 2025-01-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d6bfbc45-2d34-439e-8aad-59ee2d53d4df"]],
  dose: { tagline: "Fortnightly enzyme infusion for Pompe disease.",
    boxedTitle: "Anaphylaxis, immune-mediated reactions and acute cardiorespiratory failure",
    boxed: "Anaphylaxis has occurred early in enzyme replacement therapy and after extended treatment; initiate in a setting with resuscitation equipment and discontinue for severe hypersensitivity. Immune-mediated reactions (proteinuria, nephrotic syndrome, necrotising skin lesions) have occurred. Patients with compromised cardiac or respiratory function may be at risk of serious acute exacerbation due to fluid overload [FDA].",
    adult: [{ ind: "Pompe disease", text: "20 mg/kg IV every 2 weeks; start at no more than 1 mg/kg/hour.", calc: ["pompe"] }],
    child: [{ ind: "Pompe disease", text: "20 mg/kg IV every 2 weeks.", calc: ["pompe"] }] }
});

FDB_M("alirocumab", {
  inn: "Alirocumab", atc: "C10AX14", cls: "PCSK9 inhibitor (monoclonal antibody)",
  linked: [["Lipids and statins — adults", "Add-on LDL lowering [FDA]", "lipids-adult"]],
  forms: ["Prefilled pens 75 mg/mL and 150 mg/mL [FDA].", "Subcutaneous injection [FDA]."],
  moa: "Binds PCSK9 → more LDL receptors on liver cells → lower LDL cholesterol [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 17–20 days (about 12 days with a statin) [FDA]."],
  ind: { adult: ["Reduce major cardiovascular events in adults at increased risk [FDA].", "Lower LDL-C in hypercholesterolaemia, heterozygous FH and homozygous FH [FDA]."], paed: ["Heterozygous FH from 8 years [FDA]."] },
  adult: [["Hypercholesterolaemia including HeFH", "75 mg every 2 weeks or 300 mg every 4 weeks SC; increase to 150 mg every 2 weeks if LDL response is inadequate (with 300 mg every 4 weeks, check LDL just before the next dose) [FDA]."], ["HeFH on apheresis, HoFH", "150 mg every 2 weeks [FDA]."]],
  paed: { tiers: ["HeFH, 8 years and older: under 50 kg 150 mg every 4 weeks; 50 kg or more 300 mg every 4 weeks; adjust if response inadequate [FDA]."], transition: "Weight band at 50 kg.", calcNote: "Weight band for children." },
  adj: {},
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["History of serious hypersensitivity (vasculitis, angioedema, hospitalisation) [FDA]."],
  ae: { common: ["Injection-site reactions, influenza; myalgia in established cardiovascular disease [FDA]."], serious: ["Serious hypersensitivity including vasculitis and angioedema [FDA]"] },
  monitor: ["LDL-C after starting or changing dose; with 300 mg every 4 weeks measure just before the next dose [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alirocumab", indication_id: "hc", label: "Hypercholesterolaemia — adult start", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "inj", strength: 75, unit: "mg/dose" }], rounding: "Whole pen", renal: [], flags: [], sources: ["FDA"] },
    { drug: "alirocumab", indication_id: "hefh_child", label: "HeFH — 8 years and over (every 4 weeks)", route: "SC", population: { min_age_months: 96, max_age_months: 216, min_weight_kg: null, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null,
      bands: [{ min_weight_kg: 0.3, max_weight_kg: 50, text: "150 mg SC every 4 weeks", daily: null }, { min_weight_kg: 50, max_weight_kg: null, text: "300 mg SC every 4 weeks", daily: null }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Whole pens", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "PRALUENT (alirocumab) injection — Regeneron, label effective 2026-07-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7bcfbac2-e8ac-4569-8edc-bcde3b1fd172"]],
  dose: { tagline: "Injectable PCSK9 inhibitor that lowers LDL cholesterol and cardiovascular risk.",
    adult: [{ ind: "Hypercholesterolaemia, heterozygous FH, CV risk reduction", text: "75 mg every 2 weeks or 300 mg every 4 weeks SC; increase to 150 mg every 2 weeks if LDL response is inadequate.", calc: ["hc"] }, { ind: "HeFH on apheresis, homozygous FH", text: "150 mg every 2 weeks." }],
    child: [{ ind: "Heterozygous FH (8 years and older)", text: "Under 50 kg: 150 mg every 4 weeks. 50 kg or more: 300 mg every 4 weeks.", calc: ["hefh_child"] }] }
});

FDB_M("alitretinoin", {
  inn: "Alitretinoin", atc: "D11AH04", cls: "Topical retinoid (antineoplastic gel)",
  linked: [["HIV — adults", "AIDS-related Kaposi sarcoma skin lesions [FDA]", "hiv-adult"]],
  forms: ["Gel 0.1% in a 60 g tube [FDA]."],
  moa: "Retinoid binding retinoid receptors → slows growth of Kaposi sarcoma cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable (topical)."],
  ind: { adult: ["Cutaneous lesions of AIDS-related Kaposi sarcoma, when systemic therapy is not required [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["AIDS-related Kaposi sarcoma (skin)", "Apply twice daily to coat each lesion; increase up to 4 times daily as tolerated; reduce frequency for site irritation. No occlusive dressings; avoid normal skin and mucosa; let dry 3–5 minutes [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Topical; no calculation." },
  adj: { other: "Not for disease needing systemic therapy (over 10 new lesions in a month, symptomatic lymphoedema, pulmonary or visceral KS) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["Hypersensitivity to retinoids or ingredients [FDA]."],
  ae: { common: ["At the application site: rash, pain, paraesthesia, itch, exfoliative dermatitis, oedema (over 5%) [FDA]."], serious: ["Severe local irritation [FDA]"] },
  monitor: ["Lesion response and skin tolerance [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "PANRETIN (alitretinoin) gel 0.1% — Advanz Pharma, label effective 2025-11-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=49c16717-7d86-4257-80c9-baa1417e5555"]],
  dose: { tagline: "Retinoid gel applied to skin lesions of AIDS-related Kaposi sarcoma.",
    adult: [{ ind: "AIDS-related Kaposi sarcoma (skin lesions)", text: "Coat each lesion twice daily, increasing to up to 4 times daily as tolerated. Avoid normal skin; no occlusive dressings." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("alosetron", {
  inn: "Alosetron", atc: "A03AE01", cls: "5-HT3 antagonist for IBS with diarrhoea",
  linked: [["Irritable bowel syndrome — adults", "Restricted to women with severe IBS-D not responding to conventional treatment [FDA]", "ibs-adult"]],
  forms: ["Tablets 0.5 mg, 1 mg [FDA]."],
  moa: "Blocks 5-HT3 receptors on enteric neurons → slows colonic transit and reduces visceral pain and urgency [UNVERIFIED-KNOWLEDGE].",
  pk: ["Metabolised mainly by CYP1A2: fluvoxamine contraindicated (6-fold exposure); avoid other CYP1A2 inhibitors; caution with CYP3A4 inhibitors [FDA]."],
  ind: { adult: ["Women only, with severe diarrhoea-predominant IBS for 6 months or more, after excluding structural disease, not responding to conventional therapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Severe IBS-D in women", "Start 0.5 mg twice daily. If constipated, stop until resolved, then 0.5 mg once daily; stop for good if constipation recurs. After 4 weeks, may increase to 1 mg twice daily if tolerated; stop if not controlled after 4 weeks on 1 mg twice daily [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { hepatic: "Severe hepatic impairment: contraindicated [FDA].", other: "Higher risk of constipation complications in older, debilitated patients and with drugs that slow the bowel [FDA]." },
  tox: { human: "Single doses up to 16 mg given without significant reactions [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; no antidote [FDA]." },
  contra: ["Constipation at the start [FDA].", "History of severe constipation, obstruction, stricture, toxic megacolon, perforation, adhesions, ischaemic colitis, impaired intestinal circulation, thrombophlebitis or hypercoagulable state [FDA].", "Crohn's disease, ulcerative colitis, diverticulitis [FDA].", "Severe hepatic impairment; with fluvoxamine [FDA]."],
  ae: { common: ["Constipation, abdominal discomfort and pain, nausea [FDA]."], serious: ["Ischaemic colitis; serious complications of constipation (obstruction, ileus, impaction, toxic megacolon, perforation, death) [FDA]"] },
  monitor: ["Stop immediately for constipation, rectal bleeding, bloody diarrhoea or new abdominal pain [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alosetron", indication_id: "ibsd", label: "Severe IBS-D in women — start", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 1, max_daily: 2, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 0.5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "LOTRONEX (alosetron) tablets — Sebela Pharmaceuticals, label effective 2026-06-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=35cbb9d5-639b-207a-e054-00144ff88e88"]],
  dose: { tagline: "Restricted tablet for women with severe diarrhoea-predominant IBS.",
    boxedTitle: "Serious gastrointestinal adverse reactions",
    boxed: "Infrequent but serious gastrointestinal adverse reactions, including ischemic colitis and serious complications of constipation, have resulted in hospitalization, and rarely blood transfusion, surgery and death. Indicated only for women with severe diarrhea-predominant IBS who have not responded adequately to conventional therapy. Discontinue immediately in patients who develop constipation or symptoms of ischemic colitis, and do not resume after ischemic colitis [FDA].",
    adult: [{ ind: "Severe IBS-D (women)", text: "0.5 mg twice daily; after 4 weeks may increase to 1 mg twice daily. Stop at once for constipation or signs of ischaemic colitis.", calc: ["ibsd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("alpelisib", {
  inn: "Alpelisib", atc: "L01EM03", cls: "PI3K-alpha inhibitor",
  linked: [],
  forms: ["Tablets 50 mg, 150 mg, 200 mg [FDA].", "With food, at about the same time each day [FDA]."],
  moa: "Inhibits the alpha isoform of PI3K (PIK3CA) → blocks growth signalling in PIK3CA-mutated breast cancer [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 8–9 h [FDA].", "Avoid strong CYP3A inducers and BCRP inhibitors [FDA]."],
  ind: { adult: ["With fulvestrant: HR-positive, HER2-negative, PIK3CA-mutated advanced or metastatic breast cancer after an endocrine regimen [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["PIK3CA-mutated breast cancer", "300 mg (two 150 mg tablets) once daily with food, with fulvestrant, until progression or toxicity; interrupt, reduce or stop for adverse reactions [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { metabolic: "Check fasting glucose and HbA1c and optimise control before starting; severe hyperglycaemia, HHS or ketoacidosis can occur [FDA].", preg: "Can cause fetal harm; use effective contraception [FDA]." },
  tox: { human: "Doses up to 450 mg daily were given; overdose features matched known effects (hyperglycaemia, nausea, weakness, rash) [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; no antidote [FDA]." },
  contra: ["Severe hypersensitivity [FDA]."],
  ae: { common: ["Raised glucose, raised creatinine, diarrhoea, rash, low lymphocytes, raised GGT (20% or more) [FDA]."], serious: ["Severe hypersensitivity; SJS/TEN/DRESS; severe hyperglycaemia; pneumonitis; diarrhoea [FDA]"] },
  monitor: ["Fasting glucose and HbA1c before and during treatment [FDA].", "Skin and respiratory symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alpelisib", indication_id: "bc", label: "PIK3CA-mutated breast cancer", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "PIQRAY (alpelisib) tablets — Novartis, label effective 2026-10-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b20b4e18-7a4b-4500-a08f-06c6dab0ee5b"]],
  dose: { tagline: "Daily targeted tablet, with fulvestrant, for PIK3CA-mutated advanced breast cancer.",
    adult: [{ ind: "HR+/HER2− PIK3CA-mutated breast cancer", text: "300 mg once daily with food, with fulvestrant. Check glucose and HbA1c first.", calc: ["bc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("alprazolam", {
  inn: "Alprazolam", atc: "N05BA12", cls: "Benzodiazepine (anxiolytic)",
  linked: [],
  forms: ["Immediate-release tablets 0.25, 0.5, 1, 2 mg (XANAX) [FDA].", "Extended-release tablets 0.5, 1, 2, 3 mg (XANAX XR): once daily, preferably morning; swallow whole [FDA].", "The two forms are dosed differently — do not interchange mg for mg schedules [FDA]."],
  moa: "Enhances GABA-A receptor activity → anxiolytic and sedative effects [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 11 h; about 20 h in alcoholic liver disease [FDA].", "Strong CYP3A inhibitors (ketoconazole, itraconazole): contraindicated, except ritonavir (reduce alprazolam dose when starting together) [FDA].", "Opioids and other CNS depressants: profound sedation and respiratory depression; raises digoxin levels [FDA]."],
  ind: { adult: ["Generalised anxiety disorder (immediate release) [FDA].", "Panic disorder with or without agoraphobia (immediate release and XR) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Generalised anxiety disorder (IR)", "0.25–0.5 mg three times daily; adjust every 3–4 days; maximum 4 mg/day in divided doses [FDA]."], ["Panic disorder (IR)", "0.5 mg three times daily; increase by no more than 1 mg/day every 3–4 days; trials used 1–10 mg/day (mean 5–6 mg); reassess above 4 mg/day [FDA]."], ["Panic disorder (XR)", "0.5–1 mg once daily in the morning; increase by no more than 1 mg/day every 3–4 days; usual 3–6 mg/day [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose; older adults and liver disease start low." },
  adj: { hepatic: "Advanced liver disease: start 0.25 mg 2–3 times daily (IR) [FDA].", other: "Older adults: start 0.25 mg 2–3 times daily (IR) — especially sensitive [FDA]. Taper by no more than 0.5 mg every 3 days [FDA]. Pregnancy: neonatal sedation and withdrawal [FDA]." },
  tox: { human: "CNS depression from drowsiness to coma; ataxia, dysarthria, hypotonia; worse with alcohol or opioids [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; flumazenil may be considered (to be verified against the full label overdosage text) [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to alprazolam or other benzodiazepines (angioedema reported) [FDA].", "With strong CYP3A inhibitors except ritonavir [FDA]."],
  ae: { common: ["Impaired coordination, hypotension, dysarthria, increased libido (IR); somnolence, memory impairment, dysarthria, ataxia (XR) [FDA]."], serious: ["Respiratory depression with opioids; abuse, misuse, addiction; dependence and life-threatening withdrawal [FDA]"] },
  monitor: ["Need for continued treatment; signs of misuse; sedation [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alprazolam", indication_id: "gad", label: "GAD — immediate release, starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 0.25, value_max: 0.5, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 4, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 0.25, unit: "mg/tab" }, { form: "tab", strength: 0.5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "XANAX (alprazolam) tablets — label effective 2024-04-15 (NDA018276)", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bb5cf72e-3a41-41a8-9a38-80f974eca33f"], ["FDA", "Alprazolam XR extended-release tablets — Mylan, label effective 2025-02-11 (NDA021434)", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1338d1c9-7c75-42ed-95f3-9eb1b6fc51d3"]],
  dose: { tagline: "Short-term benzodiazepine for anxiety and panic disorder; dependence risk.",
    boxedTitle: "Opioids; abuse, misuse and addiction; dependence and withdrawal",
    boxed: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma and death; reserve for patients without alternatives and limit dose and duration. Benzodiazepines expose users to abuse, misuse and addiction, which can lead to overdose or death. Continued use may lead to clinically significant physical dependence; abrupt discontinuation or rapid dose reduction may precipitate acute withdrawal reactions, which can be life-threatening — taper gradually [FDA].",
    adult: [{ ind: "Generalised anxiety disorder (immediate release)", text: "0.25–0.5 mg three times daily; maximum 4 mg/day. Older adults or liver disease: 0.25 mg 2–3 times daily.", calc: ["gad"] }, { ind: "Panic disorder", text: "IR: 0.5 mg three times daily, increasing by no more than 1 mg/day every 3–4 days. XR: 0.5–1 mg each morning, usual 3–6 mg/day. Taper by no more than 0.5 mg every 3 days." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("alprostadil", {
  inn: "Alprostadil", atc: "C01EA01", cls: "Prostaglandin E1 (keeps the ductus arteriosus open)",
  linked: [["Congenital heart disease — children", "Duct-dependent lesions until surgery [FDA]", "chd-child"]],
  forms: ["Injection 500 micrograms/mL ampoule (PROSTIN VR PEDIATRIC); must be diluted before use [FDA].", "Continuous IV infusion into a large vein, or via an umbilical artery catheter at the ductal opening [FDA].", "Separate alprostadil products for erectile dysfunction are not covered here."],
  moa: "Relaxes ductal smooth muscle → keeps the ductus arteriosus open, maintaining pulmonary or systemic blood flow in duct-dependent heart defects [FDA].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Not applicable (this product is for neonates) [FDA]."], paed: ["Neonates with duct-dependent congenital heart defects (pulmonary atresia or stenosis, tricuspid atresia, tetralogy of Fallot, interrupted aortic arch, coarctation, transposition) — palliative, until surgery [FDA]."] },
  adult: [],
  paed: { tiers: ["Start 0.05–0.1 microgram/kg/min (0.1 is the studied starting dose); once oxygenation or systemic pressure and pH respond, reduce to the lowest rate that maintains the response (e.g. 0.05, then 0.025 or 0.01). Up to 0.4 microgram/kg/min may be used, but higher rates rarely add effect [FDA]."], transition: "Neonatal use only.", calcNote: "Rate in microgram/kg/min; dilute per label table." },
  adj: { other: "Use only where ventilation is immediately available [FDA]. Beyond 120 hours: watch for antral hyperplasia and gastric outlet obstruction [FDA]." },
  tox: { human: "Apnoea, bradycardia, fever, hypotension, flushing [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop for apnoea or bradycardia and treat; restart cautiously. Reduce the rate for fever or hypotension. Flushing usually means a misplaced arterial catheter [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fever (about 14%), apnoea (about 12%), seizures (about 4%) [FDA]."], serious: ["Apnoea, especially under 2 kg and in the first hour; gastric outlet obstruction with prolonged use [FDA]"] },
  monitor: ["Continuous respiratory monitoring [FDA].", "Arterial pO2 or systemic BP and pH to judge response [FDA]."],
  local: { neml: "Not found on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "PROSTIN VR PEDIATRIC (alprostadil) injection — Pharmacia & Upjohn, label effective 2026-11-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=930f8c02-46a8-4cff-a484-660468ab23c3"]],
  dose: { tagline: "Neonatal infusion that keeps the ductus arteriosus open in duct-dependent heart defects until surgery.",
    boxedTitle: "Apnoea in neonates",
    boxed: "Apnea is experienced by about 10 to 12% of neonates with congenital heart defects treated with PROSTIN VR PEDIATRIC, most often in neonates weighing less than 2 kg at birth and usually during the first hour of infusion. Monitor respiratory status throughout and use where ventilatory assistance is immediately available [FDA].",
    adult: [],
    child: [{ ind: "Duct-dependent congenital heart disease (neonates)", text: "Start 0.05–0.1 microgram/kg/min by continuous IV infusion; once the response is seen, reduce to the lowest effective rate (0.05 → 0.025 → 0.01). Maximum studied 0.4 microgram/kg/min. Ventilation must be available." }] }
});

FDB_M("alteplase", {
  inn: "Alteplase", atc: "B01AD02", cls: "Tissue plasminogen activator (thrombolytic)", risk: "High-alert — thrombolytics are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Stroke — adults", "Acute ischaemic stroke [FDA] [BT-NEML]", "stroke-adult"], ["Acute coronary syndrome — adults", "STEMI (where PCI is not possible) [FDA]", "acs-adult"], ["Venous thromboembolism — adults", "Massive pulmonary embolism [FDA]", "vte-adult"]],
  forms: ["Powder 50 mg and 100 mg vials with sterile water (ACTIVASE) [FDA]; 50 mg vial in Bhutan [BT-NEML].", "Catheter-clearance product 2 mg (CATHFLO) is a separate product [FDA].", "Do not add other drugs to the infusion [FDA]."],
  moa: "Binds fibrin and converts plasminogen to plasmin → dissolves the clot [UNVERIFIED-KNOWLEDGE].",
  pk: ["Initial plasma half-life under 5 minutes [FDA]."],
  ind: { adult: ["Acute ischaemic stroke, after excluding haemorrhage [FDA].", "Acute myocardial infarction, to reduce mortality and heart failure [FDA].", "Acute massive pulmonary embolism [FDA]."], paed: ["Not established in primary source (ACTIVASE). Catheter occlusion: CATHFLO [FDA]."] },
  adult: [["Acute ischaemic stroke", "0.9 mg/kg (maximum 90 mg): 10% as an IV bolus over 1 minute, the rest over 60 minutes, as soon as possible within 3 hours of onset (FDA label). Control blood pressure; stop if pretreatment INR over 1.7 or aPTT raised [FDA]."], ["STEMI — accelerated", "Over 67 kg: 15 mg bolus, 50 mg over 30 min, 35 mg over 60 min. 67 kg or less: 15 mg bolus, 0.75 mg/kg over 30 min, 0.5 mg/kg over 60 min. Total never more than 100 mg; with heparin and aspirin [FDA]."], ["STEMI — 3-hour", "65 kg or more: 100 mg — 60 mg in hour 1 (6–10 mg as bolus), 20 mg in hour 2, 20 mg in hour 3. Under 65 kg: 1.25 mg/kg over 3 hours [FDA]."], ["Massive PE", "100 mg IV over 2 hours [FDA]."]],
  paed: { tiers: ["Not established (systemic thrombolysis). [NEP]", "Catheter occlusion (CATHFLO): 30 kg or more 2 mg in 2 mL; under 30 kg 110% of lumen volume, maximum 2 mg; may repeat once after 120 minutes [FDA]."], transition: "Adult doses for systemic use.", calcNote: "Stroke 0.9 mg/kg capped at 90 mg." },
  adj: { other: "Bleeding is the main complication; pregnancy may increase it [FDA]. AHA/ASA guidance extends stroke treatment to 4.5 hours in selected patients (to be verified) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bleeding [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the infusion; supportive care and blood products [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active internal bleeding; recent intracranial or intraspinal surgery or serious head trauma; intracranial conditions raising bleeding risk; bleeding diathesis; severe uncontrolled hypertension [FDA].", "Stroke: current intracranial or subarachnoid haemorrhage [FDA].", "MI or PE: recent stroke [FDA]."],
  ae: { common: ["Bleeding (most common complication) [FDA]."], serious: ["Intracranial haemorrhage; serious internal bleeding; orolingual angioedema; cholesterol embolism; reperfusion arrhythmias [FDA]"] },
  monitor: ["Frequent blood pressure and neurological checks during and after stroke treatment [FDA].", "Bleeding sites [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: alteplase 50 mg vial (referral hospitals); tenecteplase 50 mg to district hospitals for STEMI and stroke, replacing streptokinase [BT-NEML].", strengths: "50 mg.", stg: "Not specified in Bhutan STG 2024 text [BT-STG]." },
  verify: [["Stroke dose", "0.9 mg/kg (max 90 mg): 10% bolus over 1 min, rest over 60 min", "Same [FDA]", "✅ Match", "Keep"], ["Time window", "Guide card follows AHA/ASA", "FDA label: within 3 hours", "⚠ Discrepancy", "Both shown"]],
  calc: [
    { drug: "alteplase", indication_id: "ais", label: "Acute ischaemic stroke — total dose", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 0.9, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 90, unit: "mg" }, weight_basis: "actual", infusion: { duration_h: 1 },
      formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "Exact mL of 1 mg/mL solution; 10% as bolus over 1 min, rest over 60 min", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ACTIVASE (alteplase) for injection — Genentech, label effective 2026-01-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c669f77c-fa48-478b-a14b-80b20a0139c2"], ["FDA", "CATHFLO ACTIVASE (alteplase) — Genentech, label effective 2026-01-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=91ecdef2-95ff-42dd-a31c-c8a09cab3ad9"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Clot-dissolving infusion for acute ischaemic stroke, STEMI and massive pulmonary embolism.",
    adult: [{ ind: "Acute ischaemic stroke", text: "0.9 mg/kg (maximum 90 mg): 10% as an IV bolus over 1 minute, the rest infused over 60 minutes. Exclude haemorrhage on CT; keep BP controlled; stop if INR over 1.7.", calc: ["ais"], bt: "Bhutan NEML: alteplase 50 mg at referral hospitals; tenecteplase 50 mg to district level." }, { ind: "STEMI (accelerated)", text: "Over 67 kg: 15 mg bolus, 50 mg over 30 min, 35 mg over 60 min. 67 kg or less: 15 mg, then 0.75 mg/kg over 30 min, then 0.5 mg/kg over 60 min. Never more than 100 mg." }, { ind: "Massive pulmonary embolism", text: "100 mg IV over 2 hours." }],
    child: [{ ind: "Blocked central venous catheter (CATHFLO)", text: "30 kg or more: 2 mg in 2 mL; under 30 kg: 110% of the lumen volume (maximum 2 mg); may repeat once after 120 minutes." }] }
});

FDB_M("alvimopan", {
  inn: "Alvimopan", atc: "A06AH02", cls: "Peripherally acting mu-opioid receptor antagonist",
  linked: [],
  forms: ["Capsules 12 mg [FDA].", "Hospital use only, under a restricted REMS programme (maximum 15 doses) [FDA]."],
  moa: "Blocks mu-opioid receptors in the gut without crossing into the brain → speeds bowel recovery after surgery without reversing pain relief [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 10–17 h [FDA].", "Does not alter IV morphine pharmacokinetics [FDA]."],
  ind: { adult: ["To speed upper and lower GI recovery after bowel resection with primary anastomosis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["After bowel resection", "12 mg 30 minutes to 5 hours before surgery, then 12 mg twice daily from the day after surgery until discharge, for up to 7 days; no more than 15 doses in total [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose; maximum 15 doses." },
  adj: { renal: "End-stage renal disease: not recommended [FDA].", hepatic: "Severe impairment: not recommended [FDA].", other: "Recent opioid exposure increases GI effects (abdominal pain, nausea, vomiting, diarrhoea) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Therapeutic opioid doses for more than 7 consecutive days immediately before starting [FDA]."],
  ae: { common: ["Dyspepsia (1.5% or more) [FDA]."], serious: ["Myocardial infarction (seen with long-term use in a 12-month trial) [FDA]"] },
  monitor: ["Count doses (maximum 15) [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "alvimopan", indication_id: "postop", label: "After bowel resection — each dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 12, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "cap", strength: 12, unit: "mg/cap" }], rounding: "Whole capsule", renal: [], renal_note: "End-stage renal disease — not recommended [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Alvimopan capsules — Golden State Medical Supply, label effective 2026-10-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=10e39d3b-8621-16f8-e063-6294a90a254e"]],
  dose: { tagline: "Short hospital course that speeds bowel recovery after bowel resection.",
    boxedTitle: "Myocardial infarction risk with long-term use — short-term hospital use only",
    boxed: "There was a greater incidence of myocardial infarction in alvimopan-treated patients compared with placebo in a 12-month trial, although a causal relationship has not been established. Because of this potential risk with long-term use, alvimopan is available only through a restricted programme for short-term use (15 doses) under a REMS [FDA].",
    adult: [{ ind: "After bowel resection with primary anastomosis", text: "12 mg 30 minutes to 5 hours before surgery, then 12 mg twice daily from the next day until discharge (up to 7 days; maximum 15 doses).", calc: ["postop"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("amantadine", {
  inn: "Amantadine", atc: "N04BB01", cls: "NMDA antagonist / dopaminergic antiparkinson drug (former influenza A antiviral)",
  linked: [],
  forms: ["Immediate-release tablets and capsules 100 mg [FDA].", "Extended-release capsules 68.5 mg and 137 mg (GOCOVRI), once daily at bedtime — not substitutable with other amantadine products [FDA]."],
  moa: "Weak NMDA-receptor antagonist and dopamine-releasing effect → improves parkinsonism and levodopa dyskinesia [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 16 h (ER) [FDA].", "Excreted by the kidney; acidic urine increases excretion, alkaline urine may cause accumulation [FDA].", "Additive anticholinergic effects; avoid live influenza vaccine and alcohol [FDA]."],
  ind: { adult: ["Parkinsonism and drug-induced extrapyramidal reactions (IR) [FDA].", "Levodopa dyskinesia and 'off' episodes in Parkinson's disease (GOCOVRI) [FDA].", "Influenza A prophylaxis and treatment (IR label) [FDA]; current influenza A strains are widely resistant, so it is no longer advised for influenza [UNVERIFIED-KNOWLEDGE]."], paed: ["Influenza A (IR label): 1–9 years 4.4–8.8 mg/kg/day (maximum 150 mg/day); 9–12 years 100 mg twice daily [FDA]."] },
  adult: [["Parkinsonism (IR)", "100 mg twice daily; start 100 mg daily if seriously ill or on high doses of other antiparkinson drugs; occasionally up to 400 mg/day in divided doses under close supervision [FDA]."], ["Drug-induced extrapyramidal reactions (IR)", "100 mg twice daily [FDA]."], ["Dyskinesia (GOCOVRI)", "137 mg at bedtime for 1 week, then 274 mg at bedtime [FDA]."]],
  paed: { tiers: ["Influenza A only (IR label): 1–9 years 4.4–8.8 mg/kg/day, maximum 150 mg/day; 9–12 years 100 mg twice daily [FDA]."], transition: "Adult dosing over 12 years.", calcNote: "Kidney function changes the dose and interval." },
  adj: { renal: "IR: CrCl 30–50 → 200 mg on day 1, then 100 mg daily. 15–29 → 200 mg day 1, then 100 mg on alternate days. Under 15 or haemodialysis → 200 mg every 7 days [FDA]. GOCOVRI: contraindicated if CrCl under 15; lower doses in moderate–severe impairment [FDA].", other: "Reduce in heart failure, peripheral oedema or orthostatic hypotension [FDA]. Older adults (influenza dosing): 100 mg daily [FDA]. Avoid sudden withdrawal (hyperpyrexia, confusion) [FDA]." },
  tox: { human: "Deaths reported; lowest acute lethal dose 1 g amantadine HCl. Cardiac, respiratory (pulmonary oedema, ARDS), renal and CNS toxicity; anticholinergic features [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; no specific antidote [UNVERIFIED-KNOWLEDGE]." },
  contra: ["End-stage renal disease (GOCOVRI) [FDA]."],
  ae: { common: ["IR: nausea, dizziness, insomnia (5–10%); depression, anxiety, hallucinations, confusion (1–5%) [FDA].", "GOCOVRI: hallucinations, dizziness, dry mouth, peripheral oedema, constipation, falls, orthostatic hypotension [FDA]."], serious: ["Falling asleep during activities; suicidality; psychosis; withdrawal hyperpyrexia; corneal oedema [FDA]"] },
  monitor: ["Mood, hallucinations, orthostatic blood pressure; kidney function [FDA]."],
  local: { neml: "Not found on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "amantadine", indication_id: "pd", label: "Parkinsonism or drug-induced EPS — immediate release", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 400, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 30, crcl_max: 50, action: "reduce_dose", factor: 1, interval_h: 24 }, { crcl_min: 15, crcl_max: 29.99, action: "reduce_dose", factor: 1, interval_h: 48 }, { crcl_min: 0, crcl_max: 14.99, action: "reduce_dose", factor: 2, interval_h: 168 }],
      renal_note: "Give 200 mg on day 1 when CrCl is 15–50 [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Amantadine hydrochloride tablets — Marlex Pharmaceuticals, label effective 2026-10-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=25af52ee-9b29-4c07-a383-62d4537b63e0"], ["FDA", "GOCOVRI (amantadine) extended-release capsules — Supernus, label effective 2026-10-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2bee0631-0028-1314-e063-6394a90aaaed"]],
  dose: { tagline: "Antiparkinson tablet that also eases drug-induced stiffness and levodopa dyskinesia.",
    adult: [{ ind: "Parkinsonism, drug-induced extrapyramidal reactions", text: "100 mg twice daily (start 100 mg daily in frail patients); up to 400 mg/day under supervision. Kidney: CrCl 30–50 100 mg daily; 15–29 100 mg on alternate days; under 15 200 mg every 7 days (200 mg on day 1 if CrCl 15–50).", calc: ["pd"] }, { ind: "Levodopa dyskinesia (GOCOVRI extended release)", text: "137 mg at bedtime for 1 week, then 274 mg at bedtime. Not interchangeable with other amantadine products." }],
    child: [{ ind: "Children", text: "Only influenza A dosing exists in the label, and amantadine is no longer advised for influenza." }] }
});

FDB_M("ambrisentan", {
  inn: "Ambrisentan", atc: "C02KX02", cls: "Endothelin receptor antagonist (pulmonary arterial hypertension)",
  linked: [],
  forms: ["Tablets 5 mg, 10 mg; do not split, crush or chew [FDA]."],
  moa: "Blocks endothelin type A receptors → pulmonary vasodilatation and less vascular remodelling in PAH [UNVERIFIED-KNOWLEDGE].",
  pk: ["Terminal half-life 15 h; effective half-life about 9 h [FDA].", "Ciclosporin doubles exposure: limit to 5 mg once daily [FDA]."],
  ind: { adult: ["Pulmonary arterial hypertension (WHO group 1), alone or with tadalafil [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["PAH", "5 mg once daily (with or without tadalafil 20 mg); at 4-week intervals increase ambrisentan to 10 mg or tadalafil to 40 mg as needed [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { preg: "Contraindicated; exclude pregnancy before starting; effective contraception during and for 1 month after [FDA].", other: "Measure haemoglobin at start, 1 month and periodically [FDA]. Acute pulmonary oedema on starting: consider veno-occlusive disease [FDA]." },
  tox: { human: "Single doses of 50–100 mg caused headache, flushing, dizziness, nausea, nasal congestion; massive overdose could cause hypotension [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; treat hypotension [FDA]." },
  contra: ["Pregnancy [FDA].", "Idiopathic pulmonary fibrosis [FDA]."],
  ae: { common: ["Peripheral oedema, nasal congestion, sinusitis, flushing [FDA]."], serious: ["Embryo-fetal toxicity; fluid retention; pulmonary oedema with veno-occlusive disease; fall in haemoglobin; reduced sperm count [FDA]"] },
  monitor: ["Pregnancy testing in females of reproductive potential [FDA].", "Haemoglobin at baseline, 1 month and periodically [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "ambrisentan", indication_id: "pah", label: "PAH — starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "LETAIRIS (ambrisentan) tablets — Gilead Sciences, label effective 2026-06-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=725d4e73-6c83-477a-adc6-0ae4a133a844"]],
  dose: { tagline: "Once-daily tablet for pulmonary arterial hypertension; contraindicated in pregnancy.",
    boxedTitle: "Embryo-fetal toxicity",
    boxed: "Contraindicated in pregnancy because it may cause major birth defects. Exclude pregnancy before starting in females of reproductive potential; advise effective contraception before, during and for one month after treatment. Discontinue as soon as pregnancy is detected [FDA].",
    adult: [{ ind: "Pulmonary arterial hypertension", text: "5 mg once daily, with or without tadalafil; increase to 10 mg after 4 weeks if needed. With ciclosporin: maximum 5 mg daily.", calc: ["pah"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("amcinonide", {
  inn: "Amcinonide", atc: "D07AC11", cls: "Topical corticosteroid, potent",
  linked: [],
  forms: ["Cream, ointment or lotion 0.1% [FDA]."],
  moa: "Topical glucocorticoid → anti-inflammatory, antipruritic and vasoconstrictive effects in the skin [UNVERIFIED-KNOWLEDGE].",
  pk: ["Can be absorbed enough to cause systemic effects, especially under occlusion or over large areas [FDA]."],
  ind: { adult: ["Inflammatory and itchy corticosteroid-responsive dermatoses [FDA]."], paed: ["Not established in primary source; children absorb more and are more prone to systemic effects [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Steroid-responsive dermatoses", "Thin film 2–3 times daily depending on severity; occlusion may help psoriasis or resistant disease, but stop occlusion if infection develops [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Not applicable.", calcNote: "Topical; no calculation." },
  adj: { other: "Treat any infection that develops and stop occlusive dressings [FDA]." },
  tox: { human: "Topical absorption can produce systemic corticosteroid effects [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce or stop use [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Burning, itching, irritation, dryness [FDA]."], serious: ["HPA-axis suppression, Cushing's features, skin atrophy with prolonged or occluded use [FDA]"] },
  monitor: ["Response; skin atrophy with long use [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Amcinonide topical 0.1% — Ayurax, label effective 2026-10-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=83da75e7-e182-4a6c-ac0f-50d99971ebde"]],
  dose: { tagline: "Potent steroid cream or ointment for eczema, psoriasis and other inflamed rashes.",
    adult: [{ ind: "Steroid-responsive dermatoses", text: "Thin film 2–3 times daily; occlusion only for psoriasis or resistant areas, and not if infected." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("amfepramone", {
  inn: "Amfepramone (diethylpropion)", atc: "A08AA03", cls: "Sympathomimetic appetite suppressant (anorectic)",
  linked: [["Obesity — adults", "Short-term adjunct only [FDA]", "obesity-adult"]],
  forms: ["Tablets 25 mg (immediate release) and extended-release tablets 75 mg [FDA].", "ER tablet swallowed whole in mid-morning [FDA]."],
  moa: "Sympathomimetic amine that suppresses appetite through central catecholamine release [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life of active metabolites 4–6 h [FDA].", "Substantially excreted by the kidney [FDA].", "With or within 14 days of an MAO inhibitor: hypertensive crisis [FDA]."],
  ind: { adult: ["Short-term (a few weeks) adjunct to calorie restriction in obesity with BMI 30 or more, after diet and exercise alone failed [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Obesity (short term)", "25 mg three times daily, or one 75 mg ER tablet in mid-morning [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { renal: "Excreted by the kidney: take care in older adults and kidney impairment [FDA].", other: "Use beyond 3 months raised pulmonary hypertension risk 23-fold in one study; never combine with other anorectics, including herbal products [FDA]." },
  tox: { human: "Restlessness, tremor, rapid breathing, confusion, aggression, hallucinations, panic; arrhythmias, hypertension or collapse; similar drugs have caused convulsions, coma and death [FDA].", animal: "Oral LD50: mouse 600 mg/kg, rat 250 mg/kg [FDA].", manage: "Supportive care [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pulmonary hypertension, advanced arteriosclerosis, hyperthyroidism, glaucoma, severe hypertension [FDA].", "Agitated states; history of drug abuse [FDA].", "With other anorectic agents; during or within 14 days of an MAO inhibitor [FDA]."],
  ae: { common: ["Insomnia and other stimulant effects [FDA]."], serious: ["Pulmonary hypertension; valvular heart disease; dependence [FDA]"] },
  monitor: ["Breathlessness, chest pain, syncope or leg swelling — stop and assess for pulmonary hypertension [FDA].", "Weight response after the first weeks [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "amfepramone", indication_id: "obesity", label: "Obesity — immediate release", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 75, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Diethylpropion hydrochloride ER tablets 75 mg — PD-Rx, label effective 2026-11-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0d213a24-ebbf-41df-8f32-de44a572829e"]],
  dose: { tagline: "Short-term appetite suppressant for obesity; pulmonary hypertension risk.",
    adult: [{ ind: "Obesity (BMI 30 or more), short term", text: "25 mg three times daily, or 75 mg ER once in mid-morning, for a few weeks only.", calc: ["obesity"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("amifampridine", {
  inn: "Amifampridine", atc: "N07XX05", cls: "Potassium-channel blocker (aminopyridine)",
  linked: [],
  forms: ["Tablets 10 mg, functionally scored [FDA].", "A 1 mg/mL suspension can be made for small increments or tube feeding [FDA]."],
  moa: "Blocks presynaptic potassium channels → prolongs depolarisation and increases acetylcholine release at the neuromuscular junction [UNVERIFIED-KNOWLEDGE].",
  pk: ["Drugs that lower the seizure threshold, and cholinergic or neuromuscular-blocking drugs, interact [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Lambert–Eaton myasthenic syndrome [FDA]."], paed: ["Lambert–Eaton myasthenic syndrome from 6 years [FDA]."] },
  adult: [["LEMS", "15–30 mg/day in 3–5 divided doses; increase by 5 mg/day every 3–4 days; maximum 20 mg per dose and 100 mg/day [FDA]."]],
  paed: { tiers: ["6 years and older, 45 kg or more: as adults [FDA].", "6 years and older, under 45 kg: 5–15 mg/day in divided doses; increase by 2.5 mg/day every 3–4 days; maximum 10 mg per dose and 50 mg/day [FDA]."], transition: "Adult doses from 45 kg.", calcNote: "Weight sets the dose ceiling." },
  adj: { renal: "Start at the lowest recommended daily dose [FDA].", hepatic: "Start at the lowest recommended daily dose [FDA].", metabolic: "Known NAT2 poor metabolisers: start at the lowest recommended daily dose [FDA]." },
  tox: { human: "One patient given 360 mg/day had weakness, paraesthesia, vomiting, palpitations, seizures, SVT and cardiac arrest, then recovered [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive care; treat seizures and arrhythmias [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of seizures [FDA].", "Hypersensitivity to amifampridine or another aminopyridine [FDA]."],
  ae: { common: ["Paraesthesia, upper respiratory infection, abdominal pain, nausea, diarrhoea, headache, raised liver enzymes, back pain, hypertension, muscle spasms (over 10%) [FDA]."], serious: ["Seizures (about 2%); anaphylaxis [FDA]"] },
  monitor: ["Seizures; liver enzymes [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "amifampridine", indication_id: "lems_adult", label: "LEMS — adult starting daily dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 15, value_max: 30, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: { max_single: 20, max_daily: 100, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Half tablets (scored)", renal: [], flags: [], sources: ["FDA"] },
    { drug: "amifampridine", indication_id: "lems_child45", label: "LEMS — child 45 kg or more", route: "PO", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: 45, max_weight_kg: null },
      basis: "fixed", dose: { value: 15, value_max: 30, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: { max_single: 20, max_daily: 100, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Half tablets (scored)", renal: [], flags: [], sources: ["FDA"] },
    { drug: "amifampridine", indication_id: "lems_child", label: "LEMS — child under 45 kg", route: "PO", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: null, max_weight_kg: 44.99 },
      basis: "fixed", dose: { value: 5, value_max: 15, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: { max_single: 10, max_daily: 50, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Half tablets or 1 mg/mL suspension", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "FIRDAPSE (amifampridine) tablets — Catalyst Pharmaceuticals, label effective 2026-04-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f015fe60-3128-4a43-8c31-19fc6b5def3f"]],
  dose: { tagline: "Tablet that improves muscle strength in Lambert–Eaton myasthenic syndrome.",
    adult: [{ ind: "Lambert–Eaton myasthenic syndrome", text: "15–30 mg/day in 3–5 divided doses; increase by 5 mg/day every 3–4 days; maximum 20 mg per dose, 100 mg/day. Kidney or liver impairment, NAT2 poor metabolisers: start at the lowest dose.", calc: ["lems_adult"] }],
    child: [{ ind: "6 years and older, 45 kg or more", text: "As adults.", calc: ["lems_child45"] }, { ind: "6 years and older, under 45 kg", text: "5–15 mg/day in divided doses; increase by 2.5 mg/day every 3–4 days; maximum 10 mg per dose, 50 mg/day.", calc: ["lems_child"] }] }
});

FDB_M("amifostine", {
  inn: "Amifostine", atc: "V03AF05", cls: "Cytoprotective aminothiol",
  linked: [],
  forms: ["Powder for infusion 500 mg vial [FDA]."],
  moa: "Prodrug dephosphorylated in normal tissues to a free thiol that scavenges reactive species from cisplatin and radiation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Distribution half-life under 1 minute; elimination half-life about 8 minutes [FDA]."],
  ind: { adult: ["Reduce cumulative kidney toxicity of repeated cisplatin in advanced ovarian cancer [FDA].", "Reduce moderate–severe xerostomia from post-operative head and neck radiation including much of the parotids [FDA].", "Avoid where chemotherapy can cure or with definitive radiotherapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Cisplatin nephroprotection", "910 mg/m² once daily as a 15-minute IV infusion, starting 30 minutes before chemotherapy [FDA]."], ["Radiation xerostomia", "200 mg/m² once daily as a 3-minute IV infusion, 15–30 minutes before each radiation fraction [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "mg/m² — needs height and weight." },
  adj: { other: "Hydrate first; stop antihypertensives 24 h before if possible; do not give to hypotensive or dehydrated patients; antiemetic premedication at the 910 mg/m² dose [FDA]." },
  tox: { human: "Maximum single dose studied 1,300 mg/m²; higher doses caused anxiety and reversible urinary retention; hypotension is most likely [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Normal saline infusion and supportive care [FDA]." },
  contra: ["Hypersensitivity to aminothiol compounds [FDA]."],
  ae: { common: ["Hypotension, nausea, vomiting [FDA]."], serious: ["Severe hypotension and cardiovascular events; severe cutaneous reactions (SJS/TEN); hypocalcaemia [FDA]"] },
  monitor: ["Blood pressure every 5 minutes during the infusion; interrupt for a fall in systolic pressure [FDA].", "Skin before, during and weeks after treatment [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "amifostine", indication_id: "cisplatin", label: "Cisplatin nephroprotection", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_m2", dose: { value: 910, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", infusion: { duration_h: 0.25 },
      formulations: [{ form: "inj", strength: 500, unit: "mg/vial" }], rounding: "Exact mg from reconstituted vials [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "amifostine", indication_id: "xerostomia", label: "Radiation xerostomia", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_m2", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", infusion: { duration_h: 0.05 },
      formulations: [{ form: "inj", strength: 500, unit: "mg/vial" }], rounding: "Exact mg from reconstituted vials [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ETHYOL (amifostine) for injection — Legacy Pharma, label effective 2026-03-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a17563f2-d231-4385-bc94-0217be78b89d"]],
  dose: { tagline: "Infusion given before cisplatin or head and neck radiation to protect kidneys and salivary glands.",
    adult: [{ ind: "Cisplatin kidney protection", text: "910 mg/m² IV over 15 minutes, starting 30 minutes before chemotherapy. Hydrate first; monitor BP every 5 minutes.", calc: ["cisplatin"] }, { ind: "Radiation xerostomia", text: "200 mg/m² IV over 3 minutes, 15–30 minutes before each radiation fraction.", calc: ["xerostomia"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* Brands for batch A-2 — rebuilt 24 Nov 2026 with the fixed _work/tools/fdb-brands.js (one product object at a time; MedEx "manufactured by"; whole-word generic match). */
(function () {
  const B = {"abemaciclib":{"BT":"Bhutan supplies by generic name.","IN":[["Ramiven","Eli Lilly And Company","Ramiven 150Mg Strip Of 7 Tablets (Pack Of 2)"]],"BD":[["Abeclib","Eskayef Pharmaceuticals Ltd","200 mg"],["Abezino","Healthcare Pharmaceuticals Ltd","150 mg"],["Abeza","Beacon Pharmaceuticals PLC","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/ramiven-150mg-strip-of-7-tablets-3995137","https://medex.com.bd/brands/32452/abeclib-200-mg-tablet","https://medex.com.bd/brands/37280/abezino-150-mg-tablet","https://medex.com.bd/brands/38906/abeza-150-mg-tablet"]},"abiraterone":{"BT":"Bhutan supplies by generic name.","IN":[["Zelgor","Ranbaxy Laboratories (sun Pharma)","Zelgor 500Mg Bottle Of 60 Tablets"],["Xbira","Cipla Limited","Xbira 250Mg Bottle Of 120 Tablets"],["Abura","Msn Laboratories","Abura 1000Mg Strip Of 14 Tablets"]],"BD":[["Zytix","Beacon Pharmaceuticals PLC","250 mg"],["Zytiga","UniMed UniHealth Pharmaceuticals Ltd","250 mg"],["Abiret","Drug International Ltd","250 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zelgor-500-mg-tablet-60-201922","https://pharmeasy.in/online-medicine-order/xbira-250mg-bottle-of-120-tablets-178748","https://pharmeasy.in/online-medicine-order/abura-1000mg-strip-of-14-tablets-4821608","https://medex.com.bd/brands/17270/zytix-250-mg-tablet","https://medex.com.bd/brands/28309/zytiga-250-mg-tablet","https://medex.com.bd/brands/30393/abiret-250-mg-tablet"]},"acamprosate":{"BT":"Bhutan supplies by generic name.","IN":[["Acamprol","Sun Pharma","Acamprol 333Mg Strip Of 6 Tablets"],["Acamptas","Intas Pharmaceuticals Ltd","Acamptas 333Mg Strip Of 10 Tablets"],["Acamstain","Icon Lifesciences","Acamstain Strip Of 6 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/acamprol-333mg-tablet-32699","https://pharmeasy.in/online-medicine-order/acamptas-333mg-strip-of-10-tablets-4488915","https://pharmeasy.in/online-medicine-order/acamstain-tablet-6-no-s-4468216"]},"acarbose":{"BT":"Bhutan supplies by generic name.","IN":[["Acarboz","Knoll Healthcare Pvt Ltd","Acarboz 50Mg Strip Of 10 Tablets"]],"BD":[["Acaril","The White Horse Pharmaceuticals Ltd","50 mg"],["Sugatrol","Pacific Pharmaceuticals Ltd","100 mg"],["Gluco-A","ACME Laboratories Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/acarboz-50mg-tablet-15944","https://medex.com.bd/brands/222/acaril-50-mg-tablet","https://medex.com.bd/brands/223/sugatrol-100-mg-tablet","https://medex.com.bd/brands/17353/gluco-a-50-mg-tablet"]},"abrocitinib":{"BT":"Bhutan supplies by generic name.","IN":[["Cibinqo","Pfizer Limited","Cibinqo 100Mg Strip Of 7 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/cibinqo-100mg-strip-of-7-tablets-4743597"]},"acalabrutinib":{"BT":"Bhutan supplies by generic name.","IN":[["Betatinib","Adley Formulation","Betatinib 100Mg Bottle Of 30 Capsules"],["Acabrunat","Natco Pharma Ltd","Acabrunat 100Mg Bottle Of 30 Capsules"],["Acalaside","Lucien Life Sciences","Acalaside 100Mg Bottle Of 30 Capsules"]],"BD":[["Calcent","Incepta Pharmaceuticals Ltd","100 mg"],["Acaluxen","Everest Pharmaceuticals Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/betatinib-100mg-bottle-of-30-capsules-4798245","https://pharmeasy.in/online-medicine-order/acabrunat-tablet-30-no-s-4116349","https://pharmeasy.in/online-medicine-order/acalaside-100mg-bottle-of-30-capsules-4798230","https://medex.com.bd/brands/32401/calcent-100-mg-capsule","https://medex.com.bd/brands/38108/acaluxen-100-mg-capsule"]},"acetic-acid":{"BT":"Bhutan supplies by generic name.","IN":[["Otocil","Entod Pharmaceuticals Pvt Ltd","Otocil Bottle Of 10Ml Ear Drops"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/otocil-bottle-of-10ml-ear-drops-2931588"]},"acitretin":{"BT":"Bhutan supplies by generic name.","IN":[["Acrotac","Ranbaxy Laboratories (sun Pharma)","Acrotac 25Mg Strip Of 10 Capsules"],["Actoid","Intas Pharmaceuticals Ltd","Actoid 25Mg Strip Of 10 Capsules"],["Aceret","Eris Life Sciences Pvt Ltd","Aceret 25Mg Strip Of 10 Capsules"]],"BD":[["Soritec","Advanced Chemical Industries PLC","10 mg"],["Soricap","UniMed UniHealth Pharmaceuticals Ltd","10 mg"],["Soritin","Opsonin Pharma Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/acrotac-25mg-strip-of-10-capsules-32936","https://pharmeasy.in/online-medicine-order/actoid-25mg-strip-of-10-capsules-191226","https://pharmeasy.in/online-medicine-order/aceret-25mg-capsule-32760","https://medex.com.bd/brands/229/soritec-10-mg-capsule","https://medex.com.bd/brands/17407/soricap-10-mg-capsule","https://medex.com.bd/brands/34021/soritin-25-mg-capsule"]},"adenosine":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Adecard","Popular Pharmaceuticals PLC","6 mg/2 ml"]],"src":["https://medex.com.bd/brands/240/adecard-6-mg-injection"]},"adalimumab":{"BT":"Bhutan supplies by generic name.","IN":[["Exemptia","Zydus Lifesciences Limited","Exemptia 40Mg Pre Filled Syringe Of 0.8Ml Injection"],["Adfrar","Torrent Pharmaceuticals Ltd","Adfrar 40Mg Pre Filled Syringe Of 0.8Ml Injection"],["Adlumab","Rpg Life Sciences Ltd","Adlumab 40Mg Pre Filled Syringe Of 0.8Ml Injection"]],"BD":[["Advixa","Incepta Pharmaceuticals Ltd","40 mg/0.8 ml"],["Adalimab","Healthcare Pharmaceuticals Ltd","40 mg/0.8 ml"],["Hyrimoz","Nevian Lifescience PLC","40 mg/0.8 ml"]],"src":["https://pharmeasy.in/online-medicine-order/exemptia-40mg-prefilled-syringe-injection-0-8ml-173472","https://pharmeasy.in/online-medicine-order/adfrar-40-mg-prefilled-syringe-1-203811","https://pharmeasy.in/online-medicine-order/adlumab-40mg-pre-filled-syringe-injection-0-8ml-232491","https://medex.com.bd/brands/17307/advixa-40-mg-sc-injection","https://medex.com.bd/brands/29134/adalimab-40-mg-sc-injection","https://medex.com.bd/brands/35458/hyrimoz-40-mg-sc-injection"]},"adapalene":{"BT":"Bhutan supplies by generic name.","IN":[["Adaferin","Galderma India Pvt Ltd","Adaferin 0.1% Tube Of 15Gm Gel"],["Derpalin","Leeford Healthcare Ltd","Derpalin Tube Of 15Gm Gel"],["Deriva","Glenmark Pharmaceuticals","Deriva Ms Tube Of 15Gm Gel"]],"BD":[["Adgar","Advanced Chemical Industries PLC","0.3%"],["Aclene","Drug International Ltd","0.1%"],["Fona","Square Pharmaceuticals PLC","0.3%"]],"src":["https://pharmeasy.in/online-medicine-order/adaferin-0-1-gel-15gm-33042","https://pharmeasy.in/online-medicine-order/derpalin-tube-of-15gm-gel-3634715","https://pharmeasy.in/online-medicine-order/deriva-ms-tube-of-15gm-gel-11676","https://medex.com.bd/brands/30525/adgar-03-gel","https://medex.com.bd/brands/17440/aclene-plus-01-25-gel","https://medex.com.bd/brands/12793/fona-plus-01-25-gel"]},"afatinib":{"BT":"Bhutan supplies by generic name.","IN":[["Afanat","Natco Pharma Ltd","Afanat 40Mg Bottle Of 28 Tablets"],["Afatin","Bdr Pharmaceuticals Internationals Pvt Ltd","Afatin 20Mg Bottle Of 28 Tablets"]],"BD":[["Anib","Drug International Ltd","40 mg"],["Atanib","Aristopharma Ltd","40 mg"],["Afatin","Beacon Pharmaceuticals PLC","40 mg"]],"src":["https://pharmeasy.in/online-medicine-order/afanat-40mg-bottle-of-28-tablets-3046427","https://pharmeasy.in/online-medicine-order/afatin-20-mg-tab-28s-4133243","https://medex.com.bd/brands/30465/anib-40-mg-tablet","https://medex.com.bd/brands/31294/atanib-40-mg-tablet","https://medex.com.bd/brands/31295/afatin-40-mg-tablet"]},"albendazole":{"BT":"Bhutan supplies by generic name.","IN":[["Albetrue","Avighna Medicare Pvt Ltd","Albetrue 200Mg Bottle Of 10Ml Suspension"],["Zentel","Glaxosmithkline","Zentel Bottle Of 10Ml Suspension"],["Abd","Intas Pharmaceuticals Ltd Gx","Abd Bottle Of 10Ml Suspension"]],"BD":[["Vermikil","NIPRO JMI Pharma Ltd","400 mg"],["R-Zol","Reman Drug Laboratories Ltd","400 mg"],["Mebel DS","Medicon Pharmaceuticals Ltd","400 mg"]],"src":["https://pharmeasy.in/online-medicine-order/albetrue-200mg-bottle-of-10ml-suspension-3624865","https://pharmeasy.in/online-medicine-order/zentel-suspension-10ml-11441","https://pharmeasy.in/online-medicine-order/abd-susp-32647","https://medex.com.bd/brands/341/vermikil-400-mg-chewable-tablet","https://medex.com.bd/brands/332/r-zol-400-mg-chewable-tablet","https://medex.com.bd/brands/325/mebel-ds-400-mg-chewable-tablet"]},"aflibercept":{"BT":"Bhutan supplies by generic name.","IN":[["Eylea","Bayer Pharmaceuticals Pvt Ltd","Eylea 40Mg Vial Of 1Ml Solution For Injection"]],"BD":[["Zaltrap","Synovia Pharma PLC","100 mg/4 ml"],["Agafi","Incepta Pharmaceuticals Ltd","2 mg/0.05 ml"]],"src":["https://pharmeasy.in/online-medicine-order/eylea-40-mg-injection-1-ml-3045101","https://medex.com.bd/brands/17242/zaltrap-100-mg-iv-infusion","https://medex.com.bd/brands/39395/agafi-2-mg-injection"]},"alcaftadine":{"BT":"Bhutan supplies by generic name.","IN":[["Cafta","Sun Pharma","Cafta Bottle Of 5Ml Eye Drops"],["Alcarex","Ajanta Pharma Limited","Alcarex Bottle Of 5Ml Eye Drops"]],"BD":[["Alcadin","Popular Pharmaceuticals PLC","0.25%"],["Alcafta","Incepta Pharmaceuticals Ltd","0.25%"],["Caftadin","Aristopharma Ltd","0.25%"]],"src":["https://pharmeasy.in/online-medicine-order/cafta-eye-drops-5ml-235119","https://pharmeasy.in/online-medicine-order/alcarex-eye-drops-5ml-1603","https://medex.com.bd/brands/347/alcadin-025-eye-drop","https://medex.com.bd/brands/348/alcafta-025-eye-drop","https://medex.com.bd/brands/349/caftadin-025-eye-drop"]},"alfuzosin":{"BT":"Bhutan supplies by generic name.","IN":[["Alfufast","Leeford Healthcare Ltd","Alfufast 10Mg Strip Of 10 Tablets"],["Alfugress","La Renon Healthcare Pvt Ltd","Alfugress 10Mg Strip Of 10 Tablets"],["Velfu","Intas Pharmaceuticals Ltd","Velfu 10Mg Strip Of 7 Tablets"]],"BD":[["Alfumax ER","UniMed UniHealth Pharmaceuticals Ltd","10 mg"],["Zatral","Eskayef Pharmaceuticals Ltd","10 mg"],["Alfasin XR","Incepta Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/alfufast-10mg-strip-of-10-tablets-4137451","https://pharmeasy.in/online-medicine-order/alfugress-10mg-tab-10-s-16142","https://pharmeasy.in/online-medicine-order/velfu-10mg-strip-of-7-tablets-14262","https://medex.com.bd/brands/427/alfumax-er-10-mg-xr-tablet","https://medex.com.bd/brands/431/zatral-10-mg-xr-tablet","https://medex.com.bd/brands/15573/alfasin-xr-10-mg-xr-tablet"]},"allopurinol":{"BT":"Bhutan supplies by generic name.","IN":[["Zyloric","Glaxosmithkline","Zyloric 100Mg Strip Of 10 Tablets"],["Zyrik","Cipla Gx","Zyrik 100Mg Strip Of 10 Tablets"],["Zyle","Leeford Healthcare Ltd","Zyle 100Mg Strip Of 10 Tablets"]],"BD":[["Aluric","Sonear Laboratories Ltd","100 mg"],["Duric","Opsonin Pharma Ltd","100 mg"],["Esloric","Square Pharmaceuticals PLC","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zyloric-100mg-strip-of-10-tablets-11459","https://pharmeasy.in/online-medicine-order/zyrik-100mg-strip-of-10-tablets-6590","https://pharmeasy.in/online-medicine-order/zyle-100mg-tablet-119851","https://medex.com.bd/brands/182/aluric-100-mg-tablet","https://medex.com.bd/brands/184/duric-100-mg-tablet","https://medex.com.bd/brands/186/esloric-100-mg-tablet"]},"aliskiren":{"BT":"Bhutan supplies by generic name.","IN":[["Rasilez","Novartis India Ltd","Rasilez 150Mg Strip Of 7 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/rasilez-150mg-tab-70678"]},"almotriptan":{"BT":"Bhutan supplies by generic name.","IN":[["Almotan","Msn Laboratories","Almotan 6.25Mg Strip Of 4 Tablets"]],"BD":[["Almitan","Opsonin Pharma Ltd","6.25 mg"],["Altrip","NIPRO JMI Pharma Ltd","6.25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/almotan-6-25mg-strip-of-4-tablets-115181","https://medex.com.bd/brands/445/almitan-625-mg-tablet","https://medex.com.bd/brands/446/altrip-625-mg-tablet"]},"alogliptin":{"BT":"Bhutan supplies by generic name.","IN":[["Aloja","Indoco Remedies Ltd","Aloja 25Mg Strip Of 10 Tablets"]],"BD":[["Aloglip","Navana Pharmaceuticals Ltd","25 mg"],["Aglip","Eskayef Pharmaceuticals Ltd","12.5 mg"],["Alodia","ACME Laboratories Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/aloja-25mg-strip-of-10-tablets-234245","https://medex.com.bd/brands/30977/aloglip-25-mg-tablet","https://medex.com.bd/brands/30988/aglip-125-mg-tablet","https://medex.com.bd/brands/32414/alodia-25-mg-tablet"]},"alectinib":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Alecensa","Roche Bangladesh Ltd","150 mg"],["Alecnib","Everest Pharmaceuticals Ltd","150 mg"]],"src":["https://medex.com.bd/brands/27606/alecensa-150-mg-capsule","https://medex.com.bd/brands/34677/alecnib-150-mg-capsule"]},"alemtuzumab":{"BT":"Bhutan supplies by generic name.","IN":[["Lemtrada","Sanofi","Lemtrada 12Mg Vial Of 1.2Ml Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/lemtrada-12mg-vial-of-1-2ml-injection-3441464"]},"alpelisib":{"BT":"Bhutan supplies by generic name.","IN":[["Pivikto","Novartis Healthcare Pvt Ltd","Pivikto 150Mg Strip Of 28 Tablets"]],"BD":[["Alpesib","Everest Pharmaceuticals Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/pivikto-150mg-strip-of-28-tablets-4005294","https://medex.com.bd/brands/38123/alpesib-150-mg-tablet"]},"alprazolam":{"BT":"Bhutan supplies by generic name.","IN":[["Anxit","Micro Labs","Anxit 0.25Mg Strip Of 10 Tablets"]],"BD":[["Zolax","Beximco Pharmaceuticals PLC","0.25 mg"],["Zolium XR","Incepta Pharmaceuticals Ltd","2 mg"],["Xolam XR","Aristopharma Ltd","1 mg"]],"src":["https://pharmeasy.in/online-medicine-order/anxit-0-25mg-strip-of-10-tablets-35099","https://medex.com.bd/brands/216/zolax-025-mg-tablet","https://medex.com.bd/brands/31014/zolium-xr-2-mg-xr-tablet","https://medex.com.bd/brands/30536/xolam-xr-1-mg-xr-tablet"]},"alteplase":{"BT":"Bhutan supplies by generic name.","IN":[["Actilyse","Boehringer Ingelheim","Actilyse 20Mg Injection 20Ml"]],"BD":[["Actilyse","Radiant Pharmaceuticals Ltd","50 mg/50 ml"]],"src":["https://pharmeasy.in/online-medicine-order/actilyse-20mg-inj-20ml-30303","https://medex.com.bd/brands/27604/actilyse-50-mg-iv-infusion"]},"amantadine":{"BT":"Bhutan supplies by generic name.","IN":[["Amantrel","Cipla Limited","Amantrel 100Mg Strip Of 15 Tablets"],["Amantex","Intas Pharmaceuticals Ltd","Amantex Strip Of 15 Tablets"],["Am Dine","Johnlee Pharmaceuticals Pvt Ltd","Am Dine 100Mg Strip Of 10 Tablets"]],"BD":[["Amantril","Advanced Chemical Industries PLC","100 mg"],["Influ","Peoples Pharma Ltd","100 mg"],["Mantadin","Renata PLC","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/amantrel-tab-15-s-219495","https://pharmeasy.in/online-medicine-order/amantex-tablet-15-s-226384","https://pharmeasy.in/online-medicine-order/am-dine-100mg-strip-of-10-tablets-4486793","https://medex.com.bd/brands/526/amantril-100-mg-capsule","https://medex.com.bd/brands/527/influ-100-mg-capsule","https://medex.com.bd/brands/29989/mantadin-100-mg-capsule"]},"ambrisentan":{"BT":"Bhutan supplies by generic name.","IN":[["Pulmonext","Msn Laboratories","Pulmonext 5Mg Strip Of 10 Tablets"],["Ambristar","Steris Healthcare","Ambristar 5Mg Strip Of 10 Tablets"],["Endobloc","Cipla Limited","Endobloc 10Mg Strip Of 10 Tablets"]],"BD":[["Ambrisan","Square Pharmaceuticals PLC","5 mg"],["Embelin","Incepta Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/pulmonext-5mg-tablet-20385","https://pharmeasy.in/online-medicine-order/ambristar-5mg-strip-of-10-tablets-4486807","https://pharmeasy.in/online-medicine-order/endobloc-10mg-tablet-6722","https://medex.com.bd/brands/524/ambrisan-5-mg-tablet","https://medex.com.bd/brands/32402/embelin-5-mg-tablet"]}};
  Object.entries(B).forEach(([id, b]) => { if (window.FDB[id]) window.FDB[id].brands = b; });
})();
