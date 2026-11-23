/* Constipation in children (Bhutan STG 12.4.2, ESPGHAN/NASPGHAN 2014, NICE CG99) */
registerPage({
id: "constipation-child",
title: "Constipation in Children",
subtitle: "Most childhood constipation is functional: exclude red flags, clear any impaction, then give laxatives for months with a toilet routine and a calm, praise-based approach",
age: "Infants & children", specs: ["paeds", "gi"],
keywords: ["constipation", "functional constipation", "faecal impaction", "encopresis", "soiling", "lactulose", "glycerin suppository", "Hirschsprung", "Rome IV", "withholding"],
related: ["haemorrhoids-adult", "uti-child", "thyroid-child", "intuss-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Diagnose</h4><p>Rome IV: 2+ of infrequent, painful, large, withholding, impaction, soiling for 1 month.</p></div>
<div><h4>Red flags</h4><p>From birth, delayed meconium, distension + vomiting, neuro signs, faltering growth.</p></div>
<div><h4>Treat</h4><p>${dr("glycerin_supp", "Glycerin suppository")} + ${dr("lactulose")} 1–3 mL/kg/day (STG).</p></div>
<div><h4>Continue</h4><p>Months, not days; wean slowly.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 12.4.2: glycerine suppository at night for 2–3 nights, lactulose 1–3 mL/kg/day for 3–5 days, refer if not helped. International guidance continues maintenance for weeks to months — short courses lead to relapse. Macrogol (PEG 3350) is not on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Affects up to 1 in 10 children; peaks at toilet training and school entry. Painful stools → withholding → harder stools (vicious cycle).${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Withholding cycle", [F.s("Painful hard stool (fissure)"), F.a, F.s("Withholding, rectum stretches"), F.e("Impaction, overflow soiling, UTI")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "ESPGHAN/NICE", "This guide"], [["Duration", "3–5 days", "Weeks–months, wean slowly", "Months " + LB.loc()], ["First-line laxative", "Lactulose", "Macrogol (PEG)", "Lactulose (available) ± senna"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Stool pattern (Bristol chart), pain, blood, soiling, diet, fluids, toilet habits, stressors.</li><li>Examine abdomen (faecal mass), perianal (fissure), spine/legs, growth; rectal exam only if red flags.</li></ul><h3>The typical patient</h3><p>A 4-year-old (16 kg) in Thimphu passes hard painful stools twice a week, hides when needing to go, and soils; faecal mass palpable. <b>Functional constipation with impaction</b>: glycerin suppository nightly 2–3 nights, lactulose 16–48 mL/day, senna at night, toilet sits after meals, star chart, continue for 3+ months.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Hirschsprung", "From birth, meconium delay, distension"], ["Hypothyroidism", "Growth, TSH"], ["Spinal dysraphism", "Sacral dimple/hair, leg signs"], ["Coeliac, cow's milk protein allergy", "Diet relation"], ["Child abuse", "Anal findings, behaviour"]])}` },
{ id: "invest", title: "Investigations", html: `<p>None for functional constipation; red flags: TSH, calcium, coeliac serology, abdominal X-ray (rarely), rectal biopsy (Hirschsprung).</p>` },
{ id: "staging", title: "Laxative tool", html: `<div class="calc" data-calc="constipationc"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Disimpaction, then maintenance laxatives; adjust to soft daily stool.</li><li>Behaviour: toilet routine, footstool, rewards, no punishment.</li><li>Diet: fluids, fruit, vegetables; infants — correct formula concentration, avoid excess cow's milk.</li><li>Treat fissure; review in 2–4 weeks.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("lactulose"), "1–3 mL/kg/day", "STG"], [dr("glycerin_supp"), "1 suppository at night × 2–3", "Disimpaction"], [dr("senna"), "By age at night", "Add-on"]])}` },
{ id: "populations", title: "Infants", html: `<p>Breastfed infants may stool infrequently but soft — normal. Hard stools in formula-fed infants: check preparation.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Relapse after stopping", "Restart; longer maintenance; slower wean"]])}` },
{ id: "complications", title: "Complications", html: `<p>Fissure, soiling, UTI, enuresis, social distress.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Every 2–6 weeks until stable; wean over months.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Constipated child", [F.d("Red flags?"), F.a, F.b([["Yes", F.e("Investigate/refer")], ["No", F.ok("Disimpact → maintenance laxatives + routine")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Stopping laxatives after a week", "Relapse", "Months of maintenance"], ["Diet advice alone with impaction", "Fails", "Disimpact first"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "STG lactulose dose in children?", "1–3 mL/kg/day once or twice daily.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Tabbers MM, DiLorenzo C, Berger MY, et al. Evaluation and treatment of functional constipation in infants and children: ESPGHAN and NASPGHAN recommendations. J Pediatr Gastroenterol Nutr. 2014;58:258-274. <a href="https://doi.org/10.1097/MPG.0000000000000266" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 12.4.2.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
