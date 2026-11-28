/* Drug-induced liver injury (DILI), including anti-TB drugs and herbal/traditional products — adults. NEW disease (batch N-7, 28 Nov 2026).
   Sources read directly: AASLD practice guidance on drug, herbal and dietary supplement-induced liver injury (Fontana et al., Hepatology
   2023;77:1036–65, PMC9936988 — read 28 Nov 2026: direct, idiosyncratic and indirect hepatotoxicity; R value = (ALT/ULN)/(ALP/ULN): >5
   hepatocellular, <2 cholestatic, 2–5 mixed; test all for acute viral hepatitis (HAV IgM, HBsAg, anti-HBc IgM, HCV RNA); latency usually within
   6 months, hypersensitivity 24–72 h; Hy's law ALT >3×ULN + bilirubin >2.5 mg/dL (ALP <2×ULN); RUCAM/RECAM causality; herbal products ~20% of DILIN
   cases; admit if severe vomiting, coagulopathy, encephalopathy, dehydration; transfer to transplant centre if ALF; 3-day NAC for adult DILI ALF;
   antitubercular DILI RCT — shorter stay, no survival benefit; NAC poorer in children with non-APAP ALF; steroids for DRESS, AIH-like, checkpoint
   inhibitor; chronic DILI if persisting 6–12 months); Merck Manual Professional — Liver injury caused by drugs (Nov 2024, updated Mar 2026:
   clinically significant DILI = AST/ALT >5×ULN or ALP >2×ULN twice ≥24 h apart, or bilirubin >2.5 mg/dL or INR >1.5 with raised enzymes; exclude
   viral, biliary, alcohol, autoimmune, metabolic; early withdrawal; avoid rechallenge; NAC for paracetamol; statins safe in chronic liver disease);
   this app's TB page (Bhutan TB guideline 8th ed 2024 / ATS 2006 stop and reintroduction rules) — linked, not duplicated; NEML 2025
   (acetylcysteine 200 mg/mL, phytomenadione, lactulose). LiverTox (NCBI) page showed a reCAPTCHA — not bypassed, not read. Covers remaining-list
   item 'Drug-induced liver injury, including anti-TB drugs'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "dili-adult",
title: "Drug-Induced Liver Injury (DILI)",
subtitle: "Jaundice, vomiting or raised liver enzymes after starting a medicine, TB treatment or a herbal/traditional remedy: stop the suspect, work out the pattern (R value), exclude viral hepatitis, watch for liver failure, and do not rechallenge without a plan",
age: "Adult", specs: ["gi", "medicine", "id"],
keywords: ["drug-induced liver injury", "DILI", "hepatotoxicity", "anti-TB drug hepatitis", "ATT hepatitis", "isoniazid hepatitis", "rifampicin jaundice", "pyrazinamide liver", "herbal medicine liver", "traditional medicine liver injury", "paracetamol liver", "Hy's law", "R value", "RUCAM", "cholestatic jaundice drug", "co-amoxiclav jaundice", "valproate liver", "methotrexate liver"],
related: ["tb-adult", "hepatitis-adult", "acute-liver-failure-adult", "poisoning-adult", "cirrhosis-adult", "hiv-adult", "alcohol-adult", "autoimmune-hepatitis-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Any medicine, herbal or supplement can injure the liver. In Bhutan the commonest culprits are <b>anti-TB drugs</b>, paracetamol overdose, antibiotics, anti-epileptics, ART and herbal/traditional products ${r(1)} ${LB.exp("LOCAL CULPRITS — STANDARD")}.</p>
<div class="glance">
<div><h4>Significant DILI</h4><p>ALT/AST &gt;5×ULN or ALP &gt;2×ULN (twice), or bilirubin &gt;2.5 mg/dL or INR &gt;1.5 with raised enzymes ${r(2)}.</p></div>
<div><h4>Pattern</h4><p>R = (ALT/ULN)/(ALP/ULN): &gt;5 hepatocellular, &lt;2 cholestatic, 2–5 mixed ${r(1)}.</p></div>
<div><h4>Danger</h4><p>Hepatocellular injury with jaundice (Hy's law: ALT &gt;3×ULN + bilirubin &gt;2.5 mg/dL) carries high mortality; INR rise or confusion = acute liver failure ${r(1)} ${r(2)}.</p></div>
<div><h4>Act</h4><p>Stop the suspect drug(s); test for viral hepatitis; admit if vomiting, INR high or confused; NAC for paracetamol and consider in DILI liver failure ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Anti-TB drugs", `<p>The Bhutan TB guideline's stop rules (ALT ≥5×ULN, or ≥3×ULN with symptoms/jaundice) and the one-drug-at-a-time reintroduction are on the TB page: ${P("tb-adult", "Tuberculosis → DILI section")}. Acetylcysteine injection, vitamin K and lactulose are on the NEML ${r(3)}.</p>`)}
` },

{ id: "overview", title: "Types and culprits", html: `
${tbl(["Type", "Features", "Examples"], [
["Direct (dose-related)", "Predictable above a threshold; fast", "Paracetamol overdose " + r(1) + " " + P("poisoning-adult", "Poisoning")],
["Idiosyncratic", "Rare, not dose-related, latency days–months (usually &lt;6 months)", "Isoniazid, rifampicin, pyrazinamide, co-amoxiclav, nitrofurantoin, valproate, phenytoin, carbamazepine, NSAIDs, nevirapine/efavirenz " + r(1) + " " + r(2) + " " + LB.exp("SOME EXAMPLES STANDARD")],
["Indirect", "Drug changes host immunity or liver", "HBV reactivation after rituximab; immune-checkpoint hepatitis " + r(1)],
["Herbal / supplements", "~20% of US DILI cases; labels unreliable", "Ashwagandha, green tea extract, multi-ingredient products, traditional mixtures " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("DILI", [F.s("Toxic metabolite or immune reaction to drug"), F.a, F.s("Hepatocyte death (ALT) or bile flow block (ALP)"), F.a, F.e("Jaundice, coagulopathy, encephalopathy in severe cases")])} <p>${r(1)} ${r(2)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "AASLD 2023 / Merck", "TB programmes", "This guide"], [
["Rechallenge", "Avoid", "Planned one-by-one reintroduction of ATT", "Rechallenge only anti-TB drugs, by protocol " + r(1) + " " + P("tb-adult", "TB")],
["NAC in non-paracetamol ALF", "Consider in adults (3 days)", "—", "Consider in adults; not routine in children " + r(1)],
["Routine monitoring", "Not shown to prevent DILI (general)", "Baseline + symptom-guided LFTs on ATT", "Educate on symptoms; test when symptomatic or high-risk " + r(2)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Often none; or anorexia, nausea, vomiting, right upper quadrant pain, dark urine, jaundice ${r(2)}.</li>
<li>Cholestatic: itching, jaundice, pale stools ${r(2)}.</li>
<li>Hypersensitivity: fever, rash, eosinophilia, lymph nodes within 24–72 h to weeks (DRESS) ${r(1)}.</li>
<li>Severe: confusion, bleeding, high INR — acute liver failure ${P("acute-liver-failure-adult", "Acute liver failure")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 34-year-old woman from Samtse, 5 weeks into TB treatment, has vomiting and yellow eyes. ALT 620 U/L (ULN 40), ALP 140 (ULN 120), bilirubin 4.2 mg/dL, INR 1.3. R = (620/40)/(140/120) ≈ 13 — <b>hepatocellular DILI with jaundice (Hy's law)</b>: stop all ATT, viral hepatitis tests, admit, monitor INR and mental state; reintroduce per TB protocol once ALT &lt;2×ULN ${r(1)} ${P("tb-adult", "TB")}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Acute viral hepatitis (A, B, C, E)", "Serology — test everyone " + r(1) + " " + P("hepatitis-adult", "Hepatitis")],
["Alcohol-related hepatitis", "AST:ALT &gt;2, history " + P("alcohol-adult", "Alcohol")],
["Biliary obstruction", "Ultrasound: dilated ducts " + P("gallstones-adult", "Gallstones")],
["Autoimmune hepatitis", "High IgG, autoantibodies; some drugs trigger it " + P("autoimmune-hepatitis-adult", "Autoimmune hepatitis")],
["Ischaemic hepatitis, sepsis", "Shock, very high ALT that falls fast " + P("sepsis-adult", "Sepsis")],
["Leptospirosis, scrub typhus, dengue", "Fever, monsoon " + P("leptospirosis", "Leptospirosis")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>ALT, AST, ALP, bilirubin, albumin, INR; repeat to follow trend ${r(2)}.</li>
<li>Viral hepatitis: HAV IgM, HBsAg, anti-HBc IgM, HCV RNA (or anti-HCV), HEV ${r(1)}.</li>
<li>Abdominal ultrasound (bile ducts, liver texture) ${r(1)}.</li>
<li>Autoantibodies and IgG if autoimmune features ${r(1)}.</li>
<li>Paracetamol level if overdose possible ${LB.exp("STANDARD")}.</li>
<li>Full medicine, herbal, traditional and supplement history with start/stop dates ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "DILI helper (R value, Hy's law, severity)", html: `<div class="calc" data-calc="dilicalc"></div>` },

{ id: "manage", title: "Management", html: `
<ul>
<li><b>Stop the suspect drug(s) early</b> — most recover ${r(2)}.</li>
<li>Admit if severe vomiting, dehydration, coagulopathy or confusion; transfer to a liver/transplant-capable centre if acute liver failure ${r(1)}.</li>
<li>${dr("acetylcysteine")}: paracetamol toxicity (always); consider a 3-day course in adults with DILI-related acute liver failure, especially early encephalopathy ${r(1)} ${r(2)}.</li>
<li>Steroids: DRESS, autoimmune-like DILI, checkpoint-inhibitor hepatitis — specialist ${r(1)}.</li>
<li>Supportive: fluids, ${dr("vitamin_k")} for raised INR, ${dr("lactulose")} if encephalopathic, avoid sedatives ${LB.exp("STANDARD")}.</li>
<li>Do not rechallenge, except planned reintroduction of essential drugs such as anti-TB treatment ${r(1)} ${r(2)}.</li>
<li>Record the reaction clearly and report it (pharmacovigilance) ${LB.loc()}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("acetylcysteine"), "Paracetamol toxicity; DILI liver failure (adults) " + r(1), "200 mg/mL injection"],
[dr("vitamin_k", "Vitamin K (phytomenadione)"), "Raised INR " + LB.exp("STANDARD"), "10 mg/mL injection"],
[dr("lactulose"), "Encephalopathy " + LB.exp("STANDARD"), "10 g/15 mL"],
[dr("prednisolone"), "DRESS / autoimmune-like DILI (specialist) " + r(1), "5 mg, 20 mg"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> also think of intrahepatic cholestasis, HELLP, acute fatty liver ${LB.exp("STANDARD")} ${P("preeclampsia-preg", "Pre-eclampsia")}.</li><li><b>HIV on ART + TB treatment:</b> overlapping hepatotoxicity — specialist ${P("hiv-adult", "HIV")}.</li><li><b>Pre-existing liver disease:</b> higher risk with methotrexate and anti-TB therapy ${r(2)}.</li><li><b>Children:</b> valproate toxicity — L-carnitine for hyperammonaemia (specialist); NAC less beneficial in non-paracetamol ALF ${r(1)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Smear-positive TB with DILI, cannot stop treatment", "Bridge with non-hepatotoxic drugs (fluoroquinolone + ethambutol) per TB page " + P("tb-adult", "TB")],
["Patient taking several traditional remedies", "Stop all; list contents; report " + r(1)],
["Mild ALT rise (&lt;3×ULN), no symptoms, on statin", "Usually continue; statins are safe in chronic liver disease " + r(2)],
["Jaundice after co-amoxiclav finished 3 weeks ago", "Cholestatic DILI can appear late — check " + r(2)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Acute liver failure, death or transplant, chronic DILI (persisting 6–12 months), vanishing bile duct syndrome ${r(1)} ${r(2)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Liver tests until normal; label the drug allergy in the record ${LB.exp("STANDARD")}.</li><li>Persisting abnormality at 6–12 months = chronic DILI — specialist ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Raised liver tests on a drug/herb", [F.s("Stop suspect(s); calculate R; viral serology; ultrasound"), F.a, F.d("Jaundice, INR &gt;1.5, confusion?"), F.a, F.b([["Yes", F.e("Admit; NAC if paracetamol or ALF; liver unit")], ["No", F.s("Monitor until normal; plan any essential reintroduction")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Not asking about herbal/traditional products", "Cause missed", "Ask specifically " + r(1)],
["Continuing ATT despite vomiting + jaundice", "Fulminant hepatitis", "Stop and test " + P("tb-adult", "TB")],
["Skipping viral serology", "Hepatitis E/A/B mislabelled as DILI", "Test all " + r(1)],
["Casual rechallenge", "Severe recurrence", "Avoid; protocol only " + r(2)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How is the R value calculated?", "(ALT/ULN) ÷ (ALP/ULN); >5 hepatocellular, <2 cholestatic, 2–5 mixed.")}
${qa("Intern/MO", "What is Hy's law?", "ALT >3×ULN with bilirubin >2.5 mg/dL (ALP <2×ULN) in drug injury — high risk of liver failure/death.")}
${qa("Registrar", "Which viral tests should every suspected DILI patient have?", "HAV IgM, HBsAg, anti-HBc IgM, HCV RNA (and HEV).")}
${qa("Specialist", "Role of NAC in non-paracetamol DILI?", "A 3-day course may improve outcomes in adult ALF with early encephalopathy; not beneficial in children with non-APAP ALF.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Fontana RJ, et al. AASLD practice guidance on drug, herbal, and dietary supplement-induced liver injury. Hepatology 2023;77(3):1036–65. doi:10.1002/hep.32689. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9936988/" target="_blank" rel="noopener">PMC9936988</a></li>
<li id="ref-2">Merck Manual Professional Edition. Liver injury caused by drugs (full review Nov 2024, updated Mar 2026).</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["AASLD 2023", "<span class='pass'>Read</span>", "PMC, 28 Nov 2026"], ["Merck DILI", "<span class='pass'>Read</span>", ""], ["LiverTox", "<span class='unv'>Not read</span>", "reCAPTCHA — not bypassed"], ["Anti-TB rules", "<span class='pass'>On TB page</span>", "Bhutan TB guideline"]], "qc")}` }
]
});
})();
