/* Clinical Disease Guide — Drug monograph database, block E, batch 1 (25 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text is copied from the label by _work/tools/fdb-boxed-fill.js (exact wording).
   Deferred from this run: elbasvir (only with grazoprevir — Zepatier). */

/* ================= Batch E-1 (fdb-e1.js) ================= */
const E1_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const E1_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const E1_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const E1_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const E1_STD = { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]" };

/* ---------- ECALLANTIDE (FDA KALBITOR BLA125277) ---------- */
FDB_M("ecallantide", {
  inn: "Ecallantide", atc: "B06AC03", cls: "Plasma kallikrein inhibitor",
  linked: [],
  forms: ["Injection 10 mg/mL vial [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Recombinant protein that inhibits plasma kallikrein, reducing bradykinin [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No data in hepatic or renal impairment [FDA]."],
  ind: { adult: ["Acute attacks of hereditary angioedema [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Acute HAE attack (12 years and over)", "30 mg SC as three 10 mg (1 mL) injections; if the attack persists, another 30 mg may be given within 24 hours [FDA]."], ["Setting", "Only by a healthcare professional with support to manage anaphylaxis [FDA]."]],
  paed: { tiers: ["12 years and over: 30 mg SC [FDA].", "Under 12 years: not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Fixed 30 mg." },
  adj: { ...E1_STD, renal: "No data [FDA].", hepatic: "No data [FDA].", other: "Refrigerate; protect from light [FDA]." },
  tox: { human: "No overdose reports; single IV doses up to 90 mg tolerated [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known clinical hypersensitivity to Kalbitor [FDA]."],
  ae: { common: ["Headache, nausea, fatigue, diarrhoea, injection-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]"] },
  monitor: ["Observe for anaphylaxis after each dose [FDA]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "ecallantide", indication_id: "hae", label: "Acute HAE attack, 12 years and over — 30 mg SC", route: "SC", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 30, max_daily: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "Three 1 mL injections", renal: [], flags: ["Second 30 mg dose within 24 h if the attack persists", "Have anaphylaxis treatment ready"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Kalbitor (ecallantide) — FDA label (DailyMed)", E1_DM("f56aec67-c662-477c-b866-bfc23e8809cf")], E1_BT],
  dose: { tagline: "Treats acute hereditary angioedema attacks — anaphylaxis risk.",
    boxedTitle: "Anaphylaxis", boxed: "Anaphylaxis has been reported after administration of KALBITOR. Because of the risk of anaphylaxis, KALBITOR should only be administered by a healthcare professional with appropriate medical support to manage anaphylaxis and hereditary angioedema. Healthcare professionals should be aware of the similarity of symptoms between hypersensitivity reactions and hereditary angioedema and patients should be monitored closely. Do not administer KALBITOR to patients with known clinical hypersensitivity to KALBITOR [FDA].",
    adult: [{ ind: "Acute HAE attack", text: "30 mg SC (three 10 mg injections); repeat once within 24 h if needed.", calc: ["hae"] }],
    child: [{ ind: "12 years and over", text: "30 mg SC.", calc: ["hae"] }] }
});

/* ---------- ECONAZOLE (FDA econazole nitrate foam 1% NDA205175) ---------- */
FDB_M("econazole", {
  inn: "Econazole", atc: "D01AC03 G01AF05", cls: "Topical imidazole antifungal",
  linked: [],
  forms: ["Topical foam 1%; cream 1% in other labels [FDA].", "Bhutan: not on the NEML (clotrimazole is the NEML topical azole) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits fungal ergosterol synthesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal systemic absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Interdigital tinea pedis (T. rubrum, T. mentagrophytes, E. floccosum) [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Tinea pedis (foam)", "Apply to cover affected areas once daily for 4 weeks [FDA]."]],
  paed: { tiers: ["12 years and over: as adults [FDA]."], transition: "Adult use.", calcNote: "Topical — no calculator." },
  adj: { ...E1_STD, renal: "Not applicable (topical) [NEP].", hepatic: "Not applicable (topical) [NEP].", other: "For topical use only; not oral, ophthalmic or intravaginal [FDA]. Foam is flammable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Application-site reactions [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Clinical response at 4 weeks [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Econazole nitrate topical foam 1% — FDA label (DailyMed)", E1_DM("3eb40c94-f369-ce4b-e063-6294a90abed4")], E1_BT],
  dose: { tagline: "Topical azole for athlete's foot — once daily for 4 weeks.",
    adult: [{ ind: "Tinea pedis", text: "Once daily for 4 weeks." }],
    child: [{ ind: "12 years and over", text: "As adults." }] }
});

