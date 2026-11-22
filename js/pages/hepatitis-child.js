/* Viral hepatitis — children and neonates */
registerPage({
id: "hepatitis-child",
title: "Viral Hepatitis — Children & Neonates",
subtitle: "The jaundiced child: mild hepatitis A at school age, preventing hepatitis B at birth, recognising acute liver failure, and never missing the pale stools of biliary atresia in a jaundiced baby",
age: "Children & neonates", specs: ["paeds", "gi", "id", "neo", "ph"],
keywords: ["hepatitis child", "viral hepatitis children", "hepatitis A child", "hepatitis E child", "hepatitis B child", "hepatitis B birth dose", "HBIG newborn", "mother to child hepatitis B", "chronic hepatitis B child", "acute liver failure child", "jaundice child", "conjugated jaundice infant", "biliary atresia", "pale stools"],
related: ["hepatitis-adult", "ge-child", "enteric-child", "sepsis-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In children, hepatitis A is usually mild or even silent, while hepatitis B caught at birth stays for life in nine out of ten babies. So the paediatric priorities are prevention at birth, supportive care for the common acute cases, and early recognition of the rare child who develops liver failure — or the jaundiced baby who actually has biliary atresia.</p>
<div class="glance">
<div><h4>Hepatitis A (and E)</h4><p>Fever, vomiting, dark urine, jaundice; supportive care; off school until 7 days after jaundice (STG).</p></div>
<div><h4>Prevent hepatitis B</h4><p>${dr("hepb_vaccine")} birth dose within 24 h for all; plus ${dr("hbig")} if mother HBsAg positive.</p></div>
<div><h4>Liver failure</h4><p>INR 1.5 or more with encephalopathy, or 2 or more without; low glucose; refer urgently.</p></div>
<div><h4>Painkiller</h4><p>${dr("paracetamol")} 10–15 mg/kg, no more than 4 doses a day, for short periods; avoid NSAIDs and herbal remedies.</p></div>
<div><h4>Baby jaundiced over 2 weeks</h4><p>Check stool and urine colour and split bilirubin: <b>pale stools = biliary atresia until proven otherwise</b> — refer before 60 days.</p></div>
<div><h4>Chronic B in children</h4><p>Specialist follow-up; tenofovir from 2 years when criteria are met (WHO 2024).</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§12.4.10) gives anti-HAV, HBsAg and anti-HCV tests, symptomatic treatment, hydration, handwashing and exclusion from school or work for hepatitis A from 2 weeks before to 7 days after jaundice. Hepatitis B vaccine has been in the national programme since 1997, with a monovalent birth dose (94% coverage among institutional births) and HBIG for babies of HBsAg-positive mothers; HBsAg prevalence among children aged 5–17 was 0.7% in 2017 (NSP IV). ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
${tbl(["Virus or cause", "In children", "Notes"], [
["Hepatitis A", "Commonest acute hepatitis; under 6 years usually without jaundice", "Outbreaks in schools and villages"],
["Hepatitis E", "Usually mild in children", "Waterborne outbreaks"],
["<b>Hepatitis B</b>", "Infection at birth or in early childhood: about 90% (infants) and 25–50% (1–5 years) become chronic", "Prevented by birth dose and HBIG"],
["Hepatitis C", "Rare; mother-to-child or unsafe injections", "Treat from 3 years with DAAs (WHO 2022)"],
["Other viruses", "EBV, CMV, dengue, measles, enteroviruses", "—"],
["Non-viral mimics", "Biliary atresia, choledochal cyst, worms in the bile duct, drugs (anti-TB, valproate, paracetamol overdose), Wilson's disease (over 5 years), autoimmune hepatitis", "Think of these when viral tests are negative"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Age at infection decides the outcome of hepatitis B", [
F.s("Hepatitis B virus infects the liver"), F.a,
F.d("Age at infection"), F.a,
F.b([["Newborn", F.e("Immune tolerance: about 90% chronic")], ["Adult", F.ok("Vigorous immune response: under 5% chronic")]]), F.a,
F.s("Chronic infection: silent for decades"), F.a,
F.e("Cirrhosis and liver cancer in adult life — sometimes in adolescence")])}
<p>The newborn immune system tolerates the virus rather than attacking it, so infection persists. That is why the first 24 hours of life — vaccine and HBIG — matter more than anything done later.${r(1, 2)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Paracetamol in acute hepatitis", "Adult STG advises avoiding paracetamol", "Paracetamol at normal doses for short periods is safe; NSAIDs carry bleeding and kidney risks", "Paracetamol 10–15 mg/kg, maximum 4 doses/day, short course"],
["Treating chronic HBV in children", "Not addressed", "WHO 2024: tenofovir from 2 years (or entecavir) for those meeting adult-type criteria (fibrosis, raised ALT with high DNA, family history)", "Paediatric hepatology referral"],
["School exclusion (hepatitis A)", "2 weeks before to 7 days after jaundice", "7 days after jaundice onset (CDC, UKHSA)", "As STG"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Picture", "Features", "Clue"], [
["Hepatitis A in a young child", "Fever, vomiting, diarrhoea, abdominal pain; often no jaundice", "Adults in the family later become jaundiced"],
["Hepatitis A/E in older child", "Anorexia, nausea, dark urine, pale stools, yellow eyes, tender liver", "Recovery in 2–6 weeks"],
["Acute liver failure", "Drowsiness, irritability, bleeding, vomiting, hypoglycaemia; encephalopathy may be late in young children", "INR is the key test"],
["Chronic hepatitis B", "Usually no symptoms", "Found by screening (mother positive)"],
["Jaundiced baby over 2 weeks (conjugated)", "Pale or clay stools, dark urine staining the nappy, enlarged liver", "Biliary atresia, neonatal hepatitis, sepsis, UTI, hypothyroidism"]])}
${box("red", "Refer urgently", `<ul><li>Drowsiness, confusion, unusual irritability, seizures</li><li>Bleeding, bruising; INR 1.5 or more</li><li>Low glucose; persistent vomiting; dehydration</li><li>Infant with jaundice over 2 weeks and pale stools or dark urine</li></ul>`)}
<h3>The typical patient</h3>
<p>An 8-year-old boy from Trongsa has had four days of fever, nausea and abdominal pain, and now yellow eyes and dark urine; two classmates had the same last month. He is alert, drinking well, with a tender liver edge and no bruising. ALT 1200, bilirubin 4 mg/dL, INR 1.1, glucose normal; IgM anti-HAV positive. <b>This is acute hepatitis A.</b> He can recover at home with fluids, normal food as tolerated, paracetamol if needed, and a week off school after the jaundice began; the family is taught handwashing, and the school is told.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against viral hepatitis", "Best test"], [
["<b>Biliary atresia</b>", "Infant, pale stools, dark urine, conjugated bilirubin", "Onset in first weeks of life", "Split bilirubin, ultrasound; urgent referral"],
["Worms in the bile duct, gallstones (haemolysis)", "Colicky pain, high ALP", "—", "Ultrasound"],
["Haemolysis (G6PD, thalassaemia)", "Pallor, unconjugated bilirubin, normal ALT", "—", "CBC, film, reticulocytes"],
["Drug-induced liver injury", "Anti-TB drugs, valproate, paracetamol overdose", "—", "History, paracetamol level"],
["Malaria, dengue, leptospirosis, enteric fever", "Fever, exposure", "—", "RDTs, cultures"],
["Wilson's disease, autoimmune hepatitis", "Over 5 years, recurrent or chronic hepatitis", "—", "Specialist tests"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["ALT, AST, bilirubin (total and conjugated), ALP, albumin", "Pattern", "Conjugated over 20% of total (or over 1 mg/dL) in an infant = cholestasis", "Essential"],
["<b>INR</b>, glucose", "Liver failure", "—", "Essential"],
["IgM anti-HAV, IgM anti-HEV, HBsAg, anti-HCV", "Cause (STG)", "—", "Essential"],
["CBC, film", "Haemolysis", "—", "If pale"],
["Ultrasound", "Biliary tree, gallbladder, liver", "Fasting; absent or small gallbladder suggests biliary atresia", "Selected"],
["Infant of HBsAg-positive mother", "HBsAg and anti-HBs at 9–12 months", "After completing vaccines", "Follow-up"]])}
` },

{ id: "staging", title: "Severity and when to treat chronic hepatitis B", html: `
<h3>Acute liver failure in children (PALF definition)</h3>
<ul><li>INR 1.5 or more with encephalopathy, or INR 2 or more with or without encephalopathy, not corrected by vitamin K, without known chronic liver disease: refer at once.</li></ul>
<h3>Chronic hepatitis B</h3>
<p>For HBsAg-positive adolescents, the adult WHO 2024 tool applies (ALT upper limits 30 for boys, 19 for girls). Younger children: paediatric hepatology decision.${r(2)}</p>
<div class="calc" data-calc="hbvtreat"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Acute viral hepatitis</h3>
<ul><li>Home care if alert, drinking and INR normal: fluids, normal diet as tolerated, rest as wished. ${dr("paracetamol")} 10–15 mg/kg up to 4 times a day for a few days only; no NSAIDs, herbal or traditional remedies.${r(3)}</li>
<li>Review LFT and INR within a few days; sooner if worse.</li>
<li>Hepatitis A: exclude from school until 7 days after jaundice; handwashing after the toilet and nappies; vaccinate close contacts where hepatitis A vaccine is available (not on NEML).</li></ul>
<h3>B. Acute liver failure</h3>
<ul><li>Urgent transfer to a referral hospital with PICU. Meanwhile: check glucose hourly (10% dextrose infusion), ${dr("vitamin_k")} 0.3 mg/kg IV (max 10 mg), avoid sedatives, treat infection, restrict protein only if encephalopathic, careful fluids.</li></ul>
<h3>C. Preventing hepatitis B at birth</h3>
<ol><li>Every baby: monovalent ${dr("hepb_vaccine")} within 24 hours of birth (ideally within 12).</li>
<li>Mother HBsAg positive: also ${dr("hbig")} 100–200 IU IM in the other thigh within 12–24 hours.</li>
<li>Mother with HBV DNA over 200,000 IU/mL: tenofovir from 28 weeks of pregnancy (see <a href="#/d/hepatitis-adult">adult chapter</a>).</li>
<li>Complete pentavalent doses; test HBsAg and anti-HBs at 9–12 months. Breastfeed normally.${r(1, 2)}</li></ol>
<h3>D. Chronic hepatitis B in children</h3>
<ul><li>Refer to paediatric hepatology at NRH: ALT, HBeAg, HBV DNA, ultrasound; tenofovir (from 2 years, 35 kg tablet or weight-based) or entecavir when criteria are met; yearly review and liver cancer surveillance from adolescence if there is a family history.</li></ul>
<h3>E. The jaundiced infant over 2 weeks</h3>
<ul><li>Look at the stool colour (stool colour card), urine and liver; measure total and conjugated bilirubin. Conjugated jaundice or pale stools: same-week referral — Kasai surgery for biliary atresia works best before 45–60 days of age.</li></ul>
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Supportive care; refer drowsy, bleeding, vomiting or infant jaundice with pale stools; give birth-dose vaccine at every delivery"],
["District hospital", "LFT, INR, serology; HBIG and vaccine for babies of positive mothers"],
["NRH", "PICU for liver failure, paediatric hepatology, biliary atresia surgery referral"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("paracetamol"), "10–15 mg/kg up to 4 times daily, short course", "Avoid NSAIDs"],
[dr("hepb_vaccine"), "Birth dose within 24 h, then pentavalent schedule", "All babies"],
[dr("hbig"), "100–200 IU IM within 12–24 h of birth", "Mother HBsAg positive"],
[dr("vitamin_k"), "0.3 mg/kg IV (max 10 mg)", "Coagulopathy"],
[dr("tenofovir_hbv"), "From 2 years: weight-based or 300 mg tablet at 35 kg and over", "Specialist"],
[dr("lactulose"), "By age, to 2–3 soft stools a day", "Encephalopathy (specialist)"]])}
` },

{ id: "populations", title: "Neonates, adolescents and special groups", html: `
<ul><li><b>Neonates:</b> jaundice beyond 2 weeks (3 weeks in preterm babies) needs a conjugated bilirubin and stool check.</li>
<li><b>Adolescents:</b> hepatitis B and C from sexual activity, tattoos, piercing and drug use; vaccinate catch-up; adult guidance applies.</li>
<li><b>Children on anti-TB treatment:</b> drug-induced hepatitis — see <a href="#/d/tb-child">TB in children</a>.</li></ul>
` },

{ id: "scenarios", title: "Hepatitis with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Dehydration from vomiting", "Oral or IV fluids with glucose", "Hypoglycaemia risk"],
["Severe malnutrition", "Admit; glucose; careful fluids", "Low reserve"],
["Haemolytic disease", "Gallstones and jaundice are common", "Ultrasound"],
["HIV", "HBV co-infection: tenofovir-based ART", "Dual activity"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Acute liver failure", "INR, encephalopathy, glucose", "PICU, transplant centre referral"],
["Relapsing hepatitis A", "Second rise in ALT weeks later", "Supportive"],
["Chronic hepatitis B", "HBsAg over 6 months", "Specialist follow-up"],
["Missed biliary atresia", "Cirrhosis by 1 year", "Early referral"]])}
<p>Acute hepatitis A and E in children almost always resolve completely.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>LFT until normal; HBsAg at 6 months after acute hepatitis B.</li>
<li>Safe water, handwashing, safe toilets; hepatitis B vaccination for all.</li></ul>
${box("green", "What to tell the family", `<ul><li>"Your child's liver is inflamed by a virus. Most children are better within a few weeks."</li><li>Give plenty of fluids; let your child eat what they like. Use only the medicine your doctor recommends — no herbal remedies.</li><li>Wash hands with soap after the toilet and before food; keep your child home until a week after the yellowness began.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Your child becomes very sleepy, confused, or bleeds or bruises</li><li>Keeps vomiting or will not drink</li><li>Your baby still looks yellow after 2 weeks, or passes pale stools</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Scleral icterus", src: "images/scleral-icterus.jpg", mod: "Clinical photograph", ctx: "Acute hepatitis (adult patient; the sign is the same in children)", loc: "Eyes", find: "Yellow sclerae", signs: "Jaundice", interp: "Look in daylight; check INR and glucose", by: "Sheila J. Toro", page: "https://commons.wikimedia.org/wiki/File:Scleral_Icterus.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Prolonged jaundice in an infant", src: "images/newborn-jaundice.jpg", mod: "Clinical photograph", ctx: "6-week-old girl with persistent jaundice", loc: "Skin", find: "Yellow skin", signs: "Prolonged infant jaundice", interp: "In this baby the cause was hypothyroidism — a reminder that jaundice beyond 2 weeks needs a full work-up: conjugated bilirubin, stool colour, thyroid function", by: "Dr. Hudson", page: "https://commons.wikimedia.org/wiki/File:Jaundice_in_newborn.jpg", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Jaundiced child", [
F.s("Age? Stool and urine colour? Drugs? Contacts?"), F.a,
F.d("Infant over 2 weeks with conjugated jaundice or pale stools?"), F.a,
F.b([["Yes", F.e("Same-week referral: biliary atresia work-up")], ["No", F.s("LFT, INR, glucose, viral serology")]]), F.a,
F.d("INR 1.5+ with drowsiness, or 2+, or low glucose?"), F.a,
F.b([["Yes", F.e("Acute liver failure: PICU referral")], ["No", F.ok("Supportive care; school exclusion for HAV")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Look at the nappy:</b> pale stool and dark urine in a jaundiced baby means referral.</li>
<li>Give the hepatitis B birth dose at every delivery, including home deliveries reached later.</li>
<li>In young children, encephalopathy can be subtle: rely on INR and glucose.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling prolonged infant jaundice breast-milk jaundice without a split bilirubin", "Missed biliary atresia", "Conjugated bilirubin and stool check"],
["Missing HBIG for a baby of a positive mother", "Lifelong infection", "Check maternal HBsAg at delivery"],
["NSAIDs or herbal remedies", "Bleeding, liver injury", "Paracetamol only"],
["Not checking glucose", "Hypoglycaemic brain injury", "Glucose with every LFT in sick children"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why is hepatitis A often missed in young children?", "Most under 6 years have no jaundice — only fever, vomiting or diarrhoea.")}
${qa("Intern/MO", "What does a baby born to an HBsAg-positive mother need?", "Hepatitis B birth-dose vaccine and HBIG within 12–24 hours, then the full schedule and testing at 9–12 months.")}
${qa("Intern/MO", "Define paediatric acute liver failure.", "INR 1.5 or more with encephalopathy, or 2 or more without, not corrected by vitamin K, without known chronic liver disease.")}
${qa("Specialist", "Why is the timing of biliary atresia diagnosis important?", "Kasai portoenterostomy works best before 45–60 days of age; later surgery fails more often, leading to cirrhosis and transplant need.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National AIDS Control Programme, Ministry of Health, Bhutan. National Strategic Plan IV for HIV/AIDS, Viral Hepatitis and STIs, 2023–2028.</li>
<li id="ref-2">World Health Organization. Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240090903" target="_blank" rel="noopener">who.int/publications/i/item/9789240090903</a></li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.4.10 Viral hepatitis (children); NEML 2025.</li>
<li id="ref-4">World Health Organization. Updated recommendations on treatment of adolescents and children with chronic HCV infection. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240052734" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-5">Bhutan Clinical Reference app: Acute viral hepatitis; Hepatitis A and E; Hepatitis B (topic pages, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and NSP IV", "<span class='pass'>Verified</span>", "STG §12.4.10; NSP IV birth dose, HBIG and prevalence"],
["PALF definition, Kasai timing", "<span class='pass'>Standard</span>", "Widely used paediatric hepatology criteria"],
["HBIG and hepatitis A vaccine on NEML", "<span class='flag'>Gap</span>", "Not listed"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a paediatrician or paediatric gastroenterologist"],
["Images", "<span class='pass'>Done</span>", "CC BY 4.0 / public domain"]], "qc")}
` }
]
});
