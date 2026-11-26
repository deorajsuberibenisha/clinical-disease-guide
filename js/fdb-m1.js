/* Clinical Disease Guide — Drug monograph database, block M, batch M-1 (25–26 Nov 2026).
   Macimorelin … mercaptopurine. Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed text "@LABEL" is filled from the saved FDA label by _work/tools/fdb-boxed-fill.js.
   Deferred: magnesium carbonate (pack picked Renacidin irrigation), magnesium chloride (pack picked a dialysis fluid). */
(function () { // M-1 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const CHEMO = "High-alert — chemotherapeutic agents (parenteral and oral) are on the ISMP list of high-alert medications [ISMP]";
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const M1_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };

FDB_M("macimorelin", {
  inn: "Macimorelin", atc: "V04CD06", cls: "Growth hormone secretagogue receptor agonist (diagnostic)",
  linked: [],
  forms: ["Granules for oral solution, 60 mg pouch [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stimulates pituitary GH release through the ghrelin (GHS) receptor; a low GH peak indicates deficiency [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP3A4 inducers lower levels and can give false-positive results [FDA]."],
  ind: { adult: ["Diagnosis of adult growth hormone deficiency [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Test dose", "0.5 mg/kg as one oral dose after fasting at least 8 hours; prepared and given by a health professional [FDA]."], ["Before the test", "Stop GH therapy at least 1 week before; stop strong CYP3A4 inducers; avoid drugs that affect GH secretion; replace other pituitary hormone deficiencies first [FDA]."], ["Limit", "Not established for BMI over 40 kg/m² [FDA]."]],
  paed: { tiers: ["Not established in children [FDA]."], transition: "—", calcNote: "Single mg/kg test dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "QT prolongation — avoid with QT-prolonging drugs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Symptomatic and supportive [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Dysgeusia, dizziness, headache, fatigue, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["GH samples at the times in the label [FDA]."],
  local: notBT,
  calc: [
    { drug: "macimorelin", indication_id: "test", label: "AGHD test — 0.5 mg/kg once after an 8-hour fast", route: "PO", population: ADULT, basis: "mg_per_kg", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "0.5 mg", renal: [], flags: ["Fast at least 8 hours", "Stop GH therapy 1 week before"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Macrilen (macimorelin) — FDA label (DailyMed)", M1_DM("aeb30f1a-4815-47ae-a2cb-b6b4e26372e1")], NEML_SRC],
  dose: { tagline: "Oral test for adult growth hormone deficiency — 0.5 mg/kg once.",
    adult: [{ ind: "AGHD test", text: "0.5 mg/kg by mouth once after an 8-hour fast.", calc: ["test"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("macitentan", {
  inn: "Macitentan", atc: "C02KX04", cls: "Endothelin receptor antagonist",
  linked: [],
  forms: ["Tablet 10 mg [FDA]."],
  moa: "Blocks endothelin ETA and ETB receptors, reducing pulmonary vasoconstriction [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP3A4 inducers and inhibitors change levels — avoid [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Pulmonary arterial hypertension (WHO Group I) to reduce disease progression and hospitalisation [FDA]."], paed: ["Not established for PAH [FDA]."] },
  adult: [["PAH", "10 mg once daily; higher doses not studied and not recommended [FDA]."], ["Pregnancy testing", "Exclude pregnancy before starting, monthly during treatment and 1 month after stopping [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: "Not recommended on dialysis [UNVERIFIED-KNOWLEDGE].", hepatic: "Do not start with AST/ALT over 3× ULN; stop if liver injury [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated [FDA].", other: "Effective contraception during and for 1 month after treatment [FDA]." },
  tox: { human: "Headache, nausea, vomiting at 600 mg [FDA].", animal: LD, manage: "Standard supportive care; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Anaemia, nasopharyngitis, headache, bronchitis, influenza, urinary infection [FDA]."], serious: ["Embryo-fetal toxicity [FDA]", "Hepatotoxicity [FDA]", "Fluid retention [FDA]", "Fall in haemoglobin [FDA]", "Pulmonary oedema with veno-occlusive disease [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Pregnancy tests; liver tests; haemoglobin at baseline and as indicated [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Opsumit (macitentan) — FDA label (DailyMed)", M1_DM("1e484a50-55db-4b85-8c57-6cd1b0353abd")], NEML_SRC],
  dose: { tagline: "Oral ERA for pulmonary arterial hypertension — never in pregnancy.",
    boxedTitle: "Embryo-fetal toxicity", boxed: "OPSUMIT is contraindicated for use during pregnancy because it may cause fetal harm based on animal data. Therefore, for females of reproductive potential, exclude pregnancy before the start of treatment with OPSUMIT. Advise use of effective contraception before the initiation of treatment, during treatment, and for one month after stopping treatment with OPSUMIT. When pregnancy is detected, discontinue OPSUMIT as soon as possible [FDA].",
    adult: [{ ind: "PAH", text: "10 mg once daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mafenide", {
  inn: "Mafenide acetate", atc: "D06BA03", cls: "Topical sulfonamide-type antibacterial (burns)",
  linked: [["Burns — adults", "Topical antibacterial [FDA]", "burns-adult"], ["Burns — children", "[FDA]", "burns-child"]],
  forms: ["Cream 85 mg/g [FDA] [UNVERIFIED-KNOWLEDGE]; powder for topical solution 5% [UNVERIFIED-KNOWLEDGE]."],
  moa: "Bacteriostatic against many Gram-positive and Gram-negative organisms including Pseudomonas; penetrates eschar [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorbed through burns; metabolite inhibits carbonic anhydrase (metabolic acidosis) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Adjunctive therapy of second- and third-degree burns [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Burns", "After cleansing and debridement, apply with a sterile gloved hand once or twice daily about 1/16 inch thick; keep burns covered at all times; dressings usually not needed [FDA]."], ["Duration", "Until healing progresses well or the site is ready for grafting [FDA]."]],
  paed: { tiers: ["Same application [FDA]."], transition: "Same.", calcNote: "No calculator." },
  adj: { renal: "Acidosis risk is higher with impaired kidney function [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "If acidosis is hard to control, stop for 24–48 hours while continuing buffering [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Metabolic acidosis with hyperventilation [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; buffer; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to mafenide [FDA]."],
  ae: { common: ["Pain or burning on application, rash, itching [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Metabolic acidosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Fatal haemolytic anaemia with DIC in G6PD deficiency [FDA]", "Bone marrow depression; porphyria [FDA]"] },
  monitor: ["Acid–base status and respiratory rate in large burns [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Sulfamylon (mafenide acetate) cream — FDA label (DailyMed)", M1_DM("008eaa23-8f19-4e39-85ff-540c1c834a9e")], NEML_SRC],
  dose: { tagline: "Burn cream that penetrates eschar — watch for metabolic acidosis.",
    adult: [{ ind: "Burns", text: "Thin layer once or twice daily; keep covered at all times." }],
    child: [{ ind: "Burns", text: "Same." }] }
});

FDB_M("malathion", {
  inn: "Malathion (0.5% lotion)", atc: "P03AX03", cls: "Organophosphate pediculicide",
  linked: [],
  forms: ["Lotion 0.5% in isopropyl alcohol (flammable) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits lice cholinesterase [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Head lice and their eggs (Pediculus humanus capitis) [FDA]."], paed: ["6 years and older [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Head lice", "Apply to DRY hair just enough to wet hair and scalp; let dry naturally, uncovered, no heat; shampoo after 8–12 hours; comb out nits [FDA]."], ["Repeat", "If lice still present after 7–9 days, apply once more [FDA]."]],
  paed: { tiers: ["Not established under 6 years; contraindicated in neonates and infants [FDA]."], transition: "Same.", calcNote: "No calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Flammable — no hair dryers, open flames or smoking until dry [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Swallowed: cholinergic poisoning plus isopropyl alcohol toxicity [FDA].", animal: LD, manage: "Treat as organophosphate poisoning (atropine, pralidoxime) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Neonates and infants [FDA].", "Sensitivity to malathion or vehicle [FDA]."],
  ae: { common: ["Scalp irritation [FDA]."], serious: ["Chemical (second-degree) burns [FDA]", "Conjunctivitis from eye contact [FDA]"] },
  monitor: ["None. [NEP]"],
  local: notBT,
  calc: [],
  sources: [["FDA", "Ovide (malathion) lotion 0.5% — FDA label (DailyMed)", M1_DM("945f46fa-4b79-49fd-a890-477f251e2164")], NEML_SRC],
  dose: { tagline: "Head-lice lotion on dry hair for 8–12 hours — flammable.",
    adult: [{ ind: "Head lice", text: "Apply to dry hair; wash out after 8–12 hours; repeat after 7–9 days if needed." }],
    child: [{ ind: "6 years and older", text: "Same; not for infants." }] }
});

FDB_M("maraviroc", {
  inn: "Maraviroc", atc: "J05AX09", cls: "CCR5 co-receptor antagonist (antiretroviral)",
  linked: [["HIV — adults", "Only CCR5-tropic virus [FDA]", "hiv-adult"]],
  forms: ["Tablets 25, 75, 150, 300 mg; oral solution 20 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks the CCR5 co-receptor so CCR5-tropic HIV-1 cannot enter cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate — the dose depends on other drugs [FDA]."],
  ind: { adult: ["CCR5-tropic HIV-1 with other antiretrovirals [FDA]."], paed: ["Children weighing at least 2 kg [FDA]."] },
  adult: [["With potent CYP3A inhibitors (most PIs except tipranavir/ritonavir)", "150 mg twice daily [FDA]."], ["With NRTIs, tipranavir/ritonavir, nevirapine, raltegravir and other non-interacting drugs", "300 mg twice daily [FDA]."], ["With potent or moderate CYP3A inducers (e.g. efavirenz) without a potent inhibitor", "600 mg twice daily [FDA]."], ["Before starting", "Tropism test — not for dual/mixed or CXCR4-tropic virus [FDA]."]],
  paed: { tiers: ["2 kg and over: twice daily by weight and other drugs, not above the adult dose — use the label table [FDA]."], transition: "Adult dose.", calcNote: "Dose depends on interacting drugs — no calculator." },
  adj: { renal: "Contraindicated with CrCl under 30 if also on potent CYP3A inhibitors or inducers; dose changes in renal impairment per label [FDA].", hepatic: "Caution — hepatotoxicity [FDA].", pregnancy: NEP, other: "Postural hypotension, especially in kidney impairment [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Postural hypotension (dose-limiting at 600 mg) [FDA].", animal: LD, manage: "Supportive; lie flat [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe kidney impairment or ESRD (CrCl under 30) with potent CYP3A inhibitors or inducers [FDA]."],
  ae: { common: ["Upper respiratory infection, cough, fever, rash, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity with allergic features [FDA]", "Severe skin reactions (SJS/TEN, DRESS) [FDA]", "Cardiovascular events [FDA]"] },
  monitor: ["Liver tests; rash; blood pressure [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Selzentry (maraviroc) — FDA label (DailyMed)", M1_DM("3c52dddd-0457-41cd-99e0-d30d4fd00ec5")], NEML_SRC],
  dose: { tagline: "Entry inhibitor for CCR5-tropic HIV — dose set by the other drugs taken.",
    boxedTitle: "Hepatotoxicity", boxed: "Hepatotoxicity has been reported with use of SELZENTRY. Severe rash or evidence of a systemic allergic reaction (e.g., fever, eosinophilia, or elevated IgE) prior to the development of hepatotoxicity may occur. Patients with signs or symptoms of hepatitis or allergic reaction following use of SELZENTRY should be evaluated immediately [FDA].",
    adult: [{ ind: "HIV (CCR5-tropic)", text: "150, 300 or 600 mg twice daily depending on CYP3A inhibitors or inducers." }],
    child: [{ ind: "2 kg and over", text: "By weight and other drugs (label table)." }] }
});

FDB_M("maribavir", {
  inn: "Maribavir", atc: "J05AX10", cls: "CMV pUL97 kinase inhibitor",
  linked: [],
  forms: ["Tablet 200 mg [FDA]."],
  moa: "Inhibits CMV UL97 kinase, blocking viral DNA replication and maturation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate — inducers need higher doses [FDA]."],
  ind: { adult: ["Post-transplant CMV infection or disease refractory to ganciclovir, valganciclovir, cidofovir or foscarnet [FDA]."], paed: ["12 years and older and at least 35 kg [FDA]."] },
  adult: [["Refractory CMV", "400 mg (two 200 mg tablets) twice daily with or without food [FDA]."], ["With carbamazepine or rifabutin", "800 mg twice daily [FDA]."], ["With phenytoin or phenobarbital", "1,200 mg twice daily [FDA]."], ["Administration", "Whole, crushed or dispersed in water; also by NG tube size 10 Fr or larger [FDA]."]],
  paed: { tiers: ["12 years and older and 35 kg or more: adult dose [FDA]."], transition: "Adult dose.", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "No adjustment for mild–moderate [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Do not give with ganciclovir or valganciclovir (antagonism) [UNVERIFIED-KNOWLEDGE]. Raises tacrolimus, ciclosporin, sirolimus and everolimus levels — monitor [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "No antidote; symptomatic care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Taste disturbance, nausea, diarrhoea, vomiting, fatigue [FDA]."], serious: ["Virologic failure with resistance [UNVERIFIED-KNOWLEDGE]", "Raised immunosuppressant levels [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["CMV DNA; immunosuppressant levels [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Livtencity (maribavir) — FDA label (DailyMed)", M1_DM("c94fc2c5-e840-4f18-b7d8-d5eacb26d3a0")], NEML_SRC],
  dose: { tagline: "Oral treatment for refractory CMV after transplant.",
    adult: [{ ind: "Refractory CMV", text: "400 mg twice daily (800–1,200 mg twice daily with enzyme inducers)." }],
    child: [{ ind: "12 years+, 35 kg+", text: "Adult dose." }] }
});

FDB_M("mebendazole", {
  inn: "Mebendazole", atc: "P02CA01", cls: "Benzimidazole anthelmintic",
  linked: [],
  forms: ["Chewable tablet 500 mg (US) [FDA]; 100 mg tablets elsewhere [UNVERIFIED-KNOWLEDGE].", "Bhutan: albendazole is the NEML anthelmintic; mebendazole is not listed [BT-NEML]."],
  moa: "Binds parasite tubulin, blocking glucose uptake [UNVERIFIED-KNOWLEDGE].",
  pk: ["Poorly absorbed; acts in the gut [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Roundworm (Ascaris) and whipworm (Trichuris) [FDA]."], paed: ["1 year and older [FDA]."] },
  adult: [["Roundworm, whipworm", "500 mg chewable tablet once, chewed completely [FDA]."], ["Other regimen", "100 mg twice daily for 3 days (100 mg tablets) [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["1 year and older: 500 mg once; for those who cannot chew, soften the tablet in 2–3 mL water on a spoon [FDA]."], transition: "Same dose.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Avoid in the first trimester [UNVERIFIED-KNOWLEDGE].", other: "Metronidazole with mebendazole: SJS/TEN reported — avoid [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "High or prolonged doses: alopecia, raised transaminases, hepatitis, agranulocytosis, neutropenia [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to mebendazole or excipients [FDA]."],
  ae: { common: ["Anorexia, abdominal pain, diarrhoea, flatulence, nausea, vomiting, rash [FDA]."], serious: ["Seizures in young children [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia and agranulocytosis with long use [FDA]", "SJS/TEN with metronidazole [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts and liver tests with prolonged high doses [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Vermox Chewable (mebendazole) 500 mg — FDA label (DailyMed)", M1_DM("a720c424-517a-461b-8e13-6c37caf8aa3f")], NEML_SRC],
  dose: { tagline: "Single 500 mg chewable dose for roundworm and whipworm.",
    adult: [{ ind: "Roundworm, whipworm", text: "500 mg chewed once." }],
    child: [{ ind: "1 year and older", text: "500 mg chewed once (or softened in water)." }] }
});

FDB_M("mecamylamine", {
  inn: "Mecamylamine", atc: "C02BB01", cls: "Ganglionic blocker (antihypertensive)",
  linked: [],
  forms: ["Tablet 2.5 mg [FDA]."],
  moa: "Blocks nicotinic receptors at autonomic ganglia [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted; acid urine speeds and alkaline urine slows elimination [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Moderately severe to severe essential hypertension; uncomplicated malignant hypertension [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "2.5 mg twice daily [FDA]."], ["Titration", "Increase by 2.5 mg at intervals of at least 2 days, to just below the dose causing mild postural hypotension [FDA]."], ["Usual", "About 25 mg/day in 3 divided doses; some need only 2.5 mg/day [FDA]."], ["Timing", "Give after meals consistently; larger doses at noon and evening, small morning dose [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "Titrated — no calculator." },
  adj: { renal: "Use with great discretion, if at all, with rising urea or creatinine [FDA].", hepatic: NEP, pregnancy: NEP, other: "Do not stop abruptly — rebound hypertension [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension progressing to collapse, ileus, urinary retention, mydriasis, dry mouth [FDA].", animal: LD, manage: "Supportive; pressors for hypotension [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Mild, moderate or labile hypertension; coronary insufficiency or recent myocardial infarction [FDA].", "Uraemia; glaucoma; organic pyloric stenosis; unreliable patients; patients on sulfonamides or antibiotics [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Constipation, dry mouth, postural dizziness, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Paralytic ileus [FDA]", "Orthostatic hypotension and syncope [FDA] [UNVERIFIED-KNOWLEDGE]", "Urinary retention [FDA]", "Tremor, choreiform movements, seizures, psychosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Standing blood pressure at peak effect; bowel habit [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Vecamyl (mecamylamine) — FDA label (DailyMed)", M1_DM("0b149023-f7a8-442d-ac69-295df8e66ed3")], NEML_SRC],
  dose: { tagline: "Old ganglionic blocker for severe hypertension — watch for ileus and postural drops.",
    adult: [{ ind: "Severe hypertension", text: "2.5 mg twice daily, up by 2.5 mg every 2 days or more; average 25 mg/day in 3 doses." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mecasermin", {
  inn: "Mecasermin (recombinant IGF-1)", atc: "H01AC03", cls: "Insulin-like growth factor-1",
  linked: [],
  forms: ["Injection 10 mg/mL multi-dose vial (contains benzyl alcohol) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Replaces IGF-1, the hormone that mediates growth hormone's effect on growth [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Insulin-like glucose-lowering effect [FDA]."],
  ind: { adult: ["Not indicated (closed epiphyses) [FDA]."], paed: ["Growth failure from 2 years with severe primary IGF-1 deficiency or GH gene deletion with neutralising GH antibodies [FDA]."] },
  adult: [["Adults", "Not indicated once epiphyses are closed [FDA]."]],
  paed: { tiers: ["Start 0.04–0.08 mg/kg SC twice daily; if tolerated for at least 1 week, increase by 0.04 mg/kg per dose; maximum 0.12 mg/kg twice daily [FDA].", "Give shortly before or after a meal or snack; skip the dose if the meal is missed [FDA] [UNVERIFIED-KNOWLEDGE].", "Pre-meal glucose checks when starting; reduce dose for hypoglycaemia despite adequate food [FDA]."], transition: "Stop at epiphyseal closure.", calcNote: "mg/kg twice daily." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Benzyl alcohol — not for neonates (gasping syndrome) [FDA]. Not a substitute for GH [FDA]." },
  tox: { human: "Hypoglycaemia [FDA].", animal: LD, manage: "Oral glucose or food; IV glucose or glucagon if unconscious [FDA]." },
  contra: ["Hypersensitivity to mecasermin or excipients [FDA].", "Closed epiphyses [FDA].", "Active or suspected malignancy [FDA]."],
  ae: { common: ["Hypoglycaemia, injection-site lipohypertrophy, tonsillar hypertrophy, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hypoglycaemia [FDA]", "Anaphylaxis [FDA]", "Intracranial hypertension [FDA]", "Slipped capital femoral epiphysis; scoliosis progression [FDA]", "Malignant neoplasia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Pre-meal glucose at start; fundoscopy; tonsils; hip and knee symptoms [FDA]."],
  local: notBT,
  calc: [
    { drug: "mecasermin", indication_id: "start", label: "IGF-1 deficiency — start 0.04–0.08 mg/kg SC twice daily", route: "SC", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.04, unit: "mg", per: "dose", value_max: 0.08 }, interval_h: 12, divided_doses: null, caps: { max_mg_per_kg_dose: 0.12 }, weight_basis: "actual", formulations: [{ form: "vial", strength: 10, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Give with a meal or snack", "Maximum 0.12 mg/kg twice daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Increlex (mecasermin) — FDA label (DailyMed)", M1_DM("d5b2b0e1-c523-468d-9a0b-4ae4e4a8dbce")], NEML_SRC],
  dose: { tagline: "IGF-1 for severe primary IGF-1 deficiency in children — give with food.",
    adult: [{ ind: "Adults", text: "Not indicated." }],
    child: [{ ind: "Severe primary IGFD", text: "Start 0.04–0.08 mg/kg SC twice daily; maximum 0.12 mg/kg twice daily.", calc: ["start"] }] }
});

FDB_M("meclozine", {
  inn: "Meclozine (meclizine)", atc: "R06AE05", cls: "Antihistamine antiemetic (H1, anticholinergic)",
  linked: [],
  forms: ["Tablets 12.5, 25, 50 mg; chewable tablets [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: cinnarizine and betahistine are the NEML vertigo medicines; meclozine is not listed [BT-NEML]."],
  moa: "Central H1 and muscarinic blockade reduces vestibular stimulation [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2D6 metabolism [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Vertigo from vestibular disease [FDA].", "Motion sickness (OTC) [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Vertigo", "25–100 mg a day by mouth in divided doses by response [FDA]."], ["Administration", "Swallow tablets whole; chewable tablets must be chewed or crushed [FDA]."]],
  paed: { tiers: ["Not established (prescription use) [FDA]."], transition: "Adult.", calcNote: "Fixed range." },
  adj: { renal: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Caution in asthma, glaucoma, prostate enlargement [FDA]; additive drowsiness with alcohol and sedatives [FDA]." },
  tox: { human: "Drowsiness, anticholinergic toxicity [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to meclizine or ingredients [FDA]."],
  ae: { common: ["Drowsiness, dry mouth, headache, fatigue, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Impaired alertness (driving) [FDA]"] },
  monitor: ["Drowsiness; falls in older adults [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Meclizine hydrochloride tablets — FDA label (DailyMed)", M1_DM("21d4a6ee-0a66-45d7-bab9-c5eef399713d")], NEML_SRC],
  dose: { tagline: "Antihistamine for vertigo — causes drowsiness.",
    adult: [{ ind: "Vertigo", text: "25–100 mg a day in divided doses." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mefloquine", {
  inn: "Mefloquine", atc: "P01BC02", cls: "Antimalarial (quinoline methanol)",
  linked: [],
  forms: ["Tablet 250 mg (mefloquine hydrochloride) [FDA].", "Bhutan: not on the NEML; Bhutan malaria treatment follows the national guideline (artemether-lumefantrine, chloroquine, primaquine) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blood schizonticide; does not kill liver-stage parasites [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 3 weeks) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Mild–moderate malaria from mefloquine-susceptible P. falciparum or P. vivax [FDA].", "Malaria prophylaxis [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Treatment", "1,250 mg (5 tablets) once, with food and at least 240 mL water [FDA]."], ["Prophylaxis", "250 mg once weekly, starting 1 week before travel, same day each week after the main meal, and for 4 weeks after leaving [FDA]."], ["P. vivax", "Follow with primaquine to prevent relapse [FDA]."], ["Treatment failure", "Do not retreat with mefloquine if no improvement in 48–72 hours or prophylaxis failed [FDA]."]],
  paed: { tiers: ["Treatment: 20–25 mg/kg total, may be split into 2 doses 6–8 hours apart; not above the adult dose [FDA].", "Prophylaxis about 5 mg/kg weekly: over 45 kg 1 tablet; 30–45 kg ¾ tablet; 20–30 kg ½ tablet [FDA].", "Limited experience under 20 kg [FDA]."], transition: "Adult dose from 45 kg.", calcNote: "Treatment 20–25 mg/kg total." },
  adj: { renal: NEP, hepatic: "Caution — prolonged elimination [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Do not give with halofantrine or ketoconazole (QT); wait 12 hours after the last quinine dose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Exaggerated neuropsychiatric and cardiac effects [FDA].", animal: LD, manage: "Symptomatic and supportive; cardiac monitoring [FDA]." },
  contra: ["Hypersensitivity to mefloquine, quinine or quinidine [FDA].", "Prophylaxis in active or recent depression, generalised anxiety, psychosis, schizophrenia or other major psychiatric disorders, or seizures [FDA]."],
  ae: { common: ["Nausea, vomiting, dizziness, sleep disturbance, vivid dreams [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Neuropsychiatric effects that may persist (anxiety, depression, psychosis, suicidal ideation) [FDA]", "Vestibular effects — dizziness, vertigo, tinnitus that may be permanent [FDA]", "Seizures [FDA]", "QT prolongation and arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Psychiatric and neurological symptoms; stop prophylaxis if they occur [FDA]."],
  local: notBT,
  calc: [
    { drug: "mefloquine", indication_id: "tx_child", label: "Malaria treatment, child — 20–25 mg/kg total (may split in 2)", route: "PO", population: { min_age_months: 6, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "dose", value_max: 25 }, interval_h: null, divided_doses: 1, caps: { max_single: 1250, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Quarter tablets", renal: [], flags: ["May split into 2 doses 6–8 h apart", "Limited experience under 20 kg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Mefloquine hydrochloride tablets — FDA label (DailyMed)", M1_DM("09716a24-d7da-42b2-af29-c03a1b6670bd")], NEML_SRC],
  dose: { tagline: "Weekly malaria prophylaxis or single-day treatment — neuropsychiatric risk.",
    boxedTitle: "Neuropsychiatric adverse reactions", boxed: "Mefloquine may cause neuropsychiatric adverse reactions that can persist after mefloquine has been discontinued. Mefloquine should not be prescribed for prophylaxis in patients with major psychiatric disorders. During prophylactic use, if psychiatric or neurologic symptoms occur, the drug should be discontinued and an alternative medication should be substituted [FDA].",
    adult: [{ ind: "Treatment", text: "1,250 mg once with food." }, { ind: "Prophylaxis", text: "250 mg weekly from 1 week before to 4 weeks after travel." }],
    child: [{ ind: "Treatment", text: "20–25 mg/kg total (may split in 2 doses).", calc: ["tx_child"] }, { ind: "Prophylaxis", text: "About 5 mg/kg weekly (½ tablet 20–30 kg, ¾ tablet 30–45 kg)." }] }
});

FDB_M("megestrol", {
  inn: "Megestrol acetate", atc: "L02AB01", cls: "Progestogen (appetite stimulant; hormonal therapy)",
  linked: [],
  forms: ["Oral suspension 40 mg/mL; concentrated suspension 625 mg/5 mL; tablets 20 and 40 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Progestogen; appetite gain mechanism unclear [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Anorexia, cachexia or unexplained significant weight loss in AIDS (suspension) [FDA].", "Palliative treatment of advanced breast or endometrial cancer (tablets) [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["AIDS cachexia (40 mg/mL suspension)", "800 mg/day (20 mL) as the starting dose; 400–800 mg/day effective in trials [FDA]."], ["Caution", "The concentrated 625 mg/5 mL product is not interchangeable mL for mL [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Contraindicated [FDA].", other: "Adrenal suppression — consider steroid cover in stress or after stopping [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No serious unexpected effects up to 1,200 mg/day [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA].", "Known or suspected pregnancy [FDA]."],
  ae: { common: ["Diarrhoea, impotence, rash, flatulence, hypertension, insomnia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thromboembolism [UNVERIFIED-KNOWLEDGE]", "Adrenal insufficiency; Cushing-like features; new or worse diabetes [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight; glucose; signs of adrenal insufficiency [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Megestrol acetate oral suspension — FDA label (DailyMed)", M1_DM("46622697-2c51-44d5-9f1f-e48f8526f132")], NEML_SRC],
  dose: { tagline: "Appetite stimulant for AIDS wasting — check which suspension strength.",
    adult: [{ ind: "AIDS cachexia", text: "800 mg/day (20 mL of 40 mg/mL)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("meloxicam", {
  inn: "Meloxicam", atc: "M01AC06", cls: "NSAID (preferential COX-2)",
  linked: [],
  forms: ["Tablets 7.5 and 15 mg; oral suspension; IV injection 30 mg (Anjeso/Qamzova) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: ibuprofen, diclofenac and naproxen are the NEML NSAIDs; meloxicam is not listed [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits cyclo-oxygenase, more COX-2 than COX-1 [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 20 hours — once daily [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Osteoarthritis and rheumatoid arthritis (oral) [FDA].", "Moderate–severe pain (IV, with non-NSAID analgesics) [FDA]."], paed: ["Juvenile rheumatoid arthritis (pauci- and polyarticular), children 60 kg and over (tablets) [FDA]."] },
  adult: [["Osteoarthritis, RA (oral)", "7.5 mg once daily; may increase to 15 mg once daily (maximum) [FDA]."], ["Haemodialysis", "Maximum 7.5 mg/day [FDA]."], ["IV (Qamzova)", "30 mg IV bolus over 15 seconds once daily; slow onset — add a rapid non-NSAID analgesic; hydrate first [FDA]."]],
  paed: { tiers: ["JRA, 60 kg and over: 7.5 mg once daily (tablets) [FDA].", "Smaller children: oral suspension per label [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Fixed dose." },
  adj: { renal: "Avoid in advanced kidney disease; haemodialysis maximum 7.5 mg/day [FDA].", hepatic: "Severe impairment not studied [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Avoid from 20 weeks (oligohydramnios, fetal kidney); avoid from 30 weeks (ductus closure) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Tablets are not interchangeable with other oral meloxicam products mg for mg [FDA]." },
  tox: { human: "Lethargy, drowsiness, nausea, vomiting, epigastric pain; GI bleeding [FDA].", animal: LD, manage: "Supportive [FDA]." },
  contra: ["Hypersensitivity to meloxicam [FDA].", "Asthma, urticaria or allergic reaction after aspirin or other NSAIDs [FDA].", "Peri-operative pain after CABG surgery [FDA].", "IV: moderate–severe kidney insufficiency at risk of failure from volume depletion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dyspepsia, diarrhoea, nausea, abdominal pain, oedema, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiovascular thrombotic events [FDA]", "GI bleeding, ulceration, perforation [FDA]", "Hepatotoxicity, kidney injury, hyperkalaemia [FDA]", "Heart failure and oedema [FDA]", "DRESS and serious skin reactions [FDA]"] },
  monitor: ["Blood pressure, kidney function, blood count, liver tests with long use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Meloxicam tablets — FDA label (DailyMed)", M1_DM("108397e9-672d-4061-bb74-65818c782d61")], ["FDA-2", "Qamzova (meloxicam injection) — FDA label (DailyMed)", M1_DM("385fd779-1be1-49ae-8213-750b96ecc997")], NEML_SRC],
  dose: { tagline: "Once-daily NSAID for arthritis — 7.5 to 15 mg.",
    boxedTitle: "Risk of serious cardiovascular and gastrointestinal events", boxed: "Cardiovascular Thrombolic Events • Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. • Meloxicam is contraindicated in the setting of coronary artery bypass graft (CABG) surgery. Gastrointestinal Bleeding, Ulceration, and Perforation • NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients and patients with a prior history of peptic ulcer disease and/or GI bleeding are at greater risk for serious GI events [FDA].",
    adult: [{ ind: "OA, RA", text: "7.5 mg once daily; maximum 15 mg; haemodialysis maximum 7.5 mg." }],
    child: [{ ind: "JRA (60 kg and over)", text: "7.5 mg once daily." }] }
});

FDB_M("melphalan", {
  inn: "Melphalan", atc: "L01AA03", cls: "Alkylating agent (nitrogen mustard)",
  risk: CHEMO,
  linked: [],
  forms: ["IV injection 50 mg (Evomela, captisol-enabled; others propylene glycol-based); tablets 2 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Cross-links DNA, killing dividing cells [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["High-dose conditioning before autologous stem cell transplant in multiple myeloma (Evomela) [FDA].", "Palliative myeloma treatment (other IV and oral products) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Myeloma conditioning (Evomela)", "100 mg/m²/day IV over 30 minutes on day −3 and day −2 before autologous transplant (day 0) [FDA]."], ["BSA", "Use adjusted ideal body weight if over 130% of ideal body weight [FDA]."], ["Specialist", "Oncology specialist only — follow the full label and protocol [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "mg/m² conditioning." },
  adj: { renal: "Reduce the dose in kidney impairment per protocol (product-specific) [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hazardous drug; prophylactic antiemetics; do not mix Evomela with other melphalan products [FDA]." },
  tox: { human: "Severe nausea and vomiting, decreased consciousness, convulsions, paralysis, severe mucositis, marrow aplasia (doses up to 290 mg/m²) [FDA].", animal: LD, manage: "Supportive; blood products; stem cell support [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of serious allergic reaction to melphalan [FDA]."],
  ae: { common: ["Neutropenia, thrombocytopenia, anaemia, diarrhoea, nausea, vomiting, fatigue, hypokalaemia [FDA]."], serious: ["Severe bone marrow suppression [FDA]", "Anaphylaxis [FDA]", "Secondary leukaemia [FDA]", "GI toxicity, hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Infertility [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts; electrolytes; infection signs [FDA]."],
  local: notBT,
  calc: [
    { drug: "melphalan", indication_id: "asct", label: "Myeloma conditioning — 100 mg/m²/day × 2 days (day −3, −2)", route: "IV", population: ADULT, basis: "mg_per_m2", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 50, unit: "mg/vial" }], rounding: "1 mg", infusion: { duration_h: 0.5 }, renal: [], flags: ["HIGH_ALERT", "Specialist transplant protocol only", "Adjusted IBW if over 130% of IBW"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Evomela (melphalan) for injection — FDA label (DailyMed)", M1_DM("69f55869-dc11-408e-8fc7-47634269a52c")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "High-dose alkylator before myeloma stem cell transplant — specialist only.",
    boxedTitle: "Severe bone marrow suppression, hypersensitivity, and leukemogenicity", boxed: "Severe bone marrow suppression with resulting infection or bleeding may occur. Controlled trials comparing intravenous (IV) melphalan to oral melphalan have shown more myelosuppression with the IV formulation. Monitor hematologic laboratory parameters. Hypersensitivity reactions, including anaphylaxis, have occurred in approximately 2% of patients who received the IV formulation of melphalan. Discontinue treatment with Evomela for serious hypersensitivity reactions. Melphalan produces chromosomal aberrations in vitro and in vivo. Evomela should be considered potentially leukemogenic in humans [FDA].",
    adult: [{ ind: "Myeloma conditioning", text: "100 mg/m²/day IV for 2 days before transplant.", calc: ["asct"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("memantine", {
  inn: "Memantine", atc: "N06DX01", cls: "NMDA receptor antagonist (dementia)",
  linked: [],
  forms: ["Tablets 5 and 10 mg; oral solution 2 mg/mL; extended-release capsules 7–28 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Low-affinity NMDA receptor antagonist [FDA].",
  pk: ["Renally excreted; alkaline urine slows clearance [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Moderate to severe Alzheimer's dementia [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Titration", "5 mg once daily; increase weekly by 5 mg to 10 mg/day (5 mg twice daily), 15 mg/day (5 mg and 10 mg), then 20 mg/day (10 mg twice daily) [FDA]."], ["Missed several days", "Restart at a lower dose and retitrate [FDA]."], ["Severe kidney impairment (CrCl 5–29)", "Target 5 mg twice daily (10 mg/day) [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "Fixed titration." },
  adj: { renal: "CrCl 5–29: 5 mg twice daily [FDA].", hepatic: "Caution in severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Drugs or diets that make urine alkaline raise levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Agitation, confusion, bradycardia, coma, hallucinations, vomiting [FDA].", animal: LD, manage: "Supportive; urine acidification may help [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to memantine or excipients [FDA]."],
  ae: { common: ["Dizziness, headache, confusion, constipation [FDA]."], serious: ["Seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Hallucinations [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cognition and function; dizziness and falls [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "memantine", indication_id: "target", label: "Alzheimer's — target 10 mg twice daily (after weekly titration)", route: "PO", population: ADULT, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: { max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [{ crcl_min: 5, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 12 }], flags: ["Start 5 mg daily; increase by 5 mg each week"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Memantine hydrochloride oral solution — FDA label (DailyMed)", M1_DM("4076d3ef-d0a9-96c5-1a15-812c1e42929c")], NEML_SRC],
  dose: { tagline: "NMDA antagonist for moderate–severe Alzheimer's — titrate weekly to 20 mg/day.",
    adult: [{ ind: "Alzheimer's dementia", text: "5 mg daily, up by 5 mg weekly to 10 mg twice daily; CrCl 5–29: 5 mg twice daily.", calc: ["target"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("mepivacaine", {
  inn: "Mepivacaine", atc: "N01BB03", cls: "Amide local anaesthetic",
  linked: [],
  forms: ["Dental cartridge 3% (30 mg/mL; 1.7 mL = 51 mg) without vasoconstrictor; 2% with levonordefrin; 1–2% for nerve block [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks sodium channels in nerve fibres [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Dental local anaesthesia by infiltration or nerve block [FDA]."], paed: ["Same, with weight-based maximum [FDA]."] },
  adult: [["Dental", "Usually 1 cartridge (51 mg) per infiltration or block; 270 mg (5.3 cartridges) usually anaesthetises the whole mouth [FDA]."], ["Maximum", "Up to 3 mg per pound (6.6 mg/kg); never more than 400 mg in one sitting [FDA]."]],
  paed: { tiers: ["Maximum = weight (lb) × 400 mg ÷ 150 — about 6.6 mg/kg; no more than 5.3 cartridges in a sitting [FDA]."], transition: "Adult maximum 400 mg.", calcNote: "Maximum safe dose by weight." },
  adj: { renal: NEP, hepatic: "Caution — amide metabolised by the liver [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Aspirate before injecting to avoid intravascular injection [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "CNS excitation then depression, seizures, hypotension, bradycardia, cardiac arrest [FDA].", animal: LD, manage: "Airway and ventilation; benzodiazepine for seizures; lipid emulsion for cardiotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to amide local anaesthetics [FDA]."],
  ae: { common: ["Lip and tongue numbness, injection-site pain [UNVERIFIED-KNOWLEDGE]."], serious: ["Local anaesthetic systemic toxicity [FDA]", "Methaemoglobinaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Consciousness, breathing and heart rate after injection [FDA]."],
  local: notBT,
  calc: [
    { drug: "mepivacaine", indication_id: "max", label: "Dental — maximum total dose 6.6 mg/kg (not over 400 mg)", route: "Infiltration", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 6.6, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 400, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cartridge 3% 1.7 mL", strength: 51, unit: "mg/cartridge" }], rounding: "1 mg", renal: [], flags: ["This is the MAXIMUM, not the usual dose", "Usual: 1 cartridge (51 mg) per site"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Scandonest 3% Plain (mepivacaine) — FDA label (DailyMed)", M1_DM("af6ff5f6-7221-421b-9b7c-8fcee4a47772")], NEML_SRC],
  dose: { tagline: "Dental local anaesthetic — maximum 6.6 mg/kg, never over 400 mg.",
    adult: [{ ind: "Dental anaesthesia", text: "1 cartridge (51 mg) per site; maximum 400 mg a sitting.", calc: ["max"] }],
    child: [{ ind: "Maximum by weight", text: "About 6.6 mg/kg (weight in lb × 400 ÷ 150).", calc: ["max"] }] }
});

FDB_M("maralixibat", {
  inn: "Maralixibat chloride", atc: "A05AX04", cls: "Ileal bile acid transporter (IBAT) inhibitor",
  linked: [],
  forms: ["Oral solution 9.5 mg/mL (Alagille) and 19 mg/mL (PFIC) — not interchangeable for PFIC; tablets for 25 kg and over [FDA]."],
  moa: "Blocks bile acid reabsorption in the ileum, lowering serum bile acids and itch [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Cholestatic pruritus in Alagille syndrome or PFIC (all ages per label) [FDA]."], paed: ["Alagille syndrome from 3 months; PFIC from 12 months [FDA]."] },
  adult: [["Alagille syndrome", "Start 190 mcg/kg once daily 30 minutes before the morning meal; after 1 week increase to 380 mcg/kg once daily; maximum 28.5 mg/day (solution) or 30 mg/day (tablets) [FDA]."], ["PFIC", "Start 285 mcg/kg once daily; increase to 285, then 428, then 570 mcg/kg twice daily before meals; maximum 38 mg/day (solution) or 40 mg/day (tablets) [FDA]."]],
  paed: { tiers: ["Same mcg/kg dosing [FDA]."], transition: "Same.", calcNote: "mcg/kg by indication — check the solution strength." },
  adj: { renal: NEP, hepatic: "Contraindicated with prior or active hepatic decompensation [FDA].", pregnancy: NEP, other: "Bile acid binders: give maralixibat at least 4 hours before or after [UNVERIFIED-KNOWLEDGE]. Monitor fat-soluble vitamins [FDA]." },
  tox: { human: "Single doses up to 500 mg tolerated in adults [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Prior or active hepatic decompensation (variceal bleeding, ascites, encephalopathy) [FDA]."],
  ae: { common: ["Diarrhoea, abdominal pain, vomiting, fat-soluble vitamin deficiency [FDA]."], serious: ["Hepatotoxicity [FDA]", "Severe diarrhoea with dehydration [FDA]", "Fat-soluble vitamin deficiency [FDA]"] },
  monitor: ["Liver tests; vitamins A, D, E, INR [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "maralixibat", indication_id: "algs", label: "Alagille — 380 mcg/kg once daily (after 1 week at 190)", route: "PO", population: { min_age_months: 3, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.38, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_daily: 28.5, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "oral solution", strength: 9.5, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["Start 190 mcg/kg for the first week", "Use the 9.5 mg/mL solution for Alagille"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Livmarli (maralixibat) — FDA label (DailyMed)", M1_DM("64000394-1ef6-4e76-8ba8-11f25ba1b167")], NEML_SRC],
  dose: { tagline: "Itch treatment for Alagille syndrome and PFIC — check the solution strength.",
    adult: [{ ind: "Alagille", text: "190 mcg/kg daily for 1 week, then 380 mcg/kg daily.", calc: ["algs"] }, { ind: "PFIC", text: "Up to 570 mcg/kg twice daily." }],
    child: [{ ind: "Alagille (3 months+)", text: "380 mcg/kg once daily (maximum 28.5 mg).", calc: ["algs"] }] }
});

FDB_M("margetuximab", {
  inn: "Margetuximab", atc: "L01FD06", cls: "HER2-directed monoclonal antibody",
  risk: CHEMO,
  linked: [],
  forms: ["Injection 250 mg/10 mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds HER2; engineered Fc enhances immune cell killing [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Metastatic HER2-positive breast cancer after two or more anti-HER2 regimens, with chemotherapy [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "15 mg/kg IV every 3 weeks; first infusion over 120 minutes, later over at least 30 minutes [FDA]."], ["Cardiac", "Check LVEF before and regularly; withhold for significant falls [FDA]."], ["Specialist", "Oncology specialist only [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "mg/kg every 3 weeks." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Embryo-fetal toxicity — contraception during and for 4 months after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Infusion reactions — premedicate per protocol [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, nausea, diarrhoea, vomiting, constipation, headache, fever, alopecia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Left ventricular dysfunction [FDA]", "Embryo-fetal toxicity [FDA]", "Infusion-related reactions [FDA]"] },
  monitor: ["LVEF; infusion reactions [FDA]."],
  local: notBT,
  calc: [
    { drug: "margetuximab", indication_id: "q3w", label: "HER2+ breast cancer — 15 mg/kg IV every 3 weeks", route: "IV", population: ADULT, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 250, unit: "mg/vial" }], rounding: "Vial fractions", renal: [], flags: ["HIGH_ALERT", "First infusion over 120 min", "Check LVEF"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Margenza (margetuximab) — FDA label (DailyMed)", M1_DM("6a6d50c7-06ea-479c-83cc-f197a9e428c9")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Late-line HER2 antibody for breast cancer — monitor heart function.",
    boxedTitle: "Left ventricular dysfunction and embryo-fetal toxicity", boxed: "Left Ventricular Dysfunction: MARGENZA may lead to reductions in left ventricular ejection fraction (LVEF). Evaluate cardiac function prior to and during treatment. Discontinue MARGENZA treatment for a confirmed clinically significant decrease in left ventricular function. Embryo-Fetal Toxicity: Exposure to MARGENZA during pregnancy can cause embryo-fetal harm. Advise patients of the risk and need for effective contraception [FDA].",
    adult: [{ ind: "HER2+ metastatic breast cancer", text: "15 mg/kg IV every 3 weeks.", calc: ["q3w"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("marstacimab", {
  inn: "Marstacimab", atc: "B02BX11", cls: "Anti-TFPI monoclonal antibody (haemophilia prophylaxis)",
  linked: [],
  forms: ["Prefilled pen and syringe 150 mg/mL; 75 mg/0.5 mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks tissue factor pathway inhibitor, increasing thrombin generation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Routine prophylaxis in haemophilia A or B, with or without inhibitors [FDA]."], paed: ["6 years and older [FDA]."] },
  adult: [["12 years and older", "Loading 300 mg SC (two 150 mg injections); 1 week later 150 mg SC weekly; may increase to 300 mg weekly [FDA]."], ["Breakthrough bleeds", "Treat with factor VIII, factor IX or bypassing agents — do not give extra marstacimab [FDA]."], ["Surgery", "Pause at least 7 days before major surgery [FDA]."]],
  paed: { tiers: ["6 to under 12 years: loading 150 mg SC; then 75 mg weekly; may increase to 150 mg weekly [FDA]."], transition: "12 years: adult dose.", calcNote: "Fixed dose by age." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Thrombotic risk factors raise clot risk [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Contact a poison centre or toxicologist [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Injection-site reaction, headache, fever, arthralgia, diarrhoea, itching [FDA]."], serious: ["Venous and arterial thromboembolism [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["Signs of thrombosis; bleeding record [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Hympavzi (marstacimab) — FDA label (DailyMed)", M1_DM("a2cc631e-13a6-40c2-acf9-065ccedfb90a")], NEML_SRC],
  dose: { tagline: "Weekly SC haemophilia A or B prophylaxis — not for treating bleeds.",
    boxedTitle: "Thromboembolic events", boxed: "• Venous and arterial thromboembolic events were reported in patients treated with HYMPAVZI with thrombotic risk factors. • Monitor patients for signs or symptoms of thromboembolism and interrupt use of HYMPAVZI if these occur and manage as clinically indicated [FDA].",
    adult: [{ ind: "Haemophilia prophylaxis", text: "300 mg load, then 150 mg SC weekly (up to 300 mg)." }],
    child: [{ ind: "6–11 years", text: "150 mg load, then 75 mg SC weekly (up to 150 mg)." }] }
});

FDB_M("mavorixafor", {
  inn: "Mavorixafor", atc: "L03AX24", cls: "CXCR4 antagonist",
  linked: [],
  forms: ["Capsule 100 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks CXCR4, releasing neutrophils and lymphocytes from the bone marrow in WHIM syndrome [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate; inhibits CYP2D6 [FDA]."],
  ind: { adult: ["WHIM syndrome, to raise circulating neutrophils and lymphocytes [FDA]."], paed: ["12 years and older [FDA]."] },
  adult: [["Over 50 kg", "400 mg once daily [FDA]."], ["50 kg or less", "300 mg once daily [FDA]."], ["With strong CYP3A4 inhibitors", "200 mg once daily [FDA]."], ["Administration", "Empty stomach after an overnight fast, at least 30 minutes before food; swallow whole [FDA]."]],
  paed: { tiers: ["12 years and older: same weight-based dose [FDA]."], transition: "Same.", calcNote: "Two weight bands." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "May cause fetal harm — contraception [UNVERIFIED-KNOWLEDGE].", other: "Contraindicated with drugs highly dependent on CYP2D6 [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Drugs highly dependent on CYP2D6 for clearance [FDA]."],
  ae: { common: ["Thrombocytopenia, pityriasis, rash, rhinitis, epistaxis, vomiting, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QTc prolongation [FDA]", "Embryo-fetal toxicity [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG at baseline and as indicated; blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "mavorixafor", indication_id: "le50", label: "WHIM, 50 kg or less — 300 mg once daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: 50.0001 }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "cap", strength: 100, unit: "mg/cap", whole: true }], rounding: "Whole capsules", renal: [], flags: ["Empty stomach", "200 mg with strong CYP3A4 inhibitors"], sources: ["FDA"] },
    { drug: "mavorixafor", indication_id: "gt50", label: "WHIM, over 50 kg — 400 mg once daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: 50.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "cap", strength: 100, unit: "mg/cap", whole: true }], rounding: "Whole capsules", renal: [], flags: ["Empty stomach", "200 mg with strong CYP3A4 inhibitors"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Xolremdi (mavorixafor) — FDA label (DailyMed)", M1_DM("7f3a5ee3-ca73-4876-85a0-ed1e108a2237")], NEML_SRC],
  dose: { tagline: "Daily capsule for WHIM syndrome — dose by weight, empty stomach.",
    adult: [{ ind: "WHIM syndrome", text: "400 mg daily over 50 kg; 300 mg at 50 kg or less.", calc: ["le50", "gt50"] }],
    child: [{ ind: "12 years and older", text: "Same weight-based dose.", calc: ["le50", "gt50"] }] }
});

FDB_M("mepolizumab", {
  inn: "Mepolizumab", atc: "R03DX09", cls: "Anti-IL-5 monoclonal antibody",
  linked: [],
  forms: ["Prefilled pen or syringe 100 mg/mL; 40 mg/0.4 mL syringe; 100 mg powder vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds IL-5, reducing eosinophil production and survival [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Add-on maintenance in severe eosinophilic asthma; chronic rhinosinusitis with nasal polyps; COPD with an eosinophilic phenotype; EGPA; hypereosinophilic syndrome [FDA]."], paed: ["Severe eosinophilic asthma from 6 years; HES from 12 years [FDA]."] },
  adult: [["Severe asthma, CRSwNP, COPD", "100 mg SC every 4 weeks [FDA]."], ["EGPA, HES", "300 mg SC every 4 weeks (three 100 mg injections at least 5 cm apart) [FDA]."]],
  paed: { tiers: ["Severe asthma 12–17 years: 100 mg every 4 weeks; 6–11 years: 40 mg every 4 weeks [FDA].", "HES 12–17 years: 300 mg every 4 weeks [FDA]."], transition: "Adult dose from 12 years.", calcNote: "Fixed dose by age." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Not for acute asthma attacks; do not stop steroids abruptly [FDA] [UNVERIFIED-KNOWLEDGE]. Treat helminth infection first [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [FDA]." },
  contra: ["History of hypersensitivity to mepolizumab or excipients [FDA]."],
  ae: { common: ["Headache, injection-site reaction, back pain, fatigue [FDA]."], serious: ["Hypersensitivity including anaphylaxis [FDA]", "Herpes zoster [FDA]"] },
  monitor: ["Asthma control; eosinophil count; zoster vaccination status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Nucala (mepolizumab) — FDA label (DailyMed)", M1_DM("fefb887c-e4ac-431e-8893-e9d1a5a63fea")], NEML_SRC],
  dose: { tagline: "Monthly anti-IL-5 injection for eosinophilic asthma, polyps, COPD, EGPA and HES.",
    adult: [{ ind: "Severe eosinophilic asthma, CRSwNP, COPD", text: "100 mg SC every 4 weeks." }, { ind: "EGPA, HES", text: "300 mg SC every 4 weeks." }],
    child: [{ ind: "Asthma 6–11 years", text: "40 mg SC every 4 weeks (12–17 years: 100 mg)." }] }
});

FDB_M("meprobamate", {
  inn: "Meprobamate", atc: "N05BC01", cls: "Carbamate anxiolytic (controlled substance)",
  linked: [],
  forms: ["Tablets 200 and 400 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "CNS depressant acting at GABA-A receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["Active metabolite of carisoprodol [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Anxiety disorders or short-term relief of anxiety; not assessed beyond 4 months [FDA]."], paed: ["6–12 years [FDA]."] },
  adult: [["Anxiety", "1,200–1,600 mg/day in 3–4 divided doses; above 2,400 mg/day not recommended [FDA]."], ["Stopping", "Taper over 1–2 weeks after long use — withdrawal seizures [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["6–12 years: 200–600 mg/day in 2–3 divided doses [FDA].", "Under 6 years: not recommended [FDA]."], transition: "Adult dose.", calcNote: "Fixed range." },
  adj: { renal: "Accumulates — use lower doses [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [UNVERIFIED-KNOWLEDGE].", pregnancy: "Avoid in the first trimester [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Dependence and abuse; additive with alcohol and CNS depressants [FDA]." },
  tox: { human: "Drowsiness, stupor, ataxia, coma, shock, respiratory collapse; fatal overdoses [FDA].", animal: LD, manage: "Airway and breathing support; haemodialysis or haemoperfusion in severe cases [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Acute intermittent porphyria [FDA].", "Allergy to meprobamate, carisoprodol, mebutamate, tybamate or carbromal [FDA]."],
  ae: { common: ["Drowsiness, ataxia, dizziness, slurred speech, headache [FDA]."], serious: ["Dependence and withdrawal seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Agranulocytosis, aplastic anaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sedation; signs of misuse [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Meprobamate tablets — FDA label (DailyMed)", M1_DM("17d814e2-b277-4dce-8615-e7fd7cab773f")], NEML_SRC],
  dose: { tagline: "Old sedative anxiolytic — dependence and dangerous in overdose.",
    adult: [{ ind: "Anxiety", text: "1,200–1,600 mg/day in 3–4 doses; maximum 2,400 mg/day." }],
    child: [{ ind: "6–12 years", text: "200–600 mg/day in 2–3 doses." }] }
});

FDB_M("mercaptamine", {
  inn: "Mercaptamine (cysteamine)", atc: "A16AA04", cls: "Cystine-depleting agent",
  linked: [],
  forms: ["Eye drops 0.44% (Cystaran) [FDA]; oral capsules (Cystagon, Procysbi) for systemic cystinosis [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converts cystine to cysteine and a mixed disulfide that can leave lysosomes [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Corneal cystine crystal accumulation in cystinosis (eye drops) [FDA].", "Nephropathic cystinosis (oral products) [UNVERIFIED-KNOWLEDGE]."], paed: ["Same [FDA]."] },
  adult: [["Eye drops", "1 drop in each eye every waking hour; discard the bottle after 1 week [FDA]."], ["Oral", "Specialist weight- or BSA-based dosing per product label [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Eye drops: same as adults [FDA]."], transition: "Same.", calcNote: "No calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Do not touch the dropper tip [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None (eye drops) [FDA]."],
  ae: { common: ["Light sensitivity, eye redness, pain or irritation, headache, visual field defects [FDA]."], serious: ["Oral: GI ulceration, CNS effects, skin and bone changes [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Slit-lamp corneal crystals; oral: leucocyte cystine levels [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Cystaran (cysteamine ophthalmic) 0.44% — FDA label (DailyMed)", M1_DM("b98ee838-ed23-42a9-93b5-72579e490fba")], NEML_SRC],
  dose: { tagline: "Hourly eye drops for corneal cystine crystals in cystinosis.",
    adult: [{ ind: "Corneal cystine crystals", text: "1 drop each eye every waking hour." }],
    child: [{ ind: "Corneal cystine crystals", text: "Same." }] }
});

FDB_M("mercaptopurine", {
  inn: "Mercaptopurine (6-MP)", atc: "L01BB02", cls: "Thiopurine antimetabolite",
  risk: CHEMO,
  linked: [],
  forms: ["Tablet 50 mg; oral suspension 20 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Purine analogue that blocks DNA synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Inactivated by TPMT and xanthine oxidase — allopurinol and febuxostat raise levels sharply [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute lymphoblastic leukaemia — maintenance with combination chemotherapy [FDA]."], paed: ["Same [FDA]."] },
  adult: [["ALL maintenance", "Start 1.5–2.5 mg/kg (50–75 mg/m²) once daily; adjust to the target neutrophil count [FDA]."], ["Kidney or liver impairment", "Use the lowest starting dose (or longer interval in kidney impairment) [FDA]."], ["TPMT/NUDT15 deficiency", "Reduce the dose — homozygous deficiency needs a much lower dose [FDA]."], ["With allopurinol", "Reduce mercaptopurine to one-third to one-quarter [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same mg/kg or mg/m² starting dose [FDA]."], transition: "Same.", calcNote: "mg/kg daily." },
  adj: { renal: "Lowest starting dose or longer interval [FDA].", hepatic: "Lowest starting dose [FDA].", pregnancy: "Fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Take consistently with or without food [FDA]. Live vaccines — avoid [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Immediate: anorexia, nausea, vomiting, diarrhoea; delayed: marrow suppression, liver dysfunction, mucositis [FDA].", animal: LD, manage: "Supportive; dialysis does not help [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Myelosuppression; anorexia, nausea, vomiting, diarrhoea, rash [FDA]."], serious: ["Severe myelosuppression (TPMT/NUDT15 deficiency) [FDA]", "Hepatotoxicity and veno-occlusive disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Secondary malignancy including hepatosplenic T-cell lymphoma [FDA] [UNVERIFIED-KNOWLEDGE]", "Macrophage activation syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts; liver tests; TPMT/NUDT15 genotype or phenotype if severe toxicity [FDA]."],
  local: notBT,
  calc: [
    { drug: "mercaptopurine", indication_id: "all", label: "ALL maintenance — start 1.5–2.5 mg/kg once daily", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1.5, unit: "mg", per: "day", value_max: 2.5 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "oral suspension", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], renal_note: "use the lowest starting dose or a longer interval [FDA]", flags: ["HIGH_ALERT", "Adjust to neutrophil count", "Reduce with allopurinol or TPMT/NUDT15 deficiency"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Mercaptopurine oral suspension — FDA label (DailyMed)", M1_DM("9c6fc66b-522f-499d-961a-cde6ca0ec2e5")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "ALL maintenance thiopurine — dose by blood count; watch allopurinol and TPMT.",
    adult: [{ ind: "ALL maintenance", text: "1.5–2.5 mg/kg (50–75 mg/m²) once daily, adjusted to neutrophils.", calc: ["all"] }],
    child: [{ ind: "ALL maintenance", text: "1.5–2.5 mg/kg once daily.", calc: ["all"] }] }
});
})(); // end M-1 scope

/* Brand names — BATCH M1 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"macitentan":{"IN":[["Macitent","Msn Laboratories","Macitent 10Mg Strip Of 10 Tablets"],["Opsutan","Cipla Limited","Opsutan 10Mg Strip Of 10 Tablets"],["Macikad","Lupin","Macikad 10Mg Strip Of 10 Tablets"]],"BD":[["Macipah","UniMed UniHealth Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/macitent-10mg-tab-10-s-206973","https://pharmeasy.in/online-medicine-order/opsutan-10mg-tab-10-s-207113","https://pharmeasy.in/online-medicine-order/macikad-10mg-tab-10-s-212092","https://medex.com.bd/brands/32600/macipah-10-mg-tablet"]},"maraviroc":{"IN":[["Axentri","Emcure Pharmaceuticals Ltd","Axentri 150Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/axentri-150-mg-tablet-10-195421"]},"mebendazole":{"IN":[["Mebex","Cipla Gx","Mebex Strip Of 6 Tablets"],["Wormin","Cadila Pharmaceuticals Limited","Wormin Bottle Of 30Ml Suspension"]],"BD":[["Seemox","Seema Pharmaceuticals Ltd","100 mg"],["Solagen","Biogen Pharmaceuticals Ltd","100 mg"],["Promex","Apollo Pharmaceutical Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/mebex-tablet-6168","https://pharmeasy.in/online-medicine-order/wormin-susp-30ml-64583","https://medex.com.bd/brands/10342/seemox-100-mg-chewable-tablet","https://medex.com.bd/brands/35889/solagen-100-mg-chewable-tablet","https://medex.com.bd/brands/21987/promex-100-mg-chewable-tablet"]},"meclozine":{"IN":[["Diligan","Dr Reddy's Laboratories Ltd","Diligan 25Mg Strip Of 15 Tablets"]],"BD":[["Melizin","Pacific Pharmaceuticals Ltd","50 mg"],["Acliz","Aristopharma Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/diligan-25mg-strip-of-15-tablets-43724","https://medex.com.bd/brands/22019/melizin-50-mg-tablet","https://medex.com.bd/brands/4606/acliz-50-mg-chewable-tablet"]},"mefloquine":{"IN":[["Meflotas","Intas Pharmaceuticals Ltd","Meflotas 250Mg Strip Of 2 Tablets"]],"BD":[["Meflon","Advanced Chemical Industries PLC","250 mg"],["Larimef","Healthcare Pharmaceuticals Ltd","250 mg"],["Mef-Q","Renata PLC","250 mg"]],"src":["https://pharmeasy.in/online-medicine-order/meflotas-250mg-tablet-13561","https://medex.com.bd/brands/31539/meflon-250-mg-tablet","https://medex.com.bd/brands/33637/larimef-250-mg-tablet","https://medex.com.bd/brands/33638/mef-q-250-mg-tablet"]},"megestrol":{"IN":[["Benzace","Admac Pharma Ltd.","Benzace Bottle Of 120Ml Suspension"],["Megasty","Aureate Healthcare Pvt Ltd","Megasty 160 Strip Of 10 Tablets"],["Endace","Samarth Life Sciences Pvt Ltd","Endace 40Mg Strip Of 10 Tablets"]],"BD":[["Meganor","Eskayef Pharmaceuticals Ltd","160 mg"],["Mezest","Beacon Pharmaceuticals PLC","160 mg"],["Apetar","Healthcare Pharmaceuticals Ltd","160 mg"]],"src":["https://pharmeasy.in/online-medicine-order/benzace-bottle-of-120ml-suspension-4828117","https://pharmeasy.in/online-medicine-order/megasty-160-strip-of-10-tablets-171378","https://pharmeasy.in/online-medicine-order/endace-40mg-tablet-45455","https://medex.com.bd/brands/29805/meganor-160-mg-tablet","https://medex.com.bd/brands/39755/mezest-40-mg-oral-suspension","https://medex.com.bd/brands/37469/apetar-160-mg-tablet"]},"meloxicam":{"IN":[["Muvera","Sun Pharma","Muvera 15Mg Strip Of 10 Tablets"]],"BD":[["Melcam","Square Pharmaceuticals PLC","15 mg"]],"src":["https://pharmeasy.in/online-medicine-order/muvera-15mg-tablet-25079","https://medex.com.bd/brands/11407/melcam-15-mg-tablet"]},"melphalan":{"IN":[["Dufalan","Samarth Life Sciences Pvt Ltd","Dufalan 50Mg Dry Vial Of 1 Powder For Injection"],["Melphalaz","Zuvius Lifesciences Pvt. Ltd.","Melphalaz 2Mg Bottle Of 25 Tablets"],["Megval","Emcure Pharmaceuticals Ltd","Megval 50 Injection 10 Ml"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/dufalan-50-mg-dry-vial-of-1-powder-for-injection-4827856","https://pharmeasy.in/online-medicine-order/melphalaz-2-mg-bottle-of-25-bottles-4828073","https://pharmeasy.in/online-medicine-order/megval-50-injection-10-ml-4123234"]},"memantine":{"IN":[["Menta Time","Steris Healthcare","Menta Time 5Mg Strip Of 10 Tablets"]],"BD":[["Remtin XR","Incepta Pharmaceuticals Ltd","14 mg"],["Dementa XR","Ziska Pharmaceuticals Ltd","14 mg"],["Dementa","Ziska Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/menta-time-5mg-strip-of-10-tablets-4505396","https://medex.com.bd/brands/33814/remtin-xr-14-mg-xr-capsule","https://medex.com.bd/brands/35558/dementa-xr-14-mg-xr-capsule"]},"mepolizumab":{"IN":[["Nucala","Glaxosmithkline","Nucala 100Mg Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/nucala-100mg-dry-vial-of-0-1gm-powder-for-injection-3520987"]},"mercaptopurine":{"IN":[["6 Mp","Zydus Lifesciences Limited","6 Mp 50Mg Strip Of 10 Tablets"],["Prevall","Idrs Labs Pvt Ltd","Prevall Bottle Of 100Ml Suspension"],["Captomac","Admac Pharma Ltd.","Captomac 10Mg Strip Of 10 Tablets"]],"BD":[["Leukin","Beacon Pharmaceuticals PLC","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/6-mp-50mg-strip-of-10-tablets-32604","https://pharmeasy.in/online-medicine-order/prevall-bottle-of-100ml-suspension-4819970","https://pharmeasy.in/online-medicine-order/captomac-10-mg-strip-of-10-tablets-4828084","https://medex.com.bd/brands/15053/leukin-50-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
