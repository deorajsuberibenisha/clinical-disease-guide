/* Viral hepatitis — adults (acute A–E, chronic B and C) */
registerPage({
id: "hepatitis-adult",
title: "Viral Hepatitis — Adults",
subtitle: "Jaundice, tender liver and tiredness: telling hepatitis A and E from B and C, recognising acute liver failure, who needs tenofovir for hepatitis B, curing hepatitis C, and protecting the next baby",
age: "Adults", specs: ["gi", "id", "medicine", "obg", "ph"],
keywords: ["viral hepatitis", "hepatitis A", "hepatitis B", "hepatitis C", "hepatitis D", "hepatitis E", "HBsAg", "HBV DNA", "tenofovir", "APRI", "chronic hepatitis B", "acute liver failure", "jaundice", "hepatitis E pregnancy", "HBIG", "birth dose", "sofosbuvir", "daclatasvir", "velpatasvir", "liver cancer surveillance"],
related: ["hepatitis-child", "cirrhosis-adult", "dm-pregnancy", "enteric-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most acute viral hepatitis gets better with rest and time. The skills that save lives are spotting the few patients sliding into liver failure, finding the many people with silent chronic hepatitis B or C, and starting long-term treatment or prevention for those who need it.</p>
<div class="glance">
<div><h4>A and E</h4><p>Faecal–oral, acute only. IgM anti-HAV or anti-HEV. Supportive care. <b>Hepatitis E is dangerous in pregnancy.</b></p></div>
<div><h4>B, C, D</h4><p>Blood, sex, mother to baby. Can become chronic: cirrhosis and liver cancer.</p></div>
<div><h4>Danger</h4><p>Confusion, drowsiness, bleeding, INR 1.5 or more, persistent vomiting, falling liver size: <b>acute liver failure</b> — refer urgently.</p></div>
<div><h4>Chronic B</h4><p>HBsAg over 6 months. ${dr("tenofovir_hbv")} if cirrhosis, APRI over 0.5, HBV DNA over 2000 with raised ALT, or co-infection (WHO 2024).</p></div>
<div><h4>Hepatitis C</h4><p>Anti-HCV, then HCV RNA. Cured in over 95% with 12 weeks of sofosbuvir-based tablets.</p></div>
<div><h4>Prevention</h4><p>${dr("hepb_vaccine")} birth dose within 24 h; ${dr("hbig")} for babies of positive mothers; tenofovir in pregnancy if high viral load.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Hepatitis B prevalence in Bhutanese adults fell from 5.9% (1996) to 2% (2017) after vaccination began in 1997; hepatitis C fell from 1.3% to 0.3%. Prevalence is higher in rural areas, and in the 2017 survey only 1 of 18 people with hepatitis B knew it. All pregnant women are screened for HBsAg, the birth dose reaches 94% of institutional births, and babies of positive mothers receive HBIG (NSP IV 2023–2028). The STG (§4.5) advises avoiding paracetamol and using ibuprofen if needed in acute hepatitis; international guidance prefers paracetamol at a reduced dose and avoids NSAIDs — see the comparison table. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
${tbl(["Virus", "Spread", "Incubation", "Chronic?", "Notes"], [
["Hepatitis A (HAV)", "Faecal–oral: water, food", "2–6 weeks", "No", "Mild in children; worse with age and liver disease"],
["<b>Hepatitis B (HBV)</b>", "Mother to baby, blood, sex, shared needles, unsafe injections, tattoos", "1–6 months", "About 90% if infected at birth; under 5% in adults", "Vaccine-preventable; cirrhosis, liver cancer"],
["Hepatitis C (HCV)", "Blood: unsafe injections, transfusions before screening, drug use", "2–12 weeks", "55–85%", "Curable with tablets"],
["Hepatitis D (HDV)", "Only with HBV", "—", "Yes", "Most severe; prevented by HBV vaccine"],
["<b>Hepatitis E (HEV)</b>", "Faecal–oral, waterborne outbreaks", "2–10 weeks", "No (except immunosuppressed)", "Liver failure in pregnancy (third trimester)"],
["Others", "EBV, CMV, HSV, dengue, leptospirosis", "—", "—", "Also think of drugs (anti-TB, herbal) and alcohol"]])}
<p>Bhutanese surveillance reports on average about 936 hepatitis B, 267 hepatitis A and 248 hepatitis C cases a year (2013–2015).${r(1)}</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From infection to outcome", [
F.s("Virus infects hepatocytes"), F.a,
F.s("Immune attack on infected cells → inflammation, raised ALT, jaundice"), F.a,
F.b([["A and E (and most adult B)", F.ok("Virus cleared; full recovery in weeks")], ["Overwhelming necrosis", F.e("Acute liver failure (under 1%; HEV in pregnancy up to 20%)")]]), F.a,
F.d("B or C not cleared"), F.a,
F.s("Chronic hepatitis: decades of inflammation → fibrosis"), F.a,
F.e("Cirrhosis, decompensation, liver cancer (HBV can cause cancer without cirrhosis)")])}
<p>Hepatitis B is not killed by the immune system once integrated into liver-cell DNA, so tenofovir suppresses but rarely cures it; treatment is usually lifelong. Hepatitis C has no such reservoir, which is why a 12-week course cures it.${r(2, 3)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Pain and fever in acute hepatitis", "Avoid paracetamol and other hepatotoxic drugs; ibuprofen if needed", "Paracetamol is safe at reduced doses (up to 2–3 g/day) in liver disease; NSAIDs risk bleeding, kidney injury and fluid retention (EASL, AASLD, BNF)", "<b>Paracetamol up to 2 g/day</b> (3 g if well-nourished, no alcohol); avoid NSAIDs " + LB.loc()],
["Who to treat for chronic HBV", "Not detailed", "WHO 2024 expanded: cirrhosis; APRI over 0.5; HBV DNA over 2000 IU/mL with raised ALT; co-infection, family history, immunosuppression; raised ALT alone if no DNA test. India 2018 narrower", "WHO 2024"],
["Pregnancy and HBV", "Screening (NSP IV)", "Tenofovir from 28 weeks if HBV DNA over 200,000 IU/mL or HBeAg positive (WHO 2024); Bhutan NSP IV the same", "As Bhutan and WHO"],
["Hepatitis C treatment", "Not in STG", "Pangenotypic DAAs for all with viraemia (WHO 2022)", "Refer to NRH/RRH programme; DAAs not on NEML 2025"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Phase", "Features", "Clue"], [
["Prodrome (days to 2 weeks)", "Fever, malaise, anorexia, nausea, vomiting, aversion to smoking and fatty food, aching joints", "Often mistaken for flu or gastritis"],
["Icteric phase", "Dark urine, pale stools, yellow eyes, tender enlarged liver, itch", "ALT often over 10 times normal"],
["Recovery", "Appetite returns, jaundice fades over weeks", "HEV may have a long cholestatic phase"],
["Chronic hepatitis B or C", "Usually no symptoms; fatigue; later spider naevi, palmar erythema, splenomegaly, ascites", "Found on screening (pregnancy, blood donation)"]])}
${box("red", "Acute liver failure — refer urgently", `<ul><li>Confusion, drowsiness, behaviour change (encephalopathy)</li><li>Bleeding; INR 1.5 or more</li><li>Persistent vomiting, unable to drink; low glucose</li><li>Shrinking liver, rising bilirubin with falling ALT</li><li>Pregnant woman with jaundice (hepatitis E)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 30-year-old man from Samtse has had a week of nausea, loss of appetite and fever, and now dark urine and yellow eyes; several neighbours have jaundice after the spring water was contaminated. Alert, liver tender, no bleeding. ALT 1850, bilirubin 6.2 mg/dL, INR 1.2, glucose normal. IgM anti-HEV positive; HBsAg and anti-HCV negative. <b>This is acute hepatitis E, part of an outbreak.</b> He can rest at home with fluids, small meals, paracetamol up to 2 g/day if needed, no alcohol or herbal remedies, and review in 2–3 days. The DHO should be told, and pregnant women in the village warned and checked.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against viral hepatitis", "Best test"], [
["Drug-induced liver injury (anti-TB drugs, herbal medicines, paracetamol overdose)", "Drug history; timing", "—", "Stop drug; history"],
["Alcoholic hepatitis", "Heavy drinking, AST:ALT over 2, fever, leucocytosis", "ALT rarely over 300", "History, Maddrey score"],
["Biliary obstruction (stones, worms, tumour)", "Colicky pain, high ALP, dilated ducts", "—", "Ultrasound"],
["Leptospirosis, malaria, dengue, scrub typhus, enteric fever", "Fever, exposure, kidney injury, low platelets", "—", "RDTs, serology"],
["Haemolysis", "Unconjugated bilirubin, anaemia, normal ALT", "—", "CBC, LDH, film"],
["Acute fatty liver of pregnancy, HELLP", "Third trimester, hypertension, low platelets", "—", "Obstetric assessment"],
["Autoimmune hepatitis, Wilson's disease", "Young, other autoimmunity, no virus found", "—", "Specialist tests"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["ALT, AST, bilirubin, ALP, albumin", "Pattern and severity", "Hepatocellular: ALT much greater than ALP", "Essential"],
["<b>INR (PT)</b>, glucose", "Liver synthetic failure", "INR 1.5 or more = severe; check glucose", "Essential"],
["IgM anti-HAV, IgM anti-HEV", "Acute A or E", "—", "Acute hepatitis"],
["<b>HBsAg</b>; IgM anti-HBc", "Acute or chronic B", "HBsAg over 6 months = chronic", "Essential"],
["Anti-HCV → HCV RNA", "Hepatitis C", "Antibody alone may mean cleared infection (all 4 positives in Bhutan's 2017 survey were RNA negative)", "Essential"],
["HBV DNA, HBeAg, anti-HDV", "Chronic B work-up", "Referral hospitals", "Chronic B"],
["CBC (platelets), AST for APRI", "Fibrosis estimate", "APRI over 0.5 significant fibrosis; over 2 cirrhosis", "Chronic B/C"],
["Ultrasound abdomen", "Obstruction, cirrhosis, liver cancer", "—", "Essential"],
["HIV test, pregnancy test", "Co-infection; HEV risk", "—", "Essential"]])}
` },

{ id: "staging", title: "Chronic hepatitis B treatment decision", html: `
<p>For HBsAg-positive adults: work out APRI and check WHO 2024 criteria. The tool also covers pregnancy.${r(2, 4)}</p>
<div class="calc" data-calc="hbvtreat"></div>
<h3>Refer</h3>
<ul><li>Acute liver failure: immediately to a hospital with ICU (national referral hospital).</li><li>Chronic HBV for HBV DNA, tenofovir and surveillance (NRH/RRH); HCV RNA positive for DAA treatment.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Acute viral hepatitis (any type)</h3>
<ul><li>Most patients recover at home: rest as needed, fluids, small frequent meals; no special diet is needed.</li>
<li>${dr("paracetamol")} for fever or pain: up to 2 g/day (3 g if well-nourished and not drinking). Avoid NSAIDs, alcohol, herbal and traditional remedies, and unnecessary drugs.${r(5)}</li>
<li>Itch: cool baths, emollients; cholestyramine if prolonged (specialist).</li>
<li>Review every few days with LFT and INR until improving. Admit if any danger sign.</li>
<li>Hepatitis A and E: stay away from food handling, school or work until 7 days after jaundice; handwashing; notify clusters.</li></ul>
<h3>B. Acute liver failure</h3>
<ul><li>Refer urgently. Meanwhile: glucose monitoring (10% dextrose if low), ${dr("vitamin_k")} 10 mg IV, lactulose, avoid sedatives, treat infection, careful fluids. Pregnant women with hepatitis E: obstetric ICU, avoid early induction.</li></ul>
<h3>C. Chronic hepatitis B</h3>
<ul><li>Assess: HBeAg, HBV DNA, ALT, APRI, ultrasound, HIV/HCV/HDV tests.</li>
<li>Treat by WHO 2024 criteria (calculator): ${dr("tenofovir_hbv")} 300 mg once daily, usually lifelong; creatinine and phosphate yearly. <b>Never stop in cirrhosis</b> (fatal flare).${r(2)}</li>
<li>Not yet eligible: ALT and APRI (and DNA) every 6–12 months.</li>
<li>Liver cancer surveillance: ultrasound (± AFP) every 6 months in cirrhosis, family history of liver cancer, or over 40 with high viral load.</li>
<li>Vaccinate household and sexual contacts; screen family members.</li>
<li>Before chemotherapy, rituximab or long-term high-dose steroids: test HBsAg and give prophylactic tenofovir if positive.</li></ul>
<h3>D. Hepatitis C</h3>
<ul><li>Anti-HCV positive → HCV RNA. Viraemic: refer for pangenotypic DAA treatment (sofosbuvir + daclatasvir or sofosbuvir/velpatasvir for 12 weeks, WHO 2022) — not on NEML 2025; access through the national programme. SVR (cure) is checked 12 weeks after treatment.${r(6)}</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Supportive care; HBsAg RDT; refer danger signs, pregnant women with jaundice, and all HBsAg or anti-HCV positives"],
["District hospital", "LFT, INR, serology; manage uncomplicated acute hepatitis; refer chronic B/C"],
["NRH / RRH", "HBV DNA, tenofovir, HCV treatment, ultrasound surveillance, ICU for liver failure"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("paracetamol"), "Up to 2 g/day in acute hepatitis or cirrhosis (3 g/day if well-nourished, no alcohol)", "Safer than NSAIDs"],
[dr("tenofovir_hbv"), "300 mg once daily", "Chronic HBV; pregnancy from 28 weeks if DNA over 200,000"],
[dr("hepb_vaccine"), "3 doses (0, 1, 6 months)", "Contacts, health workers"],
[dr("hbig"), "500 IU IM within 24 h of exposure", "Post-exposure, non-immune"],
[dr("vitamin_k"), "10 mg IV", "Coagulopathy in liver failure"],
[dr("lactulose"), "15–30 mL two or three times daily", "Encephalopathy"],
["Sofosbuvir + daclatasvir / velpatasvir", "12 weeks (programme)", "Hepatitis C; not on NEML 2025"],
["Avoid", "NSAIDs, alcohol, herbal remedies, sedatives", "—"]])}
` },

{ id: "populations", title: "Pregnancy and older adults", html: `
<h3>Pregnancy</h3>
<ul><li><b>Hepatitis E</b> in the third trimester can cause fulminant liver failure (case fatality 10–25%), bleeding and fetal loss: admit every jaundiced pregnant woman, check INR and glucose, involve obstetrics and ICU.</li>
<li><b>Hepatitis B:</b> universal HBsAg screening (Bhutan policy); HBV DNA at referral hospitals; tenofovir from 28 weeks if HBV DNA over 200,000 IU/mL; baby gets ${dr("hbig")} and birth-dose vaccine within 24 hours; breastfeeding is encouraged. HBV is not a reason for caesarean section.${r(1, 2)}</li>
<li>Hepatitis C: DAAs are not yet standard in pregnancy; treat after delivery; the baby is tested at 18 months (antibody) or earlier by RNA.</li></ul>
<h3>Older adults</h3>
<ul><li>Hepatitis A is more severe; drug-induced liver injury is commoner; look for liver cancer when chronic hepatitis is found.</li></ul>
` },

{ id: "scenarios", title: "Hepatitis with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["On anti-TB treatment", "Distinguish drug-induced hepatitis; stop drugs if ALT over 5× ULN (or 3× with jaundice) per TB guideline", "See <a href=\"#/d/tb-adult\">TB</a>"],
["HIV co-infection", "Tenofovir-containing ART treats both", "Dual activity"],
["Alcohol use", "Abstinence essential", "Accelerates fibrosis"],
["Chemotherapy or immunosuppression", "HBsAg test and prophylaxis", "Reactivation"],
["Cirrhosis", "See <a href=\"#/d/cirrhosis-adult\">cirrhosis</a>", "Decompensation"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Acute liver failure", "Encephalopathy, INR 1.5 or more", "Urgent referral; ICU"],
["Cholestatic hepatitis", "Prolonged jaundice and itch (HAV, HEV)", "Supportive"],
["Chronic hepatitis, cirrhosis", "Raised APRI, splenomegaly, low platelets", "Antivirals; cirrhosis care"],
["Hepatocellular carcinoma", "Mass on ultrasound, rising AFP, weight loss", "Surveillance; referral"],
["Extrahepatic", "Glomerulonephritis (HBV), cryoglobulinaemia (HCV)", "Specialist"]])}
<p>Hepatitis A is fatal in about 0.1–0.3% overall; hepatitis E up to 25% in late pregnancy. Untreated chronic hepatitis B leads to cirrhosis or liver cancer in roughly 15–40% over a lifetime.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Acute: LFT until normal (usually 1–3 months); HBsAg repeat at 6 months if acute B.</li>
<li>Chronic B on or off treatment: ALT, creatinine, HBV DNA where available, APRI yearly; ultrasound 6-monthly if high risk.</li>
<li>Prevention: safe water and sanitation (A, E); vaccination, safe injections, screened blood, condoms, not sharing razors or needles (B, C, D).</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Your liver is inflamed by a virus. Most people recover fully over a few weeks."</li><li>No alcohol, no herbal or traditional medicines, and only the painkillers your doctor recommends.</li><li>Hepatitis B: your family should be tested and vaccinated; if you take tenofovir, never stop it on your own.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Confusion, very sleepy, bleeding gums or black stools</li><li>Vomiting and cannot drink</li><li>You are pregnant and become yellow</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "Scleral icterus in acute hepatitis", src: "images/scleral-icterus.jpg", mod: "Clinical photograph", ctx: "Patient admitted with complications of acute hepatitis", loc: "Eyes", find: "Marked yellow discoloration of the whites of the eyes", signs: "Scleral icterus", interp: "Visible when bilirubin is above about 2.5–3 mg/dL; look in daylight. Check INR, glucose and consciousness for liver failure", by: "Sheila J. Toro", page: "https://commons.wikimedia.org/wiki/File:Scleral_Icterus.jpg", lic: "CC BY 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult with jaundice and raised ALT", [
F.s("LFT, INR, glucose; HBsAg, anti-HCV, IgM anti-HAV, IgM anti-HEV; ultrasound; drug and alcohol history"), F.a,
F.d("Danger signs (confusion, INR 1.5+, bleeding, pregnancy)?"), F.a,
F.b([["Yes", F.e("Refer urgently: ICU care")], ["No", F.s("Supportive care at home; review LFT/INR")]]), F.a,
F.d("HBsAg or HCV RNA positive?"), F.a,
F.b([["Yes", F.s("Chronic work-up: HBV DNA, APRI → tenofovir by WHO criteria; HCV → DAAs")], ["No", F.ok("A or E: recovery expected")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Check the INR and glucose</b> in every jaundiced patient.</li>
<li>A pregnant woman with jaundice needs admission until hepatitis E is excluded or she is clearly improving.</li>
<li>Anti-HCV positive is not the same as HCV infection: check RNA.</li>
<li>Chronic hepatitis B is mostly silent: screen families.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["NSAIDs for pain", "Bleeding, kidney injury", "Low-dose paracetamol"],
["Herbal remedies", "Further liver injury", "Advise against"],
["Stopping tenofovir in cirrhosis", "Fatal flare", "Lifelong unless specialist advises"],
["Missing liver failure", "Death", "INR, glucose, consciousness"],
["Not vaccinating contacts", "Ongoing spread", "Household testing and vaccine"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Which hepatitis viruses spread by the faecal–oral route?", "Hepatitis A and E.")}
${qa("Student", "What defines chronic hepatitis B?", "HBsAg positive for more than 6 months.")}
${qa("Intern/MO", "Name three signs of acute liver failure.", "Encephalopathy, INR 1.5 or more with bleeding, and hypoglycaemia; also shrinking liver.")}
${qa("Intern/MO", "Is paracetamol safe in acute hepatitis?", "Yes, at reduced doses (up to 2–3 g/day); NSAIDs are the riskier choice.")}
${qa("Intern/MO", "What prevents mother-to-child HBV transmission?", "Birth-dose vaccine and HBIG within 24 hours, plus maternal tenofovir from 28 weeks if HBV DNA is over 200,000 IU/mL.")}
${qa("Specialist", "List the WHO 2024 criteria for treating chronic HBV.", "Cirrhosis; significant fibrosis (APRI over 0.5); HBV DNA over 2000 IU/mL with raised ALT; co-infection, family history of HCC or cirrhosis, immunosuppression or comorbidities; or persistently raised ALT where DNA testing is unavailable.")}
${qa("Specialist", "How is hepatitis C treated?", "Pangenotypic DAAs such as sofosbuvir/velpatasvir or sofosbuvir + daclatasvir for 12 weeks; cure confirmed by negative RNA 12 weeks after treatment.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National AIDS Control Programme, Ministry of Health, Bhutan. National Strategic Plan IV for HIV/AIDS, Viral Hepatitis and STIs, 2023–2028.</li>
<li id="ref-2">World Health Organization. Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240090903" target="_blank" rel="noopener">who.int/publications/i/item/9789240090903</a></li>
<li id="ref-3">Ministry of Health and Family Welfare, India. National guidelines for diagnosis and management of viral hepatitis. 2018. <a href="https://clinicalestablishments.mohfw.gov.in/sites/default/files/standard-treatment-guidelines/3591.pdf" target="_blank" rel="noopener">mohfw.gov.in (PDF)</a></li>
<li id="ref-4">Wai CT, Greenson JK, Fontana RJ et al. A simple noninvasive index can predict both significant fibrosis and cirrhosis in patients with chronic hepatitis C. <i>Hepatology</i> 2003;38:518–526. <a href="https://doi.org/10.1053/jhep.2003.50346" target="_blank" rel="noopener">doi:10.1053/jhep.2003.50346</a></li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.5 Acute viral hepatitis; §12.4.10 Viral hepatitis (children); NEML 2025.</li>
<li id="ref-6">World Health Organization. Updated recommendations on treatment of adolescents and children with chronic HCV infection, and HCV simplified service delivery and diagnostics. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240052734" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-7">Bhutan Clinical Reference app: Hepatitis B; Hepatitis A and E; Acute viral hepatitis (topic pages, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and NSP IV", "<span class='pass'>Verified</span>", "STG §4.5 text; NSP IV epidemiology and PMTCT policy read from PDF"],
["WHO 2024 HBV criteria", "<span class='pass'>Checked</span>", "Built into calculator"],
["Paracetamol conflict", "<span class='flag'>Flagged</span>", "STG advises avoiding paracetamol; guide follows international practice"],
["HBIG, HCV DAAs on NEML", "<span class='flag'>Gap</span>", "Not listed; programme supply"],
["Images", "<span class='pass'>Done</span>", "CC BY 4.0"]], "qc")}
` }
]
});
