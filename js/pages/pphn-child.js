/* Persistent pulmonary hypertension of the newborn — full depth (Thin-page Round 6, 27 Nov 2026).
   Sources read directly: Chojnacka et al., Biomedicines 2025 PPHN review (PMC12561312 — OI bands, SpO₂ 93–97% / PaO₂ 55–80
   target, Table 4 drug doses incl. iNO, sildenafil IV/oral, milrinone, bosentan, PGE1); Cochrane review of sildenafil for neonatal
   pulmonary hypertension 2017 (abstract and main results); AHA/ATS paediatric pulmonary hypertension guideline 2015 (citation;
   full text not accessible); Bhutan Hospital IMNCI 2024 (oxygen, transfer criteria, pre-/post-ductal SpO₂ via resuscitation
   chapter); Bhutan NEML 2025 (no sildenafil, milrinone, inhaled nitric oxide or PGE1; adrenaline, noradrenaline, dopamine,
   dobutamine, magnesium sulfate listed). */
registerPage({
id: "pphn-child",
title: "Persistent Pulmonary Hypertension of the Newborn (PPHN)",
subtitle: "A term or near-term baby who stays blue despite oxygen, with saturations swinging on handling and a right-hand reading clearly higher than the foot: open the lungs gently, avoid both hypoxia and hyperoxia, keep blood pressure up, correct acidosis, sedate, treat the cause — and use sildenafil where nitric oxide is unavailable",
age: "Newborns (term / near-term)", specs: ["neo", "nicu", "cardio", "resp"],
keywords: ["PPHN", "persistent pulmonary hypertension of the newborn", "persistent fetal circulation", "hypoxaemic respiratory failure", "pre-ductal post-ductal saturation", "differential cyanosis", "oxygenation index", "meconium aspiration", "inhaled nitric oxide", "iNO", "sildenafil", "milrinone", "ECMO", "congenital diaphragmatic hernia", "echocardiography"],
related: ["asphyxia-child", "rds-child", "neosepsis-child", "chd-child", "neoshock-child", "cdh-child", "cpap-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">At birth the lung blood vessels should relax so blood flows through the lungs. In PPHN they stay tight, and blood bypasses the lungs through the duct and the foramen ovale, so the baby stays blue. Hypoxia, acidosis, cold, pain and handling all tighten the vessels further. Many cases follow meconium aspiration, sepsis or asphyxia.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Severe or labile hypoxaemia; <b>pre-ductal (right hand) SpO₂ 5% or more higher than post-ductal (foot)</b>.</p></div>
<div><h4>Confirm</h4><p>Echocardiography: high pulmonary pressure, right-to-left shunt — and <b>exclude cyanotic heart disease</b>.</p></div>
<div><h4>Targets</h4><p>Pre-ductal SpO₂ <b>about 90–97%</b>, PaO₂ 55–80 mmHg; normal pH and CO₂ — avoid both hypoxia and hyperoxia.</p></div>
<div><h4>Support</h4><p>Gentle ventilation with optimal lung volume, surfactant for MAS/RDS, blood pressure support, sedation, minimal handling.</p></div>
<div><h4>Vasodilator</h4><p>Inhaled nitric oxide 20 ppm where available; ${dr("sildenafil", "sildenafil")} where it is not — it reduced deaths in resource-limited trials (Cochrane).</p></div>
<div><h4>Severity</h4><p>Oxygenation index (OI): under 15 mild, 15–25 moderate, <b>over 25 severe</b>, 40 or more very severe.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Inhaled nitric oxide and ECMO are not available in Bhutan, and sildenafil, milrinone and prostaglandin E1 are not on the NEML 2025 — sildenafil must be obtained by the NICU through special procurement. Adrenaline, noradrenaline, dopamine and dobutamine are on the NEML for blood-pressure support. Babies with suspected PPHN need ventilation and echocardiography at the JDWNRH NICU; severe respiratory distress needing ventilator support is on the IMNCI transfer list. Very severe, refractory cases may need early discussion about referral outside Bhutan. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes", html: `
${tbl(["Mechanism", "Examples"], [
["<b>Maladaptation</b> (normal vessels that fail to relax)", "Meconium aspiration, pneumonia or sepsis (especially group B strep), perinatal asphyxia, RDS, hypothermia, hypoglycaemia, polycythaemia"],
["<b>Maldevelopment</b> (thick-walled vessels)", "Post-term birth, chronic fetal hypoxia, maternal NSAIDs late in pregnancy, maternal SSRIs (small risk)"],
["<b>Underdevelopment</b> (too few vessels)", "Congenital diaphragmatic hernia, pulmonary hypoplasia (oligohydramnios)"],
["<b>Idiopathic</b>", "'Black lung' PPHN — clear lungs on X-ray, severe hypoxaemia"],
["<b>Associated</b>", "Caesarean birth without labour, alveolar capillary dysplasia (rare, fatal), genetic surfactant disorders"]])}
<p>PPHN mainly affects term and late-preterm babies; it also complicates bronchopulmonary dysplasia in preterm infants later.${r(1)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Persistent pulmonary hypertension", [F.s("Lung vascular resistance stays high after birth"), F.a, F.s("Right-to-left shunt across the duct and foramen ovale"), F.a, F.e("Severe hypoxaemia; post-ductal (foot) saturation lower"), F.a, F.e("Hypoxia, acidosis, cold and stress tighten vessels further — vicious cycle"), F.a, F.e("Right heart strain, low cardiac output, shock"), F.a, F.ok("Open lungs + normal pH + oxygen to target + BP support + vasodilator break the cycle")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Older practice", "Current evidence", "This guide (Bhutan)"], [
["Hyperventilation and alkalosis", "Deliberate low CO₂ and alkaline pH", "Harmful — brain injury and hearing loss; aim for normal pH and CO₂", "Normal pH 7.35–7.45, PaCO₂ 40–50 mmHg"],
["Oxygen", "100% oxygen for everyone", "Hyperoxia makes vessels less responsive; target pre-ductal SpO₂ low to mid-90s", "SpO₂ about 90–97%; wean FiO₂ when above"],
["First-line vasodilator", "iNO", "iNO in high-income units (indicated at OI 25 or more, AHA/ATS); sildenafil reduced deaths where iNO was unavailable (Cochrane: RR 0.20, NNT 3)", "Sildenafil (iNO not available)"],
["Sodium bicarbonate infusions", "To alkalinise", "No benefit; avoid", "Only to correct severe metabolic acidosis once ventilation is adequate"],
["Magnesium sulfate", "Used as vasodilator", "Weak evidence; hypotension", "Not routinely"]])}
<p>Cochrane 2017: five trials, 166 infants, three in resource-limited settings; sildenafil versus placebo reduced mortality (RR 0.20, 95% CI 0.07–0.56) and improved oxygenation, with no important side effects reported — low to very low certainty.${r(2)} OI bands and targets from the 2025 review.${r(1)}</p>
` },

{ id: "presentation", title: "Clinical features", html: `
<ul><li>Cyanosis and respiratory distress within hours of birth, out of proportion to the lung findings.</li><li><b>Labile</b> saturations — big drops with handling, crying, suction.</li><li><b>Differential cyanosis</b>: right hand SpO₂ 5% or more above the foot.</li><li>Loud single second heart sound; tricuspid regurgitation murmur.</li><li>Signs of the cause: meconium staining, sepsis, asphyxia, scaphoid abdomen (CDH).</li></ul>
<h3>The typical patient</h3>
<p>Dorji, 3.4 kg, born at 41 weeks through thick meconium, is ventilated at the NICU with FiO₂ 100% and mean airway pressure 14 cmH₂O. Post-ductal PaO₂ is 45 mmHg; right-hand SpO₂ 95%, foot 84%. <b>PPHN with meconium aspiration</b>: OI = 100 × 14 ÷ 45 = 31 (severe). Surfactant, sedation and morphine, minimal handling, pH kept 7.38, adrenaline infusion for BP, echo confirms pulmonary hypertension with a structurally normal heart, and oral sildenafil 1 mg/kg 6-hourly by NG tube is started.</p>
` },

{ id: "ddx", title: "What else it could be", html: `
${tbl(["Condition", "Clue", "How to tell"], [
["<b>Cyanotic congenital heart disease</b> (TGA, TAPVD, critical pulmonary stenosis)", "Cyanosis with little distress; may be similar pre/post SpO₂ (or reversed in TGA)", "Echo — must be done before calling it PPHN"],
["Severe lung disease alone", "Hypoxaemia that improves with better lung inflation", "No ductal gap; echo pressures normal"],
["Pneumothorax", "Sudden worsening", "Transillumination, X-ray"],
["Sepsis with shock", "Poor perfusion, low BP", "Often co-exists — treat both"],
["Congenital diaphragmatic hernia", "Scaphoid abdomen, bowel in chest", "X-ray"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["Pre-ductal (right hand) and post-ductal (foot) SpO₂", "A gap of 5% or more suggests ductal right-to-left shunt"],
["Arterial blood gas (pre-ductal right radial if possible)", "PaO₂ for OI; pH and CO₂ targets"],
["Chest X-ray", "MAS, RDS, pneumonia, CDH, pneumothorax; clear 'black' lungs in idiopathic PPHN"],
["<b>Echocardiography</b>", "Confirms PPHN (tricuspid jet, septal flattening, shunts), excludes heart disease, assesses ventricular function"],
["Blood culture, CRP, full blood count", "Sepsis; polycythaemia"],
["Glucose, calcium, electrolytes", "Correct anything low"],
["Hyperoxia test (100% oxygen, compare PaO₂)", "Rarely needed where echo is available"]])}
` },

{ id: "staging", title: "Oxygenation index and ductal shunt tool", html: `
<p>OI = FiO₂ (%) × mean airway pressure (cmH₂O) ÷ PaO₂ (mmHg). Enter values from a ventilated baby, and pre/post-ductal saturations.</p>
<div class="calc" data-calc="pphnoi"></div>
` },

{ id: "manage", title: "Management step by step", html: `
<h3>1. General care</h3>
<ul><li>Minimal handling, quiet, dark; cluster care; avoid unnecessary suction.</li><li>Normal temperature, glucose and calcium; correct anaemia and polycythaemia.</li><li>Sedation and analgesia on the ventilator (morphine or fentanyl); avoid routine muscle paralysis.</li><li>Treat the cause: antibiotics for possible sepsis (ampicillin + gentamicin); surfactant for MAS or RDS.</li></ul>
<h3>2. Lungs</h3>
<ul><li>Ventilate to an optimal lung volume — about 8–9 posterior ribs on X-ray; avoid over-inflation (which squeezes lung vessels).</li><li>Target pH 7.35–7.45 and PaCO₂ 40–50 mmHg; <b>no hyperventilation</b>.</li><li>Oxygen to pre-ductal SpO₂ about 90–97% (PaO₂ 55–80 mmHg); wean FiO₂ when above target.</li></ul>
<h3>3. Circulation</h3>
<ul><li>Keep systemic BP normal to high-normal to reduce the shunt: fluid 10 mL/kg if under-filled, then ${dr("adrenaline_inf", "adrenaline")} 0.05–0.3 µg/kg/min or ${dr("noradrenaline")} 0.05–0.5 µg/kg/min; dopamine is an alternative.</li><li>Milrinone (not on NEML) may help when BP is adequate and ventricles are poor — NICU specialist only.</li></ul>
<h3>4. Pulmonary vasodilators</h3>
<ul><li><b>Inhaled nitric oxide</b> 20 ppm (where available) for OI 25 or more.</li><li><b>Sildenafil</b> where iNO is unavailable or as an add-on: oral 0.5–1 mg/kg 6–8-hourly by NG tube, increasing up to 2 mg/kg 6-hourly; IV 0.4 mg/kg over 3 h then 0.067 mg/kg/h (1.6 mg/kg/day). Watch BP.</li></ul>
<h3>5. Refractory PPHN</h3>
<ul><li>OI 40 or more despite full treatment usually means ECMO elsewhere; ECMO is not available in Bhutan. Discuss honestly with the family and with referral centres early.</li></ul>
<h3>6. Weaning</h3>
<ul><li>Wean FiO₂ first, then ventilator pressures, then sildenafil slowly over days once stable; sudden withdrawal of iNO causes rebound.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine", "Dose", "Notes"], [
[dr("sildenafil"), "Oral 0.5–1 mg/kg 6–8-hourly, up to 2 mg/kg 6-hourly; IV 0.4 mg/kg over 3 h then 0.067 mg/kg/h", "Not on NEML. Hypotension (worse IV), V/Q mismatch. Doses: drug card (BNFc) and 2025 review agree"],
["Inhaled nitric oxide", "20 ppm", "Not available in Bhutan; methaemoglobin monitoring"],
[dr("adrenaline_inf", "Adrenaline"), "0.05–0.3 µg/kg/min", "BP support (NEML)"],
[dr("noradrenaline"), "0.05–0.5 µg/kg/min", "BP support (NEML)"],
["Milrinone", "0.2–1 µg/kg/min infusion (no load)", "Not on NEML; hypotension — NICU only"],
["Surfactant", "Poractant 200 mg/kg", "MAS, RDS — not on NEML"],
["Morphine / fentanyl", "Per NICU protocol", "Sedation and analgesia on the ventilator"],
[dr("ampicillin"), "50 mg/kg 12-hourly (first week)", "Possible sepsis (Bhutan IMNCI), with gentamicin 4 mg/kg daily"]])}
<p>Drug doses from the 2025 review Table 4${r(1)} and the existing sildenafil card; efficacy from Cochrane 2017.${r(2)}</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Congenital diaphragmatic hernia</b>", "Intubate at birth (no bag-mask), gastric tube, gentle ventilation accepting pre-ductal SpO₂ 80–95% early on; PPHN is the main cause of death — see CDH page"],
["<b>Meconium aspiration</b>", "Surfactant, watch for pneumothorax; PPHN common"],
["<b>Preterm babies</b>", "Early PPHN less common; later pulmonary hypertension with BPD needs echo screening"],
["<b>After asphyxia</b>", "Do not cool (HELIX); keep normal temperature"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["District hospital: blue baby, SpO₂ gap", "Oxygen, warmth, glucose, antibiotics, avoid handling; bag-mask or CPAP; urgent NICU transfer with an escort who can ventilate"],
["No echo available", "Treat as PPHN if pre/post-ductal gap and lung disease fit, but transfer for echo — cyanotic heart disease must be excluded"],
["Sildenafil not in stock", "Contact the JDWNRH NICU pharmacy; continue full supportive care"],
["OI over 40, no ECMO", "Maximise treatment; honest discussion with the family; palliative care if appropriate"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Death — still significant in severe PPHN.</li><li>Air leaks (pneumothorax) from ventilation and MAS.</li><li>Neurodevelopmental impairment and <b>sensorineural hearing loss</b>.</li><li>Chronic lung disease.</li><li>Effects of shock: kidney injury, NEC.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Hearing test before discharge and again in infancy (hearing loss may be progressive).</li><li>Developmental follow-up to 2 years.</li><li>Echo follow-up if pulmonary pressures were still high at discharge.</li></ul>
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Meconium aspiration", src: "images/mas-xray.jpg", mod: "Chest radiograph (AP)", ctx: "Term newborn with meconium aspiration — a common cause of PPHN", loc: "Both lungs", find: "Patchy, coarse opacities with areas of over-inflation", interp: "Meconium aspiration syndrome; watch for PPHN and pneumothorax", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Mekoniumaspiration_bei_Neugeborenen_im_Roentgenbild_0W_-_CR_ap_-_001.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Term baby, severe hypoxaemia", [F.s("Pre- and post-ductal SpO₂; oxygen; warmth; glucose; antibiotics"), F.a, F.d("Gap 5% or more, or labile SpO₂?"), F.a, F.e("Ventilate to optimal lung volume; surfactant for MAS/RDS; sedation"), F.a, F.e("Echo: PPHN confirmed, heart disease excluded"), F.a, F.e("pH 7.35–7.45; SpO₂ 90–97%; BP support (adrenaline/noradrenaline)"), F.a, F.d("OI 25 or more?"), F.a, F.b([["Yes", F.e("iNO if available; sildenafil (Bhutan)")], ["No", F.ok("Continue supportive care; wean slowly")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Only one saturation probe", "Ductal shunt missed", "Right hand and a foot"],
["Hyperventilating to make the baby pink", "Brain injury, hearing loss", "Normal pH and CO₂"],
["Running 100% oxygen when SpO₂ is 100%", "Hyperoxia injury, less vessel response", "Wean to target"],
["Frequent handling and suction", "Each crisis worsens the cycle", "Cluster care, sedation"],
["Calling it PPHN without an echo", "Cyanotic heart disease missed", "Echo before or soon after starting treatment"],
["Ignoring low BP", "Shunt increases", "Keep BP normal to high-normal"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Why is the foot saturation lower than the right hand in PPHN?", "Deoxygenated blood shunts right-to-left through the ductus arteriosus, which joins the aorta after the arteries to the right arm.")}
${qa("Student", "Name three common causes of PPHN.", "Meconium aspiration, sepsis/pneumonia, perinatal asphyxia (also CDH, idiopathic).")}
${qa("Intern/MO", "Calculate OI: FiO₂ 80%, MAP 12, PaO₂ 40.", "OI = 80 × 12 ÷ 40 = 24 (moderate).")}
${qa("Intern/MO", "What must be excluded by echo before treating as PPHN?", "Cyanotic congenital heart disease (e.g. TGA, TAPVD).")}
${qa("Specialist", "What does Cochrane say about sildenafil for PPHN?", "Versus placebo it reduced mortality (RR 0.20; NNT 3) in small trials mainly from resource-limited settings without iNO — low-certainty evidence.")}
${qa("Specialist", "Why avoid hyperventilation?", "Hypocapnia and alkalosis reduce cerebral blood flow and are linked to brain injury and sensorineural hearing loss.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Chojnacka K, Singh Y, Gahlaut S, et al. Persistent pulmonary hypertension of the newborn: a pragmatic review of pathophysiology, diagnosis, and advances in management. Biomedicines 2025;13(10):2332. <a href="https://doi.org/10.3390/biomedicines13102332" target="_blank" rel="noopener">doi:10.3390/biomedicines13102332</a></li>
<li id="ref-2">Kelly LE, Ohlsson A, Shah PS. Sildenafil for pulmonary hypertension in neonates. Cochrane Database Syst Rev 2017;(8):CD005494. <a href="https://doi.org/10.1002/14651858.CD005494.pub4" target="_blank" rel="noopener">doi:10.1002/14651858.CD005494.pub4</a></li>
<li id="ref-3">Abman SH, Hansmann G, Archer SL, et al. Pediatric pulmonary hypertension: guidelines from the American Heart Association and American Thoracic Society. Circulation 2015;132(21):2037–2099. <a href="https://doi.org/10.1161/CIR.0000000000000329" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000000329</a></li>
<li id="ref-4">Lakshminrusimha S, Keszler M. Persistent pulmonary hypertension of the newborn. NeoReviews 2015;16(12):e680–e692. <a href="https://doi.org/10.1542/neo.16-12-e680" target="_blank" rel="noopener">doi:10.1542/neo.16-12-e680</a></li>
<li id="ref-5">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024; National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["2025 PPHN review", "<span class='pass'>Read directly</span>", "PMC full text: OI bands, targets, Table 4 doses"],
["Cochrane 2017", "<span class='pass'>Read directly</span>", "Abstract and main results"],
["AHA/ATS 2015", "<span class='unv'>Not read</span>", "Full text not accessible; iNO at OI 25+ stated from the 2025 review's indication column"],
["Two-source doses", "<span class='pass'>Checked</span>", "Sildenafil: drug card (BNFc) + 2025 review. Milrinone: review only. Inotropes: neonatal shock page"],
["Ventilation targets (pH, CO₂, lung volume)", "<span class='unv'>Not read</span>", "Standard practice from Lakshminrusimha; original not re-read"],
["NEML 2025", "<span class='pass'>Checked</span>", "No sildenafil, milrinone, iNO, PGE1"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "pphnoi"]], "qc")}` }
]
});
