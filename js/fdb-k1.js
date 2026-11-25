/* Clinical Disease Guide — Drug monograph database, block K, batch K-1 (25 Nov 2026).
   Ketoconazole, ketoprofen, ketotifen — the only K names with a current FDA label not already built (ketamine, ketorolac done earlier).
   Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it). Boxed text "@LABEL" filled by _work/tools/fdb-boxed-fill.js.
   Ketoconazole: the pack picked the 2% cream; the oral tablet label (boxed warning) was added. */
(function () { // K-1 scope
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };

FDB_M("ketoconazole", {
  inn: "Ketoconazole", atc: "D01AC08", cls: "Imidazole antifungal (oral and topical)",
  linked: [],
  forms: ["Tablets 200 mg [FDA].", "Cream 2% (topical) [FDA]; shampoo 1–2% [UNVERIFIED-KNOWLEDGE]."],
  moa: "Inhibits fungal ergosterol synthesis (CYP51); orally also inhibits steroid synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Oral: strong CYP3A4 inhibitor — many dangerous interactions [FDA]."],
  ind: { adult: ["Oral (only when other antifungals are unavailable or not tolerated): blastomycosis, coccidioidomycosis, histoplasmosis, chromomycosis, paracoccidioidomycosis [FDA].", "Cream 2%: tinea corporis, cruris and pedis; pityriasis versicolor; cutaneous candidiasis; seborrhoeic dermatitis [FDA]."], paed: ["Oral: limited use over 2 years [FDA]. Cream: not established in children [FDA]."] },
  adult: [["Oral (systemic mycoses)", "200 mg once daily; may increase to 400 mg once daily; usually 6 months [FDA]."], ["Cream — tinea, candidiasis, pityriasis versicolor", "Once daily to the affected and surrounding skin: 2 weeks (candida, corporis, cruris, versicolor), 6 weeks (pedis) [FDA]."], ["Cream — seborrhoeic dermatitis", "Twice daily for 4 weeks [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Oral, over 2 years: 3.3–6.6 mg/kg once daily has been used in small numbers [FDA]."], transition: "Adult doses.", calcNote: "Oral mg/kg in children (limited data)." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "Oral: contraindicated in acute or chronic liver disease [FDA].", pregnancy: "Oral: avoid [UNVERIFIED-KNOWLEDGE].", other: "Oral: needs stomach acid — avoid antacids and acid blockers near the dose [UNVERIFIED-KNOWLEDGE]. Cream contains sulfite [FDA]." },
  tox: { human: "Oral overdose: supportive care [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Oral: with dofetilide, quinidine, pimozide, cisapride and other CYP3A4 substrates that prolong QT; acute or chronic liver disease [FDA].", "Cream: hypersensitivity to any ingredient [FDA]."],
  ae: { common: ["Oral: nausea, vomiting, abdominal pain, itching [UNVERIFIED-KNOWLEDGE]. Cream: irritation, itching, stinging [UNVERIFIED-KNOWLEDGE]."], serious: ["Oral: serious hepatotoxicity, liver transplant and death [FDA]", "Oral: QT prolongation with interacting drugs [FDA]", "Oral: adrenal insufficiency [FDA]"] },
  monitor: ["Oral: liver tests (ALT) before starting and weekly during treatment [FDA]."],
  local: notBT,
  calc: [
    { drug: "ketoconazole", indication_id: "oral", label: "Systemic mycosis — adult oral", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, caps: { max_single: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: ["Only when other antifungals are unavailable; weekly ALT"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ketoconazole tablets 200 mg — Amerisyn, label effective 2026-08-10", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1d598696-c6f3-4b7c-ad73-949d2089df35"], ["FDA", "Ketoconazole cream 2% — IPG Pharmaceuticals, label effective 2026-09-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51363e79-8681-4b68-aebf-09323c95809b"], NEML_SRC],
  dose: { tagline: "Topical antifungal for tinea and seborrhoeic dermatitis; oral form only as a last resort (liver).", boxedTitle: "Oral tablets: hepatotoxicity, QT prolongation, drug interactions", boxed: "Because ketoconazole tablets have been associated with serious adverse reactions, ketoconazole tablets are not indicated for treatment of onychomycosis, cutaneous dermatophyte infections, or Candida infections. Ketoconazole tablets should be used only when other effective antifungal therapy is not available or tolerated and the potential benefits are considered to outweigh the potential risks. Hepatotoxicity Serious hepatotoxicity, including cases with a fatal outcome or requiring liver transplantation has occurred with the use of oral ketoconazole. Some patients had no obvious risk factors for liver disease. Patients receiving this drug should be informed by the physician of the risk and should be closely monitored. See [FDA].",
    adult: [{ ind: "Skin (cream 2%)", text: "Once daily: 2 weeks (tinea corporis/cruris, versicolor, candida), 6 weeks (feet)." }, { ind: "Systemic mycosis (oral)", text: "200–400 mg once daily — only if no alternative.", calc: ["oral"] }],
    child: [{ ind: "Oral, over 2 years", text: "3.3–6.6 mg/kg once daily (limited data)." }] }
});

FDB_M("ketoprofen", {
  inn: "Ketoprofen", atc: "M01AE03", cls: "NSAID (propionic-acid derivative)",
  linked: [],
  forms: ["Capsules 25, 50, 75 mg; extended-release 200 mg (not to be combined) [FDA]."],
  moa: "Inhibits cyclo-oxygenase [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short half-life (about 2 h) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Rheumatoid arthritis and osteoarthritis; mild to moderate pain; primary dysmenorrhoea [FDA]."], paed: ["Not established under 18 years [FDA]."] },
  adult: [["Rheumatoid and osteoarthritis", "75 mg three times daily or 50 mg four times daily; maximum 300 mg/day; smaller doses in small, debilitated or older patients [FDA]."], ["Pain, dysmenorrhoea", "25–50 mg every 6–8 h as needed [FDA]."], ["Kidney impairment", "Mild: maximum 150 mg/day. GFR < 25 mL/min/1.73 m² or end-stage: maximum 100 mg/day [FDA]."], ["Over 75 years; liver impairment with albumin < 3.5 g/dL", "Reduce the starting dose [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "Adults.", calcNote: "Fixed adult doses with kidney maximum." },
  adj: { renal: "Mild: max 150 mg/day; GFR < 25: max 100 mg/day [FDA].", hepatic: "Reduce if albumin < 3.5 g/dL [FDA].", pregnancy: "From about 20 weeks: fetal kidney problems; avoid from 30 weeks [UNVERIFIED-KNOWLEDGE].", other: "Lowest effective dose for the shortest time [FDA]." },
  tox: { human: "Lethargy, drowsiness, nausea, vomiting, epigastric pain; GI bleeding [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive." },
  contra: ["Hypersensitivity to ketoprofen [FDA].", "Asthma, urticaria or allergic reactions after aspirin or other NSAIDs [FDA].", "CABG surgery [FDA]."],
  ae: { common: ["Dyspepsia, nausea, abdominal pain, diarrhoea, headache [UNVERIFIED-KNOWLEDGE]."], serious: ["MI and stroke [FDA]", "GI bleeding, ulceration and perforation [FDA]", "Kidney injury [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, kidney function, signs of GI bleeding [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "ketoprofen", indication_id: "pain", label: "Pain — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 25, value_max: 50, unit: "mg", per: "dose" }, interval_h: 6, caps: { max_single: 75, max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 25, unit: "mg/cap" }], rounding: "Whole capsules",
      renal: [{ crcl_min: 0, crcl_max: 24.999, action: "cap_daily", max_daily: 100 }, { crcl_min: 25, crcl_max: 59.999, action: "cap_daily", max_daily: 150 }], flags: ["Every 6–8 h as needed"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Ketoprofen capsules — Marnel, label effective 2026-04-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4e7bceb6-dcb5-c5e0-e063-6294a90a101e"], NEML_SRC],
  dose: { tagline: "NSAID for arthritis, pain and period pain.", boxedTitle: "Cardiovascular and gastrointestinal risk", boxed: "Cardiovascular Thrombotic Events Nonsteroidal anti-inflammatory drugs (NSAIDs) cause an increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke, which can be fatal. This risk may occur early in treatment and may increase with duration of use.. Ketoprofen Capsules, USP is contraindicated in the setting of coronary artery bypass graft (CABG) surgery.. Gastrointestinal Risk NSAIDs cause an increased risk of serious gastrointestinal adverse events including bleeding, ulceration, and perforation of the stomach or intestines, which can be fatal. These events can occur at any time during use and without warning symptoms. Elderly patients are at greater risk for serious gastrointestinal (GI) events. 1 Throughout this package insert, the term NSAID refers to a non-aspirin non-steroidal anti-inflammatory drug [FDA].",
    adult: [{ ind: "Pain", text: "25–50 mg every 6–8 h; arthritis 75 mg three times daily; max 300 mg/day (kidney impairment 100–150 mg).", calc: ["pain"] }], child: [{ ind: "—", text: "Not established." }] }
});

FDB_M("ketotifen", {
  inn: "Ketotifen", atc: "S01GX08", cls: "Antihistamine / mast-cell stabiliser (eye drops)",
  linked: [],
  forms: ["Eye drops 0.025% (OTC) [FDA]."],
  moa: "H1 antagonist and mast-cell stabiliser [UNVERIFIED-KNOWLEDGE].",
  pk: ["Topical eye use [FDA]."],
  ind: { adult: ["Temporary relief of itchy eyes from pollen, grass, animal hair and dander [FDA]."], paed: ["From 3 years [FDA]."] },
  adult: [["Allergic itchy eyes", "1 drop in the affected eye(s) twice daily, every 8–12 h; no more than twice a day [FDA]."]],
  paed: { tiers: ["3 years and older: same [FDA].", "Under 3 years: ask a doctor [FDA]."], transition: "Same.", calcNote: "Eye drops." },
  adj: { renal: "Not applicable.", other: "Remove contact lenses; wait 10 min before reinserting; wait 5 min between eye products [FDA]." },
  tox: { human: "Not expected with eye use [UNVERIFIED-KNOWLEDGE].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "—" },
  contra: ["Sensitivity to any ingredient [FDA]."],
  ae: { common: ["Eye redness, burning, headache [UNVERIFIED-KNOWLEDGE]."], serious: ["Eye pain, vision change or worsening redness — stop and seek care [FDA]"] },
  monitor: ["Stop if eye pain, vision change or redness lasting more than 72 h [FDA]."],
  local: notBT, calc: [],
  sources: [["FDA", "Ketotifen fumarate ophthalmic solution 0.025% (OTC) — label effective 2026-08-31", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7d0146a9-5073-4e24-954f-75b84affadc2"], NEML_SRC],
  dose: { tagline: "Antihistamine eye drops for allergic itchy eyes.", adult: [{ ind: "Allergic conjunctivitis", text: "1 drop twice daily." }], child: [{ ind: "3 years+", text: "1 drop twice daily." }] }
});

})();

/* brands (India: PharmEasy, molecule-matched; Bangladesh: MedEx). Ketotifen omitted: listed brands are oral, this record covers eye drops. */
(function(){ const B = {"ketoconazole":{"IN":[["Ketocip","Cipla Limited","Ketocip 2% Bottle Of 100Ml Shampoo"],["Ketoford","Leeford Healthcare Ltd","Ketoford Tube Of 15Gm Cream"],["Danfree","Cipla Gx","Danfree 2% Bottle Of 100Ml Shampoo"]],"BD":[["Dancel","Incepta Pharmaceuticals Ltd","200 mg"],["Dancel Aloe","Incepta Pharmaceuticals Ltd","2%"],["Danzero","Radiant Pharmaceuticals Ltd","1.9%"]],"src":["https://pharmeasy.in/online-medicine-order/ketocip-2-shampoo-100ml-194644","https://pharmeasy.in/online-medicine-order/ketoford-tube-of-15gm-cream-504089","https://pharmeasy.in/online-medicine-order/danfree-2-shampoo-100ml-191631","https://medex.com.bd/brands/38121/dancel-200-mg-tablet","https://medex.com.bd/brands/38865/dancel-aloe-2-shampoo","https://medex.com.bd/brands/39552/danzero-19-shampoo"]},"ketoprofen":{"IN":[["Ketoplast","Zuventus Health Care Ltd","Ketoplast Plus Packet Of 7 Plasters"],["Kt Gel","Rusan Healthcare Pvt Ltd","Kt Gel Tube Of 30Gm Gel"],["Kt Plast","Rusan Healthcare Pvt Ltd","Kt Plast 20Mg Box Of 5 Patch"]],"BD":[["Zerofen","Al-Madina Pharmaceuticals Ltd","50 mg"],["Profenid-CR","Synovia Pharma PLC","200 mg"],["Kentop","Premier Pharmaceuticals Ltd","100 mg"]],"src":["https://pharmeasy.in/online-medicine-order/ketoplast-plus-packet-of-7-plasters-236318","https://pharmeasy.in/online-medicine-order/kt-gel-tube-of-30gm-gel-4842404","https://pharmeasy.in/online-medicine-order/kt-plast-20mg-box-of-5-patch-4803006","https://medex.com.bd/brands/40174/zerofen-50-mg-ec-tablet","https://medex.com.bd/brands/21216/profenid-cr-200-mg-cr-capsule","https://medex.com.bd/brands/21214/kentop-100-mg-ec-tablet"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