/* ---------- ECULIZUMAB (FDA SOLIRIS BLA125166) ---------- */
FDB_M("eculizumab", {
  inn: "Eculizumab", atc: "L04AJ01", cls: "Complement C5 inhibitor (monoclonal antibody)",
  linked: [],
  forms: ["Injection 300 mg/30 mL (10 mg/mL) vial [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds complement C5, blocking terminal complement and membrane attack complex formation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Plasma exchange, plasmapheresis, FFP or IVIg remove drug — supplemental doses needed [FDA]."],
  ind: { adult: ["Paroxysmal nocturnal haemoglobinuria (PNH) [FDA].", "Atypical haemolytic uraemic syndrome (aHUS) [FDA].", "Generalised myasthenia gravis (AChR antibody positive) [FDA].", "Neuromyelitis optica spectrum disorder (AQP4 antibody positive) [FDA]."], paed: ["aHUS in children; gMG from 6 years [FDA]."] },
  adult: [["PNH", "600 mg IV weekly for 4 weeks, then 900 mg at week 5, then 900 mg every 2 weeks [FDA]."], ["aHUS, gMG, NMOSD", "900 mg IV weekly for 4 weeks, then 1,200 mg at week 5, then 1,200 mg every 2 weeks [FDA]."], ["Timing", "Give at the scheduled time points or within 2 days of them [FDA]."], ["Meningococcal protection", "Vaccinate (serogroups A, C, W, Y and B) at least 2 weeks before; if urgent, give antibiotic prophylaxis and vaccinate as soon as possible [FDA]."]],
  paed: { tiers: ["aHUS (under 18) and gMG (6 years and over), by weight [FDA]:", "40 kg and over: 900 mg weekly × 4; 1,200 mg at week 5; then 1,200 mg every 2 weeks.", "30 to under 40 kg: 600 mg weekly × 2; 900 mg at week 3; then 900 mg every 2 weeks.", "20 to under 30 kg: 600 mg weekly × 2; 600 mg at week 3; then 600 mg every 2 weeks.", "10 to under 20 kg: 600 mg once at week 1; 300 mg at week 2; then 300 mg every 2 weeks.", "5 to under 10 kg: 300 mg once at week 1; 300 mg at week 2; then 300 mg every 3 weeks."], transition: "40 kg and over: adult aHUS schedule.", calcNote: "Weight bands." },
  adj: { ...E1_STD, other: "Prescribers must enrol in the REMS; supplemental doses with plasma exchange, FFP or IVIg [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Starting in patients with unresolved serious Neisseria meningitidis infection [FDA]."],
  ae: { common: ["Headache, nasopharyngitis, back pain, nausea, upper respiratory infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Life-threatening and fatal meningococcal infections [FDA]", "Other encapsulated-bacteria infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Haemolysis or TMA after stopping [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Signs of meningococcal infection; LDH, haemoglobin, platelets, creatinine (PNH/aHUS) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "eculizumab", indication_id: "paed", label: "aHUS (under 18) / gMG (6+) — schedule by weight", route: "IV", population: { min_age_months: null, max_age_months: 216, min_weight_kg: 5, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 5, max_weight_kg: 10, text: "300 mg at week 1; 300 mg at week 2; then 300 mg every 3 weeks", daily: null }, { min_weight_kg: 10, max_weight_kg: 20, text: "600 mg at week 1; 300 mg at week 2; then 300 mg every 2 weeks", daily: null }, { min_weight_kg: 20, max_weight_kg: 30, text: "600 mg weekly × 2; 600 mg at week 3; then 600 mg every 2 weeks", daily: null }, { min_weight_kg: 30, max_weight_kg: 40, text: "600 mg weekly × 2; 900 mg at week 3; then 900 mg every 2 weeks", daily: null }, { min_weight_kg: 40, max_weight_kg: null, text: "900 mg weekly × 4; 1,200 mg at week 5; then 1,200 mg every 2 weeks", daily: null }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "300 mg vials", renal: [], flags: ["Meningococcal vaccination at least 2 weeks before", "gMG only from 6 years"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Soliris (eculizumab) — FDA label (DailyMed)", E1_DM("ebcd67fa-b4d1-4a22-b33d-ee8bf6b9c722")], E1_BT],
  dose: { tagline: "C5 inhibitor for PNH, aHUS, myasthenia and NMOSD — meningococcal risk.",
    boxedTitle: "Serious meningococcal infections", boxed: "SOLIRIS, a complement inhibitor, increases the risk of serious infections caused by Neisseria meningitidis. Life-threatening and fatal meningococcal infections have occurred in patients treated with complement inhibitors. These infections may become rapidly life-threatening or fatal if not recognized and treated early. Complete or update vaccination for meningococcal bacteria (for serogroups A, C, W, Y, and B) at least 2 weeks prior to the first dose of SOLIRIS, unless the risks of delaying therapy with SOLIRIS outweigh the risk of developing a serious infection. Comply with the most current Advisory Committee on Immunization Practices (ACIP) recommendations for vaccinations against meningococcal bacteria in patients receiving a complement inhibitor. Patients receiving SOLIRIS are at increased risk for invasive disease caused by Neisseria meningitidis, even if they develop antibodies following vaccination. Monitor patients for early signs and symptoms of serious meningococcal infections and evaluate immediately if infection is suspected. Because of the risk of serious meningococcal infections, SOLIRIS is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called ULTOMIRIS and SOLIRIS REMS [FDA].",
    adult: [{ ind: "PNH", text: "600 mg weekly × 4, 900 mg week 5, then 900 mg every 2 weeks." }, { ind: "aHUS, gMG, NMOSD", text: "900 mg weekly × 4, 1,200 mg week 5, then 1,200 mg every 2 weeks." }],
    child: [{ ind: "aHUS / gMG", text: "Schedule by weight.", calc: ["paed"] }] }
});

