/* Clinical Disease Guide — Drug monograph database, block H, batch H-1 (25 Nov 2026).
   Halcinonide … hydroxyprogesterone. Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed text "@LABEL" is filled from the saved FDA label by _work/tools/fdb-boxed-fill.js.
   Labels replaced where the pack picked another product: hydrocodone (Hysingla ER, not a cough combination), hydroxycarbamide (Hydrea/Droxia),
   hydroxyprogesterone (non-obstetric IM product). Deferred: helium (label has no clinical sections), homatropine (Bhutan uses 2% eye drops; no US ophthalmic label). */

FDB_M("halcinonide", {
  inn: "Halcinonide", atc: "D07AD02", cls: "High-potency topical corticosteroid",
  linked: [],
  forms: ["Cream 0.1% [FDA]."],
  moa: "Topical glucocorticoid: anti-inflammatory, antipruritic, vasoconstrictive [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorption rises with occlusion, inflamed skin and large areas [FDA]."],
  ind: { adult: ["Inflammatory and itchy corticosteroid-responsive dermatoses [FDA]."], paed: ["Children absorb more and are more prone to adrenal suppression — use the least amount [FDA]."] },
  adult: [["Dermatoses", "Apply a thin layer 2–3 times daily and rub in gently; occlusion may be used for psoriasis or resistant lesions [FDA]."]],
  paed: { tiers: ["Use the smallest effective amount; avoid occlusion [FDA]."], transition: "Same.", calcNote: "Topical." },
  adj: { renal: "Not applicable.", pregnancy: "Avoid large amounts or long use [UNVERIFIED-KNOWLEDGE].", other: "Not for the face, groin or axillae for long periods [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Systemic absorption can cause adrenal suppression and Cushing's features [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce frequency or stop gradually [FDA]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Burning, itching, irritation, dryness, folliculitis [FDA]."], serious: ["HPA-axis suppression; skin atrophy and striae [FDA]"] },
  monitor: ["HPA-axis tests if large areas or occlusion are used [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "HALOG (halcinonide cream) 0.1% — Genus Lifesciences, label effective 2026-01-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=484c3224-edd1-db3e-e063-6294a90abc25"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "High-potency steroid cream for resistant dermatoses.",
    adult: [{ ind: "Dermatoses", text: "Thin layer 2–3 times daily." }], child: [{ ind: "Dermatoses", text: "Smallest effective amount; no occlusion." }] }
});

