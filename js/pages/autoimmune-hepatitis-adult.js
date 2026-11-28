/* Autoimmune hepatitis (AIH) — adults (child note). NEW disease (batch N-7, 28 Nov 2026).
   Sources read directly: APASL clinical practice guidance on AIH (Wang G, et al. Hepatol Int 2021;15:223–57, PMC8144150 — read 28 Nov 2026:
   autoantibodies, hypergammaglobulinaemia and interface hepatitis; corticosteroids + azathioprine standard after diagnosis; liver biopsy before
   treatment in all unless contraindicated (transjugular if coagulopathic); IAIHG simplified criteria (ANA/SMA ≥1:40 +1, ≥1:80 +2, anti-LKM1 ≥1:40
   +2, anti-SLA +2; IgG >ULN +1, >1.1×ULN +2; histology compatible +1, typical +2; no viral hepatitis +2; ≥6 probable, ≥7 definite) perform well in
   Asian cohorts but miss atypical/acute cases with normal IgG/low titres; ~1/4 cirrhotic at presentation; acute severe AIH and AIH flare as ACLF
   cause in Asia (2.9% of APASL ACLF cohort) — advanced encephalopathy → transplant; regimens: AASLD prednisone 30 mg + azathioprine 50 mg tapering
   to 20 mg over 4 weeks; EASL prednisone 60 mg → 20 mg over 6 weeks + azathioprine 1–2 mg/kg; 40 mg start (Turkey) better; TPMT/NUDT15 testing
   (NUDT15 variants commoner in Asians); intolerance → budesonide 6 mg, azathioprine 2 mg/kg, MMF 2 g; decompensated AIH — prednisolone cut mortality
   56% → 14%; complete biochemical remission = normal transaminases and IgG; rapid response at 8 weeks predicts better outcome; relapse 50–90%
   after withdrawal; azathioprine continued in pregnancy (AASLD 2019)); NEML 2025 (prednisolone 5/20 mg, methylprednisolone inj, mycophenolate
   250/500 mg at RRH/NRH; NO azathioprine, NO oral budesonide). Covers remaining-list item 'Autoimmune hepatitis'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "autoimmune-hepatitis-adult",
title: "Autoimmune Hepatitis",
subtitle: "Raised ALT with high IgG and positive ANA/SMA in a woman (or anyone) without viral, alcohol or drug cause: biopsy if possible, score it, start prednisolone with a steroid-sparing drug, aim for normal ALT and IgG, and expect to treat for years",
age: "Adult (child note)", specs: ["gi", "medicine"],
keywords: ["autoimmune hepatitis", "AIH", "ANA", "anti-smooth muscle antibody", "SMA", "anti-LKM1", "IgG raised", "interface hepatitis", "simplified AIH score", "prednisolone liver", "azathioprine", "mycophenolate", "budesonide", "chronic hepatitis woman", "acute severe autoimmune hepatitis", "overlap syndrome"],
related: ["hepatitis-adult", "dili-adult", "cirrhosis-adult", "acute-liver-failure-adult", "thyroid-adult", "ra-adult", "osteoporosis-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">AIH is immune-mediated liver inflammation with <b>autoantibodies, raised IgG and interface hepatitis</b>. It responds well to steroids plus a steroid-sparing drug but usually relapses if stopped ${r(1)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Unexplained raised ALT/AST, especially women; fatigue, jaundice; other autoimmune disease (thyroid, diabetes, arthritis) ${r(1)} ${LB.exp("ASSOCIATIONS STANDARD")}.</p></div>
<div><h4>Diagnose</h4><p>ANA/SMA (or anti-LKM1, anti-SLA), IgG, viral markers negative, liver biopsy; simplified score ≥6 probable, ≥7 definite ${r(1)}.</p></div>
<div><h4>Treat</h4><p>${dr("prednisolone")} (e.g. 30–60 mg/day tapering) + azathioprine 1–2 mg/kg (or mycophenolate) ${r(1)}.</p></div>
<div><h4>Target</h4><p>Complete biochemical remission: normal ALT/AST <b>and</b> IgG; a fast 8-week response predicts better outcome ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p><b>Azathioprine and oral budesonide are not on the NEML</b>; prednisolone is, and mycophenolate is available at RRH/NRH ${r(2)}. Biopsy and IgG/autoantibody tests are at JDWNRH ${LB.loc()}. Always exclude hepatitis B, C, E, alcohol, Wilson disease, TB drugs and herbal products first ${P("dili-adult", "DILI")}.</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Type", "Features"], [
["Type 1", "ANA and/or SMA; all ages, mostly women " + r(1)],
["Type 2", "Anti-LKM1; children and young people; can be severe " + r(1)],
["Acute / acute severe AIH", "May have normal IgG and low titres; zone 3 necrosis; can cause ALF or ACLF " + r(1) + " " + P("acute-liver-failure-adult", "Liver failure")],
["Cirrhotic at presentation", "About one quarter " + r(1)],
["Drug-induced AIH-like injury", "Nitrofurantoin, minocycline, checkpoint inhibitors " + P("dili-adult", "DILI") + " " + LB.exp("EXAMPLES STANDARD")],
["Overlap with PBC/PSC", "Cholestatic features, AMA " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("AIH", [F.s("Genetic susceptibility (HLA) + trigger"), F.a, F.s("T-cell attack on hepatocytes; autoantibodies; high IgG"), F.a, F.e("Interface hepatitis → fibrosis → cirrhosis if untreated")])} <p>${r(1)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "AASLD (via APASL)", "EASL (via APASL)", "This guide"], [
["Starting prednisolone", "30 mg + azathioprine 50 mg, taper to 20 mg over 4 weeks", "60 mg → 20 mg over 6 weeks + azathioprine 1–2 mg/kg", "Specialist choice; higher start when severe " + r(1)],
["Steroid-sparing drug", "Azathioprine", "Azathioprine", "Azathioprine if obtainable, else mycophenolate (on NEML at referral level) " + r(1) + " " + r(2)],
["Biopsy", "Recommended", "Recommended", "Before treatment unless unsafe " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Asymptomatic raised transaminases; fatigue, joint pains, anorexia ${r(1)} ${LB.exp("STANDARD")}.</li>
<li>Acute hepatitis with jaundice; occasionally acute liver failure ${r(1)}.</li>
<li>Cirrhosis with complications at first presentation ${r(1)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 38-year-old woman from Mongar with hypothyroidism has had ALT 3–5×ULN for 6 months. HBsAg, anti-HCV, HEV negative; no alcohol or herbs; ANA 1:160, IgG 1.4×ULN; biopsy typical. <b>Simplified score 2 + 2 + 2 + 2 = 8: definite AIH</b> — prednisolone with a steroid-sparing agent, bone protection, follow ALT and IgG ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Viral hepatitis B, C, E", "Serology " + P("hepatitis-adult", "Hepatitis")],
["DILI / herbal injury", "Drug timing " + P("dili-adult", "DILI")],
["MASLD", "Metabolic risk, low-titre ANA common " + P("masld-adult", "MASLD")],
["Alcohol-related liver disease", "History, AST:ALT " + P("alcohol-adult", "Alcohol")],
["Wilson disease", "Young, low ceruloplasmin, haemolysis " + LB.exp("STANDARD")],
["PBC / PSC", "Cholestatic tests, AMA, MRCP " + r(1)]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>ALT, AST, ALP, bilirubin, albumin, INR, IgG ${r(1)}.</li>
<li>ANA, anti-smooth muscle, anti-LKM1, anti-SLA; AMA to exclude PBC ${r(1)}.</li>
<li>Viral: HBsAg, anti-HCV/HCV RNA, HEV; ceruloplasmin if young ${r(1)} ${LB.exp("STANDARD")}.</li>
<li><b>Liver biopsy</b> before treatment unless contraindicated (transjugular if coagulopathy) ${r(1)}.</li>
<li>Before azathioprine: TPMT (and NUDT15 where available — commoner variants in Asians), FBC ${r(1)}.</li>
<li>Ultrasound; fibrosis assessment ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "Simplified AIH score helper", html: `<div class="calc" data-calc="aihscore"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Induction ${r(1)}</h3>
<ul>
<li>${dr("prednisolone")} — e.g. 30 mg daily with azathioprine 50 mg, tapering to 20 mg over 4 weeks (AASLD), or 60 mg tapering to 20 mg over 6 weeks with azathioprine 1–2 mg/kg (EASL); a 40 mg start has also performed well.</li>
<li>Start azathioprine once bilirubin is falling and TPMT is known; if unavailable or not tolerated, mycophenolate 2 g/day ${LB.exp("TIMING STANDARD")}.</li>
<li>Steroid side effects: budesonide 6 mg (non-cirrhotic) where available, or higher azathioprine / mycophenolate.</li>
</ul>
<h3>Maintenance</h3>
<ul>
<li>Aim for normal ALT/AST and IgG; maintain on the lowest effective dose for years; most relapse after withdrawal (50–90%) ${r(1)}.</li>
<li>Bone protection (calcium, vitamin D), BP, glucose, eye checks on steroids ${LB.exp("STANDARD")} ${P("osteoporosis-adult", "Osteoporosis")}.</li>
<li>Vaccinate against hepatitis A and B ${LB.exp("STANDARD")}.</li>
</ul>
<h3>Severe / decompensated</h3>
<ul><li>Decompensated AIH still benefits from steroids (mortality 56% → 14% in an old trial); acute severe AIH or ACLF with encephalopathy → urgent liver unit and transplant assessment ${r(1)}.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("prednisolone"), "Induction and maintenance " + r(1), "5 mg, 20 mg"],
["Azathioprine", "1–2 mg/kg, steroid-sparing " + r(1), "Not listed " + r(2)],
["Mycophenolate mofetil", "2 g/day if azathioprine intolerant/unavailable " + r(1), "250/500 mg (RRH/NRH)"],
["Budesonide (oral)", "6 mg/day, non-cirrhotic " + r(1), "Not listed (nasal only)"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> continue treatment; azathioprine continued (AASLD 2019); flares common after delivery; mycophenolate contraindicated ${r(1)} ${LB.exp("MMF — STANDARD")}.</li><li><b>Children:</b> type 2 AIH more common; paediatric hepatology ${r(1)}.</li><li><b>Older adults:</b> watch steroid toxicity and osteoporosis ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Biopsy not possible, strong features", "Score without histology; specialist decision on empirical treatment " + r(1)],
["No azathioprine available", "Prednisolone + mycophenolate via referral hospital " + r(2)],
["Relapse after stopping", "Restart induction; lifelong maintenance likely " + r(1)],
["Acute hepatitis, IgG normal, ANA weak", "Acute AIH still possible — biopsy " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Cirrhosis, liver failure, HCC (in cirrhosis), steroid and azathioprine toxicity (marrow suppression, infections, osteoporosis, diabetes) ${r(1)} ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>ALT, AST, IgG, FBC every 1–3 months initially, then 3–6-monthly ${LB.exp("INTERVAL STANDARD")}.</li><li>HCC surveillance with ultrasound if cirrhotic ${P("hcc-adult", "HCC")}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Unexplained raised ALT", [F.s("Exclude viral, alcohol, drugs/herbs, MASLD, Wilson"), F.a, F.s("ANA/SMA/LKM, IgG, biopsy → simplified score"), F.a, F.d("≥6?"), F.a, F.b([["Yes", F.e("Prednisolone + azathioprine/mycophenolate; target normal ALT + IgG")], ["No", F.s("Reconsider; specialist")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating without excluding viral hepatitis", "Steroids flare hepatitis B", "HBsAg first " + r(1)],
["Stopping treatment once ALT normal", "Relapse in most", "Long maintenance " + r(1)],
["Missing acute AIH with normal IgG", "Progression to liver failure", "Biopsy " + r(1)],
["No bone protection on long steroids", "Fractures", "Calcium/vitamin D"]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which antibodies suggest type 1 AIH?", "ANA and/or anti-smooth muscle antibody.")}
${qa("Intern/MO", "Simplified score thresholds?", "≥6 probable, ≥7 definite AIH.")}
${qa("Registrar", "What defines complete biochemical remission?", "Normal transaminases and normal IgG.")}
${qa("Specialist", "Why test TPMT/NUDT15 before azathioprine in Asian patients?", "NUDT15 variants (commoner in Asians) and TPMT variants cause early leucopenia.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Wang G, et al. The Asian Pacific Association for the Study of the Liver clinical practice guidance: the diagnosis and management of patients with autoimmune hepatitis. Hepatol Int 2021;15(2):223–57. doi:10.1007/s12072-021-10170-1. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8144150/" target="_blank" rel="noopener">PMC8144150</a></li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["APASL 2021 AIH guidance", "<span class='pass'>Read</span>", "PMC, simplified criteria table, 28 Nov 2026"], ["NEML", "<span class='pass'>Checked</span>", "No azathioprine"], ["Monitoring intervals", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
