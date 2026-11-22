/* Peptic ulcer disease, dyspepsia, gastritis and H. pylori — adults */
registerPage({
id: "apd-adult",
title: "Peptic Ulcer, Dyspepsia & H. pylori — Adults",
subtitle: "Epigastric pain done well: who needs endoscopy, eradicating H. pylori in Bhutan, healing ulcers, and never missing stomach cancer",
age: "Adults", specs: ["gi", "medicine", "surg"],
keywords: ["peptic ulcer", "PUD", "duodenal ulcer", "gastric ulcer", "dyspepsia", "gastritis", "acid peptic disease", "APD", "Helicobacter pylori", "H. pylori", "eradication", "triple therapy", "quadruple therapy", "PPI", "omeprazole", "famotidine", "ranitidine", "NSAID ulcer", "stomach cancer", "gastric cancer", "perforation"],
related: ["ugib-adult", "cirrhosis-adult", "ge-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Epigastric pain is one of the commonest complaints in any Bhutanese clinic, and most of it is benign. The art is to treat the many simply, cure <i>H. pylori</i> properly, and pick out the few who have stomach cancer while it can still be cured.</p>
<div class="glance">
<div><h4>Common causes</h4><ul><li><i>H. pylori</i> (about two-thirds of Bhutanese adults)</li><li>NSAIDs and aspirin</li><li>Functional dyspepsia</li><li>Reflux</li></ul></div>
<div><h4>Alarm features → endoscopy</h4><ul><li>Weight loss, vomiting, dysphagia</li><li>Anaemia, bleeding, melaena</li><li>Mass, lymph node</li><li>New symptoms from about age 40–45 in Bhutan</li></ul></div>
<div><h4>No alarm features</h4><p><b>Test and treat</b> <i>H. pylori</i> (stool antigen). If negative or symptoms persist: PPI for 4–8 weeks.</p></div>
<div><h4>Eradication (14 days)</h4><p>Bhutan STG: omeprazole 20 mg + amoxicillin 1 g + clarithromycin 500 mg, all twice daily. See the regimen table for alternatives.</p></div>
<div><h4>Heal the ulcer</h4><p>${dr("omeprazole")} 20 mg daily: 4 weeks (duodenal), 8 weeks (gastric). Repeat endoscopy with biopsy for gastric ulcers.</p></div>
<div><h4>Confirm cure</h4><p>Stool antigen or breath test at least 4 weeks after antibiotics and 2 weeks off PPI.</p></div>
<div><h4>Emergencies</h4><p>Bleeding: see <a href="#/d/ugib-adult">upper GI bleeding</a>. Perforation: sudden severe pain, rigid abdomen, free air → surgeon.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The 2025 NEML lists <b>omeprazole, famotidine (which replaced ranitidine because of NDMA contamination), amoxicillin, clarithromycin (for <i>H. pylori</i> only) and metronidazole</b>, but <b>not bismuth or oral tetracycline</b>, so the internationally preferred bismuth quadruple therapy cannot be built from the NEML. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions, causes and who is at risk", html: `
<h3>Definitions</h3>
${tbl(["Term", "Meaning"], [
["<b>Dyspepsia</b>", "Predominant pain or discomfort centred in the upper abdomen, often with fullness, early satiety, bloating or nausea"],
["<b>Peptic ulcer</b>", "A break in the stomach or duodenal lining at least 5 mm across, reaching through the muscularis mucosae, in tissue exposed to acid and pepsin"],
["Erosion", "A shallower break (under 5 mm, not through the muscularis mucosae)"],
["<b>Gastritis</b>", "Inflammation of the stomach lining, seen on biopsy; often caused by <i>H. pylori</i>, NSAIDs or alcohol. The word is often used loosely for dyspepsia"],
["<b>Functional dyspepsia</b>", "Dyspepsia for at least 3 months with a normal endoscopy (Rome IV): the commonest final diagnosis"]])}
<h3>How common is it in Bhutan?</h3>
<ul><li>In a study of 1,178 dyspeptic patients across Bhutan (2010–2015), <b>66% had <i>H. pylori</i></b>, among the highest rates in Asia.${r(2)}</li>
<li><b>Local resistance</b> (357 cultured isolates): clarithromycin <b>2%</b> overall (about 10% in Thimphu, near 0% in rural districts), metronidazole about <b>81%</b>, levofloxacin 8% and rising, tetracycline under 1%, amoxicillin 0%.${r(1, 2)} This is why the STG clarithromycin regimen still works here, and why metronidazole-based triple therapy does not.</li>
<li><b>Stomach cancer is the commonest cancer in Bhutanese men</b> and second only to cervical cancer in women (age-adjusted 25.1 and 18.9 per 100,000; five-year survival under 20%), with rates above India, Nepal and Sri Lanka. Alarm features matter more here than in most countries.${r(9)}</li>
<li>Worldwide, <i>H. pylori</i> infects about 4 in 10 people, mostly acquired in childhood through close household contact.</li></ul>
<h3>Causes of peptic ulcer</h3>
${tbl(["Cause", "How it injures", "Clue"], [
["<b><i>H. pylori</i></b>", "Colonises the stomach, causes chronic inflammation; antral infection increases acid (duodenal ulcer), body infection reduces acid and leads to atrophy (gastric ulcer, cancer)", "Positive stool antigen, breath test or biopsy"],
["<b>NSAIDs and aspirin</b>", "Block COX-1 prostaglandins that protect the mucosa", "Painkillers for joints, headaches; often painless until bleeding"],
["Steroids with NSAIDs, anticoagulants, SSRIs", "Increase bleeding risk with NSAIDs", "Drug history"],
["Smoking, alcohol", "Impair healing; alcohol damages the mucosa", "History"],
["Stress ulcers", "Mucosal ischaemia in critical illness", "ICU patients"],
["Zollinger–Ellison (gastrinoma), Crohn's, malignancy", "Rare", "Multiple, distal or refractory ulcers"]])}
<h3>Risk factors and why they matter</h3>
<ul><li>Older age, previous ulcer or bleeding, high-dose or multiple NSAIDs, anticoagulants or steroids: highest ulcer-complication risk, so give PPI protection.</li><li>Family history of stomach cancer, smoked or salted food, <i>H. pylori</i>: gastric cancer risk.</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How ulcers form, and how treatment reverses it", [
F.s("Balance in the stomach: acid and pepsin versus mucus, bicarbonate, prostaglandins and blood flow"), F.a,
F.b([
["<i>H. pylori</i>", F.s("Urease neutralises acid around the bacterium; toxins (CagA, VacA) inflame the lining"), F.s("Antral gastritis → more gastrin → more acid → <b>duodenal ulcer</b>"), F.s("Body gastritis → atrophy → <b>gastric ulcer</b>, intestinal metaplasia → <b>cancer</b>")],
["NSAIDs / aspirin", F.s("Block COX-1 → fewer protective prostaglandins"), F.s("Mucosal defence fails → erosions and ulcers, often silent until they bleed")]]), F.a,
F.d("Untreated ulcer"), F.a,
F.b([["Bleeding", F.e("Erodes an artery → haematemesis, melaena")], ["Perforation", F.e("Through the wall → peritonitis")], ["Stricture", F.e("Pyloric scarring → gastric outlet obstruction")]]), F.a,
F.ok("Eradicating <i>H. pylori</i> and stopping NSAIDs cure most ulcers and prevent recurrence; PPIs heal the ulcer")])}
<p>Before <i>H. pylori</i> was discovered (Warren and Marshall, Nobel Prize 2005), peptic ulcer was a relapsing lifelong disease treated with surgery. Eradication cuts the yearly recurrence rate from over 50% to under 5%.</p>
<h3>From infection to stomach cancer (the Correa cascade)</h3>
<p>Chronic <i>H. pylori</i> gastritis → atrophic gastritis → intestinal metaplasia → dysplasia → adenocarcinoma, over decades. Eradication before atrophy develops prevents most of this; in high-incidence populations, eradication reduces gastric cancer by about a third to a half.${r(4)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide"], [
["First-line eradication", "Clarithromycin triple therapy (PPI + amoxicillin + clarithromycin) for 14 days", "Maastricht VI 2022 and ACG 2024: <b>bismuth quadruple</b> where clarithromycin resistance is over 15% or unknown; clarithromycin triple only if local resistance is low or susceptibility is known", "<b>Keep the STG regimen as first line</b>: Bhutan clarithromycin resistance (2%) is well under the 15% threshold. Use high-dose PPI, avoid it after previous macrolide use, and be readier to switch in Thimphu (about 10%) " + LB.loc() + ""],
["India (ISG Bhubaneswar consensus 2021)", "—", "PPI + amoxicillin + clarithromycin for 14 days where clarithromycin resistance is low; bismuth quadruple where high; imidazole-based triple not recommended; no courses under 14 days", "Agrees with the Bhutan approach and local resistance data" + r(10)],
["Acid suppression", "Ranitidine 150 mg twice daily or omeprazole", "Ranitidine withdrawn worldwide (2020, NDMA)", "<b>Use omeprazole, or famotidine</b> (the NEML 2025 replacement for ranitidine)"],
["Age for endoscopy with dyspepsia", "Refer non-responders for endoscopy", "ACG/CAG 2017: age 60 or over; NICE: 55 or over with alarm features; lower thresholds advised where gastric cancer is common", "Endoscopy for new dyspepsia from about <b>age 40–45</b> in Bhutan, or any alarm feature at any age " + LB.loc() + ""],
["Testing after treatment", "Follow-up testing at 3 months", "Test at least 4 weeks after antibiotics and 2 weeks after stopping PPI", "Test at 4–8 weeks, off PPI for 2 weeks (a PPI causes false negatives)"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Symptom", "Mechanism", "Clue"], [
["Burning or gnawing epigastric pain", "Acid on an inflamed or ulcerated lining", "Duodenal: 1–3 h after meals and at night, relieved by food; gastric: worse with food (Bhutan STG)"],
["Fullness, early satiety, bloating", "Impaired gastric accommodation and motility", "Functional dyspepsia"],
["Heartburn, acid regurgitation", "Reflux", "GORD rather than ulcer"],
["Nausea, vomiting", "Outlet obstruction, gastritis", "Persistent vomiting is an alarm feature"],
["Melaena, haematemesis, anaemia", "Bleeding ulcer or cancer", "Emergency"],
["Sudden severe pain, then a rigid abdomen", "Perforation", "Emergency"],
["Weight loss, early satiety, epigastric mass, Virchow's node", "Gastric cancer", "Endoscopy urgently"]])}
${box("red", "Alarm features — refer for early endoscopy", `<ul><li>Unintended weight loss</li><li>Persistent vomiting</li><li>Difficulty or pain swallowing</li><li>Iron-deficiency anaemia, melaena or haematemesis</li><li>Epigastric mass, lymphadenopathy, jaundice</li><li>Family history of stomach or oesophageal cancer</li><li>New dyspepsia from about age 40–45 (Bhutan), or not responding to treatment</li></ul>`)}
<p><b>NSAID ulcers are often painless</b> until they bleed or perforate, especially in older people.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Peptic ulcer", "Episodic epigastric pain, NSAID use, <i>H. pylori</i>", "Normal endoscopy", "Endoscopy"],
["Functional dyspepsia", "Long history, young, normal tests", "Alarm features", "Endoscopy normal; diagnosis of exclusion"],
["GORD", "Heartburn, regurgitation, worse lying down", "—", "PPI trial; endoscopy if alarm"],
["<b>Gastric cancer</b>", "Older, weight loss, anaemia, early satiety, mass", "Young with no alarm features", "Endoscopy with biopsy"],
["Biliary colic, cholecystitis", "Right upper quadrant pain after fatty meals, lasting hours", "—", "Ultrasound"],
["Pancreatitis", "Severe pain radiating to back, alcohol, gallstones", "—", "Lipase/amylase, ultrasound"],
["<b>Myocardial ischaemia</b>", "Exertional, diabetic, older, sweating", "—", "<b>ECG</b> (Bhutan STG lists ECG for epigastric pain)"],
["Hepatitis, liver abscess", "Fever, jaundice, tender liver", "—", "LFTs, ultrasound"]])}
<h3>The typical patient</h3>
<p>A 34-year-old farmer from Punakha has had burning epigastric pain at night for 2 months, eased by food, with no weight loss, vomiting or anaemia, and takes no NSAIDs. This is most likely <b><i>H. pylori</i>-related dyspepsia or duodenal ulcer</b>: young, typical nocturnal pain relieved by eating, no alarm features, and living in a very high-prevalence district. Test and treat: stool antigen, then 14-day eradication. If he were 55 with weight loss, he would go straight to endoscopy.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b><i>H. pylori</i> stool antigen</b> (Bhutan STG)", "Diagnose active infection; confirm cure", "Off PPI for 2 weeks and antibiotics for 4 weeks beforehand, or false negatives", "Essential"],
["Urea breath test", "Same purpose, very accurate", "Limited availability", "Optional"],
["Serology", "Past or present infection", "Cannot confirm cure; not for test-and-treat in high-prevalence areas", "Not recommended"],
["<b>Upper GI endoscopy</b>", "Alarm features, age threshold, non-response, bleeding", "Biopsy all gastric ulcers; rapid urease test or histology for <i>H. pylori</i>", "Essential when indicated"],
["Full blood count, ferritin", "Anaemia from blood loss", "—", "Essential"],
["ECG", "Exclude cardiac pain", "Bhutan STG", "Recommended with risk factors"],
["Liver tests, lipase, ultrasound", "Other causes of epigastric pain", "—", "Selected"],
["Erect chest X-ray", "Free air under the diaphragm in perforation", "CT more sensitive", "If perforation suspected"],
["Fasting gastrin", "Multiple or refractory ulcers", "Off PPI", "Rare"]])}
<p><b>Reference standard:</b> endoscopy with biopsy for ulcers and cancer; for <i>H. pylori</i>, histology or culture at endoscopy, or urea breath test non-invasively.</p>
` },

{ id: "staging", title: "Severity, endoscopy and referral", html: `
<h3>Ulcer complications</h3>
<ul><li><b>Bleeding:</b> use the Glasgow–Blatchford score and Forrest classification (see <a href="#/d/ugib-adult">Upper GI bleeding</a>).</li><li><b>Perforation:</b> surgical emergency.</li><li><b>Gastric outlet obstruction:</b> vomiting of undigested food, succussion splash, weight loss.</li></ul>
<h3>Refer</h3>
<ul><li><b>Same day:</b> perforation, haematemesis or melaena with instability, persistent vomiting with dehydration.</li><li><b>Urgent endoscopy (within 2 weeks):</b> any alarm feature; suspected gastric cancer.</li><li><b>Routine:</b> failure of two eradication attempts (for culture-guided therapy); refractory ulcers.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Dyspepsia without alarm features</h3>
<ol><li><b>Stop NSAIDs</b> where possible (use paracetamol); stop smoking; reduce alcohol.</li>
<li><b>Test and treat <i>H. pylori</i></b> (stool antigen) — first choice in Bhutan's high-prevalence population.</li>
<li>If negative, or symptoms persist after cure: ${dr("omeprazole")} 20 mg once daily for 4–8 weeks, then stop or step down to on-demand use.</li>
<li>Still symptomatic: endoscopy; consider functional dyspepsia (reassurance, explanation, low-dose amitriptyline under specialist guidance).</li></ol>

