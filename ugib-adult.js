/* Upper gastrointestinal bleeding — adults */
registerPage({
id: "ugib-adult",
title: "Upper GI Bleeding — Adults",
subtitle: "Haematemesis and melaena: resuscitate, risk-score, give the right drugs before endoscopy, and know when it is varices",
age: "Adults", specs: ["gi", "medicine", "surg", "emerg"],
keywords: ["upper GI bleed", "UGIB", "haematemesis", "hematemesis", "melaena", "melena", "coffee ground vomit", "peptic ulcer bleeding", "duodenal ulcer", "gastric ulcer", "variceal bleeding", "oesophageal varices", "Mallory-Weiss", "Glasgow-Blatchford", "Blatchford", "Rockall", "Forrest", "omeprazole infusion", "PPI", "octreotide", "terlipressin", "endoscopy", "band ligation", "transfusion threshold", "tranexamic acid", "HALT-IT", "NSAID", "H. pylori", "stomach cancer"],
related: ["cirrhosis-adult", "acs-adult", "sepsis-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Vomiting blood or passing black, tarry stool is frightening for the patient and urgent for you. Most bleeding peptic ulcers stop with resuscitation, a PPI and endoscopy; variceal bleeding in cirrhosis needs different drugs from the first minute. In Bhutan, where <i>H. pylori</i> infects about two-thirds of adults, alcohol-related cirrhosis is common, and stomach cancer is the leading cancer in men, both pathways matter.</p>
<div class="glance">
<div><h4>Resuscitate</h4><p>Two large cannulas (14–16 G), crystalloid, group and cross-match. <b>Transfuse to Hb ≥7 g/dL</b> (≥8 with heart disease); do not over-transfuse.</p></div>
<div><h4>Score</h4><p><b>Glasgow-Blatchford</b>: 0–1 = outpatient endoscopy possible; higher = admit.</p></div>
<div><h4>All patients</h4><p>${dr("ppi_iv", "Omeprazole")} 80 mg IV (STG), then 40 mg IV twice daily (or infusion) until endoscopy.</p></div>
<div><h4>If cirrhosis / varices</h4><p>Add ${dr("octreotide", "octreotide")} (or ${dr("terlipressin", "terlipressin")}) <b>and</b> ${dr("ceftriaxone", "ceftriaxone")} 1 g daily; restrictive transfusion is essential.</p></div>
<div><h4>Endoscopy</h4><p>Within <b>24 hours</b> after resuscitation; within 12 h for suspected varices. Refer if not available on site.</p></div>
<div><h4>Do not</h4><p>Give tranexamic acid (HALT-IT); use IV ranitidine if a PPI is available; over-transfuse in varices.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §4.1.5: oxygen, large-bore cannulas, NS or RL to keep SBP over 100 and pulse under 100 until blood is available, <b>Hb target ≥7 g/dL</b>, IV omeprazole 80 mg stat (preferred over IV ranitidine 50 mg 12-hourly), <b>ceftriaxone 1 g daily and octreotide (50–100 µg bolus then 25–50 µg/h)</b> for suspected variceal bleeding in cirrhosis, FFP and platelets (to keep platelets over 50,000), intubation if consciousness is impaired, and referral. Omeprazole 40 mg injection is listed to DH; octreotide and terlipressin are at referral level.${r(1, 2)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes and burden", html: `
${tbl(["Cause", "Clues", "Approximate share"], [
["<b>Peptic ulcer</b> (duodenal, gastric)", "Epigastric pain, NSAIDs, aspirin, <i>H. pylori</i>, alcohol, smoking", "Commonest (about a third to a half)"],
["<b>Oesophageal or gastric varices</b>", "Cirrhosis, alcohol, hepatitis B/C, ascites, jaundice, splenomegaly", "Large share in high-cirrhosis settings such as Bhutan"],
["Erosive gastritis, duodenitis, oesophagitis", "NSAIDs, alcohol, reflux, critical illness", "Common, usually minor"],
["Mallory-Weiss tear", "Bleeding after forceful retching or vomiting (alcohol)", "5–10%; usually stops"],
["<b>Upper GI cancer</b>", "Weight loss, early satiety, dysphagia, anaemia, age over 40", "Important in Bhutan (stomach cancer)"],
["Others: Dieulafoy lesion, angiodysplasia, portal hypertensive gastropathy, aorto-enteric fistula", "Recurrent obscure bleeding; previous aortic graft", "Rare"]])}
<p>In Bhutan, <i>H. pylori</i> was found in 66% of 1,178 dyspeptic patients across six districts (85.6% in Punakha), and stomach cancer is the commonest cancer in men and second in women.${r(8, 9)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Two main routes to a bleed, and what each treatment does", [
F.b([
["Peptic ulcer", F.s("<i>H. pylori</i> and NSAIDs break the mucosal barrier; acid digests into an artery"), F.ok("<b>PPI</b> raises gastric pH above 6 so the clot holds; <b>endoscopic therapy</b> seals the vessel; <b>eradicate H. pylori</b>, stop NSAIDs")],
["Varices", F.s("Cirrhosis raises portal pressure; collateral veins in the oesophagus swell and rupture"), F.ok("<b>Octreotide/terlipressin</b> cut portal inflow; <b>band ligation</b>; <b>ceftriaxone</b> prevents infection and rebleeding; beta-blocker later")]]), F.a,
F.s("<b>Blood loss</b> → tachycardia, postural drop, then hypotension and shock"), F.a,
F.b([
["Circulation", F.e("Shock, AKI, myocardial ischaemia"), F.ok("Crystalloid, then <b>restrictive transfusion</b> (Hb 7)")],
["Gut", F.e("Blood is a protein load: urea rises; encephalopathy in cirrhosis"), F.ok("Lactulose in cirrhosis")]])])}
<p>Why restrictive transfusion: in the Villanueva trial, transfusing at Hb under 7 (target 7–9) rather than under 9 reduced rebleeding and death, especially in Child-Pugh A/B cirrhosis, because extra volume raises portal pressure.${r(5)}</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan STG 2024", "ACG 2021 / ESGE 2021", "This guide follows"], [
["Pre-endoscopy acid suppression", "IV omeprazole 80 mg stat (preferred) or IV ranitidine 50 mg 12-hourly", "ESGE suggests high-dose PPI before endoscopy (downstages lesions); ACG 2021 makes no recommendation for or against; no role for H2 blockers", "Omeprazole; avoid ranitidine (also withdrawn in many countries for NDMA contamination)"],
["Post-endoscopy PPI", "Not specified", "High-dose PPI for 72 h after endoscopic haemostasis: continuous or intermittent (40 mg BD or more) are equivalent", "Intermittent 40 mg IV BD × 72 h, then oral BD to 14 days, then daily"],
["Transfusion", "Hb ≥7 g/dL", "Hb 7 (8 with cardiovascular disease), target 7–9", "Same"],
["Risk score", "Not specified", "GBS 0–1: outpatient (ACG, ESGE)", "GBS"],
["Endoscopy timing", "Refer for endoscopy", "Within 24 h; ESGE: not within 6 h routinely (no benefit); varices within 12 h", "Within 24 h after resuscitation"],
["Prokinetic", "Not mentioned", "Erythromycin 250 mg IV 20–120 min before endoscopy", "Use if IV erythromycin available (only tablets on NEML)"],
["Tranexamic acid", "Not mentioned", "Not recommended (HALT-IT)", "Do not use"]])}
<p class="qn">Sources: STG, ACG 2021, ESGE 2021, Baveno VII.${r(1, 3, 4, 6)}</p>
` },

{ id: "presentation", title: "Clinical assessment", html: `
<h3>History</h3><ul><li>Fresh blood, clots or 'coffee grounds'? Black tarry stool (melaena: about 50–100 mL of blood or more)? Fainting?</li><li>Epigastric pain, previous ulcers, <b>NSAIDs, aspirin, clopidogrel, anticoagulants, steroids</b>, SSRIs.</li><li>Alcohol, known liver disease, hepatitis B/C; weight loss, dysphagia, early satiety (cancer).</li><li>Retching before the blood (Mallory-Weiss); aortic graft (fistula).</li></ul>
<h3>Examination</h3><ul><li>Pulse, BP, <b>postural drop</b>, capillary refill, conscious level, urine output.</li><li>Signs of chronic liver disease: jaundice, spider naevi, palmar erythema, ascites, splenomegaly, flapping tremor.</li><li>Rectal examination for melaena. Epigastric mass, lymph nodes (cancer).</li></ul>
${tbl(["Estimated loss", "Pulse", "BP", "Other"], [["Under 15%", "Normal or slight rise", "Normal", "Anxious"], ["15–30%", "Over 100", "Postural drop", "Cool peripheries"], ["30–40%", "Over 120", "Low", "Confused, oliguric"], ["Over 40%", "Over 140 or falling", "Very low", "Drowsy, pre-arrest"]])}
<div class="calc" data-calc="gbs"></div>
${box("red", "Red flags", `<ul><li>Shock (SBP under 90, pulse over 100 after initial fluids), ongoing fresh haematemesis.</li><li>Known cirrhosis or signs of liver disease (assume varices).</li><li>Age over 60, heart disease, on anticoagulants or antiplatelets.</li><li>Severe abdominal pain or rigidity (perforation).</li><li>Haemoglobin drop over 2 g/dL, transfusion need.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Mimic", "Clue"], [
["Swallowed blood (epistaxis, dental bleeding, haemoptysis)", "Look in nose and mouth; cough with frothy bright blood suggests the lungs"],
["Black stool from iron, bismuth, charcoal", "Stool is dark green-black, formed, not sticky; occult blood negative"],
["Brisk upper bleed presenting as fresh rectal bleeding", "Haemodynamically unstable patient with bright red blood per rectum: think upper source, scope the top first"],
["Lower GI bleeding", "Maroon or red blood, stable patient, normal urea"]])}
<h3>A typical case</h3>
<p>A 46-year-old man from Bumthang who drinks ara daily vomits about a cup of fresh blood. Pulse 118, BP 94/60, jaundice and ascites; Hb 8.1, urea 60 mg/dL, platelets 70,000. <b>Suspect variceal bleeding</b>: two cannulas, crystalloid cautiously, cross-match, <b>octreotide 50 µg bolus then 50 µg/h</b>, <b>ceftriaxone 1 g IV</b>, omeprazole 80 mg until the source is known, transfuse only if Hb falls under 7, protect the airway if drowsy, and arrange endoscopy with band ligation within 12 hours (refer to a centre with endoscopy). Glasgow-Blatchford score is 14.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["CBC (Hb, platelets) repeated 4–6-hourly at first", "Severity, transfusion"],
["<b>Group and cross-match</b> (2–4 units if unstable)", "Transfusion"],
["Urea and creatinine (urea rises disproportionately with upper bleeding)", "GBS, AKI"],
["LFT, INR, albumin", "Liver disease, Child-Pugh"],
["Electrolytes, glucose", "Baseline"],
["ECG, troponin (older or cardiac patients)", "Demand ischaemia"],
["Erect chest X-ray if pain or peritonism", "Perforation (free air)"],
["<b>Upper GI endoscopy</b>", "Diagnosis, therapy (injection, clips, thermal, band ligation), biopsy, H. pylori test"],
["H. pylori test (biopsy urease or histology; stool antigen later)", "Eradication prevents rebleeding; false negatives during bleeding and on PPI, so retest if negative"],
["Ultrasound abdomen", "Cirrhosis, splenomegaly, ascites, mass"]])}
${fig({ title: "Duodenal ulcer with a visible vessel", src: "images/ugib-du-vessel.jpg", mod: "Upper GI endoscopy", ctx: "Peptic ulcer bleeding", loc: "Duodenal bulb", find: "An excavated ulcer about 10 mm across with a raised, pigmented visible vessel in its base and oedematous edges", signs: "Forrest IIa (non-bleeding visible vessel)", interp: "High risk of rebleeding (around 40–50% without treatment): needs endoscopic therapy (clips, thermal or combined with adrenaline injection) and high-dose PPI for 72 hours", ddx: "Adherent clot (IIb), flat pigmented spot (IIc, low risk)", by: "Jmarchn", page: "https://commons.wikimedia.org/wiki/File:Duodenal_ulcer.jpg", lic: "CC BY-SA 3.0" })}
` },

{ id: "staging", title: "Risk scores and the Forrest classification", html: `
<div class="calc" data-calc="rockall"></div>
${tbl(["Forrest class", "Endoscopic finding", "Rebleeding without therapy", "Action"], [
["Ia", "Spurting arterial bleeding", "High (up to 90–100%)", "Endoscopic therapy + high-dose PPI"],
["Ib", "Oozing bleeding", "High (10–30%)", "Endoscopic therapy + high-dose PPI"],
["IIa", "Non-bleeding visible vessel", "About 40–50%", "Endoscopic therapy + high-dose PPI"],
["IIb", "Adherent clot", "About 20–30%", "Consider clot removal and therapy"],
["IIc", "Flat pigmented spot", "Under 10%", "Oral PPI; early feeding"],
["III", "Clean base", "Under 5%", "Oral PPI; early discharge"]])}
<p class="qn">Forrest classification as used by ESGE 2021; rebleeding figures are approximate historical values.${r(4)}</p>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Resuscitation (all patients)</h3>
${box("red", "First steps", `<ol>
<li>Airway (protect if drowsy or massive haematemesis: intubate before endoscopy), oxygen, two large-bore cannulas.</li>
<li>Crystalloid (${dr("ringer_lactate", "Ringer's lactate")} or saline) to restore perfusion; avoid aggressive over-filling, especially in varices.</li>
<li><b>Transfuse packed red cells if Hb under 7 g/dL</b> (under 8 with cardiovascular disease), target 7–9; transfuse immediately in massive bleeding regardless of Hb.</li>
<li>Platelets if under 50,000 and actively bleeding; FFP only for coagulopathy with active bleeding (INR alone overestimates risk in cirrhosis).</li>
<li>Hold anticoagulants (reversal: vitamin K and FFP/PCC for warfarin); <b>continue aspirin for secondary prevention</b> where possible (restart within days); stop NSAIDs.</li>
<li>Nil by mouth until endoscopy; monitor pulse, BP, urine output hourly.</li></ol>`)}

<h3>B. Before endoscopy</h3>
<ul><li>${dr("ppi_iv", "Omeprazole")} <b>80 mg IV</b>, then 40 mg IV twice daily (or 8 mg/h infusion) until endoscopy.</li>
<li><b>Suspected varices (cirrhosis):</b> ${dr("octreotide", "octreotide")} 50 µg IV bolus then 50 µg/h (STG: 25–50 µg/h) for 2–5 days, or ${dr("terlipressin", "terlipressin")} 2 mg IV 4-hourly then 1 mg 4-hourly; plus ${dr("ceftriaxone", "ceftriaxone")} <b>1 g IV daily for up to 7 days</b>; lactulose to prevent encephalopathy. See the cirrhosis chapter.</li>
<li>Erythromycin 250 mg IV 20–120 minutes before endoscopy improves views (if the IV form is available; NEML lists only tablets).</li>
<li><b>No tranexamic acid</b>; no routine nasogastric lavage.</li></ul>

<h3>C. Endoscopy</h3>
<ul><li>Within 24 hours of presentation once resuscitated; within 12 hours for suspected varices; urgently if unstable despite resuscitation.</li>
<li>Ulcer with active bleeding or visible vessel: dual therapy (adrenaline injection plus clips or thermal coagulation); adrenaline alone is not enough.</li>
<li>Varices: band ligation (or cyanoacrylate for gastric varices).</li></ul>

<h3>D. After endoscopy</h3>
${tbl(["Finding", "Treatment"], [
["High-risk ulcer treated endoscopically", "PPI 40 mg IV twice daily (or infusion) for 72 h, then oral twice daily to 14 days, then once daily for 6–8 weeks; feed after 24 h"],
["Low-risk ulcer (IIc, III)", "Oral PPI; feed; early discharge"],
["<i>H. pylori</i> positive", "Eradicate (see peptic ulcer chapter); confirm eradication"],
["Gastric ulcer", "Repeat endoscopy at 6–8 weeks with biopsies to exclude cancer"],
["Varices", "Continue vasoactive 2–5 days, ceftriaxone up to 7 days; then non-selective beta-blocker (carvedilol or propranolol) and repeat banding"]])}

<h3>E. Rebleeding and failure</h3>
<ul><li>Rebleeding after ulcer therapy: repeat endoscopy; if fails, interventional radiology (embolisation) or surgery.</li>
<li>Uncontrolled variceal bleeding: balloon tamponade (Sengstaken-Blakemore) as a bridge for up to 24 h, or oesophageal stent; TIPS at a specialist centre.</li></ul>
${box("bt", "District hospital without endoscopy", `<p>Resuscitate, give omeprazole 80 mg IV, add ceftriaxone and octreotide (if available) for possible varices, cross-match, and <b>refer early</b> (with escort, two cannulas, blood if possible). Do not delay transfer waiting for a fall in Hb.</p>`)}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes", "Bhutan (NEML 2025)"], [
[dr("ppi_iv", "Omeprazole IV"), "80 mg stat, then 40 mg BD (or 8 mg/h)", "72 h after endoscopic therapy", "40 mg vial to DH"],
[dr("octreotide", "Octreotide"), "50 µg bolus, then 25–50 µg/h × 2–5 days", "Varices", "Referral level"],
[dr("terlipressin", "Terlipressin"), "2 mg IV 4-hourly, then 1 mg 4-hourly", "Ischaemia risk", "Referral level"],
[dr("ceftriaxone", "Ceftriaxone"), "1 g IV daily up to 7 days", "Cirrhosis with any GI bleed", "1 g NRH/RRH; 250 mg to PHC"],
[dr("vitamin_k", "Vitamin K"), "10 mg IV", "Warfarin or deficiency", "Listed"],
[dr("tranexamic_acid", "Tranexamic acid"), "—", "<b>Not for GI bleeding</b>", "Listed (trauma, PPH)"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>On antiplatelets and anticoagulants</h3><ul><li>Aspirin for secondary prevention: continue or restart within 3–5 days (stopping raises cardiovascular death). Dual antiplatelets after recent stent: cardiology input; do not stop both. Warfarin: hold; reverse if life-threatening (PCC, vitamin K). DOACs: hold; most bleeds settle within 24–48 h.</li></ul>
<h3>Cirrhosis</h3><ul><li>Treat every bleed as variceal until endoscopy; antibiotics reduce infections, rebleeding and death.</li></ul>
<h3>Pregnancy</h3><ul><li>Hyperemesis-related Mallory-Weiss tears are common; PPIs and endoscopy are safe when indicated.</li></ul>
<h3>Older adults</h3><ul><li>Little reserve; may not mount tachycardia (beta-blockers); lower transfusion threshold of 8 with heart disease.</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Massive haematemesis, falling consciousness</b>", "Intubate, massive transfusion, urgent endoscopy or balloon tamponade if varices"],
["<b>Bleeding ulcer in a patient with a coronary stent 2 months ago</b>", "Endoscopic therapy and PPI; keep aspirin; discuss clopidogrel with cardiology; restart quickly"],
["<b>Bright red rectal blood with shock</b>", "Upper GI bleed until proven otherwise: endoscopy first"],
["<b>Recurrent small bleeds, iron-deficiency anaemia, weight loss, age 55</b>", "Endoscopy with biopsies: stomach cancer"],
["<b>Epigastric pain then sudden severe generalised pain and rigidity</b>", "Perforation: erect chest X-ray, surgery (see acute abdomen)"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Clue", "Action"], [
["Rebleeding", "Fresh haematemesis, melaena, falling Hb or BP", "Repeat endoscopy; radiology or surgery"],
["Aspiration pneumonia", "Hypoxia after vomiting", "Airway protection; antibiotics"],
["AKI", "Oliguria, rising creatinine", "Restore perfusion"],
["Hepatic encephalopathy", "Confusion in cirrhosis", "Lactulose; treat infection"],
["Myocardial ischaemia", "Chest pain, ECG changes", "Transfuse to Hb 8; cardiology"],
["Transfusion overload", "Breathlessness", "Restrictive transfusion"]])}
<p>Overall mortality from upper GI bleeding is around 2–10%, higher in older patients, cirrhosis and in-hospital bleeds; variceal bleeding carries about 15–20% six-week mortality.</p>
` },

{ id: "followup", title: "Follow-up and prevention", html: `
<ul><li>Confirm <i>H. pylori</i> eradication 4 weeks after treatment (stool antigen or urea breath test, off PPI for 2 weeks).</li><li>Stop NSAIDs; if essential, use with a PPI (or a COX-2 inhibitor plus PPI after an ulcer bleed).</li><li>Repeat endoscopy for gastric ulcers; varices: banding programme and beta-blocker.</li><li>Alcohol cessation support.</li></ul>
${box("red", "Come back at once if", `<ul><li>You vomit blood again or pass black or bloody stools.</li><li>You feel faint, dizzy on standing, breathless or have chest pain.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Bleeding gastric ulcer", src: "images/ugib-gu-bleed.jpg", mod: "Upper GI endoscopy", ctx: "Peptic ulcer bleeding", loc: "Stomach", find: "A gastric ulcer with active bleeding from its base", signs: "Forrest I (active bleeding)", interp: "Highest-risk lesion: needs dual endoscopic therapy and 72 hours of high-dose PPI; biopsy gastric ulcers or repeat endoscopy to exclude cancer", ddx: "Bleeding gastric cancer, Dieulafoy lesion", by: "Jeremias", page: "https://commons.wikimedia.org/wiki/File:Bleeding_gastric_ulcer.png", lic: "CC BY-SA 3.0" })}
${fig({ title: "Bleeding oesophageal varix", src: "images/ugib-varices-bleed.jpg", mod: "Upper GI endoscopy", ctx: "Portal hypertension", loc: "Lower oesophagus", find: "Dilated varices with active bleeding from one varix (upper right)", signs: "Variceal haemorrhage", interp: "Treat with band ligation, vasoactive drugs and antibiotics; then beta-blocker and repeat banding to prevent rebleeding", ddx: "Mallory-Weiss tear, oesophagitis", by: "Jeremias", page: "https://commons.wikimedia.org/wiki/File:Bleeding_esophageal_varices.png", lic: "CC BY-SA 4.0" })}
</div>
${fig({ title: "Free air under the diaphragm", src: "images/ugib-free-air.jpg", mod: "Chest X-ray (erect)", ctx: "Perforated peptic ulcer", loc: "Under the left hemidiaphragm", find: "A crescent of free gas beneath the diaphragm", signs: "Pneumoperitoneum", interp: "A perforated viscus (most often a peptic ulcer) needs urgent surgical review; do not endoscope a suspected perforation", ddx: "Gastric bubble under the left diaphragm (has rugae and a fluid level), Chilaiditi sign on the right", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Chest_X-ray_showing_presence_of_free_air_under_left_diaphragm.png", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Upper GI bleeding", [
F.s("Haematemesis or melaena → ABC, two large cannulas, bloods, cross-match"), F.a,
F.d("Cirrhosis or signs of liver disease?"), F.a,
F.b([["Yes", F.e("Octreotide/terlipressin + ceftriaxone + PPI; restrictive transfusion; endoscopy within 12 h")], ["No", F.s("PPI 80 mg IV; Glasgow-Blatchford score")]]), F.a,
F.b([["GBS 0–1", F.ok("Outpatient endoscopy if reliable")], ["GBS ≥2", F.s("Admit; transfuse Hb under 7; endoscopy within 24 h")]]), F.a,
F.s("Endoscopic therapy for high-risk stigmata → PPI 72 h → H. pylori test and eradication")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li>A high urea with normal creatinine suggests an upper GI source.</li><li>The first Hb can be normal: it falls as the blood dilutes.</li><li>In cirrhosis, antibiotics are part of bleeding treatment, not an afterthought.</li><li>Every gastric ulcer is a possible cancer until biopsied.</li></ul>
${tbl(["Mistake", "Better"], [["Transfusing to Hb 10", "Target 7–9"], ["Tranexamic acid 'just in case'", "No benefit, more clots"], ["Stopping aspirin indefinitely", "Restart early for secondary prevention"], ["No H. pylori test", "Test and eradicate"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "What is melaena, and what does it imply?", "Black, tarry, sticky, foul-smelling stool from digested blood; usually a bleed above the ligament of Treitz.")}
${qa("Intern/MO", "What transfusion threshold is used in upper GI bleeding?", "Hb under 7 g/dL (under 8 with cardiovascular disease), target 7–9; immediate transfusion in massive bleeding.")}
${qa("Intern/MO", "What extra drugs does suspected variceal bleeding need?", "A vasoactive drug (octreotide or terlipressin) and an antibiotic (ceftriaxone 1 g daily up to 7 days), plus endoscopic band ligation within 12 hours.")}
${qa("Intern/MO", "Which Glasgow-Blatchford score allows outpatient management?", "0–1, in a reliable patient who can return for early endoscopy.")}
${qa("Specialist", "What did HALT-IT show?", "High-dose IV tranexamic acid did not reduce death from GI bleeding and increased venous thromboembolism and seizures.")}
${qa("Viva", "Why does H. pylori matter so much in Bhutan?", "About two-thirds of adults are infected; it causes most peptic ulcers and is the main cause of stomach cancer, the commonest cancer in Bhutanese men.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024: §4.1.5 Gastrointestinal bleeding; §4.1.3 Peptic ulcer disease.</li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and NEML 2025.</li>
<li id="ref-3">Laine L, Barkun AN, Saltzman JR, Martel M, Leontiadis GI. ACG clinical guideline: upper gastrointestinal and ulcer bleeding. Am J Gastroenterol 2021;116:899–917. <a href="https://doi.org/10.14309/ajg.0000000000001245" target="_blank" rel="noopener">doi:10.14309/ajg.0000000000001245</a></li>
<li id="ref-4">Gralnek IM, Stanley AJ, Morris AJ, et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): ESGE Guideline – Update 2021. Endoscopy 2021;53:300–332. <a href="https://doi.org/10.1055/a-1369-5274" target="_blank" rel="noopener">doi:10.1055/a-1369-5274</a></li>
<li id="ref-5">Villanueva C, Colomo A, Bosch A, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med 2013;368:11–21. <a href="https://doi.org/10.1056/NEJMoa1211801" target="_blank" rel="noopener">doi:10.1056/NEJMoa1211801</a></li>
<li id="ref-6">HALT-IT Trial Collaborators. Effects of a high-dose 24-h infusion of tranexamic acid on death and thromboembolic events in patients with acute gastrointestinal bleeding (HALT-IT). Lancet 2020;395:1927–1936. <a href="https://doi.org/10.1016/S0140-6736(20)30848-5" target="_blank" rel="noopener">doi:10.1016/S0140-6736(20)30848-5</a></li>
<li id="ref-7">Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. Lancet 2000;356:1318–1321. <a href="https://doi.org/10.1016/S0140-6736(00)02816-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(00)02816-6</a></li>
<li id="ref-8">Vilaichone RK, Aumpan N, Ratanachu-ek T, et al. Population-based study of Helicobacter pylori infection and antibiotic resistance in Bhutan. Int J Infect Dis 2020;97:102–107.</li>
<li id="ref-9">Vilaichone RK, Mahachai V, Shiota S, et al. Extremely high prevalence of Helicobacter pylori infection in Bhutan. World J Gastroenterol 2013;19:2806–2810. <a href="https://doi.org/10.3748/wjg.v19.i18.2806" target="_blank" rel="noopener">doi:10.3748/wjg.v19.i18.2806</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §4.1.5", "<span class='pass'>Verified</span>", "Read from the PDF"],
["ACG 2021 / ESGE 2021 key points", "<span class='pass'>Checked</span>", "From guideline knowledge; DOIs verified"],
["NEML 2025 availability", "<span class='pass'>Checked</span>", "IV erythromycin not listed; omeprazole IV to DH"],
["GBS and Rockall calculators", "<span class='pass'>Checked</span>", "Against original papers"],
["Bhutan UGIB aetiology data", "<span class='warn'>Evidence gap</span>", "No published local series found"],
["Clinical sign-off", "<span class='warn'>Pending</span>", "Needs gastroenterologist/surgeon review"]], "qc")}
` }
]
});
