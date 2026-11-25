/* Clinical Disease Guide — Drug monograph database, block E, batch 2 (26 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed-warning text is copied from the label by _work/tools/fdb-boxed-fill.js (exact wording).
   Labels replaced for a single-ingredient standard product: emtricitabine (Emtriva), eltrombopag (Promacta olamine — Alvaiz choline is not interchangeable).
   Deferred: elvitegravir (only in Stribild/Genvoya combinations). */

/* ================= Batch E-2 (fdb-e2.js) ================= */
const E2_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const E2_NOT = "Not on the Bhutan NEML 2025 [BT-NEML].";
const E2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const E2_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const E2_ANY = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const E2_NEP = "Not established in primary source. [NEP]";
const E2_LD = "Animal LD50: Not established in primary source. [NEP]";
const E2_LOC = { neml: E2_NOT, strengths: "—", stg: E2_NEP };
const E2_ONC = "High-alert — antineoplastic agents are on the ISMP list of high-alert medications [ISMP]";

/* ---------- ELIVALDOGENE AUTOTEMCEL (FDA SKYSONA BLA125755) ---------- */
FDB_M("elivaldogene-autotemcel", {
  inn: "Elivaldogene autotemcel", atc: "N07XX", cls: "Autologous lentiviral gene therapy (ABCD1)",
  linked: [],
  forms: ["Autologous CD34+ cell suspension for IV infusion, one or two bags [FDA].", "Bhutan: not available [BT-NEML]."],
  moa: "Patient's own haematopoietic stem cells transduced with a functional ABCD1 gene [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not applicable [NEP]."],
  ind: { adult: ["Not indicated in adults [FDA]."], paed: ["Boys 4–17 years with early, active cerebral adrenoleukodystrophy (CALD) [FDA]."] },
  adult: [["Adults", "Not indicated [FDA]."]],
  paed: { tiers: ["Minimum 5.0 × 10⁶ CD34+ cells/kg IV after full myeloablative and lymphodepleting conditioning; one-time autologous infusion [FDA].", "Requires stem-cell mobilisation and apheresis for manufacturing; verify patient identity on the bag; do not irradiate or sample [FDA]."], transition: "—", calcNote: "Cell product — no calculator." },
  adj: { renal: "Not studied; assess before stem-cell transplantation [FDA].", hepatic: "Not studied [FDA].", pregnancy: E2_NEP, other: "Lifelong monitoring for haematological malignancy [FDA]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Conditioning-related cytopenias, mucositis, febrile neutropenia, alopecia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Haematological malignancy (MDS, AML) [FDA]", "Prolonged cytopenias, engraftment failure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts at least every 6 months for at least 15 years [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC, calc: [],
  sources: [["FDA", "Skysona (elivaldogene autotemcel) — FDA label (DailyMed)", E2_DM("f189502b-dc44-4289-99a6-cfba36918329")], E2_BT],
  dose: { tagline: "One-time gene therapy for boys with early cerebral ALD — blood-cancer risk.",
    boxedTitle: "Hematologic malignancy", boxed: "Hematologic malignancies, including life-threatening cases of myelodysplastic syndrome and acute myeloid leukemia, have occurred in patients treated with SKYSONA. Patients have been diagnosed between 14 months and 10 years after SKYSONA administration, and the cancers appear to be related to treatment with SKYSONA. Monitor patients closely for evidence of malignancy through complete blood counts at least every 3 months. Monitor patients through assessments for evidence for clonal expansion or predominance at least twice in the first year and annually thereafter; consider bone marrow evaluations as clinically indicated [FDA].",
    adult: [{ ind: "Adults", text: "Not indicated." }],
    child: [{ ind: "Cerebral ALD, boys 4–17 years", text: "At least 5.0 × 10⁶ CD34+ cells/kg IV, once." }] }
});

