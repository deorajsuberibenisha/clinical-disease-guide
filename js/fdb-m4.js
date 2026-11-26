/* Clinical Disease Guide — Drug monograph database, batch M-4 (26 Nov 2026).
   Last of M (mosunetuzumab … mycophenolic acid) and first of N (nabumetone … nemolizumab). Same rules as js/fdb-a2.js.
   Uses FDB_M from js/fdb-a2.js (must load after it). Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js.
   Labels replaced: naproxen (prescription suspension label with JIA dosing, not the OTC pack), naltrexone (oral tablets added beside
   the Vivitrol pack), nafcillin (vial label with child doses beside the premixed pack), nalmefene (IV injection added beside Zurnai). */
(function () { // M-4 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const M4_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ALL = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const NSAID_RENAL = "Not recommended in advanced kidney disease; if used, monitor kidney function closely (NSAID class) [FDA].";

FDB_M("mosunetuzumab", {
  inn: "Mosunetuzumab", atc: "L01FX25", cls: "CD20 × CD3 bispecific T-cell engager",
  risk: ONC,
  linked: [],
  forms: ["IV vials 1 mg/mL and 30 mg/30 mL (Lunsumio); SC product Lunsumio VELO has different dosing — not interchangeable [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds CD20 on B cells and CD3 on T cells, causing T-cell killing of B cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsed or refractory follicular lymphoma after two or more lines of systemic therapy (accelerated approval) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Step-up (21-day cycles, IV)", "Cycle 1: day 1 1 mg, day 8 2 mg, day 15 60 mg; cycle 2 day 1: 60 mg; cycles 3 onward day 1: 30 mg [FDA]."], ["Infusion time", "At least 4 hours in cycle 1; 2 hours from cycle 2 if tolerated [FDA]."], ["Premedication", "Before each dose in cycles 1–2: corticosteroid, antihistamine, antipyretic; give to well-hydrated patients [FDA]."], ["Duration", "8 cycles, or 17 if only partial response [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed step-up doses — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus (B-cell depletion) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Do not drive or use machines for 48 hours after the 2 mg and 60 mg cycle 1 doses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Cytokine release syndrome, fatigue, rash, fever, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cytokine release syndrome [FDA]", "Neurological toxicity including ICANS [FDA]", "Serious infections [FDA]", "Cytopenias [FDA]", "Tumour flare [FDA]"] },
  monitor: ["CRS and neurotoxicity after each step-up dose; blood counts; infections [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Lunsumio (mosunetuzumab-axgb) — FDA label (DailyMed)", M4_DM("2ef0cf38-101c-4681-98fe-c05dc9ead443")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Bispecific antibody for relapsed follicular lymphoma — step-up dosing to prevent CRS.",
    boxedTitle: "Cytokine release syndrome",
    boxed: "Cytokine release syndrome (CRS), including serious or life-threatening reactions, can occur in patients receiving LUNSUMIO. Initiate treatment with the LUNSUMIO step-up dosing schedule to reduce the risk of CRS. Withhold LUNSUMIO until CRS resolves or permanently discontinue based on severity [FDA].",
    adult: [{ ind: "Relapsed/refractory follicular lymphoma", text: "Cycle 1: 1 mg, 2 mg, 60 mg (days 1, 8, 15); cycle 2: 60 mg; then 30 mg every 21 days." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("motixafortide", {
  inn: "Motixafortide", atc: "L03AX23", cls: "CXCR4 antagonist (stem cell mobiliser)",
  linked: [],
  forms: ["Powder for injection 62 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks CXCR4 so stem cells are released from the marrow into blood [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["With filgrastim, to mobilise stem cells for collection and autologous transplant in multiple myeloma [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "1.25 mg/kg actual body weight SC, 10–14 hours before the first apheresis; a second dose may be given 10–14 hours before a third apheresis [FDA]."], ["Filgrastim", "10 microgram/kg SC daily for 4 days before the first dose and on each day before apheresis [FDA]."], ["Premedication", "30–60 min before: H1 antihistamine, H2 blocker and leukotriene inhibitor; paracetamol recommended [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adults — mg/kg actual weight." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Not for leukaemia patients — may mobilise leukaemic cells [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of serious hypersensitivity to motixafortide [FDA]."],
  ae: { common: ["Injection-site reactions (pain, redness, itching), pruritus, flushing, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylactic shock and hypersensitivity [FDA]", "Injection-site reactions [FDA]", "Tumour cell mobilisation in leukaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Leukocytosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Observe for 1 hour after dosing for hypersensitivity; white cell count [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "motixafortide", indication_id: "mob", label: "Stem cell mobilisation — 1.25 mg/kg SC", route: "SC", population: ADULT, basis: "mg_per_kg", dose: { value: 1.25, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per pharmacy", renal: [], flags: ["10–14 h before apheresis; after 4 days of filgrastim", "Premedicate; observe 1 hour"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Aphexda (motixafortide) — FDA label (DailyMed)", M4_DM("f7cdc584-ebf0-a68e-e053-6294a90a9ea9")], NEML_SRC],
  dose: { tagline: "CXCR4 blocker with filgrastim for myeloma stem-cell collection — 1.25 mg/kg SC.",
    cautionTitle: "Use with care",
    caution: "Anaphylactic shock and serious hypersensitivity have occurred — premedicate every dose and observe for at least 1 hour with resuscitation available [FDA].",
    adult: [{ ind: "Stem cell mobilisation (myeloma)", text: "1.25 mg/kg SC 10–14 h before apheresis.", calc: ["mob"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const MOX13 = { min_age_months: 48, max_age_months: null, min_weight_kg: 13, max_weight_kg: 15 };
const MOX15 = { min_age_months: 48, max_age_months: null, min_weight_kg: 15, max_weight_kg: 30 };
const MOX30 = { min_age_months: 48, max_age_months: null, min_weight_kg: 30, max_weight_kg: null };
FDB_M("moxidectin", {
  inn: "Moxidectin", atc: "P02CX03", cls: "Macrocyclic lactone anthelmintic (milbemycin)",
  linked: [],
  forms: ["Tablets 2 mg [FDA]."],
  moa: "Binds glutamate-gated chloride channels in nematodes, causing paralysis of microfilariae [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long half-life (weeks) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Onchocerciasis (O. volvulus) — kills microfilariae, not adult worms [FDA]."], paed: ["4 years and over, 13 kg and over [FDA]."] },
  adult: [["Onchocerciasis", "8 mg (four 2 mg tablets) as a single dose, with or without food [FDA]."], ["Loa loa", "Check for Loa loa co-infection where it occurs before treating [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["13 to under 15 kg: 4 mg [FDA].", "15 to under 30 kg: 6 mg [FDA].", "30 kg and over: 8 mg [FDA].", "Under 4 years or under 13 kg: not established [FDA]."], transition: "8 mg from 30 kg.", calcNote: "Weight bands, single dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Mazzotti reaction (itch, rash, fever, oedema, hypotension) from dying microfilariae [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Eosinophilia, pruritus, musculoskeletal pain, headache, rash, abdominal pain, lymphopenia (Mazzotti-type) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Symptomatic orthostatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Encephalopathy risk with heavy Loa loa infection [FDA] [UNVERIFIED-KNOWLEDGE]", "Worsening onchocercal skin or eye inflammation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Observe for Mazzotti reaction and orthostatic hypotension in the first days [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "moxidectin", indication_id: "w13", label: "Onchocerciasis, 13 to under 15 kg — 4 mg once", route: "PO", population: MOX13, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["Single dose", "4 years and over"], sources: ["FDA"] },
    { drug: "moxidectin", indication_id: "w15", label: "Onchocerciasis, 15 to under 30 kg — 6 mg once", route: "PO", population: MOX15, basis: "fixed", dose: { value: 6, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["Single dose", "4 years and over"], sources: ["FDA"] },
    { drug: "moxidectin", indication_id: "w30", label: "Onchocerciasis, 30 kg and over — 8 mg once", route: "PO", population: MOX30, basis: "fixed", dose: { value: 8, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["Single dose", "Adults: 8 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Moxidectin tablets — FDA label (DailyMed)", M4_DM("6eb02ae9-9065-176f-e053-2991aa0ac891")], NEML_SRC],
  dose: { tagline: "Single-dose microfilaricide for river blindness — 8 mg (4–6 mg in smaller children).",
    adult: [{ ind: "Onchocerciasis", text: "8 mg once.", calc: ["w30"] }],
    child: [{ ind: "4 years+, by weight", text: "13 to under 15 kg: 4 mg; 15 to under 30 kg: 6 mg; 30 kg and over: 8 mg — once.", calc: ["w13", "w15", "w30"] }] }
});

FDB_M("mycophenolic-acid", {
  inn: "Mycophenolic acid (mycophenolate sodium)", atc: "L04AA06", cls: "Antimetabolite immunosuppressant (IMPDH inhibitor)",
  linked: [],
  forms: ["Delayed-release tablets 180, 360 mg (Myfortic) [FDA]."],
  moa: "Inhibits inosine monophosphate dehydrogenase, blocking lymphocyte purine synthesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Enteric-coated — 720 mg mycophenolic acid ≈ 1 g mycophenolate mofetil, but the products are not interchangeable without supervision [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prevention of kidney transplant rejection, with ciclosporin and corticosteroids [FDA]."], paed: ["Kidney transplant, 5 years and over and at least 6 months after transplant [FDA]."] },
  adult: [["Kidney transplant", "720 mg twice daily (1,440 mg/day) on an empty stomach, 1 hour before or 2 hours after food [FDA]."], ["Administration", "Swallow whole — do not crush, chew or cut [FDA]."]],
  paed: { tiers: ["5 years and over, at least 6 months post-transplant: 400 mg/m² twice daily, maximum 720 mg twice daily [FDA].", "BSA 1.19–1.58 m²: three 180 mg tablets (or 180 + 360 mg) twice daily, 1,080 mg/day; over 1.58 m²: four 180 mg or two 360 mg tablets twice daily, 1,440 mg/day; under 1.19 m²: tablets cannot give the dose accurately [FDA]."], transition: "Adult dose over 1.58 m².", calcNote: "Child dose by BSA band (text) — tablet sizes only allow set doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Pregnancy loss and malformations — contraception and pregnancy testing required [FDA].", other: "Avoid live vaccines. Antacids with magnesium/aluminium and proton-pump inhibitors lower exposure [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; bile acid sequestrants increase clearance [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to mycophenolate sodium, mycophenolic acid, mycophenolate mofetil or excipients [FDA]."],
  ae: { common: ["Anaemia, leukopenia, constipation, nausea, diarrhoea, vomiting, urinary tract infection, insomnia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Embryo-fetal toxicity [FDA]", "Lymphoma and skin cancer [FDA]", "Serious infections, including PML and BK virus nephropathy [FDA]", "Neutropenia, pure red cell aplasia [FDA] [UNVERIFIED-KNOWLEDGE]", "GI bleeding and perforation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts weekly in month 1, twice monthly in months 2–3, then monthly for the first year; pregnancy tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025; the NEML lists mycophenolate mofetil 250 mg and 500 mg capsules instead — not interchangeable mg for mg [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "mycophenolic-acid", indication_id: "adult", label: "Kidney transplant — 720 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 720, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "DR tablet", strength: 360, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["Empty stomach", "Swallow whole"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Myfortic (mycophenolic acid) delayed-release tablets — FDA label (DailyMed)", M4_DM("eed26501-890d-4ff6-88e7-6dbea4726e53")], NEML_SRC],
  dose: { tagline: "Enteric-coated mycophenolate for kidney transplant — 720 mg twice daily; never in pregnancy.",
    boxedTitle: "Embryo-fetal toxicity, malignancies and serious infections",
    boxed: "Use during pregnancy is associated with increased risks of pregnancy loss and congenital malformations. Avoid if safer treatment options are available. Females of reproductive potential must be counseled regarding pregnancy prevention and planning. Only physicians experienced in immunosuppressive therapy and management of organ transplant patients should prescribe Myfortic. Patients receiving Myfortic should be managed in facilities equipped and staffed with adequate laboratory and supportive medical resources. The physician responsible for maintenance therapy should have complete information requisite for the follow-up of the patient. Increased risk of development of lymphoma and other malignancies, particularly of the skin, due to immunosuppression. Increased susceptibility to bacterial, viral, fungal, and protozoal infections, including opportunistic infections [FDA].",
    adult: [{ ind: "Kidney transplant", text: "720 mg twice daily on an empty stomach.", calc: ["adult"] }],
    child: [{ ind: "5 years+, 6 months post-transplant", text: "400 mg/m² twice daily (max 720 mg): BSA 1.19–1.58 m² three 180 mg tablets twice daily (1,080 mg/day); over 1.58 m² 720 mg twice daily." }] }
});

FDB_M("nabumetone", {
  inn: "Nabumetone", atc: "M01AX01", cls: "NSAID (non-acidic prodrug)",
  linked: [],
  forms: ["Tablets 500, 750 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Prodrug converted to 6-MNA, a cyclo-oxygenase inhibitor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Active metabolite half-life about 24 hours; rises by about 50% in moderate kidney impairment [FDA]."],
  ind: { adult: ["Osteoarthritis and rheumatoid arthritis [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["OA / RA", "Start 1,000 mg once daily with or without food; some need 1,500–2,000 mg/day once or in two doses; over 2,000 mg/day not studied [FDA]."], ["Under 50 kg", "Less likely to need more than 1,000 mg [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults only." },
  adj: { renal: NSAID_RENAL, hepatic: "Monitor liver tests [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Avoid from 30 weeks (premature ductus closure); avoid 20–30 weeks if possible (oligohydramnios) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Use the lowest dose for the shortest time [FDA]." },
  tox: { human: "Lethargy, drowsiness, nausea, epigastric pain; GI bleeding [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; activated charcoal [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to nabumetone [FDA]", "Asthma, urticaria or allergic reaction after aspirin or other NSAIDs [FDA]", "CABG surgery setting [FDA]"],
  ae: { common: ["Diarrhoea, dyspepsia, abdominal pain, constipation, flatulence, nausea, oedema, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiovascular thrombotic events [FDA]", "GI bleeding, ulceration, perforation [FDA]", "Kidney injury, hyperkalaemia [FDA]", "Hepatotoxicity [FDA]", "Heart failure and oedema [FDA]", "Serious skin reactions, DRESS [FDA]"] },
  monitor: ["Blood pressure; kidney and liver tests and blood count on long-term use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nabumetone", indication_id: "oa", label: "OA / RA — start 1,000 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_daily: 2000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tablet", strength: 500, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], renal_note: NSAID_RENAL, flags: ["Up to 2,000 mg/day once or in two doses", "Lowest dose, shortest time"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nabumetone tablets — FDA label (DailyMed)", M4_DM("75c51686-9c5e-4c13-acf4-2d04502eedda")], NEML_SRC],
  dose: { tagline: "Once-daily NSAID for OA and RA — 1,000 mg, up to 2,000 mg/day.",
    boxedTitle: "Risk of serious cardiovascular and gastrointestinal events",
    boxed: "Cardiovascular Thrombotic Events Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. Nabumetone tablets are contraindicated in the setting of coronary artery bypass graft (CABG) surgery. Gastrointestinal Risk • NSAIDs 1 cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients are at greater risk for serious gastrointestinal events. 1 Throughout this package insert, the term NSAID refers to a non-aspirin non-steroidal anti-inflammatory drug [FDA].",
    adult: [{ ind: "Osteoarthritis / rheumatoid arthritis", text: "1,000 mg once daily; up to 2,000 mg/day.", calc: ["oa"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("nadofaragene-firadenovec", {
  inn: "Nadofaragene firadenovec", atc: "L01XL10", cls: "Non-replicating adenoviral gene therapy (interferon alfa-2b)",
  linked: [],
  forms: ["Intravesical suspension 3 × 10¹¹ viral particles/mL, 75 mL dose [FDA]."],
  moa: "Adenoviral vector delivers the interferon alfa-2b gene into bladder cells, which then secrete interferon locally [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["High-risk BCG-unresponsive non-muscle-invasive bladder cancer with carcinoma in situ, with or without papillary tumours [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "75 mL (3 × 10¹¹ vp/mL) by urinary catheter into the bladder once every 3 months; retain for 1 hour [FDA]."], ["Premedication", "Anticholinergic before each instillation [FDA]."], ["Handling", "Biosafety precautions; immunosuppressed staff should not handle it [FDA]."], ["Not for", "IV, topical or oral use [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed intravesical dose — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Delay in cystectomy can lead to metastatic disease — consider cystectomy if no complete response [FDA] [UNVERIFIED-KNOWLEDGE]. Household contacts: avoid contact with urine [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Prior hypersensitivity to interferon alfa or any component [FDA]", "Immunosuppressed or immunodeficient patients [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Instillation-site discharge, fatigue, bladder spasm, urgency, haematuria, chills, fever, dysuria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Risk of disease progression with delayed cystectomy [FDA] [UNVERIFIED-KNOWLEDGE]", "Disseminated adenovirus infection in the immunosuppressed [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cystoscopy and cytology every 3 months [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Adstiladrin (nadofaragene firadenovec-vncg) — FDA label (DailyMed)", M4_DM("5ca20ed4-da4f-463c-ac2a-ccd6ab3774fa")], NEML_SRC],
  dose: { tagline: "Intravesical gene therapy for BCG-unresponsive bladder CIS — 75 mL every 3 months.",
    cautionTitle: "Use with care",
    caution: "For bladder instillation only. Follow biosafety handling rules; immunosuppressed people must not prepare or handle it. Consider cystectomy if no complete response [FDA].",
    adult: [{ ind: "BCG-unresponsive NMIBC with CIS", text: "75 mL intravesically every 3 months; hold 1 hour." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("nadolol", {
  inn: "Nadolol", atc: "C07AA12", cls: "Non-selective beta-blocker",
  linked: [],
  forms: ["Tablets 20, 40, 80 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks beta-1 and beta-2 adrenoceptors; no intrinsic sympathomimetic activity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not metabolised; excreted by the kidneys; long half-life [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Long-term management of angina pectoris [FDA].", "Hypertension [FDA].", "Used off-label for variceal bleeding prophylaxis and congenital long QT [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Angina", "Start 40 mg once daily; raise by 40–80 mg every 3–7 days; usual 40–80 mg, up to 160–240 mg once daily [FDA]."], ["Hypertension", "Start 40 mg once daily; usual 40–80 mg; up to 240–320 mg once daily [FDA]."], ["Stopping", "Taper over 1–2 weeks — abrupt stop can worsen angina or cause MI [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adults — starting dose." },
  adj: { renal: "Lengthen the interval by CrCl (mL/min/1.73 m²): over 50: every 24 h; 31–50: every 24–36 h; 10–30: every 24–48 h; under 10: every 40–60 h [FDA].", hepatic: NEP, pregnancy: NEP, other: "Masks hypoglycaemia and thyrotoxicosis signs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bradycardia, heart failure, hypotension, bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Atropine, then isoprenaline or glucagon; bronchodilator; haemodialysis removes nadolol [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Bronchial asthma [FDA]", "Sinus bradycardia and heart block greater than first degree [FDA]", "Cardiogenic shock [FDA]", "Overt cardiac failure [FDA]"],
  ae: { common: ["Bradycardia, dizziness, fatigue, cold extremities [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Heart failure [FDA]", "Worsening angina or MI after abrupt withdrawal [FDA]", "Bronchospasm [FDA]", "Masked hypoglycaemia [FDA]"] },
  monitor: ["Heart rate and blood pressure; kidney function for interval [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nadolol", indication_id: "start", label: "Angina / hypertension — start 40 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 40, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], renal_note: "Kidney impairment: lengthen the interval — CrCl 31–50: 24–36 h; 10–30: 24–48 h; under 10: 40–60 h [FDA].", flags: ["Titrate by 40–80 mg", "Never stop abruptly"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nadolol tablets — FDA label (DailyMed)", M4_DM("f11553f1-18ec-41b0-a7ad-1c9f21ef2c9f")], NEML_SRC],
  dose: { tagline: "Long-acting non-selective beta-blocker — 40 mg once daily; lengthen the interval in kidney disease.",
    cautionTitle: "Use with care",
    caution: "Do not stop suddenly — taper over 1–2 weeks; abrupt withdrawal can worsen angina or cause MI. Contraindicated in asthma. Lengthen the interval in kidney impairment [FDA].",
    adult: [{ ind: "Angina / hypertension", text: "40 mg once daily; usual 40–80 mg.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("nafarelin", {
  inn: "Nafarelin", atc: "H01CA02", cls: "Gonadotropin-releasing hormone (GnRH) agonist",
  linked: [],
  forms: ["Nasal spray 2 mg/mL — 200 microgram per spray [FDA]."],
  moa: "Continuous GnRH-receptor stimulation down-regulates the pituitary, suppressing sex steroids [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Endometriosis, 18 years and over [FDA]."], paed: ["Central precocious puberty in children of both sexes [FDA]."] },
  adult: [["Endometriosis", "400 microgram/day: 1 spray (200 microgram) into one nostril in the morning and 1 into the other in the evening, starting on day 2–4 of the cycle; may increase to 800 microgram/day; 6 months [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Technique", "Avoid nasal decongestants for 2 hours after a dose [FDA]."]],
  paed: { tiers: ["Central precocious puberty: 1,600 microgram/day — 2 sprays into each nostril morning and evening (8 sprays) [FDA].", "If not suppressed: 1,800 microgram/day — 3 sprays into alternating nostrils three times daily (9 sprays) [FDA]."], transition: "Continue until puberty is wanted.", calcNote: "Fixed sprays — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Contraindicated [FDA].", other: "Bone density loss with long use [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to GnRH, GnRH agonists or excipients [FDA]", "Undiagnosed abnormal vaginal bleeding [FDA]", "Pregnancy or possible pregnancy [FDA]", "Breastfeeding [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Hot flushes, decreased libido, vaginal dryness, headache, acne, nasal irritation [FDA] [UNVERIFIED-KNOWLEDGE].", "CPP: transient increase in pubertal signs in the first weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bone mineral density loss [FDA] [UNVERIFIED-KNOWLEDGE]", "Ovarian cysts [FDA] [UNVERIFIED-KNOWLEDGE]", "Psychiatric events, convulsions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["CPP: LH/FSH and sex steroid suppression, growth and bone age; endometriosis: bone density on repeat courses [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Synarel (nafarelin acetate) nasal solution — FDA label (DailyMed)", M4_DM("d0aa57cb-d2f4-46d7-af43-7c8b06aa81a6")], NEML_SRC],
  dose: { tagline: "Nasal GnRH agonist for central precocious puberty (1,600 microgram/day) and endometriosis.",
    adult: [{ ind: "Endometriosis", text: "200 microgram (1 spray) twice daily for 6 months." }],
    child: [{ ind: "Central precocious puberty", text: "2 sprays each nostril twice daily (1,600 microgram/day)." }] }
});

const NAF_CH = { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: 40 };
const NAF_NEO = { min_age_months: null, max_age_months: 1, min_weight_kg: null, max_weight_kg: null };
FDB_M("nafcillin", {
  inn: "Nafcillin", atc: "J01CF06", cls: "Penicillinase-resistant penicillin",
  linked: [],
  forms: ["Powder for injection 1 g, 2 g, 10 g; premixed frozen 1 g and 2 g in 50/100 mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Beta-lactam resistant to staphylococcal penicillinase; inhibits cell-wall synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Cleared mainly by the liver and bile; no kidney dose change; not removed by haemodialysis [FDA]."],
  ind: { adult: ["Infections due to penicillinase-producing staphylococci (MSSA) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Usual", "500 mg IV every 4 hours [FDA]."], ["Severe", "1 g IV every 4 hours; infuse over 30–60 minutes [FDA]."], ["IM", "500 mg every 4–6 hours [FDA]."], ["Duration", "Severe staphylococcal infection at least 14 days; longer for endocarditis and osteomyelitis [FDA]."]],
  paed: { tiers: ["Infants and children under 40 kg: 25 mg/kg IM twice daily [FDA].", "Neonates: 10 mg/kg IM twice daily [FDA].", "Higher IV doses are used in practice for serious infections [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing from 40 kg.", calcNote: "Label IM doses for children; adult IV dose from 40 kg." },
  adj: { renal: "No change, including haemodialysis [FDA].", hepatic: "Caution with combined hepatic and renal impairment (neurotoxicity) [FDA].", pregnancy: NEP, other: "Extravasation can cause severe tissue necrosis [FDA]. Neonates: excretion may be impaired — monitor levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Neurotoxicity (as with penicillin G), especially with hepatic and renal impairment [FDA].", animal: LD, manage: "Stop; supportive; not removed by haemodialysis [FDA]." },
  contra: ["History of anaphylaxis to any penicillin [FDA]", "Dextrose-containing premix: corn allergy [FDA]"],
  ae: { common: ["Phlebitis, rash, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Interstitial nephritis [FDA]", "Neutropenia, agranulocytosis [FDA]", "Hepatotoxicity, cholestasis [FDA]", "C. difficile colitis [FDA]", "Hypokalaemia at high doses [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, kidney and liver tests on courses over 1–2 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nafcillin", indication_id: "adult", label: "MSSA infection — 500 mg–1 g IV every 4 hours", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: 40, max_weight_kg: null }, basis: "fixed", dose: { value: 500, value_max: 1000, unit: "mg", per: "dose" }, interval_h: 4, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [], rounding: "per vial", renal: [], flags: ["1 g every 4 h for severe infection", "Infuse over 30–60 min; no kidney adjustment"], sources: ["FDA"] },
    { drug: "nafcillin", indication_id: "child", label: "Infant/child under 40 kg — 25 mg/kg IM twice daily", route: "IM", population: NAF_CH, basis: "mg_per_kg", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [], rounding: "per vial", renal: [], flags: ["Label IM dose"], sources: ["FDA"] },
    { drug: "nafcillin", indication_id: "neo", label: "Neonate — 10 mg/kg IM twice daily", route: "IM", population: NAF_NEO, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [], rounding: "per vial", renal: [], flags: ["Label IM dose; excretion may be impaired"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nafcillin for injection — FDA label (DailyMed)", M4_DM("090fda61-b9c8-640e-e063-6294a90a7363")], ["FDA", "Nafcillin injection (premixed, Baxter) — FDA label (DailyMed)", M4_DM("cd2d18c5-95a2-4fb4-bd8b-b5d39e2da416")], NEML_SRC],
  dose: { tagline: "Anti-staphylococcal penicillin — 0.5–1 g IV every 4 hours; no kidney adjustment.",
    adult: [{ ind: "MSSA infection", text: "500 mg–1 g IV every 4 hours.", calc: ["adult"] }],
    child: [{ ind: "Under 40 kg", text: "25 mg/kg IM twice daily.", calc: ["child"] }, { ind: "Neonates", text: "10 mg/kg IM twice daily.", calc: ["neo"] }] }
});

FDB_M("naftifine", {
  inn: "Naftifine", atc: "D01AE22", cls: "Allylamine antifungal (topical)",
  linked: [],
  forms: ["Gel 2%; cream 1%, 2% [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits fungal squalene epoxidase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal systemic absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Interdigital tinea pedis (T. rubrum, T. mentagrophytes, E. floccosum) [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Tinea pedis (gel 2%)", "Thin layer once daily to the affected area plus about ½ inch of surrounding skin for 2 weeks [FDA]."], ["Not for", "Eyes, mouth or vagina [FDA]."]],
  paed: { tiers: ["12 years and over: same [FDA].", "Under 12 years: not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same from 12 years.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Application-site burning, itching, redness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: ["Clinical response at 2–4 weeks [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Naftin (naftifine) gel 2% — FDA label (DailyMed)", M4_DM("6c6ee055-4031-45a7-8561-ccd989343580")], NEML_SRC],
  dose: { tagline: "Topical allylamine for athlete's foot — gel once daily for 2 weeks.",
    adult: [{ ind: "Interdigital tinea pedis", text: "Once daily for 2 weeks." }],
    child: [{ ind: "12 years and over", text: "Same." }] }
});

FDB_M("nalbuphine", {
  inn: "Nalbuphine", atc: "N02AF02", cls: "Opioid agonist–antagonist (kappa agonist, mu antagonist)",
  risk: "High-alert medication (opioid, IV) [ISMP]",
  linked: [],
  forms: ["Injection 10 mg/mL and 20 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Kappa-opioid agonist and partial mu antagonist — ceiling effect on respiratory depression [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Pain severe enough to need an opioid when alternatives are inadequate [FDA].", "Supplement to balanced anaesthesia, preoperative and postoperative analgesia, obstetric analgesia in labour [FDA]."], paed: ["Not established by label [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Analgesia", "10 mg per 70 kg SC, IM or IV, every 3–6 hours as needed; non-tolerant maximum 20 mg per dose and 160 mg/day [FDA]."], ["Anaesthesia supplement", "Induction 0.3–3 mg/kg IV over 10–15 min; maintenance 0.25–0.5 mg/kg single IV doses as needed [FDA]."], ["Safety", "Have naloxone, oxygen and airway equipment ready [FDA]."]],
  paed: { tiers: ["Not established by label [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing at 18 years.", calcNote: "Adult analgesic dose." },
  adj: { renal: "Use lower doses [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Use lower doses [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Labour: fetal bradycardia and neonatal respiratory depression possible [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Can precipitate withdrawal in people dependent on mu-opioids [FDA]." },
  tox: { human: "Sedation, dysphoria, respiratory depression (ceiling effect) [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Naloxone; oxygen and ventilatory support [FDA]." },
  contra: ["Significant respiratory depression [FDA]", "Acute or severe asthma without monitoring and resuscitation equipment [FDA]", "Known or suspected GI obstruction including paralytic ileus [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Sedation (about 36%), sweating, nausea, vomiting, dizziness, dry mouth, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Life-threatening respiratory depression [FDA]", "Addiction, abuse, misuse [FDA]", "Neonatal opioid withdrawal syndrome with prolonged pregnancy use [FDA]", "Profound sedation with benzodiazepines or other CNS depressants [FDA]", "Withdrawal in opioid-dependent patients [FDA]"] },
  monitor: ["Respiratory rate, sedation and oxygen saturation, especially in the first 24–72 hours and after dose changes [FDA]."],
  local: notBT,
  calc: [
    { drug: "nalbuphine", indication_id: "pain", label: "Analgesia — 10 mg (per 70 kg) every 3–6 hours as needed", route: "IV/IM/SC", population: ADULT, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 3, divided_doses: null, caps: { max_single: 20, max_daily: 160, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], renal_note: "Kidney or liver impairment: use lower doses [FDA].", flags: ["Every 3–6 h as needed; max 20 mg per dose, 160 mg/day", "Have naloxone ready"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nalbuphine hydrochloride injection — FDA label (DailyMed)", M4_DM("dd621bfa-ce48-4c27-b247-a6d885f70b72")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Mixed agonist–antagonist opioid injection — 10 mg/70 kg every 3–6 h; max 160 mg/day.",
    boxedTitle: "Serious and life-threatening risks from use of nalbuphine hydrochloride injection",
    boxed: "Addiction, Abuse, and Misuse Because the use of nalbuphine hydrochloride injection exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient's risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Life-Threatening Respiratory Depression Serious, life-threatening, or fatal respiratory depression may occur with use of nalbuphine hydrochloride injection, especially during initiation or following a dosage increase. To reduce the risk of respiratory depression, proper dosing, and titration of nalbuphine hydrochloride injection are essential. Risks from Concomitant Use With Benzodiazepines Or Other CNS Depressants Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of nalbuphine hydrochloride injection and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate [FDA].",
    adult: [{ ind: "Moderate–severe pain", text: "10 mg/70 kg every 3–6 h; max 20 mg/dose, 160 mg/day.", calc: ["pain"] }],
    child: [{ ind: "Children", text: "Not established by label." }] }
});

FDB_M("naldemedine", {
  inn: "Naldemedine", atc: "A06AH05", cls: "Peripherally acting mu-opioid receptor antagonist (PAMORA)",
  linked: [],
  forms: ["Tablets 0.2 mg [FDA]."],
  moa: "Blocks gut mu-opioid receptors without reversing central analgesia [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Opioid-induced constipation in chronic non-cancer pain (including prior cancer-related pain) without frequent opioid escalation [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["OIC", "0.2 mg once daily with or without food; no need to change the opioid dose [FDA]."], ["Stop", "When the opioid is stopped [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe impairment: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "May precipitate opioid withdrawal in the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known or suspected GI obstruction or high risk of recurrent obstruction [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Abdominal pain, diarrhoea, nausea, gastroenteritis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Opioid withdrawal [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Severe or persistent abdominal pain — stop and assess [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "naldemedine", indication_id: "oic", label: "Opioid-induced constipation — 0.2 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 0.2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 0.2, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Stop when opioids are stopped"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Symproic (naldemedine) tablets — FDA label (DailyMed)", M4_DM("b1a1256c-a1eb-4abe-ab1e-30e4711afd16")], NEML_SRC],
  dose: { tagline: "PAMORA for opioid-induced constipation — 0.2 mg once daily.",
    adult: [{ ind: "Opioid-induced constipation", text: "0.2 mg once daily.", calc: ["oic"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NALM12 = { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
FDB_M("nalmefene", {
  inn: "Nalmefene", atc: "N07BB05", cls: "Opioid antagonist",
  linked: [],
  forms: ["Auto-injector 1.5 mg (Zurnai, IM/SC) [FDA].", "Injection 100 microgram/mL (blue, postoperative) and 1 mg/mL (green, overdose) [FDA].", "Nasal spray (Opvee) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Competitive mu-opioid antagonist; longer acting than naloxone [FDA].",
  pk: ["Half-life about 10 hours [FDA]."],
  ind: { adult: ["Emergency treatment of known or suspected opioid overdose [FDA].", "IV: reversal of postoperative opioid depression [FDA]."], paed: ["Zurnai: 12 years and over [FDA]."] },
  adult: [["Zurnai auto-injector", "1.5 mg IM or SC into the outer thigh (through clothing if needed); repeat with a new device every 2–5 minutes if no response or relapse; seek emergency care [FDA]."], ["IV overdose (1 mg/mL)", "0.5 mg/70 kg; if needed 1 mg/70 kg 2–5 minutes later; no further benefit beyond 1.5 mg/70 kg [FDA]."], ["IV postoperative (100 microgram/mL)", "0.25 microgram/kg every 2–5 minutes to effect; no added benefit above 1 microgram/kg total [FDA]."], ["Opioid-dependent patients", "Start with a low test dose — can precipitate withdrawal [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Zurnai: 12 years and over — 1.5 mg [FDA].", "Under 12 years: not established [FDA]."], transition: "Adult dose from 12 years.", calcNote: "Zurnai fixed dose from 12 years." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "May cause fetal withdrawal in opioid-dependent mothers [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Two strengths of the IV injection — colour-coded; check before use [FDA]." },
  tox: { human: "Precipitated withdrawal [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to nalmefene or ingredients [FDA]."],
  ae: { common: ["Nausea, vomiting, tachycardia, hypertension, headache, chills [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute opioid withdrawal (can be severe in neonates) [FDA]", "Recurrent respiratory depression when the opioid outlasts nalmefene [FDA]", "Cardiovascular events after abrupt reversal (pulmonary oedema, arrhythmia) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Breathing and consciousness until emergency care takes over; observe for re-sedation [FDA]."],
  local: notBT,
  calc: [
    { drug: "nalmefene", indication_id: "zurnai", label: "Opioid overdose (Zurnai), 12 years+ — 1.5 mg IM/SC", route: "IM/SC", population: NALM12, basis: "fixed", dose: { value: 1.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "auto-injector", strength: 1.5, unit: "mg", whole: true }], rounding: "1 device", renal: [], flags: ["Repeat with a new device every 2–5 min if needed", "Call emergency services"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Zurnai (nalmefene) auto-injector — FDA label (DailyMed)", M4_DM("a59a5847-9fe4-4341-a203-be0a5e6d3e36")], ["FDA", "Nalmefene hydrochloride injection — FDA label (DailyMed)", M4_DM("22d67228-6c24-47ca-afc7-52ef279520a0")], NEML_SRC],
  dose: { tagline: "Long-acting opioid antagonist — 1.5 mg auto-injector or 0.5 mg/70 kg IV for overdose.",
    cautionTitle: "Use with care",
    caution: "Two IV strengths (100 microgram/mL and 1 mg/mL) — check the colour-coded label. Abrupt reversal can cause severe withdrawal; watch for re-sedation [FDA].",
    adult: [{ ind: "Opioid overdose", text: "Zurnai 1.5 mg IM/SC, repeat every 2–5 min; or IV 0.5 mg/70 kg then 1 mg/70 kg.", calc: ["zurnai"] }, { ind: "Postoperative opioid depression", text: "0.25 microgram/kg IV every 2–5 min to effect (max 1 microgram/kg)." }],
    child: [{ ind: "12 years and over", text: "Zurnai 1.5 mg.", calc: ["zurnai"] }] }
});

FDB_M("naloxegol", {
  inn: "Naloxegol", atc: "A06AH03", cls: "Peripherally acting mu-opioid receptor antagonist (PAMORA)",
  linked: [],
  forms: ["Tablets 12.5, 25 mg [FDA]."],
  moa: "PEGylated naloxone that does not cross the blood–brain barrier; blocks gut mu receptors [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — strong inhibitors contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Opioid-induced constipation in chronic non-cancer pain (including prior cancer-related pain) without frequent opioid escalation [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["OIC", "25 mg once daily on an empty stomach (1 hour before or 2 hours after the first meal); 12.5 mg if not tolerated [FDA]."], ["Laxatives", "Stop maintenance laxatives first; may restart after 3 days if needed [FDA]."], ["Swallowing problems", "Tablet can be crushed in water or given by NG tube [FDA]."], ["Avoid", "Grapefruit [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "CrCl under 60: 12.5 mg once daily; may increase to 25 mg if tolerated [FDA].", hepatic: "Severe impairment: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "May precipitate fetal opioid withdrawal [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Moderate CYP3A4 inhibitors: avoid or use 12.5 mg [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Opioid withdrawal in an overdose case [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known or suspected GI obstruction or high risk of recurrent obstruction [FDA]", "Strong CYP3A4 inhibitors (e.g. clarithromycin, ketoconazole) [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Abdominal pain, diarrhoea, nausea, flatulence, vomiting, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Opioid withdrawal [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Severe abdominal pain — stop and assess [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "naloxegol", indication_id: "oic", label: "Opioid-induced constipation — 25 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 25, unit: "mg", whole: true }, { form: "tablet", strength: 12.5, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["Empty stomach, before the first meal", "Stop maintenance laxatives first"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Movantik (naloxegol) tablets — FDA label (DailyMed)", M4_DM("28596788-b73f-4247-85fc-3105f51fff5a")], NEML_SRC],
  dose: { tagline: "PAMORA for opioid-induced constipation — 25 mg once daily (12.5 mg if CrCl under 60).",
    adult: [{ ind: "Opioid-induced constipation", text: "25 mg once daily; 12.5 mg if not tolerated or CrCl under 60.", calc: ["oic"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("naltrexone", {
  inn: "Naltrexone", atc: "N07BB04", cls: "Opioid antagonist",
  linked: [],
  forms: ["Tablets 50 mg [FDA].", "Extended-release injectable suspension 380 mg (monthly IM) [FDA]."],
  moa: "Competitive mu-opioid antagonist; reduces alcohol reward [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Oral: active metabolite 6-beta-naltrexol [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Alcohol dependence, with psychosocial support [FDA].", "Blockade of exogenous opioids after opioid detoxification [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Alcohol dependence (oral)", "50 mg once daily [FDA]."], ["Opioid dependence (oral)", "Start 25 mg; if no withdrawal, 50 mg daily [FDA]."], ["Extended-release injection", "380 mg deep IM gluteal every 4 weeks, alternating buttocks; given by a health worker [FDA]."], ["Before starting", "Opioid-free for at least 7–10 days; consider a naloxone challenge [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed doses." },
  adj: { renal: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Hepatocellular injury reported at high doses; avoid in acute hepatitis or liver failure [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Blocks opioid analgesics — use non-opioid analgesia; attempts to overcome blockade can cause fatal overdose; tolerance is lost after stopping [FDA]." },
  tox: { human: "Oral doses up to 800 mg/day for a week without toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Receiving opioid analgesics [FDA]", "Current physiological opioid dependence [FDA]", "Acute opioid withdrawal [FDA]", "Failed naloxone challenge or positive urine opioid screen [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, headache, dizziness, fatigue, insomnia, anxiety, vomiting [FDA] [UNVERIFIED-KNOWLEDGE].", "Injection: injection-site pain, induration [FDA]."], serious: ["Precipitated opioid withdrawal [FDA]", "Opioid overdose after stopping or trying to overcome the block [FDA]", "Injection-site necrosis and abscess [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Depression and suicidality [FDA] [UNVERIFIED-KNOWLEDGE]", "Eosinophilic pneumonia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests; mood; injection sites [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "naltrexone", indication_id: "oral", label: "Alcohol or opioid dependence — 50 mg once daily (oral)", route: "PO", population: ADULT, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: false }], rounding: "half tablets for 25 mg start", renal: [], flags: ["Opioid dependence: start 25 mg", "Opioid-free 7–10 days first"], sources: ["FDA"] },
    { drug: "naltrexone", indication_id: "xr", label: "Extended-release — 380 mg IM every 4 weeks", route: "IM", population: ADULT, basis: "fixed", dose: { value: 380, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "kit", strength: 380, unit: "mg", whole: true }], rounding: "1 kit", renal: [], flags: ["Deep gluteal IM; alternate sides", "Opioid-free 7–10 days first"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Naltrexone hydrochloride tablets — FDA label (DailyMed)", M4_DM("00c04ff4-b6f2-466c-9ab9-813a60577db0")], ["FDA", "Naltrexone for extended-release injectable suspension — FDA label (DailyMed)", M4_DM("6de5637f-d527-4228-af1a-3aae71155cb5")], NEML_SRC],
  dose: { tagline: "Opioid antagonist for alcohol and opioid dependence — 50 mg daily or 380 mg IM monthly.",
    cautionTitle: "Use with care",
    caution: "Never start in someone still using opioids — confirm 7–10 opioid-free days. Tolerance falls after stopping, so a former dose of opioid can then be fatal [FDA].",
    adult: [{ ind: "Alcohol / opioid dependence", text: "50 mg once daily (opioid: start 25 mg), or 380 mg IM every 4 weeks.", calc: ["oral", "xr"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NAP_CH = { min_age_months: 24, max_age_months: 216, min_weight_kg: null, max_weight_kg: null };
FDB_M("naproxen", {
  inn: "Naproxen", atc: "M01AE02", cls: "NSAID (propionic acid)",
  linked: [],
  forms: ["Tablets 250, 375, 500 mg; delayed-release and controlled-release tablets; suspension 125 mg/5 mL; naproxen sodium 220 mg (OTC) — 220 mg sodium salt ≈ 200 mg naproxen [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Non-selective COX inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 12–17 hours [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["RA, OA, ankylosing spondylitis; pain; primary dysmenorrhoea; acute tendonitis and bursitis; acute gout [FDA]."], paed: ["Polyarticular juvenile idiopathic arthritis [FDA]."] },
  adult: [["RA / OA / AS", "250, 375 or 500 mg twice daily; up to 1,500 mg/day for up to 6 months if tolerated [FDA]."], ["Pain, dysmenorrhoea, tendonitis", "500 mg first, then 250 mg every 6–8 hours as needed [FDA]."], ["Acute gout", "750 mg first, then 250 mg every 8 hours until the attack subsides [FDA]."], ["Do not combine", "With other naproxen products [FDA]."]],
  paed: { tiers: ["Polyarticular JIA: about 10 mg/kg/day in 2 doses (5 mg/kg twice daily) — e.g. 13 kg 62.5 mg, 25 kg 125 mg, 38 kg 187.5 mg twice daily [FDA].", "Use a calibrated oral syringe, not a household spoon [FDA]."], transition: "Adult dosing at adult weight.", calcNote: "JIA 5 mg/kg twice daily." },
  adj: { renal: NSAID_RENAL, hepatic: "Consider lower doses [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Avoid from 30 weeks; avoid 20–30 weeks if possible (oligohydramnios) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Older adults: consider lower doses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Lethargy, drowsiness, nausea, epigastric pain; rarely GI bleeding, seizures, kidney failure [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; activated charcoal within hours [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to naproxen [FDA]", "Asthma, urticaria or allergic reactions after aspirin or other NSAIDs [FDA]", "CABG surgery setting [FDA]"],
  ae: { common: ["Dyspepsia, heartburn, abdominal pain, nausea, constipation, headache, dizziness, drowsiness, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiovascular thrombotic events [FDA]", "GI bleeding, ulceration, perforation [FDA]", "Kidney injury, hyperkalaemia [FDA]", "Hepatotoxicity [FDA]", "Heart failure [FDA]", "Serious skin reactions, DRESS [FDA]"] },
  monitor: ["Blood pressure; kidney and liver tests and blood count on long-term use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "naproxen", indication_id: "arthritis", label: "RA / OA / AS — 250–500 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 250, value_max: 500, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 250, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], renal_note: NSAID_RENAL, flags: ["Up to 1,500 mg/day for up to 6 months if tolerated"], sources: ["FDA"] },
    { drug: "naproxen", indication_id: "jia", label: "Polyarticular JIA — 5 mg/kg twice daily", route: "PO", population: NAP_CH, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "suspension", strength: 25, unit: "mg/mL" }], rounding: "0.5 mL", renal: [], renal_note: NSAID_RENAL, flags: ["About 10 mg/kg/day in 2 doses", "Use a calibrated oral syringe"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Naproxen oral suspension 125 mg/5 mL — FDA label (DailyMed)", M4_DM("252726a7-757a-4b97-b5b8-ffff4ac1d103")], NEML_SRC],
  dose: { tagline: "Twice-daily NSAID — 250–500 mg twice daily; JIA 5 mg/kg twice daily.",
    boxedTitle: "Risk of serious cardiovascular and gastrointestinal events",
    boxed: "Cardiovascular Thrombotic Events Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. Naproxen oral suspension is contraindicated in the setting of coronary artery bypass graft (CABG) surgery. Gastrointestinal Bleeding, Ulceration, and Perforation NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients and patients with a prior history of peptic ulcer disease and/or GI bleeding are at greater risk for serious GI events [FDA].",
    adult: [{ ind: "Arthritis", text: "250–500 mg twice daily.", calc: ["arthritis"] }, { ind: "Pain / dysmenorrhoea", text: "500 mg, then 250 mg every 6–8 h as needed." }, { ind: "Acute gout", text: "750 mg, then 250 mg every 8 h." }],
    child: [{ ind: "Polyarticular JIA", text: "5 mg/kg twice daily.", calc: ["jia"] }] }
});

FDB_M("naratriptan", {
  inn: "Naratriptan", atc: "N02CC02", cls: "Triptan (5-HT1B/1D agonist)",
  linked: [],
  forms: ["Tablets 1, 2.5 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "5-HT1B/1D agonist — cranial vasoconstriction and inhibition of trigeminal neuropeptide release [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 6 hours) among triptans; mainly excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute treatment of migraine with or without aura [FDA]."], paed: ["Not recommended under 18 years [FDA]."] },
  adult: [["Migraine", "1 mg or 2.5 mg; may repeat once after 4 hours; maximum 5 mg in 24 hours [FDA]."], ["Mild–moderate kidney or liver impairment", "Start 1 mg; maximum 2.5 mg in 24 hours [FDA]."], ["Frequency", "Safety of treating more than 4 attacks in 30 days not established [FDA]."]],
  paed: { tiers: ["Not recommended under 18 years [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "CrCl under 15: contraindicated; mild–moderate: start 1 mg, max 2.5 mg/24 h [FDA].", hepatic: "Severe (Child-Pugh C): contraindicated; mild–moderate: start 1 mg, max 2.5 mg/24 h [FDA].", pregnancy: NEP, other: "Not within 24 hours of another triptan or ergot [FDA]." },
  tox: { human: "Raised blood pressure; chest symptoms [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; ECG monitoring for at least 24 hours [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Ischaemic coronary artery disease or coronary vasospasm [FDA]", "WPW or other accessory-pathway arrhythmias [FDA]", "Stroke, TIA, hemiplegic or basilar migraine [FDA]", "Peripheral vascular disease, ischaemic bowel disease [FDA]", "Uncontrolled hypertension [FDA]", "Another triptan or ergot within 24 hours [FDA]", "Severe renal (CrCl under 15) or hepatic impairment [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Paraesthesia, dizziness, drowsiness, malaise, nausea, throat/neck pressure [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myocardial ischaemia, infarction, arrhythmias [FDA]", "Stroke [FDA]", "Medication-overuse headache [FDA]", "Serotonin syndrome [FDA]"] },
  monitor: ["Cardiovascular risk assessment before first dose in at-risk patients [FDA]."],
  local: notBT,
  calc: [
    { drug: "naratriptan", indication_id: "migraine", label: "Acute migraine — 1–2.5 mg", route: "PO", population: ADULT, basis: "fixed", dose: { value: 1, value_max: 2.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 2.5, unit: "mg", whole: true }, { form: "tablet", strength: 1, unit: "mg", whole: true }], rounding: "whole tablets", renal: [{ crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "contraindicated at CrCl under 15 mL/min" }], renal_note: "Mild–moderate kidney impairment: start 1 mg; no more than 2.5 mg in 24 hours [FDA].", flags: ["May repeat once after 4 h", "Max 5 mg in 24 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Naratriptan tablets — FDA label (DailyMed)", M4_DM("63ea356f-0895-4540-b242-8e611eacd938")], NEML_SRC],
  dose: { tagline: "Long-acting triptan for migraine — 1–2.5 mg, repeat once after 4 h; max 5 mg/day.",
    adult: [{ ind: "Acute migraine", text: "1 or 2.5 mg; repeat once after 4 h; max 5 mg/24 h.", calc: ["migraine"] }],
    child: [{ ind: "Under 18", text: "Not recommended." }] }
});

FDB_M("natalizumab", {
  inn: "Natalizumab", atc: "L04AG03", cls: "Alpha-4 integrin antagonist monoclonal antibody",
  linked: [],
  forms: ["Concentrate 300 mg/15 mL for IV infusion [FDA]."],
  moa: "Blocks alpha-4 integrin, preventing leukocyte migration into the brain and gut [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsing multiple sclerosis, as monotherapy [FDA].", "Moderate–severe Crohn's disease with inadequate response to, or intolerance of, conventional therapy and TNF inhibitors [FDA]."], paed: ["Not indicated under 18 years [FDA]."] },
  adult: [["MS / Crohn's", "300 mg IV over 1 hour every 4 weeks; never IV push [FDA]."], ["Observation", "During every infusion; 1 hour after for the first 12 infusions [FDA]."], ["Crohn's", "Stop if no benefit by 12 weeks, or if steroids cannot be stopped within 6 months [FDA]."], ["Access", "US: only through the TOUCH prescribing programme [FDA]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: "Stop for jaundice or liver injury [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Haematological changes in exposed newborns [FDA] [UNVERIFIED-KNOWLEDGE].", other: "PML risk rises with anti-JCV antibodies, longer treatment and prior immunosuppressants [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; plasma exchange can speed removal (PML) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Current or past PML [FDA]", "Prior hypersensitivity to natalizumab [FDA]"],
  ae: { common: ["Headache, fatigue, arthralgia, urinary tract and respiratory infections, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Progressive multifocal leukoencephalopathy [FDA]", "Herpes encephalitis and meningitis, acute retinal necrosis [FDA]", "Hepatotoxicity [FDA]", "Hypersensitivity and anaphylaxis [FDA]", "Thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Anti-JCV antibody status; MRI; new neurological symptoms; liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "natalizumab", indication_id: "std", label: "MS or Crohn's — 300 mg IV every 4 weeks", route: "IV", population: ADULT, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 20, unit: "mg/mL" }], rounding: "1 vial (300 mg/15 mL)", renal: [], flags: ["Over 1 hour; observe", "Check anti-JCV antibody status"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Tysabri (natalizumab) — FDA label (DailyMed)", M4_DM("c5fdde91-1989-4dd2-9129-4f3323ea2962")], NEML_SRC],
  dose: { tagline: "Alpha-4 integrin antibody for MS and Crohn's — 300 mg IV every 4 weeks; PML risk.",
    boxedTitle: "Progressive multifocal leukoencephalopathy",
    boxed: "TYSABRI increases the risk of progressive multifocal leukoencephalopathy (PML), an opportunistic viral infection of the brain that usually leads to death or severe disability. Risk factors for the development of PML include the presence of anti-JCV antibodies, duration of therapy, and prior use of immunosuppressants. These factors should be considered in the context of expected benefit when initiating and continuing treatment with TYSABRI. Healthcare professionals should monitor patients on TYSABRI for any new sign or symptom that may be suggestive of PML. TYSABRI dosing should be withheld immediately at the first sign or symptom suggestive of PML. For diagnosis, an evaluation that includes a gadolinium-enhanced magnetic resonance imaging (MRI) scan of the brain and, when indicated, cerebrospinal fluid analysis for JC viral DNA are recommended. Because of the risk of PML, TYSABRI is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the TOUCH ® Prescribing Program [FDA].",
    adult: [{ ind: "Relapsing MS / Crohn's disease", text: "300 mg IV over 1 hour every 4 weeks.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("nateglinide", {
  inn: "Nateglinide", atc: "A10BX03", cls: "Meglitinide (short-acting insulin secretagogue)",
  linked: [],
  forms: ["Tablets 60, 120 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Closes beta-cell K-ATP channels, causing a quick, short insulin release with meals [UNVERIFIED-KNOWLEDGE].",
  pk: ["Rapid onset, short duration; CYP2C9 and 3A4 metabolism [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Type 2 diabetes, with diet and exercise [FDA].", "Not for type 1 diabetes or ketoacidosis [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Type 2 diabetes", "120 mg three times daily, 1–30 minutes before meals; 60 mg three times daily if near goal at start [FDA]."], ["Skipped meal", "Skip that dose [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "No change; caution in severe impairment and dialysis [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution in moderate–severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Hypoglycaemia risk higher in elderly, malnourished, adrenal or pituitary insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Oral or IV glucose; monitor [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to nateglinide or ingredients [FDA]."],
  ae: { common: ["Upper respiratory infection, back pain, dizziness, flu-like symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypoglycaemia [FDA]"] },
  monitor: ["Glucose and HbA1c [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nateglinide", indication_id: "std", label: "Type 2 diabetes — 120 mg three times daily before meals", route: "PO", population: ADULT, basis: "fixed", dose: { value: 120, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 120, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["1–30 min before each meal; skip if the meal is skipped", "60 mg if near goal at start"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nateglinide tablets — FDA label (DailyMed)", M4_DM("e920b343-f53e-7487-e053-2995a90a719a")], NEML_SRC],
  dose: { tagline: "Mealtime insulin secretagogue — 120 mg before each meal; skip the dose if the meal is skipped.",
    adult: [{ ind: "Type 2 diabetes", text: "120 mg three times daily before meals (60 mg if near goal).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NAX_CH = { min_age_months: 12, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
FDB_M("naxitamab", {
  inn: "Naxitamab", atc: "L01FX21", cls: "Anti-GD2 monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Injection 40 mg/10 mL single-dose vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds GD2 on neuroblastoma cells, causing complement- and cell-mediated killing [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["With GM-CSF: relapsed or refractory high-risk neuroblastoma in bone or bone marrow with partial response, minor response or stable disease after prior therapy (accelerated approval) [FDA]."], paed: ["1 year and over — same [FDA]."] },
  adult: [["Dose", "3 mg/kg/day (maximum 150 mg/day) IV on days 1, 3 and 5 of each cycle, with GM-CSF SC [FDA]."], ["Cycles", "Every 4 weeks until complete or partial response, then 5 more cycles every 4 weeks; later cycles every 8 weeks [FDA]."], ["Premedication", "Corticosteroid (first infusion), antihistamine, H2 blocker, paracetamol, antiemetic; opioid and gabapentin for pain [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["1 year and over: 3 mg/kg/day (max 150 mg/day) on days 1, 3, 5 [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg, capped at 150 mg/day." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hypertension during and after infusion — check BP before each infusion [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of severe hypersensitivity (including anaphylaxis) to naxitamab [FDA]."],
  ae: { common: ["Infusion reactions, pain, tachycardia, vomiting, cough, nausea, diarrhoea, hypertension, urticaria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infusion reactions including anaphylaxis [FDA]", "Neurotoxicity: severe neuropathic pain, transverse myelitis, RPLS [FDA]", "Hypertension [FDA]", "Orthostatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Vital signs during and for 2 hours after infusion in an equipped setting; neurological status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "naxitamab", indication_id: "nb", label: "Neuroblastoma — 3 mg/kg/day (max 150 mg) on days 1, 3, 5", route: "IV", population: NAX_CH, basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "dose" }, interval_h: 48, divided_doses: null, caps: { max_single: 150, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "vial", strength: 4, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Days 1, 3, 5 of each cycle, with GM-CSF", "Premedicate; monitor in an equipped setting"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Danyelza (naxitamab-gqgk) — FDA label (DailyMed)", M4_DM("b0f5ee96-369f-4cb9-a783-3bfa70fe8f90")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-GD2 antibody for relapsed neuroblastoma — 3 mg/kg (max 150 mg) on days 1, 3, 5 with GM-CSF.",
    boxedTitle: "Serious infusion-related reactions and neurotoxicity",
    boxed: "Serious Infusion-Related Reactions DANYELZA can cause serious infusion reactions, including cardiac arrest, anaphylaxis, hypotension, bronchospasm, and stridor. Infusion reactions of any Grade occurred in 94-100% of patients. Severe infusion reactions occurred in 32-68% and serious infusion reactions occurred in 4 - 18% of patients in DANYELZA clinical studies. Premedicate prior to each DANYELZA infusion as recommended and monitor patients for at least 2 hours following completion of each infusion. Reduce the rate, interrupt infusion, or permanently discontinue DANYELZA based on severity. Neurotoxicity DANYELZA can cause severe neurotoxicity, including severe neuropathic pain, transverse myelitis and reversible posterior leukoencephalopathy syndrome (RPLS). Pain of any Grade occurred in 94-100% of patients in DANYELZA clinical studies. Premedicate to treat neuropathic pain as recommended. Permanently discontinue DANYELZA based on the adverse reaction and severity. [FDA].",
    adult: [{ ind: "High-risk neuroblastoma", text: "3 mg/kg/day (max 150 mg) IV days 1, 3, 5.", calc: ["nb"] }],
    child: [{ ind: "1 year and over", text: "3 mg/kg/day (max 150 mg) IV days 1, 3, 5.", calc: ["nb"] }] }
});

FDB_M("nebivolol", {
  inn: "Nebivolol", atc: "C07AB12", cls: "Beta-1 selective blocker with nitric-oxide vasodilation",
  linked: [],
  forms: ["Tablets 2.5, 5, 10, 20 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Highly beta-1 selective at low doses; NO-mediated vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2D6 metabolism [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypertension [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Hypertension", "5 mg once daily with or without food; increase at 2-week intervals up to 40 mg [FDA]."], ["Severe kidney impairment (CrCl under 30)", "Start 2.5 mg; titrate slowly; not studied on dialysis [FDA]."], ["Moderate liver impairment", "Start 2.5 mg; severe: not recommended [FDA]."], ["Stopping", "Taper over 1–2 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — starting dose." },
  adj: { renal: "CrCl under 30: start 2.5 mg once daily [FDA].", hepatic: "Moderate: start 2.5 mg; severe: not recommended [FDA].", pregnancy: NEP, other: "CYP2D6 inhibitors (fluoxetine, paroxetine, quinidine) raise levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bradycardia, hypotension, bronchospasm, heart failure, hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Atropine, glucagon, supportive; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe bradycardia [FDA]", "Heart block greater than first degree [FDA]", "Cardiogenic shock [FDA]", "Decompensated heart failure [FDA]", "Sick sinus syndrome without a pacemaker [FDA]", "Severe hepatic impairment (Child-Pugh over B) [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Headache, fatigue, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Worsening angina or MI after abrupt withdrawal [FDA] [UNVERIFIED-KNOWLEDGE]", "Heart failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]", "Masked hypoglycaemia and thyrotoxicosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Heart rate and blood pressure during titration [FDA]."],
  local: notBT,
  calc: [
    { drug: "nebivolol", indication_id: "htn", label: "Hypertension — start 5 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 5, unit: "mg", whole: true }, { form: "tablet", strength: 2.5, unit: "mg", whole: true }], rounding: "whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["Increase every 2 weeks up to 40 mg", "Moderate liver impairment: start 2.5 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Bystolic (nebivolol) tablets — FDA label (DailyMed)", M4_DM("8b8ad213-1dc8-454e-a524-075685c0e1a8")], NEML_SRC],
  dose: { tagline: "Beta-1 selective blocker for hypertension — 5 mg once daily, up to 40 mg.",
    adult: [{ ind: "Hypertension", text: "5 mg once daily; up to 40 mg (2.5 mg start if CrCl under 30).", calc: ["htn"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NED_CHKG = { min_age_months: 24, max_age_months: 144, min_weight_kg: null, max_weight_kg: 39 };
const NED_128A = { min_age_months: 24, max_age_months: null, min_weight_kg: 39, max_weight_kg: 50 };
const NED_128B = { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: 39 };
const NED_160 = { min_age_months: 24, max_age_months: null, min_weight_kg: 50, max_weight_kg: null };
FDB_M("nedosiran", {
  inn: "Nedosiran", atc: "A16AX25", cls: "siRNA against hepatic lactate dehydrogenase A (LDHA)",
  linked: [],
  forms: ["Prefilled syringe 128 mg/0.8 mL and 160 mg/1 mL; vial 80 mg/0.5 mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Silences hepatic LDHA, reducing oxalate production [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Primary hyperoxaluria type 1 with relatively preserved kidney function (eGFR 30 or more) — lowers urinary oxalate [FDA]."], paed: ["2 years and over — same [FDA]."] },
  adult: [["PH1, 12 years and over", "Under 50 kg: 128 mg; 50 kg and over: 160 mg — SC once monthly [FDA]."], ["Missed dose", "Give as soon as possible; if more than 7 days late, resume monthly from that dose [FDA]."]],
  paed: { tiers: ["2 to under 12 years, under 39 kg: 3.3 mg/kg SC once monthly [FDA].", "2 to under 12 years, 39 to under 50 kg: 128 mg [FDA].", "50 kg and over: 160 mg [FDA].", "12 years and over, under 50 kg: 128 mg [FDA]."], transition: "Weight and age bands.", calcNote: "Weight/age bands, actual body weight." },
  adj: { renal: "Studied with eGFR 30 or more [FDA].", hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: ["Urinary oxalate; kidney function [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nedosiran", indication_id: "kg", label: "PH1, 2 to under 12 years and under 39 kg — 3.3 mg/kg monthly", route: "SC", population: NED_CHKG, basis: "mg_per_kg", dose: { value: 3.3, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 160, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Once monthly SC"], sources: ["FDA"] },
    { drug: "nedosiran", indication_id: "128a", label: "PH1, 39 to under 50 kg — 128 mg monthly", route: "SC", population: NED_128A, basis: "fixed", dose: { value: 128, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "prefilled syringe", strength: 128, unit: "mg", whole: true }], rounding: "1 syringe", renal: [], flags: ["Once monthly SC"], sources: ["FDA"] },
    { drug: "nedosiran", indication_id: "128b", label: "PH1, 12 years+ and under 39 kg — 128 mg monthly", route: "SC", population: NED_128B, basis: "fixed", dose: { value: 128, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "prefilled syringe", strength: 128, unit: "mg", whole: true }], rounding: "1 syringe", renal: [], flags: ["Once monthly SC"], sources: ["FDA"] },
    { drug: "nedosiran", indication_id: "160", label: "PH1, 50 kg and over — 160 mg monthly", route: "SC", population: NED_160, basis: "fixed", dose: { value: 160, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "prefilled syringe", strength: 160, unit: "mg", whole: true }], rounding: "1 syringe", renal: [], flags: ["Once monthly SC"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Rivfloza (nedosiran) — FDA label (DailyMed)", M4_DM("ace9d4bc-4d20-4beb-9e9d-888690424833")], NEML_SRC],
  dose: { tagline: "Monthly siRNA for primary hyperoxaluria type 1 — 128 or 160 mg by weight (3.3 mg/kg in small children).",
    adult: [{ ind: "PH1", text: "Under 50 kg: 128 mg; 50 kg+: 160 mg SC monthly.", calc: ["128a", "128b", "160"] }],
    child: [{ ind: "2–11 years", text: "Under 39 kg: 3.3 mg/kg; 39 to under 50 kg: 128 mg; 50 kg and over: 160 mg monthly.", calc: ["kg", "128a", "160"] }] }
});

FDB_M("nefazodone", {
  inn: "Nefazodone", atc: "N06AX06", cls: "Serotonin antagonist and reuptake inhibitor (antidepressant)",
  linked: [],
  forms: ["Tablets 50, 100, 150, 200, 250 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "5-HT2A antagonist with serotonin and noradrenaline reuptake inhibition [UNVERIFIED-KNOWLEDGE].",
  pk: ["Potent CYP3A4 inhibitor [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Depression — consider the risk of hepatic failure when choosing it [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "200 mg/day in two divided doses [FDA]."], ["Titrate", "Increase by 100–200 mg/day (twice-daily) at least 1 week apart; effective range 300–600 mg/day [FDA]."], ["Elderly or debilitated", "Start 100 mg/day in two doses [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — starting dose." },
  adj: { renal: NEP, hepatic: "Do not use in active liver disease or raised baseline transaminases; stop if AST/ALT 3 × ULN or more and do not restart [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Many CYP3A4 interactions — check every co-medication [FDA]." },
  tox: { human: "Nausea, vomiting, somnolence [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["With terfenadine, astemizole, cisapride, pimozide or carbamazepine [FDA]", "With triazolam (relative) [FDA] [UNVERIFIED-KNOWLEDGE]", "Patients withdrawn for liver injury on nefazodone [FDA] [UNVERIFIED-KNOWLEDGE]", "MAOIs within 14 days [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Somnolence, dry mouth, nausea, dizziness, constipation, asthenia, blurred vision, confusion [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Life-threatening hepatic failure [FDA]", "Suicidal thoughts in young people [FDA]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Priapism [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests periodically; symptoms of liver injury; mood and suicidality [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nefazodone", indication_id: "start", label: "Depression — start 100 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["Titrate weekly to 150–300 mg twice daily", "Elderly: 50 mg twice daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nefazodone hydrochloride tablets — FDA label (DailyMed)", M4_DM("0bd4c34a-4f43-4c84-8b98-1d074cba97d5")], NEML_SRC],
  dose: { tagline: "Antidepressant with a hepatic-failure warning — 200 mg/day in two doses, up to 600 mg/day.",
    boxedTitle: "Hepatic failure; suicidality and antidepressant drugs",
    boxed: "Suicidality and Antidepressant Drugs Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of nefazodone hydrochloride tablets or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Nefazodone hydrochloride tablets are not approved for use in pediatric patients. Warning Cases of life-threatening hepatic failure have been reported in patients treated with nefazodone hydrochloride tablets. The reported rate in the United States is about 1 case of liver failure resulting in death or transplant per 250,000 to 300,000 patient-years of nefazodone hydrochloride treatment. The total patient-years is a summation of each patient's duration of exposure expressed in years. For example, 1 patient-year is equal to 2 patients each treated for 6 months, 3 patients each treated for 4 months, etc.. Ordinarily, treatment with nefazodone hydrochloride tablets should not be initiated in individuals with active liver disease or with elevated baseline serum transaminases. There is no evidence that pre-existing liver disease increases the likelihood of developing liver failure, however, baseline abnormalities can complicate patient monitoring. Patients should be advised to be alert for signs and symptoms of liver dysfunction (jaundice, anorexia, gastrointestinal complaints, malaise, etc.) and to report them to their doctor immediately if they occur. Nefazodone hydrochloride tablets should be discontinued if clinical signs or symptoms suggest liver failure. Patients who develop evidence of hepatocellular injury such as increased serum AST or serum ALT levels ≥ 3 times the upper limit of NORMAL, while on nefazodone hydrochloride tablets should be withdrawn from the drug. These patients should be presumed to be at increased risk for liver injury if nefazodone hydrochloride is reintroduced. Accordingly, such patients should not be considered for re-treatment. [FDA].",
    adult: [{ ind: "Depression", text: "100 mg twice daily; usual 300–600 mg/day in two doses.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NEL_CH = { min_age_months: 12, max_age_months: 216, min_weight_kg: null, max_weight_kg: null };
FDB_M("nelarabine", {
  inn: "Nelarabine", atc: "L01BB07", cls: "Purine nucleoside analogue (prodrug of ara-G)",
  risk: ONC,
  linked: [],
  forms: ["Injection 5 mg/mL, 50 mL vial (250 mg) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converted to ara-GTP, which is incorporated into DNA of T cells and stops synthesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["T-cell ALL and T-cell lymphoblastic lymphoma not responding to, or relapsed after, at least 2 chemotherapy regimens [FDA]."], paed: ["Same, 1 year and over [FDA]."] },
  adult: [["Adult", "1,500 mg/m² IV over 2 hours on days 1, 3 and 5, every 21 days; give undiluted [FDA]."], ["Paediatric", "650 mg/m² IV over 1 hour daily for 5 days, every 21 days [FDA]."], ["Stop", "For neurological reactions grade 2 or worse [FDA]."], ["Tumour lysis", "Hydrate and prevent hyperuricaemia [FDA]."]],
  paed: { tiers: ["1 year and over: 650 mg/m² daily × 5 days every 21 days [FDA]."], transition: "Adult schedule in adults.", calcNote: "mg/m² — adult and paediatric schedules differ." },
  adj: { renal: "CrCl under 50: monitor closely — ara-G clearance falls [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe impairment: monitor closely [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid live vaccines [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe neurotoxicity, myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; no antidote [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, nausea, anaemia, neutropenia, thrombocytopenia, somnolence, peripheral neuropathy, fever, cough [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe neurological reactions: somnolence, confusion, seizures, ataxia, neuropathy, demyelination, Guillain-Barré-like paralysis [FDA]", "Myelosuppression [FDA]", "Tumour lysis syndrome [FDA]", "Opportunistic infections [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Neurological examination before each dose; blood counts [FDA]."],
  local: notBT,
  calc: [
    { drug: "nelarabine", indication_id: "adult", label: "Adult T-ALL/T-LBL — 1,500 mg/m² on days 1, 3, 5", route: "IV", population: ADULT, basis: "mg_per_m2", dose: { value: 1500, unit: "mg", per: "dose" }, interval_h: 48, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "1 mL", renal: [], flags: ["Days 1, 3, 5; repeat every 21 days", "Over 2 h, undiluted"], sources: ["FDA"] },
    { drug: "nelarabine", indication_id: "child", label: "Paediatric T-ALL/T-LBL — 650 mg/m² daily × 5 days", route: "IV", population: NEL_CH, basis: "mg_per_m2", dose: { value: 650, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["5 consecutive days; repeat every 21 days", "Over 1 h, undiluted"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Arranon (nelarabine) injection — FDA label (DailyMed)", M4_DM("0f9051de-5c4d-4c0f-8c19-e15214498cca")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Nucleoside analogue for relapsed T-ALL/T-LBL — adult 1,500 mg/m² days 1, 3, 5; child 650 mg/m² × 5 days.",
    boxedTitle: "Neurologic adverse reactions",
    boxed: "Severe neurologic adverse reactions have been reported with the use of ARRANON ®. These adverse reactions have included altered mental states including severe somnolence, central nervous system effects including convulsions, and peripheral neuropathy ranging from numbness and paresthesias to motor weakness and paralysis. There have also been reports of adverse reactions associated with demyelination, and ascending peripheral neuropathies similar in appearance to Guillain-Barré syndrome. Full recovery from these adverse reactions has not always occurred with cessation of therapy with ARRANON. Monitor frequently for signs and symptoms of neurologic toxicity during treatment with ARRANON. Discontinue ARRANON for neurologic adverse reactions of NCI Common Toxicity Criteria for Adverse Events (CTCAE) Grade 2 or greater [FDA].",
    adult: [{ ind: "Relapsed T-ALL / T-LBL", text: "1,500 mg/m² IV days 1, 3, 5 every 21 days.", calc: ["adult"] }],
    child: [{ ind: "1 year and over", text: "650 mg/m² IV daily × 5 days every 21 days.", calc: ["child"] }] }
});

const NELF_AD = { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const NELF_CH = { min_age_months: 24, max_age_months: 156, min_weight_kg: null, max_weight_kg: null };
FDB_M("nelfinavir", {
  inn: "Nelfinavir", atc: "J05AE04", cls: "HIV protease inhibitor",
  linked: [],
  forms: ["Tablets 250, 625 mg [FDA]."],
  moa: "Inhibits HIV-1 protease, producing immature non-infectious virions [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 and 2C19 metabolism; take with a meal [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["HIV-1 infection with other antiretrovirals [FDA]."], paed: ["2 years and over [FDA]."] },
  adult: [["13 years and over", "1,250 mg twice daily or 750 mg three times daily with a meal [FDA]."], ["Swallowing", "Tablets can be dissolved in a little water [FDA]."], ["Note", "Largely replaced by newer regimens [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2 to under 13 years: 45–55 mg/kg twice daily or 25–35 mg/kg three times daily with a meal; not above 2,500 mg/day [FDA]."], transition: "Adult dosing from 13 years.", calcNote: "mg/kg twice daily, capped at the adult dose." },
  adj: { renal: NEP, hepatic: "Not recommended in moderate–severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Many CYP3A interactions — check all co-medicines [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; not removed by dialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["With drugs highly dependent on CYP3A where high levels are dangerous (e.g. amiodarone, ergots, lovastatin, simvastatin, midazolam oral, pimozide, quinidine, triazolam) [FDA] [UNVERIFIED-KNOWLEDGE]", "With strong CYP3A inducers (rifampicin, St John's wort) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Diarrhoea (common), nausea, flatulence, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hyperglycaemia and diabetes [FDA] [UNVERIFIED-KNOWLEDGE]", "Bleeding in haemophilia [FDA] [UNVERIFIED-KNOWLEDGE]", "Fat redistribution, immune reconstitution syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Viral load, CD4, glucose, lipids [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nelfinavir", indication_id: "adult", label: "13 years and over — 1,250 mg twice daily", route: "PO", population: NELF_AD, basis: "fixed", dose: { value: 1250, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 625, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["With a meal", "Or 750 mg three times daily"], sources: ["FDA"] },
    { drug: "nelfinavir", indication_id: "child", label: "2 to under 13 years — 45–55 mg/kg twice daily", route: "PO", population: NELF_CH, basis: "mg_per_kg", dose: { value: 45, value_max: 55, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: { max_single: 1250, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tablet", strength: 250, unit: "mg" }], rounding: "nearest 250 mg tablet (label tables)", renal: [], flags: ["With a meal", "Not above 2,500 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Viracept (nelfinavir mesylate) — FDA label (DailyMed)", M4_DM("e72c2bc6-9462-4a2e-8e1d-b97592376cbd")], NEML_SRC],
  dose: { tagline: "Older HIV protease inhibitor — 1,250 mg twice daily with food; child 45–55 mg/kg twice daily.",
    adult: [{ ind: "HIV-1 (13 years+)", text: "1,250 mg twice daily or 750 mg three times daily with a meal.", calc: ["adult"] }],
    child: [{ ind: "2 to under 13 years", text: "45–55 mg/kg twice daily (max 1,250 mg).", calc: ["child"] }] }
});

const NEMO_LT90 = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: 90 };
const NEMO_GE90 = { min_age_months: 216, max_age_months: null, min_weight_kg: 90, max_weight_kg: null };
const NEMO_AD = { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
FDB_M("nemolizumab", {
  inn: "Nemolizumab", atc: "D11AH12", cls: "Interleukin-31 receptor A antagonist monoclonal antibody",
  linked: [],
  forms: ["Pen 30 mg (powder + diluent, reconstituted before SC use) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks IL-31 receptor signalling, reducing itch and inflammation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Prurigo nodularis [FDA].", "Moderate–severe atopic dermatitis with topical steroids and/or calcineurin inhibitors [FDA]."], paed: ["Atopic dermatitis 12 years and over [FDA]."] },
  adult: [["Prurigo nodularis, under 90 kg", "60 mg (two 30 mg injections) first, then 30 mg every 4 weeks [FDA]."], ["Prurigo nodularis, 90 kg and over", "60 mg first, then 60 mg every 4 weeks [FDA]."], ["Atopic dermatitis", "60 mg first, then 30 mg every 4 weeks; after 16 weeks, if clear or almost clear, 30 mg every 8 weeks [FDA]."], ["Before starting", "Complete age-appropriate vaccines [FDA]."]],
  paed: { tiers: ["Atopic dermatitis, 12 years and over: same as adults [FDA].", "Prurigo nodularis: not established in children [FDA]."], transition: "Same from 12 years (AD).", calcNote: "Maintenance doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Avoid live vaccines [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to nemolizumab or excipients [FDA]."],
  ae: { common: ["Headache, eczema/atopic dermatitis flare, eczema nummular, arthralgia, urticaria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including angioedema [FDA]", "New-onset or worsening asthma [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Hypersensitivity; asthma symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nemolizumab", indication_id: "pn_lt90", label: "Prurigo nodularis, under 90 kg — 30 mg every 4 weeks (after 60 mg first dose)", route: "SC", population: NEMO_LT90, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "pen", strength: 30, unit: "mg", whole: true }], rounding: "1 pen", renal: [], flags: ["First dose 60 mg (two pens)"], sources: ["FDA"] },
    { drug: "nemolizumab", indication_id: "pn_ge90", label: "Prurigo nodularis, 90 kg and over — 60 mg every 4 weeks", route: "SC", population: NEMO_GE90, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "pen", strength: 30, unit: "mg", whole: true }], rounding: "2 pens", renal: [], flags: ["First dose also 60 mg"], sources: ["FDA"] },
    { drug: "nemolizumab", indication_id: "ad", label: "Atopic dermatitis, 12 years+ — 30 mg every 4 weeks (after 60 mg first dose)", route: "SC", population: NEMO_AD, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "pen", strength: 30, unit: "mg", whole: true }], rounding: "1 pen", renal: [], flags: ["First dose 60 mg", "After 16 weeks, if clear: every 8 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nemluvio (nemolizumab-ilto) — FDA label (DailyMed)", M4_DM("e9229ef1-ac60-4c24-afb6-009d3c781687")], NEML_SRC],
  dose: { tagline: "IL-31 receptor antibody for prurigo nodularis and atopic dermatitis — 60 mg, then 30–60 mg every 4 weeks.",
    adult: [{ ind: "Prurigo nodularis", text: "60 mg, then 30 mg (under 90 kg) or 60 mg (90 kg+) every 4 weeks.", calc: ["pn_lt90", "pn_ge90"] }, { ind: "Atopic dermatitis", text: "60 mg, then 30 mg every 4 weeks.", calc: ["ad"] }],
    child: [{ ind: "Atopic dermatitis, 12 years+", text: "60 mg, then 30 mg every 4 weeks.", calc: ["ad"] }] }
});

})(); // end M-4 scope

/* Brand names — BATCH M4 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"nabumetone":{"IN":[["Nilitis","Ipca Laboratories","Nilitis 500Mg Strip Of 10 Tablets"]],"BD":[["Flamfix","Square Pharmaceuticals PLC","750 mg"],["Nameton","ACME Laboratories Ltd","500 mg"],["Nabuflex","UniMed UniHealth Pharmaceuticals Ltd","750 mg"]],"src":["https://pharmeasy.in/online-medicine-order/nilitis-500mg-tablet-55181","https://medex.com.bd/brands/36768/flamfix-750-mg-tablet","https://medex.com.bd/brands/34863/nameton-500-mg-tablet","https://medex.com.bd/brands/35485/nabuflex-750-mg-tablet"]},"naftifine":{"IN":[["Naftifast","Zydus Healthcare Limited","Naftifast 2% Tube Of 30Gm Cream"],["Ninaf","Indoco Remedies Ltd","Ninaf 2% Tube Of 20Gm Cream"],["Nafticross","Eris Life Sciences Pvt Ltd","Nafticross Tube Of 30Gm Cream"]],"BD":[["Naftin","Medicon Pharmaceuticals Ltd","2%"],["Nafgal","Navana Pharmaceuticals Ltd","2%"],["Naftifun","Kumudini Pharma Ltd","2%"]],"src":["https://pharmeasy.in/online-medicine-order/naftifast-2-tube-of-30gm-cream-3970615","https://pharmeasy.in/online-medicine-order/ninaf-2-tube-of-20gm-cream-4031582","https://pharmeasy.in/online-medicine-order/nafticross-cream-30-g-4187824","https://medex.com.bd/brands/9085/naftin-2-cream","https://medex.com.bd/brands/26058/nafgal-2-cream","https://medex.com.bd/brands/31249/naftifun-2-cream"]},"nalbuphine":{"IN":[],"BD":[["Nalbun","Incepta Pharmaceuticals Ltd","10 mg/ml"],["Nalbutin","Advanced Chemical Industries PLC","10 mg/ml"],["Nalphin","ACME Laboratories Ltd","10 mg/ml"]],"src":["https://medex.com.bd/brands/10675/nalbun-10-mg-imiv-injection","https://medex.com.bd/brands/10676/nalbutin-10-mg-imiv-injection","https://medex.com.bd/brands/10677/nalphin-10-mg-imiv-injection"]},"naproxen":{"IN":[["Naprosyn","Rpg Life Sciences Ltd","Naprosyn 500 Plus Strip Of 15 Tablets"]],"BD":[["Napoxol","Centeon Pharma Ltd","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/naprosyn-500mg-plus-strip-of-15-tablets-3978013","https://medex.com.bd/brands/22738/napoxol-500-mg-tablet"]},"naratriptan":{"IN":[["Naratrex","Sun Pharma","Naratrex 1Mg Strip Of 2 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/naratrex-1mg-tablet-85252"]},"natalizumab":{"IN":[["Tysabri","Ucb India Pvt Ltd","Tysabri 300Mg Vial Of 15Ml Solution For Infusion"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/tysabri-300mg-vial-of-15ml-solution-for-infusion-3995150"]},"nebivolol":{"IN":[["Nebivol","Knoll Healthcare Pvt Ltd","Nebivol 5Mg Strip Of 10 Tablets"]],"BD":[["Orneb","The IBN SINA Pharmaceutical PLC","2.5 mg"],["Nebinex","Beacon Pharmaceuticals PLC","5 mg"],["Dystolic","Healthcare Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/nebivol-5mg-tablet-15974","https://medex.com.bd/brands/35613/orneb-25-mg-tablet","https://medex.com.bd/brands/38825/nebinex-5-mg-tablet","https://medex.com.bd/brands/33790/dystolic-5-mg-tablet"]},"nelarabine":{"IN":[["Ticelo","Zydus Lifesciences Limited","Ticelo 250Mg Vial Of 50Ml Injection"],["Nelabin","Msn Laboratories","Nelabin 250Mg Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/ticelo-250mg-vial-of-50ml-injection-4798264","https://pharmeasy.in/online-medicine-order/nelabin-250mg-dry-vial-of-1-powder-for-injection-4819659"]},"nelfinavir":{"IN":[],"BD":[["Avifix","Beximco Pharmaceuticals PLC","250 mg"]],"src":["https://medex.com.bd/brands/9725/avifix-250-mg-tablet"]},"mycophenolic-acid":{"IN":[["Mycept S","Mankind Pharmaceuticals Ltd","Mycept S 360Mg Strip Of 10 Tablets"]],"BD":[["Myfortic","Nevian Lifescience PLC","180 mg"],["Origano DR","Incepta Pharmaceuticals Ltd","180 mg"],["Mycept-S","Healthcare Pharmaceuticals Ltd","180 mg"]],"src":["https://pharmeasy.in/online-medicine-order/mycept-s-360mg-strip-of-10-tablets-21652","https://medex.com.bd/brands/15162/myfortic-180-mg-dr-tablet","https://medex.com.bd/brands/26235/origano-dr-180-mg-dr-tablet","https://medex.com.bd/brands/39132/mycept-s-180-mg-ec-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
