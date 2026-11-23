/* Irritable bowel syndrome — adults */
registerPage({
id: "ibs-adult",
title: "Irritable Bowel Syndrome (IBS) — Adults",
subtitle: "A real, common disorder of gut–brain interaction: making a confident positive diagnosis with Rome IV, knowing the red flags that mean something else, ruling out infection, coeliac disease and IBD sensibly, and treating by symptom with diet, fibre, a low-dose neuromodulator and explanation",
age: "Adults", specs: ["gi", "medicine", "psych"],
keywords: ["irritable bowel syndrome", "IBS", "IBS-C", "IBS-D", "IBS-M", "Rome IV", "disorder of gut-brain interaction", "functional bowel disorder", "bloating", "abdominal pain and diarrhoea", "low FODMAP", "soluble fibre", "ispaghula", "amitriptyline IBS", "ATLANTIS", "antispasmodic", "dicyclomine", "faecal calprotectin", "lactose intolerance", "post-infectious IBS"],
related: ["uc-adult", "crohns-adult", "ge-adult", "constipation-child", "depression-adult", "gerd-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">IBS affects about 1 in 20 adults worldwide and fills outpatient clinics. It is not “all in the mind”, and it is not a diagnosis of exclusion: with typical symptoms, no red flags and a few simple tests, the doctor can make a confident positive diagnosis, explain it clearly, and treat it by its main symptom. Endless investigations and unexplained reassurance make patients worse.</p>
<div class="glance">
<div><h4>Diagnose (Rome IV)</h4><p>Abdominal pain at least 1 day a week for 3 months, with 2 of: related to defecation, change in frequency, change in form; onset 6 months or more ago.</p></div>
<div><h4>Red flags</h4><p>Age over 50 with new symptoms, rectal bleeding, weight loss, nocturnal symptoms, anaemia, mass, family history of colon cancer or IBD.</p></div>
<div><h4>Minimal tests</h4><p>CBC, CRP, coeliac serology; faecal calprotectin if diarrhoea; stool for giardia/amoeba in Bhutan.</p></div>
<div><h4>First line</h4><p>Explain; regular meals; less caffeine, alcohol, fatty and very spicy food; trial without milk if lactose-intolerant; ${dr("ispaghula")} soluble fibre; daily exercise.</p></div>
<div><h4>Pain and global symptoms</h4><p>${dr("amitriptyline")} 10 mg at night, up to 30 mg (ATLANTIS); ${dr("dicyclomine")} for cramps.</p></div>
<div><h4>By subtype</h4><p>IBS-D: ${dr("loperamide")}. IBS-C: fibre, osmotic laxative. Psychological therapies for refractory symptoms.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG has no IBS section, so this chapter follows the BSG 2021 and ACG 2021 guidelines adapted for local practice. In Bhutan, rule out common treatable mimics before labelling IBS — giardiasis, amoebiasis and worms, lactose intolerance (milk, butter tea and cheese-based dishes are dietary staples), coeliac disease, and in older adults colorectal cancer. NEML 2025 lists dicyclomine, amitriptyline and lactulose; ispaghula, peppermint oil, loperamide, polyethylene glycol, mebeverine and the newer IBS drugs are not listed. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>IBS is a chronic <b>disorder of gut–brain interaction</b>: recurrent abdominal pain linked to bowel habit, without a structural or biochemical cause found on standard tests. It is commoner in women and in people under 50, and often coexists with anxiety, depression, fibromyalgia, migraine and functional dyspepsia.${r(1, 2)}</p>
${tbl(["Subtype (Rome IV, by stool form on abnormal days)", "Definition"], [
["IBS-C (constipation)", "Hard or lumpy stools over 25%, loose under 25%"],
["IBS-D (diarrhoea)", "Loose or watery stools over 25%, hard under 25%"],
["IBS-M (mixed)", "Both over 25%"],
["IBS-U (unclassified)", "Does not fit the above"]])}
${tbl(["Contributing factor", "Notes"], [
["Visceral hypersensitivity and altered gut–brain signalling", "Normal gut contents are felt as pain"],
["Altered motility", "Fast transit (diarrhoea) or slow (constipation)"],
["After gastroenteritis (post-infectious IBS)", "About 1 in 10 after bacterial or protozoal enteritis"],
["Diet: fermentable carbohydrates (FODMAPs), lactose, fat, caffeine, alcohol", "Triggers rather than causes"],
["Psychological stress, anxiety, past trauma", "Bidirectional link"],
["Microbiome changes", "Area of active research"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("The gut–brain loop in IBS", [
F.s("Trigger: infection, stress, diet, antibiotics"), F.a,
F.s("Low-grade gut changes: altered motility, permeability, microbiome, mast cells"), F.a,
F.s("Sensitised gut nerves and altered brain processing (visceral hypersensitivity)"), F.a,
F.d("Response"), F.a,
F.b([["Explained, reassured, treated", F.ok("Symptoms settle or become manageable")], ["Anxiety, repeated tests, uncertainty", F.e("Hypervigilance amplifies symptoms: chronic cycle")]])])}
<p>Explaining this loop is itself a treatment: patients who understand that their pain is real but not dangerous have fewer symptoms and less health-care use. Neuromodulators such as low-dose amitriptyline act on the gut–brain axis, not as antidepressants.${r(2, 4)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ACG 2021", "BSG 2021", "This guide and why"], [
["Diagnosis", "Positive diagnostic strategy; Rome IV", "Positive diagnosis in primary care; Rome IV less applicable there", "Rome IV plus red flags and minimal tests " + LB.loc()],
["Antispasmodics", "Not recommended (weak evidence)", "Some antispasmodics may help pain and global symptoms", "Dicyclomine (NEML) as needed for cramps"],
["Tricyclics", "Recommended for global symptoms", "Second-line; start 10 mg, titrate to 30–50 mg", "Amitriptyline 10–30 mg (ATLANTIS showed benefit in primary care)"],
["Low FODMAP diet", "Limited trial recommended", "Second-line, with a trained dietitian", "Simple first-line advice; FODMAP if a dietitian is available"],
["Testing in IBS-D", "Coeliac serology, CRP or calprotectin; giardia test", "CBC, CRP, coeliac serology, calprotectin if under 45", "Add stool microscopy for giardia/amoeba in Bhutan"],
["Bhutan", "No STG section", "—", "International guidance"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Supports IBS", "Comment"], [
["Cramping lower abdominal pain linked to defecation", "Yes", "Often eased (or worsened) by opening bowels"],
["Bloating, visible distension by evening", "Yes", "Common; flat abdomen in the morning"],
["Alternating or variable stool form, urgency, incomplete evacuation, mucus", "Yes", "Mucus is common; blood is not"],
["Symptoms for years, stable, worse with stress or meals", "Yes", "—"],
["Nocturnal diarrhoea, weight loss, bleeding, fever", "No — red flags", "Investigate"],
["Coexisting fatigue, headache, back pain, urinary frequency, anxiety", "Common", "Ask; treat comorbid mood problems"]])}
${box("red", "Red flags — investigate, do not label IBS", `<ul><li>Age over 50 with new symptoms (45 with a family history)</li><li>Rectal bleeding, melaena, iron-deficiency anaemia</li><li>Unintentional weight loss, fever, night sweats</li><li>Nocturnal diarrhoea or pain</li><li>Abdominal or rectal mass, raised CRP or calprotectin</li><li>Family history of colorectal cancer, IBD or coeliac disease</li></ul>`)}
<h3>The typical patient</h3>
<p>A 28-year-old teacher in Thimphu has had cramping lower abdominal pain three or four times a week for two years, relieved by opening her bowels, with loose urgent stools on bad days and bloating by evening, worse in exam season. No bleeding, weight loss or night symptoms. CBC, CRP and coeliac serology are normal, faecal calprotectin is 32 µg/g and stool microscopy is negative. <b>This is IBS with diarrhoea (Rome IV).</b> She needs a clear explanation, regular meals with less caffeine and a two-week trial without milk, ispaghula, daily walking, loperamide before predictable triggers if available, and amitriptyline 10 mg at night if pain persists — not more tests.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Test"], [
["<b>Coeliac disease</b>", "Diarrhoea, bloating, anaemia, weight loss, family history", "tTG-IgA (with total IgA)"],
["<b>Inflammatory bowel disease</b>", "Bleeding, nocturnal symptoms, weight loss, raised CRP", "Faecal calprotectin, colonoscopy"],
["<b>Giardiasis, amoebiasis, worms</b>", "Travel, water source, post-infectious onset", "Stool microscopy (3 samples), antigen tests"],
["Lactose intolerance", "Symptoms after milk products", "2-week dairy exclusion trial"],
["Colorectal cancer", "Age over 50, bleeding, anaemia, change in habit", "Colonoscopy"],
["Bile-acid diarrhoea", "Watery diarrhoea, after cholecystectomy", "Trial of bile-acid sequestrant (specialist)"],
["Microscopic colitis", "Older women, watery diarrhoea, NSAIDs, PPIs", "Colonoscopy with biopsies"],
["Ovarian cancer, endometriosis", "Women over 50 with new bloating; cyclical pain", "CA-125, pelvic ultrasound"],
["Thyroid disease, diabetes, drugs (metformin, magnesium)", "—", "TSH, glucose, drug history"],
["Intestinal TB", "Fever, weight loss, ileocaecal symptoms (Bhutan)", "CT, colonoscopy (see Crohn's chapter)"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["CBC, CRP (or ESR)", "Anaemia, inflammation", "—", "Essential"],
["Coeliac serology (tTG-IgA)", "Coeliac disease", "While eating gluten", "Essential"],
["<b>Faecal calprotectin</b>", "Separates IBD from IBS in diarrhoea", "Under 50 µg/g: IBD unlikely; 50–200: repeat; over 200: refer", "If diarrhoea, under 50"],
["Stool microscopy", "Giardia, amoeba, worms", "Essential in Bhutan with diarrhoea", "Essential"],
["TSH, glucose", "If clinically suggested", "—", "Selected"],
["Colonoscopy", "Red flags, age over 50, raised calprotectin", "Not routinely in typical IBS", "Selected"],
["CA-125, pelvic ultrasound", "Women with new bloating over 50", "NICE", "Selected"]])}
` },

{ id: "staging", title: "Rome IV and red-flag check", html: `
<p>Tick the features for a structured Rome IV diagnosis, red-flag screen and calprotectin interpretation.${r(3, 6)}</p>
<div class="calc" data-calc="ibscheck"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Explanation and lifestyle (everyone)</h3>
<ul><li>Name the diagnosis confidently; explain the gut–brain mechanism; agree realistic goals (control, not cure).</li>
<li>Regular meals, not skipping breakfast; eat slowly; limit caffeine, alcohol, fizzy drinks, fatty and very spicy foods; 1.5–2 L of fluid daily.</li>
<li>Two-week dairy exclusion if milk products seem to trigger symptoms (lactose intolerance is common in Asia).</li>
<li>Regular physical activity (at least 30 minutes most days) improves symptoms.</li>
<li>Soluble fibre: ${dr("ispaghula")} (isabgol) 3–4 g daily increasing slowly; avoid insoluble bran.${r(1, 2)}</li></ul>
<h3>B. Second-line diet</h3>
<ul><li>Low FODMAP diet in three phases (restriction 4–6 weeks, reintroduction, personalisation) supervised by a dietitian where available; avoid in people with eating disorders or poor nutrition.</li></ul>
<h3>C. Drugs by main symptom</h3>
${tbl(["Symptom", "Drug", "Notes"], [
["Pain, cramps", dr("dicyclomine") + " 10–20 mg up to four times daily; peppermint oil where available", "Antispasmodic, as needed"],
["Pain and global symptoms (any subtype)", dr("amitriptyline") + " 10 mg at night, increase by 10 mg weekly to 30 mg (max 50)", "ATLANTIS (Lancet 2023): better than placebo over 6 months in primary care; avoid in IBS-C with severe constipation"],
["Diarrhoea", dr("loperamide") + " 2 mg before triggers (max 16 mg/day)", "Stool frequency, not pain"],
["Constipation", "Ispaghula; osmotic laxative (polyethylene glycol where available; " + dr("lactulose") + " may worsen bloating)", "Linaclotide/lubiprostone not available"],
["Coexisting anxiety or depression", "SSRI (e.g. fluoxetine 20 mg)", "Also helps global IBS symptoms"],
["Bloating with IBS-D (specialist)", "Rifaximin 550 mg three times daily for 14 days", "Where available"]])}
<p>Review at 3 months; stop drugs that do not help.${r(4)}</p>
<h3>D. Psychological therapies</h3>
<ul><li>CBT, gut-directed hypnotherapy or IBS-specific psychotherapy for symptoms that persist after 12 months of drug treatment (BSG); mindfulness and stress management help many.</li></ul>
<h3>E. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Treat dysentery or giardiasis if present; explain IBS; diet and fibre advice; dicyclomine; refer red flags"],
["District hospital", "CBC, CRP, stool microscopy; amitriptyline; coeliac serology referral"],
["Referral hospital", "Calprotectin, colonoscopy for red flags, dietitian, psychiatry/psychology"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("ispaghula"), "3–4 g daily, up to 10–20 g/day", "Not on NEML"],
[dr("dicyclomine"), "10–20 mg three or four times daily", "NEML (PHC)"],
[dr("amitriptyline"), "10–30 mg at night (max 50)", "NEML; drowsiness, dry mouth"],
[dr("loperamide"), "2 mg as needed (max 16 mg/day)", "Not on NEML"],
[dr("lactulose"), "15 mL once or twice daily", "Constipation; may increase bloating"],
["Fluoxetine", "20 mg daily", "Anxiety/depression with IBS"],
["Peppermint oil capsules", "0.2–0.4 mL (1–2 capsules) three times daily", "Not on NEML"]])}
` },

{ id: "populations", title: "Older adults, pregnancy and adolescents", html: `
<ul><li><b>Over 50:</b> new symptoms are not IBS until colorectal cancer, IBD and ovarian cancer are excluded.</li>
<li><b>Pregnancy:</b> diet, fibre and reassurance; avoid amitriptyline in the first trimester where possible; loperamide occasionally.</li>
<li><b>Adolescents:</b> functional abdominal pain disorders are common; screen for school stress, bullying and coeliac disease.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Symptoms began after dysentery or gastroenteritis", "Post-infectious IBS; check stool once", "Usually improves over months"],
["IBS with depression or anxiety", "Treat both; SSRI or TCA; psychological therapy", "Bidirectional"],
["Frequent repeat consultations", "One clinician, scheduled reviews, avoid repeated tests", "Reduces anxiety"],
["Opioid prescribed for pain", "Avoid; narcotic bowel syndrome", "Worsens pain"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
<p>IBS does not cause cancer, IBD or shortened life. Symptoms often fluctuate for years; about a third improve substantially. The main harms are reduced quality of life, missed work, anxiety and over-investigation or unnecessary surgery (cholecystectomy, appendicectomy, hysterectomy) for misattributed pain.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Review at 4–6 weeks after starting treatment and at 3 months; re-evaluate if red flags develop.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"Your bowel is real, sensitive and over-reacting, but it is not damaged and this is not cancer."</li><li>Eat regularly; cut down tea, coffee, alcohol and very spicy or fatty food; try two weeks without milk.</li><li>Take the fibre every day and increase slowly; walk daily.</li><li>The small dose of amitriptyline calms the gut nerves — it is not for depression and takes a few weeks.</li></ul>`)}
${box("red", "Come back if", `<ul><li>Blood in the stool, black stools, weight loss, fever</li><li>Symptoms waking you at night, or a big change in your usual pattern</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<p>IBS has no characteristic image: normal endoscopy and imaging are expected. Compare with the inflamed mucosa of ulcerative colitis in the <a href="#/d/uc-adult">UC chapter</a>.</p>
${fig({ title: "What IBS is not: active ulcerative colitis", src: "images/uc-endoscopy.jpg", mod: "Colonoscopy image", ctx: "Bloody diarrhoea", loc: "Colon", find: "Red, granular, friable mucosa with loss of vascular pattern", signs: "Active colitis", interp: "Rectal bleeding or raised calprotectin points away from IBS and towards colonoscopy", by: "Sebb (Wikimedia Commons uploader)", page: "https://commons.wikimedia.org/wiki/File:Ulcerative_colitis.jpg", lic: "CC BY-SA 3.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Chronic abdominal pain with altered bowel habit", [
F.s("History, examination, red-flag check"), F.a,
F.d("Red flags?"), F.a,
F.b([["Yes", F.e("Investigate: bloods, calprotectin, colonoscopy")], ["No", F.s("CBC, CRP, coeliac serology, stool microscopy; calprotectin if diarrhoea")]]), F.a,
F.d("Normal and Rome IV met?"), F.a,
F.b([["Yes", F.ok("Diagnose IBS: explain, diet, fibre, exercise, symptom drugs")], ["No", F.s("Pursue abnormal result")]]), F.a,
F.s("Refractory at 3–12 months: amitriptyline, psychological therapy, dietitian")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Make a positive diagnosis.</b> “All tests are normal” is not an explanation.</li>
<li>In Bhutan, always check the stool for giardia and amoeba in chronic diarrhoea.</li>
<li>New symptoms after 50 are not IBS until proven otherwise.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Repeated colonoscopies and scans", "Anxiety, cost, harm", "Minimal tests, clear diagnosis"],
["Insoluble bran", "Worse bloating", "Soluble fibre (ispaghula)"],
["Opioids for pain", "Narcotic bowel syndrome", "Neuromodulators"],
["Ignoring mood disorders", "Poor response", "Screen and treat"],
["Calling bleeding “IBS”", "Missed IBD or cancer", "Red flags"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "State the Rome IV criteria for IBS.", "Recurrent abdominal pain at least 1 day a week in the last 3 months, with at least 2 of: related to defecation, change in stool frequency, change in stool form; onset at least 6 months before diagnosis.")}
${qa("Intern/MO", "Which tests are enough in a typical young patient with IBS-D?", "CBC, CRP, coeliac serology, faecal calprotectin (and stool microscopy in Bhutan).")}
${qa("Intern/MO", "What did the ATLANTIS trial show?", "Low-dose amitriptyline (10 mg titrated to 30 mg) improved IBS symptoms over placebo in primary care over 6 months.")}
${qa("Specialist", "What calprotectin level makes IBD unlikely?", "Under 50 µg/g in a patient without red flags.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Lacy BE, Pimentel M, Brenner DM et al. ACG clinical guideline: management of irritable bowel syndrome. <i>Am J Gastroenterol</i> 2021;116:17–44. <a href="https://doi.org/10.14309/ajg.0000000000001036" target="_blank" rel="noopener">doi:10.14309/ajg.0000000000001036</a></li>
<li id="ref-2">Vasant DH, Paine PA, Black CJ et al. British Society of Gastroenterology guidelines on the management of irritable bowel syndrome. <i>Gut</i> 2021;70:1214–1240. <a href="https://doi.org/10.1136/gutjnl-2021-324598" target="_blank" rel="noopener">doi:10.1136/gutjnl-2021-324598</a></li>
<li id="ref-3">Lacy BE, Mearin F, Chang L et al. Bowel disorders. <i>Gastroenterology</i> 2016;150:1393–1407 (Rome IV). <a href="https://doi.org/10.1053/j.gastro.2016.02.031" target="_blank" rel="noopener">doi:10.1053/j.gastro.2016.02.031</a></li>
<li id="ref-4">Ford AC, Wright-Hughes A, Alderson SL et al. Amitriptyline at low-dose and titrated for irritable bowel syndrome as second-line treatment in primary care (ATLANTIS). <i>Lancet</i> 2023;402:1773–1785. <a href="https://doi.org/10.1016/S0140-6736(23)01523-4" target="_blank" rel="noopener">doi:10.1016/S0140-6736(23)01523-4</a></li>
<li id="ref-5">Ford AC, Sperber AD, Corsetti M, Camilleri M. Irritable bowel syndrome. <i>Lancet</i> 2020;396:1675–1688. <a href="https://doi.org/10.1016/S0140-6736(20)31548-8" target="_blank" rel="noopener">doi:10.1016/S0140-6736(20)31548-8</a></li>
<li id="ref-6">National Institute for Health and Care Excellence. Faecal calprotectin diagnostic tests for inflammatory diseases of the bowel (DG11), 2013. <a href="https://www.nice.org.uk/guidance/dg11" target="_blank" rel="noopener">nice.org.uk/guidance/dg11</a></li>
<li id="ref-7">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG", "<span class='pass'>Checked</span>", "No IBS section"],
["Guideline recommendations", "<span class='pass'>Checked</span>", "ACG 2021, BSG 2021, Rome IV"],
["NEML gaps", "<span class='flag'>Gap</span>", "Ispaghula, loperamide, peppermint oil, PEG not listed"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 3.0"]], "qc")}
` }
]
});
