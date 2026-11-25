/* Clinical Disease Guide — Drug monograph database, block F, batch 1 (26 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text copied from the label by _work/tools/fdb-boxed-fill.js. */

/* ================= Batch F-1 (fdb-f1.js) ================= */
const F1_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const F1_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const F1_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const F1_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const F1_NEP = "Not established in primary source. [NEP]";
const F1_LD = "Animal LD50: Not established in primary source. [NEP]";
const F1_LOC = { neml: F1_NOT, strengths: "—", stg: F1_NEP };

/* ---------- FACTOR VIII INHIBITOR BYPASSING ACTIVITY (FDA FEIBA BLA101447) ---------- */
FDB_M("factor-viii-inhibitor-bypassing-activity", {
  inn: "Factor VIII inhibitor bypassing activity (FEIBA, aPCC)", atc: "B02BD03", cls: "Activated prothrombin complex concentrate (anti-inhibitor coagulant complex)",
  linked: [],
  forms: ["Powder for injection, labelled units per vial (e.g. 500, 1,000, 2,500 units) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Mixture of activated and non-activated vitamin K-dependent factors that bypasses factor VIII/IX inhibitors [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F1_NEP],
  ind: { adult: ["Haemophilia A and B with inhibitors: control and prevention of bleeding, peri-operative management, routine prophylaxis [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Bleeding (control and prevention)", "50–100 units/kg; frequency and duration by bleed type [FDA]."], ["Peri-operative", "50–100 units/kg by procedure [FDA]."], ["Routine prophylaxis", "85 units/kg every other day [FDA]."], ["Rate", "Not faster than 10 units/kg/minute [FDA]."], ["Daily maximum", "Avoid exceeding 200 units/kg/day [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same units/kg as adults [FDA]."], transition: "—", calcNote: "Units/kg." },
  adj: { renal: F1_NEP, hepatic: F1_NEP, pregnancy: F1_NEP, other: "With emicizumab: thrombotic microangiopathy risk — avoid or limit (see emicizumab) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Thromboembolism, DIC with high doses [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F1_LD, manage: "Stop infusion; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known anaphylactic or severe hypersensitivity to FEIBA or components, including kinin-generating factors [FDA].", "Disseminated intravascular coagulation [FDA].", "Acute thrombosis or embolism including MI [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Anaemia, diarrhoea, haemarthrosis, positive hepatitis B antibody, nausea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thromboembolic events [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Clinical response; signs of thrombosis or DIC [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "factor-viii-inhibitor-bypassing-activity", indication_id: "bleed", label: "Bleeding with inhibitors — 50–100 units/kg", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "units", per: "dose", value_max: 100 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Whole vials", renal: [], flags: ["Not faster than 10 units/kg/min", "Prophylaxis: 85 units/kg every other day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "FEIBA (anti-inhibitor coagulant complex) — FDA label (DailyMed)", F1_DM("752604e5-4ea2-44f4-83ed-1569373f6412")], F1_BT],
  dose: { tagline: "Bypassing agent for haemophilia with inhibitors — thrombosis risk at high doses.",
    boxedTitle: "Embolic and thrombotic events", boxed: "Thromboembolic events have been reported during postmarketing surveillance following infusion of FEIBA, particularly following the administration of high doses and/or in patients with thrombotic risk factors. Monitor patients receiving FEIBA for signs and symptoms of thromboembolic events [FDA].",
    adult: [{ ind: "Bleeding / surgery", text: "50–100 units/kg; prophylaxis 85 units/kg every other day.", calc: ["bleed"] }],
    child: [{ ind: "Bleeding / surgery", text: "Same units/kg.", calc: ["bleed"] }] }
});

/* ---------- FAMCICLOVIR (FDA tablets ANDA077487) ---------- */
FDB_M("famciclovir", {
  inn: "Famciclovir", atc: "J05AB09", cls: "Nucleoside analogue antiviral (prodrug of penciclovir)",
  linked: [],
  forms: ["Tablets 125, 250, 500 mg [FDA].", "Bhutan: not on the NEML (aciclovir is the NEML antiviral) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Penciclovir triphosphate inhibits herpesvirus DNA polymerase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — adjust by CrCl [FDA]."],
  ind: { adult: ["Herpes labialis, genital herpes (recurrent and suppression), herpes zoster in immunocompetent adults; recurrent orolabial/genital herpes in HIV [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Herpes labialis", "1,500 mg single dose [FDA]."], ["Recurrent genital herpes", "1,000 mg twice daily for 1 day [FDA]."], ["Suppression of genital herpes", "250 mg twice daily [FDA]."], ["Herpes zoster", "500 mg every 8 hours for 7 days [FDA]."], ["HIV — recurrent orolabial/genital", "500 mg twice daily for 7 days [FDA]."], ["Zoster, renal", "CrCl 40–59: 500 mg every 12 h; 20–39: 500 mg every 24 h; under 20: 250 mg every 24 h; haemodialysis: 250 mg after each dialysis [FDA]."], ["Labialis, renal", "CrCl 40–59: 750 mg; 20–39: 500 mg; under 20: 250 mg (single dose); HD: 250 mg after dialysis [FDA]."], ["Genital recurrent, renal", "CrCl 40–59: 500 mg every 12 h for 1 day; 20–39: 500 mg single; under 20: 250 mg single [FDA]."], ["Suppression, renal", "CrCl 20–39: 125 mg every 12 h; under 20: 125 mg every 24 h [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Adjust by CrCl (table) [FDA].", hepatic: "No adjustment in compensated hepatic disease [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: F1_NEP, other: "Probenecid raises penciclovir levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Acute renal failure in renal impairment without dose reduction [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F1_LD, manage: "Supportive; haemodialysis removes penciclovir [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to famciclovir, its components, or penciclovir cream [FDA]."],
  ae: { common: ["Headache, nausea, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute renal failure (unadjusted doses in renal impairment) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Renal function in elderly and renal impairment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "famciclovir", indication_id: "zoster", label: "Herpes zoster — 500 mg every 8 h for 7 days", route: "PO", population: F1_ADULT, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 40, crcl_max: 59.999, action: "extend_interval", factor: 12, note: "CrCl 40–59: 500 mg every 12 h" }, { crcl_min: 20, crcl_max: 39.999, action: "extend_interval", factor: 24, note: "CrCl 20–39: 500 mg every 24 h" }, { crcl_min: 0, crcl_max: 19.999, action: "reduce_dose", set_value: 250, interval_h: 24, note: "CrCl under 20: 250 mg every 24 h (HD: 250 mg after each dialysis)" }], flags: ["7 days"], sources: ["FDA"] },
    { drug: "famciclovir", indication_id: "labialis", label: "Herpes labialis — 1,500 mg single dose", route: "PO", population: F1_ADULT, basis: "fixed", dose: { value: 1500, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 40, crcl_max: 59.999, action: "reduce_dose", set_value: 750, note: "CrCl 40–59: 750 mg single dose" }, { crcl_min: 20, crcl_max: 39.999, action: "reduce_dose", set_value: 500, note: "CrCl 20–39: 500 mg single dose" }, { crcl_min: 0, crcl_max: 19.999, action: "reduce_dose", set_value: 250, note: "CrCl under 20: 250 mg single dose" }], flags: ["Single dose at first symptom"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Famciclovir tablets — FDA label (DailyMed)", F1_DM("2c44b8d2-3b70-4e8b-af03-2e917178f761")], F1_BT],
  dose: { tagline: "Oral antiviral for herpes simplex and zoster — dose by CrCl.",
    adult: [{ ind: "Herpes zoster", text: "500 mg every 8 h for 7 days.", calc: ["zoster"] }, { ind: "Herpes labialis", text: "1,500 mg once.", calc: ["labialis"] }, { ind: "Genital herpes", text: "Recurrence 1,000 mg twice daily for 1 day; suppression 250 mg twice daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FAMPRIDINE (US: dalfampridine; FDA AMPYRA NDA022250) ---------- */
FDB_M("fampridine", {
  inn: "Fampridine (dalfampridine)", atc: "N07XX07", cls: "Potassium-channel blocker",
  linked: [],
  forms: ["Extended-release tablets 10 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks potassium channels, improving conduction in demyelinated axons [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — levels rise in renal impairment (seizure risk) [FDA]."],
  ind: { adult: ["Improve walking in adults with multiple sclerosis [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["MS walking", "10 mg twice daily about 12 hours apart; maximum; swallow whole; no extra doses if missed [FDA]."], ["Before starting", "Know CrCl [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "CrCl 51–80: weigh seizure risk; CrCl 50 or less: contraindicated [FDA].", hepatic: F1_NEP, pregnancy: F1_NEP, other: "Do not combine with other 4-aminopyridine products [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Seizures, confusion, tremor, arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F1_LD, manage: "Supportive; benzodiazepines for seizures [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of seizure [FDA].", "Moderate or severe renal impairment (CrCl 50 or less) [FDA]."],
  ae: { common: ["UTI, insomnia, dizziness, headache, nausea, asthenia, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Seizures [FDA]", "Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["CrCl before and at least yearly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "fampridine", indication_id: "ms", label: "MS walking — 10 mg twice daily (12 h apart)", route: "PO", population: F1_ADULT, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 10, max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 50, action: "avoid", note: "CrCl 50 or less: contraindicated [FDA]" }], renal_note: "CrCl 51–80: higher seizure risk — weigh benefit [FDA]", flags: ["Not with a history of seizure", "Swallow whole"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ampyra (dalfampridine) — FDA label (DailyMed)", F1_DM("550eb76a-e4a6-4fa1-ad65-c0fd8b0ce783")], F1_BT],
  dose: { tagline: "Improves walking in MS — seizure risk; not if CrCl 50 or less.",
    adult: [{ ind: "Walking in MS", text: "10 mg twice daily; never more.", calc: ["ms"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FARICIMAB (FDA VABYSMO BLA761235) ---------- */
FDB_M("faricimab", {
  inn: "Faricimab", atc: "S01LA09", cls: "Bispecific anti-VEGF-A / anti-angiopoietin-2 antibody (intravitreal)",
  linked: [],
  forms: ["Intravitreal injection 120 mg/mL (6 mg/0.05 mL) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits VEGF-A and angiopoietin-2 [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F1_NEP],
  ind: { adult: ["Neovascular (wet) AMD [FDA].", "Diabetic macular oedema; macular oedema after retinal vein occlusion [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Wet AMD", "6 mg (0.05 mL) intravitreally every 4 weeks for the first 4 doses, then by OCT and vision at weeks 8 and 12 one of: weeks 28 and 44; weeks 24, 36 and 48; or weeks 20, 28, 36 and 44 [FDA]."], ["DME / RVO", "6 mg per label schedule [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Eye injection — no calculator." },
  adj: { renal: "No influence of renal impairment on PK [FDA].", hepatic: "Unknown [FDA].", pregnancy: F1_NEP, other: "Raised intraocular pressure after injection; endophthalmitis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F1_NEP, animal: F1_LD, manage: F1_NEP },
  contra: ["Ocular or periocular infection [FDA].", "Active intraocular inflammation [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Conjunctival haemorrhage, vitreous floaters, eye pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Endophthalmitis, retinal detachment [FDA] [UNVERIFIED-KNOWLEDGE]", "Retinal vasculitis/occlusion [FDA] [UNVERIFIED-KNOWLEDGE]", "Arterial thromboembolic events [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["IOP and perfusion of the optic nerve head after injection [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC, calc: [],
  sources: [["FDA", "Vabysmo (faricimab-svoa) — FDA label (DailyMed)", F1_DM("04cc9ef7-c02a-4e92-a655-0062674e8487")], F1_BT],
  dose: { tagline: "Intravitreal anti-VEGF/Ang-2 for wet AMD and macular oedema.",
    adult: [{ ind: "Wet AMD", text: "6 mg monthly × 4, then every 8–16 weeks by response." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FEBUXOSTAT (FDA ULORIC NDA021856) ---------- */
FDB_M("febuxostat", {
  inn: "Febuxostat", atc: "M04AA03", cls: "Xanthine oxidase inhibitor",
  linked: [],
  forms: ["Tablets 40, 80 mg [FDA].", "Bhutan: not on the NEML (allopurinol is the NEML urate-lowering drug) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Non-purine selective xanthine oxidase inhibitor, lowering uric acid [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No adjustment in mild–moderate renal impairment [FDA]."],
  ind: { adult: ["Chronic hyperuricaemia in gout when allopurinol is inadequate, not tolerated or inadvisable [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Gout", "Start 40 mg once daily; if serum urate not under 6 mg/dL after 2 weeks, 80 mg once daily [FDA]."], ["Severe renal impairment", "Maximum 40 mg once daily [FDA]."], ["Flare prophylaxis", "NSAID or colchicine when starting (up to 6 months) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Severe: 40 mg/day maximum [FDA].", hepatic: "Mild–moderate: no change; check liver tests [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: F1_NEP, other: "Not for asymptomatic hyperuricaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F1_NEP, animal: F1_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Azathioprine or mercaptopurine [FDA]."],
  ae: { common: ["Liver function abnormalities, nausea, arthralgia, rash, gout flares [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiovascular death in gout with CV disease [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Serious skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum urate at 2 weeks; liver tests; CV symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "febuxostat", indication_id: "gout", label: "Gout — start 40 mg once daily", route: "PO", population: F1_ADULT, basis: "fixed", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 40, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "cap_daily", max_daily: 40, note: "Severe renal impairment: maximum 40 mg/day [FDA]" }], flags: ["80 mg if urate still 6 mg/dL or more after 2 weeks", "Never with azathioprine or mercaptopurine"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Uloric (febuxostat) — FDA label (DailyMed)", F1_DM("54de10ef-fe5f-4930-b91d-6bbb04c664bd")], F1_BT],
  dose: { tagline: "Second-line urate-lowering drug for gout — higher CV death than allopurinol.",
    boxedTitle: "Cardiovascular death", boxed: "Gout patients with established cardiovascular (CV) disease treated with ULORIC had a higher rate of CV death compared to those treated with allopurinol in a CV outcomes study. Consider the risks and benefits of ULORIC when deciding to prescribe or continue patients on ULORIC. ULORIC should only be used in patients who have an inadequate response to a maximally titrated dose of allopurinol, who are intolerant to allopurinol, or for whom treatment with allopurinol is not advisable [FDA].",
    adult: [{ ind: "Gout", text: "40 mg once daily, 80 mg if urate target not met; 40 mg max in severe renal impairment.", calc: ["gout"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FEDRATINIB (FDA INREBIC NDA212327) ---------- */
FDB_M("fedratinib", {
  inn: "Fedratinib", atc: "L01EJ02", cls: "JAK2 inhibitor", risk: "High-alert — oral antineoplastic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Capsules 100 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Selective JAK2 (and FLT3) kinase inhibitor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate; renal impairment raises exposure [FDA]."],
  ind: { adult: ["Intermediate-2 or high-risk primary or secondary myelofibrosis [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Myelofibrosis (platelets 50 × 10⁹/L or more)", "400 mg once daily with or without food [FDA]."], ["Severe renal impairment (CrCl 15–29)", "200 mg once daily [FDA]."], ["With strong CYP3A inhibitors", "200 mg once daily [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Thiamine", "All patients: thiamine 100 mg orally daily; check thiamine before starting [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "CrCl 15–29: 200 mg once daily [FDA].", hepatic: "Severe: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: F1_NEP, other: "Capsule contents may be dispersed in Ensure Plus for NG tubes [FDA]." },
  tox: { human: F1_NEP, animal: F1_LD, manage: F1_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, anaemia, thrombocytopenia, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Wernicke's encephalopathy [FDA]", "Severe GI toxicity, hepatotoxicity, raised amylase/lipase [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Thiamine, blood counts, liver tests, amylase/lipase, creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "fedratinib", indication_id: "mf", label: "Myelofibrosis — 400 mg once daily", route: "PO", population: F1_ADULT, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 200, note: "CrCl 15–29: 200 mg once daily" }], flags: ["Thiamine 100 mg daily for all", "Platelets must be 50 × 10⁹/L or more"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Inrebic (fedratinib) — FDA label (DailyMed)", F1_DM("f0f55a2a-4e0c-4cba-8571-03e1424486d7")], F1_BT],
  dose: { tagline: "JAK2 inhibitor for myelofibrosis — give thiamine to prevent Wernicke's.",
    boxedTitle: "Encephalopathy including Wernicke's", boxed: "Serious and fatal encephalopathy, including Wernicke's, has occurred in patients treated with INREBIC. Wernicke's encephalopathy is a neurologic emergency. Assess thiamine levels in all patients prior to starting INREBIC. Do not start INREBIC in patients with thiamine deficiency; replete thiamine prior to treatment initiation. While on treatment all patients should receive prophylaxis with daily oral thiamine and should have thiamine levels assessed as clinically indicated. If encephalopathy is suspected, immediately discontinue INREBIC and initiate parenteral thiamine. Monitor until symptoms resolve or improve and thiamine levels normalize [FDA].",
    adult: [{ ind: "Myelofibrosis", text: "400 mg once daily (200 mg if CrCl 15–29) plus thiamine 100 mg daily.", calc: ["mf"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FELBAMATE (FDA FELBATOL NDA020189) ---------- */
FDB_M("felbamate", {
  inn: "Felbamate", atc: "N03AX10", cls: "Antiseizure medicine (dicarbamate)",
  linked: [],
  forms: ["Tablets 400, 600 mg; oral suspension 600 mg/5 mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "NMDA receptor antagonist and GABA-A modulator [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Raises phenytoin and valproate levels — reduce those [FDA]."],
  ind: { adult: ["Severe refractory epilepsy only (partial seizures in adults) where benefit outweighs aplastic anaemia and liver failure risk [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Lennox-Gastaut syndrome, 2–14 years (adjunct) [FDA]."] },
  adult: [["Adults (14 years and over)", "Start 1,200 mg/day in 3–4 doses; increase by 600 mg every 2 weeks to 2,400 mg/day, then to 3,600 mg/day if needed [FDA]."], ["Adjunctive", "Add 1,200 mg/day while reducing other antiseizure drugs by 20% (phenytoin, valproate, phenobarbital, carbamazepine) [FDA]."], ["Renal", "Halve starting and maintenance doses [FDA]."], ["Consent", "Written informed consent recommended [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["LGS 2–14 years: start 15 mg/kg/day in 3–4 doses, reducing other antiseizure drugs by 20%; increase by 15 mg/kg/day weekly to 45 mg/kg/day [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "14 years: adult dose.", calcNote: "Divided 3–4 times daily." },
  adj: { renal: "Halve starting and maintenance doses [FDA].", hepatic: "Do not use in hepatic dysfunction [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: F1_NEP, other: "Not first line [FDA]." },
  tox: { human: "GI upset, tachycardia, CNS effects; crystalluria [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F1_LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to felbamate or other carbamates [FDA].", "History of blood dyscrasia or hepatic dysfunction [FDA]."],
  ae: { common: ["Anorexia, vomiting, insomnia, nausea, headache, weight loss [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Aplastic anaemia (often fatal) [FDA]", "Hepatic failure [FDA]"] },
  monitor: ["Full blood counts and liver tests before and frequently during therapy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "felbamate", indication_id: "adult", label: "Adults 14+ — start 1,200 mg/day in 3 doses", route: "PO", population: { min_age_months: 168, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1200, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 3600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "reduce_dose", set_value: 600, note: "Renal impairment: halve starting and maintenance doses" }], flags: ["Or in 4 doses", "Increase by 600 mg every 2 weeks; maximum 3,600 mg/day"], sources: ["FDA"] },
    { drug: "felbamate", indication_id: "lgs", label: "LGS 2–14 years — start 15 mg/kg/day in 3 doses", route: "PO", population: { min_age_months: 24, max_age_months: 168, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [], rounding: "Suspension 600 mg/5 mL", renal: [], flags: ["Reduce other antiseizure drugs by 20%", "Increase weekly by 15 mg/kg/day to 45 mg/kg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Felbatol (felbamate) — FDA label (DailyMed)", F1_DM("2f522701-397a-11de-8a39-0800200c9a66")], F1_BT],
  dose: { tagline: "Last-resort antiseizure drug — aplastic anaemia and liver failure risk.",
    boxedTitle: "Aplastic anemia and hepatic failure", boxed: "1. APLASTIC ANEMIA THE USE OF FELBATOL ® (felbamate) IS ASSOCIATED WITH A MARKED INCREASE IN THE INCIDENCE OF APLASTIC ANEMIA. ACCORDINGLY, FELBATOL ® SHOULD ONLY BE USED IN PATIENTS WHOSE EPILEPSY IS SO SEVERE THAT THE RISK OF APLASTIC ANEMIA IS DEEMED ACCEPTABLE IN LIGHT OF THE BENEFITS CONFERRED BY ITS USE. ORDINARILY, A PATIENT SHOULD NOT BE PLACED ON AND/OR CONTINUED ON FELBATOL ® WITHOUT CONSIDERATION OF APPROPRIATE EXPERT HEMATOLOGIC CONSULTATION. AMONG FELBATOL ® TREATED PATIENTS, APLASTIC ANEMIA (PANCYTOPENIA IN THE PRESENCE OF A BONE MARROW LARGELY DEPLETED OF HEMATOPOIETIC PRECURSORS) OCCURS AT AN INCIDENCE THAT MAY BE MORE THAN A 100 FOLD GREATER THAN THAT SEEN IN THE UNTREATED POPULATION (I.E., 2 TO 5 PER MILLION PERSONS PER YEAR). THE RISK OF DEATH IN PATIENTS WITH APLASTIC ANEMIA GENERALLY VARIES AS A FUNCTION OF ITS SEVERITY AND ETIOLOGY; CURRENT ESTIMATES OF THE OVERALL CASE FATALITY RATE ARE IN THE RANGE OF 20 TO 30%, BUT RATES AS HIGH AS 70% HAVE BEEN REPORTED IN THE PAST. THERE ARE TOO FEW FELBATOL ® ASSOCIATED CASES, AND TOO LITTLE KNOWN ABOUT THEM TO PROVIDE A RELIABLE ESTIMATE OF THE SYNDROME'S INCIDENCE OR ITS CASE FATALITY RATE OR TO IDENTIFY THE FACTORS, IF ANY, THAT MIGHT CONCEIVABLY BE USED TO PREDICT WHO IS AT GREATER OR LESSER RISK [FDA].",
    adult: [{ ind: "Refractory epilepsy", text: "1,200 mg/day in 3–4 doses, up to 3,600 mg/day.", calc: ["adult"] }],
    child: [{ ind: "Lennox-Gastaut 2–14 years", text: "15 mg/kg/day, increasing to 45 mg/kg/day.", calc: ["lgs"] }] }
});

/* ---------- FELODIPINE (FDA extended-release tablets ANDA201964) ---------- */
FDB_M("felodipine", {
  inn: "Felodipine", atc: "C08CA02", cls: "Dihydropyridine calcium-channel blocker",
  linked: [],
  forms: ["Extended-release tablets 2.5, 5, 10 mg [FDA].", "Bhutan: not on the NEML (amlodipine and nifedipine are used) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks L-type calcium channels in vascular smooth muscle [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — grapefruit raises levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypertension [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hypertension", "Start 5 mg once daily; adjust to 2.5–10 mg once daily at intervals of at least 2 weeks [FDA]."], ["Elderly / hepatic impairment", "Start 2.5 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Administration", "Swallow whole; take without food or with a light meal [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Usually no change [FDA].", hepatic: "Lower starting dose [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: F1_NEP, other: "Doses over 10 mg: more peripheral oedema [FDA]." },
  tox: { human: "Peripheral vasodilation, hypotension, bradycardia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F1_LD, manage: "Supportive; IV fluids, calcium, vasopressors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to felodipine [FDA]."],
  ae: { common: ["Peripheral oedema, headache, flushing, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension, syncope [FDA] [UNVERIFIED-KNOWLEDGE]", "Gingival hyperplasia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "felodipine", indication_id: "htn", label: "Hypertension — start 5 mg once daily", route: "PO", population: F1_ADULT, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, max_daily: 10, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab", whole: true }], rounding: "Whole tablets (extended release)", renal: [], flags: ["Range 2.5–10 mg once daily", "Adjust at intervals of at least 2 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Felodipine extended-release tablets — FDA label (DailyMed)", F1_DM("0bef7cf2-012b-4804-ac93-0a8b333035db")], F1_BT],
  dose: { tagline: "Once-daily dihydropyridine for hypertension — swallow whole.",
    adult: [{ ind: "Hypertension", text: "5 mg once daily (2.5–10 mg).", calc: ["htn"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FENFLURAMINE (FDA FINTEPLA NDA212102) ---------- */
FDB_M("fenfluramine", {
  inn: "Fenfluramine", atc: "N03AX26", cls: "Serotonin-releasing antiseizure medicine",
  linked: [],
  forms: ["Oral solution 2.2 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Releases serotonin and acts on 5-HT receptors and sigma-1 receptors [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP1A2, 2B6, 2D6 metabolism; reduce with strong inhibitors, severe renal or hepatic impairment [FDA]."],
  ind: { adult: ["Seizures of Dravet syndrome and Lennox-Gastaut syndrome (2 years and over) [FDA]."], paed: ["Same, from 2 years [FDA]."] },
  adult: [["Dravet syndrome", "Start 0.1 mg/kg twice daily; increase weekly by efficacy and tolerability; maximum 0.35 mg/kg twice daily (26 mg/day) [FDA]."], ["Lennox-Gastaut syndrome", "Start 0.1 mg/kg twice daily; increase weekly to 0.35 mg/kg twice daily (maximum 26 mg/day) [FDA]."], ["With stiripentol + clobazam", "Maximum 0.2 mg/kg twice daily (17 mg/day) [FDA]."], ["Before starting", "Echocardiogram before, every 6 months during, and once 3–6 months after stopping [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2 years and over: as above (mg/kg) [FDA]."], transition: "—", calcNote: "0.1 mg/kg start." },
  adj: { renal: "Severe: reduce per label [FDA].", hepatic: "Any degree: reduce per label [FDA].", pregnancy: F1_NEP, other: "MAOIs within 14 days contraindicated; serotonin syndrome risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F1_NEP, animal: F1_LD, manage: F1_NEP },
  contra: ["Hypersensitivity to fenfluramine or excipients [FDA].", "MAOI use now or within 14 days [FDA]."],
  ae: { common: ["Decreased appetite, somnolence, fatigue, diarrhoea, weight loss [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Valvular heart disease, pulmonary arterial hypertension [FDA]", "Serotonin syndrome, angle-closure glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Echocardiograms; weight; blood pressure [FDA]."],
  local: F1_LOC,
  calc: [
    { drug: "fenfluramine", indication_id: "start", label: "Dravet / LGS — start 0.1 mg/kg twice daily", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.1, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 26, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "soln", strength: 2.2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Titrate weekly to 0.35 mg/kg twice daily (max 26 mg/day)", "With stiripentol + clobazam: max 0.2 mg/kg twice daily (17 mg/day)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fintepla (fenfluramine) oral solution — FDA label (DailyMed)", F1_DM("e88f360e-33ad-4cd6-b2de-5ef885857c5d")], F1_BT],
  dose: { tagline: "For Dravet and Lennox-Gastaut seizures — echocardiograms required.",
    boxedTitle: "Valvular heart disease and pulmonary arterial hypertension", boxed: "FINTEPLA can cause valvular heart disease and pulmonary arterial hypertension. Echocardiogram assessments are required before, during, and after treatment with FINTEPLA. The benefits versus the risks of initiating or continuing FINTEPLA must be considered, based on echocardiogram findings. Because of the risks of valvular heart disease and pulmonary arterial hypertension, FINTEPLA is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the FINTEPLA REMS [FDA].",
    adult: [{ ind: "Dravet / LGS", text: "0.1 mg/kg twice daily, up to 0.35 mg/kg twice daily (max 26 mg/day).", calc: ["start"] }],
    child: [{ ind: "Dravet / LGS, 2 years+", text: "As adults.", calc: ["start"] }] }
});

/* ---------- FENOPROFEN (FDA capsules ANDA215548) ---------- */
FDB_M("fenoprofen", {
  inn: "Fenoprofen", atc: "M01AE04", cls: "NSAID (propionic acid)",
  linked: [],
  forms: ["Capsules 200, 400 mg; tablets 600 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits cyclo-oxygenase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F1_NEP],
  ind: { adult: ["Mild to moderate pain [FDA].", "Rheumatoid arthritis and osteoarthritis [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Pain", "200 mg every 4–6 hours as needed [FDA]."], ["RA / OA", "400–600 mg three or four times daily [FDA]."], ["Maximum", "3,200 mg/day [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Monitor renal function in renal or hepatic impairment, heart failure, dehydration [FDA]; avoid in significant renal impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Monitor [FDA].", pregnancy: "Avoid from about 20 weeks and in the third trimester [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Lowest effective dose for the shortest time [FDA]." },
  tox: { human: F1_NEP, animal: F1_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity (anaphylaxis, serious skin reactions) [FDA].", "Asthma or allergic reactions after aspirin/NSAIDs [FDA] [UNVERIFIED-KNOWLEDGE].", "CABG setting [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dyspepsia, nausea, constipation, somnolence, headache, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["MI, stroke [FDA]", "GI bleeding, ulceration, perforation [FDA]", "Renal toxicity, papillary necrosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Renal function, BP, GI symptoms [FDA]."],
  local: F1_LOC,
  calc: [
    { drug: "fenoprofen", indication_id: "pain", label: "Pain — 200 mg every 4–6 h as needed", route: "PO", population: F1_ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_daily: 3200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 200, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Every 4–6 hours as needed", "RA/OA: 400–600 mg three or four times daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fenoprofen calcium — FDA label (DailyMed)", F1_DM("d33ad329-1ca6-ac2e-e053-2995a90a15c5")], F1_BT],
  dose: { tagline: "Propionic-acid NSAID for pain and arthritis.",
    boxedTitle: "Risk of serious cardiovascular and gastrointestinal events", boxed: "Cardiovascular Thrombic Events Non-Steroidal Anti-Inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use.. FENOPROFEN CALCIUM ® is contraindicated in the setting of coronary artery bypass graft (CABG) surgery. Gastrointestinal Bleeding, Ulceration, and Perforation NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients and patients with a prior history of peptic ulcer disease and/or GI bleeding are at greater risk for serious GI events [FDA].",
    adult: [{ ind: "Pain", text: "200 mg every 4–6 h as needed.", calc: ["pain"] }, { ind: "RA / OA", text: "400–600 mg three or four times daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FERRIC CITRATE (FDA AURYXIA NDA205874) ---------- */
FDB_M("ferric-citrate", {
  inn: "Ferric citrate", atc: "V03AE08", cls: "Iron-based phosphate binder / oral iron",
  linked: [],
  forms: ["Tablets 1 g ferric citrate (210 mg ferric iron) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Ferric iron binds dietary phosphate; some iron is absorbed [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F1_NEP],
  ind: { adult: ["Hyperphosphataemia in CKD on dialysis [FDA].", "Iron deficiency anaemia in CKD not on dialysis [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hyperphosphataemia (dialysis)", "Start 2 tablets three times daily with meals; adjust by 1–2 tablets at intervals of 1 week or more; maximum 12 tablets daily [FDA]."], ["Iron deficiency (CKD not on dialysis)", "Start 1 tablet three times daily with meals; maximum 12 tablets daily [FDA]."]],
  paed: { tiers: ["Not established; keep away from children (iron poisoning) [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Tablets with meals." },
  adj: { renal: "For CKD patients [FDA].", hepatic: F1_NEP, pregnancy: F1_NEP, other: "Separate doxycycline and ciprofloxacin; monitor ferritin and TSAT [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Iron toxicity; accidental overdose in children can be fatal [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F1_LD, manage: "Standard iron poisoning care [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Iron overload syndromes (e.g. haemochromatosis) [FDA]."],
  ae: { common: ["Discoloured faeces, diarrhoea, constipation, nausea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Iron overload [FDA] [UNVERIFIED-KNOWLEDGE]", "Accidental iron poisoning in children [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum phosphate; ferritin and TSAT [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "ferric-citrate", indication_id: "phos", label: "Hyperphosphataemia on dialysis — 2 tablets three times daily with meals", route: "PO", population: F1_ADULT, basis: "fixed", dose: { value: 2, unit: "tablet", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 12, unit: "tablet" }, weight_basis: "NEP", formulations: [], rounding: "Whole tablets", renal: [], flags: ["Iron deficiency (not on dialysis): 1 tablet three times daily", "Maximum 12 tablets/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Auryxia (ferric citrate) — FDA label (DailyMed)", F1_DM("aadd18e0-3752-11e4-8510-0800200c9a66")], F1_BT],
  dose: { tagline: "Iron-based phosphate binder for dialysis patients — keep away from children.",
    adult: [{ ind: "Hyperphosphataemia (dialysis)", text: "2 tablets three times daily with meals; maximum 12/day.", calc: ["phos"] }, { ind: "Iron deficiency (CKD not on dialysis)", text: "1 tablet three times daily with meals." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FERRIC MALTOL (FDA ACCRUFER NDA212320) ---------- */
FDB_M("ferric-maltol", {
  inn: "Ferric maltol", atc: "B03AB10", cls: "Oral ferric iron complex",
  linked: [],
  forms: ["Capsules 30 mg elemental iron [FDA].", "Bhutan: not on the NEML (ferrous salts are the NEML oral iron) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stable ferric–maltol complex releases iron for absorption [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F1_NEP],
  ind: { adult: ["Iron deficiency in adults [FDA]."], paed: ["Iron deficiency from 10 years [FDA]."] },
  adult: [["Iron deficiency", "30 mg twice daily on an empty stomach (1 h before or 2 h after meals); swallow whole; usually at least 12 weeks, continue until stores replete [FDA]."]],
  paed: { tiers: ["10 years and over: as adults [FDA]."], transition: "—", calcNote: "30 mg capsules." },
  adj: { renal: F1_NEP, hepatic: F1_NEP, pregnancy: F1_NEP, other: "Not recommended in IBD flare [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Iron overdose in children can be fatal [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F1_LD, manage: "Standard iron poisoning care [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to the active substance or excipients [FDA].", "Haemochromatosis and other iron overload syndromes [FDA] [UNVERIFIED-KNOWLEDGE].", "Patients receiving repeated blood transfusions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Flatulence, diarrhoea, constipation, discoloured faeces, abdominal pain, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Iron overload [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Haemoglobin, ferritin, TSAT [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F1_LOC,
  calc: [
    { drug: "ferric-maltol", indication_id: "ida", label: "Iron deficiency — 30 mg twice daily (empty stomach)", route: "PO", population: { min_age_months: 120, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 30, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 30, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["1 h before or 2 h after meals", "At least 12 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Accrufer (ferric maltol) — FDA label (DailyMed)", F1_DM("367ac157-2d25-4f34-99ce-b126e0f03851")], F1_BT],
  dose: { tagline: "Gentler oral ferric iron — 30 mg twice daily on an empty stomach.",
    adult: [{ ind: "Iron deficiency", text: "30 mg twice daily, at least 12 weeks.", calc: ["ida"] }],
    child: [{ ind: "10 years and over", text: "As adults.", calc: ["ida"] }] }
});

/* Brand names — BATCH F1 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"famciclovir":{"IN":[["Penvir","Hetero Healthcare Limited","Penvir 500Mg Strip Of 3 Tablets"],["Virovir","Fdc Limited","Virovir 500Mg Strip Of 3 Tablets"],["Famcimac","Macleods Pharmaceuticals","Famcimac 500Mg Strip Of 3 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/penvir-500mg-tablet-12696","https://pharmeasy.in/online-medicine-order/virovir-500mg-tablet-10290","https://pharmeasy.in/online-medicine-order/famcimac-500mg-tablet-17593"]},"fampridine":{"IN":[["Dalstep","Sun Pharma","Dalstep 10Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/dalstep-10mg-tab-10-s-210955"]},"faricimab":{"IN":[],"BD":[["Vabysmo","Roche Bangladesh Ltd","6 mg/0.05 ml"]],"src":["https://medex.com.bd/brands/37525/vabysmo-6-mg-injection"]},"febuxostat":{"IN":[["Febuxot","Knoll Healthcare Pvt Ltd","Febuxot 40Mg Strip Of 10 Tablets (Knoll)"],["Febutec","Cipla Gx","Febutec 40Mg Strip Of 10 Tablets"],["Febutax","Leeford Healthcare Ltd","Febutax 40Mg Strip Of 10 Tablets"]],"BD":[["Febout","Radiant Pharmaceuticals Ltd","40 mg"],["Xanuric","UniMed UniHealth Pharmaceuticals Ltd","40 mg"],["Goutil","Eskayef Pharmaceuticals Ltd","40 mg"]],"src":["https://pharmeasy.in/online-medicine-order/febuxot-40mg-tablet-109642","https://pharmeasy.in/online-medicine-order/febutec-40mg-strip-of-10-tablets-486675","https://pharmeasy.in/online-medicine-order/febutax-40mg-tablet-16357","https://medex.com.bd/brands/36862/febout-40-mg-tablet","https://medex.com.bd/brands/20165/xanuric-40-mg-tablet","https://medex.com.bd/brands/29944/goutil-40-mg-tablet"]},"ferric-citrate":{"IN":[],"BD":[["Phoscon","Navana Pharmaceuticals Ltd","210 mg"],["Citofer","Incepta Pharmaceuticals Ltd","210 mg"],["Revocit","Square Pharmaceuticals PLC","210 mg"]],"src":["https://medex.com.bd/brands/29017/phoscon-210-mg-tablet","https://medex.com.bd/brands/30489/citofer-210-mg-tablet","https://medex.com.bd/brands/36472/revocit-210-mg-tablet"]},"ferric-maltol":{"IN":[],"BD":[["Femotol","Square Pharmaceuticals PLC","30 mg"],["Filofer","ACME Laboratories Ltd","30 mg"],["Maltol","Renata PLC","30 mg"]],"src":["https://medex.com.bd/brands/37081/femotol-30-mg-capsule","https://medex.com.bd/brands/35054/filofer-30-mg-capsule","https://medex.com.bd/brands/39246/maltol-30-mg-capsule"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
