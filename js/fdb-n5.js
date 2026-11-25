/* Clinical Disease Guide — Drug monograph database, batch N-5 (25 Nov 2026).
   Bhutan NEML 2025 medicines still missing after N-1..N-4 (owner asked whether every Bhutan formulary drug is in;
   gap list in _work/fdb/neml-gaps-N5.txt). Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in
   _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it). Set IDs copied from saved label JSONs. */

const N5_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const N5_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const N5_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const N5_NEP = "Not established in primary source. [NEP]";
const N5_LD = "Animal LD50: Not established in primary source. [NEP]";

FDB_M("mycophenolate-mofetil", {
  inn: "Mycophenolate mofetil", atc: "L04AA06", cls: "Antimetabolite immunosuppressant (IMPDH inhibitor)",
  linked: [],
  forms: ["Capsule 250 mg; tablet 500 mg; oral suspension 200 mg/mL; IV 500 mg vial [FDA].", "Bhutan: mycophenolate mofetil 250 mg and 500 mg capsules (NEML 2025) [BT-NEML]."],
  moa: "Mycophenolic acid inhibits inosine monophosphate dehydrogenase, blocking lymphocyte proliferation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Enterohepatic recirculation; antacids and cholestyramine reduce absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Prevention of rejection in kidney, heart or liver transplant, with ciclosporin or tacrolimus and corticosteroids [FDA].", "Lupus nephritis and other autoimmune disease (specialist, off-label in US) [UNVERIFIED-KNOWLEDGE]."], paed: ["Transplant, 3 months and older [FDA]."] },
  adult: [["Kidney transplant", "1 g twice daily orally or IV (IV over at least 2 hours) [FDA]."], ["Heart transplant", "1.5 g twice daily orally or IV [FDA]."], ["Liver transplant", "1.5 g twice daily orally, or 1 g twice daily IV [FDA]."], ["Severe chronic graft impairment (GFR under 25)", "No more than 1 g twice daily [FDA]."], ["Neutropenia (ANC under 1,300)", "Interrupt or reduce [FDA]."]],
  paed: { tiers: ["Kidney transplant, 3 months and older: 600 mg/m² twice daily, maximum 2 g/day [FDA].", "BSA 1.25 to under 1.5 m²: 750 mg twice daily; 1.5 m² or more: 1 g twice daily (capsules or tablets) [FDA]."], transition: "Adult dose from BSA 1.5 m².", calcNote: "BSA-based in children." },
  adj: { renal: "GFR under 25 (graft impairment): maximum 1 g twice daily [FDA].", hepatic: N5_NEP, pregnancy: "First-trimester loss and malformations — avoid; two reliable contraceptive methods [FDA].", other: "Do not combine with azathioprine; live vaccines avoided [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Marrow suppression, GI toxicity [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Supportive; cholestyramine increases elimination [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to mycophenolate mofetil, mycophenolic acid or components [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Diarrhoea, vomiting, leukopenia, infections, anaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Embryofetal toxicity [FDA]", "Lymphoma and skin cancer [FDA]", "Serious infections including PML and CMV [FDA]", "Neutropenia, pure red cell aplasia [FDA] [UNVERIFIED-KNOWLEDGE]", "GI bleeding and perforation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count weekly for the first month, twice monthly for months 2–3, then monthly; pregnancy tests [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: mycophenolate mofetil 250 mg and 500 mg capsules [BT-NEML].", strengths: "250 mg; 500 mg.", stg: "Transplant follow-up and specialist immunosuppression [BT-NEML] [UNVERIFIED-KNOWLEDGE]." },
  calc: [
    { drug: "mycophenolate-mofetil", indication_id: "kidney", label: "Kidney transplant — 1 g twice daily", route: "PO", population: N5_ADULT, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 500, unit: "mg/cap", whole: true }, { form: "cap", strength: 250, unit: "mg/cap", whole: true }], rounding: "Whole capsules", renal: [], renal_note: "Graft GFR under 25: no more than 1 g twice daily [FDA]", flags: ["Heart or liver transplant: 1.5 g twice daily", "Blood count weekly for the first month"], sources: ["FDA"] },
    { drug: "mycophenolate-mofetil", indication_id: "child", label: "Child kidney transplant (3 months and over) — 600 mg/m² twice daily", route: "PO", population: { min_age_months: 3, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 1000, max_daily: 2000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "oral suspension", strength: 200, unit: "mg/mL" }, { form: "cap", strength: 250, unit: "mg/cap", whole: true }], rounding: "0.1 mL", renal: [], flags: ["Maximum 2 g/day", "Specialist only"], sources: ["FDA"] }
  ],
  sources: [["FDA", "CellCept (mycophenolate mofetil) — FDA label (DailyMed)", N5_DM("37241e87-4af4-4dc3-a1aa-ea6f20d8dc40")], N5_BT],
  dose: { tagline: "Transplant immunosuppressant — teratogenic; check the blood count.",
    boxedTitle: "Embryofetal toxicity, malignancies and serious infections",
    boxed: "Use during pregnancy is associated with increased risks of first trimester pregnancy loss and congenital malformations. Avoid if safer treatment options are available. Females of reproductive potential must be counseled regarding pregnancy prevention and planning. Increased risk of development of lymphoma and other malignancies, particularly of the skin. Increased susceptibility to bacterial, viral, fungal and protozoal infections, including opportunistic infections and viral reactivation of hepatitis B and C, which may lead to hospitalizations and fatal outcomes [FDA].",
    adult: [{ ind: "Kidney transplant", text: "1 g twice daily (heart or liver 1.5 g twice daily).", calc: ["kidney"], bt: "Bhutan NEML: 250 mg and 500 mg capsules." }],
    child: [{ ind: "Kidney transplant (3 months and over)", text: "600 mg/m² twice daily, maximum 2 g/day.", calc: ["child"] }] }
});

FDB_M("silver-sulfadiazine", {
  inn: "Silver sulfadiazine (sulphadiazine)", atc: "D06BA01", cls: "Topical sulfonamide antibacterial (burns)",
  linked: [["Burns — adults", "Wound sepsis prevention [FDA] [BT-NEML]", "burns-adult"], ["Burns — children", "Not in premature or newborn infants [FDA]", "burns-child"]],
  forms: ["Cream 1% [FDA].", "Bhutan: silver sulphadiazine 1% cream, 25 g and 200 g (NEML 2025) [BT-NEML]."],
  moa: "Silver salt of a sulfonamide: broad antibacterial and some antifungal action on the burn surface [UNVERIFIED-KNOWLEDGE].",
  pk: ["Some systemic absorption of sulfadiazine from large burns [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Adjunct to prevent and treat wound sepsis in second- and third-degree burns [FDA]."], paed: ["Burns — not in premature infants or newborns in the first 2 months [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Burns", "After cleansing and debridement, apply under sterile conditions about 1/16 inch (1.5 mm) thick once or twice daily; keep burns covered with cream at all times; reapply where removed [FDA]."], ["Duration", "Until healing is satisfactory or the site is ready for grafting [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same application; not in premature infants or newborns (kernicterus risk) [FDA]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: "Large burns: sulfonamide can accumulate in renal impairment [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: N5_NEP, pregnancy: "Not near term (kernicterus) [FDA].", other: "G6PD deficiency: haemolysis possible [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Systemic sulfonamide effects with very large burns [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Stop; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to silver sulfadiazine or components [FDA].", "Pregnant women near or at term, premature infants and newborns in the first 2 months [FDA]."],
  ae: { common: ["Burning, itching, rash at the site [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Transient leukopenia [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin reactions (SJS/TEN) [FDA] [UNVERIFIED-KNOWLEDGE]", "Argyria, interstitial nephritis (rare) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood count with large burns; renal function [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: silver sulphadiazine 1% cream, 25 g and 200 g [BT-NEML].", strengths: "1%.", stg: "Burns wound care [BT-NEML] [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [["FDA", "Silver sulfadiazine cream 1% — FDA label (DailyMed)", N5_DM("067895f9-a797-4cbd-a3d2-d611d512fe5b")], N5_BT],
  dose: { tagline: "Burn cream — thick layer once or twice daily; not in newborns or late pregnancy.",
    adult: [{ ind: "Second- and third-degree burns", text: "Apply about 1.5 mm thick once or twice daily; keep covered.", bt: "Bhutan NEML: 1% cream." }],
    child: [{ ind: "Children", text: "Same; not in premature infants or newborns." }] }
});

FDB_M("triamcinolone", {
  inn: "Triamcinolone acetonide", atc: "D07AB09 (topical); H02AB08 (injection); A01AC01 (oral paste)", cls: "Corticosteroid (topical, oral paste, depot injection)",
  linked: [["Rheumatoid arthritis — adults", "Intra-articular [FDA]", "ra-adult"], ["Osteoarthritis — adults", "Intra-articular [FDA]", "oa-adult"]],
  forms: ["Cream and ointment 0.025–0.5%; dental paste 0.1%; injectable suspension 40 mg/mL (IM or intra-articular) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: triamcinolone acetonide 0.1% cream (NEMF), 0.1% ointment, 0.1% oral paste and 40 mg/mL injection (NEML 2025) [BT-NEML]."],
  moa: "Glucocorticoid: anti-inflammatory and immunosuppressive [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Depot injection acts for weeks [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Topical: steroid-responsive dermatoses [BT-NEML].", "Oral paste: oral ulcers [BT-NEML].", "Injection: systemic steroid-responsive disease (IM) and arthritis, bursitis (intra-articular) [FDA]."], paed: ["Topical with care; injection — see label [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Cream / ointment 0.1% (Bhutan NEMF)", "Apply thinly every 8–12 h, reducing as the skin improves [BT-NEML]."], ["Oral paste 0.1%", "Apply a thin film to the ulcer, usually at bedtime and 2–3 times daily after meals [UNVERIFIED-KNOWLEDGE]."], ["Intra-articular (40 mg/mL)", "Initial 2.5–5 mg for small joints and 5–15 mg for large joints; up to 10 mg (small) or 40 mg (large); total up to 80 mg across several joints [FDA]."], ["Intramuscular", "Initial 40–80 mg into the gluteal muscle depending on response; some need 20 mg or less [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Topical: thin film, shortest time [UNVERIFIED-KNOWLEDGE].", "Injection: not in neonates (benzyl alcohol) [FDA]."], transition: "Adult dosing in older children.", calcNote: "Joint size and disease guide the injected dose — no calculator." },
  adj: { renal: N5_NEP, hepatic: N5_NEP, pregnancy: "Category C (topical, Bhutan NEMF) [BT-NEML].", other: "Injection: never IV, intradermal, intraocular, epidural or intrathecal [FDA]. Topical: no occlusion; not on infected skin [BT-NEML]." },
  tox: { human: "Long use: HPA suppression, Cushing's features [BT-NEML] [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Taper; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to any component [FDA].", "IM use in idiopathic thrombocytopenic purpura [FDA].", "Topical: fungal, bacterial or viral skin infection; eyes (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Topical: skin atrophy, striae, acneiform lesions, pigment change [BT-NEML].", "Injection: local pain, skin atrophy at the site, transient glucose rise [UNVERIFIED-KNOWLEDGE]."], serious: ["HPA-axis suppression [BT-NEML]", "Serious neurological events after epidural injection [FDA]", "Joint infection after intra-articular injection [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Glucose in diabetics after injection; skin with long topical use [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: triamcinolone acetonide 0.1% ointment, 0.1% oral paste, 40 mg/mL injection [BT-NEML].", strengths: "0.1%; 40 mg/mL.", stg: "Dermatology, dentistry and joint injection [BT-NEML]." },
  calc: [],
  sources: [["FDA", "Kenalog-40 (triamcinolone acetonide injectable suspension) — FDA label (DailyMed)", N5_DM("1ed85825-cd03-4b5b-9c9a-946653b5f71a")], N5_BT],
  dose: { tagline: "Steroid cream, oral paste and depot injection for joints and systemic disease.",
    cautionTitle: "Use with care",
    caution: "Injection is for IM or intra-articular use only — never IV, epidural, intrathecal or into the eye; contains benzyl alcohol (not for neonates) [FDA].",
    adult: [{ ind: "Joint injection", text: "2.5–5 mg small joints, 5–15 mg large joints (up to 40 mg).", bt: "Bhutan NEML: 40 mg/mL injection." }, { ind: "Dermatoses (0.1%)", text: "Thin film every 8–12 h." }],
    child: [{ ind: "Children", text: "Topical with care; injection per specialist." }] }
});

FDB_M("chloramphenicol", {
  inn: "Chloramphenicol", atc: "J01BA01 (systemic); S01AA01 (eye)", cls: "Amphenicol antibacterial",
  linked: [["Meningitis — adults", "Where safer drugs unavailable [BT-NEML]", "meningitis-adult"], ["Enteric fever — adults", "Typhoid (second line) [BT-NEML]", "enteric-adult"], ["Red eye — adults", "Bacterial conjunctivitis (eye drops) [BT-NEML]", "redeye-adult"], ["Red eye — children", "[BT-NEML]", "redeye-child"]],
  forms: ["Powder for IV injection 1 g (as sodium succinate) [FDA].", "Eye drops 0.4–0.5%; eye ointment 1% [BT-NEML] [UNVERIFIED-KNOWLEDGE].", "Bhutan: chloramphenicol 1 g injection (NRH/RRH/DH); 0.4% eye drops and 1% eye ointment (NRH/RRH/DH/PHC) [BT-NEML]."],
  moa: "Binds the 50S ribosomal subunit; bacteriostatic [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic glucuronidation — immature in neonates (grey baby syndrome) [FDA]."],
  ind: { adult: ["Serious infections when less dangerous drugs are ineffective or contraindicated: typhoid, meningitis (H. influenzae), rickettsial infections [FDA] [BT-NEML].", "Bacterial eye infections (drops, ointment) [BT-NEML]."], paed: ["Same; neonates need lower doses [FDA]."] },
  adult: [["IV (FDA)", "50 mg/kg/day in 4 doses every 6 h; up to 100 mg/kg/day for moderately resistant organisms, reduced as soon as possible [FDA]."], ["IV (Bhutan NEMF)", "12.5 mg/kg every 6 h; may double in severe infection (septicaemia, meningitis) [BT-NEML]."], ["Eye drops 0.4%", "1–2 drops every 2 hours, reducing once controlled; continue 48 hours after the eye is white [BT-NEML]."], ["Eye ointment 1%", "Apply 3–4 times daily [BT-NEML]."]],
  paed: { tiers: ["Children: 50 mg/kg/day in 4 doses; up to 100 mg/kg/day in meningitis or bacteraemia, reduced as soon as possible [FDA].", "Neonates (immature metabolism): 25 mg/kg/day in 4 doses; higher only with level monitoring [FDA].", "Eye: same as adults [BT-NEML]."], transition: "Same per-kg dose.", calcNote: "Neonatal doses only with blood-level monitoring." },
  adj: { renal: "Avoid in severe impairment unless no alternative [BT-NEML].", hepatic: "Reduce dose; avoid if possible (marrow toxicity) [BT-NEML] [FDA].", pregnancy: "Avoid near term (grey baby syndrome) [UNVERIFIED-KNOWLEDGE]; contraindicated in breastfeeding (Bhutan NEMF) [BT-NEML].", other: "G6PD deficiency: haemolysis [BT-NEML]. Interacts with phenytoin, warfarin, sulfonylureas [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Grey baby syndrome in neonates: abdominal distension, vomiting, cyanosis, circulatory collapse [FDA].", animal: N5_LD, manage: "Stop; supportive; exchange transfusion or charcoal haemoperfusion in neonates [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity or toxic reaction to chloramphenicol [FDA] [UNVERIFIED-KNOWLEDGE].", "Trivial infections or prophylaxis [FDA].", "Acute porphyria; breastfeeding (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Nausea, vomiting, diarrhoea; eye — transient burning [BT-NEML]."], serious: ["Aplastic anaemia (dose-unrelated, may progress to leukaemia) [FDA]", "Dose-related marrow suppression [FDA]", "Grey baby syndrome [FDA]", "Optic and peripheral neuritis [BT-NEML]"] },
  monitor: ["Full blood count before and every 2 days during treatment; plasma levels in neonates and hepatic impairment [FDA] [BT-NEML]."],
  local: { neml: "On the Bhutan NEML 2025: chloramphenicol 1 g injection; 0.4% eye drops; 1% eye ointment [BT-NEML].", strengths: "1 g vial; 0.4% drops; 1% ointment.", stg: "Typhoid and meningitis where safer drugs are unavailable; bacterial conjunctivitis [BT-NEML]." },
  calc: [
    { drug: "chloramphenicol", indication_id: "iv", label: "IV — 12.5 mg/kg every 6 h (50 mg/kg/day)", route: "IV", population: { min_age_months: 1, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 12.5, unit: "mg", per: "dose", value_max: 25 }, interval_h: 6, caps: { max_single: 1000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "vial", strength: 1000, unit: "mg/vial" }], rounding: "Vial fractions", renal: [], renal_note: "Severe renal impairment: avoid unless no alternative [BT-NEML]", flags: ["Upper value (25 mg/kg) only for severe infection — reduce as soon as possible", "Blood count every 2 days"], sources: ["FDA", "BT-NEML"] },
    { drug: "chloramphenicol", indication_id: "neo", label: "Neonate — 25 mg/kg/day in 4 doses (level-guided)", route: "IV", population: { min_age_months: 0, max_age_months: 1, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 25, unit: "mg", per: "day" }, interval_h: 6, divided_doses: 4, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 1000, unit: "mg/vial" }], rounding: "Dilute per label", renal: [], flags: ["Grey baby syndrome risk — monitor plasma levels"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Chloramphenicol sodium succinate for injection — FDA label (DailyMed)", N5_DM("aed29594-211d-49ef-813f-131975a8d0e3")], N5_BT],
  dose: { tagline: "Reserve antibiotic for typhoid and meningitis — aplastic anaemia risk; eye drops for conjunctivitis.",
    boxedTitle: "Warning",
    boxed: "Serious and fatal blood dyscrasias (aplastic anemia, hypoplastic anemia, thrombocytopenia and granulocytopenia) are known to occur after the administration of chloramphenicol. In addition, there have been reports of aplastic anemia attributed to chloramphenicol which later terminated in leukemia. Blood dyscrasias have occurred after both short-term and prolonged therapy with this drug. Chloramphenicol must not be used when less potentially dangerous agents will be effective, as described in the INDICATIONS AND USAGE section. It must not be used in the treatment of trivial infections or where it is not indicated, as in colds, influenza, infections of the throat; or as a prophylactic agent to prevent bacterial infections. Precautions: It is essential that adequate blood studies be made during treatment with the drug. While blood studies may detect early peripheral blood changes, such as leukopenia, reticulocytopenia, or granulocytopenia, before they become irreversible, such studies cannot be relied on to detect bone marrow depression prior to development of aplastic anemia. To facilitate appropriate studies and observation during therapy, it is desirable that patients be hospitalized [FDA].",
    adult: [{ ind: "Serious infection (IV)", text: "12.5 mg/kg every 6 h (up to 25 mg/kg in severe infection).", calc: ["iv"], bt: "Bhutan NEML: 1 g vial." }, { ind: "Bacterial conjunctivitis", text: "0.4% drops every 2 h, reducing; or 1% ointment 3–4 times daily.", bt: "Bhutan NEML: eye drops and ointment." }],
    child: [{ ind: "Serious infection (IV)", text: "12.5 mg/kg every 6 h; neonates 25 mg/kg/day in 4 doses with levels.", calc: ["iv", "neo"] }, { ind: "Eye", text: "Same as adults." }] }
});

