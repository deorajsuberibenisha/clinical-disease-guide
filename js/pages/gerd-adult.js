/* Gastro-oesophageal reflux disease — adults */
registerPage({
id: "gerd-adult",
title: "Gastro-oesophageal Reflux Disease — Adults",
subtitle: "Heartburn and regurgitation: an 8-week PPI trial with lifestyle changes for most, endoscopy for alarm features, and stepping down once symptoms settle",
age: "Adults", specs: ["gi", "medicine"],
keywords: ["GERD", "GORD", "reflux", "heartburn", "acid reflux", "regurgitation", "oesophagitis", "Barrett's", "PPI", "omeprazole", "famotidine"],
related: ["apd-adult", "acs-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Typical reflux needs no tests: treat, then reduce the medicine. Chest pain needs a heart check first, and alarm features need endoscopy.</p>
<div class="glance">
<div><h4>Typical</h4><p>Heartburn, regurgitation, worse lying down or after meals.</p></div>
<div><h4>Treat</h4><p>${dr("omeprazole")} 20 mg daily before breakfast for 8 weeks + lifestyle; then step down.</p></div>
<div><h4>Endoscopy if</h4><p>Dysphagia, weight loss, bleeding, anaemia, vomiting, age over 60 with new symptoms.</p></div>
<div><h4>Avoid</h4><p>Ranitidine (withdrawn); use ${dr("famotidine")} instead.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §4.1.1: antacid after meals; if not better, ranitidine 150 mg BD or omeprazole 20 mg BD for 1 month; metoclopramide 10 mg BD for 5 days; refer if not improved. Ranitidine was withdrawn worldwide in 2020 and replaced by famotidine on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `<p>Lower oesophageal sphincter relaxation, hiatus hernia, obesity, pregnancy, large late meals, alcohol, smoking, fatty food, some drugs (calcium-channel blockers, nitrates).${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Reflux", [F.s("Acid and pepsin flow back into the oesophagus"), F.a, F.b([["Symptoms only", F.s("Non-erosive reflux")], ["Mucosal damage", F.e("Oesophagitis → stricture, Barrett's")]]), F.a, F.ok("Acid suppression heals and relieves")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "ACG 2022", "This guide"], [["H2 blocker", "Ranitidine", "Ranitidine withdrawn", "Famotidine " + LB.loc()], ["PPI dose", "20 mg BD for 1 month", "Once daily before breakfast for 8 weeks, then lowest effective dose", "Once daily first; twice daily only if partial response"], ["Metoclopramide", "10 mg BD × 5 days", "Not recommended for GERD", "Avoid (no benefit, neurological side effects)"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Heartburn, regurgitation, sour taste; chronic cough, hoarseness, asthma worsening (atypical).</li></ul>${box("red", "Alarm features: endoscopy", `<ul><li>Difficulty or pain swallowing</li><li>Weight loss, anaemia, GI bleeding</li><li>Persistent vomiting</li><li>New symptoms over 60 (lower threshold in Bhutan given gastric cancer)</li></ul>`)}
<h3>The typical patient</h3><p>A 35-year-old office worker in Thimphu has burning behind the breastbone after late dinners and when lying down, no alarm features, normal ECG. <b>This is typical GERD</b>: omeprazole 20 mg before breakfast for 8 weeks, earlier lighter dinners, raise the head of the bed, reduce alcohol, then step down.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["<b>Angina / ACS</b>", "Exertional, risk factors: ECG first"], ["Peptic ulcer, H. pylori", "Epigastric pain"], ["Oesophageal cancer", "Progressive dysphagia, weight loss"], ["Eosinophilic oesophagitis", "Young, food impaction"]])}` },
{ id: "invest", title: "Investigations", html: `<p>None for typical symptoms. Endoscopy for alarm features or failure of 8 weeks' PPI. ECG for chest pain with risk factors. H. pylori testing if dyspepsia predominates.</p>` },
{ id: "staging", title: "Severity", html: `<p>Los Angeles grades A–D at endoscopy; grade C/D oesophagitis and Barrett's need long-term PPI.</p>` },
{ id: "manage", title: "Management", html: `<ul><li>Lifestyle: weight loss, avoid meals within 3 hours of bed, raise the head of the bed, reduce alcohol and smoking, identify triggers.</li><li>${dr("omeprazole")} 20 mg 30–60 minutes before breakfast for 8 weeks; increase to twice daily if partial response.</li><li>Then step down to lowest dose, on-demand use, or ${dr("famotidine")} 20 mg at night.</li><li>${dr("antacid")} for occasional symptoms.</li><li>Refer: alarm features, refractory symptoms, suspected Barrett's.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("omeprazole"), "20 mg daily (BD if partial)", "Before breakfast"], [dr("famotidine"), "20 mg BD or 40 mg at night", "Step-down"], [dr("antacid"), "After meals as needed", "Symptom relief"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Common; lifestyle, antacids, then famotidine or omeprazole.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Years of PPI without review", "Try step-down; check indication"]])}` },
{ id: "complications", title: "Complications", html: `<p>Oesophagitis, stricture, Barrett's oesophagus and adenocarcinoma (rare), aspiration.</p>` },
{ id: "followup", title: "Follow-up", html: `${box("red", "Come back if", `<ul><li>Food sticking, weight loss, vomiting blood or black stools</li></ul>`)}` },
{ id: "images", title: "Images", html: `<p>No routine imaging; endoscopy images are in the peptic ulcer chapter.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Heartburn", [F.d("Chest pain risk / alarm features?"), F.a, F.b([["Yes", F.e("ECG / endoscopy")], ["No", F.s("Lifestyle + PPI 8 weeks")]]), F.a, F.ok("Step down; refer if refractory")])}` },
{ id: "pearls", title: "Pearls and mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Calling angina reflux", "Missed MI", "ECG"], ["Lifelong PPI without review", "Side effects, cost", "Step down"], ["Ranitidine", "Withdrawn", "Famotidine"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Student", "First-line drug for GERD?", "A PPI such as omeprazole 20 mg daily for 8 weeks.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Katz PO, Dunbar KB, Schnoll-Sussman FH et al. ACG clinical guideline for the diagnosis and management of gastroesophageal reflux disease. <i>Am J Gastroenterol</i> 2022;117:27–56. <a href="https://doi.org/10.14309/ajg.0000000000001538" target="_blank" rel="noopener">doi:10.14309/ajg.0000000000001538</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.1.1.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["STG ranitidine", "<span class='flag'>Outdated</span>", "Famotidine used"]], "qc")}` }
]
});
