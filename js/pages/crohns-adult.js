/* Crohn's disease — adults (with intestinal TB versus Crohn's) */
registerPage({
id: "crohns-adult",
title: "Crohn's Disease — Adults (and Intestinal TB versus Crohn's)",
subtitle: "Recognising transmural, patchy inflammation anywhere from mouth to anus; in Bhutan, separating Crohn's disease from intestinal tuberculosis before any steroid or biologic; inducing remission with budesonide, steroids or nutrition; maintaining with thiopurines, methotrexate or anti-TNF; and managing strictures, abscesses and perianal fistulas",
age: "Adults and adolescents", specs: ["gi", "medicine", "surg", "id"],
keywords: ["Crohn's disease", "Crohn disease", "CD", "inflammatory bowel disease", "IBD", "terminal ileitis", "ileocaecal", "intestinal tuberculosis", "abdominal TB", "ITB versus Crohn's", "anti-tuberculosis therapy trial", "Montreal classification", "Harvey-Bradshaw index", "perianal fistula", "stricture", "budesonide", "azathioprine", "methotrexate", "infliximab", "adalimumab", "exclusive enteral nutrition", "skip lesions", "granuloma"],
related: ["uc-adult", "ibd-child", "ibs-adult", "tb-adult", "anaemia-adult", "weightloss-adult", "acute-abdomen-adult", "nutrition-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Crohn's disease is chronic inflammation through the full thickness of the bowel wall. It can affect any part of the gut, but most often the terminal ileum, and it comes in patches. It causes pain, diarrhoea, weight loss, strictures, fistulas and abscesses. In South Asia its great mimic is intestinal tuberculosis, which looks the same in the clinic, on CT and at colonoscopy. Giving steroids or anti-TNF drugs to undiagnosed TB can be fatal, and so can giving months of anti-TB treatment to Crohn's disease that is getting worse. Careful separation of the two is the core skill.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Chronic diarrhoea, right lower abdominal pain, weight loss, anaemia; mouth ulcers; perianal fistula or abscess; young adult.</p></div>
<div><h4>First rule out TB</h4><p>Chest X-ray, biopsy for granulomas, AFB, GeneXpert and culture; CT enterography; look for necrotic nodes. Use the ITB-vs-CD tool.</p></div>
<div><h4>Confirm</h4><p>Ileocolonoscopy with multiple biopsies; CT or MR enterography for small bowel and complications.</p></div>
<div><h4>Induce</h4><p>Mild ileocaecal: ${dr("budesonide_oral")} 9 mg daily. Moderate–severe: ${dr("prednisolone")} 40 mg daily tapered. Severe: ${dr("hydrocortisone_iv")} 100 mg 6-hourly after abscess is excluded.</p></div>
<div><h4>Maintain</h4><p>${dr("azathioprine")} 2–2.5 mg/kg or ${dr("methotrexate")} 25 mg weekly IM/SC; ${dr("infliximab")} for high-risk or refractory disease. 5-ASA does not work in Crohn's.</p></div>
<div><h4>Stop smoking</h4><p>The single most effective thing the patient can do: smoking doubles relapse and surgery rates.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG has no Crohn's section. The Bhutan Integrated TB Guidelines 2024 treat abdominal TB with the standard 2HRZE/4HR regimen, and specify that abdominal TB is excluded from the shorter 4-month regimen. NEML 2025 lists prednisolone, hydrocortisone, methylprednisolone, methotrexate tablets, metronidazole, ciprofloxacin and first-line TB drugs. It does <b>not</b> list budesonide, azathioprine, injectable methotrexate for IBD, infliximab, adalimumab or other biologics. Because latent TB is common in Bhutan, screen for it before any immunosuppression. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Crohn's disease (CD) is a chronic relapsing IBD with <b>transmural</b>, <b>discontinuous</b> (skip) inflammation and, in about a third of patients, non-caseating granulomas. It often begins between 15 and 35 years of age. Its incidence is rising in South Asia, where the ratio of UC to CD is higher than in the West.${r(1, 2, 3)}</p>
${tbl(["Montreal category", "Options"], [
["Age at diagnosis (A)", "A1 16 years or under; A2 17–40; A3 over 40"],
["Location (L)", "L1 ileal; L2 colonic; L3 ileocolonic; L4 upper GI (modifier, added to L1–L3)"],
["Behaviour (B)", "B1 inflammatory (non-stricturing, non-penetrating); B2 stricturing; B3 penetrating (fistula, abscess); add 'p' for perianal disease"]])}
${tbl(["Risk factor", "Effect"], [
["Smoking", "Raises risk and doubles relapse and surgery"],
["Family history", "Strongest risk; NOD2 and other genes"],
["Diet low in fibre, high in processed food; antibiotics in childhood", "Possible contributors"],
["NSAIDs", "Flares"]])}
<p><b>High-risk features</b> that predict a disabling course and justify earlier immunomodulator or biologic treatment: diagnosis under 30, extensive small-bowel disease, perianal disease, deep ulcers, early need for steroids, stricturing or penetrating behaviour, and previous resection.${r(2, 3)}</p>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From inflammation to complications", [
F.s("Genetic susceptibility (e.g. NOD2), barrier defect, abnormal response to gut bacteria"), F.a,
F.s("Transmural, patchy inflammation with granulomas"), F.a,
F.d("Over years, without control"), F.a,
F.b([["Fibrosis", F.e("Stricture, obstruction (B2)")], ["Deep fissuring", F.e("Fistula, abscess (B3)")]]), F.a,
F.s("Resection, short bowel, malabsorption, growth failure")])}
<p>Most patients start with inflammatory disease. Over 10 years about half develop strictures or fistulas, and about half need surgery, with a high rate of recurrence at the anastomosis. Early control of inflammation changes this course.${r(1, 2)}</p>
${tbl(["Feature", "Crohn's disease", "Ulcerative colitis"], [
["Distribution", "Mouth to anus; skip lesions; terminal ileum commonest", "Rectum upwards, continuous"],
["Depth", "Transmural", "Mucosal"],
["Rectum", "Often spared", "Always involved"],
["Perianal disease, fistulas", "Common", "Rare"],
["Granulomas", "About 30%", "No"],
["Endoscopy", "Aphthous and deep serpiginous or longitudinal ulcers, cobblestoning", "Diffuse granular, friable mucosa"],
["Smoking", "Harmful", "Ex-smokers at higher risk"],
["Surgery", "Not curative", "Colectomy curative"]])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "BSG 2019", "ECCO 2024", "ACG 2025", "This guide and why"], [
["5-ASA for Crohn's", "Not recommended", "Not recommended", "Not recommended", "Do not use; saves money for effective drugs"],
["Mild ileocaecal disease", "Budesonide 9 mg", "Budesonide", "Budesonide", "Budesonide where available; otherwise prednisolone"],
["Early biologic (top-down) in high-risk", "Consider", "Supported (PROFILE trial)", "Supported", "Specialist decision; cost and TB are the barriers in Bhutan"],
["Methotrexate", "25 mg weekly IM/SC; 15 mg maintenance", "For maintenance", "Option", "Oral MTX (NEML) is less proven but used when injection is unavailable"],
["ITB versus CD", "Not a major issue", "Brief", "Brief", "Major issue in Asia; Asia-Pacific and Indian approach followed " + LB.loc()],
["Bhutan", "No STG section", "—", "—", "Bhutan TB guideline for abdominal TB"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Pattern", "Presentation"], [
["Ileal or ileocaecal (L1)", "Right iliac fossa pain, mass, diarrhoea (often non-bloody), weight loss; may mimic appendicitis; subacute obstruction after meals"],
["Colonic (L2)", "Bloody diarrhoea like UC; perianal disease; rectal sparing"],
["Upper GI (L4)", "Dyspepsia, vomiting, aphthous mouth ulcers"],
["Perianal", "Skin tags, fissures off the midline, fistulas, recurrent abscesses — may precede bowel symptoms by years"],
["Systemic", "Fatigue, fever, anaemia, low albumin, delayed growth and puberty in adolescents"],
["Extra-intestinal", "Arthritis, erythema nodosum, pyoderma gangrenosum, uveitis, gallstones, oxalate kidney stones"]])}
${box("red", "Danger signs — admit today", `<ul><li>Colicky pain with vomiting and distension (obstruction)</li><li>Fever, tender mass, rigors (abscess)</li><li>Peritonitis (perforation)</li><li>Severe flare: over 6 stools a day, fever, tachycardia, weight loss, low albumin</li><li>Painful perianal swelling (perianal abscess)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 24-year-old woman from Trashigang has had right lower abdominal pain, three or four loose stools a day and 7 kg of weight loss over 8 months, with two painful perianal abscesses drained in the past year. She has no TB contact, and her chest X-ray is normal. Hb 98 g/L, CRP 38, albumin 30 g/L, calprotectin 820 µg/g. Colonoscopy shows a stenosed ileocaecal valve with longitudinal ulcers in the terminal ileum and patchy aphthous ulcers in the colon. Biopsies show small, non-caseating granulomas; AFB smear and GeneXpert are negative. CT enterography shows a 20 cm segment of thickened terminal ileum with a comb sign and no lymph node of 1 cm or more. <b>Crohn's disease is strongly favoured over TB</b>: perianal disease, longitudinal ulcers, a long segment and no large or necrotic nodes. She needs nutritional support, iron, a prednisolone taper after any abscess is excluded, stopping smoking if she smokes, and referral for maintenance treatment.</p>
` },

{ id: "ddx", title: "Intestinal TB versus Crohn's disease, and other differentials", html: `
<p>In South Asia, the ileocaecal TB-versus-CD question matters more than any other in this disease. No single test separates them, apart from proof of TB. Use features in combination, and use an ATT trial only when the diagnosis is still uncertain.${r(4, 5)}</p>
${tbl(["Feature", "Favours intestinal TB", "Favours Crohn's"], [
["History", "Fever, night sweats, ascites, TB contact, short history", "Long history, perianal disease, extra-intestinal features, haematochezia"],
["Chest X-ray", "Active or healed pulmonary TB (in about a third)", "Normal"],
["Endoscopy", "<b>Transverse</b> ulcers, patulous (open) ileocaecal valve, nodularity, fewer than 4 segments", "<b>Longitudinal</b> ulcers, aphthae, cobblestoning, skip lesions, rectal or sigmoid involvement, 4 or more segments"],
["Histology", "<b>Caseating</b> (proof), confluent, large (over 400 µm) or many granulomas; AFB; ulcers lined by epithelioid histiocytes", "Small, sparse, discrete non-caseating granulomas; focal crypt changes; granulomas away from ulcers"],
["Microbiology", "AFB smear, GeneXpert, culture or TB-PCR positive (high specificity, low sensitivity)", "Negative (does not exclude TB)"],
["CT enterography", "Short segment, ileocaecal involvement, <b>necrotic lymph nodes</b> (almost exclusive to TB), nodes 1 cm or more, ascites", "Long segment, skip lesions, <b>comb sign</b> (engorged vasa recta), fibrofatty proliferation, asymmetrical wall thickening"],
["IGRA or Mantoux", "Supportive only — positive in many Bhutanese adults with latent TB", "Negative IGRA mildly favours CD"]])}
<div class="calc" data-calc="itbcd"></div>
<h3>The ATT trial: how to do it safely</h3>
<ul><li>Use it only when TB is still possible after the full work-up. Give standard ${dr("isoniazid")}–${dr("rifampicin")}-based treatment (2HRZE) and <b>no steroids</b>.</li>
<li>Assess at 2–3 months: TB patients improve clinically. Some CD patients feel better too, so do not rely on symptoms alone.</li>
<li>Repeat colonoscopy at 2–6 months: <b>mucosal healing</b> (ulcers gone) supports TB, and the patient completes 6 months of ATT. Persistent ulcers mean CD — stop ATT and treat as Crohn's.</li>
<li>Worsening on ATT, or a new fistula, points to CD (or drug-resistant TB: send cultures).</li></ul>
${tbl(["Other differential", "Clue"], [
["Ulcerative colitis", "Continuous from rectum; no small bowel"],
["Infective ileitis (Yersinia, Salmonella)", "Acute, self-limiting"],
["Lymphoma", "Mass, nodes, B symptoms; biopsy"],
["Appendicitis or appendix abscess", "Acute RIF pain; CT"],
["NSAID enteropathy", "Drug history"],
["Behçet's disease", "Oral and genital ulcers"],
["Coeliac disease, IBS", "Serology; no inflammation"],
["Amoebic typhlitis (caecal)", "Stool, serology; responds to metronidazole"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["CBC, CRP, ESR, albumin, electrolytes, LFTs", "Activity, anaemia, nutrition", "—", "Essential"],
["Iron studies, B12, folate, vitamin D, zinc", "Malabsorption, ileal disease or resection", "—", "Essential"],
["Stool microscopy, culture, <i>C. difficile</i>", "Exclude infection", "—", "Essential"],
["Faecal calprotectin", "Activity; IBS vs IBD", "Ileal disease can give modest values", "Useful"],
["Chest X-ray, sputum if cough, IGRA or Mantoux", "TB", "Before steroids and biologics", "Essential"],
["Ileocolonoscopy with at least 2 biopsies from each segment, including normal areas", "Diagnosis; TB vs CD", "Send biopsies for AFB, GeneXpert and culture as well as histology", "Essential"],
["CT or MR enterography", "Small-bowel extent, strictures, fistulas, abscess, nodes", "MRE avoids radiation in the young", "Essential (referral)"],
["MRI pelvis", "Perianal fistula mapping", "Before surgery", "Perianal disease"],
["Upper GI endoscopy", "Upper GI symptoms", "—", "Selected"],
["HBV, HCV, HIV, varicella serology; TPMT", "Before immunosuppression", "—", "Before treatment"]])}
` },

{ id: "staging", title: "Activity: Harvey–Bradshaw index", html: `
<p>The Harvey–Bradshaw index (HBI) is a simple bedside score: general well-being, abdominal pain, number of liquid stools, abdominal mass and complications. Under 5 means remission, 5–7 mild, 8–16 moderate and over 16 severe. The CDAI is used mainly in trials.${r(6)}</p>
<div class="calc" data-calc="hbi"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Everyone</h3>
<ul><li><b>Stop smoking</b> — support, nicotine replacement where available.</li>
<li>Nutrition: dietitian, correct iron (IV ${dr("iron_sucrose")} if Hb under 100 g/L or intolerant), ${dr("vitamin_b12")} after ileal resection or disease, vitamin D and calcium.</li>
<li>Avoid NSAIDs; use paracetamol. Avoid opioids for chronic pain.</li>
<li>Vaccinate before immunosuppression; screen and treat latent TB and hepatitis B.</li></ul>
<h3>B. Inducing remission</h3>
${tbl(["Disease", "Treatment", "Notes"], [
["Mild ileocaecal", dr("budesonide_oral") + " 9 mg daily for 8 weeks, then taper", "Fewer side effects than prednisolone; not on NEML"],
["Moderate–severe or colonic", dr("prednisolone") + " 40 mg daily, reduce by 5 mg/week over 8 weeks", "Exclude abscess and TB first; add calcium and vitamin D"],
["Severe (admitted)", dr("hydrocortisone_iv") + " 100 mg 6-hourly or " + dr("methylprednisolone") + " 60 mg daily; " + dr("enoxaparin") + "; fluids; nutrition", "CT to exclude abscess before steroids"],
["Alternative or adjunct", "Exclusive enteral nutrition (polymeric formula only, 6–8 weeks)", "First line in children; works in adults who can manage it"],
["Steroid-refractory or high-risk", dr("infliximab") + " 5 mg/kg at weeks 0, 2, 6 (with azathioprine) or adalimumab", "Specialist; TB and HBV screening first"]])}
<h3>C. Maintaining remission</h3>
${tbl(["Drug", "Dose", "Notes"], [
[dr("azathioprine"), "2–2.5 mg/kg/day (mercaptopurine 1–1.5 mg/kg)", "Check TPMT/NUDT15; CBC and LFTs weekly for 4 weeks, then 3-monthly"],
[dr("methotrexate"), "25 mg weekly IM/SC for 16 weeks, then 15 mg weekly; folic acid 5 mg weekly on another day", "Teratogenic (stop 3–6 months before conception); LFTs; oral MTX is less proven"],
[dr("infliximab") + " / adalimumab", "Infliximab 5 mg/kg 8-weekly; adalimumab 40 mg SC every 2 weeks", "Combination with thiopurine works better (SONIC)"],
["Ustekinumab, vedolizumab, risankizumab, upadacitinib", "Specialist", "For anti-TNF failure; not available in Bhutan"]])}
<p>Steroids and 5-ASA are not maintenance drugs in Crohn's disease. The aim is healing on colonoscopy or imaging and a normal calprotectin, not just fewer symptoms.${r(2, 3)}</p>
<h3>D. Complications</h3>
${tbl(["Complication", "Management"], [
["Intra-abdominal abscess", "Antibiotics (" + dr("ciprofloxacin") + " + " + dr("metronidazole") + ", or ceftriaxone + metronidazole), percutaneous or surgical drainage <b>before</b> steroids or anti-TNF"],
["Inflammatory stricture with obstruction", "Nil by mouth, NG drip-and-suck, IV steroids"],
["Fibrotic stricture", "Endoscopic balloon dilatation (short, under 5 cm) or surgery (limited resection, strictureplasty)"],
["Perianal abscess", "Incision and drainage the same day; examination under anaesthesia; avoid fistulotomy that cuts the sphincter"],
["Perianal fistula", "MRI pelvis; loose seton; ciprofloxacin or metronidazole; anti-TNF (infliximab) ± thiopurine"],
["Enterocutaneous or enterovesical fistula", "Nutrition, control sepsis, specialist surgery"]])}
<h3>E. Surgery</h3>
<ul><li>Indications: stricture with obstruction, abscess or fistula not responding, failure of medical therapy, dysplasia, bleeding, perforation; limited ileocaecal disease (early resection is a reasonable alternative to a biologic — LIR!C trial).</li>
<li>Bowel-sparing: resect only diseased bowel; strictureplasty for multiple short strictures.</li>
<li>After resection: stop smoking; consider ${dr("metronidazole")} for 3 months; colonoscopy at 6–12 months (Rutgeerts score) and thiopurine or anti-TNF for high-risk patients.</li></ul>
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Weight loss with chronic diarrhoea or RIF pain: sputum or chest X-ray for TB, refer. Drain perianal abscesses and refer recurrent ones"],
["District hospital", "Bloods, chest X-ray, ultrasound for abscess or ascites; refer for colonoscopy and CT before any steroid; treat confirmed TB per national guideline"],
["Referral hospital", "Colonoscopy with biopsies for AFB, GeneXpert and culture; CT enterography; ITB-vs-CD decision; start steroids or ATT trial; azathioprine; surgery; liaise with Indian centres for biologics"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Key cautions"], [
[dr("budesonide_oral"), "9 mg once daily for 8 weeks, then taper", "Ileocaecal only; not on NEML"],
[dr("prednisolone"), "40 mg daily; taper over 8 weeks", "Not maintenance; NEML"],
[dr("hydrocortisone_iv"), "100 mg IV 6-hourly", "Exclude abscess"],
[dr("azathioprine"), "2–2.5 mg/kg/day", "Myelosuppression; not on NEML"],
[dr("methotrexate"), "25 mg weekly IM/SC, then 15 mg weekly", "Teratogenic; folic acid; LFTs; oral tablets on NEML"],
[dr("infliximab"), "5 mg/kg at 0, 2, 6 weeks, then 8-weekly", "TB and HBV screening; not on NEML"],
[dr("metronidazole"), "400 mg three times daily (perianal, post-operative)", "Neuropathy if prolonged"],
[dr("ciprofloxacin"), "500 mg twice daily", "Perianal disease, abscess"],
[dr("vitamin_b12"), "1 mg IM every 3 months after ileal resection", "Lifelong if over 20 cm ileum lost"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and adolescents", html: `
<ul><li><b>Pregnancy:</b> plan conception in remission. Azathioprine, steroids and anti-TNF drugs can continue; stop methotrexate 3–6 months before conception. Active perianal disease may favour caesarean birth.${r(2)}</li>
<li><b>Older adults (A3):</b> mostly colonic, less aggressive disease; more infections and cancers with immunosuppression.</li>
<li><b>Adolescents:</b> growth and puberty are key outcomes; exclusive enteral nutrition first line. See the <a href="#/d/ibd-child">paediatric IBD chapter</a>.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Latent TB (IGRA positive) before biologic", "TB preventive therapy and start the biologic after at least 3–4 weeks", "Anti-TNF reactivates TB"],
["Diagnosed CD develops fever and ascites on infliximab", "Investigate for disseminated or peritoneal TB", "Reactivation"],
["HIV", "TB much commoner; infections; specialist care", "—"],
["Hepatitis B positive", "Antiviral prophylaxis", "Reactivation"],
["Watery diarrhoea after ileal resection", "Bile-acid diarrhoea: cholestyramine trial", "Short resections"],
["Kidney stones", "Oxalate stones from fat malabsorption: low-oxalate diet, calcium with meals", "—"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Notes"], [
["Strictures, obstruction", "Commonest reason for surgery"],
["Fistulas and abscesses", "Penetrating disease; perianal in up to a third"],
["Malnutrition, anaemia, B12 deficiency", "Ileal disease or resection"],
["Short bowel syndrome", "After repeated resections"],
["Colorectal and small-bowel cancer", "Colonic CD has a risk similar to UC of the same extent — surveillance at 8 years"],
["Osteoporosis, VTE, gallstones, kidney stones", "—"],
["Drug harms", "Infection, TB reactivation, lymphoma (thiopurines), skin cancer"]])}
<p>CD is lifelong, but most patients work and have families. Modern treatment aims at mucosal healing to reduce strictures and surgery.</p>
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Review every 3–6 months in remission: HBI, weight, CBC, CRP, albumin, calprotectin, drug monitoring.</li>
<li>Reassess with colonoscopy or MRE 6–12 months after a change in treatment.</li>
<li>Colonoscopic surveillance from 8 years if more than a third of the colon is involved.</li>
<li>Bone density if steroids used for more than 3 months.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Crohn's disease is a long-term inflammation of the bowel. It is not infectious and not cancer. It can be controlled."</li><li>Stopping smoking is as powerful as a strong medicine.</li><li>Do not take steroids from the pharmacy on your own — they are dangerous if this is TB.</li><li>Keep taking the maintenance medicine and come for blood tests.</li></ul>`)}
${box("red", "Come back the same day if", `<ul><li>Vomiting with swelling or colicky pain</li><li>Fever with abdominal or anal pain or swelling</li><li>Fever or sore throat on azathioprine; cough or fever on infliximab</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "Serpiginous ulcer in Crohn's disease", src: "images/cd-serpiginous-ulcer.jpg", mod: "Colonoscopy", ctx: "Chronic diarrhoea and weight loss", loc: "Colon or ileum", find: "Deep, snake-like ulcer with normal surrounding mucosa", signs: "Skip pattern, deep ulceration", interp: "Typical of CD rather than UC; biopsy for granulomas and TB tests", by: "Jiri Pekhart (Wikimedia Commons uploader)", page: "https://commons.wikimedia.org/wiki/File:CD_serpiginous_ulcer.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Non-caseating granuloma in colonic mucosa", src: "images/cd-granuloma.jpg", mod: "Histopathology (H&E)", ctx: "Colonic biopsy", loc: "Lamina propria", find: "Compact epithelioid granuloma without central caseation", signs: "Granulomatous inflammation", interp: "Supports Crohn's disease; caseation or confluent large granulomas would favour TB", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:Histopathology_of_granuloma_of_colonic_mucosa.jpg", lic: "CC0" })}
${fig({ title: "Tuberculosis of the ileum", src: "images/itb-ileum.jpg", mod: "Gross pathology", ctx: "Resected ileum", loc: "Ileum", find: "Transverse (circumferential) ulcers and thickened wall", signs: "Intestinal TB", interp: "Transverse ulcers favour TB; longitudinal ulcers favour CD", by: "Department of Pathology, Calicut Medical College", page: "https://commons.wikimedia.org/wiki/File:Tuberculosis_of_ileum.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Suspected ileocaecal Crohn's disease in Bhutan", [
F.s("Chest X-ray, CBC, CRP, albumin, calprotectin"), F.a,
F.s("Colonoscopy: biopsies for histology + AFB, GeneXpert, culture; CT enterography"), F.a,
F.d("TB proven (caseation, AFB, GeneXpert, culture) or necrotic nodes?"), F.a,
F.b([["Yes", F.s("Treat TB: 2HRZE/4HR")], ["No", F.d("Features strongly favour CD?")]]), F.a,
F.b([["Yes", F.ok("Treat as Crohn's: steroids/budesonide, then maintenance")], ["Uncertain", F.e("ATT trial; repeat colonoscopy at 2–6 months")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>In Bhutan, <b>every</b> ileocaecal ulcer biopsy should go for AFB, GeneXpert and culture, not just histology.</li>
<li>Perianal disease, longitudinal ulcers and a comb sign point strongly to Crohn's.</li>
<li>A patient who improves on ATT still needs a repeat colonoscopy before being called TB.</li>
<li>Drain the abscess before you give the steroid.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Steroids without excluding TB", "Disseminated TB", "Biopsy for TB, chest X-ray"],
["Empirical ATT without follow-up colonoscopy", "Missed Crohn's, months of delay", "Endoscopic reassessment"],
["5-ASA for Crohn's", "Ineffective, costly", "Use steroids, immunomodulators"],
["Long-term steroids", "Harms", "Steroid-sparing therapy"],
["Fistulotomy for complex Crohn's fistula", "Incontinence", "Seton and medical therapy"],
["Not stopping smoking", "Relapse, surgery", "Counsel at every visit"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name three differences between Crohn's disease and UC.", "CD is transmural, patchy, can involve any part of the gut, often spares the rectum and causes fistulas. UC is mucosal, continuous from the rectum and limited to the colon.")}
${qa("Intern/MO", "Which CT finding is almost exclusive to intestinal TB?", "Necrotic (centrally hypodense) mesenteric lymph nodes.")}
${qa("Intern/MO", "Why must an abscess be excluded before steroids?", "Steroids mask sepsis and impair healing. The abscess must be drained and treated with antibiotics first.")}
${qa("Specialist", "How do you judge an ATT trial?", "By clinical response at 2–3 months and, crucially, mucosal healing on repeat colonoscopy. Persistent ulcers mean CD (or resistant TB).")}
${qa("Specialist", "What maintenance options exist for Crohn's disease?", "Thiopurines, methotrexate and anti-TNF agents (with ustekinumab, vedolizumab and others as specialist options). Not steroids or 5-ASA.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Lamb CA, Kennedy NA, Raine T et al. British Society of Gastroenterology consensus guidelines on the management of inflammatory bowel disease in adults. <i>Gut</i> 2019;68:s1–s106. <a href="https://doi.org/10.1136/gutjnl-2019-318484" target="_blank" rel="noopener">doi:10.1136/gutjnl-2019-318484</a></li>
<li id="ref-2">Gordon H, Minozzi S, Kopylov U et al. ECCO guidelines on therapeutics in Crohn's disease: medical treatment. <i>J Crohns Colitis</i> 2024;18:1531–1555. <a href="https://doi.org/10.1093/ecco-jcc/jjae091" target="_blank" rel="noopener">doi:10.1093/ecco-jcc/jjae091</a></li>
<li id="ref-3">Lichtenstein GR, Loftus EV, Afzali A et al. ACG clinical guideline: management of Crohn's disease in adults. <i>Am J Gastroenterol</i> 2025;120:1225–1264. <a href="https://doi.org/10.14309/ajg.0000000000003465" target="_blank" rel="noopener">doi:10.14309/ajg.0000000000003465</a></li>
<li id="ref-4">Kedia S, Das P, Madhusudhan KS et al. Differentiating Crohn's disease from intestinal tuberculosis. <i>World J Gastroenterol</i> 2019;25:418–432. <a href="https://doi.org/10.3748/wjg.v25.i4.418" target="_blank" rel="noopener">doi:10.3748/wjg.v25.i4.418</a></li>
<li id="ref-5">Ministry of Health, Bhutan. National Guidelines for Integrated Management of Tuberculosis, 2024 (regimens, Table 5.1).</li>
<li id="ref-6">Harvey RF, Bradshaw JM. A simple index of Crohn's-disease activity. <i>Lancet</i> 1980;1:514. <a href="https://doi.org/10.1016/S0140-6736(80)92767-1" target="_blank" rel="noopener">doi:10.1016/S0140-6736(80)92767-1</a></li>
<li id="ref-7">Satsangi J, Silverberg MS, Vermeire S, Colombel JF. The Montreal classification of inflammatory bowel disease. <i>Gut</i> 2006;55:749–753. <a href="https://doi.org/10.1136/gut.2005.082909" target="_blank" rel="noopener">doi:10.1136/gut.2005.082909</a></li>
<li id="ref-8">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG / TB guideline", "<span class='pass'>Checked</span>", "No CD section; abdominal TB 2HRZE/4HR"],
["Guidelines", "<span class='pass'>Checked</span>", "BSG 2019, ECCO 2024, ACG 2025, Kedia 2019"],
["NEML gaps", "<span class='flag'>Gap</span>", "Budesonide, azathioprine, injectable MTX, biologics not listed"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "3 licensed Commons images"]], "qc")}
` }
]
});
