/* Clinical Disease Guide — Drug monograph database, batch I-3 (26 Nov 2026).
   Last gaps of the A–Z index run: I tail (itraconazole … ixekizumab), zonisamide, 13C-urea, fluticasone propionate (inhaled + nasal), zuranolone.
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js.
   Labels swapped in: STROMECTOL oral ivermectin (pack was the rosacea cream); fluticasone propionate HFA (Glenmark ANDA219602 — Flovent HFA brand withdrawn
   from GSK, repackager copies only) and FLONASE Allergy Relief (pack was the furoate nasal spray, already built as fluticasone-furoate).
   Zuranolone: ZURZUVAE is on DailyMed but not openFDA — SPL XML saved as labels/zurzuvae.xml + stub zurzuvae.json.
   Deferred: glutathione (BSS Plus irrigation), glycerol (pack was Ravicti), glycine (Aminosyn), grazoprevir (Zepatier combination only),
   homatropine methylbromide (hydrocodone combination only), 4-aminosalicylic acid (PASER not on openFDA or DailyMed). */
(function () { // I-3 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const STG_SRC = ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const I3_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});
const BAND = (drug, id, label, route, population, bands, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis: "band", bands, dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("itraconazole", {
  inn: "Itraconazole", atc: "J02AC02", cls: "Triazole antifungal",
  linked: [],
  forms: ["SPORANOX capsules 100 mg [FDA].", "SPORANOX oral solution 10 mg/mL is a different product — not interchangeable with the capsules [FDA]."],
  moa: "Inhibits cytochrome P450-dependent synthesis of ergosterol, a vital component of the fungal cell membrane [FDA].",
  pk: ["Take capsules with a full meal for maximal absorption; swallow whole [FDA].", "Terminal half-life 16–28 hours after a single dose, longer at steady state [FDA].", "Itraconazole and hydroxy-itraconazole are potent CYP3A4 inhibitors; also inhibit P-glycoprotein and BCRP [FDA]."],
  ind: { adult: ["Blastomycosis (pulmonary and extrapulmonary) [FDA].", "Histoplasmosis, including chronic cavitary pulmonary and disseminated non-meningeal disease [FDA].", "Aspergillosis in patients intolerant of or refractory to amphotericin B [FDA].", "Onychomycosis of toenails and/or fingernails due to dermatophytes, in non-immunocompromised patients [FDA]."], paed: [NEP] },
  adult: [["Blastomycosis / histoplasmosis", "200 mg once daily; if no improvement, increase by 100 mg steps to a maximum of 400 mg/day. Give doses above 200 mg/day in two divided doses [FDA]."], ["Aspergillosis", "200–400 mg daily [FDA]."], ["Life-threatening infection", "Loading dose 200 mg three times daily (600 mg/day) for the first 3 days, then as above. Continue for at least 3 months and until the infection has subsided [FDA]."], ["Onychomycosis — toenails (± fingernails)", "200 mg once daily for 12 consecutive weeks [FDA]."], ["Onychomycosis — fingernails only", "Two pulses of 200 mg twice daily for 1 week, separated by 3 weeks without drug [FDA]."], ["Oral or oesophageal candidiasis", "Only the oral solution has been shown effective — the capsules are not indicated [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult capsule doses only." },
  adj: { renal: "Limited data — use with caution [FDA].", hepatic: "Limited data — use with caution; serious hepatotoxicity, including liver failure and death, has occurred [FDA].", pregnancy: "Do not use for onychomycosis in pregnancy or in women planning pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Many CYP3A4 substrates are contraindicated (see boxed warning). Absorption falls with reduced gastric acidity [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Overdose effects match the listed adverse reactions [FDA].", animal: "Oral LD50 over 320 mg/kg (rat, mouse) and over 200 mg/kg (dog) [PubChem].", manage: "Supportive care; not removed by dialysis [FDA]." },
  contra: ["Onychomycosis in patients with ventricular dysfunction such as CHF or a history of CHF [FDA].", "Co-administration with the CYP3A4 substrates listed in the boxed warning [FDA].", "Onychomycosis in pregnant women or women contemplating pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to itraconazole [FDA]."],
  ae: { common: ["Nausea, diarrhoea, abdominal pain, rash, headache, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious hepatotoxicity, liver failure [FDA]", "Congestive heart failure (negative inotropic effect) [FDA]", "Life-threatening arrhythmias from drug interactions (QT prolongation, torsade de pointes) [FDA]", "Peripheral neuropathy, hearing loss [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver function tests, especially with pre-existing liver disease or hepatotoxic drugs; stop if signs of liver disease [FDA].", "Signs of heart failure [FDA].", "Review every co-medication for CYP3A4 interactions [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Bhutan STG 2024 (oral candidiasis): severe cases in immunocompromised hosts — itraconazole 100–200 mg PO once daily for 7 days, or fluconazole 150 mg once daily for 7 days [BT-STG]. Note: the FDA label says only the oral solution, not the capsules, is proven for oral candidiasis." },
  calc: [
    C("itraconazole", "bh", "Blastomycosis / histoplasmosis — 200 mg once daily (max 400 mg/day)", "PO", ADULT, "fixed", 200, 24, { caps: { max_daily: 400, unit: "mg" }, formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Increase by 100 mg steps if no response", "Above 200 mg/day: give in two divided doses", "With a full meal"] }),
    C("itraconazole", "load", "Life-threatening infection — loading 200 mg three times daily for 3 days", "PO", ADULT, "fixed", 200, 8, { caps: { max_daily: 600, unit: "mg" }, formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["First 3 days only, then 200–400 mg/day", "Treat for at least 3 months"] }),
    C("itraconazole", "toe", "Onychomycosis, toenails — 200 mg once daily for 12 weeks", "PO", ADULT, "fixed", 200, 24, { caps: { max_single: 200, unit: "mg" }, formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["12 consecutive weeks", "Not in heart failure or pregnancy"] }),
    C("itraconazole", "finger", "Onychomycosis, fingernails only — pulse 200 mg twice daily for 1 week", "PO", ADULT, "fixed", 200, 12, { caps: { max_daily: 400, unit: "mg" }, formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", flags: ["Two 1-week pulses separated by 3 weeks off", "Not in heart failure or pregnancy"] })
  ],
  sources: [["FDA", "SPORANOX (itraconazole) capsules — FDA label (DailyMed)", I3_DM("a4d555fa-787c-40fb-bb7d-b0d4f7318fd0")], NEML_SRC, STG_SRC],
  dose: { tagline: "Oral azole for endemic mycoses, aspergillosis and nail fungus — 200 mg daily with food; strong CYP3A4 inhibitor; never in heart failure for nails.",
    boxedTitle: "Congestive heart failure, cardiac effects and drug interactions",
    boxed: "Congestive Heart Failure and Cardiac Effects: SPORANOX® (itraconazole) Capsules should not be administered for the treatment of onychomycosis in patients with evidence of ventricular dysfunction such as congestive heart failure (CHF) or a history of CHF. If signs or symptoms of congestive heart failure occur during administration of SPORANOX® Capsules, discontinue administration. When itraconazole was administered intravenously to dogs and healthy human volunteers, negative inotropic effects were seen. Drug Interactions: Coadministration of a number of CYP3A4 substrates are contraindicated with SPORANOX®. Some examples of drugs that are contraindicated for coadministration with SPORANOX® Capsules are: methadone, disopyramide, dofetilide, dronedarone, quinidine, isavuconazole, ergot alkaloids (such as dihydroergotamine, ergometrine (ergonovine), ergotamine, methylergometrine (methylergonovine)), irinotecan, lurasidone, oral midazolam, pimozide, triazolam, felodipine, nisoldipine, ivabradine, ranolazine, eplerenone, cisapride, naloxegol, lomitapide, lovastatin, simvastatin, avanafil, ticagrelor, finerenone, voclosporin. Coadministration with colchicine, fesoterodine and solifenacin is contraindicated in subjects with varying degrees of renal or hepatic impairment. Coadministration with eliglustat is contraindicated in subjects that are poor or intermediate metabolizers of CYP2D6 and in subjects taking strong or moderate CYP2D6 inhibitors. Coadministration with venetoclax is contraindicated in patients with chronic lymphocytic leukemia (CLL)/small lymphocytic lymphoma (SLL) during the dose initiation and ramp-up phase of venetoclax. Coadministration with itraconazole can cause elevated plasma concentrations of these drugs and may increase or prolong both the pharmacologic effects and/or adverse reactions to these drugs. For example, increased plasma concentrations of some of these drugs can lead to QT prolongation and ventricular tachyarrhythmias including occurrences of torsade de pointes, a potentially fatal arrhythmia [FDA].",
    adult: [{ ind: "Blastomycosis / histoplasmosis", text: "200 mg once daily; up to 400 mg/day in 2 doses.", calc: ["bh"] }, { ind: "Life-threatening infection", text: "200 mg three times daily for 3 days, then 200–400 mg/day.", calc: ["load"] }, { ind: "Aspergillosis", text: "200–400 mg daily." }, { ind: "Toenail onychomycosis", text: "200 mg once daily for 12 weeks.", calc: ["toe"] }, { ind: "Fingernail onychomycosis", text: "200 mg twice daily for 1 week, 3 weeks off, repeat once.", calc: ["finger"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("ivabradine", {
  inn: "Ivabradine", atc: "C01EB17", cls: "HCN channel blocker (If inhibitor)",
  linked: [],
  forms: ["Tablets 5 mg (scored — can be halved to 2.5 mg) and 7.5 mg [FDA].", "Oral solution 5 mg/5 mL (1 mg/mL) [FDA]."],
  moa: "Blocks the HCN channel responsible for the cardiac pacemaker If current in the sinoatrial node, slowing heart rate [FDA].",
  pk: ["Take with food [FDA].", "Distribution half-life 2 hours; effective half-life about 6 hours [FDA].", "Mainly metabolised by CYP3A4 [FDA]."],
  ind: { adult: ["Stable symptomatic chronic heart failure with LVEF ≤35%, in sinus rhythm with resting heart rate ≥70 bpm, on maximally tolerated beta-blocker or with a contraindication to beta-blockers — to reduce hospitalisation for worsening heart failure [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Stable symptomatic heart failure due to dilated cardiomyopathy, 6 months and older [FDA]."] },
  adult: [["Heart failure", "Start 5 mg twice daily with food. After 2 weeks adjust to a resting heart rate of 50–60 bpm: HR over 60 → increase by 2.5 mg (to a maximum of 7.5 mg twice daily); 50–60 → keep; under 50 or bradycardia symptoms → decrease by 2.5 mg, and stop if already on 2.5 mg twice daily [FDA]."], ["Conduction defects or bradycardia risk", "Start 2.5 mg twice daily [FDA]."]],
  paed: { tiers: ["6 months and older, under 40 kg (oral solution): 0.05 mg/kg twice daily with food; adjust every 2 weeks by 0.05 mg/kg to reduce heart rate by at least 20%. Maximum 0.2 mg/kg twice daily (6 months to under 1 year) or 0.3 mg/kg twice daily (1 year and older), never above 7.5 mg twice daily [FDA].", "40 kg and over (tablets): 2.5 mg twice daily; adjust by 2.5 mg every 2 weeks; maximum 7.5 mg twice daily [FDA].", "Bradycardia at the starting dose: consider 0.02 mg/kg twice daily [FDA]."], transition: "40 kg: tablets, 2.5 mg start.", calcNote: "Starting dose only — titrate to heart rate." },
  adj: { renal: "CrCl 15–60 mL/min: no adjustment; under 15 mL/min not studied [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe hepatic impairment: contraindicated [FDA].", pregnancy: "May cause fetal toxicity — females should use effective contraception [FDA]. Breastfeeding not recommended [FDA].", other: "Avoid moderate CYP3A4 inhibitors and inducers, and grapefruit; strong CYP3A4 inhibitors are contraindicated. Other negative chronotropes (beta-blockers, digoxin, amiodarone) add to bradycardia [FDA]." },
  tox: { human: "Severe, prolonged bradycardia [FDA].", animal: LD, manage: "Temporary pacing if bradycardia is poorly tolerated; IV fluids, atropine, IV beta-stimulants such as isoprenaline [FDA]." },
  contra: ["Acute decompensated heart failure [FDA].", "Clinically significant hypotension [FDA].", "Sick sinus syndrome, sinoatrial block or third-degree AV block, unless a functioning demand pacemaker is present [FDA].", "Clinically significant bradycardia [FDA].", "Severe hepatic impairment [FDA].", "Pacemaker dependence [FDA].", "Strong CYP3A4 inhibitors [FDA]."],
  ae: { common: ["Bradycardia, hypertension, atrial fibrillation, luminous phenomena (phosphenes) [FDA]."], serious: ["Fetal toxicity [FDA]", "Atrial fibrillation (5.0% vs 3.9% per patient-year in SHIFT) [FDA]", "Bradycardia, sinus arrest, heart block [FDA]"] },
  monitor: ["Resting heart rate and rhythm at each visit; stop if atrial fibrillation develops [FDA].", "Not recommended with second-degree AV block [FDA]."],
  local: notBT,
  calc: [
    C("ivabradine", "adult", "Heart failure — start 5 mg twice daily", "PO", ADULT, "fixed", 5, 12, { caps: { max_single: 7.5, unit: "mg" }, formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Half tablets (scored)", flags: ["Conduction defects / bradycardia risk: start 2.5 mg", "Titrate at 2 weeks to resting HR 50–60", "Maximum 7.5 mg twice daily"] }),
    C("ivabradine", "child", "Child 6 months+, under 40 kg — start 0.05 mg/kg twice daily", "PO", pop(6, 216, null, 40), "mg_per_kg", 0.05, 12, { caps: { max_single: 7.5, unit: "mg" }, formulations: [{ form: "oral solution", strength: 1, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Titrate every 2 weeks by 0.05 mg/kg to cut HR by ≥20%", "Maximum 0.2 mg/kg (under 1 y) or 0.3 mg/kg (1 y+) per dose, never over 7.5 mg"] }),
    C("ivabradine", "child40", "Child 40 kg and over — start 2.5 mg twice daily", "PO", pop(6, 216, 40, null), "fixed", 2.5, 12, { caps: { max_single: 7.5, unit: "mg" }, formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Half tablets (scored)", flags: ["Titrate by 2.5 mg every 2 weeks", "Maximum 7.5 mg twice daily"] })
  ],
  sources: [["FDA", "Corlanor (ivabradine) tablets and oral solution — FDA label (DailyMed)", I3_DM("92018a65-38f6-45f7-91d4-a34921b81d0d")], NEML_SRC],
  dose: { tagline: "Heart-rate-lowering add-on for HFrEF in sinus rhythm — 5 mg twice daily, titrate to HR 50–60; max 7.5 mg twice daily.",
    adult: [{ ind: "Heart failure (HFrEF)", text: "5 mg twice daily with food (2.5 mg if bradycardia risk); max 7.5 mg twice daily.", calc: ["adult"] }],
    child: [{ ind: "Dilated cardiomyopathy, under 40 kg", text: "0.05 mg/kg twice daily; titrate.", calc: ["child"] }, { ind: "40 kg and over", text: "2.5 mg twice daily; titrate.", calc: ["child40"] }] }
});

FDB_M("ivacaftor", {
  inn: "Ivacaftor", atc: "R07AX02", cls: "CFTR potentiator",
  linked: [],
  forms: ["Tablets 150 mg [FDA].", "Oral granules in unit-dose packets 5.8, 13.4, 25, 50 and 75 mg [FDA]."],
  moa: "Potentiates the CFTR chloride channel at the cell surface, increasing its open probability (gating) [FDA].",
  pk: ["Take with fat-containing food [FDA].", "Apparent terminal half-life about 12 hours [FDA].", "Sensitive CYP3A substrate [FDA]."],
  ind: { adult: ["Cystic fibrosis with at least one CFTR mutation responsive to ivacaftor (confirmed by an FDA-cleared genotype test) [FDA]."], paed: ["Same, from 1 month of age [FDA]."] },
  adult: [["Cystic fibrosis (6 years and older)", "150 mg every 12 hours with fat-containing food [FDA]."], ["Moderate hepatic impairment (Child-Pugh B)", "150 mg once daily [FDA]."], ["Severe hepatic impairment (Child-Pugh C)", "Use with caution at a reduced dose — 150 mg once daily or less often [FDA]."], ["Moderate CYP3A inhibitor (e.g. fluconazole)", "150 mg once daily [FDA]."], ["Strong CYP3A inhibitor (e.g. ketoconazole)", "150 mg twice a week [FDA]."]],
  paed: { tiers: ["1 to under 2 months, 3 kg+: 5.8 mg packet every 12 hours [FDA].", "2 to under 4 months, 3 kg+: 13.4 mg every 12 hours [FDA].", "4 to under 6 months, 5 kg+: 25 mg every 12 hours [FDA].", "6 months to under 6 years: 5 to under 7 kg 25 mg; 7 to under 14 kg 50 mg; 14 kg+ 75 mg — every 12 hours [FDA].", "Under 6 months: not recommended with any hepatic impairment or moderate/strong CYP3A inhibitors; under 1 month not recommended [FDA].", "6 months to under 6 years: moderate hepatic impairment or moderate CYP3A inhibitor → one packet once daily; strong CYP3A inhibitor → one packet twice a week [FDA]."], transition: "6 years: 150 mg tablet every 12 hours.", calcNote: "Granules mixed with 5 mL soft food or liquid, given with fat-containing food." },
  adj: { renal: "Mild–moderate: no adjustment; severe or end-stage — use with caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "See dose lines: Child-Pugh B once daily; C reduced dose with caution; under 6 months not recommended [FDA].", pregnancy: "Limited human data; no teratogenicity in animals [FDA].", other: "Avoid grapefruit. Strong CYP3A inducers (rifampicin, carbamazepine, St John's wort) are not recommended [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose reports [FDA].", animal: LD, manage: "No antidote; supportive care with monitoring of vital signs [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, oropharyngeal pain, upper respiratory infection, nasal congestion, abdominal pain, nasopharyngitis, diarrhoea, rash, nausea, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Raised transaminases [FDA]", "Hypersensitivity, anaphylaxis [FDA]", "Intracranial hypertension [FDA]", "Neuropsychiatric events, suicidal thoughts [FDA]", "Cataracts in children [FDA]"] },
  monitor: ["ALT/AST before starting, every 3 months in year 1, then yearly; interrupt if over 5 × ULN [FDA].", "Eye examination at baseline and follow-up in children [FDA]."],
  local: notBT,
  calc: [
    C("ivacaftor", "std", "Cystic fibrosis 6 years+ — 150 mg every 12 hours", "PO", pop(72, null, null, null), "fixed", 150, 12, { caps: { max_single: 150, unit: "mg" }, formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["With fat-containing food", "Child-Pugh B or moderate CYP3A inhibitor: once daily", "Strong CYP3A inhibitor: twice a week"] }),
    BAND("ivacaftor", "gran", "Cystic fibrosis 6 months to under 6 years — granules by weight every 12 hours", "PO", pop(6, 72, 5, null), [{ min_weight_kg: 5, max_weight_kg: 7, text: "One 25 mg packet every 12 hours (50 mg/day)", daily: 50 }, { min_weight_kg: 7, max_weight_kg: 14, text: "One 50 mg packet every 12 hours (100 mg/day)", daily: 100 }, { min_weight_kg: 14, max_weight_kg: null, text: "One 75 mg packet every 12 hours (150 mg/day)", daily: 150 }], { rounding: "Whole packets", flags: ["Mix with 5 mL soft food or liquid; give with fat-containing food", "Moderate hepatic impairment or moderate CYP3A inhibitor: once daily", "Strong CYP3A inhibitor: twice a week"] }),
    C("ivacaftor", "m1", "1 to under 2 months (3 kg+) — 5.8 mg every 12 hours", "PO", pop(1, 2, 3, null), "fixed", 5.8, 12, { caps: { max_single: 5.8, unit: "mg" }, rounding: "Whole packet", flags: ["Not with any hepatic impairment or moderate/strong CYP3A inhibitor"] }),
    C("ivacaftor", "m2", "2 to under 4 months (3 kg+) — 13.4 mg every 12 hours", "PO", pop(2, 4, 3, null), "fixed", 13.4, 12, { caps: { max_single: 13.4, unit: "mg" }, rounding: "Whole packet", flags: ["Not with any hepatic impairment or moderate/strong CYP3A inhibitor"] }),
    C("ivacaftor", "m4", "4 to under 6 months (5 kg+) — 25 mg every 12 hours", "PO", pop(4, 6, 5, null), "fixed", 25, 12, { caps: { max_single: 25, unit: "mg" }, rounding: "Whole packet", flags: ["Not with any hepatic impairment or moderate/strong CYP3A inhibitor"] })
  ],
  sources: [["FDA", "KALYDECO (ivacaftor) tablets and oral granules — FDA label (DailyMed)", I3_DM("0ab0c9f8-3eee-4e0f-9f3f-c1e16aaffe25")], NEML_SRC],
  dose: { tagline: "CFTR potentiator for responsive CF mutations — 150 mg every 12 hours with fatty food from 6 years; weight-band granules below.",
    adult: [{ ind: "Cystic fibrosis", text: "150 mg every 12 hours with fat-containing food.", calc: ["std"] }],
    child: [{ ind: "6 months to under 6 years", text: "25 / 50 / 75 mg granules every 12 hours by weight.", calc: ["gran"] }, { ind: "1–6 months", text: "5.8 / 13.4 / 25 mg every 12 hours by age.", calc: ["m1", "m2", "m4"] }] }
});

FDB_M("ivermectin", {
  inn: "Ivermectin", atc: "P02CF01", cls: "Avermectin anthelminthic",
  linked: [],
  forms: ["STROMECTOL tablets 3 mg [FDA].", "Ivermectin 1% cream (rosacea) and 0.5% lotion (head lice) are separate topical products [FDA].", "India: 12 mg tablets are sold (e.g. Ivecop, Evimectin DT) — the US label tables use 3 mg tablets; recalculate the tablet count."],
  moa: "Binds glutamate-gated chloride channels in invertebrate nerve and muscle cells, causing paralysis and death of the parasite [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take tablets on an empty stomach with water (label); the CDC advises taking with food for scabies [FDA] [CDC].", "Half-life about 18 hours [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Strongyloidiasis of the intestinal tract [FDA].", "Onchocerciasis [FDA].", "Scabies, classic and crusted (not FDA-approved; CDC guidance) [CDC]."], paed: ["Same, 15 kg and over [FDA] [CDC]."] },
  adult: [["Strongyloidiasis", "Single dose of about 200 mcg/kg: 15–24 kg 3 mg; 25–35 kg 6 mg; 36–50 kg 9 mg; 51–65 kg 12 mg; 66–79 kg 15 mg; 80 kg and over 200 mcg/kg. Check at least three stool examinations over 3 months [FDA]."], ["Onchocerciasis", "Single dose of about 150 mcg/kg: 15–25 kg 3 mg; 26–44 kg 6 mg; 45–64 kg 9 mg; 65–84 kg 12 mg; 85 kg and over 150 mcg/kg. Retreat every 12 months (mass programmes), or as often as every 3 months for individual patients [FDA]."], ["Classic scabies", "200 mcg/kg per dose, two doses 7 to 14 days apart, with food [CDC]."], ["Crusted scabies", "200 mcg/kg with a topical scabicide; 3, 5 or 7 doses by severity (days 1, 2, 8; + 9, 15; + 22, 29) — no consensus on the best schedule [CDC]."]],
  paed: { tiers: ["15 kg and over: same weight-based doses [FDA].", "Under 15 kg: safety not established [FDA] [CDC]."], transition: "Same mcg/kg dosing.", calcNote: "Label weight tables for strongyloidiasis and onchocerciasis; 200 mcg/kg for scabies." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Should not be used in pregnancy — safety not established [FDA] [CDC]. Breastfeeding: excreted in milk in low amounts; treat only if delaying treatment risks the mother more [FDA].", other: "Raised INR reported with warfarin [FDA]. Patients exposed to Loa loa areas (West/Central Africa): assess for loiasis first — risk of fatal encephalopathy [FDA]." },
  tox: { human: "Rash, oedema, headache, dizziness, weakness, nausea, vomiting, diarrhoea; also seizures, ataxia, dyspnoea (mostly veterinary products) [FDA].", animal: "Single oral doses of 25–50 mg/kg (mice) and 40–50 mg/kg (rats) caused significant lethality [FDA].", manage: "Supportive: IV fluids and electrolytes, respiratory support, pressors for hypotension; early gut decontamination if needed [FDA]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Strongyloidiasis: dizziness, pruritus, nausea, diarrhoea (each under 3%) [FDA].", "Onchocerciasis: Mazzotti reactions — pruritus, rash, fever, lymph-node tenderness, arthralgia [FDA]."], serious: ["Neurotoxicity — altered consciousness, coma, death (rare) [FDA]", "Encephalopathy with heavy Loa loa infection [FDA]", "Severe Mazzotti reactions, postural hypotension [FDA]"] },
  monitor: ["Strongyloidiasis: at least three stool examinations over the 3 months after treatment [FDA].", "Onchocerciasis: eye examination; repeat treatment is usually needed [FDA]."],
  local: notBT,
  calc: [
    BAND("ivermectin", "strongy", "Strongyloidiasis — single dose by weight (label table, about 200 mcg/kg)", "PO", pop(null, null, 15, 80), [{ min_weight_kg: 15, max_weight_kg: 25, text: "3 mg (1 tablet) once", daily: 3 }, { min_weight_kg: 25, max_weight_kg: 36, text: "6 mg (2 tablets) once", daily: 6 }, { min_weight_kg: 36, max_weight_kg: 51, text: "9 mg (3 tablets) once", daily: 9 }, { min_weight_kg: 51, max_weight_kg: 66, text: "12 mg (4 tablets) once", daily: 12 }, { min_weight_kg: 66, max_weight_kg: 80, text: "15 mg (5 tablets) once", daily: 15 }], { formulations: [{ form: "tab", strength: 3, unit: "mg/tab", whole: true }], rounding: "Whole 3 mg tablets", flags: ["Label table uses whole kilograms (15–24, 25–35 …); weights between are given the lower band", "80 kg and over: 200 mcg/kg", "Empty stomach with water", "Not in pregnancy"] }),
    C("ivermectin", "strongy80", "Strongyloidiasis 80 kg and over — 200 mcg/kg once", "PO", pop(null, null, 80, null), "mg_per_kg", 0.2, null, { formulations: [{ form: "tab", strength: 3, unit: "mg/tab", whole: true }], rounding: "Nearest whole 3 mg tablet (as in the label table)", round_to: 3, flags: ["Single dose", "Not in pregnancy"] }),
    BAND("ivermectin", "oncho", "Onchocerciasis — single dose by weight (label table, about 150 mcg/kg)", "PO", pop(null, null, 15, 85), [{ min_weight_kg: 15, max_weight_kg: 26, text: "3 mg (1 tablet) once", daily: 3 }, { min_weight_kg: 26, max_weight_kg: 45, text: "6 mg (2 tablets) once", daily: 6 }, { min_weight_kg: 45, max_weight_kg: 65, text: "9 mg (3 tablets) once", daily: 9 }, { min_weight_kg: 65, max_weight_kg: 85, text: "12 mg (4 tablets) once", daily: 12 }], { formulations: [{ form: "tab", strength: 3, unit: "mg/tab", whole: true }], rounding: "Whole 3 mg tablets", flags: ["Label table uses whole kilograms; weights between are given the lower band", "85 kg and over: 150 mcg/kg", "Retreat at 3–12 months"] }),
    C("ivermectin", "oncho85", "Onchocerciasis 85 kg and over — 150 mcg/kg once", "PO", pop(null, null, 85, null), "mg_per_kg", 0.15, null, { formulations: [{ form: "tab", strength: 3, unit: "mg/tab", whole: true }], rounding: "Nearest whole 3 mg tablet (as in the label table)", round_to: 3, flags: ["Single dose; retreat at 3–12 months"] }),
    C("ivermectin", "scabies", "Scabies (CDC) — 200 mcg/kg, two doses 7–14 days apart", "PO", pop(null, null, 15, null), "mg_per_kg", 0.2, null, { formulations: [{ form: "tab", strength: 3, unit: "mg/tab", whole: true }], rounding: "Nearest whole 3 mg tablet (as in the label table)", round_to: 3, sources: ["CDC"], flags: ["Not FDA-approved for scabies (CDC guidance)", "Repeat after 7–14 days; take with food", "Crusted scabies: 3–7 doses with a topical scabicide", "Under 15 kg or pregnant: safety not established"] })
  ],
  sources: [["FDA", "STROMECTOL (ivermectin) tablets — FDA label (DailyMed)", I3_DM("681888c9-af79-4b7d-ae80-c3f4f6f1effd")], ["CDC", "Clinical care of scabies — CDC, Dec 2023", "https://www.cdc.gov/scabies/hcp/clinical-care/index.html"], NEML_SRC],
  dose: { tagline: "Single-dose anthelminthic — about 200 mcg/kg for strongyloidiasis, 150 mcg/kg for onchocerciasis; 200 mcg/kg twice for scabies (CDC); 15 kg and over, not in pregnancy.",
    adult: [{ ind: "Strongyloidiasis", text: "About 200 mcg/kg once (label weight table).", calc: ["strongy", "strongy80"] }, { ind: "Onchocerciasis", text: "About 150 mcg/kg once (label weight table).", calc: ["oncho", "oncho85"] }, { ind: "Scabies (CDC)", text: "200 mcg/kg, repeat in 7–14 days.", calc: ["scabies"] }],
    child: [{ ind: "15 kg and over", text: "Same weight-based doses.", calc: ["strongy", "oncho", "scabies"] }, { ind: "Under 15 kg", text: "Safety not established." }] }
});

FDB_M("ivosidenib", {
  inn: "Ivosidenib", atc: "L01XM02", cls: "IDH1 inhibitor (antineoplastic)", risk: ONC,
  linked: [],
  forms: ["Tablets 250 mg [FDA]."],
  moa: "Inhibits the mutant isocitrate dehydrogenase 1 (IDH1) enzyme, lowering 2-hydroxyglutarate and allowing myeloid differentiation [FDA].",
  pk: ["With or without food, but not with a high-fat meal [FDA].", "Terminal half-life at steady state about 58–129 hours [FDA].", "CYP3A4 substrate [FDA]."],
  ind: { adult: ["IDH1-mutated AML, newly diagnosed, in adults 75 years or older or unfit for intensive induction — with azacitidine or alone [FDA].", "IDH1-mutated relapsed or refractory AML [FDA].", "IDH1-mutated relapsed or refractory myelodysplastic syndromes [FDA].", "IDH1-mutated locally advanced or metastatic cholangiocarcinoma after prior treatment [FDA]."], paed: [NEP] },
  adult: [["All indications", "500 mg once daily until disease progression or unacceptable toxicity; in AML/MDS continue at least 6 months to allow response [FDA]."], ["With azacitidine (new AML)", "Start on cycle 1 day 1 with azacitidine 75 mg/m² daily on days 1–7 (or 1–5 and 8–9) of each 28-day cycle [FDA]."], ["Strong CYP3A4 inhibitor", "250 mg once daily; return to 500 mg after at least 5 half-lives of the inhibitor once it is stopped [FDA]."], ["QTc over 480–500 ms", "Interrupt; restart 500 mg once QTc ≤480 ms [FDA]."], ["QTc over 500 ms", "Interrupt; resume 250 mg once QTc within 30 ms of baseline or ≤480 ms [FDA]."], ["QTc with life-threatening arrhythmia, or Guillain–Barré syndrome", "Stop permanently [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "Mild–moderate: no adjustment; severe not studied [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Mild–moderate: no adjustment; severe not studied [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "May cause fetal harm; do not breastfeed [FDA].", other: "Avoid strong CYP3A4 inducers, sensitive CYP3A4 substrates and QT-prolonging drugs [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; ECG monitoring [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["AML: diarrhoea, fatigue, oedema, nausea, leukocytosis, arthralgia, cytopenias [FDA] [UNVERIFIED-KNOWLEDGE].", "Cholangiocarcinoma: fatigue, nausea, abdominal pain, diarrhoea, cough, decreased appetite, ascites [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Differentiation syndrome (can be fatal) [FDA]", "QTc prolongation [FDA]", "Guillain–Barré syndrome [FDA]"] },
  monitor: ["ECG before starting, at least weekly for 3 weeks, then at least monthly [FDA].", "Electrolytes; blood counts; creatine phosphokinase weekly for the first month [FDA]."],
  local: notBT,
  calc: [
    C("ivosidenib", "std", "IDH1-mutated AML / MDS / cholangiocarcinoma — 500 mg once daily", "PO", ADULT, "fixed", 500, 24, { caps: { max_single: 500, unit: "mg" }, formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Whole tablets", flags: ["Strong CYP3A4 inhibitor: 250 mg once daily", "Not with a high-fat meal", "ECG weekly ×3, then monthly"] })
  ],
  sources: [["FDA", "TIBSOVO (ivosidenib) tablets — FDA label (DailyMed)", I3_DM("65d254c0-67ad-42c4-b972-ad463b755b2d")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Oral IDH1 inhibitor — 500 mg once daily (250 mg with strong CYP3A4 inhibitors); watch for differentiation syndrome and QTc.",
    boxedTitle: "Differentiation syndrome in AML and MDS",
    boxed: "Patients treated with TIBSOVO have experienced symptoms of differentiation syndrome, which can be fatal. Symptoms may include fever, dyspnea, hypoxia, pulmonary infiltrates, pleural or pericardial effusions, rapid weight gain or peripheral edema, hypotension, and hepatic, renal, or multi-organ dysfunction. If differentiation syndrome is suspected, initiate corticosteroid therapy and hemodynamic monitoring until symptom resolution [FDA].",
    adult: [{ ind: "IDH1-mutated AML, MDS, cholangiocarcinoma", text: "500 mg once daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("ixabepilone", {
  inn: "Ixabepilone", atc: "L01DC04", cls: "Epothilone B analogue (microtubule stabiliser)", risk: ONC,
  linked: [],
  forms: ["IXEMPRA for injection 15 mg and 45 mg single-dose vials, each supplied with its own DILUENT (8 mL and 23.5 mL) [FDA]."],
  moa: "Binds β-tubulin and stabilises microtubules, blocking cells in mitosis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Metabolised by CYP3A4 [FDA]."],
  ind: { adult: ["Metastatic or locally advanced breast cancer: with capecitabine after failure of an anthracycline and a taxane; or alone after failure of an anthracycline, a taxane and capecitabine [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: [NEP] },
  adult: [["Breast cancer", "40 mg/m² as a 3-hour IV infusion every 3 weeks. For BSA over 2.2 m², calculate on 2.2 m² [FDA]."], ["Premedication (all patients, 1 h before)", "An H1 antagonist (e.g. diphenhydramine 50 mg orally) and an H2 antagonist (e.g. ranitidine 150–300 mg orally). After a hypersensitivity reaction, add a corticosteroid (e.g. dexamethasone 20 mg IV 30 min before, or orally 60 min before) [FDA]."], ["Retreatment", "Start a new cycle only with neutrophils ≥1,500/mm³, platelets ≥100,000/mm³ and non-haematological toxicity ≤ grade 1 [FDA]."], ["Toxicity", "Reduce by 20% for grade 2 neuropathy ≥7 days, grade 3 neuropathy <7 days, other grade 3 toxicity, neutrophils <500 for ≥7 days, febrile neutropenia, or platelets <25,000 (or <50,000 with bleeding); stop for grade 3 neuropathy ≥7 days, disabling neuropathy or any grade 4 toxicity. Reduce a further 20% if it recurs [FDA]."], ["Strong CYP3A4 inhibitor", "Avoid; if unavoidable, reduce to 20 mg/m² [FDA]."], ["Preparation", "Reconstitute with the supplied DILUENT only, then dilute to 0.2–0.6 mg/mL [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: NEP, hepatic: "With capecitabine: contraindicated if AST/ALT >2.5 × ULN or bilirubin >1 × ULN. Alone (first course): AST/ALT ≤10 × ULN and bilirubin ≤1.5 × ULN → 32 mg/m²; AST/ALT ≤10 × ULN and bilirubin >1.5–3 × ULN → 20–30 mg/m²; AST/ALT >10 × ULN or bilirubin >3 × ULN → avoid [FDA].", pregnancy: "May cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A4 inhibitors and inducers [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; no antidote [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of severe hypersensitivity to agents containing Cremophor EL or its derivatives (e.g. polyoxyethylated castor oil) [FDA].", "Neutrophils <1,500/mm³ or platelets <100,000/mm³ [FDA].", "With capecitabine when AST or ALT >2.5 × ULN or bilirubin >1 × ULN [FDA]."],
  ae: { common: ["Peripheral sensory neuropathy, fatigue, myalgia/arthralgia, alopecia, nausea, vomiting, stomatitis, diarrhoea, palmar-plantar erythrodysaesthesia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Neutropenia and neutropenia-related death with hepatic impairment [FDA]", "Peripheral neuropathy [FDA]", "Hypersensitivity reactions [FDA]", "Fetal harm [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count before each cycle [FDA].", "Liver tests before starting [FDA].", "Neuropathy at each visit [FDA]."],
  local: notBT,
  calc: [
    C("ixabepilone", "std", "Breast cancer — 40 mg/m² IV over 3 h every 3 weeks (BSA capped at 2.2 m²)", "IV", ADULT, "mg_per_m2", 40, 504, { caps: { max_single: 88, unit: "mg" }, formulations: [], rounding: "Nearest 1 mg", flags: ["BSA over 2.2 m²: dose on 2.2 m² (88 mg)", "Premedicate with H1 + H2 antagonists", "Hepatic impairment (monotherapy): 32 or 20–30 mg/m²; with capecitabine contraindicated", "Strong CYP3A4 inhibitor: 20 mg/m²"] })
  ],
  sources: [["FDA", "IXEMPRA (ixabepilone) kit — FDA label (DailyMed)", I3_DM("241f0b1e-8b95-470d-876f-bf1804daaf18")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "IV microtubule stabiliser for resistant breast cancer — 40 mg/m² over 3 h every 3 weeks (BSA capped at 2.2 m²); premedicate; liver tests decide the dose.",
    boxedTitle: "Toxicity in patients with hepatic impairment",
    boxed: "IXEMPRA in combination with capecitabine is contraindicated in patients with AST or ALT >2.5 x ULN or bilirubin >1 x ULN due to increased risk of toxicity and neutropenia-related death [FDA].",
    adult: [{ ind: "Breast cancer", text: "40 mg/m² IV over 3 hours every 3 weeks.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("ixazomib", {
  inn: "Ixazomib", atc: "L01XG03", cls: "Oral proteasome inhibitor", risk: ONC,
  linked: [],
  forms: ["Capsules 4 mg, 3 mg and 2.3 mg [FDA]."],
  moa: "Reversibly inhibits the β5 subunit of the 20S proteasome [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take at least 1 hour before or 2 hours after food; swallow whole [FDA]."],
  ind: { adult: ["Multiple myeloma after at least one prior therapy, with lenalidomide and dexamethasone [FDA]."], paed: [NEP] },
  adult: [["Multiple myeloma", "4 mg once weekly on days 1, 8 and 15 of a 28-day cycle, with lenalidomide 25 mg on days 1–21 and dexamethasone 40 mg on days 1, 8, 15 and 22 [FDA]."], ["Dose reductions", "4 mg → 3 mg → 2.3 mg → stop [FDA]."], ["Moderate/severe hepatic impairment, CrCl under 30 mL/min or dialysis", "Start 3 mg [FDA]."], ["New cycle", "Only with neutrophils ≥1,000/mm³ and platelets ≥75,000/mm³ [FDA]."], ["Missed dose", "Take only if the next dose is 72 hours or more away; never double [FDA]."]],
  paed: { tiers: [NEP], transition: "Adults.", calcNote: "Adult only." },
  adj: { renal: "CrCl under 30 mL/min or ESRD on dialysis: 3 mg; not dialysable — give without regard to dialysis timing [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate (bilirubin >1.5–3 × ULN) or severe (>3 × ULN): 3 mg [FDA].", pregnancy: "May cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong CYP3A inducers. Consider antiviral prophylaxis against herpes zoster [FDA]." },
  tox: { human: "Overdosage has led to deaths — take exactly as prescribed [FDA].", animal: LD, manage: "Supportive; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, constipation, thrombocytopenia, peripheral neuropathy, nausea, peripheral oedema, vomiting, back pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thrombocytopenia [FDA]", "Severe gastrointestinal toxicity [FDA]", "Peripheral neuropathy [FDA]", "Hepatotoxicity, rash, thrombotic microangiopathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Herpes zoster reactivation [FDA]"] },
  monitor: ["Platelets at least monthly (more often in the first 3 cycles) [FDA] [UNVERIFIED-KNOWLEDGE].", "Neuropathy, GI symptoms, liver tests [FDA]."],
  local: notBT,
  calc: [
    C("ixazomib", "std", "Multiple myeloma — 4 mg once weekly (days 1, 8, 15 of 28)", "PO", ADULT, "fixed", 4, 168, { caps: { max_single: 4, unit: "mg" }, formulations: [{ form: "cap", strength: 4, unit: "mg/cap" }], rounding: "Whole capsule", renal: [{ crcl_min: 0, crcl_max: 29.99, action: "reduce_dose", factor: null, set_value: 3, note: "CrCl under 30 mL/min or dialysis: start 3 mg" }], flags: ["Days 1, 8 and 15 only; week 4 off", "Moderate/severe hepatic impairment: 3 mg", "Empty stomach"] })
  ],
  sources: [["FDA", "NINLARO (ixazomib) capsules — FDA label (DailyMed)", I3_DM("038f2461-834b-4488-9ebd-863c83eef5a7")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Oral proteasome inhibitor for myeloma — 4 mg weekly ×3 of 4 weeks with lenalidomide/dex; 3 mg if CrCl under 30 or liver impairment.",
    adult: [{ ind: "Multiple myeloma", text: "4 mg on days 1, 8, 15 of a 28-day cycle.", calc: ["std"] }],
    child: [{ ind: "Children", text: NEP }] }
});

FDB_M("ixekizumab", {
  inn: "Ixekizumab", atc: "L04AC13", cls: "Anti-IL-17A monoclonal antibody",
  linked: [],
  forms: ["Injection 80 mg/mL single-dose autoinjector or prefilled syringe; 40 mg/0.5 mL prefilled syringe [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Humanised IgG4 antibody that binds interleukin-17A and blocks its receptor interaction [UNVERIFIED-KNOWLEDGE].",
  pk: ["Subcutaneous injection [FDA]."],
  ind: { adult: ["Moderate-to-severe plaque psoriasis [FDA].", "Active psoriatic arthritis [FDA].", "Active ankylosing spondylitis [FDA].", "Active non-radiographic axial spondyloarthritis with objective inflammation [FDA]."], paed: ["Moderate-to-severe plaque psoriasis, 6 to under 18 years [FDA]."] },
  adult: [["Plaque psoriasis", "160 mg (two 80 mg injections) at week 0, then 80 mg at weeks 2, 4, 6, 8, 10 and 12, then 80 mg every 4 weeks [FDA]."], ["Psoriatic arthritis; ankylosing spondylitis", "160 mg at week 0, then 80 mg every 4 weeks (psoriatic arthritis with moderate–severe psoriasis: use the psoriasis regimen) [FDA]."], ["Non-radiographic axial spondyloarthritis", "80 mg every 4 weeks [FDA]."], ["Before starting", "Screen for tuberculosis (treat latent TB first; not in active TB) and complete age-appropriate vaccinations [FDA]."]],
  paed: { tiers: ["Plaque psoriasis 6 to under 18 years, every 4 weeks after the start dose: over 50 kg 160 mg then 80 mg; 25–50 kg 80 mg then 40 mg; under 25 kg 40 mg then 20 mg [FDA]."], transition: "Over 50 kg: adult-size doses every 4 weeks.", calcNote: "Weight bands." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Limited human data [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid live vaccines [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Monitor for adverse reactions; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serious hypersensitivity to ixekizumab or excipients [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Injection-site reactions, upper respiratory infections, nausea, tinea infections [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections; tuberculosis reactivation [FDA]", "Hypersensitivity, anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Inflammatory bowel disease (new or worse) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["TB screening before treatment; watch for TB during treatment [FDA].", "Signs of infection and of inflammatory bowel disease [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("ixekizumab", "load", "Psoriasis / PsA / AS — start 160 mg SC at week 0", "SC", ADULT, "fixed", 160, null, { caps: { max_single: 160, unit: "mg" }, formulations: [{ form: "inj", strength: 80, unit: "mg/mL" }], rounding: "Two 80 mg injections", flags: ["Psoriasis: then 80 mg every 2 weeks to week 12, then every 4 weeks", "PsA / AS: then 80 mg every 4 weeks", "nr-axSpA: no loading dose"] }),
    C("ixekizumab", "maint", "Maintenance — 80 mg SC every 4 weeks", "SC", ADULT, "fixed", 80, 672, { caps: { max_single: 80, unit: "mg" }, formulations: [{ form: "inj", strength: 80, unit: "mg/mL" }], rounding: "One 80 mg injection", flags: ["Psoriasis: every 2 weeks until week 12 first"] }),
    BAND("ixekizumab", "child", "Child plaque psoriasis 6–17 years — start dose, then every 4 weeks, by weight", "SC", pop(72, 216, null, null), [{ min_weight_kg: 0, max_weight_kg: 25, text: "40 mg at week 0, then 20 mg every 4 weeks", daily: 40 }, { min_weight_kg: 25, max_weight_kg: 50.0001, text: "80 mg at week 0, then 40 mg every 4 weeks", daily: 80 }, { min_weight_kg: 50.0001, max_weight_kg: null, text: "160 mg at week 0, then 80 mg every 4 weeks", daily: 160 }], { formulations: [{ form: "inj", strength: 80, unit: "mg/mL" }], rounding: "Prefilled syringe", flags: ["Screen for TB first", "Band 'daily' = the start dose"] })
  ],
  sources: [["FDA", "TALTZ (ixekizumab) injection — FDA label (DailyMed)", I3_DM("ac96658a-d7dc-4c7c-8928-2adcdf4318b2")], NEML_SRC],
  dose: { tagline: "Anti-IL-17A injection — 160 mg start, then 80 mg (every 2 weeks to week 12 in psoriasis) and every 4 weeks; screen for TB.",
    adult: [{ ind: "Plaque psoriasis", text: "160 mg week 0; 80 mg weeks 2–12 every 2 weeks; then 80 mg every 4 weeks.", calc: ["load", "maint"] }, { ind: "PsA, AS", text: "160 mg week 0, then 80 mg every 4 weeks.", calc: ["load", "maint"] }, { ind: "nr-axSpA", text: "80 mg every 4 weeks.", calc: ["maint"] }],
    child: [{ ind: "Plaque psoriasis 6–17 years", text: "By weight: 40/20, 80/40 or 160/80 mg.", calc: ["child"] }] }
});

FDB_M("zonisamide", {
  inn: "Zonisamide", atc: "N03AX15", cls: "Sulfonamide antiseizure medicine",
  linked: [],
  forms: ["Capsules 25, 50 and 100 mg [FDA]."],
  moa: "Not fully known; blocks sodium and T-type calcium channels; also a weak carbonic anhydrase inhibitor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["With or without food; swallow whole [FDA].", "Long half-life — up to 2 weeks to reach steady state after each change [FDA].", "Metabolised in the liver (CYP3A4) and excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Adjunctive therapy of partial-onset seizures in adults [FDA]."], paed: ["Under 16 years: safety and efficacy not established [FDA]."] },
  adult: [["Partial seizures (adjunct), over 16 years", "100 mg daily; after 2 weeks 200 mg/day for at least 2 weeks; then 300 and 400 mg/day, each kept stable for at least 2 weeks. Once or twice daily. Doses of 100–600 mg/day are effective; no added response above 400 mg/day [FDA]."]],
  paed: { tiers: ["Under 16 years: not established [FDA]."], transition: "16 years and over: adult dosing.", calcNote: "Starting dose only." },
  adj: { renal: "Treat with caution; slower titration and more monitoring may be needed. Creatinine may rise in the first 4 weeks [FDA].", hepatic: "Treat with caution; slower titration [FDA].", pregnancy: "May cause fetal harm; metabolic acidosis in pregnancy may harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Other carbonic anhydrase inhibitors (topiramate, acetazolamide) worsen acidosis, hyperammonaemia and kidney stones. CYP3A4 inducers shorten the half-life [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Coma, bradycardia, hypotension, respiratory depression reported [UNVERIFIED-KNOWLEDGE].", animal: "Oral LD50 1,892 mg/kg (mouse), 2,001 mg/kg (rat) [PubChem].", manage: "Supportive; gastric lavage or emesis early; haemodialysis may help given low protein binding [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to sulfonamides or zonisamide [FDA]."],
  ae: { common: ["Somnolence, anorexia, dizziness, headache, nausea, agitation/irritability [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Potentially fatal sulfonamide reactions — SJS/TEN, fulminant hepatic necrosis, agranulocytosis, aplastic anaemia [FDA]", "Oligohidrosis and hyperthermia, mainly in children [FDA] [UNVERIFIED-KNOWLEDGE]", "Metabolic acidosis [FDA]", "Kidney stones [FDA] [UNVERIFIED-KNOWLEDGE]", "Suicidal thoughts [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Rash — consider stopping for any unexplained rash [FDA].", "Serum bicarbonate; creatinine [FDA] [UNVERIFIED-KNOWLEDGE].", "Hydration; sweating and temperature in hot weather [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("zonisamide", "start", "Partial seizures (adjunct) over 16 years — start 100 mg daily", "PO", pop(192, null, null, null), "fixed", 100, 24, { caps: { max_daily: 600, unit: "mg" }, formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", renal_note: "Kidney or liver disease: caution — slower titration and closer monitoring (label).", flags: ["Increase every 2 weeks: 200 → 300 → 400 mg/day", "No added benefit above 400 mg/day; little experience above 600", "Contraindicated in sulfonamide allergy"] })
  ],
  sources: [["FDA", "Zonisamide capsules — FDA label (DailyMed)", I3_DM("53ecba6c-0de4-4e11-81d5-6deac79accd5")], NEML_SRC],
  dose: { tagline: "Sulfonamide antiseizure add-on — 100 mg daily, step up every 2 weeks to 400 mg/day; never in sulfonamide allergy.",
    adult: [{ ind: "Partial seizures (adjunct)", text: "100 mg daily → 200 → 300 → 400 mg/day, 2 weeks per step.", calc: ["start"] }],
    child: [{ ind: "Under 16 years", text: NEP }] }
});

FDB_M("13c-urea", {
  inn: "Urea (13C)", atc: "V04CX05", cls: "Diagnostic agent — urea breath test",
  linked: [],
  forms: ["IDkit Hp One / Two: 75 mg 13C-urea tablet plus 4 g citric acid (Citrica) for oral solution, used with the BreathID device [FDA]."],
  moa: "H. pylori urease splits the labelled urea into 13CO2, which is measured in the exhaled breath [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Initial diagnosis and post-treatment monitoring of Helicobacter pylori infection [FDA]."], paed: ["Same, 3 years and older [FDA]."] },
  adult: [["Breath test", "Dissolve the 75 mg 13C-urea tablet and 4 g citric acid in 150–200 mL water; the patient drinks it. Given only by trained personnel with the BreathID device [FDA]."], ["Preparation", "Fast at least 1 hour. No antimicrobials, PPIs or bismuth in the 2 weeks before [FDA]."], ["On a PPI", "A negative result within 2 weeks of a PPI may be false — repeat 2 weeks after stopping the PPI; a positive result can be taken as positive [FDA]."]],
  paed: { tiers: ["3 years and older: same test [FDA]."], transition: "Same.", calcNote: "Fixed diagnostic dose — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Phenylketonuria: the kit contains phenylalanine — check before use [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: [NEP],
  ae: { common: ["Rare; mild gastrointestinal upset [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: ["Test result only; post-treatment test at least 4 weeks after eradication therapy [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "IDkit Hp One (13C-urea) for oral solution — FDA label (DailyMed)", I3_DM("8baab7a7-5d20-46ad-9c4a-762992ef6b51")], NEML_SRC],
  dose: { tagline: "Diagnostic H. pylori breath test — 75 mg 13C-urea drink after 1 h fast; no PPIs, antibiotics or bismuth for 2 weeks before.",
    adult: [{ ind: "H. pylori diagnosis / test of cure", text: "75 mg 13C-urea + 4 g citric acid in 150–200 mL water, once." }],
    child: [{ ind: "3 years and older", text: "Same test." }] }
});

FDB_M("fluticasone", {
  inn: "Fluticasone propionate (inhaled and nasal)", atc: "R03BA05 R01AD08", cls: "Corticosteroid — inhaled (asthma) and intranasal (allergic rhinitis)",
  linked: [],
  forms: ["Inhalation aerosol (HFA MDI) 44 mcg per actuation, 120 actuations; Flovent HFA also 110 and 220 mcg [FDA].", "Nasal spray 50 mcg per spray (OTC) [FDA].", "Skin cream/ointment — see fluticasone (topical) [FDA]."],
  moa: "Potent glucocorticoid-receptor agonist acting locally on airway and nasal inflammation [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — ritonavir and other strong inhibitors raise systemic exposure (Cushing syndrome, adrenal suppression reported) [FDA]."],
  ind: { adult: ["Maintenance treatment of asthma (inhaled) — not for acute bronchospasm [FDA].", "Hay fever and other upper-respiratory allergy symptoms (nasal) [FDA]."], paed: ["Asthma 4 years and older (inhaled) [FDA].", "Allergic rhinitis 4 years and older (nasal) [FDA]."] },
  adult: [["Asthma, 12 years and older, not on an ICS", "88 mcg (2 × 44 mcg) inhaled twice daily, about 12 h apart; starting dose depends on prior therapy and severity; maximum 880 mcg twice daily [FDA]."], ["Inhaler use", "Rinse mouth with water and spit after each use. Prime with 4 sprays before first use (1 spray if unused for 7 days or dropped). A valved holding chamber can be used [FDA]."], ["Allergic rhinitis (nasal), 12 years and older", "Week 1: 2 sprays in each nostril once daily; then 1–2 sprays each nostril once daily as needed; ask a doctor after 6 months of daily use [FDA]."]],
  paed: { tiers: ["Asthma 4–11 years: 88 mcg inhaled twice daily [FDA].", "Allergic rhinitis 4–11 years: 1 spray in each nostril once daily, adult-supervised; shortest time needed — talk to a doctor if needed over 2 months a year [FDA].", "Under 4 years: nasal spray not to be used [FDA]."], transition: "12 years: adult doses.", calcNote: "Fixed inhaled/nasal doses." },
  adj: { renal: NEP, hepatic: "Monitor for signs of increased exposure [FDA].", pregnancy: "Insufficient data; uncontrolled asthma itself harms mother and baby — keep asthma controlled [FDA].", other: "Strong CYP3A4 inhibitors (ritonavir, ketoconazole, itraconazole, clarithromycin): use not recommended [FDA]. When switching from oral steroids, taper slowly — risk of adrenal insufficiency [FDA]." },
  tox: { human: "Chronic overdose: hypercorticism [FDA].", animal: LD, manage: "Reduce the dose slowly [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Primary treatment of status asthmaticus or acute asthma needing intensive measures [FDA].", "Hypersensitivity to any ingredient [FDA].", "Nasal spray: under 4 years, to treat asthma, or after unhealed nasal injury or surgery [FDA]."],
  ae: { common: ["Inhaled: upper respiratory infection, throat irritation, hoarseness, oral candidiasis, headache [FDA] [UNVERIFIED-KNOWLEDGE].", "Nasal: stinging or sneezing just after use, nosebleeds [FDA]."], serious: ["Oropharyngeal candidiasis [FDA]", "Worsening of infections (TB, chickenpox, measles) [FDA]", "Adrenal suppression, hypercorticism [FDA]", "Reduced bone density; slower growth in children [FDA]", "Glaucoma, cataracts [FDA]", "Nasal septal perforation (whistling sound) [FDA]"] },
  monitor: ["Mouth for candidiasis [FDA].", "Growth in children [FDA].", "Eyes with long-term use; bone density [FDA]."],
  local: { neml: "Bhutan NEML 2025 lists fluticasone FUROATE nasal spray 27.5 mcg/actuation (replacing budesonide nasal spray), fluticasone propionate 125 mcg + salmeterol 25 mcg MDI, and fluticasone propionate 0.05% cream — single-ingredient propionate inhalers and nasal sprays are not listed [BT-NEML].", strengths: "Fluticasone + salmeterol 125/25 mcg MDI (120 doses) [BT-NEML].", stg: "Bhutan STG 2024 asthma/COPD: steroid inhaler as fluticasone + salmeterol [BT-STG]." },
  calc: [
    C("fluticasone", "inh", "Asthma 4 years+ — 88 mcg inhaled twice daily (start)", "INH", pop(48, null, null, null), "fixed", 88, 12, { dose: { value: 88, unit: "mcg", per: "dose" }, caps: { max_single: 880, unit: "mcg" }, formulations: [], rounding: "2 puffs of 44 mcg", flags: ["Rinse mouth after use", "12 y+: may go up to 880 mcg twice daily by prior therapy and severity", "4–11 y: 88 mcg twice daily", "Not for acute attacks"] }),
    C("fluticasone", "nasal", "Allergic rhinitis 12 years+ — 2 sprays (50 mcg) each nostril once daily", "Nasal", pop(144, null, null, null), "fixed", 200, 24, { dose: { value: 200, unit: "mcg", per: "dose" }, caps: { max_single: 200, unit: "mcg" }, formulations: [], rounding: "Sprays of 50 mcg", flags: ["Week 1: 2 sprays each nostril; then 1–2 sprays each nostril", "Ask a doctor after 6 months of daily use"] }),
    C("fluticasone", "nasalc", "Allergic rhinitis 4–11 years — 1 spray (50 mcg) each nostril once daily", "Nasal", pop(48, 144, null, null), "fixed", 100, 24, { dose: { value: 100, unit: "mcg", per: "dose" }, caps: { max_single: 100, unit: "mcg" }, formulations: [], rounding: "Sprays of 50 mcg", flags: ["Adult supervision; shortest time needed", "Talk to a doctor if needed over 2 months a year", "Under 4 years: do not use"] })
  ],
  sources: [["FDA", "Fluticasone propionate inhalation aerosol (HFA) — FDA label (DailyMed)", I3_DM("27a9b531-f0fd-44ee-b197-ac4b7d64b30c")], ["FDA", "FLOVENT HFA (fluticasone propionate) — FDA label (DailyMed)", I3_DM("74563f7b-8512-4b76-8c55-b88b9cd3206b")], ["FDA", "Children's FLONASE Allergy Relief (fluticasone propionate nasal spray, OTC) — FDA label (DailyMed)", I3_DM("3adff80f-fca7-4cc5-b106-0f68f71c85b0")], NEML_SRC, STG_SRC],
  dose: { tagline: "Inhaled steroid for asthma (88 mcg twice daily, max 880 mcg twice daily) and nasal spray for hay fever (2 sprays each nostril daily); rinse mouth after inhaling.",
    adult: [{ ind: "Asthma maintenance", text: "88 mcg twice daily; up to 880 mcg twice daily.", calc: ["inh"] }, { ind: "Allergic rhinitis", text: "2 sprays each nostril once daily, then 1–2.", calc: ["nasal"] }],
    child: [{ ind: "Asthma 4–11 years", text: "88 mcg twice daily.", calc: ["inh"] }, { ind: "Allergic rhinitis 4–11 years", text: "1 spray each nostril once daily.", calc: ["nasalc"] }] }
});

FDB_M("zuranolone", {
  inn: "Zuranolone", atc: "N06AX31", cls: "Neuroactive steroid GABA-A receptor positive modulator",
  linked: [],
  forms: ["Capsules 20, 25 and 30 mg [FDA]."],
  moa: "Positive allosteric modulator of GABA-A receptors [FDA].",
  pk: ["Take in the evening with fat-containing food (400–1,000 calories, 25–50% fat) [FDA].", "Terminal half-life about 20–25 hours; metabolised mainly by CYP3A4 [FDA]."],
  ind: { adult: ["Postpartum depression, 15 years and older [FDA]."], paed: ["Postpartum depression from 15 years [FDA]."] },
  adult: [["Postpartum depression", "50 mg once daily before bedtime for 14 days, alone or added to an oral antidepressant [FDA]."], ["CNS depressant effects", "Consider 40 mg once daily for the rest of the 14 days [FDA]."], ["Severe hepatic impairment (Child-Pugh C)", "30 mg once daily for 14 days [FDA]."], ["eGFR under 60 mL/min/1.73 m²", "30 mg once daily for 14 days [FDA]."], ["Strong CYP3A4 inhibitor", "30 mg once daily for 14 days; avoid CYP3A4 inducers [FDA]."], ["Missed dose", "Skip it; take the next at the usual bedtime; do not extend beyond the 14-day course [FDA]."]],
  paed: { tiers: ["15–17 years: same dose [FDA]."], transition: "Same.", calcNote: "14-day course only." },
  adj: { renal: "eGFR under 60: 30 mg [FDA].", hepatic: "Child-Pugh C: 30 mg; A/B: no change [FDA].", pregnancy: "May cause fetal harm — effective contraception during treatment and for 1 week after [FDA].", other: "Other CNS depressants (alcohol, opioids, benzodiazepines) add to sedation [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Excessive CNS depression — somnolence, altered consciousness (330 mg overdose resolved next day with IV fluids) [FDA].", animal: LD, manage: "No antidote; supportive; contact a poison centre [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Somnolence, dizziness, diarrhoea, fatigue, nasopharyngitis, urinary tract infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Impaired driving and CNS depression [FDA]", "Suicidal thoughts and behaviour [FDA]", "Embryo-fetal toxicity [FDA]"] },
  monitor: ["Sedation and confusion; no driving for 12 hours after each dose [FDA].", "Mood and suicidal thinking [FDA]."],
  local: notBT,
  calc: [
    C("zuranolone", "ppd", "Postpartum depression — 50 mg at bedtime for 14 days", "PO", pop(180, null, null, null), "fixed", 50, 24, { caps: { max_single: 50, unit: "mg" }, formulations: [{ form: "cap", strength: 25, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 59.99, action: "reduce_dose", factor: null, set_value: 30, note: "Label uses eGFR under 60 mL/min/1.73 m²: 30 mg" }], flags: ["14 days only, with fat-containing food", "CNS effects: 40 mg", "Child-Pugh C or strong CYP3A4 inhibitor: 30 mg", "No driving for 12 h after each dose", "Label kidney cut-off is eGFR (mL/min/1.73 m²), not CrCl"] })
  ],
  sources: [["FDA", "ZURZUVAE (zuranolone) capsules — FDA label (DailyMed SPL)", I3_DM("f18e53b0-d0bb-422d-8de7-ab64b7292b29")], NEML_SRC],
  dose: { tagline: "14-day bedtime course for postpartum depression — 50 mg with a fatty meal (30 mg in kidney/severe liver impairment or strong CYP3A4 inhibitors); no driving for 12 h.",
    boxedTitle: "Impaired ability to drive or engage in other potentially hazardous activities",
    boxed: "ZURZUVAE causes driving impairment due to central nervous system (CNS) depressant effects. Advise patients not to drive or engage in other potentially hazardous activities until at least 12 hours after ZURZUVAE administration for the duration of the 14-day treatment course. Inform patients that they may not be able to assess their own driving competence, or the degree of driving impairment caused by ZURZUVAE [FDA].",
    adult: [{ ind: "Postpartum depression", text: "50 mg at bedtime for 14 days.", calc: ["ppd"] }],
    child: [{ ind: "15–17 years", text: "Same as adults.", calc: ["ppd"] }] }
});
(function () { const B = {"itraconazole":{"IN":[["Itrancure","Avighna Medicare Pvt Ltd","Itrancure 200Mg Strip Of 10 Capsules"],["Candiforce","Mankind Pharmaceuticals Ltd","Candiforce 100Mg Strip Of 10 Capsules"]],"BD":[["Candifast","Everest Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/itrancure-200mg-strip-of-10-capsules-3024033","https://pharmeasy.in/online-medicine-order/candiforce-100mg-strip-of-10-capsules-3980870","https://medex.com.bd/brands/39149/candifast-50-mg-capsule"]},"ivabradine":{"IN":[["Ivapride","Knoll Healthcare Pvt Ltd","Ivapride 5Mg Strip Of 10 Tablets"],["Ivaford","Leeford Healthcare Ltd","Ivaford 5Mg Strip Of 15 Tablets"]],"BD":[["Corabid","UniMed UniHealth Pharmaceuticals Ltd","5 mg"],["Ivanor","Square Pharmaceuticals PLC","7.5 mg"],["Ivaprex","Incepta Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/ivapride-5mg-strip-of-10-tablets-2933574","https://pharmeasy.in/online-medicine-order/ivaford-5mg-strip-of-15-tablets-4010284","https://medex.com.bd/brands/1274/corabid-5-mg-tablet","https://medex.com.bd/brands/1276/ivanor-75-mg-tablet","https://medex.com.bd/brands/1278/ivaprex-5-mg-tablet"]},"ivacaftor":{"IN":[],"BD":[["Bexdeco","Beximco Pharmaceuticals PLC","150 mg"]],"src":["https://medex.com.bd/brands/39909/bexdeco-150-mg-tablet"]},"ivermectin":{"IN":[["Ivecop","A.menarini India","Ivecop 12Mg Strip Of 1 Tablet"],["Evimectin","Leeford Healthcare Ltd","Evimectin Dt 12Mg Strip Of 4 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/ivecop-12mg-tablet-51383","https://pharmeasy.in/online-medicine-order/evimectin-dt-12mg-strip-of-4-tablets-3018902"]},"ivosidenib":{"IN":[["Tibsovo","Servier India Private Limited (formerly Known As Serdia Pharmaceuticals (india) Pvt Ltd)","Tibsovo 200Mg Bottle Of 60 Tablets"]],"BD":[["Ivosenib","Everest Pharmaceuticals Ltd","250 mg"]],"src":["https://pharmeasy.in/online-medicine-order/tibsovo-200mg-bottle-of-60-tablets-4819589","https://medex.com.bd/brands/38128/ivosenib-250-mg-tablet"]},"zonisamide":{"IN":[["Zonegran","Eisai Pharmaceuticals","Zonegran 100Mg Strip Of 10 Tablets"],["Zonisep","Sun Pharma","Zonisep 100Mg Strip Of 10 Capsules"],["Zonimid","Intas Pharmaceuticals Ltd","Zonimid 100Mg Strip Of 10 Capsules"]],"BD":[["Xonimide ODT","Beacon Pharmaceuticals PLC","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zonegran-100mg-strip-of-10-tablets-27727","https://pharmeasy.in/online-medicine-order/zonisep-100mg-capsule-25349","https://pharmeasy.in/online-medicine-order/zonimid-100mg-capsule-13948","https://medex.com.bd/brands/27289/xonimide-odt-50-mg-dispersible-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
})();
