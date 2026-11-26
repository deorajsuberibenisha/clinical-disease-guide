/* Clinical Disease Guide — Drug monograph database, VACCINES (26 Nov 2026; owner: "add all Bhutan vaccine with international comparison").
   Every vaccine on the Bhutan NEML 2025 (section 18.2) and the national schedule (EPI Manual for Health Staff, 6th ed. 2022), plus seasonal influenza.
   Each record carries d.compare = { cols, rows, note } → rendered by app.js as "Bhutan vs international schedules".
   Comparators: WHO Table 1 (updated Dec 2025), India UIP (PIB "Celebrating the Power of Vaccines", 17 Mar 2026 + NHM vaccine-wise schedule for dose/route/site;
   HPV from Gavi VaccinesWork 13 Mar 2026), USA = AAP 2026 child/adolescent schedule (multi-society; not the CDC schedule).
   Bhutan plans in the National Immunization Strategy 2025–2029 (hexavalent 2026 with IPV withdrawn; single-dose HPV 2025; PCV for 65+) are shown as PLANNED:
   no published source confirmed implementation (web search 26 Nov 2026). Sources in _work/research/vaccines/. No calculators: fixed volumes. */
(function () { // vaccines scope
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const EPI = ["BT-EPI", "Expanded Programme on Immunization (EPI) Manual for Health Staff, 6th edition — Vaccine Preventable Disease Program, Ministry of Health, Bhutan, 2022", "https://moh.gov.bt/wp-content/uploads/2025/01/Revised-EPI-Manual.pdf"];
const NIS = ["BT-NIS", "National Immunization Strategy 2025–2029 — Ministry of Health, Bhutan", ""];
const RAB = ["BT-RAB", "National guidelines for management of rabies and anti-rabies prophylaxis, 3rd edition 2023 (revised 2024) — Zoonotic Disease Control Unit, Ministry of Health, Bhutan", ""];
const WHO = ["WHO-GL", "Table 1: Summary of WHO position papers — recommendations for routine immunization — WHO, updated December 2025", "https://www.who.int/publications/m/item/table1-summary-of-who-position-papers-recommendations-for-routine-immunization"];
const UIP = ["IN-UIP", "Celebrating the Power of Vaccines (UIP schedule) — Press Information Bureau, Government of India, 17 March 2026", "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/mar/doc2026320830601.pdf"];
const UIPV = ["IN-UIP", "National Immunization Schedule for infants, children and pregnant women (vaccine-wise: dose, route, site) — National Health Mission, India", "https://nhm.gov.in/New_Updates_2018/NHM_Components/Immunization/report/National_%20Immunization_Schedule.pdf"];
const AAP = ["AAP", "Recommended Child and Adolescent Immunization Schedule, United States, 2026 — American Academy of Pediatrics (multi-society)", "https://publications.aap.org/pediatrics"];
const COLS = ["", "Bhutan", "WHO (Dec 2025)", "India UIP (2026)", "USA (AAP 2026)"];
const CMP = (rows, note) => ({ title: "Bhutan vs WHO, India and USA", cols: COLS, rows, note });
const VAX = "Vaccine";
const NONE = [];
const TOX0 = {};   // no overdose section for vaccines
const BT = (strengths, extra) => ({ neml: "On the Bhutan NEML 2025 (vaccines, section 18.2) [BT-NEML].", strengths, stg: extra || "Given through the national immunization programme (EPI) [BT-EPI]." });
const V = (id, o) => FDB_M(id, Object.assign({ calc: [], tox: TOX0, pk: ["Store at +2 to +8 °C [BT-EPI]."] }, o));

V("bcg-vaccine", {
  inn: "BCG vaccine (Bacillus Calmette–Guérin)", atc: "J07AN01", cls: "Live attenuated bacterial vaccine (tuberculosis)",
  linked: [["Tuberculosis — children","Birth-dose BCG prevents TB meningitis and miliary TB [BT-EPI]","tb-child"],["Congenital TB","BCG timing in exposed newborns","congtb-child"]],
  forms: ["Freeze-dried powder, 1 mL multi-dose vial, reconstituted with the supplied diluent only [BT-NEML] [BT-EPI]."],
  moa: "Live attenuated Mycobacterium bovis (Calmette–Guérin strain). Best protection is against tuberculous meningitis and miliary TB in young children [BT-EPI].",
  pk: ["Store at +2 to +8 °C; freezing does not damage BCG. Very heat-sensitive once reconstituted [BT-EPI]."],
  ind: { adult: ["Not routine for adults in Bhutan [BT-EPI]."], paed: ["All newborns at birth or first contact [BT-EPI]."] },
  adult: [["Adults", "Not part of the Bhutan schedule [BT-EPI]."]],
  paed: { tiers: ["At birth or first contact: 0.05 mL intradermal, right upper arm [BT-EPI].", "Missed at birth: give any time up to 2 years; use 0.1 mL if given after 1 year of age [BT-EPI].", "No scar but documented vaccination: do not repeat. Unsure history: repeat [BT-EPI].", "2 years or older and never vaccinated: BCG is not given [BT-EPI]."], transition: "Not given from 2 years.", calcNote: "Fixed volume." },
  adj: { immuno: "Live vaccine — avoid in symptomatic HIV and other severe immunodeficiency [UNVERIFIED-KNOWLEDGE].", preg: "Not given in pregnancy [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Known severe immunodeficiency (e.g. symptomatic HIV) [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Redness and soreness at the site, then a small ulcer and scar [BT-EPI]."], serious: ["Swollen axillary lymph glands [BT-EPI]", "Injection-site abscess [BT-EPI]"] },
  monitor: ["Record the dose; check for the scar at later visits [BT-EPI]."],
  local: BT("BCG freeze-dried 1 mL vial [BT-NEML]."),
  compare: CMP([
    ["Who / when", "All newborns, at birth or first contact; catch-up to 2 years [BT-EPI]", "Single dose at birth in high-TB or leprosy settings, ideally with the HepB birth dose [WHO-GL]", "At birth or as early as possible until 1 year [IN-UIP]", "Not in the routine schedule [AAP]"],
    ["Dose and route", "0.05 mL ID, right upper arm (0.1 mL after 1 year) [BT-EPI]", "1 dose [WHO-GL]", "0.1 mL ID (0.05 mL until 1 month), left upper arm [IN-UIP]", "—"],
    ["Older children / adults", "Not given from 2 years [BT-EPI]", "Unvaccinated TST/IGRA-negative older children and adults from high-incidence settings may be vaccinated [WHO-GL]", "Not given after 1 year [IN-UIP]", "—"]
  ], "Bhutan gives BCG on the RIGHT arm and India on the LEFT: check the arm before deciding a child has no BCG scar."),
  sources: [EPI, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "Birth-dose TB vaccine — 0.05 mL intradermal right upper arm; catch-up to 2 years (0.1 mL after 1 year).",
    adult: [{ ind: "Adults", text: "Not part of the Bhutan schedule." }],
    child: [{ ind: "Newborn", text: "0.05 mL ID, right upper arm, at birth or first contact." }, { ind: "Missed — up to 2 years", text: "0.05 mL (under 1 year) or 0.1 mL (1–2 years) ID." }] }
});

V("hepatitis-b-vaccine", {
  inn: "Hepatitis B vaccine", atc: "J07BC01", cls: "Recombinant (inactivated) hepatitis B surface-antigen vaccine",
  linked: [["Viral hepatitis — children","Birth dose within 24 hours [BT-EPI]","hepatitis-child"],["Viral hepatitis — adults","Adult course 0, 1, 6 months [BT-EPI]","hepatitis-adult"]],
  forms: ["Paediatric monovalent, 10 mL multi-dose vial with vaccine vial monitor [BT-NEML].", "Also inside the pentavalent vaccine (DTP-HepB-Hib) [BT-EPI]."],
  moa: "Recombinant HBsAg induces protective anti-HBs antibody; 95% of children given 3 doses develop lifelong immunity [BT-EPI].",
  pk: ["Store at +2 to +8 °C; heat and freezing both damage it [BT-EPI]."],
  ind: { adult: ["Adults needing protection (3-dose course) [BT-EPI]."], paed: ["All newborns — birth dose within 24 hours ('zero dose') [BT-EPI]."] },
  adult: [["Adults", "1.0 mL IM, upper arm, at 0, 1 and 6 months [BT-EPI]."]],
  paed: { tiers: ["Birth: 0.5 mL IM, anterolateral mid-thigh, within 24 hours [BT-EPI].", "Then 3 doses as pentavalent at 6, 10 and 14 weeks [BT-EPI]."], transition: "Adult dose 1.0 mL.", calcNote: "Fixed volume." },
  contra: ["Severe allergic reaction to a previous dose [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Redness, swelling, pain at the site; mild fever; muscle pain [BT-EPI]."], serious: ["Anaphylaxis (very rare) [BT-EPI]"] },
  monitor: ["Birth-dose timeliness (within 24 hours) is a national indicator [BT-NIS]."],
  local: BT("Hepatitis B vaccine 10 mL vial with VVM [BT-NEML]."),
  compare: CMP([
    ["Birth dose", "Within 24 hours (0.5 mL IM thigh) [BT-EPI]", "As soon as possible after birth, ideally within 24 hours, including preterm and low birth weight [WHO-GL]", "At birth or as early as possible within 24 hours (0.5 mL IM thigh) [IN-UIP]", "Within 24 hours if 2,000 g or more and stable; under 2,000 g at 1 month or discharge [AAP]"],
    ["Rest of series", "Pentavalent at 6, 10, 14 weeks (4 doses in all) [BT-EPI]", "2 or 3 more doses — 3- or 4-dose schedules both acceptable [WHO-GL]", "Pentavalent at 6, 10, 14 weeks [IN-UIP]", "Monovalent/combination: 3 doses at 0, 1–2, 6–18 months [AAP]"],
    ["Adults", "0, 1, 6 months, 1.0 mL [BT-EPI]", "3 doses for high-risk groups if not immunized [WHO-GL]", "Not in UIP [IN-UIP]", "Adult schedule not covered here"]
  ]),
  sources: [EPI, NIS, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "Birth dose within 24 hours, then pentavalent ×3; adults 1.0 mL at 0, 1, 6 months.",
    adult: [{ ind: "Adults", text: "1.0 mL IM upper arm at 0, 1 and 6 months." }],
    child: [{ ind: "Newborn", text: "0.5 mL IM thigh within 24 hours of birth." }, { ind: "Infants", text: "Continue as pentavalent at 6, 10, 14 weeks." }] }
});

