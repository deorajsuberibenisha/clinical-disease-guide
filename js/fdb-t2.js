/* Clinical Disease Guide — Drug monograph database, batch T-2 (26 Nov 2026).
   End of T (tobramycin IV … tucatinib) and start of U (ublituximab … ustekinumab). Same rules as js/fdb-a2.js.
   Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js; tobramycin and upadacitinib boxed set from the full label text.
   Deferred: timolol (eye drops already written), trometamol (pack was ketorolac), tryptophan (PN amino-acid product only).
   Labels added: tobramycin injection (Fresenius) beside Bethkis; Incruse Ellipta (umeclidinium alone; pack was the combination). */
(function () { // T-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const T2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("tobramycin", {
  inn: "Tobramycin (injection and inhalation)", atc: "J01GB01", cls: "Aminoglycoside antibiotic",
  linked: [],
  forms: ["Injection 10 mg/mL (paediatric) and 40 mg/mL; powder 1.2 g [FDA].", "Inhalation solution 300 mg (Bethkis, TOBI) for cystic fibrosis [FDA].", "Eye drops 0.3% are a separate monograph."],
  moa: "Binds the 30S ribosome, inhibiting bacterial protein synthesis; bactericidal [FDA].",
  pk: ["Eliminated almost entirely by glomerular filtration; half-life about 2 hours with normal kidneys [FDA].", "25–70% removed by dialysis [FDA]."],
  ind: { adult: ["Serious infections from susceptible Gram-negative organisms (incl. P. aeruginosa): septicaemia, lower respiratory, CNS, intra-abdominal, skin/bone, complicated UTI [FDA].", "Inhaled: P. aeruginosa in cystic fibrosis (6 years+) [FDA]."], paed: ["Neonates, infants and children [FDA]."] },
  adult: [["Serious infections", "3 mg/kg/day IV or IM in 3 equal doses every 8 hours (1 mg/kg every 8 h) [FDA]."], ["Life-threatening infections", "Up to 5 mg/kg/day in 3 or 4 equal doses; reduce to 3 mg/kg/day as soon as possible [FDA]."], ["Weight", "Use pretreatment body weight [FDA]."], ["Kidney impairment", "Loading 1 mg/kg, then reduced doses or longer intervals guided by serum levels and the label table [FDA]."], ["Cystic fibrosis (inhaled)", "300 mg nebulised twice daily, 28 days on / 28 days off [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Duration", "Usually 7–10 days [FDA]."]],
  paed: { tiers: ["Neonates 1 week or younger: up to 4 mg/kg/day in 2 equal doses every 12 hours [FDA].", "Over 1 week: 6–7.5 mg/kg/day in 3 or 4 doses (2–2.5 mg/kg every 8 h or 1.5–1.89 mg/kg every 6 h) [FDA]."], transition: "Adult mg/kg from adolescence.", calcNote: "mg/kg every 8 hours; levels guide." },
  adj: { renal: "Reduce dose or extend interval; monitor levels [FDA].", hepatic: NEP, pregnancy: "Aminoglycosides can cause fetal harm (congenital deafness) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid other ototoxic/nephrotoxic drugs and potent loop diuretics [FDA]." },
  tox: { human: "Ototoxicity, nephrotoxicity, neuromuscular blockade [FDA].", animal: LD, manage: "Haemodialysis or peritoneal dialysis to remove the drug [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any aminoglycoside [FDA]."],
  ae: { common: ["Raised creatinine, vestibular and auditory changes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Irreversible ototoxicity [FDA]", "Nephrotoxicity [FDA]", "Neuromuscular blockade and respiratory paralysis [FDA]"] },
  monitor: ["Peak and trough levels; avoid prolonged levels above 12 mcg/mL; trough above 2 mcg/mL suggests accumulation [FDA].", "Creatinine, urine, audiometry where feasible [FDA]."],
  local: { neml: "Only tobramycin 0.3% eye drops are on the Bhutan NEML 2025; injection not listed [BT-NEML].", strengths: "Injection not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    C("tobramycin", "adult", "Serious infection — 1 mg/kg every 8 h (3 mg/kg/day)", "IV/IM", ADULT, "mg_per_kg", 1, 8, { formulations: [{ form: "inj", strength: 40, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "avoid", note: "kidney impairment (CrCl under 60): give 1 mg/kg loading, then reduced doses or longer intervals from the label table and serum levels" }], flags: ["Life-threatening: up to 5 mg/kg/day, then reduce", "Monitor peak and trough"] }),
    C("tobramycin", "child", "Child over 1 week — 2–2.5 mg/kg every 8 h", "IV/IM", pop(1, 216, null, null), "mg_per_kg", 2, 8, { dose: { value: 2, value_max: 2.5, unit: "mg", per: "dose" }, formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Neonates 1 week or younger: up to 4 mg/kg/day in 2 doses every 12 h", "Monitor levels"] })
  ],
  sources: [["FDA", "Tobramycin injection USP — FDA label (DailyMed)", T2_DM("d6dd9460-b030-479a-b3e3-03606e6fcad1")], ["FDA", "Bethkis (tobramycin inhalation solution) — FDA label (DailyMed)", T2_DM("1cd3d47b-025f-4705-9daf-cf07725ec223")], NEML_SRC],
  dose: { tagline: "Aminoglycoside — 3 mg/kg/day in 3 doses (up to 5 in life-threatening infection); levels and kidney checks.",
    boxedTitle: "Ototoxicity and nephrotoxicity",
    boxed: "Patients treated with Tobramycin Injection, USP and other aminoglycosides should be under close clinical observation, because these drugs have an inherent potential for causing ototoxicity and nephrotoxicity. Neurotoxicity, manifested as both auditory and vestibular ototoxicity, can occur. The auditory changes are irreversible, are usually bilateral, and may be partial or total. Eighth-nerve impairment and nephrotoxicity may develop, primarily in patients having pre-existing renal damage and in those with normal renal function to whom aminoglycosides are administered for longer periods or in higher doses than those recommended. Other manifestations of neurotoxicity may include numbness, skin tingling, muscle twitching, and convulsions. The risk of aminoglycoside-induced hearing loss increases with the degree of exposure to either high peak or high trough serum concentrations. Patients who develop cochlear damage may not have symptoms during therapy to warn them of eighth-nerve toxicity, and partial or total irreversible bilateral deafness may continue to develop after the drug has been discontinued. Rarely, nephrotoxicity may not become apparent until the first few days after cessation of therapy. Aminoglycoside-induced nephrotoxicity usually is reversible. Renal and eighth-nerve function should be closely monitored in patients with known or suspected renal impairment and also in those whose renal function is initially normal but who develop signs of renal dysfunction during therapy. Peak and trough serum concentrations of aminoglycosides should be monitored periodically during therapy to assure adequate levels and to avoid potentially toxic levels. Prolonged serum concentrations above 12 mcg/mL should be avoided. Rising trough levels (above 2 mcg/mL) may indicate tissue accumulation. Such accumulation, excessive peak concentrations, advanced age, and cumulative dose may contribute to ototoxicity and nephrotoxicity. Urine should be examined for decreased specific gravity and increased excretion of protein, cells, and casts. Blood urea nitrogen, serum creatinine, and creatinine clearance should be measured periodically. When feasible, it is recommended that serial audiograms be obtained in patients old enough to be tested, particularly high-risk patients. Evidence of impairment of renal, vestibular, or auditory function requires discontinuation of the drug or dosage adjustment. Tobramycin should be used with caution in premature and neonatal infants because of their renal immaturity and the resulting prolongation of serum half-life of the drug. Concurrent and sequential use of other neurotoxic and/or nephrotoxic antibiotics, particularly other aminoglycosides (e.g., amikacin, streptomycin, neomycin, kanamycin, gentamicin, and paromomycin), cephaloridine, viomycin, polymyxin B, colistin, cisplatin, and vancomycin, should be avoided. Other factors that may increase patient risk are advanced age and dehydration. Aminoglycosides should not be given concurrently with potent diuretics, such as ethacrynic acid and furosemide. Some diuretics themselves cause ototoxicity, and intravenously administered diuretics enhance aminoglycoside toxicity by altering antibiotic concentrations in serum and tissue. Aminoglycosides can cause fetal harm when administered to a pregnant woman. [FDA].",
    adult: [{ ind: "Serious Gram-negative infection", text: "1 mg/kg every 8 h (3 mg/kg/day); up to 5 mg/kg/day if life-threatening.", calc: ["adult"] }, { ind: "Cystic fibrosis (inhaled)", text: "300 mg nebulised twice daily, 28 days on/off." }],
    child: [{ ind: "Over 1 week", text: "2–2.5 mg/kg every 8 h.", calc: ["child"] }, { ind: "Neonate 1 week or younger", text: "Up to 4 mg/kg/day in 2 doses." }] }
});

FDB_M("triclabendazole", {
  inn: "Triclabendazole", atc: "P02BX04", cls: "Benzimidazole anthelmintic (fasciolicide)",
  linked: [],
  forms: ["Tablets 250 mg, functionally scored [FDA]."],
  moa: "Disrupts fluke tubulin and tegument [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take with food — absorption increases [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Fascioliasis, 6 years and over [FDA]."], paed: ["6 years and over [FDA]."] },
  adult: [["Fascioliasis", "10 mg/kg orally, 2 doses given 12 hours apart, with food [FDA]."], ["Rounding", "Round upward to the nearest half tablet (125 mg) [FDA]."], ["Taking", "Whole, halved, or crushed in applesauce (stable 4 hours) [FDA]."]],
  paed: { tiers: ["6 years and over: same mg/kg [FDA]."], transition: "Same.", calcNote: "10 mg/kg × 2 doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "QT prolongation — caution with QT-prolonging drugs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; ECG [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to triclabendazole or benzimidazoles [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Abdominal pain, sweating, nausea, decreased appetite, headache, urticaria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Biliary colic from dying flukes [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG if QT risk [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("triclabendazole", "std", "Fascioliasis — 10 mg/kg, 2 doses 12 h apart", "PO", pop(72, null, null, null), "mg_per_kg", 10, null, { formulations: [{ form: "tablet", strength: 250, unit: "mg", scored: true }], rounding: "round up to 125 mg", flags: ["Give 2 doses 12 hours apart, with food"] })],
  sources: [["FDA", "Egaten (triclabendazole) — FDA label (DailyMed)", T2_DM("5552884e-10ea-450c-9658-d3d4f33c946e")], NEML_SRC],
  dose: { tagline: "Fasciola liver-fluke treatment — 10 mg/kg twice, 12 hours apart, with food.",
    adult: [{ ind: "Fascioliasis", text: "10 mg/kg × 2 doses, 12 h apart.", calc: ["std"] }],
    child: [{ ind: "6 years and over", text: "Same.", calc: ["std"] }] }
});

FDB_M("trientine", {
  inn: "Trientine", atc: "A16AX12", cls: "Copper chelator",
  linked: [],
  forms: ["Trientine tetrahydrochloride tablets 300 mg (Cuvrior) [FDA].", "Trientine hydrochloride capsules 250 mg (other products) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Chelates copper, increasing urinary copper excretion [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Stable Wilson's disease, de-coppered and tolerant of penicillamine (Cuvrior) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Cuvrior: not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Wilson's disease (Cuvrior)", "300 mg to 3,000 mg total daily, in 2 divided doses; maximum 3,000 mg/day [FDA]."], ["Switching from penicillamine", "Penicillamine 125 → 300 mg; 250 → 600 mg; 375 or 500 → 900 mg daily (label table) [FDA]."], ["Not interchangeable", "Not substitutable mg for mg with other trientine products [FDA]."], ["Taking", "Empty stomach; swallow whole [FDA]."]],
  paed: { tiers: ["Not established for Cuvrior [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Individualised by copper levels — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Separate from iron and other minerals [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Abdominal pain, nausea, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Copper deficiency and sideroblastic anaemia from over-chelation [FDA] [UNVERIFIED-KNOWLEDGE]", "Early neurological worsening [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity, colitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum non-ceruloplasmin copper and 24-h urinary copper; clinical status [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Cuvrior (trientine tetrahydrochloride) — FDA label (DailyMed)", T2_DM("f73feeae-62ad-401e-b9f7-5cb269127750")], NEML_SRC],
  dose: { tagline: "Copper chelator for Wilson's disease — 300–3,000 mg/day in two doses, adjusted to copper levels.",
    adult: [{ ind: "Wilson's disease", text: "300–3,000 mg daily in 2 doses (Cuvrior)." }],
    child: [{ ind: "Children", text: "Not established for Cuvrior." }] }
});

FDB_M("trifarotene", {
  inn: "Trifarotene", atc: "D10AD06", cls: "Topical retinoid (RAR-gamma agonist)",
  linked: [],
  forms: ["Cream 0.005% pump [FDA]."],
  moa: "Selective retinoic acid receptor-gamma agonist [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Acne vulgaris of face and trunk, 9 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["9 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Acne", "Thin layer once daily in the evening on clean, dry skin; 1 pump for the face, 2 for the upper trunk, 1 more for mid/lower back [FDA]."], ["Use", "Moisturiser as needed; avoid eyes, lips, nasal creases, mucous membranes [FDA]."]],
  paed: { tiers: ["9 years and over: same [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Limit sun exposure [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Irritation, pruritus, sunburn [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe local irritation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Aklief (trifarotene) cream 0.005% — FDA label (DailyMed)", T2_DM("62d910db-85a6-4696-b69b-4bd2f3080cfc")], NEML_SRC],
  dose: { tagline: "Topical retinoid for face and trunk acne — thin layer each evening.",
    adult: [{ ind: "Acne vulgaris", text: "Once daily in the evening." }],
    child: [{ ind: "9 years and over", text: "Same." }] }
});

FDB_M("trifluoperazine", {
  inn: "Trifluoperazine", atc: "N05AB06", cls: "Phenothiazine antipsychotic (piperazine)",
  linked: [],
  forms: ["Tablets 1, 2, 5, 10 mg [FDA]."],
  moa: "Dopamine D2 antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long-acting — twice-daily or once-daily dosing [FDA]."],
  ind: { adult: ["Schizophrenia [FDA].", "Short-term non-psychotic anxiety (not first choice) [FDA]."], paed: ["Psychosis, 6–12 years, hospitalised or closely supervised [FDA]."] },
  adult: [["Psychosis", "Start 2–5 mg twice daily; most respond to 15–20 mg/day; some need 40 mg/day or more [FDA]."], ["Non-psychotic anxiety", "1–2 mg twice daily; not more than 6 mg/day or longer than 12 weeks [FDA]."], ["Older or frail adults", "Lower range, slower increases [FDA]."]],
  paed: { tiers: ["6–12 years: start 1 mg once or twice daily; increase gradually; usually not over 15 mg/day [FDA]."], transition: "Adult dosing in adolescence.", calcNote: "Starting doses." },
  adj: { renal: NEP, hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal extrapyramidal and withdrawal symptoms after third-trimester exposure [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid skin contact if phenothiazine-sensitive [FDA]." },
  tox: { human: "Extrapyramidal reactions, sedation, hypotension, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; anticholinergic for dystonia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Comatose or greatly depressed states from CNS depressants [FDA] [UNVERIFIED-KNOWLEDGE]", "Blood dyscrasias, bone-marrow depression, pre-existing liver damage [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Drowsiness, dizziness, extrapyramidal symptoms, dry mouth, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Tardive dyskinesia [FDA]", "Neuroleptic malignant syndrome [FDA]", "Agranulocytosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Increased mortality in elderly with dementia [FDA]"] },
  monitor: ["Movement disorders; blood count if infection signs [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("trifluoperazine", "psych", "Psychosis — start 2 mg twice daily (2–5 mg)", "PO", ADULT, "fixed", 2, 12, { dose: { value: 2, value_max: 5, unit: "mg", per: "dose" }, formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Usual effective 15–20 mg/day", "Frail or small patients: lower start"] }),
    C("trifluoperazine", "child", "Psychosis, 6–12 years — start 1 mg once daily", "PO", pop(72, 156, null, null), "fixed", 1, 24, { formulations: [{ form: "tablet", strength: 1, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["May give twice daily", "Usually not over 15 mg/day"] })
  ],
  sources: [["FDA", "Trifluoperazine hydrochloride tablets — FDA label (DailyMed)", T2_DM("069d3469-138b-4e4f-a7bb-6acac5f86abb")], NEML_SRC],
  dose: { tagline: "Phenothiazine antipsychotic — 2–5 mg twice daily, usual 15–20 mg/day.",
    boxedTitle: "Increased Mortality in Elderly Patients with Dementia-Related Psychosis",
    boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. Analyses of seventeen placebo-controlled trials (modal duration of 10 weeks), largely in patients taking atypical antipsychotic drugs, revealed a risk of death in drug-treated patients of between 1.6 to 1.7 times the risk of death in placebo-treated patients. Over the course of a typical 10-week controlled trial, the rate of death in drug-treated patients was about 4.5%, compared to a rate of about 2.6% in the placebo group. Although the causes of death were varied, most of the deaths appeared to be either cardiovascular (e.g., heart failure, sudden death) or infectious (e.g., pneumonia) in nature. Observational studies suggest that, similar to atypical antipsychotic drugs, treatment with conventional antipsychotic drugs may increase mortality. The extent to which the findings of increased mortality in observational studies may be attributed to the antipsychotic drug as opposed to some characteristic(s) of the patients is not clear. Trifluoperazine hydrochloride is not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia", text: "2–5 mg twice daily; usual 15–20 mg/day.", calc: ["psych"] }, { ind: "Non-psychotic anxiety", text: "1–2 mg twice daily; max 6 mg/day, 12 weeks." }],
    child: [{ ind: "Psychosis 6–12 years", text: "1 mg once or twice daily.", calc: ["child"] }] }
});

FDB_M("trifluridine", {
  inn: "Trifluridine (eye drops)", atc: "S01AD02", cls: "Antiviral (ophthalmic)",
  linked: [],
  forms: ["Ophthalmic solution 1% [FDA]."],
  moa: "Thymidine analogue inhibiting viral DNA synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Primary keratoconjunctivitis and recurrent epithelial keratitis due to herpes simplex 1 and 2 [FDA]."], paed: ["Same [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Herpes keratitis", "1 drop onto the cornea every 2 hours while awake, maximum 9 drops a day, until the ulcer re-epithelialises [FDA]."], ["Then", "1 drop every 4 hours while awake (at least 5 drops a day) for 7 more days [FDA]."], ["Limits", "Change therapy if no improvement by 7 days or not healed by 14 days; avoid use beyond 21 days [FDA]."]],
  paed: { tiers: ["Same [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Oral trifluridine/tipiracil is a different product." },
  tox: { human: NEP, animal: LD, manage: "Rinse eye [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Burning or stinging, palpebral oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ocular toxicity with prolonged use [FDA]"] },
  monitor: ["Corneal healing [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Trifluridine ophthalmic solution 1% — FDA label (DailyMed)", T2_DM("abc1d07f-91ee-4421-bc9b-457d0ed41f4c")], NEML_SRC],
  dose: { tagline: "Antiviral eye drop for herpes keratitis — every 2 h while awake (max 9/day), then every 4 h for a week.",
    adult: [{ ind: "Herpes simplex keratitis", text: "1 drop every 2 h awake (max 9/day), then every 4 h × 7 days." }],
    child: [{ ind: "Children", text: "Same." }] }
});

