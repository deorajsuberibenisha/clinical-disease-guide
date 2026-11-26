/* Clinical Disease Guide — Drug monograph database, batch U-2 (26 Nov 2026).
   U has no further current FDA labels after ustekinumab, so this batch starts V (vadadustat … vinorelbine). Same rules as js/fdb-a2.js.
   Uses FDB_M from js/fdb-a2.js. Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js; vinblastine and vincristine boxed set from label text (labels open "WARNINGS").
   Labels added: varenicline tablets (pack was Tyrvaya nasal spray); full Valcyte and valacyclovir labels for the kidney tables (pack text trimmed). */
(function () { // U-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const U2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("vadadustat", {
  inn: "Vadadustat", atc: "B03XA08", cls: "HIF prolyl-hydroxylase inhibitor",
  linked: [],
  forms: ["Tablets 150, 300, 450 mg [FDA]."],
  moa: "Stabilises hypoxia-inducible factor, raising endogenous erythropoietin [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Anaemia of CKD in adults on dialysis for at least 3 months [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "300 mg once daily, with or without food [FDA]."], ["Adjust", "Steps of 150 mg, increases no more often than every 4 weeks, to keep Hb 10–11 g/dL; range 150–600 mg [FDA]."], ["Before and during", "Correct other causes of anaemia; iron if ferritin under 100 mcg/L or TSAT under 20%; liver tests monthly for 6 months [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Starting dose." },
  adj: { renal: "For dialysis patients only [FDA].", hepatic: "Not recommended in cirrhosis or active liver disease [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Separate from iron, phosphate binders by at least 1 hour [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Uncontrolled hypertension [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity [FDA]"],
  ae: { common: ["Hypertension, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Death, MI, stroke, VTE, vascular access thrombosis [FDA]", "Hepatotoxicity [FDA]", "Seizures, GI erosion [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Hb at start and monthly; ALT/AST/bilirubin; blood pressure [FDA]."],
  local: notBT,
  calc: [C("vadadustat", "start", "Anaemia of CKD on dialysis — start 300 mg once daily", "PO", ADULT, "fixed", 300, 24, { formulations: [{ form: "tablet", strength: 300, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Adjust by 150 mg, max 600 mg", "Target Hb 10–11 g/dL"] })],
  sources: [["FDA", "Vafseo (vadadustat) — FDA label (DailyMed)", U2_DM("ac9da724-5a62-4ab6-a89c-376a25f6195b")], NEML_SRC],
  dose: { tagline: "Oral HIF-PH inhibitor for dialysis anaemia — 300 mg daily, adjust to Hb 10–11.",
    boxedTitle: "Increased risk of death, myocardial infarction, stroke, venous thromboembolism, and thrombosis of vascular access",
    boxed: "VAFSEO increases the risk of thrombotic vascular events, including major adverse cardiovascular events (MACE). Targeting a hemoglobin level greater than 11 g/dL is expected to further increase the risk of death and arterial and venous thrombotic events, as occurs with erythropoietin stimulating agents (ESAs), which also increase erythropoietin levels. No trial has identified a hemoglobin target level, dose of VAFSEO, or dosing strategy that does not increase these risks. Use the lowest dose of VAFSEO sufficient to reduce the need for red blood cell transfusions [FDA].",
    adult: [{ ind: "Anaemia of CKD on dialysis", text: "300 mg daily; 150–600 mg by Hb.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("valaciclovir", {
  inn: "Valaciclovir", atc: "J05AB11", cls: "Nucleoside antiviral (aciclovir prodrug)",
  linked: [],
  forms: ["Tablets 500 mg, 1 g; suspension can be made from tablets (25 or 50 mg/mL) [FDA]."],
  moa: "Converted to aciclovir, which inhibits herpesvirus DNA polymerase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion of aciclovir — dose by CrCl [FDA]."],
  ind: { adult: ["Cold sores, genital herpes (first, recurrent, suppression, reduce transmission), herpes zoster [FDA]."], paed: ["Cold sores 12 years+; chickenpox 2 to under 18 years [FDA]."] },
  adult: [["Herpes zoster", "1 g three times daily for 7 days [FDA]."], ["Genital herpes, first episode", "1 g twice daily for 10 days [FDA]."], ["Genital herpes, recurrence", "500 mg twice daily for 3 days [FDA]."], ["Suppression", "1 g once daily (500 mg if 9 or fewer recurrences a year); HIV: 500 mg twice daily [FDA]."], ["Cold sores", "2 g every 12 hours for 1 day [FDA]."], ["Zoster with kidney impairment", "CrCl 30–49: 1 g every 12 h; 10–29: 1 g every 24 h; under 10: 500 mg every 24 h [FDA]."]],
  paed: { tiers: ["Chickenpox 2 to under 18 years: 20 mg/kg three times daily for 5 days, max 1 g per dose [FDA].", "Cold sores 12 years+: as adults [FDA]."], transition: "Adult dosing from 12 years (cold sores) / 18 years.", calcNote: "Fixed adult doses; mg/kg for chickenpox." },
  adj: { renal: "Reduce by CrCl per label table [FDA].", hepatic: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Hydrate well [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Acute kidney injury, neurotoxicity (confusion, hallucinations) especially in kidney impairment [FDA].", animal: LD, manage: "Haemodialysis removes aciclovir [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to valaciclovir or aciclovir [FDA]."],
  ae: { common: ["Headache, nausea, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["TTP/HUS in advanced HIV or transplant [FDA] [UNVERIFIED-KNOWLEDGE]", "Acute kidney injury [FDA]", "CNS effects in older or kidney-impaired patients [FDA]"] },
  monitor: ["Kidney function in older adults [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "Valaciclovir is not on the Bhutan NEML 2025; check aciclovir [BT-NEML] [UNVERIFIED-KNOWLEDGE].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." },
  calc: [
    C("valaciclovir", "zoster", "Herpes zoster — 1 g every 8 h for 7 days", "PO", ADULT, "fixed", 1000, 8, { formulations: [{ form: "tablet", strength: 1000, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 30, crcl_max: 49.999, action: "extend_interval", factor: 12 }, { crcl_min: 10, crcl_max: 29.999, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 9.999, action: "reduce_dose", set_value: 500, interval_h: 24 }] }),
    C("valaciclovir", "hsv1", "Genital herpes first episode — 1 g every 12 h for 10 days", "PO", ADULT, "fixed", 1000, 12, { formulations: [{ form: "tablet", strength: 1000, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 10, crcl_max: 29.999, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 9.999, action: "reduce_dose", set_value: 500, interval_h: 24 }] }),
    C("valaciclovir", "varicella", "Chickenpox, 2 to under 18 years — 20 mg/kg every 8 h (max 1 g)", "PO", pop(24, 216, null, null), "mg_per_kg", 20, 8, { caps: { max_single: 1000, unit: "mg" }, formulations: [{ form: "suspension", strength: 50, unit: "mg/mL" }], rounding: "0.5 mL", flags: ["5 days", "Start within 24 hours of rash"] })
  ],
  sources: [["FDA", "Valacyclovir tablets — FDA label (DailyMed)", U2_DM("26634bf1-c6d8-4d48-9a4e-845c47df07f8")], NEML_SRC],
  dose: { tagline: "Aciclovir prodrug — zoster 1 g three times daily × 7 days; less if kidneys are impaired.",
    adult: [{ ind: "Herpes zoster", text: "1 g every 8 h × 7 days.", calc: ["zoster"] }, { ind: "Genital herpes, first episode", text: "1 g every 12 h × 10 days.", calc: ["hsv1"] }, { ind: "Recurrent genital herpes", text: "500 mg twice daily × 3 days." }, { ind: "Cold sores", text: "2 g every 12 h for 1 day." }],
    child: [{ ind: "Chickenpox 2–17 years", text: "20 mg/kg three times daily × 5 days, max 1 g/dose.", calc: ["varicella"] }] }
});

FDB_M("valbenazine", {
  inn: "Valbenazine", atc: "N07XX13", cls: "VMAT2 inhibitor",
  linked: [],
  forms: ["Capsules and sprinkle capsules 40, 60, 80 mg [FDA]."],
  moa: "Reversibly inhibits vesicular monoamine transporter 2, reducing dopamine release [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 and CYP2D6 [FDA]."],
  ind: { adult: ["Tardive dyskinesia [FDA].", "Chorea of Huntington's disease [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Tardive dyskinesia", "40 mg once daily for 1 week, then 80 mg once daily; 40 or 60 mg may be considered [FDA]."], ["Huntington's chorea", "40 mg once daily, increase by 20 mg every 2 weeks to 80 mg [FDA]."], ["Moderate–severe hepatic impairment / CYP2D6 poor metabolisers", "40 mg once daily [FDA]."], ["Sprinkle", "Open over soft food (not milk or water) or swallow whole [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "Severe (CrCl under 30): not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate–severe: 40 mg daily [FDA].", pregnancy: NEP, other: "Strong CYP3A4 inhibitors: 40 mg; avoid strong inducers and MAOIs [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Somnolence, fatigue, anticholinergic effects, balance problems [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Depression and suicidality in Huntington's disease [FDA]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Parkinsonism, neuroleptic malignant syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality (Huntington's); ECG if QT risk [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("valbenazine", "td", "Tardive dyskinesia — 40 mg once daily, then 80 mg", "PO", ADULT, "fixed", 40, 24, { formulations: [{ form: "capsule", strength: 40, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["Increase to 80 mg after 1 week", "Liver impairment / CYP2D6 poor metaboliser: stay at 40 mg"] })],
  sources: [["FDA", "Ingrezza (valbenazine) — FDA label (DailyMed)", U2_DM("4c970164-cafb-421f-9eb5-c226ef0a3417")], NEML_SRC],
  dose: { tagline: "VMAT2 inhibitor for tardive dyskinesia and Huntington's chorea — 40 mg rising to 80 mg daily.",
    boxedTitle: "Depression and suicidal ideation and behavior in patients with Huntington's disease",
    boxed: "VMAT2 inhibitors, including INGREZZA and INGREZZA SPRINKLE, can increase the risk of depression and suicidal thoughts and behavior in patients with Huntington's disease. Anyone considering the use of INGREZZA or INGREZZA SPRINKLE must balance the risks of depression and suicidal ideation and behavior with the clinical need for treatment of chorea. Closely monitor patients for the emergence or worsening of depression, suicidal ideation, or unusual changes in behavior. Inform patients, their caregivers, and families of the risk of depression and suicidal ideation and behavior and instruct them to report behaviors of concern promptly to the treating physician. Particular caution should be exercised in treating patients with a history of depression or prior suicide attempts or ideation, which are increased in frequency in patients with Huntington's disease [FDA].",
    adult: [{ ind: "Tardive dyskinesia", text: "40 mg daily × 1 week, then 80 mg.", calc: ["td"] }, { ind: "Huntington's chorea", text: "40 mg, +20 mg every 2 weeks to 80 mg." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("valganciclovir", {
  inn: "Valganciclovir", atc: "J05AB14", cls: "Nucleoside antiviral (ganciclovir prodrug)",
  linked: [],
  forms: ["Tablets 450 mg; oral solution 50 mg/mL [FDA]."],
  moa: "Converted to ganciclovir, inhibiting CMV DNA polymerase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion — dose by CrCl [FDA]."],
  ind: { adult: ["CMV retinitis in AIDS [FDA].", "Prevention of CMV disease in kidney, heart, kidney-pancreas transplant at high risk [FDA]."], paed: ["CMV prevention after kidney (4 months–16 years) or heart (1 month–16 years) transplant [FDA]."] },
  adult: [["CMV retinitis induction", "900 mg twice daily for 21 days, with food [FDA]."], ["Maintenance", "900 mg once daily [FDA]."], ["Transplant prevention", "900 mg once daily from within 10 days to day 100 (heart, kidney-pancreas) or day 200 (kidney) [FDA]."], ["Kidney (induction / maintenance)", "CrCl 40–59: 450 mg twice daily / 450 mg daily; 25–39: 450 mg daily / every 2 days; 10–24: every 2 days / twice weekly; under 10 on dialysis: not recommended [FDA]."], ["Handling", "Do not break or crush tablets; adults use tablets [FDA]."]],
  paed: { tiers: ["Dose (mg) = 7 × BSA × CrCl (modified Schwartz), once daily, max 900 mg (label algorithm) [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose for adults.", calcNote: "Paediatric formula not supported — use the label algorithm." },
  adj: { renal: "Per label CrCl table [FDA].", hepatic: NEP, pregnancy: "Fetal toxicity — contraception during and after [FDA].", other: "Avoid with other myelosuppressants where possible [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Myelosuppression, kidney toxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Haemodialysis, haematopoietic growth factors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to valganciclovir or ganciclovir [FDA]."],
  ae: { common: ["Diarrhoea, fever, nausea, neutropenia, anaemia, tremor [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Leucopenia, neutropenia, anaemia, thrombocytopenia [FDA]", "Impaired fertility, fetal toxicity, carcinogenicity [FDA]", "Acute kidney injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts and creatinine frequently [FDA]."],
  local: notBT,
  calc: [
    C("valganciclovir", "induct", "CMV retinitis induction — 900 mg every 12 h (21 days)", "PO", ADULT, "fixed", 900, 12, { formulations: [{ form: "tablet", strength: 450, unit: "mg", whole: true }], rounding: "2 tablets", renal: [{ crcl_min: 40, crcl_max: 59.999, action: "reduce_dose", set_value: 450, interval_h: 12 }, { crcl_min: 25, crcl_max: 39.999, action: "reduce_dose", set_value: 450, interval_h: 24 }, { crcl_min: 10, crcl_max: 24.999, action: "reduce_dose", set_value: 450, interval_h: 48 }, { crcl_min: 0, crcl_max: 9.999, action: "avoid", note: "not recommended at CrCl under 10 (dialysis)" }], flags: ["With food"] }),
    C("valganciclovir", "maint", "CMV maintenance / transplant prevention — 900 mg once daily", "PO", ADULT, "fixed", 900, 24, { formulations: [{ form: "tablet", strength: 450, unit: "mg", whole: true }], rounding: "2 tablets", renal: [{ crcl_min: 40, crcl_max: 59.999, action: "reduce_dose", set_value: 450, interval_h: 24 }, { crcl_min: 25, crcl_max: 39.999, action: "reduce_dose", set_value: 450, interval_h: 48 }, { crcl_min: 10, crcl_max: 24.999, action: "avoid", note: "CrCl 10–24: label dose is 450 mg twice weekly — not a daily dose" }, { crcl_min: 0, crcl_max: 9.999, action: "avoid", note: "not recommended at CrCl under 10 (dialysis)" }], flags: ["With food"] })
  ],
  sources: [["FDA", "Valcyte (valganciclovir) — FDA label (DailyMed)", U2_DM("4c517a39-2ded-4c5a-8d56-276853414b31")], NEML_SRC],
  dose: { tagline: "Oral ganciclovir prodrug — 900 mg twice daily (induction) or once daily; cut doses by CrCl.",
    boxedTitle: "Hematologic toxicity, impairment of fertility, fetal toxicity, mutagenesis and carcinogenesis",
    boxed: "Hematologic Toxicity: Severe leukopenia, neutropenia, anemia, thrombocytopenia, pancytopenia, and bone marrow failure including aplastic anemia have been reported in patients treated with VALCYTE. Impairment of Fertility: Based on animal data and limited human data, VALCYTE may cause temporary or permanent inhibition of spermatogenesis in males and suppression of fertility in females. Fetal Toxicity: Based on animal data, VALCYTE has the potential to cause birth defects in humans. Mutagenesis and Carcinogenesis: Based on animal data, VALCYTE has the potential to cause cancers in humans [FDA].",
    adult: [{ ind: "CMV retinitis induction", text: "900 mg twice daily × 21 days.", calc: ["induct"] }, { ind: "Maintenance / transplant prevention", text: "900 mg once daily.", calc: ["maint"] }],
    child: [{ ind: "Transplant CMV prevention", text: "7 × BSA × CrCl mg once daily (label algorithm)." }] }
});

FDB_M("valrubicin", {
  inn: "Valrubicin", atc: "L01DB09", cls: "Anthracycline (intravesical)",
  risk: ONC,
  linked: [],
  forms: ["Intravesical solution 40 mg/mL, 5 mL vials [FDA]."],
  moa: "Anthracycline inhibiting topoisomerase II and nucleic acid synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Negligible systemic absorption from an intact bladder [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["BCG-refractory carcinoma in situ of the bladder when cystectomy is not immediately possible [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "800 mg (20 mL) intravesically once a week for 6 weeks; retain 2 hours [FDA]."], ["Timing", "At least 2 weeks after TURBT or fulguration [FDA]."], ["Route", "Intravesical only — never IV or IM [FDA]."], ["Handling", "Cytotoxic precautions; avoid PVC tubing (DEHP leaching) [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Not with perforated bladder or compromised bladder mucosa [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Perforated bladder [FDA]", "Small bladder capacity (cannot hold 75 mL) [FDA]", "Active UTI [FDA]", "Hypersensitivity to anthracyclines or Cremophor EL [FDA]"],
  ae: { common: ["Urinary frequency, urgency, dysuria, bladder spasm, haematuria, red urine [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Myelosuppression if absorbed (perforation) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Cystoscopy, cytology every 3 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("valrubicin", "std", "Bladder CIS — 800 mg intravesically weekly × 6", "Intravesical", ADULT, "fixed", 800, 168, { rounding: "20 mL", flags: ["Retain 2 hours", "Never IV"] })],
  sources: [["FDA", "Valstar (valrubicin) — FDA label (DailyMed)", U2_DM("e96f30a0-6662-11de-8f80-0002a5d5c51b")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Intravesical anthracycline for BCG-refractory bladder CIS — 800 mg weekly × 6.",
    adult: [{ ind: "BCG-refractory CIS", text: "800 mg intravesically weekly × 6.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("valsartan", {
  inn: "Valsartan", atc: "C09CA03", cls: "Angiotensin II receptor blocker",
  linked: [],
  forms: ["Tablets 40, 80, 160, 320 mg; oral suspension 4 mg/mL (can be compounded) [FDA]."],
  moa: "Blocks the AT1 receptor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Suspension gives 60% higher exposure than tablets — not interchangeable mg for mg [FDA]."],
  ind: { adult: ["Hypertension [FDA].", "Heart failure (NYHA II–IV) [FDA].", "Post-MI left ventricular dysfunction [FDA]."], paed: ["Hypertension, 1–16 years [FDA]."] },
  adult: [["Hypertension", "80 or 160 mg once daily; range 80–320 mg [FDA]."], ["Heart failure", "40 mg twice daily, up to 80 then 160 mg twice daily [FDA]."], ["Post-MI", "From 12 hours: 20 mg twice daily, titrate to 160 mg twice daily [FDA]."]],
  paed: { tiers: ["Hypertension 1–16 years: 1 mg/kg once daily (up to 40 mg); up to 4 mg/kg (max 160 mg) [FDA].", "Under 1 year: not recommended [FDA]."], transition: "Adult doses for adults.", calcNote: "mg/kg in children." },
  adj: { renal: "Not studied in children with GFR under 30 [FDA].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Fetal toxicity — stop when pregnancy is detected [FDA].", other: "Hyperkalaemia with potassium supplements, sparing diuretics [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, tachycardia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]", "With aliskiren in diabetes [FDA]"],
  ae: { common: ["Dizziness, headache, hyperkalaemia, raised creatinine, hypotension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Fetal toxicity [FDA]", "Angioedema [FDA] [UNVERIFIED-KNOWLEDGE]", "Renal failure in renal artery stenosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, potassium, creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("valsartan", "htn", "Hypertension — 80 mg once daily (80–320 mg)", "PO", ADULT, "fixed", 80, 24, { formulations: [{ form: "tablet", strength: 80, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["May start 160 mg", "Max 320 mg/day"] }),
    C("valsartan", "hf", "Heart failure — start 40 mg twice daily", "PO", ADULT, "fixed", 40, 12, { formulations: [{ form: "tablet", strength: 40, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Titrate to 160 mg twice daily"] }),
    C("valsartan", "ped", "Hypertension, 1–16 years — 1 mg/kg once daily (max 40 mg start)", "PO", pop(12, 204, null, null), "mg_per_kg", 1, 24, { caps: { max_single: 40, unit: "mg" }, formulations: [{ form: "suspension", strength: 4, unit: "mg/mL" }], rounding: "0.5 mL", flags: ["Up to 4 mg/kg (max 160 mg) by response", "Suspension and tablets not interchangeable mg for mg"] })
  ],
  sources: [["FDA", "Valsartan tablets — FDA label (DailyMed)", U2_DM("170427e5-c74c-c7fc-e063-6294a90a6860")], NEML_SRC],
  dose: { tagline: "ARB — hypertension 80–320 mg daily; heart failure 40 → 160 mg twice daily.",
    cautionTitle: "Use with care",
    caution: "Stop as soon as pregnancy is detected — drugs acting on the renin-angiotensin system can injure and kill the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "80–160 mg once daily, up to 320 mg.", calc: ["htn"] }, { ind: "Heart failure", text: "40 mg twice daily → 160 mg twice daily.", calc: ["hf"] }, { ind: "Post-MI", text: "20 mg twice daily → 160 mg twice daily." }],
    child: [{ ind: "Hypertension 1–16 years", text: "1 mg/kg daily (max 40 mg start), up to 4 mg/kg.", calc: ["ped"] }] }
});

FDB_M("vamorolone", {
  inn: "Vamorolone", atc: "H02AB18", cls: "Dissociative corticosteroid",
  linked: [],
  forms: ["Oral suspension 40 mg/mL [FDA]."],
  moa: "Glucocorticoid and mineralocorticoid receptor ligand with reduced transactivation [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Duchenne muscular dystrophy, 2 years and over [FDA]."], paed: ["2 years and over [FDA]."] },
  adult: [["DMD", "6 mg/kg once daily with a meal, max 300 mg/day (over 50 kg); may reduce to 2 mg/kg by tolerability [FDA]."], ["Mild–moderate hepatic impairment", "2 mg/kg once daily, max 100 mg/day [FDA]."], ["Stopping", "Taper if used more than 1 week [FDA]."], ["Vaccines", "Live vaccines at least 4–6 weeks before starting [FDA]."]],
  paed: { tiers: ["2 years and over: 6 mg/kg once daily, max 300 mg [FDA]."], transition: "Same.", calcNote: "6 mg/kg capped at 300 mg." },
  adj: { renal: NEP, hepatic: "Mild–moderate: 2 mg/kg (max 100 mg); severe: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Adrenal insufficiency on stopping; stress dosing may be needed [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Cushingoid features, psychiatric disorders, vomiting, weight gain, vitamin D deficiency [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["HPA-axis suppression [FDA] [UNVERIFIED-KNOWLEDGE]", "Infections [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Growth, weight, BP, glucose, eyes [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vamorolone", "dmd", "Duchenne muscular dystrophy — 6 mg/kg once daily (max 300 mg)", "PO", pop(24, null, null, null), "mg_per_kg", 6, 24, { caps: { max_single: 300, unit: "mg" }, formulations: [{ form: "suspension", strength: 40, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["With a meal", "Hepatic impairment: 2 mg/kg (max 100 mg)"] })],
  sources: [["FDA", "Agamree (vamorolone) — FDA label (DailyMed)", U2_DM("fb376f09-cf9c-42b5-b4dd-02d5bcd73211")], NEML_SRC],
  dose: { tagline: "Steroid for Duchenne muscular dystrophy — 6 mg/kg daily, max 300 mg.",
    adult: [{ ind: "DMD", text: "6 mg/kg daily, max 300 mg.", calc: ["dmd"] }],
    child: [{ ind: "DMD 2 years+", text: "6 mg/kg daily, max 300 mg.", calc: ["dmd"] }] }
});

FDB_M("vandetanib", {
  inn: "Vandetanib", atc: "L01EX04", cls: "Multikinase inhibitor (RET, VEGFR, EGFR)",
  risk: ONC,
  linked: [],
  forms: ["Tablets 100, 300 mg [FDA]."],
  moa: "Inhibits RET, VEGFR and EGFR tyrosine kinases [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long half-life (about 19 days) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Symptomatic or progressive medullary thyroid cancer, unresectable or metastatic [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["MTC", "300 mg once daily until progression or toxicity [FDA]."], ["Moderate kidney impairment", "Start 200 mg [FDA]."], ["Toxicity", "Reduce to 200 mg then 100 mg for grade 3+ toxicity or QTcF over 500 ms [FDA]."], ["Dispersal", "Can be dispersed in water only, including via NG/G-tube [FDA]."], ["Programme", "Restricted REMS prescribing [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose with kidney step." },
  adj: { renal: "Moderate–severe: 200 mg start [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate–severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid QT-prolonging drugs; keep K, Mg, Ca normal [FDA]." },
  tox: { human: "QT prolongation [FDA].", animal: LD, manage: "ECG monitoring; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Congenital long QT syndrome [FDA]"],
  ae: { common: ["Diarrhoea, rash, acneiform dermatitis, nausea, hypertension, headache, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["QT prolongation, torsades, sudden death [FDA]", "Severe skin reactions, ILD, ischaemic stroke, haemorrhage, heart failure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG and electrolytes at baseline, 2–4 weeks, 8–12 weeks, then every 3 months [FDA]; TSH [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vandetanib", "std", "Medullary thyroid cancer — 300 mg once daily", "PO", ADULT, "fixed", 300, 24, { formulations: [{ form: "tablet", strength: 300, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "reduce_dose", set_value: 200, interval_h: 24 }], flags: ["ECG and electrolytes before and during"] })],
  sources: [["FDA", "Caprelsa (vandetanib) — FDA label (DailyMed)", U2_DM("e5721cb8-4185-47b9-bbb3-1c587e558a03")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Kinase inhibitor for medullary thyroid cancer — 300 mg daily; strict QT monitoring.",
    boxedTitle: "QT prolongation, torsades de pointes, and sudden death",
    boxed: "CAPRELSA can prolong the QT interval. Torsades de pointes and sudden death have occurred in patients receiving CAPRELSA. Do not use CAPRELSA in patients with hypocalcemia, hypokalemia, hypomagnesemia, or long QT syndrome. Correct hypocalcemia, hypokalemia and/or hypomagnesemia prior to CAPRELSA administration. Monitor electrolytes periodically. Avoid drugs known to prolong the QT interval [FDA].",
    adult: [{ ind: "Medullary thyroid cancer", text: "300 mg once daily (200 mg in kidney impairment).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("vardenafil", {
  inn: "Vardenafil", atc: "G04BE09", cls: "Phosphodiesterase-5 inhibitor",
  linked: [],
  forms: ["Tablets 2.5, 5, 10, 20 mg; orally disintegrating 10 mg (not interchangeable) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits PDE-5 [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA]."],
  ind: { adult: ["Erectile dysfunction [FDA]."], paed: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["ED", "10 mg about 60 minutes before sex; 5–20 mg; maximum once daily [FDA]."], ["65 years and over", "Start 5 mg [FDA]."], ["CYP3A4 inhibitors", "Ritonavir or cobicistat: max 2.5 mg per 72 h; indinavir, saquinavir, atazanavir, ketoconazole/itraconazole 400 mg, clarithromycin: max 2.5 mg per 24 h; others per label [FDA]."]],
  paed: { tiers: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "Dialysis: not studied [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Moderate: start 5 mg, max 10 mg [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid in congenital long QT and with class IA/III antiarrhythmics [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Nitrates [FDA]", "Riociguat / sGC stimulators [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Headache, flushing, rhinitis, dyspepsia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypotension with nitrates [FDA]", "Priapism, NAION, sudden hearing loss [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: notBT,
  calc: [C("vardenafil", "ed", "Erectile dysfunction — 10 mg as needed", "PO", ADULT, "fixed", 10, null, { formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["Range 5–20 mg; max once daily", "65+: start 5 mg", "Never with nitrates"] })],
  sources: [["FDA", "Vardenafil hydrochloride tablets — FDA label (DailyMed)", U2_DM("6d2859a7-6def-455f-856b-9db86b1fd355")], NEML_SRC],
  dose: { tagline: "PDE-5 inhibitor for ED — 10 mg an hour before sex (5–20 mg); never with nitrates.",
    cautionTitle: "Use with care",
    caution: "Never with nitrates or riociguat. Strong CYP3A4 inhibitors (ritonavir, ketoconazole, clarithromycin) need much lower maximum doses [FDA].",
    adult: [{ ind: "Erectile dysfunction", text: "10 mg as needed (5–20 mg).", calc: ["ed"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("varenicline", {
  inn: "Varenicline", atc: "N07BA03", cls: "Nicotinic receptor partial agonist",
  linked: [],
  forms: ["Tablets 0.5, 1 mg [FDA].", "Nasal spray (Tyrvaya) for dry eye is a different product [FDA]."],
  moa: "Partial agonist at alpha4beta2 nicotinic receptors, easing craving and blocking nicotine reward [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion largely unchanged [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Aid to smoking cessation [FDA]."], paed: ["Not recommended for 16 years and under [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "1 week before quit date (or quit between days 8 and 35): 0.5 mg daily days 1–3, 0.5 mg twice daily days 4–7 [FDA]."], ["Then", "1 mg twice daily for 12 weeks; another 12 weeks for those who quit [FDA]."], ["Gradual quit", "Cut smoking by half in 4 weeks, again in 4 weeks, quit by 12 weeks; 24 weeks total [FDA]."], ["Severe kidney impairment (CrCl under 30)", "0.5 mg once daily, up to 0.5 mg twice daily; dialysis max 0.5 mg daily [FDA]."], ["Taking", "After food with a full glass of water [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not recommended for 16 years and under [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Maintenance dose." },
  adj: { renal: "CrCl under 30: max 0.5 mg twice daily [FDA].", hepatic: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "May impair driving; reduce alcohol [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serious hypersensitivity or skin reaction to varenicline [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, insomnia, abnormal dreams, headache, constipation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Neuropsychiatric events (mood, agitation, suicidality) [FDA] [UNVERIFIED-KNOWLEDGE]", "Seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Angioedema, severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Somnambulism [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and behaviour changes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("varenicline", "maint", "Smoking cessation — 1 mg twice daily (after week 1 titration)", "PO", ADULT, "fixed", 1, 12, { formulations: [{ form: "tablet", strength: 1, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 0.5, interval_h: 12 }], flags: ["Days 1–3: 0.5 mg daily; days 4–7: 0.5 mg twice daily", "Dialysis: max 0.5 mg once daily"] })],
  sources: [["FDA", "Varenicline tablets — FDA label (DailyMed)", U2_DM("0552d7ff-9fe8-9c9f-e063-6394a90a79fe")], NEML_SRC],
  dose: { tagline: "Smoking-cessation tablet — titrate over a week to 1 mg twice daily for 12 weeks.",
    adult: [{ ind: "Smoking cessation", text: "0.5 mg daily × 3 days, 0.5 mg twice daily × 4 days, then 1 mg twice daily × 12 weeks.", calc: ["maint"] }],
    child: [{ ind: "16 years and under", text: "Not recommended." }] }
});

FDB_M("vedolizumab", {
  inn: "Vedolizumab", atc: "L04AG05", cls: "Anti-alpha4beta7 integrin monoclonal antibody",
  linked: [],
  forms: ["Powder for IV infusion 300 mg; SC prefilled syringe or pen 108 mg [FDA]."],
  moa: "Gut-selective blockade of lymphocyte trafficking [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Moderate–severe ulcerative colitis and Crohn's disease [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Induction", "300 mg IV over about 30 minutes at weeks 0, 2 and 6 [FDA]."], ["IV maintenance", "300 mg every 8 weeks [FDA]."], ["SC maintenance", "108 mg SC every 2 weeks, starting in place of the week-6 IV dose or later [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Stop", "If no benefit by week 14 [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed doses." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Check TB; update vaccines before starting [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serious hypersensitivity to vedolizumab [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nasopharyngitis, headache, arthralgia, nausea, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion reactions and hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]", "Infections, PML (theoretical) [FDA] [UNVERIFIED-KNOWLEDGE]", "Liver injury [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["New neurological symptoms (PML); liver tests if symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("vedolizumab", "iv", "UC / Crohn's — 300 mg IV (weeks 0, 2, 6, then every 8 weeks)", "IV", ADULT, "fixed", 300, 1344, { rounding: "1 vial", flags: ["Induction at weeks 0, 2 and 6"] }),
    C("vedolizumab", "sc", "UC / Crohn's maintenance — 108 mg SC every 2 weeks", "SC", ADULT, "fixed", 108, 336, { rounding: "1 pen/syringe", flags: ["After at least 2 IV doses"] })
  ],
  sources: [["FDA", "Entyvio (vedolizumab) — FDA label (DailyMed)", U2_DM("6e94621c-1a95-4af9-98d1-52b9e6f1949c")], NEML_SRC],
  dose: { tagline: "Gut-selective integrin blocker for UC and Crohn's — 300 mg IV at 0, 2, 6 weeks then every 8 weeks.",
    adult: [{ ind: "UC / Crohn's", text: "300 mg IV weeks 0, 2, 6, then every 8 weeks (or 108 mg SC every 2 weeks).", calc: ["iv", "sc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("velaglucerase-alfa", {
  inn: "Velaglucerase alfa", atc: "A16AB10", cls: "Enzyme replacement (glucocerebrosidase)",
  linked: [],
  forms: ["Powder for infusion 400 units vial [FDA]."],
  moa: "Replaces glucocerebrosidase in Gaucher disease [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Type 1 Gaucher disease [FDA]."], paed: ["4 years and over [FDA]."] },
  adult: [["Treatment-naive", "60 units/kg IV every other week over 60 minutes [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Switching from imiglucerase", "Same dose as imiglucerase, 2 weeks after the last dose [FDA]."], ["Preparation", "Reconstitute; dilute in 100 mL saline; 0.2 µm filter [FDA]."], ["Range", "45–60 units/kg in trials [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["4 years and over: 60 units/kg every other week [FDA]."], transition: "Same.", calcNote: "units/kg every 2 weeks." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Supervise for anaphylaxis [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: [NEP],
  ae: { common: ["Infusion reactions, headache, dizziness, abdominal pain, back pain, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]"] },
  monitor: ["Infusion reactions [FDA]."],
  local: notBT,
  calc: [C("velaglucerase-alfa", "std", "Type 1 Gaucher — 60 units/kg IV every other week", "IV", pop(48, null, null, null), "mg_per_kg", 60, 336, { dose: { value: 60, unit: "IU", per: "dose" }, rounding: "round to whole vials", flags: ["Over 60 minutes"] })],
  sources: [["FDA", "VPRIV (velaglucerase alfa) — FDA label (DailyMed)", U2_DM("ca02f7a4-ae4f-43c1-a06a-259fe4fcf9cf")], NEML_SRC],
  dose: { tagline: "Enzyme replacement for Gaucher type 1 — 60 units/kg every 2 weeks.",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Anaphylaxis has occurred during the early course of enzyme replacement and after extended duration of therapy. Initiate VPRIV in a healthcare setting with appropriate medical monitoring and support measures, including access to cardiopulmonary resuscitation equipment. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue VPRIV and immediately initiate appropriate medical treatment, including use of epinephrine. Inform patients of the symptoms of life-threatening hypersensitivity reactions, including anaphylaxis and to seek immediate medical care should symptoms occur [FDA].",
    adult: [{ ind: "Gaucher disease type 1", text: "60 units/kg IV every other week.", calc: ["std"] }],
    child: [{ ind: "4 years and over", text: "Same.", calc: ["std"] }] }
});

FDB_M("velmanase-alfa", {
  inn: "Velmanase alfa", atc: "A16AB15", cls: "Enzyme replacement (alpha-mannosidase)",
  linked: [],
  forms: ["Powder for infusion 10 mg vial [FDA]."],
  moa: "Replaces lysosomal alpha-mannosidase [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Non-CNS manifestations of alpha-mannosidosis [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Dose", "1 mg/kg (actual weight) IV once weekly [FDA]."], ["Before", "Pregnancy test in females of reproductive potential; consider antihistamine, antipyretic, corticosteroid premedication [FDA]."]],
  paed: { tiers: ["Same mg/kg [FDA]."], transition: "Same.", calcNote: "1 mg/kg weekly." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "May cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: [NEP],
  ae: { common: ["Infusion reactions, hypersensitivity, nasopharyngitis, fever, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]"] },
  monitor: ["Infusion reactions; appropriate support available [FDA]."],
  local: notBT,
  calc: [C("velmanase-alfa", "std", "Alpha-mannosidosis — 1 mg/kg IV once weekly", "IV", pop(null, null, null, null), "mg_per_kg", 1, 168, { rounding: "round to whole vials" })],
  sources: [["FDA", "Lamzede (velmanase alfa-tycv) — FDA label (DailyMed)", U2_DM("36d50a08-60bd-40eb-807c-778d69bf2d2e")], NEML_SRC],
  dose: { tagline: "Enzyme replacement for alpha-mannosidosis — 1 mg/kg weekly.",
    boxedTitle: "Severe hypersensitivity reactions",
    boxed: "Patients treated with LAMZEDE have experienced hypersensitivity reactions, including anaphylaxis. Appropriate medical support measures, including cardiopulmonary resuscitation equipment, should be readily available during LAMZEDE administration. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue LAMZEDE immediately and initiate appropriate medical treatment. In patients with severe hypersensitivity reaction, a desensitization procedure to LAMZEDE may be considered [FDA].",
    adult: [{ ind: "Alpha-mannosidosis", text: "1 mg/kg IV weekly.", calc: ["std"] }],
    child: [{ ind: "Alpha-mannosidosis", text: "Same.", calc: ["std"] }] }
});

FDB_M("vemurafenib", {
  inn: "Vemurafenib", atc: "L01EC01", cls: "BRAF kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 240 mg [FDA]."],
  moa: "Inhibits BRAF V600E [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate; affects CYP1A2 substrates [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["BRAF V600E-mutated unresectable or metastatic melanoma [FDA].", "Erdheim-Chester disease with BRAF V600 [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Melanoma", "960 mg (four 240 mg tablets) every 12 hours, with or without food [FDA]."], ["Missed dose", "Up to 4 hours before the next dose; no extra dose after vomiting [FDA]."], ["Before", "Confirm BRAF V600E [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Sun protection — photosensitivity [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Arthralgia, rash, alopecia, fatigue, photosensitivity, nausea, skin papilloma [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cutaneous squamous cell carcinoma and new melanoma [FDA] [UNVERIFIED-KNOWLEDGE]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin and hypersensitivity reactions, liver injury, uveitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Skin exams every 2 months; ECG and electrolytes; liver tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vemurafenib", "std", "BRAF V600E melanoma — 960 mg every 12 h", "PO", ADULT, "fixed", 960, 12, { formulations: [{ form: "tablet", strength: 240, unit: "mg", whole: true }], rounding: "4 tablets" })],
  sources: [["FDA", "Zelboraf (vemurafenib) — FDA label (DailyMed)", U2_DM("38eea320-7e0c-485a-bc30-98c3c45e2763")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "BRAF inhibitor for V600E melanoma — 960 mg twice daily.",
    adult: [{ ind: "BRAF V600E melanoma", text: "960 mg every 12 h.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("venetoclax", {
  inn: "Venetoclax", atc: "L01XX52", cls: "BCL-2 inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 10, 50, 100 mg; starting pack [FDA]."],
  moa: "Inhibits BCL-2, restoring apoptosis [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate — strong inhibitors contraindicated during ramp-up in CLL [FDA]."],
  ind: { adult: ["CLL/SLL [FDA].", "Newly diagnosed AML (75 years+ or unfit for intensive chemotherapy) with azacitidine, decitabine or low-dose cytarabine [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["CLL ramp-up (5 weeks)", "20 mg daily week 1, 50 mg week 2, 100 mg week 3, 200 mg week 4, then 400 mg daily [FDA]."], ["AML", "Day 1 100 mg, day 2 200 mg, day 3 400 mg, then 400 mg daily (with azacitidine or decitabine) or 600 mg from day 4 (with low-dose cytarabine) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["TLS prophylaxis", "Hydration and anti-hyperuricaemic before first dose; labs by risk [FDA]."], ["Taking", "Once daily with a meal and water [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed ramp-up doses." },
  adj: { renal: "CrCl under 80 raises TLS risk — more monitoring [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: reduce dose by 50% [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid grapefruit, Seville orange, starfruit [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; TLS management [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Strong CYP3A inhibitors at start and during ramp-up (CLL/SLL) [FDA]"],
  ae: { common: ["Neutropenia, diarrhoea, nausea, anaemia, upper respiratory infection, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Tumour lysis syndrome, including fatal [FDA]", "Neutropenia and serious infections [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["TLS chemistry (K, urate, phosphate, Ca, creatinine) before and after each ramp-up step; blood counts [FDA]."],
  local: notBT,
  calc: [C("venetoclax", "cll", "CLL/SLL target — 400 mg once daily (after 5-week ramp-up)", "PO", ADULT, "fixed", 400, 24, { formulations: [{ form: "tablet", strength: 100, unit: "mg", whole: true }], rounding: "4 tablets", flags: ["Ramp-up 20 → 50 → 100 → 200 mg weekly first", "TLS prophylaxis and labs"] })],
  sources: [["FDA", "Venclexta (venetoclax) — FDA label (DailyMed)", U2_DM("b118a40d-6b56-cee3-10f6-ded821a97018")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "BCL-2 inhibitor — weekly ramp-up to 400 mg daily in CLL; tumour lysis precautions essential.",
    cautionTitle: "Use with care",
    caution: "Tumour lysis syndrome can be fatal: assess risk, hydrate, give an anti-hyperuricaemic and check blood chemistry at each ramp-up step [FDA].",
    adult: [{ ind: "CLL / SLL", text: "Ramp up over 5 weeks to 400 mg daily.", calc: ["cll"] }, { ind: "AML (with hypomethylating agent)", text: "100 → 200 → 400 mg days 1–3, then 400 mg daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("vericiguat", {
  inn: "Vericiguat", atc: "C01DX22", cls: "Soluble guanylate cyclase stimulator",
  linked: [],
  forms: ["Tablets 2.5, 5, 10 mg [FDA]."],
  moa: "Stimulates soluble guanylate cyclase, increasing cGMP [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Symptomatic chronic heart failure with EF under 45% after a recent worsening event [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "5 mg once daily with food (2.5 mg if risk of hypotension) [FDA]."], ["Titrate", "Double about every 2 weeks to 10 mg once daily as tolerated [FDA]."], ["Swallowing", "Can be crushed in water [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Starting dose." },
  adj: { renal: "eGFR under 15 or dialysis: not studied [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: not studied [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Embryo-fetal toxicity — exclude pregnancy; contraception during and 1 month after [FDA].", other: "Not with other sGC stimulators; avoid PDE-5 inhibitors [FDA]." },
  tox: { human: "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Other sGC stimulators such as riociguat [FDA]", "Pregnancy [FDA]"],
  ae: { common: ["Hypotension, anaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Symptomatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Embryo-fetal toxicity [FDA]"] },
  monitor: ["Blood pressure; pregnancy tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vericiguat", "start", "HFrEF after worsening — start 5 mg once daily", "PO", ADULT, "fixed", 5, 24, { formulations: [{ form: "tablet", strength: 5, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["2.5 mg if hypotension risk", "Double every 2 weeks to 10 mg"] })],
  sources: [["FDA", "Verquvo (vericiguat) — FDA label (DailyMed)", U2_DM("17056d73-1b1b-4bf2-9c07-b7a9367f0d6d")], NEML_SRC],
  dose: { tagline: "sGC stimulator for worsening HFrEF — 5 mg daily, doubling to 10 mg.",
    boxedTitle: "Embryo-fetal toxicity",
    boxed: "Females of reproductive potential: Exclude pregnancy before the start of treatment. To prevent pregnancy, females of reproductive potential must use effective forms of contraception during treatment and for one month after stopping treatment. Do not administer VERQUVO to a pregnant female because it may cause fetal harm [FDA].",
    adult: [{ ind: "Heart failure (EF under 45%)", text: "5 mg daily → 10 mg.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("verteporfin", {
  inn: "Verteporfin", atc: "S01LA01", cls: "Photosensitiser (photodynamic therapy)",
  linked: [],
  forms: ["Powder for injection 15 mg vial [FDA]."],
  moa: "Light-activated by 689 nm laser, causing local vessel occlusion [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Predominantly classic subfoveal choroidal neovascularisation (AMD, pathologic myopia, presumed ocular histoplasmosis) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "6 mg/m² IV in 30 mL total (5% dextrose) over 10 minutes (3 mL/min) [FDA]."], ["Light", "689 nm laser, 50 J/cm² at 600 mW/cm² over 83 seconds, starting 15 minutes after the infusion begins [FDA]."], ["Protect", "From light for 48 hours after [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "mg/m²." },
  adj: { renal: NEP, hepatic: "Moderate–severe: caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid direct sunlight and bright light for 48 hours [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Photosensitivity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Protect from light [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Porphyria [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Injection-site reactions, visual disturbance, back pain during infusion [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe vision decrease within 7 days [FDA] [UNVERIFIED-KNOWLEDGE]", "Extravasation burns [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Vision; every 3 months for retreatment [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("verteporfin", "std", "Choroidal neovascularisation — 6 mg/m² IV over 10 min", "IV", ADULT, "mg_per_m2", 6, null, { formulations: [{ form: "reconstituted", strength: 2, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Dilute to 30 mL with 5% dextrose", "Laser 15 minutes after start"] })],
  sources: [["FDA", "Visudyne (verteporfin) — FDA label (DailyMed)", U2_DM("952f4c80-50b1-4308-9ee6-311ffefb13df")], NEML_SRC],
  dose: { tagline: "Photodynamic therapy dye for choroidal neovascularisation — 6 mg/m² IV plus laser.",
    adult: [{ ind: "Subfoveal CNV", text: "6 mg/m² IV over 10 min, then laser.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("vibegron", {
  inn: "Vibegron", atc: "G04BD15", cls: "Beta-3 adrenergic agonist",
  linked: [],
  forms: ["Tablets 75 mg [FDA]."],
  moa: "Relaxes the detrusor via beta-3 receptors [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Overactive bladder; also with BPH treatment in men [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["OAB", "75 mg once daily, with or without food [FDA]."], ["Swallowing", "Whole with water, or crushed into applesauce [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed dose." },
  adj: { renal: "eGFR under 15: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Digoxin levels may rise [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, nasopharyngitis, diarrhoea, nausea, UTI [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Urinary retention (outflow obstruction, antimuscarinics) [FDA] [UNVERIFIED-KNOWLEDGE]", "Angioedema [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Urinary retention in obstruction [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vibegron", "oab", "Overactive bladder — 75 mg once daily", "PO", ADULT, "fixed", 75, 24, { formulations: [{ form: "tablet", strength: 75, unit: "mg", whole: true }], rounding: "1 tablet" })],
  sources: [["FDA", "Gemtesa (vibegron) — FDA label (DailyMed)", U2_DM("25f21d25-14f8-4fda-91f6-7aa8b68aa1c8")], NEML_SRC],
  dose: { tagline: "Beta-3 agonist for overactive bladder — 75 mg once daily.",
    adult: [{ ind: "Overactive bladder", text: "75 mg once daily.", calc: ["oab"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("vigabatrin", {
  inn: "Vigabatrin", atc: "N03AG04", cls: "GABA-transaminase inhibitor antiepileptic",
  linked: [],
  forms: ["Tablets 500 mg; powder 500 mg sachets [FDA] [UNVERIFIED-KNOWLEDGE].", "Vigafyde oral solution 100 mg/mL — more concentrated than reconstituted powder (50 mg/mL) [FDA]."],
  moa: "Irreversibly inhibits GABA transaminase, raising brain GABA [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Refractory complex partial seizures (adjunct, 2 years+) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Infantile spasms, 1 month to 2 years [FDA]."] },
  adult: [["Refractory focal seizures (adults)", "500 mg twice daily, increase weekly by 500 mg/day to 1.5 g twice daily [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Infantile spasms", "50 mg/kg/day (25 mg/kg twice daily), increase by 25–50 mg/kg/day every 3 days to max 150 mg/kg/day (75 mg/kg twice daily) [FDA]."], ["Check strength", "Vigafyde 100 mg/mL differs from other products — verify mL [FDA]."], ["Vision", "Assess at baseline and every 3 months; restricted REMS programme [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Infantile spasms 1 month–2 years: 25 mg/kg twice daily, up to 75 mg/kg twice daily [FDA]."], transition: "Weight/age-based dosing for older children (label) [FDA] [UNVERIFIED-KNOWLEDGE].", calcNote: "Starting dose 25 mg/kg twice daily." },
  adj: { renal: "CrCl 50–80: reduce 25%; 30–50: 50%; 10–30: 75% [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Taper to stop — do not stop abruptly [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Sedation, coma [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Somnolence, fatigue, weight gain, irritability, upper respiratory infection [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Permanent bilateral visual field loss [FDA]", "MRI abnormalities in infants [FDA] [UNVERIFIED-KNOWLEDGE]", "Suicidality, anaemia, oedema [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Vision every 3 months during therapy and 3–6 months after stopping [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vigabatrin", "spasms", "Infantile spasms — start 25 mg/kg twice daily", "PO", pop(1, 24, null, null), "mg_per_kg", 25, 12, { formulations: [{ form: "solution", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["Vigafyde 100 mg/mL — check product strength", "Increase every 3 days; max 75 mg/kg twice daily"] })],
  sources: [["FDA", "Vigafyde (vigabatrin) oral solution 100 mg/mL — FDA label (DailyMed)", U2_DM("8d3d6316-33ab-41e8-9485-4495c218be56")], NEML_SRC],
  dose: { tagline: "Antiepileptic for infantile spasms — 25 mg/kg twice daily up to 75 mg/kg twice daily; vision loss risk.",
    boxedTitle: "Permanent vision loss",
    boxed: "VIGAFYDE can cause permanent bilateral concentric visual field constriction, including tunnel vision that can result in disability. In some cases, VIGAFYDE also can damage the central retina and may decrease visual acuity. The onset of vision loss from VIGAFYDE is unpredictable, and can occur within weeks of starting treatment or sooner, or at any time after starting treatment, even after months or years. Symptoms of vision loss from VIGAFYDE are unlikely to be recognized by patients or caregivers before vision loss is severe. Vision loss of milder severity, while often unrecognized by the patient or caregiver, can still adversely affect function. The risk of vision loss increases with increasing dose and cumulative exposure, but there is no dose or exposure known to be free of risk of vision loss. Vision assessment is recommended at baseline (no later than 4 weeks after starting VIGAFYDE), at least every 3 months during therapy, and about 3 to 6 months after the discontinuation of therapy. Once detected, vision loss due to VIGAFYDE is not reversible. It is expected that, even with frequent monitoring, some patients will develop severe vision loss. Consider drug discontinuation, balancing benefit and risk, if vision loss is documented. Risk of new or worsening vision loss continues as long as VIGAFYDE is used. It is possible that vision loss can worsen despite discontinuation of VIGAFYDE. Because of the risk of vision loss, VIGAFYDE should be withdrawn from patients with infantile spasms who fail to show substantial clinical benefit within 2 to 4 weeks of initiation, or sooner if treatment failure becomes obvious. Patient response to and continued need for VIGAFYDE should be periodically reassessed [FDA].",
    adult: [{ ind: "Refractory focal seizures", text: "500 mg twice daily → 1.5 g twice daily." }],
    child: [{ ind: "Infantile spasms (1 month–2 years)", text: "25 mg/kg twice daily → max 75 mg/kg twice daily.", calc: ["spasms"] }] }
});

FDB_M("vilazodone", {
  inn: "Vilazodone", atc: "N06AX24", cls: "SSRI and 5-HT1A partial agonist",
  linked: [],
  forms: ["Tablets 10, 20, 40 mg [FDA]."],
  moa: "Serotonin reuptake inhibition plus 5-HT1A partial agonism [UNVERIFIED-KNOWLEDGE].",
  pk: ["Take with food (absorption) [FDA]; CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Major depressive disorder [FDA]."], paed: ["Not approved [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["MDD", "10 mg once daily with food for 7 days, then 20 mg; may increase to 40 mg after at least 7 days [FDA]."], ["Target", "20–40 mg once daily [FDA]."], ["Before", "Screen for bipolar disorder [FDA]."], ["Stopping", "Taper [FDA]."]],
  paed: { tiers: ["Not approved [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Starting dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No change in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Strong CYP3A4 inhibitors: max 20 mg [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Serotonin syndrome, seizures [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs within 14 days; linezolid or IV methylene blue [FDA]"],
  ae: { common: ["Diarrhoea, nausea, vomiting, insomnia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidality in young people [FDA]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Bleeding, mania, hyponatraemia, angle-closure glaucoma [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality [FDA]."],
  local: notBT,
  calc: [C("vilazodone", "mdd", "Depression — start 10 mg once daily with food", "PO", ADULT, "fixed", 10, 24, { formulations: [{ form: "tablet", strength: 10, unit: "mg", whole: true }], rounding: "1 tablet", flags: ["20 mg after 7 days; max 40 mg"] })],
  sources: [["FDA", "Viibryd (vilazodone) — FDA label (DailyMed)", U2_DM("4c55ccfb-c4cf-11df-851a-0800200c9a66")], NEML_SRC],
  dose: { tagline: "Antidepressant — 10 mg with food for a week, then 20–40 mg daily.",
    boxedTitle: "Suicidal thoughts and behaviors",
    boxed: "Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening and for emergence of suicidal thoughts and behaviors. VIIBRYD is not approved for use in pediatric patients [FDA].",
    adult: [{ ind: "Major depression", text: "10 mg × 7 days, then 20–40 mg daily with food.", calc: ["mdd"] }],
    child: [{ ind: "Children", text: "Not approved." }] }
});

FDB_M("viloxazine", {
  inn: "Viloxazine", atc: "N06BA17", cls: "Selective noradrenaline reuptake inhibitor (non-stimulant ADHD)",
  linked: [],
  forms: ["Extended-release capsules 100, 150, 200 mg [FDA]."],
  moa: "Noradrenaline reuptake inhibition and serotonergic modulation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP1A2 inhibitor [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["ADHD [FDA]."], paed: ["ADHD, 6 years and over [FDA]."] },
  adult: [["Adults", "200 mg once daily; increase by 200 mg weekly to max 600 mg [FDA]."], ["Severe kidney impairment", "100 mg once daily; increase by 50–100 mg weekly to max 200 mg [FDA]."], ["Taking", "Whole, or opened onto applesauce or pudding [FDA]."]],
  paed: { tiers: ["6–11 years: 100 mg once daily, increase by 100 mg weekly to max 400 mg [FDA].", "12–17 years: 200 mg once daily; after 1 week may increase to 400 mg [FDA]."], transition: "Adult dosing from 18 years.", calcNote: "Starting doses by age." },
  adj: { renal: "eGFR under 30: 100 mg start, max 200 mg [FDA].", hepatic: "Not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid with sensitive CYP1A2 substrates (e.g. tizanidine, theophylline) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs within 14 days [FDA]", "Sensitive CYP1A2 substrates with narrow therapeutic range [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Somnolence, decreased appetite, fatigue, nausea, insomnia, irritability [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts and behaviours [FDA]", "Raised heart rate and BP [FDA] [UNVERIFIED-KNOWLEDGE]", "Mania in bipolar disorder [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality; heart rate and BP [FDA]."],
  local: notBT,
  calc: [
    C("viloxazine", "c6", "ADHD, 6–11 years — start 100 mg once daily", "PO", pop(72, 144, null, null), "fixed", 100, 24, { formulations: [{ form: "capsule", strength: 100, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["Increase 100 mg weekly; max 400 mg"] }),
    C("viloxazine", "c12", "ADHD, 12 years and over — start 200 mg once daily", "PO", pop(144, null, null, null), "fixed", 200, 24, { formulations: [{ form: "capsule", strength: 200, unit: "mg", whole: true }], rounding: "1 capsule", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 100, interval_h: 24 }], flags: ["12–17 y max 400 mg; adults max 600 mg", "Severe kidney impairment: max 200 mg"] })
  ],
  sources: [["FDA", "Qelbree (viloxazine) — FDA label (DailyMed)", U2_DM("aedf408d-0f84-418d-9416-7c39ddb0d29a")], NEML_SRC],
  dose: { tagline: "Non-stimulant ADHD capsule — 100 mg (6–11 y) or 200 mg (12 y+) daily, titrated weekly.",
    boxedTitle: "Suicidal thoughts and behaviors",
    boxed: "In clinical studies, higher rates of suicidal thoughts and behavior were reported in patients with ADHD treated with Qelbree than in patients treated with placebo. Closely monitor all Qelbree-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors [FDA].",
    adult: [{ ind: "ADHD", text: "200 mg daily, up to 600 mg.", calc: ["c12"] }],
    child: [{ ind: "6–11 years", text: "100 mg daily, up to 400 mg.", calc: ["c6"] }, { ind: "12–17 years", text: "200 mg daily, up to 400 mg.", calc: ["c12"] }] }
});

FDB_M("viltolarsen", {
  inn: "Viltolarsen", atc: "M09AX12", cls: "Antisense oligonucleotide (exon 53 skipping)",
  linked: [],
  forms: ["Injection 250 mg/5 mL vial [FDA]."],
  moa: "Skips exon 53 of the dystrophin pre-mRNA [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Duchenne muscular dystrophy amenable to exon 53 skipping (accelerated approval) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Dose", "80 mg/kg IV over 60 minutes once weekly [FDA]."], ["Dilution", "If under 100 mL, dilute in saline [FDA]."], ["Before", "Cystatin C, urine dipstick, urine protein:creatinine; consider GFR [FDA]."]],
  paed: { tiers: ["Same mg/kg [FDA]."], transition: "Same.", calcNote: "80 mg/kg weekly." },
  adj: { renal: "Kidney toxicity — monitor [FDA].", hepatic: NEP, pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: [NEP],
  ae: { common: ["Upper respiratory infection, injection-site reaction, cough, fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Kidney toxicity, including glomerulonephritis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Urine protein:creatinine monthly, cystatin C every 3 months [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("viltolarsen", "std", "DMD (exon 53) — 80 mg/kg IV once weekly", "IV", pop(null, null, null, null), "mg_per_kg", 80, 168, { formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "1 mL", flags: ["Over 60 minutes"] })],
  sources: [["FDA", "Viltepso (viltolarsen) — FDA label (DailyMed)", U2_DM("1ffff9a8-6d6a-4dcb-8493-1b6cc3a5d123")], NEML_SRC],
  dose: { tagline: "Exon 53 skipping therapy for Duchenne — 80 mg/kg IV weekly; monitor kidneys.",
    adult: [{ ind: "DMD exon 53", text: "80 mg/kg IV weekly.", calc: ["std"] }],
    child: [{ ind: "DMD exon 53", text: "Same.", calc: ["std"] }] }
});

FDB_M("vimseltinib", {
  inn: "Vimseltinib", atc: "L01EX27", cls: "CSF1R kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 14, 20, 30 mg (blister packs) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits colony-stimulating factor 1 receptor [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Symptomatic tenosynovial giant cell tumour where surgery would worsen function or cause severe morbidity [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["TGCT", "30 mg twice weekly, at least 72 hours apart, same days each week per blister pack [FDA]."], ["Missed dose", "Within 48 hours: take it; otherwise skip [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Swallow", "Whole [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Fixed twice-weekly dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Avoid with P-gp, BCRP, OCT2 substrates where possible [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Periorbital oedema, fatigue, raised AST/CK, rash, hypertension [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests before and during [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [C("vimseltinib", "std", "Tenosynovial giant cell tumour — 30 mg twice weekly (72 h apart)", "PO", ADULT, "fixed", 30, null, { formulations: [{ form: "capsule", strength: 30, unit: "mg", whole: true }], rounding: "1 capsule", flags: ["Twice weekly, at least 72 hours apart"] })],
  sources: [["FDA", "Romvimza (vimseltinib) — FDA label (DailyMed)", U2_DM("f73c7a62-9601-4df0-810f-100f515d79ea")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "CSF1R inhibitor for tenosynovial giant cell tumour — 30 mg twice a week.",
    adult: [{ ind: "TGCT", text: "30 mg twice weekly, 72 h apart.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("vinblastine", {
  inn: "Vinblastine", atc: "L01CA01", cls: "Vinca alkaloid",
  risk: ONC,
  linked: [],
  forms: ["Injection 1 mg/mL (10 mg vial); powder 10 mg [FDA]."],
  moa: "Binds tubulin, arresting mitosis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism and biliary excretion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hodgkin and non-Hodgkin lymphoma, testicular cancer, Kaposi sarcoma, Langerhans cell histiocytosis, choriocarcinoma, breast cancer (combinations) [FDA]."], paed: ["Same, protocol-based [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Route", "IV only — FATAL IF GIVEN BY OTHER ROUTES; dispense in a labelled minibag [FDA]."], ["Weekly titration", "Start 3.7 mg/m², then 5.5, 7.4, 9.25, 11.1 mg/m² weekly by white-cell count; maximum 18.5 mg/m² [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Hold", "Next dose only when WBC is back to at least 4,000/mm³ [FDA]."], ["Combination regimens", "e.g. 6 mg/m² (Hodgkin), 3 mg/m² (testicular) per protocol [FDA]."], ["Liver", "Direct bilirubin over 3 mg/dL: reduce dose 50% [FDA]."]],
  paed: { tiers: ["Start 2.5 mg/m², titrate weekly by count (protocol) [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Protocol-based.", calcNote: "mg/m² starting dose." },
  adj: { renal: NEP, hepatic: "Direct bilirubin over 3 mg/dL: 50% dose [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "CYP3A4 inhibitors increase toxicity [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Myelosuppression, neurotoxicity; intrathecal is fatal [FDA].", animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Significant granulocytopenia not caused by the tumour [FDA] [UNVERIFIED-KNOWLEDGE]", "Bacterial infection [FDA] [UNVERIFIED-KNOWLEDGE]", "Intrathecal use [FDA]"],
  ae: { common: ["Leucopenia, alopecia, constipation, jaw pain, malaise [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Fatal if given intrathecally [FDA]", "Severe myelosuppression [FDA] [UNVERIFIED-KNOWLEDGE]", "Extravasation necrosis [FDA]", "Neurotoxicity, ileus, bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["White-cell count before each dose [FDA]."],
  local: notBT,
  calc: [C("vinblastine", "start", "Adult start — 3.7 mg/m² IV (titrate weekly by WBC)", "IV", ADULT, "mg_per_m2", 3.7, null, { formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["IV ONLY — fatal by other routes", "Next dose only if WBC at least 4,000/mm³", "Bilirubin over 3 mg/dL: halve dose"] })],
  sources: [["FDA", "Vinblastine sulfate injection — FDA label (DailyMed)", U2_DM("f073b58e-56d6-4c8d-a2ce-b37719402d77")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Vinca alkaloid — IV only (fatal intrathecally); weekly mg/m² dosing titrated to white-cell count.",
    boxedTitle: "For intravenous use only – fatal if given by other routes",
    boxed: "Caution: This preparation should be administered by individuals experienced in the administration of vinblastine sulfate. It is extremely important that the intravenous needle or catheter be properly positioned before any vinblastine sulfate is injected. Leakage into surrounding tissue during intravenous administration of vinblastine sulfate may cause considerable irritation. If extravasation occurs, the injection should be discontinued immediately, and any remaining portion of the dose should then be introduced into another vein. Local injection of hyaluronidase and the application of moderate heat to the area of leakage help disperse the drug and are thought to minimize discomfort and the possibility of cellulitis. FOR INTRAVENOUS USE ONLY – FATAL IF GIVEN BY OTHER ROUTES [FDA].",
    adult: [{ ind: "Lymphoma / testicular cancer (protocol)", text: "Start 3.7 mg/m² weekly, titrate by WBC.", calc: ["start"] }],
    child: [{ ind: "Children (protocol)", text: "Start 2.5 mg/m², titrate weekly." }] }
});

FDB_M("vincristine", {
  inn: "Vincristine", atc: "L01CA02", cls: "Vinca alkaloid",
  risk: ONC,
  linked: [],
  forms: ["Injection 1 mg/mL (1, 2 mL vials) [FDA]."],
  moa: "Binds tubulin, arresting mitosis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism (CYP3A4), biliary excretion [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute leukaemia; combination therapy for Hodgkin and non-Hodgkin lymphoma, rhabdomyosarcoma, neuroblastoma, Wilms tumour [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Adult", "1.4 mg/m² IV once weekly [FDA]."], ["Route", "IV only — FATAL IF GIVEN BY OTHER ROUTES; dispense in a labelled minibag [FDA]."], ["Care", "Overdose can be fatal — double-check the calculation [FDA]."], ["Liver", "Direct bilirubin over 3 mg/dL: 50% dose [FDA]."], ["Cap", "Many protocols cap a single dose at 2 mg [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Children: 1.5–2 mg/m² IV weekly [FDA].", "10 kg or less: start 0.05 mg/kg weekly [FDA]."], transition: "Adult mg/m² for adults.", calcNote: "mg/m²; 0.05 mg/kg at 10 kg or less." },
  adj: { renal: NEP, hepatic: "Direct bilirubin over 3 mg/dL: 50% dose [FDA].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Strong CYP3A4 inhibitors (azoles) increase neurotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe neurotoxicity, ileus, SIADH; intrathecal is fatal [FDA].", animal: LD, manage: "Supportive; seizure and fluid control [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Demyelinating Charcot-Marie-Tooth syndrome [FDA]", "Intrathecal use [FDA]", "Radiation to the liver at the same time [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Peripheral neuropathy, constipation, alopecia, jaw pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Fatal if given intrathecally [FDA]", "Paralytic ileus [FDA] [UNVERIFIED-KNOWLEDGE]", "SIADH and hyponatraemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Extravasation necrosis [FDA]"] },
  monitor: ["Neurological status, bowel function, sodium [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    C("vincristine", "adult", "Adult — 1.4 mg/m² IV once weekly", "IV", ADULT, "mg_per_m2", 1.4, 168, { formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["IV ONLY — fatal by other routes", "Many protocols cap at 2 mg — check protocol", "Bilirubin over 3 mg/dL: halve dose"] }),
    C("vincristine", "child", "Child over 10 kg — 1.5 mg/m² IV once weekly (1.5–2)", "IV", pop(null, 216, 10.0001, null), "mg_per_m2", 1.5, 168, { dose: { value: 1.5, value_max: 2, unit: "mg", per: "dose" }, formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["IV ONLY — fatal by other routes", "Many protocols cap at 2 mg — check protocol"] }),
    C("vincristine", "small", "Child 10 kg or less — 0.05 mg/kg IV once weekly", "IV", pop(null, 216, null, 10.0001), "mg_per_kg", 0.05, 168, { formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.01 mL", flags: ["IV ONLY — fatal by other routes"] })
  ],
  sources: [["FDA", "Vincristine sulfate injection — FDA label (DailyMed)", U2_DM("b22e4c8e-dbe1-4d4b-a026-e1812974071c")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Vinca alkaloid — 1.4 mg/m² weekly (child 1.5–2 mg/m²); IV only, fatal intrathecally.",
    boxedTitle: "For intravenous use only – fatal if given by other routes",
    boxed: "Caution–This preparation should be administered by individuals experienced in the administration of Vincristine Sulfate Injection. It is extremely important that the intravenous needle or catheter be properly positioned before any vincristine is injected. Leakage into surrounding tissue during intravenous administration of Vincristine Sulfate Injection may cause considerable irritation. If extravasation occurs, the injection should be discontinued immediately, and any remaining portion of the dose should then be introduced into another vein. Local injection of hyaluronidase and the application of moderate heat to the area of leakage help disperse the drug and are thought to minimize discomfort and the possibility of cellulitis. FOR INTRAVENOUS USE ONLY – FATAL IF GIVEN BY OTHER ROUTES. See OVERDOSAGE section for the treatment of patients given intrathecal Vincristine Sulfate Injection. This preparation is for intravenous use only. It should be administered by individuals experienced in the administration of Vincristine Sulfate Injection. The intrathecal administration of Vincristine Sulfate Injection usually results in death. To reduce the potential for fatal medication errors due to incorrect route of administration, Vincristine Sulfate Injection should be diluted in a flexible plastic container and prominently labeled as indicated \"FOR INTRAVENOUS USE ONLY – FATAL IF GIVEN BY OTHER ROUTES.\" [FDA].",
    adult: [{ ind: "Leukaemia / lymphoma (protocol)", text: "1.4 mg/m² IV weekly.", calc: ["adult"] }],
    child: [{ ind: "Over 10 kg", text: "1.5–2 mg/m² IV weekly.", calc: ["child"] }, { ind: "10 kg or less", text: "0.05 mg/kg weekly.", calc: ["small"] }] }
});

FDB_M("vinorelbine", {
  inn: "Vinorelbine", atc: "L01CA04", cls: "Vinca alkaloid (semi-synthetic)",
  risk: ONC,
  linked: [],
  forms: ["Injection 10 mg/mL (1, 5 mL vials) [FDA]."],
  moa: "Binds tubulin, arresting mitosis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism (CYP3A4) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Advanced non-small cell lung cancer, alone or with cisplatin [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Single agent", "30 mg/m² IV once weekly over 6–10 minutes [FDA]."], ["With cisplatin 100 mg/m²", "25 mg/m² on days 1, 8, 15, 22 of 28-day cycles [FDA]."], ["With cisplatin 120 mg/m²", "30 mg/m² weekly [FDA]."], ["Adjust", "Reduce for low neutrophils or raised bilirubin (label tables) [FDA]."], ["Route", "IV only — fatal if given by other routes; flush after [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "mg/m² weekly." },
  adj: { renal: NEP, hepatic: "Bilirubin 2.1–3 mg/dL: 15 mg/m²; over 3: 7.5 mg/m² [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Neutrophils 1,000–1,499: 50% dose; under 1,000: hold [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Myelosuppression, neurotoxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Neutropenia, anaemia, fatigue, nausea, constipation, injection-site reactions, neuropathy [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe myelosuppression and sepsis [FDA]", "Extravasation necrosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe constipation/ileus, pulmonary toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count before each dose [FDA]."],
  local: notBT,
  calc: [C("vinorelbine", "single", "NSCLC single agent — 30 mg/m² IV weekly", "IV", ADULT, "mg_per_m2", 30, 168, { formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", flags: ["With cisplatin 100 mg/m²: 25 mg/m²", "Check neutrophils and bilirubin first"] })],
  sources: [["FDA", "Vinorelbine injection — FDA label (DailyMed)", U2_DM("10a70995-e04d-4044-b1dc-c9aa27460397")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Vinca alkaloid for NSCLC — 25–30 mg/m² weekly; myelosuppression is dose-limiting.",
    boxedTitle: "Myelosuppression",
    boxed: "Severe myelosuppression resulting in serious infection, septic shock, hospitalization and death can occur. Decrease the dose or withhold vinorelbine in accord with recommended dose modifications [FDA].",
    adult: [{ ind: "NSCLC", text: "30 mg/m² weekly (25 mg/m² with cisplatin 100).", calc: ["single"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

})(); // end U-2 scope

/* Brand names — BATCH U2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"valaciclovir":{"IN":[["Valcoveer","Knoll Healthcare Pvt Ltd","Valcoveer 1000Mg Strip Of 3 Tablets"],["Valclovir","Healing Pharma India Pvt Ltd","Valclovir 500Mg Strip Of 10 Tablets"],["Valanext","Mankind Pharmaceuticals Ltd","Valanext 1000Mg Strip Of 3 Tablets"]],"BD":[["Revira","Square Pharmaceuticals PLC","500 mg"],["Valovir","Incepta Pharmaceuticals Ltd","500 mg"],["Alaclov","Advanced Chemical Industries PLC","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/valcoveer-1000mg-strip-of-2-tablets-4504255","https://pharmeasy.in/online-medicine-order/valclovir-500mg-strip-of-10-tablets-4497854","https://pharmeasy.in/online-medicine-order/valanext-1000mg-tab-3-s-211993","https://medex.com.bd/brands/9711/revira-500-mg-tablet","https://medex.com.bd/brands/9713/valovir-500-mg-tablet","https://medex.com.bd/brands/9715/alaclov-500-mg-tablet"]},"valbenazine":{"IN":[],"BD":[["Tardivex","Everest Pharmaceuticals Ltd","40 mg"]],"src":["https://medex.com.bd/brands/35176/tardivex-40-mg-capsule"]},"valganciclovir":{"IN":[["Valgan","Cipla Limited","Valgan 450Mg Strip Of 4 Tablets"],["Valchek","La Renon Healthcare Pvt Ltd","Valchek 450Mg Strip Of 2 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/valgan-450mg-strip-of-4-tablets-6639","https://pharmeasy.in/online-medicine-order/valchek-450mg-strip-of-2-tablets-178387"]},"valsartan":{"IN":[["Valzaar","Torrent Pharmaceuticals Ltd","Valzaar 40Mg Strip Of 10 Tablets"],["Valtan","Knoll Healthcare Pvt Ltd","Valtan 80Mg Strip Of 10 Tablets"]],"BD":[["Diovan","Nevian Lifescience PLC","320 mg"]],"src":["https://pharmeasy.in/online-medicine-order/valzaar-40mg-tablet-26951","https://pharmeasy.in/online-medicine-order/valtan-80mg-strip-of-10-tablets-2935925","https://medex.com.bd/brands/26649/diovan-320-mg-tablet"]},"vardenafil":{"IN":[["Varimax","Macleods Pharmaceuticals","Varimax 20 Mg Strip Of 4 Tablets"],["Edafil","Ajanta Pharma Limited","Edafil 10 Strip Of 10 Tablets"],["Vilitra","Centurion Laboratories","Vilitra 20Mg Strip Of 10 Tablets"]],"BD":[["Valenty","Eskayef Pharmaceuticals Ltd","10 mg"],["Varda","Benham Pharmaceuticals Ltd","10 mg"],["Vardena","Globe Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/varimax-20-mg-tablet-4-no-s-3743037","https://pharmeasy.in/online-medicine-order/edafil-10-tablet-10-no-s-3714082","https://pharmeasy.in/online-medicine-order/vilitra-20mg-tablet-6006","https://medex.com.bd/brands/16745/valenty-10-mg-tablet","https://medex.com.bd/brands/25218/varda-10-mg-tablet","https://medex.com.bd/brands/25220/vardena-10-mg-tablet"]},"varenicline":{"IN":[["Varnix","Alteus Biogenics Pvt Ltd","Varnix 1Mg Strip Of 10 Tablets"],["Varnisam","Jagsam Pharma","Varnisam 1Mg Strip Of 10 Tablets"],["Champix","Pfizer Limited","Champix 1Mg Strip Of 14 Tablets"]],"BD":[["Varni","Monicopharma Ltd","0.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/varnix-1mg-strip-of-10-tablets-4732711","https://pharmeasy.in/online-medicine-order/varnisam-1mg-strip-of-10-tablets-4303224","https://pharmeasy.in/online-medicine-order/champix-1mg-strip-of-14-tablets-3016119","https://medex.com.bd/brands/16747/varni-05-mg-tablet"]},"venetoclax":{"IN":[["Venclexta","Abbvie Therapeutics India Private Limited","Venclexta 50Mg Strip Of 7 Tablets"],["Lucivenet","Lucius Pharmaceuticals","Lucivenet Bottle Of 120 Tablets"]],"BD":[["Ventoxen","Everest Pharmaceuticals Ltd","100 mg"],["Venclax","Beacon Pharmaceuticals PLC","10 mg"],["Veneta","Drug International Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/venclexta-50mg-strip-of-7-tablets-4743577","https://pharmeasy.in/online-medicine-order/lucivenet-box-of-120-tablets-3532023","https://medex.com.bd/brands/33098/ventoxen-100-mg-tablet","https://medex.com.bd/brands/33099/venclax-10-mg-tablet","https://medex.com.bd/brands/33102/veneta-100-mg-tablet"]},"vericiguat":{"IN":[["Verquvo","Bayer Zydus Pharma","Verquvo 10Mg Strip Of 14 Tablets"],["Gantra","Dr Reddy's Laboratories Ltd","Gantra 2.5Mg Strip Of 14 Tablets"]],"BD":[["Corazon","Eskayef Pharmaceuticals Ltd","2.5 mg"],["Verivas","Popular Pharmaceuticals PLC","10 mg"],["Cardiver","Beximco Pharmaceuticals PLC","2.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/verquvo-10mg-strip-of-14-tablets-3793921","https://pharmeasy.in/online-medicine-order/gantra-2-5mg-strip-of-14-tablets-4173168","https://medex.com.bd/brands/34931/corazon-25-mg-tablet","https://medex.com.bd/brands/38605/verivas-10-mg-tablet","https://medex.com.bd/brands/37993/cardiver-25-mg-tablet"]},"vibegron":{"IN":[],"BD":[["Vibeg","UniMed UniHealth Pharmaceuticals Ltd","75 mg"]],"src":["https://medex.com.bd/brands/39590/vibeg-75-mg-tablet"]},"vigabatrin":{"IN":[["Viganext","Msn Laboratories","Viganext 500Mg Packet Of 1 Oral Powder"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/viganext-powder-1-no-s-3743141"]},"vilazodone":{"IN":[["Vilaxel","Abbott Healthcare Pvt Ltd","Vilaxel 20Mg Strip Of 10 Tablets"]],"BD":[["Vilazon","Renata PLC","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/vilaxel-20mg-tablet-630","https://medex.com.bd/brands/33145/vilazon-10-mg-tablet"]},"vinblastine":{"IN":[],"BD":[["Velvin","Beacon Pharmaceuticals PLC","10 mg/10 ml"],["Vinblast","Healthcare Pharmaceuticals Ltd","10 mg/10 ml"],["Vinbas","Eskayef Pharmaceuticals Ltd","10 mg/10 ml"]],"src":["https://medex.com.bd/brands/25263/velvin-10-mg-injection","https://medex.com.bd/brands/38250/vinblast-10-mg-injection","https://medex.com.bd/brands/39507/vinbas-10-mg-injection"]},"vincristine":{"IN":[["Unicristin","United Biotech (p) Ltd","Unicristin 1Mg Vial Of 1Ml Injection"]],"BD":[["Vincrist","Techno Drugs Ltd","1 mg/ml"],["Criston","Beacon Pharmaceuticals PLC","1 mg/ml"],["Vinstin","Drug International Ltd","2 mg/2 ml"]],"src":["https://pharmeasy.in/online-medicine-order/unicristin-1mg-inj-86356","https://medex.com.bd/brands/15083/vincrist-1-mg-injection","https://medex.com.bd/brands/15086/criston-1-mg-injection","https://medex.com.bd/brands/25264/vinstin-2-mg-injection"]},"vinorelbine":{"IN":[["Vinbix","Halsted Pharma","Vinbix 10 Mg Injection 1 No's"],["Vinelbine","Fresenius Kabi India Pvt Ltd","Vinelbine 10 Mg Injection 1Ml"],["Vinotec","United Biotech (p) Ltd","Vinotec 10Mg Injection"]],"BD":[["Vinorel","Beacon Pharmaceuticals PLC","10 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/vinbix-10-mg-injection-1-no-s-4114340","https://pharmeasy.in/online-medicine-order/vinelbine-10-mg-injection-1ml-201735","https://pharmeasy.in/online-medicine-order/vinotec-10mg-inj-155389"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