V("pentavalent-vaccine", {
  inn: "Pentavalent vaccine (DTP-HepB-Hib)", atc: "J07CA11", cls: "Combined diphtheria, tetanus, whole-cell pertussis, hepatitis B and Hib vaccine",
  linked: [["Meningitis — children","Hib component [BT-EPI]","meningitis-child"],["Pneumonia — children","Hib component [BT-EPI]","pneumonia-child"]],
  forms: ["Injection 0.5 mL per dose, vial [BT-NEML]."],
  moa: "Toxoids (diphtheria, tetanus), inactivated pertussis, recombinant HBsAg and Hib conjugate [BT-EPI].",
  pk: ["Store at +2 to +8 °C; do not freeze [BT-EPI]."],
  ind: { adult: ["Not for adults [BT-EPI]."], paed: ["Infants: diphtheria, tetanus, pertussis, hepatitis B and Hib meningitis/pneumonia [BT-EPI]."] },
  adult: [["Adults", "Not used [BT-EPI]."]],
  paed: { tiers: ["6, 10 and 14 weeks: 0.5 mL IM, anterolateral mid-thigh (never the buttock) [BT-EPI].", "Missed doses: can be given up to 4 years of age, at least 4 weeks apart; never restart the series [BT-EPI]."], transition: "Not given from 5 years.", calcNote: "Fixed volume." },
  contra: ["Severe allergic reaction to a previous dose [UNVERIFIED-KNOWLEDGE].", "Encephalopathy within 7 days of a previous pertussis-containing dose [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Pain, redness, swelling; fever for 1–2 days [BT-EPI]."], serious: ["Persistent inconsolable crying, fever over 40.5 °C, convulsion, hypotonic-hyporesponsive episode, anaphylaxis (rare) [BT-EPI]"] },
  monitor: ["Report AEFI through the national AEFI system [BT-EPI].", "Dropout Penta1 → Penta3 is a national indicator [BT-NIS]."],
  local: BT("DPT-HepB-Hib 0.5 mL vial [BT-NEML].", "National schedule 6, 10, 14 weeks [BT-EPI]. PLANNED: switch to hexavalent (adds IPV) in 2026, with IPV withdrawn as a separate injection — implementation not confirmed [BT-NIS]."),
  compare: CMP([
    ["Primary series", "6, 10, 14 weeks [BT-EPI]", "3 doses from 6 weeks, at least 4 weeks apart, complete by 6 months if possible [WHO-GL]", "6, 10, 14 weeks [IN-UIP]", "Separate DTaP + Hib + HepB (or combinations) at 2, 4, 6 months [AAP]"],
    ["Booster", "DTP at 24 months; Td at about 6 and 13 years [BT-EPI]", "3 boosters: 12–23 months, 4–7 years, 9–15 years [WHO-GL]", "DPT 16–24 months and 5–6 years; Td 10 and 16 years [IN-UIP]", "DTaP 15–18 months and 4–6 years; Hib booster 12–15 months; Tdap 11–12 years [AAP]"],
    ["Pertussis type", "Whole-cell [BT-EPI]", "Whole-cell or acellular [WHO-GL]", "Whole-cell [UNVERIFIED-KNOWLEDGE]", "Acellular [AAP]"]
  ], "Bhutan gives one DTP-containing booster in the second year at 24 months, later than the WHO window (12–23 months) and India's (16–24 months)."),
  sources: [EPI, NIS, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "Infant 5-in-1 — 0.5 mL IM thigh at 6, 10 and 14 weeks; catch-up to 4 years.",
    adult: [{ ind: "Adults", text: "Not used." }],
    child: [{ ind: "Infants", text: "0.5 mL IM anterolateral thigh at 6, 10, 14 weeks." }, { ind: "Missed doses", text: "Up to 4 years, 4 weeks apart; continue, never restart." }] }
});

