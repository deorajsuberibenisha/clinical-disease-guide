/* Clinical Disease Guide — Drug monograph database, batch N-9 (26 Nov 2026).
   Bhutan NEML drugs that the A–Z run wrongly deferred (its search used the INN, not the US name):
   co-trimoxazole (sulfamethoxazole + trimethoprim), alendronic acid, magnesium hydroxide, aluminium + magnesium hydroxide antacid, artesunate.
   Artesunate: no openFDA/DailyMed label — CDC severe-malaria guidance read in a browser (26 Nov 2026). WHO's higher dose for children under 20 kg
   is NOT yet confirmed from a readable source, so the calculator covers 20 kg and over only.
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js. */
(function () { // N-9 scope
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const N9_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});
const CTX_TABS = [{ form: "tab (SS 400/80)", strength: 80, unit: "mg/tab" }, { form: "tab (DS 800/160)", strength: 160, unit: "mg/tab" }];
const CTX_SYR = { form: "syrup (200/40 per 5 mL)", strength: 40, unit: "mg/5mL" };
const CTX_RENAL = (half, halfMax) => [{ crcl_min: 15, crcl_max: 30, action: "reduce_dose", set_value: half, set_value_max: halfMax, note: "CrCl 15–30: half the usual regimen" }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "CrCl under 15: use not recommended [FDA]" }];
const TMP = "Dose shown = TRIMETHOPRIM part (tablets 400/80 = 80 mg TMP; DS 800/160 = 160 mg; syrup 40 mg TMP per 5 mL)";

