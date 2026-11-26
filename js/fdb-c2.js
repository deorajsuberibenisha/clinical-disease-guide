/* Clinical Disease Guide — Drug monograph database, block C, batch 2 (24 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it). */

/* ================= Batch C-2 (fdb-c2.js) ================= */

/* ---------- CEFPODOXIME (FDA cefpodoxime proxetil tablets ANDA210568 and suspension ANDA065370; original VANTIN) ---------- */
FDB_M("cefpodoxime", {
  inn: "Cefpodoxime", atc: "J01DD13", cls: "Third-generation oral cephalosporin",
  linked: [["Acute otitis media; pharyngitis; sinusitis", "[FDA]", ""], ["Community-acquired pneumonia; bronchitis exacerbation", "[FDA]", ""], ["Uncomplicated UTI; skin infection; gonorrhoea", "[FDA]", ""]],
  forms: ["Tablets 100 mg and 200 mg; suspension 50 mg/5 mL and 100 mg/5 mL [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Take tablets with food [FDA].", "Half-life about 2–3 h; longer in kidney impairment [FDA].", "Antacids and H2 blockers reduce absorption [FDA]."],
  ind: { adult: ["Otitis media, pharyngitis/tonsillitis, CAP, bronchitis exacerbation, uncomplicated gonorrhoea, skin infection, maxillary sinusitis, uncomplicated UTI [FDA]."], paed: ["2 months through 12 years: otitis media, pharyngitis, sinusitis [FDA]."] },
  adult: [["Pharyngitis; uncomplicated UTI", "100 mg every 12 h (pharyngitis 5–10 days; UTI 7 days) [FDA]."], ["CAP; bronchitis; sinusitis", "200 mg every 12 h [FDA]."], ["Skin infection", "400 mg every 12 h, 7–14 days [FDA]."], ["Uncomplicated gonorrhoea", "200 mg single dose [FDA]."]],
  paed: { tiers: ["2 months–12 years: otitis media and sinusitis 5 mg/kg every 12 h (max 200 mg per dose, 400 mg/day) [FDA].", "Pharyngitis: 5 mg/kg every 12 h (max 100 mg per dose, 200 mg/day) [FDA]."], transition: "Adult dose from 12 years [FDA].", calcNote: "5 mg/kg every 12 h with the label maximum." },
  adj: { renal: "CrCl under 30: same dose every 24 h; haemodialysis: 3 times a week after dialysis [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Cross-allergy in up to 10% of penicillin-allergic patients [FDA]." },
  tox: { human: "Beta-lactam overdose: nausea, vomiting, epigastric distress, diarrhoea [FDA].", animal: "Rodents: single 5 g/kg oral dose produced no adverse effects [FDA].", manage: "Haemodialysis or peritoneal dialysis may help, especially with kidney impairment [FDA]." },
  contra: ["Known allergy to cefpodoxime or other cephalosporins [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vaginal fungal infection, abdominal pain, headache [NEP]."], serious: ["Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Clinical response [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefpodoxime", indication_id: "child", label: "Child 2 months–12 years (otitis, sinusitis) — 5 mg/kg every 12 h", route: "PO", population: { min_age_months: 2, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 200, max_daily: 400, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 10, unit: "mg/mL" }, { form: "susp", strength: 20, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "extend_interval", factor: 24 }], flags: [], sources: ["FDA"] },
    { drug: "cefpodoxime", indication_id: "child-ph", label: "Child pharyngitis — 5 mg/kg every 12 h (max 100 mg per dose)", route: "PO", population: { min_age_months: 2, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, max_daily: 200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 10, unit: "mg/mL" }, { form: "susp", strength: 20, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "extend_interval", factor: 24 }], flags: [], sources: ["FDA"] },
    { drug: "cefpodoxime", indication_id: "adult", label: "Adult — 200 mg every 12 h (CAP, bronchitis, sinusitis)", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "extend_interval", factor: 24 }], renal_note: "Haemodialysis: 3 times a week after dialysis", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefpodoxime proxetil tablets — Ascend Laboratories (ANDA210568), label effective 2026-10-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce5646cb-a450-4c2c-8499-6ecf71b12b0e"], ["FDA", "Cefpodoxime proxetil for oral suspension — NorthStar Rx (ANDA065370), label effective 2024-01-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4587a7c1-cd6c-4946-a0dd-fcfe0c8504b9"]],
  dose: { tagline: "Twice-daily oral third-generation cephalosporin.",
    adult: [
      { ind: "CAP, bronchitis, sinusitis", text: "200 mg every 12 hours with food.", calc: ["adult"] },
      { ind: "Pharyngitis; uncomplicated UTI", text: "100 mg every 12 hours." },
      { ind: "Skin infection", text: "400 mg every 12 hours." },
      { ind: "Uncomplicated gonorrhoea", text: "200 mg as a single dose." }
    ],
    child: [
      { ind: "Otitis media, sinusitis (2 months–12 years)", text: "5 mg/kg every 12 hours (max 200 mg per dose).", calc: ["child"] },
      { ind: "Pharyngitis", text: "5 mg/kg every 12 hours (max 100 mg per dose).", calc: ["child-ph"] }
    ] }
});

/* ---------- CEFPROZIL (FDA cefprozil, NorthStar Rx ANDA065381, eff. 2026-07-09; original CEFZIL) ---------- */
FDB_M("cefprozil", {
  inn: "Cefprozil", atc: "J01DC10", cls: "Second-generation oral cephalosporin",
  linked: [["Pharyngitis/tonsillitis; otitis media; sinusitis", "[FDA]", ""], ["Bronchitis exacerbation; uncomplicated skin infection", "[FDA]", ""]],
  forms: ["Tablets 250 mg and 500 mg; suspension 125 mg/5 mL and 250 mg/5 mL [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Half-life about 1.3 h; up to 5.9 h in kidney impairment [FDA].", "Partly removed by haemodialysis — give after the session [FDA]."],
  ind: { adult: ["Pharyngitis/tonsillitis, sinusitis, bronchitis exacerbation, uncomplicated skin infection [FDA]."], paed: ["6 months–12 years: otitis media, sinusitis; 2–12 years: pharyngitis, skin infection [FDA]."] },
  adult: [["Pharyngitis/tonsillitis (13 years and over)", "500 mg every 24 h for 10 days [FDA]."], ["Sinusitis", "250 mg or 500 mg every 12 h (higher for moderate–severe), 10 days [FDA]."], ["Bronchitis exacerbation", "500 mg every 12 h [FDA]."], ["Skin infection", "250 mg every 12 h, or 500 mg every 24 h, or 500 mg every 12 h [FDA]."]],
  paed: { tiers: ["Otitis media (6 months–12 years): 15 mg/kg every 12 h [FDA].", "Sinusitis: 7.5 or 15 mg/kg every 12 h [FDA].", "Pharyngitis (2–12 years): 7.5 mg/kg every 12 h [FDA].", "Skin (2–12 years): 20 mg/kg every 24 h [FDA].", "Not more than the adult dose [FDA]."], transition: "Adult dose from 13 years [FDA].", calcNote: "mg/kg per dose, capped at the adult dose." },
  adj: { renal: "CrCl 30–120: standard; 0–29: 50% of the standard dose at the standard interval; give after haemodialysis [FDA].", hepatic: "No adjustment [FDA].", preg: "Not established in primary source. [NEP]", other: "Cross-allergy in up to 10% of penicillin-allergic patients [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Rats and mice: single 5000 mg/kg oral doses caused no deaths [FDA].", manage: "Haemodialysis helps in severe overdose [FDA]." },
  contra: ["Known allergy to cephalosporins [FDA]."],
  ae: { common: ["Nausea (3.5%), diarrhoea (2.9%), vomiting, abdominal pain, raised AST/ALT [FDA]."], serious: ["Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Clinical response [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefprozil", indication_id: "om", label: "Otitis media (6 months–12 years) — 15 mg/kg every 12 h", route: "PO", population: { min_age_months: 6, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { adult_ceiling_single: 500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5 }], flags: [], sources: ["FDA"] },
    { drug: "cefprozil", indication_id: "ph", label: "Pharyngitis (2–12 years) — 7.5 mg/kg every 12 h", route: "PO", population: { min_age_months: 24, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 7.5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { adult_ceiling_single: 500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5 }], flags: [], sources: ["FDA"] },
    { drug: "cefprozil", indication_id: "adult", label: "Adult — 500 mg every 12 h", route: "PO", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5 }], renal_note: "Haemodialysis: give after the session", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefprozil tablets and oral suspension — NorthStar Rx (ANDA065381), label effective 2026-07-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e3943b5-8c30-4c81-bcfa-aeaaa1d75fb4"]],
  dose: { tagline: "Oral second-generation cephalosporin for ear, throat, sinus and skin infections.",
    adult: [
      { ind: "Bronchitis; moderate–severe sinusitis", text: "500 mg every 12 hours.", calc: ["adult"] },
      { ind: "Pharyngitis/tonsillitis", text: "500 mg once daily for 10 days." },
      { ind: "Skin infection", text: "250 mg every 12 h, or 500 mg once daily, or 500 mg every 12 h." }
    ],
    child: [
      { ind: "Otitis media (6 months–12 years)", text: "15 mg/kg every 12 hours.", calc: ["om"] },
      { ind: "Pharyngitis (2–12 years)", text: "7.5 mg/kg every 12 hours for 10 days.", calc: ["ph"] },
      { ind: "Skin infection (2–12 years)", text: "20 mg/kg once daily." }
    ] }
});