V("dtp-vaccine", {
  inn: "DTP vaccine (diphtheria, tetanus, pertussis)", atc: "J07AJ52", cls: "Diphtheria and tetanus toxoids with whole-cell pertussis",
  linked: [],
  forms: ["Suspension for injection 0.5 mL per dose, vial [BT-NEML]."],
  moa: "Purified diphtheria and tetanus toxoids with inactivated pertussis organisms [BT-EPI].",
  pk: ["Store at +2 to +8 °C; freezing damages the toxoids and heat damages pertussis [BT-EPI]."],
  ind: { adult: ["Not for adults — use Td [BT-EPI]."], paed: ["Booster at 24 months [BT-EPI]."] },
  adult: [["Adults", "Not used; Td instead [BT-EPI]."]],
  paed: { tiers: ["24 months: 0.5 mL IM, anterolateral mid-thigh [BT-EPI]."], transition: "From school age: Td.", calcNote: "Fixed volume." },
  contra: ["Severe allergic reaction to a previous dose [UNVERIFIED-KNOWLEDGE].", "Encephalopathy within 7 days of a previous pertussis-containing dose [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Pain, redness, swelling; fever for 1–2 days [BT-EPI]."], serious: ["Persistent crying, fever over 40.5 °C, convulsion, hypotonic-hyporesponsive episode, anaphylaxis (rare); abscess from poor technique [BT-EPI]"] },
  monitor: ["AEFI reporting [BT-EPI]."],
  local: BT("DPT 0.5 mL vial [BT-NEML]."),
  compare: CMP([
    ["Childhood boosters", "1 DTP booster at 24 months [BT-EPI]", "12–23 months and 4–7 years (third booster 9–15 years as Td) [WHO-GL]", "16–24 months and 5–6 years [IN-UIP]", "DTaP 15–18 months and 4–6 years [AAP]"],
    ["Dose and route", "0.5 mL IM thigh [BT-EPI]", "Age-appropriate formulation [WHO-GL]", "0.5 mL IM thigh (16–24 m); upper arm (5–6 y) [IN-UIP]", "DTaP IM [AAP]"]
  ], "Bhutan replaces the WHO 4–7-year DTP booster with Td at pre-primary (about 6 years)."),
  sources: [EPI, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "Second-year booster — 0.5 mL IM thigh at 24 months.",
    adult: [{ ind: "Adults", text: "Use Td." }],
    child: [{ ind: "24 months", text: "0.5 mL IM anterolateral thigh." }] }
});

