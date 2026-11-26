/* Clinical Disease Guide — Drug monograph database, batch S-2 (26 Nov 2026).
   End of S (sepiapterin … sodium nitrite) and start of T (tadalafil … talazoparib). Same rules as js/fdb-a2.js.
   Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js.
   Deferred: silver (pack = silver sulfadiazine, already written), sodium citrate (irrigation label only).
   Labels added: Krintafel (tafenoquine radical cure of P. vivax) beside Arakoda; Revatio (sildenafil for PAH) beside Viagra. */
(function () { // S-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const S2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("sepiapterin", {
  inn: "Sepiapterin", atc: "A16AX28", cls: "BH4 precursor (phenylketonuria)",
  linked: [],
  forms: ["Oral powder 250 mg and 1,000 mg sachets [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converted to tetrahydrobiopterin, enhancing phenylalanine hydroxylase activity [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Hyperphenylalaninaemia in sepiapterin-responsive phenylketonuria, with a Phe-restricted diet [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["From birth (age-based mg/kg) [FDA]."] },
  adult: [["2 years and over", "60 mg/kg once daily with food [FDA]."], ["Preparation", "Mix the calculated dose in water or apple juice or soft food per label [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Under 6 months: 7.5 mg/kg once daily [FDA].", "6 months to under 1 year: 15 mg/kg [FDA].", "1 to under 2 years: 30 mg/kg [FDA].", "2 years and over: 60 mg/kg [FDA]."], transition: "60 mg/kg from 2 years.", calcNote: "Age-based mg/kg once daily." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Monitor blood Phe; caution with levodopa and PDE-5 inhibitors (BH4 class) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Upper respiratory infection, headache, diarrhoea, abdominal pain, faeces discolouration [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypophenylalaninaemia in young children [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood Phe regularly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("sepiapterin", "lt6m", "PKU, under 6 months — 7.5 mg/kg once daily", "PO", pop(null, 6, null, null), "mg_per_kg", 7.5, 24, { rounding: "per label preparation", flags: ["With food; with Phe-restricted diet"] }),
    C("sepiapterin", "6to12m", "PKU, 6 months to under 1 year — 15 mg/kg once daily", "PO", pop(6, 12, null, null), "mg_per_kg", 15, 24, { rounding: "per label preparation" }),
    C("sepiapterin", "1to2y", "PKU, 1 to under 2 years — 30 mg/kg once daily", "PO", pop(12, 24, null, null), "mg_per_kg", 30, 24, { rounding: "per label preparation" }),
    C("sepiapterin", "ge2y", "PKU, 2 years+ — 60 mg/kg once daily", "PO", pop(24, null, null, null), "mg_per_kg", 60, 24, { rounding: "per label preparation" })
  ],
  sources: [["FDA", "Sephience (sepiapterin) — FDA label (DailyMed)", S2_DM("32ac719c-49f0-4105-9c46-18c19583a5c2")], NEML_SRC],
  dose: { tagline: "BH4 precursor for PKU — 60 mg/kg daily from 2 years (lower mg/kg in infants).",
    adult: [{ ind: "Phenylketonuria", text: "60 mg/kg once daily with food.", calc: ["ge2y"] }],
    child: [{ ind: "By age", text: "<6 mo 7.5; 6–11 mo 15; 1 y 30; 2 y+ 60 mg/kg once daily.", calc: ["lt6m", "6to12m", "1to2y", "ge2y"] }] }
});

FDB_M("sertaconazole", {
  inn: "Sertaconazole", atc: "D01AC14", cls: "Azole antifungal (topical)",
  linked: [],
  forms: ["Cream 2% [FDA]."],
  moa: "Inhibits ergosterol synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Interdigital tinea pedis, 12 years and over [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Tinea pedis", "Apply twice daily for 4 weeks to the affected areas between the toes and surrounding skin [FDA]."], ["Use", "Dry the area first; wash hands after; not for eyes, mouth or vagina [FDA]."]],
  paed: { tiers: ["12 years and over: same [FDA]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Contact dermatitis, dry skin, burning [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Ertaczo (sertaconazole) cream 2% — FDA label (DailyMed)", S2_DM("c6fa8dc4-2620-474e-a9b4-6657d9cbfa96")], NEML_SRC],
  dose: { tagline: "Topical azole for athlete's foot — twice daily for 4 weeks.",
    adult: [{ ind: "Interdigital tinea pedis", text: "Twice daily × 4 weeks." }],
    child: [{ ind: "12 years and over", text: "Same." }] }
});

FDB_M("sertraline", {
  inn: "Sertraline", atc: "N06AB06", cls: "Selective serotonin reuptake inhibitor (SSRI)",
  linked: [],
  forms: ["Tablets 25, 50, 100 mg; oral concentrate 20 mg/mL [FDA]."],
  moa: "Inhibits serotonin reuptake [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism; mild CYP2D6 inhibition [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Major depression, OCD, panic disorder, PTSD, social anxiety disorder, PMDD [FDA]."], paed: ["OCD from 6 years [FDA]."] },
  adult: [["Depression", "50 mg once daily; up to 200 mg [FDA]."], ["Panic, PTSD, social anxiety", "25 mg once daily for a week, then 50 mg; up to 200 mg [FDA]."], ["OCD (13 years+)", "50 mg daily; up to 200 mg [FDA]."], ["PMDD", "50 mg daily continuously (max 150 mg) or luteal phase only (max 100 mg) [FDA]."], ["Titration", "25–50 mg steps at least weekly [FDA]."], ["Oral concentrate", "Dilute in 120 mL water, ginger ale, lemon-lime soda, lemonade or orange juice only [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["OCD 6–12 years: start 25 mg daily, up to 200 mg [FDA].", "OCD 13–17 years: start 50 mg daily [FDA]."], transition: "Adult dosing from 13 years (OCD).", calcNote: "Starting doses." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Lower or less frequent doses in mild impairment; avoid moderate–severe [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Weigh risks of untreated depression; neonatal adaptation symptoms [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Oral concentrate contains alcohol — not with disulfiram [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Somnolence, vomiting, tachycardia, agitation, serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs within 14 days; linezolid or IV methylene blue [FDA]", "Pimozide [FDA]", "Disulfiram (oral concentrate) [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, diarrhoea, dyspepsia, tremor, insomnia, sweating, sexual dysfunction, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts in young people [FDA]", "Serotonin syndrome [FDA]", "Bleeding risk [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyponatraemia, mania, angle-closure glaucoma, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality early on and after changes; sodium in older adults [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("sertraline", "mdd", "Depression / OCD (13 y+) — start 50 mg once daily", "PO", pop(156, null, null, null), "fixed", 50, 24, { formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Panic, PTSD, social anxiety: start 25 mg", "Max 200 mg/day"] }),
    C("sertraline", "ocd6", "OCD, 6–12 years — start 25 mg once daily", "PO", pop(72, 156, null, null), "fixed", 25, 24, { formulations: [{ form: "tablet", strength: 25, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Titrate weekly; max 200 mg/day"] })
  ],
  sources: [["FDA", "Sertraline hydrochloride tablets — FDA label (DailyMed)", S2_DM("1a58062b-e635-431a-908d-2651c6a4a21c")], NEML_SRC],
  dose: { tagline: "SSRI for depression and anxiety disorders — 50 mg daily (25 mg for panic/PTSD/young OCD), up to 200 mg.",
    boxedTitle: "Suicidal thoughts and behaviors",
    boxed: "Antidepressants increased the risk of suicidal thoughts and behavior in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors [FDA].",
    adult: [{ ind: "Depression / OCD", text: "50 mg once daily; up to 200 mg.", calc: ["mdd"] }, { ind: "Panic / PTSD / social anxiety", text: "25 mg daily for a week, then 50 mg." }],
    child: [{ ind: "OCD 6–12 years", text: "25 mg daily.", calc: ["ocd6"] }, { ind: "OCD 13–17 years", text: "50 mg daily.", calc: ["mdd"] }] }
});

FDB_M("sevabertinib", {
  inn: "Sevabertinib", atc: "L01EH06", cls: "HER2 (ERBB2) tyrosine kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 10, 20 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits HER2 with activating TKD mutations [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Locally advanced or metastatic non-squamous NSCLC with HER2 (ERBB2) TKD activating mutations after prior systemic therapy [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["NSCLC", "20 mg twice daily with food; swallow whole [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Diarrhoea, rash, stomatitis, paronychia, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe diarrhoea [UNVERIFIED-KNOWLEDGE]", "Interstitial lung disease [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Diarrhoea; respiratory symptoms; liver tests [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("sevabertinib", "std", "HER2-mutant NSCLC — 20 mg twice daily with food", "PO", ADULT, "fixed", 20, 12, { formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet" })],
  sources: [["FDA", "Hyrnuo (sevabertinib) — FDA label (DailyMed)", S2_DM("d7a11334-6e7a-445b-9a16-bdcd9acbe61f")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "HER2 TKI for HER2-mutant NSCLC — 20 mg twice daily with food.",
    adult: [{ ind: "HER2-mutant NSCLC", text: "20 mg twice daily with food.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("sibeprenlimab", {
  inn: "Sibeprenlimab", atc: "L04AG18", cls: "Anti-APRIL monoclonal antibody",
  linked: [],
  forms: ["Prefilled syringe/autoinjector 400 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Neutralises APRIL, reducing galactose-deficient IgA1 production [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Primary IgA nephropathy at risk of progression, to reduce proteinuria [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["IgA nephropathy", "400 mg SC once every 4 weeks; self-injection after training [FDA]."], ["Missed dose", "Give as soon as possible, then every 4 weeks from that date [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Avoid live vaccines [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Injection-site reactions, upper respiratory infections [UNVERIFIED-KNOWLEDGE]."], serious: ["Infections (lower immunoglobulins) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Proteinuria, kidney function; infections [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("sibeprenlimab", "std", "IgA nephropathy — 400 mg SC every 4 weeks", "SC", ADULT, "fixed", 400, 672, { rounding: "1 device" })],
  sources: [["FDA", "Voyxact (sibeprenlimab) — FDA label (DailyMed)", S2_DM("c8a93b32-0676-4704-86dc-cb65f425c6e5")], NEML_SRC],
  dose: { tagline: "Anti-APRIL antibody for IgA nephropathy — 400 mg SC every 4 weeks.",
    adult: [{ ind: "IgA nephropathy", text: "400 mg SC every 4 weeks.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("sildenafil", {
  inn: "Sildenafil", atc: "G04BE03", cls: "Phosphodiesterase-5 inhibitor",
  linked: [],
  forms: ["Tablets 25, 50, 100 mg (Viagra, ED) [FDA].", "Tablets 20 mg, oral suspension 10 mg/mL, injection 10 mg (Revatio, PAH) [FDA]."],
  moa: "Inhibits PDE-5, enhancing nitric-oxide vasodilation in corpus cavernosum and pulmonary vessels [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Erectile dysfunction (Viagra) [FDA].", "Pulmonary arterial hypertension (Revatio) [FDA]."], paed: ["PAH, 1–17 years (Revatio) [FDA]."] },
  adult: [["ED", "50 mg about 1 hour (30 min–4 h) before sex; 25–100 mg; maximum once daily [FDA]."], ["PAH (oral)", "20 mg three times daily; may titrate to 80 mg three times daily [FDA]."], ["PAH (IV)", "10 mg IV bolus three times daily when oral not possible [FDA]."], ["Older adults / CYP3A4 inhibitors (ED)", "Consider 25 mg start [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["PAH 1–17 years: 20 kg or less 10 mg three times daily; over 20 kg 20 mg three times daily [FDA]."], transition: "Adult PAH dose over 20 kg.", calcNote: "Fixed doses by indication/weight." },
  adj: { renal: "ED: severe impairment start 25 mg [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "ED: cirrhosis start 25 mg [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Never with nitrates or riociguat; caution with alpha-blockers [FDA]." },
  tox: { human: "Hypotension, headache, flushing, visual disturbance [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Nitrates or NO donors [FDA]", "Riociguat and other sGC stimulators [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Headache, flushing, dyspepsia, nasal congestion, visual colour change, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension with nitrates [FDA]", "Priapism [FDA] [UNVERIFIED-KNOWLEDGE]", "Sudden vision loss (NAION) [FDA] [UNVERIFIED-KNOWLEDGE]", "Sudden hearing loss [FDA] [UNVERIFIED-KNOWLEDGE]", "Increased mortality with higher doses in children with PAH [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; vision and hearing changes [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("sildenafil", "ed", "Erectile dysfunction — 50 mg as needed", "PO", ADULT, "fixed", 50, null, { formulations: [{ form: "tablet", strength: 50, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Range 25–100 mg; max once daily", "Never with nitrates"] }),
    C("sildenafil", "pah", "PAH — 20 mg three times daily", "PO", pop(null, null, 20.0001, null), "fixed", 20, 8, { formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Adults may titrate to 80 mg three times daily"] }),
    C("sildenafil", "pah20", "PAH, child 20 kg or less — 10 mg three times daily", "PO", pop(12, 216, null, 20.0001), "fixed", 10, 8, { formulations: [{ form: "suspension", strength: 10, unit: "mg/mL" }], rounding: "1 mL" })
  ],
  sources: [["FDA", "Viagra (sildenafil) — FDA label (DailyMed)", S2_DM("0b0be196-0c62-461c-94f4-9a35339b4501")], ["FDA", "Revatio (sildenafil) — FDA label (DailyMed)", S2_DM("3bb9363e-b28d-4019-8aae-539233dca214")], NEML_SRC],
  dose: { tagline: "PDE-5 inhibitor — 50 mg as needed for ED; 20 mg three times daily for PAH; never with nitrates.",
    cautionTitle: "Use with care",
    caution: "Never combine with nitrates or riociguat — severe hypotension. Seek care for erections over 4 hours or sudden loss of vision or hearing [FDA].",
    adult: [{ ind: "Erectile dysfunction", text: "50 mg as needed (25–100 mg).", calc: ["ed"] }, { ind: "Pulmonary arterial hypertension", text: "20 mg three times daily.", calc: ["pah"] }],
    child: [{ ind: "PAH, 20 kg or less", text: "10 mg three times daily.", calc: ["pah20"] }, { ind: "PAH, over 20 kg", text: "20 mg three times daily.", calc: ["pah"] }] }
});

FDB_M("silodosin", {
  inn: "Silodosin", atc: "G04CA04", cls: "Alpha-1A adrenoceptor antagonist",
  linked: [],
  forms: ["Capsules 4, 8 mg [FDA]."],
  moa: "Relaxes prostate and bladder-neck smooth muscle [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 and UGT2B7 [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Signs and symptoms of benign prostatic hyperplasia [FDA]."], paed: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["BPH", "8 mg once daily with a meal [FDA]."], ["Moderate kidney impairment (CrCl 30–50)", "4 mg once daily [FDA]."], ["Severe kidney (CrCl under 30) or hepatic impairment", "Contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Swallowing", "Capsule may be opened onto applesauce [FDA]."]],
  paed: { tiers: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose with kidney step." },
  adj: { renal: "CrCl 30–50: 4 mg; under 30: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Intraoperative floppy iris syndrome — tell the eye surgeon [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Lie flat; fluids; vasopressors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe renal impairment (CrCl under 30) [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE]", "Strong CYP3A4 inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Retrograde ejaculation (very common), dizziness, diarrhoea, orthostatic hypotension, nasal congestion [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Orthostatic hypotension and syncope [FDA] [UNVERIFIED-KNOWLEDGE]", "Floppy iris syndrome in cataract surgery [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Postural symptoms; exclude prostate cancer before starting [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("silodosin", "bph", "BPH — 8 mg once daily with a meal", "PO", ADULT, "fixed", 8, 24, { formulations: [{ form: "capsule", strength: 8, unit: "mg", whole: true }], rounding: "1 capsule", renal: [{ crcl_min: 30, crcl_max: 50, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "contraindicated at CrCl under 30" }] })],
  sources: [["FDA", "Silodosin capsules — FDA label (DailyMed)", S2_DM("94bca72c-c74a-4181-8b6a-a0a2f654a0a7")], NEML_SRC],
  dose: { tagline: "Alpha-1A blocker for BPH — 8 mg daily with a meal (4 mg if CrCl 30–50).",
    adult: [{ ind: "BPH", text: "8 mg once daily with a meal.", calc: ["bph"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("siltuximab", {
  inn: "Siltuximab", atc: "L04AC11", cls: "Anti-IL-6 monoclonal antibody",
  linked: [],
  forms: ["Powder for injection 100 mg and 400 mg vials [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds IL-6 [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Multicentric Castleman's disease, HIV-negative and HHV-8-negative [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["MCD", "11 mg/kg IV over 1 hour every 3 weeks until treatment failure [FDA]."], ["Before each dose (first 12 months)", "Blood counts; delay if ANC under 1.0, platelets under 50 or Hb over 17 g/dL (label table) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Do not give live vaccines [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hypersensitivity to siltuximab [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Rash, pruritus, upper respiratory infection, weight gain, hyperuricaemia, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions and anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before each dose for 12 months, then every 3 cycles [FDA]."],
  local: notBT,
  calc: [C("siltuximab", "std", "Multicentric Castleman's disease — 11 mg/kg IV every 3 weeks", "IV", ADULT, "mg_per_kg", 11, 504, { formulations: [{ form: "reconstituted", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Check blood counts before each dose"] })],
  sources: [["FDA", "Sylvant (siltuximab) — FDA label (DailyMed)", S2_DM("8d663642-f52e-49c0-a023-2da083fdfc0b")], NEML_SRC],
  dose: { tagline: "Anti-IL-6 antibody for idiopathic multicentric Castleman's disease — 11 mg/kg every 3 weeks.",
    adult: [{ ind: "Multicentric Castleman's disease", text: "11 mg/kg IV every 3 weeks.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("simvastatin", {
  inn: "Simvastatin", atc: "C10AA01", cls: "HMG-CoA reductase inhibitor (statin)",
  linked: [],
  forms: ["Tablets 5, 10, 20, 40, 80 mg; oral suspension [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits HMG-CoA reductase, lowering LDL cholesterol [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — many interactions [FDA]."],
  ind: { adult: ["Reduce cardiovascular risk and lower LDL-C in hyperlipidaemia [FDA]."], paed: ["Heterozygous familial hypercholesterolaemia, 10–17 years [FDA]."] },
  adult: [["Usual", "20–40 mg once daily in the evening; maximum 40 mg [FDA]."], ["80 mg", "Only for patients already on 80 mg for 12 months or more without muscle toxicity [FDA]."], ["Interaction caps", "With amlodipine, ranolazine or lomitapide: max 20 mg; with verapamil, diltiazem or dronedarone: max 10 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Chinese patients on niacin 1 g+", "Avoid 80 mg (myopathy) [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["HeFH 10–17 years: 10 mg in the evening; up to 40 mg [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing at 18 years.", calcNote: "Starting dose." },
  adj: { renal: "Severe impairment: start 5 mg [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Contraindicated in decompensated cirrhosis or acute liver failure [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Stop when pregnancy is recognised [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid grapefruit juice in large amounts [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Strong CYP3A4 inhibitors (itraconazole, ketoconazole, clarithromycin, HIV/HCV protease inhibitors, nefazodone, cobicistat) [FDA]", "Gemfibrozil, ciclosporin, danazol [FDA]", "Acute liver failure or decompensated cirrhosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Upper respiratory infection, headache, abdominal pain, constipation, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myopathy and rhabdomyolysis (dose- and interaction-related) [FDA]", "Immune-mediated necrotising myopathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic dysfunction [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised HbA1c [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lipids 4–12 weeks after starting; liver tests at baseline; CK if muscle symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("simvastatin", "std", "Hyperlipidaemia — 20–40 mg once daily in the evening", "PO", ADULT, "fixed", 20, 24, { dose: { value: 20, value_max: 40, unit: "mg", per: "dose" }, formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Max 40 mg (80 mg only if already long-term)", "Check interacting drugs"] })],
  sources: [["FDA", "Simvastatin tablets — FDA label (DailyMed)", S2_DM("0ccb324f-877d-4f32-a769-7cd1637b7fad")], NEML_SRC],
  dose: { tagline: "Statin — 20–40 mg in the evening; many CYP3A4 interactions; max 40 mg for new patients.",
    adult: [{ ind: "Hyperlipidaemia / CV risk", text: "20–40 mg once daily in the evening.", calc: ["std"] }],
    child: [{ ind: "HeFH 10–17 years", text: "10 mg daily; up to 40 mg." }] }
});

FDB_M("sincalide", {
  inn: "Sincalide", atc: "V04CC03", cls: "Cholecystokinin analogue (diagnostic)",
  linked: [],
  forms: ["Powder for injection 5 microgram vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Stimulates gallbladder contraction and pancreatic secretion [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Stimulate gallbladder contraction for imaging; stimulate pancreatic secretion for analysis (with secretin); speed barium transit [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Gallbladder contraction", "0.02 microgram/kg IV over 30–60 seconds; a second dose of 0.04 microgram/kg after 15 minutes if needed [FDA]."], ["Fewer GI effects", "Alternatively 0.12 microgram/kg in 100 mL saline infused over 50 minutes [FDA]."], ["Pancreatic secretion", "0.02 microgram/kg over 30 minutes after secretin [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "microgram/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "May cause preterm labour — avoid [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Intestinal obstruction [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Abdominal discomfort, nausea, flushing, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Preterm labour [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [C("sincalide", "gb", "Gallbladder imaging — 0.02 microgram/kg IV", "IV", ADULT, "mg_per_kg", 0.02, null, { dose: { value: 0.02, unit: "microgram", per: "dose" }, rounding: "per vial", flags: ["Over 30–60 seconds; may repeat 0.04 microgram/kg after 15 min"] })],
  sources: [["FDA", "Sincalide for injection — FDA label (DailyMed)", S2_DM("efbc189e-f5f8-0ac7-e053-2995a90a68a9")], NEML_SRC],
  dose: { tagline: "Diagnostic CCK analogue — 0.02 microgram/kg IV to contract the gallbladder.",
    adult: [{ ind: "Gallbladder imaging", text: "0.02 microgram/kg IV (repeat 0.04 if needed).", calc: ["gb"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("sinecatechins", {
  inn: "Sinecatechins", atc: "D06BB12", cls: "Topical botanical (green tea catechins)",
  linked: [],
  forms: ["Ointment 15% [FDA]."],
  moa: "Not fully known; immunomodulatory and antiviral effects [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["External genital and perianal warts in immunocompetent patients 18 years+ [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Warts", "About 0.5 cm of ointment to each wart three times daily, dabbed on to leave a thin layer; continue until clear, up to 16 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Do not", "Wash off before the next dose, cover with occlusive dressing, or use internally [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "May weaken condoms and diaphragms [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Local erythema, itching, burning, pain, ulceration, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe local reactions, phimosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Veregen (sinecatechins) ointment 15% — FDA label (DailyMed)", S2_DM("f0fc1e21-e3cf-4bce-860c-307f670b192e")], NEML_SRC],
  dose: { tagline: "Green-tea ointment for genital warts — three times daily up to 16 weeks.",
    adult: [{ ind: "External genital/perianal warts", text: "Three times daily, up to 16 weeks." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("siponimod", {
  inn: "Siponimod", atc: "L04AE03", cls: "Sphingosine-1-phosphate receptor modulator",
  linked: [],
  forms: ["Tablets 0.25, 1, 2 mg (starter pack) [FDA]."],
  moa: "S1P1/S1P5 modulator retaining lymphocytes in lymph nodes [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2C9 — genotype determines dose [FDA]."],
  ind: { adult: ["Relapsing forms of MS (CIS, RRMS, active SPMS) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Before starting", "CYP2C9 genotype (contraindicated in *3/*3), blood count, liver tests, ECG, eye exam, VZV antibodies [FDA]."], ["Titration (5 days)", "0.25 mg days 1–2, 0.5 mg day 3, 0.75 mg day 4, 1.25 mg day 5 [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Maintenance", "2 mg once daily; 1 mg if CYP2C9*1/*3 or *2/*3 [FDA]."], ["Missed doses", "If 4 or more consecutive days missed during titration or maintenance, restart titration [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Genotype-based maintenance." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Contraception during and 10 days after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "First-dose monitoring if bradycardia or conduction disease [FDA]." },
  tox: { human: "Bradycardia, AV block [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "ECG monitoring [UNVERIFIED-KNOWLEDGE]." },
  contra: ["CYP2C9*3/*3 genotype [FDA]", "MI, unstable angina, stroke, TIA or decompensated heart failure within 6 months [FDA]", "Mobitz II/third-degree block or sick sinus without pacemaker [FDA]"],
  ae: { common: ["Headache, hypertension, raised transaminases, falls, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infections including PML, cryptococcal, VZV [FDA] [UNVERIFIED-KNOWLEDGE]", "Macular oedema [FDA] [UNVERIFIED-KNOWLEDGE]", "Bradyarrhythmia [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe MS rebound after stopping [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, liver tests, blood pressure, eye exams [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("siponimod", "maint", "Relapsing MS — 2 mg once daily (after 5-day titration)", "PO", ADULT, "fixed", 2, 24, { formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["CYP2C9*1/*3 or *2/*3: 1 mg", "Contraindicated in *3/*3"] })],
  sources: [["FDA", "Mayzent (siponimod) — FDA label (DailyMed)", S2_DM("44492772-5aed-4627-bd85-e8e89f308bb3")], NEML_SRC],
  dose: { tagline: "S1P modulator for relapsing MS — titrate over 5 days to 2 mg daily (1 mg by genotype).",
    adult: [{ ind: "Relapsing MS", text: "Titrate to 2 mg daily (1 mg for CYP2C9*1/*3, *2/*3).", calc: ["maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("sipuleucel-t", {
  inn: "Sipuleucel-T", atc: "L03AX17", cls: "Autologous cellular immunotherapy",
  linked: [],
  forms: ["Patient-specific cell suspension 250 mL bag [FDA]."],
  moa: "Patient's antigen-presenting cells activated with a PAP–GM-CSF fusion protein to stimulate T cells against prostate cancer [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Asymptomatic or minimally symptomatic metastatic castration-resistant prostate cancer [FDA]."], paed: ["Not applicable [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Course", "3 doses about 2 weeks apart, each after leukapheresis 3 days before [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Infusion", "Over about 60 minutes; no cell filter; observe 30 minutes after [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Premedication", "Oral paracetamol and an antihistamine [FDA]."], ["Identity", "Confirm patient identifiers match the bag [FDA]."]],
  paed: { tiers: ["Not applicable [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Cell product — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Avoid systemic immunosuppressants during treatment [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Chills, fatigue, fever, back pain, nausea, joint ache, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Thromboembolic events [FDA] [UNVERIFIED-KNOWLEDGE]", "Catheter infections [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Provenge (sipuleucel-T) — FDA label (DailyMed)", S2_DM("8309b497-5d4e-4408-ac0c-2452c11c8a35")], NEML_SRC],
  dose: { tagline: "Autologous cell therapy for mCRPC — 3 infusions about 2 weeks apart.",
    adult: [{ ind: "Metastatic castration-resistant prostate cancer", text: "3 IV infusions about 2 weeks apart." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

FDB_M("sirolimus", {
  inn: "Sirolimus", atc: "L04AH01", cls: "mTOR inhibitor immunosuppressant",
  linked: [],
  forms: ["Tablets 0.5, 1, 2 mg; oral solution 1 mg/mL [FDA].", "Albumin-bound IV (Fyarro) and topical gel are separate products [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits mTOR, blocking T-cell proliferation [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4/P-gp substrate — many interactions; long half-life [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prophylaxis of kidney transplant rejection (with ciclosporin then without) [FDA].", "Lymphangioleiomyomatosis [FDA]."], paed: ["Kidney transplant from 13 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Kidney transplant (low–moderate risk)", "6 mg loading dose on day 1, then 2 mg daily; adjust to trough level [FDA]."], ["Timing", "4 hours after ciclosporin; consistently with or without food [FDA]."], ["Under 40 kg (13 years+)", "Loading 3 mg/m², maintenance 1 mg/m²/day [FDA] [UNVERIFIED-KNOWLEDGE]."], ["LAM", "2 mg/day; adjust to trough 5–15 ng/mL [FDA] [UNVERIFIED-KNOWLEDGE]."], ["High-risk transplant", "Up to 15 mg loading, 5 mg/day [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["13 years+ under 40 kg: 3 mg/m² load, 1 mg/m²/day [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing from 40 kg.", calcNote: "Fixed adult doses; trough-guided." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Reduce maintenance by about a third (mild–moderate) or half (severe) [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraception during and 12 weeks after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Not recommended in liver or lung transplant (hepatic artery thrombosis, bronchial anastomotic dehiscence) [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to sirolimus [FDA]."],
  ae: { common: ["Peripheral oedema, hyperlipidaemia, hypertension, raised creatinine, anaemia, mouth ulcers, poor wound healing [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infections and lymphoma/malignancy [FDA]", "Hepatic artery thrombosis (liver transplant) [FDA]", "Bronchial anastomotic dehiscence (lung transplant) [FDA]", "Interstitial lung disease, proteinuria, angioedema, lymphoedema [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Trough levels; lipids; kidney function and urine protein; blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("sirolimus", "load", "Kidney transplant — 6 mg loading dose", "PO", pop(null, null, 40, null), "fixed", 6, null, { formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "3 tablets", flags: ["Then 2 mg daily; adjust to trough"] }),
    C("sirolimus", "maint", "Kidney transplant — 2 mg once daily", "PO", pop(null, null, 40, null), "fixed", 2, 24, { formulations: [{ form: "tablet", strength: 2, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["4 hours after ciclosporin", "Adjust to trough level"] })
  ],
  sources: [["FDA", "Sirolimus tablets — FDA label (DailyMed)", S2_DM("384cb547-55a4-47fc-a0a6-054c18a51b84")], NEML_SRC],
  dose: { tagline: "mTOR inhibitor for kidney transplant and LAM — 6 mg load, then 2 mg daily, trough-guided.",
    boxedTitle: "Immunosuppression, use is not recommended in liver or lung transplant patients",
    boxed: "Increased susceptibility to infection and the possible development of lymphoma may result from immunosuppression. Only physicians experienced in immunosuppressive therapy and management of renal transplant patients should use sirolimus for prophylaxis of organ rejection in patients receiving renal transplants. Patients receiving the drug should be managed in facilities equipped and staffed with adequate laboratory and supportive medical resources. The physician responsible for maintenance therapy should have complete information requisite for the follow-up of the patient. • The safety and efficacy of sirolimus as immunosuppressive therapy have not been established in liver or lung transplant patients, and therefore, such use is not recommended. • Liver Transplantation – Excess Mortality, Graft Loss, and Hepatic Artery Thrombosis (HAT) The use of sirolimus in combination with tacrolimus was associated with excess mortality and graft loss in a study in de novo liver transplant patients. Many of these patients had evidence of infection at or near the time of death. In this and another study in de novo liver transplant patients, the use of sirolimus in combination with cyclosporine or tacrolimus was associated with an increase in HAT; most cases of HAT occurred within 30 days post-transplantation and most led to graft loss or death. • Lung Transplantation – Bronchial Anastomotic Dehiscence: cases of bronchial anastomotic dehiscence, most fatal, have been reported in de novo lung transplant patients when sirolimus has been used as part of an immunosuppressive regimen [FDA].",
    adult: [{ ind: "Kidney transplant", text: "6 mg load, then 2 mg daily (trough-guided).", calc: ["load", "maint"] }, { ind: "LAM", text: "2 mg daily, trough 5–15 ng/mL." }],
    child: [{ ind: "13 years+ under 40 kg", text: "3 mg/m² load, then 1 mg/m²/day." }] }
});

FDB_M("sitagliptin", {
  inn: "Sitagliptin", atc: "A10BH01", cls: "DPP-4 inhibitor (gliptin)",
  linked: [],
  forms: ["Tablets 25, 50, 100 mg [FDA]."],
  moa: "Inhibits DPP-4, raising incretins [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mainly excreted unchanged in urine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Type 2 diabetes, with diet and exercise [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Type 2 diabetes", "100 mg once daily with or without food [FDA]."], ["eGFR 30 to under 45", "50 mg once daily [FDA]."], ["eGFR under 30 (including dialysis)", "25 mg once daily [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Kidney-adjusted dose." },
  adj: { renal: "eGFR 30–44: 50 mg; under 30: 25 mg [FDA].", hepatic: "No change in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive; modestly dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of serious hypersensitivity (anaphylaxis, angioedema, SJS) to sitagliptin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Upper respiratory infection, nasopharyngitis, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe arthralgia, bullous pemphigoid [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypoglycaemia with sulfonylurea/insulin [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Kidney function before and periodically; HbA1c [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("sitagliptin", "std", "Type 2 diabetes — 100 mg once daily", "PO", ADULT, "fixed", 100, 24, { formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 30, crcl_max: 44.999, action: "reduce_dose", set_value: 50, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 25, interval_h: 24 }], flags: ["Label kidney steps use eGFR"] })],
  sources: [["FDA", "Zituvio (sitagliptin) — FDA label (DailyMed)", S2_DM("b2da9d77-154b-48f7-8793-3f4a24dfafc6")], NEML_SRC],
  dose: { tagline: "DPP-4 inhibitor — 100 mg daily (50 mg eGFR 30–44; 25 mg under 30).",
    adult: [{ ind: "Type 2 diabetes", text: "100 mg once daily; 50 or 25 mg by kidney function.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("sodium-acetate", {
  inn: "Sodium acetate (concentrated injection)", atc: "B05XA08", cls: "Electrolyte replenisher / alkalinising agent",
  linked: [],
  forms: ["Injection 2 mEq/mL (16.4%) and 4 mEq/mL — concentrated, must be diluted [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Provides sodium; acetate is metabolised to bicarbonate [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Source of sodium for addition to large-volume IV fluids (e.g. parenteral nutrition), and to correct metabolic acidosis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Same, individualised [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "Individualised by serum sodium and acid–base status; added to larger IV fluid volumes only [FDA]."], ["Never", "Give undiluted or by direct injection [FDA]."]],
  paed: { tiers: ["Individualised [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Individualised — no calculator." },
  adj: { renal: "Caution — sodium retention [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe liver disease may impair acetate metabolism [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Contains aluminium — caution in kidney impairment and neonates [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypernatraemia, fluid overload, metabolic alkalosis [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; correct electrolytes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypernatraemia or fluid retention [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Fluid and electrolyte disturbance [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypernatraemia, oedema, heart failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Metabolic alkalosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum sodium, acid–base, fluid balance [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Sodium acetate injection 2 mEq/mL — FDA label (DailyMed)", S2_DM("abc41ed1-9512-4bea-9295-1a9ca134b6c2")], NEML_SRC],
  dose: { tagline: "Concentrated sodium (and bicarbonate precursor) — only diluted into IV fluids, dose by labs.",
    cautionTitle: "Use with care",
    caution: "Concentrated electrolyte — never inject undiluted; add to larger IV volumes and monitor sodium and acid–base status [FDA].",
    adult: [{ ind: "Sodium/acetate replacement", text: "Individualised; diluted in IV fluids." }],
    child: [{ ind: "Children", text: "Individualised." }] }
});

FDB_M("sodium-benzoate", {
  inn: "Sodium phenylacetate + sodium benzoate", atc: "A16AX11", cls: "Nitrogen-scavenging agents (urea cycle disorders)",
  linked: [],
  forms: ["Injection 10% / 10% (100 mg/mL each), 50 mL vial (Ammonul) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Phenylacetate conjugates glutamine and benzoate conjugates glycine, removing nitrogen in urine [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Adjunct for acute hyperammonaemia and encephalopathy in urea cycle enzyme deficiencies [FDA]."], paed: ["Same, including neonates [FDA]."] },
  adult: [["Over 20 kg", "55 mL/m² (5.5 g/m² of each) as a loading infusion over 90–120 minutes, then the same dose over 24 hours [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Route", "Dilute in 10% dextrose (25 mL/kg); central venous catheter only — peripheral lines cause burns [FDA]."], ["With", "Arginine IV (dose by disorder) and haemodialysis if ammonia does not fall [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["0–20 kg: 2.5 mL/kg (250 mg/kg of each) loading over 90–120 min, then the same over 24 hours [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "mL/m² over 20 kg.", calcNote: "Specialist metabolic dosing — no calculator." },
  adj: { renal: "Monitor closely — drug excreted renally [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "High sodium load; monitor potassium (hypokalaemia) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Overdose: lethargy, vomiting, hyperventilation, cerebral oedema, metabolic acidosis, death [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Vomiting, hyperglycaemia, hypokalaemia, convulsions, mental status changes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Burns and necrosis with peripheral or extravasated infusion [FDA]", "Hypokalaemia, metabolic acidosis, cerebral oedema [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Plasma ammonia, electrolytes, glucose, acid–base, neurological status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Sodium phenylacetate and sodium benzoate injection — FDA label (DailyMed)", S2_DM("cee1e9a2-bbe5-2419-e053-2a95a90ac3ef")], NEML_SRC],
  dose: { tagline: "Nitrogen scavenger for urea-cycle hyperammonaemia — weight/BSA loading then 24-h infusion via central line.",
    cautionTitle: "Use with care",
    caution: "Central venous line only — peripheral or extravasated infusion causes burns. Specialist metabolic dosing with arginine and dialysis readiness [FDA].",
    adult: [{ ind: "Urea cycle hyperammonaemia", text: "55 mL/m² loading over 90–120 min, then 55 mL/m² over 24 h." }],
    child: [{ ind: "0–20 kg", text: "2.5 mL/kg loading, then 2.5 mL/kg over 24 h." }] }
});

FDB_M("sodium-glycerophosphate", {
  inn: "Sodium glycerophosphate", atc: "B05XA14", cls: "Phosphate supplement for parenteral nutrition",
  linked: [],
  forms: ["Concentrate 1 mmol/mL phosphate (and 2 mmol/mL sodium), 20 mL vial (Glycophos) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Organic phosphate source compatible with calcium in PN [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Phosphate source in parenteral nutrition [FDA]."], paed: ["Same, including neonates [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Use", "Only as an additive to PN admixtures — never infuse directly [FDA]."], ["Dose", "Individualised to phosphate needs; check phosphate and calcium first and normalise calcium [FDA]."], ["Compatibility", "Consider calcium–phosphate precipitation limits [FDA]."]],
  paed: { tiers: ["Individualised [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "PN additive — no calculator." },
  adj: { renal: "Caution — phosphate and sodium retention [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Contains aluminium [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hyperphosphataemia, hypocalcaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; correct electrolytes [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hyperphosphataemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypernatraemia [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Electrolyte disturbances [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pulmonary embolism from calcium phosphate precipitates [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperphosphataemia with hypocalcaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Phosphate, calcium, sodium [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Glycophos (sodium glycerophosphate) — FDA label (DailyMed)", S2_DM("e887e473-f1a7-40f1-bd6e-c99e7db7420d")], NEML_SRC],
  dose: { tagline: "Phosphate additive for parenteral nutrition — dose by labs; never infused directly.",
    adult: [{ ind: "PN phosphate", text: "Individualised; added to PN only." }],
    child: [{ ind: "PN phosphate", text: "Individualised." }] }
});

FDB_M("sodium-nitrite", {
  inn: "Sodium nitrite", atc: "V03AB08", cls: "Cyanide antidote (methaemoglobin former)",
  linked: [],
  forms: ["Injection 30 mg/mL (3%), 10 mL vial; often co-packaged with sodium thiosulfate [FDA]."],
  moa: "Creates methaemoglobin, which binds cyanide; thiosulfate then converts it to thiocyanate [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Life-threatening cyanide poisoning, with sodium thiosulfate [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Adult", "Sodium nitrite 10 mL (300 mg) IV at 2.5–5 mL/minute, then sodium thiosulfate 50 mL (12.5 g) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Redosing", "If signs return, repeat both at half the original doses [FDA]."], ["Support", "Airway, ventilation and circulation alongside; poison centre advice [FDA]."]],
  paed: { tiers: ["Children: sodium nitrite 0.2 mL/kg (6 mg/kg) IV at 2.5–5 mL/min, not more than 10 mL; then sodium thiosulfate 1 mL/kg (250 mg/kg), not more than 50 mL [FDA]."], transition: "Adult dose at maximum.", calcNote: "6 mg/kg (max 300 mg)." },
  adj: { renal: "Caution — thiocyanate accumulation [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Use if life-threatening [UNVERIFIED-KNOWLEDGE].", other: "Avoid if smoke inhalation with high carboxyhaemoglobin unless benefit outweighs risk; consider hydroxocobalamin [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Excess methaemoglobinaemia, hypotension [FDA].", animal: LD, manage: "Methylene blue for severe methaemoglobinaemia (caution); fluids, vasopressors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Hypotension, tachycardia, headache, nausea, flushing [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Life-threatening hypotension and methaemoglobinaemia [FDA]", "Haemolysis in G6PD deficiency [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, methaemoglobin (keep under about 30%), oxygenation [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("sodium-nitrite", "adult", "Cyanide poisoning, adult — 300 mg (10 mL) IV", "IV", ADULT, "fixed", 300, null, { formulations: [{ form: "inj", strength: 30, unit: "mg/mL" }], rounding: "10 mL", flags: ["At 2.5–5 mL/min, then sodium thiosulfate 12.5 g", "Monitor BP and methaemoglobin"] }),
    C("sodium-nitrite", "child", "Cyanide poisoning, child — 6 mg/kg (0.2 mL/kg) IV, max 300 mg", "IV", pop(null, 216, null, null), "mg_per_kg", 6, null, { caps: { max_single: 300, unit: "mg" }, formulations: [{ form: "inj", strength: 30, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Then sodium thiosulfate 1 mL/kg (max 50 mL)"] })
  ],
  sources: [["FDA", "Sodium nitrite injection — FDA label (DailyMed)", S2_DM("52f01c6e-172a-47a9-98a6-9eab7651a032")], NEML_SRC],
  dose: { tagline: "Cyanide antidote with thiosulfate — 300 mg IV (child 6 mg/kg, max 300 mg).",
    boxedTitle: "Life threatening hypotension and methemoglobin formation",
    boxed: "Sodium nitrite can cause serious adverse reactions and death in humans, even at doses less than twice the recommended therapeutic dose. Sodium nitrite causes hypotension and methemoglobin formation, which diminishes oxygen carrying capacity. Hypotension and methemoglobin formation can occur concurrently or separately. Because of these risks, sodium nitrite should be used to treat acute life-threatening cyanide poisoning and be used with caution in patients where the diagnosis of cyanide poisoning is uncertain. Patients should be closely monitored to ensure adequate perfusion and oxygenation during treatment with sodium nitrite. Alternative therapeutic approaches should be considered in patients known to have diminished oxygen or cardiovascular reserve (e.g., smoke inhalation victims, pre-existing anemia, cardiac or respiratory compromise), and those at higher risk of developing methemoglobinemia (e.g., congenital methemoglobin reductase deficiency) as they are at greater risk for potentially life-threatening adverse events related to the use of sodium nitrite [FDA].",
    adult: [{ ind: "Cyanide poisoning", text: "300 mg (10 mL of 3%) IV, then sodium thiosulfate 12.5 g.", calc: ["adult"] }],
    child: [{ ind: "Cyanide poisoning", text: "0.2 mL/kg (6 mg/kg), max 10 mL; then thiosulfate 1 mL/kg.", calc: ["child"] }] }
});

FDB_M("tadalafil", {
  inn: "Tadalafil", atc: "G04BE08", cls: "Phosphodiesterase-5 inhibitor (long-acting)",
  linked: [],
  forms: ["Tablets 2.5, 5, 10, 20 mg; 20 mg tablets for PAH (Adcirca/Alyq) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits PDE-5 [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 17.5 hours; CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Erectile dysfunction [FDA].", "Benign prostatic hyperplasia (with or without ED) [FDA].", "Pulmonary arterial hypertension (40 mg daily, separate brand) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["ED as needed", "10 mg before sex; 5–20 mg; once daily maximum [FDA]."], ["ED or BPH once daily", "2.5–5 mg (ED) or 5 mg (BPH) once daily [FDA]."], ["PAH", "40 mg once daily [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Kidney (CrCl 30–50)", "As needed max 10 mg per 48 h; once-daily BPH start 2.5 mg; CrCl under 30: as needed max 5 mg per 72 h, once daily not recommended [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: "See kidney row [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild–moderate: max 10 mg; severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Never with nitrates or riociguat; alpha-blocker caution [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Nitrates [FDA]", "Riociguat / sGC stimulators [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Headache, dyspepsia, back pain, myalgia, flushing, nasal congestion [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension with nitrates [FDA]", "Priapism [FDA] [UNVERIFIED-KNOWLEDGE]", "NAION, sudden hearing loss [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("tadalafil", "ed", "ED as needed — 10 mg", "PO", ADULT, "fixed", 10, null, { formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Range 5–20 mg; max once daily", "Never with nitrates"] }),
    C("tadalafil", "bph", "BPH / daily ED — 5 mg once daily", "PO", ADULT, "fixed", 5, 24, { formulations: [{ form: "tablet", strength: 5, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 30, crcl_max: 50, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "once-daily use not recommended at CrCl under 30" }] })
  ],
  sources: [["FDA", "Tadalafil tablets — FDA label (DailyMed)", S2_DM("09ad27a1-3908-4533-b84c-7a7fd3514101")], NEML_SRC],
  dose: { tagline: "Long-acting PDE-5 inhibitor — 10 mg as needed or 5 mg daily (ED/BPH); 40 mg daily for PAH.",
    cautionTitle: "Use with care",
    caution: "Never combine with nitrates or riociguat. Reduce in kidney or liver impairment [FDA].",
    adult: [{ ind: "ED (as needed)", text: "10 mg (5–20 mg).", calc: ["ed"] }, { ind: "BPH / daily ED", text: "5 mg once daily.", calc: ["bph"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("tafamidis", {
  inn: "Tafamidis", atc: "N07XX08", cls: "Transthyretin stabiliser",
  linked: [],
  forms: ["Capsules 20 mg (Vyndaqel, tafamidis meglumine) and 61 mg (Vyndamax, tafamidis) — not interchangeable mg for mg [FDA]."],
  moa: "Binds TTR, preventing tetramer dissociation and amyloid formation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Cardiomyopathy of wild-type or hereditary transthyretin amyloidosis (ATTR-CM) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["ATTR-CM", "Vyndaqel 80 mg (four 20 mg capsules) once daily, or Vyndamax 61 mg once daily [FDA]."], ["Swallow whole", "Do not crush or cut [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Contraception during and for 1 month after [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Generally similar to placebo [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [
    C("tafamidis", "vyndaqel", "ATTR-CM (Vyndaqel) — 80 mg once daily", "PO", ADULT, "fixed", 80, 24, { formulations: [{ form: "capsule", strength: 20, unit: "mg", whole: true }], rounding: "4 capsules", flags: ["Not interchangeable with Vyndamax 61 mg"] }),
    C("tafamidis", "vyndamax", "ATTR-CM (Vyndamax) — 61 mg once daily", "PO", ADULT, "fixed", 61, 24, { formulations: [{ form: "capsule", strength: 61, unit: "mg", whole: true }], rounding: "1 capsule" })
  ],
  sources: [["FDA", "Vyndaqel / Vyndamax (tafamidis) — FDA label (DailyMed)", S2_DM("1b4121ee-a733-4456-a917-be2603477839")], NEML_SRC],
  dose: { tagline: "TTR stabiliser for ATTR cardiomyopathy — 80 mg meglumine or 61 mg free acid daily.",
    adult: [{ ind: "ATTR cardiomyopathy", text: "Vyndaqel 80 mg or Vyndamax 61 mg once daily.", calc: ["vyndaqel", "vyndamax"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("tafasitamab", {
  inn: "Tafasitamab", atc: "L01FX12", cls: "Anti-CD19 monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Powder for injection 200 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds CD19 on B cells, causing cell-mediated killing [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsed/refractory DLBCL not eligible for transplant, with lenalidomide [FDA].", "Relapsed/refractory follicular lymphoma with lenalidomide and rituximab [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Dose", "12 mg/kg IV [FDA]."], ["Schedule (28-day cycles)", "Cycle 1: days 1, 4, 8, 15, 22; cycles 2–3: days 1, 8, 15, 22; cycle 4 onward: days 1 and 15 [FDA]."], ["Lenalidomide", "Up to 12 cycles, then tafasitamab alone [FDA]."], ["Premedication", "Antipyretic, H1 and H2 blockers, ± corticosteroid [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Neutropenia, fatigue, anaemia, diarrhoea, thrombocytopenia, cough, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE]", "Infections [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before each cycle [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("tafasitamab", "std", "DLBCL / FL — 12 mg/kg IV per scheduled dose", "IV", ADULT, "mg_per_kg", 12, null, { formulations: [{ form: "reconstituted", strength: 40, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Cycle 1 days 1, 4, 8, 15, 22; then weekly × 2 cycles; then every 2 weeks"] })],
  sources: [["FDA", "Monjuvi (tafasitamab-cxix) — FDA label (DailyMed)", S2_DM("ec13ac6b-bfde-4e84-907a-83bd69584d95")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Anti-CD19 antibody with lenalidomide for relapsed DLBCL — 12 mg/kg on a stepped schedule.",
    adult: [{ ind: "Relapsed DLBCL / FL", text: "12 mg/kg IV per schedule.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("tafenoquine", {
  inn: "Tafenoquine", atc: "P01BA07", cls: "8-aminoquinoline antimalarial",
  linked: [],
  forms: ["Tablets 150 mg (Krintafel, radical cure) [FDA].", "Tablets 100 mg (Arakoda, prophylaxis) [FDA]."],
  moa: "Active against liver hypnozoites and blood stages; mechanism not fully known [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long half-life (about 15 days) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Radical cure (relapse prevention) of P. vivax malaria, 16 years and over, with chloroquine or other blood-stage treatment (Krintafel) [FDA].", "Malaria prophylaxis in travellers (Arakoda) [FDA]."], paed: ["Krintafel: 16 years and over [FDA]."] },
  adult: [["P. vivax radical cure (Krintafel)", "Single 300 mg dose (two 150 mg tablets) with food, on day 1 or 2 of chloroquine treatment [FDA]."], ["Prophylaxis (Arakoda)", "Loading 200 mg daily for 3 days before travel; 200 mg weekly while away (starting 7 days after the last loading dose); 200 mg once in the week after return [FDA]."], ["Before use", "Quantitative G6PD test is mandatory; pregnancy test [FDA]."]],
  paed: { tiers: ["Krintafel: 16 years and over — 300 mg single dose [FDA].", "Younger children: not established (tafenoquine paediatric products exist elsewhere) [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose from 16 years.", calcNote: "Fixed doses from 16 years / adults." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Contraindicated (fetal G6PD status unknown) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Breastfeeding a G6PD-deficient or untested infant: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Haemolysis in G6PD deficiency; methaemoglobinaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; transfusion for haemolysis [UNVERIFIED-KNOWLEDGE]." },
  contra: ["G6PD deficiency or unknown G6PD status [FDA]", "Pregnancy; breastfeeding a G6PD-deficient or untested infant [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity to 8-aminoquinolines [FDA]", "Psychotic disorder history (Arakoda) [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Dizziness, nausea, vomiting, headache, decreased haemoglobin [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Haemolytic anaemia in G6PD deficiency [FDA]", "Methaemoglobinaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Psychiatric reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["G6PD before; signs of haemolysis (dark urine) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 (primaquine is the listed radical-cure drug) [BT-NEML] [UNVERIFIED-KNOWLEDGE].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    C("tafenoquine", "radical", "P. vivax radical cure, 16 years+ — 300 mg single dose", "PO", pop(192, null, null, null), "fixed", 300, null, { formulations: [{ form: "tablet", strength: 150, unit: "mg", whole: true }], rounding: "2 tablets", flags: ["G6PD test first (normal activity required)", "With chloroquine, day 1 or 2; with food"] }),
    C("tafenoquine", "proph", "Malaria prophylaxis — 200 mg (loading daily × 3, then weekly)", "PO", ADULT, "fixed", 200, 168, { formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "2 tablets", flags: ["Loading: 200 mg daily for 3 days before travel", "After return: 200 mg once"] })
  ],
  sources: [["FDA", "Krintafel (tafenoquine) — FDA label (DailyMed)", S2_DM("5cf989d5-36f5-4561-a30b-9fcb9deb6b6a")], ["FDA", "Arakoda (tafenoquine) — FDA label (DailyMed)", S2_DM("299e49d8-470f-4779-a010-4a1ee0e0c6cd")], NEML_SRC],
  dose: { tagline: "Single-dose radical cure of P. vivax (300 mg) — only with a normal quantitative G6PD test.",
    cautionTitle: "Use with care",
    caution: "Test G6PD before every prescription — tafenoquine causes haemolytic anaemia in G6PD deficiency, and its long half-life means a reaction cannot be stopped. Not in pregnancy [FDA].",
    adult: [{ ind: "P. vivax radical cure", text: "300 mg once with chloroquine.", calc: ["radical"] }, { ind: "Travel prophylaxis", text: "200 mg daily × 3, then weekly, then once after return.", calc: ["proph"] }],
    child: [{ ind: "16 years and over", text: "300 mg once (radical cure).", calc: ["radical"] }] }
});

FDB_M("tafluprost", {
  inn: "Tafluprost", atc: "S01EE05", cls: "Prostaglandin F2-alpha analogue (ophthalmic)",
  linked: [],
  forms: ["Preservative-free eye drops 0.0015% single-dose units [FDA]."],
  moa: "Increases uveoscleral outflow [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Raised IOP in open-angle glaucoma or ocular hypertension [FDA]."], paed: ["Not recommended under 16 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Glaucoma", "1 drop in the affected eye(s) once daily in the evening; not more often (less effective) [FDA]."], ["Other drops", "At least 5 minutes apart [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Single-dose units", "Discard after use [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not recommended under 16 years [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Rinse eye [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Conjunctival hyperaemia, stinging, eye pruritus, eyelash changes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Increased iris and eyelid pigmentation [FDA] [UNVERIFIED-KNOWLEDGE]", "Macular oedema, iritis/uveitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Intraocular pressure [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Zioptan (tafluprost) 0.0015% — FDA label (DailyMed)", S2_DM("db529b54-2ac7-4020-9791-7333bbe6c90f")], NEML_SRC],
  dose: { tagline: "Preservative-free prostaglandin eye drop for glaucoma — 1 drop each evening.",
    adult: [{ ind: "Glaucoma / ocular hypertension", text: "1 drop once daily in the evening." }],
    child: [{ ind: "Under 16 years", text: "Not recommended." }] }
});

FDB_M("tagraxofusp", {
  inn: "Tagraxofusp", atc: "L01XX67", cls: "CD123-directed cytotoxin (IL-3–diphtheria toxin fusion)",
  risk: ONC,
  linked: [],
  forms: ["Injection 1,000 microgram/mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "IL-3 fused to truncated diphtheria toxin kills CD123-expressing cells [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Blastic plasmacytoid dendritic cell neoplasm (BPDCN) [FDA]."], paed: ["2 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "12 microgram/kg IV over 15 minutes once daily on days 1–5 of a 21-day cycle [FDA]."], ["First cycle", "In hospital [FDA]."], ["Before each dose", "Albumin at least 3.2 g/dL; premedicate with H1 antagonist, paracetamol, corticosteroid, H2 antagonist [FDA]."]],
  paed: { tiers: ["2 years and over: same microgram/kg [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "microgram/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Withhold for albumin under 3.5 g/dL or weight gain (capillary leak) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Capillary leak syndrome, nausea, fatigue, peripheral oedema, fever, weight gain, hypoalbuminaemia, raised transaminases, thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Capillary leak syndrome, may be fatal [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Albumin, weight, oedema, BP before each dose; liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("tagraxofusp", "std", "BPDCN — 12 microgram/kg IV daily, days 1–5 of 21", "IV", pop(24, null, null, null), "mg_per_kg", 12, 24, { dose: { value: 12, unit: "microgram", per: "dose" }, rounding: "per pharmacy", flags: ["Albumin ≥3.2 g/dL before each dose", "First cycle inpatient"] })],
  sources: [["FDA", "Elzonris (tagraxofusp-erzs) — FDA label (DailyMed)", S2_DM("80eb1080-fe20-4af0-b2a5-a67999923fa8")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "CD123 cytotoxin for BPDCN — 12 microgram/kg daily × 5 every 3 weeks; capillary leak risk.",
    boxedTitle: "Capillary leak syndrome",
    boxed: "Capillary Leak Syndrome (CLS) which may be life-threatening or fatal, can occur in patients receiving ELZONRIS. Monitor for signs and symptoms of CLS and take actions as recommended [FDA].",
    adult: [{ ind: "BPDCN", text: "12 microgram/kg IV days 1–5 of 21-day cycles.", calc: ["std"] }],
    child: [{ ind: "2 years and over", text: "Same.", calc: ["std"] }] }
});

FDB_M("talazoparib", {
  inn: "Talazoparib", atc: "L01XK04", cls: "PARP inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 0.1, 0.25, 0.5, 0.75, 1 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits and traps PARP on DNA [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion — dose by kidney function; P-gp substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Germline BRCA-mutated HER2-negative advanced breast cancer [FDA].", "HRR gene-mutated mCRPC with enzalutamide [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Breast cancer", "1 mg once daily [FDA]."], ["Prostate cancer", "0.5 mg once daily with enzalutamide (plus GnRH analogue or orchiectomy) [FDA]."], ["Kidney (breast)", "CrCl 30–59: 0.75 mg; 15–29: 0.5 mg [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed doses with kidney steps (breast)." },
  adj: { renal: "Breast: CrCl 30–59 0.75 mg; 15–29 0.5 mg [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "P-gp inhibitors: reduce dose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Anaemia, fatigue, nausea, neutropenia, headache, thrombocytopenia, alopecia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["MDS/AML [FDA] [UNVERIFIED-KNOWLEDGE]", "Myelosuppression (anaemia often needs transfusion) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts monthly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("talazoparib", "breast", "gBRCA breast cancer — 1 mg once daily", "PO", ADULT, "fixed", 1, 24, { formulations: [{ form: "capsule", strength: 1, unit: "mg", whole: true }], rounding: "1 capsule", renal: [{ crcl_min: 30, crcl_max: 59.999, action: "reduce_dose", set_value: 0.75, interval_h: 24 }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 0.5, interval_h: 24 }] }),
    C("talazoparib", "prostate", "mCRPC (with enzalutamide) — 0.5 mg once daily", "PO", ADULT, "fixed", 0.5, 24, { formulations: [{ form: "capsule", strength: 0.5, unit: "mg", whole: true }], rounding: "1 capsule" })
  ],
  sources: [["FDA", "Talzenna (talazoparib) — FDA label (DailyMed)", S2_DM("c6fd147f-a77e-4a0b-9280-e82ecc41b4be")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "PARP inhibitor — 1 mg daily (breast) or 0.5 mg with enzalutamide (prostate).",
    adult: [{ ind: "gBRCA breast cancer", text: "1 mg once daily (lower in kidney impairment).", calc: ["breast"] }, { ind: "HRR mCRPC", text: "0.5 mg daily with enzalutamide.", calc: ["prostate"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

})(); // end S-2 scope

/* Brand names — BATCH S2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"tadalafil":{"IN":[["Tadora","Zydus Healthcare Limited","Tadora 20 Mg Strip Of 4 Tablets"],["Fulflo","Alembic Pharmaceuticals Ltd","Fulflo 10Mg Strip Of 10 Tablets"],["Tazzle","Dr Reddy's Laboratories Ltd","Tazzle (Tadalafil) 5Mg Strip Of 10 Tablets"]],"BD":[["TopUp","Euro Pharma Ltd","10 mg"],["Intimate","Square Pharmaceuticals PLC","2.5 mg"],["Tealis","Opsonin Pharma Ltd","20 mg"]],"src":["https://pharmeasy.in/online-medicine-order/tadora-20-mg-tablet-4-204262","https://pharmeasy.in/online-medicine-order/fulflo-10mg-tablet-2103","https://pharmeasy.in/online-medicine-order/tazzle-5mg-tab-10-s-219196","https://medex.com.bd/brands/27248/topup-10-mg-tablet","https://medex.com.bd/brands/36696/intimate-25-mg-tablet","https://medex.com.bd/brands/29523/tealis-20-mg-tablet"]},"tafluprost":{"IN":[["Saflutan","Santen India Pvt Ltd","Saflutan S Box Of 0.3Ml Eye Drops (Pack Of 30)"]],"BD":[["Taflan SUD","Aristopharma Ltd","0.0015%"],["Taflow","Popular Pharmaceuticals PLC","0.0015%"]],"src":["https://pharmeasy.in/online-medicine-order/saflutan-s-eye-drops-30-0-3ml-232267","https://medex.com.bd/brands/36871/taflan-sud-00015-eye-drop","https://medex.com.bd/brands/39956/taflow-00015-eye-drop"]},"talazoparib":{"IN":[],"BD":[["Talaparib","Everest Pharmaceuticals Ltd","1 mg"]],"src":["https://medex.com.bd/brands/38132/talaparib-1-mg-capsule"]},"sertaconazole":{"IN":[["Sertamid","Leeford Healthcare Ltd","Sertamid 2.0% Tube Of 20Gm Cream"],["Onabet","Eris Life Sciences Pvt Ltd","Onabet 2% Bottle Of 30Ml Lotion"],["Szhh","Hegde And Hegde Pharmaceuticals Llp","Szhh Tube Of 30Gm Cream"]],"BD":[["Fungitac","Ziska Pharmaceuticals Ltd","2%"],["Sertacon","Opsonin Pharma Ltd","2%"],["Ertaco","ACME Laboratories Ltd","2%"]],"src":["https://pharmeasy.in/online-medicine-order/sertamid-2-0-cream-20gm-208101","https://pharmeasy.in/online-medicine-order/onabet-2-lotion-30ml-11880","https://pharmeasy.in/online-medicine-order/szhh-cream-30gm-224169","https://medex.com.bd/brands/26082/fungitac-2-cream","https://medex.com.bd/brands/30476/sertacon-2-cream","https://medex.com.bd/brands/31007/ertaco-2-cream"]},"sertraline":{"IN":[["Serta","Torrent Pharmaceuticals Ltd","Serta 25 Mg Strip Of 10 Tablets"]],"BD":[["Andep","Healthcare Pharmaceuticals Ltd","100 mg"],["Zosert","Sun Pharmaceutical (Bangladesh) Ltd","25 mg"],["Sertal","Drug International Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/serta-25-mg-tablet-199627","https://medex.com.bd/brands/24433/andep-100-mg-tablet","https://medex.com.bd/brands/4552/zosert-25-mg-tablet","https://medex.com.bd/brands/24429/sertal-25-mg-tablet"]},"sildenafil":{"IN":[["Vigora","Zydus Healthcare Limited","Vigora 50Mg Strip Of 4 Tablets"],["Shefill","Liveon Healthcare Pvt Ltd","Shefill 25Mg Strip Of 10 Tablets"],["Kamagra","Ajanta Pharma Limited","Kamagra 100 Mg Butterscotch Oral Jelly 5 G"]],"BD":[["SB-Sild","Sunman-Birdem Pharma Ltd","50 mg"],["Charm","Drug International Ltd","100 mg"],["Yogra","The White Horse Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/vigora-50mg-tab-11329","https://pharmeasy.in/online-medicine-order/shefill-25mg-tablet-10s-225872","https://pharmeasy.in/online-medicine-order/kamagra-100-mg-butterscotch-oral-jelly-5-g-3734600","https://medex.com.bd/brands/24465/sb-sild-50-mg-tablet","https://medex.com.bd/brands/34729/charm-100-mg-tablet","https://medex.com.bd/brands/27949/yogra-50-mg-tablet"]},"silodosin":{"IN":[["Siliostru","Avighna Medicare Pvt Ltd","Siliostru 8Mg Strip Of 10 Capsules"],["Silodal","Ranbaxy Laboratories (sun Pharma)","Silodal 4Mg Strip Of 10 Capsules"],["Sildoease","Leeford Healthcare Ltd","Sildoease 8Mg Strip Of 10 Capsules"]],"BD":[["Prostanor","Popular Pharmaceuticals PLC","4 mg"],["Silofit","General Pharmaceuticals Ltd","8 mg"],["Rapiflo","Square Pharmaceuticals PLC","4 mg"]],"src":["https://pharmeasy.in/online-medicine-order/siliostru-8mg-strip-of-10-capsules-3553992","https://pharmeasy.in/online-medicine-order/silodal-4mg-capsule-22951","https://pharmeasy.in/online-medicine-order/sildoease-8mg-strip-of-10-capsules-3048261","https://medex.com.bd/brands/29309/prostanor-4-mg-capsule","https://medex.com.bd/brands/35591/silofit-8-mg-capsule","https://medex.com.bd/brands/34163/rapiflo-4-mg-capsule"]},"simvastatin":{"IN":[["Simvotin","Ranbaxy Laboratories (sun Pharma)","Simvotin 10Mg Strip Of 10 Tablets"]],"BD":[["Simvatin","ACME Laboratories Ltd","10 mg"],["Vastocor","Incepta Pharmaceuticals Ltd","10 mg"],["Novastin","Drug International Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/simvotin-10mg-tablet-22680","https://medex.com.bd/brands/3415/simvatin-10-mg-tablet","https://medex.com.bd/brands/3416/vastocor-10-mg-tablet","https://medex.com.bd/brands/24502/novastin-10-mg-tablet"]},"sirolimus":{"IN":[["Raparen","La Renon Healthcare Pvt Ltd","Raparen 1Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/raparen-1mg-tablet-105209"]},"sitagliptin":{"IN":[["Istavel","Sun Pharma","Istavel 100Mg Strip Of 10 Tablets"],["Januvia","Abbott Healthcare Pvt Ltd","Januvia 100Mg Strip Of 7 Tablets"]],"BD":[["SB-Sita","Sunman-Birdem Pharma Ltd","100 mg"],["Glucodip","Sun Pharmaceutical (Bangladesh) Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/istavel-100mg-strip-of-10-tablets-3107716","https://pharmeasy.in/online-medicine-order/januvia-100mg-strip-of-7-tablets-20330","https://medex.com.bd/brands/24525/sb-sita-100-mg-tablet","https://medex.com.bd/brands/24523/glucodip-100-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
