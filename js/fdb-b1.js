/* Clinical Disease Guide — Drug monograph database, block B, batch 1 (24 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Research packs: _work/fdb/packs/<drug>.txt; extra product labels in _work/research/labels/. */

/* ================= Batch B-1 (fdb-b1.js) ================= */

/* ---------- BACLOFEN (FDA tablets ANDA214099 + oral solution NDA208193) ---------- */
FDB_M("baclofen", {
  inn: "Baclofen", atc: "M03BX01", cls: "Centrally acting skeletal muscle relaxant (GABA-B agonist)",
  linked: [["Spasticity from multiple sclerosis", "First-line oral antispastic [FDA]", ""], ["Spasticity from spinal cord injury or disease", "May be of value [FDA]", ""]],
  forms: ["Tablets 10 mg and 20 mg [FDA]; 5 mg also marketed [NEP].", "Oral solution 10 mg/5 mL; other concentrations exist — prescribe in mg AND mL [FDA].", "Intrathecal injection (separate product, specialist use) [NEP]."],
  moa: "GABA-ergic agonist; reduces mono- and polysynaptic spinal reflexes [FDA].",
  pk: ["Excreted mainly unchanged by the kidneys [FDA].", "Half-life about 5 h (oral solution) [FDA].", "Adds to the sedation of alcohol and other CNS depressants [FDA]."],
  ind: { adult: ["Spasticity from multiple sclerosis — flexor spasms, pain, clonus, rigidity [FDA].", "May help spasticity from spinal cord injury or disease [FDA].", "Not for muscle spasm from rheumatic disorders [FDA]."], paed: ["Safety and effectiveness below 12 years not established [FDA]."] },
  adult: [["Spasticity — titration", "5 mg three times daily for 3 days, then 10 mg, 15 mg, 20 mg three times daily, each for 3 days. Usual effective dose 40–80 mg/day. Maximum 80 mg/day (20 mg four times daily) [FDA]."], ["Stopping", "Reduce slowly — never stop abruptly [FDA]."]],
  paed: { tiers: ["12 years and over: adult titration [FDA].", "Under 12 years: not established in the label [FDA]."], transition: "Adult dosing from 12 years [FDA].", calcNote: "Fixed titration doses; maximum 80 mg/day." },
  adj: { renal: "Excreted unchanged by the kidneys — use with caution; dose reduction may be needed [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Animal data suggest possible fetal harm; taper and stop before delivery to avoid neonatal withdrawal [FDA].", other: "Stroke patients tolerate it poorly and benefit little. May worsen psychosis, confusion, autonomic dysreflexia and epilepsy [FDA]." },
  tox: { human: "Overdose: drowsiness, dizziness, accommodation disorders, respiratory depression, seizures, hypotonia, coma [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Gastric decontamination, airway and breathing support [FDA]." },
  contra: ["Hypersensitivity to baclofen [FDA]."],
  ae: { common: ["Transient drowsiness (10–63%), dizziness, weakness, fatigue, confusion, headache, insomnia [FDA]."], serious: ["Withdrawal after abrupt stop: hallucinations, seizures, high fever, rebound spasticity, rhabdomyolysis, death [FDA]", "Neonatal withdrawal [FDA]"] },
  monitor: ["Response and sedation during titration [FDA].", "Kidney function [FDA]."],
  local: { neml: "Baclofen 10 mg tablet is on the Bhutan NEML 2025 [BT-NEML].", strengths: "10 mg tablet.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "baclofen", indication_id: "start", label: "Start — 5 mg three times daily (days 1–3)", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 20, max_daily: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }, { form: "soln", strength: 10, unit: "mg/5mL" }], rounding: "Half tablets", renal: [], renal_note: "Excreted unchanged by the kidneys — use with caution; dose reduction may be needed.", flags: [], sources: ["FDA"] },
    { drug: "baclofen", indication_id: "max", label: "Maximum — 20 mg four times daily (80 mg/day)", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 20, max_daily: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }, { form: "soln", strength: 10, unit: "mg/5mL" }], rounding: "Whole tablets", renal: [], renal_note: "Excreted unchanged by the kidneys — use with caution; dose reduction may be needed.", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Baclofen tablets USP — Medcore (ANDA214099), label effective 2026-04-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=13eca70c-3cc8-4317-83cf-ade3327e48c0"], ["FDA", "Baclofen oral solution 10 mg/5 mL — Acella (NDA208193), label effective 2026-10-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=231ef477-822c-46fe-9bf3-d55cdf9bd4c2"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Oral muscle relaxant for spasticity from multiple sclerosis or spinal cord disease.",
    cautionTitle: "Never stop suddenly",
    caution: "Abrupt discontinuation of baclofen has resulted in serious adverse reactions including death; therefore, reduce the dosage slowly when baclofen is discontinued. (FDA label, Warnings 5.1)",
    adult: [
      { ind: "Spasticity — build up every 3 days", text: "5 mg three times daily → 10 mg → 15 mg → 20 mg three times daily, each step for 3 days. Usual 40–80 mg a day. Maximum 80 mg a day (20 mg four times daily).", calc: ["start", "max"] },
      { ind: "Kidney impairment", text: "Use with caution; a lower dose may be needed." }
    ],
    child: [
      { ind: "12 years and over", text: "Adult titration.", calc: ["start"] },
      { ind: "Under 12 years", text: "Not established in the FDA label." }
    ] }
});