V("td-vaccine", {
  inn: "Td vaccine (tetanus and reduced diphtheria)", atc: "J07AM51", cls: "Tetanus toxoid with reduced-dose diphtheria toxoid",
  linked: [],
  forms: ["Injection, 5 mL multi-dose vial (0.5 mL per dose) [BT-NEML] [BT-EPI]."],
  moa: "Small 'd' = reduced diphtheria antigen; capital 'T' = full tetanus component. Protects the newborn from tetanus when the mother is immunized [BT-EPI].",
  pk: ["Store at +2 to +8 °C; do not freeze [BT-EPI]."],
  ind: { adult: ["Pregnant women, by previous Td record [BT-EPI].", "Wound management (with immunoglobulin when indicated) [UNVERIFIED-KNOWLEDGE]."], paed: ["School boosters: pre-primary (PP) class and class seven; out of school at 6 and 13 years [BT-EPI]."] },
  adult: [["Pregnancy, no Td record", "Td1 as soon as possible; Td2 4 weeks later; Td3 6 months after Td2; Td4 1 year after Td3; Td5 1 year after Td4 — 0.5 mL IM left upper arm [BT-EPI]."], ["Pregnancy, partly vaccinated", "Continue from the next dose in the same sequence (e.g. after 1 prior dose: next dose as soon as possible, then 4 weeks, 6 months, 1 year, 1 year) [BT-EPI]."], ["Protection", "1 dose minimal; 2 valid doses about 3 years; 3 doses 5 years; 4 doses 10 years; 5 doses through the childbearing years [BT-EPI]."]],
  paed: { tiers: ["PP class (about 6 years) and class seven (about 13 years): 0.5 mL IM upper arm [BT-EPI].", "Unvaccinated child over 5 years: 2 doses of Td after completing MMR and IPV [BT-EPI]."], transition: "Same dose.", calcNote: "Fixed volume." },
  contra: ["Severe allergic reaction to a previous dose [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Mild pain, redness, warmth, swelling — more common in hyper-immunized people; fever, malaise, aches [BT-EPI]."], serious: ["Urticaria, anaphylaxis, brachial neuritis, Guillain–Barré syndrome (rare) [BT-EPI]"] },
  monitor: ["Record every dose on the woman's card — the count decides the next dose [BT-EPI]."],
  local: BT("Td 5 mL vial [BT-NEML]."),
  compare: CMP([
    ["Childhood / adolescent", "Td at about 6 years (PP) and 13 years (class 7) [BT-EPI]", "TTCV boosters to a total of 6 doses; last at 9–15 years [WHO-GL]", "Td at 10 and 16 years [IN-UIP]", "Tdap once at 11–12 years [AAP]"],
    ["Pregnancy", "Td by record, up to 5 doses (Td1 now, Td2 +4 weeks, then +6 months, +1 year, +1 year) [BT-EPI]", "Maternal immunization by TTCV history [WHO-GL]", "Td1 early, Td2 4 weeks later; one booster if vaccinated within the last 3 years [IN-UIP]", "Tdap in every pregnancy, preferably early in weeks 27–36 [AAP]"]
  ], "The US gives acellular pertussis (Tdap) in every pregnancy to protect the newborn from whooping cough; Bhutan and India give Td, which protects against tetanus only."),
  sources: [EPI, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "School boosters and pregnancy course — 0.5 mL IM upper arm; pregnant women by record, up to 5 doses.",
    adult: [{ ind: "Pregnancy, no record", text: "Td1 now, Td2 +4 weeks, Td3 +6 months, Td4 +1 year, Td5 +1 year." }, { ind: "Partly vaccinated", text: "Continue the sequence from the next dose." }],
    child: [{ ind: "School", text: "0.5 mL IM at PP class (~6 y) and class 7 (~13 y)." }] }
});

