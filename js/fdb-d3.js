/* Clinical Disease Guide — Drug monograph database, block D, batch 3 (25 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Labels replaced for a standard product: docetaxel (Sanofi NDA020449), doxorubicin (conventional, ANDA203622), doxepin (capsules), drospirenone (Slynd).
   Deferred from this run (combination-only labels): diphenoxylate, doxylamine. */

/* ================= Batch D-3 (fdb-d3.js) ================= */
const D3_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const D3_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const D3_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const D3_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };

/* ---------- DIPHENHYDRAMINE (FDA injection ANDA205336) ---------- */
FDB_M("diphenhydramine", {
  inn: "Diphenhydramine", atc: "D04AA32 R06AA02", cls: "First-generation (sedating) antihistamine",
  linked: [],
  forms: ["Injection 50 mg/mL [FDA]; oral capsules, tablets and liquids are over-the-counter products.", "Bhutan: not on the NEML (chlorphenamine and promethazine are the NEML antihistamines) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "H1-receptor antagonist with anticholinergic and sedative effects [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Allergic reactions to blood or plasma; anaphylaxis as an adjunct to adrenaline; other allergic conditions when oral therapy is impractical [FDA].", "Motion sickness [FDA] [UNVERIFIED-KNOWLEDGE].", "Parkinsonism and drug-induced extrapyramidal reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Same, except premature infants and neonates [FDA]."] },
  adult: [["IV or deep IM", "10–50 mg IV (rate generally not over 25 mg/min) or deep IM; 100 mg if required; maximum 400 mg/day [FDA]."]],
  paed: { tiers: ["Children (not premature infants or neonates): 5 mg/kg/24 h or 150 mg/m²/24 h, divided into four doses, IV (not over 25 mg/min) or deep IM; maximum 300 mg/day [FDA].", "Neonates and premature infants: contraindicated [FDA]."], transition: "Adult dose.", calcNote: "50 mg/mL injection." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Contraindicated in nursing mothers [FDA].", other: "Additive CNS depression with alcohol, hypnotics, sedatives; MAOIs prolong anticholinergic effects [FDA] [UNVERIFIED-KNOWLEDGE]. Elderly: dizziness, sedation, hypotension [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "CNS depression or stimulation (stimulation particularly likely in children); atropine-like signs — dry mouth, fixed dilated pupils, flushing, GI symptoms [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; vasopressors for hypotension; do not use stimulants [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Neonates or premature infants [FDA].", "Nursing mothers [FDA].", "Use as a local anaesthetic (risk of local necrosis) [FDA].", "Hypersensitivity to diphenhydramine or similar antihistamines [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Sedation, dizziness, disturbed coordination, epigastric distress, thickened bronchial secretions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Paradoxical excitation in young children [FDA]", "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Urinary retention, raised intraocular pressure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sedation, blood pressure after IV doses [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "diphenhydramine", indication_id: "adult", label: "Adult IV/IM — 10–50 mg (100 mg if required; max 400 mg/day)", route: "IV/IM", population: D3_ADULT, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose", value_max: 50 }, interval_h: null, divided_doses: 1, caps: { max_single: 100, max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["IV no faster than 25 mg/min", "Maximum 400 mg/day"], sources: ["FDA"] },
    { drug: "diphenhydramine", indication_id: "child", label: "Child IV/IM — 5 mg/kg/day in 4 doses (max 300 mg/day)", route: "IV/IM", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "day" }, interval_h: 6, divided_doses: 4, caps: { max_daily: 300, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["Not in neonates or premature infants", "IV no faster than 25 mg/min"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Diphenhydramine hydrochloride injection USP — FDA label (DailyMed)", D3_DM("00f862aa-6917-45c7-b6aa-1bebb0a45e14")], D3_BT],
  dose: { tagline: "Sedating antihistamine injection — not in neonates or nursing mothers.",
    adult: [{ ind: "Allergic reactions (IV/IM)", text: "10–50 mg; 100 mg if needed; maximum 400 mg/day.", calc: ["adult"] }],
    child: [{ ind: "Allergic reactions (IV/IM)", text: "5 mg/kg/day in 4 doses; maximum 300 mg/day.", calc: ["child"] }] }
});

/* ---------- DIPYRIDAMOLE (FDA injection ANDA074521, for thallium imaging) ---------- */
FDB_M("dipyridamole", {
  inn: "Dipyridamole", atc: "B01AC07", cls: "Coronary vasodilator / antiplatelet (adenosine reuptake inhibitor)",
  linked: [],
  forms: ["Injection 5 mg/mL (50 mg/10 mL) [FDA]; oral tablets in other labels.", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits adenosine uptake, raising local adenosine and dilating coronary arteries [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Alternative to exercise in thallium myocardial perfusion imaging for patients who cannot exercise adequately [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Pharmacological stress imaging", "0.142 mg/kg/min (0.57 mg/kg total) IV over 4 minutes; a total beyond 60 mg is not needed for any patient. Dilute at least 1:2 in 0.45% or 0.9% saline or 5% dextrose to about 20–50 mL. Inject thallium within 5 minutes after the infusion [FDA]."], ["Reversal", "Keep IV aminophylline ready for bronchospasm or chest pain [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Asthma history: higher risk of bronchospasm [FDA]. Stop methylxanthines (theophylline, caffeine) beforehand [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No human overdose reported (single controlled IV use) [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Aminophylline for adverse effects [FDA]." },
  contra: ["Hypersensitivity to dipyridamole [FDA]."],
  ae: { common: ["Chest pain, headache, dizziness, ECG changes, hypotension, nausea, flushing [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myocardial infarction, ventricular arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE]", "Bronchospasm [FDA]"] },
  monitor: ["Vital signs and ECG during and 10–15 minutes after the infusion [FDA]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dipyridamole", indication_id: "stress", label: "Thallium stress imaging — 0.57 mg/kg IV over 4 min (max 60 mg)", route: "IV", population: D3_ADULT, basis: "mg_per_kg", dose: { value: 0.57, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 60, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["= 0.142 mg/kg/min for 4 minutes", "Dilute at least 1:2 to 20–50 mL", "Aminophylline at hand"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dipyridamole injection USP — FDA label (DailyMed)", D3_DM("1a2c0a9a-c637-4485-ad4b-0b6d0b05fa20")], D3_BT],
  dose: { tagline: "IV stress agent for thallium heart scans — keep aminophylline ready.",
    adult: [{ ind: "Stress imaging", text: "0.57 mg/kg IV over 4 minutes (0.142 mg/kg/min); 60 mg is enough for any patient.", calc: ["stress"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DIROXIMEL FUMARATE (FDA VUMERITY NDA211855) ---------- */
FDB_M("diroximel-fumarate", {
  inn: "Diroximel fumarate", atc: "L04AX09", cls: "Immunomodulator for multiple sclerosis (fumarate)",
  linked: [],
  forms: ["Delayed-release capsules 231 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Converted to monomethyl fumarate, the same active metabolite as dimethyl fumarate [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Avoid with a high-fat, high-calorie meal and with alcohol [FDA]."],
  ind: { adult: ["Relapsing forms of multiple sclerosis in adults (clinically isolated syndrome, relapsing-remitting, active secondary progressive) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Relapsing MS", "231 mg twice daily for 7 days, then 462 mg (two 231 mg capsules) twice daily [FDA]."], ["Intolerance", "Temporary reduction to 231 mg twice daily; resume 462 mg twice daily within 4 weeks [FDA]."], ["Flushing", "Non-enteric-coated aspirin up to 325 mg 30 minutes before may help [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Mild: no change. Moderate or severe renal impairment: not recommended [FDA].", hepatic: "Check liver tests before starting [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Do not take with dimethyl fumarate [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to diroximel fumarate, dimethyl fumarate or excipients (anaphylaxis, angioedema) [FDA].", "Taking dimethyl fumarate [FDA]."],
  ae: { common: ["Flushing, abdominal pain, diarrhoea, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis, angioedema [FDA]", "Progressive multifocal leukoencephalopathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Lymphopenia and serious infections [FDA]", "Liver injury [FDA]"] },
  monitor: ["CBC with lymphocyte count, aminotransferases, alkaline phosphatase and bilirubin before starting [FDA]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "diroximel-fumarate", indication_id: "start", label: "Relapsing MS — 231 mg twice daily for 7 days", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 231, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 231, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 231, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "avoid", note: "Moderate or severe renal impairment: not recommended [FDA]" }], flags: ["7 days, then 462 mg twice daily"], sources: ["FDA"] },
    { drug: "diroximel-fumarate", indication_id: "maint", label: "Relapsing MS maintenance — 462 mg twice daily", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 462, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 462, max_daily: 924, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 231, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "avoid", note: "Moderate or severe renal impairment: not recommended [FDA]" }], flags: ["Two 231 mg capsules per dose"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Vumerity (diroximel fumarate) — FDA label (DailyMed)", D3_DM("2d74414f-6b83-4ea2-9a95-3cecabbce774")], D3_BT],
  dose: { tagline: "Oral MS fumarate — not with dimethyl fumarate or in moderate–severe renal impairment.",
    adult: [{ ind: "Relapsing MS", text: "231 mg twice daily for 7 days, then 462 mg twice daily.", calc: ["start", "maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DISOPYRAMIDE (FDA NORPACE NDA017447) ---------- */
FDB_M("disopyramide", {
  inn: "Disopyramide", atc: "C01BA03", cls: "Class IA antiarrhythmic",
  linked: [],
  forms: ["Capsules 100, 150 mg (immediate release); controlled-release capsules 100, 150 mg (Norpace CR) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Sodium-channel blocker with marked anticholinergic and negative inotropic effects [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["More than 50% excreted unchanged in urine; half-life longer in renal and hepatic impairment [FDA]."],
  ind: { adult: ["Documented life-threatening ventricular arrhythmias such as sustained ventricular tachycardia [FDA]."], paed: ["Label gives a suggested paediatric table from published experience; safety and effectiveness not established [FDA]."] },
  adult: [["Usual", "400–800 mg/day in divided doses; most adults 600 mg/day = 150 mg every 6 h (IR) or 300 mg every 12 h (CR) [FDA]."], ["Under 50 kg", "400 mg/day = 100 mg every 6 h (IR) or 200 mg every 12 h (CR) [FDA]."], ["Loading (rapid control)", "300 mg IR (200 mg if under 50 kg); not in cardiomyopathy or possible decompensation [FDA]."], ["Cardiomyopathy or possible decompensation", "No loading dose; start 100 mg IR every 6–8 h [FDA]."], ["Moderate renal (CrCl over 40) or hepatic insufficiency", "400 mg/day (100 mg every 6 h IR or 200 mg every 12 h CR) [FDA]."], ["Severe renal insufficiency (IR only)", "100 mg: CrCl 30–40 every 8 h; 15–30 every 12 h; under 15 every 24 h (optional 150 mg load). CR not recommended [FDA]."]],
  paed: { tiers: ["Suggested total daily dose (mg/kg/day), divided every 6 h, hospitalised, start at the low end: under 1 year 10–30; 1–4 years 10–20; 4–12 years 10–15; 12–18 years 6–15 [FDA].", "Liquid 1–10 mg/mL can be made from IR capsule contents in cherry syrup (not CR) [FDA]."], transition: "Adult dose.", calcNote: "Low end of each range." },
  adj: { renal: "CrCl over 40: 400 mg/day. 30–40: 100 mg every 8 h; 15–30: every 12 h; under 15: every 24 h (IR) [FDA].", hepatic: "400 mg/day in divided doses [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Anticholinergic: urinary retention, glaucoma, myasthenia; can precipitate heart failure [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Apnoea, loss of consciousness, arrhythmias, loss of spontaneous respiration; deaths reported [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis, pacing, inotropes as needed [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Cardiogenic shock [FDA].", "Pre-existing second- or third-degree AV block without a pacemaker [FDA].", "Congenital QT prolongation [FDA].", "Known hypersensitivity [FDA]."],
  ae: { common: ["Dry mouth, urinary hesitancy, constipation, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Heart failure, hypotension [FDA]", "Proarrhythmia, QT prolongation, torsades [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Urinary retention [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG (QRS, QT), blood pressure, heart-failure signs, glucose; plasma levels when anticholinergic effects rise [FDA]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "disopyramide", indication_id: "adult", label: "Ventricular arrhythmia, 50 kg and over — 150 mg IR every 6 h", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: 50, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_daily: 800, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 150, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 40.001, crcl_max: 60, action: "reduce_dose", set_value: 100, note: "Moderate renal insufficiency (CrCl over 40): 100 mg every 6 h" }, { crcl_min: 30, crcl_max: 40, action: "reduce_dose", set_value: 100, interval_h: 8, note: "CrCl 30–40: 100 mg every 8 h" }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 100, interval_h: 12, note: "CrCl 15–30: 100 mg every 12 h" }, { crcl_min: 0, crcl_max: 14.999, action: "reduce_dose", set_value: 100, interval_h: 24, note: "CrCl under 15: 100 mg every 24 h" }], renal_note: "Severe renal insufficiency: immediate-release only [FDA]", flags: ["Hepatic insufficiency or cardiomyopathy: lower doses", "Start in hospital with ECG"], sources: ["FDA"] },
    { drug: "disopyramide", indication_id: "adult_small", label: "Ventricular arrhythmia, under 50 kg — 100 mg IR every 6 h", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: 50 }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_daily: 800, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 30, crcl_max: 40, action: "reduce_dose", set_value: 100, interval_h: 8, note: "CrCl 30–40: 100 mg every 8 h" }, { crcl_min: 15, crcl_max: 29.999, action: "reduce_dose", set_value: 100, interval_h: 12, note: "CrCl 15–30: 100 mg every 12 h" }, { crcl_min: 0, crcl_max: 14.999, action: "reduce_dose", set_value: 100, interval_h: 24, note: "CrCl under 15: 100 mg every 24 h" }], renal_note: "Severe renal insufficiency: immediate-release only [FDA]", flags: ["Start in hospital with ECG"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Norpace / Norpace CR (disopyramide phosphate) — FDA label (DailyMed)", D3_DM("e2aa1642-d262-4520-bc6a-9fd3ad795677")], D3_BT],
  dose: { tagline: "Class IA antiarrhythmic for life-threatening VT — strongly anticholinergic and negatively inotropic.",
    boxedTitle: "Mortality (CAST)",
    boxed: "In the National Heart, Lung and Blood Institute's Cardiac Arrhythmia Suppression Trial (CAST), a long-term, multi-center, randomized, double-blind study in patients with asymptomatic non-life-threatening ventricular arrhythmias who had had a myocardial infarction more than 6 days but less than 2 years previously, an excessive mortality or non-fatal cardiac arrest rate (7.7%) was seen in patients treated with encainide or flecainide compared with that seen in patients assigned to carefully matched placebo-treated groups (3.0%). The average duration of treatment with encainide or flecainide in this study was 10 months. The applicability of the CAST results to other populations (e.g., those without recent myocardial infarction) is uncertain. Considering the known proarrhythmic properties of Norpace or Norpace CR and the lack of evidence of improved survival for any antiarrhythmic drug in patients without life-threatening arrhythmias, the use of Norpace or Norpace CR as well as other antiarrhythmic agents should be reserved for patients with life-threatening ventricular arrhythmias [FDA].",
    adult: [{ ind: "Life-threatening ventricular arrhythmia", text: "150 mg every 6 h (100 mg if under 50 kg); kidney dosing by CrCl.", calc: ["adult", "adult_small"] }],
    child: [{ ind: "Specialist use", text: "6–30 mg/kg/day by age band, every 6 h, in hospital." }] }
});

/* ---------- DOCETAXEL (FDA Sanofi NDA020449) ---------- */
FDB_M("docetaxel", {
  inn: "Docetaxel", atc: "L01CD02", cls: "Taxane (microtubule inhibitor)", risk: "High-alert — antineoplastic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Injection 20 mg/mL (20 mg/1 mL, 80 mg/4 mL, 160 mg/8 mL) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Promotes tubulin assembly and stabilises microtubules, blocking cell division [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic (CYP3A4) metabolism — strong CYP3A4 inhibitors raise exposure [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Breast cancer (metastatic; adjuvant node-positive with doxorubicin and cyclophosphamide) [FDA].", "Non-small cell lung cancer [FDA].", "Metastatic castration-resistant prostate cancer (with prednisone) [FDA].", "Gastric adenocarcinoma and head and neck cancer (with cisplatin and fluorouracil) [FDA]."], paed: ["Efficacy not established [FDA]."] },
  adult: [["Breast cancer (metastatic)", "60–100 mg/m² IV over 1 h every 3 weeks [FDA]."], ["Breast cancer (adjuvant)", "75 mg/m² 1 h after doxorubicin 50 mg/m² and cyclophosphamide 500 mg/m² every 3 weeks for 6 cycles [FDA]."], ["NSCLC", "75 mg/m² alone after platinum failure, or followed by cisplatin 75 mg/m² if chemotherapy-naïve [FDA]."], ["Prostate cancer", "75 mg/m² every 3 weeks with prednisone 5 mg twice daily continuously [FDA]."], ["Gastric / head and neck", "75 mg/m² then cisplatin 75 mg/m² (day 1), then fluorouracil 750 mg/m²/day as 24-h infusion [FDA]."], ["Premedication", "Oral corticosteroid (e.g. dexamethasone) for 3 days starting the day before, to reduce fluid retention and hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established — efficacy in children has not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "No adjustment stated in the label [NEP].", hepatic: "Avoid if bilirubin above ULN, or AST/ALT over 1.5 × ULN with alkaline phosphatase over 2.5 × ULN [FDA].", pregnancy: "Can cause fetal harm; effective contraception [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Contains alcohol — consider for patients where alcohol is a concern, including children [FDA]. Use non-PVC equipment [FDA]." },
  tox: { human: "Bone-marrow suppression, peripheral neurotoxicity, mucositis [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote; specialised unit, G-CSF and supportive care [FDA]." },
  contra: ["Neutrophil count under 1,500 cells/mm³ [FDA].", "Severe hypersensitivity to docetaxel or other drugs formulated with polysorbate 80 [FDA]."],
  ae: { common: ["Neutropenia, alopecia, fluid retention, neuropathy, nail changes, mucositis, fatigue, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Treatment-related death, especially with abnormal liver function [FDA]", "Severe neutropenia and febrile neutropenia [FDA]", "Severe hypersensitivity, fatal anaphylaxis [FDA]", "Severe fluid retention [FDA]", "Cystoid macular oedema, enterocolitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts before each cycle; liver tests (bilirubin, AST/ALT, alkaline phosphatase) before each cycle [FDA]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "docetaxel", indication_id: "m75", label: "Docetaxel 75 mg/m² IV over 1 h every 3 weeks", route: "IV", population: D3_ADULT, basis: "mg_per_m2", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Every 3 weeks", "Check neutrophils (at least 1,500) and liver tests first", "Premedicate with corticosteroid"], sources: ["FDA"] },
    { drug: "docetaxel", indication_id: "m100", label: "Breast cancer single agent — 60–100 mg/m² every 3 weeks", route: "IV", population: D3_ADULT, basis: "mg_per_m2", dose: { value: 60, unit: "mg", per: "dose", value_max: 100 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Every 3 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Docetaxel injection (Sanofi) — FDA label (DailyMed)", D3_DM("dd0ca36d-1f54-4568-8d19-a7152addcd52")], D3_BT],
  dose: { tagline: "Taxane chemotherapy every 3 weeks — check neutrophils and liver tests first.",
    boxedTitle: "Toxic deaths, hepatotoxicity, neutropenia, hypersensitivity reactions, and fluid retention",
    boxed: "Treatment-related mortality associated with Docetaxel therapy is increased in patients with abnormal liver function, in patients receiving higher doses, and in patients with non-small cell lung carcinoma and a history of prior treatment with platinum-based chemotherapy who receive Docetaxel as a single agent at a dose of 100 mg/m². Avoid the use of Docetaxel in patients with bilirubin > upper limit of normal (ULN), or to patients with AST and/or ALT >1.5 × ULN concomitant with alkaline phosphatase >2.5 × ULN. Patients with elevations of bilirubin or abnormalities of transaminase concurrent with alkaline phosphatase are at increased risk for the development of severe neutropenia, febrile neutropenia, infections, severe thrombocytopenia, severe stomatitis, severe skin toxicity, and toxic death. Measure bilirubin, AST or ALT, and alkaline phosphatase prior to each cycle of Docetaxel. Do not administer Docetaxel to patients with neutrophil counts <1500 cells/mm³. Obtain frequent blood counts to monitor for neutropenia [FDA].",
    adult: [{ ind: "Solid tumours", text: "75 mg/m² IV over 1 h every 3 weeks (breast cancer single agent 60–100 mg/m²).", calc: ["m75", "m100"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DOCOSANOL (FDA OTC 10% cream ANDA212385) ---------- */
FDB_M("docosanol", {
  inn: "Docosanol", atc: "D06BB11", cls: "Topical antiviral for cold sores (fusion inhibitor)",
  linked: [],
  forms: ["Cream 10% (over the counter) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits fusion of the herpes virus envelope with the cell membrane [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Cold sores / fever blisters on the face or lips — shortens healing time and symptoms [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Cold sores (12 years and over)", "Apply to the affected area on the face or lips at the first tingle; rub in gently; 5 times a day until healed. Wash hands before and after [FDA]."]],
  paed: { tiers: ["Under 12 years: ask a doctor [FDA]."], transition: "12 years and over: adult use.", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable (topical) [NEP].", hepatic: "Not applicable (topical) [NEP].", pregnancy: "Not established in primary source. [NEP]", other: "External use only; avoid eyes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Not established in primary source. [NEP]"],
  ae: { common: ["Application-site reactions, headache [UNVERIFIED-KNOWLEDGE]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Stop and see a doctor if the sore worsens or is not healed in 10 days [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Docosanol 10% cold sore cream — FDA OTC label (DailyMed)", D3_DM("518bd432-f0d0-4fc4-944c-b9d1a01e2064")], D3_BT],
  dose: { tagline: "OTC cold-sore cream — start at the first tingle, five times a day.",
    adult: [{ ind: "Cold sores", text: "Apply 5 times a day until healed." }],
    child: [{ ind: "12 years and over", text: "As adults; under 12 years ask a doctor." }] }
});

/* ---------- DOFETILIDE (FDA TIKOSYN NDA020931) ---------- */
FDB_M("dofetilide", {
  inn: "Dofetilide", atc: "C01BD04", cls: "Class III antiarrhythmic (IKr blocker)", risk: "High-alert — dofetilide is on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Capsules 125, 250, 500 mcg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks the rapid delayed-rectifier potassium current (IKr), prolonging repolarisation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Clearance falls with creatinine clearance; patients with CrCl under 20 were not studied [FDA]."],
  ind: { adult: ["Maintenance of sinus rhythm (delay in AF/flutter recurrence) in highly symptomatic AF/flutter [FDA].", "Conversion of AF/flutter to sinus rhythm [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established (under 18 years) [FDA]."] },
  adult: [["Start (in hospital, 3 days ECG monitoring)", "Dose by calculated CrCl: over 60 mL/min 500 mcg twice daily; 40–60 mL/min 250 mcg twice daily; 20 to under 40 mL/min 125 mcg twice daily; under 20 mL/min contraindicated [FDA]."], ["QTc check", "2–3 h after the first dose: if QTc rises over 15% or over 500 msec (550 with conduction delay), reduce — 500→250, 250→125, 125→125 once daily [FDA]."], ["Potassium", "Keep serum potassium normal before and during therapy [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness under 18 years have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Dose by CrCl (table); contraindicated under 20 mL/min [FDA].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Contraindicated with cimetidine, verapamil, ketoconazole, trimethoprim (alone or with sulfamethoxazole), prochlorperazine, megestrol, dolutegravir, hydrochlorothiazide [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Excessive QT prolongation [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote; symptomatic and supportive; ECG monitoring; isoproterenol or pacing for torsades [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Congenital or acquired long QT syndromes; baseline QT or QTc over 440 msec (500 msec with ventricular conduction abnormalities) [FDA].", "Severe renal impairment (calculated CrCl under 20 mL/min) [FDA].", "Interacting drugs: cimetidine, verapamil, ketoconazole, trimethoprim, prochlorperazine, megestrol, dolutegravir, hydrochlorothiazide [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, chest pain, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Torsade de pointes and ventricular arrhythmia [FDA]", "Sudden death [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Continuous ECG for at least 3 days at start; QTc 2–3 h after each of the first 5 doses; CrCl and QTc every 3 months; potassium and magnesium [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dofetilide", indication_id: "af", label: "AF/flutter — 500 mcg twice daily (CrCl over 60), adjusted by CrCl", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 500, unit: "mcg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 500, max_daily: 1000, unit: "mcg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 500, unit: "mcg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 40, crcl_max: 60, action: "reduce_dose", set_value: 250, note: "CrCl 40–60: 250 mcg twice daily" }, { crcl_min: 20, crcl_max: 39.999, action: "reduce_dose", set_value: 125, note: "CrCl 20 to under 40: 125 mcg twice daily" }, { crcl_min: 0, crcl_max: 19.999, action: "avoid", note: "CrCl under 20: contraindicated [FDA]" }], renal_note: "Dose must be chosen by calculated CrCl — enter CrCl", flags: ["Start in hospital with 3 days of ECG monitoring", "Check QTc 2–3 h after the first dose", "Capsules 125, 250, 500 mcg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Tikosyn (dofetilide) — FDA label (DailyMed)", D3_DM("02438044-d6a3-49e9-a1ac-3aad21ef2c8c")], D3_BT],
  dose: { tagline: "AF rhythm drug started only in hospital — dose by CrCl and QTc.",
    boxedTitle: "Initiate in a facility with ECG monitoring",
    boxed: "To minimize the risk of induced arrhythmia, patients initiated or re-initiated on TIKOSYN should be placed for a minimum of 3 days in a facility that can provide calculations of creatinine clearance, continuous electrocardiographic monitoring, and cardiac resuscitation [FDA].",
    adult: [{ ind: "AF / flutter", text: "500 mcg twice daily if CrCl over 60; 250 mcg if 40–60; 125 mcg if 20–39; contraindicated under 20.", calc: ["af"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DONANEMAB (FDA KISUNLA BLA761248) ---------- */
FDB_M("donanemab", {
  inn: "Donanemab", atc: "N06DX05", cls: "Anti-amyloid beta monoclonal antibody",
  linked: [],
  forms: ["Injection 350 mg/20 mL (17.5 mg/mL) vial [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds deposited N-terminal pyroglutamate amyloid beta and clears amyloid plaques [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not studied in renal or hepatic impairment [FDA]."],
  ind: { adult: ["Alzheimer's disease at the mild cognitive impairment or mild dementia stage, with confirmed amyloid pathology [FDA]."], paed: ["Not applicable [NEP]."] },
  adult: [["Infusion schedule (IV over about 30 min every 4 weeks)", "Infusion 1: 350 mg; infusion 2: 700 mg; infusion 3: 1,050 mg; infusion 4 onwards: 1,400 mg. Dilute to 4–10 mg/mL in 0.9% sodium chloride [FDA]."], ["Stopping", "Consider stopping when amyloid plaques fall to minimal levels on amyloid PET [FDA]."], ["MRI", "Baseline brain MRI, then before the 2nd, 3rd, 4th and 7th infusions [FDA]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Fixed doses — no calculator." },
  adj: { renal: "Not studied [FDA].", hepatic: "Not studied [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "ApoE ε4 homozygotes have higher ARIA risk — test ApoE status before starting [FDA] [UNVERIFIED-KNOWLEDGE]. Caution with anticoagulants and thrombolytics [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Known serious hypersensitivity to donanemab-azbt or excipients (including anaphylaxis) [FDA]."],
  ae: { common: ["ARIA-E (oedema), ARIA-H (microhaemorrhage, superficial siderosis), headache, infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious and fatal ARIA, intracerebral haemorrhage [FDA]", "Anaphylaxis [FDA]"] },
  monitor: ["Brain MRI at baseline and before infusions 2, 3, 4 and 7; clinical review for ARIA symptoms [FDA]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Kisunla (donanemab-azbt) — FDA label (DailyMed)", D3_DM("190352d4-ef62-4679-b4fa-e846e2766afa")], D3_BT],
  dose: { tagline: "Monthly anti-amyloid infusion for early Alzheimer's — needs MRI monitoring for ARIA.",
    boxedTitle: "Amyloid related imaging abnormalities",
    boxed: "Monoclonal antibodies directed against aggregated forms of beta amyloid, including KISUNLA, can cause amyloid related imaging abnormalities (ARIA), characterized as ARIA with edema (ARIA-E) and ARIA with hemosiderin deposition (ARIA-H). Incidence and timing of ARIA vary among treatments. ARIA usually occurs early in treatment and is usually asymptomatic, although serious and life-threatening events can occur. ARIA can be fatal. Serious intracerebral hemorrhages >1 cm, some of which have been fatal, have been observed in patients treated with this class of medications. Patients who are apolipoprotein E ε4 (ApoE ε4) homozygotes (approximately 15% of Alzheimer's disease patients) treated with this class of medications, including KISUNLA, have a higher incidence of ARIA, including symptomatic, serious, and severe radiographic ARIA, compared to heterozygotes and noncarriers. Testing for ApoE ε4 status should be performed prior to initiation of treatment to inform the risk of developing ARIA [FDA].",
    adult: [{ ind: "Early Alzheimer's disease", text: "350 mg, 700 mg, 1,050 mg, then 1,400 mg IV every 4 weeks." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- DONEPEZIL (FDA tablets ANDA200292) ---------- */
FDB_M("donepezil", {
  inn: "Donepezil", atc: "N06DA02", cls: "Acetylcholinesterase inhibitor",
  linked: [],
  forms: ["Tablets 5, 10 mg; also 23 mg and orally disintegrating tablets in other labels [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Reversibly inhibits acetylcholinesterase, increasing acetylcholine in the brain [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 70 hours) — wait 4–6 weeks before raising the dose [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Dementia of the Alzheimer's type — mild, moderate and severe [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Alzheimer's dementia", "Start 5 mg once daily in the evening at bedtime; after 4–6 weeks may increase to 10 mg once daily. Mild to moderate: 5–10 mg; moderate to severe: 10 mg [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "No adjustment stated in the label [NEP].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Vagotonic: bradycardia and heart block; caution in asthma, COPD, peptic ulcer; exaggerates succinylcholine relaxation [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Cholinergic crisis: severe nausea, vomiting, salivation, sweating, bradycardia, hypotension, respiratory depression, collapse, convulsions [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Tertiary anticholinergic such as atropine; contact a poison control centre [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to donepezil or piperidine derivatives [FDA]."],
  ae: { common: ["Nausea, diarrhoea, insomnia, vomiting, muscle cramps, fatigue, anorexia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bradycardia, heart block, syncope [FDA] [UNVERIFIED-KNOWLEDGE]", "GI bleeding [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Seizures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Heart rate, weight, GI bleeding signs [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "donepezil", indication_id: "ad", label: "Alzheimer's dementia — start 5 mg at bedtime", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, max_daily: 10, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["After 4–6 weeks may increase to 10 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Donepezil hydrochloride tablets — FDA label (DailyMed)", D3_DM("603c07bb-61bf-410f-8abf-01ef09d61c14")], D3_BT],
  dose: { tagline: "Bedtime cholinesterase inhibitor for Alzheimer's — watch for slow pulse.",
    adult: [{ ind: "Alzheimer's dementia", text: "5 mg at bedtime; 10 mg after 4–6 weeks.", calc: ["ad"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DONIDALORSEN (FDA DAWNZERA NDA219407) ---------- */
FDB_M("donidalorsen", {
  inn: "Donidalorsen", atc: "B06AC", cls: "Prekallikrein-directed antisense oligonucleotide",
  linked: [],
  forms: ["Injection 80 mg/0.8 mL single-dose autoinjector [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Antisense oligonucleotide that reduces prekallikrein production in the liver, lowering bradykinin generation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Prophylaxis of hereditary angioedema (HAE) attacks [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["HAE prophylaxis (12 years and over)", "80 mg SC every 4 weeks; 80 mg every 8 weeks may be considered [FDA]."], ["Missed dose", "Give as soon as possible, then resume the schedule from that date [FDA]."]],
  paed: { tiers: ["12 years and over: adult dose [FDA].", "Under 12 years: not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Fixed dose — no calculator." },
  adj: { renal: "Mild: no change; moderate, severe or ESRD not studied [FDA].", hepatic: "Moderate or severe hepatic impairment: not recommended [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Not for acute attacks [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["History of serious hypersensitivity, including anaphylaxis, to donidalorsen or excipients [FDA]."],
  ae: { common: ["Injection-site reactions, upper respiratory infection, urinary tract infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis [FDA]"] },
  monitor: ["Attack frequency [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Dawnzera (donidalorsen) — FDA label (DailyMed)", D3_DM("3ff501e0-f75f-07da-e063-6294a90a0cb7")], D3_BT],
  dose: { tagline: "Monthly self-injected prevention for hereditary angioedema.",
    adult: [{ ind: "HAE prophylaxis", text: "80 mg SC every 4 weeks (or every 8 weeks)." }],
    child: [{ ind: "12 years and over", text: "80 mg SC every 4 weeks." }] }
});

/* ---------- DONISLECEL (FDA LANTIDRA BLA125734) ---------- */
FDB_M("donislecel", {
  inn: "Donislecel (allogeneic pancreatic islet cells)", atc: "A10XA", cls: "Allogeneic pancreatic islet cellular therapy",
  linked: [],
  forms: ["Cellular suspension of allogeneic pancreatic islets for hepatic portal vein infusion [FDA].", "Bhutan: not available [BT-NEML]."],
  moa: "Transplanted islets secrete insulin in response to glucose [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable [NEP]."],
  ind: { adult: ["Adults with type 1 diabetes unable to reach target HbA1c because of repeated severe hypoglycaemia despite intensive management and education [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not applicable [NEP]."] },
  adult: [["Dose", "Minimum 5,000 equivalent islet number (EIN) per kg for the first infusion and 4,500 EIN/kg for later infusions; tissue volume not over 10 cc per infusion [FDA]."], ["Administration", "Hepatic portal vein only, through a 5 or 6 French catheter, by experienced islet-transplant teams. Do not irradiate; no leukodepleting filters; use within 48 h of release at 15–25 °C [FDA]."], ["Immunosuppression", "Requires concomitant immunosuppression [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Specialist transplant product — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Contraindicated where pregnancy contraindicates the procedure or immunosuppression [FDA].", other: "Risks come mainly from the portal infusion procedure and lifelong immunosuppression [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not applicable [NEP].", animal: "Not applicable [NEP].", manage: "Not applicable [NEP]." },
  contra: ["Conditions, including pregnancy, that contraindicate the infusion procedure or immunosuppression [FDA].", "Patients for whom immunosuppression is contraindicated [FDA]."],
  ae: { common: ["Nausea, fatigue, anaemia, diarrhoea, abdominal pain (largely procedure- and immunosuppression-related) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Portal vein thrombosis, bleeding from the procedure [FDA] [UNVERIFIED-KNOWLEDGE]", "Infections and malignancy from immunosuppression [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Glucose, HbA1c, C-peptide; liver tests and portal pressure after infusion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Lantidra (donislecel-jujn) — FDA label (DailyMed)", D3_DM("24610d9f-0c5a-4f55-93b3-d456300bfd5d")], D3_BT],
  dose: { tagline: "Islet-cell transplant for brittle type 1 diabetes — specialist centres only.",
    adult: [{ ind: "Type 1 diabetes with severe hypoglycaemia", text: "At least 5,000 EIN/kg (first) and 4,500 EIN/kg (later) into the portal vein." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- DORAVIRINE (FDA PIFELTRO NDA210806) ---------- */
FDB_M("doravirine", {
  inn: "Doravirine", atc: "J05AG06", cls: "Non-nucleoside reverse transcriptase inhibitor (NNRTI)",
  linked: [],
  forms: ["Tablets 100 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Non-competitive inhibitor of HIV-1 reverse transcriptase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate — strong inducers contraindicated; rifabutin needs twice-daily dosing [FDA]."],
  ind: { adult: ["HIV-1, with other antiretrovirals, in treatment-naïve patients or to replace a stable suppressive regimen (no doravirine resistance) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Children weighing at least 35 kg [FDA]."] },
  adult: [["HIV-1", "100 mg once daily with or without food [FDA]."], ["With rifabutin", "100 mg twice daily (about 12 h apart) for the duration of rifabutin [FDA]."]],
  paed: { tiers: ["35 kg and over: 100 mg once daily [FDA].", "Under 35 kg: not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "35 kg and over: adult dose.", calcNote: "100 mg tablet." },
  adj: { renal: "No adjustment in mild, moderate or severe renal impairment [FDA].", hepatic: "No adjustment in Child-Pugh A or B; Child-Pugh C not studied [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Contraindicated with strong CYP3A inducers (e.g. rifampicin, carbamazepine, phenytoin, St John's wort) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Co-administration with strong CYP3A inducers [FDA]."],
  ae: { common: ["Nausea, dizziness, headache, fatigue, diarrhoea, abnormal dreams [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Immune reconstitution syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Viral load, CD4 count [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not in Bhutan HIV guidelines 2024 regimens [UNVERIFIED-KNOWLEDGE]." },
  calc: [
    { drug: "doravirine", indication_id: "hiv", label: "HIV-1, 35 kg and over — 100 mg once daily", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 35, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["With rifabutin: 100 mg twice daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Pifeltro (doravirine) — FDA label (DailyMed)", D3_DM("ff06e5cc-f47a-4779-816b-0e5b13e88a25")], D3_BT],
  dose: { tagline: "Once-daily NNRTI for HIV — not with strong CYP3A inducers.",
    adult: [{ ind: "HIV-1", text: "100 mg once daily (twice daily with rifabutin).", calc: ["hiv"] }],
    child: [{ ind: "35 kg and over", text: "100 mg once daily.", calc: ["hiv"] }] }
});

/* ---------- DORNASE ALFA (FDA PULMOZYME BLA103532) ---------- */
FDB_M("dornase-alfa-desoxyribonuclease-", {
  inn: "Dornase alfa (desoxyribonuclease)", atc: "R05CB13", cls: "Recombinant human DNase (mucolytic)",
  linked: [],
  forms: ["Inhalation solution 2.5 mg/2.5 mL (1 mg/mL) ampoules [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Cleaves extracellular DNA in purulent airway secretions, lowering sputum viscosity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Acts locally in the airway [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Cystic fibrosis, with standard therapies, to improve pulmonary function [FDA]."], paed: ["Children with cystic fibrosis [FDA]."] },
  adult: [["Cystic fibrosis", "2.5 mg (one ampoule) inhaled once daily by a recommended jet or vibrating-mesh nebuliser; some patients benefit from twice daily [FDA]."], ["Administration", "Do not dilute or mix with other drugs in the nebuliser [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same dose as adults [FDA]."], transition: "Adult dose.", calcNote: "Fixed 2.5 mg." },
  adj: { renal: "Not applicable (inhaled) [NEP].", hepatic: "Not applicable (inhaled) [NEP].", pregnancy: "Not established in primary source. [NEP]", other: "Refrigerate and protect from light [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Known hypersensitivity to dornase alfa, Chinese hamster ovary cell products, or any component [FDA]."],
  ae: { common: ["Voice alteration, pharyngitis, laryngitis, rash, chest pain, conjunctivitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lung function [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dornase-alfa-desoxyribonuclease-", indication_id: "cf", label: "Cystic fibrosis — 2.5 mg nebulised once daily", route: "Inhaled", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 2.5, max_daily: 5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "Whole ampoule", renal: [], flags: ["Some patients benefit from twice daily", "One 2.5 mL ampoule, undiluted"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Pulmozyme (dornase alfa) — FDA label (DailyMed)", D3_DM("d8c78a7e-ff99-48f3-8952-643ec2ea0f86")], D3_BT],
  dose: { tagline: "Daily nebulised mucolytic for cystic fibrosis.",
    adult: [{ ind: "Cystic fibrosis", text: "2.5 mg nebulised once daily (some twice daily).", calc: ["cf"] }],
    child: [{ ind: "Cystic fibrosis", text: "2.5 mg nebulised once daily.", calc: ["cf"] }] }
});

/* ---------- DOSTARLIMAB (FDA JEMPERLI BLA761174) ---------- */
FDB_M("dostarlimab", {
  inn: "Dostarlimab", atc: "L01FF07", cls: "PD-1 blocking monoclonal antibody", risk: "High-alert — antineoplastic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Injection 500 mg/10 mL (50 mg/mL) vial [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks PD-1, releasing PD-1–mediated inhibition of the anti-tumour immune response [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No adjustment for mild–moderate renal or hepatic impairment in population analysis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Endometrial cancer (primary advanced or recurrent, with carboplatin and paclitaxel; or dMMR recurrent/advanced as single agent) [FDA].", "dMMR/MSI-H locally advanced rectal cancer [FDA].", "dMMR recurrent or advanced solid tumours [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["With carboplatin and paclitaxel (endometrial)", "500 mg every 3 weeks for 6 cycles, then 1,000 mg every 6 weeks [FDA]."], ["Single agent (dMMR endometrial or solid tumours)", "500 mg every 3 weeks for 4 cycles, then 1,000 mg every 6 weeks [FDA]."], ["MSI-H/dMMR rectal cancer", "500 mg every 3 weeks for 9 cycles [FDA]."], ["Administration", "IV infusion over 30 minutes [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Fixed doses — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Immune-mediated adverse reactions can affect any organ — withhold or stop and give corticosteroids per label [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, anaemia, diarrhoea, nausea, rash, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Immune-mediated pneumonitis, colitis, hepatitis, endocrinopathies, nephritis, skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver, kidney and thyroid function; glucose; symptoms of immune-mediated reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Jemperli (dostarlimab-gxly) — FDA label (DailyMed)", D3_DM("095eab9f-545a-4f12-bfb7-19477fb901a5")], D3_BT],
  dose: { tagline: "PD-1 immunotherapy — watch for immune-mediated reactions in any organ.",
    adult: [{ ind: "Endometrial / dMMR tumours", text: "500 mg IV every 3 weeks (4–6 cycles), then 1,000 mg every 6 weeks." }, { ind: "dMMR rectal cancer", text: "500 mg every 3 weeks for 9 cycles." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DOXAPRAM (FDA injection NDA014879) ---------- */
FDB_M("doxapram", {
  inn: "Doxapram", atc: "R07AB01", cls: "Respiratory stimulant (analeptic)",
  linked: [],
  forms: ["Injection 20 mg/mL (contains benzyl alcohol) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Stimulates peripheral carotid chemoreceptors and, at higher doses, the medullary respiratory centres [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short duration of action [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Post-anaesthesia respiratory depression or apnoea (not from muscle relaxants) [FDA] [UNVERIFIED-KNOWLEDGE].", "Drug-induced CNS depression; chronic pulmonary disease with acute hypercapnia (short-term) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Post-anaesthetic IV injection", "0.5–1 mg/kg single injection, repeated at 5-minute intervals; maximum total by injection 2 mg/kg [FDA]."], ["Infusion", "250 mg (12.5 mL) in 250 mL D5W, D10W or normal saline (1 mg/mL); start about 5 mg/min until response, then 1–3 mg/min; maximum total by infusion 4 mg/kg (about 300 mg in an average adult) [FDA]."], ["Daily maximum", "Not over 3 g in 24 hours [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adult dose.", calcNote: "Adult only; contains benzyl alcohol." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Not a substitute for airway support and ventilation [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Excessive pressor effect: hypertension, tachycardia, skeletal muscle hyperactivity, enhanced deep tendon reflexes; convulsions [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; short-acting IV barbiturates and oxygen for convulsions [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA].", "Epilepsy or other convulsive disorders [FDA].", "Proven or suspected pulmonary embolism [FDA].", "Mechanical disorders of ventilation (obstruction, muscle paresis including neuromuscular blockade, flail chest, pneumothorax, acute asthma, pulmonary fibrosis) [FDA].", "Head injury, stroke or cerebral oedema [FDA].", "Significant cardiovascular impairment [FDA]."],
  ae: { common: ["Hypertension, tachycardia, arrhythmia, sweating, flushing, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Convulsions [FDA]", "Arrhythmias [FDA] [UNVERIFIED-KNOWLEDGE]", "Laryngospasm, bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, heart rate, reflexes, arterial blood gases [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "doxapram", indication_id: "iv", label: "Post-anaesthesia — 0.5–1 mg/kg IV (repeat every 5 min, max 2 mg/kg)", route: "IV", population: D3_ADULT, basis: "mg_per_kg", dose: { value: 0.5, unit: "mg", per: "dose", value_max: 1 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Repeat at 5-minute intervals", "Maximum total by injection 2 mg/kg", "Infusion: maximum 4 mg/kg; never over 3 g/24 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Doxapram hydrochloride injection — FDA label (DailyMed)", D3_DM("954859c0-a121-34d6-e053-2a95a90a1e19")], D3_BT],
  dose: { tagline: "Respiratory stimulant after anaesthesia — not in epilepsy, PE or mechanical ventilatory problems.",
    adult: [{ ind: "Post-anaesthetic depression", text: "0.5–1 mg/kg IV, repeat every 5 min to 2 mg/kg; or infusion 5 then 1–3 mg/min to 4 mg/kg.", calc: ["iv"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DOXAZOSIN (FDA tablets NDA019668) ---------- */
FDB_M("doxazosin", {
  inn: "Doxazosin", atc: "C02CA04", cls: "Alpha-1 adrenergic blocker",
  linked: [],
  forms: ["Tablets 1, 2, 4, 8 mg [FDA]; extended-release tablets in other labels.", "Bhutan: not on the NEML (prazosin and tamsulosin are used) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Selective alpha-1 blockade relaxes vascular and prostatic smooth muscle [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Extensive hepatic metabolism — exposure rises in hepatic impairment [FDA]."],
  ind: { adult: ["Benign prostatic hyperplasia [FDA].", "Hypertension [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["BPH", "1 mg once daily (morning or evening); titrate every 1–2 weeks to 2, 4 and 8 mg; maximum 8 mg once daily [FDA]."], ["Hypertension", "1 mg once daily; titrate as needed up to 16 mg once daily [FDA]."], ["First dose", "Monitor blood pressure for at least 6 hours after the first dose and after each increase; restart at 1 mg if stopped for several days [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "No adjustment stated in the label [NEP].", hepatic: "Monitor for hypotension [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Intraoperative floppy iris syndrome in cataract surgery; additive hypotension with PDE-5 inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension — two adolescents taking 40 mg recovered [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supine position, IV fluids, vasopressors if needed [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to doxazosin or other quinazolines (prazosin, terazosin) [FDA]."],
  ae: { common: ["Dizziness, fatigue, oedema, headache, dyspnoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Postural hypotension and syncope, especially after the first dose [FDA] [UNVERIFIED-KNOWLEDGE]", "Priapism [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure (standing and lying) [FDA]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "doxazosin", indication_id: "start", label: "BPH or hypertension — start 1 mg once daily", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 16, max_daily: 16, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 1, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["BPH maximum 8 mg; hypertension maximum 16 mg", "Check BP for 6 h after first dose and each increase"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Doxazosin mesylate tablets — FDA label (DailyMed)", D3_DM("445dc831-1960-4b25-e063-6294a90a6efd")], D3_BT],
  dose: { tagline: "Alpha-blocker for BPH and blood pressure — first-dose fall in BP.",
    adult: [{ ind: "BPH", text: "1 mg once daily, up to 8 mg.", calc: ["start"] }, { ind: "Hypertension", text: "1 mg once daily, up to 16 mg.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DOXEPIN (FDA capsules ANDA215076) ---------- */
FDB_M("doxepin", {
  inn: "Doxepin", atc: "N06AA12 D04AX01", cls: "Tricyclic antidepressant",
  linked: [],
  forms: ["Capsules 10, 25, 50, 75, 100, 150 mg; oral concentrate; low-dose 3 and 6 mg tablets (insomnia) and cream in other labels [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML (amitriptyline is the NEML tricyclic) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits reuptake of noradrenaline and serotonin; strong H1 antihistamine [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Depression and/or anxiety (psychoneurotic, alcoholism-related, organic-disease-related, psychotic depressive disorders) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not recommended under 12 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Mild to moderate", "Start 75 mg/day; usual 75–150 mg/day [FDA]."], ["Severe", "Gradually up to 300 mg/day if necessary; little extra benefit above 300 mg/day [FDA]."], ["Very mild", "25–50 mg/day may suffice [FDA]."], ["Once-daily schedule", "Maximum 150 mg/day, at bedtime; the 150 mg capsule is for maintenance only [FDA]."]],
  paed: { tiers: ["Under 12 years: not recommended [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Elderly: start low. Avoid with MAOIs (within 14 days); CYP2D6 inhibitors raise levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Deaths may occur; arrhythmias, QRS widening, hypotension, convulsions, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "LD50 oral: rat 147 mg/kg, mouse 135 mg/kg [PubChem].", manage: "ECG monitoring; sodium bicarbonate for QRS widening; supportive care [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity (possible cross-sensitivity with other dibenzoxepines) [FDA].", "Glaucoma [FDA].", "Tendency to urinary retention [FDA]."],
  ae: { common: ["Drowsiness, dry mouth, blurred vision, constipation, weight gain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts in young people [FDA]", "Arrhythmia, orthostatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Urinary retention [FDA]", "Seizures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality, especially early; ECG in cardiac disease or elderly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "doxepin", indication_id: "dep", label: "Depression/anxiety — start 75 mg/day", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 25, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Usual 75–150 mg/day", "Once-daily maximum 150 mg at bedtime; divided doses up to 300 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Doxepin hydrochloride capsules USP — FDA label (DailyMed)", D3_DM("06e027bb-516d-4a1d-b5a0-a66c051eb367")], ["PubChem", "Doxepin — PubChem CID 3158 (toxicity)", "https://pubchem.ncbi.nlm.nih.gov/compound/3158"], D3_BT],
  dose: { tagline: "Sedating tricyclic antidepressant — not in glaucoma or urinary retention.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of doxepin hydrochloride or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior [FDA].",
    adult: [{ ind: "Depression / anxiety", text: "75 mg/day, usual 75–150 mg; up to 300 mg/day in divided doses.", calc: ["dep"] }],
    child: [{ ind: "Children", text: "Not recommended under 12 years." }] }
});

/* ---------- DOXERCALCIFEROL (FDA injection ANDA215810) ---------- */
FDB_M("doxercalciferol", {
  inn: "Doxercalciferol", atc: "H05BX03", cls: "Synthetic vitamin D2 analogue",
  linked: [],
  forms: ["Injection 4 mcg/2 mL (2 mcg/mL) vial [FDA]; oral capsules in other labels.", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Activated in the liver to 1α,25-dihydroxyvitamin D2, which suppresses PTH synthesis and secretion [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Requires hepatic activation — patients with hepatic impairment may not metabolise it properly [FDA]."],
  ind: { adult: ["Secondary hyperparathyroidism in adults with CKD on dialysis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Dialysis patients (IV)", "Start 4 mcg IV bolus three times weekly at the end of dialysis, no more often than every other day; maximum 18 mcg per week. Titrate to intact PTH and keep calcium normal [FDA]."], ["Before starting", "Serum calcium must not be above the upper limit of normal [FDA]."]],
  paed: { tiers: ["Not established — safety and efficacy in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "For dialysis patients [FDA].", hepatic: "Monitor PTH, calcium and phosphorus more closely [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Digoxin toxicity is worsened by hypercalcaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypercalcaemia, hypercalciuria, hyperphosphataemia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the drug; low-calcium diet; manage hypercalcaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypercalcaemia [FDA].", "Vitamin D toxicity [FDA].", "Known hypersensitivity to doxercalciferol or ingredients [FDA]."],
  ae: { common: ["Oedema, headache, malaise, nausea, dyspnoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypercalcaemia [FDA]", "Adynamic bone disease with over-suppression of PTH [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"] },
  monitor: ["Intact PTH, calcium and phosphorus — weekly during titration [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "doxercalciferol", indication_id: "hd", label: "Dialysis SHPT — 4 mcg IV three times weekly (max 18 mcg/week)", route: "IV", population: D3_ADULT, basis: "fixed", dose: { value: 4, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 4, unit: "mcg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 2, unit: "mcg/mL" }], rounding: "0.1 mL", renal: [], flags: ["At the end of dialysis, no more often than every other day", "Maximum 18 mcg per week", "Calcium must be normal before starting"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Doxercalciferol injection — FDA label (DailyMed)", D3_DM("7d07fa4f-f2a2-4c2b-86bf-c0a4691c1a0a")], D3_BT],
  dose: { tagline: "IV vitamin D analogue after dialysis — keep calcium normal.",
    adult: [{ ind: "Secondary hyperparathyroidism (dialysis)", text: "4 mcg IV three times weekly after dialysis; maximum 18 mcg/week.", calc: ["hd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DOXORUBICIN (FDA conventional injection ANDA203622) ---------- */
FDB_M("doxorubicin", {
  inn: "Doxorubicin", atc: "L01DB01", cls: "Anthracycline (topoisomerase II inhibitor)", risk: "High-alert — antineoplastic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Injection 2 mg/mL (10 mg/5 mL, 20 mg/10 mL, 50 mg/25 mL, 200 mg/100 mL) [FDA]; pegylated liposomal doxorubicin is a different product with different doses.", "Bhutan: doxorubicin 10 mg powder for injection [BT-NEML]."],
  moa: "Intercalates DNA and inhibits topoisomerase II [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic and biliary elimination — reduce dose when bilirubin is raised [FDA]."],
  ind: { adult: ["Adjuvant breast cancer (with cyclophosphamide) [FDA].", "Leukaemias, lymphomas, Wilms tumour, neuroblastoma, sarcomas, and breast, ovarian, bladder, thyroid, gastric and lung cancers [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Used in childhood cancers — specialist protocols [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Adjuvant breast cancer", "60 mg/m² IV on day 1 of each 21-day cycle with cyclophosphamide, for 4 cycles [FDA]."], ["Single agent", "60–75 mg/m² IV every 21 days [FDA]."], ["Combination", "40–75 mg/m² IV every 21–28 days [FDA]."], ["Raised bilirubin", "1.2–3 mg/dL: reduce by 50%; 3.1–5 mg/dL: reduce by 75%; over 5 mg/dL: do not give [FDA]."]],
  paed: { tiers: ["Children: specialist protocol doses; cardiotoxicity risk is higher [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "No adjustment stated in the label [NEP].", hepatic: "Reduce by bilirubin (table); contraindicated in Child-Pugh C or bilirubin over 5 mg/dL [FDA].", pregnancy: "Can cause fetal harm; verify pregnancy status before starting [FDA].", other: "Cumulative dose limits cardiotoxicity; dexrazoxane may be used for cardioprotection [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe myelosuppression, mucositis; a 10-fold overdose (300 mg/m²) has been described [FDA].", animal: "LD50: rat IV 12.6 mg/kg; mouse oral 570 mg/kg [PubChem].", manage: "Supportive: transfusions, antibiotics, G-CSF, mucositis care [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe myocardial insufficiency [FDA].", "Recent myocardial infarction (within 4–6 weeks) [FDA].", "Severe persistent drug-induced myelosuppression [FDA].", "Severe hepatic impairment (Child-Pugh C or bilirubin over 5 mg/dL) [FDA].", "Severe hypersensitivity to doxorubicin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Alopecia, nausea, vomiting, mucositis, red urine, neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiomyopathy (dose-related) [FDA]", "Secondary AML and MDS [FDA]", "Extravasation necrosis [FDA]", "Severe myelosuppression [FDA]"] },
  monitor: ["LVEF before and during treatment; blood counts before each dose; bilirubin; pregnancy test [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: doxorubicin 10 mg powder for injection [BT-NEML].", strengths: "10 mg vial.", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "doxorubicin", indication_id: "m60", label: "Doxorubicin 60 mg/m² IV (adjuvant breast, with cyclophosphamide)", route: "IV", population: D3_ADULT, basis: "mg_per_m2", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Every 21 days for 4 cycles", "Bilirubin 1.2–3: reduce by 50%; 3.1–5: reduce by 75%; over 5: do not give", "Track cumulative dose"], sources: ["FDA"] },
    { drug: "doxorubicin", indication_id: "single", label: "Single agent — 60–75 mg/m² IV every 21 days", route: "IV", population: D3_ADULT, basis: "mg_per_m2", dose: { value: 60, unit: "mg", per: "dose", value_max: 75 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Bilirubin 1.2–3: reduce by 50%; 3.1–5: reduce by 75%; over 5: do not give"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Doxorubicin hydrochloride injection USP — FDA label (DailyMed)", D3_DM("33ddfdb1-b4bc-464d-a186-49c4b156279f")], ["PubChem", "Doxorubicin — PubChem CID 31703 (toxicity)", "https://pubchem.ncbi.nlm.nih.gov/compound/31703"], D3_BT],
  dose: { tagline: "Anthracycline chemotherapy — cardiotoxic with cumulative dose; dose down for bilirubin.",
    boxedTitle: "Cardiomyopathy, secondary malignancies, extravasation and tissue necrosis, and severe myelosuppression",
    boxed: "Cardiomyopathy: Myocardial damage, including acute left ventricular failure, can occur with doxorubicin hydrochloride. The risk of cardiomyopathy is proportional to the cumulative exposure with incidence rates from 1% to 20% for cumulative doses ranging from 300 mg/m² to 500 mg/m² when doxorubicin hydrochloride is administered every 3 weeks. The risk of cardiomyopathy is further increased with concomitant cardiotoxic therapy. Assess left ventricular ejection fraction (LVEF) before and regularly during and after treatment with doxorubicin hydrochloride. Secondary Malignancies: Secondary acute myelogenous leukemia (AML) and myelodysplastic syndrome (MDS) occur at a higher incidence in patients treated with anthracyclines, including doxorubicin hydrochloride. Extravasation and Tissue Necrosis: Extravasation of doxorubicin hydrochloride can result in severe local tissue injury and necrosis requiring wide excision of the affected area and skin grafting. Immediately terminate the drug and apply ice to the affected area. Severe myelosuppression resulting in serious infection, septic shock, requirement for transfusions, hospitalization, and death may occur [FDA].",
    adult: [{ ind: "Adjuvant breast cancer", text: "60 mg/m² every 21 days × 4 with cyclophosphamide.", calc: ["m60"], bt: "Bhutan NEML: 10 mg powder for injection." }, { ind: "Other cancers", text: "60–75 mg/m² every 21 days alone; 40–75 mg/m² in combinations.", calc: ["single"] }],
    child: [{ ind: "Childhood cancers", text: "Specialist protocol doses." }] }
});

/* ---------- DRONABINOL (FDA capsules NDA018651) ---------- */
FDB_M("dronabinol", {
  inn: "Dronabinol (delta-9-THC)", atc: "A04AD10", cls: "Cannabinoid (antiemetic, appetite stimulant)",
  linked: [],
  forms: ["Capsules 2.5, 5, 10 mg in sesame oil [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Cannabinoid receptor (CB1) agonist [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["90–95% absorbed but extensive first-pass metabolism [FDA]."],
  ind: { adult: ["Anorexia with weight loss in AIDS [FDA].", "Chemotherapy-induced nausea and vomiting after failure of conventional antiemetics [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["AIDS anorexia", "Start 2.5 mg twice daily, 1 hour before lunch and dinner; titrate to effect (2.5–20 mg/day used in studies) [FDA]."], ["Chemotherapy nausea", "5 mg/m² 1–3 hours before chemotherapy, then every 2–4 hours after, for 4–6 doses per day; first dose on an empty stomach. Titrate in 2.5 mg/m² steps to a maximum of 15 mg/m² per dose [FDA]."]],
  paed: { tiers: ["Not established — children may be more sensitive [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Psychiatric effects, seizures, cardiovascular effects; controlled substance; additive CNS depression [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Drowsiness, euphoria, heightened sensory awareness, altered time perception, red eyes, dry mouth, tachycardia [FDA].", animal: "LD50 oral rat 730–1,270 mg/kg [PubChem].", manage: "Supportive; quiet environment, reassurance [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to dronabinol or sesame oil [FDA]."],
  ae: { common: ["Dizziness, euphoria, paranoid reactions, somnolence, abnormal thinking, nausea, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Neuropsychiatric reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypotension, tachycardia, syncope [FDA] [UNVERIFIED-KNOWLEDGE]", "Seizures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mental state, blood pressure, heart rate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dronabinol", indication_id: "aids", label: "AIDS anorexia — 2.5 mg twice daily before lunch and dinner", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "NEP", formulations: [{ form: "cap", strength: 2.5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["1 hour before lunch and dinner"], sources: ["FDA"] },
    { drug: "dronabinol", indication_id: "cinv", label: "Chemotherapy nausea — 5 mg/m² per dose (4–6 doses/day)", route: "PO", population: D3_ADULT, basis: "mg_per_m2", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest available capsule strength (2.5, 5, 10 mg)", renal: [], flags: ["1–3 h before chemotherapy, then every 2–4 h, 4–6 doses/day", "Maximum 15 mg/m² per dose"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dronabinol capsules — FDA label (DailyMed)", D3_DM("fd8c5d57-0173-4f62-8ff0-d8147986a976")], ["PubChem", "Dronabinol — PubChem CID 16078 (toxicity)", "https://pubchem.ncbi.nlm.nih.gov/compound/16078"], D3_BT],
  dose: { tagline: "THC capsule for AIDS anorexia and refractory chemotherapy nausea.",
    adult: [{ ind: "AIDS anorexia", text: "2.5 mg twice daily before lunch and dinner.", calc: ["aids"] }, { ind: "Chemotherapy nausea", text: "5 mg/m² before chemotherapy, then every 2–4 h (4–6 doses/day); maximum 15 mg/m² per dose.", calc: ["cinv"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DRONEDARONE (FDA MULTAQ NDA022425) ---------- */
FDB_M("dronedarone", {
  inn: "Dronedarone", atc: "C01BD07", cls: "Antiarrhythmic (multichannel blocker, amiodarone analogue)",
  linked: [],
  forms: ["Tablets 400 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks multiple ion channels and has anti-adrenergic effects (class I–IV properties) [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A metabolism — strong CYP3A inhibitors contraindicated [FDA]."],
  ind: { adult: ["Reduce hospitalisation for AF in patients in sinus rhythm with a history of paroxysmal or persistent AF [FDA]."], paed: ["Not established under 18 years [FDA]."] },
  adult: [["AF", "400 mg twice daily with the morning and evening meals [FDA]."], ["Before starting", "Stop class I or III antiarrhythmics and strong CYP3A inhibitors; exclude pregnancy [FDA]."]],
  paed: { tiers: ["Not established — safety and efficacy below 18 years have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Monitor renal function periodically (creatinine rises early) [FDA].", hepatic: "Contraindicated in severe hepatic impairment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated in pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Raises dabigatran, digoxin, statins and other levels; with dabigatran reduce dabigatran to 75 mg twice daily if CrCl 30–50 and avoid if CrCl 15–30 [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor rhythm and blood pressure; supportive [FDA]." },
  contra: ["Permanent AF [FDA].", "Symptomatic heart failure with recent decompensation requiring hospitalisation, or NYHA class IV [FDA].", "Second- or third-degree AV block or sick sinus syndrome without a pacemaker; heart rate under 50 [FDA] [UNVERIFIED-KNOWLEDGE].", "Strong CYP3A inhibitors; QT-prolonging drugs; QTc 500 ms or more [FDA] [UNVERIFIED-KNOWLEDGE].", "Liver or lung toxicity from previous amiodarone; severe hepatic impairment; pregnancy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, nausea, abdominal pain, asthenia, bradycardia, raised creatinine, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Death, stroke, heart failure in decompensated HF or permanent AF [FDA]", "Liver injury [FDA] [UNVERIFIED-KNOWLEDGE]", "Pulmonary toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG at least every 3 months; liver tests; creatinine; potassium and magnesium [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dronedarone", indication_id: "af", label: "AF (sinus rhythm maintenance) — 400 mg twice daily with meals", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 400, max_daily: 800, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Not in permanent AF or decompensated heart failure", "With morning and evening meals"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Multaq (dronedarone) — FDA label (DailyMed)", D3_DM("3bd4006a-8bad-4909-ac6d-b6d84390155c")], D3_BT],
  dose: { tagline: "AF rhythm drug — never in permanent AF or decompensated heart failure.",
    boxedTitle: "Increased risk of death, stroke and heart failure in patients with decompensated heart failure or permanent atrial fibrillation",
    boxed: "In patients with symptomatic heart failure and recent decompensation requiring hospitalization or NYHA Class IV heart failure, MULTAQ doubles the risk of death. MULTAQ is contraindicated in patients with symptomatic heart failure with recent decompensation requiring hospitalization or NYHA Class IV heart failure. In patients with permanent atrial fibrillation, MULTAQ doubles the risk of death, stroke and hospitalization for heart failure. MULTAQ is contraindicated in patients in atrial fibrillation (AF) who will not or cannot be cardioverted into normal sinus rhythm [FDA].",
    adult: [{ ind: "AF (sinus rhythm)", text: "400 mg twice daily with meals.", calc: ["af"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DROPERIDOL (FDA injection ANDA072123) ---------- */
FDB_M("droperidol", {
  inn: "Droperidol", atc: "N05AD08", cls: "Butyrophenone antiemetic / neuroleptic",
  linked: [],
  forms: ["Injection 2.5 mg/mL [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Dopamine D2 antagonist in the chemoreceptor trigger zone [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Reduce nausea and vomiting with surgical and diagnostic procedures (reserved for patients who fail other treatments) [FDA]."], paed: ["2–12 years [FDA]."] },
  adult: [["PONV", "Maximum initial dose 2.5 mg IM or slow IV; additional 1.25 mg doses with caution only if benefit outweighs risk [FDA]."], ["Monitoring", "ECG before use and for 2–3 hours after [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2–12 years: maximum initial dose 0.1 mg/kg [FDA].", "Under 2 years: not established [FDA]."], transition: "Adult dose.", calcNote: "2.5 mg/mL injection." },
  adj: { renal: "Use with caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Use with caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Not established in primary source. [NEP]", other: "Avoid with other QT-prolonging drugs, hypokalaemia, hypomagnesaemia, bradycardia; additive CNS depression [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "QT prolongation and serious arrhythmias (torsades), hypotension, extrapyramidal reactions [FDA].", animal: "LD50: dog IV 25 mg/kg; rabbit IV 11–13 mg/kg; rat IM 104–110 mg/kg [PubChem].", manage: "ECG monitoring; treat torsades (magnesium, pacing); fluids and vasopressors; anticholinergic for EPS [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known or suspected QT prolongation (QTc over 440 ms in males, 450 ms in females), including congenital long QT [FDA].", "Known hypersensitivity [FDA]."],
  ae: { common: ["Sedation, hypotension, tachycardia, restlessness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation, torsades, sudden death [FDA]", "Neuroleptic malignant syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Extrapyramidal reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["12-lead ECG before giving; ECG for 2–3 hours after; vital signs [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "droperidol", indication_id: "adult", label: "PONV adult — up to 2.5 mg IM/slow IV (then 1.25 mg with caution)", route: "IV/IM", population: D3_ADULT, basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 2.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 2.5, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["ECG before; avoid if QTc prolonged", "Additional 1.25 mg doses only with caution"], sources: ["FDA"] },
    { drug: "droperidol", indication_id: "child", label: "PONV 2–12 years — up to 0.1 mg/kg", route: "IV/IM", population: { min_age_months: 24, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 2.5, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 2.5, unit: "mg/mL" }], rounding: "0.02 mL", renal: [], flags: ["Maximum initial dose", "ECG before; avoid if QTc prolonged"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Droperidol injection USP — FDA label (DailyMed)", D3_DM("147e033d-d997-4ef6-8bb5-a9ba372590b2")], ["PubChem", "Droperidol — PubChem CID 3168 (toxicity)", "https://pubchem.ncbi.nlm.nih.gov/compound/3168"], D3_BT],
  dose: { tagline: "Antiemetic for refractory PONV — check the QTc first.",
    boxedTitle: "QT prolongation",
    boxed: "Cases of QT prolongation and/or torsade de pointes have been reported in patients receiving droperidol at doses at or below recommended doses. Some cases have occurred in patients with no known risk factors for QT prolongation and some cases have been fatal. Due to its potential for serious proarrhythmic effects and death, droperidol should be reserved for use in the treatment of patients who fail to show an acceptable response to other adequate treatments, either because of insufficient effectiveness or the inability to achieve an effective dose due to intolerable adverse effects from those drugs [FDA].",
    adult: [{ ind: "PONV", text: "Up to 2.5 mg IM or slow IV; then 1.25 mg with caution.", calc: ["adult"] }],
    child: [{ ind: "PONV 2–12 years", text: "Up to 0.1 mg/kg.", calc: ["child"] }] }
});

/* ---------- DROSPIRENONE (FDA SLYND progestin-only pill NDA211367) ---------- */
FDB_M("drospirenone", {
  inn: "Drospirenone", atc: "G03AC10", cls: "Progestin (spironolactone analogue) — progestin-only contraceptive",
  linked: [],
  forms: ["Tablets 4 mg (24 active white + 4 inert green) — SLYND; combined pills with ethinylestradiol in other labels [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Suppresses ovulation; has antimineralocorticoid and antiandrogenic activity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Can raise potassium (antimineralocorticoid) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prevention of pregnancy [FDA]."], paed: ["Postmenarchal adolescents: expected to be the same as adults [FDA]."] },
  adult: [["Contraception", "One tablet daily at the same time for 28 days: white active tablets days 1–24, green inert tablets days 25–28; start on day 1 of menses; begin each new pack the next day [FDA]."]],
  paed: { tiers: ["Postmenarchal females: same as adults [FDA]."], transition: "Adult regimen.", calcNote: "Fixed regimen — no calculator." },
  adj: { renal: "Contraindicated in renal impairment [FDA].", hepatic: "Contraindicated in liver tumours or hepatic impairment [FDA].", pregnancy: "Not for use in pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Check potassium in the first cycle if on drugs that raise potassium [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No serious effects reported; nausea, vomiting, vaginal bleeding may occur [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Renal impairment [FDA].", "Adrenal insufficiency [FDA].", "Presence or history of cervical cancer or progestin-sensitive cancers [FDA].", "Liver tumours or hepatic impairment [FDA].", "Undiagnosed abnormal uterine bleeding [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Irregular bleeding or spotting, acne, headache, breast pain, weight gain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Thromboembolism (not shown, but monitor) [FDA] [UNVERIFIED-KNOWLEDGE]", "Ectopic pregnancy if contraception fails [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Potassium if at risk; bleeding pattern; blood pressure [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Slynd (drospirenone) — FDA label (DailyMed)", D3_DM("db32bc55-f295-4d87-9dbb-0a2f45573dcf")], D3_BT],
  dose: { tagline: "Progestin-only pill (24 + 4) — not in kidney or liver disease or adrenal insufficiency.",
    adult: [{ ind: "Contraception", text: "One tablet daily: 24 active then 4 inert; start on day 1 of the period." }],
    child: [{ ind: "Postmenarchal adolescents", text: "As adults." }] }
});

/* ---------- DROXIDOPA (FDA NORTHERA NDA203202) ---------- */
FDB_M("droxidopa", {
  inn: "Droxidopa", atc: "C01CA27", cls: "Noradrenaline prodrug (vasopressor)",
  linked: [],
  forms: ["Capsules 100, 200, 300 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Converted by dopa-decarboxylase to noradrenaline, raising blood pressure [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Primarily renally cleared [FDA]."],
  ind: { adult: ["Symptomatic neurogenic orthostatic hypotension (Parkinson's disease, multiple system atrophy, pure autonomic failure, dopamine beta-hydroxylase deficiency, non-diabetic autonomic neuropathy) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Neurogenic orthostatic hypotension", "Start 100 mg three times daily (on rising, at midday, late afternoon at least 3 hours before bedtime); increase by 100 mg three times daily every 24–48 hours; maximum 600 mg three times daily (1,800 mg/day) [FDA]."], ["Supine hypertension", "Elevate the head of the bed; last dose at least 3 hours before bedtime [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "GFR under 30 mL/min: no dosing recommendation can be given [FDA].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Carbidopa may reduce effect; additive with other pressors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypertensive crisis (e.g. after 7,700 mg) [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis may help [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of hypersensitivity to droxidopa or ingredients [FDA]."],
  ae: { common: ["Headache, dizziness, nausea, hypertension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Supine hypertension [FDA]", "Hyperpyrexia and confusion (NMS-like) [FDA] [UNVERIFIED-KNOWLEDGE]", "Worsening ischaemic heart disease, arrhythmia, heart failure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Supine blood pressure before starting and with each dose increase [FDA]."],
  local: { neml: D3_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "droxidopa", indication_id: "noh", label: "Neurogenic orthostatic hypotension — start 100 mg three times daily", route: "PO", population: D3_ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 600, max_daily: 1800, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "GFR under 30: no dosing recommendation in the label [FDA]" }], flags: ["Doses on rising, midday, late afternoon — last at least 3 h before bed", "Increase by 100 mg three times daily every 24–48 h; maximum 600 mg three times daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Northera (droxidopa) — FDA label (DailyMed)", D3_DM("2179f02c-48d7-48eb-8007-5ae43d8d16bc")], D3_BT],
  dose: { tagline: "Raises standing BP in neurogenic orthostatic hypotension — watch supine BP.",
    boxedTitle: "Supine hypertension",
    boxed: "Monitor supine blood pressure prior to and during treatment and more frequently when increasing doses. Elevating the head of the bed lessens the risk of supine hypertension, and blood pressure should be measured in this position. If supine hypertension cannot be managed by elevation of the head of the bed, reduce or discontinue NORTHERA [FDA].",
    adult: [{ ind: "Neurogenic orthostatic hypotension", text: "100 mg three times daily; up to 600 mg three times daily.", calc: ["noh"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* Brand names — BATCH D3 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"dipyridamole":{"IN":[],"BD":[["Santinal MR","UniMed UniHealth Pharmaceuticals Ltd","200 mg"]],"src":["https://medex.com.bd/brands/16542/santinal-mr-200-mg-mr-capsule"]},"diroximel-fumarate":{"IN":[],"BD":[["Deroximel DR","Renata PLC","231 mg"]],"src":["https://medex.com.bd/brands/35334/deroximel-dr-231-mg-ec-capsule"]},"disopyramide":{"IN":[["Norpace","Rpg Life Sciences Ltd","Norpace New Strip Of 10 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/norpace-new-strip-of-10-capsules-486751"]},"docetaxel":{"IN":[["Adoxi","Adley Formulation","Adoxi 20Mg Injection Vial Of 0.5 Ml Injection"],["Docshil","Shilpa Medicare Limited","Docshil Rtu 20 Mg Inj"],["Taxocare","Intas Pharmaceuticals Ltd","Taxocare 20Mg Injection"]],"BD":[["Taxedol","Beximco Pharmaceuticals PLC","20 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/adoxi-20mg-inj-99498","https://pharmeasy.in/online-medicine-order/docshil-rtu-20-mg-inj-4133765","https://pharmeasy.in/online-medicine-order/taxocare-20mg-inj-70123","https://medex.com.bd/brands/31437/taxedol-20-mg-iv-infusion"]},"docosanol":{"IN":[],"BD":[["Lafrost","Incepta Pharmaceuticals Ltd","10%"]],"src":["https://medex.com.bd/brands/39505/lafrost-10-cream"]},"donepezil":{"IN":[["Donzinol","Knoll Healthcare Pvt Ltd","Donzinol 5Mg Strip Of 10 Tablets"],["Donep","Alkem Laboratories Ltd","Donep 10Mg Strip Of 15 Tablets"],["Aricep","Eisai Pharmaceuticals","Aricep 10Mg Strip Of 10 Tablets"]],"BD":[["Ameloss","Incepta Pharmaceuticals Ltd","5 mg"],["Dimenta","Healthcare Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/donzinol-5mg-strip-of-10-tablets-2936465","https://pharmeasy.in/online-medicine-order/donep-10mg-strip-of-15-tablets-188161","https://pharmeasy.in/online-medicine-order/aricep-10mg-tablet-35293","https://medex.com.bd/brands/5181/ameloss-5-mg-tablet","https://medex.com.bd/brands/35492/dimenta-5-mg-tablet"]},"doxazosin":{"IN":[["Alfazosin","Aurobindo Pharma Ltd","Alfazosin 1Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/alfazosin-1mg-tablet-71024"]},"doxercalciferol":{"IN":[],"BD":[["Doxerol","Advanced Chemical Industries PLC","2 mcg/ml"]],"src":["https://medex.com.bd/brands/37213/doxerol-2-mcg-injection"]},"doxorubicin":{"IN":[["Lipodox","Sun Pharma","Lipodox Injection 25Ml"]],"BD":[["Dobixin","Drug International Ltd","2 mg/ml"],["Adribin","Healthcare Pharmaceuticals Ltd","2 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/lipodox-inj-25ml-86355","https://medex.com.bd/brands/28368/dobixin-2-mg-iv-infusion","https://medex.com.bd/brands/28654/adribin-2-mg-iv-infusion"]},"dronedarone":{"IN":[["Multaq","Sanofi","Multaq 400Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/multaq-400mg-tablet-87155"]},"drospirenone":{"IN":[["Dronis","Sun Pharma","Dronis P Strip Of 24 Tablets"]],"BD":[["Dancy","Ziska Pharmaceuticals Ltd","4 mg"],["Aleena","Healthcare Pharmaceuticals Ltd","4 mg"],["Droslyn","Incepta Pharmaceuticals Ltd","4 mg"]],"src":["https://pharmeasy.in/online-medicine-order/dronis-p-strip-of-24-tablets-3622563","https://medex.com.bd/brands/34402/dancy-4-mg-tablet","https://medex.com.bd/brands/35490/aleena-4-mg-tablet","https://medex.com.bd/brands/32397/droslyn-4-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
