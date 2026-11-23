/* Lactational mastitis and breast abscess (ABM Protocol #36 2022, WHO) */
registerPage({
id: "mastitis-preg",
title: "Lactational Mastitis & Breast Abscess",
subtitle: "Keep breastfeeding, reduce inflammation with ice and NSAIDs, avoid over-pumping and deep massage, give antibiotics for bacterial mastitis, and aspirate abscesses",
age: "Breastfeeding women", specs: ["obg", "surg"],
keywords: ["mastitis", "breast abscess", "engorgement", "blocked duct", "breastfeeding", "cefalexin", "cloxacillin", "needle aspiration", "ABM protocol 36"],
related: ["puerperal-preg", "ssti-adult", "ppd-preg"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Inflammatory</h4><p>Feed on demand, ice, ${dr("ibuprofen")}, supportive bra.</p></div>
<div><h4>Bacterial</h4><p>Fever, not better in 24 h: ${dr("cefalexin")} or ${dr("cloxacillin")} 500 mg QDS 10–14 days.</p></div>
<div><h4>Abscess</h4><p>Fluctuant lump → ultrasound-guided aspiration.</p></div>
<div><h4>Don't</h4><p>Stop breastfeeding or massage hard.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Cefalexin and cloxacillin are on the NEML. Ultrasound at district hospitals; aspiration or incision at hospitals with surgeons. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Spectrum (ABM 2022)", html: `${tbl(["Condition", "Features"], [["Engorgement", "Both breasts full, hard"], ["Ductal narrowing", "Tender lump, no fever"], ["Inflammatory mastitis", "Red tender area ± fever"], ["Bacterial mastitis", "Systemic, not improving in 24 h"], ["Abscess", "Fluctuant mass"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Mastitis", [F.s("Oversupply/poor drainage → ductal inflammation"), F.a, F.s("Bacterial infection (Staph aureus)"), F.e("Abscess")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "ABM 2022", "This guide"], [["Management", "Empty breast completely, heat, massage", "Feed normally, ice, gentle lymphatic drainage, no over-pumping", "ABM " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Tender, hot, red wedge of breast; fever, flu-like symptoms.</li></ul><h3>The typical patient</h3><p>A 26-year-old 4 weeks postpartum in Gelephu has a red tender area in the right breast, fever 38.8 °C for 36 h despite feeding. <b>Bacterial mastitis</b>: cefalexin 500 mg QDS × 10 days, ibuprofen, ice, continue breastfeeding; ultrasound if a lump persists.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Abscess", "Fluctuance, ultrasound"], ["Inflammatory breast cancer", "Not resolving, peau d'orange"], ["Galactocele", "Milk cyst"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Usually none; milk culture if severe/recurrent/hospital-acquired; ultrasound for abscess.</p>` },
{ id: "staging", title: "Severity", html: `${tbl(["Feature", "Action"], [["No fever, improving", "Conservative"], ["Fever, worsening at 24 h", "Antibiotics"], ["Sepsis", "IV antibiotics, admit"], ["Abscess", "Aspiration/drainage"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Breastfeed on demand from both sides; do not over-pump.</li><li>Ice packs, ibuprofen/paracetamol, supportive bra; gentle lymphatic massage only.</li><li>Antibiotics for bacterial mastitis 10–14 days.</li><li>Abscess: ultrasound-guided needle aspiration (repeat as needed) or incision; continue breastfeeding (from the other side if incision near nipple).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("cefalexin"), "500 mg QDS × 10–14 days", "First line"], [dr("cloxacillin"), "500 mg QDS", "Alternative"], [dr("ibuprofen"), "400 mg TDS", "Inflammation"]])}` },
{ id: "populations", title: "Non-lactational", html: `<p>Periductal mastitis in smokers; refer if recurrent.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Not improving on antibiotics", "Ultrasound for abscess; culture (MRSA)"]])}` },
{ id: "complications", title: "Complications", html: `<p>Abscess, sepsis, early weaning, fistula.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review at 48 h; persistent lump after resolution needs imaging.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Painful red breast", [F.s("Feed, ice, NSAID"), F.a, F.d("Fever not better in 24 h?"), F.a, F.b([["Yes", F.e("Antibiotics; ultrasound if lump")], ["No", F.ok("Continue conservative")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Advising to stop breastfeeding", "Worse stasis, weaning", "Continue feeding"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Should a mother with mastitis continue breastfeeding?", "Yes, from both breasts.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Mitchell KB, Johnson HM, Rodríguez JM, et al. Academy of Breastfeeding Medicine Clinical Protocol #36: the mastitis spectrum, revised 2022. Breastfeed Med. 2022;17:360-376. <a href="https://doi.org/10.1089/bfm.2022.29207.kbm" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