FDB_M("hemin", {
  inn: "Hemin", atc: "B06AB01", cls: "Haem replacement (porphyria)",
  linked: [],
  forms: ["Lyophilised powder for injection, about 350 mg haematin per vial [FDA]."],
  moa: "Represses ALA synthase, reducing porphyrin precursor production [UNVERIFIED-KNOWLEDGE].",
  pk: ["Given by IV infusion only [FDA]."],
  ind: { adult: ["Recurrent attacks of acute intermittent porphyria related to the menstrual cycle, after carbohydrate therapy has failed [FDA]."], paed: ["Not established [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Acute porphyria attack", "1–4 mg/kg/day IV for 3–14 days (usual 3–4 mg/kg/day), infused over at least 30 min through a 0.45 micron filter; repeat no sooner than 12 h in severe cases; never more than 6 mg/kg in 24 h [FDA]."]],
  paed: { tiers: ["Not established [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "mg/kg/day." },
  adj: { renal: "Kidney failure reported with excessive doses [FDA].", other: "Start carbohydrate loading first [FDA]." },
  tox: { human: "Reversible acute kidney failure after an overdose of 12.2 mg/kg [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; monitor kidney function [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to hemin [FDA]."],
  ae: { common: ["Phlebitis at the infusion vein, headache, fever [FDA]."], serious: ["Coagulopathy (transient anticoagulant effect) [FDA]", "Kidney failure with excessive dose [FDA]"] },
  monitor: ["Coagulation; urinary porphyrin precursors; kidney function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "hemin", indication_id: "aip", label: "Acute porphyria — adult daily dose", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 3, value_max: 4, unit: "mg", per: "day" }, interval_h: 24, caps: { max_mg_per_kg_dose: 6 }, weight_basis: "actual",
      formulations: [{ form: "vial", strength: 350, unit: "mg/vial" }], rounding: "Nearest mg", renal: [], flags: ["Never more than 6 mg/kg in 24 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "PANHEMATIN (hemin for injection) — Recordati Rare Diseases, label effective 2026-02-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9984267a-4d57-4444-9bb5-16bca7dea691"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "IV haem for acute porphyria attacks after carbohydrate loading.",
    adult: [{ ind: "Acute intermittent porphyria", text: "3–4 mg/kg/day IV for 3–14 days; max 6 mg/kg in 24 h.", calc: ["aip"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("hepatitis-b-immunoglobulin", {
  inn: "Hepatitis B immune globulin (human)", atc: "J06BB04", cls: "Hyperimmune immunoglobulin",
  linked: [],
  forms: ["Solution for IM injection (Nabi-HB) [FDA]."],
  moa: "Passive antibody (anti-HBs) neutralises hepatitis B virus [UNVERIFIED-KNOWLEDGE].",
  pk: ["Give as soon as possible after exposure; value after 7 days is unclear [FDA]."],
  ind: { adult: ["Post-exposure prophylaxis after blood, sexual or household exposure to HBsAg [FDA]."], paed: ["Infants born to HBsAg-positive mothers [FDA]."] },
  adult: [["Acute exposure (needlestick, splash, sexual)", "0.06 mL/kg IM as soon as possible, preferably within 24 h, with hepatitis B vaccine; some non-responders need a second dose 1 month later [FDA]."]],
  paed: { tiers: ["Newborn of HBsAg-positive mother: 0.5 mL IM after stabilisation, preferably within 12 h of birth, with the first vaccine dose [FDA].", "Mother found positive later: 0.5 mL as soon as possible, within 7 days [FDA]."], transition: "0.06 mL/kg beyond infancy.", calcNote: "0.06 mL/kg (volume)." },
  adj: { renal: "Not applicable.", other: "IM only — not IV [FDA]. Live vaccines may be less effective after immunoglobulin [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Previous anaphylaxis or severe systemic reaction to human globulin [FDA]."],
  ae: { common: ["Injection-site pain, headache, malaise [FDA]."], serious: ["Hypersensitivity; thrombosis (immunoglobulin products) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Complete the hepatitis B vaccine series; test anti-HBs per protocol [FDA]."],
  local: { neml: "Not identified on the Bhutan NEML 2025 text searched [BT-NEML].", strengths: "Check local availability.", stg: "Hepatitis B prophylaxis per national protocol [BT-STG]." },
  calc: [],
  sources: [["FDA", "Nabi-HB (hepatitis B immune globulin, human) — ADMA Biologics, label effective 2025-04-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=47fe1a99-5078-4b89-84fa-9e8387baec5c"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Passive hepatitis B protection after exposure and for babies of HBsAg-positive mothers.",
    adult: [{ ind: "Exposure", text: "0.06 mL/kg IM within 24 h, with vaccine." }], child: [{ ind: "Newborn of HBsAg-positive mother", text: "0.5 mL IM within 12 h of birth, with vaccine." }] }
});

FDB_M("hexaminolevulinate", {
  inn: "Hexaminolevulinate", atc: "V04CX06", cls: "Optical imaging agent (bladder)",
  linked: [],
  forms: ["Powder for intravesical solution 100 mg with 50 mL diluent [FDA]."],
  moa: "Taken up by tumour cells and converted to fluorescent porphyrins seen under blue light [UNVERIFIED-KNOWLEDGE].",
  pk: ["Instilled into the bladder; little systemic exposure [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Blue-light cystoscopic detection of bladder carcinoma including carcinoma in situ [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Blue-light cystoscopy", "100 mg in 50 mL instilled by catheter, retained 1–3 h, then cystoscopy under white then blue light [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed procedure dose." },
  adj: { renal: "Not applicable.", other: "Requires an FDA-authorised blue-light system [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Porphyria [FDA].", "Hypersensitivity to hexaminolevulinate or aminolevulinic-acid derivatives [FDA]."],
  ae: { common: ["Bladder spasm, dysuria, haematuria, bladder pain [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylactoid reactions [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Observe after instillation [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CYSVIEW (hexaminolevulinate HCl) — Photocure, label effective 2026-06-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5aeed40d-6841-4adf-8940-f51d439fdfa3"]],
  dose: { tagline: "Bladder instillation that makes cancers glow under blue-light cystoscopy.",
    adult: [{ ind: "Bladder cancer detection", text: "100 mg in 50 mL intravesically for 1–3 h before cystoscopy." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("histamine-phosphate", {
  inn: "Histamine (skin-test control)", atc: "V04CX", cls: "Diagnostic agent",
  linked: [],
  forms: ["Histamine base 1 mg/mL (histamine phosphate 2.75 mg/mL) for prick/puncture testing [FDA]."],
  moa: "Produces a wheal and flare, confirming the skin can react [UNVERIFIED-KNOWLEDGE].",
  pk: ["Reaction read at about 15 min [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Positive control for allergen (type I) skin testing [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Skin-prick control", "Histamine base 1 mg/mL by prick, puncture or scratch, alongside allergen tests [FDA]."]],
  paed: { tiers: ["Same technique [FDA]."], transition: "Same.", calcNote: "Diagnostic." },
  adj: { renal: "Not applicable.", other: "Antihistamines suppress the reaction — stop beforehand [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Flushing, headache, hypotension if absorbed [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Injection in hypotension, severe hypertension, severe cardiac, pulmonary or kidney disease; not for diagnosing phaeochromocytoma [FDA]."],
  ae: { common: ["Local itching wheal [UNVERIFIED-KNOWLEDGE]."], serious: ["Systemic reactions if injected [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Resuscitation equipment available during skin testing [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Histamine positive skin test control — ALK-Abello, label effective 2020-08-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1159c24c-d9ce-49a2-b0bd-dc27c710f146"]],
  dose: { tagline: "Positive control for allergy skin-prick testing.",
    adult: [{ ind: "Skin testing", text: "Histamine base 1 mg/mL by prick or puncture." }], child: [{ ind: "Skin testing", text: "Same." }] }
});

FDB_M("histrelin", {
  inn: "Histrelin", atc: "L02AE05", cls: "GnRH agonist implant",
  linked: [],
  forms: ["Subcutaneous implant 50 mg histrelin acetate, releases for 12 months [FDA]."],
  moa: "Continuous GnRH-receptor stimulation down-regulates the pituitary, suppressing sex hormones [UNVERIFIED-KNOWLEDGE].",
  pk: ["Continuous release for 12 months [FDA]."],
  ind: { adult: ["Not indicated in adults (this product) [FDA]."], paed: ["Central precocious puberty [FDA]."] },
  adult: [["—", "Not indicated (paediatric product) [FDA]."]],
  paed: { tiers: ["Central precocious puberty: one implant inserted subcutaneously in the inner upper arm every 12 months [FDA]."], transition: "—", calcNote: "One implant yearly." },
  adj: { renal: "Not applicable.", pregnancy: "Contraindicated [FDA].", other: "Initial transient rise in sex hormones in the first weeks [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Remove implant." },
  contra: ["Hypersensitivity to GnRH or GnRH agonists [FDA].", "Pregnancy [FDA]."],
  ae: { common: ["Implant-site reactions, headache [UNVERIFIED-KNOWLEDGE]."], serious: ["Implant breakage or migration; seizures and psychiatric events with GnRH agonists [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LH, FSH, sex steroids, growth and bone age [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "SUPPRELIN LA (histrelin acetate) implant — Endo, label effective 2025-09-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d8fb000e-3cc9-4803-b71d-2cc597661977"]],
  dose: { tagline: "Yearly implant for central precocious puberty.",
    adult: [{ ind: "—", text: "Not indicated." }], child: [{ ind: "Central precocious puberty", text: "One 50 mg implant every 12 months." }] }
});

FDB_M("hydrocortisone-butyrate", {
  inn: "Hydrocortisone butyrate", atc: "D07AB02", cls: "Medium-potency topical corticosteroid",
  linked: [],
  forms: ["Lotion, cream, ointment 0.1% [FDA]."],
  moa: "Topical glucocorticoid [UNVERIFIED-KNOWLEDGE].",
  pk: ["Systemic absorption increases with large areas or occlusion [FDA]."],
  ind: { adult: ["Atopic dermatitis and other corticosteroid-responsive dermatoses [FDA]."], paed: ["Mild to moderate atopic dermatitis from 3 months (lotion) [FDA]."] },
  adult: [["Atopic dermatitis", "Thin layer twice daily for up to 2 weeks; stop when controlled; reassess if no improvement [FDA]."]],
  paed: { tiers: ["3 months and older: same, for up to 2 weeks (to 4 weeks weighing risks) [FDA]."], transition: "Same.", calcNote: "Topical." },
  adj: { renal: "Not applicable.", other: "Avoid occlusion unless directed [FDA]." },
  tox: { human: "HPA-axis suppression with excess use [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop gradually." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Application-site reactions [FDA]."], serious: ["HPA-axis suppression; skin atrophy [FDA]"] },
  monitor: ["Response at 2 weeks [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 (hydrocortisone 1% cream is) [BT-NEML].", strengths: "Not available.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Hydrocortisone butyrate lotion 0.1% — Bryant Ranch, label effective 2026-10-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce135638-e551-4bb0-bd2b-f97d381a8c7c"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Medium-potency steroid for atopic dermatitis from 3 months.",
    adult: [{ ind: "Atopic dermatitis", text: "Twice daily up to 2 weeks." }], child: [{ ind: "Atopic dermatitis, 3 months+", text: "Twice daily up to 2 weeks." }] }
});

FDB_M("hydromorphone", {
  inn: "Hydromorphone", atc: "N02AA03", cls: "Strong opioid agonist",
  risk: "High-alert — opioids (IV and oral) are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Injection 0.2, 0.5, 1, 2 mg/mL; high-potency 10 mg/mL for opioid-tolerant patients only [FDA]."],
  moa: "Full mu-opioid receptor agonist, about 5–7 times as potent as morphine [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 2–3 h after IV; prolonged (about 40 h) in severe kidney impairment [FDA]."],
  ind: { adult: ["Pain severe enough to need an opioid when alternatives are inadequate [FDA]."], paed: ["Not established in the injection label [FDA]."] },
  adult: [["IM or SC", "1–2 mg every 2–3 h as needed [FDA]."], ["IV", "0.2–1 mg every 2–3 h, injected slowly over at least 2–3 min [FDA]."], ["Liver or kidney impairment", "Start at one-quarter to one-half of the usual dose [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed adult starting doses." },
  adj: { renal: "Start at ¼–½ dose [FDA].", hepatic: "Start at ¼–½ dose [FDA].", pregnancy: "Prolonged use: neonatal opioid withdrawal [FDA].", other: "Older patients: start low [FDA]." },
  tox: { human: "Respiratory depression, somnolence to coma, flaccidity, cold clammy skin, pinpoint pupils; pulmonary oedema, bradycardia, hypotension, death [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Airway and ventilation; naloxone (repeat — hydromorphone may outlast it) [FDA]." },
  contra: ["Significant respiratory depression; acute or severe asthma without monitoring [FDA].", "Gastrointestinal obstruction including paralytic ileus [FDA].", "Hypersensitivity; high-potency formulation in opioid-naive patients [FDA]."],
  ae: { common: ["Nausea, vomiting, constipation, sedation, dizziness, sweating, itching [FDA]."], serious: ["Respiratory depression and death [FDA]", "Addiction, abuse, misuse [FDA]", "Severe hypotension; adrenal insufficiency; serotonin syndrome with serotonergic drugs [FDA]"] },
  monitor: ["Respiration and sedation, especially in the first 24–72 h and after dose increases [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 (morphine is) [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "hydromorphone", indication_id: "iv", label: "IV starting dose — adult (opioid-naive)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 0.2, value_max: 1, unit: "mg", per: "dose" }, interval_h: 2, caps: { max_single: 1, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], renal_note: "Kidney impairment: start at one-quarter to one-half of the usual dose [FDA]", flags: ["Every 2–3 h as needed; over 2–3 min"], sources: ["FDA"] }
  ],
  sources: [["FDA", "DILAUDID (hydromorphone HCl) injection — Fresenius Kabi, label effective 2026-07-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9eebd88a-5632-460f-b7b6-26c8a180540d"], ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Potent injectable opioid for severe pain; start low, monitor breathing.",
    boxedTitle: "Serious and life-threatening risks",
    boxed: "Addiction, Abuse, and Misuse Because the use of DILAUDID INJECTION exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient's risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Life-Threatening Respiratory Depression Serious, life-threatening, or fatal respiratory depression may occur with use of DILAUDID INJECTION, especially during initiation or following a dosage increase. To reduce the risk of respiratory depression, proper dosing and titration of DILAUDID INJECTION are essential. Risks From Concomitant Use With Benzodiazepines Or Other CNS Depressants Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of DILAUDID INJECTION and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate. Neonatal Opioid Withdrawal Syndrome (NOWS ) Advise pregnant women using opioids for an extended period of time of the risk of Neonatal Opioid Withdrawal Syndrome, which may be life-threatening if not recognized and treated. Ensure that management by neonatology experts will be available at delivery [FDA].",
    adult: [{ ind: "Severe pain", text: "IV 0.2–1 mg slowly every 2–3 h; IM/SC 1–2 mg every 2–3 h. Kidney or liver impairment: ¼–½ dose.", calc: ["iv"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("hydrocodone", {
  inn: "Hydrocodone", atc: "R05DA03", cls: "Opioid agonist (extended-release)",
  risk: "High-alert — oral opioids are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Extended-release tablets 20–120 mg once daily (HYSINGLA ER) — swallow whole [FDA].", "Also in combination cough and pain products (not covered here) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Mu-opioid receptor agonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Once-daily extended release; crushing or chewing releases a possibly fatal dose [FDA]."],
  ind: { adult: ["Severe pain needing daily, long-term opioid treatment when alternatives are inadequate; not for as-needed use [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Opioid-naive or non-tolerant", "20 mg once every 24 h; titrate in 10–20 mg steps every 3–5 days [FDA]."], ["Conversion", "From other opioids: underestimate and give rescue IR opioid rather than overestimate [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed adult dose." },
  adj: { renal: "Start at half the dose in moderate–severe impairment [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe impairment: start at half [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal opioid withdrawal with prolonged use [FDA].", other: "CYP3A4 inhibitors raise levels [FDA]." },
  tox: { human: "Respiratory depression, coma, death [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Naloxone; ventilation; prolonged observation (extended release) [FDA]." },
  contra: ["Significant respiratory depression; acute or severe asthma unmonitored [FDA].", "GI obstruction including paralytic ileus; hypersensitivity [FDA]."],
  ae: { common: ["Constipation, nausea, vomiting, somnolence, headache, dizziness [FDA]."], serious: ["Respiratory depression; addiction; QT prolongation at higher doses [FDA]"] },
  monitor: ["Respiration, sedation, misuse [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "HYSINGLA ER (hydrocodone bitartrate) extended-release tablets — Purdue, label effective 2026-05-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b7d23ac2-e776-9f62-3290-c64c2d6eb353"], ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Once-daily extended-release opioid for chronic severe pain.",
    boxedTitle: "Serious and life-threatening risks",
    boxed: "Addiction, Abuse, and Misuse Because the use of HYSINGLA ER exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient's risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Life-Threatening Respiratory Depression Serious, life-threatening, or fatal respiratory depression may occur with use of HYSINGLA ER, especially during initiation or following a dosage increase. To reduce the risk of respiratory depression, proper dosing and titration of HYSINGLA ER are essential. Instruct patients to swallow HYSINGLA ER tablets whole; crushing, chewing, or dissolving HYSINGLA ER tablets can cause rapid release and absorption of a potentially fatal dose of hydrocodone. Accidental Ingestion Accidental ingestion of even one dose of HYSINGLA ER, especially by children, can result in a fatal overdose of hydrocodone. Risks From Concomitant Use With Benzodiazepines Or Other CNS Depressants Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of HYSINGLA ER and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate [FDA].",
    adult: [{ ind: "Chronic severe pain", text: "20 mg once daily (opioid-naive); titrate every 3–5 days." }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("hydroxocobalamin", {
  inn: "Hydroxocobalamin", atc: "V03AB33", cls: "Cyanide antidote (vitamin B12a)",
  linked: [["Poisoning — adults", "Cyanide poisoning, including smoke inhalation [FDA]", "poisoning-adult"]],
  forms: ["5 g vial for IV infusion (25 mg/mL after reconstitution with 200 mL saline) [FDA]."],
  moa: "Binds cyanide to form cyanocobalamin, excreted in urine [UNVERIFIED-KNOWLEDGE].",
  pk: ["Cobalamin half-life about 26–31 h [FDA]."],
  ind: { adult: ["Known or suspected cyanide poisoning [FDA]."], paed: ["Not established in the label [FDA]."] },
  adult: [["Cyanide poisoning", "5 g IV over 15 min; a second 5 g (total 10 g) over 15 min to 2 h depending on severity; separate IV line; with oxygen and full support [FDA]."]],
  paed: { tiers: ["Not established in the FDA label [FDA]."], transition: "Adults.", calcNote: "Fixed 5 g dose." },
  adj: { renal: "Acute kidney injury reported (oxalate) [FDA].", pregnancy: "Do not withhold in life-threatening poisoning [UNVERIFIED-KNOWLEDGE].", other: "Red skin and urine for days; interferes with colorimetric lab tests and haemodialysis blood-leak alarms [FDA]." },
  tox: { human: "No adult overdose data [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Symptomatic; haemodialysis only for significant toxicity [FDA]." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Red skin and urine (chromaturia), raised blood pressure, rash, nausea, headache [FDA]."], serious: ["Anaphylaxis [FDA]", "Acute kidney injury [FDA]", "Hypertension [FDA]"] },
  monitor: ["Blood pressure; kidney function; draw lab samples before giving [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CYANOKIT (hydroxocobalamin for injection) — BTG, label effective 2023-04-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d56fcc8d-bd64-46ab-b0c0-2124bd745a6b"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "First-line antidote for cyanide poisoning, including smoke inhalation.",
    adult: [{ ind: "Cyanide poisoning", text: "5 g IV over 15 min; repeat 5 g if needed (total 10 g)." }], child: [{ ind: "—", text: "Not established in the label." }] }
});

FDB_M("hydroxycarbamide", {
  inn: "Hydroxycarbamide (hydroxyurea)", atc: "L01XX05", cls: "Antimetabolite (ribonucleotide reductase inhibitor)",
  risk: "High-alert — oral chemotherapeutic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Capsules 500 mg (HYDREA); 200, 300, 400 mg (DROXIA); oral solution [FDA]."],
  moa: "Inhibits ribonucleotide reductase; raises fetal haemoglobin in sickle cell disease [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted largely by the kidneys — halve the dose if CrCl < 60 [FDA]."],
  ind: { adult: ["Resistant chronic myeloid leukaemia; head and neck squamous cell cancer with radiation (HYDREA) [FDA].", "Sickle cell anaemia with recurrent painful crises (DROXIA) [FDA]."], paed: ["Sickle cell anaemia from 2 years (oral solution / SIKLOS) [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Sickle cell anaemia (DROXIA)", "15 mg/kg once daily; blood counts every 2 weeks; increase by 5 mg/kg/day every 12 weeks to the maximum tolerated or 35 mg/kg/day [FDA]."], ["Cancer (HYDREA)", "Individualised by tumour and response [FDA]."], ["Kidney impairment", "CrCl < 60 mL/min: reduce the dose by 50% [FDA]."]],
  paed: { tiers: ["Sickle cell disease: per specialist protocol [UNVERIFIED-KNOWLEDGE]."], transition: "Adults: label doses.", calcNote: "mg/kg once daily (sickle cell)." },
  adj: { renal: "CrCl < 60: 50% dose [FDA].", pregnancy: "Embryo-fetal toxicity; contraception for both sexes [FDA].", other: "Live vaccines: avoid [FDA]." },
  tox: { human: "Severe myelosuppression, mucositis, skin reactions [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive; blood counts [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to hydroxyurea [FDA]."],
  ae: { common: ["Myelosuppression, GI upset, skin changes, hyperpigmentation [FDA]."], serious: ["Severe myelosuppression [FDA]", "Secondary leukaemia and skin cancer [FDA]", "Cutaneous vasculitic ulcers; macrocytosis [FDA]"] },
  monitor: ["Blood counts every 2 weeks while titrating (sickle cell) [FDA]."],
  local: { neml: "Not identified on the Bhutan NEML 2025 text searched [BT-NEML].", strengths: "Check local availability.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "hydroxycarbamide", indication_id: "scd", label: "Sickle cell anaemia — adult starting dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_mg_per_kg_dose: 35 }, weight_basis: "actual",
      formulations: [{ form: "cap", strength: 500, unit: "mg/cap" }], rounding: "Nearest capsule combination", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, note: "CrCl under 60: reduce dose by 50% [FDA]" }], flags: ["Counts every 2 weeks; titrate every 12 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "DROXIA (hydroxyurea) capsules — BMS, label effective 2025-09-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4ad13dc6-a2ab-4308-96b3-7c642c92cc23"], ["FDA", "HYDREA (hydroxyurea) capsules — BMS, label effective 2026-01-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6053c775-68de-45e4-9af9-33b18fd0e140"], ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Oral antimetabolite for sickle cell anaemia and myeloproliferative disease; monitor counts.",
    boxedTitle: "Myelosuppression and malignancies",
    boxed: "Myelosuppression: DROXIA may cause severe myelosuppression. Do not give if bone marrow function is markedly depressed. Monitor blood counts at baseline and throughout treatment. Interrupt treatment and reduce dose as necessary. Malignancies: DROXIA is carcinogenic. Advise sun protection and monitor patients for malignancies [FDA].",
    adult: [{ ind: "Sickle cell anaemia", text: "15 mg/kg daily; increase by 5 mg/kg every 12 weeks to max 35 mg/kg. CrCl < 60: halve.", calc: ["scd"] }], child: [{ ind: "Sickle cell", text: "Specialist protocol." }] }
});

FDB_M("hydroxyprogesterone", {
  inn: "Hydroxyprogesterone caproate", atc: "G03DA03", cls: "Progestin (IM depot)",
  linked: [],
  forms: ["Injection 250 mg/mL for deep IM use [FDA]."],
  moa: "Progestogen acting on the endometrium [UNVERIFIED-KNOWLEDGE].",
  pk: ["Depot IM injection [FDA]."],
  ind: { adult: ["Non-pregnant women: advanced (stage III–IV) uterine adenocarcinoma; primary or secondary amenorrhoea and abnormal uterine bleeding from hormonal imbalance; test for endogenous oestrogen; with oestrogen for a 'medical D and C' [FDA]. (Preterm-birth use was withdrawn in 2023.) [UNVERIFIED-KNOWLEDGE]"], paed: ["Not indicated."] },
  adult: [["Advanced uterine adenocarcinoma", "1–7 g per week IM until relapse or 12 weeks without response [FDA]."], ["Amenorrhoea / abnormal bleeding", "375 mg IM at any time (exclude genital malignancy first) [FDA]."]],
  paed: { tiers: ["Not indicated."], transition: "—", calcNote: "Fixed doses." },
  adj: { renal: "Fluid retention may worsen kidney or heart disease [UNVERIFIED-KNOWLEDGE].", pregnancy: "This product is for non-pregnant women [FDA].", other: "Deep gluteal IM injection [FDA]." },
  tox: { human: "No overdose data [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Known or suspected breast or other hormone-sensitive cancer [FDA].", "Undiagnosed vaginal bleeding; thrombosis history; liver disease [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Injection-site reactions, breakthrough bleeding, nausea [UNVERIFIED-KNOWLEDGE]."], serious: ["Thromboembolism [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Exclude malignancy before hormonal treatment of bleeding [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Hydroxyprogesterone caproate injection 250 mg/mL — Eugia, label effective 2026-06-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=687bcf42-f437-42c7-8909-a91f621f55df"]],
  dose: { tagline: "Depot progestin for advanced endometrial cancer and hormonal uterine bleeding (non-pregnant).",
    adult: [{ ind: "Amenorrhoea / bleeding", text: "375 mg IM once." }, { ind: "Advanced uterine adenocarcinoma", text: "1–7 g IM weekly." }], child: [{ ind: "—", text: "Not indicated." }] }
});

/* brands (India: PharmEasy, molecule-matched; Bangladesh: MedEx) */
(function(){ const B = {"halcinonide":{"IN":[],"BD":[["Dermalog","Jayson Pharmaceutical Ltd","0.1%"],["Zemalog","Gaco Pharmaceuticals Ltd","0.1%"],["Cinon","Ambee Pharmaceuticals PLC","0.1%"]],"src":["https://medex.com.bd/brands/12647/dermalog-01-cream","https://medex.com.bd/brands/12648/zemalog-01-cream","https://medex.com.bd/brands/28026/cinon-01-cream"]},"hepatitis-b-immunoglobulin":{"IN":[["H Bigg","Chandra Bhagat Pharma Private Limited","H Bigg 100 Iu Injection 1 Ml"],["Hepabig","Vhb Life Sciences Limited","Hepabig 100Iu Vial Of 1Ml Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/h-bigg-100-iu-injection-1-ml-3734046","https://pharmeasy.in/online-medicine-order/hepabig-100-iu-inj-49923"]},"hydrocortisone-butyrate":{"IN":[],"BD":[["Eczacort","Ziska Pharmaceuticals Ltd","0.1%"]],"src":["https://medex.com.bd/brands/31026/eczacort-01-cream"]},"hydroxocobalamin":{"IN":[],"BD":[["Cynomin-H","Jayson Pharmaceutical Ltd","1000 mcg/ml"]],"src":["https://medex.com.bd/brands/13430/cynomin-h-1000-mcg-im-injection"]},"hydroxycarbamide":{"IN":[["Hydrosar","Sarabhai Chemicals Pvt Ltd","Hydrosar Strip Of 10 Capsules"],["Myelostat","Zydus Lifesciences Limited","Myelostat 500Mg Strip Of 10 Capsules"],["Cytodrox","Cipla Limited","Cytodrox 500Mg Strip Of 10 Capsules"]],"BD":[["Hydronix","Beacon Pharmaceuticals PLC","500 mg"],["Mylostat","Drug International Ltd","500 mg"],["Hydrea","Everest Pharmaceuticals Ltd","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/hydrosar-capsule-10-s-206969","https://pharmeasy.in/online-medicine-order/myelostat-500mg-strip-of-10-capsules-30273","https://pharmeasy.in/online-medicine-order/cytodrox-500mg-strip-of-10-capsules-42588","https://medex.com.bd/brands/16881/hydronix-500-mg-capsule","https://medex.com.bd/brands/16882/mylostat-500-mg-capsule","https://medex.com.bd/brands/38114/hydrea-500-mg-capsule"]},"hydroxyprogesterone":{"IN":[["Proluton","Zydus Healthcare Limited","Proluton Depot 500Mg Injection 2Ml"],["Cor","Corona Remedies Pvt Ltd","Cor 9 500Mg Ampoule Of 2Ml Solution For Injection"],["Uniprogestin","Torrent Pharmaceuticals Ltd","Uniprogestin 500Mg Ampoule Of 2Ml Injection"]],"BD":[["HPC","Popular Pharmaceuticals PLC","250 mg/ml"],["Caprogen","Nuvista Pharma PLC","250 mg/ml"],["HPC DS","Popular Pharmaceuticals PLC","500 mg/2 ml"]],"src":["https://pharmeasy.in/online-medicine-order/proluton-depot-500mg-inj-2ml-30285","https://pharmeasy.in/online-medicine-order/cor-9-500mg-inj-2ml-218794","https://pharmeasy.in/online-medicine-order/uniprogestin-500mg-injection-2ml-196734","https://medex.com.bd/brands/26060/hpc-250-mg-im-injection","https://medex.com.bd/brands/28647/caprogen-250-mg-im-injection","https://medex.com.bd/brands/30865/hpc-ds-500-mg-im-injection"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
