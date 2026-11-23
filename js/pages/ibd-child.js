/* Inflammatory bowel disease — children and adolescents */
registerPage({
id: "ibd-child",
title: "Inflammatory Bowel Disease (Crohn's and UC) — Children and Adolescents",
subtitle: "Recognising IBD when it shows up as poor growth, delayed puberty, anaemia or perianal disease; excluding infection and TB; using exclusive enteral nutrition first for Crohn's; dosing steroids and 5-ASA by weight; running acute severe colitis with PUCAI; and protecting growth, bones, schooling and mental health",
age: "Children and adolescents", specs: ["paeds", "gi"],
keywords: ["paediatric IBD", "pediatric inflammatory bowel disease", "Crohn's disease child", "ulcerative colitis child", "very early onset IBD", "VEO-IBD", "exclusive enteral nutrition", "EEN", "PUCAI", "wPCDAI", "Paris classification", "growth failure", "delayed puberty", "acute severe colitis child", "mesalazine child dose", "prednisolone child dose", "azathioprine child", "infliximab child", "adolescent transition"],
related: ["uc-adult", "crohns-adult", "ftt-child", "anaemia-child", "tb-child", "ge-child", "constipation-child", "sam-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">About a quarter of people with IBD fall ill before they turn 20. In children the disease is often more extensive and more aggressive than in adults, and it can quietly steal height, puberty and schooling. A child with poor growth, anaemia, raised inflammatory markers, chronic diarrhoea or abdominal pain, or perianal disease needs to be thought of as possible IBD. In Bhutan they also need assessing for TB, and they should reach a paediatric gastroenterology service early.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Chronic diarrhoea (bloody or not), pain, weight loss, <b>falling height centiles</b>, delayed puberty, anaemia, mouth ulcers, perianal tags or fistula.</p></div>
<div><h4>Screen</h4><p>CBC, CRP, ESR, albumin, ferritin; faecal calprotectin; stool for infection and parasites; TB assessment.</p></div>
<div><h4>Confirm</h4><p>Upper endoscopy <b>and</b> ileocolonoscopy with biopsies under anaesthesia; MR enterography (no radiation).</p></div>
<div><h4>Crohn's induction</h4><p>Exclusive enteral nutrition (formula only) for 6–8 weeks: as effective as steroids, better for healing and growth. Steroids (${dr("prednisolone")} 1 mg/kg, max 40 mg) if EEN fails or is refused.</p></div>
<div><h4>UC induction</h4><p>${dr("mesalazine")} 60–80 mg/kg/day orally (max 4.8 g) plus rectal 25 mg/kg (max 1 g); prednisolone if moderate–severe.</p></div>
<div><h4>Acute severe colitis</h4><p>PUCAI 65 or more: admit, ${dr("methylprednisolone")} 1–1.5 mg/kg/day IV (max 60 mg), enoxaparin in adolescents with risk factors, PUCAI daily; day 3 over 45 → plan rescue; day 5 over 65 → rescue therapy.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan has no national paediatric IBD guidance, so this chapter follows ECCO–ESPGHAN 2020 (Crohn's) and ESPGHAN–ECCO 2018 (UC). NEML 2025 lists prednisolone, methylprednisolone and hydrocortisone injection, metronidazole and iron. It does not list mesalazine, azathioprine, budesonide, biologics or specialised polymeric formulas. As a practical stand-in for exclusive enteral nutrition, a standard complete polymeric formula — an age-appropriate milk-based "complete nutrition" formula — can be used under a dietitian's guidance. Refer every suspected child to JDWNRH paediatrics, and arrange endoscopy, often in India. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, and how childhood IBD differs", html: `
<p>Paediatric IBD comprises Crohn's disease, ulcerative colitis and IBD-unclassified (IBD-U, about 10%). Compared with adults, childhood Crohn's is more often extensive ileocolonic disease with upper GI involvement, and childhood UC is more often pancolitis (60–80%), with more frequent acute severe attacks.${r(1, 2, 3)}</p>
${tbl(["Paris classification (Crohn's)", "Categories"], [
["Age (A)", "A1a under 10 years; A1b 10 to under 17; A2 17–40"],
["Location (L)", "L1 ileal, L2 colonic, L3 ileocolonic; L4a upper GI proximal to ligament of Treitz, L4b distal to it"],
["Behaviour (B)", "B1 inflammatory, B2 stricturing, B3 penetrating, B2B3 both; p perianal"],
["Growth (G)", "G0 no growth delay; G1 growth delay"]])}
${tbl(["Age group", "Special points"], [
["Under 2 years (infantile)", "Think <b>monogenic IBD</b> (e.g. IL-10 pathway defects) and immunodeficiency (chronic granulomatous disease); severe perianal disease; refer to a tertiary centre"],
["Under 6 years (very early onset, VEO-IBD)", "Often colonic, harder to treat; screen for immune defects"],
["Over 10 years", "Adult-like disease; puberty and growth window"]])}
` },

{ id: "patho", title: "Pathophysiology and the growth problem", html: `
${F.chart("Why children with IBD stop growing", [
F.s("Active inflammation (IL-6, TNF)"), F.a,
F.b([["Less food in", F.s("Pain, nausea, fear of eating")], ["More lost, more used", F.s("Malabsorption, protein-losing gut, high energy needs")]]), F.a,
F.s("Growth-hormone resistance; low IGF-1; delayed puberty"), F.a,
F.d("Plus long steroid courses"), F.a,
F.e("Lost final height, low bone density")])}
<p>Growth failure occurs in up to a third of children with Crohn's disease, and may come before any bowel symptoms. Controlling inflammation with nutrition or steroid-sparing drugs <b>before puberty ends</b> is the only way to recover height.${r(1)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ECCO–ESPGHAN (paediatric)", "Adult guidance (BSG, ECCO)", "This guide and why"], [
["First-line induction in luminal Crohn's", "Exclusive enteral nutrition", "Steroids or budesonide", "EEN in children " + LB.loc()],
["Steroid dose", "Prednisolone 1 mg/kg (max 40 mg)", "40 mg fixed", "Weight-based, max 40 mg"],
["Severity tool in UC", "PUCAI", "Truelove–Witts", "PUCAI"],
["Early anti-TNF in high-risk Crohn's", "Recommended (deep ulcers, growth failure, perianal disease, extensive disease)", "Considered", "Specialist; cost is the barrier"],
["Methotrexate", "15 mg/m² weekly SC (max 25 mg)", "25 mg weekly", "Weight/surface-area based"],
["Bhutan", "No national guidance", "—", "International guidance"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Crohn's", "UC"], [
["Abdominal pain", "Common, often RIF", "Before stools"],
["Diarrhoea", "Common, often non-bloody", "Bloody, urgent, nocturnal"],
["Weight loss", "Common (about 60%)", "Less common"],
["Growth failure, delayed puberty", "Common", "Less common"],
["Perianal tags, fissures, fistula, abscess", "Common", "Rare"],
["Mouth ulcers, lip swelling (orofacial granulomatosis)", "Yes", "No"],
["Isolated anaemia, fever, arthritis, lethargy", "Yes — may be the only sign", "Sometimes"]])}
${box("red", "Danger signs — admit today", `<ul><li>PUCAI 65 or more: six or more bloody stools, night-time stools, severe pain, limited activity</li><li>Distended, tender abdomen (megacolon, perforation)</li><li>Vomiting with colicky pain (stricture)</li><li>Dehydration, tachycardia, Hb under 80 g/L</li><li>Fever with abdominal mass or perianal swelling</li></ul>`)}
<h3>The typical child</h3>
<p>A 12-year-old boy from Mongar was referred for being "small". His height has fallen from the 50th to below the 10th centile over 2 years. He has had intermittent central and right lower abdominal pain and loose stools for 18 months, and had a perianal abscess drained last year. Hb 96 g/L (microcytic), platelets 520, CRP 28, albumin 31 g/L, calprotectin 900 µg/g. Stool microscopy is negative and his chest X-ray is normal. Endoscopy shows aphthous ulcers in the stomach, deep ulcers in the terminal ileum and skip lesions in the colon, with non-caseating granulomas; TB studies on the biopsies are negative. <b>This is paediatric Crohn's disease (Paris A1b L3L4a B1p G1)</b> with high-risk features: growth delay and perianal disease. He needs 8 weeks of exclusive enteral nutrition, iron, early maintenance therapy (an immunomodulator, and anti-TNF where it can be obtained), growth and puberty monitoring, and support at school.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Test"], [
["Infectious colitis (Shigella, Campylobacter, amoeba, <i>C. difficile</i>)", "Acute, under 4 weeks", "Stool microscopy, culture"],
["<b>Intestinal or abdominal TB</b>", "TB contact, fever, ascites, ileocaecal", "Chest X-ray, biopsy AFB/GeneXpert/culture (see <a href='#/d/crohns-adult'>Crohn's chapter</a>)"],
["Giardiasis, worms", "Common; bloating, poor weight gain", "Stool microscopy"],
["Coeliac disease", "Poor growth, anaemia, diarrhoea", "tTG-IgA"],
["Cow's milk protein allergy (infants)", "Bloody stools in a well infant", "Milk exclusion trial"],
["Juvenile polyp, Meckel's diverticulum", "Painless rectal bleeding", "Colonoscopy, Meckel scan"],
["Henoch–Schönlein purpura", "Rash, arthritis, pain", "Clinical"],
["Functional abdominal pain, IBS", "Normal growth and markers", "Calprotectin normal"],
["Chronic granulomatous disease, immune defects", "Under 6 years, infections", "Immunology"],
["Lymphoma", "Mass, B symptoms", "Imaging, biopsy"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Height, weight, BMI, height velocity on a growth chart; Tanner stage", "Growth failure, puberty", "Plot previous measurements", "Essential"],
["CBC, CRP, ESR, albumin, ferritin, LFTs", "Inflammation, anaemia; normal values do not exclude IBD (about 20% of mild cases)", "—", "Essential"],
["<b>Faecal calprotectin</b>", "Selects children for endoscopy", "Normal in healthy children over 4 years: under 50 µg/g; higher in infants", "Essential"],
["Stool microscopy, culture, <i>C. difficile</i>", "Exclude infection", "—", "Essential"],
["Chest X-ray, Mantoux or IGRA", "TB", "Before steroids and biologics", "Essential"],
["Upper endoscopy and ileocolonoscopy with biopsies", "Diagnosis and classification", "Under anaesthesia; biopsies for TB tests too", "Essential (referral)"],
["MR enterography (or small-bowel ultrasound)", "Small-bowel disease, complications", "Avoid CT radiation where possible", "Crohn's"],
["Vitamin D, B12, folate, zinc; bone age, DEXA", "Nutrition, bones", "—", "Selected"],
["Immunology (VEO-IBD)", "Monogenic disease", "Under 6 years", "Selected"]])}
` },

{ id: "staging", title: "Severity: PUCAI", html: `
<p>The Paediatric Ulcerative Colitis Activity Index (PUCAI, 0–85) is non-invasive and validated. Under 10 means remission, 10–34 mild, 35–64 moderate and 65 or more severe. For Crohn's disease, the weighted PCDAI (wPCDAI) is used. Use the calculator below, which includes the acute severe colitis thresholds for day 3 and day 5.${r(3, 4, 5)}</p>
<div class="calc" data-calc="pucai"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Crohn's disease — induction</h3>
${tbl(["Option", "How", "Notes"], [
["<b>Exclusive enteral nutrition (EEN)</b>", "Complete polymeric formula as the <b>only</b> food for 6–8 weeks, about 120% of estimated energy needs; water allowed; then reintroduce food over 2–3 weeks", "Remission in about 80%; better mucosal healing and growth than steroids. Use an NG tube if the child cannot drink enough"],
["Corticosteroids", dr("prednisolone") + " 1 mg/kg once daily (max 40 mg) for 2–4 weeks, then taper over about 10 weeks", "If EEN fails or is not possible; not for maintenance"],
["Budesonide", dr("budesonide_oral") + " 9 mg daily (12 mg in some adolescents) for mild ileocaecal disease", "Not on NEML"],
["Anti-TNF (high-risk)", dr("infliximab") + " 5 mg/kg at 0, 2, 6 weeks", "Deep ulcers, growth failure despite treatment, extensive disease, complex perianal disease"]])}
<h3>B. Crohn's disease — maintenance</h3>
<ul><li>${dr("azathioprine")} 2–2.5 mg/kg/day (TPMT first) or ${dr("methotrexate")} 15 mg/m² weekly SC (max 25 mg), then 10 mg/m² (max 15 mg), with folic acid.</li>
<li>Anti-TNF for high-risk or refractory disease; check drug levels where possible.</li>
<li>Partial enteral nutrition (formula for about half of energy needs) can help maintain remission alongside drugs.</li>
<li>Perianal abscess: drain first; fistula: MRI, seton, antibiotics, anti-TNF.</li></ul>
<h3>C. Ulcerative colitis</h3>
${tbl(["Severity (PUCAI)", "Induction", "Maintenance"], [
["Mild (10–34)", dr("mesalazine") + " 60–80 mg/kg/day oral (max 4.8 g) ± rectal 25 mg/kg (max 1 g)", "Mesalazine 50–80 mg/kg/day (max 4.8 g)"],
["Moderate (35–64)", "Oral prednisolone 1 mg/kg (max 40 mg) if 5-ASA fails or systemic features", "Mesalazine; azathioprine if steroid-dependent"],
["Severe (65 or more)", "Admit: IV " + dr("methylprednisolone") + " 1–1.5 mg/kg/day (max 60 mg)", "After rescue: azathioprine or continue biologic"]])}
<p>${dr("sulfasalazine")} 40–70 mg/kg/day (max 4 g) is an affordable alternative to mesalazine, given with ${dr("folic_acid")}.${r(2, 3)}</p>
<h3>D. Acute severe colitis in children</h3>
<ol><li>Admit; stool chart; daily PUCAI, CBC, CRP, electrolytes, albumin; stool for infection including <i>C. difficile</i> and amoebae; plain X-ray if distended (toxic megacolon is 56 mm or more in children aged 10 and older).</li>
<li>IV methylprednisolone 1–1.5 mg/kg/day (max 60 mg) in one or two doses.</li>
<li>IV fluids, potassium; transfuse if Hb under 80 g/L; continue feeding.</li>
<li>Thromboprophylaxis (${dr("enoxaparin")}) in adolescents with risk factors (central line, immobility, obesity, smoking, contraceptive pill).</li>
<li>Avoid opioids, anticholinergics and loperamide.</li>
<li><b>Day 3:</b> PUCAI over 45 → prepare second-line therapy (involve surgeon, check TB/HBV status for infliximab). <b>Day 5:</b> PUCAI over 65 → start rescue (infliximab 10 mg/kg, ciclosporin or tacrolimus) or colectomy.${r(3, 4)}</li></ol>
<h3>E. Growth, bones and the whole child</h3>
<ul><li>Measure height and weight at every visit; height velocity every 6 months; Tanner stage yearly from 9–10 years.</li>
<li>Vitamin D and calcium during steroids; iron replacement (IV if Hb under 100 g/L or intolerant).</li>
<li>Psychological support: anxiety, depression and school absence are common. Involve teachers (toilet access, rest periods).</li>
<li>Transition to adult care from about 16 years, with joint clinics where possible.</li></ul>
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Plot growth; chronic diarrhoea with poor growth or blood: stool tests, CBC, refer. Do not start steroids"],
["District hospital", "CBC, CRP, albumin, stool tests, chest X-ray; IV methylprednisolone for severe colitis while transferring"],
["Referral hospital (JDWNRH paediatrics)", "Calprotectin, endoscopy (or referral to India), EEN with dietitian, maintenance drugs, follow-up of growth"]])}
` },

{ id: "drugs", title: "Medicines and doses (children)", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("prednisolone"), "1 mg/kg once daily (max 40 mg); taper over 8–10 weeks", "NEML"],
[dr("methylprednisolone"), "1–1.5 mg/kg/day IV (max 60 mg)", "Acute severe colitis"],
[dr("mesalazine"), "Oral 60–80 mg/kg/day (max 4.8 g); rectal 25 mg/kg (max 1 g)", "Not on NEML"],
[dr("sulfasalazine"), "40–70 mg/kg/day in 2–3 doses (max 4 g)", "Folic acid; not on NEML"],
[dr("azathioprine"), "2–2.5 mg/kg/day", "TPMT; CBC; not on NEML"],
[dr("methotrexate"), "15 mg/m² weekly SC (max 25 mg); maintenance 10 mg/m² (max 15 mg)", "Folic acid; contraception counselling for adolescents"],
[dr("infliximab"), "5 mg/kg at 0, 2, 6 weeks, then 8-weekly (10 mg/kg in ASUC rescue)", "TB and HBV screening; not on NEML"],
[dr("metronidazole"), "7.5 mg/kg three times daily (perianal disease)", "—"],
[dr("iron_sucrose"), "By calculated deficit", "Oral iron poorly tolerated in active IBD"]])}
` },

