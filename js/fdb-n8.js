/* Clinical Disease Guide — Drug monograph database, block N, batch N-8 (26 Nov 2026).
   Neomycin … nusinersen (N-1 to N-6 were Bhutan NEML batches). Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js.
   Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js. Skipped: nitroprusside (already js/fdb-n6.js "sodium-nitroprusside").
   Labels added: nicotine patch beside the gum pack; norethisterone acetate 5 mg beside the 0.35 mg POP pack; Tasigna for the nilotinib child dose. */
(function () { // N-8 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const N8_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ALL = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";

FDB_M("neomycin", {
  inn: "Neomycin (oral)", atc: "A07AA01", cls: "Aminoglycoside (oral, poorly absorbed)",
  linked: [],
  forms: ["Tablets 500 mg neomycin sulfate (= 350 mg neomycin base) [FDA].", "Neomycin is also in eye, ear and skin combinations — separate monographs [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds the 30S ribosome; orally it acts mainly on gut bacteria [UNVERIFIED-KNOWLEDGE].",
  pk: ["About 3% absorbed from a normal gut — more with ulceration or inflammation; absorbed drug is excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Suppression of bowel flora before bowel surgery, with erythromycin [FDA].", "Adjunct in hepatic coma (portal-systemic encephalopathy) [FDA]."], paed: ["Not established by label [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Bowel preparation (surgery at 8 am)", "Day before surgery: neomycin 1 g + erythromycin base 1 g orally at 1 pm, 2 pm and 11 pm, after mechanical bowel prep [FDA]."], ["Hepatic coma", "4–12 g/day in divided doses for 5–6 days, with protein withdrawn and then reintroduced [FDA]."], ["Chronic hepatic insufficiency", "Up to 4 g/day if safer drugs cannot be used [FDA]."], ["Duration", "No longer than 2 weeks [FDA]."]],
  paed: { tiers: ["Not established by label [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dosing.", calcNote: "Adult bowel-prep dose only." },
  adj: { renal: "Nephrotoxic — avoid or reduce with kidney impairment; monitor function [FDA].", hepatic: NEP, pregnancy: "Aminoglycosides can cause fetal ototoxicity [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid with other nephrotoxic or ototoxic drugs and potent diuretics [FDA]." },
  tox: { human: "Ototoxicity, nephrotoxicity, neuromuscular blockade [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; supportive; haemodialysis removes neomycin [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Intestinal obstruction [FDA]", "Hypersensitivity to neomycin or other aminoglycosides [FDA]", "Inflammatory or ulcerative GI disease (increased absorption) [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Nausea, vomiting, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Irreversible deafness [FDA]", "Nephrotoxicity [FDA]", "Neuromuscular blockade and respiratory paralysis [FDA]", "Malabsorption syndrome, C. difficile colitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Hearing (audiometry), urinalysis and kidney function on longer use [FDA]."],
  local: { neml: "Oral neomycin is not on the Bhutan NEML 2025; neomycin is listed only in eye/skin combinations [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "neomycin", indication_id: "bowelprep", label: "Bowel preparation — 1 g × 3 doses the day before surgery", route: "PO", population: ADULT, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 500, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["At 1 pm, 2 pm and 11 pm the day before an 8 am operation", "With erythromycin base 1 g each time"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Neomycin sulfate tablets — FDA label (DailyMed)", N8_DM("0aa6947b-4739-4b00-be93-7303a5fc687d")], NEML_SRC],
  dose: { tagline: "Oral aminoglycoside for bowel prep and hepatic coma — absorbed enough to cause deafness and kidney injury.",
    boxedTitle: "Warnings",
    boxed: "SYSTEMIC ABSORPTION OF NEOMYCIN OCCURS FOLLOWING ORAL ADMINISTRATION AND TOXIC REACTIONS MAY OCCUR. Patients treated with neomycin should be under close clinical observation because of the potential toxicity associated with their use. NEUROTOXICITY (INCLUDING OTOTOXICITY) AND NEPHROTOXICITY FOLLOWING THE ORAL USE OF NEOMYCIN SULFATE HAVE BEEN REPORTED, EVEN WHEN USED IN RECOMMENDED DOSES. THE POTENTIAL FOR NEPHROTOXICITY, PERMANENT BILATERAL AUDITORY OTOTOXICITY AND SOMETIMES VESTIBULAR TOXICITY IS PRESENT IN PATIENTS WITH NORMAL RENAL FUNCTION WHEN TREATED WITH HIGHER DOSES OF NEOMYCIN AND/OR FOR LONGER PERIODS THAN RECOMMENDED. Serial, vestibular and audiometric tests, as well as tests of renal function, should be performed (especially in high-risk patients). THE RISK OF NEPHROTOXICITY AND OTOTOXICITY IS GREATER IN PATIENTS WITH IMPAIRED RENAL FUNCTION. Ototoxicity is often delayed in onset and patients developing cochlear damage will not have symptoms during therapy to warn them of developing eighth nerve destruction and total or partial deafness may occur long after neomycin has been discontinued. Neuromuscular blockage and respiratory paralysis have been reported following the oral use of neomycin. The possibility of the occurrence of neuromuscular blockage and respiratory paralysis should be considered if neomycin is administered, especially to patients receiving anesthetics, neuromuscular blocking agents such as tubocurarine, succinylcholine, decamethonium, or in patients receiving massive transfusions of citrate anticoagulated blood. If blockage occurs, calcium salts may reverse these phenomena but mechanical respiratory assistance may be necessary. Concurrent and/or sequential systemic, oral or topical use of other aminoglycosides, including paromomycin and other potentially nephrotoxic and/or neurotoxic drugs such as bacitracin, cisplatin, vancomycin, amphotericin B, polymyxin B, colistin and viomycin, should be avoided because the toxicity may be additive. Other factors which increase the risk of toxicity are advanced age and dehydration. The concurrent use of neomycin with potent diuretics such as ethacrynic acid or furosemide should be avoided, since certain diuretics by themselves may cause ototoxicity. In addition, when administered intravenously, diuretics may enhance neomycin toxicity by altering the antibiotic concentration in serum and tissue. [FDA].",
    adult: [{ ind: "Bowel preparation", text: "1 g with erythromycin 1 g at 1 pm, 2 pm, 11 pm before surgery.", calc: ["bowelprep"] }, { ind: "Hepatic coma", text: "4–12 g/day divided, 5–6 days." }],
    child: [{ ind: "Children", text: "Not established by label." }] }
});

FDB_M("nepafenac", {
  inn: "Nepafenac", atc: "S01BC10", cls: "Ophthalmic NSAID (prodrug)",
  linked: [],
  forms: ["Eye suspension 0.3% (Ilevro), 0.1% (Nevanac) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Converted in the eye to amfenac, a COX inhibitor [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Pain and inflammation after cataract surgery [FDA]."], paed: ["10 years and over [FDA]."] },
  adult: [["0.3%", "1 drop once daily from the day before surgery, on the day of surgery and for 2 weeks after; plus 1 extra drop 30–120 minutes before surgery [FDA]."], ["Other drops", "Space at least 5 minutes apart [FDA]."], ["0.1% (Nevanac)", "1 drop three times daily on the same schedule [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["10 years and over: same [FDA].", "Under 10 years: not established [FDA]."], transition: "Same.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Avoid late in pregnancy (NSAID class) [UNVERIFIED-KNOWLEDGE].", other: "Delayed healing with topical steroids [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Rinse the eye [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to ingredients or other NSAIDs [FDA]."],
  ae: { common: ["Capsular opacity, raised IOP, foreign-body sensation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Corneal epithelial breakdown, keratitis, corneal melt with prolonged use [FDA] [UNVERIFIED-KNOWLEDGE]", "Increased bleeding of ocular tissue [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cornea at follow-up visits [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Ilevro (nepafenac) 0.3% eye suspension — FDA label (DailyMed)", N8_DM("10f411d3-a81e-074a-e063-6294a90ab547")], NEML_SRC],
  dose: { tagline: "Eye NSAID for cataract surgery — 0.3% once daily from the day before to 2 weeks after.",
    adult: [{ ind: "Cataract surgery", text: "0.3%: 1 drop daily from the day before to 2 weeks after, plus 1 drop before surgery." }],
    child: [{ ind: "10 years and over", text: "Same." }] }
});

FDB_M("nerandomilast", {
  inn: "Nerandomilast", atc: "L04AA61", cls: "Phosphodiesterase-4B (PDE4) inhibitor",
  linked: [],
  forms: ["Tablets 9, 18 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Preferential PDE4B inhibitor with anti-fibrotic and anti-inflammatory effects [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A metabolism [FDA]."],
  ind: { adult: ["Idiopathic pulmonary fibrosis [FDA].", "Progressive pulmonary fibrosis [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["IPF / PPF", "18 mg twice daily about 12 hours apart, with or without food; swallow whole or disperse in water [FDA]."], ["Intolerance", "Reduce to 9 mg twice daily — except with moderate CYP3A inducers or pirfenidone, where 18 mg twice daily is kept [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Dose changes with CYP3A inhibitors (see label) [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, COVID-19/respiratory infections, depression, weight loss, decreased appetite, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Psychiatric events including depression and suicidality (PDE4 class) [FDA] [UNVERIFIED-KNOWLEDGE]", "Weight loss [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight; mood and suicidal thinking [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nerandomilast", indication_id: "ipf", label: "IPF / progressive pulmonary fibrosis — 18 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 18, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 18, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["9 mg twice daily if not tolerated (not with pirfenidone)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Jascayd (nerandomilast) tablets — FDA label (DailyMed)", N8_DM("fa1b14c6-957f-d326-5099-911bfe33e391")], NEML_SRC],
  dose: { tagline: "Oral PDE4B inhibitor for pulmonary fibrosis — 18 mg twice daily.",
    adult: [{ ind: "IPF / progressive pulmonary fibrosis", text: "18 mg twice daily (9 mg if not tolerated).", calc: ["ipf"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("neratinib", {
  inn: "Neratinib", atc: "L01EH02", cls: "Irreversible pan-HER kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 40 mg [FDA]."],
  moa: "Irreversibly inhibits HER1, HER2 and HER4 tyrosine kinases [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate; avoid PPIs (reduce absorption) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Extended adjuvant therapy of early HER2-positive breast cancer after trastuzumab-based therapy [FDA].", "With capecitabine, advanced/metastatic HER2-positive breast cancer after 2 or more anti-HER2 regimens [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Extended adjuvant", "240 mg (6 tablets) once daily with food, continuously for up to 1 year [FDA]."], ["Metastatic", "240 mg once daily days 1–21 with capecitabine 750 mg/m² twice daily days 1–14, 21-day cycles [FDA]."], ["Diarrhoea prophylaxis", "Loperamide from the first dose for 56 days (unless using the 2-week dose escalation) [FDA]."], ["Severe hepatic impairment", "Start 80 mg once daily [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: "Child-Pugh C: start 80 mg [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid PPIs; separate H2 blockers and antacids [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Diarrhoea, nausea, vomiting, dehydration [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea (very common, can be severe), nausea, abdominal pain, fatigue, vomiting, rash, stomatitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe diarrhoea with dehydration [FDA]", "Hepatotoxicity [FDA]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bowel frequency; liver tests monthly for 3 months then every 3 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "neratinib", indication_id: "std", label: "HER2+ breast cancer — 240 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 240, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 40, unit: "mg", whole: true }], rounding: "6 tablets", renal: [], flags: ["With food; loperamide prophylaxis", "Severe hepatic impairment: 80 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nerlynx (neratinib) tablets — FDA label (DailyMed)", N8_DM("d1e41dcf-e82a-47c2-a0ad-6c6eef621834")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Pan-HER inhibitor for HER2+ breast cancer — 240 mg daily with loperamide prophylaxis.",
    cautionTitle: "Use with care",
    caution: "Diarrhoea is near-universal and can be severe — start loperamide with the first dose (or use the dose-escalation schedule). Check liver tests [FDA].",
    adult: [{ ind: "HER2+ breast cancer", text: "240 mg once daily with food.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("netarsudil", {
  inn: "Netarsudil", atc: "S01EX05", cls: "Rho kinase inhibitor (ophthalmic)",
  linked: [],
  forms: ["Eye drops 0.02% [FDA]."],
  moa: "Increases trabecular outflow and lowers episcleral venous pressure [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Raised intraocular pressure in open-angle glaucoma or ocular hypertension [FDA]."], paed: ["Not established under 18 years [FDA]."] },
  adult: [["Glaucoma / ocular hypertension", "1 drop in the affected eye(s) once daily in the evening; twice daily is not well tolerated [FDA]."], ["Other drops", "At least 5 minutes apart [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Remove contact lenses; reinsert after 15 minutes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Rinse the eye [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Conjunctival hyperaemia (about 50%), corneal verticillata, instillation-site pain, conjunctival haemorrhage [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bacterial keratitis from contaminated bottles [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Intraocular pressure [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Rhopressa (netarsudil) 0.02% — FDA label (DailyMed)", N8_DM("7d4f0e3a-5b86-4c43-982a-813b22ae7e22")], NEML_SRC],
  dose: { tagline: "Rho kinase inhibitor eye drop for glaucoma — 1 drop once daily in the evening.",
    adult: [{ ind: "Open-angle glaucoma / ocular hypertension", text: "1 drop once daily in the evening." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("nicardipine", {
  inn: "Nicardipine", atc: "C08CA04", cls: "Dihydropyridine calcium channel blocker (IV)",
  linked: [],
  forms: ["Premixed infusion 20 mg/200 mL (0.1 mg/mL) and 40 mg/200 mL (0.2 mg/mL) [FDA].", "Capsules 20, 30 mg (oral, outside US label used here) [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks L-type calcium channels in vascular smooth muscle — arterial vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism; onset within minutes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Short-term treatment of hypertension when oral therapy is not feasible [FDA]."], paed: ["Not established by label; used in paediatric hypertensive emergencies [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Not on oral nicardipine", "Start 5 mg/h; increase by 2.5 mg/h every 5–15 minutes to a maximum of 15 mg/h [FDA]."], ["Rates", "0.1 mg/mL: 5 mg/h = 50 mL/h; 0.2 mg/mL: 5 mg/h = 25 mL/h [FDA]."], ["Replacing oral", "20 mg every 8 h ≈ 0.5 mg/h; 30 mg ≈ 1.2 mg/h; 40 mg ≈ 2.2 mg/h [FDA]."], ["Hypotension or tachycardia", "Stop; restart at 3–5 mg/h when stable [FDA]."]],
  paed: { tiers: ["Not established by label [FDA].", "Practice: 0.5–3 microgram/kg/min [UNVERIFIED-KNOWLEDGE]."], transition: "Adult rates.", calcNote: "Infusion in mg/h — not calculated here." },
  adj: { renal: "Titrate carefully [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Consider lower doses; monitor closely [FDA].", pregnancy: NEP, other: "Change the peripheral site every 12 hours to reduce phlebitis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Marked hypotension, bradycardia, drowsiness, confusion [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop infusion; fluids, vasopressors; IV calcium [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Advanced aortic stenosis [FDA]."],
  ae: { common: ["Headache, hypotension, tachycardia, nausea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension [FDA]", "Reflex tachycardia and angina [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion-site phlebitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure and heart rate continuously during titration [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Cardene IV (nicardipine) premixed injection — FDA label (DailyMed)", N8_DM("5499cfac-9147-4d5d-a8cb-f8d64f1481af")], NEML_SRC],
  dose: { tagline: "IV calcium channel blocker for acute hypertension — 5 mg/h, up 2.5 mg/h every 5–15 min to 15 mg/h.",
    cautionTitle: "Use with care",
    caution: "Titrate with continuous blood-pressure monitoring; stop for hypotension or tachycardia. Contraindicated in advanced aortic stenosis [FDA].",
    adult: [{ ind: "Hypertension (IV)", text: "5 mg/h; +2.5 mg/h every 5–15 min; max 15 mg/h." }],
    child: [{ ind: "Children", text: "Not established by label." }] }
});

FDB_M("nicotine", {
  inn: "Nicotine (replacement therapy)", atc: "N07BA01", cls: "Nicotinic agonist — smoking cessation aid",
  linked: [],
  forms: ["Oral chewing gum and lozenges 2 mg, 4 mg [FDA].", "Patches 21, 14, 7 mg/24 h [FDA].", "Inhaler and nasal spray [UNVERIFIED-KNOWLEDGE]."],
  moa: "Replaces nicotine from tobacco to reduce withdrawal and craving [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Reduces withdrawal symptoms and craving when stopping smoking [FDA]."], paed: ["Under 18: ask a doctor [FDA]."] },
  adult: [["Gum", "First cigarette more than 30 min after waking: 2 mg; within 30 min: 4 mg. Weeks 1–6 one piece every 1–2 h (at least 9 a day); weeks 7–9 every 2–4 h; weeks 10–12 every 4–8 h [FDA]."], ["Gum technique", "Chew until it tingles, then park between cheek and gum; repeat for about 30 minutes; no food or drink 15 min before or during [FDA]."], ["Patch", "More than 10 cigarettes/day: 21 mg (step 1) for 6 weeks, then 14 mg for 2 weeks, then 7 mg for 2 weeks; 10 or fewer: start 14 mg for 6 weeks then 7 mg for 2 weeks — one new patch every 24 hours [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Patch site", "Clean, dry, hairless skin; change site daily [FDA]."]],
  paed: { tiers: ["Under 18: only with medical advice [FDA]."], transition: "Adult schedules.", calcNote: "Product schedules — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Ask a health professional; still safer than smoking [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Ask a doctor first with recent heart attack, irregular heartbeat, high blood pressure not controlled, stomach ulcer or diabetes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, dizziness, weakness, rapid heartbeat — keep away from children and pets [FDA].", animal: LD, manage: "Remove the product; supportive; poison centre [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Gum: hiccups, jaw ache, mouth irritation, indigestion [FDA] [UNVERIFIED-KNOWLEDGE].", "Patch: skin redness, vivid dreams or sleep disturbance [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Palpitations or irregular heartbeat — stop and seek advice [FDA]", "Nicotine poisoning in children who chew or swallow products [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Progress with quitting; side effects [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Nicorette (nicotine polacrilex) gum — FDA OTC label (DailyMed)", N8_DM("01db011d-924c-40e4-bd5d-44eb267b8de1")], ["FDA", "Habitrol (nicotine transdermal system) — FDA OTC label (DailyMed)", N8_DM("051be7ae-6504-c2d8-7424-2e328e4fcfc2")], NEML_SRC],
  dose: { tagline: "Nicotine replacement for quitting smoking — gum 2 or 4 mg by first-cigarette time; patch 21 → 14 → 7 mg.",
    adult: [{ ind: "Gum", text: "2 mg (or 4 mg if first cigarette within 30 min of waking), 1 piece every 1–2 h for 6 weeks, then taper." }, { ind: "Patch", text: "21 mg/24 h for 6 weeks, then 14 mg, then 7 mg." }],
    child: [{ ind: "Under 18", text: "Only on medical advice." }] }
});

FDB_M("nicotinic-acid", {
  inn: "Nicotinic acid (niacin)", atc: "C10AD02", cls: "Lipid-modifying B vitamin (vitamin B3)",
  linked: [],
  forms: ["Extended-release tablets 500, 750, 1,000 mg [FDA].", "Immediate-release forms are not interchangeable mg for mg with extended-release [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Reduces hepatic VLDL synthesis and lipolysis; raises HDL [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Adjunct to diet for primary hyperlipidaemia and mixed dyslipidaemia, and very high triglycerides, when other measures are inadequate [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start (ER)", "500 mg at bedtime after a low-fat snack for weeks 1–4; 1,000 mg weeks 5–8 [FDA]."], ["Titration", "Increase by no more than 500 mg every 4 weeks; maintenance 1,000–2,000 mg once daily; over 2,000 mg not recommended [FDA]."], ["Flushing", "Aspirin about 30 min before may reduce flushing; avoid hot drinks and alcohol near the dose [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Restart", "After a break, restart at the starting dose [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Contraindicated in active liver disease [FDA].", pregnancy: NEP, other: "Do not substitute ER for IR at the same dose — severe hepatotoxicity reported [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Flushing, GI upset, hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active liver disease or unexplained persistent raised transaminases [FDA]", "Active peptic ulcer disease [FDA]", "Arterial bleeding [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Flushing, diarrhoea, nausea, vomiting, itch, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA]", "Myopathy with statins [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperglycaemia, gout (raised uric acid) [FDA] [UNVERIFIED-KNOWLEDGE]", "Low platelets, raised PT [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests before, every 6–12 weeks for the first year, then periodically; glucose; uric acid; lipids [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nicotinic-acid", indication_id: "start", label: "Dyslipidaemia (ER) — start 500 mg at bedtime", route: "PO", population: ADULT, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_daily: 2000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "ER tablet", strength: 500, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Increase by at most 500 mg every 4 weeks", "Max 2,000 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Niacin extended-release tablets — FDA label (DailyMed)", N8_DM("6e604319-e164-4056-ab80-b78b98c519c7")], NEML_SRC],
  dose: { tagline: "Extended-release niacin for dyslipidaemia — 500 mg at bedtime, slowly up to 1–2 g.",
    adult: [{ ind: "Dyslipidaemia", text: "500 mg at bedtime; +500 mg every 4 weeks; usual 1,000–2,000 mg.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NIF_LT41 = { min_age_months: null, max_age_months: 216, min_weight_kg: 2.5, max_weight_kg: 41 };
const NIF_GE41 = { min_age_months: null, max_age_months: 216, min_weight_kg: 41, max_weight_kg: null };
FDB_M("nifurtimox", {
  inn: "Nifurtimox", atc: "P01CC01", cls: "Nitrofuran antiprotozoal",
  linked: [],
  forms: ["Scored tablets 30 mg and 120 mg [FDA]."],
  moa: "Generates reactive oxygen species toxic to trypanosomes [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take with food — exposure increases [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Not labelled for adults in the US; used for Chagas disease in adults (and with eflornithine for sleeping sickness) [UNVERIFIED-KNOWLEDGE]."], paed: ["Chagas disease (T. cruzi), birth to under 18 years and 2.5 kg and over [FDA]."] },
  adult: [["Adults", "Not in the US label; WHO lists nifurtimox for Chagas disease and, with eflornithine, for T. b. gambiense sleeping sickness [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Under 41 kg: 10–20 mg/kg/day in 3 doses with food for 60 days [FDA].", "41 kg and over: 8–10 mg/kg/day in 3 doses with food for 60 days [FDA].", "Tablets can be halved by hand or made into a slurry [FDA]."], transition: "8–10 mg/kg/day from 41 kg.", calcNote: "mg/kg/day in 3 doses by weight band." },
  adj: { renal: "Caution in severe impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus — pregnancy test first; contraception [FDA].", other: "No alcohol during treatment [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to nifurtimox or excipients [FDA]", "Alcohol use during treatment [FDA]"],
  ae: { common: ["Vomiting, abdominal pain, headache, decreased appetite, nausea, fever, rash, weight loss [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Psychiatric reactions and seizures in patients with brain injury or psychiatric illness [FDA] [UNVERIFIED-KNOWLEDGE]", "Peripheral neuropathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Genotoxicity / embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"] },
  monitor: ["Weight every 14 days (adjust the dose); neurological symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nifurtimox", indication_id: "lt41", label: "Chagas disease, under 41 kg — 10–20 mg/kg/day in 3 doses", route: "PO", population: NIF_LT41, basis: "mg_per_kg", dose: { value: 10, value_max: 20, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 30, unit: "mg" }], rounding: "half tablets (15 mg / 60 mg)", renal: [], flags: ["60 days, with food", "Re-weigh every 2 weeks"], sources: ["FDA"] },
    { drug: "nifurtimox", indication_id: "ge41", label: "Chagas disease, 41 kg and over — 8–10 mg/kg/day in 3 doses", route: "PO", population: NIF_GE41, basis: "mg_per_kg", dose: { value: 8, value_max: 10, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 120, unit: "mg" }], rounding: "half tablets (60 mg)", renal: [], flags: ["60 days, with food"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Lampit (nifurtimox) tablets — FDA label (DailyMed)", N8_DM("90d09714-a8b1-4696-8ada-f99dc54d0721")], NEML_SRC],
  dose: { tagline: "Chagas disease in children — 10–20 mg/kg/day (8–10 if 41 kg+) in 3 doses for 60 days.",
    adult: [{ ind: "Adults", text: "Not in the US label (WHO-listed use)." }],
    child: [{ ind: "Chagas, under 41 kg", text: "10–20 mg/kg/day in 3 doses for 60 days.", calc: ["lt41"] }, { ind: "Chagas, 41 kg+", text: "8–10 mg/kg/day in 3 doses for 60 days.", calc: ["ge41"] }] }
});

const NILO_CH = { min_age_months: 12, max_age_months: 216, min_weight_kg: null, max_weight_kg: null };
FDB_M("nilotinib", {
  inn: "Nilotinib", atc: "L01EA03", cls: "BCR-ABL tyrosine kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 50, 150, 200 mg (Tasigna, take on an empty stomach); other nilotinib products have different food rules and doses [FDA]."],
  moa: "Inhibits BCR-ABL kinase, including many imatinib-resistant mutants [UNVERIFIED-KNOWLEDGE].",
  pk: ["Food raises exposure (Tasigna-type capsules); CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Newly diagnosed Ph+ CML in chronic phase [FDA].", "Chronic or accelerated phase Ph+ CML resistant or intolerant to prior therapy including imatinib [FDA]."], paed: ["Ph+ CML (newly diagnosed or resistant), 1 year and over [FDA]."] },
  adult: [["Newly diagnosed CML-CP", "300 mg twice daily about 12 hours apart [FDA]."], ["Resistant / intolerant CP or AP", "400 mg twice daily [FDA]."], ["Food (capsules of the Tasigna type)", "No food 2 hours before and 1 hour after each dose [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Stopping", "May be considered after 3 years with sustained MR4.5, using an authorised test [FDA]."]],
  paed: { tiers: ["1 year and over: 230 mg/m² twice daily, rounded to the nearest 50 mg, maximum 400 mg per dose [FDA]."], transition: "Adult dose in adults.", calcNote: "mg/m², rounded to 50 mg, max 400 mg." },
  adj: { renal: NEP, hepatic: "Reduce the starting dose in baseline hepatic impairment [FDA].", pregnancy: "Can harm the fetus [FDA].", other: "Avoid strong CYP3A4 inhibitors and QT-prolonging drugs [FDA]." },
  tox: { human: "Neutropenia, vomiting, drowsiness [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; ECG monitoring [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypokalaemia [FDA]", "Hypomagnesaemia [FDA]", "Long QT syndrome [FDA]"],
  ae: { common: ["Rash, itch, headache, nausea, fatigue, myalgia, raised lipase and bilirubin [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation and sudden death [FDA]", "Myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE]", "Cardiac and arterial vascular occlusive events [FDA] [UNVERIFIED-KNOWLEDGE]", "Pancreatitis, hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Growth retardation in children [FDA]", "Embryo-fetal toxicity [FDA]"] },
  monitor: ["ECG at baseline, 7 days and after dose changes; potassium, magnesium; blood counts; lipase; liver tests; growth in children [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nilotinib", indication_id: "new", label: "Newly diagnosed CML-CP — 300 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 150, unit: "mg", whole: true }], rounding: "whole capsules", renal: [], flags: ["Empty stomach (Tasigna-type capsules)", "ECG and electrolytes"], sources: ["FDA"] },
    { drug: "nilotinib", indication_id: "resist", label: "Resistant / intolerant CML — 400 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 200, unit: "mg", whole: true }], rounding: "whole capsules", renal: [], flags: ["Empty stomach (Tasigna-type capsules)"], sources: ["FDA"] },
    { drug: "nilotinib", indication_id: "child", label: "Child CML, 1 year+ — 230 mg/m² twice daily (nearest 50 mg, max 400)", route: "PO", population: NILO_CH, basis: "mg_per_m2", dose: { value: 230, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: { max_single: 400, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "capsule", strength: 50, unit: "mg", whole: true }], rounding: "nearest 50 mg", round_to: 50, renal: [], flags: ["Monitor growth"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nilotinib capsules (Cipla) — FDA label (DailyMed)", N8_DM("e27c3e09-bc4f-4f01-be05-1c43ac72285d")], ["FDA", "Tasigna (nilotinib) capsules — FDA label (DailyMed)", N8_DM("6093952a-5248-45cb-ad17-33716a411146")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Second-generation TKI for Ph+ CML — 300 or 400 mg twice daily; QT risk.",
    boxedTitle: "QT prolongation and sudden deaths",
    boxed: "Nilotinib prolongs the QT interval. Prior to Nilotinib Capsules administration and periodically, monitor for hypokalemia or hypomagnesemia and correct deficiencies. Obtain ECGs to monitor the QTc at baseline, seven days after initiation, and periodically thereafter, and following any dose adjustments. Sudden deaths have been reported in patients receiving nilotinib. Do not administer Nilotinib Capsules to patients with hypokalemia, hypomagnesemia, or long QT syndrome. Avoid use of concomitant drugs known to prolong the QT interval and strong CYP3A4 inhibitors. Avoid food 2 hours before and 1 hour after taking the dose [FDA].",
    adult: [{ ind: "Newly diagnosed CML-CP", text: "300 mg twice daily.", calc: ["new"] }, { ind: "Resistant / intolerant CML", text: "400 mg twice daily.", calc: ["resist"] }],
    child: [{ ind: "CML, 1 year and over", text: "230 mg/m² twice daily, nearest 50 mg, max 400 mg.", calc: ["child"] }] }
});

FDB_M("nintedanib", {
  inn: "Nintedanib", atc: "L01EX09", cls: "Tyrosine kinase inhibitor (VEGFR, FGFR, PDGFR) — antifibrotic",
  linked: [],
  forms: ["Capsules 100, 150 mg [FDA]."],
  moa: "Blocks receptor tyrosine kinases that drive fibroblast proliferation [UNVERIFIED-KNOWLEDGE].",
  pk: ["P-gp substrate; take with food [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Idiopathic pulmonary fibrosis [FDA].", "Progressive fibrosing ILDs [FDA].", "Systemic sclerosis-associated ILD [FDA]."], paed: ["Not established for fibrosing ILD [FDA]."] },
  adult: [["IPF / ILD", "150 mg twice daily about 12 hours apart with food; swallow whole [FDA]."], ["Mild hepatic impairment (Child-Pugh A)", "100 mg twice daily [FDA]."], ["Adverse reactions", "Reduce to 100 mg twice daily, interrupt, or stop [FDA]."], ["Before starting", "Liver tests; pregnancy test [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: "Child-Pugh A: 100 mg twice daily; B–C: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus — contraception [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Bleeding risk with anticoagulants [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea (about 60%), nausea, abdominal pain, vomiting, raised liver enzymes, decreased appetite, weight loss [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA]", "Severe diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Arterial thromboembolic events [FDA] [UNVERIFIED-KNOWLEDGE]", "Bleeding [FDA] [UNVERIFIED-KNOWLEDGE]", "GI perforation [FDA] [UNVERIFIED-KNOWLEDGE]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests monthly for 3 months, then every 3 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nintedanib", indication_id: "ipf", label: "IPF / fibrosing ILD — 150 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 150, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["With food", "Child-Pugh A: 100 mg twice daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ofev (nintedanib) capsules — FDA label (DailyMed)", N8_DM("da1c9f37-779e-4682-816f-93d0faa4cfc9")], NEML_SRC],
  dose: { tagline: "Antifibrotic kinase inhibitor for IPF and progressive ILD — 150 mg twice daily with food.",
    adult: [{ ind: "IPF / progressive fibrosing ILD / SSc-ILD", text: "150 mg twice daily with food.", calc: ["ipf"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NIPO = { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
FDB_M("nipocalimab", {
  inn: "Nipocalimab", atc: "L04AL03", cls: "Neonatal Fc receptor (FcRn) blocker",
  linked: [],
  forms: ["IV vials 300 mg/1.62 mL and 1,200 mg/6.5 mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks FcRn, increasing IgG breakdown and lowering pathogenic autoantibodies [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Generalised myasthenia gravis, anti-AChR or anti-MuSK antibody positive [FDA].", "Warm autoimmune haemolytic anaemia (per label dosing section) [FDA]."], paed: ["gMG, 12 years and over [FDA]."] },
  adult: [["gMG", "30 mg/kg IV once over at least 30 minutes; 2 weeks later 15 mg/kg over at least 15 minutes, then every 2 weeks [FDA]."], ["wAIHA", "30 mg/kg IV, then 30 mg/kg every 4 weeks [FDA]."], ["Administration", "Dilute in 0.9% saline; give through a 0.2 micron filter [FDA]."], ["Before starting", "Bring vaccines up to date [FDA]."]],
  paed: { tiers: ["gMG, 12 years and over: same mg/kg [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg, 12 years and over." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Avoid live vaccines during treatment [FDA] [UNVERIFIED-KNOWLEDGE]. Lowers IgG — can reduce levels of IgG-based drugs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of serious hypersensitivity (anaphylaxis, angioedema) to nipocalimab or excipients [FDA]."],
  ae: { common: ["Respiratory tract infections, peripheral oedema, muscle spasms [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infections [FDA]", "Hypersensitivity including anaphylaxis [FDA]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Signs of infection; infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nipocalimab", indication_id: "load", label: "gMG / wAIHA — 30 mg/kg IV first dose", route: "IV", population: NIPO, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per vial", renal: [], flags: ["Over at least 30 min, 0.2 micron filter"], sources: ["FDA"] },
    { drug: "nipocalimab", indication_id: "gmg_maint", label: "gMG maintenance — 15 mg/kg IV every 2 weeks", route: "IV", population: NIPO, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [], rounding: "per vial", renal: [], flags: ["Starts 2 weeks after the 30 mg/kg dose"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Imaavy (nipocalimab-aahu) — FDA label (DailyMed)", N8_DM("8886274c-f2b2-48af-85c1-2f90bfe304b8")], NEML_SRC],
  dose: { tagline: "FcRn blocker for antibody-positive myasthenia gravis — 30 mg/kg, then 15 mg/kg every 2 weeks.",
    adult: [{ ind: "Generalised myasthenia gravis", text: "30 mg/kg IV, then 15 mg/kg every 2 weeks.", calc: ["load", "gmg_maint"] }, { ind: "Warm AIHA", text: "30 mg/kg IV every 4 weeks.", calc: ["load"] }],
    child: [{ ind: "gMG, 12 years and over", text: "Same mg/kg.", calc: ["load", "gmg_maint"] }] }
});

const NIRA_LT77 = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: 77 };
const NIRA_GE77 = { min_age_months: 216, max_age_months: null, min_weight_kg: 77, max_weight_kg: null };
FDB_M("niraparib", {
  inn: "Niraparib", atc: "L01XK02", cls: "PARP inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 100, 200, 300 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits PARP-1/2, causing cell death in homologous-recombination-deficient tumours [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Maintenance of advanced ovarian, fallopian tube or peritoneal cancer in response to first-line platinum chemotherapy (HRD-positive) [FDA].", "Maintenance of recurrent germline BRCA-mutated ovarian cancer in response to platinum chemotherapy [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["First-line maintenance", "Under 77 kg OR platelets under 150,000/microlitre: 200 mg once daily; 77 kg and over AND platelets 150,000 or more: 300 mg once daily [FDA]."], ["Recurrent gBRCA", "300 mg once daily [FDA]."], ["Moderate hepatic impairment", "200 mg once daily [FDA]."], ["Food", "With or without food [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Weight band (also check platelets)." },
  adj: { renal: NEP, hepatic: "Moderate: 200 mg once daily [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Raises blood pressure — monitor [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Thrombocytopenia, anaemia, neutropenia, nausea, fatigue, constipation, vomiting, insomnia, hypertension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelodysplastic syndrome / AML [FDA] [UNVERIFIED-KNOWLEDGE]", "Bone marrow suppression [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypertension and hypertensive crisis [FDA] [UNVERIFIED-KNOWLEDGE]", "Posterior reversible encephalopathy syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts weekly for the first month, monthly for 11 months, then periodically; blood pressure [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "niraparib", indication_id: "lt77", label: "Ovarian maintenance, under 77 kg — 200 mg once daily", route: "PO", population: NIRA_LT77, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["First-line maintenance"], sources: ["FDA"] },
    { drug: "niraparib", indication_id: "ge77", label: "Ovarian maintenance, 77 kg and over — 300 mg once daily (if platelets 150,000+)", route: "PO", population: NIRA_GE77, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 300, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Platelets under 150,000: use 200 mg", "Recurrent gBRCA: 300 mg regardless of weight"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Zejula (niraparib) tablets — FDA label (DailyMed)", N8_DM("b7f675e2-159c-490c-b6f4-3f16d9492b7d")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "PARP inhibitor for ovarian cancer maintenance — 200 or 300 mg daily by weight and platelets.",
    cautionTitle: "Use with care",
    caution: "Causes thrombocytopenia, anaemia and neutropenia — check counts weekly for the first month. MDS/AML has occurred. Monitor blood pressure [FDA].",
    adult: [{ ind: "First-line maintenance (HRD+)", text: "200 mg (under 77 kg or platelets under 150,000) or 300 mg daily.", calc: ["lt77", "ge77"] }, { ind: "Recurrent gBRCA", text: "300 mg once daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("nirogacestat", {
  inn: "Nirogacestat", atc: "L01XX81", cls: "Gamma-secretase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 50, 100, 150 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks gamma-secretase, inhibiting Notch signalling in desmoid tumours [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Progressing desmoid tumours needing systemic treatment [FDA]."], paed: ["Not established; growth-plate widening seen [FDA]."] },
  adult: [["Desmoid tumours", "150 mg twice daily, with or without food; swallow whole [FDA]."], ["Missed or vomited dose", "Take the next dose at the usual time [FDA]."], ["After severe toxicity", "Restart at 100 mg twice daily [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid strong/moderate CYP3A inhibitors and inducers and PPIs/H2 blockers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, ovarian toxicity, rash, nausea, fatigue, stomatitis, headache, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Ovarian toxicity / premature ovarian insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Non-melanoma skin cancers [FDA] [UNVERIFIED-KNOWLEDGE]", "Electrolyte abnormalities (low phosphate, potassium) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Electrolytes, liver tests; skin checks; ovarian function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nirogacestat", indication_id: "std", label: "Desmoid tumours — 150 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 150, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Swallow whole"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ogsiveo (nirogacestat) tablets — FDA label (DailyMed)", N8_DM("f172e6ff-3190-41b0-b95a-58a7ef9e9e1e")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Gamma-secretase inhibitor for progressing desmoid tumours — 150 mg twice daily.",
    adult: [{ ind: "Desmoid tumours", text: "150 mg twice daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NIRS_LT5 = { min_age_months: null, max_age_months: 12, min_weight_kg: null, max_weight_kg: 5 };
const NIRS_GE5 = { min_age_months: null, max_age_months: 12, min_weight_kg: 5, max_weight_kg: null };
FDB_M("nirsevimab", {
  inn: "Nirsevimab", atc: "J06BD08", cls: "Long-acting RSV F-protein monoclonal antibody",
  linked: [],
  forms: ["Prefilled syringes 50 mg/0.5 mL and 100 mg/1 mL [FDA]."],
  moa: "Binds the RSV F protein in its prefusion form, blocking viral entry [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life — one dose covers a 5-month season [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Not for adults [FDA]."], paed: ["Prevention of RSV lower respiratory disease in neonates and infants in or entering their first RSV season [FDA].", "Children up to 24 months who stay vulnerable through their second season [FDA]."] },
  adult: [["Adults", "Not indicated [FDA]."]],
  paed: { tiers: ["First season, under 5 kg: 50 mg IM once [FDA].", "First season, 5 kg and over: 100 mg IM once [FDA].", "Second season (up to 24 months, still vulnerable): 200 mg as two 100 mg injections [FDA].", "Born in season: give from birth; born outside: give just before the season [FDA].", "After cardiac surgery with bypass: an extra dose by weight [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Infants only.", calcNote: "Weight bands, first season (infants under 12 months)." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Not applicable [UNVERIFIED-KNOWLEDGE].", other: "Can be given with routine childhood vaccines [FDA] [UNVERIFIED-KNOWLEDGE]. Use with caution in thrombocytopenia or bleeding disorders (IM) [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of serious hypersensitivity, including anaphylaxis, to nirsevimab or excipients [FDA]."],
  ae: { common: ["Rash, injection-site reaction [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious hypersensitivity including anaphylaxis [FDA]"] },
  monitor: ["Observe after injection for hypersensitivity [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nirsevimab", indication_id: "lt5", label: "RSV prevention, first season, under 5 kg — 50 mg IM once", route: "IM", population: NIRS_LT5, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "prefilled syringe", strength: 50, unit: "mg", whole: true }], rounding: "1 syringe", renal: [], flags: ["Single dose for the season"], sources: ["FDA"] },
    { drug: "nirsevimab", indication_id: "ge5", label: "RSV prevention, first season, 5 kg and over — 100 mg IM once", route: "IM", population: NIRS_GE5, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "prefilled syringe", strength: 100, unit: "mg", whole: true }], rounding: "1 syringe", renal: [], flags: ["Single dose for the season"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Beyfortus (nirsevimab-alip) — FDA label (DailyMed)", N8_DM("2f08fa60-f674-432d-801b-1f9514bd9b39")], NEML_SRC],
  dose: { tagline: "One-dose RSV antibody for infants — 50 mg under 5 kg, 100 mg from 5 kg; 200 mg in a second season.",
    adult: [{ ind: "Adults", text: "Not indicated." }],
    child: [{ ind: "First RSV season", text: "Under 5 kg: 50 mg; 5 kg+: 100 mg IM once.", calc: ["lt5", "ge5"] }, { ind: "Second season (vulnerable, to 24 months)", text: "200 mg (2 × 100 mg) IM once." }] }
});

FDB_M("nisoldipine", {
  inn: "Nisoldipine", atc: "C08CA07", cls: "Dihydropyridine calcium channel blocker",
  linked: [],
  forms: ["Extended-release tablets 8.5, 17, 25.5, 34 mg (Sular geomatrix) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "L-type calcium channel blocker — arterial vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["High-fat meals and grapefruit increase peak levels [FDA]."],
  ind: { adult: ["Hypertension [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Hypertension", "Start 17 mg once daily; increase by 8.5 mg a week or slower; usual 17–34 mg once daily; over 34 mg not recommended [FDA]."], ["Over 65 or liver impairment", "Start no more than 8.5 mg daily [FDA]."], ["Administration", "Empty stomach (1 h before or 2 h after food); no grapefruit; swallow whole [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — starting dose." },
  adj: { renal: NEP, hepatic: "Start no more than 8.5 mg [FDA].", pregnancy: NEP, other: "Avoid strong CYP3A4 inhibitors and inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, reflex tachycardia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; calcium, vasopressors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to dihydropyridine calcium channel blockers [FDA]."],
  ae: { common: ["Peripheral oedema, headache, dizziness, palpitations, flushing [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Worsening angina or MI on starting or increasing (rare) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure during titration [FDA]."],
  local: notBT,
  calc: [
    { drug: "nisoldipine", indication_id: "start", label: "Hypertension — start 17 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 17, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "ER tablet", strength: 17, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Over 65 or liver impairment: 8.5 mg", "Empty stomach; no grapefruit"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Sular (nisoldipine) ER tablets — FDA label (DailyMed)", N8_DM("589157fa-d129-4de3-be3d-e0e1c22c5873")], NEML_SRC],
  dose: { tagline: "Once-daily dihydropyridine for hypertension — 17 mg, up to 34 mg.",
    adult: [{ ind: "Hypertension", text: "17 mg once daily; usual 17–34 mg (8.5 mg start if over 65).", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

const NTZ_AD = { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
FDB_M("nitazoxanide", {
  inn: "Nitazoxanide", atc: "P01AX11", cls: "Thiazolide antiprotozoal",
  linked: [],
  forms: ["Tablets 500 mg [FDA].", "Oral suspension 100 mg/5 mL (Alinia) [FDA]."],
  moa: "Inhibits pyruvate:ferredoxin oxidoreductase in anaerobic parasites [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take with food [FDA]."],
  ind: { adult: ["Diarrhoea caused by Giardia lamblia or Cryptosporidium parvum [FDA]."], paed: ["Suspension from 1 year; tablets from 12 years [FDA]."] },
  adult: [["12 years and over", "500 mg tablet every 12 hours with food for 3 days [FDA]."], ["Limitations", "Not shown effective for Cryptosporidium in HIV or immunodeficiency [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["1–3 years: 100 mg (5 mL suspension) every 12 hours for 3 days [UNVERIFIED-KNOWLEDGE].", "4–11 years: 200 mg (10 mL suspension) every 12 hours for 3 days [UNVERIFIED-KNOWLEDGE].", "Do not give tablets to children 11 years or younger [FDA]."], transition: "Tablets from 12 years.", calcNote: "Fixed dose from 12 years; child suspension doses in text." },
  adj: { renal: "Caution — not studied [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution — not studied [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Suspension contains sucrose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Prior hypersensitivity to nitazoxanide or ingredients [FDA]."],
  ae: { common: ["Abdominal pain, headache, nausea, diarrhoea; yellow-green urine [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: ["Symptom resolution [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nitazoxanide", indication_id: "tab", label: "Giardia / Cryptosporidium, 12 years+ — 500 mg every 12 h × 3 days", route: "PO", population: NTZ_AD, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 500, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["With food, 3 days"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nitazoxanide tablets — FDA label (DailyMed)", N8_DM("40a7cc30-76cd-49fe-965a-7823c4140d0f")], NEML_SRC],
  dose: { tagline: "Antiprotozoal for Giardia and Cryptosporidium diarrhoea — 500 mg twice daily for 3 days.",
    adult: [{ ind: "Giardia / Cryptosporidium", text: "500 mg every 12 h with food × 3 days.", calc: ["tab"] }],
    child: [{ ind: "1–11 years (suspension)", text: "1–3 y: 100 mg; 4–11 y: 200 mg every 12 h × 3 days." }, { ind: "12 years+", text: "500 mg tablet every 12 h × 3 days.", calc: ["tab"] }] }
});

FDB_M("nitisinone", {
  inn: "Nitisinone", atc: "A16AX04", cls: "4-hydroxyphenylpyruvate dioxygenase (HPPD) inhibitor",
  linked: [],
  forms: ["Tablets 2, 5, 10, 20 mg (Nityr); capsules and oral suspension (Orfadin) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks HPPD upstream of fumarylacetoacetate, preventing toxic succinylacetone [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 54 hours) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hereditary tyrosinaemia type 1, with tyrosine and phenylalanine dietary restriction [FDA]."], paed: ["Same, all ages [FDA]."] },
  adult: [["Start", "0.5 mg/kg (actual weight) twice daily; titrate by biochemical response [FDA]."], ["Maintenance (5 years and over)", "1–2 mg/kg once daily once succinylacetone is undetectable for at least 4 weeks on a stable dose [FDA]."], ["Diet", "Keep tyrosine and phenylalanine restricted [FDA]."]],
  paed: { tiers: ["All ages: 0.5 mg/kg twice daily to start [FDA].", "5 years and over, controlled: 1–2 mg/kg once daily [FDA]."], transition: "Same mg/kg.", calcNote: "mg/kg actual weight." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Raised plasma tyrosine causes eye (corneal) lesions and skin lesions — keep tyrosine under 500 micromol/L [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Raised tyrosine with eye and skin symptoms [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Diet restriction; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Conjunctivitis, corneal opacity, keratitis, photophobia, eye pain, blepharitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ocular symptoms from high tyrosine [FDA] [UNVERIFIED-KNOWLEDGE]", "Leukopenia, thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperkeratotic plaques [FDA] [UNVERIFIED-KNOWLEDGE]", "Developmental delay with high tyrosine [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Plasma tyrosine, urine/blood succinylacetone, liver tests, alpha-fetoprotein, blood counts; slit-lamp eye exam at baseline [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nitisinone", indication_id: "start", label: "HT-1 — start 0.5 mg/kg twice daily", route: "PO", population: ALL, basis: "mg_per_kg", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 2, unit: "mg" }], rounding: "per available strength", renal: [], flags: ["With tyrosine/phenylalanine restriction", "Titrate to succinylacetone"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nityr (nitisinone) tablets — FDA label (DailyMed)", N8_DM("00fd1905-27e4-420e-8dc5-a69e4ddc1526")], NEML_SRC],
  dose: { tagline: "HT-1 treatment with diet — 0.5 mg/kg twice daily, later 1–2 mg/kg once daily.",
    adult: [{ ind: "Hereditary tyrosinaemia type 1", text: "0.5 mg/kg twice daily; maintenance 1–2 mg/kg once daily.", calc: ["start"] }],
    child: [{ ind: "All ages", text: "0.5 mg/kg twice daily to start.", calc: ["start"] }] }
});

FDB_M("nitric-oxide", {
  inn: "Nitric oxide (inhaled)", atc: "R07AX01", cls: "Selective pulmonary vasodilator gas",
  linked: [],
  forms: ["Gas for inhalation 800 ppm cylinders, given through a calibrated delivery system [FDA]."],
  moa: "Activates guanylate cyclase in pulmonary vascular smooth muscle — selective pulmonary vasodilation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Inactivated in the blood by haemoglobin, forming methaemoglobin [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Not labelled for adults [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Term and near-term (over 34 weeks) neonates with hypoxic respiratory failure and pulmonary hypertension, with ventilation, to improve oxygenation and reduce ECMO [FDA]."] },
  adult: [["Adults", "Not labelled; specialist use only [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Neonates over 34 weeks: 20 ppm, up to 14 days or until desaturation resolves [FDA].", "Doses over 20 ppm are not recommended [FDA].", "Wean gradually — abrupt stopping causes rebound hypoxaemia [FDA]."], transition: "Neonates.", calcNote: "Concentration in ppm — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Keep a backup delivery system and supply; use only FDA-cleared devices [FDA]." },
  tox: { human: "Methaemoglobinaemia; NO2 toxicity (lung injury) [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Reduce or stop; methylene blue for methaemoglobinaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Neonates dependent on right-to-left shunting of blood [FDA]."],
  ae: { common: ["Hypotension, atelectasis, haematuria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Rebound pulmonary hypertension on abrupt withdrawal [FDA]", "Methaemoglobinaemia [FDA]", "Raised NO2 [FDA]", "Pulmonary oedema in left ventricular dysfunction [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Methaemoglobin within 4–8 hours and periodically; inspired NO2; oxygenation [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "INOmax (nitric oxide) for inhalation — FDA label (DailyMed)", N8_DM("762b51be-1893-4cd1-9511-e645fc420d3a")], NEML_SRC],
  dose: { tagline: "Inhaled pulmonary vasodilator for neonatal hypoxic respiratory failure — 20 ppm; wean slowly.",
    cautionTitle: "Use with care",
    caution: "Never stop abruptly — rebound pulmonary hypertension and hypoxaemia. Monitor methaemoglobin and NO2. Contraindicated when the baby depends on right-to-left shunting [FDA].",
    adult: [{ ind: "Adults", text: "Not labelled." }],
    child: [{ ind: "Neonates over 34 weeks with HRF + PPHN", text: "20 ppm for up to 14 days; wean gradually." }] }
});

const NIVO_CH = { min_age_months: 144, max_age_months: 216, min_weight_kg: null, max_weight_kg: 40 };
const NIVO_40 = { min_age_months: 144, max_age_months: null, min_weight_kg: 40, max_weight_kg: null };
FDB_M("nivolumab", {
  inn: "Nivolumab", atc: "L01FF01", cls: "PD-1 blocking monoclonal antibody",
  risk: ONC,
  linked: [],
  forms: ["Injection 10 mg/mL (40, 100, 120, 240 mg vials); SC formulation with hyaluronidase is a different product [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks PD-1, releasing T-cell anti-tumour activity [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Many cancers, alone or with ipilimumab or chemotherapy: melanoma, NSCLC, mesothelioma, RCC, Hodgkin lymphoma, head and neck SCC, urothelial, colorectal (MSI-H), HCC, oesophageal and gastric cancers [FDA]."], paed: ["Melanoma (unresectable/metastatic or adjuvant), 12 years and over [FDA]."] },
  adult: [["Most single-agent uses", "240 mg IV every 2 weeks or 480 mg every 4 weeks [FDA]."], ["With ipilimumab (melanoma)", "1 mg/kg then ipilimumab 3 mg/kg every 3 weeks × 4, then 240 mg every 2 weeks or 480 mg every 4 weeks [FDA]."], ["Neoadjuvant NSCLC", "360 mg with platinum doublet every 3 weeks for 3 cycles [FDA]."], ["Other regimens", "Check the indication-specific label table [FDA]."]],
  paed: { tiers: ["Melanoma, 12 years+ and 40 kg+: adult flat doses [FDA].", "Melanoma, 12 years+ under 40 kg: 3 mg/kg every 2 weeks or 6 mg/kg every 4 weeks [FDA]."], transition: "Flat dose from 40 kg.", calcNote: "Flat dose 40 kg+; mg/kg under 40 kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Immune-mediated reactions can affect any organ, even after stopping [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, rash, musculoskeletal pain, pruritus, diarrhoea, nausea, cough [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Immune-mediated pneumonitis, colitis, hepatitis, endocrinopathies, nephritis, skin reactions, myocarditis [FDA]", "Infusion reactions [FDA]", "Complications of allogeneic HSCT [FDA]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver, kidney and thyroid tests, glucose before each dose; symptoms of immune-mediated toxicity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nivolumab", indication_id: "flat", label: "Single agent, 40 kg+ (adults, or 12 years+) — 240 mg every 2 weeks", route: "IV", population: NIVO_40, basis: "fixed", dose: { value: 240, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Or 480 mg every 4 weeks", "Check the regimen for each cancer"], sources: ["FDA"] },
    { drug: "nivolumab", indication_id: "child", label: "Melanoma, 12 years+ under 40 kg — 3 mg/kg every 2 weeks", route: "IV", population: NIVO_CH, basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Or 6 mg/kg every 4 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Opdivo (nivolumab) — FDA label (DailyMed)", N8_DM("f570b9c4-6846-4de2-abfa-4d0a4ae4e394")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "PD-1 inhibitor for many cancers — 240 mg every 2 weeks or 480 mg every 4 weeks.",
    cautionTitle: "Use with care",
    caution: "Immune-mediated reactions can hit any organ (lungs, bowel, liver, glands, kidneys, heart), even after stopping. Check liver, kidney and thyroid tests before each dose [FDA].",
    adult: [{ ind: "Most single-agent indications", text: "240 mg every 2 weeks or 480 mg every 4 weeks.", calc: ["flat"] }],
    child: [{ ind: "Melanoma, 12 years+", text: "40 kg+: adult dose; under 40 kg: 3 mg/kg every 2 weeks.", calc: ["flat", "child"] }] }
});

FDB_M("nizatidine", {
  inn: "Nizatidine", atc: "A02BA04", cls: "H2-receptor antagonist",
  linked: [],
  forms: ["Capsules 150, 300 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks gastric H2 receptors, reducing acid secretion [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mainly excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Active duodenal ulcer (up to 8 weeks) and maintenance [FDA].", "GERD with erosions [FDA].", "Active benign gastric ulcer [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Duodenal ulcer", "300 mg at bedtime or 150 mg twice daily [FDA]."], ["Maintenance", "150 mg at bedtime [FDA]."], ["GERD", "150 mg twice daily [FDA]."], ["Gastric ulcer", "300 mg/day (150 mg twice daily or 300 mg at bedtime); exclude malignancy first [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose with kidney adjustment." },
  adj: { renal: "Treatment doses: CrCl 20–50: 150 mg daily; under 20: 150 mg every other day. Maintenance: 20–50: 150 mg every other day; under 20: 150 mg every 3 days [FDA].", hepatic: NEP, pregnancy: NEP, other: "False-positive urine protein (Multistix) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Cholinergic effects (lacrimation, salivation, vomiting, miosis, diarrhoea) in animals at high doses [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; activated charcoal [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to nizatidine or other H2 antagonists [FDA]."],
  ae: { common: ["Headache, dizziness, rhinitis, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatocellular injury (rare) [FDA] [UNVERIFIED-KNOWLEDGE]", "Thrombocytopenia (rare) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptom response; kidney function for dose [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nizatidine", indication_id: "du", label: "Duodenal / gastric ulcer — 300 mg at bedtime", route: "PO", population: ADULT, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 150, unit: "mg", whole: true }], rounding: "whole capsules", renal: [{ crcl_min: 20, crcl_max: 50, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 19.999, action: "reduce_dose", factor: 0.5, interval_h: 48 }], flags: ["Or 150 mg twice daily", "Up to 8 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nizatidine capsules — FDA label (DailyMed)", N8_DM("e9957997-8b85-48a0-9bb3-b878cb223236")], NEML_SRC],
  dose: { tagline: "H2 blocker for ulcers and GERD — 300 mg at bedtime; reduce in kidney impairment.",
    adult: [{ ind: "Duodenal / gastric ulcer", text: "300 mg at bedtime (or 150 mg twice daily).", calc: ["du"] }, { ind: "GERD", text: "150 mg twice daily." }, { ind: "Maintenance", text: "150 mg at bedtime." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("nogapendekin-alfa-inbakicept", {
  inn: "Nogapendekin alfa inbakicept", atc: "L03AC03", cls: "IL-15 superagonist complex (intravesical)",
  linked: [],
  forms: ["Intravesical solution 400 microgram/0.4 mL vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "IL-15 receptor agonist that activates NK and CD8+ T cells in the bladder [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["With BCG: BCG-unresponsive non-muscle-invasive bladder cancer with CIS, with or without papillary tumours [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Induction", "400 microgram intravesically with BCG once a week for 6 weeks; a second induction course if residual CIS or high-grade Ta at month 3 [FDA]."], ["Maintenance", "400 microgram with BCG weekly for 3 weeks at months 4, 7, 10, 13 and 19; possibly 25, 31 and 37 [FDA]."], ["Handling", "Dilute; finish instillation within 2 hours of puncturing the vial; intravesical only [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed intravesical dose — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Delaying cystectomy risks metastatic disease [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Dysuria, haematuria, urinary frequency and urgency, UTI, musculoskeletal pain, chills, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Risk of metastatic bladder cancer with delayed cystectomy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cystoscopy and cytology during treatment [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Anktiva (nogapendekin alfa inbakicept-pmln) — FDA label (DailyMed)", N8_DM("eae31db8-3e7a-d9e0-708d-74419d1b50ff")], NEML_SRC],
  dose: { tagline: "Intravesical IL-15 agonist with BCG for BCG-unresponsive bladder CIS — 400 microgram weekly.",
    adult: [{ ind: "BCG-unresponsive NMIBC with CIS", text: "400 microgram with BCG weekly × 6, then maintenance courses." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("norethisterone", {
  inn: "Norethisterone (norethindrone)", atc: "G03AC01", cls: "Progestogen",
  linked: [],
  forms: ["Tablets 0.35 mg (progestin-only pill) [FDA].", "Norethisterone acetate tablets 5 mg [FDA]."],
  moa: "Progestogen: thickens cervical mucus, thins endometrium, may suppress ovulation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Prevention of pregnancy (0.35 mg POP) [FDA].", "Secondary amenorrhoea, abnormal uterine bleeding from hormonal imbalance, endometriosis (5 mg acetate) [FDA]."], paed: ["After menarche, same as adults [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Contraception (0.35 mg)", "1 tablet every day at the same time, with no break between packs [FDA]."], ["Late pill", "More than 3 hours late: take it, and use back-up contraception for 48 hours [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Amenorrhoea / AUB (5 mg acetate)", "2.5–10 mg daily for 5–10 days; withdrawal bleeding in 3–7 days [FDA]."], ["Endometriosis (5 mg acetate)", "5 mg daily for 2 weeks; increase by 2.5 mg every 2 weeks to 15 mg daily; continue 6–9 months [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Post-menarche: same as adults [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Fixed doses — no calculator." },
  adj: { renal: NEP, hepatic: "Contraindicated in benign or malignant liver tumours or acute liver disease [FDA].", pregnancy: "Contraindicated [FDA].", other: "Enzyme inducers (rifampicin, some antiepileptics) reduce effect [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, withdrawal bleeding [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known or suspected pregnancy [FDA]", "Known or suspected breast cancer [FDA]", "Undiagnosed abnormal genital bleeding [FDA]", "Benign or malignant liver tumours; acute liver disease [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Irregular bleeding, spotting, amenorrhoea, headache, breast tenderness, nausea, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ectopic pregnancy if contraception fails [FDA]", "Ovarian cysts [FDA] [UNVERIFIED-KNOWLEDGE]", "Thromboembolism (higher doses) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bleeding pattern; blood pressure [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Norethindrone tablets 0.35 mg — FDA label (DailyMed)", N8_DM("121fbf86-1d76-4579-be2f-be9a957b23ab")], ["FDA", "Norethindrone acetate tablets 5 mg — FDA label (DailyMed)", N8_DM("26130af6-221b-2349-81b6-0c0132d6e524")], NEML_SRC],
  dose: { tagline: "Progestogen — 0.35 mg daily as a progestin-only pill; 5 mg acetate for bleeding disorders and endometriosis.",
    boxedTitle: "Cigarette smoking and cardiovascular risk",
    boxed: "Cigarette smoking greatly increases the possibility of suffering heart attacks and strokes. Women who use oral contraceptives are strongly advised not to smoke [FDA].",
    adult: [{ ind: "Contraception", text: "0.35 mg every day at the same time, no breaks." }, { ind: "Amenorrhoea / AUB", text: "Acetate 2.5–10 mg daily for 5–10 days." }, { ind: "Endometriosis", text: "Acetate 5 mg daily, up 2.5 mg every 2 weeks to 15 mg." }],
    child: [{ ind: "After menarche", text: "Same as adults." }] }
});

FDB_M("nortriptyline", {
  inn: "Nortriptyline", atc: "N06AA10", cls: "Tricyclic antidepressant (secondary amine)",
  linked: [],
  forms: ["Capsules 10, 25, 50, 75 mg; oral solution 10 mg/5 mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits noradrenaline (more than serotonin) reuptake [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2D6 metabolism; therapeutic window 50–150 ng/mL [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Depression [FDA].", "Used off-label for neuropathic pain, migraine prophylaxis and smoking cessation [UNVERIFIED-KNOWLEDGE]."], paed: ["Not recommended for children [FDA]."] },
  adult: [["Depression", "25 mg three or four times daily, or the total once daily; start low and increase [FDA]."], ["Maximum", "Doses over 150 mg/day not recommended; check plasma levels above 100 mg/day (keep 50–150 ng/mL) [FDA]."], ["Elderly and adolescents", "30–50 mg/day in divided doses or once daily [FDA]."], ["Switching from an MAOI", "At least 14 days apart [FDA]."]],
  paed: { tiers: ["Not recommended for children [FDA].", "Adolescents: 30–50 mg/day [FDA]."], transition: "Adult dosing at 18 years.", calcNote: "Adult dose." },
  adj: { renal: NEP, hepatic: "Use lower doses [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Recent MI: contraindicated (acute recovery phase) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Highly toxic in overdose: arrhythmias (wide QRS), hypotension, seizures, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "ECG; sodium bicarbonate for QRS over 100 ms; supportive; avoid physostigmine [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs within 14 days, including linezolid and IV methylene blue [FDA]", "Acute recovery period after myocardial infarction [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity to dibenzazepines [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Dry mouth, constipation, blurred vision, urinary retention, drowsiness, orthostatic hypotension, weight gain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts in young people [FDA]", "Arrhythmias, heart block, MI [FDA] [UNVERIFIED-KNOWLEDGE]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Angle-closure glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]", "Seizures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality; ECG in cardiac disease or older adults; plasma levels above 100 mg/day [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "nortriptyline", indication_id: "dep", label: "Depression — 25 mg three times daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: null, caps: { max_daily: 150, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "capsule", strength: 25, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["Or 3–4 times daily, or total once daily", "Elderly: 30–50 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nortriptyline hydrochloride capsules — FDA label (DailyMed)", N8_DM("3c57301f-5128-295e-e063-6394a90ad99e")], NEML_SRC],
  dose: { tagline: "Tricyclic antidepressant — 25 mg three or four times daily; dangerous in overdose.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Suicidality and Antidepressant Drugs Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of nortriptyline hydrochloride or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Nortriptyline hydrochloride is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Depression", text: "25 mg three or four times daily (or once daily); max 150 mg/day.", calc: ["dep"] }],
    child: [{ ind: "Children", text: "Not recommended (adolescents 30–50 mg/day)." }] }
});

FDB_M("nusinersen", {
  inn: "Nusinersen", atc: "M09AX07", cls: "SMN2-directed antisense oligonucleotide",
  linked: [],
  forms: ["Intrathecal injection 12 mg/5 mL vial; higher-dose regimen uses 50 mg and 28 mg doses [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Alters SMN2 pre-mRNA splicing to increase full-length SMN protein [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long CSF half-life (months) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Spinal muscular atrophy [FDA]."], paed: ["Spinal muscular atrophy, from birth [FDA]."] },
  adult: [["Low-dose regimen", "12 mg intrathecal loading doses on days 0, 14 and 28, a fourth 30 days after the third, then 12 mg every 4 months [FDA]."], ["High-dose regimen", "50 mg loading dose, a second 50 mg 14 days later, then 28 mg every 4 months [FDA]."], ["Procedure", "Remove 5 mL CSF first; inject over 1–3 minutes; warm to room temperature; use within 4 hours [FDA]."], ["Before each dose", "Platelet count, coagulation tests and urine protein [FDA]."]],
  paed: { tiers: ["Same fixed doses at all ages [FDA]."], transition: "Same.", calcNote: "Fixed intrathecal doses — no calculator." },
  adj: { renal: "Renal toxicity — check urine protein before each dose [FDA].", hepatic: NEP, pregnancy: NEP, other: "Sedation may be needed for the lumbar puncture [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Lower respiratory infection, constipation, post-lumbar-puncture headache, back pain, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thrombocytopenia and coagulation abnormalities [FDA]", "Renal toxicity (proteinuria) [FDA]", "Hydrocephalus [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Platelets, coagulation and quantitative urine protein before each dose [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Spinraza (nusinersen) intrathecal injection — FDA label (DailyMed)", N8_DM("dd70cd5f-b0fc-4ba4-a5ea-89a34778bd94")], NEML_SRC],
  dose: { tagline: "Intrathecal antisense therapy for SMA — 12 mg loading × 4 then every 4 months (or the 50/28 mg high-dose regimen).",
    adult: [{ ind: "Spinal muscular atrophy", text: "12 mg IT on days 0, 14, 28, 58; then every 4 months." }],
    child: [{ ind: "Spinal muscular atrophy", text: "Same fixed doses from birth." }] }
});

})(); // end N-8 scope

/* Brand names — BATCH N8 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"nepafenac":{"IN":[["Nevanac","J B Chemicals And Pharmaceuticals","Nevanac Bottle Of 5Ml Ophthalmic Suspension"],["Nepaflam","Ajanta Pharma Limited","Nepaflam 0.1% Bottle Of 5Ml Eye Drops"],["Accunac","His Eyeness Ophthalmics Pvt Ltd","Accunac Duo 0.1% Bottle Of 5Ml Eye Drops"]],"BD":[["Nepado","UNIDO Pharmaceuticals Ltd","0.3%"],["Ocufenac","UniMed UniHealth Pharmaceuticals Ltd","0.1%"],["Opanac TS","Beximco Pharmaceuticals PLC","0.3%"]],"src":["https://pharmeasy.in/online-medicine-order/nevanac-eye-drops-2009","https://pharmeasy.in/online-medicine-order/nepaflam-0-1-eye-drops-1386","https://pharmeasy.in/online-medicine-order/accunac-duo-0-1-bottle-of-5ml-eye-drops-4161086","https://medex.com.bd/brands/38464/nepado-03-ophthalmic-suspension","https://medex.com.bd/brands/35745/ocufenac-01-ophthalmic-suspension","https://medex.com.bd/brands/33853/opanac-ts-03-ophthalmic-suspension"]},"neratinib":{"IN":[],"BD":[["Hercent","Incepta Pharmaceuticals Ltd","40 mg"],["Signera","Jenphar Bangladesh Ltd","40 mg"],["Herlyn","Beacon Pharmaceuticals PLC","40 mg"]],"src":["https://medex.com.bd/brands/36720/hercent-40-mg-tablet","https://medex.com.bd/brands/37941/signera-40-mg-tablet","https://medex.com.bd/brands/38523/herlyn-40-mg-tablet"]},"netarsudil":{"IN":[["Netalo","Ajanta Pharma Limited","Netalo Bottle Of 3Ml Eye Drops"],["Raiki","Sun Pharma","Raiki Bottle Of 3Ml Eye Drops"]],"BD":[["Nesudil","Aristopharma Ltd","0.02%"],["Roklan","Popular Pharmaceuticals PLC","0.02%"],["Netario","Incepta Pharmaceuticals Ltd","0.02%"]],"src":["https://pharmeasy.in/online-medicine-order/netalo-bottle-of-3ml-eye-drops-3110552","https://pharmeasy.in/online-medicine-order/raiki-bottle-of-3ml-eye-drops-3635678","https://medex.com.bd/brands/30373/nesudil-plus-002-eye-drop","https://medex.com.bd/brands/34897/roklan-002-eye-drop","https://medex.com.bd/brands/38372/netario-002-eye-drop"]},"nicotine":{"IN":[["Nicogum","Cipla Health Limited","Nicogum 4Mg Freshmint Flavour Sugar Free Strip Of 16 Chewing Gum"],["Nicotex","Cipla Health Limited","Nicotex 4Mg Strip Of 10 Chewing Gum"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/nicogum-4mg-freshmint-flavour-sugar-free-strip-of-16-chewing-gum-4673732","https://pharmeasy.in/online-medicine-order/nicotex-4mg-chew-gum-10-s-6535"]},"nicotinic-acid":{"IN":[],"BD":[["Niapid","Drug International Ltd","500 mg"],["Ridel ER","Incepta Pharmaceuticals Ltd","500 mg"],["Niconic","Pacific Pharmaceuticals Ltd","50 mg"]],"src":["https://medex.com.bd/brands/13621/niapid-500-mg-xr-tablet","https://medex.com.bd/brands/13624/ridel-er-500-mg-xr-tablet","https://medex.com.bd/brands/29876/niconic-50-mg-xr-tablet"]},"nilotinib":{"IN":[["Nelova","Sun Pharma","Nelova 200Mg Bottle Of 28 Capsules"],["Knilonat","Natco Pharma Ltd","Knilonat 150 Mg Cap 10S"],["Ninlib","Hetero Healthcare Limited","Ninlib 150Mg Bottle Of 30 Capsules"]],"BD":[["Tasigna","Nevian Lifescience PLC","200 mg"],["Niloren","Renata PLC","200 mg"],["Nilotin","Healthcare Pharmaceuticals Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/nelova-200-mg-capsule-28-no-s-4117889","https://pharmeasy.in/online-medicine-order/knilonat-150-mg-cap-10s-4134162","https://pharmeasy.in/online-medicine-order/ninlib-150-mg-tab-30s-4134462","https://medex.com.bd/brands/15127/tasigna-200-mg-capsule","https://medex.com.bd/brands/30368/niloren-200-mg-capsule","https://medex.com.bd/brands/34632/nilotin-150-mg-capsule"]},"nintedanib":{"IN":[["Nintib","Cipla Limited","Nintib 150Mg Strip Of 10 Softgel Capsules"],["Nintena","Sun Pharma","Nintena 150Mg Strip Of 10 Softgel Capsules"],["Nindanib","Glenmark Pharmaceuticals","Nindanib 150Mg Strip Of 10 Softgel Capsules"]],"BD":[["Nifev","UniMed UniHealth Pharmaceuticals Ltd","100 mg"],["Fibroz","Beacon Pharmaceuticals PLC","100 mg"],["Ninacent","Incepta Pharmaceuticals Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/nintib-150mg-strip-of-10-capsules-3488870","https://pharmeasy.in/online-medicine-order/nintena-150mg-strip-of-10-capsules-3045406","https://pharmeasy.in/online-medicine-order/nindanib-150mg-strip-of-10-capsules-3046174","https://medex.com.bd/brands/29373/nifev-100-mg-capsule","https://medex.com.bd/brands/30341/fibroz-100-mg-capsule","https://medex.com.bd/brands/31151/ninacent-150-mg-capsule"]},"niraparib":{"IN":[["Zejula","Glaxosmithkline","Zejula 100Mg Strip Of 7 Tablets"]],"BD":[["Niranib","Everest Pharmaceuticals Ltd","100 mg"],["Ovaxa","Jenphar Bangladesh Ltd","100 mg"],["Nirova","Beacon Pharmaceuticals PLC","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zejula-100mg-strip-of-7-tablets-4743628","https://medex.com.bd/brands/30485/niranib-100-mg-capsule","https://medex.com.bd/brands/32816/ovaxa-100-mg-capsule","https://medex.com.bd/brands/34849/nirova-100-mg-capsule"]},"nirsevimab":{"IN":[["Beyfortus","Dr Reddy's Laboratories Ltd","Beyfortus 50Mg Pre Filled Syringe Of 0.5Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/beyfortus-50mg-pre-filled-syringe-of-0-5ml-solution-for-injection-4841552"]},"nitazoxanide":{"IN":[["Nizonide","Lupin","Nizonide 500Mg Strip Of 6 Tablets"],["Netazox","Ind Swift Laboratories Ltd","Netazox Bottle Of 30Ml Dry Syrup"],["Zstop","Maneesh Pharmaceuticals Ltd","Zstop 500Mg Strip Of 6 Tablets"]],"BD":[["Zoana","Orion Pharma Ltd","500 mg"],["Diazox","Kumudini Pharma Ltd","500 mg"],["Zoxanid","Silva Pharmaceuticals Ltd","100 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/nizonide-500mg-tablet-16727","https://pharmeasy.in/online-medicine-order/netazox-dry-syp-54995","https://pharmeasy.in/online-medicine-order/zstop-500mg-tablet-68804","https://medex.com.bd/brands/2342/zoana-500-mg-tablet","https://medex.com.bd/brands/27152/diazox-500-mg-tablet","https://medex.com.bd/brands/2349/zoxanid-100-mg-powder-for-suspension"]},"nivolumab":{"IN":[["Tishtha","Zydus Healthcare Limited","Tishtha 40Mg Vial Of 4Ml Injection"]],"BD":[["Nivomab","Beacon Pharmaceuticals PLC","40 mg/4 ml"],["Nivamo","Ziska Pharmaceuticals Ltd","40 mg/4 ml"],["Navigo","Incepta Pharmaceuticals Ltd","40 mg/4 ml"]],"src":["https://pharmeasy.in/online-medicine-order/tishtha-40mg-vial-of-4ml-injection-4819789","https://medex.com.bd/brands/30060/nivomab-40-mg-iv-infusion","https://medex.com.bd/brands/36889/nivamo-40-mg-iv-infusion","https://medex.com.bd/brands/38371/navigo-40-mg-iv-infusion"]},"norethisterone":{"IN":[["Rethrowel","Leeford Healthcare Ltd","Rethrowel 5 Strip Of 10 Tablets"],["Prevent","Intas Pharmaceuticals Ltd Gx","Prevent N 5Mg Strip Of 10 Tablets"],["Crina","Alembic Pharmaceuticals Ltd","Crina Ncr 10Mg Strip Of 10 Tablets"]],"BD":[["Ethinor","Eskayef Pharmaceuticals Ltd","5 mg"],["Menogia","Advanced Chemical Industries PLC","5 mg"],["Menoral","Square Pharmaceuticals PLC","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/rethrowel-5-tablet-10-no-s-3741474","https://pharmeasy.in/online-medicine-order/prevent-n-5mg-strip-of-10-tablets-14402","https://pharmeasy.in/online-medicine-order/crina-ncr-10mg-tablet-2251","https://medex.com.bd/brands/5917/ethinor-5-mg-tablet","https://medex.com.bd/brands/5918/menogia-5-mg-tablet","https://medex.com.bd/brands/5919/menoral-5-mg-tablet"]},"nortriptyline":{"IN":[],"BD":[["Nortin","Navana Pharmaceuticals Ltd","10 mg"],["Moodnor","The IBN SINA Pharmaceutical PLC","10 mg"]],"src":["https://medex.com.bd/brands/4458/nortin-10-mg-capsule","https://medex.com.bd/brands/30252/moodnor-10-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
