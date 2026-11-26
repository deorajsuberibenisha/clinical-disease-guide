/* Clinical Disease Guide — Drug monograph database, batch X-2 (26 Nov 2026).
   Last batch of the A–Z pack run: Z (zafirlukast … zongertinib). X: xenon deferred (Xe-133 diagnostic gas). Y: no current FDA labels.
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js.
   Labels added: zoledronic acid oncology (Zometa-type, ANDA201783) alongside Reclast. */
(function () { // X-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const X2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("zafirlukast", {
  inn: "Zafirlukast", atc: "R03DC01", cls: "Leukotriene receptor antagonist",
  linked: [],
  forms: ["Tablets 10, 20 mg [FDA]."],
  moa: "Blocks cysteinyl leukotriene (CysLT1) receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["Food reduces bioavailability — take 1 hour before or 2 hours after meals [FDA].", "Clearance reduced in the elderly and in cirrhosis [FDA]."],
  ind: { adult: ["Prophylaxis and chronic treatment of asthma [FDA]."], paed: ["Asthma from 5 years [FDA]."] },
  adult: [["Asthma (12 years and over)", "20 mg twice daily, 1 hour before or 2 hours after meals [FDA]."], ["Not for", "Acute asthma attacks [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["5–11 years: 10 mg twice daily [FDA]."], transition: "12 years: adult dose.", calcNote: "Empty stomach." },
  adj: { renal: NEP, hepatic: "Contraindicated in hepatic impairment including cirrhosis [FDA].", pregnancy: NEP, other: "Raises warfarin effect (CYP2C9); erythromycin and theophylline lower its levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Rash, upset stomach reported [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to zafirlukast or inactive ingredients [FDA].", "Hepatic impairment including hepatic cirrhosis [FDA]."],
  ae: { common: ["Headache, infection, nausea, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity including hepatic failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Eosinophilic conditions (Churg-Strauss) [FDA] [UNVERIFIED-KNOWLEDGE]", "Neuropsychiatric events [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver symptoms (stop and test liver function) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("zafirlukast", "a12", "Asthma 12 years+ — 20 mg twice daily", "PO", pop(144, null, null, null), "fixed", 20, 12, { caps: { max_single: 20, unit: "mg" }, formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["1 h before or 2 h after meals"] }),
    C("zafirlukast", "c5", "Asthma 5–11 years — 10 mg twice daily", "PO", pop(60, 144, null, null), "fixed", 10, 12, { caps: { max_single: 10, unit: "mg" }, formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["1 h before or 2 h after meals"] })
  ],
  sources: [["FDA", "Zafirlukast tablets — FDA label (DailyMed)", X2_DM("baba507f-6557-4551-815c-9ab6606e4ee1")], NEML_SRC],
  dose: { tagline: "Leukotriene antagonist for asthma — empty stomach; not in liver disease.",
    adult: [{ ind: "Asthma", text: "20 mg twice daily.", calc: ["a12"] }],
    child: [{ ind: "Asthma 5–11 years", text: "10 mg twice daily.", calc: ["c5"] }] }
});

FDB_M("zaleplon", {
  inn: "Zaleplon", atc: "N05CF03", cls: "Non-benzodiazepine hypnotic (pyrazolopyrimidine)",
  linked: [],
  forms: ["Capsules 5, 10 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Positive allosteric modulator of GABA-A receptors (BZ1 site) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very short half-life; hepatic metabolism [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Short-term treatment of insomnia (sleep-onset) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Insomnia", "10 mg immediately before bedtime or after going to bed with difficulty falling asleep; 5 mg may suffice in low-weight patients; 20 mg occasionally; doses over 20 mg not recommended [FDA]."], ["Elderly / debilitated", "5 mg; doses over 10 mg not recommended [FDA]."], ["Mild–moderate hepatic impairment", "5 mg [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Mild–moderate: 5 mg; severe: not recommended [FDA].", pregnancy: NEP, other: "Cimetidine: start 5 mg [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Drowsiness to coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; flumazenil may help [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Complex sleep behaviours after zaleplon [FDA].", "Hypersensitivity to zaleplon or excipients [FDA]."],
  ae: { common: ["Headache, dizziness, somnolence, amnesia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Complex sleep behaviours [FDA]", "Anaphylaxis, angioedema [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sleep behaviours [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("zaleplon", "std", "Insomnia — 10 mg at bedtime", "PO", ADULT, "fixed", 10, 24, { caps: { max_single: 20, unit: "mg" }, formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Elderly, low weight or mild–moderate hepatic impairment: 5 mg", "Never over 20 mg"] })],
  sources: [["FDA", "Zaleplon capsules — FDA label (DailyMed)", X2_DM("a1277ef5-6072-43ff-a6ce-0a7cea58b7cb")], NEML_SRC],
  dose: { tagline: "Ultra-short hypnotic for sleep onset — stop if sleep-walking or sleep-driving.",
    boxedTitle: "Complex sleep behaviors", boxed: "Complex sleep behaviors including sleep-walking, sleep-driving, and engaging in other activities while not fully awake may occur following use of zaleplon. Some of these events may result in serious injuries, including death. Discontinue zaleplon immediately if a patient experiences a complex sleep behavior [FDA].",
    adult: [{ ind: "Insomnia", text: "10 mg at bedtime (5 mg elderly or hepatic impairment).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("zanamivir", {
  inn: "Zanamivir", atc: "J05AH01", cls: "Neuraminidase inhibitor (inhaled)",
  linked: [],
  forms: ["Inhalation powder 5 mg blisters with Diskhaler [FDA]."],
  moa: "Inhibits influenza A and B neuraminidase [UNVERIFIED-KNOWLEDGE].",
  pk: ["No renal adjustment for inhaled use [FDA]."],
  ind: { adult: ["Treatment of acute uncomplicated influenza A and B (within 2 days of symptoms) [FDA] [UNVERIFIED-KNOWLEDGE].", "Prophylaxis of influenza [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Treatment from 7 years; prophylaxis from 5 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Treatment", "10 mg (2 inhalations of 5 mg) twice daily for 5 days [FDA]."], ["Prophylaxis — household", "10 mg once daily for 10 days [FDA]."], ["Prophylaxis — community outbreak", "10 mg once daily for 28 days [FDA]."], ["Device", "Oral inhalation only via the Diskhaler; never nebulise or reconstitute [FDA]."]],
  paed: { tiers: ["Treatment 7 years and over and prophylaxis 5 years and over: adult doses [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same dose.", calcNote: "Inhaled — fixed." },
  adj: { renal: "No adjustment [FDA].", hepatic: NEP, pregnancy: NEP, other: "Not recommended in asthma or COPD (bronchospasm) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["History of allergic reaction to any ingredient, including milk proteins [FDA]."],
  ae: { common: ["Headache, sinusitis, nausea, diarrhoea, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bronchospasm, especially in airway disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Neuropsychiatric events [FDA] [UNVERIFIED-KNOWLEDGE]", "Allergic reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Breathing in airway disease (have a bronchodilator ready) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("zanamivir", "treat", "Influenza treatment — 10 mg inhaled twice daily × 5 days", "Inhaled", pop(84, null, null, null), "fixed", 10, 12, { caps: { max_single: 10, unit: "mg" }, rounding: "2 blisters of 5 mg", flags: ["Prophylaxis: 10 mg once daily (10 days household, 28 days community)"] })],
  sources: [["FDA", "Relenza (zanamivir) — FDA label (DailyMed)", X2_DM("b4e68930-4e6d-4d27-b1f0-abf60d12e28d")], NEML_SRC],
  dose: { tagline: "Inhaled neuraminidase inhibitor — avoid in asthma or COPD.",
    adult: [{ ind: "Influenza treatment", text: "10 mg twice daily × 5 days.", calc: ["treat"] }, { ind: "Prophylaxis", text: "10 mg once daily (10 or 28 days)." }],
    child: [{ ind: "7 years+ (treatment) / 5 years+ (prophylaxis)", text: "Adult doses.", calc: ["treat"] }] }
});

FDB_M("zanidatamab", {
  inn: "Zanidatamab", atc: "L01FD07", cls: "HER2 bispecific antibody",
  risk: ONC,
  linked: [],
  forms: ["Powder for injection 300 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds two HER2 epitopes, blocking signalling and causing receptor internalisation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Severe renal and hepatic impairment effects unknown [FDA]."],
  ind: { adult: ["HER2-positive gastroesophageal adenocarcinoma (with fluoropyrimidine/platinum ± tislelizumab) [FDA].", "HER2-positive (IHC 3+) biliary tract cancer [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Gastroesophageal (under 70 kg)", "1,800 mg IV every 3 weeks or 1,200 mg every 2 weeks with chemotherapy [FDA]."], ["Gastroesophageal (70 kg or more)", "2,400 mg IV every 3 weeks or 1,600 mg every 2 weeks [FDA]."], ["Biliary tract cancer", "20 mg/kg IV every 2 weeks [FDA]."], ["Premedication", "All patients; loperamide prophylaxis in cycle 1 with chemotherapy [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "Severe/dialysis: unknown [FDA].", hepatic: "Severe: unknown [FDA].", pregnancy: "Embryo-fetal toxicity — contraception [FDA].", other: "LVEF monitoring (HER2 class) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, infusion reactions, fatigue, nausea, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe or fatal diarrhoea [FDA]", "Embryo-fetal toxicity [FDA]", "LV dysfunction [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LVEF; diarrhoea; infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("zanidatamab", "btc", "Biliary tract cancer — 20 mg/kg IV every 2 weeks", "IV", ADULT, "mg_per_kg", 20, null, { rounding: "300 mg vials", flags: ["Every 2 weeks", "Premedicate"] })],
  sources: [["FDA", "Ziihera (zanidatamab-hrii) — FDA label (DailyMed)", X2_DM("ae5d9425-fae5-4541-a158-150998343348")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "HER2 bispecific antibody — severe diarrhoea and fetal harm.",
    boxedTitle: "Diarrhea and embryo-fetal toxicity", boxed: "ZIIHERA, in combination with fluoropyrimidine- and platinum-containing chemotherapy, with or without tislelizumab-jsgr, can cause severe diarrhea, including life threatening and fatal cases. Use antidiarrheal prophylaxis during the first cycle when ZIIHERA is given in combination with these drugs. Manage with antidiarrheals and supportive measures as clinically indicated. Interrupt, reduce the dose or discontinue ZIIHERA based on severity. Embryo-Fetal Toxicity: Exposure to ZIIHERA during pregnancy can cause embryo-fetal harm. Advise patients of the risk and need for effective contraception [FDA].",
    adult: [{ ind: "HER2+ gastroesophageal", text: "Under 70 kg: 1,800 mg q3w (1,200 q2w); 70 kg+: 2,400 mg q3w (1,600 q2w)." }, { ind: "HER2+ biliary tract", text: "20 mg/kg every 2 weeks.", calc: ["btc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("zanubrutinib", {
  inn: "Zanubrutinib", atc: "L01EL03", cls: "Bruton tyrosine kinase (BTK) inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 80 mg; tablets 160 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Irreversibly inhibits BTK in B-cell receptor signalling [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate — dose changes with inhibitors/inducers per label [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Mantle cell lymphoma, CLL/SLL, Waldenström macroglobulinaemia, marginal zone lymphoma, follicular lymphoma (with obinutuzumab) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["All indications", "160 mg twice daily or 320 mg once daily with water, with or without food; swallow whole [FDA]."], ["Severe hepatic impairment (Child-Pugh C)", "80 mg twice daily [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "No adjustment for CrCl 15 or more [FDA].", hepatic: "Child-Pugh C: 80 mg twice daily [FDA].", pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Bleeding risk with anticoagulants/antiplatelets; AF; infections [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Neutropenia, thrombocytopenia, upper respiratory infection, rash, bruising, musculoskeletal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Haemorrhage [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Atrial fibrillation [FDA] [UNVERIFIED-KNOWLEDGE]", "Second primary malignancies [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, bleeding, infection, cardiac rhythm [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("zanubrutinib", "std", "B-cell cancers — 160 mg twice daily", "PO", ADULT, "fixed", 160, 12, { caps: { max_daily: 320, unit: "mg" }, formulations: [{ form: "cap", strength: 80, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Or 320 mg once daily", "Child-Pugh C: 80 mg twice daily"] })],
  sources: [["FDA", "Brukinsa (zanubrutinib) — FDA label (DailyMed)", X2_DM("3e08fe23-d70e-424c-bc51-1222e320f902")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "BTK inhibitor for B-cell lymphomas and CLL.",
    adult: [{ ind: "MCL, CLL, WM, MZL, FL", text: "160 mg twice daily or 320 mg once daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("zavegepant", {
  inn: "Zavegepant", atc: "N02CD07", cls: "CGRP receptor antagonist (nasal gepant)",
  linked: [],
  forms: ["Nasal spray 10 mg single-use device [FDA]."],
  moa: "Blocks the CGRP receptor [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Acute treatment of migraine with or without aura (not prevention) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Acute migraine", "10 mg as one spray in one nostril as needed; maximum 10 mg in 24 hours; safety of more than 8 migraines a month not established [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "Avoid if CrCl under 30 [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild–moderate: no change; severe: avoid [FDA].", pregnancy: NEP, other: "Avoid with OATP1B3/NTCP inhibitors and nasal decongestants close in time [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["History of hypersensitivity to zavegepant or components (including anaphylaxis) [FDA]."],
  ae: { common: ["Taste disturbance, nausea, nasal discomfort, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension, Raynaud's [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [C("zavegepant", "std", "Acute migraine — 10 mg nasal (max 10 mg/24 h)", "Nasal", ADULT, "fixed", 10, null, { caps: { max_single: 10, max_daily: 10, unit: "mg" }, rounding: "1 spray", flags: ["One spray in one nostril", "Maximum 10 mg in 24 h"] })],
  sources: [["FDA", "Zavzpret (zavegepant) — FDA label (DailyMed)", X2_DM("1191475f-e999-49f4-a805-93ad08596b1b")], NEML_SRC],
  dose: { tagline: "Nasal gepant for acute migraine — one spray, once a day maximum.",
    adult: [{ ind: "Acute migraine", text: "10 mg nasal spray once; maximum 10 mg/24 h.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ziconotide", {
  inn: "Ziconotide", atc: "N02BG08", cls: "N-type calcium-channel blocker (intrathecal conotoxin)",
  linked: [],
  forms: ["Intrathecal solution 25 mcg/mL and 100 mcg/mL [FDA]."],
  moa: "Blocks N-type calcium channels on spinal nociceptive afferents [UNVERIFIED-KNOWLEDGE].",
  pk: ["Intrathecal only; not for IV use [FDA]."],
  ind: { adult: ["Severe chronic pain needing intrathecal therapy, intolerant of or refractory to other treatment [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Intrathecal infusion", "Start no more than 2.4 mcg/day (0.1 mcg/h); increase by up to 2.4 mcg/day no more than 2–3 times a week; recommended maximum 19.2 mcg/day (0.8 mcg/h) by day 21 [FDA]."], ["Device", "Programmable implanted or external microinfusion pump; 100 mcg/mL must be diluted until dose established [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "mcg/day by pump — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Meningitis risk with intrathecal devices [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Exaggerated pharmacological effects (ataxia, confusion, hypotension) [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop infusion; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity [FDA].", "Infection at the microinfusion site, uncontrolled bleeding, spinal canal obstruction impairing CSF circulation [FDA] [UNVERIFIED-KNOWLEDGE].", "Pre-existing history of psychosis [FDA]."],
  ae: { common: ["Dizziness, nausea, confusion, nystagmus, abnormal gait, memory impairment [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe psychiatric symptoms and neurological impairment [FDA]", "Meningitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised CK [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cognitive and psychiatric status frequently; CK [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT, calc: [],
  sources: [["FDA", "Prialt (ziconotide) intrathecal infusion — FDA label (DailyMed)", X2_DM("57376a5b-4530-9018-e063-6394a90a9afe")], NEML_SRC],
  dose: { tagline: "Intrathecal non-opioid analgesic — severe psychiatric and neurological effects possible.",
    boxedTitle: "Neuropsychiatric adverse reactions", boxed: "PRIALT is contraindicated in patients with a preexisting history of psychosis. Severe psychiatric symptoms and neurological impairment may occur during treatment with PRIALT. Monitor all patients frequently for evidence of cognitive impairment, hallucinations, or changes in mood or consciousness. Discontinue PRIALT therapy in the event of serious neurological or psychiatric signs or symptoms [FDA].",
    adult: [{ ind: "Severe chronic pain (intrathecal)", text: "Start 2.4 mcg/day; titrate to max 19.2 mcg/day by day 21." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("zinc-chloride", {
  inn: "Zinc chloride", atc: "B05XA12", cls: "Trace element additive for parenteral nutrition",
  linked: [],
  forms: ["Injection 1 mg zinc/mL (zinc chloride) [FDA].", "Bhutan: oral zinc sulphate 20 mg is the NEML zinc (for diarrhoea) [BT-NEML]."],
  moa: "Replaces zinc, a cofactor for many enzymes [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excess losses in small-bowel fluid and stool [FDA]."],
  ind: { adult: ["Supplement to IV solutions for total parenteral nutrition [FDA]."], paed: ["Same, including premature infants [FDA]."] },
  adult: [["Stable adult on TPN", "2.5–4 mg zinc/day (2.5–4 mL/day) IV, diluted in at least 100 mL [FDA]."], ["Acute catabolic state", "Add 2 mg zinc/day [FDA]."], ["Small-bowel fluid loss", "Add 12.2 mg zinc per litre of small-bowel fluid lost, or 17.1 mg zinc per kg of stool or ileostomy output [FDA]."]],
  paed: { tiers: ["Full-term infants and children up to 5 years: 100 mcg zinc/kg/day (0.1 mL/kg/day) [FDA].", "Premature infants (birth weight under 1,500 g) up to 3 kg: 300 mcg zinc/kg/day (0.3 mL/kg/day) [FDA]."], transition: "Adult dose after 5 years [UNVERIFIED-KNOWLEDGE].", calcNote: "Zinc 1 mg/mL — dilute." },
  adj: { renal: "Reduce or omit in renal dysfunction (zinc accumulation) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Direct undiluted injection can cause phlebitis — always dilute [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hyperamylasaemia, hypotension, pulmonary oedema, jaundice, oliguria with large overdose [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop zinc; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None known [FDA]."],
  ae: { common: ["None at usual doses [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Zinc toxicity with overdose [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum zinc periodically on long-term TPN [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 as an injection (oral zinc sulphate 20 mg is listed) [BT-NEML].", strengths: "—", stg: NEP },
  calc: [
    C("zinc-chloride", "child", "TPN, term infants & children to 5 years — 100 mcg/kg/day", "IV", pop(0, 60, null, null), "mg_per_kg", 0.1, 24, { divided_doses: 1, formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["Add to TPN; dilute", "Premature under 1,500 g: 300 mcg/kg/day"] }),
    C("zinc-chloride", "adult", "TPN adult — 2.5–4 mg/day", "IV", ADULT, "fixed", 2.5, 24, { divided_doses: 1, dose: { value: 2.5, unit: "mg", per: "dose", value_max: 4 }, formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Catabolic: +2 mg/day", "Small-bowel losses: +12.2 mg/L lost"] })
  ],
  sources: [["FDA", "Zinc chloride injection (zinc 1 mg/mL) — FDA label (DailyMed)", X2_DM("9a1914a0-e195-4233-c1be-bc2075580eb8")], NEML_SRC],
  dose: { tagline: "IV zinc for parenteral nutrition — dilute before use.",
    adult: [{ ind: "TPN", text: "2.5–4 mg zinc/day; more with catabolism or GI losses.", calc: ["adult"] }],
    child: [{ ind: "TPN", text: "Term to 5 years 100 mcg/kg/day; preterm 300 mcg/kg/day.", calc: ["child"] }] }
});

FDB_M("ziprasidone", {
  inn: "Ziprasidone", atc: "N05AE04", cls: "Atypical antipsychotic",
  linked: [],
  forms: ["Capsules 20, 40, 60, 80 mg; IM injection 20 mg/mL [FDA]."],
  moa: "D2 and 5-HT2A antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorption doubles with food — take capsules with food [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Schizophrenia; acute bipolar mania/mixed; bipolar maintenance (adjunct to lithium/valproate) [FDA].", "IM: acute agitation in schizophrenia [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Schizophrenia", "Start 20 mg twice daily with food; adjust at intervals of at least 2 days up to 80 mg twice daily [FDA]."], ["Bipolar mania", "40 mg twice daily; on day 2 increase to 60 or 80 mg twice daily; range 40–80 mg twice daily [FDA]."], ["IM agitation", "10 mg every 2 hours or 20 mg every 4 hours; maximum 40 mg/day; not more than 3 consecutive days [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Capsules with food." },
  adj: { renal: "No adjustment (oral); IM contains cyclodextrin — caution in renal impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "QT prolongation — avoid other QT-prolonging drugs [FDA]." },
  tox: { human: "Somnolence, slurred speech, hypertension, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "ECG monitoring; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known history of QT prolongation [FDA].", "Recent acute MI [FDA].", "Uncompensated heart failure [FDA].", "Other QT-prolonging drugs (per label list) [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Somnolence, EPS, dizziness, nausea, akathisia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased death in elderly with dementia [FDA]", "QT prolongation, sudden death [FDA] [UNVERIFIED-KNOWLEDGE]", "DRESS, NMS, tardive dyskinesia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG if cardiac risk; potassium and magnesium; metabolic profile [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("ziprasidone", "scz", "Schizophrenia — start 20 mg twice daily with food", "PO", ADULT, "fixed", 20, 12, { caps: { max_daily: 200, unit: "mg" }, formulations: [{ form: "cap", strength: 20, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Up to 80 mg twice daily", "Adjust no sooner than every 2 days"] }),
    C("ziprasidone", "im", "Acute agitation IM — 10 mg (q2h) or 20 mg (q4h)", "IM", ADULT, "fixed", 10, null, { dose: { value: 10, unit: "mg", per: "dose", value_max: 20 }, caps: { max_single: 20, max_daily: 40, unit: "mg" }, formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Maximum 40 mg/day", "Not more than 3 days"] })
  ],
  sources: [["FDA", "Geodon (ziprasidone) — FDA label (DailyMed)", X2_DM("8326928a-2cb6-4f7f-9712-03a425a14c37")], NEML_SRC],
  dose: { tagline: "Atypical antipsychotic — take with food; watch the QT.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis", boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. GEODON is not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia", text: "20 mg twice daily, up to 80 mg twice daily.", calc: ["scz"] }, { ind: "Acute agitation (IM)", text: "10 mg q2h or 20 mg q4h; max 40 mg/day.", calc: ["im"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("zolbetuximab", {
  inn: "Zolbetuximab", atc: "L01FX31", cls: "Claudin 18.2–directed monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Powder for injection 100 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds claudin 18.2 on tumour cells, causing ADCC and CDC [UNVERIFIED-KNOWLEDGE].",
  pk: ["Severe renal and moderate–severe hepatic impairment effects unknown [FDA]."],
  ind: { adult: ["First-line HER2-negative, CLDN18.2-positive gastric or GEJ adenocarcinoma, with fluoropyrimidine and platinum chemotherapy [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Gastric / GEJ cancer", "First dose 800 mg/m² IV, then 600 mg/m² every 3 weeks or 400 mg/m² every 2 weeks; IV infusion only, never push or bolus [FDA]."], ["Antiemetics", "Premedicate with antiemetics (nausea and vomiting are common, mostly in the first infusion) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "Severe: unknown [FDA].", hepatic: "Moderate–severe: unknown [FDA].", pregnancy: NEP, other: "Slow or stop infusion for nausea/vomiting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, vomiting, decreased appetite, fatigue, peripheral oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity and infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe nausea and vomiting [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion reactions; fluids and electrolytes with vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("zolbetuximab", "first", "First dose — 800 mg/m² IV", "IV", ADULT, "mg_per_m2", 800, null, { rounding: "100 mg vials", flags: ["Then 600 mg/m² every 3 weeks or 400 mg/m² every 2 weeks"] }),
    C("zolbetuximab", "q3w", "Maintenance — 600 mg/m² IV every 3 weeks", "IV", ADULT, "mg_per_m2", 600, null, { rounding: "100 mg vials", flags: ["Or 400 mg/m² every 2 weeks"] })
  ],
  sources: [["FDA", "Vyloy (zolbetuximab-clzb) — FDA label (DailyMed)", X2_DM("e7695a21-abb6-47ac-93f8-0ece5a9c4409")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Claudin 18.2 antibody for gastric cancer — vomiting with infusions.",
    adult: [{ ind: "CLDN18.2+ gastric / GEJ", text: "800 mg/m² first, then 600 mg/m² q3w or 400 mg/m² q2w.", calc: ["first", "q3w"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("zoledronic-acid", {
  inn: "Zoledronic acid", atc: "M05BA08", cls: "Bisphosphonate (IV)",
  linked: [],
  forms: ["Reclast 5 mg/100 mL infusion (osteoporosis, Paget's) [FDA].", "4 mg/5 mL concentrate or 4 mg/100 mL (oncology) [FDA]."],
  moa: "Inhibits osteoclast-mediated bone resorption [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — renal toxicity; dose by CrCl (oncology); contraindicated CrCl under 35 (Reclast) [FDA]."],
  ind: { adult: ["Osteoporosis (postmenopausal, men, glucocorticoid-induced); Paget's disease (Reclast) [FDA].", "Hypercalcaemia of malignancy; multiple myeloma and bone metastases of solid tumours (4 mg) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Osteoporosis treatment (Reclast)", "5 mg IV over at least 15 minutes once a year [FDA]."], ["Osteoporosis prevention", "5 mg every 2 years [FDA]."], ["Paget's disease", "5 mg once; calcium 1,500 mg and vitamin D 800 IU daily [FDA]."], ["Hypercalcaemia of malignancy", "4 mg IV over at least 15 minutes (maximum); check creatinine before each dose [FDA]."], ["Myeloma / bone metastases", "4 mg every 3–4 weeks; CrCl 50–60: 3.5 mg; 40–49: 3.3 mg; 30–39: 3 mg [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "Reclast: contraindicated CrCl under 35. Oncology: reduced doses by CrCl; under 30 not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Fetal harm — avoid [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hydrate; correct hypocalcaemia before; dental check (osteonecrosis of the jaw) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypocalcaemia, renal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "IV calcium, supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypocalcaemia (Reclast) [FDA].", "CrCl under 35 mL/min or acute renal impairment (Reclast) [FDA].", "Hypersensitivity to zoledronic acid [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Acute-phase reaction (fever, myalgia, flu-like) after infusion, headache, arthralgia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Renal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Osteonecrosis of the jaw [FDA] [UNVERIFIED-KNOWLEDGE]", "Atypical femoral fractures [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypocalcaemia [FDA]"] },
  monitor: ["Creatinine before each dose; calcium, phosphate, magnesium [FDA]."],
  local: notBT,
  calc: [
    C("zoledronic-acid", "op", "Osteoporosis (Reclast) — 5 mg IV once a year", "IV", ADULT, "fixed", 5, null, { caps: { max_single: 5, unit: "mg" }, rounding: "One 100 mL bottle", renal: [{ crcl_min: 0, crcl_max: 34.999, action: "avoid", note: "CrCl under 35: contraindicated (Reclast) [FDA]" }], flags: ["Over at least 15 minutes", "Prevention: every 2 years"] }),
    C("zoledronic-acid", "onc", "Myeloma / bone metastases — 4 mg every 3–4 weeks (by CrCl)", "IV", ADULT, "fixed", 4, null, { caps: { max_single: 4, unit: "mg" }, formulations: [{ form: "inj", strength: 0.8, unit: "mg/mL" }], rounding: "0.1 mL of concentrate, then dilute", renal: [{ crcl_min: 50, crcl_max: 60, action: "reduce_dose", set_value: 3.5, note: "CrCl 50–60: 3.5 mg" }, { crcl_min: 40, crcl_max: 49.999, action: "reduce_dose", set_value: 3.3, note: "CrCl 40–49: 3.3 mg" }, { crcl_min: 30, crcl_max: 39.999, action: "reduce_dose", set_value: 3, note: "CrCl 30–39: 3 mg" }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "CrCl under 30: not recommended (no data) [FDA] [UNVERIFIED-KNOWLEDGE]" }], flags: ["Over at least 15 minutes", "Hypercalcaemia of malignancy: 4 mg (no reduction for mild–moderate renal impairment)"] })
  ],
  sources: [["FDA", "Reclast (zoledronic acid) — FDA label (DailyMed)", X2_DM("5a9b3737-9ce6-4a89-b76e-6aab79eba9cf")], ["FDA", "Zoledronic acid injection 4 mg (oncology) — FDA label (DailyMed)", X2_DM("00a5bd5a-e5ee-4bad-b510-a4d4485485c8")], NEML_SRC],
  dose: { tagline: "IV bisphosphonate — yearly 5 mg for osteoporosis; 4 mg for cancer bone disease.",
    adult: [{ ind: "Osteoporosis / Paget's", text: "5 mg IV yearly (or once for Paget's).", calc: ["op"] }, { ind: "Myeloma, bone metastases, hypercalcaemia", text: "4 mg IV (reduced by CrCl for myeloma/metastases).", calc: ["onc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("zolmitriptan", {
  inn: "Zolmitriptan", atc: "N02CC03", cls: "5-HT1B/1D agonist (triptan)",
  linked: [],
  forms: ["Nasal spray 2.5, 5 mg; tablets and ODT 2.5, 5 mg (other labels) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "5-HT1B/1D agonist: cranial vasoconstriction, neuropeptide inhibition [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic impairment raises levels and BP [FDA]."],
  ind: { adult: ["Acute treatment of migraine with or without aura [FDA]."], paed: ["Nasal spray from 12 years [FDA]."] },
  adult: [["Acute migraine (nasal)", "Start 2.5 mg; maximum single dose 5 mg; may repeat after 2 hours; maximum 10 mg in 24 hours [FDA]."]],
  paed: { tiers: ["12 years and over: adult dosing (nasal) [FDA]."], transition: "Adults.", calcNote: "Fixed." },
  adj: { renal: NEP, hepatic: "Moderate–severe: not recommended [FDA].", pregnancy: NEP, other: "Not within 24 h of other triptans/ergots; MAO-A inhibitors contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Sedation, hypertension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; monitor at least 15 h [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Ischaemic coronary artery disease or other significant cardiovascular disease [FDA].", "WPW or accessory-pathway arrhythmias; stroke, TIA; peripheral vascular or ischaemic bowel disease; uncontrolled hypertension [FDA] [UNVERIFIED-KNOWLEDGE].", "Recent (24 h) triptan or ergot; MAO-A inhibitor within 2 weeks [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Taste disturbance, paraesthesia, dizziness, somnolence, throat/chest tightness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myocardial ischaemia, arrhythmia, stroke [FDA] [UNVERIFIED-KNOWLEDGE]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cardiovascular assessment in at-risk patients [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("zolmitriptan", "nasal", "Acute migraine — 2.5 mg nasal (max 5 mg per dose, 10 mg/day)", "Nasal", pop(144, null, null, null), "fixed", 2.5, null, { caps: { max_single: 5, max_daily: 10, unit: "mg" }, rounding: "One spray", flags: ["May repeat after 2 hours", "Maximum 10 mg in 24 hours"] })],
  sources: [["FDA", "Zolmitriptan nasal spray — FDA label (DailyMed)", X2_DM("05a40502-149d-41bd-966e-771e937a955b")], NEML_SRC],
  dose: { tagline: "Triptan nasal spray for acute migraine.",
    adult: [{ ind: "Acute migraine", text: "2.5 mg; up to 5 mg per dose; 10 mg/day max.", calc: ["nasal"] }],
    child: [{ ind: "12 years+", text: "Adult dosing.", calc: ["nasal"] }] }
});

FDB_M("zolpidem", {
  inn: "Zolpidem", atc: "N05CF02", cls: "Non-benzodiazepine hypnotic (imidazopyridine)",
  linked: [],
  forms: ["Immediate-release tablets 5, 10 mg; capsules 7.5 mg; ER and sublingual forms (other labels) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Positive modulator of GABA-A receptors (BZ1 site) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Clearance lower in women and in hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Short-term treatment of insomnia with difficulty initiating sleep [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Women", "Start 5 mg (immediate release) once nightly [FDA]."], ["Men", "Start 5 mg, 7.5 mg (capsule) or 10 mg once nightly [FDA]."], ["Increase", "If 5 mg is not effective: 7.5 mg or 10 mg once nightly [FDA]."], ["Hepatic", "Mild–moderate: lower dose (5 mg); severe: avoid (encephalopathy) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Timing", "Immediately before bed with at least 7–8 hours available [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Severe: avoid [FDA].", pregnancy: NEP, other: "Elderly: lowest dose (avoid the 7.5 mg capsule) [FDA]." },
  tox: { human: "Somnolence to coma, respiratory depression with other depressants [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; flumazenil may help [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Complex sleep behaviours after zolpidem [FDA].", "Known hypersensitivity to zolpidem [FDA]."],
  ae: { common: ["Drowsiness, dizziness, diarrhoea, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Complex sleep behaviours [FDA]", "Next-day impairment [FDA] [UNVERIFIED-KNOWLEDGE]", "Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Next-morning alertness; sleep behaviours [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("zolpidem", "start", "Insomnia — start 5 mg at bedtime (men may use 7.5–10 mg)", "PO", ADULT, "fixed", 5, 24, { caps: { max_single: 10, unit: "mg" }, formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Women: 5 mg", "Severe hepatic impairment: avoid"] })],
  sources: [["FDA", "Zolpidem tartrate capsules — FDA label (DailyMed)", X2_DM("2f1a3600-9bd6-3651-3ab5-1e4e0b0a3916")], NEML_SRC],
  dose: { tagline: "Bedtime hypnotic — women start 5 mg; stop if sleep-walking.",
    boxedTitle: "Complex sleep behaviors", boxed: "Complex sleep behaviors including sleep-walking, sleep-driving, and engaging in other activities while not fully awake may occur following use of Zolpidem Tartrate Capsules. Some of these events may result in serious injuries, including death. Discontinue Zolpidem Tartrate Capsules immediately if a patient experiences a complex sleep behavior [FDA].",
    adult: [{ ind: "Insomnia", text: "5 mg (women) or 5–10 mg (men) at bedtime.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("zongertinib", {
  inn: "Zongertinib", atc: "L01EH", cls: "HER2 tyrosine kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 60 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Irreversible HER2 kinase inhibitor sparing EGFR [UNVERIFIED-KNOWLEDGE].",
  pk: ["eGFR under 60, ESRD and severe hepatic impairment not studied [FDA]."],
  ind: { adult: ["Unresectable or metastatic non-squamous NSCLC with HER2 tyrosine kinase domain activating mutations after prior systemic therapy [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["HER2-mutant NSCLC", "Under 90 kg: 120 mg once daily; 90 kg or more: 180 mg once daily, with or without food [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Weight bands." },
  adj: { renal: "eGFR under 60 not studied [FDA].", hepatic: "Severe not studied [FDA].", pregnancy: "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hepatotoxicity, LV dysfunction, ILD — monitor [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, rash, raised liver enzymes, fatigue, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Left ventricular dysfunction [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, LVEF, respiratory symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("zongertinib", "lt90", "HER2-mutant NSCLC, under 90 kg — 120 mg once daily", "PO", pop(216, null, null, 90), "fixed", 120, 24, { caps: { max_single: 120, unit: "mg" }, formulations: [{ form: "tab", strength: 60, unit: "mg/tab" }], rounding: "Whole tablets" }),
    C("zongertinib", "ge90", "HER2-mutant NSCLC, 90 kg or more — 180 mg once daily", "PO", pop(216, null, 90, null), "fixed", 180, 24, { caps: { max_single: 180, unit: "mg" }, formulations: [{ form: "tab", strength: 60, unit: "mg/tab" }], rounding: "Whole tablets" })
  ],
  sources: [["FDA", "Hernexeos (zongertinib) — FDA label (DailyMed)", X2_DM("d3fabf12-354e-4e5c-b5de-20fdb579b783")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Oral HER2 TKI for HER2-mutant lung cancer — dose by weight.",
    adult: [{ ind: "HER2-mutant NSCLC", text: "120 mg (under 90 kg) or 180 mg (90 kg+) once daily.", calc: ["lt90", "ge90"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

})(); // end X-2 scope

/* Brand names — BATCH X2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"zaleplon":{"IN":[],"BD":[["Eplon","Beximco Pharmaceuticals PLC","5 mg"]],"src":["https://medex.com.bd/brands/30505/eplon-5-mg-capsule"]},"zanamivir":{"IN":[["Virenza","Cipla Limited","Virenza (With Revolizer) 5 Mg Box Of 30 Rotacaps"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/virenza-with-revolizer-5-mg-rotacap-30-201880"]},"zanubrutinib":{"IN":[["Brukinsa","Glenmark Pharmaceuticals","Brukinsa 80Mg Bottle Of 120 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/brukinsa-80mg-bottle-of-120-capsules-4743589"]},"zavegepant":{"IN":[],"BD":[["Zaveg","Aristopharma Ltd","10 mg/spray"]],"src":["https://medex.com.bd/brands/39731/zaveg-10-mg-nasal-spray"]},"ziprasidone":{"IN":[],"BD":[["Zipradon","Drug International Ltd","20 mg"]],"src":["https://medex.com.bd/brands/4440/zipradon-20-mg-capsule"]},"zoledronic-acid":{"IN":[["Drocid","Otsuka Pharmaceutical India Private Limited","Drocid 4Mg Pouch Of 100Ml Infusion"],["Natzold","Natco Pharma Ltd","Natzold Infusion 100Ml"],["Rokfos","Cipla Limited","Rokfos Bottle Of 100Ml Solution For Infusion"]],"BD":[["Adronic","Aristopharma Ltd","4 mg/5 ml"],["Aclasta","Nevian Lifescience PLC","5 mg/100 ml"],["Zoldix","Advanced Chemical Industries PLC","5 mg/100 ml"]],"src":["https://pharmeasy.in/online-medicine-order/drocid-4-mg-pouch-of-100ml-infusion-4827821","https://pharmeasy.in/online-medicine-order/natzold-inf-100ml-25610","https://pharmeasy.in/online-medicine-order/rokfos-5m-injection-100ml-191183","https://medex.com.bd/brands/36114/adronic-4-mg-iv-infusion","https://medex.com.bd/brands/14946/aclasta-5-mg-iv-infusion","https://medex.com.bd/brands/35834/zoldix-5-mg-iv-infusion"]},"zolmitriptan":{"IN":[["Zolmist","Cipla Limited","Zolmist 5Mg Bottle Of 0.7Ml Nasal Spray"],["Zolmifar","Mediair Healthacre Products Private Limited","Zolmifar Bottle Of 7Md Nasal Spray"]],"BD":[["Miotrol","Drug International Ltd","2.5 mg"],["Nomi","Square Pharmaceuticals PLC","2.5 mg"],["Nomiten","Rephco Pharmaceuticals Ltd","2.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zolmist-5mg-nasal-spray-0-7ml-6678","https://pharmeasy.in/online-medicine-order/zolmifar-bottle-of-7md-nasal-spray-4799629","https://medex.com.bd/brands/10794/miotrol-25-mg-tablet","https://medex.com.bd/brands/10795/nomi-25-mg-tablet","https://medex.com.bd/brands/10796/nomiten-25-mg-tablet"]},"zolpidem":{"IN":[],"BD":[["Nitrest","Sun Pharmaceutical (Bangladesh) Ltd","10 mg"]],"src":["https://medex.com.bd/brands/4198/nitrest-10-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