V("opv-bivalent", {
  inn: "Poliomyelitis vaccine, live oral (bOPV)", atc: "J07BF04", cls: "Live attenuated oral polio vaccine, types 1 and 3",
  linked: [],
  forms: ["Oral solution with dropper cap [BT-NEML]."],
  moa: "Live attenuated poliovirus types 1 and 3; 3 doses give immunity in over 95% of recipients [BT-EPI].",
  pk: ["Store at +2 to +8 °C or frozen at −15 to −20 °C; very heat-sensitive [BT-EPI]."],
  ind: { adult: ["Not routine [BT-EPI]."], paed: ["Infants: birth dose and 3 primary doses [BT-EPI]."] },
  adult: [["Adults", "Not routine [BT-EPI]."]],
  paed: { tiers: ["Birth (within 14 days), 6, 10 and 14 weeks: 2 drops by mouth [BT-EPI].", "Birth dose missed: give it at 9 months [BT-EPI].", "Can be given up to 5 years of age [BT-EPI]."], transition: "Not given from 5 years.", calcNote: "2 drops." },
  contra: ["Severe immunodeficiency in the child or household (use IPV) [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Usually none [BT-EPI]."], serious: ["Vaccine-associated paralytic poliomyelitis (rare) [BT-EPI]"] },
  monitor: ["Acute flaccid paralysis surveillance [UNVERIFIED-KNOWLEDGE]."],
  local: BT("bOPV oral solution with dropper [BT-NEML]."),
  compare: CMP([
    ["Schedule", "Birth (≤14 days), 6, 10, 14 weeks [BT-EPI]", "3 bOPV from 6 weeks, 4 weeks apart, plus 2 IPV (birth bOPV optional) [WHO-GL]", "Birth, 6, 10, 14 weeks + booster at 16–24 months [IN-UIP]", "No OPV — IPV only [AAP]"],
    ["Dose", "2 drops [BT-EPI]", "—", "2 drops [IN-UIP]", "—"]
  ]),
  sources: [EPI, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "2 oral drops at birth, 6, 10 and 14 weeks; up to 5 years.",
    adult: [{ ind: "Adults", text: "Not routine." }],
    child: [{ ind: "Infants", text: "2 drops at birth (≤14 days), 6, 10, 14 weeks." }] }
});

V("ipv-vaccine", {
  inn: "Poliomyelitis vaccine, inactivated (IPV)", atc: "J07BF03", cls: "Inactivated polio vaccine, types 1, 2 and 3",
  linked: [],
  forms: ["Injection 0.5 mL per dose, vial [BT-NEML]."],
  moa: "Formalin-inactivated wild poliovirus types 1, 2 and 3; 3 doses give immunity in over 95% [BT-EPI].",
  pk: ["Store at +2 to +8 °C; do not freeze [BT-EPI]."],
  ind: { adult: ["Not routine [BT-EPI]."], paed: ["Infants: 2 doses [BT-EPI]."] },
  adult: [["Adults", "Not routine [BT-EPI]."]],
  paed: { tiers: ["14 weeks and 8 months: 0.5 mL IM, anterolateral mid-thigh [BT-EPI].", "First dose missed at 14 weeks: give at the next visit; second dose 5 months later [BT-EPI].", "Give IPV first when several injections are due — it hurts least [BT-EPI]."], transition: "—", calcNote: "Fixed volume." },
  contra: ["Severe allergic reaction to a previous dose or trace antibiotics [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Redness and tenderness; induration, mild fever [BT-EPI]."], serious: ["Hypersensitivity to trace antibiotics (rare) [BT-EPI]"] },
  monitor: [],
  local: BT("IPV 0.5 mL vial [BT-NEML].", "PLANNED: IPV withdrawn as a separate injection when hexavalent replaces pentavalent (2026) — implementation not confirmed [BT-NIS]."),
  compare: CMP([
    ["Schedule", "14 weeks and 8 months [BT-EPI]", "2 IPV: first from 14 weeks (with DTP3), second at least 4 months later [WHO-GL]", "Fractional IPV at 6 and 14 weeks [IN-UIP]", "4 doses: 2, 4, 6–18 months, 4–6 years [AAP]"],
    ["Dose and route", "0.5 mL IM thigh [BT-EPI]", "Full dose IM or fractional ID [WHO-GL]", "0.1 mL ID, right upper arm [IN-UIP]", "IM [AAP]"]
  ]),
  sources: [EPI, NIS, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "Injected polio vaccine — 0.5 mL IM thigh at 14 weeks and 8 months.",
    adult: [{ ind: "Adults", text: "Not routine." }],
    child: [{ ind: "Infants", text: "0.5 mL IM thigh at 14 weeks and 8 months." }] }
});

