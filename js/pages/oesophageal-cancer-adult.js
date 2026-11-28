/* Oesophageal cancer — adults. NEW disease (batch N-3, 28 Nov 2026).
   Sources read directly: Bhutan PBCR 'Cancer incidence and mortality in Bhutan 2019–2022' (oesophagus 104 cases in men 2019–22, 7.1% of male
   cancers, AAR 7.5 per 100,000 — second commonest cancer in men after stomach);
   ICMR Consensus document for management of oesophageal cancer (2017; library PDF read: > 90% squamous in India; work-up — endoscopy with ≥ 6 biopsies,
   brush cytology/EUS-FNA if not feasible; barium swallow optional; avoid dilating strictures; histology before staging/treatment; MDT; CECT thorax
   essential, PET-CECT and EUS desirable, bronchoscopy for bulky lesions at/above the carina; echo, PFT/DLCO for radical treatment; nutrition, oral
   hygiene, enteral feeding preferred, pulmonary rehab; treatment — within 5 cm of cricopharynx: definitive concurrent chemoradiation; middle/lower
   third and GEJ: surgery; T1m N0: EMR; T1–2 N0: surgery; T3/T4a/N+: neoadjuvant chemotherapy or chemoradiation then surgery (CROSS: median survival
   49.4 vs 24 months); surgery prerequisites ECOG 0–1; 5 cm margins, 2-field lymphadenectomy, ≥ 15 nodes; stomach conduit; definitive CRT better than
   RT alone, 5-FU + cisplatin or taxane + platinum, 50.4 Gy; metastatic — palliative RT, stenting, palliative chemotherapy);
   NICE NG12 §1.2 (read in browser 28 Nov 2026: suspected cancer referral for dysphagia, or 55 and over with weight loss plus upper abdominal pain,
   reflux or dyspepsia [2015, amended 2025]; consider endoscopy for haematemesis, and 55+ with treatment-resistant dyspepsia etc.); NEML 2025 (fluorouracil listed; cisplatin/paclitaxel not checked in detail). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "oesophageal-cancer-adult",
title: "Oesophageal Cancer — Adults",
subtitle: "Progressive difficulty swallowing solid food, then liquids, with weight loss is oesophageal cancer until an endoscopy and biopsy prove otherwise — stage it, choose surgery or chemoradiation in a team, and protect nutrition throughout",
age: "Adults (mostly over 50)", specs: ["onc", "surg", "gi"],
keywords: ["oesophageal cancer", "esophageal cancer", "carcinoma oesophagus", "squamous cell carcinoma oesophagus", "adenocarcinoma oesophagus", "dysphagia", "difficulty swallowing", "weight loss", "endoscopy", "oesophagectomy", "chemoradiation", "CROSS", "oesophageal stent", "feeding jejunostomy", "Barrett's oesophagus", "achalasia"],
related: ["gastric-cancer-adult", "gerd-adult", "weightloss-adult", "ugib-adult", "palliative-care", "alcohol-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Oesophageal cancer is the <b>second commonest cancer in Bhutanese men</b> (age-adjusted 7.5 per 100,000) after stomach cancer ${r(1)}. Most cases in South Asia are squamous cell carcinoma, linked to tobacco, alcohol and very hot drinks ${r(2)} ${LB.exp("RISK FACTORS STANDARD")}. Most present late, when swallowing is already difficult.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Progressive dysphagia (solids → liquids), weight loss, regurgitation, odynophagia, hoarseness, cough when drinking ${r(2)}.</p></div>
<div><h4>Test</h4><p><b>Upper endoscopy with at least 6 biopsies</b> — urgent for any dysphagia ${r(2)} ${r(3)}.</p></div>
<div><h4>Stage</h4><p>CECT thorax–abdomen (PET-CT and EUS if available); bronchoscopy for tumours at or above the carina ${r(2)}.</p></div>
<div><h4>Treat</h4><p>Early: endoscopic resection or surgery. Locally advanced: neoadjuvant chemo(radio)therapy then surgery. Upper oesophagus: definitive chemoradiation. Advanced: stent, radiotherapy, nutrition ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>There is no STG section on oesophageal cancer. Endoscopy is at JDWNRH and the regional referral hospitals; oesophagectomy and radiotherapy usually need referral to India ${LB.loc()}. Many patients are first seen with severe weight loss — start nutritional support early and avoid blind dilatation of a malignant stricture ${r(2)}. See ${P("gastric-cancer-adult", "Gastric cancer")} for the national upper-GI screening programme.</p>`)}
` },

{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Burden", "104 cases in Bhutanese men in 2019–22 (7.1% of male cancers) " + r(1)],
["Types", "Squamous cell carcinoma (over 90% in Indian series; upper and middle oesophagus) and adenocarcinoma (lower oesophagus/GEJ, rising worldwide) " + r(2)],
["Risk factors — squamous", "Tobacco (smoked and chewed), alcohol, very hot drinks, poor diet, achalasia, corrosive (lye) stricture " + LB.exp("STANDARD TEACHING")],
["Risk factors — adenocarcinoma", "Long-standing reflux, Barrett's oesophagus, obesity, smoking " + LB.exp("STANDARD TEACHING") + " — see " + P("gerd-adult", "GERD")],
["Prognosis", "Poor when advanced; early disease is curable " + r(2)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Oesophageal cancer", [F.s("Chronic injury (tobacco, alcohol, heat; or acid reflux)"), F.a, F.s("Dysplasia (squamous) or Barrett's metaplasia (adeno)"), F.a, F.s("Invasive cancer narrows the lumen"), F.a, F.e("Early lymph-node spread (rich lymphatics, no serosa) → lung, liver, bone")])}
<p>Dysphagia usually appears only when more than half the lumen is blocked — so symptoms mean the disease is often already advanced ${LB.exp("STANDARD TEACHING")}.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ICMR 2017", "NICE NG12", "This guide"], [
["Who gets urgent endoscopy", "All with suspected cancer", "Suspected-cancer referral: dysphagia at any age; ≥ 55 with weight loss + upper abdominal pain, reflux or dyspepsia", "Any progressive dysphagia, any age " + r(2) + r(3)],
["Neoadjuvant choice", "Chemotherapy or chemoradiation — neither clearly superior", "—", "MDT decision " + r(2)],
["Barium swallow", "Optional; skip if endoscopy available", "—", "Endoscopy first " + r(2)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Progressive dysphagia</b> — first to solids, then to liquids; food sticking; regurgitation ${r(2)}.</li>
<li>Weight loss, painful swallowing, retrosternal pain ${r(2)}.</li>
<li>Hoarseness (recurrent laryngeal nerve), cough or choking on drinking (tracheo-oesophageal fistula), haematemesis.</li>
<li>Examine for cervical/supraclavicular nodes, liver, signs of aspiration and malnutrition.</li>
</ul>
<h3>The typical patient</h3>
<p>A 62-year-old man from Trashigang who smokes and drinks ara daily has 3 months of food sticking behind the breastbone, now only managing soft rice and tea, and has lost 8 kg. <b>Suspected oesophageal cancer</b>: refer urgently for endoscopy with biopsies; meanwhile high-calorie liquid diet, check albumin and Hb ${r(2)} ${r(3)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Benign peptic stricture", "Long reflux history, slower course " + P("gerd-adult", "GERD")],
["Achalasia", "Dysphagia to solids and liquids from the start, regurgitation of undigested food; younger"],
["Corrosive stricture", "History of lye ingestion"],
["Gastric cancer at the cardia", "Upper GI symptoms, anaemia " + P("gastric-cancer-adult", "Gastric cancer")],
["Oesophageal candidiasis", "HIV or immunosuppression, painful swallowing"],
["Extrinsic compression", "Lung cancer, nodes, goitre"]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Endoscopy</b> with at least 6 biopsies; brush cytology or EUS-guided FNA if biopsy is not possible; do not dilate a malignant stricture ${r(2)}.</li>
<li>Histology is needed before staging or treatment; pathology by a trained oncopathologist or telepathology ${r(2)}.</li>
<li><b>Staging</b>: CECT thorax (essential) and abdomen; PET-CECT and EUS desirable; bronchoscopy for bulky tumours at or above the carina; laparoscopy/thoracoscopy in selected cases ${r(2)}.</li>
<li>Fitness: echo, lung function (FEV₁, DLCO) for radical treatment; CBC, albumin, kidney and liver tests ${r(2)}.</li>
<li>Nutritional assessment for every patient ${r(2)}.</li>
</ul>
` },

{ id: "staging", title: "Treatment helper", html: `<div class="calc" data-calc="oesoplan"></div>` },

{ id: "manage", title: "Management", html: `
<p>Decide in a multidisciplinary team: surgical, medical and radiation oncologists, gastroenterologist, pathologist, radiologist, chest physician ${r(2)}.</p>
<h3>By site and stage (ICMR 2017)</h3>
${tbl(["Situation", "Treatment"], [
["Tumour within 5 cm of the cricopharynx (upper oesophagus)", "Definitive concurrent chemoradiation " + r(2)],
["Very early (T1a, mucosa only, N0)", "Endoscopic mucosal resection " + r(2)],
["Early (T1–T2, N0), middle/lower third or GEJ", "Surgery (oesophagectomy) " + r(2)],
["Locally advanced (T3/T4a or node-positive)", "Neoadjuvant chemotherapy or chemoradiation, then surgery — CROSS trial: median survival 49.4 vs 24 months " + r(2)],
["Unfit for surgery or patient declines", "Definitive chemoradiation (5-FU + cisplatin, or taxane + platinum; about 50 Gy) " + r(2)],
["Metastatic", "Palliation: radiotherapy, stent, chemotherapy, nutrition " + r(2)]
])}
<h3>Surgery</h3>
<p>Needs performance status ECOG 0–1 and adequate heart–lung reserve. Margins of 5 cm, two-field lymphadenectomy, at least 15 nodes, stomach as the conduit with a pyloric drainage procedure ${r(2)}.</p>
<h3>Nutrition — throughout</h3>
<ul><li>Assess everyone; enteral feeding is preferred (soft/liquid high-calorie diet, nasogastric tube, or feeding jejunostomy/gastrostomy) ${r(2)}.</li><li>Oral hygiene and pulmonary rehabilitation before radical treatment ${r(2)}.</li></ul>
<h3>Palliation of dysphagia</h3>
<p>Self-expanding metal stent, palliative radiotherapy or brachytherapy; manage pain, aspiration and secretions ${r(2)}. See ${P("palliative-care", "Palliative care")}.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "Note"], [
["Fluorouracil + cisplatin", "Definitive or neoadjuvant chemoradiation; neoadjuvant chemotherapy " + r(2), "Oncologist; 5-FU on NEML"],
["Paclitaxel/carboplatin (taxane + platinum)", "Common chemoradiation regimen (CROSS-type) " + r(2), "Oncologist"],
["Oral nutrition supplements", "All malnourished patients " + r(2), "Dietitian"],
["Morphine", "Pain in advanced disease", "See palliative care"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Heavy drinkers and smokers:</b> any swallowing problem needs endoscopy; stop tobacco and alcohol ${LB.exp("STANDARD")}.</li><li><b>Long-standing reflux / Barrett's:</b> surveillance endoscopy per specialist ${LB.exp("STANDARD")}.</li><li><b>Previous lye ingestion or achalasia:</b> raised risk years later ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Cannot swallow saliva", "IV fluids, NG tube if it passes (else urgent endoscopy for stent), treat aspiration"],
["Coughing on every drink", "Suspect tracheo-oesophageal fistula — nil by mouth, CT/endoscopy, covered stent " + LB.exp("STANDARD")],
["Severe weight loss before surgery", "Feed first (enteral) — malnutrition raises surgical risk " + r(2)],
["Asked to 'dilate the stricture' before biopsy", "No — biopsy first; dilating malignant strictures is not advised " + r(2)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Malnutrition, aspiration pneumonia, tracheo-oesophageal fistula, bleeding; after surgery — anastomotic leak, pneumonia, stricture; after chemoradiation — oesophagitis, stricture ${r(2)} ${LB.exp("STANDARD TEACHING")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Clinical review with weight and nutrition at each visit; endoscopy for new dysphagia (stricture or recurrence).</li><li>Residual or recurrent disease after chemoradiation: salvage surgery if fit and no distant spread ${r(2)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Endoscopy with biopsy is the key test.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Progressive dysphagia", [F.s("Urgent endoscopy + ≥ 6 biopsies; nutrition"), F.a, F.s("Stage: CECT (± PET, EUS, bronchoscopy); fitness"), F.a, F.d("Site / stage?"), F.a, F.b([["Upper third", F.e("Definitive chemoradiation")], ["Early mid/lower", F.e("EMR or surgery")], ["Locally advanced", F.e("Neoadjuvant chemo(radio)therapy → surgery")], ["Metastatic", F.ok("Stent / RT / chemo; palliative care")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating dysphagia with antacids", "Delay", "Endoscopy for any progressive dysphagia " + r(3)],
["Dilating before biopsy", "Perforation, delay", "Biopsy first " + r(2)],
["Ignoring nutrition", "Worse outcomes", "Assess and feed early " + r(2)],
["Surgery for upper-third tumours", "Morbidity", "Chemoradiation preferred " + r(2)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "First test for progressive dysphagia?", "Upper endoscopy with at least 6 biopsies.")}
${qa("Registrar", "Treatment for a tumour within 5 cm of the cricopharynx?", "Definitive concurrent chemoradiation.")}
${qa("Registrar", "What did CROSS show?", "Neoadjuvant chemoradiation before surgery improved R0 resection and median survival (49.4 vs 24 months) without more surgical mortality.")}
${qa("Specialist", "Minimum lymph node yield after oesophagectomy?", "15 (ICMR).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Cancer incidence and mortality in Bhutan 2019–2022 (population-based cancer registry).</li>
<li id="ref-2">Indian Council of Medical Research. Consensus document for management of esophageal cancer. New Delhi: ICMR; 2017.</li>
<li id="ref-3">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12), §1.2 Upper gastrointestinal tract cancers. <a href="https://www.nice.org.uk/guidance/ng12" target="_blank" rel="noopener">nice.org.uk</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan PBCR 2019–22", "<span class='pass'>Read</span>", "Male figures"], ["ICMR oesophageal consensus 2017", "<span class='pass'>Read</span>", "Library PDF"], ["NICE NG12 §1.2", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Risk factors, complications", "<span class='unv'>Standard teaching</span>", "Marked"], ["Calculator", "<span class='pass'>New</span>", "oesoplan"]], "qc")}` }
]
});
})();
