/* Clinical Disease Guide — Drug monograph database, batch N-6 (25 Nov 2026).
   Bhutan NEML 2025 medicines found missing by a strict name audit after N-5 (the earlier coverage count had
   false matches: e.g. "sodium" matched sodium bicarbonate). Same rules as js/fdb-a2.js (Build Prompt v2 + owner
   amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it). Set IDs copied from
   saved label JSONs. */

const N6_BT = ["BT-NEML", "National Essential Medicines Formulary 2022 and NEML 2025 — Ministry of Health, Bhutan", ""];
const N6_DM = id => "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=" + id;
const N6_ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const N6_ALL = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const N6_NEP = "Not established in primary source. [NEP]";
const N6_LD = "Animal LD50: Not established in primary source. [NEP]";
const N6_NA = "Not applicable. [NEP]";
const N6_ISMP = ["ISMP", "High-alert medications in acute care settings — ISMP (now part of ECRI), 2024 list", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const N6_WHO_ORS = ["WHO", "The treatment of diarrhoea: a manual for physicians and other senior health workers — WHO, 2005", "https://www.who.int/publications/i/item/9241593180"];
const N6_FLUID = "Dose, volume and rate depend on age, weight, clinical state and other therapy [FDA] [BT-NEML].";

FDB_M("dextrose", {
  inn: "Dextrose (glucose) injection", atc: "B05BA03", cls: "IV carbohydrate; treatment of hypoglycaemia",
  risk: "High-alert medication (dextrose, hypertonic, 20% or greater) [ISMP]",
  linked: [["Hypoglycaemia — adults", "IV dextrose when unable to swallow [FDA]", "hypo-adult"], ["Hypoglycaemia — children", "10% dextrose 2 mL/kg", "hypo-child"], ["DKA — adults", "Add dextrose when glucose falls [UNVERIFIED-KNOWLEDGE]", "dka-adult"]],
  forms: ["Injection 5%, 10%, 25% and 50%; also dextrose 5% with sodium chloride 0.9% or 0.45% [FDA] [BT-NEML].", "Bhutan: dextrose 5% (250 mL, 500 mL), 10% (100 mL, 500 mL), 25% (100 mL), 50% (100 mL); dextrose 5% + sodium chloride 0.9% and 0.45% (NEML 2025) [BT-NEML]."],
  moa: "Source of glucose (calories) and free water; 50% dextrose gives 3.4 kcal per gram [FDA].",
  pk: ["Oxidised to carbon dioxide and water [FDA].", "Maximum rate without glycosuria about 0.5 g/kg/hour [FDA]."],
  ind: { adult: ["Insulin-induced hypoglycaemia (50%) [FDA].", "Water and calories; parenteral nutrition (concentrated solutions centrally) [FDA].", "5%: rehydration; 10%: post-operative fluid when extra energy is needed; 25%: hypoglycaemia (Bhutan NEMF) [BT-NEML].", "50% (Bhutan, dialysis units): haemodialysis-associated hypotension, hypoglycaemia and cramps, 1 mL/kg IV [BT-NEML]."], paed: ["Hypoglycaemia; maintenance fluid with electrolytes [FDA] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Hypoglycaemia (insulin-induced)", "10–25 g IV (20–50 mL of 50%), given slowly; repeat if needed; take a glucose sample first but do not wait for the result [FDA]."], ["Rate", "Maximum about 0.5 g/kg/hour without glycosuria [FDA]."], ["Fluids", N6_FLUID]],
  paed: { tiers: ["Hypoglycaemia: 10% dextrose 2 mL/kg IV (newborn 2 mL/kg); then a glucose infusion [UNVERIFIED-KNOWLEDGE].", "Use 10% rather than 25% or 50% in children (vein injury) [UNVERIFIED-KNOWLEDGE]."], transition: "Adult doses from adult size.", calcNote: "mL/kg of 10%." },
  adj: { renal: "Watch fluid overload [BT-NEML].", hepatic: N6_NEP, pregnancy: "Category A (Bhutan NEMF) [BT-NEML].", other: "5% dextrose is hypotonic once the glucose is used — risk of hyponatraemia, especially in children [FDA]." },
  tox: { human: "Hyperglycaemia, hyperosmolar state, fluid overload, hyponatraemia [FDA] [BT-NEML].", animal: N6_LD, manage: "Stop or slow infusion; correct glucose and sodium [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known allergy to corn or corn products (some labels) [FDA] [UNVERIFIED-KNOWLEDGE].", "Hyperglycaemia; intracranial or intraspinal haemorrhage; delirium tremens with dehydration (hypertonic solutions) [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Hyperglycaemia, phlebitis (10% and stronger) [BT-NEML] [FDA]."], serious: ["Hyponatraemia and hyponatraemic encephalopathy [FDA]", "Fluid overload and pulmonary oedema [BT-NEML]", "Tissue injury if concentrated dextrose extravasates [UNVERIFIED-KNOWLEDGE]", "Refeeding syndrome; hypokalaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood glucose; sodium and potassium; fluid balance [FDA] [BT-NEML]."],
  local: { neml: "On the Bhutan NEML 2025: dextrose 5%, 10%, 25%, 50% and dextrose-saline [BT-NEML].", strengths: "5%, 10%, 25%, 50%.", stg: "Hypoglycaemia and fluid therapy [BT-NEML]." },
  calc: [
    { drug: "dextrose", indication_id: "hypo_child", label: "Hypoglycaemia, child — 10% dextrose 2 mL/kg IV", route: "IV", population: { min_age_months: 0, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2, unit: "mL", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "1 mL", renal: [], flags: ["10% dextrose = 0.2 g/kg", "Recheck glucose in 15 minutes; follow with an infusion"], sources: ["BT-NEML"] },
    { drug: "dextrose", indication_id: "hypo_adult", label: "Hypoglycaemia, adult — 10–25 g IV (20–50 mL of 50%)", route: "IV", population: N6_ADULT, basis: "fixed", dose: { value: 10, unit: "g", per: "dose", value_max: 25 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "1 g", renal: [], flags: ["Give slowly into a large vein", "Repeat if needed"], sources: ["FDA"] }
  ],
  sources: [["FDA", "50% Dextrose Injection — FDA label (DailyMed)", N6_DM("3842a9c0-8b15-1c94-e063-6394a90ae120")], ["FDA-2", "Dextrose Injection 5% and 10% — FDA label (DailyMed)", N6_DM("0bfb32b2-d034-4219-a055-3448f0c424f7")], ["FDA-3", "Dextrose and Sodium Chloride Injection — FDA label (DailyMed)", N6_DM("8e6569ce-9714-497f-a94b-c6975c1d76f6")], N6_ISMP, N6_BT],
  dose: { tagline: "IV glucose — 10% 2 mL/kg in children, 10–25 g in adults for hypoglycaemia.",
    cautionTitle: "Concentrated dextrose",
    caution: "Dextrose 20% or stronger is a high-alert medicine (ISMP). Give 25% and 50% slowly into a large vein. In children use 10%.",
    adult: [{ ind: "Hypoglycaemia", text: "10–25 g IV (20–50 mL of 50%), slowly; repeat if needed.", calc: ["hypo_adult"], bt: "Bhutan NEML: 25% and 50% (100 mL)." }, { ind: "Fluid and calories", text: "5% or 10% by infusion; volume by clinical need." }],
    child: [{ ind: "Hypoglycaemia", text: "10% dextrose 2 mL/kg IV, then an infusion.", calc: ["hypo_child"] }] }
});

FDB_M("sodium-chloride", {
  inn: "Sodium chloride (0.9% and hypertonic 3%)", atc: "B05XA03", cls: "IV crystalloid; hypertonic saline",
  risk: "High-alert medication (sodium chloride for injection, hypertonic, greater than 0.9%) [ISMP]",
  linked: [["Shock — adults", "Fluid resuscitation [UNVERIFIED-KNOWLEDGE]", "shock-adult"], ["Sodium disorders — adults", "3% for severe symptomatic hyponatraemia [BT-NEML]", "sodium-adult"], ["Raised ICP — children", "3% saline [BT-NEML]", "icp-child"], ["Head injury — adults", "Hypertonic saline [BT-NEML]", "headinjury-adult"]],
  forms: ["Injection 0.9% (100 mL, 500 mL, 1 L); 3% and 5% hypertonic; also 3% eye drops [FDA] [BT-NEML].", "Bhutan: sodium chloride 0.9% (100 mL, 500 mL, 1 L), 3% hypertonic injection (500 mL), 3% eye drops (5 mL); dextrose-saline (NEML 2025) [BT-NEML]."],
  moa: "Replaces extracellular water and sodium; hypertonic saline raises plasma sodium and draws water out of the brain [FDA] [BT-NEML].",
  pk: ["3% contains 513 mmol/L each of sodium and chloride, osmolarity about 1,030 mOsm/L [FDA] [BT-NEML]."],
  ind: { adult: ["0.9%: water and electrolyte replacement; peri-operative fluid; drug diluent [FDA] [BT-NEML].", "3%: hyponatraemic seizures; cerebral oedema and raised intracranial pressure (Bhutan NEMF) [BT-NEML]; severe hyponatraemia and hypochloraemia [FDA].", "3% eye drops: corneal oedema after cataract surgery [BT-NEML]."], paed: ["Same [BT-NEML]."] },
  adult: [["0.9% fluid", N6_FLUID + " Typical rate during surgery 5 mL/kg/hour (Bhutan NEMF) [BT-NEML]."], ["3% — hyponatraemic seizures", "1 mL/kg IV to raise sodium to 125 mmol/L or above (Bhutan NEMF) [BT-NEML]. 3 mL/kg raises sodium by about 2–3 mmol/L [BT-NEML]."], ["3% — raised ICP", "3–5 mL/kg IV over 10–20 minutes, central line (Bhutan NEMF) [BT-NEML]."], ["3% eye drops", "1–2 drops every 3–4 hours [BT-NEML]."]],
  paed: { tiers: ["3% for raised ICP: 3–5 mL/kg over 10–20 minutes [BT-NEML].", "Maintenance and resuscitation volumes: see the disease pages [UNVERIFIED-KNOWLEDGE]."], transition: "Same mL/kg.", calcNote: "Hypertonic saline in mL/kg." },
  adj: { renal: "Restrict in kidney impairment, heart failure, hypertension and oedema [BT-NEML].", hepatic: N6_NEP, pregnancy: "Restrict in toxaemia of pregnancy [UNVERIFIED-KNOWLEDGE].", other: "Correct chronic hyponatraemia slowly — too fast a rise causes osmotic demyelination [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypernatraemia, fluid overload, hyperchloraemic acidosis [FDA] [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Stop infusion; correct sodium slowly [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypertonic saline: hypernatraemia or fluid retention [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Oedema with large volumes [BT-NEML].", "Eye drops: brief burning [BT-NEML]."], serious: ["Pulmonary oedema [BT-NEML]", "Osmotic demyelination with fast sodium rise [UNVERIFIED-KNOWLEDGE]", "Hypertonic saline extravasation injury [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Serum sodium every 2–4 hours with 3% [UNVERIFIED-KNOWLEDGE]; fluid balance; chloride and acid–base [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: 0.9%, 3% injection and 3% eye drops [BT-NEML].", strengths: "0.9%, 3%.", stg: "Fluid therapy; hyponatraemic seizures; raised ICP [BT-NEML]." },
  calc: [
    { drug: "sodium-chloride", indication_id: "icp", label: "Raised ICP — 3% saline 3–5 mL/kg over 10–20 min", route: "IV", population: N6_ALL, basis: "mg_per_kg", dose: { value: 3, unit: "mL", per: "dose", value_max: 5 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "1 mL", renal: [], flags: ["HIGH_ALERT", "Central line preferred; check sodium"], sources: ["BT-NEML"] },
    { drug: "sodium-chloride", indication_id: "hypona", label: "Hyponatraemic seizures — 3% saline 1 mL/kg", route: "IV", population: N6_ALL, basis: "mg_per_kg", dose: { value: 1, unit: "mL", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "1 mL", renal: [], flags: ["HIGH_ALERT", "Recheck sodium; aim for 125 mmol/L or above"], sources: ["BT-NEML"] }
  ],
  sources: [["FDA", "0.9% Sodium Chloride Injection — FDA label (DailyMed)", N6_DM("123bd10a-90c7-499e-97f6-acf7e0f0fb4e")], ["FDA-2", "3% and 5% Sodium Chloride Injection — FDA label (DailyMed)", N6_DM("f2475fa3-ab1d-4b81-8127-b58cd0790a54")], N6_ISMP, N6_BT],
  dose: { tagline: "0.9% for fluids; 3% hypertonic for raised ICP and hyponatraemic seizures.",
    cautionTitle: "Hypertonic saline",
    caution: "Sodium chloride stronger than 0.9% is a high-alert medicine (ISMP). Check sodium often and avoid a fast rise in chronic hyponatraemia.",
    adult: [{ ind: "Raised ICP", text: "3% saline 3–5 mL/kg over 10–20 minutes.", calc: ["icp"] }, { ind: "Hyponatraemic seizures", text: "3% saline 1 mL/kg; 3 mL/kg raises sodium about 2–3 mmol/L.", calc: ["hypona"] }, { ind: "Fluid", text: "0.9% by clinical need." }],
    child: [{ ind: "Raised ICP", text: "3% saline 3–5 mL/kg over 10–20 minutes.", calc: ["icp"] }] }
});

FDB_M("compound-sodium-lactate", {
  inn: "Compound sodium lactate (Ringer's lactate, Hartmann's)", atc: "B05BB01", cls: "Balanced IV crystalloid",
  linked: [["Shock — adults", "Resuscitation fluid [UNVERIFIED-KNOWLEDGE]", "shock-adult"], ["Gastroenteritis — children", "Severe dehydration, 100 mL/kg [BT-NEML]", "ge-child"], ["Burns — adults", "Burn resuscitation [UNVERIFIED-KNOWLEDGE]", "burns-adult"]],
  forms: ["Injection (Lactated Ringer's) 500 mL and 1 L [FDA].", "Bhutan: compound sodium lactate solution 500 mL (NRH/RRH/DH/PHC) [BT-NEML]."],
  moa: "Water and electrolytes; lactate is metabolised to bicarbonate (alkalinising) [FDA].",
  pk: ["Lactate is metabolised to bicarbonate by the liver [FDA]."],
  ind: { adult: ["Water and electrolytes, or as an alkalinising agent [FDA]; pre- and post-operative replacement; hypovolaemic shock [BT-NEML]."], paed: ["Same; severe dehydration [FDA] [BT-NEML]."] },
  adult: [["Fluid", N6_FLUID]],
  paed: { tiers: ["Severe dehydration (Bhutan NEMF, with ORS section): 100 mL/kg — under 12 months 30 mL/kg in the 1st hour then 70 mL/kg over 5 hours; 12 months to 5 years 30 mL/kg in the first 30 minutes then 70 mL/kg over 2½ hours [BT-NEML]."], transition: "Adult by clinical need.", calcNote: "Severe dehydration 100 mL/kg." },
  adj: { renal: "Restrict in kidney impairment [BT-NEML].", hepatic: "Lactate may not be converted in severe liver failure [FDA].", pregnancy: "Category C (Bhutan NEMF) [BT-NEML].", other: "Contains calcium — do not run with ceftriaxone in the same line (neonates: never together) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Metabolic alkalosis, oedema [BT-NEML] [FDA].", animal: N6_LD, manage: "Stop; correct electrolytes [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Metabolic or respiratory alkalosis; hypocalcaemia or hypochlorhydria (Bhutan NEMF) [BT-NEML].", "Neonates on IV ceftriaxone [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Oedema with large volumes [BT-NEML]."], serious: ["Metabolic alkalosis [FDA] [BT-NEML]", "Hyperkalaemia in kidney failure [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Fluid balance, electrolytes, acid–base [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: compound sodium lactate 500 mL (down to PHC) [BT-NEML].", strengths: "500 mL.", stg: "Plan C rehydration and shock [BT-NEML]." },
  calc: [
    { drug: "compound-sodium-lactate", indication_id: "planc", label: "Severe dehydration (Plan C) — 100 mL/kg total", route: "IV", population: N6_ALL, basis: "mg_per_kg", dose: { value: 100, unit: "mL", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "10 mL", renal: [], flags: ["Under 12 months: 30 mL/kg in 1 h, then 70 mL/kg over 5 h", "Older: 30 mL/kg in 30 min, then 70 mL/kg over 2½ h"], sources: ["BT-NEML"] }
  ],
  sources: [["FDA", "Lactated Ringer's Injection — FDA label (DailyMed)", N6_DM("dad7735c-709b-40ea-ab7a-15577e24a966")], N6_BT, N6_WHO_ORS],
  dose: { tagline: "Balanced crystalloid for resuscitation and severe dehydration.",
    adult: [{ ind: "Fluid replacement", text: "Volume and rate by clinical need." }],
    child: [{ ind: "Severe dehydration", text: "100 mL/kg: 30 mL/kg fast, then 70 mL/kg (infants over 6 h total, older over 3 h).", calc: ["planc"] }] }
});

FDB_M("oral-rehydration-salts", {
  inn: "Oral rehydration salts (ORS, low-osmolarity)", atc: "A07CA", cls: "Oral rehydration solution",
  linked: [["Gastroenteritis — children", "Plans A and B [BT-NEML]", "ge-child"], ["Gastroenteritis — adults", "[BT-NEML]", "ge-adult"]],
  forms: ["Powder for 1 L solution (WHO low-osmolarity formula: glucose 75, sodium 75, chloride 65, potassium 20, citrate 10 mmol/L; 245 mOsm/L) [BT-NEML] [UNVERIFIED-KNOWLEDGE].", "Bhutan: ORS powder sachets (down to PHC) [BT-NEML]."],
  moa: "Glucose–sodium co-transport in the gut drives water absorption [UNVERIFIED-KNOWLEDGE].",
  pk: [N6_NA],
  ind: { adult: ["Prevention and treatment of dehydration from diarrhoea [BT-NEML]."], paed: ["Same [BT-NEML]."] },
  adult: [["After each loose stool", "200–400 mL (Bhutan NEMF) [BT-NEML]."], ["Some dehydration", "75 mL/kg over 4 hours (WHO Plan B) [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Moderate dehydration (Bhutan NEMF): up to 4 months 200–400 mL; 4–12 months 400–700 mL; 12 months–2 years 700–900 mL; 2–5 years 900–1,400 mL [BT-NEML].", "Plan B: 75 mL/kg over 4 hours [UNVERIFIED-KNOWLEDGE].", "Give with zinc for 10–14 days in children [UNVERIFIED-KNOWLEDGE]."], transition: "Adult volumes.", calcNote: "Plan B 75 mL/kg over 4 h." },
  adj: { renal: "Caution in kidney failure (potassium) [UNVERIFIED-KNOWLEDGE].", hepatic: N6_NA, pregnancy: "Safe [UNVERIFIED-KNOWLEDGE].", other: "Mix one sachet with the stated volume of clean water; do not add sugar; discard after 24 hours [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypernatraemia if made up too strong [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Remake correctly; check sodium [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe dehydration with shock (needs IV first), ileus, persistent vomiting preventing intake [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Vomiting if given too fast — pause 10 minutes, then give slowly [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypernatraemia with wrong mixing [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Signs of dehydration, urine output, ongoing losses [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: oral rehydration salts (down to PHC) [BT-NEML].", strengths: "Sachet for 1 L.", stg: "Diarrhoea Plans A, B, C [BT-NEML]." },
  calc: [
    { drug: "oral-rehydration-salts", indication_id: "planb", label: "Some dehydration (Plan B) — 75 mL/kg over 4 hours", route: "PO", population: N6_ALL, basis: "mg_per_kg", dose: { value: 75, unit: "mL", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "10 mL", renal: [], flags: ["Over 4 hours, small frequent sips", "Plus the volume of ongoing losses"], sources: ["WHO"] }
  ],
  sources: [N6_WHO_ORS, N6_BT],
  dose: { tagline: "Oral rehydration — 75 mL/kg over 4 hours for some dehydration.",
    adult: [{ ind: "Diarrhoea", text: "200–400 mL after each loose stool; 75 mL/kg over 4 h for some dehydration.", calc: ["planb"] }],
    child: [{ ind: "Some dehydration", text: "75 mL/kg over 4 hours, plus losses.", calc: ["planb"] }] }
});

FDB_M("sodium-nitroprusside", {
  inn: "Sodium nitroprusside", atc: "C02DD01", cls: "Direct vasodilator (IV)",
  risk: "High-alert medication (nitroprusside sodium for injection) [ISMP]",
  linked: [["Hypertension — adults", "Hypertensive emergency [BT-NEML]", "htn-adult"], ["Hypertension — children", "Hypertensive emergency [BT-NEML]", "htn-child"]],
  forms: ["Injection 25 mg/mL (50 mg in 2 mL) for dilution [FDA].", "Bhutan: sodium nitroprusside 50 mg and 500 mg powder for injection (NRH/RRH) [BT-NEML]."],
  moa: "Releases nitric oxide, relaxing arterial and venous smooth muscle [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Onset and offset within minutes [FDA].", "Metabolised to cyanide, then thiocyanate (renal excretion) [FDA]."],
  ind: { adult: ["Immediate reduction of blood pressure in hypertensive crisis; controlled hypotension during surgery; acute heart failure [FDA] [BT-NEML]."], paed: ["Same [FDA] [BT-NEML]."] },
  adult: [["Starting rate", "0.3 mcg/kg/minute; titrate every few minutes (confirm effect after 5 more minutes); usual effective rate about 3 mcg/kg/minute [FDA]."], ["Maximum", "10 mcg/kg/minute, for no more than 10 minutes; stop if BP not controlled after 10 minutes at the maximum [FDA]."], ["Preparation", "Dilute 50 mg in 250–1,000 mL of 5% dextrose; protect from light; infusion pump only [FDA]."]],
  paed: { tiers: ["Start 0.3 mcg/kg/minute, increase by 0.5 mcg/kg/minute; maximum 8 mcg/kg/minute (Bhutan NEMF) [BT-NEML]."], transition: "Adult rates.", calcNote: "Rate in mcg/kg/minute — use the ICU infusion table." },
  adj: { renal: "GFR under 30 mL/min: keep rate under 3 mcg/kg/minute (Bhutan NEMF) [BT-NEML]; thiocyanate accumulates [FDA].", hepatic: "Caution; avoid prolonged use [BT-NEML].", pregnancy: N6_NEP, other: "Cyanide risk rises above 2 mcg/kg/minute or with long infusions; consider thiosulfate co-infusion [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Profound hypotension; cyanide toxicity (metabolic acidosis, raised venous oxygen); thiocyanate toxicity [FDA].", animal: N6_LD, manage: "Stop infusion; cyanide antidote (hydroxocobalamin or nitrite–thiosulfate) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Compensatory hypertension (coarctation, AV shunt); controlled hypotension in patients with inadequate cerebral circulation; high-output failure; congenital optic atrophy or tobacco amblyopia [FDA] [BT-NEML]."],
  ae: { common: ["Headache, nausea, palpitations, sweating, restlessness [FDA] [BT-NEML]."], serious: ["Precipitous hypotension [FDA]", "Cyanide and thiocyanate toxicity [FDA]", "Methaemoglobinaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypothyroidism with prolonged use [BT-NEML]"] },
  monitor: ["Continuous (intra-arterial) blood pressure; acid–base and lactate; thiocyanate if prolonged [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: sodium nitroprusside 50 mg and 500 mg (NRH/RRH) [BT-NEML].", strengths: "50 mg, 500 mg.", stg: "Hypertensive emergency in ICU [BT-NEML]." },
  calc: [],
  sources: [["FDA", "Sodium nitroprusside injection — FDA label (DailyMed)", N6_DM("01841345-bed3-458f-8e99-911fbd286512")], N6_ISMP, N6_BT],
  dose: { tagline: "Minute-to-minute IV vasodilator — start 0.3 mcg/kg/min; cyanide risk.",
    boxedTitle: "Not for direct injection; hypotension; cyanide toxicity",
    boxed: "Sodium nitroprusside injection is not suitable for direct injection. The solution must be further diluted in sterile 5% dextrose injection before infusion. Sodium nitroprusside injection can cause precipitous decreases in blood pressure. In patients not properly monitored, these decreases can lead to irreversible ischemic injuries or death. Sodium nitroprusside should be used only when available equipment and personnel allow blood pressure to be continuously monitored. Except when used briefly or at low (< 2 mcg/kg/min) infusion rates, sodium nitroprusside gives rise to important quantities of cyanide ion, which can reach toxic, potentially lethal levels. The usual dose rate is 0.5 to 10 mcg/kg/min, but infusion at the maximum dose rate should never last more than 10 minutes. If blood pressure has not been adequately controlled after 10 minutes of infusion at the maximum rate, administration of sodium nitroprusside should be terminated immediately. Although acid-base balance and venous oxygen concentration should be monitored and may indicate cyanide toxicity, these laboratory tests provide imperfect guidance [FDA].",
    adult: [{ ind: "Hypertensive emergency", text: "Start 0.3 mcg/kg/minute; titrate; maximum 10 mcg/kg/minute for no more than 10 minutes." }],
    child: [{ ind: "Hypertensive emergency", text: "Start 0.3 mcg/kg/minute; increase by 0.5; maximum 8 mcg/kg/minute." }] }
});

FDB_M("calcium-carbonate", {
  inn: "Calcium carbonate", atc: "A12AA04", cls: "Calcium supplement; phosphate binder; antacid",
  linked: [["Osteoporosis — adults", "With vitamin D [BT-NEML]", "osteoporosis-adult"], ["Chronic kidney disease — adults", "Phosphate binder [BT-NEML]", "ckd-adult"], ["Rickets — children", "[BT-NEML]", "rickets-child"]],
  forms: ["Tablets and chewable tablets (500 mg calcium carbonate = 200 mg elemental calcium) [UNVERIFIED-KNOWLEDGE].", "Bhutan: calcium carbonate 1,250 mg (500 mg elemental) tablet; calcium carbonate 1,250 mg + vitamin D3 250 IU tablet (NEML 2025) [BT-NEML]."],
  moa: "Supplies calcium; binds dietary phosphate in the gut; neutralises acid [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorption best with meals and in doses of 500 mg elemental or less [BT-NEML]."],
  ind: { adult: ["Calcium deficiency prophylaxis; osteoporosis; CKD hyperphosphataemia; pre-eclampsia prevention in low-intake populations [BT-NEML].", "Heartburn (OTC) [FDA]."], paed: ["Calcium requirements by age [BT-NEML]."] },
  adult: [["Daily elemental calcium", "19–70 years 1,000 mg/day; over 70 and women 51–70: 1,200 mg/day, in divided doses (Bhutan NEMF) [BT-NEML]."], ["Pregnancy (low-intake populations)", "1.5–2 g elemental calcium/day to prevent pre-eclampsia (WHO, cited in Bhutan NEMF) [BT-NEML]."], ["CKD hyperphosphataemia", "No more than 2,000 mg/day elemental (stage 3–5); 1,500 mg/day (stage 5) [BT-NEML]."], ["Antacid (OTC)", "Follow the pack maximum per 24 hours; pregnancy has a lower maximum [FDA]."]],
  paed: { tiers: ["Elemental calcium per day (Bhutan NEMF): 0–6 months 200 mg; 7–12 months 260 mg; 1–3 years 700 mg; 4–8 years 1,000 mg; 9–18 years 1,300 mg [BT-NEML]."], transition: "Adult needs from 19 years.", calcNote: "Doses are elemental calcium." },
  adj: { renal: "Hypercalcaemia risk — monitor calcium in CKD [BT-NEML] [UNVERIFIED-KNOWLEDGE].", hepatic: N6_NEP, pregnancy: "Category C (Bhutan NEMF) [BT-NEML].", other: "Separate from levothyroxine, iron, tetracyclines and quinolones by 2–4 hours [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypercalcaemia, milk-alkali syndrome [BT-NEML].", animal: N6_LD, manage: "Stop; fluids [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypercalcaemia, hypercalciuria, renal calculi, hypophosphataemia, suspected digoxin toxicity (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Constipation, flatulence, bloating [BT-NEML]."], serious: ["Milk-alkali syndrome [BT-NEML]", "Kidney stones [BT-NEML]"] },
  monitor: ["Serum calcium and phosphate in CKD [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: calcium carbonate 1,250 mg (500 mg elemental) and with vitamin D3 250 IU [BT-NEML].", strengths: "500 mg elemental.", stg: "Osteoporosis, CKD, antenatal calcium [BT-NEML]." },
  calc: [],
  sources: [N6_BT, ["FDA", "Tums (calcium carbonate) — OTC label (DailyMed)", N6_DM("036ef1ed-32ef-46b8-8817-b3f63a014280")]],
  dose: { tagline: "Calcium supplement and phosphate binder — doses are elemental calcium.",
    adult: [{ ind: "Supplement", text: "1,000–1,200 mg elemental calcium a day in divided doses with meals.", bt: "Bhutan NEML: 500 mg elemental tablet; with vitamin D3." }, { ind: "Pregnancy (low intake)", text: "1.5–2 g elemental a day." }],
    child: [{ ind: "Daily need", text: "200 mg (infant) to 1,300 mg (9–18 years) elemental a day." }] }
});

FDB_M("calcium-polystyrene-sulfonate", {
  inn: "Calcium polystyrene sulfonate", atc: "V03AE01", cls: "Potassium-binding resin",
  linked: [["Potassium disorders — adults", "Hyperkalaemia, after emergency measures [BT-NEML]", "potassium-adult"], ["Chronic kidney disease — adults", "[BT-NEML]", "ckd-adult"]],
  forms: ["Oral powder [BT-NEML].", "Bhutan: calcium polystyrene sulfonate powder 15 g (NRH/RRH) [BT-NEML]."],
  moa: "Exchanges calcium for potassium in the colon [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not absorbed; acts over hours [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Hyperkalaemia [BT-NEML]."], paed: ["Hyperkalaemia [BT-NEML]."] },
  adult: [["Hyperkalaemia", "15 g by mouth 3–4 times daily in water (not fruit squash) [UNVERIFIED-KNOWLEDGE]; Bhutan NEMF: four times daily [BT-NEML]."], ["Mixing", "Each 1 g in 3–4 mL water or syrup [BT-NEML]."]],
  paed: { tiers: ["0.5–1 g/kg/day by mouth in 3–4 divided doses (Bhutan NEMF) [BT-NEML]."], transition: "Adult dose.", calcNote: "Daily g/kg divided." },
  adj: { renal: N6_NA, hepatic: N6_NA, pregnancy: "Caution (Bhutan NEMF) [BT-NEML].", other: "Separate other oral drugs by about 3 hours [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypokalaemia, hypercalcaemia, faecal impaction [BT-NEML] [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Stop; laxative; correct electrolytes [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Obstructive bowel disease; hypokalaemia (Bhutan NEMF) [BT-NEML].", "Neonates by mouth [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Constipation, nausea, vomiting [BT-NEML]."], serious: ["GI ulceration, necrosis or perforation [BT-NEML]", "Hypokalaemia, hypomagnesaemia [BT-NEML]", "Resin impaction in children [BT-NEML]"] },
  monitor: ["Potassium, calcium, magnesium; bowel habit [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: calcium polystyrene sulfonate powder 15 g [BT-NEML].", strengths: "15 g.", stg: "Slow potassium removal; not for emergency treatment alone [UNVERIFIED-KNOWLEDGE]." },
  calc: [
    { drug: "calcium-polystyrene-sulfonate", indication_id: "child", label: "Hyperkalaemia, child — 0.5–1 g/kg/day in 3–4 doses", route: "PO", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.5, unit: "g", per: "day", value_max: 1 }, interval_h: 6, divided_doses: 4, caps: { max_single: 15, unit: "g" }, weight_basis: "actual", formulations: [], rounding: "0.5 g", renal: [], flags: ["Mix 1 g in 3–4 mL water", "Not the emergency treatment"], sources: ["BT-NEML"] }
  ],
  sources: [N6_BT],
  dose: { tagline: "Potassium-binding resin — slow, not an emergency treatment.",
    adult: [{ ind: "Hyperkalaemia", text: "15 g in water 3–4 times daily.", bt: "Bhutan NEML: 15 g powder." }],
    child: [{ ind: "Hyperkalaemia", text: "0.5–1 g/kg/day in 3–4 divided doses.", calc: ["child"] }] }
});

