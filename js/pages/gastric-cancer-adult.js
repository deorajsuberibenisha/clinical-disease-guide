/* Gastric cancer — adults (Bhutan STG 4.1.4, Bhutan cancer screening, ESMO 2022) */
registerPage({
id: "gastric-cancer-adult",
title: "Stomach (Gastric) Cancer — Adults",
subtitle: "Bhutan's commonest cancer: scope early for alarm features, eradicate H. pylori, and refer quickly for staging and surgery",
age: "Adults", specs: ["onc", "gi", "surg", "ph"],
keywords: ["gastric cancer", "stomach cancer", "adenocarcinoma", "H. pylori", "alarm features", "endoscopy", "gastrectomy", "dyspepsia", "Bhutan cancer screening"],
related: ["apd-adult", "ugib-adult", "gerd-adult", "anaemia-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Stomach cancer is the leading cause of cancer death in Bhutan. High H. pylori prevalence, salted and smoked foods, and smoking contribute. Most cases are diagnosed late.</p>
<div class="glance">
<div><h4>Alarm features</h4><p>Weight loss, anaemia, dysphagia, persistent vomiting, GI bleeding, mass, age 40+ with new dyspepsia.</p></div>
<div><h4>Test</h4><p>Upper GI endoscopy with biopsy.</p></div>
<div><h4>Prevent</h4><p>Test-and-treat H. pylori; endoscopic screening programme.</p></div>
<div><h4>Treat</h4><p>Gastrectomy ± chemotherapy (referral); palliative care.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The national cancer screening programme (Health Flagship) offers H. pylori testing and endoscopy for adults 40+ through district hospitals. Surgery is at JDWNRH/regional hospitals; chemotherapy and radiotherapy at JDWNRH and abroad. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Over 90% are adenocarcinomas (intestinal and diffuse types). Others: lymphoma (MALT, linked to H. pylori), GIST.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Correa cascade", [F.s("H. pylori gastritis"), F.a, F.s("Atrophy → intestinal metaplasia → dysplasia"), F.a, F.e("Adenocarcinoma")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan", "ESMO / Asia", "This guide"], [["Endoscopy threshold", "40+ with alarm features or high risk", "Age 50–60 in West; 40+ in high-incidence Asia", "40+ " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Epigastric pain, early satiety, weight loss, anaemia, vomiting (outlet obstruction), haematemesis/melaena.</li><li>Late: palpable mass, left supraclavicular node (Virchow), ascites, jaundice, umbilical nodule.</li></ul><h3>The typical patient</h3><p>A 58-year-old farmer from Bumthang has 3 months of epigastric pain, early fullness and 6 kg weight loss; Hb 8.5 g/dL. <b>These are alarm features</b>: urgent endoscopy with biopsy, CT staging, nutritional support, refer to surgery.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Peptic ulcer", "Biopsy all gastric ulcers"], ["Pancreatic cancer", "Back pain, jaundice"], ["Gastric lymphoma", "Biopsy"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Endoscopy with multiple biopsies; FBC, LFT, albumin; CT chest/abdomen/pelvis for staging; staging laparoscopy where available.</p>` },
{ id: "staging", title: "Staging (simplified TNM)", html: `${tbl(["Stage", "Meaning", "Usual treatment"], [["Early (T1)", "Mucosa/submucosa", "Endoscopic resection or surgery"], ["Locally advanced", "Deeper or node positive", "Perioperative chemotherapy (FLOT) + gastrectomy"], ["Metastatic", "Liver, peritoneum, distant nodes", "Palliative chemotherapy, symptom care"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Refer all suspected cases to surgery/oncology.</li><li>Nutrition, iron/transfusion for anaemia.</li><li>Palliative: stenting for obstruction, analgesia ladder, antiemetics, palliative radiotherapy for bleeding.</li><li>Eradicate H. pylori in patients and screen first-degree relatives (see peptic ulcer chapter).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Use"], [[dr("omeprazole"), "Symptoms, bleeding"], [dr("morphine"), "Pain"], [dr("ondansetron"), "Nausea"], [dr("ferrous"), "Anaemia"]])}` },
{ id: "populations", title: "Young patients", html: `<p>Diffuse (signet-ring) type can occur under 40, especially in women: do not dismiss persistent symptoms.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Vomiting with succussion splash", "Gastric outlet obstruction: NG, fluids, refer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Bleeding, obstruction, perforation, cachexia, malignant ascites.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>After gastrectomy: B12 injections, iron, calcium, small frequent meals; surveillance per oncology.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Gastric adenocarcinoma (gross)", src: "images/gastric-adenoca-gross.jpg", mod: "Gross specimen", ctx: "Gastric cancer", loc: "Stomach", find: "Thickened rigid stomach wall", signs: "Diffuse infiltrating cancer (linitis plastica)", interp: "Persistent symptoms deserve endoscopy at any age", by: "Unknown author (public domain)", page: "https://commons.wikimedia.org/wiki/File:Adenocarcinoma_of_the_stomach.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Dyspepsia", [F.d("Alarm features or 40+?"), F.a, F.b([["Yes", F.e("Endoscopy + biopsy")], ["No", F.ok("H. pylori test-and-treat")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Long PPI trials in a 55-year-old", "Masks cancer", "Endoscopy first"], ["Not biopsying a gastric ulcer", "Missed cancer", "Biopsy and repeat endoscopy at 6–8 weeks"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Name four alarm features of dyspepsia.", "Weight loss, anaemia, dysphagia, GI bleeding (also persistent vomiting, mass).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Lordick F, Carneiro F, Cascinu S, et al. Gastric cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol. 2022;33:1005-1020. <a href="https://doi.org/10.1016/j.annonc.2022.07.004" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 4.1.4; National cancer screening guidelines.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
