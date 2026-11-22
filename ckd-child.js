/* Chronic Kidney Disease — children and adolescents */
registerPage({
id: "ckd-child",
title: "Chronic Kidney Disease — Children & Adolescents",
subtitle: "CAKUT, growth, blood pressure, bone health, anaemia, school and the move to adult care",
age: "Children & adolescents", specs: ["paeds", "neph", "neo", "uro"],
keywords: ["paediatric CKD", "pediatric chronic kidney disease", "CAKUT", "renal hypoplasia", "dysplasia", "posterior urethral valves", "reflux nephropathy", "growth failure", "renal rickets", "growth hormone", "Schwartz", "CKiD", "steroid-resistant nephrotic syndrome", "FSGS", "nephronophthisis", "transition", "child dialysis", "child kidney transplant"],
related: ["ckd-adult", "aki-child", "aki-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In children, CKD is mostly something they are born with. It threatens growth, bones, brain development and schooling as much as the kidneys. Good care is about helping the child grow, learn and arrive at adulthood with as much kidney function as possible.</p>
<div class="glance">
<div><h4>What it is</h4><p>Same KDIGO definition as adults, but an eGFR <b>under 90</b> is flagged as low in children over 2. Newborns with obvious kidney disease do not wait 3 months.</p></div>
<div><h4>Main causes</h4><ul><li><b>CAKUT</b>: hypodysplasia, posterior urethral valves, reflux nephropathy</li><li>Glomerular: steroid-resistant nephrotic syndrome (FSGS)</li><li>Inherited: nephronophthisis, Alport, cystinosis, polycystic disease</li></ul></div>
<div><h4>How it shows</h4><p>Poor growth, polyuria and thirst, bedwetting, pallor, bowed legs (rickets), high BP, recurrent UTI, or found on a scan or urine test.</p></div>
<div><h4>Key tests</h4><p>Bedside Schwartz eGFR (height ÷ creatinine), first-morning urine ACR <b>and</b> PCR, BP centile, growth chart, kidney and bladder ultrasound.</p></div>
<div><h4>Treat</h4><ul><li>Growth and nutrition first: <b>do not restrict protein</b></li><li>BP to MAP ≤50th centile (ACE inhibitor/ARB first)</li><li>Salt and water for polyuric CAKUT</li><li>Correct acidosis, bone and anaemia</li></ul></div>
<div><h4>Refer</h4><p>Sustained ACR ≥3 mg/mmol or PCR ≥20 mg/mmol, persistent haematuria, any sustained eGFR fall, hypertension, CAKUT or obstruction, recurrent UTI, known or suspected CKD.</p></div>
</div>
<div class="calc" data-calc="schwartz"></div>
` },

{ id: "overview", title: "Definition, causes and who is at risk", html: `
<h3>Definition and what is special in children (KDIGO 2024)</h3>
<ul><li>Abnormal kidney structure or function for more than 3 months with health implications. <b>For newborns with clear kidney disease, do not wait 3 months.</b>${r(1)}</li>
<li>An eGFR <b>under 90 mL/min/1.73 m²</b> can be flagged as \"low\" in children and adolescents over 2 years (PP 1.2.3.5). Children should have excellent kidney function, and a reduced GFR may worsen during growth spurts.</li>
<li>Under 2 years, GFR is still maturing: use age-specific normal values, not adult staging.</li>
<li>Albuminuria/proteinuria: ACR ≥30 mg/g (3 mg/mmol) or PCR ≥200 mg/g (20 mg/mmol) on a first-morning sample, confirmed.</li>
<li>Estimate GFR with equations validated in children (PP 1.2.4.3). Use a <b>cystatin C-based</b> equation when muscle mass is low (e.g. neuromuscular disease), because creatinine-based eGFR will be falsely high.</li></ul>

<h3>How common is it?</h3>
<ul><li>The Italian ItalKid registry (children under 20 with creatinine clearance under 75) found an incidence of about <b>12 per million children</b> per year and a prevalence of about <b>75 per million</b> (ItalKid). True rates in South Asia are unknown and probably higher, with late diagnosis.${r(6)}</li>
<li>Young people with kidney failure are more likely than adults to have a <b>genetic</b> cause (KDIGO 2024).</li>
<li><b>Bhutan:</b> no published paediatric CKD data were found. ${LB.bt("EVIDENCE GAP")}</li></ul>

<h3>Causes</h3>
${tbl(["Group", "Examples", "Typical features"], [
["<b>CAKUT</b> (about half of childhood CKD)", "Renal hypoplasia/dysplasia, <b>posterior urethral valves</b>, reflux nephropathy, PUJ/VUJ obstruction, prune belly, neurogenic bladder (spina bifida)", "Antenatal hydronephrosis, UTIs, <b>polyuria and salt wasting</b>, slow progression, often normal BP early"],
["Glomerular", "Steroid-resistant nephrotic syndrome (FSGS), lupus, IgA nephropathy and IgA vasculitis, membranoproliferative/C3 GN, sequelae of HUS", "Proteinuria, haematuria, hypertension, oedema; faster decline; more common after age 5"],
["Inherited", "Nephronophthisis, Alport syndrome, ARPKD and ADPKD, cystinosis, primary hyperoxaluria, congenital nephrotic syndrome", "Family history, consanguinity, deafness or eye signs (Alport), Fanconi syndrome (cystinosis), stones (hyperoxaluria)"],
["Acquired", "After AKI (HUS, asphyxia, cardiac surgery), preterm birth and low birth weight", "Known history"]])}
<h3>Risk factors</h3>
${tbl(["Risk factor", "Why"], [["Antenatal hydronephrosis or oligohydramnios", "Marks CAKUT and lung–kidney developmental problems"], ["Prematurity and low birth weight", "Fewer nephrons; hyperfiltration later in life"], ["Recurrent febrile UTIs, especially with reflux", "Scarring"], ["Family history of kidney disease, deafness or consanguinity", "Genetic disease"], ["Previous AKI (HUS, PICU)", "Incomplete recovery"], ["Obesity and type 2 diabetes in adolescents", "Hyperfiltration, early diabetic kidney disease"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("How CKD affects a growing child", [
F.b([
["Congenital (CAKUT)", F.s("Hypodysplasia, valves, reflux: too few nephrons from birth")],
["Glomerular / inherited", F.s("FSGS, nephronophthisis, Alport, cystinosis")]]), F.a,
F.s("Remaining nephrons hyperfilter; demand rises with growth, especially at <b>puberty</b>"), F.a,
F.s("<b>Tubular dysfunction</b>: cannot concentrate urine or keep sodium and bicarbonate"), F.a,
F.d("Why growth fails"), F.a,
F.b([
["Fluid and salt", F.e("Polyuria, salt wasting, dehydration")],
["Metabolic", F.e("Acidosis, CKD-MBD, rickets, anaemia")],
["Hormonal", F.e("Growth hormone resistance; poor appetite and malnutrition")]]), F.a,
F.ok("Correct salt, water, acidosis, bone and nutrition first; growth hormone if still short")])}
<ol class="chain">
<li><b>Too few nephrons from the start</b> (hypodysplasia), or nephron loss from obstruction, reflux scarring or glomerular disease.</li>
<li><b>Remaining nephrons hyperfilter</b> (as in adults). In a growing child this load rises with body size, especially at puberty, when the kidney cannot grow its nephron number to keep up. This is why kidney function often falls in adolescence (KDIGO: monitor more often during puberty).</li>
<li><b>Tubular dysfunction dominates in CAKUT:</b> the child cannot concentrate urine or hold on to sodium and bicarbonate, causing polyuria, salt wasting, dehydration and acidosis. Low sodium and acidosis both slow growth.</li>
<li><b>Growth failure has several causes:</b> poor appetite and vomiting, acidosis, salt depletion, renal osteodystrophy, anaemia, and <b>resistance to growth hormone</b> (low free IGF-1).</li>
<li><b>Bone disease:</b> the same phosphate–FGF23–calcitriol–PTH cascade as adults, but on growing bones it produces rickets, bowing, slipped epiphyses and fractures.</li>
<li><b>Brain:</b> uraemia, anaemia, hypertension and missed school affect neurodevelopment and learning, more so the younger the child.</li></ol>
<h3>Natural history</h3>
<p>CAKUT often progresses slowly over years; glomerular disease often faster. Many children with CAKUT reach kidney failure in adolescence or early adulthood. The ESCAPE trial showed that <b>tighter BP control (24-hour MAP under the 50th centile) on an ACE inhibitor slowed progression</b> compared with conventional targets.${r(3)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Positions", "This guide"], [
["BP target", "KDIGO 2024: 24-h MAP ≤50th centile by ABPM (2C), or office SBP 50th–75th centile if ABPM unavailable · ICMR 2026: BP under 90th centile, and under 120/80 in adolescents over 13 · AAP 2017: in children with CKD and hypertension, 24-hour MAP under the 50th centile by ABPM", "Aim for office SBP at the 50th–75th centile measured properly. ABPM is rarely available in Bhutan, so use careful repeated auscultatory readings. The tighter KDIGO target is supported by ESCAPE. " + LB.loc() + ""],
["eGFR equation", "KDIGO 2024: use equations validated in comparable populations (does not name one) · ICMR 2026: modified (bedside) Schwartz · CKiD U25 (2021) is widely recommended by paediatric nephrologists", "Use bedside Schwartz (simple, ICMR-endorsed). Use CKiD U25 where an online calculator and enzymatic creatinine are available, especially for adolescents near transfer, since it carries over smoothly to adult equations"],
["Protein intake", "KDIGO 2024: do not restrict; aim for the upper end of normal for age in G2–G5 · Adult advice of 0.8 g/kg does not apply", "Never apply adult protein restriction to children"],
["SGLT2 inhibitors", "KDIGO 2024: \"may be considered in older children\" (no paediatric outcome trials)", "Specialist decision only, mostly adolescents with proteinuric CKD"],
["Calcium-based binders", "Adults: restrict (KDIGO 2017) · Children: calcium is needed for bone growth, so calcium-based binders are often first-line in practice", "Use calcium carbonate, keeping calcium in the age-appropriate range; specialist supervision"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Mechanism", "Significance"], [
["<b>Poor growth</b>, crossing centiles downward", "Malnutrition, acidosis, salt loss, bone disease, GH resistance", "Often the first sign; plot height and weight at every visit"],
["Polyuria, polydipsia, nocturia, secondary enuresis", "Concentrating defect (CAKUT, nephronophthisis)", "Risk of rapid dehydration in illness"],
["Poor feeding, vomiting in infants", "Uraemia, salt loss, gastro-oesophageal reflux", "May need tube feeds"],
["Pallor, tiredness, poor school performance", "Anaemia, uraemia", "Ask about school"],
["Bowed legs, wide wrists, bone pain, limp", "Renal rickets, slipped epiphysis", "CKD-MBD"],
["High BP, headache", "Volume, renin", "Use the correct cuff and centile charts"],
["Oedema, frothy urine", "Nephrotic proteinuria", "Glomerular disease"],
["Recurrent febrile UTI", "Reflux, obstruction", "Scarring risk"],
["Deafness, eye changes", "Alport syndrome", "Family history"],
["Photophobia (corneal crystals), rickets, polyuria", "Cystinosis", "Treatable with cysteamine"],
["Delayed puberty", "Uraemia, hormonal disturbance", "Adolescent care"]])}
${box("red", "Red flags", `<ul><li>Hypertensive emergency (headache, vomiting, visual change, seizures)</li><li>Hyperkalaemia or severe acidosis</li><li>Dehydration in a polyuric child (they cannot concentrate urine, so they dehydrate fast)</li><li>Rapidly rising creatinine (AKI on CKD)</li><li>Heavy proteinuria with oedema</li><li>Falling growth centiles despite feeding</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against", "Best test"], [
["Hypodysplasia", "Small kidneys, antenatal findings, polyuria", "Large or normal kidneys", "Ultrasound"],
["Posterior urethral valves", "Boy, poor stream, thick-walled bladder, bilateral hydronephrosis", "Girl, normal bladder", "MCUG"],
["Reflux nephropathy", "Febrile UTIs, scarred irregular kidneys", "No UTI history", "DMSA scan, MCUG"],
["Steroid-resistant nephrotic syndrome / FSGS", "Nephrotic syndrome not responding to 4 weeks of prednisolone", "Steroid response", "Biopsy, genetic testing"],
["Nephronophthisis", "Polyuria, anaemia out of proportion, normal-sized echogenic kidneys, little proteinuria, eye or liver involvement", "Heavy proteinuria", "Genetic testing"],
["Alport syndrome", "Haematuria from childhood, deafness, eye signs, X-linked family history", "—", "Genetic testing, biopsy"],
["Cystinosis", "Fanconi syndrome, rickets, photophobia, growth failure in infancy", "—", "WBC cystine, slit-lamp"],
["ARPKD", "Large echogenic kidneys in infancy, hypertension, liver fibrosis", "—", "Ultrasound, genetics"],
["AKI (not CKD)", "Recent illness, normal growth, normal kidney size", "Growth failure, small kidneys", "Repeat in 3 months"],
["Nutritional rickets (not renal)", "Normal creatinine, low vitamin D, dietary history", "Raised creatinine, high phosphate", "Creatinine, phosphate, PTH"]])}
<h3>The typical child</h3>
<p>A 4-year-old boy is referred for short stature (height below the 3rd centile, falling) and bedwetting. He drinks large volumes of water. Creatinine is 90 µmol/L (expected about 30), bicarbonate 17 mmol/L, Hb 9.5 g/dL, and ultrasound shows small, bright kidneys with a thick-walled bladder. This is most likely <b>CKD from CAKUT, probably posterior urethral valves presenting late</b>. The reasoning: a boy, a thick-walled bladder, polyuria from a concentrating defect, and a creatinine three times normal for age, with growth failure from acidosis and salt loss. He needs an MCUG and urology, and his growth problem is largely treatable.</p>
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Expected finding", "Limits", "Priority"], [
["<b>Bedside Schwartz eGFR</b> = 0.413 × height (cm) ÷ creatinine (mg/dL)", "Stage", "Low for age", "Needs an enzymatic creatinine; inaccurate with low muscle mass; not under 1 year", "Essential"],
["CKiD U25 (creatinine ± cystatin C)", "More accurate staging, ages 1–25", "—", "Needs a calculator; cystatin C availability", "Optional"],
["First-morning urine <b>PCR and ACR</b>", "Proteinuria", "ACR ≥3 mg/mmol; PCR ≥20 mg/mmol", "KDIGO prefers both in children (PP 1.3.1.4); exclude orthostatic proteinuria in adolescents", "Essential"],
["Urinalysis and microscopy", "Haematuria, casts, glycosuria (tubular)", "—", "—", "Essential"],
["<b>Height, weight, head circumference</b>, plotted on WHO charts; height velocity", "Growth", "Falling centiles", "Measure carefully (stadiometer)", "Essential every visit"],
["<b>BP</b> with correct cuff, compared with AAP 2017 centile tables", "Hypertension", "≥95th centile is hypertension", "Repeat measurements", "Essential every visit"],
["Kidney and bladder ultrasound", "CAKUT, size, cysts, bladder", "Small, dysplastic, cystic or hydronephrotic kidneys; thick bladder", "—", "Essential"],
["MCUG", "Valves, reflux", "—", "Invasive; specialist", "Selected"],
["DMSA scan", "Scars, split function", "—", "Referral", "Selected"],
["Electrolytes, bicarbonate", "Acidosis, salt loss, K⁺", "Low HCO₃⁻; low Na⁺ in salt-wasters", "—", "Essential"],
["Calcium, phosphate, ALP, PTH, 25-OH vitamin D", "CKD-MBD, rickets", "High PTH, high ALP", "<b>Phosphate and ALP normal ranges are higher in children</b>: use age-specific ranges", "Essential from G2–G3"],
["FBC, ferritin, TSAT", "Anaemia", "—", "—", "Essential"],
["Wrist or knee X-ray", "Rickets, bone age", "Cupping, fraying, widened growth plates", "—", "If MBD suspected"],
["C3, C4, ANA, hepatitis B/C, HIV", "Glomerular causes; before dialysis", "—", "—", "Selected"],
["Genetic testing", "Many causes in children are genetic and may avoid biopsy (KDIGO)", "—", "Referral abroad", "Selected"],
["Hearing and eye tests", "Alport, cystinosis, ciliopathies", "—", "—", "Selected"],
["Developmental and school assessment", "Neurocognitive impact", "—", "—", "Recommended"]])}
` },

{ id: "staging", title: "Staging, monitoring and referral", html: `
<p>Stage children over 2 years by GFR (G1–G5) and albuminuria/proteinuria as in adults. Under 2, compare eGFR with age-appropriate norms instead.${r(1)}</p>
<ul><li>Monitor <b>more often during puberty</b>, a high-risk period for decline (KDIGO).</li>
<li>BP: ABPM once a year and office BP every 3–6 months if ABPM is available (PP 3.4.2).</li>
<li>Screen for malnutrition and poor growth at least twice a year in G4–G5 or with poor growth (PP 5.2.3.2).</li></ul>
<h3>Refer to a paediatric nephrologist (KDIGO PP 5.1.2)</h3>
<ul><li>ACR ≥30 mg/g (3 mg/mmol) or PCR ≥200 mg/g (20 mg/mmol) confirmed on a first-morning sample, when well and not menstruating</li><li>Persistent haematuria</li><li>Any sustained fall in eGFR</li><li>Hypertension</li><li>Kidney outflow obstruction or anomalies of the kidney and urinary tract</li><li>Known or suspected CKD</li><li>Recurrent urinary tract infection</li></ul>
${box("bt", "Bhutan reality", `<p>Paediatric nephrology expertise is concentrated at the national referral hospital. Telephone advice, shared care with the district paediatrician, and planned visits are realistic. Paediatric dialysis and transplantation usually need referral abroad. Plan these years ahead, not in the emergency. ${LB.loc()}</p>`)}
` },

{ id: "manage", title: "Management", html: `
<h3>1. Growth and nutrition: the first priority</h3>
<ul><li><b>Do not restrict protein.</b> Aim for protein and energy at the upper end of normal for age in G2–G5 (KDIGO PP 3.3.1.4).</li>
<li>Involve a dietitian. Infants often need calorie-dense feeds and nasogastric or gastrostomy feeding to grow.</li>
<li><b>Polyuric, salt-wasting children (most CAKUT) need sodium and water, not restriction.</b> Supplements of sodium chloride and/or sodium bicarbonate, often 2–4 mmol/kg/day or more, are guided by plasma and urine sodium and by growth. Sodium restriction is appropriate only when there is hypertension or oedema (KDIGO PP 3.3.2.2: follow age-based intake if BP is above the 90th centile). ${LB.exp("SPECIALIST")}</li>
<li>Correct acidosis with ${dr("sodium_bicarbonate")} (typically 1–2 mmol/kg/day in divided doses) to keep bicarbonate at 22 mmol/L or more. Acidosis on its own stunts growth.</li>
<li>${dr("somatropin", "Growth hormone")} if short stature persists after correcting nutrition, acidosis, salt balance and bone disease (not on the Bhutan NEML; referral).</li>
<li>Physical activity: aim for 60 minutes daily (PP 3.2.2.5).</li></ul>
<h3>2. Blood pressure and proteinuria</h3>
<ul><li>Target: <b>24-h MAP ≤50th centile</b> by ABPM (2C), or office SBP 50th–75th centile when ABPM is not available (PP 3.4.3).</li>
<li>First line: ${dr("enalapril", "ACE inhibitor")} or ${dr("losartan", "ARB")} at the maximum tolerated dose (KDIGO paediatric figure). Check creatinine and K⁺ at 1–2 weeks. Avoid starting when eGFR is under 30 unless a specialist decides otherwise (AAP 2017). Teach sick-day rules to parents.</li>
<li>Add ${dr("amlodipine")} and/or a diuretic. Steroidal MRA for resistant hypertension only if eGFR ≥45.</li>
<li><b>Adolescent girls on ACE inhibitors or ARBs:</b> discuss contraception and pregnancy (teratogenic).</li>
<li>${dr("dapagliflozin", "SGLT2 inhibitors")} may be considered in older children: specialist only.</li></ul>
<h3>3. Bone and minerals (CKD-MBD)</h3>
<ul><li>Keep calcium and phosphate in the <b>age-appropriate</b> normal range; PTH trend matters.</li>
<li>Dietary phosphate control without compromising protein; ${dr("calcium_carbonate")} with feeds or meals as binder; ${dr("sevelamer")} if calcium is high.</li>
<li>Correct 25-OH vitamin D deficiency; ${dr("calcitriol")} for hypocalcaemia or rising PTH (specialist).</li>
<li>Watch for slipped capital femoral epiphysis (hip or knee pain, limp) and bowing.</li></ul>
<h3>4. Anaemia</h3>
<ul><li>Iron first (${dr("ferrous", "oral iron")} 3 mg/kg/day elemental; ${dr("iron_sucrose", "IV iron")} if iron deficiency persists on oral iron, using thresholds set by the paediatric nephrologist; KDIGO 2026).</li>
<li>${dr("epoetin", "ESA")} with an <b>individualised Hb target</b>: KDIGO 2026 found the optimal target in children unknown (the 2012 guideline had suggested 11–12 g/dL).</li></ul>
<h3>5. Other</h3>
<ul><li><b>Vaccinations:</b> complete the national schedule early. Give <b>live vaccines (MR, varicella) before transplant</b>, because they cannot be given afterwards. Use the hepatitis B schedule with antibody checks; pneumococcal and influenza vaccines.</li>
<li><b>UTI prevention</b> in reflux or bladder dysfunction: treat constipation, timed voiding, clean intermittent catheterisation in neurogenic bladder, prophylaxis where indicated.</li>
<li><b>Drug stewardship:</b> parents and carers are central, with the young person taking over during transition (KDIGO). Avoid NSAIDs. Use weight- or BSA-based dosing. Avoid gadolinium in neonates and young infants where possible, and use caution when GFR is under 30.</li>
<li><b>School and psychology:</b> liaise with the school; screen for learning difficulties and depression.</li></ul>
<h3>6. Kidney failure</h3>
<ul><li><b>Pre-emptive kidney transplant</b> (before dialysis) gives the best outcomes for growth, schooling and survival. Living related donation is common.</li>
<li>If dialysis is needed: <b>peritoneal dialysis</b> is usually preferred in small children (home-based, school-friendly, gentle); haemodialysis in older children.</li>
<li>Start for symptoms, growth failure despite optimal nutrition, uncontrollable complications, or eGFR around 10 with symptoms.</li></ul>
<h3>7. Transition to adult care</h3>
<p>Start preparing at <b>11–14 years</b>. See the young person alone for part of each visit, use readiness checklists, give a written and verbal handover, and allow a visit to the adult clinic before transfer. Young adults with CKD are at high risk of non-adherence and graft loss, so see them more often (KDIGO 2024 Figure 5).</p>
` },

{ id: "drugs", title: "Medicines and doses (children)", html: `
${tbl(["Drug", "Child dose", "Max / notes"], [
[dr("enalapril"), "0.08 mg/kg once daily (up to 5 mg)", "Max 0.6 mg/kg/day (≤40 mg); avoid if eGFR under 30"],
[dr("losartan"), "Age 6+: 0.7 mg/kg once daily (up to 50 mg)", "Max 1.4 mg/kg/day (≤100 mg)"],
[dr("amlodipine"), "1–5 y: 0.1 mg/kg/day · 6 y+: 2.5 mg/day", "Max 0.6 mg/kg/day (≤5 mg) / 10 mg"],
[dr("furosemide"), "0.5–1 mg/kg per dose", "Oedema, hypertension with overload"],
[dr("sodium_bicarbonate"), "1–2 mmol/kg/day divided", "Titrate to HCO₃⁻ ≥22"],
[dr("ferrous"), "3 mg/kg/day elemental iron", "Range 2–6 mg/kg/day"],
[dr("iron_sucrose"), "0.5 mg/kg IV (max 100 mg) every 2–4 weeks", "Age 2+; label schedule"],
[dr("epoetin"), "Weight-based, specialist", "Hb range 11–12 g/dL"],
[dr("calcium_carbonate"), "By phosphate content of feeds", "Specialist and dietitian"],
[dr("sevelamer"), "Age 6+: BSA 0.75–1.2 m²: 800 mg three times daily; ≥1.2 m²: 1.6 g three times daily", "Titrate"],
[dr("calcitriol"), "Specialist, PTH-guided", "Monitor Ca and PO₄"],
[dr("somatropin"), "0.045–0.05 mg/kg/day SC", "After correcting nutrition, acidosis, salt and MBD"]])}
` },

{ id: "scenarios", title: "Special situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Intercurrent diarrhoea or vomiting in a polyuric child", "Early ORS; low threshold for IV fluids; hold ACE inhibitor/ARB (sick-day plan)", "They cannot reduce urine output, so they dehydrate fast and get AKI on CKD"],
["Adolescent pregnancy or sexual activity", "Contraception counselling; stop teratogenic drugs", "ACE inhibitors and ARBs are fetotoxic"],
["Neurogenic bladder (spina bifida)", "Clean intermittent catheterisation, anticholinergics, bladder pressure monitoring", "High bladder pressure destroys kidneys"],
["Nephrotic syndrome", "Thrombosis and infection risk; diuretics with care", "—"],
["Obesity and type 2 diabetes in adolescents", "Earlier albuminuria; RAS blocker; metformin by eGFR", "Hyperfiltration"],
["Low muscle mass (cerebral palsy, muscular dystrophy)", "Use cystatin C eGFR", "Creatinine overestimates GFR"],
["Kidney transplant", "Drug interactions with tacrolimus; no live vaccines; adherence support", "—"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Growth failure", "Falling height centile", "Nutrition, salt, bicarbonate, MBD, growth hormone"],
["Renal osteodystrophy and rickets", "Bowing, pain, high ALP and PTH", "Phosphate control, vitamin D, calcitriol"],
["Anaemia", "Hb", "Iron, ESA"],
["Hypertension and LV hypertrophy", "BP, echo", "BP control"],
["Acidosis", "Low bicarbonate", "Sodium bicarbonate"],
["Neurocognitive and school difficulties", "School reports, assessment", "Early support"],
["Depression, anxiety, family stress", "Screening", "Psychosocial support"],
["Delayed puberty", "Tanner staging", "Endocrine input"],
["Infection", "UTIs, peritonitis on PD", "Prevention, early treatment"]])}
<h3>Prognosis</h3>
<ul><li>Many children with CAKUT keep useful kidney function into adolescence; glomerular and some genetic diseases progress faster.</li><li>Children with kidney failure have a far higher mortality than healthy peers, but transplantation gives excellent long-term outcomes.</li><li>Good BP control (ESCAPE) and avoiding AKI episodes slow progression.</li></ul>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<h3>Monitoring (adjust by stage)</h3>
${tbl(["Every visit", "Every 3–6 months", "Yearly"], [["Height, weight, head circumference (infants), BP, urine dipstick", "Creatinine/eGFR, electrolytes, bicarbonate, Hb, Ca, PO₄, ALP; PCR/ACR", "PTH, vitamin D, iron studies, ABPM if available, developmental and school review"]])}
<p>Monitor more frequently during puberty and in G4–G5.</p>
<h3>Prevention</h3>
<ul><li>Antenatal ultrasound follow-up of hydronephrosis, and postnatal scan.</li><li>Prompt diagnosis and treatment of febrile UTI in infants, with imaging when indicated.</li><li>Screen siblings in genetic diseases where appropriate.</li><li>Avoid NSAIDs in children with kidney disease.</li></ul>
${box("green", "What to tell parents and the young person", `<ul><li>\"Your child's kidneys were formed differently (or have been damaged). They work at about ___%. We can help your child grow and stay well, and plan ahead for the future.\"</li><li>Give the salt or bicarbonate supplements every day; they help growth.</li><li>When your child has diarrhoea or vomiting, give ORS straight away and see a doctor early.</li><li>Do not give ibuprofen. Paracetamol is safe.</li><li>Keep vaccinations up to date, especially before any transplant.</li><li>Tell the school about the condition, toilet access and drinking water.</li></ul>`)}
${box("red", "Come back urgently if", `<ul><li>Vomiting or diarrhoea and unable to keep fluids down</li><li>Much less urine than usual</li><li>Severe headache, vomiting, visual change or fits</li><li>Swelling of face or legs</li><li>Fever with a PD catheter or cloudy PD fluid</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Normal paediatric kidney", src: "images/normal-paediatric-kidney.jpg", mod: "Ultrasound", ctx: "Comparison", loc: "Kidney", find: "Prominent dark pyramids (**), thin bright sinus, smooth outline", interp: "Normal child kidney", by: "Hansen et al., Diagnostics 2016", page: "https://commons.wikimedia.org/wiki/File:Normal_pediatric_kidney.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Advanced chronic kidney disease", src: "images/eskd-ultrasound.jpg", mod: "Ultrasound (adult example)", ctx: "Kidney failure", loc: "Kidney", find: "Small, diffusely echogenic kidney without corticomedullary differentiation", interp: "Pattern of advanced CKD at any age; in children, also look for dysplastic cysts and a thick bladder", by: "Hansen et al., Diagnostics 2016", page: "https://commons.wikimedia.org/wiki/File:Ultrasonography_of_end-stage_chronic_kidney_disease.jpg", lic: "CC BY 4.0" })}
</div>
${fig({ title: "Rugger-jersey spine (renal osteodystrophy)", src: "images/rugger-jersey-spine.jpg", mod: "Lateral spine X-ray (adult example)", ctx: "Secondary hyperparathyroidism of CKD", loc: "Vertebral endplates", find: "Sclerotic bands at the endplates with lucent centres", interp: "In children, renal osteodystrophy shows mainly as rickets at the growth plates (wrist and knee)", by: "Patel AA et al. Adv Radiol 2015", page: "https://commons.wikimedia.org/wiki/File:X-ray_of_rugger-jersey_spine_of_renal_osteodystrophy.jpg", lic: "CC BY 3.0" })}
<h3>Link-only images</h3>
<ul><li>Posterior urethral valves on MCUG: <a href="https://radiopaedia.org/search?q=posterior+urethral+valves" target="_blank" rel="noopener">Radiopaedia</a></li><li>Renal dysplasia and multicystic dysplastic kidney: <a href="https://radiopaedia.org/search?q=multicystic+dysplastic+kidney" target="_blank" rel="noopener">Radiopaedia</a></li><li>Rickets (wrist cupping and fraying): <a href="https://radiopaedia.org/search?q=rickets" target="_blank" rel="noopener">Radiopaedia</a></li><li>DMSA renal scarring: <a href="https://radiopaedia.org/search?q=DMSA+renal+scarring" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Child at risk of CKD (KDIGO 2024, age over 2)", [
F.s("CAKUT, prematurity, recurrent UTI, previous AKI, family history, hypertension, poor growth"), F.a,
F.s("Bedside Schwartz eGFR + first-morning ACR and PCR + urinalysis + BP centile + ultrasound"), F.a,
F.d("eGFR under 60, or ACR ≥3 / PCR ≥20 mg/mmol, or other damage markers?"), F.a,
F.b([["Yes", F.s("Exclude AKI; confirm over 3 months (not needed for obvious congenital disease)")], ["eGFR 60–89 only", F.s("Low-for-age: monitor; find the cause")], ["No", F.ok("Retest by risk")]]), F.a,
F.e("CKD confirmed → refer to paediatric nephrology; stage G and A; plan growth care")])}
${F.chart("2 · Treatment priorities in a growing child", [
F.s("Growth: energy and protein at upper end of normal; dietitian; tube feeds if needed"), F.a,
F.d("Polyuric / salt-wasting?"), F.a,
F.b([["Yes", F.s("Sodium and water supplements; sick-day ORS plan")], ["No (hypertensive / oedematous)", F.s("Age-based sodium intake")]]), F.a,
F.s("Bicarbonate to keep HCO₃⁻ ≥22 · treat MBD · iron then ESA"), F.a,
F.s("BP to MAP ≤50th centile (or office SBP 50th–75th): ACE inhibitor/ARB → CCB/diuretic"), F.a,
F.d("Still short after correcting all of the above?"), F.a,
F.b([["Yes", F.s("Growth hormone (referral)")], ["No", F.ok("Continue; review every 3–6 months; more often in puberty")]])])}
${F.chart("3 · Planning for kidney failure", [
F.s("G4 or falling fast: discuss transplant, PD and HD with the family"), F.a,
F.s("Complete live vaccines; hepatitis B antibodies; identify potential living donors"), F.a,
F.ok("Pre-emptive transplant where possible; otherwise PD (small children) or HD")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Plot the growth chart at every visit.</b> Falling height is often the first sign and the most treatable problem.</li>
<li><b>A creatinine of 60 µmol/L in a 3-year-old is about twice normal.</b> Always calculate eGFR with height.</li>
<li><b>Polyuric children need salt and water.</b> Restricting either worsens growth and kidney function.</li>
<li><b>Nephronophthisis</b> causes CKD with bland urine and anaemia out of proportion. Think of it in a polyuric child with normal-sized bright kidneys.</li>
<li><b>Give live vaccines before transplant.</b> Afterwards it is too late.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it matters", "Prevention"], [
["Applying adult protein restriction", "Stunts growth", "Upper-normal protein for age"],
["Using adult eGFR equations or adult creatinine ranges", "Misses CKD", "Schwartz or CKiD U25"],
["Missing hypertension because of the wrong cuff or adult cut-offs", "Faster progression, LVH", "Centile tables, correct cuff"],
["Withholding fluids from a polyuric child before surgery or in illness", "AKI on CKD", "Maintenance plus urine output"],
["Treating renal rickets as nutritional rickets only", "Ongoing bone disease", "Check creatinine, phosphate and PTH"],
["Forgetting transition planning", "Graft loss and poor adherence in young adults", "Start at 11–14 years"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "What is the commonest cause of CKD in children?", "Congenital anomalies of the kidney and urinary tract (CAKUT): hypodysplasia, posterior urethral valves, reflux nephropathy.")}
${qa("Student", "What eGFR is flagged as low in children over 2?", "Under 90 mL/min/1.73 m² (KDIGO 2024 PP 1.2.3.5).")}
${qa("Intern/MO", "Calculate the bedside Schwartz eGFR: height 100 cm, creatinine 70 µmol/L.", "36.5 × 100 ÷ 70 ≈ 52 mL/min/1.73 m² (G3a).")}
${qa("Intern/MO", "Why use cystatin C in a child with Duchenne muscular dystrophy?", "Low muscle mass gives a low creatinine and a falsely high eGFR; cystatin C is independent of muscle mass.")}
${qa("Specialist", "A polyuric child with anaemia, bland urine and normal-sized echogenic kidneys. Likely diagnosis?", "Nephronophthisis (a ciliopathy). Genetic testing; look for eye and liver involvement.")}
</div>
<div class="qgroup"><h3>Management</h3>
${qa("Intern/MO", "Should protein be restricted in a child with CKD G4?", "No. Aim for protein and energy at the upper end of normal for age to support growth (KDIGO PP 3.3.1.4).")}
${qa("Intern/MO", "What BP target slowed CKD progression in children in the ESCAPE trial?", "24-hour MAP under the 50th centile, using an ACE inhibitor (ramipril).")}
${qa("Intern/MO", "Before growth hormone, what must be corrected?", "Malnutrition, metabolic acidosis, salt and water depletion, and hyperparathyroidism/bone disease.")}
${qa("Specialist", "Hb target range for a child on ESA?", "KDIGO 2026 individualises it: the optimal target in children is unknown. The older KDIGO 2012 guideline suggested 11–12 g/dL.")}
${qa("Intern/MO", "Which vaccines must be given before kidney transplant and why?", "Live vaccines (measles-rubella, varicella), because they are contraindicated with post-transplant immunosuppression.")}
${qa("Specialist", "Preferred dialysis modality for a 2-year-old?", "Peritoneal dialysis: home-based, gentle, no vascular access problems. Pre-emptive transplant is better still when possible.")}
${qa("Viva", "At what age should transition planning start?", "Around 11–14 years, with joint planning and transfer when stable.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. <i>Kidney Int</i> 2024;105(4S):S117–S314 — paediatric practice points; and KDIGO \"Top 12 Special Considerations in Children and Young Adults\" (2025).</li>
<li id="ref-2">Flynn JT et al. AAP Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents. <i>Pediatrics</i> 2017;140:e20171904. <a href="https://doi.org/10.1542/peds.2017-1904" target="_blank" rel="noopener">doi:10.1542/peds.2017-1904</a></li>
<li id="ref-3">ESCAPE Trial Group. Strict blood-pressure control and progression of renal failure in children. <i>N Engl J Med</i> 2009;361:1639–1650. <a href="https://doi.org/10.1056/NEJMoa0902066" target="_blank" rel="noopener">doi:10.1056/NEJMoa0902066</a></li>
<li id="ref-4">Schwartz GJ et al. New equations to estimate GFR in children with CKD. <i>J Am Soc Nephrol</i> 2009;20:629–637. Pierce CB et al. Age- and sex-dependent clinical equations to estimate GFR in children and young adults with CKD (CKiD U25). <i>Kidney Int</i> 2021;99:948–956.</li>
<li id="ref-5">KDOQI Clinical Practice Guideline for Nutrition in Children with CKD: 2008 Update. <i>Am J Kidney Dis</i> 2009;53(3 Suppl 2):S1–S124. <a href="https://doi.org/10.1053/j.ajkd.2008.11.017" target="_blank" rel="noopener">doi:10.1053/j.ajkd.2008.11.017</a></li>
<li id="ref-6">Ardissino G et al. (ItalKid) Epidemiology of chronic renal failure in children. <i>Pediatrics</i> 2003;111:e382–e387. <a href="https://doi.org/10.1542/peds.111.4.e382" target="_blank" rel="noopener">doi:10.1542/peds.111.4.e382</a> Harambat J et al. Epidemiology of chronic kidney disease in children. <i>Pediatr Nephrol</i> 2012;27:363–373.</li>
<li id="ref-7">KDIGO 2017 CKD-MBD Update (<a href="https://doi.org/10.1016/j.kisu.2017.04.001" target="_blank" rel="noopener">doi:10.1016/j.kisu.2017.04.001</a>); KDIGO 2026 Anemia in CKD (<a href="https://doi.org/10.1016/j.kint.2025.06.005" target="_blank" rel="noopener">doi:10.1016/j.kint.2025.06.005</a>).</li>
<li id="ref-8">ICMR STW Chronic Kidney Disease, July 2026 (paediatric points: modified Schwartz, BP under 90th centile, protein for growth).</li>
<li id="ref-9">Kliegman RM et al. <i>Nelson Textbook of Pediatrics</i>, 22nd ed. 2024 — chapters on CKD, CAKUT and end-stage kidney disease (foundational; local copies are excerpts only).</li>
<li id="ref-10">Bhutan STG 2024; Bhutan NEML 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Paediatric KDIGO points", "<span class='pass'>Verified</span>", "Read directly from KDIGO 2024 and paediatric takeaways"],
["Antihypertensive doses", "<span class='pass'>Verified</span>", "AAP 2017"],
["Sodium supplement range", "<span class='flag'>Specialist</span>", "Individualised; range is a typical starting point"],
["ESA dosing in children", "<span class='flag'>Specialist</span>", "No single published starting dose given"],
["Epidemiology in Bhutan", "<span class='flag'>Evidence gap</span>", "No data"],
["Nelson chapters", "<span class='flag'>Not checked page by page</span>", "Local copies are excerpts"],
["Images", "<span class='pass'>Done</span>", "Openly licensed; adult examples labelled as such"]], "qc")}
` }
]
});