/* ---------- ELOSULFASE ALFA (FDA VIMIZIM BLA125460) ---------- */
FDB_M("elosulfase-alfa", {
  inn: "Elosulfase alfa", atc: "A16AB12", cls: "Enzyme replacement therapy (N-acetylgalactosamine-6-sulfatase)",
  linked: [],
  forms: ["Injection 5 mg/5 mL (1 mg/mL) vial [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Replaces the deficient GALNS enzyme in Morquio A syndrome [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [E2_NEP],
  ind: { adult: ["Mucopolysaccharidosis IVA (Morquio A syndrome) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["MPS IVA", "2 mg/kg IV once weekly over at least 3.5–4.5 hours depending on infusion volume [FDA]."], ["Premedication", "Antihistamine with or without antipyretic 30–60 minutes before [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same mg/kg as adults [FDA]."], transition: "—", calcNote: "1 mg/mL vials." },
  adj: { renal: E2_NEP, hepatic: E2_NEP, pregnancy: E2_NEP, other: "Acute respiratory illness may worsen during infusion — consider delaying [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Pyrexia, vomiting, headache, nausea, abdominal pain, chills, fatigue [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis and hypersensitivity [FDA]", "Acute respiratory complications [FDA]"] },
  monitor: ["Observe during and after infusion; supervision by staff able to manage anaphylaxis [FDA]."],
  local: E2_LOC,
  calc: [
    { drug: "elosulfase-alfa", indication_id: "mps", label: "MPS IVA — 2 mg/kg IV once weekly", route: "IV", population: E2_ANY, basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "Round to whole vials per label", renal: [], flags: ["Once weekly over 3.5–4.5 h", "Premedicate; anaphylaxis treatment ready"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Vimizim (elosulfase alfa) — FDA label (DailyMed)", E2_DM("0caa2565-12b2-0ad0-1f9a-273e81c3d4cc")], E2_BT],
  dose: { tagline: "Weekly enzyme replacement for Morquio A — anaphylaxis risk.",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis and risk of acute respiratory complications", boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Anaphylaxis has occurred during the early course of enzyme replacement therapy and after extended duration of therapy. Initiate VIMIZIM in a healthcare setting with appropriate medical monitoring and support measures, including access to cardiopulmonary resuscitation equipment. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue VIMIZIM and immediately initiate appropriate medical treatment, including use of epinephrine. Inform patients of the symptoms of life-threatening hypersensitivity reactions, including anaphylaxis and to seek immediate medical care should symptoms occur. Patients with acute respiratory illness may be at risk of serious acute exacerbation of their respiratory compromise due to hypersensitivity reactions and require additional monitoring [FDA].",
    adult: [{ ind: "MPS IVA", text: "2 mg/kg IV weekly.", calc: ["mps"] }],
    child: [{ ind: "MPS IVA", text: "2 mg/kg IV weekly.", calc: ["mps"] }] }
});

/* ---------- ELOTUZUMAB (FDA EMPLICITI BLA761035) ---------- */
FDB_M("elotuzumab", {
  inn: "Elotuzumab", atc: "L01FX08", cls: "Anti-SLAMF7 monoclonal antibody", risk: E2_ONC,
  linked: [],
  forms: ["Powder for injection 300 mg, 400 mg vials [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Targets SLAMF7 on myeloma cells and NK cells, enhancing antibody-dependent cytotoxicity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not removed by dialysis [FDA]."],
  ind: { adult: ["Multiple myeloma with lenalidomide and dexamethasone (1–3 prior therapies), or with pomalidomide and dexamethasone (at least 2 prior therapies) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["With lenalidomide + dexamethasone", "10 mg/kg IV weekly for cycles 1–2 (28-day cycles), then every 2 weeks [FDA]."], ["With pomalidomide + dexamethasone", "10 mg/kg weekly for cycles 1–2, then 20 mg/kg every 4 weeks [FDA]."], ["Premedication", "Dexamethasone, diphenhydramine, an H2 blocker and paracetamol [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment needed, including ESRD [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: E2_NEP, pregnancy: "Given with lenalidomide/pomalidomide — those are contraindicated in pregnancy [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Can interfere with serum protein electrophoresis (M-protein) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, diarrhoea, pyrexia, constipation, cough, peripheral neuropathy, nasopharyngitis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Infections [FDA] [UNVERIFIED-KNOWLEDGE]", "Second primary malignancies [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infusion reactions; liver tests; infections [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "elotuzumab", indication_id: "mm", label: "Myeloma — 10 mg/kg IV", route: "IV", population: E2_ADULT, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 400, unit: "mg/vial" }], rounding: "Vials of 300 or 400 mg", renal: [], flags: ["Weekly for cycles 1–2, then every 2 weeks (with lenalidomide)", "With pomalidomide: 20 mg/kg every 4 weeks from cycle 3", "Premedicate"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Empliciti (elotuzumab) — FDA label (DailyMed)", E2_DM("80686b7e-f6f4-4154-b5c0-c846425e2d91")], E2_BT],
  dose: { tagline: "Myeloma antibody given with lenalidomide or pomalidomide.",
    adult: [{ ind: "Multiple myeloma", text: "10 mg/kg IV weekly × 8, then every 2 weeks (or 20 mg/kg every 4 weeks with pomalidomide).", calc: ["mm"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ELRANATAMAB (FDA ELREXFIO BLA761345) ---------- */
FDB_M("elranatamab", {
  inn: "Elranatamab", atc: "L01FX32", cls: "BCMA × CD3 bispecific T-cell engager", risk: E2_ONC,
  linked: [],
  forms: ["Injection 44 mg/1.1 mL and 76 mg/1.9 mL (40 mg/mL) vials [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds BCMA on myeloma cells and CD3 on T cells, causing T-cell–mediated killing [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [E2_NEP],
  ind: { adult: ["Relapsed or refractory multiple myeloma after at least four prior lines including a PI, an IMiD and an anti-CD38 antibody (accelerated approval) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Step-up (SC)", "Day 1: 12 mg; day 4: 32 mg; day 8: 76 mg (first full dose) [FDA]."], ["Then", "76 mg weekly through week 24; responders 76 mg every 2 weeks from week 25 to 48; then every 4 weeks from week 49 if response maintained [FDA]."], ["Hospitalisation", "48 hours after step-up dose 1 and 24 hours after step-up dose 2 [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed step-up schedule." },
  adj: { renal: "Severe renal impairment and ESRD not studied [FDA].", hepatic: "Moderate to severe hepatic impairment not studied [FDA].", pregnancy: E2_NEP, other: "Premedicate (paracetamol, dexamethasone, diphenhydramine) before step-up doses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["CRS, fatigue, injection-site reactions, diarrhoea, upper respiratory infection, cytopenias [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cytokine release syndrome [FDA]", "Neurologic toxicity including ICANS [FDA]", "Serious infections, neutropenia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["CRS and neurologic signs; blood counts; infections [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC, calc: [],
  sources: [["FDA", "Elrexfio (elranatamab-bcmm) — FDA label (DailyMed)", E2_DM("f6fea598-ff58-4a20-b5e8-8a51f37d8beb")], E2_BT],
  dose: { tagline: "Bispecific for late-line myeloma — CRS and neurotoxicity; step-up in hospital.",
    boxedTitle: "Cytokine release syndrome and neurologic toxicity including immune effector cell-associated neurotoxicity syndrome", boxed: "• Cytokine Release Syndrome (CRS), including life-threatening or fatal reactions, can occur in patients receiving ELREXFIO. Initiate treatment with ELREXFIO step-up dosing schedule to reduce the risk of CRS. Withhold ELREXFIO until CRS resolves or permanently discontinue based on severity. • Neurologic toxicity, including Immune Effector Cell-Associated Neurotoxicity Syndrome (ICANS), and serious and life-threatening reactions, can occur in patients receiving ELREXFIO. Monitor patients for signs and symptoms of neurologic toxicity, including ICANS, during treatment. Withhold ELREXFIO until the neurologic toxicity resolves or permanently discontinue based on severity. • Because of the risk of CRS and neurologic toxicity, including ICANS, ELREXFIO is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called ELREXFIO REMS [FDA].",
    adult: [{ ind: "Relapsed/refractory myeloma", text: "12 mg (day 1), 32 mg (day 4), then 76 mg weekly; spacing to every 2 then 4 weeks in responders." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ELTROMBOPAG (FDA PROMACTA NDA022291) ---------- */
FDB_M("eltrombopag", {
  inn: "Eltrombopag", atc: "B02BX05", cls: "Thrombopoietin receptor agonist",
  linked: [],
  forms: ["Tablets 12.5, 25, 50, 75 mg; oral suspension 12.5, 25 mg kits (PROMACTA, eltrombopag olamine) [FDA]. Alvaiz (eltrombopag choline) uses different doses — not interchangeable [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Thrombopoietin receptor agonist that increases platelet production [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Chelates polyvalent cations — absorption falls with calcium, antacids and minerals [FDA]."],
  ind: { adult: ["Persistent or chronic immune thrombocytopenia (ITP) [FDA].", "Thrombocytopenia in chronic hepatitis C to allow interferon therapy [FDA].", "Severe aplastic anaemia (first-line with immunosuppression; refractory) [FDA]."], paed: ["ITP from 1 year; first-line SAA from 2 years [FDA]."] },
  adult: [["ITP", "50 mg once daily (25 mg for East-/Southeast-Asian ancestry or any hepatic impairment); adjust for platelets at least 50 × 10⁹/L; maximum 75 mg/day [FDA]."], ["Hepatitis C thrombocytopenia", "25 mg once daily; maximum 100 mg/day [FDA]."], ["First-line SAA (12 years and over)", "150 mg once daily with immunosuppressive therapy (reduce for East-/Southeast-Asian ancestry) [FDA]."], ["Refractory SAA", "50 mg once daily (reduce for hepatic impairment or East-/Southeast-Asian ancestry) [FDA]."], ["Administration", "Without a meal or with a low-calcium meal (50 mg or less); 2 hours before or 4 hours after antacids, calcium-rich foods or mineral supplements [FDA]."]],
  paed: { tiers: ["ITP 6 years and over: 50 mg once daily (25 mg East-/Southeast-Asian ancestry) [FDA].", "ITP 1–5 years: 25 mg once daily [FDA].", "First-line SAA: 2–5 years 2.5 mg/kg once daily; 6–11 years 75 mg once daily; 12 years and over 150 mg once daily [FDA]."], transition: "Adult dose.", calcNote: "Bhutanese patients are not in the label's East-/Southeast-Asian group by definition — use clinical judgement [UNVERIFIED-KNOWLEDGE]." },
  adj: { renal: "Use with caution and monitor [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "ITP and refractory SAA: start 25 mg in any hepatic impairment [FDA].", pregnancy: E2_NEP, other: "Hepatotoxicity — check liver tests; bone marrow reticulin; thrombosis risk with high platelets [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Thrombocytosis, thrombosis, hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E2_LD, manage: "Oral calcium, magnesium or aluminium preparations to chelate; monitor platelets [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, diarrhoea, upper respiratory infection, raised ALT, myalgia, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hepatic decompensation in hepatitis C with interferon/ribavirin [FDA]", "Hepatotoxicity [FDA]", "Thrombotic events [FDA] [UNVERIFIED-KNOWLEDGE]", "Cataracts [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ALT, AST, bilirubin before starting, every 2 weeks during titration, then monthly; platelets weekly until stable [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "eltrombopag", indication_id: "itp", label: "ITP, 6 years and over — 50 mg once daily", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 75, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["25 mg if East-/Southeast-Asian ancestry or any hepatic impairment", "Maximum 75 mg/day"], sources: ["FDA"] },
    { drug: "eltrombopag", indication_id: "itp_small", label: "ITP, 1–5 years — 25 mg once daily", route: "PO", population: { min_age_months: 12, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 75, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Tablet or oral suspension kit", renal: [], flags: ["Maximum 75 mg/day"], sources: ["FDA"] },
    { drug: "eltrombopag", indication_id: "saa_small", label: "First-line SAA, 2–5 years — 2.5 mg/kg once daily", route: "PO", population: { min_age_months: 24, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Oral suspension kit", renal: [], flags: ["With standard immunosuppressive therapy"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Promacta (eltrombopag olamine) — FDA label (DailyMed)", E2_DM("7714a0ed-34bb-46e6-a0a5-b363908b22c2")], E2_BT],
  dose: { tagline: "TPO agonist for ITP and aplastic anaemia — take away from calcium; watch the liver.",
    boxedTitle: "Risk for hepatic decompensation in patients with chronic hepatitis C and risk of hepatotoxicity", boxed: "In patients with chronic hepatitis C, PROMACTA in combination with interferon and ribavirin may increase the risk of hepatic decompensation. PROMACTA may increase the risk of severe and potentially life-threatening hepatotoxicity. Monitor hepatic function and discontinue dosing as recommended [FDA].",
    adult: [{ ind: "ITP", text: "50 mg once daily (25 mg if East-/Southeast-Asian or hepatic impairment); maximum 75 mg.", calc: ["itp"] }, { ind: "Severe aplastic anaemia", text: "First-line 150 mg daily; refractory 50 mg daily." }, { ind: "Hepatitis C thrombocytopenia", text: "25 mg daily; maximum 100 mg." }],
    child: [{ ind: "ITP", text: "1–5 years 25 mg; 6 years and over 50 mg once daily.", calc: ["itp_small", "itp"] }, { ind: "First-line SAA", text: "2–5 years 2.5 mg/kg; 6–11 years 75 mg; 12+ 150 mg once daily.", calc: ["saa_small"] }] }
});

/* ---------- ELUXADOLINE (FDA VIBERZI NDA206940) ---------- */
FDB_M("eluxadoline", {
  inn: "Eluxadoline", atc: "A07DA06", cls: "Mixed mu/kappa-opioid agonist, delta antagonist (gut-acting)",
  linked: [],
  forms: ["Tablets 75, 100 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Acts on enteric opioid receptors to slow transit and reduce pain [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["OATP1B1 substrate [FDA]."],
  ind: { adult: ["Irritable bowel syndrome with diarrhoea (IBS-D) in adults [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["IBS-D", "100 mg twice daily with food [FDA]."], ["Lower dose 75 mg twice daily", "If 100 mg not tolerated; with OATP1B1 inhibitors; mild or moderate hepatic impairment; eGFR under 60 or ESRD not on dialysis [FDA]."], ["Stop", "If severe constipation over 4 days [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "eGFR under 60 or ESRD not on dialysis: 75 mg twice daily [FDA].", hepatic: "Child-Pugh A or B: 75 mg twice daily; Child-Pugh C: contraindicated [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: E2_NEP, other: "Controlled substance (C-IV); avoid alcohol (pancreatitis) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: "Supportive; naloxone may be considered [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["No gallbladder (pancreatitis, sphincter of Oddi spasm) [FDA].", "Known or suspected biliary or pancreatic duct obstruction or sphincter of Oddi disease [FDA] [UNVERIFIED-KNOWLEDGE].", "Alcoholism or more than 3 drinks a day; history of pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE].", "Severe hepatic impairment; severe constipation or bowel obstruction [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Constipation, nausea, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Sphincter of Oddi spasm [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe constipation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Abdominal pain (pancreatitis), constipation [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "eluxadoline", indication_id: "ibsd", label: "IBS-D — 100 mg twice daily with food", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "reduce_dose", set_value: 75, note: "eGFR under 60 (not on dialysis): 75 mg twice daily" }], flags: ["Not without a gallbladder", "75 mg twice daily in mild–moderate hepatic impairment or with OATP1B1 inhibitors"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Viberzi (eluxadoline) — FDA label (DailyMed)", E2_DM("7821bd40-4c84-4984-951b-6436ae20421a")], E2_BT],
  dose: { tagline: "IBS-D tablet — never without a gallbladder (pancreatitis).",
    adult: [{ ind: "IBS-D", text: "100 mg twice daily with food (75 mg in renal/hepatic impairment).", calc: ["ibsd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EMAPALUMAB (FDA GAMIFANT BLA761107) ---------- */
FDB_M("emapalumab", {
  inn: "Emapalumab", atc: "L04AG14", cls: "Anti-interferon-gamma monoclonal antibody",
  linked: [],
  forms: ["Injection 10 mg/2 mL, 50 mg/10 mL, 100 mg/20 mL (5 mg/mL) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Neutralises interferon-gamma [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal (including dialysis) and hepatic impairment did not affect PK [FDA]."],
  ind: { adult: ["Primary HLH (refractory, recurrent, progressive or intolerant of conventional therapy) [FDA].", "HLH/MAS in Still's disease with inadequate response to glucocorticoids [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Primary HLH including newborns [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Primary HLH", "Start 1 mg/kg IV over 1 hour twice a week (every 3–4 days); titrate by response up to 10 mg/kg [FDA]."], ["HLH/MAS in Still's disease", "6 mg/kg once, then 3 mg/kg every 3 days for 5 doses, then 3 mg/kg twice weekly; up to 10 mg/kg [FDA]."], ["Prophylaxis", "Herpes zoster, PJP and fungal prophylaxis; TB screening [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same mg/kg as adults [FDA]."], transition: "—", calcNote: "5 mg/mL vials." },
  adj: { renal: "No adjustment [FDA].", hepatic: "No adjustment [FDA].", pregnancy: E2_NEP, other: "Avoid live vaccines [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Infections, hypertension, infusion reactions, pyrexia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious infections (mycobacteria, herpes zoster, histoplasma) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Infection screening and monitoring [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "emapalumab", indication_id: "hlh", label: "Primary HLH — start 1 mg/kg IV twice weekly", route: "IV", population: E2_ANY, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Every 3–4 days", "Titrate up to 10 mg/kg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Gamifant (emapalumab-lzsg) — FDA label (DailyMed)", E2_DM("a865e0ef-8685-4f69-8838-648c4f3bab47")], E2_BT],
  dose: { tagline: "Interferon-gamma blocker for primary HLH and MAS.",
    adult: [{ ind: "Primary HLH", text: "1 mg/kg twice weekly, up to 10 mg/kg.", calc: ["hlh"] }, { ind: "MAS in Still's disease", text: "6 mg/kg, then 3 mg/kg every 3 days × 5, then twice weekly." }],
    child: [{ ind: "Primary HLH", text: "1 mg/kg twice weekly, up to 10 mg/kg.", calc: ["hlh"] }] }
});

/* ---------- EMICIZUMAB (FDA HEMLIBRA BLA761083) ---------- */
FDB_M("emicizumab", {
  inn: "Emicizumab", atc: "B02BX06", cls: "Bispecific antibody mimicking factor VIII",
  linked: [],
  forms: ["Single-dose vials 30 mg/mL (30 mg) and 150 mg/mL (60, 105, 150 mg) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Bridges activated factor IX and factor X, replacing missing factor VIII function [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No adjustment for mild–moderate renal or hepatic impairment [FDA]."],
  ind: { adult: ["Routine prophylaxis of bleeding in haemophilia A with or without factor VIII inhibitors [FDA]."], paed: ["From newborn [FDA]."] },
  adult: [["Loading", "3 mg/kg SC once weekly for 4 weeks [FDA]."], ["Maintenance", "1.5 mg/kg once weekly, or 3 mg/kg every 2 weeks, or 6 mg/kg every 4 weeks [FDA]."], ["Bypassing agents", "Avoid aPCC; if needed, do not exceed 100 U/kg/24 h for 24 h or more [FDA]."]],
  paed: { tiers: ["Same mg/kg as adults, from newborn [FDA]."], transition: "—", calcNote: "Vial concentrations differ — combine vials carefully." },
  adj: { renal: "No adjustment (mild–moderate) [FDA].", hepatic: "No adjustment (mild–moderate) [FDA].", pregnancy: E2_NEP, other: "Interferes with aPTT-based assays and factor VIII activity tests [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Injection-site reactions, headache, arthralgia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Thrombotic microangiopathy and thrombosis with aPCC [FDA]"] },
  monitor: ["Bleeding; use chromogenic factor VIII assay with bovine reagents if needed [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "emicizumab", indication_id: "load", label: "Haemophilia A — loading 3 mg/kg SC weekly × 4", route: "SC", population: E2_ANY, basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Combine 30 mg/mL and 150 mg/mL vials per label", renal: [], flags: ["Once weekly for 4 weeks"], sources: ["FDA"] },
    { drug: "emicizumab", indication_id: "m1", label: "Maintenance — 1.5 mg/kg weekly", route: "SC", population: E2_ANY, basis: "mg_per_kg", dose: { value: 1.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Combine vials per label", renal: [], flags: ["Or 3 mg/kg every 2 weeks, or 6 mg/kg every 4 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Hemlibra (emicizumab-kxwh) — FDA label (DailyMed)", E2_DM("2483adba-fab6-4d1b-96c5-c195577ed071")], E2_BT],
  dose: { tagline: "Subcutaneous prophylaxis for haemophilia A — avoid high-dose aPCC.",
    boxedTitle: "Thrombotic microangiopathy and thromboembolism", boxed: "Cases of thrombotic microangiopathy and thrombotic events were reported when on average a cumulative amount of >100 U/kg/24 hours of activated prothrombin complex concentrate was administered for 24 hours or more to patients receiving HEMLIBRA prophylaxis. Monitor for the development of thrombotic microangiopathy and thrombotic events if aPCC is administered. Discontinue aPCC and suspend dosing of HEMLIBRA if symptoms occur [FDA].",
    adult: [{ ind: "Haemophilia A prophylaxis", text: "3 mg/kg weekly × 4, then 1.5 mg/kg weekly (or 3 mg/kg 2-weekly, 6 mg/kg 4-weekly).", calc: ["load", "m1"] }],
    child: [{ ind: "Haemophilia A prophylaxis", text: "Same mg/kg from birth.", calc: ["load", "m1"] }] }
});

/* ---------- EMPAGLIFLOZIN (FDA JARDIANCE NDA204629) ---------- */
FDB_M("empagliflozin", {
  inn: "Empagliflozin", atc: "A10BK03", cls: "SGLT2 inhibitor",
  linked: [],
  forms: ["Tablets 10, 25 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits renal SGLT2, increasing urinary glucose and sodium loss [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Glycaemic efficacy falls as eGFR falls [FDA]."],
  ind: { adult: ["Heart failure — reduce cardiovascular death and HF hospitalisation [FDA].", "Chronic kidney disease at risk of progression [FDA] [UNVERIFIED-KNOWLEDGE].", "Type 2 diabetes with cardiovascular disease — reduce cardiovascular death [FDA] [UNVERIFIED-KNOWLEDGE].", "Glycaemic control in type 2 diabetes [FDA]."], paed: ["Type 2 diabetes from 10 years [FDA]."] },
  adult: [["All indications", "10 mg once daily in the morning [FDA]."], ["Type 2 diabetes — more control", "May increase to 25 mg once daily [FDA]."], ["Before surgery", "Withhold at least 3 days before surgery or prolonged fasting [FDA]."]],
  paed: { tiers: ["Type 2 diabetes 10 years and over: 10 mg once daily; may increase to 25 mg [FDA]."], transition: "Adult dose.", calcNote: "10 and 25 mg tablets." },
  adj: { renal: "Glycaemic control: not recommended if eGFR under 30 [FDA]. HF/CKD use continues at lower eGFR per label [FDA] [UNVERIFIED-KNOWLEDGE]. Not on dialysis [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: E2_NEP, pregnancy: "Not recommended in 2nd and 3rd trimesters [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Correct volume depletion first; ketoacidosis risk (also euglycaemic) — not for type 1 diabetes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to empagliflozin or excipients (angioedema has occurred) [FDA]."],
  ae: { common: ["Genital mycotic infections, urinary tract infections, increased urination [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Ketoacidosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Volume depletion, AKI [FDA] [UNVERIFIED-KNOWLEDGE]", "Urosepsis, pyelonephritis [FDA] [UNVERIFIED-KNOWLEDGE]", "Fournier's gangrene [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypoglycaemia with insulin or sulfonylurea [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Renal function and volume status before starting and as indicated [FDA]."],
  local: E2_LOC,
  calc: [
    { drug: "empagliflozin", indication_id: "std", label: "HF / CKD / type 2 diabetes — 10 mg once daily", route: "PO", population: { min_age_months: 120, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 25, max_daily: 25, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Glycaemic control not recommended if eGFR under 30 [FDA]", flags: ["Type 2 diabetes: may increase to 25 mg", "Children 10–17: type 2 diabetes only", "Stop 3 days before surgery"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Jardiance (empagliflozin) — FDA label (DailyMed)", E2_DM("faf3dd6a-9cd0-39c2-0d2e-232cb3f67565")], E2_BT],
  dose: { tagline: "SGLT2 inhibitor for heart failure, CKD and type 2 diabetes.",
    adult: [{ ind: "Heart failure, CKD", text: "10 mg once daily.", calc: ["std"] }, { ind: "Type 2 diabetes", text: "10 mg once daily; may increase to 25 mg.", calc: ["std"] }],
    child: [{ ind: "Type 2 diabetes, 10 years and over", text: "10 mg once daily; up to 25 mg.", calc: ["std"] }] }
});

/* ---------- EMTRICITABINE (FDA EMTRIVA NDA021500) ---------- */
FDB_M("emtricitabine", {
  inn: "Emtricitabine", atc: "J05AF09", cls: "Nucleoside reverse transcriptase inhibitor (NRTI)",
  linked: [],
  forms: ["Capsules 200 mg; oral solution 10 mg/mL [FDA].", "Bhutan: not on the NEML as a single drug (used in fixed combinations) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Cytidine analogue that terminates HIV DNA chains; also active against HBV [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — extend interval when CrCl under 50 [FDA]."],
  ind: { adult: ["HIV-1 infection with other antiretrovirals [FDA]."], paed: ["From birth [FDA]."] },
  adult: [["HIV-1", "200 mg capsule once daily, or 240 mg (24 mL) oral solution once daily [FDA]."], ["Renal (capsule)", "CrCl 30–49: 200 mg every 48 h; 15–29: every 72 h; under 15 or haemodialysis: every 96 h (after dialysis) [FDA]."], ["Renal (solution)", "CrCl 30–49: 120 mg daily; 15–29: 80 mg daily; under 15 or haemodialysis: 60 mg daily [FDA]."], ["Before starting", "Test for hepatitis B [FDA]."]],
  paed: { tiers: ["0–3 months: 3 mg/kg oral solution once daily [FDA].", "3 months–17 years: 6 mg/kg oral solution once daily, maximum 240 mg; over 33 kg who can swallow capsules: 200 mg capsule once daily [FDA]."], transition: "Over 33 kg: 200 mg capsule.", calcNote: "Solution 10 mg/mL." },
  adj: { renal: "Interval or dose adjustment when CrCl under 50 (table) [FDA].", hepatic: E2_NEP, pregnancy: E2_NEP, other: "Do not combine with lamivudine or other emtricitabine products [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: "Supportive; haemodialysis removes about 30% over 3 hours [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Previously demonstrated hypersensitivity to any component [FDA]."],
  ae: { common: ["Headache, diarrhoea, nausea, fatigue, rash, skin hyperpigmentation (palms and soles) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Post-treatment hepatitis B flare [FDA]", "Lactic acidosis and hepatomegaly with steatosis [FDA] [UNVERIFIED-KNOWLEDGE]", "Immune reconstitution syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["HBV status; liver tests for months after stopping in HBV co-infection; renal function [FDA]."],
  local: E2_LOC,
  calc: [
    { drug: "emtricitabine", indication_id: "adult", label: "HIV-1 adult — 200 mg capsule once daily", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 200, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 30, crcl_max: 49.999, action: "extend_interval", factor: 48, note: "CrCl 30–49: 200 mg every 48 h" }, { crcl_min: 15, crcl_max: 29.999, action: "extend_interval", factor: 72, note: "CrCl 15–29: 200 mg every 72 h" }, { crcl_min: 0, crcl_max: 14.999, action: "extend_interval", factor: 96, note: "CrCl under 15 or haemodialysis: 200 mg every 96 h, after dialysis" }], flags: ["Test for hepatitis B first"], sources: ["FDA"] },
    { drug: "emtricitabine", indication_id: "neo", label: "0–3 months — 3 mg/kg oral solution once daily", route: "PO", population: { min_age_months: 0, max_age_months: 3, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "soln", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "emtricitabine", indication_id: "child", label: "3 months–17 years — 6 mg/kg oral solution once daily (max 240 mg)", route: "PO", population: { min_age_months: 3, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 6, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 240, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "soln", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Over 33 kg and can swallow: 200 mg capsule instead"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Emtriva (emtricitabine) — FDA label (DailyMed)", E2_DM("d6599395-3944-44f9-97f2-e0424c6b6a1f")], E2_BT],
  dose: { tagline: "NRTI backbone for HIV — also suppresses hepatitis B; flare risk on stopping.",
    boxedTitle: "Posttreatment acute exacerbation of hepatitis B", boxed: "Severe acute exacerbations of hepatitis B (HBV) have been reported in patients who are coinfected with HIV-1 and HBV and have discontinued EMTRIVA. Hepatic function should be monitored closely with both clinical and laboratory follow-up for at least several months in patients who are coinfected with HIV-1 and HBV and discontinue EMTRIVA. If appropriate, initiation of anti-hepatitis B therapy may be warranted [FDA].",
    adult: [{ ind: "HIV-1", text: "200 mg capsule (or 240 mg solution) once daily; extend interval if CrCl under 50.", calc: ["adult"] }],
    child: [{ ind: "HIV-1", text: "0–3 months 3 mg/kg; 3 months+ 6 mg/kg (max 240 mg) once daily.", calc: ["neo", "child"] }] }
});

/* ---------- ENASIDENIB (FDA IDHIFA NDA209606) ---------- */
FDB_M("enasidenib", {
  inn: "Enasidenib", atc: "L01XM02", cls: "IDH2 inhibitor", risk: E2_ONC,
  linked: [],
  forms: ["Tablets 50, 100 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits mutant IDH2, lowering 2-hydroxyglutarate and allowing myeloid differentiation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["No clinically meaningful effect of mild to severe hepatic or CrCl 30 and over renal impairment in population PK [FDA]."],
  ind: { adult: ["Relapsed or refractory AML with an IDH2 mutation [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["IDH2-mutated AML", "100 mg once daily until progression or unacceptable toxicity; treat at least 6 months for response [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment if CrCl 30 or more [FDA].", hepatic: "No adjustment [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Raises indirect bilirubin (UGT1A1 inhibition) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, raised bilirubin, decreased appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Differentiation syndrome [FDA]", "Tumour lysis syndrome, leukocytosis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts and chemistries at least every 2 weeks for the first 3 months; signs of differentiation syndrome [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "enasidenib", indication_id: "aml", label: "IDH2-mutated AML — 100 mg once daily", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Watch for differentiation syndrome"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Idhifa (enasidenib) — FDA label (DailyMed)", E2_DM("a5b4cdf0-3fa8-4c6c-80f6-8d8a00e3a5b6")], E2_BT],
  dose: { tagline: "Oral IDH2 inhibitor for relapsed AML — differentiation syndrome risk.",
    boxedTitle: "Differentiation syndrome", boxed: "Patients treated with IDHIFA have experienced symptoms of differentiation syndrome, which can be fatal if not treated. Symptoms may include fever, dyspnea, acute respiratory distress, pulmonary infiltrates, pleural or pericardial effusions, rapid weight gain or peripheral edema, lymphadenopathy, bone pain, and hepatic, renal, or multi-organ dysfunction. If differentiation syndrome is suspected, initiate corticosteroid therapy and hemodynamic monitoring until symptom resolution [FDA].",
    adult: [{ ind: "Relapsed/refractory IDH2 AML", text: "100 mg once daily.", calc: ["aml"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ENCORAFENIB (FDA BRAFTOVI NDA210496) ---------- */
FDB_M("encorafenib", {
  inn: "Encorafenib", atc: "L01EC03", cls: "BRAF kinase inhibitor", risk: E2_ONC,
  linked: [],
  forms: ["Capsules 75 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits mutant BRAF V600 kinase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate — avoid strong or moderate inhibitors or reduce dose per label [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["BRAF V600E/K melanoma (with binimetinib) [FDA].", "BRAF V600E metastatic colorectal cancer (with cetuximab ± chemotherapy) [FDA].", "BRAF V600E metastatic NSCLC (with binimetinib) [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Melanoma / NSCLC", "450 mg once daily with binimetinib [FDA]."], ["Colorectal cancer", "300 mg once daily with cetuximab (± mFOLFOX6 or FOLFIRI) [FDA]."], ["Before starting", "Confirm the BRAF mutation [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment for CrCl 30 to under 90 [FDA].", hepatic: "Mild: no adjustment; moderate or severe: not established [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "New skin cancers, QT prolongation, haemorrhage, uveitis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, nausea, diarrhoea, vomiting, abdominal pain, arthralgia, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["New primary malignancies [FDA] [UNVERIFIED-KNOWLEDGE]", "Haemorrhage [FDA] [UNVERIFIED-KNOWLEDGE]", "Uveitis, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Skin examinations, ECG and electrolytes, eye symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "encorafenib", indication_id: "mel", label: "Melanoma / NSCLC — 450 mg once daily (with binimetinib)", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 450, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 450, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 75, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Colorectal cancer: 300 mg once daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Braftovi (encorafenib) — FDA label (DailyMed)", E2_DM("235dfc38-0f0b-4037-b501-7a9f4294740c")], E2_BT],
  dose: { tagline: "BRAF inhibitor for melanoma, colorectal and lung cancer with BRAF V600E.",
    adult: [{ ind: "Melanoma / NSCLC", text: "450 mg once daily with binimetinib.", calc: ["mel"] }, { ind: "Colorectal cancer", text: "300 mg once daily with cetuximab." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ENFORTUMAB VEDOTIN (FDA PADCEV BLA761137) ---------- */
FDB_M("enfortumab-vedotin", {
  inn: "Enfortumab vedotin", atc: "L01FX13", cls: "Nectin-4–directed antibody–drug conjugate", risk: E2_ONC,
  linked: [],
  forms: ["Powder for injection 20 mg and 30 mg vials [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Delivers MMAE (microtubule disruptor) to Nectin-4–expressing cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [E2_NEP],
  ind: { adult: ["Urothelial cancer — muscle-invasive (with pembrolizumab, peri-operative) and locally advanced or metastatic [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Dose", "1.25 mg/kg (maximum 125 mg) IV over 30 minutes on days 1 and 8 of each 21-day cycle (with pembrolizumab) [FDA]."], ["Administration", "IV infusion only — not IV push or bolus [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: E2_NEP, hepatic: "Avoid in moderate or severe hepatic impairment [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Hyperglycaemia, neuropathy, ocular disorders, pneumonitis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Rash, peripheral neuropathy, fatigue, alopecia, decreased appetite, diarrhoea, dysgeusia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["SJS/TEN [FDA]", "Hyperglycaemia and DKA [FDA] [UNVERIFIED-KNOWLEDGE]", "Pneumonitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Extravasation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Skin reactions (especially cycle 1); glucose; neuropathy; eyes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "enfortumab-vedotin", indication_id: "uc", label: "Urothelial cancer — 1.25 mg/kg IV (max 125 mg) days 1 and 8", route: "IV", population: E2_ADULT, basis: "mg_per_kg", dose: { value: 1.25, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 125, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Vials of 20 and 30 mg", renal: [], flags: ["Days 1 and 8 of a 21-day cycle", "Maximum 125 mg per dose"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Padcev (enfortumab vedotin-ejfv) — FDA label (DailyMed)", E2_DM("b5631d3e-4604-4363-8f20-11dfc5a4a8ed")], E2_BT],
  dose: { tagline: "ADC for urothelial cancer — severe skin reactions, mainly in cycle 1.",
    boxedTitle: "Serious skin reactions", boxed: "• PADCEV can cause severe and fatal cutaneous adverse reactions including Stevens-Johnson syndrome (SJS) and Toxic Epidermal Necrolysis (TEN), which occurred predominantly during the first cycle of treatment, but may occur later. • Closely monitor patients for skin reactions. • Immediately withhold PADCEV and consider referral for specialized care for suspected SJS or TEN or severe skin reactions. • Permanently discontinue PADCEV in patients with confirmed SJS or TEN; or Grade 4 or recurrent Grade 3 skin reactions [FDA].",
    adult: [{ ind: "Urothelial cancer", text: "1.25 mg/kg (max 125 mg) IV days 1 and 8 every 21 days.", calc: ["uc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ENSIFENTRINE (FDA OHTUVAYRE NDA217389) ---------- */
FDB_M("ensifentrine", {
  inn: "Ensifentrine", atc: "R03DX12", cls: "Inhaled PDE3/PDE4 inhibitor",
  linked: [],
  forms: ["Inhalation suspension 3 mg/2.5 mL ampoules for jet nebuliser [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Dual PDE3/4 inhibition: bronchodilator and anti-inflammatory [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Exposure about 2.3-fold higher in moderate–severe hepatic impairment [FDA]."],
  ind: { adult: ["Maintenance treatment of COPD in adults [FDA]."], paed: ["Not applicable [NEP]."] },
  adult: [["COPD maintenance", "3 mg (one ampoule) twice daily, morning and evening, by standard jet nebuliser with a mouthpiece [FDA]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: E2_NEP, hepatic: "Exposure increased; no dose change stated [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: E2_NEP, other: "Not for acute bronchospasm; psychiatric events reported [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["Hypersensitivity to ensifentrine or any component [FDA]."],
  ae: { common: ["Back pain, hypertension, urinary tract infection, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Paradoxical bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]", "Psychiatric events including suicidality [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptoms, mood [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "ensifentrine", indication_id: "copd", label: "COPD maintenance — 3 mg nebulised twice daily", route: "Inhaled", population: E2_ADULT, basis: "fixed", dose: { value: 3, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 3, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 1.2, unit: "mg/mL" }], rounding: "Whole ampoule", renal: [], flags: ["Standard jet nebuliser with mouthpiece", "Not a rescue treatment"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ohtuvayre (ensifentrine) — FDA label (DailyMed)", E2_DM("e6433c98-41a0-4f99-8f7f-d0e9db6e3f40")], E2_BT],
  dose: { tagline: "Twice-daily nebulised maintenance for COPD — not for rescue.",
    adult: [{ ind: "COPD", text: "3 mg nebulised twice daily.", calc: ["copd"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- ENSITRELVIR (FDA XOCOVA NDA220442) ---------- */
FDB_M("ensitrelvir", {
  inn: "Ensitrelvir", atc: "J05AE", cls: "SARS-CoV-2 3CL protease inhibitor",
  linked: [],
  forms: ["Tablets 125 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits the SARS-CoV-2 main (3CL) protease [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP3A inhibitor — many drugs contraindicated [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Post-exposure prophylaxis of COVID-19 after contact with an infected person [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Post-exposure prophylaxis", "Start within 72 hours of contact: 375 mg (three 125 mg tablets) on day 1, then 125 mg once daily on days 2–5 [FDA]."], ["Before starting", "Verify pregnancy status [FDA]."]],
  paed: { tiers: ["12 years and over: adult dose [FDA]."], transition: "Adult dose.", calcNote: "5-day course." },
  adj: { renal: "No adjustment [FDA].", hepatic: "No adjustment in Child-Pugh A or B [FDA].", pregnancy: "Verify pregnancy status before starting (fetal risk) [FDA].", other: "Review all medicines for CYP3A interactions [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["Clinically significant hypersensitivity to ensitrelvir or components [FDA].", "Drugs highly dependent on CYP3A for clearance or strong CYP3A inducers (per label list) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Decreased HDL, raised triglycerides, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Drug interactions causing serious reactions [FDA]"] },
  monitor: ["Interacting drug levels/effects [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "ensitrelvir", indication_id: "pep", label: "COVID-19 PEP — 375 mg day 1, then 125 mg days 2–5", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 375, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 375, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 125, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Day 1 only; then 125 mg once daily days 2–5", "Start within 72 h of exposure"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Xocova (ensitrelvir) — FDA label (DailyMed)", E2_DM("526acf60-abc3-2cc2-e063-6294a90affa6")], E2_BT],
  dose: { tagline: "5-day COVID-19 post-exposure prophylaxis — many CYP3A interactions.",
    adult: [{ ind: "COVID-19 PEP", text: "375 mg day 1, then 125 mg days 2–5.", calc: ["pep"] }],
    child: [{ ind: "12 years and over", text: "Adult dose.", calc: ["pep"] }] }
});

/* ---------- ENTACAPONE (FDA tablets NDA020796) ---------- */
FDB_M("entacapone", {
  inn: "Entacapone", atc: "N04BX02", cls: "Peripheral COMT inhibitor",
  linked: [],
  forms: ["Tablets 200 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits peripheral COMT, prolonging levodopa action [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Exposure about 2-fold higher in hepatic impairment [FDA]."],
  ind: { adult: ["Adjunct to levodopa/carbidopa for end-of-dose wearing-off in Parkinson's disease [FDA]."], paed: ["Not applicable [NEP]."] },
  adult: [["Parkinson's disease", "200 mg with each levodopa/carbidopa dose, up to 8 times daily (1,600 mg/day) [FDA]."], ["Levodopa", "Many patients need lower levodopa doses, especially if levodopa is 800 mg/day or more or with dyskinesia [FDA]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "No adjustment stated [NEP].", hepatic: "Use with caution (higher exposure) [FDA].", pregnancy: E2_NEP, other: "No antiparkinsonian effect on its own; orange-brown urine [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to the drug or ingredients [FDA]."],
  ae: { common: ["Dyskinesia, nausea, urine discolouration, diarrhoea, abdominal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hallucinations, falling asleep during activities, orthostatic hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Rhabdomyolysis, hyperpyrexia on withdrawal [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Dyskinesia, BP, sleepiness [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "entacapone", indication_id: "pd", label: "Parkinson's — 200 mg with each levodopa dose (max 8/day)", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 200, max_daily: 1600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Only with levodopa/carbidopa", "Maximum 8 tablets (1,600 mg) daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Entacapone tablets — FDA label (DailyMed)", E2_DM("ad4b6d79-efd3-4c43-b4dc-5afdacf939a4")], E2_BT],
  dose: { tagline: "COMT inhibitor taken with each levodopa dose for wearing-off.",
    adult: [{ ind: "Parkinson's wearing-off", text: "200 mg with each levodopa dose; maximum 1,600 mg/day.", calc: ["pd"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- ENTECAVIR (FDA BARACLUDE NDA021797) ---------- */
FDB_M("entecavir", {
  inn: "Entecavir", atc: "J05AF10", cls: "Guanosine nucleoside analogue (HBV polymerase inhibitor)",
  linked: [],
  forms: ["Tablets 0.5, 1 mg; oral solution 0.05 mg/mL [FDA].", "Bhutan: not on the NEML 2025 [BT-NEML]."],
  moa: "Inhibits HBV polymerase (priming, reverse transcription and DNA synthesis) [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally cleared — adjust when CrCl under 50 [FDA].", "Take on an empty stomach (2 h after and 2 h before food) [FDA]."],
  ind: { adult: ["Chronic hepatitis B with active viral replication and active liver disease [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Chronic hepatitis B from 2 years, at least 10 kg [FDA]."] },
  adult: [["Nucleoside-naïve, compensated (16 years and over)", "0.5 mg once daily [FDA]."], ["Lamivudine-refractory or resistance; decompensated liver disease", "1 mg once daily [FDA]."], ["Renal (usual 0.5 mg dose)", "CrCl 30 to under 50: 0.25 mg daily or 0.5 mg every 48 h; 10 to under 30: 0.15 mg daily or 0.5 mg every 72 h; under 10, haemodialysis or CAPD: 0.05 mg daily or 0.5 mg every 7 days (after dialysis) [FDA]."]],
  paed: { tiers: ["2 years and over, 10 kg and over (oral solution 0.05 mg/mL once daily), treatment-naïve: 10–11 kg 3 mL; over 11–14 kg 4 mL; over 14–17 kg 5 mL; over 17–20 kg 6 mL; over 20–23 kg 7 mL; over 23–26 kg 8 mL; over 26–30 kg 9 mL; over 30 kg 10 mL (0.5 mg) [FDA].", "Lamivudine-experienced: double these volumes (over 30 kg 1 mg) [FDA]."], transition: "Over 30 kg: 0.5 mg (naïve).", calcNote: "Oral solution 0.05 mg/mL." },
  adj: { renal: "Adjust when CrCl under 50 (table) [FDA].", hepatic: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: E2_NEP, other: "Not for HIV/HBV co-infection without HIV treatment (HIV resistance) [FDA]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: "Supportive; haemodialysis removes about 13% [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, fatigue, dizziness, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hepatitis B flare after stopping [FDA]", "HIV resistance if HIV untreated [FDA]", "Lactic acidosis and hepatomegaly with steatosis [FDA]"] },
  monitor: ["HBV DNA, ALT; liver tests for several months after stopping; HIV test before starting [FDA]."],
  local: E2_LOC,
  calc: [
    { drug: "entecavir", indication_id: "naive", label: "Chronic HBV, nucleoside-naïve (16 years and over) — 0.5 mg once daily", route: "PO", population: { min_age_months: 192, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 0.5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 30, crcl_max: 49.999, action: "extend_interval", factor: 48, note: "CrCl 30 to under 50: 0.5 mg every 48 h (or 0.25 mg daily)" }, { crcl_min: 10, crcl_max: 29.999, action: "extend_interval", factor: 72, note: "CrCl 10 to under 30: 0.5 mg every 72 h (or 0.15 mg daily)" }, { crcl_min: 0, crcl_max: 9.999, action: "extend_interval", factor: 168, note: "CrCl under 10 / dialysis: 0.5 mg every 7 days (or 0.05 mg daily), after dialysis" }], flags: ["Empty stomach", "Lamivudine-refractory or decompensated: 1 mg"], sources: ["FDA"] },
    { drug: "entecavir", indication_id: "paed", label: "Chronic HBV child, 2 years+, treatment-naïve — by weight (0.05 mg/mL)", route: "PO", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 10, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1,
      bands: [{ min_weight_kg: 10, max_weight_kg: 11.0001, text: "3 mL (0.15 mg) once daily", daily: 0.15 }, { min_weight_kg: 11.0001, max_weight_kg: 14.0001, text: "4 mL (0.2 mg) once daily", daily: 0.2 }, { min_weight_kg: 14.0001, max_weight_kg: 17.0001, text: "5 mL (0.25 mg) once daily", daily: 0.25 }, { min_weight_kg: 17.0001, max_weight_kg: 20.0001, text: "6 mL (0.3 mg) once daily", daily: 0.3 }, { min_weight_kg: 20.0001, max_weight_kg: 23.0001, text: "7 mL (0.35 mg) once daily", daily: 0.35 }, { min_weight_kg: 23.0001, max_weight_kg: 26.0001, text: "8 mL (0.4 mg) once daily", daily: 0.4 }, { min_weight_kg: 26.0001, max_weight_kg: 30.0001, text: "9 mL (0.45 mg) once daily", daily: 0.45 }, { min_weight_kg: 30.0001, max_weight_kg: null, text: "10 mL (0.5 mg) or one 0.5 mg tablet once daily", daily: 0.5 }],
      caps: {}, weight_basis: "actual", formulations: [], rounding: "Oral solution 0.05 mg/mL", renal: [], flags: ["Lamivudine-experienced: double the volume", "Empty stomach"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Baraclude (entecavir) — FDA label (DailyMed)", E2_DM("046e61c9-9298-4b2e-b76e-b26b81fecd20")], E2_BT],
  dose: { tagline: "First-line hepatitis B antiviral — empty stomach; flare risk on stopping.",
    boxedTitle: "Severe acute exacerbations of hepatitis B, patients co-infected with HIV and HBV, and lactic acidosis and hepatomegaly", boxed: "Severe acute exacerbations of hepatitis B have been reported in patients who have discontinued anti-hepatitis B therapy, including entecavir. Hepatic function should be monitored closely with both clinical and laboratory follow-up for at least several months in patients who discontinue anti-hepatitis B therapy. If appropriate, initiation of anti-hepatitis B therapy may be warranted. Limited clinical experience suggests there is a potential for the development of resistance to HIV (human immunodeficiency virus) nucleoside reverse transcriptase inhibitors if BARACLUDE is used to treat chronic hepatitis B virus (HBV) infection in patients with HIV infection that is not being treated. Therapy with BARACLUDE is not recommended for HIV/HBV co-infected patients who are not also receiving highly active antiretroviral therapy (HAART). Lactic acidosis and severe hepatomegaly with steatosis, including fatal cases, have been reported with the use of nucleoside analogue inhibitors alone or in combination with antiretrovirals [FDA].",
    adult: [{ ind: "Chronic hepatitis B", text: "0.5 mg once daily (1 mg if lamivudine-refractory or decompensated); adjust if CrCl under 50.", calc: ["naive"] }],
    child: [{ ind: "Chronic hepatitis B, 2 years+", text: "0.15–0.5 mg once daily by weight (oral solution).", calc: ["paed"] }] }
});

/* ---------- ENTRECTINIB (FDA ROZLYTREK NDA212725) ---------- */
FDB_M("entrectinib", {
  inn: "Entrectinib", atc: "L01EX14", cls: "ROS1/TRK kinase inhibitor", risk: E2_ONC,
  linked: [],
  forms: ["Capsules 100, 200 mg; oral pellets 50 mg [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Inhibits TRKA/B/C, ROS1 and ALK kinases [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["ROS1-positive metastatic NSCLC [FDA].", "NTRK gene fusion–positive solid tumours [FDA]."], paed: ["NTRK fusion solid tumours in children older than 1 month [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["ROS1 NSCLC / NTRK tumours (adults)", "600 mg once daily [FDA]."], ["Before starting", "Check LVEF, uric acid, QRS/QTc and electrolytes [FDA]."], ["Children (NTRK)", "BSA-based dosing per label [FDA]."]],
  paed: { tiers: ["NTRK fusion tumours: BSA-based once-daily dose per label table [FDA]."], transition: "Adult 600 mg.", calcNote: "BSA table — shown as text." },
  adj: { renal: "No adjustment for CrCl 30 to under 90; under 30 not studied [FDA].", hepatic: "Moderate/severe: see label [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Heart failure, CNS effects, fractures, hyperuricaemia, QT prolongation, vision disorders [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, constipation, dysgeusia, oedema, dizziness, diarrhoea, weight gain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Congestive heart failure [FDA] [UNVERIFIED-KNOWLEDGE]", "Cognitive and mood effects [FDA] [UNVERIFIED-KNOWLEDGE]", "Skeletal fractures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["LVEF, uric acid, ECG and electrolytes, liver tests [FDA]."],
  local: E2_LOC,
  calc: [
    { drug: "entrectinib", indication_id: "adult", label: "ROS1 NSCLC / NTRK tumours (adult) — 600 mg once daily", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 200, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Check LVEF, uric acid, ECG first"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Rozlytrek (entrectinib) — FDA label (DailyMed)", E2_DM("c7c71b0c-2549-4495-86b6-c2807fa54908")], E2_BT],
  dose: { tagline: "Targeted therapy for ROS1 lung cancer and NTRK-fusion tumours.",
    adult: [{ ind: "ROS1 NSCLC / NTRK tumours", text: "600 mg once daily.", calc: ["adult"] }],
    child: [{ ind: "NTRK tumours", text: "BSA-based dose per label." }] }
});

/* ---------- ENZALUTAMIDE (FDA XTANDI NDA203415) ---------- */
FDB_M("enzalutamide", {
  inn: "Enzalutamide", atc: "L02BB04", cls: "Androgen receptor inhibitor", risk: E2_ONC,
  linked: [],
  forms: ["Capsules 40 mg; tablets 40, 80 mg [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Blocks androgen binding, nuclear translocation and DNA binding of the androgen receptor [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP3A4 inducer and CYP2C8 substrate — many interactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Castration-resistant prostate cancer [FDA].", "Metastatic castration-sensitive prostate cancer [FDA].", "Non-metastatic castration-sensitive prostate cancer with high-risk biochemical recurrence [FDA]."], paed: ["Not applicable [NEP]."] },
  adult: [["Prostate cancer", "160 mg once daily with or without food; swallow whole [FDA]."], ["Androgen deprivation", "Continue GnRH analogue (or after orchiectomy) for CRPC and mCSPC [FDA]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Adult men only." },
  adj: { renal: "No adjustment if CrCl 30 or more; severe not studied [FDA].", hepatic: "No adjustment [FDA].", pregnancy: "Not for women; can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Strong CYP2C8 inhibitors: reduce to 80 mg; avoid strong CYP3A4 inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Seizures possible [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E2_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, hot flushes, hypertension, falls, arthralgia, decreased appetite [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Posterior reversible encephalopathy syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Ischaemic heart disease, falls and fractures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, falls risk, cardiovascular risk factors [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "enzalutamide", indication_id: "pc", label: "Prostate cancer — 160 mg once daily", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 160, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 160, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 40, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["With GnRH analogue (CRPC, mCSPC)", "Strong CYP2C8 inhibitors: 80 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Xtandi (enzalutamide) — FDA label (DailyMed)", E2_DM("b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf")], E2_BT],
  dose: { tagline: "Oral androgen-receptor blocker for prostate cancer — seizure and fall risk.",
    adult: [{ ind: "Prostate cancer", text: "160 mg once daily.", calc: ["pc"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- EPCORITAMAB (FDA EPKINLY BLA761324) ---------- */
FDB_M("epcoritamab", {
  inn: "Epcoritamab", atc: "L01FX27", cls: "CD20 × CD3 bispecific T-cell engager", risk: E2_ONC,
  linked: [],
  forms: ["Injection 4 mg/0.8 mL and 48 mg/0.8 mL vials (SC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Binds CD20 on B cells and CD3 on T cells, triggering T-cell killing [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [E2_NEP],
  ind: { adult: ["Relapsed or refractory DLBCL and high-grade B-cell lymphoma after 2 or more lines [FDA].", "Follicular lymphoma (monotherapy after 2 lines; or with lenalidomide and rituximab) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["DLBCL (28-day cycles, SC)", "Cycle 1: day 1 0.16 mg, day 8 0.8 mg, day 15 48 mg, day 22 48 mg; cycles 2–3: 48 mg weekly; cycles 4–9: 48 mg every 2 weeks; cycle 10 onward: 48 mg every 4 weeks [FDA]."], ["FL monotherapy", "Cycle 1: 0.16 mg, 0.8 mg, 3 mg (third step-up), then 48 mg on day 22; then as above [FDA]."], ["Hospitalisation", "DLBCL: 24 hours after the first full 48 mg dose [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Fixed step-up schedule." },
  adj: { renal: E2_NEP, hepatic: E2_NEP, pregnancy: E2_NEP, other: "Premedicate with corticosteroid, antihistamine and paracetamol in cycle 1 [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["CRS, fatigue, injection-site reactions, musculoskeletal pain, abdominal pain, pyrexia, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cytokine release syndrome [FDA]", "ICANS [FDA]", "Serious infections, cytopenias [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["CRS and neurologic toxicity; blood counts; infections [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC, calc: [],
  sources: [["FDA", "Epkinly (epcoritamab-bysp) — FDA label (DailyMed)", E2_DM("d7836711-b677-412d-bf2d-0f7c8444103a")], E2_BT],
  dose: { tagline: "SC bispecific for relapsed DLBCL and FL — CRS and ICANS risk.",
    boxedTitle: "Cytokine release syndrome and immune effector cell-associated neurotoxicity syndrome", boxed: "Cytokine release syndrome (CRS), including serious or fatal reactions, can occur in patients receiving EPKINLY. Initiate treatment with the EPKINLY step-up dosage schedule to reduce the incidence and severity of CRS. Withhold EPKINLY until CRS resolves or permanently discontinue based on severity. Immune Effector Cell-Associated Neurotoxicity Syndrome (ICANS), including life-threatening and fatal reactions, can occur with EPKINLY. Monitor patients for neurological signs or symptoms of ICANS during treatment. Withhold EPKINLY until ICANS resolves or permanently discontinue based on severity [FDA].",
    adult: [{ ind: "DLBCL", text: "0.16 mg, 0.8 mg step-ups, then 48 mg weekly → 2-weekly → 4-weekly." }, { ind: "Follicular lymphoma", text: "0.16, 0.8, 3 mg step-ups, then 48 mg." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EPINASTINE (FDA ophthalmic solution 0.05% ANDA090951) ---------- */
FDB_M("epinastine", {
  inn: "Epinastine", atc: "S01GX10 R06AX24", cls: "Ophthalmic H1 antihistamine / mast-cell stabiliser",
  linked: [],
  forms: ["Eye drops 0.05% (0.5 mg/mL) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "H1 antagonist with mast-cell stabilising activity [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal systemic exposure [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prevention of itching in allergic conjunctivitis [FDA]."], paed: ["From 2 years [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Allergic conjunctivitis", "1 drop in each eye twice daily throughout the exposure period (e.g. pollen season), even when symptom-free [FDA]."]],
  paed: { tiers: ["2 years and over: as adults [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult use.", calcNote: "Eye drops — no calculator." },
  adj: { renal: "Not applicable (topical eye) [NEP].", hepatic: "Not applicable (topical eye) [NEP].", pregnancy: E2_NEP, other: "Remove soft contact lenses before use; reinsert after 10 minutes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Burning, folliculosis, hyperaemia, pruritus; cold or URI symptoms [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [E2_NEP] },
  monitor: ["Symptom response [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC, calc: [],
  sources: [["FDA", "Epinastine HCl ophthalmic solution 0.05% — FDA label (DailyMed)", E2_DM("0d4ee45c-e58f-4b7c-b389-898f5c27f54d")], E2_BT],
  dose: { tagline: "Antihistamine eye drop for allergic conjunctivitis — twice daily.",
    adult: [{ ind: "Allergic conjunctivitis", text: "1 drop each eye twice daily." }],
    child: [{ ind: "2 years and over", text: "As adults." }] }
});

/* ---------- EPIRUBICIN (FDA ELLENCE NDA050778) ---------- */
FDB_M("epirubicin", {
  inn: "Epirubicin", atc: "L01DB03", cls: "Anthracycline (topoisomerase II inhibitor)", risk: E2_ONC,
  linked: [],
  forms: ["Injection 2 mg/mL (50 mg/25 mL, 200 mg/100 mL) [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Intercalates DNA and inhibits topoisomerase II [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic elimination — reduce dose in hepatic impairment [FDA]."],
  ind: { adult: ["Adjuvant therapy for axillary node-positive breast cancer after resection [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Adjuvant breast cancer", "Start 100–120 mg/m² IV per cycle, every 3–4 weeks, either all on day 1 or split equally on days 1 and 8 [FDA]."], ["120 mg/m² regimen", "Give prophylactic antibiotics [FDA]."], ["Adjustments", "Reduce for toxicity after cycle 1, hepatic impairment, and consider lower doses in severe renal impairment [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Consider lower doses in severe renal impairment [FDA].", hepatic: "Reduce dose with raised AST or bilirubin (label table); contraindicated in Child-Pugh C or bilirubin over 5 mg/dL [FDA].", pregnancy: "Can cause fetal harm [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Track cumulative anthracycline dose [FDA]." },
  tox: { human: "Myelosuppression, mucositis, cardiotoxicity [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E2_LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe myocardial insufficiency [FDA].", "Recent MI or severe arrhythmias, or previous maximum cumulative anthracycline dose [FDA].", "Severe persistent drug-induced myelosuppression [FDA].", "Severe hepatic impairment (Child-Pugh C or bilirubin over 5 mg/dL) [FDA].", "Severe hypersensitivity to epirubicin, other anthracyclines or anthracenediones [FDA]."],
  ae: { common: ["Alopecia, nausea, vomiting, mucositis, leukopenia, amenorrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cardiac toxicity [FDA]", "Secondary AML/MDS [FDA]", "Extravasation necrosis [FDA]", "Severe myelosuppression [FDA]"] },
  monitor: ["LVEF, blood counts, liver and renal function before each cycle [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "epirubicin", indication_id: "bc", label: "Adjuvant breast cancer — 100–120 mg/m² per cycle", route: "IV", population: E2_ADULT, basis: "mg_per_m2", dose: { value: 100, unit: "mg", per: "dose", value_max: 120 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "0.5 mL", renal: [], flags: ["Every 3–4 weeks; day 1 or split days 1 and 8", "120 mg/m²: prophylactic antibiotics", "Reduce for hepatic impairment"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ellence (epirubicin) — FDA label (DailyMed)", E2_DM("0a03c798-a652-4895-b29c-3b521a89ba42")], E2_BT],
  dose: { tagline: "Anthracycline for adjuvant breast cancer — cardiotoxic; reduce in liver disease.",
    boxedTitle: "Cardiac toxicity, secondary malignancies, extravasation and tissue necrosis, and severe myelosuppression", boxed: "• Cardiac Toxicity: Myocardial damage, including acute left ventricular failure, can occur with ELLENCE. The risk of cardiomyopathy is proportional to the cumulative exposure with incidence rates from 0.9% at a cumulative dose of 550 mg/m 2, 1.6% at 700 mg/m 2, and 3.3% at 900 mg/m 2. The risk of cardiomyopathy is further increased with concomitant cardiotoxic therapy. Assess left ventricular ejection fraction (LVEF) before and regularly during and after treatment with ELLENCE. • Secondary Malignancies: Secondary acute myelogenous leukemia (AML) and myelodysplastic syndrome (MDS) occur at a higher incidence in patients treated with anthracyclines, including ELLENCE. • Extravasation and Tissue Necrosis: Extravasation of ELLENCE can result in severe local tissue injury and necrosis requiring wide excision of the affected area and skin grafting. Immediately terminate the drug and apply ice to the affected area. • Severe myelosuppression resulting in serious infection, septic shock, requirement for transfusions, hospitalization, and death may occur [FDA].",
    adult: [{ ind: "Adjuvant breast cancer", text: "100–120 mg/m² per cycle every 3–4 weeks.", calc: ["bc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EPLERENONE (FDA INSPRA NDA021437) ---------- */
FDB_M("eplerenone", {
  inn: "Eplerenone", atc: "C03DA04", cls: "Selective aldosterone (mineralocorticoid receptor) antagonist",
  linked: [],
  forms: ["Tablets 25, 50 mg [FDA].", "Bhutan: not on the NEML (spironolactone is the NEML MRA) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks aldosterone at mineralocorticoid receptors [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA]."],
  ind: { adult: ["Heart failure with reduced EF after myocardial infarction (improve survival) [FDA].", "Hypertension [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["HFrEF after MI", "25 mg once daily; titrate to 50 mg once daily within 4 weeks as tolerated; adjust by potassium [FDA]."], ["Hypertension", "50 mg once daily; may increase to 50 mg twice daily; higher doses not recommended [FDA]."], ["Potassium", "Measure before starting and periodically [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Adult only." },
  adj: { renal: "Contraindicated if CrCl 30 or less (all) and, for hypertension, CrCl under 50 [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: E2_NEP, pregnancy: E2_NEP, other: "Moderate CYP3A inhibitors: 25 mg once daily maximum [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypotension, hyperkalaemia expected [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E2_LD, manage: "Supportive; not removed by haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Serum potassium over 5.5 mEq/L at initiation [FDA].", "CrCl 30 mL/min or less [FDA].", "Strong CYP3A inhibitors (ketoconazole, itraconazole, nefazodone, troleandomycin, clarithromycin, ritonavir, nelfinavir) [FDA].", "Hypertension patients: type 2 diabetes with microalbuminuria; serum creatinine over 2.0 mg/dL (men) or 1.8 mg/dL (women); CrCl under 50; potassium supplements or potassium-sparing diuretics [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hyperkalaemia, dizziness, raised creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hyperkalaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Potassium and creatinine at baseline, within the first week, at 1 month, then periodically [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC,
  calc: [
    { drug: "eplerenone", indication_id: "hf", label: "HFrEF after MI — start 25 mg once daily", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 50, max_daily: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 30, action: "avoid", note: "CrCl 30 or less: contraindicated [FDA]" }], flags: ["Titrate to 50 mg within 4 weeks", "Not if potassium over 5.5 at start"], sources: ["FDA"] },
    { drug: "eplerenone", indication_id: "htn", label: "Hypertension — 50 mg once daily", route: "PO", population: E2_ADULT, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "avoid", note: "Hypertension: contraindicated if CrCl under 50 [FDA]" }], flags: ["May increase to 50 mg twice daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Inspra (eplerenone) — FDA label (DailyMed)", E2_DM("1a52bedc-8e2c-4116-a296-a87770676b4a")], E2_BT],
  dose: { tagline: "Selective MRA for post-MI heart failure and hypertension — watch potassium.",
    adult: [{ ind: "HFrEF after MI", text: "25 mg once daily, then 50 mg.", calc: ["hf"] }, { ind: "Hypertension", text: "50 mg once daily, up to twice daily.", calc: ["htn"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- EPLONTERSEN (FDA WAINUA NDA217388) ---------- */
FDB_M("eplontersen", {
  inn: "Eplontersen", atc: "N07XX21", cls: "Transthyretin-directed antisense oligonucleotide",
  linked: [],
  forms: ["Auto-injector 45 mg/0.8 mL [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Reduces hepatic transthyretin production [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [E2_NEP],
  ind: { adult: ["Polyneuropathy of hereditary transthyretin amyloidosis in adults [FDA]."], paed: ["Not applicable [NEP]."] },
  adult: [["hATTR polyneuropathy", "45 mg SC once monthly (abdomen or thigh; back of upper arm if given by another person) [FDA]."], ["Missed dose", "Give as soon as possible, then monthly from that date [FDA]."]],
  paed: { tiers: ["Not applicable [NEP]."], transition: "—", calcNote: "Fixed monthly dose." },
  adj: { renal: "Mild–moderate: no adjustment; severe/ESRD not studied [FDA].", hepatic: "Mild: no adjustment [FDA].", pregnancy: E2_NEP, other: "Lowers vitamin A — give vitamin A supplementation at recommended daily allowance [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: E2_NEP, animal: E2_LD, manage: E2_NEP },
  contra: ["None [FDA]."],
  ae: { common: ["Vitamin A decreased, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Night blindness from low vitamin A [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Eye symptoms of vitamin A deficiency [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC, calc: [],
  sources: [["FDA", "Wainua (eplontersen) — FDA label (DailyMed)", E2_DM("d7dcb847-71dd-4fff-82d0-d43a465fc096")], E2_BT],
  dose: { tagline: "Monthly injection for hATTR polyneuropathy — add vitamin A.",
    adult: [{ ind: "hATTR polyneuropathy", text: "45 mg SC once monthly." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- EPOPROSTENOL (FDA VELETRI NDA022260) ---------- */
FDB_M("epoprostenol", {
  inn: "Epoprostenol", atc: "B01AC09", cls: "Prostacyclin (IV vasodilator)", risk: "High-alert — epoprostenol (IV) is on the ISMP list of high-alert medications [ISMP] [UNVERIFIED-KNOWLEDGE]",
  linked: [],
  forms: ["Powder for injection 0.5 mg (500,000 ng) and 1.5 mg (1,500,000 ng) vials [FDA].", "Bhutan: not on the NEML [BT-NEML]."],
  moa: "Direct pulmonary and systemic arterial vasodilator; inhibits platelet aggregation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Half-life about 6 minutes — interruption causes rebound [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Pulmonary arterial hypertension (WHO Group 1) to improve exercise capacity [FDA]."], paed: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Start", "2 ng/kg/min continuous IV via central line; increase by 2 ng/kg/min every 15 minutes or longer until dose-limiting effects or tolerance limit [FDA]."], ["Chronic adjustment", "Increase by 1–2 ng/kg/min if symptoms persist or recur; decrease in 2 ng/kg/min steps for adverse effects [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Preparation", "Reconstitute only with Sterile Water or 0.9% sodium chloride; do not mix with other drugs or solutions [FDA]."]],
  paed: { tiers: ["Not established [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Infusion in ng/kg/min — specialist." },
  adj: { renal: E2_NEP, hepatic: E2_NEP, pregnancy: E2_NEP, other: "Avoid abrupt withdrawal or interruption (rebound PH, death); additive hypotension and bleeding risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Flushing, headache, hypotension, tachycardia, nausea, vomiting, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE].", animal: E2_LD, manage: "Reduce or stop the infusion; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Heart failure from severe left ventricular systolic dysfunction (long-term use) [FDA].", "Pulmonary oedema during dose initiation [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Flushing, headache, jaw pain, nausea, diarrhoea, musculoskeletal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Rebound pulmonary hypertension on interruption [FDA] [UNVERIFIED-KNOWLEDGE]", "Central-line sepsis [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypotension, bleeding [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, heart rate, symptoms during titration; line care [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: E2_LOC, calc: [],
  sources: [["FDA", "Veletri (epoprostenol) — FDA label (DailyMed)", E2_DM("df502787-46ec-4dd1-a2c0-be90f6d95a5d")], E2_BT],
  dose: { tagline: "Continuous IV prostacyclin for PAH — never interrupt the infusion.",
    adult: [{ ind: "Pulmonary arterial hypertension", text: "Start 2 ng/kg/min IV; increase by 2 ng/kg/min every 15 min or more to tolerance." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* Brand names — BATCH E2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"elranatamab":{"IN":[["Elduxio","Pfizer Product India Private Limited","Elduxio 76Mg Vial Of 1.9Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/elduxio-76mg-vial-of-1-9ml-solution-for-injection-4803219"]},"eltrombopag":{"IN":[["Platify","Intas Pharmaceuticals Ltd","Platify 50 Mg Tab 10S"],["Elromo","Zydus Healthcare Limited","Elromo 75 Strip Of 7 Tablets"],["Msn Rebopag","Msn Laboratories","Msn Rebopag 50Mg Strip Of 7 Tablets"]],"BD":[["R-Pag","Renata PLC","25 mg"],["Enerplat","Eskayef Pharmaceuticals Ltd","50 mg"],["Eltromin","Radiant Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/platify-50-mg-tab-10s-4134620","https://pharmeasy.in/online-medicine-order/elromo-75-tablet-7-no-s-4122924","https://pharmeasy.in/online-medicine-order/msn-rebopag-50mg-strip-of-7-tablets-3958583","https://medex.com.bd/brands/33201/r-pag-25-mg-tablet","https://medex.com.bd/brands/38799/enerplat-50-mg-tablet","https://medex.com.bd/brands/38190/eltromin-50-mg-tablet"]},"eluxadoline":{"IN":[["Luxedra","Sun Pharma","Luxedra 75Mg Strip Of 10 Tablets"]],"BD":[["Eluxan","Ziska Pharmaceuticals Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/luxedra-75mg-strip-of-10-tablets-4890772","https://medex.com.bd/brands/26740/eluxan-100-mg-tablet"]},"emicizumab":{"IN":[["Hemlibra","Roche Limited","Hemlibra 150Mg Vial Of 1Ml Injection"]],"BD":[["Hemlibra","Roche Bangladesh Ltd","30 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/hemlibra-150mg-vial-of-1ml-injection-3995131","https://medex.com.bd/brands/35518/hemlibra-30-mg-sc-injection"]},"empagliflozin":{"IN":[["Gibtulio","Lupin","Gibtulio 25Mg Strip Of 10 Tablets"],["Jardiance","Boehringer Ingelheim","Jardiance 25Mg Strip Of 10 Tablets"],["Empanorm","Alkem Laboratories Ltd","Empanorm 10Mg Strip Of 10 Tablets"]],"BD":[["Emaglin","DBL Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/gibtulio-25mg-strip-of-10-tablets-16636","https://pharmeasy.in/online-medicine-order/jardiance-25mg-strip-of-10-tablets-5187","https://pharmeasy.in/online-medicine-order/empanorm-10mg-strip-of-10-tablets-4382059","https://medex.com.bd/brands/36262/emaglin-10-mg-tablet"]},"enasidenib":{"IN":[],"BD":[["Enasinib","Everest Pharmaceuticals Ltd","50 mg"]],"src":["https://medex.com.bd/brands/39752/enasinib-50-mg-tablet"]},"entacapone":{"IN":[["Entacom","Intas Pharmaceuticals Ltd","Entacom 200Mg Strip Of 10 Tablets"],["Adcapone","Sun Pharma","Adcapone 200Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/entacom-200mg-tablet-45581","https://pharmeasy.in/online-medicine-order/adcapone-200mg-tablet-33058"]},"entecavir":{"IN":[["Entavir","Cipla Limited","Entavir 0.5Mg Strip Of 10 Tablets"],["Entehep","Zydus Lifesciences Limited","Entehep 0.5Mg Bottle Of 30 Tablets"],["Anticanol","Knoll Healthcare Pvt Ltd","Anticanol 0.5Mg Strip Of 10 Tablets"]],"BD":[["Enteca","Renata PLC","0.5 mg"],["Vironex","Everest Pharmaceuticals Ltd","1 mg"],["Replivir","Beximco Pharmaceuticals PLC","1 mg"]],"src":["https://pharmeasy.in/online-medicine-order/entavir-0-5mg-strip-of-10-tablets-6696","https://pharmeasy.in/online-medicine-order/entehep-0-5mg-tab-30-s-208442","https://pharmeasy.in/online-medicine-order/anticanol-0-5mg-strip-of-10-tablets-2933629","https://medex.com.bd/brands/9752/enteca-05-mg-tablet","https://medex.com.bd/brands/38788/vironex-1-mg-tablet","https://medex.com.bd/brands/31876/replivir-1-mg-tablet"]},"enzalutamide":{"IN":[["Enzyl","Ranbaxy Laboratories (sun Pharma)","Enzyl 160Mg Strip Of 7 Tablets"],["Azel","Dr Reddy's Laboratories Ltd","Azel 160 Strip Of 7 Tablets"],["Glenza","Glenmark Pharmaceuticals","Glenza 80Mg Strip Of 14 Capsules"]],"BD":[["Zaluta","Beacon Pharmaceuticals PLC","40 mg"],["Prozenza","Ziska Pharmaceuticals Ltd","40 mg"],["Enzamide","Everest Pharmaceuticals Ltd","40 mg"]],"src":["https://pharmeasy.in/online-medicine-order/enzyl-160-tablet-7-no-s-4122929","https://pharmeasy.in/online-medicine-order/azel-160-tablet-7-nos-3918862","https://pharmeasy.in/online-medicine-order/glenza-80-mg-capsule-14-no-s-4118129","https://medex.com.bd/brands/34852/zaluta-40-mg-tablet","https://medex.com.bd/brands/39197/prozenza-40-mg-tablet","https://medex.com.bd/brands/39751/enzamide-40-mg-tablet"]},"epinastine":{"IN":[["Estina","Entod Pharmaceuticals Pvt Ltd","Estina Bottle Of 5Ml Eye Drops"]],"BD":[["Alpatin","Beximco Pharmaceuticals PLC","0.05%"],["Epinast","Aristopharma Ltd","0.05%"],["Relestat","Eskayef Pharmaceuticals Ltd","0.05%"]],"src":["https://pharmeasy.in/online-medicine-order/estina-eye-drops-5ml-9666","https://medex.com.bd/brands/15941/alpatin-005-eye-drop","https://medex.com.bd/brands/15942/epinast-005-eye-drop","https://medex.com.bd/brands/26823/relestat-005-eye-drop"]},"epirubicin":{"IN":[["Zyrubin","Zydus Lifesciences Limited","Zyrubin 50 Mg Inj"],["Anthracin","Dabur India Limited","Anthracin 50 Mg Injection 1 No's"]],"BD":[["Erubin","Beacon Pharmaceuticals PLC","2 mg/ml"],["Episindan","BOTS Pvt","2 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/zyrubin-50-mg-inj-4135208","https://pharmeasy.in/online-medicine-order/anthracin-50-mg-injection-1-no-s-3730755","https://medex.com.bd/brands/17251/erubin-2-mg-iv-infusion","https://medex.com.bd/brands/17280/episindan-2-mg-iv-infusion"]},"eplerenone":{"IN":[["Eplerenol","Knoll Healthcare Pvt Ltd","Eplerenol 25Mg Strip Of 10 Tablets"],["Planep","Lupin","Planep 25Mg Strip Of 15 Tablets"],["Eplerite","Cipla Limited","Eplerite 25Mg Strip Of 10 Tablets"]],"BD":[["Aldonist","UniMed UniHealth Pharmaceuticals Ltd","25 mg"],["Epleron","Incepta Pharmaceuticals Ltd","25 mg"],["Erutic","Drug International Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/eplerenol-25mg-strip-of-10-tablets-4504188","https://pharmeasy.in/online-medicine-order/planep-25mg-strip-of-15-tablets-192502","https://pharmeasy.in/online-medicine-order/eplerite-25mg-tablet-10-s-228487","https://medex.com.bd/brands/2854/aldonist-25-mg-tablet","https://medex.com.bd/brands/2856/epleron-25-mg-tablet","https://medex.com.bd/brands/30910/erutic-25-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