<h3>B. <i>H. pylori</i> eradication (14 days for every regimen)</h3>
<div class="calc" data-calc="hpyloriplan"></div>
${tbl(["Line", "Regimen (all 14 days)", "Bhutan fit", "When"], [
["<b>First line (Bhutan STG)</b>", "" + dr("omeprazole") + " 20–40 mg twice daily + " + dr("amoxicillin") + " 1 g twice daily + " + dr("clarithromycin") + " 500 mg twice daily", "All on NEML; local clarithromycin resistance 2%", "Most patients, unless they have taken a macrolide before or are allergic to penicillin"],
["Alternative first line / penicillin allergy", "<b>Bismuth quadruple:</b> PPI twice daily + " + dr("bismuth") + " + " + dr("tetracycline") + " 500 mg four times daily + " + dr("metronidazole") + " 400–500 mg three or four times daily", "Bismuth and oral tetracycline not on NEML; high-dose metronidazole partly overcomes resistance", "Preferred internationally where resistance is unknown; in Bhutan, for allergy or failure if it can be sourced"],
["<b>Second line</b> (after clarithromycin failure)", "<b>High-dose dual:</b> omeprazole 40 mg twice daily (or 20 mg four times daily) + amoxicillin 1 g three times daily (or 750 mg four times daily)", "NEML drugs; no amoxicillin resistance found in Bhutan", "Good choice when bismuth is unavailable"],
["Second line (alternative)", "<b>Levofloxacin triple:</b> PPI twice daily + amoxicillin 1 g twice daily + " + dr("levofloxacin") + " 500 mg once daily", "Levofloxacin is reserved for MDR-TB on the NEML; resistance 8% and rising", "Only after excluding TB (cough, sputum) and with specialist agreement"],
["<b>Avoid</b>", "Metronidazole-based triple therapy (PPI + amoxicillin or clarithromycin + metronidazole); any 7-day course; repeating clarithromycin after failure", "Metronidazole resistance about 81%", "—"],
["Not available in Bhutan", "Vonoprazan-based dual or triple (ACG 2024)", "Not registered", "—"]])}
<ul><li>Take PPI 30–60 minutes before breakfast and dinner. Explain that side effects (metallic taste, loose stools) are common but finishing the full 14 days is what cures.</li>
<li><b>Ask about previous antibiotics:</b> earlier clarithromycin or other macrolides (for chest infections) predicts clarithromycin resistance; earlier metronidazole predicts metronidazole resistance.</li>
<li><b>Penicillin allergy:</b> avoid amoxicillin; use bismuth quadruple therapy if it can be sourced. PPI + clarithromycin + metronidazole is the usual fallback, but expect lower cure in Bhutan because of metronidazole resistance, so always confirm eradication.</li>
<li><b>Confirm cure</b> in everyone: stool antigen 4–8 weeks after finishing, off PPI for 2 weeks.</li>
<li><b>Treatment failure:</b> do not repeat clarithromycin. Use a different regimen (see table); after two failures, refer for endoscopy with culture and sensitivity.</li></ul>

