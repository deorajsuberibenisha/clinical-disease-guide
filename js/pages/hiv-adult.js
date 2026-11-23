/* HIV infection — adults */
registerPage({
id: "hiv-adult",
title: "HIV Infection & ART — Adults",
subtitle: "Test widely, start TLD the same week for everyone, screen for TB and cryptococcus, prevent infections, keep viral load undetectable, and prevent transmission to babies and partners",
age: "Adults & adolescents", specs: ["id", "medicine"],
keywords: ["HIV", "AIDS", "antiretroviral therapy", "ART", "TLD", "dolutegravir", "tenofovir", "viral load", "CD4", "co-trimoxazole prophylaxis", "TB preventive therapy", "PMTCT", "PrEP", "PEP", "opportunistic infections"],
related: ["hiv-child", "tb-adult", "sti-adult", "hepatitis-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">With modern treatment, a person diagnosed with HIV today can expect a near-normal life, and an undetectable viral load means HIV is not passed on sexually.</p>
<div class="glance">
<div><h4>Start ART</h4><p>As soon as possible, any CD4 (Bhutan 2024): ${dr("tld")} one tablet daily.</p></div>
<div><h4>Except</h4><p>Delay 4–6 weeks for cryptococcal meningitis; at least 4 weeks for TB meningitis.</p></div>
<div><h4>With TB</h4><p>ART within 2 weeks of TB treatment; extra DTG 50 mg with rifampicin.</p></div>
<div><h4>Prophylaxis</h4><p>${dr("cotrimoxazole")} if CD4 under 200; TB preventive therapy once TB excluded.</p></div>
<div><h4>Monitor</h4><p>Viral load at 3, 6, 12 months then yearly; target under 50 copies/mL.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The <b>Bhutan National Guidelines on Treatment and Management of HIV/AIDS (2024)</b> recommend same-week ART with TLD for adults, adolescents and pregnant women; ART is given at designated centres with the Technical Advisory Group (TAG) advising on second line. Bhutan has a small epidemic concentrated in key populations, with many people diagnosed late. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Transmission and stages", html: `<ul><li>Sexual, mother-to-child, blood (needles, transfusion).</li><li>WHO stages 1–4; advanced disease = CD4 under 200 or stage 3–4.</li></ul>${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("HIV", [F.s("HIV infects CD4 T cells"), F.a, F.s("Acute illness → years of silent CD4 decline"), F.a, F.e("Opportunistic infections and cancers (AIDS)"), F.a, F.ok("ART suppresses virus → immune recovery")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan 2024", "WHO 2021/2023", "This guide"], [["First line", "TLD", "TLD", "Same " + LB.loc()], ["Co-trimoxazole", "CD4 under 200", "CD4 ≤350 or stage 3–4 in high-burden settings", "Bhutan threshold"]])}` },
{ id: "presentation", title: "When to test", html: `<ul><li>Offer testing to everyone with TB, STI, hepatitis B/C, pregnancy, unexplained weight loss, chronic diarrhoea, recurrent pneumonia, shingles in young adults, oral thrush, and key populations.</li></ul>${box("red", "Advanced HIV danger signs", `<ul><li>Headache, fever, confusion (cryptococcal or TB meningitis, toxoplasmosis)</li><li>Breathlessness with dry cough (PCP)</li><li>Weight loss, chronic diarrhoea, oral thrush</li></ul>`)}
<h3>The typical patient</h3><p>A 32-year-old truck driver with TB is HIV-positive, CD4 150, no headache. <b>This is advanced HIV with TB</b>: continue TB treatment, start TLD within 2 weeks with an extra DTG 50 mg 12-hourly while on rifampicin, co-trimoxazole, screen serum CrAg, and counsel on partner testing.</p>` },
{ id: "ddx", title: "Opportunistic infections", html: `${tbl(["Condition", "Clue", "First step"], [["TB", "Cough, fever, weight loss", "Xpert, chest X-ray"], ["Cryptococcal meningitis", "Headache, CD4 under 200", "CrAg, LP"], ["PCP", "Dry cough, hypoxia", "High-dose co-trimoxazole + steroid"], ["Oral/oesophageal candidiasis", "Thrush, painful swallowing", "Fluconazole"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Confirm with the national testing algorithm; baseline CD4, creatinine, haemoglobin, hepatitis B and C, syphilis, pregnancy test, TB screen; serum CrAg if CD4 under 200; viral load per schedule.</p>` },
{ id: "staging", title: "ART dose tool", html: `<div class="calc" data-calc="hivdose"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>${dr("tld")} one tablet daily, same day or within a week after readiness counselling; with CrCl under 50: ABC/3TC + DTG.</li><li>Rifampicin: add DTG 50 mg 12 hours later.</li><li>${dr("cotrimoxazole")} 960 mg daily if CD4 under 200; TB preventive therapy (e.g. isoniazid 6 months or 3HP) once active TB excluded.</li><li>Adherence support; disclosure; partner and child testing.</li><li><b>Viral load over 1000</b> twice 3 months apart after adherence support = treatment failure: discuss second line with TAG.</li><li>Pregnancy: TLD; viral load monitoring; infant prophylaxis (see children).</li><li>PEP within 72 h of exposure (28 days); PrEP for people at substantial risk.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("tld"), "1 tablet daily", "Separate from iron/calcium/antacids"], [dr("dolutegravir"), "Extra 50 mg 12-hourly with rifampicin", "TB co-treatment"], [dr("cotrimoxazole"), "960 mg daily", "CD4 under 200"], [dr("fluconazole"), "Per indication", "Candidiasis, CrAg+"]])}` },
{ id: "populations", title: "Special groups", html: `<ul><li>Pregnancy and breastfeeding: TLD; aim undetectable before delivery.</li><li>Hepatitis B co-infection: keep tenofovir in the regimen.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Headache with CD4 80", "LP and CrAg before starting ART"], ["Missed doses, VL 5000", "Adherence support, repeat VL in 3 months"]])}` },
{ id: "complications", title: "Complications", html: `<p>Opportunistic infections, IRIS after starting ART, drug toxicity, cardiovascular and kidney disease, cancers.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Viral load at 3, 6, 12 months then yearly; ask about Appetite, Body weight, Complaints, Disease progression; TB screen every visit (Bhutan 2024).</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Oral candidiasis", src: "images/oral-candidiasis.jpg", mod: "Clinical photograph", ctx: "Immunosuppression", loc: "Mouth", find: "White plaques that scrape off", signs: "Oral thrush", interp: "In an adult without other cause, test for HIV", by: "CDC / Sol Silverman Jr", page: "https://commons.wikimedia.org/wiki/File:CandidiasisFromCDCinJPEG03-18-06.JPG", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("New HIV diagnosis", [F.s("Counsel, CD4, TB screen, CrAg if CD4 <200"), F.a, F.d("Cryptococcal or TB meningitis?"), F.a, F.b([["Yes", F.e("Treat infection; delay ART 4–6 weeks")], ["No", F.ok("Start TLD now; co-trimoxazole and TPT as indicated")]])])}` },
{ id: "pearls", title: "Pearls and mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Waiting for CD4 to start ART", "Death, transmission", "Treat all"], ["DTG with iron at the same time", "Treatment failure", "Separate doses"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "First-line ART for adults in Bhutan?", "TLD: tenofovir, lamivudine, dolutegravir once daily.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. National guidelines on treatment and management of HIV/AIDS, 2024; via Bhutan Clinical Reference app (Nov 2026).</li><li id="ref-2">World Health Organization. Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring. Geneva: WHO; 2021. <a href="https://www.who.int/publications/i/item/9789240031593" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Bhutan 2024 guideline", "<span class='pass'>Used</span>", "Via app summary"]], "qc")}` }
]
});
