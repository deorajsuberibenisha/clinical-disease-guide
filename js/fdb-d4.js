/* Clinical Disease Guide — Drug monograph database, block D, batch 4 (end of D; 25 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text is copied from the label by _work/tools/fdb-boxed-fill.js (exact wording). */

/* ================= Batch D-4 (fdb-d4.js) ================= */
const D4_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const D4_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const D4_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const D4_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };

/* ---------- DULAGLUTIDE (FDA TRULICITY BLA125469) ---------- */
FDB_M("dulaglutide", {
  inn: "Dulaglutide", atc: "A10BJ05", cls: "GLP-1 receptor agonist (once weekly)",
  linked: [],
  forms: ["Single-dose pens 0.75, 1.5, 3, 4.5 mg/0.5 mL [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "GLP-1 receptor agonist: glucose-dependent insulin release, lower glucagon, slower gastric emptying [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No dose adjustment in renal impairment including ESRD [FDA]."],
  ind: { adult: ["Type 2 diabetes, with diet and exercise [FDA].", "Reduce major adverse cardiovascular events in adults with type 2 diabetes and established cardiovascular disease or multiple risk factors [FDA]."], paed: ["Type 2 diabetes from 10 years [FDA]."] },
  adult: [["Type 2 diabetes", "0.75 mg SC once weekly; after 4 weeks may increase to 1.5 mg; then in 1.5 mg steps after at least 4 weeks on each dose; maximum 4.5 mg once weekly [FDA]."], ["Missed dose", "Give if at least 3 days (72 h) remain before the next dose; otherwise skip it [FDA]."]],
  paed: { tiers: ["10 years and over: 0.75 mg once weekly; may increase to a maximum of 1.5 mg once weekly after at least 4 weeks [FDA]."], transition: "Adults: up to 4.5 mg weekly.", calcNote: "Weekly pen." },
  adj: { renal: "No adjustment, including ESRD [FDA].", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Hypoglycaemia risk with insulin or sulfonylureas — consider lowering their dose [FDA] [UNVERIFIED-KNOWLEDGE]. Not for type 1 diabetes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Overdoses mainly caused mild to moderate GI effects and non-severe hypoglycaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; long half-life [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Personal or family history of medullary thyroid carcinoma, or MEN 2 [FDA].", "Serious hypersensitivity to dulaglutide or excipients [FDA]."],
  ae: { common: ["Nausea, diarrhoea, vomiting, abdominal pain, decreased appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thyroid C-cell tumour risk (rodents) [FDA]", "Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypoglycaemia with insulin or sulfonylurea [FDA] [UNVERIFIED-KNOWLEDGE]", "Acute kidney injury from dehydration [FDA] [UNVERIFIED-KNOWLEDGE]", "Diabetic retinopathy complications [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["HbA1c, glucose; renal function if severe GI losses [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D4_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dulaglutide", indication_id: "start", label: "Type 2 diabetes — start 0.75 mg SC once weekly", route: "SC", population: { min_age_months: 120, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.75, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 4.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "pen", strength: 0.75, unit: "mg/dose" }], rounding: "Whole pen", renal: [], flags: ["Once weekly", "Adults: step up after 4 weeks (1.5, 3, 4.5 mg); children 10–17: maximum 1.5 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Trulicity (dulaglutide) — FDA label (DailyMed)", D4_DM("af4e38a6-ad3f-480c-ae82-5ac6c7735b99")], D4_BT],
  dose: { tagline: "Once-weekly GLP-1 injection for type 2 diabetes.",
    boxedTitle: "Risk of thyroid C-cell tumors", boxed: "In male and female rats, dulaglutide causes a dose-related and treatment-duration-dependent increase in the incidence of thyroid C-cell tumors (adenomas and carcinomas) after lifetime exposure. It is unknown whether TRULICITY causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans as human relevance of dulaglutide-induced rodent thyroid C-cell tumors has not been determined. TRULICITY is contraindicated in patients with a personal or family history of MTC and in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Counsel patients regarding the potential risk of MTC with use of TRULICITY and inform them of symptoms of thyroid tumors (e.g., mass in the neck, dysphagia, dyspnea, persistent hoarseness). Routine monitoring of serum calcitonin or using thyroid ultrasound is of uncertain value for early detection of MTC in patients treated with TRULICITY [FDA].",
    adult: [{ ind: "Type 2 diabetes", text: "0.75 mg weekly, then 1.5 mg; up to 4.5 mg weekly in 1.5 mg steps.", calc: ["start"] }],
    child: [{ ind: "Type 2 diabetes, 10 years and over", text: "0.75 mg weekly; maximum 1.5 mg weekly.", calc: ["start"] }] }
});

/* ---------- DULOXETINE (FDA delayed-release capsules ANDA203088) ---------- */
FDB_M("duloxetine", {
  inn: "Duloxetine", atc: "N06AX21", cls: "Serotonin–noradrenaline reuptake inhibitor (SNRI)",
  linked: [],
  forms: ["Delayed-release capsules 20, 30, 40, 60 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits serotonin and noradrenaline reuptake [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Avoid in chronic liver disease, cirrhosis and severe renal impairment (GFR under 30) [FDA]."],
  ind: { adult: ["Major depressive disorder [FDA].", "Generalised anxiety disorder [FDA].", "Diabetic peripheral neuropathic pain [FDA].", "Fibromyalgia [FDA].", "Chronic musculoskeletal pain [FDA]."], paed: ["GAD 7–17 years; fibromyalgia 13–17 years [FDA]."] },
  adult: [["MDD", "40–60 mg/day (20 mg twice daily, or 60 mg once daily or 30 mg twice daily); maintenance 60 mg/day; maximum 120 mg/day [FDA]."], ["GAD", "60 mg once daily (elderly start 30 mg); maximum 120 mg/day [FDA]."], ["Diabetic neuropathic pain", "60 mg once daily [FDA]."], ["Fibromyalgia, chronic musculoskeletal pain", "30 mg once daily for 1 week, then 60 mg once daily [FDA]."], ["Stopping", "Reduce gradually [FDA]."]],
  paed: { tiers: ["GAD 7–17 years: start 30 mg/day; target 30–60 mg once daily; maximum 120 mg/day [FDA].", "Fibromyalgia 13–17 years: 30 mg/day, target 60 mg once daily [FDA]."], transition: "Adult dose.", calcNote: "Swallow whole." },
  adj: { renal: "Severe renal impairment (GFR under 30): avoid; consider lower start in milder renal impairment [FDA].", hepatic: "Avoid in chronic liver disease or cirrhosis [FDA].", pregnancy: "Not established in primary source. [NEP]", other: "No MAOI within 14 days before or 5 days after duloxetine; avoid heavy alcohol; CYP1A2 inhibitors (fluvoxamine, ciprofloxacin) raise levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Fatal outcomes reported, mainly in mixed overdoses: somnolence, coma, serotonin syndrome, seizures, vomiting, tachycardia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; ECG and airway; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["MAOIs for psychiatric disorders with duloxetine or within 5 days of stopping it; starting duloxetine within 14 days of stopping an MAOI [FDA].", "Linezolid or IV methylene blue [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, dry mouth, somnolence, constipation, decreased appetite, sweating [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Suicidal thoughts in young people [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyponatraemia, bleeding, raised BP, urinary hesitancy [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Mood and suicidality; blood pressure; liver tests if symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D4_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "duloxetine", indication_id: "adult", label: "Adult MDD / GAD / neuropathic pain — 60 mg once daily", route: "PO", population: D4_ADULT, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 120, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 60, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "Severe renal impairment (GFR under 30): avoid [FDA]" }], flags: ["Fibromyalgia / musculoskeletal pain: 30 mg for 1 week first", "Elderly GAD: start 30 mg"], sources: ["FDA"] },
    { drug: "duloxetine", indication_id: "gad_child", label: "GAD 7–17 years — start 30 mg once daily", route: "PO", population: { min_age_months: 84, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 120, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 30, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "Severe renal impairment: avoid [FDA]" }], flags: ["Target 30–60 mg once daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Duloxetine delayed-release capsules — FDA label (DailyMed)", D4_DM("00628e5e-4c5b-2573-e063-6294a90a0e3b")], D4_BT],
  dose: { tagline: "SNRI for depression, anxiety and nerve pain — avoid in liver disease.",
    boxedTitle: "Suicidal thoughts and behaviors", boxed: "Antidepressants increased the risk of suicidal thoughts and behavior in children, adolescents, and young adults in short-term studies. These studies did not show an increase in the risk of suicidal thoughts and behavior with antidepressant use in patients over age 24; there was a reduction in risk with antidepressant use in patients aged 65 and older. In patients of all ages who are started on antidepressant therapy, monitor closely for worsening, and for emergence of suicidal thoughts and behaviors. Advise families and caregivers of the need for close observation and communication with the prescriber [FDA].",
    adult: [{ ind: "MDD, GAD, neuropathic pain", text: "60 mg once daily; MDD and GAD up to 120 mg/day.", calc: ["adult"] }, { ind: "Fibromyalgia, musculoskeletal pain", text: "30 mg for 1 week, then 60 mg once daily." }],
    child: [{ ind: "GAD 7–17 years", text: "30 mg once daily, target 30–60 mg.", calc: ["gad_child"] }] }
});

/* ---------- DUPILUMAB (FDA DUPIXENT BLA761055) ---------- */
FDB_M("dupilumab", {
  inn: "Dupilumab", atc: "D11AH05", cls: "Anti-IL-4 receptor alpha monoclonal antibody",
  linked: [],
  forms: ["Pre-filled syringes and pens 200 mg/1.14 mL and 300 mg/2 mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks IL-4 and IL-13 signalling by binding IL-4Rα [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Moderate-to-severe atopic dermatitis [FDA].", "Add-on maintenance for eosinophilic or oral-steroid-dependent asthma; CRSwNP; eosinophilic oesophagitis; prurigo nodularis; COPD with eosinophilia; and others [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Atopic dermatitis from 6 months [FDA]."] },
  adult: [["Atopic dermatitis (adults)", "600 mg SC (two 300 mg injections) first, then 300 mg every 2 weeks [FDA]."], ["Other indications", "See the label for indication-specific doses [FDA]."]],
  paed: { tiers: ["6 months–5 years (no loading dose): 5 to under 15 kg 200 mg every 4 weeks; 15 to under 30 kg 300 mg every 4 weeks [FDA].", "6–17 years: 15 to under 30 kg 600 mg load then 300 mg every 4 weeks; 30 to under 60 kg 400 mg load then 200 mg every 2 weeks; 60 kg or more 600 mg load then 300 mg every 2 weeks [FDA]."], transition: "Adult dose.", calcNote: "Weight bands (atopic dermatitis)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Avoid live vaccines; treat helminth infections before starting; do not stop asthma corticosteroids abruptly [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "No specific treatment for overdose [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; contact poison control [FDA]." },
  contra: ["Known hypersensitivity to dupilumab or excipients [FDA]."],
  ae: { common: ["Injection-site reactions, conjunctivitis and keratitis, oral herpes, eosinophilia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Eosinophilic conditions (vasculitis) [FDA] [UNVERIFIED-KNOWLEDGE]", "Keratitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Eye symptoms; asthma control [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D4_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dupilumab", indication_id: "ad_6to17", label: "Atopic dermatitis 6–17 years — by weight", route: "SC", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: 15, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 15, max_weight_kg: 30, text: "600 mg loading dose, then 300 mg every 4 weeks", daily: null }, { min_weight_kg: 30, max_weight_kg: 60, text: "400 mg loading dose, then 200 mg every 2 weeks", daily: null }, { min_weight_kg: 60, max_weight_kg: null, text: "600 mg loading dose, then 300 mg every 2 weeks", daily: null }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Pre-filled syringe or pen", renal: [], flags: [], sources: ["FDA"] },
    { drug: "dupilumab", indication_id: "ad_6mto5", label: "Atopic dermatitis 6 months–5 years — by weight (no loading dose)", route: "SC", population: { min_age_months: 6, max_age_months: 72, min_weight_kg: 5, max_weight_kg: 30 }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 5, max_weight_kg: 15, text: "200 mg every 4 weeks", daily: null }, { min_weight_kg: 15, max_weight_kg: 30, text: "300 mg every 4 weeks", daily: null }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Pre-filled syringe", renal: [], flags: ["No loading dose"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dupixent (dupilumab) — FDA label (DailyMed)", D4_DM("595f437d-2729-40bb-9c62-c8ece1f82780")], D4_BT],
  dose: { tagline: "Biologic for atopic dermatitis, asthma and other type 2 inflammation.",
    adult: [{ ind: "Atopic dermatitis", text: "600 mg first, then 300 mg every 2 weeks." }],
    child: [{ ind: "Atopic dermatitis 6–17 years", text: "By weight: 15–30 kg 300 mg every 4 weeks; 30–60 kg 200 mg every 2 weeks; 60 kg and over 300 mg every 2 weeks (after a loading dose).", calc: ["ad_6to17"] }, { ind: "6 months–5 years", text: "5–15 kg 200 mg, 15–30 kg 300 mg, every 4 weeks.", calc: ["ad_6mto5"] }] }
});

/* ---------- DURVALUMAB (FDA IMFINZI BLA761069) ---------- */
FDB_M("durvalumab", {
  inn: "Durvalumab", atc: "L01FF03", cls: "PD-L1 blocking monoclonal antibody", risk: "High-alert — antineoplastic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Injection 50 mg/mL (120 mg/2.4 mL, 500 mg/10 mL) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks PD-L1 binding to PD-1 and CD80, restoring anti-tumour T-cell responses [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No adjustment for mild–moderate renal or hepatic impairment in population analysis [FDA]."],
  ind: { adult: ["Non-small cell lung cancer (resectable; unresectable stage III after chemoradiation; metastatic) [FDA].", "Small cell lung cancer, biliary tract cancer, hepatocellular carcinoma, endometrial and bladder cancers (per label) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Unresectable stage III NSCLC", "30 kg and over: 10 mg/kg every 2 weeks or 1,500 mg every 4 weeks; under 30 kg: 10 mg/kg every 2 weeks [FDA]."], ["Resectable NSCLC", "30 kg and over: 1,500 mg with chemotherapy every 3 weeks for up to 4 cycles before surgery, then 1,500 mg every 4 weeks for up to 12 cycles after; under 30 kg: 20 mg/kg [FDA]."], ["Other cancers", "See label for regimen [FDA]."], ["Administration", "IV infusion over 60 minutes after dilution [FDA]."]],
  paed: { tiers: ["Not established — safety and effectiveness in children have not been established [FDA]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Severe renal impairment: effect unknown [FDA].", hepatic: "Severe hepatic impairment: effect unknown [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Immune-mediated reactions in any organ — withhold or stop and give corticosteroids per label [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, cough, rash, pneumonitis, upper respiratory infections [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Immune-mediated pneumonitis, colitis, hepatitis, endocrinopathies, nephritis, dermatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver, kidney and thyroid function; symptoms of immune-mediated reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D4_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "Imfinzi (durvalumab) — FDA label (DailyMed)", D4_DM("8baba4ea-2855-42fa-9bd9-5a7548d4cec3")], D4_BT],
  dose: { tagline: "PD-L1 immunotherapy for lung and other cancers — watch for immune reactions.",
    adult: [{ ind: "Stage III NSCLC", text: "10 mg/kg every 2 weeks or 1,500 mg every 4 weeks (10 mg/kg if under 30 kg)." }, { ind: "Other cancers", text: "Regimen per label." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DUTASTERIDE (FDA capsules ANDA203118) ---------- */
FDB_M("dutasteride", {
  inn: "Dutasteride", atc: "G04CB02", cls: "5-alpha-reductase inhibitor",
  linked: [],
  forms: ["Soft capsules 0.5 mg [FDA].", "Bhutan: not on the NEML (finasteride is the NEML 5-ARI) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits type 1 and 2 5-alpha-reductase, lowering DHT and shrinking the prostate [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long half-life (about 5 weeks) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Symptomatic BPH with an enlarged prostate, alone or with tamsulosin [FDA]."], paed: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["BPH", "0.5 mg once daily, alone or with tamsulosin 0.4 mg once daily [FDA]."], ["Administration", "Swallow whole — capsule contents irritate the mouth and throat [FDA]."]],
  paed: { tiers: ["Not indicated [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult men only." },
  adj: { renal: "No adjustment [FDA].", hepatic: "Not studied [FDA].", pregnancy: "Contraindicated in pregnancy; women who are or may be pregnant should not handle leaking capsules [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Halves serum PSA — double the PSA value for interpretation after 3–6 months; no blood donation until 6 months after the last dose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Single doses up to 40 mg for 7 days were tolerated without significant safety concerns [FDA] [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy (feminisation of a male fetus) [FDA].", "Women and children [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to dutasteride or other 5-alpha-reductase inhibitors [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Impotence, decreased libido, ejaculation disorders, breast tenderness or enlargement [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Possible increased risk of high-grade prostate cancer [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["PSA (doubled), urinary symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D4_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "dutasteride", indication_id: "bph", label: "BPH — 0.5 mg once daily", route: "PO", population: D4_ADULT, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 0.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 0.5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Alone or with tamsulosin 0.4 mg once daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dutasteride capsules — FDA label (DailyMed)", D4_DM("6ebce680-5f82-f28e-da92-809928dc0f8f")], D4_BT],
  dose: { tagline: "Shrinks the prostate in BPH — halves PSA; not to be handled in pregnancy.",
    adult: [{ ind: "BPH", text: "0.5 mg once daily (alone or with tamsulosin).", calc: ["bph"] }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- DUVELISIB (FDA COPIKTRA NDA211155) ---------- */
FDB_M("duvelisib", {
  inn: "Duvelisib", atc: "L01EM04", cls: "PI3K-delta/gamma inhibitor", risk: "High-alert — oral antineoplastic agents are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Capsules 15, 25 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits PI3K-delta and PI3K-gamma, blocking B-cell receptor signalling [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No clinically significant effect of renal impairment (CrCl 23–80) or hepatic impairment on exposure [FDA]."],
  ind: { adult: ["Relapsed or refractory CLL/SLL after at least two prior lines of therapy (not first or second line) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["CLL/SLL", "25 mg twice daily with or without food, in 28-day cycles; modify for toxicity [FDA]."], ["Prophylaxis", "PJP prophylaxis during treatment and until CD4 count recovers; consider CMV monitoring [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Missed dose", "If under 6 hours late take it; otherwise wait for the next dose [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment needed (CrCl 23–80) [FDA].", hepatic: "No clinically significant effect (Child-Pugh A–C) [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Strong CYP3A4 inhibitors: reduce to 15 mg twice daily; avoid strong inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea or colitis, neutropenia, rash, fatigue, pyrexia, cough, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Treatment-related mortality [FDA]", "Fatal and serious infections, diarrhoea or colitis, cutaneous reactions, pneumonitis [FDA]", "Hepatotoxicity, neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts, liver tests, signs of infection, diarrhoea, skin and lung symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D4_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [
    { drug: "duvelisib", indication_id: "cll", label: "CLL/SLL — 25 mg twice daily", route: "PO", population: D4_ADULT, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 25, max_daily: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 25, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["PJP prophylaxis", "Dose modifications for toxicity per label"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Copiktra (duvelisib) — FDA label (DailyMed)", D4_DM("e3c5ac56-e1f6-473a-bc73-687836534780")], D4_BT],
  dose: { tagline: "Third-line oral CLL therapy — serious infections, colitis, rash and pneumonitis.",
    boxedTitle: "Treatment-related mortality and serious toxicities: infections, diarrhea or colitis, cutaneous reactions, and pneumonitis", boxed: "Treatment-related mortality occurred in 15% of COPIKTRA-treated patients. Fatal and/or serious infections occurred in 31% of COPIKTRA-treated patients. Monitor for signs and symptoms of infection. Withhold COPIKTRA if infection is suspected. Fatal and/or serious diarrhea or colitis occurred in 18% of COPIKTRA-treated patients. Monitor for the development of severe diarrhea or colitis. Withhold COPIKTRA. Fatal and/or serious cutaneous reactions occurred in 5% of COPIKTRA-treated patients. Withhold COPIKTRA. Fatal and/or serious pneumonitis occurred in 5% of COPIKTRA-treated patients. Monitor for pulmonary symptoms and interstitial infiltrates. Withhold COPIKTRA [FDA].",
    adult: [{ ind: "Relapsed/refractory CLL/SLL", text: "25 mg twice daily with PJP prophylaxis.", calc: ["cll"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- DYCLONINE (FDA DycloPro topical solution ANDA200480) ---------- */
FDB_M("dyclonine", {
  inn: "Dyclonine", atc: "N01BX02", cls: "Topical local anaesthetic (ketone type)",
  linked: [],
  forms: ["Topical solution 0.5% and 1% [FDA].", "Bhutan: not on the NEML (lidocaine is the NEML topical anaesthetic) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks nerve conduction at the site of application [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Anaesthesia of accessible mucous membranes (mouth, pharynx, larynx, trachea, oesophagus, urethra) before endoscopic procedures; 0.5% can block the gag reflex [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Mucosal anaesthesia", "Use the lowest effective dose; usually 4–20 mL; maximum 30 mL of 1% (300 mg) [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adult dose.", calcNote: "Topical — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", pregnancy: "Not established in primary source. [NEP]", other: "Do not eat or drink until sensation returns (aspiration risk) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "High plasma levels: CNS excitation or depression, cardiovascular depression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Airway, oxygen, ventilation; treat convulsions and circulatory depression [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known hypersensitivity to the local anaesthetic or other components [FDA]."],
  ae: { common: ["Local irritation [UNVERIFIED-KNOWLEDGE]."], serious: ["Systemic toxicity with excessive dosing [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Swallow and airway reflexes after use [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: D4_NOT, strengths: "—", stg: "Not established in primary source. [NEP]" },
  calc: [],
  sources: [["FDA", "DycloPro (dyclonine hydrochloride topical solution) — FDA label (DailyMed)", D4_DM("bfd9a2dd-7b40-40c0-b256-52f613395760")], D4_BT],
  dose: { tagline: "Topical mucosal anaesthetic before endoscopy — maximum 300 mg.",
    adult: [{ ind: "Mucosal anaesthesia", text: "Usually 4–20 mL; maximum 30 mL of 1% (300 mg)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* Brand names — BATCH D4 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"dulaglutide":{"IN":[["Aplevant","Lupin","Aplevant 0.75Mg Pre Filled Pen Of 0.5Ml Solution For Injection (Pack Of 2)"]],"BD":[["Trulicity","Healthcare Pharmaceuticals Ltd","0.75 mg/0.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/aplevant-0-75mg-pre-filled-pen-of-2-0-5ml-solution-for-injection-213330","https://medex.com.bd/brands/28948/trulicity-075-mg-sc-injection"]},"duloxetine":{"IN":[],"BD":[["Xinolax DR","Opsonin Pharma Ltd","60 mg"],["Diliner DR","Square Pharmaceuticals PLC","30 mg"],["Duloxen","Incepta Pharmaceuticals Ltd","60 mg"]],"src":["https://medex.com.bd/brands/4506/xinolax-dr-60-mg-dr-capsule","https://medex.com.bd/brands/38887/diliner-dr-30-mg-dr-capsule","https://medex.com.bd/brands/32352/duloxen-60-mg-dr-tablet"]},"durvalumab":{"IN":[["Imfinzi","Astrazeneca Pharma India Ltd","Imfinzi 500Mg Vial Of 10Ml Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/imfinzi-500-mg-injection-10-ml-4122988"]},"dutasteride":{"IN":[["Dutas","Dr Reddy's Laboratories Ltd","Dutas 0.5Mg Strip Of 30 Capsules"],["Dutamax","Galcare Pharmaceutical Pvt Ltd","Dutamax Strip Of 10 Tablets"],["Dutaheal","Healing Pharma India Pvt Ltd","Dutaheal 0.5Mg Strip Of 10 Tablets"]],"BD":[["Dutamax","Drug International Ltd","0.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/dutas-0-5mg-strip-of-30-capsules-8439","https://pharmeasy.in/online-medicine-order/dutamax-strip-of-10-tablets-11022","https://pharmeasy.in/online-medicine-order/dutaheal-0-5mg-strip-of-10-tablets-3133249","https://medex.com.bd/brands/15574/dutamax-05-mg-capsule"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
