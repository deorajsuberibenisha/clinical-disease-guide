/* HIV infection — adults and adolescents
   Sources: Bhutan National Guidelines on Treatment and Management of HIV & AIDS 2024 (read in full: ch. I–XIII);
   Bhutan MoH news release Nov 2021 (epidemiology); WHO consolidated HIV guidelines 2021; WHO advanced HIV disease package. */
registerPage({
id: "hiv-adult",
title: "HIV Infection and ART — Adults and Adolescents",
subtitle: "Test widely and confidentially, start TLD within days for everyone, recognise and manage advanced HIV disease (TB, cryptococcus, PCP), give the right prophylaxis, monitor viral load, act on treatment failure, and prevent transmission with U=U, PrEP and PEP",
age: "Adults and adolescents", specs: ["id", "medicine"],
keywords: ["HIV", "AIDS", "antiretroviral therapy", "ART", "TLD", "dolutegravir", "tenofovir", "lamivudine", "viral load", "CD4", "advanced HIV disease", "co-trimoxazole prophylaxis", "TB preventive therapy", "3HP", "cryptococcal antigen", "LF-LAM", "PCP", "toxoplasmosis", "IRIS", "PrEP", "PEP", "U=U", "treatment failure", "second-line ART"],
related: ["hiv-child", "tb-adult", "sti-adult", "hepatitis-adult", "meningitis-adult", "pneumonia-adult", "weightloss-adult", "lymphnode-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A person diagnosed with HIV today and kept on treatment can expect a near-normal life, and an undetectable viral load means HIV is not passed on sexually (U=U). In Bhutan the biggest gaps are at the start, finding people, and at the end, keeping viral loads suppressed. In between, the deaths come from late diagnosis with advanced disease, above all TB, cryptococcal meningitis and PCP.</p>
<div class="glance">
<div><h4>Test</h4><p>Offer testing (with the 5 Cs) to everyone with TB, STI, pregnancy, weight loss, zoster, recurrent pneumonia, unexplained cytopenias, or before surgery. Confirm per national algorithm.</p></div>
<div><h4>Treat all</h4><p>${dr("tld", "TLD")} (tenofovir 300 + lamivudine 300 + dolutegravir 50 mg) one tablet daily, as soon as possible — same day if ready — at any CD4.</p></div>
<div><h4>Advanced disease</h4><p>CD4 under 200 or WHO stage 3–4: Xpert ± urine LF-LAM, serum CrAg if CD4 under 100, co-trimoxazole, TPT, rapid ART.</p></div>
<div><h4>Prophylaxis</h4><p>${dr("cotrimoxazole")} 960 mg daily if CD4 under 350 or stage 3–4 or TB; TB preventive therapy once TB is excluded; ${dr("fluconazole")} pre-emptive if CrAg-positive.</p></div>
<div><h4>Delay ART only for</h4><p>Cryptococcal meningitis (4–6 weeks after antifungals) and TB meningitis (at least 4 weeks after ATT). Other TB: ART within 2 weeks, ${dr("dolutegravir")} 50 mg twice daily with rifampicin.</p></div>
<div><h4>Monitor</h4><p>Viral load at 3, 6 and 12 months, then yearly. Over 1,000 copies/mL: adherence counselling, repeat in 3 months; still over 1,000 → failure, TAG discussion.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan has a low-prevalence epidemic driven mostly by sexual transmission. The MoH News Release (Nov 2021) reported 795 people diagnosed from 1993 to November 2021, against an estimated 1,300 — a detection gap of 39%. 94.2% were infected sexually, 5% through mother-to-child transmission, and 70% were aged 25–49. The <b>National Guidelines on Treatment and Management of HIV &amp; AIDS 2024</b> adopt WHO's Treat-All approach and TLD first line. Rapid tests are available in all district hospitals, some PHCs and the Health Information and Service Centres (HISCs: Thimphu, Phuentsholing, Samdrup Jongkhar, Gelephu, Kuenga Rabten, Lobesa, plus Samtse). Confirmation is at RCDC and the regional referral hospitals. Second-line switches are discussed with the national Technical Advisory Group (TAG). ART, co-trimoxazole, isoniazid and fluconazole are supplied free through the National HIV/AIDS, STIs &amp; Hepatitis Control Programme. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, transmission and natural history", html: `
<p>HIV infects CD4 T-cells. Without treatment, CD4 counts fall by about 50–100 cells/mm³ a year, and AIDS develops after a median of about 10 years. Transmission is sexual, mother-to-child (pregnancy, birth, breastfeeding), and through blood (needles, transfusion).${r(1, 2)}</p>
${tbl(["WHO clinical stage (Bhutan 2024, Table 4)", "Examples"], [
["Stage 1", "Asymptomatic; persistent generalised lymphadenopathy"],
["Stage 2", "Mild weight loss, recurrent respiratory infections, herpes zoster, angular cheilitis, recurrent oral ulcers, papular pruritic eruption, seborrhoeic dermatitis, fungal nail infection"],
["Stage 3", "Weight loss over 10%, diarrhoea or fever over 1 month, oral candidiasis, oral hairy leukoplakia, pulmonary TB, severe bacterial infections"],
["Stage 4 (AIDS)", "PCP, cryptococcal meningitis, toxoplasmosis, extrapulmonary TB, oesophageal candidiasis, HIV wasting, lymphoma, Kaposi sarcoma, CMV, chronic HSV ulcers"]])}
${tbl(["CD4 (cells/mm³)", "Typical infections (Bhutan 2024, Table 35)"], [
["200–500", "Pneumococcal and other bacterial infections, pulmonary TB, herpes zoster"],
["Under 200", "PCP, oral thrush"],
["Under 100", "Toxoplasmosis, cryptococcosis, oesophageal candidiasis, cryptosporidiosis"],
["Under 50", "Disseminated CMV, disseminated MAC, extrapulmonary TB"]])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Untreated HIV infection", [
F.s("Acute infection: very high viral load, flu-like illness, rash (2–4 weeks)"), F.a,
F.s("Chronic phase: ongoing replication, gut lymphoid loss, inflammation"), F.a,
F.s("CD4 decline"), F.a,
F.e("Opportunistic infections and cancers (AIDS)")])}
${F.chart("On effective ART", [
F.s("Viral load under 50 copies/mL within 6 months"), F.a,
F.ok("CD4 recovery; no sexual transmission (U=U); near-normal life expectancy")])}
<p>Dolutegravir-based ART suppresses virus faster and has a higher barrier to resistance than the older efavirenz regimens. IRIS — a temporary worsening as immunity returns — occurs in about 25–30% of people starting ART with advanced disease.${r(1)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan 2024", "WHO 2021", "This guide and why"], [
["First line", "TDF + 3TC + DTG (TLD)", "TLD", "TLD " + LB.loc()],
["CPT threshold (adults)", "CD4 under 350 or stage 3–4; all with TB", "Same (and any CD4 where malaria or bacterial infections are common)", "Bhutan"],
["Viral load schedule", "3, 6, 12 months, then yearly", "6 and 12 months, then yearly", "Bhutan (earlier check at 3 months)"],
["Low-level viraemia (50–1,000)", "Maintain regimen, adherence support, repeat in 3 months", "Same", "Bhutan"],
["Second line after TLD failure", "AZT + 3TC + LPV/r (TAG decision)", "AZT + 3TC + boosted PI; resistance testing where available", "TAG; resistance testing if available"],
["PrEP", "TDF/3TC daily", "TDF/FTC or TDF/3TC; event-driven for MSM; long-acting options", "Bhutan TDF/3TC"],
["PEP", "TDF + 3TC + DTG 28 days within 72 h", "Same", "Bhutan"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Presentation", "Think HIV when you see"], [
["Acute HIV", "Fever, sore throat, rash, lymph nodes, mouth ulcers 2–4 weeks after exposure; HIV antibody may still be negative — repeat test or NAAT"],
["Skin", "Zoster (especially multidermatomal or under 50), seborrhoeic dermatitis, papular pruritic eruption, molluscum, Kaposi sarcoma"],
["Mouth", "Thrush, oral hairy leukoplakia, recurrent ulcers"],
["Chest", "TB, recurrent pneumonia, PCP (dry cough, breathlessness on exertion, fever, hypoxia)"],
["Neurology", "Headache and fever (cryptococcal or TB meningitis), focal signs (toxoplasmosis), dementia, neuropathy"],
["General", "Weight loss, chronic diarrhoea, prolonged fever, generalised lymphadenopathy, anaemia, thrombocytopenia"]])}
${box("red", "Danger signs — admit (seriously ill)", `<ul><li>Respiratory rate 30 or more, heart rate 120 or more, temperature 39 °C or more, unable to walk unaided</li><li>Headache with fever, confusion, seizures or neck stiffness</li><li>SpO₂ under 92% or breathlessness on walking (PCP, TB)</li><li>Severe dehydration from diarrhoea</li></ul>`)}
<h3>The typical patient</h3>
<p>A 34-year-old long-distance truck driver from Gelephu has lost 9 kg over 4 months, with oral thrush and a cough for 3 weeks. Rapid tests are reactive and confirmed. CD4 is 64 cells/mm³ (WHO stage 3). <b>This is advanced HIV disease.</b> He needs sputum Xpert and urine LF-LAM (symptomatic, CD4 100 or less), a chest X-ray and a serum CrAg (CD4 under 100). He starts co-trimoxazole 960 mg daily. Xpert detects rifampicin-sensitive TB. He starts 2HRZE/4HR now and TLD within 2 weeks, with an extra dolutegravir 50 mg in the evening while on rifampicin. He continues co-trimoxazole and is warned that TB symptoms may flare for a while (IRIS) — "don't stop the tablets, come back". His wife is offered testing (partner notification), and condoms and U=U are explained.</p>
` },

{ id: "ddx", title: "Diagnosis and testing", html: `
${tbl(["Step", "Details"], [
["Who to test", "Provider-initiated testing for TB, STI, ANC, surgery, compatible illness; voluntary testing for all; partners and children of people with HIV (index testing); key populations"],
["How", "National algorithm with sequential rapid tests; confirmation at RCDC, regional referral hospitals or Phuentsholing (ELISA 4th generation / NAAT)"],
["Window period", "4th-generation tests detect most infections within about 2–6 weeks; retest if recent exposure"],
["Infants under 18 months", "Antibody tests reflect the mother; use NAAT (see HIV in children)"],
["Self-testing", "Being rolled out for high-risk groups; reactive self-tests must be confirmed"],
["The 5 Cs", "Consent, Confidentiality, Counselling, Correct test, Connection to care"]])}
` },

{ id: "invest", title: "Baseline and monitoring tests", html: `
${tbl(["Test (Bhutan 2024, Tables 5 and 9)", "When", "Notes"], [
["CD4 count", "Baseline; repeat if failure, rebound over 1,000, or re-engagement after interruption", "Stop routine CD4 once over 200 with suppressed VL"],
["Viral load", "Baseline, then 3, 6, 12 months and yearly", "Target under 50 copies/mL"],
["TB screen (cough, fever, night sweats, weight loss)", "Every visit", "Xpert if any symptom; LF-LAM in advanced disease"],
["Serum CrAg", "CD4 under 100", "Positive → LP and MRI"],
["CBC, creatinine and eGFR, urine dipstick (glucose, protein)", "Baseline; TDF monitoring", "Hb before AZT"],
["LFT, HBsAg, anti-HCV, syphilis serology", "Baseline", "HBV changes regimen choices"],
["Pregnancy test", "Women of reproductive age", "TLD safe in pregnancy"],
["Glucose, lipids, BP", "Baseline and yearly", "Dolutegravir weight gain; cardiovascular risk"],
["Chest X-ray, cervical screening (HPV/Pap)", "Baseline", "Cervical cancer risk is higher"]])}
` },

{ id: "staging", title: "Advanced HIV disease — what this patient needs", html: `
<p>Enter CD4, stage, symptoms and CrAg result to get the Bhutan 2024 package: TB tests, cryptococcal screening, prophylaxis and ART timing.${r(1)}</p>
<div class="calc" data-calc="ahdpackage"></div>
<p>First-line ART by weight, with rifampicin and kidney adjustments:</p>
<div class="calc" data-calc="hivdose"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Starting ART</h3>
<ul><li>Start ART in everyone, at any CD4, as soon as the person is ready — same day if possible (rapid ART) — with adherence counselling and a named treatment supporter.</li>
<li>Preferred first line: ${dr("tld", "TLD")} one tablet daily. Alternatives: TAF + 3TC + DTG when TDF cannot be used; ABC + 3TC + DTG (or when TAF cannot be used); TDF + 3TC + boosted PI.</li>
<li>HBV coinfection: the regimen must contain TDF or TAF, for life.</li>
<li>CrCl under 50: avoid TDF (ABC + 3TC + DTG).</li>
<li>Dolutegravir: separate from iron, calcium, zinc and antacids (take DTG 2 hours before or 6 hours after); metformin dose may need reduction; weight gain and insomnia are common.</li></ul>
<h3>B. Timing with opportunistic infections</h3>
${tbl(["Condition", "When to start ART"], [
["TB (not meningitis)", "Within 2 weeks of TB treatment, any CD4; DTG 50 mg twice daily while on rifampicin (and 2 weeks after)"],
["TB meningitis", "Defer at least 4 weeks (4–8 weeks) after ATT; steroids for the first 8 weeks of ATT"],
["Cryptococcal meningitis", "Defer 4–6 weeks after starting antifungals (immediate ART increases mortality)"],
["Other OIs (PCP, toxoplasmosis, etc.)", "Within 2 weeks"]])}
<h3>C. Advanced HIV disease package</h3>
<ul><li><b>Screen:</b> Xpert MTB/RIF for all with TB symptoms; urine LF-LAM if symptomatic with CD4 200 or less (inpatients) or 100 or less (outpatients), or seriously ill at any CD4; serum CrAg if CD4 under 100.</li>
<li><b>Prevent:</b> co-trimoxazole; TB preventive therapy; pre-emptive fluconazole for CrAg-positive people without meningitis.</li>
<li><b>Treat:</b> rapid ART (deferred only for meningitis); intensified adherence support including home visits.${r(1)}</li></ul>
<h3>D. Prophylaxis</h3>
${tbl(["Prophylaxis", "Regimen", "Start", "Stop"], [
[dr("cotrimoxazole"), "960 mg once daily", "CD4 under 350, stage 3–4, or active TB", "Stable on ART with immune recovery and viral suppression"],
["TB preventive therapy", "3HP weekly × 12 weeks (adults over 30 kg: 3 combined HP tablets weekly) or " + dr("isoniazid") + " 5 mg/kg (max 300 mg) daily × 6 months, with " + dr("pyridoxine") + " 25 mg", "Everyone once active TB is excluded (TST not needed), including pregnant women and those on ART", "Completion"],
[dr("fluconazole") + " pre-emptive", "800 mg daily × 2 weeks, 400 mg × 8 weeks, then 200 mg", "Serum CrAg-positive, CD4 under 100, meningitis excluded", "After 1 year if CD4 100 or more (twice, 6 months apart) and VL suppressed"],
["PCP (if CPT not otherwise given)", "Co-trimoxazole 2 single-strength tablets daily; dapsone 100 mg daily if allergic", "CD4 under 200 or under 14%", "CD4 over 200 for 3 months on ART"],
["Toxoplasmosis primary", "Co-trimoxazole 960 mg daily", "Toxo IgG positive, CD4 under 100", "CD4 over 200 for 3 months"]])}
<h3>E. Key opportunistic infections</h3>
${tbl(["Infection", "Treatment (Bhutan 2024)"], [
["PCP", "Co-trimoxazole: trimethoprim 15 mg/kg/day + sulfamethoxazole 75 mg/kg/day in 3 doses (e.g. 6 single-strength tablets three times daily for an adult) for 21 days. If PaO₂ under 70 mmHg: " + dr("prednisolone") + " 40 mg twice daily for 5 days, then 20 mg twice daily for 5 days, then 20 mg daily for 11 days (start within 72 h). Sulfa allergy: clindamycin + " + dr("primaquine") + " 15–30 mg daily"],
["Cryptococcal meningitis", "Induction: single liposomal amphotericin B 10 mg/kg + flucytosine 100 mg/kg/day + fluconazole 1,200 mg/day for 14 days (alternatives if unavailable, e.g. amphotericin B deoxycholate 1 mg/kg/day + flucytosine × 7 days, then fluconazole 1,200 mg × 7 days). Consolidation: fluconazole 400–800 mg × 8 weeks. Maintenance: 200 mg for at least 1 year. Repeated LPs for raised pressure"],
["Toxoplasmosis", "Co-trimoxazole (trimethoprim 5 mg/kg + sulfamethoxazole 25 mg/kg twice daily) for at least 6 weeks; alternative pyrimethamine + clindamycin; dexamethasone for oedema; then secondary prophylaxis"],
["TB", "2HRZE/4HR (12 months for TB meningitis); co-trimoxazole throughout"],
["Oral or oesophageal candidiasis", "Fluconazole"],
["Herpes zoster", dr("aciclovir") + " 800 mg five times daily for 7 days"],
["Chronic diarrhoea", "Stool tests; co-trimoxazole, quinolone, metronidazole or albendazole by cause; ART itself stops most HIV enteropathy"]])}
<h3>F. Monitoring and treatment failure</h3>
<ul><li>Viral load at 3, 6 and 12 months, then yearly. Goal under 50 copies/mL by 6 months; CD4 over 200 by 6 months.</li>
<li>VL 50–1,000: keep the regimen, enhanced adherence counselling, repeat in 3 months.</li>
<li>VL over 1,000: enhanced adherence counselling for 3 months and repeat. If still over 1,000 after at least 6 months on ART, this is <b>virological failure</b>: discuss with TAG for second line (after TLD failure: AZT + 3TC + LPV/r, or AZT + 3TC + DRV/r).</li>
<li>Clinical failure (new stage 4 event after 6 months) and immunological failure (persistent CD4 under 100) have low accuracy — confirm with VL.${r(1)}</li></ul>
<h3>G. IRIS</h3>
<ul><li>Worsening of a known infection (paradoxical) or appearance of a hidden one (unmasking), usually 4–8 weeks after ART starts. Risk is higher with CD4 under 100 and a high pathogen load (TB, cryptococcus).</li>
<li>Continue ART unless life-threatening. Prednisolone helps severe TB-IRIS, but steroids are <b>contraindicated</b> in IRIS from Kaposi sarcoma, cryptococcal meningitis, viral hepatitis and herpes.</li></ul>
<h3>H. Prevention</h3>
<ul><li><b>U=U:</b> a sustained undetectable viral load means no sexual transmission.</li>
<li><b>PrEP</b> (Bhutan: TDF 300 mg/3TC 300 mg daily) for people at substantial risk — HIV-negative test first, creatinine, HBV status, 3-monthly HIV tests.</li>
<li><b>PEP:</b> first dose immediately, no later than 72 hours: TDF + 3TC + DTG for 28 days (alternative TDF + 3TC + LPV/r). If the source cannot be tested, complete the course.</li>
<li><b>PMTCT:</b> TLD throughout pregnancy and breastfeeding; infant prophylaxis and early infant diagnosis (see <a href="#/d/hiv-child">HIV in children</a>).</li>
<li>Condoms, STI treatment, partner and family testing.</li></ul>
<h3>I. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Offer testing (or refer to HISC); TB symptom screen; refer reactive results with counselling and confidentiality"],
["District hospital", "Rapid testing; start ART with the programme; co-trimoxazole, TPT; Xpert; refer seriously ill"],
["Referral hospital (JDWNRH, regional)", "Confirmation, CD4, viral load, CrAg, LP, management of OIs, TAG for second line, PMTCT"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Key cautions"], [
[dr("tld", "TLD (TDF/3TC/DTG)"), "1 tablet once daily", "Avoid TDF if CrCl under 50; DTG 50 mg extra 12 h later with rifampicin"],
[dr("dolutegravir"), "50 mg daily (twice daily with rifampicin)", "Separate from iron, calcium, antacids; weight gain, insomnia"],
["Abacavir", "600 mg daily (or 300 mg twice daily)", "Hypersensitivity reaction — never rechallenge"],
["Zidovudine", "300 mg twice daily", "Anaemia, neutropenia; check Hb"],
["Lopinavir/ritonavir", "400/100 mg twice daily", "Many interactions; not with rifampicin (rifabutin preferred)"],
[dr("cotrimoxazole"), "960 mg daily (prophylaxis)", "Rash, cytopenia; Stevens–Johnson"],
[dr("isoniazid"), "5 mg/kg (max 300 mg) daily × 6 months", "With pyridoxine 25 mg; hepatitis"],
[dr("rifapentine") + " + isoniazid (3HP)", "Weekly × 12 weeks", "Can be given with DTG without dose change (WHO); reduces hormonal contraceptive levels; not with PIs"],
[dr("fluconazole"), "800 / 400 / 200 mg (pre-emptive)", "Hepatotoxic; teratogenic at high doses"]])}
` },

{ id: "populations", title: "Pregnancy, adolescents and older adults", html: `
<ul><li><b>Pregnancy:</b> TLD is recommended throughout pregnancy, starting at diagnosis; viral load at 34–36 weeks; infant prophylaxis by maternal VL. Alternatives: ABC + 3TC + NVP; AZT + 3TC + LPV/r.</li>
<li><b>Adolescents:</b> TLD once 30 kg or more; disclosure, school, adherence and transition need special support.</li>
<li><b>Older adults:</b> more kidney disease, diabetes and heart disease; check interactions and eGFR.</li>
<li><b>Key populations</b> (sex workers, MSM, transgender people, people who inject drugs): non-judgemental care, PrEP, confidentiality.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["HIV + rifampicin-based TB treatment", "DTG 50 mg twice daily; avoid LPV/r (use rifabutin)", "Rifampicin lowers DTG and PI levels"],
["HIV + HBV", "TDF/TAF always; never stop", "HBV flare on stopping"],
["HIV + HCV", "Treat per national viral hepatitis guideline", "Faster liver disease"],
["Severe rash on co-trimoxazole or nevirapine", "Stop; dapsone for PCP prophylaxis", "SJS/TEN"],
["Returning after interruption", "CD4, restart ART, check for OIs", "Risk of advanced disease"],
["Health-worker needlestick", "PEP within 72 h; test source; follow-up tests", "—"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Notes"], [
["Opportunistic infections", "TB is the leading cause of death"],
["IRIS", "25–30% of those starting with advanced disease"],
["Drug toxicity", "TDF kidney and bone; DTG weight gain; AZT anaemia; ABC hypersensitivity"],
["Non-communicable disease", "Cardiovascular disease, diabetes, cancers (cervical, lymphoma)"],
["Mental health, stigma", "Depression and disclosure fears affect adherence"]])}
<p>With suppressed viral load, life expectancy approaches normal. Late diagnosis (CD4 under 200) carries most of the early mortality.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Clinic visits: 2 weeks after starting, then monthly until stable; stable patients can have 3–6-month refills.</li>
<li>Every visit: ABCD (Appetite, Body weight, Complaints, Disease progression), TB symptom screen, adherence, side effects.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"HIV is now a manageable long-term condition. Take one tablet every day, and you can live a long life."</li><li>When your viral load is undetectable, you cannot pass HIV to your partner through sex.</li><li>Do not stop the tablets when you feel well; bring your partner and children for testing.</li><li>Your result is confidential.</li></ul>`)}
${box("red", "Come back the same day if", `<ul><li>Headache with fever, confusion or fits</li><li>Breathlessness, cough with fever</li><li>Rash with mouth ulcers or fever (drug reaction)</li><li>Severe diarrhoea or vomiting</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "Oral candidiasis", src: "images/oral-candidiasis.jpg", mod: "Clinical photograph", ctx: "Adult with weight loss", loc: "Palate and tongue", find: "White plaques that scrape off", signs: "WHO stage 3", interp: "Test for HIV; CD4 likely under 200", by: "CDC / Sol Silverman Jr", page: "https://commons.wikimedia.org/wiki/File:CandidiasisFromCDCinJPEG03-18-06.JPG", lic: "Public domain" })}
${fig({ title: "Pneumocystis pneumonia on chest X-ray", src: "images/pcp-cxr.jpg", mod: "Chest radiograph", ctx: "Dry cough, breathlessness, hypoxia", loc: "Both lungs", find: "Bilateral diffuse ground-glass (hazy) opacities", signs: "PCP", interp: "CD4 under 200 with this picture: high-dose co-trimoxazole and prednisolone if hypoxic", by: "Allen CM, Al-Jahdali HH et al.", page: "https://commons.wikimedia.org/wiki/File:X-ray_of_ground_glass_opacities_of_pneumocystis_pneumonia.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Cryptococcus in India ink", src: "images/crypto-india-ink.jpg", mod: "Microscopy (India ink)", ctx: "CSF in HIV with headache", loc: "CSF", find: "Round yeasts with clear halos (capsules)", signs: "Cryptococcal meningitis", interp: "Start induction antifungals; defer ART 4–6 weeks; manage raised pressure with repeated LPs", by: "CDC PHIL 3771", page: "https://commons.wikimedia.org/wiki/File:Cryptococcus_neoformans_using_a_light_India_ink_staining_preparation_PHIL_3771_lores.jpg", lic: "Public domain" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("New HIV diagnosis", [
F.s("Confirm; counsel; CD4, VL, TB screen, baseline bloods"), F.a,
F.d("CD4 under 200 or stage 3–4?"), F.a,
F.b([["Yes", F.e("AHD package: Xpert/LAM, CrAg if under 100, CPT, TPT")], ["No", F.s("TPT if no TB; CPT if CD4 under 350")]]), F.a,
F.d("Meningitis?"), F.a,
F.b([["Yes", F.e("Treat; defer ART 4–6 weeks")], ["No", F.ok("TLD within days")]]), F.a,
F.s("VL at 3, 6, 12 months then yearly")])}
${F.chart("Viral load over 1,000", [
F.s("Enhanced adherence counselling for 3 months"), F.a,
F.d("Repeat VL over 1,000?"), F.a,
F.b([["Yes", F.e("Virological failure: TAG, second line")], ["No", F.ok("Continue; routine monitoring")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>Every TB patient should be tested for HIV, and every person with HIV screened for TB at every visit.</li>
<li>Headache in advanced HIV is cryptococcal meningitis until proven otherwise — do the LP.</li>
<li>A rising CD4 with new fever and nodes in the first 2 months is often IRIS, not failure.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for CD4 to start ART", "Delay, deaths", "Treat all, rapid ART"],
["Starting ART immediately in cryptococcal meningitis", "Higher mortality", "Defer 4–6 weeks"],
["Forgetting twice-daily DTG with rifampicin", "Low DTG levels, resistance", "Add evening dose"],
["Switching regimen on one high VL", "Unnecessary second line", "Adherence counselling, repeat"],
["Breaching confidentiality", "Stigma, loss to care", "Private counselling, consent"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the preferred first-line ART in Bhutan?", "TDF 300 mg + 3TC 300 mg + DTG 50 mg (TLD) one tablet once daily.")}
${qa("Intern/MO", "When is co-trimoxazole prophylaxis indicated in adults?", "CD4 under 350 or WHO stage 3–4, and all people with HIV who have active TB.")}
${qa("Intern/MO", "When should ART start in a patient with cryptococcal meningitis?", "Deferred 4–6 weeks after starting antifungal treatment, because immediate ART increases mortality.")}
${qa("Specialist", "Define virological failure.", "VL over 1,000 copies/mL on two measurements 3 months apart, with adherence support in between, after at least 6 months on ART.")}
${qa("Specialist", "Which IRIS conditions should not be treated with steroids?", "Kaposi sarcoma, cryptococcal meningitis, viral hepatitis and herpes-associated IRIS.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. National Guidelines on Treatment and Management of HIV &amp; AIDS. Thimphu: National HIV/AIDS, STIs &amp; Hepatitis Control Programme, 2024.</li>
<li id="ref-2">World Health Organization. Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring: recommendations for a public health approach. Geneva: WHO, 2021. ISBN 978-92-4-003159-3.</li>
<li id="ref-3">Ministry of Health, Bhutan. News release: Ministry of Health detects 22 new HIV cases. Thimphu, November 2021.</li>
<li id="ref-4">World Health Organization. Guidelines for managing advanced HIV disease and rapid initiation of antiretroviral therapy. Geneva: WHO, 2017.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan guideline", "<span class='pass'>Read in full</span>", "HIV &amp; AIDS treatment guideline 2024"],
["Epidemiology", "<span class='pass'>Bhutan MoH</span>", "News release Nov 2021"],
["Calculators", "<span class='pass'>Checked</span>", "hivdose CPT threshold corrected to Bhutan 350; new AHD package tool"],
["Images", "<span class='pass'>Done</span>", "3 licensed images"]], "qc")}
` }
]
});
