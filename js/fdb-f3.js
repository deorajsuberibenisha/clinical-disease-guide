/* Clinical Disease Guide — Drug monograph database, block F, batch 3 (26 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text copied from the label by _work/tools/fdb-boxed-fill.js. Set IDs copied from saved label JSONs (never typed).
   Labels added/replaced: fluphenazine decanoate (Bhutan NEML form), fluticasone furoate nasal (Bhutan NEML form) + Ellipta, flurbiprofen generic tablets, fosfomycin tromethamine (oral). */

/* ================= Batch F-3 (fdb-f3.js) ================= */
const F3_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const F3_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const F3_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const F3_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const F3_ANY = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const F3_NEP = "Not established in primary source. [NEP]";
const F3_LD = "Animal LD50: Not established in primary source. [NEP]";
const F3_LOC = { neml: F3_NOT, strengths: "—", stg: F3_NEP };
const F3_PET = (key, inn, label, set, act, use, how) => FDB_M(key, {
  inn, atc: "V09", cls: "Diagnostic radiopharmaceutical (fluorine-18 PET agent)",
  linked: [],
  forms: ["Injection; activity calibrated at time of use [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not available [BT-NEML]."],
  moa: "Positron-emitting tracer for PET imaging of the target [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Fluorine-18 half-life about 110 minutes [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: [use + " [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["PET imaging", act + "; " + how + " [FDA]."], ["Radiation safety", "Handle with radiation shielding [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed activity — no calculator." },
  adj: { renal: F3_NEP, hepatic: F3_NEP, pregnancy: "Radiation exposure — weigh risk [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Interpretation by trained readers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: F3_NEP },
  contra: ["Per label (see contraindications in the product information) [FDA]."],
  ae: { common: ["Uncommon; headache, flushing, injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity (rare) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["None specific [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "—", stg: F3_NEP }, calc: [],
  sources: [["FDA", label + " — FDA label (DailyMed)", F3_DM(set)], F3_BT],
  dose: { tagline: "Diagnostic PET tracer.", adult: [{ ind: "PET imaging", text: act + "." }], child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FLUOCINONIDE (FDA solution 0.05% ANDA209699) ---------- */
FDB_M("fluocinonide", {
  inn: "Fluocinonide", atc: "D07AC08", cls: "Topical corticosteroid (high potency)",
  linked: [],
  forms: ["Solution, cream, ointment, gel 0.05%; cream 0.1% (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Anti-inflammatory, antipruritic, vasoconstrictive corticosteroid [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Occlusion and large areas increase absorption [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Corticosteroid-responsive dermatoses (inflammatory and pruritic) [FDA]."], paed: ["Lowest effective amount — children at greater risk of systemic effects [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dermatoses", "Thin film 2–4 times daily depending on severity; occlusion for psoriasis or recalcitrant conditions; stop occlusion if infection develops [FDA]."]],
  paed: { tiers: ["Least amount, short courses [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable (topical) [NEP].", hepatic: "Not applicable (topical) [NEP].", pregnancy: F3_NEP, other: "Avoid face and skin folds [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Systemic corticosteroid effects with heavy use [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Reduce use [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of hypersensitivity to any component [FDA]."],
  ae: { common: ["Burning, itching, dryness, folliculitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["HPA suppression, skin atrophy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Response; HPA axis if extensive use [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC, calc: [],
  sources: [["FDA", "Fluocinonide topical solution 0.05% — FDA label (DailyMed)", F3_DM("38a36184-22b4-4e97-83e1-fdd984ef6ccb")], F3_BT],
  dose: { tagline: "High-potency topical steroid — thin film 2–4 times daily.",
    adult: [{ ind: "Dermatoses", text: "Thin film 2–4 times daily." }],
    child: [{ ind: "Children", text: "Least amount, short courses." }] }
});

/* ---------- FLUORESCEIN (FDA FLUORESCITE 10% NDA021980) ---------- */
FDB_M("fluorescein", {
  inn: "Fluorescein", atc: "S01JA01", cls: "Diagnostic dye (ophthalmic angiography)",
  linked: [],
  forms: ["Injection 10% (100 mg/mL) [FDA]; ophthalmic strips (other labels).", "Bhutan: fluorescein strips may be used in eye units [UNVERIFIED-KNOWLEDGE]."],
  moa: "Fluoresces under blue light to show retinal and iris vessels [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Skin and urine turn yellow for 6–36 hours [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Diagnostic fluorescein angiography or angioscopy of the retina and iris vasculature [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Angiography", "500 mg (5 mL of 10%) IV [FDA]."], ["Administration", "Do not mix or dilute with other solutions or drugs [FDA]."]],
  paed: { tiers: ["7.7 mg/kg actual body weight (35 mg per 10 lb), maximum 500 mg IV [FDA]."], transition: "Adult 500 mg.", calcNote: "100 mg/mL." },
  adj: { renal: F3_NEP, hepatic: F3_NEP, pregnancy: "Avoid in the first trimester if possible [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Have anaphylaxis treatment ready; extravasation is painful [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: F3_NEP },
  contra: ["Known hypersensitivity to fluorescein or other ingredients [FDA]."],
  ae: { common: ["Nausea, vomiting, yellow skin and urine, injection-site pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis, cardiac arrest (rare) [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe local reaction with extravasation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Observe for hypersensitivity for 30–60 minutes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 as an injection [BT-NEML] [UNVERIFIED-KNOWLEDGE].", strengths: "—", stg: F3_NEP },
  calc: [
    { drug: "fluorescein", indication_id: "adult", label: "Angiography adult — 500 mg IV", route: "IV", population: F3_ADULT, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Do not mix or dilute"], sources: ["FDA"] },
    { drug: "fluorescein", indication_id: "child", label: "Angiography child — 7.7 mg/kg IV (max 500 mg)", route: "IV", population: { min_age_months: null, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 7.7, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["Actual body weight"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fluorescite (fluorescein injection 10%) — FDA label (DailyMed)", F3_DM("ebb3883c-71f6-4fd0-a7e6-0ba8e1136dd9")], F3_BT],
  dose: { tagline: "IV dye for retinal angiography — 500 mg adult, 7.7 mg/kg child.",
    adult: [{ ind: "Fluorescein angiography", text: "500 mg IV.", calc: ["adult"] }],
    child: [{ ind: "Fluorescein angiography", text: "7.7 mg/kg, max 500 mg.", calc: ["child"] }] }
});

F3_PET("fluorodopa-18f-", "Fluorodopa (18F)", "Fluorodopa F 18 injection", "37f8c405-ccb6-4fcd-8513-108956bb1674", "185 MBq (5 mCi) IV over 1 minute", "PET to visualise dopaminergic nerve terminals in the striatum in adults with suspected parkinsonian syndromes", "void before imaging; start imaging about 80 minutes after (PET 80–100 minutes)");

/* ---------- FLUOROMETHOLONE (FDA FLAREX 0.1% NDA019079) ---------- */
FDB_M("fluorometholone", {
  inn: "Fluorometholone", atc: "S01BA07 C05AA06", cls: "Ophthalmic corticosteroid",
  linked: [],
  forms: ["Ophthalmic suspension 0.1% (acetate, Flarex) and 0.1%/0.25% (alcohol, other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Corticosteroid that suppresses ocular inflammation, with less IOP rise than dexamethasone [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F3_NEP],
  ind: { adult: ["Steroid-responsive inflammation of the palpebral and bulbar conjunctiva, cornea and anterior segment [FDA]."], paed: ["Per label (other formulations from 2 years) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Eye inflammation", "1–2 drops four times daily; in the first 24–48 hours may increase to 2 drops every 2 hours. Shake well. Consult if no improvement after 2 weeks; do not stop too early [FDA]."], ["Prescribing", "Not more than one bottle initially; no refill without further evaluation [FDA]."]],
  paed: { tiers: ["Specialist [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Eye drops — no calculator." },
  adj: { renal: "Not applicable [NEP].", hepatic: "Not applicable [NEP].", pregnancy: F3_NEP, other: "Check IOP if used 10 days or more [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: F3_NEP },
  contra: ["Acute superficial herpes simplex keratitis, vaccinia, varicella and most other viral diseases of cornea and conjunctiva [FDA].", "Mycobacterial infection of the eye; fungal diseases of ocular structures [FDA].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Eye irritation, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Raised IOP, glaucoma, cataract, secondary infection [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["IOP if prolonged [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC, calc: [],
  sources: [["FDA", "Flarex (fluorometholone acetate ophthalmic suspension 0.1%) — FDA label (DailyMed)", F3_DM("f060dec4-09dc-4266-ab4c-a6ed49cd8126")], F3_BT],
  dose: { tagline: "Mild steroid eye drop for anterior segment inflammation.",
    adult: [{ ind: "Eye inflammation", text: "1–2 drops four times daily (2-hourly first 24–48 h)." }],
    child: [{ ind: "Children", text: "Specialist." }] }
});

/* ---------- FLUPHENAZINE (FDA HCl tablets ANDA215141 + decanoate injection ANDA215365) ---------- */
FDB_M("fluphenazine", {
  inn: "Fluphenazine", atc: "N05AB02", cls: "Typical antipsychotic (piperazine phenothiazine)",
  linked: [],
  forms: ["Tablets 1, 2.5, 5, 10 mg; elixir; HCl injection 2.5 mg/mL; decanoate injection 25 mg/mL (long-acting) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: fluphenazine decanoate 25 mg/mL injection (all levels) [BT-NEML]."],
  moa: "Potent dopamine D2 receptor antagonist [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Oral dose is about 2–3 times the parenteral dose [FDA]. Decanoate onset 24–72 h; effect lasts up to 4 weeks or longer [FDA]."],
  ind: { adult: ["Psychotic disorders (oral) [FDA].", "Prolonged parenteral therapy in chronic schizophrenia (decanoate) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Oral", "Start 2.5–10 mg/day divided every 6–8 hours; usually under 20 mg/day; up to 40 mg/day if needed; maintenance 1–5 mg once daily [FDA]."], ["Decanoate depot (IM or SC)", "Start 12.5–25 mg (0.5–1 mL); later doses and interval by response (often every 4 weeks). Do not exceed 100 mg; above 50 mg increase cautiously in 12.5 mg steps. Use a dry syringe and 21-gauge or larger needle [FDA]."], ["Phenothiazine-naïve", "Consider a short-acting form first to establish response [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Contraindicated with liver damage [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal EPS/withdrawal after third-trimester exposure [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Elderly: lower doses; additive CNS depression [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "EPS, sedation, hypotension, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Supportive; anticholinergic for EPS; no adrenaline for hypotension [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Suspected or established subcortical brain damage [FDA].", "Large doses of hypnotics; comatose or severely depressed states [FDA].", "Blood dyscrasias, liver damage [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to fluphenazine (cross-sensitivity with phenothiazines) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Extrapyramidal symptoms, akathisia, sedation, dry mouth, weight gain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Tardive dyskinesia [FDA] [UNVERIFIED-KNOWLEDGE]", "Neuroleptic malignant syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Increased death in elderly with dementia [FDA]", "Agranulocytosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["EPS, tardive dyskinesia, blood counts if fever or infection [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: fluphenazine decanoate 25 mg/mL injection [BT-NEML].", strengths: "25 mg/mL.", stg: F3_NEP },
  calc: [
    { drug: "fluphenazine", indication_id: "depot", label: "Decanoate depot — start 12.5–25 mg IM/SC", route: "IM/SC", population: F3_ADULT, basis: "fixed", dose: { value: 12.5, unit: "mg", per: "dose", value_max: 25 }, interval_h: null, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Usually every 4 weeks by response", "Never over 100 mg; above 50 mg step up by 12.5 mg"], sources: ["FDA", "BT-NEML"] },
    { drug: "fluphenazine", indication_id: "oral", label: "Oral — start 2.5–10 mg/day in divided doses", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 2.5, unit: "mg", per: "day", value_max: 10 }, interval_h: 8, divided_doses: 3, caps: { max_daily: 40, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Nearest tablet strength", renal: [], flags: ["Every 6–8 hours", "Maintenance 1–5 mg once daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fluphenazine decanoate injection — FDA label (DailyMed)", F3_DM("044f49f3-f980-4ef8-8beb-78412702cd9d")], ["FDA", "Fluphenazine hydrochloride tablets — FDA label (DailyMed)", F3_DM("325af2a4-2280-4236-8cf8-44f5700ba73f")], F3_BT],
  dose: { tagline: "Potent typical antipsychotic; the depot is Bhutan's long-acting injection.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis", boxed: "Increased Mortality in Elderly Patients with Dementia-Related Psychosis — Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. Analyses of seventeen placebo-controlled trials (modal duration of 10 weeks), largely in patients taking atypical antipsychotic drugs, revealed a risk of death in drug treated patients of between 1.6 to 1.7 times the risk of death in placebo-treated patients. Over the course of a typical 10-week controlled trial, the rate of death in drug-treated patients was about 4.5%, compared to a rate of about 2.6% in the placebo group. Although the causes of death were varied, most of the deaths appeared to be either cardiovascular (e.g., heart failure, sudden death) or infectious (e.g., pneumonia) in nature. Observational studies suggest that, similar to atypical antipsychotic drugs, treatment with conventional antipsychotic drugs may increase mortality. The extent to which the findings of increased mortality in observational studies may be attributed to the antipsychotic drug as opposed to some characteristic(s) of the patients is not clear. Fluphenazine Decanoate Injection is not approved for the treatment of patients with dementia-related psychosis [FDA].",
    adult: [{ ind: "Schizophrenia (depot)", text: "12.5–25 mg IM/SC, then by response (often 4-weekly); max 100 mg.", calc: ["depot"], bt: "Bhutan NEML: decanoate 25 mg/mL." }, { ind: "Psychosis (oral)", text: "2.5–10 mg/day divided; up to 40 mg/day.", calc: ["oral"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FLURAZEPAM (FDA capsules ANDA072368) ---------- */
FDB_M("flurazepam", {
  inn: "Flurazepam", atc: "N05CD01", cls: "Benzodiazepine hypnotic (long-acting)",
  linked: [],
  forms: ["Capsules 15, 30 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Enhances GABA-A receptor activity; long-acting active metabolite [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Lower clearance in women and elderly [FDA]."],
  ind: { adult: ["Insomnia with difficulty falling or staying asleep [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Insomnia", "Women 15 mg; men 15 or 30 mg at bedtime; 15 mg may increase to 30 mg [FDA]."], ["Elderly or debilitated", "15 mg [FDA]."], ["Stopping", "Taper gradually [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: F3_NEP, hepatic: F3_NEP, pregnancy: "Not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Next-day impairment; opioids together can be fatal [FDA]." },
  tox: { human: "Somnolence, confusion, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Supportive; flumazenil with caution [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to flurazepam or other benzodiazepines (rare angioedema) [FDA]."],
  ae: { common: ["Dizziness, drowsiness, light-headedness, ataxia, falls [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression with opioids [FDA]", "Dependence and withdrawal [FDA]", "Complex sleep behaviours [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Next-day sedation, misuse [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "flurazepam", indication_id: "ins", label: "Insomnia — 15 mg at bedtime (men may need 30 mg)", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 30, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 15, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Elderly or debilitated: 15 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Flurazepam hydrochloride capsules — FDA label (DailyMed)", F3_DM("8f476891-1346-4e8c-ac1b-f8cbdc64f5a1")], F3_BT],
  dose: { tagline: "Long-acting benzodiazepine hypnotic — next-day drowsiness; never casually with opioids.",
    boxedTitle: "Risks from concomitant use with opioids; abuse, misuse, and addiction; and dependence and withdrawal reactions", boxed: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of these drugs in patients for whom alternative treatment options are inadequate. Limit dosages and durations to the minimum required. Follow patients for signs and symptoms of respiratory depression and sedation. The use of benzodiazepines, including flurazepam hydrochloride capsules, exposes users to risks of abuse, misuse, and addiction, which can lead to overdose or death. Abuse and misuse of benzodiazepines commonly involve concomitant use of other medications, alcohol, and/or illicit substances, which is associated with an increased frequency of serious adverse outcomes. Before prescribing flurazepam hydrochloride capsules, and throughout treatment, assess each patient's risk for abuse, misuse, and addiction. The continued use of benzodiazepines, including flurazepam hydrochloride capsules, may lead to clinically significant physical dependence. The risks of dependence and withdrawal increase with longer treatment duration and higher daily dose. Abrupt discontinuation or rapid dosage reduction of flurazepam hydrochloride capsules after continued use may precipitate acute withdrawal reactions, which can be life-threatening. To reduce the risk of withdrawal reactions, use a gradual taper to discontinue flurazepam hydrochloride capsules or reduce the dosage [FDA].",
    adult: [{ ind: "Insomnia", text: "15 mg (women, elderly) or 15–30 mg (men) at bedtime.", calc: ["ins"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FLURBIPROFEN (FDA tablets ANDA074431) ---------- */
FDB_M("flurbiprofen", {
  inn: "Flurbiprofen", atc: "M01AE09 R02AX01 S01BC04", cls: "NSAID (propionic acid)",
  linked: [],
  forms: ["Tablets 50, 100 mg; lozenges 8.75 mg and eye drops 0.03% (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits cyclo-oxygenase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life unchanged in renal impairment [FDA]."],
  ind: { adult: ["Rheumatoid arthritis and osteoarthritis [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["RA / OA", "200–300 mg/day divided two, three or four times daily; largest single dose 100 mg [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Monitor in renal or hepatic impairment, heart failure, dehydration [FDA]; avoid in advanced renal disease [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Monitor [FDA].", pregnancy: "Avoid from about 20 weeks and in the third trimester [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Lowest effective dose for the shortest time [FDA]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity (anaphylaxis, serious skin reactions) [FDA].", "Asthma, urticaria or allergic reactions after aspirin/NSAIDs [FDA] [UNVERIFIED-KNOWLEDGE].", "CABG setting [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dyspepsia, nausea, diarrhoea, headache, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["MI, stroke [FDA]", "GI bleeding, ulceration, perforation [FDA]", "Renal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["BP, renal function, GI symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "flurbiprofen", indication_id: "arth", label: "RA / OA — 200–300 mg/day in 2–4 doses (max 100 mg per dose)", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Or 50–100 mg three or four times daily to 200–300 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Flurbiprofen tablets USP — FDA label (DailyMed)", F3_DM("4670cf21-eb0e-4f5a-ab22-41af85733525")], F3_BT],
  dose: { tagline: "NSAID for arthritis — 200–300 mg/day, maximum 100 mg per dose.",
    boxedTitle: "Risk of serious cardiovascular and gastrointestinal events", boxed: "Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. Flurbiprofen tablets are contraindicated in the setting of coronary artery bypass graft (CABG) surgery. NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients and patients with a prior history of peptic ulcer disease and/or GI bleeding are at greater risk for serious GI events [FDA].",
    adult: [{ ind: "RA / OA", text: "200–300 mg/day in 2–4 doses; max 100 mg per dose.", calc: ["arth"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

F3_PET("flurpiridaz-18f-", "Flurpiridaz (18F)", "Flyrcado (flurpiridaz F 18)", "3bb6caf8-ac98-46c7-a9f0-961e66032705", "Same day: rest 93–111 MBq; pharmacologic stress 222–241 MBq; exercise stress 333–352 MBq (two-day protocol: 93–111 MBq each)", "PET myocardial perfusion imaging at rest or stress in adults with known or suspected coronary artery disease", "IV injection");
F3_PET("flutemetamol-18f-", "Flutemetamol (18F)", "Vizamyl (flutemetamol F 18)", "b3558f16-8f9a-4e55-8d9c-836427ebaa57", "185 MBq (5 mCi) IV bolus within 40 seconds (up to 10 mL), then 5–15 mL saline flush", "PET of the brain to estimate amyloid-beta neuritic plaque density in adults with cognitive impairment", "obtain 10–20-minute images starting about 60–120 minutes after");

/* ---------- FLUTICASONE FUROATE (FDA Flonase Sensimist NDA022051 + Arnuity Ellipta) ---------- */
FDB_M("fluticasone-furoate", {
  inn: "Fluticasone furoate", atc: "R01AD12 R03BA09", cls: "Corticosteroid (intranasal / inhaled)",
  linked: [],
  forms: ["Nasal spray 27.5 mcg/spray [FDA].", "Inhalation powder (Ellipta) 50, 100, 200 mcg per actuation [FDA].", "Bhutan: fluticasone furoate nasal spray 27.5 mcg [BT-NEML]."],
  moa: "Potent glucocorticoid receptor agonist reducing airway inflammation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F3_NEP],
  ind: { adult: ["Allergic rhinitis symptoms (nasal) [FDA].", "Maintenance treatment of asthma (Ellipta) [FDA]."], paed: ["Nasal from 2 years; Ellipta asthma from 5 years [FDA]."] },
  adult: [["Allergic rhinitis (12 years and over)", "Week 1: 2 sprays each nostril once daily; then 1–2 sprays each nostril once daily as needed; ask a doctor after 6 months of daily use [FDA]."], ["Asthma (Ellipta, 12 years and over)", "1 inhalation of 100 or 200 mcg once daily by prior therapy and severity; rinse mouth after [FDA]."]],
  paed: { tiers: ["Nasal 2–11 years: 1 spray each nostril once daily, adult supervision; limit to the shortest time (growth) [FDA].", "Asthma 5–11 years: Ellipta 50 mcg once daily [FDA]."], transition: "12 years: adult dose.", calcNote: "Sprays/inhalations — no calculator." },
  adj: { renal: "Not applicable [NEP].", hepatic: "Inhaled: caution in moderate–severe hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: F3_NEP, other: "Growth monitoring in children; strong CYP3A4 inhibitors increase systemic exposure [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: F3_NEP },
  contra: ["Inhaled: primary treatment of status asthmaticus; severe milk protein hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nasal: epistaxis, headache. Inhaled: nasopharyngitis, oral candidiasis, dysphonia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Adrenal suppression, reduced growth velocity, glaucoma/cataract [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Growth in children; eye examination with long use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: fluticasone furoate nasal spray 27.5 mcg/actuation (replaced fluticasone propionate nasal) [BT-NEML].", strengths: "27.5 mcg/spray.", stg: F3_NEP }, calc: [],
  sources: [["FDA", "Flonase Sensimist (fluticasone furoate nasal spray) — FDA label (DailyMed)", F3_DM("107100af-7ca2-44e8-b067-c0ab0a19a6dc")], ["FDA", "Fluticasone furoate Ellipta — FDA label (DailyMed)", F3_DM("d3e797fc-2636-49a0-b89e-5246b18ee440")], F3_BT],
  dose: { tagline: "Once-daily steroid nasal spray (Bhutan NEML) and inhaler.",
    adult: [{ ind: "Allergic rhinitis", text: "2 sprays each nostril once daily, then 1–2.", bt: "Bhutan NEML: 27.5 mcg nasal spray." }, { ind: "Asthma (Ellipta)", text: "100–200 mcg once daily." }],
    child: [{ ind: "Rhinitis 2–11 years", text: "1 spray each nostril once daily." }, { ind: "Asthma 5–11 years", text: "50 mcg once daily." }] }
});

/* ---------- FLUVASTATIN (FDA ER tablets NDA021192) ---------- */
FDB_M("fluvastatin", {
  inn: "Fluvastatin", atc: "C10AA04", cls: "HMG-CoA reductase inhibitor (statin)",
  linked: [],
  forms: ["Extended-release tablets 80 mg; capsules 20, 40 mg (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML (atorvastatin is the NEML statin) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits HMG-CoA reductase, lowering LDL-C [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2C9 metabolism [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Reduce coronary revascularisation risk in CHD; primary hyperlipidaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["HeFH from 10 years [FDA]."] },
  adult: [["Hyperlipidaemia", "80 mg ER once daily at any time, with or without food; do not break or crush [FDA]."]],
  paed: { tiers: ["10 years and over needing 80 mg: 80 mg ER once daily [FDA]."], transition: "—", calcNote: "ER tablet." },
  adj: { renal: "Renal impairment raises myopathy risk [FDA].", hepatic: "Contraindicated in acute liver failure or decompensated cirrhosis [FDA].", pregnancy: "Stop when pregnancy is recognised [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Myopathy risk factors: age 65+, hypothyroidism, renal impairment, interacting drugs [FDA]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Acute liver failure or decompensated cirrhosis [FDA].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dyspepsia, headache, myalgia, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myopathy, rhabdomyolysis, immune-mediated necrotising myopathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic dysfunction [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lipids; liver tests as indicated; CK if muscle symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fluvastatin", indication_id: "std", label: "Hyperlipidaemia — 80 mg ER once daily", route: "PO", population: { min_age_months: 120, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 80, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 80, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [], flags: ["Do not break or crush"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fluvastatin sodium extended-release tablets — FDA label (DailyMed)", F3_DM("5ab4296c-87c2-4c64-b218-d620eef51310")], F3_BT],
  dose: { tagline: "Low–moderate intensity statin — 80 mg ER once daily.",
    adult: [{ ind: "Hyperlipidaemia", text: "80 mg ER once daily.", calc: ["std"] }],
    child: [{ ind: "HeFH 10 years+", text: "80 mg ER once daily.", calc: ["std"] }] }
});

/* ---------- FLUVOXAMINE (FDA tablets NDA021519) ---------- */
FDB_M("fluvoxamine", {
  inn: "Fluvoxamine", atc: "N06AB08", cls: "Selective serotonin reuptake inhibitor (SSRI)",
  linked: [],
  forms: ["Tablets 25, 50, 100 mg; ER capsules (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits serotonin reuptake [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP1A2 and CYP2C19 inhibitor — many interactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Obsessive-compulsive disorder [FDA]."], paed: ["OCD 8–17 years [FDA]."] },
  adult: [["OCD", "Start 50 mg at bedtime; increase by 50 mg every 4–7 days; maximum 300 mg/day; divide doses over 100 mg/day [FDA]."], ["Elderly / hepatic impairment", "Lower dose and slower titration [FDA]."]],
  paed: { tiers: ["8–17 years: start 25 mg at bedtime; increase by 25 mg every 4–7 days; maximum 200 mg/day (8–11 years) or 300 mg/day (12–17 years); divide doses over 50 mg/day [FDA]."], transition: "Adult dose.", calcNote: "Bedtime start." },
  adj: { renal: F3_NEP, hepatic: "Decreased clearance — modify dose and titration [FDA].", pregnancy: F3_NEP, other: "Contraindicated with tizanidine, thioridazine, alosetron, pimozide, MAOIs [FDA]." },
  tox: { human: "Drowsiness, vomiting, diarrhoea, dizziness, coma, seizures, bradycardia, hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Supportive; ECG [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Tizanidine, thioridazine, alosetron or pimozide [FDA].", "MAOIs within 14 days, linezolid, IV methylene blue [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, somnolence, insomnia, headache, asthenia, ejaculation disorders [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidality in young people [FDA]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Bleeding, hyponatraemia, mania [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality; interacting drug levels (theophylline, warfarin, clozapine) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fluvoxamine", indication_id: "adult", label: "OCD adult — start 50 mg at bedtime", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Increase 50 mg every 4–7 days; max 300 mg/day", "Divide doses over 100 mg/day"], sources: ["FDA"] },
    { drug: "fluvoxamine", indication_id: "child", label: "OCD 8–17 years — start 25 mg at bedtime", route: "PO", population: { min_age_months: 96, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Max 200 mg/day if 8–11 years; 300 mg/day if 12–17 years", "Divide doses over 50 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fluvoxamine maleate tablets — FDA label (DailyMed)", F3_DM("5198b1c8-8dd6-4b8f-bd85-294ac468af53")], F3_BT],
  dose: { tagline: "SSRI for OCD — strong CYP1A2 inhibitor with many interactions.",
    boxedTitle: "Suicidality and antidepressant drugs", boxed: "Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of Fluvoxamine Maleate Tablets or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Fluvoxamine Maleate Tablets are not approved for use in pediatric patients except for patients with obsessive compulsive disorder (OCD) [FDA].",
    adult: [{ ind: "OCD", text: "50 mg at bedtime, up to 300 mg/day.", calc: ["adult"] }],
    child: [{ ind: "OCD 8–17 years", text: "25 mg at bedtime, up to 200–300 mg/day.", calc: ["child"] }] }
});

/* ---------- FOLLITROPIN ALFA (FDA GONAL-f BLA020378) ---------- */
FDB_M("follitropin-alfa", {
  inn: "Follitropin alfa", atc: "G03GA05", cls: "Recombinant FSH (gonadotropin)",
  linked: [],
  forms: ["Multi-dose vials and pens (international units) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Stimulates ovarian follicle development and spermatogenesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F3_NEP],
  ind: { adult: ["Ovulation induction; multiple follicle development in ART; spermatogenesis in men with hypogonadotropic hypogonadism [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not applicable [NEP]."] },
  adult: [["Ovulation induction", "Start 75 IU SC daily for 14 days, then individualise; not over 300 IU/day [FDA]."], ["ART", "Start 150 IU SC daily; adjust after 3–5 days by 75–150 IU; not over 450 IU/day [FDA]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Specialist — no calculator." },
  adj: { renal: F3_NEP, hepatic: F3_NEP, pregnancy: "Contraindicated in pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Ultrasound and oestradiol monitoring for OHSS [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Ovarian hyperstimulation [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Withhold hCG; manage OHSS [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Prior hypersensitivity to recombinant FSH or excipients [FDA].", "Uncontrolled thyroid/adrenal dysfunction, pituitary tumour, primary ovarian/gonadal failure, abnormal uterine bleeding, ovarian cysts not due to PCOS, pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, abdominal pain, ovarian cysts, injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ovarian hyperstimulation syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Multiple pregnancy, thromboembolism, ovarian torsion [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Ultrasound follicle monitoring, oestradiol [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC, calc: [],
  sources: [["FDA", "Gonal-f (follitropin alfa) — FDA label (DailyMed)", F3_DM("ae85b9c3-e7eb-4981-a5d9-346050e8f189")], F3_BT],
  dose: { tagline: "Recombinant FSH for fertility treatment — specialist with ultrasound monitoring.",
    adult: [{ ind: "Ovulation induction", text: "75 IU daily × 14 days, max 300 IU/day." }, { ind: "ART", text: "150 IU daily, max 450 IU/day." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- FOMEPIZOLE (FDA injection ANDA078537) ---------- */
FDB_M("fomepizole", {
  inn: "Fomepizole", atc: "V03AB34", cls: "Alcohol dehydrogenase inhibitor (antidote)",
  linked: [],
  forms: ["Injection 1 g/mL (1.5 g/1.5 mL) [FDA].", "Bhutan: not on the NEML (ethanol used as antidote) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks alcohol dehydrogenase, preventing toxic metabolites of methanol and ethylene glycol [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Dialysable — give every 4 hours during haemodialysis [FDA]."],
  ind: { adult: ["Ethylene glycol or methanol poisoning (known or suspected) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established in the label; used by mg/kg [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Poisoning", "Loading 15 mg/kg IV, then 10 mg/kg every 12 hours for 4 doses, then 15 mg/kg every 12 hours until levels are undetectable or under 20 mg/dL and the patient is asymptomatic with normal pH [FDA]."], ["Administration", "Slow IV infusion over 30 minutes; do not use polycarbonate syringes or needles [FDA]."], ["Haemodialysis", "Dose every 4 hours during dialysis [FDA]."]],
  paed: { tiers: ["Same mg/kg used in practice [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "1 g/mL — dilute before infusion." },
  adj: { renal: "Dose more often during haemodialysis [FDA].", hepatic: F3_NEP, pregnancy: F3_NEP, other: "Do not give with ethanol (mutual inhibition) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, dizziness, drowsiness [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Supportive; dialysable [FDA]." },
  contra: ["Documented serious hypersensitivity to fomepizole or other pyrazoles [FDA]."],
  ae: { common: ["Headache, nausea, dizziness, bad taste [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Methanol/ethylene glycol levels, pH, anion gap, osmolar gap [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fomepizole", indication_id: "load", label: "Toxic alcohol — loading 15 mg/kg IV over 30 min", route: "IV", population: F3_ANY, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1000, unit: "mg/mL" }], rounding: "0.01 mL (then dilute)", renal: [], flags: ["Then 10 mg/kg every 12 h × 4, then 15 mg/kg every 12 h", "Every 4 h during haemodialysis"], sources: ["FDA"] },
    { drug: "fomepizole", indication_id: "maint", label: "Doses 2–5 — 10 mg/kg every 12 h", route: "IV", population: F3_ANY, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1000, unit: "mg/mL" }], rounding: "0.01 mL (then dilute)", renal: [], flags: ["4 doses, then 15 mg/kg every 12 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fomepizole injection — FDA label (DailyMed)", F3_DM("256910fe-91f2-48f6-b0b4-55edc52dacd4")], F3_BT],
  dose: { tagline: "Antidote for methanol and ethylene glycol — 15 mg/kg load.",
    adult: [{ ind: "Methanol / ethylene glycol", text: "15 mg/kg, then 10 mg/kg 12-hourly × 4, then 15 mg/kg 12-hourly.", calc: ["load", "maint"] }],
    child: [{ ind: "Methanol / ethylene glycol", text: "Same mg/kg (specialist).", calc: ["load", "maint"] }] }
});

/* ---------- FONDAPARINUX (FDA NDA021345) ---------- */
FDB_M("fondaparinux", {
  inn: "Fondaparinux", atc: "B01AX05", cls: "Synthetic factor Xa inhibitor (pentasaccharide)", risk: "High-alert — anticoagulants are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Pre-filled syringes 2.5, 5, 7.5, 10 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Antithrombin-mediated selective inhibition of factor Xa [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — contraindicated if CrCl under 30 [FDA]."],
  ind: { adult: ["DVT prophylaxis in hip fracture, hip/knee replacement and abdominal surgery [FDA].", "Treatment of DVT and PE (with warfarin) [FDA]."], paed: ["VTE treatment, 10 kg and over [FDA]."] },
  adult: [["Prophylaxis", "2.5 mg SC once daily, first dose 6–8 h after surgery once haemostasis is established, for 5–9 days; hip fracture: extend up to 24 more days [FDA]."], ["Treatment DVT/PE", "Under 50 kg 5 mg; 50–100 kg 7.5 mg; over 100 kg 10 mg SC once daily; at least 5 days until INR 2–3 on warfarin [FDA]."]],
  paed: { tiers: ["VTE treatment, 10 kg and over: 0.1 mg/kg SC once daily [FDA]."], transition: "Adult weight bands.", calcNote: "Weight bands." },
  adj: { renal: "CrCl under 30: contraindicated; 30–50: use with caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild–moderate: no adjustment; bleeding risk [FDA].", pregnancy: F3_NEP, other: "Prophylaxis contraindicated under 50 kg [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bleeding [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "No antidote; protamine ineffective [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe renal impairment (CrCl under 30) [FDA].", "Active major bleeding [FDA] [UNVERIFIED-KNOWLEDGE].", "Bacterial endocarditis [FDA] [UNVERIFIED-KNOWLEDGE].", "Thrombocytopenia with positive anti-platelet antibody test with fondaparinux [FDA] [UNVERIFIED-KNOWLEDGE].", "Prophylaxis in patients under 50 kg [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Bleeding, anaemia, rash, injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Major bleeding [FDA] [UNVERIFIED-KNOWLEDGE]", "Spinal/epidural haematoma [FDA]", "Thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Platelets, creatinine, bleeding [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fondaparinux", indication_id: "proph", label: "Surgical prophylaxis — 2.5 mg SC once daily (50 kg+)", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: 50, max_weight_kg: null }, basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 2.5, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "2.5 mg syringe", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "CrCl under 30: contraindicated [FDA]" }], flags: ["First dose 6–8 h after surgery"], sources: ["FDA"] },
    { drug: "fondaparinux", indication_id: "treat", label: "DVT/PE treatment — by weight", route: "SC", population: F3_ADULT, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 0, max_weight_kg: 50, text: "5 mg SC once daily", daily: 5 }, { min_weight_kg: 50, max_weight_kg: 100.0001, text: "7.5 mg SC once daily", daily: 7.5 }, { min_weight_kg: 100.0001, max_weight_kg: null, text: "10 mg SC once daily", daily: 10 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Pre-filled syringe", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "CrCl under 30: contraindicated [FDA]" }], flags: ["At least 5 days, until INR 2–3 on warfarin"], sources: ["FDA"] },
    { drug: "fondaparinux", indication_id: "paed", label: "VTE treatment child 10 kg+ — 0.1 mg/kg SC once daily", route: "SC", population: { min_age_months: null, max_age_months: 216, min_weight_kg: 10, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.1, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Per syringe/dilution", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fondaparinux sodium injection — FDA label (DailyMed)", F3_DM("4b65f642-87f7-4da5-a9c9-02cd1f8d9d16")], F3_BT],
  dose: { tagline: "Once-daily SC factor Xa inhibitor — not if CrCl under 30.",
    boxedTitle: "Spinal/epidural hematomas", boxed: "Epidural or spinal hematomas may occur in patients who are anticoagulated with low molecular weight heparins (LMWH), heparinoids, or fondaparinux sodium and are receiving neuraxial anesthesia or undergoing spinal puncture. These hematomas may result in long-term or permanent paralysis. Consider these risks when scheduling patients for spinal procedures. Factors that can increase the risk of developing epidural or spinal hematomas in these patients include: • use of indwelling epidural catheters • concomitant use of other drugs that affect hemostasis, such as non-steroidal anti-inflammatory drugs (NSAIDs), platelet inhibitors, or other anticoagulants • a history of traumatic or repeated epidural or spinal puncture • a history of spinal deformity or spinal surgery • Optimal timing between the administration of fondaparinux sodium and neuraxial procedures is not known. Monitor patients frequently for signs and symptoms of neurologic impairment. If neurologic compromise is noted, urgent treatment is necessary. Consider the benefit and risks before neuraxial intervention in patients anticoagulated or to be anticoagulated for thromboprophylaxis [FDA].",
    adult: [{ ind: "Surgical prophylaxis", text: "2.5 mg SC once daily.", calc: ["proph"] }, { ind: "DVT / PE treatment", text: "5 / 7.5 / 10 mg by weight.", calc: ["treat"] }],
    child: [{ ind: "VTE, 10 kg+", text: "0.1 mg/kg once daily.", calc: ["paed"] }] }
});

/* ---------- FORMOTEROL (FDA inhalation solution NDA022007) ---------- */
FDB_M("formoterol", {
  inn: "Formoterol", atc: "R03AC13", cls: "Long-acting beta-2 agonist (LABA)",
  linked: [],
  forms: ["Inhalation solution 20 mcg/2 mL for nebuliser [FDA]; DPI and combinations in other labels.", "Bhutan: not on the NEML as a single drug [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Long-acting beta-2 agonist bronchodilator [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F3_NEP],
  ind: { adult: ["Maintenance treatment of bronchoconstriction in COPD [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["COPD", "20 mcg by nebuliser twice daily (morning and evening); not more than 40 mcg/day [FDA]."]],
  paed: { tiers: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Not studied [FDA].", hepatic: "Not studied [FDA].", pregnancy: F3_NEP, other: "Not for acute symptoms; not for asthma without an inhaled corticosteroid [FDA]." },
  tox: { human: "Tachycardia, tremor, hypokalaemia, hyperglycaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Supportive; cautious cardioselective beta-blocker [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["LABA without an inhaled corticosteroid in asthma [FDA].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, nausea, nasopharyngitis, dry mouth, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Asthma-related death (LABA monotherapy) [FDA] [UNVERIFIED-KNOWLEDGE]", "Paradoxical bronchospasm, arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Heart rate, potassium, glucose in at-risk patients [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "formoterol", indication_id: "copd", label: "COPD — 20 mcg nebulised twice daily", route: "Inhaled", population: F3_ADULT, basis: "fixed", dose: { value: 20, unit: "mcg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 20, max_daily: 40, unit: "mcg" }, weight_basis: "NEP", formulations: [], rounding: "One 2 mL vial", renal: [], flags: ["Not for acute symptoms"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Formoterol fumarate inhalation solution — FDA label (DailyMed)", F3_DM("6c1a6c53-af85-4220-9ce3-2373e0928f7f")], F3_BT],
  dose: { tagline: "Nebulised LABA for COPD — never alone in asthma.",
    adult: [{ ind: "COPD", text: "20 mcg nebulised twice daily; max 40 mcg/day.", calc: ["copd"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- FOSAMPRENAVIR (FDA tablets ANDA204024) ---------- */
FDB_M("fosamprenavir", {
  inn: "Fosamprenavir", atc: "J05AE07", cls: "HIV protease inhibitor (prodrug of amprenavir)",
  linked: [],
  forms: ["Tablets 700 mg; oral suspension 50 mg/mL (other labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Amprenavir inhibits HIV-1 protease [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic CYP3A4 metabolism — reduce in hepatic impairment [FDA]."],
  ind: { adult: ["HIV-1 with other antiretrovirals [FDA]."], paed: ["Per label weight-based (with ritonavir) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Therapy-naïve", "1,400 mg twice daily; or 1,400 mg once daily + ritonavir 200 mg or 100 mg once daily; or 700 mg twice daily + ritonavir 100 mg twice daily [FDA]."], ["PI-experienced", "700 mg twice daily + ritonavir 100 mg twice daily [FDA]."], ["Pregnancy", "700 mg twice daily + ritonavir 100 mg twice daily (selected women) [FDA]."]],
  paed: { tiers: ["Per label weight-based regimens [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult calculator." },
  adj: { renal: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Reduced doses per label for mild, moderate, severe impairment [FDA].", pregnancy: "See dosing [FDA].", other: "Sulfonamide moiety; many CYP3A interactions [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Clinically significant hypersensitivity (e.g. SJS) to any component or amprenavir [FDA].", "Drugs highly dependent on CYP3A with serious toxicity (per label list) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, headache, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe skin reactions including SJS [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity, hyperlipidaemia, hyperglycaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, lipids, glucose, viral load [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fosamprenavir", indication_id: "boosted", label: "HIV — 700 mg twice daily + ritonavir 100 mg twice daily", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 700, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 1400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 700, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Always with ritonavir 100 mg twice daily", "Hepatic impairment: reduced doses per label"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fosamprenavir calcium tablets — FDA label (DailyMed)", F3_DM("5cd1eead-9fc1-426c-bee8-214ffa7d9dc1")], F3_BT],
  dose: { tagline: "Older boosted HIV protease inhibitor.",
    adult: [{ ind: "HIV-1", text: "700 mg + ritonavir 100 mg twice daily (or naïve regimens per label).", calc: ["boosted"] }],
    child: [{ ind: "Children", text: "Per label weight-based." }] }
});

/* ---------- FOSCARNET (FDA FOSCAVIR NDA020068) ---------- */
FDB_M("foscarnet", {
  inn: "Foscarnet", atc: "J05AD01", cls: "Pyrophosphate analogue antiviral",
  linked: [],
  forms: ["Injection 24 mg/mL (250 mL bottle) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Directly inhibits viral DNA polymerase pyrophosphate-binding site [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — dose by CrCl per kg (label table) [FDA]."],
  ind: { adult: ["CMV retinitis in AIDS [FDA].", "Aciclovir-resistant mucocutaneous HSV in immunocompromised patients [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["CMV retinitis induction (normal renal function)", "90 mg/kg IV over 1.5–2 hours every 12 hours, or 60 mg/kg over at least 1 hour every 8 hours, for 2–3 weeks [FDA]."], ["Aciclovir-resistant HSV", "40 mg/kg over at least 1 hour every 8 or 12 hours for 2–3 weeks or until healed [FDA]."], ["Maintenance (CMV)", "90–120 mg/kg/day as a single infusion [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Renal", "Adjust every dose by CrCl (mL/min/kg) using the label table; hydrate before and during [FDA]."], ["Infusion", "Pump only — never rapid or bolus IV [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "No calculator — renal table is per kg and must be read from the label." },
  adj: { renal: "Dose by CrCl/kg table; stop if CrCl under 0.4 mL/min/kg [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: F3_NEP, pregnancy: F3_NEP, other: "Electrolyte disturbances (Ca, Mg, K, phosphate) — seizures [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Seizures, renal failure, paraesthesia, electrolyte disturbance [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Haemodialysis and hydration; correct electrolytes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Clinically significant hypersensitivity to foscarnet [FDA]."],
  ae: { common: ["Fever, nausea, anaemia, diarrhoea, headache, raised creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Renal impairment [FDA]", "Seizures from mineral/electrolyte changes [FDA]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Genital ulceration [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Creatinine 2–3 times weekly in induction; calcium, magnesium, potassium, phosphate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC, calc: [],
  sources: [["FDA", "Foscavir (foscarnet sodium) — FDA label (DailyMed)", F3_DM("90e3da4e-3b1f-428b-99ca-e4bed1c80028")], F3_BT],
  dose: { tagline: "IV antiviral for CMV and resistant HSV — nephrotoxic; dose by CrCl per kg.",
    boxedTitle: "Renal impairment and seizures", boxed: "RENAL IMPAIRMENT IS THE MAJOR TOXICITY OF FOSCAVIR. FREQUENT MONITORING OF SERUM CREATININE, WITH DOSE ADJUSTMENT FOR CHANGES IN RENAL FUNCTION, AND ADEQUATE HYDRATION WITH ADMINISTRATION OF FOSCAVIR IS IMPERATIVE. SEIZURES, RELATED TO ALTERATIONS IN PLASMA MINERALS AND ELECTROLYTES, HAVE BEEN ASSOCIATED WITH FOSCAVIR TREATMENT. THEREFORE, PATIENTS MUST BE CAREFULLY MONITORED FOR SUCH CHANGES AND THEIR POTENTIAL SEQUELAE. MINERAL AND ELECTROLYTE SUPPLEMENTATION MAY BE REQUIRED. FOSCAVIR IS INDICATED FOR USE ONLY IN IMMUNOCOMPROMISED PATIENTS WITH CMV RETINITIS AND MUCOCUTANEOUS ACYCLOVIR-RESISTANT HSV INFECTIONS [FDA].",
    adult: [{ ind: "CMV retinitis", text: "90 mg/kg 12-hourly or 60 mg/kg 8-hourly × 2–3 weeks (renally adjusted)." }, { ind: "Resistant HSV", text: "40 mg/kg 8- or 12-hourly." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FOSDENOPTERIN (FDA NULIBRY NDA214018) ---------- */
FDB_M("fosdenopterin", {
  inn: "Fosdenopterin", atc: "A16AX19", cls: "Cyclic pyranopterin monophosphate (cPMP) replacement",
  linked: [],
  forms: ["Powder for injection 9.5 mg vial [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not available [BT-NEML]."],
  moa: "Replaces cPMP in molybdenum cofactor deficiency type A, restoring sulfite oxidase activity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal and hepatic impairment effects unknown [FDA]."],
  ind: { adult: ["Molybdenum cofactor deficiency type A [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["MoCD type A from birth [FDA]."] },
  adult: [["1 year and over", "0.9 mg/kg IV once daily [FDA]."], ["Start", "Begin for known or presumed MoCD type A; stop if not confirmed genetically [FDA]."]],
  paed: { tiers: ["Preterm (under 37 weeks): 0.4 mg/kg once daily initially; 0.7 mg/kg at months 1–2; 0.9 mg/kg from month 3 [FDA].", "Term: 0.55 mg/kg initially; 0.75 mg/kg at months 1–2; 0.9 mg/kg from month 3 [FDA]."], transition: "0.9 mg/kg from 1 year.", calcNote: "Under 2 mL: slow IV push." },
  adj: { renal: "Unknown [FDA].", hepatic: "Unknown [FDA].", pregnancy: F3_NEP, other: "Photosensitivity — avoid sun exposure [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: F3_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Catheter complications, pyrexia, respiratory infections, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Phototoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Urinary S-sulfocysteine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fosdenopterin", indication_id: "y1", label: "MoCD type A, 1 year and over — 0.9 mg/kg IV once daily", route: "IV", population: { min_age_months: 12, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.9, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Per reconstitution", renal: [], flags: ["Infants: titration table by gestation (see dosing)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nulibry (fosdenopterin) — FDA label (DailyMed)", F3_DM("736aeea3-f206-454d-95d0-fd30964e8aab")], F3_BT],
  dose: { tagline: "Daily IV replacement for molybdenum cofactor deficiency type A.",
    adult: [{ ind: "MoCD type A", text: "0.9 mg/kg IV once daily.", calc: ["y1"] }],
    child: [{ ind: "Infants", text: "Preterm 0.4 → 0.7 → 0.9 mg/kg; term 0.55 → 0.75 → 0.9 mg/kg (months 0, 1–2, 3+)." }] }
});

/* ---------- FOSFOMYCIN (FDA tromethamine granules ANDA210426) ---------- */
FDB_M("fosfomycin", {
  inn: "Fosfomycin", atc: "J01XX01", cls: "Phosphonic acid antibacterial",
  linked: [],
  forms: ["Granules for oral solution 3 g sachet (fosfomycin tromethamine) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits MurA, blocking cell-wall synthesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life rises from 11 to 50 hours as CrCl falls from 54 to 7 mL/min [FDA]."],
  ind: { adult: ["Uncomplicated UTI (acute cystitis) in women 18 years and over (E. coli, E. faecalis) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Acute cystitis (women)", "One 3 g sachet once, mixed with water, with or without food; never take dry [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Single sachet." },
  adj: { renal: "Excretion falls with renal impairment [FDA].", hepatic: F3_NEP, pregnancy: F3_NEP, other: "Metoclopramide lowers levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Vestibular loss, hearing impairment, metallic taste reported [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Supportive; hydration [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity [FDA]."],
  ae: { common: ["Diarrhoea, headache, vaginitis, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptoms; urine culture if persistent [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fosfomycin", indication_id: "uti", label: "Acute cystitis (women) — 3 g single sachet", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 3000, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 3000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "One sachet in water", renal: [], flags: ["Single dose", "Mix with water before drinking"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fosfomycin tromethamine granules — FDA label (DailyMed)", F3_DM("36bca22f-49ea-42ce-926b-035c42eb6038")], F3_BT],
  dose: { tagline: "Single-dose 3 g sachet for uncomplicated cystitis in women.",
    adult: [{ ind: "Acute cystitis", text: "3 g once in water.", calc: ["uti"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FOSINOPRIL (FDA tablets ANDA091163) ---------- */
FDB_M("fosinopril", {
  inn: "Fosinopril", atc: "C09AA09", cls: "ACE inhibitor",
  linked: [],
  forms: ["Tablets 10, 20, 40 mg [FDA].", "Bhutan: not on the NEML (enalapril is the NEML ACE inhibitor) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits angiotensin-converting enzyme [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Dual hepatic and renal elimination — usually no adjustment in renal impairment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypertension [FDA].", "Heart failure (adjunct) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Hypertension 6–16 years over 50 kg [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hypertension", "Start 10 mg once daily; usual 20–40 mg; some respond to 80 mg; twice-daily if trough effect wanes [FDA]."], ["Heart failure", "Start 10 mg once daily (5 mg if diuresed/renal impairment), up to 40 mg [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["6–16 years, over 50 kg: 5–10 mg once daily [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Tablets." },
  adj: { renal: "Usually no adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated — fetal toxicity [FDA].", other: "Angioedema; hyperkalaemia with potassium-sparing drugs; not with aliskiren in diabetes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "IV saline [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to fosinopril or any ACE inhibitor (including ACE-inhibitor angioedema) [FDA].", "Aliskiren in diabetes [FDA] [UNVERIFIED-KNOWLEDGE].", "Within 36 hours of sacubitril/valsartan [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dizziness, cough, hypotension, hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Angioedema [FDA] [UNVERIFIED-KNOWLEDGE]", "Fetal toxicity [FDA]", "Renal impairment, agranulocytosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["BP, potassium, creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fosinopril", indication_id: "htn", label: "Hypertension — start 10 mg once daily", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Usual 20–40 mg once daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Fosinopril sodium tablets — FDA label (DailyMed)", F3_DM("aee04f17-8ee9-42f5-861f-b6ba17220ca4")], F3_BT],
  dose: { tagline: "ACE inhibitor with dual elimination — never in pregnancy.",
    boxedTitle: "Fetal toxicity", boxed: "When pregnancy is detected, discontinue fosinopril sodium tablets as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "10 mg once daily; usual 20–40 mg.", calc: ["htn"] }],
    child: [{ ind: "6–16 years, over 50 kg", text: "5–10 mg once daily." }] }
});

/* ---------- FOSPHENYTOIN (FDA CEREBYX NDA020450) ---------- */
FDB_M("fosphenytoin", {
  inn: "Fosphenytoin", atc: "N03AB05", cls: "Phenytoin prodrug (IV/IM antiseizure)",
  linked: [],
  forms: ["Injection 50 mg phenytoin sodium equivalents (PE)/mL [FDA].", "Bhutan: not on the NEML (phenytoin injection is used) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converted to phenytoin; blocks voltage-gated sodium channels [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Always prescribe and give in mg PE [FDA].", "Monitor unbound phenytoin in renal/hepatic impairment or low albumin [FDA]."],
  ind: { adult: ["Generalised tonic-clonic status epilepticus; prevention and treatment of seizures during neurosurgery; short-term substitute for oral phenytoin [FDA]."], paed: ["Same, including neonates (per label) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Status epilepticus", "Loading 15–20 mg PE/kg IV at 100–150 mg PE/min [FDA]."], ["Non-emergent loading", "10–20 mg PE/kg IV or IM; maintenance 4–6 mg PE/kg/day in divided doses [FDA]."], ["Maximum rate", "150 mg PE/min (adults) [FDA]."], ["IM", "Ordinarily not for status epilepticus [FDA]."]],
  paed: { tiers: ["Status epilepticus: 15–20 mg PE/kg at 2 mg PE/kg/min (or 150 mg PE/min, whichever is slower) [FDA].", "Non-emergent: 10–15 mg PE/kg at 1–2 mg PE/kg/min; maintenance 2–4 mg PE/kg every 12 hours [FDA]."], transition: "Adult dose.", calcNote: "50 mg PE/mL." },
  adj: { renal: "Monitor unbound phenytoin [FDA].", hepatic: "Monitor unbound phenytoin [FDA].", pregnancy: "Fetal hydantoin syndrome risk [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Phosphate load in severe renal impairment [FDA]." },
  tox: { human: "Hypotension, arrhythmia with rapid infusion; nystagmus, ataxia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: F3_LD, manage: "Slow/stop infusion; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to fosphenytoin, phenytoin or other hydantoins [FDA].", "Sinus bradycardia, SA block, second/third-degree AV block, Adams-Stokes [FDA] [UNVERIFIED-KNOWLEDGE].", "Delavirdine [FDA] [UNVERIFIED-KNOWLEDGE].", "Previous hepatotoxicity from fosphenytoin or phenytoin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nystagmus, dizziness, pruritus, paraesthesia, somnolence, ataxia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiovascular collapse with rapid infusion [FDA]", "SJS/TEN, DRESS [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG, BP and respiration during and 10–20 min after infusion; phenytoin levels 2 h after IV (4 h after IM) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fosphenytoin", indication_id: "se", label: "Status epilepticus — loading 15–20 mg PE/kg IV", route: "IV", population: F3_ANY, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose", value_max: 20 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Units are mg PE (phenytoin sodium equivalents)", "Rate: adults 100–150 mg PE/min; children 2 mg PE/kg/min or 150 mg PE/min, whichever is slower", "ECG and BP monitoring"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cerebyx (fosphenytoin sodium) — FDA label (DailyMed)", F3_DM("d4c36fad-0ba2-4cd4-9c5e-dcf843f38a5a")], F3_BT],
  dose: { tagline: "IV phenytoin prodrug for status epilepticus — always in mg PE; watch the rate.",
    boxedTitle: "Cardiovascular risk associated with rapid infusion rates", boxed: "The rate of intravenous CEREBYX administration should not exceed 150 mg phenytoin sodium equivalents (PE) per minute in adults and 2 mg PE/kg/min (or 150 mg PE/min, whichever is slower) in pediatric patients because of the risk of severe hypotension and cardiac arrhythmias. Careful cardiac monitoring is needed during and after administering intravenous CEREBYX. Although the risk of cardiovascular toxicity increases with infusion rates above the recommended infusion rate, these events have also been reported at or below the recommended infusion rate. Reduction in rate of administration or discontinuation of dosing may be needed [FDA].",
    adult: [{ ind: "Status epilepticus", text: "15–20 mg PE/kg IV at 100–150 mg PE/min.", calc: ["se"] }, { ind: "Non-emergent", text: "10–20 mg PE/kg load; 4–6 mg PE/kg/day." }],
    child: [{ ind: "Status epilepticus", text: "15–20 mg PE/kg at up to 2 mg PE/kg/min.", calc: ["se"] }] }
});

/* ---------- FOSTAMATINIB (FDA TAVALISSE NDA209299) ---------- */
FDB_M("fostamatinib", {
  inn: "Fostamatinib", atc: "B02BX09", cls: "Spleen tyrosine kinase (SYK) inhibitor",
  linked: [],
  forms: ["Tablets 100, 150 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits SYK, reducing antibody-mediated platelet destruction [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No clinically relevant effect of renal or hepatic impairment on exposure [FDA]."],
  ind: { adult: ["Chronic ITP with insufficient response to previous treatment [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Chronic ITP", "100 mg twice daily; after 4 weeks increase to 150 mg twice daily if platelets under 50 × 10⁹/L; stop after 12 weeks if no adequate response [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hypertension, hepatotoxicity, diarrhoea, neutropenia — dose modifications per label [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: F3_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, hypertension, nausea, dizziness, raised ALT/AST, rash, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypertensive crisis, hepatotoxicity, severe diarrhoea, neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["BP every 2 weeks until stable; liver tests monthly; CBC monthly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fostamatinib", indication_id: "itp", label: "Chronic ITP — 100 mg twice daily", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["After 4 weeks: 150 mg twice daily if platelets under 50", "Stop at 12 weeks if no response"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Tavalisse (fostamatinib) — FDA label (DailyMed)", F3_DM("21149cc3-049b-43e2-b141-c9499160556c")], F3_BT],
  dose: { tagline: "Oral SYK inhibitor for chronic ITP — watch BP and liver tests.",
    adult: [{ ind: "Chronic ITP", text: "100 mg twice daily, up to 150 mg twice daily.", calc: ["itp"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FOSTEMSAVIR (FDA RUKOBIA NDA212950) ---------- */
FDB_M("fostemsavir", {
  inn: "Fostemsavir", atc: "J05AX29", cls: "HIV-1 attachment inhibitor (gp120)",
  linked: [],
  forms: ["Extended-release tablets 600 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Temsavir binds gp120, preventing attachment to CD4 cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No adjustment in renal (incl. haemodialysis) or hepatic impairment [FDA]."],
  ind: { adult: ["Heavily treatment-experienced adults with multidrug-resistant HIV-1 failing their regimen [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["HIV-1 (MDR)", "600 mg twice daily with or without food; swallow whole [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment [FDA].", hepatic: "No adjustment [FDA].", pregnancy: F3_NEP, other: "QT prolongation at high exposure; strong CYP3A inducers contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: F3_NEP },
  contra: ["Previous hypersensitivity to fostemsavir [FDA].", "Strong CYP3A inducers (e.g. rifampicin, carbamazepine, phenytoin) [FDA]."],
  ae: { common: ["Nausea, diarrhoea, headache, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Immune reconstitution syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Viral load; ECG in QT risk [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC,
  calc: [
    { drug: "fostemsavir", indication_id: "hiv", label: "MDR HIV-1 — 600 mg twice daily", route: "PO", population: F3_ADULT, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 600, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [], flags: ["Swallow whole"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Rukobia (fostemsavir) — FDA label (DailyMed)", F3_DM("a21006b7-6d6f-4f06-81b4-17978756452b")], F3_BT],
  dose: { tagline: "Attachment inhibitor for multidrug-resistant HIV.",
    adult: [{ ind: "MDR HIV-1", text: "600 mg twice daily.", calc: ["hiv"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- FREMANEZUMAB (FDA AJOVY BLA761089) ---------- */
FDB_M("fremanezumab", {
  inn: "Fremanezumab", atc: "N02CD03", cls: "Anti-CGRP monoclonal antibody",
  linked: [],
  forms: ["Pre-filled syringe/autoinjector 225 mg/1.5 mL [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds CGRP ligand [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [F3_NEP],
  ind: { adult: ["Preventive treatment of migraine [FDA]."], paed: ["6–17 years weighing 45 kg or more [FDA]."] },
  adult: [["Migraine prevention", "225 mg SC monthly, or 675 mg every 3 months (three 225 mg injections) [FDA]."]],
  paed: { tiers: ["6–17 years, 45 kg or more: 225 mg monthly [FDA]."], transition: "Adult dose.", calcNote: "Fixed dose." },
  adj: { renal: F3_NEP, hepatic: "Mild–moderate: no change predicted [FDA].", pregnancy: F3_NEP, other: "Hypertension reported with CGRP antagonists [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: F3_NEP, animal: F3_LD, manage: F3_NEP },
  contra: ["Serious hypersensitivity to fremanezumab or excipients (anaphylaxis, angioedema) [FDA]."],
  ae: { common: ["Injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure [UNVERIFIED-KNOWLEDGE]."],
  local: F3_LOC, calc: [],
  sources: [["FDA", "Ajovy (fremanezumab-vfrm) — FDA label (DailyMed)", F3_DM("98e344ea-5916-4947-b6f2-4a76ccc04b6b")], F3_BT],
  dose: { tagline: "Monthly or quarterly anti-CGRP injection for migraine prevention.",
    adult: [{ ind: "Migraine prevention", text: "225 mg monthly or 675 mg every 3 months." }],
    child: [{ ind: "6–17 years, 45 kg+", text: "225 mg monthly." }] }
});

/* Brand names — BATCH F3 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"fluorometholone":{"IN":[["Fml","Allergan India Pvt Ltd","Fml Liquifilm Bottle Of 5Ml Eye Drops"],["Flurisone","Micro Labs","Flurisone 0.1% Bottle Of 5Ml Eye Drops"],["Zyofm","Neomedix Healthcare India Private Limited","Zyofm Bottle Of 5Ml Eye Drops"]],"BD":[["FLN","UNIDO Pharmaceuticals Ltd","0.1%"],["Fluroid","Opsonin Pharma Ltd","0.1%"],["Flurate","Pacific Pharmaceuticals Ltd","0.1%"]],"src":["https://pharmeasy.in/online-medicine-order/fml-eye-drops-5ml-47694","https://pharmeasy.in/online-medicine-order/flurisone-0-1-eye-drops-47631","https://pharmeasy.in/online-medicine-order/zyofm-bottle-of-5ml-eye-drops-3512900","https://medex.com.bd/brands/40070/fln-01-ophthalmic-suspension","https://medex.com.bd/brands/31721/fluroid-g-01-03-eye-ointment","https://medex.com.bd/brands/28534/flurate-01-ophthalmic-suspension"]},"fluphenazine":{"IN":[],"BD":[["Fenazine","Incepta Pharmaceuticals Ltd","25 mg/ml"],["Flupagen","General Pharmaceuticals Ltd","25 mg/ml"]],"src":["https://medex.com.bd/brands/4300/fenazine-25-mg-imsc-injection","https://medex.com.bd/brands/27694/flupagen-25-mg-imsc-injection"]},"flurazepam":{"IN":[],"BD":[["Aluctin","Ambee Pharmaceuticals Ltd","30 mg"],["Slipam","General Pharmaceuticals Ltd","15 mg"]],"src":["https://medex.com.bd/brands/4165/aluctin-30-mg-capsule","https://medex.com.bd/brands/4166/slipam-15-mg-capsule"]},"flurbiprofen":{"IN":[["Ocuflur","Fdc Limited","Ocuflur Bottle Of 5Ml Eye Drops"],["Flubi","Entod Pharmaceuticals Pvt Ltd","Flubi Bottle Of 5Ml Eye Drops"]],"BD":[["Urbifen","General Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/ocuflur-eye-drops-5ml-10265","https://pharmeasy.in/online-medicine-order/flubi-eye-drops-5ml-47536","https://medex.com.bd/brands/16507/urbifen-50-mg-tablet"]},"fluticasone-furoate":{"IN":[["Fluticone","Zydus Healthcare Limited","Fluticone Ft 120Md Bottle Of 6Gm Nasal Spray"],["Flutivin","Leeford Healthcare Ltd","Flutivin 120Md Bottle Of 6Gm Nasal Spray"],["Fluticatone","Steris Healthcare","Fluticatone 120Md Bottle Of 6Gm Nasal Spray"]],"BD":[["Fixonase","Beximco Pharmaceuticals PLC","27.5 mcg/spray"],["Nasogurd","Eskayef Pharmaceuticals Ltd","27.5 mcg/spray"],["Fluspray","The IBN SINA Pharmaceutical PLC","27.5 mcg/spray"]],"src":["https://pharmeasy.in/online-medicine-order/fluticone-ft-120md-bottle-of-6gm-nasal-spray-47647","https://pharmeasy.in/online-medicine-order/flutivin-120md-bottle-of-6gm-nasal-spray-4149476","https://pharmeasy.in/online-medicine-order/fluticatone-120md-bottle-of-6gm-nasal-spray-4489945","https://medex.com.bd/brands/33860/fixonase-275-mcg-nasal-spray","https://medex.com.bd/brands/32480/nasogurd-275-mcg-nasal-spray","https://medex.com.bd/brands/40115/fluspray-275-mcg-nasal-spray"]},"fluvastatin":{"IN":[],"BD":[["Fluvas","Silva Pharmaceuticals Ltd","20 mg"],["Lesterol","Opsonin Pharma Ltd","20 mg"],["Lescol XL","Nevian Lifescience PLC","80 mg"]],"src":["https://medex.com.bd/brands/3375/fluvas-20-mg-capsule","https://medex.com.bd/brands/3379/lesterol-20-mg-capsule","https://medex.com.bd/brands/34827/lescol-xl-80-mg-capsule"]},"fluvoxamine":{"IN":[["Sorest","Eris Life Sciences Pvt Ltd","Sorest 100Mg Strip Of 10 Tablets"]],"BD":[["Relafin","General Pharmaceuticals Ltd","50 mg"],["Florest","Everest Pharmaceuticals Ltd","50 mg"],["Voxamin","Renata PLC","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/sorest-100mg-tablet-23125","https://medex.com.bd/brands/4516/relafin-50-mg-tablet","https://medex.com.bd/brands/30242/florest-50-mg-tablet","https://medex.com.bd/brands/34151/voxamin-50-mg-tablet"]},"follitropin-alfa":{"IN":[["Folisurge","Intas Pharmaceuticals Ltd","Folisurge 900Iu Pre Filled Pen Of 1.44Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/folisurge-900iu-pre-filled-pen-of-1-44ml-solution-for-injection-4007397"]},"fondaparinux":{"IN":[["Fondared","Dr Reddy's Laboratories Ltd","Fondared 2.5Mg Pre Filled Syringe Of 0.5Ml Injection"]],"BD":[["Fonidel","Square Pharmaceuticals PLC","2.5 mg/0.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/fondared-2-5mg-injection-0-5ml-8449","https://medex.com.bd/brands/29627/fonidel-25-mg-eye-drop"]},"fosfomycin":{"IN":[["Fosfozyme","Steris Healthcare","Fosfozyme 3 Sachet Of 8Gm Oral Powder"],["Monurol","Modi Mundi Pharma Pvt Ltd","Monurol Sachet Of 8Gm Granules"],["Zenflox","Mankind Pharmaceuticals Ltd","Zenflox Uti Orange Flavour Sachet Of 8Gm Oral Powder"]],"BD":[["Fosfocin","Advanced Chemical Industries PLC","3 gm/sachet"],["Fosamin","Beximco Pharmaceuticals PLC","3 gm/sachet"],["Euticin","Incepta Pharmaceuticals Ltd","3 gm/sachet"]],"src":["https://pharmeasy.in/online-medicine-order/fosfozyme-powder-sachet-8-gm-4133946","https://pharmeasy.in/online-medicine-order/monurol-sachet-of-8gm-granules-2979112","https://pharmeasy.in/online-medicine-order/zenflox-uti-orange-flavour-sachet-of-8gm-oral-powder-4486774","https://medex.com.bd/brands/25958/fosfocin-3-gm-oral-powder","https://medex.com.bd/brands/25959/fosamin-3-gm-oral-powder","https://medex.com.bd/brands/25960/euticin-3-gm-oral-powder"]},"fosinopril":{"IN":[["Fovas","Zydus Healthcare Limited","Fovas 10Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/fovas-10mg-tablet-47920"]},"fosphenytoin":{"IN":[["Fosolin","Zydus Healthcare Limited","Fosolin 150Mg Vial Of 2Ml Injection"]],"BD":[["Fosfen","Popular Pharmaceuticals PLC","150 mg/2 ml"],["Sizaject","Incepta Pharmaceuticals Ltd","100 mg/2 ml"]],"src":["https://pharmeasy.in/online-medicine-order/fosolin-150mg-vial-of-2ml-injection-47905","https://medex.com.bd/brands/4890/fosfen-150-mg-injection","https://medex.com.bd/brands/38387/sizaject-100-mg-injection"]},"fostamatinib":{"IN":[],"BD":[["Tavafos","Beacon Pharmaceuticals PLC","100 mg"]],"src":["https://medex.com.bd/brands/39839/tavafos-100-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
