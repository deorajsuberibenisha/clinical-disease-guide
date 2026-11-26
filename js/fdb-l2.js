/* Clinical Disease Guide — Drug monograph database, batch L-2 (26 Nov 2026).
   L tail of the A–Z pack run, part 1: levobunolol … loncastuximab tesirine (25 records).
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js.
   Labels added by hand: carbidopa-levodopa (SINEMET) beside inhaled levodopa (INBRIJA); VICTOZA beside SAXENDA; CARNITOR injection beside oral.
   Deferred: lixisenatide (only current FDA label is the insulin glargine combination SOLIQUA). */
(function () { // L-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const STG_SRC = ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const L2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ANY = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});
const T4_TABS = [25, 50].map(s => ({ form: "tab", strength: s, unit: "mcg/tab" })); // paediatric blocks: Bhutan NEML strengths only (wider strength lists round outside the range)
const T4_ADULT = [25, 50, 100].map(s => ({ form: "tab", strength: s, unit: "mcg/tab" }));

FDB_M("levobunolol", {
  inn: "Levobunolol", atc: "S01ED03", cls: "Non-selective beta-blocker (eye drops)",
  linked: [],
  forms: ["Ophthalmic solution 0.5% [FDA]."],
  moa: "Non-selective beta-adrenergic blocker; lowers intraocular pressure, probably by reducing aqueous humour production [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorbed systemically from the eye — the same reactions as oral beta-blockers can occur [FDA]."],
  ind: { adult: ["Lowering intraocular pressure in chronic open-angle glaucoma or ocular hypertension [FDA]."], paed: [NEP] },
  adult: [["Glaucoma / ocular hypertension", "1–2 drops of 0.5% in the affected eye(s) once daily; in more severe or uncontrolled glaucoma, twice daily [FDA]."], ["Ceiling", "More than 1 drop of 0.5% twice daily is not generally more effective. Do not use two topical beta-blockers together [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Systemic beta-blockade: may mask hypoglycaemia and thyrotoxicosis signs; impairs compensatory tachycardia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No human overdose data. Expected: bradycardia, hypotension, bronchospasm, acute heart failure [FDA].", animal: LD, manage: "Eye: flush with water or saline. Swallowed: reduce absorption; supportive treatment of beta-blocker effects [FDA]." },
  contra: ["Bronchial asthma or history of asthma; severe COPD [FDA].", "Sinus bradycardia; second- or third-degree AV block [FDA].", "Overt cardiac failure; cardiogenic shock [FDA].", "Hypersensitivity to any component [FDA]."],
  ae: { common: ["Transient burning and stinging (up to 1 in 3); blepharoconjunctivitis (up to 1 in 20) [FDA]."], serious: ["Bronchospasm — deaths reported in asthma [FDA]", "Bradycardia, hypotension, cardiac failure [FDA]"] },
  monitor: ["Intraocular pressure; pulse; breathing in airway disease [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025; the NEML beta-blocker eye drop is timolol maleate 0.5% (5 mL) [BT-NEML].", strengths: "Not available through the Bhutan formulary — use timolol 0.5%.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Levobunolol hydrochloride ophthalmic solution — FDA label (DailyMed)", L2_DM("5ab1efbe-530b-4787-b40a-c7dbf18161e1")], NEML_SRC],
  dose: { tagline: "Beta-blocker eye drop for glaucoma — absorbed systemically: never in asthma, severe COPD, heart block or heart failure.",
    cautionTitle: "Systemic beta-blockade from eye drops", caution: "Severe respiratory and cardiac reactions, including death from bronchospasm in asthma and rarely death in cardiac failure, have been reported with topical beta-blockers [FDA].",
    adult: [{ ind: "Glaucoma / ocular hypertension", text: "1–2 drops of 0.5% once daily; twice daily if more severe. Not above 1 drop twice daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("levocarnitine", {
  inn: "Levocarnitine", atc: "A16AA01", cls: "Carnitine replacement (amino acid derivative)",
  linked: [],
  forms: ["Tablets 330 mg [FDA].", "Oral solution 1 g/10 mL (100 mg/mL), sugar-free and standard [FDA].", "Injection 200 mg/mL (1 g/5 mL) [FDA]."],
  moa: "Natural carrier that moves long-chain fatty acids into mitochondria for beta-oxidation; replaces carnitine when stores are low [UNVERIFIED-KNOWLEDGE].",
  pk: ["Removed from plasma by dialysis [FDA]."],
  ind: { adult: ["Primary systemic carnitine deficiency (oral) [FDA].", "Injection: acute and chronic carnitine deficiency from inborn errors of metabolism; carnitine deficiency in end-stage renal disease on haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Primary systemic carnitine deficiency — infants and children [FDA].", "Injection: metabolic disorders [FDA]."] },
  adult: [["Oral tablets", "990 mg (3 × 330 mg) two or three times a day, by clinical response [FDA]."], ["Oral solution", "1–3 g/day for a 50 kg person (10–30 mL/day). Start 1 g/day (10 mL) and increase slowly. Higher doses only with caution [FDA]."], ["IV — metabolic disorders", "50 mg/kg slow bolus over 2–3 minutes or infusion. Severe crisis: a loading dose, then an equal dose over the next 24 h, given every 3–4 h and never less often than every 6 h. Later daily doses ~50 mg/kg; highest dose given 300 mg/kg [FDA]."], ["IV — ESRD on haemodialysis", "10–20 mg/kg dry body weight slow bolus (2–3 min) into the venous return line after each dialysis. Adjust by trough (pre-dialysis) levels; may lower to 5 mg/kg from week 3–4 [FDA]."]],
  paed: { tiers: ["Oral: 50–100 mg/kg/day in divided doses; start 50 mg/kg/day; maximum 3 g/day [FDA].", "Solution doses spaced evenly through the day (every 3–4 hours), with or after meals, taken slowly [FDA].", "IV metabolic disorders: 50 mg/kg as for adults [FDA]."], transition: "Same mg/kg rules; adults by the adult dose.", calcNote: "Daily total matters; maximum 3 g/day orally." },
  adj: { renal: "Oral: high doses in severe renal impairment or ESRD on dialysis may cause accumulation of metabolites [UNVERIFIED-KNOWLEDGE]. Haemodialysis: IV dosing after each session [FDA].", hepatic: NEP, pregnancy: NEP, other: "Warfarin: INR rises reported — check INR after starting or changing the dose [FDA]." },
  tox: { human: "No toxicity reports from overdose; large doses may cause diarrhoea [FDA].", animal: "Rat IV LD50 5.4 g/kg; mouse oral LD50 19.2 g/kg [FDA].", manage: "Supportive; removed by dialysis [FDA]." },
  contra: ["None known [FDA]."],
  ae: { common: ["Mild gastrointestinal complaints (nausea, vomiting, cramps, diarrhoea); body odour [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity: rash, urticaria, facial oedema (oral); anaphylaxis, laryngeal oedema, bronchospasm (IV, mostly in ESRD on dialysis) [FDA]", "Seizures reported [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood chemistries, vital signs, plasma carnitine levels, clinical state [FDA].", "IV metabolic: plasma free carnitine 35–60 µmol/L; level before starting, then weekly and monthly [FDA].", "ESRD: trough pre-dialysis levels [FDA].", "INR if on warfarin [FDA]."],
  local: notBT,
  calc: [
    C("levocarnitine", "atab", "Adult oral — 990 mg two or three times a day", "PO", ADULT, "fixed", 990, 8, { caps: { max_single: 990, unit: "mg" }, formulations: [{ form: "tab", strength: 330, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Or twice daily, by response", "With or after meals"] }),
    C("levocarnitine", "child", "Child oral — 50 mg/kg/day to start (up to 100), divided every 4 h", "PO", pop(0, 216, null, null), "mg_per_kg", 50, 4, { dose: { value: 50, unit: "mg", per: "day", value_max: 100 }, divided_doses: 6, caps: { max_daily: 3000, unit: "mg" }, formulations: [{ form: "solution", strength: 100, unit: "mg/mL" }, { form: "tab", strength: 330, unit: "mg/tab" }], rounding: "0.1 mL", flags: ["Start at 50 mg/kg/day; increase slowly by response", "Label: doses spaced evenly every 3–4 h, with or after meals", "Maximum 3 g/day"] }),
    C("levocarnitine", "ivmet", "IV metabolic disorder — 50 mg/kg slow bolus", "IV", ANY, "mg_per_kg", 50, null, { formulations: [{ form: "inj", strength: 200, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Slow bolus over 2–3 min or infusion", "Severe crisis: this as a load, then the same total over the next 24 h, every 3–4 h (never less often than every 6 h)", "Check plasma carnitine before starting"] }),
    C("levocarnitine", "ivesrd", "ESRD on haemodialysis — 10–20 mg/kg after each dialysis", "IV", ADULT, "mg_per_kg", 10, null, { dose: { value: 10, unit: "mg", per: "dose", value_max: 20 }, formulations: [{ form: "inj", strength: 200, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Use DRY body weight", "Slow bolus (2–3 min) into the venous return line after each session", "Guided by trough pre-dialysis levels; may lower to 5 mg/kg from week 3–4"] })
  ],
  sources: [["FDA", "CARNITOR / CARNITOR SF (levocarnitine) tablets and oral solution — FDA label (DailyMed)", L2_DM("dd904490-83f3-4cd3-bb6f-68e28509b4b6")], ["FDA", "CARNITOR (levocarnitine) injection — FDA label (DailyMed)", L2_DM("cf801cc4-775e-433d-9d32-e5d9a98981d3")], NEML_SRC],
  dose: { tagline: "Carnitine replacement — oral 50–100 mg/kg/day (max 3 g); IV 10–20 mg/kg after each haemodialysis.",
    adult: [{ ind: "Carnitine deficiency (oral)", text: "990 mg two or three times a day (tablets), or 1–3 g/day solution.", calc: ["atab"] }, { ind: "Metabolic crisis (IV)", text: "50 mg/kg slow IV; repeat to the same total over 24 h.", calc: ["ivmet"] }, { ind: "ESRD on haemodialysis", text: "10–20 mg/kg dry weight IV after each dialysis.", calc: ["ivesrd"] }],
    child: [{ ind: "Carnitine deficiency (oral)", text: "50–100 mg/kg/day divided; start 50; max 3 g/day.", calc: ["child"] }, { ind: "Metabolic crisis (IV)", text: "50 mg/kg slow IV.", calc: ["ivmet"] }] }
});

FDB_M("levocetirizine", {
  inn: "Levocetirizine", atc: "R06AE09", cls: "Second-generation H1 antihistamine",
  linked: [],
  forms: ["Tablets 5 mg, scored [FDA].", "Oral solution 2.5 mg/5 mL (0.5 mg/mL) [FDA]."],
  moa: "Active enantiomer of cetirizine; selective H1-receptor antagonist [FDA].",
  pk: ["Mostly cleared by the kidneys — dose by creatinine clearance [FDA].", "Children 6–11 years get twice the adult exposure at 5 mg — never exceed 2.5 mg [FDA]."],
  ind: { adult: ["Chronic idiopathic urticaria (uncomplicated skin signs) [FDA]."], paed: ["Perennial allergic rhinitis: 6 months to 2 years [FDA].", "Chronic idiopathic urticaria: 6 months and older [FDA]."] },
  adult: [["Urticaria (12 years and over)", "5 mg once daily in the evening; 2.5 mg may be enough [FDA]."], ["Kidney (12 years and over)", "CrCl 50–80: 2.5 mg once daily. 30–50: 2.5 mg every other day. 10–30: 2.5 mg twice weekly (every 3–4 days). Under 10 or haemodialysis: do not use [FDA]."]],
  paed: { tiers: ["6–11 years (urticaria): 2.5 mg once daily in the evening — do not exceed [FDA].", "6 months–5 years (urticaria): 1.25 mg (2.5 mL) once daily in the evening — do not exceed [FDA].", "6 months–2 years (allergic rhinitis): 1.25 mg (2.5 mL) once daily in the evening [FDA].", "Children 6 months–11 years with any renal impairment: contraindicated [FDA]."], transition: "12 years: adult dose.", calcNote: "Evening dose." },
  adj: { renal: "See CrCl table (12 years and over). Children 6 months–11 years with renal impairment: contraindicated [FDA].", hepatic: "Hepatic impairment alone: no change. Hepatic plus renal impairment: adjust [FDA].", pregnancy: "Data insufficient to identify a drug-associated risk; no fetal harm in animal studies [FDA].", other: "Avoid alcohol and other CNS depressants [FDA]." },
  tox: { human: "Adults: drowsiness. Children: agitation and restlessness, then drowsiness [FDA].", animal: "Mouse: maximal non-lethal oral dose 240 mg/kg [FDA].", manage: "Symptomatic and supportive; no antidote; not removed by dialysis [FDA]." },
  contra: ["Hypersensitivity to levocetirizine, cetirizine or ingredients [FDA].", "ESRD (CrCl under 10 mL/min) or haemodialysis [FDA].", "Children 6 months–11 years with renal impairment [FDA]."],
  ae: { common: ["Somnolence, nasopharyngitis, fatigue, dry mouth, pharyngitis (12 years+); pyrexia in children [FDA]."], serious: ["Urinary retention [FDA]", "New-onset pruritus after stopping long-term use [FDA]"] },
  monitor: ["Sedation; urinary retention in prostate enlargement or spinal lesions [FDA]."],
  local: notBT,
  calc: [
    C("levocetirizine", "a12", "Urticaria 12 years+ — 5 mg once daily (evening)", "PO", pop(144, null, null, null), "fixed", 5, 24, { caps: { max_single: 5, unit: "mg" }, formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }, { form: "solution", strength: 0.5, unit: "mg/mL" }], rounding: "Half tablets", renal: [{ crcl_min: 50, crcl_max: 80, action: "reduce_dose", set_value: 2.5, note: "CrCl 50–80: 2.5 mg once daily" }, { crcl_min: 30, crcl_max: 49.999, action: "reduce_dose", set_value: 2.5, interval_h: 48, note: "CrCl 30–50: 2.5 mg every other day" }, { crcl_min: 10, crcl_max: 29.999, action: "reduce_dose", set_value: 2.5, interval_h: 72, note: "CrCl 10–30: 2.5 mg twice weekly (every 3–4 days)" }, { crcl_min: 0, crcl_max: 9.999, action: "avoid", note: "CrCl under 10 or haemodialysis: contraindicated [FDA]" }], flags: ["Evening", "2.5 mg may be enough"] }),
    C("levocetirizine", "c6", "Urticaria 6–11 years — 2.5 mg once daily (evening)", "PO", pop(72, 144, null, null), "fixed", 2.5, 24, { caps: { max_single: 2.5, unit: "mg" }, formulations: [{ form: "solution", strength: 0.5, unit: "mg/mL" }, { form: "tab", strength: 5, unit: "mg/tab" }], rounding: "0.5 mL", renal: [{ crcl_min: 0, crcl_max: 79.999, action: "avoid", note: "Children 6 months–11 years with renal impairment: contraindicated [FDA]" }], flags: ["Do not exceed 2.5 mg"] }),
    C("levocetirizine", "c05", "6 months–5 years — 1.25 mg once daily (evening)", "PO", pop(6, 72, null, null), "fixed", 1.25, 24, { caps: { max_single: 1.25, unit: "mg" }, formulations: [{ form: "solution", strength: 0.5, unit: "mg/mL" }], rounding: "0.5 mL", renal: [{ crcl_min: 0, crcl_max: 79.999, action: "avoid", note: "Children 6 months–11 years with renal impairment: contraindicated [FDA]" }], flags: ["Do not exceed 1.25 mg", "Urticaria 6 months–5 y; allergic rhinitis 6 months–2 y"] })
  ],
  sources: [["FDA", "XYZAL (levocetirizine) tablets and oral solution — FDA label (DailyMed)", L2_DM("1673f7ff-0c7c-4403-86cf-c05eb1475222")], NEML_SRC],
  dose: { tagline: "Once-nightly antihistamine — renally dosed; strict child ceilings (2.5 mg at 6–11 y, 1.25 mg under 6 y).",
    adult: [{ ind: "Chronic urticaria (12 years+)", text: "5 mg once daily in the evening; lower by CrCl.", calc: ["a12"] }],
    child: [{ ind: "Urticaria 6–11 years", text: "2.5 mg once daily — never more.", calc: ["c6"] }, { ind: "6 months–5 years", text: "1.25 mg (2.5 mL) once daily — never more.", calc: ["c05"] }] }
});

FDB_M("levodopa", {
  inn: "Levodopa", atc: "N04BA01", cls: "Dopamine precursor (with carbidopa, a peripheral decarboxylase inhibitor)",
  linked: [],
  forms: ["Carbidopa-levodopa tablets 10/100, 25/100, 25/250 mg (SINEMET 25-250 no longer marketed — use another carbidopa-levodopa product) [FDA].", "Levodopa inhalation powder 42 mg capsules for the INBRIJA inhaler [FDA]."],
  moa: "Crosses into the brain and is converted to dopamine; carbidopa blocks peripheral conversion, so less nausea and more levodopa reaches the brain [FDA].",
  pk: ["Peripheral dopa decarboxylase is saturated by carbidopa at about 70–100 mg a day — under this, nausea and vomiting are more likely [FDA]."],
  ind: { adult: ["Parkinson's disease, post-encephalitic parkinsonism, symptomatic parkinsonism after carbon monoxide or manganese intoxication (carbidopa-levodopa) [FDA].", "Intermittent OFF episodes in Parkinson's disease on carbidopa-levodopa (inhaled levodopa) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Safety and effectiveness not established [FDA]."] },
  adult: [["Start (carbidopa-levodopa)", "One 25/100 tablet three times a day (75 mg carbidopa/day). Increase by one tablet every day or every other day up to eight 25/100 tablets a day. With 10/100: one tablet three or four times a day (often too little carbidopa) [FDA]."], ["Maintenance", "Give at least 70–100 mg carbidopa a day. For more levodopa, use 25/250; increase by ½–1 tablet every day or every other day up to eight tablets a day. Carbidopa over 200 mg/day: limited experience [FDA]."], ["Switching from plain levodopa", "Stop levodopa at least 12 hours before. Give about 25% of the previous levodopa dose: under 1,500 mg/day levodopa → one 25/100 three or four times a day; over 1,500 mg → one 25/250 three or four times a day [FDA]."], ["Inhaled levodopa (OFF episodes)", "Two 42 mg capsules (84 mg) inhaled as needed, up to 5 times a day; maximum 84 mg per OFF period and 420 mg a day [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Non-selective MAO inhibitors: contraindicated — stop at least 2 weeks before [FDA]. Check vitamin B6 before and during treatment; supplement if low [FDA]. Pyridoxine does not reverse overdose [FDA]." },
  tox: { human: "As for levodopa overdose [FDA].", animal: LD, manage: "Supportive with ECG monitoring for arrhythmia; pyridoxine is not effective [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Non-selective MAO inhibitors (stop at least 2 weeks before) [FDA].", "Narrow-angle glaucoma; suspicious skin lesions or history of melanoma [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dyskinesias (sooner and at lower doses than with plain levodopa), nausea [FDA].", "Inhaled: cough, upper respiratory infection, discoloured sputum [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hyperpyrexia and confusion (NMS-like) on sudden dose reduction or withdrawal [FDA]", "Falling asleep during daily activities; hallucinations; impulse control disorders [FDA] [UNVERIFIED-KNOWLEDGE]", "Seizures with vitamin B6 deficiency [FDA]"] },
  monitor: ["Involuntary movements during titration — blepharospasm may be an early sign of excess dose [FDA].", "Vitamin B6 levels [FDA].", "Watch closely if stopped suddenly, especially on antipsychotics [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: levodopa 250 mg + carbidopa 25 mg tablet [BT-NEML].", strengths: "Carbidopa-levodopa 25/250 mg tablet.", stg: "Bhutan STG 2024 lists levodopa among drugs causing intoxication/confusion [BT-STG]." },
  calc: [
    C("levodopa", "start", "Parkinson's — start one 25/100 tablet three times a day", "PO", ADULT, "fixed", 100, 8, { caps: { max_single: 100, unit: "mg" }, formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets (25/100)", flags: ["Dose shown = levodopa; each 25/100 tablet also gives 25 mg carbidopa", "Increase by 1 tablet every day or every other day, up to 8 tablets/day", "Keep carbidopa at least 70–100 mg/day"] }),
    C("levodopa", "inh", "OFF episode — inhaled levodopa 84 mg (2 capsules)", "INH", ADULT, "fixed", 84, null, { caps: { max_single: 84, max_daily: 420, unit: "mg" }, formulations: [{ form: "cap", strength: 42, unit: "mg/cap" }], rounding: "Whole capsules — inhaler only, never swallow", flags: ["As needed, up to 5 times a day", "Maximum 420 mg a day"] })
  ],
  sources: [["FDA", "SINEMET (carbidopa-levodopa) tablets — FDA label (DailyMed)", L2_DM("9b17b028-964a-473c-823d-81423535bd66")], ["FDA", "INBRIJA (levodopa inhalation powder) — FDA label (DailyMed)", L2_DM("077c0f39-a3a2-4b2b-a184-09131889dcfb")], NEML_SRC, STG_SRC],
  dose: { tagline: "Parkinson's mainstay — start 25/100 three times a day; never stop abruptly (NMS-like crisis).",
    cautionTitle: "Never stop suddenly", caution: "Sporadic cases of hyperpyrexia and confusion have been associated with dose reductions and withdrawal of SINEMET. Observe patients carefully if abrupt reduction or discontinuation is required, especially if receiving neuroleptics [FDA].",
    adult: [{ ind: "Parkinson's disease", text: "Carbidopa-levodopa 25/100 three times a day; titrate to response (up to 8 tablets/day).", calc: ["start"] }, { ind: "OFF episodes", text: "Inhaled levodopa 84 mg as needed, up to 5 times a day.", calc: ["inh"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("levoketoconazole", {
  inn: "Levoketoconazole", atc: "H02CA04", cls: "Cortisol synthesis inhibitor", risk: "Hepatotoxicity and QT prolongation (boxed)",
  linked: [],
  forms: ["Tablets 150 mg [FDA]."],
  moa: "2S,4R enantiomer of ketoconazole; inhibits adrenal steroidogenesis enzymes and lowers cortisol [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life 3–4 h; cortisol suppression may outlast the 4–6 h half-life [FDA]."],
  ind: { adult: ["Endogenous hypercortisolaemia in adults with Cushing's syndrome when surgery is not an option or has not cured [FDA].", "Not approved for fungal infections [FDA]."], paed: [NEP] },
  adult: [["Before starting", "Liver tests (ALT, AST, bilirubin) and ECG; correct low potassium and magnesium [FDA]."], ["Dose", "150 mg twice daily, with or without food. Increase by 150 mg a day no more often than every 2–3 weeks, by 24-h urine free cortisol and tolerability. Maximum 1,200 mg/day (600 mg twice daily). May reduce to 150 mg once daily for tolerability [FDA]."], ["If no control", "If urine free cortisol stays high at 1,200 mg/day or not tolerated: consider stopping and switching [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Contraindicated in cirrhosis, acute or poorly controlled chronic liver disease, baseline AST/ALT over 3 × ULN, recurrent symptomatic gallstones, prior azole liver injury, extensive liver metastases [FDA].", pregnancy: "Embryotoxic and teratogenic in animals (racemic ketoconazole); weigh benefit [FDA]. Do not breastfeed during treatment and for 1 day after [FDA].", other: "Strong CYP3A4 inhibitors or inducers: avoid from 2 weeks before and during. Sensitive CYP3A4/P-gp substrates: contraindicated or not recommended. Atorvastatin: lowest dose. Metformin: monitor [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; activated charcoal within the first hour [FDA]." },
  contra: ["Cirrhosis, acute or poorly controlled chronic liver disease, AST/ALT over 3 × ULN, recurrent symptomatic cholelithiasis, prior ketoconazole/azole liver injury, extensive metastatic liver disease [FDA].", "Drugs that prolong QT and are CYP3A4 substrates; QTcF over 470 ms; history of torsades, ventricular tachycardia or fibrillation, long QT [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to levoketoconazole or ketoconazole [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea/vomiting, hypokalaemia, haemorrhage, headache, hypertension, abdominal pain, fatigue (over 20%) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity — drug-induced liver injury in 13% [FDA]", "QT prolongation [FDA]", "Hypocortisolism (adrenal insufficiency) [FDA]", "Low testosterone [FDA]"] },
  monitor: ["Liver tests weekly at first, then by label schedule [FDA] [UNVERIFIED-KNOWLEDGE].", "ECG before, during titration and after; potassium and magnesium [FDA].", "Two 24-h urine free cortisol collections every 2–3 weeks while titrating, then every 1–2 months [FDA].", "Signs of low cortisol [FDA]."],
  local: notBT,
  calc: [C("levoketoconazole", "start", "Cushing's — start 150 mg twice daily", "PO", ADULT, "fixed", 150, 12, { caps: { max_single: 600, max_daily: 1200, unit: "mg" }, formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Increase by 150 mg/day no more often than every 2–3 weeks", "Maximum 600 mg twice daily", "Baseline liver tests and ECG; correct K and Mg first"] })],
  sources: [["FDA", "RECORLEV (levoketoconazole) tablets — FDA label (DailyMed)", L2_DM("d4c5fead-bc4a-fb02-e053-2a95a90ae4fc")], NEML_SRC],
  dose: { tagline: "Cortisol blocker for Cushing's — fatal liver injury and QT risk: liver tests and ECG before and during.",
    boxedTitle: "Hepatotoxicity and QT prolongation", boxed: "Hepatotoxicity: • Cases of hepatotoxicity with a fatal outcome or requiring liver transplantation have been reported with use of oral ketoconazole. Some patients had no obvious risk factors for liver disease. Serious hepatotoxicity has been reported in patients receiving RECORLEV. • RECORLEV is contraindicated in patients with cirrhosis, acute liver disease or poorly controlled chronic liver disease, recurrent symptomatic cholelithiasis, a prior history of drug induced liver injury due to ketoconazole or any azole antifungal therapy that required discontinuation of treatment, or extensive metastatic liver disease. • Evaluate liver enzymes prior to and during treatment. Interrupt RECORLEV treatment immediately if signs of hepatotoxicity occur. QT Prolongation: • RECORLEV is associated with dose-related QT interval prolongation. QT interval prolongation may lead to life-threatening ventricular dysrhythmias such as torsades de pointes. • Coadministration of RECORLEV with other drugs that prolong the QT interval associated with ventricular arrhythmias, including torsades de pointes, and use in patients with a prolonged QTcF interval of greater than 470 msec at baseline, history of torsades de pointes, ventricular tachycardia, ventricular fibrillation, or long QT syndrome (including first-degree family history) are contraindicated. • Perform an ECG and correct hypokalemia and hypomagnesemia prior to and during treatment. Temporarily discontinue RECORLEV if QTcF interval exceeds 500 msec [FDA].",
    adult: [{ ind: "Cushing's syndrome", text: "150 mg twice daily; titrate every 2–3 weeks by urine free cortisol to max 600 mg twice daily.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("levomilnacipran", {
  inn: "Levomilnacipran", atc: "N06AX28", cls: "Serotonin–noradrenaline reuptake inhibitor (SNRI)",
  linked: [],
  forms: ["Extended-release capsules 20, 40, 80, 120 mg [FDA]."],
  moa: "Inhibits serotonin and noradrenaline reuptake; exact antidepressant mechanism unknown [FDA].",
  pk: ["Half-life about 12 hours [FDA].", "Strong CYP3A4 inhibitors: maximum 80 mg once daily [FDA]."],
  ind: { adult: ["Major depressive disorder in adults [FDA].", "Not approved for fibromyalgia [FDA]."], paed: ["Not approved in children [FDA]."] },
  adult: [["Depression", "20 mg once daily for 2 days, then 40 mg once daily. Increase by 40 mg at intervals of 2 days or more. Range 40–120 mg once daily; maximum 120 mg. Swallow whole — do not open, chew or crush [FDA]."], ["Kidney", "CrCl 60–89: no change. 30–59: maximum 80 mg daily. 15–29: maximum 40 mg daily. ESRD: not recommended [FDA]."], ["Stopping", "Reduce gradually [FDA]."]],
  paed: { tiers: ["Not approved [FDA]."], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "CrCl 30–59: max 80 mg; 15–29: max 40 mg; ESRD: not recommended [FDA].", hepatic: NEP, pregnancy: "Third-trimester exposure: neonatal adaptation problems; SNRIs near delivery linked to postpartum haemorrhage (under 2-fold) [FDA].", other: "MAOIs: contraindicated (14 days after an MAOI; 7 days after stopping levomilnacipran). Strong CYP3A4 inhibitors: max 80 mg [FDA]." },
  tox: { human: "Ingestions up to 360 mg/day in trials, none fatal [FDA].", animal: LD, manage: "Supportive; no antidote; consider multiple-drug ingestion; large volume of distribution [FDA]." },
  contra: ["Hypersensitivity to levomilnacipran, milnacipran or excipients [FDA].", "MAOIs for psychiatric disorders — together, within 7 days of stopping levomilnacipran, or within 14 days of stopping an MAOI [FDA].", "Linezolid or IV methylene blue [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, constipation, hyperhidrosis, raised heart rate, erectile dysfunction, tachycardia, vomiting, palpitations [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts in young people [FDA]", "Serotonin syndrome [FDA]", "Raised blood pressure and heart rate [FDA]", "Bleeding with NSAIDs, aspirin, anticoagulants [FDA]", "Angle-closure glaucoma, urinary retention, mania, seizures, hyponatraemia [FDA]"] },
  monitor: ["Mood and suicidality, especially early and after dose changes [FDA].", "Blood pressure and heart rate [FDA].", "Sodium in the elderly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("levomilnacipran", "start", "Depression — start 20 mg once daily (2 days)", "PO", ADULT, "fixed", 20, 24, { caps: { max_single: 20, unit: "mg" }, formulations: [{ form: "cap", strength: 20, unit: "mg/cap" }], rounding: "Whole capsules — swallow whole", flags: ["Then 40 mg once daily"] }),
    C("levomilnacipran", "maint", "Depression — 40–120 mg once daily", "PO", ADULT, "fixed", 40, 24, { dose: { value: 40, unit: "mg", per: "dose", value_max: 120 }, caps: { max_single: 120, unit: "mg" }, formulations: [{ form: "cap", strength: 40, unit: "mg/cap" }], rounding: "Whole capsules — swallow whole", renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", set_value: 40, set_value_max: 80, note: "CrCl 30–59: maximum 80 mg once daily" }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 40, note: "CrCl 15–29: maximum 40 mg once daily" }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "End-stage renal disease: not recommended [FDA]" }], flags: ["Increase by 40 mg every 2 days or more", "Strong CYP3A4 inhibitor: maximum 80 mg"] })
  ],
  sources: [["FDA", "FETZIMA (levomilnacipran) extended-release capsules — FDA label (DailyMed)", L2_DM("f371258d-91b3-4b6a-ac99-434a1964c3af")], NEML_SRC],
  dose: { tagline: "Once-daily SNRI — 40–120 mg; cap by kidney function; watch BP, pulse and mood.",
    boxedTitle: "Suicidal thoughts and behaviors", boxed: "Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors. FETZIMA is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression", text: "20 mg × 2 days, then 40 mg; up to 120 mg once daily.", calc: ["start", "maint"] }],
    child: [{ ind: "Children", text: "Not approved." }] }
});

FDB_M("levothyroxine", {
  inn: "Levothyroxine sodium", atc: "H03AA01", cls: "Thyroid hormone (synthetic T4)",
  linked: [],
  forms: ["Tablets 25, 50, 75, 88, 100, 112, 125, 137, 150, 175, 200, 300 mcg [FDA]."],
  moa: "Synthetic T4; converted to T3, which binds nuclear thyroid receptors and controls DNA transcription and protein synthesis [FDA].",
  pk: ["Long half-life; peak effect may take 4–6 weeks [FDA].", "Absorption reduced by many drugs and foods (iron, calcium, antacids, soy formula) [FDA]."],
  ind: { adult: ["Hypothyroidism — primary, secondary, tertiary, congenital or acquired [FDA].", "Adjunct to surgery and radioiodine for TSH suppression in well-differentiated thyroid cancer [FDA].", "Not for benign nodules or goitre in iodine-sufficient patients; not for obesity or weight loss [FDA]."], paed: ["Congenital or acquired hypothyroidism [FDA]."] },
  adult: [["How to take", "Once daily on an empty stomach, ½–1 hour before breakfast, with a full glass of water. At least 4 hours apart from drugs that block absorption [FDA]."], ["Primary hypothyroidism (healthy, not elderly, short history)", "Full replacement: about 1.6 mcg/kg/day (e.g. 100–125 mcg for 70 kg). Adjust by 12.5–25 mcg every 4–6 weeks to normal TSH. Over 200 mcg/day seldom needed [FDA]."], ["Elderly or cardiac disease", "Start 12.5–25 mcg/day; increase every 6–8 weeks. Full dose may be under 1 mcg/kg/day [FDA]."], ["Severe longstanding hypothyroidism", "Start 12.5–25 mcg/day; adjust by 12.5–25 mcg every 2–4 weeks [FDA]."], ["Secondary / tertiary", "Monitor free T4 (upper half of normal), not TSH [FDA]."], ["Pregnancy", "Pre-existing: check TSH and free T4 when pregnancy confirmed and each trimester; raise by 12.5–25 mcg/day if TSH high; back to pre-pregnancy dose after delivery. New onset: full dose 1.6 mcg/kg/day if moderate–severe [FDA]."]],
  paed: { tiers: ["0–3 months: 10–15 mcg/kg/day [FDA].", "3–6 months: 8–10 mcg/kg/day [FDA].", "6–12 months: 6–8 mcg/kg/day [FDA].", "1–5 years: 5–6 mcg/kg/day [FDA].", "6–12 years: 4–5 mcg/kg/day [FDA].", "Over 12 years, growth and puberty incomplete: 2–3 mcg/kg/day [FDA].", "Growth and puberty complete: 1.6 mcg/kg/day [FDA].", "Newborns at risk of heart failure: lower start. Children at risk of hyperactivity: start at ¼ of the full dose, add ¼ each week [FDA].", "Crush the tablet into 5–10 mL water; give at once by spoon or dropper; not in soy formula [FDA]."], transition: "Growth and puberty complete: 1.6 mcg/kg/day.", calcNote: "Start at full dose in most children." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Needs often rise — monitor TSH each trimester; do not stop [FDA].", other: "Uncorrected adrenal insufficiency: give glucocorticoid first. Diabetes: may need more insulin/antidiabetic. Warfarin effect increases [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hyperthyroid features, confusion; cerebral embolism, shock, coma, death reported. Seizures in a 3-year-old after 3.6 mg. Symptoms may be delayed several days [FDA].", animal: LD, manage: "Reduce or stop temporarily; supportive treatment [FDA]." },
  contra: ["Uncorrected adrenal insufficiency [FDA]."],
  ae: { common: ["Mostly over-replacement: weight loss, heat intolerance, palpitations, tremor, insomnia, diarrhoea [FDA]."], serious: ["Atrial fibrillation and cardiac events in the elderly and heart disease [FDA]", "Bone loss with over-replacement [FDA]", "Adrenal crisis if adrenal insufficiency untreated [FDA]"] },
  monitor: ["TSH 6–8 weeks after any change; then every 6–12 months (adults) [FDA] [UNVERIFIED-KNOWLEDGE].", "Children: TSH and free T4 closely; growth and development [FDA] [UNVERIFIED-KNOWLEDGE].", "Free T4 only in central hypothyroidism [FDA]."],
  local: { neml: "On the Bhutan NEML 2025 as thyroxine 50 mcg and 25 mcg tablets (the 2025 list changed 100 mcg to 50 mcg) [BT-NEML].", strengths: "Thyroxine 25 mcg and 50 mcg tablets.", stg: "Bhutan STG 2024: hypothyroidism → thyroxine replacement; monitor thyroid function regularly and adjust the dose [BT-STG]." },
  calc: [
    C("levothyroxine", "adult", "Hypothyroidism adult — full replacement 1.6 mcg/kg/day", "PO", ADULT, "mg_per_kg", 1.6, 24, { dose: { value: 1.6, unit: "mcg", per: "day" }, divided_doses: 1, weight_basis: "actual", formulations: T4_ADULT, rounding: "Nearest tablet strength (12.5–25 mcg steps)", flags: ["Healthy, not elderly, short history only", "Elderly or heart disease: start 12.5–25 mcg instead", "Empty stomach, ½–1 h before breakfast"] }),
    C("levothyroxine", "low", "Elderly / cardiac / longstanding — start 12.5–25 mcg once daily", "PO", ADULT, "fixed", 12.5, 24, { dose: { value: 12.5, unit: "mcg", per: "dose", value_max: 25 }, formulations: [{ form: "tab", strength: 25, unit: "mcg/tab" }], rounding: "Half or whole 25 mcg tablet", flags: ["Increase every 6–8 weeks (elderly/cardiac) or every 2–4 weeks (severe longstanding)"] }),
    C("levothyroxine", "m0", "Hypothyroidism 0–3 months — 10–15 mcg/kg/day", "PO", pop(0, 3, null, null), "mg_per_kg", 10, 24, { dose: { value: 10, unit: "mcg", per: "day", value_max: 15 }, divided_doses: 1, formulations: T4_TABS, rounding: "Nearest tablet fraction — crush into 5–10 mL water", flags: ["At risk of heart failure: lower start", "Not in soy formula"] }),
    C("levothyroxine", "m3", "Hypothyroidism 3–6 months — 8–10 mcg/kg/day", "PO", pop(3, 6, null, null), "mg_per_kg", 8, 24, { dose: { value: 8, unit: "mcg", per: "day", value_max: 10 }, divided_doses: 1, formulations: T4_TABS, rounding: "Nearest tablet fraction — crush into 5–10 mL water" }),
    C("levothyroxine", "m6", "Hypothyroidism 6–12 months — 6–8 mcg/kg/day", "PO", pop(6, 12, null, null), "mg_per_kg", 6, 24, { dose: { value: 6, unit: "mcg", per: "day", value_max: 8 }, divided_doses: 1, formulations: T4_TABS, rounding: "Nearest tablet fraction — crush into 5–10 mL water" }),
    C("levothyroxine", "y1", "Hypothyroidism 1–5 years — 5–6 mcg/kg/day", "PO", pop(12, 72, null, null), "mg_per_kg", 5, 24, { dose: { value: 5, unit: "mcg", per: "day", value_max: 6 }, divided_doses: 1, formulations: T4_TABS, rounding: "Nearest tablet fraction", flags: ["Risk of hyperactivity: start at ¼ dose, add ¼ weekly"] }),
    C("levothyroxine", "y6", "Hypothyroidism 6–12 years — 4–5 mcg/kg/day", "PO", pop(72, 156, null, null), "mg_per_kg", 4, 24, { dose: { value: 4, unit: "mcg", per: "day", value_max: 5 }, divided_doses: 1, formulations: T4_TABS, rounding: "Nearest tablet fraction", flags: ["Risk of hyperactivity: start at ¼ dose, add ¼ weekly"] }),
    C("levothyroxine", "y13", "Over 12 years, growth/puberty incomplete — 2–3 mcg/kg/day", "PO", pop(156, 216, null, null), "mg_per_kg", 2, 24, { dose: { value: 2, unit: "mcg", per: "day", value_max: 3 }, divided_doses: 1, formulations: T4_TABS, rounding: "Nearest tablet strength", flags: ["Growth and puberty complete: 1.6 mcg/kg/day"] })
  ],
  sources: [["FDA", "Levothyroxine sodium tablets (NDA021342) — FDA label (DailyMed)", L2_DM("1aaa327d-bb10-4815-8bd3-d8c9edc6c9db")], NEML_SRC, STG_SRC],
  dose: { tagline: "Thyroid replacement — 1.6 mcg/kg/day in healthy adults, much more per kg in infants; start low in the elderly and heart disease.",
    boxedTitle: "Not for treatment of obesity or for weight loss", boxed: "Thyroid hormones, including levothyroxine sodium tablets, either alone or with other therapeutic agents, should not be used for the treatment of obesity or for weight loss. In euthyroid patients, doses within the range of daily hormonal requirements are ineffective for weight reduction. Larger doses may produce serious or even life threatening manifestations of toxicity, particularly when given in association with sympathomimetic amines such as those used for their anorectic effects [FDA].",
    adult: [{ ind: "Hypothyroidism", text: "1.6 mcg/kg/day once daily before breakfast; titrate by 12.5–25 mcg to TSH.", calc: ["adult"] }, { ind: "Elderly / heart disease", text: "Start 12.5–25 mcg daily; increase slowly.", calc: ["low"] }],
    child: [{ ind: "0–3 months", text: "10–15 mcg/kg/day.", calc: ["m0"] }, { ind: "3–6 months", text: "8–10 mcg/kg/day.", calc: ["m3"] }, { ind: "6–12 months", text: "6–8 mcg/kg/day.", calc: ["m6"] }, { ind: "1–5 years", text: "5–6 mcg/kg/day.", calc: ["y1"] }, { ind: "6–12 years", text: "4–5 mcg/kg/day.", calc: ["y6"] }, { ind: "Over 12 years (growing)", text: "2–3 mcg/kg/day.", calc: ["y13"] }] }
});

FDB_M("lifileucel", {
  inn: "Lifileucel", atc: "L01XL11", cls: "Tumour-derived autologous T-cell immunotherapy (TIL)", risk: ONC,
  linked: [],
  forms: ["Cell suspension for IV infusion: 7.5–72 × 10⁹ viable cells in 1–4 patient-specific bags [FDA]."],
  moa: "Autologous tumour-infiltrating lymphocytes expanded outside the body and returned to attack the melanoma [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Unresectable or metastatic melanoma after a PD-1 antibody (and a BRAF ± MEK inhibitor if BRAF V600-positive) — accelerated approval [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "Single infusion of 7.5–72 × 10⁹ viable cells, the entire dose, after a lymphodepleting regimen [FDA]."], ["Setting", "Inpatient with an intensive care unit and cardiopulmonary/ICU specialists available [FDA]."], ["Around the infusion", "Premedicate with paracetamol and an H1 antihistamine; avoid prophylactic systemic steroids; no leukocyte-depleting filter; give IL-2 (aldesleukin) after. Filgrastim from day 1 until ANC over 1,000/mm³ for 3 days [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Cell product — no calculator." },
  adj: { renal: "Monitor renal function throughout [FDA].", hepatic: NEP, pregnancy: "Not recommended in pregnancy; pregnancy test before treatment [FDA].", other: "Verify patient identity before infusion — autologous use only [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Chills, fever, fatigue, tachycardia, diarrhoea, febrile neutropenia, oedema, rash, hypotension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Treatment-related death 7.5% [FDA]", "Prolonged severe cytopenia (45.5% grade 3+ beyond 30 days) [FDA]", "Severe infection; internal organ haemorrhage [FDA]", "Cardiopulmonary and renal impairment [FDA]", "Hypersensitivity during infusion [FDA]"] },
  monitor: ["Blood counts and bleeding; infection; cardiopulmonary and renal function throughout [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "AMTAGVI (lifileucel) suspension for IV infusion — FDA label (DailyMed)", L2_DM("4121bd3f-2d6e-3bdd-e063-6294a90a3088")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "One-time TIL cell therapy for melanoma — ICU-level inpatient care; 7.5% treatment-related deaths.",
    boxedTitle: "Treatment-related mortality, prolonged severe cytopenia, severe infection, cardiopulmonary and renal impairment", boxed: "Monitor patients for prolonged severe cytopenia and monitor for internal organ hemorrhage. Administer filgrastim or a biosimilar product to patients beginning Day 1 after AMTAGVI and continuing daily until the absolute neutrophil count (ANC) is greater than 1000 per mm³ for 3 consecutive days, or per institutional standard. Treat severe infections. Monitor cardiopulmonary and renal functions throughout the treatment course. Administer in an inpatient hospital setting. An intensive care facility and specialists skilled in cardiopulmonary or intensive care medicine must be available [FDA].",
    adult: [{ ind: "Metastatic melanoma", text: "Single infusion 7.5–72 × 10⁹ viable cells after lymphodepletion, then IL-2." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("lifitegrast", {
  inn: "Lifitegrast", atc: "S01XA25", cls: "LFA-1 antagonist (eye drops)",
  linked: [],
  forms: ["Ophthalmic solution 5% (50 mg/mL), single-use containers [FDA]."],
  moa: "Lymphocyte function-associated antigen-1 (LFA-1) antagonist; blocks T-cell binding to ICAM-1 and reduces ocular surface inflammation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Low systemic exposure after eye use [FDA]."],
  ind: { adult: ["Signs and symptoms of dry eye disease [FDA]."], paed: [NEP] },
  adult: [["Dry eye", "1 drop in each eye twice daily, about 12 hours apart, from a single-use container; discard after use [FDA]."], ["Contact lenses", "Remove before; reinsert 15 minutes after [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "No human data; animal findings at very high IV exposures; systemic exposure from eye use is low [FDA].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Hypersensitivity to lifitegrast or ingredients [FDA]."],
  ae: { common: ["Instillation-site irritation, altered taste (dysgeusia), reduced visual acuity [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis, tongue swelling [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptom response [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "XIIDRA (lifitegrast ophthalmic solution) 5% — FDA label (DailyMed)", L2_DM("8589d376-ac10-4ddb-9c53-2e0c8d5675c4")], NEML_SRC],
  dose: { tagline: "Anti-inflammatory dry-eye drop — 1 drop each eye twice daily.",
    adult: [{ ind: "Dry eye disease", text: "1 drop in each eye twice daily, ~12 h apart." }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("linaclotide", {
  inn: "Linaclotide", atc: "A06AX04", cls: "Guanylate cyclase-C agonist",
  linked: [],
  forms: ["Capsules 72, 145, 290 mcg [FDA]."],
  moa: "Activates guanylate cyclase-C on intestinal cells → more fluid secretion and faster transit [UNVERIFIED-KNOWLEDGE].",
  pk: ["Negligible systemic absorption [FDA]."],
  ind: { adult: ["IBS with constipation (IBS-C) [FDA].", "Chronic idiopathic constipation (CIC) [FDA]."], paed: ["IBS-C: 7 years and older [FDA].", "Functional constipation: 2 years and older [FDA]."] },
  adult: [["IBS-C", "290 mcg once daily [FDA]."], ["Chronic idiopathic constipation", "145 mcg once daily; 72 mcg once daily by presentation or tolerability [FDA]."], ["How to take", "Empty stomach, at least 30 min before a meal, same time each day. Do not crush or chew; may open onto applesauce or into water (also for NG/G-tube) [FDA]."]],
  paed: { tiers: ["IBS-C 7 years and older: 145 mcg once daily [FDA].", "Functional constipation 2 years and older: 72 mcg once daily [FDA].", "Under 2 years: contraindicated [FDA]."], transition: "Adults: by indication.", calcNote: "Fixed capsule doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Negligible absorption — fetal exposure not expected [FDA].", other: "Severe diarrhoea: stop dosing and rehydrate [FDA]." },
  tox: { human: "Single 2,897 mcg doses in 22 people: same profile as usual, mainly diarrhoea [FDA].", animal: "Neonatal mice: deaths from dehydration after one adult-equivalent dose [FDA].", manage: "Supportive; rehydrate [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Age under 2 years (serious dehydration) [FDA].", "Known or suspected mechanical GI obstruction [FDA]."],
  ae: { common: ["Diarrhoea (most common), abdominal pain, flatulence, distension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe diarrhoea (2% of adults) [FDA]", "Dehydration in young children [FDA]"] },
  monitor: ["Diarrhoea and hydration [FDA]."],
  local: notBT,
  calc: [
    C("linaclotide", "ibs", "IBS-C adult — 290 mcg once daily", "PO", ADULT, "fixed", 290, 24, { dose: { value: 290, unit: "mcg", per: "dose" }, caps: { max_single: 290, unit: "mcg" }, formulations: [{ form: "cap", strength: 290, unit: "mcg/cap" }], rounding: "Whole capsules", flags: ["Empty stomach, 30 min before a meal"] }),
    C("linaclotide", "cic", "Chronic idiopathic constipation — 145 mcg once daily (or 72)", "PO", ADULT, "fixed", 145, 24, { dose: { value: 145, unit: "mcg", per: "dose" }, caps: { max_single: 145, unit: "mcg" }, formulations: [{ form: "cap", strength: 145, unit: "mcg/cap" }], rounding: "Whole capsules", flags: ["72 mcg once daily by presentation or tolerability"] }),
    C("linaclotide", "ibs7", "IBS-C 7–17 years — 145 mcg once daily", "PO", pop(84, 216, null, null), "fixed", 145, 24, { dose: { value: 145, unit: "mcg", per: "dose" }, caps: { max_single: 145, unit: "mcg" }, formulations: [{ form: "cap", strength: 145, unit: "mcg/cap" }], rounding: "Whole capsules" }),
    C("linaclotide", "fc2", "Functional constipation 2–17 years — 72 mcg once daily", "PO", pop(24, 216, null, null), "fixed", 72, 24, { dose: { value: 72, unit: "mcg", per: "dose" }, caps: { max_single: 72, unit: "mcg" }, formulations: [{ form: "cap", strength: 72, unit: "mcg/cap" }], rounding: "Whole capsules", flags: ["Contraindicated under 2 years"] })
  ],
  sources: [["FDA", "LINZESS (linaclotide) capsules — FDA label (DailyMed)", L2_DM("2d09771d-69da-4c9d-92b6-74374ffa130f")], NEML_SRC],
  dose: { tagline: "Secretagogue for IBS-C and chronic constipation — never under 2 years (fatal dehydration in neonatal animals).",
    boxedTitle: "Risk of serious dehydration in pediatric patients less than 2 years of age", boxed: "LINZESS is contraindicated in patients less than 2 years of age; in nonclinical studies in neonatal mice, administration of a single, clinically relevant adult oral dose of linaclotide caused deaths due to dehydration [FDA].",
    adult: [{ ind: "IBS-C", text: "290 mcg once daily before a meal.", calc: ["ibs"] }, { ind: "Chronic idiopathic constipation", text: "145 mcg (or 72 mcg) once daily.", calc: ["cic"] }],
    child: [{ ind: "IBS-C 7 years+", text: "145 mcg once daily.", calc: ["ibs7"] }, { ind: "Functional constipation 2 years+", text: "72 mcg once daily.", calc: ["fc2"] }] }
});

FDB_M("linagliptin", {
  inn: "Linagliptin", atc: "A10BH05", cls: "DPP-4 inhibitor (gliptin)",
  linked: [],
  forms: ["Tablets 5 mg [FDA]."],
  moa: "Inhibits DPP-4, raising active incretin (GLP-1, GIP) levels → glucose-dependent insulin release and less glucagon [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mainly non-renal elimination — no kidney dose change [UNVERIFIED-KNOWLEDGE].", "Not removed by haemodialysis or peritoneal dialysis [FDA]."],
  ind: { adult: ["Adjunct to diet and exercise for glycaemic control in adult type 2 diabetes [FDA].", "Not for type 1 diabetes; not studied after pancreatitis [FDA]."], paed: [NEP] },
  adult: [["Type 2 diabetes", "5 mg once daily, with or without food [FDA]."], ["With insulin or a sulfonylurea", "Consider lowering their dose to reduce hypoglycaemia [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "No dose adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Limited data; poorly controlled diabetes carries risks [FDA].", other: "Rifampicin and other strong P-gp/CYP3A4 inducers: use another treatment [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Poison centre / toxicologist; dialysis unlikely to help [FDA]." },
  contra: ["Hypersensitivity to linagliptin or excipients (anaphylaxis, angioedema, exfoliative skin reactions, urticaria, bronchial hyperreactivity) [FDA]."],
  ae: { common: ["Nasopharyngitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pancreatitis, including fatal [FDA]", "Hypoglycaemia with insulin or secretagogues [FDA]", "Serious hypersensitivity [FDA]", "Severe disabling arthralgia [FDA]", "Bullous pemphigoid [FDA]", "Heart failure (class signal) [FDA]"] },
  monitor: ["HbA1c; symptoms of pancreatitis; blisters [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("linagliptin", "std", "Type 2 diabetes — 5 mg once daily", "PO", ADULT, "fixed", 5, 24, { caps: { max_single: 5, unit: "mg" }, formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["No kidney adjustment", "Lower insulin/sulfonylurea dose if needed"] })],
  sources: [["FDA", "TRADJENTA (linagliptin) tablets — FDA label (DailyMed)", L2_DM("dfe327e8-f6ab-41e5-bdef-d520118cd83a")], NEML_SRC],
  dose: { tagline: "Once-daily gliptin — 5 mg at any kidney function; stop if pancreatitis or bullous pemphigoid.",
    adult: [{ ind: "Type 2 diabetes", text: "5 mg once daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lincomycin", {
  inn: "Lincomycin", atc: "J01FF02", cls: "Lincosamide antibacterial",
  linked: [],
  forms: ["Injection 300 mg/mL (600 mg in 2 mL) [FDA]."],
  moa: "Binds the 50S ribosomal subunit and inhibits bacterial protein synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not appreciably removed by haemodialysis or peritoneal dialysis [FDA]."],
  ind: { adult: ["Serious infections due to susceptible streptococci, pneumococci and staphylococci — reserved for penicillin-allergic patients or when a penicillin is inappropriate [FDA]."], paed: ["Over 1 month of age, as above [FDA]."] },
  adult: [["IM", "Serious: 600 mg every 24 h. More severe: 600 mg every 12 h or more often [FDA]."], ["IV", "600 mg–1 g every 8–12 h; more for more severe infections; up to 8 g/day in life-threatening cases. Dilute 1 g in at least 100 mL and infuse over at least 1 hour [FDA]."], ["Severe renal impairment", "25–30% of the normal dose [FDA]."]],
  paed: { tiers: ["Over 1 month, IM: 10 mg/kg every 24 h (serious) or every 12 h or more often (more severe) [FDA].", "Over 1 month, IV: 10–20 mg/kg/day in divided doses, diluted and infused as for adults [FDA]."], transition: "Adult doses for adults.", calcNote: "Never as an undiluted IV push." },
  adj: { renal: "Severe renal impairment: 25–30% of the normal dose [FDA].", hepatic: NEP, pregnancy: NEP, other: "Enhances neuromuscular blockers [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Not removed by dialysis [FDA]." },
  contra: ["Hypersensitivity to lincomycin or clindamycin [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["C. difficile diarrhoea and colitis, may be fatal [FDA]", "Severe cardiopulmonary reactions (cardiac arrest, hypotension) when given too concentrated or too fast [FDA]"] },
  monitor: ["Diarrhoea; liver and kidney function and blood counts in long courses [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("lincomycin", "im", "Adult IM — 600 mg every 24 h (serious)", "IM", ADULT, "fixed", 600, 24, { formulations: [{ form: "inj", strength: 300, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "Severe renal impairment: label dose is 25–30% of normal — calculate by hand; the label gives no CrCl cut-off [FDA]" }], flags: ["More severe: 600 mg every 12 h or more often"] }),
    C("lincomycin", "iv", "Adult IV — 600 mg–1 g every 8–12 h (infuse ≥1 h)", "IV", ADULT, "fixed", 600, 12, { dose: { value: 600, unit: "mg", per: "dose", value_max: 1000 }, caps: { max_daily: 8000, unit: "mg" }, formulations: [{ form: "inj", strength: 300, unit: "mg/mL" }], rounding: "0.1 mL (then dilute)", infusion: { duration_h: 1 }, renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "Severe renal impairment: label dose is 25–30% of normal — calculate by hand; the label gives no CrCl cut-off [FDA]" }], flags: ["Or every 8 h", "1 g in at least 100 mL, over at least 1 h", "Maximum 8 g/day"] }),
    C("lincomycin", "cim", "Child over 1 month IM — 10 mg/kg every 24 h", "IM", pop(1, 216, null, null), "mg_per_kg", 10, 24, { formulations: [{ form: "inj", strength: 300, unit: "mg/mL" }], rounding: "0.05 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "Severe renal impairment: label dose is 25–30% of normal — calculate by hand; the label gives no CrCl cut-off [FDA]" }], flags: ["More severe: every 12 h or more often"] }),
    C("lincomycin", "civ", "Child over 1 month IV — 10–20 mg/kg/day divided every 12 h", "IV", pop(1, 216, null, null), "mg_per_kg", 10, 12, { dose: { value: 10, unit: "mg", per: "day", value_max: 20 }, divided_doses: 2, formulations: [{ form: "inj", strength: 300, unit: "mg/mL" }], rounding: "0.05 mL (then dilute)", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "Severe renal impairment: label dose is 25–30% of normal — calculate by hand; the label gives no CrCl cut-off [FDA]" }], flags: ["Label: divided as for adults (every 8–12 h)", "Dilute; infuse over at least 1 h per gram"] })
  ],
  sources: [["FDA", "LINCOCIN (lincomycin) injection — FDA label (DailyMed)", L2_DM("c01906fa-2c73-4c13-9765-2fd06628d263")], NEML_SRC],
  dose: { tagline: "Old lincosamide for penicillin-allergic serious Gram-positive infection — C. difficile risk; always dilute and infuse slowly.",
    boxedTitle: "Clostridioides difficile associated diarrhea", boxed: "Clostridioides difficile associated diarrhea (CDAD) has been reported with use of nearly all antibacterial agents, including LINCOCIN and may range in severity from mild diarrhea to fatal colitis. Treatment with antibacterial agents alters the normal flora of the colon leading to overgrowth of C. difficile. Because lincomycin therapy has been associated with severe colitis which may end fatally, it should be reserved for serious infections where less toxic antimicrobial agents are inappropriate, as described in the INDICATIONS AND USAGE section. It should not be used in patients with nonbacterial infections such as most upper respiratory tract infections. C. difficile produces toxins A and B which contribute to the development of CDAD. Hypertoxin producing strains of C. difficile cause increased morbidity and mortality, as these infections can be refractory to antimicrobial therapy and may require colectomy. CDAD must be considered in all patients who present with diarrhea following antibacterial use. Careful medical history is necessary since CDAD has been reported to occur over two months after the administration of antibacterial agents. If CDAD is suspected or confirmed, ongoing antibacterial use not directed against C. difficile may need to be discontinued. Appropriate fluid and electrolyte management, protein supplementation, antibacterial treatment of C. difficile, and surgical evaluation should be instituted as clinically indicated [FDA].",
    adult: [{ ind: "Serious infection (IM)", text: "600 mg every 24 h (every 12 h if more severe).", calc: ["im"] }, { ind: "Serious infection (IV)", text: "600 mg–1 g every 8–12 h, diluted, over ≥1 h; max 8 g/day.", calc: ["iv"] }],
    child: [{ ind: "Over 1 month (IM)", text: "10 mg/kg every 24 h (every 12 h if more severe).", calc: ["cim"] }, { ind: "Over 1 month (IV)", text: "10–20 mg/kg/day divided.", calc: ["civ"] }] }
});

FDB_M("linerixibat", {
  inn: "Linerixibat", atc: "A05AX08", cls: "Ileal bile acid transporter (IBAT) inhibitor",
  linked: [],
  forms: ["Tablets 40 mg [FDA]."],
  moa: "Blocks the ileal bile acid transporter, lowering bile acid reabsorption and serum bile acids that drive cholestatic itch [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Cholestatic pruritus in adult primary biliary cholangitis [FDA].", "Avoid in decompensated cirrhosis or prior/active hepatic decompensation [FDA]."], paed: [NEP] },
  adult: [["Cholestatic pruritus in PBC", "40 mg twice daily, swallowed whole at least 30 minutes before food or drink (other than water) [FDA]."], ["Missed dose", "Take as soon as possible (at least 30 min before the next meal); if more than 6 hours late, skip [FDA]."], ["Bile acid resins", "Give linerixibat at least 4 hours before or after [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Avoid in decompensated cirrhosis or hepatic decompensation events [FDA].", pregnancy: NEP, other: "Bile acid binding resins: separate by 4 hours [FDA]." },
  tox: { human: "GI reactions rise with dose (4.5 × dose studied) [FDA].", animal: LD, manage: "Stop; monitor; supportive [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Liver test elevations [FDA]", "Fat-soluble vitamin deficiency; bleeding [FDA]", "Fracture (IBAT class) [FDA]"] },
  monitor: ["Baseline and routine liver tests (ALT, AST, total and direct bilirubin, ALP) [FDA].", "Fat-soluble vitamin levels [FDA].", "Bone health [FDA]."],
  local: notBT,
  calc: [C("linerixibat", "std", "PBC itch — 40 mg twice daily", "PO", ADULT, "fixed", 40, 12, { caps: { max_single: 40, unit: "mg" }, formulations: [{ form: "tab", strength: 40, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["At least 30 min before food or drink", "4 h apart from bile acid resins"] })],
  sources: [["FDA", "LYNAVOY (linerixibat) tablets — FDA label (DailyMed)", L2_DM("c00317c8-709c-4707-a6d1-632bff123026")], NEML_SRC],
  dose: { tagline: "IBAT blocker for PBC itch — 40 mg twice daily before meals; not in decompensated cirrhosis.",
    adult: [{ ind: "Cholestatic pruritus (PBC)", text: "40 mg twice daily, 30 min before food.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("liothyronine", {
  inn: "Liothyronine sodium", atc: "H03AA02", cls: "Thyroid hormone (synthetic T3)",
  linked: [],
  forms: ["Tablets 5, 25, 50 mcg [FDA]."],
  moa: "Synthetic T3; binds nuclear thyroid hormone receptors [UNVERIFIED-KNOWLEDGE].",
  pk: ["Shorter half-life and faster action than T4 [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypothyroidism — primary, secondary, tertiary, congenital or acquired [FDA].", "TSH suppression adjunct in well-differentiated thyroid cancer [FDA].", "Thyroid suppression test [FDA].", "Not for obesity, weight loss, benign nodules or goitre [FDA]."], paed: ["Congenital or acquired hypothyroidism [FDA]."] },
  adult: [["Hypothyroidism", "Start 25 mcg once daily; increase by 25 mcg every 1–2 weeks if needed. Usual maintenance 25–75 mcg once daily [FDA]."], ["Elderly or heart disease", "Start 5 mcg once daily; increase by 5 mcg at the same intervals [FDA]."], ["Switching from levothyroxine", "Stop levothyroxine; start liothyronine low and increase gradually [FDA]."], ["Central hypothyroidism", "Monitor serum T3, not TSH [FDA]."]],
  paed: { tiers: ["Start 5 mcg once daily; increase by 5 mcg every 3–4 days to response [FDA].", "Infants a few months old may need 20 mcg/day; at 1 year 50 mcg/day; over 3 years the full adult dose may be needed [FDA].", "At risk of hyperactivity: start at ¼ of full dose, add ¼ weekly [FDA]."], transition: "Over 3 years: adult dose may be needed.", calcNote: "Fixed microgram steps." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Needs may rise — monitor TSH and free T4 each trimester [FDA].", other: "Uncorrected adrenal insufficiency: contraindicated [FDA]." },
  tox: { human: "Hyperthyroid features, confusion; cerebral embolism, seizure, shock, coma, death reported; may be delayed several days [FDA].", animal: LD, manage: "Reduce or stop temporarily; supportive [FDA]." },
  contra: ["Uncorrected adrenal insufficiency [FDA]."],
  ae: { common: ["Over-replacement features: palpitations, tremor, weight loss, heat intolerance [FDA]."], serious: ["Atrial fibrillation in the elderly and heart disease [FDA]", "Bone loss with over-replacement [FDA]"] },
  monitor: ["TSH and T3; clinical state [FDA]."],
  local: notBT,
  calc: [
    C("liothyronine", "adult", "Hypothyroidism adult — start 25 mcg once daily", "PO", ADULT, "fixed", 25, 24, { dose: { value: 25, unit: "mcg", per: "dose" }, formulations: [{ form: "tab", strength: 25, unit: "mcg/tab" }], rounding: "Whole tablets", flags: ["Increase by 25 mcg every 1–2 weeks", "Usual 25–75 mcg once daily"] }),
    C("liothyronine", "low", "Elderly / heart disease — start 5 mcg once daily", "PO", ADULT, "fixed", 5, 24, { dose: { value: 5, unit: "mcg", per: "dose" }, formulations: [{ form: "tab", strength: 5, unit: "mcg/tab" }], rounding: "Whole tablets", flags: ["Increase by 5 mcg steps"] }),
    C("liothyronine", "child", "Child — start 5 mcg once daily", "PO", pop(0, 216, null, null), "fixed", 5, 24, { dose: { value: 5, unit: "mcg", per: "dose" }, formulations: [{ form: "tab", strength: 5, unit: "mcg/tab" }], rounding: "Whole tablets", flags: ["Increase by 5 mcg every 3–4 days", "Infants ~20 mcg/day; 1 year ~50 mcg/day; over 3 years up to adult dose"] })
  ],
  sources: [["FDA", "Liothyronine sodium tablets — FDA label (DailyMed)", L2_DM("115a84c2-0126-4dd7-816e-1873875f1e49")], NEML_SRC],
  dose: { tagline: "Synthetic T3 — 25 mcg start (5 mcg in the elderly, heart disease and children).",
    boxedTitle: "Not for treatment of obesity or for weight loss", boxed: "• Thyroid hormones, including LIOTHYRONINE SODIUM, either alone or with other therapeutic agents, should not be used for the treatment of obesity or for weight loss. • In euthyroid patients, doses within the range of daily hormonal requirements are ineffective for weight reduction. • Larger doses may produce serious or even life-threatening manifestations of toxicity, particularly when given in association with sympathomimetic amines such as those used for their anorectic effects [FDA].",
    adult: [{ ind: "Hypothyroidism", text: "25 mcg once daily; usual 25–75 mcg.", calc: ["adult"] }, { ind: "Elderly / heart disease", text: "5 mcg once daily; 5 mcg steps.", calc: ["low"] }],
    child: [{ ind: "Hypothyroidism", text: "5 mcg once daily; +5 mcg every 3–4 days.", calc: ["child"] }] }
});

FDB_M("liraglutide", {
  inn: "Liraglutide", atc: "A10BJ02", cls: "GLP-1 receptor agonist",
  linked: [],
  forms: ["VICTOZA: 6 mg/mL pen (18 mg/3 mL) delivering 0.6, 1.2, 1.8 mg [FDA].", "SAXENDA: 6 mg/mL 3 mL pen delivering 0.6, 1.2, 1.8, 2.4, 3 mg [FDA]."],
  moa: "Acylated GLP-1 analogue (97% homology); activates the GLP-1 receptor → glucose-dependent insulin release, less glucagon, slower gastric emptying, less appetite [FDA].",
  pk: ["Half-life about 13 hours — once daily [FDA].", "Delays gastric emptying — may affect absorption of oral drugs [FDA]."],
  ind: { adult: ["VICTOZA: type 2 diabetes (glycaemic control); reduce major adverse cardiovascular events in type 2 diabetes with established cardiovascular disease [FDA].", "SAXENDA: chronic weight management — obesity, or overweight with a weight-related condition [FDA]."], paed: ["VICTOZA: type 2 diabetes from 10 years [FDA].", "SAXENDA: 12 years and older with body weight over 60 kg and obesity [FDA]."] },
  adult: [["Type 2 diabetes (VICTOZA)", "0.6 mg SC once daily for 1 week (starter dose — not effective for glucose), then 1.2 mg daily; may increase to 1.8 mg (maximum) after at least 1 week [FDA]."], ["Weight management (SAXENDA)", "Week 1: 0.6 mg; week 2: 1.2; week 3: 1.8; week 4: 2.4; week 5 on: 3 mg daily. Stop if not tolerated at 3 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Missed doses", "Resume with the next dose. If more than 3 days missed (SAXENDA): restart at 0.6 mg and re-titrate [FDA]."], ["Injection", "Abdomen, thigh or upper arm, any time of day; with insulin give separately, never mix [FDA]."]],
  paed: { tiers: ["Type 2 diabetes 10 years+ (VICTOZA): 0.6 mg daily; increase in 0.6 mg steps after at least 1 week if needed; maximum 1.8 mg [FDA].", "Weight 12 years+ over 60 kg (SAXENDA): same weekly escalation to 3 mg (may take up to 8 weeks); 2.4 mg if 3 mg not tolerated [FDA]."], transition: "Same doses as adults.", calcNote: "Pen dial doses." },
  adj: { renal: "No dose adjustment (VICTOZA); monitor kidney function if vomiting or diarrhoea cause volume depletion [FDA].", hepatic: NEP, pregnancy: "Weight-loss use: stop when pregnancy recognised (possible fetal harm) [FDA].", other: "Do not combine with other liraglutide-containing products or GLP-1 agonists. Lower insulin or sulfonylurea doses to reduce hypoglycaemia [FDA]." },
  tox: { human: "Severe nausea, vomiting and hypoglycaemia [FDA].", animal: LD, manage: "Supportive; poison centre [FDA]." },
  contra: ["Personal or family history of medullary thyroid carcinoma or MEN 2 [FDA].", "Serious hypersensitivity to liraglutide or excipients [FDA]."],
  ae: { common: ["Nausea, diarrhoea, vomiting, constipation, decreased appetite, dyspepsia, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thyroid C-cell tumours (rodents) [FDA]", "Acute pancreatitis [FDA]", "Acute gallbladder disease [FDA]", "Hypoglycaemia with insulin/sulfonylurea [FDA]", "Heart rate increase [FDA]", "Acute kidney injury from volume depletion [FDA]", "Severe GI reactions; not in severe gastroparesis [FDA]", "Hypersensitivity, angioedema [FDA]"] },
  monitor: ["Glucose and HbA1c; heart rate; kidney function if dehydrated [FDA].", "Neck mass, dysphagia, hoarseness [FDA]."],
  local: notBT,
  calc: [
    C("liraglutide", "t2start", "Type 2 diabetes (10 y+) — start 0.6 mg SC once daily", "SC", pop(120, null, null, null), "fixed", 0.6, 24, { caps: { max_single: 0.6, unit: "mg" }, formulations: [{ form: "pen", strength: 6, unit: "mg/mL" }], rounding: "Pen dial 0.6 mg", flags: ["Starter dose for 1 week — not effective for glucose in adults", "Then 1.2 mg daily"] }),
    C("liraglutide", "t2", "Type 2 diabetes — maintenance 1.2–1.8 mg SC once daily", "SC", pop(120, null, null, null), "fixed", 1.2, 24, { dose: { value: 1.2, unit: "mg", per: "dose", value_max: 1.8 }, caps: { max_single: 1.8, unit: "mg" }, formulations: [{ form: "pen", strength: 6, unit: "mg/mL" }], rounding: "Pen dial 1.2 or 1.8 mg", flags: ["1.8 mg only after at least 1 week at 1.2 mg", "Maximum 1.8 mg"] }),
    C("liraglutide", "wt", "Weight management — maintenance 3 mg SC once daily (after 4-week escalation)", "SC", pop(144, null, 60.0001, null), "fixed", 3, 24, { caps: { max_single: 3, unit: "mg" }, formulations: [{ form: "pen", strength: 6, unit: "mg/mL" }], rounding: "Pen dial 3 mg", flags: ["Escalate weekly: 0.6 → 1.2 → 1.8 → 2.4 → 3 mg", "Children 12 y+ (over 60 kg): 2.4 mg if 3 mg not tolerated", "Adults may be under 60 kg if overweight with a comorbidity — check the label"] })
  ],
  sources: [["FDA", "VICTOZA (liraglutide) injection — FDA label (DailyMed)", L2_DM("5a9ef4ea-c76a-4d34-a604-27c5b505f5a4")], ["FDA", "SAXENDA (liraglutide) injection — FDA label (DailyMed)", L2_DM("3946d389-0926-4f77-a708-0acb8153b143")], NEML_SRC],
  dose: { tagline: "Daily GLP-1 agonist — Victoza up to 1.8 mg for diabetes, Saxenda up to 3 mg for weight; never with MTC/MEN 2 history.",
    boxedTitle: "Risk of thyroid C-cell tumors", boxed: "• Liraglutide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors at clinically relevant exposures in both genders of rats and mice. It is unknown whether VICTOZA causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans, as the human relevance of liraglutide-induced rodent thyroid C-cell tumors has not been determined. • VICTOZA is contraindicated in patients with a personal or family history of MTC and in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Counsel patients regarding the potential risk for MTC with the use of VICTOZA and inform them of symptoms of thyroid tumors (e.g., a mass in the neck, dysphagia, dyspnea, persistent hoarseness). Routine monitoring of serum calcitonin or using thyroid ultrasound is of uncertain value for early detection of MTC in patients treated with VICTOZA [FDA].",
    adult: [{ ind: "Type 2 diabetes", text: "0.6 mg × 1 week, then 1.2 mg; max 1.8 mg once daily.", calc: ["t2start", "t2"] }, { ind: "Weight management", text: "Escalate weekly from 0.6 mg to 3 mg once daily.", calc: ["wt"] }],
    child: [{ ind: "Type 2 diabetes 10 years+", text: "0.6 mg; 0.6 mg steps weekly; max 1.8 mg.", calc: ["t2start", "t2"] }, { ind: "Obesity 12 years+ (over 60 kg)", text: "Weekly escalation to 3 mg (2.4 mg if 3 mg not tolerated).", calc: ["wt"] }] }
});

FDB_M("lisdexamfetamine", {
  inn: "Lisdexamfetamine", atc: "N06BA12", cls: "CNS stimulant (prodrug of dextroamphetamine)", risk: "Controlled substance (CII) — abuse, misuse and addiction (boxed)",
  linked: [],
  forms: ["Capsules 10, 20, 30, 40, 50, 60, 70 mg [FDA].", "Chewable tablets 10, 20, 30, 40, 50, 60 mg [FDA]."],
  moa: "Prodrug converted to dextroamphetamine; releases noradrenaline and dopamine; exact action in ADHD and BED unknown [FDA].",
  pk: ["Lisdexamfetamine half-life under 1 hour; dextroamphetamine about 8 hours [FDA] [UNVERIFIED-KNOWLEDGE].", "Urinary acidifiers lower and alkalinisers raise amphetamine levels [FDA]."],
  ind: { adult: ["ADHD [FDA].", "Moderate to severe binge eating disorder (BED) [FDA]."], paed: ["ADHD 6 years and older [FDA].", "Not recommended under 6 years [FDA]."] },
  adult: [["ADHD (6 years and over)", "30 mg once every morning; adjust by 10–20 mg about weekly; 30–70 mg/day; maximum 70 mg [FDA]."], ["Binge eating disorder", "30 mg every morning; increase by 20 mg weekly to 50–70 mg; maximum 70 mg. Stop if no improvement [FDA]."], ["Kidney", "GFR 15–29: maximum 50 mg/day. ESRD (GFR under 15): maximum 30 mg/day [FDA]."], ["How to take", "Morning, with or without food. Swallow capsule whole or open into yogurt, water or orange juice and take at once. Chew tablets fully. Do not divide a dose [FDA]."]],
  paed: { tiers: ["ADHD 6 years and over: same as adults — 30 mg every morning, up to 70 mg [FDA].", "Under 6 years: not recommended (higher exposure, more adverse reactions) [FDA]."], transition: "Same dose.", calcNote: "Morning dose." },
  adj: { renal: "GFR 15–29: max 50 mg; under 15: max 30 mg [FDA].", hepatic: NEP, pregnancy: "May cause fetal harm; breastfeeding not recommended [FDA].", other: "MAOIs (including linezolid, IV methylene blue): contraindicated within 14 days. Serotonergic drugs: serotonin syndrome risk [FDA]." },
  tox: { human: "Sympathomimetic: tachyarrhythmia, hyper- or hypotension, vasospasm, MI, aortic dissection; agitation, hallucinations, seizures, serotonin syndrome, hyperthermia, rhabdomyolysis [FDA].", animal: LD, manage: "Supportive; poison centre [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to amphetamines or ingredients [FDA].", "MAOIs or within 14 days of stopping (including linezolid, IV methylene blue) [FDA]."],
  ae: { common: ["Decreased appetite, insomnia, upper abdominal pain, irritability, vomiting, weight loss, dry mouth, nausea, anxiety [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Abuse, misuse, addiction [FDA]", "Sudden death and serious cardiac events in structural heart disease [FDA]", "Raised BP and heart rate [FDA]", "Psychosis, mania [FDA]", "Growth suppression in children [FDA]", "Peripheral vasculopathy (Raynaud's) [FDA]", "Serotonin syndrome [FDA]"] },
  monitor: ["Cardiac history before starting; BP and pulse [FDA].", "Height and weight in children [FDA].", "Signs of misuse at every review [FDA]."],
  local: notBT,
  calc: [C("lisdexamfetamine", "std", "ADHD (6 y+) / BED — 30 mg each morning, up to 70 mg", "PO", pop(72, null, null, null), "fixed", 30, 24, { dose: { value: 30, unit: "mg", per: "dose", value_max: 70 }, caps: { max_single: 70, unit: "mg" }, formulations: [{ form: "cap", strength: 30, unit: "mg/cap" }], rounding: "Whole capsules — do not divide a dose", renal: [{ crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 30, set_value_max: 50, note: "GFR 15–29: maximum 50 mg/day" }, { crcl_min: 0, crcl_max: 14.999, action: "reduce_dose", set_value: 30, note: "ESRD (GFR under 15): maximum 30 mg/day" }], flags: ["Start 30 mg; adjust 10–20 mg weekly (ADHD) or 20 mg weekly (BED)", "Morning only", "BED: adults only"] })],
  sources: [["FDA", "VYVANSE (lisdexamfetamine) capsules and chewable tablets — FDA label (DailyMed)", L2_DM("704e4378-ca83-445c-8b45-3cfa51c1ecad")], NEML_SRC],
  dose: { tagline: "Once-morning stimulant prodrug — 30–70 mg; cap in severe kidney disease; screen heart and misuse risk.",
    boxedTitle: "Abuse, misuse, and addiction", boxed: "VYVANSE has a high potential for abuse and misuse, which can lead to the development of a substance use disorder, including addiction. Misuse and abuse of CNS stimulants, including VYVANSE, can result in overdose and death, and this risk is increased with higher doses or unapproved methods of administration, such as snorting or injection. Before prescribing VYVANSE, assess each patient's risk for abuse, misuse, and addiction. Educate patients and their families about these risks, proper storage of the drug, and proper disposal of any unused drug. Throughout VYVANSE treatment, reassess each patient's risk of abuse, misuse, and addiction and frequently monitor for signs and symptoms of abuse, misuse, and addiction [FDA].",
    adult: [{ ind: "ADHD / binge eating disorder", text: "30 mg every morning; titrate weekly; max 70 mg.", calc: ["std"] }],
    child: [{ ind: "ADHD 6 years+", text: "30 mg every morning; max 70 mg.", calc: ["std"] }] }
});

FDB_M("lisinopril", {
  inn: "Lisinopril", atc: "C09AA03", cls: "ACE inhibitor",
  linked: [],
  forms: ["Tablets 2.5, 5, 10, 20, 30, 40 mg [FDA]."],
  moa: "Inhibits angiotensin-converting enzyme → less angiotensin II and aldosterone [FDA].",
  pk: ["Effective half-life 12 hours; renally excreted; removed by haemodialysis [FDA]."],
  ind: { adult: ["Hypertension [FDA].", "Adjunct in heart failure [FDA].", "Haemodynamically stable acute myocardial infarction (within 24 h) [FDA]."], paed: ["Hypertension 6 years and older [FDA]."] },
  adult: [["Hypertension", "10 mg once daily (5 mg if on a diuretic). Usual 20–40 mg once daily; up to 80 mg used without more effect [FDA]."], ["Heart failure", "5 mg once daily (2.5 mg if sodium under 130 mEq/L); increase as tolerated to 40 mg [FDA]."], ["Acute MI (within 24 h, stable)", "5 mg, then 5 mg after 24 h, 10 mg after 48 h, then 10 mg once daily for at least 6 weeks. Systolic 100–120 mmHg in the first 3 days: start 2.5 mg [FDA]."], ["Kidney", "CrCl 10–30: halve the usual starting dose (HTN 5 mg). Under 10 or haemodialysis: start 2.5 mg [FDA]."]],
  paed: { tiers: ["6 years and older with GFR over 30: 0.07 mg/kg once daily (up to 5 mg) to start; up to 0.61 mg/kg (max 40 mg) once daily [FDA].", "Under 6 years or GFR under 30: not recommended [FDA]."], transition: "Adult dose from adult size.", calcNote: "Tablets — round to ¼ of 2.5 mg." },
  adj: { renal: "CrCl 10–30: half the starting dose; under 10/HD: 2.5 mg start [FDA].", hepatic: "Cholestatic jaundice and hepatic failure reported — stop if jaundice [FDA].", pregnancy: "Fetal toxicity — stop as soon as pregnancy detected; do not breastfeed [FDA].", other: "Sacubitril: contraindicated within 36 h. Aliskiren in diabetes: contraindicated. Lithium toxicity; NSAIDs reduce effect and harm kidneys; potassium rises [FDA]." },
  tox: { human: "Hypotension most likely [FDA].", animal: "Rats: no deaths at 20 g/kg orally; 1 of 20 mice died [FDA].", manage: "IV normal saline for hypotension; removable by haemodialysis [FDA]." },
  contra: ["Angioedema history (ACE inhibitor-related, hereditary or idiopathic) or hypersensitivity [FDA].", "With a neprilysin inhibitor (sacubitril) or within 36 h of switching [FDA].", "With aliskiren in diabetes [FDA]."],
  ae: { common: ["Headache, dizziness, cough (hypertension); hypotension, chest pain (heart failure) [FDA]."], serious: ["Angioedema (higher with mTOR or neprilysin inhibitors) [FDA]", "Hypotension [FDA]", "Hyperkalaemia [FDA]", "Renal impairment [FDA]", "Cholestatic jaundice / hepatic failure [FDA]"] },
  monitor: ["BP after first dose; creatinine and potassium periodically [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 — the NEML ACE inhibitor is enalapril [BT-NEML] [UNVERIFIED-KNOWLEDGE].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    C("lisinopril", "htn", "Hypertension adult — start 10 mg once daily", "PO", ADULT, "fixed", 10, 24, { caps: { max_single: 80, unit: "mg" }, formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }, { form: "tab", strength: 2.5, unit: "mg/tab" }], rounding: "Whole or half tablets", renal: [{ crcl_min: 10, crcl_max: 30, action: "reduce_dose", set_value: 5, note: "CrCl 10–30: halve the starting dose (5 mg)" }, { crcl_min: 0, crcl_max: 9.999, action: "reduce_dose", set_value: 2.5, note: "CrCl under 10 or haemodialysis: start 2.5 mg" }], flags: ["On a diuretic: start 5 mg", "Usual 20–40 mg once daily"] }),
    C("lisinopril", "hf", "Heart failure — start 5 mg once daily", "PO", ADULT, "fixed", 5, 24, { formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }, { form: "tab", strength: 2.5, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Sodium under 130 mEq/L: 2.5 mg", "Increase as tolerated to 40 mg"] }),
    C("lisinopril", "mi", "Acute MI — 5 mg now (then 5 mg at 24 h, 10 mg at 48 h)", "PO", ADULT, "fixed", 5, null, { formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Systolic 100–120 mmHg in first 3 days: 2.5 mg", "Then 10 mg once daily for at least 6 weeks"] }),
    C("lisinopril", "child", "Hypertension 6 y+ — 0.07 mg/kg once daily (max 5 mg to start)", "PO", pop(72, 216, null, null), "mg_per_kg", 0.07, 24, { caps: { max_single: 5, unit: "mg" }, formulations: [{ form: "tab", strength: 2.5, unit: "mg/tab" }], rounding: "Quarter tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "GFR under 30 mL/min/1.73 m²: not recommended in children [FDA]" }], flags: ["Titrate to max 0.61 mg/kg (40 mg) once daily"] })
  ],
  sources: [["FDA", "Lisinopril tablets — FDA label (DailyMed)", L2_DM("03a497fe-fb09-4b2c-8ee0-2019600192b8")], NEML_SRC],
  dose: { tagline: "Once-daily ACE inhibitor — HTN 10 mg start, HF 5 mg, MI 5 mg; never in pregnancy.",
    boxedTitle: "Fetal toxicity", boxed: "When pregnancy is detected, discontinue lisinopril as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "10 mg once daily (5 mg on a diuretic); usual 20–40 mg.", calc: ["htn"] }, { ind: "Heart failure", text: "5 mg once daily up to 40 mg.", calc: ["hf"] }, { ind: "Acute MI", text: "5 mg, 5 mg at 24 h, 10 mg at 48 h, then 10 mg daily ≥6 weeks.", calc: ["mi"] }],
    child: [{ ind: "Hypertension 6 years+", text: "0.07 mg/kg once daily (max 5 mg); up to 0.61 mg/kg (40 mg).", calc: ["child"] }] }
});

FDB_M("lisocabtagene-maraleucel", {
  inn: "Lisocabtagene maraleucel", atc: "L01XL08", cls: "CD19-directed CAR T-cell therapy", risk: ONC,
  linked: [],
  forms: ["Cell suspension for IV infusion: CD8 and CD4 components in separate single-dose vials [FDA]."],
  moa: "Autologous T cells engineered with a CD19 chimeric antigen receptor (4-1BB costimulation), given as a 1:1 CD8:CD4 mix [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Large B-cell lymphoma (refractory or early relapse after first-line, or after 2+ lines) [FDA].", "CLL/SLL, follicular lymphoma, mantle cell lymphoma, marginal zone lymphoma — per label lines of therapy [FDA]."], paed: [NEP] },
  adult: [["LBCL after 1 line", "90–110 × 10⁶ CAR-positive viable T cells [FDA]."], ["LBCL after 2+ lines", "50–110 × 10⁶ CAR-positive viable T cells [FDA]."], ["CLL/SLL, FL, MCL, MZL", "90–110 × 10⁶ CAR-positive viable T cells [FDA]."], ["Around the infusion", "Fludarabine + cyclophosphamide lymphodepletion first; paracetamol and H1 antihistamine premedication; tocilizumab available; no leukodepleting filter; verify identity [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Cell product — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Not recommended; pregnancy test first [FDA].", other: "False-positive HIV nucleic acid tests possible [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Fever, CRS, fatigue, musculoskeletal pain, nausea (LBCL) [FDA]."], serious: ["Cytokine release syndrome (56%; grade 3+ 3.4%) [FDA]", "Neurologic toxicities [FDA]", "Secondary T-cell malignancies [FDA]", "Prolonged cytopenias; hypogammaglobulinaemia; serious infections [FDA]"] },
  monitor: ["CRS and neurologic signs — stay near a certified centre for the label period [FDA] [UNVERIFIED-KNOWLEDGE].", "Blood counts; immunoglobulins [FDA].", "Lifelong for secondary malignancy [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "BREYANZI (lisocabtagene maraleucel) suspension for IV infusion — FDA label (DailyMed)", L2_DM("594bb413-af3b-4b97-afb3-bfe2b174f2ed")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "CD19 CAR-T for B-cell lymphomas and CLL — CRS, neurotoxicity and T-cell cancers: certified centre only.",
    boxedTitle: "Cytokine release syndrome, neurologic toxicities, and secondary hematological malignancies", boxed: "• Cytokine Release Syndrome (CRS), including fatal or life-threatening reactions, occurred in patients receiving BREYANZI. Do not administer BREYANZI to patients with active infection or inflammatory disorders. Treat severe or life-threatening CRS with tocilizumab with or without corticosteroids. • Neurologic toxicities, including fatal or life-threatening reactions, occurred in patients receiving BREYANZI, including concurrently with CRS, after CRS resolution, or in the absence of CRS. Monitor for neurologic events after treatment with BREYANZI. Provide supportive care and/or corticosteroids as needed. • T cell malignancies have occurred following treatment of hematologic malignancies with BCMA- and CD19-directed genetically modified autologous T cell immunotherapies, including BREYANZI [FDA].",
    adult: [{ ind: "LBCL / CLL / FL / MCL / MZL", text: "Single infusion 50–110 or 90–110 × 10⁶ CAR+ T cells by indication." }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lithium", {
  inn: "Lithium", atc: "N05AN01", cls: "Mood stabiliser",
  linked: [],
  forms: ["Lithium carbonate tablets 300 mg; capsules 150, 300, 600 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Oral solution 8 mEq lithium per 5 mL (= lithium in 300 mg carbonate) [FDA]."],
  moa: "Mechanism as a mood stabiliser unknown [FDA].",
  pk: ["Half-life 18–36 hours [FDA].", "Renally cleared; sodium depletion and dehydration raise levels [FDA]."],
  ind: { adult: ["Bipolar I disorder monotherapy: acute manic and mixed episodes; maintenance [FDA]."], paed: ["Same, 7 years and older [FDA]."] },
  adult: [["Before starting", "Kidney function, vital signs, electrolytes, thyroid function, other medicines, pregnancy status [FDA]."], ["Start (over 30 kg)", "300 mg three times daily (or 8 mEq/5 mL three times daily); increase by 300 mg every 3 days [FDA]."], ["Targets", "Acute: 0.8–1.2 mEq/L (usual 600 mg two to three times daily). Maintenance: 0.8–1.0 mEq/L (usual 300–600 mg two to three times daily) [FDA]."], ["Levels", "First level after 3 days, drawn 12 hours after the last dose; then regularly until stable [FDA]."], ["Kidney", "CrCl 30–89: start lower, titrate slowly with frequent monitoring. Under 30: avoid [FDA]."]],
  paed: { tiers: ["7 years and older, over 30 kg: as adults [FDA].", "20–30 kg: 300 mg twice daily (or 8 mEq/5 mL twice daily); increase by 300 mg weekly. Acute usual 600–1,500 mg/day divided; maintenance 600–1,200 mg/day divided [FDA]."], transition: "Over 30 kg: adult schedule.", calcNote: "Dose by weight band; titrate to serum level." },
  adj: { renal: "CrCl 30–89: lower start, slow titration; under 30: avoid [FDA].", hepatic: NEP, pregnancy: "May cause fetal/neonatal harm (cardiac malformations including Ebstein's; toxicity near term and postpartum) [FDA].", other: "Diuretics, NSAIDs, ACE inhibitors/ARBs and metronidazole raise levels. Antipsychotics: encephalopathic syndrome, NMS. Serotonergic drugs: serotonin syndrome [FDA]." },
  tox: { human: "Toxic at 1.5 mEq/L or more — close to the therapeutic range. Over 3 mEq/L: seizures, coma, irreversible brain damage [FDA].", animal: LD, manage: "Mild: reduce or stop. Severe: haemodialysis is the most effective removal; no antidote [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any inactive ingredient [FDA]."],
  ae: { common: ["Fine tremor, polyuria, thirst, nausea, discomfort early in treatment [FDA]."], serious: ["Lithium toxicity [FDA]", "Nephrogenic diabetes insipidus / polyuria [FDA]", "Hyponatraemia [FDA]", "Chronic kidney disease [FDA]", "Encephalopathic syndrome with antipsychotics [FDA]", "Hypo- or hyperthyroidism; hypercalcaemia / hyperparathyroidism [FDA]", "Brugada unmasking, bradycardia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum lithium 12 h post-dose: after 3 days, regularly until stable, then periodically [FDA].", "Kidney function, thyroid function, calcium [FDA].", "Hydration and salt intake [FDA]."],
  local: { neml: "Not found on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary [UNVERIFIED-KNOWLEDGE].", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "lithium", indication_id: "start", label: "Bipolar I (7 y+) — starting dose by weight", route: "PO", population: pop(84, null, null, null), basis: "band",
    bands: [{ min_weight_kg: 20, max_weight_kg: 30.0001, text: "300 mg twice daily (or 8 mEq = 5 mL solution twice daily); increase by 300 mg weekly. Acute usual 600–1,500 mg/day; maintenance 600–1,200 mg/day, divided", daily: 600 }, { min_weight_kg: 30.0001, max_weight_kg: null, text: "300 mg three times daily (or 8 mEq = 5 mL solution three times daily); increase by 300 mg every 3 days. Acute usual 600 mg two to three times daily; maintenance 300–600 mg two to three times daily", daily: 900 }],
    dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 300, unit: "mg/tab" }], rounding: "Whole tablets",
    renal: [], flags: ["CrCl under 30: AVOID lithium [FDA]", "Titrate to serum level: acute 0.8–1.2, maintenance 0.8–1.0 mEq/L", "Level after 3 days, 12 h after the last dose", "CrCl 30–89: start lower and titrate slowly", "Under 20 kg: not covered by the label"], sources: ["FDA"] }],
  sources: [["FDA", "Lithium carbonate tablets / capsules / oral solution — FDA label (DailyMed)", L2_DM("16ebe1f9-501d-468b-a37d-f6a46f8f32d1")], NEML_SRC],
  dose: { tagline: "Narrow-index mood stabiliser — dose to the 12-hour level (0.8–1.2 acute); toxicity from 1.5 mEq/L; avoid if CrCl under 30.",
    boxedTitle: "Lithium toxicity", boxed: "Lithium toxicity is closely related to serum lithium concentrations, and can occur at doses close to therapeutic concentrations. Facilities for prompt and accurate serum lithium determinations should be available before initiating treatment [FDA].",
    adult: [{ ind: "Bipolar I (over 30 kg)", text: "300 mg three times daily; titrate to serum level.", calc: ["start"] }],
    child: [{ ind: "Bipolar I 7 years+", text: "20–30 kg: 300 mg twice daily; over 30 kg: as adults.", calc: ["start"] }] }
});

FDB_M("lofexidine", {
  inn: "Lofexidine", atc: "N07BC04", cls: "Central alpha-2 adrenergic agonist",
  linked: [],
  forms: ["Tablets 0.18 mg (= 0.2 mg lofexidine hydrochloride) [FDA]."],
  moa: "Central alpha-2 agonist; reduces noradrenaline release and sympathetic tone [FDA].",
  pk: ["Half-life about 11–13 hours [FDA].", "Not substantially removed by dialysis [FDA]."],
  ind: { adult: ["Mitigation of opioid withdrawal symptoms to facilitate abrupt opioid discontinuation in adults [FDA]."], paed: [NEP] },
  adult: [["Opioid withdrawal", "Three 0.18 mg tablets (0.54 mg) four times daily, 5–6 hours apart, during peak withdrawal (first 5–7 days); guided by symptoms, up to 14 days. Maximum 2.88 mg/day (16 tablets) and 0.72 mg (4 tablets) per dose [FDA]."], ["Stopping", "Taper over 2–4 days (e.g. 1 tablet less per dose every 1–2 days) [FDA]."], ["Liver (Child-Pugh)", "5–6: 3 tablets 4 times daily; 7–9: 2 tablets 4 times daily; over 9: 1 tablet 4 times daily [FDA]."], ["Kidney (eGFR)", "30–89.9: 2 tablets 4 times daily; under 30, ESRD or dialysis: 1 tablet 4 times daily [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "eGFR 30–89.9: 0.36 mg four times daily; under 30: 0.18 mg four times daily [FDA].", hepatic: "Child-Pugh 5–6: 2.16 mg/day; 7–9: 1.44 mg/day; over 9: 0.72 mg/day [FDA].", pregnancy: "Safety not established; fetal loss in animals below human exposure [FDA].", other: "Methadone: both prolong QT — ECG. Oral naltrexone: may be less effective. CYP2D6 inhibitors (paroxetine): more orthostasis and bradycardia. Benzodiazepines, alcohol: more CNS depression [FDA]." },
  tox: { human: "Hypotension, bradycardia, sedation [FDA].", animal: LD, manage: "Gastric lavage where appropriate; supportive; not removed by dialysis [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Orthostatic hypotension, bradycardia, hypotension, dizziness, somnolence, sedation, dry mouth [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension, bradycardia, syncope [FDA]", "QT prolongation [FDA]", "Opioid overdose after loss of tolerance [FDA]", "Rebound BP rise after abrupt stop [FDA]"] },
  monitor: ["Vital signs before each dose; orthostatic symptoms [FDA].", "ECG if electrolyte problems, heart failure, bradyarrhythmia, liver/kidney impairment, QT drugs [FDA]."],
  local: notBT,
  calc: [C("lofexidine", "std", "Opioid withdrawal — 0.54 mg (3 tablets) four times daily", "PO", ADULT, "fixed", 0.54, 6, { caps: { max_single: 0.72, max_daily: 2.88, unit: "mg" }, formulations: [{ form: "tab", strength: 0.18, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 30, crcl_max: 89.999, action: "reduce_dose", set_value: 0.36, note: "eGFR 30–89.9: 2 tablets (0.36 mg) four times daily" }, { crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 0.18, note: "eGFR under 30, ESRD or dialysis: 1 tablet (0.18 mg) four times daily" }], flags: ["5–6 h between doses; up to 14 days", "Liver: Child-Pugh 7–9 → 2 tablets; over 9 → 1 tablet per dose", "Taper over 2–4 days"] })],
  sources: [["FDA", "Lofexidine tablets — FDA label (DailyMed)", L2_DM("2dcc8288-adbe-45c3-b7bd-4d274001332d")], NEML_SRC],
  dose: { tagline: "Non-opioid withdrawal aid — 3 tablets four times daily; check BP and pulse before each dose; taper to stop.",
    adult: [{ ind: "Opioid withdrawal", text: "0.54 mg (3 × 0.18 mg) four times daily, 5–6 h apart, up to 14 days.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("lomitapide", {
  inn: "Lomitapide", atc: "C10AX12", cls: "Microsomal triglyceride transfer protein (MTP) inhibitor",
  linked: [],
  forms: ["Capsules 2, 5, 10, 20, 30, 40, 60 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits MTP in enterocytes and hepatocytes → fewer apoB lipoproteins (chylomicrons, VLDL) and lower LDL-C [FDA].",
  pk: ["Terminal half-life about 39 hours [FDA].", "CYP3A4 substrate [FDA]."],
  ind: { adult: ["Homozygous familial hypercholesterolaemia (HoFH), with low-fat diet and other LDL-lowering therapies [FDA]."], paed: ["HoFH from 2 years [FDA]."] },
  adult: [["Before starting", "ALT, AST, ALP, bilirubin; negative pregnancy test; low-fat diet (under 20% energy from fat or under 30 g/day) [FDA]."], ["Adults 18+", "5 mg once daily for 2 weeks, then 10 mg (weeks 3–6), 20 mg (weeks 7–10), 40 mg (weeks 11–14), 60 mg (week 15 on, maximum) [FDA]."], ["How to take", "Once daily, whole, with water, at least 2 hours after the evening meal [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Supplements", "Vitamin E 400 IU (200 IU at 2–8 years) plus linoleic acid 200 mg, ALA 210 mg, EPA 110 mg, DHA 80 mg daily [FDA]."], ["Weak CYP3A4 inhibitors", "Halve the dose [FDA]."]],
  paed: { tiers: ["2–10 years: 2 mg (weeks 0–8), 5 mg (9–12), 10 mg (13–16), 20 mg (17 on, maximum) [FDA].", "11–15 years: 2 mg (weeks 0–4), 5 mg (5–8), 10 mg (9–12), 20 mg (13–16), 40 mg (17 on, maximum) [FDA].", "16–17 years: 5 mg (weeks 0–4), 10 mg (5–8), 20 mg (9–12), 40 mg (13 on, maximum) [FDA].", "Moving into the next age group: escalate up to that group's maximum [FDA]."], transition: "18 years: adult schedule to 60 mg.", calcNote: "Start dose by age; titrate by table." },
  adj: { renal: NEP, hepatic: "Contraindicated in moderate or severe hepatic impairment (Child-Pugh B or C) and active liver disease [FDA].", pregnancy: "Contraindicated — teratogenic in animals; contraception needed [FDA].", other: "Moderate or strong CYP3A4 inhibitors: contraindicated; grapefruit juice: avoid. Warfarin: INR rises. Simvastatin, lovastatin: limit dose [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Symptomatic and supportive; monitor liver tests; haemodialysis unlikely to help [FDA]." },
  contra: ["Pregnancy [FDA].", "Moderate or strong CYP3A4 inhibitors [FDA].", "Moderate or severe hepatic impairment, active liver disease or unexplained persistent liver test rises [FDA]."],
  ae: { common: ["Diarrhoea, nausea, dyspepsia, vomiting, abdominal pain (GI in 93% of adults) [FDA]."], serious: ["Transaminase rises (≥3 × ULN in 34% of adults) and hepatic steatosis; possible steatohepatitis and cirrhosis [FDA]", "Fat-soluble vitamin and fatty acid deficiency [FDA]"] },
  monitor: ["ALT, AST, ALP, bilirubin before each dose increase and per label schedule [FDA].", "Pregnancy status [FDA].", "INR on warfarin [FDA]."],
  local: notBT,
  calc: [
    C("lomitapide", "a18", "HoFH adult — start 5 mg once daily", "PO", ADULT, "fixed", 5, 24, { caps: { max_single: 5, unit: "mg" }, formulations: [{ form: "cap", strength: 5, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Titrate: 10 → 20 → 40 → 60 mg (max) by label weeks", "Check liver tests before each increase", "Weak CYP3A4 inhibitor: halve the dose"] }),
    C("lomitapide", "a16", "HoFH 16–17 years — start 5 mg once daily", "PO", pop(192, 216, null, null), "fixed", 5, 24, { caps: { max_single: 5, unit: "mg" }, formulations: [{ form: "cap", strength: 5, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Titrate: 10 → 20 → 40 mg (max)"] }),
    C("lomitapide", "c2", "HoFH 2–15 years — start 2 mg once daily", "PO", pop(24, 192, null, null), "fixed", 2, 24, { caps: { max_single: 2, unit: "mg" }, formulations: [{ form: "cap", strength: 2, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["2–10 y: up to 20 mg; 11–15 y: up to 40 mg (by label weeks)", "Vitamin E 200 IU (2–8 y) or 400 IU (9 y+) plus fatty acids daily"] })
  ],
  sources: [["FDA", "JUXTAPID (lomitapide) capsules — FDA label (DailyMed)", L2_DM("61a0be9d-ee58-43e0-b5cb-141011835081")], NEML_SRC],
  dose: { tagline: "MTP inhibitor for HoFH only — REMS-level liver monitoring; contraindicated in pregnancy and with CYP3A4 inhibitors.",
    boxedTitle: "Risk of hepatotoxicity", boxed: "JUXTAPID can cause elevations in transaminases. In the adult clinical trial, 10 (34%) of the 29 patients treated with JUXTAPID had at least one elevation in alanine aminotransferase (ALT) or aspartate aminotransferase (AST) ≥3 times the upper limit of normal (ULN). There were no concomitant clinically meaningful elevations of total bilirubin, international normalized ratio (INR), or alkaline phosphatase. In the pediatric clinical trial (5 to 17 years of age), 6 (14%) of the 43 patients experienced elevations in ALT and/or AST ≥ 3 times ULN. No concomitant clinically meaningful elevations in total bilirubin or alkaline phosphatase were observed. JUXTAPID also increases hepatic fat, with or without concomitant increases in transaminases. The median absolute increase in hepatic fat in adult patients was 6% after both 26 and 78 weeks of treatment, from 1% at baseline, measured by magnetic resonance spectroscopy (MRS). The median absolute increase in hepatic fat in pediatric patients aged 5 to 17 years was 4% after 24 weeks and 104 weeks of treatment, from 3% at baseline, measured by nuclear magnetic resonance (NMR). Hepatic steatosis associated with JUXTAPID treatment may be a risk factor for progressive liver disease, including steatohepatitis and cirrhosis. Measure ALT, AST, alkaline phosphatase, and total bilirubin before initiating treatment and then ALT and AST regularly as recommended. During treatment, adjust the dose of JUXTAPID if the ALT or AST are ≥3 times ULN. Discontinue JUXTAPID for clinically significant liver toxicity [FDA].",
    adult: [{ ind: "HoFH", text: "5 mg once daily; titrate to max 60 mg.", calc: ["a18"] }],
    child: [{ ind: "HoFH 16–17 years", text: "5 mg; titrate to max 40 mg.", calc: ["a16"] }, { ind: "HoFH 2–15 years", text: "2 mg; titrate by age table.", calc: ["c2"] }] }
});

FDB_M("lomustine", {
  inn: "Lomustine", atc: "L01AD02", cls: "Alkylating agent (nitrosourea)", risk: ONC,
  linked: [],
  forms: ["Capsules 10, 40, 100 mg [FDA]."],
  moa: "Nitrosourea alkylating agent; crosslinks DNA [UNVERIFIED-KNOWLEDGE].",
  pk: ["Lipid-soluble; crosses the blood–brain barrier [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Primary and metastatic brain tumours after surgery and/or radiotherapy [FDA].", "Hodgkin lymphoma, in combination, after progression on initial chemotherapy [FDA]."], paed: ["Same — adult and paediatric dose [FDA]."] },
  adult: [["Dose", "130 mg/m² as a single oral dose every 6 weeks; round to the nearest 10 mg [FDA]."], ["Compromised marrow", "100 mg/m² every 6 weeks; reduce also with other myelosuppressives [FDA]."], ["Next dose by nadir", "WBC ≥3,000 and platelets ≥75,000: full dose. WBC 2,000–2,999 or platelets 25,000–74,999: reduce by 30%. WBC under 2,000 or platelets under 25,000: reduce by 50%. Do not give until platelets ≥100,000 and WBC ≥4,000 [FDA]."], ["Dispensing", "Prescribe and dispense ONLY enough capsules for ONE dose [FDA]."]],
  paed: { tiers: ["130 mg/m² single dose every 6 weeks, as adults [FDA]."], transition: "Same.", calcNote: "Single dose per 6-week cycle — never daily." },
  adj: { renal: "Can cause renal failure — monitor [FDA].", hepatic: "Hepatotoxicity — monitor liver tests [FDA].", pregnancy: "Fetal harm — contraception for both sexes [FDA].", other: "Wear gloves; do not open capsules [FDA]." },
  tox: { human: "Fatal toxicity with overdose (taking the dose daily) [FDA].", animal: LD, manage: "Supportive; blood counts [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea and vomiting, myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Delayed cumulative myelosuppression (4–6 weeks), fatal [FDA]", "Fatal overdose if taken more than once per cycle [FDA]", "Pulmonary infiltrates/fibrosis [FDA]", "Secondary leukaemia/MDS [FDA]", "Hepatotoxicity, nephrotoxicity [FDA]"] },
  monitor: ["Blood counts weekly for at least 6 weeks after each dose [FDA].", "Pulmonary function before and often; liver and kidney function [FDA]."],
  local: notBT,
  calc: [C("lomustine", "std", "Brain tumour / Hodgkin — 130 mg/m² ONE dose every 6 weeks", "PO", ANY, "mg_per_m2", 130, null, { formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }, { form: "cap", strength: 40, unit: "mg/cap" }, { form: "cap", strength: 10, unit: "mg/cap" }], rounding: "Nearest 10 mg — combine 100/40/10 mg capsules", flags: ["SINGLE dose — not repeated for at least 6 weeks", "Dispense only one dose", "Compromised marrow: 100 mg/m²", "Reduce 30–50% by previous nadir"] })],
  sources: [["FDA", "Lomustine capsules — FDA label (DailyMed)", L2_DM("3c3637fc-4499-4331-a3c4-6969fc86704e")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Oral nitrosourea — ONE dose of 130 mg/m² every 6 weeks; daily dosing is fatal.",
    boxedTitle: "Delayed myelosuppression and risk of overdosage", boxed: "Lomustine causes myelosuppression including fatal myelosuppression. Myelosuppression is delayed, dose-related, and cumulative; occurring 4 to 6 weeks after drug administration and persisting for 1 to 2 weeks. Thrombocytopenia is generally more severe than leukopenia. Cumulative myelosuppression from lomustine is manifested by greater severity and longer duration of cytopenias. Monitor blood counts for at least 6 weeks after each dose. Do not give lomustine more frequently than every 6 weeks. RISK OF OVERDOSAGE — PRESCRIBE, DISPENSE, AND ADMINISTER ONLY ENOUGH CAPSULES FOR ONE DOSE. Fatal toxicity occurs with overdosage of lomustine. Both physician and pharmacist should emphasize to the patient that only one dose of lomustine is taken every 6 weeks [FDA].",
    adult: [{ ind: "Brain tumours / Hodgkin lymphoma", text: "130 mg/m² once, repeat no sooner than 6 weeks.", calc: ["std"] }],
    child: [{ ind: "Brain tumours / Hodgkin lymphoma", text: "130 mg/m² once every 6 weeks.", calc: ["std"] }] }
});

FDB_M("lonafarnib", {
  inn: "Lonafarnib", atc: "A16AX20", cls: "Farnesyltransferase inhibitor",
  linked: [],
  forms: ["Capsules 50, 75 mg [FDA]."],
  moa: "Inhibits farnesyltransferase, preventing farnesylation and build-up of progerin and progerin-like proteins in the nuclear membrane [FDA].",
  pk: ["Half-life about 4–6 hours [FDA].", "CYP3A substrate [FDA]."],
  ind: { adult: ["From 12 months with BSA 0.39 m² or more: reduce mortality in Hutchinson-Gilford progeria syndrome; processing-deficient progeroid laminopathies (heterozygous LMNA with progerin-like protein, or homozygous/compound heterozygous ZMPSTE24) [FDA]."], paed: ["Same — 12 months and older, BSA 0.39 m² or more [FDA]."] },
  adult: [["Start", "115 mg/m² twice daily with morning and evening meals [FDA]."], ["After 4 months", "150 mg/m² twice daily [FDA]."], ["Rounding", "Round TOTAL DAILY dose to the nearest 25 mg; use the label BSA tables for capsule split [FDA]."], ["Missed dose", "Take with food up to 8 hours before the next dose; otherwise skip [FDA]."]],
  paed: { tiers: ["As above — BSA under 0.39 m²: no suitable strength [FDA]."], transition: "Same.", calcNote: "BSA dosing; round the daily total to 25 mg." },
  adj: { renal: "Nephrotoxic in rats — monitor kidney function [FDA].", hepatic: NEP, pregnancy: "Embryofetal harm — effective contraception [FDA].", other: "Contraindicated with strong CYP3A inhibitors, strong/moderate CYP3A inducers, midazolam, lovastatin, simvastatin, atorvastatin. Avoid QT-prolonging drugs [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Strong CYP3A inhibitors [FDA].", "Strong or moderate CYP3A inducers [FDA].", "Midazolam [FDA].", "Lovastatin, simvastatin, atorvastatin [FDA]."],
  ae: { common: ["Vomiting, diarrhoea, infection, nausea, decreased appetite, fatigue, abdominal pain, electrolyte changes, weight loss, headache (≥25%) [FDA]."], serious: ["QTc prolongation [FDA]", "Nephrotoxicity, retinal toxicity (animals) [FDA]", "Impaired fertility [FDA]", "Myelosuppression, liver enzyme rises [FDA]"] },
  monitor: ["Electrolytes, blood counts, liver enzymes [FDA].", "Kidney function; eye examinations [FDA].", "ECG [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("lonafarnib", "start", "Progeria — start 115 mg/m² twice daily (BSA ≥0.39)", "PO", pop(12, null, null, null), "mg_per_m2", 115, 12, { formulations: [{ form: "cap", strength: 50, unit: "mg/cap" }, { form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Round TOTAL daily dose to nearest 25 mg — use label BSA table", flags: ["BSA under 0.39 m²: no suitable strength", "With morning and evening meals"] }),
    C("lonafarnib", "maint", "Progeria — after 4 months 150 mg/m² twice daily", "PO", pop(12, null, null, null), "mg_per_m2", 150, 12, { formulations: [{ form: "cap", strength: 50, unit: "mg/cap" }, { form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Round TOTAL daily dose to nearest 25 mg — use label BSA table", flags: ["With morning and evening meals"] })
  ],
  sources: [["FDA", "ZOKINVY (lonafarnib) capsules — FDA label (DailyMed)", L2_DM("97391d0c-943e-4c5a-8423-68e163aa7f50")], NEML_SRC],
  dose: { tagline: "Progeria treatment — 115 then 150 mg/m² twice daily with meals; many CYP3A contraindications.",
    adult: [{ ind: "Progeria / progeroid laminopathy", text: "115 mg/m² twice daily; 150 mg/m² after 4 months.", calc: ["start", "maint"] }],
    child: [{ ind: "12 months+ (BSA ≥0.39 m²)", text: "115 mg/m² twice daily; 150 mg/m² after 4 months.", calc: ["start", "maint"] }] }
});

FDB_M("lonapegsomatropin", {
  inn: "Lonapegsomatropin", atc: "H01AC09", cls: "Long-acting growth hormone (pegylated somatropin prodrug)",
  linked: [],
  forms: ["Dual-chamber cartridges 0.7, 1.4, 1.8, 2.1, 2.5, 3, 3.6, 4.3, 5.2, 6.3, 7.6, 9.1 mg and higher [FDA]."],
  moa: "Pegylated prodrug that releases somatropin, which binds the GH receptor [FDA].",
  pk: ["Released somatropin half-life about 25 hours — once weekly [FDA]."],
  ind: { adult: ["Replacement in adult growth hormone deficiency [FDA]."], paed: ["Growth failure from GH deficiency, 1 year and older and at least 11.5 kg [FDA]."] },
  adult: [["Adults (treatment-naïve or switching)", "30–60 years, no oral oestrogen: 1.4 mg once weekly. Under 30 years, or any age on oral oestrogen: 2.1 mg weekly. Over 60 years, no oral oestrogen: 0.7 mg weekly. Increase monthly by IGF-1 and response [FDA]."], ["Switching", "From daily somatropin: wait at least 8 h. From another weekly GH: wait at least 7 days [FDA]."], ["Before starting", "Fundoscopy to exclude papilloedema [FDA]."]],
  paed: { tiers: ["1 year and older, at least 11.5 kg: 0.24 mg/kg once weekly SC; individualise [FDA]."], transition: "Adult GHD: adult dosing.", calcNote: "Once weekly; nearest cartridge strength." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Decades of somatropin data: no drug-associated risk identified [FDA].", other: "Glucocorticoid replacement may need increasing; monitor thyroid function [FDA]." },
  tox: { human: "Hypoglycaemia then hyperglycaemia; fluid retention; long-term gigantism [FDA].", animal: LD, manage: NEP },
  contra: ["Acute critical illness after open heart or abdominal surgery, multiple trauma, or acute respiratory failure [FDA].", "Hypersensitivity to somatropin or excipients [FDA].", "Active malignancy; proliferative diabetic retinopathy; closed epiphyses (for growth); Prader-Willi with obesity or respiratory impairment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Viral infection, fever, cough, nausea, headache (children) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hypersensitivity [FDA]", "Neoplasms (second tumours in cancer survivors) [FDA]", "Glucose intolerance [FDA]", "Intracranial hypertension [FDA]", "Fluid retention; hypoadrenalism; hypothyroidism [FDA]", "Slipped capital femoral epiphysis; scoliosis progression [FDA]"] },
  monitor: ["Growth; IGF-1 4–5 days after the dose [FDA].", "Glucose; thyroid function; cortisol needs [FDA].", "Limp or hip/knee pain in children [FDA]."],
  local: notBT,
  calc: [
    C("lonapegsomatropin", "child", "GH deficiency child (1 y+, ≥11.5 kg) — 0.24 mg/kg once weekly", "SC", pop(12, 216, 11.5, null), "mg_per_kg", 0.24, 168, { formulations: [], rounding: "Nearest cartridge strength", flags: ["Once weekly SC — abdomen, buttock or thigh", "Fundoscopy before starting"] }),
    { drug: "lonapegsomatropin", indication_id: "adult", label: "Adult GH deficiency — starting dose (once weekly)", route: "SC", population: ADULT, basis: "fixed", dose: { value: 0.7, unit: "mg", per: "dose", value_max: 2.1 }, interval_h: 168, divided_doses: null, caps: { max_single: 2.1, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Cartridge strength", renal: [], flags: ["30–60 y, no oral oestrogen: 1.4 mg", "Under 30 y, or on oral oestrogen: 2.1 mg", "Over 60 y, no oral oestrogen: 0.7 mg", "Increase monthly by IGF-1"], sources: ["FDA"] }
  ],
  sources: [["FDA", "SKYTROFA (lonapegsomatropin-tcgd) for injection — FDA label (DailyMed)", L2_DM("9229f871-bc61-4ddc-8122-d126d40e36ac")], NEML_SRC],
  dose: { tagline: "Once-weekly growth hormone — 0.24 mg/kg/week in children; adults 0.7–2.1 mg by age and oestrogen.",
    adult: [{ ind: "Adult GH deficiency", text: "0.7, 1.4 or 2.1 mg weekly by age/oral oestrogen; titrate monthly.", calc: ["adult"] }],
    child: [{ ind: "GH deficiency (1 y+, ≥11.5 kg)", text: "0.24 mg/kg once weekly.", calc: ["child"] }] }
});

FDB_M("loncastuximab-tesirine", {
  inn: "Loncastuximab tesirine", atc: "L01FX22", cls: "CD19-directed antibody–drug conjugate (PBD dimer)", risk: ONC,
  linked: [],
  forms: ["For injection 10 mg lyophilised powder vial; 5 mg/mL after reconstitution with 2.2 mL water [FDA]."],
  moa: "Anti-CD19 IgG1 antibody linked to SG3199, a pyrrolobenzodiazepine dimer that crosslinks DNA [FDA].",
  pk: [NEP],
  ind: { adult: ["Relapsed or refractory large B-cell lymphoma after 2 or more systemic lines (DLBCL NOS, from low-grade lymphoma, high-grade BCL) — accelerated approval [FDA]."], paed: [NEP] },
  adult: [["Dose", "0.15 mg/kg IV over 30 minutes every 3 weeks for 2 cycles, then 0.075 mg/kg every 3 weeks [FDA]."], ["Premedication", "Dexamethasone 4 mg orally or IV twice daily for 3 days, starting the day before (or at least 2 h before) [FDA]."], ["Hold", "ANC under 1 × 10⁹/L or platelets under 50,000/mcL until recovery; grade 2+ oedema or effusion [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "Moderate or severe hepatic impairment: avoid [FDA].", pregnancy: "Embryo-fetal harm (genotoxic payload) — contraception; do not breastfeed [FDA].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Thrombocytopenia, raised GGT, neutropenia, anaemia, hyperglycaemia, fatigue, oedema, rash (≥20%) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Effusion and oedema including capillary leak [FDA]", "Myelosuppression [FDA]", "Infections [FDA]", "Hepatotoxicity / drug-induced liver injury [FDA]", "Cutaneous reactions, photosensitivity [FDA]"] },
  monitor: ["Weight, oedema, effusions [FDA].", "Blood counts; liver tests [FDA].", "Skin; sun protection [FDA]."],
  local: notBT,
  calc: [
    C("loncastuximab-tesirine", "c12", "LBCL — cycles 1–2: 0.15 mg/kg IV every 3 weeks", "IV", ADULT, "mg_per_kg", 0.15, 504, { formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.01 mL (then dilute)", infusion: { duration_h: 0.5 }, flags: ["Dexamethasone 4 mg twice daily × 3 days from the day before"] }),
    C("loncastuximab-tesirine", "c3", "LBCL — cycle 3 on: 0.075 mg/kg IV every 3 weeks", "IV", ADULT, "mg_per_kg", 0.075, 504, { formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.01 mL (then dilute)", infusion: { duration_h: 0.5 }, flags: ["Dexamethasone 4 mg twice daily × 3 days from the day before"] })
  ],
  sources: [["FDA", "ZYNLONTA (loncastuximab tesirine-lpyl) for injection — FDA label (DailyMed)", L2_DM("af54af12-3edf-4301-8bc5-0446bc813c1d")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "CD19 ADC for relapsed LBCL — 0.15 then 0.075 mg/kg every 3 weeks with dexamethasone cover; watch effusions.",
    adult: [{ ind: "Relapsed/refractory LBCL", text: "0.15 mg/kg × 2 cycles, then 0.075 mg/kg every 3 weeks.", calc: ["c12", "c3"] }],
    child: [{ ind: "Children", text: NEP }] }
});

})(); // end L-2 scope

/* Brand names — BATCH L2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"levobunolol":{"IN":[["Betagan","Allergan India Pvt Ltd","Betagan Eye Drops 5Ml"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/betagan-eye-drops-5ml-37275"]},"levocarnitine":{"IN":[],"BD":[["Carnitab","Beximco Pharmaceuticals PLC","330 mg"],["Carniten","Drug International Ltd","330 mg"],["Envitor","Opsonin Pharma Ltd","330 mg"]],"src":["https://medex.com.bd/brands/3167/carnitab-330-mg-tablet","https://medex.com.bd/brands/3168/carniten-330-mg-tablet","https://medex.com.bd/brands/3172/envitor-330-mg-tablet"]},"levocetirizine":{"IN":[["Levocetrizen","Leeford Healthcare Ltd","Levocetrizen 10Mg Strip Of 10 Tablets"],["Cetcip","Cipla Gx","Cetcip L 5Mg Strip Of 10 Tablets"]],"BD":[["Rinocet","Jenphar Bangladesh Ltd","5 mg"],["Polan","Globe Pharmaceuticals Ltd","5 mg"],["Purotrol","Square Pharmaceuticals PLC","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/levocetrizen-10mg-tab-10-s-223062","https://pharmeasy.in/online-medicine-order/cetcip-l-5mg-tablet-6857","https://medex.com.bd/brands/19179/rinocet-5-mg-tablet","https://medex.com.bd/brands/12175/polan-5-mg-tablet","https://medex.com.bd/brands/12176/purotrol-5-mg-tablet"]},"levomilnacipran":{"IN":[],"BD":[["Cipran","Renata PLC","80 mg"]],"src":["https://medex.com.bd/brands/31019/cipran-80-mg-xr-capsule"]},"levothyroxine":{"IN":[],"BD":[["Thyrox","Renata PLC","12.5 mcg"],["Leroid","Drug International Ltd","50 mcg"],["Thyrin","Square Pharmaceuticals PLC","75 mcg"]],"src":["https://medex.com.bd/brands/36934/thyrox-125-mcg-tablet","https://medex.com.bd/brands/33861/leroid-50-mcg-tablet","https://medex.com.bd/brands/36671/thyrin-75-mcg-tablet"]},"lifitegrast":{"IN":[["Lifanta","Ajanta Pharma Limited","Lifanta 5% Bottle Of 3Ml Ophthalmic Solution"],["Secadrops","Micro Labs","Secadrops Pouch Of 0.2Ml Eye Drops (Pack Of 5)"]],"BD":[["Eradra","General Pharmaceuticals Ltd","5%"],["Liftear","Aristopharma Ltd","5%"]],"src":["https://pharmeasy.in/online-medicine-order/lifanta-5-bottle-of-3ml-ophthalmic-solution-4337077","https://pharmeasy.in/online-medicine-order/secadrops-pouch-of-0-2ml-eye-drops-pack-of-5--4514965","https://medex.com.bd/brands/27693/eradra-5-eye-drop","https://medex.com.bd/brands/28965/liftear-5-eye-drop"]},"linaclotide":{"IN":[["Colozo","Dr Reddy's Laboratories Ltd","Colozo 72Mcg Bottle Of 10 Capsules"],["Lintide","Torrent Pharmaceuticals Ltd","Lintide 145Mcg Bottle Of 10 Capsules"]],"BD":[["Linzela","Nuvista Pharma PLC","72 mcg"]],"src":["https://pharmeasy.in/online-medicine-order/colozo-72mcg-bottle-of-15-capsules-4514571","https://pharmeasy.in/online-medicine-order/lintide-145mcg-bottle-of-10-capsules-4605740","https://medex.com.bd/brands/34223/linzela-72-mcg-capsule"]},"linagliptin":{"IN":[["Linanat","Natco Pharma Ltd","Linanat 5Mg Strip Of 10 Tablets"],["Linaworth","Morepen Laboratories","Linaworth 5 Strip Of 10 Tablets"],["Linaford","Leeford Healthcare Ltd","Linaford 5Mg Strip Of 10 Tablets"]],"BD":[["Lino","ACME Laboratories Ltd","5 mg"],["Renolina","DBL Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/linanat-5mg-strip-of-10-tablets-3770937","https://pharmeasy.in/online-medicine-order/linaworth-5-tablet-10-no-s-4306584","https://pharmeasy.in/online-medicine-order/linaford-5mg-strip-of-10-tablets-4497897","https://medex.com.bd/brands/33738/renolina-5-mg-tablet"]},"liraglutide":{"IN":[["Lirafit","Glenmark Pharmaceuticals","Lirafit 6Mg Pre Filled Pen Of 3Ml Solution For Injection"],["Erly","Eris Life Sciences Pvt Ltd","Erly 6Mg Pre Filled Pen Of 3Ml Solution For Injection"],["Gliptoza","Eris Life Sciences Pvt Ltd","Gliptoza 6Mg Pre Filled Pen Of 3Ml Solution For Injection"]],"BD":[["Victoza","Novo Nordisk Pharma (Pvt","6 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/lirafit-6mg-pre-filled-pen-of-3ml-solution-for-injection-4140603","https://pharmeasy.in/online-medicine-order/erly-6-injection-1-no-s-4312720","https://pharmeasy.in/online-medicine-order/gliptoza-6mg-pre-filled-pen-of-3ml-solution-for-injection-4359933","https://medex.com.bd/brands/5724/victoza-6-mg-injection"]},"lisinopril":{"IN":[["Lipril","Lupin","Lipril 5Mg Strip Of 15 Tablets"],["Listril","Torrent Pharmaceuticals Ltd","Listril 5Mg Strip Of 15 Tablets"]],"BD":[["Acepril","Drug International Ltd","5 mg"],["Lipril","ACME Laboratories Ltd","5 mg"],["Lispril","Medimet Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lipril-5mg-tablet-16705","https://pharmeasy.in/online-medicine-order/listril-5mg-tablet-26759","https://medex.com.bd/brands/2607/acepril-5-mg-tablet","https://medex.com.bd/brands/2609/lipril-5-mg-tablet","https://medex.com.bd/brands/2611/lispril-5-mg-tablet"]},"lithium":{"IN":[["Li","Alteus Biogenics Pvt Ltd","Li 150 Strip Of 15 Tablets"]],"BD":[["Lithosun SR","Sun Pharmaceutical (Bangladesh) Ltd","400 mg"],["Lithin SR","Incepta Pharmaceuticals Ltd","400 mg"],["Litiam ER","Advanced Chemical Industries PLC","400 mg"]],"src":["https://pharmeasy.in/online-medicine-order/li-150-tablet-15-no-s-4118000","https://medex.com.bd/brands/4443/lithosun-sr-400-mg-sr-tablet","https://medex.com.bd/brands/4444/lithin-sr-400-mg-sr-tablet","https://medex.com.bd/brands/21778/litiam-er-400-mg-xr-tablet"]},"lomustine":{"IN":[["Lomoother","Therdose Pharma Private Limited","Lomoother 40Mg Strip Of 6 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/lomoother-40-mg-capsule-6-no-s-4114044"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
