/* Liver abscess — amoebic and pyogenic (WHO AWaRe 2022, Bhutan STG 8.2.1, CDC) */
registerPage({
id: "liverabscess-adult",
title: "Liver Abscess (Amoebic & Pyogenic)",
subtitle: "Fever with a tender liver: ultrasound, decide amoebic or pyogenic, give metronidazole ± ceftriaxone, drain when large or not improving, and finish with a luminal agent for amoeba",
age: "Adults & children", specs: ["gi", "id", "surg", "medicine"],
keywords: ["liver abscess", "amoebic liver abscess", "pyogenic liver abscess", "Entamoeba histolytica", "Klebsiella", "metronidazole", "aspiration", "drainage", "right upper quadrant pain", "hepatomegaly"],
related: ["cirrhosis-adult", "gallstones-adult", "ge-adult", "sepsis-adult", "hcc-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Amoebic abscess is common in young men in South Asia (alcohol is a risk); pyogenic abscess affects older people with diabetes or biliary disease. Both present as fever and a tender liver.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever + right upper quadrant pain + tender liver.</p></div>
<div><h4>Image</h4><p>Ultrasound; chest X-ray (raised right diaphragm).</p></div>
<div><h4>Amoebic</h4><p>${dr("metronidazole")} 750 mg 8-hourly 7–10 days + luminal agent.</p></div>
<div><h4>Pyogenic</h4><p>${dr("ceftriaxone")} 2 g + metronidazole ≥4 weeks; drain over 5 cm.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 8.2.1 lists liver abscess under amoebiasis. Luminal agents (paromomycin, diloxanide) are not on the NEML — check availability; without them, relapse risk is higher. Ultrasound-guided aspiration is available at referral hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Amoebic vs pyogenic", html: `${tbl(["Feature", "Amoebic", "Pyogenic"], [["Patient", "Young man, alcohol, travel/endemic", "Older, diabetes, biliary disease, malignancy"], ["Number", "Usually single, right lobe", "Often multiple"], ["Diarrhoea history", "Sometimes", "Rare"], ["Blood culture", "Negative", "Often positive (Klebsiella, E. coli, strep)"], ["Aspirate", "'Anchovy sauce', sterile", "Pus with organisms"], ["Serology", "Positive", "Negative"]])}${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Liver abscess", [F.s("Amoeba from colon via portal vein / bacteria via biliary tree, portal vein or blood"), F.a, F.s("Liver necrosis → cavity"), F.a, F.e("Rupture into pleura, pericardium, peritoneum")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "WHO AWaRe / CDC", "This guide"], [["Luminal agent", "Not mentioned", "Always after nitroimidazole", "Use if available " + LB.loc()], ["Pyogenic duration", "—", "At least 4 weeks", "Same"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Fever, right upper quadrant pain (may refer to shoulder), anorexia, weight loss; tender hepatomegaly, intercostal tenderness; jaundice uncommon.</li></ul>${box("red", "Danger", `<ul><li>Left lobe abscess (pericardial rupture)</li><li>Sepsis, peritonitis, sudden chest pain/breathlessness (rupture)</li></ul>`)}<h3>The typical patient</h3><p>A 34-year-old man who drinks ara daily in Samdrup Jongkhar has 2 weeks of fever and right upper quadrant pain; tender liver; ultrasound shows a single 7 cm right-lobe abscess. <b>Probable amoebic liver abscess</b>: metronidazole 750 mg 8-hourly for 10 days, then luminal agent; aspirate if no improvement in 3–5 days.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Cholecystitis/cholangitis", "Gallstones, Murphy's sign, jaundice"], ["Hydatid cyst", "Daughter cysts, dog contact"], ["HCC/metastasis", "Solid lesion, weight loss"], ["Right lower lobe pneumonia", "Chest signs"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Ultrasound (CT if unclear), FBC, CRP, LFT, blood cultures, glucose/HbA1c, chest X-ray, amoebic serology/antigen where available; aspirate for culture if drained.</p>` },
{ id: "staging", title: "Treatment tool", html: `<div class="calc" data-calc="liverabsplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Amoebic: metronidazole 750 mg 8-hourly (child 10–15 mg/kg) for 7–10 days; luminal agent afterwards; aspiration for large, left-lobe, impending rupture or no response.</li><li>Pyogenic: ceftriaxone 2 g daily + metronidazole 500 mg 8-hourly (child ceftriaxone 80 mg/kg + metronidazole 7.5 mg/kg), at least 4 weeks; percutaneous drainage for abscesses over 5 cm; surgery for rupture or failed drainage; treat the biliary cause.</li><li>Unsure: treat as pyogenic (covers amoeba).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("metronidazole"), "750 mg 8-hourly (amoebic) / 500 mg (pyogenic)", "Both"], [dr("ceftriaxone"), "2 g daily", "Pyogenic"], [dr("coamoxiclav"), "1.2 g IV 8-hourly / oral", "Alternative/step-down"]])}` },
{ id: "populations", title: "Diabetes and children", html: `<p>Klebsiella abscess in diabetes can spread to the eye (endophthalmitis) — ask about vision. Children: doses by weight in the tool.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Fever persists after 5 days of metronidazole", "Aspirate; reconsider pyogenic; add ceftriaxone"], ["Sudden breathlessness", "Rupture into pleura — chest drain, refer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Rupture (pleural, pericardial, peritoneal), sepsis, relapse, metastatic infection.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Clinical response in 3–5 days; ultrasound to guide duration (cavities can persist for months after cure).</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Liver abscess on ultrasound", src: "images/liver-abscess-us.png", mod: "Ultrasound", ctx: "Liver abscess", loc: "Right lobe", find: "Hypoechoic cavity with internal echoes", interp: "Treat; drain if large or not improving", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:LiverAbscessMark.png", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fever + tender liver", [F.s("Ultrasound, cultures, LFT"), F.a, F.d("Amoebic features?"), F.a, F.b([["Yes", F.ok("Metronidazole → luminal agent")], ["No/unsure", F.e("Ceftriaxone + metronidazole, drain over 5 cm")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No luminal agent", "Relapse", "Complete eradication"], ["Missing diabetes/biliary cause", "Recurrence", "Glucose, imaging"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Metronidazole dose for adult amoebic liver abscess?", "750 mg three times daily for 7–10 days.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) antibiotic book. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">Centers for Disease Control and Prevention. DPDx: Amebiasis — treatment information. <a href="https://www.cdc.gov/dpdx/amebiasis/tx.html" target="_blank" rel="noopener">cdc.gov</a></li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 8.2.1.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["NEML luminal agents", "<span class='flag'>Not listed</span>", "Noted"]], "qc")}` }
]
});
