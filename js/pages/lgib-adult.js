/* Acute lower gastrointestinal bleeding — adults */
registerPage({
id: "lgib-adult",
title: "Lower GI Bleeding — Adults",
subtitle: "Bright red or maroon blood per rectum: resuscitate, exclude an upper GI source, use the shock index and Oakland score to decide who goes home, CT angiography for the unstable, colonoscopy for the rest — and never blame haemorrhoids without looking higher",
age: "Adults", specs: ["gi", "surg", "emerg", "medicine"],
keywords: ["lower gastrointestinal bleeding", "LGIB", "rectal bleeding", "haematochezia", "per rectal bleeding", "diverticular bleeding", "angiodysplasia", "colorectal cancer bleeding", "ischaemic colitis", "Oakland score", "shock index", "CT angiography GI bleeding", "colonoscopy bleeding", "haemorrhoids bleeding", "amoebic colitis", "anticoagulants GI bleeding"],
related: ["ugib-adult", "haemorrhoids-adult", "ge-adult", "transfusion-adult", "shock-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most lower GI bleeding stops on its own and most patients survive, but older people on blood thinners can bleed heavily, and a little bleeding can be the only sign of colorectal cancer. Good care means treating the patient's circulation first, finding where the blood is coming from, and deciding sensibly who needs admission.</p>
<div class="glance">
<div><h4>Resuscitate</h4><p>Two IV lines, crystalloid, cross-match; transfuse at Hb under 7 g/dL (8 with heart disease).</p></div>
<div><h4>Shock index</h4><p>Heart rate ÷ systolic BP. Over 1 = unstable: <b>CT angiography</b> (then embolisation) — and think of an upper GI source.</p></div>
<div><h4>Upper source?</h4><p>About 1 in 10–15 with brisk haematochezia and shock bleed from the stomach or duodenum: endoscopy first.</p></div>
<div><h4>Stable</h4><p>Oakland score 8 or less → outpatient colonoscopy; over 8 → admit, colonoscopy on the next list after bowel prep.</p></div>
<div><h4>Blood thinners</h4><p>Hold warfarin/DOAC; reverse only if life-threatening. Stop aspirin for primary prevention; continue for secondary.</p></div>
<div><h4>Causes</h4><p>Haemorrhoids, fissure, colorectal cancer and polyps, colitis (infective, amoebic, IBD, ischaemic), diverticula, angiodysplasia, post-polypectomy.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG has no section on acute lower GI bleeding; it covers haemorrhoids (§4.2.1: proctoscopy, digital rectal examination, local ointment, laxatives, refer) and anal fissure.${r(7)} Colonoscopy is available at referral hospitals, CT angiography at JDWNRH, and interventional radiology is limited, so stabilisation and timely referral are the key skills at district level. Infective causes such as amoebic and bacillary dysentery remain common causes of bloody stool in Bhutan (see <a href="#/d/ge-adult">gastroenteritis</a>). This chapter draws on the ACG 2023, BSG 2019 and ESGE 2021 guidelines. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>Lower GI bleeding (LGIB) is bleeding from the colon, rectum or anus (the small bowel is usually considered separately as “mid-GI” bleeding). It presents as fresh red blood, maroon stool or clots per rectum (haematochezia). About 80% stops spontaneously.${r(1, 2)}</p>
${tbl(["Cause", "Typical picture", "Notes"], [
["Haemorrhoids, fissure", "Bright red blood on paper or dripping after stool; fissure: sharp pain", "Commonest in younger adults; still look higher if over 40–50 or iron deficient"],
["<b>Colorectal cancer, polyps</b>", "Dark or mixed blood, change in bowel habit, weight loss, anaemia", "Investigate every older adult"],
["Diverticular bleeding", "Painless, sudden, large volume, older adult", "Right-sided diverticula are common in Asia"],
["Angiodysplasia", "Recurrent painless bleeding, iron deficiency, older, CKD, aortic stenosis", "Endoscopic argon plasma coagulation"],
["Colitis: infective (shigella, amoebic), IBD, ischaemic, radiation", "Bloody diarrhoea, pain, fever; ischaemic: older with vascular disease, sudden cramping", "Stool tests, colonoscopy"],
["Post-polypectomy bleeding", "Up to 2 weeks after colonoscopy", "Endoscopic clips"],
["Rectal ulcer, varices, Meckel's (young)", "—", "Specialist"],
["<b>Upper GI source</b>", "Brisk bleeding with shock, high urea", "Exclude with endoscopy"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From bleeding to shock", [
F.s("Mucosal or vascular lesion bleeds into the lumen"), F.a,
F.d("Rate of bleeding"), F.a,
F.b([["Slow / intermittent", F.s("Bright red streaks; iron-deficiency anaemia")], ["Brisk", F.e("Large clots, maroon stool, falling BP, rising pulse")]]), F.a,
F.s("Most diverticular and angiodysplastic bleeds stop spontaneously; 10–40% rebleed"), F.a,
F.e("Risk of death mainly from comorbidity, age and anticoagulation")])}
<p>Bright red blood with shock usually means either a large colonic bleed or a very brisk upper GI bleed that has hurried through the bowel. A raised urea out of proportion to creatinine points upward.${r(2, 3)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ACG 2023", "BSG 2019 / ESGE 2021", "This guide and why"], [
["Risk stratification", "Oakland score 8 or less suggests safe discharge (with judgement)", "Same (Oakland 8 or less)", "Oakland plus shock index " + LB.loc()],
["Unstable bleeding", "CT angiography as first test", "Shock index over 1 → CTA, then catheter embolisation", "CTA where available (JDWNRH); otherwise resuscitate and refer"],
["Timing of colonoscopy", "Non-urgent; urgent colonoscopy within 24 h does not improve outcomes", "Next available list after full bowel preparation", "Next available list"],
["Transfusion", "Hb under 7 g/dL (8 with cardiovascular disease)", "Same (restrictive)", "Same"],
["Tranexamic acid", "Not recommended", "HALT-IT: no benefit, more thrombosis", "Do not use"],
["Bhutan STG", "No LGIB section; haemorrhoid care", "—", "International guidance with Bhutan referral pathway"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Points to", "Comment"], [
["Bright red blood on the toilet paper, painless", "Haemorrhoids", "Look higher if over 40–50, anaemic, or bowel habit changed"],
["Painful defecation with streaks of blood", "Anal fissure", "Inspect gently; no PR if very painful"],
["Bloody diarrhoea, fever, cramps", "Infective or inflammatory colitis", "Stool microscopy and culture"],
["Sudden painless large-volume bleed in an older adult", "Diverticular disease, angiodysplasia", "Admit"],
["Pain out of proportion, AF or vascular disease", "Ischaemic colitis or mesenteric ischaemia", "CT angiography"],
["Weight loss, change in bowel habit, anaemia, mass", "Colorectal cancer", "Colonoscopy"],
["Melaena, haematemesis, high urea", "Upper GI source", "Endoscopy (see <a href=\"#/d/ugib-adult\">UGIB</a>)"]])}
${box("red", "Danger signs", `<ul><li>Shock index over 1, systolic BP under 90, pulse over 110</li><li>Ongoing heavy bleeding, syncope</li><li>Hb under 7 g/dL or falling more than 2 g/dL</li><li>Anticoagulants, age over 70, heart, kidney or liver disease</li></ul>`)}
<h3>The typical patient</h3>
<p>A 72-year-old man from Trashigang on aspirin after a stroke passes three large maroon stools with clots. Pulse 104, BP 110/68 (shock index 0.95), Hb 9.8 g/dL, urea normal, blood on rectal examination. He had one similar episode a year ago. <b>This is significant lower GI bleeding with an Oakland score of 24 (age 2, male 1, previous admission 1, blood on DRE 1, pulse 2, BP 4, Hb 13).</b> He needs two IV lines, crystalloid, cross-match, close observation, aspirin continued for secondary prevention once bleeding settles, and referral for colonoscopy on the next available list — and CT angiography if he becomes unstable.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Best test"], [
["Upper GI bleed with rapid transit", "Shock, high urea, NSAIDs, liver disease", "Upper endoscopy"],
["Red food or drinks, beetroot, iron, bismuth", "No haemoglobin drop", "Stool occult blood"],
["Vaginal or urinary bleeding mistaken for rectal", "History, examination", "Examination"],
["Small-bowel bleeding (Meckel's, tumour)", "Negative upper and lower endoscopy", "Capsule, CT enterography"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["CBC, cross-match, coagulation (INR)", "Severity, transfusion, reversal", "Repeat Hb", "Essential"],
["Urea, creatinine, electrolytes", "Upper GI source suspicion (urea:creatinine), kidney function for contrast", "—", "Essential"],
["<b>Digital rectal examination</b> and proctoscopy", "Haemorrhoids, fissure, rectal tumour, blood colour", "Part of the Oakland score", "Essential"],
["Upper GI endoscopy", "Upper source in unstable haematochezia", "Before colonoscopy if suspected", "Selected"],
["<b>CT angiography</b>", "Locates active bleeding (over 0.3–0.5 mL/min)", "First test if unstable; guides embolisation", "Unstable"],
["<b>Colonoscopy</b>", "Diagnosis and treatment (clips, APC, adrenaline)", "After bowel preparation, next available list", "Stable, admitted or outpatient"],
["Stool microscopy and culture", "Amoebae, shigella", "Bloody diarrhoea", "Selected"],
["Iron studies", "Chronic loss", "—", "Selected"]])}
` },

{ id: "staging", title: "Who can go home? Oakland score and shock index", html: `
<p>Shock index (heart rate ÷ systolic BP) over 1 means unstable bleeding. For stable patients, the Oakland score identifies those safe for outpatient investigation.${r(3, 1, 2)}</p>
<div class="calc" data-calc="oakland"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Resuscitation</h3>
<ul><li>Two large-bore cannulas; crystalloid for hypotension; cross-match.</li>
<li>Restrictive transfusion: Hb under 7 g/dL, or under 8 with cardiovascular disease; massive transfusion protocol for exsanguinating bleeding (see <a href="#/d/transfusion-adult">transfusion</a>).${r(5)}</li>
<li>No tranexamic acid (HALT-IT: no reduction in death, more venous thrombosis).${r(6)}</li></ul>
<h3>B. Locate and treat</h3>
<ul><li><b>Unstable (shock index over 1) after resuscitation:</b> CT angiography; if active bleeding, catheter embolisation where available; upper endoscopy first if an upper source is likely; surgery only for uncontrolled bleeding with a localised source.</li>
<li><b>Stable, admitted:</b> colonoscopy on the next available list after full bowel preparation (polyethylene glycol); endoscopic haemostasis — clips for diverticular bleeding, argon plasma coagulation for angiodysplasia, clips or adrenaline for post-polypectomy bleeding.</li>
<li><b>Stable, Oakland 8 or less:</b> discharge with urgent outpatient colonoscopy or flexible sigmoidoscopy (within about 2 weeks) and clear return advice.${r(1, 2, 4)}</li>
<li>Haemorrhoids and fissures: see <a href="#/d/haemorrhoids-adult">haemorrhoids and fissure</a> — but still investigate the colon if over 40–50, anaemic or with bowel-habit change.</li></ul>
<h3>C. Antithrombotic drugs</h3>
${tbl(["Drug", "During bleeding", "After"], [
["Aspirin for primary prevention", "Stop", "Do not restart"],
["Aspirin for secondary prevention (stroke, MI, PAD)", "Continue if possible (stop briefly only for life-threatening bleed)", "Restart as soon as haemostasis is achieved"],
["Dual antiplatelets (recent stent)", "Continue aspirin; discuss P2Y12 with cardiology", "Restart within days"],
["Warfarin", "Hold; vitamin K and prothrombin complex concentrate (or FFP) for life-threatening bleeding", "Restart about 7 days after haemostasis if indication remains"],
["DOACs", "Hold; specific reversal rarely needed", "Restart about 7 days after haemostasis"]])}
<h3>D. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Assess shock; IV fluids; refer bloody stool with shock, anaemia or age over 50; treat dysentery per STG"],
["District hospital", "Resuscitation, transfusion, proctoscopy, Oakland score; refer for endoscopy"],
["Referral hospital (JDWNRH, ERRH, CRRH)", "Upper and lower endoscopy, CT angiography (JDWNRH), surgery"]])}
` },

{ id: "drugs", title: "Medicines and products", html: `
${tbl(["Item", "Dose", "Notes"], [
["Crystalloid (Ringer's lactate / 0.9% saline)", "Boluses of 500 mL, reassess", "Hypotension"],
["Packed red cells", "1 unit, then reassess", "Hb under 7 (8 with CVD)"],
[dr("vitamin_k"), "5–10 mg IV", "Warfarin reversal"],
["Prothrombin complex concentrate / FFP", "By INR and weight", "Life-threatening warfarin bleed"],
[dr("ppi_iv"), "If upper source suspected", "Until endoscopy"],
[dr("tranexamic_acid"), "Not recommended", "HALT-IT"],
["Polyethylene glycol bowel preparation", "Per product", "Before colonoscopy"]])}
` },

{ id: "populations", title: "Older adults, pregnancy and the young", html: `
<ul><li><b>Older adults:</b> higher mortality; diverticula, angiodysplasia, cancer, ischaemic colitis; review all blood thinners.</li>
<li><b>Pregnancy:</b> haemorrhoids and fissures are common; colonoscopy if needed is safe in the second trimester.</li>
<li><b>Young adults:</b> haemorrhoids, fissure, infective colitis, IBD; Meckel's diverticulum in adolescents.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Cirrhosis", "Rectal varices possible; correct coagulopathy carefully", "Portal hypertension"],
["CKD", "Angiodysplasia; contrast caution", "—"],
["Aortic stenosis with recurrent bleeding", "Heyde syndrome: angiodysplasia", "Valve replacement may help"],
["Recurrent bleeding, negative colonoscopy", "Upper endoscopy, capsule", "Small-bowel source"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Haemorrhagic shock", "Shock index over 1", "Resuscitate, CTA, embolisation"],
["Rebleeding", "Common in diverticular disease", "Endoscopic clips; elective resection if recurrent"],
["Myocardial ischaemia", "Chest pain in anaemic older adult", "Transfuse to 8 g/dL"],
["Contrast nephropathy, embolisation ischaemia", "After CTA or angiography", "Hydration; monitoring"]])}
<p>In-hospital mortality is around 1–3%, mostly from comorbidity rather than the bleed itself.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Complete colonic evaluation for everyone with unexplained bleeding, iron deficiency or age over 40–50.</li>
<li>Diverticular bleeding: avoid NSAIDs; high-fibre diet.</li>
<li>Iron replacement after significant bleeding (see <a href="#/d/anaemia-adult">anaemia</a>).</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Most bleeding from the lower bowel stops by itself, but we need to find the cause — that means a camera test of the bowel."</li><li>Avoid painkillers like ibuprofen and diclofenac.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>More than a small amount of blood, clots, or black stools</li><li>Dizziness, fainting, fast heartbeat, breathlessness</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Argon plasma coagulation of colonic angiodysplasia", src: "images/apc-angiodysplasia.jpg", mod: "Colonoscopy image", ctx: "Recurrent painless bleeding", loc: "Colon", find: "Flat red vascular lesion being treated with argon plasma", signs: "Angiodysplasia", interp: "A common source of recurrent bleeding in older adults and CKD; treated endoscopically", by: "Samir (English Wikipedia)", page: "https://commons.wikimedia.org/wiki/File:Argon_plasma_coagulation.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Diverticulosis with segmental colitis", src: "images/diverticulosis-colitis.jpg", mod: "Colonoscopy image", ctx: "Lower GI symptoms", loc: "Sigmoid colon", find: "Diverticular openings with surrounding inflamed mucosa", signs: "Diverticulosis", interp: "Diverticula can bleed suddenly and heavily; clips stop a visible bleeding point", by: "Samir", page: "https://commons.wikimedia.org/wiki/File:Segmental_colitis_associated_with_diverticulosis.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Blood per rectum", [
F.s("ABC, two lines, bloods, DRE; shock index"), F.a,
F.d("Shock index over 1 after resuscitation?"), F.a,
F.b([["Yes", F.e("Upper source likely? → OGD; else CT angiography → embolisation/surgery")], ["No", F.d("Oakland score")]]), F.a,
F.b([["8 or less", F.ok("Discharge; urgent outpatient colonoscopy")], ["Over 8", F.s("Admit; colonoscopy next list after prep")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Shock with bright red blood: look upstairs first.</b></li>
<li>Do a rectal examination — it is part of the score and finds rectal cancers.</li>
<li>Haemorrhoids are common; so is colorectal cancer behind them.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Blaming haemorrhoids in an older adult", "Missed cancer", "Colonoscopy"],
["Urgent unprepared colonoscopy", "Poor views, no benefit", "Prepare and scope on the next list"],
["Tranexamic acid", "No benefit, thrombosis", "Avoid"],
["Stopping secondary-prevention aspirin for good", "Strokes and MIs", "Restart after haemostasis"],
["Liberal transfusion", "Overload, no benefit", "Restrictive thresholds"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name four common causes of lower GI bleeding.", "Haemorrhoids, colorectal cancer or polyps, diverticular disease, angiodysplasia (also colitis).")}
${qa("Intern/MO", "What does a shock index over 1 indicate?", "Haemodynamically significant bleeding: resuscitate, consider an upper source and arrange CT angiography.")}
${qa("Intern/MO", "Which Oakland score suggests safe discharge?", "8 or less.")}
${qa("Specialist", "What did HALT-IT show?", "Tranexamic acid did not reduce death from GI bleeding and increased venous thromboembolism.")}
${qa("Specialist", "When should aspirin be restarted after LGIB?", "If for secondary prevention, as soon as haemostasis is achieved; do not restart aspirin for primary prevention.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Sengupta N, Feuerstein JD, Jairath V et al. Management of patients with acute lower gastrointestinal bleeding: an updated ACG guideline. <i>Am J Gastroenterol</i> 2023;118:208–231. <a href="https://doi.org/10.14309/ajg.0000000000002130" target="_blank" rel="noopener">doi:10.14309/ajg.0000000000002130</a></li>
<li id="ref-2">Oakland K, Chadwick G, East JE et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology. <i>Gut</i> 2019;68:776–789. <a href="https://doi.org/10.1136/gutjnl-2018-317807" target="_blank" rel="noopener">doi:10.1136/gutjnl-2018-317807</a></li>
<li id="ref-3">Oakland K, Jairath V, Uberoi R et al. Derivation and validation of a novel risk score for safe discharge after acute lower gastrointestinal bleeding: a modelling study. <i>Lancet Gastroenterol Hepatol</i> 2017;2:635–643. <a href="https://doi.org/10.1016/S2468-1253(17)30150-4" target="_blank" rel="noopener">doi:10.1016/S2468-1253(17)30150-4</a></li>
<li id="ref-4">Triantafyllou K, Gkolfakis P, Gralnek IM et al. Diagnosis and management of acute lower gastrointestinal bleeding: European Society of Gastrointestinal Endoscopy (ESGE) Guideline. <i>Endoscopy</i> 2021;53:850–868. <a href="https://doi.org/10.1055/a-1496-8969" target="_blank" rel="noopener">doi:10.1055/a-1496-8969</a></li>
<li id="ref-5">Carson JL, Stanworth SJ, Guyatt G et al. Red blood cell transfusion: 2023 AABB international guidelines. <i>JAMA</i> 2023;330:1892–1902. <a href="https://doi.org/10.1001/jama.2023.12914" target="_blank" rel="noopener">doi:10.1001/jama.2023.12914</a></li>
<li id="ref-6">HALT-IT Trial Collaborators. Effects of a high-dose 24-h infusion of tranexamic acid on death and thromboembolic events in patients with acute gastrointestinal bleeding (HALT-IT). <i>Lancet</i> 2020;395:1927–1936. <a href="https://doi.org/10.1016/S0140-6736(20)30848-5" target="_blank" rel="noopener">doi:10.1016/S0140-6736(20)30848-5</a></li>
<li id="ref-7">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.2 Ano-rectal disorders.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG", "<span class='pass'>Checked</span>", "No LGIB section; haemorrhoid care only"],
["Oakland point values", "<span class='pass'>Verified</span>", "From the published table (JAMA Netw Open 2020 reprint)"],
["Guideline recommendations", "<span class='pass'>Checked</span>", "ACG 2023, BSG 2019, ESGE 2021"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 3.0 / 4.0"]], "qc")}
` }
]
});
