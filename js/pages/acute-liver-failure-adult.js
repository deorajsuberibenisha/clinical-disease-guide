/* Acute liver failure and acute-on-chronic liver failure — adults. NEW disease (batch N-7, 28 Nov 2026).
   Sources read directly: Merck Manual Professional — Acute liver failure (full review Aug 2025, updated May 2026, citing ACG 2023 ALF guideline
   (Shingina, Am J Gastroenterol 2023;118:1128) and EASL 2017: ALF = <26 weeks, no pre-existing liver disease, encephalopathy + coagulopathy
   (INR ≥1.5); causes — viral (HBV ± HDV commonest viral; HAV, HEV esp. pregnancy, HSV, CMV, EBV), paracetamol and other drugs (co-amoxiclav,
   isoniazid, NSAIDs, herbals), Amanita, Budd–Chiari, ischaemic, acute fatty liver of pregnancy, HELLP, Wilson, autoimmune, heatstroke, sepsis;
   AKI up to 70%; hypoglycaemia; infection; cerebral oedema with ammonia >150–200 µg/dL; bleeding rare despite INR; tests incl. viral serology,
   autoimmune markers, pregnancy test, ceruloplasmin if <40 with haemolysis; ICU at transplant-capable centre, transfer early; avoid sedatives;
   fluids, antibiotics if infection, noradrenaline; head up 30°, early intubation; lactulose/rifaximin not helpful in ALF; RRT for high ammonia;
   mannitol 0.5–1 g/kg; phenytoin for seizures; 10% dextrose; FFP only if bleeding/procedure; protein 60 g/day; NAC for paracetamol and
   recommended for other causes; antivirals for HBV reactivation; transplant survival 84–90% at 1 year; King's College criteria; worse prognosis
   with age <10 or >40, idiosyncratic DILI, Wilson; patients with known chronic liver disease who decompensate = acute-on-chronic liver failure);
   this app's poisoning page (NAC 150 → 50 → 100 mg/kg); NEML 2025 (acetylcysteine, mannitol 20%, phenytoin, dextrose, phytomenadione, lactulose).
   West Haven grades and ACLF details are standard — marked. Covers remaining-list item 'Acute and acute-on-chronic liver failure'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "acute-liver-failure-adult",
title: "Acute & Acute-on-Chronic Liver Failure",
subtitle: "Jaundice with confusion and INR ≥1.5 in someone without known liver disease is acute liver failure: give acetylcysteine, check glucose hourly, avoid sedatives and plasma, treat infection, and transfer early to an ICU that can reach a transplant centre",
age: "Adult (pregnancy focus)", specs: ["gi", "emerg", "medicine", "obg"],
keywords: ["acute liver failure", "fulminant hepatic failure", "acute-on-chronic liver failure", "ACLF", "hepatic encephalopathy", "INR 1.5", "paracetamol liver failure", "hepatitis E pregnancy", "hepatitis B liver failure", "King's College criteria", "cerebral oedema liver", "acetylcysteine liver failure", "Wilson disease", "acute fatty liver of pregnancy"],
related: ["hepatitis-adult", "dili-adult", "poisoning-adult", "cirrhosis-adult", "sbp-adult", "preeclampsia-preg", "aki-adult", "sepsis-adult", "autoimmune-hepatitis-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead"><b>Acute liver failure (ALF)</b>: new liver injury (&lt;26 weeks) with <b>encephalopathy + INR ≥1.5</b> and no pre-existing liver disease. In places with poor sanitation, viral hepatitis is the main cause; elsewhere, paracetamol and drugs ${r(1)}.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Jaundice + any confusion or drowsiness + INR ≥1.5 ${r(1)}.</p></div>
<div><h4>First hour</h4><p>Glucose (10% dextrose), ${dr("acetylcysteine")}, cultures and antibiotics if any infection sign, head up 30°, no sedatives, call the ICU/liver team ${r(1)}.</p></div>
<div><h4>Do not</h4><p>Give FFP just to "correct" INR (only for bleeding or procedures); give lactulose in ALF; sedate ${r(1)}.</p></div>
<div><h4>Transfer</h4><p>Early — deterioration is fast. Transplant is the definitive treatment for those who do not recover ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Hepatitis E (waterborne outbreaks) and hepatitis B are key causes; <b>hepatitis E in late pregnancy</b> can be fulminant ${r(1)} ${P("hepatitis-adult", "Viral hepatitis")}. Acetylcysteine, mannitol, phenytoin and 10% dextrose are on the NEML ${r(2)}. Liver transplantation requires referral abroad — discuss early ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "Definitions and causes", html: `
${tbl(["Term", "Meaning"], [
["Acute liver failure", "&lt;26 weeks, no prior liver disease, encephalopathy + INR ≥1.5 " + r(1)],
["Acute-on-chronic liver failure (ACLF)", "Acute decompensation of known chronic liver disease/cirrhosis with organ failures — different disease and management " + r(1) + " " + LB.exp("ACLF DETAIL STANDARD")]
])}
${tbl(["Causes of ALF", "Examples"], [
["Viral", "Hepatitis B (± D), A, E (pregnancy), HSV, CMV, EBV, dengue/haemorrhagic fevers " + r(1)],
["Drugs/toxins", "Paracetamol; co-amoxiclav, isoniazid, NSAIDs, herbal products; Amanita mushrooms " + r(1) + " " + P("dili-adult", "DILI")],
["Pregnancy", "Acute fatty liver of pregnancy, HELLP, hepatitis E " + r(1)],
["Vascular", "Budd–Chiari, ischaemic hepatitis " + r(1)],
["Other", "Wilson disease, autoimmune hepatitis, heatstroke, sepsis, malignant infiltration " + r(1)]
])}
${tbl(["Common ACLF triggers", "Examples"], [["Alcohol binge, infection (SBP), GI bleed, HBV flare, drugs", P("sbp-adult", "SBP") + " · " + P("ugib-adult", "Upper GI bleed") + " " + LB.exp("STANDARD")]])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("ALF", [F.s("Massive hepatocyte loss"), F.a, F.s("Ammonia ↑, glucose ↓, clotting factors ↓, immune paralysis"), F.a, F.e("Encephalopathy and cerebral oedema, AKI (up to 70%), shock, sepsis")])} <p>${r(1)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ACG 2023 (via Merck)", "EASL 2017 (via Merck)", "This guide"], [
["Antimicrobial prophylaxis", "Not routine", "In transplant-listed with SIRS, shock or grade 3–4", "Treat at first sign of infection " + r(1)],
["NAC in non-paracetamol ALF", "Recommended", "Recommended", "Give (adults) " + r(1)],
["Lactulose", "No benefit in ALF", "—", "Avoid in ALF (useful in cirrhosis) " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Jaundice, nausea, malaise; then confusion, agitation, drowsiness, fetor hepaticus ${r(1)}.</li>
<li>Tachycardia, low BP (like warm sepsis), fast breathing ${r(1)}.</li>
<li>Cerebral oedema: deepening coma, bradycardia with hypertension, pupil changes ${r(1)}.</li>
<li>Bleeding is uncommon despite high INR ${r(1)}.</li>
</ul>
${tbl(["Encephalopathy grade (West Haven)", "Features"], [
["1", "Mild confusion, sleep reversal " + LB.exp("STANDARD")],
["2", "Drowsy, disoriented, asterixis " + LB.exp("STANDARD")],
["3", "Very drowsy, rousable, incoherent " + LB.exp("STANDARD")],
["4", "Coma " + LB.exp("STANDARD")]
])}
<h3>The typical patient</h3>
<p>A 26-year-old woman at 32 weeks' pregnancy from Sarpang has 1 week of jaundice after a hepatitis outbreak in her village; today she is drowsy. INR 2.4, glucose 2.8 mmol/L. <b>Acute liver failure (likely hepatitis E)</b>: 10% dextrose, acetylcysteine, obstetric and ICU teams, urgent transfer, check for AFLP/HELLP ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Decompensated cirrhosis / ACLF", "Ascites, small liver, known disease " + P("cirrhosis-adult", "Cirrhosis")],
["Sepsis with cholestasis", "Source of infection " + P("sepsis-adult", "Sepsis")],
["Severe falciparum malaria, leptospirosis", "Fever, travel, kidney injury " + P("leptospirosis", "Leptospirosis")],
["Alcohol-related hepatitis", "Heavy drinking, AST:ALT &gt;2 " + P("alcohol-adult", "Alcohol")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>INR, bilirubin, ALT/AST, glucose (frequently), creatinine, electrolytes incl. phosphate and magnesium, FBC, ABG, lactate, ammonia ${r(1)}.</li>
<li>Cause: paracetamol level, viral serology (HAV IgM, HBsAg, anti-HBc IgM, anti-HCV, HEV), autoimmune markers, pregnancy test, ceruloplasmin if young with haemolysis ${r(1)}.</li>
<li>Ultrasound with Doppler (Budd–Chiari, portal vein) ${r(1)}.</li>
<li>Blood, urine, ascitic cultures and CXR if any infection sign; CT head if mental state worsens ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Liver failure helper", html: `<div class="calc" data-calc="alfcheck"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Everyone with ALF ${r(1)}</h3>
<ul>
<li>ICU at (or in contact with) a transplant-capable centre; transfer early.</li>
<li>${dr("acetylcysteine")} for paracetamol (150 → 50 → 100 mg/kg over 1, 4, 16 h — see ${P("poisoning-adult", "Poisoning")}) and for other causes.</li>
<li>Glucose: 10% dextrose infusion; check frequently (encephalopathy masks hypoglycaemia).</li>
<li>Circulation: IV fluids; noradrenaline if hypotension persists; creatinine (not urea) for kidney function.</li>
<li>Brain: head up 30°, early intubation for grade 3–4; avoid sedatives; ${dr("mannitol")} 0.5–1 g/kg for raised ICP (not with AKI); ${dr("phenytoin")} for seizures; renal replacement for high ammonia.</li>
<li>Infection: antibiotics/antifungals at the first sign (fever, worsening haemodynamics, mental state or kidneys).</li>
<li>Coagulation: FFP only for bleeding or procedures; ${dr("vitamin_k")} once; H2 blocker/PPI to prevent GI bleeding.</li>
<li>Nutrition: about 60 g protein a day; no severe protein restriction.</li>
<li>Cause-specific: antivirals for HBV; delivery for AFLP/HELLP; penicillin/silibinin for Amanita.</li>
</ul>
<h3>Acute-on-chronic liver failure ${LB.exp("STANDARD")}</h3>
<ul><li>Treat the trigger (infection, bleeding, alcohol, HBV flare), support organs, albumin for SBP/AKI, lactulose for encephalopathy, early ICU and transplant discussion ${P("cirrhosis-adult", "Cirrhosis")} ${P("sbp-adult", "SBP")}.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("acetylcysteine"), "Paracetamol and non-paracetamol ALF " + r(1), "200 mg/mL injection"],
[dr("mannitol"), "Raised ICP 0.5–1 g/kg " + r(1), "20% solution"],
[dr("phenytoin"), "Seizures " + r(1), "Injection, tablet"],
[dr("vitamin_k", "Vitamin K"), "Exclude vitamin K deficiency " + LB.exp("STANDARD"), "10 mg/mL"],
[dr("lactulose"), "Encephalopathy in cirrhosis/ACLF only " + r(1), "10 g/15 mL"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> hepatitis E, AFLP, HELLP — delivery is the treatment for AFLP/HELLP ${r(1)} ${P("preeclampsia-preg", "Pre-eclampsia/HELLP")}.</li><li><b>Children:</b> paediatric ALF differs (metabolic causes; NAC less helpful in non-paracetamol ALF) — paediatric liver centre ${LB.exp("STANDARD")}.</li><li><b>Prognosis:</b> worse if age &lt;10 or &gt;40, deep encephalopathy, high INR, idiosyncratic drugs or Wilson ${r(1)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["No ICU bed, patient grade 2 encephalopathy", "Start NAC, dextrose, transfer now — do not wait for grade 3"],
["INR 4, no bleeding, family requests plasma", "Avoid FFP — volume overload and loss of the INR as a prognostic marker " + r(1)],
["Agitated encephalopathic patient", "Minimal sedation; protect airway " + r(1)],
["Known cirrhosis, alcohol binge, now confused with AKI", "ACLF pathway: trigger, albumin, lactulose, ICU " + LB.exp("STANDARD")]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Cerebral oedema and herniation, hypoglycaemia, sepsis, AKI, shock, ARDS, bleeding with DIC, death without transplant ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Survivors usually recover normal liver function; follow until liver tests normalise ${LB.exp("STANDARD")}.</li><li>Hepatitis B: long-term antiviral follow-up ${P("hepatitis-adult", "Hepatitis")}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Jaundice + confusion", [F.d("INR ≥1.5 and no known chronic liver disease?"), F.a, F.b([["Yes (ALF)", F.e("NAC, dextrose, no sedatives/FFP, infection watch, early ICU/transplant contact")], ["Known cirrhosis (ACLF)", F.s("Treat trigger; albumin; lactulose; ICU")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Missed hypoglycaemia", "Coma, death", "Dextrose infusion; frequent glucose " + r(1)],
["FFP to correct INR", "Fluid overload, lost prognostic marker", "Only for bleeding/procedures " + r(1)],
["Sedation for agitation", "Masks encephalopathy, airway risk", "Minimal sedation " + r(1)],
["Late transfer", "Too unstable to move", "Transfer early " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Definition of acute liver failure?", "Encephalopathy + INR ≥1.5 within 26 weeks of onset in someone without pre-existing liver disease.")}
${qa("Intern/MO", "Why give 10% dextrose?", "Hypoglycaemia is common and masked by encephalopathy.")}
${qa("Registrar", "When is FFP given in ALF?", "Only for active bleeding or before an invasive procedure.")}
${qa("Specialist", "Ammonia level linked with cerebral oedema?", "Above about 150–200 µg/dL (107–143 µmol/L).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Merck Manual Professional Edition. Acute liver failure (full review Aug 2025, updated May 2026), citing Shingina A, et al. ACG Acute Liver Failure Guidelines, Am J Gastroenterol 2023;118(7):1128–53, and EASL 2017.</li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Merck ALF (citing ACG 2023, EASL 2017)", "<span class='pass'>Read</span>", "28 Nov 2026"], ["ACLF details, West Haven grades", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
