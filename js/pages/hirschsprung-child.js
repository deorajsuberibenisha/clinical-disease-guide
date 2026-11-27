/* Hirschsprung disease — neonates and children. Batch E-9, 27 Nov 2026.
   Sources read directly: ERNICA guidelines for rectosigmoid Hirschsprung's disease (Kyrklund 2020, full text via Europe PMC PMC7318734 — all 10
   recommendation tables incl. Pastor HAEC score, Table 8); Merck Manual Professional 'Hirschsprung disease' (Aug 2025); Bhutan STG 2024 §12.4.3
   Intestinal obstruction (no Hirschsprung section in the STG); NEML 2025 text. Not read: APSA HAEC guideline, StatPearls (NCBI blocks automated
   access) — marked. Bhutan service detail from SBS/BBS news reports (paediatric surgeon at JDWNRH). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "hirschsprung-child",
title: "Hirschsprung disease — neonates and children",
subtitle: "A term baby who has not passed meconium by 24 hours, with a swollen belly and green vomiting, needs a rectal biopsy: start saline rectal washouts, watch for enterocolitis, and plan pull-through surgery at a specialist centre",
age: "Neonates and children", specs: ["neo", "nicu", "paeds", "surg", "gi"],
keywords: ["Hirschsprung", "Hirschsprung disease", "HSCR", "congenital megacolon", "aganglionosis", "delayed meconium", "failure to pass meconium", "rectal suction biopsy", "rectal washout", "rectal irrigation", "Hirschsprung-associated enterocolitis", "HAEC", "Pastor score", "pull-through", "Duhamel", "Soave", "Swenson", "transanal endorectal pull-through", "RET", "Down syndrome", "constipation infant", "blast sign", "botulinum toxin anal sphincter"],
related: ["constipation-child", "acute-abdomen-child", "nec-child", "down-child", "neosepsis-child", "intuss-child", "anorectal-child", "neoshock-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In Hirschsprung disease the nerve cells (ganglion cells) are missing from the last part of the bowel, so that segment cannot relax and the baby has a functional blockage. It affects about 1 in 5,000 babies, boys four times as often as girls, and in 80–85% only the rectum and sigmoid colon are involved ${r(1)}. About 90% present as newborns ${r(1)}. The main danger is <b>Hirschsprung-associated enterocolitis (HAEC)</b>, which can kill quickly ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Classic triad: no meconium by 24 hours in a term baby, a swollen abdomen and bilious vomiting. A finger or rectal tube releases an explosive gush of gas and stool ${r(1)}.</p></div>
<div><h4>Confirm</h4><p>Rectal biopsy at least 2 cm above the dentate line (2–3 suction samples), read by an experienced pathologist: no ganglion cells, calretinin negative. A contrast enema only guides the level ${r(1)}.</p></div>
<div><h4>Until surgery</h4><p>Saline rectal washouts 1–3 times a day (parents can be taught). Stoma (ileostomy) if washouts fail, if enterocolitis does not settle, or if the bowel perforates ${r(1)}.</p></div>
<div><h4>Enterocolitis</h4><p>Explosive, foul-smelling diarrhoea, distension, fever, lethargy: admit, IV fluids, IV broad-spectrum antibiotics, washouts 2–3 times a day ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG has no Hirschsprung section; its neonatal obstruction advice is airway, breathing and circulation, nil by mouth, nasogastric tube and referral ${r(4)}. Bhutan has very few paediatric surgeons (news reports describe one trained paediatric surgeon at JDWNRH) ${r(5)} ${LB.exp("SERVICE NUMBERS NOT CONFIRMED")}, so: suspect early, start washouts, refer to JDWNRH for biopsy, and discuss with the paediatric surgeon before any district hospital attempts surgery. ERNICA recommends pull-through only in centres with at least two paediatric colorectal surgeons and 24/7 neonatal intensive care ${r(1)} — some children may need referral abroad ${LB.loc()}. Do <b>not</b> send a baby with suspected enterocolitis for a barium enema ${r(2)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Cause", "Neural-crest cells fail to migrate down the gut, leaving the distal bowel without Meissner and Auerbach plexuses; the aganglionic segment is always continuous from the anus upwards — skip lesions almost never occur " + r(2)],
["Frequency", "About 1 in 5,000 live births; male:female 4:1 (no sex difference in total colonic disease) " + r(1) + r(2)],
["Length", "Rectosigmoid 80–85%; longer segments 15–20%; whole colon 3–10% " + r(1) + r(2)],
["Associations", "Down syndrome (commonest), Shah-Waardenburg, congenital central hypoventilation (about 20% of CCHS babies have HSCR — Haddad syndrome), Mowat-Wilson, Goldberg-Shprintzen, Bardet-Biedl; 4–30% have another developmental disorder or syndrome " + r(1) + r(2)],
["Genetics", "RET is the main gene (coding mutations in 15–35% of sporadic and up to 50% of familial cases); EDNRB about 5%; activating RET mutations (2–3%) cause MEN2A (medullary thyroid cancer) " + r(1)],
["Recurrence", "Family risk rises with segment length — about 4% overall, up to 50% when the whole colon is involved " + r(2)],
["Prematurity", "Only about 5% of affected babies are born before 37 weeks " + r(1)]
])}` },
{ id: "patho", title: "How it makes children ill", html: `
${F.chart("Mechanism", [F.s("No ganglion cells in the distal bowel"), F.a, F.s("Segment stays contracted — no peristalsis, internal sphincter does not relax"), F.a, F.s("Stool and gas build up; proximal normal bowel dilates (megacolon)"), F.a, F.d("Stasis + dysbiosis + mucosal immune changes"), F.a, F.e("Enterocolitis (HAEC): sepsis, perforation, death")])}
<p>The longer the disease goes untreated, the greater the chance of enterocolitis ${r(2)}. Enterocolitis can still happen after a technically good pull-through — about 30% of children have at least one episode after surgery, mostly in the first few years ${r(1)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ERNICA 2020", "Other sources", "This guide"], [
["Contrast enema", "Recommended before surgery to guide the level; does not diagnose", "Merck: initial approach is barium enema and/or suction biopsy; never during enterocolitis " + r(2), "Biopsy confirms; enema for level, water-soluble contrast, never in suspected HAEC " + LB.int()],
["Timing of pull-through", "Elective, usually 2–3 months after diagnosis; no proven benefit in the neonatal period", "Some centres operate in the newborn period " + LB.exp("NOT READ"), "Follow the operating centre; washouts until then " + r(1)],
["Routine anal dilatations after surgery", "One calibration at 2–3 weeks (Hegar 12 from term to 6 months); routine serial dilatation does not prevent enterocolitis or stricture", "Older practice: daily dilatations for months " + LB.exp(), "Calibrate once; dilate only for a stricture " + r(1)],
["Probiotics", "Insufficient evidence — not routinely", "One RCT positive, one negative", "Not routinely " + r(1)],
["Prophylactic antibiotics", "May be considered for frequent recurrent HAEC; not proven", "APSA HAEC guideline " + LB.exp("NOT READ"), "Only for frequent recurrences " + r(1)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Age", "How it shows"], [
["Newborn", "No meconium in 24 hours (60% or more) — most fail to pass it in 48 hours; abdominal distension (more than 90%); vomiting (more than 85%), often bilious; dilated loops on plain X-ray " + r(1) + r(2)],
["Newborn on rectal examination", "Explosive, often foul-smelling gush of gas and stool when the finger or tube is withdrawn " + r(1)],
["Infant", "Constipation needing frequent help, poor weight gain, bouts of diarrhoea (ultrashort segment may cause only mild or intermittent symptoms) " + r(2)],
["Older child", "Lifelong constipation, no urge to defecate, poor appetite, empty rectum with stool higher up, 'blast sign' " + r(2)],
["Any age", "Enterocolitis may be the first presentation " + r(1)]
])}
<h3>The typical patient</h3>
<p>A 3-day-old boy at a district hospital has not passed meconium, has a tense swollen belly and has started to vomit green. Rectal examination releases a burst of foul gas and stool and the abdomen softens. Keep him nil by mouth with a nasogastric tube on free drainage, start IV fluids, give IV antibiotics if he looks unwell, and phone the paediatric surgeon at JDWNRH. Begin saline rectal washouts; arrange a rectal biopsy at the referral centre ${r(1)} ${r(4)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Meconium plug / small left colon syndrome", "Infant of a diabetic mother; settles after contrast enema — but biopsy if symptoms continue " + LB.exp()],
["Meconium ileus", "Cystic fibrosis; microcolon on enema " + LB.exp()],
["Anorectal malformation", "Abnormal or absent anus on inspection " + r(3)],
["Intestinal atresia, malrotation with volvulus", "Bilious vomiting in the first days — malrotation is an emergency " + r(4) + " " + LB.exp()],
["Hypothyroidism, sepsis, electrolyte disturbance (low potassium)", "Functional ileus " + LB.exp()],
["Functional constipation (older child)", "Starts after weaning or toilet training, faecal soiling, stool in the rectum " + LB.exp()],
["Necrotising enterocolitis", "Preterm, bloody stool, pneumatosis — HAEC can look similar " + r(1)]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Notes"], [
["Plain abdominal X-ray", "Dilated gas-filled loops (distal obstruction); in HAEC look for dilated loops, sawtooth mucosa, cut-off sign, pneumatosis " + r(1)],
["Rectal biopsy (diagnostic)", "Suction or open biopsy, equally accurate if enough submucosa; posterior or lateral wall at least 2 cm above the dentate line (or 3 cm from the anal opening); 2–3 suction samples; at least 3 mm across with one-third submucosa " + r(1)],
["Histology", "Any ganglion cells on H&E exclude HSCR; if none seen, calretinin and/or peripherin immunostaining; in HSCR calretinin is negative and acetylcholinesterase activity is increased. Ask for an experienced pathologist and external review if needed " + r(1)],
["Contrast enema", "Calibre change suggests the transition zone (most reliable in the rectosigmoid); best images just after evacuation; never in suspected enterocolitis " + r(1) + r(2)],
["Anorectal manometry", "Absent recto-anal inhibitory reflex — an indication to biopsy in older children " + r(1) + r(2)],
["Bloods", "FBC (leukocytosis, left shift in HAEC), electrolytes, blood culture if febrile " + r(1)],
["Genetics", "Consider RET testing in non-syndromic HSCR (trio testing); syndrome-specific testing if syndromic " + r(1)]
])}` },
{ id: "staging", title: "Enterocolitis score", html: `
<p>ERNICA suggests suspecting HAEC when there is explosive, foul-smelling diarrhoea and/or a Pastor score above 4 (sensitivity 84%, specificity 98%); above 10 is very specific (100%) but misses more (sensitivity 42%) ${r(1)}.</p>
<div class="calc" data-calc="haecscore"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. First hours (any hospital)</h3>
<ul>
<li>Airway, breathing, circulation; nil by mouth; nasogastric tube; IV fluids; refer ${r(4)}.</li>
<li>Saline rectal washouts with a soft rectal tube 1–3 times a day decompress the bowel in about 75% and allow feeding; parents can be trained to continue at home until surgery ${r(1)}.</li>
<li>If washouts fail (often long-segment disease), enterocolitis does not settle, or the bowel perforates: <b>stoma</b> — the safest empirical level is an ileostomy (proximal to a perforation), with a 'doughnut' biopsy at the stoma site ${r(1)}.</li>
</ul>
<h3>2. Definitive surgery (specialist centre)</h3>
<ul>
<li>Pull-through when the baby is stable, growing and decompressed — usually electively 2–3 months after diagnosis ${r(1)}.</li>
<li>Transanal endorectal pull-through (with or without laparoscopy) and Duhamel are most used; neither is proven better. Preserve the anal canal (start dissection 0.5–2 cm above the dentate line; avoid long muscle cuffs); transect at least 5–10 cm above the first normal biopsy ${r(1)}.</li>
<li>One dose of IV broad-spectrum antibiotic covering aerobes and anaerobes before surgery; may continue 24–48 hours ${r(1)}.</li>
<li>After surgery: feeds within 24–48 hours; early catheter removal; barrier creams for perianal rash; calibrate the anastomosis at 2–3 weeks ${r(1)}.</li>
</ul>
<h3>3. Enterocolitis (HAEC)</h3>
${tbl(["Severity", "Action"], [
["Mild: no dehydration or electrolyte upset, normal inflammatory markers", "Possibly outpatient: oral fluids ± oral metronidazole + rectal washouts, review promptly; admit if not improving; under 1 year — lower threshold to admit " + r(1)],
["All others", "Admit: IV fluid resuscitation, IV broad-spectrum antibiotics, saline washouts 2–3 times a day until well; monitor vital signs, fluid balance, urine output; abdominal X-ray; tell the colorectal surgical team; ICU if needed; switch to oral metronidazole when improving " + r(1)],
["Severe: explosive diarrhoea with poor perfusion, lethargy or dilated loops", "Admit urgently — sepsis and perforation risk " + r(1)],
["Recurrent or persistent HAEC / outlet obstruction", "Intersphincteric botulinum toxin under brief anaesthesia (62–89% improve; repeat every 3–6 months); gastroenterology review and endoscopy (IBD risk about 5-fold; faecal calprotectin) " + r(1)]
])}` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("sodium-chloride", "Sodium chloride 0.9%")} — for rectal washouts and fluid resuscitation ${r(3)}.</li>
<li>${D("metronidazole", "Metronidazole")} — oral 400 mg tablet and 5 mg/mL IV on the NEML; oral for mild HAEC or step-down ${r(1)} ${r(3)}.</li>
<li>IV broad-spectrum cover for HAEC — choose per local antibiogram, e.g. ${D("ampicillin", "ampicillin")} + ${D("gentamicin", "gentamicin")} + ${D("metronidazole", "metronidazole")}, or ${D("cefotaxime", "cefotaxime")} + metronidazole ${LB.loc()} ${LB.exp("REGIMEN NOT NAMED IN ERNICA")}.</li>
<li>Botulinum toxin (anal sphincter) — not found on the NEML 2025; specialist only ${r(3)}.</li>
<li>${D("lactulose", "Laxatives")} for constipation after pull-through; ${D("loperamide", "loperamide")} with a constipating diet for loose stools from fast transit ${r(1)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Down syndrome", "Commonest associated syndrome; more HAEC; continence often delayed " + r(1)],
["Long-segment / total colonic disease", "Washouts often fail — needs a stoma; higher family recurrence " + r(1) + r(2)],
["Premature babies", "Ganglion cells small and immature — calretinin staining helps " + r(1)],
["Late presenters (older children)", "Chronic constipation, failure to thrive — biopsy if absent RAIR or atypical history " + r(1)],
["Adolescents", "Plan transition to adult care from about 13–14 years " + r(1)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Biopsy-proven HSCR, waiting 6 weeks for surgery at the referral centre", "Teach parents daily saline washouts; feeds as tolerated; give clear advice on enterocolitis warning signs and where to go " + r(1)],
["Four-month-old after pull-through with explosive foul diarrhoea, fever and distension", "Pastor score; admit; IV fluids, IV antibiotics, washouts 2–3 times daily; X-ray; call the surgeon " + r(1)],
["Washouts do not relieve distension in a newborn", "Suspect long segment; ileostomy with stoma-site biopsy " + r(1)],
["Five-year-old still soiling after pull-through", "Evaluate (examination under anaesthesia, contrast enema); treat constipation first; bowel management programme if needed " + r(1)],
["Parents ask whether the next baby will be affected", "Genetic counselling; consider RET testing " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Enterocolitis — the commonest serious complication; risk factors: family history, long segment, Down syndrome, earlier episodes ${r(1)}.</li>
<li>Anastomotic stricture (up to 10.6% after endorectal pull-through, fewer after Duhamel), leak ${r(1)}.</li>
<li>Obstructive symptoms after surgery: stricture, Duhamel spur, rolled Soave cuff, twisted or transition-zone pull-through ${r(1)}.</li>
<li>Faecal incontinence and soiling; constipation; perianal excoriation ${r(1)}.</li>
<li>Bowel perforation before diagnosis; sepsis ${r(1)} ${r(2)}.</li>
<li>Later: inflammatory bowel disease, medullary thyroid cancer with activating RET mutations ${r(1)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Regular follow-up to adulthood by a team led by a paediatric surgeon: more often in the first year, then every 1–2 years ${r(1)}.</li>
<li>Track growth, nutrition and development; psychological and social support ${r(1)}.</li>
<li>Child of normal development not continent of stool by 4 years: evaluate (examination under anaesthesia ± manometry, contrast enema) ${r(1)}.</li>
<li>Intact anal canal: laxatives for a dilated, slow colon; constipating diet, loperamide, fibre for fast transit; then bowel management (daily enemas, antegrade continence enema) if needed ${r(1)}.</li>
<li>A named surgeon and written emergency instructions for every family ${r(1)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn with delayed meconium and distension", [F.s("Nil by mouth, NG tube, IV fluids; rectal examination"), F.a, F.d("Looks septic, explosive foul stool, very distended?"), F.a, F.b([["Yes", F.e("Treat as enterocolitis: IV antibiotics, fluids, washouts; urgent surgical call")], ["No", F.s("Saline washouts 1–3 times a day; refer")]]), F.a, F.s("Rectal biopsy ≥ 2 cm above dentate line (2–3 samples)"), F.a, F.d("Ganglion cells absent, calretinin negative?"), F.a, F.b([["Yes", F.ok("HSCR: washouts until elective pull-through (or stoma if they fail)")], ["No", F.s("HSCR excluded — look for other causes")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Calling delayed meconium 'normal' and sending the baby home", "Enterocolitis can be the next presentation", "Any term baby without meconium at 24–48 hours needs a cause " + r(1) + r(2)],
["Diagnosing from a contrast enema", "Enemas miss and mislead, especially above the rectosigmoid", "Biopsy confirms " + r(1)],
["Biopsy too low", "The normal last 1–2 cm has few ganglion cells", "At least 2 cm above the dentate line " + r(1)],
["Barium enema during enterocolitis", "Perforation risk", "Treat first " + r(2)],
["Ignoring diarrhoea after pull-through", "Enterocolitis presents as diarrhoea", "Score it and admit early " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is the classic triad?", "No meconium by 24 hours in a term baby, abdominal distension and bilious vomiting.")}
${qa("Intern/MO", "How do you decompress the bowel before surgery?", "Saline rectal washouts with a soft tube 1–3 times a day; stoma if they fail.")}
${qa("Specialist", "Where should a suction biopsy be taken?", "Posterior or lateral wall at least 2 cm above the dentate line, 2–3 samples with adequate submucosa.")}
${qa("Specialist", "Name two options for recurrent enterocolitis after pull-through.", "Intersphincteric botulinum toxin; consider prophylactic antibiotics; also gastroenterology review for IBD.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Kyrklund K, Sloots CEJ, de Blaauw I et al. ERNICA guidelines for the management of rectosigmoid Hirschsprung's disease. Orphanet J Rare Dis. 2020;15:164. doi:10.1186/s13023-020-01362-3.</li>
<li id="ref-2">Belkind-Gerson J. Hirschsprung disease. Merck Manual Professional Edition; reviewed Aug 2025.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.4.3 Intestinal obstruction.</li>
<li id="ref-5">SBS News. Melbourne scholarship helping paediatrician make life better in Bhutan (news report, undated); BBS. Bhutan's first conjoined twins in Australia for separation surgery (2018).</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["ERNICA 2020 guideline", "<span class='pass'>Checked</span>", "Full text read (Europe PMC)"],
["Merck Manual 2025", "<span class='pass'>Checked</span>", "Read"],
["Bhutan STG", "<span class='pass'>Checked</span>", "No Hirschsprung section; obstruction section used"],
["APSA HAEC guideline, StatPearls", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Pastor score items from ERNICA Table 8"],
["Images", "<span class='pass'>None</span>", "No suitable licensed image"]
], "qc")}` }
]
});
})();