FDB_M("epoetin-alfa", {
  inn: "Epoetin alfa (erythropoietin)", atc: "B03XA01", cls: "Erythropoiesis-stimulating agent (ESA)",
  linked: [["Chronic kidney disease — adults", "Anaemia of CKD [FDA] [BT-NEML]", "ckd-adult"], ["Anaemia — adults", "[FDA]", "anaemia-adult"]],
  forms: ["Injection 2,000–40,000 units/mL (IV or SC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: erythropoietin 2,000 IU injection (0.5 mL) (NRH/RRH) [BT-NEML]."],
  moa: "Stimulates red cell production in the bone marrow [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [N5_NEP],
  ind: { adult: ["Anaemia of CKD (on or not on dialysis); anaemia from zidovudine in HIV; anaemia from myelosuppressive chemotherapy; reduction of transfusions in elective surgery [FDA] [BT-NEML]."], paed: ["Anaemia of CKD from 1 month; chemotherapy anaemia from 5 years [FDA]."] },
  adult: [["CKD", "Start 50–100 units/kg three times weekly (IV for haemodialysis; IV or SC otherwise); start when Hb is under 10 g/dL [FDA] [BT-NEML]."], ["Titration (Bhutan NEMF)", "Reduce by 25% if Hb approaches 12 g/dL or rises more than 1 g/dL in 2 weeks; increase by 25% if Hb is under 10 and has not risen 1 g/dL after 4 weeks; never above 12 g/dL [BT-NEML]."], ["Chemotherapy anaemia", "150 units/kg three times weekly or 40,000 units once weekly SC [FDA] [BT-NEML]."], ["Zidovudine (HIV)", "100 units/kg three times weekly [FDA]."], ["Surgery", "300 units/kg daily for 15 days, or 600 units/kg weekly [FDA]."]],
  paed: { tiers: ["CKD: 50 units/kg three times weekly [FDA].", "Chemotherapy, 5 years and older: 600 units/kg IV weekly [FDA]."], transition: "Adult per-kg dose.", calcNote: "Units/kg, three times weekly." },
  adj: { renal: "Indication; check iron stores first [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: N5_NEP, pregnancy: N5_NEP, other: "Correct iron deficiency first; control blood pressure [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Polycythaemia, hypertension [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Withhold; phlebotomy if needed [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Uncontrolled hypertension [FDA] [BT-NEML].", "Pure red cell aplasia after any ESA [FDA] [BT-NEML].", "Serious allergic reaction to epoetin; hypersensitivity to human albumin [FDA] [BT-NEML].", "Patients unable to receive thromboprophylaxis (surgery use, Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Hypertension, headache, arthralgia, fever, nausea, injection-site reactions [FDA] [BT-NEML]."], serious: ["Death, MI, stroke, venous thromboembolism, vascular-access thrombosis with high Hb targets [FDA]", "Tumour progression in cancer [FDA]", "Seizures [FDA] [UNVERIFIED-KNOWLEDGE]", "Pure red cell aplasia [FDA]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Hb weekly after starting or changing dose until stable, then monthly; blood pressure; iron studies [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: erythropoietin 2,000 IU/0.5 mL injection (NRH/RRH) [BT-NEML].", strengths: "2,000 IU in 0.5 mL.", stg: "Anaemia of CKD — nephrology [BT-NEML]." },
  calc: [
    { drug: "epoetin-alfa", indication_id: "ckd", label: "Anaemia of CKD — start 50–100 units/kg three times weekly", route: "IV/SC", population: N5_ADULT, basis: "mg_per_kg", dose: { value: 50, unit: "units", per: "dose", value_max: 100 }, interval_h: 56, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 4000, unit: "units/mL" }], rounding: "0.05 mL", renal: [], flags: ["Start when Hb is under 10 g/dL", "Reduce 25% if Hb nears 12 or rises over 1 g/dL in 2 weeks"], sources: ["FDA", "BT-NEML"] },
    { drug: "epoetin-alfa", indication_id: "ckd_child", label: "Anaemia of CKD, child — 50 units/kg three times weekly", route: "IV/SC", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "units", per: "dose" }, interval_h: 56, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 4000, unit: "units/mL" }], rounding: "0.05 mL", renal: [], flags: ["Individualise the maintenance dose"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Epogen (epoetin alfa) — FDA label (DailyMed)", N5_DM("1f2d0b28-9cc5-4523-80b8-637fdaf3f7a5")], N5_BT],
  dose: { tagline: "ESA for anaemia of CKD — lowest dose to avoid transfusion; never target Hb above 11–12.",
    boxedTitle: "ESAs increase the risk of death, myocardial infarction, stroke, venous thromboembolism, thrombosis of vascular access and tumor progression or recurrence",
    boxed: "Chronic Kidney Disease: In controlled trials, patients with chronic kidney disease (CKD) experienced greater risks for death, serious adverse cardiovascular reactions, and stroke when administered erythropoiesis-stimulating agents (ESAs) to target a hemoglobin level of greater than 11 g/dL. No trial has identified a hemoglobin target level, E SA dose, or dosing strategy that does not increase these risks. Use the lowest Epogen dose sufficient to reduce the need for red blood cell (RBC) transfusions. Cancer: ESAs shortened overall survival and/or increased the risk of tumor progression or recurrence in clinical studies of patients with breast, non-small cell lung, head and neck, lymphoid, and cervical cancers. To decrease these risks, as well as the risk of serious cardiovascular and thromboembolic reactions, use the lowest dose needed to avoid RBC transfusions. Use ESAs only for anemia from myelosuppressive chemotherapy. ESAs are not indicated for patients receiving myelosuppressive chemotherapy when the anticipated outcome is cure. Discontinue following the completion of a chemotherapy course. Perisurgery: Due to increased risk of Deep Venous Thrombosis (DVT), DVT prophylaxis is recommended [FDA].",
    adult: [{ ind: "Anaemia of CKD", text: "50–100 units/kg three times weekly; adjust by 25% steps.", calc: ["ckd"], bt: "Bhutan NEML: 2,000 IU/0.5 mL." }, { ind: "Chemotherapy anaemia", text: "150 units/kg three times weekly or 40,000 units weekly SC." }],
    child: [{ ind: "Anaemia of CKD", text: "50 units/kg three times weekly.", calc: ["ckd_child"] }] }
});

FDB_M("betahistine", {
  inn: "Betahistine dihydrochloride", atc: "N07CA01", cls: "Histamine analogue (anti-vertigo)",
  linked: [],
  forms: ["Tablets 8, 16, 24 mg (not marketed in the US — no FDA label) [UNVERIFIED-KNOWLEDGE] [NEP].", "Bhutan: betahistine dihydrochloride 16 mg tablet (NRH/RRH/DH) [BT-NEML]."],
  moa: "Weak H1 agonist and H3 antagonist; thought to improve inner-ear microcirculation [UNVERIFIED-KNOWLEDGE].",
  pk: [N5_NEP],
  ind: { adult: ["Vertigo, tinnitus and hearing loss of Ménière's disease [BT-NEML]."], paed: ["Not recommended in children [BT-NEML]."] },
  adult: [["Ménière's disease", "Start 16 mg three times daily, preferably with food; maintenance 32–48 mg daily [BT-NEML]."]],
  paed: { tiers: ["Not recommended [BT-NEML]."], transition: "Adults only.", calcNote: "Fixed adult dose." },
  adj: { renal: N5_NEP, hepatic: N5_NEP, pregnancy: "Caution in pregnancy and breastfeeding [BT-NEML].", other: "Caution in asthma and history of peptic ulcer [BT-NEML]." },
  tox: { human: N5_NEP, animal: N5_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Phaeochromocytoma [BT-NEML]."],
  ae: { common: ["GI upset, headache, rash, pruritus [BT-NEML]."], serious: ["Hypersensitivity [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Symptom diary [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: betahistine dihydrochloride 16 mg tablet [BT-NEML].", strengths: "16 mg.", stg: "Ménière's disease [BT-NEML]." },
  calc: [
    { drug: "betahistine", indication_id: "meniere", label: "Ménière's disease — 16 mg three times daily", route: "PO", population: N5_ADULT, basis: "fixed", dose: { value: 16, unit: "mg", per: "dose" }, interval_h: 8, caps: { max_daily: 48, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 16, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["With food", "Maintenance 32–48 mg/day"], sources: ["BT-NEML"] }
  ],
  sources: [N5_BT],
  dose: { tagline: "Anti-vertigo tablet for Ménière's disease (Bhutan formulary).",
    adult: [{ ind: "Ménière's disease", text: "16 mg three times daily with food; maintenance 32–48 mg/day.", calc: ["meniere"], bt: "Bhutan NEML: 16 mg tablet." }],
    child: [{ ind: "Children", text: "Not recommended." }] }
});

FDB_M("cinnarizine", {
  inn: "Cinnarizine", atc: "N07CA02", cls: "Antihistamine / calcium-channel blocker (anti-vertigo, motion sickness)",
  linked: [],
  forms: ["Tablet 15 mg, 25 mg (not marketed in the US — no FDA label) [UNVERIFIED-KNOWLEDGE] [NEP].", "Bhutan: cinnarizine 15 mg tablet (NRH/RRH) [BT-NEML]."],
  moa: "H1 antihistamine with calcium-channel blocking action on vestibular cells [UNVERIFIED-KNOWLEDGE].",
  pk: [N5_NEP],
  ind: { adult: ["Vestibular disorders (vertigo, tinnitus, nausea, vomiting) in Ménière's disease; motion sickness [BT-NEML]."], paed: ["5 years and older [BT-NEML]."] },
  adult: [["Ménière's / vestibular disorders", "30 mg three times daily [BT-NEML]."], ["Motion sickness", "30 mg 2 hours before travel, then 15 mg every 8 hours during the journey if needed [BT-NEML]."]],
  paed: { tiers: ["12–17 years: adult doses [BT-NEML].", "5–11 years: vestibular 15 mg three times daily; motion sickness 15 mg 2 hours before travel, then 7.5 mg every 8 hours [BT-NEML]."], transition: "Adult dose from 12 years.", calcNote: "Fixed age-band doses." },
  adj: { renal: N5_NEP, hepatic: N5_NEP, pregnancy: "Avoid in pregnancy and breastfeeding [BT-NEML].", other: "Drowsiness — worse with alcohol; affects driving [BT-NEML]. Caution in epilepsy, glaucoma, Parkinson's disease, prostatic hypertrophy, urinary retention [BT-NEML]." },
  tox: { human: "Drowsiness, extrapyramidal symptoms [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Acute porphyria [BT-NEML]."],
  ae: { common: ["Drowsiness, GI discomfort, nausea, weight gain, sweating [BT-NEML]."], serious: ["Extrapyramidal symptoms and parkinsonism with long use in the elderly [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Sedation; movement disorders in the elderly [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: cinnarizine 15 mg tablet (NRH/RRH) [BT-NEML].", strengths: "15 mg.", stg: "Vertigo and motion sickness [BT-NEML]." },
  calc: [
    { drug: "cinnarizine", indication_id: "vest", label: "Vestibular disorders, 12 years and over — 30 mg three times daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 8, caps: { max_single: 30, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 15, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Drowsiness — no alcohol"], sources: ["BT-NEML"] },
    { drug: "cinnarizine", indication_id: "vest_child", label: "Vestibular disorders, 5–11 years — 15 mg three times daily", route: "PO", population: { min_age_months: 60, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 8, caps: { max_single: 15, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 15, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Motion sickness: 15 mg 2 h before travel, then 7.5 mg every 8 h"], sources: ["BT-NEML"] }
  ],
  sources: [N5_BT],
  dose: { tagline: "Sedating anti-vertigo and motion-sickness tablet (Bhutan formulary).",
    adult: [{ ind: "Vertigo, Ménière's", text: "30 mg three times daily.", calc: ["vest"], bt: "Bhutan NEML: 15 mg tablet." }, { ind: "Motion sickness", text: "30 mg 2 h before travel, then 15 mg every 8 h." }],
    child: [{ ind: "5–11 years", text: "15 mg three times daily (motion sickness 15 mg, then 7.5 mg every 8 h).", calc: ["vest_child"] }, { ind: "12–17 years", text: "Adult doses.", calc: ["vest"] }] }
});

FDB_M("ethionamide", {
  inn: "Ethionamide", atc: "J04AD03", cls: "Thioamide anti-tuberculosis drug (second line)",
  linked: [["Tuberculosis — adults", "DR-TB (Eto variant) [BT-TB]", "tb-adult"], ["Tuberculosis — children", "DR-TB [BT-NEML]", "tb-child"]],
  forms: ["Tablet 250 mg (US product no longer has a current FDA label) [NEP] [UNVERIFIED-KNOWLEDGE].", "Bhutan: ethionamide 250 mg tablet (NRH) [BT-NEML]."],
  moa: "Prodrug activated by EthA; inhibits mycolic acid synthesis (InhA) [UNVERIFIED-KNOWLEDGE].",
  pk: [N5_NEP],
  ind: { adult: ["Drug-resistant TB, in combination (Bhutan: Eto variant of the shorter regimen) [BT-NEML] [BT-TB]."], paed: ["DR-TB [BT-NEML]."] },
  adult: [["DR-TB (over 14 years)", "15–20 mg/kg/day, maximum 1 g/day [BT-NEML]."], ["CrCl under 30", "250–500 mg/day [BT-NEML]."], ["Pregnancy", "Not used — Bhutan uses the linezolid variant in pregnancy [BT-TB]."]],
  paed: { tiers: ["15–20 mg/kg/day [BT-NEML]."], transition: "Same per-kg dose.", calcNote: "Programme drug — national TB guideline." },
  adj: { renal: "CrCl under 30: 250–500 mg/day [BT-NEML].", hepatic: "Contraindicated in severe hepatic dysfunction [BT-NEML].", pregnancy: "Avoided in Bhutan DR-TB regimens in pregnancy [BT-TB].", other: "Worsens glycaemic control; hypothyroidism (especially with PAS) — check TSH [BT-TB] [UNVERIFIED-KNOWLEDGE]. Take with food or at bedtime to reduce GI upset [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: N5_NEP, animal: N5_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe hepatic dysfunction [BT-NEML]."],
  ae: { common: ["Nausea, vomiting, metallic taste, diarrhoea, dizziness, postural hypotension [BT-NEML]."], serious: ["Hepatitis [BT-NEML]", "Depression and psychiatric symptoms [BT-NEML]", "Hypothyroidism [UNVERIFIED-KNOWLEDGE]", "Peripheral neuropathy (give pyridoxine) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, glucose, TSH; mood [BT-TB] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: ethionamide 250 mg tablet (NRH) [BT-NEML].", strengths: "250 mg.", stg: "Bhutan TB guidelines 2024: Eto variant of the shorter all-oral DR-TB regimen [BT-TB]." },
  calc: [
    { drug: "ethionamide", indication_id: "drtb", label: "DR-TB — 15–20 mg/kg/day (max 1 g)", route: "PO", population: { min_age_months: 0, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "day", value_max: 20 }, interval_h: 24, divided_doses: 1, caps: { max_daily: 1000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Quarter tablets", renal: [], renal_note: "CrCl under 30: 250–500 mg/day (Bhutan NEMF) [BT-NEML]", flags: ["National TB programme only", "Pyridoxine with it"], sources: ["BT-NEML", "BT-TB"] }
  ],
  sources: [N5_BT, ["BT-TB", "Integrated National Guidelines for Management of TB in Bhutan, 8th ed. (March 2024 update) and National Guidelines for Management of Pediatric TB, 2024 update — NTCP, Ministry of Health", ""]],
  dose: { tagline: "Second-line DR-TB drug — GI upset, thyroid and glucose effects.",
    adult: [{ ind: "Drug-resistant TB", text: "15–20 mg/kg/day, maximum 1 g; CrCl under 30: 250–500 mg/day.", calc: ["drtb"], bt: "Bhutan NEML: 250 mg tablet." }],
    child: [{ ind: "Drug-resistant TB", text: "15–20 mg/kg/day.", calc: ["drtb"] }] }
});

FDB_M("lopinavir-ritonavir", {
  inn: "Lopinavir + ritonavir (LPV/r)", atc: "J05AR10", cls: "Boosted HIV protease inhibitor",
  linked: [["HIV — adults", "Second line [BT-HIV]", "hiv-adult"], ["HIV — children", "Infants and second line [BT-HIV]", "hiv-child"]],
  forms: ["Tablets 200/50 mg and 100/25 mg; oral solution 80/20 mg per mL (contains alcohol and propylene glycol) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: LPV/r 200/50 mg tablet; 80/20 mg/mL syrup, 160 mL (NRH/RRH) [BT-NEML]."],
  moa: "Lopinavir inhibits HIV protease; low-dose ritonavir boosts lopinavir by inhibiting CYP3A [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Strong CYP3A inhibitor — many serious interactions [FDA]."],
  ind: { adult: ["HIV-1, with other antiretrovirals (second line in Bhutan) [FDA] [BT-HIV]."], paed: ["From 14 days (FDA; solution not before 42 weeks postmenstrual age) [FDA]."] },
  adult: [["HIV", "400/100 mg twice daily (or 800/200 mg once daily in selected adults — not in pregnancy or with inducers) [FDA] [BT-HIV]."], ["With efavirenz, nevirapine or nelfinavir", "Dose increase per label [FDA]."]],
  paed: { tiers: ["Bhutan 2024 (lopinavir part, twice daily): 7 to under 15 kg 12 mg/kg; 15–40 kg 10 mg/kg; over 40 kg adult dose [BT-HIV].", "No once-daily dosing in children [FDA]."], transition: "Over 40 kg: adult dose.", calcNote: "Dose is the lopinavir component." },
  adj: { renal: "Use with caution [BT-NEML].", hepatic: "Use with caution [BT-NEML].", pregnancy: "Twice daily only in pregnancy [FDA].", other: "Contraindicated with drugs highly dependent on CYP3A (e.g. simvastatin, ergots, sildenafil for PAH, midazolam oral) and with strong inducers (rifampicin) [FDA] [BT-NEML]." },
  tox: { human: N5_NEP, animal: N5_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Clinically significant hypersensitivity (TEN, SJS, erythema multiforme, urticaria, angioedema) to any ingredient including ritonavir [FDA].", "Drugs highly dependent on CYP3A for clearance; strong CYP3A inducers [FDA] [BT-NEML]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, rash, headache, dyslipidaemia, raised transaminases [FDA] [BT-NEML]."], serious: ["Pancreatitis [FDA] [BT-NEML]", "Hepatotoxicity [FDA]", "PR and QT prolongation [FDA]", "Toxicity in premature neonates from the oral solution [FDA]", "Diabetes, fat redistribution [BT-NEML]"] },
  monitor: ["Lipids, glucose, liver tests; ECG if conduction disease [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: LPV/r 200/50 mg tablet; 80/20 mg per mL syrup [BT-NEML].", strengths: "200/50 mg; 80/20 mg/mL.", stg: "Bhutan HIV guidelines 2024: AZT + 3TC + LPV/r second line; pregnancy alternatives [BT-HIV]." },
  calc: [
    { drug: "lopinavir-ritonavir", indication_id: "adult", label: "HIV adult — 400/100 mg twice daily", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 40.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 400, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab (200/50)", strength: 200, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [], flags: ["Dose is the lopinavir part", "Swallow tablets whole"], sources: ["FDA", "BT-HIV"] },
    { drug: "lopinavir-ritonavir", indication_id: "c7", label: "Child 7 to under 15 kg — 12 mg/kg twice daily (lopinavir)", route: "PO", population: { min_age_months: 1, max_age_months: null, min_weight_kg: 7, max_weight_kg: 15 }, basis: "mg_per_kg", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: 12, caps: {}, weight_basis: "actual", formulations: [{ form: "syrup (80/20 per mL)", strength: 80, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Bhutan 2024 dose", "Solution contains alcohol — not before 42 weeks postmenstrual and 14 days of age"], sources: ["BT-HIV"] },
    { drug: "lopinavir-ritonavir", indication_id: "c15", label: "Child 15–40 kg — 10 mg/kg twice daily (lopinavir)", route: "PO", population: { min_age_months: 1, max_age_months: null, min_weight_kg: 15, max_weight_kg: 40.0001 }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 12, caps: { max_single: 400, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "syrup (80/20 per mL)", strength: 80, unit: "mg/mL" }, { form: "tab (200/50)", strength: 200, unit: "mg/tab", whole: true }], rounding: "0.1 mL", renal: [], flags: ["Bhutan 2024 dose"], sources: ["BT-HIV"] }
  ],
  sources: [["FDA", "Kaletra (lopinavir/ritonavir) — FDA label (DailyMed)", N5_DM("8290add3-4449-4e58-6c97-8fe1eec972e3")], ["BT-HIV", "National Guidelines on Treatment and Management of HIV & AIDS 2024, Bhutan (Table 7)", ""], N5_BT],
  dose: { tagline: "Boosted protease inhibitor for second-line HIV — check every interaction.",
    adult: [{ ind: "HIV (second line)", text: "400/100 mg twice daily.", calc: ["adult"], bt: "Bhutan NEML: 200/50 mg tablet." }],
    child: [{ ind: "HIV by weight", text: "12 mg/kg (7–15 kg) or 10 mg/kg (15–40 kg) twice daily, as lopinavir.", calc: ["c7", "c15"] }] }
});

FDB_M("ethinylestradiol", {
  inn: "Ethinylestradiol", atc: "G03CA01 (alone); G03AA07 (with levonorgestrel)", cls: "Synthetic oestrogen",
  linked: [],
  forms: ["Tablet 50 microgram (single-ingredient products are not marketed in the US) [UNVERIFIED-KNOWLEDGE].", "Combined pill ethinylestradiol 30 microgram + levonorgestrel 150 microgram — see levonorgestrel [BT-NEML].", "Bhutan: ethinyloestradiol 50 microgram tablet (NRH/RRH/DH/PHC); ethinyloestradiol 0.03 mg + levonorgestrel combined tablet [BT-NEML]."],
  moa: "Oestrogen-receptor agonist [UNVERIFIED-KNOWLEDGE].",
  pk: [N5_NEP],
  ind: { adult: ["Menstrual disorders (with a progestogen); female hypogonadism [BT-NEML].", "Contraception (combined pill) [BT-NEML]."], paed: ["Adolescent hypogonadism — specialist [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Menstrual disorders", "20–50 microgram daily from day 5 to 25 of each cycle, with a progestogen throughout or from day 15 to 25 [BT-NEML]."], ["Female hypogonadism", "10–50 microgram daily, usually cyclical; later add a progestogen [BT-NEML]."], ["Primary amenorrhoea", "The combined oral contraceptive may be more convenient [BT-NEML]."]],
  paed: { tiers: ["Specialist only [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Microgram doses — no calculator." },
  adj: { renal: "Caution in renal disease [BT-NEML].", hepatic: "Avoid [BT-NEML].", pregnancy: "Contraindicated (category X); avoid in breastfeeding until weaning or 6 months [BT-NEML].", other: "Thromboembolism risk, higher in smokers, over 35 and with obesity [BT-NEML]." },
  tox: { human: "Nausea, vomiting, withdrawal bleeding [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Oestrogen-dependent cancer [BT-NEML].", "History of thromboembolism [BT-NEML].", "Hepatic impairment [BT-NEML].", "Endometriosis; undiagnosed vaginal bleeding [BT-NEML]."],
  ae: { common: ["Nausea, vomiting, headache, breast tenderness, weight gain [BT-NEML]."], serious: ["Venous thromboembolism [BT-NEML]", "Endometrial cancer with unopposed long use [BT-NEML]"] },
  monitor: ["Blood pressure; breakthrough bleeding [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: ethinyloestradiol 50 microgram tablet; ethinyloestradiol + levonorgestrel combined pill [BT-NEML].", strengths: "50 microgram.", stg: "Gynaecology — with a progestogen [BT-NEML]." },
  calc: [],
  sources: [N5_BT],
  dose: { tagline: "Oestrogen tablet for menstrual disorders and hypogonadism — always with a progestogen if the uterus is present.",
    adult: [{ ind: "Menstrual disorders", text: "20–50 microgram daily, days 5–25, with a progestogen.", bt: "Bhutan NEML: 50 microgram tablet." }],
    child: [{ ind: "Children", text: "Specialist only." }] }
});

FDB_M("pentoxifylline", {
  inn: "Pentoxifylline", atc: "C04AD03", cls: "Methylxanthine haemorheologic agent",
  linked: [["Peripheral arterial disease — adults", "Intermittent claudication [FDA] [BT-NEML]", "pad-adult"]],
  forms: ["Extended-release tablet 400 mg [FDA].", "Bhutan: pentoxifylline 400 mg tablet (NRH) [BT-NEML]."],
  moa: "Improves red-cell deformability and lowers blood viscosity [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal excretion of metabolites — reduce in severe renal impairment [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Intermittent claudication from chronic occlusive arterial disease [FDA] [BT-NEML].", "Venous leg ulcers (Bhutan NEMF) [BT-NEML]."], paed: ["Not established [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Claudication / venous ulcers", "400 mg every 8–12 h with meals; at least 8 weeks for full effect [BT-NEML] [FDA]."], ["CrCl under 30", "400 mg once daily (Bhutan NEMF) [BT-NEML]."], ["Severe hepatic impairment", "Reduce the dose [BT-NEML]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "Adults only.", calcNote: "Adult fixed dose." },
  adj: { renal: "CrCl under 30: 400 mg/day [BT-NEML].", hepatic: "Reduce in severe impairment [BT-NEML].", pregnancy: "Category C; avoid in breastfeeding [BT-NEML].", other: "Bleeding risk with anticoagulants, antiplatelets and NSAIDs; monitor INR with warfarin; raises theophylline levels [FDA]." },
  tox: { human: "Flushing, hypotension, convulsions, somnolence, arrhythmias [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Recent cerebral or retinal haemorrhage [FDA] [BT-NEML].", "Intolerance to pentoxifylline or methylxanthines (caffeine, theophylline) [FDA].", "Acute myocardial infarction; porphyria; breastfeeding (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Nausea, dyspepsia, dizziness, headache, flushing [FDA] [BT-NEML]."], serious: ["Bleeding [FDA]", "Angina, arrhythmia, hypotension [BT-NEML]", "Anaphylaxis [FDA]"] },
  monitor: ["Bleeding; INR with warfarin [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: pentoxifylline 400 mg tablet [BT-NEML].", strengths: "400 mg.", stg: "Peripheral vascular disease [BT-NEML]." },
  calc: [
    { drug: "pentoxifylline", indication_id: "pad", label: "Claudication — 400 mg every 8 h with meals", route: "PO", population: N5_ADULT, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 8, caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "ER tab", strength: 400, unit: "mg/tab", whole: true }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "extend_interval", factor: 24 }], renal_note: "CrCl under 30: 400 mg once daily [BT-NEML]", flags: ["With meals", "Or every 12 h if not tolerated"], sources: ["FDA", "BT-NEML"] }
  ],
  sources: [["FDA", "Pentoxifylline extended-release tablets — FDA label (DailyMed)", N5_DM("2141f08f-1623-4c88-a157-8dc4aebd3bda")], N5_BT],
  dose: { tagline: "For intermittent claudication — 400 mg with meals for at least 8 weeks.",
    adult: [{ ind: "Claudication, venous ulcers", text: "400 mg every 8–12 h with meals; CrCl under 30: once daily.", calc: ["pad"], bt: "Bhutan NEML: 400 mg tablet." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("pyridoxine", {
  inn: "Pyridoxine (vitamin B6)", atc: "A11HA02", cls: "Vitamin",
  linked: [["Tuberculosis — adults", "With isoniazid [BT-TB]", "tb-adult"], ["Tuberculosis — children", "With isoniazid [BT-TB]", "tb-child"]],
  forms: ["Tablets 10–100 mg; injection 100 mg/mL [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: pyridoxine 25 mg tablet (NRH/RRH/DH) [BT-NEML]."],
  moa: "Coenzyme (pyridoxal phosphate) in amino-acid metabolism [UNVERIFIED-KNOWLEDGE].",
  pk: [N5_NEP],
  ind: { adult: ["Deficiency; prevention and treatment of isoniazid neuropathy [BT-NEML] [BT-TB].", "Isoniazid overdose (IV, gram-for-gram) [UNVERIFIED-KNOWLEDGE]."], paed: ["With isoniazid in at-risk children [BT-TB]."] },
  adult: [["Deficiency", "20–50 mg one to three times daily [BT-NEML]."], ["Isoniazid neuropathy — prevention", "10–20 mg daily (Bhutan TB guideline: 25 mg for those at risk, 12 h apart from TB drugs) [BT-NEML] [BT-TB]."], ["Isoniazid neuropathy — treatment", "50 mg three times daily [BT-NEML]."]],
  paed: { tiers: ["Isoniazid prophylaxis: per Bhutan TB guideline for at-risk children [BT-TB] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult dose.", calcNote: "Fixed doses." },
  adj: { renal: N5_NEP, hepatic: N5_NEP, pregnancy: "Safe at usual doses (category A, Bhutan NEMF) [BT-NEML].", other: "Long-term large doses cause sensory neuropathy [BT-NEML]." },
  tox: { human: "Sensory neuropathy with long high-dose use [BT-NEML].", animal: N5_LD, manage: "Stop [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None known at usual doses [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea [UNVERIFIED-KNOWLEDGE]."], serious: ["Sensory neuropathy, unsteady gait with large long-term doses [BT-NEML]"] },
  monitor: ["Neuropathy symptoms [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: pyridoxine 25 mg tablet [BT-NEML].", strengths: "25 mg.", stg: "With isoniazid for those at risk of neuropathy (malnutrition, alcohol, HIV, renal failure, diabetes, pregnancy) [BT-TB]." },
  calc: [],
  sources: [N5_BT, ["BT-TB", "Integrated National Guidelines for Management of TB in Bhutan, 8th ed. (March 2024 update) and National Guidelines for Management of Pediatric TB, 2024 update — NTCP, Ministry of Health", ""]],
  dose: { tagline: "Vitamin B6 with isoniazid to prevent neuropathy.",
    adult: [{ ind: "With isoniazid (at risk)", text: "25 mg daily, 12 hours apart from TB drugs.", bt: "Bhutan NEML: 25 mg tablet." }, { ind: "Isoniazid neuropathy (treatment)", text: "50 mg three times daily." }],
    child: [{ ind: "With isoniazid", text: "Per the Bhutan TB guideline." }] }
});

FDB_M("senna", {
  inn: "Senna (sennosides)", atc: "A06AB06", cls: "Stimulant laxative",
  linked: [],
  forms: ["Tablets 7.5–15 mg sennosides; syrup [UNVERIFIED-KNOWLEDGE].", "Bhutan: senna 15 mg tablet (NRH/RRH/DH/PHC) [BT-NEML]."],
  moa: "Anthraquinone glycosides stimulate colonic motility [UNVERIFIED-KNOWLEDGE].",
  pk: ["Acts in 6–12 hours — take at night [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Constipation; bowel preparation [BT-NEML]."], paed: ["Constipation, 6 years and older [BT-NEML]."] },
  adult: [["Constipation", "15–30 mg once daily, usually at night; start low and increase [BT-NEML]."], ["Bowel preparation", "130 mg between 2 and 4 pm the day before the procedure [BT-NEML]."], ["Duration", "No more than 7 days without review [BT-NEML]."]],
  paed: { tiers: ["6–17 years: 15–30 mg once daily at night [BT-NEML].", "Under 6 years: not recommended (tablets) [BT-NEML]."], transition: "Same.", calcNote: "Fixed dose." },
  adj: { renal: N5_NEP, hepatic: N5_NEP, pregnancy: "Category C; compatible with breastfeeding [BT-NEML].", other: "Discolours urine [BT-NEML]." },
  tox: { human: "Diarrhoea, electrolyte loss [BT-NEML].", animal: N5_LD, manage: "Fluids and electrolytes [UNVERIFIED-KNOWLEDGE]." },
  contra: ["GI obstruction, appendicitis, faecal impaction, GI or rectal bleeding [BT-NEML].", "Children under 6 years [BT-NEML]."],
  ae: { common: ["Abdominal cramps, diarrhoea, nausea, urine discoloration [BT-NEML]."], serious: ["Electrolyte imbalance with overuse [BT-NEML]"] },
  monitor: ["Bowel habit; potassium with prolonged use [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: senna 15 mg tablet [BT-NEML].", strengths: "15 mg.", stg: "Constipation; opioid-induced constipation [BT-NEML] [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [N5_BT],
  dose: { tagline: "Night-time stimulant laxative — short courses.",
    adult: [{ ind: "Constipation", text: "15–30 mg at night.", bt: "Bhutan NEML: 15 mg tablet." }, { ind: "Bowel preparation", text: "130 mg in the afternoon the day before." }],
    child: [{ ind: "6–17 years", text: "15–30 mg at night." }, { ind: "Under 6 years", text: "Not recommended." }] }
});

FDB_M("vasopressin", {
  inn: "Vasopressin (arginine vasopressin)", atc: "H01BA01", cls: "Antidiuretic hormone / vasopressor",
  risk: "High-alert medication (vasopressin, IV and intraosseous) [ISMP]",
  linked: [["Sepsis — adults", "Second vasopressor in septic shock [FDA] [BT-NEML]", "sepsis-adult"], ["Upper GI bleeding — adults", "Variceal bleeding (Bhutan NEMF) [BT-NEML]", "ugib-adult"]],
  forms: ["Injection 20 units/mL (1 mL, 10 mL); premixed 20–60 units/100 mL [FDA].", "Bhutan: vasopressin 20 IU/mL injection, 1 mL (NRH/RRH/DH) [BT-NEML]."],
  moa: "V1 receptor vasoconstriction; V2 antidiuresis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short half-life — infusion [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Vasodilatory shock (septic or post-cardiotomy) despite fluids and catecholamines [FDA].", "Diabetes insipidus; variceal bleeding (Bhutan NEMF) [BT-NEML]."], paed: ["Diabetes insipidus; variceal bleeding (Bhutan NEMF) [BT-NEML]."] },
  adult: [["Septic shock", "0.01–0.07 units/minute IV infusion (FDA); Bhutan NEMF 0.01–0.04 units/minute [FDA] [BT-NEML]."], ["Post-cardiotomy shock", "0.03–0.1 units/minute [FDA]."], ["Dilution", "Dilute to 0.1 or 1 unit/mL in 0.9% sodium chloride or 5% dextrose [FDA]."], ["Diabetes insipidus (Bhutan NEMF)", "5–10 units IM or SC every 8–12 h [BT-NEML]."], ["Variceal bleeding (Bhutan NEMF)", "20 units IV over 15 minutes [BT-NEML]."]],
  paed: { tiers: ["Diabetes insipidus: 2.5–10 units every 8–12 h (Bhutan NEMF) [BT-NEML].", "Variceal bleeding: 0.3 units/kg, maximum 20 units (Bhutan NEMF) [BT-NEML]."], transition: "Adult doses.", calcNote: "Infusion in units/minute — no dose calculator." },
  adj: { renal: N5_NEP, hepatic: N5_NEP, pregnancy: "Category C [BT-NEML].", other: "Can worsen cardiac function; reversible diabetes insipidus after stopping [FDA]. Caution in coronary disease [BT-NEML]." },
  tox: { human: "Ischaemia (cardiac, mesenteric, digital), water intoxication, hyponatraemia [BT-NEML] [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Stop; fluid restriction; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Allergy to 8-L-arginine vasopressin (or chlorobutanol in multi-dose vials) [FDA].", "Chronic nephritis; cardiac insufficiency (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Abdominal cramps, nausea, pallor, sweating, headache [BT-NEML]."], serious: ["Myocardial and peripheral ischaemia; gangrene [BT-NEML]", "Arrhythmias [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyponatraemia [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, urine output, sodium, ECG, peripheral perfusion [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: vasopressin 20 IU/mL injection [BT-NEML].", strengths: "20 units/mL.", stg: "Septic shock (ICU), variceal bleeding, diabetes insipidus [BT-NEML]." },
  calc: [],
  sources: [["FDA", "Vasostrict (vasopressin) — FDA label (DailyMed)", N5_DM("b1147beb-743e-4c62-8927-91192447f8b8")], N5_BT, ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Second vasopressor for septic shock — units per minute, not per kg.",
    cautionTitle: "Use with care",
    caution: "Septic-shock doses are in units per MINUTE (0.01–0.07) — not units/kg. Ischaemia of heart, gut and digits can occur [FDA] [BT-NEML].",
    adult: [{ ind: "Septic shock", text: "0.01–0.04 units/minute IV infusion (FDA up to 0.07).", bt: "Bhutan NEML: 20 IU/mL." }, { ind: "Variceal bleeding", text: "20 units IV over 15 minutes (Bhutan NEMF)." }],
    child: [{ ind: "Diabetes insipidus", text: "2.5–10 units every 8–12 h." }, { ind: "Variceal bleeding", text: "0.3 units/kg (maximum 20 units)." }] }
});

FDB_M("lipid-emulsion", {
  inn: "Lipid emulsion 20% (soybean oil)", atc: "B05BA02", cls: "IV fat emulsion (parenteral nutrition; antidote)",
  linked: [["Poisoning — adults", "Local anaesthetic systemic toxicity [BT-NEML]", "poisoning-adult"]],
  forms: ["Injectable emulsion 10%, 20%, 30% [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: lipid emulsion 20% injection, 250 mL (NRH/RRH) [BT-NEML]."],
  moa: "Energy and essential fatty acids; in toxicity, a 'lipid sink' for fat-soluble drugs such as bupivacaine [UNVERIFIED-KNOWLEDGE].",
  pk: [N5_NEP],
  ind: { adult: ["Calories and essential fatty acids in parenteral nutrition [FDA].", "Severe local-anaesthetic cardiovascular toxicity (Bhutan NEMF antidote use) [BT-NEML]."], paed: ["Parenteral nutrition [FDA]."] },
  adult: [["Local anaesthetic toxicity (Bhutan NEMF)", "1.5 mL/kg of 20% IV bolus over 2–3 minutes (repeat for persistent asystole or PEA); then 0.25 mL/kg/minute, adjusted per response; stop at haemodynamic stability or a total of 8–10 mL/kg [BT-NEML]."], ["Parenteral nutrition — adults", "1 g/kg/day (stable) or up to 1 g/kg/day (critically ill); maximum 2.5 g/kg/day [FDA]."]],
  paed: { tiers: ["Parenteral nutrition: 2 to under 12 years 1–2 g/kg/day (maximum 2.5); 12–17 years 1 g/kg/day (maximum 2) [FDA].", "Premature infants: strict rate control; not faster than 1 g fat/kg in 4 hours (Bhutan NEMF) [BT-NEML]."], transition: "Adult dosing.", calcNote: "LAST bolus is mL/kg." },
  adj: { renal: N5_NEP, hepatic: "Monitor liver tests in long PN [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: N5_NEP, other: "Monitor triglycerides [BT-NEML] [FDA]." },
  tox: { human: "Fat overload syndrome, hypertriglyceridaemia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Stop infusion; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to egg, soybean or peanut [FDA] [BT-NEML].", "Severe hypertriglyceridaemia (over 1,000 mg/dL) [FDA].", "Lipoid nephrosis; acute pancreatitis with hyperlipidaemia; severe bleeding disorders (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Hypertriglyceridaemia, hyperglycaemia, nausea [BT-NEML] [FDA]."], serious: ["Deaths in preterm infants from intravascular fat accumulation [FDA] [UNVERIFIED-KNOWLEDGE]", "Fat overload syndrome [FDA]", "Parenteral-nutrition-associated liver disease [FDA]", "Pancreatitis [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Triglycerides, liver tests, glucose [FDA] [BT-NEML]."],
  local: { neml: "On the Bhutan NEML 2025: lipid emulsion 20% injection, 250 mL [BT-NEML].", strengths: "20%.", stg: "Antidote for local anaesthetic toxicity [BT-NEML]." },
  calc: [
    { drug: "lipid-emulsion", indication_id: "last", label: "Local anaesthetic toxicity — 1.5 mL/kg of 20% IV bolus", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1.5, unit: "mL", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "1 mL", renal: [], flags: ["Over 2–3 minutes; repeat for persistent asystole or PEA", "Then 0.25 mL/kg/min; maximum total 8–10 mL/kg"], sources: ["BT-NEML"] }
  ],
  sources: [["FDA", "Intralipid 20% — FDA label (DailyMed)", N5_DM("42dffe5a-892b-03ec-e063-6394a90ae50c")], N5_BT],
  dose: { tagline: "Antidote for local anaesthetic toxicity and fat source in parenteral nutrition.",
    adult: [{ ind: "Local anaesthetic toxicity", text: "1.5 mL/kg of 20% over 2–3 minutes, then 0.25 mL/kg/minute; maximum 8–10 mL/kg.", calc: ["last"], bt: "Bhutan NEML: 20%, 250 mL." }, { ind: "Parenteral nutrition", text: "1 g/kg/day; maximum 2.5 g/kg/day." }],
    child: [{ ind: "Parenteral nutrition", text: "1–2 g/kg/day (2–11 years); 1 g/kg/day (12–17 years)." }] }
});

FDB_M("activated-charcoal", {
  inn: "Activated charcoal", atc: "A07BA01", cls: "Adsorbent (non-specific antidote)",
  linked: [["Poisoning — adults", "Within 1 hour, safe airway only [BT-STG]", "poisoning-adult"], ["Poisoning — children", "[BT-NEML]", "poisoning-child"]],
  forms: ["Powder or suspension for oral use [UNVERIFIED-KNOWLEDGE].", "Bhutan: activated charcoal powder, 450 g (NRH/RRH/DH/PHC) [BT-NEML]."],
  moa: "Adsorbs many drugs and toxins in the gut, reducing absorption; repeated doses interrupt enterohepatic circulation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not absorbed [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Reducing absorption of ingested poisons; active elimination (multiple doses) for selected poisons [BT-NEML]."], paed: ["Same [BT-NEML]."] },
  adult: [["Single dose", "50 g orally [BT-NEML]; ideally within 1 hour of ingestion and only with a protected airway [BT-STG]."], ["Multiple doses (active elimination)", "50 g, then 50 g every 4 h (or 25 g every 2 h if not tolerated) [BT-NEML]."]],
  paed: { tiers: ["Infants: 1 g/kg (about 5 mL/kg) [BT-NEML].", "1–2 years (Bhutan NEMF): 25–50 g [BT-NEML].", "Multiple doses, 1 month–11 years: 1 g/kg every 4 h, maximum 50 g per dose [BT-NEML].", "12–17 years: adult doses [BT-NEML]."], transition: "Adult dose from 12 years.", calcNote: "Children: 1 g/kg." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: "Not absorbed [UNVERIFIED-KNOWLEDGE].", other: "Binds oral antidotes and drugs given at the same time [BT-NEML]." },
  tox: { human: "Aspiration pneumonitis; bowel obstruction with repeated doses [BT-NEML] [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Protect the airway; stop if ileus [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Corrosives (strong acids or alkalis); petroleum distillates; alcohols; DDT; malathion; metal salts including iron and lithium [BT-NEML].", "With specific oral antidotes or emetics [BT-NEML].", "Intestinal obstruction; unprotected airway [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Black stools, constipation, vomiting [BT-NEML]."], serious: ["Aspiration [BT-NEML]", "Bowel obstruction [BT-NEML]"] },
  monitor: ["Airway, bowel sounds with repeated doses [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: activated charcoal powder 450 g (down to PHC) [BT-NEML].", strengths: "Powder.", stg: "Poisoning: 50 g within 1 hour with a safe airway; useless for acids, alkalis, iron, alcohols, kerosene [BT-STG]." },
  calc: [
    { drug: "activated-charcoal", indication_id: "child", label: "Poisoning, child 1 month–11 years — 1 g/kg (max 50 g)", route: "PO/NG", population: { min_age_months: 1, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, unit: "g", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 50, unit: "g" }, weight_basis: "actual", formulations: [], rounding: "1 g", renal: [], flags: ["Within 1 hour, airway protected", "Multiple doses: every 4 h"], sources: ["BT-NEML"] }
  ],
  sources: [N5_BT, ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Gut decontamination for poisoning — 50 g within 1 hour, airway first.",
    adult: [{ ind: "Poisoning", text: "50 g orally within 1 hour; multiple doses 50 g every 4 h for selected poisons.", bt: "Bhutan NEML: powder 450 g." }],
    child: [{ ind: "Poisoning", text: "1 g/kg (maximum 50 g); 12 years and over adult dose.", calc: ["child"] }] }
});

FDB_M("hypromellose", {
  inn: "Hypromellose (hydroxypropyl methylcellulose) 2% ophthalmic viscoelastic", atc: "S01KA02", cls: "Ophthalmic surgical aid (viscoelastic)",
  linked: [],
  forms: ["Intraocular injection 2% in prefilled syringe [BT-NEML].", "Lubricant eye drops (0.3%) are a different product [UNVERIFIED-KNOWLEDGE].", "Bhutan: hydroxypropyl methylcellulose 2% prefilled injection (NRH/RRH) [BT-NEML]."],
  moa: "Viscoelastic gel that keeps the anterior chamber formed and protects the corneal endothelium [UNVERIFIED-KNOWLEDGE].",
  pk: ["Removed from the eye at the end of surgery [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Surgical aid in anterior-segment surgery, including cataract extraction and intraocular lens implantation [BT-NEML]."], paed: ["Same — specialist [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Cataract and anterior-segment surgery", "Inject 2% carefully into the anterior chamber through a 20-gauge or smaller cannula; add more during surgery to keep the chamber formed [BT-NEML]."]],
  paed: { tiers: ["Specialist eye surgery [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Surgical use — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: "Not applicable. [NEP]", other: "Remove thoroughly at the end of surgery to avoid pressure rise [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: N5_NEP, animal: N5_LD, manage: "Treat raised intraocular pressure [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None listed; caution in glaucoma [BT-NEML]."],
  ae: { common: ["Transient raised intraocular pressure [BT-NEML]."], serious: ["Corneal oedema, hypopyon, iritis [BT-NEML]"] },
  monitor: ["Intraocular pressure after surgery [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: hydroxypropyl methylcellulose 2% (NRH/RRH) [BT-NEML].", strengths: "2%.", stg: "Cataract surgery [BT-NEML]." },
  calc: [],
  sources: [N5_BT],
  dose: { tagline: "Viscoelastic gel for cataract surgery — not an eye drop.",
    adult: [{ ind: "Cataract / anterior-segment surgery", text: "2% injected into the anterior chamber as needed during surgery.", bt: "Bhutan NEML: 2% prefilled." }],
    child: [{ ind: "Children", text: "Specialist eye surgery." }] }
});

FDB_M("calamine", {
  inn: "Calamine (zinc oxide with ferric oxide)", atc: "D04AX", cls: "Topical skin protectant / antipruritic",
  linked: [["Chickenpox — children", "Itch relief [BT-STG]", "chickenpox-child"]],
  forms: ["Lotion 8% (US OTC, often with pramoxine) [FDA].", "Bhutan: calamine powder, 450 g — pharmacy makes calamine lotion [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Mild astringent and drying agent; soothes itch [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not absorbed [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Itch and minor skin irritation, including chickenpox and insect bites [FDA] [BT-STG]."], paed: ["2 years and older (US OTC labelling) [FDA]."] },
  adult: [["Itch", "Shake well; apply to affected skin up to 3–4 times daily [FDA]."]],
  paed: { tiers: ["2 years and older: same [FDA].", "Under 2 years: ask a doctor (OTC labelling) [FDA]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: "Not absorbed [UNVERIFIED-KNOWLEDGE].", other: "External use only; avoid eyes and mucous membranes [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: N5_NEP, animal: N5_LD, manage: "Not applicable. [NEP]" },
  contra: ["None known [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Skin dryness [UNVERIFIED-KNOWLEDGE]."], serious: [N5_NEP] },
  monitor: ["None. [NEP]"],
  local: { neml: "On the Bhutan NEML 2025: calamine powder 450 g [BT-NEML].", strengths: "Powder.", stg: "Chickenpox itch, 2–3 times daily [BT-STG]." },
  calc: [],
  sources: [["FDA", "Calamine lotion (OTC) — label (DailyMed)", N5_DM("0bc1a9b4-1210-4d9a-bbd2-40e9225e86ea")], N5_BT, ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Soothing lotion for itch, including chickenpox.",
    adult: [{ ind: "Itch", text: "Apply 3–4 times daily.", bt: "Bhutan NEML: powder (pharmacy lotion)." }],
    child: [{ ind: "Chickenpox itch", text: "Apply 2–3 times daily (2 years and older)." }] }
});

FDB_M("podophyllum-resin", {
  inn: "Podophyllum resin (podophyllin)", atc: "D06BB04", cls: "Topical antimitotic (warts)",
  linked: [["Sexually transmitted infections — adults", "Anogenital warts [UNVERIFIED-KNOWLEDGE]", "sti-adult"]],
  forms: ["Resin, compounded as 10–25% in compound benzoin tincture [UNVERIFIED-KNOWLEDGE].", "Podofilox 0.5% (purified) is the US prescription product — different strength and use [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: podophyllum resin, 25 g bottle [BT-NEML]."],
  moa: "Antimitotic: arrests cell division in wart tissue [UNVERIFIED-KNOWLEDGE].",
  pk: ["Systemic absorption from large or bleeding areas can be toxic [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["External anogenital warts — applied by a health worker [UNVERIFIED-KNOWLEDGE]."], paed: ["Not recommended [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Anogenital warts", "Health worker applies a small amount to the warts only; protect surrounding skin; wash off after 1–4 hours; weekly, limited area [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not recommended [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Clinic application — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: "Contraindicated (fetal toxicity) [UNVERIFIED-KNOWLEDGE].", other: "Not on mucosa (cervix, urethra, vagina, anus) or bleeding warts [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Systemic toxicity: nausea, vomiting, neuropathy, marrow suppression, coma [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Wash off; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy [UNVERIFIED-KNOWLEDGE].", "Large, bleeding or mucosal warts [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Local burning, erosion, pain [UNVERIFIED-KNOWLEDGE]."], serious: ["Systemic toxicity from overuse [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Local reaction at each visit [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: podophyllum resin 25 g bottle [BT-NEML].", strengths: "Resin.", stg: N5_NEP },
  calc: [],
  sources: [N5_BT],
  dose: { tagline: "Clinic-applied wart paint — never in pregnancy; wash off within hours.",
    cautionTitle: "Use with care",
    caution: "Clinic application only. Contraindicated in pregnancy. Not on mucosa or bleeding warts — systemic absorption is toxic. Dosing here is not yet verified against a primary source [UNVERIFIED-KNOWLEDGE].",
    adult: [{ ind: "Anogenital warts", text: "Applied by a health worker to warts only; wash off after 1–4 hours; weekly (to be verified).", bt: "Bhutan NEML: resin 25 g." }],
    child: [{ ind: "Children", text: "Not recommended." }] }
});

FDB_M("benzoic-acid", {
  inn: "Benzoic acid (with salicylic acid — Whitfield's ointment)", atc: "D01AE20", cls: "Topical keratolytic antifungal",
  linked: [],
  forms: ["Compound benzoic acid ointment (Whitfield's): benzoic acid 6% + salicylic acid 3% [UNVERIFIED-KNOWLEDGE].", "Bhutan: benzoic acid powder, 450 g — for pharmacy compounding [BT-NEML]."],
  moa: "Fungistatic; salicylic acid peels the keratin layer [UNVERIFIED-KNOWLEDGE].",
  pk: ["Topical [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Superficial dermatophyte infections (tinea pedis, corporis), especially thick skin [UNVERIFIED-KNOWLEDGE]."], paed: ["Same, with care [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Tinea", "Apply Whitfield's ointment twice daily for several weeks [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same; avoid large areas (salicylate) [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: N5_NEP, other: "Avoid broken skin and mucosa; irritant [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Salicylism if used on large areas [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Wash off; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Broken or inflamed skin [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Irritation, peeling [UNVERIFIED-KNOWLEDGE]."], serious: [N5_NEP] },
  monitor: ["Response over 4 weeks [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: benzoic acid powder 450 g [BT-NEML].", strengths: "Powder.", stg: N5_NEP },
  calc: [],
  sources: [N5_BT],
  dose: { tagline: "Pharmacy-made Whitfield's ointment for tinea (to be verified).",
    adult: [{ ind: "Tinea", text: "Whitfield's ointment twice daily (to be verified).", bt: "Bhutan NEML: powder 450 g." }],
    child: [{ ind: "Children", text: "Same, small areas." }] }
});

FDB_M("para-aminosalicylic-acid", {
  inn: "Para-aminosalicylic acid (PAS sodium)", atc: "J04AA01", cls: "Anti-tuberculosis drug (second line)",
  linked: [["Tuberculosis — adults", "DR-TB (longer regimens) [BT-NEML]", "tb-adult"], ["Tuberculosis — children", "DR-TB [BT-NEML]", "tb-child"]],
  forms: ["Delayed-release granules 60% w/w, 4 g sachet [BT-NEML].", "No current FDA label [NEP].", "Bhutan: para-aminosalicylate sodium 60% w/w granules (NRH/RRH/DH; MDR-TB only) [BT-NEML]."],
  moa: "Folate-pathway antagonist in M. tuberculosis [UNVERIFIED-KNOWLEDGE].",
  pk: [N5_NEP],
  ind: { adult: ["Drug-resistant TB, in combination [BT-NEML]."], paed: ["DR-TB [BT-NEML]."] },
  adult: [["DR-TB (over 14 years)", "8–12 g/day in 2–3 divided doses, maximum 12 g/day [BT-NEML]."], ["Kidney", "CrCl 10–50: 50–75% of the dose; under 10: see the NEMF entry [BT-NEML]."], ["Administration", "Sprinkle granules on acidic food or juice; do not chew [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["200 mg/kg/day [BT-NEML]."], transition: "Adult dose over 14 years.", calcNote: "Programme drug — national TB guideline." },
  adj: { renal: "CrCl 10–50: 50–75% of the dose [BT-NEML].", hepatic: "Caution [BT-NEML].", pregnancy: N5_NEP, other: "Hypothyroidism, especially with ethionamide; hypoglycaemia [BT-NEML] [UNVERIFIED-KNOWLEDGE]. Caution in tartrazine sensitivity, asthma, nasal polyps [BT-NEML]." },
  tox: { human: N5_NEP, animal: N5_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: [N5_NEP],
  ae: { common: ["Nausea, vomiting, diarrhoea, abdominal pain [BT-NEML]."], serious: ["Hypothyroidism and goitre [BT-NEML]", "Hepatitis, jaundice [BT-NEML]", "Haemolytic anaemia, agranulocytosis, thrombocytopenia [BT-NEML]", "Hypersensitivity: fever, rash, vasculitis, pericarditis [BT-NEML]"] },
  monitor: ["TSH, liver tests, blood count [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: para-aminosalicylate sodium 60% w/w granules (MDR-TB only) [BT-NEML].", strengths: "4 g sachet.", stg: "DR-TB — national TB programme [BT-NEML]." },
  calc: [
    { drug: "para-aminosalicylic-acid", indication_id: "adult", label: "DR-TB, over 14 years — 8–12 g/day in 2–3 doses", route: "PO", population: { min_age_months: 168, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 8000, unit: "mg", per: "day", value_max: 12000 }, interval_h: 12, divided_doses: 2, caps: { max_daily: 12000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "sachet (60% granules)", strength: 4000, unit: "mg/sachet" }], rounding: "Part sachets by scoop", renal: [], renal_note: "CrCl 10–50: 50–75% of the dose [BT-NEML]", flags: ["National TB programme only"], sources: ["BT-NEML"] },
    { drug: "para-aminosalicylic-acid", indication_id: "child", label: "DR-TB, child — 200 mg/kg/day in 2 doses", route: "PO", population: { min_age_months: 0, max_age_months: 168, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 200, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 12000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "sachet (60% granules)", strength: 4000, unit: "mg/sachet" }], rounding: "Part sachets by scoop", renal: [], flags: ["National TB programme only"], sources: ["BT-NEML"] }
  ],
  sources: [N5_BT],
  dose: { tagline: "Second-line DR-TB granules — GI upset and hypothyroidism.",
    adult: [{ ind: "Drug-resistant TB", text: "8–12 g/day in 2–3 doses (maximum 12 g).", calc: ["adult"], bt: "Bhutan NEML: 60% granules." }],
    child: [{ ind: "Drug-resistant TB", text: "200 mg/kg/day.", calc: ["child"] }] }
});

FDB_M("nitrous-oxide", {
  inn: "Nitrous oxide", atc: "N01AX13", cls: "Inhaled anaesthetic and analgesic gas",
  linked: [["Labour", "Labour analgesia up to 50% with oxygen [BT-NEML]", "labour-preg"]],
  forms: ["Medical gas cylinder (USP) [FDA].", "Bhutan: nitrous oxide inhalation cylinder (NRH/RRH; DH with an operating theatre) [BT-NEML]."],
  moa: "NMDA antagonism; weak anaesthetic, good analgesic [UNVERIFIED-KNOWLEDGE].",
  pk: ["Rapid onset and offset; diffuses into closed air spaces [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Maintenance of anaesthesia with other agents; analgesia (including labour) [BT-NEML]."], paed: ["Same [BT-NEML]."] },
  adult: [["Anaesthesia maintenance", "50–66% with oxygen, with other agents [BT-NEML]."], ["Analgesia", "Up to 50% with oxygen, adjusted to need [BT-NEML]."]],
  paed: { tiers: ["Same concentrations [BT-NEML]."], transition: "Same.", calcNote: "Gas concentration — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: "Labour analgesia [BT-NEML]; breastfeeding can resume after recovery [BT-NEML].", other: "Prolonged or repeated use inactivates vitamin B12 [BT-NEML] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypoxia; megaloblastic anaemia and neuropathy with prolonged exposure [BT-NEML].", animal: N5_LD, manage: "100% oxygen; B12 replacement [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Closed air collections: pneumothorax, bowel obstruction, middle-ear occlusion, recent eye surgery with gas, intracranial air after head injury [BT-NEML]."],
  ae: { common: ["Nausea, vomiting, dizziness [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypoxia (diffusion hypoxia at the end — give oxygen) [BT-NEML] [UNVERIFIED-KNOWLEDGE]", "Bone-marrow depression, megaloblastic anaemia, neurotoxicity with prolonged use [BT-NEML]"] },
  monitor: ["SpO2; oxygen after stopping [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: nitrous oxide inhalation cylinder [BT-NEML].", strengths: "Cylinder.", stg: "Anaesthesia and labour analgesia [BT-NEML]." },
  calc: [],
  sources: [["FDA", "Nitrous oxide USP (medical gas) — FDA label (DailyMed)", N5_DM("00d2e785-1cdc-496d-abd3-b255ae1cb693")], N5_BT],
  dose: { tagline: "Analgesic and anaesthetic gas — always with at least 30% oxygen.",
    adult: [{ ind: "Analgesia (e.g. labour)", text: "Up to 50% with oxygen.", bt: "Bhutan NEML: cylinder." }, { ind: "Anaesthesia maintenance", text: "50–66% with oxygen and other agents." }],
    child: [{ ind: "Children", text: "Same concentrations." }] }
});

FDB_M("oxygen", {
  inn: "Oxygen (medical gas)", atc: "V03AN01", cls: "Medical gas",
  linked: [["Pneumonia — adults", "Target SpO2 94–98% [BT-NEML]", "pneumonia-adult"], ["COPD — adults", "Target 88–92% [BT-NEML]", "copd-adult"], ["Asthma — adults", "[BT-NEML]", "asthma-adult"], ["Sepsis — adults", "[BT-NEML]", "sepsis-adult"]],
  forms: ["Compressed gas cylinders; concentrators; liquid oxygen [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: oxygen inhalation (medical gas) — type B cylinders to PHC (vital) [BT-NEML]."],
  moa: "Raises inspired oxygen fraction [UNVERIFIED-KNOWLEDGE].",
  pk: ["Immediate [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypoxaemia; critical illness; carbon monoxide poisoning [BT-NEML]."], paed: ["Hypoxaemia [BT-NEML]."] },
  adult: [["Target saturation", "Most patients SpO2 94–98%; with hypercapnia or its risk (e.g. COPD) 88–92% [BT-NEML]."], ["Critical illness, carbon monoxide", "High concentration: reservoir mask at 15 L/min [BT-NEML]."], ["Acute hypoxaemia, SpO2 under 85%", "Reservoir mask 10–15 L/min [BT-NEML]."], ["SpO2 85% or more", "Nasal cannulae or simple mask at 2–10 L/min [BT-NEML]."]],
  paed: { tiers: ["Titrate to target saturation; specialist flows for neonates [BT-NEML] [UNVERIFIED-KNOWLEDGE]."], transition: "Same targets.", calcNote: "Flow and device by target saturation — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: "Not applicable. [NEP]", other: "Fire risk — no smoking or open flame [FDA] [UNVERIFIED-KNOWLEDGE]. Retinopathy risk in premature infants with high oxygen [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypercapnic respiratory failure in CO2 retainers; absorption atelectasis; retinopathy of prematurity [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Reduce to target saturation [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None absolute [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dry nose and throat [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypercapnia in COPD with uncontrolled oxygen [BT-NEML] [UNVERIFIED-KNOWLEDGE]", "Fire [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Pulse oximetry; blood gas in COPD [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: oxygen (medical gas), down to PHC [BT-NEML].", strengths: "Cylinder.", stg: "Target 94–98% (88–92% if hypercapnia risk) [BT-NEML]." },
  calc: [],
  sources: [["FDA", "Oxygen USP (medical gas) — FDA label (DailyMed)", N5_DM("007530ff-787e-4f37-bc9c-23193d006708")], N5_BT],
  dose: { tagline: "Prescribe oxygen to a target saturation — 94–98%, or 88–92% in COPD.",
    adult: [{ ind: "Acute hypoxaemia", text: "Titrate to SpO2 94–98% (88–92% if CO2 retention risk); reservoir mask 15 L/min if critically ill.", bt: "Bhutan NEML: medical gas." }],
    child: [{ ind: "Children", text: "Titrate to target saturation." }] }
});

FDB_M("gadobenate", {
  inn: "Gadobenate dimeglumine", atc: "V08CA08", cls: "Gadolinium-based MRI contrast (linear, partly hepatobiliary)",
  linked: [],
  forms: ["Injection 529 mg/mL (0.5 mmol/mL) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: gadobenate dimeglumine injection, 10 mL (till NRH; replaced gadodiamide for lower NSF risk) [BT-NEML]."],
  moa: "Paramagnetic gadolinium chelate: T1 shortening on MRI [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renal and partly biliary excretion [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["MRI of the CNS; MR angiography [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["CNS MRI, including under 2 years [FDA]."] },
  adult: [["MRI", "0.1 mmol/kg (0.2 mL/kg) rapid IV bolus, then saline flush (at least 5 mL CNS, 20 mL MRA) [FDA]."]],
  paed: { tiers: ["Over 2 years: 0.1 mmol/kg (0.2 mL/kg) [FDA].", "Under 2 years (CNS MRI): 0.1–0.2 mL/kg [FDA]."], transition: "Same per-kg dose.", calcNote: "mL/kg — no mg calculator." },
  adj: { renal: "Avoid unless essential in eGFR under 30 or acute kidney injury (NSF) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: N5_NEP, pregnancy: "Only if essential [UNVERIFIED-KNOWLEDGE].", other: "IV only — never intrathecal [FDA]." },
  tox: { human: N5_NEP, animal: N5_LD, manage: "Haemodialysis removes it [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known allergic or hypersensitivity reactions to gadolinium-based contrast agents [FDA]."],
  ae: { common: ["Nausea, headache, injection-site reactions, altered taste [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylactoid reactions [FDA]", "Nephrogenic systemic fibrosis [FDA]", "Harm if given intrathecally [FDA]", "Gadolinium retention [FDA]"] },
  monitor: ["eGFR risk screen; observe after injection [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: gadobenate dimeglumine 10 mL vial (till NRH) [BT-NEML].", strengths: "10 mL vial.", stg: "MRI — radiology [BT-NEML]." },
  calc: [],
  sources: [["FDA", "MultiHance (gadobenate dimeglumine) — FDA label (DailyMed)", N5_DM("59077a3e-5f03-4342-ae24-856267545631")], N5_BT],
  dose: { tagline: "Bhutan's MRI gadolinium agent — IV only; screen the kidneys.",
    boxedTitle: "Risk associated with intrathecal use and nephrogenic systemic fibrosis",
    boxed: "Risk Associated with Intrathecal Use Intrathecal administration of gadolinium-based contrast agents (GBCAs) can cause serious adverse reactions including death, coma, encephalopathy, and seizures. MultiHance is not approved for intrathecal use. Nephrogenic Systemic Fibrosis GBCAs increase the risk for nephrogenic systemic fibrosis (NSF) among patients with impaired elimination of the drugs. Avoid use of MultiHance in these patients unless the diagnostic information is essential and not available with non-contrasted MRI or other modalities. NSF may result in fatal or debilitating systemic fibrosis affecting the skin, muscle and internal organs. The risk for NSF appears highest among patients with: chronic, severe kidney disease (GFR 60 years, hypertension or diabetes), estimate the glomerular filtration rate (GFR) through laboratory testing. For patients at highest risk for NSF, do not exceed the recommended MultiHance dose and allow a sufficient period of time for elimination of the drug from the body prior to re-administration [FDA].",
    adult: [{ ind: "MRI", text: "0.1 mmol/kg (0.2 mL/kg) IV bolus, then saline flush.", bt: "Bhutan NEML: 10 mL vial." }],
    child: [{ ind: "Children", text: "0.2 mL/kg (under 2 years 0.1–0.2 mL/kg)." }] }
});

FDB_M("sulfur", {
  inn: "Sulphur (precipitated / sublimed)", atc: "D10AB02", cls: "Topical keratolytic and antiparasitic",
  linked: [["Scabies — adults", "Alternative in pregnancy and infants [UNVERIFIED-KNOWLEDGE]", "scabies-adult"]],
  forms: ["OTC products contain 3–10% sulfur (acne) [UNVERIFIED-KNOWLEDGE].", "Bhutan: sulphur sublime 99.9% w/w powder, 450 g — for pharmacy compounding (e.g. 5–10% in soft paraffin) [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Keratolytic; converted to polythionic acids toxic to mites and fungi [UNVERIFIED-KNOWLEDGE].",
  pk: ["Topical [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Scabies (alternative where permethrin unsuitable); acne; seborrhoeic dermatitis [UNVERIFIED-KNOWLEDGE]."], paed: ["Scabies in infants (compounded ointment) [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Scabies", "Sulphur ointment (compounded, about 5–10%) to the whole body from the neck down nightly for 3 nights, washing off before each new application (to be verified) [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Infants: lower-strength compounded ointment (to be verified) [UNVERIFIED-KNOWLEDGE]."], transition: "—", calcNote: "Compounded topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: "Considered safe topically [UNVERIFIED-KNOWLEDGE].", other: "Messy, odorous; stains clothing [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: N5_NEP, animal: N5_LD, manage: "Wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Sulfur hypersensitivity [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Irritation, dryness, odour [UNVERIFIED-KNOWLEDGE]."], serious: [N5_NEP] },
  monitor: ["Itch resolution over 2–4 weeks [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: sulphur sublime 99.9% w/w powder 450 g [BT-NEML].", strengths: "Powder.", stg: N5_NEP },
  calc: [],
  sources: [N5_BT],
  dose: { tagline: "Pharmacy compounding powder — sulphur ointment for scabies (to be verified).",
    adult: [{ ind: "Scabies (alternative)", text: "Compounded sulphur ointment nightly for 3 nights (to be verified).", bt: "Bhutan NEML: powder 450 g." }],
    child: [{ ind: "Infants", text: "Lower-strength compounded ointment (to be verified)." }] }
});

FDB_M("white-soft-paraffin", {
  inn: "White soft paraffin (white petrolatum)", atc: "D02AC", cls: "Emollient / ointment base",
  linked: [],
  forms: ["Ointment (OTC skin protectant) [UNVERIFIED-KNOWLEDGE].", "Bhutan: white soft paraffin 1 kg jar — emollient and compounding base [BT-NEML]."],
  moa: "Occlusive emollient: reduces water loss from the skin [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not absorbed [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Dry skin, eczema (emollient); skin protectant; ointment base for compounding [UNVERIFIED-KNOWLEDGE]."], paed: ["Same, including infants [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Emollient", "Apply liberally and often, especially after washing [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", pregnancy: "Not applicable. [NEP]", other: "Flammable on dressings and clothing — keep away from flames [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Not toxic topically [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Not applicable. [NEP]" },
  contra: ["None [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Folliculitis with heavy use [UNVERIFIED-KNOWLEDGE]."], serious: ["Fire hazard on soaked fabrics [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["None. [NEP]"],
  local: { neml: "On the Bhutan NEML 2025: white soft paraffin 1 kg jar [BT-NEML].", strengths: "1 kg.", stg: "Emollient for eczema and dry skin [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [N5_BT],
  dose: { tagline: "Plain emollient and ointment base.",
    adult: [{ ind: "Dry skin, eczema", text: "Apply liberally and often.", bt: "Bhutan NEML: 1 kg jar." }],
    child: [{ ind: "Children and infants", text: "Same." }] }
});

FDB_M("phenylephrine", {
  inn: "Phenylephrine (injection)", atc: "C01CA06", cls: "Alpha-1 adrenergic agonist (vasopressor)",
  risk: "High-alert medication (IV adrenergic agonist) [ISMP]",
  linked: [],
  forms: ["Injection 10 mg/mL — must be diluted [FDA].", "Eye drops 2.5–10% and nasal products are separate [UNVERIFIED-KNOWLEDGE].", "Bhutan: phenylephrine 10 mg/mL injection, 1 mL (NRH/RRH); also tropicamide 0.8% + phenylephrine 5% eye drops [BT-NEML]."],
  moa: "Alpha-1 vasoconstriction raises blood pressure; reflex bradycardia [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["IV onset within a minute; short action [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hypotension from vasodilation during anaesthesia; vasodilatory shock [FDA] [BT-NEML]."], paed: ["Bhutan NEMF: hypotension in children 2 years and over [BT-NEML]. FDA: not established [FDA]."] },
  adult: [["Perioperative hypotension — bolus", "50–250 microgram IV (dilute first) (FDA); Bhutan NEMF 0.1–0.5 mg IV, not over 0.5 mg per dose [FDA] [BT-NEML]."], ["Perioperative hypotension — infusion", "0.5–1.4 microgram/kg/minute titrated [FDA]."], ["Vasodilatory shock", "0.5–6 microgram/kg/minute titrated [FDA]."], ["IM/SC (Bhutan NEMF)", "2–5 mg every 1–2 h if needed [BT-NEML]."]],
  paed: { tiers: ["2 years and over (Bhutan NEMF): IM/SC 0.1 mg/kg every 1–2 h (maximum 5 mg); IV 5–20 microgram/kg once, then 0.1–0.5 microgram/kg/minute [BT-NEML]."], transition: "Adult doses.", calcNote: "Concentrate is 10 mg/mL — dilute before IV bolus." },
  adj: { renal: N5_NEP, hepatic: N5_NEP, pregnancy: N5_NEP, other: "Potentiated by oxytocics; can cause severe bradycardia and fall in cardiac output [FDA]. Extravasation necrosis [FDA]. Contains sulfite [FDA]." },
  tox: { human: "Severe hypertension, reflex bradycardia, arrhythmia [FDA] [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Stop; alpha-blocker (phentolamine) for severe hypertension [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to the product [FDA].", "Bhutan NEMF: severe hypertension, angle-closure glaucoma, severe hyperthyroidism, ventricular tachycardia [BT-NEML]."],
  ae: { common: ["Hypertension, bradycardia, headache, anxiety [FDA] [BT-NEML]."], serious: ["Angina, heart failure or pulmonary hypertension exacerbation [FDA]", "Severe bradycardia, low cardiac output [FDA]", "Tissue necrosis on extravasation [FDA]"] },
  monitor: ["Continuous blood pressure and heart rate [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: phenylephrine 10 mg/mL injection [BT-NEML].", strengths: "10 mg/mL.", stg: "Spinal-anaesthesia hypotension; shock (ICU) [BT-NEML] [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [["FDA", "Phenylephrine hydrochloride injection 10 mg/mL — FDA label (DailyMed)", N5_DM("0bb7af81-62ec-4ae7-8055-89453f7a161d")], N5_BT, ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Pure vasoconstrictor for anaesthetic hypotension — dilute the 10 mg/mL ampoule.",
    cautionTitle: "Use with care",
    caution: "The 10 mg/mL ampoule must be diluted before IV use — a bolus is micrograms, not milligrams. Watch for bradycardia; extravasation causes necrosis [FDA].",
    adult: [{ ind: "Perioperative hypotension", text: "50–250 microgram IV bolus (diluted), or 0.5–1.4 microgram/kg/minute infusion.", bt: "Bhutan NEML: 10 mg/mL." }, { ind: "Vasodilatory shock", text: "0.5–6 microgram/kg/minute." }],
    child: [{ ind: "2 years and over (Bhutan NEMF)", text: "IV 5–20 microgram/kg once, then 0.1–0.5 microgram/kg/minute." }] }
});

FDB_M("antisnake-venom", {
  inn: "Antisnake venom serum (polyvalent, equine — Indian 'big four')", atc: "J06AA03", cls: "Antivenom (immune globulin fragments)",
  linked: [["Snakebite — adults and children", "Bhutan 2024 guideline doses [BT-STG]", "snakebite-adult"]],
  forms: ["Lyophilised powder per vial; reconstitute with 10 mL sterile water [BT-NEML].", "US antivenoms (CroFab, Anavip) cover American pit vipers only — not used in Bhutan [UNVERIFIED-KNOWLEDGE].", "Bhutan: anti-snake venom serum powder for injection (NRH/RRH/DH/PHC) [BT-NEML]."],
  moa: "Equine antibodies neutralise circulating venom of cobra, common krait, Russell's viper and saw-scaled viper [UNVERIFIED-KNOWLEDGE].",
  pk: ["Neutralises circulating venom only; does not reverse established paralysis quickly [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Envenoming by cobra, krait or viper: coagulopathy (unclotted 20-minute whole blood clotting test), neurotoxicity, shock or spreading local swelling [BT-STG] [BT-NEML]."], paed: ["Same dose as adults [BT-STG]."] },
  adult: [["Initial dose", "10 vials IV over 60 minutes — each reconstituted in 10 mL water, then diluted (about 200 mL saline; 5–10 mL/kg isotonic fluid) [BT-STG] [BT-NEML]."], ["Alternative", "Slow IV push, not faster than 2 mL/minute [BT-NEML]."], ["Premedication", "Adrenaline 0.25 mL SC; no test dose; no antihistamine or steroid premedication [BT-STG]."], ["Haemotoxic bites", "Repeat 20WBCT 6-hourly; 5 more vials until the blood clots (maximum 30 vials) [BT-STG]."], ["Neurotoxic bites", "Airway first; repeat dose if paralysis worsens; neostigmine trial [BT-STG]."], ["Green pit viper", "Polyvalent antivenom of limited value — supportive care [BT-STG]."]],
  paed: { tiers: ["Same number of vials as adults — dose depends on venom, not weight [BT-STG]."], transition: "Same.", calcNote: "Fixed vial number — no weight calculation." },
  adj: { renal: "Treat venom AKI separately (fluids, dialysis) [BT-STG] [UNVERIFIED-KNOWLEDGE].", hepatic: "Not applicable. [NEP]", pregnancy: "Give when indicated — envenoming threatens mother and fetus [UNVERIFIED-KNOWLEDGE].", other: "Have adrenaline ready; treat reactions with adrenaline 0.5 mg IM, repeat after 10 minutes if needed (Bhutan NEMF: adrenaline 1 mL IM, then 0.5 mL) [BT-NEML] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Early anaphylactic reactions; pyrogenic reactions; serum sickness at 1–2 weeks [BT-NEML] [UNVERIFIED-KNOWLEDGE].", animal: N5_LD, manage: "Stop infusion, adrenaline IM, then restart slowly once settled [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Bite by a non-venomous snake, or no puncture marks and no envenoming (Bhutan NEMF) [BT-NEML].", "Known hypersensitivity to horse serum is NOT an absolute bar in life-threatening envenoming — give with adrenaline ready [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Urticaria, fever, rigors, nausea [BT-NEML]."], serious: ["Anaphylaxis: pallor, sweating, vomiting, urticaria, hypotension [BT-NEML]", "Serum sickness [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["20WBCT on arrival, 6-hourly for 24 h and after antivenom; single-breath count in neurotoxic bites; creatinine, potassium, urine [BT-STG]."],
  local: { neml: "On the Bhutan NEML 2025: anti-snake venom serum (down to PHC) [BT-NEML].", strengths: "Lyophilised vial.", stg: "Bhutan 2024 snakebite guideline: 10 vials over 60 minutes, adrenaline SC premedication, no test dose [BT-STG]." },
  calc: [],
  sources: [N5_BT, ["BT-STG", "National Guideline for Management of Snakebite, Bhutan 2024 (via the guide's snakebite page)", ""]],
  dose: { tagline: "Polyvalent antivenom — 10 vials over 1 hour, same for adults and children.",
    cautionTitle: "Use with care",
    caution: "Anaphylaxis can occur at any point — have adrenaline drawn up. No test dose. Dose depends on the venom, not body weight: children get the same number of vials [BT-STG] [BT-NEML].",
    adult: [{ ind: "Envenoming (coagulopathy, neurotoxicity, shock)", text: "10 vials IV over 60 minutes; haemotoxic: 5 more vials 6-hourly until clotting (maximum 30).", bt: "Bhutan NEML: anti-snake venom serum vials." }],
    child: [{ ind: "Envenoming", text: "Same 10 vials as adults." }] }
});

/* Brand names — BATCH N5 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"mycophenolate-mofetil":{"IN":[["Immutil","La Renon Healthcare Pvt Ltd","Immutil 500Mg Strip Of 15 Tablets"],["Mofecon","Concord Biotech Limited","Mofecon 500Mg Strip Of 10 Tablets"],["Mycotero","Hetero Healthcare Limited","Mycotero 500Mg Strip Of 10 Tablets"]],"BD":[["Cellcept","Roche Bangladesh Ltd","500 mg"],["Phenocept","Renata PLC","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/immutil-500mg-strip-of-15-tablets-4485580","https://pharmeasy.in/online-medicine-order/mofecon-500mg-tablet-10-s-212372","https://pharmeasy.in/online-medicine-order/mycotero-500mg-tablet-10-s-234282","https://medex.com.bd/brands/15158/cellcept-500-mg-tablet","https://medex.com.bd/brands/15161/phenocept-500-mg-tablet"]},"silver-sulfadiazine":{"IN":[],"BD":[["Silverax","Healthcare Pharmaceuticals Ltd","1%"],["Silverzine","Gaco Pharmaceuticals Ltd","1%"],["Burna","Square Pharmaceuticals PLC","1%"]],"src":["https://medex.com.bd/brands/24484/silverax-1-cream","https://medex.com.bd/brands/12376/silverzine-1-cream","https://medex.com.bd/brands/12361/burna-1-cream"]},"triamcinolone":{"IN":[["Kenacort","Abbott Healthcare Pvt Ltd","Kenacort New 0.1% Tube Of 7.5Gm Oral Paste For Local Application"],["Tess","Troikaa Pharmaceuticals Ltd","Tess Tube Of 7.5Gm Buccal Paste"],["Turbocort","Indoco Remedies Ltd","Turbocort Paste 15Gm"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/kenacort-new-0-1-tube-of-7-5gm-oral-paste-for-local-application-3685778","https://pharmeasy.in/online-medicine-order/tess-tube-of-7-5gm-buccal-paste-4492766","https://pharmeasy.in/online-medicine-order/turbocort-paste-15gm-169056"]},"epoetin-alfa":{"IN":[["Vintor","Emcure Pharmaceuticals Ltd","Vintor 6000Iu Pre Filled Syringe Of 1Ml Solution For Injection"],["Ceriton","Ranbaxy Laboratories (sun Pharma)","Ceriton Epo 3000 Iu Injection 0.3 Ml"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/vintor-6000iu-pfs-inj-9525","https://pharmeasy.in/online-medicine-order/ceriton-epo-3000-iu-injection-0-3-ml-3731730"]},"betahistine":{"IN":[["Dizeazy","Avighna Medicare Pvt Ltd","Dizeazy 8Mg Strip Of 10 Tablets"],["Vertihist","Healing Pharma India Pvt Ltd","Vertihist 16Mg Strip Of 15 Tablets"],["Betahistol","Knoll Healthcare Pvt Ltd","Betahistol 8Mg Strip Of 10 Tablets"]],"BD":[["Verno","Aristopharma Ltd","16 mg"],["Menaril","Incepta Pharmaceuticals Ltd","8 mg"],["Betatin","Renata PLC","16 mg"]],"src":["https://pharmeasy.in/online-medicine-order/dizeazy-strip-of-10-tablets-3600508","https://pharmeasy.in/online-medicine-order/vertihist-16mg-strip-of-15-tablets-3868150","https://pharmeasy.in/online-medicine-order/betahistol-8mg-tab-109597","https://medex.com.bd/brands/39975/verno-16-mg-tablet","https://medex.com.bd/brands/4689/menaril-8-mg-tablet","https://medex.com.bd/brands/31422/betatin-16-mg-tablet"]},"cinnarizine":{"IN":[["Vertiron","Cipla Limited","Vertiron 25Mg Strip Of 25 Tablets"],["Stugeron","Dr Reddy's Laboratories Ltd","Stugeron Forte Strip Of 20 Tablets"],["Cinzan","Fdc Limited","Cinzan Dt 25Mg Strip Of 10 Tablets"]],"BD":[["Zincin","Aristopharma Ltd","15 mg"],["Cinarin","Nipa Pharmaceuticals Ltd","15 mg"]],"src":["https://pharmeasy.in/online-medicine-order/vertiron-25mg-tablet-25-s-6928","https://pharmeasy.in/online-medicine-order/stugeron-forte-75mg-strip-of-20-tablets-15406","https://pharmeasy.in/online-medicine-order/cinzan-25-dt-tab-10-s-10538","https://medex.com.bd/brands/4604/zincin-15-mg-tablet","https://medex.com.bd/brands/4595/cinarin-15-mg-tablet"]},"ethionamide":{"IN":[["Myobid","Mankind Pharmaceuticals Ltd","Myobid 250Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/myobid-250mg-strip-of-10-tablets-54587"]},"ethinylestradiol":{"IN":[["Evadiol","Intas Pharmaceuticals Ltd","Evadiol Strip Of 28 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/evadiol-tablet-14048"]},"pentoxifylline":{"IN":[["Cabaza","Jolly Healthcare","Cabaza 400Mg Strip Of 10 Tablets"]],"BD":[["Oxifyl CR","Square Pharmaceuticals PLC","400 mg"],["Trental","Synovia Pharma PLC","400 mg"],["Vasolax","Beximco Pharmaceuticals PLC","400 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cabaza-400mg-tablet-10-s-231450","https://medex.com.bd/brands/3165/oxifyl-cr-400-mg-cr-tablet","https://medex.com.bd/brands/3166/trental-400-mg-cr-tablet","https://medex.com.bd/brands/31927/vasolax-400-mg-cr-tablet"]},"vasopressin":{"IN":[["Vaprosin","Acurela Pharms Limited","Vaprosin 20U Ampoule Of 1Ml Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/vaprosin-20u-ampoule-of-1ml-injection-4718179"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