{ id: "populations", title: "Special groups", html: `
<ul><li><b>Infants and under-6s:</b> refer to tertiary care for immune and genetic tests; avoid long steroid courses.</li>
<li><b>Adolescent girls:</b> methotrexate requires contraception; discuss future pregnancy.</li>
<li><b>Malnourished children:</b> manage as for severe acute malnutrition alongside IBD (see <a href="#/d/sam-child">SAM chapter</a>).</li>
<li><b>Vaccines:</b> complete routine and catch-up vaccines (including varicella and MMR) before immunosuppression; live vaccines are contraindicated on thiopurines, methotrexate over 0.4 mg/kg/week, anti-TNF or high-dose steroids.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Child refuses formula", "NG tube, flavourings, family support; steroids if still impossible", "EEN works only if exclusive"],
["Height still falling despite remission on symptoms", "Check calprotectin and MRE — subclinical inflammation", "Growth is a marker of control"],
["Puberty delayed beyond 14 (boys) or 13 (girls)", "Paediatric endocrinology", "Short pubertal window"],
["Steroid-dependent UC", "Azathioprine; anti-TNF", "Avoid repeated steroids"],
["TB contact in household", "Screen; TPT before immunosuppression", "Bhutan setting"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Notes"], [
["Growth failure and lost final height", "Treat before puberty ends"],
["Low bone density", "Steroids, inflammation, low vitamin D"],
["Strictures, fistulas, abscesses (Crohn's)", "As in adults"],
["Acute severe colitis, colectomy (UC)", "About a quarter of children with UC have a severe attack"],
["Psychosocial", "School loss, anxiety, depression, body image"],
["Cancer", "Colorectal surveillance from 8 years after onset; PSC raises risk"],
["Drug harms", "Infections, TB, lymphoma (rare, especially with thiopurine in young males: haemophagocytic lymphohistiocytosis with EBV)"]])}
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Clinic every 3 months: growth, PUCAI or wPCDAI, CBC, CRP, albumin, calprotectin, drug monitoring.</li>
<li>Repeat endoscopy or MRE to confirm healing 6–12 months after a treatment change.</li></ul>
${box("green", "What to tell the family", `<ul><li>"Your child has a long-term inflammation of the bowel. It is not caused by anything you did, and it is not infectious. With treatment, children grow, go to school and live full lives."</li><li>The formula-only diet is a real medicine — it works as well as steroids, without the side effects.</li><li>Keep giving the maintenance medicine even when the child is well, and come for the blood tests.</li><li>Tell the school; your child needs easy toilet access.</li></ul>`)}
${box("red", "Come back the same day if", `<ul><li>Six or more bloody stools a day, waking at night, severe pain, swollen abdomen</li><li>Vomiting with pain, fever with pain or perianal swelling</li><li>Fever or sore throat on azathioprine</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
${fig({ title: "Active ulcerative colitis", src: "images/uc-endoscopy.jpg", mod: "Colonoscopy", ctx: "Bloody diarrhoea", loc: "Colon", find: "Continuous erythema, granularity, loss of vascular pattern", signs: "Active colitis", interp: "Pancolitis is common in children; biopsy and exclude infection", by: "Sebb (Wikimedia Commons uploader)", page: "https://commons.wikimedia.org/wiki/File:Ulcerative_colitis.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Serpiginous ulcer in Crohn's disease", src: "images/cd-serpiginous-ulcer.jpg", mod: "Colonoscopy", ctx: "Pain, weight loss, poor growth", loc: "Colon or ileum", find: "Deep serpiginous ulcer within normal mucosa", signs: "Skip lesion", interp: "Typical of Crohn's; send biopsies for TB tests too", by: "Jiri Pekhart (Wikimedia Commons uploader)", page: "https://commons.wikimedia.org/wiki/File:CD_serpiginous_ulcer.jpg", lic: "CC BY-SA 3.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with chronic GI symptoms or poor growth", [
F.s("Growth chart, CBC, CRP, albumin, stool tests, calprotectin"), F.a,
F.d("Raised calprotectin or abnormal bloods or red flags?"), F.a,
F.b([["Yes", F.s("Exclude TB; refer for upper and lower endoscopy, MRE")], ["No", F.ok("Consider functional disorder, coeliac, giardia")]]), F.a,
F.d("Diagnosis"), F.a,
F.b([["Crohn's", F.ok("EEN 6–8 weeks; maintenance; growth")], ["UC", F.ok("5-ASA ± steroids; PUCAI; maintenance")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>A child whose height is falling across centiles needs a calprotectin, not just a worm tablet.</li>
<li>Perianal tags or fistula in a child is Crohn's until proven otherwise.</li>
<li>EEN must be exclusive — even small amounts of food reduce its effect.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Repeated steroid courses", "Stunting, bone loss", "EEN and steroid-sparing drugs"],
["Missing growth failure", "Lost height", "Plot every visit"],
["Steroids before excluding TB", "Disseminated TB", "Chest X-ray, biopsy TB tests"],
["Waiting past day 5 in severe colitis", "Emergency colectomy in worse condition", "Day 3 and day 5 PUCAI"],
["Ignoring mental health and school", "Poor adherence and outcomes", "Ask every visit"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the first-line induction treatment for luminal Crohn's disease in children?", "Exclusive enteral nutrition: complete formula as the only food for 6–8 weeks.")}
${qa("Intern/MO", "What PUCAI score defines acute severe UC?", "65 or more.")}
${qa("Intern/MO", "What is the prednisolone dose for a 25 kg child with moderate UC?", "1 mg/kg = 25 mg once daily (maximum 40 mg), tapering over 8–10 weeks.")}
${qa("Specialist", "What do day-3 and day-5 PUCAI values mean in acute severe colitis?", "Day 3 PUCAI over 45: prepare second-line therapy. Day 5 PUCAI over 65: start rescue therapy or colectomy.")}
${qa("Specialist", "When should monogenic IBD be suspected?", "Onset under 2 years (and in VEO-IBD under 6), severe perianal disease, recurrent infections or a family history of immune defects.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">van Rheenen PF, Aloi M, Assa A et al. The medical management of paediatric Crohn's disease: an ECCO–ESPGHAN guideline update. <i>J Crohns Colitis</i> 2021;15:171–194. <a href="https://doi.org/10.1093/ecco-jcc/jjaa161" target="_blank" rel="noopener">doi:10.1093/ecco-jcc/jjaa161</a></li>
<li id="ref-2">Turner D, Ruemmele FM, Orlanski-Meyer E et al. Management of paediatric ulcerative colitis, part 1: ambulatory care — an evidence-based guideline from ECCO and ESPGHAN. <i>J Pediatr Gastroenterol Nutr</i> 2018;67:257–291. <a href="https://doi.org/10.1097/MPG.0000000000002035" target="_blank" rel="noopener">doi:10.1097/MPG.0000000000002035</a></li>
<li id="ref-3">Turner D, Ruemmele FM, Orlanski-Meyer E et al. Management of paediatric ulcerative colitis, part 2: acute severe colitis — an evidence-based consensus guideline from ECCO and ESPGHAN. <i>J Pediatr Gastroenterol Nutr</i> 2018;67:292–310. <a href="https://doi.org/10.1097/MPG.0000000000002036" target="_blank" rel="noopener">doi:10.1097/MPG.0000000000002036</a></li>
<li id="ref-4">Turner D, Otley AR, Mack D et al. Development, validation, and evaluation of a pediatric ulcerative colitis activity index. <i>Gastroenterology</i> 2007;133:423–432. <a href="https://doi.org/10.1053/j.gastro.2007.05.029" target="_blank" rel="noopener">doi:10.1053/j.gastro.2007.05.029</a></li>
<li id="ref-5">Levine A, Griffiths A, Markowitz J et al. Pediatric modification of the Montreal classification for inflammatory bowel disease: the Paris classification. <i>Inflamm Bowel Dis</i> 2011;17:1314–1321. <a href="https://doi.org/10.1002/ibd.21493" target="_blank" rel="noopener">doi:10.1002/ibd.21493</a></li>
<li id="ref-6">Lamb CA, Kennedy NA, Raine T et al. British Society of Gastroenterology consensus guidelines on the management of inflammatory bowel disease in adults. <i>Gut</i> 2019;68:s1–s106. <a href="https://doi.org/10.1136/gutjnl-2019-318484" target="_blank" rel="noopener">doi:10.1136/gutjnl-2019-318484</a></li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan guidance", "<span class='pass'>Checked</span>", "No paediatric IBD guidance"],
["Guidelines", "<span class='pass'>Checked</span>", "ECCO–ESPGHAN 2020, ESPGHAN–ECCO 2018"],
["NEML gaps", "<span class='flag'>Gap</span>", "Mesalazine, azathioprine, budesonide, biologics, polymeric formula"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "2 licensed Commons images"]], "qc")}
` }
]
});
