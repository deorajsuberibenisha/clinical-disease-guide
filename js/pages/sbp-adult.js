/* Spontaneous bacterial peritonitis (SBP) — adults with cirrhosis (child nephrotic note). NEW disease (batch N-6, 28 Nov 2026).
   Sources read directly: Merck Manual Professional — Spontaneous bacterial peritonitis (full review Aug 2025: E. coli, Klebsiella, streptococci,
   S. aureus, enterococci, usually one organism; fever, malaise, encephalopathy, worsening liver failure, mild diffuse pain; liberal diagnostic
   paracentesis, inoculate blood-culture bottles at bedside; ascitic neutrophils >250/mm³ diagnostic; mixed flora suggests perforation; IV
   ceftriaxone or cefotaxime ≥5 days and until neutrophils <250; nosocomial: piperacillin–tazobactam with meropenem/daptomycin; albumin 1.5 g/kg
   day 1 and 1 g/kg day 3 (Sort 1999); hold beta-blockers if MAP <65; recurrence up to 70% in a year → prophylaxis with norfloxacin/ciprofloxacin;
   prophylaxis in variceal bleeding) citing AASLD 2021 (Biggins, Hepatology 2021;74:1014); NICE NG50 §1.8 (updated Sept 2023, read 28 Nov 2026:
   do not routinely give primary prophylaxis; consider only if ascitic protein ≤15 g/L, Child–Pugh >9 or MELD >16, or infection would jeopardise
   transplant/TIPS; follow local microbiology; continue until ascites resolves); NEML 2025 (ceftriaxone 1 g, cefotaxime 1 g, ciprofloxacin 500 mg tab
   and IV, norfloxacin 400 mg, human albumin 20% 100 mL, piperacillin–tazobactam and meropenem at referral level). The EASL 2018 guideline web page
   returned a bot check — not bypassed, not read. Ceftriaxone dose and secondary-prophylaxis doses are standard — marked. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "sbp-adult",
title: "Spontaneous Bacterial Peritonitis (SBP)",
subtitle: "Any patient with cirrhosis and ascites who gets fever, pain, confusion, kidney injury or simply worse: tap the ascites, count neutrophils (>250 = SBP), start ceftriaxone, give albumin, and keep them on prophylaxis afterwards",
age: "Adult (child note)", specs: ["gi", "medicine", "id"],
keywords: ["spontaneous bacterial peritonitis", "SBP", "ascites infection", "ascitic tap", "paracentesis", "ascitic neutrophil count", "250 neutrophils", "cirrhosis fever", "albumin SBP", "norfloxacin prophylaxis", "ciprofloxacin prophylaxis", "hepatorenal syndrome", "secondary peritonitis"],
related: ["cirrhosis-adult", "hepatitis-adult", "alcohol-adult", "aki-adult", "sepsis-adult", "ugib-adult", "nephrotic-child", "acute-abdomen-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">SBP is infection of ascitic fluid with no surgical source. It is often <b>silent</b> — the only sign may be confusion, kidney injury or "just worse". It recurs in up to 70% within a year ${r(1)}.</p>
<div class="glance">
<div><h4>Tap everyone</h4><p>Diagnostic paracentesis in every admitted patient with cirrhosis and ascites, and whenever they deteriorate ${r(1)} ${LB.exp("ADMISSION TAP — STANDARD")}.</p></div>
<div><h4>Diagnose</h4><p>Ascitic neutrophils <b>&gt;250/mm³</b>; inoculate blood-culture bottles at the bedside; blood cultures too ${r(1)}.</p></div>
<div><h4>Treat</h4><p>IV ${dr("ceftriaxone")} (or cefotaxime) ≥ 5 days + IV albumin 1.5 g/kg day 1 and 1 g/kg day 3 ${r(1)}.</p></div>
<div><h4>Prevent</h4><p>After SBP: long-term ${dr("ciprofloxacin")} or norfloxacin. Primary prophylaxis only for high-risk patients (NICE) ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Ceftriaxone, cefotaxime, ciprofloxacin, norfloxacin and human albumin 20% are on the NEML ${r(3)}. Alcohol-related cirrhosis is common in Bhutan — see ${P("cirrhosis-adult", "Cirrhosis")} and ${P("alcohol-adult", "Alcohol")}. A tap needs only a green needle and a syringe — do it at the district hospital ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "Definitions", html: `
${tbl(["Term", "Meaning"], [
["SBP", "Ascitic neutrophils &gt;250/mm³, no surgical source " + r(1)],
["Culture-negative neutrocytic ascites", "&gt;250 neutrophils, culture negative — treat as SBP " + LB.exp("STANDARD")],
["Bacterascites", "Positive culture, &lt;250 neutrophils — repeat tap; treat if symptomatic " + LB.exp("STANDARD")],
["Secondary peritonitis", "Perforation or abscess — mixed organisms, surgical " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("SBP", [F.s("Portal hypertension → leaky gut, bacterial translocation"), F.a, F.s("Weak immunity and low ascitic protein (complement)"), F.a, F.e("Infection of ascites → sepsis, hepatorenal syndrome, encephalopathy")])} <p>${r(1)} ${LB.exp("MECHANISM STANDARD")}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "AASLD/Merck", "NICE NG50 (2023)", "This guide"], [
["Primary prophylaxis", "Low ascitic protein with liver/kidney dysfunction", "Not routinely; consider if protein ≤15 g/L, Child–Pugh &gt;9, MELD &gt;16", "High-risk only " + r(1) + " " + r(2)],
["Secondary prophylaxis", "Yes (norfloxacin/ciprofloxacin)", "Follow local advice", "Yes, until ascites resolves or transplant " + r(1)],
["Albumin", "1.5 g/kg day 1, 1 g/kg day 3", "—", "Give, especially with kidney injury or jaundice " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Fever, malaise, mild diffuse abdominal pain or tenderness ${r(1)}.</li>
<li>New or worse encephalopathy, rising creatinine, jaundice, low BP, unexplained deterioration ${r(1)}.</li>
<li>Many have <b>no</b> abdominal signs ${r(1)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 52-year-old man from Wangdue with alcohol-related cirrhosis and tense ascites becomes drowsy with a temperature of 37.9 °C. Ascitic fluid: white cells 800/mm³, 70% neutrophils (560/mm³). <b>SBP</b>: ceftriaxone IV, albumin 1.5 g/kg today and 1 g/kg on day 3, stop beta-blocker if BP low, treat encephalopathy, avoid NSAIDs ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Secondary peritonitis (perforation, abscess)", "Multiple organisms, very high neutrophils, ascitic glucose low/LDH high, free air " + r(1) + " " + LB.exp("RUNYON CRITERIA STANDARD")],
["TB peritonitis", "Lymphocytic ascites, high protein, high ADA " + P("tb-adult", "TB")],
["Malignant ascites", "Cytology, known cancer " + P("hcc-adult", "HCC")],
["Pancreatic ascites", "High amylase " + P("pancreatitis-adult", "Pancreatitis")],
["Other infection in cirrhosis (pneumonia, UTI, cellulitis)", "Examine and culture all sites " + P("sepsis-adult", "Sepsis")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Ascitic tap</b>: cell count with differential (neutrophil count = total WBC × % neutrophils), Gram stain, culture in blood-culture bottles at the bedside, total protein, albumin (SAAG) ${r(1)} ${LB.exp("SAAG STANDARD")}.</li>
<li>Blood cultures, FBC, creatinine, sodium, bilirubin, INR ${r(1)} ${LB.exp("STANDARD")}.</li>
<li>Abdominal X-ray/ultrasound if secondary peritonitis is suspected ${LB.exp("STANDARD")}.</li>
<li>Bleeding risk is low — routine FFP or platelets before a tap are not needed ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "SBP helper", html: `<div class="calc" data-calc="sbpcalc"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Treatment ${r(1)}</h3>
<ul>
<li>Community-acquired: ${dr("ceftriaxone")} IV (commonly 1–2 g daily) or cefotaxime, at least 5 days and until ascitic neutrophils &lt;250 ${LB.exp("CEFTRIAXONE DOSE STANDARD")}.</li>
<li>Hospital-acquired or recent antibiotics: ${dr("piptazo", "piperacillin–tazobactam")} or ${dr("meropenem")} per local resistance.</li>
<li><b>Albumin</b> 1.5 g/kg IV on day 1 and 1 g/kg on day 3 (reduces hepatorenal syndrome and death).</li>
<li>Hold beta-blockers if mean arterial pressure &lt;65 mmHg; stop diuretics and nephrotoxins (NSAIDs) during acute kidney injury ${r(1)} ${LB.exp("DIURETICS — STANDARD")}.</li>
<li>Repeat the tap at 48 h if not improving — consider resistant organisms or secondary peritonitis ${LB.exp("STANDARD")}.</li>
</ul>
<h3>Prophylaxis ${r(1)} ${r(2)}</h3>
<ul>
<li>After an episode: long-term ${dr("ciprofloxacin")} or norfloxacin (e.g. ciprofloxacin 500 mg once daily or norfloxacin 400 mg daily) while ascites persists ${LB.exp("DOSES STANDARD")}.</li>
<li>Primary: only if ascitic protein ≤15 g/L, Child–Pugh &gt;9, MELD &gt;16, or awaiting transplant/TIPS (NICE).</li>
<li>Variceal bleeding: short-course antibiotics for all with cirrhosis ${r(1)} ${P("ugib-adult", "Upper GI bleed")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("ceftriaxone"), "First-line treatment " + r(1), "1 g injection"],
["Cefotaxime", "Alternative " + r(1), "1 g injection"],
["Human albumin 20%", "1.5 g/kg day 1, 1 g/kg day 3 " + r(1), "100 mL bottle (20 g)"],
[dr("ciprofloxacin"), "Prophylaxis " + r(1), "500 mg tab, IV"],
["Norfloxacin", "Prophylaxis " + r(1), "400 mg tab"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children with nephrotic syndrome:</b> primary peritonitis (often pneumococcal) — fever, abdominal pain; treat with IV ceftriaxone ${LB.exp("STANDARD")} ${P("nephrotic-child", "Nephrotic syndrome")}.</li><li><b>Pregnancy with cirrhosis:</b> specialist; avoid quinolones where possible ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["No lab for cell count", "Treat as SBP if febrile or deteriorating; transfer sample/patient " + LB.loc()],
["Already on ciprofloxacin prophylaxis and gets SBP", "Use ceftriaxone or broader (resistance) " + LB.exp("STANDARD")],
["Albumin stock short", "Prioritise those with creatinine &gt;88 µmol/L or bilirubin &gt;68 µmol/L " + LB.exp("SORT CRITERIA — NOT READ DIRECTLY")],
["Mixed organisms on Gram stain", "Secondary peritonitis — surgical review, imaging " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Hepatorenal syndrome, sepsis, encephalopathy, variceal bleeding, death; recurrence ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Secondary prophylaxis; abstinence from alcohol; referral for transplant assessment where possible ${r(1)} ${LB.exp("STANDARD")}.</li><li>Teach: fever, pain, confusion → come back for a tap.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Cirrhosis + ascites, unwell", [F.s("Diagnostic tap + blood cultures"), F.a, F.d("Ascitic neutrophils &gt;250?"), F.a, F.b([["Yes", F.e("Ceftriaxone + albumin day 1 and 3; then prophylaxis")], ["No", F.s("Look for other infection/cause; repeat if worsening")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for abdominal pain", "SBP is often painless", "Tap every admitted cirrhotic with ascites"],
["Culture in a plain tube", "Low yield", "Blood-culture bottles at bedside " + r(1)],
["Forgetting albumin", "More kidney failure and death", "1.5 g/kg day 1, 1 g/kg day 3 " + r(1)],
["No prophylaxis after SBP", "Recurrence up to 70%", "Long-term quinolone " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Ascitic neutrophil count diagnostic of SBP?", "More than 250 cells/mm³.")}
${qa("Intern/MO", "Albumin dose in SBP?", "1.5 g/kg on day 1 and 1 g/kg on day 3.")}
${qa("Registrar", "When does NICE suggest primary prophylaxis?", "Only for high risk: ascitic protein ≤15 g/L, Child–Pugh >9, MELD >16, or awaiting transplant/TIPS.")}
${qa("Specialist", "What suggests secondary peritonitis?", "Multiple organisms, failure to improve, very high neutrophils, low glucose/high LDH, free air.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Merck Manual Professional Edition. Spontaneous bacterial peritonitis (full review Aug 2025), citing Biggins SW, et al. AASLD 2021 Practice Guidance, Hepatology 2021;74(2):1014–48. doi:10.1002/hep.31884</li>
<li id="ref-2">National Institute for Health and Care Excellence. Cirrhosis in over 16s: assessment and management (NG50, updated 2023), §1.8. <a href="https://www.nice.org.uk/guidance/ng50" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Merck SBP (citing AASLD 2021)", "<span class='pass'>Read</span>", "28 Nov 2026"], ["NICE NG50 §1.8", "<span class='pass'>Read</span>", ""], ["EASL 2018", "<span class='unv'>Not read</span>", "Bot check on publisher site — not bypassed"], ["Doses, Sort criteria", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
