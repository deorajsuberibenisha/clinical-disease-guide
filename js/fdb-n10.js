/* Clinical Disease Guide — Drug monograph database, batch N-10 (26 Nov 2026).
   Bhutan NEML 2025 items found missing in a full line-by-line audit of the NEML (owner: "Yes, build all gaps"):
   thiamine, anti-tetanus immunoglobulin (human), anti-rabies immunoglobulin (equine), coal tar solution, compound benzoin inhalation,
   nitrofurazone cream, anti-haemorrhoidal ointment (beclometasone + phenylephrine + lidocaine), glycerin suppository.
   Sources: FDA labels where one exists; Bhutan STG 2024 (thiamine) and Bhutan rabies guideline 2023 rev. 2024 (ERIG).
   Nitrofurazone and the anti-haemorrhoidal combination have no current FDA label — doses marked [UNVERIFIED-KNOWLEDGE].
   Not built (not medicines in the drug-monograph sense): blood components, dialysis concentrates, water for injection, methyl hydroxybenzoate powder.
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js. */
(function () { // N-10 scope
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const STG_SRC = ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""];
const RAB_SRC = ["BT-RAB", "National guidelines for management of rabies and anti-rabies prophylaxis, 3rd edition 2023 (revised 2024) — Zoonotic Disease Control Unit, Ministry of Health, Bhutan", ""];
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const N10_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const pop = (a, b, w1, w2) => ({ min_age_months: a, max_age_months: b, min_weight_kg: w1, max_weight_kg: w2 });
const C = (drug, id, label, route, population, basis, value, interval_h, extra) => Object.assign({ drug, indication_id: id, label, route, population, basis, dose: { value, unit: "mg", per: "dose" }, interval_h, divided_doses: interval_h ? null : 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "per product", renal: [], flags: [], sources: ["FDA"] }, extra || {});

FDB_M("thiamine", {
  inn: "Thiamine (Vit B1)", atc: "A11DA01", cls: "Vitamin B1",
  linked: [],
  forms: ["Injection 100 mg/mL [FDA] [BT-NEML].", "Tablet 75 mg (Bhutan NEML) [BT-NEML]."],
  moa: "Coenzyme (thiamine pyrophosphate) in carbohydrate metabolism [UNVERIFIED-KNOWLEDGE].",
  pk: ["Excess is excreted in urine; doses above about 30 mg three times a day are not used effectively [FDA]."],
  ind: { adult: ["Thiamine deficiency and beriberi (dry or wet) [FDA].", "Wernicke's encephalopathy; before or with IV dextrose in people with marginal thiamine status [FDA].", "Alcohol-related presentations (Bhutan STG) [BT-STG]."], paed: ["Infantile beriberi [FDA]."] },
  adult: [["Bhutan STG (alcohol-related)", "100 mg IV stat (if available), then 75 mg orally two or three times a day for up to three months [BT-STG]."], ["Wernicke-Korsakoff (label)", "100 mg IV initially, then 50–100 mg IM daily until eating a balanced diet [FDA]."], ["Beriberi (label)", "10–20 mg IM three times daily for up to 2 weeks, then oral multivitamin with 5–10 mg thiamine daily for a month [FDA]."], ["Wet beriberi with heart failure", "Emergency — give slowly IV [FDA]."], ["Neuritis of pregnancy with severe vomiting", "5–10 mg IM daily [FDA]."], ["With IV dextrose", "Give thiamine first in people at risk of deficiency [FDA]."]],
  paed: { tiers: ["Infantile beriberi: mild may respond to oral therapy; with collapse, 25 mg may be given cautiously IV [FDA]."], transition: "Adult doses for adults.", calcNote: "Fixed doses." },
  adj: { renal: "Injection contains aluminium — caution with prolonged use in kidney impairment [FDA].", hepatic: NEP, pregnancy: "Used for neuritis of pregnancy [FDA].", other: "Skin test (1/100 of the dose intradermally, watch 30 min) if prior reaction or drug allergy is suspected [FDA]." },
  tox: { human: "Parenteral doses of 100–500 mg singly have been given without toxic effects [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["History of sensitivity to thiamine or any ingredient [FDA]."],
  ae: { common: ["Injection-site tenderness; feeling of warmth, pruritus [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serious hypersensitivity and anaphylaxis, especially after repeated injections; deaths have occurred after IV or IM use [FDA]"] },
  monitor: ["Watch for anaphylaxis after injection; have resuscitation available [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: thiamine (vitamin B1) 100 mg/mL injection and 75 mg tablet [BT-NEML].", strengths: "Injection 100 mg/mL; tablet 75 mg.", stg: "Bhutan STG 2024: 100 mg IV stat, then 75 mg orally two or three times a day for up to three months [BT-STG]." },
  calc: [
    C("thiamine", "iv", "Wernicke / alcohol-related — 100 mg IV stat", "IV", ADULT, "fixed", 100, null, { formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "1 mL", sources: ["BT-STG", "FDA"], flags: ["Give before or with IV dextrose", "Label: then 50–100 mg IM daily"] }),
    C("thiamine", "po", "After IV dose — 75 mg orally (two or three times a day, up to 3 months)", "PO", ADULT, "fixed", 75, 8, { formulations: [{ form: "tablet", strength: 75, unit: "mg", whole: true }], rounding: "1 tablet", sources: ["BT-STG"], flags: ["Two or three times a day (every 8–12 h)"] })
  ],
  sources: [["FDA", "Thiamine hydrochloride injection (ANDA080571) — FDA label (DailyMed)", N10_DM("06446e9a-0e85-0623-e063-6294a90ac403")], STG_SRC, NEML_SRC],
  dose: { tagline: "Vitamin B1 — 100 mg IV stat for Wernicke/alcohol-related illness (before dextrose), then 75 mg oral 2–3 times daily.",
    cautionTitle: "Use with care",
    caution: "Serious hypersensitivity and anaphylaxis can occur, especially after repeated injections; deaths have followed IV or IM use. Give IV doses slowly and have resuscitation ready [FDA].",
    adult: [{ ind: "Wernicke / alcohol-related (Bhutan STG)", text: "100 mg IV stat, then 75 mg orally 2–3 times daily up to 3 months.", calc: ["iv", "po"] }, { ind: "Beriberi (label)", text: "10–20 mg IM three times daily up to 2 weeks." }],
    child: [{ ind: "Infantile beriberi with collapse", text: "25 mg cautiously IV (label)." }] }
});

FDB_M("tetanus-immunoglobulin", {
  inn: "Tetanus immunoglobulin", atc: "J06BB02", cls: "Human hyperimmune immunoglobulin (anti-tetanus)",
  linked: [],
  forms: ["Injection 500 IU vial (Bhutan NEML) [BT-NEML].", "Prefilled syringe 250 units (HyperTET) [FDA]."],
  moa: "Passive antibodies that neutralise tetanus toxin [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Tetanus prophylaxis after injury when immunisation is incomplete or uncertain [FDA].", "Part of treatment of active tetanus (limited evidence) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Prophylaxis (adults and children 7 years+)", "250 units deep IM, with Td in a different limb and separate syringe [FDA]."], ["Who needs it", "Wounds other than clean minor wounds when fewer than 3 tetanus toxoid doses or an unknown history [FDA]."], ["Treatment of active tetanus", "Give immediately as part of standard therapy; dose adjusted to severity (label gives no fixed dose) [FDA]."], ["Never", "IV [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Under 7 years: 4 units/kg by body weight, though giving the whole 250 units regardless of size may be advisable; give DTP/DT at the same time, different limb [FDA]."], transition: "250 units from 7 years.", calcNote: "Units — 250 units, or 4 units/kg under 7." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Use if indicated [UNVERIFIED-KNOWLEDGE].", other: "Live vaccines (e.g. MMR) may be less effective if given within 3 months [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Only injection-site pain and tenderness expected [FDA].", animal: LD, manage: NEP },
  contra: ["Severe reaction to human immunoglobulin [FDA] [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Injection-site soreness, mild fever [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis (rare) [FDA] [UNVERIFIED-KNOWLEDGE]", "Caution in thrombocytopenia or bleeding disorders (IM) [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: { neml: "On the Bhutan NEML 2025: anti-tetanus immunoglobulin (human) 500 IU injection vial [BT-NEML].", strengths: "500 IU vial.", stg: "See Bhutan STG wound management [BT-STG] [UNVERIFIED-KNOWLEDGE]." },
  calc: [
    C("tetanus-immunoglobulin", "proph", "Tetanus prophylaxis, 7 years+ — 250 units deep IM", "IM", pop(84, null, null, null), "fixed", 250, null, { dose: { value: 250, unit: "IU", per: "dose" }, rounding: "per vial", flags: ["Give Td at the same time, different limb", "Bhutan vial is 500 IU"] }),
    C("tetanus-immunoglobulin", "child", "Tetanus prophylaxis, under 7 years — 4 units/kg IM", "IM", pop(null, 84, null, null), "mg_per_kg", 4, null, { dose: { value: 4, unit: "IU", per: "dose" }, caps: { max_single: 250, unit: "IU" }, rounding: "per vial", flags: ["The label says giving the whole 250 units may be advisable", "Give DTP/DT at the same time, different limb"] })
  ],
  sources: [["FDA", "HyperTET (tetanus immune globulin, human) — FDA label (DailyMed)", N10_DM("393fa198-7e07-4162-bd0a-9d873f1544a9")], NEML_SRC],
  dose: { tagline: "Passive tetanus protection — 250 units deep IM with Td for tetanus-prone wounds in incompletely immunised people.",
    adult: [{ ind: "Wound prophylaxis", text: "250 units deep IM, with Td.", calc: ["proph"] }, { ind: "Active tetanus", text: "Give at once; dose by severity." }],
    child: [{ ind: "Under 7 years", text: "4 units/kg (or the whole 250 units).", calc: ["child"] }, { ind: "7 years+", text: "250 units.", calc: ["proph"] }] }
});

FDB_M("rabies-immunoglobulin-equine", {
  inn: "Rabies immunoglobulin", atc: "J06BB05", cls: "Equine rabies immunoglobulin (ERIG) — hyperimmune serum",
  linked: [],
  forms: ["Injection 5 mL vial (Bhutan NEML) [BT-NEML]."],
  moa: "Passive antibodies neutralising rabies virus at the wound until vaccine-induced immunity develops [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Rabies post-exposure prophylaxis with vaccine — Bhutan guideline: indicated in Category II and III exposures, even if previously vaccinated [BT-RAB] [UNVERIFIED-KNOWLEDGE]; when limited, prioritise Category III [BT-RAB]."], paed: ["Same, by body weight [BT-RAB]."] },
  adult: [["Dose", "By body weight; maximum 40 IU/kg — do not exceed the calculated dose [BT-RAB]."], ["How", "Infiltrate into and around the wound(s) as a priority, with the first vaccine dose [BT-RAB]."], ["Once only", "Given once, at or soon after starting PEP; if not available at the first visit it can be given up to day 7 after the first vaccine dose, not later [BT-RAB]."], ["No anaesthetic infiltration", "Give without local anaesthetic injection; topical 2% lignocaine may reduce pain [BT-RAB]."], ["Skin test", "Not needed — purified ERIG; abandoned per WHO [BT-RAB]."], ["Storage", "+2 to +8 °C; do not freeze [BT-RAB]."]],
  paed: { tiers: ["Same IU/kg maximum (40 IU/kg) [BT-RAB]."], transition: "Same.", calcNote: "40 IU/kg maximum, once." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Not a contraindication for PEP [UNVERIFIED-KNOWLEDGE].", other: "Bhutan guideline recommends ERIG in health centres (human RIG maximum is 20 IU/kg) [BT-RAB]." },
  tox: { human: "Do not exceed the maximum — excess RIG can blunt the vaccine response [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: NEP },
  contra: [NEP],
  ae: { common: ["Local pain and swelling [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis and serum sickness (equine protein) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Observe for anaphylaxis after administration [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: anti-rabies immunoglobulin (equine) injection 5 mL vial [BT-NEML].", strengths: "5 mL vial (check IU per vial on the pack).", stg: "Bhutan rabies guideline 2023 (rev. 2024): ERIG maximum 40 IU/kg, wound infiltration, once [BT-RAB]." },
  calc: [C("rabies-immunoglobulin-equine", "pep", "Rabies PEP — ERIG up to 40 IU/kg, once (infiltrate wounds)", "Wound infiltration", pop(null, null, null, null), "mg_per_kg", 40, null, { dose: { value: 40, unit: "IU", per: "dose" }, rounding: "check IU per vial on pack", sources: ["BT-RAB"], flags: ["This is the MAXIMUM — do not exceed", "Infiltrate into and around all wounds", "With the first rabies vaccine dose; not after day 7"] })],
  sources: [RAB_SRC, NEML_SRC],
  dose: { tagline: "Equine rabies immunoglobulin — up to 40 IU/kg once, infiltrated into the wounds with the first vaccine dose.",
    cautionTitle: "Use with care",
    caution: "40 IU/kg is the maximum — never exceed it. Infiltrate into and around the wound(s); give only once, no later than day 7 after the first vaccine dose [BT-RAB].",
    adult: [{ ind: "Rabies post-exposure prophylaxis", text: "Up to 40 IU/kg once, into the wounds.", calc: ["pep"] }],
    child: [{ ind: "Rabies post-exposure prophylaxis", text: "Up to 40 IU/kg once.", calc: ["pep"] }] }
});

FDB_M("coal-tar", {
  inn: "Coal tar", atc: "D05AA01", cls: "Topical keratoplastic / antipsoriatic",
  linked: [],
  forms: ["Coal tar solution 20% (Bhutan NEML; for dilution or compounding) [BT-NEML].", "OTC coal tar shampoos and gels (US OTC monograph) [FDA]."],
  moa: "Antiproliferative, anti-inflammatory and antipruritic effects on the skin [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Dandruff, seborrhoeic dermatitis and psoriasis (OTC labelling) [FDA]."], paed: [NEP] },
  adult: [["Shampoo (OTC label)", "At least twice a week: lather into wet scalp, leave several minutes, rinse and repeat [FDA]."], ["20% solution", "Used diluted or compounded into ointments, pastes or baths, typically at low concentrations — follow a dermatologist's or pharmacy formula [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: [NEP], transition: NEP, calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Do not combine with UV therapy or prescription psoriasis drugs unless directed [FDA]." },
  tox: { human: NEP, animal: LD, manage: "Wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: [NEP],
  ae: { common: ["Irritation, folliculitis, odour, staining; discolouration of grey, blonde or tinted hair [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Photosensitivity — sunburn tendency for up to 24 hours after application [FDA]"] },
  monitor: [NEP],
  local: { neml: "On the Bhutan NEML 2025: coal tar solution 20% (400 mL) bottle [BT-NEML].", strengths: "Solution 20%.", stg: "See Bhutan STG psoriasis / dermatitis chapters [BT-STG] [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [["FDA", "Coal tar gel shampoo (OTC monograph M032) — FDA label (DailyMed)", N10_DM("0464b4ff-1be1-4d84-b7fd-b771ebc1e16c")], NEML_SRC],
  dose: { tagline: "Topical tar for psoriasis, dandruff and seborrhoeic dermatitis — the 20% solution is for dilution or compounding.",
    cautionTitle: "Use with care",
    caution: "External use only; avoid the eyes. Increases sunburn risk for up to 24 hours; do not combine with UV therapy unless directed [FDA].",
    adult: [{ ind: "Scalp psoriasis / dandruff", text: "Tar shampoo at least twice weekly." }, { ind: "20% solution", text: "Dilute or compound per formula." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("compound-benzoin", {
  inn: "Compound benzoin (Friar's balsam)", atc: "R05X", cls: "Inhalant / topical protectant",
  linked: [],
  forms: ["Compound benzoin inhalation 450 mL bottle (Bhutan NEML) [BT-NEML].", "Compound benzoin tincture (OTC protectant) [FDA]."],
  moa: "Aromatic resins; vapour gives symptomatic relief of nasal congestion; film-forming on skin and mucosa [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Steam inhalation for symptomatic relief of congestion (catarrh, sinusitis, colds) [UNVERIFIED-KNOWLEDGE].", "Topical protectant over canker sores (OTC label) [FDA]."], paed: ["OTC topical use from 6 months [FDA]."] },
  adult: [["Steam inhalation", "About 5 mL (1 teaspoon) in a bowl or jug of hot (not boiling) water; inhale the vapour [UNVERIFIED-KNOWLEDGE]."], ["Topical (OTC label)", "Dry the area; apply undiluted with a cotton swab, not more often than every 2 hours [FDA]."]],
  paed: { tiers: ["Topical OTC use from 6 months; under 6 months ask a doctor [FDA].", "Steam inhalation: supervise children — scald risk [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Inhalation/topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Flammable (alcohol) — keep away from flame [FDA]." },
  tox: { human: "Do not swallow [FDA].", animal: LD, manage: "Poison centre advice if swallowed [FDA]." },
  contra: [NEP],
  ae: { common: ["Local irritation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Scalds from hot water during inhalation [UNVERIFIED-KNOWLEDGE]", "Contact allergy [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [NEP],
  local: { neml: "On the Bhutan NEML 2025: compound benzoin inhalation (450 mL) bottle [BT-NEML].", strengths: "Inhalation 450 mL.", stg: "Not in Bhutan STG 2024 [BT-STG] [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [["FDA", "Benzoin compound tincture (OTC protectant, M022) — FDA label (DailyMed)", N10_DM("0c96d810-83dc-47d3-9a75-63a79feaad0a")], NEML_SRC],
  dose: { tagline: "Friar's balsam — about 1 teaspoon in hot water for steam inhalation; flammable, do not swallow.",
    adult: [{ ind: "Steam inhalation", text: "About 5 mL in hot water; inhale vapour." }],
    child: [{ ind: "Children", text: "Supervise — scald risk; topical OTC from 6 months." }] }
});

FDB_M("nitrofurazone", {
  inn: "Nitrofural", atc: "D08AF01", cls: "Topical nitrofuran antibacterial",
  linked: [],
  forms: ["Cream 0.2% (500 g container) (Bhutan NEML) [BT-NEML]."],
  moa: "Broad-spectrum bactericidal nitrofuran [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Adjunct for second- and third-degree burns and skin-graft sites to prevent infection [UNVERIFIED-KNOWLEDGE]."], paed: ["Burns, as adults [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Burns / graft sites", "Apply directly or on gauze once daily or every few days, depending on the dressing routine [UNVERIFIED-KNOWLEDGE]."], ["Label status", "No current US FDA label — dosing from older references [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["As adults [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "Topical — no calculator." },
  adj: { renal: "Polyethylene glycol base — caution on large areas with kidney impairment [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Silver sulfadiazine 1% is also on the Bhutan NEML for burns [BT-NEML]." },
  tox: { human: NEP, animal: "Carcinogenic in animal studies [UNVERIFIED-KNOWLEDGE].", manage: "Stop and wash off [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known sensitivity to nitrofurazone [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Allergic contact dermatitis, rash, pruritus [UNVERIFIED-KNOWLEDGE]."], serious: ["Generalised allergic skin reactions [UNVERIFIED-KNOWLEDGE]", "Fungal or resistant bacterial overgrowth [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Wound for infection and sensitisation [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: nitrofurazone 0.2% cream (500 g) container [BT-NEML].", strengths: "Cream 0.2%.", stg: "See Bhutan STG burns chapter [BT-STG] [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [NEML_SRC],
  dose: { tagline: "Topical antibacterial cream for burns and graft sites — no current FDA label; check local protocol.",
    adult: [{ ind: "Burns / skin grafts", text: "Apply to the wound or gauze with each dressing change." }],
    child: [{ ind: "Burns", text: "As adults." }] }
});

FDB_M("anti-haemorrhoidal-ointment", {
  inn: "Anti-haemorrhoidal ointment (beclometasone + phenylephrine + lidocaine)", atc: "C05AA", cls: "Topical haemorrhoid preparation (corticosteroid + vasoconstrictor + local anaesthetic)",
  linked: [],
  forms: ["Ointment with applicator, 15 g tube: beclometasone 0.025% w/w, phenylephrine 0.1% w/w, lidocaine 2.5% w/w (Bhutan NEML) [BT-NEML]."],
  moa: "Steroid reduces inflammation; phenylephrine shrinks swollen tissue; lidocaine relieves pain and itch [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Symptomatic relief of pain, itching and swelling from haemorrhoids and anal fissure [UNVERIFIED-KNOWLEDGE]."], paed: ["Not recommended in children [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Haemorrhoids", "Apply externally or with the applicator up to 3–4 times a day and after each bowel movement [UNVERIFIED-KNOWLEDGE]."], ["Duration", "Short courses (about 7 days) because of the steroid [UNVERIFIED-KNOWLEDGE]."], ["Label status", "No US FDA label for this combination [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not recommended [UNVERIFIED-KNOWLEDGE]."], transition: "Adults.", calcNote: "Topical — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: "Use only if needed, short course [UNVERIFIED-KNOWLEDGE].", other: "Phenylephrine: caution in hypertension, heart disease, hyperthyroidism, diabetes, urinary retention [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Local infection (viral, fungal, bacterial) without treatment [UNVERIFIED-KNOWLEDGE]", "Sensitivity to any ingredient [UNVERIFIED-KNOWLEDGE]"],
  ae: { common: ["Local burning or irritation [UNVERIFIED-KNOWLEDGE]."], serious: ["Skin thinning with prolonged steroid use [UNVERIFIED-KNOWLEDGE]", "Allergic contact dermatitis (lidocaine) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Refer if bleeding persists or symptoms do not settle in 7 days [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: anti-haemorrhoidal ointment with applicator (with steroid) 15 g tube — beclometasone 0.025% w/w, phenylephrine 0.1% w/w and lidocaine 2.5% w/w [BT-NEML].", strengths: "15 g tube with applicator.", stg: "See Bhutan STG haemorrhoids [BT-STG] [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [NEML_SRC],
  dose: { tagline: "Steroid + phenylephrine + lidocaine haemorrhoid ointment — up to 3–4 times daily, short courses.",
    adult: [{ ind: "Haemorrhoids / fissure", text: "Up to 3–4 times daily and after bowel movements, about 7 days." }],
    child: [{ ind: "Children", text: "Not recommended." }] }
});

FDB_M("glycerin-suppository", {
  inn: "Glycerol", atc: "A06AX01", cls: "Hyperosmotic rectal laxative (glycerin suppository)",
  linked: [],
  forms: ["Suppository 4 g (Bhutan NEML) [BT-NEML].", "Adult and child-size suppositories (US OTC) [FDA]."],
  moa: "Draws water into the rectum and irritates the mucosa to trigger defecation [UNVERIFIED-KNOWLEDGE].",
  pk: ["Acts in about 15 minutes to 1 hour [FDA]."],
  ind: { adult: ["Relief of occasional constipation [FDA]."], paed: ["Child-size suppository from 2 years [FDA]."] },
  adult: [["Adults and children 6 years+", "1 suppository well into the rectum; retain about 15 minutes; it need not melt. Not more than 1 a day [FDA]."], ["Children 2 to under 6 years", "Use child-size suppositories [FDA]."], ["Under 2 years", "Ask a doctor [FDA]."]],
  paed: { tiers: ["6 years+: adult suppository, 1 daily [FDA].", "2 to under 6 years: child-size, 1 daily [FDA].", "Under 2 years: doctor's advice [FDA]."], transition: "Adult size from 6 years.", calcNote: "One suppository — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Ask a doctor first if abdominal pain, nausea, vomiting or a sudden change in bowel habit for over 2 weeks [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: [NEP],
  ae: { common: ["Rectal discomfort or burning [FDA]."], serious: [NEP] },
  monitor: ["Stop and see a doctor if rectal bleeding or no bowel movement within an hour [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: glycerin suppository 4 g [BT-NEML].", strengths: "4 g suppository.", stg: "Not in Bhutan STG 2024 [BT-STG] [UNVERIFIED-KNOWLEDGE]." },
  calc: [],
  sources: [["FDA", "Glycerin laxative suppository, adult (OTC monograph M015) — FDA label (DailyMed)", N10_DM("03b4be69-6488-76be-e063-6394a90a7edf")], ["FDA", "Glycerin suppository, pediatric (OTC monograph M007) — FDA label (DailyMed)", N10_DM("022dd494-cb3c-4fa7-be99-4c38fabdc612")], NEML_SRC],
  dose: { tagline: "Rectal laxative — 1 suppository, works in 15–60 minutes; not more than once a day.",
    adult: [{ ind: "Occasional constipation", text: "1 suppository once; max 1 a day." }],
    child: [{ ind: "2–5 years", text: "Child-size suppository, 1 a day." }, { ind: "Under 2 years", text: "Ask a doctor." }] }
});

})(); // end N-10 scope
