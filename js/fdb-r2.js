/* Clinical Disease Guide — Drug monograph database, block R, batch R-2 (26 Nov 2026).
   Ravulizumab … rimantadine (R-1 = rabeprazole … rasburicase in js/fdb-p3.js). Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js.
   Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js. Deferred: retinol (already in js/fdb-n3.js), riboflavin (multivitamin labels only).
   Labels added: oral ribavirin capsules beside the inhaled (Virazole) pack. */
(function () { // R-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const R2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("ravulizumab", {
  inn: "Ravulizumab", atc: "L04AJ02", cls: "Long-acting complement C5 inhibitor",
  linked: [],
  forms: ["Injection 100 mg/mL (3 mL, 11 mL vials); SC on-body product [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds C5, blocking terminal complement (membrane attack complex) [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life — maintenance every 8 weeks in most patients [FDA]."],
  ind: { adult: ["PNH, atypical HUS, generalised myasthenia gravis (AChR+), NMOSD (AQP4+), IgA nephropathy [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["PNH and aHUS from 1 month [FDA]."] },
  adult: [["Loading (IV, 40 kg+)", "40 to under 60 kg: 2,400 mg; 60 to under 100 kg: 2,700 mg; 100 kg+: 3,000 mg [FDA]."], ["Maintenance (every 8 weeks, from 2 weeks after loading)", "40 to under 60 kg: 3,000 mg; 60 to under 100 kg: 3,300 mg; 100 kg+: 3,600 mg [FDA]."], ["Vaccines", "Meningococcal vaccines (ACWY and B) at least 2 weeks before, or antibiotics until 2 weeks after vaccination [FDA]."], ["Infusion", "Dilute; give through a 0.2–0.22 micron filter [FDA]."]],
  paed: { tiers: ["PNH/aHUS 5 to under 10 kg: load 600 mg, then 300 mg every 4 weeks [FDA].", "10 to under 20 kg: 600 mg, then 600 mg every 4 weeks [FDA].", "20 to under 30 kg: 900 mg, then 2,100 mg every 8 weeks [FDA].", "30 to under 40 kg: 1,200 mg, then 2,700 mg every 8 weeks [FDA]."], transition: "Adult bands from 40 kg.", calcNote: "Weight-band doses (adult bands calculated)." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Supplemental doses after plasma exchange or IVIG [FDA] [UNVERIFIED-KNOWLEDGE]. REMS for meningococcal risk [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Unresolved Neisseria meningitidis infection [FDA]", "Not vaccinated against N. meningitidis unless treatment delay is riskier [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Upper respiratory infection, headache, diarrhoea, nausea, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Life-threatening meningococcal infections [FDA]", "Other encapsulated-bacteria infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Haemolysis or TMA after stopping (PNH, aHUS) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Signs of meningococcal infection; LDH, haemoglobin (PNH); platelets, creatinine (aHUS) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("ravulizumab", "load40", "Loading, 40 to under 60 kg — 2,400 mg IV", "IV", pop(null, null, 40, 60), "fixed", 2400, null, { formulations: [{ form: "vial", strength: 100, unit: "mg/mL" }], rounding: "per vial", flags: ["Maintenance 3,000 mg every 8 weeks from 2 weeks later", "Meningococcal vaccination first"] }),
    C("ravulizumab", "load60", "Loading, 60 to under 100 kg — 2,700 mg IV", "IV", pop(null, null, 60, 100), "fixed", 2700, null, { formulations: [{ form: "vial", strength: 100, unit: "mg/mL" }], rounding: "per vial", flags: ["Maintenance 3,300 mg every 8 weeks from 2 weeks later"] }),
    C("ravulizumab", "load100", "Loading, 100 kg+ — 3,000 mg IV", "IV", pop(null, null, 100, null), "fixed", 3000, null, { formulations: [{ form: "vial", strength: 100, unit: "mg/mL" }], rounding: "per vial", flags: ["Maintenance 3,600 mg every 8 weeks from 2 weeks later"] })
  ],
  sources: [["FDA", "Ultomiris (ravulizumab-cwvz) — FDA label (DailyMed)", R2_DM("a9a590d9-0217-43c7-908d-e62a71279791")], NEML_SRC],
  dose: { tagline: "Long-acting C5 inhibitor — weight-band loading, then every 8 weeks; meningococcal vaccination first.",
    boxedTitle: "Serious meningococcal infections",
    boxed: "ULTOMIRIS, a complement inhibitor, increases the risk of serious infections caused by Neisseria meningitidis. Life-threatening and fatal meningococcal infections have occurred in patients treated with complement inhibitors. These infections may become rapidly life-threatening or fatal if not recognized and treated early. Complete or update vaccination for meningococcal bacteria (for serogroups A, C, W, Y, and B) at least 2 weeks prior to the first dose of ULTOMIRIS, unless the risks of delaying therapy with ULTOMIRIS outweigh the risk of developing a serious infection. Comply with the most current Advisory Committee on Immunization Practices (ACIP) recommendations for vaccinations against meningococcal bacteria in patients receiving a complement inhibitor. See Warnings and Precautions for additional guidance on the management of the risk of serious infections caused by meningococcal bacteria. Patients receiving ULTOMIRIS are at increased risk for invasive disease caused by Neisseria meningitidis, even if they develop antibodies following vaccination. Monitor patients for early signs and symptoms of serious meningococcal infections and evaluate immediately if infection is suspected. Because of the risk of serious meningococcal infections, ULTOMIRIS is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called ULTOMIRIS and SOLIRIS REMS [FDA].",
    adult: [{ ind: "PNH / aHUS / gMG / NMOSD", text: "Load 2,400–3,000 mg by weight; maintenance 3,000–3,600 mg every 8 weeks.", calc: ["load40", "load60", "load100"] }],
    child: [{ ind: "PNH / aHUS, 5–39 kg", text: "Weight bands: load 600–1,200 mg; maintenance 300–2,700 mg every 4–8 weeks." }] }
});

FDB_M("raxibacumab", {
  inn: "Raxibacumab", atc: "J06BC02", cls: "Anti-anthrax protective antigen monoclonal antibody",
  linked: [],
  forms: ["Injection 1,700 mg/34 mL (50 mg/mL) vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Neutralises B. anthracis protective antigen [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Inhalational anthrax with antibiotics; prophylaxis when alternatives are not available [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Adults", "40 mg/kg IV once over 2 hours 15 minutes after diphenhydramine [FDA]."], ["Dilution", "In 0.9% saline [FDA]."]],
  paed: { tiers: ["Over 40 kg: 40 mg/kg [FDA].", "Over 10 kg to 40 kg: 60 mg/kg [FDA].", "10 kg or less: 80 mg/kg [FDA]."], transition: "40 mg/kg over 40 kg.", calcNote: "mg/kg by weight band, single dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Efficacy from animal studies only [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Rash, extremity pain, itch, somnolence [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("raxibacumab", "w10", "Anthrax, 10 kg or less — 80 mg/kg IV once", "IV", pop(null, null, null, 10.0001), "mg_per_kg", 80, null, { formulations: [{ form: "vial", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Diphenhydramine first", "Over 2 h 15 min"] }),
    C("raxibacumab", "w40", "Anthrax, over 10 to 40 kg — 60 mg/kg IV once", "IV", pop(null, null, 10.0001, 40.0001), "mg_per_kg", 60, null, { formulations: [{ form: "vial", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Diphenhydramine first"] }),
    C("raxibacumab", "w41", "Anthrax, over 40 kg — 40 mg/kg IV once", "IV", pop(null, null, 40.0001, null), "mg_per_kg", 40, null, { formulations: [{ form: "vial", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Diphenhydramine first"] })
  ],
  sources: [["FDA", "Raxibacumab injection — FDA label (DailyMed)", R2_DM("f6927e91-bb46-47b3-ab66-f9d8a9d7b12a")], NEML_SRC],
  dose: { tagline: "Anthrax antitoxin antibody — single IV dose 40–80 mg/kg by weight, with antibiotics.",
    boxedTitle: "Hypersensitivity reactions, including anaphylaxis",
    boxed: "Hypersensitivity reactions, including anaphylaxis, have been reported during or after the administration of raxibacumab by intravenous infusion. Administer raxibacumab by intravenous infusion in monitored settings where appropriate equipment, medication (including epinephrine) and personnel trained in the management of hypersensitivity, anaphylaxis, and shock are available [FDA].",
    adult: [{ ind: "Inhalational anthrax", text: "40 mg/kg IV once.", calc: ["w41"] }],
    child: [{ ind: "By weight", text: "≤10 kg 80 mg/kg; >10–40 kg 60 mg/kg; >40 kg 40 mg/kg.", calc: ["w10", "w40", "w41"] }] }
});

FDB_M("regadenoson", {
  inn: "Regadenoson", atc: "C01EB21", cls: "Selective adenosine A2A agonist (pharmacological stress agent)",
  linked: [],
  forms: ["Prefilled syringe 0.4 mg/5 mL [FDA]."],
  moa: "Coronary vasodilator for myocardial perfusion imaging [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Pharmacological stress for radionuclide myocardial perfusion imaging when exercise is not possible [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Stress imaging", "0.4 mg (5 mL) rapid IV injection within 10 seconds, then 5 mL saline flush, then radionuclide 10–20 seconds later [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Before the test", "No caffeine, theophylline or aminophylline for at least 12 hours [FDA]."], ["Reversal", "Aminophylline 50–250 mg slow IV for severe reactions [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Seizure risk — avoid aminophylline for seizure reversal if possible [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Aminophylline; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Second- or third-degree AV block or sinus node dysfunction without a working pacemaker [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Dyspnoea, headache, flushing, chest discomfort, dizziness, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myocardial ischaemia and infarction, arrhythmias, cardiac arrest [FDA] [UNVERIFIED-KNOWLEDGE]", "AV block [FDA] [UNVERIFIED-KNOWLEDGE]", "Bronchoconstriction [FDA] [UNVERIFIED-KNOWLEDGE]", "Seizures, stroke, hypotension/hypertension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG and blood pressure during and after, with resuscitation equipment present [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("regadenoson", "std", "Stress imaging — 0.4 mg IV over 10 seconds", "IV", ADULT, "fixed", 0.4, null, { formulations: [{ form: "prefilled syringe", strength: 0.08, unit: "mg/mL" }], rounding: "5 mL", flags: ["No caffeine for 12 hours before", "Resuscitation equipment ready"] })],
  sources: [["FDA", "Lexiscan (regadenoson) — FDA label (DailyMed)", R2_DM("99640071-4db2-9317-e053-2995a90a610d")], NEML_SRC],
  dose: { tagline: "Adenosine A2A agonist for stress perfusion imaging — 0.4 mg IV bolus.",
    adult: [{ ind: "Myocardial perfusion imaging", text: "0.4 mg IV within 10 seconds, then flush and tracer.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("regorafenib", {
  inn: "Regorafenib", atc: "L01EX05", cls: "Multi-kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 40 mg [FDA]."],
  moa: "Inhibits angiogenic, stromal and oncogenic kinases [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take after a low-fat meal [FDA]."],
  ind: { adult: ["Metastatic colorectal cancer after standard therapy [FDA].", "GIST after imatinib and sunitinib [FDA].", "HCC after sorafenib [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "160 mg (four 40 mg tablets) once daily for the first 21 days of each 28-day cycle, after a low-fat meal (under 600 kcal, under 30% fat) [FDA]."], ["Dose-escalation alternative", "80 mg first week, 120 mg second week, then 160 mg (ReDOS) [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: "Severe: not recommended; monitor closely in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A4 inducers/inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hand–foot skin reaction, fatigue, diarrhoea, hypertension, anorexia, mucositis, dysphonia, infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe and fatal hepatotoxicity [FDA]", "Haemorrhage, GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertensive crisis, cardiac ischaemia, RPLS [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests every 2 weeks for 2 months, then monthly; blood pressure weekly for 6 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("regorafenib", "std", "Colorectal / GIST / HCC — 160 mg daily, days 1–21 of 28", "PO", ADULT, "fixed", 160, 24, { formulations: [{ form: "tablet", strength: 40, unit: "mg", whole: true }], rounding: "4 tablets", flags: ["After a low-fat meal", "Liver tests every 2 weeks at first"] })],
  sources: [["FDA", "Stivarga (regorafenib) — FDA label (DailyMed)", R2_DM("824f19c9-0546-4a8a-8d8f-c4055c04f7c7")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Multi-kinase inhibitor for refractory colorectal cancer, GIST and HCC — 160 mg daily 3 weeks on, 1 off.",
    boxedTitle: "Hepatotoxicity",
    boxed: "• Severe and sometimes fatal hepatotoxicity has occurred in clinical trials. • Monitor hepatic function prior to and during treatment. • Interrupt and then reduce or discontinue STIVARGA for hepatotoxicity as manifested by elevated liver function tests or hepatocellular necrosis, depending upon severity and persistence [FDA].",
    adult: [{ ind: "mCRC / GIST / HCC", text: "160 mg daily for 21 of 28 days.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("relugolix", {
  inn: "Relugolix", atc: "L02BX04", cls: "Oral GnRH receptor antagonist",
  linked: [],
  forms: ["Tablets 120 mg (Orgovyx); combination with estradiol/norethindrone (Myfembree) for fibroids/endometriosis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks pituitary GnRH receptors, rapidly lowering testosterone [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Advanced prostate cancer [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Prostate cancer", "360 mg loading dose on day 1, then 120 mg once daily at about the same time [FDA]."], ["Missed dose", "Take within 12 hours; if more than 7 days missed, reload with 360 mg [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Avoid P-gp inhibitors (or separate by 6 hours) and combined P-gp/CYP3A inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hot flushes, musculoskeletal pain, fatigue, constipation, diarrhoea, raised glucose and lipids [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Bone loss with long androgen deprivation [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["PSA; ECG in at-risk patients; glucose and lipids [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("relugolix", "load", "Prostate cancer — 360 mg on day 1", "PO", ADULT, "fixed", 360, null, { formulations: [{ form: "tablet", strength: 120, unit: "mg", whole: true }], rounding: "3 tablets", flags: ["Then 120 mg daily"] }),
    C("relugolix", "maint", "Prostate cancer — 120 mg once daily", "PO", ADULT, "fixed", 120, 24, { formulations: [{ form: "tablet", strength: 120, unit: "mg", whole: true }], rounding: "1 tablet" })
  ],
  sources: [["FDA", "Orgovyx (relugolix) — FDA label (DailyMed)", R2_DM("077a92f6-9f1b-479a-87c7-c92b5db6aa9c")], NEML_SRC],
  dose: { tagline: "Oral GnRH antagonist for advanced prostate cancer — 360 mg load, then 120 mg daily.",
    adult: [{ ind: "Advanced prostate cancer", text: "360 mg on day 1, then 120 mg daily.", calc: ["load", "maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("remdesivir", {
  inn: "Remdesivir", atc: "J05AB16", cls: "Nucleotide analogue RNA polymerase inhibitor (SARS-CoV-2)",
  linked: [],
  forms: ["Powder for injection 100 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits SARS-CoV-2 RNA-dependent RNA polymerase [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["COVID-19 in hospitalised patients, or non-hospitalised high-risk patients with mild–moderate disease [FDA]."], paed: ["From birth, 1.5 kg and over [FDA]."] },
  adult: [["Adults and children 40 kg+", "200 mg IV on day 1, then 100 mg IV once daily from day 2 [FDA]."], ["Duration", "Hospitalised on ventilation/ECMO: 10 days; hospitalised not ventilated: 5 days (up to 10); outpatients: 3 days [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Before starting", "Liver tests and prothrombin time [FDA]."]],
  paed: { tiers: ["28 days+ and 3 to under 40 kg: 5 mg/kg on day 1, then 2.5 mg/kg once daily [FDA].", "Neonates and infants 1.5 to under 3 kg: 2.5 mg/kg on day 1, then 1.25 mg/kg once daily (label table) [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Fixed dose from 40 kg.", calcNote: "mg/kg under 40 kg; fixed from 40 kg." },
  adj: { renal: "No adjustment needed, including dialysis (current label) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Stop if ALT over 10 × ULN or with signs of liver inflammation [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Not with chloroquine or hydroxychloroquine (antagonism) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Clinically significant hypersensitivity to remdesivir [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, raised transaminases, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion-related and anaphylactic reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Transaminase elevations [FDA] [UNVERIFIED-KNOWLEDGE]", "Bradycardia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests and PT; infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("remdesivir", "load40", "COVID-19, 40 kg+ — 200 mg IV on day 1", "IV", pop(null, null, 40, null), "fixed", 200, null, { formulations: [{ form: "vial", strength: 100, unit: "mg", whole: true }], rounding: "2 vials", flags: ["Then 100 mg daily"] }),
    C("remdesivir", "maint40", "COVID-19, 40 kg+ — 100 mg IV daily from day 2", "IV", pop(null, null, 40, null), "fixed", 100, 24, { formulations: [{ form: "vial", strength: 100, unit: "mg", whole: true }], rounding: "1 vial", flags: ["Total 3, 5 or 10 days by setting"] }),
    C("remdesivir", "loadch", "COVID-19, 28 days+ and 3 to under 40 kg — 5 mg/kg IV on day 1", "IV", pop(1, null, 3, 40), "mg_per_kg", 5, null, { formulations: [{ form: "reconstituted", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Then 2.5 mg/kg daily"] }),
    C("remdesivir", "maintch", "COVID-19, 28 days+ and 3 to under 40 kg — 2.5 mg/kg IV daily", "IV", pop(1, null, 3, 40), "mg_per_kg", 2.5, 24, { formulations: [{ form: "reconstituted", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL" })
  ],
  sources: [["FDA", "Veklury (remdesivir) — FDA label (DailyMed)", R2_DM("c0978fa8-53ff-4ca2-82a7-567fd3e958ca")], NEML_SRC],
  dose: { tagline: "COVID-19 antiviral — 200 mg IV then 100 mg daily (child 5 then 2.5 mg/kg) for 3–10 days.",
    adult: [{ ind: "COVID-19", text: "200 mg IV day 1, then 100 mg daily.", calc: ["load40", "maint40"] }],
    child: [{ ind: "28 days+, 3–39.9 kg", text: "5 mg/kg day 1, then 2.5 mg/kg daily.", calc: ["loadch", "maintch"] }, { ind: "40 kg+", text: "Adult dose.", calc: ["load40", "maint40"] }] }
});

FDB_M("remibrutinib", {
  inn: "Remibrutinib", atc: "L04AA60", cls: "Bruton's tyrosine kinase (BTK) inhibitor",
  linked: [],
  forms: ["Tablets 25 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Covalent BTK inhibitor blocking mast-cell and basophil activation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Chronic spontaneous urticaria not controlled by H1 antihistamines [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["CSU", "25 mg twice daily with or without food; swallow whole [FDA]."], ["Surgery", "Interrupt 3–7 days before and after [FDA]."], ["Missed dose", "Skip; take the next one at the usual time [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Bleeding risk with antiplatelets/anticoagulants [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Nasopharyngitis, bleeding (petechiae, bruising), headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bleeding [FDA] [UNVERIFIED-KNOWLEDGE]", "Infections [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bleeding; infections [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("remibrutinib", "csu", "Chronic spontaneous urticaria — 25 mg twice daily", "PO", ADULT, "fixed", 25, 12, { formulations: [{ form: "tablet", strength: 25, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Hold 3–7 days around surgery"] })],
  sources: [["FDA", "Rhapsido (remibrutinib) — FDA label (DailyMed)", R2_DM("e5e89bff-6ced-4165-acc5-fb13136b3a3d")], NEML_SRC],
  dose: { tagline: "Oral BTK inhibitor for chronic spontaneous urticaria — 25 mg twice daily.",
    adult: [{ ind: "Chronic spontaneous urticaria", text: "25 mg twice daily.", calc: ["csu"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("remifentanil", {
  inn: "Remifentanil", atc: "N01AH06", cls: "Ultra-short-acting opioid agonist (anaesthetic)",
  risk: "High-alert medication (opioid, IV) [ISMP]",
  linked: [],
  forms: ["Powder for injection 1, 2, 5 mg vials [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Mu-opioid agonist broken down by tissue esterases — offset within minutes regardless of duration [UNVERIFIED-KNOWLEDGE].",
  pk: ["Context-sensitive half-time about 3–4 minutes [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Analgesia during induction and maintenance of general anaesthesia; continuation into the early postoperative period under supervision; monitored anaesthesia care [FDA]."], paed: ["Maintenance of anaesthesia from birth (label doses) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Induction", "0.5–1 microgram/kg/min infusion with a hypnotic; if intubating within 8 minutes, an initial 1 microgram/kg over 30–60 seconds may be given [FDA]."], ["Maintenance", "0.05–2 microgram/kg/min depending on the anaesthetic used (label table) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Administration", "Infusion device only; never as sole induction agent; clear the IV line after stopping [FDA]."], ["Analgesia afterwards", "Plan longer-acting analgesia before stopping — effect ends within minutes [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Per label tables for maintenance of anaesthesia [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult doses.", calcNote: "microgram/kg/min infusion — not calculated here." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Older adults: halve starting doses [FDA]. Obese: dose on ideal body weight [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Apnoea, chest-wall rigidity, bradycardia, hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; ventilate; naloxone; neuromuscular blocker for rigidity [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Epidural or intrathecal use (contains glycine) [FDA]", "Hypersensitivity to fentanyl analogues [FDA]"],
  ae: { common: ["Nausea, vomiting, hypotension, bradycardia, shivering, pruritus [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression and apnoea [FDA]", "Skeletal muscle rigidity [FDA]", "Bradycardia, hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Opioid-induced hyperalgesia / acute tolerance [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Continuous oxygenation, ventilation and haemodynamics by trained anaesthesia staff [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Ultiva (remifentanil) — FDA label (DailyMed)", R2_DM("4dbcb8f9-1987-4b66-bd2f-d251fda0be10")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Ultra-short opioid for anaesthesia — 0.5–1 microgram/kg/min at induction; anaesthetist use only.",
    boxedTitle: "Serious and life-threatening risks",
    boxed: "Addiction, Abuse, and Misuse Because the use of ULTIVA exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient's risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Life-Threatening Respiratory Depression Serious, life-threatening, or fatal respiratory depression may occur with use of ULTIVA, especially during initiation or following a dosage increase. To reduce the risk of respiratory depression, proper dosing and titration of ULTIVA are essential. Risks From Concomitant Use With Benzodiazepines Or Other CNS Depressants Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of ULTIVA and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate [FDA].",
    adult: [{ ind: "General anaesthesia", text: "Induction 0.5–1 microgram/kg/min; maintenance 0.05–2 microgram/kg/min." }],
    child: [{ ind: "General anaesthesia", text: "Per label tables (specialist use)." }] }
});

FDB_M("remimazolam", {
  inn: "Remimazolam", atc: "N05CD14", cls: "Ultra-short-acting benzodiazepine (procedural sedation)",
  risk: "High-alert medication (IV moderate sedation agent) [ISMP]",
  linked: [],
  forms: ["Powder for injection 20 mg vial (2.5 mg/mL after reconstitution) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "GABA-A modulator broken down by tissue esterases — short action [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Induction and maintenance of procedural sedation for procedures of 30 minutes or less [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Initial", "5 mg IV over 1 minute [FDA]."], ["Supplemental", "2.5 mg IV over 15 seconds, at least 2 minutes apart [FDA]."], ["ASA III–IV", "2.5–5 mg over 1 minute; supplemental 1.25–2.5 mg [FDA]."], ["Setting", "Trained staff, continuous monitoring, oxygen, airway equipment; flumazenil available [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Titrated IV — no calculator." },
  adj: { renal: NEP, hepatic: "Severe: titrate carefully [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Opioids increase respiratory depression — use lower doses [FDA]." },
  tox: { human: "Respiratory depression, hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Airway support; flumazenil [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to dextran 40 or remimazolam [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hypotension, hypertension, hypoxia, bradycardia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypoxia and respiratory depression [FDA]", "Risks with concomitant opioids [FDA]", "Abuse, dependence (benzodiazepine class) [FDA]"] },
  monitor: ["Continuous oxygen saturation, ventilation, ECG and blood pressure [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Byfavo (remimazolam) — FDA label (DailyMed)", R2_DM("4e1838f2-b999-41a7-a761-d94f09aa531f")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Short-acting benzodiazepine for procedural sedation — 5 mg IV, then 2.5 mg top-ups.",
    boxedTitle: "Personnel and equipment for monitoring and resuscitation; risks from concomitant use with opioid analgesics",
    boxed: "Personnel and Equipment for Monitoring and Resuscitation Only personnel trained in the administration of procedural sedation, and not involved in the conduct of the diagnostic or therapeutic procedure, should administer BYFAVO. Administering personnel must be trained in the detection and management of airway obstruction, hypoventilation, and apnea, including the maintenance of a patent airway, supportive ventilation, and cardiovascular resuscitation. BYFAVO has been associated with hypoxia, bradycardia, and hypotension. Continuously monitor vital signs during sedation and during the recovery period. Resuscitative drugs, and age- and size-appropriate equipment for bag/valve/mask assisted ventilation must be immediately available during administration of BYFAVO. Risks From Concomitant Use With Opioid Analgesics and Other Sedative-Hypnotics Concomitant use of benzodiazepines, including BYFAVO, and opioid analgesics may result in profound sedation, respiratory depression, coma, and death. The sedative effect of intravenous BYFAVO can be accentuated by concomitantly administered CNS depressant medications, including other benzodiazepines and propofol. Continuously monitor patients for respiratory depression and depth of sedation [FDA].",
    adult: [{ ind: "Procedural sedation", text: "5 mg IV over 1 min; 2.5 mg top-ups ≥2 min apart." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("repaglinide", {
  inn: "Repaglinide", atc: "A10BX02", cls: "Meglitinide (short-acting insulin secretagogue)",
  linked: [],
  forms: ["Tablets 0.5, 1, 2 mg [FDA]."],
  moa: "Closes beta-cell K-ATP channels, causing a quick insulin release [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2C8 and 3A4 — gemfibrozil contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Type 2 diabetes, with diet and exercise [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "0.5 mg before each meal if HbA1c under 8%; 1–2 mg before each meal if 8% or more [FDA]."], ["Titration", "Double up to 4 mg per meal, at least 1 week apart; maximum 16 mg/day [FDA]."], ["Skipped meal", "Skip that dose [FDA]."], ["Severe kidney impairment (CrCl 20–40)", "Start 0.5 mg before meals [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "CrCl 20–40: start 0.5 mg before meals [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Use longer intervals between adjustments [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Not with gemfibrozil or NPH insulin [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Oral or IV glucose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["With gemfibrozil [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Hypoglycaemia, upper respiratory infection, headache, sinusitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypoglycaemia [FDA]"] },
  monitor: ["Glucose; HbA1c [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("repaglinide", "start", "Type 2 diabetes — 0.5–2 mg before each meal", "PO", ADULT, "fixed", 0.5, 8, { dose: { value: 0.5, value_max: 2, unit: "mg", per: "dose" }, caps: { max_daily: 16, unit: "mg" }, formulations: [{ form: "tablet", strength: 0.5, unit: "mg", whole: true }], rounding: "whole tablets", flags: ["0.5 mg if HbA1c under 8%; 1–2 mg if 8% or more", "Skip the dose if the meal is skipped; max 4 mg per meal"] })],
  sources: [["FDA", "Repaglinide tablets — FDA label (DailyMed)", R2_DM("6ae28683-28cc-408e-90f9-6a3dddfc668d")], NEML_SRC],
  dose: { tagline: "Mealtime insulin secretagogue — 0.5–2 mg before each meal; max 16 mg/day.",
    adult: [{ ind: "Type 2 diabetes", text: "0.5 mg (HbA1c under 8%) or 1–2 mg before meals; max 4 mg per meal.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("repotrectinib", {
  inn: "Repotrectinib", atc: "L01EX28", cls: "ROS1 / TRK kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 40 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits ROS1 and TRK fusion kinases, including resistance mutations [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["ROS1-positive NSCLC [FDA].", "NTRK fusion-positive solid tumours [FDA]."], paed: ["NTRK fusion solid tumours from 12 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "160 mg once daily for 14 days, then 160 mg twice daily, with or without food [FDA]."]],
  paed: { tiers: ["NTRK, 12 years+: same dose [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong/moderate CYP3A inhibitors and inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dizziness, dysgeusia, peripheral neuropathy, constipation, dyspnoea, ataxia, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["CNS effects (dizziness, ataxia, cognitive) [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity, myalgia with CK rise, hyperuricaemia, fractures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, CK, uric acid; neurological symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("repotrectinib", "std", "ROS1 / NTRK cancers — 160 mg once daily × 14 days, then twice daily", "PO", pop(144, null, null, null), "fixed", 160, 24, { formulations: [{ form: "capsule", strength: 40, unit: "mg", whole: true }], rounding: "4 capsules", flags: ["After 14 days: 160 mg twice daily"] })],
  sources: [["FDA", "Augtyro (repotrectinib) — FDA label (DailyMed)", R2_DM("fb526827-40ba-4462-94cf-179ae3b0cb8a")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "ROS1/NTRK inhibitor — 160 mg daily for 2 weeks, then 160 mg twice daily.",
    adult: [{ ind: "ROS1 NSCLC / NTRK tumours", text: "160 mg daily × 14 days, then twice daily.", calc: ["std"] }],
    child: [{ ind: "NTRK, 12 years+", text: "Same.", calc: ["std"] }] }
});

FDB_M("reslizumab", {
  inn: "Reslizumab", atc: "R03DX08", cls: "Anti-IL-5 monoclonal antibody",
  linked: [],
  forms: ["Injection 100 mg/10 mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds IL-5, reducing eosinophils [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Add-on maintenance for severe eosinophilic asthma [FDA]."], paed: ["Not indicated under 18 years [FDA]."] },
  adult: [["Severe eosinophilic asthma", "3 mg/kg IV over 20–50 minutes every 4 weeks; never IV push [FDA]."], ["Setting", "By a health professional prepared to manage anaphylaxis [FDA]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Adults.", calcNote: "mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Treat helminth infections first [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Oropharyngeal pain, raised CK [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Malignancy (imbalance in trials) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Observe after infusion [FDA]."],
  local: notBT,
  calc: [C("reslizumab", "std", "Severe eosinophilic asthma — 3 mg/kg IV every 4 weeks", "IV", ADULT, "mg_per_kg", 3, 672, { formulations: [{ form: "vial", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Over 20–50 minutes; watch for anaphylaxis"] })],
  sources: [["FDA", "Cinqair (reslizumab) — FDA label (DailyMed)", R2_DM("053b9158-2a5b-48b9-bf47-5fa78a35ec33")], NEML_SRC],
  dose: { tagline: "Anti-IL-5 antibody for severe eosinophilic asthma — 3 mg/kg IV every 4 weeks.",
    boxedTitle: "Anaphylaxis",
    boxed: "Anaphylaxis has been observed with CINQAIR infusion in 0.3% of patients in placebo-controlled clinical studies. Anaphylaxis was reported as early as the second dose of CINQAIR. Anaphylaxis can be life-threatening. Patients should be observed for an appropriate period of time after CINQAIR administration by a healthcare professional prepared to manage anaphylaxis. Discontinue CINQAIR immediately if the patient experiences signs or symptoms of anaphylaxis [FDA].",
    adult: [{ ind: "Severe eosinophilic asthma", text: "3 mg/kg IV every 4 weeks.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("resmetirom", {
  inn: "Resmetirom", atc: "A05BA11", cls: "Thyroid hormone receptor-beta agonist",
  linked: [],
  forms: ["Tablets 60, 80, 100 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Liver-directed THR-beta agonist, reducing hepatic fat [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2C8 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Non-cirrhotic MASH (NASH) with moderate–advanced fibrosis (F2–F3), with diet and exercise [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Under 100 kg", "80 mg once daily [FDA]."], ["100 kg and over", "100 mg once daily [FDA]."], ["With moderate CYP2C8 inhibitors (e.g. clopidogrel)", "Reduce per label [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Weight band." },
  adj: { renal: NEP, hepatic: "Avoid in decompensated cirrhosis [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Statins: limit doses (e.g. rosuvastatin, simvastatin 20 mg) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Diarrhoea, nausea, pruritus, abdominal pain, vomiting, constipation, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Gallbladder disease [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests; signs of decompensation [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("resmetirom", "lt100", "MASH, under 100 kg — 80 mg once daily", "PO", pop(216, null, null, 100), "fixed", 80, 24, { formulations: [{ form: "tablet", strength: 80, unit: "mg", whole: true }], rounding: "1 tablet" }),
    C("resmetirom", "ge100", "MASH, 100 kg+ — 100 mg once daily", "PO", pop(216, null, 100, null), "fixed", 100, 24, { formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "1 tablet" })
  ],
  sources: [["FDA", "Rezdiffra (resmetirom) — FDA label (DailyMed)", R2_DM("e67ea09f-a840-439c-86c8-f98585f978b2")], NEML_SRC],
  dose: { tagline: "THR-beta agonist for non-cirrhotic MASH with fibrosis — 80 mg (100 mg from 100 kg) daily.",
    adult: [{ ind: "MASH F2–F3", text: "80 mg daily (under 100 kg) or 100 mg (100 kg+).", calc: ["lt100", "ge100"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("retifanlimab", {
  inn: "Retifanlimab", atc: "L01FF10", cls: "PD-1 blocking monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Injection 500 mg/20 mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks PD-1 [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Metastatic or recurrent Merkel cell carcinoma [FDA].", "Squamous cell carcinoma of the anal canal (with carboplatin and paclitaxel, or alone) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Merkel cell carcinoma", "500 mg IV every 4 weeks over 30 minutes [FDA]."], ["Anal SCC", "500 mg every 4 weeks or 375 mg every 3 weeks [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Immune-mediated reactions in any organ [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Fatigue, musculoskeletal pain, pruritus, diarrhoea, rash, fever, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Immune-mediated pneumonitis, colitis, hepatitis, endocrinopathies, nephritis, skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver, kidney, thyroid tests; glucose [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("retifanlimab", "q4w", "Merkel cell / anal SCC — 500 mg IV every 4 weeks", "IV", ADULT, "fixed", 500, 672, { formulations: [{ form: "vial", strength: 25, unit: "mg/mL" }], rounding: "20 mL", flags: ["Anal SCC alternative: 375 mg every 3 weeks"] })],
  sources: [["FDA", "Zynyz (retifanlimab-dlwr) — FDA label (DailyMed)", R2_DM("109648d0-d30a-42fc-8273-39cb1540a751")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "PD-1 inhibitor for Merkel cell and anal SCC — 500 mg every 4 weeks.",
    cautionTitle: "Use with care",
    caution: "Immune-mediated reactions can affect any organ, even after stopping. Check liver, kidney and thyroid tests [FDA].",
    adult: [{ ind: "Merkel cell / anal SCC", text: "500 mg IV every 4 weeks (anal SCC: or 375 mg every 3 weeks).", calc: ["q4w"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("revefenacin", {
  inn: "Revefenacin", atc: "R03BB08", cls: "Long-acting muscarinic antagonist (LAMA), nebulised",
  linked: [],
  forms: ["Inhalation solution 175 microgram/3 mL unit-dose vial [FDA]."],
  moa: "Long-acting antimuscarinic bronchodilator [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Maintenance treatment of COPD [FDA]."], paed: ["Not indicated [FDA]."] },
  adult: [["COPD", "175 microgram (one vial) once daily by standard jet nebuliser with a mouthpiece [FDA]."], ["Not for", "Acute bronchospasm or asthma [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Adults.", calcNote: "Fixed nebulised dose." },
  adj: { renal: NEP, hepatic: "Not recommended in hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid OATP1B inhibitors (e.g. rifampicin, ciclosporin) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Cough, nasopharyngitis, upper respiratory infection, headache, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Paradoxical bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]", "Worsening narrow-angle glaucoma, urinary retention [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Yupelri (revefenacin) — FDA label (DailyMed)", R2_DM("6dfebf04-7c90-436a-9b16-750d3c1ee0a6")], NEML_SRC],
  dose: { tagline: "Nebulised once-daily LAMA for COPD — 175 microgram.",
    adult: [{ ind: "COPD maintenance", text: "175 microgram nebulised once daily." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("revumenib", {
  inn: "Revumenib", atc: "L01XX87", cls: "Menin inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 25, 110, 160 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks the menin–KMT2A interaction [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — dose depends on strong CYP3A4 inhibitor use (e.g. azoles) [FDA]."],
  ind: { adult: ["Relapsed/refractory acute leukaemia with KMT2A translocation [FDA].", "Relapsed/refractory NPM1-mutated AML [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["1 year and over [FDA]."] },
  adult: [["40 kg and over", "270 mg twice daily (160 mg twice daily with a strong CYP3A4 inhibitor), fasting or with a low-fat meal [FDA]."], ["Before starting", "WBC under 25 × 10⁹/L; ECG; potassium and magnesium [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Duration", "At least 6 months to allow response [FDA]."]],
  paed: { tiers: ["Under 40 kg: 160 mg/m² twice daily (95 mg/m² with a strong CYP3A4 inhibitor), rounded per the BSA tablet table [FDA]."], transition: "Fixed dose from 40 kg.", calcNote: "Fixed dose 40 kg+; BSA table under 40 kg (not calculated)." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "QT prolongation — avoid other QT drugs where possible [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Haemorrhage, nausea, musculoskeletal pain, infection, febrile neutropenia, QT prolongation, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Differentiation syndrome [FDA]", "QTc prolongation and torsades [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG at baseline and regularly; electrolytes; signs of differentiation syndrome [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("revumenib", "ge40", "Acute leukaemia, 40 kg+ — 270 mg twice daily", "PO", pop(12, null, 40, null), "fixed", 270, 12, { rounding: "combine tablet strengths", flags: ["With a strong CYP3A4 inhibitor: 160 mg twice daily", "Watch for differentiation syndrome"] }),
    C("revumenib", "ge40inh", "Acute leukaemia, 40 kg+ with strong CYP3A4 inhibitor — 160 mg twice daily", "PO", pop(12, null, 40, null), "fixed", 160, 12, { formulations: [{ form: "tablet", strength: 160, unit: "mg", whole: true }], rounding: "1 tablet" })
  ],
  sources: [["FDA", "Revuforj (revumenib) — FDA label (DailyMed)", R2_DM("6eb3cdbc-0e74-477d-82d6-3bb172d3f63f")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Menin inhibitor for KMT2A/NPM1 leukaemia — 270 mg twice daily (160 mg with azoles); differentiation syndrome risk.",
    boxedTitle: "Differentiation syndrome, QTc prolongation and torsades de pointes",
    boxed: "Differentiation syndrome, which can be fatal, has occurred with REVUFORJ. Signs and symptoms may include fever, dyspnea, hypoxia, pulmonary infiltrates, pleural or pericardial effusions, rapid weight gain or peripheral edema, hypotension, and renal dysfunction. If differentiation syndrome is suspected, immediately initiate corticosteroid therapy and hemodynamic monitoring until symptom resolution.. QTc prolongation and Torsades de Pointes have occurred in patients receiving REVUFORJ. Correct hypokalemia and hypomagnesemia prior to and during treatment. Do not initiate REVUFORJ in patients with QTcF > 450 msec. If QTc interval prolongation occurs, interrupt, reduce, or permanently discontinue REVUFORJ [FDA].",
    adult: [{ ind: "KMT2A / NPM1 acute leukaemia", text: "270 mg twice daily (160 mg with strong CYP3A4 inhibitor).", calc: ["ge40", "ge40inh"] }],
    child: [{ ind: "Under 40 kg", text: "160 mg/m² twice daily (95 mg/m² with inhibitor) per BSA table." }] }
});

FDB_M("ribavirin", {
  inn: "Ribavirin", atc: "J05AP01", cls: "Guanosine analogue antiviral",
  linked: [],
  forms: ["Capsules 200 mg and tablets (oral) [FDA].", "Inhalation solution 6 g vial for aerosol via SPAG-2 (Virazole) [FDA]."],
  moa: "Nucleoside analogue interfering with viral RNA synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long terminal half-life; accumulates in red cells [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Oral: chronic hepatitis C with interferon (largely replaced by DAA regimens; still used in some DAA combinations) [FDA] [UNVERIFIED-KNOWLEDGE].", "Viral haemorrhagic fevers such as Lassa fever (WHO/off-label) [UNVERIFIED-KNOWLEDGE]."], paed: ["Inhaled: severe RSV lower respiratory infection in hospitalised infants [FDA].", "Oral: chronic hepatitis C from 3 years (with peginterferon) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Oral (with peginterferon)", "800–1,400 mg/day in two doses with food, by weight (label table) [FDA]."], ["Kidney", "CrCl under 50: reduce per label; not recommended in some products [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Inhaled (RSV, infants)", "20 mg/mL solution by SPAG-2 continuously 12–18 hours a day for 3–7 days [FDA]."], ["Health workers", "Pregnant staff should avoid exposure to aerosol [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Inhaled RSV: SPAG-2 aerosol 12–18 h/day for 3–7 days [FDA].", "Oral hepatitis C: weight-based (about 15 mg/kg/day) [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult tables.", calcNote: "Weight tables and aerosol — no calculator." },
  adj: { renal: "Reduce or avoid at CrCl under 50 (oral) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Contraindicated in pregnancy and in male partners of pregnant women; contraception for 6 months after [FDA].", other: "Haemolytic anaemia can worsen heart disease [FDA]." },
  tox: { human: "Haemolytic anaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy and male partners of pregnant women [FDA]", "Haemoglobinopathies [FDA] [UNVERIFIED-KNOWLEDGE]", "With didanosine [FDA] [UNVERIFIED-KNOWLEDGE]", "Autoimmune hepatitis (with interferon) [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Haemolytic anaemia, fatigue, headache, nausea, insomnia, rash, cough [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Haemolytic anaemia [FDA]", "Teratogenicity [FDA]", "Inhaled: sudden respiratory deterioration; equipment precipitation in ventilated infants [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Haemoglobin at weeks 2 and 4 and periodically; pregnancy tests monthly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Ribavirin capsules — FDA label (DailyMed)", R2_DM("35f99f76-f2ef-4a81-91ff-285419664be3")], ["FDA", "Ribavirin for inhalation solution (Virazole) — FDA label (DailyMed)", R2_DM("d74aa4f3-0b7d-480d-b5bf-41ddf808b260")], NEML_SRC],
  dose: { tagline: "Antiviral — oral for hepatitis C (weight tables); aerosol for severe infant RSV; teratogenic.",
    boxedTitle: "Risk of serious disorders and ribavirin-associated effects",
    boxed: "Significant teratogenic and embryocidal effects have been demonstrated in all animal species exposed to ribavirin. In addition, ribavirin has a multiple-dose half-life of 12 days and may persist in non-plasma compartments for as long as 6 months. Therefore, ribavirin therapy is contraindicated in women who are pregnant and in the male partners of women who are pregnant. Avoid pregnancy and use effective contraception during therapy and for 9 months after completion of treatment in female patients and for 6 months in female partners of male patients who are taking ribavirin therapy.. Hemolytic anemia has been reported with ribavirin therapy. The anemia associated with ribavirin therapy may result in worsening of cardiac disease that has led to fatal and nonfatal myocardial infarctions. Patients with a history of significant or unstable cardiac disease should not be treated with ribavirin. Ribavirin monotherapy is not effective for the treatment of chronic hepatitis C virus infection and should not be used alone for this indication [FDA].",
    adult: [{ ind: "Chronic hepatitis C (oral)", text: "800–1,400 mg/day in two doses by weight, with peginterferon or as per DAA regimen." }],
    child: [{ ind: "Severe RSV (infants, inhaled)", text: "SPAG-2 aerosol 12–18 h/day for 3–7 days." }] }
});

FDB_M("ribociclib", {
  inn: "Ribociclib", atc: "L01EF02", cls: "CDK4/6 inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 200 mg [FDA]."],
  moa: "Inhibits cyclin-dependent kinases 4 and 6 [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["HR-positive, HER2-negative breast cancer: early (adjuvant, high risk) and advanced, with an aromatase inhibitor or fulvestrant [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Early breast cancer", "400 mg once daily for 21 days, then 7 days off [FDA]."], ["Advanced breast cancer", "600 mg once daily for 21 days, then 7 days off [FDA]."], ["Before starting", "ECG (QTcF under 450 ms), blood count, liver tests, electrolytes [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: "Severe impairment: lower starting dose per label [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate–severe: 400 mg (advanced) per label [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Not with tamoxifen (QT) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Neutropenia, nausea, infections, fatigue, diarrhoea, leukopenia, alopecia, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatobiliary toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease, severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG at baseline, day 14 of cycle 1 and start of cycle 2; CBC and liver tests every 2 weeks for 2 cycles [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("ribociclib", "early", "Early breast cancer — 400 mg daily, 21 on / 7 off", "PO", ADULT, "fixed", 400, 24, { formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }], rounding: "2 tablets", flags: ["With an aromatase inhibitor"] }),
    C("ribociclib", "adv", "Advanced breast cancer — 600 mg daily, 21 on / 7 off", "PO", ADULT, "fixed", 600, 24, { formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }], rounding: "3 tablets", flags: ["With an aromatase inhibitor or fulvestrant"] })
  ],
  sources: [["FDA", "Kisqali (ribociclib) — FDA label (DailyMed)", R2_DM("aaeaef94-f3f5-4367-8ea2-b181d7be2da8")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "CDK4/6 inhibitor for HR+ breast cancer — 400 mg (early) or 600 mg (advanced) daily, 3 weeks on.",
    cautionTitle: "Use with care",
    caution: "Prolongs QT — check ECG and electrolytes before and during the first cycles; avoid with tamoxifen. Monitor liver tests and blood counts [FDA].",
    adult: [{ ind: "Early HR+ breast cancer", text: "400 mg daily, 21/28 days.", calc: ["early"] }, { ind: "Advanced HR+ breast cancer", text: "600 mg daily, 21/28 days.", calc: ["adv"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("rifabutin", {
  inn: "Rifabutin", atc: "J04AB04", cls: "Rifamycin antimycobacterial",
  linked: [],
  forms: ["Capsules 150 mg [FDA]."],
  moa: "Inhibits bacterial DNA-dependent RNA polymerase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Weaker CYP3A inducer than rifampicin — used with some HIV protease inhibitors [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prevention of disseminated MAC in advanced HIV [FDA].", "TB treatment in place of rifampicin when interactions prevent rifampicin (guideline use) [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["MAC prophylaxis", "300 mg once daily; 150 mg twice daily with food if GI upset [FDA]."], ["Severe kidney impairment (CrCl under 30)", "Consider halving the dose if toxicity is suspected [FDA]."], ["With HIV protease inhibitors", "Usually 150 mg daily (guideline dosing) [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "CrCl under 30: consider 50% reduction if toxicity [FDA].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Colours urine, sweat and tears orange; stains contact lenses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to rifabutin or other rifamycins [FDA]."],
  ae: { common: ["Rash, GI upset, neutropenia, discoloured urine [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Uveitis (especially with clarithromycin or fluconazole) [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia, thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile [FDA] [UNVERIFIED-KNOWLEDGE]", "Rifamycin resistance if TB not excluded [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts; eye symptoms; exclude active TB before MAC prophylaxis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("rifabutin", "mac", "MAC prophylaxis — 300 mg once daily", "PO", ADULT, "fixed", 300, 24, { formulations: [{ form: "capsule", strength: 150, unit: "mg", whole: true }], rounding: "2 capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["Or 150 mg twice daily with food", "Exclude active TB first"] })],
  sources: [["FDA", "Rifabutin capsules — FDA label (DailyMed)", R2_DM("25a60937-cbbe-4a50-994f-2ce15203f589")], NEML_SRC],
  dose: { tagline: "Rifamycin for MAC prophylaxis (and TB when rifampicin interacts) — 300 mg daily.",
    adult: [{ ind: "MAC prophylaxis", text: "300 mg once daily (or 150 mg twice daily).", calc: ["mac"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("rifaximin", {
  inn: "Rifaximin", atc: "A07AA11", cls: "Non-absorbed rifamycin antibacterial",
  linked: [],
  forms: ["Tablets 200, 550 mg [FDA]."],
  moa: "Inhibits bacterial RNA synthesis in the gut; minimal absorption [UNVERIFIED-KNOWLEDGE].",
  pk: ["Less than 0.4% absorbed [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Travellers' diarrhoea from non-invasive E. coli (12 years+) [FDA].", "Reduce recurrence of overt hepatic encephalopathy [FDA].", "IBS with diarrhoea [FDA]."], paed: ["Travellers' diarrhoea, 12 years and over [FDA]."] },
  adult: [["Travellers' diarrhoea", "200 mg three times daily for 3 days [FDA]."], ["Hepatic encephalopathy", "550 mg twice daily (usually with lactulose) [FDA]."], ["IBS-D", "550 mg three times daily for 14 days; up to 2 retreatments [FDA]."], ["Not for", "Diarrhoea with fever or blood in stool [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Travellers' diarrhoea, 12 years+: 200 mg three times daily × 3 days [FDA]."], transition: "Same.", calcNote: "Fixed doses." },
  adj: { renal: NEP, hepatic: "Caution in Child-Pugh C [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "P-gp inhibitors (ciclosporin) raise exposure [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to rifaximin or rifamycins [FDA]."],
  ae: { common: ["Peripheral oedema, nausea, dizziness, fatigue, ascites (HE); headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("rifaximin", "td", "Travellers' diarrhoea, 12 years+ — 200 mg three times daily × 3 days", "PO", pop(144, null, null, null), "fixed", 200, 8, { formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }], rounding: "1 tablet" }),
    C("rifaximin", "he", "Hepatic encephalopathy — 550 mg twice daily", "PO", ADULT, "fixed", 550, 12, { formulations: [{ form: "tablet", strength: 550, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Usually with lactulose"] }),
    C("rifaximin", "ibsd", "IBS-D — 550 mg three times daily × 14 days", "PO", ADULT, "fixed", 550, 8, { formulations: [{ form: "tablet", strength: 550, unit: "mg", whole: true }], rounding: "1 tablet" })
  ],
  sources: [["FDA", "Xifaxan (rifaximin) — FDA label (DailyMed)", R2_DM("7afafa63-3236-4212-9589-045db6b01c0b")], NEML_SRC],
  dose: { tagline: "Gut-selective antibiotic — 550 mg twice daily for hepatic encephalopathy; 200 mg three times daily for travellers' diarrhoea.",
    adult: [{ ind: "Hepatic encephalopathy", text: "550 mg twice daily.", calc: ["he"] }, { ind: "Travellers' diarrhoea", text: "200 mg three times daily × 3 days.", calc: ["td"] }, { ind: "IBS-D", text: "550 mg three times daily × 14 days.", calc: ["ibsd"] }],
    child: [{ ind: "12 years+ (travellers' diarrhoea)", text: "200 mg three times daily × 3 days.", calc: ["td"] }] }
});

FDB_M("rilpivirine", {
  inn: "Rilpivirine", atc: "J05AG05", cls: "Non-nucleoside reverse transcriptase inhibitor (NNRTI)",
  linked: [],
  forms: ["Tablets 25 mg (Edurant); dispersible tablets 2.5 mg (Edurant PED) — not interchangeable [FDA].", "Long-acting injection with cabotegravir (separate product) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds HIV-1 reverse transcriptase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Needs a meal and stomach acid for absorption [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["HIV-1 in treatment-naive patients with viral load 100,000 copies/mL or less, with other antiretrovirals; switching in suppressed patients [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["2 years and over, 14 kg and over [FDA]."] },
  adult: [["25 kg and over", "25 mg once daily with a meal [FDA]."], ["With rifabutin", "50 mg once daily [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Acid reducers", "PPIs contraindicated; H2 blockers 12 hours before or 4 hours after; antacids 2 hours before or 4 hours after [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2 years+, 14 to under 25 kg: Edurant PED by weight, dispersed in water with a meal (label table) [FDA].", "25 kg and over: 25 mg tablet [FDA]."], transition: "25 mg from 25 kg.", calcNote: "Fixed 25 mg from 25 kg." },
  adj: { renal: "Caution in severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No change in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "QT prolongation at high doses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["With carbamazepine, oxcarbazepine, phenobarbital, phenytoin, rifampicin, rifapentine, PPIs, systemic dexamethasone (more than one dose), St John's wort [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Depression, insomnia, headache, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe skin and hypersensitivity reactions (DRESS) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Depressive disorders [FDA] [UNVERIFIED-KNOWLEDGE]", "Immune reconstitution syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Viral load, CD4, liver tests; mood [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("rilpivirine", "std", "HIV, 25 kg+ — 25 mg once daily with a meal", "PO", pop(null, null, 25, null), "fixed", 25, 24, { formulations: [{ form: "tablet", strength: 25, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["With a meal", "No PPIs"] })],
  sources: [["FDA", "Edurant / Edurant PED (rilpivirine) — FDA label (DailyMed)", R2_DM("03880372-2c68-45c6-a53a-f420c49541d6")], NEML_SRC],
  dose: { tagline: "NNRTI for HIV — 25 mg once daily with a meal; no PPIs.",
    adult: [{ ind: "HIV-1", text: "25 mg once daily with a meal.", calc: ["std"] }],
    child: [{ ind: "25 kg and over", text: "25 mg once daily.", calc: ["std"] }, { ind: "14–24.9 kg (2 years+)", text: "Edurant PED by weight (label table)." }] }
});

FDB_M("riluzole", {
  inn: "Riluzole", atc: "N07XX02", cls: "Glutamate release inhibitor",
  linked: [],
  forms: ["Tablets 50 mg; oral suspension 5 mg/mL (Tiglutik); oral film [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Reduces glutamate release and blocks sodium channels [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP1A2 — food reduces absorption [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Amyotrophic lateral sclerosis (ALS) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["ALS", "50 mg twice daily every 12 hours, 1 hour before or 2 hours after a meal; suspension can go via PEG tube [FDA]."], ["Liver tests", "Before and during treatment [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: "Not recommended if baseline transaminases over 5 × ULN; stop if over 5 × ULN during treatment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "CYP1A2 inhibitors (fluvoxamine, ciprofloxacin) raise levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Encephalopathy, coma, methaemoglobinaemia reported [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; methylene blue for methaemoglobinaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Asthenia, nausea, dizziness, decreased lung function, abdominal pain, raised ALT [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatic injury [FDA] [UNVERIFIED-KNOWLEDGE]", "Neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ALT monthly for 3 months, then every 3 months; blood count if fever [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("riluzole", "als", "ALS — 50 mg every 12 hours", "PO", ADULT, "fixed", 50, 12, { formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["1 h before or 2 h after meals", "Monthly liver tests at first"] })],
  sources: [["FDA", "Tiglutik (riluzole) oral suspension — FDA label (DailyMed)", R2_DM("75d68f19-4208-109e-e053-2991aa0ac857")], NEML_SRC],
  dose: { tagline: "Glutamate inhibitor for ALS — 50 mg twice daily on an empty stomach.",
    adult: [{ ind: "ALS", text: "50 mg every 12 hours.", calc: ["als"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("rimantadine", {
  inn: "Rimantadine", atc: "J05AC02", cls: "Adamantane antiviral (influenza A)",
  linked: [],
  forms: ["Tablets 100 mg [FDA]."],
  moa: "Blocks the influenza A M2 ion channel [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism and renal excretion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prophylaxis and treatment of influenza A [FDA].", "Most circulating influenza A strains are now resistant to adamantanes — not recommended by CDC/WHO [UNVERIFIED-KNOWLEDGE]."], paed: ["Prophylaxis of influenza A, 1–16 years [FDA]."] },
  adult: [["Adults (17 years+)", "100 mg twice daily [FDA]."], ["Reduced dose", "100 mg once daily in severe hepatic dysfunction, severe kidney impairment (CrCl 5–29), kidney failure or elderly nursing-home residents [FDA]."], ["Treatment", "Start within 48 hours of symptoms; about 7 days [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["1–9 years: 5 mg/kg once daily, not more than 150 mg [FDA].", "10 years and over: adult dose [FDA]."], transition: "Adult dose from 10 years.", calcNote: "5 mg/kg under 10 years; adult dose from 10." },
  adj: { renal: "CrCl under 30: 100 mg once daily [FDA].", hepatic: "Severe: 100 mg once daily [FDA].", pregnancy: NEP, other: "Check local resistance — oseltamivir is usually preferred [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Agitation, hallucinations, arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to adamantanes [FDA]."],
  ae: { common: ["Insomnia, dizziness, nervousness, nausea, vomiting, anorexia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Seizures in patients with epilepsy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("rimantadine", "adult", "Influenza A, 10 years+ — 100 mg twice daily", "PO", pop(120, null, null, null), "fixed", 100, 12, { formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 100, interval_h: 24 }], flags: ["Check local resistance; oseltamivir usually preferred"] }),
    C("rimantadine", "child", "Influenza A prophylaxis, 1–9 years — 5 mg/kg once daily (max 150 mg)", "PO", pop(12, 120, null, null), "mg_per_kg", 5, 24, { caps: { max_single: 150, unit: "mg" }, formulations: [{ form: "tablet", strength: 100, unit: "mg" }], rounding: "compounded suspension", flags: ["Adamantane resistance common"] })
  ],
  sources: [["FDA", "Rimantadine hydrochloride tablets — FDA label (DailyMed)", R2_DM("49f7d69a-820b-4c75-a31d-b2104c019c12")], NEML_SRC],
  dose: { tagline: "Adamantane for influenza A — 100 mg twice daily; widespread resistance, oseltamivir usually preferred.",
    cautionTitle: "Use with care",
    caution: "Most current influenza A viruses are resistant to adamantanes — check local guidance; oseltamivir is usually preferred. Not active against influenza B [UNVERIFIED-KNOWLEDGE].",
    adult: [{ ind: "Influenza A", text: "100 mg twice daily (100 mg once daily in severe kidney/liver impairment).", calc: ["adult"] }],
    child: [{ ind: "1–9 years (prophylaxis)", text: "5 mg/kg once daily, max 150 mg.", calc: ["child"] }, { ind: "10 years+", text: "Adult dose.", calc: ["adult"] }] }
});

})(); // end R-2 scope

/* Brand names — BATCH R2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"regorafenib":{"IN":[["Regonat","Natco Pharma Ltd","Regonat 40Mg Bottle Of 28 Tablets"],["Adgorif","Adley Formulation","Adgorif 40Mg Bottle Of 28 Tablets"]],"BD":[["Regora","Beacon Pharmaceuticals PLC","40 mg"],["Regocent","Incepta Pharmaceuticals Ltd","40 mg"],["Reganex","Jenphar Bangladesh Ltd","40 mg"]],"src":["https://pharmeasy.in/online-medicine-order/regonat-40mg-tablet-28-s-225679","https://pharmeasy.in/online-medicine-order/adgorif-40-mg-bottle-of-28-tablets-4828089","https://medex.com.bd/brands/25995/regora-40-mg-tablet","https://medex.com.bd/brands/30216/regocent-40-mg-tablet","https://medex.com.bd/brands/32819/reganex-40-mg-tablet"]},"relugolix":{"IN":[["Golixsar","Shilpa Medicare Limited","Golixsar 120Mg Bottle Of 30 Tablets"],["Rexigo","Zydus Lifesciences Limited","Rexigo 120Mg Strip Of 10 Tablets"]],"BD":[["Relupros","Renata PLC","120 mg"],["Rexilo","Incepta Pharmaceuticals Ltd","120 mg"],["Reluciba","Square Pharmaceuticals PLC","120 mg"]],"src":["https://pharmeasy.in/online-medicine-order/golixsar-120-mg-bottle-of-30-tablets-4828099","https://pharmeasy.in/online-medicine-order/rexigo-120mg-bottle-of-10-tablets-4798259","https://medex.com.bd/brands/33084/relupros-120-mg-tablet","https://medex.com.bd/brands/33085/rexilo-120-mg-tablet","https://medex.com.bd/brands/34454/reluciba-120-mg-tablet"]},"remdesivir":{"IN":[],"BD":[["Remivir","Eskayef Pharmaceuticals Ltd","5 mg/ml"],["Bemsivir","Beximco Pharmaceuticals PLC","5 mg/ml"],["Ninavir","Incepta Pharmaceuticals Ltd","5 mg/ml"]],"src":["https://medex.com.bd/brands/28387/remivir-5-mg-iv-infusion","https://medex.com.bd/brands/28402/bemsivir-5-mg-iv-infusion","https://medex.com.bd/brands/28808/ninavir-5-mg-iv-infusion"]},"remifentanil":{"IN":[],"BD":[["Remifen","Incepta Pharmaceuticals Ltd","1 mg/vial"]],"src":["https://medex.com.bd/brands/33808/remifentanil-1-mg-injection"]},"repaglinide":{"IN":[["Reepag","Johnlee Pharmaceuticals Pvt Ltd","Reepag 1Mg Strip Of 10 Tablets"],["Eurepa","Torrent Pharmaceuticals Ltd","Eurepa 0.5Mg Strip Of 15 Tablets"],["Sarapid","Medley Pharmaceuticals Ltd","Sarapid 1Mg Strip Of 10 Tablets"]],"BD":[["Premil","Beximco Pharmaceuticals PLC","1 mg"],["Singlin","Renata PLC","2 mg"],["Repaglid","Alco Pharma Ltd","2 mg"]],"src":["https://pharmeasy.in/online-medicine-order/reepag-1mg-strip-of-10-tablets-3483337","https://pharmeasy.in/online-medicine-order/eurepa-0-5mg-tablet-15-s-230790","https://pharmeasy.in/online-medicine-order/sarapid-1mg-tab-10-s-215200","https://medex.com.bd/brands/5552/premil-1-mg-tablet","https://medex.com.bd/brands/30318/singlin-2-mg-tablet","https://medex.com.bd/brands/27875/repaglid-2-mg-tablet"]},"resmetirom":{"IN":[],"BD":[["Rezliv","Beximco Pharmaceuticals PLC","100 mg"],["Resmirom","Beacon Pharmaceuticals PLC","80 mg"],["Resron","Navana Pharmaceuticals Ltd","60 mg"]],"src":["https://medex.com.bd/brands/40130/rezliv-100-mg-tablet","https://medex.com.bd/brands/39870/resron-60-mg-tablet"]},"revefenacin":{"IN":[["Revesmart","Cipla Limited","Revesmart 175Mcg 3Ml Packet Of 7 Respules"],["Rivafree","Sun Pharma","Rivafree 175Mcg 3Ml Packet Of 7 Inhalation Solution"],["Rydgona","Mankind Pharmaceuticals Ltd","Rydgona 175Mcg 3Ml Packet Of 7 Respules"]],"BD":[["Rebreath","ACME Laboratories Ltd","175 mcg/3 ml"],["Revafir","Incepta Pharmaceuticals Ltd","175 mcg/3 ml"]],"src":["https://pharmeasy.in/online-medicine-order/revesmart-175mcg-3ml-packet-of-7-respules-4803749","https://pharmeasy.in/online-medicine-order/rivafree-175mcg-3ml-packet-of-7-inhalation-solution-4838057","https://pharmeasy.in/online-medicine-order/rydgona-175mcg-3ml-packet-of-7-respules-4812243","https://medex.com.bd/brands/34462/rebreath-175-mcg-nebuliser-solution","https://medex.com.bd/brands/39531/revafir-175-mcg-nebuliser-solution"]},"ribavirin":{"IN":[["Ribahep","Zydus Lifesciences Limited","Ribahep 200Mg Bottle Of 140 Capsules"]],"BD":[["Copeg","Beacon Pharmaceuticals PLC","200 mg"],["Ribacee","Jenphar Bangladesh Ltd","200 mg"],["Chrocee","Advanced Chemical Industries PLC","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/ribahep-200mg-bottle-of-140-capsules-3012632","https://medex.com.bd/brands/9771/copeg-200-mg-capsule","https://medex.com.bd/brands/9772/ribacee-200-mg-capsule","https://medex.com.bd/brands/24222/chrocee-200-mg-capsule"]},"ribociclib":{"IN":[["Kryxana","Novartis India Ltd","Kryxana 200Mg Strip Of 21 Tablets"]],"BD":[["Ribolib","Beacon Pharmaceuticals PLC","200 mg"],["Kisqali","Nevian Lifescience PLC","200 mg"],["Riboxen","Everest Pharmaceuticals Ltd","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/kryxana-200mg-tablet-21-s-230656","https://medex.com.bd/brands/34059/ribolib-200-mg-tablet","https://medex.com.bd/brands/35023/kisqali-200-mg-tablet","https://medex.com.bd/brands/38471/riboxen-200-mg-tablet"]},"rifaximin":{"IN":[["Rifcure","Avighna Medicare Pvt Ltd","Rifcure 550Mg Strip Of 10 Tablets"],["Rexigut","Leeford Healthcare Ltd","Rexigut 550Mg Strip Of 10 Tablets"],["Rifguard","Hetero Healthcare Limited","Rifguard 550Mg Strip Of 15 Tablets"]],"BD":[["Henlix","Advanced Chemical Industries PLC","550 mg"],["Rifamax","Incepta Pharmaceuticals Ltd","20 mg/ml"],["Rifax","Beacon Pharmaceuticals PLC","550 mg"]],"src":["https://pharmeasy.in/online-medicine-order/rifcure-550mg-strip-of-10-tablets-3553905","https://pharmeasy.in/online-medicine-order/rexigut-550mg-strip-of-10-tablets-236409","https://pharmeasy.in/online-medicine-order/rifguard-550mg-strip-of-15-tablets-3681920","https://medex.com.bd/brands/8961/henlix-550-mg-tablet","https://medex.com.bd/brands/39532/rifamax-20-mg-powder-for-suspension","https://medex.com.bd/brands/32752/rifax-550-mg-tablet"]},"riluzole":{"IN":[],"BD":[["Rilutek","Synovia Pharma PLC","50 mg"],["Extals","UniMed UniHealth Pharmaceuticals Ltd","50 mg"]],"src":["https://medex.com.bd/brands/28347/rilutek-50-mg-tablet","https://medex.com.bd/brands/33538/extals-50-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
