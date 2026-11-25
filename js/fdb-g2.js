/* Clinical Disease Guide — Drug monograph database, block G, batch G-2 (25 Nov 2026).
   Givosiran … guselkumab (end of G). Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md).
   Uses FDB_M from js/fdb-a2.js (must load after it). Boxed-warning text copied from the label by _work/tools/fdb-boxed-fill.js.
   Set IDs copied from saved label JSONs (never typed). Labels replaced where the pack picked another product:
   glycopyrronium (injection, not the topical cloth), granisetron (immediate-release, not Sustol). */

const G2_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const G2_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const G2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const G2_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const G2_NEP = "Not established in primary source. [NEP]";
const G2_LD = "Animal LD50: Not established in primary source. [NEP]";
const G2_LOC = { neml: G2_NOT, strengths: "—", stg: G2_NEP };
const G2_ONC = "Oncology specialist only — dosing, dose changes for toxicity and monitoring follow the full label and the treating protocol.";

FDB_M("givosiran", {
  inn: "Givosiran", atc: "A16AX16", cls: "Small interfering RNA (ALAS1-directed)",
  linked: [],
  forms: ["Injection 189 mg/mL single-dose vial (SC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "siRNA that lowers hepatic ALAS1 mRNA, reducing toxic ALA and PBG accumulation [FDA].",
  pk: [G2_NEP],
  ind: { adult: ["Acute hepatic porphyria in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Acute hepatic porphyria", "2.5 mg/kg SC once monthly, by actual body weight [FDA]."], ["Missed dose", "Give as soon as possible, then resume monthly dosing [FDA]."], ["Adverse reactions", "For severe or clinically significant transaminase rises, interrupt and restart at 1.25 mg/kg per label [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "mg/kg monthly by actual weight." },
  adj: { renal: "Renal toxicity reported — monitor renal function [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Hepatic toxicity — check liver tests before and monthly for 6 months [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: G2_NEP, other: "Healthcare professional administers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known severe hypersensitivity to givosiran (anaphylaxis reported) [FDA]."],
  ae: { common: ["Nausea, injection-site reactions, rash, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Hepatic toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Renal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests and renal function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [
    { drug: "givosiran", indication_id: "ahp", label: "Acute hepatic porphyria — 2.5 mg/kg SC once monthly", route: "SC", population: G2_ADULT, basis: "mg_per_kg", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 189, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Once monthly", "Actual body weight"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Givlaari (givosiran) — FDA label (DailyMed)", G2_DM("167e663c-11e1-497b-a3fc-951d65d58eaa")], G2_BT],
  dose: { tagline: "Monthly siRNA injection for acute hepatic porphyria.",
    adult: [{ ind: "Acute hepatic porphyria", text: "2.5 mg/kg SC once monthly.", calc: ["ahp"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("glasdegib", {
  inn: "Glasdegib", atc: "L01XJ03", cls: "Hedgehog pathway inhibitor (antineoplastic)",
  linked: [],
  forms: ["Tablets 25 mg, 100 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits Smoothened in the Hedgehog signalling pathway [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Newly diagnosed AML, with low-dose cytarabine, in adults 75 or older or unfit for intensive induction [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["AML (with low-dose cytarabine)", "100 mg once daily on days 1–28, with cytarabine 20 mg SC twice daily on days 1–10 of each 28-day cycle; at least 6 cycles if tolerated [FDA]."], ["Specialist", G2_ONC]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Oncology — no calculator." },
  adj: { renal: G2_NEP, hepatic: G2_NEP, pregnancy: "Embryo-fetal death and birth defects — pregnancy test; contraception during and 30 days after; condoms for men [FDA].", other: "QT prolongation; avoid strong CYP3A4 inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: "Supportive; ECG [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Anaemia, fatigue, haemorrhage, febrile neutropenia, musculoskeletal pain, nausea, oedema, dysgeusia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Embryo-fetal toxicity [FDA]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG, electrolytes, blood counts, CK [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Daurismo (glasdegib) — FDA label (DailyMed)", G2_DM("204a6f7e-c9a4-472b-abd2-9527bda64d17")], G2_BT],
  dose: { tagline: "Oral Hedgehog inhibitor with low-dose cytarabine for unfit older patients with AML.",
    boxedTitle: "Embryo-fetal toxicity",
    boxed: "DAURISMO can cause embryo-fetal death or severe birth defects when administered to a pregnant woman. DAURISMO is embryotoxic, fetotoxic, and teratogenic in animals. Conduct pregnancy testing in females of reproductive potential prior to initiation of DAURISMO treatment. Advise females of reproductive potential to use effective contraception during treatment with DAURISMO and for at least 30 days after the last dose. Advise males of the potential risk of DAURISMO exposure through semen and to use condoms with a pregnant partner or a female partner of reproductive potential during treatment with DAURISMO and for at least 30 days after the last dose to avoid potential drug exposure [FDA].",
    adult: [{ ind: "Newly diagnosed AML (unfit)", text: "100 mg once daily with low-dose cytarabine." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("glatiramer-acetate", {
  inn: "Glatiramer acetate", atc: "L03AX13", cls: "Immunomodulator (multiple sclerosis)",
  linked: [],
  forms: ["Prefilled syringe 20 mg/mL and 40 mg/mL (SC) — not interchangeable [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Random polymer thought to modify immune processes in multiple sclerosis [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Relapsing forms of multiple sclerosis (clinically isolated syndrome, relapsing-remitting, active secondary progressive) in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Relapsing MS", "20 mg SC once daily, or 40 mg SC three times a week at least 48 hours apart [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Technique", "Warm to room temperature; rotate sites; never IV [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Fixed SC dose." },
  adj: { renal: G2_NEP, hepatic: "Hepatic injury reported [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: G2_NEP, other: "Lipoatrophy and skin necrosis at injection sites — rotate sites [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: G2_NEP },
  contra: ["Known hypersensitivity to glatiramer acetate or mannitol (anaphylaxis reported) [FDA]."],
  ae: { common: ["Injection-site reactions, vasodilatation, rash, dyspnoea, chest pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis — at any time, even after years [FDA]", "Immediate post-injection reaction (flushing, chest pain, palpitations, dyspnoea) [FDA]", "Lipoatrophy, skin necrosis [FDA]", "Hepatic injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Injection sites; anaphylaxis symptoms; liver tests if symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Copaxone (glatiramer acetate) — FDA label (DailyMed)", G2_DM("aa88f583-4f5f-433b-80b4-1f4c9fb28357")], G2_BT],
  dose: { tagline: "Injectable immunomodulator for relapsing MS — anaphylaxis can occur at any time.",
    boxedTitle: "Anaphylactic reactions",
    boxed: "Cases of life-threatening and fatal anaphylaxis have been reported with COPAXONE. Anaphylaxis can occur at any time following initiation of therapy, from as early as after the first dose, up to years following initiation of therapy. Make patients aware of the symptoms of anaphylaxis, which may overlap with those of an immediate post-injection reaction; instruct them to seek immediate medical care should these symptoms occur. Prompt identification of anaphylaxis is important to avoid a delay in treatment. COPAXONE is contraindicated in patients with a history of hypersensitivity reactions to COPAXONE, including anaphylaxis. If an anaphylactic reaction occurs, treatment with COPAXONE must be immediately discontinued. Unless a clear alternative etiology is identified, COPAXONE must be permanently discontinued [FDA].",
    adult: [{ ind: "Relapsing MS", text: "20 mg SC daily, or 40 mg SC three times weekly (not interchangeable)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("glimepiride", {
  inn: "Glimepiride", atc: "A10BB12", cls: "Sulfonylurea (oral antidiabetic)",
  linked: [["Diabetes mellitus — adults", "Type 2 [FDA]", "dm-adult"]],
  forms: ["Tablets 1, 2, 4 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML — glipizide is the Bhutan sulfonylurea [BT-NEML]."],
  moa: "Stimulates insulin release from beta cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Once daily; hepatic metabolism to renally excreted metabolites [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Type 2 diabetes, with diet and exercise [FDA]."], paed: ["Not recommended in children [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Type 2 diabetes", "Start 1–2 mg once daily with breakfast or the first meal; increase by 1–2 mg no more often than every 1–2 weeks; maximum 8 mg once daily [FDA]."], ["Elderly or renal impairment", "Start 1 mg and titrate slowly [FDA]."]],
  paed: { tiers: ["Not recommended [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Starting dose." },
  adj: { renal: "Start 1 mg; titrate slowly (hypoglycaemia risk) [FDA].", hepatic: "Caution — hypoglycaemia risk [UNVERIFIED-KNOWLEDGE].", pregnancy: "Switch to insulin [UNVERIFIED-KNOWLEDGE].", other: "Beta-blockers mask hypoglycaemia; G6PD deficiency — haemolytic anaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe, prolonged hypoglycaemia [UNVERIFIED-KNOWLEDGE].", animal: G2_LD, manage: "Oral or IV glucose; observe 24–48 h [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to glimepiride or its ingredients [FDA].", "History of allergic reaction to sulfonamide derivatives [FDA]."],
  ae: { common: ["Hypoglycaemia, dizziness, headache, nausea, weight gain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hypoglycaemia [FDA]", "Hypersensitivity, including SJS [FDA] [UNVERIFIED-KNOWLEDGE]", "Haemolytic anaemia in G6PD deficiency [FDA]"] },
  monitor: ["Glucose and HbA1c; renal function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025; the Bhutan sulfonylurea is glipizide [BT-NEML].", strengths: "—", stg: G2_NEP },
  calc: [
    { drug: "glimepiride", indication_id: "t2dm", label: "Type 2 diabetes — start 1–2 mg once daily", route: "PO", population: G2_ADULT, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose", value_max: 2 }, interval_h: 24, caps: { max_single: 8, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }, { form: "tab", strength: 2, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Renal impairment or elderly: start 1 mg, titrate slowly [FDA]", flags: ["With breakfast", "Increase by 1–2 mg every 1–2 weeks; maximum 8 mg once daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Glimepiride tablets — FDA label (DailyMed)", G2_DM("2794f86b-d521-414b-8154-5dd1e2519653")], G2_BT],
  dose: { tagline: "Once-daily sulfonylurea — start low, watch for hypoglycaemia.",
    adult: [{ ind: "Type 2 diabetes", text: "1–2 mg once daily with breakfast; maximum 8 mg.", calc: ["t2dm"] }],
    child: [{ ind: "Children", text: "Not recommended." }] }
});

FDB_M("glofitamab", {
  inn: "Glofitamab", atc: "L01FX28", cls: "CD20×CD3 bispecific T-cell engager (antineoplastic)",
  risk: "High-alert medication (parenteral chemotherapy) [ISMP]",
  linked: [],
  forms: ["Concentrate for IV infusion 2.5 mg/2.5 mL and 10 mg/10 mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds CD20 on B cells and CD3 on T cells, redirecting T cells to kill lymphoma cells [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Relapsed or refractory DLBCL (NOS) or LBCL from follicular lymphoma after two or more lines of therapy (accelerated approval) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Schedule (21-day cycles)", "Obinutuzumab 1,000 mg IV on cycle 1 day 1; glofitamab step-up 2.5 mg on day 8 and 10 mg on day 15; then 30 mg on day 1 of cycles 2–12 [FDA]."], ["Setting", "Premedicate; give in a facility able to monitor and manage cytokine release syndrome [FDA]."], ["Specialist", G2_ONC]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults only.", calcNote: "Oncology — no calculator." },
  adj: { renal: G2_NEP, hepatic: G2_NEP, pregnancy: "Fetal B-cell depletion possible [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hospitalise for the first step-up dose per label [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: "Supportive; tocilizumab and steroids for CRS per protocol [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Cytokine release syndrome, musculoskeletal pain, rash, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cytokine release syndrome [FDA]", "Neurological toxicity including ICANS [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Tumour flare [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["CRS and neurological signs after each dose; blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Columvi (glofitamab-gxbm) — FDA label (DailyMed)", G2_DM("3516e753-f064-4d30-9bd5-e3f2e143f75d")], G2_BT, ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Bispecific antibody for relapsed large B-cell lymphoma — step-up dosing for CRS.",
    boxedTitle: "Cytokine release syndrome",
    boxed: "Cytokine Release Syndrome (CRS), including serious or fatal reactions, can occur in patients receiving COLUMVI. Premedicate before each dose, and initiate treatment with the COLUMVI step-up dosing schedule to reduce the risk of CRS. Withhold COLUMVI until CRS resolves or permanently discontinue based on severity [FDA].",
    adult: [{ ind: "Relapsed/refractory LBCL", text: "Obinutuzumab pretreatment, step-up 2.5 mg then 10 mg, then 30 mg every 21 days for up to 12 cycles." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("glucagon", {
  inn: "Glucagon", atc: "H04AA01", cls: "Pancreatic hormone (antihypoglycaemic)",
  linked: [["Diabetes mellitus — adults", "Severe hypoglycaemia [FDA]", "dm-adult"], ["Poisoning — adults", "Beta-blocker overdose (specialist) [UNVERIFIED-KNOWLEDGE]", "poisoning-adult"]],
  forms: ["Ready-to-use SC injection 0.5 mg and 1 mg (auto-injector, prefilled syringe); IV vial for diagnostic use [FDA].", "Glucagon emergency kits for reconstitution (1 mg) [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Raises blood glucose by stimulating hepatic glycogenolysis; relaxes GI smooth muscle [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Acts within about 10–15 minutes; needs liver glycogen stores [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Severe hypoglycaemia in diabetes (SC) [FDA].", "Diagnostic aid to inhibit GI motility during radiology (IV, adults) [FDA]."], paed: ["Severe hypoglycaemia, 2 years and older [FDA]."] },
  adult: [["Severe hypoglycaemia", "1 mg SC (12 years and over); if no response after 15 minutes, a second dose from a new device may be given while waiting for help; give oral carbohydrate once awake [FDA]."], ["Radiology (IV, Gvoke VialDx)", "0.2–0.5 mg IV to relax stomach and small bowel; higher for colon per label [FDA]."]],
  paed: { tiers: ["2 to under 12 years: under 45 kg 0.5 mg SC; 45 kg or more 1 mg SC [FDA].", "12 years and over: 1 mg [FDA]."], transition: "1 mg from 45 kg or 12 years.", calcNote: "Fixed weight-band dose." },
  adj: { renal: G2_NEP, hepatic: "Ineffective if glycogen is depleted (starvation, adrenal insufficiency, chronic hypoglycaemia) [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: G2_NEP, other: "Turn the patient on the side (vomiting risk) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, raised blood pressure and heart rate [UNVERIFIED-KNOWLEDGE].", animal: G2_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Phaeochromocytoma (severe hypertension) [FDA].", "Insulinoma (rebound hypoglycaemia) [FDA].", "Hypersensitivity to glucagon or excipients [FDA]."],
  ae: { common: ["Nausea, vomiting, headache, injection-site oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hypertension in phaeochromocytoma [FDA]", "Hypoglycaemia in insulinoma [FDA]", "Anaphylaxis [FDA]", "Necrolytic migratory erythema with continuous infusion [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Glucose after the dose; give carbohydrate when able to swallow [FDA]."],
  local: G2_LOC,
  calc: [
    { drug: "glucagon", indication_id: "lt45", label: "Severe hypoglycaemia, child 2–11 years under 45 kg — 0.5 mg SC", route: "SC", population: { min_age_months: 24, max_age_months: 144, min_weight_kg: null, max_weight_kg: 45 }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 0.5, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "prefilled pen", strength: 0.5, unit: "mg/pen" }], rounding: "Whole device", renal: [], flags: ["May repeat once after 15 minutes with a new device"], sources: ["FDA"] },
    { drug: "glucagon", indication_id: "std", label: "Severe hypoglycaemia, 12 years and over or 45 kg and over — 1 mg SC", route: "SC", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "prefilled pen", strength: 1, unit: "mg/pen" }], rounding: "Whole device", renal: [], flags: ["Children 2–11 years under 45 kg: 0.5 mg", "May repeat once after 15 minutes with a new device"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Gvoke (glucagon injection) — FDA label (DailyMed)", G2_DM("92385737-dbad-98c5-e053-2995a90a2805")], G2_BT],
  dose: { tagline: "Rescue injection for severe hypoglycaemia when glucose cannot be swallowed.",
    adult: [{ ind: "Severe hypoglycaemia", text: "1 mg SC; repeat once after 15 minutes if needed; then oral carbohydrate.", calc: ["std"] }],
    child: [{ ind: "2–11 years", text: "Under 45 kg 0.5 mg SC; 45 kg or more 1 mg SC.", calc: ["lt45", "std"] }] }
});

FDB_M("glucarpidase", {
  inn: "Glucarpidase", atc: "V03AF06", cls: "Recombinant bacterial enzyme (methotrexate antidote)",
  linked: [],
  forms: ["Powder for injection 1,000 units vial [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Hydrolyses methotrexate to inactive metabolites, giving a non-renal elimination route [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Toxic plasma methotrexate (above 1 micromol/L) with delayed clearance from impaired renal function, adults and children [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Delayed methotrexate clearance", "50 units/kg as a single IV injection over 5 minutes [FDA]."], ["Leucovorin", "Continue the same leucovorin dose for 48 hours, given at least 2 hours apart from glucarpidase; after 48 hours dose leucovorin by the measured methotrexate level [FDA]."], ["Not for", "Patients with expected clearance and plasma levels [FDA]."]],
  paed: { tiers: ["50 units/kg single IV injection [FDA]."], transition: "Same per-kg dose.", calcNote: "Units/kg single dose." },
  adj: { renal: "Indicated in renal impairment [FDA].", hepatic: G2_NEP, pregnancy: G2_NEP, other: "Measure methotrexate with a chromatographic method for 48 hours after (immunoassays read falsely high) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: G2_NEP },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Paraesthesia, flushing, nausea, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Methotrexate level (chromatographic assay), renal function, blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [
    { drug: "glucarpidase", indication_id: "mtx", label: "Methotrexate toxicity — 50 units/kg IV once", route: "IV", population: { min_age_months: 0, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "units", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 1000, unit: "units/vial" }], rounding: "Vial fractions", renal: [], flags: ["Over 5 minutes", "Leucovorin at least 2 h apart"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Voraxaze (glucarpidase) — FDA label (DailyMed)", G2_DM("acaef5a6-b740-40e3-8ffe-74a75c74745c")], G2_BT],
  dose: { tagline: "Enzyme antidote for toxic methotrexate levels with renal impairment.",
    adult: [{ ind: "Delayed methotrexate clearance", text: "50 units/kg IV once over 5 minutes; continue leucovorin.", calc: ["mtx"] }],
    child: [{ ind: "Delayed methotrexate clearance", text: "50 units/kg IV once.", calc: ["mtx"] }] }
});

FDB_M("glutamine", {
  inn: "L-glutamine (oral powder)", atc: "A16AA03", cls: "Amino acid (sickle cell disease)",
  linked: [],
  forms: ["Oral powder 5 g packet [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "May reduce oxidative stress in sickle red cells [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Reduce acute complications of sickle cell disease, 5 years and older [FDA]."], paed: ["5 years and older [FDA]."] },
  adult: [["Sickle cell disease", "By weight, twice daily: under 30 kg 5 g; 30–65 kg 10 g; over 65 kg 15 g per dose; mix in 240 mL of drink or 4–6 oz of food [FDA]."]],
  paed: { tiers: ["Same weight bands, 5 years and older [FDA]."], transition: "Weight bands.", calcNote: "Weight-band gram doses." },
  adj: { renal: G2_NEP, hepatic: G2_NEP, pregnancy: G2_NEP, other: "Monitor in renal or hepatic impairment [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: G2_NEP },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Constipation, nausea, headache, abdominal pain, cough, pain in extremities [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [G2_NEP] },
  monitor: ["Crisis frequency [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Endari (L-glutamine oral powder) — FDA label (DailyMed)", G2_DM("d5a783f4-12ef-4326-8faa-40018e45ba3b")], G2_BT],
  dose: { tagline: "Oral amino-acid powder to reduce sickle cell crises.",
    adult: [{ ind: "Sickle cell disease", text: "5 g (under 30 kg), 10 g (30–65 kg) or 15 g (over 65 kg) twice daily." }],
    child: [{ ind: "5 years and older", text: "Same weight bands." }] }
});

FDB_M("glycerol-phenylbutyrate", {
  inn: "Glycerol phenylbutyrate", atc: "A16AX09", cls: "Nitrogen-binding agent (urea cycle disorders)",
  linked: [],
  forms: ["Oral liquid 1.1 g/mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Releases phenylbutyrate → phenylacetate, which conjugates glutamine for urinary nitrogen excretion [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Chronic management of urea cycle disorders not controlled by protein restriction and amino-acid supplements alone; not for acute hyperammonaemia [FDA]."], paed: ["Same, per label age limits [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Phenylbutyrate-naive", "4.5–11.2 mL/m²/day, divided with meals; adjust to ammonia and dietary protein [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Switching from sodium phenylbutyrate", "Same amount of phenylbutyric acid per label conversion [FDA]."], ["Specialist", "Metabolic specialist only [FDA]."]],
  paed: { tiers: ["Per label by body surface area [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "BSA-based.", calcNote: "Metabolic specialist — no calculator." },
  adj: { renal: G2_NEP, hepatic: "Start at the low end in hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: G2_NEP, other: "Neurotoxicity from phenylacetate — check levels if symptoms [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Phenylacetate neurotoxicity (somnolence, confusion) [FDA] [UNVERIFIED-KNOWLEDGE].", animal: G2_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to phenylbutyrate [FDA]."],
  ae: { common: ["Diarrhoea, flatulence, headache, nausea, decreased appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Neurotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Plasma ammonia, glutamine, urinary PAGN [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Ravicti (glycerol phenylbutyrate) — FDA label (DailyMed)", G2_DM("900e7dc0-9afe-4f50-80de-90567bb78519")], G2_BT],
  dose: { tagline: "Oral nitrogen scavenger for urea cycle disorders — specialist only.",
    adult: [{ ind: "Urea cycle disorder", text: "4.5–11.2 mL/m²/day in divided doses with meals (naive patients)." }],
    child: [{ ind: "Children", text: "Per label by body surface area." }] }
});

FDB_M("glycopyrronium", {
  inn: "Glycopyrronium (glycopyrrolate) injection", atc: "A03AB02", cls: "Quaternary antimuscarinic",
  linked: [],
  forms: ["Injection 0.2 mg/mL (IM or IV) — some contain benzyl alcohol [FDA].", "Oral tablets, oral solution and topical cloth are separate products [UNVERIFIED-KNOWLEDGE].", "Bhutan: glycopyrrolate 0.2 mg/mL injection, 1 mL ampoule (NEML 2025; vital) [BT-NEML]."],
  moa: "Peripheral muscarinic antagonist that does not cross the blood–brain barrier: dries secretions, blocks vagal bradycardia [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Preanaesthetic and intraoperative reduction of secretions and vagal reflexes [FDA].", "With neostigmine or pyridostigmine for reversal of neuromuscular block [FDA].", "Adjunct in peptic ulcer when rapid antimuscarinic effect is needed (adults) [FDA]."], paed: ["Anaesthesia and reversal [FDA]."] },
  adult: [["Premedication", "0.004 mg/kg IM 30–60 minutes before induction [FDA]."], ["Intraoperative", "0.1 mg IV, repeated as needed every 2–3 minutes [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Reversal of neuromuscular block", "0.2 mg IV for each 1 mg of neostigmine or 5 mg of pyridostigmine [FDA]."]],
  paed: { tiers: ["Premedication: 0.004 mg/kg IM; 1 month to 2 years may need up to 0.009 mg/kg [FDA].", "Intraoperative: 0.004 mg/kg IV, maximum 0.1 mg per dose, repeat every 2–3 minutes [FDA].", "Reversal: 0.2 mg per 1 mg neostigmine [FDA].", "Benzyl alcohol formulations: caution in neonates [FDA]."], transition: "Same per-kg dose.", calcNote: "Premedication per kg; reversal by neostigmine dose." },
  adj: { renal: "Accumulates in renal impairment — use with caution [UNVERIFIED-KNOWLEDGE].", hepatic: G2_NEP, pregnancy: G2_NEP, other: "Heat stroke risk (reduced sweating) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Antimuscarinic toxicity (tachycardia, dry mouth, urinary retention); little CNS effect [UNVERIFIED-KNOWLEDGE].", animal: G2_LD, manage: "Neostigmine for severe peripheral antimuscarinic effects [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to glycopyrrolate or inactive ingredients [FDA].", "In peptic ulcer use: glaucoma, obstructive uropathy, GI obstruction, paralytic ileus, unstable cardiovascular status in acute haemorrhage, severe ulcerative colitis, toxic megacolon, myasthenia gravis [FDA]."],
  ae: { common: ["Dry mouth, tachycardia, urinary retention, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Arrhythmias [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"] },
  monitor: ["Heart rate [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: glycopyrrolate 0.2 mg/mL injection (vital) [BT-NEML].", strengths: "0.2 mg/mL.", stg: "Anaesthesia — reversal with neostigmine [BT-NEML]." },
  calc: [
    { drug: "glycopyrronium", indication_id: "premed", label: "Premedication — 0.004 mg/kg IM", route: "IM", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.004, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 0.2, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["30–60 minutes before induction", "1 month–2 years: up to 0.009 mg/kg"], sources: ["FDA"] },
    { drug: "glycopyrronium", indication_id: "intraop_child", label: "Intraoperative, child — 0.004 mg/kg IV (max 0.1 mg)", route: "IV", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.004, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 0.1, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 0.2, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["Repeat every 2–3 minutes as needed"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Glycopyrrolate injection — FDA label (DailyMed)", G2_DM("02541cfd-b209-49b9-a73f-13ef18dce06d")], G2_BT],
  dose: { tagline: "Antimuscarinic for anaesthesia: dries secretions and protects against neostigmine.",
    adult: [{ ind: "Reversal of neuromuscular block", text: "0.2 mg IV per 1 mg neostigmine.", bt: "Bhutan NEML: 0.2 mg/mL injection." }, { ind: "Premedication", text: "0.004 mg/kg IM 30–60 minutes before induction.", calc: ["premed"] }],
    child: [{ ind: "Premedication / intraoperative", text: "0.004 mg/kg (IM or IV; maximum 0.1 mg IV per dose).", calc: ["premed", "intraop_child"] }] }
});

FDB_M("golimumab", {
  inn: "Golimumab", atc: "L04AB06", cls: "TNF-alpha blocker (monoclonal antibody)",
  linked: [["Rheumatoid arthritis — adults", "With methotrexate [FDA]", "ra-adult"]],
  forms: ["IV infusion 50 mg/4 mL (Simponi Aria); SC pen 50 mg and 100 mg (Simponi) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds TNF-alpha [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Moderate–severe rheumatoid arthritis (with methotrexate); psoriatic arthritis; ankylosing spondylitis [FDA]."], paed: ["Polyarticular JIA and psoriatic arthritis, 2 years and older (IV) [FDA]."] },
  adult: [["RA, PsA, AS (IV)", "2 mg/kg IV over 30 minutes at weeks 0 and 4, then every 8 weeks [FDA]."], ["SC (Simponi)", "50 mg SC once monthly [UNVERIFIED-KNOWLEDGE]."], ["Before starting", "Test for latent TB and hepatitis B [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["pJIA and PsA, 2 years and older: 80 mg/m² IV over 30 minutes at weeks 0 and 4, then every 8 weeks [FDA]."], transition: "Adult per-kg dose.", calcNote: "IV loading by weight (adults) or BSA (children)." },
  adj: { renal: G2_NEP, hepatic: G2_NEP, pregnancy: G2_NEP, other: "No live vaccines; do not combine with other biologics [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: G2_NEP },
  contra: ["None (FDA) [FDA]."],
  ae: { common: ["Upper respiratory infection, raised ALT, infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections including TB reactivation and invasive fungal infections [FDA]", "Lymphoma and other malignancies [FDA]", "Heart failure, demyelination, hepatitis B reactivation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["TB screening before and during; blood counts; infection signs [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [
    { drug: "golimumab", indication_id: "iv", label: "RA/PsA/AS — 2 mg/kg IV at weeks 0, 4, then every 8 weeks", route: "IV", population: G2_ADULT, basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 50, unit: "mg/vial" }], rounding: "Vial fractions", infusion: { duration_h: 0.5 }, renal: [], flags: ["Weeks 0 and 4, then every 8 weeks", "Screen for TB and hepatitis B first"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Simponi Aria (golimumab) — FDA label (DailyMed)", G2_DM("9e260a47-55af-4c92-8d88-a86ccc767fff")], G2_BT],
  dose: { tagline: "TNF blocker for inflammatory arthritis — screen for TB first.",
    boxedTitle: "Serious infections and malignancy",
    boxed: "Serious infections: Patients treated with SIMPONI ARIA are at increased risk for developing serious infections that may lead to hospitalization or death. Most patients who developed these infections were taking concomitant immunosuppressants such as methotrexate or corticosteroids. Discontinue SIMPONI ARIA if a patient develops a serious infection. Reported infections with TNF blockers, of which SIMPONI ARIA is a member, include: Active tuberculosis, including reactivation of latent tuberculosis. Patients with tuberculosis have frequently presented with disseminated or extrapulmonary disease. Test patients for latent tuberculosis before SIMPONI ARIA use and during therapy. Initiate treatment for latent tuberculosis prior to SIMPONI ARIA use. Invasive fungal infections including histoplasmosis, coccidioidomycosis, candidiasis, aspergillosis, blastomycosis and pneumocystosis. Patients with histoplasmosis or other invasive fungal infections may present with disseminated, rather than localized, disease. Antigen and antibody testing for histoplasmosis may be negative in some patients with active infection. Consider empiric antifungal therapy in patients at risk for invasive fungal infections who develop severe systemic illness. Bacterial, viral, and other infections due to opportunistic pathogens, including Legionella and Listeria. Consider the risks and benefits of treatment with SIMPONI ARIA prior to initiating therapy in patients with chronic or recurrent infection. Monitor patients closely for the development of signs and symptoms of infection during and after treatment with SIMPONI ARIA, including the possible development of tuberculosis in patients who tested negative for latent tuberculosis infection prior to initiating therapy. Malignancy: Lymphoma and other malignancies, some fatal, have been reported in children and adolescent patients treated with TNF-blockers, of which SIMPONI ARIA is a member. [FDA]",
    adult: [{ ind: "RA, PsA, AS (IV)", text: "2 mg/kg IV at weeks 0 and 4, then every 8 weeks.", calc: ["iv"] }],
    child: [{ ind: "pJIA, PsA (2 years and older)", text: "80 mg/m² IV at weeks 0 and 4, then every 8 weeks." }] }
});

FDB_M("golodirsen", {
  inn: "Golodirsen", atc: "M09AX", cls: "Antisense oligonucleotide (exon 53 skipping)",
  linked: [],
  forms: ["Injection 100 mg/2 mL for IV infusion [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Causes skipping of exon 53 in dystrophin pre-mRNA, producing a shortened dystrophin [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Duchenne muscular dystrophy with a mutation amenable to exon 53 skipping (accelerated approval) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["DMD (exon 53)", "30 mg/kg IV once weekly over 35–60 minutes through a 0.2-micron in-line filter [FDA]."], ["Before starting", "Serum cystatin C, urine dipstick and urine protein-to-creatinine ratio [FDA]."]],
  paed: { tiers: ["30 mg/kg IV once weekly [FDA]."], transition: "Same per-kg dose.", calcNote: "Weekly mg/kg infusion." },
  adj: { renal: "Kidney toxicity — monitor cystatin C and urine protein [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: G2_NEP, pregnancy: G2_NEP, other: "Dilute before use [FDA]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: G2_NEP },
  contra: ["Serious hypersensitivity to golodirsen or inactive ingredients (anaphylaxis reported) [FDA]."],
  ae: { common: ["Headache, fever, fall, abdominal pain, cough, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Kidney toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cystatin C, urine dipstick, urine protein-to-creatinine ratio [FDA]."],
  local: G2_LOC,
  calc: [
    { drug: "golodirsen", indication_id: "dmd", label: "DMD (exon 53) — 30 mg/kg IV once weekly", route: "IV", population: { min_age_months: 0, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 100, unit: "mg/vial" }], rounding: "Vial fractions", renal: [], flags: ["Over 35–60 minutes with a 0.2-micron filter"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Vyondys 53 (golodirsen) — FDA label (DailyMed)", G2_DM("35c227d1-5b24-44b0-b5d3-f0f6b1c46bd5")], G2_BT],
  dose: { tagline: "Weekly exon-skipping infusion for Duchenne muscular dystrophy — watch the kidneys.",
    adult: [{ ind: "DMD (exon 53 amenable)", text: "30 mg/kg IV once weekly.", calc: ["dmd"] }],
    child: [{ ind: "DMD (exon 53 amenable)", text: "30 mg/kg IV once weekly.", calc: ["dmd"] }] }
});

FDB_M("goserelin", {
  inn: "Goserelin", atc: "L02AE03", cls: "GnRH agonist (depot implant)",
  linked: [],
  forms: ["SC implant 3.6 mg (28-day) and 10.8 mg (12-week) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Continuous GnRH-receptor stimulation down-regulates the pituitary, lowering testosterone or oestrogen [UNVERIFIED-KNOWLEDGE].",
  pk: ["Initial hormone flare in the first weeks [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prostate cancer (locally confined with flutamide; advanced, palliative) [FDA].", "Endometriosis; endometrial thinning before ablation; advanced breast cancer in pre- and perimenopausal women [FDA]."], paed: ["Not indicated [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["3.6 mg depot", "3.6 mg SC into the anterior abdominal wall below the navel every 28 days [FDA]."], ["10.8 mg depot", "Every 12 weeks (prostate cancer) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Endometriosis", "3.6 mg every 28 days for up to 6 months [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not indicated. [NEP]"], transition: "—", calcNote: "Fixed depot." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "No adjustment [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated except in advanced breast cancer [FDA].", other: "Tumour flare in prostate cancer — antiandrogen cover [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: G2_NEP },
  contra: ["Hypersensitivity to GnRH, GnRH agonists or components [FDA].", "Pregnancy, unless for advanced breast cancer [FDA]."],
  ae: { common: ["Hot flushes, sexual dysfunction, injection-site reactions, mood change [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Tumour flare (bone pain, cord compression, urinary obstruction) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperglycaemia, cardiovascular risk [FDA] [UNVERIFIED-KNOWLEDGE]", "Bone loss [FDA] [UNVERIFIED-KNOWLEDGE]", "Injection-site vascular injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["PSA or tumour markers; glucose; bone density with long use [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Zoladex (goserelin implant) — FDA label (DailyMed)", G2_DM("294b168b-6e5f-4db9-bf70-d599271458b3")], G2_BT],
  dose: { tagline: "Depot GnRH agonist for prostate and breast cancer and endometriosis.",
    adult: [{ ind: "Prostate/breast cancer, endometriosis", text: "3.6 mg SC every 28 days (or 10.8 mg every 12 weeks for prostate cancer)." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("granisetron", {
  inn: "Granisetron", atc: "A04AA02", cls: "5-HT3 antagonist antiemetic",
  linked: [],
  forms: ["Injection 1 mg/mL; tablets 1 mg; transdermal patch; extended-release SC (Sustol) — different doses [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML — ondansetron is the Bhutan 5-HT3 antagonist [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks serotonin 5-HT3 receptors centrally and in the gut [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Prevention of chemotherapy-induced nausea and vomiting; prevention and treatment of postoperative nausea and vomiting [FDA]."], paed: ["Chemotherapy nausea, 2–16 years [FDA]."] },
  adult: [["Chemotherapy (IV)", "10 microgram/kg IV within 30 minutes before chemotherapy [FDA]."], ["Postoperative nausea", "1 mg IV over 30 seconds, before induction or before reversal; or 1 mg to treat [FDA]."]],
  paed: { tiers: ["2–16 years (chemotherapy): 10 microgram/kg IV [FDA]."], transition: "Same per-kg dose.", calcNote: "IV microgram/kg." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "No adjustment [UNVERIFIED-KNOWLEDGE].", pregnancy: G2_NEP, other: "QT prolongation; serotonin syndrome with serotonergic drugs; masks ileus — not a substitute for nasogastric suction [FDA]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to granisetron or components [FDA]."],
  ae: { common: ["Headache, constipation, asthenia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation [FDA]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"] },
  monitor: ["ECG if QT risk [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "—", stg: G2_NEP },
  calc: [
    { drug: "granisetron", indication_id: "cinv", label: "Chemotherapy nausea — 10 microgram/kg IV before chemotherapy", route: "IV", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.01, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["Within 30 minutes before chemotherapy"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Granisetron hydrochloride injection — FDA label (DailyMed)", G2_DM("783e9d68-2371-4fd4-8d7a-a5e36f8718d0")], G2_BT],
  dose: { tagline: "5-HT3 antiemetic for chemotherapy and postoperative nausea.",
    adult: [{ ind: "Chemotherapy nausea", text: "10 microgram/kg IV before chemotherapy.", calc: ["cinv"] }, { ind: "Postoperative nausea", text: "1 mg IV over 30 seconds." }],
    child: [{ ind: "2–16 years (chemotherapy)", text: "10 microgram/kg IV.", calc: ["cinv"] }] }
});

FDB_M("elbasvir-grazoprevir", {
  inn: "Elbasvir + grazoprevir", atc: "J05AP54", cls: "HCV NS5A inhibitor + NS3/4A protease inhibitor",
  linked: [["Hepatitis — adults", "Hepatitis C genotype 1 or 4 [FDA]", "hepatitis-adult"]],
  forms: ["Tablet elbasvir 50 mg + grazoprevir 100 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks HCV NS5A (replication) and NS3/4A protease [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["OATP1B and CYP3A substrate — many interactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Chronic HCV genotype 1 or 4, alone or with ribavirin in some patients [FDA]."], paed: ["12 years and older or at least 30 kg [FDA]."] },
  adult: [["HCV genotype 1 or 4", "One tablet once daily with or without food for 12 weeks (16 weeks with ribavirin for genotype 1a with NS5A polymorphisms and some treatment-experienced patients) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Before starting", "Test HBsAg and anti-HBc; NS5A polymorphism testing for genotype 1a; liver tests [FDA]."]],
  paed: { tiers: ["12 years and older or at least 30 kg: adult dose [FDA]."], transition: "Adult dose.", calcNote: "Fixed tablet." },
  adj: { renal: "No adjustment, including dialysis [UNVERIFIED-KNOWLEDGE].", hepatic: "Contraindicated in moderate or severe impairment (Child-Pugh B or C) [FDA].", pregnancy: "With ribavirin: contraindicated in pregnancy [UNVERIFIED-KNOWLEDGE].", other: "Contraindicated with OATP1B inhibitors (ciclosporin, some HIV drugs) and strong CYP3A inducers (rifampicin, carbamazepine, phenytoin) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: G2_NEP },
  contra: ["Moderate or severe hepatic impairment [FDA].", "OATP1B inhibitors; strong CYP3A inducers; efavirenz [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Fatigue, headache, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatitis B reactivation [FDA]", "Late ALT elevations [FDA]"] },
  monitor: ["Liver tests before, at week 8 and as needed (week 12 if 16 weeks) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Zepatier (elbasvir/grazoprevir) — FDA label (DailyMed)", G2_DM("164dc02a-9180-426a-b8b5-04ab39d2bbd4")], G2_BT],
  dose: { tagline: "Once-daily hepatitis C tablet for genotypes 1 and 4 — test for hepatitis B first.",
    boxedTitle: "Risk of hepatitis B virus reactivation in patients coinfected with HCV and HBV",
    boxed: "Test all patients for evidence of current or prior hepatitis B virus (HBV) infection before initiating treatment with ZEPATIER. HBV reactivation has been reported in HCV/HBV coinfected patients who were undergoing or had completed treatment with HCV direct acting antivirals and were not receiving HBV antiviral therapy. Some cases have resulted in fulminant hepatitis, hepatic failure, and death. Monitor HCV/HBV coinfected patients for hepatitis flare or HBV reactivation during HCV treatment and post-treatment follow-up. Initiate appropriate patient management for HBV infection as clinically indicated [FDA].",
    adult: [{ ind: "HCV genotype 1 or 4", text: "One tablet once daily for 12 weeks (16 weeks with ribavirin in selected patients)." }],
    child: [{ ind: "12 years and older or 30 kg+", text: "Adult dose." }] }
});

FDB_M("guaifenesin", {
  inn: "Guaifenesin", atc: "R05CA03", cls: "Expectorant",
  linked: [],
  forms: ["Extended-release tablet 600 mg, 1,200 mg; immediate-release syrups and tablets (OTC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Thought to increase respiratory secretion volume and reduce viscosity [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Loosening phlegm to make coughs more productive (OTC) [FDA]."], paed: ["ER tablets: 12 years and older [FDA]."] },
  adult: [["ER 600 mg tablets", "1–2 tablets every 12 hours with a full glass of water; no more than 4 tablets in 24 hours; do not crush or chew [FDA]."]],
  paed: { tiers: ["12 years and older: adult dose [FDA].", "Under 12: do not use the ER tablets [FDA]."], transition: "Adult dose from 12 years.", calcNote: "Fixed OTC dose." },
  adj: { renal: G2_NEP, hepatic: G2_NEP, pregnancy: G2_NEP, other: "Stop and see a doctor if cough lasts over 7 days or comes with fever, rash or headache [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting; kidney stones with chronic abuse [UNVERIFIED-KNOWLEDGE].", animal: G2_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, vomiting, dizziness, headache [UNVERIFIED-KNOWLEDGE]."], serious: [G2_NEP] },
  monitor: ["None. [NEP]"],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Guaifenesin extended-release tablets (OTC) — label (DailyMed)", G2_DM("0129f47d-abc2-414c-b4e1-1064c5d6a623")], G2_BT],
  dose: { tagline: "OTC expectorant — limited evidence of benefit.",
    adult: [{ ind: "Productive cough", text: "1–2 ER 600 mg tablets every 12 hours; no more than 4 tablets in 24 hours." }],
    child: [{ ind: "Under 12 years", text: "Do not use the ER tablets." }] }
});

FDB_M("guanfacine", {
  inn: "Guanfacine (extended-release)", atc: "C02AC02", cls: "Central alpha-2A agonist (ADHD)",
  linked: [],
  forms: ["Extended-release tablets 1, 2, 3, 4 mg (not interchangeable with immediate-release) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Prefrontal alpha-2A agonist [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["High-fat meals raise exposure [FDA]."],
  ind: { adult: ["ADHD (monotherapy or with stimulants) [FDA]."], paed: ["ADHD, 6–17 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["ADHD", "Start 1 mg once daily (morning or evening); increase by no more than 1 mg per week; usual 1–7 mg (0.05–0.12 mg/kg target) once daily [FDA]."], ["Stopping", "Taper by no more than 1 mg every 3–7 days (rebound hypertension) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Administration", "Swallow whole; not with high-fat meals [FDA]."]],
  paed: { tiers: ["6–17 years: same titration; target 0.05–0.12 mg/kg/day [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Target range by weight." },
  adj: { renal: "Consider lower doses in significant renal impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Consider lower doses [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: G2_NEP, other: "Strong CYP3A4 inhibitors: halve the dose; inducers: may double [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, bradycardia, drowsiness; initial hypertension [UNVERIFIED-KNOWLEDGE].", animal: G2_LD, manage: "Supportive; monitor 24 h [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to guanfacine (rash, pruritus reported) [FDA]."],
  ae: { common: ["Somnolence, fatigue, headache, abdominal pain, hypotension, bradycardia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension, bradycardia, syncope [FDA] [UNVERIFIED-KNOWLEDGE]", "Rebound hypertension on abrupt stop [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Heart rate and blood pressure at start and each dose change [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [
    { drug: "guanfacine", indication_id: "target", label: "ADHD — target 0.05–0.12 mg/kg once daily (max 7 mg)", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.05, unit: "mg", per: "day", value_max: 0.12 }, interval_h: 24, divided_doses: 1, caps: { max_daily: 7, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "ER tab", strength: 1, unit: "mg/tab", whole: true }], rounding: "Whole 1 mg tablets", renal: [], flags: ["Start 1 mg; increase by no more than 1 mg per week", "Taper to stop"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Guanfacine extended-release tablets — FDA label (DailyMed)", G2_DM("3ec4fed6-cafc-49a0-9540-8d70ac435769")], G2_BT],
  dose: { tagline: "Non-stimulant ADHD tablet — titrate weekly, taper to stop.",
    adult: [{ ind: "ADHD", text: "Start 1 mg once daily; up to 0.05–0.12 mg/kg/day (maximum 7 mg).", calc: ["target"] }],
    child: [{ ind: "ADHD (6–17 years)", text: "Start 1 mg; target 0.05–0.12 mg/kg once daily.", calc: ["target"] }] }
});

FDB_M("guselkumab", {
  inn: "Guselkumab", atc: "L04AC16", cls: "IL-23 antagonist (monoclonal antibody)",
  linked: [["Ulcerative colitis — adults", "Moderate–severe [FDA]", "uc-adult"], ["Crohn's disease — adults", "Moderate–severe [FDA]", "crohns-adult"]],
  forms: ["SC prefilled pen or syringe 100 mg and 200 mg; IV 200 mg vial (induction for UC and Crohn's) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds the p19 subunit of interleukin-23 [UNVERIFIED-KNOWLEDGE].",
  pk: [G2_NEP],
  ind: { adult: ["Moderate–severe plaque psoriasis; psoriatic arthritis; ulcerative colitis; Crohn's disease [FDA]."], paed: ["Psoriasis and psoriatic arthritis, 6 years and older and at least 40 kg [FDA]."] },
  adult: [["Psoriasis, psoriatic arthritis", "100 mg SC at weeks 0 and 4, then every 8 weeks [FDA]."], ["UC and Crohn's disease", "Induction: 200 mg IV over at least 1 hour (or 400 mg SC) at weeks 0, 4 and 8. Maintenance: 100 mg SC at week 16 then every 8 weeks, or 200 mg SC at week 12 then every 4 weeks — lowest effective dose [FDA]."], ["Before starting", "TB evaluation; liver enzymes and bilirubin (always for UC/Crohn's); complete age-appropriate vaccinations [FDA]."]],
  paed: { tiers: ["6 years and older and at least 40 kg (psoriasis, PsA): 100 mg SC at weeks 0 and 4, then every 8 weeks [FDA]."], transition: "Adult dose.", calcNote: "Fixed SC dose." },
  adj: { renal: G2_NEP, hepatic: "Hepatotoxicity reported in IBD induction — interrupt if suspected [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: G2_NEP, other: "No live vaccines [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: G2_NEP, animal: G2_LD, manage: G2_NEP },
  contra: ["History of serious hypersensitivity to guselkumab or excipients [FDA]."],
  ae: { common: ["Upper respiratory infections, headache, injection-site reactions, arthralgia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["TB screening; liver tests in IBD [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: G2_LOC,
  calc: [],
  sources: [["FDA", "Tremfya (guselkumab) — FDA label (DailyMed)", G2_DM("1e6dc9ae-1c4c-42d9-87aa-c315ecc51b56")], G2_BT],
  dose: { tagline: "IL-23 antibody for psoriasis, psoriatic arthritis and IBD.",
    adult: [{ ind: "Plaque psoriasis, PsA", text: "100 mg SC at weeks 0 and 4, then every 8 weeks." }, { ind: "UC, Crohn's", text: "200 mg IV (or 400 mg SC) at weeks 0, 4, 8; then 100 mg SC every 8 weeks or 200 mg SC every 4 weeks." }],
    child: [{ ind: "6 years and older, 40 kg+", text: "100 mg SC at weeks 0 and 4, then every 8 weeks." }] }
});

/* Brand names — BATCH G2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"glatiramer-acetate":{"IN":[["Glatrus","Taj Pharmaceuticals","Glatrus 20 Mg Injection 1 Ml"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/glatrus-20-mg-injection-1-ml-3044619"]},"glimepiride":{"IN":[["Glimp","Zydus Healthcare Limited","Glimp 2Mg Strip Of 10 Tablets"]],"BD":[["SB-Glim","Sunman-Birdem Pharma Ltd","4 mg"],["Glims","Opsonin Pharma Ltd","3 mg"],["Temglip","Team Pharmaceuticals Ltd","2 mg"]],"src":["https://pharmeasy.in/online-medicine-order/glimp-2mg-strip-of-10-tablets-4680","https://medex.com.bd/brands/20730/sb-glim-4-mg-tablet","https://medex.com.bd/brands/30298/glims-3-mg-tablet","https://medex.com.bd/brands/28905/temglip-2-mg-tablet"]},"golimumab":{"IN":[],"BD":[["Simponi","UniMed UniHealth Pharmaceuticals Ltd","50 mg/0.5 ml"]],"src":["https://medex.com.bd/brands/28307/simponi-50-mg-sc-injection"]},"goserelin":{"IN":[["Zoladex","Astrazeneca Pharma India Ltd","Zoladex 3.6Mg Pre Filled Syringe Of 1 Injection"],["Goselin","Astrazeneca Pharma India Ltd","Goselin 3.6 Mg Injection 1"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/zoladex-3-6mg-inj-4002","https://pharmeasy.in/online-medicine-order/goselin-3-6-mg-injection-1-197582"]},"granisetron":{"IN":[["Grandem","Aristo Pharmaceuticals Pvt Ltd","Grandem Md Strip Of 10 Tablets"],["Granitero","Hetero Drugs Ltd","Granitero 3Mg Injection 3"],["Graniforce","Mankind Pharmaceuticals Ltd","Graniforce Md Strip Of 10 Tablets"]],"BD":[["Naurif","Square Pharmaceuticals PLC","1 mg"]],"src":["https://pharmeasy.in/online-medicine-order/grandem-md-tablet-10-s-227983","https://pharmeasy.in/online-medicine-order/granitero-3mg-injection-3-4210969","https://pharmeasy.in/online-medicine-order/graniforce-md-tablet-18391","https://medex.com.bd/brands/4713/naurif-1-mg-tablet"]},"guaifenesin":{"IN":[],"BD":[["Mufree","Beacon Pharmaceuticals PLC","100 mg/5 ml"]],"src":["https://medex.com.bd/brands/38230/mufree-100-mg-syrup"]},"guselkumab":{"IN":[["Tremfya","Johnson \\u0026 Johnson Private Limited","Tremfya 100Mg Pre Filled Syringe Of 1Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/tremfya-100mg-pre-filled-syringe-of-1ml-solution-for-injection-4743613"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