FDB_M("triheptanoin", {
  inn: "Triheptanoin", atc: "A16AX17", cls: "Medium-chain triglyceride (odd-chain fatty acid)",
  linked: [],
  forms: ["Oral liquid 100% (about 1 g/mL) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Provides heptanoate as a calorie and anaplerotic source [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Long-chain fatty acid oxidation disorders (calorie and fatty-acid source) [FDA]."], paed: ["Same, including neonates [FDA]."] },
  adult: [["Target", "Up to 35% of total prescribed daily caloric intake, in at least 4 doses mixed into food or formula [FDA]."], ["Start", "Stop other MCT products first; start low and titrate per label [FDA]."], ["Specialist", "Under a metabolic dietitian/physician [FDA]."]],
  paed: { tiers: ["Same calorie-based dosing; neonates may need more fat [FDA]."], transition: "Same.", calcNote: "Calorie-based — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Not via PVC feeding tubes (can degrade them) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Abdominal pain, diarrhoea, vomiting, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Feeding tube dysfunction [FDA] [UNVERIFIED-KNOWLEDGE]", "Intestinal malabsorption with pancreatic insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight, calorie intake, GI tolerance [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Dojolvi (triheptanoin) — FDA label (DailyMed)", T2_DM("4cfeb8bd-143e-4dd7-bc34-b0bcda02460d")], NEML_SRC],
  dose: { tagline: "Calorie source for fatty-acid oxidation disorders — up to 35% of daily calories in 4+ doses.",
    adult: [{ ind: "LC-FAOD", text: "Up to 35% of daily calories, 4+ doses." }],
    child: [{ ind: "LC-FAOD", text: "Same, calorie-based." }] }
});

