/* Clinical Disease Guide — Drug monograph database, block P, batch P-2 (26 Nov 2026).
   Patisiran … pertuzumab (P-1 = the P drugs at the end of js/fdb-o2.js). Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js.
   Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js. Labels added: IV/IM pentamidine beside the NebuPent pack. */
(function () { // P-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const P2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ALLP = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("patisiran", {
  inn: "Patisiran", atc: "N07XX12", cls: "siRNA targeting transthyretin (TTR) — lipid nanoparticle",
  linked: [],
  forms: ["Injection 10 mg/5 mL (2 mg/mL) vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Silences hepatic TTR mRNA, lowering mutant and wild-type TTR [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Polyneuropathy of hereditary transthyretin-mediated (hATTR) amyloidosis [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Under 100 kg", "0.3 mg/kg IV every 3 weeks [FDA]."], ["100 kg and over", "30 mg IV every 3 weeks [FDA]."], ["Premedication", "Corticosteroid, paracetamol and H1 + H2 antihistamines before each infusion [FDA]."], ["Infusion", "Filter, dilute and infuse over about 80 minutes [FDA]."], ["Vitamin A", "Supplement the recommended daily allowance [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "mg/kg, capped at 30 mg from 100 kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Lowers serum vitamin A — night-blindness symptoms need eye review [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Infusion-related reactions, upper respiratory infections [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion reactions [FDA]", "Reduced vitamin A [FDA]"] },
  monitor: ["Infusion reactions; ocular symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("patisiran", "lt100", "hATTR polyneuropathy, under 100 kg — 0.3 mg/kg every 3 weeks", "IV", pop(216, null, null, 100), "mg_per_kg", 0.3, 504, { formulations: [{ form: "vial", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Premedicate", "Over about 80 minutes"] }),
    C("patisiran", "ge100", "hATTR polyneuropathy, 100 kg and over — 30 mg every 3 weeks", "IV", pop(216, null, 100, null), "fixed", 30, 504, { formulations: [{ form: "vial", strength: 2, unit: "mg/mL" }], rounding: "15 mL", flags: ["Premedicate"] })
  ],
  sources: [["FDA", "Onpattro (patisiran) — FDA label (DailyMed)", P2_DM("e87ec36f-b4b4-49d4-aea4-d4ffb09b0970")], NEML_SRC],
  dose: { tagline: "siRNA for hATTR polyneuropathy — 0.3 mg/kg (max 30 mg) IV every 3 weeks.",
    adult: [{ ind: "hATTR polyneuropathy", text: "0.3 mg/kg IV every 3 weeks (30 mg from 100 kg).", calc: ["lt100", "ge100"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pazopanib", {
  inn: "Pazopanib", atc: "L01EX03", cls: "Multi-targeted tyrosine kinase inhibitor (VEGFR, PDGFR, KIT)",
  risk: ONC,
  linked: [],
  forms: ["Tablets 200 mg [FDA]."],
  moa: "Inhibits angiogenic receptor tyrosine kinases [UNVERIFIED-KNOWLEDGE].",
  pk: ["Food increases exposure — take fasting; CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Advanced renal cell carcinoma [FDA].", "Advanced soft tissue sarcoma after chemotherapy [FDA]."], paed: ["Not indicated [FDA]."] },
  adult: [["RCC / sarcoma", "800 mg once daily without food (1 hour before or 2 hours after a meal); swallow whole [FDA]."], ["Moderate hepatic impairment", "200 mg once daily; severe: not recommended [FDA]."], ["Strong CYP3A4 inhibitors", "Avoid, or reduce to 400 mg [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate: 200 mg; severe: not recommended [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Stop 7 days before surgery [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, hypertension, hair colour change, nausea, anorexia, fatigue, raised transaminases [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe and fatal hepatotoxicity [FDA]", "QT prolongation, haemorrhage, arterial thrombosis [FDA] [UNVERIFIED-KNOWLEDGE]", "GI perforation, wound-healing problems [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypothyroidism, proteinuria, TMA [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests at 3, 5, 7 and 9 weeks, then months 3 and 4, then periodically; blood pressure; ECG; thyroid; urine protein [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pazopanib", "std", "RCC / soft tissue sarcoma — 800 mg once daily, fasting", "PO", ADULT, "fixed", 800, 24, { formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }], rounding: "4 tablets", flags: ["Without food", "Moderate liver impairment: 200 mg"] })],
  sources: [["FDA", "Pazopanib tablets — FDA label (DailyMed)", P2_DM("115eb5bb-1403-fb3d-e063-6394a90ad320")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-angiogenic TKI for kidney cancer and sarcoma — 800 mg daily fasting; liver toxicity.",
    boxedTitle: "Hepatotoxicity",
    boxed: "Severe and fatal hepatotoxicity has been observed in clinical trials. Monitor hepatic function and interrupt, reduce, or discontinue dosing as recommended [FDA].",
    adult: [{ ind: "RCC / soft tissue sarcoma", text: "800 mg once daily without food.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("pegaspargase", {
  inn: "Pegaspargase", atc: "L01XX24", cls: "Pegylated L-asparaginase (E. coli)",
  risk: ONC,
  linked: [],
  forms: ["Injection 3,750 International Units/5 mL (750 IU/mL) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Depletes plasma asparagine, starving leukaemic cells [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["First-line ALL as part of multi-agent chemotherapy; ALL with hypersensitivity to native asparaginase [FDA]."], paed: ["Same [FDA]."] },
  adult: [["21 years and younger", "2,500 IU/m² IM or IV, no more often than every 14 days [FDA]."], ["Over 21 years", "2,000 IU/m² IM or IV, no more often than every 14 days [FDA]."], ["IM", "No more than 2 mL per injection site [FDA]."], ["IV", "Over 1–2 hours in 100 mL saline or 5% dextrose through a running infusion [FDA]."]],
  paed: { tiers: ["21 years and younger: 2,500 IU/m² [FDA]."], transition: "2,000 IU/m² over 21 years.", calcNote: "IU/m² (unit is International Units, not mg)." },
  adj: { renal: NEP, hepatic: "Severe hepatic impairment: contraindicated (see label) [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Interferes with hormonal contraceptives — use non-hormonal methods [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serious allergic reaction to pegaspargase [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious thrombosis, pancreatitis or haemorrhage with prior L-asparaginase [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Hypersensitivity, raised transaminases and bilirubin, hyperglycaemia, coagulopathy, pancreatitis, thrombosis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Thrombosis including CNS [FDA] [UNVERIFIED-KNOWLEDGE]", "Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Glucose intolerance [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity and coagulopathy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Observe 1 hour after dose; glucose, liver tests, fibrinogen, lipase [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("pegaspargase", "le21", "ALL, 21 years and younger — 2,500 IU/m²", "IM/IV", pop(null, 264, null, null), "mg_per_m2", 2500, 336, { dose: { value: 2500, unit: "IU", per: "dose" }, formulations: [{ form: "vial", strength: 750, unit: "IU/mL" }], rounding: "0.1 mL", flags: ["No more often than every 14 days", "IM: max 2 mL per site"] }),
    C("pegaspargase", "gt21", "ALL, over 21 years — 2,000 IU/m²", "IM/IV", pop(264, null, null, null), "mg_per_m2", 2000, 336, { dose: { value: 2000, unit: "IU", per: "dose" }, formulations: [{ form: "vial", strength: 750, unit: "IU/mL" }], rounding: "0.1 mL", flags: ["No more often than every 14 days"] })
  ],
  sources: [["FDA", "Oncaspar (pegaspargase) — FDA label (DailyMed)", P2_DM("ac7b6a6f-6ddb-48c6-8088-d8a8e3fea6ce")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Pegylated asparaginase for ALL — 2,500 IU/m² (2,000 IU/m² over 21 years), at least 14 days apart.",
    cautionTitle: "Use with care",
    caution: "Doses are in International Units per m², not mg. Watch for anaphylaxis, thrombosis, pancreatitis, hyperglycaemia and liver injury [FDA].",
    adult: [{ ind: "ALL, over 21 years", text: "2,000 IU/m² IM/IV every 14 days or longer.", calc: ["gt21"] }],
    child: [{ ind: "ALL, 21 years and younger", text: "2,500 IU/m² IM/IV every 14 days or longer.", calc: ["le21"] }] }
});

FDB_M("pegcetacoplan", {
  inn: "Pegcetacoplan", atc: "L04AJ03", cls: "Complement C3 inhibitor",
  linked: [],
  forms: ["SC infusion 1,080 mg/20 mL vial (Empaveli); intravitreal product for geographic atrophy (Syfovre, ATC S01XA31) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds C3/C3b, blocking both intravascular and extravascular haemolysis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Paroxysmal nocturnal haemoglobinuria (PNH) [FDA].", "C3 glomerulopathy or primary immune-complex MPGN [FDA]."], paed: ["C3G / IC-MPGN, 12 years and over (weight-based) [FDA]."] },
  adult: [["PNH / C3G / IC-MPGN", "1,080 mg SC twice weekly by pump or injector [FDA]."], ["Switching from C5 inhibitor (PNH)", "Overlap for 4 weeks as per label [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Vaccines", "Meningococcal, pneumococcal and Hib vaccines at least 2 weeks before [FDA]."]],
  paed: { tiers: ["12 years+ with C3G/IC-MPGN: weight-based (label table) [FDA]."], transition: "Adult dose at full weight.", calcNote: "Adult fixed dose; child weight table." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "REMS for encapsulated-bacteria infection risk [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Unresolved serious infection with encapsulated bacteria [FDA]", "Not up to date with required vaccines (unless treatment delay is riskier) [FDA]"],
  ae: { common: ["Injection-site reactions, infections, diarrhoea, abdominal pain, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections with encapsulated bacteria (meningococcus, pneumococcus, Hib) [FDA]", "Haemolysis after stopping (PNH) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Signs of infection; LDH and haemoglobin in PNH [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pegcetacoplan", "std", "PNH / C3G (adult) — 1,080 mg SC twice weekly", "SC", ADULT, "fixed", 1080, null, { formulations: [{ form: "vial", strength: 54, unit: "mg/mL" }], rounding: "20 mL", flags: ["Twice weekly", "Vaccinate at least 2 weeks before"] })],
  sources: [["FDA", "Empaveli (pegcetacoplan) — FDA label (DailyMed)", P2_DM("c23d89e9-b00b-4520-e053-2995a90a95af")], NEML_SRC],
  dose: { tagline: "C3 inhibitor for PNH and C3 glomerulopathy — 1,080 mg SC twice weekly; vaccinate first.",
    boxedTitle: "Serious infections caused by encapsulated bacteria",
    boxed: "EMPAVELI, a complement inhibitor, increases the risk of serious infections, especially those caused by encapsulated bacteria, such as Streptococcus pneumoniae, Neisseria meningitidis, and Haemophilus influenzae type B. Life-threatening and fatal infections with encapsulated bacteria have occurred in patients treated with complement inhibitors. These infections may become rapidly life-threatening or fatal if not recognized and treated early. Complete or update vaccination for encapsulated bacteria at least 2 weeks prior to the first dose of EMPAVELI, unless the risks of delaying therapy with EMPAVELI outweigh the risk of developing a serious infection. Comply with the most current Advisory Committee on Immunization Practices (ACIP) recommendations for vaccinations against encapsulated bacteria in patients receiving a complement inhibitor. See Warnings and Precautions for additional guidance on the management of the risk of serious infections caused by encapsulated bacteria. Patients receiving EMPAVELI are at increased risk for invasive disease caused by encapsulated bacteria, even if they develop antibodies following vaccination. Monitor patients for early signs and symptoms of serious infections and evaluate immediately if infection is suspected. Because of the risk of serious infections caused by encapsulated bacteria, EMPAVELI is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the EMPAVELI REMS [FDA].",
    adult: [{ ind: "PNH / C3G / IC-MPGN", text: "1,080 mg SC twice weekly.", calc: ["std"] }],
    child: [{ ind: "C3G / IC-MPGN, 12 years+", text: "Weight-based (label table)." }] }
});

FDB_M("pegfilgrastim", {
  inn: "Pegfilgrastim", atc: "L03AA13", cls: "Long-acting granulocyte colony-stimulating factor",
  linked: [],
  forms: ["Prefilled syringe 6 mg/0.6 mL (originator and biosimilars); on-body injector [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Pegylated G-CSF stimulating neutrophil production [UNVERIFIED-KNOWLEDGE].",
  pk: ["Self-regulating neutrophil-mediated clearance [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Reduce febrile neutropenia with myelosuppressive chemotherapy for non-myeloid cancers [FDA].", "Haematopoietic subsyndrome of acute radiation syndrome [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Chemotherapy", "6 mg SC once per cycle; not between 14 days before and 24 hours after chemotherapy [FDA]."], ["Radiation syndrome", "Two 6 mg doses one week apart, the first as soon as possible [FDA]."]],
  paed: { tiers: ["45 kg and over: 6 mg [FDA].", "Under 45 kg: weight-based — under 10 kg 0.1 mg/kg; 10–20 kg 1.5 mg; 21–30 kg 2.5 mg; 31–44 kg 4 mg [UNVERIFIED-KNOWLEDGE]."], transition: "6 mg from 45 kg.", calcNote: "Fixed 6 mg from 45 kg." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Sickle cell disease: crises reported [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Leukocytosis, bone pain [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of serious allergic reaction to pegfilgrastim or filgrastim [FDA]."],
  ae: { common: ["Bone pain, pain in extremity [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Splenic rupture [FDA] [UNVERIFIED-KNOWLEDGE]", "ARDS [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious allergic reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Sickle cell crisis [FDA] [UNVERIFIED-KNOWLEDGE]", "Glomerulonephritis, capillary leak, aortitis [FDA] [UNVERIFIED-KNOWLEDGE]", "MDS/AML in breast and lung cancer [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts; left upper abdominal or shoulder pain (spleen) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pegfilgrastim", "std", "Chemotherapy neutropenia, 45 kg+ — 6 mg SC once per cycle", "SC", pop(null, null, 45, null), "fixed", 6, null, { formulations: [{ form: "prefilled syringe", strength: 6, unit: "mg", whole: true }], rounding: "1 syringe", flags: ["Not 14 days before to 24 h after chemotherapy"] })],
  sources: [["FDA", "Armlupeg (pegfilgrastim-unne) — FDA label (DailyMed)", P2_DM("c48fe1a7-63d7-4dce-bb53-a913cb0ade83")], NEML_SRC],
  dose: { tagline: "Long-acting G-CSF — 6 mg SC once per chemotherapy cycle.",
    adult: [{ ind: "Chemotherapy-induced neutropenia", text: "6 mg SC once per cycle, at least 24 h after chemotherapy.", calc: ["std"] }],
    child: [{ ind: "45 kg and over", text: "6 mg.", calc: ["std"] }, { ind: "Under 45 kg", text: "Weight-based doses (see monograph)." }] }
});

FDB_M("peginterferon-alfa-2a", {
  inn: "Peginterferon alfa-2a", atc: "L03AB11", cls: "Pegylated interferon alfa",
  linked: [],
  forms: ["Prefilled syringe/autoinjector 180 microgram/0.5 mL; vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Immunomodulatory and antiviral interferon [UNVERIFIED-KNOWLEDGE].",
  pk: ["Weekly dosing [FDA]."],
  ind: { adult: ["Chronic hepatitis B (HBeAg-positive or negative) with compensated liver disease [FDA].", "Chronic hepatitis C (now rarely used — DAAs preferred) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Chronic hepatitis C 5–17 years; chronic hepatitis B 3–17 years [FDA]."] },
  adult: [["Chronic hepatitis B", "180 microgram SC once weekly for 48 weeks [FDA]."], ["Chronic hepatitis C", "180 microgram SC once weekly; duration by regimen and genotype [FDA]."], ["Kidney (CrCl under 30) or haemodialysis", "135 microgram weekly [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Hepatitis B (3–17 y) or C (5–17 y): 180 microgram/1.73 m² × BSA once weekly [FDA]."], transition: "Adult dose at 18 years.", calcNote: "BSA-scaled in children." },
  adj: { renal: "CrCl under 30 / haemodialysis: 135 microgram weekly [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Contraindicated in hepatic decompensation [FDA].", pregnancy: "With ribavirin: contraindicated in pregnancy (and partners) [FDA].", other: "Reduce dose for neutropenia, thrombocytopenia (label table) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Autoimmune hepatitis [FDA]", "Hepatic decompensation (Child-Pugh 6+ in cirrhosis, 5+ with HIV) [FDA] [UNVERIFIED-KNOWLEDGE]", "Neonates and infants (benzyl alcohol) [FDA]", "With ribavirin: pregnancy, haemoglobinopathies [FDA]", "Hypersensitivity to interferons [FDA]"],
  ae: { common: ["Fatigue, fever, myalgia, headache, depression, alopecia, injection-site reactions, neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe depression, suicidal behaviour [FDA]", "Autoimmune, ischaemic and infectious disorders [FDA]", "Hepatic decompensation [FDA] [UNVERIFIED-KNOWLEDGE]", "Thyroid disease, retinopathy, pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts at weeks 2 and 4 then periodically; thyroid; liver tests; mood; eye exam [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("peginterferon-alfa-2a", "adult", "Chronic hepatitis B/C — 180 microgram SC weekly", "SC", ADULT, "fixed", 180, 168, { dose: { value: 180, unit: "microgram", per: "dose" }, renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 135, interval_h: 168 }], rounding: "per syringe", flags: ["Hepatitis B: 48 weeks"] }),
    C("peginterferon-alfa-2a", "child", "Child (HBV 3 y+, HCV 5 y+) — 180 microgram/1.73 m² × BSA weekly", "SC", pop(36, 216, null, null), "mg_per_m2", 180 / 1.73, 168, { dose: { value: 180 / 1.73, unit: "microgram", per: "dose" }, rounding: "per syringe", flags: ["Weekly; check minimum age for hepatitis C (5 years)"] })
  ],
  sources: [["FDA", "Pegasys (peginterferon alfa-2a) — FDA label (DailyMed)", P2_DM("d9290e5b-6d40-2318-e053-2995a90a9916")], NEML_SRC],
  dose: { tagline: "Weekly pegylated interferon — 180 microgram SC (HBV 48 weeks); child 180 microgram/1.73 m² × BSA.",
    boxedTitle: "Risk of serious disorders and ribavirin-associated effects",
    boxed: "Risk of Serious Disorders Alpha interferons, including PEGASYS (peginterferon alfa-2a), may cause or aggravate fatal or life-threatening neuropsychiatric, autoimmune, ischemic, and infectious disorders. Patients should be monitored closely with periodic clinical and laboratory evaluations. Therapy should be withdrawn in patients with persistently severe or worsening signs or symptoms of these conditions. In many, but not all cases, these disorders resolve after stopping PEGASYS therapy [FDA].",
    adult: [{ ind: "Chronic hepatitis B / C", text: "180 microgram SC once weekly.", calc: ["adult"] }],
    child: [{ ind: "HBV (3 y+) / HCV (5 y+)", text: "180 microgram/1.73 m² × BSA weekly.", calc: ["child"] }] }
});

FDB_M("peginterferon-beta-1a", {
  inn: "Peginterferon beta-1a", atc: "L03AB13", cls: "Pegylated interferon beta",
  linked: [],
  forms: ["Prefilled pen/syringe 63, 94, 125 microgram [FDA]."],
  moa: "Immunomodulation in MS [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsing forms of MS [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Titration", "63 microgram on day 1, 94 microgram on day 15, 125 microgram on day 29 [FDA]."], ["Maintenance", "125 microgram SC or IM every 14 days [FDA]."], ["Flu-like symptoms", "Paracetamol or NSAID on injection days [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "Monitor in severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Hepatic injury reported — monitor [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to interferon beta or peginterferon [FDA]."],
  ae: { common: ["Injection-site redness, flu-like illness, fever, headache, myalgia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Depression and suicide [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic injury [FDA] [UNVERIFIED-KNOWLEDGE]", "Anaphylaxis, seizures, heart failure, TMA, autoimmune disorders [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts and liver tests periodically [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("peginterferon-beta-1a", "maint", "Relapsing MS — 125 microgram every 14 days", "SC/IM", ADULT, "fixed", 125, 336, { dose: { value: 125, unit: "microgram", per: "dose" }, rounding: "1 pen", flags: ["After titration: 63 → 94 → 125 microgram"] })],
  sources: [["FDA", "Plegridy (peginterferon beta-1a) — FDA label (DailyMed)", P2_DM("08f0ea03-4e6d-195d-aef4-886e32befa95")], NEML_SRC],
  dose: { tagline: "Pegylated interferon beta for relapsing MS — 125 microgram every 2 weeks after titration.",
    adult: [{ ind: "Relapsing MS", text: "63 → 94 → 125 microgram (days 1, 15, 29), then 125 microgram every 14 days.", calc: ["maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pegloticase", {
  inn: "Pegloticase", atc: "M04AX02", cls: "Pegylated recombinant uricase",
  linked: [],
  forms: ["Injection 8 mg/mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converts uric acid to allantoin [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Chronic gout refractory to conventional therapy [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Gout", "8 mg IV every 2 weeks over at least 120 minutes, with methotrexate 15 mg orally weekly (unless contraindicated) [FDA]."], ["Methotrexate", "Start (with folic/folinic acid) at least 4 weeks before [FDA]."], ["Before each infusion", "Check uric acid; stop if over 6 mg/dL on two consecutive checks (loss of response) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Premedication", "Antihistamine and corticosteroid; G6PD screening first [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Stop oral urate-lowering drugs first [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["G6PD deficiency [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Gout flares, infusion reactions, nausea, bruising [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis and infusion reactions [FDA]", "G6PD-related haemolysis and methaemoglobinaemia [FDA]", "Heart failure exacerbation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Uric acid before each infusion; observe after infusion [FDA]."],
  local: notBT,
  calc: [C("pegloticase", "std", "Refractory gout — 8 mg IV every 2 weeks", "IV", ADULT, "fixed", 8, 336, { formulations: [{ form: "vial", strength: 8, unit: "mg/mL" }], rounding: "1 mL", flags: ["With methotrexate 15 mg weekly", "Premedicate; check uric acid each time"] })],
  sources: [["FDA", "Krystexxa (pegloticase) — FDA label (DailyMed)", P2_DM("6e566303-d93a-4130-b764-25749829aa95")], NEML_SRC],
  dose: { tagline: "IV uricase for refractory gout — 8 mg every 2 weeks with methotrexate; screen for G6PD.",
    boxedTitle: "Anaphylaxis and infusion reactions; G6PD deficiency associated hemolysis and methemoglobinemia",
    boxed: "Anaphylaxis and infusion reactions have been reported to occur during and after administration of KRYSTEXXA. Anaphylaxis may occur with any infusion, and generally manifests within 2 hours of the infusion. However, delayed hypersensitivity reactions have also been reported. KRYSTEXXA should be administered in healthcare settings and by healthcare providers prepared to manage anaphylaxis and infusion reactions. Premedicate with antihistamines and corticosteroids and closely monitor for anaphylaxis for an appropriate period of time after administration of KRYSTEXXA. Monitor serum uric acid levels prior to each infusion and discontinue treatment if levels increase to above 6 mg/dL, particularly when 2 consecutive levels above 6 mg/dL are observed. Screen patients at risk for G6PD deficiency prior to starting KRYSTEXXA. Hemolysis and methemoglobinemia have been reported with KRYSTEXXA in patients with G6PD deficiency. KRYSTEXXA is contraindicated in patients with G6PD deficiency [FDA].",
    adult: [{ ind: "Refractory chronic gout", text: "8 mg IV every 2 weeks.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pegunigalsidase-alfa", {
  inn: "Pegunigalsidase alfa", atc: "A16AB20", cls: "Pegylated alpha-galactosidase A (enzyme replacement)",
  linked: [],
  forms: ["Injection 20 mg/10 mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Replaces deficient alpha-galactosidase A in Fabry disease [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (pegylated) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Fabry disease [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Fabry disease", "1 mg/kg (actual weight) IV every 2 weeks [FDA]."], ["Premedication", "Antihistamines, antipyretics ± corticosteroids, especially early or when switching from another ERT [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Infusion reactions, nasopharyngitis, headache, diarrhoea, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis [FDA]", "Infusion-associated reactions [FDA]", "Membranoproliferative glomerulonephritis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion reactions; urine protein and kidney function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pegunigalsidase-alfa", "std", "Fabry disease — 1 mg/kg IV every 2 weeks", "IV", ADULT, "mg_per_kg", 1, 336, { formulations: [{ form: "vial", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Premedicate as needed"] })],
  sources: [["FDA", "Elfabrio (pegunigalsidase alfa-iwxj) — FDA label (DailyMed)", P2_DM("6fb674bf-744e-431f-92ef-b2a5a66c8cf3")], NEML_SRC],
  dose: { tagline: "Pegylated enzyme replacement for Fabry disease — 1 mg/kg every 2 weeks.",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with ELFABRIO have experienced hypersensitivity reactions, including anaphylaxis. Appropriate medical support measures, including cardiopulmonary resuscitation equipment, should be readily available during ELFABRIO administration. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue ELFABRIO immediately and initiate appropriate medical treatment. In patients with severe hypersensitivity reaction, a desensitization procedure to ELFABRIO may be considered [FDA].",
    adult: [{ ind: "Fabry disease", text: "1 mg/kg IV every 2 weeks.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pegvaliase", {
  inn: "Pegvaliase", atc: "A16AB19", cls: "Pegylated phenylalanine ammonia lyase (enzyme substitution)",
  linked: [],
  forms: ["Prefilled syringes 2.5, 10, 20 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converts phenylalanine to trans-cinnamic acid and ammonia [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Phenylketonuria with blood Phe over 600 micromol/L on current management [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Induction", "2.5 mg SC once weekly for 4 weeks [FDA]."], ["Titration and maintenance", "Increase stepwise (label schedule) to 20 mg daily; up to 40–60 mg daily if Phe not controlled [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Safety", "Auto-injectable adrenaline must be carried; observe for 1 hour after early doses [FDA]."], ["Phe", "Check every 4 weeks until maintenance is set [FDA]."]],
  paed: { tiers: ["12 years and over: same schedule [FDA]."], transition: "Same.", calcNote: "Titration schedule — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Only through a restricted programme (REMS) in the US [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Injection-site reactions, arthralgia, hypersensitivity, headache, pruritus, low Phe [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis (can occur at any time) [FDA]", "Hypophenylalaninaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood Phe every 4 weeks during titration, then periodically; dietary protein [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Palynziq (pegvaliase-pqpz) — FDA label (DailyMed)", P2_DM("6dba844a-db02-44f8-8593-ce497ed9406c")], NEML_SRC],
  dose: { tagline: "Enzyme therapy for PKU — 2.5 mg weekly, titrated to 20 mg daily; adrenaline pen always.",
    boxedTitle: "Risk of anaphylaxis",
    boxed: "Anaphylaxis has been reported after administration of PALYNZIQ and may occur at any time during treatment. Administer the initial dose of PALYNZIQ under the supervision of a healthcare provider equipped to manage anaphylaxis, and closely observe patients for at least 60 minutes following injection. Prior to self-injection, confirm patient competency with self-administration, and patient's and observer's (if applicable) ability to recognize signs and symptoms of anaphylaxis and administer epinephrine, if needed. Consider having an adult observer for patients who may need assistance in recognizing and managing anaphylaxis during PALYNZIQ treatment. If an adult observer is needed, the observer should be present during and for at least 60 minutes after PALYNZIQ administration, should be able to administer epinephrine, and call for emergency medical support upon its use. Prescribe epinephrine to all patients treated with PALYNZIQ. Prior to the first dose, instruct the patient and observer (if applicable) how to recognize the signs and symptoms of anaphylaxis, how to properly administer epinephrine, and to seek immediate medical care upon its use. Instruct patients to carry epinephrine with them at all times during treatment with PALYNZIQ. Consider the risks and benefits of readministering PALYNZIQ following an episode of anaphylaxis. If the decision is made to readminister PALYNZIQ, readminister the first dose under the supervision of a healthcare provider equipped to manage anaphylaxis and closely observe the patient for at least 60 minutes following the dose [FDA].",
    adult: [{ ind: "Phenylketonuria", text: "2.5 mg weekly × 4, then titrate to 20 mg daily (up to 60 mg)." }],
    child: [{ ind: "12 years and over", text: "Same schedule." }] }
});

FDB_M("pegvisomant", {
  inn: "Pegvisomant", atc: "H01AX01", cls: "Growth hormone receptor antagonist",
  linked: [],
  forms: ["Powder for injection 10, 15, 20, 25, 30 mg vials [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks the growth hormone receptor, lowering IGF-1 [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Acromegaly not controlled by surgery, radiation or other medicines [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Loading", "40 mg SC once under supervision [FDA]."], ["Maintenance", "10 mg SC daily from the next day; adjust by 5 mg by IGF-1; range 10–30 mg daily [FDA]."], ["Do not titrate by", "GH levels or symptoms [FDA]."], ["Liver tests", "Before starting; caution if over 3 × ULN [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: NEP, hepatic: "Monitor liver tests monthly for 6 months then periodically [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "May need less insulin/oral hypoglycaemics [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Injection-site reactions, infections, pain, diarrhoea, nausea, abnormal liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Liver test elevations [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypoglycaemia in diabetics [FDA] [UNVERIFIED-KNOWLEDGE]", "Tumour growth (monitor pituitary) [FDA] [UNVERIFIED-KNOWLEDGE]", "Lipohypertrophy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["IGF-1 every 4–6 weeks during titration; liver tests; pituitary imaging [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("pegvisomant", "load", "Acromegaly — 40 mg SC loading dose", "SC", ADULT, "fixed", 40, null, { rounding: "per vial", flags: ["Then 10 mg daily from the next day"] }),
    C("pegvisomant", "maint", "Acromegaly — 10 mg SC daily (range 10–30 mg)", "SC", ADULT, "fixed", 10, 24, { rounding: "per vial", flags: ["Adjust by 5 mg by IGF-1"] })
  ],
  sources: [["FDA", "Somavert (pegvisomant) — FDA label (DailyMed)", P2_DM("3cbb485b-6df1-49ce-8747-592b395b1988")], NEML_SRC],
  dose: { tagline: "GH receptor antagonist for acromegaly — 40 mg load, then 10–30 mg daily by IGF-1.",
    adult: [{ ind: "Acromegaly", text: "40 mg SC load, then 10 mg daily (10–30 mg).", calc: ["load", "maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pegzilarginase", {
  inn: "Pegzilarginase", atc: "A16AB24", cls: "Pegylated recombinant human arginase 1",
  linked: [],
  forms: ["Injection 5 mg/mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Breaks down plasma arginine in arginase 1 deficiency [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Hyperargininaemia from arginase 1 deficiency (accelerated approval) [FDA]."], paed: ["Same, including children [FDA]."] },
  adult: [["Start", "0.1 mg/kg IV once weekly [FDA]."], ["Titrate", "By plasma arginine to the label maximum [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Setting", "Start in a facility with resuscitation equipment; consider antihistamine premedication [FDA]."]],
  paed: { tiers: ["Same mg/kg [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Starting dose mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Continue dietary protein management [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Hypersensitivity, vomiting, fever, cough [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Low arginine [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Plasma arginine before each titration [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pegzilarginase", "start", "Arginase 1 deficiency — start 0.1 mg/kg IV weekly", "IV", ALLP, "mg_per_kg", 0.1, 168, { formulations: [{ form: "vial", strength: 5, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["Titrate by plasma arginine"] })],
  sources: [["FDA", "Loargys (pegzilarginase) — FDA label (DailyMed)", P2_DM("d5ceabf2-43a0-4746-9371-d98a39cf6cfc")], NEML_SRC],
  dose: { tagline: "Enzyme therapy for arginase 1 deficiency — 0.1 mg/kg IV weekly, titrated by arginine.",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Anaphylaxis has occurred during the early course of enzyme replacement therapy and after extended duration of therapy. Initiate LOARGYS in a healthcare setting with appropriate medical monitoring and support measures, including access to cardiopulmonary resuscitation equipment. If a severe hypersensitivity reaction (e.g. anaphylaxis) occurs, discontinue LOARGYS and immediately initiate appropriate medical treatment, including use of epinephrine. Inform patients of the symptoms of life-threatening hypersensitivity reactions, including anaphylaxis and to seek immediate medical care should symptoms occur [FDA].",
    adult: [{ ind: "Arginase 1 deficiency", text: "0.1 mg/kg IV weekly to start.", calc: ["start"] }],
    child: [{ ind: "Arginase 1 deficiency", text: "0.1 mg/kg IV weekly to start.", calc: ["start"] }] }
});

FDB_M("pembrolizumab", {
  inn: "Pembrolizumab", atc: "L01FF02", cls: "PD-1 blocking monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Injection 100 mg/4 mL (25 mg/mL); SC product with berahyaluronidase is separate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks PD-1, restoring anti-tumour T-cell activity [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Many cancers: melanoma, NSCLC, mesothelioma, head and neck, Hodgkin and PMBCL, urothelial, MSI-H/dMMR and TMB-high solid tumours, gastric, oesophageal, cervical, HCC, RCC, endometrial, triple-negative breast, cutaneous SCC, Merkel cell [FDA]."], paed: ["Melanoma, cHL, PMBCL, Merkel cell, MSI-H/dMMR and TMB-H cancers [FDA]."] },
  adult: [["Most indications", "200 mg IV every 3 weeks or 400 mg every 6 weeks [FDA]."], ["Check", "Indication-specific combinations and durations (label) [FDA]."]],
  paed: { tiers: ["2 mg/kg (maximum 200 mg) IV every 3 weeks [FDA]."], transition: "Adult flat dose in adults.", calcNote: "mg/kg capped at 200 mg in children." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Immune-mediated reactions in any organ, even after stopping [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, musculoskeletal pain, rash, diarrhoea, fever, cough, pruritus, decreased appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Immune-mediated pneumonitis, colitis, hepatitis, endocrinopathies, nephritis, skin reactions, myocarditis [FDA]", "Infusion reactions [FDA]", "Complications of allogeneic HSCT [FDA]"] },
  monitor: ["Liver, kidney and thyroid tests, glucose; symptoms of immune-mediated toxicity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("pembrolizumab", "adult", "Adult — 200 mg IV every 3 weeks", "IV", ADULT, "fixed", 200, 504, { formulations: [{ form: "vial", strength: 25, unit: "mg/mL" }], rounding: "8 mL", flags: ["Or 400 mg every 6 weeks"] }),
    C("pembrolizumab", "child", "Child — 2 mg/kg (max 200 mg) every 3 weeks", "IV", pop(null, 216, null, null), "mg_per_kg", 2, 504, { caps: { max_single: 200, unit: "mg" }, formulations: [{ form: "vial", strength: 25, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Paediatric indications only"] })
  ],
  sources: [["FDA", "Keytruda (pembrolizumab) — FDA label (DailyMed)", P2_DM("9333c79b-d487-4538-a9f0-71b91a02b287")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "PD-1 inhibitor for many cancers — 200 mg every 3 weeks or 400 mg every 6 weeks; child 2 mg/kg.",
    cautionTitle: "Use with care",
    caution: "Immune-mediated reactions can affect any organ (lungs, bowel, liver, glands, kidneys, heart), even after stopping. Check liver, kidney and thyroid tests before doses [FDA].",
    adult: [{ ind: "Most indications", text: "200 mg every 3 weeks or 400 mg every 6 weeks.", calc: ["adult"] }],
    child: [{ ind: "Paediatric indications", text: "2 mg/kg (max 200 mg) every 3 weeks.", calc: ["child"] }] }
});

FDB_M("pemetrexed", {
  inn: "Pemetrexed", atc: "L01BA04", cls: "Antifolate antimetabolite",
  risk: ONC,
  linked: [],
  forms: ["Powder for injection 100, 500 mg; ready-to-dilute solutions (e.g. Pemfexy 25 mg/mL) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits thymidylate synthase and other folate-dependent enzymes [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted unchanged by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Non-squamous NSCLC (first-line with pembrolizumab + platinum, with cisplatin, maintenance, or alone after chemotherapy) [FDA].", "Mesothelioma with cisplatin [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "500 mg/m² IV over 10 minutes on day 1 of each 21-day cycle (CrCl 45 or more) [FDA]."], ["Vitamins", "Folic acid 400–1,000 microgram daily from 7 days before until 21 days after the last dose; vitamin B12 1 mg IM 1 week before the first dose and every 3 cycles [FDA]."], ["Dexamethasone", "4 mg twice daily the day before, the day of and the day after (rash prevention) [FDA]."], ["Kidney", "Not recommended at CrCl under 45 mL/min [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "mg/m²; refused below CrCl 45." },
  adj: { renal: "CrCl under 45: not recommended [FDA].", hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "NSAIDs: interrupt around dosing in mild–moderate kidney impairment [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Myelosuppression, mucositis, rash [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Leucovorin may be used; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hypersensitivity to pemetrexed [FDA]."],
  ae: { common: ["Fatigue, nausea, anorexia, neutropenia, anaemia, mucositis, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelosuppression [FDA]", "Renal failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Pneumonitis, radiation recall [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before each dose and days 8 and 15; kidney function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pemetrexed", "std", "NSCLC / mesothelioma — 500 mg/m² every 21 days", "IV", ADULT, "mg_per_m2", 500, 504, { renal: [{ crcl_min: 0, crcl_max: 44.999, action: "avoid", note: "not recommended at CrCl under 45 mL/min" }], rounding: "per vial", flags: ["Folic acid, B12 and dexamethasone premedication"] })],
  sources: [["FDA", "Pemfexy (pemetrexed injection) — FDA label (DailyMed)", P2_DM("caef07ce-066b-4c48-98dc-974b05ebbbe0")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Antifolate for non-squamous NSCLC and mesothelioma — 500 mg/m² every 3 weeks with folate/B12.",
    cautionTitle: "Use with care",
    caution: "Give folic acid and vitamin B12 to prevent severe toxicity, and dexamethasone to prevent rash. Not recommended at CrCl under 45 mL/min [FDA].",
    adult: [{ ind: "NSCLC / mesothelioma", text: "500 mg/m² IV every 21 days.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pemigatinib", {
  inn: "Pemigatinib", atc: "L01EN02", cls: "FGFR1–3 kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 4.5, 9, 13.5 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits fibroblast growth factor receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Previously treated cholangiocarcinoma with FGFR2 fusion/rearrangement [FDA].", "Myeloid/lymphoid neoplasms with FGFR1 rearrangement [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Cholangiocarcinoma", "13.5 mg once daily for 14 days, then 7 days off (21-day cycles) [FDA]."], ["FGFR1 neoplasms", "13.5 mg once daily continuously [FDA]."], ["Severe kidney or hepatic impairment", "9 mg (reduced) per label [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "Severe: 9 mg [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: 9 mg [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A inhibitors/inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hyperphosphataemia, alopecia, diarrhoea, nail toxicity, fatigue, dysgeusia, stomatitis, dry eye [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Retinal pigment epithelial detachment [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperphosphataemia and soft-tissue mineralisation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Eye exam (OCT) before and every 2 months for 6 months then every 3 months; phosphate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pemigatinib", "std", "FGFR-altered cancers — 13.5 mg once daily", "PO", ADULT, "fixed", 13.5, 24, { formulations: [{ form: "tablet", strength: 13.5, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Cholangiocarcinoma: 14 days on, 7 off"] })],
  sources: [["FDA", "Pemazyre (pemigatinib) — FDA label (DailyMed)", P2_DM("9e1f2222-1d89-4e63-989c-ccebe2ab1eb4")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "FGFR inhibitor for FGFR2 cholangiocarcinoma and FGFR1 neoplasms — 13.5 mg daily.",
    adult: [{ ind: "FGFR2 cholangiocarcinoma / FGFR1 neoplasms", text: "13.5 mg once daily (2 weeks on, 1 off for cholangiocarcinoma).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("penciclovir", {
  inn: "Penciclovir", atc: "D06BB06", cls: "Nucleoside antiviral (topical)",
  linked: [],
  forms: ["Cream 1% [FDA]."],
  moa: "Inhibits herpes viral DNA polymerase after activation in infected cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["Negligible absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Recurrent herpes labialis (cold sores) [FDA]."], paed: ["12 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Cold sores", "Apply every 2 hours while awake for 4 days, starting as early as possible [FDA]."], ["Avoid", "Mucous membranes and eyes [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["12 years and over: same [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to penciclovir or ingredients [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Application-site reaction, headache, taste change [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Penciclovir cream 1% — FDA label (DailyMed)", P2_DM("9cb88c28-d9c9-45e3-b4fe-083327f122de")], NEML_SRC],
  dose: { tagline: "Topical antiviral for cold sores — every 2 hours while awake for 4 days.",
    adult: [{ ind: "Herpes labialis", text: "Every 2 h while awake × 4 days." }],
    child: [{ ind: "12 years and over", text: "Same." }] }
});

FDB_M("penicillamine", {
  inn: "Penicillamine", atc: "M01CC01", cls: "Chelating agent / disease-modifying antirheumatic",
  linked: [],
  forms: ["Capsules 250 mg (Cuprimine); tablets 250 mg (Depen) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Chelates copper; forms soluble disulfide with cysteine; immunomodulatory [UNVERIFIED-KNOWLEDGE].",
  pk: ["Food, antacids and iron reduce absorption — take fasting [FDA]."],
  ind: { adult: ["Wilson's disease [FDA].", "Cystinuria [FDA].", "Severe active rheumatoid arthritis not responding to conventional therapy [FDA]."], paed: ["Wilson's disease and cystinuria [FDA]."] },
  adult: [["Wilson's disease", "Usually 0.75–1.5 g/day, by urinary copper; start low and build up [FDA]."], ["Cystinuria", "Usually 2 g/day (range 1–4 g) in four doses, with fluids [FDA]."], ["Rheumatoid arthritis", "Start 125–250 mg/day; increase slowly every 1–3 months [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Administration", "Empty stomach, 1 hour away from food, milk and other drugs; give pyridoxine [FDA]."]],
  paed: { tiers: ["Cystinuria: 30 mg/kg/day in four doses (larger part at bedtime) [FDA].", "Wilson's disease: dose by urinary copper [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult doses at adult weight.", calcNote: "Cystinuria child dose mg/kg/day." },
  adj: { renal: "Renal insufficiency: contraindicated in RA [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Avoid except Wilson's disease or cystinuria where benefit outweighs risk [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Pyridoxine supplement [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Prior penicillamine-related aplastic anaemia or agranulocytosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Pregnancy (RA) [FDA] [UNVERIFIED-KNOWLEDGE]", "RA with renal insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Rash, itch, taste loss, nausea, anorexia, proteinuria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Aplastic anaemia, agranulocytosis, thrombocytopenia [FDA]", "Proteinuria and nephrotic syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Myasthenia gravis, pemphigus, lupus, Goodpasture syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Early neurological worsening in Wilson's disease [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Urinalysis, blood counts with platelets twice weekly in month 1 then every 2 weeks for 6 months then monthly; liver tests; urinary copper in Wilson's [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("penicillamine", "cyst_child", "Cystinuria, child — 30 mg/kg/day in 4 doses", "PO", pop(null, 216, null, null), "mg_per_kg", 30, 6, { dose: { value: 30, unit: "mg", per: "day" }, divided_doses: 4, formulations: [{ form: "capsule", strength: 250, unit: "mg" }], rounding: "nearest capsule; larger part at bedtime", flags: ["Fasting", "Start 250 mg/day and build up"] })],
  sources: [["FDA", "Cuprimine (penicillamine) capsules — FDA label (DailyMed)", P2_DM("80e736d3-2017-4d68-94b4-38255c3c59c6")], NEML_SRC],
  dose: { tagline: "Chelator for Wilson's disease and cystinuria — dosed by urinary copper or cystine; frequent blood/urine checks.",
    boxedTitle: "Toxicity — close physician supervision",
    boxed: "Physicians planning to use penicillamine should thoroughly familiarize themselves with its toxicity, special dosage considerations, and therapeutic benefits. Penicillamine should never be used casually. Each patient should remain constantly under the close supervision of the physician. Patients should be warned to report promptly any symptoms suggesting toxicity [FDA].",
    adult: [{ ind: "Wilson's disease", text: "0.75–1.5 g/day by urinary copper." }, { ind: "Cystinuria", text: "2 g/day (1–4 g) in 4 doses." }],
    child: [{ ind: "Cystinuria", text: "30 mg/kg/day in 4 doses.", calc: ["cyst_child"] }] }
});

FDB_M("pentamidine", {
  inn: "Pentamidine isethionate", atc: "P01CX01", cls: "Aromatic diamidine antiprotozoal",
  linked: [],
  forms: ["Powder for injection 300 mg (IV/IM) [FDA].", "Powder for inhalation 300 mg (NebuPent) [FDA]."],
  moa: "Interferes with protozoal DNA, RNA, phospholipid and protein synthesis [FDA].",
  pk: ["Long tissue retention [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Treatment of Pneumocystis jirovecii pneumonia (IV/IM) [FDA].", "Prevention of PJP in high-risk HIV patients (inhaled) [FDA].", "Also used for early-stage T. b. gambiense sleeping sickness and leishmaniasis [UNVERIFIED-KNOWLEDGE]."], paed: ["PJP treatment from 4 months (IV/IM) [FDA]."] },
  adult: [["PJP treatment", "4 mg/kg IV (over 60–120 min) or deep IM once daily for 14–21 days [FDA]."], ["PJP prevention", "300 mg inhaled every 4 weeks via Respirgard II nebuliser [FDA]."], ["Reconstitution", "IV: sterile water or 5% dextrose (not saline first); inhaled: 6 mL sterile water only [FDA]."], ["Position", "Lie down during IV infusion — sudden severe hypotension [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Over 4 months: 4 mg/kg IV/IM once daily for 14–21 days [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg from 4 months." },
  adj: { renal: "Reduce dose or extend interval in severe impairment [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "QT prolongation — avoid other QT drugs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, hypoglycaemia, arrhythmias, nephrotoxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; glucose; ECG [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of anaphylaxis to pentamidine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Injection: hypotension, nausea, azotaemia, hypoglycaemia, injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE].", "Inhaled: cough, bronchospasm, fatigue, taste change [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypoglycaemia then diabetes (pancreatic islet damage) [FDA] [UNVERIFIED-KNOWLEDGE]", "Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Arrhythmias including torsades [FDA] [UNVERIFIED-KNOWLEDGE]", "Leukopenia, thrombocytopenia, nephrotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure during and after; glucose daily; blood counts, creatinine, calcium, ECG [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("pentamidine", "pjp", "PJP treatment, 4 months+ — 4 mg/kg IV/IM once daily", "IV/IM", pop(4, null, null, null), "mg_per_kg", 4, 24, { formulations: [{ form: "vial", strength: 300, unit: "mg" }], rounding: "per vial", flags: ["14–21 days", "Patient lying down; watch BP and glucose"] }),
    C("pentamidine", "proph", "PJP prevention — 300 mg inhaled every 4 weeks", "Inhaled", ADULT, "fixed", 300, 672, { formulations: [{ form: "vial", strength: 300, unit: "mg", whole: true }], rounding: "1 vial", flags: ["Respirgard II nebuliser; sterile water only"] })
  ],
  sources: [["FDA", "Pentamidine isethionate for injection — FDA label (DailyMed)", P2_DM("5c14fbf2-e21f-44b3-b35c-06919d40d7e0")], ["FDA", "NebuPent (pentamidine isethionate) for inhalation — FDA label (DailyMed)", P2_DM("e2ad9d3c-b6c3-4f70-87e0-722a8ff94ccb")], NEML_SRC],
  dose: { tagline: "Antiprotozoal for Pneumocystis — 4 mg/kg IV daily to treat; 300 mg inhaled monthly to prevent.",
    cautionTitle: "Use with care",
    caution: "Can cause sudden severe hypotension, hypoglycaemia, arrhythmias and pancreatitis — give IV with the patient lying down and monitor BP, glucose and ECG [FDA].",
    adult: [{ ind: "PJP treatment", text: "4 mg/kg IV/IM daily × 14–21 days.", calc: ["pjp"] }, { ind: "PJP prevention", text: "300 mg inhaled every 4 weeks.", calc: ["proph"] }],
    child: [{ ind: "PJP treatment, over 4 months", text: "4 mg/kg IV/IM daily × 14–21 days.", calc: ["pjp"] }] }
});

FDB_M("pentazocine", {
  inn: "Pentazocine (with naloxone)", atc: "N02AD01", cls: "Opioid agonist–antagonist",
  risk: "High-alert medication (opioid) [ISMP]",
  linked: [],
  forms: ["Tablets pentazocine 50 mg + naloxone 0.5 mg (US) [FDA].", "Pentazocine injection (some countries) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Kappa agonist, weak mu antagonist; naloxone discourages injection misuse [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Pain severe enough to need an opioid when alternatives are inadequate [FDA]."], paed: ["Not established under 12 years [FDA]."] },
  adult: [["Pain", "1 tablet (50 mg) every 3–4 hours as needed; may increase to 2 tablets; maximum 12 tablets (600 mg) a day [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Opioid-dependent patients", "Can precipitate withdrawal [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Under 12 years: not established [FDA]."], transition: "Adults.", calcNote: "Adult dose." },
  adj: { renal: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal opioid withdrawal [FDA].", other: "Hallucinations and dysphoria (kappa effect) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Respiratory depression, hallucinations, hypertension, tachycardia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Naloxone; supportive [FDA]." },
  contra: ["Significant respiratory depression [FDA]", "Acute or severe asthma without monitoring [FDA]", "GI obstruction [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, dizziness, light-headedness, vomiting, euphoria, sedation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression [FDA]", "Addiction, abuse, misuse [FDA]", "Hallucinations and psychotomimetic effects [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Respiration and sedation [FDA]."],
  local: notBT,
  calc: [C("pentazocine", "std", "Pain — 50 mg (1 tablet) every 3–4 h as needed", "PO", ADULT, "fixed", 50, 4, { caps: { max_daily: 600, unit: "mg" }, formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["May use 2 tablets; max 12 tablets/day", "Contains naloxone 0.5 mg per tablet"] })],
  sources: [["FDA", "Pentazocine and naloxone tablets — FDA label (DailyMed)", P2_DM("41ebdaaf-3bbc-419f-b996-0341efc14623")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Mixed opioid agonist–antagonist — 50 mg every 3–4 h; max 600 mg/day.",
    boxedTitle: "Serious and life-threatening risks from use of pentazocine and naloxone tablets",
    boxed: "Addiction, Abuse, and Misuse Pentazocine and Naloxone Tablets exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death. Assess each patient's risk prior to prescribing Pentazocine and Naloxone Tablets, and monitor all patients regularly for the development of these behaviors and conditions. Opioid Analgesic Risk Evaluation and Mitigation Strategy (REMS): To ensure that the benefits of opioid analgesics outweigh the risks of addiction, abuse, and misuse, the Food and Drug Administration (FDA) has required a REMS for these products. Under the requirements of the REMS, drug companies with approved opioid analgesic products must make REMS-compliant education programs available to healthcare providers. Healthcare providers are strongly encouraged to complete a REMS-compliant education program, counsel patients and/or their caregivers, with every prescription, on safe use, serious risks, storage, and disposal of these products, emphasize to patients and their caregivers the importance of reading the Medication Guide every time it is provided by their pharmacist, and consider other tools to improve patient, household, and community safety. Life-Threatening Respiratory Depression Serious, life-threatening, or fatal respiratory depression may occur with use of Pentazocine and Naloxone Tablets. Monitor for respiratory depression, especially during initiation of Pentazocine and Naloxone Tablets or following a dose increase. Accidental Ingestion Accidental ingestion of even one dose of Pentazocine and Naloxone Tablets, especially by children, can result in a fatal overdose of Pentazocine. Neonatal Opioid Withdrawal Syndrome Prolonged use of Pentazocine and Naloxone Tablets during pregnancy can result in neonatal opioid withdrawal syndrome, which may be life-threatening if not recognized and treated, and requires management according to protocols developed by neonatology experts. If opioid use is required for a prolonged period in a pregnant woman, advise the patient of the risk of neonatal opioid withdrawal syndrome and ensure that appropriate treatment will be available. Risks From Concomitant Use With Benzodiazepines Or Other CNS Depressants Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of Pentazocine and Naloxone Tablets and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate. Limit dosages and durations to the minimum required. Follow patients for signs and symptoms of respiratory depression and sedation [FDA].",
    adult: [{ ind: "Moderate–severe pain", text: "50 mg every 3–4 h (max 600 mg/day).", calc: ["std"] }],
    child: [{ ind: "Under 12 years", text: "Not established." }] }
});

FDB_M("pentobarbital", {
  inn: "Pentobarbital", atc: "N05CA01", cls: "Short-acting barbiturate",
  linked: [],
  forms: ["Injection 50 mg/mL [FDA]."],
  moa: "Enhances and directly activates GABA-A receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism; enzyme inducer [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Sedative; short-term hypnotic; preanaesthetic; anticonvulsant in emergency control of acute convulsive episodes [FDA]."], paed: ["Supported by literature; label dosing given [FDA]."] },
  adult: [["IV", "Slow injection, no faster than 50 mg/min; commonly 100 mg in a 70 kg adult, then small increments after at least 1 minute, up to 200–500 mg total [FDA] [UNVERIFIED-KNOWLEDGE]."], ["IM", "Usually 150–200 mg deep IM; no more than 5 mL at one site [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Refractory status / raised ICP (ICU use)", "Specialist protocols with EEG and haemodynamic monitoring [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["IM: 2–6 mg/kg, maximum 100 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "IV: reduce dose in proportion to weight [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult doses.", calcNote: "Titrated — no calculator." },
  adj: { renal: "Reduce dose [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Reduce dose; avoid in hepatic coma [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Fetal harm; neonatal withdrawal [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Enzyme inducer — lowers levels of many drugs [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "CNS and respiratory depression, hypotension, hypothermia, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Airway and ventilation; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to barbiturates [FDA] [UNVERIFIED-KNOWLEDGE]", "Porphyria [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Drowsiness, residual sedation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression and apnoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Dependence and withdrawal seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Tissue necrosis with extravasation or intra-arterial injection [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Airway, breathing, blood pressure throughout IV use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Pentobarbital sodium injection — FDA label (DailyMed)", P2_DM("e9f4b344-b092-4eec-b49d-d8cfe8ebc05d")], NEML_SRC],
  dose: { tagline: "Short-acting barbiturate for sedation and refractory seizures — slow IV titration with airway support.",
    cautionTitle: "Use with care",
    caution: "Inject slowly (no faster than 50 mg/min) with airway support ready — respiratory depression and hypotension. Avoid extravasation and intra-arterial injection [FDA].",
    adult: [{ ind: "Sedation / seizures (IV)", text: "Titrated slowly, e.g. 100 mg then increments (max 200–500 mg)." }],
    child: [{ ind: "Children (IM)", text: "2–6 mg/kg, max 100 mg." }] }
});

FDB_M("pentosan-polysulfate-sodium", {
  inn: "Pentosan polysulfate sodium", atc: "G04BX15", cls: "Sulfated polysaccharide (bladder mucosal protectant)",
  linked: [],
  forms: ["Capsules 100 mg [FDA]."],
  moa: "Thought to restore the bladder glycosaminoglycan layer; weak anticoagulant [UNVERIFIED-KNOWLEDGE].",
  pk: ["Poorly absorbed [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Bladder pain or discomfort of interstitial cystitis [FDA]."], paed: ["Not established under 16 years [FDA]."] },
  adult: [["Interstitial cystitis", "100 mg three times daily with water, 1 hour before or 2 hours after meals [FDA]."], ["Review", "At 3 months; may continue another 3 months; benefit beyond 6 months without improvement unknown [FDA]."]],
  paed: { tiers: ["Under 16 years: not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Bleeding risk with anticoagulants, NSAIDs, aspirin [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bleeding, GI upset [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Alopecia, diarrhoea, nausea, headache, rash, dyspepsia, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pigmentary maculopathy (vision loss) with long-term use [FDA] [UNVERIFIED-KNOWLEDGE]", "Bleeding [FDA] [UNVERIFIED-KNOWLEDGE]", "Liver test abnormalities [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Baseline and periodic retinal exam [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pentosan-polysulfate-sodium", "ic", "Interstitial cystitis — 100 mg three times daily", "PO", pop(192, null, null, null), "fixed", 100, 8, { formulations: [{ form: "capsule", strength: 100, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["1 h before or 2 h after meals", "Review at 3 and 6 months; eye exams"] })],
  sources: [["FDA", "Elmiron (pentosan polysulfate sodium) — FDA label (DailyMed)", P2_DM("f0ba651e-3d8a-11df-8fbe-119855d89593")], NEML_SRC],
  dose: { tagline: "Oral bladder protectant for interstitial cystitis — 100 mg three times daily; check eyes.",
    adult: [{ ind: "Interstitial cystitis", text: "100 mg three times daily.", calc: ["ic"] }],
    child: [{ ind: "Under 16 years", text: "Not established." }] }
});

FDB_M("pentostatin", {
  inn: "Pentostatin", atc: "L01XX08", cls: "Adenosine deaminase inhibitor (purine analogue)",
  risk: ONC,
  linked: [],
  forms: ["Powder for injection 10 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits adenosine deaminase, toxic to lymphocytes [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Alpha-interferon-refractory hairy cell leukaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Hairy cell leukaemia", "4 mg/m² IV every other week (bolus or over 20–30 minutes); higher doses not recommended [FDA]."], ["Hydration", "500–1,000 mL 5% dextrose in half-normal saline before, and 500 mL after [FDA]."], ["Kidney", "Reduce or withhold with impaired kidney function (label) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — mg/m²." },
  adj: { renal: "Reduce dose in impairment (e.g. CrCl 50–60: 2 mg/m²) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Never combine with fludarabine — fatal pulmonary toxicity [FDA]." },
  tox: { human: "Severe renal, hepatic, pulmonary and CNS toxicity at higher doses [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to pentostatin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Myelosuppression, fever, infection, nausea, rash, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe renal, liver, pulmonary and CNS toxicity [FDA]", "Fatal pulmonary toxicity with fludarabine [FDA]", "Opportunistic infections [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts and creatinine before each dose [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("pentostatin", "hcl", "Hairy cell leukaemia — 4 mg/m² IV every other week", "IV", ADULT, "mg_per_m2", 4, 336, { rounding: "per vial", flags: ["Hydrate before and after", "Never with fludarabine"], renal_note: "Kidney impairment: reduce or withhold per label [FDA]." })],
  sources: [["FDA", "Nipent (pentostatin) — FDA label (DailyMed)", P2_DM("674e0e6d-46ed-4868-9196-04019d667716")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Purine analogue for hairy cell leukaemia — 4 mg/m² every other week with hydration.",
    boxedTitle: "Higher than recommended doses; severe toxicity with fludarabine",
    boxed: "NIPENT should be administered under the supervision of a physician qualified and experienced in the use of cancer chemotherapeutic agents. The use of higher doses than those specified is not recommended. Dose-limiting severe renal, liver, pulmonary, and CNS toxicities occurred in Phase 1 studies that used NIPENT at higher doses (20-50 mg/m 2 in divided doses over 5 days) than recommended. In a clinical investigation in patients with refractory chronic lymphocytic leukemia using NIPENT at the recommended dose in combination with fludarabine phosphate, 4 of 6 patients entered in the study had severe or fatal pulmonary toxicity. The use of NIPENT in combination with fludarabine phosphate is not recommended [FDA].",
    adult: [{ ind: "Hairy cell leukaemia", text: "4 mg/m² IV every 2 weeks.", calc: ["hcl"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("perampanel", {
  inn: "Perampanel", atc: "N03AX22", cls: "AMPA-receptor antagonist (antiseizure)",
  linked: [],
  forms: ["Tablets 2–12 mg; oral suspension 0.5 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Non-competitive AMPA glutamate receptor antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long half-life (about 105 h); CYP3A4 — enzyme inducers lower levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Partial-onset seizures (monotherapy or adjunctive), 4 years and over [FDA].", "Adjunctive for primary generalised tonic-clonic seizures, 12 years and over [FDA]."], paed: ["Partial-onset from 4 years; PGTC from 12 years [FDA]."] },
  adult: [["Start (no enzyme inducer)", "2 mg once daily at bedtime; increase by 2 mg no more often than weekly [FDA]."], ["Start (with carbamazepine, phenytoin, oxcarbazepine)", "4 mg at bedtime [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Maintenance", "Partial-onset 8–12 mg; PGTC 8 mg at bedtime [FDA]."], ["Hepatic", "Mild: max 6 mg; moderate: max 4 mg; severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["4 years and over: same mg dosing as adults [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Fixed starting dose from 4 years." },
  adj: { renal: "Severe impairment / dialysis: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild max 6 mg; moderate max 4 mg [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Reduces levonorgestrel contraceptive effect at 12 mg [FDA] [UNVERIFIED-KNOWLEDGE]. Controlled substance [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Altered mental status, agitation, aggression [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; long half-life [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Dizziness, somnolence, fatigue, irritability, falls, ataxia, weight gain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious psychiatric and behavioural reactions including aggression, hostility, homicidal ideation [FDA]", "Suicidal thoughts [FDA] [UNVERIFIED-KNOWLEDGE]", "DRESS [FDA] [UNVERIFIED-KNOWLEDGE]", "Falls [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and behaviour, especially during titration [FDA]."],
  local: notBT,
  calc: [C("perampanel", "start", "Seizures, 4 years+ — start 2 mg at bedtime", "PO", pop(48, null, null, null), "fixed", 2, 24, { formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Increase by 2 mg weekly to 8–12 mg", "With enzyme-inducing AEDs: start 4 mg"] })],
  sources: [["FDA", "Fycompa (perampanel) — FDA label (DailyMed)", P2_DM("ec812ea3-de3a-4271-957c-db8f692d1ae3")], NEML_SRC],
  dose: { tagline: "AMPA antagonist antiseizure medicine — 2 mg at bedtime, up to 8–12 mg; watch behaviour.",
    boxedTitle: "Serious psychiatric and behavioral reactions",
    boxed: "Serious or life-threatening psychiatric and behavioral adverse reactions including aggression, hostility, irritability, anger, and homicidal ideation and threats have been reported in patients taking FYCOMPA. These reactions occurred in patients with and without prior psychiatric history, prior aggressive behavior, or concomitant use of medications associated with hostility and aggression. Advise patients and caregivers to contact a healthcare provider immediately if any of these reactions or changes in mood, behavior, or personality that are not typical for the patient are observed while taking FYCOMPA or after discontinuing FYCOMPA. Closely monitor patients particularly during the titration period and at higher doses. FYCOMPA should be reduced if these symptoms occur and should be discontinued immediately if symptoms are severe or are worsening [FDA].",
    adult: [{ ind: "Partial-onset / PGTC seizures", text: "2 mg at bedtime; titrate to 8–12 mg.", calc: ["start"] }],
    child: [{ ind: "4 years and over", text: "Same.", calc: ["start"] }] }
});

FDB_M("perindopril", {
  inn: "Perindopril (erbumine)", atc: "C09AA04", cls: "ACE inhibitor",
  linked: [],
  forms: ["Tablets 2, 4, 8 mg (erbumine); arginine salt tablets 2.5, 5, 10 mg in other countries — not mg-equivalent [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Prodrug of perindoprilat; ACE inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypertension [FDA].", "Stable coronary artery disease, to reduce cardiovascular death or non-fatal MI [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hypertension", "4 mg once daily; up to 16 mg/day [FDA]."], ["Stable CAD", "4 mg once daily for 2 weeks, then 8 mg once daily [FDA]."], ["Older adults (over 65)", "4 mg/day in one or two doses; above 8 mg with care [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Kidney (CrCl 30–60)", "Start 2 mg daily; max 8 mg; under 30: not recommended [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "CrCl 30–60: 2 mg start; under 30: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Stop as soon as pregnancy is detected [FDA].", other: "Not with aliskiren in diabetes; sacubitril/valsartan 36-hour gap [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "IV saline; dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of ACE-inhibitor angioedema [FDA]", "With aliskiren in diabetes [FDA]", "With or within 36 h of sacubitril/valsartan [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Cough, dizziness, headache, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Angioedema [FDA]", "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperkalaemia, kidney function decline [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia (class) [FDA] [UNVERIFIED-KNOWLEDGE]", "Fetal toxicity [FDA]"] },
  monitor: ["Blood pressure, potassium, creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("perindopril", "std", "Hypertension / stable CAD — 4 mg once daily", "PO", ADULT, "fixed", 4, 24, { formulations: [{ form: "tablet", strength: 4, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 30, crcl_max: 60, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "not recommended at CrCl under 30" }], flags: ["CAD: 8 mg after 2 weeks", "Hypertension: up to 16 mg/day"] })],
  sources: [["FDA", "Perindopril erbumine tablets — FDA label (DailyMed)", P2_DM("87768fbf-7c63-47da-8925-0316f343d6ef")], NEML_SRC],
  dose: { tagline: "ACE inhibitor for hypertension and stable CAD — 4 mg daily, up to 8–16 mg.",
    boxedTitle: "Fetal toxicity",
    boxed: "When pregnancy is detected, discontinue perindopril erbumine as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "4 mg once daily; up to 16 mg/day.", calc: ["std"] }, { ind: "Stable CAD", text: "4 mg × 2 weeks, then 8 mg daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("perphenazine", {
  inn: "Perphenazine", atc: "N05AB03", cls: "Typical antipsychotic (piperazine phenothiazine)",
  linked: [],
  forms: ["Tablets 2, 4, 8, 16 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Dopamine D2 antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2D6 metabolism [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Schizophrenia [FDA].", "Severe nausea and vomiting in adults [FDA]."], paed: ["Under 12 years: not recommended [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Schizophrenia, outpatient", "4–8 mg three times daily; reduce to the lowest effective dose [FDA]."], ["Schizophrenia, hospitalised", "8–16 mg two to four times daily; avoid more than 64 mg/day [FDA]."], ["Severe nausea and vomiting", "8–16 mg/day in divided doses; occasionally 24 mg [FDA]."], ["Long-term", "Over 24 mg/day reserved for hospitalised patients [FDA]."]],
  paed: { tiers: ["Under 12 years: not recommended [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing from 12 years [UNVERIFIED-KNOWLEDGE].", calcNote: "Adult dose." },
  adj: { renal: NEP, hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal EPS/withdrawal with third-trimester use [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Poor CYP2D6 metabolisers: higher levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "EPS, sedation, hypotension, arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; anticholinergic for dystonia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Comatose or greatly depressed states [FDA] [UNVERIFIED-KNOWLEDGE]", "Blood dyscrasias, bone marrow depression, liver damage [FDA] [UNVERIFIED-KNOWLEDGE]", "Subcortical brain damage [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity to phenothiazines [FDA]"],
  ae: { common: ["Extrapyramidal symptoms, drowsiness, dry mouth, blurred vision, constipation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased death in elderly with dementia [FDA]", "Tardive dyskinesia [FDA]", "Neuroleptic malignant syndrome [FDA]", "Leukopenia/agranulocytosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Movement disorders; blood count if risk factors [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("perphenazine", "outp", "Schizophrenia, outpatient — 4–8 mg three times daily", "PO", ADULT, "fixed", 4, 8, { dose: { value: 4, value_max: 8, unit: "mg", per: "dose" }, formulations: [{ form: "tablet", strength: 4, unit: "mg", whole: true }], rounding: "whole tablets", flags: ["Reduce to the lowest effective dose"] })],
  sources: [["FDA", "Perphenazine tablets — FDA label (DailyMed)", P2_DM("0e87e78e-d39c-44fc-95a0-70cdb2a91941")], NEML_SRC],
  dose: { tagline: "Typical antipsychotic and antiemetic — 4–8 mg three times daily (outpatients).",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis",
    boxed: "Increased Mortality in Elderly Patients with Dementia-Related Psychosis Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. Analyses of seventeen placebo-controlled trials (modal duration of 10 weeks), largely in patients taking atypical antipsychotic drugs, revealed a risk of death in drug-treated patients of between 1.6 to 1.7 times the risk of death in placebo-treated patients. Over the course of a typical 10-week controlled trial, the rate of death in drug-treated patients was about 4.5%, compared to a rate of about 2.6% in the placebo group. Although the causes of death were varied, most of the deaths appeared to be either cardiovascular (e.g., heart failure, sudden death) or infectious (e.g., pneumonia) in nature. Observational studies suggest that, similar to atypical antipsychotic drugs, treatment with conventional antipsychotic drugs may increase mortality. The extent to which the findings of increased mortality in observational studies may be attributed to the antipsychotic drug as opposed to some characteristic(s) of the patients is not clear. Perphenazine is not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia", text: "4–8 mg three times daily (inpatients 8–16 mg 2–4 times daily; max 64 mg).", calc: ["outp"] }, { ind: "Severe nausea/vomiting", text: "8–16 mg/day divided." }],
    child: [{ ind: "Under 12 years", text: "Not recommended." }] }
});

FDB_M("pertuzumab", {
  inn: "Pertuzumab", atc: "L01FD02", cls: "Anti-HER2 (dimerisation domain) monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Injection 420 mg/14 mL vial; fixed-dose SC combination with trastuzumab (Phesgo) is separate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks HER2 heterodimerisation, complementing trastuzumab [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["HER2-positive breast cancer: metastatic (with trastuzumab and docetaxel); neoadjuvant and adjuvant (with trastuzumab and chemotherapy) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Loading", "840 mg IV over 60 minutes [FDA]."], ["Maintenance", "420 mg IV over 30–60 minutes every 3 weeks [FDA]."], ["Missed dose", "If 6 weeks or more since the last dose, reload with 840 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["HER2 testing", "FDA-approved tests [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Embryo-fetal toxicity — contraception during and 7 months after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Withhold for LVEF decline (label) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to pertuzumab [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, alopecia, neutropenia, nausea, fatigue, rash, peripheral neuropathy (with chemotherapy) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Left ventricular dysfunction [FDA]", "Embryo-fetal toxicity [FDA]", "Infusion and hypersensitivity reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LVEF before and every 3 months (metastatic) or every 6–12 weeks (early breast cancer) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("pertuzumab", "load", "HER2+ breast cancer — 840 mg IV loading dose", "IV", ADULT, "fixed", 840, null, { formulations: [{ form: "vial", strength: 30, unit: "mg/mL" }], rounding: "2 vials", flags: ["Over 60 minutes"] }),
    C("pertuzumab", "maint", "HER2+ breast cancer — 420 mg IV every 3 weeks", "IV", ADULT, "fixed", 420, 504, { formulations: [{ form: "vial", strength: 30, unit: "mg/mL" }], rounding: "1 vial", flags: ["With trastuzumab and chemotherapy"] })
  ],
  sources: [["FDA", "Perjeta (pertuzumab) — FDA label (DailyMed)", P2_DM("17f85d17-ab71-4f5b-9fe3-0b8c822f69ff")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-HER2 antibody with trastuzumab — 840 mg load, then 420 mg every 3 weeks; check LVEF.",
    boxedTitle: "Left ventricular dysfunction and embryo-fetal toxicity",
    boxed: "Left Ventricular Dysfunction: PERJETA can cause subclinical and clinical cardiac failure manifesting as decreased LVEF and CHF. Evaluate cardiac function prior to and during treatment. Discontinue PERJETA treatment for a confirmed clinically significant decrease in left ventricular function. Embryo-fetal Toxicity: Exposure to PERJETA can cause embryo-fetal death and birth defects. Advise patients of these risks and the need for effective contraception [FDA].",
    adult: [{ ind: "HER2+ breast cancer", text: "840 mg IV, then 420 mg every 3 weeks.", calc: ["load", "maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

})(); // end P-2 scope

/* Brand names — BATCH P2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"pazopanib":{"IN":[["Pazolee","Admac Pharma Ltd.","Pazolee 200Mg Bottle Of 30 Tablets"],["Pazonat","Natco Pharma Ltd","Pazonat 400 Bottle Of 30 Tablets"],["Pazinib","Hetero Healthcare Limited","Pazinib 200Mg Bottle Of 30 Tablets"]],"BD":[["Pazocent","Incepta Pharmaceuticals Ltd","200 mg"],["Zopanib","Beacon Pharmaceuticals PLC","200 mg"],["Pazoren","Renata PLC","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/pazolee-200-mg-bottle-of-30-tablets-4828108","https://pharmeasy.in/online-medicine-order/pazonat-400-tablet-30-no-s-4120685","https://pharmeasy.in/online-medicine-order/pazinib-200-mg-tablet-30-no-s-4117621","https://medex.com.bd/brands/32278/pazocent-200-mg-tablet","https://medex.com.bd/brands/32279/zopanib-200-mg-tablet","https://medex.com.bd/brands/33090/pazoren-200-mg-tablet"]},"pegaspargase":{"IN":[["Hamsyl","Emcure Pharmaceuticals Ltd","Hamsyl Junior 1500 Iu Dry Vial Of 1 Powder For Injection"],["Pegizex","Halsted Pharma","Pegizex 3750 Iu Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/hamsyl-junior-1500-iu-dry-vial-of-1-powder-for-injection-4819981","https://pharmeasy.in/online-medicine-order/pegizex-3750-iu-dry-vial-of-1-powder-for-injection-4819265"]},"pegfilgrastim":{"IN":[["Peg Grafeel","Dr Reddy's Laboratories Ltd","Peg Grafeel 6Mg Pre Filled Syringe Of 0.6Ml Injection"],["Neupeg","Intas Pharmaceuticals Ltd","Neupeg 6Mg Pre Filled Syringe Injection 1Ml"]],"BD":[["PegNeufil","Healthcare Pharmaceuticals Ltd","6 mg/0.6 ml"],["PegFilgrast","Beacon Pharmaceuticals PLC","6 mg/0.6 ml"],["PEG-Filastin","Incepta Pharmaceuticals Ltd","6 mg/0.6 ml"]],"src":["https://pharmeasy.in/online-medicine-order/neupeg-6mg-inj-1ml-70712","https://medex.com.bd/brands/16643/pegneufil-6-mg-sc-injection","https://medex.com.bd/brands/17261/pegfilgrast-6-mg-sc-injection"]},"peginterferon-alfa-2a":{"IN":[],"BD":[["Optipeg-A","Incepta Pharmaceuticals Ltd","135 mcg/0.5 ml"],["Pegin","Beacon Pharmaceuticals PLC","180 mcg/0.5 ml"],["Pegferon","Healthcare Pharmaceuticals Ltd","180 mcg/0.5 ml"]],"src":["https://medex.com.bd/brands/9766/optipeg-a-135-mcg-sc-injection","https://medex.com.bd/brands/9768/pegin-180-mcg-sc-injection","https://medex.com.bd/brands/23418/pegferon-180-mcg-sc-injection"]},"pembrolizumab":{"IN":[],"BD":[["Pemro","Beacon Pharmaceuticals PLC","100 mg/4 ml"],["Pemomab","Ziska Pharmaceuticals Ltd","100 mg/4 ml"],["Pemroluma","Healthcare Pharmaceuticals Ltd","100 mg/4 ml"]],"src":["https://medex.com.bd/brands/30058/pemro-100-mg-iv-infusion","https://medex.com.bd/brands/36611/pemomab-100-mg-iv-infusion","https://medex.com.bd/brands/37335/pemroluma-100-mg-iv-infusion"]},"pemetrexed":{"IN":[["Vrtu","Shilpa Medicare Limited","Vrtu 500Mg Vial Of 50Ml Injection"],["Pemshil","Shilpa Medicare Limited","Pemshil 100Mg Dry Vial Of 1 Powder For Injection"],["Pamifect","Aureate Healthcare Pvt Ltd","Pamifect 100Mg Injection"]],"BD":[["Alimta","Healthcare Pharmaceuticals Ltd","500 mg/20 ml"],["Pemetrex","Beacon Pharmaceuticals PLC","100 mg/4 ml"],["Pemeta","Drug International Ltd","100 mg/4 ml"]],"src":["https://pharmeasy.in/online-medicine-order/vrtu-500mg-vial-of-50ml-injection-4819860","https://pharmeasy.in/online-medicine-order/pemshil-100mg-injection-1-s-231654","https://pharmeasy.in/online-medicine-order/pamifect-100mg-inj-140975","https://medex.com.bd/brands/15073/alimta-500-mg-iv-infusion","https://medex.com.bd/brands/37093/pemetrexed-100-mg-iv-infusion","https://medex.com.bd/brands/28380/pemeta-100-mg-iv-infusion"]},"penicillamine":{"IN":[["Cilamin","Mankind Pharmaceuticals Ltd","Cilamin 250Mg Strip Of 10 Capsules"],["Penicitin","Samarth Life Sciences Pvt Ltd","Penicitin 250Mg Strip Of 10 Capsules"]],"BD":[["Wilpen","Healthcare Pharmaceuticals Ltd","125 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cilamin-250mg-strip-of-10-capsules-21606","https://pharmeasy.in/online-medicine-order/penicitin-250mg-strip-of-10-capsules-178998","https://medex.com.bd/brands/37970/wilpen-125-mg-capsule"]},"pentazocine":{"IN":[["Fortwin","Ranbaxy Laboratories (sun Pharma)","Fortwin Injection 1Ml"]],"BD":[["Pentazo","General Pharmaceuticals Ltd","30 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/fortwin-inj-1ml-47897","https://medex.com.bd/brands/23421/pentazo-30-mg-injection"]},"pentosan-polysulfate-sodium":{"IN":[["Cystopen","Ranbaxy Laboratories (sun Pharma)","Cystopen 100Mg Strip Of 10 Capsules"],["Comfora","West-Coast Pharmaceutical Works Limited","Comfora Bottle Of 90 Capsules"]],"BD":[["Cystosan","Incepta Pharmaceuticals Ltd","100 mg"],["Elmisan","Healthcare Pharmaceuticals Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cystopen-100mg-capsule-23032","https://pharmeasy.in/online-medicine-order/comfora-capsules-29131","https://medex.com.bd/brands/30491/cystosan-100-mg-capsule","https://medex.com.bd/brands/32206/elmisan-100-mg-capsule"]},"perampanel":{"IN":[["Fycompa","Eisai Pharmaceuticals","Fycompa 4Mg Strip Of 14 Tablets"],["Ampanel","Sun Pharma","Ampanel 4Mg Strip Of 10 Tablets"],["Perampa","Intas Pharmaceuticals Ltd","Perampa 4 Strip Of 10 Tablets"]],"BD":[["Peranel","Square Pharmaceuticals PLC","2 mg"]],"src":["https://pharmeasy.in/online-medicine-order/fycompa-4mg-strip-of-14-tablets-178757","https://pharmeasy.in/online-medicine-order/ampanel-4mg-strip-of-10-tablets-3594709","https://pharmeasy.in/online-medicine-order/perampa-4-tablet-10-no-s-3740761","https://medex.com.bd/brands/30510/peranel-2-mg-tablet"]},"perindopril":{"IN":[["Perindprim","Steris Healthcare","Perindprim 4Mg Strip Of 10 Tablets"],["Coversyl","Servier India Private Limited (formerly Known As Serdia Pharmaceuticals (india) Pvt Ltd)","Coversyl 2Mg Strip Of 10 Tablets"]],"BD":[["Pericard","Asiatic Laboratories Ltd","4 mg"],["Versil","ACME Laboratories Ltd","4 mg"]],"src":["https://pharmeasy.in/online-medicine-order/perindprim-4mg-strip-of-10-tablets-4489967","https://pharmeasy.in/online-medicine-order/coversyl-2mg-strip-of-10-tablets-42217","https://medex.com.bd/brands/38072/pericard-4-mg-tablet","https://medex.com.bd/brands/2626/versil-4-mg-tablet"]},"pertuzumab":{"IN":[["Intazumab","Intas Pharmaceuticals Ltd","Intazumab 420Mg Vial Of 14Ml Solution For Infusion"]],"BD":[["Pertuza","Incepta Pharmaceuticals Ltd","420 mg/14 ml"],["Perjeta","Roche Bangladesh Ltd","420 mg/14 ml"]],"src":["https://pharmeasy.in/online-medicine-order/intazumab-420mg-vial-of-14ml-injection-4819794","https://medex.com.bd/brands/26053/pertuza-420-mg-iv-infusion","https://medex.com.bd/brands/26087/perjeta-420-mg-iv-infusion"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
