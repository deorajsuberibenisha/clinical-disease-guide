/* Immunisation schedule — Bhutan vs WHO, India and USA (owner request 26 Nov 2026: "add all Bhutan vaccine with international comparison").
   Sources read directly: EPI Manual for Health Staff 6th ed. 2022 (Table 2–5, FAQ), National Immunization Strategy 2025–2029, NEML 2025 §18.2,
   National rabies guideline 3rd ed. 2023 rev. 2024, WHO Table 1 (Dec 2025), India PIB 17 Mar 2026 + NHM vaccine-wise schedule, Gavi 13 Mar 2026 (India HPV),
   AAP 2026 schedule. Texts in _work/research/vaccines/. Vaccine monographs: js/fdb-vax.js (#/fdb/<id>). */
(function () {
const V = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "immunisation-schedule",
title: "Immunisation Schedule — Bhutan and the World",
subtitle: "Every vaccine in Bhutan's programme, side by side with WHO, India and the USA: what to give, when, how much, and how to catch up a child who is behind",
age: "All ages", specs: ["paeds", "ph", "obg", "id"],
keywords: ["immunisation", "immunization", "vaccine", "vaccination schedule", "EPI", "UIP", "catch-up", "BCG", "pentavalent", "hexavalent", "OPV", "IPV", "PCV", "MMR", "measles", "HPV", "Td", "tetanus", "pregnancy", "rabies", "influenza", "hepatitis B birth dose", "AEFI", "cold chain"],
related: ["measles-child", "tb-child", "hepatitis-child", "pneumonia-child", "meningitis-child", "rabies-adult", "cervical-cancer-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Bhutan's routine schedule protects against twelve diseases — tuberculosis, hepatitis B, diphtheria, tetanus, pertussis, Hib, polio, pneumococcus, measles, mumps, rubella and HPV — with a small number of visits — birth, 6, 10 and 14 weeks, 8–9 months and 24 months — then boosters at school. It is close to WHO's advice, with a few deliberate differences worth knowing when a child arrives from India or abroad.</p>
<div class="glance">
<div><h4>Birth</h4><p>${V("bcg-vaccine", "BCG")} 0.05 mL ID right arm, ${V("hepatitis-b-vaccine", "hepatitis B")} within 24 h, ${V("opv-bivalent", "bOPV-0")} within 14 days.</p></div>
<div><h4>6 · 10 · 14 weeks</h4><p>${V("pentavalent-vaccine", "Pentavalent")} ×3, bOPV ×3, ${V("pcv13-vaccine", "PCV")} at 6 and 10 weeks, ${V("ipv-vaccine", "IPV")} at 14 weeks.</p></div>
<div><h4>8–9 months</h4><p>IPV-2 at 8 months; ${V("mmr-vaccine", "MMR-1")} and PCV-3 at 9 months.</p></div>
<div><h4>24 months → school</h4><p>MMR-2 and ${V("dtp-vaccine", "DTP booster")} at 24 months; ${V("td-vaccine", "Td")} at PP class and class 7; ${V("hpv-vaccine", "HPV")} in class 6 (girls and boys).</p></div>
</div>
${box("bt", "Bhutan note", `<p>The national schedule is in the EPI Manual for Health Staff (6th edition, 2022). The National Immunization Strategy 2025–2029 plans three changes: hexavalent vaccine replacing pentavalent in 2026 (IPV then withdrawn as a separate injection), a single-dose HPV schedule, and PCV for people aged 65 and over. We found no published confirmation that any of these has started — check with the Vaccine Preventable Disease Program before changing practice. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "The whole schedule, side by side", html: `
<p>Read across a row to see how the same disease is handled in four programmes. Bhutan's column is what you give. The other columns explain records from children vaccinated elsewhere, and show where Bhutan has chosen differently.</p>
${tbl(["Age", "Bhutan (EPI 2022)", "WHO (Dec 2025)", "India UIP (2026)", "USA (AAP 2026)"], [
["Birth", "BCG, HepB (≤24 h), bOPV-0 (≤14 days)", "BCG, HepB birth dose; bOPV birth dose optional", "BCG, OPV-0, HepB birth dose", "HepB (≤24 h if ≥2,000 g)"],
["6 weeks", "Penta-1, bOPV-1, PCV-1", "DTP-1 (+HepB, Hib), bOPV-1, PCV-1, rotavirus", "Penta-1, OPV-1, RVV-1, fIPV-1, PCV-1", "(2 months) DTaP, Hib, IPV, PCV, rotavirus, HepB-2 at 1–2 months"],
["10 weeks", "Penta-2, bOPV-2, PCV-2", "DTP-2, bOPV-2, PCV-2", "Penta-2, OPV-2, RVV-2", "(4 months) DTaP, Hib, IPV, PCV, rotavirus"],
["14 weeks", "Penta-3, bOPV-3, IPV-1", "DTP-3, bOPV-3, IPV-1 (with DTP-3), PCV-3 if 3p+0", "Penta-3, OPV-3, fIPV-2, RVV-3, PCV-2", "(6 months) DTaP, Hib, PCV, rotavirus; IPV-3 and HepB-3 at 6–18 months"],
["8 months", "IPV-2", "IPV-2 at least 4 months after IPV-1", "—", "—"],
["9 months", "MMR-1, PCV-3", "MCV-1 (high-transmission settings); PCV booster if 2p+1", "MR-1, PCV booster, JE-1 (endemic districts)", "(12–15 months) MMR-1, varicella, Hib and PCV boosters, HepA"],
["Second year", "MMR-2 and DTP booster at 24 months", "MCV-2 at 15–18 months; DTP booster 12–23 months", "MR-2, DPT booster-1, OPV booster, JE-2 at 16–24 months", "DTaP-4 at 15–18 months"],
["School age", "Td at PP class (~6 y) and class 7 (~13 y)", "Boosters 4–7 years and 9–15 years", "DPT booster-2 at 5–6 y; Td at 10 and 16 y", "DTaP-5, IPV-4, MMR-2 at 4–6 y; Tdap at 11–12 y"],
["Adolescents", "HPV, class 6 / 12 years, girls and boys", "HPV girls 9–14 (boys if affordable)", "HPV single dose, girls 14 y (since Feb 2026)", "HPV from 9–12 y; MenACWY"],
["Pregnancy", "Td by record (up to 5 doses); influenza", "TTCV by history; influenza; RSV options", "Td-1, Td-2 or one booster", "Tdap every pregnancy (27–36 weeks); influenza; RSV seasonal"]
])}
<p>Bhutan has no rotavirus, Japanese encephalitis, varicella or hepatitis A vaccine in the routine programme. A child vaccinated in India may already have these, and that is fine — nothing needs repeating.</p>
` },
{ id: "patho", title: "Why the schedule looks like this", html: `
<p>Each age in the schedule answers a biological question. How early can the infant respond to the vaccine? When does the mother's protective antibody fade? And when does the disease kill the most children?</p>
${tbl(["Principle", "What it means at the bedside", "Example in Bhutan's schedule"], [
["Disease strikes early", "Give the vaccine before the age of greatest danger", "HepB within 24 h stops mother-to-child transmission; pertussis kills young infants, so DTP starts at 6 weeks"],
["Maternal antibody blocks live vaccines", "Live measles vaccine works better as the mother's antibody wanes", "MMR at 9 months, not earlier; second dose catches the 5–10% who did not respond"],
["Primary series then booster", "Three spaced doses build memory; a booster years later restores falling antibody", "Penta at 6, 10, 14 weeks; DTP at 24 months; Td at about 6 and 13 years"],
["Minimum intervals", "Doses closer than 4 weeks may not count", "Penta, bOPV, PCV-1 → PCV-2: at least 4 weeks apart"],
["Never restart", "Immune memory persists — a late dose still counts", "Continue from the missed dose; do not begin again " + r(1)]
])}
${F.chart("Mother-to-child hepatitis B", [F.s("Exposure at delivery"), F.a, F.d("Vaccine within 24 hours?"), F.a, F.b([["Yes", F.ok("Most infections prevented")], ["No", F.e("Up to 90% of infected newborns become chronic carriers")]])])}
<p>The 90% figure is the commonly quoted risk of chronic infection after perinatal hepatitis B; it is the reason WHO and Bhutan both make the birth dose a priority indicator ${LB.exp()}.</p>
` },
{ id: "conflicts", title: "Where programmes differ — and what Bhutan does", html: `
${tbl(["Topic", "Bhutan", "WHO", "India", "USA", "Why they differ / this guide"], [
["Second measles dose", "24 months", "15–18 months", "16–24 months (MR)", "4–6 years", "Bhutan follows its EPI manual. WHO's earlier MCV-2 closes the immunity gap sooner; Bhutan's high MCV coverage and verified measles elimination (2017) make 24 months workable. Follow Bhutan."],
["Mumps", "MMR (protects)", "Mumps vaccine optional", "MR — no mumps", "MMR", "India uses MR, so an Indian-vaccinated child has no mumps protection; Bhutan's MMR doses still count for measles and rubella."],
["IPV", "2 full doses IM (14 weeks, 8 months)", "2 doses, full IM or fractional ID", "2 fractional 0.1 mL ID (6, 14 weeks)", "4 doses IM", "All acceptable; fractional ID saves vaccine. Bhutan's planned hexavalent will carry IPV."],
["PCV", "2p+1: 6 w, 10 w, 9 m", "3p+0 or 2p+1", "2p+1: 6 w, 14 w, 9–12 m", "3p+1", "Different spacing; doses given elsewhere count if at least 4 weeks apart."],
["HPV", "Girls and boys; 2 doses under 15 (single dose planned)", "2 doses preferred; single dose off-label option 9–20 y", "Single dose, girls 14 y", "2 doses if started 9–14 y", "WHO still prefers 2 doses but allows 1. Bhutan's EPI manual says 2; the 2025–2029 strategy plans 1 — follow the current VPDP instruction."],
["Pertussis in pregnancy", "Td only", "TTCV", "Td only", "Tdap each pregnancy", "Tdap protects newborns from whooping cough; it is not supplied in Bhutan."],
["Rabies PEP (ID)", "2-2-2-0-0, days 0, 3, 7", "ID or IM; 1-week regimens accepted", "2-2-2-0-2, days 0, 3, 7, 28", "IM (not covered here)", "Bhutan uses the shortest WHO-endorsed course; India still adds day 28."],
["BCG arm", "Right upper arm", "—", "Left upper arm", "Not given", "Look at both arms before deciding a child has no BCG scar."]
])}
${box("bt", "Bhutan adaptation", `<p>When a child arrives with a foreign card, count every documented dose that respected the minimum age and interval, then continue on Bhutan's schedule. ${LB.loc()}</p>`)}
` },
{ id: "presentation", title: "At the clinic: who needs what today", html: `
<p>Every contact is a chance to vaccinate. Ask for the card, check the age, and give everything that is due at the same visit — at different sites with separate syringes. Giving BCG, pentavalent, bOPV and MMR (with vitamin A) together to a never-vaccinated 9-month-old is safe and effective ${r(1)}.</p>
<h3>The typical patient</h3>
<p>A 10-month-old girl comes for a cough. Her card shows BCG, hepatitis B and bOPV-0 at birth, then Penta-1, bOPV-1 and PCV-1 at 6 weeks — nothing since. Do not start again. <b>Today:</b> Penta-2, bOPV-2, PCV-2, IPV-1 and MMR-1, at separate sites. <b>In 4 weeks:</b> Penta-3 and bOPV-3. <b>6 months after PCV-2:</b> PCV-3 (the minimum interval in Bhutan's table). <b>5 months after IPV-1:</b> IPV-2. <b>At 24 months:</b> MMR-2 and DTP booster ${r(1)}.</p>
${tbl(["Situation", "What to give"], [
["Missed birth dose of bOPV", "Give it at 9 months [BT-EPI]"],
["BCG not given at birth", "Any time up to 2 years; 0.1 mL after the first birthday [BT-EPI]"],
["No BCG scar but documented", "Do not repeat [BT-EPI]"],
["Missed pentavalent", "Up to 4 years, 4 weeks apart [BT-EPI]"],
["Missed IPV at 14 weeks", "Next visit, then the second dose 5 months later [BT-EPI]"],
["Never vaccinated, 1–4 years", "All childhood vaccines except BCG from 2 years [BT-EPI]"],
["Never vaccinated, over 5 years", "bOPV ×2, IPV ×2, MMR ×2 (at least 1 month apart), then Td ×2 [BT-EPI]"]
].map(r => [r[0], r[1].replace(/ \[BT-EPI\]/, "")]))}
` },
{ id: "ddx", title: "Is it really a reason not to vaccinate?", html: `
<p>Most "contraindications" heard at clinics are not real. Missed vaccines cost far more lives than true reactions.</p>
${tbl(["Often wrongly thought to be a contraindication", "Truth"], [
["Mild illness, cold, low-grade fever, diarrhoea", "Vaccinate " + LB.exp()],
["On antibiotics", "Vaccinate " + LB.exp()],
["Malnutrition", "Vaccinate — malnourished children need protection most " + LB.exp()],
["Premature or low birth weight", "Vaccinate at the usual chronological age; hepatitis B as soon as possible after birth " + r(6)],
["Breastfeeding", "Vaccinate; breastfeeding after the injection eases pain " + r(1)],
["Late for the schedule", "Continue; never restart " + r(1)]
])}
${tbl(["Real reasons to hold or change a vaccine", "Action"], [
["Anaphylaxis after a previous dose of that vaccine", "Do not repeat that vaccine; refer"],
["Severe immunodeficiency", "Avoid live vaccines (BCG, bOPV, MMR); give IPV for polio"],
["Pregnancy", "No MMR; Td and influenza are recommended"],
["Encephalopathy within 7 days of a pertussis dose", "No further pertussis-containing vaccine; use DT/Td"]
])}
<p>The four lines above are standard immunisation practice; Bhutan's EPI manual does not list contraindications in detail, so treat them as expert guidance ${LB.exp()}.</p>
` },
{ id: "invest", title: "Checking the record", html: `
<ul>
<li>Read the card: vaccine, date, batch. A dose counts if it was given at or after the minimum age and at least the minimum interval after the previous dose.</li>
<li>No card and unsure history: it is safe to vaccinate again — an extra dose does no harm, while a missing dose leaves the child exposed ${LB.exp()}.</li>
<li>BCG: look for the scar on the right (Bhutan) and left (India) upper arm. A documented dose without a scar is not repeated ${r(1)}.</li>
<li>Pregnant women: count previous Td/TT doses — the count decides the next dose (see Populations) ${r(1)}.</li>
</ul>` },
{ id: "staging", title: "Protection from tetanus by number of Td doses", html: `
${tbl(["Valid Td doses", "Expected protection (Bhutan EPI)"], [["1", "Minimal"], ["2", "About 3 years"], ["3", "About 5 years"], ["4", "About 10 years"], ["5", "Through the childbearing years"]])}
<p>This is why pregnant women without a record get five doses over about 2½ years, not one ${r(1)}.</p>` },
{ id: "manage", title: "Giving vaccines well", html: `
<h3>Sites and routes in Bhutan</h3>
${tbl(["Vaccine", "Dose", "Route", "Site"], [
[V("bcg-vaccine", "BCG"), "0.05 mL (0.1 mL after 1 year)", "Intradermal", "Right upper arm"],
[V("hepatitis-b-vaccine", "Hepatitis B (birth)"), "0.5 mL", "IM", "Anterolateral mid-thigh"],
[V("pentavalent-vaccine", "Pentavalent"), "0.5 mL", "IM", "Anterolateral mid-thigh — never the buttock"],
[V("ipv-vaccine", "IPV"), "0.5 mL", "IM", "Anterolateral mid-thigh"],
[V("opv-bivalent", "bOPV"), "2 drops", "Oral", "—"],
[V("pcv13-vaccine", "PCV13"), "0.5 mL", "IM", "Anterolateral mid-thigh"],
[V("mmr-vaccine", "MMR"), "0.5 mL", "Subcutaneous", "Left upper arm"],
[V("dtp-vaccine", "DTP booster"), "0.5 mL", "IM", "Anterolateral mid-thigh"],
[V("td-vaccine", "Td"), "0.5 mL", "IM", "Upper arm"],
[V("hpv-vaccine", "HPV"), "per product", "IM", "Upper arm"],
[V("hepatitis-b-vaccine", "Hepatitis B (adult)"), "1.0 mL at 0, 1, 6 months", "IM", "Upper arm"]
])}
<h3>Less pain, fewer tears</h3>
<ol><li>Breastfeed after the injection.</li><li>Hold the child securely in the carer's lap.</li><li>Stroke or press the skin near the site before and during — not after — the injection.</li><li>Give the least painful vaccine (IPV) first.</li><li>IM: stretch the skin, 90° angle, quick smooth entry, slow push.</li></ol>
<p>All from the EPI manual ${r(1)}.</p>
<h3>Cold chain</h3>
<p>Store at +2 to +8 °C. Most heat-sensitive: reconstituted BCG, bOPV, IPV and measles vaccine; least: pentavalent and hepatitis B. Freezing ruins DTP, Td, PCV, IPV, HPV, pentavalent and hepatitis B; it does not harm BCG or MMR powder. Use only the manufacturer's diluent, cooled with the vaccine ${r(1)}.</p>
` },
{ id: "drugs", title: "Vaccine monographs", html: `
<p>Each vaccine has its own page with dose card, Bhutan details and a four-way comparison table:</p>
<ul>
<li>${V("bcg-vaccine", "BCG")} · ${V("hepatitis-b-vaccine", "Hepatitis B")} · ${V("pentavalent-vaccine", "Pentavalent (DTP-HepB-Hib)")} · ${V("dtp-vaccine", "DTP booster")} · ${V("td-vaccine", "Td")}</li>
<li>${V("opv-bivalent", "bOPV")} · ${V("ipv-vaccine", "IPV")} · ${V("pcv13-vaccine", "PCV13")} · ${V("mmr-vaccine", "MMR")} · ${V("hpv-vaccine", "HPV")}</li>
<li>${V("rabies-vaccine", "Rabies (PVRV, intradermal)")} · ${V("influenza-vaccine", "Seasonal influenza")}</li>
</ul>
<p>All twelve except influenza are on the Bhutan NEML 2025 (section 18.2); influenza is supplied through the programme ${r(1, 3)}.</p>` },
{ id: "populations", title: "Special groups", html: `
<h3>Pregnant women — Td</h3>
${tbl(["Previous Td doses", "What to give (0.5 mL IM left upper arm)"], [
["None / no record", "Td1 now; Td2 4 weeks later; Td3 6 months after Td2; Td4 1 year later; Td5 1 year later"],
["1", "Next dose now, then 4 weeks, 6 months, 1 year, 1 year — up to Td5"],
["2 or more", "Continue the same sequence from the next dose; stop at 5 (6 where the table allows)"]
])}
<p>Bhutan's Table 5 sets out each starting point in detail; use it with the woman's card ${r(1)}. India gives Td-1 and Td-2 four weeks apart, or a single booster if she had Td within the last 3 years ${r(5)}. The USA gives Tdap in every pregnancy ${r(7)}.</p>
<h3>Influenza — high-risk groups</h3>
<p>Pregnant women, health workers, people with heart, lung, liver or kidney disease, cancer, active pulmonary TB, diabetes on treatment or HIV, people 65 and over, and children 6–23 months: one dose each season. Children under 9 receive two doses 4 weeks apart in their first season. Child volumes in the EPI manual: 0.25 mL at 6–23 months, 0.5 mL at 3–8 years; the manual prints 0.3 mL for 2 to under 3 years — check the product insert, as most products use 0.25 or 0.5 mL ${r(1)} ${LB.exp()}.</p>
<h3>Animal bites and high-risk workers — rabies</h3>
<p>Category II and III exposures: ${V("rabies-vaccine", "PVRV")} 0.1 mL intradermally at 2 sites on days 0, 3 and 7, with rabies immunoglobulin when indicated. PrEP for laboratory and animal workers: 2 sites on days 0 and 7. Same dose for every age ${r(4)}.</p>
<h3>Older adults</h3>
<p>PCV for people 65 and over is planned in the 2025–2029 strategy, not yet routine ${r(2)}.</p>
` },
{ id: "scenarios", title: "Clinical scenarios", html: `
${tbl(["Scenario", "What to do"], [
["Newborn discharged before the HepB dose", "Give hepatitis B as soon as possible; within 24 hours matters most for babies of HBsAg-positive mothers"],
["Child moved from India at 18 months with MR ×1, fIPV ×2, Penta ×3, OPV ×3, PCV ×3", "Pentavalent, polio and PCV series are complete (WHO accepts fractional IPV). MR-1 counts as the first measles–rubella dose; give MMR at 24 months as Bhutan's MMR-2 — it also starts mumps protection. DTP booster at 24 months, then Td at school " + LB.loc()],
["Class 6 boy brought for HPV", "Vaccinate — Bhutan's programme is gender-neutral"],
["16-year-old girl never had HPV", "3 doses at 0, 2 and 6 months under the current EPI manual"],
["Pregnant woman with 2 previous Td doses", "Next dose now, then continue the sequence"],
["Dog bite through the skin, vaccinated 2 years ago with full PEP", "Wound care; 1 site on days 0 and 3; no RIG"]
])}` },
{ id: "complications", title: "Adverse events following immunisation (AEFI)", html: `
${tbl(["Vaccine", "Expected, mild", "Rare, serious"], [
["BCG", "Papule, small ulcer, scar", "Axillary lymph-node swelling, abscess"],
["bOPV", "Usually none", "Vaccine-associated paralytic polio"],
["IPV", "Redness, tenderness, mild fever", "Hypersensitivity to trace antibiotics"],
["Pentavalent / DTP", "Pain, swelling, fever 1–2 days", "Inconsolable crying, fever >40.5 °C, convulsion, hypotonic-hyporesponsive episode, anaphylaxis"],
["PCV", "Soreness, fever (<5%)", "Extremely rare"],
["MMR", "Rash, fever >38 °C", "Febrile seizure, thrombocytopenia, anaphylaxis"],
["Td", "Local pain and swelling (more after many doses)", "Brachial neuritis, GBS, anaphylaxis"],
["HPV", "Sore arm, headache", "Fainting, anaphylaxis"]
])}
<p>All from Bhutan's EPI manual. Report every serious event through the national AEFI surveillance system ${r(1)}.</p>` },
{ id: "followup", title: "Follow-up and record keeping", html: `<ul><li>Write the next date on the card before the family leaves; reminders keep children on schedule.</li><li>Defaulter tracing at every outreach session.</li><li>Pregnant women: record the Td dose number, not only the date.</li><li>Rabies: issue a PrEP/PEP card at every visit ${r(4)}.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "BCG scar", src: "images/bcg-scar.jpg", mod: "Clinical photograph", ctx: "Healed BCG vaccination site", loc: "Upper arm", find: "Small depressed round scar", signs: "BCG scar", interp: "Evidence of past BCG; a documented dose without a scar is not repeated in Bhutan", by: "Gzzz", page: "https://commons.wikimedia.org/wiki/File:Bacillus_Calmette-Gu%C3%A9rin_scar.JPG", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart — a child who is behind", html: `${F.chart("Child with missed vaccines", [F.s("Read the card; note each valid dose"), F.a, F.d("Age 5 years or more?"), F.a, F.b([["No", F.ok("Continue each series from the missed dose; give all due vaccines today; BCG only if under 2 years")], ["Yes", F.e("bOPV ×2, IPV ×2, MMR ×2 (≥1 month apart), then Td ×2")]]), F.a, F.s("Book the next visit at the minimum interval")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Restarting a series", "Wastes doses, delays protection", "Continue from the missed dose"],
["Postponing for a cold", "Missed opportunity", "Vaccinate"],
["Pentavalent in the buttock", "Sciatic nerve injury; poor response in fat", "Anterolateral mid-thigh"],
["Freezing pentavalent, Td or PCV", "Vaccine destroyed", "Never against the ice packs"],
["Assuming an Indian MR protects from mumps", "MR has no mumps component", "Give MMR"],
["Giving MMR in pregnancy", "Live vaccine", "Defer until after delivery"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "A 9-month-old never vaccinated: which vaccines today?", "All due: BCG (under 2 years), Penta-1, bOPV, PCV-1, IPV-1 and MMR-1 with vitamin A — separate sites, same visit; the next doses follow at the minimum intervals.")}
${qa("Intern/MO", "BCG volume for a 15-month-old?", "0.1 mL intradermal (0.05 mL under 1 year); not given from 2 years.")}
${qa("Intern/MO", "Minimum interval between PCV-2 and PCV-3 in Bhutan?", "6 months.")}
${qa("Specialist", "Why does India's schedule give fIPV at 6 weeks while Bhutan gives full-dose IPV at 14 weeks?", "Fractional intradermal IPV (0.1 mL) saves vaccine; WHO accepts both. Bhutan follows WHO's preferred timing of IPV-1 at 14 weeks with DTP-3.")}
${qa("Specialist", "Where does WHO stand on single-dose HPV (Dec 2025)?", "Two doses preferred; a single dose is an off-label alternative for girls and boys aged 9–20.")}
${qa("Specialist", "Bhutan rabies PEP regimen?", "Intradermal 0.1 mL at 2 sites on days 0, 3 and 7 (2-2-2-0-0); IM only if ID is impossible: days 0, 3, 7 and 14–28.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Vaccine Preventable Disease Program, Ministry of Health, Bhutan. Expanded Programme on Immunization (EPI) Manual for Health Staff, 6th edition, 2022. <a href="https://moh.gov.bt/wp-content/uploads/2025/01/Revised-EPI-Manual.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
<li id="ref-2">Ministry of Health, Bhutan. National Immunization Strategy 2025–2029; National Immunization Policy and Strategic Guidelines. <a href="https://moh.gov.bt/wp-content/uploads/2025/01/Final-Bhutan-National-Immunization-Policy-and-Strategic-Guidelines.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025, section 18.2 Vaccines.</li>
<li id="ref-4">Zoonotic Disease Control Unit, Ministry of Health, Bhutan. National guidelines for management of rabies and anti-rabies prophylaxis, 3rd edition 2023, revised 2024.</li>
<li id="ref-5">Press Information Bureau, Government of India. Celebrating the Power of Vaccines (UIP schedule), 17 March 2026. <a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/mar/doc2026320830601.pdf" target="_blank" rel="noopener">pib.gov.in</a>; National Health Mission. National Immunization Schedule (vaccine-wise). <a href="https://nhm.gov.in/New_Updates_2018/NHM_Components/Immunization/report/National_%20Immunization_Schedule.pdf" target="_blank" rel="noopener">nhm.gov.in</a>; Gavi VaccinesWork, 13 March 2026 (India HPV single dose). <a href="https://www.gavi.org/vaccineswork/india-home-25-worlds-cervical-cancer-victims-launches-nationwide-hpv-vaccination" target="_blank" rel="noopener">gavi.org</a></li>
<li id="ref-6">World Health Organization. Table 1: Summary of WHO position papers — recommendations for routine immunization, updated December 2025. <a href="https://www.who.int/publications/m/item/table1-summary-of-who-position-papers-recommendations-for-routine-immunization" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-7">American Academy of Pediatrics. Recommended Child and Adolescent Immunization Schedule, United States, 2026.</li>
<li id="ref-8">National Rabies Control Programme, India. National Guidelines on Rabies Prophylaxis.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan schedule, doses, routes, sites", "<span class='pass'>Checked</span>", "EPI Manual 2022 Table 2–5 read directly"],
["NIS 2025–2029 changes", "<span class='pass'>Checked</span>", "Shown as planned; implementation not confirmed by any published source (26 Nov 2026)"],
["WHO", "<span class='pass'>Checked</span>", "Table 1, December 2025"],
["India", "<span class='pass'>Checked</span>", "PIB 17 Mar 2026; NHM vaccine-wise table (undated) for dose/route/site; HPV from Gavi 13 Mar 2026"],
["USA", "<span class='pass'>Checked</span>", "AAP 2026 schedule (multi-society). The CDC schedule may differ and was not reviewed"],
["Contraindications", "Expert guidance", "Not listed in Bhutan's EPI manual; standard practice"],
["Influenza 0.3 mL dose (2–3 years)", "Flag", "As printed in the EPI manual; confirm with the product insert"]
], "qc")}` }
]
});
})();