FDB_M("trilaciclib", {
  inn: "Trilaciclib", atc: "L01XE57", cls: "CDK4/6 inhibitor (myeloprotection)",
  linked: [],
  forms: ["Powder for injection 300 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Transiently arrests haematopoietic stem cells in G1, protecting them from chemotherapy [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Reduce chemotherapy-induced myelosuppression before platinum/etoposide or topotecan regimens for extensive-stage small cell lung cancer [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "240 mg/m² IV over 30 minutes, finished no more than 4 hours before chemotherapy, on each chemotherapy day [FDA]."], ["Interval", "Not more than 28 hours between doses on consecutive days [FDA]."], ["Missed dose", "Skip chemotherapy that day [FDA]."], ["Stopping", "Wait 96 hours after the last dose before chemotherapy alone [FDA]."], ["Liver", "Reduce dose in moderate or severe hepatic impairment [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "mg/m²." },
  adj: { renal: NEP, hepatic: "Moderate/severe: reduce dose (label) [FDA].", pregnancy: NEP, other: "May raise levels of OCT2/MATE substrates (e.g. cisplatin, dofetilide) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serious hypersensitivity to trilaciclib [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Fatigue, hypocalcaemia, hypokalaemia, hypophosphataemia, raised AST, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Injection-site reactions and phlebitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Acute drug hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion site; respiratory symptoms [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("trilaciclib", "std", "SCLC chemotherapy days — 240 mg/m² IV", "IV", ADULT, "mg_per_m2", 240, null, { rounding: "per pharmacy", flags: ["Finish within 4 hours before chemotherapy, each chemotherapy day"] })],
  sources: [["FDA", "Cosela (trilaciclib) — FDA label (DailyMed)", T2_DM("b3179c19-78f3-4bf1-b73e-7f7638522ab1")], NEML_SRC],
  dose: { tagline: "Myeloprotection before SCLC chemotherapy — 240 mg/m² IV within 4 h before each chemo day.",
    adult: [{ ind: "ES-SCLC chemotherapy", text: "240 mg/m² IV before chemotherapy each day.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("trimethobenzamide", {
  inn: "Trimethobenzamide", atc: "R06AX17", cls: "Antiemetic (central)",
  linked: [],
  forms: ["Capsules 300 mg; injection 100 mg/mL (IM only) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Acts on the chemoreceptor trigger zone [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal elimination — reduce in kidney impairment [FDA]."],
  ind: { adult: ["Postoperative nausea and vomiting, and nausea from gastroenteritis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Injection not for children [FDA]."] },
  adult: [["Injection", "200 mg (2 mL) IM three or four times daily; deep IM into the upper outer gluteal quadrant; not IV [FDA]."], ["Capsules", "300 mg three or four times daily [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Kidney / elderly", "CrCl 70 mL/min/1.73 m² or less: reduce dose or lengthen the interval [FDA]."]],
  paed: { tiers: ["Injection: not for paediatric use [FDA].", "Capsules: avoid in children with viral illness (Reye's-like risk) [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed adult dose." },
  adj: { renal: "Reduce dose or extend interval at CrCl 70 or less [FDA].", hepatic: NEP, pregnancy: NEP, other: "Can cause drowsiness [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]", "Injection in children [FDA]"],
  ae: { common: ["Drowsiness, dizziness, headache, diarrhoea, injection-site pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Extrapyramidal symptoms, seizures, blood dyscrasias, jaundice [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [C("trimethobenzamide", "im", "Nausea — 200 mg IM three or four times daily", "IM", ADULT, "fixed", 200, 6, { formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 0, crcl_max: 70, action: "renal_note", note: "CrCl 70 or less: reduce dose or lengthen interval" }], flags: ["Deep IM only; not IV", "Or every 8 h (three times daily)"] })],
  sources: [["FDA", "Trimethobenzamide hydrochloride — FDA label (DailyMed)", T2_DM("147def93-cd3d-4e42-89ad-6a6b413bf362")], NEML_SRC],
  dose: { tagline: "Antiemetic — 200 mg IM (or 300 mg oral) three or four times daily; less in kidney impairment.",
    adult: [{ ind: "Nausea and vomiting", text: "200 mg IM or 300 mg oral 3–4 times daily.", calc: ["im"] }],
    child: [{ ind: "Children", text: "Injection not for children." }] }
});

FDB_M("trimethoprim", {
  inn: "Trimethoprim", atc: "J01EA01", cls: "Dihydrofolate reductase inhibitor antibacterial",
  linked: [],
  forms: ["Tablets 100 mg [FDA]."],
  moa: "Inhibits bacterial dihydrofolate reductase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Initial uncomplicated urinary tract infections from susceptible organisms [FDA]."], paed: ["Tablets: not established under 12 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Uncomplicated UTI", "100 mg every 12 hours or 200 mg every 24 hours, for 10 days [FDA]."], ["CrCl 15–30", "50 mg every 12 hours [FDA]."], ["CrCl under 15", "Not recommended [FDA]."]],
  paed: { tiers: ["Under 12 years: not established for tablets [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose with kidney step." },
  adj: { renal: "CrCl 15–30: 50 mg every 12 h; under 15: not recommended [FDA].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Folate antagonist — caution [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Raises potassium; interacts with phenytoin, methotrexate [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, confusion, bone-marrow depression [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Gastric measures; leucovorin for marrow depression [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]", "Megaloblastic anaemia from folate deficiency [FDA]"],
  ae: { common: ["Rash, pruritus, nausea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Blood dyscrasias [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Potassium in at-risk patients; blood count with long use [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Trimethoprim alone is not on the Bhutan NEML 2025; co-trimoxazole (with sulfamethoxazole) is listed [BT-NEML].", strengths: "Use co-trimoxazole from the Bhutan formulary.", stg: "Not in Bhutan STG 2024 as a single agent [BT-STG]." },
  calc: [C("trimethoprim", "uti", "Uncomplicated UTI — 100 mg every 12 h (10 days)", "PO", pop(144, null, null, null), "fixed", 100, 12, { formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 15, crcl_max: 30, action: "reduce_dose", factor: 0.5, interval_h: 12 }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "not recommended at CrCl under 15" }], flags: ["Or 200 mg once daily"] })],
  sources: [["FDA", "Trimethoprim tablets — FDA label (DailyMed)", T2_DM("249e938d-f181-47c4-a082-372d65462f33")], NEML_SRC],
  dose: { tagline: "Antibacterial for uncomplicated UTI — 100 mg twice daily (or 200 mg once) for 10 days.",
    adult: [{ ind: "Uncomplicated UTI", text: "100 mg every 12 h for 10 days.", calc: ["uti"] }],
    child: [{ ind: "Under 12 years", text: "Not established (tablets)." }] }
});

FDB_M("trimipramine", {
  inn: "Trimipramine", atc: "N06AA06", cls: "Tricyclic antidepressant",
  linked: [],
  forms: ["Capsules 25, 50, 100 mg [FDA]."],
  moa: "Monoamine reuptake inhibition and receptor blockade; sedating [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Depression [FDA]."], paed: ["Not recommended in children [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Outpatients", "75 mg/day in divided doses, increased to 150 mg/day; not over 200 mg/day; maintenance 50–150 mg/day, may be given at bedtime [FDA]."], ["Inpatients", "100 mg/day, up to 200 mg; maximum 250–300 mg/day if no response in 2–3 weeks [FDA]."], ["Adolescents and older adults", "50 mg/day, up to 100 mg/day [FDA]."]],
  paed: { tiers: ["Adolescents: 50 mg/day, up to 100 mg [FDA]."], transition: "Adult dosing.", calcNote: "Starting daily doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Do not combine with MAOIs [FDA]." },
  tox: { human: "Arrhythmias, QRS widening, seizures, coma — dangerous in overdose [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "ECG; sodium bicarbonate for QRS widening; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs within 14 days [FDA]", "Acute recovery after myocardial infarction [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Sedation, dry mouth, constipation, blurred vision, weight gain, orthostatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidality in young people [FDA]", "Arrhythmia, heart block [FDA] [UNVERIFIED-KNOWLEDGE]", "Seizures, urinary retention, angle-closure glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality; ECG in cardiac disease or older adults [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("trimipramine", "op", "Depression (outpatient) — start 75 mg/day", "PO", ADULT, "fixed", 75, 24, { divided_doses: 3, interval_h: 8, dose: { value: 75, unit: "mg", per: "day" }, formulations: [{ form: "capsule", strength: 25, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["Increase to 150 mg/day; max 200 mg/day outpatient", "Older adults: start 50 mg/day"] })],
  sources: [["FDA", "Trimipramine maleate capsules — FDA label (DailyMed)", T2_DM("4f31df66-7dc2-1f04-e054-00144ff88e88")], NEML_SRC],
  dose: { tagline: "Sedating tricyclic antidepressant — 75 mg/day rising to 150 mg (max 200 outpatient).",
    boxedTitle: "Suicidality and Antidepressant Drugs",
    boxed: "Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of trimipramine capsules or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Trimipramine capsules are not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression", text: "75 mg/day in divided doses, up to 150–200 mg.", calc: ["op"] }],
    child: [{ ind: "Adolescents", text: "50 mg/day, up to 100 mg." }] }
});

FDB_M("triptorelin", {
  inn: "Triptorelin", atc: "L02AE04", cls: "GnRH agonist",
  linked: [],
  forms: ["Extended-release injectable suspension 22.5 mg (Triptodur, children) [FDA].", "Trelstar 3.75, 11.25, 22.5 mg (prostate cancer) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Continuous GnRH receptor stimulation suppresses LH/FSH and sex steroids [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Advanced prostate cancer (Trelstar) [UNVERIFIED-KNOWLEDGE]."], paed: ["Central precocious puberty, 2 years and over (Triptodur) [FDA]."] },
  adult: [["Prostate cancer (Trelstar)", "3.75 mg every 4 weeks, 11.25 mg every 12 weeks, or 22.5 mg every 24 weeks IM [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Central precocious puberty, 2 years+: 22.5 mg IM once every 24 weeks (healthcare provider only) [FDA]."], transition: "Stop at the appropriate age for puberty [FDA].", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Initial hormone flare in the first weeks [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to triptorelin or GnRH agonists [FDA]", "Pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Injection-site reactions, hot flushes, headache, nasopharyngitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Psychiatric events, seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Pseudotumour cerebri in children [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperglycaemia and cardiovascular risk (adults) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LH and sex steroids 1–2 months after starting and with each dose; height every 3–6 months; bone age [FDA]."],
  local: notBT,
  calc: [C("triptorelin", "cpp", "Central precocious puberty — 22.5 mg IM every 24 weeks", "IM", pop(24, 216, null, null), "fixed", 22.5, 4032, { rounding: "1 kit", flags: ["Given by a healthcare provider"] })],
  sources: [["FDA", "Triptodur (triptorelin) — FDA label (DailyMed)", T2_DM("f41380e7-b830-432d-a5f5-a872932f107e")], NEML_SRC],
  dose: { tagline: "GnRH agonist — 22.5 mg IM every 24 weeks for central precocious puberty.",
    adult: [{ ind: "Prostate cancer", text: "Depot every 4, 12 or 24 weeks by product." }],
    child: [{ ind: "Central precocious puberty", text: "22.5 mg IM every 24 weeks.", calc: ["cpp"] }] }
});

FDB_M("trofinetide", {
  inn: "Trofinetide", atc: "N07XX19", cls: "IGF-1 tripeptide analogue",
  linked: [],
  forms: ["Oral solution 200 mg/mL; powder sachets (Daybue Stix) [FDA]."],
  moa: "Not fully known; synthetic analogue of glycine-proline-glutamate [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion — adjust in moderate impairment [FDA]."],
  ind: { adult: ["Rett syndrome, 2 years and over [FDA]."], paed: ["2 years and over [FDA]."] },
  adult: [["By weight, twice daily", "9 to under 12 kg 5,000 mg; 12 to under 20 kg 6,000 mg; 20 to under 35 kg 8,000 mg; 35 to under 50 kg 10,000 mg; 50 kg or more 12,000 mg [FDA]."], ["Taking", "Morning and evening, with or without food; oral or G-tube [FDA]."], ["Kidney", "Moderate impairment (eGFR 30–59): lower dose by label table [FDA]."]],
  paed: { tiers: ["Same weight bands, 2 years and over [FDA]."], transition: "Same.", calcNote: "Weight bands, twice daily." },
  adj: { renal: "eGFR 30–59: reduced dose (label table) [FDA]; severe: not recommended [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Stop laxatives before starting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Diarrhoea (very common), vomiting, fever, seizures, decreased appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Dehydration from diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Weight loss [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Stool frequency, hydration, weight [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("trofinetide", "w9", "Rett syndrome, 9 to under 12 kg — 5,000 mg twice daily", "PO", pop(24, null, 9, 12), "fixed", 5000, 12, { formulations: [{ form: "solution", strength: 200, unit: "mg/mL" }], rounding: "0.5 mL" }),
    C("trofinetide", "w12", "Rett syndrome, 12 to under 20 kg — 6,000 mg twice daily", "PO", pop(24, null, 12, 20), "fixed", 6000, 12, { formulations: [{ form: "solution", strength: 200, unit: "mg/mL" }], rounding: "0.5 mL" }),
    C("trofinetide", "w20", "Rett syndrome, 20 to under 35 kg — 8,000 mg twice daily", "PO", pop(24, null, 20, 35), "fixed", 8000, 12, { formulations: [{ form: "solution", strength: 200, unit: "mg/mL" }], rounding: "0.5 mL" }),
    C("trofinetide", "w35", "Rett syndrome, 35 to under 50 kg — 10,000 mg twice daily", "PO", pop(24, null, 35, 50), "fixed", 10000, 12, { formulations: [{ form: "solution", strength: 200, unit: "mg/mL" }], rounding: "0.5 mL" }),
    C("trofinetide", "w50", "Rett syndrome, 50 kg or more — 12,000 mg twice daily", "PO", pop(24, null, 50, null), "fixed", 12000, 12, { formulations: [{ form: "solution", strength: 200, unit: "mg/mL" }], rounding: "0.5 mL" })
  ],
  sources: [["FDA", "Daybue (trofinetide) — FDA label (DailyMed)", T2_DM("67e6f2d9-21f6-466f-9def-826c6a4b8257")], NEML_SRC],
  dose: { tagline: "Rett syndrome treatment — 5,000–12,000 mg twice daily by weight band.",
    adult: [{ ind: "Rett syndrome", text: "By weight, twice daily (12,000 mg at 50 kg+).", calc: ["w35", "w50"] }],
    child: [{ ind: "Rett syndrome, 2 years+", text: "5,000–10,000 mg twice daily by weight.", calc: ["w9", "w12", "w20", "w35", "w50"] }] }
});

FDB_M("trospium", {
  inn: "Trospium", atc: "G04BD09", cls: "Antimuscarinic (quaternary amine)",
  linked: [],
  forms: ["Tablets 20 mg; extended-release capsules 60 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Muscarinic antagonist relaxing the detrusor; little CNS penetration [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal tubular secretion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Overactive bladder with urge incontinence, urgency and frequency [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Overactive bladder", "20 mg twice daily, at least 1 hour before meals or on an empty stomach [FDA]."], ["CrCl under 30", "20 mg once daily at bedtime [FDA]."], ["75 years and over", "May reduce to 20 mg once daily by tolerability [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose with kidney step." },
  adj: { renal: "CrCl under 30: 20 mg once daily at bedtime [FDA].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid alcohol within 2 hours (ER capsule) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Anticholinergic toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Urinary retention [FDA]", "Gastric retention [FDA]", "Uncontrolled narrow-angle glaucoma [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Dry mouth, constipation, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Angioedema [FDA] [UNVERIFIED-KNOWLEDGE]", "Urinary retention [FDA] [UNVERIFIED-KNOWLEDGE]", "Heat prostration [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bladder emptying in outflow obstruction [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("trospium", "oab", "Overactive bladder — 20 mg twice daily before meals", "PO", ADULT, "fixed", 20, 12, { formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "extend_interval", factor: 24 }], flags: ["CrCl under 30: once daily at bedtime"] })],
  sources: [["FDA", "Trospium chloride tablets — FDA label (DailyMed)", T2_DM("cdbb462c-c7a8-4b04-8abe-4de9b88591a0")], NEML_SRC],
  dose: { tagline: "Antimuscarinic for overactive bladder — 20 mg twice daily on an empty stomach.",
    adult: [{ ind: "Overactive bladder", text: "20 mg twice daily; once daily if CrCl under 30.", calc: ["oab"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("trypan-blue", {
  inn: "Trypan blue (ophthalmic)", atc: "S01KX02", cls: "Ophthalmic surgical dye",
  linked: [],
  forms: ["Ophthalmic solution 0.06% (VisionBlue) [FDA]."],
  moa: "Stains the anterior lens capsule [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Aid in ophthalmic surgery by staining the anterior capsule of the lens [FDA]."], paed: ["Same [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Use", "Applied by the surgeon to the anterior capsule under air or viscoelastic, then irrigated out per label [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Surgical dye — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Can stain soft hydrophilic lenses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Irrigate [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Do not use with hydrophilic acrylic IOLs (dye absorbed) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Discolouration of IOLs, posterior capsule staining [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "VisionBlue (trypan blue ophthalmic solution 0.06%) — FDA label (DailyMed)", T2_DM("a44bc2ef-3d7f-4125-a7f7-c5969b1b4142")], NEML_SRC],
  dose: { tagline: "Capsule-staining dye for cataract surgery — surgeon-applied, then irrigated.",
    adult: [{ ind: "Cataract surgery", text: "Applied to the anterior capsule by the surgeon." }],
    child: [{ ind: "Children", text: "Same." }] }
});

FDB_M("tuberculin", {
  inn: "Tuberculin purified protein derivative (PPD)", atc: "V04CF01", cls: "Diagnostic skin-test antigen",
  linked: [],
  forms: ["Injection 5 TU per 0.1 mL (Tubersol, Aplisol) [FDA]."],
  moa: "Elicits a delayed-type hypersensitivity reaction in people sensitised to M. tuberculosis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Aid to diagnosis of tuberculosis infection (Mantoux test) [FDA]."], paed: ["Same, all ages [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "0.1 mL (5 TU) intradermally, volar forearm, raising a pale 6–10 mm bleb; 26–27 G needle [FDA]."], ["Never", "IV, IM or SC — a subcutaneous injection cannot be read [FDA]."], ["Reading", "48–72 hours after; measure induration (not redness) in mm across the forearm [FDA]."], ["Cut-offs", "5 mm, 10 mm or 15 mm by risk group (CDC) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same 0.1 mL dose [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Fixed 0.1 mL — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can be used [UNVERIFIED-KNOWLEDGE].", other: "Live vaccines (e.g. MMR) can suppress the reaction — test the same day or wait 4 weeks [FDA] [UNVERIFIED-KNOWLEDGE]. BCG can cause false positives [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Previous severe reaction to tuberculin (vesiculation, ulceration, necrosis) [FDA] [UNVERIFIED-KNOWLEDGE]", "Known prior TB or treated TB [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Local pain, itching, discomfort [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Vesiculation, ulceration or necrosis in highly sensitive people [FDA] [UNVERIFIED-KNOWLEDGE]", "Anaphylaxis (rare) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Read at 48–72 hours [FDA]."],
  local: { neml: "Not found on the Bhutan NEML 2025 [BT-NEML].", strengths: "Check local programme supply.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Tubersol (tuberculin PPD, Mantoux) — FDA label (DailyMed)", T2_DM("a4a732e9-b8ee-4e6d-8b9a-6a9d2c36bfcd")], NEML_SRC],
  dose: { tagline: "Mantoux TB skin test — 0.1 mL (5 TU) intradermally, read induration at 48–72 h.",
    adult: [{ ind: "TB infection testing", text: "0.1 mL (5 TU) intradermal; read at 48–72 h." }],
    child: [{ ind: "TB infection testing", text: "Same." }] }
});

FDB_M("tucatinib", {
  inn: "Tucatinib", atc: "L01EH03", cls: "HER2 tyrosine kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 50, 150 mg [FDA]."],
  moa: "Selective HER2 kinase inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2C8 substrate; CYP3A inhibitor [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["HER2-positive metastatic breast cancer with trastuzumab and capecitabine [FDA].", "HER2-positive RAS wild-type metastatic colorectal cancer with trastuzumab [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "300 mg twice daily with or without food [FDA]."], ["Severe hepatic impairment", "200 mg twice daily [FDA]."], ["Before use", "Liver tests at baseline and during treatment [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: "Severe (Child-Pugh C): 200 mg twice daily [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP2C8 inhibitors and strong CYP3A/CYP2C8 inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, palmar-plantar erythrodysaesthesia (with capecitabine), nausea, fatigue, raised transaminases, stomatitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe and fatal hepatotoxicity [FDA]", "Severe diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ALT, AST, bilirubin before and every 3 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("tucatinib", "std", "HER2+ breast / colorectal cancer — 300 mg twice daily", "PO", ADULT, "fixed", 300, 12, { formulations: [{ form: "tablet", strength: 150, unit: "mg", whole: true }], rounding: "2 tablets", flags: ["Severe hepatic impairment: 200 mg twice daily"] })],
  sources: [["FDA", "Tukysa (tucatinib) — FDA label (DailyMed)", T2_DM("f27eb1b9-b7fc-424e-988f-84dd7bb195a3")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "HER2 TKI with trastuzumab — 300 mg twice daily; watch the liver.",
    boxedTitle: "Hepatotoxicity",
    boxed: "• TUKYSA can cause severe and fatal hepatotoxicity, particularly after rechallenge. • Obtain liver function tests before initiation and during treatment with TUKYSA. Withhold, reduce dose, or permanently discontinue TUKYSA as recommended based on severity of hepatotoxicity [FDA].",
    adult: [{ ind: "HER2+ breast or colorectal cancer", text: "300 mg twice daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ublituximab", {
  inn: "Ublituximab", atc: "L04AG14", cls: "Anti-CD20 monoclonal antibody",
  linked: [],
  forms: ["Injection 150 mg/6 mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Depletes CD20-positive B cells [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsing forms of multiple sclerosis [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Before first dose", "Hepatitis B screen; immunoglobulins; liver tests [FDA]."], ["Premedication", "Methylprednisolone (or equivalent) and an antihistamine before each infusion [FDA]."], ["Schedule", "150 mg IV first; 450 mg IV 2 weeks later; then 450 mg 24 weeks after the first infusion and every 24 weeks [FDA]."], ["Monitoring", "Observe at least 1 hour after the first two infusions [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Contraception during and 6 months after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Live vaccines at least 4 weeks before starting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active hepatitis B infection [FDA]", "Life-threatening infusion reaction to ublituximab [FDA]"],
  ae: { common: ["Infusion reactions, upper respiratory infections [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections, HBV reactivation, PML [FDA] [UNVERIFIED-KNOWLEDGE]", "Reduced immunoglobulins [FDA] [UNVERIFIED-KNOWLEDGE]", "Liver injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion reactions; immunoglobulins; liver tests [FDA]."],
  local: notBT,
  calc: [
    C("ublituximab", "first", "Relapsing MS — first infusion 150 mg IV", "IV", ADULT, "fixed", 150, null, { rounding: "1 vial", flags: ["Premedicate; observe 1 hour after"] }),
    C("ublituximab", "maint", "Relapsing MS — 450 mg IV (2 weeks after first, then every 24 weeks)", "IV", ADULT, "fixed", 450, 4032, { rounding: "3 vials", flags: ["Premedicate before each infusion"] })
  ],
  sources: [["FDA", "Briumvi (ublituximab-xiiy) — FDA label (DailyMed)", T2_DM("3a77cd8c-811b-407c-9140-d0c5c26435c2")], NEML_SRC],
  dose: { tagline: "Anti-CD20 for relapsing MS — 150 mg, then 450 mg at 2 weeks and every 24 weeks.",
    adult: [{ ind: "Relapsing MS", text: "150 mg IV, then 450 mg at 2 weeks, then every 24 weeks.", calc: ["first", "maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ubrogepant", {
  inn: "Ubrogepant", atc: "N02CD04", cls: "CGRP receptor antagonist (gepant)",
  linked: [],
  forms: ["Tablets 50, 100 mg [FDA]."],
  moa: "Blocks the CGRP receptor [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA]."],
  ind: { adult: ["Acute treatment of migraine with or without aura [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Migraine attack", "50 mg or 100 mg as needed; a second dose may be taken at least 2 hours later; maximum 200 mg in 24 hours [FDA]."], ["Severe hepatic or renal impairment", "50 mg; second 50 mg dose after at least 2 hours if needed [FDA]."], ["Interactions", "Strong CYP3A4 inhibitors: contraindicated; moderate inhibitors or BCRP/P-gp inhibitors: lower doses (label table) [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose; may repeat once." },
  adj: { renal: "Severe: 50 mg dose; avoid in end-stage kidney disease [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: 50 mg dose [FDA].", pregnancy: NEP, other: "Safety of more than 8 attacks a month not established [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Strong CYP3A4 inhibitors [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Nausea, somnolence, dry mouth [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised blood pressure, Raynaud's (CGRP class) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [C("ubrogepant", "acute", "Migraine attack — 50 or 100 mg", "PO", ADULT, "fixed", 50, null, { dose: { value: 50, value_max: 100, unit: "mg", per: "dose" }, formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["May repeat once after at least 2 hours", "Max 200 mg in 24 hours", "Severe liver/kidney impairment: 50 mg doses"] })],
  sources: [["FDA", "Ubrelvy (ubrogepant) — FDA label (DailyMed)", T2_DM("36106b14-d410-4faf-a361-2871de8198c3")], NEML_SRC],
  dose: { tagline: "Gepant for acute migraine — 50 or 100 mg, may repeat after 2 h, max 200 mg/day.",
    adult: [{ ind: "Acute migraine", text: "50–100 mg; repeat after 2 h if needed; max 200 mg/24 h.", calc: ["acute"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ulipristal", {
  inn: "Ulipristal acetate", atc: "G03AD02", cls: "Selective progesterone receptor modulator (emergency contraceptive)",
  linked: [],
  forms: ["Tablet 30 mg (ella) [FDA]."],
  moa: "Delays or inhibits ovulation [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — enzyme inducers reduce effect [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Emergency contraception within 120 hours after unprotected intercourse or contraceptive failure [FDA]."], paed: ["Post-menarche females [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Emergency contraception", "One 30 mg tablet as soon as possible, within 120 hours (5 days); any time in the cycle, with or without food [FDA]."], ["Vomiting within 3 hours", "Consider repeating the dose [FDA]."], ["Hormonal contraception", "Start or resume no sooner than 5 days after; use barrier method until next period [FDA]."]],
  paed: { tiers: ["Post-menarche: same dose [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Single tablet." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Not for use in known or suspected pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Breastfeeding: not recommended for 1 week after [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known or suspected pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Headache, abdominal pain, nausea, dysmenorrhoea, fatigue, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ectopic pregnancy if the method fails — assess severe lower abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Pregnancy test if the period is over a week late [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("ulipristal", "ec", "Emergency contraception — 30 mg once within 120 h", "PO", pop(144, null, null, null), "fixed", 30, null, { formulations: [{ form: "tablet", strength: 30, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Repeat if vomiting within 3 hours"] })],
  sources: [["FDA", "ella (ulipristal acetate) tablet 30 mg — FDA label (DailyMed)", T2_DM("2bf93d23-cddd-4613-9066-5b5fa090404b")], NEML_SRC],
  dose: { tagline: "Emergency contraceptive — one 30 mg tablet within 5 days.",
    adult: [{ ind: "Emergency contraception", text: "30 mg once, within 120 hours.", calc: ["ec"] }],
    child: [{ ind: "Post-menarche", text: "Same.", calc: ["ec"] }] }
});

FDB_M("ulobetasol", {
  inn: "Ulobetasol (halobetasol propionate)", atc: "D07AD02", cls: "Super-potent topical corticosteroid",
  linked: [],
  forms: ["Cream, ointment, lotion 0.05%; foam and lotion 0.01% [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Anti-inflammatory, antipruritic, vasoconstrictive [UNVERIFIED-KNOWLEDGE].",
  pk: ["Can be absorbed enough to suppress the HPA axis [FDA]."],
  ind: { adult: ["Plaque psoriasis and corticosteroid-responsive dermatoses [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Lotion 0.05%: 12 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Lotion 0.05%", "Thin layer twice daily, up to 2 weeks; maximum 50 g (50 mL) per week [FDA]."], ["Avoid", "Face, scalp, groin, axillae; occlusion unless directed [FDA]."], ["Stop", "When controlled; reassess if no improvement in 2 weeks [FDA]."]],
  paed: { tiers: ["12 years and over: same, shorter courses [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "HPA suppression with large areas or long use [FDA]." },
  tox: { human: "HPA suppression, Cushing's features with overuse [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Withdraw gradually [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Burning, stinging, pruritus, skin atrophy [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["HPA-axis suppression [FDA]", "Skin atrophy, striae [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["HPA testing if large areas treated [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Halobetasol propionate lotion 0.05% — FDA label (DailyMed)", T2_DM("4cb1f7b3-c412-6fc7-e063-6394a90a63c9")], NEML_SRC],
  dose: { tagline: "Super-potent topical steroid — twice daily up to 2 weeks, max 50 g a week.",
    adult: [{ ind: "Plaque psoriasis / dermatoses", text: "Twice daily, up to 2 weeks; max 50 g/week." }],
    child: [{ ind: "12 years and over", text: "Same, short courses." }] }
});

FDB_M("umeclidinium-bromide", {
  inn: "Umeclidinium bromide", atc: "R03BB07", cls: "Long-acting muscarinic antagonist (LAMA)",
  linked: [],
  forms: ["Inhalation powder 62.5 microgram per actuation (Incruse Ellipta) [FDA].", "With vilanterol (Anoro) or fluticasone/vilanterol (Trelegy) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks M3 receptors in airway smooth muscle, causing bronchodilation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Maintenance treatment of COPD [FDA]."], paed: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["COPD", "1 inhalation (62.5 microgram) once daily, same time each day; not more than once in 24 hours [FDA]."], ["No adjustment", "Older adults, kidney impairment, moderate hepatic impairment [FDA]."]],
  paed: { tiers: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Inhaler — no calculator." },
  adj: { renal: "No change [FDA].", hepatic: "Moderate: no change [FDA].", pregnancy: NEP, other: "Not a rescue inhaler [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Anticholinergic effects [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe milk protein hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nasopharyngitis, upper respiratory infection, cough, arthralgia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Paradoxical bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]", "Worsening narrow-angle glaucoma or urinary retention [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Incruse Ellipta (umeclidinium) — FDA label (DailyMed)", T2_DM("dbb64747-1505-49d7-9a33-99dd402e96d3")], NEML_SRC],
  dose: { tagline: "Once-daily LAMA inhaler for COPD — 62.5 microgram once a day.",
    adult: [{ ind: "COPD maintenance", text: "1 inhalation once daily." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("upadacitinib", {
  inn: "Upadacitinib", atc: "L04AF03", cls: "Janus kinase (JAK1) inhibitor",
  linked: [],
  forms: ["Extended-release tablets 15, 30, 45 mg; oral solution 1 mg/mL (Rinvoq LQ, not substitutable) [FDA]."],
  moa: "Inhibits JAK1 signalling [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, non-radiographic axial SpA, atopic dermatitis, ulcerative colitis, Crohn's disease, giant cell arteritis — after TNF blockers where specified [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Atopic dermatitis 12 years+ (40 kg+); psoriatic arthritis and pJIA 2 years+ (weight-based) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["RA, PsA, AS, nr-axSpA", "15 mg once daily [FDA]."], ["Atopic dermatitis (under 65)", "15 mg daily; may increase to 30 mg [FDA]."], ["Atopic dermatitis (65+)", "15 mg daily [FDA]."], ["Ulcerative colitis", "45 mg daily for 8 weeks, then 15 or 30 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Crohn's disease", "45 mg daily for 12 weeks, then 15 or 30 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Severe kidney impairment", "15 mg daily (lower UC/CD doses per label) [FDA]."], ["Do not start", "Lymphocytes under 500, neutrophils under 1,000 or Hb under 8 g/dL [FDA]."]],
  paed: { tiers: ["Atopic dermatitis 12 years+ and 40 kg+: 15 mg daily, may increase to 30 mg [FDA].", "PsA/pJIA 2 years+ 10 kg+: weight-based oral solution (label) [FDA]."], transition: "Adult dosing.", calcNote: "Fixed adult doses." },
  adj: { renal: "Severe: 15 mg daily for most indications [FDA].", hepatic: "Severe (Child-Pugh C): not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "May cause fetal harm; contraception during and 4 weeks after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Screen for TB and hepatitis; update vaccines; avoid live vaccines [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to upadacitinib [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Upper respiratory infections, acne, nausea, cough, raised CK, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections, TB, herpes zoster [FDA]", "Malignancy, MACE, thrombosis, mortality [FDA]", "GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Cytopenias, lipid rises, liver enzyme rises [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lymphocytes, neutrophils, Hb; lipids at 12 weeks; liver tests; TB [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("upadacitinib", "ra", "RA / PsA / axial SpA — 15 mg once daily", "PO", ADULT, "fixed", 15, 24, { formulations: [{ form: "tablet", strength: 15, unit: "mg", whole: true }], rounding: "1 tablet" }),
    C("upadacitinib", "uc", "Ulcerative colitis induction — 45 mg once daily (8 weeks)", "PO", ADULT, "fixed", 45, 24, { formulations: [{ form: "tablet", strength: 45, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Crohn's: 45 mg for 12 weeks", "Then 15 or 30 mg maintenance"] })
  ],
  sources: [["FDA", "Rinvoq / Rinvoq LQ (upadacitinib) — FDA label (DailyMed)", T2_DM("2966aec7-2ef0-923c-d8ff-fe1a957bf095")], NEML_SRC],
  dose: { tagline: "JAK1 inhibitor — 15 mg daily for arthritis; 45 mg induction for IBD; serious boxed risks.",
    boxedTitle: "Serious infections, mortality, malignancy, major adverse cardiovascular events, and thrombosis",
    boxed: "SERIOUS INFECTIONS Patients treated with RINVOQ /RINVOQ LQ are at increased risk for developing serious infections that may lead to hospitalization or death. Most patients who developed these infections were taking concomitant immunosuppressants such as methotrexate or corticosteroids. If a serious infection develops, interrupt RINVOQ /RINVOQ LQ until the infection is controlled. Reported infections include: Active tuberculosis, which may present with pulmonary or extrapulmonary disease. Patients should be tested for latent tuberculosis before RINVOQ /RINVOQ LQ use and during therapy. Treatment for latent infection should be considered prior to RINVOQ /RINVOQ LQ use. Invasive fungal infections, including cryptococcosis and pneumocystosis. Bacterial, viral, including herpes zoster, and other infections due to opportunistic pathogens. The risks and benefits of treatment with RINVOQ /RINVOQ LQ should be carefully considered prior to initiating therapy in patients with chronic or recurrent infection. Patients should be closely monitored for the development of signs and symptoms of infection during and after treatment with RINVOQ /RINVOQ LQ , including the possible development of tuberculosis in patients who tested negative for latent tuberculosis infection prior to initiating therapy. MORTALITY In a large, randomized, postmarketing safety study in rheumatoid arthritis (RA) patients 50 years of age and older with at least one cardiovascular risk factor comparing another Janus kinase (JAK) inhibitor to tumor necrosis factor (TNF) blockers, a higher rate of all-cause mortality, including sudden cardiovascular death, was observed with the JAK inhibitor . MALIGNANCIES Lymphoma and other malignancies have been observed in patients treated with RINVOQ . In RA patients treated with another JAK inhibitor, a higher rate of malignancies (excluding non-melanoma skin cancer (NMSC)) was observed when compared with TNF blockers. Patients who are current or past smokers are at additional increased risk . MAJOR ADVERSE CARDIOVASCULAR EVENTS In RA patients 50 years of age and older with at least one cardiovascular risk factor treated with another JAK inhibitor, a higher rate of major adverse cardiovascular events (MACE) (defined as cardiovascular death, myocardial infarction, and stroke), was observed when compared with TNF blockers. Patients who are current or past smokers are at additional increased risk. Discontinue RINVOQ /RINVOQ LQ in patients that have experienced a myocardial infarction or stroke . THROMBOSIS Thrombos e s, including deep venous thrombosis, pulmonary embolism, and arterial thrombosis , have occurred in patients treated for inflammatory conditions with J AK inhibitors , including RINVOQ . Many of these adverse events were serious and some resulted in death. In RA patients 50 years of age and older with at least one cardiovascular risk factor treated with another JAK inhibitor, a higher rate of thrombosis was observed when compared with TNF blockers. Avoid RINVOQ /RINVOQ LQ in patients at risk. Patients with symptoms of thrombosis should discontinue RINVOQ /RINVOQ LQ and be promptly evaluated. [FDA].",
    adult: [{ ind: "RA / PsA / axial SpA", text: "15 mg once daily.", calc: ["ra"] }, { ind: "UC / Crohn's", text: "45 mg daily induction, then 15–30 mg.", calc: ["uc"] }, { ind: "Atopic dermatitis", text: "15 mg, up to 30 mg (under 65)." }],
    child: [{ ind: "Atopic dermatitis 12 y+ (40 kg+)", text: "15 mg, up to 30 mg daily." }] }
});

FDB_M("uridine-triacetate", {
  inn: "Uridine triacetate", atc: "V03AF11", cls: "Antidote (fluorouracil/capecitabine overdose); pyrimidine analogue",
  linked: [],
  forms: ["Oral granules 10 g packet (Vistogard) [FDA].", "Granules for hereditary orotic aciduria (Xuriden) are a separate product [UNVERIFIED-KNOWLEDGE]."],
  moa: "Provides uridine, which competes with fluorouracil metabolites for incorporation into RNA [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Emergency treatment of fluorouracil or capecitabine overdose, or early-onset severe toxicity, within 96 hours [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Same [FDA]."] },
  adult: [["Adult", "10 g (1 packet) orally every 6 hours for 20 doses [FDA]."], ["Taking", "Mix with 3–4 oz soft food, eat within 30 minutes, then drink water; do not chew granules; NG/G-tube if needed [FDA]."], ["Vomiting within 2 hours", "Give another full dose [FDA]."]],
  paed: { tiers: ["Children: 6.2 g/m² (not more than 10 g) every 6 hours for 20 doses [FDA]."], transition: "Adult dose at BSA about 1.6 m² and above.", calcNote: "g/m², capped at 10 g." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Start as soon as possible — within 96 hours of the last fluorouracil dose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Vomiting, nausea, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: ["Fluorouracil toxicity: blood counts, mucositis, diarrhoea [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("uridine-triacetate", "adult", "Fluorouracil overdose, adult — 10 g every 6 h × 20 doses", "PO", ADULT, "fixed", 10000, 6, { formulations: [{ form: "granules", strength: 10000, unit: "mg", whole: true }], rounding: "1 packet", flags: ["20 doses in total"] }),
    C("uridine-triacetate", "child", "Fluorouracil overdose, child — 6.2 g/m² every 6 h × 20 doses (max 10 g)", "PO", pop(null, 216, null, null), "mg_per_m2", 6200, 6, { caps: { max_single: 10000, unit: "mg" }, rounding: "0.1 g by scale", flags: ["20 doses in total"] })
  ],
  sources: [["FDA", "Vistogard (uridine triacetate) — FDA label (DailyMed)", T2_DM("269f7363-63ed-444e-85f1-f0009e44818b")], NEML_SRC],
  dose: { tagline: "Antidote for fluorouracil/capecitabine overdose — 10 g every 6 h for 20 doses (child 6.2 g/m²).",
    adult: [{ ind: "5-FU / capecitabine overdose", text: "10 g every 6 h × 20 doses.", calc: ["adult"] }],
    child: [{ ind: "5-FU overdose", text: "6.2 g/m² every 6 h × 20 doses (max 10 g).", calc: ["child"] }] }
});

FDB_M("ursodeoxycholic-acid", {
  inn: "Ursodeoxycholic acid (ursodiol)", atc: "A05AA02", cls: "Bile acid",
  linked: [],
  forms: ["Capsules 300 mg; tablets 250, 500 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Reduces cholesterol saturation of bile; cytoprotective in cholestasis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Dissolution of radiolucent gallbladder stones (selected patients) [FDA].", "Prevention of gallstones during rapid weight loss [FDA].", "Primary biliary cholangitis (tablets) [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Gallstone dissolution", "8–10 mg/kg/day in 2 or 3 divided doses; ultrasound every 6 months in year 1 [FDA]."], ["Gallstone prevention (rapid weight loss)", "300 mg twice daily (600 mg/day) [FDA]."], ["PBC", "13–15 mg/kg/day in 2–4 doses with food [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established for these labels [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "mg/kg/day." },
  adj: { renal: NEP, hepatic: "Monitor liver tests [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Aluminium antacids and bile-acid sequestrants reduce absorption [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Diarrhoea [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Calcified, radio-opaque or bile-pigment stones (dissolution) [FDA] [UNVERIFIED-KNOWLEDGE]", "Biliary obstruction, cholecystitis, pancreatitis, biliary fistula [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Diarrhoea, abdominal pain, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatic decompensation in advanced cirrhosis [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Gallbladder ultrasound every 6 months; liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("ursodeoxycholic-acid", "dissolve", "Gallstone dissolution — 8–10 mg/kg/day in 2–3 doses", "PO", ADULT, "mg_per_kg", 8, 12, { dose: { value: 8, value_max: 10, unit: "mg", per: "day" }, divided_doses: 2, formulations: [{ form: "capsule", strength: 300, unit: "mg", whole: true }], rounding: "nearest capsule" }),
    C("ursodeoxycholic-acid", "prevent", "Gallstone prevention (rapid weight loss) — 300 mg twice daily", "PO", ADULT, "fixed", 300, 12, { formulations: [{ form: "capsule", strength: 300, unit: "mg", whole: true }], rounding: "1 capsule" })
  ],
  sources: [["FDA", "Ursodiol capsules — FDA label (DailyMed)", T2_DM("00c47258-aef0-53f6-e063-6294a90af96f")], NEML_SRC],
  dose: { tagline: "Bile acid — 8–10 mg/kg/day to dissolve gallstones; 300 mg twice daily to prevent them.",
    adult: [{ ind: "Gallstone dissolution", text: "8–10 mg/kg/day in 2–3 doses.", calc: ["dissolve"] }, { ind: "Gallstone prevention", text: "300 mg twice daily.", calc: ["prevent"] }],
    child: [{ ind: "Children", text: "Not established for these labels." }] }
});

FDB_M("ustekinumab", {
  inn: "Ustekinumab", atc: "L04AC05", cls: "Anti-IL-12/23 monoclonal antibody",
  linked: [],
  forms: ["SC prefilled syringe 45 mg/0.5 mL and 90 mg/1 mL; IV vial 130 mg/26 mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds the p40 subunit of IL-12 and IL-23 [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Plaque psoriasis, psoriatic arthritis, Crohn's disease, ulcerative colitis [FDA]."], paed: ["Plaque psoriasis and psoriatic arthritis, 6 years and over [FDA]."] },
  adult: [["Psoriasis", "100 kg or less: 45 mg SC at 0 and 4 weeks, then every 12 weeks; over 100 kg: 90 mg [FDA]."], ["Psoriatic arthritis", "45 mg at 0, 4, then every 12 weeks (90 mg if co-existing psoriasis and over 100 kg) [FDA]."], ["Crohn's / UC induction", "Single IV dose by weight: 55 kg or less 260 mg; over 55–85 kg 390 mg; over 85 kg 520 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Crohn's / UC maintenance", "90 mg SC 8 weeks after induction, then every 8 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Psoriasis / PsA 6 years+: under 60 kg 0.75 mg/kg; 60–100 kg 45 mg; over 100 kg 90 mg — at 0, 4, then every 12 weeks [FDA]."], transition: "Adult doses from 60 kg.", calcNote: "Weight bands." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Screen for TB; avoid live vaccines (and BCG for a year before/after) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Clinically significant hypersensitivity to ustekinumab [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nasopharyngitis, upper respiratory infection, headache, fatigue, injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections, TB [FDA] [UNVERIFIED-KNOWLEDGE]", "Malignancy [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity, posterior reversible encephalopathy, non-infectious pneumonia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["TB screening; infections [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("ustekinumab", "pso45", "Psoriasis, 100 kg or less — 45 mg SC (0, 4, then every 12 weeks)", "SC", pop(216, null, null, 100.0001), "fixed", 45, 2016, { rounding: "1 syringe", flags: ["Second dose 4 weeks after the first"] }),
    C("ustekinumab", "ped45", "Psoriasis/PsA, 6–17 years 60–100 kg — 45 mg SC", "SC", pop(72, 216, 60, 100.0001), "fixed", 45, 2016, { rounding: "1 syringe", flags: ["At 0, 4, then every 12 weeks"] }),
    C("ustekinumab", "pso90", "Psoriasis, over 100 kg — 90 mg SC (0, 4, then every 12 weeks)", "SC", pop(72, null, 100.0001, null), "fixed", 90, 2016, { rounding: "1 syringe", flags: ["Second dose 4 weeks after the first"] }),
    C("ustekinumab", "pedlt60", "Psoriasis/PsA, 6 years+ under 60 kg — 0.75 mg/kg SC", "SC", pop(72, 216, null, 60), "mg_per_kg", 0.75, 2016, { rounding: "0.01 mL", flags: ["At 0, 4, then every 12 weeks"] })
  ],
  sources: [["FDA", "Ustekinumab-aekn — FDA label (DailyMed)", T2_DM("052a3fb2-21c3-4c4e-a01e-afdd1accd1cd")], NEML_SRC],
  dose: { tagline: "Anti-IL-12/23 — psoriasis 45 mg (90 mg if over 100 kg) at 0, 4 then every 12 weeks; IV induction for IBD.",
    adult: [{ ind: "Plaque psoriasis", text: "45 mg (90 mg if over 100 kg) at 0, 4, then every 12 weeks.", calc: ["pso45", "pso90"] }, { ind: "Crohn's / UC", text: "Weight-based IV induction, then 90 mg every 8 weeks." }],
    child: [{ ind: "Psoriasis / PsA 6 y+", text: "Under 60 kg 0.75 mg/kg; 60–100 kg 45 mg; over 100 kg 90 mg.", calc: ["pedlt60", "ped45", "pso90"] }] }
});

})(); // end T-2 scope

/* Brand names — BATCH T2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"trifarotene":{"IN":[["Aklief","Galderma India Pvt Ltd","Aklief Bottle Of 30Gm Cream"]],"BD":[["Zonyra","Ziska Pharmaceuticals Ltd","0.005%"],["Trifera","ACME Laboratories Ltd","0.005%"],["Lumiface","Incepta Pharmaceuticals Ltd","0.005%"]],"src":["https://pharmeasy.in/online-medicine-order/aklief-cream-30-g-4173244","https://medex.com.bd/brands/31009/zonyra-0005-cream","https://medex.com.bd/brands/36268/trifera-0005-cream","https://medex.com.bd/brands/37530/lumiface-0005-cream"]},"trifluoperazine":{"IN":[],"BD":[["Sizonil","Healthcare Pharmaceuticals Ltd","1 mg"],["Stela","Delta Pharma PLC","1 mg"],["Telazine","Eskayef Pharmaceuticals Ltd","1 mg"]],"src":["https://medex.com.bd/brands/4303/sizonil-1-mg-tablet","https://medex.com.bd/brands/4305/stela-1-mg-tablet","https://medex.com.bd/brands/4307/telazine-1-mg-tablet"]},"trifluridine":{"IN":[],"BD":[["Fludin","Aristopharma Ltd","1%"]],"src":["https://medex.com.bd/brands/15749/fludin-1-eye-drop"]},"trilaciclib":{"IN":[],"BD":[["Trisela","Beacon Pharmaceuticals PLC","300 mg/vial"]],"src":["https://medex.com.bd/brands/35205/trisela-300-mg-injection"]},"trimethoprim":{"IN":[["Bacstol","Ipca Laboratories","Bacstol 200Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/bacstol-200mg-tablet-15031"]},"triptorelin":{"IN":[["Decapeptyl","Ferring Pharmaceuticals Pvt Ltd","Decapeptyl 0.1Mg Pre Filled Syringe Of 1Ml Solution For Injection"],["Pamorelin","Dr Reddy's Laboratories Ltd","Pamorelin La 3.75Mg Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/decapeptyl-0-1mg-injection-42933","https://pharmeasy.in/online-medicine-order/pamorelin-la-3-75mg-inj-90828"]},"trospium":{"IN":[["Trofame Xr","Ranbaxy Laboratories (sun Pharma)","Trofame Xr Strip Of 10 Capsules"]],"BD":[["Trospi","UniMed UniHealth Pharmaceuticals Ltd","20 mg"]],"src":["https://pharmeasy.in/online-medicine-order/trofame-xr-cap-25526","https://medex.com.bd/brands/30108/trospi-20-mg-tablet"]},"trypan-blue":{"IN":[["Blu Dye","Indoco Remedies Ltd","Blu Dye Solution"]],"BD":[["Visi Blue","Incepta Pharmaceuticals Ltd","0.06%"],["TyBlue","Techno Drugs Ltd","0.06%"]],"src":["https://pharmeasy.in/online-medicine-order/blu-dye-solution-93574","https://medex.com.bd/brands/16729/visi-blue-006-eye-drop","https://medex.com.bd/brands/25149/tyblue-006-eye-drop"]},"tucatinib":{"IN":[["Tuccatinn","Bdr Pharmaceuticals Internationals Pvt Ltd","Tuccatinn 50Mg Bottle Of 60 Tablets"],["Tucaone","Msn Laboratories","Tucaone 150Mg Bottle Of 10 Tablets"],["Intuca","Intas Pharmaceuticals Ltd","Intuca 50Mg Strip Of 10 Tablets"]],"BD":[["Tucaxen","Everest Pharmaceuticals Ltd","150 mg"],["Tukanic","Ziska Pharmaceuticals Ltd","150 mg"],["Tucatin","Beacon Pharmaceuticals PLC","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/tuccatinn-50-mg-bottle-of-60-tablets-4828094","https://pharmeasy.in/online-medicine-order/tucaone-150mg-bottle-of-10-tablets-4798266","https://pharmeasy.in/online-medicine-order/intuca-50-mg-strip-of-10-tablets-4828092","https://medex.com.bd/brands/34159/tucaxen-150-mg-tablet","https://medex.com.bd/brands/36143/tukanic-150-mg-tablet","https://medex.com.bd/brands/38524/tucatin-150-mg-tablet"]},"ulipristal":{"IN":[],"BD":[["Peuli","Ziska Pharmaceuticals Ltd","30 mg"],["Ulicon","Eskayef Pharmaceuticals Ltd","30 mg"]],"src":["https://medex.com.bd/brands/16730/peuli-30-mg-tablet","https://medex.com.bd/brands/25153/ulicon-30-mg-tablet"]},"ulobetasol":{"IN":[["Halovate","Eris Life Sciences Pvt Ltd","Halovate 0.05% Tube Of 30Gm Ointment"],["Halox","Ranbaxy Laboratories (sun Pharma)","Halox 0.05% Bottle Of 30Ml Lotion"]],"BD":[["Halobet","Square Pharmaceuticals PLC","0.05%"],["Halocort","Advanced Chemical Industries PLC","0.05%"],["Ulticort","Incepta Pharmaceuticals Ltd","0.05%"]],"src":["https://pharmeasy.in/online-medicine-order/halovate-0-05-oint-30gm-11690","https://pharmeasy.in/online-medicine-order/halox-0-05-lotion-22887","https://medex.com.bd/brands/12650/halobet-005-cream","https://medex.com.bd/brands/12652/halocort-005-cream","https://medex.com.bd/brands/13038/ulticort-005-cream"]},"upadacitinib":{"IN":[["Upadoz","Msn Laboratories","Upadoz 15Mg Ecopack Bottle Of 30 Tablets"],["Upadacip","Cipla Limited","Upadacip 15Mg Strip Of 10 Tablets"],["Upadashine","Sun Pharma","Upadashine 15Mg Strip Of 10 Tablets"]],"BD":[["Upanib","Ziska Pharmaceuticals Ltd","15 mg"],["Upacit XR","Delta Pharma PLC","15 mg"],["Rematib","Drug International Ltd","15 mg"]],"src":["https://pharmeasy.in/online-medicine-order/upadoz-15mg-ecopack-bottle-of-30-tablets-4517491","https://pharmeasy.in/online-medicine-order/upadacip-15mg-strip-of-10-tablets-4756084","https://pharmeasy.in/online-medicine-order/upadashine-15mg-strip-of-10-tablets-4824402","https://medex.com.bd/brands/31087/upanib-15-mg-xr-tablet","https://medex.com.bd/brands/31168/upacit-xr-15-mg-xr-tablet","https://medex.com.bd/brands/33866/rematib-15-mg-xr-tablet"]},"ursodeoxycholic-acid":{"IN":[["Livetone","Cipla Limited","Livetone Ud 300Mg Strip Of 10 Tablets"],["Udinol","Knoll Healthcare Pvt Ltd","Udinol 300Mg Strip Of 10 Tablets"],["Ursolid","Leeford Healthcare Ltd","Ursolid 300Mg Strip Of 10 Tablets"]],"BD":[["Ursoren","Renata PLC","300 mg"],["Udihep","Mundipharma (BD) Pvt","150 mg"],["Surliv","Eskayef Pharmaceuticals Ltd","300 mg"]],"src":["https://pharmeasy.in/online-medicine-order/livetone-ud-300mg-strip-of-10-tablets-3767093","https://pharmeasy.in/online-medicine-order/udinol-300mg-tab-109983","https://pharmeasy.in/online-medicine-order/ursolid-300mg-strip-of-10-tablets-16407","https://medex.com.bd/brands/33982/ursoren-300-mg-tablet","https://medex.com.bd/brands/34014/udihep-150-mg-tablet","https://medex.com.bd/brands/35285/surliv-300-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