FDB_M("albumin-human", {
  inn: "Albumin (human) 20%", atc: "B05AA01", cls: "Plasma protein (colloid)",
  linked: [["Cirrhosis — adults", "After large-volume paracentesis; SBP; hepatorenal syndrome [BT-NEML]", "cirrhosis-adult"], ["Shock — adults", "[FDA]", "shock-adult"], ["Burns — adults", "After 24 hours [BT-NEML]", "burns-adult"]],
  forms: ["Albumin (human) 5%, 20%, 25% [FDA].", "Bhutan: human albumin 20% (100 mL = 20 g) (NRH/RRH) [BT-NEML]."],
  moa: "Raises plasma oncotic pressure, drawing interstitial fluid into the circulation [FDA].",
  pk: [N6_NEP],
  ind: { adult: ["Hypovolaemia; hypoalbuminaemia; paracentesis; ARDS; nephrosis; burns; haemolytic disease of the newborn [FDA] [BT-NEML].", "SBP and hepatorenal syndrome (Bhutan NEMF) [BT-NEML]."], paed: ["Hypovolaemia; haemolytic disease of the newborn [FDA]."] },
  adult: [["Large-volume paracentesis", "8 g per litre of ascites removed [FDA]; Bhutan NEMF: 100 mL (20 g) for every 3 L drained (every 2 L if kidney function impaired) [BT-NEML]."], ["SBP in cirrhosis", "1.5 g/kg within 6 hours of diagnosis (day 1), then 1 g/kg on day 3 (Bhutan NEMF) [BT-NEML]."], ["Hepatorenal syndrome", "25–50 g/day for 72 hours (Bhutan NEMF) [BT-NEML]."], ["Hypovolaemia", "25 g IV; repeat after 15–30 minutes if needed [FDA]."], ["Hypoalbuminaemia", "50–75 g [FDA] [BT-NEML]."], ["Maximum", "No more than 2 g/kg a day [FDA]."]],
  paed: { tiers: ["Haemolytic disease of the newborn: 1 g/kg before or during exchange transfusion [FDA]."], transition: "Adult doses.", calcNote: "g/kg for SBP." },
  adj: { renal: N6_NEP, hepatic: N6_NEP, pregnancy: N6_NEP, other: "Do not dilute with sterile water (haemolysis) [FDA]." },
  tox: { human: "Circulatory overload [FDA].", animal: N6_LD, manage: "Stop; diuretic [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe anaemia or heart failure with normal or raised volume [FDA] [UNVERIFIED-KNOWLEDGE].", "Hypersensitivity to albumin [FDA]."],
  ae: { common: ["Flushing, fever, urticaria [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Circulatory overload, pulmonary oedema [FDA]", "Anaphylaxis [FDA]", "Haemodilution [FDA]"] },
  monitor: ["Blood pressure, fluid status, haemoglobin [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: human albumin 20%, 100 mL [BT-NEML].", strengths: "20% (20 g/100 mL).", stg: "Cirrhosis care [BT-NEML]." },
  calc: [
    { drug: "albumin-human", indication_id: "sbp1", label: "SBP day 1 — 1.5 g/kg within 6 hours", route: "IV", population: N6_ADULT, basis: "mg_per_kg", dose: { value: 1.5, unit: "g", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "1 g", renal: [], flags: ["20% albumin: 5 mL = 1 g", "Day 3: 1 g/kg"], sources: ["BT-NEML"] },
    { drug: "albumin-human", indication_id: "sbp3", label: "SBP day 3 — 1 g/kg", route: "IV", population: N6_ADULT, basis: "mg_per_kg", dose: { value: 1, unit: "g", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [], rounding: "1 g", renal: [], flags: ["20% albumin: 5 mL = 1 g"], sources: ["BT-NEML"] }
  ],
  sources: [["FDA", "Albumin (Human) 20% — FDA label (DailyMed)", N6_DM("18a9c174-f892-e45f-ca4b-bd5a180c1539")], N6_BT],
  dose: { tagline: "Colloid for cirrhosis (paracentesis, SBP, HRS) and hypovolaemia — maximum 2 g/kg/day.",
    adult: [{ ind: "SBP", text: "1.5 g/kg on day 1, 1 g/kg on day 3.", calc: ["sbp1", "sbp3"], bt: "Bhutan NEML: 20%, 100 mL." }, { ind: "Paracentesis", text: "8 g per litre removed (Bhutan: 20 g per 3 L)." }, { ind: "Hepatorenal syndrome", text: "25–50 g/day for 72 hours." }],
    child: [{ ind: "Haemolytic disease of the newborn", text: "1 g/kg with exchange transfusion." }] }
});

FDB_M("potassium-permanganate", {
  inn: "Potassium permanganate", atc: "D08AX06", cls: "Topical oxidising antiseptic and astringent",
  linked: [],
  forms: ["Crystals or tablets for dilution [UNVERIFIED-KNOWLEDGE].", "Bhutan: potassium permanganate crystals (NEML 2025) [BT-NEML]."],
  moa: "Oxidising agent: antiseptic and drying (astringent) for weeping skin [UNVERIFIED-KNOWLEDGE].",
  pk: [N6_NA],
  ind: { adult: ["Weeping or exudative eczema, infected wounds, tinea pedis — as a dilute soak [UNVERIFIED-KNOWLEDGE]."], paed: ["Same, dilute only [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Soak", "Dilute to about 1 in 10,000 (pale pink) and soak for 10–15 minutes; never apply crystals directly [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Same dilution; keep crystals out of reach [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "No calculator." },
  adj: { renal: N6_NA, hepatic: N6_NA, pregnancy: N6_NA, other: "Stains skin and nails brown [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Swallowed crystals or strong solutions cause corrosive burns of mouth, oesophagus and stomach, and methaemoglobinaemia [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Do not induce vomiting; airway; endoscopy; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Not for internal use; not on mucous membranes or eyes [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Brown staining; skin irritation [UNVERIFIED-KNOWLEDGE]."], serious: ["Chemical burns from undiluted crystals [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["None. [NEP]"],
  local: { neml: "On the Bhutan NEML 2025: potassium permanganate crystals [BT-NEML].", strengths: "Crystals.", stg: N6_NEP },
  calc: [],
  sources: [N6_BT],
  dose: { tagline: "Dilute pale-pink soak for weeping skin — never use crystals directly.",
    adult: [{ ind: "Weeping skin", text: "1 in 10,000 soak for 10–15 minutes." }],
    child: [{ ind: "Weeping skin", text: "Same dilution; supervise." }] }
});

FDB_M("amino-acids", {
  inn: "Amino acid solution (parenteral nutrition)", atc: "B05BA01", cls: "Parenteral nutrition — protein",
  risk: "High-alert medication (parenteral nutrition preparations) [ISMP]",
  linked: [["Nutrition — adults", "Parenteral nutrition [BT-NEML]", "nutrition-adult"]],
  forms: ["Injection 10% (0.1 g protein/mL) and others [FDA].", "Bhutan: amino acid 10% injection, 200 mL (NRH/RRH) [BT-NEML]."],
  moa: "Supplies nitrogen for protein synthesis [FDA].",
  pk: [N6_NEP],
  ind: { adult: ["Protein source in parenteral nutrition when oral or enteral feeding is not possible [FDA] [BT-NEML]."], paed: ["Same [FDA] [BT-NEML]."] },
  adult: [["Protein needs (Bhutan NEMF)", "Solid organ transplant 1.5–2 g/kg/day; acute kidney injury (catabolic) 1.5–1.8 g/kg/day; dialysis 1.2–1.3 g/kg/day; CKD not on dialysis 0.6–0.8 g/kg/day; liver failure with encephalopathy 0.6–1 g/kg/day, without 1–1.5 g/kg/day [BT-NEML]."], ["Stable adults", "0.8–1 g protein/kg/day [FDA]."], ["Fluid limit", "No more than 40 mL/kg/day of parenteral nutrition solution in adults [FDA]."], ["Volume (Bhutan NEMF)", "200–800 mL/day of 10% [BT-NEML]."]],
  paed: { tiers: ["20–40 mL/kg/day of 10% (Bhutan NEMF) [BT-NEML]."], transition: "Adult needs.", calcNote: "g/kg/day protein; 10% = 0.1 g/mL." },
  adj: { renal: "Reduce protein in CKD not on dialysis [BT-NEML].", hepatic: "Lower dose with encephalopathy [BT-NEML].", pregnancy: "Category C (Bhutan NEMF) [BT-NEML].", other: "Give with enough dextrose for protein use [BT-NEML]. Pharmacy bulk packages are for admixture only, not direct infusion [FDA]." },
  tox: { human: "Azotaemia, hyperammonaemia, refeeding syndrome [BT-NEML] [FDA].", animal: N6_LD, manage: "Reduce or stop; correct electrolytes [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Inborn errors of amino acid metabolism; pulmonary oedema; acidosis (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Electrolyte disturbance, hyperglycaemia [BT-NEML]."], serious: ["Refeeding syndrome [BT-NEML]", "Line infection and thrombosis [BT-NEML] [UNVERIFIED-KNOWLEDGE]", "Hyperammonaemia [BT-NEML]"] },
  monitor: ["Glucose, electrolytes (phosphate, potassium, magnesium), urea, liver tests, fluid balance [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: amino acid 10% injection, 200 mL [BT-NEML].", strengths: "10%.", stg: "Parenteral nutrition [BT-NEML]." },
  calc: [],
  sources: [["FDA", "Travasol 10% (amino acids) — FDA label (DailyMed)", N6_DM("8543b5be-0f43-4891-9e56-d7c39fe839b5")], N6_ISMP, N6_BT],
  dose: { tagline: "Protein for parenteral nutrition — dose by g/kg/day for the clinical state.",
    adult: [{ ind: "Parenteral nutrition", text: "0.8–1 g/kg/day (stable); up to 1.5–2 g/kg/day in catabolic states.", bt: "Bhutan NEML: 10%, 200 mL." }],
    child: [{ ind: "Parenteral nutrition", text: "20–40 mL/kg/day of 10%." }] }
});

FDB_M("vitamin-b-complex", {
  inn: "Vitamin B complex", atc: "A11EA", cls: "Vitamin combination",
  linked: [],
  forms: ["Tablets and injection with thiamine, riboflavin, nicotinamide and other B vitamins [BT-NEML].", "Bhutan: vitamin B complex tablet and injection 25 mg/mL (10 mL) (NEML 2025) [BT-NEML]."],
  moa: "Replaces water-soluble B vitamins [UNVERIFIED-KNOWLEDGE].",
  pk: [N6_NEP],
  ind: { adult: ["Treatment and prevention of B-vitamin deficiency [BT-NEML]."], paed: ["Same [BT-NEML]."] },
  adult: [["Treatment", "1 tablet 3 times daily [BT-NEML]."], ["Prevention", "1–2 tablets once daily [BT-NEML]."], ["Injection", "2 mL IM daily [BT-NEML]."]],
  paed: { tiers: ["5–14 years: 1 tablet 3 times daily; 2–4 years: 1 tablet once daily [BT-NEML]."], transition: "Adult dose.", calcNote: "Fixed doses." },
  adj: { renal: N6_NEP, hepatic: N6_NEP, pregnancy: "Category A at RDA amounts [BT-NEML].", other: "Does not replace specific thiamine for Wernicke's or pyridoxine for isoniazid neuropathy [BT-NEML]." },
  tox: { human: N6_NEP, animal: N6_LD, manage: N6_NEP },
  contra: ["Hypersensitivity to parenteral thiamine or vitamin B complex [BT-NEML]."],
  ae: { common: ["Occasional rash; bright yellow urine [BT-NEML] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis with injection [BT-NEML]"] },
  monitor: ["None. [NEP]"],
  local: { neml: "On the Bhutan NEML 2025: vitamin B complex tablet and injection [BT-NEML].", strengths: "Tablet; 10 mL injection.", stg: N6_NEP },
  calc: [],
  sources: [N6_BT],
  dose: { tagline: "B-vitamin supplement — use specific thiamine or pyridoxine when indicated.",
    adult: [{ ind: "Deficiency", text: "1 tablet 3 times daily; prevention 1–2 tablets daily." }],
    child: [{ ind: "Deficiency", text: "5–14 years: 1 tablet 3 times daily; 2–4 years: 1 daily." }] }
});

FDB_M("multivitamin-infusion", {
  inn: "Multivitamin injection (parenteral)", atc: "B05XC", cls: "Parenteral multivitamin",
  linked: [["Nutrition — adults", "Parenteral nutrition [FDA]", "nutrition-adult"]],
  forms: ["Two-vial adult product (10 mL daily) with 13 vitamins [FDA].", "Bhutan: multivitamin injection 10 mL (NRH/RRH) [BT-NEML]."],
  moa: "Replaces fat- and water-soluble vitamins [FDA].",
  pk: [N6_NEP],
  ind: { adult: ["Daily vitamins in parenteral nutrition [FDA].", "Wernicke's encephalopathy and Korsakoff psychosis in alcohol use and malnutrition (Bhutan NEMF) [BT-NEML]."], paed: ["Paediatric products differ [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Parenteral nutrition", "10 mL once daily added to at least 500 mL (preferably 1,000 mL) of infusion fluid [FDA]."], ["Wernicke's (Bhutan NEMF)", "10 mL by slow IV injection or infusion every 4–8 hours for up to 2 days [BT-NEML]."]],
  paed: { tiers: ["Use a paediatric formulation. [NEP]"], transition: "Adult product from 11 years [UNVERIFIED-KNOWLEDGE].", calcNote: "Fixed volume." },
  adj: { renal: N6_NEP, hepatic: N6_NEP, pregnancy: "Category A (Bhutan NEMF) [BT-NEML].", other: "Contains vitamin K — affects warfarin [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: N6_NEP, animal: N6_LD, manage: N6_NEP },
  contra: ["Hypersensitivity to any vitamin or excipient (thiamine anaphylaxis) [FDA] [BT-NEML]."],
  ae: { common: ["Rash, flushing [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis — have resuscitation ready [BT-NEML]"] },
  monitor: ["Vitamin levels in long-term PN [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: multivitamin injection 10 mL [BT-NEML].", strengths: "10 mL.", stg: N6_NEP },
  calc: [],
  sources: [["FDA", "Infuvite Adult — FDA label (DailyMed)", N6_DM("14c7bfc5-07e8-400f-b8ff-5e4794dd2805")], N6_BT],
  dose: { tagline: "Daily IV vitamins in parenteral nutrition.",
    adult: [{ ind: "Parenteral nutrition", text: "10 mL daily in at least 500 mL of fluid." }, { ind: "Wernicke's (Bhutan NEMF)", text: "10 mL IV every 4–8 hours for up to 2 days." }],
    child: [{ ind: "Children", text: "Use a paediatric product." }] }
});

FDB_M("colecalciferol", {
  inn: "Colecalciferol (vitamin D3)", atc: "A11CC05", cls: "Vitamin D",
  linked: [["Rickets — children", "[BT-NEML]", "rickets-child"], ["Osteoporosis — adults", "With calcium [BT-NEML]", "osteoporosis-adult"]],
  forms: ["Tablets, capsules, drops; high-dose sachets [UNVERIFIED-KNOWLEDGE].", "Bhutan: vitamin D3 60,000 IU powder (NRH/RRH); calcium carbonate + vitamin D3 250 IU tablet (NEML 2025) [BT-NEML]."],
  moa: "Converted in liver and kidney to calcitriol, which raises calcium and phosphate absorption [UNVERIFIED-KNOWLEDGE].",
  pk: ["Fat-soluble; long half-life [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Osteoporosis (with calcium); hypoparathyroidism; vitamin D-resistant rickets; familial hypophosphataemia (Bhutan NEMF) [BT-NEML]."], paed: ["Rickets [BT-NEML] [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Osteoporosis (over 50 years)", "800–1,000 IU daily with calcium [BT-NEML]."], ["Hypoparathyroidism", "50,000–200,000 IU daily with calcium (Bhutan NEMF) [BT-NEML]."], ["Familial hypophosphataemia", "10,000–60,000 IU daily with phosphate [BT-NEML]."]],
  paed: { tiers: ["Vitamin D-resistant rickets: 12,000–500,000 IU daily (Bhutan NEMF, specialist) [BT-NEML].", "Nutritional rickets: see the rickets page [UNVERIFIED-KNOWLEDGE]."], transition: "Adult doses.", calcNote: "No calculator." },
  adj: { renal: "Avoid in severe kidney impairment (needs active vitamin D) [BT-NEML].", hepatic: N6_NEP, pregnancy: N6_NEP, other: "Check calcium twice weekly during titration; stop if hypercalcaemic [BT-NEML]." },
  tox: { human: "Hypercalcaemia: nausea, constipation, polyuria, kidney stones [BT-NEML] [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Stop; fluids; treat hypercalcaemia [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypercalcaemia, hypervitaminosis D, hypercalciuria, severe kidney impairment, nephrolithiasis (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Constipation, poor appetite, nausea [BT-NEML]."], serious: ["Hypercalcaemia [BT-NEML]"] },
  monitor: ["Serum calcium during high-dose treatment [BT-NEML]."],
  local: { neml: "On the Bhutan NEML 2025: vitamin D3 60,000 IU; with calcium carbonate [BT-NEML].", strengths: "60,000 IU; 250 IU.", stg: N6_NEP },
  calc: [],
  sources: [N6_BT],
  dose: { tagline: "Vitamin D3 — 800–1,000 IU daily with calcium for bone health.",
    adult: [{ ind: "Osteoporosis", text: "800–1,000 IU daily with calcium.", bt: "Bhutan NEML: 60,000 IU powder." }],
    child: [{ ind: "Rickets", text: "See the rickets page; specialist doses for resistant rickets." }] }
});

FDB_M("streptokinase", {
  inn: "Streptokinase", atc: "B01AD01", cls: "Thrombolytic (plasminogen activator)",
  risk: "High-alert medication (thrombolytics) [ISMP]",
  linked: [["Acute coronary syndrome — adults", "STEMI within 12 hours when PCI is not available [BT-NEML]", "acs-adult"], ["Venous thromboembolism — adults", "[BT-NEML]", "vte-adult"]],
  forms: ["Powder for injection 1.5 million IU [BT-NEML].", "Bhutan: streptokinase 1.5 million IU (NRH/RRH/DH) [BT-NEML].", "No current US label [NEP]."],
  moa: "Forms a complex with plasminogen that converts plasminogen to plasmin, dissolving fibrin clots [UNVERIFIED-KNOWLEDGE].",
  pk: ["Antigenic — antibodies form within days [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Acute myocardial infarction within 12 hours of onset [BT-NEML].", "DVT, pulmonary embolism, acute arterial thromboembolism, central retinal vessel thrombosis [BT-NEML]."], paed: ["Intravascular thrombosis [BT-NEML]."] },
  adult: [["Acute MI", "1,500,000 units IV infusion over 60 minutes, within 12 hours of symptom onset [BT-NEML]."], ["DVT, PE, arterial thromboembolism", "250,000 units IV over 30 minutes, then 100,000 units every hour for 12–72 hours with clotting monitoring [BT-NEML]."]],
  paed: { tiers: ["1 month–11 years: 2,500–4,000 units/kg over 30 minutes, then 500–1,000 units/kg/hour for up to 3 days [BT-NEML].", "12–17 years: 250,000 units over 30 minutes, then 100,000 units/hour for up to 3 days [BT-NEML]."], transition: "Adult doses from 12 years.", calcNote: "Loading dose units/kg." },
  adj: { renal: N6_NEP, hepatic: "Severe liver disease raises bleeding risk [UNVERIFIED-KNOWLEDGE].", pregnancy: N6_NEP, other: "Do not repeat between 5 days and 12 months after a previous dose (antibodies, allergy) [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Bleeding [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Stop infusion; blood products; tranexamic acid [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe uncontrolled hypertension; active internal bleeding; recent intracranial or intraspinal surgery or trauma; intracranial tumour or aneurysm; bleeding disorder; recent stroke; acute pancreatitis (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Hypotension during infusion, fever, allergic reactions [UNVERIFIED-KNOWLEDGE]."], serious: ["Intracranial and major bleeding [UNVERIFIED-KNOWLEDGE]", "Anaphylaxis [UNVERIFIED-KNOWLEDGE]", "Reperfusion arrhythmias [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure during infusion; bleeding; clotting tests for prolonged infusions [BT-NEML] [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: streptokinase 1.5 million IU [BT-NEML].", strengths: "1.5 million IU.", stg: "STEMI thrombolysis when PCI is unavailable [BT-NEML]." },
  calc: [
    { drug: "streptokinase", indication_id: "child_load", label: "Thrombosis, child 1 month–11 years — 2,500–4,000 units/kg load", route: "IV", population: { min_age_months: 1, max_age_months: 144, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2500, unit: "units", per: "dose", value_max: 4000 }, interval_h: null, divided_doses: 1, caps: { max_single: 250000, unit: "units" }, weight_basis: "actual", formulations: [], rounding: "100 units", infusion: { duration_h: 0.5 }, renal: [], flags: ["HIGH_ALERT", "Then 500–1,000 units/kg/hour"], sources: ["BT-NEML"] }
  ],
  sources: [N6_BT, N6_ISMP],
  dose: { tagline: "Thrombolytic — 1.5 million units over 1 hour for STEMI when PCI is not available.",
    adult: [{ ind: "Acute MI", text: "1,500,000 units IV over 60 minutes, within 12 hours.", bt: "Bhutan NEML: 1.5 million IU." }, { ind: "DVT or PE", text: "250,000 units over 30 minutes, then 100,000 units/hour." }],
    child: [{ ind: "Thrombosis (1 month–11 years)", text: "2,500–4,000 units/kg over 30 minutes, then 500–1,000 units/kg/hour.", calc: ["child_load"] }] }
});

FDB_M("tiotropium", {
  inn: "Tiotropium", atc: "R03BB04", cls: "Long-acting muscarinic antagonist (LAMA)",
  linked: [["COPD — adults", "Maintenance [BT-NEML]", "copd-adult"]],
  forms: ["Inhalation powder 18 mcg capsules (HandiHaler); Respimat 2.5 mcg and 1.25 mcg per puff [FDA].", "Bhutan: tiotropium 9 mcg/actuation MDI (200 actuations) and 2.5 mcg Respimat (NEML 2025) [BT-NEML]."],
  moa: "Blocks M3 receptors in airway smooth muscle — 24-hour bronchodilation [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["COPD maintenance and reduction of exacerbations [FDA] [BT-NEML].", "Asthma maintenance (Respimat 1.25 mcg) [FDA]."], paed: ["Asthma, 6 years and older (Respimat 1.25 mcg) [FDA]."] },
  adult: [["COPD — Respimat 2.5 mcg", "2 inhalations once daily; no more than 2 inhalations in 24 hours [FDA]."], ["COPD — HandiHaler", "2 inhalations of the powder from one 18 mcg capsule once daily; never swallow the capsule [FDA]."], ["COPD — MDI 9 mcg (Bhutan)", "2 puffs once daily [BT-NEML]."]],
  paed: { tiers: ["Asthma 6 years and older: Respimat 1.25 mcg, 2 inhalations once daily (not the 2.5 mcg COPD strength) [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult.", calcNote: "Fixed inhaled dose." },
  adj: { renal: "CrCl under 60 mL/min: watch for anticholinergic effects [BT-NEML] [FDA].", hepatic: "No adjustment [UNVERIFIED-KNOWLEDGE].", pregnancy: "Category C (Bhutan NEMF) [BT-NEML].", other: "Not for acute bronchospasm [FDA]." },
  tox: { human: "Anticholinergic effects: dry mouth, tachycardia, urinary retention, blurred vision [FDA] [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to tiotropium, ipratropium or components (HandiHaler: milk protein) [FDA] [BT-NEML]."],
  ae: { common: ["Dry mouth, upper respiratory infection, sinusitis, constipation [FDA] [BT-NEML]."], serious: ["Paradoxical bronchospasm [FDA]", "Angle-closure glaucoma [FDA] [BT-NEML]", "Urinary retention [FDA] [BT-NEML]", "Immediate hypersensitivity [FDA]"] },
  monitor: ["Inhaler technique; symptoms and exacerbations [BT-NEML]."],
  local: { neml: "On the Bhutan NEML 2025: tiotropium 9 mcg MDI and 2.5 mcg Respimat [BT-NEML].", strengths: "9 mcg; 2.5 mcg.", stg: "COPD maintenance [BT-NEML]." },
  calc: [],
  sources: [["FDA", "Spiriva Respimat — FDA label (DailyMed)", N6_DM("7b656b14-fcaa-2741-f6f0-e0be48971c02")], ["FDA-2", "Spiriva HandiHaler — FDA label (DailyMed)", N6_DM("820839ef-e53d-47e8-a3b9-d911ff92e6a9")], N6_BT],
  dose: { tagline: "Once-daily LAMA inhaler for COPD — not a reliever.",
    adult: [{ ind: "COPD", text: "2 inhalations once daily (Respimat 2.5 mcg, MDI 9 mcg, or one 18 mcg capsule).", bt: "Bhutan NEML: 9 mcg MDI; 2.5 mcg Respimat." }],
    child: [{ ind: "Asthma (6 years+)", text: "Respimat 1.25 mcg, 2 inhalations once daily." }] }
});

FDB_M("ethinylestradiol-levonorgestrel", {
  inn: "Ethinylestradiol + levonorgestrel (combined oral contraceptive)", atc: "G03AA07", cls: "Combined hormonal contraceptive",
  linked: [["Contraception", "First-line combined pill [BT-NEML]", "contraception-adult"]],
  forms: ["Tablets ethinylestradiol 30 mcg + levonorgestrel 150 mcg (21 active + 7 inactive) [FDA] [BT-NEML].", "Bhutan: ethinylestradiol 0.03 mg + levonorgestrel 0.15 mg tablet (NRH/RRH/DH/PHC) [BT-NEML]."],
  moa: "Suppresses ovulation; thickens cervical mucus [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Enzyme inducers (rifampicin, carbamazepine, phenytoin, efavirenz) lower levels [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Contraception [FDA] [BT-NEML].", "Primary amenorrhoea, dysfunctional uterine bleeding, endometriosis, menorrhagia, chronic pelvic pain (Bhutan NEMF) [BT-NEML]."], paed: ["After menarche, as for adults [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Contraception", "1 active tablet daily for 21 days, then 1 inactive tablet daily for 7 days; start the next pack without a gap [BT-NEML] [FDA]."], ["Starting", "Day 1 of the period (no backup needed) or another day with a barrier method for 7 days [FDA] [BT-NEML]."], ["After delivery", "Not before 4 weeks after delivery (Bhutan NEMF) [BT-NEML]; not while breastfeeding in the first 6 months [UNVERIFIED-KNOWLEDGE]."], ["Surgery", "Stop one month before elective major surgery [BT-NEML]."]],
  paed: { tiers: ["Adolescents after menarche: adult regimen [UNVERIFIED-KNOWLEDGE]."], transition: "Adult.", calcNote: "Fixed regimen." },
  adj: { renal: N6_NEP, hepatic: "Contraindicated in active liver disease or liver tumours [FDA] [BT-NEML].", pregnancy: "Not for use in pregnancy [FDA].", other: "Missed pills: take the missed pill as soon as remembered; use backup for 7 days if 2 or more are missed [BT-NEML] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, withdrawal bleeding [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Women over 35 who smoke [FDA].", "High risk of arterial or venous thrombosis (history of VTE, stroke, heart disease, migraine with aura, uncontrolled hypertension, diabetes with vascular disease) [FDA] [BT-NEML].", "Breast or other hormone-dependent cancer; undiagnosed vaginal bleeding; liver disease; pregnancy [FDA] [BT-NEML]."],
  ae: { common: ["Breakthrough bleeding, nausea, breast tenderness, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Venous thromboembolism [FDA]", "Stroke and myocardial infarction (smokers, over 35) [FDA]", "Hypertension [FDA]", "Liver tumours [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure before starting and yearly [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: EE 0.03 mg + LNG 0.15 mg (down to PHC) [BT-NEML].", strengths: "30 mcg + 150 mcg.", stg: "Family planning [BT-NEML]." },
  calc: [],
  sources: [["FDA", "Portia (levonorgestrel and ethinyl estradiol) — FDA label (DailyMed)", N6_DM("c78b236b-85c4-4258-a524-cea08775100c")], N6_BT],
  dose: { tagline: "Combined pill — 21 active days, 7 inactive; not for smokers over 35.",
    boxedTitle: "Cigarette smoking and serious cardiovascular events",
    boxed: "Cigarette smoking increases the risk of serious cardiovascular events from combination oral contraceptive (COC) use. This risk increases with age, particularly in women over 35 years of age, and with the number of cigarettes smoked. For this reason, COCs, including Portia ®, are contraindicated in women who are over 35 years of age and smoke [FDA].",
    adult: [{ ind: "Contraception", text: "1 tablet daily (21 active, 7 inactive); start the next pack without a gap.", bt: "Bhutan NEML: 30 mcg + 150 mcg." }],
    child: [{ ind: "Adolescents", text: "Adult regimen after menarche." }] }
});

FDB_M("tenofovir-disoproxil", {
  inn: "Tenofovir disoproxil fumarate (TDF)", atc: "J05AF07", cls: "Nucleotide reverse transcriptase inhibitor",
  linked: [["HIV — adults", "TLD (tenofovir + lamivudine + dolutegravir) first line [BT-NEML]", "hiv-adult"], ["HIV — children", "[BT-NEML]", "hiv-child"], ["Hepatitis — adults", "Chronic hepatitis B [BT-NEML]", "hepatitis-adult"]],
  forms: ["Tablets 150, 200, 250, 300 mg; oral powder 40 mg/g [FDA].", "Bhutan: tenofovir 300 mg tablet (hepatitis B); TLD — dolutegravir 50 mg + lamivudine 300 mg + tenofovir 300 mg; lamivudine 300 mg + tenofovir 300 mg (NRH/RRH) [BT-NEML]."],
  moa: "Nucleotide analogue that blocks HIV reverse transcriptase and HBV polymerase [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted — interval lengthens with low creatinine clearance [FDA]."],
  ind: { adult: ["HIV-1 infection with other antiretrovirals; pre-exposure prophylaxis (with lamivudine or emtricitabine) [FDA] [BT-NEML].", "Chronic hepatitis B [FDA] [BT-NEML]."], paed: ["HIV-1, 2 years and older; chronic hepatitis B, 2 years and older and at least 10 kg [FDA]."] },
  adult: [["HIV or hepatitis B", "300 mg once daily with or without food [FDA] [BT-NEML]."], ["TLD (Bhutan)", "1 tablet once daily (dolutegravir 50 mg + lamivudine 300 mg + tenofovir 300 mg) [BT-NEML]."], ["Kidney", "CrCl 30–49: 300 mg every 48 h; 10–29: every 72–96 h; haemodialysis: every 7 days after dialysis [FDA]."], ["Before starting", "Test for HBV and HIV; creatinine, urine glucose and protein (phosphate in CKD) [FDA]."]],
  paed: { tiers: ["17 kg and over, can swallow tablets: 150, 200, 250 or 300 mg once daily by weight band [FDA].", "10 kg and over, cannot swallow tablets: oral powder 8 mg/kg once daily (maximum 300 mg) [FDA].", "Bhutan NEMF: not recommended under 10 years [BT-NEML]."], transition: "Adult 300 mg from 35 kg [FDA].", calcNote: "Adult fixed dose with kidney interval." },
  adj: { renal: "CrCl 30–49 every 48 h; 10–29 every 72–96 h; HD weekly after dialysis; no data under 10 not on HD [FDA].", hepatic: "No adjustment [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Used in pregnancy as part of standard regimens [UNVERIFIED-KNOWLEDGE].", other: "Avoid with nephrotoxic drugs; check bone health in long use [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Kidney injury, Fanconi syndrome [FDA] [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Supportive; haemodialysis removes about 10% [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Do not use alone for HIV; PrEP only in people confirmed HIV-negative [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea, diarrhoea, headache, rash, asthenia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe acute exacerbation of hepatitis B on stopping [FDA]", "New or worsening kidney impairment, Fanconi syndrome [FDA]", "Bone loss and osteomalacia [FDA]", "Lactic acidosis with hepatomegaly [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Creatinine, urine glucose and protein; HBV markers and liver tests after stopping [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: tenofovir 300 mg; TLD; lamivudine + tenofovir [BT-NEML].", strengths: "300 mg.", stg: "TLD first-line HIV regimen; hepatitis B treatment [BT-NEML]." },
  calc: [
    { drug: "tenofovir-disoproxil", indication_id: "adult", label: "HIV or hepatitis B — 300 mg once daily (interval by CrCl)", route: "PO", population: { min_age_months: null, max_age_months: null, min_weight_kg: 35, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 300, unit: "mg/tab", whole: true }], rounding: "Whole tablet", renal: [{ crcl_min: 30, crcl_max: 49.99, action: "extend_interval", factor: 48 }, { crcl_min: 10, crcl_max: 29.99, action: "extend_interval", factor: 72 }, { crcl_min: 0, crcl_max: 9.99, action: "avoid", note: "no data unless on haemodialysis (then 300 mg every 7 days after dialysis)" }], flags: ["CrCl 10–29: every 72–96 h", "Test HBV and HIV first"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Viread (tenofovir disoproxil fumarate) — FDA label (DailyMed)", N6_DM("33fd6418-fbdc-42ca-a50d-ce2a476a5418")], N6_BT],
  dose: { tagline: "Backbone of HIV treatment (TLD) and hepatitis B — adjust interval for kidney function.",
    boxedTitle: "Severe acute exacerbation of hepatitis B",
    boxed: "Severe acute exacerbations of hepatitis B virus (HBV) have been reported in HBV-infected patients who have discontinued anti-hepatitis B therapy, including VIREAD. Hepatic function should be monitored closely with both clinical and laboratory follow-up for at least several months in HBV-infected patients who discontinue anti-hepatitis B therapy, including VIREAD. If appropriate, resumption of anti-hepatitis B therapy may be warranted [FDA].",
    adult: [{ ind: "HIV or hepatitis B", text: "300 mg once daily; TLD 1 tablet daily.", calc: ["adult"], bt: "Bhutan NEML: 300 mg; TLD; TL." }],
    child: [{ ind: "2 years and older", text: "Weight-band tablets from 17 kg; oral powder 8 mg/kg (maximum 300 mg)." }] }
});

FDB_M("lidocaine-prilocaine", {
  inn: "Lidocaine 2.5% + prilocaine 2.5% (EMLA)", atc: "N01BB20", cls: "Topical local anaesthetic (eutectic mixture)",
  linked: [],
  forms: ["Cream 2.5% + 2.5% [FDA].", "Bhutan: lignocaine 2.5% + prilocaine 2.5% gel, 5 g (NRH/RRH) [BT-NEML]."],
  moa: "Blocks sodium channels in skin nerve endings [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorption rises with area, time and broken skin [FDA]."],
  ind: { adult: ["Dermal anaesthesia before cannulation, venepuncture and minor skin procedures; split-thickness skin graft harvesting [FDA] [BT-NEML]."], paed: ["Same, with strict limits by age and weight [FDA] [BT-NEML]."] },
  adult: [["Venepuncture or cannulation", "2.5 g over 20–25 cm² under an occlusive dressing for at least 1 hour [BT-NEML] [FDA]."], ["Skin graft harvesting", "2 g per 10 cm² for at least 2 hours [BT-NEML] [FDA]."]],
  paed: { tiers: ["0–3 months or under 5 kg: maximum 1 g over 10 cm² for up to 1 hour [BT-NEML] [FDA].", "3–12 months and over 5 kg: maximum 2 g over 20 cm² for up to 4 hours [BT-NEML] [FDA].", "1–6 years and over 10 kg: maximum 10 g over 100 cm² for up to 4 hours [BT-NEML] [FDA].", "7–12 years and over 20 kg: maximum 20 g over 200 cm² for up to 4 hours [BT-NEML] [FDA]."], transition: "Adult use from 13 years.", calcNote: "Maximum grams by age and weight." },
  adj: { renal: N6_NA, hepatic: "Severe liver disease raises levels [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: N6_NEP, other: "Methaemoglobin risk with nitrates, sulfonamides, dapsone and in G6PD deficiency [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Methaemoglobinaemia (especially infants); local anaesthetic toxicity with large areas [FDA].", animal: N6_LD, manage: "Remove cream; methylene blue for methaemoglobinaemia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Allergy to amide local anaesthetics [FDA].", "Congenital or idiopathic methaemoglobinaemia; infants under 12 months on methaemoglobin-inducing drugs [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Skin blanching, redness, itching, burning [BT-NEML] [FDA]."], serious: ["Methaemoglobinaemia [FDA]", "Systemic toxicity from overuse [FDA]"] },
  monitor: ["Skin; colour and oxygen saturation in infants [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: lignocaine 2.5% + prilocaine 2.5% gel 5 g [BT-NEML].", strengths: "2.5% + 2.5%.", stg: N6_NEP },
  calc: [],
  sources: [["FDA", "Lidocaine and prilocaine cream — FDA label (DailyMed)", N6_DM("0a3b26d3-7a32-4403-88ab-0924356b5214")], N6_BT],
  dose: { tagline: "Numbing cream before needles — strict grams-and-area limits in infants.",
    adult: [{ ind: "Venepuncture", text: "2.5 g over 20–25 cm² under a dressing for at least 1 hour.", bt: "Bhutan NEML: 5 g gel." }],
    child: [{ ind: "Maximum by age", text: "Under 3 months 1 g; 3–12 months 2 g; 1–6 years 10 g; 7–12 years 20 g." }] }
});

FDB_M("methyl-salicylate", {
  inn: "Methyl salicylate (topical)", atc: "M02AC", cls: "Topical counter-irritant analgesic",
  linked: [],
  forms: ["Creams, ointments and liniments, usually with menthol [FDA].", "Bhutan: methyl salicylate solution 450 mL (NEML 2025) [BT-NEML]."],
  moa: "Counter-irritant; salicylate absorbed through skin [UNVERIFIED-KNOWLEDGE].",
  pk: ["Absorbed through skin — large areas or heat increase absorption [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Temporary relief of minor muscle and joint pain [FDA]."], paed: ["12 years and over [FDA]."] },
  adult: [["Topical", "Apply to the area no more than 3–4 times daily; do not bandage tightly or use with heat [FDA]."]],
  paed: { tiers: ["12 years and over: as adults; under 12: ask a doctor [FDA]."], transition: "Adult from 12 years.", calcNote: "No calculator." },
  adj: { renal: N6_NEP, hepatic: N6_NEP, pregnancy: "Avoid large areas late in pregnancy (salicylate) [UNVERIFIED-KNOWLEDGE].", other: "Can increase warfarin effect [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Very toxic if swallowed — small amounts of oil of wintergreen cause severe salicylate poisoning, especially in children [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Treat as salicylate poisoning [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Wounds or damaged skin; eyes and mucous membranes [FDA]."],
  ae: { common: ["Skin redness, irritation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Burns with heat or tight bandaging [FDA] [UNVERIFIED-KNOWLEDGE]", "Salicylate toxicity if swallowed [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["None. [NEP]"],
  local: { neml: "On the Bhutan NEML 2025: methyl salicylate solution 450 mL [BT-NEML].", strengths: "Solution.", stg: N6_NEP },
  calc: [],
  sources: [["FDA", "Mentholatum Pain Relieving (methyl salicylate, menthol) — OTC label (DailyMed)", N6_DM("0056b952-9870-485a-9f35-f985472875a9")], N6_BT],
  dose: { tagline: "Rub-on pain reliever — dangerous if swallowed; keep away from children.",
    adult: [{ ind: "Muscle or joint pain", text: "Apply up to 3–4 times daily; no heat, no tight bandage." }],
    child: [{ ind: "Under 12 years", text: "Ask a doctor." }] }
});

FDB_M("barium-sulfate", {
  inn: "Barium sulfate (oral contrast)", atc: "V08BA01", cls: "Radiographic contrast (GI)",
  linked: [],
  forms: ["Oral suspension and paste; enema [FDA].", "Bhutan: barium sulphate 95% w/v oral suspension (NRH/RRH/DH) [BT-NEML]."],
  moa: "Radio-opaque; outlines the gut lumen on X-ray [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Not absorbed [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Radiography of the GI tract by mouth or by enema [FDA] [BT-NEML]."], paed: ["Same, volume by GI size [FDA]."] },
  adult: [["Oral", "Volume depends on the study; example adult range 150–750 mL of a 58% suspension (87–435 g barium sulfate) [FDA]."]],
  paed: { tiers: ["Adjust dose to relative GI volume [FDA]."], transition: "Adult volumes.", calcNote: "Study-specific." },
  adj: { renal: N6_NA, hepatic: N6_NA, pregnancy: N6_NEP, other: "Use water-soluble contrast instead if perforation is suspected [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Aspiration pneumonitis; barium peritonitis if leaked [FDA] [UNVERIFIED-KNOWLEDGE].", animal: N6_LD, manage: "Supportive; surgery for peritonitis [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known or suspected GI perforation or obstruction; high aspiration risk (prior aspiration, tracheo-oesophageal fistula, obtundation); severe hypersensitivity [FDA] [BT-NEML]."],
  ae: { common: ["Constipation, abdominal cramps [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Aspiration [FDA]", "Intestinal impaction or obstruction [BT-NEML]", "Peritonitis with perforation [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Bowel habit after the study; fluids [UNVERIFIED-KNOWLEDGE]."],
  local: { neml: "On the Bhutan NEML 2025: barium sulphate 95% w/v oral [BT-NEML].", strengths: "95% w/v.", stg: N6_NEP },
  calc: [],
  sources: [["FDA", "Liquid E-Z-Paque (barium sulfate) — FDA label (DailyMed)", N6_DM("2ecea1ab-66c8-4eb0-8503-6d6b41b51328")], N6_BT],
  dose: { tagline: "Oral GI contrast — avoid when perforation or aspiration is a risk.",
    adult: [{ ind: "GI radiography", text: "Volume per the study protocol." }],
    child: [{ ind: "GI radiography", text: "Volume by GI size." }] }
});

FDB_M("carboxymethylcellulose", {
  inn: "Carboxymethylcellulose (eye drops)", atc: "S01XA20", cls: "Ocular lubricant (artificial tears)",
  linked: [["Red eye — adults", "Dry eye [BT-NEML]", "redeye-adult"]],
  forms: ["Eye drops 0.25–1% (OTC) [FDA] [UNVERIFIED-KNOWLEDGE].", "Bhutan: carboxymethylcellulose 1% eye drops, 5 mL (NRH/RRH/DH) [BT-NEML]."],
  moa: "Lubricates and protects the ocular surface [UNVERIFIED-KNOWLEDGE].",
  pk: [N6_NA],
  ind: { adult: ["Dry eye and tear deficiency [BT-NEML] [FDA]."], paed: ["Same [BT-NEML]."] },
  adult: [["Dry eye", "1–2 drops every 3–4 hours as needed [BT-NEML]."]],
  paed: { tiers: ["Apply as needed [BT-NEML]."], transition: "Same.", calcNote: "No calculator." },
  adj: { renal: N6_NA, hepatic: N6_NA, pregnancy: "Safe [UNVERIFIED-KNOWLEDGE].", other: "Discard one month after opening; space other eye drops 5 minutes apart [BT-NEML]." },
  tox: { human: N6_NA, animal: N6_LD, manage: N6_NA },
  contra: ["Corneal abrasion, eye infection or trauma (Bhutan NEMF) [BT-NEML]."],
  ae: { common: ["Brief blurring, irritation [BT-NEML]."], serious: ["Stop if pain, vision change or redness persists [FDA] [BT-NEML]"] },
  monitor: ["None. [NEP]"],
  local: { neml: "On the Bhutan NEML 2025: carboxymethylcellulose 1% eye drops [BT-NEML].", strengths: "1%.", stg: "Dry eye [BT-NEML]." },
  calc: [],
  sources: [N6_BT, ["FDA", "TheraTears (carboxymethylcellulose) — OTC label (DailyMed)", N6_DM("02b70e2d-8159-4637-a282-9eac1468e786")]],
  dose: { tagline: "Artificial tears for dry eye.",
    adult: [{ ind: "Dry eye", text: "1–2 drops every 3–4 hours as needed.", bt: "Bhutan NEML: 1%, 5 mL." }],
    child: [{ ind: "Dry eye", text: "As needed." }] }
});

/* Brand names — BATCH N6 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"tenofovir-disoproxil":{"IN":[["Tenvir","Cipla Limited","Tenvir 300Mg Bottle Of 30 Tablets"],["Tenohep","Zydus Lifesciences Limited","Tenohep 300Mg Bottle Of 30 Tablets"],["Tenof","Hetero Healthcare Limited","Tenof 300Mg Bottle Of 30 Tablets"]],"BD":[["Foviral","Advanced Chemical Industries PLC","300 mg"],["Proxivir","Square Pharmaceuticals PLC","300 mg"],["Tafovir","Popular Pharmaceuticals PLC","300 mg"]],"src":["https://pharmeasy.in/online-medicine-order/tenvir-300mg-bottle-of-30-tablets-6374","https://pharmeasy.in/online-medicine-order/tenohep-300mg-bottle-of-30-tablets-3983006","https://pharmeasy.in/online-medicine-order/tenof-300mg-bottle-of-30-tablets-192519","https://medex.com.bd/brands/9756/foviral-300-mg-tablet","https://medex.com.bd/brands/9757/proxivir-300-mg-tablet","https://medex.com.bd/brands/9758/tafovir-300-mg-tablet"]},"tiotropium":{"IN":[["Tiova","Cipla Limited","Tiova Box Of 200Md Metered Dose Inhaler"],["Tiate","Lupin","Tiate 18Mcg Box Of 30 Transcaps"],["Tiomist","Zydus Healthcare Limited","Tiomist Bottle Of 15 Respicaps"]],"BD":[["Topium","ACME Laboratories Ltd","18 mcg"],["Tioriva","Beximco Pharmaceuticals PLC","18 mcg"],["Dilriva","UniMed UniHealth Pharmaceuticals Ltd","18 mcg"]],"src":["https://pharmeasy.in/online-medicine-order/tiova-inhaler-200md-6773","https://pharmeasy.in/online-medicine-order/tiate-18mcg-box-of-30-transcaps-4265667","https://pharmeasy.in/online-medicine-order/tiomist-respicaps-11313","https://medex.com.bd/brands/3642/topium-18-mcg-inhalation-capsule","https://medex.com.bd/brands/25000/tioriva-18-mcg-inhalation-capsule","https://medex.com.bd/brands/25003/dilriva-18-mcg-inhalation-capsule"]},"streptokinase":{"IN":[["Streptoken","Chandra Bhagat Pharma Private Limited","Streptoken 1500000Iu Vial Of 1 Powder For Injection"],["Icikinase","Abbott Healthcare Pvt Ltd","Icikinase 15Lac Iu Dry Vial Of 1 Powder For Injection"],["Stpase","Cadila Pharmaceuticals Limited","Stpase 1500000Iu Vial Of 1 Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/streptoken-1500000iu-vial-of-1-powder-for-injection-61419","https://pharmeasy.in/online-medicine-order/icikinase-15lac-iu-vial-of-1-injection-50757","https://pharmeasy.in/online-medicine-order/stpase-15lac-inj-61403"]},"calcium-polystyrene-sulfonate":{"IN":[],"BD":[["Level-K","Incepta Pharmaceuticals Ltd","99.934% w/w"],["K-Nor","Popular Pharmaceuticals PLC","99.934% w/w"]],"src":["https://medex.com.bd/brands/27626/level-k-99934-w-powder-for-suspension","https://medex.com.bd/brands/28452/k-nor-99934-w-powder-for-suspension"]},"carboxymethylcellulose":{"IN":[["Everfresh","Biochem Pharmaceutical Industries","Everfresh 0.5% Tears Bottle Of 10Ml Eye Drops"],["Tear","Sun Pharma","Tear Drops Bottle Of 10Ml Eye Drops"],["Optibex","Alkem Laboratories Ltd","Optibex Tear Bottle Of 10Ml Eye Drops"]],"BD":[["Lacrigel OSD","Opsonin Pharma Ltd","1%"],["Eyefil","ACME Laboratories Ltd","1%"],["Bestfresh SV","UNIDO Pharmaceuticals Ltd","1%"]],"src":["https://pharmeasy.in/online-medicine-order/everfresh-0-5-tears-eye-drop-10ml-127855","https://pharmeasy.in/online-medicine-order/tear-drops-eye-drops-10ml-25260","https://pharmeasy.in/online-medicine-order/optibex-tear-eye-drops-10ml-177937","https://medex.com.bd/brands/36612/lacrigel-osd-1-eye-drop","https://medex.com.bd/brands/37117/eyefil-1-eye-drop","https://medex.com.bd/brands/37316/bestfresh-sv-1-eye-drop"]},"colecalciferol":{"IN":[],"BD":[["Ditarol","Navana Pharmaceuticals Ltd","1000 IU"],["Maxvit D","Concord Pharmaceuticals Ltd","40000 IU"],["Delight","Opsonin Pharma Ltd","1000 IU"]],"src":["https://medex.com.bd/brands/26909/ditarol-1000-iu-tablet","https://medex.com.bd/brands/30821/maxvit-d-40000-iu-capsule","https://medex.com.bd/brands/31212/delight-1000-iu-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