V("pcv13-vaccine", {
  inn: "Pneumococcal conjugate vaccine, 13-valent (PCV13)", atc: "J07AL02", cls: "Pneumococcal polysaccharide–protein conjugate vaccine",
  linked: [["Pneumonia — children","Prevention [BT-EPI]","pneumonia-child"],["Meningitis — children","Prevention [BT-EPI]","meningitis-child"]],
  forms: ["Injection 0.5 mL per dose, vial [BT-NEML]."],
  moa: "Capsular polysaccharides of 13 Streptococcus pneumoniae serotypes conjugated to a carrier protein (killed vaccine) [BT-EPI].",
  pk: ["Store at +2 to +8 °C; heat and freezing damage it [BT-EPI]."],
  ind: { adult: ["Not routine now; PLANNED for people 65 and over [BT-NIS]."], paed: ["Infants: 3 doses [BT-EPI]."] },
  adult: [["Adults 65+", "Planned in the 2025–2029 strategy — not yet confirmed [BT-NIS]."]],
  paed: { tiers: ["6 weeks, 10 weeks and 9 months: 0.5 mL IM, anterolateral mid-thigh [BT-EPI].", "Minimum interval 4 weeks between doses 1 and 2, and 6 months between doses 2 and 3 [BT-EPI]."], transition: "—", calcNote: "Fixed volume." },
  contra: ["Severe allergic reaction to a previous dose [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Soreness at the site, transient fever (under 5%) [BT-EPI]."], serious: ["Severe reactions extremely rare [BT-EPI]"] },
  monitor: [],
  local: BT("PCV13 0.5 mL vial [BT-NEML]."),
  compare: CMP([
    ["Schedule", "2p+1: 6 weeks, 10 weeks, 9 months [BT-EPI]", "3p+0 (with DTP) or 2p+1 (booster 9–18 months) [WHO-GL]", "2p+1: 6 weeks, 14 weeks, booster 9–12 months [IN-UIP]", "4 doses: 2, 4, 6, 12–15 months (PCV15/PCV20) [AAP]"],
    ["Older adults", "Planned for 65+ [BT-NIS]", "Vaccination in older adults considered [WHO-GL]", "Not in UIP [IN-UIP]", "Adult schedule not covered here"]
  ], "Bhutan and India both use 2p+1 but space the primary doses differently (6+10 weeks vs 6+14 weeks)."),
  sources: [EPI, NIS, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "Infant pneumococcal vaccine — 0.5 mL IM thigh at 6 weeks, 10 weeks and 9 months.",
    adult: [{ ind: "65 years and over", text: "Planned (NIS 2025–2029), not yet routine." }],
    child: [{ ind: "Infants", text: "0.5 mL IM thigh at 6 weeks, 10 weeks, 9 months." }] }
});

V("mmr-vaccine", {
  inn: "Measles, mumps and rubella (MMR) vaccine", atc: "J07BD52", cls: "Live attenuated viral vaccine",
  linked: [["Measles — children","Prevention: MMR at 9 and 24 months [BT-EPI]","measles-child"]],
  forms: ["Freeze-dried powder 0.5 mL dose, vial, with diluent [BT-NEML] [BT-EPI]."],
  moa: "Live attenuated measles (Edmonston-Zagreb), mumps (L-Zagreb) and rubella (Wistar RA 27/3) viruses; lifelong immunity in 90–95% [BT-EPI].",
  pk: ["Store at +2 to +8 °C; protect from light; keep the diluent cool. Very heat-sensitive before and after reconstitution [BT-EPI]."],
  ind: { adult: ["Not routine for adults [BT-EPI]."], paed: ["2 doses in childhood [BT-EPI]."] },
  adult: [["Adults", "Not routine [BT-EPI]."]],
  paed: { tiers: ["MMR1 at 9 months and MMR2 at 24 months: 0.5 mL subcutaneous, left upper arm [BT-EPI].", "Unvaccinated child over 5 years: 2 doses at least 1 month apart [BT-EPI]."], transition: "—", calcNote: "Fixed volume." },
  adj: { preg: "Live vaccine — not given in pregnancy [UNVERIFIED-KNOWLEDGE].", immuno: "Avoid in severe immunodeficiency [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Pregnancy [UNVERIFIED-KNOWLEDGE].", "Severe immunodeficiency [UNVERIFIED-KNOWLEDGE].", "Anaphylaxis to a previous dose [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Redness, rash, fever over 38 °C [BT-EPI]."], serious: ["Febrile seizure [BT-EPI]", "Thrombocytopenia [BT-EPI]", "Anaphylaxis [BT-EPI]"] },
  monitor: ["Measles–rubella case surveillance [UNVERIFIED-KNOWLEDGE]."],
  local: BT("MMR 0.5 mL powder vial [BT-NEML]."),
  compare: CMP([
    ["Schedule", "9 months and 24 months [BT-EPI]", "MCV1 at 9 months where measles risk is high; MCV2 at 15–18 months; minimum gap 4 weeks [WHO-GL]", "MR (no mumps) at 9–12 and 16–24 months [IN-UIP]", "MMR at 12–15 months and 4–6 years [AAP]"],
    ["Dose and route", "0.5 mL SC left upper arm [BT-EPI]", "—", "0.5 mL SC right upper arm [IN-UIP]", "SC [AAP]"]
  ], "Bhutan's second dose at 24 months is later than WHO's 15–18 months; India gives MR, so Indian-vaccinated children have no mumps protection."),
  sources: [EPI, WHO, UIP, UIPV, AAP, NEML_SRC],
  dose: { tagline: "Live MMR — 0.5 mL SC left upper arm at 9 and 24 months.",
    adult: [{ ind: "Adults", text: "Not routine." }],
    child: [{ ind: "Children", text: "0.5 mL SC left upper arm at 9 months and 24 months." }] }
});