/* ---------- BALOXAVIR MARBOXIL (FDA XOFLUZA, NDA210854, eff. 2026-04-24) ---------- */
FDB_M("baloxavir-marboxil", {
  inn: "Baloxavir marboxil", atc: "J05AX25", cls: "Influenza cap-dependent endonuclease (PA) inhibitor",
  linked: [["Influenza — treatment within 48 h", "Single-dose antiviral [FDA]", ""], ["Influenza — post-exposure prophylaxis", "Single dose [FDA]", ""]],
  forms: ["Tablets 40 mg and 80 mg [FDA].", "Oral suspension: packets 30 mg and 40 mg; bottles 2 mg/mL [FDA]."],
  moa: "Prodrug of baloxavir, which blocks the influenza PA endonuclease needed for viral gene transcription [FDA].",
  pk: ["Half-life about 79 h — one dose is the whole course [FDA].", "With or without food, but not with dairy, calcium-fortified drinks, antacids, laxatives or supplements containing polyvalent cations (iron, zinc, selenium, calcium, magnesium) [FDA].", "Not removed by dialysis (protein-bound) [FDA]."],
  ind: { adult: ["Acute uncomplicated influenza within 48 h of symptoms, otherwise healthy or high-risk [FDA].", "Post-exposure prophylaxis [FDA]."], paed: ["Same, 5 years and over [FDA].", "Not for under 5 years — more treatment-emergent resistance [FDA]."] },
  adult: [["Treatment or post-exposure prophylaxis", "One single dose as soon as possible (within 48 h): 20 to under 80 kg — 40 mg; 80 kg and over — 80 mg [FDA]."]],
  paed: { tiers: ["5 years and over: 20 to under 80 kg — 40 mg; 80 kg+ — 80 mg (tablets, packets or 2 mg/mL suspension) [FDA].", "15 to under 20 kg: 30 mg packet, or 2 mg/kg from the bottle [FDA].", "Under 15 kg: 2 mg/kg from the 2 mg/mL bottle [FDA].", "Under 5 years: not indicated [FDA]."], transition: "Weight bands, not age [FDA].", calcNote: "One dose only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "No adequate human data; no developmental effects in animals at about 5–7× human exposure. Influenza itself carries risk in pregnancy [FDA].", other: "Avoid live attenuated influenza vaccine within 2 weeks after baloxavir. [UNVERIFIED-KNOWLEDGE]" },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; no antidote; dialysis unlikely to help [FDA]." },
  contra: ["History of hypersensitivity to baloxavir marboxil or any ingredient (anaphylaxis, angioedema, urticaria, erythema multiforme reported) [FDA]."],
  ae: { common: ["Adults/adolescents: diarrhoea (3%), bronchitis, nausea, sinusitis, headache [FDA].", "Children 5–11: vomiting, diarrhoea (5%) [FDA]."], serious: ["Anaphylaxis, angioedema, erythema multiforme [FDA]"] },
  monitor: ["Watch for secondary bacterial infection [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "baloxavir-marboxil", indication_id: "band", label: "Single dose, 5 years+, 20 kg and over", route: "PO", population: { min_age_months: 60, max_age_months: null, min_weight_kg: 20, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 20, max_weight_kg: 80, text: "40 mg once (one dose only)", daily: 40 }, { min_weight_kg: 80, max_weight_kg: null, text: "80 mg once (one dose only)", daily: 80 }],
      caps: { max_single: 80, max_daily: 80, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Tablet or packet", renal: [], flags: [], sources: ["FDA"] },
    { drug: "baloxavir-marboxil", indication_id: "small", label: "Single dose, 5 years+, under 20 kg — 2 mg/kg (2 mg/mL bottle)", route: "PO", population: { min_age_months: 60, max_age_months: null, min_weight_kg: null, max_weight_kg: 20 }, basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 40, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 2, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "XOFLUZA (baloxavir marboxil) tablets and for oral suspension — Genentech (NDA210854), label effective 2026-04-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b58b2899-4d22-41e1-8f0c-bdead8917694"]],
  dose: { tagline: "One-dose oral antiviral for influenza treatment or prevention after exposure.",
    adult: [{ ind: "Influenza treatment (within 48 h) or post-exposure prophylaxis", text: "One single dose: 20 to under 80 kg — 40 mg; 80 kg and over — 80 mg. Not with dairy, antacids or iron/calcium/zinc/magnesium supplements.", calc: ["band"] }],
    child: [
      { ind: "5 years and over, 20 kg and over", text: "Single dose: 40 mg (20 to under 80 kg) or 80 mg (80 kg+).", calc: ["band"] },
      { ind: "5 years and over, under 20 kg", text: "Single dose: 2 mg/kg from the 2 mg/mL bottle; or a 30 mg packet if 15 to under 20 kg.", calc: ["small"] },
      { ind: "Under 5 years", text: "Not indicated (more resistance)." }
    ] }
});

/* ---------- BALSALAZIDE (FDA label ANDA217592; original brand COLAZAL) ---------- */
FDB_M("balsalazide", {
  inn: "Balsalazide", atc: "A07EC04", cls: "Aminosalicylate (5-ASA prodrug)",
  linked: [["Ulcerative colitis, mild–moderate active", "Oral 5-ASA [FDA]", ""]],
  forms: ["Capsules 750 mg balsalazide disodium [FDA]."],
  moa: "Prodrug split by colonic bacteria to mesalamine (5-ASA), which acts locally on the colon lining [FDA].",
  pk: ["Delivered to the colon intact; plasma half-life cannot be estimated reliably [FDA]."],
  ind: { adult: ["Mildly to moderately active ulcerative colitis [FDA]."], paed: ["Same, 5 to 17 years (up to 8 weeks) [FDA]."] },
  adult: [["Active ulcerative colitis", "2.25 g (three 750 mg capsules) three times daily (6.75 g/day) for 8 weeks; some need up to 12 weeks [FDA]."]],
  paed: { tiers: ["5–17 years: 2.25 g three times daily, OR 750 mg three times daily, for up to 8 weeks [FDA]."], transition: "Same capsule doses [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Check kidney function before and during treatment; weigh risk in kidney impairment; stop if kidney function worsens [FDA].", hepatic: "Hepatic failure reported — weigh risks in liver impairment [FDA].", preg: "Mesalamine data have not shown a reliable link with birth defects [FDA].", other: "Elderly: more blood dyscrasias — monitor counts [FDA]." },
  tox: { human: "Salicylate-type toxicity: nausea, vomiting, abdominal pain, tachypnoea, tinnitus, confusion, seizures [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Treat as salicylate toxicity; no specific antidote [FDA]." },
  contra: ["Known or suspected hypersensitivity to salicylates, aminosalicylates, or any component or metabolite [FDA]."],
  ae: { common: ["Headache, abdominal pain, diarrhoea, nausea, vomiting [NEP]."], serious: ["Kidney impairment (nephritis) [FDA]", "Mesalamine acute intolerance syndrome [FDA]", "Myocarditis, pericarditis [FDA]", "Hepatic failure [FDA]", "Severe cutaneous reactions [FDA]"] },
  monitor: ["Kidney function at start and periodically [FDA].", "Blood counts in the elderly [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "balsalazide", indication_id: "uc", label: "Ulcerative colitis — 2.25 g three times daily", route: "PO", population: { min_age_months: 60, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2250, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2250, max_daily: 6750, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 750, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] },
    { drug: "balsalazide", indication_id: "uc_low", label: "Child 5–17 — lower option 750 mg three times daily", route: "PO", population: { min_age_months: 60, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 750, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 750, max_daily: 2250, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 750, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Balsalazide disodium capsules — Zydus (ANDA217592; same dosing as COLAZAL), label effective 2026-11-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0ed73067-e2ca-4184-a93a-5a2141bb4898"]],
  dose: { tagline: "Colon-targeted 5-ASA capsule for active ulcerative colitis.",
    adult: [{ ind: "Mild–moderate active ulcerative colitis", text: "2.25 g (three 750 mg capsules) three times daily for 8 weeks (up to 12). Check kidney function first.", calc: ["uc"] }],
    child: [{ ind: "5–17 years", text: "2.25 g three times daily, or 750 mg three times daily, for up to 8 weeks.", calc: ["uc", "uc_low"] }] }
});

/* ---------- BARICITINIB (FDA OLUMIANT, Lilly, NDA207924, eff. 2026-10-09) ---------- */
FDB_M("baricitinib", {
  inn: "Baricitinib", atc: "L04AF02", cls: "Janus kinase (JAK) inhibitor",
  linked: [["Rheumatoid arthritis, moderate–severe", "After inadequate response to a TNF blocker [FDA]", ""], ["COVID-19, hospitalised adults on oxygen or ventilation", "Immunomodulator [FDA]", ""], ["Severe alopecia areata", "12 years and over [FDA]", ""]],
  forms: ["Tablets 1, 2 and 4 mg [FDA]."],
  moa: "Inhibits JAK1 and JAK2, reducing cytokine signalling [FDA].",
  pk: ["Half-life about 12–16 h (RA, alopecia) [FDA].", "Mostly excreted by the kidneys — dose depends on eGFR [FDA].", "Strong OAT3 inhibitors (e.g. probenecid) raise levels [NEP]."],
  ind: { adult: ["Moderately to severely active RA after inadequate response to one or more TNF blockers [FDA].", "COVID-19 in hospitalised adults needing supplemental oxygen, non-invasive or invasive ventilation, or ECMO [FDA].", "Severe alopecia areata [FDA]."], paed: ["Severe alopecia areata, 12 years and over [FDA]."] },
  adult: [["Rheumatoid arthritis", "2 mg once daily, alone or with methotrexate/non-biologic DMARDs [FDA]."], ["COVID-19 (hospitalised)", "4 mg once daily for up to 14 days [FDA]."], ["Severe alopecia areata", "2 mg once daily; increase to 4 mg if response inadequate; consider 4 mg from the start with near-complete scalp hair loss; reduce to 2 mg once response is adequate [FDA]."]],
  paed: { tiers: ["Alopecia areata, 12 years and over: as adults [FDA]."], transition: "Adult dosing from 12 years [FDA].", calcNote: "Fixed doses; kidney bands by eGFR." },
  adj: { renal: "RA: eGFR 30–<60 → 1 mg daily; under 30 → not recommended. Alopecia: eGFR 30–<60 → 2 mg becomes 1 mg, 4 mg becomes 2 mg; under 30 → not recommended. COVID-19: eGFR 30–<60 → 2 mg; 15–<30 → 1 mg; under 15, dialysis or AKI → not recommended [FDA].", hepatic: "Not recommended in severe (Child-Pugh C); no change for mild or moderate. Interrupt if drug-induced liver injury suspected [FDA].", preg: "May cause fetal harm; do not breastfeed [FDA].", other: "Do not start or interrupt (RA/alopecia) if Hb under 8 g/dL, lymphocytes under 500/µL or neutrophils under 1,000/µL [FDA]." },
  tox: { human: "Single doses up to 40 mg and 20 mg daily for 10 days caused no dose-limiting toxicity [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor and treat adverse reactions [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Upper respiratory infections, nausea, herpes simplex, herpes zoster [NEP]."], serious: ["Serious infections including TB (boxed) [FDA]", "Mortality, malignancy, MACE, thrombosis (boxed) [FDA]", "GI perforation [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["TB test before and during (not for COVID-19) [FDA].", "Lymphocytes, neutrophils, haemoglobin, liver enzymes, lipids [FDA].", "Kidney function for dosing [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "baricitinib", indication_id: "ra", label: "Rheumatoid arthritis — 2 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 2, max_daily: 2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "eGFR under 30: not recommended." }], renal_note: "The label uses eGFR (mL/min/1.73 m²); the app's kidney estimate is used as a stand-in.", flags: [], sources: ["FDA"] },
    { drug: "baricitinib", indication_id: "covid", label: "COVID-19 (hospitalised) — 4 mg once daily up to 14 days", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 4, max_daily: 4, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 4, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", factor: 0.25, interval_h: 24 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", text: "eGFR under 15, dialysis or AKI: not recommended." }], renal_note: "The label uses eGFR (mL/min/1.73 m²); the app's kidney estimate is used as a stand-in.", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "OLUMIANT (baricitinib) tablets — Eli Lilly, label effective 2026-10-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=866e9f35-9035-4581-a4b1-75a621ab55cf"]],
  dose: { tagline: "Oral JAK inhibitor for rheumatoid arthritis, severe alopecia areata and hospitalised COVID-19.",
    boxedTitle: "Serious infections, mortality, malignancy, MACE and thrombosis",
    boxed: "Increased risk of serious bacterial, fungal, viral and opportunistic infections leading to hospitalization or death, including tuberculosis (TB). Interrupt treatment with OLUMIANT if serious infection occurs until the infection is controlled. OLUMIANT should not be given to patients with active TB. Test for latent TB before and during therapy, except for COVID-19; treat latent TB prior to use. Monitor all patients for active TB during treatment, even patients with initial negative, latent TB test. Higher rate of all-cause mortality, including sudden cardiovascular death with another Janus kinase (JAK) inhibitor vs. TNF blockers in rheumatoid arthritis (RA) patients. Malignancies have occurred in patients treated with OLUMIANT. Higher rate of lymphomas and lung cancers with another JAK inhibitor vs. TNF blockers in RA patients. Major adverse cardiovascular events (MACE) may occur in patients treated with OLUMIANT. Higher rate of MACE (defined as cardiovascular death, myocardial infarction, and stroke) with another JAK inhibitor vs. TNF blockers in RA patients. Thrombosis has occurred in patients treated with OLUMIANT. Higher incidence rate of venous thrombosis with OLUMIANT vs. TNF blockers. Increased incidence rate of pulmonary embolism, venous and arterial thrombosis with another JAK inhibitor vs. TNF blockers.",
    adult: [
      { ind: "Rheumatoid arthritis", text: "2 mg once daily. eGFR 30–<60: 1 mg. Under 30: not recommended.", calc: ["ra"] },
      { ind: "COVID-19 (hospitalised, on oxygen or ventilation)", text: "4 mg once daily for up to 14 days. eGFR 30–<60: 2 mg; 15–<30: 1 mg; under 15 or dialysis: not recommended.", calc: ["covid"] },
      { ind: "Severe alopecia areata", text: "2 mg once daily; raise to 4 mg if not enough (or start 4 mg with near-total scalp loss); go back to 2 mg once controlled." }
    ],
    child: [{ ind: "Severe alopecia areata, 12 years and over", text: "As adults: 2 mg once daily, up to 4 mg." }] }
});

/* ---------- BASILIXIMAB (FDA SIMULECT, Novartis, BLA103764, eff. 2026-10-26) ---------- */
FDB_M("basiliximab", {
  inn: "Basiliximab", atc: "L04AC02", cls: "IL-2 receptor (CD25) blocking monoclonal antibody — induction immunosuppressant",
  linked: [["Kidney transplantation — prevention of acute rejection", "Induction with ciclosporin and corticosteroids [FDA]", ""]],
  forms: ["Powder for injection 10 mg and 20 mg vials [FDA]."],
  moa: "Chimeric antibody that blocks the IL-2 receptor α-chain (CD25) on activated T cells [FDA].",
  pk: ["Terminal half-life about 7 days in adults; about 9.5 days in children 1–11 years [FDA]."],
  ind: { adult: ["Prophylaxis of acute rejection in kidney transplantation, with ciclosporin (modified) and corticosteroids [FDA]."], paed: ["Same, children (weight-based regimen) [FDA]."] },
  adult: [["Kidney transplant induction", "20 mg IV within 2 h before transplant surgery, then 20 mg IV 4 days after transplant. Bolus, or diluted to 50 mL and infused over 20–30 min [FDA]."]],
  paed: { tiers: ["Under 35 kg: 10 mg × 2 doses (before surgery and day 4) [FDA].", "35 kg and over: 20 mg × 2 doses [FDA]."], transition: "20 mg doses from 35 kg [FDA].", calcNote: "Two doses only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Withhold the second dose after severe hypersensitivity or graft loss. Re-exposure only with extreme caution [FDA]." },
  tox: { human: "Single doses up to 60 mg, or up to 120 mg over 3–5 days, gave no serious events [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Known hypersensitivity to basiliximab or any component [FDA]."],
  ae: { common: ["Adverse events similar to placebo in transplant trials (constipation, nausea, infections, oedema, hypertension) [NEP]."], serious: ["Severe hypersensitivity, including anaphylaxis [FDA]", "Infections and lymphoproliferative disorders with immunosuppression [FDA]"] },
  monitor: ["Hypersensitivity during and after infusion [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "basiliximab", indication_id: "adult", label: "Adult — 20 mg before surgery and on day 4", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 96, divided_doses: 1, caps: { max_single: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 20, unit: "mg/vial" }], rounding: "Whole vials", renal: [], flags: [], sources: ["FDA"] },
    { drug: "basiliximab", indication_id: "child", label: "Child — two doses by weight (before surgery and day 4)", route: "IV", population: { min_age_months: null, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 96, divided_doses: 1,
      bands: [{ min_weight_kg: 0, max_weight_kg: 35, text: "10 mg IV × 2 doses (within 2 h before surgery; day 4)", daily: 10 }, { min_weight_kg: 35, max_weight_kg: null, text: "20 mg IV × 2 doses (within 2 h before surgery; day 4)", daily: 20 }],
      caps: { max_single: 20, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Whole vials", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "SIMULECT (basiliximab) for injection — Novartis, label effective 2026-10-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1af01887-b69d-444b-91ed-ebfe12784440"]],
  dose: { tagline: "Two-dose antibody induction to prevent kidney transplant rejection.",
    boxedTitle: "Only for physicians experienced in transplant immunosuppression",
    boxed: "Only physicians experienced in immunosuppression therapy and management of organ transplantation patients should prescribe Simulect (basiliximab). The physician responsible for Simulect administration should have complete information requisite for the follow-up of the patient. Patients receiving the drug should be managed in facilities equipped and staffed with adequate laboratory and supportive medical resources.",
    adult: [{ ind: "Kidney transplant", text: "20 mg IV within 2 hours before surgery, and 20 mg IV on day 4 after transplant.", calc: ["adult"] }],
    child: [{ ind: "Kidney transplant", text: "Under 35 kg: 10 mg × 2. 35 kg and over: 20 mg × 2. Same timing as adults.", calc: ["child"] }] }
});

/* ---------- BAXDROSTAT (FDA BAXFENDY, AstraZeneca, NDA219878, eff. 2026-08-07) ---------- */
FDB_M("baxdrostat", {
  inn: "Baxdrostat", atc: "C02KN02", cls: "Aldosterone synthase inhibitor",
  linked: [["Hypertension not controlled on other drugs", "Add-on antihypertensive [FDA]", "htn-adult"]],
  forms: ["Tablets 1 mg and 2 mg [FDA]."],
  moa: "Inhibits aldosterone synthase (CYP11B2), lowering aldosterone production [NEP].",
  pk: ["Effective half-life about 26 h [FDA].", "Swallow whole; with or without food [FDA].", "Drugs that raise potassium add to hyperkalaemia risk [FDA]."],
  ind: { adult: ["Hypertension, with other antihypertensives, in adults not adequately controlled on other agents [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Hypertension (add-on)", "2 mg once daily. 1 mg once daily if at increased risk of hyperkalaemia or hyponatraemia [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Chronic kidney disease raises hyperkalaemia risk — monitor potassium more often [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "No human data; animal embryo-fetal toxicity only at >29× human exposure [FDA].", other: "Correct potassium and sodium before starting [FDA]." },
  tox: { human: "No toxicity at single doses up to 360 mg in healthy people [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; removal by haemodialysis not studied [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Hyperkalaemia, hyponatraemia [FDA]."], serious: ["Hyperkalaemia [FDA]", "Hyponatraemia [FDA]"] },
  monitor: ["Serum potassium and sodium before starting and periodically; more often if 65+, diabetic, CKD or on potassium-raising drugs [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "baxdrostat", indication_id: "htn", label: "Hypertension — 2 mg once daily (1 mg if high K⁺/low Na⁺ risk)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 2, max_daily: 2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2, unit: "mg/tab", whole: true }], rounding: "Whole tablets — do not cut", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "BAXFENDY (baxdrostat) tablets — AstraZeneca, label effective 2026-08-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b1fc1ee7-facc-4099-b3db-a4c1daeaa4be"]],
  dose: { tagline: "Once-daily add-on tablet for hard-to-control high blood pressure.",
    adult: [{ ind: "Hypertension, not controlled on other drugs", text: "2 mg once daily. 1 mg once daily if at higher risk of high potassium or low sodium. Check K⁺ and Na⁺ first.", calc: ["htn"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BAZEDOXIFENE (only as DUAVEE: conjugated estrogens 0.45 mg / bazedoxifene 20 mg; NDA022247) ---------- */
FDB_M("bazedoxifene", {
  inn: "Bazedoxifene", atc: "G03XC02", cls: "Estrogen agonist/antagonist (SERM); in the US only with conjugated estrogens",
  linked: [["Menopausal vasomotor symptoms (women with a uterus)", "With conjugated estrogens [FDA]", ""], ["Prevention of postmenopausal osteoporosis", "With conjugated estrogens [FDA]", ""]],
  forms: ["Tablet conjugated estrogens 0.45 mg / bazedoxifene 20 mg (DUAVEE) [FDA].", "Bazedoxifene 20 mg alone is marketed outside the US [NEP]."],
  moa: "Bazedoxifene blocks estrogen's effect on the endometrium, so conjugated estrogens can be used without a progestin [FDA].",
  pk: ["Bazedoxifene half-life about 30 h; 32→50 h in severe liver impairment [FDA].", "Take once daily, with or without food; swallow whole [FDA]."],
  ind: { adult: ["Women with a uterus: moderate–severe menopausal vasomotor symptoms; prevention of postmenopausal osteoporosis [FDA]."], paed: ["Not indicated [FDA]."] },
  adult: [["Vasomotor symptoms or osteoporosis prevention", "One tablet (0.45 mg/20 mg) once daily, for the shortest duration that meets treatment goals. Add calcium/vitamin D if intake is low [FDA]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Postmenopausal women only [FDA].", calcNote: "One tablet daily." },
  adj: { renal: "Not studied — not recommended in kidney impairment [FDA].", hepatic: "Half-life prolonged in severe liver impairment [FDA].", preg: "Contraindicated in pregnancy [FDA].", other: "Not recommended at 75 years and over (not studied) [FDA]. Do not add progestins, other estrogens or other SERMs [FDA]." },
  tox: { human: "Estrogen overdose: nausea, vomiting, breast tenderness, dizziness, abdominal pain, drowsiness; withdrawal bleeding [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic; no antidote [FDA]." },
  contra: ["Undiagnosed abnormal uterine bleeding [FDA].", "Breast cancer (known, suspected or past) or estrogen-dependent neoplasia [FDA].", "Active or past DVT/PE or arterial thromboembolism (stroke, MI) [FDA].", "Hypersensitivity to estrogens or bazedoxifene [FDA].", "Known liver impairment or disease; protein C, protein S or antithrombin deficiency or other thrombophilia; pregnancy [FDA]."],
  ae: { common: ["Muscle spasms, nausea, diarrhoea, dyspepsia, upper abdominal pain, oropharyngeal pain, dizziness, neck pain [FDA]."], serious: ["Venous thromboembolism, stroke [FDA]", "Endometrial, breast and ovarian cancer [FDA]", "Gallbladder disease [FDA]", "Probable dementia over 65 [FDA]"] },
  monitor: ["Abnormal genital bleeding — investigate [FDA].", "Thyroid function if on replacement [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "DUAVEE (conjugated estrogens/bazedoxifene) tablets — label effective 2026-07-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16705d8-4472-4f83-96ac-69fa2be066cb"]],
  dose: { tagline: "With conjugated estrogens, a once-daily tablet for menopausal hot flushes and bone protection.",
    boxedTitle: "Endometrial cancer, cardiovascular disorders and probable dementia",
    boxed: "Women taking DUAVEE should not take additional estrogens There is an increased risk of endometrial cancer in a woman with a uterus who uses unopposed estrogens. DUAVEE has been shown to reduce the risk of endometrial hyperplasia, which may be a precursor to endometrial cancer. Adequate diagnostic measures, including directed or random endometrial sampling when indicated, should be undertaken to rule out malignancy in postmenopausal women with undiagnosed persistent or recurring abnormal genital bleeding Estrogen therapy should not be used for the prevention of cardiovascular disease or dementia The Women's Health Initiative (WHI) estrogen-alone substudy reported increased risks of stroke and deep vein thrombosis (DVT) in postmenopausal women (50 to 79 years of age) during 7.1 years of treatment with daily oral conjugated estrogens (0.625 mg)-alone, relative to placebo The WHI Memory Study (WHIMS) estrogen-alone ancillary study of WHI reported an increased risk of probable dementia in postmenopausal women 65 years of age and older during 5.2 years of treatment with daily conjugated estrogens (0.625 mg)-alone, relative to placebo. It is unknown whether this finding applies to younger postmenopausal women Only daily oral 0.625 mg CE was studied in the estrogen-alone substudy of the WHI. Therefore, the relevance of the WHI findings regarding adverse cardiovascular events and dementia to lower CE doses, other routes of administration, or other estrogen-alone products is not known. Without such data, it is not possible to definitively exclude these risks or determine the extent of these risks for other products. Discuss with your patient the benefits and risks of estrogen-alone therapy, taking into account her individual risk profile. Estrogens should be prescribed at the lowest effective doses and for the shortest duration consistent with treatment goals and risks for the individual woman.",
    adult: [{ ind: "Women with a uterus: hot flushes, or osteoporosis prevention", text: "One tablet (conjugated estrogens 0.45 mg / bazedoxifene 20 mg) once daily, shortest time needed." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- BECAPLERMIN (FDA REGRANEX gel 0.01%, BLA103691, eff. 2026-05-08) ---------- */
FDB_M("becaplermin", {
  inn: "Becaplermin", atc: "D03AX06", cls: "Recombinant human platelet-derived growth factor (topical)",
  linked: [["Diabetic foot ulcer (neuropathic, into subcutaneous tissue or deeper)", "Adjunct to good ulcer care [FDA]", ""]],
  forms: ["Gel 0.01% (100 mcg/g), 15 g tube [FDA]."],
  moa: "Platelet-derived growth factor; promotes chemotaxis and proliferation of wound-repair cells and new granulation tissue [FDA].",
  pk: ["Minimal systemic absorption [NEP]."],
  ind: { adult: ["Lower-limb diabetic neuropathic ulcers reaching subcutaneous tissue or beyond with adequate blood supply, alongside debridement, off-loading and infection control [FDA].", "Not shown to work for pressure or venous ulcers [FDA]."], paed: ["Safety and effectiveness under 16 years not established [FDA]."] },
  adult: [["Diabetic foot ulcer", "Once daily until healed, a thin even layer (about 1/16 inch) over the ulcer. Length of gel from the 15 g tube: length × width ÷ 4 (cm), or length × width × 0.6 (inches). Cover with saline-moistened dressing; rinse off after about 12 h and re-dress [FDA]."], ["Reassess", "Recalculate the amount weekly or every 2 weeks as the ulcer shrinks [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Amount depends on ulcer size, not weight." },
  adj: { renal: "Not applicable (topical). [NEP]", hepatic: "Not applicable (topical). [NEP]", preg: "No data [FDA].", other: "Weigh benefits and risks in people with known cancer [FDA]." },
  tox: { human: "No data on overdose [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable. [NEP]" },
  contra: ["Known neoplasm at the application site [FDA]."],
  ae: { common: ["Application-site reactions (sensitisation to parabens or m-cresol) [FDA]."], serious: ["Malignancies distant from the application site reported [FDA]"] },
  monitor: ["Ulcer size weekly or fortnightly to recalculate the gel amount [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "REGRANEX (becaplermin) gel 0.01% — LRM Therapeutics, label effective 2026-05-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=377b3021-13d7-96d5-e063-6394a90a8ca3"]],
  dose: { tagline: "Growth-factor gel that helps deep diabetic foot ulcers heal, with good wound care.",
    adult: [{ ind: "Diabetic neuropathic foot ulcer", text: "Once daily, thin layer over the ulcer. Gel length (15 g tube) = ulcer length × width ÷ 4 in cm. Moist saline dressing; rinse after about 12 hours. Recalculate as the ulcer shrinks." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BECLOMETASONE (FDA QVAR REDIHALER, Teva, NDA207921, eff. 2025-09-30) ---------- */
FDB_M("beclometasone", {
  inn: "Beclometasone", atc: "R03BA01", cls: "Inhaled corticosteroid",
  linked: [["Asthma — maintenance (controller) therapy", "Inhaled corticosteroid [FDA]", ""]],
  forms: ["Breath-actuated inhalation aerosol 40 mcg and 80 mcg per actuation (QVAR RediHaler) [FDA].", "Other inhalers, nasal sprays, creams and rectal forms exist [NEP]."],
  moa: "Corticosteroid with anti-inflammatory action in the airways [FDA].",
  pk: ["Acts locally; small systemic exposure can still suppress the adrenal axis at high doses [FDA]."],
  ind: { adult: ["Maintenance treatment of asthma as prophylactic therapy [FDA].", "Not for acute bronchospasm [FDA]."], paed: ["4 years and over [FDA]."] },
  adult: [["Asthma, 12 years and over", "Not on an inhaled steroid: 40–80 mcg twice daily. Switching: 40, 80, 160 or 320 mcg twice daily by prior therapy. May increase after 2 weeks. Maximum 320 mcg twice daily [FDA]."]],
  paed: { tiers: ["4–11 years: 40 mcg twice daily; may increase to 80 mcg twice daily after 2 weeks [FDA].", "Under 4 years: not established [FDA]."], transition: "12-year dosing from 12 years [FDA].", calcNote: "Inhaled — no weight calculation." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "No adequate human data; inhaled steroids have not been linked to birth defects in registries [FDA].", other: "When moving from oral steroids, taper slowly — risk of adrenal insufficiency [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Chronic overdose may cause hypercorticism; reduce slowly [NEP]." },
  contra: ["Primary treatment of status asthmaticus or other acute asthma needing intensive measures [FDA].", "Hypersensitivity to beclometasone dipropionate or any ingredient [FDA]."],
  ae: { common: ["Oral candidiasis, upper respiratory infection, nasopharyngitis, allergic rhinitis, sore throat, sinusitis [FDA]."], serious: ["Adrenal suppression, hypercorticism [FDA]", "Reduced bone density; slower growth in children [FDA]", "Glaucoma, cataracts [FDA]", "Worse course of chickenpox or measles [FDA]"] },
  monitor: ["Growth in children [FDA].", "Mouth for thrush — rinse and spit after use [FDA]."],
  local: { neml: "Beclometasone dipropionate 50 mcg inhaler is on the Bhutan NEML 2025 (PHC level) [BT-NEML].", strengths: "50 mcg per puff inhaler.", stg: "Not mentioned by name in Bhutan STG 2024 [BT-STG]." },
  verify: [["Strength", "Bhutan inhaler 50 mcg/puff", "QVAR (extrafine HFA) 40/80 mcg", "⚠ DISCREPANCY", "Doses of QVAR are not interchangeable mcg-for-mcg with older beclometasone inhalers [UNVERIFIED-KNOWLEDGE] — follow the product leaflet of the inhaler in use."]],
  calc: [],
  sources: [["FDA", "QVAR REDIHALER (beclomethasone dipropionate) inhalation aerosol — Teva, label effective 2025-09-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cada897a-264e-450d-ae00-36e7fe747080"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Inhaled steroid for daily asthma control (not for attacks).",
    adult: [
      { ind: "Asthma, 12 years and over (QVAR)", text: "40–80 mcg twice daily if not already on an inhaled steroid; 40–320 mcg twice daily if switching. May increase after 2 weeks. Maximum 320 mcg twice daily. Rinse mouth after use; no spacer with the RediHaler." },
      { ind: "Bhutan inhaler (50 mcg/puff)", text: "Different product — follow its own leaflet for the number of puffs." }
    ],
    child: [
      { ind: "4–11 years (QVAR)", text: "40 mcg twice daily; may increase to 80 mcg twice daily after 2 weeks." },
      { ind: "Under 4 years", text: "Not established." }
    ] }
});

/* ---------- BEDAQUILINE (FDA SIRTURO, Janssen, NDA204384, eff. 2025-10-17) ---------- */
FDB_M("bedaquiline", {
  inn: "Bedaquiline", atc: "J04AK05", cls: "Diarylquinoline antimycobacterial",
  risk: "Standard — not on the ISMP high-alert list; QTc boxed warning [FDA]",
  linked: [["Drug-resistant tuberculosis (MDR/RR-TB)", "Core drug in combination regimens [FDA]", ""]],
  forms: ["Tablets 100 mg and 20 mg (20 mg scored; may be dispersed for children) [FDA]."],
  moa: "Inhibits mycobacterial ATP synthase [FDA].",
  pk: ["Take with food [FDA].", "Very long terminal half-life (about 5 months) [FDA].", "CYP3A4 substrate: avoid strong inducers (efavirenz, rifampicin, rifapentine, rifabutin); inhibitors raise exposure — monitor closely [FDA].", "Additive QT prolongation with clofazimine, fluoroquinolones, delamanid and others [FDA]."],
  ind: { adult: ["Pulmonary TB resistant to at least rifampicin and isoniazid, in combination with other drugs, by DOT [FDA].", "Not for latent, extrapulmonary or drug-sensitive TB [FDA]."], paed: ["2 years and over, at least 8 kg [FDA]."] },
  adult: [["MDR/RR pulmonary TB (FDA regimen)", "400 mg once daily for 2 weeks, then 200 mg three times a week (at least 48 h apart) for 22 weeks — 24 weeks in total, with food, by DOT, plus at least 3 other active drugs [FDA]."], ["Beyond 24 weeks", "May continue 200 mg three times a week if needed [FDA]."], ["WHO regimens", "WHO 2022 BPaLM and other WHO regimens use bedaquiline; some programmes use 200 mg daily for 8 weeks then 100 mg daily — follow the national MDR-TB guideline [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2 years+, by weight — weeks 1–2 once daily / weeks 3–24 three times a week: 8–<10 kg 80 / 40 mg; 10–<15 kg 120 / 60 mg; 15–<30 kg 200 / 100 mg; 30 kg+ 400 / 200 mg [FDA]."], transition: "Adult dose from 30 kg [FDA].", calcNote: "Two phases: daily loading (weeks 1–2), then three times weekly." },
  adj: { renal: "Mild or moderate: no adjustment. Severe or dialysis: use with caution and monitor for adverse reactions [FDA].", hepatic: "Mild or moderate (Child-Pugh A/B): no adjustment [FDA]. Severe: not studied. [NEP]", preg: "Published data insufficient to judge risk; active TB in pregnancy carries its own risks [FDA].", other: "Missed dose weeks 1–2: skip it. From week 3: take as soon as possible, keep weekly total [FDA]." },
  tox: { human: "No experience of acute overdose [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care with ECG (QTc) monitoring; dialysis unlikely to help [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, arthralgia, headache, haemoptysis, chest pain [FDA]."], serious: ["QTc prolongation (boxed) [FDA]", "Mortality imbalance seen in a trial [FDA]", "Hepatotoxicity [FDA]"] },
  monitor: ["ECG before starting, at 2 weeks, and during treatment [FDA].", "Electrolytes (K⁺, Ca²⁺, Mg²⁺) at baseline and during [FDA].", "Liver tests [FDA]."],
  local: { neml: "Bedaquiline 100 mg tablet is on the Bhutan NEML 2025 — for MDR-TB cases only [BT-NEML].", strengths: "100 mg tablet.", stg: "Not mentioned in Bhutan STG 2024; managed under the national TB programme [BT-STG]." },
  calc: [
    { drug: "bedaquiline", indication_id: "adult_load", label: "Adult — weeks 1–2: 400 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 400, max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "bedaquiline", indication_id: "adult_cont", label: "Adult — weeks 3–24: 200 mg three times a week", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 56, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "bedaquiline", indication_id: "child_load", label: "Child 2 y+ — weeks 1–2, once daily by weight", route: "PO", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 8, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1,
      bands: [{ min_weight_kg: 8, max_weight_kg: 10, text: "80 mg (4 × 20 mg) once daily", daily: 80 }, { min_weight_kg: 10, max_weight_kg: 15, text: "120 mg (6 × 20 mg) once daily", daily: 120 }, { min_weight_kg: 15, max_weight_kg: 30, text: "200 mg (2 × 100 mg or 10 × 20 mg) once daily", daily: 200 }, { min_weight_kg: 30, max_weight_kg: null, text: "400 mg (4 × 100 mg) once daily", daily: 400 }],
      caps: { max_single: 400, max_daily: 400, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Whole or half 20 mg tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "bedaquiline", indication_id: "child_cont", label: "Child 2 y+ — weeks 3–24, three times a week by weight", route: "PO", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 8, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 56, divided_doses: 1,
      bands: [{ min_weight_kg: 8, max_weight_kg: 10, text: "40 mg (2 × 20 mg) three times a week", daily: 40 }, { min_weight_kg: 10, max_weight_kg: 15, text: "60 mg (3 × 20 mg) three times a week", daily: 60 }, { min_weight_kg: 15, max_weight_kg: 30, text: "100 mg (1 × 100 mg or 5 × 20 mg) three times a week", daily: 100 }, { min_weight_kg: 30, max_weight_kg: null, text: "200 mg (2 × 100 mg) three times a week", daily: 200 }],
      caps: { max_single: 200, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Whole or half 20 mg tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "SIRTURO (bedaquiline) tablets — Janssen, label effective 2025-10-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1534c9ae-4948-4cf4-9f66-222a99db6d0e"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Key oral drug for multidrug-resistant tuberculosis, given by DOT with other TB drugs.",
    boxedTitle: "QTc prolongation",
    boxed: "QTc prolongation can occur with SIRTURO. Use with drugs that prolong the QTc interval may cause additive QTc prolongation. Monitor ECGs. Discontinue SIRTURO if significant ventricular arrhythmia or QTc interval greater than 500 ms develops.",
    adult: [
      { ind: "MDR/RR pulmonary TB", text: "400 mg once daily for 2 weeks, then 200 mg three times a week (48 h apart) for 22 weeks. With food, by DOT, with at least 3 other active drugs.", calc: ["adult_load", "adult_cont"] },
      { ind: "National programme regimens", text: "WHO short regimens (e.g. BPaLM) may use a different schedule — follow the Bhutan MDR-TB guideline." }
    ],
    child: [{ ind: "2 years and over, 8 kg and over", text: "Weeks 1–2 daily / weeks 3–24 three times a week: 8–<10 kg 80/40 mg; 10–<15 kg 120/60 mg; 15–<30 kg 200/100 mg; 30 kg+ 400/200 mg.", calc: ["child_load", "child_cont"] }] }
});

/* ---------- BELANTAMAB MAFODOTIN (FDA BLENREP, GSK, BLA761440, eff. 2025-10-23) ---------- */
FDB_M("belantamab-mafodotin", {
  inn: "Belantamab mafodotin", atc: "L01FX15", cls: "BCMA-directed antibody–drug conjugate (microtubule inhibitor payload)",
  linked: [["Multiple myeloma, relapsed or refractory (after 2+ lines)", "With bortezomib and dexamethasone [FDA]", ""]],
  forms: ["Powder for injection 70 mg vial [FDA]."],
  moa: "Binds BCMA on myeloma cells and delivers the microtubule inhibitor MMAF [FDA].",
  pk: ["Infused every 3 weeks [FDA]."],
  ind: { adult: ["Relapsed or refractory multiple myeloma after at least two prior lines including a proteasome inhibitor and an immunomodulatory agent, with bortezomib and dexamethasone [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Multiple myeloma", "2.5 mg/kg IV over 30 min every 3 weeks for 8 cycles with bortezomib + dexamethasone, then 2.5 mg/kg every 3 weeks alone [FDA]."], ["Dose reductions", "Level 1: 1.9 mg/kg every 3 weeks. Level 2 (eye toxicity): 1.9 mg/kg every 8 weeks [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/kg actual weight." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm; effective contraception [FDA].", other: "Preservative-free artificial tears at least 4 times daily; no contact lenses during treatment [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Ocular toxicity (92%): reduced visual acuity, keratopathy, blurred vision, dry eye, photophobia [FDA]."], serious: ["Severe visual impairment, corneal ulcer (boxed) [FDA]", "Thrombocytopenia [FDA]"] },
  monitor: ["Eye examination (slit lamp, visual acuity) at baseline, before every dose and for new symptoms [FDA].", "Blood counts [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "belantamab-mafodotin", indication_id: "mm", label: "Myeloma — 2.5 mg/kg IV every 3 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 70, unit: "mg/vial" }], infusion: { duration_h: 0.5 }, rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "BLENREP (belantamab mafodotin-blmf) for injection — GSK, label effective 2025-10-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=aef7c34c-fef8-407c-99c0-a68aded53c60"]],
  dose: { tagline: "Antibody–drug conjugate for relapsed multiple myeloma; needs eye checks before every dose.",
    boxedTitle: "Ocular toxicity",
    boxed: "BLENREP causes changes in the corneal epithelium resulting in changes in vision, including severe visual impairment, and symptoms such as blurred vision and dry eyes. In the clinical study, corneal ulcers, including cases with infection, also occurred. Conduct ophthalmic exams at baseline, before each dose, promptly for new or worsening symptoms, and as clinically indicated. In the clinical study, 83% of patients required a dosage modification due to ocular toxicity. Withhold BLENREP until improvement and resume or permanently discontinue, based on severity. Because of the risk of ocular toxicity, BLENREP is available only through a restricted program called the BLENREP Risk Evaluation and Mitigation Strategy (REMS).",
    adult: [{ ind: "Relapsed/refractory multiple myeloma", text: "2.5 mg/kg IV over 30 minutes every 3 weeks, with bortezomib and dexamethasone for 8 cycles, then alone. Reduce to 1.9 mg/kg (every 3 or every 8 weeks) for toxicity.", calc: ["mm"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BELATACEPT (FDA NULOJIX, Squibb, BLA125288, eff. 2021-07-28) ---------- */
FDB_M("belatacept", {
  inn: "Belatacept", atc: "L04AA28", cls: "Selective T-cell costimulation blocker (CTLA-4–Ig fusion protein)",
  linked: [["Kidney transplantation — prevention of rejection (EBV-seropositive adults)", "Maintenance immunosuppression [FDA]", ""]],
  forms: ["Powder for injection 250 mg vial, with silicone-free syringe [FDA]."],
  moa: "Binds CD80/CD86 on antigen-presenting cells, blocking CD28 costimulation of T cells [FDA].",
  pk: ["Terminal half-life about 9–10 days [FDA]."],
  ind: { adult: ["Prophylaxis of rejection in adult kidney transplant, with basiliximab induction, mycophenolate and corticosteroids [FDA].", "EBV-seropositive recipients only [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Initial phase", "10 mg/kg IV over 30 min on day 1 (before implantation), day 5, end of weeks 2 and 4, and end of weeks 8 and 12 [FDA]."], ["Maintenance", "5 mg/kg every 4 weeks (± 3 days) from end of week 16 [FDA]."], ["Dose rounding", "Use actual weight at transplant (change only if weight changes over 10%); the dose must be divisible by 12.5 mg — round to the nearest 12.5 mg [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/kg, rounded to the nearest 12.5 mg." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Higher or more frequent dosing raises infection and malignancy risk — do not exceed [FDA]." },
  tox: { human: "Single doses up to 20 mg/kg without apparent toxicity; higher cumulative dosing in transplant patients gave more CNS adverse reactions [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor and treat symptoms [FDA]." },
  contra: ["EBV-seronegative or unknown EBV serostatus [FDA]."],
  ae: { common: ["Anaemia, diarrhoea, urinary tract infection, peripheral oedema, constipation, hypertension, fever [FDA]."], serious: ["PTLD, mostly CNS (boxed) [FDA]", "Other malignancies [FDA]", "Serious infections incl. PML, polyomavirus nephropathy, TB [FDA]"] },
  monitor: ["New neurological, cognitive or behavioural signs (PTLD, PML) [FDA].", "TB screening before starting; CMV and pneumocystis prophylaxis [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "belatacept", indication_id: "init", label: "Initial phase — 10 mg/kg (day 1, day 5, weeks 2, 4, 8, 12)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 250, unit: "mg/vial" }], infusion: { duration_h: 0.5 }, round_to: 12.5, rounding: "Nearest 12.5 mg [FDA]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "belatacept", indication_id: "maint", label: "Maintenance — 5 mg/kg every 4 weeks from week 16", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 250, unit: "mg/vial" }], infusion: { duration_h: 0.5 }, round_to: 12.5, rounding: "Nearest 12.5 mg [FDA]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "NULOJIX (belatacept) for injection — E.R. Squibb & Sons, label effective 2021-07-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c16ac648-d5d2-9f7d-8637-e2328572754e"]],
  dose: { tagline: "IV infusion to prevent kidney transplant rejection in EBV-positive adults.",
    boxedTitle: "PTLD, other malignancies and serious infections",
    boxed: "Increased risk for developing post-transplant lymphoproliferative disorder (PTLD), predominantly involving the central nervous system (CNS). Recipients without immunity to Epstein-Barr virus (EBV) are at a particularly increased risk; therefore, use in EBV seropositive patients only. Do not use NULOJIX in transplant recipients who are EBV seronegative or with unknown EBV serostatus. Only physicians experienced in immunosuppressive therapy and management of kidney transplant patients should prescribe NULOJIX. Patients receiving the drug should be managed in facilities equipped and staffed with adequate laboratory and supportive medical resources. The physician responsible for maintenance therapy should have complete information requisite for the follow-up of the patient. Increased susceptibility to infection and the possible development of malignancies may result from immunosuppression. Use in liver transplant patients is not recommended due to an increased risk of graft loss and death.",
    adult: [
      { ind: "Initial phase", text: "10 mg/kg IV over 30 minutes: day 1 (before implantation), day 5, and end of weeks 2, 4, 8 and 12.", calc: ["init"] },
      { ind: "Maintenance", text: "5 mg/kg every 4 weeks from the end of week 16.", calc: ["maint"] },
      { ind: "Rounding", text: "Round the dose to the nearest 12.5 mg (e.g. 64 kg × 10 = 640 → 637.5 mg)." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BELIMUMAB (FDA BENLYSTA, GSK, BLA125370/761043, eff. 2026-10-30) ---------- */
FDB_M("belimumab", {
  inn: "Belimumab", atc: "L04AG04", cls: "B-lymphocyte stimulator (BLyS) inhibitor — monoclonal antibody",
  linked: [["Systemic lupus erythematosus, active", "Add-on to standard therapy [FDA]", ""], ["Lupus nephritis, active", "Add-on to standard therapy [FDA]", ""]],
  forms: ["IV powder 120 mg and 400 mg vials [FDA].", "SC 200 mg/mL autoinjector or prefilled syringe [FDA]."],
  moa: "Blocks soluble BLyS, reducing survival of B cells, including autoreactive B cells [FDA].",
  pk: ["Terminal half-life about 19 days (IV) [FDA]."],
  ind: { adult: ["Active SLE on standard therapy [FDA].", "Active lupus nephritis on standard therapy [FDA].", "Not studied in severe active CNS lupus [FDA]."], paed: ["Same, 5 years and over [FDA]."] },
  adult: [["IV (SLE or lupus nephritis)", "10 mg/kg over 1 h every 2 weeks for 3 doses, then every 4 weeks. Consider premedication [FDA]."], ["SC — SLE", "200 mg once weekly [FDA]."], ["SC — lupus nephritis", "400 mg (two 200 mg injections) weekly for 4 doses, then 200 mg weekly [FDA]."]],
  paed: { tiers: ["IV, 5 years+: 10 mg/kg as adults [FDA].", "SC autoinjector, 5 years+: SLE — 40 kg+ 200 mg weekly; 15–<40 kg 200 mg every 2 weeks [FDA].", "SC lupus nephritis: 40 kg+ as adults; 15–<40 kg 200 mg weekly × 4, then every 2 weeks [FDA]."], transition: "Adult SC dose from 40 kg [FDA].", calcNote: "IV mg/kg; SC by weight band." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Avoid live vaccines [NEP]." },
  tox: { human: "Two IV doses up to 20 mg/kg caused no increase in adverse reactions [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Previous anaphylaxis to belimumab [FDA].", "Previous Stevens–Johnson syndrome or TEN with belimumab [FDA]."],
  ae: { common: ["Nausea, diarrhoea, fever, nasopharyngitis, bronchitis, insomnia, pain in extremity, depression [NEP]."], serious: ["Serious infections, PML [FDA]", "Hypersensitivity including anaphylaxis [FDA]", "SJS/TEN [FDA]", "Depression and suicidality [FDA]", "Malignancy [FDA]"] },
  monitor: ["Mood — depression and suicidal thoughts [FDA].", "Infections; infusion reactions [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "belimumab", indication_id: "iv", label: "IV — 10 mg/kg (every 2 weeks × 3, then every 4 weeks)", route: "IV", population: { min_age_months: 60, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 120, unit: "mg/vial" }, { form: "inj", strength: 400, unit: "mg/vial" }], infusion: { duration_h: 1 }, rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "belimumab", indication_id: "sc_sle", label: "SC — SLE, by weight", route: "SC", population: { min_age_months: 60, max_age_months: null, min_weight_kg: 15, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1,
      bands: [{ min_weight_kg: 15, max_weight_kg: 40, text: "200 mg SC every 2 weeks (autoinjector)", daily: 200 }, { min_weight_kg: 40, max_weight_kg: null, text: "200 mg SC once weekly", daily: 200 }],
      caps: { max_single: 200, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Whole autoinjector", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "BENLYSTA (belimumab) IV and SC — GSK, label effective 2026-10-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2fa3c528-1777-4628-8a55-a69dae2381a3"]],
  dose: { tagline: "Biologic add-on for active lupus and lupus nephritis, IV or weekly injection.",
    adult: [
      { ind: "SLE or lupus nephritis — IV", text: "10 mg/kg over 1 hour every 2 weeks for 3 doses, then every 4 weeks.", calc: ["iv"] },
      { ind: "SLE — SC", text: "200 mg once weekly.", calc: ["sc_sle"] },
      { ind: "Lupus nephritis — SC", text: "400 mg (two 200 mg injections) weekly for 4 doses, then 200 mg weekly." }
    ],
    child: [
      { ind: "5 years and over — IV", text: "10 mg/kg, same schedule as adults.", calc: ["iv"] },
      { ind: "5 years and over — SC (autoinjector)", text: "SLE: 40 kg+ 200 mg weekly; 15–<40 kg 200 mg every 2 weeks. Lupus nephritis: 15–<40 kg 200 mg weekly × 4, then every 2 weeks.", calc: ["sc_sle"] }
    ] }
});

/* ---------- BELINOSTAT (FDA BELEODAQ, Acrotech, NDA206256, eff. 2025-04-07) ---------- */
FDB_M("belinostat", {
  inn: "Belinostat", atc: "L01XH04", cls: "Histone deacetylase (HDAC) inhibitor",
  linked: [["Peripheral T-cell lymphoma, relapsed or refractory", "Accelerated approval [FDA]", ""]],
  forms: ["Powder for injection 500 mg vial [FDA]."],
  moa: "Inhibits histone deacetylases, leading to cell-cycle arrest and apoptosis of tumour cells [NEP].",
  pk: ["Elimination half-life 1.1 h [FDA].", "Metabolised by UGT1A1 — avoid UGT1A1 inhibitors (or reduce dose 25%) [FDA]."],
  ind: { adult: ["Relapsed or refractory peripheral T-cell lymphoma (accelerated approval) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["PTCL", "1,000 mg/m² IV over 30 min once daily on days 1–5 of a 21-day cycle [FDA]."], ["UGT1A1*28 homozygous", "Start 750 mg/m² [FDA]."], ["Toxicity", "Interrupt, and reduce by 25% as per label tables [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/m² (needs height)." },
  adj: { renal: "CrCl 30–<60: 500 mg/m². Under 30: avoid. 60–<90: no change [FDA].", hepatic: "Moderate (bilirubin >1.5–3 × ULN): 500 mg/m². Severe (>3 × ULN): avoid. Mild: no change [FDA].", preg: "Can cause fetal harm [FDA].", other: "Do not give with active infection [FDA]." },
  tox: { human: "No specific information [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; no antidote; dialysability unknown [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, fatigue, fever, anaemia, vomiting [NEP]."], serious: ["Thrombocytopenia, neutropenia, anaemia [FDA]", "Serious infections (pneumonia, sepsis) [FDA]", "Hepatotoxicity [FDA]", "Tumour lysis syndrome [FDA]"] },
  monitor: ["Blood counts weekly [FDA].", "Liver tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "belinostat", indication_id: "ptcl", label: "PTCL — 1,000 mg/m² IV days 1–5 every 21 days", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 500, unit: "mg/vial" }], infusion: { duration_h: 0.5 }, rounding: "To 10 mg [NEP]",
    renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "CrCl under 30: avoid." }], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "BELEODAQ (belinostat) for injection — Acrotech Biopharma, label effective 2025-04-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2e8ef36b-71fa-4492-a16f-577d5f7d111d"]],
  dose: { tagline: "IV HDAC inhibitor for relapsed peripheral T-cell lymphoma.",
    adult: [
      { ind: "Relapsed/refractory PTCL", text: "1,000 mg/m² IV over 30 minutes on days 1–5 of each 21-day cycle.", calc: ["ptcl"] },
      { ind: "Kidney or liver impairment", text: "Moderate (CrCl 30–<60, or bilirubin >1.5–3 × ULN): 500 mg/m². Severe: avoid." },
      { ind: "UGT1A1*28 homozygous", text: "Start at 750 mg/m²." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BELUMOSUDIL (FDA REZUROCK, Kadmon, NDA214783, eff. 2026-04-07) ---------- */
FDB_M("belumosudil", {
  inn: "Belumosudil", atc: "L04AA48", cls: "ROCK2 kinase inhibitor",
  linked: [["Chronic graft-versus-host disease", "After at least two prior lines of systemic therapy [FDA]", ""]],
  forms: ["Tablets 200 mg [FDA]."],
  moa: "Inhibits rho-associated kinases (ROCK2 > ROCK1), shifting the Th17/Treg balance and reducing fibrosis signalling [FDA].",
  pk: ["Half-life about 19 h [FDA].", "Take with a meal; swallow whole [FDA].", "Strong CYP3A inducers or proton pump inhibitors: increase to 200 mg twice daily [FDA].", "Raises BCRP and OATP1B1 substrates — monitor and reduce those [FDA]."],
  ind: { adult: ["Chronic GVHD after failure of at least two prior lines of systemic therapy [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Chronic GVHD", "200 mg once daily with a meal, until progression needing new systemic therapy [FDA]."], ["With a strong CYP3A inducer or a PPI", "200 mg twice daily [FDA]."]],
  paed: { tiers: ["12 years and over: 200 mg once daily [FDA]."], transition: "Same dose from 12 years [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Severe kidney impairment not studied — weigh risks and benefits [FDA].", hepatic: "Avoid in moderate or severe liver impairment [FDA].", preg: "Can cause fetal harm; effective contraception; do not breastfeed [FDA].", other: "Do not take extra doses for a missed dose [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Infections, asthenia, nausea, diarrhoea, dyspnoea, cough, oedema, haemorrhage, abdominal and musculoskeletal pain, headache, hypertension; low phosphate, raised GGT, low lymphocytes [FDA]."], serious: ["Embryo-fetal toxicity [FDA]"] },
  monitor: ["Liver tests and blood counts during treatment [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "belumosudil", indication_id: "cgvhd", label: "Chronic GVHD — 200 mg once daily with a meal", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 200, max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "REZUROCK (belumosudil) tablets — Kadmon (Sanofi), label effective 2026-04-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=102e4ef4-7f84-4e34-8df1-479c24d1575d"]],
  dose: { tagline: "Once-daily ROCK2 inhibitor tablet for chronic graft-versus-host disease.",
    adult: [
      { ind: "Chronic GVHD (after 2+ prior lines)", text: "200 mg once daily with a meal.", calc: ["cgvhd"] },
      { ind: "With a strong CYP3A inducer or a proton pump inhibitor", text: "200 mg twice daily." }
    ],
    child: [{ ind: "12 years and over", text: "200 mg once daily with a meal.", calc: ["cgvhd"] }] }
});

/* ---------- BEMPEDOIC ACID (FDA NEXLETOL, Esperion, NDA211616, eff. 2026-06-25) ---------- */
FDB_M("bempedoic-acid", {
  inn: "Bempedoic acid", atc: "C10AX15", cls: "ATP-citrate lyase (ACL) inhibitor — non-statin lipid-lowering drug",
  linked: [["High LDL cholesterol / cardiovascular risk when a statin cannot be used", "Alternative or add-on LDL lowering [FDA]", ""]],
  forms: ["Tablets 180 mg [FDA]."],
  moa: "Inhibits ATP-citrate lyase, upstream of HMG-CoA reductase in the liver, lowering cholesterol synthesis and LDL-C [FDA].",
  pk: ["Half-life about 21 h [FDA].", "With or without food [FDA].", "Raises simvastatin and pravastatin levels — avoid simvastatin above 20 mg and pravastatin above 40 mg [FDA]."],
  ind: { adult: ["Reduce major cardiovascular events in adults at increased risk who cannot take recommended statin therapy [FDA].", "Lower LDL-C in hypercholesterolaemia, including heterozygous FH, with diet, alone or with other LDL-lowering drugs [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["All indications", "180 mg once daily; check lipids 8–12 weeks after starting [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Avoid with a history of tendon disorders or rupture [FDA]." },
  tox: { human: "No clinical experience with overdose [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Previous serious hypersensitivity (e.g. angioedema) to bempedoic acid or any excipient [FDA]."],
  ae: { common: ["Upper respiratory infection, muscle spasms, hyperuricaemia, back pain, abdominal pain, bronchitis, limb pain, anaemia [FDA]."], serious: ["Hyperuricaemia and gout [FDA]", "Tendon rupture [FDA]"] },
  monitor: ["Lipids 8–12 weeks after starting [FDA].", "Uric acid as indicated [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bempedoic-acid", indication_id: "std", label: "180 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 180, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 180, max_daily: 180, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 180, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "NEXLETOL (bempedoic acid) tablets — Esperion, label effective 2026-06-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=88d06d89-a3da-40b4-b273-8f4f7d56c4c9"]],
  dose: { tagline: "Once-daily non-statin tablet to lower LDL cholesterol and cardiovascular risk.",
    adult: [{ ind: "High LDL-C or CV risk, statin not possible", text: "180 mg once daily, with or without food. Recheck lipids at 8–12 weeks.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BENAZEPRIL (FDA LOTENSIN, Validus, NDA019851, eff. 2025-09-30) ---------- */
FDB_M("benazepril", {
  inn: "Benazepril", atc: "C09AA07", cls: "ACE inhibitor",
  linked: [["Hypertension", "First-line class option [FDA]", "htn-adult"]],
  forms: ["Tablets 10, 20 and 40 mg [FDA]."],
  moa: "Prodrug of benazeprilat, which inhibits angiotensin-converting enzyme [FDA].",
  pk: ["Effective half-life of benazeprilat 10–11 h [FDA].", "Only slightly dialysable [FDA].", "Interacts with potassium-sparing diuretics/supplements, lithium, NSAIDs, aliskiren, neprilysin inhibitors [FDA]."],
  ind: { adult: ["Hypertension [FDA]."], paed: ["Hypertension, 6 years and over with GFR above 30 [FDA]."] },
  adult: [["Hypertension", "Start 10 mg once daily (5 mg if on a diuretic). Usual 20–40 mg per day, once daily or in two divided doses [FDA]."], ["Kidney impairment (GFR under 30)", "Start 5 mg once daily [FDA]."]],
  paed: { tiers: ["6 years and over, GFR above 30: start 0.2 mg/kg once daily; titrate to a maximum of 0.6 mg/kg once daily (doses above 0.6 mg/kg or 40 mg not studied) [FDA].", "Under 6 years, or GFR under 30: not recommended [FDA]."], transition: "Adult doses when 0.6 mg/kg exceeds 40 mg [FDA].", calcNote: "Never above 40 mg a day in children." },
  adj: { renal: "GFR under 30 (creatinine above 3 mg/dL): start 5 mg once daily [FDA].", hepatic: "Rare cholestatic jaundice → hepatic failure; stop if jaundice [FDA].", preg: "Boxed warning: stop when pregnancy is detected — fetal toxicity [FDA].", other: "Contraindicated with sacubitril/valsartan within 36 h [FDA]." },
  tox: { human: "No human overdoses reported; hypotension expected — treat with IV normal saline [FDA].", animal: "Oral 3 g/kg caused significant lethality in mice; rats tolerated up to 6 g/kg [FDA].", manage: "IV normal saline for hypotension; benazeprilat only slightly dialysable [FDA]." },
  contra: ["Hypersensitivity to benazepril or any ACE inhibitor [FDA].", "History of angioedema [FDA].", "With a neprilysin inhibitor (e.g. sacubitril) or within 36 h of switching [FDA].", "With aliskiren in diabetes [FDA]."],
  ae: { common: ["Headache, dizziness, somnolence, postural dizziness, cough [FDA]."], serious: ["Angioedema (head/neck, intestinal) [FDA]", "Hypotension [FDA]", "Hyperkalaemia [FDA]", "Worsening kidney function [FDA]", "Fetal toxicity [FDA]"] },
  monitor: ["Blood pressure after starting [FDA].", "Kidney function and potassium periodically [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "benazepril", indication_id: "adult", label: "Adult — start 10 mg once daily (usual 20–40 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, max_daily: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], renal_note: "GFR under 30: start 5 mg once daily (label uses GFR/serum creatinine).", flags: [], sources: ["FDA"] },
    { drug: "benazepril", indication_id: "child", label: "Child 6 y+ — 0.2 mg/kg once daily (max 0.6 mg/kg, 40 mg)", route: "PO", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.2, unit: "mg", per: "dose", value_max: 0.6 }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, max_daily: 40, adult_ceiling_single: 40, adult_ceiling_daily: 40, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Nearest quarter tablet [NEP]", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "Children with GFR under 30: not recommended." }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "LOTENSIN (benazepril HCl) tablets — Validus, label effective 2025-09-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2abb091b-a53e-46b0-9b84-e5ee8f2bdd8e"]],
  dose: { tagline: "Once-daily ACE inhibitor for high blood pressure in adults and children 6+.",
    boxedTitle: "Fetal toxicity",
    boxed: "When pregnancy is detected, discontinue Lotensin as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus.",
    adult: [
      { ind: "Hypertension", text: "Start 10 mg once daily (5 mg if on a diuretic). Usual 20–40 mg a day, once daily or in two doses.", calc: ["adult"] },
      { ind: "GFR under 30", text: "Start 5 mg once daily." }
    ],
    child: [
      { ind: "Hypertension, 6 years and over", text: "0.2 mg/kg once daily, up to 0.6 mg/kg once daily. Not above 40 mg a day.", calc: ["child"] },
      { ind: "Under 6 years, or GFR under 30", text: "Not recommended." }
    ] }
});

/* ---------- BENDAMUSTINE (FDA BELRAPZO, Eagle, NDA205580, eff. 2026-11-16) ---------- */
FDB_M("bendamustine", {
  inn: "Bendamustine", atc: "L01AA09", cls: "Alkylating agent (nitrogen mustard)",
  linked: [["Chronic lymphocytic leukaemia", "Chemotherapy [FDA]", ""], ["Indolent B-cell non-Hodgkin lymphoma, rituximab-refractory", "Chemotherapy [FDA]", ""]],
  forms: ["Injection 100 mg/4 mL (25 mg/mL) (BELRAPZO) [FDA]; other bendamustine products have different presentations and infusion times [NEP]."],
  moa: "Bifunctional alkylating agent — cross-links DNA, causing cell death [NEP].",
  pk: ["Parent half-life about 40 min; active metabolites about 3 h and 30 min [FDA]."],
  ind: { adult: ["Chronic lymphocytic leukaemia [FDA].", "Indolent B-cell NHL progressing during or within 6 months of rituximab [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["CLL", "100 mg/m² IV over 30 min on days 1 and 2 of a 28-day cycle, up to 6 cycles [FDA]."], ["NHL", "120 mg/m² IV over 60 min on days 1 and 2 of a 21-day cycle, up to 8 cycles [FDA]."], ["Toxicity (CLL)", "Grade 3+ haematologic: 50 mg/m², then 25 mg/m² if it recurs [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/m² (needs height)." },
  adj: { renal: "Do not use if CrCl under 30 [FDA].", hepatic: "Do not use if bilirubin 1.5–3 × ULN with AST/ALT 2.5–10 × ULN, or bilirubin over 3 × ULN [FDA].", preg: "Can cause fetal harm [FDA].", other: "Infusion time differs by product — follow the product label [NEP]." },
  tox: { human: "Highest single dose 280 mg/m²: dose-limiting ECG changes (QT prolongation, tachycardia, ST/T changes) [FDA].", animal: "IV LD50 240 mg/m² in mouse and rat [FDA].", manage: "Supportive care; monitor ECG and blood counts [NEP]." },
  contra: ["Hypersensitivity to bendamustine, polyethylene glycol 400, propylene glycol or monothioglycerol [FDA]."],
  ae: { common: ["Nausea, fatigue, vomiting, diarrhoea, fever, myelosuppression [FDA]."], serious: ["Myelosuppression, infections, PML [FDA]", "Anaphylaxis and infusion reactions [FDA]", "Tumour lysis syndrome [FDA]", "SJS/TEN/DRESS [FDA]", "Hepatotoxicity; extravasation injury [FDA]"] },
  monitor: ["Blood counts before each cycle [FDA].", "Liver tests [FDA].", "Infusion site [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "bendamustine", indication_id: "cll", label: "CLL — 100 mg/m² days 1–2 every 28 days", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], infusion: { duration_h: 0.5 }, rounding: "To 1 mg [NEP]", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "CrCl under 30: do not use." }], flags: [], sources: ["FDA"] },
    { drug: "bendamustine", indication_id: "nhl", label: "NHL — 120 mg/m² days 1–2 every 21 days", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 120, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], infusion: { duration_h: 1 }, rounding: "To 1 mg [NEP]", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "CrCl under 30: do not use." }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "BELRAPZO (bendamustine HCl) injection — Eagle Pharmaceuticals, label effective 2026-11-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9759a4ae-82ca-40cf-9c02-e1cadb21cbdc"]],
  dose: { tagline: "IV alkylating chemotherapy for CLL and rituximab-refractory indolent lymphoma.",
    adult: [
      { ind: "CLL", text: "100 mg/m² IV over 30 minutes on days 1 and 2 of each 28-day cycle, up to 6 cycles.", calc: ["cll"] },
      { ind: "Indolent B-cell NHL", text: "120 mg/m² IV over 60 minutes on days 1 and 2 of each 21-day cycle, up to 8 cycles.", calc: ["nhl"] },
      { ind: "Kidney or liver impairment", text: "Do not use if CrCl under 30, or with moderate–severe liver impairment." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BENRALIZUMAB (FDA FASENRA, AstraZeneca, BLA761070, eff. 2026-05-13) ---------- */
FDB_M("benralizumab", {
  inn: "Benralizumab", atc: "R03DX10", cls: "IL-5 receptor α-directed cytolytic monoclonal antibody",
  linked: [["Severe eosinophilic asthma", "Add-on maintenance biologic [FDA]", ""], ["Eosinophilic granulomatosis with polyangiitis (EGPA)", "Adults [FDA]", ""], ["Hypereosinophilic syndrome", "12 years and over [FDA]", ""]],
  forms: ["Prefilled syringe 10 mg/0.5 mL and 30 mg/mL; FASENRA PEN 30 mg/mL [FDA]."],
  moa: "Binds IL-5Rα on eosinophils and basophils and depletes them by antibody-dependent cell cytotoxicity [FDA].",
  pk: ["Elimination half-life about 15 days [FDA]."],
  ind: { adult: ["Add-on maintenance for severe eosinophilic asthma [FDA].", "EGPA [FDA].", "Hypereosinophilic syndrome without secondary cause [FDA].", "Not for acute bronchospasm [FDA]."], paed: ["Severe eosinophilic asthma 6 years and over; HES 12 years and over [FDA]."] },
  adult: [["Severe eosinophilic asthma (12 years+)", "30 mg SC every 4 weeks for 3 doses, then every 8 weeks [FDA]."], ["EGPA or HES", "30 mg SC every 4 weeks [FDA]."]],
  paed: { tiers: ["Asthma 6–11 years: under 35 kg — 10 mg; 35 kg+ — 30 mg; every 4 weeks × 3, then every 8 weeks [FDA].", "Asthma 12 years+: 30 mg as adults [FDA]."], transition: "30 mg from 35 kg or 12 years [FDA].", calcNote: "Fixed doses by weight band." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Do not stop steroids abruptly when starting. Treat helminth infections first [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; no specific treatment [FDA]." },
  contra: ["Known hypersensitivity to benralizumab or excipients [FDA]."],
  ae: { common: ["Headache, pharyngitis [NEP]."], serious: ["Hypersensitivity: anaphylaxis, angioedema, urticaria, rash (may be delayed) [FDA]"] },
  monitor: ["Asthma control; steroid taper as appropriate [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "benralizumab", indication_id: "asthma_child", label: "Asthma, 6–11 years — by weight", route: "SC", population: { min_age_months: 72, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1,
      bands: [{ min_weight_kg: 0, max_weight_kg: 35, text: "10 mg SC every 4 weeks × 3, then every 8 weeks", daily: 10 }, { min_weight_kg: 35, max_weight_kg: null, text: "30 mg SC every 4 weeks × 3, then every 8 weeks", daily: 30 }],
      caps: { max_single: 30, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Whole syringe", renal: [], flags: [], sources: ["FDA"] },
    { drug: "benralizumab", indication_id: "asthma", label: "Asthma, 12 years+ — 30 mg every 4 weeks × 3, then every 8 weeks", route: "SC", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: { max_single: 30, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole syringe", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "FASENRA (benralizumab) injection — AstraZeneca, label effective 2026-05-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=da6aca1a-19ed-44a4-abb7-696c7d58b784"]],
  dose: { tagline: "Injectable biologic for severe eosinophilic asthma, EGPA and hypereosinophilic syndrome.",
    adult: [
      { ind: "Severe eosinophilic asthma", text: "30 mg SC every 4 weeks for 3 doses, then every 8 weeks.", calc: ["asthma"] },
      { ind: "EGPA or hypereosinophilic syndrome", text: "30 mg SC every 4 weeks." }
    ],
    child: [
      { ind: "Asthma, 6–11 years", text: "Under 35 kg: 10 mg; 35 kg and over: 30 mg. Every 4 weeks × 3, then every 8 weeks.", calc: ["asthma_child"] },
      { ind: "Asthma or HES, 12 years and over", text: "30 mg as adults.", calc: ["asthma"] }
    ] }
});

/* ---------- BENZATHINE BENZYLPENICILLIN (FDA BICILLIN L-A, Pfizer, NDA050141, eff. 2026-07-21) ---------- */
FDB_M("benzathine-benzylpenicillin", {
  inn: "Benzathine benzylpenicillin", atc: "J01CE08", cls: "Long-acting depot penicillin (IM only)",
  linked: [["Syphilis", "First-line [FDA][BT-STG]", ""], ["Group A streptococcal pharyngitis", "Single-dose treatment [FDA]", ""], ["Rheumatic fever — secondary prophylaxis", "Monthly injection [FDA][BT-STG]", ""], ["Yaws, bejel, pinta", "Single dose [FDA]", ""]],
  forms: ["Prefilled syringes 600,000 units (1 mL), 1,200,000 units (2 mL) and 2,400,000 units (4 mL) [FDA]; 2.4 million-unit injection on the Bhutan list [BT-NEML]."],
  moa: "Releases benzylpenicillin slowly from the IM depot; penicillin blocks bacterial cell-wall synthesis [NEP].",
  pk: ["Very low, prolonged blood levels for weeks after one injection [NEP]."],
  ind: { adult: ["Mild–moderate infections by very penicillin-sensitive organisms: streptococcal URTI, syphilis, yaws, bejel, pinta; prophylaxis of rheumatic fever and glomerulonephritis [FDA]."], paed: ["Same indications; congenital syphilis [FDA]."] },
  adult: [["Streptococcal pharyngitis", "1,200,000 units IM once [FDA]."], ["Syphilis — primary, secondary, early latent", "2,400,000 units IM once [FDA][BT-STG]."], ["Late latent or unknown duration", "2,400,000 units IM once weekly for 3 weeks [FDA][BT-STG]."], ["Rheumatic fever prophylaxis", "1,200,000 units IM every 4 weeks, or 600,000 units every 2 weeks [FDA]."], ["Yaws, bejel, pinta", "1,200,000 units IM once [FDA]."]],
  paed: { tiers: ["Streptococcal pharyngitis: under 27 kg (60 lb) 300,000–600,000 units; older children 900,000 units [FDA].", "Congenital syphilis, under 2 years: 50,000 units/kg [FDA].", "Rheumatic fever prophylaxis (Bhutan STG): under 30 kg 600,000 units; 30 kg and over 1,200,000 units, IM monthly [BT-STG]."], transition: "Adult doses for older children [FDA].", calcNote: "Units, not mg. IM only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Jarisch–Herxheimer reaction can follow treatment of syphilis [FDA]." },
  tox: { human: "Overdose may cause neuromuscular hyperirritability or seizures [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Previous hypersensitivity to any penicillin [FDA]."],
  ae: { common: ["Injection-site pain [NEP]."], serious: ["Anaphylaxis, sometimes fatal [FDA]", "Cardiorespiratory arrest and death after inadvertent IV injection (boxed) [FDA]", "Severe neurovascular damage from injection into or near an artery or nerve [FDA]", "Jarisch–Herxheimer reaction [FDA]"] },
  monitor: ["Observe after injection for anaphylaxis [NEP].", "Penicillin allergy history before every dose [FDA]."],
  local: { neml: "Benzathine benzylpenicillin 2.4 million units injection is on the Bhutan NEML 2025 [BT-NEML].", strengths: "2.4 million units (24 lakh).", stg: "STG 2024: syphilis 2.4 million units IM single (late latent weekly × 3); acute rheumatic fever 24 lakh units IM stat; RF prophylaxis monthly — 6 lakh (<30 kg) or 12 lakh (≥30 kg) units [BT-STG]." },
  verify: [["Acute rheumatic fever / strep eradication (adult)", "BT-STG: 2.4 million units (24 lakh) IM stat", "FDA: 1.2 million units IM once for streptococcal URTI", "⚠ DISCREPANCY", "The Bhutan STG dose is higher than the FDA streptococcal dose — follow the national STG in Bhutan."], ["Neurosyphilis / tertiary", "—", "FDA label: 2.4 million units weekly × 3", "⚠ DISCREPANCY", "Current practice treats neurosyphilis with IV aqueous benzylpenicillin, not benzathine [UNVERIFIED-KNOWLEDGE]."]],
  calc: [
    { drug: "benzathine-benzylpenicillin", indication_id: "syph", label: "Early syphilis — 2.4 million units IM once", route: "IM", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2400000, unit: "units", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 2400000, unit: "units" }, weight_basis: "NEP", formulations: [], rounding: "Whole syringe/vial", renal: [], flags: [], sources: ["FDA", "BT-STG"] },
    { drug: "benzathine-benzylpenicillin", indication_id: "rf_proph", label: "Rheumatic fever prophylaxis — monthly by weight (Bhutan STG)", route: "IM", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "units", per: "dose" }, interval_h: 672, divided_doses: 1,
      bands: [{ min_weight_kg: 0, max_weight_kg: 30, text: "600,000 units (6 lakh) IM every 4 weeks", daily: 600000 }, { min_weight_kg: 30, max_weight_kg: null, text: "1,200,000 units (12 lakh) IM every 4 weeks", daily: 1200000 }],
      caps: { max_single: 1200000, unit: "units" }, weight_basis: "actual", formulations: [], rounding: "Whole syringe", renal: [], flags: [], sources: ["BT-STG", "FDA"] },
    { drug: "benzathine-benzylpenicillin", indication_id: "congenital", label: "Congenital syphilis, under 2 years — 50,000 units/kg IM", route: "IM", population: { min_age_months: null, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50000, unit: "units", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 2400000, unit: "units" }, weight_basis: "actual", formulations: [], rounding: "To 1,000 units [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "BICILLIN L-A (penicillin G benzathine injectable suspension) — Pfizer, label effective 2026-07-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=012d46f1-d0a0-4676-a879-cd320297ab16"], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Long-acting IM penicillin for syphilis, strep throat and rheumatic fever prophylaxis.",
    boxedTitle: "Not for intravenous use",
    boxed: "NOT FOR INTRAVENOUS USE. DO NOT INJECT INTRAVENOUSLY OR ADMIX WITH OTHER INTRAVENOUS SOLUTIONS. THERE HAVE BEEN REPORTS OF INADVERTENT INTRAVENOUS ADMINISTRATION OF PENICILLIN G BENZATHINE WHICH HAS BEEN ASSOCIATED WITH CARDIORESPIRATORY ARREST AND DEATH. Prior to administration of this drug, carefully read the WARNINGS, ADVERSE REACTIONS, and DOSAGE AND ADMINISTRATION sections of the labeling.",
    adult: [
      { ind: "Syphilis — primary, secondary, early latent", text: "2.4 million units deep IM, single dose.", calc: ["syph"] },
      { ind: "Late latent syphilis or unknown duration", text: "2.4 million units IM once weekly for 3 weeks." },
      { ind: "Streptococcal pharyngitis", text: "1.2 million units IM once. (Bhutan STG, acute rheumatic fever: 2.4 million units stat.)" },
      { ind: "Rheumatic fever prophylaxis", text: "1.2 million units IM every 4 weeks.", calc: ["rf_proph"] }
    ],
    child: [
      { ind: "Rheumatic fever prophylaxis (Bhutan STG)", text: "Under 30 kg: 600,000 units; 30 kg and over: 1.2 million units — IM every 4 weeks.", calc: ["rf_proph"] },
      { ind: "Streptococcal pharyngitis", text: "Under 27 kg: 300,000–600,000 units; older children: 900,000 units — IM once." },
      { ind: "Congenital syphilis, under 2 years", text: "50,000 units/kg IM.", calc: ["congenital"] }
    ] }
});

/* ---------- BENZATROPINE (FDA benztropine mesylate tablets, ANDA090168) ---------- */
FDB_M("benzatropine", {
  inn: "Benzatropine", atc: "N04AC01", cls: "Anticholinergic antiparkinson agent",
  linked: [["Drug-induced extrapyramidal reactions (acute dystonia, parkinsonism)", "Treatment [FDA]", ""], ["Parkinsonism", "Adjunct [FDA]", ""]],
  forms: ["Tablets 0.5, 1 and 2 mg [NEP]; injection 1 mg/mL [NEP]."],
  moa: "Central anticholinergic with some antihistaminic action; rebalances cholinergic–dopaminergic activity [NEP].",
  pk: ["Cumulative action — increase slowly [FDA].", "Additive anticholinergic effects with phenothiazines, tricyclics and antihistamines; risk of paralytic ileus and heat stroke [FDA]."],
  ind: { adult: ["Adjunct for all forms of parkinsonism [FDA].", "Extrapyramidal disorders from neuroleptics (not tardive dyskinesia) [FDA]."], paed: ["Contraindicated under 3 years; caution in older children [FDA]."] },
  adult: [["Drug-induced extrapyramidal disorders", "1–4 mg once or twice daily, orally or by injection [FDA]."], ["Acute dystonic reaction", "1–2 mL of the injection (1–2 mg) IM/IV usually relieves it quickly; then 1–2 mg tablets twice daily to prevent recurrence [FDA]."], ["Parkinsonism", "Usual 1–2 mg/day (range 0.5–6 mg); start low and increase by 0.5 mg every 5–6 days. Maximum 6 mg/day [FDA]."]],
  paed: { tiers: ["Under 3 years: contraindicated [FDA].", "3 years and over: use with caution; no label dose [FDA]."], transition: "Adult doses [FDA].", calcNote: "Fixed adult doses; maximum 6 mg/day." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Safe use in pregnancy not established [FDA].", other: "Elderly and hot weather: anhidrosis and heat stroke risk — reduce dose [FDA]." },
  tox: { human: "Atropine-like poisoning: confusion, hallucinations, agitation, mydriasis, dry mouth, tachycardia, hyperthermia, urinary retention, CNS depression or stimulation [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; physostigmine may reverse central anticholinergic toxicity [FDA]." },
  contra: ["Hypersensitivity to benzatropine [FDA].", "Children under 3 years [FDA]."],
  ae: { common: ["Dry mouth, constipation, blurred vision, tachycardia, urinary retention, confusion [FDA]."], serious: ["Paralytic ileus [FDA]", "Hyperthermia, heat stroke, anhidrosis [FDA]", "Toxic psychosis [FDA]"] },
  monitor: ["Bowel habit, temperature in hot weather, mental state [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025; trihexyphenidyl 2 mg tablet is the listed anticholinergic [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "benzatropine", indication_id: "eps", label: "Drug-induced EPS — 1–4 mg once or twice daily", route: "PO/IM/IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose", value_max: 4 }, interval_h: 12, divided_doses: 2, caps: { max_single: 4, max_daily: 6, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "benzatropine", indication_id: "dystonia", label: "Acute dystonia — 1–2 mg IM/IV once", route: "IM/IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose", value_max: 2 }, interval_h: null, divided_doses: 1, caps: { max_single: 2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "Whole mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Benztropine mesylate tablets USP (ANDA090168) — label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01688e6f-7b22-41bf-9a85-1c88d90f99b6"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Anticholinergic for antipsychotic-induced dystonia and parkinsonism.",
    adult: [
      { ind: "Acute dystonic reaction", text: "1–2 mg IM or IV; then 1–2 mg tablets twice daily to prevent recurrence.", calc: ["dystonia"] },
      { ind: "Drug-induced extrapyramidal disorders", text: "1–4 mg once or twice daily.", calc: ["eps"] },
      { ind: "Parkinsonism", text: "Usually 1–2 mg a day (0.5–6 mg). Increase by 0.5 mg every 5–6 days. Maximum 6 mg a day." }
    ],
    child: [{ ind: "Children", text: "Contraindicated under 3 years; no label dose for older children." }] }
});

/* ---------- BENZGALANTAMINE (FDA ZUNVEYL, Alpha Cognition, NDA218549, eff. 2026-09-25) ---------- */
FDB_M("benzgalantamine", {
  inn: "Benzgalantamine", atc: "N06DA06", cls: "Cholinesterase inhibitor (galantamine prodrug)",
  linked: [["Alzheimer's dementia, mild to moderate", "Symptomatic treatment [FDA]", ""]],
  forms: ["Delayed-release (enteric-coated) tablets 5, 10 and 15 mg [FDA]."],
  moa: "Prodrug converted to galantamine, a reversible acetylcholinesterase inhibitor [FDA].",
  pk: ["Galantamine half-life about 7 h [FDA].", "Swallow whole; with or without food; no alcohol [FDA]."],
  ind: { adult: ["Mild to moderate dementia of the Alzheimer's type [FDA]."], paed: ["Not indicated [NEP]."] },
  adult: [["Alzheimer's dementia", "Start 5 mg twice daily; after at least 4 weeks increase to 10 mg twice daily; after at least 4 more weeks may increase to a maximum of 15 mg twice daily [FDA]."]],
  paed: { tiers: ["Not indicated [NEP]."], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "CrCl 9–59: maximum 10 mg twice daily. Under 9: not recommended [FDA].", hepatic: "Moderate: maximum 10 mg twice daily. Severe: not recommended [FDA].", preg: "Not established in primary source. [NEP]", other: "Keep well hydrated [FDA]." },
  tox: { human: "Cholinergic crisis: severe nausea, vomiting, salivation, sweating, bradycardia, hypotension, respiratory depression, collapse, convulsions, muscle weakness [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; atropine for cholinergic signs [NEP]." },
  contra: ["Hypersensitivity to benzgalantamine, galantamine or any inactive ingredient [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, dizziness, headache, decreased appetite [NEP]."], serious: ["Serious skin reactions (SJS, AGEP) — stop at first rash [FDA]", "Bradycardia and AV block [FDA]", "GI bleeding [FDA]", "Bladder outflow obstruction; seizures; bronchospasm [FDA]"] },
  monitor: ["Heart rate; GI bleeding signs; skin [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "benzgalantamine", indication_id: "ad", label: "Alzheimer's — 5 mg twice daily, up to 15 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose", value_max: 15 }, interval_h: 12, divided_doses: 2, caps: { max_single: 15, max_daily: 30, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab", whole: true }], rounding: "Whole tablets — do not split",
    renal: [{ crcl_min: 0, crcl_max: 8.999, action: "avoid", text: "CrCl under 9: not recommended." }], renal_note: "CrCl 9–59: do not exceed 10 mg twice daily.", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "ZUNVEYL (benzgalantamine) delayed-release tablets — Alpha Cognition, label effective 2026-09-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=af47bf67-1f07-4650-8064-24c38afc4656"]],
  dose: { tagline: "Twice-daily galantamine prodrug tablet for mild–moderate Alzheimer's dementia.",
    adult: [
      { ind: "Mild–moderate Alzheimer's dementia", text: "5 mg twice daily → 10 mg twice daily after 4 weeks → up to 15 mg twice daily after another 4 weeks.", calc: ["ad"] },
      { ind: "Kidney or liver impairment", text: "CrCl 9–59 or moderate liver impairment: maximum 10 mg twice daily. CrCl under 9 or severe liver impairment: not recommended." }
    ],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- BENZNIDAZOLE (FDA, Exeltis, NDA209570, eff. 2026-08-27) ---------- */
FDB_M("benznidazole", {
  inn: "Benznidazole", atc: "P01CA02", cls: "Nitroimidazole antiprotozoal",
  linked: [["Chagas disease (Trypanosoma cruzi)", "First-line antiparasitic [FDA]", ""]],
  forms: ["Tablets 100 mg (scored in quarters) and 12.5 mg; may be made into a slurry [FDA]."],
  moa: "Nitroimidazole that forms reactive metabolites damaging T. cruzi DNA, proteins and lipids [NEP].",
  pk: ["Half-life about 13 h [FDA].", "With or without food [FDA].", "Disulfiram within 2 weeks — contraindicated; avoid alcohol [FDA]."],
  ind: { adult: ["Not in the FDA label (paediatric approval) [FDA]."], paed: ["Chagas disease, 2 to 12 years (accelerated approval) [FDA]."] },
  adult: [["Chagas disease", "Not covered by the FDA label; WHO and national programmes treat adults [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2–12 years: 5–8 mg/kg/day in two doses about 12 h apart for 60 days. By weight, each dose: under 15 kg 50 mg; 15–<20 kg 62.5 mg; 20–<30 kg 75 mg; 30–<40 kg 100 mg; 40–<60 kg 150 mg; 60 kg+ 200 mg [FDA]."], transition: "Not established beyond 12 years in the label [FDA].", calcNote: "Weight bands, twice daily for 60 days." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm — pregnancy test before treatment; effective contraception [FDA].", other: "Stop for skin reactions with systemic signs, or for neuropathy [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Hypersensitivity to benznidazole or other nitroimidazoles [FDA].", "Disulfiram within the last 2 weeks [FDA].", "Cockayne syndrome [FDA]."],
  ae: { common: ["Abdominal pain, rash, weight loss, headache, nausea, vomiting [NEP]."], serious: ["Severe skin reactions [FDA]", "Peripheral neuropathy [FDA]", "Bone-marrow depression [FDA]", "Genotoxicity/carcinogenicity potential [FDA]"] },
  monitor: ["Pregnancy test before starting [FDA].", "Skin, neurological symptoms, blood counts [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "benznidazole", indication_id: "child", label: "Chagas, 2–12 years — twice daily by weight for 60 days", route: "PO", population: { min_age_months: 24, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
    bands: [{ min_weight_kg: 0, max_weight_kg: 15, text: "50 mg twice daily (4 × 12.5 mg or ½ × 100 mg)", daily: 100 }, { min_weight_kg: 15, max_weight_kg: 20, text: "62.5 mg twice daily (5 × 12.5 mg)", daily: 125 }, { min_weight_kg: 20, max_weight_kg: 30, text: "75 mg twice daily (6 × 12.5 mg or ¾ × 100 mg)", daily: 150 }, { min_weight_kg: 30, max_weight_kg: 40, text: "100 mg twice daily (1 × 100 mg)", daily: 200 }, { min_weight_kg: 40, max_weight_kg: 60, text: "150 mg twice daily (1½ × 100 mg)", daily: 300 }, { min_weight_kg: 60, max_weight_kg: null, text: "200 mg twice daily (2 × 100 mg)", daily: 400 }],
    caps: { max_single: 200, max_daily: 400, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Tablet table", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Benznidazole tablets — Exeltis (NDA209570), label effective 2026-08-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8983d6a0-f63f-4f8e-bba4-38223f39e29b"]],
  dose: { tagline: "Oral 60-day treatment for Chagas disease in children.",
    adult: [{ ind: "Adults", text: "Not in the FDA label." }],
    child: [{ ind: "Chagas disease, 2–12 years", text: "5–8 mg/kg a day in two doses for 60 days. Each dose: <15 kg 50 mg; 15–<20 kg 62.5 mg; 20–<30 kg 75 mg; 30–<40 kg 100 mg; 40–<60 kg 150 mg; 60 kg+ 200 mg.", calc: ["child"] }] }
});

/* ---------- BENZONATATE (FDA capsules, ANDA206948) ---------- */
FDB_M("benzonatate", {
  inn: "Benzonatate", atc: "R05DB01", cls: "Peripherally acting antitussive (local anaesthetic type)",
  linked: [["Cough — symptomatic relief", "Antitussive [FDA]", ""]],
  forms: ["Capsules 100 mg and 200 mg [FDA]."],
  moa: "Anaesthetises stretch receptors in the airways and lungs, reducing the cough reflex [NEP].",
  pk: ["Related to tetracaine; swallowing whole is essential — chewing numbs the mouth and throat [FDA]."],
  ind: { adult: ["Symptomatic relief of cough [FDA]."], paed: ["Over 10 years [FDA]."] },
  adult: [["Cough", "100 mg or 200 mg three times daily as needed; maximum 600 mg/day in three doses. Swallow whole — never chew, suck or crush [FDA]."]],
  paed: { tiers: ["Over 10 years: adult dose [FDA].", "10 years and under: not in label; accidental ingestion has killed children under 10 [FDA]."], transition: "Adult dose over 10 years [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Keep out of reach of children [FDA]." },
  tox: { human: "Overdose can kill, especially children: symptoms within 15–20 min (restlessness, tremor, seizures, coma, cardiac arrest); death within 1 h reported [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Seek care immediately; gastric evacuation and activated charcoal; support breathing and circulation, treat seizures [FDA]." },
  contra: ["Hypersensitivity to benzonatate or related compounds [FDA]."],
  ae: { common: ["Sedation, headache, dizziness, constipation, nausea, pruritus, nasal congestion [FDA]."], serious: ["Bronchospasm, laryngospasm, cardiovascular collapse if chewed or sucked [FDA]", "Confusion, visual hallucinations [FDA]", "Fatal accidental ingestion in children [FDA]"] },
  monitor: ["Swallowing technique; storage away from children [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "benzonatate", indication_id: "cough", label: "Cough — 100–200 mg three times daily (max 600 mg/day)", route: "PO", population: { min_age_months: 121, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose", value_max: 200 }, interval_h: 8, divided_doses: 3, caps: { max_single: 200, max_daily: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Benzonatate capsules USP (ANDA206948) — label effective 2026-09-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23a5de40-76d0-4117-8d31-2b2f8a6b0a28"]],
  dose: { tagline: "Non-opioid cough capsule — swallow whole; deadly to young children if swallowed.",
    cautionTitle: "Accidental ingestion and death in children",
    caution: "Keep benzonatate capsules out of reach of children. Accidental ingestion of benzonatate capsules resulting in death has been reported in children below age 10. Signs and symptoms of overdose have been reported within 15-20 minutes and death has been reported within one hour of ingestion. (FDA label, Warnings)",
    adult: [{ ind: "Cough (adults and children over 10)", text: "100 mg or 200 mg three times daily as needed. Maximum 600 mg a day. Swallow whole.", calc: ["cough"] }],
    child: [{ ind: "10 years and under", text: "Not in the label — do not use." }] }
});

/* ---------- BENZOYL PEROXIDE (FDA OTC acne monograph M006; Rx combinations) ---------- */
FDB_M("benzoyl-peroxide", {
  inn: "Benzoyl peroxide", atc: "D10AE01", cls: "Topical antibacterial / keratolytic for acne",
  linked: [["Acne vulgaris (mild)", "First-line topical, alone or with clindamycin [FDA][BT-STG]", ""]],
  forms: ["Gel, lotion, cream, wash 2.5–10% (OTC) [FDA].", "Combinations with clindamycin, adapalene or erythromycin (prescription) [FDA]."],
  moa: "Releases oxygen radicals that kill Cutibacterium acnes, with mild comedolytic action [NEP].",
  pk: ["Acts on the skin; little systemic absorption [NEP]."],
  ind: { adult: ["Treatment and management of acne [FDA]."], paed: ["Acne in adolescents (OTC products; Rx combinations from 12 years) [FDA]."] },
  adult: [["Acne (leave-on 2.5–10%)", "Cover the whole affected area with a thin layer once daily at first, then two or three times daily if needed. Reduce to once daily or every other day if dry or peeling [FDA]."], ["Clindamycin 1.2%/BPO 2.5% gel", "Pea-sized amount to the face once daily; not studied beyond 12 weeks [FDA]."]],
  paed: { tiers: ["Adolescents: as adults [FDA].", "Clindamycin/BPO gel: 12 years and over [FDA]."], transition: "Same use [FDA].", calcNote: "Topical — no weight calculation." },
  adj: { renal: "Not applicable (topical). [NEP]", hepatic: "Not applicable (topical). [NEP]", preg: "Not established in primary source. [NEP]", other: "Bleaches hair and fabrics [NEP]. Use sunscreen; avoid eyes, lips and broken skin [FDA]." },
  tox: { human: "If swallowed, get medical help [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Wash off; supportive [NEP]." },
  contra: ["Very sensitive skin or known sensitivity to benzoyl peroxide (OTC: do not use) [FDA].", "Clindamycin combination: history of regional enteritis, ulcerative colitis or antibiotic-associated colitis [FDA]."],
  ae: { common: ["Dryness, peeling, redness, irritation — worse with other topical acne drugs [FDA]."], serious: ["Rare allergic reactions (throat tightness, breathing difficulty, swelling) [NEP]", "Colitis with clindamycin combination [FDA]"] },
  monitor: ["Skin irritation [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "2.5% or 5% gel.", stg: "Bhutan STG 2024: for mild acne, clindamycin gel and 2.5% or 5% benzoyl peroxide gel alone or together [BT-STG]." },
  calc: [],
  sources: [["FDA", "Benzoyl peroxide 5% acne lotion — Drug Facts under FDA OTC monograph M006 (acne drug products), label effective 2026-10-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=039ac054-3eb2-5beb-e063-6394a90a561a"], ["FDA", "Clindamycin phosphate 1.2% and benzoyl peroxide 2.5% gel — Sun Pharma (ANDA206575), label effective 2025-07-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a98fc1e-be75-4c22-a7a7-2e4f033b3701"], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "First-line topical for mild acne, alone or with clindamycin.",
    adult: [
      { ind: "Mild acne (2.5–10% leave-on)", text: "Thin layer over the whole affected area once daily, building up to two or three times daily. Cut back if very dry or peeling. Use sunscreen." },
      { ind: "With clindamycin (1.2%/2.5% gel)", text: "Pea-sized amount to the face once daily (12 years and over)." }
    ],
    child: [{ ind: "Adolescents", text: "As adults." }] }
});

/* ---------- BENZYLPENICILLIN (FDA penicillin G potassium injection, Baxter, NDA050638, eff. 2026-07-24) ---------- */
FDB_M("benzylpenicillin", {
  inn: "Benzylpenicillin", atc: "J01CE01", cls: "Natural penicillin (IV/IM)",
  linked: [["Streptococcal, pneumococcal and meningococcal infections (pneumonia, meningitis, endocarditis)", "First-line where susceptible [FDA]", ""], ["Neurosyphilis and congenital syphilis", "IV treatment [FDA]", ""], ["Tetanus, gas gangrene, diphtheria, anthrax, actinomycosis", "Adjunct or treatment [FDA]", ""]],
  forms: ["Powder for injection 1, 5 and 20 million units; premixed IV bags [FDA].", "Bhutan: 3 g (5 million IU) powder [BT-NEML]."],
  moa: "Bactericidal — inhibits bacterial cell-wall synthesis during multiplication [FDA].",
  pk: ["Short half-life — give every 4–6 h (every 2 h in meningococcal meningitis/septicaemia) [FDA].", "Excreted by the kidneys; half-life 7–10 h in anuria; removed by haemodialysis [FDA].", "Probenecid prolongs levels [FDA]."],
  ind: { adult: ["Serious infections due to susceptible organisms: streptococci (incl. pneumococcus), susceptible staphylococci, meningococcus, gonococcus, clostridia, anthrax, actinomycosis, diphtheria, syphilis, Listeria, Pasteurella, Erysipelothrix [FDA]."], paed: ["Same; weight-based dosing [FDA]."] },
  adult: [["Serious streptococcal infection (incl. pneumococcal meningitis, endocarditis)", "12–24 million units/day IV in equal doses every 4–6 h [FDA]."], ["Staphylococcal (penicillin-susceptible)", "5–24 million units/day every 4–6 h [FDA]."], ["Anthrax", "At least 8 million units/day, every 6 h [FDA]."], ["Clostridial (gas gangrene, tetanus adjunct, botulism adjunct)", "20 million units/day [FDA]."], ["Infective endocarditis (Bhutan STG)", "24 million units/day IV in doses every 4 h [BT-STG]."]],
  paed: { tiers: ["Serious streptococcal/meningococcal infection (pneumonia, endocarditis): 150,000–300,000 units/kg/day every 4–6 h [FDA].", "Pneumococcal/meningococcal meningitis: 250,000 units/kg/day every 4 h for 7–14 days (maximum 12–20 million units/day) [FDA].", "Congenital syphilis or neurosyphilis after the newborn period: 50,000 units/kg every 4–6 h for 10–14 days [FDA].", "Diphtheria: 150,000–250,000 units/kg/day every 6 h for 7–10 days [FDA]."], transition: "Adult doses when the weight-based dose reaches the adult range [FDA].", calcNote: "Units per kg per day, divided." },
  adj: { renal: "Severe impairment only: CrCl under 10 — full loading dose, then half of it every 8–10 h. Uraemic with CrCl over 10 — loading dose, then half every 4–5 h [FDA].", hepatic: "Further reduction if liver disease accompanies kidney impairment [FDA].", preg: "Not established in primary source. [NEP]", other: "The potassium salt adds potassium — watch in kidney failure [FDA]." },
  tox: { human: "Massive doses (40–100 million units/day), especially in kidney failure: agitation, confusion, asterixis, hallucinations, myoclonus, seizures, encephalopathy; hyperkalaemia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the drug; supportive care; haemodialysis lowers levels [FDA]." },
  contra: ["History of anaphylactic reaction to any penicillin [FDA].", "Dextrose-containing premix: corn allergy [FDA]."],
  ae: { common: ["Injection-site reactions, rash [NEP]."], serious: ["Anaphylaxis [FDA]", "Jarisch–Herxheimer reaction in syphilis/spirochaetal infection [FDA]", "Seizures at high doses in kidney failure [FDA]", "Hyperkalaemia (potassium salt) [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Kidney function and electrolytes on high doses [FDA].", "Allergy history [FDA]."],
  local: { neml: "Benzylpenicillin 3 g (5 million IU) powder for injection is on the Bhutan NEML 2025 [BT-NEML].", strengths: "5 million IU (3 g) vial.", stg: "STG 2024 uses benzylpenicillin e.g. 24 million units/day IV every 4 h (endocarditis) and 6 lakh units IM every 6 h (adult, where ceftriaxone is not available) [BT-STG]." },
  calc: [
    { drug: "benzylpenicillin", indication_id: "adult_strep", label: "Adult serious infection — 4 million units IV every 4 h (24 MU/day)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 4000000, unit: "units", per: "dose" }, interval_h: 4, divided_doses: 6, caps: { max_single: 4000000, max_daily: 24000000, unit: "units" }, weight_basis: "NEP", formulations: [], rounding: "To 0.5 million units", renal: [{ crcl_min: 0, crcl_max: 9.999, action: "reduce_dose", factor: 0.5, interval_h: 8 }], renal_note: "CrCl under 10: full loading dose, then half of it every 8–10 h.", flags: [], sources: ["FDA", "BT-STG"] },
    { drug: "benzylpenicillin", indication_id: "child_serious", label: "Child serious infection — 300,000 units/kg/day every 4 h", route: "IV", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 300000, unit: "units", per: "day" }, interval_h: 4, divided_doses: 6, caps: { max_single: 4000000, max_daily: 24000000, adult_ceiling_single: 4000000, adult_ceiling_daily: 24000000, unit: "units" }, weight_basis: "actual", formulations: [], rounding: "To 10,000 units [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "benzylpenicillin", indication_id: "child_mening", label: "Child meningitis — 250,000 units/kg/day every 4 h (max 20 MU/day)", route: "IV", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 250000, unit: "units", per: "day" }, interval_h: 4, divided_doses: 6, caps: { max_daily: 20000000, adult_ceiling_daily: 20000000, unit: "units" }, weight_basis: "actual", formulations: [], rounding: "To 10,000 units [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Penicillin G potassium injection USP — Baxter (NDA050638), label effective 2026-07-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9e58122f-5c75-4905-a774-d3a4dae4ff8c"], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "IV penicillin for serious streptococcal, pneumococcal and meningococcal infections, neurosyphilis and more.",
    adult: [
      { ind: "Serious streptococcal infection, meningitis, endocarditis", text: "12–24 million units a day IV, divided every 4–6 hours (meningococcal: every 2 h).", calc: ["adult_strep"] },
      { ind: "Staphylococcal (susceptible)", text: "5–24 million units a day, every 4–6 hours." },
      { ind: "Severe kidney failure (CrCl under 10)", text: "Full loading dose, then half of it every 8–10 hours." }
    ],
    child: [
      { ind: "Serious infection (pneumonia, endocarditis)", text: "150,000–300,000 units/kg a day, divided every 4–6 hours.", calc: ["child_serious"] },
      { ind: "Pneumococcal or meningococcal meningitis", text: "250,000 units/kg a day, every 4 hours, for 7–14 days. Maximum 12–20 million units a day.", calc: ["child_mening"] },
      { ind: "Congenital syphilis / neurosyphilis (after the newborn period)", text: "50,000 units/kg every 4–6 hours for 10–14 days." }
    ] }
});

/* ---------- BEROTRALSTAT (FDA ORLADEYO, BioCryst, NDA214094, eff. 2026-10-23) ---------- */
FDB_M("berotralstat", {
  inn: "Berotralstat", atc: "B06AC06", cls: "Plasma kallikrein inhibitor (oral)",
  linked: [["Hereditary angioedema — prevention of attacks", "Long-term prophylaxis [FDA]", ""]],
  forms: ["Capsules 150 mg and 110 mg [FDA].", "Oral pellets 72, 96, 108, 132 and 150 mg [FDA]."],
  moa: "Inhibits plasma kallikrein, reducing bradykinin production [NEP].",
  pk: ["Median half-life about 93 h [FDA].", "Take with food [FDA]."],
  ind: { adult: ["Prophylaxis of HAE attacks; not for treating acute attacks [FDA]."], paed: ["2 years and over [FDA]."] },
  adult: [["HAE prophylaxis", "150 mg once daily with food. Do not take extra doses — QT prolongation at higher doses [FDA]."]],
  paed: { tiers: ["12 years and over: 150 mg once daily [FDA].", "2 to under 12 years (oral pellets): 12–<24 kg 72 mg; 24–<32 kg 96 mg; 32–<40 kg 108 mg; 40 kg+ 132 mg, once daily with food [FDA]."], transition: "150 mg from 12 years [FDA].", calcNote: "Weight bands for 2–11 years." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Mild: no change. Moderate or severe (Child-Pugh B/C), 12 years and over: 110 mg once daily with food; children 2–11: reduced pellet dose per label [FDA].", preg: "Not established in primary source. [NEP]", other: "Persistent GI side effects: dose modification per label section 2.4 [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; ECG monitoring [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Abdominal pain, vomiting, diarrhoea, back pain, gastro-oesophageal reflux [FDA]."], serious: ["QTc prolongation at higher-than-recommended doses [FDA]"] },
  monitor: ["Attack frequency [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "berotralstat", indication_id: "adult", label: "12 years+ — 150 mg once daily with food", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 150, max_daily: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 150, unit: "mg/cap" }], rounding: "Whole capsule", renal: [], flags: [], sources: ["FDA"] },
    { drug: "berotralstat", indication_id: "child", label: "2–11 years — oral pellets by weight, once daily", route: "PO", population: { min_age_months: 24, max_age_months: 144, min_weight_kg: 12, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1,
      bands: [{ min_weight_kg: 12, max_weight_kg: 24, text: "72 mg once daily", daily: 72 }, { min_weight_kg: 24, max_weight_kg: 32, text: "96 mg once daily", daily: 96 }, { min_weight_kg: 32, max_weight_kg: 40, text: "108 mg once daily", daily: 108 }, { min_weight_kg: 40, max_weight_kg: null, text: "132 mg once daily", daily: 132 }],
      caps: { max_single: 132, max_daily: 132, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Unit-dose pellet packet", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ORLADEYO (berotralstat) capsules and oral pellets — BioCryst, label effective 2026-10-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3527ece1-e7e0-40b1-b0c5-6baeb0deabeb"]],
  dose: { tagline: "Once-daily oral prevention of hereditary angioedema attacks.",
    adult: [{ ind: "HAE prophylaxis (12 years and over)", text: "150 mg once daily with food. No extra doses; not for acute attacks.", calc: ["adult"] }],
    child: [{ ind: "2 to under 12 years (pellets)", text: "12–<24 kg 72 mg; 24–<32 kg 96 mg; 32–<40 kg 108 mg; 40 kg+ 132 mg — once daily with food.", calc: ["child"] }] }
});

/* ---------- BESIFLOXACIN (FDA BESIVANCE 0.6% eye suspension, NDA022308) ---------- */
FDB_M("besifloxacin", {
  inn: "Besifloxacin", atc: "S01AE08", cls: "Fluoroquinolone antibacterial (ophthalmic)",
  linked: [["Bacterial conjunctivitis", "Topical eye antibiotic [FDA]", ""]],
  forms: ["Ophthalmic suspension 0.6% (6 mg/mL) [FDA]."],
  moa: "Inhibits bacterial DNA gyrase and topoisomerase IV [NEP].",
  pk: ["Plasma half-life about 7 h after eye dosing; systemic levels very low [FDA]."],
  ind: { adult: ["Bacterial conjunctivitis due to susceptible organisms [FDA]."], paed: ["Studied from 1 year [FDA]."] },
  adult: [["Bacterial conjunctivitis", "Shake once; 1 drop in the affected eye(s) 3 times a day, 4–12 h apart, for 7 days [FDA]."]],
  paed: { tiers: ["1 year and over: as adults [FDA]."], transition: "Same dose [FDA].", calcNote: "Eye drops — no weight calculation." },
  adj: { renal: "Not applicable (eye drops). [NEP]", hepatic: "Not applicable (eye drops). [NEP]", preg: "Not established in primary source. [NEP]", other: "No contact lenses during treatment [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Conjunctival redness, blurred vision, eye pain, irritation, itching, headache [NEP]."], serious: ["Overgrowth of resistant organisms including fungi with prolonged use [FDA]"] },
  monitor: ["Response; slit-lamp examination if no improvement [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "BESIVANCE (besifloxacin ophthalmic suspension) 0.6% — label effective 2026-07-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f312ddb2-3173-4c2c-bf1b-4ade8fb75d94"]],
  dose: { tagline: "Fluoroquinolone eye drops for bacterial conjunctivitis.",
    adult: [{ ind: "Bacterial conjunctivitis", text: "1 drop in the affected eye(s) 3 times a day, 4–12 hours apart, for 7 days. Shake first." }],
    child: [{ ind: "1 year and over", text: "As adults." }] }
});

/* ---------- BETAINE (FDA CYSTADANE, Recordati, NDA020576, eff. 2026-04-24) ---------- */
FDB_M("betaine", {
  inn: "Betaine", atc: "A16AA06", cls: "Methyl-group donor for homocystinuria",
  linked: [["Homocystinuria (CBS deficiency, MTHFR deficiency, cobalamin defects)", "Lowers plasma homocysteine [FDA]", ""]],
  forms: ["Powder for oral solution, 180 g bottle with measuring scoop [FDA]."],
  moa: "Donates a methyl group to remethylate homocysteine to methionine [FDA].",
  pk: ["Dissolve in 4–6 oz of water, juice, milk or formula, or mix with food, and take at once [FDA]."],
  ind: { adult: ["Homocystinuria, to lower homocysteine [FDA]."], paed: ["All ages [FDA]."] },
  adult: [["Homocystinuria (3 years and over)", "6 g/day — 3 g twice daily. Increase gradually until total homocysteine is undetectable or low [FDA]."]],
  paed: { tiers: ["3 years and over: 3 g twice daily [FDA].", "Under 3 years: start 50 mg/kg twice daily (100 mg/kg/day), increase weekly by 50 mg/kg [FDA]."], transition: "Fixed 6 g/day from 3 years [FDA].", calcNote: "Under 3 years: mg/kg starting dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "CBS deficiency: keep methionine under 1,000 µmol/L — cerebral oedema reported with hypermethioninaemia [FDA]." },
  tox: { human: "No information on human overdose [FDA].", animal: "Rats: deaths frequent at 10 g/kg or more [FDA].", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, GI distress [FDA]."], serious: ["Hypermethioninaemia with cerebral oedema (CBS deficiency) [FDA]"] },
  monitor: ["Plasma total homocysteine [FDA].", "Plasma methionine in CBS deficiency [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "betaine", indication_id: "std", label: "3 years+ — 3 g twice daily", route: "PO", population: { min_age_months: 36, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 3000, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 3000, max_daily: 6000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Measuring scoop", renal: [], flags: [], sources: ["FDA"] },
    { drug: "betaine", indication_id: "infant", label: "Under 3 years — start 50 mg/kg twice daily", route: "PO", population: { min_age_months: null, max_age_months: 36, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [], rounding: "To 10 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CYSTADANE (betaine anhydrous for oral solution) — Recordati Rare Diseases, label effective 2026-04-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=31a684d0-cd98-4e46-b43a-ccbd17c41559"]],
  dose: { tagline: "Oral powder that lowers homocysteine in homocystinuria.",
    adult: [{ ind: "Homocystinuria", text: "3 g twice daily (6 g a day), dissolved in a drink. Titrate to plasma homocysteine.", calc: ["std"] }],
    child: [
      { ind: "3 years and over", text: "3 g twice daily.", calc: ["std"] },
      { ind: "Under 3 years", text: "Start 50 mg/kg twice daily; increase by 50 mg/kg each week as needed.", calc: ["infant"] }
    ] }
});

/* ---------- BETAMETHASONE (FDA: dipropionate 0.05% topical NDA019141; CELESTONE SOLUSPAN injection NDA014602) ---------- */
FDB_M("betamethasone", {
  inn: "Betamethasone", atc: "H02AB01", cls: "Corticosteroid (potent topical; long-acting systemic glucocorticoid)",
  linked: [["Steroid-responsive dermatoses (eczema, psoriasis)", "Potent topical steroid [FDA]", ""], ["Systemic steroid-responsive conditions", "IM/intra-articular injection [FDA]", ""], ["Threatened preterm birth — fetal lung maturation", "Antenatal corticosteroid [UNVERIFIED-KNOWLEDGE]", ""]],
  forms: ["Betamethasone dipropionate 0.05% ointment, cream, lotion [FDA].", "Injectable suspension 6 mg/mL (3 mg betamethasone as sodium phosphate + 3 mg as acetate per mL) — CELESTONE SOLUSPAN [FDA]."],
  moa: "Glucocorticoid receptor agonist — anti-inflammatory and immunosuppressive [NEP].",
  pk: ["Topical: can be absorbed enough to cause systemic effects [FDA]."],
  ind: { adult: ["Topical: inflammatory and itchy steroid-responsive dermatoses [FDA].", "Injection: steroid-responsive conditions; intra-articular/soft-tissue use [FDA]."], paed: ["Topical: use the least amount; children absorb more [NEP]."] },
  adult: [["Topical dipropionate 0.05%", "Thin film once daily; twice daily if needed. Do not occlude [FDA]."], ["Injection (CELESTONE SOLUSPAN)", "Initial 0.25–9 mg/day depending on the disease; individualise and taper to the lowest effective dose [FDA]."], ["Antenatal (fetal lung maturity)", "12 mg IM, two doses 24 h apart [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Topical: shortest time, smallest area [NEP].", "Injection: individualised; avoid benzyl alcohol diluents in neonates [FDA]."], transition: "—", calcNote: "No weight calculation." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Do not stop systemic steroids abruptly [FDA]." },
  tox: { human: "Topical steroids can be absorbed enough to produce systemic effects [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce or withdraw slowly [NEP]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Topical: burning, itching, irritation, dryness, folliculitis, acneiform eruptions, hypopigmentation, perioral dermatitis, skin atrophy, striae [FDA]."], serious: ["HPA-axis suppression [FDA]", "Systemic use: infections, myopathy, psychiatric effects, bone loss [FDA]"] },
  monitor: ["Area and duration of topical use, especially in children [NEP].", "Glucose, BP and mood with systemic use [NEP]."],
  local: { neml: "Betamethasone dipropionate 0.05% is on the Bhutan NEML 2025 (supplied to regional referral hospitals) [BT-NEML].", strengths: "0.05% topical.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Betamethasone dipropionate ointment 0.05% — Fougera (NDA019141), label effective 2026-07-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0173ed23-9f7c-466e-9eba-f6859d05f987"], ["FDA", "CELESTONE SOLUSPAN (betamethasone sodium phosphate and acetate) injectable suspension — label effective 2026-04-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=95a19c2f-c329-4ce1-a0a7-174814aac3ad"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Potent topical steroid for dermatoses; also a long-acting injectable steroid.",
    adult: [
      { ind: "Skin (dipropionate 0.05%)", text: "Thin film once daily, twice if needed. No occlusive dressings." },
      { ind: "Injection", text: "0.25–9 mg a day initially, depending on the condition; taper to the lowest effective dose." },
      { ind: "Antenatal fetal lung maturation", text: "12 mg IM, 2 doses 24 hours apart (to be verified)." }
    ],
    child: [{ ind: "Children", text: "Topical: smallest amount for the shortest time." }] }
});

/* ---------- BETAXOLOL (FDA BETOPTIC S 0.25% eye suspension, Novartis, NDA019845, eff. 2025-01-22) ---------- */
FDB_M("betaxolol", {
  inn: "Betaxolol", atc: "S01ED02", cls: "Cardioselective (beta-1) beta-blocker — ophthalmic",
  linked: [["Open-angle glaucoma / ocular hypertension", "IOP-lowering eye drop [FDA]", ""]],
  forms: ["Ophthalmic suspension 0.25% (2.5 mg/mL), 10 and 15 mL [FDA]."],
  moa: "Cardioselective beta-1 blocker; lowers aqueous humour production [FDA].",
  pk: ["Absorbed systemically — beta-blocker effects possible (bradycardia, bronchospasm) [FDA].", "Additive with oral beta-blockers and catecholamine-depleting drugs [FDA]."],
  ind: { adult: ["Raised IOP in chronic open-angle glaucoma or ocular hypertension [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Glaucoma / ocular hypertension", "1 drop in the affected eye(s) twice daily; shake well. Give other eye drops at least 10 min before [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Eye drops — no weight calculation." },
  adj: { renal: "Not applicable (eye drops). [NEP]", hepatic: "Not applicable (eye drops). [NEP]", preg: "Limited data; oral beta-blockers linked to growth restriction — use only if benefit justifies risk [FDA].", other: "May mask hypoglycaemia and thyrotoxicosis [FDA]." },
  tox: { human: "No human overdose data; expect bradycardia, hypotension, bronchospasm, heart failure [FDA].", animal: "Oral LD50 350–920 mg/kg (mice), 860–1,050 mg/kg (rats) [FDA].", manage: "Flush eye with warm water; symptomatic and supportive care [FDA]." },
  contra: ["Sinus bradycardia, AV block above first degree, cardiogenic shock, overt cardiac failure [FDA].", "Hypersensitivity to any component [FDA]."],
  ae: { common: ["Transient eye discomfort [FDA]."], serious: ["Bradycardia, heart failure, bronchospasm from systemic absorption [FDA]"] },
  monitor: ["IOP; pulse; breathing in reactive airway disease [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "BETOPTIC S (betaxolol ophthalmic suspension) 0.25% — Novartis, label effective 2025-01-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=905ba189-456c-4aa4-8231-39a971374ad8"]],
  dose: { tagline: "Cardioselective beta-blocker eye drop for glaucoma.",
    adult: [{ ind: "Open-angle glaucoma or ocular hypertension", text: "1 drop in the affected eye(s) twice daily. Shake well." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BETHANECHOL (FDA tablets, Upsher-Smith, ANDA040633–6, eff. 2026-09-10) ---------- */
FDB_M("bethanechol", {
  inn: "Bethanechol", atc: "N07AB02", cls: "Cholinergic (muscarinic) agonist",
  linked: [["Urinary retention — postoperative/postpartum (non-obstructive) or neurogenic atonic bladder", "Treatment [FDA]", ""]],
  forms: ["Tablets 5, 10 and 25 mg [FDA]; 50 mg also marketed [NEP]."],
  moa: "Stimulates muscarinic receptors, increasing detrusor tone and GI motility [NEP].",
  pk: ["Onset within 30 min; peak 60–90 min; effect lasts about 1 h [FDA].", "Give on an empty stomach (nausea and vomiting if taken after food) [FDA].", "Ganglion blockers: risk of a critical fall in blood pressure [FDA]."],
  ind: { adult: ["Acute postoperative and postpartum non-obstructive urinary retention; neurogenic atony of the bladder with retention [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Urinary retention", "10–50 mg three or four times a day. To find the minimum effective dose: 5–10 mg, repeated hourly until response or 50 mg in total [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Only when there is no mechanical obstruction [FDA]." },
  tox: { human: "Abdominal discomfort, salivation, flushing, sweating, nausea, vomiting [FDA].", animal: "Oral LD50 1,510 mg/kg in the mouse [FDA].", manage: "Atropine is the specific antidote (SC preferred; IV in emergencies): adults 0.6 mg, repeat every 2 h as needed; children up to 12 years 0.01 mg/kg (max 0.4 mg) every 2 h [FDA]." },
  contra: ["Hypersensitivity; hyperthyroidism; peptic ulcer; asthma; marked bradycardia or hypotension; coronary artery disease; epilepsy; parkinsonism [FDA].", "Mechanical obstruction, or doubtful integrity of bowel or bladder wall (e.g. after recent surgery) [FDA]."],
  ae: { common: ["Abdominal cramps, nausea, belching, diarrhoea, salivation, urinary urgency, headache, flushing, sweating [FDA]."], serious: ["Hypotension with reflex tachycardia [FDA]", "Bronchospasm [FDA]"] },
  monitor: ["Urine output and residual volume; blood pressure [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bethanechol", indication_id: "ret", label: "Urinary retention — 10–50 mg three or four times daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose", value_max: 50 }, interval_h: 6, divided_doses: 4, caps: { max_single: 50, max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Bethanechol chloride tablets — Upsher-Smith (ANDA040633–6), label effective 2026-09-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80393410-dd51-4cac-b27c-50ece00cca37"]],
  dose: { tagline: "Oral cholinergic for non-obstructive urinary retention.",
    adult: [{ ind: "Non-obstructive urinary retention", text: "10–50 mg three or four times a day, on an empty stomach. Find the lowest dose by giving 5–10 mg hourly (maximum 50 mg) until it works.", calc: ["ret"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BETIBEGLOGENE AUTOTEMCEL (FDA ZYNTEGLO, BLA125717, eff. 2026-07-21) ---------- */
FDB_M("betibeglogene-autotemcel", {
  inn: "Betibeglogene autotemcel", atc: "B06AX02", cls: "Autologous haematopoietic stem-cell gene therapy",
  linked: [["Transfusion-dependent β-thalassaemia", "One-time gene therapy [FDA]", ""]],
  forms: ["Cell suspension for IV infusion, up to 4 bags (about 20 mL each) [FDA]."],
  moa: "Adds functional modified β-globin gene copies (βA-T87Q) to the patient's own CD34+ stem cells via lentiviral vector [FDA].",
  pk: ["Single infusion; engraftment over weeks [FDA]."],
  ind: { adult: ["β-thalassaemia requiring regular red-cell transfusions [FDA]."], paed: ["Same, children [FDA]."] },
  adult: [["β-thalassaemia", "One infusion of at least 5.0 × 10⁶ CD34+ cells/kg after full myeloablative conditioning; VOD prophylaxis recommended; consider seizure prophylaxis [FDA]."]],
  paed: { tiers: ["As adults (cell dose per kg) [FDA]."], transition: "—", calcNote: "Cell dose — not calculated here." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Do not give in pregnancy [FDA].", other: "Stop antiretrovirals and hydroxyurea 1 month before mobilisation; stop iron chelators 7 days before conditioning [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Mucositis, febrile neutropenia, vomiting, fever, alopecia, epistaxis (mostly from conditioning) [NEP]."], serious: ["Delayed platelet engraftment and bleeding [FDA]", "Neutrophil engraftment failure [FDA]", "Insertional oncogenesis — monitor at least 15 years [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["Platelets and neutrophils until engraftment [FDA].", "Haematological malignancy screening at least yearly for 15 years [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ZYNTEGLO (betibeglogene autotemcel) suspension for IV infusion — label effective 2026-07-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=86931613-c262-47f5-8202-bc31fa69ad3d"]],
  dose: { tagline: "One-time gene therapy for transfusion-dependent β-thalassaemia.",
    adult: [{ ind: "Transfusion-dependent β-thalassaemia", text: "Single IV infusion of at least 5.0 × 10⁶ CD34+ cells/kg after myeloablative conditioning." }],
    child: [{ ind: "Children", text: "As adults (specialist centres)." }] }
});

/* ---------- BEVACIZUMAB (FDA AVASTIN IV, Genentech, BLA125085; LYTENAVA intravitreal BLA761320) ---------- */
FDB_M("bevacizumab", {
  inn: "Bevacizumab", atc: "L01FG01", cls: "VEGF-A inhibitor — monoclonal antibody",
  linked: [["Metastatic colorectal cancer", "With chemotherapy [FDA]", ""], ["Non-squamous NSCLC, glioblastoma, renal cell, cervical, ovarian/peritoneal, hepatocellular cancers", "With other therapy [FDA]", ""], ["Neovascular (wet) age-related macular degeneration", "Intravitreal (LYTENAVA) [FDA]", ""]],
  forms: ["IV concentrate 100 mg/4 mL and 400 mg/16 mL (25 mg/mL) [FDA].", "Intravitreal 1.25 mg/0.05 mL (LYTENAVA) [FDA].", "Biosimilars available [NEP]."],
  moa: "Binds VEGF-A and blocks its receptors, inhibiting angiogenesis [FDA].",
  pk: ["Half-life about 20 days (range 11–50) [FDA]."],
  ind: { adult: ["Colorectal, lung (non-squamous NSCLC), glioblastoma, renal cell, cervical, ovarian/fallopian/peritoneal and hepatocellular cancers, as labelled [FDA].", "Wet AMD (intravitreal) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Metastatic colorectal cancer", "5 or 10 mg/kg every 2 weeks (or 7.5 mg/kg every 3 weeks after first-line), with chemotherapy [FDA]."], ["Non-squamous NSCLC; cervical; ovarian (first-line)", "15 mg/kg every 3 weeks with chemotherapy [FDA]."], ["Glioblastoma; renal cell", "10 mg/kg every 2 weeks [FDA]."], ["Wet AMD (LYTENAVA)", "1.25 mg intravitreal once monthly [FDA]."], ["Surgery", "Stop at least 28 days before elective surgery; do not give for 28 days after major surgery and until healed [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/kg actual weight." },
  adj: { renal: "Withhold for proteinuria ≥2 g/24 h; stop for nephrotic syndrome [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "May cause fetal harm [FDA].", other: "Withhold if hypertension uncontrolled [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["IV: none [FDA].", "Intravitreal: ocular/periocular infection, active intraocular inflammation, hypersensitivity [FDA]."],
  ae: { common: ["Epistaxis, headache, hypertension, rhinitis, proteinuria, taste change, dry skin, haemorrhage, back pain [FDA]."], serious: ["GI perforation and fistula [FDA]", "Wound-healing complications [FDA]", "Severe or fatal haemorrhage [FDA]", "Arterial and venous thromboembolism [FDA]", "Hypertensive crisis, PRES [FDA]", "Nephrotic syndrome; infusion reactions [FDA]"] },
  monitor: ["Blood pressure [FDA].", "Urine protein [FDA].", "Wound healing [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "bevacizumab", indication_id: "q2w5", label: "5 mg/kg IV every 2 weeks (colorectal)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "bevacizumab", indication_id: "q2w10", label: "10 mg/kg IV every 2 weeks (colorectal, glioblastoma, renal)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "bevacizumab", indication_id: "q3w15", label: "15 mg/kg IV every 3 weeks (lung, cervical, ovarian)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "AVASTIN (bevacizumab) injection for IV use — Genentech, label effective 2025-01-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=939b5d1f-9fb2-4499-80ef-0607aa6b114e"], ["FDA", "LYTENAVA (bevacizumab-vikg) intravitreal injection — Outlook Therapeutics, label effective 2026-10-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f9a3014-b3d4-4943-a83a-92a77d8f947c"]],
  dose: { tagline: "Anti-VEGF antibody: IV for several cancers; intravitreal for wet macular degeneration.",
    adult: [
      { ind: "Metastatic colorectal cancer", text: "5 or 10 mg/kg IV every 2 weeks with chemotherapy (7.5 mg/kg every 3 weeks in second line).", calc: ["q2w5", "q2w10"] },
      { ind: "Lung (non-squamous), cervical, ovarian", text: "15 mg/kg IV every 3 weeks with chemotherapy.", calc: ["q3w15"] },
      { ind: "Glioblastoma, renal cell", text: "10 mg/kg IV every 2 weeks.", calc: ["q2w10"] },
      { ind: "Wet AMD (intravitreal)", text: "1.25 mg (0.05 mL) once monthly." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BEXAGLIFLOZIN (FDA, NDA214373 = BRENZAVVY, eff. 2026-07-30) ---------- */
FDB_M("bexagliflozin", {
  inn: "Bexagliflozin", atc: "A10BK08", cls: "SGLT2 inhibitor",
  linked: [["Type 2 diabetes", "Oral glucose-lowering add-on [FDA]", ""]],
  forms: ["Tablets 20 mg [FDA]."],
  moa: "Inhibits SGLT2 in the proximal tubule, increasing urinary glucose excretion [FDA].",
  pk: ["Half-life about 12 h [FDA].", "UGT inducers (e.g. rifampicin) lower exposure [FDA].", "With insulin or sulfonylureas: risk of hypoglycaemia — consider lower doses of those [FDA]."],
  ind: { adult: ["Type 2 diabetes, with diet and exercise [FDA].", "Not for type 1 diabetes [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Type 2 diabetes", "20 mg once daily in the morning, with or without food; do not crush or chew [FDA]."], ["Before surgery", "Withhold at least 3 days before surgery or prolonged fasting [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Check eGFR first. Not recommended if eGFR under 30 [FDA].", hepatic: "Not recommended in severe liver impairment [FDA].", preg: "Not recommended in the second and third trimesters; not while breastfeeding [FDA].", other: "Correct volume depletion before starting [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; dialysis not studied [FDA]." },
  contra: ["Hypersensitivity to bexagliflozin or any excipient [FDA]."],
  ae: { common: ["Genital fungal infections, urinary tract infection, increased urination [NEP]."], serious: ["Ketoacidosis (may be euglycaemic) [FDA]", "Lower-limb amputation [FDA]", "Volume depletion and AKI [FDA]", "Urosepsis, pyelonephritis, Fournier's gangrene [FDA]", "Hypoglycaemia with insulin/secretagogues [FDA]"] },
  monitor: ["Kidney function [FDA].", "Ketones if at risk [FDA].", "Feet for ulcers or infection [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bexagliflozin", indication_id: "t2d", label: "Type 2 diabetes — 20 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 20, max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "eGFR under 30: not recommended." }], renal_note: "The label uses eGFR; the app's kidney estimate is used as a stand-in.", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Bexagliflozin tablets (NDA214373, BRENZAVVY) — label effective 2026-07-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a3ba9d5-1009-bad0-e063-6294a90ac4cc"]],
  dose: { tagline: "Once-daily SGLT2 inhibitor tablet for type 2 diabetes.",
    adult: [{ ind: "Type 2 diabetes", text: "20 mg once daily in the morning. Not if eGFR under 30. Hold 3 days before surgery.", calc: ["t2d"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BEXAROTENE (FDA TARGRETIN capsules, Bausch, NDA021055, eff. 2020-04-30) ---------- */
FDB_M("bexarotene", {
  inn: "Bexarotene", atc: "L01XF03", cls: "Retinoid X receptor (RXR) agonist — retinoid",
  linked: [["Cutaneous T-cell lymphoma (skin manifestations), refractory", "Oral retinoid [FDA]", ""]],
  forms: ["Capsules 75 mg [FDA].", "Gel 1% (separate product) [NEP]."],
  moa: "Selectively activates retinoid X receptors, regulating cell differentiation and proliferation [FDA].",
  pk: ["Half-life about 7 h [FDA].", "Take once daily with a meal [FDA].", "Gemfibrozil raises levels — avoid together [FDA].", "May induce CYP3A4 and lower hormonal contraceptive levels — use non-hormonal contraception [FDA]."],
  ind: { adult: ["Skin manifestations of CTCL refractory to at least one systemic therapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["CTCL", "300 mg/m²/day as a single daily dose with a meal; reduce to 200 then 100 mg/m²/day, or pause, for toxicity [FDA]."], ["Capsule table (300 mg/m²)", "BSA 0.88–1.12 → 300 mg (4 caps); 1.13–1.37 → 375 mg; 1.38–1.62 → 450 mg; 1.63–1.87 → 525 mg; 1.88–2.12 → 600 mg; 2.13–2.37 → 675 mg; 2.38–2.62 → 750 mg [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/m² (needs height); give whole 75 mg capsules." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Interrupt or stop if liver tests over 3 × ULN [FDA].", preg: "Contraindicated — retinoid birth defects (boxed) [FDA].", other: "Get fasting lipids before and during treatment [FDA]." },
  tox: { human: "Up to 1,000 mg/m²/day short-term without acute toxicity [FDA].", animal: "Single doses of 1,500 mg/kg (rats) and 720 mg/kg (dogs) tolerated [FDA].", manage: "Supportive care [NEP]." },
  contra: ["Pregnancy [FDA].", "Known hypersensitivity to bexarotene [FDA]."],
  ae: { common: ["Hyperlipidaemia, hypothyroidism, headache, asthenia, rash, leucopenia [NEP]."], serious: ["Hypertriglyceridaemia and pancreatitis [FDA]", "Hepatotoxicity, cholestasis, liver failure [FDA]", "Hypothyroidism [FDA]", "Neutropenia; cataracts; photosensitivity [FDA]"] },
  monitor: ["Fasting lipids, thyroid function, liver tests, blood counts [FDA].", "Pregnancy tests in women who could conceive [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bexarotene", indication_id: "ctcl", label: "CTCL — 300 mg/m² once daily with a meal", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "cap", strength: 75, unit: "mg/cap" }], round_to: 75, rounding: "Nearest whole 75 mg capsule (label BSA table) [FDA]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "TARGRETIN (bexarotene) capsules — Bausch Health, label effective 2020-04-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1d056725-0576-4338-8089-6336e768ccdc"]],
  dose: { tagline: "Oral retinoid for refractory cutaneous T-cell lymphoma; never in pregnancy.",
    boxedTitle: "Birth defects",
    boxed: "TARGRETIN is a member of the retinoid class of drugs that is associated with birth defects in humans. Bexarotene also caused birth defects when administered orally to pregnant rats. TARGRETIN must not be administered to a pregnant woman.",
    adult: [{ ind: "Cutaneous T-cell lymphoma (refractory)", text: "300 mg/m² once daily with a meal, rounded to whole 75 mg capsules. Reduce to 200 then 100 mg/m² for toxicity.", calc: ["ctcl"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BEZLOTOXUMAB (FDA ZINPLAVA, Merck, BLA761046, eff. 2024-11-12) ---------- */
FDB_M("bezlotoxumab", {
  inn: "Bezlotoxumab", atc: "J06BC03", cls: "Monoclonal antibody against C. difficile toxin B",
  linked: [["Clostridioides difficile infection — prevention of recurrence", "Single infusion during antibiotic treatment [FDA]", ""]],
  forms: ["Injection 1,000 mg/40 mL (25 mg/mL) vial [FDA]."],
  moa: "Binds and neutralises C. difficile toxin B [FDA].",
  pk: ["Half-life about 19 days [FDA].", "No metabolic drug interactions expected [FDA]."],
  ind: { adult: ["Reduce CDI recurrence in high-risk patients receiving antibiotic treatment for CDI; not a treatment for CDI and not an antibacterial [FDA]."], paed: ["1 year and over [FDA]."] },
  adult: [["High-risk CDI", "Single dose 10 mg/kg IV over 60 min during the CDI antibiotic course, through a 0.2–5 micron low-protein-binding filter [FDA]."]],
  paed: { tiers: ["1 year and over: 10 mg/kg single dose [FDA]."], transition: "Same mg/kg [FDA].", calcNote: "One dose only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "No adequate human or animal data [FDA].", other: "History of heart failure: use only if benefit outweighs risk [FDA]." },
  tox: { human: "No clinical overdose experience [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor and treat symptoms [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Adults: nausea, fever, headache. Children: fever, headache [FDA]."], serious: ["Heart failure in patients with known CHF [FDA]"] },
  monitor: ["Heart failure symptoms in CHF patients [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bezlotoxumab", indication_id: "cdi", label: "10 mg/kg IV once", route: "IV", population: { min_age_months: 12, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], infusion: { duration_h: 1 }, rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "ZINPLAVA (bezlotoxumab) injection — Merck, label effective 2024-11-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f479bfe-2bfa-4cc5-9aee-1357364480b0"]],
  dose: { tagline: "One-time antibody infusion to cut C. difficile recurrence in high-risk patients.",
    adult: [{ ind: "C. difficile — high risk of recurrence", text: "10 mg/kg IV over 60 minutes, once, during the CDI antibiotic course.", calc: ["cdi"] }],
    child: [{ ind: "1 year and over", text: "10 mg/kg IV once.", calc: ["cdi"] }] }
});

/* ---------- BICALUTAMIDE (FDA tablets, NDA020498 = CASODEX, eff. 2026-04-23) ---------- */
FDB_M("bicalutamide", {
  inn: "Bicalutamide", atc: "L02BB03", cls: "Non-steroidal androgen receptor inhibitor (anti-androgen)",
  linked: [["Metastatic prostate cancer (stage D2)", "With an LHRH analogue (combined androgen blockade) [FDA]", ""]],
  forms: ["Tablets 50 mg [FDA]."],
  moa: "Competitively blocks androgen receptors in target tissue [FDA].",
  pk: ["Half-life of the active R-enantiomer about 5.8–5.9 days; about 10.4 days in severe liver impairment [FDA].", "Inhibits CYP3A4 (midazolam exposure ~1.9×); displaces warfarin — monitor INR [FDA]."],
  ind: { adult: ["Stage D2 metastatic prostate cancer, with an LHRH analogue [FDA].", "150 mg daily is not approved [FDA]."], paed: ["Not effective for familial male-limited precocious puberty [FDA]."] },
  adult: [["Metastatic prostate cancer", "50 mg once daily, starting together with the LHRH analogue [FDA]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Men only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [FDA].", hepatic: "Use with caution; half-life longer in severe impairment [FDA].", preg: "Contraindicated in women and pregnancy [FDA].", other: "Men with partners who could conceive: effective contraception [FDA]." },
  tox: { human: "Up to 200 mg daily long-term was well tolerated [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic; no antidote; dialysis unlikely to help [FDA]." },
  contra: ["Hypersensitivity (angioedema, urticaria reported) [FDA].", "Women; pregnancy [FDA]."],
  ae: { common: ["Hot flushes, pain, asthenia, constipation, infection, nausea, peripheral oedema, dyspnoea, diarrhoea [NEP]."], serious: ["Severe hepatic injury, fatal liver failure [FDA]", "Bleeding with coumarin anticoagulants [FDA]", "Gynaecomastia and breast pain (150 mg) [FDA]", "Reduced glucose tolerance with LHRH agonists [FDA]"] },
  monitor: ["Liver transaminases before starting, regularly for 4 months, then periodically [FDA].", "PT/INR if on warfarin [FDA].", "PSA [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bicalutamide", indication_id: "pc", label: "Prostate cancer — 50 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 50, max_daily: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Bicalutamide tablets (NDA020498, CASODEX) — label effective 2026-04-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=26e30155-a50b-df14-e063-6394a90a9be4"]],
  dose: { tagline: "Daily anti-androgen tablet with an LHRH analogue for metastatic prostate cancer.",
    adult: [{ ind: "Metastatic prostate cancer", text: "50 mg once daily, started with the LHRH analogue. Check liver tests.", calc: ["pc"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- BIMATOPROST (FDA ophthalmic 0.01%/0.03%; ZOLYMBUS gel NDA217307) ---------- */
FDB_M("bimatoprost", {
  inn: "Bimatoprost", atc: "S01EE03", cls: "Prostaglandin analogue (ophthalmic)",
  linked: [["Open-angle glaucoma / ocular hypertension", "First-line IOP-lowering drop [FDA]", ""]],
  forms: ["Eye drops 0.01% and 0.03% [NEP].", "Ophthalmic gel 0.01% single-dose (ZOLYMBUS) [FDA].", "Topical 0.03% for eyelash hypotrichosis (separate product) [NEP]."],
  moa: "Prostamide analogue; increases aqueous outflow [NEP].",
  pk: ["IOP falls from about 4 h, maximum 8–12 h [FDA].", "Plasma half-life about 45 min [FDA]."],
  ind: { adult: ["Raised IOP in open-angle glaucoma or ocular hypertension [FDA]."], paed: ["Not recommended under 16 years (pigmentation concern) [FDA]."] },
  adult: [["Glaucoma / ocular hypertension", "1 drop in the affected eye(s) once daily in the evening. Not more often — more frequent use lessens the effect. Space other eye drops 5 min apart [FDA]."]],
  paed: { tiers: ["Under 16 years: not recommended [FDA]."], transition: "Adult use from 16 years [FDA].", calcNote: "Eye drops — no weight calculation." },
  adj: { renal: "Not applicable (eye drops). [NEP]", hepatic: "Not applicable (eye drops). [NEP]", preg: "No increase in birth defects or miscarriage in post-marketing experience [FDA].", other: "Remove contact lenses before use [NEP]." },
  tox: { human: "No human overdose information [FDA].", animal: "Oral doses up to 100 mg/kg/day in mice and rats produced no toxicity [FDA].", manage: "Symptomatic [FDA]." },
  contra: ["Hypersensitivity to bimatoprost or any ingredient [FDA]."],
  ae: { common: ["Conjunctival hyperaemia, eye irritation [FDA]."], serious: ["Permanent iris pigmentation; eyelid and eyelash changes [FDA]", "Intraocular inflammation; macular oedema [FDA]"] },
  monitor: ["IOP; iris colour [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ZOLYMBUS (bimatoprost ophthalmic gel) 0.01% — Thea Pharma, label effective 2026-02-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f4504a0c-7998-4084-9e05-f999f1d051ed"]],
  dose: { tagline: "Once-nightly prostaglandin eye drop for glaucoma.",
    adult: [{ ind: "Open-angle glaucoma or ocular hypertension", text: "1 drop in the affected eye(s) once daily in the evening. Never more than once a day." }],
    child: [{ ind: "Under 16 years", text: "Not recommended." }] }
});

/* ---------- BIMEKIZUMAB (FDA BIMZELX, UCB, BLA761151, eff. 2026-11-05) ---------- */
FDB_M("bimekizumab", {
  inn: "Bimekizumab", atc: "L04AC21", cls: "IL-17A and IL-17F antagonist — monoclonal antibody",
  linked: [["Plaque psoriasis, moderate–severe", "Biologic [FDA]", ""], ["Psoriatic arthritis; axial spondyloarthritis (AS, nr-axSpA)", "Biologic [FDA]", ""], ["Hidradenitis suppurativa, moderate–severe", "Biologic [FDA]", ""]],
  forms: ["Prefilled syringe or autoinjector 160 mg/mL and 320 mg/2 mL [FDA]."],
  moa: "Binds IL-17A, IL-17F and IL-17AF, blocking their receptor [FDA].",
  pk: ["Terminal half-life about 23 days [FDA].", "May alter CYP450 substrate levels (e.g. warfarin, ciclosporin) when started or stopped [FDA]."],
  ind: { adult: ["Moderate–severe plaque psoriasis; psoriatic arthritis; nr-axSpA; ankylosing spondylitis; moderate–severe hidradenitis suppurativa [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Plaque psoriasis", "320 mg SC at weeks 0, 4, 8, 12 and 16, then every 8 weeks; 120 kg or more: consider 320 mg every 4 weeks after week 16 [FDA]."], ["Psoriatic arthritis, nr-axSpA, ankylosing spondylitis", "160 mg SC every 4 weeks (PsA with moderate–severe psoriasis: psoriasis dosing) [FDA]."], ["Hidradenitis suppurativa", "320 mg SC every 2 weeks to week 16 (weeks 0–16), then every 4 weeks [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Check liver enzymes and bilirubin before starting [FDA].", preg: "Human data insufficient; IgG crosses the placenta late in pregnancy [FDA].", other: "Screen for TB; complete vaccinations first; no live vaccines [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Upper respiratory infections, oral candidiasis, headache, injection-site reactions, tinea, gastroenteritis, herpes simplex, acne, folliculitis, fatigue [FDA]."], serious: ["Suicidal ideation and behaviour [FDA]", "Serious infections; TB [FDA]", "Liver enzyme rises [FDA]", "Inflammatory bowel disease [FDA]"] },
  monitor: ["Mood and suicidal thoughts [FDA].", "Liver tests; TB screening [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "BIMZELX (bimekizumab-bkzx) injection — UCB, label effective 2026-11-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=26b88358-871f-4c80-9d80-b2fb16477f81"]],
  dose: { tagline: "IL-17A/F biologic injection for psoriasis, spondyloarthritis and hidradenitis.",
    adult: [
      { ind: "Plaque psoriasis", text: "320 mg SC at weeks 0, 4, 8, 12, 16, then every 8 weeks (120 kg+: consider every 4 weeks)." },
      { ind: "Psoriatic arthritis, axial spondyloarthritis", text: "160 mg SC every 4 weeks." },
      { ind: "Hidradenitis suppurativa", text: "320 mg SC every 2 weeks to week 16, then every 4 weeks." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BINIMETINIB (FDA MEKTOVI, Array/Pfizer, NDA210498, eff. 2025-03-20) ---------- */
FDB_M("binimetinib", {
  inn: "Binimetinib", atc: "L01EE03", cls: "MEK1/2 inhibitor (kinase inhibitor)",
  linked: [["Melanoma, BRAF V600E/K, unresectable or metastatic", "With encorafenib [FDA]", ""], ["NSCLC, BRAF V600E, metastatic", "With encorafenib [FDA]", ""]],
  forms: ["Tablets 15 mg [FDA]."],
  moa: "Reversible inhibitor of MEK1 and MEK2 in the MAPK/ERK pathway [FDA].",
  pk: ["With or without food [FDA].", "97% protein-bound — haemodialysis unlikely to help [FDA].", "No clinically important drug interactions observed [FDA]."],
  ind: { adult: ["BRAF V600E/K melanoma and BRAF V600E NSCLC, with encorafenib, after a confirming test [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Melanoma or NSCLC (with encorafenib)", "45 mg twice daily [FDA]."], ["Moderate or severe liver impairment", "30 mg twice daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Moderate or severe: 30 mg twice daily [FDA].", preg: "Can cause fetal harm; do not breastfeed [FDA].", other: "Not established with LVEF under 50% [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; dialysis unlikely to help [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, nausea, diarrhoea, vomiting, abdominal pain [NEP]."], serious: ["New primary malignancies (with encorafenib) [FDA]", "Cardiomyopathy [FDA]", "Venous thromboembolism [FDA]", "Serous retinopathy, retinal vein occlusion, uveitis [FDA]", "Interstitial lung disease; hepatotoxicity; rhabdomyolysis [FDA]"] },
  monitor: ["LVEF before, at 1 month, then every 2–3 months [FDA].", "Eye exams; liver tests; CK [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "binimetinib", indication_id: "std", label: "45 mg twice daily (with encorafenib)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 45, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 45, max_daily: 90, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 15, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "MEKTOVI (binimetinib) tablets — Array BioPharma (Pfizer), label effective 2025-03-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6c3408ac-d401-4925-8a03-26591afbc240"]],
  dose: { tagline: "MEK inhibitor tablet taken with encorafenib for BRAF-mutant melanoma and lung cancer.",
    adult: [
      { ind: "BRAF V600 melanoma or NSCLC (with encorafenib)", text: "45 mg (3 tablets) twice daily.", calc: ["std"] },
      { ind: "Moderate or severe liver impairment", text: "30 mg twice daily." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BISMUTH SUBCITRATE (FDA: only in combination — bismuth subcitrate potassium/metronidazole/tetracycline capsules, NDA050786 = PYLERA) ---------- */
FDB_M("bismuth-subcitrate", {
  inn: "Bismuth subcitrate", atc: "A02BX05", cls: "Bismuth salt — part of quadruple H. pylori therapy",
  linked: [["Helicobacter pylori eradication (duodenal ulcer disease)", "Bismuth quadruple therapy with metronidazole, tetracycline and omeprazole [FDA]", ""]],
  forms: ["Capsule: bismuth subcitrate potassium 140 mg + metronidazole 125 mg + tetracycline 125 mg (US combination) [FDA].", "Tablets of bismuth subcitrate alone are marketed outside the US [NEP]."],
  moa: "Bismuth is directly toxic to H. pylori and protects the ulcer base; combined with two antibiotics and acid suppression [NEP].",
  pk: ["Small amounts of bismuth are absorbed; darkens stool and tongue [NEP]."],
  ind: { adult: ["H. pylori infection with duodenal ulcer disease (active or within 5 years), with omeprazole [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["H. pylori quadruple therapy (US combination capsule)", "3 capsules 4 times a day (after meals and at bedtime) for 10 days, plus omeprazole 20 mg twice daily after morning and evening meals [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed regimen." },
  adj: { renal: "Severe kidney impairment: contraindicated (combination) [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Contraindicated in pregnancy (combination — tetracycline) [FDA].", other: "No alcohol during and for 3 days after (metronidazole) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Disulfiram within 2 weeks; alcohol during and 3 days after; Cockayne syndrome; severe kidney impairment; pregnancy; hypersensitivity (combination) [FDA]."],
  ae: { common: ["Black stools, nausea, diarrhoea, abdominal pain, taste change (metallic), headache [NEP]."], serious: ["Metronidazole carcinogenicity in animals (boxed) [FDA]", "Neurotoxicity (metronidazole); photosensitivity and tooth discoloration (tetracycline) [NEP]"] },
  monitor: ["Confirm eradication after treatment [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Bismuth subcitrate potassium, metronidazole and tetracycline HCl capsules — H2-Pharma (NDA050786, PYLERA), label effective 2026-11-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c29bfde9-5eb4-422a-bd30-4bce45e73dc0"]],
  dose: { tagline: "Bismuth component of 10-day quadruple therapy for H. pylori.",
    boxedTitle: "Potential for carcinogenicity (metronidazole component)",
    boxed: "Metronidazole has been shown to be carcinogenic in mice and rats. It is unknown whether metronidazole is associated with carcinogenicity in humans.",
    adult: [{ ind: "H. pylori with duodenal ulcer (combination capsule)", text: "3 capsules 4 times a day (after meals and at bedtime) for 10 days, with omeprazole 20 mg twice daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BISOPROLOL (FDA tablets, ANDA215563; original ZEBETA) ---------- */
FDB_M("bisoprolol", {
  inn: "Bisoprolol", atc: "C07AB07", cls: "Cardioselective (beta-1) beta-blocker",
  linked: [["Hypertension", "Antihypertensive [FDA]", "htn-adult"], ["Heart failure with reduced ejection fraction", "Guideline beta-blocker (not an FDA-labelled use) [BT-STG]", ""]],
  forms: ["Tablets 5 mg and 10 mg [FDA]."],
  moa: "Selective beta-1 blockade — lowers heart rate and cardiac output [NEP].",
  pk: ["Half-life 9–12 h; longer in the elderly and when CrCl is under 40 [FDA].", "Not dialysable [FDA].", "Rifampicin shortens half-life; avoid other beta-blockers; caution with verapamil/diltiazem and clonidine withdrawal [FDA]."],
  ind: { adult: ["Hypertension, alone or with other drugs [FDA]."], paed: ["No paediatric experience [FDA]."] },
  adult: [["Hypertension", "Start 5 mg once daily (2.5 mg in bronchospastic disease); increase to 10 mg, then 20 mg once daily if needed [FDA]."], ["Kidney (CrCl under 40) or liver impairment", "Start 2.5 mg once daily; titrate cautiously [FDA]."], ["Heart failure (HFrEF)", "Start 1.25 mg once daily and double every 2 weeks or more as tolerated to a target of 10 mg once daily [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["No paediatric experience [FDA]."], transition: "Adults only [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "CrCl under 40: start 2.5 mg [FDA].", hepatic: "Hepatitis or cirrhosis: start 2.5 mg [FDA].", preg: "Not established in primary source. [NEP]", other: "Do not stop suddenly in coronary disease — taper over about a week [FDA]." },
  tox: { human: "Overdoses up to 2,000 mg reported: bradycardia and hypotension; all recovered [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive care — atropine for bradycardia, IV fluids/vasopressors for hypotension, glucagon may help; not dialysable [FDA]." },
  contra: ["Cardiogenic shock, overt cardiac failure, second- or third-degree AV block, marked sinus bradycardia [FDA]."],
  ae: { common: ["Fatigue, dizziness, headache, diarrhoea, bradycardia [NEP]."], serious: ["Heart failure, bradycardia, AV block [FDA]", "Bronchospasm at higher doses [FDA]", "Angina or MI after abrupt withdrawal [FDA]", "Masked hypoglycaemia and thyrotoxicosis [FDA]"] },
  monitor: ["Heart rate and blood pressure [NEP]."],
  local: { neml: "Bisoprolol 5 mg tablet is on the Bhutan NEML 2025 [BT-NEML].", strengths: "5 mg tablet.", stg: "STG 2024 lists beta-blockers e.g. metoprolol/bisoprolol (heart failure, cardiac conditions) [BT-STG]." },
  calc: [{ drug: "bisoprolol", indication_id: "htn", label: "Hypertension — start 5 mg once daily (max 20 mg)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 20, max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Half tablets", renal: [{ crcl_min: 0, crcl_max: 39.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Bisoprolol fumarate tablets USP — ANI Pharmaceuticals (ANDA215563), label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6517d564-ea55-4084-a8ab-34fea548c24e"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Once-daily cardioselective beta-blocker for hypertension (and heart failure in guidelines).",
    adult: [
      { ind: "Hypertension", text: "Start 5 mg once daily (2.5 mg if bronchospastic disease); increase to 10 mg, then 20 mg if needed.", calc: ["htn"] },
      { ind: "CrCl under 40 or liver disease", text: "Start 2.5 mg once daily." },
      { ind: "Heart failure (guideline use)", text: "Start 1.25 mg once daily; up-titrate slowly to 10 mg (to be verified against the national guideline)." }
    ],
    child: [{ ind: "Children", text: "No paediatric experience." }] }
});

/* ---------- BIVALIRUDIN (FDA, Civica, NDA020873 = ANGIOMAX, eff. 2025-09-10) ---------- */
FDB_M("bivalirudin", {
  inn: "Bivalirudin", atc: "B01AE06", cls: "Direct thrombin inhibitor (IV anticoagulant)",
  risk: "High-alert — anticoagulants, including direct thrombin inhibitors, are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Percutaneous coronary intervention (PCI), including with HIT", "Procedural anticoagulant [FDA]", ""]],
  forms: ["Powder for injection 250 mg vial [FDA]."],
  moa: "Binds the catalytic site and anion-binding exosite of circulating and clot-bound thrombin [FDA].",
  pk: ["Half-life about 25 min with normal kidneys; 34–57 min in moderate–severe impairment; about 3.5 h on dialysis [FDA].", "More bleeding with heparin, warfarin, thrombolytics or GP IIb/IIIa inhibitors [FDA]."],
  ind: { adult: ["Anticoagulant in PCI, including patients with HIT/HITTS; studied with aspirin [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["PCI", "0.75 mg/kg IV bolus, then 1.75 mg/kg/h infusion for the procedure. Check ACT 5 min after the bolus; give a further 0.3 mg/kg bolus if needed [FDA]."], ["STEMI", "Consider continuing 1.75 mg/kg/h for up to 4 h after PCI [FDA]."], ["Kidney impairment", "Bolus unchanged. CrCl under 30: infusion 1 mg/kg/h. Haemodialysis: 0.25 mg/kg/h [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Bolus calculated; set the infusion rate from the text." },
  adj: { renal: "No bolus change. CrCl under 30 (Cockcroft–Gault): infusion 1 mg/kg/h; haemodialysis: 0.25 mg/kg/h. Monitor ACT [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "No human data; no fetal harm in animal studies [FDA].", other: "Elderly: more bleeding [FDA]." },
  tox: { human: "Overdoses up to 10× the dose reported, many from not reducing the infusion in kidney failure; bleeding and deaths from haemorrhage [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the infusion; monitor for bleeding; haemodialysis removes it [NEP]." },
  contra: ["Active major bleeding [FDA].", "Hypersensitivity to bivalirudin [FDA]."],
  ae: { common: ["Bleeding [FDA]."], serious: ["Major bleeding [FDA]", "Acute stent thrombosis in STEMI primary PCI [FDA]", "Thrombus in coronary gamma brachytherapy [FDA]"] },
  monitor: ["ACT 5 min after the bolus [FDA].", "Signs of bleeding; unexplained fall in BP or haematocrit [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bivalirudin", indication_id: "bolus", label: "PCI — IV bolus 0.75 mg/kg (then infusion 1.75 mg/kg/h)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.75, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "To 0.1 mg [NEP]", renal: [], renal_note: "Bolus is not reduced. Infusion: CrCl under 30 → 1 mg/kg/h; haemodialysis → 0.25 mg/kg/h.", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Bivalirudin for injection — Civica (NDA020873, ANGIOMAX), label effective 2025-09-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=19a4afc5-151d-4d3c-bfef-48aa8797d695"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Short-acting IV direct thrombin inhibitor for PCI, including heparin-induced thrombocytopenia.",
    adult: [
      { ind: "PCI", text: "0.75 mg/kg IV bolus, then 1.75 mg/kg/h during the procedure. ACT at 5 minutes; extra 0.3 mg/kg bolus if needed. STEMI: may continue up to 4 h after.", calc: ["bolus"] },
      { ind: "Kidney impairment", text: "Same bolus. Infusion 1 mg/kg/h if CrCl under 30; 0.25 mg/kg/h on haemodialysis." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BLEOMYCIN (FDA bleomycin for injection, Meitheal, ANDA205030, eff. 2026-04-17) ---------- */
FDB_M("bleomycin", {
  inn: "Bleomycin", atc: "L01DC01", cls: "Cytotoxic glycopeptide antibiotic",
  linked: [["Hodgkin and non-Hodgkin lymphoma", "Combination chemotherapy (e.g. ABVD) [FDA]", ""], ["Testicular cancer", "Combination chemotherapy (e.g. BEP) [FDA]", ""], ["Squamous cell carcinoma (head and neck, cervix, penis, vulva)", "Palliative [FDA]", ""], ["Malignant pleural effusion", "Intrapleural sclerosant [FDA]", ""]],
  forms: ["Powder for injection 15 units and 30 units vials (IV, IM, SC, intrapleural) [NEP]."],
  moa: "Causes single- and double-strand DNA breaks; inhibits DNA synthesis [FDA].",
  pk: ["Terminal half-life about 2 h with normal kidneys; rises as CrCl falls [FDA].", "Mainly renally excreted; cisplatin-induced kidney injury raises levels — fatal lung toxicity reported [FDA]."],
  ind: { adult: ["Palliative treatment, alone or in combination: squamous cell cancers, lymphomas, testicular cancer; malignant pleural effusion [FDA]."], paed: ["Volume of distribution and half-life in children are similar to adults [FDA]."] },
  adult: [["Squamous cell cancer, NHL, testicular cancer, Hodgkin's", "0.25–0.50 units/kg (10–20 units/m²) IV, IM or SC weekly or twice weekly [FDA]."], ["Lymphoma — first 2 doses", "2 units or less (anaphylactoid reaction risk); then the regular schedule if no reaction [FDA]."], ["Hodgkin's maintenance (after 50% response)", "1 unit daily or 5 units weekly IV or IM [FDA]."], ["Malignant pleural effusion", "60 units single intrapleural bolus [FDA]."], ["Lifetime total", "Pulmonary toxicity rises sharply above 400 units — give more only with great caution [FDA]."]],
  paed: { tiers: ["Not separately established in the label; specialist protocols [NEP]."], transition: "—", calcNote: "Units, not mg." },
  adj: { renal: "CrCl (Cockcroft–Gault): 40–50 → 70% of dose; 30–40 → 60%; 20–30 → 55%; 10–20 → 45%; 5–10 → 40% [FDA].", hepatic: "Not evaluated [FDA].", preg: "Not established in primary source. [NEP]", other: "Elderly (over 70) and cumulative dose over 400 units: higher lung toxicity [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Previous hypersensitivity or idiosyncratic reaction to bleomycin [FDA]."],
  ae: { common: ["Skin changes (hyperpigmentation, erythema, striae, nail changes), mucositis, fever, chills, vomiting, alopecia [NEP]."], serious: ["Pneumonitis and pulmonary fibrosis (about 1% fatal) [FDA]", "Idiosyncratic reaction — hypotension, confusion, fever, chills, wheeze (about 1% in lymphoma) [FDA]", "Renal and hepatic toxicity [NEP]"] },
  monitor: ["Chest X-ray and lung function regularly; cumulative dose [FDA].", "Kidney function [FDA].", "Close observation after the first two doses in lymphoma [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "bleomycin", indication_id: "std", label: "0.25–0.5 units/kg weekly or twice weekly", route: "IV/IM/SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.25, unit: "units", per: "dose", value_max: 0.5 }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "To 0.5 unit [NEP]",
    renal: [{ crcl_min: 40, crcl_max: 49.999, action: "reduce_dose", factor: 0.7, interval_h: 168 }, { crcl_min: 30, crcl_max: 39.999, action: "reduce_dose", factor: 0.6, interval_h: 168 }, { crcl_min: 20, crcl_max: 29.999, action: "reduce_dose", factor: 0.55, interval_h: 168 }, { crcl_min: 10, crcl_max: 19.999, action: "reduce_dose", factor: 0.45, interval_h: 168 }, { crcl_min: 5, crcl_max: 9.999, action: "reduce_dose", factor: 0.4, interval_h: 168 }, { crcl_min: 0, crcl_max: 4.999, action: "avoid", text: "CrCl under 5: no label dose — specialist decision" }], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Bleomycin for injection USP — Meitheal (ANDA205030), label effective 2026-04-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=640602f9-a7df-46f0-a9b1-19c471008bee"]],
  dose: { tagline: "Cytotoxic antibiotic for lymphoma, testicular and squamous cancers; watch the lungs.",
    boxedTitle: "Pulmonary fibrosis and idiosyncratic reactions",
    boxed: "It is recommended that Bleomycin for Injection, USP be administered under the supervision of a qualified physician experienced in the use of cancer chemotherapeutic agents. Appropriate management of therapy and complications is possible only when adequate diagnostic and treatment facilities are readily available. Pulmonary fibrosis is the most severe toxicity associated with bleomycin. The most frequent presentation is pneumonitis occasionally progressing to pulmonary fibrosis. Its occurrence is higher in elderly patients and in those receiving greater than 400 units total dose, but pulmonary toxicity has been observed in young patients and those treated with low doses. A severe idiosyncratic reaction consisting of hypotension, mental confusion, fever, chills, and wheezing has been reported in approximately 1% of lymphoma patients treated with bleomycin.",
    adult: [
      { ind: "Squamous cancers, lymphomas, testicular cancer", text: "0.25–0.5 units/kg (10–20 units/m²) IV, IM or SC weekly or twice weekly. Lymphoma: first 2 doses 2 units or less.", calc: ["std"] },
      { ind: "Kidney impairment (CrCl under 50)", text: "40–50: 70%; 30–40: 60%; 20–30: 55%; 10–20: 45%; 5–10: 40% of the dose." },
      { ind: "Malignant pleural effusion", text: "60 units intrapleural, single dose." }
    ],
    child: [{ ind: "Children", text: "Per specialist protocol." }] }
});

/* ---------- BLINATUMOMAB (FDA BLINCYTO, Amgen, BLA125557, eff. 2026-04-14) ---------- */
FDB_M("blinatumomab", {
  inn: "Blinatumomab", atc: "L01FX07", cls: "Bispecific CD19-directed CD3 T-cell engager",
  linked: [["B-cell precursor acute lymphoblastic leukaemia (CD19+)", "MRD-positive, relapsed/refractory, or Ph-negative consolidation [FDA]", ""]],
  forms: ["Powder for injection 35 mcg vial, for continuous IV infusion with IV solution stabiliser [FDA]."],
  moa: "Links CD3 on T cells to CD19 on B cells, directing T-cell killing of malignant B cells [FDA].",
  pk: ["Short half-life (about 2 h) — given by continuous infusion [FDA].", "Cytokine release can transiently suppress CYP450 — watch narrow-therapeutic-index drugs early in cycles 1–2 [FDA]."],
  ind: { adult: ["CD19+ B-ALL: MRD-positive in remission; relapsed or refractory; Ph-negative consolidation [FDA]."], paed: ["Same, 1 month and older [FDA]."] },
  adult: [["MRD-positive B-ALL (45 kg or more)", "28 mcg/day continuous IV for 28 days, then 14 days off; induction plus up to 3 consolidation cycles. Premedicate with prednisone/dexamethasone; hospitalise first 3 days of cycle 1 and 2 days of cycle 2 [FDA]."], ["Under 45 kg", "15 mcg/m²/day (not above 28 mcg/day) [FDA]."], ["Relapsed/refractory or consolidation schedules", "Step-up and cycle schedules differ — follow the label tables [FDA]."]],
  paed: { tiers: ["Under 45 kg: BSA-based (e.g. 15 mcg/m²/day for MRD-positive ALL; not above 28 mcg/day) [FDA].", "Under 5.4 kg: use preservative-free preparation (no benzyl alcohol) [FDA]."], transition: "Fixed dose from 45 kg [FDA].", calcNote: "Continuous infusion — not calculated here." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "May cause fetal harm and B-cell depletion in exposed infants [FDA].", other: "No driving or hazardous work during infusion [FDA]. Strictly follow preparation instructions — errors have caused overdoses [FDA]." },
  tox: { human: "Overdoses (up to 133-fold) caused adverse reactions consistent with the drug; a fatal CRS-related cardiac event at 30 mcg/m²/day in a child [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Interrupt the infusion; supportive care; manage CRS and neurotoxicity [FDA]." },
  contra: ["Known hypersensitivity to blinatumomab or any component [FDA]."],
  ae: { common: ["Fever, CRS, headache, infections, neutropenia, tremor [NEP]."], serious: ["Cytokine release syndrome (boxed) [FDA]", "Neurotoxicity including ICANS (boxed) [FDA]", "Infections; tumour lysis; neutropenia; pancreatitis [FDA]", "Medication errors in preparation [FDA]"] },
  monitor: ["CRS and neurological signs, especially early in cycles [FDA].", "Blood counts, liver tests [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "BLINCYTO (blinatumomab) for injection — Amgen, label effective 2026-04-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=38b482a8-960b-4591-9857-5031ecb830aa"]],
  dose: { tagline: "Continuous-infusion T-cell engager for CD19-positive B-cell ALL.",
    boxedTitle: "Cytokine release syndrome and neurological toxicities (ICANS)",
    boxed: "Cytokine Release Syndrome (CRS), which may be life-threatening or fatal, occurred in patients receiving BLINCYTO. Interrupt or discontinue BLINCYTO and treat with corticosteroids as recommended. Neurological toxicities, including immune effector cell-associated neurotoxicity syndrome (ICANS) which may be severe, life-threatening, or fatal, occurred in patients receiving BLINCYTO. Interrupt or discontinue BLINCYTO as recommended.",
    adult: [{ ind: "MRD-positive B-ALL, 45 kg or more", text: "28 mcg/day continuous IV infusion for 28 days, then 14 days off. Other indications use step-up schedules — see label." }],
    child: [{ ind: "Under 45 kg", text: "15 mcg/m²/day (maximum 28 mcg/day) for MRD-positive ALL; other schedules per label." }] }
});

/* ---------- BORTEZOMIB (FDA VELCADE, Takeda, NDA021602, eff. 2025-08-28) ---------- */
FDB_M("bortezomib", {
  inn: "Bortezomib", atc: "L01XG01", cls: "Proteasome inhibitor",
  linked: [["Multiple myeloma", "Core therapy in combinations [FDA]", ""], ["Mantle cell lymphoma", "Treatment [FDA]", ""]],
  forms: ["Powder for injection 3.5 mg vial: reconstitute to 1 mg/mL for IV or 2.5 mg/mL for SC [FDA]."],
  moa: "Reversibly inhibits the 26S proteasome, disrupting protein homeostasis in tumour cells [FDA].",
  pk: ["Half-life 40–193 h after repeated dosing [FDA].", "Strong CYP3A4 inducers: avoid; strong inhibitors: monitor [FDA]."],
  ind: { adult: ["Multiple myeloma [FDA].", "Mantle cell lymphoma [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Multiple myeloma / mantle cell lymphoma", "1.3 mg/m² IV (3–5 s bolus) or SC, typically on days 1, 4, 8 and 11 of each cycle (at least 72 h between doses); schedules per regimen [FDA]."], ["Moderate or severe liver impairment", "Start 0.7 mg/m² in cycle 1; then 1 mg/m² or 0.5 mg/m² by tolerance [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "mg/m² (needs height). IV 1 mg/mL vs SC 2.5 mg/mL — different volumes." },
  adj: { renal: "No starting-dose change; on dialysis give after the session [FDA].", hepatic: "Moderate/severe: start 0.7 mg/m² [FDA].", preg: "Can cause fetal harm [FDA].", other: "Diabetics on oral agents: monitor glucose [FDA]." },
  tox: { human: "More than twice the recommended dose has been fatal (acute hypotension, thrombocytopenia) [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote; monitor vital signs; supportive care [FDA]." },
  contra: ["Hypersensitivity to bortezomib, boron or mannitol [FDA].", "Intrathecal administration — fatal [FDA]."],
  ae: { common: ["Nausea, diarrhoea, thrombocytopenia, neutropenia, peripheral neuropathy, fatigue, neuralgia, anaemia, leucopenia, constipation, vomiting, rash, fever [NEP]."], serious: ["Peripheral neuropathy [FDA]", "Hypotension [FDA]", "Heart failure; acute respiratory syndromes; PRES [FDA]", "Thrombocytopenia; tumour lysis [FDA]"] },
  monitor: ["Blood counts before each dose [FDA].", "Neuropathy symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "bortezomib", indication_id: "sc", label: "1.3 mg/m² SC (2.5 mg/mL) — days 1, 4, 8, 11", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 1.3, unit: "mg", per: "dose" }, interval_h: 72, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 2.5, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "bortezomib", indication_id: "iv", label: "1.3 mg/m² IV bolus (1 mg/mL) — days 1, 4, 8, 11", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 1.3, unit: "mg", per: "dose" }, interval_h: 72, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "To 0.1 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "VELCADE (bortezomib) for injection — Takeda, label effective 2025-08-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1521d321-e724-4ffc-adad-34bf4f44fac7"]],
  dose: { tagline: "Proteasome inhibitor injection for multiple myeloma and mantle cell lymphoma.",
    cautionTitle: "IV and SC concentrations differ",
    caution: "Because each route of administration has a different reconstituted concentration, use caution when calculating the volume to be administered. (FDA label, 2.1) VELCADE is contraindicated for intrathecal administration — fatal events have occurred. (FDA label, 4)",
    adult: [
      { ind: "Myeloma or mantle cell lymphoma", text: "1.3 mg/m² IV bolus or SC on days 1, 4, 8, 11 (at least 72 h apart); cycle length per regimen.", calc: ["sc", "iv"] },
      { ind: "Moderate or severe liver impairment", text: "Start 0.7 mg/m² in cycle 1." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- BOSENTAN (FDA TRACLEER, Actelion, NDA021290/209279, eff. 2025-11-17) ---------- */
FDB_M("bosentan", {
  inn: "Bosentan", atc: "C02KX01", cls: "Dual endothelin receptor antagonist (ETA/ETB)",
  linked: [["Pulmonary arterial hypertension (WHO group 1)", "Oral PAH therapy [FDA]", ""]],
  forms: ["Tablets 62.5 mg and 125 mg [FDA].", "Dispersible tablets 32 mg (scored) [FDA]."],
  moa: "Competitive antagonist at endothelin ETA and ETB receptors [FDA].",
  pk: ["Half-life about 5 h [FDA].", "CYP2C9/CYP3A substrate and inducer; lowers hormonal contraceptive effect [FDA]."],
  ind: { adult: ["PAH (WHO group 1), to improve exercise ability and reduce clinical worsening [FDA]."], paed: ["Idiopathic or congenital PAH, 3 years and over [FDA]."] },
  adult: [["PAH, over 12 years and over 40 kg", "62.5 mg twice daily for 4 weeks, then 125 mg twice daily [FDA]."], ["Over 12 years, under 40 kg", "62.5 mg twice daily [FDA]."], ["Liver enzymes over 3 × ULN", "Reduce the dose or interrupt per label; stop if with symptoms or bilirubin ≥2 × ULN [FDA]."]],
  paed: { tiers: ["12 years and under, twice daily: 4–8 kg 16 mg; >8–16 kg 32 mg; >16–24 kg 48 mg; >24–40 kg 64 mg [FDA]."], transition: "Adult dosing over 12 years [FDA].", calcNote: "Weight bands (dispersible 32 mg tablets)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Monthly aminotransferases; modify per label [FDA].", preg: "Contraindicated — exclude pregnancy; contraception before, during and 1 month after [FDA].", other: "Doses above 125 mg twice daily gave no extra benefit and more liver toxicity [FDA]." },
  tox: { human: "Up to 2,400 mg single dose or 2,000 mg/day for 2 months without major consequences; headache [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; monitor BP [NEP]." },
  contra: ["Pregnancy [FDA].", "With ciclosporin A [FDA].", "With glibenclamide (glyburide) [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Respiratory tract infection, anaemia; with dispersible tablet: upper respiratory infection [FDA]."], serious: ["Hepatotoxicity, liver failure (boxed) [FDA]", "Embryo-fetal toxicity (boxed) [FDA]", "Fluid retention; pulmonary veno-occlusive disease [FDA]", "Decreased sperm count; fall in haemoglobin [FDA]"] },
  monitor: ["Liver aminotransferases monthly [FDA].", "Haemoglobin at 1 and 3 months, then every 3 months [FDA].", "Monthly pregnancy test in women who could conceive [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "bosentan", indication_id: "adult", label: "Over 12 y, over 40 kg — 62.5 mg bd × 4 weeks, then 125 mg bd", route: "PO", population: { min_age_months: 145, max_age_months: null, min_weight_kg: 40.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 62.5, unit: "mg", per: "dose", value_max: 125 }, interval_h: 12, divided_doses: 2, caps: { max_single: 125, max_daily: 250, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 62.5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "bosentan", indication_id: "child", label: "12 years and under — twice daily by weight", route: "PO", population: { min_age_months: 36, max_age_months: 145, min_weight_kg: 4, max_weight_kg: 40.0001 }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
      bands: [{ min_weight_kg: 4, max_weight_kg: 8.0001, text: "16 mg twice daily (½ × 32 mg dispersible)", daily: 32 }, { min_weight_kg: 8.0001, max_weight_kg: 16.0001, text: "32 mg twice daily", daily: 64 }, { min_weight_kg: 16.0001, max_weight_kg: 24.0001, text: "48 mg twice daily (1½ × 32 mg)", daily: 96 }, { min_weight_kg: 24.0001, max_weight_kg: 40.0001, text: "64 mg twice daily (2 × 32 mg)", daily: 128 }],
      caps: { max_single: 64, max_daily: 128, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Dispersible tablet halves", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TRACLEER (bosentan) tablets and tablets for oral suspension — Actelion, label effective 2025-11-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=749e42fb-2fe0-45dd-9268-b43bb3f4081c"]],
  dose: { tagline: "Oral endothelin blocker for pulmonary arterial hypertension; monthly liver tests.",
    boxedTitle: "Hepatotoxicity and embryo-fetal toxicity",
    boxed: "TRACLEER is available only through a restricted distribution program called the Bosentan Risk Evaluation and Mitigation Strategy (REMS) because of the risk of hepatotoxicity: Elevations of liver aminotransferases (ALT, AST) and liver failure have been reported with TRACLEER. Measure liver aminotransferases prior to initiation of treatment and then monthly. Discontinue TRACLEER if aminotransferase elevations are accompanied by signs or symptoms of liver dysfunction or injury or increases in bilirubin ≥2×ULN. Based on animal data, TRACLEER may cause fetal harm if used during pregnancy. Females of reproductive potential: Exclude pregnancy before initiating treatment. Use effective contraception prior to initiation of treatment, during treatment and for one month after stopping TRACLEER. When pregnancy is detected, discontinue TRACLEER as soon as possible.",
    adult: [
      { ind: "PAH — over 12 years and over 40 kg", text: "62.5 mg twice daily for 4 weeks, then 125 mg twice daily.", calc: ["adult"] },
      { ind: "Over 12 years, 40 kg or under", text: "62.5 mg twice daily." }
    ],
    child: [{ ind: "PAH, 3–12 years (dispersible tablets)", text: "Twice daily: 4–8 kg 16 mg; >8–16 kg 32 mg; >16–24 kg 48 mg; >24–40 kg 64 mg.", calc: ["child"] }] }
});

/* ---------- BOSUTINIB (FDA BOSULIF, Pfizer, NDA203341, eff. 2026-05-28) ---------- */
FDB_M("bosutinib", {
  inn: "Bosutinib", atc: "L01EA04", cls: "BCR-ABL and Src-family tyrosine kinase inhibitor",
  linked: [["Chronic myeloid leukaemia, Ph+", "TKI [FDA]", ""]],
  forms: ["Tablets 100, 400 and 500 mg; capsules 50 and 100 mg [FDA]."],
  moa: "Inhibits BCR-ABL kinase and Src-family kinases; not active against T315I or V299L [FDA].",
  pk: ["Half-life about 22 h [FDA].", "Take with food [FDA].", "Avoid strong/moderate CYP3A inhibitors and strong inducers; avoid PPIs (use antacids or H2 blockers) [FDA]."],
  ind: { adult: ["Chronic-phase Ph+ CML (new or resistant/intolerant); accelerated or blast phase after prior therapy [FDA]."], paed: ["Chronic-phase Ph+ CML, 1 year and over [FDA]."] },
  adult: [["New chronic-phase CML", "400 mg once daily with food [FDA]."], ["Resistant/intolerant CML (any phase)", "500 mg once daily with food [FDA]."], ["Escalation", "By 100 mg steps to a maximum of 600 mg daily if response is inadequate and no grade 3+ toxicity [FDA]."]],
  paed: { tiers: ["New chronic phase: 300 mg/m² once daily with food [FDA].", "Resistant/intolerant chronic phase: 400 mg/m² once daily [FDA].", "Maximum 600 mg daily [FDA]."], transition: "Adult doses for adults [FDA].", calcNote: "Children: mg/m² (needs height)." },
  adj: { renal: "Adults: CrCl 30–50 → 300 mg (new) / 400 mg (resistant); CrCl under 30 → 200 mg / 300 mg [FDA].", hepatic: "Any hepatic impairment (Child-Pugh A–C), adults: 200 mg daily [FDA].", preg: "Can cause fetal harm; do not breastfeed [FDA].", other: "—" },
  tox: { human: "Isolated overdoses without serious adverse events [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Observe; supportive care [FDA]." },
  contra: ["Hypersensitivity to bosutinib (anaphylaxis reported) [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, abdominal pain, rash, raised liver enzymes, thrombocytopenia [NEP]."], serious: ["GI toxicity [FDA]", "Myelosuppression [FDA]", "Hepatotoxicity [FDA]", "Cardiovascular toxicity; fluid retention; renal toxicity [FDA]"] },
  monitor: ["Liver enzymes monthly for 3 months, then as needed [FDA].", "Blood counts; kidney function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "bosutinib", indication_id: "new", label: "Adult new chronic-phase CML — 400 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 600, max_daily: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 30, crcl_max: 50, action: "reduce_dose", factor: 0.75, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: [], sources: ["FDA"] },
    { drug: "bosutinib", indication_id: "res", label: "Adult resistant/intolerant CML — 500 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 600, max_daily: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 30, crcl_max: 50, action: "reduce_dose", factor: 0.8, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.6, interval_h: 24 }], flags: [], sources: ["FDA"] },
    { drug: "bosutinib", indication_id: "child_new", label: "Child 1 y+ new chronic phase — 300 mg/m² once daily (max 600 mg)", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 600, max_daily: 600, unit: "mg" }, weight_basis: "actual", bsa_formula: "mosteller", formulations: [], rounding: "To capsule/tablet strengths per label [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "BOSULIF (bosutinib) tablets and capsules — Pfizer, label effective 2026-05-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d5929f91-6496-4c0e-97e8-0bd524e15763"]],
  dose: { tagline: "Once-daily TKI for Philadelphia-positive CML in adults and children.",
    adult: [
      { ind: "New chronic-phase CML", text: "400 mg once daily with food (CrCl 30–50: 300 mg; under 30: 200 mg; any liver impairment: 200 mg).", calc: ["new"] },
      { ind: "Resistant or intolerant CML", text: "500 mg once daily with food (CrCl 30–50: 400 mg; under 30: 300 mg; liver impairment: 200 mg). Escalate by 100 mg to 600 mg if needed.", calc: ["res"] }
    ],
    child: [{ ind: "Chronic-phase CML, 1 year and over", text: "New: 300 mg/m² once daily. Resistant/intolerant: 400 mg/m². Maximum 600 mg.", calc: ["child_new"] }] }
});

/* Brands for batch B-1 — India (PharmEasy) and Bangladesh (MedEx), built 24 Nov 2026 with _work/tools/fdb-brands.js (full-name molecule match). */
(function () {
  const B = {"baclofen":{"BT":"Bhutan supplies by generic name.","IN":[["Liofen","Sun Pharma","Liofen 10Mg Strip Of 10 Tablets"],["Baclof","Intas Pharmaceuticals Ltd","Baclof 10Mg Strip Of 15 Tablets"],["Camirofen","Leeford Healthcare Ltd","Camirofen 10Mg Strip Of 10 Tablets"]],"BD":[["Baclofen","Amico Laboratories Ltd","10 mg"],["SMR","Amulet Pharmaceuticals Ltd","10 mg"],["Beclovan","Aristopharma Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/liofen-10mg-strip-of-10-tablets-25018","https://pharmeasy.in/online-medicine-order/baclof-10mg-strip-of-15-tablets-4664741","https://pharmeasy.in/online-medicine-order/camirofen-tablet-10-s-230403","https://medex.com.bd/brands/11770/baclofen-10-mg-tablet","https://medex.com.bd/brands/18067/smr-10-mg-tablet","https://medex.com.bd/brands/26413/beclovan-5-mg-tablet"]},"baloxavir-marboxil":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Balovir","ACME Laboratories Ltd","40 mg"],["Baloxa","Beximco Pharmaceuticals PLC","20 mg"],["Xofluza","Roche Bangladesh Ltd","40 mg"]],"src":["https://medex.com.bd/brands/31039/balovir-40-mg-tablet","https://medex.com.bd/brands/31872/baloxa-20-mg-tablet","https://medex.com.bd/brands/35515/xofluza-40-mg-tablet"]},"balsalazide":{"BT":"Bhutan supplies by generic name.","IN":[["Intazide","Intas Pharmaceuticals Ltd","Intazide 750Mg Strip Of 10 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/intazide-750mg-capsule-51139"]},"baricitinib":{"BT":"Bhutan supplies by generic name.","IN":[["Olumiant","Eli Lilly And Company","Olumiant 4Mg Strip Of 7 Tablets"]],"BD":[["Baricit","Delta Pharma PLC","2 mg"],["Barinez","Beacon Pharmaceuticals PLC","2 mg"],["Baritor","Square Pharmaceuticals PLC","2 mg"]],"src":["https://pharmeasy.in/online-medicine-order/olumiant-4mg-strip-of-7-tablets-226165","https://medex.com.bd/brands/28725/baricit-2-mg-tablet","https://medex.com.bd/brands/28947/barinez-2-mg-tablet","https://medex.com.bd/brands/29025/baritor-2-mg-tablet"]},"basiliximab":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Simulect","Nevian Lifescience PLC","20 mg/vial"]],"src":["https://medex.com.bd/brands/15164/simulect-20-mg-iv-infusion"]},"bempedoic-acid":{"BT":"Bhutan supplies by generic name.","IN":[["Bempesta","Torrent Pharmaceuticals Ltd","Bempesta 180Mg Strip Of 10 Tablets"],["Brillo","Sun Pharma","Brillo 180Mg Strip Of 10 Tablets"],["Bemdac","Zydus Healthcare Limited","Bemdac 180Mg Strip Of 10 Tablets"]],"BD":[["Bempid","Eskayef Pharmaceuticals Ltd","180 mg"],["Novelip","Renata PLC","180 mg"],["Belopid","Navana Pharmaceuticals Ltd","180 mg"]],"src":["https://pharmeasy.in/online-medicine-order/bempesta-180mg-strip-of-10-tablets-3929132","https://pharmeasy.in/online-medicine-order/brillo-180mg-strip-of-10-tablets-3760472","https://pharmeasy.in/online-medicine-order/bemdac-180mg-strip-of-10-tablets-3695273","https://medex.com.bd/brands/31395/bempid-180-mg-tablet","https://medex.com.bd/brands/32623/novelip-180-mg-tablet","https://medex.com.bd/brands/32624/belopid-180-mg-tablet"]},"bendamustine":{"BT":"Bhutan supplies by generic name.","IN":[["Benzz","Intas Pharmaceuticals Ltd","Benzz 100 Mg Injection 1 Ml"],["Adben","Adley Labs","Adben 100 Injection 1 No's"]],"BD":[["Bendamax","Beacon Pharmaceuticals PLC","25 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/benzz-100-mg-injection-1-ml-205266","https://pharmeasy.in/online-medicine-order/adben-100-injection-1-no-s-4122603","https://medex.com.bd/brands/17245/bendamax-25-mg-iv-infusion"]},"benralizumab":{"BT":"Bhutan supplies by generic name.","IN":[["Fasenra","Astrazeneca Pharma India Ltd","Fasenra 30Mg Pre Filled Syringe Of 1Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/fasenra-30-mg-injection-1-ml-4117513"]},"benzathine-benzylpenicillin":{"BT":"Bhutan supplies by generic name.","IN":[["Benzathine","Lavina Pharmaceutical Private Limited","Benzathine Penicillin Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/benzathine-penicillin-injection-1-s-235056"]},"benzonatate":{"BT":"Bhutan supplies by generic name.","IN":[["Benz Pearls","Lupin","Benz Pearls Strip Of 10 Capsules"]],"BD":[["Tussilon","UniMed UniHealth Pharmaceuticals Ltd","100 mg"],["Tusinate","Incepta Pharmaceuticals Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/benz-pearls-strip-of-10-capsules-2982259","https://medex.com.bd/brands/33485/tussilon-100-mg-capsule","https://medex.com.bd/brands/39913/tusinate-100-mg-capsule"]},"benzoyl-peroxide":{"BT":"Bhutan supplies by generic name.","IN":[["Persol","Wallace Pharmaceuticals","Persol Ac 2.5% Tube Of 30Gm Gel"],["Perobar","Ajanta Pharma Limited","Perobar 5% 75Gm Soap"],["Paknet","Percos India Pvt Ltd","Paknet Tube Of 50Gm Creamy Wash"]],"BD":[["Oxigel","UniMed UniHealth Pharmaceuticals Ltd","2.5%"],["Benzac","Drug International Ltd","4%"],["Oxigel Wash","UniMed UniHealth Pharmaceuticals Ltd","5%"]],"src":["https://pharmeasy.in/online-medicine-order/persol-ac-2-5-gel-30gm-193921","https://pharmeasy.in/online-medicine-order/perobar-5-bar-75gm-1342","https://pharmeasy.in/online-medicine-order/paknet-creamy-wash-50gm-21798","https://medex.com.bd/brands/12775/oxigel-25-topical-gel","https://medex.com.bd/brands/13084/benzac-4-cream","https://medex.com.bd/brands/26542/oxigel-wash-5-topical-gel"]},"benzylpenicillin":{"BT":"Bhutan supplies by generic name.","IN":[["Pentids","Abbott Healthcare Pvt Ltd","Pentids 400 Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/pentids-400-tab-10-s-208562"]},"besifloxacin":{"BT":"Bhutan supplies by generic name.","IN":[["Besix","Ajanta Pharma Limited","Besix Bottle Of 5Ml Eye Drops"]],"BD":[["Besibac","Popular Pharmaceuticals PLC","0.6%"],["Besiflox","Aristopharma Ltd","0.6%"],["Besigen","General Pharmaceuticals Ltd","0.6%"]],"src":["https://pharmeasy.in/online-medicine-order/besix-eye-drops-1429","https://medex.com.bd/brands/15706/besibac-06-ophthalmic-suspension","https://medex.com.bd/brands/15707/besiflox-06-ophthalmic-suspension","https://medex.com.bd/brands/15708/besigen-06-ophthalmic-suspension"]},"betamethasone":{"BT":"Bhutan supplies by generic name.","IN":[["Betnesol","Glaxosmithkline","Betnesol Forte Strip Of 20 Tablets"],["Betnovate","Glaxosmithkline","Betnovate 0.1% Tube Of 20Gm Cream"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/betnesol-forte-strip-of-20-tablets-37379","https://pharmeasy.in/online-medicine-order/betnovate-0-1-cream-20gm-37386"]},"betaxolol":{"BT":"Bhutan supplies by generic name.","IN":[["Iobet","Fdc Limited","Iobet Bottle Of 5Ml Eye Drops"]],"BD":[["Optaloc","Popular Pharmaceuticals PLC","0.5%"],["Optibet","Jayson Pharmaceutical Ltd","0.25%"],["Betaxol","Aristopharma Ltd","0.5%"]],"src":["https://pharmeasy.in/online-medicine-order/iobet-eye-drops-5ml-51185","https://medex.com.bd/brands/16052/optaloc-05-eye-drop","https://medex.com.bd/brands/16053/optibet-025-eye-drop","https://medex.com.bd/brands/16054/betaxol-05-eye-drop"]},"bethanechol":{"BT":"Bhutan supplies by generic name.","IN":[["Bethaquest","Morepen Laboratories","Bethaquest 25Mg Strip Of 10 Tablets"],["Urotone","Samarth Life Sciences Pvt Ltd","Urotone Ds Strip Of 10 Tablets"],["Bethnoheal","Leeford Healthcare Ltd","Bethnoheal 25Mg Strip Of 10 Tablets"]],"BD":[["Bethacol","UniMed UniHealth Pharmaceuticals Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/bethaquest-25mg-strip-of-10-tablets-4488582","https://pharmeasy.in/online-medicine-order/urotone-ds-strip-of-10-tablets-3096851","https://pharmeasy.in/online-medicine-order/bethnoheal-25mg-strip-of-10-tablets-4497888","https://medex.com.bd/brands/35622/bethacol-25-mg-tablet"]},"bevacizumab":{"BT":"Bhutan supplies by generic name.","IN":[["Bevatas","Intas Pharmaceuticals Ltd","Bevatas 300Mg Vial Of 12Ml Solution For Infusion"],["Avastin","Roche Products India Private Limited","Avastin 400Mg Vial Of 16Ml Solution For Infusion"],["Bevarest","Emcure Pharmaceuticals Ltd","Bevarest 400Mg Vial Of 16Ml Solution For Injection"]],"BD":[["Bemab","Eskayef Pharmaceuticals Ltd","400 mg/16 ml"],["Avastex","Ziska Pharmaceuticals Ltd","400 mg/16 ml"],["Abevmy","Beximco Pharmaceuticals PLC","400 mg/16 ml"]],"src":["https://pharmeasy.in/online-medicine-order/bevatas-300-injection-1-no-s-4115068","https://pharmeasy.in/online-medicine-order/avastin-400-mg-injection-16-ml-3102389","https://pharmeasy.in/online-medicine-order/bevarest-400-injection-16-ml-4120804","https://medex.com.bd/brands/40203/bemab-400-mg-iv-infusion","https://medex.com.bd/brands/39959/avastex-400-mg-iv-infusion","https://medex.com.bd/brands/38945/abevmy-400-mg-iv-infusion"]},"bicalutamide":{"BT":"Bhutan supplies by generic name.","IN":[["Caluran","Ranbaxy Laboratories (sun Pharma)","Caluran Cp 50Mg Bottle Of 30 Tablets"],["Calutide","Cipla Limited","Calutide 50Mg Strip Of 10 Tablets"],["Tabi","Dr Reddy's Laboratories Ltd","Tabi 50Mg Strip Of 30 Tablets"]],"BD":[["Bical","Beacon Pharmaceuticals PLC","50 mg"],["Bicalon","Drug International Ltd","50 mg"],["Calumide","Healthcare Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/caluran-cp-50mg-tab-30-s-22822","https://pharmeasy.in/online-medicine-order/calutide-50mg-tablet-38844","https://pharmeasy.in/online-medicine-order/tabi-50mg-tab-30-s-8496","https://medex.com.bd/brands/17246/bical-50-mg-tablet","https://medex.com.bd/brands/18264/bicalon-50-mg-tablet","https://medex.com.bd/brands/31248/calumide-50-mg-tablet"]},"bimatoprost":{"BT":"Bhutan supplies by generic name.","IN":[["Bimatos","Chemo Healthcare Pvt Ltd","Bimatos 0.01% Bottle Of 3Ml Eye Drops"],["Lumigan","Allergan India Pvt Ltd","Lumigan 0.01% Bottle Of 3Ml Eye Drops"],["Careprost","Sun Pharma","Careprost 0.03% Bottle Of 3Ml Eye Drops"]],"BD":[["Bimaprost","Popular Pharmaceuticals PLC","0.03%"],["Lumigan","Eskayef Pharmaceuticals Ltd","0.03%"],["Bimatol","Eskayef Pharmaceuticals Ltd","0.03%"]],"src":["https://pharmeasy.in/online-medicine-order/bimatos-0-01-bottle-of-3ml-eye-drops-4488599","https://pharmeasy.in/online-medicine-order/lumigan-0-01-eye-drops-3ml-2965","https://pharmeasy.in/online-medicine-order/careprost-0-03-eye-drops-3ml-39189","https://medex.com.bd/brands/16056/bimaprost-003-eye-drop","https://medex.com.bd/brands/26821/lumigan-003-eye-drop","https://medex.com.bd/brands/28409/bimatol-003-eye-drop"]},"bisoprolol":{"BT":"Bhutan supplies by generic name.","IN":[["Bisotril","Leeford Healthcare Ltd","Bisotril 2.5Mg Strip Of 10 Tablets"],["Concor","Merck Limited","Concor Cor 1.25Mg Strip Of 10 Tablets"],["Bisonol","Knoll Healthcare Pvt Ltd","Bisonol 2.5Mg Strip Of 10 Tablets"]],"BD":[["Bislol","Opsonin Pharma Ltd","1.25 mg"],["Bisopol","Euro Pharma Ltd","2.5 mg"],["Bisofar","Silco Pharmaceutical Ltd","2.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/bisotril-2-5mg-strip-of-10-tablets-3625168","https://pharmeasy.in/online-medicine-order/concor-cor-1-25mg-tablet-41906","https://pharmeasy.in/online-medicine-order/bisonol-2-5mg-strip-of-10-tablets-502356","https://medex.com.bd/brands/29561/bislol-125-mg-tablet","https://medex.com.bd/brands/30279/bisopol-25-mg-tablet","https://medex.com.bd/brands/31460/bisofar-25-mg-tablet"]},"bivalirudin":{"BT":"Bhutan supplies by generic name.","IN":[["Flopace","Ranbaxy Laboratories (sun Pharma)","Flopace 250Mg Injection"]],"BD":[["Biva","Healthcare Pharmaceuticals Ltd","250 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/flopace-250mg-inj-87123","https://medex.com.bd/brands/26861/biva-250-mg-injection"]},"bleomycin":{"BT":"Bhutan supplies by generic name.","IN":[["Bleocin","Khandelwal Laboratories Ltd","Bleocin 15Iu Iinjection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/bleocin-15iu-iinjection-37931"]},"bortezomib":{"BT":"Bhutan supplies by generic name.","IN":[["Bortrac","Glenmark Pharmaceuticals","Bortrac 2Mg Dry Vial Of 1 Powder For Injection"],["Borviz","Intas Pharmaceuticals Ltd","Borviz 2Mg Dry Vial Of 1 Powder For Injection"],["Bortiva","Getwell Life Science Pvt Ltd","Bortiva Vial Of 2Mg Powder For Injection"]],"BD":[["Bortez","Beacon Pharmaceuticals PLC","1 mg/vial"],["Velcade","UniMed UniHealth Pharmaceuticals Ltd","1 mg/vial"],["Bortemo","Healthcare Pharmaceuticals Ltd","2 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/bortrac-2mg-vial-of-0-002gm-powder-for-injection-133949","https://pharmeasy.in/online-medicine-order/borviz-2mg-inj-83763","https://pharmeasy.in/online-medicine-order/bortiva-2mg-inj-165603","https://medex.com.bd/brands/35219/bortezomib-35-mg-injection","https://medex.com.bd/brands/28308/velcade-1-mg-injection","https://medex.com.bd/brands/39379/bortemo-2-mg-injection"]},"bosentan":{"BT":"Bhutan supplies by generic name.","IN":[["Bosentas","Cipla Limited","Bosentas 62.5Mg Strip Of 10 Tablets"],["Bosentime","Steris Healthcare","Bosentime 62.5Mg Strip Of 10 Tablets"],["Lupibose","Lupin","Lupibose 62.5Mg Strip Of 10 Tablets"]],"BD":[["Pulmoten","UniMed UniHealth Pharmaceuticals Ltd","62.50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/bosentas-62-5mg-tablet-6651","https://pharmeasy.in/online-medicine-order/bosentime-62-5mg-strip-of-10-tablets-4490434","https://pharmeasy.in/online-medicine-order/lupibose-62-5mg-tablet-16993","https://medex.com.bd/brands/2906/pulmoten-6250-mg-tablet"]},"bosutinib":{"BT":"Bhutan supplies by generic name.","IN":[["Bonitar","Sun Pharma","Bonitar 100Mg Strip Of 10 Tablets"],["Bosutris","Mylan Pharmaceuticals Private Limited - A Viatris Company","Bosutris 400Mg Bottle Of 30 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/bonitar-100-mg-tablet-10-no-s-4120977","https://pharmeasy.in/online-medicine-order/bosutris-400mg-bottle-of-30-tablets-3580594"]}};
  Object.entries(B).forEach(([id, b]) => { if (window.FDB[id]) window.FDB[id].brands = b; });
})();
