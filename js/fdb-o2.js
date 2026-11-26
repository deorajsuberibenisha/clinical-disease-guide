/* Clinical Disease Guide — Drug monograph database, batch O-2 (26 Nov 2026).
   End of O (ospemifene … ozanimod) and start of P (paclitaxel … pasireotide). Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js.
   Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js. Deferred: oxyquinoline (only an In-111 radiopharmaceutical label).
   Labels added: conventional paclitaxel beside the albumin-bound pack; Invega oral tablets beside the Erzofri injection pack;
   immediate-release paroxetine beside the CR pack; oxacillin vial (child doses) beside the premixed pack. */
(function () { // O-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const O2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const OPI = "High-alert medication (opioid, oral) [ISMP]";
const NSAID_RENAL = "Not recommended in advanced kidney disease; if used, monitor kidney function closely (NSAID class) [FDA].";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("ospemifene", {
  inn: "Ospemifene", atc: "G03XC05", cls: "Estrogen agonist/antagonist (SERM)",
  linked: [],
  forms: ["Tablets 60 mg [FDA]."],
  moa: "Oestrogen-like effect on the vaginal epithelium; mixed effects elsewhere [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take with food [FDA]."],
  ind: { adult: ["Moderate–severe dyspareunia or vaginal dryness from menopausal vulvovaginal atrophy [FDA]."], paed: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "60 mg once daily with food, for the shortest time needed; reassess periodically [FDA]."]],
  paed: { tiers: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Postmenopausal women.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: "Severe impairment: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Women with a uterus: consider a progestogen or evaluate any bleeding [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Undiagnosed abnormal genital bleeding [FDA]", "Known or suspected oestrogen-dependent cancer [FDA]", "Active or past DVT/PE, stroke or MI [FDA]", "Pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Hot flushes, vaginal discharge, muscle spasms, sweating [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Endometrial cancer risk [FDA]", "Stroke and venous thromboembolism [FDA]"] },
  monitor: ["Investigate any vaginal bleeding [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("ospemifene", "std", "Menopausal dyspareunia / dryness — 60 mg once daily", "PO", ADULT, "fixed", 60, 24, { formulations: [{ form: "tablet", strength: 60, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["With food"] })],
  sources: [["FDA", "Osphena (ospemifene) tablets — FDA label (DailyMed)", O2_DM("9accbcc9-78ee-4f84-9b7e-704f2ab1c413")], NEML_SRC],
  dose: { tagline: "Oral SERM for painful intercourse or dryness after menopause — 60 mg daily with food.",
    boxedTitle: "Endometrial cancer and cardiovascular disorders",
    boxed: "Endometrial Cancer OSPHENA is an estrogen agonist/antagonist with tissue selective effects. In the endometrium, OSPHENA has estrogen agonistic effects. There is an increased risk of endometrial cancer in a woman with a uterus who uses unopposed estrogens. Perform adequate diagnostic measures, including directed and random endometrial sampling when indicated, to rule out malignancy in postmenopausal women with undiagnosed persistent or recurring abnormal genital bleeding. Cardiovascular Disorders In the clinical trials for OSPHENA (duration of treatment up to 15 months), the incidence rates of thromboembolic and hemorrhagic stroke were 1.13 and 3.39 per thousand women years, respectively in the OSPHENA 60 mg treatment group and 3.15 and 0 with placebo. The incidence of DVT was 2.26 per thousand women years (2 reported cases) in the OSPHENA 60 mg treatment group and 3.15 per thousand women years (1 reported case) with placebo. OSPHENA should be prescribed for the shortest duration consistent with treatment goals and risks for the individual woman. Increased risks of stroke and deep vein thrombosis (DVT) are reported in postmenopausal women (50 to 79 years of age) during 7.1 years of treatment with daily oral conjugated estrogens (CE) [0.625 mg]-alone, relative to placebo as part of the Women's Health Initiative (WHI) [FDA].",
    adult: [{ ind: "Menopausal vulvovaginal atrophy", text: "60 mg once daily with food.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("oteseconazole", {
  inn: "Oteseconazole", atc: "J02AC06", cls: "Azole antifungal (CYP51 inhibitor)",
  linked: [],
  forms: ["Capsules 150 mg [FDA]."],
  moa: "Selective fungal CYP51 inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long half-life (about 138 days) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Recurrent vulvovaginal candidiasis in women who are NOT of reproductive potential (permanently infertile or postmenopausal) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Oteseconazole-only", "Day 1: 600 mg; day 2: 450 mg; then from day 14: 150 mg once weekly for 11 weeks [FDA]."], ["Fluconazole/oteseconazole", "Fluconazole 150 mg on days 1, 4, 7; then oteseconazole 150 mg daily days 14–20, then 150 mg weekly for 11 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Administration", "With food [FDA]."]],
  paed: { tiers: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed schedule — no calculator." },
  adj: { renal: "Severe impairment / ESRD: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate–severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated — fetal harm; long persistence [FDA] [UNVERIFIED-KNOWLEDGE].", other: "BCRP substrates: interaction [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Females of reproductive potential [FDA] [UNVERIFIED-KNOWLEDGE]", "Pregnancy and breastfeeding [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Headache, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Vivjoa (oteseconazole) capsules — FDA label (DailyMed)", O2_DM("e21d5008-800e-4417-927f-14340341865f")], NEML_SRC],
  dose: { tagline: "Long-acting azole for recurrent vaginal thrush — only in women who cannot become pregnant.",
    adult: [{ ind: "Recurrent VVC", text: "600 mg day 1, 450 mg day 2, then 150 mg weekly from day 14 for 11 weeks." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("oxacillin", {
  inn: "Oxacillin", atc: "J01CF04", cls: "Penicillinase-resistant penicillin",
  linked: [],
  forms: ["Powder for injection 1 g, 2 g, 10 g; premixed frozen 1 g and 2 g [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Beta-lactam resistant to staphylococcal penicillinase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted by kidneys and bile [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Infections due to penicillinase-producing staphylococci (MSSA) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Mild–moderate", "250–500 mg IV every 4–6 hours [FDA]."], ["Severe", "1 g IV every 4–6 hours [FDA]."], ["Duration", "Severe staphylococcal infections at least 14 days [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Children under 40 kg, mild–moderate: 50 mg/kg/day IV divided every 6 hours [FDA].", "Children under 40 kg, severe: 100 mg/kg/day IV divided every 4–6 hours [FDA].", "Premature infants and neonates: 25 mg/kg/day IV [FDA]."], transition: "Adult dose from 40 kg.", calcNote: "mg/kg/day for children under 40 kg." },
  adj: { renal: NEP, hepatic: "Hepatotoxicity reported at high doses [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: NEP },
  tox: { human: "Neurotoxicity at very high doses [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of hypersensitivity to any penicillin [FDA]."],
  ae: { common: ["Phlebitis, rash, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial nephritis [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, blood count and kidney function on long courses [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("oxacillin", "adult", "MSSA infection, 40 kg+ — 250 mg–1 g IV every 4–6 hours", "IV", pop(null, null, 40, null), "fixed", 500, 6, { dose: { value: 250, value_max: 1000, unit: "mg", per: "dose" }, flags: ["1 g every 4–6 h for severe infection"] }),
    C("oxacillin", "child", "Child under 40 kg — 50–100 mg/kg/day IV divided every 6 hours", "IV", pop(1, null, null, 40), "mg_per_kg", 50, 6, { dose: { value: 50, value_max: 100, unit: "mg", per: "day" }, divided_doses: 4, flags: ["100 mg/kg/day for severe infection"] })
  ],
  sources: [["FDA", "Oxacillin for injection — FDA label (DailyMed)", O2_DM("152758c0-d225-4761-abeb-3f1cb0190806")], ["FDA", "Oxacillin injection (premixed) — FDA label (DailyMed)", O2_DM("d893e45b-7f18-4c67-b10c-1e2e52a6b3ef")], NEML_SRC],
  dose: { tagline: "Anti-staphylococcal penicillin — 250 mg–1 g IV every 4–6 h; child 50–100 mg/kg/day.",
    adult: [{ ind: "MSSA infection", text: "250–500 mg (severe 1 g) IV every 4–6 h.", calc: ["adult"] }],
    child: [{ ind: "Under 40 kg", text: "50–100 mg/kg/day IV in divided doses.", calc: ["child"] }, { ind: "Neonates", text: "25 mg/kg/day IV." }] }
});

FDB_M("oxaliplatin", {
  inn: "Oxaliplatin", atc: "L01XA03", cls: "Platinum alkylating agent",
  risk: ONC,
  linked: [],
  forms: ["Injection 5 mg/mL (50, 100, 200 mg) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Forms platinum–DNA cross-links [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["With 5-FU/leucovorin: adjuvant stage III colon cancer after resection; advanced colorectal cancer [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["FOLFOX", "85 mg/m² IV over 2 hours with leucovorin, then fluorouracil on day 1 of each 14-day cycle [FDA]."], ["Adjuvant", "Up to 12 cycles [FDA]."], ["Diluent", "5% dextrose only — never saline or chloride solutions [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Severe kidney impairment (CrCl under 30)", "Reduce to 65 mg/m² [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — mg/m²." },
  adj: { renal: "CrCl under 30: 65 mg/m² [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Cold-induced neuropathy — avoid cold drinks and ice for days after [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Myelosuppression, neuropathy, diarrhoea, respiratory failure [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; no antidote [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to oxaliplatin or other platinum compounds [FDA]."],
  ae: { common: ["Peripheral neuropathy, fatigue, nausea, diarrhoea, neutropenia, raised transaminases [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Peripheral sensory neuropathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Posterior reversible encephalopathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Pulmonary fibrosis, hepatotoxicity, QT prolongation, rhabdomyolysis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, kidney and liver tests before each cycle; neuropathy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("oxaliplatin", "folfox", "FOLFOX — 85 mg/m² IV every 14 days", "IV", ADULT, "mg_per_m2", 85, 336, { formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["In 5% dextrose only", "With leucovorin and 5-FU"], renal_note: "CrCl under 30: 65 mg/m² [FDA]." })],
  sources: [["FDA", "Oxaliplatin injection — FDA label (DailyMed)", O2_DM("a6f89dc3-a594-4b5b-8728-272e20c1ecb5")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Platinum for colorectal cancer (FOLFOX) — 85 mg/m² every 2 weeks; dextrose only.",
    boxedTitle: "Anaphylactic reactions",
    boxed: "Serious and fatal hypersensitivity adverse reactions, including anaphylaxis, can occur with oxaliplatin within minutes of administration and during any cycle. Oxaliplatin is contraindicated in patients with hypersensitivity reactions to oxaliplatin and other platinum-based drugs. Immediately and permanently discontinue oxaliplatin for hypersensitivity reactions and administer appropriate treatment for management of the hypersensitivity reaction [FDA].",
    adult: [{ ind: "Colorectal cancer (FOLFOX)", text: "85 mg/m² IV every 14 days.", calc: ["folfox"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("oxaprozin", {
  inn: "Oxaprozin", atc: "M01AE12", cls: "NSAID (propionic acid)",
  linked: [],
  forms: ["Tablets/caplets 300, 600 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Non-selective COX inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life — once daily [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Osteoarthritis and rheumatoid arthritis [FDA]."], paed: ["Juvenile rheumatoid arthritis, 6–16 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["OA / RA", "1,200 mg once daily [FDA]."], ["Lower weight or milder disease", "600 mg once daily may be used [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["JRA 22–31 kg: 600 mg once daily [FDA].", "JRA 32–54 kg: 900 mg once daily [FDA].", "JRA 55 kg and over: 1,200 mg once daily [FDA]."], transition: "1,200 mg from 55 kg.", calcNote: "Weight bands." },
  adj: { renal: NSAID_RENAL, hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Avoid from 30 weeks; avoid 20–30 weeks if possible [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Lowest dose, shortest time [FDA]." },
  tox: { human: "Lethargy, nausea, epigastric pain, GI bleeding [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; activated charcoal [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]", "Asthma/urticaria after aspirin or NSAIDs [FDA]", "CABG setting [FDA]"],
  ae: { common: ["Dyspepsia, nausea, abdominal pain, rash, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiovascular thrombotic events [FDA]", "GI bleeding and perforation [FDA]", "Kidney injury, hepatotoxicity, skin reactions [FDA]"] },
  monitor: ["Blood pressure; kidney, liver tests and blood count on long-term use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("oxaprozin", "oa", "OA / RA — 1,200 mg once daily", "PO", ADULT, "fixed", 1200, 24, { formulations: [{ form: "caplet", strength: 600, unit: "mg", whole: true }], rounding: "whole caplets", renal_note: NSAID_RENAL }),
    C("oxaprozin", "j22", "JRA 22–31 kg — 600 mg once daily", "PO", pop(72, 216, 22, 32), "fixed", 600, 24, { renal_note: NSAID_RENAL }),
    C("oxaprozin", "j32", "JRA 32–54 kg — 900 mg once daily", "PO", pop(72, 216, 32, 55), "fixed", 900, 24, { renal_note: NSAID_RENAL }),
    C("oxaprozin", "j55", "JRA 55 kg+ — 1,200 mg once daily", "PO", pop(72, 216, 55, null), "fixed", 1200, 24, { renal_note: NSAID_RENAL })
  ],
  sources: [["FDA", "Oxaprozin tablets — FDA label (DailyMed)", O2_DM("450f5941-7f10-42fe-e063-6394a90a4803")], NEML_SRC],
  dose: { tagline: "Once-daily NSAID — 1,200 mg for OA/RA; JRA 600–1,200 mg by weight.",
    boxedTitle: "Risk of serious cardiovascular and gastrointestinal events",
    boxed: "Cardiovascular Thrombotic Events Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. OXAPROZIN is contraindicated in the setting of coronary artery bypass graft (CABG) surgery. Gastrointestinal Bleeding, Ulceration, and Perforation NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients and patients with a prior history of peptic ulcer disease and/or GI bleeding are at greater risk for serious GI events [FDA].",
    adult: [{ ind: "OA / RA", text: "1,200 mg once daily.", calc: ["oa"] }],
    child: [{ ind: "JRA", text: "22–31 kg 600 mg; 32–54 kg 900 mg; 55 kg+ 1,200 mg once daily.", calc: ["j22", "j32", "j55"] }] }
});

FDB_M("oxazepam", {
  inn: "Oxazepam", atc: "N05BA04", cls: "Benzodiazepine (short–intermediate acting)",
  linked: [],
  forms: ["Capsules 10, 15, 30 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Enhances GABA-A receptor activity [UNVERIFIED-KNOWLEDGE].",
  pk: ["Direct glucuronidation, no active metabolites — useful in liver disease and older adults [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Anxiety disorders and anxiety with depression [FDA].", "Acute alcohol withdrawal [FDA]."], paed: ["Not established under 6 years; dosing not established 6–12 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Mild–moderate anxiety", "10–15 mg three or four times daily [FDA]."], ["Severe anxiety / anxiety with depression", "15–30 mg three or four times daily [FDA]."], ["Older adults", "Start 10 mg three times daily; increase cautiously to 15 mg three or four times daily [FDA]."], ["Alcohol withdrawal", "15–30 mg three or four times daily [FDA]."], ["Stopping", "Taper gradually [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult dose." },
  adj: { renal: NEP, hepatic: "Preferred benzodiazepine in liver disease (no active metabolites) [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal sedation and withdrawal [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Never combine with opioids unless essential [FDA]." },
  tox: { human: "Drowsiness, confusion, coma; dangerous with opioids or alcohol [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; flumazenil with caution [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Psychoses (not indicated) [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Drowsiness, dizziness, vertigo, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression with opioids [FDA]", "Abuse, misuse, addiction [FDA]", "Dependence and withdrawal reactions [FDA]", "Paradoxical reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sedation; dependence; falls in older adults [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("oxazepam", "anx", "Anxiety — 10–15 mg three or four times daily", "PO", ADULT, "fixed", 10, 6, { dose: { value: 10, value_max: 15, unit: "mg", per: "dose" }, formulations: [{ form: "capsule", strength: 10, unit: "mg" }], flags: ["3 or 4 times daily", "Severe/withdrawal: 15–30 mg"] })],
  sources: [["FDA", "Oxazepam capsules — FDA label (DailyMed)", O2_DM("bb6d9142-3647-4591-8f84-31b61b755634")], NEML_SRC],
  dose: { tagline: "Benzodiazepine for anxiety and alcohol withdrawal — 10–30 mg three or four times daily.",
    boxedTitle: "Risks from concomitant opioid use; abuse, misuse and addiction; dependence and withdrawal reactions",
    boxed: "• Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. • Reserve concomitant prescribing of these drugs for use in patients for whom alternative treatment options are inadequate. • Limit dosages and durations to the minimum required. • Follow patients for signs and symptoms of respiratory depression and sedation. • The use of benzodiazepines, including oxazepam, exposes users to risks of abuse, misuse, and addiction, which can lead to overdose or death. Abuse and misuse of benzodiazepines commonly involve concomitant use of other medications, alcohol, and/or illicit substances, which is associated with an increased frequency of serious adverse outcomes. Before prescribing oxazepam and throughout treatment, assess each patient's risk for abuse, misuse, and addiction. • The continued use of benzodiazepines, including oxazepam, may lead to clinically significant physical dependence. The risks of dependence and withdrawal increase with longer treatment duration and higher daily dose. Abrupt discontinuation or rapid dosage reduction of oxazepam after continued use may precipitate acute withdrawal reactions, which can be life-threatening. To reduce the risk of withdrawal reactions, use a gradual taper to discontinue oxazepam or reduce the dosage [FDA].",
    adult: [{ ind: "Anxiety", text: "10–15 mg (severe 15–30 mg) three or four times daily.", calc: ["anx"] }, { ind: "Alcohol withdrawal", text: "15–30 mg three or four times daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("oxcarbazepine", {
  inn: "Oxcarbazepine", atc: "N03AF02", cls: "Antiseizure medicine (dibenzazepine, sodium-channel blocker)",
  linked: [],
  forms: ["Tablets 150, 300, 600 mg; oral suspension 60 mg/mL [FDA]."],
  moa: "Blocks voltage-gated sodium channels (active metabolite MHD) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Active metabolite excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Partial-onset seizures, monotherapy or adjunctive [FDA]."], paed: ["Monotherapy from 4 years; adjunctive from 2 years [FDA]."] },
  adult: [["Start", "600 mg/day in two doses [FDA]."], ["Adjunctive", "Increase by up to 600 mg/day weekly; usual 1,200 mg/day [FDA]."], ["Monotherapy", "Increase by 300 mg/day every third day to 1,200 mg/day; conversion target 2,400 mg/day [FDA]."], ["Kidney (CrCl under 30)", "Start at half the dose (300 mg/day) and increase slowly [FDA]."]],
  paed: { tiers: ["2–16 years: start 8–10 mg/kg/day in two doses (usually not over 600 mg/day) [FDA].", "Adjunctive targets (4–16 years): 20–29 kg 900 mg/day; 29.1–39 kg 1,200 mg/day; over 39 kg 1,800 mg/day [FDA].", "Under 4 years and under 20 kg: may start 16–20 mg/kg/day; maximum 60 mg/kg/day [FDA]."], transition: "Adult dosing at adult weight.", calcNote: "Starting dose 8–10 mg/kg/day (max 600 mg/day)." },
  adj: { renal: "CrCl under 30: half the starting dose, slow titration [FDA].", hepatic: "No change in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Reduces hormonal contraceptive effect [FDA] [UNVERIFIED-KNOWLEDGE]. HLA-B*1502 (common in Asian ancestry) raises SJS/TEN risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Drowsiness, ataxia, hyponatraemia, seizures [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to oxcarbazepine or eslicarbazepine [FDA]."],
  ae: { common: ["Dizziness, drowsiness, diplopia, fatigue, nausea, vomiting, ataxia, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hyponatraemia [FDA]", "SJS/TEN [FDA]", "DRESS / multi-organ hypersensitivity [FDA]", "Cross-reactivity in carbamazepine allergy (25–30%) [FDA] [UNVERIFIED-KNOWLEDGE]", "Suicidal thoughts [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum sodium, especially early and with diuretics [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("oxcarbazepine", "adult", "Partial seizures — start 300 mg twice daily", "PO", ADULT, "fixed", 300, 12, { formulations: [{ form: "tablet", strength: 300, unit: "mg", whole: true }], rounding: "whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 12 }], flags: ["Titrate weekly", "Usual 1,200 mg/day"] }),
    C("oxcarbazepine", "child", "Partial seizures, 2–16 years — start 8–10 mg/kg/day in 2 doses", "PO", pop(24, 216, null, null), "mg_per_kg", 8, 12, { dose: { value: 8, value_max: 10, unit: "mg", per: "day" }, divided_doses: 2, caps: { max_daily: 600, unit: "mg" }, formulations: [{ form: "suspension", strength: 60, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Usually not over 600 mg/day to start", "Titrate over 2 weeks to target"] })
  ],
  sources: [["FDA", "Trileptal (oxcarbazepine) — FDA label (DailyMed)", O2_DM("4c5c86c8-ab7f-4fcf-bc1b-5a0b1fd0691b")], NEML_SRC],
  dose: { tagline: "Sodium-channel antiseizure medicine — 600 mg/day to start; child 8–10 mg/kg/day.",
    cautionTitle: "Use with care",
    caution: "Check sodium — hyponatraemia is common. Serious skin reactions occur, more often with HLA-B*1502. About a quarter of carbamazepine-allergic patients react to it too [FDA].",
    adult: [{ ind: "Partial-onset seizures", text: "300 mg twice daily; usual 1,200 mg/day (monotherapy up to 2,400).", calc: ["adult"] }],
    child: [{ ind: "2–16 years", text: "8–10 mg/kg/day in 2 doses; target by weight.", calc: ["child"] }] }
});

FDB_M("oxiconazole", {
  inn: "Oxiconazole", atc: "D01AC11", cls: "Azole antifungal (topical)",
  linked: [],
  forms: ["Cream and lotion 1% [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits fungal ergosterol synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Tinea pedis, corporis and cruris; pityriasis versicolor (cream) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Used topically in children [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Tinea", "Apply once or twice daily: corporis/cruris for 2 weeks, pedis for 1 month [FDA]."], ["No improvement", "Review the diagnosis [FDA]."]],
  paed: { tiers: ["Same application [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Not for eyes or vagina [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Itching, burning, irritation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Oxistat (oxiconazole) lotion — FDA label (DailyMed)", O2_DM("64ef2286-0f56-4a8a-b07b-4a597f078ae0")], NEML_SRC],
  dose: { tagline: "Topical azole for tinea — once or twice daily for 2–4 weeks.",
    adult: [{ ind: "Tinea", text: "Once or twice daily; 2 weeks (body/groin), 1 month (feet)." }],
    child: [{ ind: "Tinea", text: "Same." }] }
});

FDB_M("oxycodone", {
  inn: "Oxycodone", atc: "N02AA05", cls: "Opioid agonist",
  risk: OPI,
  linked: [],
  forms: ["Immediate-release tablets 5, 10, 15, 20, 30 mg; oral solution; extended-release tablets (separate dosing) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Mu-opioid agonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 (and 2D6) metabolism — CYP3A4 inhibitors raise levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Pain severe enough to need an opioid when alternatives are inadequate [FDA]."], paed: ["IR tablets: not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Opioid-naive start (IR)", "5–15 mg every 4–6 hours as needed; titrate to the lowest effective dose [FDA]."], ["Acute pain", "Usually a few days only [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Stopping", "Taper gradually in dependent patients — do not stop abruptly [FDA]."], ["Naloxone", "Discuss and offer naloxone [FDA]."]],
  paed: { tiers: ["Not established for IR tablets [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "Start lower (about one-third to one-half) and titrate carefully [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Start at one-third to one-half the usual dose [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal opioid withdrawal with prolonged use [FDA].", other: "Avoid benzodiazepines and other CNS depressants [FDA]." },
  tox: { human: "Respiratory depression, pinpoint pupils, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Naloxone; airway and ventilation [FDA]." },
  contra: ["Significant respiratory depression [FDA]", "Acute or severe asthma without monitoring [FDA]", "Known or suspected GI obstruction [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, constipation, vomiting, drowsiness, dizziness, itch [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Life-threatening respiratory depression [FDA]", "Addiction, abuse, misuse [FDA]", "Accidental ingestion (fatal in children) [FDA]", "Neonatal opioid withdrawal [FDA]", "CYP3A4 interactions [FDA]", "Adrenal insufficiency, severe hypotension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Respiratory rate and sedation, especially in the first 72 hours; bowel function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("oxycodone", "ir", "Pain, opioid-naive — 5–15 mg every 4–6 h as needed", "PO", ADULT, "fixed", 5, 4, { dose: { value: 5, value_max: 15, unit: "mg", per: "dose" }, formulations: [{ form: "tablet", strength: 5, unit: "mg", whole: true }], rounding: "whole tablets", flags: ["Every 4–6 h as needed", "Lowest effective dose; offer naloxone"], renal_note: "Kidney impairment: start lower and titrate carefully [FDA]." })],
  sources: [["FDA", "Oxycodone hydrochloride tablets — FDA label (DailyMed)", O2_DM("094b64b3-cd32-4de5-afb6-ea00d9caad74")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Strong oral opioid — 5–15 mg every 4–6 h as needed in opioid-naive adults.",
    boxedTitle: "Serious and life-threatening risks from use of oxycodone",
    boxed: "Addiction, Abuse, and Misuse Because the use of oxycodone HCl exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient's risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Life-Threatening Respiratory Depression Serious, life-threatening, or fatal respiratory depression may occur with use of oxycodone HCl, especially during initiation or following a dosage increase. To reduce the risk of respiratory depression, proper dosing and titration of oxycodone HCl are essential. Accidental Ingestion Accidental ingestion of even one dose of oxycodone HCl, especially by children, can result in a fatal overdose of oxycodone. Risks from Concomitant Use with Benzodiazepines or Other CNS Depressants Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of oxycodone HCl and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate. Neonatal Opioid Withdrawal Syndrome (NOWS) Advise pregnant women using opioids for an extended period of time of the risk of Neonatal Opioid Withdrawal Syndrome, which may be life-threatening if not recognized and treated. Ensure that management by neonatology experts will be available at delivery [FDA].",
    adult: [{ ind: "Severe pain", text: "5–15 mg every 4–6 h as needed.", calc: ["ir"] }],
    child: [{ ind: "Children", text: "Not established (IR tablets)." }] }
});

FDB_M("oxymorphone", {
  inn: "Oxymorphone", atc: "N02AA11", cls: "Opioid agonist",
  risk: OPI,
  linked: [],
  forms: ["Immediate-release tablets 5, 10 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Mu-opioid agonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Food and alcohol raise levels — take on an empty stomach [FDA]."],
  ind: { adult: ["Acute pain severe enough to need an opioid when alternatives are inadequate [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["First opioid", "10–20 mg every 4–6 hours as needed; do not start above 20 mg [FDA]."], ["Food", "1 hour before or 2 hours after eating [FDA]."], ["Kidney / liver impairment, older adults", "Start at the lowest dose; contraindicated in moderate–severe hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "CrCl under 50: start lower (e.g. 5 mg) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild: start low; moderate–severe: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal opioid withdrawal [FDA].", other: "No alcohol [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Respiratory depression, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Naloxone; ventilation [FDA]." },
  contra: ["Significant respiratory depression [FDA]", "Acute or severe asthma without monitoring [FDA]", "GI obstruction [FDA]", "Moderate–severe hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, constipation, drowsiness, dizziness, itch, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression [FDA]", "Addiction, abuse, misuse [FDA]", "Accidental ingestion [FDA]", "Neonatal opioid withdrawal [FDA]"] },
  monitor: ["Respiratory rate and sedation [FDA]."],
  local: notBT,
  calc: [C("oxymorphone", "ir", "Acute pain, first opioid — 10–20 mg every 4–6 h as needed", "PO", ADULT, "fixed", 10, 4, { dose: { value: 10, value_max: 20, unit: "mg", per: "dose" }, formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "whole tablets", flags: ["Every 4–6 h as needed; empty stomach", "Do not start above 20 mg"], renal_note: "CrCl under 50: start lower [FDA]." })],
  sources: [["FDA", "Oxymorphone hydrochloride tablets — FDA label (DailyMed)", O2_DM("22c7652a-aa16-4fa8-89d9-517e69059068")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Potent oral opioid — 10–20 mg every 4–6 h on an empty stomach.",
    boxedTitle: "Serious and life-threatening risks from use of oxymorphone",
    boxed: "Addiction, Abuse, and Misuse Because the use of oxymorphone hydrochloride tablets exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient's risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Life-threatening Respiratory Depression Serious, life-threatening, or fatal respiratory depression may occur with use of oxymorphone hydrochloride tablets, especially during initiation or following a dose increase. To reduce the risk of respiratory depression, proper dosing and titration of oxymorphone hydrochloride tablets are essential. Accidental Ingestion Accidental ingestion of even one dose of oxymorphone hydrochloride tablets, especially by children, can result in a fatal overdose of oxymorphone. Risks From Concomitant Use With Benzodiazepines Or Other CNS Depressants Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of oxymorphone hydrochloride tablets and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate. Neonatal Opioid Withdrawal Syndrome (NOWS) Advise pregnant women using opioids for an extended period of time of the risk of Neonatal Opioid Withdrawal Syndrome, which may be life threatening if not recognized and treated. Ensure that management by neonatology experts will be available at delivery. Opioid Analgesic Risk Evaluation and Mitigation Strategy (REMS) Healthcare providers are strongly encouraged to complete a REMS compliant education program and to counsel patients and caregivers on serious risks, safe use, and the importance of reading the Medication Guide with each prescription. Interaction with Alcohol Instruct patients not to consume alcoholic beverages or use prescription or non-prescription products that contain alcohol while taking oxymorphone hydrochloride tablets. The co-ingestion of alcohol with oxymorphone hydrochloride tablets may result in increased plasma levels and a potentially fatal overdose of oxymorphone [FDA].",
    adult: [{ ind: "Acute severe pain", text: "10–20 mg every 4–6 h as needed.", calc: ["ir"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ozanimod", {
  inn: "Ozanimod", atc: "L04AE02", cls: "Sphingosine-1-phosphate (S1P) receptor modulator",
  linked: [],
  forms: ["Capsules 0.23, 0.46, 0.92 mg (starter pack and maintenance) [FDA]."],
  moa: "S1P1/S1P5 modulator — keeps lymphocytes in lymph nodes [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long-lived active metabolites [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Relapsing MS [FDA].", "Moderately to severely active ulcerative colitis [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Titration", "Days 1–4: 0.23 mg; days 5–7: 0.46 mg; day 8 onward: 0.92 mg once daily [FDA]."], ["Hepatic (Child-Pugh A or B)", "0.92 mg every other day after titration [FDA]."], ["Missed dose", "In the first 2 weeks: restart titration [FDA]."], ["Before starting", "Blood count, ECG, liver tests, eye exam if diabetes/uveitis, VZV immunity [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adults — maintenance dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Child-Pugh A/B: 0.92 mg every other day; C: not recommended [FDA].", pregnancy: "Contraception during and 3 months after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid MAO inhibitors; tyramine-rich foods in large amounts [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bradycardia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "ECG monitoring; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MI, unstable angina, stroke, TIA or decompensated heart failure in the last 6 months [FDA]", "Mobitz II, third-degree block or sick sinus without pacemaker [FDA]", "Severe untreated sleep apnoea [FDA]", "MAO inhibitors [FDA]"],
  ae: { common: ["Upper respiratory infection, raised liver enzymes, orthostatic hypotension, UTI, back pain, hypertension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infections including PML and cryptococcal disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Bradyarrhythmia on starting [FDA]", "Macular oedema [FDA] [UNVERIFIED-KNOWLEDGE]", "Liver injury [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe MS rebound on stopping [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lymphocytes, liver tests, blood pressure; eye exams [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("ozanimod", "maint", "MS / UC maintenance — 0.92 mg once daily (after 7-day titration)", "PO", ADULT, "fixed", 0.92, 24, { formulations: [{ form: "capsule", strength: 0.92, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["Days 1–4 0.23 mg; days 5–7 0.46 mg", "Child-Pugh A/B: every other day"] })],
  sources: [["FDA", "Zeposia (ozanimod) capsules — FDA label (DailyMed)", O2_DM("93ce2fab-edfb-4804-8074-963071de51e4")], NEML_SRC],
  dose: { tagline: "S1P modulator for MS and UC — titrate over 7 days to 0.92 mg daily.",
    cautionTitle: "Use with care",
    caution: "Titrate as labelled to limit slowing of the heart. Check blood count, ECG and liver tests first, and VZV immunity [FDA].",
    adult: [{ ind: "Relapsing MS / UC", text: "0.23 mg days 1–4, 0.46 mg days 5–7, then 0.92 mg daily.", calc: ["maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("paclitaxel", {
  inn: "Paclitaxel", atc: "L01CD01", cls: "Taxane (microtubule stabiliser)",
  risk: ONC,
  linked: [],
  forms: ["Conventional injection 6 mg/mL (in polyoxyl 35 castor oil) [FDA].", "Albumin-bound (nab-)paclitaxel 100 mg vial — NOT interchangeable [FDA]."],
  moa: "Stabilises microtubules, arresting mitosis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism (CYP2C8, 3A4) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Conventional: ovarian, breast, NSCLC, AIDS-related Kaposi sarcoma [FDA].", "Albumin-bound: metastatic breast, NSCLC, pancreatic cancer [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Conventional — ovary/breast", "175 mg/m² IV over 3 hours every 3 weeks (ovary first-line with cisplatin) [FDA]."], ["Conventional — ovary or NSCLC (24-h)", "135 mg/m² over 24 hours every 3 weeks with cisplatin [FDA]."], ["Premedication (conventional)", "Dexamethasone 20 mg orally 12 and 6 h before; diphenhydramine 50 mg IV and an H2 blocker 30–60 min before [FDA]."], ["Albumin-bound", "Breast 260 mg/m² over 30 min every 3 weeks; NSCLC 100 mg/m² days 1, 8, 15 every 21 days; pancreas 125 mg/m² days 1, 8, 15 every 28 days — no premedication needed [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Equipment", "Non-PVC containers and in-line filter for conventional paclitaxel [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adults — mg/m², product-specific." },
  adj: { renal: NEP, hepatic: "Reduce dose in hepatic impairment (label table) [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Do not give if neutrophils under 1,500/mm³ (solid tumours) [FDA]." },
  tox: { human: "Myelosuppression, neuropathy, mucositis [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; no antidote [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Conventional: hypersensitivity to paclitaxel or polyoxyl 35 castor oil [FDA]", "Baseline neutrophils under 1,500/mm³ (solid tumours) or under 1,000 (Kaposi) [FDA]"],
  ae: { common: ["Neutropenia, alopecia, peripheral neuropathy, myalgia/arthralgia, nausea, mucositis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis and severe hypersensitivity (conventional) [FDA]", "Severe neutropenia and infection [FDA]", "Peripheral neuropathy [FDA]", "Bradycardia and conduction defects [FDA] [UNVERIFIED-KNOWLEDGE]", "Injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before each dose; vital signs during the first hour; neuropathy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("paclitaxel", "c175", "Conventional — 175 mg/m² IV over 3 h every 3 weeks", "IV", ADULT, "mg_per_m2", 175, 504, { formulations: [{ form: "inj", strength: 6, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Premedicate (dexamethasone, diphenhydramine, H2 blocker)", "Not for albumin-bound paclitaxel"] }),
    C("paclitaxel", "c135", "Conventional — 135 mg/m² over 24 h every 3 weeks", "IV", ADULT, "mg_per_m2", 135, 504, { formulations: [{ form: "inj", strength: 6, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["With cisplatin (ovary/NSCLC)", "Premedicate"] }),
    C("paclitaxel", "nab260", "Albumin-bound, breast — 260 mg/m² over 30 min every 3 weeks", "IV", ADULT, "mg_per_m2", 260, 504, { rounding: "per vial", flags: ["Albumin-bound product only", "No steroid premedication needed"] })
  ],
  sources: [["FDA", "Paclitaxel injection (conventional) — FDA label (DailyMed)", O2_DM("0c12c77c-5fd4-48dc-a318-e96892233992")], ["FDA", "Paclitaxel protein-bound particles — FDA label (DailyMed)", O2_DM("15dd51ed-29e8-468b-b6d1-21b1f84d6f2e")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Taxane — conventional 135–175 mg/m² every 3 weeks with premedication; albumin-bound dosed differently.",
    boxedTitle: "Warning",
    boxed: "Paclitaxel should be administered under the supervision of a physician experienced in the use of cancer chemotherapeutic agents. Appropriate management of complications is possible only when adequate diagnostic and treatment facilities are readily available. Anaphylaxis and severe hypersensitivity reactions characterized by dyspnea and hypotension requiring treatment, angioedema, and generalized urticaria have occurred in 2 to 4% of patients receiving paclitaxel in clinical trials. Fatal reactions have occurred in patients despite premedication. All patients should be pretreated with corticosteroids, diphenhydramine, and H 2 antagonists. Patients who experience severe hypersensitivity reactions to paclitaxel should not be rechallenged with the drug. Paclitaxel therapy should not be given to patients with solid tumors who have baseline neutrophil counts of less than 1,500 cells/mm 3 and should not be given to patients with AIDS-related Kaposi's sarcoma if the baseline neutrophil count is less than 1,000 cells/mm 3. In order to monitor the occurrence of bone marrow suppression, primarily neutropenia, which may be severe and result in infection, it is recommended that frequent peripheral blood cell counts be performed on all patients receiving paclitaxel [FDA].",
    adult: [{ ind: "Ovarian / breast (conventional)", text: "175 mg/m² over 3 h every 3 weeks.", calc: ["c175"] }, { ind: "Ovarian / NSCLC (24-h)", text: "135 mg/m² over 24 h every 3 weeks.", calc: ["c135"] }, { ind: "Breast (albumin-bound)", text: "260 mg/m² every 3 weeks.", calc: ["nab260"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pacritinib", {
  inn: "Pacritinib", atc: "L01EJ03", cls: "JAK2/FLT3 kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 100 mg [FDA]."],
  moa: "Inhibits JAK2, FLT3 and IRAK1 [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Intermediate/high-risk myelofibrosis with platelets under 50 × 10⁹/L [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Myelofibrosis", "200 mg twice daily with or without food; swallow whole [FDA]."], ["Switching", "Taper or stop other kinase inhibitors first per their labels [FDA]."], ["Before and during", "Blood count, coagulation tests, ECG [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "eGFR under 30: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate–severe: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid strong CYP3A4 inhibitors/inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Strong CYP3A4 inhibitors or inducers [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, thrombocytopenia, nausea, anaemia, peripheral oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Haemorrhage [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "MACE, thrombosis, secondary malignancy, infection (JAK class) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["CBC and coagulation; ECG [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pacritinib", "mf", "Myelofibrosis — 200 mg twice daily", "PO", ADULT, "fixed", 200, 12, { formulations: [{ form: "capsule", strength: 100, unit: "mg", whole: true }], rounding: "2 capsules" })],
  sources: [["FDA", "Vonjo (pacritinib) capsules — FDA label (DailyMed)", O2_DM("4b5ab444-0e1a-4984-99db-76ad11a298ee")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "JAK2 inhibitor for myelofibrosis with severe thrombocytopenia — 200 mg twice daily.",
    adult: [{ ind: "Myelofibrosis (platelets under 50)", text: "200 mg twice daily.", calc: ["mf"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pafolacianine", {
  inn: "Pafolacianine", atc: "V04CX10", cls: "Folate receptor-targeted fluorescent imaging agent",
  linked: [],
  forms: ["Injection 3.2 mg/1.6 mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds folate receptor-alpha on tumour cells; fluoresces under near-infrared light during surgery [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Adjunct for intraoperative identification of malignant lesions in ovarian cancer and lung lesions [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Ovarian cancer", "0.025 mg/kg IV over 60 minutes, 1–9 hours before surgery [FDA]."], ["Lung lesions", "0.025 mg/kg IV over 60 minutes, 1–24 hours before surgery [FDA]."], ["Folate", "Avoid folate, folic acid and folate-containing supplements for 48 hours before [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Use", "Trained surgeons with FDA-cleared imaging systems [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, vomiting, abdominal pain, flushing, chest discomfort, itch [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Misinterpretation — false positives and negatives [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion reactions [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pafolacianine", "img", "Intraoperative imaging — 0.025 mg/kg IV over 60 min", "IV", ADULT, "mg_per_kg", 0.025, null, { formulations: [{ form: "vial", strength: 2, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["1–9 h (ovary) or 1–24 h (lung) before surgery", "No folate for 48 h before"] })],
  sources: [["FDA", "Cytalux (pafolacianine) — FDA label (DailyMed)", O2_DM("d21952b9-7c4e-3a56-e053-2a95a90a0ab0")], NEML_SRC],
  dose: { tagline: "Fluorescent tumour-imaging agent for ovarian and lung surgery — 0.025 mg/kg IV.",
    adult: [{ ind: "Ovarian / lung surgery imaging", text: "0.025 mg/kg IV over 60 min before surgery.", calc: ["img"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("palbociclib", {
  inn: "Palbociclib", atc: "L01EF01", cls: "CDK4/6 inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 75, 100, 125 mg; capsules (take with food) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits cyclin-dependent kinases 4 and 6, stopping G1→S progression [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["HR-positive, HER2-negative advanced or metastatic breast cancer with an aromatase inhibitor or fulvestrant [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Breast cancer", "125 mg once daily for 21 days, then 7 days off (28-day cycle) [FDA]."], ["Missed or vomited dose", "Take the next dose at the usual time [FDA]."], ["Strong CYP3A inhibitors", "Avoid, or reduce to 75 mg [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: "Severe: 75 mg [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Neutropenia, infections, leukopenia, fatigue, nausea, stomatitis, anaemia, alopecia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease / pneumonitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts at the start of each cycle and day 15 of the first 2 cycles [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("palbociclib", "std", "HR+/HER2− breast cancer — 125 mg daily, 21 days on / 7 off", "PO", ADULT, "fixed", 125, 24, { formulations: [{ form: "tablet", strength: 125, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["21 days on, 7 days off"] })],
  sources: [["FDA", "Ibrance (palbociclib) — FDA label (DailyMed)", O2_DM("89a142d5-7e61-48bf-9e77-e2cd124c4792")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "CDK4/6 inhibitor for HR+ breast cancer — 125 mg daily for 21 of 28 days.",
    adult: [{ ind: "HR+/HER2− breast cancer", text: "125 mg once daily, 3 weeks on / 1 week off.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("palifermin", {
  inn: "Palifermin", atc: "V03AF08", cls: "Keratinocyte growth factor (recombinant)",
  linked: [],
  forms: ["Powder for injection 6.25 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stimulates epithelial cell growth, protecting oral mucosa [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Reduces severe oral mucositis in haematological cancers receiving myelotoxic therapy needing stem-cell support [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "60 microgram/kg/day IV bolus for 3 days before and 3 days after myelotoxic therapy — 6 doses [FDA]."], ["Timing", "Third pre-dose 24–48 h before therapy; first post-dose on the day of stem-cell infusion, after the infusion, and at least 7 days after the last palifermin [FDA]."], ["Heparin", "Flush the line with saline if heparin was used [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "microgram/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Not within 24 hours before, during or 24 hours after myelotoxic chemotherapy [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to palifermin or E. coli-derived proteins [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Rash, erythema, oedema, itch, taste change, tongue thickening, raised amylase/lipase [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Potential tumour growth stimulation [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Skin and mouth; amylase/lipase [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("palifermin", "std", "Mucositis prevention — 60 microgram/kg IV daily × 3 before and × 3 after", "IV", ADULT, "mg_per_kg", 0.06, 24, { formulations: [{ form: "vial", strength: 5, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["6 doses total around myelotoxic therapy", "Not within 24 h of chemotherapy"] })],
  sources: [["FDA", "Kepivance (palifermin) — FDA label (DailyMed)", O2_DM("426f6e64-2c20-4a61-6d65-7320426f6e64")], NEML_SRC],
  dose: { tagline: "Keratinocyte growth factor to prevent mucositis with stem-cell transplant — 60 microgram/kg × 6.",
    adult: [{ ind: "Oral mucositis prevention", text: "60 microgram/kg/day IV × 3 days before and × 3 days after.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("paliperidone", {
  inn: "Paliperidone", atc: "N05AX13", cls: "Second-generation antipsychotic (9-hydroxy-risperidone)",
  linked: [],
  forms: ["Extended-release tablets 1.5, 3, 6, 9 mg [FDA].", "Long-acting injections monthly, 3-monthly and 6-monthly (separate dosing) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "D2 and 5-HT2A antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mainly excreted unchanged by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Schizophrenia [FDA].", "Schizoaffective disorder [FDA]."], paed: ["Schizophrenia, 12–17 years (oral) [FDA]."] },
  adult: [["Schizophrenia / schizoaffective (oral)", "6 mg once daily in the morning; range 3–12 mg; increase by 3 mg at intervals of more than 5 days [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Kidney", "CrCl 50–79: start 3 mg (max 6 mg); CrCl 10–49: start 1.5 mg (max 3 mg); under 10: not recommended [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Tablets", "Swallow whole [FDA]."], ["Injections", "Establish tolerability with oral paliperidone or risperidone first [FDA]."]],
  paed: { tiers: ["12–17 years, under 51 kg: 3 mg once daily (max 6 mg) [FDA].", "12–17 years, 51 kg and over: 3 mg once daily (max 12 mg) [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Oral starting doses." },
  adj: { renal: "CrCl 50–79: 3 mg start; 10–49: 1.5 mg start; under 10: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No change in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal EPS/withdrawal with third-trimester use [FDA] [UNVERIFIED-KNOWLEDGE].", other: "QT prolongation — avoid with other QT drugs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Drowsiness, tachycardia, hypotension, QT prolongation, EPS [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; ECG monitoring [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to paliperidone or risperidone [FDA]."],
  ae: { common: ["Akathisia, EPS, tachycardia, somnolence, headache, weight gain, raised prolactin [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased death in elderly with dementia-related psychosis [FDA]", "Neuroleptic malignant syndrome, tardive dyskinesia [FDA] [UNVERIFIED-KNOWLEDGE]", "Metabolic changes (glucose, lipids, weight) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperprolactinaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight, glucose, lipids; movement disorders; prolactin symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("paliperidone", "adult", "Schizophrenia (oral) — 6 mg once daily", "PO", ADULT, "fixed", 6, 24, { formulations: [{ form: "ER tablet", strength: 6, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 50, crcl_max: 79.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 10, crcl_max: 49.999, action: "reduce_dose", factor: 0.25, interval_h: 24 }, { crcl_min: 0, crcl_max: 9.999, action: "avoid", note: "not recommended at CrCl under 10" }], flags: ["Range 3–12 mg/day", "Swallow whole"] }),
    C("paliperidone", "adol", "Schizophrenia, 12–17 years — 3 mg once daily", "PO", pop(144, 216, null, null), "fixed", 3, 24, { formulations: [{ form: "ER tablet", strength: 3, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Max 6 mg under 51 kg; 12 mg from 51 kg"] })
  ],
  sources: [["FDA", "Invega (paliperidone) ER tablets — FDA label (DailyMed)", O2_DM("7b8e5b26-b9e4-4704-921b-3c3c0d159916")], ["FDA", "Erzofri (paliperidone palmitate) ER injectable suspension — FDA label (DailyMed)", O2_DM("492bf9dd-868e-421a-92db-8cca8973aac1")], NEML_SRC],
  dose: { tagline: "Antipsychotic — 6 mg daily orally (3 mg in adolescents); long-acting injections available.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis",
    boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. INVEGA is not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia / schizoaffective", text: "6 mg once daily (3–12 mg).", calc: ["adult"] }],
    child: [{ ind: "12–17 years", text: "3 mg once daily (max 6 or 12 mg by weight).", calc: ["adol"] }] }
});

FDB_M("palonosetron", {
  inn: "Palonosetron", atc: "A04AA05", cls: "5-HT3 receptor antagonist",
  linked: [],
  forms: ["Injection 0.25 mg/5 mL (0.05 mg/mL) [FDA]."],
  moa: "Blocks 5-HT3 receptors centrally and in the gut; long half-life (about 40 h) [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Prevention of acute and delayed CINV (moderately/highly emetogenic chemotherapy) [FDA].", "Prevention of postoperative nausea and vomiting (PONV) up to 24 h [FDA]."], paed: ["CINV, 1 month to under 17 years [FDA]."] },
  adult: [["CINV", "0.25 mg IV once over 30 seconds, about 30 minutes before chemotherapy [FDA]."], ["PONV", "0.075 mg IV over 10 seconds immediately before induction [FDA]."], ["Repeat", "Not within 7 days for CINV [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["1 month to under 17 years (CINV): 20 microgram/kg (max 1.5 mg) IV over 15 minutes, 30 minutes before chemotherapy [FDA]."], transition: "Adult dose at 17 years.", calcNote: "microgram/kg in children; fixed in adults." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Serotonin syndrome with serotonergic drugs [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to palonosetron [FDA]."],
  ae: { common: ["Headache, constipation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity, anaphylaxis [FDA]", "Serotonin syndrome [FDA]"] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("palonosetron", "cinv", "CINV prevention — 0.25 mg IV once", "IV", pop(204, null, null, null), "fixed", 0.25, null, { formulations: [{ form: "inj", strength: 0.05, unit: "mg/mL" }], rounding: "5 mL", flags: ["30 min before chemotherapy"] }),
    C("palonosetron", "ponv", "PONV prevention — 0.075 mg IV once", "IV", ADULT, "fixed", 0.075, null, { formulations: [{ form: "inj", strength: 0.05, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Immediately before induction"] }),
    C("palonosetron", "child", "CINV, 1 month to under 17 years — 20 microgram/kg (max 1.5 mg)", "IV", pop(1, 204, null, null), "mg_per_kg", 0.02, null, { caps: { max_single: 1.5, unit: "mg" }, formulations: [{ form: "inj", strength: 0.05, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Over 15 minutes, 30 min before chemotherapy"] })
  ],
  sources: [["FDA", "Palonosetron injection — FDA label (DailyMed)", O2_DM("13a201ba-c86d-48c5-a0e1-a3e0b4e6a2a7")], NEML_SRC],
  dose: { tagline: "Long-acting 5-HT3 blocker — 0.25 mg IV before chemotherapy; child 20 microgram/kg (max 1.5 mg).",
    adult: [{ ind: "CINV", text: "0.25 mg IV once before chemotherapy.", calc: ["cinv"] }, { ind: "PONV", text: "0.075 mg IV at induction.", calc: ["ponv"] }],
    child: [{ ind: "CINV, 1 month to under 17 years", text: "20 microgram/kg IV (max 1.5 mg).", calc: ["child"] }] }
});

FDB_M("palopegteriparatide", {
  inn: "Palopegteriparatide", atc: "H05AA05", cls: "Long-acting parathyroid hormone (PTH 1-34) prodrug",
  linked: [],
  forms: ["Prefilled pens delivering 6–30 microgram doses [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Sustained release of PTH(1-34), replacing missing parathyroid hormone [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Hypoparathyroidism in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "18 microgram SC once daily, adjusting active vitamin D and calcium [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Titrate", "By 3 microgram steps by serum calcium, no more often than every 7 days; maximum 30 microgram daily [FDA] [UNVERIFIED-KNOWLEDGE]."], ["One injection only", "Never use two injections to make up a dose [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Titrated by calcium — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Digoxin toxicity risk with calcium changes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypercalcaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; treat hypercalcaemia [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Injection-site reactions, headache, paraesthesia, vasodilation, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypercalcaemia and hypocalcaemia [FDA]", "Osteosarcoma risk (theoretical, PTH class) [FDA] [UNVERIFIED-KNOWLEDGE]", "Orthostatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum calcium 7–10 days after each change, then regularly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Yorvipath (palopegteriparatide) — FDA label (DailyMed)", O2_DM("a1fa23fd-c434-443e-9a17-5750578c8602")], NEML_SRC],
  dose: { tagline: "Once-daily PTH replacement for hypoparathyroidism — titrate by calcium to max 30 microgram.",
    adult: [{ ind: "Hypoparathyroidism", text: "Start 18 microgram SC daily; titrate by calcium (max 30 microgram)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("palovarotene", {
  inn: "Palovarotene", atc: "M09AX11", cls: "Retinoic acid receptor-gamma agonist",
  linked: [],
  forms: ["Capsules 1, 1.5, 2.5, 5, 10 mg [FDA]."],
  moa: "RAR-gamma agonist that reduces heterotopic ossification [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate; take with food [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Reduce new heterotopic ossification in fibrodysplasia ossificans progressiva (FOP) [FDA]."], paed: ["Females 8 years and over, males 10 years and over [FDA]."] },
  adult: [["14 years and over — daily", "5 mg once daily [FDA]."], ["14 years and over — flare-up", "20 mg once daily for 4 weeks, then 10 mg once daily for 8 weeks, then back to 5 mg daily [FDA]."], ["Before starting", "Negative pregnancy test; bone age and growth assessment in children [FDA]."]],
  paed: { tiers: ["Under 14 years: weight-based daily (2.5–5 mg) and flare-up doses from the label table [FDA]."], transition: "Adult doses from 14 years.", calcNote: "Weight table under 14 — no calculator." },
  adj: { renal: NEP, hepatic: "Moderate–severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated — retinoid embryo-fetal toxicity [FDA].", other: "Avoid vitamin A supplements, tetracyclines and strong CYP3A4 inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypervitaminosis A-like effects [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy [FDA]", "Hypersensitivity to retinoids [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Dry skin, lip dryness, alopecia, rash, itch, drug-induced skin and mucosal effects [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Premature epiphyseal closure in growing children [FDA]", "Embryo-fetal toxicity [FDA]", "Psychiatric disorders [FDA] [UNVERIFIED-KNOWLEDGE]", "Night blindness [FDA] [UNVERIFIED-KNOWLEDGE]", "Bone density loss [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Growth and epiphyses in children; pregnancy tests; mood [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("palovarotene", "daily", "FOP, 14 years+ — 5 mg once daily", "PO", pop(168, null, null, null), "fixed", 5, 24, { formulations: [{ form: "capsule", strength: 5, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["Flare-up: 20 mg × 4 weeks, then 10 mg × 8 weeks", "With food"] })],
  sources: [["FDA", "Sohonos (palovarotene) capsules — FDA label (DailyMed)", O2_DM("67dce406-7cc4-4d66-92de-ad18b6df0625")], NEML_SRC],
  dose: { tagline: "Retinoid for FOP — 5 mg daily, 20 then 10 mg during flare-ups; never in pregnancy.",
    boxedTitle: "Embryo-fetal toxicity and premature epiphyseal closure in growing pediatric patients",
    boxed: "Embryo-Fetal Toxicity SOHONOS is contraindicated in pregnancy. SOHONOS may cause fetal harm. Because of the risk of teratogenicity and to minimize fetal exposure, SOHONOS is to be administered only if conditions for pregnancy prevention are met. Premature Epiphyseal Closure Premature epiphyseal closure occurs in growing pediatric patients treated with SOHONOS, close monitoring is recommended [FDA].",
    adult: [{ ind: "FOP", text: "5 mg daily; flare-up 20 mg × 4 weeks then 10 mg × 8 weeks.", calc: ["daily"] }],
    child: [{ ind: "Under 14 years", text: "Weight-based doses (label table)." }, { ind: "14 years and over", text: "Adult doses.", calc: ["daily"] }] }
});

FDB_M("paltusotine", {
  inn: "Paltusotine", atc: "H01CB06", cls: "Oral somatostatin receptor type 2 agonist",
  linked: [],
  forms: ["Tablets 20, 40 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Non-peptide SST2 agonist suppressing growth hormone [UNVERIFIED-KNOWLEDGE].",
  pk: ["Food reduces absorption — strict fasting rules [FDA]."],
  ind: { adult: ["Acromegaly [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "40 mg once daily with water on an empty stomach — at least 6 hours after a meal and 1 hour before the next [FDA]."], ["Titrate", "After 2–4 weeks, by IGF-1, to 60 mg once daily [FDA]."], ["Intolerance at start", "May drop to 20 mg temporarily, then resume 40 mg [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "PPIs/H2 blockers and some drugs reduce absorption — check label [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Diarrhoea, abdominal pain, nausea, decreased appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Gallstones [FDA] [UNVERIFIED-KNOWLEDGE]", "Bradycardia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperglycaemia/hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["IGF-1; glucose; heart rate; gallbladder symptoms [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("paltusotine", "start", "Acromegaly — 40 mg once daily, fasting", "PO", ADULT, "fixed", 40, 24, { formulations: [{ form: "tablet", strength: 40, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["6 h after a meal, 1 h before the next", "Titrate to 60 mg by IGF-1"] })],
  sources: [["FDA", "Palsonify (paltusotine) tablets — FDA label (DailyMed)", O2_DM("8a6d2ce0-a621-4ee7-983c-977cd948ff4d")], NEML_SRC],
  dose: { tagline: "Oral SST2 agonist for acromegaly — 40 mg daily fasting, up to 60 mg.",
    adult: [{ ind: "Acromegaly", text: "40 mg daily on an empty stomach; up to 60 mg.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("panitumumab", {
  inn: "Panitumumab", atc: "L01FE02", cls: "Anti-EGFR monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Injection 20 mg/mL (100, 400 mg vials) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks EGFR signalling [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["RAS wild-type metastatic colorectal cancer (alone or with FOLFOX) [FDA].", "KRAS G12C-mutated mCRC with sotorasib [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["mCRC", "6 mg/kg IV every 14 days over 60 minutes (90 minutes if dose over 1,000 mg) [FDA]."], ["Patient selection", "Confirm RAS status (KRAS and NRAS exons 2–4) [FDA]."], ["Filter", "Use a 0.2 or 0.22 micron in-line filter [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adults — mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid sunlight — worsens skin toxicity [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Acneiform rash, dry skin, paronychia, fatigue, hypomagnesaemia, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe dermatological toxicity [FDA]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypomagnesaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Keratitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Magnesium and electrolytes during and 8 weeks after; skin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("panitumumab", "std", "mCRC — 6 mg/kg IV every 14 days", "IV", ADULT, "mg_per_kg", 6, 336, { formulations: [{ form: "vial", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Over 60 min (90 min if over 1,000 mg)", "RAS wild-type only (or with sotorasib for G12C)"] })],
  sources: [["FDA", "Vectibix (panitumumab) — FDA label (DailyMed)", O2_DM("e0fa4bca-f245-4d92-ae29-b0c630a315c2")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-EGFR antibody for RAS wild-type colorectal cancer — 6 mg/kg every 2 weeks.",
    boxedTitle: "Dermatologic toxicity",
    boxed: "Dermatologic Toxicity: Dermatologic toxicities occurred in 90% of patients and were severe (NCI-CTC Grade 3 and higher) in 15% of patients receiving Vectibix monotherapy [FDA].",
    adult: [{ ind: "RAS wild-type mCRC", text: "6 mg/kg IV every 14 days.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("paricalcitol", {
  inn: "Paricalcitol", atc: "H05BX02", cls: "Vitamin D receptor activator (synthetic vitamin D analogue)",
  linked: [],
  forms: ["Capsules 1, 2, 4 microgram; injection 2 and 5 microgram/mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Activates vitamin D receptors, suppressing PTH with less calcium/phosphate rise [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Secondary hyperparathyroidism in CKD stages 3–4 (oral) and stage 5 (oral or IV) [FDA]."], paed: ["CKD 3–5, 10–16 years (oral) [FDA]."] },
  adult: [["CKD 3–4, iPTH 500 pg/mL or less", "1 microgram daily or 2 microgram three times a week [FDA]."], ["CKD 3–4, iPTH over 500", "2 microgram daily or 4 microgram three times a week [FDA]."], ["Titration", "Adjust by iPTH change every 2–4 weeks (label table) [FDA]."], ["CKD 5 (oral)", "Dose (microgram) = baseline iPTH ÷ 80, three times a week [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Three-times-weekly dosing", "Not more often than every other day [FDA]."]],
  paed: { tiers: ["10–16 years, CKD 3–4: 1 microgram three times a week [FDA].", "10–16 years, CKD 5: dose = iPTH ÷ 120, three times a week [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing at 17 years.", calcNote: "Dose by iPTH — no calculator." },
  adj: { renal: "Dosing depends on CKD stage [FDA].", hepatic: NEP, pregnancy: NEP, other: "Strong CYP3A inhibitors raise levels [FDA] [UNVERIFIED-KNOWLEDGE]. Avoid other vitamin D and high calcium doses [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypercalcaemia, hyperphosphataemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; low-calcium diet; treat hypercalcaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypercalcaemia or vitamin D toxicity [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Diarrhoea, hypertension, dizziness, vomiting, nasopharyngitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypercalcaemia [FDA]", "Digitalis toxicity with hypercalcaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Adynamic bone disease from oversuppression of PTH [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Calcium and phosphate every 2 weeks for 3 months after starting or changing, then monthly; iPTH every 3 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Zemplar (paricalcitol) — FDA label (DailyMed)", O2_DM("1b27c026-2d60-47b4-2a9c-ded1818f21b5")], NEML_SRC],
  dose: { tagline: "Vitamin D analogue for CKD secondary hyperparathyroidism — dose by CKD stage and iPTH.",
    adult: [{ ind: "CKD 3–4", text: "1–2 microgram daily (or 2–4 microgram three times weekly) by iPTH." }, { ind: "CKD 5", text: "iPTH ÷ 80 microgram three times weekly." }],
    child: [{ ind: "10–16 years, CKD 3–4", text: "1 microgram three times weekly." }] }
});

FDB_M("paromomycin", {
  inn: "Paromomycin", atc: "A07AA06", cls: "Aminoglycoside (oral, luminal amoebicide)",
  linked: [],
  forms: ["Capsules 250 mg [FDA].", "Injection for visceral leishmaniasis (WHO use; not US) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits protein synthesis in amoebae and bacteria within the gut [UNVERIFIED-KNOWLEDGE].",
  pk: ["Poorly absorbed — acts in the bowel [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Intestinal amoebiasis (acute and chronic) [FDA].", "Adjunct in hepatic coma [FDA]."], paed: ["Intestinal amoebiasis [FDA]."] },
  adult: [["Intestinal amoebiasis", "25–35 mg/kg/day in three doses with meals for 5–10 days [FDA]."], ["Hepatic coma", "4 g/day in divided doses for 5–6 days [FDA]."]],
  paed: { tiers: ["Intestinal amoebiasis: 25–35 mg/kg/day in three doses with meals for 5–10 days [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg/day in 3 doses." },
  adj: { renal: "Absorbed drug can be nephrotoxic with ulcerated bowel or kidney impairment — caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Used for symptomatic amoebiasis in pregnancy because little is absorbed [UNVERIFIED-KNOWLEDGE].", other: "Follow tissue amoebicide (metronidazole) for invasive disease [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "GI upset; ototoxicity/nephrotoxicity if absorbed [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]", "Intestinal obstruction [FDA]"],
  ae: { common: ["Nausea, abdominal cramps, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ototoxicity and nephrotoxicity if absorbed [FDA] [UNVERIFIED-KNOWLEDGE]", "Overgrowth of non-susceptible organisms [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Stool for cysts after treatment [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("paromomycin", "amoeba", "Intestinal amoebiasis — 25–35 mg/kg/day in 3 doses", "PO", { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, "mg_per_kg", 25, 8, { dose: { value: 25, value_max: 35, unit: "mg", per: "day" }, divided_doses: 3, formulations: [{ form: "capsule", strength: 250, unit: "mg" }], rounding: "nearest capsule", flags: ["With meals, 5–10 days"] })],
  sources: [["FDA", "Humatin (paromomycin) capsules — FDA label (DailyMed)", O2_DM("a725f022-ec3c-430d-8021-96c861b9893c")], NEML_SRC],
  dose: { tagline: "Luminal amoebicide — 25–35 mg/kg/day in three doses for 5–10 days.",
    adult: [{ ind: "Intestinal amoebiasis", text: "25–35 mg/kg/day in 3 doses with meals.", calc: ["amoeba"] }, { ind: "Hepatic coma", text: "4 g/day divided, 5–6 days." }],
    child: [{ ind: "Intestinal amoebiasis", text: "25–35 mg/kg/day in 3 doses.", calc: ["amoeba"] }] }
});

FDB_M("paroxetine", {
  inn: "Paroxetine", atc: "N06AB05", cls: "Selective serotonin reuptake inhibitor (SSRI)",
  linked: [],
  forms: ["Tablets 10, 20, 30, 40 mg; oral suspension 10 mg/5 mL; controlled-release tablets 12.5, 25, 37.5 mg (different doses) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits serotonin reuptake; also anticholinergic [UNVERIFIED-KNOWLEDGE].",
  pk: ["Potent CYP2D6 inhibitor [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Major depression, OCD, panic disorder, social anxiety, generalised anxiety, PTSD [FDA].", "CR: depression, panic, social anxiety, PMDD [FDA]."], paed: ["Not approved [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["IR — depression / OCD / PTSD / SAD / GAD", "Start 20 mg once daily; increase by 10 mg weekly; max 50 mg (depression, PTSD) or 60 mg (OCD, panic) [FDA]."], ["IR — panic", "Start 10 mg daily [FDA]."], ["CR", "Depression 25 mg (max 62.5); panic 12.5 mg (max 75); SAD 12.5 mg (max 37.5); PMDD 12.5 mg (max 25) [FDA]."], ["Elderly, severe kidney or liver impairment", "IR start 10 mg, max 40 mg; CR start 12.5 mg, max 50 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Stopping", "Taper — discontinuation symptoms are common [FDA]."]],
  paed: { tiers: ["Not approved [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult IR starting dose." },
  adj: { renal: "Severe (CrCl under 30): start 10 mg, max 40 mg [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: start 10 mg, max 40 mg [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "First-trimester exposure: cardiac malformation signal — avoid if possible [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Tamoxifen effect reduced (CYP2D6) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Drowsiness, vomiting, tachycardia, seizures, serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; activated charcoal [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs within 14 days; linezolid or IV methylene blue [FDA]", "Thioridazine or pimozide [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, drowsiness, sweating, tremor, sexual dysfunction, dry mouth, constipation, insomnia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts in young people [FDA]", "Serotonin syndrome [FDA]", "Bleeding risk [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Mania, angle-closure glaucoma, bone fracture [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality early on and after dose changes; sodium in older adults [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("paroxetine", "ir", "Depression / anxiety (IR) — start 20 mg once daily", "PO", ADULT, "fixed", 20, 24, { formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["Panic disorder: start 10 mg", "Increase by 10 mg weekly; taper when stopping"] })],
  sources: [["FDA", "Paroxetine tablets — FDA label (DailyMed)", O2_DM("009d8b89-eab9-43ba-b077-86bfa993a745")], ["FDA", "Paroxetine extended-release tablets — FDA label (DailyMed)", O2_DM("087ff0d3-1761-47ea-a8c1-7c4cb679af97")], NEML_SRC],
  dose: { tagline: "SSRI for depression and anxiety disorders — 20 mg daily (10 mg for panic); taper to stop.",
    boxedTitle: "Suicidal thoughts and behaviors",
    boxed: "Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors. Paroxetine tablets are not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression / OCD / PTSD / anxiety", text: "20 mg once daily; up to 50–60 mg.", calc: ["ir"] }, { ind: "Panic disorder", text: "Start 10 mg daily." }],
    child: [{ ind: "Children", text: "Not approved." }] }
});

FDB_M("pasireotide", {
  inn: "Pasireotide", atc: "H01CB05", cls: "Somatostatin analogue (multi-receptor)",
  linked: [],
  forms: ["SC injection ampoules 0.3, 0.6, 0.9 mg (Signifor); long-acting IM injection (Signifor LAR) — different dosing [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds somatostatin receptors (especially SST5) on corticotroph adenomas, reducing ACTH [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Cushing's disease when pituitary surgery is not an option or not curative [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Cushing's disease (SC)", "0.6 or 0.9 mg SC twice daily; range 0.3–0.9 mg twice daily, by urinary free cortisol and tolerability [FDA]."], ["Before starting", "Fasting glucose, HbA1c, liver tests, ECG, gallbladder ultrasound, potassium and magnesium [FDA]."], ["Moderate hepatic impairment (Child-Pugh B)", "Start 0.3 mg twice daily; max 0.6 mg twice daily [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: "Child-Pugh B: 0.3 mg start; C: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "May restore fertility in women [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hyperglycaemia, diarrhoea, nausea, gallstones, headache, abdominal pain, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hyperglycaemia and diabetes (very common) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypocortisolism [FDA] [UNVERIFIED-KNOWLEDGE]", "Bradycardia and QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Liver test elevations, cholelithiasis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Glucose weekly for the first 2–3 months; HbA1c; liver tests; ECG; cortisol [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pasireotide", "sc", "Cushing's disease — 0.6–0.9 mg SC twice daily", "SC", ADULT, "fixed", 0.6, 12, { dose: { value: 0.6, value_max: 0.9, unit: "mg", per: "dose" }, rounding: "per ampoule", flags: ["Range 0.3–0.9 mg twice daily", "Check glucose closely"] })],
  sources: [["FDA", "Signifor (pasireotide) injection — FDA label (DailyMed)", O2_DM("a09a25fc-a5a3-0c82-e053-2995a90a5d74")], NEML_SRC],
  dose: { tagline: "Somatostatin analogue for Cushing's disease — 0.6–0.9 mg SC twice daily; watch glucose.",
    cautionTitle: "Use with care",
    caution: "Hyperglycaemia is very common — check glucose and HbA1c before and often during. Can cause hypocortisolism and QT prolongation [FDA].",
    adult: [{ ind: "Cushing's disease", text: "0.6 or 0.9 mg SC twice daily.", calc: ["sc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

})(); // end O-2 scope

/* Brand names — BATCH O2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"paclitaxel":{"IN":[["Petaxel","Zydus Lifesciences Limited","Petaxel 100Mg Injection"],["Nanoxel","Fresenius Kabi India Pvt Ltd","Nanoxel 30Mg Injection"],["Gros","Emcure Pharmaceuticals Ltd","Gros 100 Mg Injection 16.7 Ml"]],"BD":[["Paxane","Synovia Pharma PLC","6 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/petaxel-100mg-inj-76746","https://pharmeasy.in/online-medicine-order/nanoxel-30mg-inj-70674","https://pharmeasy.in/online-medicine-order/gros-100-mg-injection-16-7-ml-198332","https://medex.com.bd/brands/37306/paxane-6-mg-iv-infusion"]},"palbociclib":{"IN":[["Webace","Wembrace Biopharma Private Limited","Webace 125Mg Strip Of 7 Capsules"],["Piciclib","Cipla Limited","Piciclib 125Mg Bottle Of 7 Capsules (Pack Of 3)"],["Piclib","Hetero Drugs Ltd","Piclib 100Mg Bottle Of 21 Capsules"]],"BD":[["Palker","Beacon Pharmaceuticals PLC","125 mg"],["Palbocent","Incepta Pharmaceuticals Ltd","125 mg"],["Cykin","Genvio Pharma Ltd","125 mg"]],"src":["https://pharmeasy.in/online-medicine-order/webace-125mg-strip-of-7-capsules-3999313","https://pharmeasy.in/online-medicine-order/piciclib-125mg-strip-of-7-capsules-3926392","https://pharmeasy.in/online-medicine-order/piclib-100mg-bottle-of-21-capsules-4798255","https://medex.com.bd/brands/26016/palker-125-mg-capsule","https://medex.com.bd/brands/26017/palbocent-125-mg-capsule","https://medex.com.bd/brands/29321/cykin-125-mg-capsule"]},"paliperidone":{"IN":[["Paliris","Sun Pharma","Paliris 3Mg Strip Of 7 Tablets"]],"BD":[["Palimax ER","Advanced Chemical Industries PLC","6 mg"],["Invega Sustenna","UniMed UniHealth Pharmaceuticals Ltd","75 mg/prefilled syringe"],["Modesto XR","Incepta Pharmaceuticals Ltd","3 mg"]],"src":["https://pharmeasy.in/online-medicine-order/paliris-3mg-strip-of-7-tablets-80398","https://medex.com.bd/brands/25945/palimax-er-6-mg-xr-tablet","https://medex.com.bd/brands/28310/invega-sustenna-75-mg-im-injection","https://medex.com.bd/brands/30175/modesto-xr-3-mg-xr-tablet"]},"palonosetron":{"IN":[["Palozest","Zee Laboratories Ltd","Palozest Injection 5 Ml"]],"BD":[["Paloxi","Beacon Pharmaceuticals PLC","0.5 mg"],["Palotic","Popular Pharmaceuticals PLC","0.25 mg/5 ml"],["Vomiren","Renata PLC","0.075 mg/1.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/palozest-injection-5-ml-4119051","https://medex.com.bd/brands/26394/paloxi-05-mg-tablet","https://medex.com.bd/brands/29022/palotic-025-mg-injection","https://medex.com.bd/brands/31398/vomiren-0075-mg-injection"]},"panitumumab":{"IN":[["Vectibix","Dr Reddy's Laboratories Ltd","Vectibix 100Mg Vial Of 5Ml Solution For Infusion"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/vectibix-100-mg-injection-5-ml-3918859"]},"paricalcitol":{"IN":[],"BD":[["Pericon","Beacon Pharmaceuticals PLC","1 mcg"],["Paricap","Drug International Ltd","1 mcg"],["Uniplar","UniMed UniHealth Pharmaceuticals Ltd","1 mcg"]],"src":["https://medex.com.bd/brands/13526/pericon-1-mcg-capsule","https://medex.com.bd/brands/23372/paricap-1-mcg-capsule","https://medex.com.bd/brands/32458/uniplar-1-mcg-capsule"]},"paroxetine":{"IN":[["Pari","Ipca Laboratories","Pari Cr 12.5Mg Strip Of 10 Tablets"]],"BD":[["Melev","Beximco Pharmaceuticals PLC","20 mg"],["Oxat","Square Pharmaceuticals PLC","20 mg"],["Parotin","Advanced Chemical Industries PLC","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/pari-cr-12-5mg-strip-of-10-tablets-14714","https://medex.com.bd/brands/4517/melev-20-mg-tablet","https://medex.com.bd/brands/4518/oxat-20-mg-tablet","https://medex.com.bd/brands/4519/parotin-10-mg-tablet"]},"ospemifene":{"IN":[],"BD":[["Osmina","Navana Pharmaceuticals Ltd","60 mg"],["Osmifen","Nuvista Pharma PLC","60 mg"],["Myfene","Incepta Pharmaceuticals Ltd","60 mg"]],"src":["https://medex.com.bd/brands/30486/osmina-60-mg-tablet","https://medex.com.bd/brands/30487/osmifen-60-mg-tablet","https://medex.com.bd/brands/35184/myfene-60-mg-tablet"]},"oteseconazole":{"IN":[],"BD":[["Otes","Aristopharma Ltd","150 mg"],["Vulcan","Beximco Pharmaceuticals PLC","150 mg"],["Otecon","Navana Pharmaceuticals Ltd","150 mg"]],"src":["https://medex.com.bd/brands/36451/otes-150-mg-capsule","https://medex.com.bd/brands/36452/vulcan-150-mg-capsule","https://medex.com.bd/brands/36923/otecon-150-mg-capsule"]},"oxaliplatin":{"IN":[["Adplatin","Adley Formulation","Adplatin 50Mg Injection"],["Oxitan","Fresenius Kabi India Pvt Ltd","Oxitan 50 Mg Injection 25 Ml"],["Oxa","Emcure Pharmaceuticals Ltd","Oxa Injection 50Ml"]],"BD":[["Eloxatin","Synovia Pharma PLC","5 mg/ml"],["Oxalotin","Techno Drugs Ltd","5 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/adplatin-50mg-inj-99508","https://pharmeasy.in/online-medicine-order/oxitan-50-mg-injection-25-ml-198277","https://pharmeasy.in/online-medicine-order/oxa-inj-50ml-131361","https://medex.com.bd/brands/17341/oxaliplatin-sandoz-5-mg-iv-infusion","https://medex.com.bd/brands/15128/eloxatin-5-mg-iv-infusion","https://medex.com.bd/brands/15130/oxalotin-5-mg-iv-infusion"]},"oxaprozin":{"IN":[["Oxapro","Zuventus Health Care Ltd","Oxapro 600Mg Strip Of 10 Tablets"],["Macprox","Macleods Pharmaceuticals","Macprox 600Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/oxapro-600mg-tab-86996","https://pharmeasy.in/online-medicine-order/macprox-600mg-tab-74186"]},"oxazepam":{"IN":[],"BD":[["Anoxa","Square Pharmaceuticals PLC","10 mg"]],"src":["https://medex.com.bd/brands/30488/anoxa-10-mg-tablet"]},"oxcarbazepine":{"IN":[["Oxetol","Sun Pharma","Oxetol 300Mg Strip Of 10 Tablets"],["Oxcarb","Cipla Limited","Oxcarb 300Mg Strip Of 10 Tablets"],["Oxbizep","Leeford Healthcare Ltd","Oxbizep 150 Strip Of 10 Tablets"]],"BD":[["Oxetol","Sun Pharmaceutical (Bangladesh) Ltd","150 mg"],["Trileptal","Nevian Lifescience PLC","300 mg"],["Leptal","Healthcare Pharmaceuticals Ltd","300 mg"]],"src":["https://pharmeasy.in/online-medicine-order/oxetol-300mg-tablet-25132","https://pharmeasy.in/online-medicine-order/oxcarb-300mg-tablet-6282","https://pharmeasy.in/online-medicine-order/oxbizep-150-tablet-10-no-s-3713547","https://medex.com.bd/brands/4946/oxetol-150-mg-tablet","https://medex.com.bd/brands/4948/trileptal-300-mg-tablet","https://medex.com.bd/brands/23236/leptal-300-mg-tablet"]},"oxiconazole":{"IN":[["Zoderm","Glaxosmithkline","Zoderm E Tube Of 50Gm Cream"],["Auxerg","Cipla Limited","Auxerg 1% Tube Of 50Gm Cream"],["Oxicojen","Jenburkt Pharmaceuticals","Oxicojen Bottle Of 50Ml Lotion"]],"BD":[["Oxifun","Square Pharmaceuticals PLC","1%"],["Oxizol","Incepta Pharmaceuticals Ltd","1%"]],"src":["https://pharmeasy.in/online-medicine-order/zoderm-e-tube-of-50gm-cream-216994","https://pharmeasy.in/online-medicine-order/auxerg-1-tube-of-50gm-cream-667430","https://pharmeasy.in/online-medicine-order/oxicojen-lotion-50ml-227745","https://medex.com.bd/brands/12449/oxifun-1-cream","https://medex.com.bd/brands/30782/oxizol-1-cream"]},"oxymorphone":{"IN":[],"BD":[["O-Morphon","Ziska Pharmaceuticals Ltd","10 mg"]],"src":["https://medex.com.bd/brands/16640/o-morphon-10-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