V("hpv-vaccine", {
  inn: "Human papillomavirus (HPV) vaccine, quadrivalent", atc: "J07BM01", cls: "Recombinant virus-like-particle vaccine (types 6, 11, 16, 18)",
  linked: [["Cervical cancer","Primary prevention [BT-EPI]","cervical-cancer-adult"]],
  forms: ["Injection vial [BT-NEML]."],
  moa: "Virus-like particles of HPV types 6, 11, 16 and 18 [BT-EPI].",
  pk: ["Store at +2 to +8 °C; do not freeze [BT-EPI]."],
  ind: { adult: ["Not routine for adults [BT-EPI]."], paed: ["Girls and boys in class six, and out-of-school girls and boys at 12 years [BT-EPI]."] },
  adult: [["15 years and older", "3 doses at 0, 2 and 6 months [BT-EPI]."]],
  paed: { tiers: ["Under 15 years: 2 doses, 0 and 6 months, IM upper arm [BT-EPI].", "PLANNED: single-dose schedule (switch in 2025) — confirm current national practice with the Vaccine Preventable Disease Program [BT-NIS]."], transition: "15 years: 3 doses.", calcNote: "Fixed volume." },
  contra: ["Severe allergic reaction to a previous dose [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Soreness, swelling, redness; fever, headache, muscle or joint aches for 1–2 days [BT-EPI]."], serious: ["Fainting after injection; life-threatening allergy (rare) [BT-EPI]"] },
  monitor: ["Seat the child for 15 minutes after the injection (fainting) [UNVERIFIED-KNOWLEDGE]."],
  local: BT("HPV vaccine vial [BT-NEML].", "School programme, gender-neutral (girls and boys) [BT-EPI]."),
  compare: CMP([
    ["Who", "Girls AND boys, class six / 12 years [BT-EPI]", "Primary target girls 9–14 years; boys only if feasible and affordable [WHO-GL]", "Girls aged 14 years (national launch 28 Feb 2026) [IN-UIP]", "All children; start at 9–12 years [AAP]"],
    ["Doses", "2 doses (0, 6 months) under 15 years; 3 doses from 15 years. Single dose PLANNED [BT-EPI] [BT-NIS]", "2 doses preferred (interval 6–12 months); single dose an off-label option at 9–20 years [WHO-GL]", "Single dose of quadrivalent vaccine [IN-UIP]", "2 doses (0, 6–12 months) if started at 9–14 years [AAP]"]
  ], "Bhutan vaccinates boys as well as girls. WHO (Dec 2025) still lists 2 doses as preferred and a single dose as an off-label alternative."),
  sources: [EPI, NIS, WHO, UIP, ["IN-UIP", "India launches nationwide HPV vaccination (single dose of quadrivalent Gardasil for 14-year-old girls) — Gavi VaccinesWork, 13 March 2026", "https://www.gavi.org/vaccineswork/india-home-25-worlds-cervical-cancer-victims-launches-nationwide-hpv-vaccination"], AAP, NEML_SRC],
  dose: { tagline: "School HPV vaccine for girls and boys — 2 doses (0, 6 months) under 15 years; single dose planned.",
    adult: [{ ind: "15 years and older", text: "3 doses: 0, 2, 6 months." }],
    child: [{ ind: "Class six / 12 years", text: "2 doses IM upper arm, 0 and 6 months (single dose planned)." }] }
});

V("rabies-vaccine", {
  inn: "Rabies vaccine, purified Vero cell (PVRV)", atc: "J07BG01", cls: "Inactivated cell-culture rabies vaccine",
  linked: [["Rabies and animal bites","PEP and PrEP [BT-RAB]","rabies-adult"]],
  forms: ["Injection 0.5 mL vial — for intradermal use only in Bhutan [BT-NEML].", "One ID dose = 0.1 mL per site; one IM dose = the whole vial [BT-RAB]."],
  moa: "Inactivated rabies virus grown in Vero cells, inducing neutralizing antibody [UNVERIFIED-KNOWLEDGE].",
  pk: ["Store at +2 to +8 °C [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Post-exposure prophylaxis (PEP) for category II and III exposures [BT-RAB].", "Pre-exposure prophylaxis (PrEP): rabies laboratory staff, veterinarians, animal handlers, dog catchers, wildlife and quarantine workers, travellers with poor access to PEP [BT-RAB]."], paed: ["Same as adults — dose does not change with age or weight [BT-RAB]."] },
  adult: [["PEP — intradermal (recommended)", "1-week, 2-site (IPC) regimen 2-2-2-0-0: 0.1 mL at 2 sites on days 0, 3 and 7 [BT-RAB]."], ["PEP — IM (only if ID impossible)", "1-1-1-1-0: whole vial on days 0, 3, 7 and day 14, 21 or 28 [BT-RAB]."], ["PrEP", "ID 0.1 mL at 2 sites on days 0 and 7; IM 1 site on days 0 and 7 if ID impossible [BT-RAB]."], ["Re-exposure after complete PrEP/PEP", "1 site ID or IM on days 0 and 3; no RIG [BT-RAB]."], ["Immunocompromised", "Full course; RIG for category II and III even if previously immunized [BT-RAB]."], ["Rules", "Deltoid in adults and children 2 years and over; anterolateral thigh under 2 years; never the buttock. Never inject less than 0.1 mL ID. Delayed dose: resume, do not restart [BT-RAB]."]],
  paed: { tiers: ["Same number of injections and dose per injection as adults [BT-RAB].", "Under 2 years: anterolateral thigh [BT-RAB]."], transition: "Same.", calcNote: "Fixed volume." },
  contra: ["No contraindication to PEP — rabies is fatal [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Local pain, redness, itching; mild fever, headache [UNVERIFIED-KNOWLEDGE]."], serious: ["Allergic reactions (rare) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Issue a PrEP/PEP vaccination card at every visit [BT-RAB].", "Wash the wound thoroughly with soap and water; suturing delayed, after RIG infiltration [BT-RAB]."],
  local: { neml: "Purified Vero cell rabies vaccine on the Bhutan NEML 2025 — for intradermal use only [BT-NEML].", strengths: "0.5 mL vial [BT-NEML].", stg: "National rabies guideline (3rd ed. 2023, rev. 2024): ID IPC regimen [BT-RAB]." },
  compare: CMP([
    ["PEP — intradermal", "2-2-2-0-0: 2 sites on days 0, 3, 7 (1 week) [BT-RAB]", "ID or IM accepted; 0.1 mL per ID dose [WHO-GL]", "Updated Thai Red Cross 2-2-2-0-2: 2 sites on days 0, 3, 7, 28 [IN-NRCP]", "Not in the routine schedule [AAP]"],
    ["PEP — intramuscular", "Days 0, 3, 7 and 14–28 [BT-RAB]", "IM 0.5 or 1.0 mL by product [WHO-GL]", "Essen: days 0, 3, 7, 14, 28 [IN-NRCP]", "—"],
    ["PrEP", "ID 2 sites days 0 and 7 [BT-RAB]", "2-site ID days 0 and 7; or 1-site IM days 0 and 7 [WHO-GL]", "Days 0, 7, 21/28 [IN-NRCP]", "—"]
  ], "Bhutan uses the shortest WHO-endorsed course (1 week, 3 visits). India's national guideline still adds a day-28 visit."),
  sources: [RAB, WHO, ["IN-NRCP", "National Guidelines on Rabies Prophylaxis — National Rabies Control Programme, NCDC, India", ""], NEML_SRC],
  dose: { tagline: "Rabies vaccine — ID 0.1 mL at 2 sites on days 0, 3, 7 after category II/III exposure; same dose at every age.",
    adult: [{ ind: "PEP (ID, recommended)", text: "0.1 mL ×2 sites on days 0, 3, 7." }, { ind: "PEP (IM, only if ID impossible)", text: "Whole vial on days 0, 3, 7, 14–28." }, { ind: "PrEP", text: "0.1 mL ×2 sites ID on days 0 and 7." }, { ind: "Re-exposure, previously complete", text: "1 site on days 0 and 3; no RIG." }],
    child: [{ ind: "All ages", text: "Same as adults; thigh under 2 years." }] }
});

