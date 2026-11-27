/* Colorectal cancer — adults. NEW disease (batch N-3, 27 Nov 2026).
   Sources read directly: Bhutan PBCR 'Cancer incidence and mortality in Bhutan 2019–2022' (colon 72 cases in men, 4.9% of male cancers, AAR 5.2;
   colon and rectum among leading sites in both sexes; surgery mainly at JDWNRH, chemotherapy started at JDWNRH or continued after Kolkata);
   ICMR Consensus document for management of colorectal cancer (2014; library PDF read: risk factors — FAP, Lynch, UC, diabetes, alcohol, red and
   processed meat, obesity, smoking; DRE misses > 60% of lesions; CBC, LFT, RFT, CEA (± CA19-9); complete colonoscopy before or within 3 months
   after surgery; histology; imaging essential — chest X-ray, abdominal USG/CT, CECT chest–abdomen–pelvis; rectal MRI pelvis; MDT; Amsterdam II
   and revised Bethesda criteria; surgery principles — 5 cm margins with nodes, ≥ 12 nodes, TME for rectum, 1–2 cm distal margin acceptable,
   transanal excision criteria for small T1; adjuvant FOLFOX/CAPEOX for stage III; high-risk stage II features (< 12 nodes, poorly differentiated,
   LVI/PNI, obstruction/perforation, pT4, positive margins) → capecitabine monotherapy; dMMR stage II no 5-FU; rectal — short-course RT 25 Gy/5
   or long-course CTRT 45–50.4 Gy with capecitabine 825 mg/m² BD; surgery 5–10 weeks after CTRT; 6 months perioperative chemo; follow-up table,
   colonoscopy at 1 year then every 3 years, polyps every 6–12 months);
   NICE NG12 (2015, updated; §1.3 read in browser 27 Nov 2026: FIT for abdominal mass, change in bowel habit, iron-deficiency anaemia, ≥ 40 with
   weight loss + abdominal pain, < 50 with rectal bleeding + pain or weight loss, ≥ 50 with rectal bleeding, pain or weight loss, ≥ 60 with
   anaemia; refer if FIT ≥ 10 µg Hb/g; safety-net negatives; rectal mass → consider direct referral; anal mass/ulcer → anal cancer pathway);
   NEML 2025 text (fluorouracil 50 mg/mL, folinic acid 10 mg/mL, methotrexate listed; capecitabine, oxaliplatin, irinotecan NOT found). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "colorectal-cancer-adult",
title: "Colorectal Cancer — Adults",
subtitle: "Rectal bleeding, change in bowel habit, iron-deficiency anaemia or weight loss in an adult needs a colonoscopy or FIT — not a diagnosis of 'piles' — then staging, surgery in a multidisciplinary team, and chemotherapy or radiotherapy by stage",
age: "Adults (mostly over 40)", specs: ["onc", "surg", "gi"],
keywords: ["colorectal cancer", "colon cancer", "rectal cancer", "bowel cancer", "carcinoma colon", "rectal bleeding", "change in bowel habit", "iron deficiency anaemia", "FIT", "faecal immunochemical test", "colonoscopy", "CEA", "Lynch syndrome", "FAP", "hemicolectomy", "TME", "FOLFOX", "CAPEOX", "capecitabine", "large bowel obstruction"],
related: ["lgib-adult", "haemorrhoids-adult", "anaemia-adult", "uc-adult", "crohns-adult", "weightloss-adult", "gastric-cancer-adult", "palliative-care"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Colon and rectal cancers are among the leading cancers in Bhutan (colon cancer alone is about 5% of cancers in men) ${r(1)}. Many are first treated as haemorrhoids or worms. Early cancers are curable with surgery.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Rectal bleeding, change in bowel habit, iron-deficiency anaemia, weight loss with abdominal pain, abdominal or rectal mass ${r(3)}.</p></div>
<div><h4>Test</h4><p>FIT — refer if ≥ 10 µg Hb/g (NICE); a rectal mass needs direct referral. Definitive test: <b>colonoscopy with biopsy</b> ${r(2)} ${r(3)}.</p></div>
<div><h4>Stage</h4><p>CBC, LFT, CEA; CECT chest–abdomen–pelvis; MRI pelvis for rectal cancer ${r(2)}.</p></div>
<div><h4>Treat</h4><p>Surgery (with ≥ 12 nodes); adjuvant chemotherapy for stage III and high-risk stage II; rectal — preoperative (chemo)radiotherapy ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>There is no STG section on colorectal cancer. Colonoscopy and surgery are at JDWNRH and the regional referral hospitals; radiotherapy is available in Bhutan only intermittently and patients are often referred to India ${r(1)} ${LB.loc()}. FIT is not part of a national programme ${LB.loc()}. NEML 2025 lists fluorouracil and folinic acid; <b>capecitabine and oxaliplatin were not found</b> ${r(4)}.</p>`)}
` },

{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Burden in Bhutan", "Colon and rectum among the leading cancer sites in both sexes; colon 72 cases in men 2019–22 (age-adjusted 5.2 per 100,000) " + r(1)],
["Type", "Adenocarcinoma from adenomatous polyps in most"],
["Right vs left", "Right colon: anaemia, mass, few bowel symptoms. Left colon/rectum: bleeding, change in bowel habit, obstruction, tenesmus " + LB.exp("STANDARD TEACHING")],
["Hereditary", "About 5%: Lynch syndrome (young, right-sided, with endometrial and other cancers) and FAP (hundreds of polyps) " + r(2)],
["Risk factors", "Age, male sex, ulcerative colitis, diabetes, alcohol, red and processed meat, obesity, smoking, low fibre " + r(2)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Colorectal cancer", [F.s("Normal mucosa"), F.a, F.s("Adenomatous polyp (APC, KRAS, TP53 changes)"), F.a, F.s("Invasive adenocarcinoma"), F.a, F.e("Lymph nodes → liver, lung, peritoneum")])}
<p>Most cancers grow from polyps over years — the reason screening and polyp removal prevent cancer ${r(2)}.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG12 (UK)", "ICMR 2014 (India)", "This guide"], [
["First test", "FIT for most symptoms; refer if ≥ 10 µg/g", "Colonoscopy for all suspected", "Colonoscopy where available; FIT only if colonoscopy is far away and to prioritise " + r(2) + r(3) + " " + LB.loc()],
["Stage III adjuvant", "—", "FOLFOX or CAPEOX", "FOLFOX/CAPEOX if available; 5-FU + folinic acid (NEML) otherwise " + r(2) + r(4)],
["High-risk stage II", "—", "Capecitabine monotherapy; test MMR first", "Same; specialist " + r(2)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Rectal bleeding (dark or mixed with stool), change in bowel habit, tenesmus, mucus ${r(3)}.</li>
<li>Iron-deficiency anaemia — in men and post-menopausal women always look for a bowel cause ${r(3)}.</li>
<li>Abdominal pain, weight loss, abdominal or rectal mass ${r(3)}.</li>
<li>Emergencies: large bowel obstruction, perforation, heavy bleeding.</li>
<li>Spread: jaundice, liver enlargement, ascites, cough.</li>
<li>Digital rectal examination finds low rectal tumours but misses more than 60% of colorectal cancers ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 58-year-old man from Chukha has 4 months of altered bowel habit and dark blood in the stool, Hb 8.5 g/dL with low MCV; he was treated twice for 'piles'. <b>Suspected colorectal cancer</b>: refer for colonoscopy and biopsy; CBC, LFT, CEA; CECT if cancer is confirmed ${r(2)} ${r(3)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Haemorrhoids / fissure", "Bright red blood on paper, pain with fissure — but never assume in an older patient " + P("haemorrhoids-adult", "Haemorrhoids")],
["Inflammatory bowel disease", "Younger, bloody diarrhoea " + P("uc-adult", "UC")],
["Intestinal TB", "Ileocaecal mass, fever, weight loss"],
["Amoebic colitis / dysentery", "Diarrhoea with blood and fever"],
["Diverticular disease, angiodysplasia", "Older, bleeding " + P("lgib-adult", "Lower GI bleeding")],
["Other cancers", "Gastric cancer (anaemia) " + P("gastric-cancer-adult", "Gastric cancer")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Colonoscopy with biopsy</b> — complete the whole colon, before surgery or within 3 months after it (synchronous lesions) ${r(2)}.</li>
<li>FIT where colonoscopy is not immediately available — refer if ≥ 10 µg Hb/g; safety-net negatives if symptoms persist ${r(3)}.</li>
<li>CBC, liver and kidney tests, <b>CEA</b> (± CA19-9) — baseline for follow-up and prognosis ${r(2)}.</li>
<li>Staging: chest X-ray and abdominal ultrasound (essential); CECT chest–abdomen–pelvis (ideal); <b>MRI pelvis for rectal cancer</b> ${r(2)}.</li>
<li>Pathology: TNM stage, at least 12 lymph nodes examined, margins; MMR/MSI testing ${r(2)}.</li>
</ul>
` },

{ id: "staging", title: "Referral and treatment helper", html: `<div class="calc" data-calc="crcplan"></div>` },

{ id: "manage", title: "Management", html: `
<p>All cases should be discussed by a multidisciplinary team (surgeon, oncologist, radiotherapist, radiologist, pathologist, stoma nurse, palliative care) ${r(2)}.</p>
<h3>Colon cancer</h3>
<ul>
<li><b>Surgery</b>: resect the tumour with at least 5 cm of bowel either side and its lymph nodes (right/extended right/left hemicolectomy, sigmoid colectomy); at least 12 nodes for adequate staging; laparoscopic surgery by experienced surgeons ${r(2)}.</li>
<li><b>Stage III</b> (node-positive): adjuvant FOLFOX or CAPEOX ${r(2)}.</li>
<li><b>Stage II</b>: discuss; high-risk features (under 12 nodes, poorly differentiated, vascular/lymphatic/perineural invasion, obstruction or perforation, pT4, positive margins) → capecitabine monotherapy; MMR-deficient stage II tumours do not benefit from 5-FU ${r(2)}.</li>
<li>Obstruction: resection, or stent/stoma as a bridge; primary anastomosis may be deferred if bowel is oedematous or the patient is unwell ${r(2)}.</li>
</ul>
<h3>Rectal cancer</h3>
<ul>
<li>Total mesorectal excision (TME); distal margin 1–2 cm acceptable for low tumours ${r(2)}.</li>
<li>Low-risk tumours: surgery; short-course radiotherapy (25 Gy in 5 fractions) in selected cases ${r(2)}.</li>
<li>Higher-risk or low tumours (to save the sphincter): long-course chemoradiotherapy 45–50.4 Gy with capecitabine or 5-FU, surgery 5–10 weeks later; about 6 months of perioperative chemotherapy in total ${r(2)}.</li>
<li>Small T1 tumours meeting strict criteria (under 3 cm, within 8 cm of the anal verge, under 30% of the circumference, well/moderately differentiated, no nodes) may be excised transanally ${r(2)}.</li>
</ul>
<h3>Metastatic disease</h3>
<p>Resectable liver or lung metastases: surgery with chemotherapy can cure some; otherwise palliative chemotherapy and supportive care ${r(2)}. See ${P("palliative-care", "Palliative care")}.</p>
<h3>Hereditary cancer</h3>
<p>Refer for genetic assessment if: cancer before 40 (or uterine before 45), multiple polyps, two primary cancers, Amsterdam II criteria (3 relatives, 2 generations, 1 under 50), or a known family mutation ${r(2)}.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
["Fluorouracil (5-FU) + folinic acid", "Adjuvant (5-FU/LV), FOLFOX backbone, with radiotherapy " + r(2), "Listed " + r(4)],
["Capecitabine", "Adjuvant (CAPEOX or alone), with radiotherapy (825 mg/m² twice daily) " + r(2), "Not found " + r(4)],
["Oxaliplatin", "FOLFOX / CAPEOX " + r(2), "Not found " + r(4)],
["Iron", "Correct anaemia before surgery " + LB.exp("STANDARD"), "Yes"]
])}
<p class="small">Chemotherapy is prescribed by oncologists; doses by body surface area.</p>
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Young patients (under 50):</b> think of Lynch syndrome and FAP; do not dismiss bleeding ${r(2)} ${r(3)}.</li><li><b>Ulcerative colitis:</b> long, extensive disease raises risk — surveillance colonoscopy ${r(2)}.</li><li><b>Older, frail:</b> stoma or stent may be safer than major surgery.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Iron-deficiency anaemia in a man, no bleeding history", "Colonoscopy (and upper endoscopy) — do not just give iron " + r(3)],
["Large bowel obstruction at a district hospital", "Resuscitate, NG tube, CT if available, surgical decompression (stoma) and refer " + LB.exp("STANDARD")],
["Patient refuses a stoma", "Explain often temporary; stoma nurse; family"],
["FIT negative, symptoms continue", "Do not stop — refer if clinical concern remains " + r(3)],
["Liver metastases at presentation", "MDT — some are resectable " + r(2)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Obstruction, perforation, bleeding, fistula, liver failure from metastases; after surgery — anastomotic leak, wound infection, stoma problems; chemotherapy neuropathy (oxaliplatin), diarrhoea, hand–foot syndrome (capecitabine) ${LB.exp("STANDARD TEACHING")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Clinic review with CEA every 3–6 months for the first 2–3 years, then less often to 5 years; CT chest–abdomen–pelvis at intervals (ICMR table) ${r(2)}.</li><li><b>Colonoscopy 1 year after surgery, then every 3 years</b>; polyps — every 6–12 months until clear ${r(2)}.</li><li>Screen first-degree relatives in hereditary cases ${r(2)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Colonoscopy with biopsy is the key test.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Lower GI symptoms in an adult", [F.d("Rectal mass or red flags (anaemia, weight loss, mass)?"), F.a, F.b([["Yes", F.e("Colonoscopy + biopsy / urgent referral")], ["No", F.s("FIT if available")]]), F.a, F.d("FIT ≥ 10 µg/g or symptoms persist?"), F.a, F.b([["Yes", F.e("Colonoscopy")], ["No", F.ok("Safety net; review")]]), F.a, F.ok("Cancer: stage (CEA, CT, MRI pelvis) → MDT → surgery ± chemo/RT")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Labelling bleeding as piles without examination", "Delayed diagnosis", "Examine; colonoscopy if age or red flags " + r(3)],
["Iron for anaemia without a cause", "Missed cancer", "Investigate men and post-menopausal women " + r(3)],
["Relying on a normal rectal exam", "Misses > 60% of cancers", "Colonoscopy " + r(2)],
["Under 12 nodes in the specimen", "Under-staging", "Adequate lymphadenectomy " + r(2)],
["No colonoscopy surveillance", "Missed recurrence and new polyps", "1 year, then every 3 years " + r(2)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "FIT threshold for urgent referral (NICE)?", "At least 10 µg haemoglobin per gram of faeces.")}
${qa("Intern/MO", "Minimum lymph nodes for adequate staging?", "12.")}
${qa("Registrar", "Adjuvant chemotherapy for stage III colon cancer?", "FOLFOX or CAPEOX.")}
${qa("Registrar", "High-risk features in stage II?", "Under 12 nodes, poorly differentiated, vascular/lymphatic/perineural invasion, obstruction or perforation, pT4, positive margins.")}
${qa("Specialist", "Colonoscopy surveillance after resection?", "At 1 year, then every 3 years (polyps: every 6–12 months until clear).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Cancer incidence and mortality in Bhutan 2019–2022 (population-based cancer registry).</li>
<li id="ref-2">Indian Council of Medical Research. Consensus document for management of colorectal cancer. New Delhi: ICMR; 2014.</li>
<li id="ref-3">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12), §1.3 Lower gastrointestinal tract cancers. <a href="https://www.nice.org.uk/guidance/ng12" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan PBCR 2019–22", "<span class='pass'>Read</span>", "Colon figures"], ["ICMR CRC consensus 2014", "<span class='pass'>Read</span>", "Older document — check newer regimens"], ["NICE NG12 §1.3", "<span class='pass'>Read</span>", "27 Nov 2026"], ["NEML 2025", "<span class='flag'>Gap</span>", "No capecitabine or oxaliplatin"], ["Bhutan STG", "<span class='unv'>No section</span>", ""], ["Calculator", "<span class='pass'>New</span>", "crcplan"]], "qc")}` }
]
});
})();
