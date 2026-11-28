/* Coeliac disease and malabsorption — adults and children. NEW disease (batch N-7, 28 Nov 2026).
   Sources read directly: NICE NG20 Coeliac disease: recognition, assessment and management (read in browser 28 Nov 2026: §1.1 offer serology for
   persistent unexplained GI symptoms, faltering growth, prolonged fatigue, unexpected weight loss, severe/persistent mouth ulcers, unexplained
   iron/B12/folate deficiency, type 1 diabetes and autoimmune thyroid disease at diagnosis, IBS in adults, first-degree relatives; consider in bone
   disease, neuropathy/ataxia, subfertility/recurrent miscarriage, raised liver enzymes, enamel defects, Down and Turner syndromes; eat gluten in >1
   meal daily for ≥6 weeks before testing; do not start gluten-free diet before diagnosis; no testing in infants before gluten introduced; §1.2 total
   IgA + IgA tTG first, IgA EMA if weakly positive, IgG tests if IgA deficient; no HLA testing in non-specialist settings; §1.3 refer positive adults
   for duodenal biopsy, children to paediatric gastroenterology; §1.4 annual review (weight, height, symptoms, diet, DEXA need); serology alone cannot
   judge adherence; §1.5 non-responsive: check diagnosis, gluten exposure, IBS, lactose intolerance, bacterial overgrowth, microscopic colitis;
   refractory → specialist; prednisolone while waiting); Merck Manual Professional — Overview of malabsorption (Mar 2025: global vs selective;
   pancreatic insufficiency when >90% lost; cirrhosis/cholestasis; acute infections transient; SIBO; chronic diarrhoea, steatorrhoea >7 g fat/day,
   weight loss despite intake, deficiencies; iron deficiency may be the only sign; amenorrhoea in coeliac; lactase deficiency 30–90 min after
   carbohydrate; screening bloods FBC, ferritin, B12, folate, calcium, albumin, cholesterol, PT; low B12 + high folate suggests SIBO; folate low in
   proximal disease — coeliac, tropical sprue, Whipple). Giardia/worm treatment and Bhutan food notes are standard/local — marked.
   Covers remaining-list item 'Coeliac disease and malabsorption'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "coeliac-malabsorption",
title: "Coeliac Disease & Malabsorption",
subtitle: "Chronic diarrhoea, weight loss, bloating or unexplained iron/B12/folate deficiency: check for giardia, worms, TB and pancreatic disease, test for coeliac disease while the patient is still eating wheat, and confirm before starting a gluten-free diet",
age: "All ages", specs: ["gi", "paeds", "medicine"],
keywords: ["coeliac disease", "celiac disease", "gluten", "tissue transglutaminase", "tTG", "endomysial antibody", "malabsorption", "steatorrhoea", "chronic diarrhoea", "tropical sprue", "giardiasis", "lactose intolerance", "small intestinal bacterial overgrowth", "SIBO", "iron deficiency unexplained", "faltering growth", "gluten-free diet"],
related: ["ftt-child", "anaemia-adult", "anaemia-child", "chronic-pancreatitis-adult", "worms-child", "crohns-adult", "ibs-adult", "weightloss-adult", "osteoporosis-adult", "dm-child"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Malabsorption means poor digestion or absorption of food — causing chronic diarrhoea, weight loss and deficiencies. <b>Coeliac disease</b> (immune reaction to gluten in wheat, barley, rye) is one treatable cause and is easily missed ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Think of it</h4><p>Chronic diarrhoea/bloating, weight loss despite eating, faltering growth, mouth ulcers, unexplained iron/B12/folate deficiency, type 1 diabetes, thyroid disease ${r(1)} ${r(2)}.</p></div>
<div><h4>Common local causes</h4><p>Giardia and worms, TB, HIV, chronic pancreatitis, lactose intolerance, tropical sprue — check these too ${r(2)} ${LB.exp("LOCAL ORDER STANDARD")}.</p></div>
<div><h4>Test coeliac</h4><p>Total IgA + IgA tTG, <b>while eating gluten</b> (in more than one meal daily for 6 weeks) ${r(1)}.</p></div>
<div><h4>Confirm then treat</h4><p>Positive serology → duodenal biopsy (adults); then lifelong gluten-free diet with dietitian and annual review ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Rice, buckwheat (bjo/khule), maize and potatoes are naturally gluten-free; wheat flour (puta noodles, momo wrappers, bread, biscuits) and barley contain gluten ${LB.loc()}. tTG serology and endoscopy are at JDWNRH ${LB.loc()}. Treat giardia and worms first when the history fits — see ${P("worms-child", "Worms")}.</p>`)}
` },

{ id: "overview", title: "Causes of malabsorption", html: `
${tbl(["Group", "Examples"], [
["Mucosal disease", "Coeliac disease, tropical sprue, Crohn's, Whipple " + r(2) + " " + P("crohns-adult", "Crohn's")],
["Infection", "Giardia, worms, HIV-related, TB of the gut; acute gastroenteritis (transient) " + r(2) + " " + LB.exp("EXAMPLES STANDARD")],
["Pancreatic", "Chronic pancreatitis (when &gt;90% function lost), cystic fibrosis " + r(2) + " " + P("chronic-pancreatitis-adult", "Chronic pancreatitis")],
["Bile", "Cirrhosis, cholestasis " + r(2)],
["Bacterial overgrowth", "Blind loops, diverticula, systemic sclerosis " + r(2)],
["Selective", "Lactase deficiency, pernicious anaemia " + r(2)],
["Surgical", "Short bowel, gastrectomy, ileal resection " + r(2)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Coeliac disease", [F.s("Gluten (gliadin) in genetically susceptible person"), F.a, F.s("Immune attack; villous atrophy in proximal small bowel"), F.a, F.e("Iron, folate, calcium, fat malabsorption; diarrhoea; poor growth")])} <p>${r(1)} ${r(2)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE NG20", "Local reality", "This guide"], [
["First test", "Total IgA + IgA tTG", "Available at JDWNRH", "Same " + r(1) + " " + LB.loc()],
["Biopsy in adults", "Required to confirm", "Endoscopy at referral hospitals", "Refer; do not start GFD before " + r(1)],
["Infections first?", "—", "Giardia/worms common", "Stool microscopy early " + LB.exp("STANDARD")]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Chronic diarrhoea, pale bulky greasy stools (steatorrhoea), bloating, wind ${r(2)}.</li>
<li>Weight loss despite eating; children: faltering growth, short stature, delayed puberty ${r(1)} ${r(2)}.</li>
<li>Deficiencies: anaemia (iron, folate, B12), bone pain/osteomalacia, bruising (vitamin K), mouth ulcers, neuropathy ${r(1)} ${r(2)}.</li>
<li>Coeliac extras: dermatitis herpetiformis, amenorrhoea, infertility, enamel defects, raised liver enzymes ${r(1)} ${r(2)}.</li>
<li>Lactose intolerance: bloating and watery diarrhoea 30–90 minutes after milk ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 9-year-old girl from Thimphu is the shortest in her class, with bloating and iron-deficiency anaemia that has not responded to iron; she eats bread and noodles daily. Stool microscopy negative. <b>Possible coeliac disease</b>: total IgA + IgA tTG while still eating gluten; refer to paediatrics if positive ${r(1)} ${P("ftt-child", "Faltering growth")}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Irritable bowel syndrome", "No weight loss or deficiencies; test coeliac in adults with IBS " + r(1) + " " + P("ibs-adult", "IBS")],
["Inflammatory bowel disease", "Blood in stool, raised CRP " + P("crohns-adult", "Crohn's")],
["Intestinal TB", "Fever, ileocaecal disease " + P("tb-adult", "TB")],
["HIV enteropathy", "HIV test " + P("hiv-adult", "HIV")],
["Thyrotoxicosis", "Tremor, weight loss " + P("thyroid-adult", "Thyroid")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Screening bloods: FBC and indices, ferritin, B12, folate, calcium, albumin, cholesterol, PT ${r(2)}.</li>
<li>Stool microscopy for ova, cysts (giardia), parasites; HIV test ${LB.exp("STANDARD")}.</li>
<li>Coeliac serology: total IgA + IgA tTG; IgA EMA if weakly positive; IgG tTG/DGP/EMA if IgA deficient ${r(1)}.</li>
<li>Duodenal biopsy for positive adults (specialist); children via paediatric gastroenterology ${r(1)}.</li>
<li>Faecal elastase/imaging for pancreatic disease; stool fat if malabsorption is uncertain ${r(2)} ${LB.exp("ELASTASE — STANDARD")}.</li>
</ul>
${tbl(["Blood pattern", "Suggests"], [
["Low folate", "Proximal mucosal disease: coeliac, tropical sprue " + r(2)],
["Low B12, high folate", "Small intestinal bacterial overgrowth " + r(2)],
["Low B12", "Pernicious anaemia, ileal disease, pancreatitis, SIBO " + r(2)],
["Iron deficiency only", "May be the only sign of mild malabsorption (e.g. coeliac) " + r(2)]
])}
` },

{ id: "staging", title: "Malabsorption / coeliac helper", html: `<div class="calc" data-calc="malabsorb"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Coeliac disease ${r(1)}</h3>
<ul>
<li>Lifelong strict <b>gluten-free diet</b> after confirmation; dietitian teaching (labels, cross-contamination, eating out).</li>
<li>Correct deficiencies: iron, ${dr("folic_acid", "folic acid")}, calcium/vitamin D, B12 ${LB.exp("STANDARD")}.</li>
<li>Annual review: weight, height, symptoms, adherence; DEXA if risk; screen first-degree relatives.</li>
<li>Persistent symptoms: check diagnosis, hidden gluten, lactose intolerance, SIBO, IBS, microscopic colitis; refractory → specialist; prednisolone while waiting.</li>
<li>Support for anxiety and depression.</li>
</ul>
<h3>Other causes</h3>
<ul>
<li>Giardiasis: ${dr("metronidazole")} (or tinidazole) ${LB.exp("STANDARD")}; worms: ${dr("albendazole")} ${P("worms-child", "Worms")}.</li>
<li>Lactose intolerance: reduce milk; curd/yoghurt often tolerated ${LB.exp("STANDARD")}.</li>
<li>Pancreatic insufficiency: enzymes with meals ${P("chronic-pancreatitis-adult", "Chronic pancreatitis")}.</li>
<li>Tropical sprue: folic acid and a course of tetracycline (specialist) ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "Note"], [
[dr("metronidazole"), "Giardiasis " + LB.exp("STANDARD"), "NEML"],
[dr("albendazole"), "Worms " + LB.exp("STANDARD"), "NEML"],
[dr("folic_acid", "Folic acid"), "Folate deficiency, tropical sprue " + LB.exp("STANDARD"), "NEML"],
[dr("prednisolone"), "Refractory coeliac while awaiting specialist " + r(1), "NEML"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Infants:</b> do not test before gluten is introduced ${r(1)}.</li><li><b>Type 1 diabetes, autoimmune thyroid disease, Down and Turner syndromes:</b> test at diagnosis / consider ${r(1)} ${P("dm-child", "Diabetes (child)")} ${P("down-child", "Down syndrome")}.</li><li><b>Pregnancy:</b> coeliac can cause subfertility and recurrent miscarriage ${r(1)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Already gluten-free, wants a test", "Needs gluten in &gt;1 meal daily for 6 weeks, or specialist referral " + r(1)],
["Positive tTG, family wants to start the diet now", "Wait for biopsy confirmation (adults) " + r(1)],
["Recurrent diarrhoea after a trek, greasy stools", "Giardia likely — stool test, metronidazole " + LB.exp("STANDARD")],
["Coeliac on diet, still symptomatic", "Hidden gluten (soy sauce, wheat-thickened soups), lactose, SIBO " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Anaemia, osteoporosis/osteomalacia, growth failure, infertility, neuropathy; long-term untreated coeliac — small-bowel lymphoma risk ${r(1)} ${LB.exp("LYMPHOMA — STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Coeliac: annual review; repeat serology to see fall in titres (not to judge adherence alone) ${r(1)}.</li><li>Persistently high titres after 12 months on diet → specialist re-biopsy ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Chronic diarrhoea / weight loss / deficiencies", [F.s("Bloods, stool microscopy, HIV"), F.a, F.d("Infection or pancreatic cause found?"), F.a, F.b([["Yes", F.s("Treat; re-check")], ["No", F.e("IgA + IgA tTG on gluten → biopsy if positive → gluten-free diet")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Starting gluten-free diet before testing", "False-negative tests", "Test first " + r(1)],
["Not checking total IgA", "IgA deficiency gives false negatives", "Always measure total IgA " + r(1)],
["Repeated iron without asking why", "Coeliac missed", "Test unexplained iron deficiency " + r(1)],
["Ignoring giardia", "Treatable cause missed", "Stool microscopy"]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "First-line coeliac test?", "Total IgA and IgA tissue transglutaminase (tTG).")}
${qa("Intern/MO", "How much gluten before testing?", "Gluten in more than one meal every day for at least 6 weeks.")}
${qa("Registrar", "Low B12 with high folate suggests?", "Small intestinal bacterial overgrowth.")}
${qa("Specialist", "Causes of non-responsive coeliac disease?", "Wrong diagnosis, ongoing gluten, IBS, lactose intolerance, SIBO, microscopic colitis, refractory coeliac.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Coeliac disease: recognition, assessment and management (NG20). <a href="https://www.nice.org.uk/guidance/ng20" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">Merck Manual Professional Edition. Overview of malabsorption (full review Mar 2025).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG20", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Merck malabsorption", "<span class='pass'>Read</span>", ""], ["Infection treatment, local foods", "<span class='unv'>Standard / local</span>", "Marked"]], "qc")}` }
]
});
})();