/* ---------- EDARAVONE (FDA RADICAVA / RADICAVA ORS NDA215446) ---------- */
FDB_M("edaravone", {
  inn: "Edaravone", atc: "N07XX14", cls: "Free-radical scavenger (ALS)",
  linked: [],
  forms: ["IV infusion bag 30 mg/100 mL; oral suspension 105 mg/5 mL (RADICAVA ORS) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Antioxidant free-radical scavenger; mechanism in ALS unknown [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Exposure higher in renal impairment, but no dose adjustment stated [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Amyotrophic lateral sclerosis (ALS) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["IV", "60 mg infusion over 60 minutes [FDA]."], ["Oral (ORS)", "105 mg (5 mL) orally or by feeding tube in the morning after an overnight fast; nothing but water for 1 hour after [FDA]."], ["Cycles", "First cycle: daily for 14 days, then 14 days off. Later cycles: daily for 10 of 14 days, then 14 days off [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { ...E1_STD, other: "Contains sodium bisulfite (IV) — sulfite allergic reactions possible [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["History of hypersensitivity to edaravone or any inactive ingredient (hypersensitivity and anaphylactic reactions have occurred) [FDA]."],
  ae: { common: ["Contusion, gait disturbance, headache, dermatitis, eczema, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity and anaphylaxis [FDA]", "Sulfite allergic reactions (IV) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Hypersensitivity during infusion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Radicava / Radicava ORS (edaravone) — FDA label (DailyMed)", E1_DM("0ce2c1c4-2a40-485c-b7cb-96a9b85d9d11")], E1_BT],
  dose: { tagline: "ALS treatment in 14-day cycles — IV 60 mg or oral 105 mg.",
    adult: [{ ind: "ALS", text: "60 mg IV over 60 min, or 105 mg orally fasting; 14 days on/14 off, then 10 of 14 days on/14 off." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EDOXABAN (FDA SAVAYSA NDA206316) ---------- */
FDB_M("edoxaban", {
  inn: "Edoxaban", atc: "B01AF03", cls: "Direct oral anticoagulant (factor Xa inhibitor)", risk: "High-alert — anticoagulants are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Tablets 15, 30, 60 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Direct, selective factor Xa inhibitor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["About 50% renal clearance — dose by CrCl (Cockcroft-Gault) [FDA]."],
  ind: { adult: ["Reduce stroke and systemic embolism in nonvalvular AF [FDA].", "Treatment of DVT and PE after 5–10 days of parenteral anticoagulation [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Nonvalvular AF", "CrCl over 50 to 95: 60 mg once daily. CrCl 15–50: 30 mg once daily. CrCl over 95: do not use (reduced efficacy) [FDA]."], ["DVT / PE", "60 mg once daily after 5–10 days of parenteral anticoagulant; 30 mg once daily if CrCl 15–50, weight 60 kg or less, or certain P-gp inhibitors [FDA]."], ["Missed dose", "Take the same day; do not double [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "CrCl 15–50: 30 mg once daily; under 15: not recommended [FDA] [UNVERIFIED-KNOWLEDGE]. AF with CrCl over 95: do not use [FDA].", hepatic: "Moderate or severe (Child-Pugh B or C): not recommended [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "No specific reversal agent; stop before procedures per label [FDA]." },
  tox: { human: "Overdose increases bleeding risk [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No specific reversal agent; protamine, vitamin K and haemodialysis are not expected to help; consider prothrombin complex concentrate [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active pathological bleeding [FDA]."],
  ae: { common: ["Bleeding, anaemia, rash, abnormal liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Major and fatal bleeding [FDA] [UNVERIFIED-KNOWLEDGE]", "Spinal/epidural haematoma with neuraxial anaesthesia [FDA]", "Ischaemic events after premature stopping [FDA]"] },
  monitor: ["CrCl before starting and periodically; haemoglobin; signs of bleeding [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "edoxaban", indication_id: "af", label: "Nonvalvular AF — 60 mg once daily (CrCl over 50 to 95)", route: "PO", population: E1_ADULT, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 60, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 95.001, crcl_max: 250, action: "avoid", note: "CrCl over 95: do not use in AF (reduced efficacy) [FDA]" }, { crcl_min: 15, crcl_max: 50, action: "reduce_dose", set_value: 30, note: "CrCl 15–50: 30 mg once daily" }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "CrCl under 15: not recommended [FDA]" }], renal_note: "Enter CrCl (Cockcroft-Gault) — dose depends on it", flags: ["Not in moderate or severe hepatic impairment"], sources: ["FDA"] },
    { drug: "edoxaban", indication_id: "vte", label: "DVT/PE, over 60 kg — 60 mg once daily (after 5–10 days parenteral)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: 60.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 60, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 15, crcl_max: 50, action: "reduce_dose", set_value: 30, note: "CrCl 15–50: 30 mg once daily" }, { crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "CrCl under 15: not recommended [FDA]" }], flags: ["Certain P-gp inhibitors: 30 mg once daily"], sources: ["FDA"] },
    { drug: "edoxaban", indication_id: "vte_low", label: "DVT/PE, 60 kg or less — 30 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: 60.0001 }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 30, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 30, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "CrCl under 15: not recommended [FDA]" }], flags: ["After 5–10 days of parenteral anticoagulant"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Savaysa (edoxaban) — FDA label (DailyMed)", E1_DM("e77d3400-56ad-11e3-949a-0800200c9a66")], E1_BT],
  dose: { tagline: "Once-daily factor Xa inhibitor — dose by CrCl; not in AF with CrCl over 95.",
    boxedTitle: "Reduced efficacy in NVAF with CrCl over 95 mL/min; premature discontinuation increases ischemic events; spinal/epidural hematoma", boxed: "(A) Reduced efficacy in nonvalvular atrial fibrillation patients with CrCL > 95 mL/min: SAVAYSA should not be used in patients with CrCL > 95 mL/min. In the ENGAGE AF-TIMI 48 study, nonvalvular atrial fibrillation patients with CrCL > 95 mL/min had an increased rate of ischemic stroke with SAVAYSA 60 mg once daily compared to patients treated with warfarin. In these patients another anticoagulant should be used. (B) Premature discontinuation of SAVAYSA increases the risk of ischemic events: Premature discontinuation of any oral anticoagulant in the absence of adequate alternative anticoagulation increases the risk of ischemic events. If SAVAYSA is discontinued for a reason other than pathological bleeding or completion of a course of therapy, consider coverage with another anticoagulant as described in the transition guidance. (C) Spinal/epidural hematoma: Epidural or spinal hematomas may occur in patients treated with SAVAYSA who are receiving neuraxial anesthesia or undergoing spinal puncture. These hematomas may result in long-term or permanent paralysis. Consider these risks when scheduling patients for spinal procedures [FDA].",
    adult: [{ ind: "Nonvalvular AF", text: "60 mg once daily; 30 mg if CrCl 15–50; not if CrCl over 95.", calc: ["af"] }, { ind: "DVT / PE", text: "60 mg once daily (30 mg if 60 kg or less, CrCl 15–50 or P-gp inhibitor).", calc: ["vte", "vte_low"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EFAVIRENZ (FDA tablets ANDA091579) ---------- */
FDB_M("efavirenz", {
  inn: "Efavirenz", atc: "J05AG03", cls: "Non-nucleoside reverse transcriptase inhibitor (NNRTI)",
  linked: [],
  forms: ["Tablets 600 mg; capsules 50, 200 mg (other labels) [FDA].", "Bhutan: efavirenz 200 mg tablet was deleted from the NEML 2025; Bhutan HIV guidelines 2024 no longer use efavirenz-based regimens [BT-NEML] [BT-HIV]."],
  moa: "Non-competitive inhibitor of HIV-1 reverse transcriptase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life; CYP3A/2B6 inducer and substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["HIV-1 infection with other antiretrovirals [FDA]."], paed: ["3 months and over, weighing at least 3.5 kg [FDA]."] },
  adult: [["HIV-1", "600 mg once daily on an empty stomach, preferably at bedtime [FDA]."], ["With rifampicin", "800 mg once daily if 50 kg or more [FDA]."]],
  paed: { tiers: ["3 months and over, by weight (once daily): 3.5 to under 5 kg 100 mg; 5 to under 7.5 kg 150 mg; 7.5 to under 15 kg 200 mg; 15 to under 20 kg 250 mg; 20 to under 25 kg 300 mg; 25 to under 32.5 kg 350 mg; 32.5 to under 40 kg 400 mg; 40 kg and over 600 mg [FDA]."], transition: "40 kg and over: 600 mg.", calcNote: "Weight bands; capsules may be sprinkled on food." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not recommended in moderate or severe hepatic impairment (Child-Pugh B or C); monitor in mild [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Many interactions (CYP inducer); psychiatric and CNS effects; QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "600 mg twice daily by mistake caused more nervous system symptoms; involuntary muscle contractions reported [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; activated charcoal; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Clinically significant hypersensitivity (e.g. SJS, erythema multiforme, toxic skin eruptions) to any component [FDA].", "Co-administration with elbasvir/grazoprevir [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dizziness, abnormal dreams, insomnia, rash, nausea, raised cholesterol [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Psychiatric symptoms including depression and suicidal thoughts [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe rash, SJS [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA]", "Convulsions, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests before and during treatment; lipids; mood [FDA]."],
  local: { neml: "Deleted from the Bhutan NEML 2025 (efavirenz 200 mg tablet) [BT-NEML].", strengths: "—", stg: "Bhutan HIV guidelines 2024: efavirenz-based regimens no longer used [BT-HIV]." },
  calc: [
    { drug: "efavirenz", indication_id: "adult", label: "HIV-1 adult — 600 mg once daily at bedtime", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 800, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 600, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["With rifampicin and 50 kg or more: 800 mg", "Empty stomach, at bedtime"], sources: ["FDA"] },
{ drug: "efavirenz", indication_id: "c40", label: "HIV-1 child 40 kg and over — 600 mg once daily at bedtime", route: "PO", population: { min_age_months: 3, max_age_months: 216, min_weight_kg: 40, max_weight_kg: null }, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 800, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 600, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Empty stomach, at bedtime"], sources: ["FDA"] },
    { drug: "efavirenz", indication_id: "paed", label: "HIV-1 child, 3 months+, 3.5 to under 40 kg — by weight", route: "PO", population: { min_age_months: 3, max_age_months: 216, min_weight_kg: 3.5, max_weight_kg: 40 }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 3.5, max_weight_kg: 5, text: "100 mg once daily (two 50 mg capsules)", daily: 100 }, { min_weight_kg: 5, max_weight_kg: 7.5, text: "150 mg once daily (three 50 mg capsules)", daily: 150 }, { min_weight_kg: 7.5, max_weight_kg: 15, text: "200 mg once daily (one 200 mg capsule)", daily: 200 }, { min_weight_kg: 15, max_weight_kg: 20, text: "250 mg once daily (200 mg + 50 mg capsules)", daily: 250 }, { min_weight_kg: 20, max_weight_kg: 25, text: "300 mg once daily (200 mg + two 50 mg capsules)", daily: 300 }, { min_weight_kg: 25, max_weight_kg: 32.5, text: "350 mg once daily (200 mg + three 50 mg capsules)", daily: 350 }, { min_weight_kg: 32.5, max_weight_kg: 40, text: "400 mg once daily (two 200 mg capsules)", daily: 400 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Capsules (may be sprinkled)", renal: [], flags: ["Empty stomach, at bedtime"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Efavirenz tablets — FDA label (DailyMed)", E1_DM("13ca3456-e5bf-4bb1-af95-b1378658a358")], ["BT-HIV", "National Guidelines on Treatment and Management of HIV & AIDS 2024, Bhutan", ""], E1_BT],
  dose: { tagline: "Older NNRTI at bedtime — no longer in Bhutan's HIV regimens.",
    adult: [{ ind: "HIV-1", text: "600 mg once daily at bedtime (800 mg with rifampicin if 50 kg or more).", calc: ["adult"], bt: "Bhutan: deleted from NEML 2025." }],
    child: [{ ind: "HIV-1, 3 months and over", text: "100–400 mg once daily by weight (3.5–40 kg); 40 kg and over 600 mg.", calc: ["paed", "c40"] }] }
});

/* ---------- EFBEMALENOGRASTIM ALFA (FDA RYZNEUTA BLA761134) ---------- */
FDB_M("efbemalenograstim-alfa", {
  inn: "Efbemalenograstim alfa", atc: "L03AA18", cls: "Long-acting granulocyte colony-stimulating factor",
  linked: [],
  forms: ["Pre-filled syringe 20 mg/mL [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "G-CSF Fc fusion protein that stimulates neutrophil production [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Reduce febrile neutropenia with myelosuppressive chemotherapy for non-myeloid cancers [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Per chemotherapy cycle", "20 mg SC once per cycle, at least 24 hours after cytotoxic chemotherapy; not from 14 days before to 24 hours after chemotherapy [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed 20 mg." },
  adj: { ...E1_STD, other: "Not for mobilising stem cells [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Leukocytosis and bone pain [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [FDA]." },
  contra: ["Serious allergic reactions to G-CSFs such as efbemalenograstim alfa, pegfilgrastim or filgrastim [FDA]."],
  ae: { common: ["Bone pain, nausea, anaemia, thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Splenic rupture, ARDS, serious allergic reactions, sickle cell crisis, glomerulonephritis, leukocytosis, aortitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count; left upper abdominal or shoulder pain (spleen) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Ryzneuta (efbemalenograstim alfa-vuxw) — FDA label (DailyMed)", E1_DM("290ed754-758c-9cae-e063-6294a90ae68b")], E1_BT],
  dose: { tagline: "Once-per-cycle G-CSF given at least 24 h after chemotherapy.",
    adult: [{ ind: "Febrile neutropenia prevention", text: "20 mg SC once per chemotherapy cycle, at least 24 h after chemotherapy." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EFINACONAZOLE (FDA JUBLIA 10% NDA203567) ---------- */
FDB_M("efinaconazole", {
  inn: "Efinaconazole", atc: "D01AC19", cls: "Topical triazole antifungal (nail solution)",
  linked: [],
  forms: ["Topical solution 10% with flow-through brush [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits fungal lanosterol 14α-demethylase (ergosterol synthesis) [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal systemic absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Onychomycosis of the toenails due to T. rubrum and T. mentagrophytes [FDA]."], paed: ["Children 6 years and over [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Toenail onychomycosis", "Apply once daily for 48 weeks, covering the toenail, folds, bed, hyponychium and under the nail plate [FDA]."]],
  paed: { tiers: ["6 years and over: as adults [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult use.", calcNote: "Topical — no calculator." },
  adj: { ...E1_STD, renal: "Not applicable (topical) [NEP].", hepatic: "Not applicable (topical) [NEP].", other: "Topical only; flammable — keep away from flame [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Ingrown toenail, application-site dermatitis, vesicles, pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Nail response over 48 weeks [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Jublia (efinaconazole) topical solution 10% — FDA label (DailyMed)", E1_DM("922d4d25-c530-11e1-9b21-0800200c9a66")], E1_BT],
  dose: { tagline: "Toenail fungus solution — once daily for 48 weeks.",
    adult: [{ ind: "Toenail onychomycosis", text: "Once daily for 48 weeks." }],
    child: [{ ind: "6 years and over", text: "As adults." }] }
});

/* ---------- EFLAPEGRASTIM (FDA ROLVEDON BLA761148) ---------- */
FDB_M("eflapegrastim", {
  inn: "Eflapegrastim", atc: "L03AA19", cls: "Long-acting granulocyte colony-stimulating factor",
  linked: [],
  forms: ["Pre-filled syringe 13.2 mg/0.6 mL [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Pegylated G-CSF analogue (Fc conjugate) that stimulates neutrophil production [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Reduce febrile neutropenia with myelosuppressive chemotherapy for non-myeloid cancers [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Per chemotherapy cycle", "13.2 mg SC once per cycle, about 24 hours after cytotoxic chemotherapy; not from 14 days before to 24 hours after chemotherapy [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed 13.2 mg." },
  adj: { ...E1_STD, other: "Not for mobilising stem cells [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Leukocytosis and bone pain [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [FDA]." },
  contra: ["Serious allergic reactions to eflapegrastim, pegfilgrastim or filgrastim products (including anaphylaxis) [FDA]."],
  ae: { common: ["Fatigue, nausea, diarrhoea, bone pain, headache, anaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Splenic rupture, ARDS, serious allergic reactions, sickle cell crisis, glomerulonephritis, aortitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count; spleen symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Rolvedon (eflapegrastim-xnst) — FDA label (DailyMed)", E1_DM("6e436115-62e7-4729-aeb0-ff78ea685206")], E1_BT],
  dose: { tagline: "Once-per-cycle G-CSF about 24 h after chemotherapy.",
    adult: [{ ind: "Febrile neutropenia prevention", text: "13.2 mg SC once per cycle, about 24 h after chemotherapy." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EFLORNITHINE (FDA IWILFIN oral NDA215500) ---------- */
FDB_M("eflornithine", {
  inn: "Eflornithine", atc: "L01XX80 D11AX16 P01CX03", cls: "Ornithine decarboxylase inhibitor",
  linked: [],
  forms: ["Tablets 192 mg (IWILFIN, neuroblastoma) [FDA]; cream 13.9% (facial hair) and IV (sleeping sickness) exist in other labels.", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Irreversibly inhibits ornithine decarboxylase, lowering polyamines [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally cleared — halve the dose in severe renal impairment (eGFR under 30) [FDA]."],
  ind: { adult: ["High-risk neuroblastoma maintenance after at least partial response to prior multiagent therapy including anti-GD2 immunotherapy (adults and children) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Same (children) [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Neuroblastoma (by BSA, orally twice daily, up to 2 years)", "BSA over 1.5 m²: 768 mg (4 tablets); 0.75–1.5 m²: 576 mg (3 tablets); 0.5 to under 0.75 m²: 384 mg (2 tablets); 0.25 to under 0.5 m²: 192 mg (1 tablet). Recalculate BSA every 3 months [FDA]."], ["Severe renal impairment (eGFR under 30)", "BSA over 1.5: 384 mg twice daily; 0.75–1.5: 384 mg morning and 192 mg evening; 0.5 to under 0.75: 192 mg twice daily; 0.25 to under 0.5: 192 mg once daily [FDA]."], ["Before starting", "Baseline audiogram, full blood count and liver tests [FDA]."]],
  paed: { tiers: ["Same BSA table as adults [FDA]."], transition: "—", calcNote: "BSA table — shown as text." },
  adj: { renal: "eGFR under 30: reduced doses (table) [FDA].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Tablets may be swallowed, chewed, or crushed into soft food or liquid [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Hearing loss, otitis media, diarrhoea, cough, sinusitis, pneumonia, raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Hearing loss [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Audiogram, blood counts and liver tests at baseline and during treatment [FDA]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Iwilfin (eflornithine) tablets — FDA label (DailyMed)", E1_DM("6716d8cc-66e6-4cee-935c-ccb85ed984f5")], E1_BT],
  dose: { tagline: "Oral neuroblastoma maintenance dosed by body surface area.",
    adult: [{ ind: "Neuroblastoma maintenance", text: "192–768 mg twice daily by BSA; halved table if eGFR under 30." }],
    child: [{ ind: "Neuroblastoma maintenance", text: "192–768 mg twice daily by BSA." }] }
});

/* ---------- ELACESTRANT (FDA ORSERDU NDA217639) ---------- */
FDB_M("elacestrant", {
  inn: "Elacestrant", atc: "L02BA04", cls: "Oral selective oestrogen receptor degrader (SERD)", risk: "High-alert — oral antineoplastic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Tablets 86 mg, 345 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds and degrades the oestrogen receptor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — avoid strong or moderate CYP3A4 inhibitors and inducers [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["ER-positive, HER2-negative, ESR1-mutated advanced or metastatic breast cancer after at least one line of endocrine therapy (postmenopausal women or adult men) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Breast cancer (ESR1 mutation)", "345 mg once daily with food [FDA]."], ["Hepatic impairment", "Child-Pugh B: 258 mg once daily; Child-Pugh C: avoid [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Child-Pugh B: 258 mg once daily; C: avoid; A: no change [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Lipid rises — check lipids [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Musculoskeletal pain, nausea, raised cholesterol and triglycerides, fatigue, vomiting, decreased appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Dyslipidaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Lipid profile before and during treatment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "elacestrant", indication_id: "bc", label: "ESR1-mutated breast cancer — 345 mg once daily with food", route: "PO", population: E1_ADULT, basis: "fixed", dose: { value: 345, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 345, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 345, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Child-Pugh B: 258 mg once daily; Child-Pugh C: avoid"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Orserdu (elacestrant) — FDA label (DailyMed)", E1_DM("aa66ae5c-2bd2-4444-8178-b55651e054ef")], E1_BT],
  dose: { tagline: "Oral SERD for ESR1-mutated breast cancer — once daily with food.",
    adult: [{ ind: "ER+/HER2– breast cancer with ESR1 mutation", text: "345 mg once daily with food (258 mg in Child-Pugh B).", calc: ["bc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ELADOCAGENE EXUPARVOVEC (FDA KEBILIDI BLA125722) ---------- */
FDB_M("eladocagene-exuparvovec", {
  inn: "Eladocagene exuparvovec", atc: "N07XX", cls: "AAV2 gene therapy (DDC gene)",
  linked: [],
  forms: ["Suspension for intraputaminal infusion, single-dose vial [FDA].", "Bhutan: not available [BT-NEML]."],
  moa: "Delivers a functional DDC gene to putamen neurons, restoring dopamine synthesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable [NEP]."],
  ind: { adult: ["Aromatic L-amino acid decarboxylase (AADC) deficiency (adults and children; accelerated approval) [FDA]."], paed: ["AADC deficiency once skull maturity is reached [FDA]."] },
  adult: [["Single dose", "1.8 × 10¹¹ vector genomes (0.32 mL total) as four 0.08 mL infusions — two sites in each putamen — at 0.003 mL/min (27 minutes per site) in one stereotactic surgery [FDA]."]],
  paed: { tiers: ["Same single dose once skull maturity is confirmed on neuroimaging [FDA]."], transition: "—", calcNote: "Neurosurgical gene therapy — no calculator." },
  adj: { ...E1_STD, other: "Specialist neurosurgical centres only [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not applicable [NEP].", animal: "Not applicable [NEP].", manage: "Not applicable [NEP]." },
  contra: ["Skull maturity not yet reached on neuroimaging [FDA]."],
  ae: { common: ["Dyskinesia, pyrexia, hypotension, anaemia, procedural complications [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Procedural complications (CSF leak, haemorrhage) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Post-operative neurological monitoring; dyskinesia [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Kebilidi (eladocagene exuparvovec-tneq) — FDA label (DailyMed)", E1_DM("9d6a6401-c6b5-4f29-af11-67707d249482")], E1_BT],
  dose: { tagline: "One-time brain gene therapy for AADC deficiency.",
    adult: [{ ind: "AADC deficiency", text: "1.8 × 10¹¹ vg intraputaminal, single surgery." }],
    child: [{ ind: "AADC deficiency", text: "Same, once skull is mature." }] }
});

/* ---------- ELAFIBRANOR (FDA IQIRVO NDA218860) ---------- */
FDB_M("elafibranor", {
  inn: "Elafibranor", atc: "A05AX06", cls: "PPAR alpha/delta agonist",
  linked: [],
  forms: ["Tablets 80 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "PPAR-α/δ agonist that reduces bile acid synthesis and inflammation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No renal adjustment [FDA]."],
  ind: { adult: ["Primary biliary cholangitis with UDCA (inadequate response) or alone if UDCA not tolerated (accelerated approval) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["PBC", "80 mg once daily with or without food [FDA]."], ["Before starting", "Check for muscle pain or myopathy; exclude pregnancy [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment in mild, moderate or severe renal impairment [FDA].", hepatic: "Monitor cirrhosis for decompensation; consider stopping if Child-Pugh B or C [FDA].", pregnancy: "Exclude pregnancy before starting [FDA].", other: "Bile acid sequestrants: separate by at least 4 hours [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Weight gain, abdominal pain, nausea, vomiting, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myalgia, myopathy, rhabdomyolysis [FDA] [UNVERIFIED-KNOWLEDGE]", "Fractures [FDA] [UNVERIFIED-KNOWLEDGE]", "Liver injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests; CK if muscle symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "elafibranor", indication_id: "pbc", label: "PBC — 80 mg once daily", route: "PO", population: E1_ADULT, basis: "fixed", dose: { value: 80, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 80, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["With UDCA or alone if UDCA not tolerated"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Iqirvo (elafibranor) — FDA label (DailyMed)", E1_DM("d78aa14f-6ec1-4b1d-a4ae-e48658137a25")], E1_BT],
  dose: { tagline: "Second-line oral therapy for primary biliary cholangitis.",
    adult: [{ ind: "Primary biliary cholangitis", text: "80 mg once daily.", calc: ["pbc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ELAGOLIX (FDA ORILISSA NDA210450) ---------- */
FDB_M("elagolix", {
  inn: "Elagolix", atc: "H01CC03", cls: "Oral GnRH receptor antagonist",
  linked: [],
  forms: ["Tablets 150, 200 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks pituitary GnRH receptors, lowering LH, FSH and oestradiol [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["OATP1B1 substrate — strong OATP1B1 inhibitors contraindicated [FDA]."],
  ind: { adult: ["Moderate to severe endometriosis pain [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Endometriosis pain", "150 mg once daily for up to 24 months, or 200 mg twice daily for up to 6 months (normal liver function or mild impairment) [FDA]."], ["Moderate hepatic impairment", "150 mg once daily for up to 6 months [FDA]."], ["Starting", "Exclude pregnancy or start within 7 days of menses onset [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Moderate (Child-Pugh B): 150 mg once daily, up to 6 months; severe: contraindicated [FDA].", pregnancy: "Contraindicated in pregnancy (early pregnancy loss) [FDA].", other: "Duration limited by bone loss; use non-hormonal contraception [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Pregnancy [FDA].", "Known osteoporosis [FDA].", "Severe hepatic impairment [FDA].", "Strong OATP1B1 inhibitors (e.g. ciclosporin, gemfibrozil) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hot flushes, headache, nausea, insomnia, amenorrhoea, mood changes [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Bone mineral density loss [FDA]", "Suicidal ideation and mood disorders [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bone density if long use; mood; liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "elagolix", indication_id: "endo", label: "Endometriosis pain — 150 mg once daily (up to 24 months)", route: "PO", population: E1_ADULT, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Alternative: 200 mg twice daily for up to 6 months", "Moderate hepatic impairment: 150 mg daily, up to 6 months"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Orilissa (elagolix) — FDA label (DailyMed)", E1_DM("a86757b3-09c5-fd3b-1223-244e94f50a66")], E1_BT],
  dose: { tagline: "Oral GnRH antagonist for endometriosis pain — duration limited by bone loss.",
    adult: [{ ind: "Endometriosis pain", text: "150 mg once daily (up to 24 months) or 200 mg twice daily (up to 6 months).", calc: ["endo"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ELAPEGADEMASE (FDA REVCOVI BLA761092) ---------- */
FDB_M("elapegademase", {
  inn: "Elapegademase", atc: "L03AX21", cls: "Pegylated recombinant adenosine deaminase (enzyme replacement)",
  linked: [],
  forms: ["Injection 2.4 mg/1.5 mL (1.6 mg/mL) single-dose vial [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Replaces missing adenosine deaminase, clearing toxic purine metabolites [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Monitor trough ADA activity and red-cell dAXP to adjust [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["ADA severe combined immune deficiency (ADA-SCID) [FDA]."], paed: ["ADA-SCID in children [FDA]."] },
  adult: [["Adagen-naïve", "0.4 mg/kg weekly IM (by ideal or actual weight, whichever is greater), given as 0.2 mg/kg twice a week [FDA]."], ["Switching from Adagen", "0.2 mg/kg weekly IM (or per conversion formula) [FDA]."], ["Maintenance", "Adjust by trough plasma ADA activity and dAXP levels [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same mg/kg dosing as adults [FDA]."], transition: "—", calcNote: "Weight = greater of ideal or actual." },
  adj: { ...E1_STD, other: "Intramuscular only; caution with thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Cough, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Injection-site bleeding in thrombocytopenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Lymphoma risk in ADA-SCID [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Trough plasma ADA activity, red-cell dAXP, immune function [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "elapegademase", indication_id: "naive", label: "ADA-SCID (Adagen-naïve) — 0.2 mg/kg IM twice a week", route: "IM", population: { min_age_months: 0, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.2, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1.6, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Twice a week (0.4 mg/kg/week)", "Use the greater of ideal or actual body weight — enter that weight"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Revcovi (elapegademase-lvlr) — FDA label (DailyMed)", E1_DM("8c073f84-cdd0-40e4-b3a9-172687267f28")], E1_BT],
  dose: { tagline: "Enzyme replacement for ADA-SCID — twice-weekly IM.",
    adult: [{ ind: "ADA-SCID", text: "0.2 mg/kg IM twice weekly (naïve); 0.2 mg/kg weekly when switching from Adagen.", calc: ["naive"] }],
    child: [{ ind: "ADA-SCID", text: "Same mg/kg.", calc: ["naive"] }] }
});

/* ---------- ELETRIPTAN (FDA RELPAX NDA021016) ---------- */
FDB_M("eletriptan", {
  inn: "Eletriptan", atc: "N02CC06", cls: "5-HT1B/1D agonist (triptan)",
  linked: [],
  forms: ["Tablets 20, 40 mg [FDA].", "Bhutan: not on the NEML (sumatriptan is the NEML triptan) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "5-HT1B/1D agonist: cranial vasoconstriction and inhibition of neuropeptide release [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — not within 72 h of strong CYP3A4 inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute treatment of migraine with or without aura [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Acute migraine", "20 mg or 40 mg; maximum single dose 40 mg. If the headache persists or returns, a second dose after at least 2 hours; maximum 80 mg in 24 hours [FDA]."], ["Frequency", "Safety of treating more than 3 attacks per 30 days not established [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No clearance change, but blood pressure rises were seen [FDA].", hepatic: "Severe hepatic impairment: not recommended [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Not within 24 h of another triptan or ergot; serotonin syndrome with SSRIs/SNRIs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypertension and other cardiovascular effects [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; monitor for at least 20 hours [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Ischaemic coronary artery disease or coronary vasospasm including Prinzmetal's angina [FDA].", "WPW or other accessory-pathway arrhythmias [FDA] [UNVERIFIED-KNOWLEDGE].", "Stroke, TIA, hemiplegic or basilar migraine [FDA] [UNVERIFIED-KNOWLEDGE].", "Peripheral vascular disease, ischaemic bowel disease, uncontrolled hypertension [FDA] [UNVERIFIED-KNOWLEDGE].", "Within 24 h of another triptan or ergot; within 72 h of strong CYP3A4 inhibitors [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Asthenia, nausea, dizziness, somnolence, chest or throat tightness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myocardial ischaemia, infarction, arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE]", "Stroke [FDA] [UNVERIFIED-KNOWLEDGE]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cardiovascular assessment in patients with risk factors before first use [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "eletriptan", indication_id: "mig", label: "Acute migraine — 20–40 mg (repeat after 2 h; max 80 mg/day)", route: "PO", population: E1_ADULT, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose", value_max: 40 }, interval_h: null, divided_doses: 1, caps: { max_single: 40, max_daily: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Second dose at least 2 hours after the first", "Maximum 80 mg in 24 hours"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Relpax (eletriptan) — FDA label (DailyMed)", E1_DM("2a501dbd-3ea8-47e4-9fcb-07035b8c8c9e")], E1_BT],
  dose: { tagline: "Triptan for acute migraine — not in coronary disease.",
    adult: [{ ind: "Acute migraine", text: "20–40 mg; may repeat after 2 h; maximum 80 mg/day.", calc: ["mig"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ELIGLUSTAT (FDA CERDELGA NDA205494) ---------- */
FDB_M("eliglustat", {
  inn: "Eliglustat", atc: "A16AX10", cls: "Glucosylceramide synthase inhibitor (substrate reduction therapy)",
  linked: [],
  forms: ["Capsules 84 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits glucosylceramide synthase, reducing substrate accumulation in Gaucher disease [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Metabolised by CYP2D6 and CYP3A — dose by CYP2D6 metabolizer status [FDA]."],
  ind: { adult: ["Long-term treatment of adults with Gaucher disease type 1 who are CYP2D6 extensive, intermediate or poor metabolizers (FDA-cleared test) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Extensive or intermediate metabolizers", "84 mg twice daily [FDA]."], ["Poor metabolizers", "84 mg once daily [FDA]."], ["Interactions / hepatic", "Reduce to 84 mg once daily or avoid with CYP2D6/CYP3A inhibitors or hepatic impairment per label table; avoid grapefruit [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Avoid in moderate–severe renal impairment or ESRD per label (EMs) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "EMs: moderate or severe — contraindicated; IMs and PMs: any degree — contraindicated [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "Risk of PR, QTc and QRS prolongation with interacting drugs [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["EMs: strong or moderate CYP2D6 inhibitor plus strong or moderate CYP3A inhibitor; moderate or severe hepatic impairment; mild hepatic impairment with strong or moderate CYP2D6 inhibitor [FDA].", "IMs: strong or moderate CYP2D6 inhibitor plus strong or moderate CYP3A inhibitor; strong CYP3A inhibitor; any hepatic impairment [FDA].", "PMs: strong CYP3A inhibitor; any hepatic impairment [FDA]."],
  ae: { common: ["Fatigue, headache, nausea, diarrhoea, back pain, limb pain, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiac arrhythmias from ECG interval prolongation [FDA]"] },
  monitor: ["ECG at baseline in cardiac disease; review interacting drugs [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "eliglustat", indication_id: "em", label: "Gaucher type 1, CYP2D6 EM or IM — 84 mg twice daily", route: "PO", population: E1_ADULT, basis: "fixed", dose: { value: 84, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 84, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 84, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Poor metabolizers: 84 mg once daily", "Check CYP2D6 genotype and interacting drugs first"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cerdelga (eliglustat) — FDA label (DailyMed)", E1_DM("819f828a-b888-4e46-83fc-94d774a28a83")], E1_BT],
  dose: { tagline: "Oral Gaucher type 1 therapy — dose by CYP2D6 genotype; many interactions.",
    adult: [{ ind: "Gaucher disease type 1", text: "84 mg twice daily (EM/IM) or once daily (PM).", calc: ["em"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ELINZANETANT (FDA LYNKUET NDA219469) ---------- */
FDB_M("elinzanetant", {
  inn: "Elinzanetant", atc: "G02CX07", cls: "Neurokinin-1 and -3 receptor antagonist",
  linked: [],
  forms: ["Capsules 60 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks NK1 and NK3 receptors on KNDy neurons that drive hot flushes [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — dose changes with interacting drugs per label [FDA]."],
  ind: { adult: ["Moderate to severe vasomotor symptoms (hot flushes) due to menopause [FDA]."], paed: ["Not applicable [NEP]."] },
  adult: [["Menopausal hot flushes", "120 mg (two 60 mg capsules) once daily at bedtime; swallow whole [FDA]."], ["Before starting", "Exclude pregnancy; baseline liver tests (ALT, AST, ALP, bilirubin) [FDA]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment (eGFR 15 to under 90) [FDA].", hepatic: "Mild: no adjustment; moderate to severe: not recommended [FDA].", pregnancy: "Contraindicated in pregnancy (pregnancy loss or stillbirth) [FDA].", other: "Somnolence — caution driving [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Pregnancy [FDA]."],
  ae: { common: ["Headache, fatigue, dizziness, somnolence [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "CNS depression [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests at baseline and during treatment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: E1_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "elinzanetant", indication_id: "vms", label: "Menopausal hot flushes — 120 mg at bedtime", route: "PO", population: E1_ADULT, basis: "fixed", dose: { value: 120, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 120, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 60, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Two 60 mg capsules at bedtime", "Not in moderate or severe hepatic impairment"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Lynkuet (elinzanetant) — FDA label (DailyMed)", E1_DM("f42884ff-7dff-419c-8a0c-affe2ed73818")], E1_BT],
  dose: { tagline: "Non-hormonal bedtime capsule for menopausal hot flushes.",
    adult: [{ ind: "Menopausal vasomotor symptoms", text: "120 mg once daily at bedtime.", calc: ["vms"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* Brand names — BATCH E1 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"econazole":{"IN":[],"BD":[["Ecoren VT","Advanced Chemical Industries PLC","150 mg"]],"src":["https://medex.com.bd/brands/38595/ecoren-vt-150-mg-vaginal-tablet"]},"eculizumab":{"IN":[["Soliris","Astrazeneca Pharma India Ltd","Soliris 300Mg Vial Of 30Ml Solution For Infusion"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/soliris-300mg-vial-of-30ml-solution-for-infusion-4743606"]},"edaravone":{"IN":[["Aravon","Sun Pharma","Aravon Ampoule Of 20Ml Injection"],["Edastar","Lupin","Edastar Ampoule Of 20Ml Injection"],["Edavit","Micro Labs","Edavit 1.5Mg Ampoule Of 20Ml Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/aravon-injection-25357","https://pharmeasy.in/online-medicine-order/edastar-inj-20ml-77761","https://pharmeasy.in/online-medicine-order/edavit-inj-20ml-85822"]},"edoxaban":{"IN":[["Supexa Od","Zuventus Health Care Ltd","Supexa Od 30Mg Strip Of 15 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/supexa-od-30mg-strip-of-15-tablets-4477902"]},"efavirenz":{"IN":[["Efavir","Cipla Limited","Efavir 600Mg Bottle Of 30 Tablets"]],"BD":[["Avifanz","Beximco Pharmaceuticals PLC","600 mg"],["Adiva","Square Pharmaceuticals PLC","600 mg"]],"src":["https://pharmeasy.in/online-medicine-order/efavir-600mg-bottle-of-30-tablets-44983","https://medex.com.bd/brands/9723/avifanz-600-mg-tablet","https://medex.com.bd/brands/9724/adiva-600-mg-tablet"]},"efinaconazole":{"IN":[],"BD":[["Onicoma","Advanced Chemical Industries PLC","10%"]],"src":["https://medex.com.bd/brands/37874/onicoma-10-topical-solution"]},"eflornithine":{"IN":[],"BD":[["Wonica","Incepta Pharmaceuticals Ltd","13.9%"],["Elorim","Square Pharmaceuticals PLC","13.9%"],["Vaniflo","UniMed UniHealth Pharmaceuticals Ltd","11.5%"]],"src":["https://medex.com.bd/brands/26050/wonica-139-cream","https://medex.com.bd/brands/27503/elorim-139-cream","https://medex.com.bd/brands/30112/vaniflo-115-cream"]},"elacestrant":{"IN":[],"BD":[["Elacentra","Beacon Pharmaceuticals PLC","345 mg"]],"src":["https://medex.com.bd/brands/39294/elacentra-345-mg-tablet"]},"elagolix":{"IN":[["Egolix","Sun Pharma","Egolix 150Mg Strip Of 10 Tablets"],["Unigolix","Alembic Pharmaceuticals Ltd","Unigolix 150Mg Strip Of 10 Tablets"],["Ilatab","Ajanta Pharma Limited","Ilatab 200Mg Strip Of 10 Tablets"]],"BD":[["Egolix","ACME Laboratories Ltd","200 mg"],["Elagox","Nuvista Pharma PLC","150 mg"],["Orili","Square Pharmaceuticals PLC","200 mg"]],"src":["https://pharmeasy.in/online-medicine-order/egolix-150mg-strip-of-10-tablets-4311510","https://pharmeasy.in/online-medicine-order/unigolix-150mg-strip-of-10-tablets-4359813","https://pharmeasy.in/online-medicine-order/ilatab-200mg-strip-of-10-tablets-4349520","https://medex.com.bd/brands/29378/egolix-200-mg-tablet","https://medex.com.bd/brands/32036/elagox-150-mg-tablet","https://medex.com.bd/brands/32270/orili-200-mg-tablet"]},"eletriptan":{"IN":[["Elipran","Intas Pharmaceuticals Ltd","Elipran 20Mg Strip Of 4 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/elipran-20mg-strip-of-4-tablets-192118"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
