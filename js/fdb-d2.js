/* Clinical Disease Guide — Drug monograph database, block D, batch 2 (25 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Deferred from this run (combination-only or wrong FDA label): diastase, dexpanthenol, dienogest, difenoxin, dihydrocodeine, dextromethorphan. */

/* ================= Batch D-2 (fdb-d2.js) ================= */
const D2_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const D2_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";

/* ---------- DEXAMFETAMINE (FDA XELSTRYM transdermal NDA215401, Noven) ---------- */
FDB_M("dexamfetamine", {
  inn: "Dexamfetamine (dextroamphetamine)", atc: "N06BA02", cls: "CNS stimulant (amphetamine)",
  linked: [],
  forms: ["Transdermal system 4.5, 9, 13.5, 18 mg/9 hours (XELSTRYM) [FDA]; oral tablets and solution exist in other labels.", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Releases noradrenaline and dopamine from presynaptic terminals and blocks their reuptake [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Apply 2 hours before effect is needed; remove within 9 hours [FDA].", "Renally excreted — lower maximum in severe renal impairment and ESRD [FDA]."],
  ind: { adult: ["Attention-deficit/hyperactivity disorder (ADHD) [FDA]."], paed: ["ADHD in children 6–17 years [FDA]."] },
  adult: [["ADHD (patch)", "Start 9 mg/9 hours; maximum 18 mg/9 hours. Apply one patch 2 hours before effect is needed and remove within 9 hours; one patch per 24 hours [FDA]."], ["Switching", "Do not substitute for other amphetamine products mg for mg [FDA]."]],
  paed: { tiers: ["6–17 years: start 4.5 mg/9 hours; increase weekly by 4.5 mg to a maximum of 18 mg/9 hours [FDA].", "Under 6 years: not established [FDA]."], transition: "Adult start 9 mg/9 hours.", calcNote: "Patch strengths 4.5, 9, 13.5, 18 mg/9 h." },
  adj: { renal: "Severe renal impairment: maximum 13.5 mg/9 hours. ESRD: maximum 9 mg/9 hours [FDA].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Amphetamine use in pregnancy can cause premature delivery and low birth weight; breastfeeding not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Assess cardiac disease, family history of sudden death, tics and Tourette syndrome before starting [FDA]. Avoid heat on the patch site [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Sympathomimetic toxicity: tachyarrhythmia, hypertension or hypotension, vasospasm, MI, aortic dissection, agitation, hallucinations, serotonin syndrome, seizures, rhabdomyolysis, hyperthermia [FDA].", animal: "LD50 oral: rat 38–96.8 mg/kg, mouse 40 mg/kg [PubChem].", manage: "Remove the patch; supportive care; contact poison control [FDA]." },
  contra: ["Hypersensitivity to amphetamine products (anaphylaxis, SJS, angioedema reported) [FDA].", "Taking an MAOI or within 14 days of stopping one (hypertensive crisis) [FDA]."],
  ae: { common: ["Decreased appetite, insomnia, headache, abdominal pain, weight loss, irritability, application-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Abuse, misuse and addiction [FDA]", "Sudden death, stroke, MI in patients with heart disease [FDA]", "Psychosis or mania [FDA]", "Growth suppression in children [FDA]", "Peripheral vasculopathy including Raynaud's [FDA]"] },
  monitor: ["Blood pressure and heart rate; growth (height and weight) in children; signs of abuse [FDA]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dexamfetamine", indication_id: "adult", label: "ADHD adult — start 9 mg/9 h patch daily", route: "TD", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 9, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 18, max_daily: 18, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "patch", strength: 9, unit: "mg/patch" }], rounding: "Whole patch", renal: [], renal_note: "Severe renal impairment: maximum 13.5 mg/9 h; ESRD: maximum 9 mg/9 h [FDA]", flags: ["Wear up to 9 hours, one patch per 24 hours", "Maximum 18 mg/9 h"], sources: ["FDA"] },
    { drug: "dexamfetamine", indication_id: "child", label: "ADHD 6–17 years — start 4.5 mg/9 h patch daily", route: "TD", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 4.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 18, max_daily: 18, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "patch", strength: 4.5, unit: "mg/patch" }], rounding: "Whole patch", renal: [], renal_note: "Severe renal impairment: maximum 13.5 mg/9 h; ESRD: maximum 9 mg/9 h [FDA]", flags: ["Increase weekly by 4.5 mg", "Maximum 18 mg/9 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Xelstrym (dextroamphetamine transdermal system) — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0862f02a-72a8-41cc-8845-57cf4974bb6f"], ["PubChem", "Dextroamphetamine — PubChem CID 5826 (toxicity)", "https://pubchem.ncbi.nlm.nih.gov/compound/5826"], D2_BT],
  dose: { tagline: "Stimulant patch for ADHD — controlled drug with abuse potential.",
    boxedTitle: "Abuse, misuse, and addiction",
    boxed: "XELSTRYM has a high potential for abuse and misuse, which can lead to the development of a substance use disorder, including addiction. Misuse and abuse of CNS stimulants, including XELSTRYM, can result in overdose and death, and this risk is increased with higher doses or unapproved methods of administration, such as snorting or injection. Before prescribing XELSTRYM, assess each patient's risk for abuse, misuse, and addiction. Educate patients and their families about these risks, proper storage of the drug, and proper disposal of any unused drug. Throughout XELSTRYM treatment, reassess each patient's risk of abuse, misuse, and addiction and frequently monitor for signs and symptoms of abuse, misuse, and addiction [FDA].",
    adult: [{ ind: "ADHD", text: "9 mg/9 h patch, up to 18 mg/9 h; wear up to 9 hours.", calc: ["adult"] }],
    child: [{ ind: "ADHD 6–17 years", text: "4.5 mg/9 h patch, increase weekly by 4.5 mg; maximum 18 mg/9 h.", calc: ["child"] }] }
});

/* ---------- DEXCHLORPHENIRAMINE (FDA Corphena oral solution ANDA202520) ---------- */
FDB_M("dexchlorpheniramine", {
  inn: "Dexchlorpheniramine", atc: "R06AB02", cls: "First-generation (sedating) antihistamine",
  linked: [],
  forms: ["Oral solution 2 mg/5 mL [FDA].", "Bhutan: not on the NEML (chlorphenamine is the NEML antihistamine) [BT-NEML]."],
  moa: "H1-receptor antagonist; the active d-isomer of chlorphenamine [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Allergic rhinitis, allergic conjunctivitis, urticaria, angioedema, dermatographism; adjunct to adrenaline in anaphylaxis; allergic reactions to blood or plasma [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Same, from 2 years [FDA]."] },
  adult: [["Allergy (12 years and older)", "2 mg (5 mL) every 4–6 hours [FDA]."]],
  paed: { tiers: ["6–11 years: 1 mg (2.5 mL) every 4–6 hours [FDA].", "2–5 years: 0.5 mg (1.25 mL) every 4–6 hours [FDA].", "Newborn or premature infants: contraindicated [FDA]."], transition: "12 years and over: adult dose.", calcNote: "2 mg/5 mL solution." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Contraindicated in nursing mothers [FDA].", other: "Additive sedation with alcohol and CNS depressants; MAOIs prolong anticholinergic effects [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "CNS depression or stimulation (stimulation particularly in children); atropine-like signs — dry mouth, fixed dilated pupils, flushing [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; vasopressors for hypotension; do not use stimulants [FDA]." },
  contra: ["Newborn or premature infants [FDA].", "Nursing mothers [FDA].", "Lower respiratory tract symptoms including asthma [FDA].", "Hypersensitivity to dexchlorpheniramine or similar antihistamines [FDA].", "Patients on MAOIs [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Sedation, dizziness, dry mouth, thickened bronchial secretions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Paradoxical excitation in children [FDA]", "Urinary retention, raised intraocular pressure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sedation; avoid driving [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dexchlorpheniramine", indication_id: "a12", label: "12 years and over — 2 mg every 4–6 h", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "soln", strength: 2, unit: "mg/5mL" }], rounding: "0.5 mL", renal: [], flags: ["Every 4 to 6 hours"], sources: ["FDA"] },
    { drug: "dexchlorpheniramine", indication_id: "c6", label: "6–11 years — 1 mg every 4–6 h", route: "PO", population: { min_age_months: 72, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 1, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "soln", strength: 2, unit: "mg/5mL" }], rounding: "0.5 mL", renal: [], flags: ["Every 4 to 6 hours"], sources: ["FDA"] },
    { drug: "dexchlorpheniramine", indication_id: "c2", label: "2–5 years — 0.5 mg every 4–6 h", route: "PO", population: { min_age_months: 24, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 0.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "soln", strength: 2, unit: "mg/5mL" }], rounding: "0.25 mL", renal: [], flags: ["Every 4 to 6 hours", "Not in newborns or premature infants"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Corphena (dexchlorpheniramine maleate oral solution) — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4694616b-4ef4-28a4-e063-6394a90ac5f6"], D2_BT],
  dose: { tagline: "Sedating antihistamine — not in newborns, nursing mothers or asthma.",
    cautionTitle: "Use with care",
    caution: "This drug should not be used in newborn or premature infants. Antihistamines should NOT be used to treat lower respiratory tract symptoms including asthma [FDA].",
    adult: [{ ind: "Allergy", text: "2 mg (5 mL) every 4–6 hours.", calc: ["a12"] }],
    child: [{ ind: "Allergy", text: "6–11 years 1 mg; 2–5 years 0.5 mg; every 4–6 hours.", calc: ["c6", "c2"] }] }
});

