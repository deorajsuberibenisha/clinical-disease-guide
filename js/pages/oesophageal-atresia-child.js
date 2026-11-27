/* Oesophageal atresia and tracheo-oesophageal fistula — neonates. Batch E-9, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §12.4.6 Esophageal atresia; Merck Manual Professional 'Esophageal atresia' (Aug 2025, updated Sept 2025, which
   cites the ERNICA 2020 consensus and ESPGHAN-NASPGHAN 2016); NEML 2025 text. Not read (NCBI blocks automated access; journal paywalls): ERNICA
   EA consensus (Dingemann 2020), ESPGHAN-NASPGHAN EA guideline (Krishnan 2016), StatPearls; Gross type percentages and Spitz risk groups —
   marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "oesophageal-atresia-child",
title: "Oesophageal atresia and tracheo-oesophageal fistula — neonates",
subtitle: "A frothy, drooling newborn who chokes and turns blue with the first feed: pass a firm tube — if it stops, keep nil by mouth, suck the upper pouch continuously, keep the baby warm and head-up, and refer for surgery",
age: "Neonates", specs: ["neo", "nicu", "paeds", "surg", "resp"],
keywords: ["oesophageal atresia", "esophageal atresia", "EA", "tracheo-oesophageal fistula", "tracheoesophageal fistula", "TOF", "TEF", "H-type fistula", "VACTERL", "CHARGE", "polyhydramnios", "frothy secretions", "coiled tube", "Replogle tube", "upper pouch suction", "long-gap atresia", "Foker", "gastric transposition", "anastomotic stricture", "reflux after EA repair"],
related: ["cdh-child", "anorectal-child", "abdominal-wall-child", "chd-child", "neosepsis-child", "neotherm-child", "rds-child", "down-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In oesophageal atresia (EA) the oesophagus ends in a blind upper pouch, usually with an abnormal connection (fistula) between the lower oesophagus and the trachea. It is the commonest gut atresia — about 1 in 3,000–4,000 births — and up to half of babies have other anomalies ${r(2)}. Saliva and feeds pool in the pouch and spill into the lungs; stomach acid can reach the lungs through the fistula ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Polyhydramnios on scan; at birth excessive frothy secretions, choking or coughing and cyanosis with feeds, aspiration pneumonia; distended abdomen with a distal fistula ${r(1)} ${r(2)}.</p></div>
<div><h4>Confirm</h4><p>A firm radio-opaque tube cannot be passed into the stomach; X-ray shows it coiled in the upper pouch. Gas in the stomach means a distal fistula ${r(2)}.</p></div>
<div><h4>Before transfer</h4><p>Nil by mouth, warm, continuous suction of the upper pouch, IV fluids, head up; avoid bag-and-mask if possible ${r(1)} ${r(2)} ${LB.exp("BAG-MASK ADVICE NOT IN SOURCES READ")}.</p></div>
<div><h4>Look for</h4><p>VACTERL (about 20%) and CHARGE: echocardiogram, renal ultrasound, check the anus, spine and limbs ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG lists: keep the neonate warm, insert a nasogastric tube, nil by mouth and refer to the nearest higher centre ${r(1)}. Repair needs a paediatric surgeon, neonatal anaesthesia and NICU — in Bhutan that means JDWNRH, and very complex or long-gap cases may need referral abroad ${LB.loc()}. During transfer the most important thing is <b>continuous (or every few minutes) suction of the upper pouch</b> so saliva does not go into the lungs ${r(2)}. Omeprazole capsules and injection are on the NEML ${r(3)}.</p>`)}
` },
{ id: "overview", title: "The condition in brief", html: `${tbl(["Feature", "Detail"], [
["Frequency", "About 1 in 3,000–4,000 live births; the commonest gastrointestinal atresia " + r(2)],
["Types", "Five main types; most have a fistula. The commonest is EA with a distal tracheo-oesophageal fistula; pure EA without fistula (long gap) and H-type fistula without atresia are less common " + r(2) + " " + LB.exp("PERCENTAGES NOT READ")],
["Associated anomalies", "Up to 50%; VACTERL criteria met in about 20%; CHARGE syndrome " + r(2)],
["H-type fistula", "No atresia; may present late in infancy or childhood with recurrent aspiration pneumonia — reported even in adults " + r(2)],
["Outcome", "Primary anastomosis possible in about 80%; long-term motility problems in most " + r(2)]
])}` },
{ id: "patho", title: "How it makes babies ill", html: `
${F.chart("Mechanism", [F.s("Foregut fails to separate into trachea and oesophagus"), F.a, F.s("Blind upper pouch fills with saliva"), F.a, F.s("Overflow into larynx — choking, cyanosis, aspiration"), F.a, F.d("Distal fistula?"), F.a, F.e("Air enters stomach (distension); acid refluxes into the lungs — chemical pneumonitis")])}
<p>The distal oesophagus moves poorly even after a perfect repair (80–90%), which is why reflux, dysphagia and food sticking are common later ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "Merck 2025 (citing ERNICA, ESPGHAN)", "This guide"], [
["Tube", "Insert a nasogastric tube", "Tube to confirm, then continuous suction of the upper pouch", "Tube to confirm; then suction tube in the pouch " + r(1) + r(2)],
["Position", "—", "Prone, head up 30–40°, right side down, when monitoring is available", "Head-up; prone only with monitoring " + r(2)],
["Acid suppression", "—", "All neonates with EA treated for reflux (ESPGHAN)", "Follow the operating team " + r(2) + " " + LB.exp("ESPGHAN NOT READ DIRECTLY")],
["Contrast study", "—", "Only by an experienced radiologist at the surgical centre; aspirate contrast back", "Do not give contrast at the district hospital " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Stage", "Features"], [
["Antenatal", "Polyhydramnios (not specific); absent stomach bubble in fewer than half; occasionally a dilated upper pouch " + r(2)],
["First hours", "Excessive saliva, frothing, drooling; coughing, choking and cyanosis when fed " + r(1) + r(2)],
["With distal fistula", "Abdominal distension as air is forced into the stomach when the baby cries " + r(2)],
["Delayed diagnosis", "Aspiration pneumonia " + r(1) + r(2)],
["H-type", "Coughing with feeds and recurrent pneumonia in an older infant " + r(2)]
])}
<h3>The typical patient</h3>
<p>A term baby born after a pregnancy with polyhydramnios keeps blowing bubbles and has two choking spells with breastfeeding. A firm radio-opaque tube will not go further than the upper chest; X-ray shows it coiled in the neck and gas in the stomach — EA with a distal fistula. Stop feeds, place a tube in the pouch on suction, IV fluids, keep warm, check the anus and limbs, and arrange transfer to JDWNRH ${r(1)} ${r(2)}.</p>
<div class="calc" data-calc="neosurgprep" data-a="ea"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Tube curled in the mouth or pharynx (technical)", "Repeat with a firmer tube and X-ray " + LB.exp()],
["Laryngeal cleft, swallowing disorder", "Tube passes; aspiration on feeding " + LB.exp()],
["Choanal atresia (part of CHARGE)", "Cyanosis relieved by crying; nasal tube will not pass " + LB.exp()],
["Respiratory distress syndrome, pneumonia", "Tube passes into the stomach " + LB.exp()],
["CDH", "Bowel in the chest " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Notes"], [
["Firm radio-opaque NG/OG tube + chest and abdominal X-ray", "Diagnosis: tube stops in the upper pouch; gas below the diaphragm = distal fistula; gasless abdomen suggests pure atresia " + r(2) + " " + LB.exp("GASLESS ABDOMEN POINT NOT IN SOURCE")],
["Water-soluble contrast", "Only atypical cases, at the surgical centre, by an experienced radiologist; aspirate back — risk of chemical pneumonitis " + r(2)],
["Rigid bronchoscopy, oesophagram, CT/MRI", "Define the fistula and plan surgery " + r(2)],
["Echocardiogram", "Associated heart disease; also helps surgical planning " + r(2)],
["Renal ultrasound; spine and limb X-rays; anal inspection", "VACTERL screening " + r(2)],
["Blood glucose, sepsis screen if pneumonia", "Supportive " + LB.exp()]
])}` },
{ id: "staging", title: "Types", html: `
${tbl(["Type", "What it means"], [
["EA with distal fistula", "Commonest; gas in the stomach " + r(2) + " " + LB.exp("FREQUENCY NOT READ")],
["Pure EA (no fistula)", "Gasless abdomen; often a long gap " + r(2) + " " + LB.exp()],
["EA with proximal fistula, or both", "Uncommon; found at bronchoscopy " + r(2)],
["H-type fistula without atresia", "Late presentation " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Before surgery (any hospital → referral centre)</h3>
<ul>
<li>Keep warm; nil by mouth; IV fluids (parenteral nutrition at the surgical centre) ${r(1)} ${r(2)}.</li>
<li>Continuous suction of the upper pouch with a tube in the pouch to stop saliva going into the lungs ${r(2)}.</li>
<li>Position head-up; in NICU with monitoring: prone, head up 30–40°, right side down ${r(2)}.</li>
<li>Treat aspiration pneumonia; look for associated anomalies ${r(2)}.</li>
<li>If repair must wait (extreme prematurity, pneumonia, other anomalies): gastrostomy to decompress the stomach ${r(2)}.</li>
</ul>
<h3>2. Surgery (specialist centre)</h3>
<ul>
<li>When stable: ligate the fistula and join the oesophagus (extrapleural; thoracoscopic where possible); primary anastomosis in about 80% ${r(2)}.</li>
<li>Long gap: Foker traction (elongation 1–2 mm a day), or gastric transposition / colonic interposition ${r(2)}.</li>
</ul>
<h3>3. After surgery</h3>
<ul>
<li>Acid-suppressive therapy for reflux in all neonates with EA (ESPGHAN-NASPGHAN, as cited by Merck); fundoplication if medical treatment fails ${r(2)}.</li>
<li>Watch for leak and stricture; swallowing rehabilitation may help ${r(2)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("omeprazole", "Omeprazole")} — NEML 20 mg capsule and 40 mg injection; acid suppression after repair ${r(2)} ${r(3)}.</li>
<li>${D("ampicillin", "Ampicillin")} + ${D("gentamicin", "gentamicin")} — NEML; if aspiration pneumonia or sepsis is suspected (neonatal sepsis doses) ${LB.loc()}.</li>
<li>${D("dextrose", "Dextrose")} containing IV fluids while nil by mouth ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Preterm or very low birth weight", "Repair may be delayed; gastrostomy " + r(2)],
["Major heart disease", "Higher risk; echo before surgery " + r(2) + " " + LB.exp("SPITZ GROUPS NOT READ")],
["VACTERL / anorectal malformation together", "Coordinate both repairs " + r(2)],
["Older child with recurrent chest infections", "Think of H-type fistula " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Frothy baby at a BHU", "Nil by mouth, keep warm, tube to the pouch with frequent suction, refer " + r(1) + r(2)],
["Tube coiled; also no anal opening", "VACTERL — echo, renal scan, follow the anorectal plan too " + r(2)],
["Gasless abdomen on X-ray", "Probable pure (long-gap) EA — gastrostomy and delayed repair at a specialist centre " + r(2) + " " + LB.exp()],
["Two months after repair, the baby chokes on feeds and vomits", "Suspect anastomotic stricture or reflux — contact the surgeon " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Early: anastomotic leak and stricture (the commonest acute complications) ${r(2)}.</li>
<li>Recurrent fistula ${LB.exp("RATE NOT READ")}.</li>
<li>Poor distal oesophageal motility (80–90%), reflux (more than 40%), dysphagia ${r(2)}.</li>
<li>Tracheomalacia, recurrent chest infections ${LB.exp("NOT IN SOURCE READ")}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Long-term surgical and gastroenterology follow-up for reflux, stricture, feeding and growth ${r(2)}.</li>
<li>ESPGHAN-NASPGHAN recommends endoscopic surveillance into adulthood ${LB.exp("SCHEDULE NOT READ")}.</li>
<li>Food bolus obstruction in a child with a repaired EA needs urgent review ${LB.exp()}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn with frothing or choking on feeds", [F.s("Stop feeds; pass a firm radio-opaque tube"), F.a, F.d("Tube reaches the stomach?"), F.a, F.b([["Yes", F.s("Not EA — look for other causes (H-type later)")], ["No", F.s("X-ray: tube in upper pouch")]]), F.a, F.s("Pouch suction, warm, IV fluids, head up; VACTERL check"), F.a, F.e("Refer to JDWNRH paediatric surgery")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Trying another feed", "Aspiration pneumonia makes surgery riskier", "Nil by mouth once suspected " + r(1) + r(2)],
["Soft tube that coils in the mouth", "False reassurance or false diagnosis", "Firm tube and X-ray " + r(2)],
["Contrast swallow at the district hospital", "Chemical pneumonitis", "Leave to the surgical centre " + r(2)],
["Missing the other anomalies", "Heart or anorectal defects change the plan", "VACTERL screen " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How is EA confirmed at birth?", "A firm tube will not pass into the stomach and an X-ray shows it coiled in the upper pouch.")}
${qa("Intern/MO", "What does gas in the stomach mean?", "A distal tracheo-oesophageal fistula.")}
${qa("Specialist", "What proportion of infants with EA meet VACTERL criteria?", "About 20%.")}
${qa("Specialist", "Options for long-gap EA?", "Foker traction elongation, gastric transposition or colonic interposition.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.4.6 Esophageal atresia.</li>
<li id="ref-2">Belkind-Gerson J. Esophageal atresia. Merck Manual Professional Edition; reviewed Aug 2025 (cites Dingemann C et al., ERNICA consensus, Eur J Pediatr Surg 2020;30:326–336, doi:10.1055/s-0039-1693116; Krishnan U et al., ESPGHAN-NASPGHAN guidelines, J Pediatr Gastroenterol Nutr 2016;63:550–570, doi:10.1097/MPG.0000000000001401).</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §12.4.6", "<span class='pass'>Checked</span>", "Read"],
["Merck Manual 2025", "<span class='pass'>Checked</span>", "Read"],
["ERNICA 2020, ESPGHAN 2016 (direct)", "<span class='unv'>Not read</span>", "Cited through Merck; marked"],
["Type percentages, Spitz classification", "<span class='unv'>Not read</span>", "Left out"],
["Calculator", "<span class='pass'>Checked</span>", "Transfer checklist only"],
["Images", "<span class='pass'>None</span>", "No suitable licensed image"]
], "qc")}` }
]
});
})();
