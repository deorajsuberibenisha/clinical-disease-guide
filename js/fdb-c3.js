/* Clinical Disease Guide — Drug monograph database, block C, batch 3 (24 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it). */

/* ================= Batch C-3 (fdb-c3.js) ================= */

/* ---------- CLEVIDIPINE (FDA CLEVIPREX, Fresenius Kabi/Chiesi, NDA022156, eff. 2022-11-09) ---------- */
FDB_M("clevidipine", {
  inn: "Clevidipine", atc: "C08CA16", cls: "Ultra-short-acting IV dihydropyridine calcium channel blocker",
  linked: [["Acute hypertension when oral therapy is not possible", "[FDA]", "htn-adult"]],
  forms: ["Injectable lipid emulsion 0.5 mg/mL: 50, 100, 250 mL vials [FDA]."],
  moa: "L-type calcium channel blocker; lowers systemic vascular resistance [FDA].",
  pk: ["Initial half-life about 1 min; effect wears off 5–15 min after stopping [FDA].", "Metabolised by blood esterases — no CYP interactions [FDA]."],
  ind: { adult: ["Reduction of blood pressure when oral therapy is not feasible or not desirable [FDA]."], paed: ["Not established under 18 years [FDA]."] },
  adult: [["Start", "1–2 mg/h IV infusion [FDA]."], ["Titrate", "Double every 90 seconds at first; near goal, increase by less than double every 5–10 min; each 1–2 mg/h lowers SBP about 2–4 mmHg [FDA]."], ["Maintenance", "Usually 4–6 mg/h; most patients 16 mg/h or less; limited experience up to 32 mg/h [FDA]."], ["Lipid limit", "Not more than 1000 mL (average 21 mg/h) per 24 h; little experience beyond 72 h [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Infusion titrated to BP — no fixed-dose calculator. 1 mg/h = 2 mL/h of 0.5 mg/mL." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Use only if benefit justifies risk [FDA].", other: "Aseptic technique; discard 12 h after puncture [FDA]. Watch for rebound hypertension for 8 h after a long infusion [FDA]. Does not protect against beta-blocker withdrawal [FDA]." },
  tox: { human: "Hypotension and reflex tachycardia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the infusion; support BP — effect falls within 5–15 min [FDA]." },
  contra: ["Allergy to soybeans, soy products, eggs or egg products [FDA].", "Defective lipid metabolism (pathological hyperlipaemia, lipoid nephrosis, acute pancreatitis with hyperlipidaemia) [FDA].", "Severe aortic stenosis [FDA]."],
  ae: { common: ["Headache, nausea, vomiting [FDA]."], serious: ["Hypotension and reflex tachycardia [FDA]", "Worsening heart failure [FDA]"] },
  monitor: ["BP and heart rate continuously; triglycerides if prolonged [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CLEVIPREX (clevidipine) injectable emulsion — Fresenius Kabi Austria, label effective 2022-11-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a6826aa3-fabb-4ff1-a7a3-cd4c34e3a330"]],
  dose: { tagline: "Titratable IV calcium channel blocker for acute hypertension.",
    adult: [{ ind: "Acute hypertension", text: "Start 1–2 mg/h (2–4 mL/h); double every 90 s, then smaller steps every 5–10 min; usual 4–6 mg/h; max lipid 21 mg/h average a day." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CLINDAMYCIN (FDA CLEOCIN PHOSPHATE NDA050441 + clindamycin HCl capsules ANDA207402) ---------- */
FDB_M("clindamycin", {
  inn: "Clindamycin", atc: "J01FF01", cls: "Lincosamide antibacterial",
  linked: [["Skin and soft-tissue infection (incl. MRSA), abscess", "[FDA]", "ssti-adult"], ["Anaerobic and intra-abdominal infections; aspiration pneumonia", "[FDA]", ""], ["Bone and joint infection", "[FDA]", "bonejoint-child"], ["Acne (topical gel)", "Bhutan STG [BT-STG]", ""]],
  forms: ["Capsules 75, 150, 300 mg; paediatric granules 75 mg/5 mL; injection 150 mg/mL; topical gel/lotion 1% [FDA]."],
  moa: "Binds the 50S ribosomal subunit, blocking protein synthesis [FDA].",
  pk: ["Half-life about 3 h (adults), 2.5 h (children); longer in liver disease [FDA].", "Not removed by dialysis [FDA].", "Dose on total body weight even in obesity [FDA]."],
  ind: { adult: ["Serious infections by susceptible anaerobes, streptococci, pneumococci and staphylococci, especially in penicillin allergy [FDA]."], paed: ["Neonates to adolescents [FDA]."] },
  adult: [["Oral", "Serious: 150–300 mg every 6 h; more severe: 300–450 mg every 6 h, with a full glass of water [FDA]."], ["IV/IM", "600–1200 mg/day in 2–4 doses; severe (B. fragilis etc.) 1200–2700 mg/day; up to 4800 mg/day IV in life-threatening infection; single IM dose not above 600 mg [FDA]."]],
  paed: { tiers: ["Oral: 8–16 mg/kg/day in 3–4 doses; more severe 16–20 mg/kg/day [FDA].", "IV/IM 1 month–16 years: 20–40 mg/kg/day in 3–4 doses (or 350–450 mg/m²/day) [FDA].", "Under 1 month: 15–20 mg/kg/day in 3–4 doses; PMA-based table in the label [FDA]."], transition: "Adult doses [NEP].", calcNote: "mg/kg/day ÷ 3–4 on total body weight." },
  adj: { renal: "No adjustment [NEP].", hepatic: "Half-life longer in moderate–severe liver disease [FDA].", preg: "Not established in primary source. [NEP]", other: "Benzyl alcohol in some vials — gasping syndrome risk in neonates [FDA]. Stop if significant diarrhoea [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Mice IV 855 mg/kg and rats oral/SC about 2618 mg/kg: significant mortality [FDA].", manage: "Supportive; not dialysable [FDA]." },
  contra: ["Hypersensitivity to clindamycin or lincomycin [FDA]."],
  ae: { common: ["Diarrhoea, nausea, abdominal pain, rash, metallic taste (high IV doses) [FDA]."], serious: ["C. difficile colitis, may be fatal (boxed) [FDA]", "Severe skin reactions; DRESS [FDA]", "Acute kidney injury [FDA]"] },
  monitor: ["Diarrhoea; liver and kidney tests and blood counts in long courses [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Bhutan STG 2024: clindamycin gel with 2.5% or 5% benzoyl peroxide gel for acne [BT-STG]." },
  calc: [
    { drug: "clindamycin", indication_id: "po", label: "Adult oral — 150–450 mg every 6 h", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose", value_max: 450 }, interval_h: 6, divided_doses: 4, caps: { max_single: 450, max_daily: 1800, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 150, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] },
    { drug: "clindamycin", indication_id: "iv", label: "Adult IV — 600–900 mg every 8 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 600, unit: "mg", per: "dose", value_max: 900 }, interval_h: 8, divided_doses: 3, caps: { max_daily: 4800, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 150, unit: "mg/mL" }], rounding: "Nearest 0.5 mL (dilute)", renal: [], flags: ["Label range 600–2700 mg/day in 2–4 doses"], sources: ["FDA"] },
    { drug: "clindamycin", indication_id: "cpo", label: "Child oral — 8–20 mg/kg/day ÷ every 8 h", route: "PO", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 8, unit: "mg", per: "day", value_max: 20 }, interval_h: 8, divided_doses: 3, caps: { adult_ceiling_daily: 1800, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "granules", strength: 15, unit: "mg/mL" }], rounding: "Nearest 0.5 mL", renal: [], flags: ["Total body weight"], sources: ["FDA"] },
    { drug: "clindamycin", indication_id: "civ", label: "Child IV 1 month–16 years — 20–40 mg/kg/day ÷ every 8 h", route: "IV", population: { min_age_months: 1, max_age_months: 192, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "day", value_max: 40 }, interval_h: 8, divided_doses: 3, caps: { adult_ceiling_daily: 2700, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 150, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: ["Total body weight"], sources: ["FDA"] },
    { drug: "clindamycin", indication_id: "neo", label: "Neonate under 1 month — 15–20 mg/kg/day ÷ every 8 h", route: "IV", population: { min_age_months: 0, max_age_months: 1, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "day", value_max: 20 }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 150, unit: "mg/mL" }], rounding: "Nearest 0.1 mg", renal: [], flags: ["Check the label PMA table (≤32 vs >32 weeks)", "Avoid benzyl-alcohol vials"], sources: ["FDA"] }
  ],
  sources: [["FDA", "CLEOCIN PHOSPHATE (clindamycin injection) — Henry Schein listing (NDA050441), label effective 2026-10-27", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=184acaee-6129-479e-850f-d89575b8b391"], ["FDA", "Clindamycin HCl capsules USP (ANDA207402), label effective 2023-02-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=07f5d841-9c58-4dd1-b0bc-e12553931c8e"], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Lincosamide for staphylococcal, streptococcal and anaerobic infections; C. difficile risk.",
    boxedTitle: "Warning",
    boxed: "Clostridioides difficile-associated diarrhea (CDAD) has been reported with use of nearly all antibacterial agents, including CLEOCIN PHOSPHATE and may range in severity from mild diarrhea to fatal colitis. Treatment with antibacterial agents alters the normal flora of the colon leading to overgrowth of C. difficile. Because CLEOCIN PHOSPHATE therapy has been associated with severe colitis which may end fatally, it should be reserved for serious infections where less toxic antimicrobial agents are inappropriate. It should not be used in patients with nonbacterial infections such as most upper respiratory tract infections. … If CDAD is suspected or confirmed, ongoing antibiotic use not directed against C. difficile may need to be discontinued. Appropriate fluid and electrolyte management, protein supplementation, antibiotic treatment of C. difficile, and surgical evaluation should be instituted as clinically indicated.",
    adult: [
      { ind: "Oral", text: "150–300 mg every 6 h (severe 300–450 mg).", calc: ["po"] },
      { ind: "IV", text: "600–1200 mg/day in 2–4 doses; severe 1200–2700 mg/day.", calc: ["iv"] },
      { ind: "Acne (gel)", text: "Clindamycin gel with benzoyl peroxide (Bhutan STG)." }
    ],
    child: [
      { ind: "Oral", text: "8–16 mg/kg/day in 3–4 doses (severe 16–20).", calc: ["cpo"] },
      { ind: "IV, 1 month–16 years", text: "20–40 mg/kg/day in 3–4 doses.", calc: ["civ"] },
      { ind: "Under 1 month", text: "15–20 mg/kg/day in 3–4 doses.", calc: ["neo"] }
    ] }
});

/* ---------- CLOBAZAM (FDA ONFI, Lundbeck, NDA203993/202067, eff. 2026-10-16) ---------- */
FDB_M("clobazam", {
  inn: "Clobazam", atc: "N05BA09", cls: "1,5-benzodiazepine antiseizure medicine",
  linked: [["Lennox-Gastaut syndrome (adjunct, 2 years and over)", "[FDA]", "epilepsy-child"], ["Epilepsy add-on (Bhutan NEML)", "[BT-NEML]", "epilepsy-adult"]],
  forms: ["Tablets 10 and 20 mg (scored); oral suspension 2.5 mg/mL [FDA].", "Bhutan: 5 mg tablet [BT-NEML]."],
  moa: "Enhances GABA-A transmission at the benzodiazepine site [FDA].",
  pk: ["Steady state takes 5 days (clobazam) and 9 days (active metabolite) — titrate no faster than weekly [FDA].", "Alcohol raises levels by about 50% [FDA]."],
  ind: { adult: ["Adjunctive treatment of seizures in Lennox-Gastaut syndrome [FDA]."], paed: ["2 years and over [FDA]."] },
  adult: [["30 kg or less", "5 mg daily, then 10 mg from day 7, 20 mg from day 14 [FDA]."], ["Over 30 kg", "10 mg daily, then 20 mg from day 7, 40 mg from day 14 [FDA]."], ["Doses above 5 mg/day", "Give in 2 divided doses [FDA]."]],
  paed: { tiers: ["Same weight bands from 2 years [FDA]."], transition: "Same bands [FDA].", calcNote: "Starting dose by weight band." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Mild–moderate: start 5 mg/day and titrate to half the usual target; severe: no data [FDA].", preg: "Neonatal sedation and withdrawal [FDA].", other: "Elderly and CYP2C19 poor metabolisers: lower starting dose and slower titration [FDA]. Taper to stop [FDA]." },
  tox: { human: "Drowsiness to coma, ataxia, hypotonia, respiratory depression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; flumazenil may precipitate seizures [NEP]." },
  contra: ["Hypersensitivity to clobazam or ingredients [FDA]."],
  ae: { common: ["Somnolence, fever, lethargy, drooling, constipation, aggression [NEP]."], serious: ["Respiratory depression with opioids (boxed) [FDA]", "Abuse and dependence (boxed) [FDA]", "SJS/TEN; DRESS [FDA]", "Suicidal thoughts [FDA]"] },
  monitor: ["Sedation; skin; mood [FDA]."],
  local: { neml: "Clobazam 5 mg tablet [BT-NEML].", strengths: "5 mg tablet.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "clobazam", indication_id: "s", label: "30 kg or less — start 5 mg daily (max 20 mg/day)", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: 30.0001 }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Day 7: 10 mg/day; day 14: 20 mg/day, in 2 doses"], sources: ["FDA"] },
    { drug: "clobazam", indication_id: "l", label: "Over 30 kg — start 5 mg twice daily (max 40 mg/day)", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: 30.0001, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 40, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Day 7: 20 mg/day; day 14: 40 mg/day, in 2 doses"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ONFI (clobazam) tablets and oral suspension — Lundbeck, label effective 2026-10-16", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=de03bd69-2dca-459c-93b4-541fd3e9571c"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Benzodiazepine antiseizure add-on for Lennox-Gastaut; titrate weekly.",
    boxedTitle: "Risks from concomitant use with opioids; abuse, misuse, and addiction; and dependence and withdrawal reactions",
    boxed: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of these drugs for patients for whom alternative treatment options are inadequate. Limit dosages and durations to the minimum required. Follow patients for signs and symptoms of respiratory depression and sedation. The use of benzodiazepines, including ONFI, exposes users to risks of abuse, misuse, and addiction, which can lead to overdose or death. Abuse and misuse of benzodiazepines commonly involve concomitant use of other medications, alcohol, and/or illicit substances, which is associated with an increased frequency of serious adverse outcomes. Before prescribing ONFI and throughout treatment, assess each patient’s risk for abuse, misuse, and addiction. The continued use of benzodiazepines, including ONFI, may lead to clinically significant physical dependence. The risks of dependence and withdrawal increase with longer treatment duration and higher daily dose. Abrupt discontinuation or rapid dosage reduction of ONFI after continued use may precipitate acute withdrawal reactions, which can be life-threatening. To reduce the risk of withdrawal reactions, use a gradual taper to discontinue ONFI or reduce the dosage.",
    adult: [
      { ind: "LGS, over 30 kg", text: "10 mg/day (5 mg twice daily) → 20 mg/day at day 7 → 40 mg/day at day 14.", calc: ["l"] },
      { ind: "LGS, 30 kg or less", text: "5 mg/day → 10 mg/day at day 7 → 20 mg/day at day 14.", calc: ["s"] }
    ],
    child: [{ ind: "2 years and over", text: "Same weight-band schedule.", calc: ["s", "l"] }] }
});

/* ---------- CLOBETASOL (FDA clobetasol propionate 0.05% ointment ANDA211295; BYQLOVI eye suspension NDA218158; original TEMOVATE) ---------- */
FDB_M("clobetasol", {
  inn: "Clobetasol", atc: "D07AD01", cls: "Super-high-potency topical corticosteroid (class I)",
  linked: [["Psoriasis and severe steroid-responsive dermatoses", "[FDA]", ""], ["Post-operative eye inflammation (0.05% eye suspension)", "[FDA]", ""]],
  forms: ["Cream, ointment, gel, solution, foam, shampoo 0.05% [FDA].", "Eye suspension 0.05% [FDA].", "Bhutan: 0.05% cream (regional referral hospitals) [BT-NEML]."],
  moa: "Anti-inflammatory, antipruritic, vasoconstrictive glucocorticoid [FDA].",
  pk: ["Systemic absorption can suppress the HPA axis [FDA]."],
  ind: { adult: ["Short-term treatment of moderate–severe corticosteroid-responsive dermatoses [FDA].", "Post-operative inflammation and pain after eye surgery [FDA]."], paed: ["Not recommended under 12 years (skin) [FDA]."] },
  adult: [["Skin", "Thin layer twice daily; maximum 2 consecutive weeks and not more than 50 g per week; no occlusion [FDA]."], ["Eye (0.05%)", "1 drop twice daily from the day after surgery for 2 weeks [FDA]."]],
  paed: { tiers: ["Under 12 years: not recommended [FDA]."], transition: "From 12 years [FDA].", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Use only if benefit justifies risk [FDA].", other: "Not on face, groin or axillae; not for rosacea or perioral dermatitis [FDA]. Eye: check IOP if used 10 days or more [FDA]." },
  tox: { human: "Systemic absorption: HPA suppression, Cushing's, hyperglycaemia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Withdraw gradually [NEP]." },
  contra: ["Hypersensitivity to any component [FDA].", "Eye: most active viral corneal/conjunctival disease (herpes simplex keratitis, vaccinia, varicella), mycobacterial or fungal eye infection [FDA]."],
  ae: { common: ["Burning, itching, irritation, skin atrophy, striae, folliculitis [NEP]."], serious: ["HPA axis suppression [FDA]", "Eye: raised IOP, cataract, delayed healing, infection [FDA]"] },
  monitor: ["Amount used per week; skin atrophy; IOP for eye use [FDA]."],
  local: { neml: "Clobetasol propionate 0.05% cream (regional referral hospitals) [BT-NEML].", strengths: "0.05% cream.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Clobetasol propionate ointment USP 0.05% (ANDA211295), label effective 2026-08-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=032f1f4e-1f1c-409a-8fac-6449ee543caa"], ["FDA", "BYQLOVI (clobetasol propionate ophthalmic suspension) 0.05% — Harrow Eye, label effective 2026-01-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=31ca5a0f-812e-491d-aa00-d8ed424ba322"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Strongest topical steroid — 2 weeks and 50 g a week at most.",
    adult: [
      { ind: "Severe dermatoses, psoriasis", text: "Thin layer twice daily for up to 2 weeks; max 50 g/week; not on face or folds." },
      { ind: "After eye surgery (0.05% drops)", text: "1 drop twice daily for 2 weeks." }
    ],
    child: [{ ind: "Under 12 years", text: "Not recommended." }] }
});

/* ---------- CLOCORTOLONE (FDA clocortolone pivalate 0.1% cream, Sun, ANDA206370; original CLODERM) ---------- */
FDB_M("clocortolone", {
  inn: "Clocortolone", atc: "D07AB21", cls: "Medium-potency topical corticosteroid",
  linked: [["Steroid-responsive dermatoses (eczema, dermatitis)", "[FDA]", ""]],
  forms: ["Cream 0.1% [FDA]."],
  moa: "Topical anti-inflammatory glucocorticoid [NEP].",
  pk: ["Absorption increases with occlusion and inflamed skin [NEP]."],
  ind: { adult: ["Inflammatory and pruritic corticosteroid-responsive dermatoses [FDA]."], paed: ["Use the least amount; children absorb more [NEP]."] },
  adult: [["Dermatoses", "Apply sparingly three times a day and rub in gently; occlusion may be used for psoriasis or resistant cases [FDA]."]],
  paed: { tiers: ["Use the smallest effective amount [NEP]."], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Stop occlusion if infection develops [FDA]." },
  tox: { human: "Systemic effects if absorbed in sufficient amounts [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Reduce use [NEP]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Burning, itching, irritation, dryness, folliculitis [FDA]."], serious: ["Skin atrophy, striae, secondary infection [FDA]"] },
  monitor: ["Skin [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Clocortolone pivalate cream USP 0.1% — Sun Pharmaceutical (ANDA206370), label effective 2026-07-14", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=88d9a7cf-31b5-4b85-9827-0ecce328e6a0"]],
  dose: { tagline: "Medium-potency steroid cream applied three times a day.",
    adult: [{ ind: "Dermatoses", text: "Apply sparingly three times daily." }],
    child: [{ ind: "Children", text: "Smallest effective amount." }] }
});

/* ---------- CLOFARABINE (FDA clofarabine injection, Novadoz, ANDA209775, eff. 2026-08-24; original CLOLAR) ---------- */
FDB_M("clofarabine", {
  inn: "Clofarabine", atc: "L01BB06", cls: "Purine nucleoside metabolic inhibitor",
  linked: [["Relapsed/refractory ALL in children and young adults (1–21 years)", "After ≥2 prior regimens [FDA]", ""]],
  forms: ["Injection 1 mg/mL, 20 mL vial [FDA]."],
  moa: "Inhibits DNA polymerase and ribonucleotide reductase [NEP].",
  pk: ["Terminal half-life about 5 h; mostly excreted by the kidneys [FDA]."],
  ind: { adult: ["Patients up to 21 years only [FDA]."], paed: ["1–21 years with relapsed or refractory ALL after at least two prior regimens [FDA]."] },
  adult: [["Young adults up to 21 years", "As paediatric dose [FDA]; the 52 mg/m² dose was not tolerated in older adults [FDA]."]],
  paed: { tiers: ["52 mg/m² IV over 2 hours daily for 5 consecutive days; repeat every 2–6 weeks [FDA].", "Give IV fluids, allopurinol and urine alkalinisation through the 5 days (tumour lysis) [FDA].", "Stop if hypotension develops during the 5 days [FDA]."], transition: "Up to 21 years [FDA].", calcNote: "BSA dosing; needs height." },
  adj: { renal: "CrCl 30–60: reduce the dose by 50%; under 30: insufficient information [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Moderately emetogenic; consider steroid prophylaxis for capillary leak/SIRS [FDA]. Monitor BP and heart [FDA]." },
  tox: { human: "70 mg/m²/day × 5: grade 4 hyperbilirubinaemia, vomiting, rash [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Vomiting, nausea, diarrhoea, febrile neutropenia, fever, headache, rash, pruritus, raised liver tests [NEP]."], serious: ["Myelosuppression; serious infections [FDA]", "Tumour lysis; capillary leak / SIRS [FDA]", "Hepatotoxicity; kidney toxicity; enterocolitis [FDA]"] },
  monitor: ["Blood counts, liver and kidney tests, BP, fluid status daily during the 5 days [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "clofarabine", indication_id: "std", label: "52 mg/m² IV daily × 5 days (1–21 years)", route: "IV", population: { min_age_months: 12, max_age_months: 264, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 52, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 1, unit: "mg/mL" }], infusion: { duration_h: 2 }, rounding: "Nearest 0.1 mg", renal: [{ crcl_min: 30, crcl_max: 60, action: "reduce_dose", factor: 0.5, interval_h: 24 }, { crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "insufficient information below CrCl 30" }], flags: ["5 days per cycle"], sources: ["FDA"] }],
  sources: [["FDA", "Clofarabine injection — Novadoz (ANDA209775), label effective 2026-08-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=26b2de66-6518-49ab-820e-492454cbc873"]],
  dose: { tagline: "Salvage chemotherapy for relapsed childhood ALL.",
    adult: [{ ind: "Up to 21 years", text: "52 mg/m² IV over 2 h daily × 5 days.", calc: ["std"] }],
    child: [{ ind: "Relapsed/refractory ALL (1–21 years)", text: "52 mg/m² IV over 2 h daily for 5 days, every 2–6 weeks; halve if CrCl 30–60.", calc: ["std"] }] }
});

/* ---------- CLOFAZIMINE (FDA LAMPRENE, Novartis, NDA019500, eff. 2026-08-17) ---------- */
FDB_M("clofazimine", {
  inn: "Clofazimine", atc: "J04BA01", cls: "Riminophenazine antimycobacterial",
  linked: [["Leprosy — multibacillary (lepromatous)", "WHO MDT component [FDA]", ""], ["Erythema nodosum leprosum", "[FDA]", ""], ["MDR-TB (Bhutan NEML)", "[BT-NEML]", "tb-adult"]],
  forms: ["Soft capsules 50 mg and 100 mg [FDA].", "Bhutan: 50 mg and 100 mg capsules; 100 mg for MDR-TB only [BT-NEML]."],
  moa: "Binds mycobacterial DNA; anti-inflammatory effect in ENL [NEP].",
  pk: ["Very long half-life (about 25 days); take with meals [FDA]."],
  ind: { adult: ["Lepromatous leprosy (including dapsone-resistant and with ENL), always in combination [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Dapsone-sensitive lepromatous leprosy", "100 mg daily with meals with two other anti-leprosy drugs for at least 2 years [FDA]."], ["Dapsone-resistant", "100 mg daily with one or more other agents for 3 years [FDA]."], ["ENL", "100–200 mg daily for up to 3 months, tapering to 100 mg as soon as possible [FDA]."]],
  paed: { tiers: ["Not established in primary source (WHO paediatric MDT blister packs are used in practice) [NEP]."], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Pink-to-brownish-black skin and body fluid discolouration [NEP]. QT prolongation — ECG with other QT drugs (bedaquiline) [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Gastric emptying; supportive [FDA]." },
  contra: ["Hypersensitivity to clofazimine or excipients [FDA]."],
  ae: { common: ["Skin and conjunctival discolouration, dry skin, abdominal pain, nausea, diarrhoea [NEP]."], serious: ["QT prolongation [NEP]", "Crystal deposition: severe abdominal pain, bowel obstruction, splenic infarction [NEP]", "Depression from skin discolouration [NEP]"] },
  monitor: ["ECG; abdominal symptoms [NEP]."],
  local: { neml: "Clofazimine 50 mg and 100 mg capsules (100 mg for MDR-TB only) [BT-NEML].", strengths: "50 mg, 100 mg capsules.", stg: "Bhutan STG 2024: daily dapsone and clofazimine in leprosy MDT [BT-STG]." },
  calc: [{ drug: "clofazimine", indication_id: "std", label: "Leprosy — 100 mg once daily with meals", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 50, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["ENL: 100–200 mg/day for up to 3 months"], sources: ["FDA"] }],
  sources: [["FDA", "LAMPRENE (clofazimine) capsules — Novartis, label effective 2026-08-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2e07448f-f888-4747-80ab-570c1b621250"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Leprosy multidrug therapy component and MDR-TB drug.",
    adult: [
      { ind: "Lepromatous leprosy", text: "100 mg daily with meals, combined with other drugs, for at least 2 years.", calc: ["std"] },
      { ind: "Erythema nodosum leprosum", text: "100–200 mg daily up to 3 months, then 100 mg." }
    ],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CLOMIFENE (US: clomiphene; FDA clomiphene citrate tablets, Accord, ANDA219406; original CLOMID) ---------- */
FDB_M("clomifene", {
  inn: "Clomifene", atc: "G03GB02", cls: "Selective oestrogen receptor modulator (ovulation inducer)",
  linked: [["Anovulatory infertility (e.g. PCOS)", "[FDA]", "pcos-adult"]],
  forms: ["Tablets 50 mg [FDA].", "Bhutan: 50 mg tablet [BT-NEML]."],
  moa: "Blocks hypothalamic oestrogen feedback, raising FSH/LH [NEP].",
  pk: ["Ovulation usually 5–10 days after a course [FDA]."],
  ind: { adult: ["Ovulatory dysfunction in women wishing to conceive [FDA]."], paed: ["Not applicable. [NEP]"] },
  adult: [["First course", "50 mg daily for 5 days [FDA]."], ["If no ovulation", "100 mg daily for 5 days, from 30 days after the previous course; do not exceed 100 mg/day for 5 days [FDA]."], ["Overall", "Most who will ovulate do so within the first course; usually no more than 3 courses [NEP]."]],
  paed: { tiers: ["Not applicable. [NEP]"], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Contraindicated in liver disease or history of liver dysfunction [NEP].", preg: "Contraindicated in pregnancy [FDA].", other: "Exclude pregnancy, ovarian enlargement and cysts before each course [FDA]. Lower dose in PCOS (OHSS risk) [FDA]." },
  tox: { human: "Nausea, vomiting, flushes, visual blurring, scotomata, ovarian enlargement [FDA].", animal: "Oral LD50: mice 1700 mg/kg; rats 5750 mg/kg [FDA].", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to clomifene [FDA].", "Pregnancy [FDA].", "Liver disease; abnormal uterine bleeding; ovarian cysts (not PCOS); uncontrolled thyroid/adrenal disease; pituitary tumour [NEP]."],
  ae: { common: ["Ovarian enlargement, hot flushes, abdominal discomfort, nausea, breast tenderness, headache [NEP]."], serious: ["Ovarian hyperstimulation syndrome [FDA]", "Visual symptoms — stop and examine [FDA]", "Multiple pregnancy [NEP]"] },
  monitor: ["Ovulation (BBT, progesterone); pelvic exam/ultrasound before each course [FDA]."],
  local: { neml: "Clomifene 50 mg tablet (supplied to district hospitals with an obstetrician) [BT-NEML].", strengths: "50 mg tablet.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "clomifene", indication_id: "std", label: "50 mg daily × 5 days (then 100 mg if no ovulation)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 50, unit: "mg", per: "dose", value_max: 100 }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, max_daily: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["5 days per course"], sources: ["FDA"] }],
  sources: [["FDA", "Clomiphene citrate tablets USP — Accord Healthcare (ANDA219406), label effective 2026-11-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=79f64995-7425-44c6-9f44-f7d20daeff65"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Oral ovulation inducer, 5-day courses.",
    adult: [{ ind: "Anovulatory infertility", text: "50 mg daily for 5 days; if no ovulation, 100 mg daily for 5 days in the next cycle (maximum).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not applicable." }] }
});

/* ---------- CLOMIPRAMINE (FDA ANAFRANIL, SpecGx, NDA019906, eff. 2024-11-26) ---------- */
FDB_M("clomipramine", {
  inn: "Clomipramine", atc: "N06AA04", cls: "Tricyclic antidepressant (serotonergic)",
  linked: [["Obsessive-compulsive disorder", "[FDA]", ""]],
  forms: ["Capsules 25, 50, 75 mg [FDA]."],
  moa: "Inhibits serotonin (and noradrenaline) reuptake [NEP].",
  pk: ["Half-life about 32 h (clomipramine), longer for desmethylclomipramine; steady state 2–3 weeks [FDA]."],
  ind: { adult: ["Obsessions and compulsions in OCD [FDA]."], paed: ["OCD, 10 years and over [NEP]."] },
  adult: [["OCD", "Start 25 mg daily with meals; increase to about 100 mg over 2 weeks; then gradually up to maximum 250 mg/day; after titration may give once at bedtime [FDA]."]],
  paed: { tiers: ["Start 25 mg daily; first 2 weeks up to the smaller of 3 mg/kg or 100 mg/day; then up to the smaller of 3 mg/kg or 200 mg/day [FDA]."], transition: "Adult maximum 250 mg [FDA].", calcNote: "Maximum daily dose by weight in children." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Caution [NEP].", preg: "Neonatal withdrawal with late use [NEP].", other: "Seizure risk rises above 250 mg/day [NEP]. Avoid with MAOIs [FDA]." },
  tox: { human: "Arrhythmia, QRS widening, hypotension, seizures, coma; deaths reported [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Hospital ECG monitoring; sodium bicarbonate for QRS widening; poison centre [NEP]." },
  contra: ["Hypersensitivity to clomipramine or other tricyclics [FDA].", "With or within 14 days of MAOIs (including linezolid, IV methylene blue) [FDA].", "Acute recovery period after myocardial infarction [NEP]."],
  ae: { common: ["Dry mouth, somnolence, tremor, dizziness, constipation, sweating, ejaculatory failure, weight gain [FDA]."], serious: ["Suicidality (boxed) [FDA]", "Seizures [NEP]", "Serotonin syndrome [FDA]", "Arrhythmia, orthostatic hypotension [NEP]"] },
  monitor: ["Mood/suicidality; ECG in heart disease; seizure history [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "clomipramine", indication_id: "adult", label: "OCD — start 25 mg daily (max 250 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 250, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 25, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: ["About 100 mg/day by 2 weeks"], sources: ["FDA"] },
    { drug: "clomipramine", indication_id: "max", label: "Child — MAXIMUM 3 mg/kg/day (not above 200 mg)", route: "PO", population: { min_age_months: 120, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 3, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 25, unit: "mg/cap" }], rounding: "Do not exceed", renal: [], flags: ["Upper limit, not a starting dose; first 2 weeks not above 100 mg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ANAFRANIL (clomipramine) capsules — SpecGx, label effective 2024-11-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4074b555-7635-41a9-809d-fae3b3610059"]],
  dose: { tagline: "Serotonergic tricyclic for OCD; titrate slowly.",
    boxedTitle: "Suicidality and antidepressant drugs",
    boxed: "Antidepressants increased the risk compared to placebo of suicidal thinking and behavior (suicidality) in children, adolescents, and young adults in short-term studies of major depressive disorder (MDD) and other psychiatric disorders. Anyone considering the use of clomipramine hydrochloride or any other antidepressant in a child, adolescent, or young adult must balance this risk with the clinical need. Short-term studies did not show an increase in the risk of suicidality with antidepressants compared to placebo in adults beyond age 24; there was a reduction in risk with antidepressants compared to placebo in adults aged 65 and older. Depression and certain other psychiatric disorders are themselves associated with increases in the risk of suicide. Patients of all ages who are started on antidepressant therapy should be monitored appropriately and observed closely for clinical worsening, suicidality, or unusual changes in behavior. Families and caregivers should be advised of the need for close observation and communication with the prescriber. Clomipramine hydrochloride is not approved for use in pediatric patients except for patients with obsessive compulsive disorder (OCD).",
    adult: [{ ind: "OCD", text: "25 mg daily, rising to about 100 mg over 2 weeks, then up to 250 mg/day.", calc: ["adult"] }],
    child: [{ ind: "OCD (children/adolescents)", text: "25 mg daily; not above 3 mg/kg or 100 mg in the first 2 weeks, then not above 3 mg/kg or 200 mg.", calc: ["max"] }] }
});

/* ---------- CLONAZEPAM (FDA clonazepam tablets ANDA077147, eff. 2026-11-12; original KLONOPIN) ---------- */
FDB_M("clonazepam", {
  inn: "Clonazepam", atc: "N03AE01", cls: "Benzodiazepine antiseizure / anxiolytic",
  linked: [["Myoclonic, akinetic, absence and Lennox-Gastaut seizures", "[FDA]", "epilepsy-child"], ["Panic disorder", "[FDA]", ""]],
  forms: ["Tablets 0.5, 1, 2 mg; orally disintegrating tablets [FDA].", "Bhutan: 0.5 mg tablet [BT-NEML]."],
  moa: "Enhances GABA-A transmission [NEP].",
  pk: ["Half-life 30–40 h [FDA]."],
  ind: { adult: ["Seizure disorders (alone or adjunct); panic disorder [FDA]."], paed: ["Seizures in infants and children [FDA]."] },
  adult: [["Seizures", "Start not more than 1.5 mg/day in 3 doses; increase by 0.5–1 mg every 3 days; maximum 20 mg/day [FDA]."], ["Panic disorder", "0.25 mg twice daily; after 3 days 1 mg/day (target); up to 4 mg/day in some [FDA]."]],
  paed: { tiers: ["Up to 10 years or 30 kg: start 0.01–0.03 mg/kg/day (not above 0.05 mg/kg/day) in 2–3 doses; increase by not more than 0.25–0.5 mg every 3 days to 0.1–0.2 mg/kg/day maintenance [FDA]."], transition: "Adult dosing over 10 years / 30 kg [FDA].", calcNote: "mg/kg/day ÷ 3 for small children." },
  adj: { renal: "Metabolites renally excreted — caution [NEP].", hepatic: "Contraindicated in significant liver disease [FDA].", preg: "Neonatal sedation and withdrawal [NEP].", other: "Taper to stop — abrupt withdrawal can cause status epilepticus [FDA]. Loss of effect with time in some [FDA]." },
  tox: { human: "Drowsiness to coma, ataxia, hypotonia, respiratory depression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; flumazenil may provoke seizures in epilepsy [NEP]." },
  contra: ["Sensitivity to benzodiazepines [FDA].", "Significant liver disease [FDA].", "Acute narrow-angle glaucoma [FDA]."],
  ae: { common: ["Somnolence, ataxia, behaviour problems, hypersalivation in children [NEP]."], serious: ["Respiratory depression with opioids (boxed) [FDA]", "Abuse and dependence (boxed) [FDA]", "Suicidal thoughts [NEP]"] },
  monitor: ["Sedation; seizure control; liver tests and blood counts in long-term use [NEP]."],
  local: { neml: "Clonazepam 0.5 mg tablet [BT-NEML].", strengths: "0.5 mg tablet.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "clonazepam", indication_id: "child", label: "Child up to 10 years/30 kg — start 0.01–0.03 mg/kg/day ÷ every 8 h", route: "PO", population: { min_age_months: null, max_age_months: 120, min_weight_kg: null, max_weight_kg: 30.0001 }, basis: "mg_per_kg", dose: { value: 0.01, unit: "mg", per: "day", value_max: 0.03 }, interval_h: 8, divided_doses: 3, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 0.5, unit: "mg/tab" }], rounding: "Quarter tablets / liquid", renal: [], flags: ["Never above 0.05 mg/kg/day to start; maintenance 0.1–0.2 mg/kg/day"], sources: ["FDA"] },
    { drug: "clonazepam", indication_id: "adult", label: "Adult seizures — start 0.5 mg three times daily (max 20 mg/day)", route: "PO", population: { min_age_months: 120, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "clonazepam", indication_id: "panic", label: "Panic disorder — 0.25 mg twice daily (target 1 mg/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.25, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 4, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.5, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Clonazepam tablets USP (ANDA077147), label effective 2026-11-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1ce88d2c-70f7-427b-8787-4afd9ce6f71c"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Long-acting benzodiazepine for myoclonic/absence seizures and panic disorder.",
    boxedTitle: "Risks from concomitant use with opioids; abuse, misuse, and addiction; and dependence and withdrawal reactions",
    boxed: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of these drugs for patients for whom alternative treatment options are inadequate. Limit dosages and durations to the minimum required. Follow patients for signs and symptoms of respiratory depression and sedation. The use of benzodiazepines, including clonazepam tablets, exposes users to risks of abuse, misuse, and addiction, which can lead to overdose or death. Abuse and misuse of benzodiazepines commonly involve concomitant use of other medications, alcohol, and/or illicit substances, which is associated with an increased frequency of serious adverse outcomes. Before prescribing clonazepam tablets and throughout treatment, assess each patient’s risk for abuse, misuse, and addiction. The continued use of benzodiazepines, including clonazepam tablets, may lead to clinically significant physical dependence. The risks of dependence and withdrawal increase with longer treatment duration and higher daily dose. Abrupt discontinuation or rapid dosage reduction of clonazepam tablets after continued use may precipitate acute withdrawal reactions, which can be life-threatening. To reduce the risk of withdrawal reactions, use a gradual taper to discontinue clonazepam tablets or reduce the dosage.",
    adult: [
      { ind: "Seizures", text: "Up to 1.5 mg/day in 3 doses to start; increase 0.5–1 mg every 3 days; max 20 mg/day.", calc: ["adult"] },
      { ind: "Panic disorder", text: "0.25 mg twice daily, then 1 mg/day after 3 days (max 4 mg/day).", calc: ["panic"] }
    ],
    child: [{ ind: "Up to 10 years or 30 kg", text: "0.01–0.03 mg/kg/day in 2–3 doses; build slowly to 0.1–0.2 mg/kg/day.", calc: ["child"] }] }
});

/* ---------- CLONIDINE (FDA clonidine HCl tablets ANDA070974 + transdermal system NDA018891; original CATAPRES) ---------- */
FDB_M("clonidine", {
  inn: "Clonidine", atc: "C02AC01", cls: "Central alpha-2 adrenergic agonist",
  linked: [["Hypertension", "[FDA]", "htn-adult"], ["ADHD (ER tablets); opioid withdrawal symptoms (off-label)", "[NEP]", ""]],
  forms: ["Tablets 0.1, 0.2, 0.3 mg [FDA].", "Transdermal patch 0.1, 0.2, 0.3 mg/day (weekly) [FDA].", "ER tablets 0.1 mg (ADHD); epidural injection [NEP]."],
  moa: "Stimulates central alpha-2 receptors, reducing sympathetic outflow [NEP].",
  pk: ["Elimination half-life 12–16 h; up to 41 h in severe kidney impairment [FDA].", "Minimal removal by haemodialysis — no supplement needed [FDA]."],
  ind: { adult: ["Hypertension, alone or with other drugs [FDA]."], paed: ["Not established for hypertension in primary source [NEP]."] },
  adult: [["Oral", "Start 0.1 mg twice daily (morning and bedtime); increase by 0.1 mg/day weekly; usual 0.2–0.6 mg/day in divided doses; maximum effective 2.4 mg/day (rarely used) [FDA]."], ["Patch", "Start 0.1 mg/day patch once every 7 days on hairless upper arm or chest; increase after 1–2 weeks if needed; rotate sites [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Lower starting dose; monitor carefully [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Never stop abruptly — taper over 2–4 days to avoid rebound hypertension [NEP]. Elderly: lower initial dose [FDA]. Remove patch before MRI/cardioversion [NEP]." },
  tox: { human: "Early hypertension then hypotension, bradycardia, respiratory depression, hypothermia, miosis, drowsiness; as little as 0.1 mg toxic in children [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; remove patch; atropine for bradycardia; naloxone may help [NEP]." },
  contra: ["Hypersensitivity to clonidine or patch components [FDA]."],
  ae: { common: ["Dry mouth, drowsiness, fatigue, dizziness, constipation, sedation; patch skin reactions [NEP]."], serious: ["Rebound hypertension on abrupt withdrawal [NEP]", "Bradycardia, AV block [NEP]"] },
  monitor: ["BP and heart rate [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "clonidine", indication_id: "po", label: "Hypertension — start 0.1 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.1, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 2.4, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.1, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Kidney impairment: consider a lower starting dose", flags: ["Usual 0.2–0.6 mg/day"], sources: ["FDA"] }],
  sources: [["FDA", "Clonidine HCl tablets USP (ANDA070974), label effective 2026-09-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=00c6d67a-bb11-4884-9eeb-4e1b8701a08b"], ["FDA", "Clonidine transdermal system USP — TruPharma (NDA018891), label effective 2026-10-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05d520bf-3ab7-4337-9f38-4418e5e7e1e9"]],
  dose: { tagline: "Central alpha-2 agonist antihypertensive; never stop suddenly.",
    adult: [
      { ind: "Hypertension (oral)", text: "0.1 mg twice daily; increase by 0.1 mg/day weekly; usual 0.2–0.6 mg/day.", calc: ["po"] },
      { ind: "Hypertension (patch)", text: "0.1 mg/day patch weekly; titrate after 1–2 weeks." }
    ],
    child: [{ ind: "Children", text: "Not established in the label for hypertension." }] }
});

/* ---------- CLOPIDOGREL (FDA clopidogrel tablets ANDA076274, eff. 2026-11-11; original PLAVIX) ---------- */
FDB_M("clopidogrel", {
  inn: "Clopidogrel", atc: "B01AC04", cls: "P2Y12 platelet inhibitor (thienopyridine)",
  linked: [["Acute coronary syndrome (NSTE-ACS and STEMI)", "[FDA]", "acs-adult"], ["Recent stroke or MI; peripheral artery disease", "[FDA]", "stroke-adult"]],
  forms: ["Tablets 75 mg and 300 mg [FDA].", "Bhutan: 75 mg tablet [BT-NEML]."],
  moa: "Prodrug; active metabolite irreversibly blocks platelet P2Y12 receptors [FDA].",
  pk: ["Activated mainly by CYP2C19 [FDA].", "Platelet effect lasts the life of the platelet (7–10 days) [FDA]."],
  ind: { adult: ["ACS (NSTE-ACS and STEMI); recent MI, recent stroke or established PAD [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ACS", "300 mg loading dose, then 75 mg once daily (with aspirin) [FDA]."], ["Recent MI, stroke, PAD", "75 mg once daily, no loading dose [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "No adjustment [NEP].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Avoid omeprazole/esomeprazole (CYP2C19 inhibition) [FDA]. Stop 5 days before elective surgery if possible [FDA]." },
  tox: { human: "Bleeding [FDA].", animal: "Single oral 1500–2000 mg/kg lethal to mice and rats; 3000 mg/kg to baboons [FDA].", manage: "Platelet transfusion may restore clotting [FDA]." },
  contra: ["Active pathological bleeding (peptic ulcer, intracranial haemorrhage) [FDA].", "Hypersensitivity to clopidogrel [FDA]."],
  ae: { common: ["Bleeding, bruising, dyspepsia, diarrhoea [NEP]."], serious: ["Major bleeding [FDA]", "Thrombotic thrombocytopenic purpura (rare) [FDA]", "Reduced effect in CYP2C19 poor metabolisers (boxed) [FDA]"] },
  monitor: ["Signs of bleeding; full blood count if TTP suspected [NEP]."],
  local: { neml: "Clopidogrel 75 mg tablet [BT-NEML].", strengths: "75 mg tablet.", stg: "Listed with aspirin and warfarin as antithrombotics in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "clopidogrel", indication_id: "load", label: "ACS — 300 mg loading dose once", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 75, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "clopidogrel", indication_id: "maint", label: "Maintenance — 75 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 75, max_daily: 75, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 75, unit: "mg/tab" }], rounding: "Whole tablet", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "Clopidogrel tablets USP (ANDA076274), label effective 2026-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4cd07a3c-9673-4aa0-b76a-d79df2399ee1"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "P2Y12 antiplatelet for ACS, stroke and PAD.",
    boxedTitle: "Diminished antiplatelet effect in patients with two loss-of-function alleles of the CYP2C19 gene",
    boxed: "Effectiveness of clopidogrel tablets depends on conversion to an active metabolite by the cytochrome P450 (CYP) system, principally CYP2C19. Tests are available to identify patients who are CYP2C19 poor metabolizers. Consider use of another platelet P2Y12 inhibitor in patients identified as CYP2C19 poor metabolizers.",
    adult: [
      { ind: "Acute coronary syndrome", text: "300 mg once, then 75 mg daily with aspirin.", calc: ["load", "maint"] },
      { ind: "Recent MI, stroke, PAD", text: "75 mg once daily.", calc: ["maint"] }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CLOTRIMAZOLE (FDA topical solution 1% ANDA216569; troche 10 mg ANDA076387; vaginal per Bhutan) ---------- */
FDB_M("clotrimazole", {
  inn: "Clotrimazole", atc: "G01AF02", cls: "Imidazole antifungal (topical, oral troche, vaginal)",
  linked: [["Vulvovaginal candidiasis", "Pessary [BT-STG]", ""], ["Oropharyngeal candidiasis", "Troche [FDA]", "hiv-adult"], ["Skin candidiasis, tinea, pityriasis versicolor", "1% topical [FDA]", ""]],
  forms: ["Cream/solution 1% [FDA].", "Troche (lozenge) 10 mg [FDA].", "Vaginal tablet/pessary 100 mg, 200 mg, 500 mg; vaginal cream [NEP].", "Bhutan: 100 mg vaginal tablet/pessary, pack of 6 with applicator [BT-NEML]."],
  moa: "Inhibits fungal ergosterol synthesis [NEP].",
  pk: ["Minimal systemic absorption [NEP]."],
  ind: { adult: ["Skin candidiasis, tinea versicolor, tinea pedis/cruris/corporis (1%) [FDA].", "Oropharyngeal candidiasis treatment and prophylaxis (troche) [FDA].", "Vulvovaginal candidiasis (vaginal) [NEP]."], paed: ["Troche from 3 years [NEP]."] },
  adult: [["Skin (1%)", "Massage into affected and surrounding skin twice daily; review if no improvement by 4 weeks [FDA]."], ["Oral thrush (troche)", "1 troche (10 mg) dissolved slowly in the mouth five times a day for 14 days [FDA]."], ["Prophylaxis (immunocompromised)", "1 troche three times daily [FDA]."], ["Vaginal candidiasis", "Bhutan STG: 200 mg pessary at night for 3 nights [BT-STG]; 100 mg pessary nightly for 6 nights [NEP]."]],
  paed: { tiers: ["Troche: 3 years and over, as adults [NEP]."], transition: "—", calcNote: "Topical/local — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Troche: check liver tests in long use [NEP].", preg: "Vaginal clotrimazole is used in pregnancy (7-day course) [NEP].", other: "Vaginal products can weaken latex condoms [NEP]." },
  tox: { human: "Unlikely to be serious with topical use [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Local burning, irritation; troche: nausea, raised liver enzymes [NEP]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Response [NEP]."],
  local: { neml: "Clotrimazole 100 mg vaginal tablet/pessary, pack of 6 with applicator [BT-NEML].", strengths: "100 mg pessary.", stg: "Bhutan STG 2024: vulvovaginal candidiasis — clotrimazole pessary 200 mg at night for 3 nights [BT-STG]." },
  calc: [],
  sources: [["FDA", "Clotrimazole topical solution USP 1% — ScieGen (ANDA216569), label effective 2026-04-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=15368c2a-572f-41fb-a3a1-7b1eb842faa8"], ["FDA", "Clotrimazole troche 10 mg — Hikma (ANDA076387), label effective 2021-07-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0bc4b876-ddee-4f03-b44f-544348739a26"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Topical, oral-lozenge and vaginal imidazole antifungal.",
    adult: [
      { ind: "Vaginal candidiasis", text: "200 mg pessary at night for 3 nights (Bhutan STG), or 100 mg for 6 nights." },
      { ind: "Oral thrush", text: "10 mg troche five times daily for 14 days." },
      { ind: "Skin", text: "1% twice daily for up to 4 weeks." }
    ],
    child: [{ ind: "Children", text: "Skin 1% twice daily; troche from 3 years." }] }
});

/* ---------- CLOZAPINE (FDA VERSACLOZ oral suspension, NDA203479, eff. 2026-09-06; original CLOZARIL) ---------- */
FDB_M("clozapine", {
  inn: "Clozapine", atc: "N05AH02", cls: "Atypical antipsychotic (dibenzodiazepine)",
  linked: [["Treatment-resistant schizophrenia", "[FDA]", "psychosis-adult"], ["Recurrent suicidal behaviour in schizophrenia", "[FDA]", ""]],
  forms: ["Tablets 25, 50, 100, 200 mg; ODT; oral suspension 50 mg/mL [FDA]."],
  moa: "D4/D2, 5-HT2A and other receptor antagonism [NEP].",
  pk: ["Half-life 8 h (single dose) to 12 h (steady state) [FDA].", "Smoking lowers levels (CYP1A2) — levels rise when a patient stops smoking [NEP]."],
  ind: { adult: ["Severely ill schizophrenia failing standard antipsychotics; reducing recurrent suicidal behaviour in schizophrenia/schizoaffective disorder [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Start", "12.5 mg once or twice daily [FDA]."], ["Titrate", "Increase total daily dose by 25–50 mg/day to 150–225 mg twice daily by the end of 2 weeks; then by up to 100 mg once or twice weekly [FDA]."], ["Maximum", "450 mg twice daily (900 mg/day) [FDA]."], ["Restart after ≥2 days off", "Re-titrate from 12.5 mg [NEP]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Starting dose only; titrate slowly." },
  adj: { renal: "Consider lower dose in significant impairment [NEP].", hepatic: "Consider lower dose in significant impairment [NEP].", preg: "Not established in primary source. [NEP]", other: "Baseline ANC ≥1500/µL (≥1000 in benign ethnic neutropenia); ANC monitoring schedule per label [FDA]. Constipation can be fatal (ileus) — treat early [NEP]." },
  tox: { human: "Sedation, delirium, coma, tachycardia, hypotension, respiratory failure, hypersalivation; fatal usually above 2500 mg [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Airway, ventilation, cardiac monitoring; no antidote [FDA]." },
  contra: ["History of hypersensitivity to clozapine (photosensitivity, vasculitis, erythema multiforme, SJS) [FDA]."],
  ae: { common: ["Sedation, hypersalivation, tachycardia, dizziness, constipation, weight gain, fever [NEP]."], serious: ["Severe neutropenia (boxed) [FDA]", "Orthostatic hypotension, bradycardia, syncope (boxed) [FDA]", "Seizures (boxed) [FDA]", "Myocarditis, cardiomyopathy (boxed) [FDA]", "Increased mortality in elderly dementia (boxed) [FDA]", "Gastrointestinal hypomotility/ileus [FDA]"] },
  monitor: ["ANC baseline, weekly for 6 months, every 2 weeks months 6–12, then monthly [NEP]; troponin/CRP early (myocarditis); weight, glucose, lipids [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "clozapine", indication_id: "start", label: "Start — 12.5 mg once or twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 12.5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_daily: 900, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }, { form: "susp", strength: 50, unit: "mg/mL" }], rounding: "Half tablets", renal: [], flags: ["Target 150–225 mg twice daily by 2 weeks"], sources: ["FDA"] }],
  sources: [["FDA", "VERSACLOZ (clozapine) oral suspension — TruPharma (NDA203479), label effective 2026-09-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2592c9a8-fd74-4e0d-a895-b07b014cf355"]],
  dose: { tagline: "Most effective antipsychotic for resistant schizophrenia; strict blood count monitoring.",
    boxedTitle: "Severe neutropenia; orthostatic hypotension, bradycardia, and syncope; seizure; myocarditis, pericarditis, and cardiomyopathy; increased mortality in elderly patients with dementia-related psychosis",
    boxed: "VERSACLOZ has caused severe neutropenia which is associated with an increased risk of serious and potentially fatal infections. Prior to initiating VERSACLOZ treatment, obtain baseline ANC(s). VERSACLOZ initiation is not recommended in patients with a baseline ANC less than 1500/µL (less than 1000/µL for those with Benign Ethnic Neutropenia (also known as Duffy-null associated neutrophil count)). … Orthostatic hypotension, bradycardia, syncope, and cardiac arrest have occurred with clozapine treatment. The risk is highest during the initial titration period, particularly with rapid dose escalation. These reactions can occur with the first dose, with doses as low as 12.5 mg per day, or when restarting patients who have had even a brief interruption in treatment with Versacloz. Initiate treatment at 12.5 mg once or twice daily; titrate slowly; and use divided dosages to minimize risk. … Seizures have occurred with clozapine treatment. The risk is dose-related. Initiate treatment at 12.5 mg, titrate gradually, and use divided dosing. … Fatal myocarditis and cardiomyopathy have occurred with clozapine treatment. Discontinue VERSACLOZ and obtain a cardiac evaluation upon suspicion of these reactions. Generally, patients with VERSACLOZ-related myocarditis or cardiomyopathy should not be rechallenged with VERSACLOZ. … Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. VERSACLOZ is not approved for use in patients with dementia-related psychosis.",
    adult: [{ ind: "Treatment-resistant schizophrenia", text: "12.5 mg once or twice daily; increase by 25–50 mg/day to 300–450 mg/day by week 2; maximum 900 mg/day.", calc: ["start"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- COAGULATION FACTOR IX (FDA RIXUBIS recombinant, Takeda, BLA125446, eff. 2026-05-12) ---------- */
FDB_M("coagulation-factor-ix", {
  inn: "Coagulation factor IX", atc: "B02BD04", cls: "Factor IX concentrate (recombinant or plasma-derived)",
  linked: [["Haemophilia B — bleeding, surgery, prophylaxis", "[FDA]", "bleeding-adult"]],
  forms: ["Powder for injection 250, 500, 1000, 2000, 3000 IU (actual potency on vial) [FDA]."],
  moa: "Replaces missing factor IX [NEP].",
  pk: ["Half-life about 26 h (adults); shorter in young children [FDA]."],
  ind: { adult: ["Haemophilia B: on-demand treatment, perioperative management, routine prophylaxis; not for immune tolerance induction [FDA]."], paed: ["Children [FDA]."] },
  adult: [["Initial dose formula", "IU = body weight (kg) × desired factor IX rise (IU/dL or %) × reciprocal of recovery (IU/kg per IU/dL); expected rise 0.9 IU/dL per IU/kg at ≥12 years (≈1.1 IU/kg per 1% rise) [FDA]."], ["Prophylaxis ≥12 years", "40–60 IU/kg twice weekly [FDA]."]],
  paed: { tiers: ["Under 12 years: expected rise 0.7 IU/dL per IU/kg (≈1.4 IU/kg per 1% rise) [FDA].", "Prophylaxis under 12: 60–80 IU/kg twice weekly [FDA]."], transition: "From 12 years [FDA].", calcNote: "Prophylaxis IU/kg; bleeding doses by the label formula." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Monitor factor IX activity and inhibitors; recombinant products differ from plasma-derived in recovery [FDA]." },
  tox: { human: "Thrombosis risk at high doses [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to RIXUBIS or excipients including hamster protein [FDA].", "Disseminated intravascular coagulation [FDA].", "Signs of fibrinolysis [FDA]."],
  ae: { common: ["Dysgeusia, limb pain, atypical blood test results [NEP]."], serious: ["Hypersensitivity/anaphylaxis [FDA]", "Inhibitor (neutralising antibody) development; nephrotic syndrome after immune tolerance [FDA]", "Thromboembolism [FDA]"] },
  monitor: ["Factor IX activity; inhibitor titres [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "coagulation-factor-ix", indication_id: "pa", label: "Prophylaxis ≥12 years — 40–60 IU/kg twice weekly", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 40, unit: "IU", per: "dose", value_max: 60 }, interval_h: 84, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest whole vials", renal: [], flags: [], sources: ["FDA"] },
    { drug: "coagulation-factor-ix", indication_id: "pc", label: "Prophylaxis under 12 years — 60–80 IU/kg twice weekly", route: "IV", population: { min_age_months: null, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 60, unit: "IU", per: "dose", value_max: 80 }, interval_h: 84, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest whole vials", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "RIXUBIS (coagulation factor IX, recombinant) — Takeda, label effective 2026-05-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f5070a92-96b8-476a-a2dc-18b22d95e5e0"]],
  dose: { tagline: "Factor IX replacement for haemophilia B; dose by weight and target level.",
    adult: [
      { ind: "Bleeding / surgery", text: "IU = kg × desired % rise × 1.1 (≥12 years); repeat by bleed type and levels." },
      { ind: "Prophylaxis", text: "40–60 IU/kg twice weekly.", calc: ["pa"] }
    ],
    child: [
      { ind: "Bleeding (under 12)", text: "IU = kg × desired % rise × 1.4." },
      { ind: "Prophylaxis (under 12)", text: "60–80 IU/kg twice weekly.", calc: ["pc"] }
    ] }
});

/* ---------- COAGULATION FACTOR VIIa (FDA NOVOSEVEN RT, Novo Nordisk, BLA103665; SEVENFACT, LFB, BLA125641) ---------- */
FDB_M("coagulation-factor-viia", {
  inn: "Coagulation factor VIIa (recombinant)", atc: "B02BD08", cls: "Recombinant activated factor VII (bypassing agent)",
  linked: [["Haemophilia A or B with inhibitors — bleeding and surgery", "[FDA]", "bleeding-adult"], ["Congenital factor VII deficiency; Glanzmann's thrombasthenia; acquired haemophilia", "NovoSeven RT [FDA]", ""]],
  forms: ["NovoSeven RT powder 1, 2, 5, 8 mg vials [NEP].", "Sevenfact 1, 2, 5 mg vials [FDA]."],
  moa: "Activates factor X on the platelet surface, bypassing factors VIII and IX [NEP].",
  pk: ["Half-life about 2–3 h [FDA]."],
  ind: { adult: ["NovoSeven RT: bleeding and surgery in haemophilia A/B with inhibitors, congenital FVII deficiency, Glanzmann's thrombasthenia refractory to platelets, and acquired haemophilia (adults) [FDA].", "Sevenfact: bleeding in haemophilia A/B with inhibitors, 12 years and over; not for FVII deficiency [FDA]."], paed: ["NovoSeven RT: children [FDA]."] },
  adult: [["Haemophilia with inhibitors (NovoSeven RT)", "90 micrograms/kg every 2 h until haemostasis; then every 3–6 h for severe bleeds [FDA]."], ["Acquired haemophilia", "70–90 micrograms/kg every 2–3 h until haemostasis [FDA]."], ["Congenital FVII deficiency", "15–30 micrograms/kg every 4–6 h until haemostasis [FDA]."], ["Glanzmann's thrombasthenia", "90 micrograms/kg every 2–6 h [FDA]."], ["Sevenfact", "Mild/moderate: 75 micrograms/kg every 3 h, or 225 micrograms/kg once; severe: 225 micrograms/kg, then 75 micrograms/kg every 2 h from 6 h [FDA]."]],
  paed: { tiers: ["NovoSeven RT: same mcg/kg doses in children [FDA]."], transition: "Same doses [FDA].", calcNote: "mcg/kg; dosed by weight." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Sevenfact contraindicated with rabbit allergy [FDA]. Consider alternatives if bleeding not controlled in 24 h (Sevenfact) [FDA]." },
  tox: { human: "Thrombosis [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Sevenfact: allergy to rabbits or rabbit proteins; severe hypersensitivity to the product [FDA]."],
  ae: { common: ["Fever, headache, injection-site reactions [NEP]."], serious: ["Arterial and venous thrombosis (boxed) [FDA]", "Hypersensitivity [FDA]"] },
  monitor: ["Clinical haemostasis; signs of thrombosis and DIC [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "coagulation-factor-viia", indication_id: "inh", label: "Haemophilia with inhibitors (NovoSeven RT) — 90 mcg/kg every 2 h", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 90, unit: "mcg", per: "dose" }, interval_h: 2, divided_doses: 12, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted", strength: 1000, unit: "mcg/mL" }], rounding: "Nearest whole vial where possible", renal: [], flags: ["Until haemostasis; then every 3–6 h for severe bleeds"], sources: ["FDA"] },
    { drug: "coagulation-factor-viia", indication_id: "f7", label: "Congenital FVII deficiency — 15–30 mcg/kg every 4–6 h", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mcg", per: "dose", value_max: 30 }, interval_h: 4, divided_doses: 6, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted", strength: 1000, unit: "mcg/mL" }], rounding: "Nearest 0.1 mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "NOVOSEVEN RT (coagulation factor VIIa, recombinant) — Novo Nordisk, label effective 2020-07-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ea65c32f-8518-4383-b621-17056c0eebc0"], ["FDA", "SEVENFACT (coagulation factor VIIa, recombinant-jncw) — LFB, label effective 2025-11-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b23ad666-8ce0-4e0b-9eff-c6983ac5f7e6"]],
  dose: { tagline: "Bypassing agent for bleeding in haemophilia with inhibitors and rare bleeding disorders.",
    boxedTitle: "Thrombosis",
    boxed: "Serious arterial and venous thrombotic events following administration of NOVOSEVEN RT have been reported. Discuss the risks and explain the signs and symptoms of thrombotic and thromboembolic events to patients who will receive NOVOSEVEN RT. Monitor patients for signs or symptoms of activation of the coagulation system and for thrombosis.",
    adult: [
      { ind: "Haemophilia A/B with inhibitors", text: "90 micrograms/kg IV every 2 h until bleeding stops.", calc: ["inh"] },
      { ind: "Congenital FVII deficiency", text: "15–30 micrograms/kg every 4–6 h.", calc: ["f7"] },
      { ind: "Acquired haemophilia; Glanzmann's", text: "70–90 micrograms/kg every 2–3 h; Glanzmann's 90 micrograms/kg every 2–6 h." }
    ],
    child: [{ ind: "Children (NovoSeven RT)", text: "Same micrograms/kg doses.", calc: ["inh", "f7"] }] }
});

/* ---------- COAGULATION FACTOR VIII (FDA ADVATE recombinant, Takeda, BLA125063; WILATE VWF/FVIII, Octapharma, BLA125251) ---------- */
FDB_M("coagulation-factor-viii", {
  inn: "Coagulation factor VIII", atc: "B02BD02", cls: "Factor VIII concentrate (recombinant or plasma-derived)",
  linked: [["Haemophilia A — bleeding, surgery, prophylaxis", "[FDA]", "bleeding-adult"], ["Von Willebrand disease (VWF/FVIII complex, e.g. Wilate)", "[FDA]", ""]],
  forms: ["Powder for injection 250–4000 IU (actual potency on vial) [FDA]."],
  moa: "Replaces missing factor VIII [NEP].",
  pk: ["Half-life about 8–12 h; shorter in children [NEP]."],
  ind: { adult: ["Haemophilia A: on-demand, perioperative, routine prophylaxis [FDA].", "VWD (VWF-containing products such as Wilate) [FDA]."], paed: ["Children [FDA]."] },
  adult: [["Dose formula", "IU/kg = desired factor VIII rise (IU/dL or %) × 0.5 [FDA]."], ["Minor bleed (target 20–40%)", "10–20 IU/kg every 12–24 h (every 8–24 h under 6 years) for 1–3 days [FDA]."], ["Prophylaxis", "20–40 IU/kg every other day (3–4 times a week), or every third day aiming for trough ≥1% [FDA]."], ["VWD (Wilate)", "IU = kg × desired VWF:RCo rise (%) × 0.5 [FDA]."]],
  paed: { tiers: ["Same formula; under 6 years may need dosing every 8–24 h for minor bleeds [FDA]."], transition: "Same formula [FDA].", calcNote: "Prophylaxis IU/kg; bleeding doses by formula." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Monitor factor VIII activity and inhibitors (Bethesda) [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Advate: life-threatening hypersensitivity to mouse or hamster protein or product constituents [FDA].", "Wilate: hypersensitivity to human plasma-derived products [FDA]."],
  ae: { common: ["Headache, fever, arthralgia [NEP]."], serious: ["Anaphylaxis [FDA]", "Inhibitor development [FDA]", "Thromboembolism with VWF/FVIII products [NEP]"] },
  monitor: ["FVIII activity; inhibitors [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "coagulation-factor-viii", indication_id: "proph", label: "Prophylaxis — 20–40 IU/kg every other day", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "IU", per: "dose", value_max: 40 }, interval_h: 48, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest whole vials", renal: [], flags: [], sources: ["FDA"] },
    { drug: "coagulation-factor-viii", indication_id: "minor", label: "Minor bleed — 10–20 IU/kg every 12–24 h", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "IU", per: "dose", value_max: 20 }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest whole vials", renal: [], flags: ["Under 6 years: every 8–24 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ADVATE (antihemophilic factor, recombinant) — Takeda, label effective 2025-04-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80fa03d2-cd4c-4155-9b57-1396c4fa42da"], ["FDA", "WILATE (von Willebrand factor/coagulation factor VIII complex, human) — Octapharma, label effective 2026-06-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a8ef06b8-b041-054e-e58d-fd8a994a8071"]],
  dose: { tagline: "Factor VIII replacement: IU/kg = desired % rise × 0.5.",
    adult: [
      { ind: "Bleeding / surgery", text: "IU/kg = desired % rise × 0.5; minor bleeds 10–20 IU/kg every 12–24 h." , calc: ["minor"] },
      { ind: "Prophylaxis", text: "20–40 IU/kg every other day.", calc: ["proph"] }
    ],
    child: [{ ind: "Children", text: "Same formula; under 6 may need more frequent doses.", calc: ["minor", "proph"] }] }
});

/* ---------- COAGULATION FACTOR X (FDA COAGADEX, Bio Products Laboratory, BLA125506, eff. 2026-04-13) ---------- */
FDB_M("coagulation-factor-x", {
  inn: "Coagulation factor X (human)", atc: "B02BD13", cls: "Plasma-derived factor X concentrate",
  linked: [["Hereditary factor X deficiency", "[FDA]", ""]],
  forms: ["Powder 250 IU and 500 IU vials; about 100 IU/mL when reconstituted [FDA]."],
  moa: "Replaces factor X [NEP].",
  pk: ["Half-life about 30 h [FDA]."],
  ind: { adult: ["Routine prophylaxis, on-demand treatment and perioperative management in hereditary factor X deficiency [FDA]."], paed: ["Children [FDA]."] },
  adult: [["Bleeding (12 years and over)", "25 IU/kg at the first sign of bleeding; repeat every 24 h until it stops [FDA]."], ["Prophylaxis (12 years and over)", "25 IU/kg twice weekly; aim for trough ≥5 IU/dL [FDA]."]],
  paed: { tiers: ["Under 12 years: bleeding 30 IU/kg every 24 h; prophylaxis 40 IU/kg twice weekly; perioperative factor 0.6 in the dose formula [FDA]."], transition: "Adult doses from 12 years [FDA].", calcNote: "IU/kg by age band." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Monitor troughs; do not exceed the label peak target [FDA]." },
  tox: { human: "About 80 IU/kg given once in error without adverse events [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Life-threatening hypersensitivity to Coagadex [FDA]."],
  ae: { common: ["Infusion-site erythema, fatigue, back pain [NEP]."], serious: ["Hypersensitivity [FDA]", "Inhibitors; thrombosis [NEP]"] },
  monitor: ["Factor X trough levels [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "coagulation-factor-x", indication_id: "ba", label: "Bleeding, 12 years and over — 25 IU/kg every 24 h", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 25, unit: "IU", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest whole vials", renal: [], flags: [], sources: ["FDA"] },
    { drug: "coagulation-factor-x", indication_id: "bc", label: "Bleeding, under 12 years — 30 IU/kg every 24 h", route: "IV", population: { min_age_months: null, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "IU", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest whole vials", renal: [], flags: [], sources: ["FDA"] },
    { drug: "coagulation-factor-x", indication_id: "pa", label: "Prophylaxis, 12 years and over — 25 IU/kg twice weekly", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 25, unit: "IU", per: "dose" }, interval_h: 84, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest whole vials", renal: [], flags: [], sources: ["FDA"] },
    { drug: "coagulation-factor-x", indication_id: "pc", label: "Prophylaxis, under 12 years — 40 IU/kg twice weekly", route: "IV", population: { min_age_months: null, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 40, unit: "IU", per: "dose" }, interval_h: 84, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest whole vials", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "COAGADEX (coagulation factor X, human) — Bio Products Laboratory, label effective 2026-04-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ad20e6ff-98bc-47e6-aa00-7fb441edd2b0"]],
  dose: { tagline: "Factor X concentrate for hereditary factor X deficiency.",
    adult: [
      { ind: "Bleeding", text: "25 IU/kg, repeat every 24 h until bleeding stops.", calc: ["ba"] },
      { ind: "Prophylaxis", text: "25 IU/kg twice weekly.", calc: ["pa"] }
    ],
    child: [
      { ind: "Bleeding (under 12)", text: "30 IU/kg every 24 h.", calc: ["bc"] },
      { ind: "Prophylaxis (under 12)", text: "40 IU/kg twice weekly.", calc: ["pc"] }
    ] }
});

/* ---------- COAGULATION FACTOR XIII (FDA CORIFACT plasma-derived, CSL Behring, BLA125385, eff. 2020-08-18) ---------- */
FDB_M("coagulation-factor-xiii", {
  inn: "Coagulation factor XIII (human)", atc: "B02BD07", cls: "Plasma-derived factor XIII concentrate",
  linked: [["Congenital factor XIII deficiency — prophylaxis and surgery", "[FDA]", ""]],
  forms: ["Powder 1000–1600 IU per vial (actual on label), 20 mL diluent [FDA]."],
  moa: "Replaces factor XIII (A and B subunits), which cross-links fibrin [NEP].",
  pk: ["Half-life about 7 days in adults; shorter (about 5 days) under 16 years [FDA]."],
  ind: { adult: ["Routine prophylaxis and perioperative management of surgical bleeding in congenital FXIII deficiency [FDA]."], paed: ["Children [FDA]."] },
  adult: [["Prophylaxis", "40 IU/kg IV every 28 days, not faster than 4 mL/min; adjust ±5 IU/kg to keep trough FXIII 5–20% [FDA]."], ["Trough adjustment", "One trough <5%: +5 IU/kg; 5–20%: no change; two troughs >20% or one >25%: −5 IU/kg [FDA]."]],
  paed: { tiers: ["Same 40 IU/kg; children clear it faster [FDA]."], transition: "Same dose [FDA].", calcNote: "40 IU/kg every 28 days." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Plasma-derived — small infection transmission risk [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Anaphylactic or severe systemic reactions to human plasma-derived products [FDA]."],
  ae: { common: ["Hypersensitivity, rash, pruritus, arthralgia, headache [NEP]."], serious: ["Thromboembolism [NEP]", "Inhibitor development [NEP]"] },
  monitor: ["FXIII activity trough (Berichrom assay) [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "coagulation-factor-xiii", indication_id: "std", label: "Prophylaxis — 40 IU/kg every 28 days", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 40, unit: "IU", per: "dose" }, interval_h: 672, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest vial content", renal: [], flags: ["Adjust ±5 IU/kg by trough"], sources: ["FDA"] }],
  sources: [["FDA", "CORIFACT (factor XIII concentrate, human) — CSL Behring, label effective 2020-08-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=96f1b658-01b0-43a7-9aba-693271389a78"]],
  dose: { tagline: "Plasma FXIII concentrate every 4 weeks for congenital deficiency.",
    adult: [{ ind: "Prophylaxis", text: "40 IU/kg every 28 days; adjust by 5 IU/kg to trough 5–20%.", calc: ["std"] }],
    child: [{ ind: "Children", text: "40 IU/kg every 28 days.", calc: ["std"] }] }
});

/* ---------- COBICISTAT (FDA TYBOST, Gilead, NDA203094, eff. 2026-02-10) ---------- */
FDB_M("cobicistat", {
  inn: "Cobicistat", atc: "V03AX03", cls: "CYP3A inhibitor (pharmacokinetic booster)",
  linked: [["HIV-1 — boosting atazanavir or darunavir", "[FDA]", "hiv-adult"]],
  forms: ["Tablets 150 mg and 90 mg [FDA]."],
  moa: "Inhibits CYP3A to raise atazanavir/darunavir levels; no antiviral activity [NEP].",
  pk: ["Half-life 3–4 h; take with the protease inhibitor and food [FDA].", "Raises creatinine slightly by blocking tubular secretion without changing true GFR [NEP]."],
  ind: { adult: ["Boosting once-daily atazanavir 300 mg or darunavir 800 mg in HIV-1 [FDA]."], paed: ["Children weighing at least 14 kg (90 or 150 mg by weight) [FDA]."] },
  adult: [["With atazanavir 300 mg or darunavir 800 mg once daily", "150 mg once daily, at the same time, with food [FDA]."]],
  paed: { tiers: ["90 mg or 150 mg once daily by weight with the matching protease inhibitor dose — see the label table [FDA]."], transition: "Adult dose by weight [FDA].", calcNote: "Fixed booster dose." },
  adj: { renal: "Not for use with tenofovir DF if CrCl below 70 [NEP].", hepatic: "Not recommended in severe impairment [NEP].", preg: "Not recommended in pregnancy (low exposure) [NEP].", other: "Not interchangeable with ritonavir for darunavir twice daily, fosamprenavir, saquinavir, tipranavir [FDA]. Very many interactions [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; not dialysable [FDA]." },
  contra: ["With alfuzosin, ranolazine, dronedarone, carbamazepine, phenobarbital, phenytoin, colchicine (in renal/hepatic impairment), rifampin and other listed CYP3A-dependent drugs [FDA]."],
  ae: { common: ["Jaundice/hyperbilirubinaemia (with atazanavir), rash, nausea [NEP]."], serious: ["Serious drug interactions [FDA]", "Kidney injury with tenofovir DF [NEP]"] },
  monitor: ["Creatinine, urine glucose/protein if with tenofovir [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cobicistat", indication_id: "std", label: "Adult — 150 mg once daily with the PI", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 150, max_daily: 150, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 150, unit: "mg/tab" }], rounding: "Whole tablet", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "TYBOST (cobicistat) tablets — Gilead Sciences, label effective 2026-02-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3784c35c-e87f-410c-900b-8fd6313c6010"]],
  dose: { tagline: "HIV pharmacokinetic booster for atazanavir or darunavir.",
    adult: [{ ind: "HIV-1 (with atazanavir or darunavir once daily)", text: "150 mg once daily with food, at the same time.", calc: ["std"] }],
    child: [{ ind: "At least 14 kg", text: "90 or 150 mg once daily by weight (label table)." }] }
});

/* ---------- COBIMETINIB (FDA COTELLIC, Genentech, NDA206192, eff. 2026-07-29) ---------- */
FDB_M("cobimetinib", {
  inn: "Cobimetinib", atc: "L01EE02", cls: "MEK inhibitor",
  linked: [["BRAF V600E/K melanoma (with vemurafenib)", "[FDA]", ""], ["Histiocytic neoplasms", "Single agent [FDA]", ""]],
  forms: ["Tablets 20 mg [FDA]."],
  moa: "Inhibits MEK1/MEK2 in the MAPK pathway [NEP].",
  pk: ["Half-life about 44 h [FDA]."],
  ind: { adult: ["Unresectable/metastatic BRAF V600E or V600K melanoma with vemurafenib; histiocytic neoplasms alone [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Melanoma; histiocytic neoplasms", "60 mg once daily for the first 21 days of each 28-day cycle [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose, 21 days on, 7 off." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [NEP].", other: "Avoid strong/moderate CYP3A inhibitors and inducers [NEP]." },
  tox: { human: "No overdose information [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Diarrhoea, photosensitivity, nausea, fever, vomiting, rash [NEP]."], serious: ["New primary skin cancers [NEP]", "Haemorrhage; cardiomyopathy; serous retinopathy [NEP]", "Hepatotoxicity; rhabdomyolysis [NEP]"] },
  monitor: ["LVEF, eye exam, liver tests, CK, skin [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cobimetinib", indication_id: "std", label: "60 mg once daily, days 1–21 of 28", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, max_daily: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["21 days on, 7 days off"], sources: ["FDA"] }],
  sources: [["FDA", "COTELLIC (cobimetinib) tablets — Genentech, label effective 2026-07-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c387579e-cee0-4334-bd1e-73f93ac1bde6"]],
  dose: { tagline: "MEK inhibitor for BRAF-mutant melanoma and histiocytic neoplasms.",
    adult: [{ ind: "Melanoma (with vemurafenib); histiocytic neoplasms", text: "60 mg once daily, days 1–21 of each 28-day cycle.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- COCAINE (FDA NUMBRINO 4% nasal solution, NDA209575, eff. 2026-01-12) ---------- */
FDB_M("cocaine", {
  inn: "Cocaine", atc: "N01BC01", cls: "Ester local anaesthetic with vasoconstriction (Schedule II)",
  linked: [["Topical anaesthesia of the nasal mucosa for procedures", "[FDA]", ""], ["Cocaine toxicity (stimulant poisoning)", "Bhutan STG [BT-STG]", "poisoning-adult"]],
  forms: ["Nasal solution 4% (40 mg/mL): 4 mL single-use and 10 mL multi-use [FDA]."],
  moa: "Blocks sodium channels (anaesthesia) and noradrenaline reuptake (vasoconstriction) [NEP].",
  pk: ["Elimination half-life about 1 h after nasal pledgets [FDA]."],
  ind: { adult: ["Local anaesthesia of nasal mucous membranes for diagnostic procedures and surgery on or through the nose, adults [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Nasal procedures", "40–160 mg (1–4 mL of 4%) on cotton or rayon pledgets applied to the nasal mucosa; each pledget absorbs 1 mL [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Do not apply to damaged mucosa [FDA]. Raises BP and heart rate — caution in heart disease [NEP]. Not substitutable with other nasal cocaine products [FDA]." },
  tox: { human: "Agitation, hypertension, tachycardia, arrhythmia, chest pain, seizures, hyperthermia; can occur at low doses [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Benzodiazepines for agitation, cooling, supportive care; poison centre [NEP]." },
  contra: ["Hypersensitivity to cocaine, other ester local anaesthetics or components [FDA]."],
  ae: { common: ["Headache, epistaxis, nasal discomfort, raised BP and heart rate [NEP]."], serious: ["Abuse and dependence (boxed) [FDA]", "Myocardial ischaemia, arrhythmia, seizures [NEP]"] },
  monitor: ["BP, heart rate, ECG in at-risk patients [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Bhutan STG 2024 lists cocaine among stimulant poisonings (agitation) [BT-STG]." },
  calc: [],
  sources: [["FDA", "NUMBRINO (cocaine hydrochloride) nasal solution 4% — Omnivium, label effective 2026-01-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d724b5b4-6654-4bf5-9eed-e2c7943084ed"], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Topical nasal anaesthetic and vasoconstrictor; also a drug of abuse.",
    boxedTitle: "Abuse and dependence",
    boxed: "CNS stimulants, including cocaine hydrochloride, have a high potential for abuse and dependence.",
    adult: [{ ind: "Nasal procedures (4%)", text: "40–160 mg (1–4 mL) on pledgets to the nasal mucosa." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CODEINE (FDA codeine sulfate tablets, Hikma, NDA022402, eff. 2025-12-22) ---------- */
FDB_M("codeine", {
  inn: "Codeine", atc: "R05DA04", cls: "Opioid agonist (prodrug of morphine)", risk: "High-alert — opioids are on the ISMP list of high-alert medications [ISMP]",
  linked: [["Mild to moderate pain (when alternatives are inadequate)", "[FDA]", ""], ["Cough (combination syrups)", "[NEP]", ""]],
  forms: ["Codeine sulfate tablets 15, 30, 60 mg [FDA].", "Bhutan: codeine phosphate 15 mg tablet [BT-NEML]."],
  moa: "Converted by CYP2D6 to morphine, a mu-opioid agonist [NEP].",
  pk: ["Ultra-rapid CYP2D6 metabolisers make more morphine — fatal respiratory depression reported in children [FDA].", "Metabolites accumulate in kidney failure [FDA]."],
  ind: { adult: ["Mild to moderate pain when an opioid is appropriate and alternatives are inadequate [FDA]."], paed: ["Contraindicated under 12 years and under 18 after tonsillectomy/adenoidectomy [FDA]."] },
  adult: [["Pain", "15–60 mg every 4 h as needed, lowest effective dose; doses above 60 mg add no benefit; maximum 360 mg in 24 h [FDA]."]],
  paed: { tiers: ["Under 12 years: contraindicated [FDA].", "12–18 years: avoid if other respiratory risk factors (obesity, sleep apnoea, lung disease) [FDA]."], transition: "Adult dose from 12 years where appropriate [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Start lower or with longer intervals; titrate slowly [FDA].", hepatic: "Start lower; titrate slowly [NEP].", preg: "Prolonged use: neonatal opioid withdrawal (boxed) [FDA]. Avoid in breastfeeding (infant deaths) [NEP].", other: "Use with benzodiazepines only when essential (boxed) [FDA]." },
  tox: { human: "Respiratory depression, stupor/coma, pinpoint pupils, flaccidity, hypotension, death [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Airway and ventilation; naloxone [NEP]." },
  contra: ["Children under 12 years [FDA].", "Under 18 years after tonsillectomy and/or adenoidectomy [FDA].", "Significant respiratory depression; acute or severe asthma without monitoring [FDA].", "Known or suspected GI obstruction including paralytic ileus [FDA].", "With MAOIs or within 14 days [FDA].", "Hypersensitivity to codeine [FDA]."],
  ae: { common: ["Constipation, nausea, vomiting, drowsiness, dizziness, pruritus [NEP]."], serious: ["Addiction, abuse, misuse (boxed) [FDA]", "Life-threatening respiratory depression (boxed) [FDA]", "Fatal accidental ingestion by children (boxed) [FDA]", "Adrenal insufficiency; severe hypotension [FDA]"] },
  monitor: ["Pain relief, sedation, breathing, bowel habit [NEP]."],
  local: { neml: "Codeine phosphate 15 mg tablet [BT-NEML].", strengths: "15 mg tablet.", stg: "Bhutan STG 2024 lists codeine among opioids (substance use, poisoning) [BT-STG]." },
  calc: [{ drug: "codeine", indication_id: "std", label: "Pain — 15–60 mg every 4 h as needed (max 360 mg/day)", route: "PO", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 15, unit: "mg", per: "dose", value_max: 60 }, interval_h: 4, divided_doses: 6, caps: { max_single: 60, max_daily: 360, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 15, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Kidney impairment: start lower or with longer intervals", flags: ["HIGH_ALERT", "Bhutan tablet is codeine phosphate 15 mg"], sources: ["FDA"] }],
  sources: [["FDA", "Codeine sulfate tablets — Hikma (NDA022402), label effective 2025-12-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=010905f9-3bcb-4b50-9fe8-a3ad0010f14c"], ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024", ""]],
  dose: { tagline: "Weak opioid prodrug; never in children under 12.",
    boxedTitle: "Serious and life-threatening risks from use of codeine sulfate tablets",
    boxed: "Because the use of Codeine Sulfate Tablets exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death, assess each patient’s risk prior to prescribing and reassess all patients regularly for the development of these behaviors and conditions. Serious, life-threatening, or fatal respiratory depression may occur with use of Codeine Sulfate Tablets, especially during initiation or following a dosage increase. To reduce the risk of respiratory depression, proper dosing and titration of Codeine Sulfate Tablets are essential. Accidental ingestion of even one dose of Codeine Sulfate Tablets, especially by children, can result in a fatal overdose of codeine. Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Reserve concomitant prescribing of Codeine Sulfate Tablets and benzodiazepines or other CNS depressants for use in patients for whom alternative treatment options are inadequate. Advise pregnant women using opioids for an extended period of time of the risk of Neonatal Opioid Withdrawal Syndrome, which may be life-threatening if not recognized and treated. Ensure that management by neonatology experts will be available at delivery. Healthcare providers are strongly encouraged to complete a REMS-compliant education program and to counsel patients and caregivers on serious risks, safe use, and the importance of reading the Medication Guide with each prescription. Life-threatening respiratory depression and death have occurred in children who received codeine. Most of the reported cases occurred following tonsillectomy and/or adenoidectomy, and many of the children had evidence of being an ultra-rapid metabolizer of codeine due to a CYP2D6 polymorphism. Codeine Sulfate Tablets are contraindicated in children younger than 12 years of age and in children younger than 18 years of age following tonsillectomy and/or adenoidectomy. Avoid the use of Codeine Sulfate Tablets in adolescents 12 to 18 years of age who have other risk factors that may increase their sensitivity to the respiratory depressant effects of codeine. The effects of concomitant use or discontinuation of cytochrome P450 3A4 inducers, 3A4 inhibitors, or 2D6 inhibitors with codeine are complex. Use of cytochrome P450 3A4 inducers, 3A4 inhibitors, or 2D6 inhibitors with Codeine Sulfate Tablets requires careful consideration of the effects on the parent drug, codeine, and the active metabolite, morphine.",
    adult: [{ ind: "Mild to moderate pain", text: "15–60 mg every 4 h as needed; maximum 360 mg/day.", calc: ["std"] }],
    child: [{ ind: "Under 12 years", text: "Contraindicated." }] }
});

/* ---------- COLCHICINE (FDA COLCRYS tablets NDA022352 + colchicine capsules NDA204820) ---------- */
FDB_M("colchicine", {
  inn: "Colchicine", atc: "M04AC01", cls: "Anti-inflammatory alkaloid (microtubule inhibitor)",
  linked: [["Acute gout flare", "[FDA]", "gout-adult"], ["Gout flare prophylaxis when starting urate-lowering therapy", "[FDA]", "gout-adult"], ["Familial Mediterranean fever", "[FDA]", ""]],
  forms: ["Tablets 0.6 mg (COLCRYS); capsules 0.6 mg [FDA]."],
  moa: "Binds tubulin, reducing neutrophil activity in gouty inflammation [NEP].",
  pk: ["Half-life about 31 h; P-gp and CYP3A4 substrate [FDA].", "Not removed by dialysis [NEP]."],
  ind: { adult: ["Prophylaxis and treatment of gout flares; FMF [FDA]."], paed: ["FMF from 4 years; not for gout in children [FDA]."] },
  adult: [["Gout flare", "1.2 mg at the first sign, then 0.6 mg one hour later (total 1.8 mg) [FDA]."], ["Gout prophylaxis (over 16 years)", "0.6 mg once or twice daily; maximum 1.2 mg/day; for at least 6 months of urate-lowering therapy [FDA]."], ["FMF", "1.2–2.4 mg daily in 1–2 doses, adjusted by 0.3 mg/day [FDA]."]],
  paed: { tiers: ["FMF 4–6 years: 0.3–1.8 mg/day [FDA].", "FMF 6–12 years: 0.9–1.8 mg/day [FDA].", "FMF over 12 years: 1.2–2.4 mg/day [FDA]."], transition: "Adult doses over 12 years (FMF) [FDA].", calcNote: "Fixed doses; strong interaction table." },
  adj: { renal: "Prophylaxis: CrCl <30 start 0.3 mg/day; dialysis 0.3 mg twice a week. Flares: CrCl <30 same dose but repeat no more than every 2 weeks; dialysis single 0.6 mg [FDA].", hepatic: "Severe impairment: lower dose and monitor [NEP].", preg: "Not established in primary source. [NEP]", other: "Reduce dose or avoid with strong CYP3A4 or P-gp inhibitors (clarithromycin, ritonavir, ciclosporin) — label table [FDA]." },
  tox: { human: "Deaths after as little as 7 mg over 4 days; >0.8 mg/kg often fatal: GI phase, then multi-organ failure and marrow suppression [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Early decontamination, intensive supportive care; not dialysable [NEP]." },
  contra: ["Renal or hepatic impairment together with P-gp and strong CYP3A4 inhibitors [FDA].", "Both renal and hepatic impairment [FDA]."],
  ae: { common: ["Diarrhoea, nausea, vomiting, abdominal pain [NEP]."], serious: ["Myelosuppression; neuromuscular toxicity and rhabdomyolysis (especially with statins) [FDA]", "Fatal toxicity with interacting drugs [FDA]"] },
  monitor: ["Blood counts, CK in long-term use with statins or kidney impairment [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "colchicine", indication_id: "flare", label: "Gout flare — 1.2 mg, then 0.6 mg after 1 h", route: "PO", population: { min_age_months: 192, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1.2, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1.2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.6, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "CrCl under 30: do not repeat a flare course within 2 weeks; on dialysis a single 0.6 mg only", flags: ["Then 0.6 mg one hour later (total 1.8 mg)"], sources: ["FDA"] },
    { drug: "colchicine", indication_id: "proph", label: "Gout prophylaxis — 0.6 mg once or twice daily (max 1.2 mg/day)", route: "PO", population: { min_age_months: 192, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 0.6, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_daily: 1.2, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 0.6, unit: "mg/tab" }], rounding: "Half tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "lower_of", abs_dose: 0.3, interval_h: 24 }], renal_note: "Dialysis: 0.3 mg twice a week", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "COLCRYS (colchicine) tablets (NDA022352), label effective 2022-10-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d6adc880-5499-4691-93f3-27c87902d5fc"], ["FDA", "Colchicine capsules 0.6 mg (NDA204820), label effective 2026-03-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=19486f52-1c7b-43b8-ba48-0d1a6389fedf"]],
  dose: { tagline: "Low-dose colchicine for gout flares and FMF; deadly with interacting drugs.",
    adult: [
      { ind: "Acute gout flare", text: "1.2 mg at once, then 0.6 mg one hour later (total 1.8 mg). If CrCl <30, repeat a course no more than every 2 weeks.", calc: ["flare"] },
      { ind: "Prophylaxis", text: "0.6 mg once or twice daily (max 1.2 mg/day); CrCl <30 start 0.3 mg/day.", calc: ["proph"] },
      { ind: "FMF", text: "1.2–2.4 mg daily." }
    ],
    child: [{ ind: "FMF", text: "4–6 y 0.3–1.8 mg/day; 6–12 y 0.9–1.8 mg/day; >12 y 1.2–2.4 mg/day." }] }
});

/* ---------- COLESEVELAM (FDA colesevelam tablets/suspension, NDA021176 listing; original WELCHOL) ---------- */
FDB_M("colesevelam", {
  inn: "Colesevelam", atc: "C10AC04", cls: "Bile acid sequestrant",
  linked: [["Primary hyperlipidaemia (LDL lowering)", "[FDA]", "lipids-adult"], ["Type 2 diabetes — glycaemic add-on", "[FDA]", "dm-adult"], ["Heterozygous familial hypercholesterolaemia, 10–17 years", "[FDA]", ""]],
  forms: ["Tablets 625 mg; oral suspension 3.75 g packet [FDA]."],
  moa: "Binds bile acids in the gut, increasing hepatic LDL uptake [NEP].",
  pk: ["Not absorbed [NEP]."],
  ind: { adult: ["LDL lowering in primary hyperlipidaemia; glycaemic control in type 2 diabetes [FDA]."], paed: ["HeFH in boys and post-menarchal girls 10–17 years [FDA]."] },
  adult: [["Hyperlipidaemia; type 2 diabetes", "3.75 g daily: 6 tablets once daily or 3 tablets twice daily with a meal, or 1 packet daily [FDA]."]],
  paed: { tiers: ["10–17 years (HeFH): 3.75 g daily — suspension preferred [FDA]."], transition: "Same dose [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not absorbed; may reduce fat-soluble vitamin absorption [NEP].", other: "Take drugs with narrow therapeutic range (levothyroxine, ciclosporin, OCPs, glyburide) at least 4 h before [NEP]. Not for type 1 diabetes or DKA [FDA]." },
  tox: { human: "Constipation, bowel obstruction risk [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Serum triglycerides >500 mg/dL [FDA].", "History of hypertriglyceridaemia-induced pancreatitis [FDA].", "History of bowel obstruction [FDA]."],
  ae: { common: ["Constipation, dyspepsia, nausea, raised triglycerides [NEP]."], serious: ["Bowel obstruction [FDA]", "Hypertriglyceridaemia and pancreatitis [FDA]"] },
  monitor: ["Lipids including triglycerides before and during; HbA1c [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Colesevelam HCl tablets/for oral suspension (NDA021176 listing), label effective 2023-12-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0127afae-8d8d-43f2-97f9-4f99f6947e81"]],
  dose: { tagline: "Bile acid sequestrant for LDL and type 2 diabetes add-on.",
    adult: [{ ind: "Hyperlipidaemia; type 2 diabetes", text: "3.75 g daily (6 × 625 mg tablets, once or split twice, with meals)." }],
    child: [{ ind: "HeFH 10–17 years", text: "3.75 g daily." }] }
});

/* ---------- COLESTIPOL (FDA colestipol HCl tablets, Mylan, NDA020222, eff. 2025-05-13; original COLESTID) ---------- */
FDB_M("colestipol", {
  inn: "Colestipol", atc: "C10AC02", cls: "Bile acid sequestrant",
  linked: [["Primary hypercholesterolaemia", "[FDA]", "lipids-adult"]],
  forms: ["Tablets 1 g; granules 5 g per scoop/packet [NEP]."],
  moa: "Binds bile acids, increasing LDL clearance [NEP].",
  pk: ["Not absorbed [NEP]."],
  ind: { adult: ["Adjunct to diet for raised total and LDL cholesterol in primary hypercholesterolaemia [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Hypercholesterolaemia (tablets)", "Start 2 g once or twice daily; increase by 2 g every 1–2 months; usual 2–16 g/day once or divided [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not absorbed; may lower fat-soluble vitamins [NEP].", other: "Swallow tablets whole with plenty of fluid; give other drugs 1 h before or 4 h after [NEP]." },
  tox: { human: "GI obstruction risk [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Constipation, bloating, abdominal discomfort [NEP]."], serious: ["Bowel obstruction; raised triglycerides [NEP]"] },
  monitor: ["Lipids; triglycerides [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Colestipol hydrochloride tablets — Mylan (NDA020222), label effective 2025-05-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dae7d51e-c117-4c8a-b018-45b01ae46100"]],
  dose: { tagline: "Bile acid sequestrant for high LDL; separate from other drugs.",
    adult: [{ ind: "Hypercholesterolaemia", text: "2 g once or twice daily, increasing to 2–16 g/day." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- COLISTIN (FDA COLY-MYCIN M parenteral = colistimethate sodium, Par, NDA050108, eff. 2026-06-08) ---------- */
FDB_M("colistin", {
  inn: "Colistin (as colistimethate sodium)", atc: "J01XB01", cls: "Polymyxin antibacterial (last-line Gram-negative)",
  linked: [["Multidrug-resistant Gram-negative infections (Pseudomonas, Acinetobacter, Klebsiella)", "[FDA]", "sepsis-adult"]],
  forms: ["Colistimethate sodium for injection, 150 mg colistin base activity per vial (75 mg/mL after 2 mL) [FDA]."],
  moa: "Disrupts the outer membrane of Gram-negative bacteria [NEP].",
  pk: ["Doses are in mg of COLISTIN BASE ACTIVITY [FDA].", "Cleared by the kidneys — reduce in kidney impairment [FDA]."],
  ind: { adult: ["Acute or chronic infections caused by susceptible Gram-negative bacilli, especially Pseudomonas aeruginosa [FDA]."], paed: ["Children — same mg/kg [FDA]."] },
  adult: [["Normal kidney function (CrCl ≥80)", "2.5–5 mg/kg/day colistin base in 2–4 divided doses IV or IM; maximum 5 mg/kg/day [FDA]."], ["Obesity", "Dose on ideal body weight [FDA]."], ["IV", "Half the daily dose over 3–5 min every 12 h, or half as a slow injection then half by continuous infusion over 22–23 h [FDA]."]],
  paed: { tiers: ["Same 2.5–5 mg/kg/day in 2–4 doses [FDA]."], transition: "Same mg/kg [FDA].", calcNote: "Per-dose mg/kg (base), every 12 h; label kidney table." },
  adj: { renal: "CrCl 50–79: 2.5–3.8 mg/kg/day in 2 doses; 30–49: 2.5 mg/kg/day once (or in 2 doses); 10–29: 1.5 mg/kg every 36 h [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Avoid with aminoglycosides, other nephrotoxins and neuromuscular blockers [NEP]. Warn about paraesthesia and dizziness — no driving [FDA]." },
  tox: { human: "Neuromuscular blockade (apnoea, respiratory arrest) and acute kidney failure [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop; supportive; ventilate if needed [FDA]." },
  contra: ["Hypersensitivity to colistimethate or components [FDA]."],
  ae: { common: ["Circumoral paraesthesia, tingling, pruritus, vertigo, slurred speech [FDA]."], serious: ["Nephrotoxicity [FDA]", "Neurotoxicity and respiratory arrest [FDA]", "C. difficile diarrhoea [NEP]"] },
  monitor: ["Creatinine and urine output daily; neurological symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "colistin", indication_id: "std", label: "1.25–2.5 mg/kg colistin base every 12 h (= 2.5–5 mg/kg/day)", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1.25, unit: "mg", per: "dose", value_max: 2.5 }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "reconstituted (base)", strength: 75, unit: "mg/mL" }], rounding: "Nearest mg", renal: [{ crcl_min: 50, crcl_max: 79.999, action: "reduce_dose", set_value: 1.25, set_value_max: 1.9, interval_h: 12 }, { crcl_min: 30, crcl_max: 49.999, action: "reduce_dose", set_value: 2.5, interval_h: 24 }, { crcl_min: 10, crcl_max: 29.999, action: "reduce_dose", set_value: 1.5, interval_h: 36 }, { crcl_min: 0, crcl_max: 9.999, action: "avoid", note: "no label dose below CrCl 10" }], flags: ["mg of colistin BASE activity", "Maximum 5 mg/kg/day", "Obese patients: dose on ideal body weight"], sources: ["FDA"] }],
  sources: [["FDA", "COLY-MYCIN M Parenteral (colistimethate for injection) — Par Health (NDA050108), label effective 2026-06-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6d6e13e2-dc33-4b7b-84d0-66146a57c552"]],
  dose: { tagline: "Last-line IV polymyxin for resistant Gram-negatives; dose in mg colistin base.",
    adult: [{ ind: "Resistant Gram-negative infection", text: "2.5–5 mg/kg/day colistin base in 2–4 doses (max 5 mg/kg/day); reduce by CrCl.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Same mg/kg as adults.", calc: ["std"] }] }
});

/* ---------- COLLAGENASE (FDA COLLAGENASE SANTYL ointment, Smith & Nephew, BLA101995) ---------- */
FDB_M("collagenase", {
  inn: "Collagenase (Clostridium histolyticum, topical)", atc: "D03BA02", cls: "Enzymatic wound debriding agent",
  linked: [["Debridement of chronic skin ulcers and severe burns", "[FDA]", "burns-adult"]],
  forms: ["Ointment 250 units/g [NEP]."],
  moa: "Digests collagen in necrotic tissue [NEP].",
  pk: ["Local action [NEP]."],
  ind: { adult: ["Debriding chronic dermal ulcers and severely burned areas [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Debridement", "Apply once daily (more often if the dressing is soiled) after cleansing; crosshatch thick eschar; remove loosened debris [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Detergents, hexachlorophene and heavy-metal antiseptics (silver, mercury) inactivate the enzyme [NEP]. Stop when debridement is complete [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Local or systemic hypersensitivity to collagenase [FDA]."],
  ae: { common: ["Transient erythema around the wound [NEP]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Wound progress [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "COLLAGENASE SANTYL ointment — Smith & Nephew (BLA101995), label effective 2019-05-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6b6fbfc6-98fa-46aa-88ef-ab00fbb08ffd"]],
  dose: { tagline: "Enzymatic ointment to debride ulcers and burns.",
    adult: [{ ind: "Chronic ulcers; burns", text: "Apply once daily to the cleansed wound bed." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- COLLAGENASE CLOSTRIDIUM HISTOLYTICUM (FDA XIAFLEX, Endo, BLA125338, eff. 2026-09-17) ---------- */
FDB_M("collagenase-clostridium-histolyticum", {
  inn: "Collagenase clostridium histolyticum (injection)", atc: "M09AB02", cls: "Injectable bacterial collagenases",
  linked: [["Dupuytren's contracture with a palpable cord", "[FDA]", ""], ["Peyronie's disease (curvature ≥30°)", "[FDA]", ""]],
  forms: ["Powder for injection 0.9 mg vial with diluent [FDA]."],
  moa: "Lyses collagen in the cord or plaque [NEP].",
  pk: ["Local action [NEP]."],
  ind: { adult: ["Dupuytren's contracture with a palpable cord; Peyronie's disease with plaque and curvature ≥30° [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Dupuytren's", "0.58 mg into each palpable cord (MP or PIP joint); up to 2 joints in one hand per visit; finger extension 24–72 h later [FDA]."], ["Peyronie's", "0.58 mg into the plaque on 2 days 1–3 days apart, then penile modelling; up to 4 cycles about 6 weeks apart [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed injection — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Caution with anticoagulants (except low-dose aspirin) — bleeding [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Peyronie's plaques involving the penile urethra [FDA].", "Hypersensitivity to Xiaflex or any collagenase [FDA]."],
  ae: { common: ["Swelling, bruising, pain, itching at the injection site; lymphadenopathy [NEP]."], serious: ["Tendon rupture or ligament damage (Dupuytren's) [NEP]", "Corporal rupture (penile fracture) or severe penile haematoma (boxed) [FDA]", "Anaphylaxis [NEP]"] },
  monitor: ["Hand/penile injury signs after each injection [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "XIAFLEX (collagenase clostridium histolyticum) — Endo USA, label effective 2026-09-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=805cecd0-fd1f-11dd-87af-0800200c9a66"]],
  dose: { tagline: "Collagenase injection for Dupuytren's cords and Peyronie's plaques.",
    boxedTitle: "Corporal rupture (penile fracture) or other serious penile injury in the treatment of Peyronie's disease",
    boxed: "Corporal rupture (penile fracture) was reported as an adverse reaction in 5 of 1044 (0.5%) XIAFLEX-treated patients in clinical studies. In other XIAFLEX-treated patients (9 of 1044; 0.9%), a combination of penile ecchymoses or hematoma, sudden penile detumescence, and/or a penile “popping” sound or sensation was reported, and in these cases, a diagnosis of corporal rupture cannot be excluded. Severe penile hematoma was also reported as an adverse reaction in 39 of 1044 (3.7%) XIAFLEX-treated patients.",
    adult: [
      { ind: "Dupuytren's contracture", text: "0.58 mg into each cord; up to 2 joints per hand per visit." },
      { ind: "Peyronie's disease", text: "0.58 mg into the plaque twice, 1–3 days apart, per cycle; up to 4 cycles." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CONCIZUMAB (FDA ALHEMO, Novo Nordisk, BLA761315, eff. 2025-07-01) ---------- */
FDB_M("concizumab", {
  inn: "Concizumab", atc: "B02BX10", cls: "Anti-TFPI monoclonal antibody (non-factor prophylaxis)",
  linked: [["Haemophilia A or B, with or without inhibitors — prophylaxis", "12 years and over [FDA]", "bleeding-adult"]],
  forms: ["Prefilled pens 60 mg/1.5 mL (40 mg/mL), 150 mg/1.5 mL and 300 mg/3 mL (100 mg/mL) [FDA]."],
  moa: "Blocks tissue factor pathway inhibitor, increasing thrombin generation [NEP].",
  pk: ["Target-mediated clearance; dose individualised by plasma concentration at 4 weeks [FDA]."],
  ind: { adult: ["Routine prophylaxis in haemophilia A or B with or without inhibitors, 12 years and over [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Prophylaxis", "Day 1: 1 mg/kg SC loading dose; from day 2: 0.2 mg/kg once daily; at 4 weeks measure concizumab level (ELISA) to set the maintenance dose [FDA]."]],
  paed: { tiers: ["12 years and over: as adults [FDA]."], transition: "Same dose [FDA].", calcNote: "mg/kg SC; maintenance then set by level." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Breakthrough bleeds: use the lowest effective factor or bypassing-agent dose — thrombosis risk [NEP]. Rotate injection sites daily [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Serious hypersensitivity to concizumab or ingredients [FDA]."],
  ae: { common: ["Injection-site reactions, urticaria [NEP]."], serious: ["Thromboembolic events [NEP]", "Hypersensitivity [FDA]"] },
  monitor: ["Concizumab level at 4 weeks; signs of thrombosis [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "concizumab", indication_id: "load", label: "Day 1 loading — 1 mg/kg SC", route: "SC", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "pen", strength: 100, unit: "mg/mL" }], rounding: "Pen dial", renal: [], flags: [], sources: ["FDA"] },
    { drug: "concizumab", indication_id: "daily", label: "From day 2 — 0.2 mg/kg SC once daily", route: "SC", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "pen", strength: 40, unit: "mg/mL" }], rounding: "Pen dial", renal: [], flags: ["Re-set by concizumab level at 4 weeks"], sources: ["FDA"] }
  ],
  sources: [["FDA", "ALHEMO (concizumab-mtci) injection — Novo Nordisk, label effective 2025-07-01", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=156f6404-1f6f-417f-bcf8-f07a27a82cc1"]],
  dose: { tagline: "Daily SC anti-TFPI prophylaxis for haemophilia A or B.",
    adult: [{ ind: "Prophylaxis (12 years and over)", text: "1 mg/kg on day 1, then 0.2 mg/kg daily; adjust by level at 4 weeks.", calc: ["load", "daily"] }],
    child: [{ ind: "12 years and over", text: "As adults.", calc: ["load", "daily"] }] }
});

/* ---------- CONESTAT ALFA (FDA RUCONEST recombinant C1 esterase inhibitor, Pharming, BLA125495, eff. 2020-04-30) ---------- */
FDB_M("conestat-alfa", {
  inn: "Conestat alfa", atc: "B06AC04", cls: "Recombinant C1 esterase inhibitor",
  linked: [["Hereditary angioedema — acute attacks", "[FDA]", "anaphylaxis-adult"]],
  forms: ["Powder 2100 U vial; 150 U/mL after 14 mL water [FDA]."],
  moa: "Replaces C1 inhibitor, blocking bradykinin generation [NEP].",
  pk: ["Short half-life (about 2–3 h) [NEP]."],
  ind: { adult: ["Acute HAE attacks in adults and adolescents; effectiveness not shown for laryngeal attacks [FDA]."], paed: ["Adolescents [FDA]."] },
  adult: [["Under 84 kg", "50 U/kg slow IV over about 5 min (volume = kg ÷ 3 mL) [FDA]."], ["84 kg or more", "4200 U (2 vials, 28 mL) [FDA]."], ["Repeat", "One more dose if symptoms persist; not more than 4200 U per dose or 2 doses in 24 h [FDA]."]],
  paed: { tiers: ["Adolescents: as adults [FDA]."], transition: "Same dose [FDA].", calcNote: "50 U/kg up to 4200 U." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Trained patients may self-administer [FDA]. Thrombosis reported with C1-INH products [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Allergy to rabbits or rabbit-derived products [FDA].", "Life-threatening immediate hypersensitivity to C1 esterase inhibitor preparations [FDA]."],
  ae: { common: ["Headache, nausea, diarrhoea [NEP]."], serious: ["Hypersensitivity/anaphylaxis [FDA]", "Thromboembolism [NEP]"] },
  monitor: ["Response; hypersensitivity [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "conestat-alfa", indication_id: "lt84", label: "Under 84 kg — 50 U/kg IV", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: 84 }, basis: "mg_per_kg", dose: { value: 50, unit: "U", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 4200, unit: "U" }, weight_basis: "actual", formulations: [{ form: "reconstituted", strength: 150, unit: "U/mL" }], rounding: "Nearest mL", renal: [], flags: ["May repeat once; max 2 doses in 24 h"], sources: ["FDA"] },
    { drug: "conestat-alfa", indication_id: "ge84", label: "84 kg or more — 4200 U IV", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: 84, max_weight_kg: null }, basis: "fixed", dose: { value: 4200, unit: "U", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 4200, unit: "U" }, weight_basis: "NEP", formulations: [{ form: "reconstituted", strength: 150, unit: "U/mL" }], rounding: "2 vials (28 mL)", renal: [], flags: ["May repeat once; max 2 doses in 24 h"], sources: ["FDA"] }
  ],
  sources: [["FDA", "RUCONEST (C1 esterase inhibitor, recombinant) — Pharming, label effective 2020-04-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=66d3fecb-32a4-7781-e053-2a91aa0a83ca"]],
  dose: { tagline: "Recombinant C1 inhibitor for acute hereditary angioedema attacks.",
    adult: [
      { ind: "Acute HAE attack (under 84 kg)", text: "50 U/kg slow IV.", calc: ["lt84"] },
      { ind: "Acute HAE attack (84 kg or more)", text: "4200 U (2 vials).", calc: ["ge84"] }
    ],
    child: [{ ind: "Adolescents", text: "As adults.", calc: ["lt84", "ge84"] }] }
});

/* ---------- CONJUGATED ESTROGENS (FDA PREMARIN tablets NDA004782 + PREMARIN IV NDA010402) ---------- */
FDB_M("conjugated-estrogens", {
  inn: "Conjugated estrogens", atc: "G03CA57", cls: "Oestrogen (mixture of equine oestrogens)",
  linked: [["Menopausal vasomotor symptoms; vulvovaginal atrophy", "[FDA]", "menopause-adult"], ["Abnormal uterine bleeding (IV, hormonal)", "[FDA]", "aub-adult"], ["Hypoestrogenism; osteoporosis prevention", "[FDA]", "osteoporosis-adult"]],
  forms: ["Tablets 0.3, 0.45, 0.625, 0.9, 1.25 mg [FDA].", "Injection 25 mg (IV/IM) [FDA].", "Vaginal cream 0.625 mg/g [NEP]."],
  moa: "Oestrogen receptor agonist [NEP].",
  pk: ["Hepatic metabolism; enterohepatic recycling [NEP]."],
  ind: { adult: ["Vasomotor symptoms and vulvovaginal atrophy of menopause; hypoestrogenism (hypogonadism, castration, ovarian failure); palliative breast and prostate cancer; prevention of postmenopausal osteoporosis [FDA].", "IV: abnormal uterine bleeding from hormonal imbalance [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Vasomotor symptoms; vulvovaginal atrophy; osteoporosis prevention", "Start 0.3 mg daily, continuously or cyclically (25 days on, 5 off); adjust to response [FDA]."], ["Female hypogonadism", "0.3 or 0.625 mg daily, cyclically (3 weeks on, 1 off) [FDA]."], ["Abnormal uterine bleeding (IV)", "25 mg slowly IV or IM; repeat in 6–12 h if needed [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Contraindicated in liver dysfunction [NEP].", preg: "Not for use in pregnancy [NEP].", other: "Add a progestin if the uterus is intact [FDA]. Lowest dose for the shortest time [FDA]." },
  tox: { human: "Nausea, vomiting, breast tenderness, withdrawal bleeding [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Undiagnosed abnormal genital bleeding [FDA].", "Breast cancer (known, suspected or history) or oestrogen-dependent neoplasia [FDA].", "Active or past DVT/PE; active or recent arterial thromboembolism (stroke, MI) [FDA].", "Liver dysfunction or disease; thrombophilia; pregnancy; anaphylaxis to the product [NEP]."],
  ae: { common: ["Breast tenderness, headache, nausea, bloating, breakthrough bleeding [NEP]."], serious: ["Endometrial cancer without progestin (boxed) [FDA]", "Stroke, DVT/PE, MI (boxed) [FDA]", "Breast cancer with progestin (boxed) [FDA]", "Probable dementia over 65 (boxed) [FDA]"] },
  monitor: ["Annual review of need; BP; breast exam/mammography; endometrial sampling if abnormal bleeding [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "PREMARIN (conjugated estrogens) tablets — Wyeth/Pfizer (NDA004782), label effective 2026-06-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=258e1602-a3cf-4ccc-ca80-73dbbfb812ff"], ["FDA", "PREMARIN Intravenous (conjugated estrogens for injection) — Wyeth/Pfizer (NDA010402), label effective 2025-05-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87e2da8d-432c-4ed5-67a1-dc26294b2295"]],
  dose: { tagline: "Oestrogen for menopausal symptoms and hormonal uterine bleeding; add a progestin if the uterus is intact.",
    boxedTitle: "Endometrial cancer, cardiovascular disorders, breast cancer and probable dementia",
    boxed: "Estrogen-Alone Therapy: There is an increased risk of endometrial cancer in a woman with a uterus who uses unopposed estrogens. Estrogen-alone therapy should not be used for the prevention of cardiovascular disease or dementia. Women's Health Initiative (WHI) estrogen-alone substudy reported increased risks of stroke and deep vein thrombosis (DVT). The WHI Memory Study (WHIMS) estrogen-alone ancillary study of WHI reported an increased risk of probable dementia in postmenopausal women 65 years of age and older. Estrogen Plus Progestin Therapy: Estrogen plus progestin therapy should not be used for the prevention of cardiovascular disease or dementia. The WHI estrogen plus progestin substudy reported increased risks of stroke, DVT, pulmonary embolism (PE), and myocardial infarction (MI). The WHI estrogen plus progestin substudy reported increased risks of invasive breast cancer. The WHIMS estrogen plus progestin ancillary study of WHI reported an increased risk of probable dementia in postmenopausal women 65 years of age and older.",
    adult: [
      { ind: "Menopausal symptoms; osteoporosis prevention", text: "0.3 mg daily (continuous or 25 days on/5 off); add progestin if uterus intact." },
      { ind: "Hormonal abnormal uterine bleeding", text: "25 mg slowly IV (or IM); repeat in 6–12 h if needed." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CORTICOTROPIN (FDA ACTHAR Gel repository corticotropin, NDA008372, eff. 2026-10-13) ---------- */
FDB_M("corticotropin", {
  inn: "Corticotropin (repository)", atc: "H01AA01", cls: "Adrenocorticotropic hormone (ACTH) gel",
  linked: [["Infantile spasms (West syndrome), under 2 years", "Monotherapy [FDA]", "infspasm-child"], ["Multiple sclerosis exacerbations", "[FDA]", ""], ["Steroid-responsive rheumatic, collagen, skin, allergic, eye, respiratory and oedematous states", "[FDA]", ""]],
  forms: ["Gel 80 USP units/mL, 5 mL vial (IM/SC); SelfJect 40 and 80 units (SC, adults) [FDA]."],
  moa: "Stimulates adrenal cortisol production; possible direct CNS effects in infantile spasms [NEP].",
  pk: ["Plasma half-life about 15 min (gel prolongs absorption) [FDA]."],
  ind: { adult: ["MS exacerbations; other corticosteroid-responsive disorders [FDA]."], paed: ["Infantile spasms under 2 years (IM only, vial) [FDA]."] },
  adult: [["MS exacerbation", "80–120 units IM or SC daily for 2–3 weeks [FDA]."], ["Other indications (adults and children over 2)", "40–80 units IM or SC every 24–72 h; taper may be needed [FDA]."]],
  paed: { tiers: ["Infantile spasms: 150 U/m²/day as 75 U/m² IM twice daily for 2 weeks, then taper over 2 weeks (label schedule) [FDA]."], transition: "Over 2 years: 40–80 units every 24–72 h [FDA].", calcNote: "BSA dosing for infantile spasms; needs height." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Never IV [FDA]. No live vaccines on immunosuppressive doses [FDA]. Monitor BP, glucose, electrolytes, infection [NEP]." },
  tox: { human: "Cushingoid effects [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Taper and supportive [NEP]." },
  contra: ["IV administration [FDA].", "Infants under 2 with suspected congenital infection [FDA].", "Live vaccines with immunosuppressive doses [FDA].", "Scleroderma, osteoporosis, systemic fungal infection, ocular herpes simplex, recent surgery, peptic ulcer, heart failure, uncontrolled hypertension, primary adrenal insufficiency or hyperfunction [FDA].", "Hypersensitivity to corticotropin or porcine proteins [FDA]."],
  ae: { common: ["Infants: infection, hypertension, irritability, Cushingoid appearance, weight gain [NEP]."], serious: ["Infection; hypertension; hyperglycaemia; adrenal suppression on stopping [NEP]", "GI perforation; cardiac hypertrophy in infants [NEP]"] },
  monitor: ["BP, glucose, urine, electrolytes, weight; infection [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "corticotropin", indication_id: "is", label: "Infantile spasms — 75 U/m² IM twice daily × 2 weeks", route: "IM", population: { min_age_months: null, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 75, unit: "units", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "gel", strength: 80, unit: "units/mL" }], rounding: "Nearest 0.05 mL", renal: [], flags: ["Then taper over 2 weeks per the label"], sources: ["FDA"] }],
  sources: [["FDA", "ACTHAR Gel (repository corticotropin injection) — label effective 2026-10-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7b48ddec-e815-45f4-9ca0-5c0daaf56f30"]],
  dose: { tagline: "Repository ACTH gel; first-line for infantile spasms.",
    adult: [
      { ind: "MS exacerbation", text: "80–120 units IM/SC daily for 2–3 weeks." },
      { ind: "Other steroid-responsive disease", text: "40–80 units IM/SC every 24–72 h." }
    ],
    child: [{ ind: "Infantile spasms (under 2 years)", text: "75 U/m² IM twice daily for 2 weeks, then taper over 2 weeks.", calc: ["is"] }] }
});

/* ---------- CRISABOROLE (FDA EUCRISA 2% ointment, Pfizer, NDA207695, eff. 2025-09-23) ---------- */
FDB_M("crisaborole", {
  inn: "Crisaborole", atc: "D11AH06", cls: "Topical phosphodiesterase-4 inhibitor",
  linked: [["Mild to moderate atopic dermatitis (3 months and over)", "[FDA]", ""]],
  forms: ["Ointment 2% [FDA]."],
  moa: "Inhibits PDE4, reducing inflammatory cytokines [NEP].",
  pk: ["Some systemic absorption [NEP]."],
  ind: { adult: ["Mild to moderate atopic dermatitis [FDA]."], paed: ["3 months and over [FDA]."] },
  adult: [["Atopic dermatitis", "Thin layer twice daily; consider once daily once controlled [FDA]."]],
  paed: { tiers: ["3 months and over: as adults [FDA]."], transition: "—", calcNote: "Topical — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Not for eyes, mouth or vagina [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Hypersensitivity to crisaborole or components [FDA]."],
  ae: { common: ["Application-site pain (burning, stinging) [NEP]."], serious: ["Hypersensitivity including contact urticaria [FDA]"] },
  monitor: ["Skin response [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "EUCRISA (crisaborole) ointment 2% — Pfizer, label effective 2025-09-23", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=609b77de-1ca3-4783-b8f5-01a9c0f1d77d"]],
  dose: { tagline: "Steroid-free PDE4 ointment for mild–moderate eczema.",
    adult: [{ ind: "Atopic dermatitis", text: "Thin layer twice daily." }],
    child: [{ ind: "3 months and over", text: "Thin layer twice daily." }] }
});

/* ---------- CRIZANLIZUMAB (FDA ADAKVEO, Novartis, BLA761128, eff. 2026-06-04) ---------- */
FDB_M("crizanlizumab", {
  inn: "Crizanlizumab", atc: "B06AX01", cls: "P-selectin blocking monoclonal antibody",
  linked: [["Sickle cell disease — reduce vaso-occlusive crises (16 years and over)", "[FDA]", ""]],
  forms: ["Injection 100 mg/10 mL (10 mg/mL) [FDA]."],
  moa: "Blocks P-selectin, reducing cell adhesion in vessels [NEP].",
  pk: ["Half-life about 10–11 days [FDA]."],
  ind: { adult: ["Reduce frequency of VOCs in sickle cell disease, 16 years and over [FDA]."], paed: ["16 years and over [FDA]."] },
  adult: [["Sickle cell disease", "5 mg/kg IV over 30 min at week 0, week 2, then every 4 weeks [FDA]."]],
  paed: { tiers: ["16 years and over: as adults [FDA]."], transition: "Same dose [FDA].", calcNote: "5 mg/kg." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Can interfere with automated platelet counts (clumping) — use citrate tubes [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Nausea, arthralgia, back pain, fever [NEP]."], serious: ["Infusion-related reactions [NEP]"] },
  monitor: ["Infusion reactions [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "crizanlizumab", indication_id: "std", label: "5 mg/kg IV (weeks 0 and 2, then every 4 weeks)", route: "IV", population: { min_age_months: 192, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], infusion: { duration_h: 0.5 }, rounding: "Nearest mL", renal: [], flags: ["Loading: week 0 and week 2"], sources: ["FDA"] }],
  sources: [["FDA", "ADAKVEO (crizanlizumab-tmca) injection — Novartis, label effective 2026-06-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b2b7f8b4-fe9a-4a86-8129-9e43f99a20c6"]],
  dose: { tagline: "Monthly IV antibody to reduce sickle cell pain crises.",
    adult: [{ ind: "Sickle cell disease (16+)", text: "5 mg/kg IV at weeks 0 and 2, then every 4 weeks.", calc: ["std"] }],
    child: [{ ind: "16 years and over", text: "As adults.", calc: ["std"] }] }
});

/* ---------- CRIZOTINIB (FDA XALKORI, Pfizer, NDA202570/217581, eff. 2026-10-29) ---------- */
FDB_M("crizotinib", {
  inn: "Crizotinib", atc: "L01ED01", cls: "ALK/ROS1/MET kinase inhibitor",
  linked: [["ALK- or ROS1-positive metastatic NSCLC", "[FDA]", ""], ["ALK-positive ALCL; ALK-positive inflammatory myofibroblastic tumour", "Children ≥1 year and adults [FDA]", ""]],
  forms: ["Capsules 200 and 250 mg; oral pellets 20, 50, 150 mg [FDA]."],
  moa: "Inhibits ALK, ROS1 and MET tyrosine kinases [NEP].",
  pk: ["Half-life about 42 h [FDA]."],
  ind: { adult: ["ALK- or ROS1-positive metastatic NSCLC; unresectable/recurrent ALK-positive IMT [FDA]."], paed: ["From 1 year: relapsed/refractory ALK-positive systemic ALCL (and young adults); ALK-positive IMT [FDA]."] },
  adult: [["NSCLC; IMT (adults)", "250 mg twice daily [FDA]."], ["Dose reductions", "200 mg twice daily, then 250 mg once daily; stop if 250 mg daily not tolerated [FDA]."], ["Severe kidney (CrCl <30, not on dialysis) or severe liver impairment", "250 mg once daily (second dose reduction) [FDA]."]],
  paed: { tiers: ["ALCL and IMT: 280 mg/m² twice daily by BSA [FDA]."], transition: "Adults: fixed 250 mg twice daily [FDA].", calcNote: "Adults fixed; children BSA." },
  adj: { renal: "CrCl <30 (not on dialysis): second dose-reduction level [FDA].", hepatic: "Moderate/severe: reduced dose per label tables [FDA].", preg: "Can cause fetal harm [NEP].", other: "Avoid strong CYP3A inhibitors; if unavoidable reduce dose [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Vision disorders, nausea, diarrhoea, vomiting, oedema, constipation, raised transaminases, fatigue [NEP]."], serious: ["Hepatotoxicity [FDA]", "ILD/pneumonitis [FDA]", "QT prolongation; bradycardia [FDA]", "Severe visual loss [FDA]"] },
  monitor: ["Liver tests every 2 weeks for 2 months then monthly; ECG; heart rate; eye symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "crizotinib", indication_id: "adult", label: "Adult NSCLC/IMT — 250 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 250, max_daily: 500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 250, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "reduce_dose", set_value: 250, interval_h: 24 }], renal_note: "Applies if not on dialysis", flags: [], sources: ["FDA"] },
    { drug: "crizotinib", indication_id: "child", label: "Child ALCL/IMT — 280 mg/m² twice daily", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 280, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [], rounding: "Label BSA table (capsules/pellets)", renal: [], renal_note: "Severe kidney impairment: label second dose-reduction level", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "XALKORI (crizotinib) capsules and oral pellets — Pfizer, label effective 2026-10-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"]],
  dose: { tagline: "ALK/ROS1 inhibitor for lung cancer, ALCL and IMT.",
    adult: [{ ind: "ALK/ROS1 NSCLC; IMT", text: "250 mg twice daily (CrCl <30: 250 mg once daily).", calc: ["adult"] }],
    child: [{ ind: "ALCL; IMT (1 year and over)", text: "280 mg/m² twice daily.", calc: ["child"] }] }
});

/* ---------- CROFELEMER (FDA MYTESI, Napo, NDA202292, eff. 2026-07-31) ---------- */
FDB_M("crofelemer", {
  inn: "Crofelemer", atc: "A07XA06", cls: "Intestinal chloride channel inhibitor (plant-derived)",
  linked: [["Non-infectious diarrhoea in adults with HIV on ART", "[FDA]", "hiv-adult"]],
  forms: ["Delayed-release tablets 125 mg [FDA]."],
  moa: "Inhibits CFTR and calcium-activated chloride channels in the gut [NEP].",
  pk: ["Minimal absorption [FDA]."],
  ind: { adult: ["Symptomatic relief of non-infectious diarrhoea in adults with HIV/AIDS on antiretroviral therapy [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["HIV-associated diarrhoea", "125 mg twice daily, swallowed whole; rule out infection first [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Exclude infectious causes before starting [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["None [FDA]."],
  ae: { common: ["Upper respiratory infection, bronchitis, cough, flatulence, raised bilirubin [NEP]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Stool frequency [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "crofelemer", indication_id: "std", label: "125 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 125, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 125, max_daily: 250, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "DR tab", strength: 125, unit: "mg/tab", whole: true }], rounding: "Whole tablet", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "MYTESI (crofelemer) delayed-release tablets — Napo Pharmaceuticals, label effective 2026-07-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=45584fba-8081-4cd1-a21e-3ea8237f62ff"]],
  dose: { tagline: "Antisecretory tablet for HIV-related non-infectious diarrhoea.",
    adult: [{ ind: "HIV diarrhoea (non-infectious)", text: "125 mg twice daily.", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- CROMOGLICIC ACID (FDA GASTROCROM oral concentrate, Viatris, NDA020479, eff. 2024-06-26) ---------- */
FDB_M("cromoglicic-acid", {
  inn: "Cromoglicic acid (sodium cromoglicate)", atc: "A07EB01", cls: "Mast cell stabiliser",
  linked: [["Systemic mastocytosis (oral)", "[FDA]", ""], ["Allergic conjunctivitis and rhinitis; asthma prophylaxis (eye drops, nasal spray, inhaler)", "[NEP]", ""]],
  forms: ["Oral concentrate 100 mg/5 mL ampoules [FDA].", "Eye drops 2–4%; nasal spray 4% [NEP]."],
  moa: "Stabilises mast cells, reducing mediator release [NEP].",
  pk: ["About 1% absorbed orally [NEP]."],
  ind: { adult: ["Mastocytosis — diarrhoea, flushing, headache, vomiting, urticaria, abdominal pain, itching [FDA]."], paed: ["2 years and over; not recommended under 2 [FDA]."] },
  adult: [["Mastocytosis (13 years and over)", "2 ampoules (200 mg) four times daily, 30 min before meals and at bedtime; may increase after 2–3 weeks to not more than 40 mg/kg/day [FDA]."]],
  paed: { tiers: ["2–12 years: 1 ampoule (100 mg) four times daily; maximum 40 mg/kg/day [FDA].", "Under 2 years: not recommended [FDA]."], transition: "Adult dose from 13 years [FDA].", calcNote: "Fixed starting doses; weight-based maximum." },
  adj: { renal: "Use with caution (lower dose may be needed) [NEP].", hepatic: "Use with caution (lower dose may be needed) [NEP].", preg: "Not established in primary source. [NEP]", other: "Not for inhalation or injection — open ampoule and drink or mix with water [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Hypersensitivity to cromolyn sodium [FDA]."],
  ae: { common: ["Headache, diarrhoea, pruritus, nausea, myalgia [NEP]."], serious: ["Anaphylaxis (rare) [NEP]"] },
  monitor: ["Symptom control [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cromoglicic-acid", indication_id: "adult", label: "Mastocytosis 13 years and over — 200 mg four times daily", route: "PO", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "oral concentrate", strength: 20, unit: "mg/mL" }], rounding: "Whole ampoules", renal: [], flags: ["Maximum 40 mg/kg/day"], sources: ["FDA"] },
    { drug: "cromoglicic-acid", indication_id: "child", label: "Mastocytosis 2–12 years — 100 mg four times daily", route: "PO", population: { min_age_months: 24, max_age_months: 156, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "oral concentrate", strength: 20, unit: "mg/mL" }], rounding: "Whole ampoule", renal: [], flags: ["Maximum 40 mg/kg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "GASTROCROM (cromolyn sodium) oral concentrate — Viatris Specialty, label effective 2024-06-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=00623958-a8fe-47d1-a0d2-0aa4e2f7966e"]],
  dose: { tagline: "Oral mast cell stabiliser for mastocytosis (also eye/nasal forms).",
    adult: [{ ind: "Mastocytosis", text: "200 mg four times daily before meals and at bedtime.", calc: ["adult"] }],
    child: [{ ind: "2–12 years", text: "100 mg four times daily.", calc: ["child"] }] }
});

/* ---------- CROVALIMAB (FDA PIASKY, Genentech, BLA761388, eff. 2025-11-11) ---------- */
FDB_M("crovalimab", {
  inn: "Crovalimab", atc: "L04AJ07", cls: "Complement C5 inhibitor (recycling antibody)",
  linked: [["Paroxysmal nocturnal haemoglobinuria (13 years and over, ≥40 kg)", "[FDA]", ""]],
  forms: ["Injection 340 mg/2 mL (170 mg/mL) vial [FDA]."],
  moa: "Binds C5, blocking terminal complement and haemolysis [NEP].",
  pk: ["Half-life about 53 days [FDA]."],
  ind: { adult: ["PNH in patients 13 years and over weighing at least 40 kg [FDA]."], paed: ["13 years and over, ≥40 kg [FDA]."] },
  adult: [["40 to <100 kg", "Day 1: 1,000 mg IV; days 2, 8, 15, 22: 340 mg SC; from day 29: 680 mg SC every 4 weeks [FDA]."], ["100 kg or more", "Day 1: 1,500 mg IV; days 2, 8, 15, 22: 340 mg SC; from day 29: 1,020 mg SC every 4 weeks [FDA]."]],
  paed: { tiers: ["13 years and over, ≥40 kg: as adults [FDA]."], transition: "Same bands [FDA].", calcNote: "Weight-band maintenance doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Meningococcal vaccination (A, C, W, Y and B) at least 2 weeks before; REMS programme [FDA]. Switching from eculizumab/ravulizumab can cause immune-complex reactions [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Starting during unresolved serious N. meningitidis infection [FDA].", "Serious hypersensitivity to crovalimab [FDA]."],
  ae: { common: ["Infusion/injection reactions, respiratory infection, fever, headache [NEP]."], serious: ["Serious meningococcal infections (boxed) [FDA]", "Type III hypersensitivity when switching from other C5 inhibitors [NEP]"] },
  monitor: ["LDH, haemoglobin; signs of meningococcal infection [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "crovalimab", indication_id: "m1", label: "Maintenance 40 to <100 kg — 680 mg SC every 4 weeks", route: "SC", population: { min_age_months: 156, max_age_months: null, min_weight_kg: 40, max_weight_kg: 100 }, basis: "fixed", dose: { value: 680, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: { max_single: 680, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 170, unit: "mg/mL" }], rounding: "Whole vials", renal: [], flags: ["After IV 1,000 mg load and 4 × 340 mg SC"], sources: ["FDA"] },
    { drug: "crovalimab", indication_id: "m2", label: "Maintenance 100 kg or more — 1,020 mg SC every 4 weeks", route: "SC", population: { min_age_months: 156, max_age_months: null, min_weight_kg: 100, max_weight_kg: null }, basis: "fixed", dose: { value: 1020, unit: "mg", per: "dose" }, interval_h: 672, divided_doses: 1, caps: { max_single: 1020, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 170, unit: "mg/mL" }], rounding: "Whole vials", renal: [], flags: ["After IV 1,500 mg load and 4 × 340 mg SC"], sources: ["FDA"] }
  ],
  sources: [["FDA", "PIASKY (crovalimab-akkz) injection — Genentech, label effective 2025-11-11", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2597efc2-a97b-487c-b500-a67fd282a73b"]],
  dose: { tagline: "Four-weekly SC C5 inhibitor for PNH; meningococcal vaccination first.",
    boxedTitle: "Serious meningococcal infections",
    boxed: "PIASKY, a complement inhibitor, increases the risk of serious infections caused by Neisseria meningitidis. Life-threatening and fatal meningococcal infections have occurred in patients treated with complement inhibitors. These infections may become rapidly life-threatening or fatal if not recognized and treated early. Complete or update vaccination for meningococcal bacteria (for serogroups A, C, W, Y, and B) at least 2 weeks prior to the first dose of PIASKY, unless the risks of delaying therapy with PIASKY outweigh the risk of developing a serious infection. Comply with the most current Advisory Committee on Immunization Practices (ACIP) recommendations for meningococcal vaccination in patients receiving a complement inhibitor. Patients receiving PIASKY are at increased risk for invasive disease caused by N. meningitidis, even if they develop antibodies following vaccination. Monitor patients for early signs of serious meningococcal infections and evaluate immediately if infection is suspected. Because of the risk of serious meningococcal infections, PIASKY is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called PIASKY REMS.",
    adult: [
      { ind: "PNH, 40 to <100 kg", text: "1,000 mg IV day 1; 340 mg SC days 2, 8, 15, 22; then 680 mg SC every 4 weeks.", calc: ["m1"] },
      { ind: "PNH, 100 kg or more", text: "1,500 mg IV day 1; 340 mg SC days 2, 8, 15, 22; then 1,020 mg SC every 4 weeks.", calc: ["m2"] }
    ],
    child: [{ ind: "13 years and over, ≥40 kg", text: "As adults by weight band.", calc: ["m1", "m2"] }] }
});

/* ---------- CYANOCOBALAMIN (FDA cyanocobalamin injection, ANDA080515, eff. 2026-11-09) ---------- */
FDB_M("cyanocobalamin", {
  inn: "Cyanocobalamin (vitamin B12)", atc: "B03BA01", cls: "Vitamin B12",
  linked: [["Pernicious anaemia and B12 malabsorption", "[FDA]", "anaemia-adult"], ["B12 deficiency after gastrectomy, ileal disease, fish tapeworm", "[FDA]", ""]],
  forms: ["Injection 1000 micrograms/mL (IM or deep SC) [FDA].", "Bhutan: only in multivitamin B-complex preparations [BT-NEML]."],
  moa: "Coenzyme for DNA synthesis and myelin maintenance [NEP].",
  pk: ["IV route wastes most of the dose in urine — avoid IV [FDA]."],
  ind: { adult: ["B12 deficiency from malabsorption: pernicious anaemia, GI disease or surgery, fish tapeworm, pancreatic/bowel malignancy, folate deficiency [FDA]."], paed: ["Children [NEP]."] },
  adult: [["Pernicious anaemia", "100 micrograms IM or deep SC daily for 6–7 days; if responding, alternate days for 7 doses, then every 3–4 days for 2–3 weeks; then 100 micrograms monthly for life [FDA]."], ["Normal absorption", "Oral replacement usually adequate; injection course as above if not [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed doses — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Safe at replacement doses [NEP].", other: "Give folic acid as needed [FDA]. Check potassium in the first days of severe megaloblastic anaemia (hypokalaemia) [NEP]. Do not give folic acid alone in B12 deficiency (neurological damage) [NEP]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Not established in primary source. [NEP]" },
  contra: ["Sensitivity to cobalt or vitamin B12 [FDA]."],
  ae: { common: ["Injection-site pain, mild diarrhoea, itching [NEP]."], serious: ["Anaphylaxis (rare) [NEP]", "Hypokalaemia during early treatment [NEP]", "Pulmonary oedema/heart failure early in treatment [NEP]"] },
  monitor: ["Reticulocytes, haemoglobin, potassium; B12 levels [NEP]."],
  local: { neml: "Cyanocobalamin is in multivitamin B-complex products only [BT-NEML].", strengths: "—", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Cyanocobalamin injection USP (ANDA080515), label effective 2026-11-09", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=409ef9c7-bc19-4d23-8e32-cd5bc8dacc50"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Vitamin B12 injection for pernicious anaemia and malabsorption — lifelong monthly.",
    adult: [{ ind: "Pernicious anaemia", text: "100 micrograms IM daily × 6–7 days, then alternate days × 7, then every 3–4 days × 2–3 weeks, then 100 micrograms monthly for life." }],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CYCLOBENZAPRINE (FDA cyclobenzaprine tablets, ANDA072854, eff. 2026-10-15; original FLEXERIL) ---------- */
FDB_M("cyclobenzaprine", {
  inn: "Cyclobenzaprine", atc: "M03BX08", cls: "Centrally acting muscle relaxant (tricyclic structure)",
  linked: [["Acute painful musculoskeletal spasm", "Short term [FDA]", "lbp-adult"]],
  forms: ["Tablets 5, 7.5, 10 mg; ER capsules 15 and 30 mg [NEP]."],
  moa: "Acts in the brainstem to reduce tonic motor activity [NEP].",
  pk: ["Effective half-life 18 h (8–37) [FDA]."],
  ind: { adult: ["Adjunct to rest and physiotherapy for muscle spasm of acute painful musculoskeletal conditions, up to 2–3 weeks [FDA]."], paed: ["Not established under 15 years [NEP]."] },
  adult: [["Muscle spasm", "5 mg three times daily; may increase to 10 mg three times daily; not longer than 2–3 weeks [FDA]."], ["Elderly or liver impairment", "Less frequent dosing [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults (15 years and over) [NEP].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Mild: start 5 mg, less often; moderate–severe: not recommended [NEP].", preg: "Not established in primary source. [NEP]", other: "Anticholinergic: caution in glaucoma, urinary retention [NEP]. Serotonin syndrome with SSRIs/SNRIs [NEP]." },
  tox: { human: "Drowsiness, tachycardia, agitation, arrhythmia, seizures, coma (tricyclic-like) [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "ECG monitoring; supportive; sodium bicarbonate for QRS widening [NEP]." },
  contra: ["Hypersensitivity [FDA].", "With MAO inhibitors or within 14 days [FDA].", "Acute recovery phase of MI; arrhythmias, heart block, conduction disturbance, heart failure [FDA].", "Hyperthyroidism [NEP]."],
  ae: { common: ["Drowsiness, dry mouth, dizziness, fatigue [NEP]."], serious: ["Arrhythmia [NEP]", "Serotonin syndrome [NEP]"] },
  monitor: ["Sedation [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cyclobenzaprine", indication_id: "std", label: "5–10 mg three times daily (max 2–3 weeks)", route: "PO", population: { min_age_months: 180, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose", value_max: 10 }, interval_h: 8, divided_doses: 3, caps: { max_single: 10, max_daily: 30, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Cyclobenzaprine HCl tablets USP (ANDA072854), label effective 2026-10-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=17a212c9-1708-48e2-b755-3a75e92cbb59"]],
  dose: { tagline: "Sedating muscle relaxant for short-term acute spasm.",
    adult: [{ ind: "Acute muscle spasm", text: "5 mg three times daily (up to 10 mg) for up to 2–3 weeks.", calc: ["std"] }],
    child: [{ ind: "Under 15 years", text: "Not established." }] }
});

/* ---------- CYCLOPENTOLATE (FDA CYCLOGYL, Alcon, ANDA084108-10, eff. 2024-06-25) ---------- */
FDB_M("cyclopentolate", {
  inn: "Cyclopentolate", atc: "S01FA04", cls: "Antimuscarinic mydriatic/cycloplegic eye drop",
  linked: [["Mydriasis and cycloplegia for eye examination and refraction", "[FDA]", "redeye-child"]],
  forms: ["Eye drops 0.5%, 1%, 2% [FDA].", "Bhutan: 1% eye drops 5 mL [BT-NEML]."],
  moa: "Blocks muscarinic receptors in the iris and ciliary muscle [NEP].",
  pk: ["Recovery usually within 24 h; can take several days [FDA]."],
  ind: { adult: ["Mydriasis and cycloplegia [FDA]."], paed: ["Children and infants (lower strengths) [FDA]."] },
  adult: [["Adults", "1–2 drops of 0.5%, 1% or 2%; repeat in 5–10 min if needed [FDA]."]],
  paed: { tiers: ["Children: 1–2 drops of 0.5%, 1% or 2%, then a second application of 0.5% or 1% after 5–10 min if needed [FDA].", "Small infants: a single drop of 0.5%; press over the lacrimal sac for 2–3 min [FDA]."], transition: "—", calcNote: "Eye drops — no calculator." },
  adj: { renal: "Not applicable. [NEP]", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Systemic CNS effects (psychosis, ataxia) especially in children with higher strengths [NEP]. Angle-closure risk [NEP]." },
  tox: { human: "Anticholinergic toxicity: flushing, tachycardia, fever, agitation, hallucinations [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; physostigmine in severe cases [NEP]." },
  contra: ["Hypersensitivity to any component [FDA].", "Untreated narrow-angle glaucoma [NEP]."],
  ae: { common: ["Burning on instillation, blurred vision, photophobia [NEP]."], serious: ["CNS toxicity in children [NEP]", "Acute angle-closure glaucoma [NEP]"] },
  monitor: ["Children for 30 min after drops [NEP]."],
  local: { neml: "Cyclopentolate 1% eye drops 5 mL [BT-NEML].", strengths: "1% eye drops.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "CYCLOGYL (cyclopentolate HCl ophthalmic solution) — Alcon, label effective 2024-06-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1d008c76-7210-4ace-90fa-7cd22762e12e"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Cycloplegic eye drop for refraction and fundus examination.",
    adult: [{ ind: "Mydriasis/cycloplegia", text: "1–2 drops; repeat after 5–10 min if needed." }],
    child: [
      { ind: "Children", text: "1–2 drops of 0.5–1%; one repeat of 0.5–1% after 5–10 min." },
      { ind: "Small infants", text: "One drop of 0.5%; press on the tear duct for 2–3 min." }
    ] }
});

/* ---------- CYCLOPHOSPHAMIDE (FDA cyclophosphamide, XGen ANDA211757 + FRINDOVYX NDA210852) ---------- */
FDB_M("cyclophosphamide", {
  inn: "Cyclophosphamide", atc: "L01AA01", cls: "Nitrogen mustard alkylating agent",
  linked: [["Lymphomas, leukaemias, myeloma, breast and ovarian cancer, neuroblastoma, retinoblastoma", "[FDA]", ""], ["Steroid-resistant minimal change nephrotic syndrome in children", "[FDA]", "nephrotic-child"]],
  forms: ["Powder/solution for injection 500 mg, 1 g, 2 g; tablets 25 and 50 mg; capsules [FDA].", "Bhutan: 200 mg powder for injection; 50 mg tablet [BT-NEML]."],
  moa: "Prodrug activated in the liver to alkylating metabolites that cross-link DNA [NEP].",
  pk: ["Half-life 3–12 h; auto-induction with repeated doses [FDA]."],
  ind: { adult: ["Malignant lymphomas, Hodgkin disease, myeloma, leukaemias, mycosis fungoides, neuroblastoma, ovarian and breast adenocarcinoma, retinoblastoma [FDA]."], paed: ["Malignancies; biopsy-proven minimal change nephrotic syndrome failing or intolerant of steroids [FDA]."] },
  adult: [["IV (no haematological deficiency)", "40–50 mg/kg in divided doses over 2–5 days; or 10–15 mg/kg every 7–10 days; or 3–5 mg/kg twice weekly [FDA]."], ["Oral", "1–5 mg/kg/day for initial and maintenance dosing [FDA]."]],
  paed: { tiers: ["Malignancy: same mg/kg as adults [FDA].", "Minimal change nephrotic syndrome: 2 mg/kg orally daily for 8–12 weeks; maximum cumulative 168 mg/kg (sterility risk beyond 90 days in males) [FDA]."], transition: "Same mg/kg [FDA].", calcNote: "mg/kg; give plenty of fluid (bladder)." },
  adj: { renal: "Monitor for toxicity in moderate–severe impairment; dialysable [FDA].", hepatic: "Severe impairment may reduce activation and efficacy [FDA].", preg: "Can cause fetal harm [FDA].", other: "Hydrate well and void often to prevent haemorrhagic cystitis; mesna with high doses [NEP]." },
  tox: { human: "Marrow suppression, haemorrhagic cystitis, cardiotoxicity at high doses [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; haemodialysis removes cyclophosphamide [NEP]." },
  contra: ["Severe hypersensitivity to cyclophosphamide or metabolites [FDA].", "Urinary outflow obstruction [FDA]."],
  ae: { common: ["Nausea, vomiting, alopecia, neutropenia, amenorrhoea [NEP]."], serious: ["Myelosuppression and infection [FDA]", "Haemorrhagic cystitis [FDA]", "Cardiotoxicity; pulmonary toxicity [FDA]", "Secondary malignancy; infertility [FDA]"] },
  monitor: ["Blood counts; urinalysis for haematuria [FDA]."],
  local: { neml: "Cyclophosphamide 200 mg powder for injection; 50 mg tablet [BT-NEML].", strengths: "200 mg vial; 50 mg tablet.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cyclophosphamide", indication_id: "po", label: "Oral — 1–5 mg/kg once daily", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose", value_max: 5 }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Nearest 25–50 mg", renal: [], renal_note: "Moderate–severe impairment: monitor for toxicity", flags: [], sources: ["FDA"] },
    { drug: "cyclophosphamide", indication_id: "iv", label: "IV — 10–15 mg/kg every 7–10 days", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose", value_max: 15 }, interval_h: 168, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Nearest 10 mg", renal: [], renal_note: "Moderate–severe impairment: monitor for toxicity", flags: ["Alternative: 40–50 mg/kg over 2–5 days"], sources: ["FDA"] },
    { drug: "cyclophosphamide", indication_id: "ns", label: "Nephrotic syndrome (child) — 2 mg/kg once daily × 8–12 weeks", route: "PO", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Nearest 25 mg", renal: [], flags: ["Maximum cumulative 168 mg/kg"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cyclophosphamide (XGen, ANDA211757), label effective 2024-12-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02e64046-687d-449e-e063-6294a90a6c32"], ["FDA", "FRINDOVYX (cyclophosphamide) injection — AVYXA (NDA210852), label effective 2026-08-26", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5ad8ea65-4c98-487a-9c8d-df778765ec5e"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Alkylating chemotherapy and immunosuppressant; hydrate to protect the bladder.",
    adult: [
      { ind: "Malignancy (IV)", text: "40–50 mg/kg over 2–5 days, or 10–15 mg/kg every 7–10 days.", calc: ["iv"] },
      { ind: "Malignancy (oral)", text: "1–5 mg/kg daily.", calc: ["po"] }
    ],
    child: [{ ind: "Minimal change nephrotic syndrome", text: "2 mg/kg daily for 8–12 weeks (max 168 mg/kg total).", calc: ["ns"] }] }
});

/* ---------- CYCLOSERINE (FDA cycloserine capsules, Dr. Reddy's, ANDA060593, eff. 2024-07-30; original SEROMYCIN) ---------- */
FDB_M("cycloserine", {
  inn: "Cycloserine", atc: "J04AB01", cls: "Second-line antituberculosis drug",
  linked: [["Drug-resistant (MDR) tuberculosis", "[FDA]", "tb-adult"]],
  forms: ["Capsules 250 mg [FDA].", "Bhutan: 250 mg (MDR-TB only) [BT-NEML]."],
  moa: "Inhibits bacterial cell-wall synthesis (D-alanine analogue) [NEP].",
  pk: ["Renally excreted — accumulates in kidney failure [NEP]."],
  ind: { adult: ["Active pulmonary and extrapulmonary TB when first-line drugs are inadequate, always combined [FDA]."], paed: ["Not established in primary source (used in MDR-TB programmes by weight) [NEP]."] },
  adult: [["TB", "Start 250 mg twice daily for 2 weeks; usual 500 mg–1 g daily in divided doses guided by blood levels; maximum 1 g/day [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Contraindicated in severe renal insufficiency [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Pyridoxine may reduce neurotoxicity [NEP]. Keep blood level below 30 mcg/mL [NEP]." },
  tox: { human: "Headache, confusion, psychosis, seizures, coma [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; pyridoxine; haemodialysis removes it [NEP]." },
  contra: ["Hypersensitivity [FDA].", "Epilepsy [FDA].", "Depression, severe anxiety or psychosis [FDA].", "Severe renal insufficiency [FDA].", "Excessive alcohol use [FDA]."],
  ae: { common: ["Headache, drowsiness, dizziness, irritability [NEP]."], serious: ["Psychosis, depression, suicidal thoughts [NEP]", "Seizures [NEP]"] },
  monitor: ["Mental state; blood levels; kidney function [NEP]."],
  local: { neml: "Cycloserine 250 mg — for MDR-TB only [BT-NEML].", strengths: "250 mg.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cycloserine", indication_id: "std", label: "MDR-TB — 250 mg twice daily (max 1 g/day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 250, unit: "mg", per: "dose", value_max: 500 }, interval_h: 12, divided_doses: 2, caps: { max_single: 500, max_daily: 1000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 250, unit: "mg/cap" }], rounding: "Whole capsules", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", note: "contraindicated in severe renal insufficiency (taken as CrCl under 30)" }], flags: ["First 2 weeks 250 mg twice daily; adjust by levels"], sources: ["FDA"] }],
  sources: [["FDA", "Cycloserine capsules USP — Dr. Reddy's (ANDA060593), label effective 2024-07-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e7e2665-7a3d-3f54-9f92-5fe845f02ef9"], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Second-line TB drug with psychiatric and seizure risk.",
    adult: [{ ind: "MDR-TB", text: "250 mg twice daily for 2 weeks, then 500 mg–1 g a day in divided doses (max 1 g).", calc: ["std"] }],
    child: [{ ind: "Children", text: "Not established in the label." }] }
});

/* ---------- CYPROHEPTADINE (FDA cyproheptadine HCl 4 mg tablets, ANDA212491, eff. 2026-10-07; original PERIACTIN) ---------- */
FDB_M("cyproheptadine", {
  inn: "Cyproheptadine", atc: "R06AX02", cls: "First-generation antihistamine with antiserotonergic action",
  linked: [["Allergic rhinitis, urticaria, cold urticaria, dermatographism", "[FDA]", ""], ["Serotonin syndrome (off-label)", "[NEP]", "poisoning-adult"]],
  forms: ["Tablets 4 mg; syrup 2 mg/5 mL [NEP]."],
  moa: "H1 and 5-HT2 antagonist [NEP].",
  pk: ["Hepatic metabolism [NEP]."],
  ind: { adult: ["Allergic rhinitis and conjunctivitis, mild urticaria/angioedema, blood product reactions, cold urticaria, dermatographism, adjunct after anaphylaxis [FDA]."], paed: ["From 2 years; not in newborns or premature infants [FDA]."] },
  adult: [["Allergic conditions", "Start 4 mg three times daily; usual 12–16 mg/day (range 4–20 mg); occasionally up to 32 mg; not above 0.5 mg/kg/day [FDA]."]],
  paed: { tiers: ["2–6 years: 2 mg two or three times daily (about 0.25 mg/kg/day or 8 mg/m²/day); maximum 12 mg/day [FDA].", "7–14 years: 4 mg two or three times daily; maximum 16 mg/day [FDA]."], transition: "Adult dose from 15 years [FDA].", calcNote: "Fixed age-band doses." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Elderly more prone to dizziness, sedation, hypotension [NEP]." },
  tox: { human: "CNS depression or stimulation (children), atropine-like effects [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Newborn or premature infants [FDA].", "Nursing mothers [FDA].", "Hypersensitivity to cyproheptadine or similar drugs [FDA].", "MAO inhibitor therapy [FDA].", "Angle-closure glaucoma; stenosing peptic ulcer; prostatic hypertrophy; bladder neck or pyloroduodenal obstruction; elderly debilitated [FDA]."],
  ae: { common: ["Sedation, dry mouth, increased appetite and weight gain [NEP]."], serious: ["Paradoxical excitation, hallucinations in children [NEP]"] },
  monitor: ["Sedation [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cyproheptadine", indication_id: "c26", label: "2–6 years — 2 mg two or three times daily (max 12 mg/day)", route: "PO", population: { min_age_months: 24, max_age_months: 84, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 12, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 4, unit: "mg/tab" }], rounding: "Half tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cyproheptadine", indication_id: "c714", label: "7–14 years — 4 mg two or three times daily (max 16 mg/day)", route: "PO", population: { min_age_months: 84, max_age_months: 180, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 16, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 4, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "cyproheptadine", indication_id: "adult", label: "Adult — 4 mg three times daily (usual 12–16 mg/day)", route: "PO", population: { min_age_months: 180, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_daily: 32, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 4, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Not above 0.5 mg/kg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cyproheptadine HCl tablets (ANDA212491), label effective 2026-10-07", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2851bd5c-fcc8-4a7a-9be3-950ea799dee1"]],
  dose: { tagline: "Sedating antihistamine with antiserotonin effect.",
    adult: [{ ind: "Allergic conditions", text: "4 mg three times daily; usual 12–16 mg/day.", calc: ["adult"] }],
    child: [
      { ind: "2–6 years", text: "2 mg two or three times daily (max 12 mg/day).", calc: ["c26"] },
      { ind: "7–14 years", text: "4 mg two or three times daily (max 16 mg/day).", calc: ["c714"] }
    ] }
});

/* ---------- CYTARABINE (FDA cytarabine injection, Hospira, ANDA075383, eff. 2026-10-19) ---------- */
FDB_M("cytarabine", {
  inn: "Cytarabine", atc: "L01BC01", cls: "Pyrimidine antimetabolite",
  linked: [["Acute myeloid leukaemia — induction", "[FDA]", ""], ["ALL; CML blast phase; meningeal leukaemia (intrathecal)", "[FDA]", ""]],
  forms: ["Injection 20 mg/mL and 100 mg/mL (IV, SC, intrathecal — preservative-free only) [FDA]."],
  moa: "Inhibits DNA polymerase in S phase [NEP].",
  pk: ["Half-life 1–3 h; CSF half-life about 2 h after intrathecal dose [FDA]."],
  ind: { adult: ["Remission induction in acute non-lymphocytic leukaemia (with other drugs); ALL; blast phase CML; intrathecal for meningeal leukaemia [FDA]."], paed: ["Children [FDA]."] },
  adult: [["AML induction", "100 mg/m²/day continuous IV infusion days 1–7, or 100 mg/m² IV every 12 h days 1–7 [FDA]."], ["Intrathecal", "5–75 mg/m²; most often 30 mg/m² every 4 days until CSF normal, then one more dose (preservative-free) [FDA]."]],
  paed: { tiers: ["Same mg/m² as adults [FDA]."], transition: "Same [FDA].", calcNote: "BSA dosing; needs height." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Caution — may need lower dose [NEP].", preg: "Can cause fetal harm [NEP].", other: "High-dose regimens: cerebellar toxicity and conjunctivitis — steroid eye drops [NEP]." },
  tox: { human: "Severe marrow suppression; high doses: CNS, GI and pulmonary toxicity [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Hypersensitivity to cytarabine [FDA]."],
  ae: { common: ["Myelosuppression, nausea, vomiting, diarrhoea, mucositis, fever, rash [FDA]."], serious: ["Bone marrow suppression (boxed) [FDA]", "Cytarabine syndrome (fever, myalgia, bone pain, rash) [NEP]", "Hepatic dysfunction [FDA]"] },
  monitor: ["Daily blood counts during induction; liver and kidney tests [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "cytarabine", indication_id: "ind", label: "AML induction — 100 mg/m² every 12 h (days 1–7)", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: ["Or 100 mg/m²/day continuous infusion"], sources: ["FDA"] },
    { drug: "cytarabine", indication_id: "it", label: "Intrathecal — 30 mg/m² every 4 days", route: "intrathecal", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 96, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj (preservative-free)", strength: 20, unit: "mg/mL" }], rounding: "Nearest mg", renal: [], flags: ["Preservative-free only"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Cytarabine injection — Hospira (ANDA075383), label effective 2026-10-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e3a8c0e9-19ed-49b7-8464-11e8806f47fd"]],
  dose: { tagline: "Antimetabolite backbone of AML induction; also intrathecal.",
    boxedTitle: "Warning",
    boxed: "Only physicians experienced in cancer chemotherapy should use Cytarabine Injection. For induction therapy patients should be treated in a facility with laboratory and supportive resources sufficient to monitor drug tolerance and protect and maintain a patient compromised by drug toxicity. The main toxic effect of cytarabine injection is bone marrow suppression with leukopenia, thrombocytopenia and anemia. Less serious toxicity includes nausea, vomiting, diarrhea and abdominal pain, oral ulceration, and hepatic dysfunction. The physician must judge possible benefit to the patient against known toxic effects of this drug in considering the advisability of therapy with Cytarabine Injection.",
    adult: [
      { ind: "AML induction", text: "100 mg/m²/day continuous infusion, or 100 mg/m² every 12 h, days 1–7.", calc: ["ind"] },
      { ind: "Meningeal leukaemia (IT)", text: "30 mg/m² every 4 days until CSF clears, then one more.", calc: ["it"] }
    ],
    child: [{ ind: "Children", text: "Same mg/m².", calc: ["ind", "it"] }] }
});

/* ---------- CYTOMEGALOVIRUS IMMUNOGLOBULIN (FDA CYTOGAM, Kamada, BLA103189, eff. 2026-08-24) ---------- */
FDB_M("cytomegalovirus-immunoglobulin", {
  inn: "Cytomegalovirus immunoglobulin (human)", atc: "J06BB09", cls: "Hyperimmune IV immunoglobulin",
  linked: [["CMV prophylaxis after kidney, lung, liver, pancreas or heart transplant", "[FDA]", ""]],
  forms: ["Solution for IV infusion (concentration on the vial) [FDA]."],
  moa: "Passive anti-CMV antibodies [NEP].",
  pk: ["Not established in primary source. [NEP]"],
  ind: { adult: ["Prophylaxis of CMV disease with solid organ transplant; with ganciclovir for non-kidney D+/R− transplants [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Kidney transplant", "150 mg/kg within 72 h; 100 mg/kg at 2, 4, 6, 8 weeks; 50 mg/kg at 12 and 16 weeks [FDA]."], ["Liver, pancreas, lung, heart", "150 mg/kg within 72 h and at 2, 4, 6, 8 weeks; 100 mg/kg at 12 and 16 weeks [FDA]."], ["Maximum", "150 mg Ig/kg per infusion [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "—", calcNote: "mg/kg by schedule." },
  adj: { renal: "Kidney injury risk with IVIG — hydrate, infuse slowly [NEP].", hepatic: "Not applicable. [NEP]", preg: "Not established in primary source. [NEP]", other: "Start infusion slowly; monitor vital signs [NEP]. Delays response to live vaccines [NEP]." },
  tox: { human: "Fluid overload [NEP].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive [NEP]." },
  contra: ["Prior severe reaction to this or other human immunoglobulin [FDA].", "Selective IgA deficiency with anti-IgA antibodies (anaphylaxis risk) [FDA]."],
  ae: { common: ["Flushing, chills, muscle cramps, back pain, fever, nausea [NEP]."], serious: ["Anaphylaxis [FDA]", "Thrombosis; kidney injury; aseptic meningitis (IVIG class) [NEP]"] },
  monitor: ["Vital signs during infusion; urine output, creatinine [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "cytomegalovirus-immunoglobulin", indication_id: "std", label: "Within 72 h of transplant — 150 mg/kg IV", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 150, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "Volume from the vial concentration", renal: [], flags: ["Later doses per transplant schedule"], sources: ["FDA"] }],
  sources: [["FDA", "CYTOGAM (cytomegalovirus immune globulin IV, human) — Kamada, label effective 2026-08-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c8e2bb3f-2a4d-4c55-b145-ba96c1928d44"]],
  dose: { tagline: "CMV hyperimmune globulin for solid organ transplant prophylaxis.",
    adult: [
      { ind: "Kidney transplant", text: "150 mg/kg within 72 h; 100 mg/kg at weeks 2–8; 50 mg/kg at weeks 12 and 16.", calc: ["std"] },
      { ind: "Other organs", text: "150 mg/kg at 72 h and weeks 2–8; 100 mg/kg at weeks 12 and 16." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* Brands for batch C-3 — India (PharmEasy) and Bangladesh (MedEx), built 24 Nov 2026 with _work/tools/fdb-brands.js; weak matches removed by hand (Zocon, B-complex products for cyanocobalamin, oral colistin syrups, cyproheptadine combinations). */
(function () {
  const B = {"clindamycin":{"BT":"Bhutan supplies by generic name.","IN":[["Clinpeu","Avighna Medicare Pvt Ltd","Clinpeu 1% Tube Of 20Gm Gel"],["Cleargel","Hegde And Hegde Pharmaceuticals Llp","Cleargel Tube Of 20Gm Gel"],["Clindac","Alkem Laboratories Ltd","Clindac A 1% Bottle Of 100Ml Mist Spray"]],"BD":[["Asiclin","Asiatic Laboratories Ltd","300 mg"],["Clindacap","Astra Biopharmaceuticals Ltd","300 mg"],["Clindaben","Benham Pharmaceuticals Ltd","150 mg"]],"src":["https://pharmeasy.in/online-medicine-order/clinpeu-1-tube-of-20gm-ointment-3553818","https://pharmeasy.in/online-medicine-order/clear-1-gel-20-gm-200337","https://pharmeasy.in/online-medicine-order/clindac-a-mist-spray-100ml-219630","https://medex.com.bd/brands/19390/asiclin-300-mg-capsule","https://medex.com.bd/brands/19393/clindacap-300-mg-capsule","https://medex.com.bd/brands/19395/clindaben-150-mg-capsule"]},"clobazam":{"BT":"Bhutan supplies by generic name.","IN":[["Frisium","Cipla Limited","Frisium 10Mg Strip Of 30 Tablets"]],"BD":[["Clob","Opsonin Pharma Ltd","10 mg"],["Clobid","Medimet Pharmaceuticals Ltd","10 mg"],["Colax","Pharmadesh Laboratories Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/frisium-10-mg-tablet-30-3109922","https://medex.com.bd/brands/4272/clob-10-mg-tablet","https://medex.com.bd/brands/4274/clobid-10-mg-tablet","https://medex.com.bd/brands/4276/colax-10-mg-tablet"]},"clobetasol":{"BT":"Bhutan supplies by generic name.","IN":[["Terabet","Leeford Healthcare Ltd","Terabet Tube Of 20Gm Cream"]],"BD":[["Clozema","Team Pharmaceuticals Ltd","0.05%"],["Xenovate","UniMed UniHealth Pharmaceuticals Ltd","0.05%"],["Topiclo","Eskayef Pharmaceuticals Ltd","0.05%"]],"src":["https://pharmeasy.in/online-medicine-order/terabet-cream-16401","https://medex.com.bd/brands/27329/clozema-005-cream","https://medex.com.bd/brands/31619/xenovate-005-cream","https://medex.com.bd/brands/30035/topiclo-005-topical-spray"]},"clofarabine":{"BT":"Bhutan supplies by generic name.","IN":[["Farabine","Intas Pharmaceuticals Ltd","Farabine 20 Mg Injection 1"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/farabine-20-mg-injection-1-3103714"]},"clofazimine":{"BT":"Bhutan supplies by generic name.","IN":[["Hansepran","Abbott Healthcare Pvt Ltd","Hansepran 100Mg Strip Of 10 Capsules"],["Fazim","Lark Laboratories Ltd","Fazim 100Mg Strip Of 10 Capsules"],["Clofaz","Genetica Pharma Pvt Ltd","Clofaz 100Mg Strip Of 10 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/hansepran-100mg-capsule-49678","https://pharmeasy.in/online-medicine-order/fazim-100mg-cap-46775","https://pharmeasy.in/online-medicine-order/clofaz-100mg-capsule-3829"]},"clomifene":{"BT":"Bhutan supplies by generic name.","IN":[["Clofert","Maneesh Pharmaceuticals Ltd","Clofert 50Mg Strip Of 10 Tablets"],["Siphene","Serum Institute Of India Private Limited","Siphene M 25Mg Strip Of 30 Tablets"],["Fertyl","Arex Laboratories Private Limited","Fertyl M 25Mg Strip Of 30 Tablets"]],"BD":[["Fermid","Gaco Pharmaceuticals Ltd","50 mg"],["Fertil","Beximco Pharmaceuticals PLC","50 mg"],["Ovuclon","Incepta Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/clofert-50mg-strip-of-10-tablets-41254","https://pharmeasy.in/online-medicine-order/siphene-m-25mg-tab-30-s-193578","https://pharmeasy.in/online-medicine-order/fertyl-m-25mg-tablet-47092","https://medex.com.bd/brands/5957/fermid-50-mg-tablet","https://medex.com.bd/brands/5958/fertil-50-mg-tablet","https://medex.com.bd/brands/5959/ovuclon-50-mg-tablet"]},"clomipramine":{"BT":"Bhutan supplies by generic name.","IN":[["Clonil","Intas Pharmaceuticals Ltd","Clonil 25Mg Strip Of 10 Tablets"]],"BD":[["Anafranil","Naafco Pharma PLC","25 mg"],["Clofranil","Sun Pharmaceutical (Bangladesh) Ltd","25 mg"],["Timex","Orion Pharma Ltd","25 mg"]],"src":["https://pharmeasy.in/online-medicine-order/clonil-25mg-tablet-41330","https://medex.com.bd/brands/4446/anafranil-25-mg-tablet","https://medex.com.bd/brands/4447/clofranil-25-mg-tablet","https://medex.com.bd/brands/4448/timex-25-mg-tablet"]},"clonazepam":{"BT":"Bhutan supplies by generic name.","IN":[["Lonazep","Sun Pharma","Lonazep 0.5Mg Strip Of 10 Tablets"],["Clonotril","Torrent Pharmaceuticals Ltd","Clonotril 0.25Mg Strip Of 10 Tablets"],["Clotril","Spinex Healthcare","Clotril 0.5Mg Strip Of 10 Tablets"]],"BD":[["Clonazepam","Pharmik Laboratories Ltd","0.5 mg"],["Lonazep MD","Sun Pharmaceutical (Bangladesh) Ltd","0.5 mg"],["Xyclon","Ziska Pharmaceuticals Ltd","1 mg"]],"src":["https://pharmeasy.in/online-medicine-order/lonazep-0-5mg-tablet-25026","https://pharmeasy.in/online-medicine-order/clonotril-0-25mg-tablet-172596","https://pharmeasy.in/online-medicine-order/clotril-0-5-mg-tablet-10-3108557","https://medex.com.bd/brands/37640/clonazepam-05-mg-tablet","https://medex.com.bd/brands/31941/lonazep-md-05-mg-dispersible-tablet","https://medex.com.bd/brands/30836/xyclon-1-mg-tablet"]},"clonidine":{"BT":"Bhutan supplies by generic name.","IN":[["Arkamin","Torrent Pharmaceuticals Ltd","Arkamin 100Mcg Strip Of 30 Tablets"],["Arkaneed","Chemo Healthcare Pvt Ltd","Arkaneed 100Mcg Strip Of 30 Tablets"],["Arkapres","Biokindle Lifesciences Pvt Ltd","Arkapres 100Mcg Strip Of 10 Tablets"]],"BD":[["Clonipres","Navana Pharmaceuticals Ltd","0.1 mg"],["Noflash","Veritas Pharmaceuticals Ltd","0.1 mg"],["Clonipres ER","Navana Pharmaceuticals Ltd","0.1 mg"]],"src":["https://pharmeasy.in/online-medicine-order/arkamin-100mcg-strip-of-30-tablets-27915","https://pharmeasy.in/online-medicine-order/arkaneed-100mcg-strip-of-30-tablets-4488606","https://pharmeasy.in/online-medicine-order/arkapres-100mcg-strip-of-10-tablets-191095","https://medex.com.bd/brands/2458/clonipres-01-mg-tablet","https://medex.com.bd/brands/31939/noflash-01-mg-tablet","https://medex.com.bd/brands/36817/clonipres-er-01-mg-xr-tablet"]},"clopidogrel":{"BT":"Bhutan supplies by generic name.","IN":[["Clopilet","Sun Pharma","Clopilet 75Mg Strip Of 15 Tablets"],["Clopitab","Lupin","Clopitab 75Mg Strip Of 15 Tablets"],["Clopicard","Cipla Gx","Clopicard 75Mg Strip Of 15 Tablets"]],"BD":[["Clocard","Aristopharma Ltd","75 mg"],["Loplate","Kemiko Pharmaceuticals Ltd","75 mg"],["Clotinil","Rephco Pharmaceuticals Ltd","75 mg"]],"src":["https://pharmeasy.in/online-medicine-order/clopilet-75mg-strip-of-15-tablets-25754","https://pharmeasy.in/online-medicine-order/clopitab-75mg-strip-of-15-tablets-41383","https://pharmeasy.in/online-medicine-order/clopicard-75mg-15-s-tab-6976","https://medex.com.bd/brands/19534/clocard-75-mg-tablet","https://medex.com.bd/brands/19539/loplate-75-mg-tablet","https://medex.com.bd/brands/19543/clotinil-75-mg-tablet"]},"clotrimazole":{"BT":"Bhutan supplies by generic name.","IN":[["Candid V","Glenmark Pharmaceuticals","Candid V Tube Of 30Gm Vaginal Gel"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/candid-v-gel-11675"]},"clozapine":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Sizopin","Sun Pharmaceutical (Bangladesh) Ltd","25 mg"],["Zapenia","Incepta Pharmaceuticals Ltd","25 mg"],["Sensipin","Beximco Pharmaceuticals PLC","25 mg"]],"src":["https://medex.com.bd/brands/4310/sizopin-25-mg-tablet","https://medex.com.bd/brands/4312/zapenia-25-mg-tablet","https://medex.com.bd/brands/30312/sensipin-25-mg-tablet"]},"coagulation-factor-ix":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Octanine F","City Overseas Ltd","500 IU/vial"]],"src":["https://medex.com.bd/brands/34408/octanine-f-500-iu-iv-infusion"]},"coagulation-factor-viia":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["NovoSeven","Novo Nordisk Pharma (Pvt","1 mg/vial"]],"src":["https://medex.com.bd/brands/17075/novoseven-1-mg-injection"]},"colchicine":{"BT":"Bhutan supplies by generic name.","IN":[["Zycolchin","Zydus Healthcare Limited","Zycolchin 0.5Mg Strip Of 10 Tablets"],["Goutnil","Inga Laboratories Pvt Ltd","Goutnil 0.5Mg Strip Of 10 Tablets"]],"BD":[["Coluric","UniMed UniHealth Pharmaceuticals Ltd","0.6 mg"],["Kolchin","Incepta Pharmaceuticals Ltd","0.5 mg"],["Colimax","Square Pharmaceuticals PLC","0.6 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zycolchin-0-5mg-tablet-30492","https://pharmeasy.in/online-medicine-order/goutnil-0-5mg-tablet-49391","https://medex.com.bd/brands/11675/coluric-06-mg-tablet","https://medex.com.bd/brands/11676/kolchin-05-mg-tablet","https://medex.com.bd/brands/11678/colimax-06-mg-tablet"]},"corticotropin":{"BT":"Bhutan supplies by generic name.","IN":[["Acton Prolongatum","Ferring Pharmaceuticals Pvt Ltd","Acton Prolongatum 60Iu Vial Of 5Ml Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/acton-prolongatum-60iu-injection-33010"]},"crisaborole":{"BT":"Bhutan supplies by generic name.","IN":[["Crisnuo","Ranbaxy Laboratories (sun Pharma)","Crisnuo Tube Of 20Gm Ointment"],["Bdcrisa","Bdr Pharmaceuticals Internationals Pvt Ltd","Bdcrisa 2% Tube Of 10Gm Ointment"],["Crisanew","Eris Life Sciences Pvt Ltd","Crisanew Tube Of 10Gm Ointment"]],"BD":[["Crisaderm","Incepta Pharmaceuticals Ltd","2% w/w"],["Crisa","ACME Laboratories Ltd","2% w/w"]],"src":["https://pharmeasy.in/online-medicine-order/crisnuo-ointment-20-g-4177715","https://pharmeasy.in/online-medicine-order/bdcrisa-2-tube-of-10gm-ointment-4195848","https://pharmeasy.in/online-medicine-order/crisanew-oint-10-gm-4133655","https://medex.com.bd/brands/30052/crisaderm-2-w-ointment"]},"crizotinib":{"BT":"Bhutan supplies by generic name.","IN":[["Crizenta","Adley Formulation","Crizenta 250Mg Bottle Of 60 Capsules"],["Crikzo","Hetero Healthcare Limited","Crikzo 250Mg Bottle Of 30 Capsules"],["Crizalk","Pfizer Product India Private Limited","Crizalk 250Mg Strip Of 10 Capsules (Pack Of 6)"]],"BD":[["Alkriz","Beacon Pharmaceuticals PLC","250 mg"],["Crizocent","Incepta Pharmaceuticals Ltd","250 mg"],["Algrofin","Genvio Pharma Ltd","250 mg"]],"src":["https://pharmeasy.in/online-medicine-order/crizenta-250-mg-bottle-of-60-capsules-4828110","https://pharmeasy.in/online-medicine-order/crikzo-250-mg-bottle-of-30-capsules-4828109","https://pharmeasy.in/online-medicine-order/crizalk-250mg-strip-of-60-capsules-178610","https://medex.com.bd/brands/25992/alkriz-250-mg-capsule","https://medex.com.bd/brands/25993/crizocent-250-mg-capsule","https://medex.com.bd/brands/29317/algrofin-250-mg-capsule"]},"cromoglicic-acid":{"BT":"Bhutan supplies by generic name.","IN":[["Cromogat Forte","Pharmatak Opthalmics I Pvt Ltd","Cromogat Forte 4% Eye Drops"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/cromogat-forte-4-eye-drops-117072"]},"cyanocobalamin":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Cynovit","Chemist Laboratories Ltd","1000 mcg/ml"],["Cynomin","Jayson Pharmaceutical Ltd","250 mcg/ml"]],"src":["https://medex.com.bd/brands/13423/cynovit-1000-mcg-imsc-injection","https://medex.com.bd/brands/13424/cynomin-250-mcg-imsc-injection"]},"cyclobenzaprine":{"BT":"Bhutan supplies by generic name.","IN":[["Skelebenz","Sun Pharma","Skelebenz 15Mg Strip Of 10 Capsules"],["Flexabenz","Macleods Pharmaceuticals","Flexabenz 5Mg Strip Of 10 Tablets"]],"BD":[["Flexor","Incepta Pharmaceuticals Ltd","5 mg"],["Cyrin","Hallmark Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/skelebenz-15mg-strip-of-10-capsules-25532","https://pharmeasy.in/online-medicine-order/flexabenz-5mg-tablet-17555","https://medex.com.bd/brands/11793/flexor-5-mg-tablet","https://medex.com.bd/brands/11795/cyrin-10-mg-tablet"]},"cyclopentolate":{"BT":"Bhutan supplies by generic name.","IN":[["Cyclogyl","Intas Pharmaceuticals Ltd","Cyclogyl 1% Bottle Of 5Ml Eye Drops"],["Cyclobion","Ikon Remedies Private Limited","Cyclobion 1% Bottle Of 5Ml Eye Drops"],["Cyclomid","Jawa Pharmaceutical Pvt Ltd","Cyclomid Bottle Of 5Ml Eye Drops"]],"BD":[["Mydrate","Beximco Pharmaceuticals PLC","10 mg/ml"]],"src":["https://pharmeasy.in/online-medicine-order/cyclogyl-1-eye-drops-5ml-42460","https://pharmeasy.in/online-medicine-order/cyclobion-eye-drops-3934609","https://pharmeasy.in/online-medicine-order/cyclomid-eye-drops-5ml-42467","https://medex.com.bd/brands/30473/mydrate-10-mg-eye-drop"]},"cyclophosphamide":{"BT":"Bhutan supplies by generic name.","IN":[["Cycloxan","Zydus Lifesciences Limited","Cycloxan 50Mg Strip Of 10 Tablets"],["Cyclosted","Halsted Pharma","Cyclosted 1 Gm Inj 1S"],["Cyphos","Intas Pharmaceuticals Ltd","Cyphos 200Mg Injection 15Ml"]],"BD":[["Neoclomide","Healthcare Pharmaceuticals Ltd","1 gm/vial"],["Cycloph","Eskayef Pharmaceuticals Ltd","200 mg/vial"],["Cyphos","Drug International Ltd","1 gm/vial"]],"src":["https://pharmeasy.in/online-medicine-order/cycloxan-50mg-tablet-42499","https://pharmeasy.in/online-medicine-order/cyclosted-1-gm-inj-1s-4133668","https://pharmeasy.in/online-medicine-order/cyphos-200mg-inj-15ml-80032","https://medex.com.bd/brands/19648/neoclomide-1-gm-iv-infusion","https://medex.com.bd/brands/38797/cycloph-200-mg-iv-infusion","https://medex.com.bd/brands/28357/cyphos-1-gm-iv-infusion"]},"cyproheptadine":{"BT":"Bhutan supplies by generic name.","IN":[["Practin","Dr Reddy's Laboratories Ltd","Practin 4Mg Strip Of 10 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/practin-4mg-tablet-29414"]},"cytarabine":{"BT":"Bhutan supplies by generic name.","IN":[["Biobin","Zydus Lifesciences Limited","Biobin 1Gm Injection 10Ml"],["Cytraz","Zuvius Lifesciences Pvt. Ltd.","Cytraz 500Mg Dry Vial Of 1 Powder For Injection"],["Cytasted","Halsted Pharma","Cytasted 100Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Cytabin","Beacon Pharmaceuticals PLC","100 mg/vial"],["Cytomia","Drug International Ltd","100 mg/vial"],["Cytosor","Eskayef Pharmaceuticals Ltd","100 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/biobin-1gm-inj-10ml-78743","https://pharmeasy.in/online-medicine-order/cytraz-500-mg-dry-vial-of-1-powder-for-injection-4827944","https://pharmeasy.in/online-medicine-order/cytasted-100mg-dry-vial-of-1-powder-for-injection-4819306","https://medex.com.bd/brands/15045/cytabin-100-mg-iv-infusion","https://medex.com.bd/brands/28356/cytomia-100-mg-iv-infusion","https://medex.com.bd/brands/29795/cytosor-100-mg-iv-infusion"]}};
  Object.entries(B).forEach(([id, b]) => { if (window.FDB[id]) window.FDB[id].brands = b; });
})();