<h3>C. Healing the ulcer</h3>
<ul><li><b>Duodenal ulcer:</b> after eradication therapy, further PPI is usually unnecessary unless the ulcer was large or complicated (then 4 weeks).</li>
<li><b>Gastric ulcer:</b> PPI for 8 weeks, then <b>repeat endoscopy with biopsies at 8–12 weeks</b> to confirm healing and exclude cancer.</li>
<li><b>NSAID ulcer:</b> stop the NSAID; PPI 8 weeks. If the NSAID must continue, give a PPI alongside for as long as it continues (or use a COX-2 selective drug plus PPI in high-risk patients).</li></ul>

<h3>D. Preventing ulcers in people on NSAIDs, aspirin or anticoagulants</h3>
<p>Give PPI co-therapy if any of: age 65 or over, previous ulcer or bleeding, high-dose NSAID, combination with aspirin, clopidogrel, an anticoagulant or steroids. Test and treat <i>H. pylori</i> before starting long-term NSAIDs or aspirin in people with a past ulcer.</p>

<h3>E. Perforation</h3>
<p>Nil by mouth, IV fluids, IV PPI (${dr("ppi_iv", "IV omeprazole")}), broad-spectrum antibiotics (for example ${dr("ceftriaxone")} plus ${dr("metronidazole")}), nasogastric tube, analgesia, and <b>urgent surgical referral</b>. Bhutan STG: manage as for bowel obstruction before transfer.</p>

