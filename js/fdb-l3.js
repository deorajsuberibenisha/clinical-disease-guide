/* Clinical Disease Guide — Drug monograph database, batch L-3 (26 Nov 2026).
   L tail, part 2: loperamide … lutetium-177 PSMA (18 records). Ends L.
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js.
   Labels swapped in: prescription loperamide capsules (pack was an OTC softgel), oral loxapine capsules (pack was inhaled ADASUVE, kept as 2nd source).
   Loratadine has OTC labels only in the US — written from the CLARITIN chewable label. Lysine deferred (pack picked ibuprofen lysine). */
(function () { // L-3 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const STG_SRC = ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const L3_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("loperamide", {
  inn: "Loperamide", atc: "A07DA03", cls: "Peripheral opioid-receptor antidiarrhoeal",
  linked: [],
  forms: ["Capsules 2 mg (prescription) [FDA].", "OTC softgels/tablets 2 mg; OTC liquid 1 mg/5 mL [FDA]."],
  moa: "Acts on intestinal mu-opioid receptors; slows motility and increases fluid absorption [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism; effects of hepatic impairment not studied — watch for CNS toxicity [FDA]."],
  ind: { adult: ["Acute nonspecific diarrhoea (2 years and older) [FDA].", "Chronic diarrhoea of inflammatory bowel disease (adults) [FDA].", "Reducing ileostomy output [FDA]."], paed: ["Acute nonspecific diarrhoea 2 years and older [FDA]."] },
  adult: [["Acute diarrhoea (13 years and over)", "4 mg (2 capsules), then 2 mg after each unformed stool. Maximum 16 mg/day (8 capsules). Improvement usually within 48 h [FDA]."], ["Chronic diarrhoea", "4 mg, then 2 mg after each unformed stool until controlled; then reduce to individual need, once or divided. Usual maintenance 4–8 mg/day; maximum 16 mg/day [FDA]."], ["Fluids", "Replace fluid and electrolytes as needed [FDA]."]],
  paed: { tiers: ["2–5 years (13–20 kg): 1 mg three times on day 1 (3 mg/day) — use the 1 mg/5 mL liquid [FDA].", "6–8 years (20–30 kg): 2 mg twice on day 1 (4 mg/day) [FDA].", "8–12 years (over 30 kg): 2 mg three times on day 1 (6 mg/day) [FDA].", "After day 1: 1 mg/10 kg only after a loose stool; never more per day than the day-1 total [FDA].", "Under 2 years: contraindicated (respiratory depression, cardiac reactions) [FDA]."], transition: "13 years: adult dose.", calcNote: "Weight band for the first day." },
  adj: { renal: "No pharmacokinetic data [FDA].", hepatic: "Not studied — monitor for CNS toxicity [FDA].", pregnancy: NEP, other: "CYP3A4/CYP2C8/P-gp inhibitors raise levels; QT-prolonging drugs add cardiac risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Above recommended doses: life-threatening cardiac (QT prolongation, torsades, arrest), CNS and respiratory reactions [FDA].", animal: LD, manage: "Poison centre; naloxone for CNS/respiratory depression (may need repeat doses); cardiac monitoring [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Children under 2 years [FDA].", "Hypersensitivity [FDA].", "Abdominal pain without diarrhoea [FDA].", "Acute dysentery (blood in stool and high fever) [FDA].", "Acute ulcerative colitis [FDA].", "Bacterial enterocolitis from invasive organisms (Salmonella, Shigella, Campylobacter) [FDA].", "Pseudomembranous colitis from antibiotics [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Constipation, abdominal cramps, dizziness, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Torsades de pointes, cardiac arrest at high doses [FDA]", "Toxic megacolon in colitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Respiratory depression in young children [FDA]"] },
  monitor: ["Stop if no improvement in 48 h (acute) or 10 days at 16 mg (chronic) [FDA] [UNVERIFIED-KNOWLEDGE].", "Hydration [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary [UNVERIFIED-KNOWLEDGE].", stg: "Bhutan STG 2024 (palliative care, diarrhoea): loperamide 4 mg stat, then 2 mg after every unformed stool [BT-STG]." },
  calc: [
    C("loperamide", "adult", "Acute diarrhoea 13 y+ — 4 mg, then 2 mg after each loose stool", "PO", pop(156, null, null, null), "fixed", 4, null, { caps: { max_daily: 16, unit: "mg" }, formulations: [{ form: "cap", strength: 2, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Then 2 mg after each unformed stool", "Maximum 16 mg (8 capsules) a day"] }),
    { drug: "loperamide", indication_id: "child", label: "Acute diarrhoea 2–12 years — first-day dose by weight", route: "PO", population: pop(24, 156, null, null), basis: "band",
      bands: [{ min_weight_kg: 13, max_weight_kg: 20.0001, text: "1 mg three times on day 1 (3 mg/day) — 1 mg/5 mL liquid", daily: 3 }, { min_weight_kg: 20.0001, max_weight_kg: 30.0001, text: "2 mg twice on day 1 (4 mg/day)", daily: 4 }, { min_weight_kg: 30.0001, max_weight_kg: null, text: "2 mg three times on day 1 (6 mg/day)", daily: 6 }],
      dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "cap", strength: 2, unit: "mg/cap" }], rounding: "Liquid under 6 years", renal: [], flags: ["After day 1: 1 mg/10 kg only after a loose stool, never above the day-1 total", "Under 13 kg: not covered by the label table", "Under 2 years: contraindicated"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Loperamide hydrochloride capsules (prescription) — FDA label (DailyMed)", L3_DM("03c907d5-87f8-47a6-9544-5a24f5272739")], ["FDA", "Loperamide 2 mg softgels (OTC) — FDA label (DailyMed)", L3_DM("04a35525-ae8e-b41e-e063-6294a90ab10e")], NEML_SRC, STG_SRC],
  dose: { tagline: "Antidiarrhoeal — 4 mg then 2 mg per loose stool, max 16 mg; never under 2 years or in bloody diarrhoea; overdose stops the heart.",
    boxedTitle: "Torsades de pointes and sudden death", boxed: "Cases of Torsades de Pointes, cardiac arrest, and death have been reported with the use of a higher than recommended dosage of loperamide hydrochloride capsules. Loperamide hydrochloride capsules are contraindicated in pediatric patients less than 2 years of age. Avoid loperamide hydrochloride capsules dosages higher than recommended in adults and pediatric patients 2 years of age and older due to the risk of serious cardiac adverse reactions [FDA].",
    adult: [{ ind: "Acute diarrhoea", text: "4 mg, then 2 mg after each loose stool; max 16 mg/day.", calc: ["adult"] }, { ind: "Chronic (IBD) diarrhoea", text: "Same start; usual maintenance 4–8 mg/day." }],
    child: [{ ind: "Acute diarrhoea 2–12 years", text: "Day 1 by weight: 3, 4 or 6 mg/day divided.", calc: ["child"] }] }
});

FDB_M("loratadine", {
  inn: "Loratadine", atc: "R06AX13", cls: "Second-generation H1 antihistamine",
  linked: [],
  forms: ["Chewable tablets 5 mg (OTC) [FDA].", "Tablets 10 mg; syrup 5 mg/5 mL (OTC) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Long-acting peripheral H1-receptor antagonist; active metabolite desloratadine [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Hay fever / upper respiratory allergy symptoms: runny nose, sneezing, itchy watery eyes, itchy nose or throat [FDA]."], paed: ["Same, 2 years and older [FDA]."] },
  adult: [["Allergic symptoms (6 years and over)", "10 mg (2 × 5 mg chewable) once daily; not more than 10 mg in 24 h [FDA]."], ["Liver or kidney disease", "Ask a doctor — a different dose may be needed [FDA]."]],
  paed: { tiers: ["2 to under 6 years: 5 mg (1 chewable tablet) once daily; not more than 1 in 24 h [FDA].", "Under 2 years: ask a doctor [FDA]."], transition: "6 years: 10 mg.", calcNote: "Chew or crush completely." },
  adj: { renal: "Ask a doctor (dose may differ) [FDA].", hepatic: "Ask a doctor (dose may differ) [FDA].", pregnancy: "Ask a health professional [FDA].", other: "More than directed may cause drowsiness [FDA]." },
  tox: { human: "Drowsiness above the directed dose [FDA].", animal: "Rat and mouse oral LD50 over 5,000 mg/kg [PubChem].", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Allergy to the product or its ingredients [FDA]."],
  ae: { common: ["Headache, somnolence, fatigue, dry mouth [UNVERIFIED-KNOWLEDGE]."], serious: ["Allergic reaction [FDA]"] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("loratadine", "a6", "Allergy 6 years+ — 10 mg once daily", "PO", pop(72, null, null, null), "fixed", 10, 24, { caps: { max_single: 10, unit: "mg" }, formulations: [{ form: "chewable tab", strength: 5, unit: "mg/tab" }], rounding: "Whole chewable tablets", flags: ["Not more than 10 mg in 24 h"] }),
    C("loratadine", "c2", "Allergy 2 to under 6 years — 5 mg once daily", "PO", pop(24, 72, null, null), "fixed", 5, 24, { caps: { max_single: 5, unit: "mg" }, formulations: [{ form: "chewable tab", strength: 5, unit: "mg/tab" }], rounding: "Whole chewable tablet", flags: ["Not more than 1 chewable tablet in 24 h", "Under 2 years: ask a doctor"] })
  ],
  sources: [["FDA", "CLARITIN chewable (loratadine 5 mg) — FDA OTC label (DailyMed)", L3_DM("0371368b-dca6-af2f-e063-6394a90a0ac0")], ["PubChem", "Loratadine — PubChem compound summary (CID 3957)", "https://pubchem.ncbi.nlm.nih.gov/compound/3957"], NEML_SRC],
  dose: { tagline: "Non-sedating once-daily antihistamine — 10 mg (5 mg at 2–5 years).",
    adult: [{ ind: "Allergic rhinitis", text: "10 mg once daily.", calc: ["a6"] }],
    child: [{ ind: "6 years+", text: "10 mg once daily.", calc: ["a6"] }, { ind: "2–5 years", text: "5 mg once daily.", calc: ["c2"] }] }
});

FDB_M("lorlatinib", {
  inn: "Lorlatinib", atc: "L01ED05", cls: "ALK/ROS1 tyrosine kinase inhibitor (third generation)", risk: ONC,
  linked: [],
  forms: ["Tablets 25, 100 mg [FDA]."],
  moa: "Kinase inhibitor of ALK and ROS1 (and others), active against many ALK resistance mutations; brain-penetrant [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 24 hours [FDA].", "CYP3A substrate and inducer [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Metastatic ALK-positive non-small cell lung cancer (FDA-approved test) [FDA]."], paed: [NEP] },
  adult: [["Dose", "100 mg once daily, with or without food, until progression or unacceptable toxicity. Swallow whole [FDA]."], ["Reductions", "First 75 mg, second 50 mg once daily; stop if 50 mg not tolerated [FDA]."], ["Kidney", "CrCl 15 to under 30 (Cockcroft-Gault): 75 mg once daily [FDA]."], ["Liver", "Severe hepatic impairment: 50 mg once daily [FDA]."], ["Missed dose", "Take unless the next dose is due within 4 hours [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "CrCl 15–29: 75 mg [FDA]. Under 15: no label recommendation [NEP].", hepatic: "Severe: 50 mg [FDA].", pregnancy: "Embryo-fetal harm; do not breastfeed [FDA].", other: "Strong CYP3A inducers: contraindicated (serious hepatotoxicity) — stop them 3 half-lives before. Moderate inducers: avoid or raise dose. Strong inhibitors and fluconazole: avoid or reduce dose [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Strong CYP3A inducers [FDA]."],
  ae: { common: ["Oedema, peripheral neuropathy, weight gain, cognitive and mood effects, dyspnoea, fatigue, arthralgia, diarrhoea; hypercholesterolaemia, hypertriglyceridaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["CNS effects: seizures, psychosis, cognitive, mood (suicidal ideation), speech and sleep changes [FDA]", "Hyperlipidaemia [FDA]", "AV block [FDA]", "Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension, hyperglycaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lipids before and during [FDA] [UNVERIFIED-KNOWLEDGE].", "ECG for PR interval [FDA] [UNVERIFIED-KNOWLEDGE].", "Mood and cognition; BP; glucose [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("lorlatinib", "std", "ALK+ NSCLC — 100 mg once daily", "PO", ADULT, "fixed", 100, 24, { caps: { max_single: 100, unit: "mg" }, formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }, { form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Whole tablets — do not split", renal: [{ crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 75, note: "CrCl 15 to under 30: 75 mg once daily" }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "CrCl under 15: no dose in the label — not calculated [NEP]" }], flags: ["Severe hepatic impairment: 50 mg", "Reductions: 75 mg, then 50 mg"] })],
  sources: [["FDA", "LORBRENA (lorlatinib) tablets — FDA label (DailyMed)", L3_DM("2b34d62d-e02a-4af3-bc0d-1571dd4ee76d")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "ALK inhibitor for lung cancer — 100 mg daily; CNS and lipid effects; no strong CYP3A inducers.",
    adult: [{ ind: "ALK-positive metastatic NSCLC", text: "100 mg once daily (75 mg if CrCl 15–29).", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("loteprednol", {
  inn: "Loteprednol", atc: "S01BA14", cls: "Ophthalmic corticosteroid (soft ester)",
  linked: [],
  forms: ["Ophthalmic gel 0.38% (3.8 mg/g) — LOTEMAX SM [FDA].", "Other loteprednol 0.5% suspensions, gels and ointments exist [UNVERIFIED-KNOWLEDGE]."],
  moa: "Corticosteroid; inhibits the inflammatory response (oedema, fibrin, leucocyte migration, scarring) [FDA].",
  pk: [NEP],
  ind: { adult: ["Post-operative inflammation and pain after ocular surgery [FDA]."], paed: [NEP] },
  adult: [["After eye surgery", "Shake once (inverted bottle), then 1 drop into the conjunctival sac of the operated eye three times daily, from the day after surgery for the first 2 weeks [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Teratogenic in animals at oral doses; no adequate human studies [FDA].", other: "Used 10 days or longer: monitor intraocular pressure [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Most viral diseases of cornea and conjunctiva (epithelial herpes simplex keratitis, vaccinia, varicella) [FDA].", "Mycobacterial and fungal eye infections [FDA]."],
  ae: { common: ["Eye pain, raised IOP, irritation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Glaucoma with optic nerve damage on prolonged use [FDA]", "Posterior subcapsular cataract [FDA]", "Delayed healing, corneal perforation; secondary infection [FDA]"] },
  monitor: ["IOP if used 10 days or longer [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "LOTEMAX SM (loteprednol etabonate ophthalmic gel) 0.38% — FDA label (DailyMed)", L3_DM("6f9477b5-699f-4d3b-b9a6-0cc238266237")], NEML_SRC],
  dose: { tagline: "Ester eye steroid after eye surgery — 1 drop three times daily for 2 weeks; never in herpes keratitis.",
    adult: [{ ind: "Post-operative eye inflammation", text: "1 drop three times daily for 2 weeks." }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lotilaner", {
  inn: "Lotilaner", atc: "S01AX25", cls: "Ectoparasiticide eye drop (GABA-Cl channel inhibitor)",
  linked: [],
  forms: ["Ophthalmic solution 0.25% (2.5 mg/mL) [FDA]."],
  moa: "Inhibits mite-selective GABA-gated chloride channels → paralysis and death of Demodex mites; not a mammalian GABA channel inhibitor [FDA].",
  pk: ["Effective half-life 11 days [FDA].", "Low systemic exposure [FDA]."],
  ind: { adult: ["Demodex blepharitis [FDA]."], paed: [NEP] },
  adult: [["Demodex blepharitis", "1 drop in each eye twice daily (about 12 h apart) for 6 weeks. Other eye drops at least 5 minutes apart [FDA]."], ["Contact lenses", "Remove before; reinsert 15 minutes after [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "No human data; low systemic exposure; no malformations in animals [FDA].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Instillation-site stinging and burning (10%) [FDA]."], serious: ["Eye damage from contaminated solution [FDA]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "XDEMVY (lotilaner ophthalmic solution) 0.25% — FDA label (DailyMed)", L3_DM("ccd9e37c-654e-4e84-8c85-6523457df979")], NEML_SRC],
  dose: { tagline: "Anti-mite eye drop for Demodex blepharitis — twice daily for 6 weeks.",
    adult: [{ ind: "Demodex blepharitis", text: "1 drop each eye twice daily × 6 weeks." }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lovastatin", {
  inn: "Lovastatin", atc: "C10AA02", cls: "HMG-CoA reductase inhibitor (statin)",
  linked: [],
  forms: ["Tablets 10, 20, 40 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits HMG-CoA reductase, lowering LDL cholesterol [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — strong inhibitors raise levels and myopathy risk [FDA].", "Take with meals [FDA]."],
  ind: { adult: ["Dyslipidaemia with atherosclerotic risk, with diet; primary prevention and slowing coronary atherosclerosis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Heterozygous familial hypercholesterolaemia, 10–17 years [FDA]."] },
  adult: [["Dose", "Start 20 mg once daily with the evening meal (10 mg if smaller LDL reduction needed). Range 10–80 mg/day once or in two doses; maximum 80 mg/day. Adjust at 4 weeks or more [FDA]."], ["With danazol, diltiazem, dronedarone or verapamil", "Start 10 mg; do not exceed 20 mg/day [FDA]."], ["Severe renal insufficiency (CrCl under 30)", "Increases above 20 mg/day only with care [FDA]."]],
  paed: { tiers: ["10–17 years (HeFH): 10–40 mg/day; maximum 40 mg/day. Start 20 mg if 20% or more LDL reduction needed, otherwise 10 mg [FDA]."], transition: "Adult dosing from 18 years.", calcNote: "With the evening meal." },
  adj: { renal: "CrCl under 30: caution above 20 mg/day [FDA].", hepatic: "Active liver disease or unexplained persistent transaminase rise: contraindicated [FDA].", pregnancy: "Contraindicated in pregnancy and breastfeeding [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Strong CYP3A4 inhibitors (azoles, macrolides, HIV protease inhibitors, nefazodone): contraindicated. Grapefruit juice in large amounts: avoid [FDA]." },
  tox: { human: "Single doses up to 200 mg in volunteers without significant effects; accidental overdoses recovered [FDA].", animal: "Mice: median lethal dose over 15 g/m² [FDA].", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA].", "Active liver disease or unexplained persistent transaminase elevation [FDA].", "Strong CYP3A4 inhibitors [FDA].", "Pregnancy; breastfeeding [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, flatulence, abdominal pain, constipation, myalgia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myopathy and rhabdomyolysis (CK over 10 × ULN), rare deaths [FDA]", "Persistent transaminase rises [FDA]", "Immune-mediated necrotising myopathy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lipids; liver enzymes before and as indicated; CK if muscle symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 — the NEML statin is atorvastatin 10 mg [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    C("lovastatin", "adult", "Dyslipidaemia adult — start 20 mg with evening meal (range 10–80)", "PO", ADULT, "fixed", 20, 24, { caps: { max_daily: 80, unit: "mg" }, formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["10 mg if a smaller LDL reduction is needed", "With danazol, diltiazem, dronedarone, verapamil: max 20 mg/day", "CrCl under 30: caution above 20 mg/day"] }),
    C("lovastatin", "hefh", "HeFH 10–17 years — 10–40 mg once daily", "PO", pop(120, 216, null, null), "fixed", 10, 24, { dose: { value: 10, unit: "mg", per: "dose", value_max: 40 }, caps: { max_single: 40, unit: "mg" }, formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Start 20 mg if 20% or more LDL reduction needed"] })
  ],
  sources: [["FDA", "Lovastatin tablets — FDA label (DailyMed)", L3_DM("70e2bf86-4a78-4dfb-b6b1-8eb95f63684d")], NEML_SRC],
  dose: { tagline: "Older statin taken with the evening meal — 20 mg start, max 80 mg; never with strong CYP3A4 inhibitors.",
    adult: [{ ind: "Dyslipidaemia", text: "20 mg with the evening meal; 10–80 mg/day.", calc: ["adult"] }],
    child: [{ ind: "HeFH 10–17 years", text: "10–40 mg/day.", calc: ["hefh"] }] }
});

FDB_M("lovotibeglogene-autotemcel", {
  inn: "Lovotibeglogene autotemcel", atc: "B06AX06", cls: "Autologous gene therapy (lentiviral βA-T87Q-globin)",
  linked: [],
  forms: ["Cell suspension in 1–4 infusion bags (~20 mL each), 1.7–20 × 10⁶ cells/mL [FDA]."],
  moa: "Adds functional modified β-globin (βA-T87Q) genes to the patient's own stem cells via a lentiviral vector [FDA].",
  pk: [NEP],
  ind: { adult: ["Sickle cell disease with a history of vaso-occlusive events, 12 years and older [FDA]."], paed: ["12 years and older [FDA]."] },
  adult: [["Dose", "Single dose of at least 3 × 10⁶ CD34+ cells/kg after myeloablative conditioning (at least 48 h washout) [FDA]."], ["Process", "Stem cell mobilisation and apheresis to make the product; verify identity; no in-line filter or pump; give within 4 h of thawing, each bag over under 30 min [FDA]."], ["Antiretrovirals", "Stop at least 1 month before mobilisation until apheresis done [FDA]."]],
  paed: { tiers: ["12 years and older as adults [FDA]."], transition: "Same.", calcNote: "Cell product — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "No data; consider conditioning-agent risks [FDA].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Stomatitis, low blood counts, febrile neutropenia (conditioning-related) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Haematologic malignancy [FDA]", "Delayed platelet engraftment; neutrophil engraftment failure [FDA]", "Insertional oncogenesis [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["Blood counts at least every 6 months; integration site analysis at months 6, 12 and as needed [FDA].", "Platelets and bleeding until engraftment; ANC [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "LYFGENIA (lovotibeglogene autotemcel) suspension for IV infusion — FDA label (DailyMed)", L3_DM("0d1b475e-5781-2bd1-e063-6294a90a7311")], NEML_SRC],
  dose: { tagline: "One-time gene therapy for sickle cell disease — blood cancer has occurred: lifelong blood-count monitoring.",
    boxedTitle: "Hematologic malignancy", boxed: "Hematologic malignancy has occurred in patients treated with LYFGENIA. Monitor patients closely for evidence of malignancy through complete blood counts at least every 6 months and through integration site analysis at Months 6, 12, and as warranted [FDA].",
    adult: [{ ind: "Sickle cell disease (12 y+)", text: "Single infusion ≥3 × 10⁶ CD34+ cells/kg after myeloablation." }],
    child: [{ ind: "12 years and older", text: "As adults." }] }
});

FDB_M("loxapine", {
  inn: "Loxapine", atc: "N05AH01", cls: "Typical antipsychotic (dibenzoxazepine)",
  linked: [],
  forms: ["Capsules 5, 10, 25, 50 mg (as succinate) [FDA] [UNVERIFIED-KNOWLEDGE].", "Inhalation powder 10 mg single-use inhaler (ADASUVE, REMS) [FDA]."],
  moa: "Dopamine D2 and serotonin 5-HT2 antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Schizophrenia (capsules) [FDA].", "Acute agitation with schizophrenia or bipolar I disorder (inhaled, certified settings) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Schizophrenia (oral)", "10 mg twice daily (up to 50 mg/day if severely disturbed), increased fairly rapidly over 7–10 days. Usual 60–100 mg/day in 2–4 doses; over 250 mg/day not recommended. Maintenance often 20–60 mg/day [FDA]."], ["Acute agitation (inhaled)", "10 mg by oral inhalation by a healthcare professional; only one dose in 24 h; screen for lung disease and watch for bronchospasm for at least 1 hour [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "CNS depressants add sedation [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "CNS and cardiovascular depression up to profound hypotension, respiratory depression, unconsciousness [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Coma or severe drug-induced CNS depression (alcohol, barbiturates, narcotics) [FDA].", "Hypersensitivity to dibenzoxazepines [FDA].", "Inhaled: asthma, COPD or other lung disease with bronchospasm risk [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Sedation, extrapyramidal effects, dizziness, dry mouth [UNVERIFIED-KNOWLEDGE].", "Inhaled: dysgeusia, sedation, throat irritation [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased mortality in elderly dementia psychosis [FDA]", "Bronchospasm (inhaled) [FDA]", "Tardive dyskinesia, NMS [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Extrapyramidal signs; sedation; BP [UNVERIFIED-KNOWLEDGE].", "Inhaled: breathing and chest for at least 1 h [FDA]."],
  local: notBT,
  calc: [C("loxapine", "start", "Schizophrenia — start 10 mg twice daily", "PO", ADULT, "fixed", 10, 12, { caps: { max_daily: 250, unit: "mg" }, formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Severely disturbed: up to 50 mg/day to start", "Usual 60–100 mg/day in 2–4 doses; over 250 mg/day not recommended"] })],
  sources: [["FDA", "Loxapine capsules — FDA label (DailyMed)", L3_DM("2ce01a5d-b9bc-af4d-e063-6394a90af9e4")], ["FDA", "ADASUVE (loxapine) inhalation powder — FDA label (DailyMed)", L3_DM("50e11732-7387-452d-b3e6-db3a431d5c4a")], NEML_SRC],
  dose: { tagline: "Typical antipsychotic — oral 10 mg twice daily up to 60–100 mg/day; inhaled form only in certified sites (bronchospasm).",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis", boxed: "Increased Mortality in Elderly Patients with Dementia-Related Psychosis: Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. Analyses of seventeen placebo-controlled trials (modal duration of 10 weeks), largely in patients taking atypical antipsychotic drugs, revealed a risk of death in drug-treated patients of between 1.6 to 1.7 times the risk of death in placebo-treated patients. Over the course of a typical 10-week controlled trial, the rate of death in drug-treated patients was about 4.5%, compared to a rate of about 2.6% in the placebo group. Although the causes of death were varied, most of the deaths appeared to be either cardiovascular (e.g., heart failure, sudden death) or infectious (e.g., pneumonia) in nature. Observational studies suggest that, similar to atypical antipsychotic drugs, treatment with conventional antipsychotic drugs may increase mortality. The extent to which the findings of increased mortality in observational studies may be attributed to the antipsychotic drug as opposed to some characteristic(s) of the patients is not clear. Loxapine is not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia", text: "10 mg twice daily; usual 60–100 mg/day; max 250 mg/day.", calc: ["start"] }, { ind: "Acute agitation (inhaled)", text: "10 mg once in 24 h, certified setting." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("lubiprostone", {
  inn: "Lubiprostone", atc: "A06AX03", cls: "Chloride channel (ClC-2) activator",
  linked: [],
  forms: ["Capsules 8, 24 mcg [FDA]."],
  moa: "Locally activates ClC-2 chloride channels in the intestine → chloride-rich fluid secretion [FDA].",
  pk: ["Not measurable in plasma [FDA]."],
  ind: { adult: ["Chronic idiopathic constipation (adults) [FDA].", "Opioid-induced constipation in chronic non-cancer pain [FDA].", "IBS with constipation in women 18 years and older [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["CIC and OIC", "24 mcg twice daily with food and water [FDA]."], ["IBS-C (women)", "8 mcg twice daily [FDA]."], ["Liver (CIC/OIC)", "Child-Pugh B: 16 mcg twice daily; C: 8 mcg twice daily; escalate if tolerated [FDA]."], ["Liver (IBS-C)", "B: no change; C: 8 mcg once daily [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "See Child-Pugh table [FDA].", pregnancy: "May cause fetal harm (animal data) [FDA].", other: "Methadone may reduce effect [FDA]." },
  tox: { human: "168–192 mcg: vomiting, diarrhoea, stomach ache [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known or suspected mechanical GI obstruction [FDA]."],
  ae: { common: ["Nausea, diarrhoea, headache, abdominal pain and distension [FDA]."], serious: ["Severe diarrhoea [FDA]", "Syncope and hypotension after first dose [FDA]", "Dyspnoea [FDA]"] },
  monitor: ["Need for continued therapy [FDA]."],
  local: notBT,
  calc: [
    C("lubiprostone", "cic", "CIC / opioid constipation — 24 mcg twice daily", "PO", ADULT, "fixed", 24, 12, { dose: { value: 24, unit: "mcg", per: "dose" }, caps: { max_single: 24, unit: "mcg" }, formulations: [{ form: "cap", strength: 24, unit: "mcg/cap" }], rounding: "Whole capsules", flags: ["With food and water", "Child-Pugh B: 16 mcg; C: 8 mcg twice daily"] }),
    C("lubiprostone", "ibs", "IBS-C (women 18+) — 8 mcg twice daily", "PO", ADULT, "fixed", 8, 12, { dose: { value: 8, unit: "mcg", per: "dose" }, caps: { max_single: 8, unit: "mcg" }, formulations: [{ form: "cap", strength: 8, unit: "mcg/cap" }], rounding: "Whole capsules", flags: ["Child-Pugh C: 8 mcg once daily"] })
  ],
  sources: [["FDA", "Lubiprostone capsules — FDA label (DailyMed)", L3_DM("f4d506e0-1322-4fc4-e053-2995a90ac880")], NEML_SRC],
  dose: { tagline: "Chloride-channel laxative — 24 mcg twice daily (8 mcg in IBS-C) with food.",
    adult: [{ ind: "Chronic / opioid constipation", text: "24 mcg twice daily with food.", calc: ["cic"] }, { ind: "IBS-C (women)", text: "8 mcg twice daily.", calc: ["ibs"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("luliconazole", {
  inn: "Luliconazole", atc: "D01AC18", cls: "Topical azole antifungal",
  linked: [],
  forms: ["Cream 1% [FDA]."],
  moa: "Azole antifungal; appears to inhibit lanosterol demethylase and ergosterol synthesis [FDA].",
  pk: ["Weak CYP2C19 inhibitor at absorbed levels [FDA]."],
  ind: { adult: ["Interdigital tinea pedis, tinea cruris, tinea corporis (T. rubrum, E. floccosum) [FDA]."], paed: ["Tinea cruris studied in adolescents [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Tinea pedis (interdigital)", "Thin layer to the affected area and about 1 inch around, once daily for 2 weeks [FDA]."], ["Tinea cruris / corporis", "Once daily for 1 week [FDA]."], ["Not for", "Eye, mouth or vagina [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "No human data; no developmental effects in animals [FDA].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Application-site reactions (under 1%) [FDA]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Luliconazole cream 1% — FDA label (DailyMed)", L3_DM("7ccda3ba-9c98-468d-83c6-7f0cc7c88c33")], NEML_SRC],
  dose: { tagline: "Short-course topical azole — once daily for 1 week (groin/body) or 2 weeks (feet).",
    adult: [{ ind: "Tinea pedis", text: "Once daily × 2 weeks." }, { ind: "Tinea cruris / corporis", text: "Once daily × 1 week." }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lumasiran", {
  inn: "Lumasiran", atc: "A16AX18", cls: "siRNA against HAO1 (glycolate oxidase)",
  linked: [],
  forms: ["Injection 94.5 mg/0.5 mL single-dose vial (189 mg/mL) [FDA]."],
  moa: "RNA interference silences HAO1 mRNA in liver cells → less glycolate oxidase → less glyoxylate and oxalate [FDA].",
  pk: [NEP],
  ind: { adult: ["Primary hyperoxaluria type 1 — lower urinary and plasma oxalate [FDA]."], paed: ["All ages [FDA]."] },
  adult: [["Under 10 kg", "Loading 6 mg/kg monthly × 3; then 3 mg/kg once monthly [FDA]."], ["10 to under 20 kg", "Loading 6 mg/kg monthly × 3; then 6 mg/kg every 3 months [FDA]."], ["20 kg and above", "Loading 3 mg/kg monthly × 3; then 3 mg/kg every 3 months [FDA]."], ["Timing", "Maintenance starts 1 month after the last loading dose. Actual body weight. On haemodialysis: give after dialysis [FDA]."]],
  paed: { tiers: ["Same weight-band schedule [FDA]."], transition: "Same.", calcNote: "SC; actual body weight." },
  adj: { renal: "Haemodialysis: dose after dialysis [FDA].", hepatic: NEP, pregnancy: "No human data; no effects in rats/rabbits at high exposures [FDA].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Injection-site reactions (20% or more); abdominal pain [FDA]."], serious: [NEP] },
  monitor: ["Urinary and plasma oxalate [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("lumasiran", "load_s", "Loading (under 20 kg) — 6 mg/kg SC monthly × 3", "SC", pop(null, null, null, 20), "mg_per_kg", 6, null, { formulations: [{ form: "inj", strength: 189, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["Once monthly for 3 doses"] }),
    C("lumasiran", "load", "Loading (20 kg and above) — 3 mg/kg SC monthly × 3", "SC", pop(null, null, 20, null), "mg_per_kg", 3, null, { formulations: [{ form: "inj", strength: 189, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["Once monthly for 3 doses"] }),
    C("lumasiran", "m10", "Maintenance (under 10 kg) — 3 mg/kg SC once monthly", "SC", pop(null, null, null, 10), "mg_per_kg", 3, null, { formulations: [{ form: "inj", strength: 189, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["Once monthly, from 1 month after the last load"] }),
    C("lumasiran", "m1020", "Maintenance (10 to under 20 kg) — 6 mg/kg SC every 3 months", "SC", pop(null, null, 10, 20), "mg_per_kg", 6, null, { formulations: [{ form: "inj", strength: 189, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["Every 3 months, from 1 month after the last load"] }),
    C("lumasiran", "m20", "Maintenance (20 kg and above) — 3 mg/kg SC every 3 months", "SC", pop(null, null, 20, null), "mg_per_kg", 3, null, { formulations: [{ form: "inj", strength: 189, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["Every 3 months, from 1 month after the last load"] })
  ],
  sources: [["FDA", "OXLUMO (lumasiran) injection — FDA label (DailyMed)", L3_DM("16985a31-f5e4-4557-9266-fc78d4bc5055")], NEML_SRC],
  dose: { tagline: "siRNA for primary hyperoxaluria type 1 — weight-band loading then monthly or quarterly SC.",
    adult: [{ ind: "PH1 — loading", text: "3 mg/kg monthly × 3 (6 mg/kg if under 20 kg).", calc: ["load", "load_s"] }, { ind: "PH1 — maintenance", text: "3 mg/kg every 3 months (20 kg+).", calc: ["m20"] }],
    child: [{ ind: "Loading", text: "Under 20 kg: 6 mg/kg monthly × 3.", calc: ["load_s", "load"] }, { ind: "Maintenance", text: "Under 10 kg: 3 mg/kg monthly; 10–19 kg: 6 mg/kg every 3 months.", calc: ["m10", "m1020", "m20"] }] }
});

FDB_M("lumateperone", {
  inn: "Lumateperone", atc: "N05AD10", cls: "Atypical antipsychotic",
  linked: [],
  forms: ["Capsules 10.5, 21, 42 mg [FDA]."],
  moa: "Serotonin 5-HT2A and dopamine D2 receptor activity; exact mechanism unknown [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA]."],
  ind: { adult: ["Schizophrenia; bipolar I or II depression (alone or with lithium/valproate); adjunct in major depressive disorder [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: [NEP] },
  adult: [["All indications", "42 mg once daily, with or without food; no titration [FDA]."], ["CYP3A4 inhibitors", "Strong: 10.5 mg once daily. Moderate: 21 mg once daily [FDA]."], ["Liver", "Child-Pugh B or C: 21 mg once daily [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Moderate/severe: 21 mg [FDA].", pregnancy: "Third-trimester antipsychotic exposure: neonatal EPS/withdrawal [UNVERIFIED-KNOWLEDGE].", other: "CYP3A4 inducers: avoid [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Hypersensitivity to lumateperone (pruritus, rash, urticaria reported) [FDA]."],
  ae: { common: ["Somnolence/sedation, dizziness, nausea, dry mouth [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased mortality in elderly dementia psychosis [FDA]", "Suicidal thoughts in young people [FDA]", "NMS, tardive dyskinesia, metabolic changes, low white cells, orthostasis, seizures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight, glucose, lipids; mood and suicidality [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("lumateperone", "std", "Schizophrenia / bipolar depression — 42 mg once daily", "PO", ADULT, "fixed", 42, 24, { caps: { max_single: 42, unit: "mg" }, formulations: [{ form: "cap", strength: 42, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Strong CYP3A4 inhibitor: 10.5 mg; moderate: 21 mg", "Child-Pugh B/C: 21 mg"] })],
  sources: [["FDA", "CAPLYTA (lumateperone) capsules — FDA label (DailyMed)", L3_DM("db730b06-6351-47fd-8183-e61e61bbead5")], NEML_SRC],
  dose: { tagline: "Once-daily antipsychotic — 42 mg, no titration; lower with CYP3A4 inhibitors or liver disease.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis; and suicidal thoughts and behaviors", boxed: "Increased Mortality in Elderly Patients with Dementia-Related Psychosis: Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. CAPLYTA is not approved for the treatment of patients with dementia-related psychosis. Suicidal Thoughts and Behaviors: Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adults in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors. The safety and effectiveness of CAPLYTA have not been established in pediatric patients [FDA].",
    adult: [{ ind: "Schizophrenia / bipolar depression", text: "42 mg once daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lurasidone", {
  inn: "Lurasidone", atc: "N05AE05", cls: "Atypical antipsychotic",
  linked: [],
  forms: ["Tablets 20, 40, 60, 80, 120 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Dopamine D2 and serotonin 5-HT2A antagonist; 5-HT7 antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Must be taken with food (at least 350 calories) — absorption rises substantially [FDA].", "CYP3A4 substrate [FDA]."],
  ind: { adult: ["Schizophrenia (adults and adolescents 13–17) [FDA].", "Bipolar I depression — alone or with lithium/valproate (adults); alone (10–17 years) [FDA]."], paed: ["Schizophrenia 13–17 years; bipolar depression 10–17 years [FDA]."] },
  adult: [["Schizophrenia", "Start 40 mg once daily (no titration needed); 40–160 mg/day [FDA]."], ["Bipolar depression", "Start 20 mg once daily; 20–120 mg/day [FDA]."], ["Kidney (CrCl under 50)", "Start 20 mg; maximum 80 mg/day [FDA]."], ["Liver", "Moderate: start 20, max 80 mg. Severe: start 20, max 40 mg [FDA]."], ["Moderate CYP3A4 inhibitor", "Halve the dose; start 20, max 80 mg. Strong inhibitors or inducers: contraindicated [FDA]."]],
  paed: { tiers: ["Schizophrenia 13–17 years: 40 mg/day; 40–80 mg/day [FDA].", "Bipolar depression 10–17 years: 20 mg/day; 20–80 mg/day [FDA]."], transition: "18 years: adult ranges.", calcNote: "With food." },
  adj: { renal: "CrCl under 50: start 20, max 80 mg [FDA].", hepatic: "Moderate: max 80; severe: max 40 mg [FDA].", pregnancy: "Third-trimester antipsychotic exposure: neonatal EPS/withdrawal [UNVERIFIED-KNOWLEDGE].", other: "Strong CYP3A4 inhibitors (ketoconazole, clarithromycin, ritonavir) and strong inducers (rifampicin): contraindicated [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; ECG [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity (angioedema reported) [FDA].", "Strong CYP3A4 inhibitors [FDA].", "Strong CYP3A4 inducers [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Somnolence, akathisia, extrapyramidal symptoms, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased mortality in elderly dementia psychosis [FDA]", "Suicidal thoughts in young people [FDA]", "NMS, tardive dyskinesia, metabolic changes, hyperprolactinaemia, seizures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight, glucose, lipids; mood and suicidality; movement disorders [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("lurasidone", "scz", "Schizophrenia adult — 40–160 mg once daily with food", "PO", ADULT, "fixed", 40, 24, { dose: { value: 40, unit: "mg", per: "dose", value_max: 160 }, caps: { max_single: 160, unit: "mg" }, formulations: [{ form: "tab", strength: 40, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "reduce_dose", set_value: 20, set_value_max: 80, note: "CrCl under 50: start 20 mg, maximum 80 mg/day" }], flags: ["Start 40 mg — no titration needed", "With food (at least 350 kcal)"] }),
    C("lurasidone", "bpd", "Bipolar depression adult — 20–120 mg once daily with food", "PO", ADULT, "fixed", 20, 24, { dose: { value: 20, unit: "mg", per: "dose", value_max: 120 }, caps: { max_single: 120, unit: "mg" }, formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "reduce_dose", set_value: 20, set_value_max: 80, note: "CrCl under 50: start 20 mg, maximum 80 mg/day" }], flags: ["Start 20 mg", "With food (at least 350 kcal)"] }),
    C("lurasidone", "scz13", "Schizophrenia 13–17 years — 40–80 mg once daily", "PO", pop(156, 216, null, null), "fixed", 40, 24, { dose: { value: 40, unit: "mg", per: "dose", value_max: 80 }, caps: { max_single: 80, unit: "mg" }, formulations: [{ form: "tab", strength: 40, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["With food"] }),
    C("lurasidone", "bpd10", "Bipolar depression 10–17 years — 20–80 mg once daily", "PO", pop(120, 216, null, null), "fixed", 20, 24, { dose: { value: 20, unit: "mg", per: "dose", value_max: 80 }, caps: { max_single: 80, unit: "mg" }, formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["With food"] })
  ],
  sources: [["FDA", "Lurasidone hydrochloride tablets — FDA label (DailyMed)", L3_DM("083a1a52-5a13-4e28-8ef2-127ac4ce5b2d")], NEML_SRC],
  dose: { tagline: "Once-daily antipsychotic taken with a meal — schizophrenia 40–160 mg, bipolar depression 20–120 mg; max 80 mg if CrCl under 50.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis; and suicidal thoughts and behaviors", boxed: "Increased Mortality in Elderly Patients with Dementia-Related Psychosis: Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. Lurasidone hydrochloride tablets are not approved for the treatment of patients with dementia-related psychosis. Suicidal Thoughts and Behaviors: Antidepressants increased the risk of suicidal thoughts and behavior in pediatric and young adults in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors [FDA].",
    adult: [{ ind: "Schizophrenia", text: "40–160 mg once daily with food.", calc: ["scz"] }, { ind: "Bipolar depression", text: "20–120 mg once daily with food.", calc: ["bpd"] }],
    child: [{ ind: "Schizophrenia 13–17 years", text: "40–80 mg once daily.", calc: ["scz13"] }, { ind: "Bipolar depression 10–17 years", text: "20–80 mg once daily.", calc: ["bpd10"] }] }
});

FDB_M("lurbinectedin", {
  inn: "Lurbinectedin", atc: "L01XX69", cls: "Alkylating agent (DNA minor-groove binder)", risk: ONC,
  linked: [],
  forms: ["For injection 4 mg lyophilised powder vial [FDA]."],
  moa: "Binds DNA minor groove, forms adducts and inhibits oncogenic transcription [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Small cell lung cancer — with atezolizumab (maintenance) or alone after platinum (metastatic) per label [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: [NEP] },
  adult: [["Dose", "3.2 mg/m² IV over 60 minutes every 21 days until progression or unacceptable toxicity [FDA]."], ["Start only if", "ANC at least 1,500/mm³ and platelets at least 100,000/mm³ [FDA]."], ["Liver", "Moderate: 1.6 mg/m² every 21 days. Severe: avoid; if unavoidable 1.6 mg/m² [FDA]."], ["Supportive", "Central line recommended (extravasation necrosis). G-CSF to reduce febrile neutropenia. Steroid + 5-HT3 antagonist before cycle 1 [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Moderate 1.6 mg/m²; severe avoid [FDA].", pregnancy: "Embryo-fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Strong/moderate CYP3A inhibitors and inducers: avoid [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Myelosuppression, fatigue, nausea, raised liver enzymes and creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelosuppression, febrile neutropenia [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Extravasation tissue necrosis [FDA]", "Rhabdomyolysis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before each dose; liver tests [FDA]."],
  local: notBT,
  calc: [C("lurbinectedin", "std", "SCLC — 3.2 mg/m² IV over 60 min every 21 days", "IV", ADULT, "mg_per_m2", 3.2, 504, { formulations: [{ form: "vial", strength: 4, unit: "mg/vial" }], rounding: "Per pharmacy (reconstitute, then dilute)", infusion: { duration_h: 1 }, flags: ["ANC ≥1,500 and platelets ≥100,000 before each dose", "Moderate hepatic impairment: 1.6 mg/m²", "Central line recommended"] })],
  sources: [["FDA", "ZEPZELCA (lurbinectedin) for injection — FDA label (DailyMed)", L3_DM("632bb50c-3bcb-4c85-9056-fc33410550ae")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "SCLC chemotherapy — 3.2 mg/m² every 21 days; G-CSF and central line; halve in moderate liver disease.",
    adult: [{ ind: "Small cell lung cancer", text: "3.2 mg/m² IV over 1 h every 21 days.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("luspatercept", {
  inn: "Luspatercept", atc: "B03XA06", cls: "Erythroid maturation agent (TGF-β ligand trap)",
  linked: [],
  forms: ["For injection 25 mg and 75 mg lyophilised powder vials [FDA]."],
  moa: "Fusion protein that binds TGF-β superfamily ligands, reducing SMAD2/3 signalling and enabling late-stage red cell maturation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Anaemia in beta thalassaemia needing regular transfusions [FDA] [UNVERIFIED-KNOWLEDGE].", "Anaemia in lower-risk myelodysplastic syndromes (ESA-naïve or ESA-refractory/intolerant) [FDA]."], paed: [NEP] },
  adult: [["Beta thalassaemia", "1 mg/kg SC every 3 weeks; increase to a maximum of 1.25 mg/kg if no fall in transfusion burden [FDA]."], ["MDS", "1 mg/kg SC every 3 weeks; increase to a maximum of 1.75 mg/kg (ESA-naïve: to keep Hb 10–12 g/dL; refractory: if not transfusion-free) [FDA]."], ["Each dose", "Review Hb and transfusion record before each dose; at least 3 weeks between doses [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Embryo-fetal harm (animal data) [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, headache, musculoskeletal pain, dizziness, nausea, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thromboembolism in beta thalassaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension [FDA] [UNVERIFIED-KNOWLEDGE]", "Extramedullary haematopoietic masses [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Hb and transfusions before each dose; BP [FDA]."],
  local: notBT,
  calc: [C("luspatercept", "std", "Thalassaemia / MDS anaemia — start 1 mg/kg SC every 3 weeks", "SC", ADULT, "mg_per_kg", 1, 504, { formulations: [{ form: "vial", strength: 25, unit: "mg/vial" }, { form: "vial", strength: 75, unit: "mg/vial" }], rounding: "Per reconstituted vial", flags: ["Maximum 1.25 mg/kg (thalassaemia) or 1.75 mg/kg (MDS)", "Check Hb and transfusion record before each dose"] })],
  sources: [["FDA", "REBLOZYL (luspatercept-aamt) for injection — FDA label (DailyMed)", L3_DM("82f4d266-3f52-41eb-86ba-0abf3cf468e8")], NEML_SRC],
  dose: { tagline: "Red-cell maturation agent — 1 mg/kg SC every 3 weeks, titrated by Hb and transfusion need.",
    adult: [{ ind: "Beta thalassaemia / MDS anaemia", text: "1 mg/kg SC every 3 weeks; max 1.25 or 1.75 mg/kg.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lusutrombopag", {
  inn: "Lusutrombopag", atc: "B02BX07", cls: "Oral thrombopoietin receptor agonist",
  linked: [],
  forms: ["Tablets 3 mg [FDA]."],
  moa: "Thrombopoietin receptor agonist; stimulates platelet production [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Thrombocytopenia in chronic liver disease before a scheduled procedure [FDA]."], paed: [NEP] },
  adult: [["Before a procedure", "3 mg once daily for 7 days, starting 8–14 days before the procedure; procedure 2–8 days after the last dose [FDA]."], ["Not for", "Normalising platelets in chronic liver disease outside the procedure setting [FDA]."], ["Monitoring", "Platelet count before starting and not more than 2 days before the procedure [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Studied in chronic liver disease (Child-Pugh A/B) [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Portal vein thrombosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Platelets before and within 2 days of the procedure [FDA]."],
  local: notBT,
  calc: [C("lusutrombopag", "std", "Pre-procedure — 3 mg once daily × 7 days", "PO", ADULT, "fixed", 3, 24, { caps: { max_single: 3, unit: "mg" }, formulations: [{ form: "tab", strength: 3, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Start 8–14 days before; procedure 2–8 days after the last dose"] })],
  sources: [["FDA", "MULPLETA (lusutrombopag) tablets — FDA label (DailyMed)", L3_DM("a390aec3-6e77-45f8-95d3-d4b8c2eeee40")], NEML_SRC],
  dose: { tagline: "7-day platelet booster before procedures in chronic liver disease — 3 mg daily.",
    adult: [{ ind: "CLD thrombocytopenia before procedure", text: "3 mg daily × 7 days.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lutetium-lu-177-dotatate", {
  inn: "Lutetium (177Lu) oxodotreotide", atc: "V10XX04", cls: "Radioligand therapy (somatostatin-receptor targeted)", risk: "Radiopharmaceutical — trained staff and radiation safety",
  linked: [],
  forms: ["Injection 370 MBq/mL (10 mCi/mL) at calibration; 7.4 GBq (200 mCi) dose [FDA]."],
  moa: "Somatostatin-analogue peptide carrying beta-emitting lutetium-177 to SSTR-positive tumour cells [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Somatostatin receptor-positive gastroenteropancreatic neuroendocrine tumours [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: [NEP] },
  adult: [["Dose", "7.4 GBq (200 mCi) IV every 8 weeks (± 1 week) for 4 doses [FDA]."], ["Around each dose", "Antiemetic, then IV amino acid solution from 30 min before until at least 3 h after; do not cut the amino acids if the dose is reduced [FDA]."], ["Octreotide", "Long-acting octreotide 30 mg IM 4–24 h after each dose, then every 4 weeks until progression or 18 months [FDA]."], ["Before", "Check pregnancy status [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Radioactivity dose — no calculator." },
  adj: { renal: "Renal toxicity — amino acid infusion protects kidneys [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Fetal harm from radiation — exclude pregnancy [FDA].", other: "Stop long-acting somatostatin analogues before dosing per label [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Lymphopenia, nausea, vomiting, fatigue, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelosuppression; MDS/leukaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Renal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Neuroendocrine hormonal crisis [FDA] [UNVERIFIED-KNOWLEDGE]", "Radiation exposure risk [FDA]"] },
  monitor: ["Blood counts, kidney and liver function before each dose [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "BEXLUTRY (lutetium Lu 177 dotatate) injection — FDA label (DailyMed)", L3_DM("d7642094-9ec6-4927-8582-bbe60e5e74cc")], NEML_SRC],
  dose: { tagline: "Radioligand for SSTR-positive NETs — 7.4 GBq every 8 weeks × 4 with amino-acid kidney protection.",
    adult: [{ ind: "GEP-NET", text: "7.4 GBq IV every 8 weeks × 4 doses." }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lutetium-lu-177-vipivotide-tetraxetan", {
  inn: "Lutetium (177Lu) vipivotide tetraxetan", atc: "V10XX05", cls: "Radioligand therapy (PSMA-targeted)", risk: "Radiopharmaceutical — trained staff and radiation safety",
  linked: [],
  forms: ["Injection 1,000 MBq/mL (27 mCi/mL) at calibration; single-dose vial with 7.4 GBq [FDA]."],
  moa: "PSMA-binding ligand carrying beta-emitting lutetium-177 to prostate cancer cells [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["PSMA-positive metastatic prostate cancer (selected by PSMA PET) — castration-sensitive with an ARPI, or castration-resistant per label [FDA]."], paed: [NEP] },
  adult: [["Dose", "7.4 GBq (200 mCi) IV every 6 weeks for 6 doses, or until progression or unacceptable toxicity [FDA]."], ["Selection", "PSMA PET (e.g. LOCAMETZ) to confirm PSMA expression [FDA]."], ["Adjustments", "Interrupt, reduce or stop for adverse reactions per label [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Radioactivity dose — no calculator." },
  adj: { renal: "Renal toxicity — hydrate [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Not indicated in females [UNVERIFIED-KNOWLEDGE].", other: "Infertility possible; contraception for male patients [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, dry mouth, nausea, anaemia, decreased appetite, constipation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE]", "Renal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Radiation exposure risk [FDA]"] },
  monitor: ["Blood counts and kidney function before each dose [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "PLUVICTO (lutetium Lu 177 vipivotide tetraxetan) injection — FDA label (DailyMed)", L3_DM("14908037-2892-4d98-a053-253ce35afb1a")], NEML_SRC],
  dose: { tagline: "PSMA radioligand for metastatic prostate cancer — 7.4 GBq every 6 weeks × 6.",
    adult: [{ ind: "PSMA-positive prostate cancer", text: "7.4 GBq IV every 6 weeks × 6 doses." }],
    child: [{ ind: "Children", text: NEP }] }
});

})(); // end L-3 scope

/* Brand names — BATCH L3 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"loperamide":{"IN":[["Lomika","Avighna Medicare Pvt Ltd","Lomika 2Mg Strip Of 10 Capsules"],["Lopamide","Torrent Pharmaceuticals Ltd","Lopamide 2Mg Strip Of 10 Tablets"],["Roko","Cipla Gx","Roko 2Mg Strip Of 10 Capsules"]],"BD":[["Imotil","Square Pharmaceuticals PLC","2 mg"],["Lopamid","ACME Laboratories Ltd","2 mg"],["Loperin","Opsonin Pharma Ltd","2 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lomika-2mg-strip-of-10-tablets-3600216","https://pharmeasy.in/online-medicine-order/lopamide-2mg-tablet-26761","https://pharmeasy.in/online-medicine-order/roko-2mg-capsule-6337","https://medex.com.bd/brands/2281/imotil-2-mg-capsule","https://medex.com.bd/brands/2282/lopamid-2-mg-capsule","https://medex.com.bd/brands/2283/loperin-2-mg-capsule"]},"loratadine":{"IN":[["Alaspan","Piramal Healthcare Limited","Alaspan 10Mg Strip Of 10 Tablets"],["Alastin","Leeford Healthcare Ltd","Alastin 10Mg Strip Of 10 Tablets"],["Lorfast","Cadila Pharmaceuticals Limited","Lorfast Meltab 10Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/alaspan-10mg-strip-of-10-tablets-33343","https://pharmeasy.in/online-medicine-order/alastin-10mg-tablet-118244","https://pharmeasy.in/online-medicine-order/lorfast-10mg-meltab-10-s-5471"]},"lorlatinib":{"IN":[["Lorbriqua","Pfizer Product India Private Limited","Lorbriqua 100Mg Strip Of 10 Tablets (Pack Of 3)"]],"BD":[["Lorbrexen","Everest Pharmaceuticals Ltd","100 mg"],["Loranix","Beacon Pharmaceuticals PLC","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lorbriqua-100mg-strip-of-10-tablets-pack-of-3--3995784","https://medex.com.bd/brands/33127/lorbrexen-100-mg-tablet","https://medex.com.bd/brands/39787/loranix-100-mg-tablet"]},"loteprednol":{"IN":[["Lot","Entod Pharmaceuticals Pvt Ltd","Lot Ls Bottle Of 5Ml Eye Drops"],["Loteris","Ajanta Pharma Limited","Loteris 1% Bottle Of 5Ml Eye Drops"],["Lotel","Ajanta Pharma Limited","Lotel Bottle Of 5Ml Eye Gel"]],"BD":[["Lotepred DS","Aristopharma Ltd","1%"],["Lotepin","Opsonin Pharma Ltd","0.5%"],["Lotecare","Healthcare Pharmaceuticals Ltd","0.5%"]],"src":["https://pharmeasy.in/online-medicine-order/lot-ls-bottle-of-5ml-eye-drops-182725","https://pharmeasy.in/online-medicine-order/loteris-1-bottle-of-5ml-eye-drops-4069865","https://pharmeasy.in/online-medicine-order/lotel-gel-1576","https://medex.com.bd/brands/32129/lotepred-ds-1-ophthalmic-suspension","https://medex.com.bd/brands/34661/lotepin-05-eye-ointment","https://medex.com.bd/brands/35610/lotecare-05-ophthalmic-suspension"]},"lubiprostone":{"IN":[["Lubowel","Sun Pharma","Lubowel 24Mcg Bottle Of 15 Capsules"]],"BD":[["Lubilax","Beacon Pharmaceuticals PLC","8 mcg"],["Lubistone","Incepta Pharmaceuticals Ltd","24 mcg"],["Lubigut","Ziska Pharmaceuticals Ltd","8 mcg"]],"src":["https://pharmeasy.in/online-medicine-order/lubowel-24mcg-bottle-of-15-capsules-25726","https://medex.com.bd/brands/2411/lubilax-8-mcg-capsule","https://medex.com.bd/brands/20184/lubistone-24-mcg-capsule","https://medex.com.bd/brands/26730/lubigut-8-mcg-capsule"]},"luliconazole":{"IN":[["Lulitreat","Avighna Medicare Pvt Ltd","Lulitreat 1% Tube Of 30Gm Cream"],["Luliford","Leeford Healthcare Ltd","Luliford 1% Tube Of 30Gm Cream"],["Lulitec","Cipla Gx","Lulitec 1% Tube Of 20Gm Cream"]],"BD":[["Lulifast","Everest Pharmaceuticals Ltd","1%"],["Orlizole","Orion Pharma Ltd","1%"],["Lulitin","Sharif Pharmaceuticals Ltd","1%"]],"src":["https://pharmeasy.in/online-medicine-order/lulitreat-1-tube-of-30gm-gel-3553943","https://pharmeasy.in/online-medicine-order/luliford-1-cream-30gm-230643","https://pharmeasy.in/online-medicine-order/lulitec-1-cream-20gm-228657","https://medex.com.bd/brands/34259/lulifast-1-cream","https://medex.com.bd/brands/39964/orlizole-1-cream","https://medex.com.bd/brands/39649/lulitin-1-cream"]},"lurasidone":{"IN":[["Tablura","Cipla Limited","Tablura 40Mg Strip Of 10 Tablets"]],"BD":[["Luraprex","Square Pharmaceuticals PLC","40 mg"],["Luradox","Incepta Pharmaceuticals Ltd","20 mg"],["Latuda","Healthcare Pharmaceuticals Ltd","20 mg"]],"src":["https://pharmeasy.in/online-medicine-order/tablura-40mg-strip-of-10-tablets-195402","https://medex.com.bd/brands/16574/luraprex-40-mg-tablet","https://medex.com.bd/brands/21920/luradox-20-mg-tablet","https://medex.com.bd/brands/29283/latuda-20-mg-tablet"]},"lurbinectedin":{"IN":[],"BD":[["Lurbin","Eskayef Pharmaceuticals Ltd","4 mg/vial"]],"src":["https://medex.com.bd/brands/37315/lurbin-4-mg-injection"]},"luspatercept":{"IN":[["Rojuzda","Bristol Myers Squibb India Pvt Ltd","Rojuzda 25 Mg Injection 1 No's"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/rojuzda-25-mg-injection-1-no-s-4115040"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