/* ---------- DEXLANSOPRAZOLE (FDA delayed-release capsules NDA022287) ---------- */
FDB_M("dexlansoprazole", {
  inn: "Dexlansoprazole", atc: "A02BC06", cls: "Proton pump inhibitor (dual delayed-release)",
  linked: [],
  forms: ["Delayed-release capsules 30, 60 mg [FDA].", "Bhutan: not on the NEML (omeprazole is the NEML PPI) [BT-NEML]."],
  moa: "R-enantiomer of lansoprazole; irreversibly inhibits the gastric H+/K+-ATPase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Two release phases give two peak concentrations; take without regard to food [FDA]."],
  ind: { adult: ["Healing of erosive oesophagitis (EE) [FDA].", "Maintenance of healed EE and relief of heartburn [FDA].", "Symptomatic non-erosive GERD [FDA]."], paed: ["12–17 years: same indications [FDA]."] },
  adult: [["Healing of EE", "60 mg once daily up to 8 weeks [FDA]."], ["Maintenance of healed EE", "30 mg once daily [FDA]."], ["Non-erosive GERD", "30 mg once daily for 4 weeks [FDA]."], ["Administration", "Swallow whole; may open and sprinkle on applesauce, or give in 20 mL water by oral syringe or NG tube [FDA]."]],
  paed: { tiers: ["12–17 years: same doses as adults [FDA].", "Under 12 years: not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "12 years and over: adult dose.", calcNote: "30 and 60 mg capsules." },
  adj: { renal: "No adjustment stated in the label [NEP].", hepatic: "Moderate (Child-Pugh B): EE healing 30 mg once daily up to 8 weeks. Severe (Child-Pugh C): not recommended [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Contraindicated with rilpivirine [FDA]. Long-term PPI risks: C. difficile diarrhoea, fractures, low magnesium, B12 deficiency [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No significant overdose reports; 120 mg multiple doses and a 300 mg single dose caused no deaths [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; not removed by haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity (anaphylaxis, angioedema, bronchospasm, acute tubulointerstitial nephritis, urticaria) [FDA].", "Rilpivirine-containing products [FDA]."],
  ae: { common: ["Diarrhoea, abdominal pain, nausea, upper respiratory infection, vomiting, flatulence [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute tubulointerstitial nephritis [FDA]", "C. difficile–associated diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Bone fracture with long-term use [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypomagnesaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Magnesium with long-term use or digoxin/diuretics [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dexlansoprazole", indication_id: "ee", label: "Healing of erosive oesophagitis — 60 mg once daily (up to 8 weeks)", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 60, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Moderate hepatic impairment: 30 mg", "Severe hepatic impairment: not recommended"], sources: ["FDA"] },
    { drug: "dexlansoprazole", indication_id: "maint", label: "Maintenance of healed EE / non-erosive GERD — 30 mg once daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 30, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 30, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Non-erosive GERD: 4 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dexlansoprazole delayed-release capsules — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7c7698da-3cda-4301-ae93-02fb64b9c90d"], D2_BT],
  dose: { tagline: "Once-daily PPI that can be taken with or without food.",
    adult: [{ ind: "Erosive oesophagitis", text: "60 mg once daily up to 8 weeks, then 30 mg once daily.", calc: ["ee", "maint"] }, { ind: "Non-erosive GERD", text: "30 mg once daily for 4 weeks.", calc: ["maint"] }],
    child: [{ ind: "12–17 years", text: "Adult doses.", calc: ["ee", "maint"] }] }
});

/* ---------- DEXMEDETOMIDINE (FDA PRECEDEX NDA021038, Hospira) ---------- */
FDB_M("dexmedetomidine", {
  inn: "Dexmedetomidine", atc: "N05CM18", cls: "Selective alpha-2 adrenergic agonist sedative", risk: "High-alert — IV moderate sedation agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Ready-to-use 4 mcg/mL in 0.9% sodium chloride (200 mcg/50 mL, 400 mcg/100 mL) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Relatively selective central alpha-2 adrenoceptor agonist with sedative properties [FDA].",
  pk: ["Hepatic metabolism; clearance lower in hepatic impairment and the elderly [FDA]."],
  ind: { adult: ["Sedation of initially intubated and mechanically ventilated adults in intensive care (infusion not over 24 hours) [FDA].", "Sedation of non-intubated adults before and during surgical and other procedures [FDA]."], paed: ["Sedation of children 1 month to under 18 years before and during non-invasive procedures [FDA]."] },
  adult: [["ICU sedation", "Loading 1 mcg/kg over 10 minutes (may not be needed when converting from another sedative), then 0.2–0.7 mcg/kg/hour [FDA]."], ["Procedural sedation", "Loading 1 mcg/kg over 10 minutes, then start 0.6 mcg/kg/hour, titrated within 0.2–1 mcg/kg/hour [FDA]."], ["Over 65 years / awake fiberoptic intubation", "Alternative loading 0.5 mcg/kg over 10 minutes; consider dose reduction [FDA]."], ["Limits", "Controlled infusion device; not for infusions longer than 24 hours [FDA]."]],
  paed: { tiers: ["1 month to under 2 years: 1.5 mcg/kg over 10 minutes, then 1.5 mcg/kg/hour, titrated 0.5–1.5 mcg/kg/hour [FDA].", "2 to under 18 years: 2 mcg/kg over 10 minutes, then 1.5 mcg/kg/hour, titrated 0.5–1.5 mcg/kg/hour [FDA].", "Under 1 month: not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "18 years and over: adult dose.", calcNote: "Loading dose only; infusion rate shown as text." },
  adj: { renal: "No adjustment stated in the label [NEP].", hepatic: "Consider dose reduction in hepatic impairment [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Over 65 years: consider dose reduction [FDA]. Additive effects with anaesthetics, sedatives, opioids [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "First- and second-degree AV block at concentrations about 13 times the upper therapeutic range [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce or stop the infusion; treat bradycardia and hypotension (atropine, fluids, vasopressors) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Hypotension, bradycardia, dry mouth, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bradycardia and sinus arrest, some fatal [FDA]", "Hypotension [FDA]", "Withdrawal (agitation, hypertension) after prolonged use [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Continuous heart rate, blood pressure and oxygen saturation [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dexmedetomidine", indication_id: "load_adult", label: "Adult ICU or procedural sedation — loading 1 mcg/kg over 10 min", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 4, unit: "mcg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Over 65 years or awake fiberoptic intubation: 0.5 mcg/kg", "Then 0.2–0.7 mcg/kg/h (ICU) or 0.2–1 mcg/kg/h (procedural)"], sources: ["FDA"] },
    { drug: "dexmedetomidine", indication_id: "load_infant", label: "1 month to under 2 years — loading 1.5 mcg/kg over 10 min", route: "IV", population: { min_age_months: 1, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1.5, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 4, unit: "mcg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Then 1.5 mcg/kg/h, titrate 0.5–1.5 mcg/kg/h"], sources: ["FDA"] },
    { drug: "dexmedetomidine", indication_id: "load_child", label: "2 to under 18 years — loading 2 mcg/kg over 10 min", route: "IV", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 4, unit: "mcg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Then 1.5 mcg/kg/h, titrate 0.5–1.5 mcg/kg/h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Precedex (dexmedetomidine) — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=92b7ddaa-e45a-4b64-a802-bb5df8771dd6"], D2_BT],
  dose: { tagline: "Sedation without respiratory depression — watch for bradycardia and hypotension.",
    cautionTitle: "Use with care",
    caution: "Clinically significant episodes of bradycardia and sinus arrest have been reported. Reports of hypotension and bradycardia have been associated with PRECEDEX infusion. Some of these cases have resulted in fatalities [FDA].",
    adult: [{ ind: "ICU sedation", text: "1 mcg/kg over 10 min, then 0.2–0.7 mcg/kg/h (not over 24 h).", calc: ["load_adult"] }, { ind: "Procedural sedation", text: "1 mcg/kg over 10 min, then 0.6 mcg/kg/h (0.2–1).", calc: ["load_adult"] }],
    child: [{ ind: "Non-invasive procedures", text: "1 month–2 years 1.5 mcg/kg; 2–18 years 2 mcg/kg over 10 min; then 1.5 mcg/kg/h (0.5–1.5).", calc: ["load_infant", "load_child"] }] }
});

/* ---------- DEXMETHYLPHENIDATE (FDA extended-release capsules, Sandoz NDA021802) ---------- */
FDB_M("dexmethylphenidate", {
  inn: "Dexmethylphenidate", atc: "N06BA11", cls: "CNS stimulant (d-threo-methylphenidate)",
  linked: [],
  forms: ["Extended-release capsules 5–40 mg; immediate-release tablets 2.5, 5, 10 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks reuptake of noradrenaline and dopamine into presynaptic neurons [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Active enantiomer of methylphenidate — half the racemic dose gives a similar effect [FDA]."],
  ind: { adult: ["ADHD [FDA]."], paed: ["ADHD from 6 years [FDA]."] },
  adult: [["ADHD — new to methylphenidate (ER)", "10 mg once daily in the morning; increase weekly by 10 mg; maximum 40 mg/day [FDA]."], ["Already on methylphenidate", "Half the current total daily methylphenidate dose [FDA]."], ["Already on dexmethylphenidate IR", "Same total daily dose as ER [FDA]."], ["Administration", "Swallow whole or sprinkle capsule contents on applesauce [FDA]."]],
  paed: { tiers: ["6 years and over (ER): 5 mg once daily in the morning; increase weekly by 5 mg; maximum 30 mg/day [FDA].", "Under 6 years: not established [FDA]."], transition: "Adult start 10 mg; maximum 40 mg.", calcNote: "ER capsules." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Assess cardiac disease, family history of sudden death, tics and Tourette syndrome before starting [FDA]." },
  tox: { human: "Sympathomimetic toxicity: tachyarrhythmia, hypertension or hypotension, vasospasm, MI, agitation, hallucinations, seizures, hyperthermia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; contact poison control [FDA]." },
  contra: ["Hypersensitivity to methylphenidate (angioedema, anaphylaxis) [FDA].", "Taking an MAOI or within 14 days of stopping one [FDA]."],
  ae: { common: ["Decreased appetite, insomnia, headache, abdominal pain, anxiety, dry mouth [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Abuse, misuse and addiction [FDA]", "Sudden death, stroke, MI in heart disease [FDA]", "Psychosis or mania [FDA]", "Priapism [FDA] [UNVERIFIED-KNOWLEDGE]", "Growth suppression in children [FDA]"] },
  monitor: ["Blood pressure, heart rate, growth, signs of abuse [FDA]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dexmethylphenidate", indication_id: "adult", label: "ADHD adult (ER) — start 10 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, max_daily: 40, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Increase weekly by 10 mg; maximum 40 mg/day"], sources: ["FDA"] },
    { drug: "dexmethylphenidate", indication_id: "child", label: "ADHD 6–17 years (ER) — start 5 mg once daily", route: "PO", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 30, max_daily: 30, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Increase weekly by 5 mg; maximum 30 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dexmethylphenidate hydrochloride extended-release capsules — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=71f56227-d87a-4bc0-a879-c1993c6ccba6"], D2_BT],
  dose: { tagline: "Once-daily stimulant for ADHD — controlled drug with abuse potential.",
    boxedTitle: "Abuse, misuse, and addiction",
    boxed: "Dexmethylphenidate hydrochloride extended-release capsules has a high potential for abuse and misuse, which can lead to the development of a substance use disorder, including addiction. Misuse and abuse of CNS stimulants, including dexmethylphenidate hydrochloride extended-release capsules, can result in overdose and death, and this risk is increased with higher doses or unapproved methods of administration, such as snorting or injection [FDA].",
    adult: [{ ind: "ADHD", text: "10 mg ER once daily; up to 40 mg/day.", calc: ["adult"] }],
    child: [{ ind: "ADHD 6 years and over", text: "5 mg ER once daily; up to 30 mg/day.", calc: ["child"] }] }
});

/* ---------- DEXRAZOXANE (FDA dexrazoxane for injection ANDA200752, Eugia) ---------- */
FDB_M("dexrazoxane", {
  inn: "Dexrazoxane", atc: "V03AF02", cls: "Cardioprotective agent (iron chelator, topoisomerase II catalytic inhibitor)",
  linked: [],
  forms: ["Powder for injection 250 mg and 500 mg vials; reconstitute to 10 mg/mL [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Cyclic derivative of EDTA that penetrates cells and is converted to a ring-opened chelator, interfering with iron-mediated free-radical generation by anthracyclines [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — halve the dose when CrCl is under 40 mL/min [FDA]."],
  ind: { adult: ["Reducing incidence and severity of doxorubicin cardiomyopathy in women with metastatic breast cancer who have received a cumulative doxorubicin dose of 300 mg/m² and need continued doxorubicin [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Cardioprotection", "Ratio 10:1 to doxorubicin (e.g. 500 mg/m² dexrazoxane for 50 mg/m² doxorubicin), by slow IV push or rapid drip infusion; give doxorubicin within 30 minutes after dexrazoxane ends. Never give doxorubicin before dexrazoxane [FDA]."], ["Renal impairment", "CrCl under 40 mL/min: reduce by 50% (ratio 5:1, e.g. 250 mg/m² for 50 mg/m²) [FDA]."], ["Hepatic impairment", "Reduce in proportion to the doxorubicin reduction, keeping the 10:1 ratio [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "CrCl under 40 mL/min: 50% dose (5:1 ratio) [FDA].", hepatic: "Reduce proportionately with doxorubicin (keep 10:1) [FDA].", pregnancy: "Can cause fetal harm; avoid in pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Adds to chemotherapy myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No overdose data; maximum studied dose 1000 mg/m² every three weeks [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care for myelosuppression and infection; peritoneal or haemodialysis may help [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Use with non-anthracycline chemotherapy regimens [FDA]."],
  ae: { common: ["Myelosuppression (added to chemotherapy), nausea, injection-site pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe myelosuppression [FDA]", "Secondary malignancies [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity including anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts; cardiac function; renal function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dexrazoxane", indication_id: "cardio", label: "Cardioprotection — 500 mg/m² (10:1 to doxorubicin 50 mg/m²)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "1 mL", renal: [{ crcl_min: 0, crcl_max: 39.999, action: "reduce_dose", set_value: 250, note: "CrCl under 40: 50% dose (5:1 ratio)" }], renal_note: "CrCl under 40 mL/min: 250 mg/m² (5:1 ratio) [FDA]", flags: ["Dose follows the doxorubicin dose at a 10:1 ratio — this block assumes doxorubicin 50 mg/m²", "Give doxorubicin within 30 min after dexrazoxane"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dexrazoxane for injection — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=cb72203a-0b09-42d5-bf51-7f479feb3adb"], D2_BT],
  dose: { tagline: "Given before doxorubicin to protect the heart — dose is 10 times the doxorubicin dose.",
    adult: [{ ind: "Doxorubicin cardioprotection", text: "10:1 ratio to doxorubicin (500 mg/m² for 50 mg/m²); halve if CrCl under 40.", calc: ["cardio"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DEXTRAN 40 (FDA LMD in dextrose / sodium chloride, Hospira) ---------- */
FDB_M("dextran", {
  inn: "Dextran 40 (low-molecular-weight dextran)", atc: "B05AA05", cls: "Colloid plasma volume expander",
  linked: [],
  forms: ["10% dextran 40 in 5% dextrose or in 0.9% sodium chloride, 500 mL (50 g/500 mL) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Hypertonic colloid that draws water from the extravascular space and expands plasma volume [FDA].",
  pk: ["Renally excreted; raises urine specific gravity [FDA]."],
  ind: { adult: ["Adjunctive treatment of shock or impending shock due to haemorrhage, burns, surgery or other trauma (not a replacement for blood) [FDA].", "Priming fluid in pump oxygenators during extracorporeal circulation [FDA]."], paed: ["Not established in neonates [FDA]."] },
  adult: [["Shock (adults and adolescents)", "Total dose in the first 24 hours should not exceed 20 mL/kg; the first 10 mL/kg may be infused as rapidly as needed. After 24 hours, not more than 10 mL/kg/day, for no more than 5 days. Monitor central venous pressure [FDA]."], ["Anaphylactoid prevention", "Give 20 mL dextran 1 before dextran 40, per the dextran 1 insert [FDA]."]],
  paed: { tiers: ["Neonates: safety and effectiveness not established [FDA].", "Other children: Not established in primary source. [NEP]"], transition: "Adolescents: adult dose.", calcNote: "Volume in mL/kg — shown as text." },
  adj: { renal: "Contraindicated in renal disease with severe oliguria or anuria [FDA].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Hypertonic — give extra fluid to poorly hydrated patients. Excess can cause vascular overload [FDA]." },
  tox: { human: "Vascular overload, bleeding tendency [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop infusion; treat fluid overload [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to dextran [FDA].", "Marked haemostatic defects of all types (thrombocytopenia, hypofibrinogenaemia), including drug-induced (heparin, warfarin) [FDA].", "Marked cardiac decompensation [FDA].", "Renal disease with severe oliguria or anuria [FDA]."],
  ae: { common: ["Mild urticaria [FDA]."], serious: ["Severe and fatal anaphylactoid reactions [FDA]", "Acute renal failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Circulatory overload [FDA]"] },
  monitor: ["Central venous pressure, urine output, haematocrit (keep above 30%) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "LMD (dextran 40) in dextrose / sodium chloride — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3c273512-84e2-2cea-b201-12345a6bd1fe"], D2_BT],
  dose: { tagline: "Colloid volume expander — watch for anaphylactoid reactions and overload.",
    cautionTitle: "Use with care",
    caution: "Although infrequent, severe and fatal anaphylactoid reactions consisting of marked hypotension or cardiac and respiratory arrest have been reported, most of these reactions have occurred in patients not previously exposed to intravenous dextran and early in the infusion period [FDA].",
    adult: [{ ind: "Shock", text: "Up to 20 mL/kg in the first 24 h (first 10 mL/kg as fast as needed); then up to 10 mL/kg/day for no more than 5 days." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DIAZOXIDE (FDA PROGLYCEM oral suspension NDA017453) ---------- */
FDB_M("diazoxide", {
  inn: "Diazoxide", atc: "C02DA01 V03AH01", cls: "Non-diuretic benzothiadiazine; inhibits insulin release",
  linked: [],
  forms: ["Oral suspension 50 mg/mL, 30 mL with calibrated dropper [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Opens ATP-sensitive potassium channels in pancreatic beta cells, inhibiting insulin release [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 30 hours [FDA]."],
  ind: { adult: ["Hypoglycaemia due to hyperinsulinism (inoperable islet-cell adenoma or carcinoma, extrapancreatic malignancy) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Hyperinsulinaemic hypoglycaemia in infants and children (leucine sensitivity, islet-cell hyperplasia, nesidioblastosis, adenoma) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hyperinsulinism (adults and children)", "Start 3 mg/kg/day in 3 equal doses every 8 h or 2 doses every 12 h; titrate to a maximum of 8 mg/kg/day; refractory cases may need more [FDA]."], ["No response", "Stop if not effective after 2–3 weeks [FDA]."]],
  paed: { tiers: ["Infants and newborns: start 8 mg/kg/day in 3 doses every 8 h or 2 doses every 12 h; titrate to a maximum of 15 mg/kg/day [FDA].", "Children: start 3 mg/kg/day, maximum 8 mg/kg/day [FDA]."], transition: "Children use the adult mg/kg dose.", calcNote: "50 mg/mL suspension." },
  adj: { renal: "Lower dose may be needed (longer half-life) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Causes sodium and fluid retention — watch heart failure; pulmonary hypertension reported in infants [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Marked hyperglycaemia, possibly with ketoacidosis [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Insulin and fluids; prolonged surveillance up to 7 days because of the 30-hour half-life [FDA]." },
  contra: ["Functional hypoglycaemia [FDA].", "Hypersensitivity to diazoxide, excipients or other thiazides [FDA]."],
  ae: { common: ["Sodium and fluid retention, hypertrichosis, nausea, hyperglycaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pulmonary hypertension in newborns [FDA] [UNVERIFIED-KNOWLEDGE]", "Diabetic ketoacidosis, hyperosmolar coma [FDA] [UNVERIFIED-KNOWLEDGE]", "Heart failure from fluid retention [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood glucose closely until stable; urine ketones; weight and oedema [FDA]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "diazoxide", indication_id: "start", label: "Hyperinsulinism (child and adult) — start 3 mg/kg/day in 3 doses", route: "PO", population: { min_age_months: 12, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Or 2 doses every 12 h", "Titrate to maximum 8 mg/kg/day"], sources: ["FDA"] },
    { drug: "diazoxide", indication_id: "infant", label: "Infants and newborns — start 8 mg/kg/day in 3 doses", route: "PO", population: { min_age_months: 0, max_age_months: 12, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 8, unit: "mg", per: "day" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["Or 2 doses every 12 h", "Titrate to maximum 15 mg/kg/day", "Watch for pulmonary hypertension"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Proglycem (diazoxide oral suspension) — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b16c7832-2fd9-49af-b923-1dc0d91fd6e2"], D2_BT],
  dose: { tagline: "Raises blood glucose in hyperinsulinism — check glucose closely when starting.",
    adult: [{ ind: "Hyperinsulinism", text: "3 mg/kg/day in 2–3 doses; maximum 8 mg/kg/day.", calc: ["start"] }],
    child: [{ ind: "Infants and newborns", text: "8 mg/kg/day in 2–3 doses; maximum 15 mg/kg/day.", calc: ["infant"] }, { ind: "Children", text: "3 mg/kg/day in 2–3 doses; maximum 8 mg/kg/day.", calc: ["start"] }] }
});

/* ---------- DICLOFENAMIDE (US: dichlorphenamide; FDA KEVEYIS NDA011366) ---------- */
FDB_M("diclofenamide", {
  inn: "Diclofenamide (dichlorphenamide)", atc: "S01EC02", cls: "Carbonic anhydrase inhibitor",
  linked: [],
  forms: ["Tablets 50 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Carbonic anhydrase inhibitor; mechanism in periodic paralysis is unknown [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Primary hyperkalaemic periodic paralysis, primary hypokalaemic periodic paralysis and related variants [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Periodic paralysis", "Start 50 mg once or twice daily; adjust at weekly intervals (or sooner for adverse reactions). Total daily dose 50–200 mg [FDA]."], ["Review", "Evaluate response after 2 months [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Contraindicated in hepatic insufficiency (may aggravate hepatic encephalopathy) [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Check potassium and bicarbonate at baseline and periodically [FDA]." },
  tox: { human: "Drowsiness, anorexia, nausea, vomiting, dizziness, ataxia, tremor, tinnitus; hypokalaemia and hyperchloraemic metabolic acidosis [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; correct electrolytes and acidosis [FDA]." },
  contra: ["Hypersensitivity to dichlorphenamide or other sulfonamides [FDA].", "Concomitant high-dose aspirin [FDA].", "Severe pulmonary disease limiting compensation for metabolic acidosis [FDA].", "Hepatic insufficiency [FDA]."],
  ae: { common: ["Paraesthesia, cognitive disorder, dysgeusia, confusion [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypokalaemia [FDA]", "Metabolic acidosis [FDA]", "Sulfonamide hypersensitivity (SJS, TEN, blood dyscrasias) [FDA]", "Falls [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum potassium and bicarbonate at baseline and periodically [FDA]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "diclofenamide", indication_id: "pp", label: "Periodic paralysis — start 50 mg once or twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Once or twice daily", "Total 50–200 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Keveyis (dichlorphenamide) — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d30a87b9-90fb-35b2-e053-2995a90aea2c"], D2_BT],
  dose: { tagline: "For primary periodic paralysis — watch potassium and bicarbonate.",
    adult: [{ ind: "Periodic paralysis", text: "50 mg once or twice daily; 50–200 mg/day.", calc: ["pp"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DICLOXACILLIN (FDA dicloxacillin sodium capsules ANDA062286) ---------- */
FDB_M("dicloxacillin", {
  inn: "Dicloxacillin", atc: "J01CF01", cls: "Penicillinase-resistant penicillin",
  linked: [],
  forms: ["Capsules 250, 500 mg [FDA].", "Bhutan: not on the NEML (cloxacillin/flucloxacillin are the anti-staphylococcal penicillins used) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Bactericidal beta-lactam that resists staphylococcal penicillinase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Best absorbed on an empty stomach; renally excreted; probenecid raises levels [FDA]."],
  ind: { adult: ["Infections caused by penicillinase-producing staphylococci (not for initial therapy of serious life-threatening infections) [FDA]."], paed: ["Same; weight-based under 40 kg [FDA]."] },
  adult: [["Mild to moderate", "125 mg every 6 hours [FDA]."], ["Severe", "250 mg every 6 hours [FDA]."], ["Administration", "1 hour before or 2 hours after meals, with at least 120 mL water; not lying down or just before bed [FDA]."]],
  paed: { tiers: ["Under 40 kg — mild to moderate: 12.5 mg/kg/day in equal doses every 6 hours [FDA].", "Under 40 kg — severe: 25 mg/kg/day in equal doses every 6 hours [FDA].", "Newborns: may accumulate — monitor levels [FDA]."], transition: "40 kg and over: adult dose.", calcNote: "Capsules only in the label." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Oral therapy may follow IV therapy once the condition allows [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "LD50 IV mouse 0.9 g/kg; IP rat 0.63 g/kg (sodium salt) [PubChem].", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any penicillin [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, epigastric discomfort [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "C. difficile–associated diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Oesophageal injury if taken lying down [FDA]"] },
  monitor: ["Blood count, renal and liver tests on prolonged therapy [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dicloxacillin", indication_id: "adult_mod", label: "40 kg and over, mild to moderate — 125 mg every 6 h", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 40, max_weight_kg: null }, basis: "fixed", dose: { value: 125, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "actual", formulations: [], rounding: "As the label states", renal: [], flags: ["Empty stomach", "Label capsules are 250 mg and 500 mg — no 125 mg capsule in this label"], sources: ["FDA"] },
    { drug: "dicloxacillin", indication_id: "adult_sev", label: "40 kg and over, severe — 250 mg every 6 h", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 40, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "actual", formulations: [{ form: "cap", strength: 250, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Empty stomach", "Not initial therapy for life-threatening infection"], sources: ["FDA"] },
    { drug: "dicloxacillin", indication_id: "child_mod", label: "Under 40 kg, mild to moderate — 12.5 mg/kg/day in 4 doses", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: 40 }, basis: "mg_per_kg", dose: { value: 12.5, unit: "mg", per: "day" }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "actual", formulations: [], rounding: "As the label states", renal: [], flags: ["Newborns: monitor levels", "Label form is capsules only (250, 500 mg) — no liquid"], sources: ["FDA"] },
    { drug: "dicloxacillin", indication_id: "child_sev", label: "Under 40 kg, severe — 25 mg/kg/day in 4 doses", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: 40 }, basis: "mg_per_kg", dose: { value: 25, unit: "mg", per: "day" }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "actual", formulations: [], rounding: "As the label states", renal: [], flags: ["Newborns: monitor levels", "Label form is capsules only (250, 500 mg) — no liquid"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dicloxacillin sodium capsules — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9e2bbe03-44cb-45d1-acdb-b61d9016055e"], ["PubChem", "Dicloxacillin — PubChem CID 18381 (toxicity)", "https://pubchem.ncbi.nlm.nih.gov/compound/18381"], D2_BT],
  dose: { tagline: "Oral anti-staphylococcal penicillin — take on an empty stomach.",
    adult: [{ ind: "Staphylococcal infection", text: "125 mg (mild–moderate) or 250 mg (severe) every 6 hours.", calc: ["adult_mod", "adult_sev"] }],
    child: [{ ind: "Under 40 kg", text: "12.5 mg/kg/day (mild–moderate) or 25 mg/kg/day (severe) in 4 doses.", calc: ["child_mod", "child_sev"] }] }
});

/* ---------- DIFELIKEFALIN (FDA KORSUVA injection NDA214916) ---------- */
FDB_M("difelikefalin", {
  inn: "Difelikefalin", atc: "V03AX04", cls: "Peripherally acting kappa-opioid receptor agonist",
  linked: [],
  forms: ["Injection 65 mcg/1.3 mL (50 mcg/mL) single-dose vial [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Kappa-opioid receptor agonist acting on peripheral nerves and immune cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Removed by the dialyser — give after dialysis [FDA]."],
  ind: { adult: ["Moderate to severe pruritus associated with chronic kidney disease in adults on haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["CKD pruritus on haemodialysis", "0.5 mcg/kg by IV bolus into the venous line of the dialysis circuit at the end of each haemodialysis session. Volume (mL) = target dry body weight (kg) × 0.01, rounded to the nearest 0.1 mL [FDA]."], ["Missed dialysis", "Resume at the end of the next session [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "For haemodialysis patients only [FDA].", hepatic: "Severe hepatic impairment: not studied [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Not established in primary source. [NEP]", other: "Dizziness, somnolence — caution with CNS depressants and driving [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Doses up to 12 times recommended: dose-dependent dizziness, somnolence, mental status change [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; removed by haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, dizziness, nausea, gait disturbance including falls, hyperkalaemia, headache, somnolence [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Dizziness, somnolence, mental status change [FDA]", "Falls [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sedation and mental status [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "difelikefalin", indication_id: "hd", label: "CKD pruritus — 0.5 mcg/kg target dry weight after each haemodialysis", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.5, unit: "mcg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 50, unit: "mcg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Enter TARGET DRY body weight", "Give into the venous line at the end of each dialysis"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Korsuva (difelikefalin) — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0c7b81f2-0fd3-47cb-8b0f-185e07f19c87"], D2_BT],
  dose: { tagline: "Given after each haemodialysis session for CKD itch.",
    adult: [{ ind: "CKD pruritus (haemodialysis)", text: "0.5 mcg/kg target dry weight IV at the end of each session (dry weight × 0.01 = mL).", calc: ["hd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DIFLORASONE (FDA diflorasone diacetate ointment 0.05% ANDA075331) ---------- */
FDB_M("diflorasone", {
  inn: "Diflorasone", atc: "D07AC10", cls: "Topical corticosteroid (high potency)",
  linked: [],
  forms: ["Ointment and cream 0.05% (15, 30, 60 g) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Anti-inflammatory, antipruritic and vasoconstrictive corticosteroid actions [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Systemic absorption increases with occlusion, large areas, broken skin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Corticosteroid-responsive dermatoses (inflammatory and pruritic) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Dermatoses", "Apply a thin film to the affected area one to three times daily depending on severity [FDA]."], ["Occlusion", "May be used for psoriasis or recalcitrant conditions; stop occlusion if infection develops [FDA]."]],
  paed: { tiers: ["Not established — children have a greater risk of HPA-axis suppression and Cushing syndrome [FDA]."], transition: "Adult use.", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable (topical) [NEP].", hepatic: "Not applicable (topical) [NEP].", pregnancy: "Not established in primary source. [NEP]", other: "Avoid face, groin and axillae and long courses [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Topical corticosteroids can be absorbed in sufficient amounts to produce systemic effects [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Withdraw or reduce frequency; HPA axis usually recovers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Burning, itching, irritation, dryness, folliculitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["HPA-axis suppression, Cushing syndrome, hyperglycaemia [FDA]", "Skin atrophy, striae [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["HPA-axis tests if large areas or occlusion are used [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Diflorasone diacetate ointment USP 0.05% — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b304dfca-e840-4c03-8217-73aaa5360277"], D2_BT],
  dose: { tagline: "Potent topical steroid — thin film, short courses.",
    adult: [{ ind: "Dermatoses", text: "Thin film one to three times daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DIFLUNISAL (FDA diflunisal tablets ANDA202845) ---------- */
FDB_M("diflunisal", {
  inn: "Diflunisal", atc: "N02BA11", cls: "NSAID (salicylic-acid derivative)",
  linked: [],
  forms: ["Tablets 500 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits prostaglandin synthesis (cyclo-oxygenase) [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Concentration-dependent kinetics: doubling the dose more than doubles accumulation [FDA]."],
  ind: { adult: ["Mild to moderate pain [FDA].", "Osteoarthritis and rheumatoid arthritis [FDA]."], paed: ["Not recommended under 12 years [FDA]."] },
  adult: [["Mild to moderate pain", "1,000 mg first, then 500 mg every 12 hours (some need every 8 hours). Lower: 500 mg first, then 250 mg every 8–12 hours [FDA]."], ["Osteoarthritis, rheumatoid arthritis", "500–1,000 mg daily in two divided doses [FDA]."], ["Maximum", "Maintenance doses above 1,500 mg/day are not recommended [FDA]."], ["Administration", "Swallow whole; do not crush or chew [FDA]."]],
  paed: { tiers: ["Under 12 years: not established and not recommended [FDA].", "12 years and over: Not established in primary source. [NEP]"], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Avoid in advanced renal disease (NSAID class) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Avoid from about 20 weeks (oligohydramnios, neonatal renal impairment) and in the third trimester [FDA].", other: "Lowest effective dose for the shortest time [FDA]." },
  tox: { human: "Drowsiness, vomiting, nausea, diarrhoea, hyperventilation, tachycardia, sweating, tinnitus, disorientation, stupor, coma; deaths reported [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; emesis or lavage early; haemodialysis may not help (highly protein-bound) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to diflunisal [FDA].", "Asthma, urticaria or allergic reactions after aspirin or other NSAIDs [FDA].", "Coronary artery bypass graft (CABG) surgery setting [FDA]."],
  ae: { common: ["Nausea, dyspepsia, GI pain, diarrhoea, rash, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["MI and stroke [FDA]", "GI bleeding, ulceration, perforation [FDA]", "Renal toxicity, hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, renal function, signs of GI bleeding [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "diflunisal", indication_id: "pain", label: "Pain — 500 mg every 12 h after a 1,000 mg first dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["First dose 1,000 mg", "Some patients need every 8 h", "Maintenance above 1,500 mg/day not recommended"], sources: ["FDA"] },
    { drug: "diflunisal", indication_id: "arth", label: "Osteoarthritis / RA — 250–500 mg twice daily (500–1,000 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "day", value_max: 1000 }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }], rounding: "Whole or half tablets per product", renal: [], flags: ["Two divided doses"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Diflunisal tablets USP — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=666f89b4-fd81-420a-a390-eb1cd4014f61"], D2_BT],
  dose: { tagline: "Long-acting NSAID — twice daily after a loading dose.",
    boxedTitle: "Cardiovascular and gastrointestinal risk",
    boxed: "Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use. Diflunisal tablets are contraindicated in the setting of coronary artery bypass graft (CABG) surgery. NSAIDs cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients are at greater risk for serious gastrointestinal events [FDA].",
    adult: [{ ind: "Pain", text: "1,000 mg, then 500 mg every 12 hours.", calc: ["pain"] }, { ind: "OA / RA", text: "500–1,000 mg/day in 2 doses; maximum 1,500 mg/day.", calc: ["arth"] }],
    child: [{ ind: "Under 12 years", text: "Not recommended." }] }
});

/* ---------- DIFLUPREDNATE (FDA difluprednate ophthalmic emulsion 0.05%, NDA022212) ---------- */
FDB_M("difluprednate", {
  inn: "Difluprednate", atc: "D07AC19 S01BA16", cls: "Ophthalmic corticosteroid",
  linked: [],
  forms: ["Ophthalmic emulsion 0.05% [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Corticosteroid that inhibits the inflammatory response [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Inflammation and pain after ocular surgery [FDA].", "Endogenous anterior uveitis [FDA]."], paed: ["Studied in children 0–3 years after cataract surgery [FDA]."] },
  adult: [["After ocular surgery", "1 drop in the affected eye 4 times daily from 24 hours after surgery for 2 weeks, then 2 times daily for 1 week, then taper [FDA]."], ["Anterior uveitis", "1 drop 4 times daily for 14 days, then taper [FDA]."], ["Prescribing", "Examine with slit lamp before the first prescription and renewal; prescribe not more than one bottle initially; re-evaluate if no improvement after 2 days [FDA]."]],
  paed: { tiers: ["After cataract surgery (0–3 years, trial data): same schedule as adults [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult schedule.", calcNote: "Eye drops — no calculator." },
  adj: { renal: "Not applicable (topical eye) [NEP].", hepatic: "Not applicable (topical eye) [NEP].", pregnancy: "Not established in primary source. [NEP]", other: "Prolonged use raises intraocular pressure and causes cataract; may mask or worsen infection [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Most active viral diseases of the cornea and conjunctiva (herpes simplex dendritic keratitis, vaccinia, varicella) [FDA].", "Mycobacterial infection of the eye [FDA].", "Fungal disease of ocular structures [FDA]."],
  ae: { common: ["Corneal oedema, ciliary and conjunctival hyperaemia, eye pain, photophobia, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Raised intraocular pressure, glaucoma [FDA]", "Posterior subcapsular cataract [FDA]", "Delayed healing, secondary infection, perforation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Intraocular pressure if used 10 days or longer [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Difluprednate ophthalmic emulsion 0.05% — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0f60b857-7898-4a9e-935c-a9ddf0eb9194"], D2_BT],
  dose: { tagline: "Potent steroid eye drop after eye surgery and for anterior uveitis.",
    adult: [{ ind: "After eye surgery", text: "1 drop 4 times daily for 2 weeks, 2 times daily for 1 week, then taper." }, { ind: "Anterior uveitis", text: "1 drop 4 times daily for 14 days, then taper." }],
    child: [{ ind: "After cataract surgery", text: "Studied from birth to 3 years; same schedule (specialist)." }] }
});

/* ---------- DIHYDROERGOTAMINE (FDA TRUDHESA nasal spray NDA213436) ---------- */
FDB_M("dihydroergotamine", {
  inn: "Dihydroergotamine", atc: "N02CA01", cls: "Ergot alkaloid (antimigraine)",
  linked: [],
  forms: ["Nasal spray 0.725 mg per spray (TRUDHESA); other nasal sprays and injection 1 mg/mL exist in other labels [FDA].", "Bhutan: not on the NEML (ergotamine + caffeine is the NEML ergot) [BT-NEML]."],
  moa: "Binds 5-HT1B/1D receptors, constricting intracranial vessels and inhibiting trigeminal neuropeptide release [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — strong inhibitors raise levels sharply [FDA]."],
  ind: { adult: ["Acute treatment of migraine with or without aura (not for prevention or hemiplegic/basilar migraine) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Acute migraine (TRUDHESA)", "1.45 mg = one spray (0.725 mg) into each nostril; may repeat after at least 1 hour. Maximum 2 doses in 24 hours and 3 doses in 7 days [FDA]."], ["Before first dose", "Cardiovascular evaluation; if CAD risk factors, give the first dose in an equipped healthcare facility [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Severe renal impairment: contraindicated (class labelling) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe hepatic impairment: contraindicated (class labelling) [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated in pregnancy (oxytocic) [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Not within 24 hours of a triptan or other ergot [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Ergotism: peripheral ischaemia, numbness, tingling, pain and cyanosis of the extremities, nausea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the drug; vasodilators, heparin, supportive care [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Strong CYP3A4 inhibitors (ritonavir, nelfinavir, indinavir, erythromycin, clarithromycin, ketoconazole, itraconazole) [FDA].", "Ischaemic heart disease or coronary vasospasm [FDA].", "Uncontrolled hypertension [FDA] [UNVERIFIED-KNOWLEDGE].", "Peripheral arterial disease, sepsis, vascular surgery [FDA] [UNVERIFIED-KNOWLEDGE].", "Severe hepatic or renal impairment [FDA] [UNVERIFIED-KNOWLEDGE].", "Within 24 hours of a 5-HT1 agonist or other ergot [FDA] [UNVERIFIED-KNOWLEDGE].", "Hemiplegic or basilar migraine [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to ergot alkaloids [FDA]."],
  ae: { common: ["Rhinitis, nasal congestion, nausea, altered taste, application-site reactions, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Peripheral and cerebral ischaemia with CYP3A4 inhibitors [FDA]", "Myocardial ischaemia, arrhythmia [FDA]", "Fibrotic complications with long-term use [FDA] [UNVERIFIED-KNOWLEDGE]", "Medication-overuse headache [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cardiovascular risk assessment; signs of vasospasm [FDA]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dihydroergotamine", indication_id: "nasal", label: "Acute migraine — 1.45 mg nasal (one spray each nostril)", route: "Nasal", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1.45, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1.45, max_daily: 2.9, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "spray", strength: 0.725, unit: "mg/spray" }], rounding: "Whole sprays", renal: [], flags: ["May repeat after at least 1 hour", "Maximum 2 doses/24 h and 3 doses/7 days", "Never with strong CYP3A4 inhibitors"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Trudhesa (dihydroergotamine mesylate) nasal spray — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b81397b0-910d-4eb4-8fee-a9a3c9d94d63"], D2_BT],
  dose: { tagline: "Ergot for acute migraine — never with strong CYP3A4 inhibitors.",
    boxedTitle: "Peripheral ischemia following coadministration with strong CYP3A4 inhibitors",
    boxed: "Serious and/or life-threatening peripheral ischemia has been associated with the coadministration of dihydroergotamine with strong CYP3A4 inhibitors. Because CYP3A4 inhibition elevates the serum levels of dihydroergotamine, the risk for vasospasm leading to cerebral ischemia and/or ischemia of the extremities is increased. Hence, concomitant use of TRUDHESA with strong CYP3A4 inhibitors is contraindicated [FDA].",
    adult: [{ ind: "Acute migraine", text: "1.45 mg (one spray each nostril); may repeat after 1 hour; maximum 2 doses/24 h, 3 doses/7 days.", calc: ["nasal"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DIMENHYDRINATE (FDA dimenhydrinate injection ANDA040519, Fresenius Kabi) ---------- */
FDB_M("dimenhydrinate", {
  inn: "Dimenhydrinate", atc: "R06AA11", cls: "Antihistamine antiemetic (diphenhydramine + 8-chlorotheophylline)",
  linked: [],
  forms: ["Injection 50 mg/mL (contains benzyl alcohol) [FDA]; oral tablets in other labels.", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "H1 antagonist with anticholinergic action on the vestibular system [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Antiemetic effect lasts about 4 hours [FDA]."],
  ind: { adult: ["Prevention and treatment of nausea, vomiting or vertigo of motion sickness [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Same (IM); not in neonates [FDA]."] },
  adult: [["Nausea, vomiting", "50 mg every 4 hours; 100 mg every 4 hours if drowsiness is acceptable [FDA]."], ["IM", "50 mg (1 mL) as needed [FDA]."], ["IV", "Dilute each 50 mg (1 mL) in 10 mL 0.9% sodium chloride and inject over 2 minutes [FDA]."]],
  paed: { tiers: ["IM: 1.25 mg/kg (or 37.5 mg/m²) four times daily; maximum 300 mg/day [FDA].", "Neonates: contraindicated [FDA]."], transition: "Adult dose.", calcNote: "50 mg/mL injection." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "May mask ototoxicity of aminoglycosides; additive sedation [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Drowsiness; with massive overdose convulsions, coma and respiratory depression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No specific antidote; ventilation and oxygen for respiratory depression; short-acting barbiturate for convulsions [FDA]." },
  contra: ["Neonates [FDA].", "Hypersensitivity to dimenhydrinate, diphenhydramine or 8-chlorotheophylline [FDA]."],
  ae: { common: ["Drowsiness [FDA]."], serious: ["Benzyl alcohol 'gasping syndrome' in premature and low-birth-weight infants [FDA]", "Paradoxical excitation in children [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sedation [FDA]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dimenhydrinate", indication_id: "adult", label: "Nausea/vomiting adult — 50 mg IM/IV every 4 h", route: "IM/IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 4, divided_doses: 6, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["IV: dilute in 10 mL normal saline, give over 2 minutes", "100 mg every 4 h if drowsiness acceptable"], sources: ["FDA"] },
    { drug: "dimenhydrinate", indication_id: "child", label: "Child IM — 1.25 mg/kg four times daily (max 300 mg/day)", route: "IM", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1.25, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_daily: 300, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["Not in neonates (benzyl alcohol)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dimenhydrinate injection USP — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bc71539e-1a33-4709-8a24-c2894e8dbc1c"], D2_BT],
  dose: { tagline: "Sedating antiemetic for motion sickness and vomiting — not in neonates.",
    adult: [{ ind: "Nausea, vomiting", text: "50 mg IM or IV (diluted, over 2 min) every 4 hours; up to 100 mg.", calc: ["adult"] }],
    child: [{ ind: "Nausea, vomiting", text: "1.25 mg/kg IM four times daily; maximum 300 mg/day.", calc: ["child"] }] }
});

/* ---------- DIMETHYL FUMARATE (FDA TECFIDERA NDA204063, Biogen) ---------- */
FDB_M("dimethyl-fumarate", {
  inn: "Dimethyl fumarate", atc: "L04AX07", cls: "Immunomodulator for multiple sclerosis (Nrf2 activator)",
  linked: [],
  forms: ["Delayed-release capsules 120, 240 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Activates the Nrf2 antioxidant pathway; exact mechanism in MS unknown [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Rapidly converted to monomethyl fumarate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Relapsing forms of multiple sclerosis (clinically isolated syndrome, relapsing-remitting, active secondary progressive) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Relapsing MS", "120 mg twice daily for 7 days, then 240 mg twice daily [FDA]."], ["Intolerance", "Temporary reduction to 120 mg twice daily; resume 240 mg twice daily within 4 weeks [FDA]."], ["Flushing", "Take with food, or non-enteric-coated aspirin up to 325 mg 30 minutes before [FDA]."], ["Administration", "Swallow whole; do not crush, chew or sprinkle [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "Adult dose.", calcNote: "Adult only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Check liver tests before starting [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Lymphopenia: consider stopping if lymphocytes stay under 0.5 × 10⁹/L for over 6 months [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "LD50 oral rat 2,240 mg/kg; dermal rabbit 1,259 mg/kg [PubChem].", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to dimethyl fumarate or excipients (anaphylaxis, angioedema) [FDA]."],
  ae: { common: ["Flushing, abdominal pain, diarrhoea, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis and angioedema [FDA]", "Progressive multifocal leukoencephalopathy (PML) [FDA] [UNVERIFIED-KNOWLEDGE]", "Lymphopenia, herpes zoster and serious infections [FDA]", "Liver injury [FDA]"] },
  monitor: ["CBC with lymphocyte count before starting, after 6 months, then every 6–12 months [FDA].", "Aminotransferases, alkaline phosphatase and bilirubin before starting and as indicated [FDA]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dimethyl-fumarate", indication_id: "start", label: "Relapsing MS — 120 mg twice daily for 7 days", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 120, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 120, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 120, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["7 days only, then 240 mg twice daily"], sources: ["FDA"] },
    { drug: "dimethyl-fumarate", indication_id: "maint", label: "Relapsing MS maintenance — 240 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 240, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 240, max_daily: 480, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 240, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Lymphocyte count every 6–12 months"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Tecfidera (dimethyl fumarate) — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=665d7e74-036c-5f68-5b67-ab84b9b49151"], ["PubChem", "Dimethyl fumarate — PubChem CID 637568 (toxicity)", "https://pubchem.ncbi.nlm.nih.gov/compound/637568"], D2_BT],
  dose: { tagline: "Oral MS therapy — flushing is common; check lymphocytes.",
    adult: [{ ind: "Relapsing MS", text: "120 mg twice daily for 7 days, then 240 mg twice daily.", calc: ["start", "maint"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DIMETHYL SULFOXIDE (FDA RIMSO-50 intravesical NDA017788) ---------- */
FDB_M("dimethyl-sulfoxide", {
  inn: "Dimethyl sulfoxide (DMSO)", atc: "G04BX13 M02AX03", cls: "Intravesical agent for interstitial cystitis",
  linked: [],
  forms: ["50% w/w solution, 50 mL vial, for bladder instillation only [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Anti-inflammatory, analgesic and muscle-relaxant effects on the bladder [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorbed systemically; garlic-like taste and breath odour [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Symptomatic relief of interstitial cystitis [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Interstitial cystitis", "Instil 50 mL into the bladder by catheter or asepto syringe; retain 15 minutes, then void. Repeat every 2 weeks until maximum relief, then lengthen the interval [FDA]."], ["Comfort", "Lidocaine jelly to the urethra before catheterisation; oral analgesics or belladonna-opium suppositories before instillation reduce spasm. Severe sensitive bladders: first treatments under anaesthesia [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adult dose.", calcNote: "Fixed 50 mL instillation." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Not for IV or oral use [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Accidental oral ingestion: induce emesis [FDA].", animal: "Oral LD50 dog over 10 g/kg; rat oral 14,500 mg/kg [FDA] [PubChem].", manage: "Supportive [FDA]." },
  contra: ["None known [FDA]."],
  ae: { common: ["Garlic-like taste and breath odour, transient bladder discomfort [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Lens changes in animals — periodic eye examination [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver and renal function and blood counts every 6 months; eye examination [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Rimso-50 (dimethyl sulfoxide) — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58b25d79-78f2-4953-b0c6-61658dc4ef0d"], ["PubChem", "Dimethyl sulfoxide — PubChem CID 679 (toxicity)", "https://pubchem.ncbi.nlm.nih.gov/compound/679"], D2_BT],
  dose: { tagline: "Bladder instillation for interstitial cystitis — not for injection.",
    adult: [{ ind: "Interstitial cystitis", text: "50 mL into the bladder for 15 minutes every 2 weeks." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DIMETICONE / SIMETHICONE (FDA OTC infant gas relief drops, monograph M002) ---------- */
FDB_M("dimeticone", {
  inn: "Dimeticone (simethicone)", atc: "A03AX13", cls: "Antiflatulent (surfactant antifoaming agent)",
  linked: [],
  forms: ["Oral drops 20 mg/0.3 mL; chewable tablets and capsules in other OTC labels [FDA].", "Bhutan: simethicone 100 mg/mL drops, 30 mL [BT-NEML]."],
  moa: "Lowers surface tension of gas bubbles so they coalesce and pass more easily; not absorbed [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not absorbed from the gut [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Gas (flatulence) discomfort [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Infant gas from air swallowing or certain formulas or foods [FDA]."] },
  adult: [["Gas", "Follow the product label (no single-ingredient adult label captured in this database) [NEP]."]],
  paed: { tiers: ["Under 2 years (under 24 lb / about 11 kg): 0.3 mL (20 mg) [FDA].", "Over 2 years (over 24 lb): 0.6 mL (40 mg) [FDA].", "After meals and at bedtime as needed; not more than 12 doses a day [FDA]."], transition: "Adult products per label.", calcNote: "US drops are 20 mg/0.3 mL; check the strength of the product in hand — Bhutan's NEML drop is 100 mg/mL." },
  adj: { renal: "Not applicable (not absorbed) [UNVERIFIED-KNOWLEDGE].", hepatic: "Not applicable (not absorbed) [UNVERIFIED-KNOWLEDGE].", pregnancy: "Not established in primary source. [NEP]", other: "May be mixed with 30 mL cool water, formula or other liquid [FDA]." },
  tox: { human: "Overdose: get medical help or contact a poison control centre [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Not established in primary source. [NEP]"],
  ae: { common: ["Generally well tolerated [UNVERIFIED-KNOWLEDGE]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Persistent colic, vomiting or poor feeding needs medical review [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: simethicone 100 mg/mL drops, 30 mL (supplied to district hospitals) [BT-NEML].", strengths: "100 mg/mL drops.", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dimeticone", indication_id: "inf", label: "Infant under 2 years — 20 mg per dose (up to 12 doses/day)", route: "PO", population: { min_age_months: 0, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 20, max_daily: 240, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "drops", strength: 100, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["US drops: 0.3 mL = 20 mg", "Bhutan NEML drops 100 mg/mL: 0.2 mL = 20 mg", "After meals and at bedtime; not more than 12 doses/day"], sources: ["FDA"] },
    { drug: "dimeticone", indication_id: "c2", label: "Over 2 years — 40 mg per dose (up to 12 doses/day)", route: "PO", population: { min_age_months: 24, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 40, max_daily: 480, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "drops", strength: 100, unit: "mg/mL" }], rounding: "0.05 mL", renal: [], flags: ["US drops: 0.6 mL = 40 mg", "Bhutan NEML drops 100 mg/mL: 0.4 mL = 40 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Infant gas relief drops (simethicone 20 mg/0.3 mL) — FDA OTC label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=088993c1-31f0-4270-a3df-a585e7c8d511"], D2_BT],
  dose: { tagline: "Antigas drops for infant wind — check the drop strength before measuring.",
    adult: [{ ind: "Gas", text: "Per product label." }],
    child: [{ ind: "Infant gas", text: "Under 2 years 20 mg; over 2 years 40 mg; after meals and at bedtime; maximum 12 doses/day.", calc: ["inf", "c2"], bt: "Bhutan NEML: 100 mg/mL drops (0.2 mL = 20 mg)." }] }
});

/* ---------- DINOPROSTONE (FDA PREPIDIL endocervical gel NDA019617) ---------- */
FDB_M("dinoprostone", {
  inn: "Dinoprostone (prostaglandin E2)", atc: "G02AD02", cls: "Prostaglandin (cervical ripening)",
  linked: [],
  forms: ["Endocervical gel 0.5 mg in 3 g (2.5 mL) syringe with 10 mm and 20 mm catheters (PREPIDIL) [FDA]; vaginal insert and suppository in other labels.", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Prostaglandin E2 that ripens the cervix and stimulates the gravid myometrium [FDA].",
  pk: ["Onset of effect; reassess at 6–12 hours [FDA]."],
  ind: { adult: ["Ripening an unfavourable cervix in pregnant women at or near term with a medical or obstetric need for labour induction [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not applicable [FDA]."] },
  adult: [["Cervical ripening (gel)", "0.5 mg endocervically, just below the internal os, with the patient supine. Use the 20 mm catheter if there is no effacement and the 10 mm catheter if the cervix is 50% effaced [FDA]."], ["Repeat", "If no response, repeat 0.5 mg after 6 hours; maximum cumulative 1.5 mg (7.5 mL gel) in 24 hours [FDA]."], ["Handling", "Bring to room temperature without external heat; avoid skin contact and wash hands [FDA]."]],
  paed: { tiers: ["Not applicable — safety and effectiveness in children have not been established [FDA]."], transition: "—", calcNote: "Fixed 0.5 mg doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "For use at or near term only, in hospital [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Wait 6–12 hours after the last dose before starting oxytocin [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Uterine hypercontractility and hypertonus [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Conservative: maternal position change, oxygen; beta-agonist tocolytic if needed [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Where oxytocics are contraindicated or prolonged contractions are inappropriate: previous caesarean section or major uterine surgery; cephalopelvic disproportion; history of difficult or traumatic labour; grand multiparity (six or more term pregnancies) [FDA].", "Non-vertex presentation, fetal distress where delivery is not imminent, unexplained vaginal bleeding, placenta praevia [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to prostaglandins [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Uterine contractile abnormalities, GI upset, back pain, warm feeling in the vagina, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Uterine hyperstimulation with fetal distress [FDA]", "Uterine rupture [FDA] [UNVERIFIED-KNOWLEDGE]", "Amniotic fluid embolism [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Continuous uterine activity and fetal heart rate monitoring [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D2_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dinoprostone", indication_id: "gel", label: "Cervical ripening — 0.5 mg endocervical gel (repeat after 6 h if needed)", route: "Endocervical", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 0.5, max_daily: 1.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "gel", strength: 0.5, unit: "mg/syringe" }], rounding: "Whole syringe", renal: [], flags: ["May repeat 0.5 mg after 6 hours", "Maximum 1.5 mg in 24 hours", "Hospital only, with fetal and uterine monitoring"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Prepidil (dinoprostone) endocervical gel — FDA label (DailyMed)", "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab03de5b-782c-4f81-a8dc-7ef9969dd0cf"], D2_BT],
  dose: { tagline: "Prostaglandin gel to ripen the cervix before induction — hospital use only.",
    cautionTitle: "Use with care",
    caution: "The maximum recommended cumulative dose for a 24-hour period is 1.5 mg of dinoprostone (7.5 mL PREPIDIL Gel) [FDA].",
    adult: [{ ind: "Cervical ripening", text: "0.5 mg endocervically; repeat after 6 hours if needed; maximum 1.5 mg/24 h.", calc: ["gel"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* Brand names — BATCH D2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"dexchlorpheniramine":{"IN":[["Polaramine","Piramal Healthcare Limited","Polaramine 2Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/polaramine-2mg-strip-of-10-tablets-10974"]},"dexlansoprazole":{"IN":[["Ddr","Msn Laboratories","Ddr 60Mg Strip Of 10 Capsules"],["Deltone","Alembic Pharmaceuticals Ltd","Deltone 60Mg Strip Of 10 Capsules"],["Dexolan","Waterley Pharmaceuticals Pvt Ltd","Dexolan 60Mg Strip Of 10 Capsules"]],"BD":[["Dexger","Jenphar Bangladesh Ltd","60 mg"],["Dexobest","Al-Madina Pharmaceuticals Ltd","60 mg"],["DDR","ACME Laboratories Ltd","30 mg"]],"src":["https://pharmeasy.in/online-medicine-order/ddr-60mg-cap-20412","https://pharmeasy.in/online-medicine-order/deltone-60mg-strip-of-10-capsules-2354","https://pharmeasy.in/online-medicine-order/dexolan-60mg-strip-of-10-capsules-2978332","https://medex.com.bd/brands/37073/dexger-60-mg-ec-capsule","https://medex.com.bd/brands/37056/dexobest-60-mg-ec-capsule"]},"dexmedetomidine":{"IN":[["Dextomid","Neon Laboratories Limited","Dextomid 50Mcg Injection"]],"BD":[["Detomax","Incepta Pharmaceuticals Ltd","200 mcg/2 ml"]],"src":["https://pharmeasy.in/online-medicine-order/dextomid-50mcg-injection-183026","https://medex.com.bd/brands/26049/detomax-200-mcg-iv-infusion"]},"diazoxide":{"IN":[["Balila","Jolly Healthcare","Balila 25Mg Strip Of 10 Capsules"]],"BD":[["Eudaxen","Everest Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/balila-25mg-strip-of-10-capsules-3849823","https://medex.com.bd/brands/30475/eudaxen-50-mg-tablet"]},"difelikefalin":{"IN":[],"BD":[["Defalix","Eskayef Pharmaceuticals Ltd","65 mcg/vial"]],"src":["https://medex.com.bd/brands/37354/defalix-65-mcg-iv-infusion"]},"diflorasone":{"IN":[["Diflorate","Micro Labs","Diflorate Oint 15Gm"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/diflorate-oint-15gm-43659"]},"difluprednate":{"IN":[["Diflucor","Ajanta Pharma Limited","Diflucor 0.05% Bottle Of 5Ml Eye Drops"],["Enpred","Entod Pharmaceuticals Pvt Ltd","Enpred Bottle Of 5Ml Eye Drops"]],"BD":[["Neopred","Aristopharma Ltd","0.05%"],["Diflupred","General Pharmaceuticals Ltd","0.05%"],["Dipred","Popular Pharmaceuticals PLC","0.05%"]],"src":["https://pharmeasy.in/online-medicine-order/diflucor-0-05-eye-drops-5ml-1350","https://pharmeasy.in/online-medicine-order/enpred-eye-drops-9681","https://medex.com.bd/brands/15869/neopred-005-ophthalmic-emulsion","https://medex.com.bd/brands/15870/diflupred-005-ophthalmic-emulsion","https://medex.com.bd/brands/15871/dipred-005-ophthalmic-emulsion"]},"dimenhydrinate":{"IN":[["Draminate","Rpg Life Sciences Ltd","Draminate 50Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/draminate-50mg-tablet-44449"]},"dimethyl-fumarate":{"IN":[["Dyfira","Intas Pharmaceuticals Ltd","Dyfira 240Mg Bottle Of 60 Capsules"],["Sclerifuma","Sun Pharma","Sclerifuma 240Mg Strip Of 10 Capsules"],["Ms","Msn Laboratories","Ms 240Mg Strip Of 14 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/dyfira-240mg-bottle-of-60-capsules-220901","https://pharmeasy.in/online-medicine-order/sclerifuma-240mg-capsule-10-s-234020","https://pharmeasy.in/online-medicine-order/ms-240mg-strip-of-14-capsules-221088"]},"dimeticone":{"IN":[["Dimol","Wallace Pharmaceuticals","Dimol 40Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/dimol-40mg-tab-28943"]},"dinoprostone":{"IN":[],"BD":[["Proston","Renata PLC","0.5 mg/3 gm"]],"src":["https://medex.com.bd/brands/36760/proston-05-mg-vaginal-gel"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
