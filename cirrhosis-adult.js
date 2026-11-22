/* Liver cirrhosis, alcohol-related liver disease and MASLD — adults */
registerPage({
id: "cirrhosis-adult",
title: "Liver Cirrhosis & Alcohol-related Liver Disease — Adults",
subtitle: "Alcohol, hepatitis B and fatty liver; ascites, varices, encephalopathy and infection; and the patient who keeps drinking",
age: "Adults", specs: ["gi", "medicine", "emerg", "psych"],
keywords: ["cirrhosis", "liver cirrhosis", "chronic liver disease", "CLD", "alcohol liver disease", "ALD", "alcoholic liver disease", "alcohol-related hepatitis", "alcoholic hepatitis", "fatty liver", "NAFLD", "MASLD", "MASH", "NASH", "hepatitis B", "portal hypertension", "ascites", "paracentesis", "SBP", "spontaneous bacterial peritonitis", "varices", "variceal bleeding", "haematemesis", "melaena", "hepatic encephalopathy", "hepatorenal syndrome", "HRS", "jaundice", "Child-Pugh", "MELD", "MELD-Na", "FIB-4", "Maddrey", "lactulose", "spironolactone", "carvedilol", "propranolol", "terlipressin", "octreotide", "albumin", "alcohol withdrawal", "delirium tremens", "thiamine", "Wernicke"],
related: ["ckd-adult", "dm-adult", "tb-adult"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if EASL, AASLD or Baveno publish new guidance)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In Bhutan, alcohol-related liver disease has been the leading cause of death for years. Most of these patients first reach us already cirrhotic: swollen, yellow, bleeding or confused. This chapter is about catching the disease earlier, treating each complication well, and helping the patient stop drinking.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Jaundice, ascites, spider naevi, palmar erythema, gynaecomastia, splenomegaly, wasting. Confirm with <b>LFT, INR, platelets, ultrasound</b>, and screen <b>HBsAg and anti-HCV</b> in everyone.</p></div>
<div><h4>Grade it</h4><p><b>Child-Pugh</b> and <b>MELD-Na</b> for severity; <b>FIB-4</b> to find fibrosis early in drinkers, diabetics and obese patients.</p></div>
<div><h4>Ascites</h4><p>Tap it (diagnostic paracentesis), salt under 5 g/day, ${dr("spironolactone_asc", "spironolactone")} 100 mg ± ${dr("furosemide")} 40 mg, up to 400/160. Give ${dr("albumin")} after a large tap.</p></div>
<div><h4>Variceal bleed</h4><p>Restrictive transfusion (Hb 7–8), ${dr("terlipressin")} or ${dr("octreotide")}, ${dr("ceftriaxone")} 1 g, endoscopy within 12 h for banding.</p></div>
<div><h4>Encephalopathy</h4><p>Find the trigger (bleeding, infection, constipation, sedatives, low K⁺), then ${dr("lactulose")} to 2–3 soft stools a day.</p></div>
<div><h4>Red flags</h4><ul><li>Haematemesis or melaena</li><li>Fever, abdominal pain, confusion (SBP)</li><li>Rising creatinine (HRS)</li><li>Deep jaundice with fever and tender liver (alcohol-related hepatitis)</li></ul></div>
<div><h4>For every patient</h4><p>Complete abstinence, ${dr("thiamine")}, good nutrition (do <b>not</b> restrict protein), ${dr("carvedilol")} if portal hypertension, hepatitis B vaccination or ${dr("tenofovir_hbv", "treatment")}, and ultrasound every 6 months for liver cancer.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 (§4.4) treats the cause, gives a protein-rich diet, vitamin K, lactulose 30 mL TDS, spironolactone, furosemide 40 mg, omeprazole and propranolol 20 mg BD, with paracentesis for ascites. For bleeding (§4.1.5) it uses IV omeprazole 80 mg, ceftriaxone 1 g daily and octreotide. <b>The STG prints spironolactone as '70–100 mg daily', which is below the effective range</b>: this guide follows NEMF 2022 (100–400 mg). Terlipressin and albumin are available at NRH/RRH; octreotide and propranolol reach district hospitals.${r(1, 2)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What cirrhosis is, and why Bhutan carries such a burden", html: `
<h3>Definition</h3>
<p>Cirrhosis is the end stage of chronic liver injury. Bands of scar replace normal architecture and wall off regenerating nodules of liver cells. Two things follow: <b>the liver cannot do its work</b> (making albumin and clotting factors, clearing bilirubin and ammonia), and <b>blood cannot flow freely through it</b>, so pressure builds up behind it (portal hypertension). Almost every complication comes from one or both.</p>
<h3>Compensated and decompensated</h3>
${tbl(["Stage", "What it looks like", "Median survival (untreated cause)", "Priority"], [
["<b>Compensated</b> (cACLD)", "Often no symptoms; found on ultrasound, low platelets or FIB-4", "More than 12 years", "Remove the cause; find portal hypertension; carvedilol; cancer surveillance"],
["Compensated with <b>clinically significant portal hypertension</b>", "Low platelets, splenomegaly, varices, collaterals; liver stiffness ≥25 kPa", "Shorter; risk of first decompensation rises", "Non-selective beta-blocker to prevent decompensation"],
["<b>Decompensated</b>", "Ascites, variceal bleeding, encephalopathy or jaundice", "About 2 years", "Treat each complication; transplant assessment where possible"],
["<b>Acute-on-chronic liver failure</b>", "Sudden organ failures (kidney, brain, coagulation, circulation) after a trigger: alcohol binge, infection, bleed, HBV flare", "28-day mortality 20–80%", "ICU, treat trigger, early specialist referral"]])}

<h3>Causes</h3>
${tbl(["Cause", "Clues", "Key test", "Bhutan relevance"], [
["<b>Alcohol</b>", "Heavy drinking (often home-brewed ara or bangchang), AST:ALT over 2, high GGT, macrocytosis", "History (AUDIT), PEth if available", "<b>The leading cause of death in Bhutan</b> for years"],
["<b>Hepatitis B</b> (± D)", "Family history, born before vaccination, mother-to-child transmission", "HBsAg; HBV DNA", "Common in adults born before universal infant vaccination"],
["<b>Fatty liver (MASLD)</b>", "Obesity, type 2 diabetes, hypertension, dyslipidaemia, little alcohol", "Ultrasound steatosis + FIB-4", "Rising fast with diabetes and urban lifestyles"],
["Hepatitis C", "Injecting drugs, unsafe injections, transfusion before screening", "Anti-HCV; HCV RNA", "Less common; curable with DAAs"],
["Others", "Autoimmune hepatitis (young women, high IgG), Wilson's disease (under 40, neuropsychiatric signs), haemochromatosis, biliary disease, drugs (methotrexate, amiodarone), Budd-Chiari", "Autoantibodies, ceruloplasmin, ferritin/transferrin saturation", "Consider in young patients and non-drinkers"]])}
${box("bt", "Alcohol in Bhutan", `<p>Alcohol is brewed at home, used in rituals and cheap to buy. The Annual Health Bulletins have named alcohol-related liver disease the <b>top cause of death</b> in the country for most of the past decade: 129 deaths in 2023 after 146 in 2022${r(19)}. A 2018 review estimated that it caused about 15% of all deaths, and adult alcohol consumption is well above the global average${r(18)}. The STG asks every clinician to screen every patient with AUDIT or CAGE-AID, because by the time cirrhosis appears there is little left to offer.${r(1)} ${LB.bt()}</p>`)}

<h3>MASLD: the new name for fatty liver</h3>
<p>In 2023 the international societies renamed non-alcoholic fatty liver disease (NAFLD) <b>metabolic dysfunction-associated steatotic liver disease (MASLD)</b>: fat in the liver plus at least one cardiometabolic risk factor (overweight, diabetes or prediabetes, high BP, high triglycerides, low HDL)${r(11)}. People who also drink moderately (women 140–350 g/week, men 210–420 g/week) have <b>MetALD</b>, and heavier drinkers have alcohol-related liver disease. The new names recognise that in Bhutan many patients have both causes at once.</p>
` },

{ id: "patho", title: "Pathophysiology: one scarred organ, many complications", html: `
${F.chart("How a scarred liver produces each complication", [
F.s("<b>Repeated injury</b>: alcohol, hepatitis B/C, fat (MASLD)"), F.a,
F.s("Stellate cells lay down collagen → fibrosis → <b>cirrhosis</b> (nodules walled off by scar)"), F.a,
F.b([
["Liver cannot work", F.s("Less albumin and clotting factors; bilirubin and ammonia not cleared"), F.e("Jaundice, bleeding tendency, <b>encephalopathy</b>, weak immunity (<b>SBP</b>, sepsis)")],
["Blood cannot flow through", F.s("Portal pressure rises (gradient ≥10 mmHg = CSPH)"), F.e("<b>Varices</b> and bleeding; splenomegaly and low platelets; collaterals let toxins reach the brain")]]), F.a,
F.s("Splanchnic vessels dilate → body senses 'low volume' → renin, aldosterone, ADH switched on"), F.a,
F.b([["Kidney retains salt and water", F.e("<b>Ascites</b>, oedema, hyponatraemia")], ["Kidney arteries constrict", F.e("<b>Hepatorenal syndrome</b> (AKI)")]]), F.a,
F.e("Regenerating nodules → <b>hepatocellular carcinoma</b> (1–4% a year)")])}
<h3>Step by step</h3>
<ol class="chain">
<li><b>Injury.</b> Alcohol (through acetaldehyde and oxidative stress), hepatitis B and fat all damage liver cells repeatedly.</li>
<li><b>Scarring.</b> Hepatic stellate cells are activated and lay down collagen. Early fibrosis can regress if the cause is removed; established cirrhosis improves partly, but rarely reverses completely.</li>
<li><b>Portal hypertension.</b> Scar and nodules raise resistance to blood flow, and the gut vessels dilate (nitric oxide), pushing more blood in. Pressure in the portal vein rises. Above a gradient of <b>10 mmHg</b> (clinically significant portal hypertension), collateral veins open (oesophageal and gastric varices, caput medusae) and the spleen enlarges and traps platelets.</li>
<li><b>The circulation is under-filled.</b> Because the splanchnic vessels are wide open, the body senses low blood volume. Renin, aldosterone and ADH rise; the kidneys retain sodium and water, producing <b>ascites</b> and <b>dilutional hyponatraemia</b>. At the extreme, the kidney arteries constrict, producing <b>hepatorenal syndrome</b>. This is why diuretics must be gentle, NSAIDs are dangerous, and albumin helps.</li>
<li><b>Failure of function.</b> Low albumin, a high INR and jaundice reflect lost synthetic and excretory function. Ammonia and other toxins from the gut reach the brain through the collaterals, causing <b>hepatic encephalopathy</b>.</li>
<li><b>Immune paralysis.</b> Bacteria cross a leaky gut wall, and the liver's filtering role is lost. Infection (SBP, pneumonia, cellulitis, UTI) is common, often silent, and a major trigger of death.</li>
<li><b>Cancer.</b> Regenerating nodules can turn malignant: <b>hepatocellular carcinoma</b> develops in 1–4% of patients with cirrhosis each year, more with hepatitis B.</li></ol>
<p class="qn">Pathophysiology paraphrased from EASL 2018 and Baveno VII.${r(3, 5)}</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
<p>Most differences reflect what is available at each level of care. Where the STG figure looks like a printing or extraction error, the guide says so plainly and follows the formulary.${r(1, 2, 3, 4, 5, 6, 20, 21)}</p>
${tbl(["Topic", "Bhutan (STG 2024 / NEMF)", "India (ICMR STW) / APASL", "EASL / AASLD / Baveno VII", "This guide follows"], [
["Spironolactone dose for ascites", "STG prints 70–100 mg daily; NEMF 100–400 mg", "100–400 mg with furosemide 40–160 mg (APASL 2023)", "100 mg → 400 mg (± furosemide 40 → 160 mg)", "<b>100–400 mg</b>; STG figure flagged as an under-dose"],
["Beta-blocker", "Propranolol 20 mg BD", "Carvedilol or propranolol; band ligation", "<b>Carvedilol preferred</b> (6.25 → 12.5 mg/day) for CSPH, even before varices (PREDESCI)", "Carvedilol where available (NRH/RRH); propranolol at DH"],
["Encephalopathy antibiotic", "IV metronidazole 500 mg 8-hourly", "Rifaximin with lactulose", "Rifaximin add-on after recurrence; metronidazole only short-term (neurotoxic)", "Lactulose first; short-course metronidazole if rifaximin unavailable"],
["Protein intake", "Protein-rich diet if no encephalopathy or ascites", "1.2–1.5 g/kg/day", "<b>1.2–1.5 g/kg/day even with encephalopathy</b>; late-evening snack", "Never restrict protein; the STG caveat is outdated"],
["Variceal bleed vasoactive", "Octreotide 50–100 µg bolus, 25–50 µg/h", "Terlipressin or octreotide", "Terlipressin, somatostatin or octreotide for 2–5 days", "Terlipressin (NRH/RRH) or octreotide (DH)"],
["Antibiotic in variceal bleed", "Ceftriaxone 1 g daily", "Ceftriaxone", "Ceftriaxone 1 g/day up to 7 days", "Same; all sources agree"],
["Long-term PPI", "Omeprazole 20 mg BD", "Short course after banding", "Avoid long-term PPI without indication (SBP, encephalopathy risk)", "PPI only with a clear indication"],
["Transfusion in bleeding", "Keep SBP over 100; FFP/platelets to keep platelets over 50,000", "Restrictive", "<b>Restrictive: Hb target 7–8 g/dL</b>; no routine FFP to correct INR", "Restrictive; FFP/platelets only for active bleeding with coagulopathy"],
["Wernicke prevention", "Thiamine 100 mg IV stat then 75 mg orally", "Thiamine before glucose", "Treatment doses 500 mg IV TDS for suspected Wernicke's", "STG for routine; higher dose when Wernicke's is suspected"]])}
${box("blue", "Why we no longer restrict protein", `<p>Patients with cirrhosis lose muscle (sarcopenia), and muscle helps clear ammonia. Old advice to restrict protein in encephalopathy made patients weaker and did not improve the brain. Every current guideline recommends <b>1.2–1.5 g protein/kg/day and 35 kcal/kg/day</b>, spread across the day with a <b>late-evening snack</b> (shortening the overnight fast).${r(3, 12)} ${LB.int()}</p>`)}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Compensated cirrhosis is often silent: the clue is a low platelet count, a nodular liver on an ultrasound done for something else, or a high FIB-4. Decompensation announces itself.</p>
${tbl(["Feature", "What you see", "What it means"], [
["Jaundice", "Yellow sclerae, dark urine", "Failing excretion; deep jaundice with fever and tender liver in a drinker suggests alcohol-related hepatitis"],
["Ascites", "Abdominal swelling, shifting dullness, everted umbilicus, hernias, scrotal or leg oedema", "Portal hypertension with sodium retention"],
["Haematemesis, melaena", "Vomiting blood or black stools, shock", "Variceal (or peptic ulcer) bleeding: an emergency"],
["Encephalopathy", "Day–night reversal, slowness, personality change, asterixis (flap), confusion, coma", "Toxins bypassing the liver; look for a trigger"],
["Stigmata of chronic liver disease", "Spider naevi (more than 5, upper body), palmar erythema, gynaecomastia, testicular atrophy, parotid swelling, Dupuytren's contracture, clubbing, leukonychia", "Long-standing liver disease, especially alcohol"],
["Portal hypertension", "Splenomegaly, caput medusae, low platelets", "Clinically significant portal hypertension"],
["Wasting and weakness", "Temporal and limb muscle loss, cramps, fatigue", "Sarcopenia: a strong predictor of death"],
["Fever, abdominal pain or tenderness", "May be mild or absent", "<b>Spontaneous bacterial peritonitis</b> until the tap proves otherwise"]])}
<h3>Grading hepatic encephalopathy (West Haven)</h3>
${tbl(["Grade", "Features"], [
["Covert / minimal–1", "Subtle: poor attention, shortened attention span, sleep reversal, mild euphoria or anxiety; normal on casual examination"],
["2", "Lethargy, disorientation to time, inappropriate behaviour, obvious asterixis"],
["3", "Somnolent but rousable, gross disorientation, bizarre behaviour"],
["4", "Coma"]])}
${box("red", "Red flags: admit and treat now", `<ul>
<li>Any GI bleeding (haematemesis, melaena, coffee-ground vomit).</li>
<li>Fever, abdominal pain or new confusion with ascites (SBP).</li>
<li>Rising creatinine or falling urine output (AKI / hepatorenal syndrome).</li>
<li>Grade 2 or worse encephalopathy.</li>
<li>Deep jaundice with fever, tender hepatomegaly and leucocytosis after heavy drinking (alcohol-related hepatitis).</li>
<li>Alcohol withdrawal with seizures, hallucinations or delirium.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports it", "Argues against cirrhosis", "Best test"], [
["<b>Heart failure / constrictive pericarditis</b>", "Raised JVP, orthopnoea, crackles, oedema", "Normal liver texture; high ascitic protein (≥2.5 g/dL) with SAAG ≥1.1", "Echo; NT-proBNP; ascitic protein"],
["<b>Tuberculous peritonitis</b>", "Fever, weight loss, night sweats, TB contact", "Ascites with lymphocytes, high protein, SAAG under 1.1", "Ascitic ADA, cell count, GeneXpert; see the TB chapter"],
["<b>Malignant ascites / hepatocellular carcinoma</b>", "Weight loss, hard liver, known cancer", "SAAG under 1.1 (peritoneal spread); mass on ultrasound", "Ultrasound/CT, AFP, cytology"],
["<b>Nephrotic syndrome</b>", "Generalised oedema, frothy urine", "Heavy proteinuria, low ascitic protein, normal liver", "Urine protein:creatinine ratio"],
["<b>Acute viral hepatitis</b> (A, E, B)", "Short history, prodrome, very high ALT (often over 1,000)", "No stigmata, normal liver size and spleen", "IgM anti-HAV, IgM anti-HEV, HBsAg/IgM anti-HBc"],
["<b>Drug-induced liver injury</b> (including anti-TB drugs)", "New drug in the past 3 months", "Recent onset", "Drug history; see the TB chapter"],
["<b>Budd-Chiari syndrome</b>", "Painful hepatomegaly, ascites, thrombophilia, pregnancy", "Hepatic vein occlusion", "Doppler ultrasound"],
["<b>Obstructive jaundice</b>", "Painless jaundice, pale stools, itch, palpable gallbladder", "Dilated bile ducts", "Ultrasound"]])}
<h3>Ascitic fluid tells you the cause</h3>
<p>The <b>serum–ascites albumin gradient (SAAG)</b> = serum albumin minus ascitic albumin. <b>SAAG ≥1.1 g/dL means portal hypertension</b> (cirrhosis, heart failure, Budd-Chiari). Under 1.1 points away from the portal system (TB, cancer, nephrotic syndrome, pancreatitis). Ascitic total protein under 2.5 g/dL with high SAAG suggests cirrhosis; 2.5 or more suggests heart failure.${r(4)}</p>
<h3>A typical case</h3>
<p>A 48-year-old farmer from Mongar who has drunk ara every day for 20 years comes with a tense, swollen abdomen and mild confusion. He is jaundiced, with spider naevi and a flap. Bilirubin is 4.1 mg/dL, albumin 2.6 g/dL, INR 1.9 and sodium 129: <b>Child-Pugh C (11)</b>, MELD-Na about 25. He needs a diagnostic tap before anything else: an ascitic neutrophil count of 400/mm³ means <b>SBP</b>, which explains the confusion. Treat with IV ceftriaxone, albumin 1.5 g/kg and lactulose, stop diuretics for now, and begin the conversation about alcohol once he is clear-headed.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "What it shows"], [
["Full blood count", "Platelets are the cheapest marker of portal hypertension", "Platelets under 150 (often under 100) suggest CSPH; macrocytosis in alcohol use; anaemia from bleeding"],
["LFT: bilirubin, albumin, AST, ALT, ALP, GGT", "Function and pattern", "AST:ALT over 2 suggests alcohol; low albumin reflects poor synthesis"],
["INR (PT)", "Synthetic function; Child-Pugh, MELD", "High INR = poor synthesis (not a reliable bleeding predictor in cirrhosis)"],
["Creatinine, sodium, potassium", "Kidney function, MELD-Na, diuretic safety", "Hyponatraemia and rising creatinine are bad signs"],
["Blood glucose", "Hypoglycaemia in liver failure; diabetes", "Check in any confused patient"],
["<b>HBsAg, anti-HCV</b> (± anti-HDV if HBsAg-positive)", "Treatable viral causes", "Everyone with liver disease (STG)"],
["<b>Ultrasound abdomen with Doppler</b>", "STG calls it the gold standard for diagnosis in practice", "Nodular, shrunken liver; coarse echotexture; splenomegaly; ascites; portal vein flow and thrombosis; liver mass"],
["<b>Diagnostic paracentesis</b>", "Every new ascites, every admission, any fever, pain, encephalopathy or AKI", "Neutrophils ≥250/mm³ = SBP; albumin (SAAG), protein; culture in blood-culture bottles at the bedside"],
["<b>Upper GI endoscopy</b>", "Varices; source of bleeding", "Grade and red signs of varices; peptic ulcer"],
["AFP + ultrasound every 6 months", "Liver cancer surveillance", "New lesion over 1 cm needs CT/MRI"],
["Transient elastography (FibroScan), where available", "Non-invasive fibrosis and portal hypertension", "Liver stiffness ≥15 kPa suggests advanced fibrosis; ≥25 kPa = CSPH (Baveno VII 'rule of five')"],
["Other causes if unclear", "Young patients and non-drinkers", "Autoantibodies and IgG, ceruloplasmin, ferritin and transferrin saturation, lipids, HbA1c"]])}
${box("amber", "Do not delay the tap for a high INR or low platelets", `<p>Paracentesis is safe in almost every patient with cirrhosis. Serious bleeding is rare (about 1 in 1,000), and guidelines do <b>not</b> recommend fresh frozen plasma or platelets beforehand. Avoid only clinically evident DIC or hyperfibrinolysis.${r(4)}</p>`)}
<h3>Scoring the liver</h3>
<div class="calc" data-calc="fib4"></div>
` },

{ id: "staging", title: "Severity scores: Child-Pugh, MELD-Na and Maddrey", html: `
<p>Child-Pugh is quick at the bedside and guides drug dosing and surgical risk. MELD-Na is objective and predicts 90-day mortality; it is used for transplant listing. The Maddrey function identifies severe alcohol-related hepatitis, which may need steroids.${r(3, 7, 8)}</p>
<div class="calc" data-calc="childpugh"></div>
<div class="calc" data-calc="meldna"></div>
<div class="calc" data-calc="maddrey"></div>
<h3>Admit when</h3>
<ul>
<li>GI bleeding, SBP or other infection, AKI, grade 2 or worse encephalopathy, or severe hyponatraemia (Na under 125).</li>
<li>Tense ascites needing large-volume paracentesis, or new ascites needing assessment.</li>
<li>Suspected alcohol-related hepatitis (jaundice with fever and tender liver), or MELD-Na over 20.</li>
<li>Complicated alcohol withdrawal (seizures, hallucinations, delirium tremens).</li></ul>
${box("bt", "Referral within Bhutan", `<p>Endoscopic banding, terlipressin and human albumin are available at JDWNRH and the regional referral hospitals. A district hospital can start octreotide, ceftriaxone, IV omeprazole and lactulose, and transfuse, then transfer the bleeding patient once stable enough. Liver transplantation is not available in Bhutan. A suitable young patient who has stopped drinking may be referred abroad through the government referral system, which makes abstinence and early referral all the more important. ${LB.loc()}</p>`)}
` },

{ id: "manage", title: "Management", html: `
<h3>A. For every patient with cirrhosis</h3>
${box("green", "The basics that change outcomes", `<ol>
<li><b>Remove the cause.</b> Complete, lifelong abstinence from alcohol is the single most effective treatment. In alcohol-related cirrhosis it can turn decompensated disease back into compensated disease. Treat hepatitis B with ${dr("tenofovir_hbv", "tenofovir")}; manage weight, diabetes and lipids in MASLD.</li>
<li><b>Nutrition:</b> 35 kcal/kg/day and <b>1.2–1.5 g protein/kg/day</b>, small frequent meals and a <b>late-evening snack</b>; salt under 5 g/day if ascites. ${dr("thiamine")} for anyone who drinks.</li>
<li><b>Portal hypertension:</b> ${dr("carvedilol")} 6.25 → 12.5 mg/day (or ${dr("propranolol")}) if there is CSPH (platelets under 150 with splenomegaly, varices, or liver stiffness ≥25 kPa), to prevent decompensation and bleeding.${r(5, 13)}</li>
<li><b>Screen:</b> endoscopy for varices if not on a beta-blocker; ultrasound ± AFP every 6 months for liver cancer.</li>
<li><b>Vaccinate:</b> hepatitis A and B (if non-immune), influenza, pneumococcal.</li>
<li><b>Avoid:</b> NSAIDs (kidney failure, bleeding), benzodiazepines and opioids where possible, aminoglycosides, herbal remedies. Paracetamol up to 2 g/day is the safest analgesic.</li></ol>`)}

<h3>B. Ascites</h3>
<ol>
<li><b>Diagnostic tap</b> first (cell count, albumin, protein, culture).</li>
<li><b>Grade 2 (moderate):</b> salt restriction (no added salt, about 5 g salt or 2 g sodium/day) + ${dr("spironolactone_asc", "spironolactone")} 100 mg daily, adding ${dr("furosemide")} 40 mg for recurrent ascites. Increase every 3–7 days to a maximum of 400 mg + 160 mg. Aim for weight loss of up to 0.5 kg/day (1 kg/day if leg oedema).</li>
<li><b>Grade 3 (tense):</b> <b>large-volume paracentesis</b> (can remove all fluid in one session), followed by ${dr("albumin")} <b>6–8 g per litre removed when more than 5 L</b>; then start diuretics.</li>
<li><b>Fluid restriction</b> (1–1.5 L/day) only if sodium falls below 125 mmol/L.</li>
<li><b>Refractory ascites</b> (not responding to maximum diuretics, or diuretics cause AKI or hyponatraemia): repeated large-volume paracentesis with albumin every 2–3 weeks; reduce or stop beta-blocker if SBP is under 90; TIPS and transplant assessment are specialist options.</li></ol>
<p class="qn">AASLD 2021, EASL 2018 and APASL 2023 agree on these steps.${r(3, 4, 21)}</p>

<h3>C. Acute variceal bleeding</h3>
${box("red", "Within the first hour", `<ol>
<li>Two large-bore cannulas; airway protection (intubate if encephalopathic or massive haematemesis).</li>
<li><b>Restrictive transfusion:</b> transfuse red cells to Hb <b>7–8 g/dL</b> (over-transfusion raises portal pressure and re-bleeding). Use crystalloid cautiously; avoid aiming for a high BP.</li>
<li><b>Vasoactive drug immediately</b>, before endoscopy: ${dr("terlipressin")} 2 mg IV 4-hourly, or ${dr("octreotide")} 50 µg bolus then 50 µg/h, continued for 2–5 days.</li>
<li><b>Antibiotic:</b> ${dr("ceftriaxone")} <b>1 g IV daily for up to 7 days</b> (reduces infection, re-bleeding and death).</li>
<li>${dr("ppi_iv", "IV omeprazole")} 80 mg until endoscopy excludes peptic ulcer.</li>
<li>${dr("lactulose")} to prevent encephalopathy.</li>
<li><b>Endoscopy within 12 hours</b> once resuscitated: band ligation for oesophageal varices; cyanoacrylate for gastric varices.</li>
<li>Do not give FFP to correct INR; platelets only if very low with active bleeding (STG: keep over 50,000).</li></ol>`)}
<p>If bleeding cannot be controlled: balloon tamponade (Sengstaken–Blakemore) as a bridge for up to 24 hours, or an oesophageal stent, then rescue TIPS where available. In Child-Pugh C (10–13) or Child B over 7 with active bleeding at endoscopy, <b>pre-emptive TIPS</b> within 72 hours improves survival (Baveno VII), if it can be arranged.${r(1, 5, 6)}</p>
<p><b>Secondary prophylaxis</b> starts once bleeding stops: ${dr("carvedilol")} or ${dr("propranolol")} <b>plus</b> repeat band ligation every 2–4 weeks until varices are eradicated.</p>

<h3>D. Spontaneous bacterial peritonitis (SBP)</h3>
<ul>
<li>Diagnosis: <b>ascitic neutrophils ≥250/mm³</b>, with or without a positive culture.</li>
<li>Treatment: ${dr("ceftriaxone")} 1–2 g IV daily (or cefotaxime 2 g 8-hourly) for 5–7 days. Use a broader antibiotic for hospital-acquired infection or recent antibiotics (local resistance pattern).</li>
<li>${dr("albumin")} <b>1.5 g/kg within 6 hours, then 1 g/kg on day 3</b>: this prevents kidney failure and death.${r(14)}</li>
<li>Stop beta-blockers if hypotensive; stop diuretics if AKI.</li>
<li>Afterwards: lifelong ${dr("norfloxacin")} 400 mg daily (or ciprofloxacin 500 mg or co-trimoxazole 960 mg daily).</li></ul>

<h3>E. Hepatic encephalopathy</h3>
<ol>
<li><b>Find and treat the trigger</b> (in 90%): GI bleeding, infection (tap the ascites), constipation, dehydration, low potassium or sodium, sedatives, alcohol withdrawal, AKI, hypoglycaemia.</li>
<li>${dr("lactulose")} 25–30 mL every 1–2 h until stool is passed, then titrated to <b>2–3 soft stools/day</b>; enema if unable to swallow.</li>
<li>Protect the airway in grade 3–4; nurse semi-recumbent; check glucose.</li>
<li>Add ${dr("rifaximin")} after a recurrence where available; otherwise a short course of ${dr("metronidazole")} (STG: 500 mg IV 8-hourly).${r(12, 17)}</li>
<li>Avoid sedatives; if essential for agitation, use a small dose of a short-acting drug.</li></ol>

<h3>F. Acute kidney injury and hepatorenal syndrome</h3>
<ol>
<li>Stop diuretics, NSAIDs, beta-blockers (if hypotensive) and nephrotoxins; treat infection; replace volume losses.</li>
<li>${dr("albumin")} <b>1 g/kg/day for 2 days</b> (max 100 g/day).</li>
<li>No response, no shock, no nephrotoxins, normal kidney ultrasound and urine: <b>HRS-AKI</b>. Give ${dr("terlipressin")} + albumin 20–40 g/day under specialist care (watch for fluid overload and ischaemia).${r(4)}</li></ol>

<h3>G. Alcohol-related hepatitis</h3>
<p>Recent onset of jaundice (bilirubin over 3 mg/dL) in someone drinking heavily up to 8 weeks before, with AST over 50 U/L, AST:ALT over 1.5 and both under 400 U/L. Fever, tender hepatomegaly and leucocytosis are common, so <b>look hard for infection</b>.</p>
<ul>
<li>Severity: <b>Maddrey ≥32 or MELD over 20</b> = severe (see the calculator).</li>
<li>Abstinence, nutrition (35–40 kcal/kg/day, often by nasogastric tube), thiamine, treat infection and withdrawal.</li>
<li>Severe and no contraindication (uncontrolled infection, GI bleed, AKI, uncontrolled diabetes): ${dr("prednisolone")} <b>40 mg daily for 28 days</b>. Stop at day 7 if the <b>Lille score is 0.45 or more</b> (no response). In STOPAH, steroids reduced 28-day mortality only slightly and did not improve 90-day or 1-year survival.${r(15, 7, 8)}</li>
<li>Pentoxifylline is no longer recommended.</li></ul>

<h3>H. Alcohol withdrawal and staying sober</h3>
<ul>
<li><b>Withdrawal</b> starts 6–24 h after the last drink; seizures at 12–48 h; <b>delirium tremens at 48–72 h</b>.</li>
<li>${dr("diazepam")} by the STG taper (15 mg TDS → 10 → 5 → 5 mg at night, 2 days each), or symptom-triggered (CIWA-Ar). In decompensated cirrhosis use small symptom-triggered doses (lorazepam where available).</li>
<li>${dr("thiamine")} before any glucose; correct potassium, magnesium and glucose.</li>
<li><b>Relapse prevention:</b> brief intervention, family involvement, psychiatry and community support (AA). Baclofen (NEML) is the relapse-prevention drug studied in cirrhosis. Naltrexone and disulfiram are avoided in advanced liver disease.${r(1, 7)}</li></ul>

<h3>I. MASLD (fatty liver)</h3>
<ul>
<li>Use <b>FIB-4</b> to triage: under 1.3 means low risk (manage in primary care); 1.3–2.67 needs elastography or referral; over 2.67 is high risk.${r(9, 10)}</li>
<li>Lose 7–10% of body weight; exercise; avoid alcohol; treat diabetes (GLP-1 receptor agonists and SGLT2 inhibitors help), hypertension and lipids (statins are safe and beneficial).</li>
<li>Resmetirom and semaglutide are now approved abroad for MASH with fibrosis; they are specialist treatments and not available on NEML.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap a medicine for its full card. Doses were checked against EASL/AASLD/Baveno VII and the Bhutan NEMF.</p>
${tbl(["Drug", "Adult dose", "Key cautions", "Bhutan (NEML 2025)"], [
[dr("spironolactone_asc", "Spironolactone"), "100 mg → max 400 mg daily", "Stop for K⁺ over 5.5–6, AKI, Na under 125", "25 mg tablet"],
[dr("furosemide", "Furosemide"), "40 mg → max 160 mg daily (with spironolactone)", "Hypokalaemia, AKI, encephalopathy", "Tablet and injection"],
[dr("carvedilol", "Carvedilol"), "6.25 mg daily → 6.25 mg BD", "SBP under 90, AKI, Na under 130", "3.125 and 12.5 mg (NRH/RRH)"],
[dr("propranolol", "Propranolol"), "20–40 mg BD to HR 55–60", "As above; asthma", "40 mg (to DH)"],
[dr("lactulose", "Lactulose"), "15–30 mL BD–TDS to 2–3 soft stools", "Over-purging, dehydration", "Solution (to DH)"],
[dr("rifaximin", "Rifaximin"), "550 mg BD", "Not on NEML", "Not listed"],
[dr("metronidazole", "Metronidazole"), "500 mg IV 8-hourly, short course (STG)", "Neurotoxic if prolonged; reduce dose", "IV and tablet"],
[dr("terlipressin", "Terlipressin"), "2 mg IV 4-hourly → 1 mg 4-hourly", "Ischaemia, hypoxia, overload", "1 mg vial (NRH/RRH)"],
[dr("octreotide", "Octreotide"), "50 µg bolus, 50 µg/h for 2–5 days", "Glucose changes", "50 µg/mL (to DH)"],
[dr("ceftriaxone", "Ceftriaxone"), "1 g IV daily (bleed); 1–2 g daily (SBP)", "Biliary sludge", "Listed (to DH)"],
[dr("albumin", "Albumin 20%"), "6–8 g/L tapped; SBP 1.5 then 1 g/kg; HRS 1 g/kg × 2 days", "Fluid overload", "100 mL 20% (NRH/RRH)"],
[dr("norfloxacin", "Norfloxacin"), "400 mg daily (SBP prophylaxis)", "Tendons, QT", "400 mg (NRH/RRH)"],
[dr("ppi_iv", "Omeprazole IV"), "80 mg IV then 40 mg BD", "Stop if no ulcer; avoid long-term", "40 mg vial (to DH)"],
[dr("vitamin_k", "Vitamin K"), "10 mg IV daily × 3", "Slow IV only", "10 mg/mL (to PHC)"],
[dr("thiamine", "Thiamine"), "100 mg IV, then oral (STG); 500 mg IV TDS if Wernicke's", "Rare anaphylaxis", "Injection and 75 mg tablet"],
[dr("tenofovir_hbv", "Tenofovir"), "300 mg daily (adjust for CrCl)", "Kidney, bone", "300 mg (NRH/RRH)"],
[dr("prednisolone", "Prednisolone"), "40 mg daily × 28 days (severe alcohol-related hepatitis)", "Infection, GI bleed", "Listed"],
[dr("diazepam", "Diazepam"), "STG taper from 15 mg TDS", "Accumulates in liver failure", "5 mg tablet, injection"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Older adults</h3>
<ul><li>More sarcopenia, falls and drug toxicity. Start diuretics and beta-blockers low; avoid sedatives; review the whole drug list.</li></ul>
<h3>Women and pregnancy</h3>
<ul><li>Women develop alcohol-related liver disease at lower intakes than men.</li><li>Pregnancy with cirrhosis is high risk (variceal bleeding is commonest in the second trimester and at delivery). Screen for varices before or early in pregnancy; propranolol and banding are usable; avoid spironolactone. Hepatitis B: tenofovir in the third trimester when viral load is high, and the birth-dose vaccine plus immunoglobulin for the baby.</li></ul>
<h3>Kidney disease and diabetes</h3>
<ul><li>Creatinine overestimates kidney function in wasted cirrhotic patients, so a 'normal' creatinine may hide poor GFR. Avoid metformin in decompensated disease; insulin is safest. HbA1c is unreliable in anaemia.</li></ul>
<h3>Tuberculosis co-treatment</h3>
<ul><li>Cirrhosis raises the risk of anti-TB drug hepatitis. Regimens with fewer hepatotoxic drugs are chosen by Child-Pugh class (ICMR STW on anti-TB drug hepatitis); see the ${'<a href="#/d/tb-adult">TB chapter</a>'}.</li></ul>
<h3>Surgery</h3>
<ul><li>Child-Pugh C and MELD over 15 carry very high surgical mortality. Avoid elective surgery; involve anaesthesia and a physician early.</li></ul>
<h3>Children</h3>
<p>Childhood cirrhosis has different causes (biliary atresia, Wilson's disease, autoimmune hepatitis, hepatitis B) and different doses; it is specialist-led and not covered here.</p>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Tense ascites with breathlessness and a creatinine of 1.8</b>", "Tap for SBP; large-volume paracentesis with albumin is safe and relieves breathing; stop diuretics and NSAIDs; albumin challenge for AKI; check for HRS"],
["<b>Bleeding at a district hospital, no endoscopy</b>", "Two cannulas, restrictive transfusion, octreotide, ceftriaxone, IV omeprazole, lactulose; protect the airway; discuss and transfer to NRH/RRH for banding once stable; balloon tamponade only by trained staff for uncontrolled bleeding"],
["<b>Confused patient with cirrhosis, no obvious trigger</b>", "Check glucose, sodium, potassium; tap the ascites; look for occult bleeding (rectal examination for melaena); CT head if fall or focal signs (subdural haematoma is common in drinkers); review sedatives"],
["<b>Hyponatraemia (Na 122)</b>", "Stop diuretics; fluid restriction 1–1.5 L/day; albumin may help; correct slowly (no more than 8 mmol/L in 24 h; osmotic demyelination risk is high in drinkers and malnourished patients)"],
["<b>Patient keeps drinking</b>", "Non-judgemental brief intervention at every visit; involve family; psychiatry/de-addiction services; baclofen; do not withhold care. Abstinence even after decompensation improves survival"],
["<b>Hepatic hydrothorax</b> (right pleural effusion without heart or lung disease)", "Treat as ascites (salt restriction, diuretics); therapeutic thoracentesis for breathlessness; never insert a chest drain (protein loss, infection, kidney failure)"],
["<b>HBsAg-positive cirrhosis, ALT normal</b>", "Treat anyway: tenofovir for all with cirrhosis and detectable HBV DNA (WHO 2024)" + r(16)],
["<b>Umbilical hernia in tense ascites</b>", "Control ascites first; urgent surgery if strangulated or leaking (rupture carries high mortality)"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "How common", "Recognise", "Key management"], [
["<b>Ascites</b>", "The commonest first decompensation (5–10% of compensated patients a year)", "Abdominal swelling, shifting dullness", "Salt restriction, spironolactone ± furosemide, paracentesis + albumin"],
["<b>Variceal bleeding</b>", "Varices in about half; bleeding 5–15% a year; 6-week mortality 15–20%", "Haematemesis, melaena, shock", "Vasoactive drug, ceftriaxone, banding within 12 h"],
["<b>Hepatic encephalopathy</b>", "30–40% during the course", "Sleep reversal, flap, confusion", "Treat trigger; lactulose; rifaximin"],
["<b>SBP and other infections</b>", "10–30% of admitted patients with ascites", "Often silent: fever, pain, confusion, AKI", "Tap, ceftriaxone, albumin, prophylaxis"],
["<b>Hepatorenal syndrome</b>", "About 1 in 5 with ascites over 5 years", "Rising creatinine despite albumin", "Terlipressin + albumin; transplant"],
["<b>Hyponatraemia</b>", "Common in ascites", "Na under 130", "Stop diuretics, fluid restriction"],
["<b>Hepatocellular carcinoma</b>", "1–4% a year (higher in HBV)", "Surveillance ultrasound, AFP", "Early detection allows cure (resection, ablation)"],
["<b>Portal vein thrombosis</b>", "10–25% of advanced cirrhosis", "Doppler ultrasound, worsening ascites or bleed", "Specialist; anticoagulation in selected cases"],
["<b>Sarcopenia and frailty</b>", "Most decompensated patients", "Wasting, weakness, falls", "Protein 1.2–1.5 g/kg, late snack, exercise"]])}
<h3>Prognosis</h3>
<ul>
<li>Once decompensated, median survival is about 2 years without transplant or removal of the cause.</li>
<li><b>Stopping alcohol changes everything:</b> in alcohol-related cirrhosis, abstinence improves survival at every stage, and many decompensated patients recompensate.</li>
<li>Child-Pugh C, MELD-Na over 20, hyponatraemia, refractory ascites, HRS and acute-on-chronic liver failure carry the worst outlook.</li></ul>
` },

{ id: "followup", title: "Follow-up, self-care and prevention", html: `
${tbl(["When", "What"], [
["1–2 weeks after a diuretic change or discharge", "Weight, BP, creatinine, sodium, potassium; adjust diuretics"],
["Every 3–6 months", "LFT, INR, creatinine, electrolytes, FBC; Child-Pugh and MELD-Na; alcohol use (AUDIT); nutrition and weight"],
["Every 6 months", "<b>Ultrasound ± AFP</b> for liver cancer"],
["Varices", "Endoscopy every 2–3 years if none (1–2 years if liver injury continues), unless on a beta-blocker for CSPH; banding every 2–4 weeks to eradication after a bleed, then at 3–6 months and yearly"],
["Once", "Hepatitis A and B, pneumococcal vaccines; influenza yearly"],
["MASLD without cirrhosis", "FIB-4 every 1–3 years; weight, diabetes, BP and lipid control"]])}
${box("green", "What to tell the patient and family", `<ul>
<li>'Your liver is scarred. It can still do a lot if you stop drinking completely, starting today. Even small amounts keep damaging it.'</li>
<li>'Eat well: rice with dal, eggs, meat or fish, milk and vegetables every day, and a snack before bed. Do not cut down on protein. Use very little salt.'</li>
<li>'Never take painkillers like ibuprofen or diclofenac. Paracetamol in normal doses is safer. Avoid herbal medicines and sleeping tablets.'</li>
<li>'Weigh yourself every morning if you have fluid in the belly. Tell us if your weight changes by more than 2 kg in a week.'</li>
<li>'Take lactulose so you open your bowels two or three times every day. If you become constipated or sleepy, take more and come to the clinic.'</li>
<li>'Family members should get tested and vaccinated for hepatitis B.'</li></ul>`)}
${box("red", "Come to hospital at once if", `<ul><li>Vomiting blood, or black, tarry stools.</li><li>Confusion, unusual sleepiness, or the family notices a change in behaviour.</li><li>Fever, belly pain, or the belly swelling quickly.</li><li>Passing very little urine.</li><li>Shaking, seeing things, or a fit after stopping alcohol.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>At the bedside</h3>
<div class="pair">
${fig({ title: "Massive ascites", src: "images/cirrhosis-ascites.jpg", mod: "Clinical photograph", ctx: "Decompensated cirrhosis with portal hypertension", loc: "Abdomen", find: "Grossly distended abdomen with tense ascites and stretched skin", signs: "Grade 3 (tense) ascites", interp: "Needs a diagnostic tap to exclude SBP, then large-volume paracentesis with albumin, followed by salt restriction and diuretics", ddx: "Malignant or tuberculous ascites, heart failure, nephrotic syndrome (use the SAAG)", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Hepaticfailure.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Palmar erythema", src: "images/cirrhosis-palmar-erythema.jpg", mod: "Clinical photograph", ctx: "Stigma of chronic liver disease", loc: "Palms, especially the thenar and hypothenar eminences", find: "Blotchy redness of the palms, sparing the centre", signs: "Palmar erythema", interp: "Thought to reflect raised oestrogen levels in chronic liver disease. A supportive clue, not diagnostic on its own", ddx: "Pregnancy, thyrotoxicosis, rheumatoid arthritis, polycythaemia", by: "Jmarchn", page: "https://commons.wikimedia.org/wiki/File:Palmar_erythema.jpg", lic: "CC BY-SA 3.0" })}
</div>
${fig({ title: "Jaundice of the sclera", src: "images/cirrhosis-jaundice-eye.jpg", mod: "Clinical photograph", ctx: "Jaundice (here from acute hepatitis A)", loc: "Conjunctiva and sclera", find: "Yellow discolouration of the sclera", signs: "Icterus (usually visible when bilirubin exceeds about 2.5–3 mg/dL)", interp: "In cirrhosis, new or deepening jaundice signals decompensation or alcohol-related hepatitis. Look for it in natural light", ddx: "Haemolysis, obstructive jaundice, Gilbert's syndrome, acute viral hepatitis", by: "US Centers for Disease Control and Prevention (public domain)", page: "https://commons.wikimedia.org/wiki/File:Jaundice_eye.jpg", lic: "Public domain" })}
<h3>Imaging and endoscopy</h3>
<div class="pair">
${fig({ title: "Ultrasound: cirrhotic liver with ascites", src: "images/cirrhosis-us-ascites.png", mod: "Abdominal ultrasound", ctx: "Liver cirrhosis", loc: "Right upper quadrant", find: "Small liver with an irregular, nodular surface, surrounded by anechoic (black) free fluid", signs: "Nodular liver contour; ascites", interp: "The liver outline is easiest to judge when ascites surrounds it. Also look for splenomegaly, portal vein flow and any mass", ddx: "Fatty liver (bright, smooth), hepatitis, metastases", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:CirrhosisWithAscites.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "Oesophageal varices with red wale signs", src: "images/cirrhosis-varices.jpg", mod: "Upper GI endoscopy", ctx: "Portal hypertension", loc: "Lower oesophagus", find: "Tortuous, bluish varices with red streaks (red wale marks) on their surface", signs: "Large varices with red signs", interp: "Red signs mean a high risk of bleeding. Band ligation or a non-selective beta-blocker is indicated", ddx: "Normal oesophageal folds, oesophagitis", by: "Samir (English Wikipedia)", page: "https://commons.wikimedia.org/wiki/File:Esophageal_varices_-_wale.jpg", lic: "Public domain" })}
</div>
<h3>Link-only references (copyrighted)</h3>
<ul><li>Caput medusae, spider naevi and Dupuytren's contracture: <a href="https://radiopaedia.org/articles/liver-cirrhosis" target="_blank" rel="noopener">Radiopaedia: liver cirrhosis</a></li><li>Paracentesis technique video: <a href="https://www.nejm.org/doi/full/10.1056/NEJMvcm062234" target="_blank" rel="noopener">NEJM Videos in Clinical Medicine</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · New ascites", [
F.s("Ascites in a patient with liver disease"), F.a,
F.s("Diagnostic tap: neutrophils, albumin (SAAG), protein, culture"), F.a,
F.d("Neutrophils ≥250/mm³?"), F.a,
F.b([["Yes", F.e("SBP: ceftriaxone + albumin 1.5 g/kg, stop diuretics if AKI")], ["No", F.d("Tense (grade 3)?"), F.b([["Yes", F.s("Large-volume paracentesis + albumin 6–8 g/L"), F.ok("Then salt restriction + spironolactone ± furosemide")], ["No", F.ok("Salt restriction + spironolactone 100 mg ± furosemide 40 mg")]])]])])}
${F.chart("2 · Suspected variceal bleed", [
F.s("Haematemesis or melaena in cirrhosis"), F.a,
F.s("Airway, 2 large cannulas, transfuse to Hb 7–8"), F.a,
F.s("Terlipressin or octreotide + ceftriaxone 1 g + IV omeprazole + lactulose"), F.a,
F.s("Endoscopy within 12 h: band ligation"), F.a,
F.d("Bleeding controlled?"), F.a,
F.b([["Yes", F.ok("Continue vasoactive 2–5 days; start carvedilol/propranolol + repeat banding")], ["No", F.e("Balloon tamponade or stent as bridge; rescue TIPS / refer")]])])}
${F.chart("3 · Hepatic encephalopathy", [
F.s("Confusion, drowsiness, asterixis"), F.a,
F.s("Glucose, electrolytes, tap ascites, look for bleeding, review drugs"), F.a,
F.s("Treat the trigger + lactulose to 2–3 soft stools/day"), F.a,
F.d("Grade 3–4?"), F.a,
F.b([["Yes", F.e("Protect airway; lactulose by NG tube or enema; HDU/ICU")], ["No", F.ok("Ward care; continue lactulose; rifaximin if recurrent")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Tap every patient with ascites who is admitted.</b> SBP is often silent and kills when missed.</li>
<li><b>Low platelets are the first sign of portal hypertension.</b> A count under 150 in a drinker should prompt a search for cirrhosis.</li>
<li><b>Encephalopathy has a trigger</b> in almost every case. Lactulose alone is not enough.</li>
<li><b>Albumin is a drug</b> in cirrhosis: after large taps, in SBP and in AKI.</li>
<li><b>Feed your patients.</b> Protein restriction is harmful; the late-evening snack is cheap and effective.</li>
<li><b>Ask about alcohol at every visit</b>, without judgement. Abstinence is the treatment that saves the most lives.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Spironolactone 50–100 mg and wondering why ascites persists", "Under-dosing", "Titrate to 400 mg (with furosemide 160 mg) as needed"],
["Over-transfusing a variceal bleed", "Raises portal pressure; re-bleeding", "Hb target 7–8 g/dL"],
["FFP to 'correct' INR before a tap or banding", "No benefit; volume overload", "INR does not predict bleeding in cirrhosis"],
["Giving NSAIDs for pain", "AKI, GI bleeding, diuretic resistance", "Paracetamol up to 2 g/day"],
["Restricting protein in encephalopathy", "Sarcopenia, worse outcome", "1.2–1.5 g/kg/day"],
["Sedating a confused cirrhotic patient", "Deepens coma", "Find the trigger; avoid benzodiazepines unless in withdrawal"],
["Glucose before thiamine in a drinker", "Wernicke's encephalopathy", "Thiamine first"],
["Correcting sodium too fast", "Osmotic demyelination", "No more than 8 mmol/L per 24 h"],
["Long-term metronidazole for encephalopathy", "Peripheral neuropathy, cerebellar toxicity", "Short courses only; rifaximin where available"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "List the stigmata of chronic liver disease.", "Jaundice, spider naevi, palmar erythema, gynaecomastia, testicular atrophy, parotid enlargement, Dupuytren's contracture, clubbing, leukonychia, asterixis, ascites, splenomegaly and caput medusae.")}
${qa("Intern/MO", "How do you diagnose spontaneous bacterial peritonitis?", "Ascitic fluid neutrophil count of 250/mm³ or more, in the absence of a surgical source of peritonitis. Culture is often negative; inoculate blood-culture bottles at the bedside.")}
${qa("Intern/MO", "What does a SAAG of 1.1 g/dL or more mean?", "Portal hypertension is the cause of the ascites: cirrhosis, heart failure or Budd-Chiari syndrome. Ascitic protein under 2.5 g/dL favours cirrhosis; 2.5 or more favours heart failure.")}
${qa("Intern/MO", "Name five triggers of hepatic encephalopathy.", "GI bleeding, infection (including SBP), constipation, dehydration or over-diuresis, hypokalaemia or hyponatraemia, sedatives, alcohol, AKI, hypoglycaemia.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "What is the diuretic regimen for moderate ascites?", "Salt restriction (about 2 g sodium/day) plus spironolactone 100 mg daily, adding furosemide 40 mg for recurrent ascites, titrated every 3–7 days to a maximum of 400 mg and 160 mg, aiming for weight loss of up to 0.5 kg/day.")}
${qa("Intern/MO", "How much albumin after draining 8 litres of ascites?", "6–8 g per litre removed: 48–64 g, about 2½–3 bottles of 20% albumin (100 mL = 20 g).")}
${qa("Intern/MO", "List the first-hour management of a variceal bleed.", "Airway, two large-bore cannulas, restrictive transfusion to Hb 7–8, vasoactive drug (terlipressin or octreotide), ceftriaxone 1 g IV, IV PPI until endoscopy, lactulose, and endoscopy with banding within 12 hours.")}
${qa("Specialist", "Why is carvedilol preferred over propranolol in portal hypertension?", "Its added alpha-1 blockade lowers intrahepatic resistance, so it reduces portal pressure more; it prevented decompensation in compensated cirrhosis with CSPH (PREDESCI) and is given once or twice daily without heart-rate titration (target 12.5 mg/day).")}
${qa("Specialist", "When are steroids used in alcohol-related hepatitis, and how do you judge response?", "Maddrey discriminant function of 32 or more (or MELD over 20) without active infection, GI bleeding or AKI: prednisolone 40 mg daily for 28 days. A Lille score of 0.45 or more at day 7 indicates non-response, and steroids should be stopped.")}
</div>
<div class="qgroup"><h3>Viva</h3>
${qa("Viva", "Explain why patients with cirrhosis retain sodium.", "Splanchnic vasodilation (nitric oxide) reduces effective arterial volume; renin–angiotensin–aldosterone, sympathetic and ADH systems activate; the kidney retains sodium and water, producing ascites and dilutional hyponatraemia, and in the extreme renal vasoconstriction causes hepatorenal syndrome.")}
${qa("Viva", "Why is alcohol-related liver disease such a problem in Bhutan, and what can a medical officer do?", "Alcohol is cheap, home-brewed and culturally embedded, and ALD has been the leading cause of death for years. Screen every patient with AUDIT or CAGE-AID, deliver brief interventions, find fibrosis early (FIB-4, platelets, ultrasound), give thiamine, involve families, and keep abstinence central to every visit.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024: §4.4 Cirrhosis; §4.5 Acute viral hepatitis; §4.7 Hepatic encephalopathy; §4.1.5 Gastrointestinal bleeding; §10.2.2 Alcohol use disorder.</li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and National Essential Medicines List 2025 (spironolactone, carvedilol, propranolol, lactulose, terlipressin, octreotide, human albumin, phytomenadione, thiamine, norfloxacin, omeprazole, tenofovir, diazepam monographs and levels).</li>
<li id="ref-3">European Association for the Study of the Liver. EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis. J Hepatol 2018;69:406–460. <a href="https://doi.org/10.1016/j.jhep.2018.03.024" target="_blank" rel="noopener">doi:10.1016/j.jhep.2018.03.024</a></li>
<li id="ref-4">Biggins SW, Angeli P, Garcia-Tsao G, et al. Diagnosis, evaluation, and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome: 2021 Practice Guidance by the AASLD. Hepatology 2021;74:1014–1048. <a href="https://doi.org/10.1002/hep.31884" target="_blank" rel="noopener">doi:10.1002/hep.31884</a></li>
<li id="ref-5">de Franchis R, Bosch J, Garcia-Tsao G, Reiberger T, Ripoll C; Baveno VII Faculty. Baveno VII: renewing consensus in portal hypertension. J Hepatol 2022;76:959–974. <a href="https://doi.org/10.1016/j.jhep.2021.12.022" target="_blank" rel="noopener">doi:10.1016/j.jhep.2021.12.022</a></li>
<li id="ref-6">Kaplan DE, Ripoll C, Thiele M, et al. AASLD Practice Guidance on risk stratification and management of portal hypertension and varices in cirrhosis. Hepatology 2024;79:1180–1211. <a href="https://doi.org/10.1097/HEP.0000000000000647" target="_blank" rel="noopener">doi:10.1097/HEP.0000000000000647</a></li>
<li id="ref-7">European Association for the Study of the Liver. EASL Clinical Practice Guidelines: management of alcohol-related liver disease. J Hepatol 2018;69:154–181. <a href="https://doi.org/10.1016/j.jhep.2018.03.018" target="_blank" rel="noopener">doi:10.1016/j.jhep.2018.03.018</a></li>
<li id="ref-8">Crabb DW, Im GY, Szabo G, Mellinger JL, Lucey MR. Diagnosis and treatment of alcohol-associated liver diseases: 2019 Practice Guidance from the AASLD. Hepatology 2020;71:306–333. <a href="https://doi.org/10.1002/hep.30866" target="_blank" rel="noopener">doi:10.1002/hep.30866</a></li>
<li id="ref-9">Rinella ME, Neuschwander-Tetri BA, Siddiqui MS, et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology 2023;77:1797–1835. <a href="https://doi.org/10.1097/HEP.0000000000000323" target="_blank" rel="noopener">doi:10.1097/HEP.0000000000000323</a></li>
<li id="ref-10">EASL–EASD–EASO Clinical Practice Guidelines on the management of metabolic dysfunction-associated steatotic liver disease (MASLD). J Hepatol 2024;81:492–542. <a href="https://doi.org/10.1016/j.jhep.2024.04.031" target="_blank" rel="noopener">doi:10.1016/j.jhep.2024.04.031</a></li>
<li id="ref-11">Rinella ME, Lazarus JV, Ratziu V, et al. A multisociety Delphi consensus statement on new fatty liver disease nomenclature. J Hepatol 2023;79:1542–1556. <a href="https://doi.org/10.1016/j.jhep.2023.06.003" target="_blank" rel="noopener">doi:10.1016/j.jhep.2023.06.003</a></li>
<li id="ref-12">European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of hepatic encephalopathy. J Hepatol 2022;77:807–824. <a href="https://doi.org/10.1016/j.jhep.2022.06.001" target="_blank" rel="noopener">doi:10.1016/j.jhep.2022.06.001</a></li>
<li id="ref-13">Villanueva C, Albillos A, Genescà J, et al. β blockers to prevent decompensation of cirrhosis in patients with clinically significant portal hypertension (PREDESCI). Lancet 2019;393:1597–1608. <a href="https://doi.org/10.1016/S0140-6736(18)31875-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(18)31875-0</a></li>
<li id="ref-14">Sort P, Navasa M, Arroyo V, et al. Effect of intravenous albumin on renal impairment and mortality in patients with cirrhosis and spontaneous bacterial peritonitis. N Engl J Med 1999;341:403–409. <a href="https://doi.org/10.1056/NEJM199908053410603" target="_blank" rel="noopener">doi:10.1056/NEJM199908053410603</a></li>
<li id="ref-15">Thursz MR, Richardson P, Allison M, et al. Prednisolone or pentoxifylline for alcoholic hepatitis (STOPAH). N Engl J Med 2015;372:1619–1628. <a href="https://doi.org/10.1056/NEJMoa1412278" target="_blank" rel="noopener">doi:10.1056/NEJMoa1412278</a></li>
<li id="ref-16">World Health Organization. Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection. Geneva, 2024. <a href="https://www.who.int/publications/i/item/9789240090903" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-17">Bass NM, Mullen KD, Sanyal A, et al. Rifaximin treatment in hepatic encephalopathy. N Engl J Med 2010;362:1071–1081. <a href="https://doi.org/10.1056/NEJMoa0907893" target="_blank" rel="noopener">doi:10.1056/NEJMoa0907893</a></li>
<li id="ref-18">Wangchuk P. Burden of alcoholic liver disease: Bhutan scenario. Euroasian J Hepatogastroenterol 2018;8:81–82. <a href="https://doi.org/10.5005/jp-journals-10018-1267" target="_blank" rel="noopener">doi:10.5005/jp-journals-10018-1267</a></li>
<li id="ref-19">The Bhutanese. TB and alcohol-related liver diseases remain top health concerns in Annual Health Bulletin 2024 (Ministry of Health). <a href="https://thebhutanese.bt/tb-and-alcohol-related-liver-diseases-remain-top-health-concerns-in-annual-health-bulletin-2024/" target="_blank" rel="noopener">thebhutanese.bt</a></li>
<li id="ref-20">Indian Council of Medical Research. Standard Treatment Workflows: Acute gastrointestinal bleed in adults (Parts A and B); Liver failure. 2022. <a href="https://icmr.gov.in/icmrobject/uploads/STWs/1726567562_gastroenterology_all.pdf" target="_blank" rel="noopener">icmr.gov.in (PDF)</a></li>
<li id="ref-21">Asia–Pacific Association for the Study of the Liver. APASL guidance on the management of ascites in cirrhosis. Hepatol Int 2023;17:792–826. <a href="https://doi.org/10.1007/s12072-023-10536-7" target="_blank" rel="noopener">doi:10.1007/s12072-023-10536-7</a></li>
<li id="ref-22">Harrison's Principles of Internal Medicine, 21st ed.: cirrhosis and portal hypertension chapters, paraphrased for background.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG §4.4, §4.7, §4.1.5, §10.2.2", "<span class='pass'>Verified</span>", "Read directly from the extracted STG text"],
["STG spironolactone '70–100 mg'", "<span class='warn'>Flagged</span>", "Below effective range; guide follows NEMF/AASLD 100–400 mg"],
["Ascites, SBP, HRS management", "<span class='pass'>Verified</span>", "AASLD 2021; EASL 2018; APASL 2023"],
["Variceal bleeding and beta-blockers", "<span class='pass'>Verified</span>", "Baveno VII; AASLD 2024; STG §4.1.5"],
["Encephalopathy", "<span class='pass'>Verified</span>", "EASL 2022; STG §4.7 (metronidazole choice flagged)"],
["Alcohol-related hepatitis (Maddrey, steroids, Lille)", "<span class='pass'>Checked</span>", "EASL 2018 ALD; AASLD 2019; STOPAH"],
["MASLD nomenclature and FIB-4 pathway", "<span class='pass'>Verified</span>", "Delphi 2023; AASLD 2023; EASL-EASD-EASO 2024"],
["Child-Pugh, MELD-Na, MELD 3.0, FIB-4, Maddrey calculators", "<span class='pass'>Checked</span>", "Formulas from the original publications; MELD-Na per UNOS 2016 bounds"],
["Drug doses and Bhutan availability", "<span class='pass'>Checked</span>", "NEMF 2022 / NEML 2025 plus EASL/AASLD/BNF"],
["Bhutan ALD mortality figures", "<span class='pass'>Checked</span>", "Annual Health Bulletin 2024 as reported; Wangchuk 2018"],
["Transplant and TIPS availability in Bhutan", "<span class='warn'>Not verified</span>", "Not available in-country as far as could be found; referral abroad pathway not confirmed"],
["Images", "<span class='pass'>Done</span>", "Five Commons files; licences checked via the Commons API"],
["Clinical sign-off", "<span class='warn'>Pending</span>", "Needs review by a physician or gastroenterologist"]], "qc")}
` }
]
});