V("influenza-vaccine", {
  inn: "Seasonal influenza vaccine (inactivated)", atc: "J07BB02", cls: "Inactivated influenza vaccine",
  linked: [["Pneumonia — adults","Prevention in high-risk groups [BT-EPI]","pneumonia-adult"]],
  forms: ["Injection — product and volume per the season's supply [BT-EPI]."],
  moa: "Inactivated influenza virus antigens matched to the season's recommended strains [UNVERIFIED-KNOWLEDGE].",
  pk: ["Store at +2 to +8 °C [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["High-risk groups: pregnant women, health workers, people with heart, lung, liver or kidney disease, cancer, active pulmonary TB, diabetes on medication or HIV, and people 65 years and over [BT-EPI]."], paed: ["Children 6 to under 24 months; 2–8 years with an existing medical condition [BT-EPI]."] },
  adult: [["High-risk adults", "1 dose each season [BT-EPI]."]],
  paed: { tiers: ["6 to under 24 months: 0.25 mL [BT-EPI].", "2 to under 3 years with a medical condition: 0.3 mL as printed in the EPI manual — confirm with the product insert [BT-EPI].", "3–8 years with a medical condition: 0.5 mL [BT-EPI].", "Children: 2 doses 4 weeks apart in the first season; 1 dose if vaccinated before [BT-EPI]."], transition: "9 years: 1 dose.", calcNote: "Volume by age and product." },
  contra: ["Severe allergic reaction to a previous dose [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Sore arm, mild fever, aches [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis (rare) [UNVERIFIED-KNOWLEDGE]"] },
  monitor: [],
  local: { neml: "Not listed in NEML 2025 section 18.2; supplied through the EPI programme [BT-NEML] [BT-EPI].", strengths: "Seasonal supply [BT-EPI].", stg: "High-risk groups per the EPI manual [BT-EPI]." },
  compare: CMP([
    ["Who", "High-risk groups: pregnant women, health workers, chronic disease, 65+, children 6–23 months [BT-EPI]", "Consider: health workers, comorbidities, older adults, pregnant women [WHO-GL]", "Not in UIP [IN-UIP]", "Everyone 6 months and older, every year [AAP]"],
    ["Children, first season", "2 doses 4 weeks apart [BT-EPI]", "—", "—", "6 months–8 years: 2 doses at least 4 weeks apart if fewer than 2 previous doses [AAP]"]
  ]),
  sources: [EPI, WHO, UIP, AAP, NEML_SRC],
  dose: { tagline: "Seasonal flu shot for high-risk groups — 1 dose yearly; young children 2 doses 4 weeks apart the first time.",
    adult: [{ ind: "High-risk adults, pregnant women", text: "1 dose each season." }],
    child: [{ ind: "6–23 months", text: "0.25 mL; 2 doses 4 weeks apart the first season." }, { ind: "3–8 years with a medical condition", text: "0.5 mL; 2 doses the first season." }] }
});
})();