/* ---------- CEFTAROLINE FOSAMIL (FDA TEFLARO, Allergan, NDA200327, eff. 2024-11-20) ---------- */
FDB_M("ceftaroline-fosamil", {
  inn: "Ceftaroline fosamil", atc: "J01DI02", cls: "Fifth-generation cephalosporin (anti-MRSA)",
  linked: [["Acute bacterial skin infection (including MRSA)", "[FDA]", ""], ["Community-acquired pneumonia", "[FDA]", "pneumonia-adult"]],
  forms: ["Powder for injection 400 mg and 600 mg vials [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis; binds PBP2a of MRSA [NEP].",
  pk: ["Removed partly by haemodialysis [FDA]."],
  ind: { adult: ["Acute bacterial skin and skin structure infection (ABSSSI); community-acquired bacterial pneumonia (CABP) [FDA]."], paed: ["ABSSSI from 34 weeks gestational and 12 days postnatal age; CABP from 2 months [FDA]."] },
  adult: [["ABSSSI; CABP", "600 mg IV every 12 h over 5–60 min; ABSSSI 5–14 days, CABP 5–7 days [FDA]."]],
  paed: { tiers: ["2–17 years over 33 kg: 400 mg every 8 h or 600 mg every 12 h [FDA].", "2–17 years 33 kg or less: 12 mg/kg every 8 h [FDA].", "2 months–under 2 years: 8 mg/kg every 8 h [FDA].", "Under 2 months (ABSSSI only): 6 mg/kg every 8 h over 30–60 min [FDA]."], transition: "Adult dose from 18 years [FDA].", calcNote: "mg/kg every 8 h by age and weight." },
  adj: { renal: "Adults: CrCl >30–50: 400 mg every 12 h; 15–30: 300 mg every 12 h; ESRD/haemodialysis: 200 mg every 12 h (after dialysis). Children with CrCl under 50: not enough information [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "No adequate human data; no harm in animals [FDA].", other: "Coombs test conversion — check for haemolytic anaemia if anaemia develops [FDA]." },
  tox: { human: "Encephalopathy in kidney impairment [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive care; haemodialysis removes some [FDA]." },
  contra: ["Serious hypersensitivity to ceftaroline or other cephalosporins [FDA]."],
  ae: { common: ["Diarrhoea, nausea, rash [FDA]."], serious: ["Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]", "Neurological reactions, encephalopathy [FDA]", "Haemolytic anaemia [FDA]"] },
  monitor: ["Kidney function; haemoglobin [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "ceftaroline-fosamil", indication_id: "adult", label: "Adult — 600 mg every 12 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 600, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [{ crcl_min: 30.001, crcl_max: 50, action: "reduce_dose", set_value: 400, interval_h: 12 }, { crcl_min: 15, crcl_max: 30, action: "reduce_dose", set_value: 300, interval_h: 12 }, { crcl_min: 0, crcl_max: 14.999, action: "reduce_dose", set_value: 200, interval_h: 12 }], renal_note: "Haemodialysis: 200 mg every 12 h, given after dialysis", flags: [], sources: ["FDA"] },
    { drug: "ceftaroline-fosamil", indication_id: "c33", label: "Child 2–17 years, 33 kg or less — 12 mg/kg every 8 h", route: "IV", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: null, max_weight_kg: 33.0001 }, basis: "mg_per_kg", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 400, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest mg", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "avoid", note: "not enough information to dose children with CrCl under 50 mL/min/1.73 m²" }], flags: [], sources: ["FDA"] },
    { drug: "ceftaroline-fosamil", indication_id: "cbig", label: "Child 2–17 years, over 33 kg — 400 mg every 8 h", route: "IV", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 33.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vial", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "avoid", note: "not enough information to dose children with CrCl under 50 mL/min/1.73 m²" }], flags: ["Or 600 mg every 12 h"], sources: ["FDA"] },
    { drug: "ceftaroline-fosamil", indication_id: "inf", label: "Infant 2 months–under 2 years — 8 mg/kg every 8 h", route: "IV", population: { min_age_months: 2, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 8, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest mg", renal: [{ crcl_min: 0, crcl_max: 49.999, action: "avoid", note: "not enough information to dose children with CrCl under 50 mL/min/1.73 m²" }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TEFLARO (ceftaroline fosamil) for injection — Allergan, label effective 2024-11-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ecde48b-75a2-4beb-9999-369f3f61bb8a"]],
  dose: { tagline: "IV anti-MRSA cephalosporin for skin infection and community pneumonia.",
    adult: [{ ind: "Skin infection; community pneumonia", text: "600 mg IV every 12 hours. CrCl >30–50: 400 mg; 15–30: 300 mg; ESRD: 200 mg every 12 h.", calc: ["adult"] }],
    child: [
      { ind: "2–17 years, over 33 kg", text: "400 mg every 8 h or 600 mg every 12 h.", calc: ["cbig"] },
      { ind: "2–17 years, 33 kg or less", text: "12 mg/kg every 8 hours.", calc: ["c33"] },
      { ind: "2 months to under 2 years", text: "8 mg/kg every 8 hours.", calc: ["inf"] },
      { ind: "Under 2 months (skin infection only)", text: "6 mg/kg every 8 h over 30–60 min (from 34 weeks gestation and 12 days old)." }
    ] }
});

/* ---------- CEFTAZIDIME (FDA ceftazidime for injection, Sagent ANDA062640, eff. 2026-08-03; original FORTAZ/TAZICEF) ---------- */
FDB_M("ceftazidime", {
  inn: "Ceftazidime", atc: "J01DD02", cls: "Third-generation antipseudomonal cephalosporin",
  linked: [["Pseudomonas infections; febrile neutropenia", "[FDA]", ""], ["Hospital pneumonia; complicated UTI; meningitis", "[FDA]", ""]],
  forms: ["Powder for injection 500 mg, 1 g, 2 g, 6 g [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis [FDA].",
  pk: ["Half-life about 1.9 h; excreted almost entirely by the kidneys [FDA]."],
  ind: { adult: ["Lower respiratory, skin, urinary, bacterial septicaemia, bone and joint, gynaecological, intra-abdominal and CNS infections (including meningitis) [FDA]."], paed: ["Neonates to adolescents [FDA]."] },
  adult: [["Usual", "1 g IV/IM every 8–12 h [FDA]."], ["Uncomplicated UTI", "250 mg every 12 h [FDA]."], ["Complicated UTI", "500 mg every 8–12 h [FDA]."], ["Uncomplicated pneumonia; mild skin", "500 mg–1 g every 8 h [FDA]."], ["Bone and joint", "2 g IV every 12 h [FDA]."], ["Serious gynaecological/intra-abdominal; meningitis; life-threatening", "2 g IV every 8 h [FDA]."]],
  paed: { tiers: ["Neonates (0–4 weeks): 30 mg/kg IV every 12 h [FDA].", "1 month–12 years: 30–50 mg/kg IV every 8 h, maximum 6 g/day (higher dose for immunocompromised, cystic fibrosis, meningitis) [FDA]."], transition: "Adult dose from 12 years [NEP].", calcNote: "mg/kg per dose." },
  adj: { renal: "After a 1 g loading dose: CrCl 31–50: 1 g every 12 h; 16–30: 1 g every 24 h; 6–15: 500 mg every 24 h; under 5: 500 mg every 48 h. If the usual dose is lower, use the lower dose [FDA].", hepatic: "No adjustment [FDA].", preg: "Not established in primary source. [NEP]", other: "Seizures, encephalopathy, asterixis with unadjusted doses in kidney failure [FDA]." },
  tox: { human: "Seizures, encephalopathy, asterixis, neuromuscular excitability, coma — in kidney failure [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis or peritoneal dialysis [FDA]." },
  contra: ["Hypersensitivity to ceftazidime or cephalosporins [FDA]."],
  ae: { common: ["Phlebitis at injection site, rash, pruritus, diarrhoea, eosinophilia [NEP]."], serious: ["Anaphylaxis [FDA]", "Neurotoxicity in kidney impairment [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Kidney function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "ceftazidime", indication_id: "adult", label: "Adult usual — 1 g every 8 h", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, max_daily: 6000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [{ crcl_min: 31, crcl_max: 50, action: "lower_of", abs_dose: 1000, interval_h: 12 }, { crcl_min: 16, crcl_max: 30.999, action: "lower_of", abs_dose: 1000, interval_h: 24 }, { crcl_min: 6, crcl_max: 15.999, action: "lower_of", abs_dose: 500, interval_h: 24 }, { crcl_min: 0, crcl_max: 5.999, action: "lower_of", abs_dose: 500, interval_h: 48 }], renal_note: "Kidney impairment: 1 g loading dose first", flags: [], sources: ["FDA"] },
    { drug: "ceftazidime", indication_id: "severe", label: "Adult severe / meningitis — 2 g every 8 h", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2000, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, max_daily: 6000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [{ crcl_min: 31, crcl_max: 50, action: "lower_of", abs_dose: 1000, interval_h: 12 }, { crcl_min: 16, crcl_max: 30.999, action: "lower_of", abs_dose: 1000, interval_h: 24 }, { crcl_min: 6, crcl_max: 15.999, action: "lower_of", abs_dose: 500, interval_h: 24 }, { crcl_min: 0, crcl_max: 5.999, action: "lower_of", abs_dose: 500, interval_h: 48 }], renal_note: "Kidney impairment: 1 g loading dose first; in severe infection the label allows the unit dose to be raised by 50% or the interval shortened, guided by levels", flags: [], sources: ["FDA"] },
    { drug: "ceftazidime", indication_id: "neo", label: "Neonate (0–4 weeks) — 30 mg/kg every 12 h", route: "IV", population: { min_age_months: 0, max_age_months: 1, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest mg", renal: [], renal_note: "Kidney impairment: reduce as in the label table", flags: [], sources: ["FDA"] },
    { drug: "ceftazidime", indication_id: "child", label: "Child 1 month–12 years — 30–50 mg/kg every 8 h (max 6 g/day)", route: "IV", population: { min_age_months: 1, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose", value_max: 50 }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, max_daily: 6000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [{ crcl_min: 31, crcl_max: 50, action: "lower_of", abs_dose: 1000, interval_h: 12 }, { crcl_min: 16, crcl_max: 30.999, action: "lower_of", abs_dose: 1000, interval_h: 24 }, { crcl_min: 6, crcl_max: 15.999, action: "lower_of", abs_dose: 500, interval_h: 24 }, { crcl_min: 0, crcl_max: 5.999, action: "lower_of", abs_dose: 500, interval_h: 48 }], flags: ["50 mg/kg for immunocompromised, cystic fibrosis or meningitis"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ceftazidime for injection USP — Sagent Pharmaceuticals (ANDA062640), label effective 2026-08-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=112c5457-8d71-49f5-b531-9761d7d38c93"]],
  dose: { tagline: "IV antipseudomonal third-generation cephalosporin; cut doses in kidney impairment.",
    adult: [
      { ind: "Usual", text: "1 g IV or IM every 8–12 hours.", calc: ["adult"] },
      { ind: "Severe infection; meningitis", text: "2 g IV every 8 hours.", calc: ["severe"] },
      { ind: "Uncomplicated UTI", text: "250 mg every 12 hours." }
    ],
    child: [
      { ind: "Neonates (0–4 weeks)", text: "30 mg/kg IV every 12 hours.", calc: ["neo"] },
      { ind: "1 month–12 years", text: "30–50 mg/kg IV every 8 hours (max 6 g a day).", calc: ["child"] }
    ] }
});

/* ---------- CEFTRIAXONE (FDA ceftriaxone sodium vials, Hospira ANDA065169, eff. 2026-01-19; original ROCEPHIN) ---------- */
FDB_M("ceftriaxone", {
  inn: "Ceftriaxone", atc: "J01DD04", cls: "Third-generation cephalosporin (once daily)",
  linked: [["Bacterial meningitis", "100 mg/kg/day in children [FDA]", ""], ["Community-acquired pneumonia; sepsis", "[FDA]", "pneumonia-adult"], ["Gonorrhoea and chancroid", "Single IM dose [BT-STG]", ""], ["Spontaneous bacterial peritonitis / variceal bleeding prophylaxis in cirrhosis", "Bhutan STG [BT-STG]", ""]],
  forms: ["Powder for injection 250 mg, 500 mg, 1 g, 2 g, 10 g [FDA].", "Bhutan: 250 mg and 1 g powder for injection [BT-NEML]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["Half-life about 5.8–8.7 h; excreted in urine and bile [FDA].", "No adjustment in kidney or liver impairment up to 2 g a day [FDA].", "Not removed by dialysis [FDA]."],
  ind: { adult: ["Lower respiratory, acute otitis media, skin, urinary, uncomplicated gonorrhoea, PID, septicaemia, bone and joint, intra-abdominal infections, meningitis; surgical prophylaxis [FDA]."], paed: ["Children; contraindicated in premature neonates up to 41 weeks post-menstrual age, and in neonates who need IV calcium [FDA]."] },
  adult: [["Usual", "1–2 g once daily (or in 2 divided doses); maximum 4 g/day [FDA]."], ["Uncomplicated gonorrhoea", "250 mg IM single dose [FDA] — Bhutan STG: 250 mg IM single dose plus azithromycin [BT-STG]."], ["Surgical prophylaxis", "1 g IV once, 30 min–2 h before surgery [FDA]."]],
  paed: { tiers: ["Skin infection: 50–75 mg/kg once daily (or divided every 12 h); maximum 2 g/day [FDA].", "Serious infection other than meningitis: 50–75 mg/kg/day every 12 h; maximum 2 g/day [FDA].", "Meningitis: 100 mg/kg first dose (max 4 g), then 100 mg/kg/day (max 4 g) once daily or every 12 h, 7–14 days [FDA].", "Acute otitis media: 50 mg/kg IM once (max 1 g) [FDA].", "Neonates: give IV over 60 minutes; not in hyperbilirubinaemia [FDA]."], transition: "Adult doses for larger children [NEP].", calcNote: "mg/kg with the label daily maximum." },
  adj: { renal: "No adjustment up to 2 g a day [FDA].", hepatic: "No adjustment up to 2 g a day; with both liver and severe kidney impairment do not exceed 2 g a day [FDA].", preg: "Decades of cephalosporin use have not shown drug-associated risk [FDA].", other: "Never give at the same time as IV calcium (precipitates); in patients other than neonates give sequentially with a flushed line [FDA]. Do not use calcium-containing diluents (Ringer's, Hartmann's) [FDA]." },
  tox: { human: "In severe kidney impairment: encephalopathy, seizures, myoclonus, non-convulsive status [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the drug; supportive; not removed by dialysis [FDA]." },
  contra: ["Hypersensitivity to ceftriaxone, cephalosporins, penicillins or other beta-lactams (anaphylaxis) [FDA].", "Premature neonates up to 41 weeks post-menstrual age [FDA].", "Neonates (≤28 days) needing IV calcium-containing solutions [FDA].", "Hyperbilirubinaemic neonates [FDA]."],
  ae: { common: ["Injection-site reactions, diarrhoea, rash, eosinophilia, raised liver enzymes [NEP]."], serious: ["Anaphylaxis [FDA]", "Ceftriaxone–calcium precipitates in lungs and kidneys [FDA]", "Haemolytic anaemia [FDA]", "Biliary sludge / pseudolithiasis; pancreatitis [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Haemoglobin if anaemia; gallbladder symptoms; PT if poor vitamin K intake [NEP]."],
  local: { neml: "Ceftriaxone 250 mg and 1 g powder for injection [BT-NEML].", strengths: "250 mg and 1 g vials.", stg: "Bhutan STG 2024: gonorrhoea and chancroid 250 mg IM single dose; variceal bleeding with cirrhosis 1 g once daily; 1 g IV every 12 h as an alternative (adult dose); 2 g IV every 12 h with gentamicin 7.5 mg/kg/day in one listed regimen [BT-STG]." },
  calc: [
    { drug: "ceftriaxone", indication_id: "child", label: "Child serious infection — 50–75 mg/kg/day ÷ every 12 h (max 2 g/day)", route: "IV", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "day", value_max: 75 }, interval_h: 12, divided_doses: 2, caps: { max_daily: 2000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [], flags: [], sources: ["FDA"] },
    { drug: "ceftriaxone", indication_id: "men", label: "Child meningitis — 100 mg/kg once daily (max 4 g)", route: "IV", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 4000, max_daily: 4000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [], flags: ["Or 50 mg/kg every 12 h"], sources: ["FDA"] },
    { drug: "ceftriaxone", indication_id: "aom", label: "Acute otitis media — 50 mg/kg IM once (max 1 g)", route: "IM", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [], flags: [], sources: ["FDA"] },
    { drug: "ceftriaxone", indication_id: "adult", label: "Adult — 1–2 g once daily (max 4 g/day)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose", value_max: 2000 }, interval_h: 24, divided_doses: 1, caps: { max_single: 4000, max_daily: 4000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [], renal_note: "With both liver and severe kidney impairment: not more than 2 g a day", flags: [], sources: ["FDA"] },
    { drug: "ceftriaxone", indication_id: "gc", label: "Uncomplicated gonorrhoea — 250 mg IM once", route: "IM", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 250, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "One 250 mg vial", renal: [], flags: ["Bhutan STG: plus azithromycin"], sources: ["FDA", "BT-STG"] }
  ],
  sources: [["FDA", "Ceftriaxone for injection USP — Hospira (ANDA065169), label effective 2026-01-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=03283208-8616-4117-9d2b-aa8046017a4f"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Once-daily IV/IM third-generation cephalosporin; never with IV calcium in neonates.",
    adult: [
      { ind: "Usual infections", text: "1–2 g once daily (or split every 12 h). Maximum 4 g a day.", calc: ["adult"] },
      { ind: "Gonorrhoea; chancroid", text: "250 mg IM once (Bhutan STG: plus azithromycin for gonorrhoea).", calc: ["gc"] },
      { ind: "Surgical prophylaxis", text: "1 g IV once, 30 min–2 h before surgery." }
    ],
    child: [
      { ind: "Serious infection (not meningitis)", text: "50–75 mg/kg/day in 2 doses. Maximum 2 g a day.", calc: ["child"] },
      { ind: "Meningitis", text: "100 mg/kg once daily (max 4 g), 7–14 days.", calc: ["men"] },
      { ind: "Acute otitis media", text: "50 mg/kg IM once (max 1 g).", calc: ["aom"] },
      { ind: "Neonates", text: "Not in premature or jaundiced neonates or with IV calcium; give IV over 60 minutes." }
    ] }
});

/* ---------- CEFUROXIME (FDA cefuroxime sodium vials Sagent ANDA064125 + B. Braun NDA050780; cefuroxime axetil tablets ANDA065308; originals ZINACEF/CEFTIN) ---------- */
FDB_M("cefuroxime", {
  inn: "Cefuroxime", atc: "J01DC02", cls: "Second-generation cephalosporin (IV and oral)",
  linked: [["Community-acquired pneumonia; bronchitis exacerbation", "[FDA]", "pneumonia-adult"], ["Surgical prophylaxis", "1.5 g IV before incision [FDA]", ""], ["Pharyngitis, sinusitis, otitis media, UTI, skin, early Lyme (oral)", "[FDA]", ""]],
  forms: ["Powder for injection 750 mg, 1.5 g, 7.5 g [FDA].", "Tablets (axetil) 250 mg and 500 mg; suspension 125 and 250 mg/5 mL [FDA]."],
  moa: "Inhibits bacterial cell-wall synthesis [NEP].",
  pk: ["IV half-life about 80 minutes; dialysable [FDA].", "Oral tablets and suspension are not bioequivalent — not interchangeable mg for mg [FDA]."],
  ind: { adult: ["IV: lower respiratory, urinary, skin, septicaemia, meningitis, gonorrhoea, bone and joint infections; surgical prophylaxis [FDA].", "Oral: pharyngitis, sinusitis, bronchitis, skin, uncomplicated UTI, gonorrhoea, early Lyme disease [FDA]."], paed: ["IV: above 3 months. Oral tablets: children who can swallow tablets [FDA]."] },
  adult: [["IV usual", "750 mg–1.5 g every 8 h for 5–10 days; 1.5 g every 8 h if severe or bone/joint; up to 1.5 g every 6 h if life-threatening [FDA]."], ["IV meningitis", "Not more than 3 g every 8 h [FDA]."], ["Surgical prophylaxis", "1.5 g IV 30–60 min before incision, then 750 mg every 8 h if prolonged; open heart: 1.5 g at induction then every 12 h, total 6 g [FDA]."], ["Oral (13 years and over)", "250 mg every 12 h (pharyngitis, sinusitis, UTI); 250–500 mg every 12 h (bronchitis, skin); 500 mg every 12 h for 20 days (early Lyme); 1 g once (gonorrhoea) [FDA]."]],
  paed: { tiers: ["IV, above 3 months: 50–100 mg/kg/day in 3–4 doses (every 6–8 h); bone and joint 150 mg/kg/day every 8 h; not above the adult maximum [FDA].", "Oral tablets under 13 years (can swallow tablets): 250 mg every 12 h for otitis media and sinusitis [FDA].", "Under 3 months: not established [FDA]."], transition: "Adult doses from 13 years (oral) [FDA].", calcNote: "IV mg/kg/day ÷ 3 (every 8 h)." },
  adj: { renal: "IV adults: CrCl over 20: usual; 10–20: 750 mg every 12 h; under 10: 750 mg every 24 h; extra dose after haemodialysis. Children: change the frequency as for adults [FDA]. Oral: CrCl 10–<30: usual dose every 24 h; under 10: every 48 h [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Premixed dextrose form: caution with corn allergy [FDA]." },
  tox: { human: "Cerebral irritation and convulsions [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Haemodialysis or peritoneal dialysis lowers levels [FDA]." },
  contra: ["Known allergy to cephalosporins [FDA]."],
  ae: { common: ["Thrombophlebitis (IV, 1 in 60), diarrhoea, nausea, eosinophilia [FDA]."], serious: ["Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]"] },
  monitor: ["Kidney function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cefuroxime", indication_id: "iv", label: "Adult IV — 750 mg–1.5 g every 8 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 750, unit: "mg", per: "dose", value_max: 1500 }, interval_h: 8, divided_doses: 3, caps: { max_single: 3000, max_daily: 9000, unit: "mg" }, weight_basis: "NEP", formulations: [], rounding: "Whole vials", renal: [{ crcl_min: 10, crcl_max: 20, action: "lower_of", abs_dose: 750, interval_h: 12 }, { crcl_min: 0, crcl_max: 9.999, action: "lower_of", abs_dose: 750, interval_h: 24 }], renal_note: "Haemodialysis: an extra dose at the end of dialysis", flags: [], sources: ["FDA"] },
    { drug: "cefuroxime", indication_id: "child", label: "Child IV over 3 months — 50–100 mg/kg/day ÷ every 8 h", route: "IV", population: { min_age_months: 3, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 50, unit: "mg", per: "day", value_max: 100 }, interval_h: 8, divided_doses: 3, caps: { adult_ceiling_daily: 9000, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [{ crcl_min: 10, crcl_max: 20, action: "extend_interval", factor: 12 }, { crcl_min: 0, crcl_max: 9.999, action: "extend_interval", factor: 24 }], flags: ["Bone and joint: 150 mg/kg/day"], sources: ["FDA"] },
    { drug: "cefuroxime", indication_id: "oral", label: "Oral tablets (13 years and over) — 250–500 mg every 12 h", route: "PO", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose", value_max: 500 }, interval_h: 12, divided_doses: 2, caps: { max_single: 500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 10, crcl_max: 29.999, action: "extend_interval", factor: 24 }, { crcl_min: 0, crcl_max: 9.999, action: "extend_interval", factor: 48 }], renal_note: "Haemodialysis: one extra dose after each session", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cefuroxime for injection USP — Sagent (ANDA064125), label effective 2025-03-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a145288-733a-4966-b7ae-dc96eb103d8c"], ["FDA", "Cefuroxime and dextrose injection — B. Braun (NDA050780), label effective 2020-12-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=07170ee3-1a24-424f-a2a2-00bc92e98f85"], ["FDA", "Cefuroxime axetil tablets USP (ANDA065308), label effective 2025-10-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=119c4d09-2324-498f-9318-1f8db49ad4b6"]],
  dose: { tagline: "Second-generation cephalosporin: IV every 8 h or oral axetil every 12 h.",
    adult: [
      { ind: "IV treatment", text: "750 mg–1.5 g every 8 hours (meningitis up to 3 g every 8 h).", calc: ["iv"] },
      { ind: "Surgical prophylaxis", text: "1.5 g IV 30–60 min before incision; 750 mg every 8 h if prolonged." },
      { ind: "Oral", text: "250–500 mg every 12 hours; gonorrhoea 1 g once; early Lyme 500 mg every 12 h for 20 days.", calc: ["oral"] }
    ],
    child: [
      { ind: "IV, above 3 months", text: "50–100 mg/kg/day in 3–4 doses; bone and joint 150 mg/kg/day.", calc: ["child"] },
      { ind: "Oral tablets (can swallow)", text: "250 mg every 12 hours for otitis media or sinusitis." }
    ] }
});

/* ---------- CELECOXIB (FDA CELEBREX, Viatris, NDA020998, eff. 2024-11-22) ---------- */
FDB_M("celecoxib", {
  inn: "Celecoxib", atc: "M01AH01", cls: "COX-2 selective NSAID",
  linked: [["Osteoarthritis", "[FDA]", "oa-adult"], ["Rheumatoid arthritis; ankylosing spondylitis", "[FDA]", "ra-adult"], ["Acute pain; primary dysmenorrhoea", "[FDA]", ""], ["Juvenile rheumatoid arthritis (2 years and over)", "[FDA]", ""]],
  forms: ["Capsules 50, 100, 200, 400 mg [FDA]."],
  moa: "Inhibits prostaglandin synthesis, mainly via COX-2 [FDA].",
  pk: ["Half-life about 11 h; metabolised by CYP2C9 [FDA]."],
  ind: { adult: ["Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, acute pain, primary dysmenorrhoea [FDA]."], paed: ["JRA in patients 2 years and over [FDA]."] },
  adult: [["Osteoarthritis", "200 mg once daily or 100 mg twice daily [FDA]."], ["Rheumatoid arthritis", "100–200 mg twice daily [FDA]."], ["Ankylosing spondylitis", "200 mg once daily or 100 mg twice daily; trial of 400 mg/day after 6 weeks if no effect [FDA]."], ["Acute pain; dysmenorrhoea", "400 mg first, then 200 mg if needed on day 1; then 200 mg twice daily as needed [FDA]."]],
  paed: { tiers: ["JRA, 10–25 kg: 50 mg twice daily [FDA].", "JRA, over 25 kg: 100 mg twice daily [FDA]."], transition: "Adult doses [FDA].", calcNote: "Weight bands for JRA." },
  adj: { renal: "Avoid in advanced kidney disease unless benefit outweighs risk [FDA].", hepatic: "Moderate (Child-Pugh B): halve the daily dose; severe: not recommended [FDA].", preg: "Limit use at 20–30 weeks; avoid from about 30 weeks (ductus closure, oligohydramnios) [FDA].", other: "CYP2C9 poor metabolisers: consider halving the dose [FDA]." },
  tox: { human: "Lethargy, drowsiness, nausea, vomiting, epigastric pain; rarely GI bleeding, hypertension, kidney failure, coma [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; no antidote [FDA]." },
  contra: ["Known hypersensitivity to celecoxib, its components, or sulfonamides [FDA].", "Asthma, urticaria or allergic reactions after aspirin or other NSAIDs [FDA].", "Coronary artery bypass graft (CABG) surgery setting [FDA]."],
  ae: { common: ["Abdominal pain, diarrhoea, dyspepsia, flatulence, peripheral oedema, accidental injury, dizziness, pharyngitis, rhinitis, sinusitis, upper respiratory infection, rash [NEP]."], serious: ["Cardiovascular thrombotic events (boxed) [FDA]", "GI bleeding, ulceration, perforation (boxed) [FDA]", "Hepatotoxicity; hypertension; heart failure; kidney toxicity and hyperkalaemia [FDA]", "Serious skin reactions; DRESS [FDA]"] },
  monitor: ["BP; kidney function; liver tests; signs of GI bleeding [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "celecoxib", indication_id: "oa", label: "Osteoarthritis — 200 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 200, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], renal_note: "Advanced kidney disease: avoid unless benefit outweighs risk", flags: [], sources: ["FDA"] },
    { drug: "celecoxib", indication_id: "ra", label: "Rheumatoid arthritis — 100–200 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose", value_max: 200 }, interval_h: 12, divided_doses: 2, caps: { max_single: 200, max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], renal_note: "Advanced kidney disease: avoid unless benefit outweighs risk", flags: [], sources: ["FDA"] },
    { drug: "celecoxib", indication_id: "jra-s", label: "JRA 10–25 kg — 50 mg twice daily", route: "PO", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 10, max_weight_kg: 25.0001 }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 50, unit: "mg/cap" }], rounding: "Whole capsules (contents can be sprinkled on applesauce)", renal: [], flags: [], sources: ["FDA"] },
    { drug: "celecoxib", indication_id: "jra-l", label: "JRA over 25 kg — 100 mg twice daily", route: "PO", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 25.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 100, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CELEBREX (celecoxib) capsules — Viatris Specialty, label effective 2024-11-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d6675e4-5859-4be2-8037-a20ce9f707aa"]],
  dose: { tagline: "COX-2 selective NSAID; lowest dose for the shortest time.",
    boxedTitle: "Risk of serious cardiovascular and gastrointestinal events",
    boxed: "Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction, and stroke, which can be fatal. This risk may occur early in the treatment and may increase with duration of use. CELEBREX is contraindicated in the setting of coronary artery bypass graft (CABG) surgery. NSAIDs cause an increased risk of serious gastrointestinal (GI) adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients and patients with a prior history of peptic ulcer disease and/or GI bleeding are at greater risk for serious GI events.",
    adult: [
      { ind: "Osteoarthritis", text: "200 mg once daily (or 100 mg twice daily).", calc: ["oa"] },
      { ind: "Rheumatoid arthritis", text: "100–200 mg twice daily.", calc: ["ra"] },
      { ind: "Acute pain; dysmenorrhoea", text: "400 mg once, then 200 mg if needed on day 1; then 200 mg twice daily as needed." }
    ],
    child: [
      { ind: "JRA, 10–25 kg (2 years and over)", text: "50 mg twice daily.", calc: ["jra-s"] },
      { ind: "JRA, over 25 kg", text: "100 mg twice daily.", calc: ["jra-l"] }
    ] }
});

/* ---------- CEMIPLIMAB (FDA LIBTAYO, Regeneron, BLA761097, eff. 2026-08-31) ---------- */
FDB_M("cemiplimab", {
  inn: "Cemiplimab", atc: "L01FF06", cls: "PD-1 blocking monoclonal antibody",
  linked: [["Cutaneous squamous cell carcinoma", "Advanced and adjuvant [FDA]", ""], ["Basal cell carcinoma (after hedgehog inhibitor)", "[FDA]", ""], ["Non-small cell lung cancer", "PD-L1 based [FDA]", ""]],
  forms: ["Injection 350 mg/7 mL (50 mg/mL) vial [FDA]."],
  moa: "Blocks PD-1, releasing T-cell anti-tumour activity [FDA].",
  pk: ["Half-life about 22 days [FDA]."],
  ind: { adult: ["Advanced CSCC not suitable for curative surgery/radiation; adjuvant high-risk CSCC; advanced BCC after a hedgehog inhibitor; NSCLC (alone with high PD-L1 or with platinum chemotherapy) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["CSCC, BCC, NSCLC", "350 mg IV over 30 min every 3 weeks [FDA]."], ["Adjuvant CSCC", "350 mg every 3 weeks for 12 weeks then 700 mg every 6 weeks, or 350 mg every 3 weeks — up to 48 weeks total [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [FDA].", other: "Check liver tests, creatinine and thyroid function at baseline and during treatment [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, musculoskeletal pain, rash, diarrhoea, anaemia [NEP]."], serious: ["Immune-mediated pneumonitis, colitis, hepatitis, endocrinopathies, nephritis, skin reactions [FDA]", "Infusion reactions [FDA]", "Complications of allogeneic HSCT [FDA]"] },
  monitor: ["Liver tests, creatinine, thyroid function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cemiplimab", indication_id: "std", label: "350 mg IV every 3 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 350, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: 1, caps: { max_single: 350, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 50, unit: "mg/mL" }], rounding: "One vial", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "LIBTAYO (cemiplimab-rwlc) injection — Regeneron, label effective 2026-08-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4347ae1f-d397-4f18-8b70-03897e1c054a"]],
  dose: { tagline: "PD-1 inhibitor for skin squamous and basal cell cancers and lung cancer.",
    adult: [
      { ind: "CSCC, BCC, NSCLC", text: "350 mg IV over 30 minutes every 3 weeks.", calc: ["std"] },
      { ind: "Adjuvant CSCC", text: "350 mg every 3 weeks for 12 weeks, then 700 mg every 6 weeks (up to 48 weeks total)." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CENEGERMIN (FDA OXERVATE 0.002%, Dompé, BLA761094, eff. 2026-10-11) ---------- */
FDB_M("cenegermin", {
  inn: "Cenegermin", atc: "S01XA24", cls: "Recombinant human nerve growth factor (eye drops)",
  linked: [["Neurotrophic keratitis", "[FDA]", ""]],
  forms: ["Eye drops 0.002% (20 mcg/mL), multiple-dose vials; pharmacy freezer, then refrigerator up to 14 days [FDA]."],
  moa: "Nerve growth factor acting via TrkA and p75NTR receptors to support corneal innervation and healing [FDA].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Neurotrophic keratitis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Neurotrophic keratitis", "1 drop in the affected eye(s) 6 times a day at 2-hour intervals for 8 weeks [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Eye drops — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "No human data; no fetal harm at clinical doses in animals [FDA].", other: "Remove contact lenses; reinsert after 15 minutes. Give 15 minutes apart from other eye drops, and before ointments or gels [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Eye pain, ocular hyperaemia, eye inflammation, increased tearing [FDA]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Corneal healing [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "OXERVATE (cenegermin-bkbj) ophthalmic solution 0.002% — Dompé, label effective 2026-10-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=89e4bfec-d710-40ed-8885-5d13ba46b1cd"]],
  dose: { tagline: "Nerve growth factor eye drops for neurotrophic keratitis.",
    adult: [{ ind: "Neurotrophic keratitis", text: "1 drop 6 times a day, every 2 hours, for 8 weeks." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CENOBAMATE (FDA XCOPRI, SK Life Science, NDA212839, eff. 2025-08-25) ---------- */
FDB_M("cenobamate", {
  inn: "Cenobamate", atc: "N03AX25", cls: "Antiseizure medicine (sodium current inhibitor, GABA-A modulator)",
  linked: [["Focal (partial-onset) seizures in adults", "Monotherapy or add-on [FDA]", "epilepsy-adult"]],
  forms: ["Tablets 12.5, 25, 50, 100, 150, 200 mg; titration and maintenance packs [FDA]."],
  moa: "Reduces repetitive firing by inhibiting voltage-gated sodium currents; positive allosteric modulator of GABA-A [FDA].",
  pk: ["Half-life 50–60 h [FDA].", "Tablets can be crushed and mixed with water, by mouth or NG tube [FDA]."],
  ind: { adult: ["Partial-onset seizures in adults [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Titration (do not go faster)", "12.5 mg once daily weeks 1–2; 25 mg weeks 3–4; 50 mg weeks 5–6; 100 mg weeks 7–8; 150 mg weeks 9–10; 200 mg from week 11 [FDA]."], ["Above 200 mg", "Increase by 50 mg every 2 weeks if needed; maximum 400 mg once daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Shows the maintenance dose; follow the titration schedule." },
  adj: { renal: "Mild–moderate and severe: use with caution, consider a lower dose; ESRD on dialysis: not recommended [FDA].", hepatic: "Mild–moderate: maximum 200 mg once daily; severe: not recommended [FDA].", preg: "May cause fetal harm (animal data) [FDA].", other: "Lowers oral contraceptive effect; reduce phenytoin by up to 50% gradually; reduce phenobarbital and clobazam as needed [FDA]." },
  tox: { human: "Limited experience [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; monitor heart rhythm; dialysis removal unknown [FDA]." },
  contra: ["Hypersensitivity to cenobamate or ingredients [FDA].", "Familial short QT syndrome [FDA]."],
  ae: { common: ["Somnolence, dizziness, fatigue, diplopia, headache [NEP]."], serious: ["DRESS (with fast titration) [FDA]", "QT shortening [FDA]", "Suicidal thoughts [FDA]", "Liver injury [FDA]"] },
  monitor: ["ALT, AST, bilirubin before starting; mood [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cenobamate", indication_id: "maint", label: "Maintenance — 200 mg once daily (from week 11)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 400, max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 14.999, action: "avoid", note: "not recommended in end-stage kidney disease on dialysis" }], renal_note: "CrCl under 90: use with caution, a lower dose may be considered", flags: ["Start 12.5 mg; titrate every 2 weeks"], sources: ["FDA"] }],
  sources: [["FDA", "XCOPRI (cenobamate) tablets — SK Life Science, label effective 2025-08-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=565c2126-57ae-4e29-b443-723bbe7e2072"]],
  dose: { tagline: "Once-daily antiseizure medicine with a slow 11-week titration.",
    adult: [
      { ind: "Focal seizures — titration", text: "12.5 mg once daily, doubling about every 2 weeks: 25 → 50 → 100 → 150 → 200 mg (week 11). Do not titrate faster." },
      { ind: "Maintenance", text: "200 mg once daily; up to 400 mg (50 mg steps every 2 weeks).", calc: ["maint"] }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CERITINIB (FDA ZYKADIA, Novartis, NDA211225, eff. 2026-10-28) ---------- */
FDB_M("ceritinib", {
  inn: "Ceritinib", atc: "L01ED02", cls: "ALK kinase inhibitor",
  linked: [["ALK-positive metastatic non-small cell lung cancer", "[FDA]", ""]],
  forms: ["Capsules 150 mg; tablets 150 mg [FDA]."],
  moa: "Inhibits ALK (also IGF-1R, insulin receptor, ROS1) [FDA].",
  pk: ["Half-life about 41 h [FDA].", "Take with food [FDA]."],
  ind: { adult: ["Metastatic ALK-positive NSCLC [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ALK-positive NSCLC", "450 mg once daily with food [FDA]."], ["Dose reductions", "300 mg, then 150 mg once daily; stop if 150 mg is not tolerated [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Severe (Child-Pugh C): reduce the dose [FDA].", preg: "Can cause fetal harm [FDA].", other: "Avoid strong CYP3A inhibitors and inducers; reduce dose if a strong inhibitor is unavoidable [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, abdominal pain, fatigue, raised liver enzymes [NEP]."], serious: ["Severe GI reactions [FDA]", "Hepatotoxicity [FDA]", "ILD/pneumonitis (2.4%) [FDA]", "QT prolongation; bradycardia [FDA]", "Hyperglycaemia; pancreatitis [FDA]"] },
  monitor: ["Liver tests at least monthly; fasting glucose; ECG and electrolytes in at-risk patients [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "ceritinib", indication_id: "std", label: "450 mg once daily with food", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 450, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 450, max_daily: 450, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "ZYKADIA (ceritinib) capsules and tablets — Novartis, label effective 2026-10-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fff5d805-4ffd-4e8e-8e63-6f129697563e"]],
  dose: { tagline: "ALK inhibitor for ALK-positive lung cancer, taken with food.",
    adult: [{ ind: "ALK-positive metastatic NSCLC", text: "450 mg once daily with food.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CERLIPONASE ALFA (FDA BRINEURA, BioMarin, BLA761052, eff. 2024-08-05) ---------- */
FDB_M("cerliponase-alfa", {
  inn: "Cerliponase alfa", atc: "A16AB17", cls: "Recombinant tripeptidyl peptidase 1 (enzyme replacement, intraventricular)",
  linked: [["CLN2 disease (TPP1 deficiency, Batten disease type 2)", "Slows loss of walking [FDA]", ""]],
  forms: ["Injection 150 mg/5 mL (30 mg/mL), 2 vials per carton with intraventricular electrolytes 5 mL [FDA]."],
  moa: "Replaces the missing lysosomal enzyme TPP1 in the brain [FDA].",
  pk: ["Given into the brain ventricles through an implanted reservoir and catheter [FDA]."],
  ind: { adult: ["Not applicable. [NEP]"], paed: ["Children with CLN2 disease, to slow loss of walking [FDA]."] },
  adult: [["—", "Paediatric indication only [FDA]."]],
  paed: { tiers: ["Birth–under 6 months: 100 mg (3.3 mL) every other week [FDA].", "6 months–under 1 year: 150 mg (5 mL) [FDA].", "1–under 2 years: 200 mg (6.7 mL) for the first 4 doses, then 300 mg (10 mL) [FDA].", "2 years and older: 300 mg (10 mL) [FDA].", "Not under 37 weeks post-menstrual age or under 2.5 kg [FDA]."], transition: "—", calcNote: "Age-band dose every other week, intraventricular only." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "No data [FDA].", other: "Premedicate with antihistamine ± antipyretic or corticosteroid. Check the scalp and device before each infusion; ECG monitoring if heart disease [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Acute local infection at the device site or suspected/confirmed CNS infection [FDA].", "Acute intraventricular device complication (leak, extravasation, failure) [FDA].", "Ventriculoperitoneal shunt [FDA]."],
  ae: { common: ["Fever, ECG abnormalities, decreased or increased CSF protein, vomiting, seizures, hypersensitivity, device problems [NEP]."], serious: ["Anaphylaxis (boxed) [FDA]", "Meningitis and device infections [FDA]", "Bradycardia and hypotension [FDA]"] },
  monitor: ["Vital signs before, during and after infusion; ECG every 6 months; CSF for infection [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cerliponase-alfa", indication_id: "u6m", label: "Birth to under 6 months — 100 mg every other week", route: "intraventricular", population: { min_age_months: 0, max_age_months: 6, min_weight_kg: 2.5, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 30, unit: "mg/mL" }], infusion: { duration_h: 2.64 }, rounding: "Label volume 3.3 mL at 1.25 mL/h", renal: [], flags: ["Not under 37 weeks post-menstrual age"], sources: ["FDA"] },
    { drug: "cerliponase-alfa", indication_id: "6m1y", label: "6 months to under 1 year — 150 mg every other week", route: "intraventricular", population: { min_age_months: 6, max_age_months: 12, min_weight_kg: 2.5, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 30, unit: "mg/mL" }], rounding: "Label volume 5 mL at 2.5 mL/h", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cerliponase-alfa", indication_id: "1y2y", label: "1 to under 2 years — 300 mg every other week (200 mg for the first 4 doses)", route: "intraventricular", population: { min_age_months: 12, max_age_months: 24, min_weight_kg: 2.5, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 30, unit: "mg/mL" }], rounding: "Label volume 10 mL (6.7 mL for 200 mg) at 2.5 mL/h", renal: [], flags: ["First 4 doses: 200 mg (6.7 mL)"], sources: ["FDA"] },
    { drug: "cerliponase-alfa", indication_id: "2y", label: "2 years and older — 300 mg every other week", route: "intraventricular", population: { min_age_months: 24, max_age_months: null, min_weight_kg: 2.5, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 30, unit: "mg/mL" }], rounding: "Label volume 10 mL at 2.5 mL/h", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "BRINEURA (cerliponase alfa) injection — BioMarin, label effective 2024-08-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=485ab3c5-0359-4878-872f-2fe1e7df4047"]],
  dose: { tagline: "Enzyme replacement for CLN2 disease, given into the brain ventricles every 2 weeks.",
    boxedTitle: "Hypersensitivity reactions including anaphylaxis",
    boxed: "Patients treated with enzyme replacement therapies have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Anaphylaxis has occurred during the early course of enzyme replacement therapy and after extended duration of therapy. Initiate BRINEURA in a healthcare setting with appropriate medical monitoring and support measures, including access to cardiopulmonary resuscitation equipment. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, discontinue BRINEURA and immediately initiate appropriate medical treatment, including use of epinephrine. Inform patients of the symptoms of life-threatening hypersensitivity reactions, including anaphylaxis and to seek immediate medical care should symptoms occur.",
    adult: [{ ind: "Adults", text: "Paediatric indication." }],
    child: [
      { ind: "Birth to under 6 months", text: "100 mg (3.3 mL) every other week.", calc: ["u6m"] },
      { ind: "6 months to under 1 year", text: "150 mg (5 mL) every other week.", calc: ["6m1y"] },
      { ind: "1 to under 2 years", text: "200 mg (6.7 mL) for the first 4 doses, then 300 mg (10 mL).", calc: ["1y2y"] },
      { ind: "2 years and older", text: "300 mg (10 mL) every other week.", calc: ["2y"] }
    ] }
});

/* ---------- CERTOLIZUMAB PEGOL (FDA CIMZIA, UCB, BLA125160, eff. 2026-10-29) ---------- */
FDB_M("certolizumab-pegol", {
  inn: "Certolizumab pegol", atc: "L04AB05", cls: "TNF blocker (PEGylated Fab' fragment)",
  linked: [["Rheumatoid arthritis", "[FDA]", "ra-adult"], ["Crohn's disease", "[FDA]", "crohns-adult"], ["Psoriatic arthritis; ankylosing spondylitis; nr-axSpA; plaque psoriasis", "[FDA]", ""], ["Polyarticular JIA (2 years and over)", "[FDA]", ""]],
  forms: ["Prefilled syringe 200 mg/mL; powder 200 mg vial [FDA]."],
  moa: "Neutralises TNFα [FDA].",
  pk: ["Half-life about 14 days [FDA].", "Negligible placental transfer in most infants [FDA]."],
  ind: { adult: ["Crohn's disease, RA, psoriatic arthritis, ankylosing spondylitis, non-radiographic axial SpA, plaque psoriasis [FDA]."], paed: ["Polyarticular JIA from 2 years [FDA]."] },
  adult: [["Crohn's disease", "400 mg SC at weeks 0, 2, 4; if response, 400 mg every 4 weeks [FDA]."], ["RA; psoriatic arthritis", "400 mg at weeks 0, 2, 4, then 200 mg every other week (or 400 mg every 4 weeks) [FDA]."], ["AS; nr-axSpA", "400 mg at weeks 0, 2, 4, then 200 mg every other week or 400 mg every 4 weeks [FDA]."], ["Plaque psoriasis", "400 mg every other week (≤90 kg: 400 mg at weeks 0, 2, 4 then 200 mg every other week may be considered) [FDA]."]],
  paed: { tiers: ["pJIA 10–<20 kg: 100 mg at weeks 0, 2, 4, then 50 mg every other week [FDA].", "20–<40 kg: 200 mg at weeks 0, 2, 4, then 100 mg every other week [FDA].", "40 kg or more: 400 mg at weeks 0, 2, 4, then 200 mg every other week [FDA]."], transition: "Adult dose from 40 kg [FDA].", calcNote: "Maintenance dose by weight band." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Negligible placental transfer; weigh live vaccines for exposed infants [FDA].", other: "Test for latent TB and hepatitis B before starting [FDA]. Can falsely raise aPTT [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Serious hypersensitivity to certolizumab pegol or excipients [FDA]."],
  ae: { common: ["Upper respiratory infection, rash, urinary tract infection [NEP]."], serious: ["Serious infections including TB (boxed) [FDA]", "Lymphoma and malignancy (boxed) [FDA]", "Heart failure; HBV reactivation; demyelination; cytopenias; lupus-like syndrome [FDA]"] },
  monitor: ["TB test before and during; signs of infection; blood counts [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "certolizumab-pegol", indication_id: "ra", label: "RA / PsA / axSpA maintenance — 200 mg every other week", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "syringe", strength: 200, unit: "mg/mL" }], rounding: "One syringe", renal: [], flags: ["After 400 mg at weeks 0, 2, 4"], sources: ["FDA"] },
    { drug: "certolizumab-pegol", indication_id: "j1", label: "pJIA 10–<20 kg — 50 mg every other week", route: "SC", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 10, max_weight_kg: 20 }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "syringe/vial", strength: 200, unit: "mg/mL" }], rounding: "Measured from vial", renal: [], flags: ["After 100 mg at weeks 0, 2, 4"], sources: ["FDA"] },
    { drug: "certolizumab-pegol", indication_id: "j2", label: "pJIA 20–<40 kg — 100 mg every other week", route: "SC", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 20, max_weight_kg: 40 }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "syringe/vial", strength: 200, unit: "mg/mL" }], rounding: "Measured", renal: [], flags: ["After 200 mg at weeks 0, 2, 4"], sources: ["FDA"] },
    { drug: "certolizumab-pegol", indication_id: "j3", label: "pJIA 40 kg or more — 200 mg every other week", route: "SC", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: 40, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "syringe", strength: 200, unit: "mg/mL" }], rounding: "One syringe", renal: [], flags: ["After 400 mg at weeks 0, 2, 4"], sources: ["FDA"] }
  ],
  sources: [["FDA", "CIMZIA (certolizumab pegol) — UCB, label effective 2026-10-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b4c2c9dc-a0bb-4d64-a667-a67ebe88392d"]],
  dose: { tagline: "SC TNF blocker for Crohn's, inflammatory arthritis, psoriasis and pJIA.",
    boxedTitle: "Serious infections and malignancy",
    boxed: "Patients treated with CIMZIA are at increased risk for developing serious infections that may lead to hospitalization or death. Most patients who developed these infections were taking concomitant immunosuppressants such as methotrexate or corticosteroids. CIMZIA should be discontinued if a patient develops a serious infection or sepsis. Reported infections include active tuberculosis, including reactivation of latent tuberculosis; invasive fungal infections; and bacterial, viral and other infections due to opportunistic pathogens, including Legionella and Listeria. Patients should be tested for latent tuberculosis before CIMZIA use and during therapy. Treatment for latent infection should be initiated prior to CIMZIA use. Lymphoma and other malignancies, some fatal, have been reported in children and adolescent patients treated with TNF blockers, of which CIMZIA is a member.",
    adult: [
      { ind: "RA; psoriatic arthritis; axial SpA", text: "400 mg SC at weeks 0, 2 and 4, then 200 mg every other week (or 400 mg every 4 weeks).", calc: ["ra"] },
      { ind: "Crohn's disease", text: "400 mg at weeks 0, 2 and 4; then 400 mg every 4 weeks if response." },
      { ind: "Plaque psoriasis", text: "400 mg every other week." }
    ],
    child: [
      { ind: "pJIA 10 to under 20 kg", text: "100 mg at weeks 0, 2, 4, then 50 mg every other week.", calc: ["j1"] },
      { ind: "pJIA 20 to under 40 kg", text: "200 mg at weeks 0, 2, 4, then 100 mg every other week.", calc: ["j2"] },
      { ind: "pJIA 40 kg or more", text: "400 mg at weeks 0, 2, 4, then 200 mg every other week.", calc: ["j3"] }
    ] }
});

/* ---------- CETIRIZINE (FDA OTC Children's Zyrtec chewable, NDA021621; original ZYRTEC) ---------- */
FDB_M("cetirizine", {
  inn: "Cetirizine", atc: "R06AE07", cls: "Second-generation H1 antihistamine",
  linked: [["Allergic rhinitis (hay fever)", "[FDA]", ""], ["Urticaria and allergic skin itch", "Bhutan STG [BT-STG]", ""]],
  forms: ["Tablets 5 mg and 10 mg; chewable 2.5, 5, 10 mg; syrup 1 mg/mL [NEP].", "Bhutan: 10 mg tablet [BT-NEML]."],
  moa: "Selective peripheral H1 receptor antagonist [NEP].",
  pk: ["Mainly excreted unchanged in urine [NEP]."],
  ind: { adult: ["Runny nose, sneezing, itchy watery eyes, itchy nose or throat from hay fever or other upper respiratory allergies [FDA]."], paed: ["2 years and over (OTC label); under 2 years: ask a doctor [FDA]."] },
  adult: [["Adults and children 6 years and over", "5 mg or 10 mg once daily; not more than 10 mg in 24 hours [FDA]."], ["Adults 65 and over", "5 mg once daily; not more than 5 mg in 24 hours [FDA]."]],
  paed: { tiers: ["2 to under 6 years: 2.5 mg once daily; may increase to 5 mg once daily or 2.5 mg every 12 h; not more than 5 mg in 24 hours [FDA].", "6 years and over: 5–10 mg once daily [FDA].", "Under 2 years: ask a doctor [FDA]."], transition: "Adult dose from 6 years [FDA].", calcNote: "Age-band doses from the OTC label." },
  adj: { renal: "Ask a doctor — a lower dose may be needed [FDA].", hepatic: "Ask a doctor — a lower dose may be needed [FDA].", preg: "Ask a health professional; breastfeeding not recommended [FDA].", other: "Drowsiness may occur; avoid alcohol and sedatives [FDA]." },
  tox: { human: "Somnolence; restlessness and irritability in children [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; poison control [FDA]." },
  contra: ["Previous allergic reaction to cetirizine, its ingredients, or hydroxyzine [FDA]."],
  ae: { common: ["Drowsiness, fatigue, dry mouth [NEP]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Symptom control [NEP]."],
  local: { neml: "Cetirizine 10 mg tablet [BT-NEML].", strengths: "10 mg tablet.", stg: "Bhutan STG 2024: cetirizine 10 mg once daily for 7–10 days, or once/twice daily; in children, dose by age [BT-STG]." },
  calc: [
    { drug: "cetirizine", indication_id: "c26", label: "2 to under 6 years — 2.5 mg once daily (max 5 mg/day)", route: "PO", population: { min_age_months: 24, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 5, max_daily: 5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "syrup", strength: 1, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], renal_note: "Kidney disease: ask a doctor (a lower dose may be needed)", flags: ["May increase to 5 mg once daily or 2.5 mg every 12 h"], sources: ["FDA"] },
    { drug: "cetirizine", indication_id: "adult", label: "6 years and over — 5–10 mg once daily", route: "PO", population: { min_age_months: 72, max_age_months: 780, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose", value_max: 10 }, interval_h: 24, divided_doses: 1, caps: { max_single: 10, max_daily: 10, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Half or whole tablet", renal: [], renal_note: "Kidney disease: ask a doctor (a lower dose may be needed)", flags: [], sources: ["FDA"] },
    { drug: "cetirizine", indication_id: "old", label: "65 years and over — 5 mg once daily", route: "PO", population: { min_age_months: 780, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 5, max_daily: 5, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Half tablet", renal: [], renal_note: "Kidney disease: ask a doctor (a lower dose may be needed)", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Children's ZYRTEC (cetirizine) chewable tablets — OTC Drug Facts (NDA021621), effective 2025-04-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0adb3617-3528-4d64-a9ad-b4545ec9d7b9"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Once-daily non-sedating (mildly sedating) antihistamine.",
    adult: [
      { ind: "Allergic rhinitis; urticaria", text: "10 mg once daily (5 mg if mild). Maximum 10 mg a day.", calc: ["adult"] },
      { ind: "65 years and over", text: "5 mg once daily.", calc: ["old"] }
    ],
    child: [
      { ind: "2 to under 6 years", text: "2.5 mg once daily; up to 5 mg a day.", calc: ["c26"] },
      { ind: "6 years and over", text: "5–10 mg once daily.", calc: ["adult"] },
      { ind: "Under 2 years", text: "Ask a doctor (not covered by the OTC label)." }
    ] }
});

/* ---------- CETRORELIX (FDA CETROTIDE, EMD Serono, NDA021197, eff. 2025-09-22) ---------- */
FDB_M("cetrorelix", {
  inn: "Cetrorelix", atc: "H01CC02", cls: "GnRH antagonist",
  linked: [["Prevention of premature LH surge in controlled ovarian stimulation (IVF)", "[FDA]", "infertility-adult"]],
  forms: ["Powder for injection 0.25 mg with prefilled diluent syringe [FDA]."],
  moa: "Blocks pituitary GnRH receptors, suppressing LH and FSH [NEP].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Inhibition of premature LH surges during controlled ovarian stimulation [FDA]."], paed: ["Not applicable. [NEP]"] },
  adult: [["Controlled ovarian stimulation", "0.25 mg SC once daily, starting stimulation day 5 (morning or evening) or day 6 (morning), until the day of hCG [FDA]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: "Severe kidney impairment: contraindicated [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Contraindicated in pregnancy and lactation — exclude pregnancy first [FDA].", other: "Prescribe only by fertility specialists; withhold hCG if ovaries over-respond (OHSS risk) [FDA]." },
  tox: { human: "Single doses up to 120 mg well tolerated [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Hypersensitivity to cetrorelix, extrinsic peptide hormones or mannitol [FDA].", "Hypersensitivity to GnRH or GnRH analogues [FDA].", "Known or suspected pregnancy; lactation [FDA].", "Severe kidney impairment [FDA]."],
  ae: { common: ["Injection-site reactions, nausea, headache [NEP]."], serious: ["Ovarian hyperstimulation syndrome [NEP]", "Anaphylaxis (rare) [NEP]"] },
  monitor: ["Ultrasound follicle tracking; oestradiol [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CETROTIDE (cetrorelix acetate for injection) 0.25 mg — EMD Serono, label effective 2025-09-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=aca7768e-28a7-4027-b1d8-e66247665f79"]],
  dose: { tagline: "Daily GnRH antagonist injection to stop an early LH surge during IVF stimulation.",
    adult: [{ ind: "Controlled ovarian stimulation", text: "0.25 mg SC once daily from stimulation day 5 or 6 until the day of hCG." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- CETUXIMAB (FDA ERBITUX, ImClone/Lilly, BLA125084, eff. 2026-04-16) ---------- */
FDB_M("cetuximab", {
  inn: "Cetuximab", atc: "L01FE01", cls: "EGFR-blocking monoclonal antibody",
  linked: [["Squamous cell carcinoma of the head and neck", "With radiation or platinum/5-FU [FDA]", ""], ["RAS wild-type EGFR-expressing metastatic colorectal cancer", "[FDA]", ""], ["BRAF V600E metastatic colorectal cancer", "With encorafenib [FDA]", ""]],
  forms: ["Injection 100 mg/50 mL and 200 mg/100 mL (2 mg/mL) vials [FDA]."],
  moa: "Binds EGFR and blocks ligand-driven signalling [FDA].",
  pk: ["Half-life about 112 h (63–230 h) [FDA]."],
  ind: { adult: ["Head and neck SCC: with radiation; with platinum + fluorouracil; after platinum. RAS wild-type EGFR-expressing mCRC: with FOLFIRI, alone, or after irinotecan/oxaliplatin. BRAF V600E mCRC with encorafenib [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Weekly", "400 mg/m² over 120 min first, then 250 mg/m² over 60 min every week [FDA]."], ["Every two weeks", "500 mg/m² over 120 min every 2 weeks [FDA]."], ["With radiation", "400 mg/m² one week before radiation, then 250 mg/m² weekly during radiation (6–7 weeks), finishing 1 h before radiation [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "BSA dosing; needs height." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [FDA].", other: "Premedicate with an H1 antagonist. Check magnesium, potassium and calcium during and for 8 weeks after [FDA]. Do not use in RAS-mutant colorectal cancer [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Acneiform rash, dry skin, fatigue, diarrhoea, low magnesium, infusion reactions [NEP]."], serious: ["Serious and fatal infusion reactions (boxed) [FDA]", "Cardiopulmonary arrest (boxed) [FDA]", "Interstitial lung disease [FDA]", "Severe skin toxicity [FDA]"] },
  monitor: ["Electrolytes (Mg, K, Ca); skin; respiratory symptoms; observe 1 h after infusion [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cetuximab", indication_id: "load", label: "First dose — 400 mg/m² over 120 min", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cetuximab", indication_id: "wk", label: "Weekly — 250 mg/m² over 60 min", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 250, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cetuximab", indication_id: "q2w", label: "Every 2 weeks — 500 mg/m² over 120 min", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ERBITUX (cetuximab) injection — ImClone LLC (Lilly), label effective 2026-04-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8bc6397e-4bd8-4d37-a007-a327e4da34d9"]],
  dose: { tagline: "Anti-EGFR antibody for head and neck cancer and RAS wild-type colorectal cancer.",
    boxedTitle: "Infusion reactions and cardiopulmonary arrest",
    boxed: "ERBITUX can cause serious and fatal infusion reactions. Immediately interrupt and permanently discontinue ERBITUX for serious infusion reactions. Cardiopulmonary arrest or sudden death occurred in patients with squamous cell carcinoma of the head and neck receiving ERBITUX with radiation therapy or a cetuximab product with platinum-based therapy and fluorouracil. Monitor serum electrolytes, including serum magnesium, potassium, and calcium, during and after ERBITUX administration.",
    adult: [
      { ind: "Weekly schedule", text: "400 mg/m² over 2 h first, then 250 mg/m² over 1 h every week.", calc: ["load", "wk"] },
      { ind: "Two-weekly schedule", text: "500 mg/m² over 2 h every 2 weeks.", calc: ["q2w"] }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CEVIMELINE (FDA EVOXAC, Cosette, NDA020989/NDA221183, eff. 2026-11-09) ---------- */
FDB_M("cevimeline", {
  inn: "Cevimeline", atc: "N07AX03", cls: "Muscarinic (cholinergic) agonist",
  linked: [["Dry mouth in Sjögren's disease", "[FDA]", ""]],
  forms: ["Capsules 30 mg; oral solution 30 mg/5 mL [FDA]."],
  moa: "Muscarinic agonist that stimulates salivary and other exocrine glands [FDA].",
  pk: ["Half-life about 5 h [FDA].", "CYP2D6 and CYP3A4 metabolism — monitor CYP2D6 poor metabolisers [FDA]."],
  ind: { adult: ["Dry mouth in adults with Sjögren's disease [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Sjögren's dry mouth", "30 mg (1 capsule or 5 mL) three times a day, with or without food [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "No human data [FDA].", other: "Breastfeeding not recommended during treatment and for 1 day after [FDA]. Blurred vision — care when driving at night [FDA]." },
  tox: { human: "Cholinergic excess [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; consider atropine; epinephrine for severe cardiovascular depression or bronchospasm [FDA]." },
  contra: ["When miosis is undesirable, e.g. acute iritis and angle-closure glaucoma [FDA].", "Uncontrolled asthma [FDA].", "Hypersensitivity to cevimeline [FDA]."],
  ae: { common: ["Excessive sweating, nausea, sinusitis, rhinitis, abdominal pain, diarrhoea [FDA]."], serious: ["Cardiac conduction and heart-rate changes [FDA]", "Bronchoconstriction [FDA]"] },
  monitor: ["Heart rhythm in heart disease; breathing in asthma/COPD [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cevimeline", indication_id: "std", label: "30 mg three times a day", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 30, max_daily: 90, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 30, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "EVOXAC (cevimeline) capsules and oral solution — Cosette Pharmaceuticals, label effective 2026-11-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dac32a9b-05b8-42c2-9a29-d885a9279456"]],
  dose: { tagline: "Cholinergic agonist for dry mouth in Sjögren's disease.",
    adult: [{ ind: "Sjögren's dry mouth", text: "30 mg three times a day.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CHLORAMBUCIL (FDA LEUKERAN, Waylis, NDA010669, eff. 2025-01-08) ---------- */
FDB_M("chlorambucil", {
  inn: "Chlorambucil", atc: "L01AA02", cls: "Nitrogen mustard alkylating agent (oral)",
  linked: [["Chronic lymphocytic leukaemia", "Palliative [FDA]", ""], ["Malignant lymphomas, including Hodgkin lymphoma", "Palliative [FDA]", ""]],
  forms: ["Tablets 2 mg [NEP]."],
  moa: "Alkylates DNA, interfering with replication and triggering apoptosis [FDA].",
  pk: ["Half-life about 1.5 h; not dialysable [FDA]."],
  ind: { adult: ["CLL, malignant lymphomas (lymphosarcoma, giant follicular lymphoma) and Hodgkin disease — palliative, not curative [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Induction / short courses", "0.1–0.2 mg/kg once daily for 3–6 weeks (usually 4–10 mg/day) [FDA]."], ["CLL and non-Hodgkin lymphoma", "Usually 0.1 mg/kg daily [FDA]."], ["Hodgkin disease", "Usually 0.2 mg/kg daily [FDA]."], ["Marrow infiltration or hypoplasia", "Not more than 0.1 mg/kg daily (about 6 mg) [FDA]."], ["Intermittent CLL schedule", "Single 0.4 mg/kg, raised by 0.1 mg/kg each course until response or toxicity [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "mg/kg once daily." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Probably teratogenic (boxed) [FDA].", other: "Reduce the dose promptly if the white count falls abruptly [FDA]. Seizure risk higher in children with nephrotic syndrome and with high pulse doses [NEP]." },
  tox: { human: "Reversible pancytopenia; agitation, ataxia, grand mal seizures [FDA].", animal: "Oral LD50 in mice 123 mg/kg [FDA].", manage: "No antidote; not dialysable; monitor blood counts, transfuse as needed [FDA]." },
  contra: ["Prior resistance to chlorambucil [FDA].", "Hypersensitivity to chlorambucil (possible cross-reactivity with other alkylators) [FDA]."],
  ae: { common: ["Bone marrow suppression, nausea, vomiting [FDA]."], serious: ["Severe marrow suppression (boxed) [FDA]", "Secondary leukaemia and cancer (boxed) [FDA]", "Infertility (boxed) [FDA]", "Seizures; severe skin reactions; pulmonary fibrosis [NEP]"] },
  monitor: ["Weekly blood counts during treatment [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "chlorambucil", indication_id: "std", label: "0.1–0.2 mg/kg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.1, unit: "mg", per: "dose", value_max: 0.2 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 2, unit: "mg/tab" }], rounding: "Whole 2 mg tablets", renal: [], flags: ["Not more than 0.1 mg/kg if marrow infiltrated or hypoplastic"], sources: ["FDA"] }],
  sources: [["FDA", "LEUKERAN (chlorambucil) tablets — Waylis Therapeutics, label effective 2025-01-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=58a3c995-5ad6-465d-8437-5970c9088213"]],
  dose: { tagline: "Oral alkylating agent for CLL and lymphoma (palliative).",
    boxedTitle: "Bone marrow suppression, carcinogenic, mutagenic and teratogenic, infertility",
    boxed: "LEUKERAN (chlorambucil) can severely suppress bone marrow function. Chlorambucil is a carcinogen in humans. Chlorambucil is probably mutagenic and teratogenic in humans. Chlorambucil produces human infertility.",
    adult: [{ ind: "CLL; lymphoma", text: "0.1–0.2 mg/kg once daily for 3–6 weeks (CLL 0.1; Hodgkin 0.2 mg/kg).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CHLORDIAZEPOXIDE (FDA chlordiazepoxide capsules, ANDA084769, eff. 2026-11-05; original LIBRIUM) ---------- */
FDB_M("chlordiazepoxide", {
  inn: "Chlordiazepoxide", atc: "N05BA02", cls: "Long-acting benzodiazepine", risk: "Standard — not on the ISMP high-alert list; benzodiazepine boxed warning [FDA]",
  linked: [["Alcohol withdrawal", "[FDA]", "alcohol-adult"], ["Anxiety disorders; preoperative anxiety", "Short term [FDA]", ""]],
  forms: ["Capsules 5, 10, 25 mg [FDA]."],
  moa: "Enhances GABA-A activity [NEP].",
  pk: ["Half-life 24–48 h; active metabolites [FDA]."],
  ind: { adult: ["Anxiety disorders; short-term anxiety; acute alcohol withdrawal; preoperative apprehension [FDA]."], paed: ["Not recommended under 6 years [FDA]."] },
  adult: [["Mild–moderate anxiety", "5 or 10 mg three or four times daily [FDA]."], ["Severe anxiety", "20 or 25 mg three or four times daily [FDA]."], ["Elderly or debilitated", "5 mg two to four times daily [FDA]."], ["Acute alcohol withdrawal (oral)", "50–100 mg, repeated as needed until agitation is controlled, up to 300 mg/day; then reduce to maintenance [FDA]."], ["Preoperative", "5–10 mg three or four times daily on days before surgery [FDA]."]],
  paed: { tiers: ["6 years and over: 5 mg two to four times daily (some may need 10 mg two or three times daily) [FDA].", "Under 6 years: not recommended [FDA]."], transition: "Adult doses [NEP].", calcNote: "Fixed doses." },
  adj: { renal: "Use with caution [NEP].", hepatic: "Use with caution; accumulation in liver disease [NEP].", preg: "Avoid — neonatal sedation and withdrawal [NEP].", other: "Lower first dose if already on an opioid [FDA]. Taper slowly to stop [FDA]." },
  tox: { human: "Somnolence, confusion, coma, reduced reflexes [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; flumazenil only with caution (seizure risk) [NEP]." },
  contra: ["Known hypersensitivity to chlordiazepoxide [FDA]."],
  ae: { common: ["Drowsiness, ataxia, confusion (especially elderly) [FDA]."], serious: ["Respiratory depression with opioids (boxed) [FDA]", "Abuse, misuse, addiction (boxed) [FDA]", "Dependence and withdrawal reactions (boxed) [FDA]", "Agranulocytosis and jaundice (rare) [FDA]"] },
  monitor: ["Sedation, breathing; CIWA-Ar score in alcohol withdrawal [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "chlordiazepoxide", indication_id: "anx", label: "Anxiety — 5–10 mg four times daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose", value_max: 10 }, interval_h: 6, divided_doses: 4, caps: { max_single: 25, max_daily: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Severe anxiety: 20–25 mg three or four times daily"], sources: ["FDA"] },
    { drug: "chlordiazepoxide", indication_id: "aw", label: "Alcohol withdrawal — 50–100 mg, repeat as needed (max 300 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose", value_max: 100 }, interval_h: null, divided_doses: 1, caps: { max_single: 100, max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 25, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["Maximum 300 mg in 24 h"], sources: ["FDA"] },
    { drug: "chlordiazepoxide", indication_id: "child", label: "Child 6 years and over — 5 mg two to four times daily", route: "PO", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 10, max_daily: 30, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 5, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Chlordiazepoxide HCl capsules USP (ANDA084769), label effective 2026-11-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3cbd7cee-c4d7-4c95-93d8-09428169b937"]],
  dose: { tagline: "Long-acting benzodiazepine used mainly for alcohol withdrawal.",
    boxedTitle: "Risks from concomitant use with opioids; abuse, misuse, and addiction; and dependence and withdrawal reactions",
    boxed: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of these drugs for patients for whom alternative treatment options are inadequate. Limit dosages and durations to the minimum required. Follow patients for signs and symptoms of respiratory depression and sedation. The use of benzodiazepines, including chlordiazepoxide hydrochloride capsules, exposes users to risks of abuse, misuse, and addiction, which can lead to overdose or death. Abuse and misuse of benzodiazepines commonly involve concomitant use of other medications, alcohol, and/or illicit substances, which is associated with an increased frequency of serious adverse outcomes. Before prescribing chlordiazepoxide hydrochloride capsules and throughout treatment, assess each patient’s risk for abuse, misuse, and addiction. The continued use of benzodiazepines, including chlordiazepoxide hydrochloride capsules, may lead to clinically significant physical dependence. The risks of dependence and withdrawal increase with longer treatment duration and higher daily dose. Abrupt discontinuation or rapid dosage reduction of chlordiazepoxide hydrochloride capsules after continued use may precipitate acute withdrawal reactions, which can be life-threatening. To reduce the risk of withdrawal reactions, use a gradual taper to discontinue chlordiazepoxide hydrochloride capsules or reduce the dosage.",
    adult: [
      { ind: "Alcohol withdrawal", text: "50–100 mg orally, repeated as needed until agitation is controlled; maximum 300 mg a day, then taper.", calc: ["aw"] },
      { ind: "Anxiety", text: "5–10 mg three or four times daily (severe: 20–25 mg).", calc: ["anx"] },
      { ind: "Elderly", text: "5 mg two to four times daily." }
    ],
    child: [{ ind: "6 years and over", text: "5 mg two to four times daily (up to 10 mg two or three times daily).", calc: ["child"] }] }
});

/* ---------- CHLORHEXIDINE (FDA topical 4% scrub NDA019127 and PERIDEX 0.12% oral rinse NDA019028) ---------- */
FDB_M("chlorhexidine", {
  inn: "Chlorhexidine", atc: "D08AC02", cls: "Biguanide antiseptic",
  linked: [["Surgical hand scrub and skin antisepsis", "[FDA]", ""], ["Gingivitis (oral rinse)", "[FDA]", ""]],
  forms: ["Chlorhexidine gluconate 4% skin cleanser/scrub [FDA].", "Oral rinse 0.12% [FDA].", "Also 2% in 70% alcohol skin prep; 7.1% umbilical cord gel (WHO) [NEP]."],
  moa: "Disrupts bacterial cell membranes; binds to skin and oral surfaces for lasting effect [NEP].",
  pk: ["Minimal absorption through intact skin or mucosa [NEP]."],
  ind: { adult: ["Surgical hand scrub and healthcare handwash (4%) [FDA].", "Gingivitis between dental visits (0.12% rinse) [FDA]."], paed: ["Use with care in premature infants and infants under 2 months — irritation or chemical burns [FDA]."] },
  adult: [["Surgical hand scrub (4%)", "Scrub hands and forearms 3 min with a wet brush, rinse, scrub another 3 min, rinse, dry [FDA]."], ["Healthcare handwash (4%)", "Wash vigorously 15 seconds, rinse and dry [FDA]."], ["Gingivitis (0.12% rinse)", "15 mL undiluted, rinse 30 seconds twice daily after brushing; do not rinse with water afterwards [FDA]."]],
  paed: { tiers: ["Premature and under 2 months: use with care [FDA]."], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Keep out of eyes, ears and mouth (skin products): permanent eye injury, deafness through a perforated eardrum [FDA]." },
  tox: { human: "Ingestion: GI irritation; alcohol content of some products [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Rinse eyes thoroughly with water; supportive [FDA]." },
  contra: ["Allergy to chlorhexidine gluconate or any ingredient [FDA]."],
  ae: { common: ["Skin irritation; tooth and tongue staining, taste change, calculus with the rinse [FDA]."], serious: ["Severe allergic reactions including anaphylaxis [FDA]", "Chemical burns in premature infants [FDA]"] },
  monitor: ["Skin reactions; tooth staining [NEP]."],
  local: { neml: "Not found in the Bhutan NEML 2025 text [BT-NEML].", strengths: "—", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Dyna-Hex 4 (chlorhexidine gluconate 4%) — Xttrium Laboratories (NDA019127), effective 2026-04-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a32c299-f7ca-d15c-e063-6294a90af2c1"], ["FDA", "PERIDEX (chlorhexidine gluconate 0.12%) oral rinse — Solventum (NDA019028), effective 2024-08-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3fcd41c4-875a-4e54-b533-261f198011af"]],
  dose: { tagline: "Antiseptic for surgical scrub, skin prep and gingivitis; allergy can be severe.",
    adult: [
      { ind: "Surgical hand scrub (4%)", text: "Two 3-minute scrubs with a brush, rinsing between." },
      { ind: "Gingivitis (0.12% rinse)", text: "15 mL for 30 seconds twice daily after brushing." }
    ],
    child: [{ ind: "Premature and young infants", text: "Use with care — risk of irritation and chemical burns." }] }
});

/* ---------- CHLORMETHINE (US: mechlorethamine; FDA VALCHLOR gel 0.016%, Helsinn, NDA202317, eff. 2024-11-20) ---------- */
FDB_M("chlormethine", {
  inn: "Chlormethine", atc: "L01AA05", cls: "Nitrogen mustard alkylating agent (topical gel)",
  linked: [["Mycosis fungoides (stage IA–IB cutaneous T-cell lymphoma)", "After prior skin-directed therapy [FDA]", ""]],
  forms: ["Gel 0.016% w/w mechlorethamine (0.02% HCl), 60 g tube — alcohol-based, flammable [FDA].", "IV injection (MUSTARGEN) no longer marketed in the US [NEP]."],
  moa: "Alkylating agent that inhibits rapidly dividing cells [FDA].",
  pk: ["No systemic exposure seen with topical use [FDA]."],
  ind: { adult: ["Topical treatment of stage IA and IB mycosis fungoides-type CTCL after prior skin-directed therapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Mycosis fungoides", "Apply a thin film once daily to affected skin [FDA]."], ["Skin reactions", "Stop for ulceration, blistering or moderately severe dermatitis; restart every 3 days, then every other day, then daily as tolerated [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "May cause fetal harm [FDA].", other: "Cytotoxic: wash hands after use; carers wear nitrile gloves; avoid fire until dry [FDA]." },
  tox: { human: "Eye exposure: burns, possible blindness [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Eye exposure: irrigate at least 15 minutes and get urgent eye care [FDA]." },
  contra: ["Severe hypersensitivity to mechlorethamine [FDA]."],
  ae: { common: ["Dermatitis, pruritus, bacterial skin infection, skin ulceration, hyperpigmentation [FDA]."], serious: ["Mucosal or eye injury [FDA]", "Non-melanoma skin cancer [FDA]"] },
  monitor: ["Skin reactions; skin cancer during and after [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "VALCHLOR (mechlorethamine) gel 0.016% — Helsinn Therapeutics, label effective 2024-11-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a52e4c2-6a9f-4ebb-bc77-046b4f8bcd57"]],
  dose: { tagline: "Topical nitrogen mustard gel for early mycosis fungoides.",
    adult: [{ ind: "Stage IA–IB mycosis fungoides", text: "Thin film once daily to affected skin; wash hands after." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CHLOROPROCAINE (FDA NESACAINE injection, Fresenius Kabi, NDA009435; IHEEZO 3% eye gel NDA216227) ---------- */
FDB_M("chloroprocaine", {
  inn: "Chloroprocaine", atc: "N01BA04", cls: "Ester local anaesthetic (very short-acting)",
  linked: [["Infiltration, peripheral nerve block, caudal and epidural anaesthesia", "[FDA]", ""], ["Ocular surface anaesthesia (3% gel)", "[FDA]", ""]],
  forms: ["Injection 2% and 3% (NESACAINE; MPF form for caudal/epidural) [FDA].", "Eye gel 3% (24 mg per single-use vial) [FDA]."],
  moa: "Blocks sodium channels in nerve membranes [NEP].",
  pk: ["Plasma half-life about 25 seconds (adults), 43 seconds (neonates) — rapid ester hydrolysis by plasma cholinesterase [FDA]."],
  ind: { adult: ["Infiltration and peripheral nerve block; caudal and lumbar epidural (MPF form) [FDA].", "Ocular surface anaesthesia (gel) [FDA]."], paed: ["Children over 3 years with normal lean body mass: maximum 11 mg/kg [FDA]."] },
  adult: [["Maximum single dose", "Without adrenaline 11 mg/kg, not more than 800 mg; with adrenaline 1:200,000, 14 mg/kg, not more than 1000 mg [FDA]."], ["Caudal", "15–25 mL of 2% or 3%; repeat every 40–60 min [FDA]."], ["Lumbar epidural", "2–2.5 mL per segment of 2% or 3%; usual total 15–25 mL [FDA]."], ["Eye gel", "3 drops to the ocular surface; reapply as needed (healthcare provider only) [FDA]."]],
  paed: { tiers: ["Over 3 years, normal body build: not more than 11 mg/kg (e.g. 23 kg → 250 mg); 0.5–1% suggested [FDA]."], transition: "Adult maximum 800 mg [FDA].", calcNote: "Maximum dose calculator (not a fixed dose)." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Reduce dose in liver disease [FDA].", preg: "No adequate data [FDA].", other: "Reduce in children, elderly, debilitated and cardiac patients [FDA]. Atypical plasma cholinesterase prolongs effect [NEP]. Eye gel: do not touch the eye for 10–20 min; not for patient self-use [FDA]." },
  tox: { human: "Local anaesthetic systemic toxicity: CNS excitation then depression, cardiovascular collapse [NEP].", animal: "Mice: IV LD50 97 mg/kg; SC LD50 950 mg/kg [FDA].", manage: "Airway, oxygen, seizure control; lipid emulsion per LAST protocols [NEP]." },
  contra: ["Hypersensitivity to ester local anaesthetics (PABA derivatives) [NEP].", "Eye gel: hypersensitivity to any component [FDA]."],
  ae: { common: ["Eye gel: mydriasis (about 25%) [FDA]."], serious: ["Systemic toxicity with high levels or intravascular injection [FDA]", "Chondrolysis with intra-articular infusion [FDA]", "Corneal opacification with prolonged eye use [FDA]"] },
  monitor: ["Cardiovascular and respiratory signs and consciousness after each injection [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "chloroprocaine", indication_id: "max", label: "MAXIMUM dose without adrenaline — 11 mg/kg (max 800 mg)", route: "local", population: { min_age_months: 36, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 11, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 800, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "2% inj", strength: 20, unit: "mg/mL" }, { form: "3% inj", strength: 30, unit: "mg/mL" }], rounding: "Do not exceed", renal: [], flags: ["This is an upper limit, not a target"], sources: ["FDA"] },
    { drug: "chloroprocaine", indication_id: "maxepi", label: "MAXIMUM dose with adrenaline 1:200,000 (adults) — 14 mg/kg (max 1000 mg)", route: "local", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 14, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "2% inj", strength: 20, unit: "mg/mL" }, { form: "3% inj", strength: 30, unit: "mg/mL" }], rounding: "Do not exceed", renal: [], flags: ["This is an upper limit, not a target"], sources: ["FDA"] }
  ],
  sources: [["FDA", "NESACAINE / NESACAINE-MPF (chloroprocaine HCl) injection — Fresenius Kabi, label effective 2022-09-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a844e68a-1462-40e4-be5e-f56214906eb9"], ["FDA", "IHEEZO (chloroprocaine HCl ophthalmic gel) 3% — Harrow Eye, label effective 2026-03-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea3b2d2c-8b33-d199-e053-2995a90a699c"]],
  dose: { tagline: "Very short-acting ester local anaesthetic; know the maximum dose.",
    adult: [
      { ind: "Maximum single dose", text: "11 mg/kg (max 800 mg) plain; 14 mg/kg (max 1000 mg) with adrenaline.", calc: ["max", "maxepi"] },
      { ind: "Epidural / caudal (MPF)", text: "Caudal 15–25 mL of 2–3%; lumbar epidural 2–2.5 mL per segment." },
      { ind: "Eye (3% gel)", text: "3 drops to the ocular surface; repeat as needed." }
    ],
    child: [{ ind: "Over 3 years", text: "Not more than 11 mg/kg (0.5–1% solution).", calc: ["max"] }] }
});

/* ---------- CHLOROQUINE (FDA chloroquine phosphate tablets, Rising, ANDA090612, eff. 2026-10-21; original ARALEN) ---------- */
FDB_M("chloroquine", {
  inn: "Chloroquine", atc: "P01BA01", cls: "4-aminoquinoline antimalarial",
  linked: [["P. vivax malaria (Bhutan)", "With primaquine [BT-STG]", "malaria-adult"], ["Uncomplicated chloroquine-sensitive malaria", "[FDA]", "malaria-child"], ["Malaria prophylaxis (chloroquine-sensitive areas)", "[FDA]", ""], ["Extraintestinal amoebiasis", "[FDA]", ""]],
  forms: ["Tablets 500 mg phosphate (= 300 mg base) [FDA].", "Bhutan: 150 mg (base) tablet [BT-NEML]."],
  moa: "Concentrates in parasite acid vesicles and blocks haem polymerisation [FDA].",
  pk: ["Very long half-life (weeks) [FDA].", "Doses are written as mg BASE: 500 mg phosphate = 300 mg base [FDA]."],
  ind: { adult: ["Uncomplicated malaria (P. falciparum where sensitive, P. malariae, P. ovale, P. vivax); prophylaxis where chloroquine-sensitive; extraintestinal amoebiasis [FDA].", "Does not prevent vivax/ovale relapse — add primaquine [FDA]."], paed: ["Infants and children by weight [FDA]."] },
  adult: [["Treatment (3 days)", "600 mg base, then 300 mg base at 6–8 h, then 300 mg base on each of the next 2 days (total 1.5 g base) [FDA]."], ["Prophylaxis", "300 mg base once weekly on the same day, from 2 weeks before until 8 weeks after leaving [FDA]."], ["Amoebiasis", "600 mg base daily for 2 days, then 300 mg base daily for 2–3 weeks [FDA]."]],
  paed: { tiers: ["Treatment: 10 mg base/kg (max 600 mg), then 5 mg base/kg (max 300 mg) at 6, 24 and 36 h — total 25 mg base/kg [FDA].", "Prophylaxis: 5 mg base/kg once weekly (never above the adult dose) [FDA]."], transition: "Never more than the adult dose [FDA].", calcNote: "All doses in mg BASE." },
  adj: { renal: "Use with caution [NEP].", hepatic: "Use with caution in liver disease or alcoholism [NEP].", preg: "Used for malaria in pregnancy where indicated [NEP].", other: "Not for severe/complicated malaria or resistant areas [FDA]. Baseline and periodic eye examination with long-term use [FDA]. QT prolongation [FDA]." },
  tox: { human: "As little as 1 g may be fatal in children; arrhythmia (QT, torsades, VF), convulsions, hypokalaemia, sudden cardiorespiratory arrest within minutes [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Immediate emergency care; consider diazepam and adrenaline/ventilation per toxicology advice [NEP]." },
  contra: ["Retinal or visual-field changes (for uses other than acute malaria) [FDA].", "Hypersensitivity to 4-aminoquinolines [FDA]."],
  ae: { common: ["Nausea, vomiting, abdominal cramps, headache, pruritus (especially in African patients), blurred vision [NEP]."], serious: ["Irreversible retinopathy [FDA]", "QT prolongation and arrhythmia [FDA]", "Hypoglycaemia; cardiomyopathy; psychiatric effects [FDA]"] },
  monitor: ["Eye examination on long-term use; ECG if risk factors; glucose [FDA]."],
  local: { neml: "Chloroquine 150 mg (base) tablet [BT-NEML].", strengths: "150 mg base tablet.", stg: "Bhutan STG 2024: chloroquine and primaquine for P. vivax [BT-STG]." },
  calc: [
    { drug: "chloroquine", indication_id: "c1", label: "Treatment — first dose 10 mg base/kg (max 600 mg base)", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 600, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab (base)", strength: 150, unit: "mg/tab" }], rounding: "Nearest ¼ tablet", renal: [], flags: ["mg BASE"], sources: ["FDA"] },
    { drug: "chloroquine", indication_id: "c2", label: "Treatment — 5 mg base/kg at 6, 24 and 36 h (max 300 mg base)", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab (base)", strength: 150, unit: "mg/tab" }], rounding: "Nearest ¼ tablet", renal: [], flags: ["mg BASE", "Total course 25 mg base/kg"], sources: ["FDA"] },
    { drug: "chloroquine", indication_id: "proph", label: "Prophylaxis — 5 mg base/kg once weekly (max 300 mg base)", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab (base)", strength: 150, unit: "mg/tab" }], rounding: "Nearest ¼ tablet", renal: [], flags: ["mg BASE"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Chloroquine phosphate tablets USP — Rising Pharma (ANDA090612), label effective 2026-10-21", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=06c69e2b-211b-4746-9f3a-f86d36520570"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Antimalarial for vivax and chloroquine-sensitive malaria; doses in mg base.",
    adult: [
      { ind: "Uncomplicated malaria (3 days)", text: "600 mg base, then 300 mg base at 6–8 h and on days 2 and 3 (total 1.5 g base). Add primaquine for vivax.", calc: ["c1", "c2"] },
      { ind: "Prophylaxis", text: "300 mg base once weekly.", calc: ["proph"] }
    ],
    child: [
      { ind: "Uncomplicated malaria", text: "10 mg base/kg, then 5 mg base/kg at 6, 24 and 36 h (total 25 mg base/kg).", calc: ["c1", "c2"] },
      { ind: "Prophylaxis", text: "5 mg base/kg once weekly.", calc: ["proph"] }
    ] }
});

/* ---------- CHLOROTHIAZIDE (FDA DIURIL oral suspension, Salix, NDA011870, eff. 2021-11-01) ---------- */
FDB_M("chlorothiazide", {
  inn: "Chlorothiazide", atc: "C03AA04", cls: "Thiazide diuretic",
  linked: [["Oedema (heart failure, cirrhosis, renal)", "[FDA]", "oedema-adult"], ["Hypertension", "[FDA]", "htn-adult"], ["Infant oedema / bronchopulmonary dysplasia diuresis", "[FDA]", ""]],
  forms: ["Oral suspension 250 mg/5 mL [FDA].", "IV sodium chlorothiazide 500 mg vial [NEP]."],
  moa: "Inhibits Na/Cl reabsorption in the distal tubule [NEP].",
  pk: ["Plasma half-life 45–120 minutes [FDA]."],
  ind: { adult: ["Adjunct in oedema (heart failure, cirrhosis, corticosteroid/oestrogen therapy, renal oedema); hypertension [FDA]."], paed: ["Diuresis and hypertension in infants and children [FDA]."] },
  adult: [["Oedema", "500–1000 mg once or twice daily; intermittent dosing (alternate days or 3–5 days a week) often works [FDA]."], ["Hypertension", "500–1000 mg a day, single or divided; rarely up to 2000 mg/day [FDA]."]],
  paed: { tiers: ["10–20 mg/kg/day in 1 or 2 doses [FDA].", "Maximum 375 mg/day up to 2 years; 1000 mg/day at 2–12 years [FDA].", "Under 6 months: up to 30 mg/kg/day in 2 doses may be needed [FDA]."], transition: "Adult dose from 12 years [NEP].", calcNote: "mg/kg/day ÷ 2 with the age maximum." },
  adj: { renal: "Caution in severe kidney disease — may cause azotaemia; ineffective in anuria [FDA].", hepatic: "Caution — electrolyte shifts can precipitate hepatic coma [FDA].", preg: "Routine use in normal pregnancy is inappropriate [FDA].", other: "Avoid with lithium [FDA]." },
  tox: { human: "Electrolyte depletion (low K, Cl, Na) and dehydration [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; correct fluids and electrolytes [FDA]." },
  contra: ["Anuria [FDA].", "Hypersensitivity to chlorothiazide or other sulfonamide-derived drugs [FDA]."],
  ae: { common: ["Hypokalaemia, hyponatraemia, hyperuricaemia, hyperglycaemia, orthostatic hypotension [NEP]."], serious: ["Pancreatitis; cholestatic jaundice [FDA]", "Aplastic anaemia, agranulocytosis [FDA]", "SLE exacerbation [FDA]"] },
  monitor: ["Electrolytes, glucose, uric acid, kidney function [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "chlorothiazide", indication_id: "u6m", label: "Infant under 6 months — up to 30 mg/kg/day in 2 doses", route: "PO", population: { min_age_months: 0, max_age_months: 6, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "day", value_max: 30 }, interval_h: 12, divided_doses: 2, caps: { max_daily: 375, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "chlorothiazide", indication_id: "u2", label: "6 months–2 years — 10–20 mg/kg/day in 2 doses (max 375 mg/day)", route: "PO", population: { min_age_months: 6, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "day", value_max: 20 }, interval_h: 12, divided_doses: 2, caps: { max_daily: 375, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "chlorothiazide", indication_id: "c212", label: "2–12 years — 10–20 mg/kg/day in 2 doses (max 1 g/day)", route: "PO", population: { min_age_months: 24, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "day", value_max: 20 }, interval_h: 12, divided_doses: 2, caps: { max_daily: 1000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "chlorothiazide", indication_id: "adult", label: "Adult — 500–1000 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose", value_max: 1000 }, interval_h: 24, divided_doses: 1, caps: { max_daily: 2000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest mL", renal: [{ crcl_min: 0, crcl_max: 0.5, action: "avoid", note: "contraindicated in anuria" }], renal_note: "Severe kidney disease: use with caution (azotaemia)", flags: ["Oedema: once or twice daily, or intermittent"], sources: ["FDA"] }
  ],
  sources: [["FDA", "DIURIL (chlorothiazide) oral suspension — Salix, label effective 2021-11-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bd936e35-1af8-42da-bcc0-f22489d68574"]],
  dose: { tagline: "Thiazide diuretic; the oral suspension is used in infants.",
    adult: [
      { ind: "Oedema", text: "500–1000 mg once or twice daily, or on alternate days.", calc: ["adult"] },
      { ind: "Hypertension", text: "500–1000 mg a day; rarely up to 2 g/day." }
    ],
    child: [
      { ind: "Under 6 months", text: "Up to 30 mg/kg/day in 2 doses.", calc: ["u6m"] },
      { ind: "6 months to 2 years", text: "10–20 mg/kg/day in 1–2 doses; max 375 mg/day.", calc: ["u2"] },
      { ind: "2–12 years", text: "10–20 mg/kg/day; max 1 g/day.", calc: ["c212"] }
    ] }
});

/* ---------- CHLORPROMAZINE (FDA tablets Advagen ANDA216678 + injection Henry Schein ANDA083329; original THORAZINE) ---------- */
FDB_M("chlorpromazine", {
  inn: "Chlorpromazine", atc: "N05AA01", cls: "Typical (phenothiazine) antipsychotic",
  linked: [["Acute psychosis, mania, schizophrenia", "[FDA]", "psychosis-adult"], ["Nausea and vomiting; intractable hiccups", "[FDA]", ""], ["Tetanus (adjunct); acute intermittent porphyria", "[FDA]", ""]],
  forms: ["Tablets 10, 25, 50, 100, 200 mg; injection 25 mg/mL [FDA].", "Bhutan: 100 mg tablet; 25 mg/mL injection [BT-NEML]."],
  moa: "Dopamine D2 blockade with antihistamine, anticholinergic and alpha-blocking effects [NEP].",
  pk: ["IM action may last up to 12 h [FDA]."],
  ind: { adult: ["Schizophrenia; mania; nausea and vomiting; preoperative restlessness; acute intermittent porphyria; tetanus adjunct; intractable hiccups [FDA]."], paed: ["Severe behaviour problems (1–12 years); nausea and vomiting — not under 6 months except if lifesaving [FDA]."] },
  adult: [["Acute agitation / mania (IM)", "25 mg IM; another 25–50 mg after 1 h if needed; increase gradually (up to 400 mg every 4–6 h in exceptional cases) [FDA]."], ["Psychosis (oral)", "Outpatients 10 mg three or four times daily or 25 mg two or three times daily; inpatients usually up to 500 mg/day (rarely 1–2 g) [FDA]."], ["Nausea and vomiting", "Oral 10–25 mg every 4–6 h as needed; IM 25 mg, then 25–50 mg every 3–4 h if no hypotension [FDA]."], ["Intractable hiccups", "25–50 mg orally three or four times daily; IM if persisting 2–3 days [FDA]."], ["Tetanus", "25–50 mg IM three or four times daily [FDA]."]],
  paed: { tiers: ["6 months–12 years: 0.55 mg/kg (¼ mg/lb) every 4–6 h orally, or every 6–8 h IM, as needed [FDA].", "Maximum IM: 40 mg/day (6 months–5 years or up to 22.7 kg); 75 mg/day (5–12 years or 22.7–45 kg) [FDA].", "Under 6 months: avoid unless lifesaving [FDA]."], transition: "Adult doses [NEP].", calcNote: "0.55 mg/kg per dose with the age IM maximum." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Neonatal extrapyramidal and withdrawal symptoms after third-trimester use [NEP].", other: "Elderly: lower doses; observe for hypotension [FDA]. Keep patient lying down for 30 min after injection (hypotension) [NEP]. Avoid in suspected Reye syndrome [FDA]." },
  tox: { human: "CNS depression to coma, hypotension, extrapyramidal signs, seizures, fever, arrhythmia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; early gastric lavage; treat hypotension with fluids/noradrenaline (not adrenaline) [NEP]." },
  contra: ["Hypersensitivity to phenothiazines [FDA].", "Comatose states or large amounts of CNS depressants [FDA]."],
  ae: { common: ["Drowsiness, hypotension, dry mouth, constipation, extrapyramidal effects, photosensitivity [NEP]."], serious: ["Increased mortality in elderly dementia psychosis (boxed) [FDA]", "Neuroleptic malignant syndrome; tardive dyskinesia [FDA]", "Cholestatic jaundice; agranulocytosis [FDA]", "Severe hypotension [FDA]"] },
  monitor: ["BP (lying and standing), extrapyramidal signs, blood count if infection signs [NEP]."],
  local: { neml: "Chlorpromazine 100 mg tablet; 25 mg/mL injection [BT-NEML].", strengths: "100 mg tablet; 25 mg/mL injection.", stg: "Bhutan STG 2024: chlorpromazine 50–100 mg IM stat or 100 mg IM PRN for acute agitation; 100–300 mg orally at bedtime [BT-STG]." },
  calc: [
    { drug: "chlorpromazine", indication_id: "im", label: "Adult acute agitation — 25 mg IM (repeat 25–50 mg after 1 h)", route: "IM", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 50, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], flags: ["Bhutan STG uses 50–100 mg IM stat"], sources: ["FDA"] },
    { drug: "chlorpromazine", indication_id: "c5", label: "Child 6 months–5 years — 0.55 mg/kg (IM max 40 mg/day)", route: "IM/PO", population: { min_age_months: 6, max_age_months: 60, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.55, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_daily: 40, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: ["Oral every 4–6 h; IM every 6–8 h, as needed"], sources: ["FDA"] },
    { drug: "chlorpromazine", indication_id: "c12", label: "Child 5–12 years — 0.55 mg/kg (IM max 75 mg/day)", route: "IM/PO", population: { min_age_months: 60, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.55, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_daily: 75, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 25, unit: "mg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: ["Oral every 4–6 h; IM every 6–8 h, as needed"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Chlorpromazine HCl tablets — Advagen Pharma (ANDA216678), label effective 2025-10-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02c56c39-99bd-44a4-8d9d-9d867c323968"], ["FDA", "Chlorpromazine HCl injection USP — Henry Schein (ANDA083329), label effective 2026-10-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=310d161e-c4db-49e8-8665-d1a6d4e11320"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Sedating typical antipsychotic; also for vomiting, hiccups and tetanus.",
    boxedTitle: "Increased mortality in elderly patients with dementia-related psychosis",
    boxed: "Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. Analyses of seventeen placebo-controlled trials (modal duration of 10 weeks), largely in patients taking atypical antipsychotic drugs, revealed a risk of death in drug treated patients of between 1.6 to 1.7 times the risk of death in placebo-treated patients. Over the course of a typical 10-week controlled trial, the rate of death in drug-treated patients was about 4.5%, compared to a rate of about 2.6% in the placebo group. Although the causes of death were varied, most of the deaths appeared to be either cardiovascular (e.g., heart failure, sudden death) or infectious (e.g., pneumonia) in nature. Observational studies suggest that, similar to atypical antipsychotic drugs, treatment with conventional antipsychotic drugs may increase mortality. The extent to which the findings of increased mortality in observational studies may be attributed to the antipsychotic drug as opposed to some characteristic(s) of the patients is not clear. Chlorpromazine hydrochloride is not approved for the treatment of patients with dementia-related psychosis.",
    adult: [
      { ind: "Acute agitation / mania", text: "25 mg IM; 25–50 mg more after 1 h if needed (Bhutan STG: 50–100 mg IM).", calc: ["im"] },
      { ind: "Psychosis (oral)", text: "25 mg three times daily, increasing gradually; usual up to 400–500 mg a day." },
      { ind: "Nausea and vomiting", text: "10–25 mg orally every 4–6 h, or 25 mg IM.", calc: ["im"] },
      { ind: "Intractable hiccups", text: "25–50 mg three or four times daily." }
    ],
    child: [
      { ind: "6 months–5 years", text: "0.55 mg/kg (¼ mg/lb) every 4–6 h orally or 6–8 h IM; IM max 40 mg a day.", calc: ["c5"] },
      { ind: "5–12 years", text: "0.55 mg/kg (¼ mg/lb); IM max 75 mg a day.", calc: ["c12"] }
    ] }
});

/* ---------- CHLORTALIDONE (US: chlorthalidone; FDA tablets Unichem ANDA211627 + HEMICLOR NDA218647; original HYGROTON/THALITONE) ---------- */
FDB_M("chlortalidone", {
  inn: "Chlortalidone", atc: "C03BA04", cls: "Thiazide-like diuretic (long-acting)",
  linked: [["Hypertension", "[FDA]", "htn-adult"], ["Oedema (heart failure, cirrhosis, renal, corticosteroid/oestrogen)", "[FDA]", "oedema-adult"]],
  forms: ["Tablets 12.5, 25, 50, 100 mg [FDA]."],
  moa: "Inhibits Na/Cl reabsorption in the cortical diluting segment [FDA].",
  pk: ["Half-life 40–60 h — once daily, in the morning with food [FDA]."],
  ind: { adult: ["Hypertension; adjunct for oedema [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Hypertension", "Start 12.5–25 mg once daily; double every 2–4 weeks as needed to 50 mg, maximum 100 mg once daily [FDA]."], ["Oedema", "50–100 mg daily or 100 mg on alternate days; some need 150–200 mg; up to 200 mg daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Higher risk of acute kidney injury in kidney disease — monitor; ineffective and contraindicated in anuria [FDA].", hepatic: "Monitor fluid and electrolytes [FDA].", preg: "Not first-line for hypertension in pregnancy [FDA].", other: "Raises lithium levels [FDA]. Dose-related low potassium and raised uric acid [FDA]." },
  tox: { human: "Nausea, weakness, dizziness, electrolyte disturbance [FDA].", animal: "Oral LD50 in mouse and rat over 25,000 mg/kg [FDA].", manage: "Gastric lavage, supportive; IV dextrose-saline with potassium with caution [FDA]." },
  contra: ["Anuria [FDA].", "Hypersensitivity to chlortalidone or other sulfonamide-derived drugs [FDA]."],
  ae: { common: ["Hypokalaemia, hyponatraemia, hypomagnesaemia, hyperuricaemia, hyperglycaemia, dizziness [FDA]."], serious: ["Acute kidney injury [FDA]", "Severe electrolyte disturbance [FDA]", "SLE activation [FDA]"] },
  monitor: ["Electrolytes (K, Na, Mg), creatinine, uric acid, glucose [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "chlortalidone", indication_id: "htn", label: "Hypertension — 12.5–25 mg once daily (max 100 mg)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 12.5, unit: "mg", per: "dose", value_max: 25 }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, max_daily: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }], rounding: "Half tablets", renal: [{ crcl_min: 0, crcl_max: 0.5, action: "avoid", note: "contraindicated in anuria" }], renal_note: "Kidney disease: higher risk of acute kidney injury — monitor", flags: [], sources: ["FDA"] },
    { drug: "chlortalidone", indication_id: "oed", label: "Oedema — 50–100 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose", value_max: 100 }, interval_h: 24, divided_doses: 1, caps: { max_single: 200, max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 0.5, action: "avoid", note: "contraindicated in anuria" }], flags: ["Or 100 mg on alternate days"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Chlorthalidone tablets USP — Unichem (ANDA211627), label effective 2022-11-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01065eda-7515-46bc-b858-a062c3aa35bd"], ["FDA", "HEMICLOR (chlorthalidone) 12.5 mg — Ingenus, label effective 2025-03-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3f0f3ee0-f5a6-4bda-8160-a77744e9fa46"]],
  dose: { tagline: "Long-acting thiazide-like diuretic for hypertension and oedema.",
    adult: [
      { ind: "Hypertension", text: "12.5–25 mg once daily in the morning; up to 50 mg (maximum 100 mg).", calc: ["htn"] },
      { ind: "Oedema", text: "50–100 mg daily or 100 mg on alternate days (up to 200 mg).", calc: ["oed"] }
    ],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CHLORZOXAZONE (FDA chlorzoxazone 500 mg tablets, ANDA089859, eff. 2026-11-16; original PARAFON FORTE) ---------- */
FDB_M("chlorzoxazone", {
  inn: "Chlorzoxazone", atc: "M03BB03", cls: "Centrally acting muscle relaxant",
  linked: [["Acute painful musculoskeletal conditions", "Adjunct to rest and physiotherapy [FDA]", "lbp-adult"]],
  forms: ["Tablets 250, 375, 500, 750 mg [NEP]."],
  moa: "Uncertain; may relate to sedative properties — does not directly relax skeletal muscle [FDA].",
  pk: ["Short half-life (about 1 h) [NEP]."],
  ind: { adult: ["Adjunct for discomfort of acute, painful musculoskeletal conditions [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Usual", "500 mg three or four times daily; may increase to 750 mg three or four times daily; reduce as improvement occurs [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Stop if liver enzymes rise [FDA].", preg: "Safety not established [FDA].", other: "Additive sedation with alcohol and CNS depressants [FDA]. Urine may turn orange or purple-red [NEP]." },
  tox: { human: "GI upset, drowsiness, then marked loss of muscle tone, absent reflexes, respiratory depression, hypotension [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; airway and ventilation [NEP]." },
  contra: ["Known intolerance to chlorzoxazone [FDA]."],
  ae: { common: ["Drowsiness, dizziness, light-headedness, malaise [FDA]."], serious: ["Serious, sometimes fatal, hepatocellular toxicity (rare, idiosyncratic) [FDA]", "GI bleeding (rare) [FDA]", "Angioedema, anaphylaxis (very rare) [FDA]"] },
  monitor: ["Warning signs of liver injury (fever, rash, nausea, RUQ pain, dark urine, jaundice) [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "chlorzoxazone", indication_id: "std", label: "500–750 mg three or four times daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose", value_max: 750 }, interval_h: 6, divided_doses: 4, caps: { max_single: 750, max_daily: 3000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Chlorzoxazone tablets USP 500 mg (ANDA089859), label effective 2026-11-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8650d342-92df-48d7-9f3d-cdd6f6f4c0e7"]],
  dose: { tagline: "Muscle relaxant for acute back and muscle pain; rare serious liver injury.",
    adult: [{ ind: "Acute musculoskeletal pain", text: "500 mg three or four times daily (up to 750 mg).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CHOLIC ACID (FDA CHOLBAM, Mirum, NDA205750, eff. 2026-01-26) ---------- */
FDB_M("cholic-acid", {
  inn: "Cholic acid", atc: "A05AA03", cls: "Primary bile acid replacement",
  linked: [["Bile acid synthesis disorders (single enzyme defects)", "[FDA]", ""], ["Peroxisomal disorders incl. Zellweger spectrum (adjunct)", "[FDA]", ""]],
  forms: ["Capsules 50 mg and 250 mg (can be opened and mixed with formula, milk or soft food) [FDA]."],
  moa: "Replaces deficient primary bile acid, feeding back to reduce toxic intermediate bile acids [FDA].",
  pk: ["Enterohepatic circulation [FDA]."],
  ind: { adult: ["Bile acid synthesis disorders due to SEDs; peroxisomal disorders with liver disease, steatorrhoea or fat-soluble vitamin malabsorption [FDA]."], paed: ["Children and adults [FDA]."] },
  adult: [["Usual", "10–15 mg/kg once daily or in 2 divided doses [FDA]."], ["With familial hypertriglyceridaemia", "11–17 mg/kg/day [FDA]."]],
  paed: { tiers: ["10–15 mg/kg/day once daily or in 2 doses — label capsule tables give combinations of 50 mg and 250 mg capsules by weight [FDA]."], transition: "Same mg/kg [FDA].", calcNote: "mg/kg/day; use the label capsule tables for whole capsules." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Stop if liver function worsens, no improvement by 3 months, or complete biliary obstruction [FDA].", preg: "Limited reports of healthy infants [FDA].", other: "Take 1 h before or 4–6 h after bile acid resins or aluminium antacids; avoid ciclosporin and other BSEP inhibitors [FDA]." },
  tox: { human: "Rising GGT and ALT together may signal overdose [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; restart at lower dose when liver tests return to baseline [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, reflux oesophagitis, malaise, jaundice, skin lesion, nausea, abdominal pain [FDA]."], serious: ["Worsening liver impairment [FDA]"] },
  monitor: ["AST, ALT, GGT, ALP, bilirubin, INR monthly for 3 months, then 3-monthly for 9 months, 6-monthly for 3 years, then yearly [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cholic-acid", indication_id: "std", label: "10–15 mg/kg/day (once daily or in 2 doses)", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "day", value_max: 15 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Use label capsule tables (50 mg and 250 mg)", renal: [], flags: ["Familial hypertriglyceridaemia: 11–17 mg/kg/day"], sources: ["FDA"] }],
  sources: [["FDA", "CHOLBAM (cholic acid) capsules — Mirum Pharmaceuticals, label effective 2026-01-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5c6e4c9d-b85e-493f-9420-ab2fd0ff3723"]],
  dose: { tagline: "Bile acid replacement for inborn bile acid synthesis and peroxisomal disorders.",
    adult: [{ ind: "Bile acid synthesis disorders; peroxisomal disorders", text: "10–15 mg/kg/day once daily or in 2 doses.", calc: ["std"] }],
    child: [{ ind: "All ages", text: "10–15 mg/kg/day; whole-capsule combinations by weight in the label tables.", calc: ["std"] }] }
});

/* ---------- CHOLINE FENOFIBRATE (FDA fenofibric acid DR capsules, Macleods ANDA207796; original TRILIPIX) ---------- */
FDB_M("choline-fenofibrate", {
  inn: "Choline fenofibrate", atc: "C10AB11", cls: "Fibrate (fenofibric acid delayed-release)",
  linked: [["Severe hypertriglyceridaemia (TG ≥500 mg/dL)", "[FDA]", "lipids-adult"], ["Primary hyperlipidaemia when LDL-lowering therapy is not possible", "[FDA]", ""]],
  forms: ["Delayed-release capsules 45 mg and 135 mg (as fenofibric acid) [FDA]."],
  moa: "PPAR-α agonist; increases lipolysis and lowers triglycerides [NEP].",
  pk: ["Half-life about 20 h [FDA].", "Swallow whole; with or without food [FDA]."],
  ind: { adult: ["Adjunct to diet: severe hypertriglyceridaemia; primary hyperlipidaemia when recommended LDL-lowering therapy is not possible [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Severe hypertriglyceridaemia", "45–135 mg once daily, adjusted to response [FDA]."], ["Primary hyperlipidaemia", "135 mg once daily [FDA]."], ["Kidney impairment", "Start 45 mg once daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Kidney impairment: start 45 mg; severe impairment, ESRD and dialysis: contraindicated [FDA].", hepatic: "Active liver disease: contraindicated [FDA].", preg: "Use only if benefit justifies risk [FDA].", other: "Stop if no response after 2 months [FDA]. Increases warfarin effect [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; not removed by haemodialysis (highly protein bound) [FDA]." },
  contra: ["Severe kidney impairment, ESRD, dialysis [FDA].", "Active liver disease [FDA].", "Pre-existing gallbladder disease [FDA].", "Hypersensitivity to fenofibric acid or fenofibrate [FDA]."],
  ae: { common: ["Headache, back pain, nasopharyngitis, nausea, myalgia, diarrhoea [NEP]."], serious: ["Hepatotoxicity [FDA]", "Myopathy and rhabdomyolysis (more with statins) [FDA]", "Cholelithiasis; pancreatitis [FDA]", "Raised creatinine [FDA]"] },
  monitor: ["Lipids at 4–8 weeks; liver tests; creatinine; CK if muscle symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "choline-fenofibrate", indication_id: "std", label: "135 mg once daily (45 mg start in kidney impairment)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 135, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 135, max_daily: 135, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "DR cap", strength: 135, unit: "mg/cap" }], rounding: "Whole capsule", renal: [{ crcl_min: 30, crcl_max: 89.999, action: "reduce_dose", set_value: 45, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "contraindicated in severe kidney impairment, ESRD and dialysis" }], renal_note: "Kidney impairment: start 45 mg and adjust to kidney function", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Fenofibric acid delayed-release capsules — Macleods (ANDA207796), label effective 2025-07-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=af225492-73b0-49bb-b32f-5399c3c3ec6d"]],
  dose: { tagline: "Once-daily fibrate capsule for high triglycerides.",
    adult: [
      { ind: "Severe hypertriglyceridaemia", text: "45–135 mg once daily.", calc: ["std"] },
      { ind: "Primary hyperlipidaemia", text: "135 mg once daily.", calc: ["std"] }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CHORIOGONADOTROPIN ALFA (FDA OVIDREL, EMD Serono, BLA021149, eff. 2023-12-26) ---------- */
FDB_M("choriogonadotropin-alfa", {
  inn: "Choriogonadotropin alfa", atc: "G03GA08", cls: "Recombinant human chorionic gonadotropin (r-hCG)",
  linked: [["Final follicular maturation and ovulation trigger (ART, ovulation induction)", "[FDA]", "infertility-adult"]],
  forms: ["Prefilled syringe 250 micrograms SC [FDA]."],
  moa: "LH-like action that triggers final oocyte maturation and ovulation [NEP].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Induction of final follicular maturation and early luteinisation in ART after pituitary desensitisation and FSH; induction of ovulation in anovulatory women [FDA]."], paed: ["Not applicable. [NEP]"] },
  adult: [["ART and ovulation induction", "250 micrograms SC once, one day after the last FSH dose, only when oestradiol and ultrasound show adequate follicles [FDA]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "—", calcNote: "Single fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Contraindicated in pregnancy [FDA].", other: "Withhold if the ovaries over-respond (OHSS risk) [FDA]. Not to be confused with urinary hCG (units) [NEP]." },
  tox: { human: "Ovarian hyperstimulation [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Manage OHSS supportively [NEP]." },
  contra: ["Prior hypersensitivity to hCG preparations or excipients [FDA].", "Primary ovarian failure [FDA].", "Uncontrolled thyroid or adrenal dysfunction; intracranial lesion such as pituitary tumour [FDA].", "Undiagnosed abnormal uterine bleeding; ovarian cyst or enlargement of unknown cause [FDA].", "Sex-hormone-dependent tumours; pregnancy [FDA]."],
  ae: { common: ["Injection-site reactions, abdominal pain, nausea, vomiting [NEP]."], serious: ["Ovarian hyperstimulation syndrome [FDA]", "Multiple pregnancy; arterial thromboembolism [FDA]"] },
  monitor: ["Serum oestradiol and vaginal ultrasound before giving [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "OVIDREL (choriogonadotropin alfa injection) prefilled syringe — EMD Serono, label effective 2023-12-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a683e58a-63ea-44b8-a326-1a99a537bcf2"]],
  dose: { tagline: "Recombinant hCG trigger injection, 250 micrograms once.",
    adult: [{ ind: "Ovulation trigger (ART or ovulation induction)", text: "250 micrograms SC once, the day after the last FSH dose, when follicles are ready." }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- CHORIONIC GONADOTROPHIN (FDA chorionic gonadotropin, Fresenius Kabi, BLA017067, eff. 2025-04-11; also PREGNYL) ---------- */
FDB_M("chorionic-gonadotrophin", {
  inn: "Chorionic gonadotrophin", atc: "G03GA01", cls: "Urinary human chorionic gonadotropin (hCG)",
  linked: [["Ovulation induction (after menotropins)", "[FDA]", "infertility-adult"], ["Prepubertal cryptorchidism", "Not due to obstruction [FDA]", ""], ["Hypogonadotropic hypogonadism in males", "[FDA]", ""]],
  forms: ["Powder for injection 5,000 and 10,000 USP units (IM) [FDA]."],
  moa: "LH-like action on gonads [NEP].",
  pk: ["Use within 60 days after reconstitution; refrigerate [FDA]."],
  ind: { adult: ["Ovulation induction in anovulatory women pretreated with menotropins; selected hypogonadotropic hypogonadism in males [FDA].", "Not effective for obesity [FDA]."], paed: ["Prepubertal cryptorchidism, usually ages 4–9 [FDA]."] },
  adult: [["Ovulation induction", "5,000–10,000 USP units IM one day after the last menotropins dose [FDA]."], ["Male hypogonadotropic hypogonadism", "500–1,000 units three times a week for 3 weeks, then twice weekly for 3 weeks; or 4,000 units three times weekly for 6–9 months, then 2,000 units three times weekly for 3 more months [FDA]."]],
  paed: { tiers: ["Cryptorchidism (one of): 4,000 units three times weekly for 3 weeks; 5,000 units every second day for 4 injections; 15 injections of 500–1,000 units over 6 weeks; 500 units three times weekly for 4–6 weeks [FDA]."], transition: "—", calcNote: "Regimens in units — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Ovulation induction only by infertility specialists with monitoring [FDA]. Not interchangeable with recombinant choriogonadotropin alfa (micrograms) [NEP]." },
  tox: { human: "Ovarian hyperstimulation [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Precocious puberty [FDA].", "Prostatic carcinoma or other androgen-dependent neoplasm [FDA].", "Prior allergic reaction to hCG [FDA]."],
  ae: { common: ["Headache, irritability, restlessness, depression, fatigue, oedema, gynaecomastia, injection-site pain [FDA]."], serious: ["Ovarian hyperstimulation syndrome [FDA]", "Ovarian cyst rupture with haemoperitoneum [FDA]", "Multiple births; arterial thromboembolism [FDA]", "Anaphylaxis; precocious puberty [FDA]"] },
  monitor: ["Oestradiol and ultrasound in ovulation induction [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Chorionic gonadotropin for injection USP — Fresenius Kabi (BLA017067), label effective 2025-04-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f93b2baa-03ac-4650-b35a-20b818d712d6"]],
  dose: { tagline: "Urinary hCG in units for ovulation trigger, cryptorchidism and male hypogonadism.",
    adult: [
      { ind: "Ovulation induction", text: "5,000–10,000 USP units IM one day after the last menotropins dose." },
      { ind: "Male hypogonadotropic hypogonadism", text: "500–1,000 units three times weekly, or 4,000 units three times weekly for 6–9 months." }
    ],
    child: [{ ind: "Prepubertal cryptorchidism (4–9 years)", text: "e.g. 4,000 units three times weekly for 3 weeks, or 500 units three times weekly for 4–6 weeks." }] }
});

/* ---------- CICLESONIDE (FDA ALVESCO inhalation aerosol, Covis, NDA021658, eff. 2025-02-28) ---------- */
FDB_M("ciclesonide", {
  inn: "Ciclesonide", atc: "R03BA08", cls: "Inhaled corticosteroid (prodrug)",
  linked: [["Asthma — maintenance (12 years and over)", "[FDA]", "asthma-adult"]],
  forms: ["Inhalation aerosol 80 and 160 micrograms per actuation [FDA].", "Nasal spray (OMNARIS/ZETONNA) for allergic rhinitis [NEP]."],
  moa: "Prodrug converted in the lung to des-ciclesonide, a potent glucocorticoid [FDA].",
  pk: ["Very short half-life of parent and active metabolite; low systemic exposure [FDA]."],
  ind: { adult: ["Maintenance treatment of asthma, 12 years and over; not for acute bronchospasm [FDA]."], paed: ["Not for children under 12 years [FDA]."] },
  adult: [["Previously on bronchodilators alone", "80 micrograms twice daily; maximum 160 micrograms twice daily [FDA]."], ["Previously on inhaled corticosteroids", "80 micrograms twice daily; maximum 320 micrograms twice daily [FDA]."], ["Previously on oral corticosteroids", "320 micrograms twice daily; taper prednisone no faster than 2.5 mg/day each week, starting after at least 1 week [FDA]."]],
  paed: { tiers: ["12 years and over: as adults [FDA].", "Under 12 years: not indicated [FDA]."], transition: "Adult dose from 12 years [FDA].", calcNote: "Inhaler — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Low systemic exposure; no human data [FDA].", other: "Rinse mouth after use; prime before first use or after 10 days unused [FDA]. Ketoconazole raises active metabolite 3.6-fold [FDA]." },
  tox: { human: "Chronic overdose: hypercorticism [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce dose slowly [FDA]." },
  contra: ["Primary treatment of status asthmaticus or acute asthma [FDA].", "Hypersensitivity to ciclesonide or ingredients [FDA]."],
  ae: { common: ["Headache, nasopharyngitis, sinusitis, pharyngolaryngeal pain, upper respiratory infection [NEP]."], serious: ["Oropharyngeal candidiasis [FDA]", "Adrenal insufficiency on switching from oral steroids [FDA]", "Bone loss; growth slowing; glaucoma and cataract [FDA]", "Paradoxical bronchospasm [FDA]"] },
  monitor: ["Asthma control; mouth; growth in adolescents [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "ALVESCO (ciclesonide) inhalation aerosol — Covis Pharma, label effective 2025-02-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9f6112fb-78ef-43cf-8ae3-36370eb45468"]],
  dose: { tagline: "Inhaled corticosteroid prodrug for asthma maintenance from 12 years.",
    adult: [{ ind: "Asthma maintenance", text: "80 micrograms twice daily (up to 160–320 micrograms twice daily by previous therapy)." }],
    child: [{ ind: "12 years and over", text: "As adults; not for under 12." }] }
});

/* ---------- CICLOPIROX (FDA ciclopirox 8% nail lacquer, Encube, ANDA077687; original PENLAC) ---------- */
FDB_M("ciclopirox", {
  inn: "Ciclopirox", atc: "D01AE14", cls: "Hydroxypyridone topical antifungal",
  linked: [["Onychomycosis (mild–moderate, no lunula involvement)", "Nail lacquer [FDA]", ""], ["Tinea and cutaneous candidiasis; seborrhoeic dermatitis", "Cream, gel, shampoo [NEP]", ""]],
  forms: ["Topical solution 8% (nail lacquer) [FDA].", "Cream/suspension 0.77%; gel 0.77%; shampoo 1% [NEP]."],
  moa: "Chelates trivalent cations, inhibiting fungal enzymes [NEP].",
  pk: ["Minimal systemic absorption [NEP]."],
  ind: { adult: ["Mild to moderate onychomycosis of finger- and toenails without lunula involvement (T. rubrum), in immunocompetent patients, with professional nail care [FDA]."], paed: ["12 years and over for the lacquer [NEP]."] },
  adult: [["Onychomycosis (8% lacquer)", "Apply once daily to all affected nails and 5 mm of surrounding skin, preferably at bedtime; apply new coats over old; remove with alcohol every 7 days; up to 48 weeks with monthly professional removal of infected nail [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Not for eye, mouth or vaginal use [FDA]. Care in diabetes with nail procedures [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Periungual redness and irritation at the application site [FDA]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Nail response [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Ciclopirox topical solution 8% (nail lacquer) — Encube Ethicals (ANDA077687), label effective 2026-10-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=79084b47-7481-4926-9837-e08f633b1ddf"]],
  dose: { tagline: "Topical antifungal; 8% lacquer for mild nail fungus.",
    adult: [{ ind: "Onychomycosis", text: "8% lacquer once daily; remove weekly with alcohol; up to 48 weeks with nail debridement." }],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CICLOSPORIN (US: cyclosporine; FDA NEORAL, Novartis, NDA050715, eff. 2026-08-10; VERKAZIA eye emulsion) ---------- */
FDB_M("ciclosporin", {
  inn: "Ciclosporin", atc: "L04AD01", cls: "Calcineurin inhibitor immunosuppressant",
  linked: [["Prevention of kidney, liver and heart transplant rejection", "[FDA]", ""], ["Severe rheumatoid arthritis", "[FDA]", "ra-adult"], ["Severe plaque psoriasis", "[FDA]", ""], ["Vernal keratoconjunctivitis (0.1% eye emulsion)", "[FDA]", "redeye-child"]],
  forms: ["Neoral (modified) capsules 25 and 100 mg; oral solution 100 mg/mL [FDA].", "Bhutan: 25, 50, 100 mg capsules (including Neoral) — national referral hospital [BT-NEML].", "Eye emulsion 0.1% (VERKAZIA) [FDA]."],
  moa: "Inhibits calcineurin and T-cell activation [NEP].",
  pk: ["Neoral and Sandimmune are NOT bioequivalent — do not switch without supervision and levels [FDA].", "Many CYP3A4/P-gp interactions [NEP]."],
  ind: { adult: ["Transplant rejection prophylaxis (kidney, liver, heart) with other immunosuppressants; severe active RA; severe recalcitrant plaque psoriasis in non-immunocompromised adults [FDA].", "VKC (eye emulsion) [FDA]."], paed: ["Transplant (as adults, by weight); VKC eye drops in children [FDA]."] },
  adult: [["New transplant", "Initial 7–9 mg/kg/day in 2 divided doses (survey means: kidney 9, liver 8, heart 7 mg/kg/day); then adjust to target trough levels [FDA]."], ["Rheumatoid arthritis", "2.5 mg/kg/day in 2 doses; after 8 weeks may increase by 0.5–0.75 mg/kg/day, maximum 4 mg/kg/day; stop if no benefit by 16 weeks [FDA]."], ["Psoriasis", "2.5 mg/kg/day in 2 doses for at least 4 weeks; then increase by about 0.5 mg/kg/day every 2 weeks, maximum 4 mg/kg/day [FDA]."], ["Vernal keratoconjunctivitis", "1 drop of 0.1% four times daily in each affected eye [FDA]."]],
  paed: { tiers: ["Transplant: weight-based as adults [NEP].", "VKC: 1 drop four times daily [FDA]."], transition: "Same mg/kg [NEP].", calcNote: "mg/kg/day ÷ 2; adjust to blood levels." },
  adj: { renal: "RA/psoriasis: reduce 25–50% if creatinine rises ≥25–30% above baseline [FDA]. Nephrotoxic — monitor closely [FDA].", hepatic: "Monitor; may need lower dose [NEP].", preg: "Use only if benefit justifies risk [NEP].", other: "Monitor BP; hypertension and nephrotoxicity rise with dose and duration [FDA]. Avoid grapefruit [NEP]." },
  tox: { human: "Nephrotoxicity, hepatotoxicity, hypertension [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; not dialysable [NEP]." },
  contra: ["Hypersensitivity to ciclosporin or ingredients [FDA].", "RA and psoriasis: abnormal kidney function, uncontrolled hypertension, malignancy [FDA].", "Psoriasis: with PUVA, UVB, methotrexate, coal tar or radiation [FDA]."],
  ae: { common: ["Hypertension, raised creatinine, tremor, hirsutism, gum hyperplasia, headache, GI upset, hyperkalaemia, hypomagnesaemia [NEP]."], serious: ["Infection and malignancy (boxed) [FDA]", "Nephrotoxicity and hypertension (boxed) [FDA]", "Skin cancer in psoriasis patients after PUVA (boxed) [FDA]", "PRES; hepatotoxicity [NEP]"] },
  monitor: ["Trough levels (transplant, RA); creatinine every 2 weeks initially; BP; potassium, magnesium; lipids [FDA]."],
  local: { neml: "Ciclosporin 25, 50, 100 mg capsules, including Neoral (national referral hospital) [BT-NEML].", strengths: "25, 50, 100 mg capsules.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "ciclosporin", indication_id: "tx", label: "New transplant — 7–9 mg/kg/day in 2 doses (then by levels)", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 7, unit: "mg", per: "day", value_max: 9 }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "cap (Neoral)", strength: 25, unit: "mg/cap" }], rounding: "Nearest 25 mg capsule", renal: [], renal_note: "Adjust to trough levels and kidney function", flags: ["Kidney 9, liver 8, heart 7 mg/kg/day (survey means)"], sources: ["FDA"] },
    { drug: "ciclosporin", indication_id: "ra", label: "RA / psoriasis — start 2.5 mg/kg/day in 2 doses (max 4)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2.5, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "cap (Neoral)", strength: 25, unit: "mg/cap" }], rounding: "Nearest 25 mg capsule", renal: [], renal_note: "Reduce 25–50% if creatinine rises 25–30% above baseline", flags: ["Maximum 4 mg/kg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "NEORAL (cyclosporine, modified) capsules and oral solution — Novartis, label effective 2026-08-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=94461af3-11f1-4670-95d4-2965b9538ae3"], ["FDA", "VERKAZIA (cyclosporine ophthalmic emulsion) 0.1% — Santen, label effective 2026-11-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c795cd2f-89da-78e3-e053-2a95a90a9422"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Calcineurin-inhibitor immunosuppressant; dose by weight, then by blood level.",
    boxedTitle: "Immunosuppression, infection and neoplasia; Neoral and Sandimmune not interchangeable",
    boxed: "Only physicians experienced in management of systemic immunosuppressive therapy for the indicated disease should prescribe Neoral. … Neoral, a systemic immunosuppressant, may increase the susceptibility to infection and the development of neoplasia. … Neoral and Sandimmune are not bioequivalent and cannot be used interchangeably without physician supervision. … Cyclosporine blood concentrations should be monitored in transplant and rheumatoid arthritis patients taking Neoral to avoid toxicity due to high concentrations. … Psoriasis patients previously treated with PUVA and to a lesser extent, methotrexate or other immunosuppressive agents, UVB, coal tar, or radiation therapy, are at an increased risk of developing skin malignancies when taking Neoral. Cyclosporine, the active ingredient in Neoral, in recommended dosages, can cause systemic hypertension and nephrotoxicity. The risk increases with increasing dose and duration of cyclosporine therapy. Renal dysfunction, including structural kidney damage, is a potential consequence of cyclosporine, and therefore, renal function must be monitored during therapy.",
    adult: [
      { ind: "New transplant", text: "7–9 mg/kg/day in 2 doses, then adjust to trough levels.", calc: ["tx"] },
      { ind: "RA; psoriasis", text: "2.5 mg/kg/day in 2 doses; increase slowly to a maximum of 4 mg/kg/day.", calc: ["ra"] },
      { ind: "Vernal keratoconjunctivitis (0.1%)", text: "1 drop four times daily." }
    ],
    child: [
      { ind: "Transplant", text: "Weight-based as adults, adjusted to levels.", calc: ["tx"] },
      { ind: "Vernal keratoconjunctivitis", text: "1 drop of 0.1% four times daily." }
    ] }
});

/* ---------- CIDOFOVIR (FDA cidofovir injection, Avet, ANDA202501, eff. 2023-10-25; original VISTIDE) ---------- */
FDB_M("cidofovir", {
  inn: "Cidofovir", atc: "J05AB12", cls: "Nucleotide analogue antiviral (CMV)",
  linked: [["CMV retinitis in AIDS", "[FDA]", "hiv-adult"]],
  forms: ["Injection 75 mg/mL, 5 mL vial [NEP]."],
  moa: "Inhibits viral DNA polymerase [NEP].",
  pk: ["Must be given with probenecid and IV saline to protect the kidneys [FDA]."],
  ind: { adult: ["CMV retinitis in patients with AIDS only [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Induction", "5 mg/kg IV over 1 h once weekly for 2 weeks [FDA]."], ["Maintenance", "5 mg/kg IV over 1 h every 2 weeks [FDA]."], ["Probenecid", "2 g orally 3 h before, then 1 g at 2 h and 8 h after the infusion (4 g total) [FDA]."], ["Hydration", "At least 1 L 0.9% saline over 1–2 h just before; a second litre if tolerated [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "5 mg/kg per dose; only if creatinine ≤1.5 mg/dL, CrCl >55 and protein <2+." },
  adj: { renal: "Do not start if creatinine >1.5 mg/dL, CrCl ≤55 mL/min or urine protein ≥2+. On treatment: creatinine rise 0.3–0.4 mg/dL → 3 mg/kg; rise ≥0.5 mg/dL or ≥3+ protein → stop [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Carcinogenic and teratogenic in animals (boxed) [FDA].", other: "Stop other nephrotoxic drugs at least 7 days before [FDA]. Halve or pause zidovudine on probenecid days [FDA]. Never give by intraocular injection [FDA]." },
  tox: { human: "16–17 mg/kg single doses: no major kidney change with probenecid and hydration [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Probenecid 1 g three times daily and vigorous IV saline for 3–5 days [FDA]." },
  contra: ["Creatinine >1.5 mg/dL, CrCl ≤55 mL/min or urine protein ≥100 mg/dL (≥2+) at start [FDA].", "With other nephrotoxic agents [FDA].", "Hypersensitivity to cidofovir, or to probenecid or sulfa drugs [FDA].", "Intraocular injection [FDA]."],
  ae: { common: ["Proteinuria, neutropenia, fever, nausea and vomiting (probenecid), asthenia, ocular hypotony [NEP]."], serious: ["Nephrotoxicity, acute kidney failure (boxed) [FDA]", "Neutropenia (boxed) [FDA]", "Metabolic acidosis / Fanconi syndrome; uveitis [FDA]"] },
  monitor: ["Creatinine and urine protein within 48 h before every dose; neutrophils; eye pressure [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cidofovir", indication_id: "ind", label: "Induction — 5 mg/kg once weekly × 2", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 75, unit: "mg/mL" }], infusion: { duration_h: 1 }, rounding: "Nearest mg; dilute in 100 mL saline", renal: [{ crcl_min: 0, crcl_max: 55, action: "avoid", note: "contraindicated when CrCl is 55 mL/min or less" }], renal_note: "Also check creatinine (≤1.5 mg/dL) and urine protein (<2+) before every dose", flags: ["With probenecid and saline every time"], sources: ["FDA"] },
    { drug: "cidofovir", indication_id: "maint", label: "Maintenance — 5 mg/kg every 2 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 75, unit: "mg/mL" }], infusion: { duration_h: 1 }, rounding: "Nearest mg; dilute in 100 mL saline", renal: [{ crcl_min: 0, crcl_max: 55, action: "avoid", note: "contraindicated when CrCl is 55 mL/min or less" }], renal_note: "Creatinine rise 0.3–0.4 mg/dL: 3 mg/kg; rise ≥0.5 mg/dL or ≥3+ protein: stop", flags: ["With probenecid and saline every time"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cidofovir injection USP — Avet Pharmaceuticals (ANDA202501), label effective 2023-10-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=44966a7e-d777-40fb-956f-d0f31f737848"]],
  dose: { tagline: "IV antiviral for CMV retinitis in AIDS; always with probenecid and saline.",
    boxedTitle: "Renal impairment, neutropenia, carcinogenic and teratogenic",
    boxed: "Renal impairment is the major toxicity of cidofovir injection. Cases of acute renal failure resulting in dialysis and/or contributing to death have occurred with as few as one or two doses of cidofovir injection. To reduce possible nephrotoxicity, intravenous prehydration with normal saline and administration of probenecid must be used with each cidofovir infusion. Renal function (serum creatinine and urine protein) must be monitored within 48 hours prior to each dose of cidofovir injection and the dose of cidofovir injection modified for changes in renal function as appropriate. Cidofovir injection is contraindicated in patients who are receiving other nephrotoxic agents. Neutropenia has been observed in association with cidofovir injection treatment. Therefore, neutrophil counts should be monitored during cidofovir injection therapy. Cidofovir injection is indicated only for the treatment of CMV retinitis in patients with acquired immunodeficiency syndrome. In animal studies cidofovir was carcinogenic, teratogenic and caused hypospermia.",
    adult: [
      { ind: "Induction", text: "5 mg/kg IV over 1 h once weekly for 2 weeks.", calc: ["ind"] },
      { ind: "Maintenance", text: "5 mg/kg IV over 1 h every 2 weeks.", calc: ["maint"] },
      { ind: "With every dose", text: "Probenecid 2 g 3 h before, 1 g at 2 h and 8 h after; ≥1 L saline before." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CILOSTAZOL (FDA cilostazol tablets, Aurobindo, ANDA077019, eff. 2026-10-01; original PLETAL) ---------- */
FDB_M("cilostazol", {
  inn: "Cilostazol", atc: "B01AC23", cls: "Phosphodiesterase III inhibitor (antiplatelet, vasodilator)",
  linked: [["Intermittent claudication (peripheral artery disease)", "[FDA]", "pad-adult"]],
  forms: ["Tablets 50 mg and 100 mg [FDA]."],
  moa: "Inhibits PDE III, raising cAMP in platelets and vessels — antiplatelet and vasodilator [FDA].",
  pk: ["Take 30 min before or 2 h after breakfast and dinner [FDA].", "Highly protein bound — not dialysable [FDA]."],
  ind: { adult: ["Reduction of intermittent claudication symptoms (increased walking distance) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Claudication", "100 mg twice daily; benefit may take up to 12 weeks; stop if no improvement after 3 months [FDA]."], ["With CYP3A4 or CYP2C19 inhibitors", "50 mg twice daily (e.g. ketoconazole, erythromycin, diltiazem, omeprazole, fluconazole) [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Teratogenic in rats [FDA].", other: "Avoid in bleeding disorders or active bleeding [FDA]. Heart rate rises 5–7 bpm; angina may worsen [FDA]." },
  tox: { human: "Severe headache, diarrhoea, hypotension, tachycardia, arrhythmia [FDA].", animal: "Oral LD50 over 5 g/kg in mice and rats [FDA].", manage: "Supportive; not removed by dialysis [FDA]." },
  contra: ["Heart failure of any severity (boxed) [FDA].", "Hypersensitivity to cilostazol [FDA]."],
  ae: { common: ["Headache, diarrhoea, abnormal stools, palpitations, dizziness, peripheral oedema [NEP]."], serious: ["Tachyarrhythmia; angina worsening [FDA]", "Thrombocytopenia, leukopenia, agranulocytosis [FDA]", "Bleeding [FDA]"] },
  monitor: ["Blood counts; heart rhythm in heart disease [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cilostazol", indication_id: "std", label: "100 mg twice daily (50 mg with CYP3A4/2C19 inhibitors)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 100, max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Cilostazol tablets USP — Aurobindo (ANDA077019), label effective 2026-10-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7c841eed-a98f-43c3-baaf-bf5502207a69"]],
  dose: { tagline: "PDE III inhibitor for claudication; never in heart failure.",
    boxedTitle: "Contraindicated in heart failure patients",
    boxed: "Cilostazol tablets are contraindicated in patients with heart failure of any severity. Cilostazol and several of its metabolites are inhibitors of phosphodiesterase III. Several drugs with this pharmacologic effect have caused decreased survival compared to placebo in patients with class III-IV heart failure.",
    adult: [{ ind: "Intermittent claudication", text: "100 mg twice daily before breakfast and dinner (50 mg twice daily with CYP3A4/2C19 inhibitors).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CILTACABTAGENE AUTOLEUCEL (FDA CARVYKTI, Janssen, BLA125746, eff. 2025-10-16) ---------- */
FDB_M("ciltacabtagene-autoleucel", {
  inn: "Ciltacabtagene autoleucel", atc: "L01XL05", cls: "BCMA-directed autologous CAR-T cell therapy",
  linked: [["Relapsed/refractory multiple myeloma (lenalidomide-refractory, ≥1 prior line)", "[FDA]", ""]],
  forms: ["Single-dose cell suspension in one infusion bag [FDA]."],
  moa: "Patient's own T cells engineered to recognise and kill BCMA-expressing myeloma cells [FDA].",
  pk: ["Expands and persists in blood after infusion [NEP]."],
  ind: { adult: ["Relapsed or refractory multiple myeloma after at least 1 prior line including a proteasome inhibitor and an IMiD, and refractory to lenalidomide [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Dose", "0.5–1.0 × 10⁶ CAR-positive viable T cells per kg, maximum 1 × 10⁸ per infusion; single IV infusion [FDA]."], ["Before infusion", "Cyclophosphamide/fludarabine lymphodepletion; premedicate with paracetamol and an H1 antihistamine; avoid prophylactic steroids; tocilizumab must be available; no leukodepleting filter [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Cell dose from the manufacturer — no calculator." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not recommended in pregnancy [FDA].", other: "Certified treatment centre only (REMS) [NEP]. Commercial HIV NAT tests may be falsely positive [FDA]. No driving for 8 weeks [NEP]." },
  tox: { human: "Not applicable. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Fever, CRS, hypogammaglobulinaemia, hypotension, musculoskeletal pain, fatigue, infections, cough, chills, diarrhoea, nausea, encephalopathy [FDA]."], serious: ["Cytokine release syndrome (boxed) [FDA]", "ICANS, parkinsonism, Guillain-Barré (boxed) [FDA]", "HLH/MAS (boxed) [FDA]", "Prolonged/recurrent cytopenias (boxed) [FDA]", "Secondary haematological and T-cell malignancies (boxed) [FDA]", "Immune effector cell enterocolitis (boxed) [FDA]"] },
  monitor: ["Daily for CRS/neurotoxicity in the first weeks; blood counts; immunoglobulins; lifelong for secondary cancers [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CARVYKTI (ciltacabtagene autoleucel) suspension — Janssen Biotech, label effective 2025-10-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7d040b91-3fb8-41db-ba7f-60a36f06e2c2"]],
  dose: { tagline: "One-time BCMA CAR-T infusion for relapsed myeloma at a certified centre.",
    boxedTitle: "Cytokine release syndrome, neurologic toxicities, HLH/MAS, prolonged and recurrent cytopenia, and secondary hematological malignancies",
    boxed: "Cytokine Release Syndrome (CRS), including fatal or life-threatening reactions, occurred in patients following treatment with CARVYKTI. Do not administer CARVYKTI to patients with active infection or inflammatory disorders. Treat severe or life-threatening CRS with tocilizumab or tocilizumab and corticosteroids. Immune Effector Cell-Associated Neurotoxicity Syndrome (ICANS), which may be fatal or life-threatening, occurred following treatment with CARVYKTI, including before CRS onset, concurrently with CRS, after CRS resolution, or in the absence of CRS. Monitor for neurologic events after treatment with CARVYKTI. Provide supportive care and/or corticosteroids as needed. Parkinsonism and Guillain-Barré syndrome (GBS) and their associated complications resulting in fatal or life-threatening reactions have occurred following treatment with CARVYKTI. Hemophagocytic Lymphohistiocytosis/Macrophage Activation Syndrome (HLH/MAS), including fatal and life-threatening reactions, occurred in patients following treatment with CARVYKTI. HLH/MAS can occur with CRS or neurologic toxicities. Prolonged and/or recurrent cytopenias with bleeding and infection and requirement for stem cell transplantation for hematopoietic recovery occurred following treatment with CARVYKTI. Immune Effector Cell-associated Enterocolitis (IEC-EC), including fatal or life-threatening reactions, occurred following treatment with CARVYKTI. Secondary hematological malignancies, including myelodysplastic syndrome and acute myeloid leukemia, have occurred in patients following treatment with CARVYKTI. T-cell malignancies have occurred following treatment of hematologic malignancies with BCMA- and CD19-directed genetically modified autologous T-cell immunotherapies, including CARVYKTI.",
    adult: [{ ind: "Relapsed/refractory myeloma", text: "Single infusion of 0.5–1.0 × 10⁶ CAR-T cells/kg (max 1 × 10⁸) after lymphodepletion." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CIMETIDINE (FDA cimetidine tablets Rx, Chartwell, ANDA074329; OTC TAGAMET HB NDA020238) ---------- */
FDB_M("cimetidine", {
  inn: "Cimetidine", atc: "A02BA01", cls: "H2 receptor antagonist",
  linked: [["Duodenal and benign gastric ulcer", "[FDA]", ""], ["Erosive GERD", "[FDA]", "gerd-adult"], ["Zollinger-Ellison and hypersecretory states", "[FDA]", ""], ["Heartburn (OTC)", "[FDA]", ""]],
  forms: ["Tablets 200 (OTC), 300, 400, 800 mg [FDA]."],
  moa: "Blocks histamine H2 receptors on parietal cells [NEP].",
  pk: ["Antacids reduce absorption — do not take together [FDA].", "Inhibits CYP1A2, 2C9, 2D6, 3A4 — many interactions (warfarin, phenytoin, theophylline) [NEP]."],
  ind: { adult: ["Active duodenal ulcer and maintenance; active benign gastric ulcer; erosive GERD; pathological hypersecretory states; heartburn (OTC) [FDA]."], paed: ["Under 12 years: ask a doctor (OTC); Rx not established under 16 [NEP]."] },
  adult: [["Active duodenal ulcer", "800 mg at bedtime (1,600 mg in large ulcers in heavy smokers); or 300 mg four times daily, or 400 mg twice daily; 4–8 weeks [FDA]."], ["Duodenal ulcer maintenance", "400 mg at bedtime [FDA]."], ["Benign gastric ulcer", "800 mg at bedtime or 300 mg four times daily, up to 6 weeks [FDA]."], ["Erosive GERD", "1,600 mg a day (800 mg twice daily or 400 mg four times daily) for 12 weeks [FDA]."], ["Hypersecretory states", "300 mg four times daily; usually not above 2,400 mg/day [FDA]."], ["OTC heartburn (12 years and over)", "200 mg as needed, up to 2 tablets in 24 h [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adult dose from 12 years (OTC) [FDA].", calcNote: "Fixed adult doses." },
  adj: { renal: "Severe kidney impairment: 300 mg every 12 h (may go to every 8 h with caution); in dialysis give after the session [FDA].", hepatic: "Caution; confusion more likely [NEP].", preg: "Not established in primary source. [NEP]", other: "Confusion in elderly and severely ill [NEP]. Gynaecomastia with long use [NEP]." },
  tox: { human: "Generally mild; respiratory failure and tachycardia rarely at very high doses [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to cimetidine or other H2 antagonists [FDA]."],
  ae: { common: ["Headache, dizziness, diarrhoea; confusion in the elderly [NEP]."], serious: ["Blood dyscrasias (rare) [NEP]", "Interstitial nephritis, hepatitis (rare) [NEP]"] },
  monitor: ["Interacting drug levels (warfarin INR, phenytoin, theophylline) [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cimetidine", indication_id: "du", label: "Duodenal / gastric ulcer — 800 mg at bedtime", route: "PO", population: { min_age_months: 192, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 800, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 2400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "lower_of", abs_dose: 300, interval_h: 12 }], renal_note: "Severe kidney impairment (taken as CrCl under 30): 300 mg every 12 h", flags: [], sources: ["FDA"] },
    { drug: "cimetidine", indication_id: "gerd", label: "Erosive GERD — 800 mg twice daily (12 weeks)", route: "PO", population: { min_age_months: 192, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 800, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 2400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 400, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "lower_of", abs_dose: 300, interval_h: 12 }], renal_note: "Severe kidney impairment (taken as CrCl under 30): 300 mg every 12 h", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cimetidine tablets USP — Chartwell RX (ANDA074329), label effective 2023-08-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=01997826-7ca1-473e-bfc9-075b14b58a35"], ["FDA", "TAGAMET HB (cimetidine) 200 mg — OTC Drug Facts (NDA020238), effective 2024-06-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e6401e0a-8612-42e8-bf89-2d67243f28dc"]],
  dose: { tagline: "Older H2 blocker with many drug interactions.",
    adult: [
      { ind: "Duodenal or gastric ulcer", text: "800 mg at bedtime for 4–8 weeks; maintenance 400 mg at bedtime.", calc: ["du"] },
      { ind: "Erosive GERD", text: "800 mg twice daily (or 400 mg four times daily) for 12 weeks.", calc: ["gerd"] },
      { ind: "Heartburn (OTC)", text: "200 mg as needed, max 400 mg a day." }
    ],
    child: [{ ind: "Children", text: "Not established; OTC from 12 years." }] }
});

/* ---------- CINACALCET (FDA SENSIPAR, Amgen, NDA021688, eff. 2025-12-07) ---------- */
FDB_M("cinacalcet", {
  inn: "Cinacalcet", atc: "H05BX01", cls: "Calcimimetic (calcium-sensing receptor modulator)",
  linked: [["Secondary hyperparathyroidism in CKD on dialysis", "[FDA]", ""], ["Hypercalcaemia: parathyroid carcinoma; primary HPT unable to have surgery", "[FDA]", "calcium-adult"]],
  forms: ["Tablets 30, 60, 90 mg [FDA]."],
  moa: "Increases the calcium-sensing receptor's sensitivity, lowering PTH [FDA].",
  pk: ["Terminal half-life 30–40 h; longer in liver impairment [FDA].", "Take with food; swallow whole [FDA]."],
  ind: { adult: ["Secondary HPT in adults with CKD on dialysis (not if not on dialysis); hypercalcaemia in parathyroid carcinoma; hypercalcaemia in primary HPT when parathyroidectomy is indicated but not possible [FDA]."], paed: ["Not indicated — fatal hypocalcaemia in a paediatric trial [FDA]."] },
  adult: [["Secondary HPT (dialysis)", "30 mg once daily; titrate every 2–4 weeks through 60, 90, 120 and 180 mg once daily to target iPTH [FDA]."], ["Parathyroid carcinoma / primary HPT", "30 mg twice daily; titrate every 2–4 weeks to 60 mg and 90 mg twice daily, then 90 mg three or four times daily [FDA]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Adults [FDA].", calcNote: "Starting doses." },
  adj: { renal: "Secondary HPT indication is for dialysis patients only [FDA].", hepatic: "Moderate–severe impairment: monitor PTH and calcium closely [NEP].", preg: "Insufficient data [FDA].", other: "Strong CYP2D6 inhibitor; strong CYP3A4 inhibitors raise levels [FDA]." },
  tox: { human: "Hypocalcaemia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Correct calcium; dialysis not effective [FDA]." },
  contra: ["Starting treatment when serum calcium is below the normal range [FDA]."],
  ae: { common: ["Nausea and vomiting (≥25%), diarrhoea, myalgia, dizziness [FDA]."], serious: ["Hypocalcaemia — QT prolongation, seizures [FDA]", "Upper GI bleeding [FDA]", "Hypotension, worsening heart failure, arrhythmia [FDA]", "Adynamic bone disease if iPTH <100 pg/mL [FDA]"] },
  monitor: ["Calcium within 1 week of start or dose change, then monthly (SHPT) or every 2 months (PC/PHPT); iPTH 1–4 weeks after change, ≥12 h after dose [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cinacalcet", indication_id: "shpt", label: "Secondary HPT on dialysis — start 30 mg once daily (max 180 mg)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 180, max_daily: 180, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 30, unit: "mg/tab", whole: true }], rounding: "Whole tablets (do not split)", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cinacalcet", indication_id: "pc", label: "Parathyroid carcinoma / primary HPT — start 30 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 90, max_daily: 360, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 30, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "SENSIPAR (cinacalcet) tablets — Amgen, label effective 2025-12-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=45028573-13c4-4c8b-ae62-6c75bba97c81"]],
  dose: { tagline: "Calcimimetic for dialysis hyperparathyroidism and parathyroid hypercalcaemia.",
    adult: [
      { ind: "Secondary HPT on dialysis", text: "30 mg once daily with food; titrate every 2–4 weeks up to 180 mg.", calc: ["shpt"] },
      { ind: "Parathyroid carcinoma; primary HPT", text: "30 mg twice daily, titrating to 90 mg three or four times daily.", calc: ["pc"] }
    ],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- CIPAGLUCOSIDASE ALFA (FDA POMBILITI, Amicus, BLA761204, eff. 2026-08-12) ---------- */
FDB_M("cipaglucosidase-alfa", {
  inn: "Cipaglucosidase alfa", atc: "A16AB23", cls: "Recombinant acid alpha-glucosidase (enzyme replacement), with miglustat (Opfolda)",
  linked: [["Late-onset Pompe disease (not improving on current ERT), ≥40 kg", "[FDA]", ""]],
  forms: ["Powder for injection 105 mg vial [FDA]."],
  moa: "Replaces lysosomal acid alpha-glucosidase; miglustat stabilises the enzyme in blood [FDA].",
  pk: ["Half-life about 2.5 h [FDA]."],
  ind: { adult: ["Adults with late-onset Pompe disease weighing ≥40 kg not improving on current ERT, with Opfolda [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Late-onset Pompe", "20 mg/kg (actual weight) IV over about 4 h every other week, starting about 1 h after oral Opfolda; begin 2 weeks after the last ERT dose [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "20 mg/kg every 2 weeks; 105 mg vials." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Contraindicated with Opfolda; contraception during and 60 days after [FDA].", other: "Consider antihistamine, antipyretic and/or steroid premedication [FDA]. If infusion cannot start within 3 h of Opfolda, reschedule at least 24 h later [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Pregnancy (with Opfolda) [FDA]."],
  ae: { common: ["Headache, diarrhoea, fatigue, nausea, abdominal pain, fever [FDA]."], serious: ["Anaphylaxis (boxed) [FDA]", "Severe infusion reactions (boxed) [FDA]", "Acute cardiorespiratory failure in susceptible patients (boxed) [FDA]"] },
  monitor: ["Vital signs during infusion, more often if cardiac/respiratory compromise [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cipaglucosidase-alfa", indication_id: "std", label: "20 mg/kg IV every other week (≥40 kg)", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: 40, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 105, unit: "mg/vial" }], infusion: { duration_h: 4 }, rounding: "Whole vials as prepared", renal: [], flags: ["With Opfolda about 1 h before"], sources: ["FDA"] }],
  sources: [["FDA", "POMBILITI (cipaglucosidase alfa-atga) for injection — Amicus Therapeutics, label effective 2026-08-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d77aa596-910d-516b-e053-2995a90a0839"]],
  dose: { tagline: "Enzyme replacement for late-onset Pompe disease, given with oral miglustat.",
    boxedTitle: "Severe hypersensitivity reactions, infusion-associated reactions, and risk of acute cardiorespiratory failure in susceptible patients",
    boxed: "Patients treated with POMBILITI have experienced life-threatening hypersensitivity reactions, including anaphylaxis. Appropriate medical support measures, including cardiopulmonary resuscitation equipment, should be readily available during POMBILITI administration. If a severe hypersensitivity reaction (e.g., anaphylaxis) occurs, POMBILITI should be discontinued immediately, and appropriate medical treatment should be initiated. In patients with severe hypersensitivity reaction, desensitization measures to POMBILITI may be considered. Patients treated with POMBILITI have experienced severe IARs. If severe IARs occur, immediately discontinue the POMBILITI infusion, initiate appropriate medical treatment, and assess the benefits and risks of readministering POMBILITI following severe IARs. Patients with an acute underlying illness at the time of POMBILITI infusion may be at greater risk for IARs. Patients with advanced Pompe disease may have compromised cardiac and respiratory function, which may predispose them to a higher risk of severe complications from IARs. Patients susceptible to fluid volume overload, or those with acute underlying respiratory illness or compromised cardiac or respiratory function for whom fluid restriction is indicated may be at risk of serious exacerbation of their cardiac or respiratory status during POMBILITI infusion. More frequent monitoring of vitals should be performed during POMBILITI infusion in such patients.",
    adult: [{ ind: "Late-onset Pompe disease (≥40 kg)", text: "20 mg/kg IV over 4 h every other week, 1 h after oral Opfolda.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CIPROFLOXACIN (FDA CIPRO tablets, Bayer, NDA019537, eff. 2026-03-02; ophthalmic solution NDA019992) ---------- */
FDB_M("ciprofloxacin", {
  inn: "Ciprofloxacin", atc: "J01MA02", cls: "Fluoroquinolone antibacterial",
  linked: [["Typhoid (enteric fever)", "[FDA]", "enteric-adult"], ["Infectious diarrhoea", "[FDA]", "ge-adult"], ["Complicated UTI and pyelonephritis", "[FDA]", "uti-adult"], ["Bone and joint, skin, intra-abdominal (with metronidazole), prostatitis", "[FDA]", ""], ["Bacterial conjunctivitis and corneal ulcer (eye drops)", "[FDA]", "redeye-adult"]],
  forms: ["Tablets 250, 500, 750 mg; oral suspension; IV 2 mg/mL [FDA].", "Eye drops 0.3% [FDA].", "Bhutan: 500 mg tablet; 2 mg/mL infusion [BT-NEML]."],
  moa: "Inhibits bacterial DNA gyrase and topoisomerase IV [NEP].",
  pk: ["Take 2 h before or 6 h after antacids, iron, zinc, calcium, dairy alone [FDA].", "Oral 500 mg every 12 h ≈ IV 400 mg every 12 h; oral 750 mg every 12 h ≈ IV 400 mg every 8 h [FDA]."],
  ind: { adult: ["Skin, bone and joint, complicated intra-abdominal, infectious diarrhoea, typhoid, gonorrhoea, anthrax, plague, prostatitis, lower respiratory, UTI; reserve for bronchitis, uncomplicated cystitis, sinusitis only when no alternative [FDA]."], paed: ["1–17 years: complicated UTI/pyelonephritis (not first choice), inhalational anthrax, plague [FDA]."] },
  adult: [["UTI", "250–500 mg every 12 h, 7–14 days; uncomplicated cystitis 250 mg every 12 h for 3 days [FDA]."], ["Skin, bone/joint, lower respiratory", "500–750 mg every 12 h [FDA]."], ["Infectious diarrhoea; typhoid", "500 mg every 12 h (5–7 days; typhoid 10 days) [FDA]."], ["Intra-abdominal (with metronidazole)", "500 mg every 12 h [FDA]."], ["IV", "400 mg every 12 h (or every 8 h for severe infection) [FDA]."]],
  paed: { tiers: ["cUTI/pyelonephritis (1–17 years): 10–20 mg/kg every 12 h, max 750 mg per dose, 10–21 days [FDA].", "Inhalational anthrax: 15 mg/kg (max 500 mg) every 12 h for 60 days [FDA].", "Plague: 15 mg/kg (max 500 mg) every 8–12 h for 14 days [FDA]."], transition: "Adult dose from 18 years [FDA].", calcNote: "mg/kg every 12 h with per-dose maximum." },
  adj: { renal: "Oral: CrCl 30–50: 250–500 mg every 12 h; 5–29: 250–500 mg every 18 h; dialysis: 250–500 mg every 24 h after dialysis [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Avoid unless no alternative [NEP].", other: "Strong CYP1A2 inhibitor — raises theophylline and tizanidine (contraindicated) [FDA]. QT prolongation; hypoglycaemia; aortic aneurysm risk [FDA]." },
  tox: { human: "Kidney injury, seizures [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; hydrate; only small amounts removed by dialysis [NEP]." },
  contra: ["Hypersensitivity to ciprofloxacin or other quinolones [FDA].", "With tizanidine [FDA]."],
  ae: { common: ["Nausea, diarrhoea, raised liver tests, vomiting, rash [NEP]."], serious: ["Tendinitis and tendon rupture (boxed) [FDA]", "Peripheral neuropathy; CNS effects (boxed) [FDA]", "Myasthenia gravis worsening (boxed) [FDA]", "QT prolongation; dysglycaemia; C. difficile; aortic aneurysm [FDA]"] },
  monitor: ["Glucose in diabetes; tendon pain; INR with warfarin [NEP]."],
  local: { neml: "Ciprofloxacin 500 mg tablet; 2 mg/mL infusion [BT-NEML].", strengths: "500 mg tablet; 200 mg/100 mL infusion.", stg: "Not found in Bhutan STG 2024 text search [BT-STG]." },
  calc: [
    { drug: "ciprofloxacin", indication_id: "po", label: "Adult oral — 500–750 mg every 12 h", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose", value_max: 750 }, interval_h: 12, divided_doses: 2, caps: { max_single: 750, max_daily: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }], rounding: "Half tablets", renal: [{ crcl_min: 30, crcl_max: 50, action: "lower_of", abs_dose: 500, interval_h: 12 }, { crcl_min: 5, crcl_max: 29.999, action: "lower_of", abs_dose: 500, interval_h: 18 }, { crcl_min: 0, crcl_max: 4.999, action: "lower_of", abs_dose: 500, interval_h: 24 }], renal_note: "Kidney label range is 250–500 mg; on dialysis give after the session", flags: ["UTI 250–500 mg; cystitis 250 mg × 3 days"], sources: ["FDA"] },
    { drug: "ciprofloxacin", indication_id: "iv", label: "Adult IV — 400 mg every 12 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 400, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 400, max_daily: 1200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "infusion", strength: 2, unit: "mg/mL" }], infusion: { duration_h: 1 }, rounding: "Whole bags", renal: [{ crcl_min: 5, crcl_max: 29.999, action: "extend_interval", factor: 24 }], renal_note: "IV CrCl 30–50: 200–400 mg every 12 h; 5–29: 200–400 mg every 18–24 h (calculator shows 24 h)", flags: ["Severe infection: every 8 h"], sources: ["FDA"] },
    { drug: "ciprofloxacin", indication_id: "child", label: "Child cUTI (1–17 years) — 10–20 mg/kg every 12 h (max 750 mg)", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose", value_max: 20 }, interval_h: 12, divided_doses: 2, caps: { max_single: 750, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Quarter tablets or suspension", renal: [], renal_note: "Children: no kidney dose table in the label", flags: ["Not first choice in children (joint effects)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "CIPRO (ciprofloxacin) tablets and oral suspension — Bayer, label effective 2026-03-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=888dc7f9-ad9c-4c00-8d50-8ddfd9bd27c0"], ["FDA", "Ciprofloxacin ophthalmic solution 0.3% (NDA019992), label effective 2026-05-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1ac4540c-d0f7-70bc-e063-6394a90a0f7a"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Fluoroquinolone for Gram-negative and typhoid infections; serious tendon and nerve risks.",
    boxedTitle: "Serious adverse reactions including tendinitis, tendon rupture, peripheral neuropathy, central nervous system effects and exacerbation of myasthenia gravis",
    boxed: "Fluoroquinolones, including CIPRO, have been associated with disabling and potentially irreversible serious adverse reactions that have occurred together, including: tendinitis and tendon rupture; peripheral neuropathy; central nervous system effects. Discontinue CIPRO immediately and avoid the use of fluoroquinolones, including CIPRO, in patients who experience any of these serious adverse reactions. Fluoroquinolones, including CIPRO, may exacerbate muscle weakness in patients with myasthenia gravis. Avoid CIPRO in patients with known history of myasthenia gravis. Because fluoroquinolones, including CIPRO, have been associated with serious adverse reactions, reserve CIPRO for use in patients who have no alternative treatment options for the following indications: acute exacerbation of chronic bronchitis; acute uncomplicated cystitis; acute sinusitis.",
    adult: [
      { ind: "Typhoid; infectious diarrhoea", text: "500 mg every 12 hours (typhoid 10 days).", calc: ["po"] },
      { ind: "UTI", text: "250–500 mg every 12 h for 7–14 days (cystitis 250 mg × 3 days, only if no alternative).", calc: ["po"] },
      { ind: "Bone, skin, lower respiratory", text: "500–750 mg every 12 hours.", calc: ["po"] },
      { ind: "IV", text: "400 mg every 12 h (every 8 h if severe).", calc: ["iv"] },
      { ind: "Eye (0.3%)", text: "Conjunctivitis: 1–2 drops every 2 h while awake for 2 days, then every 4 h for 5 days." }
    ],
    child: [{ ind: "cUTI/pyelonephritis (1–17 years)", text: "10–20 mg/kg every 12 h (max 750 mg per dose).", calc: ["child"] }] }
});

/* ---------- CISATRACURIUM (FDA cisatracurium injection, Hospira, ANDA203236; original NIMBEX) ---------- */
FDB_M("cisatracurium", {
  inn: "Cisatracurium", atc: "M03AC11", cls: "Non-depolarising neuromuscular blocker (benzylisoquinolinium)", risk: "High-alert — neuromuscular blocking agents are on the ISMP high-alert list; Sedation-ICU",
  linked: [["Anaesthesia — tracheal intubation and surgical muscle relaxation", "[FDA]", ""], ["Mechanical ventilation in ICU", "Infusion [FDA]", "ards-adult"]],
  forms: ["Injection 2 mg/mL: 5 mL single-dose (no preservative), 10 mL multi-dose (benzyl alcohol), 20 mL single-dose [FDA]."],
  moa: "Competitive blockade of acetylcholine at the motor end-plate [FDA].",
  pk: ["Hofmann elimination — independent of kidney and liver; half-life 22–29 min [FDA]."],
  ind: { adult: ["Adjunct to general anaesthesia for intubation; muscle relaxation in surgery or ICU ventilation [FDA]."], paed: ["Intubation 1 month–12 years; surgical infusion from 2 years [FDA]."] },
  adult: [["Intubation", "0.15–0.2 mg/kg IV bolus [FDA]."], ["Maintenance bolus", "0.03 mg/kg, first at 40–50 min (after 0.15) or 50–60 min (after 0.2) [FDA]."], ["Surgical infusion", "3 micrograms/kg/min initially, then 1–2 micrograms/kg/min [FDA]."], ["ICU infusion", "3 micrograms/kg/min (range 0.5–10.2) [FDA]."], ["Neuromuscular disease", "Initial bolus not more than 0.02 mg/kg [FDA]."]],
  paed: { tiers: ["1–23 months: 0.15 mg/kg over 5–10 s [FDA].", "2–12 years: 0.1–0.15 mg/kg over 5–10 s [FDA].", "10 mL multi-dose vial (benzyl alcohol) contraindicated under 1 month and in low birth weight infants [FDA]."], transition: "Adult doses [NEP].", calcNote: "mg/kg bolus; use a nerve stimulator." },
  adj: { renal: "No dose change; onset about 1 min slower in ESRD [FDA].", hepatic: "No change (Hofmann elimination) [NEP].", preg: "Use benzyl-alcohol-free vials [FDA].", other: "Only with adequate sedation or anaesthesia; antagonist and ventilation must be ready [FDA]. Laudanosine accumulation with long infusions — seizure risk [FDA]." },
  tox: { human: "Prolonged paralysis [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Ventilate until recovery; then neostigmine with an anticholinergic once recovery has begun [FDA]." },
  contra: ["Hypersensitivity to cisatracurium [FDA].", "10 mL multi-dose vials in infants under 1 month and low birth weight infants (benzyl alcohol) [FDA]."],
  ae: { common: ["Bradycardia, hypotension, flushing, bronchospasm, rash (0.1–0.4%) [FDA]."], serious: ["Residual paralysis [FDA]", "Anaphylaxis [FDA]", "Death from medication errors [FDA]"] },
  monitor: ["Peripheral nerve stimulator (train-of-four); ventilation; sedation depth [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cisatracurium", indication_id: "adult", label: "Adult intubation — 0.15–0.2 mg/kg IV", route: "IV", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.15, unit: "mg", per: "dose", value_max: 0.2 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: ["HIGH_ALERT"], sources: ["FDA"] },
    { drug: "cisatracurium", indication_id: "inf", label: "Infant 1–23 months — 0.15 mg/kg IV", route: "IV", population: { min_age_months: 1, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.15, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "Nearest 0.05 mL", renal: [], flags: ["HIGH_ALERT", "Use a benzyl-alcohol-free vial"], sources: ["FDA"] },
    { drug: "cisatracurium", indication_id: "child", label: "Child 2–12 years — 0.1–0.15 mg/kg IV", route: "IV", population: { min_age_months: 24, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.1, unit: "mg", per: "dose", value_max: 0.15 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: ["HIGH_ALERT"], sources: ["FDA"] },
    { drug: "cisatracurium", indication_id: "maint", label: "Adult maintenance bolus — 0.03 mg/kg", route: "IV", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.03, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 2, unit: "mg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: ["HIGH_ALERT", "Guided by nerve stimulator"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cisatracurium besylate injection — Hospira (ANDA203236/203238), label effective 2026-10-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=67908e20-044d-454d-9c51-bf106e817bd0"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Organ-independent neuromuscular blocker for intubation, surgery and ICU ventilation.",
    adult: [
      { ind: "Intubation", text: "0.15–0.2 mg/kg IV bolus.", calc: ["adult"] },
      { ind: "Maintenance", text: "0.03 mg/kg boluses, or infusion 3 then 1–2 micrograms/kg/min.", calc: ["maint"] },
      { ind: "ICU", text: "Infusion 3 micrograms/kg/min (0.5–10.2), titrated by nerve stimulator." }
    ],
    child: [
      { ind: "1–23 months", text: "0.15 mg/kg IV.", calc: ["inf"] },
      { ind: "2–12 years", text: "0.1–0.15 mg/kg IV.", calc: ["child"] }
    ] }
});

/* ---------- CISPLATIN (FDA cisplatin for injection, WG Critical Care NDA018057 + AXYCIS NDA220748) ---------- */
FDB_M("cisplatin", {
  inn: "Cisplatin", atc: "L01XA01", cls: "Platinum alkylating-like antineoplastic",
  linked: [["Advanced testicular cancer", "[FDA]", ""], ["Advanced ovarian cancer", "[FDA]", "ovarian-adult"], ["Advanced bladder cancer", "[FDA]", ""]],
  forms: ["Injection 1 mg/mL (50 mg/50 mL, 100 mg/100 mL); powder 50 mg [FDA]."],
  moa: "Forms DNA cross-links that block replication and transcription [FDA].",
  pk: ["Half-life 20–30 min; platinum in red cells 36–47 days [FDA].", "Not removed by haemodialysis (protein bound) [FDA]."],
  ind: { adult: ["Advanced testicular, ovarian and bladder cancer [FDA]."], paed: ["Not established in primary source; ototoxicity severe in children [FDA]."] },
  adult: [["Testicular cancer", "20 mg/m² IV daily for 5 days per cycle [FDA]."], ["Ovarian cancer", "75–100 mg/m² IV once every 3–4 weeks [FDA]."], ["Bladder cancer", "50–70 mg/m² IV once every 3–4 weeks [FDA]."], ["Safety check", "Contact the prescriber if an order is above 100 mg/m² per cycle [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "BSA dosing; needs height." },
  adj: { renal: "Consider dose reduction or an alternative in kidney impairment [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [FDA].", other: "Pre-hydrate and keep urine flowing for 24 h; antiemetics before and after [FDA]. Avoid aluminium needles [FDA]. Avoid other nephrotoxic drugs [FDA]." },
  tox: { human: "Kidney and liver failure, deafness, eye toxicity, marrow suppression, death [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "IV hydration ± osmotic diuretic; haemodialysis not effective; plasmapheresis has been used [FDA]." },
  contra: ["Severe hypersensitivity to cisplatin [FDA]."],
  ae: { common: ["Severe nausea and vomiting, kidney toxicity, hypomagnesaemia, myelosuppression, ototoxicity, neuropathy [FDA]."], serious: ["Nephrotoxicity (boxed) [FDA]", "Peripheral neuropathy (boxed) [FDA]", "Severe nausea and vomiting (boxed) [FDA]", "Myelosuppression (boxed) [FDA]", "Anaphylaxis; ototoxicity; optic neuritis; secondary leukaemia [FDA]"] },
  monitor: ["Creatinine, electrolytes (Mg, K, Ca) before each cycle; blood counts; audiometry [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cisplatin", indication_id: "ov", label: "Ovarian — 75–100 mg/m² every 3–4 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 75, unit: "mg", per: "dose", value_max: 100 }, interval_h: 504, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], renal_note: "Kidney impairment: consider a lower dose or an alternative", flags: ["Query any order above 100 mg/m² per cycle"], sources: ["FDA"] },
    { drug: "cisplatin", indication_id: "bl", label: "Bladder — 50–70 mg/m² every 3–4 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 50, unit: "mg", per: "dose", value_max: 70 }, interval_h: 504, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], renal_note: "Kidney impairment: consider a lower dose or an alternative", flags: [], sources: ["FDA"] },
    { drug: "cisplatin", indication_id: "tc", label: "Testicular — 20 mg/m² daily for 5 days", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], renal_note: "Kidney impairment: consider a lower dose or an alternative", flags: ["5 days per cycle"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cisplatin for injection — WG Critical Care (NDA018057), label effective 2026-06-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=508496cb-3441-46b3-a4fe-e0d440e6adc6"], ["FDA", "AXYCIS (cisplatin) injection — AVYXA Pharma, label effective 2026-11-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=93edf309-993c-48ec-be90-27d89c86b62b"]],
  dose: { tagline: "Platinum chemotherapy; hydrate well and guard the kidneys and hearing.",
    boxedTitle: "Nephrotoxicity, peripheral neuropathy, nausea and vomiting, and myelosuppression",
    boxed: "Nephrotoxicity: AXYCIS can cause severe renal toxicity, including acute renal failure. Severe renal toxicities are dose-related and cumulative. Ensure adequate hydration and monitor renal function and electrolytes. Consider dose reductions or alternative treatments in patients with renal impairment. Peripheral Neuropathy: AXYCIS can cause dose-related peripheral neuropathy that becomes more severe with repeated courses of the drug. Nausea and Vomiting: AXYCIS can cause severe nausea and vomiting. Administer pre-treatment and post-treatment antiemetics as clinically indicated. Myelosuppression: AXYCIS can cause severe myelosuppression with fatalities due to infections. Monitor blood counts accordingly. Interruption of therapy may be required.",
    adult: [
      { ind: "Ovarian cancer", text: "75–100 mg/m² IV every 3–4 weeks.", calc: ["ov"] },
      { ind: "Bladder cancer", text: "50–70 mg/m² IV every 3–4 weeks.", calc: ["bl"] },
      { ind: "Testicular cancer", text: "20 mg/m² IV daily for 5 days per cycle.", calc: ["tc"] }
    ],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CITALOPRAM (FDA CELEXA, Allergan, NDA020822, eff. 2023-10-09) ---------- */
FDB_M("citalopram", {
  inn: "Citalopram", atc: "N06AB04", cls: "Selective serotonin reuptake inhibitor (SSRI)",
  linked: [["Major depressive disorder", "[FDA]", "depression-adult"]],
  forms: ["Tablets 10, 20, 40 mg; oral solution 10 mg/5 mL [NEP]."],
  moa: "Inhibits serotonin reuptake [FDA].",
  pk: ["Half-life about 35 h; doubled in liver impairment [FDA]."],
  ind: { adult: ["Major depressive disorder in adults [FDA]."], paed: ["Not approved in children [FDA]."] },
  adult: [["MDD", "20 mg once daily; after at least 1 week may increase to 40 mg; doses above 40 mg are not recommended (QT) [FDA]."], ["Over 60 years, liver impairment, CYP2C19 poor metabolisers, or with cimetidine/CYP2C19 inhibitors", "Maximum 20 mg once daily [FDA]."]],
  paed: { tiers: ["Not approved [FDA]."], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Maximum 20 mg/day [FDA].", preg: "Late-pregnancy SSRI use: PPHN risk and neonatal adaptation problems [FDA].", other: "Avoid in congenital long QT, bradycardia, low K/Mg, recent MI, uncompensated HF; stop if QTc >500 ms [FDA]. Taper to stop [FDA]." },
  tox: { human: "Seizures (may be delayed), coma, QRS/QTc prolongation, torsades, serotonin syndrome [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Prolonged cardiac monitoring; supportive [FDA]." },
  contra: ["With or within 14 days of MAOIs (including linezolid, IV methylene blue) [FDA].", "With pimozide [FDA].", "Hypersensitivity to citalopram [FDA]."],
  ae: { common: ["Nausea, dry mouth, somnolence, insomnia, sweating, ejaculation disorder [NEP]."], serious: ["Suicidal thoughts (boxed) [FDA]", "QT prolongation and torsades [FDA]", "Serotonin syndrome; bleeding; hyponatraemia; mania; angle-closure glaucoma [FDA]"] },
  monitor: ["Mood and suicidality early on; ECG and electrolytes if at risk; sodium in elderly [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "citalopram", indication_id: "std", label: "MDD — 20 mg once daily (max 40 mg)", route: "PO", population: { min_age_months: 216, max_age_months: 720, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose", value_max: 40 }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, max_daily: 40, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["20 mg max with liver impairment, CYP2C19 poor metabolism or CYP2C19 inhibitors"], sources: ["FDA"] },
    { drug: "citalopram", indication_id: "old", label: "Over 60 years — 20 mg once daily (maximum)", route: "PO", population: { min_age_months: 720, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 20, max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "CELEXA (citalopram) tablets — Allergan, label effective 2023-10-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4259d9b1-de34-43a4-85a8-41dd214e9177"]],
  dose: { tagline: "SSRI antidepressant with a dose ceiling because of QT prolongation.",
    boxedTitle: "Suicidal thoughts and behaviors",
    boxed: "Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal thoughts and behaviors. CELEXA is not approved for use in pediatric patients.",
    adult: [
      { ind: "Major depression", text: "20 mg once daily; up to 40 mg after a week. Never above 40 mg.", calc: ["std"] },
      { ind: "Over 60, liver impairment, CYP2C19 issues", text: "Maximum 20 mg once daily.", calc: ["old"] }
    ],
    child: [{ ind: "Children", text: "Not approved." }] }
});

/* ---------- CITRIC ACID (FDA PHEXX vaginal gel: lactic acid/citric acid/potassium bitartrate, Evofem, NDA208352) ---------- */
FDB_M("citric-acid", {
  inn: "Citric acid", atc: "A09AB04", cls: "Organic acid — in vaginal pH-modulator contraceptive gel and oral alkalinising citrate mixtures",
  linked: [["On-demand non-hormonal contraception (vaginal gel)", "[FDA]", "contraception-adult"]],
  forms: ["Vaginal gel (PHEXX): lactic acid 1.8%, citric acid 1%, potassium bitartrate 0.4% in 5 g single-dose applicators [FDA].", "Oral citric acid/citrate solutions (urinary alkalinisers) [NEP]."],
  moa: "Keeps vaginal pH acidic (3.5–4.5) in the presence of semen, reducing sperm motility [FDA].",
  pk: ["Local action [NEP]."],
  ind: { adult: ["Prevention of pregnancy as an on-demand method, used before intercourse [FDA]."], paed: ["Post-menarchal females [FDA]."] },
  adult: [["Contraception", "One 5 g applicator vaginally immediately before or up to 1 hour before each act of intercourse; repeat for each act [FDA]."]],
  paed: { tiers: ["Post-menarche: as adults; not before menarche [FDA]."], transition: "—", calcNote: "Vaginal gel — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "No use in pregnancy — stop [FDA].", other: "Not effective after intercourse [FDA]. Avoid with vaginal rings; can be used with condoms, diaphragms and hormonal methods [FDA]." },
  tox: { human: "Not applicable. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not applicable. [NEP]" },
  contra: ["Not established in primary source. [NEP]"],
  ae: { common: ["Vulvovaginal burning, itching, yeast infection, UTI, discomfort, bacterial vaginosis, discharge [FDA]."], serious: ["Cystitis and pyelonephritis — avoid with recurrent UTI or urinary tract abnormality [FDA]"] },
  monitor: ["Urinary symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "PHEXX (lactic acid, citric acid, potassium bitartrate) vaginal gel — Evofem, label effective 2025-05-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14b01a15-9b47-4be3-bb2e-a2010eab429e"]],
  dose: { tagline: "Part of a vaginal pH gel used before sex as on-demand contraception.",
    adult: [{ ind: "Contraception", text: "One applicator (5 g) vaginally up to 1 hour before each act of intercourse." }],
    child: [{ ind: "Post-menarche", text: "As adults." }] }
});

/* ---------- CLADRIBINE (FDA MAVENCLAD tablets, EMD Serono, NDA022561; cladribine injection Hikma ANDA075405, original LEUSTATIN) ---------- */
FDB_M("cladribine", {
  inn: "Cladribine", atc: "L01BB04", cls: "Purine antimetabolite (lymphocyte-depleting)",
  linked: [["Relapsing multiple sclerosis (oral)", "Second-line [FDA]", ""], ["Hairy cell leukaemia (IV)", "[FDA]", ""]],
  forms: ["Tablets 10 mg (MAVENCLAD) [FDA].", "Injection 1 mg/mL, 10 mL vial (IV) [NEP]."],
  moa: "Impairs DNA synthesis in lymphocytes, depleting B and T cells [FDA].",
  pk: ["Terminal half-life about 1 day [FDA].", "Take tablets at least 3 h apart from other oral drugs [FDA]."],
  ind: { adult: ["Relapsing MS (relapsing-remitting and active secondary progressive) in adults, usually after another MS drug failed or was not tolerated; not for CIS [FDA].", "Active hairy cell leukaemia (IV) [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["MS (oral)", "Total 3.5 mg/kg over 2 years: 1.75 mg/kg per yearly course, each course split into 2 cycles of 4–5 days, 23–27 days apart; dose per cycle by weight table (10 mg tablets); not under 40 kg [FDA]."], ["Hairy cell leukaemia (IV)", "0.09 mg/kg/day by continuous IV infusion for 7 consecutive days, one course [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "IV HCL dose per day; MS tablets by label weight table." },
  adj: { renal: "MS: moderate–severe kidney impairment (CrCl <60) not recommended [NEP]. IV: caution in renal insufficiency [FDA].", hepatic: "Obtain liver tests before; stop if significant injury [FDA].", preg: "Contraindicated (boxed); contraception during and 6 months after (females) or 14 weeks after (males) each course [FDA].", other: "Lymphocytes must be normal before course 1 and ≥800/µL before course 2; anti-herpes prophylaxis if lymphocytes <200/µL; vaccinate against VZV first; irradiate blood products [FDA]." },
  tox: { human: "Dose-dependent lymphopenia; at 4–9× the HCL dose: paraparesis and acute kidney failure [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; close blood count monitoring; dialysis unlikely to help [FDA]." },
  contra: ["Current malignancy (oral) [FDA].", "Pregnancy, or no effective contraception [FDA].", "HIV infection; active chronic infections (e.g. hepatitis, TB) [FDA].", "Breastfeeding during and 10 days after the last dose [FDA]."],
  ae: { common: ["Upper respiratory infection, headache, lymphopenia [NEP]."], serious: ["Malignancy (boxed) [FDA]", "Teratogenicity (boxed) [FDA]", "Serious infections incl. herpes zoster, PML [FDA]", "Haematological toxicity; liver injury; GVHD with unirradiated blood [FDA]", "IV: neurotoxicity and nephrotoxicity at high doses (boxed) [FDA]"] },
  monitor: ["CBC with lymphocytes before and 2 and 6 months after each course; cancer screening; liver tests [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cladribine", indication_id: "hcl", label: "Hairy cell leukaemia — 0.09 mg/kg/day continuous IV × 7 days", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.09, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], rounding: "Nearest 0.1 mg", renal: [], renal_note: "Kidney impairment: proceed carefully", flags: ["Each day's dose as a 24-hour infusion"], sources: ["FDA"] }],
  sources: [["FDA", "MAVENCLAD (cladribine) tablets — EMD Serono, label effective 2026-05-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9c75e30a-a410-40f1-b653-04d532bd9144"], ["FDA", "Cladribine injection — Hikma (ANDA075405), label effective 2023-04-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5736aecc-cc1d-47dd-86c0-5fb2e9d70f61"]],
  dose: { tagline: "Lymphocyte-depleting purine analogue: oral short courses for MS, IV for hairy cell leukaemia.",
    boxedTitle: "Malignancies and risk of teratogenicity (oral); bone marrow, neuro- and nephrotoxicity (IV)",
    boxed: "Treatment with MAVENCLAD may increase the risk of malignancy. MAVENCLAD is contraindicated in patients with current malignancy. In patients with prior malignancy or with increased risk of malignancy, evaluate the benefits and risks of the use of MAVENCLAD on an individual patient basis. Follow standard cancer screening guidelines in patients treated with MAVENCLAD. MAVENCLAD is contraindicated for use in pregnant women and in females and males of reproductive potential who do not plan to use effective contraception because of the potential for fetal harm. Malformations and embryolethality occurred in animals. Exclude pregnancy before the start of treatment with MAVENCLAD in females of reproductive potential. Advise females and males of reproductive potential to use effective contraception during MAVENCLAD dosing and for 6 months after the last dose in each treatment course for females, and 14 weeks for males. Stop MAVENCLAD if the patient becomes pregnant. — Injection: Cladribine Injection should be administered under the supervision of a qualified physician experienced in the use of antineoplastic therapy. Suppression of bone marrow function should be anticipated. This is usually reversible and appears to be dose dependent. Serious neurological toxicity (including irreversible paraparesis and quadraparesis) has been reported in patients who received cladribine injection by continuous infusion at high doses (4 to 9 times the recommended dose for Hairy Cell Leukemia). Neurologic toxicity appears to demonstrate a dose relationship; however, severe neurological toxicity has been reported rarely following treatment with standard cladribine dosing regimens. Acute nephrotoxicity has been observed with high doses of cladribine (4 to 9 times the recommended dose for Hairy Cell Leukemia), especially when given concomitantly with other nephrotoxic agents/therapies.",
    adult: [
      { ind: "Relapsing MS (oral)", text: "1.75 mg/kg per year for 2 years, each year in 2 short cycles a month apart — tablets per cycle from the label weight table." },
      { ind: "Hairy cell leukaemia (IV)", text: "0.09 mg/kg/day continuous infusion for 7 days.", calc: ["hcl"] }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CLARITHROMYCIN (FDA clarithromycin tablets IR ANDA065136 + ER ANDA208987; original BIAXIN) ---------- */
FDB_M("clarithromycin", {
  inn: "Clarithromycin", atc: "J01FA09", cls: "Macrolide antibacterial",
  linked: [["H. pylori eradication (triple therapy)", "[FDA]", "gerd-adult"], ["Community-acquired pneumonia; bronchitis; sinusitis; pharyngitis", "[FDA]", "pneumonia-adult"], ["Mycobacterium avium complex (treatment and prophylaxis)", "[FDA]", "hiv-adult"]],
  forms: ["Tablets 250 and 500 mg; ER tablets 500 mg; suspension 125 and 250 mg/5 mL [FDA].", "Bhutan: 250 mg tablet, for H. pylori eradication only [BT-NEML]."],
  moa: "Binds the 50S ribosomal subunit, blocking protein synthesis [NEP].",
  pk: ["Strong CYP3A inhibitor — many serious interactions [FDA].", "Not removed by dialysis [FDA]."],
  ind: { adult: ["Bronchitis exacerbation, sinusitis, CAP, pharyngitis, skin infections, MAC, H. pylori with duodenal ulcer [FDA]."], paed: ["Pharyngitis, sinusitis, otitis media, CAP, skin, MAC [FDA]."] },
  adult: [["Respiratory and skin infections", "250–500 mg every 12 h for 7–14 days [FDA]."], ["H. pylori (with amoxicillin + PPI)", "500 mg every 12 h for 10–14 days [FDA] — Bhutan STG: 500 mg twice daily for 14 days [BT-STG]."], ["MAC", "500 mg every 12 h [FDA]."], ["ER tablets", "1 g once daily with food (bronchitis 7 days, sinusitis 14 days, CAP 7 days) [FDA]."]],
  paed: { tiers: ["7.5 mg/kg every 12 h, maximum 500 mg per dose [FDA]."], transition: "Adult doses [NEP].", calcNote: "7.5 mg/kg every 12 h." },
  adj: { renal: "CrCl <30: halve the dose; with atazanavir/ritonavir: halve at CrCl 30–60 and quarter below 30 [FDA].", hepatic: "Contraindicated with colchicine in liver impairment [FDA].", preg: "Not recommended unless no alternative [FDA].", other: "Avoid in QT prolongation, low K/Mg, bradycardia [FDA]. Increased long-term mortality in coronary disease [FDA]." },
  tox: { human: "Abdominal pain, vomiting, nausea, diarrhoea [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Remove unabsorbed drug; supportive; not dialysable [FDA]." },
  contra: ["Hypersensitivity to clarithromycin, erythromycin or any macrolide [FDA].", "With cisapride, pimozide, ergotamine/dihydroergotamine, lomitapide, lovastatin, simvastatin, lurasidone [FDA].", "Previous cholestatic jaundice with clarithromycin [FDA].", "With colchicine in kidney or liver impairment [FDA]."],
  ae: { common: ["Taste disturbance, diarrhoea, nausea, abdominal pain, vomiting [NEP]."], serious: ["QT prolongation, torsades [FDA]", "Hepatotoxicity [FDA]", "Serious drug interactions (colchicine, statins, calcium channel blockers) [FDA]", "C. difficile diarrhoea; myasthenia worsening [FDA]"] },
  monitor: ["ECG if risk factors; interacting drug levels [FDA]."],
  local: { neml: "Clarithromycin 250 mg tablet — for H. pylori eradication only [BT-NEML].", strengths: "250 mg tablet.", stg: "Bhutan STG 2024: clarithromycin 500 mg twice daily for 14 days (H. pylori) [BT-STG]." },
  calc: [
    { drug: "clarithromycin", indication_id: "adult", label: "Adult — 250–500 mg every 12 h", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose", value_max: 500 }, interval_h: 12, divided_doses: 2, caps: { max_single: 500, max_daily: 1000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 12 }], renal_note: "With atazanavir or ritonavir: halve at CrCl 30–60, quarter below 30", flags: [], sources: ["FDA"] },
    { drug: "clarithromycin", indication_id: "hp", label: "H. pylori — 500 mg every 12 h (with amoxicillin + PPI)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 12 }], flags: ["10–14 days (Bhutan STG: 14 days)"], sources: ["FDA", "BT-STG"] },
    { drug: "clarithromycin", indication_id: "child", label: "Child — 7.5 mg/kg every 12 h (max 500 mg)", route: "PO", population: { min_age_months: 6, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 7.5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 25, unit: "mg/mL" }, { form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", factor: 0.5, interval_h: 12 }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Clarithromycin tablets USP (ANDA065136), label effective 2026-11-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0be243c6-de02-45dd-8210-cab1bbc8dfa7"], ["FDA", "Clarithromycin extended-release tablets (ANDA208987), label effective 2026-11-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1d328f5d-73c1-4df7-a3df-71d0e0221181"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Macrolide used in Bhutan mainly for H. pylori; check interactions and QT.",
    adult: [
      { ind: "H. pylori eradication", text: "500 mg twice daily with amoxicillin and a PPI for 14 days.", calc: ["hp"] },
      { ind: "Respiratory and skin infections", text: "250–500 mg every 12 hours for 7–14 days.", calc: ["adult"] },
      { ind: "MAC", text: "500 mg every 12 hours." }
    ],
    child: [{ ind: "Children", text: "7.5 mg/kg every 12 hours (max 500 mg per dose).", calc: ["child"] }] }
});

/* ---------- CLASCOTERONE (FDA WINLEVI 1% cream, Sun Pharma, NDA213433, eff. 2025-01-02) ---------- */
FDB_M("clascoterone", {
  inn: "Clascoterone", atc: "D10AX06", cls: "Topical androgen receptor inhibitor",
  linked: [["Acne vulgaris (12 years and over)", "[FDA]", ""]],
  forms: ["Cream 1% (10 mg/g) [FDA]."],
  moa: "Androgen receptor inhibitor; acne mechanism unknown [FDA].",
  pk: ["Some systemic absorption — HPA suppression possible [FDA]."],
  ind: { adult: ["Topical treatment of acne vulgaris [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Acne", "Thin layer (about 1 g) to affected area twice daily, morning and evening, after gentle cleansing [FDA]."]],
  paed: { tiers: ["12 years and over: as adults; children may be more susceptible to systemic effects [FDA]."], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Malformations in rats at high SC doses; no human data [FDA].", other: "Not on cuts, eczema or sunburn; avoid eyes and mouth [FDA]. Hyperkalaemia seen in trials [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Redness, itching, scaling/dryness (7–12%); oedema, stinging, burning [FDA]."], serious: ["HPA axis suppression [FDA]", "Hyperkalaemia [FDA]"] },
  monitor: ["Signs of HPA suppression with widespread use [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "WINLEVI (clascoterone) cream 1% — Sun Pharmaceutical Industries, label effective 2025-01-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1673a84b-7f5c-47ab-a99c-1e3db21a6a09"]],
  dose: { tagline: "Topical anti-androgen cream for acne from 12 years.",
    adult: [{ ind: "Acne vulgaris", text: "About 1 g thin layer twice daily." }],
    child: [{ ind: "12 years and over", text: "As adults." }] }
});

/* ---------- CLEMASTINE (FDA clemastine fumarate 2.68 mg tablets, IPG, ANDA073283; original TAVIST) ---------- */
FDB_M("clemastine", {
  inn: "Clemastine", atc: "R06AA04", cls: "First-generation H1 antihistamine (ethanolamine)",
  linked: [["Allergic rhinitis", "[FDA]", ""], ["Urticaria and angioedema (mild)", "2.68 mg dose only [FDA]", ""]],
  forms: ["Tablets 2.68 mg clemastine fumarate (= 2 mg base); 1.34 mg tablets and syrup also exist [NEP]."],
  moa: "H1 antagonist with anticholinergic and sedative effects [NEP].",
  pk: ["Long duration of action (about 12 h) [NEP]."],
  ind: { adult: ["Allergic rhinitis symptoms; mild urticaria and angioedema [FDA]."], paed: ["Not established under 12 years [FDA]."] },
  adult: [["Allergic rhinitis; urticaria", "2.68 mg once, repeated as required; maximum 1 tablet three times daily [FDA]."]],
  paed: { tiers: ["Under 12 years: not established [FDA]."], transition: "Adults from 12 years [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Inadequate human data [FDA].", other: "Elderly (about 60+): more dizziness, sedation, hypotension [FDA]. Caution in narrow-angle glaucoma, prostatic hypertrophy, bladder neck or pyloric obstruction [FDA]." },
  tox: { human: "CNS depression or stimulation (especially children), atropine-like signs [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Nursing mothers [FDA].", "Treatment of lower respiratory symptoms including asthma [FDA].", "Hypersensitivity to clemastine or similar antihistamines [FDA]."],
  ae: { common: ["Drowsiness (frequent), dizziness, dry mouth, thick bronchial secretions [FDA]."], serious: ["Paradoxical excitation in children [FDA]"] },
  monitor: ["Sedation [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "clemastine", indication_id: "std", label: "2.68 mg up to three times daily", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2.68, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2.68, max_daily: 8.04, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 2.68, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Many need only one dose a day"], sources: ["FDA"] }],
  sources: [["FDA", "Clemastine fumarate tablets USP 2.68 mg — IPG Pharmaceuticals (ANDA073283), label effective 2026-10-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9a35ed77-e35c-4c54-ad7f-1b92e450fa20"]],
  dose: { tagline: "Sedating antihistamine tablet for allergic rhinitis and urticaria.",
    adult: [{ ind: "Allergic rhinitis; urticaria", text: "2.68 mg once, repeated as needed; maximum 3 tablets a day.", calc: ["std"] }],
    child: [{ ind: "Under 12 years", text: "Not established." }] }
});

/* ---------- CLESROVIMAB (FDA ENFLONSIA, Merck, BLA761432, eff. 2026-10-14) ---------- */
FDB_M("clesrovimab", {
  inn: "Clesrovimab", atc: "J06BD10", cls: "Long-acting anti-RSV F protein monoclonal antibody",
  linked: [["RSV prevention in infants (first season)", "[FDA]", "bronchiolitis-child"]],
  forms: ["Prefilled syringe 105 mg/0.7 mL IM [FDA]."],
  moa: "Binds the RSV F protein and blocks viral fusion; Fc changes extend half-life [FDA].",
  pk: ["Half-life about 44 days [FDA]."],
  ind: { adult: ["Not indicated [FDA]."], paed: ["Prevention of RSV lower respiratory disease in neonates and infants born during or entering their first RSV season [FDA]."] },
  adult: [["—", "Not indicated in adults [FDA]."]],
  paed: { tiers: ["105 mg IM once — from birth if born in season, or before the season starts [FDA].", "After cardiac surgery with bypass: an extra 105 mg as soon as stable [FDA].", "Not established over 12 months [FDA]."], transition: "—", calcNote: "Fixed single dose — same for all weights." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not indicated [FDA].", other: "Healthcare provider gives it; may cause false-negative RSV rapid antigen tests — use RT-PCR [FDA]." },
  tox: { human: "Limited experience [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor and treat symptoms [FDA]." },
  contra: ["Serious hypersensitivity, including anaphylaxis, to any component [FDA]."],
  ae: { common: ["Injection-site redness (4.5%), swelling (3.2%), rash (2.3%) [FDA]."], serious: ["Hypersensitivity, including anaphylaxis (class effect) [FDA]"] },
  monitor: ["Observe after injection [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "clesrovimab", indication_id: "std", label: "105 mg IM once (any weight)", route: "IM", population: { min_age_months: 0, max_age_months: 12, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 105, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 105, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "syringe", strength: 150, unit: "mg/mL" }], rounding: "Whole syringe (0.7 mL)", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "ENFLONSIA (clesrovimab-cfor) injection — Merck Sharp & Dohme, label effective 2026-10-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c9004a92-40e8-4cdb-b22d-d07929f8fc3b"]],
  dose: { tagline: "Single IM antibody dose to protect infants through their first RSV season.",
    adult: [{ ind: "Adults", text: "Not indicated." }],
    child: [{ ind: "Neonates and infants (first season)", text: "105 mg IM once; repeat 105 mg after cardiac bypass surgery.", calc: ["std"] }] }
});

/* Brands for batch C-2 — India (PharmEasy) and Bangladesh (MedEx), built 24 Nov 2026 with _work/tools/fdb-brands.js; weak matches removed by hand (Clavcep, Uv Lube, citric acid cough syrups). */
(function () {
  const B = {"cefpodoxime":{"BT":"Bhutan supplies by generic name.","IN":[["Monocef O","Aristo Pharmaceuticals Pvt Ltd","Monocef O 200Mg Strip Of 10 Tablets"],["Gudcef","Mankind Pharmaceuticals Ltd","Gudcef 200Mg Strip Of 10 Tablets"]],"BD":[["Cefokid DS","Euro Pharma Ltd","80 mg/5 ml"],["Cefoprox","Leon Pharmaceuticals Ltd","40 mg/5 ml"],["Ximeprox","Incepta Pharmaceuticals Ltd","40 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/monocef-o-200mg-tablet-3610","https://pharmeasy.in/online-medicine-order/gudcef-200mg-strip-of-10-tablets-18279","https://medex.com.bd/brands/7852/cefokid-ds-80-mg-powder-for-suspension","https://medex.com.bd/brands/7853/cefoprox-40-mg-powder-for-suspension","https://medex.com.bd/brands/7836/ximeprox-40-mg-powder-for-suspension"]},"cefprozil":{"BT":"Bhutan supplies by generic name.","IN":[["Refzil O","Ranbaxy Laboratories (sun Pharma)","Refzil O 500Mg Strip Of 6 Tablets"],["Refzil","Ranbaxy Laboratories (sun Pharma)","Refzil O 250Mg Strip Of 10 Tablets"],["Vepazil","Indoco Remedies Ltd","Vepazil 250Mg Strip Of 6 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/refzil-o-500mg-tablet-22623","https://pharmeasy.in/online-medicine-order/refzil-o-250mg-tablet-22622","https://pharmeasy.in/online-medicine-order/vepazil-250mg-strip-of-6-tablets-4508781"]},"ceftaroline-fosamil":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Zinforo","Radiant Pharmaceuticals Ltd","600 mg/vial"],["Ceftalin","Eskayef Pharmaceuticals Ltd","600 mg/vial"],["Zetaro","Incepta Pharmaceuticals Ltd","600 mg/vial"]],"src":["https://medex.com.bd/brands/36841/zinforo-600-mg-iv-infusion","https://medex.com.bd/brands/37353/ceftalin-600-mg-iv-infusion","https://medex.com.bd/brands/38404/zetaro-600-mg-iv-infusion"]},"ceftazidime":{"BT":"Bhutan supplies by generic name.","IN":[["Tazid","Alkem Laboratories Ltd","Tazid 1Gm Dry Vial Of 1 Powder For Injection"]],"BD":[["Taziaid","Labaid Pharma Ltd","250 mg/vial"],["Cozid","Beacon Pharmaceuticals PLC","1 gm/vial"],["Cefzon","Navana Pharmaceuticals Ltd","1 gm/vial"]],"src":["https://pharmeasy.in/online-medicine-order/tazid-1gm-inj-62065","https://medex.com.bd/brands/28695/taziaid-250-mg-imiv-injection","https://medex.com.bd/brands/32691/cozid-1-gm-imiv-injection","https://medex.com.bd/brands/28477/cefzon-1-gm-imiv-injection"]},"ceftriaxone":{"BT":"Bhutan supplies by generic name.","IN":[["Truexone","Avighna Medicare Pvt Ltd","Truexone 1000Mg Dry Vial Of 1Gm Powder For Injection"],["Monocef","Aristo Pharmaceuticals Pvt Ltd","Monocef 1Gm Dry Vial Of 1 Powder For Inajection"],["Xone","Alkem Laboratories Ltd","Xone 1Gm Dry Vial Of 1 Powder For Injection"]],"BD":[["Vertex","Orion Pharma Ltd","250 mg/vial"],["Maxzon","One Pharma Ltd","2 gm/vial"],["Ceftriaid","Labaid Pharma Ltd","500 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/truexone-1000mg-vial-of-1gm-powder-for-injection-3554182","https://pharmeasy.in/online-medicine-order/monocef-1gm-inj-3604","https://pharmeasy.in/online-medicine-order/xone-1gm-inj-2476","https://medex.com.bd/brands/26893/vertex-250-mg-im-injection","https://medex.com.bd/brands/27085/maxzon-2-gm-injection","https://medex.com.bd/brands/26956/ceftriaid-500-mg-injection"]},"cefuroxime":{"BT":"Bhutan supplies by generic name.","IN":[["Cefakind","Mankind Pharmaceuticals Ltd","Cefakind 500Mg Strip Of 10 Tablets"],["Cefasyn","Cipla Gx","Cefasyn 500Mg Strip Of 4 Tablets"],["Cefaprime","Leeford Healthcare Ltd","Cefaprime 250Mg Strip Of 4 Tablets"]],"BD":[["Sharpkil","One Pharma Ltd","500 mg"],["Zenifor DS","Zenith Pharmaceuticals Ltd","250 mg/5 ml"],["Zenifor","Zenith Pharmaceuticals Ltd","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cefakind-500mg-tablet-18218","https://pharmeasy.in/online-medicine-order/cefasyn-500mg-tablet-39578","https://pharmeasy.in/online-medicine-order/cefaprime-250mg-tab-118496","https://medex.com.bd/brands/25828/sharpkil-500-mg-tablet","https://medex.com.bd/brands/25851/zenifor-ds-250-mg-powder-for-suspension"]},"celecoxib":{"BT":"Bhutan supplies by generic name.","IN":[["Celebrex","Mylan Pharmaceuticals Private Limited - A Viatris Company","Celebrex 200Mg Strip Of 10 Capsules"],["Zycel","Zydus Healthcare Limited","Zycel 200Mg Strip Of 10 Capsules"],["Cobix","Cipla Gx","Cobix 200Mg Strip Of 10 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/celebrex-200mg-strip-of-10-capsules-3127360","https://pharmeasy.in/online-medicine-order/zycel-200mg-strip-of-10-capsules-30822","https://pharmeasy.in/online-medicine-order/cobix-200mg-capsule-6538"]},"cenobamate":{"BT":"Bhutan supplies by generic name.","IN":[["Cnb","Msn Laboratories","Cnb 12.5Mg Strip Of 10 Tablets"],["Cebrius","Intas Pharmaceuticals Ltd","Cebrius 12.5Mg Strip Of 10 Tablets"],["Neuceno","Alkem Laboratories Ltd","Neuceno 12.5Mg Strip Of 10 Tablets"]],"BD":[["Afalino","Incepta Pharmaceuticals Ltd","12.5 mg"],["Cenomate","Everest Pharmaceuticals Ltd","12.5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cnb-12-5mg-strip-of-10-tablets-4866183","https://pharmeasy.in/online-medicine-order/cebrius-12-5mg-strip-of-10-tablets-4857114","https://pharmeasy.in/online-medicine-order/neuceno-12-5mg-strip-of-10-tablets-4853659","https://medex.com.bd/brands/35449/afalino-125-mg-tablet","https://medex.com.bd/brands/37041/cenomate-125-mg-tablet"]},"ceritinib":{"BT":"Bhutan supplies by generic name.","IN":[["Spexib","Novartis India Ltd","Spexib 150Mg Strip Of 10 Capsules"]],"BD":[["Erinlar","Genvio Pharma Ltd","150 mg"],["Cerinib","Drug International Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/spexib-150mg-capsule-10-s-209025","https://medex.com.bd/brands/29330/erinlar-150-mg-capsule","https://medex.com.bd/brands/31181/cerinib-150-mg-capsule"]},"cetirizine":{"BT":"Bhutan supplies by generic name.","IN":[["Citephi","Avighna Medicare Pvt Ltd","Citephi 10Mg Strip Of 10 Tablets"],["Cetrizine","Knoll Healthcare Pvt Ltd","Cetrizine 10Mg (Knoll) Strip Of 10 Tablets"],["Okacet","Cipla Gx","Okacet 10Mg Strip Of 10 Tablets"]],"BD":[["Cetirizine","APC Pharma Ltd","5 mg/5 ml"],["Cetriz","Astra Biopharmaceuticals Ltd","5 mg/5 ml"],["Cerzin","FnF Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/citephi-10mg-strip-of-10-tablets-3600237","https://pharmeasy.in/online-medicine-order/cetrizine-10mg-knoll-tab-10-s-212653","https://pharmeasy.in/online-medicine-order/okacet-10mg-tablet-6261","https://medex.com.bd/brands/11934/cetirizine-5-mg-syrup","https://medex.com.bd/brands/19132/cetriz-5-mg-syrup","https://medex.com.bd/brands/19145/cerzin-10-mg-tablet"]},"cetrorelix":{"BT":"Bhutan supplies by generic name.","IN":[["Ciscure","Emcure Pharmaceuticals Ltd","Ciscure 0.25Mg Dry Vial Of 1 Powder For Injection"],["Ovurelix","Sun Pharma","Ovurelix 0.25Mg Pre Filled Syringe Of 1Ml Solution For Injection"],["Cetrolix","Intas Pharmaceuticals Ltd","Cetrolix 0.25Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Cetrolix","Eskayef Pharmaceuticals Ltd","0.25 mg/ml"],["Antalix","Popular Pharmaceuticals PLC","0.25 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/ciscure-vial-of-0-25mg-powder-for-injection-9395","https://pharmeasy.in/online-medicine-order/ovurelix-0-25mg-pre-filled-syringe-of-1ml-solution-for-injection-65968","https://pharmeasy.in/online-medicine-order/cetrolix-0-25-mg-injection-1-3044774","https://medex.com.bd/brands/36634/cetrolix-025-mg-sc-injection","https://medex.com.bd/brands/39893/antalix-025-mg-sc-injection"]},"cetuximab":{"BT":"Bhutan supplies by generic name.","IN":[["Cetuxa","Alkem Laboratories Ltd","Cetuxa 100 Mg Infusion 20 Ml"],["Erbitux","Merck Limited","Erbitux 100Mg Vial Of 20Ml Solution For Infusion"]],"BD":[["Cetuxim","Beacon Pharmaceuticals PLC","5 mg/ml"],["Cetimab","Drug International Ltd","5 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/cetuxa-100-mg-infusion-20-ml-4121837","https://pharmeasy.in/online-medicine-order/erbitux-100-mg-injection-20-ml-3714493","https://medex.com.bd/brands/17247/cetuxim-5-mg-iv-infusion","https://medex.com.bd/brands/39932/cetimab-5-mg-iv-infusion"]},"chlorambucil":{"BT":"Bhutan supplies by generic name.","IN":[["Zuberi","Zuvius Lifesciences Pvt. Ltd.","Zuberi 2Mg Bottle Of 25 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/zuberi-2-mg-bottle-of-25-bottles-4828074"]},"chlordiazepoxide":{"BT":"Bhutan supplies by generic name.","IN":[["Equilibrium","Abbott Healthcare Pvt Ltd","Equilibrium 25Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/equilibrium-25mg-tab-187688"]},"chlorhexidine":{"BT":"Bhutan supplies by generic name.","IN":[["Clohex","Dr Reddy's Laboratories Ltd","Clohex 0.2% Bottle Of 150Ml Mouth Wash"],["Rexidin","Indoco Remedies Ltd","Rexidin Srs Bottle Of 150Ml Mouth Wash"]],"BD":[["SB-Sol","Somatec Pharmaceuticals Ltd","0.2%"]],"src":["https://pharmeasy.in/online-medicine-order/clohex-0-2-mouth-wash-150-ml-200330","https://pharmeasy.in/online-medicine-order/rexidin-srs-bottle-of-150ml-mouth-wash-226321","https://medex.com.bd/brands/33782/sb-sol-02-mouthwash"]},"chloroquine":{"BT":"Bhutan supplies by generic name.","IN":[["Lariago","Ipca Laboratories","Lariago 250Mg Strip Of 10 Tablets"],["Malabest","Talent Health Care","Malabest 250Mg Bottle Of 100 Tablets"]],"BD":[["Avloquin","Advanced Chemical Industries PLC","250 mg"],["Clit","Hudson Pharmaceuticals Ltd","80 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/lariago-250mg-strip-of-10-tablets-14667","https://pharmeasy.in/online-medicine-order/malabest-250-mg-tablet-100-no-s-3735342","https://medex.com.bd/brands/35030/avloquin-h-200-mg-tablet","https://medex.com.bd/brands/19219/clit-80-mg-syrup"]},"chlorpromazine":{"BT":"Bhutan supplies by generic name.","IN":[["Largactil","Abbott Healthcare Pvt Ltd","Largactil 25Mg Strip Of 10 Tablets"]],"BD":[["Opsonil","Opsonin Pharma Ltd","50 mg"],["Emectil","Pharmik Laboratories Ltd","25 mg/5 ml"],["Largazin","United Pharmaceuticals Ltd","25 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/largactil-25mg-tablet-547","https://medex.com.bd/brands/4296/opsonil-50-mg-tablet","https://medex.com.bd/brands/19301/emectil-25-mg-syrup","https://medex.com.bd/brands/19305/largazin-25-mg-syrup"]},"chlortalidone":{"BT":"Bhutan supplies by generic name.","IN":[["Chlornol","Knoll Healthcare Pvt Ltd","Chlornol 6.25Mg Strip Of 10 Tablets"]],"BD":[["Clortha","Advanced Chemical Industries PLC","15 mg"],["Thiocard","Incepta Pharmaceuticals Ltd","25 mg"],["Thalin","Beximco Pharmaceuticals PLC","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/chlornol-6-25mg-strip-of-10-tablets-2936329","https://medex.com.bd/brands/34509/clortha-15-mg-tablet","https://medex.com.bd/brands/33170/thiocard-25-mg-tablet","https://medex.com.bd/brands/30819/thalin-25-mg-tablet"]},"chorionic-gonadotrophin":{"BT":"Bhutan supplies by generic name.","IN":[["Lupi Hcg","Lupin","Lupi Hcg 5000Iu Dry Vial Of 1 Powder For Injection"],["Hucog","Bharat Serums \\u0026 Vaccines Ltd","Hucog 5000Iu Hp Pre Filled Syringe Of 1Ml Injection"],["Eema Hp","Corona Remedies Pvt Ltd","Eema Hp 5000Iu Dry Vial Of 1 Powder For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/lupi-hcg-5000-iu-injection-2ml-16909","https://pharmeasy.in/online-medicine-order/hucog-5000iu-hp-pre-filled-syringe-of-1ml-injection-4130396","https://pharmeasy.in/online-medicine-order/eema-hp-5000iu-injection-2ml-7194"]},"ciclopirox":{"BT":"Bhutan supplies by generic name.","IN":[["Nailrox","Intas Pharmaceuticals Ltd","Nailrox Nail Lacquer 5Ml"],["C Win","Ranbaxy Laboratories (sun Pharma)","C Win Tube Of 30Gm Cream"],["Candidox","Glenmark Pharmaceuticals","Candidox Tube Of 30Gm Cream"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/nailrox-nail-lacquer-5ml-173148","https://pharmeasy.in/online-medicine-order/c-win-tube-of-30gm-cream-212062","https://pharmeasy.in/online-medicine-order/candidox-cream-30gm-223667"]},"ciclosporin":{"BT":"Bhutan supplies by generic name.","IN":[["Cyclomune","Sun Pharma","Cyclomune 0.1% Bottle Of 3Ml Eye Drops"],["Cyclisis","Intas Pharmaceuticals Ltd","Cyclisis Pf Bottle Of 5Ml Eye Drops"],["Psorid","Eris Life Sciences Pvt Ltd","Psorid 100Mg Strip Of 10 Softgel Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/cyclomune-0-1-eye-drops-3ml-42469","https://pharmeasy.in/online-medicine-order/cyclisis-pf-bottle-of-5ml-eye-drops-3841823","https://pharmeasy.in/online-medicine-order/psorid-100mg-strip-of-10-softgel-capsules-4396014"]},"cilostazol":{"BT":"Bhutan supplies by generic name.","IN":[["Cilonol","Knoll Healthcare Pvt Ltd","Cilonol 50Mg Strip Of 10 Tablets"],["Stiloz","Integrace Private Limited","Stiloz 100Mg Strip Of 15 Tablets"],["Pletoz","Cipla Limited","Pletoz 50Mg Strip Of 10 Tablets"]],"BD":[["Cilosta","Square Pharmaceuticals PLC","100 mg"],["Inclaud","Advanced Chemical Industries PLC","100 mg"],["Vasocil","The IBN SINA Pharmaceutical PLC","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/cilonol-50mg-strip-of-10-tablets-2936424","https://pharmeasy.in/online-medicine-order/stiloz-100mg-tab-15-s-211290","https://pharmeasy.in/online-medicine-order/pletoz-50mg-tablet-6300","https://medex.com.bd/brands/3159/cilosta-100-mg-tablet","https://medex.com.bd/brands/3160/inclaud-100-mg-tablet","https://medex.com.bd/brands/3161/vasocil-50-mg-tablet"]},"cinacalcet":{"BT":"Bhutan supplies by generic name.","IN":[["Pth","Intas Pharmaceuticals Ltd","Pth 30Mg Strip Of 10 Tablets"],["Cinaselect","Steris Healthcare","Cinaselect 30Mg Strip Of 10 Tablets"],["Senacept","Lupin","Senacept 30Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/pth-30mg-tablet-13985","https://pharmeasy.in/online-medicine-order/cinaselect-30mg-strip-of-10-tablets-4489974","https://pharmeasy.in/online-medicine-order/senacept-30mg-tablet-83982"]},"ciprofloxacin":{"BT":"Bhutan supplies by generic name.","IN":[["Esipflox","Avighna Medicare Pvt Ltd","Esipflox 500Mg Strip Of 10 Tablets"],["Ciplox","Cipla Limited","Ciplox 0.3% Bottle Of 10Ml Eye/Ear Drops"],["Zoxan","Fdc Limited","Zoxan 0.3% Tube Of 10Gm Eye Ointment"]],"BD":[["Ciprofloxacin","Pharmik Laboratories Ltd","500 mg"],["Xirocip","Novo Healthcare and Pharma Ltd","500 mg"],["Winbac","Radiant Pharmaceuticals Ltd","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/esipflox-500mg-strip-of-10-tablets-3554012","https://pharmeasy.in/online-medicine-order/ciplox-0-3-e-e-drops-10ml-6789","https://pharmeasy.in/online-medicine-order/zoxan-0-3-eye-ointment-10gm-233432","https://medex.com.bd/brands/37646/ciprofloxacin-500-mg-tablet","https://medex.com.bd/brands/9359/xirocip-500-mg-tablet","https://medex.com.bd/brands/9354/winbac-500-mg-tablet"]},"cisplatin":{"BT":"Bhutan supplies by generic name.","IN":[["Adcist","Adley Formulation","Adcist 10Mg Injection"],["Platin","Cadila Pharmaceuticals Limited","Platin 50Mg Vial Of 50Ml Solution For Infusion"],["Kemoplat","Fresenius Kabi India Pvt Ltd","Kemoplat 50Mg Vial Of 50Ml Injection"]],"BD":[["Cisplatin Hexal","Nevian Lifescience PLC","1 mg/ml"],["Cesalin","Techno Drugs Ltd","1 mg/ml"],["Platinex","Beacon Pharmaceuticals PLC","1 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/adcist-10mg-inj-99475","https://pharmeasy.in/online-medicine-order/platin-50mg-inj-50ml-71214","https://pharmeasy.in/online-medicine-order/kemoplat-50mg-inj-50ml-51884","https://medex.com.bd/brands/15100/cisplatin-hexal-1-mg-iv-infusion","https://medex.com.bd/brands/15098/cesalin-1-mg-iv-infusion","https://medex.com.bd/brands/15104/platinex-1-mg-iv-infusion"]},"clarithromycin":{"BT":"Bhutan supplies by generic name.","IN":[["Claribid","Abbott Healthcare Pvt Ltd","Claribid 500Mg Strip Of 10 Tablets"],["Zoclar","Cipla Gx","Zoclar 250Mg Strip Of 4 Tablets"],["Clarigard","Macleods Pharmaceuticals","Clarigard 500Mg Strip Of 10 Tablets"]],"BD":[["Klabid-DS","UniMed UniHealth Pharmaceuticals Ltd","250 mg/5 ml"],["Pneumoclar","DBL Pharmaceuticals Ltd","500 mg"],["Clarinaaf","Naafco Pharma PLC","125 mg/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/claribid-500mg-strip-of-10-tablets-176339","https://pharmeasy.in/online-medicine-order/zoclar-250mg-strip-of-4-tablets-205207","https://pharmeasy.in/online-medicine-order/clarigard-500mg-tablet-17882","https://medex.com.bd/brands/30096/klabid-ds-250-mg-powder-for-suspension","https://medex.com.bd/brands/37227/pneumoclar-500-mg-tablet","https://medex.com.bd/brands/36480/clarinaaf-125-mg-powder-for-suspension"]},"clascoterone":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Clascon","Navana Pharmaceuticals Ltd","1% w/w"],["Nulevi","Nuvista Pharma PLC","1% w/w"],["Clasrin","ACME Laboratories Ltd","1% w/w"]],"src":["https://medex.com.bd/brands/30448/clascon-1-w-cream","https://medex.com.bd/brands/34689/nulevi-1-w-cream","https://medex.com.bd/brands/35621/clasrin-1-w-cream"]}};
  Object.entries(B).forEach(([id, b]) => { if (window.FDB[id]) window.FDB[id].brands = b; });
})();
