/* Ulcerative colitis — adults */
registerPage({
id: "uc-adult",
title: "Ulcerative Colitis (UC) — Adults",
subtitle: "Recognising chronic bloody diarrhoea that is not dysentery, excluding amoebiasis and other infections before steroids, grading extent and severity, using 5-ASA and steroids well, running acute severe colitis by the day-3 rule, and knowing when rescue therapy or colectomy saves a life",
age: "Adults and adolescents", specs: ["gi", "medicine", "surg"],
keywords: ["ulcerative colitis", "UC", "inflammatory bowel disease", "IBD", "bloody diarrhoea", "proctitis", "left-sided colitis", "pancolitis", "Montreal classification", "Mayo score", "Truelove and Witts", "acute severe ulcerative colitis", "ASUC", "toxic megacolon", "mesalazine", "5-ASA", "sulfasalazine", "azathioprine", "infliximab", "ciclosporin", "colectomy", "Travis criteria", "primary sclerosing cholangitis", "colitis surveillance"],
related: ["crohns-adult", "ibd-child", "ibs-adult", "ge-adult", "lgib-adult", "liverabscess-adult", "anaemia-adult", "vte-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Ulcerative colitis is continuous inflammation of the lining of the colon, always starting in the rectum. The patient has bloody diarrhoea with urgency for weeks rather than days. In Bhutan the first job is to be sure it is not amoebic or bacterial dysentery, because steroids given to amoebic colitis can kill. The second job is to recognise acute severe colitis early, because it is a medical and surgical emergency with a clear day-3 decision point.</p>
<div class="glance">
<div><h4>Suspect UC</h4><p>Bloody diarrhoea, urgency or tenesmus for more than 4–6 weeks, or repeated "dysentery" that keeps coming back despite treatment.</p></div>
<div><h4>Exclude first</h4><p>Stool microscopy for <i>E. histolytica</i>, culture, <i>C. difficile</i>; amoebic serology where available; TB and CMV in severe or atypical cases.</p></div>
<div><h4>Confirm</h4><p>Sigmoidoscopy or colonoscopy with biopsies: continuous inflammation from the rectum, chronic architectural change on histology.</p></div>
<div><h4>Mild–moderate</h4><p>${dr("mesalazine")} 2.4–4.8 g/day by mouth plus 1 g rectally; ${dr("sulfasalazine")} where mesalazine is unaffordable. No response in 2–4 weeks: ${dr("prednisolone")} 40 mg daily, tapered over 6–8 weeks.</p></div>
<div><h4>Acute severe (Truelove–Witts)</h4><p>Six or more bloody stools a day plus fever, pulse over 90, Hb under 105 g/L or CRP over 30: admit, give ${dr("hydrocortisone_iv")} 100 mg 6-hourly and ${dr("enoxaparin")}, review on day 3.</p></div>
<div><h4>Maintain</h4><p>5-ASA for life for most patients; ${dr("azathioprine")} for steroid-dependent disease; biologics through specialists. Colonoscopy surveillance from 8 years after onset.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG has no UC section, so this chapter follows BSG 2019, ECCO 2022 and ACG 2025 guidance adapted to local practice. NEML 2025 lists prednisolone, hydrocortisone and methylprednisolone injection, metronidazole, ciprofloxacin, enoxaparin and iron sucrose. It does <b>not</b> list mesalazine, sulfasalazine, azathioprine, budesonide, ciclosporin, infliximab or other biologics. These usually come from India through a specialist, or the patient buys them. Plan maintenance with the patient's cost in mind, and refer early to the JDWNRH gastroenterology service. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>UC is a chronic relapsing <b>inflammatory bowel disease (IBD)</b> limited to the colonic mucosa. It starts at the anal verge and extends proximally without skip areas. It usually begins between 15 and 40 years of age, with a smaller peak after 60. Once rare in Asia, it is now increasingly diagnosed across South Asia as diets and lifestyles change and as colonoscopy becomes more available.${r(1, 2, 3)}</p>
${tbl(["Montreal extent", "Definition", "Why it matters"], [
["E1 — proctitis", "Limited to the rectum", "Treat with suppositories; lower cancer risk"],
["E2 — left-sided", "Distal to the splenic flexure", "Enemas or foam plus oral 5-ASA"],
["E3 — extensive (pancolitis)", "Proximal to the splenic flexure", "Higher risk of severe flares, colectomy and cancer"]])}
${tbl(["Risk factor or association", "Effect"], [
["Family history of IBD", "Risk raised several-fold in first-degree relatives"],
["Ex-smokers", "UC often starts or flares after stopping smoking. Smoking is still never advised, because of its other harms"],
["Previous gastroenteritis, antibiotics", "May trigger onset or flares"],
["NSAIDs", "Can provoke flares"],
["Appendicectomy for appendicitis when young", "Associated with lower UC risk"],
["Primary sclerosing cholangitis (PSC)", "Strongly linked; raises colon cancer risk"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How ulcerative colitis develops and behaves", [
F.s("Genetic susceptibility plus environmental triggers"), F.a,
F.s("Defective mucosal barrier and abnormal immune response to gut bacteria"), F.a,
F.s("Continuous mucosal inflammation from the rectum: crypt abscesses, ulceration, bleeding"), F.a,
F.d("Course"), F.a,
F.b([["Treated to mucosal healing", F.ok("Long remissions; near-normal life")], ["Uncontrolled or extensive", F.e("Acute severe flares, toxic megacolon, colectomy, dysplasia and cancer")]])])}
<p>Inflammation is <b>mucosal</b>, so fistulas and strictures are unusual; a stricture in UC must be biopsied for cancer. About half of patients have a relapse in any given year, and about 10–15% need colectomy within 10 years. Healing the mucosa, not only stopping the bleeding, lowers the risk of relapse, colectomy and cancer.${r(1, 2)}</p>
<h3>Extra-intestinal manifestations</h3>
${tbl(["System", "Manifestation", "Follows bowel activity?"], [
["Joints", "Peripheral arthritis (large joints); axial spondyloarthritis, sacroiliitis", "Peripheral yes; axial no"],
["Skin", "Erythema nodosum; pyoderma gangrenosum", "EN yes; PG partly"],
["Eye", "Episcleritis; anterior uveitis (painful red eye, photophobia — urgent ophthalmology)", "Episcleritis yes; uveitis no"],
["Liver", "Primary sclerosing cholangitis (raised ALP)", "No"],
["Blood", "Iron-deficiency anaemia, anaemia of inflammation; venous thromboembolism (3-fold risk, higher in flares)", "Yes"],
["Bone", "Osteoporosis (steroids, inflammation)", "—"]])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "BSG 2019", "ECCO 2022", "ACG 2025", "This guide and why"], [
["Severity definition for admission", "Modified Truelove–Witts (CRP over 30 instead of ESR)", "Truelove–Witts", "Truelove–Witts or Mayo", "Truelove–Witts with CRP: simple, works at district level " + LB.loc()],
["Oral 5-ASA induction dose", "2–4.8 g/day", "At least 2 g/day; higher for moderate", "At least 2 g/day; 4.8 g for moderate", "2.4–4.8 g/day plus rectal 1 g"],
["Sulfasalazine", "Acceptable alternative", "Acceptable alternative", "Acceptable alternative", "Use where mesalazine is unaffordable (often cheaper in India)"],
["ASUC steroid", "Hydrocortisone 100 mg QDS or methylpred 60 mg/day", "Same", "Methylpred 60 mg/day or equivalent", "Either; both on NEML"],
["Day-3 decision", "Travis criteria", "Assess on day 3; rescue if failing", "Rescue if no response in 3–5 days", "Travis on day 3; surgeon involved from day 1"],
["Rescue therapy", "Infliximab or ciclosporin", "Infliximab or ciclosporin", "Infliximab (ciclosporin in experienced centres)", "Usually colectomy in Bhutan if no drug available; referral early"],
["Bhutan", "No STG section", "—", "—", "International guidance; NEML gaps flagged"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Typical in UC", "Comment"], [
["Bloody diarrhoea with mucus", "Yes — the cardinal symptom", "Proctitis may give fresh blood with normal or hard stools"],
["Urgency, tenesmus, incontinence", "Yes", "Rectal inflammation"],
["Nocturnal stools", "Yes", "Unlike IBS"],
["Crampy lower abdominal pain before stools", "Mild", "Severe pain or tenderness suggests severe colitis, megacolon or perforation"],
["Fever, tachycardia, weight loss", "In moderate to severe disease", "Systemic signs = Truelove–Witts"],
["Pallor, fatigue", "Common", "Iron deficiency"],
["Perianal fistula, abdominal mass, small-bowel symptoms", "No", "Think Crohn's disease or TB"]])}
${box("red", "Danger signs — admit today", `<ul><li>Six or more bloody stools a day with fever, pulse over 90, Hb under 105 g/L or CRP over 30</li><li>Abdominal distension, tenderness, reduced bowel sounds (toxic megacolon or perforation)</li><li>Fall in stool frequency with a worsening patient: possible megacolon, not improvement</li><li>Postural hypotension, low potassium or albumin</li><li>Heavy rectal bleeding</li></ul>`)}
<h3>The typical patient</h3>
<p>A 26-year-old monk from Punakha has had loose stools with blood and mucus six to eight times a day for seven weeks, with urgency and night-time stools. He was given metronidazole twice, without lasting benefit. Three stool samples show no amoebic trophozoites and culture is negative. Pulse 96, temperature 37.4 °C, Hb 112 g/L, CRP 22. Sigmoidoscopy shows continuous granular, friable mucosa from the anal verge to 30 cm, and biopsies show crypt distortion and basal plasmacytosis. <b>This is left-sided UC that meets the criteria for acute severe colitis</b>: six or more bloody stools a day plus a pulse over 90 satisfies modified Truelove–Witts, even though his Hb and CRP are not yet in the severe range. He needs admission for IV steroids and a day-3 review. His family must hear that this is a long-term condition, not a curse or a lasting infection, and that maintenance treatment keeps most people well.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Test", "Why it matters"], [
["<b>Amoebic colitis</b>", "Endemic exposure; flask ulcers; liver abscess", "Fresh stool microscopy (3 samples), antigen or PCR, serology", "<b>Steroids can cause fulminant amoebic colitis</b>; treat with metronidazole first if in doubt"],
["Shigella, Campylobacter, Salmonella", "Acute onset, fever, contacts", "Stool culture", "Usually settles in under 4 weeks"],
["<i>C. difficile</i>", "Recent antibiotics or admission", "Toxin or PCR", "Also complicates UC flares"],
["CMV colitis", "Steroid-refractory flare, immunosuppression", "Biopsy (immunohistochemistry)", "Treat with ganciclovir"],
["<b>Intestinal TB</b>", "Ileocaecal disease, fever, weight loss", "Biopsy for granulomas, AFB, GeneXpert", "See the <a href='#/d/crohns-adult'>Crohn's chapter</a>"],
["Crohn's colitis", "Rectal sparing, skip lesions, perianal disease, small bowel", "Colonoscopy with ileal intubation, imaging", "Different drugs and surgery"],
["Colorectal cancer", "Over 50, change in habit, anaemia", "Colonoscopy", "Never assume a first bleed is UC"],
["Ischaemic colitis", "Older, vascular disease, sudden pain then bleeding", "CT, colonoscopy", "Splenic flexure"],
["Radiation, NSAID, drug colitis", "History", "—", "—"],
["Haemorrhoids, fissure", "Bright blood on the paper, no diarrhoea", "Proctoscopy", "Can coexist"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["CBC, CRP, ESR", "Anaemia, platelets, inflammation", "CRP over 30 = severe criterion", "Essential"],
["Electrolytes, urea, creatinine, albumin", "Dehydration, low K, low albumin (poor prognosis)", "Correct potassium and magnesium", "Essential"],
["LFTs", "PSC (raised ALP), drug toxicity", "—", "Essential"],
["Stool microscopy x3, culture, <i>C. difficile</i>", "Exclude infection — every flare", "Fresh warm sample for amoebae", "Essential"],
["<b>Faecal calprotectin</b>", "Inflammation versus IBS; monitoring", "Over 250 µg/g suggests active disease", "Useful"],
["Flexible sigmoidoscopy with biopsies", "Diagnosis; CMV in severe flares", "Safe in acute severe colitis; full colonoscopy is unsafe then", "Essential"],
["Colonoscopy with ileal intubation", "Extent; exclude Crohn's and TB", "When not severely ill", "Essential (referral)"],
["Plain abdominal X-ray", "Megacolon (transverse colon 5.5 cm or more), mucosal islands, perforation", "On admission and if deteriorating", "ASUC"],
["CT abdomen", "Perforation, abscess, alternative diagnosis", "—", "Selected"],
["Hepatitis B, C, HIV, varicella, TB screen (IGRA or Mantoux, chest X-ray)", "Before immunosuppressants and biologics", "Latent TB is common in Bhutan", "Before treatment"],
["TPMT (and NUDT15) activity", "Before azathioprine", "NUDT15 variants are relatively common in Asian populations", "If available"]])}
` },

{ id: "staging", title: "Severity: acute severe colitis and the day-3 check", html: `
${tbl(["Severity (Truelove–Witts, modified)", "Mild", "Moderate", "Severe"], [
["Bloody stools/day", "Under 4", "4–6", "6 or more <b>plus at least one systemic sign</b>"],
["Pulse", "Under 90", "90 or less", "Over 90"],
["Temperature", "Under 37.5 °C", "37.8 °C or less", "Over 37.8 °C"],
["Haemoglobin", "Over 115 g/L", "105 g/L or more", "Under 105 g/L"],
["CRP (or ESR)", "Normal", "30 mg/L or less", "Over 30 mg/L (ESR over 30)"]])}
<p>The Mayo score (stool frequency, bleeding, endoscopy and physician's assessment, 0–12) is used in clinics and trials. An endoscopic Mayo subscore of 0–1 is the aim of treatment. Use the calculator for admission criteria, admission orders and the day-3 Travis decision.${r(4, 5, 6)}</p>
<div class="calc" data-calc="asuc"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Mild to moderate flares (outpatient)</h3>
${tbl(["Extent", "First line", "If not improving in 2–4 weeks"], [
["Proctitis (E1)", dr("mesalazine") + " 1 g suppository at night", "Add oral 5-ASA or topical steroid; then oral prednisolone"],
["Left-sided (E2)", "Mesalazine 1 g enema or foam daily <b>plus</b> oral mesalazine 2.4–4.8 g/day", dr("prednisolone") + " 40 mg daily"],
["Extensive (E3)", "Oral mesalazine 2.4–4.8 g/day (once daily is as good as divided doses) plus enema", "Prednisolone 40 mg daily"]])}
<p>Where mesalazine is unaffordable, ${dr("sulfasalazine")} 1 g twice daily, increasing to 2 g twice daily, works as well, with more side effects. Give ${dr("folic_acid")}. Combined oral and rectal 5-ASA is better than either alone for left-sided disease.${r(1, 2, 3)}</p>
<h3>B. Steroids done well</h3>
<ul><li>${dr("prednisolone")} 40 mg each morning for 1 week, then reduce by 5 mg a week (6–8 weeks in total); shorter courses relapse early.</li>
<li>Give calcium and vitamin D (${dr("calcium_vitd")}) throughout; check glucose and blood pressure.</li>
<li><b>Steroids are never maintenance treatment.</b> Two courses in a year, or relapse as the dose falls below 15 mg, means steroid-dependent disease: start azathioprine or refer for a biologic.</li>
<li>Oral budesonide MMX 9 mg is an option for mild–moderate disease where available (${dr("budesonide_oral")}).</li></ul>
<h3>C. Acute severe UC (hospital)</h3>
<ol>
<li>Admit under a physician <b>and</b> a surgeon from day 1. Stool chart (number, blood, consistency), daily CBC, CRP, electrolytes and albumin; plain abdominal X-ray.</li>
<li>Stool for culture, <i>C. difficile</i> and amoebae; flexible sigmoidoscopy with biopsies for CMV within 72 hours.</li>
<li>${dr("hydrocortisone_iv")} 100 mg IV 6-hourly or ${dr("methylprednisolone")} 60 mg IV daily. Higher doses give no extra benefit.</li>
<li>${dr("enoxaparin")} 40 mg SC daily — rectal bleeding is not a contraindication; VTE is a major cause of death in flares.</li>
<li>IV fluids, potassium (keep over 4 mmol/L) and magnesium; transfuse to Hb over 80 g/L; nutritional support (oral or enteral, not "nil by mouth" without reason).</li>
<li><b>Stop</b> opioids, loperamide, anticholinergics (dicyclomine) and NSAIDs: they can precipitate megacolon.</li>
<li>Antibiotics only if infection is suspected or before surgery; treat proven amoebiasis or <i>C. difficile</i>.</li>
<li><b>Day 3 (Travis):</b> more than 8 stools a day, or 3–8 stools with CRP over 45 → about 85% will need colectomy in that admission. Start rescue therapy or plan surgery now — do not wait two weeks.${r(6)}</li>
<li>Rescue: ${dr("infliximab")} 5 mg/kg IV (repeat at weeks 2 and 6), or ${dr("ciclosporin")} 2 mg/kg/day IV infusion (check magnesium, cholesterol, renal function, BP). Assess response by days 5–7 of rescue; colectomy if no response.</li>
</ol>
<h3>D. Surgery</h3>
${tbl(["Indication", "Operation"], [
["Failed medical therapy in ASUC, toxic megacolon not improving in 24–72 h, perforation, massive bleeding", "Emergency subtotal colectomy with end ileostomy; rectal stump left (pouch or ileorectal anastomosis later)"],
["Chronic refractory disease, steroid dependence, dysplasia or cancer", "Restorative proctocolectomy with ileal pouch–anal anastomosis (IPAA) in a specialist centre, or panproctocolectomy with permanent ileostomy"]])}
<p>A timely colectomy is a cure for colitis and is not a failure; delayed surgery for ASUC raises the risk of death and complications.${r(7)}</p>
<h3>E. Maintenance</h3>
${tbl(["Situation", "Maintenance", "Notes"], [
["Responded to 5-ASA", dr("mesalazine") + " 2–2.4 g/day oral (or 1 g rectal 3 times a week for proctitis)", "Lowers relapse and probably colorectal cancer risk"],
["Steroid-dependent, or after ciclosporin rescue", dr("azathioprine") + " 2–2.5 mg/kg/day (start 50 mg, full dose in 2–4 weeks)", "Takes 3–4 months to work; check CBC and LFTs"],
["Responded to infliximab or other biologic", "Continue the same agent (± thiopurine)", "Specialist; very costly"]])}
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Treat dysentery once; if bloody diarrhoea persists over 4 weeks or recurs, send stool tests and refer. Never start long-term steroids at this level"],
["District hospital", "Stool tests, CBC, CRP; IV hydrocortisone and enoxaparin for ASUC while arranging transfer; daily stool chart; surgeon review"],
["Referral hospital (JDWNRH, regional)", "Endoscopy and biopsy, 5-ASA and azathioprine prescriptions, colectomy; liaison with Indian centres for biologics"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Key cautions"], [
[dr("mesalazine"), "Induction 2.4–4.8 g/day oral; 1 g PR daily; maintenance 2–2.4 g/day", "Renal function yearly (interstitial nephritis); not on NEML"],
[dr("sulfasalazine"), "Induction 2 g twice daily; maintenance 1 g twice daily", "Sulfa allergy, rash, low sperm count, agranulocytosis; give folic acid; not on NEML"],
[dr("prednisolone"), "40 mg daily, taper by 5 mg/week", "Bone, glucose, infection, mood; NEML"],
[dr("hydrocortisone_iv"), "100 mg IV 6-hourly", "ASUC; NEML"],
[dr("methylprednisolone"), "60 mg IV daily", "ASUC; NEML"],
[dr("azathioprine"), "2–2.5 mg/kg/day", "Myelosuppression (TPMT/NUDT15), pancreatitis, hepatitis, lymphoma and skin cancer risk; CBC weekly for 4 weeks then 3-monthly; not on NEML"],
[dr("infliximab"), "5 mg/kg IV at 0, 2, 6 weeks, then 8-weekly", "Screen TB and hepatitis B first; infusion reactions; not on NEML"],
[dr("ciclosporin"), "2 mg/kg/day IV infusion; then oral", "Seizures if low Mg or cholesterol; nephrotoxic; hypertension; not on NEML"],
[dr("enoxaparin"), "40 mg SC daily", "Thromboprophylaxis in every admitted flare"],
[dr("iron_sucrose"), "200 mg IV per dose up to calculated deficit", "Oral iron is poorly tolerated in active IBD; IV preferred if Hb under 100 g/L"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and adolescents", html: `
<ul><li><b>Pregnancy:</b> the best outcome comes from conceiving in remission. 5-ASA, sulfasalazine (with folic acid 2 mg daily), steroids, azathioprine and anti-TNF drugs can be continued; methotrexate is contraindicated (stop 3–6 months before conception). A flare in pregnancy is treated as outside pregnancy, including flexible sigmoidoscopy and IV steroids.${r(2)}</li>
<li><b>Breastfeeding:</b> 5-ASA, steroids, azathioprine and anti-TNF drugs are compatible.</li>
<li><b>Older adults:</b> exclude ischaemic colitis and cancer; higher risk of infections and VTE with steroids and thiopurines.</li>
<li><b>Adolescents:</b> see the <a href="#/d/ibd-child">paediatric IBD chapter</a>; use PUCAI rather than Truelove–Witts; watch growth and puberty.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Steroid-refractory flare", "Sigmoidoscopy biopsy for CMV; stool for <i>C. difficile</i>; rescue or surgery", "Treatable causes of non-response"],
["Positive amoebic stool in a known UC patient", "Treat with metronidazole then a luminal agent before more steroids", "Amoebiasis is common and worsens colitis"],
["Latent TB before azathioprine or infliximab", "Treat latent TB (TPT) first, at least 3–4 weeks before a biologic", "TB reactivation"],
["Hepatitis B sAg positive", "Antiviral prophylaxis with immunosuppression", "Reactivation"],
["Raised ALP", "MRCP for PSC; yearly colonoscopy if PSC", "Cancer risk"],
["Fever and diarrhoea on azathioprine", "Check CBC for neutropenia", "Myelosuppression"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Key points"], [
["Toxic megacolon", "Colon 5.5 cm or more with systemic toxicity; IV steroids, stop anti-motility drugs, surgery if no improvement within 24–72 h"],
["Perforation", "Mortality up to 50%; steroids mask the signs"],
["Massive haemorrhage", "Rare; colectomy"],
["Venous thromboembolism", "Prophylaxis in all admissions"],
["Colorectal cancer", "Risk rises with duration, extent, PSC and persistent inflammation"],
["Anaemia, osteoporosis, steroid side effects", "Iron, calcium/vitamin D, steroid-sparing therapy"],
["Pouchitis (after IPAA)", "Ciprofloxacin or metronidazole for 2 weeks"]])}
<p>With modern treatment, life expectancy is close to normal. Most patients have mild to moderate disease, and about 1 in 5 will have an acute severe attack at some point.</p>
` },

{ id: "followup", title: "Follow-up, surveillance and counselling", html: `
<ul><li>Review 2–4 weeks after a flare starts and when the steroid taper ends. Aim for no bleeding, normal stool frequency, normal calprotectin, and endoscopic healing at 3–6 months.</li>
<li>Thiopurine: CBC and LFT weekly for 4 weeks, then every 3 months. Mesalazine: creatinine yearly.</li>
<li>Vaccinate before immunosuppression: influenza yearly, pneumococcal, hepatitis B; avoid live vaccines on immunosuppressants.</li>
<li><b>Cancer surveillance:</b> colonoscopy at 8 years from onset for all except proctitis, then every 1–5 years by risk (yearly if PSC, from the time of diagnosis).${r(1)}</li></ul>
${box("green", "What to tell the patient", `<ul><li>"UC is a long-term inflammation of the bowel lining. It is not cancer and not an infection you can pass on. With treatment, most people live normal lives."</li><li>Keep taking the maintenance tablets even when you feel well — stopping is the commonest cause of a flare.</li><li>Avoid painkillers like ibuprofen; paracetamol is safer.</li><li>Do not stop prednisolone suddenly.</li></ul>`)}
${box("red", "Come back the same day if", `<ul><li>Six or more bloody stools a day, fever, fast heartbeat, a swollen or painful abdomen</li><li>Fainting, black stools or heavy bleeding</li><li>Fever or sore throat while taking azathioprine</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "Active ulcerative colitis at colonoscopy", src: "images/uc-endoscopy.jpg", mod: "Colonoscopy", ctx: "Chronic bloody diarrhoea", loc: "Colon", find: "Continuous erythema, granularity, loss of vascular pattern, contact bleeding", signs: "Mucosal inflammation without skip areas", interp: "Typical of active UC; biopsy to confirm and to exclude infection", by: "Sebb (Wikimedia Commons uploader)", page: "https://commons.wikimedia.org/wiki/File:Ulcerative_colitis.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Colectomy specimen in severe ulcerative colitis", src: "images/uc-gross.jpg", mod: "Gross pathology", ctx: "Colectomy for severe colitis", loc: "Colon", find: "Diffuse ulceration with inflammatory pseudopolyps and loss of folds", signs: "Continuous disease", interp: "Shows why severe colitis bleeds and can perforate", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:Severe_ulcerative_colitis.jpg", lic: "CC0" })}
${fig({ title: "Toxic megacolon in ulcerative colitis", src: "images/toxic-megacolon-xr.jpg", mod: "Plain abdominal X-ray", ctx: "Acute severe colitis with distension", loc: "Transverse colon", find: "Dilated, featureless transverse colon with loss of haustra", signs: "Toxic megacolon (5.5 cm or more)", interp: "Surgical emergency if not improving within 24–72 hours of IV steroids", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Toxic_Megacolon_in_Ulcerative_Colitis.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Pyoderma gangrenosum", src: "images/pyoderma-gangrenosum.jpg", mod: "Clinical photograph", ctx: "Painful ulcer in a patient with IBD", loc: "Leg", find: "Ulcer with violaceous, undermined edge", signs: "Extra-intestinal manifestation", interp: "Do not debride (pathergy); treat with steroids and control the colitis", by: "Monopol", page: "https://commons.wikimedia.org/wiki/File:Pyoderma_gangrenosum_01.jpg", lic: "CC BY-SA 3.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Bloody diarrhoea for more than 4 weeks", [
F.s("Stool microscopy x3, culture, C. difficile; CBC, CRP, albumin"), F.a,
F.d("Infection found?"), F.a,
F.b([["Yes", F.s("Treat; recheck after treatment")], ["No", F.s("Sigmoidoscopy or colonoscopy with biopsies")]]), F.a,
F.d("Truelove–Witts severe?"), F.a,
F.b([["Yes", F.e("Admit: IV steroids, LMWH, surgeon, day-3 Travis")], ["No", F.ok("Oral + rectal 5-ASA; prednisolone if no response")]])])}
${F.chart("Acute severe UC: day 3", [
F.s("Day 3 of IV steroids: stool count, CRP"), F.a,
F.d("Over 8 stools, or 3–8 with CRP over 45?"), F.a,
F.b([["Yes", F.e("Infliximab or ciclosporin, or colectomy")], ["No", F.ok("Switch to prednisolone 40 mg; start maintenance")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>"Dysentery" that comes back three times is UC until proven otherwise — scope it.</li>
<li>A falling stool count with a swelling abdomen is megacolon, not recovery.</li>
<li>Give LMWH to a bleeding colitis patient: clots kill more people than the bleeding does.</li>
<li>Do the day-3 check every time — the patient who is "a bit better" on day 10 often goes to emergency surgery in worse condition.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Steroids without stool tests", "Fulminant amoebic colitis", "Three stool samples first"],
["Loperamide or opioids in a flare", "Toxic megacolon", "Stop anti-motility drugs"],
["Long-term prednisolone", "Bone loss, diabetes, infection", "Steroid-sparing therapy"],
["Stopping 5-ASA when well", "Relapse", "Explain maintenance"],
["Full colonoscopy in ASUC", "Perforation", "Flexible sigmoidoscopy only"],
["No surveillance colonoscopy", "Missed cancer", "Book at 8 years"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name the Montreal extents of UC.", "E1 proctitis, E2 left-sided (distal to the splenic flexure), E3 extensive (proximal to the splenic flexure).")}
${qa("Student", "List the modified Truelove–Witts criteria for acute severe UC.", "Six or more bloody stools a day plus at least one of: temperature over 37.8 °C, pulse over 90, Hb under 105 g/L, CRP over 30 mg/L.")}
${qa("Intern/MO", "A patient with ASUC has 5 stools and CRP 60 on day 3. What next?", "Travis criteria met (3–8 stools with CRP over 45): about 85% will need colectomy. Start rescue (infliximab or ciclosporin) or plan colectomy with the surgeon.")}
${qa("Intern/MO", "Why give enoxaparin to a patient with bloody diarrhoea?", "Active IBD raises the VTE risk about threefold, and more during flares. Rectal bleeding is not a contraindication.")}
${qa("Specialist", "What must be checked before ciclosporin?", "Magnesium and cholesterol (low levels raise the risk of seizures), renal function and blood pressure.")}
${qa("Specialist", "When does surveillance colonoscopy start?", "Eight years after symptom onset (except proctitis). With PSC, it starts at diagnosis and is repeated yearly.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Lamb CA, Kennedy NA, Raine T et al. British Society of Gastroenterology consensus guidelines on the management of inflammatory bowel disease in adults. <i>Gut</i> 2019;68:s1–s106. <a href="https://doi.org/10.1136/gutjnl-2019-318484" target="_blank" rel="noopener">doi:10.1136/gutjnl-2019-318484</a></li>
<li id="ref-2">Raine T, Bonovas S, Burisch J et al. ECCO guidelines on therapeutics in ulcerative colitis: medical treatment. <i>J Crohns Colitis</i> 2022;16:2–17. <a href="https://doi.org/10.1093/ecco-jcc/jjab178" target="_blank" rel="noopener">doi:10.1093/ecco-jcc/jjab178</a></li>
<li id="ref-3">Rubin DT, Ananthakrishnan AN, Siegel CA et al. ACG clinical guideline update: ulcerative colitis in adults. <i>Am J Gastroenterol</i> 2025;120:1187–1224. <a href="https://doi.org/10.14309/ajg.0000000000003463" target="_blank" rel="noopener">doi:10.14309/ajg.0000000000003463</a></li>
<li id="ref-4">Truelove SC, Witts LJ. Cortisone in ulcerative colitis: final report on a therapeutic trial. <i>BMJ</i> 1955;2:1041–1048. <a href="https://doi.org/10.1136/bmj.2.4947.1041" target="_blank" rel="noopener">doi:10.1136/bmj.2.4947.1041</a></li>
<li id="ref-5">Satsangi J, Silverberg MS, Vermeire S, Colombel JF. The Montreal classification of inflammatory bowel disease. <i>Gut</i> 2006;55:749–753. <a href="https://doi.org/10.1136/gut.2005.082909" target="_blank" rel="noopener">doi:10.1136/gut.2005.082909</a></li>
<li id="ref-6">Travis SP, Farrant JM, Ricketts C et al. Predicting outcome in severe ulcerative colitis. <i>Gut</i> 1996;38:905–910. <a href="https://doi.org/10.1136/gut.38.6.905" target="_blank" rel="noopener">doi:10.1136/gut.38.6.905</a></li>
<li id="ref-7">Spinelli A, Bonovas S, Burisch J et al. ECCO guidelines on therapeutics in ulcerative colitis: surgical treatment. <i>J Crohns Colitis</i> 2022;16:179–189. <a href="https://doi.org/10.1093/ecco-jcc/jjab177" target="_blank" rel="noopener">doi:10.1093/ecco-jcc/jjab177</a></li>
<li id="ref-8">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG", "<span class='pass'>Checked</span>", "No UC section"],
["Guidelines", "<span class='pass'>Checked</span>", "BSG 2019, ECCO 2022, ACG 2025"],
["NEML gaps", "<span class='flag'>Gap</span>", "Mesalazine, sulfasalazine, azathioprine, budesonide, ciclosporin, biologics not listed"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "4 licensed Commons images"]], "qc")}
` }
]
});
