/* Clinical Disease Guide — Drug monograph database, block O, batch O-1 (26 Nov 2026).
   Obecabtagene autoleucel … osimertinib. Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed text "@LABEL" is filled by _work/tools/fdb-boxed-fill.js.
   Labels added: oral ofloxacin tablets beside the otic pack; Zolgensma (IV) beside the Itvisma (intrathecal) pack. */
(function () { // O-1 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const O1_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ALL = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ONC = "High-alert medication (antineoplastic agent) [ISMP]";
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });

FDB_M("obecabtagene-autoleucel", {
  inn: "Obecabtagene autoleucel", atc: "L01XL12", cls: "CD19-directed autologous CAR T-cell therapy",
  risk: ONC,
  linked: [],
  forms: ["Patient-specific cell suspension for IV infusion, in infusion bags [FDA]."],
  moa: "Patient's T cells engineered to express a CD19 chimeric antigen receptor kill CD19+ leukaemic cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsed or refractory B-cell precursor acute lymphoblastic leukaemia in adults [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Total dose", "410 × 10⁶ CAR-positive viable T cells, split into infusions on day 1 and day 10 (±2 days); split determined by bone marrow blast percentage (Dose Schedule Planner) [FDA]."], ["Before infusion", "Fludarabine/cyclophosphamide lymphodepletion; marrow assessment within 7 days before; paracetamol premedication; tocilizumab available [FDA]."], ["Administration", "Verify identity; IV only; no leukodepleting filter [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Cell dose — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Do not drive for at least 2 weeks after infusion [FDA] [UNVERIFIED-KNOWLEDGE]. Lifelong monitoring for secondary malignancies [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["CRS, infections, musculoskeletal pain, fever, nausea, fatigue, encephalopathy, cytopenias [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Cytokine release syndrome [FDA]", "Neurological toxicity including ICANS [FDA]", "Secondary T-cell malignancies [FDA]", "Prolonged cytopenias, infections, hypogammaglobulinaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Daily for CRS and neurotoxicity in the first weeks; stay near the treatment centre for 4 weeks; blood counts; immunoglobulins [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Aucatzyl (obecabtagene autoleucel) — FDA label (DailyMed)", O1_DM("4fef6986-b988-45e4-8c20-b14f0ef1f538")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "CD19 CAR-T for relapsed adult B-ALL — 410 million cells split over day 1 and day 10.",
    boxedTitle: "Cytokine release syndrome, neurologic toxicities and secondary haematological malignancies",
    boxed: "Cytokine Release Syndrome (CRS) occurred in patients receiving AUCATZYL. Do not administer AUCATZYL to patients with active infection or inflammatory disorders. Prior to administering AUCATZYL, ensure that healthcare providers have immediate access to medications and resuscitative equipment to manage CRS. Immune Effector Cell-Associated Neurotoxicity Syndrome (ICANS), including fatal or life-threatening reactions, occurred in patients receiving AUCATZYL, including concurrently with CRS or after CRS resolution. Monitor for neurologic signs and symptoms after treatment with AUCATZYL. Prior to administering AUCATZYL, ensure that healthcare providers have immediate access to medications and resuscitative equipment to manage neurologic toxicities. Provide supportive care and/or corticosteroids, as needed. T cell malignancies have occurred following treatment of hematologic malignancies with BCMA- and CD19-directed genetically modified autologous T cell immunotherapies [FDA].",
    adult: [{ ind: "Relapsed/refractory B-ALL", text: "410 × 10⁶ CAR+ T cells split over days 1 and 10 after lymphodepletion." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("obiltoxaximab", {
  inn: "Obiltoxaximab", atc: "J06BC04", cls: "Anti-anthrax protective antigen monoclonal antibody",
  linked: [],
  forms: ["Injection 600 mg/6 mL (100 mg/mL) vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Neutralises B. anthracis protective antigen, blocking toxin entry into cells [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Inhalational anthrax, with antibiotics; prophylaxis when alternatives are not available or appropriate [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Adults", "16 mg/kg IV once over 90 minutes; adults under 40 kg use the paediatric table [FDA]."], ["Premedication", "Diphenhydramine first [FDA]."], ["Setting", "Monitored setting able to manage anaphylaxis [FDA]."]],
  paed: { tiers: ["Over 40 kg: 16 mg/kg [FDA].", "Over 15 kg to 40 kg: 24 mg/kg [FDA].", "15 kg or less: 32 mg/kg [FDA]."], transition: "16 mg/kg over 40 kg.", calcNote: "mg/kg by weight band, single dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Efficacy based on animal studies only [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, pruritus, upper respiratory infection, cough, infusion-site swelling, urticaria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity and anaphylaxis [FDA]"] },
  monitor: ["Observe during and after the infusion for hypersensitivity [FDA]."],
  local: notBT,
  calc: [
    { drug: "obiltoxaximab", indication_id: "w15", label: "Anthrax, 15 kg or less — 32 mg/kg IV once", route: "IV", population: pop(null, null, null, 15.0001), basis: "mg_per_kg", dose: { value: 32, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Premedicate with diphenhydramine", "Over 90 minutes"], sources: ["FDA"] },
    { drug: "obiltoxaximab", indication_id: "w40", label: "Anthrax, over 15 to 40 kg — 24 mg/kg IV once", route: "IV", population: pop(null, null, 15.0001, 40.0001), basis: "mg_per_kg", dose: { value: 24, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Premedicate with diphenhydramine", "Over 90 minutes"], sources: ["FDA"] },
    { drug: "obiltoxaximab", indication_id: "w41", label: "Anthrax, over 40 kg — 16 mg/kg IV once", route: "IV", population: pop(null, null, 40.0001, null), basis: "mg_per_kg", dose: { value: 16, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Premedicate with diphenhydramine", "Over 90 minutes"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Anthim (obiltoxaximab) — FDA label (DailyMed)", O1_DM("39ad8799-00a4-4fc8-9852-c0536350c474")], NEML_SRC],
  dose: { tagline: "Anthrax antitoxin antibody — single IV dose 16–32 mg/kg by weight, with antibiotics.",
    boxedTitle: "Hypersensitivity and anaphylaxis",
    boxed: "Hypersensitivity and anaphylaxis have been reported during the intravenous infusion of ANTHIM. Due to the risk of hypersensitivity and anaphylaxis, ANTHIM should be administered in monitored settings by personnel trained and equipped to manage anaphylaxis. Monitor individuals who receive ANTHIM closely for signs and symptoms of hypersensitivity reactions throughout the infusion and for a period of time after administration. Stop ANTHIM infusion immediately and treat appropriately if hypersensitivity or anaphylaxis occurs [FDA].",
    adult: [{ ind: "Inhalational anthrax", text: "16 mg/kg IV once (under 40 kg: by band).", calc: ["w41", "w40"] }],
    child: [{ ind: "By weight", text: "≤15 kg 32 mg/kg; >15–40 kg 24 mg/kg; >40 kg 16 mg/kg — once.", calc: ["w15", "w40", "w41"] }] }
});

FDB_M("ocrelizumab", {
  inn: "Ocrelizumab", atc: "L04AG08", cls: "Anti-CD20 monoclonal antibody",
  linked: [],
  forms: ["Injection 300 mg/10 mL for IV infusion; SC product with hyaluronidase is separate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Depletes CD20+ B cells [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsing MS (CIS, RRMS, active SPMS) [FDA].", "Primary progressive MS [FDA]."], paed: ["Relapsing-remitting MS, 10 years and over and 25 kg and over [FDA]."] },
  adult: [["35 kg and over (adults or 10 years+)", "300 mg IV, then 300 mg 2 weeks later; then 600 mg every 6 months [FDA]."], ["Premedication", "Methylprednisolone and an antihistamine before each infusion; observe for 1 hour after [FDA]."], ["Before starting", "Hepatitis B screen, immunoglobulins, liver tests [FDA]."]],
  paed: { tiers: ["10 years+ and 25 to under 35 kg: 150 mg, then 150 mg 2 weeks later; then 300 mg every 6 months [FDA].", "10 years+ and 35 kg+: adult doses [FDA]."], transition: "Adult dose from 35 kg.", calcNote: "Maintenance dose by weight band." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "B-cell depletion in exposed infants; contraception during and 6 months after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Live vaccines at least 4 weeks before starting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active hepatitis B infection [FDA]", "History of life-threatening infusion reaction to ocrelizumab [FDA]"],
  ae: { common: ["Infusion reactions, upper respiratory infections, skin infections, herpes infections [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infusion reactions [FDA]", "Infections including HBV reactivation and PML [FDA] [UNVERIFIED-KNOWLEDGE]", "Reduced immunoglobulins [FDA] [UNVERIFIED-KNOWLEDGE]", "Malignancy (breast cancer) [FDA] [UNVERIFIED-KNOWLEDGE]", "Immune-mediated colitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Immunoglobulins; infections; infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "ocrelizumab", indication_id: "m35", label: "MS maintenance, 35 kg+ — 600 mg IV every 6 months", route: "IV", population: pop(120, null, 35, null), basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 30, unit: "mg/mL" }], rounding: "2 vials", renal: [], flags: ["Every 6 months, after two 300 mg start doses", "Premedicate"], sources: ["FDA"] },
    { drug: "ocrelizumab", indication_id: "m25", label: "MS maintenance, 10 years+ and 25 to under 35 kg — 300 mg every 6 months", route: "IV", population: pop(120, 216, 25, 35), basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 30, unit: "mg/mL" }], rounding: "1 vial", renal: [], flags: ["Every 6 months, after two 150 mg start doses"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ocrevus (ocrelizumab) — FDA label (DailyMed)", O1_DM("9da42362-3bb5-4b83-b4bb-b59fd4e55f0d")], NEML_SRC],
  dose: { tagline: "Anti-CD20 antibody for relapsing and primary progressive MS — 600 mg IV every 6 months.",
    cautionTitle: "Use with care",
    caution: "Screen for hepatitis B first — contraindicated in active HBV. Premedicate every infusion and observe for 1 hour; infusion reactions are common [FDA].",
    adult: [{ ind: "Relapsing / primary progressive MS", text: "300 mg × 2 (2 weeks apart), then 600 mg every 6 months.", calc: ["m35"] }],
    child: [{ ind: "RRMS, 10 years+", text: "25 to under 35 kg: 150 mg × 2 then 300 mg every 6 months; 35 kg and over: adult doses.", calc: ["m25", "m35"] }] }
});

FDB_M("odevixibat", {
  inn: "Odevixibat", atc: "A05AX05", cls: "Ileal bile acid transporter (IBAT) inhibitor",
  linked: [],
  forms: ["Oral pellets 200, 600 microgram; capsules 400, 1,200 microgram [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks ileal bile acid reabsorption, lowering serum bile acids and itch [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Same indications as children [FDA]."], paed: ["Pruritus in progressive familial intrahepatic cholestasis (PFIC), 3 months and over [FDA].", "Cholestatic pruritus in Alagille syndrome, 12 months and over [FDA]."] },
  adult: [["PFIC", "40 microgram/kg once daily in the morning with a meal; if no better after 3 months, increase by 40 microgram/kg steps to 120 microgram/kg, maximum 6 mg/day [FDA]."], ["Alagille syndrome", "120 microgram/kg once daily [FDA]."], ["Formulation", "Pellets under 19.5 kg; capsules above [FDA]."]],
  paed: { tiers: ["PFIC, 3 months+: 40 microgram/kg once daily, up to 120 microgram/kg (max 6 mg/day) [FDA].", "Alagille, 12 months+: 120 microgram/kg once daily [FDA]."], transition: "Same.", calcNote: "microgram/kg once daily, max 6 mg/day." },
  adj: { renal: NEP, hepatic: "Contraindicated after hepatic decompensation events [FDA].", pregnancy: NEP, other: "Check fat-soluble vitamins (A, D, E, INR) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Prior or active hepatic decompensation (variceal bleeding, ascites, encephalopathy) [FDA]."],
  ae: { common: ["Diarrhoea, vomiting, abdominal pain, raised liver tests, fat-soluble vitamin deficiency [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Liver test abnormalities and hepatic decompensation [FDA] [UNVERIFIED-KNOWLEDGE]", "Fat-soluble vitamin deficiency [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests; vitamins A, D, E and INR [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "odevixibat", indication_id: "pfic", label: "PFIC itch, 3 months+ — 40 microgram/kg once daily", route: "PO", population: pop(3, null, null, null), basis: "mg_per_kg", dose: { value: 0.04, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_daily: 6, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "nearest pellet/capsule strength", renal: [], flags: ["Morning with a meal", "May increase to 120 microgram/kg after 3 months"], sources: ["FDA"] },
    { drug: "odevixibat", indication_id: "algs", label: "Alagille itch, 12 months+ — 120 microgram/kg once daily", route: "PO", population: pop(12, null, null, null), basis: "mg_per_kg", dose: { value: 0.12, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_daily: 6, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "nearest pellet/capsule strength", renal: [], flags: ["Morning with a meal", "Max 6 mg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Bylvay (odevixibat) — FDA label (DailyMed)", O1_DM("0935cd31-3251-4a0a-ac23-25ca4be12be9")], NEML_SRC],
  dose: { tagline: "IBAT inhibitor for cholestatic itch in PFIC and Alagille — 40–120 microgram/kg once daily.",
    adult: [{ ind: "PFIC / Alagille", text: "As for children; max 6 mg/day.", calc: ["pfic", "algs"] }],
    child: [{ ind: "PFIC, 3 months+", text: "40 microgram/kg daily, up to 120 microgram/kg.", calc: ["pfic"] }, { ind: "Alagille, 12 months+", text: "120 microgram/kg daily.", calc: ["algs"] }] }
});

FDB_M("ofatumumab", {
  inn: "Ofatumumab", atc: "L04AG12", cls: "Anti-CD20 monoclonal antibody (SC)",
  linked: [],
  forms: ["Pen/prefilled syringe 20 mg/0.4 mL (Kesimpta) [FDA]."],
  moa: "Depletes CD20+ B cells [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Relapsing forms of MS (CIS, RRMS, active SPMS) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "20 mg SC at weeks 0, 1 and 2 [FDA]."], ["Maintenance", "20 mg SC monthly from week 4 [FDA]."], ["Before starting", "Hepatitis B screen, immunoglobulins, liver tests; vaccines first [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "B-cell depletion in exposed infants — contraception during and 6 months after [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Live vaccines at least 4 weeks before starting [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Active hepatitis B infection [FDA]", "Hypersensitivity or life-threatening injection reaction to ofatumumab [FDA]"],
  ae: { common: ["Upper respiratory infection, injection reactions (systemic and local), headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Infections including HBV reactivation and PML [FDA] [UNVERIFIED-KNOWLEDGE]", "Injection-related reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Reduced immunoglobulins [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Immunoglobulins; infections [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "ofatumumab", indication_id: "ms", label: "Relapsing MS — 20 mg SC (weeks 0, 1, 2, then monthly)", route: "SC", population: ADULT, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "pen", strength: 20, unit: "mg", whole: true }], rounding: "1 pen", renal: [], flags: ["Weeks 0, 1, 2; then monthly from week 4"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Kesimpta (ofatumumab) — FDA label (DailyMed)", O1_DM("6a8a3f53-2062-48ff-9dbe-b939df133ca3")], NEML_SRC],
  dose: { tagline: "Monthly SC anti-CD20 antibody for relapsing MS — 20 mg.",
    cautionTitle: "Use with care",
    caution: "Screen for hepatitis B first — contraindicated in active HBV. Check immunoglobulins before and during treatment [FDA].",
    adult: [{ ind: "Relapsing MS", text: "20 mg SC weeks 0, 1, 2, then monthly.", calc: ["ms"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("ofloxacin", {
  inn: "Ofloxacin", atc: "J01MA01", cls: "Fluoroquinolone antibacterial",
  linked: [],
  forms: ["Tablets 200, 300, 400 mg [FDA].", "Ear drops 0.3% (ATC S02AA16) and eye drops 0.3% (S01AE01) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits bacterial DNA gyrase and topoisomerase IV [UNVERIFIED-KNOWLEDGE].",
  pk: ["Mainly excreted unchanged by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Oral: community-acquired pneumonia, skin infections, gonorrhoea, chlamydia, PID, UTI and prostatitis due to susceptible organisms; reserve for bronchitis exacerbation and uncomplicated cystitis when no alternative [FDA].", "Ear drops: otitis externa; chronic suppurative otitis media with perforation [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Oral: not for under 18 [FDA] [UNVERIFIED-KNOWLEDGE].", "Ear drops: otitis externa from 6 months [FDA]."] },
  adult: [["Pneumonia / skin / bronchitis", "400 mg every 12 hours for 10 days [FDA]."], ["Chlamydia / NGU / mixed", "300 mg every 12 hours for 7 days [FDA]."], ["PID", "400 mg every 12 hours for 10–14 days [FDA]."], ["Cystitis / complicated UTI", "200 mg every 12 hours for 3–10 days [FDA]."], ["Prostatitis", "300 mg every 12 hours for 6 weeks [FDA]."], ["Ear drops (13 years+)", "10 drops into the affected ear once daily for 7 days [FDA]."], ["Separate from", "Antacids, iron, zinc, sucralfate — 2 hours either side [FDA]."]],
  paed: { tiers: ["Ear drops, 6 months to 13 years: 5 drops once daily for 7 days [FDA].", "Ear drops, 13 years+: 10 drops once daily [FDA].", "Oral: not recommended under 18 [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Oral adult dosing at 18 years.", calcNote: "Oral adult doses only." },
  adj: { renal: "After a normal first dose: CrCl 20–50, usual dose every 24 h; under 20, half the dose every 24 h [FDA].", hepatic: "Severe hepatic impairment: maximum 400 mg/day [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "QT prolongation; dysglycaemia; photosensitivity [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Seizures, QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; ECG; hydration [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to ofloxacin or other quinolones [FDA]."],
  ae: { common: ["Nausea, insomnia, headache, dizziness, diarrhoea, vomiting, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Tendinitis and tendon rupture [FDA]", "Peripheral neuropathy [FDA]", "CNS effects, seizures [FDA]", "Myasthenia gravis exacerbation [FDA]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Aortic aneurysm, dysglycaemia, C. difficile [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Tendon pain, neuropathy, glucose in diabetes [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "ofloxacin", indication_id: "po400", label: "Pneumonia / skin / PID — 400 mg every 12 hours", route: "PO", population: ADULT, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 400, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 20, crcl_max: 49.999, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 19.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["First dose is the normal dose even in kidney impairment", "Separate from antacids/iron by 2 h"], sources: ["FDA"] },
    { drug: "ofloxacin", indication_id: "po200", label: "Cystitis / complicated UTI — 200 mg every 12 hours", route: "PO", population: ADULT, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 200, unit: "mg", whole: true }], rounding: "1 tablet", renal: [{ crcl_min: 20, crcl_max: 49.999, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 19.999, action: "reduce_dose", factor: 0.5, interval_h: 24 }], flags: ["3–10 days by type"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ofloxacin tablets — FDA label (DailyMed)", O1_DM("93ed9f70-b44f-496b-bdfc-c1bd5f1c260b")], ["FDA", "Ofloxacin otic solution 0.3% — FDA label (DailyMed)", O1_DM("42366170-e536-46a1-9735-d76e5820a9de")], NEML_SRC],
  dose: { tagline: "Fluoroquinolone — 200–400 mg every 12 h orally; ear drops once daily for otitis externa.",
    boxedTitle: "Serious adverse reactions including tendinitis, tendon rupture, peripheral neuropathy, CNS effects and exacerbation of myasthenia gravis",
    boxed: "Fluoroquinolones, including ofloxacin, have been associated with disabling and potentially irreversible serious adverse reactions that have occurred together, including: • Tendinitis and tendon rupture • Peripheral neuropathy • Central nervous system effects. Discontinue ofloxacin immediately and avoid the use of fluoroquinolones, including ofloxacin, in patients who experience any of these serious adverse reactions. • Fluoroquinolones, including ofloxacin, may exacerbate muscle weakness in persons with myasthenia gravis. Avoid ofloxacin in patients with a known history of myasthenia gravis. •Because fluoroquinolones, including ofloxacin, have been associated with serious adverse reactions, reserve ofloxacin for use in patients who have no alternative treatment options for the following indications: o Acute exacerbation of chronic bronchitis o Uncomplicated cystitis [FDA].",
    adult: [{ ind: "Pneumonia / skin / PID", text: "400 mg every 12 h.", calc: ["po400"] }, { ind: "UTI", text: "200 mg every 12 h.", calc: ["po200"] }, { ind: "Chlamydia / prostatitis", text: "300 mg every 12 h." }, { ind: "Otitis externa (drops)", text: "10 drops once daily × 7 days." }],
    child: [{ ind: "Otitis externa (drops)", text: "6 months–13 years: 5 drops once daily × 7 days." }] }
});

FDB_M("olaparib", {
  inn: "Olaparib", atc: "L01XK01", cls: "PARP inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 100, 150 mg — do not substitute the old capsules mg for mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits PARP, killing homologous-recombination-deficient tumour cells [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["BRCA-mutated or HRD-positive ovarian, fallopian tube or peritoneal cancer (maintenance) [FDA].", "Germline BRCA-mutated HER2-negative breast cancer (adjuvant and metastatic) [FDA].", "gBRCA metastatic pancreatic cancer (maintenance) [FDA].", "HRR gene-mutated metastatic castration-resistant prostate cancer [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Usual", "300 mg twice daily with or without food [FDA]."], ["Kidney (CrCl 31–50)", "200 mg twice daily [FDA]."], ["Prostate cancer", "With a GnRH analogue (or after orchiectomy) [FDA]."], ["Interactions", "Avoid strong/moderate CYP3A inhibitors, or reduce dose per label [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose with kidney adjustment." },
  adj: { renal: "CrCl 31–50: 200 mg twice daily; CrCl 30 or less: not studied [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Anaemia, nausea, fatigue, vomiting, neutropenia, diarrhoea, decreased appetite, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["MDS/AML [FDA] [UNVERIFIED-KNOWLEDGE]", "Pneumonitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Venous thromboembolism (prostate) [FDA] [UNVERIFIED-KNOWLEDGE]", "Embryo-fetal toxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts at baseline and monthly [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "olaparib", indication_id: "std", label: "PARP-sensitive cancers — 300 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 150, unit: "mg", whole: true }], rounding: "whole tablets", renal: [{ crcl_min: 30.0001, crcl_max: 50, action: "reduce_dose", set_value: 200 }, { crcl_min: 0, crcl_max: 30, action: "avoid", note: "no label dose at CrCl 30 mL/min or less (not studied)" }], flags: ["Tablets — not interchangeable with capsules"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Lynparza (olaparib) tablets — FDA label (DailyMed)", O1_DM("741ff3e3-dc1a-45a6-84e5-2481b27131aa")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "PARP inhibitor for BRCA/HRR-mutated ovarian, breast, pancreatic and prostate cancer — 300 mg twice daily.",
    cautionTitle: "Use with care",
    caution: "MDS/AML and pneumonitis have occurred. Check blood counts monthly. Reduce to 200 mg twice daily at CrCl 31–50 [FDA].",
    adult: [{ ind: "BRCA/HRR-mutated cancers", text: "300 mg twice daily (200 mg if CrCl 31–50).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("oliceridine", {
  inn: "Oliceridine", atc: "N02AX07", cls: "Mu-opioid agonist (IV)",
  risk: "High-alert medication (opioid, IV) [ISMP]",
  linked: [],
  forms: ["Injection 1 mg/mL (1, 2, 30 mL vials) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Mu-opioid receptor agonist [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP2D6 and 3A4 metabolism [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute pain severe enough to need an IV opioid when alternatives are inadequate (hospital use) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "1.5 mg IV [FDA]."], ["Further doses", "From 1 hour after the first dose: 0.75–3 mg every 1–3 hours as needed [FDA] [UNVERIFIED-KNOWLEDGE]."], ["PCA", "Demand dose 0.35 mg with a 6-minute lockout; 0.5 mg may be considered [FDA]."], ["Daily limit", "Cumulative daily doses above 27 mg not studied [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adult starting dose." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Severe: reduce frequency of later doses [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal opioid withdrawal with prolonged use [FDA].", other: "QT prolongation above 27 mg/day [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Respiratory depression, sedation, miosis [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Naloxone; ventilatory support [FDA]." },
  contra: ["Significant respiratory depression [FDA]", "Acute or severe asthma without monitoring [FDA]", "Known or suspected GI obstruction [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Nausea, vomiting, dizziness, headache, constipation, pruritus, hypoxia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Life-threatening respiratory depression [FDA]", "Addiction, abuse, misuse [FDA]", "Profound sedation with benzodiazepines [FDA]", "QT prolongation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Respiratory rate, sedation and oxygen saturation [FDA]."],
  local: notBT,
  calc: [
    { drug: "oliceridine", indication_id: "start", label: "Acute pain — 1.5 mg IV first dose", route: "IV", population: ADULT, basis: "fixed", dose: { value: 1.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Then 0.75–3 mg every 1–3 h as needed", "Have naloxone ready"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Olinvyk (oliceridine) injection — FDA label (DailyMed)", O1_DM("ce167984-8b9d-40b7-84ce-d0f33fff1eaa")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "IV opioid for acute hospital pain — 1.5 mg, then 0.75–3 mg as needed.",
    boxedTitle: "Serious and life-threatening risks from use of Olinvyk",
    boxed: "Addiction, Abuse, and Misuse Because the use of OLINVYK exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient's risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Life-Threatening Respiratory Depression Serious, life-threatening, or fatal respiratory depression may occur with use of OLINVYK, especially during initiation or following a dosage increase. To reduce the risk of respiratory depression, proper dosing and titration of OLINVYK are essential. Risks From Concomitant Use With Benzodiazepines Or Other CNS Depressants Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of OLINVYK and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate. Neonatal Opioid Withdrawal Syndrome Advise pregnant women using opioids for an extended period of time of the risk of Neonatal Opioid Withdrawal Syndrome, which may be life-threatening if not recognized and treated. Ensure that management by neonatology experts will be available at delivery [FDA].",
    adult: [{ ind: "Acute severe pain (IV)", text: "1.5 mg IV, then 0.75–3 mg every 1–3 h as needed.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("olipudase-alfa", {
  inn: "Olipudase alfa", atc: "A16AB25", cls: "Recombinant acid sphingomyelinase (enzyme replacement)",
  linked: [],
  forms: ["Powder for IV infusion 20 mg vial [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Replaces deficient acid sphingomyelinase, reducing sphingomyelin storage [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Non-CNS manifestations of acid sphingomyelinase deficiency (ASMD) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Adult escalation (every 2 weeks)", "0.1 mg/kg, then 0.3, 0.3, 0.6, 0.6, 1, 2 mg/kg, then maintenance 3 mg/kg every 2 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Weight", "BMI 30 or less: actual weight; BMI over 30: adjusted weight = height (m)² × 30 [FDA]."], ["Before starting", "Transaminases within 1 month; pregnancy status; premedication as needed [FDA]."]],
  paed: { tiers: ["Paediatric start 0.03 mg/kg, escalated more gradually to 3 mg/kg every 2 weeks [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult escalation at 18 years.", calcNote: "No calculator — escalation schedule and BMI-adjusted weight." },
  adj: { renal: NEP, hepatic: "Check transaminases before each escalation step [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Missed doses mean restarting part of the escalation (see label) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Overdose during escalation: hypotension, raised transaminases, rash [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Stop; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, cough, diarrhoea, hypotension, ocular hyperaemia, fever, urticaria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity including anaphylaxis [FDA]", "Infusion reactions [FDA]", "Transaminase elevations [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Transaminases before escalation steps; infusion observation [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Xenpozyme (olipudase alfa-rpcp) — FDA label (DailyMed)", O1_DM("01a910ee-a33e-4be3-ac41-322d64c34311")], NEML_SRC],
  dose: { tagline: "Enzyme replacement for ASMD — escalate every 2 weeks to 3 mg/kg (adults start 0.1, children 0.03 mg/kg).",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with XENPOZYME have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Appropriate medical monitoring and support measures, including cardiopulmonary resuscitation equipment, should be readily available during XENPOZYME administration. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue XENPOZYME immediately and initiate appropriate medical treatment. In patients with severe hypersensitivity reactions, a desensitization procedure to XENPOZYME may be considered [FDA].",
    adult: [{ ind: "ASMD (non-CNS)", text: "Start 0.1 mg/kg; escalate to 3 mg/kg every 2 weeks." }],
    child: [{ ind: "ASMD (non-CNS)", text: "Start 0.03 mg/kg; escalate to 3 mg/kg every 2 weeks." }] }
});

FDB_M("olmesartan-medoxomil", {
  inn: "Olmesartan medoxomil", atc: "C09CA08", cls: "Angiotensin II receptor blocker",
  linked: [],
  forms: ["Tablets 5, 20, 40 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks the AT1 receptor [UNVERIFIED-KNOWLEDGE].",
  pk: ["Prodrug hydrolysed to olmesartan [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypertension [FDA]."], paed: ["Hypertension, 6 years and over [FDA]."] },
  adult: [["Hypertension", "20 mg once daily; may increase to 40 mg after 2 weeks [FDA]."], ["Volume depletion", "Lower starting dose under supervision [FDA]."]],
  paed: { tiers: ["6 years+, 20 to under 35 kg: 10 mg once daily (range 10–20 mg) [FDA].", "6 years+, 35 kg+: 20 mg once daily (range 20–40 mg) [FDA]."], transition: "Adult dosing from 35 kg.", calcNote: "Weight bands from 6 years." },
  adj: { renal: "Monitor; possible worsening in renal artery stenosis [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: "Stop as soon as pregnancy is detected [FDA].", other: "Do not combine with aliskiren in diabetes [FDA]." },
  tox: { human: "Hypotension, tachycardia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["With aliskiren in diabetes [FDA]."],
  ae: { common: ["Dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Sprue-like enteropathy (severe chronic diarrhoea, weight loss) [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypotension [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperkalaemia, kidney function decline [FDA] [UNVERIFIED-KNOWLEDGE]", "Fetal toxicity [FDA]"] },
  monitor: ["Blood pressure, potassium, creatinine [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "olmesartan-medoxomil", indication_id: "adult", label: "Hypertension — 20 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["May increase to 40 mg after 2 weeks"], sources: ["FDA"] },
    { drug: "olmesartan-medoxomil", indication_id: "c20", label: "Child 6 years+, 20 to under 35 kg — 10 mg once daily", route: "PO", population: pop(72, 216, 20, 35), basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 5, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["Range 10–20 mg"], sources: ["FDA"] },
    { drug: "olmesartan-medoxomil", indication_id: "c35", label: "Child 6 years+, 35 kg+ — 20 mg once daily", route: "PO", population: pop(72, 216, 35, null), basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 20, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Range 20–40 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Olmesartan medoxomil tablets — FDA label (DailyMed)", O1_DM("1be698df-30a0-4117-8c24-7253af94c8ad")], NEML_SRC],
  dose: { tagline: "ARB for hypertension — 20 mg once daily, up to 40 mg; child 10–20 mg by weight.",
    boxedTitle: "Fetal toxicity",
    boxed: "When pregnancy is detected, discontinue olmesartan medoxomil as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [FDA].",
    adult: [{ ind: "Hypertension", text: "20 mg once daily; up to 40 mg.", calc: ["adult"] }],
    child: [{ ind: "6 years+", text: "20 to under 35 kg: 10 mg; 35 kg and over: 20 mg once daily.", calc: ["c20", "c35"] }] }
});

FDB_M("olodaterol", {
  inn: "Olodaterol", atc: "R03AC19", cls: "Long-acting beta-2 agonist (LABA), inhaled",
  linked: [],
  forms: ["Soft-mist inhaler 2.5 microgram per actuation (Striverdi Respimat) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Long-acting beta-2 agonist bronchodilator [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Once-daily maintenance bronchodilator treatment in COPD — not for asthma or acute symptoms [FDA]."], paed: ["Not indicated [FDA]."] },
  adult: [["COPD", "2 inhalations once daily at the same time; no more than 2 inhalations in 24 hours [FDA]."], ["Priming", "Spray towards the ground until a mist appears, then 3 more times before first use; once if unused 3 days; fully re-prime if unused 21 days [FDA]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Adults.", calcNote: "Inhaler — no calculator." },
  adj: { renal: "No change [FDA].", hepatic: "No change in mild–moderate; severe not studied [FDA].", pregnancy: NEP, other: "Not a rescue inhaler [FDA]." },
  tox: { human: "Beta-agonist effects: tachycardia, tremor, hypokalaemia, hyperglycaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; cautious cardioselective beta-blocker [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["LABA without an inhaled corticosteroid in asthma [FDA]", "Hypersensitivity [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Nasopharyngitis, upper respiratory infection, bronchitis, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Paradoxical bronchospasm [FDA] [UNVERIFIED-KNOWLEDGE]", "Asthma-related death if used alone in asthma [FDA]", "Cardiovascular effects, hypokalaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptoms; heart rate [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Striverdi Respimat (olodaterol) — FDA label (DailyMed)", O1_DM("5d9a5433-857e-44ea-b3d6-2a400ca0cef5")], NEML_SRC],
  dose: { tagline: "Once-daily LABA for COPD — 2 inhalations daily; never alone in asthma.",
    adult: [{ ind: "COPD maintenance", text: "2 inhalations once daily." }],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

FDB_M("olopatadine", {
  inn: "Olopatadine", atc: "S01GX09", cls: "Antihistamine and mast-cell stabiliser (eye/nasal)",
  linked: [],
  forms: ["Eye drops 0.1%, 0.2%, 0.7% [FDA] [UNVERIFIED-KNOWLEDGE].", "Nasal spray 0.6% (ATC R01AC08) [UNVERIFIED-KNOWLEDGE]."],
  moa: "H1-receptor antagonist with mast-cell stabilising action [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Itchy eyes from allergens (pollen, grass, animal dander) [FDA].", "Nasal spray: seasonal allergic rhinitis [UNVERIFIED-KNOWLEDGE]."], paed: ["Eye drops (once-daily product): 2 years and over [FDA]."] },
  adult: [["Eye drops (0.2% once-daily)", "1 drop in the affected eye(s) once daily; no more than once a day [FDA]."], ["Other drops", "Wait at least 5 minutes between products [FDA]."]],
  paed: { tiers: ["2 years and over: 1 drop once daily [FDA].", "Under 2 years: ask a doctor [FDA]."], transition: "Same.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Remove soft contact lenses; reinsert after 10 minutes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Rinse eye [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, eye burning or stinging, blurred vision, taste change (nasal) [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: [NEP] },
  monitor: [NEP],
  local: notBT,
  calc: [],
  sources: [["FDA", "Pataday Once Daily Relief (olopatadine 0.2%) — FDA OTC label (DailyMed)", O1_DM("1c7d2342-ba1c-4244-9814-d92a05725d4e")], NEML_SRC],
  dose: { tagline: "Antihistamine eye drop for allergic itch — 1 drop once daily from 2 years.",
    adult: [{ ind: "Allergic eye itch", text: "1 drop once daily." }],
    child: [{ ind: "2 years and over", text: "1 drop once daily." }] }
});

FDB_M("olsalazine", {
  inn: "Olsalazine", atc: "A07EC03", cls: "Aminosalicylate (5-ASA dimer)",
  linked: [],
  forms: ["Capsules 250 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Split by colonic bacteria into two 5-ASA molecules that act locally [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Maintenance of remission of ulcerative colitis in adults intolerant of sulfasalazine [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["UC maintenance", "500 mg twice daily with food; drink adequate fluids [FDA]."], ["Before starting", "Check kidney function, and periodically after [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "Kidney injury reported — monitor [FDA].", hepatic: NEP, pregnancy: NEP, other: "Watery diarrhoea is common — usually dose-related [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Diarrhoea, vomiting [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to salicylates, aminosalicylates or excipients [FDA]."],
  ae: { common: ["Diarrhoea, abdominal pain, nausea, headache, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Kidney impairment [FDA]", "Mesalazine-induced acute intolerance syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypersensitivity including myocarditis/pericarditis [FDA] [UNVERIFIED-KNOWLEDGE]", "Hepatic failure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Kidney function before and during [FDA]."],
  local: notBT,
  calc: [
    { drug: "olsalazine", indication_id: "uc", label: "UC maintenance — 500 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 250, unit: "mg", whole: true }], rounding: "2 capsules", renal: [], flags: ["With food and plenty of fluid"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Dipentum (olsalazine) capsules — FDA label (DailyMed)", O1_DM("8512d0c6-db4e-4673-b3b4-28975c18413f")], NEML_SRC],
  dose: { tagline: "5-ASA dimer for UC maintenance when sulfasalazine is not tolerated — 500 mg twice daily.",
    adult: [{ ind: "UC maintenance", text: "500 mg twice daily.", calc: ["uc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("olutasidenib", {
  inn: "Olutasidenib", atc: "L01XM03", cls: "IDH1 inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Capsules 150 mg [FDA]."],
  moa: "Inhibits mutant IDH1, lowering 2-hydroxyglutarate and allowing myeloid differentiation [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Relapsed or refractory AML with an IDH1 mutation [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["AML", "150 mg twice daily on an empty stomach (1 hour before or 2 hours after food); not two doses within 8 hours [FDA]."], ["Duration", "At least 6 months to allow response, unless progression or toxicity [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: "Hepatotoxicity — monitor liver tests [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Avoid strong/moderate CYP3A inducers [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, fatigue, arthralgia, constipation, leukocytosis, dyspnoea, fever, rash, mucositis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Differentiation syndrome, may be fatal [FDA]", "Hepatotoxicity [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Signs of differentiation syndrome; liver tests weekly for 2 months, then periodically; blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "olutasidenib", indication_id: "aml", label: "IDH1-mutated AML — 150 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 150, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["Empty stomach", "Watch for differentiation syndrome"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Rezlidhia (olutasidenib) capsules — FDA label (DailyMed)", O1_DM("4a0c7c8b-b95f-455d-9600-b7351e4397fe")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "IDH1 inhibitor for relapsed AML — 150 mg twice daily on an empty stomach.",
    boxedTitle: "Differentiation syndrome",
    boxed: "Differentiation syndrome, which can be fatal, can occur with REZLIDHIA treatment. Symptoms may include dyspnea, pulmonary infiltrates/pleuropericardial effusion, kidney injury, hypotension, fever, and weight gain. If differentiation syndrome is suspected, withhold REZLIDHIA and initiate treatment with corticosteroids and hemodynamic monitoring until symptom resolution [FDA].",
    adult: [{ ind: "Relapsed/refractory IDH1+ AML", text: "150 mg twice daily.", calc: ["aml"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("omadacycline", {
  inn: "Omadacycline", atc: "J01AA15", cls: "Aminomethylcycline (tetracycline class)",
  linked: [],
  forms: ["Powder for IV infusion 100 mg; tablets 150 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds the 30S ribosome; overcomes common tetracycline resistance [UNVERIFIED-KNOWLEDGE].",
  pk: ["Oral absorption reduced by food, dairy and cations [FDA]."],
  ind: { adult: ["Community-acquired bacterial pneumonia (CABP) [FDA].", "Acute bacterial skin and skin structure infections (ABSSSI) [FDA]."], paed: ["Not established — tetracycline tooth effects under 8 years [FDA]."] },
  adult: [["CABP loading (day 1)", "200 mg IV once, or 100 mg IV twice, or 300 mg orally twice [FDA]."], ["ABSSSI loading", "200 mg IV once (or 100 mg twice) on day 1, or 450 mg orally once daily on days 1 and 2 [FDA]."], ["Maintenance", "100 mg IV once daily or 300 mg orally once daily; 7–14 days total [FDA]."], ["Oral", "Fast 4 hours before; nothing but water for 2 hours after, and no dairy, antacids or multivitamins for 4 hours [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — maintenance doses." },
  adj: { renal: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "No change [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Avoid — tooth discolouration, bone growth effects [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Higher mortality than moxifloxacin in the CABP trial — monitor response [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; not dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to omadacycline or tetracyclines [FDA]."],
  ae: { common: ["Nausea, vomiting, infusion-site reactions, raised transaminases, insomnia, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Tooth discolouration and enamel hypoplasia (exposure under 8 years or in utero) [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]", "Tetracycline-class effects: photosensitivity, intracranial hypertension, pancreatitis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Clinical response in CABP [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "omadacycline", indication_id: "iv", label: "CABP / ABSSSI maintenance — 100 mg IV once daily", route: "IV", population: ADULT, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 100, unit: "mg", whole: true }], rounding: "1 vial", renal: [], flags: ["After the day-1 loading dose", "Over 30 minutes"], sources: ["FDA"] },
    { drug: "omadacycline", indication_id: "po", label: "CABP / ABSSSI maintenance — 300 mg orally once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 150, unit: "mg", whole: true }], rounding: "2 tablets", renal: [], flags: ["After loading (CABP 300 mg twice day 1; ABSSSI 450 mg days 1–2)", "Fasting rules"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Nuzyra (omadacycline) injection and tablets — FDA label (DailyMed)", O1_DM("51591524-4703-44c6-8bde-dce3e6a463d1")], NEML_SRC],
  dose: { tagline: "Tetracycline-class antibiotic for CABP and skin infection — load, then 100 mg IV or 300 mg orally daily.",
    adult: [{ ind: "CABP / ABSSSI", text: "Day-1 load, then 100 mg IV or 300 mg orally once daily for 7–14 days.", calc: ["iv", "po"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("omalizumab", {
  inn: "Omalizumab", atc: "R03DX05", cls: "Anti-IgE monoclonal antibody",
  linked: [],
  forms: ["Prefilled syringes/autoinjectors 75, 150, 300 mg; vial 150 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds free IgE, preventing it from attaching to mast cells and basophils [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Moderate–severe persistent allergic asthma (6 years+) [FDA].", "Chronic rhinosinusitis with nasal polyps (adults) [FDA].", "IgE-mediated food allergy (1 year+) [FDA].", "Chronic spontaneous urticaria (12 years+) [FDA]."], paed: ["Asthma 6 years+; food allergy 1 year+; CSU 12 years+ [FDA]."] },
  adult: [["Asthma, nasal polyps, food allergy", "75–600 mg SC every 2 or 4 weeks by pre-treatment total IgE and weight — use the label dose tables [FDA]."], ["Chronic spontaneous urticaria", "150 or 300 mg SC every 4 weeks, independent of IgE and weight [FDA]."], ["First doses", "Given in a health-care setting with observation for anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Dose from IgE and weight tables (asthma 6 years+, food allergy 1 year+) [FDA].", "CSU 12 years+: 150 or 300 mg every 4 weeks [FDA]."], transition: "Same tables.", calcNote: "IgE/weight table — only the fixed CSU dose is calculated." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Not for acute bronchospasm; do not stop steroids abruptly [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hypersensitivity to omalizumab products or ingredients [FDA]."],
  ae: { common: ["Injection-site reactions, headache, arthralgia, upper respiratory infections [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis (can be delayed) [FDA]", "Malignancy [FDA] [UNVERIFIED-KNOWLEDGE]", "Serum sickness-like reactions, eosinophilic conditions [FDA] [UNVERIFIED-KNOWLEDGE]", "Parasitic infections in endemic areas [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Observe after injections; IgE levels stay high on treatment — do not re-dose from on-treatment IgE [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "omalizumab", indication_id: "csu", label: "Chronic spontaneous urticaria, 12 years+ — 300 mg SC every 4 weeks", route: "SC", population: pop(144, null, null, null), basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "prefilled syringe", strength: 150, unit: "mg", whole: true }], rounding: "whole syringes", renal: [], flags: ["150 mg every 4 weeks is the alternative", "Not IgE- or weight-based for CSU"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Omlyclo (omalizumab-igec) — FDA label (DailyMed)", O1_DM("dbd8709f-1636-45d9-ba94-5a3bc5f22f84")], NEML_SRC],
  dose: { tagline: "Anti-IgE antibody — dose by IgE and weight tables for asthma, polyps and food allergy; 150–300 mg monthly for urticaria.",
    boxedTitle: "Anaphylaxis",
    boxed: "Anaphylaxis presenting as bronchospasm, hypotension, syncope, urticaria, and/or angioedema of the throat or tongue, has been reported to occur after administration of omalizumab products. Anaphylaxis has occurred as early as after the first dose of omalizumab products, but also has occurred beyond 1 year after beginning regularly administered treatment. Because of the risk of anaphylaxis, initiate OMLYCLO therapy in a healthcare setting and closely observe patients for an appropriate period of time after OMLYCLO administration. Health care providers administering OMLYCLO should be prepared to manage anaphylaxis which can be life-threatening. Inform patients of the signs and symptoms of anaphylaxis and instruct them to seek immediate medical care should symptoms occur. Selection of patients for self-administration of OMLYCLO should be based on criteria to mitigate risk from anaphylaxis [FDA].",
    adult: [{ ind: "Asthma / nasal polyps / food allergy", text: "75–600 mg SC every 2–4 weeks from IgE and weight tables." }, { ind: "Chronic spontaneous urticaria", text: "150 or 300 mg SC every 4 weeks.", calc: ["csu"] }],
    child: [{ ind: "Asthma 6 y+ / food allergy 1 y+", text: "From IgE and weight tables." }, { ind: "CSU 12 years+", text: "150 or 300 mg every 4 weeks.", calc: ["csu"] }] }
});

FDB_M("omaveloxolone", {
  inn: "Omaveloxolone", atc: "N07XX25", cls: "Nrf2 activator",
  linked: [],
  forms: ["Capsules 50 mg [FDA]."],
  moa: "Activates the Nrf2 antioxidant pathway [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A4 substrate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Friedreich's ataxia, 16 years and over [FDA]."], paed: ["16 years and over [FDA]."] },
  adult: [["Friedreich's ataxia", "150 mg (3 capsules) once daily on an empty stomach (1 hour before or 2 hours after food) [FDA]."], ["Moderate hepatic impairment", "100 mg once daily (50 mg if adverse reactions); avoid in severe [FDA]."], ["Before and during", "ALT, AST, bilirubin, BNP, lipids [FDA]."]],
  paed: { tiers: ["16 years and over: 150 mg once daily [FDA]."], transition: "Same from 16.", calcNote: "Fixed dose from 16 years." },
  adj: { renal: NEP, hepatic: "Moderate: 100 mg; severe: avoid [FDA].", pregnancy: NEP, other: "Avoid strong/moderate CYP3A4 inhibitors or reduce dose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Raised transaminases, headache, nausea, abdominal pain, fatigue, diarrhoea, musculoskeletal pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Transaminase elevations [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised BNP (check for heart failure) [FDA] [UNVERIFIED-KNOWLEDGE]", "Lipid changes [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ALT/AST monthly for 3 months then periodically; BNP; lipids [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "omaveloxolone", indication_id: "fa", label: "Friedreich's ataxia, 16 years+ — 150 mg once daily", route: "PO", population: pop(192, null, null, null), basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 50, unit: "mg", whole: true }], rounding: "3 capsules", renal: [], flags: ["Empty stomach", "Moderate liver impairment: 100 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Skyclarys (omaveloxolone) capsules — FDA label (DailyMed)", O1_DM("2709e870-df3d-f30f-e063-6394a90aeda1")], NEML_SRC],
  dose: { tagline: "Nrf2 activator for Friedreich's ataxia — 150 mg once daily from 16 years.",
    adult: [{ ind: "Friedreich's ataxia", text: "150 mg once daily, fasting.", calc: ["fa"] }],
    child: [{ ind: "16 years and over", text: "150 mg once daily.", calc: ["fa"] }] }
});

FDB_M("omidenepag", {
  inn: "Omidenepag isopropyl", atc: "S01EX06", cls: "Prostaglandin EP2 receptor agonist (ophthalmic)",
  linked: [],
  forms: ["Eye drops 0.002% [FDA]."],
  moa: "Selective EP2 agonist — increases conventional and uveoscleral outflow [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Raised IOP in open-angle glaucoma or ocular hypertension [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Glaucoma / ocular hypertension", "1 drop in the affected eye(s) once daily in the evening [FDA]."], ["Technique", "Shake gently; 5 minutes between eye drugs; remove contact lenses and reinsert after 15 minutes [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Eye drops — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Do not use with tafluprost — macular oedema risk [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Rinse eye [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Conjunctival hyperaemia, photophobia, blurred vision, dry eye, eye pain [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Macular oedema including cystoid [FDA] [UNVERIFIED-KNOWLEDGE]", "Iritis/uveitis [FDA] [UNVERIFIED-KNOWLEDGE]", "Increased iris and eyelid pigmentation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Intraocular pressure [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Omlonti (omidenepag isopropyl) 0.002% — FDA label (DailyMed)", O1_DM("4258e437-7e92-4b09-baf1-01cb158cfc05")], NEML_SRC],
  dose: { tagline: "EP2 agonist eye drop for glaucoma — 1 drop once daily in the evening.",
    adult: [{ ind: "Open-angle glaucoma / ocular hypertension", text: "1 drop once daily in the evening." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("onasemnogene-abeparvovec", {
  inn: "Onasemnogene abeparvovec", atc: "M09AX09", cls: "AAV9 gene therapy (SMN1)",
  linked: [],
  forms: ["IV suspension kits dosed by weight (Zolgensma) [FDA].", "Intrathecal product (Itvisma) with separate fixed dosing [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Delivers a functional SMN1 gene to motor neurons [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Not for adults (IV product) [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Spinal muscular atrophy with bi-allelic SMN1 mutations, under 2 years (Zolgensma IV) [FDA]."] },
  adult: [["Adults", "Not indicated for the IV product [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Under 2 years: 1.1 × 10¹⁴ vector genomes/kg as a single IV infusion over 60 minutes; kit volume set by weight band (2.6–21 kg) [FDA].", "Prednisolone 1 mg/kg/day from the day before, for 30 days, then taper by liver tests [FDA].", "Postpone during infection [FDA]."], transition: "Single lifetime dose.", calcNote: "Vector genomes/kg — kit by weight band; no calculator." },
  adj: { renal: "Thrombotic microangiopathy can cause kidney injury — monitor [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Pre-existing liver impairment raises risk [FDA].", pregnancy: NEP, other: "Check anti-AAV9 antibodies before treatment [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Raised transaminases, vomiting [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute serious liver injury and fatal liver failure [FDA]", "Thrombotic microangiopathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Systemic immune response [FDA] [UNVERIFIED-KNOWLEDGE]", "Troponin rise / myocarditis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests weekly for 3 months; platelets, creatinine, troponin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Zolgensma (onasemnogene abeparvovec-xioi) — FDA label (DailyMed)", O1_DM("68cd4f06-70e1-40d8-bedb-609ec0afa471")], NEML_SRC],
  dose: { tagline: "One-time IV gene therapy for SMA under 2 years — 1.1 × 10¹⁴ vg/kg with steroid cover.",
    boxedTitle: "Serious liver injury and acute liver failure",
    boxed: "Cases of acute liver failure with fatal outcomes have been reported. Acute serious liver injury and elevated aminotransferases can also occur with ZOLGENSMA. Patients with preexisting liver impairment may be at higher risk. Prior to infusion, assess liver function of all patients by clinical examination and laboratory testing. Administer systemic corticosteroid to all patients before and after ZOLGENSMA infusion. Continue to monitor liver function for at least 3 months after infusion, and at other times as clinically indicated [FDA].",
    adult: [{ ind: "Adults", text: "Not indicated (IV product)." }],
    child: [{ ind: "SMA, under 2 years", text: "1.1 × 10¹⁴ vg/kg IV once; prednisolone 1 mg/kg/day for 30 days." }] }
});

FDB_M("opicapone", {
  inn: "Opicapone", atc: "N04BX04", cls: "Peripheral COMT inhibitor",
  linked: [],
  forms: ["Capsules 25, 50 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks peripheral COMT, prolonging levodopa effect [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long duration of COMT inhibition — once daily [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Adjunct to levodopa/carbidopa for 'off' episodes in Parkinson's disease [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Parkinson's 'off' episodes", "50 mg once daily at bedtime; no food 1 hour before and at least 1 hour after [FDA]."], ["Moderate hepatic impairment", "25 mg once daily; avoid in severe [FDA]."], ["Levodopa", "May need to reduce levodopa for dyskinesia [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: "Severe/ESRD: avoid [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Child-Pugh B: 25 mg; C: avoid [FDA].", pregnancy: NEP, other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Non-selective MAO inhibitors [FDA]", "Phaeochromocytoma, paraganglioma or other catecholamine-secreting tumours [FDA]"],
  ae: { common: ["Dyskinesia, constipation, raised CK, hypotension/syncope, weight loss [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Falling asleep during daily activities [FDA] [UNVERIFIED-KNOWLEDGE]", "Hallucinations, psychosis, impulse control disorders [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypotension/syncope [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Dyskinesia, sleepiness, blood pressure [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "opicapone", indication_id: "pd", label: "Parkinson's 'off' episodes — 50 mg at bedtime", route: "PO", population: ADULT, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 50, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["No food 1 h before and 1 h after", "Moderate liver impairment: 25 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ongentys (opicapone) capsules — FDA label (DailyMed)", O1_DM("a511a531-112e-43f8-a43f-5334b0efe979")], NEML_SRC],
  dose: { tagline: "Once-daily COMT inhibitor with levodopa for Parkinson's 'off' time — 50 mg at bedtime.",
    adult: [{ ind: "Parkinson's 'off' episodes", text: "50 mg once daily at bedtime.", calc: ["pd"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("oritavancin", {
  inn: "Oritavancin", atc: "J01XA05", cls: "Lipoglycopeptide antibacterial",
  linked: [],
  forms: ["Powder for IV infusion 400 mg vials (Orbactiv, 3 vials per dose); Kimyrsa 1,200 mg vial — different preparation [FDA]."],
  moa: "Inhibits cell-wall synthesis and disrupts the bacterial membrane [UNVERIFIED-KNOWLEDGE].",
  pk: ["Very long half-life (about 10 days) — single dose [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute bacterial skin and skin structure infections due to susceptible Gram-positive organisms (including MRSA) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["ABSSSI (Orbactiv)", "1,200 mg as a single IV infusion over 3 hours [FDA]."], ["Products", "Orbactiv and Kimyrsa differ in strength, infusion time and diluent — follow the product label [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — single fixed dose." },
  adj: { renal: "No change in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Falsely prolongs aPTT for up to 120 hours and PT/INR for up to 12 hours; IV heparin contraindicated for 5 days [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive; not removed by haemodialysis [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["IV unfractionated heparin for 120 hours (5 days) after dosing [FDA]", "Hypersensitivity to oritavancin products [FDA]"],
  ae: { common: ["Headache, nausea, vomiting, limb and subcutaneous abscesses, diarrhoea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity (cross-sensitivity with glycopeptides) [FDA] [UNVERIFIED-KNOWLEDGE]", "Infusion reactions [FDA] [UNVERIFIED-KNOWLEDGE]", "Osteomyelitis (more cases in trials) [FDA] [UNVERIFIED-KNOWLEDGE]", "C. difficile [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Coagulation tests will be falsely abnormal — use anti-Xa if anticoagulation monitoring needed [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "oritavancin", indication_id: "absssi", label: "Skin infection — 1,200 mg IV once (Orbactiv)", route: "IV", population: ADULT, basis: "fixed", dose: { value: 1200, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 400, unit: "mg", whole: true }], rounding: "3 vials", renal: [], flags: ["Single dose over 3 hours", "No IV heparin for 5 days"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Orbactiv (oritavancin) — FDA label (DailyMed)", O1_DM("ff09a726-9f9b-4e30-b509-396781293220")], NEML_SRC],
  dose: { tagline: "Single-dose lipoglycopeptide for skin infections — 1,200 mg IV over 3 hours.",
    cautionTitle: "Use with care",
    caution: "Falsely prolongs aPTT and PT/INR — IV unfractionated heparin is contraindicated for 5 days. Orbactiv and Kimyrsa are prepared differently [FDA].",
    adult: [{ ind: "ABSSSI", text: "1,200 mg IV once over 3 hours.", calc: ["absssi"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("orlistat", {
  inn: "Orlistat", atc: "A08AB01", cls: "Gastrointestinal lipase inhibitor",
  linked: [],
  forms: ["Capsules 120 mg (Rx); 60 mg (OTC) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits gut lipases, blocking absorption of about 30% of dietary fat [UNVERIFIED-KNOWLEDGE].",
  pk: ["Minimal absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Obesity, or overweight with risk factors, with diet and exercise [FDA]."], paed: ["Obesity, 12 years and over [FDA]."] },
  adult: [["Weight management", "120 mg three times daily with each main meal containing fat (during or up to 1 hour after) [FDA]."], ["Diet", "About 30% of calories from fat, spread over three meals; skip the dose if the meal has no fat [FDA]."], ["Vitamins", "Multivitamin with fat-soluble vitamins daily, 2 hours apart from orlistat or at bedtime [FDA]."]],
  paed: { tiers: ["12 years and over: 120 mg three times daily with fat-containing meals [FDA]."], transition: "Same.", calcNote: "Fixed dose from 12 years." },
  adj: { renal: "Oxalate nephropathy reported — caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Rare severe liver injury [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Not recommended [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Separate ciclosporin by 3 hours and levothyroxine by 4 hours; monitor INR with warfarin; may lower antiepileptic levels [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Chronic malabsorption syndrome [FDA]", "Cholestasis [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Oily spotting, flatus with discharge, faecal urgency, fatty stools, increased defecation, incontinence [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Liver injury (rare) [FDA] [UNVERIFIED-KNOWLEDGE]", "Oxalate kidney stones/nephropathy [FDA] [UNVERIFIED-KNOWLEDGE]", "Cholelithiasis [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Weight; fat-soluble vitamins in long use [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "orlistat", indication_id: "std", label: "Weight management, 12 years+ — 120 mg with each fat-containing meal", route: "PO", population: pop(144, null, null, null), basis: "fixed", dose: { value: 120, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 120, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["Three main meals; skip if no fat", "Daily multivitamin at bedtime"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Xenical (orlistat) capsules — FDA label (DailyMed)", O1_DM("6240792b-9224-2d10-e053-2a91aa0a2c3e")], NEML_SRC],
  dose: { tagline: "Fat-absorption blocker for obesity — 120 mg with each main meal containing fat.",
    adult: [{ ind: "Obesity", text: "120 mg three times daily with fat-containing meals.", calc: ["std"] }],
    child: [{ ind: "12 years and over", text: "Same.", calc: ["std"] }] }
});

FDB_M("orphenadrine", {
  inn: "Orphenadrine (citrate)", atc: "M03BC01", cls: "Centrally acting muscle relaxant (anticholinergic)",
  linked: [],
  forms: ["Injection 30 mg/mL (2 mL); extended-release tablets 100 mg [FDA]."],
  moa: "Central muscle relaxant with anticholinergic and antihistamine effects [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Adjunct to rest and physical therapy for acute painful musculoskeletal conditions [FDA]."], paed: ["Not recommended [FDA]."] },
  adult: [["Injection", "60 mg (one 2 mL vial) IV or IM; may repeat every 12 hours [FDA]."], ["Oral maintenance", "100 mg tablet twice daily [FDA]."]],
  paed: { tiers: ["Not recommended [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Sedation — caution driving; additive with alcohol and other CNS depressants [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Anticholinergic toxicity, seizures, arrhythmias — can be fatal [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; ECG monitoring [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Glaucoma [FDA]", "Pyloric or duodenal obstruction, stenosing peptic ulcer [FDA]", "Prostatic hypertrophy or bladder-neck obstruction [FDA]", "Megaoesophagus (cardiospasm) [FDA]", "Myasthenia gravis [FDA]", "Hypersensitivity [FDA]"],
  ae: { common: ["Dry mouth, blurred vision, urinary hesitancy, tachycardia, drowsiness, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis (injection, sulfite content) [FDA] [UNVERIFIED-KNOWLEDGE]", "Confusion in older adults [FDA] [UNVERIFIED-KNOWLEDGE]", "Aplastic anaemia (rare) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Anticholinergic effects [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "orphenadrine", indication_id: "inj", label: "Musculoskeletal pain — 60 mg IV/IM every 12 hours", route: "IV/IM", population: ADULT, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 30, unit: "mg/mL" }], rounding: "2 mL", renal: [], flags: ["Then 100 mg orally twice daily"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Orphenadrine citrate injection — FDA label (DailyMed)", O1_DM("ed406e8a-ec00-4711-ae2b-3c5af4f15438")], NEML_SRC],
  dose: { tagline: "Anticholinergic muscle relaxant — 60 mg IV/IM every 12 h, then 100 mg orally twice daily.",
    adult: [{ ind: "Acute musculoskeletal pain", text: "60 mg IV/IM every 12 h; oral 100 mg twice daily.", calc: ["inj"] }],
    child: [{ ind: "Children", text: "Not recommended." }] }
});

FDB_M("oseltamivir", {
  inn: "Oseltamivir", atc: "J05AH02", cls: "Influenza neuraminidase inhibitor",
  linked: [],
  forms: ["Capsules 30, 45, 75 mg; oral suspension 6 mg/mL [FDA]."],
  moa: "Inhibits influenza A and B neuraminidase, stopping viral release [UNVERIFIED-KNOWLEDGE].",
  pk: ["Prodrug converted to oseltamivir carboxylate; excreted by the kidneys [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Treatment of acute uncomplicated influenza A and B within 48 hours of symptoms [FDA].", "Prophylaxis of influenza after exposure or during community outbreaks [FDA]."], paed: ["Treatment from 2 weeks of age; prophylaxis from 1 year [FDA]."] },
  adult: [["Treatment (13 years+)", "75 mg twice daily for 5 days [FDA]."], ["Prophylaxis (13 years+)", "75 mg once daily for at least 10 days; up to 6 weeks in a community outbreak [FDA]."], ["Kidney (treatment)", "CrCl over 30–60: 30 mg twice daily; over 10–30: 30 mg once daily; haemodialysis: 30 mg then 30 mg after each session (max 5 days); CAPD: single 30 mg dose [FDA]."], ["Kidney (prophylaxis)", "CrCl over 30–60: 30 mg once daily; over 10–30: 30 mg every other day [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["2 weeks to under 1 year: 3 mg/kg twice daily for 5 days (treatment) [FDA].", "1–12 years, treatment twice daily × 5 days (prophylaxis once daily × 10 days): 15 kg or less 30 mg; 15.1–23 kg 45 mg; 23.1–40 kg 60 mg; over 40 kg 75 mg [FDA]."], transition: "75 mg from 13 years or over 40 kg.", calcNote: "Weight bands 1–12 years; mg/kg under 1 year." },
  adj: { renal: "See kidney row — CrCl 10 or less not on dialysis: not recommended [FDA].", hepatic: "No change in mild–moderate [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Used in pregnancy (high-risk group for influenza) [UNVERIFIED-KNOWLEDGE].", other: "Live attenuated influenza vaccine: avoid oseltamivir 48 h before to 2 weeks after [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, dizziness [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known serious hypersensitivity to oseltamivir (anaphylaxis, serious skin reactions) [FDA]."],
  ae: { common: ["Nausea, vomiting, headache, abdominal pain [FDA]."], serious: ["Serious skin reactions (SJS/TEN) and anaphylaxis [FDA] [UNVERIFIED-KNOWLEDGE]", "Neuropsychiatric events (delirium, self-injury), mainly in children [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Behaviour changes in children; secondary bacterial infection [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "oseltamivir", indication_id: "tx_adult", label: "Influenza treatment, 13 years+ — 75 mg twice daily × 5 days", route: "PO", population: pop(156, null, null, null), basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 75, unit: "mg", whole: true }], rounding: "1 capsule", renal: [{ crcl_min: 30.0001, crcl_max: 60, action: "reduce_dose", set_value: 30, interval_h: 12 }, { crcl_min: 10.0001, crcl_max: 30, action: "reduce_dose", set_value: 30, interval_h: 24 }, { crcl_min: 0, crcl_max: 10, action: "avoid", note: "not recommended at CrCl 10 or less without dialysis; haemodialysis: 30 mg then 30 mg after each session; CAPD: single 30 mg dose" }], flags: ["Start within 48 h of symptoms", "5 days"], sources: ["FDA"] },
    { drug: "oseltamivir", indication_id: "tx_inf", label: "Influenza treatment, 2 weeks to under 1 year — 3 mg/kg twice daily", route: "PO", population: pop(0.5, 12, null, null), basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "suspension", strength: 6, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["5 days", "0.5 mL/kg of 6 mg/mL suspension"], sources: ["FDA"] },
    { drug: "oseltamivir", indication_id: "tx_15", label: "Influenza treatment, 1–12 years, 15 kg or less — 30 mg twice daily", route: "PO", population: pop(12, 156, null, 15.0001), basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "suspension", strength: 6, unit: "mg/mL" }], rounding: "5 mL", renal: [], flags: ["5 days; prophylaxis same dose once daily × 10 days"], sources: ["FDA"] },
    { drug: "oseltamivir", indication_id: "tx_23", label: "Influenza treatment, 1–12 years, 15.1–23 kg — 45 mg twice daily", route: "PO", population: pop(12, 156, 15.0001, 23.0001), basis: "fixed", dose: { value: 45, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "suspension", strength: 6, unit: "mg/mL" }], rounding: "7.5 mL", renal: [], flags: ["5 days; prophylaxis same dose once daily × 10 days"], sources: ["FDA"] },
    { drug: "oseltamivir", indication_id: "tx_40", label: "Influenza treatment, 1–12 years, 23.1–40 kg — 60 mg twice daily", route: "PO", population: pop(12, 156, 23.0001, 40.0001), basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "suspension", strength: 6, unit: "mg/mL" }], rounding: "10 mL", renal: [], flags: ["5 days; prophylaxis same dose once daily × 10 days"], sources: ["FDA"] },
    { drug: "oseltamivir", indication_id: "tx_41", label: "Influenza treatment, 1–12 years, over 40 kg — 75 mg twice daily", route: "PO", population: pop(12, 156, 40.0001, null), basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 75, unit: "mg", whole: true }], rounding: "1 capsule", renal: [], flags: ["5 days; prophylaxis same dose once daily × 10 days"], sources: ["FDA"] },
    { drug: "oseltamivir", indication_id: "pep_adult", label: "Influenza prophylaxis, 13 years+ — 75 mg once daily", route: "PO", population: pop(156, null, null, null), basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "capsule", strength: 75, unit: "mg", whole: true }], rounding: "1 capsule", renal: [{ crcl_min: 30.0001, crcl_max: 60, action: "reduce_dose", set_value: 30, interval_h: 24 }], renal_note: "CrCl over 10–30: 30 mg every other day; CrCl 10 or less: see monograph [FDA].", flags: ["At least 10 days; up to 6 weeks in an outbreak"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Oseltamivir phosphate capsules — FDA label (DailyMed)", O1_DM("339778ee-0b6f-6d81-e063-6394a90a2d32")], NEML_SRC],
  dose: { tagline: "Influenza antiviral — 75 mg twice daily for 5 days; children by weight band; lower in kidney impairment.",
    adult: [{ ind: "Influenza treatment", text: "75 mg twice daily × 5 days.", calc: ["tx_adult"] }, { ind: "Influenza prophylaxis", text: "75 mg once daily ≥ 10 days.", calc: ["pep_adult"] }],
    child: [{ ind: "2 weeks to under 1 year", text: "3 mg/kg twice daily × 5 days.", calc: ["tx_inf"] }, { ind: "1–12 years", text: "≤15 kg 30 mg; 15.1–23 kg 45 mg; 23.1–40 kg 60 mg; >40 kg 75 mg — twice daily × 5 days.", calc: ["tx_15", "tx_23", "tx_40", "tx_41"] }] }
});

FDB_M("osilodrostat", {
  inn: "Osilodrostat", atc: "H02CA02", cls: "Cortisol synthesis inhibitor (11-beta-hydroxylase)",
  linked: [],
  forms: ["Tablets 1, 5, 10 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits 11-beta-hydroxylase (CYP11B1), the last step of cortisol synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Endogenous hypercortisolism in Cushing's syndrome when surgery is not an option or not curative [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "2 mg twice daily, with or without food [FDA]."], ["Titrate", "By 1–2 mg twice daily no more often than every 2 weeks, by cortisol, tolerability and symptoms; maximum 30 mg twice daily [FDA]."], ["Hepatic impairment", "Child-Pugh B: start 1 mg twice daily; C: 1 mg once daily in the evening [FDA]."], ["Before starting", "Correct low potassium and magnesium; baseline ECG; repeat ECG within 1 week [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — starting dose." },
  adj: { renal: NEP, hepatic: "Child-Pugh B: 1 mg twice daily; C: 1 mg once daily [FDA].", pregnancy: NEP, other: "Strong CYP3A4 inhibitors: halve the dose [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypocortisolism [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Glucocorticoid replacement; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Adrenal insufficiency, fatigue, nausea, headache, oedema [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypocortisolism / adrenal insufficiency [FDA] [UNVERIFIED-KNOWLEDGE]", "QTc prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Raised adrenal precursors: hypokalaemia, hypertension, hirsutism [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Urinary free cortisol / serum cortisol every 1–2 weeks while titrating; potassium, magnesium; ECG [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "osilodrostat", indication_id: "start", label: "Cushing's — start 2 mg twice daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 1, unit: "mg", whole: true }], rounding: "whole tablets", renal: [], flags: ["Titrate every 2 weeks to max 30 mg twice daily", "Baseline ECG; correct K and Mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Isturisa (osilodrostat) tablets — FDA label (DailyMed)", O1_DM("f3a5ec24-63c3-4d83-b1c0-6c550fbe7ae2")], NEML_SRC],
  dose: { tagline: "Cortisol synthesis inhibitor for Cushing's — 2 mg twice daily, titrated to max 30 mg twice daily.",
    cautionTitle: "Use with care",
    caution: "Can cause adrenal insufficiency — teach symptoms and check cortisol during titration. Prolongs QT: correct potassium and magnesium and check ECG [FDA].",
    adult: [{ ind: "Cushing's syndrome", text: "2 mg twice daily; titrate every 2 weeks.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("osimertinib", {
  inn: "Osimertinib", atc: "L01EB04", cls: "Third-generation EGFR tyrosine kinase inhibitor",
  risk: ONC,
  linked: [],
  forms: ["Tablets 40, 80 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Irreversibly inhibits sensitising EGFR mutations and T790M [UNVERIFIED-KNOWLEDGE].",
  pk: ["CYP3A substrate — strong inducers lower levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["EGFR exon 19 deletion or exon 21 L858R NSCLC: adjuvant after resection; stage III after chemoradiation; first-line metastatic (alone or with pemetrexed/platinum); T790M-positive after prior EGFR TKI [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["NSCLC", "80 mg once daily with or without food [FDA]."], ["Adjuvant", "Up to 3 years [FDA]."], ["Swallowing", "Can be dispersed in water and given by NG tube [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Strong CYP3A4 inducers", "Avoid; if unavoidable, 160 mg daily [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Adults — fixed dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Can harm the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: NEP },
  tox: { human: NEP, animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, rash, dry skin, nail toxicity, stomatitis, fatigue, low blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Interstitial lung disease / pneumonitis [FDA] [UNVERIFIED-KNOWLEDGE]", "QTc prolongation [FDA] [UNVERIFIED-KNOWLEDGE]", "Cardiomyopathy / reduced LVEF [FDA] [UNVERIFIED-KNOWLEDGE]", "Keratitis, SJS, erythema multiforme [FDA] [UNVERIFIED-KNOWLEDGE]", "Aplastic anaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood count with differential; LVEF if cardiac risk; ECG and electrolytes; respiratory symptoms [FDA]."],
  local: notBT,
  calc: [
    { drug: "osimertinib", indication_id: "nsclc", label: "EGFR-mutated NSCLC — 80 mg once daily", route: "PO", population: ADULT, basis: "fixed", dose: { value: 80, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "tablet", strength: 80, unit: "mg", whole: true }], rounding: "1 tablet", renal: [], flags: ["Adjuvant: up to 3 years"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Tagrisso (osimertinib) tablets — FDA label (DailyMed)", O1_DM("5e81b4a7-b971-45e1-9c31-29cea8c87ce7")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "EGFR inhibitor for EGFR-mutated NSCLC — 80 mg once daily.",
    cautionTitle: "Use with care",
    caution: "Stop for suspected interstitial lung disease. Can prolong QT and reduce heart function — check ECG, electrolytes and LVEF in at-risk patients [FDA].",
    adult: [{ ind: "EGFR-mutated NSCLC", text: "80 mg once daily.", calc: ["nsclc"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

})(); // end O-1 scope

/* Brand names — BATCH O1 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"ocrelizumab":{"IN":[],"BD":[["Ocrevus","Roche Bangladesh Ltd","300 mg/10 ml"]],"src":["https://medex.com.bd/brands/37527/ocrevus-300-mg-iv-infusion"]},"ofatumumab":{"IN":[["Bonspri","Novartis Healthcare Pvt Ltd","Bonspri Lisy 20Mg Pre Filled Syringe Of 0.4Ml Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/bonspri-lisy-20mg-pre-filled-syringe-of-0-4ml-injection-4819190"]},"ofloxacin":{"IN":[["Phoflox","Avighna Medicare Pvt Ltd","Phoflox 200Mg Strip Of 10 Tablets"],["Olox","Cipla Gx","Olox 200Mg Strip Of 10 Tablets"]],"BD":[["Flocet","Opsonin Pharma Ltd","200 mg"],["Obactin","The IBN SINA Pharmaceutical PLC","0.3%"],["Vista","Aristopharma Ltd","0.3%"]],"src":["https://pharmeasy.in/online-medicine-order/phoflox-200mg-strip-of-10-tablets-3553783","https://pharmeasy.in/online-medicine-order/olox-200mg-tablet-6264","https://medex.com.bd/brands/9650/flocet-200-mg-tablet","https://medex.com.bd/brands/15718/obactin-03-eye-drop","https://medex.com.bd/brands/9658/vista-03-eye-drop"]},"olaparib":{"IN":[["Canrib","Adley Formulation","Canrib 150Mg Bottle Of 60 Tablet"],["Bracanat","Natco Pharma Ltd","Bracanat 150 Bottle Of 30 Tablets"],["Olparza","Bajaj Healthcare Ltd","Olparza 150Mg Bottle Of 60 Tablets"]],"BD":[["Olarigen","General Pharmaceuticals Ltd","50 mg"],["Bracaloc","Healthcare Pharmaceuticals Ltd","150 mg"],["Lynparib","Radiant Pharmaceuticals Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/canrib-150mg-bottle-of-160-tablets-4798250","https://pharmeasy.in/online-medicine-order/bracanat-150-tablet-30-no-s-4118869","https://pharmeasy.in/online-medicine-order/olparza-150mg-bottle-of-60-tablets-4517393","https://medex.com.bd/brands/32762/olarigen-50-mg-capsule","https://medex.com.bd/brands/39920/bracaloc-150-mg-tablet","https://medex.com.bd/brands/38771/lynparib-150-mg-tablet"]},"olmesartan-medoxomil":{"IN":[["Olstan","Biochem Pharmaceutical Industries","Olstan 20Mg Strip Of 10 Tablets"],["Olmesmart","Vivier Pharma Private Limited","Olmesmart 40Mg Strip Of 10 Tablets"],["Olmesar","Macleods Pharmaceuticals","Olmesar 10Mg Strip Of 15 Tablets"]],"BD":[["Olpres","Ziska Pharmaceuticals Ltd","10 mg"],["Olmenor","Delta Pharma PLC","20 mg"],["Olmeben","Navana Pharmaceuticals Ltd","20 mg"]],"src":["https://pharmeasy.in/online-medicine-order/olstan-20mg-tablet-4714","https://pharmeasy.in/online-medicine-order/olmesmart-40mg-tab-10-s-210516","https://pharmeasy.in/online-medicine-order/olmesar-10mg-tab-15-s-212264","https://medex.com.bd/brands/32018/olpres-a-5-mg-tablet","https://medex.com.bd/brands/32100/olmenor-20-mg-tablet","https://medex.com.bd/brands/32706/olmeben-20-mg-tablet"]},"olopatadine":{"IN":[["Olopat","Ajanta Pharma Limited","Olopat 0.1% Bottle Of 5Ml Eye Drops"],["Olopat Max","Ajanta Pharma Limited","Olopat Max Bottle Of 5Ml Eye Drops"],["Pataday","J B Chemicals And Pharmaceuticals","Pataday Bottle Of 2.5Ml Eye Drops"]],"BD":[["OPD DS","Nipa Pharmaceuticals Ltd","0.2%"],["Olosol","Ad-din Pharmaceuticals Ltd","0.1%"],["Patalon Max","The IBN SINA Pharmaceutical PLC","0.7%"]],"src":["https://pharmeasy.in/online-medicine-order/olopat-0-1-eye-drops-1349","https://pharmeasy.in/online-medicine-order/olopat-max-eye-drops-5ml-175758","https://pharmeasy.in/online-medicine-order/pataday-eye-drops-2010","https://medex.com.bd/brands/38725/opd-ds-02-eye-drop","https://medex.com.bd/brands/37980/olosol-01-eye-drop","https://medex.com.bd/brands/32632/patalon-max-07-eye-drop"]},"omalizumab":{"IN":[],"BD":[["Xolair","Nevian Lifescience PLC","150 mg/ml"]],"src":["https://medex.com.bd/brands/3964/xolair-150-mg-sc-injection"]},"orlistat":{"IN":[["O Stat","Aristo Pharmaceuticals Pvt Ltd","O Stat 120Mg Strip Of 10 Capsules"],["Orlimax","Knoll Healthcare Pvt Ltd","Orlimax 120Mg Strip Of 10 Capsules"],["Megaburn","Leeford Healthcare Ltd","Megaburn 120Mg Strip Of 10 Capsules"]],"BD":[["Adiponil","Incepta Pharmaceuticals Ltd","120 mg"],["Dietil","Eskayef Pharmaceuticals Ltd","120 mg"],["Slimfast","Healthcare Pharmaceuticals Ltd","120 mg"]],"src":["https://pharmeasy.in/online-medicine-order/o-stat-120mg-capsule-3760","https://pharmeasy.in/online-medicine-order/orlimax-120mg-capsule-15984","https://pharmeasy.in/online-medicine-order/megaburn-120mg-capsule-16381","https://medex.com.bd/brands/5162/adiponil-120-mg-capsule","https://medex.com.bd/brands/5163/dietil-120-mg-capsule","https://medex.com.bd/brands/5164/slimfast-120-mg-capsule"]},"oseltamivir":{"IN":[["Fluvir","Hetero Healthcare Limited","Fluvir 75Mg Strip Of 10 Capsules"],["Antiflu","Cipla Limited","Antiflu 75Mg Strip Of 10 Capsules"],["Fluvia","Macleods Pharmaceuticals","Fluvia Bottle Of 75Ml Suspension"]],"BD":[["Oseflu","Beximco Pharmaceuticals PLC","75 mg"],["Tamiflu","Roche Bangladesh Ltd","75 mg"],["Flutavir","Incepta Pharmaceuticals Ltd","75 mg"]],"src":["https://pharmeasy.in/online-medicine-order/fluvir-75mg-capsule-12751","https://pharmeasy.in/online-medicine-order/antiflu-75mg-capsule-6658","https://pharmeasy.in/online-medicine-order/fluvia-suspension-75-ml-4120578","https://medex.com.bd/brands/9773/oseflu-75-mg-capsule","https://medex.com.bd/brands/9774/tamiflu-75-mg-capsule","https://medex.com.bd/brands/33844/flutavir-75-mg-capsule"]},"osimertinib":{"IN":[["Osimert","Everest Pharmaceuticals","Osimert 80Mg Bottle Of 30 Tablets"]],"BD":[["Osicent","Incepta Pharmaceuticals Ltd","80 mg"],["Osinib","Drug International Ltd","80 mg"],["Tasso","Jenphar Bangladesh Ltd","80 mg"]],"src":["https://pharmeasy.in/online-medicine-order/osimert-80mg-bottle-of-30-tablets-3483190","https://medex.com.bd/brands/17316/osicent-80-mg-tablet","https://medex.com.bd/brands/23225/osinib-80-mg-tablet","https://medex.com.bd/brands/27019/tasso-80-mg-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