FDB_M("sulfamethoxazole", {
  inn: "Co-trimoxazole (sulfamethoxazole + trimethoprim)", atc: "J01EE01", cls: "Sulfonamide + dihydrofolate reductase inhibitor combination",
  linked: [],
  forms: ["Tablets 400/80 mg (single strength) and 800/160 mg (DS) [FDA].", "Injection 80 mg SMX + 16 mg TMP per mL (400/80 per 5 mL) [FDA] [UNVERIFIED-KNOWLEDGE].", "Syrup 200/40 mg per 5 mL (Bhutan NEML) [BT-NEML]."],
  moa: "Sequential blockade of bacterial folate synthesis: sulfamethoxazole inhibits dihydropteroate synthase, trimethoprim inhibits dihydrofolate reductase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Both parts renally cleared — halve the regimen at CrCl 15–30; avoid under 15 [FDA]."],
  ind: { adult: ["UTI; shigellosis; acute exacerbation of chronic bronchitis; traveller's diarrhoea; Pneumocystis jirovecii pneumonia treatment and prophylaxis [FDA].", "IV: PCP, severe UTI, shigellosis [FDA]."], paed: ["2 months and older: UTI, acute otitis media, shigellosis, PCP treatment and prophylaxis [FDA]."] },
  adult: [["UTI", "1 DS tablet (or 2 SS) every 12 h for 10–14 days [FDA]."], ["Shigellosis", "Same dose for 5 days [FDA]."], ["Chronic bronchitis exacerbation", "1 DS every 12 h for 14 days [FDA]."], ["Traveller's diarrhoea", "1 DS every 12 h for 5 days [FDA]."], ["PCP treatment", "TMP 15–20 mg/kg/day (SMX 75–100) in equal doses every 6 h for 14–21 days [FDA]."], ["PCP prophylaxis", "1 DS daily [FDA]."], ["IV", "PCP: TMP 15–20 mg/kg/day in 3–4 doses (every 6–8 h) × 14 days. Severe UTI / shigellosis: 8–10 mg/kg/day in 2–4 doses × 14 / 5 days. Maximum 960 mg TMP (60 mL) a day. Dilute in D5W; infuse over 60–90 min; never IM or bolus [FDA]."], ["Kidney", "CrCl over 30: usual. 15–30: half the usual regimen. Under 15: not recommended [FDA]."]],
  paed: { tiers: ["Under 2 months: contraindicated [FDA].", "UTI / otitis media: TMP 8 mg/kg/day (SMX 40) in 2 doses every 12 h for 10 days; shigellosis 5 days [FDA].", "Label table (every 12 h): 10 kg ½ tablet-equivalent of 400/80 … 20 kg 1 tablet, 30 kg 1½, 40 kg 2 tablets or 1 DS [FDA].", "PCP treatment: TMP 15–20 mg/kg/day every 6 h [FDA].", "PCP prophylaxis: TMP 150 mg/m²/day (SMX 750) in 2 doses on 3 consecutive days a week; maximum TMP 320 mg/day [FDA]."], transition: "Adult doses from 40 kg.", calcNote: "Calculated on the trimethoprim part." },
  adj: { renal: "CrCl 15–30: half; under 15: not recommended [FDA].", hepatic: "Marked hepatic damage: contraindicated [FDA].", pregnancy: "Folate antagonism; kernicterus risk near term [UNVERIFIED-KNOWLEDGE].", other: "Dofetilide: contraindicated. Warfarin, phenytoin, methotrexate effects rise; hyperkalaemia with ACE inhibitors/ARBs/spironolactone [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Anorexia, colic, nausea, vomiting, dizziness, headache, drowsiness, unconsciousness; fever, haematuria, crystalluria; late blood dyscrasias and jaundice [FDA].", animal: LD, manage: "Supportive; fluids; leucovorin for bone-marrow depression from trimethoprim [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to trimethoprim or sulfonamides [FDA].", "Drug-induced immune thrombocytopenia with either drug [FDA].", "Megaloblastic anaemia from folate deficiency [FDA].", "Infants under 2 months [FDA].", "Marked hepatic damage [FDA].", "Severe renal insufficiency when renal function cannot be monitored [FDA].", "With dofetilide [FDA]."],
  ae: { common: ["Nausea, vomiting, anorexia, rash, urticaria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["SJS/TEN, DRESS [FDA] [UNVERIFIED-KNOWLEDGE]", "Agranulocytosis, aplastic anaemia, thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperkalaemia, hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic necrosis [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts and potassium on long courses or high doses; kidney function [FDA] [UNVERIFIED-KNOWLEDGE].", "Rash — stop at first sign [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: co-trimoxazole (sulphamethoxazole 400 mg + trimethoprim 80 mg) tablet and (200 mg + 40 mg)/5 mL syrup (60 mL) — listed as antibacterial and as antipneumocystis/antitoxoplasma medicine [BT-NEML].", strengths: "Tablet 400/80 mg; syrup 200/40 mg per 5 mL.", stg: "Used in Bhutan programme guidance (e.g. HIV prophylaxis) — follow the national guideline [UNVERIFIED-KNOWLEDGE]." },
  calc: [
    C("sulfamethoxazole", "uti", "Adult UTI / shigellosis — 1 DS (TMP 160 mg) every 12 h", "PO", ADULT, "fixed", 160, 12, { caps: { max_single: 160, unit: "mg" }, formulations: CTX_TABS, rounding: "Whole tablets", renal: CTX_RENAL(80), flags: [TMP, "UTI 10–14 days; shigellosis 5 days"] }),
    C("sulfamethoxazole", "child", "Child 2 months+ UTI / otitis / shigellosis — TMP 8 mg/kg/day ÷ every 12 h", "PO", pop(2, 216, null, null), "mg_per_kg", 8, 12, { dose: { value: 8, unit: "mg", per: "day" }, divided_doses: 2, caps: { max_single: 160, unit: "mg" }, formulations: [CTX_SYR, CTX_TABS[0]], rounding: "0.5 mL syrup or ½ tablet", renal: CTX_RENAL(4), flags: [TMP, "10 days (UTI, otitis); 5 days (shigellosis)", "Under 2 months: contraindicated"] }),
    C("sulfamethoxazole", "pcp", "PCP treatment (2 months+) — TMP 15–20 mg/kg/day ÷ every 6 h", "PO", pop(2, null, null, null), "mg_per_kg", 15, 6, { dose: { value: 15, unit: "mg", per: "day", value_max: 20 }, divided_doses: 4, formulations: [CTX_TABS[0], CTX_SYR], rounding: "½ tablet or 0.5 mL syrup", renal: CTX_RENAL(7.5, 10), flags: [TMP, "14–21 days"] }),
    C("sulfamethoxazole", "proph", "PCP prophylaxis adult — 1 DS (TMP 160 mg) once daily", "PO", ADULT, "fixed", 160, 24, { caps: { max_single: 160, unit: "mg" }, formulations: CTX_TABS, rounding: "Whole tablets", renal: CTX_RENAL(80), flags: [TMP] }),
    C("sulfamethoxazole", "cproph", "PCP prophylaxis child — TMP 150 mg/m²/day ÷ every 12 h, 3 days a week", "PO", pop(2, 216, null, null), "mg_per_m2", 150, 12, { dose: { value: 150, unit: "mg", per: "day" }, divided_doses: 2, caps: { max_daily: 320, unit: "mg" }, formulations: [CTX_SYR, CTX_TABS[0]], rounding: "0.5 mL syrup or ½ tablet", renal: CTX_RENAL(75), flags: [TMP, "On 3 consecutive days each week", "Maximum TMP 320 mg/day"] }),
    C("sulfamethoxazole", "ivpcp", "IV PCP — TMP 15–20 mg/kg/day ÷ every 6 h (infuse 60–90 min)", "IV", pop(2, null, null, null), "mg_per_kg", 15, 6, { dose: { value: 15, unit: "mg", per: "day", value_max: 20 }, divided_doses: 4, caps: { max_daily: 960, unit: "mg" }, formulations: [{ form: "inj (80/16 per mL)", strength: 16, unit: "mg/mL" }], rounding: "0.1 mL (then dilute in D5W)", infusion: { duration_h: 1 }, renal: CTX_RENAL(7.5, 10), flags: [TMP, "Or every 8 h (3 doses)", "Maximum 960 mg TMP (60 mL) a day", "Never IM or bolus"] }),
    C("sulfamethoxazole", "ivuti", "IV severe UTI / shigellosis — TMP 8–10 mg/kg/day ÷ every 12 h", "IV", pop(2, null, null, null), "mg_per_kg", 8, 12, { dose: { value: 8, unit: "mg", per: "day", value_max: 10 }, divided_doses: 2, caps: { max_daily: 960, unit: "mg" }, formulations: [{ form: "inj (80/16 per mL)", strength: 16, unit: "mg/mL" }], rounding: "0.1 mL (then dilute in D5W)", infusion: { duration_h: 1 }, renal: CTX_RENAL(4, 5), flags: [TMP, "Label: in 2–4 doses (every 6, 8 or 12 h)", "Maximum 960 mg TMP a day"] })
  ],
  sources: [["FDA", "BACTRIM (sulfamethoxazole and trimethoprim) tablets — FDA label (DailyMed)", N9_DM("f59d0c04-9c66-4d53-a0e1-cb55570deb62")], ["FDA", "Sulfamethoxazole and trimethoprim injection — FDA label (DailyMed)", N9_DM("640f5b0c-748d-4a68-a1de-59cc3e00ed49")], NEML_SRC],
  dose: { tagline: "Co-trimoxazole — dose on the trimethoprim part: 1 DS twice daily in adults, TMP 8 mg/kg/day in children; halve at CrCl 15–30.",
    cautionTitle: "Never under 2 months", caution: "Co-trimoxazole is contraindicated in pediatric patients less than 2 months of age [FDA].",
    adult: [{ ind: "UTI / shigellosis", text: "1 DS (800/160) every 12 h.", calc: ["uti"] }, { ind: "PCP treatment", text: "TMP 15–20 mg/kg/day every 6 h × 14–21 days.", calc: ["pcp", "ivpcp"] }, { ind: "PCP prophylaxis", text: "1 DS once daily.", calc: ["proph"] }, { ind: "IV severe UTI", text: "TMP 8–10 mg/kg/day divided.", calc: ["ivuti"] }],
    child: [{ ind: "UTI / otitis / shigellosis", text: "TMP 8 mg/kg/day in 2 doses.", calc: ["child"] }, { ind: "PCP treatment", text: "TMP 15–20 mg/kg/day every 6 h.", calc: ["pcp", "ivpcp"] }, { ind: "PCP prophylaxis", text: "TMP 150 mg/m²/day, 3 days a week.", calc: ["cproph"] }] }
});

FDB_M("alendronic-acid", {
  inn: "Alendronic acid", atc: "M05BA04", cls: "Bisphosphonate",
  linked: [],
  forms: ["Tablets (alendronate sodium) 10, 35, 70 mg [FDA]."],
  moa: "Binds bone hydroxyapatite and inhibits osteoclast bone resorption [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very poor oral absorption — plain water only, 30 minutes before anything else [FDA]."],
  ind: { adult: ["Treatment and prevention of postmenopausal osteoporosis; osteoporosis in men; glucocorticoid-induced osteoporosis; Paget's disease of bone [FDA]."], paed: ["Not indicated [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Osteoporosis treatment (women, men)", "70 mg once weekly or 10 mg once daily [FDA]."], ["Prevention (postmenopausal)", "35 mg once weekly or 5 mg daily [FDA]."], ["Glucocorticoid-induced", "5 mg daily; 10 mg daily in postmenopausal women not on oestrogen [FDA]."], ["Paget's disease", "40 mg daily for 6 months; may re-treat after a 6-month evaluation [FDA]."], ["How to take", "Swallow whole with 6–8 oz (180–240 mL) plain water at least 30 min before the first food, drink or medicine of the day; stay upright at least 30 min and until after food [FDA]."], ["Kidney", "CrCl under 35: not recommended; 35–60: no change [FDA]."]],
  paed: { tiers: ["Not indicated [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "CrCl under 35: not recommended [FDA].", hepatic: "No adjustment expected [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Not for use in pregnancy [UNVERIFIED-KNOWLEDGE].", other: "Calcium, antacids and other oral drugs: take at least 30 min after alendronate [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypocalcaemia, hypophosphataemia, upper GI upset (heartburn, oesophagitis, ulcer) [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Milk or antacids to bind the drug; do not induce vomiting; stay upright [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Oesophageal abnormalities delaying emptying (stricture, achalasia) [FDA].", "Inability to stand or sit upright for 30 minutes [FDA].", "Hypocalcaemia [FDA].", "Hypersensitivity (urticaria, angioedema reported) [FDA]."],
  ae: { common: ["Abdominal pain, dyspepsia, acid regurgitation, nausea, musculoskeletal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Oesophagitis, ulcers, erosions [FDA] [UNVERIFIED-KNOWLEDGE]", "Osteonecrosis of the jaw [FDA] [UNVERIFIED-KNOWLEDGE]", "Atypical femoral fractures [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe bone, joint or muscle pain [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Calcium and vitamin D before starting; dental check [UNVERIFIED-KNOWLEDGE].", "Review need after 3–5 years [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: alendronate 70 mg tablet [BT-NEML].", strengths: "Alendronate 70 mg tablet (once weekly).", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    C("alendronic-acid", "wk", "Osteoporosis — 70 mg once weekly", "PO", ADULT, "fixed", 70, 168, { caps: { max_single: 70, unit: "mg" }, formulations: [{ form: "tab", strength: 70, unit: "mg/tab" }], rounding: "Whole tablet", renal: [{ crcl_min: 0, crcl_max: 34.999, action: "avoid", note: "CrCl under 35: not recommended [FDA]" }], flags: ["Plain water, 30 min before food; stay upright 30 min", "Prevention: 35 mg weekly"] }),
    C("alendronic-acid", "day", "Osteoporosis — 10 mg once daily", "PO", ADULT, "fixed", 10, 24, { caps: { max_single: 10, unit: "mg" }, formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablet", renal: [{ crcl_min: 0, crcl_max: 34.999, action: "avoid", note: "CrCl under 35: not recommended [FDA]" }], flags: ["Glucocorticoid-induced: 5 mg (10 mg if postmenopausal, no oestrogen)", "Paget's: 40 mg daily × 6 months"] })
  ],
  sources: [["FDA", "Alendronate sodium tablets (ANDA090124) — FDA label (DailyMed)", N9_DM("4323d3aa-cbb0-41e2-aba7-7a94a0516993")], NEML_SRC],
  dose: { tagline: "Weekly bisphosphonate — 70 mg with plain water, upright 30 min, fasting; not if CrCl under 35.",
    adult: [{ ind: "Osteoporosis", text: "70 mg once weekly (or 10 mg daily).", calc: ["wk", "day"] }, { ind: "Paget's disease", text: "40 mg daily for 6 months." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("magnesium-hydroxide", {
  inn: "Magnesium hydroxide", atc: "A02AA04", cls: "Osmotic laxative / antacid",
  linked: [],
  forms: ["Oral suspension 1,200 mg per 15 mL (80 mg/mL) — Milk of Magnesia (OTC) [FDA]."],
  moa: "Poorly absorbed magnesium draws water into the bowel (osmotic laxative); neutralises gastric acid [UNVERIFIED-KNOWLEDGE].",
  pk: ["Some magnesium is absorbed — accumulates in kidney disease [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Occasional constipation — bowel movement in ½ to 6 hours [FDA]."], paed: ["Occasional constipation 6 years and older [FDA]."] },
  adult: [["Constipation (12 years and over)", "30–60 mL once daily, preferably at bedtime, or in divided doses; a full glass of liquid with each dose [FDA]."], ["Limit", "Not for more than 1 week without a doctor [FDA]."]],
  paed: { tiers: ["6–11 years: 15–30 mL once daily or divided [FDA].", "Under 6 years: ask a doctor [FDA]."], transition: "12 years: adult dose.", calcNote: "Volume of 80 mg/mL suspension." },
  adj: { renal: "Kidney disease: ask a doctor (magnesium accumulation) [FDA].", hepatic: NEP, pregnancy: "Ask a health professional [FDA].", other: "May interact with prescription drugs — separate doses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Diarrhoea; hypermagnesaemia in kidney failure [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; calcium gluconate for severe hypermagnesaemia [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Ask a doctor first: kidney disease, magnesium-restricted diet, abdominal pain, nausea or vomiting, bowel change over 14 days [FDA]."],
  ae: { common: ["Diarrhoea, abdominal cramps [UNVERIFIED-KNOWLEDGE]."], serious: ["Stop and see a doctor if rectal bleeding or no bowel movement [FDA]", "Hypermagnesaemia in renal impairment [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Magnesium in kidney disease [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025 only in the combination tablet aluminium hydroxide 250 mg + magnesium hydroxide 400 mg [BT-NEML].", strengths: "Combination antacid tablet (see aluminium hydroxide).", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    C("magnesium-hydroxide", "adult", "Constipation 12 y+ — 30–60 mL (2,400–4,800 mg) once daily", "PO", pop(144, null, null, null), "fixed", 2400, 24, { dose: { value: 2400, unit: "mg", per: "dose", value_max: 4800 }, caps: { max_single: 4800, unit: "mg" }, formulations: [{ form: "suspension (1,200 mg/15 mL)", strength: 80, unit: "mg/mL" }], rounding: "Dosing cup", flags: ["Bedtime, or divided", "Full glass of liquid", "Kidney disease: ask a doctor first"] }),
    C("magnesium-hydroxide", "child", "Constipation 6–11 y — 15–30 mL (1,200–2,400 mg) once daily", "PO", pop(72, 144, null, null), "fixed", 1200, 24, { dose: { value: 1200, unit: "mg", per: "dose", value_max: 2400 }, caps: { max_single: 2400, unit: "mg" }, formulations: [{ form: "suspension (1,200 mg/15 mL)", strength: 80, unit: "mg/mL" }], rounding: "Dosing cup", flags: ["Under 6 years: ask a doctor"] })
  ],
  sources: [["FDA", "Milk of Magnesia (magnesium hydroxide) oral suspension — FDA OTC label (DailyMed)", N9_DM("003a3c0d-7a48-e44d-e063-6394a90a3f4a")], NEML_SRC],
  dose: { tagline: "Osmotic laxative — 30–60 mL at bedtime (15–30 mL at 6–11 y); not in kidney disease without advice.",
    adult: [{ ind: "Occasional constipation", text: "30–60 mL once daily.", calc: ["adult"] }],
    child: [{ ind: "6–11 years", text: "15–30 mL once daily.", calc: ["child"] }] }
});

FDB_M("aluminium-hydroxide", {
  inn: "Aluminium hydroxide", atc: "A02AB01", cls: "Antacid (with magnesium hydroxide)",
  linked: [],
  forms: ["Bhutan: tablet aluminium hydroxide 250 mg + magnesium hydroxide 400 mg [BT-NEML].", "US OTC liquid: aluminium hydroxide 1,200 mg + magnesium hydroxide 1,200 mg per 30 mL [FDA]."],
  moa: "Neutralises gastric acid; aluminium tends to constipate and magnesium to loosen, so the mix balances bowel effects [UNVERIFIED-KNOWLEDGE].",
  pk: ["Small amounts absorbed — aluminium and magnesium accumulate in kidney failure [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acid indigestion, heartburn, sour stomach, upset stomach from these [FDA]."], paed: ["Under 12 years: ask a doctor [FDA]."] },
  adult: [["US liquid (12 years and over)", "30 mL up to twice a day; not more than 60 mL in 24 h; not at the maximum for more than 2 weeks without a doctor [FDA]."], ["Bhutan tablet", "Dose per product leaflet [NEP]."]],
  paed: { tiers: ["Under 12 years: ask a doctor [FDA]."], transition: "12 years: adult dose.", calcNote: "Combination product — no calculator." },
  adj: { renal: "Kidney disease: ask a doctor (aluminium and magnesium accumulation) [FDA].", hepatic: NEP, pregnancy: "Ask a health professional [FDA].", other: "Antacids reduce absorption of many drugs (tetracyclines, quinolones, iron, levothyroxine) — separate doses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Ask a doctor first: kidney disease, magnesium-restricted diet [FDA]."],
  ae: { common: ["Laxative effect [FDA]; constipation [UNVERIFIED-KNOWLEDGE]."], serious: ["Aluminium or magnesium toxicity in kidney failure [UNVERIFIED-KNOWLEDGE]", "Hypophosphataemia with long use [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptoms persisting beyond 2 weeks need review [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: aluminium hydroxide 250 mg + magnesium hydroxide 400 mg tablet [BT-NEML].", strengths: "Tablet 250 mg + 400 mg.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Mag-Al liquid (aluminum hydroxide + magnesium hydroxide) — FDA OTC label (DailyMed)", N9_DM("b1f2d137-f5f7-4800-a1df-ef5d25544bc9")], NEML_SRC],
  dose: { tagline: "Combination antacid for heartburn — short-term only; caution in kidney disease; separate from other medicines.",
    adult: [{ ind: "Heartburn / indigestion", text: "US liquid 30 mL up to twice daily (max 60 mL/24 h); Bhutan tablet per leaflet." }],
    child: [{ ind: "Under 12 years", text: "Ask a doctor." }] }
});

FDB_M("artesunate", {
  inn: "Artesunate", atc: "P01BE03", cls: "Artemisinin antimalarial (parenteral)",
  linked: [],
  forms: ["Powder for injection 30 mg vial (Bhutan NEML) [BT-NEML].", "US: Artesunate for Injection (Amivas), FDA-approved [CDC]."],
  moa: "Converted to dihydroartemisinin; rapidly kills blood-stage malaria parasites [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very short half-life — always follow with a complete oral course [CDC]."],
  ind: { adult: ["Severe malaria, any Plasmodium species [CDC]."], paed: ["Severe malaria in children [CDC]."] },
  adult: [["Severe malaria (IV)", "2.4 mg/kg IV at 0, 12 and 24 hours [CDC]."], ["After 3 doses", "Reassess clinical state and parasitaemia (thin smear at least 4 h after the last dose). If parasitaemia over 1% or cannot take oral drugs: continue 2.4 mg/kg once daily, up to 7 days of IV artesunate in total [CDC]."], ["Follow-on", "When parasitaemia is 1% or less and oral drugs are tolerated, give a full oral course starting 8–24 h after the last IV dose. Artemether-lumefantrine as follow-on: extended 5-day (10-dose) course (CDC, Aug 2026) [CDC]."], ["Contraindication", "Known allergy to IV artemisinins [CDC]."]],
  paed: { tiers: ["20 kg and over: 2.4 mg/kg per dose as adults [CDC].", "Under 20 kg: WHO recommends a higher dose per kg — check the current WHO Guidelines for malaria / Bhutan malaria guideline before dosing; not calculated here until verified [UNVERIFIED-KNOWLEDGE]."], transition: "Same mg/kg from 20 kg.", calcNote: "Calculator: 20 kg and over only." },
  adj: { renal: "No adjustment stated [NEP].", hepatic: "No adjustment stated [NEP].", pregnancy: "Severe malaria is life-threatening in pregnancy — treat with IV artesunate [CDC] [UNVERIFIED-KNOWLEDGE].", other: "Post-artesunate delayed haemolysis — higher risk with high parasitaemia [CDC]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Known allergy to IV artemisinins [CDC]."],
  ae: { common: ["Anaemia, raised liver enzymes [UNVERIFIED-KNOWLEDGE]."], serious: ["Post-artesunate delayed haemolysis (check haemoglobin for weeks after) [CDC]", "Hypersensitivity [CDC]"] },
  monitor: ["Thick and thin smears at least daily until negative; follow-up smear within a week if discharged before [CDC].", "Haemoglobin after treatment (delayed haemolysis) [CDC] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: artesunate 30 mg powder for injection [BT-NEML].", strengths: "Artesunate 30 mg vial.", stg: "Follow the Bhutan national malaria treatment guideline [UNVERIFIED-KNOWLEDGE]." },
  calc: [C("artesunate", "sev", "Severe malaria (20 kg+) — 2.4 mg/kg IV at 0, 12, 24 h, then daily", "IV", pop(null, null, 20, null), "mg_per_kg", 2.4, 12, { formulations: [{ form: "vial", strength: 30, unit: "mg/vial" }], rounding: "Reconstitute per product leaflet", sources: ["CDC"], flags: ["3 doses at 0, 12, 24 h; then once daily if needed (max 7 days IV)", "Then a full oral course", "Under 20 kg: not calculated — check WHO/Bhutan guideline (higher mg/kg)"] })],
  sources: [["CDC", "Treatment of severe malaria — CDC clinical guidance for health care providers (Aug 2026)", "https://www.cdc.gov/malaria/hcp/clinical-guidance/treatment-of-severe-malaria.html"], ["WHO", "WHO Guidelines for malaria", "https://www.who.int/publications/i/item/guidelines-for-malaria"], NEML_SRC],
  dose: { tagline: "First-line drug for severe malaria — 2.4 mg/kg IV at 0, 12, 24 h, then daily until oral treatment is possible; always finish with an oral course.",
    adult: [{ ind: "Severe malaria", text: "2.4 mg/kg IV at 0, 12, 24 h; then daily if needed; then full oral course.", calc: ["sev"] }],
    child: [{ ind: "20 kg and over", text: "2.4 mg/kg per dose as adults.", calc: ["sev"] }, { ind: "Under 20 kg", text: "Higher mg/kg dose per WHO — check the current guideline (not calculated here)." }] }
});

})(); // end N-9 scope
