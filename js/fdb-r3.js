/* Clinical Disease Guide — Drug monograph database, batch R-3 (26 Nov 2026).
   End of R (rimegepant … ripretinib) and start of S (sacituzumab govitecan … semaglutide). Same rules as js/fdb-a2.js.
   Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js. */
(function () { // R-3 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const R3_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("rimegepant", {
  inn: "Rimegepant", atc: "N02CD06", cls: "CGRP receptor antagonist (gepant)",
  linked: [],
  forms: ["Orally disintegrating tablets 75 mg [FDA]."],
  moa: "Blocks the CGRP receptor [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute treatment of migraine [FDA].", "Preventive treatment of episodic migraine [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Acute migraine", "75 mg as needed; maximum 75 mg in 24 hours; safety of more than 18 doses in 30 days not established [FDA]."], ["Prevention", "75 mg every other day [FDA]."], ["Administration", "Place on or under the tongue; no water needed [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "CrCl under 15: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid strong CYP3A4 inhibitors; avoid another dose within 48 h with moderate inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to rimegepant [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, abdominal pain, dyspepsia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including delayed dyspnoea and rash [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension, Raynaud's phenomenon [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("rimegepant", "acute", "Acute migraine — 75 mg once (max 75 mg/24 h)", "PO", ADULT, "fixed", 75, null, { formulations: [{ form: "ODT", strength: 75, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Max 75 mg in 24 hours"] }),
    C("rimegepant", "prev", "Migraine prevention — 75 mg every other day", "PO", ADULT, "fixed", 75, 48, { formulations: [{ form: "ODT", strength: 75, unit: "mg", whole: true }], rounding: "1 tablet" })
  ],
  sources: [["FDA", "Nurtec ODT (rimegepant) — FDA label (DailyMed)", R3_DM("9ef08e09-1098-35cc-e053-2a95a90a3e1d")], NEML_SRC],
  dose: { tagline: "Oral CGRP antagonist — 75 mg for a migraine attack, or every other day for prevention.",
    adult: [{ ind: "Acute migraine", text: "75 mg; max 75 mg/24 h.", calc: ["acute"] }, { ind: "Episodic migraine prevention", text: "75 mg every other day.", calc: ["prev"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("riociguat", {
  inn: "Riociguat", atc: "C02KX05", cls: "Soluble guanylate cyclase stimulator",
  linked: [],
  forms: ["Tablets 0.5, 1, 1.5, 2, 2.5 mg [FDA]."],
  moa: "Stimulates sGC independently of and with nitric oxide, causing pulmonary vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Chronic thromboembolic pulmonary hypertension (inoperable or persistent after surgery) [FDA].", "Pulmonary arterial hypertension (WHO group 1) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "1 mg three times daily (0.5 mg if hypotension is a concern) [FDA]."], ["Titrate", "By 0.5 mg no sooner than every 2 weeks if systolic BP 95 mmHg or more, to a maximum of 2.5 mg three times daily [FDA]."], ["Smokers", "May need higher doses [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Access", "US: REMS because of embryo-fetal toxicity [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "CrCl under 15 or dialysis: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated — embryo-fetal toxicity [FDA].", other: "Contraindicated with nitrates, PDE-5 inhibitors and other sGC stimulators [FDA]." },
  tox: { human: "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy [FDA]", "Nitrates or NO donors [FDA]", "PDE-5 inhibitors (sildenafil, tadalafil) [FDA]", "Other sGC stimulators [FDA]", "Pulmonary hypertension with idiopathic interstitial pneumonia [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Headache, dyspepsia, dizziness, nausea, diarrhoea, hypotension, vomiting, anaemia, peripheral oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Embryo-fetal toxicity [FDA]", "Symptomatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Bleeding including haemoptysis [FDA] [UNVERIFIED-KNOWLEDGE]", "Pulmonary oedema in veno-occlusive disease [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure during titration; monthly pregnancy tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("riociguat", "start", "PAH / CTEPH — start 1 mg three times daily", "PO", ADULT, "fixed", 1, 8, { formulations: [{ form: "tablet", strength: 1, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Increase by 0.5 mg every 2 weeks to max 2.5 mg three times daily", "Never with nitrates or PDE-5 inhibitors"] })],
  sources: [["FDA", "Adempas (riociguat) — FDA label (DailyMed)", R3_DM("7b57509a-3d5d-41d4-8fed-1471e26372a3")], NEML_SRC],
  dose: { tagline: "sGC stimulator for PAH and CTEPH — 1 mg three times daily, up to 2.5 mg; never in pregnancy.",
    boxedTitle: "Embryo-fetal toxicity",
    boxed: "Adempas is contraindicated for use during pregnancy because it may cause fetal harm based on animal data. Exclude pregnancy prior to the start of treatment with Adempas. Advise use of effective contraception prior to initiation of treatment, during treatment, and for one month after treatment with Adempas. If pregnancy is detected, discontinue Adempas as soon as possible [FDA].",
    adult: [{ ind: "PAH / CTEPH", text: "1 mg three times daily; up to 2.5 mg three times daily.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ripretinib", {
  inn: "Ripretinib", atc: "L01EX19", cls: "KIT/PDGFRA switch-control kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 50 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Broadly inhibits KIT and PDGFRA mutant kinases [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Advanced GIST after 3 or more kinase inhibitors including imatinib [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["GIST", "150 mg once daily; swallow whole; missed dose may be taken within 8 hours [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A inhibitors/inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Alopecia, fatigue, nausea, abdominal pain, constipation, myalgia, diarrhoea, palmar-plantar erythrodysaesthesia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["New primary cutaneous malignancies (SCC, melanoma) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension, cardiac dysfunction [FDA] [UNVERIFIED-KNOWLEDGE]", "Impaired wound healing [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Skin checks; blood pressure; LVEF [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("ripretinib", "std", "Advanced GIST — 150 mg once daily", "PO", ADULT, "fixed", 150, 24, { formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }], rounding: "3 tablets" })],
  sources: [["FDA", "Qinlock (ripretinib) — FDA label (DailyMed)", R3_DM("9f18e462-03dd-4296-a02a-a0577e3ee78d")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Fourth-line KIT/PDGFRA inhibitor for GIST — 150 mg daily.",
    adult: [{ ind: "Advanced GIST", text: "150 mg once daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("sacituzumab-govitecan", {
  inn: "Sacituzumab govitecan", atc: "L01FX17", cls: "Trop-2-directed antibody–drug conjugate (SN-38)",
  risk: ONC,
  linked: [],
  forms: ["Powder for injection 180 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Delivers SN-38 (topoisomerase I inhibitor) to Trop-2-expressing cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["SN-38 cleared by UGT1A1 — homozygous UGT1A1*28 raises neutropenia risk [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Metastatic triple-negative breast cancer after prior therapy [FDA].", "HR+/HER2− metastatic breast cancer after endocrine therapy and chemotherapy [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "10 mg/kg IV on days 1 and 8 of 21-day cycles, alone or with pembrolizumab [FDA]."], ["Premedication", "For infusion reactions and nausea (antipyretic, H1/H2 blockers, antiemetics) [FDA]."], ["Observe", "During infusion and 30 minutes after [FDA]."], ["Never substitute", "For or with other irinotecan/SN-38 drugs [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — mg/kg." },
  adj: { renal: NEP, hepatic: "Moderate–severe: not studied [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid UGT1A1 inhibitors/inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; G-CSF [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hypersensitivity to sacituzumab govitecan [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Neutropenia, nausea, diarrhoea, fatigue, alopecia, anaemia, vomiting, constipation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe or life-threatening neutropenia [FDA]", "Severe diarrhoea [FDA]", "Hypersensitivity and infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ANC before each dose (withhold if under 1,500 on day 1 or under 1,000 on day 8); diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("sacituzumab-govitecan", "std", "Breast cancer — 10 mg/kg IV days 1 and 8 of 21-day cycles", "IV", ADULT, "mg_per_kg", 10, 168, { formulations: [{ form: "reconstituted", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Days 1 and 8 only; repeat every 21 days", "Premedicate; check ANC"] })],
  sources: [["FDA", "Trodelvy (sacituzumab govitecan-hziy) — FDA label (DailyMed)", R3_DM("57a597d2-03f0-472e-b148-016d7169169d")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Trop-2 ADC for metastatic breast cancer — 10 mg/kg on days 1 and 8 every 3 weeks; neutropenia and diarrhoea.",
    boxedTitle: "Neutropenia and diarrhea",
    boxed: "TRODELVY can cause severe, life-threatening, or fatal neutropenia. Withhold TRODELVY for absolute neutrophil count below 1500/mm 3 or neutropenic fever. Monitor blood cell counts periodically during treatment. Primary prophylaxis with G-CSF is recommended for all patients at increased risk of febrile neutropenia. Initiate anti-infective treatment in patients with febrile neutropenia without delay. TRODELVY can cause severe diarrhea. Monitor patients with diarrhea and give fluid and electrolytes as needed. At the onset of diarrhea, evaluate for infectious causes and, if negative, promptly initiate loperamide. If severe diarrhea occurs, withhold TRODELVY until resolved to ≤ Grade 1 and reduce subsequent doses [FDA].",
    adult: [{ ind: "Metastatic breast cancer", text: "10 mg/kg IV days 1 and 8 of 21-day cycles.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("sacrosidase", {
  inn: "Sacrosidase", atc: "A16AB06", cls: "Enzyme replacement (yeast-derived sucrase)",
  linked: [],
  forms: ["Oral solution 8,500 International Units/mL [FDA]."],
  moa: "Replaces deficient intestinal sucrase, allowing sucrose digestion [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Congenital sucrase-isomaltase deficiency [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Over 15 kg", "17,000 IU (2 mL) with each meal or snack [FDA]."], ["Administration", "Mix with 60–120 mL cold or room-temperature water, milk or infant formula; half at the start and half during the meal; never with fruit juice or heated liquid [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["15 kg or less: 8,500 IU (1 mL) with each meal or snack [FDA].", "Over 15 kg: 17,000 IU (2 mL) [FDA]."], transition: "2 mL from over 15 kg.", calcNote: "Fixed volume by weight." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Does not replace isomaltase — starch may still need restricting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to yeast, yeast products, papain or glycerin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Abdominal pain, vomiting, nausea, diarrhoea, constipation, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity, including wheezing [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptom response [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("sacrosidase", "le15", "CSID, 15 kg or less — 8,500 IU (1 mL) per meal", "PO", pop(null, null, null, 15.0001), "fixed", 8500, null, { dose: { value: 8500, unit: "IU", per: "dose" }, formulations: [{ form: "solution", strength: 8500, unit: "IU/mL" }], rounding: "1 mL", flags: ["With each meal or snack"] }),
    C("sacrosidase", "gt15", "CSID, over 15 kg — 17,000 IU (2 mL) per meal", "PO", pop(null, null, 15.0001, null), "fixed", 17000, null, { dose: { value: 17000, unit: "IU", per: "dose" }, formulations: [{ form: "solution", strength: 8500, unit: "IU/mL" }], rounding: "2 mL", flags: ["With each meal or snack"] })
  ],
  sources: [["FDA", "Sucraid (sacrosidase) oral solution — FDA label (DailyMed)", R3_DM("d613bb7f-c3f4-462e-81a2-da2347cc4b6b")], NEML_SRC],
  dose: { tagline: "Sucrase replacement for congenital sucrase-isomaltase deficiency — 1 or 2 mL with every meal.",
    adult: [{ ind: "CSID", text: "2 mL (17,000 IU) with each meal or snack.", calc: ["gt15"] }],
    child: [{ ind: "15 kg or less", text: "1 mL (8,500 IU) per meal.", calc: ["le15"] }, { ind: "Over 15 kg", text: "2 mL per meal.", calc: ["gt15"] }] }
});

FDB_M("safinamide", {
  inn: "Safinamide", atc: "N04BD03", cls: "Selective MAO-B inhibitor",
  linked: [],
  forms: ["Tablets 50, 100 mg [FDA]."],
  moa: "Reversible MAO-B inhibition plus sodium-channel/glutamate effects [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Adjunct to levodopa/carbidopa for 'off' episodes in Parkinson's disease [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "50 mg once daily at the same time of day [FDA]."], ["Increase", "After 2 weeks to 100 mg once daily if needed [FDA]."], ["Moderate hepatic impairment", "No more than 50 mg daily; severe: contraindicated [FDA]."], ["Stopping 100 mg", "Reduce to 50 mg for a week first [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate: max 50 mg; severe: contraindicated [FDA].", pregnancy: NEP, other: "Avoid tyramine-rich foods in large amounts; serotonergic drug interactions [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hepatic impairment [FDA]", "Other MAOIs, opioids (pethidine, tramadol, methadone), SNRIs, TCAs, cyclobenzaprine, dextromethorphan, St John's wort [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Dyskinesia, falls, nausea, insomnia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypertension [FDA] [UNVERIFIED-KNOWLEDGE]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Falling asleep during activities, hallucinations, impulse control disorders [FDA] [UNVERIFIED-KNOWLEDGE]", "Retinal pathology (animal data) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; dyskinesia [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("safinamide", "start", "Parkinson's 'off' episodes — 50 mg once daily", "PO", ADULT, "fixed", 50, 24, { formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["May increase to 100 mg after 2 weeks", "Moderate liver impairment: max 50 mg"] })],
  sources: [["FDA", "Xadago (safinamide) — FDA label (DailyMed)", R3_DM("c4d65f28-983f-42b4-bb23-023ae0fe81b2")], NEML_SRC],
  dose: { tagline: "MAO-B inhibitor add-on for Parkinson's 'off' time — 50 mg, up to 100 mg daily.",
    adult: [{ ind: "Parkinson's 'off' episodes", text: "50 mg daily; 100 mg after 2 weeks if needed.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("salmeterol", {
  inn: "Salmeterol", atc: "R03AC12", cls: "Long-acting beta-2 agonist (LABA), inhaled",
  linked: [],
  forms: ["Dry powder inhaler 50 microgram per blister (Serevent Diskus); combinations with fluticasone are separate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Long-acting beta-2 agonist bronchodilator [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Asthma — only with an inhaled corticosteroid [FDA].", "Prevention of exercise-induced bronchospasm [FDA].", "COPD maintenance [FDA]."], paed: ["Asthma from 4 years, with an inhaled corticosteroid [FDA]."] },
  adult: [["Asthma (with ICS) / COPD", "1 inhalation (50 microgram) twice daily, about 12 hours apart [FDA]."], ["Exercise-induced bronchospasm", "1 inhalation at least 30 minutes before exercise; not if already on twice-daily dosing [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Never", "More than 1 inhalation twice daily; never as monotherapy in asthma; not for acute attacks [FDA]."]],
  paed: { tiers: ["4 years and over (asthma, with ICS): 1 inhalation twice daily [FDA]."], transition: "Same.", calcNote: "Inhaler — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Avoid strong CYP3A4 inhibitors (ritonavir, ketoconazole) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Tachycardia, tremor, hypokalaemia, hyperglycaemia, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; cautious cardioselective beta-blocker [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Asthma without an inhaled corticosteroid [FDA]", "Primary treatment of status asthmaticus or acute episodes [FDA]", "Severe milk-protein hypersensitivity (lactose powder) [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Headache, nasopharyngitis, throat irritation, tremor [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Asthma-related death when used without ICS [FDA]", "Paradoxical bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]", "Cardiovascular effects, hypokalaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Asthma control; ensure ICS use [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Serevent Diskus (salmeterol) — FDA label (DailyMed)", R3_DM("12d9728e-6b5c-4aee-bfb0-745e542ed2e4")], NEML_SRC],
  dose: { tagline: "LABA — 50 microgram twice daily; in asthma only together with an inhaled corticosteroid.",
    boxedTitle: "Asthma-related death",
    boxed: "Long-acting beta 2 -adrenergic agonists (LABA), such as salmeterol, the active ingredient in SEREVENT DISKUS, as monotherapy (without inhaled corticosteroids [ICS]) increase the risk of asthma-related death. Data from a large placebo-controlled U.S. trial that compared the safety of salmeterol with placebo added to usual asthma therapy showed an increase in asthma-related deaths in subjects receiving salmeterol (13 deaths out of 13,176 subjects treated for 28 weeks on salmeterol versus 3 deaths out of 13,179 subjects on placebo). Use of background ICS was not required in this study. When LABA are used in fixed-dose combination with ICS, data from large clinical trials do not show a significant increase in the risk of serious asthma-related events (hospitalizations, intubations, death) compared with ICS alone. Use of SEREVENT DISKUS for the treatment of asthma as monotherapy without a concomitant ICS is contraindicated. Use SEREVENT DISKUS only as additional therapy for patients with asthma who are currently taking but are inadequately controlled on an ICS. Do not use SEREVENT DISKUS for patients whose asthma is adequately controlled on low- or medium-dose ICS. Pediatric and Adolescent Patients Available data from controlled clinical trials suggest that LABA as monotherapy increase the risk of asthma-related hospitalization in pediatric and adolescent patients [FDA].",
    adult: [{ ind: "Asthma (with ICS) / COPD", text: "1 inhalation (50 microgram) twice daily." }],
    child: [{ ind: "Asthma, 4 years+ (with ICS)", text: "1 inhalation twice daily." }] }
});

FDB_M("sapropterin", {
  inn: "Sapropterin", atc: "A16AX07", cls: "Synthetic tetrahydrobiopterin (BH4)",
  linked: [],
  forms: ["Tablets and powder for oral solution 100 mg, 500 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Cofactor that boosts residual phenylalanine hydroxylase activity [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Lower blood Phe in BH4-responsive phenylketonuria, with a Phe-restricted diet [FDA]."], paed: ["From 1 month [FDA]."] },
  adult: [["7 years and over", "Start 10–20 mg/kg once daily; adjust 5–20 mg/kg/day [FDA]."], ["Response check", "Blood Phe after 1 week and periodically for up to 1 month; stop if no response at 20 mg/kg/day for 1 month [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Administration", "With a meal; dissolve tablets or powder in water or apple juice [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["1 month to 6 years: 10 mg/kg once daily to start [FDA].", "7 years and over: 10–20 mg/kg once daily [FDA].", "Range 5–20 mg/kg/day [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg once daily." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Continue diet control in pregnancy [UNVERIFIED-KNOWLEDGE].", other: "Caution with levodopa (seizures reported) and PDE-5 inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Headache, diarrhoea, abdominal pain, upper respiratory infection, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypophenylalaninaemia in young children [FDA] [UNVERIFIED-KNOWLEDGE]", "Gastritis/oesophagitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood Phe regularly, especially in children [FDA]."],
  local: notBT,
  calc: [
    C("sapropterin", "u7", "PKU, 1 month to 6 years — 10 mg/kg once daily", "PO", pop(1, 84, null, null), "mg_per_kg", 10, 24, { formulations: [{ form: "powder", strength: 100, unit: "mg" }], rounding: "per sachet", flags: ["Range 5–20 mg/kg/day", "With Phe-restricted diet"] }),
    C("sapropterin", "o7", "PKU, 7 years+ — 10–20 mg/kg once daily", "PO", pop(84, null, null, null), "mg_per_kg", 10, 24, { dose: { value: 10, value_max: 20, unit: "mg", per: "dose" }, formulations: [{ form: "tablet", strength: 100, unit: "mg" }], rounding: "nearest 100 mg tablet", flags: ["Check blood Phe after 1 week"] })
  ],
  sources: [["FDA", "Kuvan (sapropterin) — FDA label (DailyMed)", R3_DM("af38711e-8873-4790-a92d-4d583e23fb89")], NEML_SRC],
  dose: { tagline: "BH4 for responsive PKU — 10–20 mg/kg once daily with diet.",
    adult: [{ ind: "BH4-responsive PKU", text: "10–20 mg/kg once daily.", calc: ["o7"] }],
    child: [{ ind: "1 month to 6 years", text: "10 mg/kg once daily.", calc: ["u7"] }, { ind: "7 years+", text: "10–20 mg/kg once daily.", calc: ["o7"] }] }
});

FDB_M("sarecycline", {
  inn: "Sarecycline", atc: "J01AA14", cls: "Narrow-spectrum tetracycline (acne)",
  linked: [],
  forms: ["Tablets 60, 100, 150 mg [FDA]."],
  moa: "Binds the bacterial 30S ribosome [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Inflammatory lesions of non-nodular moderate–severe acne vulgaris, 9 years and over [FDA]."], paed: ["9 years and over [FDA]."] },
  adult: [["By weight, once daily", "33–54 kg: 60 mg; 55–84 kg: 100 mg; 85–136 kg: 150 mg [FDA]."], ["Review", "If no improvement after 12 weeks [FDA]."], ["Administration", "With plenty of fluid [FDA]."]],
  paed: { tiers: ["9 years and over: same weight bands [FDA]."], transition: "Same.", calcNote: "Weight bands." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Tooth discolouration and bone effects in the fetus — avoid [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Separate from antacids, iron, calcium [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to tetracyclines [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Tooth discolouration if given under 8 years or in pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile, photosensitivity, intracranial hypertension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("sarecycline", "w33", "Acne, 33–54 kg — 60 mg once daily", "PO", pop(108, null, 33, 55), "fixed", 60, 24, { formulations: [{ form: "tablet", strength: 60, unit: "mg", whole: true }], rounding: "1 tablet" }),
    C("sarecycline", "w55", "Acne, 55–84 kg — 100 mg once daily", "PO", pop(108, null, 55, 85), "fixed", 100, 24, { formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "1 tablet" }),
    C("sarecycline", "w85", "Acne, 85–136 kg — 150 mg once daily", "PO", pop(108, null, 85, 137), "fixed", 150, 24, { formulations: [{ form: "tablet", strength: 150, unit: "mg", whole: true }], rounding: "1 tablet" })
  ],
  sources: [["FDA", "Seysara (sarecycline) — FDA label (DailyMed)", R3_DM("b200957c-3004-4988-be97-9fd619a83649")], NEML_SRC],
  dose: { tagline: "Narrow-spectrum tetracycline for acne — 60–150 mg once daily by weight from 9 years.",
    adult: [{ ind: "Moderate–severe acne", text: "33–54 kg 60 mg; 55–84 kg 100 mg; 85–136 kg 150 mg daily.", calc: ["w33", "w55", "w85"] }],
    child: [{ ind: "9 years+", text: "Same weight bands.", calc: ["w33", "w55", "w85"] }] }
});

FDB_M("sargramostim", {
  inn: "Sargramostim", atc: "L03AA09", cls: "Granulocyte-macrophage colony-stimulating factor (GM-CSF)",
  linked: [],
  forms: ["Powder or solution for injection 250 microgram vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stimulates granulocyte and macrophage production and function [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Neutrophil recovery after AML induction (55 years+); stem-cell mobilisation and transplant; acute radiation syndrome [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Transplant settings from 2 years; acute radiation syndrome from birth [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["AML after induction", "250 microgram/m²/day IV over 4 hours [FDA]."], ["Stem-cell mobilisation", "250 microgram/m²/day IV over 24 hours or SC once daily [FDA]."], ["After stem-cell transplant", "250 microgram/m²/day IV over 24 hours [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Acute radiation syndrome", "Weight-based SC dose (label) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Transplant settings: 250 microgram/m²/day [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "microgram/m²/day." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Not within 24 hours before or after chemotherapy/radiotherapy [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serious allergic reaction to GM-CSF, yeast products or excipients [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Fever, nausea, diarrhoea, bone pain, rash, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Fluid retention, capillary leak, effusions [FDA] [UNVERIFIED-KNOWLEDGE]", "Supraventricular arrhythmias [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Leukocytosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts twice weekly; fluid status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("sargramostim", "std", "Myeloid recovery / mobilisation — 250 microgram/m²/day", "IV/SC", ADULT, "mg_per_m2", 250, 24, { dose: { value: 250, unit: "microgram", per: "dose" }, rounding: "per vial", flags: ["IV over 4 h (AML) or 24 h, or SC daily per indication"] })],
  sources: [["FDA", "Leukine (sargramostim) — FDA label (DailyMed)", R3_DM("bb9a3820-f31a-4dd9-bef4-97094c01a398")], NEML_SRC],
  dose: { tagline: "GM-CSF for myeloid recovery and stem-cell mobilisation — 250 microgram/m²/day.",
    adult: [{ ind: "Myeloid recovery / mobilisation", text: "250 microgram/m²/day IV or SC.", calc: ["std"] }],
    child: [{ ind: "Transplant settings, 2 years+", text: "250 microgram/m²/day." }] }
});

FDB_M("sarilumab", {
  inn: "Sarilumab", atc: "L04AC14", cls: "Anti-IL-6 receptor monoclonal antibody",
  linked: [],
  forms: ["Prefilled syringe/pen 150, 200 mg [FDA]."],
  moa: "Blocks the IL-6 receptor [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Moderate–severe rheumatoid arthritis after DMARD failure [FDA].", "Polymyalgia rheumatica not responding to or unable to taper steroids [FDA]."], paed: ["Polyarticular JIA, 63 kg and over (label weight table below) [FDA]."] },
  adult: [["RA", "200 mg SC every 2 weeks, alone or with methotrexate/csDMARDs [FDA]."], ["PMR", "200 mg SC every 2 weeks with a tapering steroid [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Lab-based reductions", "150 mg every 2 weeks for neutropenia, thrombocytopenia or raised liver enzymes (label table) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Do not start", "ANC under 2,000, platelets under 150,000 or transaminases over 1.5 × ULN [FDA]."]],
  paed: { tiers: ["pJIA, 63 kg and over: 200 mg every 2 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: "Not recommended in active liver disease [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Live vaccines contraindicated during treatment [FDA] [UNVERIFIED-KNOWLEDGE]; restores CYP450 activity (adjust warfarin etc.) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to sarilumab [FDA]."],
  ae: { common: ["Neutropenia, raised ALT, injection-site redness, upper respiratory infection, UTI [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections including TB [FDA]", "GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia, thrombocytopenia, raised lipids and transaminases [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ANC, platelets, liver tests at 4–8 weeks then every 3 months; lipids at 4–8 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("sarilumab", "ra", "RA / PMR — 200 mg SC every 2 weeks", "SC", ADULT, "fixed", 200, 336, { formulations: [{ form: "prefilled syringe", strength: 200, unit: "mg", whole: true }], rounding: "1 syringe", flags: ["150 mg for lab abnormalities (label table)", "Screen for TB"] })],
  sources: [["FDA", "Kevzara (sarilumab) — FDA label (DailyMed)", R3_DM("827bc01c-d379-4266-a18c-c7f904b76af3")], NEML_SRC],
  dose: { tagline: "IL-6 receptor blocker for RA and PMR — 200 mg SC every 2 weeks.",
    boxedTitle: "Risk of serious infections",
    boxed: "Patients treated with KEVZARA are at increased risk for developing serious infections that may lead to hospitalization or death. Opportunistic infections have also been reported in patients receiving KEVZARA. Most patients who developed infections were taking concomitant immunosuppressants such as methotrexate or corticosteroids. Avoid use of KEVZARA in patients with an active infection. Reported infections include: Active tuberculosis, which may present with pulmonary or extrapulmonary disease. Patients should be tested for latent tuberculosis before KEVZARA use and during therapy. Treatment for latent infection should be initiated prior to KEVZARA use. Invasive fungal infections, such as candidiasis, and pneumocystis. Patients with invasive fungal infections may present with disseminated, rather than localized, disease. Bacterial, viral and other infections due to opportunistic pathogens. Closely monitor patients for signs and symptoms of infection during treatment with KEVZARA. If a serious infection develops, interrupt KEVZARA until the infection is controlled. Consider the risks and benefits of treatment with KEVZARA prior to initiating therapy in patients with chronic or recurrent infection [FDA].",
    adult: [{ ind: "RA / PMR", text: "200 mg SC every 2 weeks.", calc: ["ra"] }],
    child: [{ ind: "pJIA, 63 kg+", text: "200 mg every 2 weeks.", calc: ["ra"] }] }
});

FDB_M("satralizumab", {
  inn: "Satralizumab", atc: "L04AC19", cls: "Anti-IL-6 receptor monoclonal antibody (recycling)",
  linked: [],
  forms: ["Prefilled syringe 120 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks IL-6 receptor signalling [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["NMOSD in AQP4-antibody-positive adults [FDA].", "Thyroid eye disease (TED) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["NMOSD", "120 mg SC at weeks 0, 2, 4, then every 4 weeks [FDA]."], ["TED 40–100 kg", "120 mg at weeks 0, 2, 4, then every 4 weeks [FDA]."], ["TED over 100 kg", "180 mg at weeks 0, 2, 4, then every 4 weeks [FDA]."], ["Before starting", "HBV, TB and liver tests; check for active infection before each dose [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses by weight (TED)." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Live vaccines at least 4 weeks before [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active hepatitis B [FDA]", "Active or untreated latent TB [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Nasopharyngitis, headache, upper respiratory infection, rash, fatigue, injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised liver enzymes, neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests every 4 weeks for 3 months, then every 3 months; neutrophils [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("satralizumab", "nmosd", "NMOSD / TED (up to 100 kg) — 120 mg SC", "SC", pop(216, null, null, 100.0001), "fixed", 120, 672, { formulations: [{ form: "prefilled syringe", strength: 120, unit: "mg", whole: true }], rounding: "1 syringe", flags: ["Weeks 0, 2, 4, then every 4 weeks"] }),
    C("satralizumab", "ted100", "TED, over 100 kg — 180 mg SC", "SC", pop(216, null, 100.0001, null), "fixed", 180, 672, { rounding: "per syringe", flags: ["Weeks 0, 2, 4, then every 4 weeks"] })
  ],
  sources: [["FDA", "Enspryng (satralizumab-mwge) — FDA label (DailyMed)", R3_DM("64c156a4-9bad-4d45-a294-0733c141f47b")], NEML_SRC],
  dose: { tagline: "IL-6 receptor antibody for AQP4+ NMOSD and thyroid eye disease — 120 mg SC every 4 weeks after loading.",
    adult: [{ ind: "NMOSD (AQP4+)", text: "120 mg at weeks 0, 2, 4, then every 4 weeks.", calc: ["nmosd"] }, { ind: "Thyroid eye disease", text: "120 mg (40–100 kg) or 180 mg (over 100 kg), same schedule.", calc: ["nmosd", "ted100"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("saxagliptin", {
  inn: "Saxagliptin", atc: "A10BH03", cls: "DPP-4 inhibitor (gliptin)",
  linked: [],
  forms: ["Tablets 2.5, 5 mg [FDA]."],
  moa: "Inhibits DPP-4, raising incretin levels [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4/5 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Type 2 diabetes, with diet and exercise [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Type 2 diabetes", "2.5 or 5 mg once daily with or without food [FDA]."], ["eGFR under 45 (including dialysis)", "2.5 mg once daily [FDA]."], ["Strong CYP3A4/5 inhibitors", "Limit to 2.5 mg daily [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose with kidney step." },
  adj: { renal: "eGFR under 45: 2.5 mg daily [FDA].", hepatic: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Heart failure hospitalisation signal — caution [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of serious hypersensitivity (anaphylaxis, angioedema, exfoliative skin conditions) to saxagliptin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Upper respiratory infection, UTI, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Heart failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypoglycaemia with sulfonylureas/insulin [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe arthralgia, bullous pemphigoid [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Kidney function before and periodically; HbA1c [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("saxagliptin", "std", "Type 2 diabetes — 5 mg once daily", "PO", ADULT, "fixed", 5, 24, { formulations: [{ form: "tablet", strength: 5, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 44.999, action: "reduce_dose", set_value: 2.5, interval_h: 24 }], flags: ["Label uses eGFR under 45 for the 2.5 mg dose", "2.5 mg with strong CYP3A4 inhibitors"] })],
  sources: [["FDA", "Saxagliptin tablets — FDA label (DailyMed)", R3_DM("f3ea58bb-0002-4a5d-9213-7e9066e3dc9c")], NEML_SRC],
  dose: { tagline: "DPP-4 inhibitor — 5 mg daily (2.5 mg if eGFR under 45).",
    adult: [{ ind: "Type 2 diabetes", text: "2.5–5 mg once daily (2.5 mg if eGFR under 45).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("scopolamine", {
  inn: "Scopolamine (hyoscine hydrobromide)", atc: "A04AD01", cls: "Antimuscarinic antiemetic",
  linked: [],
  forms: ["Transdermal system 1 mg over 3 days (Transderm Scop) [FDA].", "Injection (hyoscine hydrobromide) in some countries [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks muscarinic receptors in vestibular and vomiting pathways [UNVERIFIED-KNOWLEDGE].",
  pk: ["Patch delivers about 1 mg over 72 hours [FDA]."],
  ind: { adult: ["Prevention of nausea and vomiting from motion sickness [FDA].", "Postoperative nausea and vomiting (anaesthesia/opioids) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Motion sickness", "1 patch to hairless skin behind one ear at least 4 hours before needed; lasts up to 3 days; then a new patch behind the other ear [FDA]."], ["PONV", "1 patch the evening before surgery (1 hour before caesarean section); remove 24 hours after surgery [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Handling", "One patch at a time; do not cut; wash hands after (pupil dilation if touched to eyes) [FDA]."], ["Stopping", "Withdrawal symptoms possible after several days' use [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established — children are more sensitive [FDA]."], transition: "Adults.", calcNote: "Patch — no calculator." },
  adj: { renal: "Caution — CNS effects [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Remove before MRI (metal backing) [FDA] [UNVERIFIED-KNOWLEDGE]. Older adults: confusion risk [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Anticholinergic toxicity: confusion, hallucinations, dilated pupils, tachycardia, urinary retention [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Remove patch; supportive; physostigmine in severe cases [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Angle-closure glaucoma [FDA]", "Hypersensitivity to scopolamine or belladonna alkaloids [FDA]"],
  ae: { common: ["Dry mouth, drowsiness, blurred vision, pupil dilation, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute angle-closure glaucoma [FDA]", "Neuropsychiatric effects (confusion, hallucinations), seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Urinary retention, GI obstruction [FDA] [UNVERIFIED-KNOWLEDGE]", "Heat illness (reduced sweating) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Eye pain or vision change; confusion [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Transderm Scop (scopolamine) transdermal system — FDA label (DailyMed)", R3_DM("b877a694-a1d0-4280-937a-a06820b12a88")], NEML_SRC],
  dose: { tagline: "Antimuscarinic patch for motion sickness and PONV — one patch behind the ear every 3 days.",
    adult: [{ ind: "Motion sickness", text: "1 patch behind the ear 4 h before; change every 3 days." }, { ind: "PONV", text: "1 patch the evening before surgery; remove 24 h after." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("sebelipase-alfa", {
  inn: "Sebelipase alfa", atc: "A16AB14", cls: "Recombinant lysosomal acid lipase (enzyme replacement)",
  linked: [],
  forms: ["Injection 20 mg/10 mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Replaces lysosomal acid lipase, clearing stored cholesteryl esters and triglycerides [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Lysosomal acid lipase (LAL) deficiency [FDA]."], paed: ["From 1 month, including rapidly progressive infantile disease [FDA]."] },
  adult: [["Children and adults", "1 mg/kg IV every other week; 3 mg/kg every other week if response is suboptimal [FDA]."], ["Rapidly progressive disease in the first 6 months", "1 mg/kg weekly, increased to 3 mg/kg then 5 mg/kg weekly if needed [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Setting", "Supervised by staff able to manage anaphylaxis [FDA]."]],
  paed: { tiers: ["Infants under 6 months with rapid disease: 1 mg/kg weekly (up to 3–5 mg/kg) [FDA].", "Others: 1 mg/kg every other week [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Egg allergy — possible cross-reactivity (produced in chicken eggs) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Diarrhoea, vomiting, fever, rhinitis, anaemia, cough, headache (infants and others) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis [FDA]"] },
  monitor: ["Infusion reactions; lipids and liver tests for response [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("sebelipase-alfa", "eow", "LAL deficiency — 1 mg/kg IV every other week", "IV", pop(1, null, null, null), "mg_per_kg", 1, 336, { formulations: [{ form: "vial", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["3 mg/kg if suboptimal response"] }),
    C("sebelipase-alfa", "infant", "Rapidly progressive LAL-D, under 6 months — 1 mg/kg IV weekly", "IV", pop(1, 6, null, null), "mg_per_kg", 1, 168, { formulations: [{ form: "vial", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["May increase to 3 mg/kg weekly"] })
  ],
  sources: [["FDA", "Kanuma (sebelipase alfa) — FDA label (DailyMed)", R3_DM("83a77b9d-42f0-4645-8420-786285da7326")], NEML_SRC],
  dose: { tagline: "Enzyme replacement for LAL deficiency — 1 mg/kg every other week (weekly in rapid infantile disease).",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Anaphylaxis has occurred during the early course of enzyme replacement therapy and after extended duration of therapy. Initiate KANUMA in a healthcare setting with appropriate medical monitoring and support measures, including access to cardiopulmonary resuscitation equipment. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue KANUMA and immediately initiate appropriate medical treatment, including use of epinephrine. Inform patients of the symptoms of life-threatening hypersensitivity reactions, including anaphylaxis and to seek immediate medical care should symptoms occur [FDA].",
    adult: [{ ind: "LAL deficiency", text: "1 mg/kg IV every other week (up to 3 mg/kg).", calc: ["eow"] }],
    child: [{ ind: "Infants under 6 months (rapid)", text: "1 mg/kg weekly.", calc: ["infant"] }, { ind: "Others", text: "1 mg/kg every other week.", calc: ["eow"] }] }
});

FDB_M("sebetralstat", {
  inn: "Sebetralstat", atc: "B06AC08", cls: "Oral plasma kallikrein inhibitor",
  linked: [],
  forms: ["Tablets 300 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits plasma kallikrein, reducing bradykinin [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute attacks of hereditary angioedema [FDA]."], paed: ["12 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["HAE attack", "600 mg (2 tablets) at the earliest sign of an attack; a second 600 mg dose after 3 hours if needed; maximum 1,200 mg in 24 hours [FDA]."], ["Laryngeal attacks", "Take the dose and seek emergency care [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["12 years and over: same dose [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: "Severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Dose changes with CYP3A4 inhibitors/inducers (label) [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Headache, nausea, vomiting, fatigue, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [C("sebetralstat", "attack", "HAE attack, 12 years+ — 600 mg once (may repeat after 3 h)", "PO", pop(144, null, null, null), "fixed", 600, null, { formulations: [{ form: "tablet", strength: 300, unit: "mg", whole: true }], rounding: "2 tablets", flags: ["Second 600 mg after 3 h if needed; max 1,200 mg in 24 h", "Laryngeal attack: seek emergency care"] })],
  sources: [["FDA", "Ekterly (sebetralstat) — FDA label (DailyMed)", R3_DM("1d145e2f-8e7e-2e90-e063-6294a90a4449")], NEML_SRC],
  dose: { tagline: "Oral on-demand treatment for HAE attacks — 600 mg, repeat once after 3 h if needed.",
    adult: [{ ind: "HAE attack", text: "600 mg at first sign; may repeat after 3 h (max 1,200 mg/24 h).", calc: ["attack"] }],
    child: [{ ind: "12 years and over", text: "Same.", calc: ["attack"] }] }
});

FDB_M("secnidazole", {
  inn: "Secnidazole", atc: "P01AB07", cls: "5-nitroimidazole antimicrobial",
  linked: [],
  forms: ["Oral granules 2 g sachet [FDA]."],
  moa: "Nitroimidazole — reduced in anaerobes to DNA-damaging radicals [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 17 hours) — single dose [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Bacterial vaginosis (females 12 years+) [FDA].", "Trichomoniasis (12 years+) [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["BV or trichomoniasis", "Single 2 g sachet orally, with or without food [FDA]."], ["Partners (trichomoniasis)", "Same dose at the same time [FDA]."], ["Administration", "Sprinkle on applesauce, yoghurt or pudding and eat within 30 minutes without chewing; do not dissolve in liquid [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["12 years and over: 2 g once [FDA]."], transition: "Same.", calcNote: "Fixed single dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Treat sexual partners for trichomoniasis [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to secnidazole or other nitroimidazoles [FDA]."],
  ae: { common: ["Vulvovaginal candidiasis, headache, nausea, dysgeusia, vomiting, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Vaginal candidiasis [FDA] [UNVERIFIED-KNOWLEDGE]", "Potential carcinogenicity (nitroimidazole class) — avoid unnecessary use [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [C("secnidazole", "single", "BV / trichomoniasis, 12 years+ — 2 g once", "PO", pop(144, null, null, null), "fixed", 2000, null, { formulations: [{ form: "granules sachet", strength: 2000, unit: "mg", whole: true }], rounding: "1 sachet", flags: ["Single dose; treat partner for trichomoniasis"] })],
  sources: [["FDA", "Solosec (secnidazole) — FDA label (DailyMed)", R3_DM("056485b6-8bba-4a21-ae00-cdb4e7ae4bfa")], NEML_SRC],
  dose: { tagline: "Single-dose nitroimidazole for bacterial vaginosis and trichomoniasis — 2 g once.",
    adult: [{ ind: "BV / trichomoniasis", text: "2 g once.", calc: ["single"] }],
    child: [{ ind: "12 years and over", text: "2 g once.", calc: ["single"] }] }
});

FDB_M("secretin", {
  inn: "Secretin (human, synthetic)", atc: "V04CK01", cls: "Diagnostic hormone",
  linked: [],
  forms: ["Powder for injection 16 microgram vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stimulates pancreatic bicarbonate secretion and gastrin release from gastrinomas [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Diagnosis of exocrine pancreatic dysfunction [FDA].", "Diagnosis of gastrinoma [FDA].", "Facilitate identification of the ampulla and accessory papilla at ERCP [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Pancreatic function test", "0.2 microgram/kg IV over 1 minute [FDA]."], ["Gastrinoma test", "0.4 microgram/kg IV over 1 minute [FDA]."], ["Before the test", "Stop anticholinergics, PPIs/H2 blockers as per label [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "microgram/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Vagotomy, IBD and alcoholism can affect results [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Acute pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, flushing, abdominal pain, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("secretin", "pancreas", "Pancreatic function test — 0.2 microgram/kg IV", "IV", ADULT, "mg_per_kg", 0.2, null, { dose: { value: 0.2, unit: "microgram", per: "dose" }, rounding: "per vial", flags: ["Over 1 minute"] }),
    C("secretin", "gastrinoma", "Gastrinoma test — 0.4 microgram/kg IV", "IV", ADULT, "mg_per_kg", 0.4, null, { dose: { value: 0.4, unit: "microgram", per: "dose" }, rounding: "per vial", flags: ["Over 1 minute"] })
  ],
  sources: [["FDA", "ChiRhoStim (human secretin) — FDA label (DailyMed)", R3_DM("b4dfe70f-0a86-4488-9ba1-dcd8f86cbfcd")], NEML_SRC],
  dose: { tagline: "Diagnostic secretin — 0.2 microgram/kg (pancreas) or 0.4 microgram/kg (gastrinoma) IV.",
    adult: [{ ind: "Pancreatic function test", text: "0.2 microgram/kg IV.", calc: ["pancreas"] }, { ind: "Gastrinoma test", text: "0.4 microgram/kg IV.", calc: ["gastrinoma"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("seladelpar", {
  inn: "Seladelpar", atc: "A05AX07", cls: "PPAR-delta agonist",
  linked: [],
  forms: ["Capsules 10 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "PPAR-delta agonist reducing bile acid synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Primary biliary cholangitis with ursodeoxycholic acid (or alone if UDCA not tolerated) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["PBC", "10 mg once daily with or without food [FDA]."], ["Bile acid sequestrants", "Separate by at least 4 hours [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: "Not recommended in decompensated cirrhosis [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Headache, abdominal pain, nausea, abdominal distension, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Fractures [FDA] [UNVERIFIED-KNOWLEDGE]", "Liver test abnormalities [FDA] [UNVERIFIED-KNOWLEDGE]", "Biliary obstruction — avoid with complete obstruction [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests; signs of decompensation [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("seladelpar", "pbc", "Primary biliary cholangitis — 10 mg once daily", "PO", ADULT, "fixed", 10, 24, { formulations: [{ form: "capsule", strength: 10, unit: "mg", whole: true }], rounding: "1 capsule" })],
  sources: [["FDA", "Livdelzi (seladelpar) — FDA label (DailyMed)", R3_DM("89f79d98-135c-40b2-a585-6996c04e599c")], NEML_SRC],
  dose: { tagline: "PPAR-delta agonist for PBC — 10 mg daily with UDCA.",
    adult: [{ ind: "Primary biliary cholangitis", text: "10 mg once daily.", calc: ["pbc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("selegiline", {
  inn: "Selegiline", atc: "N04BD01", cls: "Irreversible MAO-B inhibitor",
  linked: [],
  forms: ["Orally disintegrating tablets 1.25 mg (Zelapar) [FDA].", "Tablets/capsules 5 mg [UNVERIFIED-KNOWLEDGE].", "Transdermal patch for depression (Emsam) — different product [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits MAO-B, raising dopamine [UNVERIFIED-KNOWLEDGE].",
  pk: ["ODT bypasses first-pass metabolism — 1.25 mg ODT ≈ 10 mg conventional [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Adjunct to levodopa/carbidopa in Parkinson's disease with deteriorating response [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["ODT (Zelapar)", "1.25 mg once daily before breakfast for at least 6 weeks; then 2.5 mg once daily if needed [FDA]."], ["Administration", "On the tongue; no food or liquid 5 minutes before and after [FDA]."], ["Conventional tablets", "5 mg twice daily with breakfast and lunch [UNVERIFIED-KNOWLEDGE]."], ["Hepatic", "Mild–moderate: 1.25 mg; severe: not recommended [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "ODT fixed dose." },
  adj: { renal: "Severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild–moderate: 1.25 mg; severe: not recommended [FDA].", pregnancy: NEP, other: "Avoid pethidine, tramadol, methadone, dextromethorphan, SSRIs/SNRIs/TCAs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypertensive crisis, agitation, serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pethidine, tramadol, methadone, propoxyphene, dextromethorphan, St John's wort, other MAOIs [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, dizziness, pain, headache, insomnia, rhinitis, dyskinesia, stomatitis (ODT) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Orthostatic hypotension, hallucinations, falling asleep during activities [FDA] [UNVERIFIED-KNOWLEDGE]", "Melanoma (skin checks) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; skin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("selegiline", "odt", "Parkinson's (ODT) — 1.25 mg once daily", "PO", ADULT, "fixed", 1.25, 24, { formulations: [{ form: "ODT", strength: 1.25, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["After 6 weeks may increase to 2.5 mg", "Not interchangeable mg for mg with conventional tablets"] })],
  sources: [["FDA", "Zelapar (selegiline) ODT — FDA label (DailyMed)", R3_DM("380d7717-2a79-42f3-a712-efe5e7696ba0")], NEML_SRC],
  dose: { tagline: "MAO-B inhibitor add-on to levodopa — ODT 1.25 mg daily (up to 2.5 mg).",
    adult: [{ ind: "Parkinson's disease (with levodopa)", text: "ODT 1.25 mg daily; up to 2.5 mg after 6 weeks.", calc: ["odt"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("selenium-sulfide", {
  inn: "Selenium sulfide", atc: "D01AE13", cls: "Topical antifungal / antiseborrhoeic",
  linked: [],
  forms: ["Lotion/shampoo 2.5% (prescription); 1% shampoo (OTC) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Antifungal against Malassezia; slows epidermal turnover [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal absorption through intact skin [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Dandruff and seborrhoeic dermatitis of the scalp [FDA].", "Tinea (pityriasis) versicolor [FDA]."], paed: ["Safety in infants not established [FDA]."] },
  adult: [["Dandruff / seborrhoeic dermatitis", "Twice weekly for 2 weeks, then weekly to every 3–4 weeks as needed [FDA]."], ["Tinea versicolor", "Apply to affected areas with a little water, leave 10 minutes, rinse thoroughly; daily for 7 days [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Care", "Avoid eyes, genitals and broken skin; remove jewellery (discolours metal) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Infants: not established [FDA]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Do not use for tinea versicolor in pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: "Toxic if swallowed [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Remove; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Skin irritation, hair loss, hair discolouration, oily or dry scalp [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Selenium sulfide lotion 2.5% — FDA label (DailyMed)", R3_DM("28b84e3c-ae44-40bb-93c4-2625e19f7e61")], NEML_SRC],
  dose: { tagline: "Topical for dandruff and tinea versicolor — twice weekly for 2 weeks, then as needed.",
    adult: [{ ind: "Dandruff / seborrhoeic dermatitis", text: "Twice weekly × 2 weeks, then weekly or less." }, { ind: "Tinea versicolor", text: "10 minutes daily for 7 days." }],
    child: [{ ind: "Children", text: "Not in infants." }] }
});

FDB_M("selexipag", {
  inn: "Selexipag", atc: "B01AC27", cls: "Oral prostacyclin (IP) receptor agonist",
  linked: [],
  forms: ["Tablets 200–1,600 microgram; IV formulation [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Selective IP receptor agonist causing pulmonary vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2C8 — gemfibrozil contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Pulmonary arterial hypertension (WHO group 1) to delay progression [FDA]."], paed: ["PAH in children (weight-based titration) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "200 microgram twice daily [FDA]."], ["Titrate", "Increase by 200 microgram twice daily at weekly intervals to the highest tolerated dose, up to 1,600 microgram twice daily [FDA]."], ["Moderate hepatic impairment", "Start 200 microgram once daily [FDA]."], ["Interruption over 3 days", "Restart at a lower dose and re-titrate [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Weight-based start, increments and maximum (label table) [FDA]."], transition: "Adult titration.", calcNote: "Adult starting dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate: once daily; severe: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Moderate CYP2C8 inhibitors (clopidogrel): reduce to once daily [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Strong CYP2C8 inhibitors (gemfibrozil) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Headache, diarrhoea, jaw pain, nausea, myalgia, vomiting, flushing, limb pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pulmonary oedema in veno-occlusive disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperthyroidism [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Tolerability during titration; thyroid if symptoms [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("selexipag", "start", "PAH — start 200 microgram twice daily", "PO", ADULT, "fixed", 200, 12, { dose: { value: 200, unit: "microgram", per: "dose" }, rounding: "1 tablet", flags: ["Increase weekly by 200 microgram to max 1,600 microgram twice daily"] })],
  sources: [["FDA", "Uptravi (selexipag) — FDA label (DailyMed)", R3_DM("a7a23b87-f892-4e2c-8e2e-ebf841220f90")], NEML_SRC],
  dose: { tagline: "Oral prostacyclin-receptor agonist for PAH — 200 microgram twice daily, titrated weekly to max 1,600.",
    adult: [{ ind: "PAH", text: "200 microgram twice daily; titrate weekly to max 1,600 microgram twice daily.", calc: ["start"] }],
    child: [{ ind: "PAH", text: "Weight-based titration (label table)." }] }
});

FDB_M("selinexor", {
  inn: "Selinexor", atc: "L01XX66", cls: "Selective inhibitor of nuclear export (XPO1)",
  risk: ONC,
  linked: [],
  forms: ["Tablets 20 mg (blister packs per weekly dose) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks exportin 1, trapping tumour suppressor proteins in the nucleus [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Multiple myeloma with bortezomib + dexamethasone (after 1 or more lines), or with dexamethasone (penta-refractory) [FDA].", "Relapsed/refractory DLBCL [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Myeloma with bortezomib + dexamethasone (XVd)", "100 mg once weekly [FDA]."], ["Myeloma with dexamethasone (Xd)", "80 mg on days 1 and 3 of each week [FDA]."], ["DLBCL", "60 mg on days 1 and 3 of each week [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Supportive care", "Prophylactic antiemetics (5-HT3 antagonist ± others); fluids and calories [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed weekly doses." },
  adj: { renal: NEP, hepatic: "Severe: per label [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, fatigue, decreased appetite, vomiting, diarrhoea, weight loss, thrombocytopenia, anaemia, hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thrombocytopenia and neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe GI toxicity and anorexia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious infections, neurotoxicity (confusion, dizziness) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, sodium, weight at baseline and often in the first 2 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("selinexor", "xvd", "Myeloma (with bortezomib + dex) — 100 mg once weekly", "PO", ADULT, "fixed", 100, 168, { formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "5 tablets", flags: ["With dexamethasone alone: 80 mg on days 1 and 3 weekly", "Antiemetic prophylaxis"] })],
  sources: [["FDA", "Xpovio (selinexor) — FDA label (DailyMed)", R3_DM("f6dd2682-75a6-4863-90a8-a3197f6f78a8")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "XPO1 inhibitor for myeloma (and DLBCL) — 100 mg weekly with bortezomib-dex; nausea and low sodium common.",
    cautionTitle: "Use with care",
    caution: "Causes nausea, anorexia, weight loss, hyponatraemia and low platelets — give antiemetic prophylaxis and check counts and sodium often in the first 2 months [FDA].",
    adult: [{ ind: "Multiple myeloma (XVd)", text: "100 mg once weekly.", calc: ["xvd"] }, { ind: "Multiple myeloma (Xd)", text: "80 mg days 1 and 3 weekly." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("selpercatinib", {
  inn: "Selpercatinib", atc: "L01EX22", cls: "Selective RET kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 40, 80 mg; tablets 40–160 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits RET fusion and mutant kinases [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate; acid reducers lower absorption [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["RET fusion NSCLC, RET-mutant medullary thyroid cancer, RET fusion thyroid cancer and other RET fusion solid tumours [FDA]."], paed: ["From 2 years (MTC, thyroid, solid tumours) [FDA]."] },
  adult: [["12 years and over, under 50 kg", "120 mg twice daily [FDA]."], ["12 years and over, 50 kg and over", "160 mg twice daily [FDA]."], ["2 to under 12 years", "By BSA (label table) [FDA]."], ["Acid reducers", "Avoid PPIs or take with food; separate H2 blockers/antacids [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["12 years+: weight bands as adults [FDA].", "2–11 years: BSA table [FDA]."], transition: "Weight bands from 12 years.", calcNote: "Weight bands from 12 years." },
  adj: { renal: NEP, hepatic: "Severe: 80 mg twice daily [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A inhibitors or reduce dose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Oedema, diarrhoea, fatigue, dry mouth, hypertension, abdominal pain, rash, raised ALT/AST [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension, QT prolongation, haemorrhage [FDA] [UNVERIFIED-KNOWLEDGE]", "Slipped capital femoral epiphysis in children [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests every 2 weeks for 3 months then monthly; BP; ECG [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("selpercatinib", "lt50", "RET cancers, 12 years+ under 50 kg — 120 mg twice daily", "PO", pop(144, null, null, 50), "fixed", 120, 12, { formulations: [{ form: "capsule", strength: 40, unit: "mg", whole: true }], rounding: "3 capsules" }),
    C("selpercatinib", "ge50", "RET cancers, 12 years+ and 50 kg+ — 160 mg twice daily", "PO", pop(144, null, 50, null), "fixed", 160, 12, { formulations: [{ form: "capsule", strength: 80, unit: "mg", whole: true }], rounding: "2 capsules" })
  ],
  sources: [["FDA", "Retevmo (selpercatinib) — FDA label (DailyMed)", R3_DM("7fa848ba-a59c-4144-9f52-64d090f4d828")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "RET inhibitor — 120 mg (under 50 kg) or 160 mg twice daily.",
    adult: [{ ind: "RET-altered cancers", text: "120 mg (under 50 kg) or 160 mg (50 kg+) twice daily.", calc: ["lt50", "ge50"] }],
    child: [{ ind: "12 years+", text: "Same weight bands.", calc: ["lt50", "ge50"] }, { ind: "2–11 years", text: "BSA-based (label table)." }] }
});

FDB_M("selumetinib", {
  inn: "Selumetinib", atc: "L01EE04", cls: "MEK1/2 inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 10, 25 mg; oral granules [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits MEK in the RAS-MAPK pathway [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Symptomatic, inoperable plexiform neurofibromas in NF1 (adults per current label) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["NF1 plexiform neurofibromas from 1 year [FDA]."] },
  adult: [["Dose", "25 mg/m² twice daily (capsules swallowed whole, or granules on soft food), using the label BSA dosing tables [FDA]."], ["Moderate hepatic impairment", "20 mg/m² twice daily; severe: per label [FDA]."], ["Fasting (capsules, some labels)", "Follow product instructions [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["1 year and over: 25 mg/m² twice daily using the BSA table [FDA]."], transition: "Same mg/m².", calcNote: "BSA dosing table — no calculator (capsule rounding)." },
  adj: { renal: NEP, hepatic: "Moderate: 20 mg/m²; severe: per label [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Capsules contain vitamin E — caution with anticoagulants [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Vomiting, rash, abdominal pain, diarrhoea, nausea, dry skin, paronychia, raised CK [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiomyopathy (reduced LVEF) [FDA] [UNVERIFIED-KNOWLEDGE]", "Ocular toxicity (retinal vein occlusion, serous retinopathy) [FDA] [UNVERIFIED-KNOWLEDGE]", "GI toxicity, skin toxicity, raised CK/rhabdomyolysis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LVEF before and every 3 months for a year; eye exams; CK [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Koselugo (selumetinib) — FDA label (DailyMed)", R3_DM("7d042c61-f28f-4ab5-ab10-d7558c0d49ff")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "MEK inhibitor for NF1 plexiform neurofibromas — 25 mg/m² twice daily from the BSA table.",
    adult: [{ ind: "NF1 plexiform neurofibromas", text: "25 mg/m² twice daily (BSA table)." }],
    child: [{ ind: "1 year and over", text: "25 mg/m² twice daily (BSA table)." }] }
});

FDB_M("semaglutide", {
  inn: "Semaglutide", atc: "A10BJ06", cls: "GLP-1 receptor agonist",
  linked: [],
  forms: ["Once-weekly SC pens 0.25, 0.5, 1, 2 mg (Ozempic) [FDA].", "Weight-management pens up to 2.4 mg (Wegovy) and daily oral tablets (Rybelsus) — different doses [UNVERIFIED-KNOWLEDGE]."],
  moa: "GLP-1 agonist: glucose-dependent insulin release, less glucagon, slower gastric emptying, less appetite [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 1 week [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Type 2 diabetes (glycaemic control) [FDA].", "Reduce major cardiovascular events in type 2 diabetes with cardiovascular disease [FDA].", "Reduce kidney disease progression in type 2 diabetes with CKD [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Ozempic: not established [FDA]."] },
  adult: [["Start", "0.25 mg SC once weekly for 4 weeks (initiation dose, not for glycaemic effect) [FDA]."], ["Then", "0.5 mg weekly; increase to 1 mg after at least 4 weeks, then 2 mg after at least 4 weeks if needed [FDA]."], ["Missed dose", "Give within 5 days; otherwise skip [FDA] [UNVERIFIED-KNOWLEDGE]."], ["With insulin or sulfonylurea", "Consider lowering them to avoid hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Ozempic: not established [FDA]."], transition: "Adults.", calcNote: "Fixed weekly titration." },
  adj: { renal: "No dose change; watch for dehydration-related kidney injury [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Stop at least 2 months before a planned pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Diabetic retinopathy can worsen with rapid glucose improvement [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe nausea and vomiting, hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; long half-life [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Personal or family history of medullary thyroid carcinoma or MEN 2 [FDA]", "Serious hypersensitivity to semaglutide [FDA]"],
  ae: { common: ["Nausea, vomiting, diarrhoea, abdominal pain, constipation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thyroid C-cell tumours (rodents) [FDA]", "Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Gallbladder disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Diabetic retinopathy complications [FDA] [UNVERIFIED-KNOWLEDGE]", "Acute kidney injury from fluid loss; aspiration risk under anaesthesia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["HbA1c; retinal exam in retinopathy; GI tolerance [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("semaglutide", "start", "Type 2 diabetes (Ozempic) — start 0.25 mg SC weekly", "SC", ADULT, "fixed", 0.25, 168, { rounding: "pen dose", flags: ["0.25 mg × 4 weeks, then 0.5 mg; up to 1 mg then 2 mg", "Not for type 1 diabetes"] })],
  sources: [["FDA", "Ozempic (semaglutide) injection — FDA label (DailyMed)", R3_DM("42bdd912-2393-44c4-b7e0-47672ca28991")], NEML_SRC],
  dose: { tagline: "Weekly GLP-1 agonist — 0.25 mg for 4 weeks, then 0.5–2 mg weekly.",
    boxedTitle: "Risk of thyroid C-cell tumors",
    boxed: "• In rodents, semaglutide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors at clinically relevant exposures. It is unknown whether OZEMPIC causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans as human relevance of semaglutide-induced rodent thyroid C-cell tumors has not been determined. • OZEMPIC is contraindicated in patients with a personal or family history of MTC or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Counsel patients regarding the potential risk for MTC with the use of OZEMPIC and inform them of symptoms of thyroid tumors (e.g., a mass in the neck, dysphagia, dyspnea, persistent hoarseness). Routine monitoring of serum calcitonin or using thyroid ultrasound is of uncertain value for early detection of MTC in patients treated with OZEMPIC [FDA].",
    adult: [{ ind: "Type 2 diabetes (Ozempic)", text: "0.25 mg weekly × 4, then 0.5 mg; up to 2 mg weekly.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established (Ozempic)." }] }
});

})(); // end R-3 scope

/* Brand names — BATCH R3 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"safinamide":{"IN":[["Xafinact","Sun Pharma","Xafinact 50Mg Strip Of 10 Tablets"],["Zafimove","Torrent Pharmaceuticals Ltd","Zafimove 50Mg Strip Of 10 Tablets"],["Safion","Intas Pharmaceuticals Ltd","Safion 50 Strip Of 10 Tablets"]],"BD":[["Finapark","Incepta Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/xafinact-50mg-tablet-10-s-232846","https://pharmeasy.in/online-medicine-order/zafimove-50mg-strip-of-10-tablets-3521956","https://pharmeasy.in/online-medicine-order/safion-50-tablet-10-no-s-3741739","https://medex.com.bd/brands/33467/finapark-50-mg-tablet"]},"salmeterol":{"IN":[],"BD":[["Seravent","Drug International Ltd","25 mcg/puff"]],"src":["https://medex.com.bd/brands/24413/seravent-25-mcg-inhaler"]},"saxagliptin":{"IN":[["Onglyza","Astrazeneca Pharma India Ltd","Onglyza 5Mg Strip Of 14 Tablets"]],"BD":[["Glyza","The IBN SINA Pharmaceutical PLC","2.5 mg"],["Sixtin","Drug International Ltd","2.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/onglyza-5mg-strip-of-14-tablets-5264","https://medex.com.bd/brands/5498/glyza-25-mg-tablet","https://medex.com.bd/brands/5500/sixtin-25-mg-tablet"]},"secnidazole":{"IN":[["Secnil","Abbott Healthcare Pvt Ltd","Secnil Forte Strip Of 2 Tablets"]],"BD":[["Pronil DS","ACME Laboratories Ltd","1000 mg"],["Secnid DS","Square Pharmaceuticals PLC","1000 mg"],["Secnidal DS","Synovia Pharma PLC","1000 mg"]],"src":["https://pharmeasy.in/online-medicine-order/secnil-forte-tablet-268","https://medex.com.bd/brands/10244/pronil-ds-1000-mg-tablet","https://medex.com.bd/brands/10245/secnid-ds-1000-mg-tablet","https://medex.com.bd/brands/10247/secnidal-ds-1000-mg-tablet"]},"selegiline":{"IN":[["Selgin","Intas Pharmaceuticals Ltd","Selgin 5Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/selgin-5mg-strip-of-10-tablets-14174"]},"selexipag":{"IN":[["Selepeg","Msn Laboratories","Selepeg 200 Strip Of 10 Tablets"]],"BD":[["Palopag","Incepta Pharmaceuticals Ltd","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/selepeg-200-tablet-10-no-s-4119507","https://medex.com.bd/brands/32276/palopag-200-mg-tablet"]},"selinexor":{"IN":[],"BD":[["Selinex","Everest Pharmaceuticals Ltd","20 mg"]],"src":["https://medex.com.bd/brands/38130/selinex-20-mg-tablet"]},"selpercatinib":{"IN":[],"BD":[["Selcaxen","Everest Pharmaceuticals Ltd","40 mg"]],"src":["https://medex.com.bd/brands/38129/selcaxen-40-mg-capsule"]},"selumetinib":{"IN":[["Koselugo","Astrazeneca Pharma India Ltd","Koselugo 10Mg Bottle Of 60 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/koselugo-10mg-bottle-of-60-capsules-4819407"]},"semaglutide":{"IN":[["Rybelsus","Novo Nordisk India Pvt Ltd","Rybelsus 14Mg Strip Of 10 Tablets"],["Semalix","Torrent Pharmaceuticals Ltd","Semalix 3Mg Strip Of 10 Tablets"]],"BD":[["Semaslim","Beacon Pharmaceuticals PLC","2.4 mg/0.75 ml"],["Potenza OB","Advanced Chemical Industries PLC","0.5 mg/0.5 ml"],["Mylenda","Beximco Pharmaceuticals PLC","0.25 mg/0.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/rybelsus-14mg-strip-of-10-tablets-3625084","https://pharmeasy.in/online-medicine-order/semalix-3mg-strip-of-10-tablets-4740118","https://medex.com.bd/brands/38159/semaslim-24-mg-sc-injection","https://medex.com.bd/brands/38139/potenza-ob-05-mg-sc-injection","https://medex.com.bd/brands/38729/mylenda-025-mg-sc-injection"]},"rimegepant":{"IN":[["Nurtec Odt","Pfizer Limited","Nurtec Odt 75Mg Strip Of 2 Tablets"]],"BD":[["Apremig ODT","Advanced Chemical Industries PLC","75 mg"],["Sylvia ODT","Ziska Pharmaceuticals Ltd","75 mg"]],"src":["https://pharmeasy.in/online-medicine-order/nurtec-odt-75mg-strip-of-2-tablets-4565732","https://medex.com.bd/brands/35623/apremig-odt-75-mg-dispersible-tablet","https://medex.com.bd/brands/35806/sylvia-odt-75-mg-dispersible-tablet"]},"riociguat":{"IN":[["Rioci","Msn Laboratories","Rioci 1Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/rioci-1mg-tab-10-s-211431"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