<h3>F. Working in Bhutan</h3>
${tbl(["Need", "Reality", "What to do"], [
["Bismuth and oral tetracycline", "Not on NEML", "Use a non-bismuth regimen built from NEML drugs (see table), or procure bismuth quadruple privately for failures"],
["Stool antigen testing", "Available at hospitals, not all BHUs", "Test where possible; empirical eradication is reasonable for a typical duodenal ulcer seen at endoscopy"],
["Endoscopy", "National and regional referral hospitals", "Refer alarm features urgently; never treat suspected cancer with repeated PPI courses"],
["Ranitidine stock", "Withdrawn worldwide", "Use famotidine or omeprazole"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("omeprazole"), "Healing 20 mg daily (4–8 weeks); eradication 20–40 mg twice daily", "Before meals; review long-term use"],
[dr("famotidine"), "20 mg twice daily or 40 mg at night", "Replaces ranitidine; halve dose if CrCl under 50"],
[dr("amoxicillin"), "1 g twice daily (triple/quadruple); 1 g three times daily (dual)", "14 days"],
[dr("clarithromycin"), "500 mg twice daily", "Interactions (statins, colchicine, warfarin)"],
[dr("metronidazole"), "400–500 mg three or four times daily (quadruple); 400–500 mg twice daily (some triple regimens)", "No alcohol until 48 h after finishing"],
[dr("bismuth"), "Subcitrate 120 mg four times daily", "Not on NEML; black stools"],
[dr("tetracycline"), "500 mg four times daily", "Not on NEML as oral"],
[dr("levofloxacin"), "500 mg once daily (second-line triple)", "NEML: MDR-TB only; rising resistance"],
[dr("antacid"), "1–2 tablets after meals", "Symptom relief only"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and immunocompromised people", html: `
<ul><li><b>Pregnancy:</b> treat dyspepsia with lifestyle, antacids, then famotidine or omeprazole. Defer <i>H. pylori</i> eradication until after pregnancy and breastfeeding (clarithromycin and tetracycline are best avoided).</li>
<li><b>Older adults:</b> lower threshold for endoscopy; NSAID ulcers are often silent; deprescribe long-term PPIs where possible (fracture, <i>C. difficile</i>, B12 and magnesium risks).</li>
<li><b>Immunocompromised and HIV:</b> consider CMV or fungal oesophagitis and lymphoma; endoscopy earlier.</li></ul>
` },

{ id: "scenarios", title: "Peptic disease with other conditions", html: `
${tbl(["Condition", "What changes", "Why"], [
["On antiplatelets after ACS or stent", "PPI co-therapy; prefer pantoprazole with clopidogrel", "Bleeding risk; omeprazole reduces clopidogrel activation"],
["Anticoagulants", "PPI if other risk factors", "Bleeding"],
["Cirrhosis", "Varices cause bleeding too; avoid unnecessary long-term PPIs (infection risk)", "See <a href=\"#/d/cirrhosis-adult\">cirrhosis</a>"],
["CKD", "Famotidine dose reduction; magnesium-containing antacids avoided", "Accumulation"],
["Arthritis needing NSAIDs", "Lowest dose, shortest time, plus PPI; paracetamol or topical NSAID first", "Ulcer prevention"],
["Taking statins", "Clarithromycin interacts: pause simvastatin during eradication", "Rhabdomyolysis risk"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["<b>Bleeding</b>", "Haematemesis, melaena, anaemia", "Resuscitate, IV PPI, endoscopic therapy — see Upper GI bleeding"],
["<b>Perforation</b>", "Sudden severe pain, rigidity, free air", "Surgery; antibiotics; IV PPI"],
["Gastric outlet obstruction", "Vomiting undigested food, weight loss", "Correct fluids and electrolytes; endoscopic dilatation or surgery"],
["<b>Gastric cancer</b> (from chronic <i>H. pylori</i>)", "Alarm features", "Endoscopy and biopsy; surgery or oncology"],
["MALT lymphoma", "Gastric mass or ulcer on biopsy", "Early-stage disease often regresses with eradication alone"]])}
<p>After successful eradication and NSAID avoidance, ulcer recurrence falls to under 5% a year. Reinfection in adults is uncommon but higher in households where others remain infected.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Confirm eradication 4–8 weeks after treatment (off PPI for 2 weeks).</li>
<li>Repeat endoscopy for gastric ulcers at 8–12 weeks.</li>
<li>Review and stop PPIs that are no longer needed.</li></ul>
${box("green", "What to tell the patient", `<ul><li>\"This germ lives in the stomach of most people in Bhutan. Clearing it heals the ulcer and lowers your future risk of stomach cancer.\"</li><li>Take all the tablets for the full 14 days, even if you feel better.</li><li>The tablets may cause a metallic taste or loose stools; keep going unless you develop a rash or severe diarrhoea.</li><li>No alcohol while taking metronidazole and for 2 days after.</li><li>Avoid painkillers like ibuprofen, diclofenac or aceclofenac; paracetamol is safe.</li><li>Eat less smoked, salted and preserved food, more fresh fruit and vegetables, and stop smoking.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>You vomit blood or pass black stools</li><li>Sudden severe abdominal pain</li><li>You lose weight, cannot swallow, or keep vomiting</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Gastric ulcer at endoscopy (proved malignant)", src: "images/gastric-ulcer-endo.jpg", mod: "Upper GI endoscopy", ctx: "Dyspepsia; ulcer found at gastroscopy", loc: "Stomach", find: "Deep ulcer with irregular, heaped-up edges", signs: "Irregular margin, raised rolled edge", interp: "Biopsy showed gastric cancer. <b>Every gastric ulcer must be biopsied</b> and re-scoped after treatment, because benign and malignant ulcers can look alike", ddx: "Benign peptic ulcer, lymphoma", by: "Samir (The Scope), English Wikipedia", page: "https://commons.wikimedia.org/wiki/File:Gastric_ulcer_3.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Helicobacter pylori on gastric biopsy", src: "images/hpylori-giemsa.jpg", mod: "Histology, Giemsa stain, high power", ctx: "Gastric biopsy at endoscopy", loc: "Gastric pits and surface mucus", find: "Small curved or spiral rods in the mucus layer over the epithelium", signs: "Spiral organisms with chronic active gastritis", interp: "Active <i>H. pylori</i> infection: treat and confirm eradication", by: "Ed Uthman", page: "https://commons.wikimedia.org/wiki/File:Helicobacter_pylori,_Gastric_Biopsy,_Giemsa_Stain_(5517582111).jpg", lic: "CC BY 2.0" })}
</div>
<div class="pair">
${fig({ title: "Free air under the diaphragm (perforated viscus)", src: "images/ugib-free-air.jpg", mod: "Erect chest X-ray", ctx: "Acute abdomen; CT confirmed extensive pneumoperitoneum", loc: "Below the left hemidiaphragm", find: "Crescent of black gas between the diaphragm and the abdominal organs", signs: "Pneumoperitoneum", interp: "Perforation (commonly a peptic ulcer): urgent surgery", ddx: "Chilaiditi sign (bowel between liver and diaphragm), recent surgery, gastric air bubble on the left", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Chest_X-ray_showing_presence_of_free_air_under_left_diaphragm.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "Gastric adenocarcinoma (resected stomach)", src: "images/gastric-adenoca-gross.jpg", mod: "Gross specimen", ctx: "40-year-old woman with abdominal pain; endoscopically 'very suspicious' ulcer", loc: "Stomach", find: "Thickened, rigid stomach wall from diffusely infiltrating tumour", signs: "Signet-ring cell adenocarcinoma on histology", interp: "Gastric cancer can occur in young adults; persistent symptoms deserve endoscopy", by: "Unknown author (public domain)", page: "https://commons.wikimedia.org/wiki/File:Adenocarcinoma_of_the_stomach.jpg", lic: "Public domain" })}
</div>
<h3>Link-only images</h3>
<ul><li>Forrest classification of bleeding ulcers: <a href="https://radiopaedia.org/search?q=peptic+ulcer" target="_blank" rel="noopener">Radiopaedia</a></li><li>Endoscopic atlas of peptic ulcers: <a href="https://www.gastrointestinalatlas.com/" target="_blank" rel="noopener">El Salvador Atlas of Gastrointestinal Video Endoscopy</a> (copyright; view on site)</li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Adult with dyspepsia", [
F.d("Alarm features, or new symptoms from age 40–45?"), F.a,
F.b([["Yes", F.e("Urgent endoscopy with biopsy")], ["No", F.s("Stop NSAIDs; lifestyle")]]), F.a,
F.s("Test for H. pylori (stool antigen, off PPI 2 weeks)"), F.a,
F.b([["Positive", F.s("14-day eradication; confirm cure 4–8 weeks later")], ["Negative", F.s("PPI 4–8 weeks")]]), F.a,
F.d("Still symptomatic?"), F.a,
F.b([["Yes", F.e("Endoscopy")], ["No", F.ok("Stop PPI or use on demand")]])])}
${F.chart("2 · H. pylori eradication failure", [
F.s("Positive test after first treatment"), F.a,
F.s("Check adherence; do not repeat clarithromycin"), F.a,
F.s("Second line: a different regimen from the table, 14 days"), F.a,
F.d("Still positive?"), F.a,
F.e("Endoscopy with culture and sensitivity; susceptibility-guided therapy")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>A PPI makes the stool antigen test falsely negative.</b> Stop it for 2 weeks before testing.</li>
<li><b>Biopsy every gastric ulcer</b> and re-scope: some cancers heal over temporarily with PPIs.</li>
<li><b>Ask about previous macrolides</b> (azithromycin, clarithromycin for chest infections) before choosing a clarithromycin regimen.</li>
<li><b>Epigastric pain in a diabetic or older person needs an ECG</b> before a PPI.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Repeated PPI courses for years without testing for H. pylori", "Missed cure; missed cancer", "Test and treat; endoscopy for alarm features"],
["7-day eradication", "Lower cure rates", "Always 14 days"],
["Testing for cure while still on PPI", "False negative", "Off PPI 2 weeks"],
["Prescribing ranitidine", "Withdrawn (NDMA)", "Famotidine or omeprazole"],
["Long-term NSAIDs without PPI in high-risk patients", "Bleeding and perforation", "PPI co-therapy"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Name the two main causes of peptic ulcer.", "Helicobacter pylori infection and NSAIDs (including aspirin).")}
${qa("Student", "What is the Bhutan STG eradication regimen?", "Omeprazole 20 mg, amoxicillin 1 g and clarithromycin 500 mg, all twice daily for 14 days.")}
${qa("Intern/MO", "Why can bismuth quadruple therapy not be given from the Bhutan NEML?", "Bismuth and oral tetracycline are not listed on the NEML 2025.")}
${qa("Intern/MO", "How long off PPI before a stool antigen test?", "Two weeks (and four weeks after antibiotics), to avoid false negatives.")}
${qa("Intern/MO", "What replaced ranitidine on the NEML, and why?", "Famotidine, because ranitidine was withdrawn worldwide in 2020 over NDMA contamination.")}
${qa("Specialist", "When is clarithromycin triple therapy acceptable as first line?", "Only where local clarithromycin resistance is under 15% or susceptibility is known, and the patient has not taken macrolides before (Maastricht VI).")}
${qa("Specialist", "Why is metronidazole-based triple therapy a poor choice in Bhutan?", "About 81% of Bhutanese H. pylori isolates are metronidazole-resistant, while clarithromycin resistance is only about 2% (Vilaichone 2020).")}
${qa("Intern/MO", "What must happen after a gastric ulcer is treated?", "Repeat endoscopy with biopsy at 8–12 weeks to confirm healing and exclude cancer.")}
${qa("Viva", "Describe the Correa cascade.", "Chronic H. pylori gastritis → atrophy → intestinal metaplasia → dysplasia → gastric adenocarcinoma.")}
${qa("Intern/MO", "Signs of a perforated ulcer?", "Sudden severe epigastric pain, board-like rigid abdomen, absent bowel sounds, free air under the diaphragm on erect chest X-ray.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Vilaichone RK, Mahachai V, Shiota S et al. Antibiotic resistance rate of <i>Helicobacter pylori</i> in Bhutan. <i>World J Gastroenterol</i> 2013;19(33):5508–5512. <a href="https://www.wjgnet.com/1007-9327/full/v19/i33/5508.htm" target="_blank" rel="noopener">wjgnet.com (open access)</a></li>
<li id="ref-2">Vilaichone RK, Aumpan N, Ratanachu-ek T et al. Population-based study of <i>Helicobacter pylori</i> infection and antibiotic resistance in Bhutan. <i>Int J Infect Dis</i> 2020;97:102–107. <a href="https://doi.org/10.1016/j.ijid.2020.05.077" target="_blank" rel="noopener">doi:10.1016/j.ijid.2020.05.077</a> (open access)</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §4.1.2 Gastritis, §4.1.3 Peptic ulcer disease, §4.1.4 Carcinoma of the stomach; National Essential Medicines List 2025.</li>
<li id="ref-4">Malfertheiner P, Megraud F, Rokkas T et al. Management of <i>Helicobacter pylori</i> infection: the Maastricht VI/Florence consensus report. <i>Gut</i> 2022;71:1724–1762. <a href="https://doi.org/10.1136/gutjnl-2022-327745" target="_blank" rel="noopener">doi:10.1136/gutjnl-2022-327745</a></li>
<li id="ref-5">Chey WD, Howden CW, Moss SF et al. ACG Clinical Guideline: Treatment of <i>Helicobacter pylori</i> infection. <i>Am J Gastroenterol</i> 2024;119:1730–1753. <a href="https://doi.org/10.14309/ajg.0000000000002968" target="_blank" rel="noopener">doi:10.14309/ajg.0000000000002968</a></li>
<li id="ref-6">Moayyedi PM, Lacy BE, Andrews CN et al. ACG and CAG Clinical Guideline: Management of dyspepsia. <i>Am J Gastroenterol</i> 2017;112:988–1013. <a href="https://doi.org/10.1038/ajg.2017.154" target="_blank" rel="noopener">doi:10.1038/ajg.2017.154</a></li>
<li id="ref-7">US Food and Drug Administration. FDA requests removal of all ranitidine products (Zantac) from the market. April 2020. <a href="https://www.fda.gov/news-events/press-announcements/fda-requests-removal-all-ranitidine-products-zantac-market" target="_blank" rel="noopener">fda.gov</a></li>
<li id="ref-8">Lanza FL et al. ACG guidelines for prevention of NSAID-related ulcer complications. <i>Am J Gastroenterol</i> 2009;104:728–738. <a href="https://doi.org/10.1038/ajg.2009.115" target="_blank" rel="noopener">doi:10.1038/ajg.2009.115</a></li>
<li id="ref-9">Ministry of Health, Bhutan. Bhutan Population-Based Cancer Registry Report 2019–2022. 2024. <a href="https://moh.gov.bt/wp-content/uploads/2025/07/A4_Final_PBCR-19-22-report.pdf" target="_blank" rel="noopener">moh.gov.bt (PDF)</a></li>
<li id="ref-10">Singh SP, Ahuja V, Ghoshal UC et al. Management of <i>Helicobacter pylori</i> infection: the Bhubaneswar Consensus Report of the Indian Society of Gastroenterology. <i>Indian J Gastroenterol</i> 2021;40:420–444. <a href="https://doi.org/10.1007/s12664-021-01186-4" target="_blank" rel="noopener">doi:10.1007/s12664-021-01186-4</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and NEML content", "<span class='pass'>Verified</span>", "STG 2024 §4.1.2–4.1.4; NEML 2025 read directly"],
["Eradication regimens and doses", "<span class='pass'>Checked</span>", "Maastricht VI, ACG 2024; Bhutan resistance from Vilaichone 2013 and 2020 (clarithromycin 2%, metronidazole 81%)"],
["Endoscopy age threshold for Bhutan", "<span class='flag'>Panel view</span>", "No Bhutan-specific guideline; based on high gastric cancer burden"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY / CC BY-SA"]], "qc")}
` }
]
});
