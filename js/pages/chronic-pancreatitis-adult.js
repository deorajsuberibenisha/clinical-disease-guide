/* Chronic pancreatitis — adults (tropical pancreatitis in young people). NEW disease (batch N-6, 28 Nov 2026).
   Sources read directly: NICE NG104 Pancreatitis §1.3 (read in browser 28 Nov 2026: think of it in chronic/recurrent upper abdominal pain; do not
   assume alcohol — genetic, autoimmune (IgG4), metabolic, structural; all at high risk of malabsorption/malnutrition; dietitian; surgery first-line
   for painful main-duct obstruction, ESWL for dominant stone if surgery unsuitable; EUS/transpapillary drainage of symptomatic pseudocysts; neuropathic
   pain per CG173; type 3c diabetes — HbA1c at least 6-monthly, lifetime risk up to 80%; exocrine/nutrition review ≥12-monthly; bone density every
   2 years; pancreatic cancer risk, ~40% lifetime in hereditary pancreatitis); Merck Manual Professional — Chronic pancreatitis (full review Aug 2026:
   ~50% alcohol, smoking independent dose-dependent risk; tropical pancreatitis in children/young adults in India etc — early onset, large ductal
   calculi, cancer risk; postprandial epigastric pain relieved leaning forward; steatorrhoea when enzymes <10%; amylase/lipase often normal; plain
   X-ray calcification in ~30%, CT, MRCP; faecal elastase; low-fat diet; enzyme replacement 25,000–50,000 IU lipase per meal, half with snacks,
   PPI with non-enteric-coated; glucocorticoids for autoimmune pancreatitis; endoscopic therapy, lithotripsy, coeliac block, surgery); NEML 2025
   (no pancreatic enzyme preparation; omeprazole, insulin, paracetamol, tramadol inj, morphine tab/inj, amitriptyline, gabapentin listed).
   Covers remaining-list item 'Chronic pancreatitis'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "chronic-pancreatitis-adult",
title: "Chronic Pancreatitis",
subtitle: "Recurrent or constant upper abdominal pain, greasy stools, weight loss and new diabetes in a drinker, smoker or young person from a tropical region: confirm on imaging, stop alcohol and smoking, replace enzymes with meals, treat diabetes carefully, and look for cancer",
age: "Adult (young adults: tropical form)", specs: ["gi", "medicine", "endo", "surg"],
keywords: ["chronic pancreatitis", "tropical pancreatitis", "fibrocalculous pancreatic diabetes", "pancreatic calcification", "steatorrhoea", "pancreatic enzyme replacement", "creon", "type 3c diabetes", "pancreatogenic diabetes", "pseudocyst", "pancreatic duct stone", "faecal elastase", "alcohol pancreatitis", "autoimmune pancreatitis IgG4"],
related: ["pancreatitis-adult", "alcohol-adult", "dm-adult", "neuropathy-adult", "gastric-cancer-adult", "weightloss-adult", "nutrition-adult", "osteoporosis-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Permanent pancreatic damage after repeated inflammation. The three problems are <b>pain</b>, <b>malabsorption</b> and <b>diabetes</b> — plus a higher cancer risk ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Chronic/recurrent epigastric pain going to the back, relieved by leaning forward; greasy floating stools; weight loss; new diabetes ${r(2)}.</p></div>
<div><h4>Confirm</h4><p>Amylase/lipase are often normal. Plain X-ray (calcification in ~30%), ultrasound, <b>CT</b> or MRCP; faecal elastase ${r(2)}.</p></div>
<div><h4>Treat</h4><p>Stop alcohol and smoking; enzymes with every meal (25,000–50,000 units lipase); analgesia ladder; dietitian ${r(1)} ${r(2)}.</p></div>
<div><h4>Watch</h4><p>HbA1c every 6 months, nutrition yearly, bone density every 2 years, cancer if pain changes ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p><b>Pancreatic enzyme capsules are not on the NEML</b> ${r(3)} — patients often need private or referral supply ${LB.loc()}. Alcohol (ara, beer) and smoking are the main local drivers; also think of <b>tropical pancreatitis</b> in young people with stones and diabetes ${r(2)}. Diabetes here is insulin-deficient and hypoglycaemia-prone — start insulin carefully ${r(1)} ${r(2)}.</p>`)}
` },

{ id: "overview", title: "Causes", html: `
${tbl(["Cause", "Note"], [
["Alcohol", "~50% of cases; risk added to by smoking " + r(2)],
["Smoking", "Independent, dose-dependent " + r(2)],
["Tropical (idiopathic) pancreatitis", "Children/young adults; large duct stones, fast course, cancer risk " + r(2)],
["Genetic / hereditary", "Young onset, family history; cancer lifetime risk ~40% " + r(1)],
["Autoimmune (IgG4)", "Jaundice, mass-like pancreas; steroid-responsive " + r(1) + " " + r(2)],
["Metabolic", "Hypercalcaemia, very high triglycerides " + r(1)],
["Obstructive / structural", "Duct strictures, stones, tumours, pancreas divisum " + r(1) + " " + r(2)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Chronic pancreatitis", [F.s("Repeated injury (alcohol, smoking, stones, genes)"), F.a, F.s("Fibrosis, duct strictures, calcified stones, atrophy"), F.a, F.e("Pain; enzymes <10% → steatorrhoea; islet loss → type 3c diabetes")])} <p>${r(2)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG104", "Merck 2026", "This guide"], [
["Duct obstruction with pain", "Surgery first-line; ESWL if surgery unsuitable", "Endoscopic therapy in selected; early surgery more durable", "Specialist referral " + r(1) + " " + r(2)],
["Enzymes for pain", "—", "May help some; often little benefit", "Give for steatorrhoea; trial for pain " + r(2)],
["Low-fat diet", "Dietitian-led", "&lt;25 g fat/day", "Dietitian advice; enough calories " + r(1) + " " + r(2)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Epigastric pain after meals, through to the back, eased by sitting forward; episodic then constant ${r(2)}.</li>
<li>Steatorrhoea, bloating, weight loss, fat-soluble vitamin (A, D, E, K) deficiency ${r(2)}.</li>
<li>Diabetes, often with hypoglycaemia risk (glucagon loss) ${r(2)}.</li>
<li>Complications: pseudocyst, duodenal or bile duct obstruction (jaundice), splenic vein thrombosis, pancreatic ascites/pleural effusion, cancer ${r(1)} ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 41-year-old man from Trongsa who drinks ara daily and smokes has had epigastric pain for 3 years, now constant, with oily stools and 8 kg weight loss. Abdominal X-ray shows pancreatic calcification; HbA1c 8.4%. <b>Chronic calcific pancreatitis with exocrine and endocrine failure</b>: alcohol and smoking cessation, enzyme supplements with meals, dietitian, analgesia, cautious insulin, CT to exclude a mass ${r(1)} ${r(2)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Pancreatic cancer", "Older, jaundice, weight loss, new pain pattern; CT, CA 19-9 " + r(2)],
["Peptic ulcer / gastric cancer", "Endoscopy " + P("gastric-cancer-adult", "Gastric cancer")],
["Gallstones", "Biliary colic, ultrasound " + P("gallstones-adult", "Gallstones")],
["Coeliac disease, other malabsorption", "Normal pancreas imaging " + LB.exp("STANDARD")],
["Abdominal TB", "Fever, ascites, nodes " + P("tb-adult", "TB")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Imaging: plain abdominal X-ray (calcification), ultrasound, <b>CT</b> (also excludes cancer), MRCP ${r(2)}.</li>
<li>Faecal elastase (low in exocrine insufficiency); serum trypsinogen where available ${r(2)}.</li>
<li>HbA1c/glucose, calcium, triglycerides, liver tests, vitamin D, albumin, FBC ${r(1)} ${LB.exp("STANDARD")}.</li>
<li>IgG4 if autoimmune pancreatitis suspected ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Chronic pancreatitis helper", html: `<div class="calc" data-calc="cpplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Stop the cause ${r(2)}</h3>
<ul><li>Alcohol abstinence (support: ${P("alcohol-adult", "Alcohol")}) and smoking cessation slow progression.</li></ul>
<h3>Pain</h3>
<ul>
<li>${dr("paracetamol")} first; short courses of ${dr("tramadol")} or ${dr("morphine")} with caution (dependence) ${LB.exp("LADDER STANDARD")}.</li>
<li>Neuropathic component: ${dr("amitriptyline")} or ${dr("gabapentin")} as in NICE CG173 ${r(1)} ${P("neuropathy-adult", "Neuropathy")}.</li>
<li>Look for treatable causes: pseudocyst, duct stone/stricture, duodenal or bile duct obstruction, cancer ${r(1)} ${r(2)}.</li>
<li>Specialist: surgery for painful main-duct obstruction; lithotripsy for a dominant stone; endoscopic stents; coeliac plexus block ${r(1)} ${r(2)}.</li>
</ul>
<h3>Malabsorption ${r(1)} ${r(2)}</h3>
<ul>
<li>Pancreatic enzyme replacement with meals: start at 25,000–50,000 IU lipase per meal and half with snacks; titrate to stools and weight; ${dr("omeprazole")} if enzymes are not enteric-coated or response is poor.</li>
<li>Dietitian review; fat-soluble vitamins (A, D, E, K) as needed.</li>
</ul>
<h3>Diabetes (type 3c) ${r(1)}</h3>
<ul><li>HbA1c at least every 6 months; review every 6 months for insulin; risk of hypoglycaemia — avoid tight targets in drinkers ${r(2)} ${LB.exp("TARGETS STANDARD")}.</li></ul>
<h3>Autoimmune pancreatitis</h3>
<ul><li>${dr("prednisolone")} via specialist ${r(2)}.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
["Pancreatic enzymes (pancreatin)", "25,000–50,000 IU lipase per meal " + r(2), "Not listed " + r(3)],
[dr("omeprazole"), "With enzymes if needed " + r(2), "20 mg"],
[dr("paracetamol"), "Pain, first step", "Listed"],
[dr("tramadol"), "Short-term pain " + LB.exp("STANDARD"), "50 mg/mL injection"],
[dr("amitriptyline"), "Neuropathic pain " + r(1), "25 mg"],
[dr("insulin_soluble", "Insulin"), "Type 3c diabetes " + r(1), "Listed"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children/young adults:</b> tropical or hereditary pancreatitis — stones, diabetes, cancer risk; exocrine review every 6 months under 16 ${r(1)} ${r(2)}.</li><li><b>Older adults with new 'chronic pancreatitis':</b> exclude pancreatic cancer ${r(2)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Increasing opioid requests", "Look for complication or cancer; neuropathic agents; specialist pain/endoscopy " + r(2)],
["Enzymes unaffordable", "Dietitian advice; prioritise patients with steatorrhoea and weight loss " + LB.loc()],
["Hypoglycaemia on insulin while drinking", "Simplify regimen, looser targets, education " + LB.exp("STANDARD")],
["Painless jaundice in known chronic pancreatitis", "Bile duct stricture or cancer — imaging, refer"]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Pseudocyst, duct stones and strictures, biliary or duodenal obstruction, splenic vein thrombosis and gastric varices, pancreatic ascites, osteoporosis, malnutrition, diabetes, pancreatic cancer, opioid dependence ${r(1)} ${r(2)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>HbA1c every 6 months; nutrition and exocrine review at least yearly (6-monthly in under 16s); bone density every 2 years ${r(1)}.</li><li>Annual cancer surveillance in hereditary pancreatitis ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Speckled calcification across the upper abdomen on a plain film is typical.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Chronic upper abdominal pain ± steatorrhoea", [F.s("Ultrasound / X-ray / CT"), F.a, F.d("Calcification, duct changes, atrophy?"), F.a, F.b([["Yes", F.e("Stop alcohol/smoking; enzymes; analgesia; HbA1c; dietitian; refer complications")], ["No", F.s("Endoscopy, other causes; MRCP if still suspected")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Ruling out by normal amylase/lipase", "Often normal in chronic disease", "Imaging " + r(2)],
["Assuming all is alcohol", "Missing genetic, autoimmune, tropical causes", "Ask age of onset, family history " + r(1)],
["Enzymes taken between meals", "No benefit", "Take with food"],
["Missing diabetes or cancer", "Late diagnosis", "Regular HbA1c; image when pain changes " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Why can amylase be normal?", "Loss of pancreatic tissue in chronic disease.")}
${qa("Intern/MO", "Starting enzyme dose?", "25,000–50,000 IU lipase per meal, half with snacks (Merck).")}
${qa("Registrar", "How often should HbA1c be checked (NICE)?", "At least every 6 months.")}
${qa("Specialist", "First-line treatment for painful main-duct obstruction (NICE)?", "Surgery; ESWL for a dominant stone if surgery unsuitable.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Pancreatitis (NG104), §1.3 Chronic pancreatitis. <a href="https://www.nice.org.uk/guidance/ng104" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Merck Manual Professional Edition. Chronic pancreatitis (full review Aug 2026).</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG104 §1.3", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Merck chronic pancreatitis", "<span class='pass'>Read</span>", "Aug 2026"], ["NEML", "<span class='pass'>Checked</span>", "No enzyme preparation"]], "qc")}` }
]
});
})();
