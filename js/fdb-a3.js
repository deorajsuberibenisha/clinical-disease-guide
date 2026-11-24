/* Clinical Disease Guide — Drug monograph database, block A, batch 3 (24 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Research packs: _work/fdb/packs/<drug>.txt; extra product labels in _work/research/labels/. */

FDB_M("aclidinium-bromide", {
  inn: "Aclidinium bromide", atc: "R03BB05", cls: "Long-acting muscarinic antagonist (LAMA), inhaled",
  linked: [["COPD — adults", "Maintenance bronchodilator [FDA]", "copd-adult"]],
  forms: ["Dry-powder inhaler, 400 micrograms per actuation [FDA]."],
  moa: "Blocks muscarinic M3 receptors in airway smooth muscle → bronchodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Effective half-life 5–8 h [FDA].", "Additive effects with other anticholinergics — avoid combining [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Maintenance treatment of COPD; not for acute relief [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["COPD maintenance", "One inhalation (400 micrograms) twice daily, about 12 hours apart [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Inhaler; fixed dose." },
  adj: { other: "Caution in narrow-angle glaucoma and urinary retention (prostatic hyperplasia, bladder-neck obstruction) [FDA]." },
  tox: { human: "Single inhaled doses up to 6,000 micrograms caused no systemic anticholinergic effects in volunteers [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Severe hypersensitivity to milk proteins [FDA].", "Hypersensitivity to aclidinium or excipients [FDA]."],
  ae: { common: ["Headache, nasopharyngitis, cough (3% or more) [FDA]."], serious: ["Paradoxical bronchospasm; worsening narrow-angle glaucoma; urinary retention; immediate hypersensitivity [FDA]"] },
  monitor: ["Symptoms and inhaler technique [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025; tiotropium is the listed LAMA [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "TUDORZA PRESSAIR (aclidinium bromide inhalation powder) — Covis Pharma, label effective 2022-08-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6f92cceb-a63f-4470-99b6-56179d98f10f"]],
  dose: { tagline: "Twice-daily inhaled bronchodilator for long-term COPD control.",
    adult: [{ ind: "COPD maintenance", text: "One inhalation of 400 micrograms twice daily. Not for rescue use." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("adefovir-dipivoxil", {
  inn: "Adefovir dipivoxil", atc: "J05AF08", cls: "Nucleotide reverse-transcriptase inhibitor (hepatitis B)",
  linked: [["Viral hepatitis — adults", "Chronic hepatitis B (older agent) [FDA]", "hepatitis-adult"]],
  forms: ["Tablets 10 mg [FDA]."],
  moa: "Adefovir diphosphate inhibits HBV DNA polymerase and terminates viral DNA chains [UNVERIFIED-KNOWLEDGE].",
  pk: ["Removed by haemodialysis (about 35% in 4 hours) [FDA].", "Do not give with tenofovir-containing products [FDA]."],
  ind: { adult: ["Chronic hepatitis B with active replication and raised ALT/AST or active histology; including lamivudine-resistant HBV [FDA]."], paed: ["From 12 years [FDA]."] },
  adult: [["Chronic hepatitis B", "10 mg once daily [FDA]."]],
  paed: { tiers: ["12 years and older: 10 mg once daily [FDA].", "Adolescents with kidney impairment: no recommendation [FDA]."], transition: "Adult dose from 12 years.", calcNote: "Kidney function sets the interval." },
  adj: { renal: "CrCl (Cockcroft–Gault, lean or ideal weight) 50 or more: 10 mg every 24 h; 30–49: every 48 h; 10–29: every 72 h; haemodialysis: every 7 days after dialysis; under 10 without dialysis: no recommendation [FDA].", other: "Offer HIV testing first (resistance risk) [FDA]." },
  tox: { human: "500 mg daily for 2 weeks or 250 mg daily for 12 weeks caused GI effects [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis removes about 35% [FDA]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Weakness, headache, abdominal pain, nausea (over 5%) [FDA]."], serious: ["Severe hepatitis flare on stopping; nephrotoxicity; HIV resistance; lactic acidosis with hepatomegaly [FDA]"] },
  monitor: ["Kidney function throughout [FDA].", "Liver function for several months after stopping [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 (tenofovir is the hepatitis B drug used) [BT-STG]." },
  calc: [
    { drug: "adefovir-dipivoxil", indication_id: "hbv", label: "Chronic hepatitis B", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablet",
      renal: [{ crcl_min: 30, crcl_max: 49.99, action: "extend_interval", factor: 48 }, { crcl_min: 10, crcl_max: 29.99, action: "extend_interval", factor: 72 }, { crcl_min: 0, crcl_max: 9.99, action: "avoid", factor: null, note: "CrCl under 10 without haemodialysis — no dose recommendation (haemodialysis: 10 mg every 7 days after dialysis)" }],
      flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Adefovir dipivoxil tablets — Apotex, label effective 2025-07-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=08e07fae-3191-b6a3-c894-d3a8cc53923f"]],
  dose: { tagline: "Older once-daily hepatitis B tablet, now largely replaced by tenofovir or entecavir.",
    boxedTitle: "Hepatitis flares, nephrotoxicity, HIV resistance, lactic acidosis",
    boxed: "Severe acute exacerbations of hepatitis have been reported in patients who discontinued anti-hepatitis B therapy; monitor hepatic function for at least several months after stopping. Chronic use may cause nephrotoxicity in patients at risk of or with renal dysfunction. HIV resistance may emerge in untreated HIV infection. Lactic acidosis and severe hepatomegaly with steatosis have been reported [FDA].",
    adult: [{ ind: "Chronic hepatitis B", text: "10 mg once daily. CrCl 30–49: every 48 h; 10–29: every 72 h; haemodialysis: every 7 days after dialysis.", calc: ["hbv"] }],
    child: [{ ind: "12 years and older", text: "10 mg once daily.", calc: ["hbv"] }, { ind: "Under 12 years", text: "Not established." }] }
});

FDB_M("amikacin", {
  inn: "Amikacin", atc: "J01GB06", cls: "Aminoglycoside antibiotic",
  linked: [["Tuberculosis — adults", "MDR-TB only in Bhutan [BT-NEML]", "tb-adult"]],
  forms: ["Injection 250 mg/mL (IV or IM) [FDA] [BT-NEML].", "Liposomal inhalation suspension 590 mg/8.4 mL (ARIKAYCE) for refractory MAC lung disease — a separate product [FDA]."],
  moa: "Binds the bacterial 30S ribosomal subunit → misreading of mRNA → bactericidal, concentration-dependent killing [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted; measure peak (30–90 min after the dose) and trough levels: avoid peaks above 35 and troughs above 10 micrograms/mL [FDA].", "Avoid other nephrotoxic or ototoxic drugs and potent diuretics [FDA]."],
  ind: { adult: ["Serious Gram-negative infections due to susceptible organisms [FDA].", "Bhutan: MDR-TB only [BT-NEML]."], paed: ["Same; newborns with a loading dose [FDA]."] },
  adult: [["Serious Gram-negative infection", "15 mg/kg/day IV or IM in 2–3 equal doses (7.5 mg/kg every 12 h or 5 mg/kg every 8 h); maximum 1.5 g/day; usually 7–10 days [FDA]."]],
  paed: { tiers: ["Children and older infants: 15 mg/kg/day in 2–3 doses (as adults) [FDA].", "Newborns: loading dose 10 mg/kg, then 7.5 mg/kg every 12 h [FDA]."], transition: "Same mg/kg; adult maximum 1.5 g/day.", calcNote: "Weight-based; kidney impairment needs level-guided dosing." },
  adj: { renal: "Kidney impairment: extend the interval (label method: interval in hours = serum creatinine mg/dL × 9) or reduce the dose in proportion to CrCl, guided by serum levels [FDA].", other: "Use pretreatment body weight [FDA]. Treatment beyond 10–14 days needs levels and renal, hearing and balance monitoring [FDA]." },
  tox: { human: "Nephrotoxicity, ototoxicity, neuromuscular blockade [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; haemodialysis can remove amikacin [FDA]." },
  contra: ["Hypersensitivity to aminoglycosides [FDA]."],
  ae: { common: ["Nephrotoxicity, ototoxicity (hearing and balance) [FDA]."], serious: ["Permanent hearing loss; acute kidney injury; neuromuscular blockade and respiratory paralysis [FDA]"] },
  monitor: ["Serum creatinine and levels during therapy; hearing and balance with prolonged use [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: amikacin 250 mg/mL injection (2 mL), for MDR-TB cases only [BT-NEML].", strengths: "250 mg/mL, 2 mL.", stg: "Not in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "amikacin", indication_id: "gn", label: "Serious Gram-negative infection — q12h", route: "IV", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1500, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 250, unit: "mg/mL" }], rounding: "Exact mL [NEP]", renal: [], renal_note: "Kidney impairment — extend the interval or reduce the dose per the label method, guided by serum levels [FDA]", flags: [], sources: ["FDA"] },
    { drug: "amikacin", indication_id: "neonate", label: "Newborn — maintenance after a 10 mg/kg load", route: "IV", population: { min_age_months: 0, max_age_months: 0.99, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 7.5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 250, unit: "mg/mL" }], rounding: "Exact mL; dilute small doses [NEP]", renal: [], pma_note: "Preterm and very low birth weight babies need extended intervals guided by levels [UNVERIFIED-KNOWLEDGE]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Amikacin sulfate injection USP — Mullan Pharmaceutical, label effective 2026-01-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=840ba25a-d60c-4f0d-a084-71b0c68237df"], ["FDA", "ARIKAYCE (amikacin liposome inhalation suspension) — Insmed, label effective 2026-08-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=499ab990-2b21-474f-aaba-d86388965f40"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Injectable aminoglycoside for resistant Gram-negative infections; reserved for MDR-TB in Bhutan.",
    boxedTitle: "Ototoxicity, nephrotoxicity and neuromuscular blockade",
    boxed: "Patients treated with parenteral aminoglycosides should be under close clinical observation because of potential ototoxicity and nephrotoxicity. Safety beyond 14 days is not established. Neurotoxicity (vestibular and permanent bilateral auditory ototoxicity) can occur, especially with renal damage, higher doses or longer courses [FDA].",
    adult: [{ ind: "Serious Gram-negative infection", text: "15 mg/kg/day IV or IM in 2–3 doses (7.5 mg/kg every 12 h or 5 mg/kg every 8 h); maximum 1.5 g/day; 7–10 days. Kidney impairment: level-guided interval.", calc: ["gn"], bt: "Bhutan NEML: for MDR-TB only." }],
    child: [{ ind: "Children and older infants", text: "15 mg/kg/day in 2–3 doses.", calc: ["gn"] }, { ind: "Newborns", text: "10 mg/kg loading dose, then 7.5 mg/kg every 12 hours.", calc: ["neonate"] }] }
});

FDB_M("amiloride", {
  inn: "Amiloride", atc: "C03DB01", cls: "Potassium-sparing diuretic",
  linked: [["Heart failure — adults", "Adjunct to a thiazide or loop diuretic to prevent hypokalaemia [FDA]", "hf-adult"], ["Hypertension — adults", "Adjunct to a thiazide [FDA]", "htn-adult"]],
  forms: ["Tablets 5 mg; take with food [FDA]."],
  moa: "Blocks epithelial sodium channels in the distal nephron → less sodium reabsorption and less potassium loss [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 6–9 h; peak at 3–4 h [FDA].", "Hyperkalaemia risk with ACE inhibitors, ARBs, ciclosporin, tacrolimus, NSAIDs; never with other potassium-sparing drugs or potassium supplements [FDA].", "Reduces lithium clearance [FDA]."],
  ind: { adult: ["With a thiazide or other kaliuretic diuretic in heart failure or hypertension, to restore or prevent low potassium [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Prevent or treat diuretic hypokalaemia", "5 mg once daily added to the kaliuretic diuretic; may increase to 10 mg/day; rarely 15–20 mg with careful electrolyte monitoring [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { renal: "Contraindicated in renal insufficiency, anuria and diabetic nephropathy; BUN over 30 mg/dL or creatinine over 1.5 mg/dL signals impairment [FDA].", other: "Diabetes and older age also raise hyperkalaemia risk [FDA]." },
  tox: { human: "No human overdose data; expect dehydration and electrolyte imbalance [FDA].", animal: "Oral LD50: mouse 56 mg/kg; rat 36–85 mg/kg [FDA].", manage: "Stop; observe; treat electrolytes; no specific antidote [FDA]." },
  contra: ["Serum potassium over 5.5 mmol/L [FDA].", "Other potassium-sparing drugs or potassium supplements [FDA].", "Anuria, acute or chronic renal insufficiency, diabetic nephropathy [FDA]."],
  ae: { common: ["Hyperkalaemia, headache, nausea, diarrhoea [FDA]."], serious: ["Life-threatening hyperkalaemia [FDA]"] },
  monitor: ["Serum potassium at the start, after dose changes, and during any illness affecting kidney function [FDA]."],
  local: { neml: "Not found on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "amiloride", indication_id: "k_spare", label: "Potassium sparing — added to a diuretic", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 20, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Kidney impairment greatly raises hyperkalaemia risk — check potassium [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Amiloride hydrochloride tablets — Kesin Pharma, label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5eedadbd-9be9-b920-e063-6394a90afa68"]],
  dose: { tagline: "Potassium-sparing diuretic tablet added to thiazide or loop diuretics.",
    boxedTitle: "Hyperkalaemia",
    boxed: "Like other potassium-conserving agents, amiloride may cause hyperkalemia (serum potassium greater than 5.5 mEq/L), which if uncorrected is potentially fatal. It occurs in about 10% without a kaliuretic diuretic, more often with renal impairment, diabetes and in the elderly. Monitor serum potassium carefully, especially at the start, at dose changes and during illness affecting renal function [FDA].",
    adult: [{ ind: "Diuretic-related hypokalaemia (with a thiazide or loop diuretic)", text: "5 mg once daily with food; up to 10 mg/day (rarely 15–20 mg with close monitoring).", calc: ["k_spare"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("aminocaproic-acid", {
  inn: "Aminocaproic acid", atc: "B02AA01", cls: "Antifibrinolytic",
  linked: [["Bleeding disorders — adults", "Bleeding from excess fibrinolysis [FDA]", "bleeding-adult"]],
  forms: ["Tablets 500 mg, 1,000 mg; oral solution 1.25 g/5 mL; injection (IV) [FDA]."],
  moa: "Blocks plasminogen binding to fibrin → inhibits fibrinolysis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Terminal half-life about 2 h [FDA]."],
  ind: { adult: ["Bleeding where fibrinolysis contributes (after cardiac surgery or portacaval shunt, aplastic anaemia, abruptio placentae, cirrhosis, some cancers, urinary fibrinolysis) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Acute fibrinolytic bleeding", "5 g in the first hour (oral or IV), then 1 g per hour (oral tablets) or 1.25 g per hour (oral solution) for about 8 hours or until bleeding is controlled [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed loading then hourly dose." },
  adj: { renal: "Upper urinary tract bleeding: risk of intrarenal obstruction — avoid unless benefit outweighs risk [FDA].", other: "Exclude DIC before use (platelets usually low in DIC, normal in primary fibrinolysis) [FDA]." },
  tox: { human: "IV overdose: from no effect to hypotension and fatal acute kidney failure; seizures after an 8 g bolus in one patient [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Active intravascular clotting (DIC) [FDA]."],
  ae: { common: ["Nausea, dizziness and other GI effects [FDA]."], serious: ["Thrombosis; intrarenal obstruction; skeletal muscle weakness and necrosis with prolonged use [FDA]"] },
  monitor: ["CK in patients on long-term treatment [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025; tranexamic acid (tablets and injection) is the listed antifibrinolytic [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Aminocaproic acid tablets and oral solution — Hikma, label effective 2024-01-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7b8f0ddb-00fd-4c22-afae-afe636f95f3a"]],
  dose: { tagline: "Antifibrinolytic for bleeding driven by excess clot breakdown; tranexamic acid is the Bhutan alternative.",
    adult: [{ ind: "Acute fibrinolytic bleeding", text: "5 g in the first hour, then 1 g every hour (1.25 g with oral solution) for about 8 hours or until controlled. Exclude DIC first.", bt: "Bhutan NEML lists tranexamic acid instead." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("aminophylline", {
  inn: "Aminophylline", atc: "R03DA05", cls: "Methylxanthine bronchodilator (theophylline with ethylenediamine)",
  linked: [["Asthma — adults", "Adjunct in acute severe asthma [FDA]", "asthma-adult"], ["COPD — adults", "Adjunct in exacerbations [FDA]", "copd-adult"]],
  forms: ["Injection for IV use [FDA].", "Aminophylline dose = theophylline dose ÷ 0.8 (5.7 mg/kg aminophylline = 4.6 mg/kg theophylline) [FDA]."],
  moa: "Theophylline relaxes bronchial smooth muscle (phosphodiesterase inhibition and adenosine antagonism) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Clearance varies fourfold between patients; half-life about 4 h in children 1–9 years and 8 h in non-smoking adults [FDA].", "Clearance falls with age under 1 year, older age, heart failure, liver disease, fever, and drugs such as cimetidine and erythromycin [FDA]."],
  ind: { adult: ["Adjunct to inhaled beta-2 agonists and systemic steroids in acute asthma and chronic lung disease exacerbations [FDA]."], paed: ["Same, with weight-based loading and infusion [FDA]."] },
  adult: [["Acute exacerbation", "If no theophylline in the past 24 h: loading 5.7 mg/kg aminophylline (ideal body weight) over 30 min (raises level by about 2 microgram/mL per mg/kg theophylline). Then infusion: non-smoking adults about 0.5 mg/kg/h aminophylline; check a level one half-life later; target 10–20 microgram/mL [FDA]."]],
  paed: { tiers: ["Children 1–9 years: loading 5.7 mg/kg aminophylline, then about 1.0 mg/kg/h; level after about 4 h [FDA].", "Neonates and infants under 1 year: reduced clearance — specialist dosing with levels [FDA]."], transition: "Rates differ by age; use levels.", calcNote: "Loading dose on ideal body weight." },
  adj: { other: "Already on theophylline: measure a level before any loading dose [UNVERIFIED-KNOWLEDGE]. Extreme caution with peptic ulcer, seizures, arrhythmias [FDA]." },
  tox: { human: "Toxicity may be fatal; acute and chronic overdose differ; seizures and arrhythmias [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; levels; treat seizures and arrhythmias; oral charcoal and haemodialysis in severe cases [FDA]." },
  contra: ["Hypersensitivity to theophylline or ethylenediamine [FDA]."],
  ae: { common: ["Nausea, vomiting, headache, insomnia, tremor, tachycardia [FDA]."], serious: ["Seizures, arrhythmias, death at high levels [FDA]"] },
  monitor: ["Serum theophylline level one half-life after starting the infusion and at intervals [FDA]."],
  local: { neml: "Not found on the Bhutan NEML 2025; oral theophylline–etofylline was removed as not recommended by GINA and GOLD [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "aminophylline", indication_id: "load", label: "Loading dose (no theophylline in past 24 h)", route: "IV", population: { min_age_months: 12, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 5.7, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "ideal", infusion: { duration_h: 0.5 },
      formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "Exact mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Aminophylline injection USP — HF Acquisition (HealthFirst), label effective 2026-11-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=819207a2-0c37-b275-e053-2a91aa0afb36"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "IV methylxanthine add-on for severe asthma or COPD exacerbations, dosed with blood levels.",
    adult: [{ ind: "Acute asthma or COPD exacerbation (adjunct)", text: "No theophylline in 24 h: 5.7 mg/kg (ideal weight) IV over 30 minutes, then about 0.5 mg/kg/h in non-smoking adults. Level after one half-life; target 10–20 microgram/mL.", calc: ["load"] }],
    child: [{ ind: "Children 1–9 years", text: "5.7 mg/kg over 30 minutes, then about 1.0 mg/kg/h; level after about 4 hours.", calc: ["load"] }, { ind: "Under 1 year", text: "Specialist dosing with levels." }] }
});

FDB_M("amiodarone", {
  inn: "Amiodarone", atc: "C01BD01", cls: "Class III antiarrhythmic", risk: "High-alert (IV route) — IV antiarrhythmics are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Atrial fibrillation — adults", "Rhythm control and rate control when others fail [UNVERIFIED-KNOWLEDGE]", "af-adult"]],
  forms: ["Injection 50 mg/mL [FDA]; 3 mL ampoule in Bhutan [BT-NEML].", "Tablets 200 mg [FDA] [BT-NEML].", "IV: dilute in D5W; use a central line for long infusions where possible [UNVERIFIED-KNOWLEDGE]."],
  moa: "Prolongs action-potential duration and refractoriness (class III) with sodium-channel, beta- and calcium-channel blocking effects [UNVERIFIED-KNOWLEDGE].",
  pk: ["Terminal half-life 9–36 days (amiodarone) and 9–30 days (desethylamiodarone); effects and interactions persist after stopping [FDA].", "Substrate of CYP3A and CYP2C8; inhibits P-gp and CYP1A2, 2C9, 2D6 and 3A — raises warfarin, digoxin, simvastatin and other levels [FDA].", "Avoid other QT-prolonging drugs [FDA].", "Not dialysable [FDA]."],
  ind: { adult: ["IV: recurrent ventricular fibrillation and haemodynamically unstable VT refractory to other therapy [FDA].", "Oral: life-threatening recurrent ventricular arrhythmias [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["IV for VF / unstable VT (first 24 h ≈ 1,000 mg)", "150 mg over 10 min (15 mg/min), then 360 mg over 6 h (1 mg/min), then 540 mg over 18 h (0.5 mg/min); continue 0.5 mg/min. Breakthrough VF/VT: extra 150 mg over 10 min [FDA]."], ["Oral ventricular arrhythmias", "Loading 800–1,600 mg/day until response (usually 1–3 weeks), then 600–800 mg/day for 1 month, then usually 400 mg/day; lowest effective dose [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed regimens; no weight calculation." },
  adj: { hepatic: "Monitor liver enzymes; hepatotoxicity can be fatal [FDA].", preg: "Can cause fetal harm (thyroid, bradycardia); long half-life matters when planning pregnancy [FDA].", other: "Baseline chest X-ray, lung function, thyroid and liver tests; correct low K, Mg and Ca first [FDA]." },
  tox: { human: "Hypotension, cardiogenic shock, bradycardia, AV block, hepatotoxicity; some fatal [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Slow the infusion; vasopressors, inotropes, fluids; temporary pacing; monitor liver enzymes; not dialysable [FDA]." },
  contra: ["Hypersensitivity including to iodine [FDA].", "Cardiogenic shock; marked sinus bradycardia; second- or third-degree AV block without a pacemaker [FDA]."],
  ae: { common: ["IV: hypotension (16%), bradycardia, AV block [FDA].", "Oral: GI upset, photosensitivity, corneal microdeposits, thyroid dysfunction [FDA]."], serious: ["Pulmonary toxicity (up to 17%, fatal in about 10% of cases); hepatotoxicity; proarrhythmia including torsades; hypo- or hyperthyroidism; optic neuropathy [FDA]"] },
  monitor: ["ECG and blood pressure during IV use [FDA].", "Chest X-ray, lung function, thyroid and liver tests at baseline and periodically [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: amiodarone 200 mg tablet (to district hospitals with a medical specialist) and 50 mg/mL injection, 3 mL [BT-NEML].", strengths: "200 mg tablet; 150 mg/3 mL injection.", stg: "Not specified in Bhutan STG 2024 text [BT-STG]." },
  calc: [],
  sources: [["FDA", "Amiodarone hydrochloride injection — Zhejiang Poly Pharm, label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a28ae25-7cc4-4ac0-a2ba-7820fb93e25c"], ["FDA", "Amiodarone hydrochloride tablets — Cardinal Health, label effective 2026-04-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0caedb97-56fd-4ec0-bfb2-c7683b8f5f1b"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Potent antiarrhythmic for life-threatening ventricular arrhythmias, given IV or by mouth.",
    boxedTitle: "Pulmonary, hepatic and cardiac toxicity (oral)",
    boxed: "Amiodarone is intended for use only in patients with the indicated life-threatening arrhythmias because its use is accompanied by substantial toxicity. It can cause pulmonary toxicity (hypersensitivity or interstitial/alveolar pneumonitis) at rates as high as 17%, fatal about 10% of the time. Obtain a baseline chest X-ray and pulmonary-function tests. It can also cause hepatotoxicity and worsened arrhythmia [FDA].",
    adult: [{ ind: "VF or unstable VT (IV, first 24 h)", text: "150 mg over 10 minutes, then 1 mg/min for 6 hours (360 mg), then 0.5 mg/min for 18 hours (540 mg) and onward. Extra 150 mg over 10 minutes for breakthrough." }, { ind: "Oral, ventricular arrhythmias", text: "800–1,600 mg/day for 1–3 weeks, then 600–800 mg/day for 1 month, then usually 400 mg/day.", bt: "Bhutan NEML: 200 mg tablets; 150 mg/3 mL injection." }],
    child: [{ ind: "Children", text: "Not established in the FDA label." }] }
});

FDB_M("amitriptyline", {
  inn: "Amitriptyline", atc: "N06AA09", cls: "Tricyclic antidepressant",
  linked: [["Depression — adults", "Depression (label) [FDA]", "depression-adult"], ["Irritable bowel syndrome — adults", "Low-dose neuromodulator, off-label [UNVERIFIED-KNOWLEDGE]", "ibs-adult"]],
  forms: ["Tablets 10, 25, 50, 75, 100, 150 mg [UNVERIFIED-KNOWLEDGE]; 25 mg in Bhutan [BT-NEML]."],
  moa: "Blocks reuptake of noradrenaline and serotonin; also anticholinergic, antihistamine and alpha-blocking effects [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2D6 poor metabolisers have higher levels; topiramate can raise levels markedly [FDA].", "Never with MAO inhibitors (allow 14 days); allow at least 5 weeks after fluoxetine [FDA]."],
  ind: { adult: ["Symptoms of depression [FDA]."], paed: ["Not established in primary source for children under 12. [NEP]"] },
  adult: [["Depression", "Outpatients: 75 mg/day in divided doses, up to 150 mg/day; or 50–100 mg at bedtime increased by 25–50 mg to 150 mg. Inpatients: 100 mg/day up to 200 mg (a few up to 300 mg). Maintenance 50–100 mg/day (40 mg may suffice), often as one bedtime dose [FDA]."]],
  paed: { tiers: ["Adolescents (and older adults): 10 mg three times daily plus 20 mg at bedtime may suffice [FDA].", "Children under 12: not established [NEP]."], transition: "Lower doses in adolescents.", calcNote: "Fixed doses; no weight calculation." },
  adj: { other: "Older adults: lower doses (10 mg three times daily + 20 mg at bedtime) [FDA]." },
  tox: { human: "Overdose can be fatal: arrhythmias, severe hypotension, seizures, coma; QRS widening [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Hospital monitoring; contact a poisons centre; sodium bicarbonate for QRS widening [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA].", "With MAO inhibitors or within 14 days [FDA].", "Acute recovery phase after myocardial infarction [FDA]."],
  ae: { common: ["Dry mouth, constipation, drowsiness, blurred vision, urinary retention [FDA]."], serious: ["Suicidality in young people; arrhythmia and QT prolongation; seizures; angle-closure glaucoma [FDA]"] },
  monitor: ["Mood and suicidal thoughts, especially early and at dose changes [FDA].", "ECG in cardiac disease or high doses [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: amitriptyline 25 mg tablet [BT-NEML].", strengths: "25 mg.", stg: "Included in Bhutan STG 2024 [BT-STG]." },
  verify: [["Adult depression dose", "25 mg at night, increasing to 75–100 mg (STG 12.5–100 mg)", "75 mg/day divided or 50–100 mg at bedtime, up to 150 mg (outpatients) [FDA]", "⚠ Discrepancy", "Guide card starts lower (common practice); FDA start shown here"], ["Neuropathic pain", "10–25 mg at night", "Not an FDA-labelled use", "ℹ Off-label", "Keep in guide card; not in label"]],
  calc: [],
  sources: [["FDA", "Amitriptyline hydrochloride tablets — PD-Rx, label effective 2026-11-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1523a2b4-f9d6-4d3c-a370-df579ed36911"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Tricyclic antidepressant, also used in low doses for nerve pain and IBS.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Antidepressants increased the risk compared to placebo of suicidal thinking and behavior in children, adolescents and young adults in short-term studies of major depressive disorder and other psychiatric disorders. Balance this risk with clinical need, and monitor all patients started on antidepressants for clinical worsening, suicidality or unusual changes in behavior [FDA].",
    adult: [{ ind: "Depression", text: "75 mg/day in divided doses (or 50–100 mg at bedtime), increasing to 150 mg/day; maintenance 50–100 mg/day. Older adults: 10 mg three times daily + 20 mg at bedtime.", bt: "Bhutan STG starts lower (about 25 mg at night)." }],
    child: [{ ind: "Adolescents", text: "10 mg three times daily + 20 mg at bedtime may suffice." }, { ind: "Children under 12", text: "Not established." }] }
});

FDB_M("amlodipine", {
  inn: "Amlodipine", atc: "C08CA01", cls: "Dihydropyridine calcium-channel blocker",
  linked: [["Hypertension — adults", "First-line antihypertensive [FDA] [BT-STG]", "htn-adult"], ["Hypertension — children", "6–17 years [FDA]", "htn-child"]],
  forms: ["Tablets 2.5, 5, 10 mg [FDA]; 5 mg in Bhutan (to PHC) [BT-NEML]."],
  moa: "Blocks L-type calcium channels in vascular smooth muscle → arterial vasodilatation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Terminal half-life 30–50 h (56 h in liver failure) [FDA].", "CYP3A inhibitors raise levels; with simvastatin do not exceed 20 mg simvastatin daily [FDA]."],
  ind: { adult: ["Hypertension [FDA].", "Chronic stable and vasospastic angina; coronary artery disease without heart failure [FDA]."], paed: ["Hypertension, 6–17 years [FDA]."] },
  adult: [["Hypertension", "5 mg once daily; maximum 10 mg; wait 7–14 days between steps. Small, frail or older patients, or liver impairment: start 2.5 mg [FDA]."], ["Angina, CAD", "5–10 mg once daily [FDA]."]],
  paed: { tiers: ["6–17 years: 2.5–5 mg once daily; doses above 5 mg not studied [FDA]."], transition: "Adult dosing from 18 years.", calcNote: "Fixed dose; paediatric maximum 5 mg in the label." },
  adj: { hepatic: "Start 2.5 mg; titrate slowly in severe impairment [FDA].", other: "Severe aortic stenosis: risk of symptomatic hypotension [FDA]." },
  tox: { human: "Marked hypotension from vasodilatation, possible reflex tachycardia [FDA].", animal: "Oral lethal doses: mice 40 mg/kg, rats 100 mg/kg (as amlodipine) [FDA].", manage: "Supportive: elevate legs, fluids, vasopressors; calcium may help [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known sensitivity to amlodipine [FDA]."],
  ae: { common: ["Dose-related oedema; fatigue, nausea, abdominal pain, somnolence [FDA]."], serious: ["Worsening angina or MI after starting or increasing (severe obstructive CAD) [FDA]"] },
  monitor: ["Blood pressure; ankle oedema [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: amlodipine 5 mg tablet (to PHC) [BT-NEML].", strengths: "5 mg.", stg: "Bhutan STG 2024 and hypertension protocol use amlodipine as a first-line antihypertensive [BT-STG]." },
  verify: [["Adult dose", "5 mg once daily; max 10 mg", "Same [FDA]", "✅ Match", "Keep"], ["Child dose", "1–5 y 0.1 mg/kg/day (max 0.6 mg/kg/day, 5 mg); 6 y and over 2.5 mg, max 10 mg/day (AAP 2017)", "6–17 y: 2.5–5 mg once daily; above 5 mg not studied [FDA]", "⚠ Discrepancy", "Guide card follows AAP 2017; FDA label caps at 5 mg — both shown"]],
  calc: [
    { drug: "amlodipine", indication_id: "htn", label: "Hypertension — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole or half tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "amlodipine", indication_id: "htn_child", label: "Hypertension — 6–17 years", route: "PO", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 2.5, value_max: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 5, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Amlodipine besylate tablets — PD-Rx, label effective 2026-07-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1080fcea-a5da-499d-a855-690c13559071"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Once-daily calcium-channel blocker for high blood pressure and angina.",
    adult: [{ ind: "Hypertension", text: "5 mg once daily; up to 10 mg. Frail, older or liver impairment: start 2.5 mg.", calc: ["htn"], bt: "Bhutan NEML: 5 mg tablets, available to PHC." }],
    child: [{ ind: "Hypertension, 6–17 years", text: "2.5–5 mg once daily (doses above 5 mg not studied in the FDA label; AAP 2017 allows up to 10 mg).", calc: ["htn_child"] }] }
});

FDB_M("amoxicillin", {
  inn: "Amoxicillin", atc: "J01CA04", cls: "Aminopenicillin (beta-lactam antibiotic)",
  linked: [["Pneumonia — children", "First line for non-severe pneumonia [WHO-GL] [BT-STG]", "pneumonia-child"], ["Pneumonia — adults", "Community-acquired pneumonia [BT-STG]", "pneumonia-adult"], ["Otitis media — children", "First line [UNVERIFIED-KNOWLEDGE]", "otitis-child"], ["Newborn skin, cord and eye infections", "Local bacterial infection (IMNCI) [BT-IMNCI]", "neolocal-child"]],
  forms: ["Tablets 500 mg, 875 mg; capsules 250, 500 mg; suspension 125 and 250 mg/5 mL [FDA].", "Bhutan: 250 mg capsule, 1,000 mg tablet, 125 and 250 mg/5 mL syrup [BT-NEML].", "Take at the start of a meal to reduce stomach upset [FDA]."],
  moa: "Binds penicillin-binding proteins → inhibits bacterial cell-wall synthesis; destroyed by beta-lactamases [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted; dose interval lengthened when GFR is under 30 [FDA].", "Probenecid raises levels; may reduce oral contraceptive effect (theoretical) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Ear, nose, throat, skin, genitourinary and lower respiratory infections due to susceptible organisms; H. pylori eradication [FDA]."], paed: ["Same, from birth (neonates up to 30 mg/kg/day) [FDA]."] },
  adult: [["ENT, skin, GU — mild/moderate", "500 mg every 12 h or 250 mg every 8 h [FDA]."], ["ENT, skin, GU — severe; lower respiratory tract", "875 mg every 12 h or 500 mg every 8 h [FDA]."], ["H. pylori", "1 g twice daily with clarithromycin 500 mg and lansoprazole 30 mg for 14 days (triple therapy) [FDA]."]],
  paed: { tiers: ["3 months and older, under 40 kg: mild/moderate 25 mg/kg/day in 2 doses (or 20 mg/kg/day in 3); severe and lower respiratory 45 mg/kg/day in 2 doses (or 40 mg/kg/day in 3) [FDA].", "Under 3 months: up to 30 mg/kg/day divided every 12 h [FDA].", "40 kg or more: adult doses [FDA].", "WHO / Bhutan practice for pneumonia: 40 mg/kg per dose twice daily (80 mg/kg/day) for non-severe pneumonia [WHO-GL]; IMNCI local infection in young infants 25 mg/kg twice daily for 5 days [BT-IMNCI]."], transition: "Adult doses from 40 kg.", calcNote: "Weight-based under 40 kg; kidney function lengthens the interval." },
  adj: { renal: "GFR 10–30: 250–500 mg every 12 h (not the 875 mg tablet); under 10: 250–500 mg every 24 h; haemodialysis: every 24 h plus a dose during and after dialysis [FDA]. No paediatric renal recommendation [FDA].", other: "Streptococcus pyogenes: at least 10 days [FDA]." },
  tox: { human: "Interstitial nephritis and crystalluria with oliguric renal failure reported after overdose [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Hydrate; haemodialysis removes amoxicillin [FDA]." },
  contra: ["Serious hypersensitivity (anaphylaxis, SJS) to amoxicillin or other beta-lactams [FDA]."],
  ae: { common: ["Diarrhoea, rash, vomiting, nausea (over 1%) [FDA]."], serious: ["Anaphylaxis; severe skin reactions; C. difficile colitis; rash in infectious mononucleosis [FDA]"] },
  monitor: ["Clinical response; continue 48–72 h after symptoms settle [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: amoxicillin 250 mg capsule, 1,000 mg tablet, 125 mg/5 mL and 250 mg/5 mL syrup [BT-NEML].", strengths: "250 mg cap; 1 g tab; 125 and 250 mg/5 mL.", stg: "Bhutan STG 2024: 500 mg three times daily for adult pneumonia; 15 mg/kg per dose three times daily in children (guide card) [BT-STG]." },
  verify: [["Child pneumonia dose", "WHO 40 mg/kg per dose twice daily; STG 15 mg/kg three times daily", "FDA lower respiratory: 45 mg/kg/day in 2 doses or 40 mg/kg/day in 3 [FDA]", "⚠ Discrepancy", "Three sources differ: WHO high dose (80 mg/kg/day), FDA 40–45 mg/kg/day, STG 45 mg/kg/day — all shown"], ["Adult CAP", "500 mg–1 g three times daily (STG 500 mg tds)", "500 mg every 8 h or 875 mg every 12 h [FDA]", "✅ Match (500 mg tds)", "Keep"]],
  calc: [
    { drug: "amoxicillin", indication_id: "adult", label: "Adult — 500 mg every 8 h", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 40, max_weight_kg: null },
      basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 1000, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "cap", strength: 250, unit: "mg/cap" }, { form: "cap", strength: 500, unit: "mg/cap" }], rounding: "Whole capsules",
      renal: [{ crcl_min: 10, crcl_max: 30, action: "extend_interval", factor: 12 }, { crcl_min: 0, crcl_max: 9.99, action: "extend_interval", factor: 24 }], flags: [], sources: ["FDA"] },
    { drug: "amoxicillin", indication_id: "child_severe", label: "Child under 40 kg — severe or lower respiratory (45 mg/kg/day)", route: "PO", population: { min_age_months: 3, max_age_months: null, min_weight_kg: null, max_weight_kg: 39.99 },
      basis: "mg_per_kg", dose: { value: 45, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: { max_single: 875, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "susp", strength: 250, unit: "mg/5mL" }, { form: "susp", strength: 125, unit: "mg/5mL" }], rounding: "To 0.5 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "amoxicillin", indication_id: "child_mild", label: "Child under 40 kg — mild/moderate (25 mg/kg/day)", route: "PO", population: { min_age_months: 3, max_age_months: null, min_weight_kg: null, max_weight_kg: 39.99 },
      basis: "mg_per_kg", dose: { value: 25, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: { max_single: 500, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "susp", strength: 250, unit: "mg/5mL" }, { form: "susp", strength: 125, unit: "mg/5mL" }], rounding: "To 0.5 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "amoxicillin", indication_id: "who_pneumonia", label: "Child — non-severe pneumonia, WHO high dose (40 mg/kg per dose twice daily)", route: "PO", population: { min_age_months: 2, max_age_months: 60, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 1000, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "susp", strength: 250, unit: "mg/5mL" }], rounding: "To 0.5 mL", renal: [], flags: [], sources: ["WHO-GL"] },
    { drug: "amoxicillin", indication_id: "infant", label: "Infant under 3 months — upper dose (30 mg/kg/day)", route: "PO", population: { min_age_months: 0, max_age_months: 2.99, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual",
      formulations: [{ form: "susp", strength: 125, unit: "mg/5mL" }], rounding: "To 0.1 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Amoxicillin (AMOXIL) tablets, capsules and suspension — USAntibiotics, label effective 2026-07-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=06e5c07d-d95c-4955-8d35-a4703ca2359e"], ["WHO-GL", "Pocket book of hospital care for children, 2nd edition (pneumonia) — WHO, 2013", "https://www.who.int/publications/i/item/978-92-4-154837-3"], ["BT-IMNCI", "IMNCI chart booklet for PHC 2025 — Ministry of Health, Bhutan", ""], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "First-line oral penicillin for chest, ear, throat, skin and urinary infections.",
    adult: [{ ind: "Mild–moderate infections", text: "500 mg every 8 h (or 500 mg every 12 h). Severe or lower respiratory: 875 mg every 12 h or 500 mg every 8 h. GFR 10–30: every 12 h; under 10: every 24 h.", calc: ["adult"], bt: "Bhutan STG: adult pneumonia 500 mg three times daily for 7 days." }, { ind: "H. pylori (triple therapy)", text: "1 g twice daily with clarithromycin and a PPI for 14 days." }],
    child: [{ ind: "Non-severe pneumonia (2–59 months)", text: "WHO: 40 mg/kg per dose twice daily (80 mg/kg/day) for 3–5 days.", calc: ["who_pneumonia"], bt: "Bhutan STG: 15 mg/kg per dose three times daily." }, { ind: "Severe or lower respiratory infection (FDA)", text: "45 mg/kg/day in 2 doses (or 40 mg/kg/day in 3); 40 kg or more: adult doses.", calc: ["child_severe"] }, { ind: "Mild–moderate infection (FDA)", text: "25 mg/kg/day in 2 doses (or 20 mg/kg/day in 3).", calc: ["child_mild"] }, { ind: "Infants under 3 months", text: "Up to 30 mg/kg/day divided every 12 h. IMNCI local bacterial infection: 25 mg/kg twice daily for 5 days.", calc: ["infant"] }] }
});

FDB_M("amphotericin-b", {
  inn: "Amphotericin B (liposomal)", atc: "J02AA01", cls: "Polyene antifungal",
  linked: [["HIV — adults", "Cryptococcal meningitis induction (Bhutan HIV 2024) [BT-HIV]", "hiv-adult"]],
  forms: ["Liposomal amphotericin B (AmBisome) 50 mg vial [FDA] [BT-NEML].", "Not interchangeable mg for mg with conventional (deoxycholate) or lipid-complex products [FDA].", "Flush lines with 5% dextrose; infuse over about 2 hours (1 hour if well tolerated) [FDA]."],
  moa: "Binds ergosterol in the fungal cell membrane → pores, leakage and cell death [UNVERIFIED-KNOWLEDGE].",
  pk: ["Initial half-life 7–10 h; total drug detectable for weeks [FDA].", "Nephrotoxic drugs add risk; low potassium increases digoxin toxicity [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Empirical therapy in febrile neutropenia; systemic Aspergillus, Candida and Cryptococcus infections; cryptococcal meningitis in HIV; visceral leishmaniasis [FDA]."], paed: ["Same, from 1 month [FDA]."] },
  adult: [["Empirical (febrile neutropenia)", "3 mg/kg/day [FDA]."], ["Systemic Aspergillus, Candida, Cryptococcus", "3–5 mg/kg/day [FDA]."], ["Cryptococcal meningitis in HIV", "6 mg/kg/day [FDA]. WHO/Bhutan 2024 preferred: single dose 10 mg/kg with flucytosine and fluconazole [BT-HIV]."], ["Visceral leishmaniasis", "Immunocompetent: 3 mg/kg/day on days 1–5, 14 and 21. Immunocompromised: 4 mg/kg/day on days 1–5, 10, 17, 24, 31 and 38 [FDA]."]],
  paed: { tiers: ["Same mg/kg doses as adults [FDA]."], transition: "Same mg/kg at all ages.", calcNote: "mg/kg; never confuse with conventional amphotericin." },
  adj: { renal: "Monitor creatinine; nephrotoxicity is less than with conventional amphotericin [UNVERIFIED-KNOWLEDGE].", other: "Pre-hydration with saline and electrolyte replacement reduce kidney injury [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive; monitor kidney function and electrolytes [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to amphotericin B or constituents, unless benefit outweighs risk [FDA]."],
  ae: { common: ["Infusion reactions (fever, chills), hypokalaemia, hypomagnesaemia, raised creatinine [FDA]."], serious: ["Anaphylaxis; nephrotoxicity; severe hypokalaemia [FDA]"] },
  monitor: ["Creatinine, potassium, magnesium, liver tests and blood count regularly [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: amphotericin B 50 mg liposomal powder [BT-NEML].", strengths: "50 mg vial (liposomal).", stg: "Bhutan HIV 2024: cryptococcal meningitis induction with liposomal amphotericin B [BT-HIV]." },
  calc: [
    { drug: "amphotericin-b", indication_id: "systemic", label: "Systemic fungal infection — 3 mg/kg/day (liposomal)", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 3, value_max: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", infusion: { duration_h: 2 },
      formulations: [{ form: "reconstituted (50 mg + 12 mL water), before dilution", strength: 4, unit: "mg/mL" }, { form: "inj", strength: 50, unit: "mg/vial" }], rounding: "Exact mg from reconstituted vials [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "amphotericin-b", indication_id: "crypto_single", label: "Cryptococcal meningitis in HIV — single 10 mg/kg dose (WHO/Bhutan)", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", infusion: { duration_h: 2 },
      formulations: [{ form: "reconstituted (50 mg + 12 mL water), before dilution", strength: 4, unit: "mg/mL" }, { form: "inj", strength: 50, unit: "mg/vial" }], rounding: "Exact mg from reconstituted vials [NEP]", renal: [], flags: [], sources: ["BT-HIV"] }
  ],
  sources: [["FDA", "AmBisome (amphotericin B liposome for injection) — Astellas, label effective 2026-10-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a"], ["BT-HIV", "National Guidelines on Treatment and Management of HIV & AIDS 2024 — Ministry of Health, Bhutan", ""], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Liposomal IV antifungal for serious fungal infections, cryptococcal meningitis and kala-azar.",
    cautionTitle: "Amphotericin products are not interchangeable",
    caution: "AmBisome is not interchangeable or substitutable on a mg per mg basis with other amphotericin B products; different products are not equivalent in pharmacodynamics, pharmacokinetics and dosing [FDA].",
    adult: [{ ind: "Systemic Aspergillus, Candida, Cryptococcus", text: "3–5 mg/kg/day IV over about 2 hours (empirical febrile neutropenia: 3 mg/kg/day).", calc: ["systemic"] }, { ind: "Cryptococcal meningitis in HIV", text: "FDA: 6 mg/kg/day. Bhutan HIV 2024 / WHO preferred: one dose of 10 mg/kg with 14 days of flucytosine and fluconazole.", calc: ["crypto_single"], bt: "Bhutan HIV guideline 2024 uses the single 10 mg/kg dose." }, { ind: "Visceral leishmaniasis", text: "3 mg/kg on days 1–5, 14 and 21 (immunocompromised: 4 mg/kg on days 1–5, 10, 17, 24, 31, 38)." }],
    child: [{ ind: "Children", text: "Same mg/kg doses as adults.", calc: ["systemic"] }] }
});

FDB_M("ampicillin", {
  inn: "Ampicillin", atc: "J01CA01", cls: "Aminopenicillin (beta-lactam antibiotic), injectable",
  linked: [["Neonatal sepsis — children", "With gentamicin [BT-IMNCI]", "neosepsis-child"], ["Pneumonia — children", "Severe pneumonia with gentamicin [WHO-GL]", "pneumonia-child"], ["Meningitis — children", "Neonatal and Listeria cover [FDA]", "meningitis-child"]],
  forms: ["Powder for injection 500 mg vial (Bhutan), IV or IM [BT-NEML] [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis by binding penicillin-binding proteins [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted [UNVERIFIED-KNOWLEDGE].", "Rash more common with allopurinol and in infectious mononucleosis [FDA]."],
  ind: { adult: ["Respiratory, soft-tissue, GI and GU infections, gonorrhoea, meningitis and septicaemia due to susceptible organisms [FDA]."], paed: ["Same, including neonatal meningitis and septicaemia [FDA]."] },
  adult: [["Respiratory and soft-tissue (40 kg or more)", "250–500 mg every 6 h [FDA]."], ["GI and GU (40 kg or more)", "500 mg every 6 h [FDA]."], ["Meningitis or septicaemia", "150–200 mg/kg/day in divided doses every 3–4 h [FDA]."]],
  paed: { tiers: ["Under 40 kg: respiratory and soft tissue 25–50 mg/kg/day; GI and GU 50 mg/kg/day — divided every 6–8 h [FDA].", "Meningitis or septicaemia: 150–200 mg/kg/day every 3–4 h [FDA].", "Neonates (meningitis, septicaemia): GA 34 weeks or less and 7 days or younger 100 mg/kg/day every 12 h; GA 34 weeks or less and 8–28 days 150 mg/kg/day every 12 h; GA over 34 weeks up to 28 days 150 mg/kg/day every 8 h [FDA].", "WHO / Bhutan practice: 50 mg/kg per dose (every 6 h in children; every 8–12 h in newborns) with gentamicin [WHO-GL] [BT-IMNCI]."], transition: "Adult doses from 40 kg.", calcNote: "Neonatal dose depends on gestational and postnatal age." },
  adj: { renal: "Kidney impairment: longer intervals (not specified in this label) [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis removes ampicillin [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of hypersensitivity to any penicillin [FDA]."],
  ae: { common: ["Rash, diarrhoea, nausea [FDA]."], serious: ["Anaphylaxis; C. difficile colitis; seizures at very high doses [FDA]"] },
  monitor: ["Clinical response; continue 48–72 h after symptoms settle; at least 10 days for group A streptococcus [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: ampicillin 500 mg powder for injection [BT-NEML].", strengths: "500 mg vial.", stg: "Bhutan STG 2024: ampicillin 1 g four times daily with gentamicin for adults with severe pneumonia; IMNCI uses ampicillin + gentamicin for young infants [BT-STG] [BT-IMNCI]." },
  verify: [["Adult dose", "1 g IV/IM four times daily (STG), up to 2 g every 4 h in sepsis", "250–500 mg every 6 h; sepsis/meningitis 150–200 mg/kg/day [FDA]", "⚠ Discrepancy", "FDA label is old and low for common infections; STG/WHO doses shown in the Bhutan line"], ["Child severe pneumonia", "50 mg/kg every 6 h (WHO)", "50 mg/kg/day for GI/GU; 25–50 mg/kg/day respiratory [FDA]", "⚠ Discrepancy", "WHO dose is 4× higher per day — both shown"]],
  calc: [
    { drug: "ampicillin", indication_id: "who_child", label: "Child — 50 mg/kg per dose every 6 h (WHO severe pneumonia/sepsis)", route: "IV", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 2000, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 500, unit: "mg/vial" }], rounding: "Exact mg from reconstituted vials [NEP]", renal: [], flags: [], sources: ["WHO-GL"] },
    { drug: "ampicillin", indication_id: "meningitis", label: "Meningitis or septicaemia — 200 mg/kg/day every 4 h", route: "IV", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 200, unit: "mg", per: "day" }, interval_h: 4, divided_doses: 6, caps: { max_daily: 12000, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 500, unit: "mg/vial" }], rounding: "Exact mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "ampicillin", indication_id: "neo_term", label: "Newborn over 34 weeks GA, up to 28 days — 150 mg/kg/day every 8 h", route: "IV", population: { min_age_months: 0, max_age_months: 0.99, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 150, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 500, unit: "mg/vial" }], rounding: "Exact mg [NEP]", renal: [], pma_note: "Born at 34 weeks or less: 100 mg/kg/day every 12 h in the first 7 days, then 150 mg/kg/day every 12 h (FDA)", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ampicillin for injection USP (pharmacy bulk package) — Avenacy, label effective 2026-11-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=19546563-50b7-4160-8cbe-f8e7079cba69"], ["WHO-GL", "Pocket book of hospital care for children, 2nd edition — WHO, 2013", "https://www.who.int/publications/i/item/978-92-4-154837-3"], ["BT-IMNCI", "Hospital IMNCI chart booklet and IMNCI 3rd edition 2024 — Ministry of Health, Bhutan", ""], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Injectable penicillin used with gentamicin for newborn sepsis, severe pneumonia and meningitis.",
    adult: [{ ind: "Severe infections", text: "FDA: 250–500 mg every 6 h for respiratory, soft-tissue, GI and GU infections; meningitis or septicaemia 150–200 mg/kg/day every 3–4 h.", calc: ["meningitis"], bt: "Bhutan STG: 1 g four times daily with gentamicin (severe pneumonia)." }],
    child: [{ ind: "Severe pneumonia or sepsis (WHO)", text: "50 mg/kg per dose IV/IM every 6 h with gentamicin.", calc: ["who_child"], bt: "Bhutan IMNCI: ampicillin + gentamicin." }, { ind: "Meningitis or septicaemia", text: "150–200 mg/kg/day every 3–4 h.", calc: ["meningitis"] }, { ind: "Newborns (meningitis or sepsis)", text: "Over 34 weeks GA: 150 mg/kg/day every 8 h. 34 weeks or less: 100 mg/kg/day every 12 h in the first week, then 150 mg/kg/day every 12 h.", calc: ["neo_term"] }] }
});

FDB_M("aminolevulinic-acid", {
  inn: "Aminolevulinic acid", atc: "L01XD04", cls: "Photosensitiser for photodynamic therapy (topical)",
  linked: [],
  forms: ["Topical gel 10% (AMELUZ) for clinic-applied photodynamic therapy with a red-light lamp [FDA].", "Other aminolevulinic acid products (oral solution for glioma imaging; 20% topical solution with blue light) are separate products [UNVERIFIED-KNOWLEDGE]."],
  moa: "Taken up by abnormal skin cells and converted to protoporphyrin IX; red light then activates it to destroy the lesion [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["With red-light PDT: mild–moderate actinic keratoses of the face and scalp; superficial basal cell carcinoma (per label) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Actinic keratosis / superficial BCC (PDT)", "Health-professional application only: about 1 mm layer over each lesion or the AK field plus 5–10 mm margin; occlude; then illuminate with the specified lamp (see label for area limits) [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Clinic procedure; no calculation." },
  adj: { other: "Protect treated skin from light afterwards [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["Hypersensitivity to porphyrins or components (including soybean phosphatidylcholine) [FDA].", "Porphyria [FDA]."],
  ae: { common: ["Application-site redness, pain/burning, irritation, oedema, itch, peeling, scab, induration, vesicles, paraesthesia (10% or more) [FDA]."], serious: ["Hypersensitivity [FDA]"] },
  monitor: ["Skin response at follow-up [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "AMELUZ (aminolevulinic acid HCl) topical gel 10% — Biofrontera, label effective 2026-10-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=650daa9f-aeec-49ce-95b9-5fa20b988afd"]],
  dose: { tagline: "Gel applied in clinic before red-light photodynamic therapy for actinic keratoses and superficial skin cancer.",
    adult: [{ ind: "Actinic keratoses, superficial BCC", text: "Applied by a health professional (about 1 mm layer with a 5–10 mm margin), occluded, then red-light illumination." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("amisulpride", {
  inn: "Amisulpride", atc: "N05AL05", cls: "Dopamine D2/D3 antagonist (IV antiemetic in the US; oral antipsychotic elsewhere)",
  linked: [],
  forms: ["Injection 2.5 mg/mL (5 mg/2 mL, 10 mg/4 mL) for IV use (BARHEMSYS) [FDA].", "Oral tablets for schizophrenia are marketed outside the US (not covered by the FDA label; to be verified) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks dopamine D2 and D3 receptors in the chemoreceptor trigger zone → antiemetic [UNVERIFIED-KNOWLEDGE].",
  pk: ["Elimination half-life 4–5 h [FDA]."],
  ind: { adult: ["Prevention of postoperative nausea and vomiting, alone or with another class [FDA].", "Treatment of PONV despite prophylaxis with another class, or without prophylaxis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["PONV prevention", "5 mg IV over 1–2 minutes at induction of anaesthesia [FDA]."], ["PONV treatment", "10 mg IV over 1–2 minutes [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { other: "Dose-dependent QT prolongation — avoid in congenital long QT and with other QT-prolonging drugs [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; ECG monitoring [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to amisulpride [FDA]."],
  ae: { common: ["Prevention: raised prolactin, chills, hypokalaemia, procedural hypotension, abdominal distension (2% or more) [FDA]."], serious: ["QT prolongation [FDA]"] },
  monitor: ["ECG in patients at risk of QT prolongation [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "amisulpride", indication_id: "ponv_prev", label: "PONV prevention — single IV dose", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "inj", strength: 2.5, unit: "mg/mL" }], rounding: "Exact mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "BARHEMSYS (amisulpride) injection — Acacia Pharma, label effective 2026-06-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ab23bc6e-b6a8-165f-e053-2a95a90ab144"]],
  dose: { tagline: "Single IV dose to prevent or treat nausea and vomiting after surgery.",
    adult: [{ ind: "Postoperative nausea and vomiting", text: "Prevention: 5 mg IV over 1–2 minutes at induction. Treatment: 10 mg IV over 1–2 minutes.", calc: ["ponv_prev"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("amoxapine", {
  inn: "Amoxapine", atc: "N06AA17", cls: "Tetracyclic (dibenzoxazepine) antidepressant",
  linked: [],
  forms: ["Tablets 25, 50, 100, 150 mg [FDA]."],
  moa: "Inhibits noradrenaline reuptake; its metabolite also blocks dopamine receptors (neuroleptic-like effects) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Never with MAO inhibitors; allow at least 5 weeks after fluoxetine [FDA]."],
  ind: { adult: ["Depression, including with anxiety or agitation and psychotic depression [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Depression", "Start 50 mg two or three times daily; increase to 100 mg two or three times daily by the end of week 1; usual 200–300 mg/day; up to 400 mg/day (600 mg in hospital without seizure history). Single bedtime dose up to 300 mg [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed doses." },
  adj: { other: "Older adults: lower starting doses [FDA]." },
  tox: { human: "Overdose: seizures, coma, acute renal failure [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Hospital care; treat seizures; poisons centre [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to dibenzoxazepines [FDA].", "With MAO inhibitors [FDA].", "Acute recovery after myocardial infarction [FDA]."],
  ae: { common: ["Drowsiness (14%), dry mouth (14%), constipation, blurred vision [FDA]."], serious: ["Suicidality in young people; tardive dyskinesia; neuroleptic malignant syndrome; seizures [FDA]"] },
  monitor: ["Mood and suicidality; abnormal movements [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "amoxapine", indication_id: "mdd", label: "Depression — starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 400, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Amoxapine tablets — Chartwell RX, label effective 2024-12-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eed5e856-dd7b-4eaa-9dad-508f2bef9328"]],
  dose: { tagline: "Older antidepressant with neuroleptic-like side effects; rarely first choice.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Antidepressants increased the risk compared to placebo of suicidal thinking and behavior in children, adolescents and young adults in short-term studies of major depressive disorder and other psychiatric disorders. Balance this risk with clinical need and monitor for clinical worsening and suicidality [FDA].",
    adult: [{ ind: "Depression", text: "50 mg two or three times daily, increasing to 100 mg two or three times daily by the end of the first week; usual 200–300 mg/day; maximum 400 mg/day as an outpatient.", calc: ["mdd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("anastrozole", {
  inn: "Anastrozole", atc: "L02BG03", cls: "Non-steroidal aromatase inhibitor",
  linked: [],
  forms: ["Tablets 1 mg [FDA]."],
  moa: "Inhibits aromatase → lowers oestrogen production in postmenopausal women → slows hormone receptor-positive breast cancer [UNVERIFIED-KNOWLEDGE].",
  pk: ["Elimination half-life about 50 h [FDA].", "Do not give with oestrogen-containing therapies or tamoxifen [FDA]."],
  ind: { adult: ["Postmenopausal women: adjuvant treatment of hormone receptor-positive early breast cancer; first-line advanced disease; advanced disease after tamoxifen [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Breast cancer (postmenopausal)", "1 mg once daily; adjuvant use was 5 years in ATAC; advanced disease until progression [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [FDA].", hepatic: "No change for mild–moderate impairment; severe not studied [FDA].", preg: "Not for premenopausal women (not studied) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Hypersensitivity [FDA]."],
  ae: { common: ["Hot flushes, weakness, arthritis and joint pain, hypertension, depression, nausea, rash, back and bone pain, insomnia, headache, peripheral oedema [FDA]."], serious: ["Reduced bone mineral density, osteoporosis and fractures; ischaemic cardiovascular events in women with heart disease; raised cholesterol [FDA]"] },
  monitor: ["Bone mineral density; cholesterol [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "anastrozole", indication_id: "bc", label: "Breast cancer — postmenopausal", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 1, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }], rounding: "Whole tablet", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Anastrozole tablets USP — NuCare Pharmaceuticals, label effective 2026-10-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5d58e6c7-db5b-8aa7-e063-6294a90ae3a2"]],
  dose: { tagline: "Daily aromatase-inhibitor tablet for hormone receptor-positive breast cancer after menopause.",
    adult: [{ ind: "Breast cancer (postmenopausal women)", text: "1 mg once daily (adjuvant: usually 5 years).", calc: ["bc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("apixaban", {
  inn: "Apixaban", atc: "B01AF02", cls: "Direct oral anticoagulant (factor Xa inhibitor)", risk: "High-alert — anticoagulants, including direct oral anticoagulants, are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Atrial fibrillation — adults", "Stroke prevention in non-valvular AF [FDA] [BT-NEML]", "af-adult"], ["Venous thromboembolism — adults", "DVT/PE treatment and prevention [FDA]", "vte-adult"], ["Stroke — adults", "Secondary prevention with AF [UNVERIFIED-KNOWLEDGE]", "stroke-adult"]],
  forms: ["Tablets 2.5 mg, 5 mg [FDA]; 2.5 mg only in Bhutan (5 mg = two tablets) [BT-NEML].", "Missed dose: take the same day, then resume twice daily; never double [FDA]."],
  moa: "Directly inhibits free and clot-bound factor Xa → less thrombin generation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 12 h [FDA].", "Combined P-gp and strong CYP3A4 inhibitors (ketoconazole, itraconazole, ritonavir): reduce 5 or 10 mg doses by 50%; avoid if already on 2.5 mg twice daily [FDA].", "Combined P-gp and strong CYP3A4 inducers (rifampicin, carbamazepine, phenytoin): avoid [FDA]."],
  ind: { adult: ["Stroke and systemic embolism prevention in non-valvular AF [FDA].", "DVT prophylaxis after hip or knee replacement [FDA].", "Treatment of DVT and PE, and reduction of recurrence [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Non-valvular AF", "5 mg twice daily; 2.5 mg twice daily if at least 2 of: age 80 or more, weight 60 kg or less, serum creatinine 1.5 mg/dL or more [FDA]."], ["DVT prophylaxis after joint replacement", "2.5 mg twice daily, starting 12–24 h after surgery: 35 days (hip) or 12 days (knee) [FDA]."], ["DVT/PE treatment", "10 mg twice daily for 7 days, then 5 mg twice daily [FDA]."], ["Reduce recurrence after 6 months' treatment", "2.5 mg twice daily [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Dose reduction in AF uses age, weight and creatinine together." },
  adj: { renal: "ESRD on haemodialysis: the usual AF dose gives exposure similar to trials; reduce to 2.5 mg twice daily if age 80 or more or weight 60 kg or less [FDA]. Limited data below CrCl 15 [FDA].", hepatic: "Severe impairment: not recommended [FDA].", preg: "Data insufficient [FDA].", other: "Stop before surgery per bleeding risk; neuraxial anaesthesia: risk of spinal haematoma [FDA]." },
  tox: { human: "Bleeding [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Activated charcoal reduces absorption after recent ingestion [FDA]; a specific factor Xa reversal agent (andexanet alfa) exists where available — see its monograph [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active pathological bleeding [FDA].", "Severe hypersensitivity [FDA]."],
  ae: { common: ["Bleeding (over 1%) [FDA]."], serious: ["Major and intracranial haemorrhage; spinal/epidural haematoma with neuraxial procedures [FDA]"] },
  monitor: ["Kidney function, weight and age for AF dose criteria; signs of bleeding; haemoglobin [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: apixaban 2.5 mg tablet [BT-NEML].", strengths: "2.5 mg.", stg: "Not specified in Bhutan STG 2024 text [BT-STG]." },
  verify: [["AF dose and reduction rule", "5 mg twice daily; 2.5 mg twice daily if 2 of age ≥80, weight ≤60 kg, creatinine ≥1.5 mg/dL", "Same [FDA]", "✅ Match", "Keep"]],
  calc: [
    { drug: "apixaban", indication_id: "af", label: "Non-valvular AF — standard dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 5, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 2.5, unit: "mg/tab" }, { form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Use 2.5 mg twice daily if at least 2 of: age 80 or more, weight 60 kg or less, serum creatinine 1.5 mg/dL or more [FDA]", flags: [], sources: ["FDA"] },
    { drug: "apixaban", indication_id: "vte_tx", label: "DVT/PE treatment — first 7 days", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 2.5, unit: "mg/tab" }, { form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ELIQUIS (apixaban) tablets — Bristol-Myers Squibb (Aphena repackager), label effective 2026-09-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=41a133ef-e461-48ad-8221-b735bdd0ec25"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Twice-daily oral anticoagulant for AF stroke prevention and venous thromboembolism.",
    boxedTitle: "Premature discontinuation increases thrombotic events; spinal/epidural haematoma",
    boxed: "Premature discontinuation of any oral anticoagulant, including apixaban, increases the risk of thrombotic events; if stopped for reasons other than bleeding or completion of therapy, consider another anticoagulant. Epidural or spinal hematomas, which may cause long-term or permanent paralysis, can occur in patients receiving neuraxial anesthesia or spinal puncture [FDA].",
    adult: [{ ind: "Non-valvular atrial fibrillation", text: "5 mg twice daily (two 2.5 mg tablets in Bhutan). 2.5 mg twice daily if at least 2 of: age 80 or more, weight 60 kg or less, creatinine 1.5 mg/dL or more.", calc: ["af"], bt: "Bhutan NEML: 2.5 mg tablets only." }, { ind: "DVT/PE treatment", text: "10 mg twice daily for 7 days, then 5 mg twice daily; after 6 months 2.5 mg twice daily to reduce recurrence.", calc: ["vte_tx"] }, { ind: "After hip or knee replacement", text: "2.5 mg twice daily from 12–24 h after surgery — 35 days (hip), 12 days (knee)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("anti-d-rh-immunoglobulin", {
  inn: "Anti-D (Rh) immunoglobulin", atc: "J06BB01", cls: "Rh(D) immune globulin (human)",
  linked: [["Rh isoimmunisation — pregnancy", "Prophylaxis in RhD-negative women [FDA]", "rhiso-preg"], ["Ectopic pregnancy", "After ectopic pregnancy in RhD-negative women [UNVERIFIED-KNOWLEDGE]", "ectopic-preg"], ["Miscarriage", "After miscarriage in RhD-negative women [UNVERIFIED-KNOWLEDGE]", "miscarriage-preg"]],
  forms: ["Prefilled syringe 1,500 IU (300 micrograms) in 2 mL for IV or IM use (RHOPHYLAC) [FDA].", "1 microgram = 5 IU — never confuse micrograms with IU [FDA]."],
  moa: "Clears RhD-positive fetal red cells from the mother's circulation before she forms anti-D antibodies [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 16–18 days [FDA].", "May interfere with the response to live virus vaccines [FDA]."],
  ind: { adult: ["Suppression of Rh isoimmunisation in non-sensitised RhD-negative patients (pregnancy, obstetric events, incompatible transfusion) [FDA].", "ITP in RhD-positive patients (IV only) [FDA]."], paed: ["ITP in RhD-positive children (IV) [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Routine antenatal prophylaxis", "300 micrograms (1,500 IU) at 28–30 weeks [FDA]."], ["After birth (baby RhD-positive or unknown)", "300 micrograms within 72 hours [FDA]."], ["Obstetric complications or invasive procedures", "300 micrograms within 72 hours [FDA]."], ["Fetomaternal haemorrhage over 15 mL fetal red cells", "300 micrograms plus 20 micrograms per mL of fetal red cells above 15 mL (or another 300 micrograms if not quantified) [FDA]."], ["Incompatible transfusion", "20 micrograms per 2 mL whole blood or per 1 mL RhD-positive red cells, within 72 hours [FDA]."], ["ITP (RhD-positive)", "50 micrograms/kg IV [FDA]."]],
  paed: { tiers: ["Not established for prophylaxis in children. [NEP]"], transition: "Not applicable.", calcNote: "Fixed 300 microgram dose for prophylaxis; ITP 50 micrograms/kg." },
  adj: { other: "Observe for at least 20 minutes after the dose [FDA]." },
  tox: { human: "Overdose risk mainly from microgram/IU confusion [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; monitor for haemolysis in RhD-positive patients [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Previous anaphylaxis or severe reaction to human immune globulin [FDA].", "IgA deficiency with anti-IgA antibodies and hypersensitivity [FDA].", "The newborn of a mother given it after birth [FDA]."],
  ae: { common: ["Prophylaxis: nausea, dizziness, headache, injection-site pain, malaise. ITP: chills, fever, headache [FDA]."], serious: ["Intravascular haemolysis (ITP use); anaphylaxis [FDA]"] },
  monitor: ["ITP use: monitor for haemolysis for at least 8 hours, including urine dipstick [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "anti-d-rh-immunoglobulin", indication_id: "itp", label: "ITP in RhD-positive patients — 50 micrograms/kg IV", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 50, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 150, unit: "mcg/mL" }], rounding: "Exact mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "RHOPHYLAC (Rho(D) immune globulin intravenous, human) — CSL Behring, label effective 2025-08-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1b5d801-336f-4541-a7d9-a8d4a110a4cc"]],
  dose: { tagline: "Injection that stops RhD-negative mothers forming anti-D antibodies after exposure to RhD-positive blood.",
    boxedTitle: "Intravascular haemolysis in ITP",
    boxed: "Intravascular hemolysis leading to death has been reported in Rh(D)-positive patients treated for immune thrombocytopenic purpura with Rh(D) immune globulin intravenous products; it can cause severe anemia and multi-system organ failure including ARDS, renal failure and DIC. This warning does not apply to Rh(D)-negative patients treated for suppression of Rh isoimmunization [FDA].",
    cautionTitle: "Do not confuse micrograms with IU",
    caution: "DO NOT confuse micrograms (mcg) with International Units (IU) when calculating the dose. Miscalculations could result in overdose or underdose (1 mcg = 5 IU) [FDA].",
    adult: [{ ind: "Rh prophylaxis (RhD-negative, non-sensitised)", text: "300 micrograms (1,500 IU) IM or IV at 28–30 weeks, and within 72 hours of birth (if the baby is RhD-positive or unknown) or of any sensitising event. Large fetomaternal bleed: add 20 micrograms per mL of fetal red cells above 15 mL." }, { ind: "ITP (RhD-positive)", text: "50 micrograms/kg IV.", calc: ["itp"] }],
    child: [{ ind: "Children", text: "ITP only, under specialist care." }] }
});

FDB_M("aprepitant", {
  inn: "Aprepitant", atc: "A04AD12", cls: "NK1-receptor antagonist (antiemetic)",
  linked: [],
  forms: ["Capsules 80 mg, 125 mg; powder for oral suspension 125 mg (25 mg/mL when made up) [FDA].", "IV injectable emulsion 130 mg/18 mL (CINVANTI) [FDA]."],
  moa: "Blocks substance P at NK1 receptors in the brainstem → prevents acute and delayed chemotherapy-induced vomiting [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 9–13 h [FDA].", "Moderate CYP3A4 inhibitor: do not use with pimozide; reduce dexamethasone dose in the regimen [FDA].", "Lowers warfarin effect (check INR at 7–10 days) and hormonal contraceptive efficacy during and for 28 days after [FDA]."],
  ind: { adult: ["With a 5-HT3 antagonist and dexamethasone: prevention of nausea and vomiting with highly or moderately emetogenic chemotherapy [FDA]."], paed: ["From 6 months (oral) [FDA]."] },
  adult: [["Chemotherapy-induced nausea and vomiting (oral)", "125 mg 1 hour before chemotherapy on day 1, then 80 mg on days 2 and 3 [FDA]."], ["IV (CINVANTI)", "HEC or MEC single dose 130 mg on day 1; or MEC 3-day regimen 100 mg IV day 1 then 80 mg oral days 2–3 [FDA]."]],
  paed: { tiers: ["12 years and older (can swallow capsules): as adults [FDA].", "6 months to under 12 years, or unable to swallow capsules: suspension 3 mg/kg (maximum 125 mg) on day 1, then 2 mg/kg (maximum 80 mg) on days 2 and 3 [FDA]."], transition: "Capsules from 12 years.", calcNote: "Weight-based suspension under 12 years." },
  adj: {},
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Hypersensitivity [FDA].", "With pimozide [FDA]."],
  ae: { common: ["Fatigue, diarrhoea, weakness, dyspepsia, abdominal pain, hiccups, low white count, dehydration, raised ALT (3% or more) [FDA]."], serious: ["Anaphylaxis; Stevens–Johnson syndrome (rare) [FDA]"] },
  monitor: ["INR in patients on warfarin 7–10 days after each course [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "aprepitant", indication_id: "cinv_d1", label: "CINV — oral day 1 (adult/12 y and over)", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 125, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 125, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "cap", strength: 125, unit: "mg/cap" }], rounding: "Whole capsule", renal: [], flags: [], sources: ["FDA"] },
    { drug: "aprepitant", indication_id: "cinv_child_d1", label: "CINV — child day 1 suspension (3 mg/kg)", route: "PO", population: { min_age_months: 6, max_age_months: 144, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 125, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "susp", strength: 25, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "aprepitant", indication_id: "cinv_child_d23", label: "CINV — child days 2–3 suspension (2 mg/kg)", route: "PO", population: { min_age_months: 6, max_age_months: 144, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 80, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "susp", strength: 25, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "EMEND (aprepitant) capsules and oral suspension — Merck, label effective 2024-07-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=696f9e80-9cae-403b-de9e-078343ce4713"], ["FDA", "CINVANTI (aprepitant) injectable emulsion — Heron Therapeutics, label effective 2026-04-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c218d3a-a508-4abc-9ed8-a6e8e191d1b4"]],
  dose: { tagline: "Antiemetic taken with a 5-HT3 blocker and dexamethasone to prevent chemotherapy vomiting.",
    adult: [{ ind: "Chemotherapy-induced nausea and vomiting", text: "125 mg orally 1 hour before chemotherapy on day 1, then 80 mg on days 2 and 3 (with a 5-HT3 antagonist and dexamethasone).", calc: ["cinv_d1"] }],
    child: [{ ind: "6 months to under 12 years", text: "Suspension 3 mg/kg (maximum 125 mg) on day 1, then 2 mg/kg (maximum 80 mg) on days 2 and 3.", calc: ["cinv_child_d1", "cinv_child_d23"] }, { ind: "12 years and older", text: "As adults.", calc: ["cinv_d1"] }] }
});

FDB_M("aripiprazole", {
  inn: "Aripiprazole", atc: "N05AX12", cls: "Atypical antipsychotic (dopamine D2 partial agonist)",
  linked: [["Psychosis — adults", "Schizophrenia and bipolar mania [FDA] [BT-NEML]", "psychosis-adult"]],
  forms: ["Tablets 2, 5, 10, 15, 20, 30 mg (ABILIFY); once daily with or without food [FDA]; 10 mg in Bhutan [BT-NEML].", "Long-acting injections (ARISTADA, ABILIFY MAINTENA) are separate products with their own schedules [FDA]."],
  moa: "Partial agonist at D2 and 5-HT1A receptors and antagonist at 5-HT2A receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP3A4 inhibitors (itraconazole, clarithromycin) or strong CYP2D6 inhibitors (fluoxetine, paroxetine): half the usual dose; both together: a quarter [FDA].", "Strong CYP3A4 inducers (carbamazepine, rifampicin): double the dose [FDA].", "CYP2D6 poor metabolisers: half the usual dose [FDA]."],
  ind: { adult: ["Schizophrenia; bipolar I mania or mixed episodes (alone or with lithium/valproate); adjunct in major depressive disorder [FDA]."], paed: ["Schizophrenia (13–17 y), bipolar mania (10–17 y), irritability in autism (6–17 y), Tourette's disorder (6–18 y) [FDA]."] },
  adult: [["Schizophrenia", "10–15 mg once daily; maximum 30 mg; do not increase before 2 weeks [FDA]."], ["Bipolar mania", "15 mg once daily (10–15 mg with lithium or valproate); maximum 30 mg [FDA]."], ["Adjunct in depression", "2–5 mg daily; target 5–10 mg; maximum 15 mg [FDA]."]],
  paed: { tiers: ["Schizophrenia (13–17 y) and bipolar mania (10–17 y): start 2 mg/day, target 10 mg/day, maximum 30 mg [FDA].", "Irritability in autism (6–17 y): start 2 mg/day, target 5–10 mg, maximum 15 mg [FDA].", "Tourette's: under 50 kg start 2 mg, target 5 mg, maximum 10 mg; 50 kg or more start 2 mg, target 10 mg, maximum 20 mg [FDA]."], transition: "Adult doses from 18 years.", calcNote: "Fixed doses by indication and age." },
  adj: { other: "Interacting drugs and CYP2D6 status change the dose (see interactions) [FDA]." },
  tox: { human: "Somnolence, vomiting [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; ECG; charcoal soon after ingestion [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to aripiprazole [FDA]."],
  ae: { common: ["Akathisia (adults with schizophrenia); sedation, restlessness, tremor, extrapyramidal effects; somnolence in adolescents [FDA]."], serious: ["Increased death in elderly with dementia-related psychosis; suicidality (depression use); neuroleptic malignant syndrome; tardive dyskinesia; impulse-control problems (gambling) [FDA]"] },
  monitor: ["Weight, glucose and lipids; movement disorders; mood and suicidality [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: aripiprazole 10 mg tablet [BT-NEML].", strengths: "10 mg.", stg: "Not specified in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "aripiprazole", indication_id: "scz", label: "Schizophrenia — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 10, value_max: 15, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 30, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole or half tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ABILIFY (aripiprazole) tablets — Otsuka, label effective 2025-01-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c040bd1d-45b7-49f2-93ea-aed7220b30ac"], ["FDA", "ARISTADA (aripiprazole lauroxil) extended-release injection — Alkermes, label effective 2025-01-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=17a8d11b-73b0-4833-a0b4-cf1ef85edefb"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Once-daily antipsychotic for schizophrenia and bipolar mania, with fewer metabolic effects.",
    boxedTitle: "Increased mortality in elderly patients with dementia; suicidality with antidepressant use",
    boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death; aripiprazole is not approved for dementia-related psychosis. Antidepressants increased the risk of suicidal thoughts and behavior in children, adolescents and young adults in short-term studies; monitor for worsening and emergence of suicidal thoughts [FDA].",
    adult: [{ ind: "Schizophrenia", text: "10–15 mg once daily; maximum 30 mg/day; wait 2 weeks between increases.", calc: ["scz"], bt: "Bhutan NEML: 10 mg tablets." }, { ind: "Bipolar mania", text: "15 mg once daily (10–15 mg with lithium or valproate); maximum 30 mg." }, { ind: "Add-on in depression", text: "2–5 mg daily, target 5–10 mg, maximum 15 mg." }],
    child: [{ ind: "Schizophrenia (13–17 y), bipolar mania (10–17 y)", text: "Start 2 mg/day, target 10 mg/day, maximum 30 mg." }, { ind: "Irritability in autism (6–17 y)", text: "Start 2 mg/day, target 5–10 mg, maximum 15 mg." }] }
});

FDB_M("artemether", {
  inn: "Artemether (with lumefantrine)", atc: "P01BE52", cls: "Artemisinin-based combination antimalarial",
  linked: [["Malaria — adults", "Uncomplicated falciparum and mixed malaria [FDA] [BT-MAL]", "malaria-adult"], ["Malaria — children", "Uncomplicated falciparum malaria [FDA] [BT-MAL]", "malaria-child"]],
  forms: ["Tablets artemether 20 mg + lumefantrine 120 mg (COARTEM) [FDA] [BT-NEML].", "Take with food or milk; tablets may be crushed with 1–2 teaspoons of water for children [FDA].", "IM artemether (severe malaria) is a separate product (Bhutan Protocol E) [BT-MAL]."],
  moa: "Artemether kills blood-stage parasites rapidly; lumefantrine clears the remainder more slowly [UNVERIFIED-KNOWLEDGE].",
  pk: ["Fat improves absorption — encourage eating once possible [FDA].", "Strong CYP3A4 inducers (rifampicin, carbamazepine, phenytoin, St John's wort) are contraindicated [FDA].", "Do not give within 1 month of halofantrine; avoid other QT-prolonging drugs [FDA]."],
  ind: { adult: ["Acute uncomplicated P. falciparum malaria [FDA]; Bhutan also uses it for mixed infections with primaquine [BT-MAL]."], paed: ["From 2 months and 5 kg [FDA]."] },
  adult: [["Uncomplicated falciparum malaria (35 kg or more)", "4 tablets per dose: first dose, second after 8 hours, then twice daily for 2 more days (6 doses) [FDA] [BT-MAL]."]],
  paed: { tiers: ["5 to under 15 kg: 1 tablet per dose; 15 to under 25 kg: 2; 25 to under 35 kg: 3; 35 kg or more: 4 — six doses over 3 days [FDA] [BT-MAL]."], transition: "Adult dose from 35 kg.", calcNote: "Weight bands." },
  adj: { preg: "Bhutan 2024 uses AL in all trimesters for uncomplicated falciparum malaria [BT-MAL].", other: "Vomiting within 1 hour: repeat the dose [BT-MAL]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; ECG monitoring [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA].", "With strong CYP3A4 inducers [FDA]."],
  ae: { common: ["Adults (over 30%): headache, anorexia, dizziness, weakness, joint and muscle pain. Children (over 12%): fever, cough, vomiting [FDA]."], serious: ["QT prolongation; hypersensitivity [FDA]"] },
  monitor: ["Follow-up blood films (Bhutan: Pf days 0, 1, 2, 28) [BT-MAL]."],
  local: { neml: "On the Bhutan NEML 2025: artemether 20 mg + lumefantrine 120 mg tablet [BT-NEML].", strengths: "20/120 mg.", stg: "Bhutan National Malaria Guideline 2024, Protocols B–D [BT-MAL]." },
  calc: [
    { drug: "artemether", indication_id: "al", label: "Uncomplicated falciparum malaria — tablets per dose", route: "PO", population: { min_age_months: 2, max_age_months: null, min_weight_kg: 5, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "tablet", per: "dose" }, interval_h: 12, divided_doses: 2,
      bands: [{ min_weight_kg: 5, max_weight_kg: 15, text: "1 tablet per dose at 0, 8, 24, 36, 48, 60 h", daily: null }, { min_weight_kg: 15, max_weight_kg: 25, text: "2 tablets per dose at 0, 8, 24, 36, 48, 60 h", daily: null }, { min_weight_kg: 25, max_weight_kg: 35, text: "3 tablets per dose at 0, 8, 24, 36, 48, 60 h", daily: null }, { min_weight_kg: 35, max_weight_kg: null, text: "4 tablets per dose at 0, 8, 24, 36, 48, 60 h", daily: null }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA", "BT-MAL"] }
  ],
  sources: [["FDA", "COARTEM (artemether/lumefantrine) tablets — Novartis, label effective 2026-03-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7866ec19-dfac-47d4-a53f-511a12643cbf"], ["BT-MAL", "National Guideline for Diagnosis and Treatment of Malaria in Bhutan, 6th edition — VDCP, 2024", ""], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "First-line 3-day combination tablet for uncomplicated falciparum malaria.",
    adult: [{ ind: "Uncomplicated falciparum malaria", text: "35 kg or more: 4 tablets per dose at 0, 8, 24, 36, 48 and 60 hours with food or milk.", calc: ["al"], bt: "Bhutan 2024: plus a single primaquine 0.5 mg/kg on day 0; mixed infection: plus 7-day primaquine." }],
    child: [{ ind: "Uncomplicated falciparum malaria (2 months, 5 kg and over)", text: "5–14 kg: 1 tablet; 15–24 kg: 2; 25–34 kg: 3; 35 kg or more: 4 — per dose, 6 doses over 3 days.", calc: ["al"] }] }
});

FDB_M("anagrelide", {
  inn: "Anagrelide", atc: "L01XX35", cls: "Platelet-lowering agent",
  linked: [],
  forms: ["Capsules 0.5 mg [FDA]."],
  moa: "Reduces platelet production by inhibiting megakaryocyte maturation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Thrombocythaemia secondary to myeloproliferative neoplasms, to lower platelets and thrombosis risk [FDA]."], paed: ["Same; lower starting dose [FDA]."] },
  adult: [["Thrombocythaemia", "Start 0.5 mg four times daily or 1 mg twice daily for at least 1 week; then titrate to keep platelets under 600,000/µL (ideally 150,000–400,000). Increase by no more than 0.5 mg/day per week; maximum 10 mg/day and 2.5 mg per dose [FDA]."]],
  paed: { tiers: ["Start 0.5 mg/day; titrate as for adults [FDA]."], transition: "Same maximums.", calcNote: "Fixed starting doses." },
  adj: { hepatic: "Moderate impairment: start 0.5 mg/day [FDA]." },
  tox: { human: "Hypotension at higher doses; intentional overdoses reported [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; monitor platelets (risk of bleeding) [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, palpitations, diarrhoea, weakness, oedema, nausea, abdominal pain, dizziness (5% or more) [FDA]."], serious: ["Cardiovascular toxicity (QT prolongation, arrhythmia, heart failure); pulmonary hypertension; bleeding with aspirin [FDA]"] },
  monitor: ["Platelet count during titration [FDA].", "ECG before treatment [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "anagrelide", indication_id: "et", label: "Thrombocythaemia — adult start", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 2.5, max_daily: 10, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "cap", strength: 0.5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "AGRYLIN (anagrelide) capsules — Takeda, label effective 2026-04-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cb960074-99c1-4a73-941f-f0644a7ec219"]],
  dose: { tagline: "Capsule that lowers the platelet count in myeloproliferative thrombocythaemia.",
    adult: [{ ind: "Thrombocythaemia (myeloproliferative)", text: "0.5 mg four times daily or 1 mg twice daily for a week, then titrate by up to 0.5 mg/day each week; maximum 2.5 mg per dose, 10 mg/day.", calc: ["et"] }],
    child: [{ ind: "Children", text: "Start 0.5 mg/day, titrate weekly." }] }
});

FDB_M("anakinra", {
  inn: "Anakinra", atc: "L04AC03", cls: "Interleukin-1 receptor antagonist",
  linked: [["Rheumatoid arthritis — adults", "Moderate–severe RA [FDA]", "ra-adult"]],
  forms: ["Prefilled syringe 100 mg/0.67 mL, graduated for smaller doses [FDA]."],
  moa: "Blocks the IL-1 type I receptor → reduces IL-1-driven inflammation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Peak 3–7 h after SC injection [FDA].", "Do not combine with TNF blockers (serious infections, neutropenia) [FDA]."],
  ind: { adult: ["Moderate–severe rheumatoid arthritis (18 years and older) [FDA].", "Cryopyrin-associated periodic syndromes (NOMID); DIRA [FDA]."], paed: ["NOMID and DIRA, weight-based [FDA]."] },
  adult: [["Rheumatoid arthritis", "100 mg SC daily at about the same time; CrCl under 30: consider 100 mg every other day [FDA]."], ["NOMID (CAPS)", "1–2 mg/kg SC daily, adjusted up to 8 mg/kg daily [FDA]."]],
  paed: { tiers: ["NOMID: 1–2 mg/kg daily, up to 8 mg/kg daily [FDA]."], transition: "Weight-based in children.", calcNote: "mg/kg for NOMID; fixed 100 mg in RA." },
  adj: { renal: "CrCl under 30 mL/min: consider every-other-day dosing [FDA].", other: "Live vaccines should not be given [FDA]." },
  tox: { human: "No overdoses in RA or NOMID trials; high doses in sepsis trials caused no serious toxicity [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Hypersensitivity to E. coli-derived proteins or components [FDA]."],
  ae: { common: ["Injection-site reactions, worsening RA, upper respiratory infection, headache, nausea, diarrhoea, sinusitis, joint pain (5% or more) [FDA]."], serious: ["Serious infections; neutropenia; hypersensitivity [FDA]"] },
  monitor: ["Neutrophil count before and regularly during treatment [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "anakinra", indication_id: "ra", label: "Rheumatoid arthritis — 100 mg daily", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "inj", strength: 149.25, unit: "mg/mL" }], rounding: "One prefilled syringe",
      renal: [{ crcl_min: 0, crcl_max: 29.99, action: "extend_interval", factor: 48 }], flags: [], sources: ["FDA"] },
    { drug: "anakinra", indication_id: "nomid", label: "NOMID — starting 1–2 mg/kg daily", route: "SC", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 1, value_max: 2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_mg_per_kg_dose: 8 }, weight_basis: "actual",
      formulations: [], rounding: "Graduated syringe [FDA]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "KINERET (anakinra) injection — Sobi, label effective 2026-04-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9d74915-6606-4570-9c52-c4001d3177de"]],
  dose: { tagline: "Daily injection that blocks interleukin-1 in rheumatoid arthritis and autoinflammatory syndromes.",
    adult: [{ ind: "Rheumatoid arthritis", text: "100 mg SC once daily; CrCl under 30: consider every other day.", calc: ["ra"] }, { ind: "NOMID (CAPS)", text: "1–2 mg/kg daily, adjusted up to 8 mg/kg daily.", calc: ["nomid"] }],
    child: [{ ind: "NOMID, DIRA", text: "1–2 mg/kg SC daily, up to 8 mg/kg daily.", calc: ["nomid"] }] }
});

FDB_M("anidulafungin", {
  inn: "Anidulafungin", atc: "J02AX06", cls: "Echinocandin antifungal",
  linked: [],
  forms: ["Powder for injection 50 mg and 100 mg vials [FDA].", "Infuse no faster than 1.1 mg/min (84 mL/h after standard dilution) [FDA]."],
  moa: "Inhibits fungal 1,3-beta-D-glucan synthase → cell-wall failure [UNVERIFIED-KNOWLEDGE].",
  pk: ["Terminal half-life 40–50 h; not hepatically metabolised or renally cleared to a relevant extent [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Candidaemia and other Candida infections (intra-abdominal abscess, peritonitis); oesophageal candidiasis [FDA]."], paed: ["Candidaemia and other Candida infections from 1 month [FDA]."] },
  adult: [["Candidaemia, invasive Candida", "200 mg IV loading dose on day 1, then 100 mg daily for at least 14 days after the last positive culture [FDA]."], ["Oesophageal candidiasis", "100 mg on day 1, then 50 mg daily for at least 14 days and 7 days after symptoms resolve [FDA]."]],
  paed: { tiers: ["1 month and older: 3 mg/kg (maximum 200 mg) on day 1, then 1.5 mg/kg (maximum 100 mg) daily [FDA].", "Oesophageal candidiasis: not approved in children [FDA]."], transition: "Adult doses at the caps.", calcNote: "Loading and maintenance mg/kg with caps." },
  adj: { hepatic: "Monitor liver tests; hepatic abnormalities reported [FDA]." },
  tox: { human: "A single 400 mg loading dose caused no adverse events [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; not dialysable [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to anidulafungin or other echinocandins [FDA].", "Hereditary fructose intolerance (excipient) [FDA]."],
  ae: { common: ["Candidaemia: hypokalaemia, nausea, diarrhoea, vomiting, fever, insomnia, hypotension (15% or more) [FDA]."], serious: ["Infusion reactions (histamine-mediated), anaphylaxis, hepatotoxicity [FDA]"] },
  monitor: ["Liver tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "anidulafungin", indication_id: "cand_load", label: "Candidaemia — loading dose day 1", route: "IV", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "reconstituted (100 mg + 30 mL water), before dilution", strength: 3.33, unit: "mg/mL" }, { form: "inj", strength: 100, unit: "mg/vial" }], rounding: "Exact mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "anidulafungin", indication_id: "cand_maint", label: "Candidaemia — daily maintenance", route: "IV", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 1.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "reconstituted (100 mg + 30 mL water), before dilution", strength: 3.33, unit: "mg/mL" }, { form: "inj", strength: 100, unit: "mg/vial" }], rounding: "Exact mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ERAXIS (anidulafungin) for injection — Roerig (Pfizer), label effective 2025-08-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a88d9010-55fb-4a02-baff-042cd27688ea"]],
  dose: { tagline: "IV echinocandin for candidaemia and invasive Candida infections.",
    adult: [{ ind: "Candidaemia, invasive Candida", text: "200 mg IV on day 1, then 100 mg daily for at least 14 days after the last positive culture. Infuse no faster than 1.1 mg/min.", calc: ["cand_load", "cand_maint"] }, { ind: "Oesophageal candidiasis", text: "100 mg on day 1, then 50 mg daily." }],
    child: [{ ind: "Candidaemia (1 month and older)", text: "3 mg/kg (maximum 200 mg) on day 1, then 1.5 mg/kg (maximum 100 mg) daily.", calc: ["cand_load", "cand_maint"] }] }
});

FDB_M("apomorphine", {
  inn: "Apomorphine", atc: "N04BC07", cls: "Dopamine agonist (subcutaneous)",
  linked: [],
  forms: ["Subcutaneous infusion 98 mg/20 mL (4.9 mg/mL) prefilled cartridge (ONAPGO) [FDA].", "Intermittent injection pens (APOKYN) are a separate product with their own doses (to be verified) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stimulates dopamine D1 and D2 receptors → relieves Parkinson's 'off' periods [UNVERIFIED-KNOWLEDGE].",
  pk: ["Elimination half-life about 40 minutes after an extra dose [FDA].", "Contraindicated with 5-HT3 antagonists (ondansetron, granisetron, palonosetron, alosetron) — profound hypotension [FDA]."],
  ind: { adult: ["Motor fluctuations in advanced Parkinson's disease (continuous infusion) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Advanced Parkinson's — continuous infusion", "Start 1 mg/h (maximum 6 mg/h) for up to 16 h/day; extra doses 0.5 mg, titrated 0.1–1 mg (maximum 2 mg), at least 3 h apart, up to 3 per day; total maximum 98 mg/day. Start an antiemetic (trimethobenzamide) 3 days before [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Infusion rate; no weight calculation." },
  adj: {},
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["With 5-HT3 antagonists [FDA].", "Hypersensitivity, including to sodium metabisulfite [FDA]."],
  ae: { common: ["Infusion-site nodules and redness, nausea, somnolence, dyskinesia, headache, insomnia (10% or more) [FDA]."], serious: ["Orthostatic hypotension and syncope; falling asleep suddenly; hallucinations; QT prolongation [FDA]"] },
  monitor: ["Blood pressure (lying and standing), sleepiness, infusion sites [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ONAPGO (apomorphine hydrochloride) injection for subcutaneous infusion — Supernus, label effective 2026-10-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3552b6e-5ae7-4993-aa1a-e399c4a7080a"]],
  dose: { tagline: "Subcutaneous dopamine agonist for 'off' periods in advanced Parkinson's disease.",
    adult: [{ ind: "Advanced Parkinson's disease (continuous infusion)", text: "1 mg/h, up to 6 mg/h for up to 16 h/day; extra doses 0.5–2 mg at least 3 h apart (maximum 3/day); total maximum 98 mg/day. Never with ondansetron or other 5-HT3 antagonists." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("argatroban", {
  inn: "Argatroban", atc: "B01AE03", cls: "Direct thrombin inhibitor (IV)", risk: "High-alert — anticoagulants are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Venous thromboembolism — adults", "Heparin-induced thrombocytopenia [FDA]", "vte-adult"]],
  forms: ["Premixed infusion 125 mg in 125 mL sodium chloride (1 mg/mL) [FDA]."],
  moa: "Directly and reversibly inhibits thrombin [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatically cleared; moderate–severe hepatic impairment reduces clearance about 4-fold, and reversal may take over 4 hours [FDA]."],
  ind: { adult: ["Prophylaxis or treatment of thrombosis in heparin-induced thrombocytopenia (HIT) [FDA].", "Anticoagulant during PCI in patients with or at risk of HIT [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["HIT", "Stop heparin; baseline aPTT; then 2 micrograms/kg/min continuous infusion, adjusted (maximum 10 micrograms/kg/min) to an aPTT of 1.5–3 times baseline [FDA]."], ["PCI with HIT", "350 micrograms/kg bolus over 3–5 min, then 25 micrograms/kg/min; check ACT 5–10 min after the bolus [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Infusion in micrograms/kg/min." },
  adj: { hepatic: "Moderate or severe impairment (HIT): start 0.5 micrograms/kg/min [FDA]." },
  tox: { human: "Excessive anticoagulation with or without bleeding [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop or reduce the infusion; no specific antidote [FDA]." },
  contra: ["Major bleeding [FDA].", "Hypersensitivity to argatroban [FDA]."],
  ae: { common: ["Bleeding [FDA]."], serious: ["Major haemorrhage [FDA]"] },
  monitor: ["aPTT 2 hours after starting and after each dose change [FDA].", "INR rises when combined with warfarin — follow the label conversion method [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "argatroban", indication_id: "pci_bolus", label: "PCI with HIT — bolus 350 micrograms/kg", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 350, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 1000, unit: "mcg/mL" }], rounding: "Exact mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Argatroban in 0.9% sodium chloride injection — Plano Pharmaceuticals, label effective 2026-09-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=514ad15b-d060-9d65-e063-6294a90a6188"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "IV direct thrombin inhibitor for heparin-induced thrombocytopenia.",
    adult: [{ ind: "Heparin-induced thrombocytopenia", text: "2 micrograms/kg/min IV (0.5 micrograms/kg/min with moderate–severe liver impairment), adjusted to aPTT 1.5–3 times baseline; maximum 10 micrograms/kg/min." }, { ind: "PCI with HIT", text: "350 micrograms/kg bolus over 3–5 minutes, then 25 micrograms/kg/min; ACT 5–10 minutes after the bolus.", calc: ["pci_bolus"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ascorbic-acid", {
  inn: "Ascorbic acid (vitamin C)", atc: "A11GA01", cls: "Vitamin",
  linked: [],
  forms: ["Injection 500 mg/mL pharmacy bulk package; dilute and infuse slowly [FDA].", "Vitamin C 250 mg tablet (Bhutan) [BT-NEML]."],
  moa: "Essential cofactor for collagen synthesis and antioxidant; deficiency causes scurvy [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 7 hours after IV dosing (small study) [FDA]."],
  ind: { adult: ["Short-term (up to 1 week) IV treatment of scurvy when oral treatment is not possible [FDA]."], paed: ["Same, from 5 months [FDA]."] },
  adult: [["Scurvy (IV, up to 1 week)", "200 mg once daily (adults and children 11 years and older) [FDA]."]],
  paed: { tiers: ["5 to under 12 months: 50 mg once daily [FDA].", "1 to under 11 years: 100 mg once daily [FDA].", "11 years and older: 200 mg once daily [FDA]."], transition: "Adult dose from 11 years.", calcNote: "Age bands." },
  adj: { renal: "Risk of oxalate nephropathy with high doses or kidney disease [FDA].", preg: "Pregnancy, lactation and G6PD deficiency: do not exceed the recommended dietary allowance [FDA]." },
  tox: { human: "Nausea, vomiting, diarrhoea, flushing, rash, headache, fatigue, poor sleep [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Pain and swelling at the infusion site [FDA]."], serious: ["Haemolysis in G6PD deficiency; oxalate kidney stones [FDA]"] },
  monitor: ["Clinical response; switch to oral as soon as possible [NEP]."],
  local: { neml: "On the Bhutan NEML 2025: vitamin C 250 mg tablet [BT-NEML].", strengths: "250 mg tablet.", stg: "Not specified in Bhutan STG 2024 text [BT-STG]." },
  calc: [
    { drug: "ascorbic-acid", indication_id: "scurvy_iv", label: "Scurvy — IV daily dose by age", route: "IV", population: { min_age_months: 5, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1,
      bands: [{ min_weight_kg: 0.3, max_weight_kg: null, text: "5–11 months: 50 mg; 1–10 years: 100 mg; 11 years and older: 200 mg — once daily, up to 1 week", daily: null }],
      caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "By age", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ascorbic acid injection — Fresenius Kabi, label effective 2025-12-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1606e29f-0e80-4069-b688-daab9cbff20a"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Vitamin C; IV form for short-term scurvy treatment when oral use is not possible.",
    adult: [{ ind: "Scurvy (IV, up to 1 week)", text: "200 mg IV once daily by slow infusion; switch to oral when possible.", calc: ["scurvy_iv"], bt: "Bhutan NEML: vitamin C 250 mg tablets." }],
    child: [{ ind: "Scurvy (IV)", text: "5–11 months: 50 mg; 1–10 years: 100 mg; 11 years and older: 200 mg — once daily, up to 1 week.", calc: ["scurvy_iv"] }] }
});

FDB_M("asenapine", {
  inn: "Asenapine", atc: "N05AH05", cls: "Atypical antipsychotic (sublingual)",
  linked: [["Psychosis — adults", "Schizophrenia and bipolar mania [FDA]", "psychosis-adult"]],
  forms: ["Sublingual tablets 2.5, 5, 10 mg — dissolve under the tongue; nothing to eat or drink for 10 minutes; do not swallow [FDA]."],
  moa: "Antagonist at dopamine D2 and serotonin 5-HT2A receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["Terminal half-life about 24 h [FDA].", "Fluvoxamine (strong CYP1A2 inhibitor) raises levels [FDA]."],
  ind: { adult: ["Schizophrenia [FDA].", "Bipolar I mania or mixed episodes, alone or with lithium/valproate, and maintenance [FDA]."], paed: ["Bipolar mania monotherapy, 10–17 years [FDA]."] },
  adult: [["Schizophrenia", "5 mg sublingually twice daily; maintenance 5–10 mg twice daily; maximum 10 mg twice daily [FDA]."], ["Bipolar mania", "5–10 mg twice daily (5 mg twice daily as add-on); maximum 10 mg twice daily [FDA]."]],
  paed: { tiers: ["Bipolar mania, 10–17 years: start 2.5 mg twice daily; 2.5–10 mg twice daily; maximum 10 mg twice daily [FDA]."], transition: "Adult doses from 18 years.", calcNote: "Fixed sublingual doses." },
  adj: { hepatic: "Severe (Child-Pugh C): contraindicated [FDA]." },
  tox: { human: "Agitation and confusion in reported overdoses [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; ECG [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hepatic impairment [FDA].", "Hypersensitivity (anaphylaxis, angioedema reported) [FDA]."],
  ae: { common: ["Akathisia, oral numbness (hypoaesthesia), somnolence [FDA]."], serious: ["Increased death in elderly with dementia; neuroleptic malignant syndrome; tardive dyskinesia; QT prolongation; serious hypersensitivity [FDA]"] },
  monitor: ["Weight, glucose, lipids; movement disorders [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "asenapine", indication_id: "scz", label: "Schizophrenia — adult", route: "SL", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 10, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole sublingual tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "SAPHRIS (asenapine) sublingual tablets — Allergan, label effective 2025-01-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5429f134-839f-4ffc-9944-55f51238def8"]],
  dose: { tagline: "Twice-daily sublingual antipsychotic for schizophrenia and bipolar mania.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis",
    boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. Asenapine is not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia", text: "5 mg under the tongue twice daily; up to 10 mg twice daily. No food or drink for 10 minutes.", calc: ["scz"] }, { ind: "Bipolar mania", text: "5–10 mg twice daily (5 mg twice daily with lithium or valproate)." }],
    child: [{ ind: "Bipolar mania (10–17 years)", text: "2.5 mg twice daily, up to 10 mg twice daily." }] }
});

FDB_M("apremilast", {
  inn: "Apremilast", atc: "L04AA32", cls: "Phosphodiesterase-4 (PDE4) inhibitor",
  linked: [],
  forms: ["Tablets 10, 20, 30 mg (OTEZLA); extended-release 75 mg (OTEZLA XR) [FDA].", "Titrate over 5 days to reduce GI upset (starter pack) [FDA]."],
  moa: "Inhibits PDE4 → higher cAMP → less inflammatory cytokine production [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP3A4 inducers (rifampicin) reduce effect — not recommended [FDA]."],
  ind: { adult: ["Psoriatic arthritis; plaque psoriasis; oral ulcers of Behçet's disease [FDA]."], paed: ["Psoriatic arthritis and moderate–severe plaque psoriasis from 6 years and 20 kg [FDA]."] },
  adult: [["Psoriatic arthritis, plaque psoriasis, Behçet's ulcers", "Titrate over 5 days, then 30 mg twice daily (or XR 75 mg once daily) [FDA]."]],
  paed: { tiers: ["6 years and older, 50 kg or more: 30 mg twice daily (or XR 75 mg daily) [FDA].", "6 years and older, 20 to under 50 kg: 20 mg twice daily [FDA]."], transition: "Adult dose from 50 kg.", calcNote: "Weight band at 50 kg; severe kidney impairment halves frequency." },
  adj: { renal: "Severe impairment (CrCl under 30): 30 mg once daily (titrate with morning doses only) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Hypersensitivity [FDA]."],
  ae: { common: ["Diarrhoea, nausea, headache; upper respiratory infection in psoriasis (5% or more) [FDA]."], serious: ["Severe diarrhoea, nausea and vomiting; depression and suicidal thoughts; weight loss [FDA]"] },
  monitor: ["Weight; mood [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "apremilast", indication_id: "pso", label: "Psoriasis / PsA — maintenance after titration", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: 20, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2,
      bands: [{ min_weight_kg: 20, max_weight_kg: 50, text: "20 mg twice daily (child 6 years and over)", daily: 40 }, { min_weight_kg: 50, max_weight_kg: null, text: "30 mg twice daily (or XR 75 mg once daily)", daily: 60 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Whole tablets", renal: [], renal_note: "CrCl under 30 mL/min: 30 mg once daily [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "OTEZLA / OTEZLA XR (apremilast) tablets — Amgen, label effective 2026-09-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f6b1f516-4972-4d82-bced-113e47b41cc5"]],
  dose: { tagline: "Oral PDE4 inhibitor for psoriasis, psoriatic arthritis and Behçet's mouth ulcers.",
    adult: [{ ind: "Psoriasis, psoriatic arthritis, Behçet's oral ulcers", text: "Titrate over 5 days to 30 mg twice daily (or XR 75 mg once daily). CrCl under 30: 30 mg once daily.", calc: ["pso"] }],
    child: [{ ind: "Psoriasis or PsA (6 years and older)", text: "20–49 kg: 20 mg twice daily; 50 kg or more: 30 mg twice daily.", calc: ["pso"] }] }
});

FDB_M("armodafinil", {
  inn: "Armodafinil", atc: "N06BA13", cls: "Wakefulness-promoting agent (R-enantiomer of modafinil)",
  linked: [],
  forms: ["Tablets 50, 150, 200, 250 mg [FDA]."],
  moa: "Promotes wakefulness, largely by inhibiting dopamine reuptake [UNVERIFIED-KNOWLEDGE].",
  pk: ["Induces CYP3A4 — reduces the effect of hormonal contraceptives (use another method during and for 1 month after) and ciclosporin [FDA]."],
  ind: { adult: ["Excessive sleepiness with obstructive sleep apnoea (alongside OSA treatment), narcolepsy or shift work disorder [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["OSA or narcolepsy", "150–250 mg once in the morning (no consistent extra benefit above 150 mg in OSA) [FDA]."], ["Shift work disorder", "150 mg about 1 hour before the shift [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { hepatic: "Severe impairment: reduce the dose [FDA].", other: "Older adults: consider a lower dose [FDA]." },
  tox: { human: "Fatal overdoses reported (alone or with other drugs); insomnia, restlessness, agitation, tachycardia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; cardiovascular monitoring [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to modafinil or armodafinil [FDA]."],
  ae: { common: ["Headache, nausea, dizziness, insomnia (5% or more) [FDA]."], serious: ["Serious rash including SJS and DRESS; angioedema; psychiatric symptoms [FDA]"] },
  monitor: ["Sleepiness response; rash; mood [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "armodafinil", indication_id: "osa", label: "OSA or narcolepsy", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 150, value_max: 250, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 250, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "NUVIGIL (armodafinil) tablets — label effective 2026-09-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3dd49302-f757-d945-e063-6294a90afcba"]],
  dose: { tagline: "Morning tablet that improves wakefulness in narcolepsy, sleep apnoea and shift-work disorder.",
    adult: [{ ind: "OSA or narcolepsy", text: "150–250 mg once each morning.", calc: ["osa"] }, { ind: "Shift work disorder", text: "150 mg about 1 hour before the shift." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("articaine", {
  inn: "Articaine (with adrenaline)", atc: "N01BB58", cls: "Amide local anaesthetic (dental), with adrenaline",
  linked: [],
  forms: ["Dental cartridges articaine 4% with adrenaline 1:100,000 or 1:200,000 [FDA]."],
  moa: "Blocks voltage-gated sodium channels in nerve fibres → local anaesthesia; adrenaline prolongs action [UNVERIFIED-KNOWLEDGE].",
  pk: ["Elimination half-life about 43 minutes [FDA]."],
  ind: { adult: ["Local, infiltrative or conductive anaesthesia for dental procedures [FDA]."], paed: ["From 4 years [FDA]."] },
  adult: [["Dental anaesthesia", "Infiltration 0.5–2.5 mL (20–100 mg); nerve block 0.5–3.4 mL (20–136 mg); oral surgery 1–5.1 mL (40–204 mg). 1:200,000 adrenaline preferred for routine work [FDA]."]],
  paed: { tiers: ["4–16 years: maximum 7 mg/kg articaine [FDA].", "Under 4 years: not established [FDA]."], transition: "Same maximum mg/kg.", calcNote: "Maximum dose 7 mg/kg (0.175 mL/kg)." },
  adj: { other: "Maximum 7 mg/kg articaine and 0.0017 mg/kg adrenaline (0.175 mL/kg) in healthy adults [FDA]. Aspirate before injecting [FDA]." },
  tox: { human: "High plasma levels or intravascular injection: CNS excitation then depression, seizures, cardiovascular depression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Airway, oxygen, seizure control; lipid emulsion for systemic toxicity [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Sulfite hypersensitivity [FDA]."],
  ae: { common: ["Headache, pain (over 2%) [FDA]."], serious: ["Local anaesthetic systemic toxicity; methaemoglobinaemia; paraesthesia [FDA]"] },
  monitor: ["Patient during and after injection for toxicity signs [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 (lidocaine with adrenaline dental cartridges are the usual alternative — check) [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "articaine", indication_id: "max", label: "Maximum total dose (7 mg/kg)", route: "Submucosal", population: { min_age_months: 48, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 7, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 40, unit: "mg/mL" }], rounding: "Maximum — not a target dose", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Articaine HCl and epinephrine injection — Aira LLC (Pierrel), label effective 2026-10-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=905cade1-9b37-486a-ac12-21f3262ab4e2"]],
  dose: { tagline: "Dental local anaesthetic with adrenaline for infiltration and nerve blocks.",
    adult: [{ ind: "Dental anaesthesia", text: "Infiltration 0.5–2.5 mL; block 0.5–3.4 mL; oral surgery 1–5.1 mL. Never more than 7 mg/kg (0.175 mL/kg).", calc: ["max"] }],
    child: [{ ind: "4–16 years", text: "Smallest effective volume; maximum 7 mg/kg.", calc: ["max"] }] }
});

FDB_M("apalutamide", {
  inn: "Apalutamide", atc: "L02BB05", cls: "Androgen-receptor inhibitor",
  linked: [],
  forms: ["Tablets 60 mg and 240 mg; swallow whole [FDA]."],
  moa: "Blocks the androgen receptor, its nuclear translocation and DNA binding → slows prostate cancer growth [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 3 days [FDA].", "Strong CYP3A4/2C19 inducer: reduces many drugs, including warfarin [FDA]."],
  ind: { adult: ["Metastatic castration-sensitive prostate cancer; non-metastatic castration-resistant prostate cancer [FDA]."], paed: ["Not applicable. [NEP]"] },
  adult: [["Prostate cancer", "240 mg once daily with a GnRH analogue (or after orchiectomy); severe hepatic impairment: 120 mg once daily [FDA]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { hepatic: "Severe impairment: 120 mg once daily [FDA].", other: "Grade 3–4 toxicity: withhold, then resume at a lower dose [FDA]." },
  tox: { human: "No specific antidote [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, joint pain, rash, reduced appetite, falls, weight loss, hypertension, hot flush, diarrhoea, fracture (10% or more) [FDA]."], serious: ["Falls and fractures; ischaemic heart disease; seizures [FDA]"] },
  monitor: ["Bone health and fall risk [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "apalutamide", indication_id: "pc", label: "Prostate cancer", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 240, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 240, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 240, unit: "mg/tab" }], rounding: "Whole tablet", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ERLEADA (apalutamide) tablets — Janssen, label effective 2026-07-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d1cda4f7-cb33-46ea-b9ac-431f6452b1a5"]],
  dose: { tagline: "Daily androgen-receptor blocker for advanced prostate cancer, with androgen deprivation.",
    adult: [{ ind: "Prostate cancer (mCSPC, nmCRPC)", text: "240 mg once daily with ongoing GnRH analogue therapy; severe hepatic impairment 120 mg.", calc: ["pc"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

FDB_M("apraclonidine", {
  inn: "Apraclonidine", atc: "S01EA03", cls: "Alpha-2 adrenergic agonist eye drop",
  linked: [["Red eye — adults", "Redness reliever for minor irritation (OTC) [FDA]", "redeye-adult"]],
  forms: ["Eye drops (BRYTLY, over-the-counter redness reliever) [FDA].", "Prescription apraclonidine drops used around laser surgery and for short-term glaucoma control are separate products (to be verified) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stimulates alpha-2 receptors → conjunctival vasoconstriction and reduced aqueous production [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable (eye drop)."],
  ind: { adult: ["Relief of eye redness due to minor irritation (OTC) [FDA]."], paed: ["12 years and older; not under 12 [FDA]."] },
  adult: [["Eye redness", "1 drop in the affected eye(s) every 12 hours; not more than twice daily [FDA]."]],
  paed: { tiers: ["12 years and older: as adults [FDA].", "Under 12: do not use [FDA]."], transition: "Adult use from 12 years.", calcNote: "Eye drop; no calculation." },
  adj: { other: "Remove contact lenses; wait 10 minutes; space other eye products by 5 minutes [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["Not established in primary source (OTC label). [NEP]"],
  ae: { common: ["Not established in primary source (OTC label). [NEP]"], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Ask a doctor if redness persists or vision changes [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "BRYTLY (apraclonidine ophthalmic solution), OTC drug facts — Alcon, label effective 2026-10-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a64eaf7f-448e-4def-bddc-f6919d06b357"]],
  dose: { tagline: "Eye drop that relieves redness from minor irritation (OTC).",
    adult: [{ ind: "Eye redness (minor irritation)", text: "1 drop every 12 hours; not more than twice daily." }],
    child: [{ ind: "12 years and older", text: "As adults." }, { ind: "Under 12 years", text: "Do not use." }] }
});

FDB_M("andexanet-alfa", {
  inn: "Andexanet alfa", atc: "V03AB38", cls: "Factor Xa inhibitor reversal agent (recombinant decoy factor Xa)",
  linked: [],
  forms: ["Powder 200 mg vials; 10 mg/mL when reconstituted [FDA]."],
  moa: "Inactive recombinant factor Xa that binds and sequesters rivaroxaban and apixaban [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Life-threatening or uncontrolled bleeding in patients on rivaroxaban or apixaban (accelerated approval) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Reversal of rivaroxaban or apixaban", "Low dose: 400 mg IV bolus at 30 mg/min, then 4 mg/min for 120 min. High dose: 800 mg bolus at 30 mg/min, then 8 mg/min for 120 min. Low dose if the last dose was 8 h or more ago, or rivaroxaban 10 mg or less / apixaban 5 mg or less taken within 8 h; high dose for larger or unknown doses within 8 h [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed regimens by anticoagulant dose and timing." },
  adj: { other: "Only one dose has been evaluated; resume anticoagulation when medically appropriate [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["None [FDA]."],
  ae: { common: ["Urinary tract infection, pneumonia (5% or more) [FDA]."], serious: ["Arterial and venous thromboembolism, ischaemic events, cardiac arrest, sudden death [FDA]"] },
  monitor: ["Signs of thrombosis and ischaemia; restart anticoagulation when safe [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ANDEXXA (coagulation factor Xa recombinant, inactivated-zhzo) — AstraZeneca, label effective 2025-05-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d9d90a6-63e6-46ef-96ff-dd6519ae7b6c"]],
  dose: { tagline: "IV antidote that reverses apixaban or rivaroxaban in life-threatening bleeding.",
    boxedTitle: "Thromboembolic and ischaemic risks, cardiac arrest, sudden death",
    boxed: "Treatment has been associated with serious and life-threatening adverse events, including arterial and venous thromboembolic events, ischemic events including myocardial infarction and ischemic stroke, cardiac arrest and sudden deaths. Monitor for these events and resume anticoagulant therapy as soon as medically appropriate [FDA].",
    adult: [{ ind: "Life-threatening bleeding on apixaban or rivaroxaban", text: "Low dose: 400 mg bolus (30 mg/min) then 4 mg/min for 2 h. High dose: 800 mg bolus then 8 mg/min for 2 h. High dose if apixaban over 5 mg or rivaroxaban over 10 mg (or unknown) was taken under 8 h ago." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("angiotensin-ii", {
  inn: "Angiotensin II", atc: "C01CX09", cls: "Vasopressor (synthetic angiotensin II)",
  linked: [["Shock — adults", "Septic or distributive shock not responding to other vasopressors [FDA]", "shock-adult"]],
  forms: ["Vials 0.5 mg/mL and 2.5 mg/mL; dilute in 0.9% saline; use within 24 h [FDA]."],
  moa: "Stimulates AT1 receptors → vasoconstriction and aldosterone release → raises blood pressure [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life under 1 minute [FDA]."],
  ind: { adult: ["Raise blood pressure in septic or other distributive shock [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Distributive shock", "Start 20 ng/kg/min IV; titrate every 5 minutes by up to 15 ng/kg/min; maximum 80 ng/kg/min in the first 3 hours; maintenance no more than 40 ng/kg/min (as low as 1.25 ng/kg/min) [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Infusion in ng/kg/min." },
  adj: { other: "Give concurrent VTE prophylaxis (thromboembolism risk) [FDA]." },
  tox: { human: "Hypertension, brief because of the short half-life [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce or stop; supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Thromboembolic events (over 10%) [FDA]."], serious: ["Arterial and venous thrombosis; tachycardia; peripheral ischaemia [FDA]"] },
  monitor: ["Blood pressure continuously; VTE prophylaxis [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "GIAPREZA (angiotensin II) injection — La Jolla Pharmaceutical, label effective 2026-07-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c265d69a-3efe-4107-9a9e-e6fd3d531c48"]],
  dose: { tagline: "IV vasopressor for septic or distributive shock that persists despite other vasopressors.",
    adult: [{ ind: "Septic or distributive shock", text: "20 ng/kg/min IV, titrated every 5 minutes by up to 15 ng/kg/min; maximum 80 ng/kg/min in the first 3 hours, then no more than 40 ng/kg/min." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("arsenic-trioxide", {
  inn: "Arsenic trioxide", atc: "L01XX27", cls: "Antineoplastic arsenical (APL)",
  linked: [],
  forms: ["Injection 12 mg/6 mL (2 mg/mL) [FDA]."],
  moa: "Degrades the PML-RARA fusion protein and induces differentiation and apoptosis of promyelocytes [UNVERIFIED-KNOWLEDGE].",
  pk: ["Elimination half-life of arsenic(III) 10–14 h [FDA].", "Avoid other QT-prolonging drugs and drugs causing electrolyte loss [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["With tretinoin for newly diagnosed low-risk acute promyelocytic leukaemia (t(15;17) or PML/RARA) [FDA].", "Relapsed or refractory APL after retinoid and anthracycline [FDA]."], paed: ["Not established in primary source (some paediatric use in protocols). [NEP]"] },
  adult: [["Newly diagnosed low-risk APL", "Induction: 0.15 mg/kg/day IV with tretinoin until marrow remission (maximum 60 days). Consolidation: 0.15 mg/kg/day 5 days a week in weeks 1–4 of each 8-week cycle, 4 cycles [FDA]."], ["Relapsed or refractory APL", "Induction 0.15 mg/kg/day until remission (maximum 60 days); consolidation 0.15 mg/kg/day for 25 doses over up to 5 weeks [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "0.15 mg/kg/day." },
  adj: { other: "Before each dose: ECG, potassium over 4 mmol/L, magnesium over 1.8 mg/dL; do not start if QTc over 500 ms [FDA]." },
  tox: { human: "Convulsions, muscle weakness, confusion [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; chelation (dimercaprol, then penicillamine) [FDA]." },
  contra: ["Hypersensitivity to arsenic [FDA]."],
  ae: { common: ["Nausea, cough, fatigue, fever, headache, abdominal pain, vomiting, tachycardia, diarrhoea, dyspnoea, hypokalaemia, leukocytosis, hyperglycaemia (over 30%) [FDA]."], serious: ["Differentiation syndrome; QTc prolongation and torsades; encephalopathy including Wernicke's [FDA]"] },
  monitor: ["ECG weekly or more; electrolytes; blood counts; thiamine status [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "arsenic-trioxide", indication_id: "apl", label: "APL — 0.15 mg/kg/day", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 0.15, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", infusion: { duration_h: 2 },
      formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "Exact mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TRISENOX (arsenic trioxide) injection — Cephalon (Teva), label effective 2022-06-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=101fc347-d0ad-4aee-8b06-9feb187fd741"]],
  dose: { tagline: "IV arsenical that cures most acute promyelocytic leukaemia with tretinoin.",
    boxedTitle: "Differentiation syndrome, cardiac conduction abnormalities, encephalopathy",
    boxed: "Patients with acute promyelocytic leukemia treated with arsenic trioxide have experienced differentiation syndrome, which may be life-threatening or fatal. Arsenic trioxide can cause QTc interval prolongation, complete AV block and torsade de pointes, which can be fatal. Serious encephalopathy, including Wernicke's, has occurred [FDA].",
    adult: [{ ind: "Acute promyelocytic leukaemia", text: "0.15 mg/kg/day IV (induction until remission, maximum 60 days; then consolidation cycles) with tretinoin. Check ECG and electrolytes first.", calc: ["apl"] }],
    child: [{ ind: "Children", text: "Not established in the FDA label." }] }
});

FDB_M("asparaginase", {
  inn: "Asparaginase (Erwinia chrysanthemi, recombinant)", atc: "L01XX02", cls: "Antineoplastic enzyme",
  linked: [],
  forms: ["Injection 10 mg/0.5 mL for IM use (RYLAZE) [FDA].", "Other asparaginase products (E. coli native, pegaspargase) have different doses and are not interchangeable [UNVERIFIED-KNOWLEDGE]."],
  moa: "Depletes plasma asparagine → leukaemic lymphoblasts that cannot make asparagine die [UNVERIFIED-KNOWLEDGE].",
  pk: ["Apparent half-life about 15–19 h [FDA]."],
  ind: { adult: ["Part of multi-agent therapy for ALL and lymphoblastic lymphoma after hypersensitivity to E. coli-derived asparaginase [FDA]."], paed: ["Same, from 1 month [FDA]."] },
  adult: [["ALL/LBL (replacing a long-acting asparaginase)", "25 mg/m² IM every 48 h; or Monday and Wednesday mornings 25 mg/m² and Friday afternoon 50 mg/m² (53–58 h after the Wednesday dose) [FDA]."]],
  paed: { tiers: ["1 month and older: same mg/m² schedules [FDA]."], transition: "Same at all ages.", calcNote: "mg/m² — needs height and weight." },
  adj: {},
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Serious hypersensitivity to Erwinia asparaginase [FDA].", "History of serious pancreatitis, thrombosis or haemorrhagic events with previous asparaginase [FDA]."],
  ae: { common: ["Abnormal liver tests, nausea, musculoskeletal pain, infection, fatigue, headache, febrile neutropenia, fever, haemorrhage, stomatitis (over 20%) [FDA]."], serious: ["Anaphylaxis; pancreatitis; thrombosis; haemorrhage; hepatotoxicity; glucose intolerance [FDA]"] },
  monitor: ["Glucose, liver tests, amylase/lipase, coagulation [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "asparaginase", indication_id: "all_q48", label: "ALL/LBL — 25 mg/m² IM every 48 h", route: "IM", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_m2", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 48, divided_doses: null, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "Exact mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "RYLAZE (asparaginase erwinia chrysanthemi, recombinant-rywn) — Jazz Pharmaceuticals, label effective 2025-07-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=857e53aa-1098-4dad-b654-0276cdd43e03"]],
  dose: { tagline: "Leukaemia enzyme used when patients react to E. coli asparaginase.",
    adult: [{ ind: "ALL / lymphoblastic lymphoma", text: "25 mg/m² IM every 48 hours, or 25 mg/m² Monday and Wednesday mornings and 50 mg/m² Friday afternoon.", calc: ["all_q48"] }],
    child: [{ ind: "ALL / LBL (1 month and older)", text: "Same mg/m² schedules.", calc: ["all_q48"] }] }
});

FDB_M("amivantamab", {
  inn: "Amivantamab", atc: "L01FX18", cls: "Bispecific EGFR- and MET-directed antibody",
  linked: [],
  forms: ["Injection 350 mg/7 mL (50 mg/mL) for IV infusion after dilution [FDA]."],
  moa: "Binds EGFR and MET → blocks signalling and triggers immune-mediated killing of EGFR-mutated lung cancer cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["Terminal half-life about 14 days [FDA]."],
  ind: { adult: ["EGFR-mutated (exon 19 deletion/L858R or exon 20 insertion) locally advanced or metastatic NSCLC — with lazertinib, with carboplatin–pemetrexed, or alone, per label [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["With lazertinib or alone", "Under 80 kg: 1,050 mg; 80 kg or more: 1,400 mg — weekly for 5 weeks (week 1 split over days 1–2), then every 2 weeks from week 7 [FDA]."], ["With carboplatin and pemetrexed", "Under 80 kg: 1,400 mg weekly for 4 weeks, then 1,750 mg every 3 weeks from week 7; 80 kg or more: 1,750 mg, then 2,100 mg [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Weight band at 80 kg." },
  adj: { other: "Premedication and dermatologic prophylaxis as per label; peripheral line in weeks 1–2 [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Rash, nail toxicity, infusion reactions, musculoskeletal pain, stomatitis, oedema, VTE, paraesthesia, fatigue, diarrhoea (20% or more) [FDA]."], serious: ["Infusion reactions; interstitial lung disease; VTE (with lazertinib); severe skin reactions; eye toxicity (keratitis) [FDA]"] },
  monitor: ["Skin, eyes, respiratory symptoms; anticoagulant prophylaxis with lazertinib [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "amivantamab", indication_id: "mono", label: "With lazertinib or alone — dose by weight", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: null,
      bands: [{ min_weight_kg: 0.3, max_weight_kg: 80, text: "1,050 mg weekly × 5, then every 2 weeks from week 7", daily: null }, { min_weight_kg: 80, max_weight_kg: null, text: "1,400 mg weekly × 5, then every 2 weeks from week 7", daily: null }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "350 mg vials", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "RYBREVANT (amivantamab-vmjw) injection — Janssen Biotech, label effective 2025-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1466c070-9f97-4fa4-a955-6a6b59981fb8"]],
  dose: { tagline: "Bispecific antibody infusion for EGFR-mutated non-small cell lung cancer.",
    adult: [{ ind: "EGFR-mutated NSCLC", text: "With lazertinib or alone: under 80 kg 1,050 mg, 80 kg or more 1,400 mg — weekly × 5 then every 2 weeks. With chemotherapy: 1,400/1,750 mg, then 1,750/2,100 mg every 3 weeks.", calc: ["mono"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("anifrolumab", {
  inn: "Anifrolumab", atc: "L04AG11", cls: "Type I interferon receptor antibody",
  linked: [],
  forms: ["IV: 300 mg/2 mL vial (dilute) [FDA].", "SC: prefilled syringe or pen 120 mg (weekly) [FDA]."],
  moa: "Blocks the type I interferon receptor (IFNAR1) → reduces interferon-driven lupus inflammation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Moderate–severe systemic lupus erythematosus on standard therapy (not studied in severe active lupus nephritis or CNS lupus) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["SLE", "300 mg IV every 4 weeks, or 120 mg SC once weekly [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { other: "Avoid live vaccines [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["History of anaphylaxis with anifrolumab [FDA]."],
  ae: { common: ["Nasopharyngitis, upper respiratory infection, bronchitis, infusion reactions, herpes zoster, cough (5% or more) [FDA]."], serious: ["Serious infections; anaphylaxis; malignancy [FDA]"] },
  monitor: ["Infections, including herpes zoster [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "anifrolumab", indication_id: "sle_iv", label: "SLE — 300 mg IV every 4 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "inj", strength: 150, unit: "mg/mL" }], rounding: "One vial", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "SAPHNELO (anifrolumab-fnia) — AstraZeneca, label effective 2026-09-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d6203302-2128-41a7-b0b4-0e6c0704d4dc"]],
  dose: { tagline: "Interferon-receptor antibody added to standard treatment for moderate–severe lupus.",
    adult: [{ ind: "Systemic lupus erythematosus", text: "300 mg IV every 4 weeks, or 120 mg SC once weekly.", calc: ["sle_iv"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("asciminib", {
  inn: "Asciminib", atc: "L01EA06", cls: "BCR-ABL1 inhibitor (STAMP — allosteric)",
  linked: [],
  forms: ["Tablets 20 mg and 40 mg; swallow whole; no food 2 h before and 1 h after [FDA]."],
  moa: "Binds the ABL myristoyl pocket and locks BCR-ABL1 inactive (works against many ATP-site mutations) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short terminal half-life (5–6 h) [FDA].", "Interacts with CYP3A4 and P-gp substrates; avoid itraconazole oral solution [FDA]."],
  ind: { adult: ["Philadelphia-positive CML in chronic phase, newly diagnosed (accelerated approval) or previously treated; and with the T315I mutation [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Ph+ CML chronic phase", "80 mg once daily or 40 mg twice daily [FDA]."], ["Ph+ CML-CP with T315I", "200 mg twice daily [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: {},
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Musculoskeletal pain, rash, fatigue, upper respiratory infection, headache, abdominal pain, joint pain, diarrhoea (20% or more) [FDA]."], serious: ["Myelosuppression; pancreatic toxicity; hypertension; cardiovascular toxicity [FDA]"] },
  monitor: ["Blood counts, lipase/amylase, blood pressure [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "asciminib", indication_id: "cml", label: "Ph+ CML-CP — 40 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 400, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 40, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "SCEMBLIX (asciminib) tablets — Novartis, label effective 2026-09-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e33001e7-3650-42b1-ae56-cddb5c43aa2b"]],
  dose: { tagline: "Targeted tablet for chronic myeloid leukaemia, including the T315I mutation.",
    adult: [{ ind: "Ph+ CML, chronic phase", text: "80 mg once daily or 40 mg twice daily, on an empty stomach. T315I mutation: 200 mg twice daily.", calc: ["cml"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("aprocitentan", {
  inn: "Aprocitentan", atc: "C02KN01", cls: "Dual endothelin receptor antagonist (antihypertensive)",
  linked: [["Hypertension — adults", "Resistant hypertension on other drugs [FDA]", "htn-adult"]],
  forms: ["Tablets 12.5 mg [FDA]."],
  moa: "Blocks endothelin ETA and ETB receptors → vasodilatation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Effective half-life about 41 h [FDA]."],
  ind: { adult: ["Hypertension not controlled on other antihypertensives, in combination [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Resistant hypertension", "12.5 mg once daily; missed dose skipped [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Not applicable.", calcNote: "Fixed dose." },
  adj: { preg: "Contraindicated; exclude pregnancy before starting; effective contraception [FDA].", other: "Fluid retention: may need diuretic adjustment [FDA]." },
  tox: { human: "Single doses up to 600 mg and 100 mg daily in volunteers [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Pregnancy [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Oedema/fluid retention, anaemia (2% or more) [FDA]."], serious: ["Embryo-fetal toxicity; hepatotoxicity; heart failure from fluid retention [FDA]"] },
  monitor: ["Pregnancy tests; haemoglobin; liver tests; oedema [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "aprocitentan", indication_id: "htn", label: "Resistant hypertension", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 12.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 12.5, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 12.5, unit: "mg/tab" }], rounding: "Whole tablet", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TRYVIO (aprocitentan) tablets — Idorsia, label effective 2026-08-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dfe7a2ee-612c-4aba-834a-d68e6b59a0a6"]],
  dose: { tagline: "Once-daily endothelin blocker added for hypertension resistant to other drugs.",
    boxedTitle: "Embryo-fetal toxicity",
    boxed: "Aprocitentan is contraindicated for use during pregnancy because it may cause fetal harm. In patients who can become pregnant, exclude pregnancy before starting and advise effective contraception before, during and after treatment [FDA].",
    adult: [{ ind: "Resistant hypertension", text: "12.5 mg once daily with other antihypertensives.", calc: ["htn"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("arginine-hydrochloride", {
  inn: "Arginine hydrochloride", atc: "B05XB01", cls: "Diagnostic agent (growth hormone stimulation test)",
  linked: [],
  forms: ["10% solution for IV infusion (R-GENE 10), 300 mL bottle = 30 g [FDA]."],
  moa: "Stimulates pituitary release of growth hormone [FDA].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Diagnostic stimulation test of pituitary growth-hormone reserve [FDA]."], paed: ["Same [FDA]."] },
  adult: [["GH stimulation test", "30 g (300 mL) IV over 30 minutes; never more than 30 g [FDA]."]],
  paed: { tiers: ["0.5 g/kg (5 mL/kg) IV over 30 minutes; maximum 30 g; 59 kg or less: draw the weight-based volume into a separate container to avoid overdose [FDA]."], transition: "Adult 30 g at 60 kg and above.", calcNote: "0.5 g/kg capped at 30 g." },
  adj: {},
  tox: { human: "Overdose can cause transient metabolic acidosis with hyperventilation, which could lead to death [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Measure base deficit; usually self-corrects; give alkali if needed [FDA]." },
  contra: ["Hypersensitivity to any ingredient [FDA]."],
  ae: { common: ["Nausea, vomiting, flushing, headache [FDA]."], serious: ["Metabolic acidosis with overdose [FDA]"] },
  monitor: ["Growth hormone samples per protocol [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "arginine-hydrochloride", indication_id: "ghst", label: "GH stimulation test — 0.5 g/kg (max 30 g)", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 30000, unit: "mg" }, weight_basis: "actual", infusion: { duration_h: 0.5 },
      formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "Exact mL (5 mL/kg)", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "R-GENE 10 (arginine hydrochloride injection) — Pfizer (Pharmacia & Upjohn), label effective 2024-04-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6accf33f-9841-4327-8923-93c42020ef12"]],
  dose: { tagline: "IV infusion used to test pituitary growth-hormone reserve.",
    cautionTitle: "Weight-based dose in children; overdose can cause fatal acidosis",
    caution: "The total dose should not exceed 30 g. For patients weighing 59 kg or less, withdraw a weight-based dose from the bottle into a separate container for infusion. An overdosage may cause a transient metabolic acidosis with hyperventilation, which could lead to death [FDA].",
    adult: [{ ind: "Growth hormone stimulation test", text: "30 g (300 mL) IV over 30 minutes.", calc: ["ghst"] }],
    child: [{ ind: "Growth hormone stimulation test", text: "0.5 g/kg (5 mL/kg) IV over 30 minutes; maximum 30 g.", calc: ["ghst"] }] }
});

FDB_M("asfotase-alfa", {
  inn: "Asfotase alfa", atc: "A16AB13", cls: "Enzyme replacement (tissue-nonspecific alkaline phosphatase)",
  linked: [["Rickets — children", "Hypophosphatasia is a rickets mimic [UNVERIFIED-KNOWLEDGE]", "rickets-child"]],
  forms: ["SC injection vials in several strengths; do not use the 80 mg/0.8 mL vial in patients under 40 kg [FDA]."],
  moa: "Replaces deficient alkaline phosphatase → bone mineralisation in hypophosphatasia [UNVERIFIED-KNOWLEDGE].",
  pk: ["Elimination half-life about 5 days [FDA]."],
  ind: { adult: ["Perinatal/infantile-onset and juvenile-onset hypophosphatasia [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Hypophosphatasia", "2 mg/kg SC three times a week, or 1 mg/kg six times a week; perinatal/infantile-onset may increase to 3 mg/kg three times a week [FDA]."]],
  paed: { tiers: ["Same mg/kg regimens [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg; vial choice depends on weight." },
  adj: {},
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["None [FDA]."],
  ae: { common: ["Injection-site reactions, lipodystrophy, ectopic calcification, hypersensitivity (10% or more) [FDA]."], serious: ["Anaphylaxis; ectopic calcification of eye and kidney [FDA]"] },
  monitor: ["Ophthalmology examination and renal ultrasound for calcification [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "asfotase-alfa", indication_id: "hpp", label: "Hypophosphatasia — 2 mg/kg three times a week", route: "SC", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 56, divided_doses: null, caps: {}, weight_basis: "actual",
      formulations: [], rounding: "Per label vial table [FDA]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "STRENSIQ (asfotase alfa) injection — Alexion, label effective 2025-12-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3387574f-5eaa-4501-a71d-4cbfbd563031"]],
  dose: { tagline: "Enzyme replacement injection for hypophosphatasia.",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis, early in therapy and after extended duration. Initiate in a healthcare setting with appropriate monitoring and support measures [FDA].",
    adult: [{ ind: "Hypophosphatasia", text: "2 mg/kg SC three times a week (or 1 mg/kg six times a week).", calc: ["hpp"] }],
    child: [{ ind: "Hypophosphatasia", text: "2 mg/kg three times a week; perinatal/infantile-onset up to 3 mg/kg three times a week.", calc: ["hpp"] }] }
});

FDB_M("arimoclomol", {
  inn: "Arimoclomol", atc: "A16AX17", cls: "Heat-shock protein amplifier",
  linked: [],
  forms: ["Capsules 47, 62, 93, 124 mg [FDA]."],
  moa: "Amplifies heat-shock protein response, helping cells handle misfolded NPC1 protein [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 4 h [FDA]."],
  ind: { adult: ["With miglustat: neurological manifestations of Niemann–Pick disease type C [FDA]."], paed: ["From 2 years [FDA]."] },
  adult: [["Niemann–Pick type C", "Over 55 kg: 124 mg three times daily [FDA]."]],
  paed: { tiers: ["8–15 kg: 47 mg; over 15–30 kg: 62 mg; over 30–55 kg: 93 mg; over 55 kg: 124 mg — three times daily [FDA]."], transition: "Weight bands.", calcNote: "Weight bands; eGFR 15–50 needs a lower dose (see label)." },
  adj: { renal: "eGFR 15 to under 50: reduced dose per label [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Upper respiratory infection, diarrhoea, weight loss (15% or more) [FDA]."], serious: ["Hypersensitivity; raised creatinine [FDA]"] },
  monitor: ["Kidney function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "arimoclomol", indication_id: "npc", label: "Niemann–Pick C — dose by weight", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: 8, max_weight_kg: null },
      basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3,
      bands: [{ min_weight_kg: 8, max_weight_kg: 15.001, text: "47 mg three times daily", daily: 141 }, { min_weight_kg: 15.001, max_weight_kg: 30.001, text: "62 mg three times daily", daily: 186 }, { min_weight_kg: 30.001, max_weight_kg: 55.001, text: "93 mg three times daily", daily: 279 }, { min_weight_kg: 55.001, max_weight_kg: null, text: "124 mg three times daily", daily: 372 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Whole capsules", renal: [], renal_note: "eGFR 15 to under 50 — reduced dose per label [FDA]", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "MIPLYFFA (arimoclomol) capsules — Zevra/Acer Therapeutics, label effective 2026-03-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5feffc0e-453d-47fa-91dd-38d4952309bc"]],
  dose: { tagline: "Capsule taken with miglustat for the neurological features of Niemann–Pick type C.",
    adult: [{ ind: "Niemann–Pick disease type C", text: "Over 55 kg: 124 mg three times daily, with miglustat.", calc: ["npc"] }],
    child: [{ ind: "Niemann–Pick C (2 years and older)", text: "8–15 kg 47 mg; 15–30 kg 62 mg; 30–55 kg 93 mg; over 55 kg 124 mg — three times daily.", calc: ["npc"] }] }
});

FDB_M("apitegromab", {
  inn: "Apitegromab", atc: "M09AX", cls: "Anti-myostatin monoclonal antibody",
  linked: [],
  forms: ["Injection 150 mg/3 mL (50 mg/mL); dilute in 0.9% saline [FDA]."],
  moa: "Blocks activation of myostatin → supports muscle growth in SMA [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long terminal half-life (weeks) [FDA]."],
  ind: { adult: ["Spinal muscular atrophy in patients 2 years and older already on an SMN2-targeted treatment [FDA]."], paed: ["Same, from 2 years [FDA]."] },
  adult: [["SMA (add-on)", "10 mg/kg IV every 4 weeks over 60–120 minutes (no faster than 150 mL/h) [FDA]."]],
  paed: { tiers: ["2 years and older: 10 mg/kg every 4 weeks [FDA]."], transition: "Same mg/kg.", calcNote: "10 mg/kg." },
  adj: {},
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["None [FDA]."],
  ae: { common: ["Upper respiratory infection, vomiting, cough, viral infections, headache (20% or more) [FDA]."], serious: ["Hypersensitivity [FDA]"] },
  monitor: ["Infusion reactions [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "apitegromab", indication_id: "sma", label: "SMA — 10 mg/kg every 4 weeks", route: "IV", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", infusion: { duration_h: 1 },
      formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "Exact mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ISEMBYLD (apitegromab-mstn) injection — Scholar Rock, label effective 2026-09-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b1cd8ab8-8a10-48ed-9806-75a44f22b963"]],
  dose: { tagline: "Monthly antibody infusion added to SMN2 therapy in spinal muscular atrophy.",
    adult: [{ ind: "Spinal muscular atrophy (with SMN2-targeted therapy)", text: "10 mg/kg IV every 4 weeks over 60–120 minutes.", calc: ["sma"] }],
    child: [{ ind: "SMA (2 years and older)", text: "10 mg/kg IV every 4 weeks.", calc: ["sma"] }] }
});

FDB_M("ansuvimab", {
  inn: "Ansuvimab", atc: "J06BD04", cls: "Anti-Ebola virus monoclonal antibody",
  linked: [],
  forms: ["Powder for injection 400 mg vial [FDA]."],
  moa: "Binds the Zaire ebolavirus glycoprotein and blocks viral entry [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Infection with Orthoebolavirus zairense (Zaire ebolavirus) [FDA]."], paed: ["Including neonates of RT-PCR-positive mothers [FDA]."] },
  adult: [["Zaire ebolavirus infection", "50 mg/kg as a single IV infusion over 60 minutes [FDA]."]],
  paed: { tiers: ["All ages including neonates: 50 mg/kg single infusion [FDA]."], transition: "Same mg/kg.", calcNote: "Single 50 mg/kg dose." },
  adj: { other: "Avoid live vaccines (e.g. Ebola vaccine) around treatment — may reduce response [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["None [FDA]."],
  ae: { common: ["Fever, tachycardia, diarrhoea, vomiting, hypotension, tachypnoea, chills [FDA]."], serious: ["Infusion-associated reactions [FDA]"] },
  monitor: ["Infusion reactions; clinical status [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "ansuvimab", indication_id: "ebola", label: "Zaire ebolavirus — single 50 mg/kg dose", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", infusion: { duration_h: 1 },
      formulations: [{ form: "inj", strength: 400, unit: "mg/vial" }], rounding: "Exact mg from reconstituted vials [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "EBANGA (ansuvimab-zykl) for injection — Emergent BioDefense, label effective 2026-08-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=de220c8f-ffcb-4522-a6a2-c7d6ce5de1b5"]],
  dose: { tagline: "Single-dose antibody infusion for Zaire Ebola virus disease.",
    adult: [{ ind: "Zaire ebolavirus infection", text: "50 mg/kg IV once over 60 minutes.", calc: ["ebola"] }],
    child: [{ ind: "All ages, including neonates", text: "50 mg/kg IV once.", calc: ["ebola"] }] }
});

FDB_M("anthrax-immunoglobulin", {
  inn: "Anthrax immune globulin", atc: "J06BB", cls: "Hyperimmune immune globulin (human), IV",
  linked: [],
  forms: ["Single-use vials, at least 60 units each (ANTHRASIL) [FDA]."],
  moa: "Antibodies neutralise anthrax toxin [UNVERIFIED-KNOWLEDGE].",
  pk: ["Serum half-life 24–28 days [FDA]."],
  ind: { adult: ["Inhalational anthrax, with appropriate antibiotics [FDA]."], paed: ["Same; weight-based vials [FDA]."] },
  adult: [["Inhalational anthrax", "7 vials (420 units) IV (severe cases up to 14 vials); start 0.5 mL/min for 30 min, increase by 1 mL/min every 30 min to a maximum of 2 mL/min [FDA]."]],
  paed: { tiers: ["Under 1 year to 16 years: 1–7 vials by weight (severe cases 2–14 vials if over 5 kg); start 0.01 mL/kg/min, up to 0.04 mL/kg/min, never above the adult rate [FDA]."], transition: "Adult dose from 17 years.", calcNote: "Vials by weight (label table)." },
  adj: {},
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable." },
  contra: ["History of anaphylaxis or severe systemic reaction to human immune globulin [FDA].", "IgA deficiency with antibodies to IgA and hypersensitivity [FDA]."],
  ae: { common: ["Headache, infusion-site pain and swelling, nausea, back pain (over 5%) [FDA]."], serious: ["Thrombosis; falsely high glucose readings with some meters (maltose) [FDA]"] },
  monitor: ["Use a glucose method not affected by maltose [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ANTHRASIL (anthrax immune globulin intravenous, human) — Emergent BioSolutions, label effective 2025-12-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=97cc9a89-6fe0-424e-82d1-0cf9d19444db"]],
  dose: { tagline: "Antitoxin immune globulin given with antibiotics for inhalational anthrax.",
    boxedTitle: "Interference with glucose monitoring; thrombosis",
    boxed: "Maltose in immune globulin products may give falsely high blood glucose readings with some point-of-care glucose testing systems (GDH-PQQ or glucose-dye-oxidoreductase methods), leading to inappropriate insulin dosing and life-threatening hypoglycemia. Thrombosis may occur with immune globulin products [FDA].",
    adult: [{ ind: "Inhalational anthrax", text: "7 vials (420 units) IV; up to 14 vials in severe cases. Start at 0.5 mL/min, maximum 2 mL/min." }],
    child: [{ ind: "Inhalational anthrax", text: "1–7 vials by weight (label table); start 0.01 mL/kg/min." }] }
});

/* Brands for batch A-3 — rebuilt 24 Nov 2026 with the fixed _work/tools/fdb-brands.js (one product object at a time; MedEx "manufactured by"; whole-word generic match). */
(function () {
  const B = {"adefovir-dipivoxil":{"BT":"Bhutan supplies by generic name.","IN":[["Adfovir","Sun Pharma","Adfovir 10Mg Strip Of 10 Tablets"]],"BD":[["Infovir","Incepta Pharmaceuticals Ltd","10 mg"],["Virodip","UniMed UniHealth Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/adfovir-10mg-tablet-33077","https://medex.com.bd/brands/180/infovir-10-mg-tablet","https://medex.com.bd/brands/33548/virodip-10-mg-tablet"]},"amikacin":{"BT":"Bhutan supplies by generic name.","IN":[["Mikacin","Aristo Pharmaceuticals Pvt Ltd","Mikacin 500Mg Vial Of 2Ml Injection"],["Amitax","Alkem Laboratories Ltd","Amitax 500Mg Vial Of 2Ml Injection"],["Amiject","Alkem Laboratories Ltd","Amiject 500Mg Vial Of 2Ml Injection"]],"BD":[["Amibac","Popular Pharmaceuticals PLC","500 mg/2 ml"],["Amikin","Incepta Pharmaceuticals Ltd","100 mg/2 ml"],["Akicin","Square Pharmaceuticals PLC","500 mg/2 ml"]],"src":["https://pharmeasy.in/online-medicine-order/mikacin-500mg-injection-3603","https://pharmeasy.in/online-medicine-order/amitax-500mg-inj-2ml-34356","https://pharmeasy.in/online-medicine-order/amiject-500mg-injection-101976","https://medex.com.bd/brands/568/amibac-500-mg-imiv-injection","https://medex.com.bd/brands/569/amikin-100-mg-imiv-injection","https://medex.com.bd/brands/574/akicin-500-mg-imiv-injection"]},"amiloride":{"BT":"Bhutan supplies by generic name.","IN":[["Azilow","Torrent Pharmaceuticals Ltd","Azilow 5Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/azilow-5mg-strip-of-10-tablets-4690532"]},"aminocaproic-acid":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Caprolex","Techno Drugs Ltd","1 gm/5 ml"],["Hemosin","Chemist Laboratories Ltd","1 gm/5 ml"],["Caprolycin","Pacific Pharmaceuticals Ltd","2 gm/10 ml"]],"src":["https://medex.com.bd/brands/3366/caprolex-1-gm-injection","https://medex.com.bd/brands/3369/hemosin-1-gm-injection","https://medex.com.bd/brands/26932/caprolycin-2-gm-injection"]},"aminophylline":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Aminophylline","Ambee Pharmaceuticals Ltd","100 mg"],["Filin","Opsonin Pharma Ltd","125 mg/5 ml"],["Minomal R","Pacific Pharmaceuticals Ltd","350 mg"]],"src":["https://medex.com.bd/brands/595/aminophylline-100-mg-tablet","https://medex.com.bd/brands/602/filin-125-mg-injection","https://medex.com.bd/brands/606/minomal-r-350-mg-retard-tablet"]},"amiodarone":{"BT":"Bhutan supplies by generic name.","IN":[["Cordarone","Emcure Pharmaceuticals Ltd","Cordarone 100Mg Strip Of 15 Tablets"],["Tachyra","Cipla Limited","Tachyra 100Mg Strip Of 10 Tablets"],["Eurythmic","Troikaa Pharmaceuticals Ltd","Eurythmic 150 Mg Injection 3 Ml"]],"BD":[["Cardiron","Drug International Ltd","200 mg"],["Pacet","Beximco Pharmaceuticals PLC","200 mg"],["Cordarone","Synovia Pharma PLC","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cordarone-100mg-strip-of-15-tablets-3558883","https://pharmeasy.in/online-medicine-order/tachyra-100mg-tablet-6491","https://pharmeasy.in/online-medicine-order/eurythmic-150-mg-injection-3-ml-3733185","https://medex.com.bd/brands/612/cardiron-200-mg-tablet","https://medex.com.bd/brands/615/pacet-200-mg-tablet","https://medex.com.bd/brands/30551/cordarone-100-mg-tablet"]},"amitriptyline":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Tripsina","The IBN SINA Pharmaceutical PLC","10 mg"],["Amilin","Opsonin Pharma Ltd","10 mg"]],"src":["https://medex.com.bd/brands/36367/tripsina-10-mg-tablet","https://medex.com.bd/brands/30452/amilin-plus-125-mg-tablet"]},"amlodipine":{"BT":"Bhutan supplies by generic name.","IN":[["Avacard","Ranbaxy Laboratories (sun Pharma)","Avacard 5Mg Strip Of 10 Tablets"],["Biodipin","Biochem Pharmaceutical Industries","Biodipin 2.5Mg Strip Of 10 Tablets"],["Amlip","Cipla Gx","Amlip 5Mg Strip Of 10 Tablets"]],"BD":[["Vasopin","Silva Pharmaceuticals Ltd","10 mg"],["Cardifort","Nuvista Pharma PLC","5 mg"],["CVnor","Navana Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/avacard-5mg-strip-of-10-tablets-35964","https://pharmeasy.in/online-medicine-order/biodipin-2-5mg-tablet-4670","https://pharmeasy.in/online-medicine-order/amlip-5mg-tablet-34385","https://medex.com.bd/brands/30563/vasopin-10-mg-tablet","https://medex.com.bd/brands/30569/cardifort-plus-5-mg-tablet","https://medex.com.bd/brands/30561/cvnor-10-mg-tablet"]},"amoxicillin":{"BT":"Bhutan supplies by generic name.","IN":[["Cipmox","Cipla Gx","Cipmox 250Mg Strip Of 15 Capsules"],["Almox","Alkem Laboratories Ltd","Almox 250Mg Strip Of 15 Capsules"],["Mox","Ranbaxy Laboratories (sun Pharma)","Mox Kid Dt 250Mg Strip Of 15 Tablets"]],"BD":[["Xtramox","Bengal drugs Ltd","250 mg"],["Tymox","Somatec Pharmaceuticals Ltd","125 mg/5 ml"],["Tycil","Beximco Pharmaceuticals PLC","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cipmox-250mg-strip-of-15-capsules-110656","https://pharmeasy.in/online-medicine-order/almox-250mg-strip-of-15-capsules-202383","https://pharmeasy.in/online-medicine-order/mox-kid-dt-250mg-tablet-15-s-22785","https://medex.com.bd/brands/6669/xtramox-250-mg-capsule","https://medex.com.bd/brands/6660/tymox-125-mg-powder-for-suspension","https://medex.com.bd/brands/6654/tycil-500-mg-capsule"]},"amphotericin-b":{"IN":[["Amfy","Intas Pharmaceuticals Ltd","Amfy Tube Of 30Gm Gel"],["Bd Ampho","BDR Pharmaceuticals Internationals Pvt Ltd","Bd Ampho 50Mg Dry Vial Of 1 Powder For Injection"],["Amphocrit","Wockhardt Limited","Amphocrit 50 Mg Injection 1 No's"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/amfy-tube-of-30gm-gel-14490","https://pharmeasy.in/online-medicine-order/bd-ampho-injection-1-no-s-4123049","https://pharmeasy.in/online-medicine-order/amphocrit-50-mg-injection-1-no-s-3730709"]},"ampicillin":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Acmecilin","ACME Laboratories Ltd","125 mg/5 ml"],["Ampexin","Opsonin Pharma Ltd","250 mg/vial"],["Ampimet","Medimet Pharmaceuticals Ltd","250 mg"]],"src":["https://medex.com.bd/brands/939/acmecilin-125-mg-oral-suspension","https://medex.com.bd/brands/948/ampexin-250-mg-injection","https://medex.com.bd/brands/956/ampimet-250-mg-capsule"]},"amisulpride":{"BT":"Bhutan supplies by generic name.","IN":[["Joykem","Alkem Laboratories Ltd","Joykem 200Mg Strip Of 10 Tablets"]],"BD":[["Amipride","Beacon Pharmaceuticals PLC","50 mg"],["Amisure","ACME Laboratories Ltd","5 mg/2 ml"],["Aride","Renata PLC","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/joykem-200mg-tab-85170","https://medex.com.bd/brands/29382/amipride-50-mg-tablet","https://medex.com.bd/brands/32415/amisure-5-mg-iv-infusion","https://medex.com.bd/brands/33440/aride-200-mg-tablet"]},"anastrozole":{"BT":"Bhutan supplies by generic name.","IN":[["Anashil","Shilpa Medicare Limited","Anashil 1Mg Strip Of 10 Tablets"],["Femistra","Zydus Lifesciences Limited","Femistra 1Mg Strip Of 10 Tablets"],["Antreol","Knoll Healthcare Pvt Ltd","Antreol 1Mg Strip Of 10 Tablets"]],"BD":[["Arodex","Techno Drugs Ltd","1 mg"],["Anastrol","Beacon Pharmaceuticals PLC","1 mg"],["Aromatin","Aristopharma Ltd","1 mg"]],"src":["https://pharmeasy.in/online-medicine-order/anashil-1mg-tablet-10-s-231628","https://pharmeasy.in/online-medicine-order/femistra-1mg-strip-of-10-tablets-30311","https://pharmeasy.in/online-medicine-order/antreol-1mg-strip-of-10-tablets-2935700","https://medex.com.bd/brands/969/arodex-1-mg-tablet","https://medex.com.bd/brands/17244/anastrol-1-mg-tablet","https://medex.com.bd/brands/17332/aromatin-1-mg-tablet"]},"apixaban":{"BT":"Bhutan supplies by generic name.","IN":[["Apiedge","Morepen Laboratories","Apiedge 2.5 Strip Of 10 Tablets"],["Eliquis","Pfizer Limited","Eliquis 5Mg Strip Of 10 Tablets"],["Apigy","Cipla Limited","Apigy 5Mg Strip Of 10 Tablets"]],"BD":[["Pixorel","Incepta Pharmaceuticals Ltd","2.5 mg"],["Pixan","Globe Pharmaceuticals Ltd","2.5 mg"],["Apixan","UniMed UniHealth Pharmaceuticals Ltd","2.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/apiedge-2-5-tablet-10-no-s-4306496","https://pharmeasy.in/online-medicine-order/eliquis-5mg-strip-of-10-tablet-21949","https://pharmeasy.in/online-medicine-order/apigy-5mg-strip-of-10-tablets-3916189","https://medex.com.bd/brands/26045/pixorel-25-mg-tablet","https://medex.com.bd/brands/26661/pixan-25-mg-tablet","https://medex.com.bd/brands/29367/apixan-25-mg-tablet"]},"aprepitant":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Emend","Opsonin Pharma Ltd","40 mg"],["Aproxi","Beacon Pharmaceuticals PLC","40 mg"],["Emestop","Incepta Pharmaceuticals Ltd","40 mg"]],"src":["https://medex.com.bd/brands/984/emend-40-mg-capsule","https://medex.com.bd/brands/34856/aproxi-40-mg-capsule","https://medex.com.bd/brands/985/emestop-40-mg-capsule"]},"aripiprazole":{"BT":"Bhutan supplies by generic name.","IN":[["Arip","Torrent Pharmaceuticals Ltd","Arip Mt 10Mg Strip Of 10 Tablets"]],"BD":[["Aripen","Opsonin Pharma Ltd","10 mg"],["Aripra","Incepta Pharmaceuticals Ltd","10 mg"],["Ariprazole","General Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/arip-mt-10mg-strip-of-10-tablets-35325","https://medex.com.bd/brands/986/aripen-10-mg-tablet","https://medex.com.bd/brands/988/aripra-10-mg-tablet","https://medex.com.bd/brands/990/ariprazole-10-mg-tablet"]},"anidulafungin":{"BT":"Bhutan supplies by generic name.","IN":[["Anicord","Concord Biotech Limited","Anicord 100Mg Vial Of 0.1Gm Powder For Infusion"],["Andulfa","Intas Pharmaceuticals Ltd","Andulfa 100Mg Injection"],["B Dula","Bdr Pharmaceuticals Internationals Pvt Ltd","B Dula 100Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Eraxis","Radiant Pharmaceuticals Ltd","100 mg/vial"],["Anidula","Healthcare Pharmaceuticals Ltd","100 mg/vial"],["Aniducon","Beacon Pharmaceuticals PLC","100 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/anicord-100mg-vial-of-0-1gm-powder-for-infusion-3123060","https://pharmeasy.in/online-medicine-order/andulfa-100mg-inj-192244","https://pharmeasy.in/online-medicine-order/b-dula-100-injection-1-no-s-3731111","https://medex.com.bd/brands/30023/eraxis-100-mg-iv-infusion","https://medex.com.bd/brands/36563/anidula-100-mg-iv-infusion","https://medex.com.bd/brands/36978/aniducon-100-mg-iv-infusion"]},"apomorphine":{"BT":"Bhutan supplies by generic name.","IN":[["Aposan","Rusan Healthcare Pvt Ltd","Aposan 10Mg Ampoule Of 2Ml Injection (Pack Of 5)"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/aposan-10mg-ampoule-of-2ml-injection-pack-of-5--4842436"]},"ascorbic-acid":{"IN":[["Celin","Rv Lifesciences Limited","Celin 500Mg Delicious Orange Flavour Strip Of 15 Chewable Tablets"],["Enerc","Adroit Biomed Limited","Enerc 1000Mg Orange Flavour Bottle Of 20 Tablets"],["C Shine","Grace Derma Healthcare Pvt Ltd","C Shine Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/celin-500mg-delicious-orange-flavour-strip-of-15-chewable-tablets-4498612","https://pharmeasy.in/online-medicine-order/enerc-1000mg-orange-flavour-bottle-of-20-tablets-211138","https://pharmeasy.in/online-medicine-order/c-shine-tab-10-s-169485"]},"asenapine":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Zukaria","Incepta Pharmaceuticals Ltd","5 mg"]],"src":["https://medex.com.bd/brands/35933/zukaria-5-mg-sublingual-tablet"]},"apremilast":{"BT":"Bhutan supplies by generic name.","IN":[["Aprezo","Glenmark Pharmaceuticals","Aprezo 30Mg Strip Of 10 Tablets"],["Apraize","Ipca Laboratories","Apraize 20Mg Strip Of 4 Tablets"],["Apresias","Chemo Healthcare Pvt Ltd","Apresias 30Mg Strip Of 10 Tablets"]],"BD":[["Arsenor","Beacon Pharmaceuticals PLC","10 mg"],["Aprila","Drug International Ltd","30 mg"],["Aprima","Incepta Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/aprezo-30mg-strip-of-10-tablets-191059","https://pharmeasy.in/online-medicine-order/apraize-20mg-tab-4-s-218357","https://pharmeasy.in/online-medicine-order/apresias-30mg-strip-of-10-tablets-4486811","https://medex.com.bd/brands/25984/arsenor-10-mg-tablet","https://medex.com.bd/brands/25986/aprila-30-mg-tablet","https://medex.com.bd/brands/25987/aprima-10-mg-tablet"]},"armodafinil":{"BT":"Bhutan supplies by generic name.","IN":[["Armod","Emcure Pharmaceuticals Ltd","Armod 50Mg Strip Of 4 Tablets"]],"BD":[["Armoda","Advanced Chemical Industries PLC","150 mg"],["Uptiva","Incepta Pharmaceuticals Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/armod-50mg-strip-of-4-tablets-9397","https://medex.com.bd/brands/25949/armoda-150-mg-tablet","https://medex.com.bd/brands/25951/uptiva-150-mg-tablet"]},"apalutamide":{"BT":"Bhutan supplies by generic name.","IN":[["Erlamide","Sun Pharma","Erlamide Bottle Of 120 Tablets"],["Erleada","Janssen","Erleada 60Mg Bottle Of 120 Tablets"],["Apatide","Bdr Pharmaceuticals Internationals Pvt Ltd","Apatide 60Mg Bottle Of 60 Tablets"]],"BD":[["Prostaxen","Everest Pharmaceuticals Ltd","60 mg"],["Apaluda","Beacon Pharmaceuticals PLC","60 mg"]],"src":["https://pharmeasy.in/online-medicine-order/erlamide-tablet-120-no-s-4120221","https://pharmeasy.in/online-medicine-order/erleada-60mg-bottle-of-120-tablets-4803204","https://pharmeasy.in/online-medicine-order/apatide-60-mg-tab-60s-4133294","https://medex.com.bd/brands/34683/prostaxen-60-mg-tablet","https://medex.com.bd/brands/34848/apaluda-60-mg-tablet"]},"apraclonidine":{"BT":"Bhutan supplies by generic name.","IN":[["Alfadrops","Cipla Limited","Alfadrops Eye Drops 5Ml"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/alfadrops-eye-drops-5ml-33563"]},"arsenic-trioxide":{"BT":"Bhutan supplies by generic name.","IN":[["Arsenam","Gls Pharma Ltd","Arsenam 10Mg Vial Of 10Ml Injection"]],"BD":[["ATO","Beacon Pharmaceuticals PLC","10 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/arsenam-10-mg-vial-of-10ml-injection-4827823","https://medex.com.bd/brands/36732/ato-10-mg-iv-infusion"]},"asparaginase":{"IN":[["Asparawem","Wembrace Biopharma Private Limited","Asparawem 5000Iu Dry Vial Of 1 Powder For Injection"],["Oncoginase","Chandra Bhagat Pharma Private Limited","Oncoginase 10000Iu Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/asparawem-5000iu-dry-vial-of-1-powder-for-injection-3999227","https://pharmeasy.in/online-medicine-order/oncoginase-10000iu-inj-76401"]},"asciminib":{"BT":"Bhutan supplies by generic name.","IN":[["Kyzific","Novartis Healthcare Pvt Ltd","Kyzific 40Mg Bottle Of 60 Tablets"]],"BD":[["Ascimib","Everest Pharmaceuticals Ltd","40 mg"]],"src":["https://pharmeasy.in/online-medicine-order/kyzific-40mg-bottle-of-60-tablets-4819782","https://medex.com.bd/brands/38124/ascimib-40-mg-tablet"]},"arginine-hydrochloride":{"BT":"Bhutan supplies by generic name.","IN":[["Argin","Fourrts India Laboratories Pvt Ltd","Argin Orange Flavour Sugar Free Sachet Of 5Gm Granules"],["Argihope","Corona Remedies Pvt Ltd","Argihope Orange Lemon Flavour Sugar Free Sachet Of 5Gm Granules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/argin-orange-flavour-sugar-free-sachet-of-5gm-granules-208585","https://pharmeasy.in/online-medicine-order/argihope-sachet-orange-lemon-sf-5gm-170258"]}};
  Object.entries(B).forEach(([id, b]) => { if (window.FDB[id]) window.FDB[id].brands = b; });
})();
