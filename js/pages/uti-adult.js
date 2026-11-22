/* Urinary tract infection and pyelonephritis — adults (with pregnancy) */
registerPage({
id: "uti-adult",
title: "Urinary Tract Infection & Pyelonephritis — Adults",
subtitle: "Cystitis, pyelonephritis, urosepsis, pregnancy and catheters: why nitrofurantoin now comes first in Bhutan, when to give IV treatment, and when not to treat at all",
age: "Adults", specs: ["neph", "uro", "id", "medicine", "obg", "emerg"],
keywords: ["urinary tract infection", "UTI", "cystitis", "pyelonephritis", "urosepsis", "dysuria", "burning micturition", "asymptomatic bacteriuria", "nitrofurantoin", "ESBL", "UTI pregnancy", "catheter UTI", "CAUTI", "prostatitis", "recurrent UTI", "pyonephrosis", "emphysematous pyelonephritis"],
related: ["uti-child", "sepsis-adult", "aki-adult", "ckd-adult", "dm-adult"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">UTI is one of the commonest reasons for antibiotics in Bhutan, and one of the biggest drivers of resistance. The skill is to sort the patient into the right box — simple cystitis, pyelonephritis, urosepsis, or bacteria without symptoms — and match the treatment to that box and to local resistance.</p>
<div class="glance">
<div><h4>Cystitis (bladder)</h4><p>Burning, frequency, urgency, suprapubic pain; <b>no fever</b>. ${dr("nitrofurantoin")} 100 mg MR twice daily, 5 days (women).</p></div>
<div><h4>Pyelonephritis (kidney)</h4><p>Fever, rigors, flank pain, vomiting. Culture first; one IV dose of ${dr("ceftriaxone")}, then oral by culture for 7–10 days.</p></div>
<div><h4>Urosepsis</h4><p>Low BP, fast breathing, confusion: antibiotics within 1 hour, fluids, and an ultrasound to find obstruction.</p></div>
<div><h4>Local resistance (Thimphu)</h4><p>Amoxicillin resisted by about 70% of <i>E. coli</i>; third-generation cephalosporins about 16%; nitrofurantoin and gentamicin lowest (about 3–10%).</p></div>
<div><h4>Pregnancy</h4><p>Screen and treat even without symptoms; nitrofurantoin (not at term) or ${dr("cefalexin")} for 7 days; pyelonephritis means admission.</p></div>
<div><h4>Do not treat</h4><p>Bacteria without symptoms in older people, people with catheters or diabetes. Smelly or cloudy urine alone is not a UTI.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§6.1) gives amoxicillin or co-trimoxazole for 3 days for cystitis and IV ampicillin with gentamicin for pyelonephritis, with referral. Three studies from JDWNRH (2015, 2022, 2024) show that amoxicillin no longer works for most urinary <i>E. coli</i>, while nitrofurantoin and gentamicin still do. This guide therefore uses nitrofurantoin first for cystitis and keeps gentamicin in the pyelonephritis plan, and explains why in the comparison table. ${LB.bt()} ${LB.loc()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>A UTI is bacterial infection anywhere from the urethra to the kidney. <b>Cystitis</b> is infection of the bladder; <b>pyelonephritis</b> is infection of the kidney tissue and collecting system; <b>urosepsis</b> is sepsis from a urinary source. Most infections ascend: gut bacteria colonise the perineum and urethra and climb into the bladder.${r(1, 2)}</p>
${tbl(["Group", "Definition", "Why it matters"], [
["<b>Uncomplicated</b>", "Non-pregnant woman with a normal urinary tract and no fever", "Short oral course; culture not needed for a first episode"],
["<b>Complicated</b>", "Men; pregnancy; diabetes; stones, obstruction, catheter, recent instrumentation; kidney disease; immunosuppression", "Culture always; longer course; look for a cause"],
["<b>Recurrent</b>", "2 or more episodes in 6 months, or 3 or more in a year", "Culture each time; look for structural causes; prevention plan"],
["<b>Asymptomatic bacteriuria</b>", "Bacteria in urine with no symptoms", "Treat only in pregnancy and before urological surgery"]])}
<h3>Organisms</h3>
<p><i>Escherichia coli</i> causes about 80% of infections (79–85% in JDWNRH studies), followed by <i>Klebsiella</i>, <i>Proteus</i>, <i>Enterococcus</i>, <i>Staphylococcus saprophyticus</i> (young women) and <i>Pseudomonas</i> (catheters, hospital).${r(7, 8)}</p>
<h3>Risk factors</h3>
<ul><li>Female anatomy (short urethra), sexual activity, spermicides, menopause (loss of oestrogen)</li><li>Pregnancy (ureteric dilatation), diabetes (glucose in urine, poorer immunity)</li><li>Obstruction: stones, enlarged prostate, strictures; neurogenic bladder after spinal injury or stroke</li><li>Catheters: the risk of bacteriuria rises by about 3–7% for each day the catheter stays in</li></ul>
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From the bowel to the bloodstream", [
F.s("Gut E. coli colonises the perineum and urethra"), F.a,
F.s("Bacteria ascend and attach to bladder lining with fimbriae (pili)"), F.a,
F.d("Bladder infection (cystitis)"), F.a,
F.b([["Defences win", F.ok("Urine flow, emptying and immunity clear it; symptoms settle")], ["Bacteria ascend", F.s("Up the ureters (reflux, obstruction, pregnancy) → kidney")]]), F.a,
F.s("Pyelonephritis: neutrophils invade the kidney; fever, flank pain"), F.a,
F.e("Bloodstream invasion → urosepsis; obstruction → pyonephrosis, abscess")])}
<p>Why the drug choice depends on the site: <b>nitrofurantoin</b> concentrates in urine but never reaches useful levels in kidney tissue or blood, so it is excellent for cystitis and useless for pyelonephritis. Beta-lactams, fluoroquinolones and aminoglycosides reach the kidney. Obstruction turns a treatable infection into a surgical emergency, because antibiotics cannot sterilise pus under pressure.${r(1)}</p>
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "International", "This guide and why"], [
["Cystitis, first choice", "Amoxicillin 500 mg 8-hourly or co-trimoxazole 960 mg 12-hourly, 3 days", "Nitrofurantoin first (NICE NG109, IDSA 2011, WHO AWaRe 2022, ICMR 2019); avoid amoxicillin empirically; co-trimoxazole only if local resistance is under 20%", "<b>Nitrofurantoin 100 mg MR twice daily</b> — JDWNRH data: amoxicillin about 70% resistant, nitrofurantoin about 3–10% " + LB.loc()],
["Cystitis, duration (women)", "3 days", "Nitrofurantoin 5 days (IDSA, WHO); 3 days (NICE)", "5 days, accepting 3 days as an option"],
["Pyelonephritis", "IV ampicillin + gentamicin 5–10 days; refer", "Oral fluoroquinolone 7 days or beta-lactam 10–14 days if well; if fluoroquinolone resistance is over 10%, give a first IV dose of ceftriaxone or an aminoglycoside (IDSA, WHO AWaRe)", "First IV dose (ceftriaxone, or gentamicin if eGFR normal), then oral by culture; admit if vomiting, pregnant or septic"],
["Nitrofurantoin and kidney function", "NEMF: avoid if CrCl under 60", "BNF/MHRA 2014: avoid if eGFR under 45", "eGFR 45 (current evidence); either is safe"],
["Asymptomatic bacteriuria", "Not addressed", "Screen and treat only in pregnancy and before urological procedures (IDSA 2019)", "As international"],
["India", "—", "ICMR 2019: nitrofurantoin or fosfomycin for cystitis; aminoglycoside or ceftriaxone for pyelonephritis; carbapenem for ESBL sepsis", "Consistent with this guide (fosfomycin is not on NEML)"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Feature", "Points to", "Comment"], [
["Burning on passing urine (dysuria), frequency, urgency", "Cystitis", "Two or more of these without vaginal discharge make UTI very likely (over 90% in women)"],
["Suprapubic pain, visible blood in urine", "Cystitis", "Haemorrhagic cystitis is common and settles with treatment"],
["Fever over 38 °C, rigors", "Pyelonephritis or prostatitis", "Cystitis does not cause fever"],
["Flank (loin) pain, renal-angle tenderness", "Pyelonephritis", "With colic or a known stone, think obstruction"],
["Nausea, vomiting", "Pyelonephritis", "Cannot take oral drugs: admit"],
["Confusion, falls, new incontinence (older person)", "Possible urosepsis", "Do not label every confused old person as UTI: look for other causes"],
["Low BP, fast breathing, mottled skin", "Urosepsis", "Treat as sepsis"],
["Vaginal discharge or itch", "Vaginitis or STI", "Makes UTI less likely"]])}
${box("red", "Danger signs", `<ul><li>Systolic BP 100 or less, breathing rate 22 or more, or new confusion</li><li>Severe flank pain with fever in a patient with a stone, single kidney or diabetes (obstruction, pyonephrosis, emphysematous pyelonephritis)</li><li>Pregnancy with fever</li><li>Low urine output, rising creatinine</li></ul>`)}
<h3>The typical patient</h3>
<p>A 28-year-old teacher from Paro has had burning and frequency for two days, with lower abdominal discomfort. No fever, no back pain, no discharge, not pregnant. Dipstick: leucocytes 2+, nitrite positive. <b>This is uncomplicated cystitis.</b> She needs nitrofurantoin 100 mg MR twice daily for 5 days, fluids, paracetamol, and advice to return if fever or back pain appear. No culture is needed for a first episode. Amoxicillin would probably fail: most local <i>E. coli</i> resist it.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Against UTI", "Best test"], [
["Vaginitis (candida, bacterial vaginosis, trichomonas)", "Discharge, itch, dyspareunia", "No frequency or urgency", "Speculum, wet mount"],
["Urethritis (gonorrhoea, chlamydia)", "New partner, discharge, sterile pyuria", "Negative culture", "NAAT or Gram stain; see STI care"],
["Kidney or ureteric stone", "Colicky loin-to-groin pain, haematuria", "No fever (unless infected)", "Ultrasound, CT KUB"],
["Prostatitis", "Man with fever, perineal pain, tender prostate", "—", "Culture; gentle rectal examination"],
["Pelvic inflammatory disease", "Lower abdominal pain, fever, cervical motion tenderness", "—", "Pelvic exam, pregnancy test"],
["Ectopic pregnancy, appendicitis", "Abdominal pain with urinary symptoms", "—", "Pregnancy test, ultrasound"],
["Genitourinary TB", "Sterile pyuria, haematuria, weight loss — remember TB in Bhutan", "Repeated negative routine cultures", "Three early-morning urine samples for AFB and GeneXpert"],
["Bladder cancer", "Painless visible haematuria, smoker over 45", "—", "Cystoscopy"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Dipstick</b> (leucocyte esterase, nitrite)", "Supports diagnosis", "Nitrite positive is specific; both negative make UTI unlikely in a woman under 65. Do not dipstick people over 65 or with catheters: bacteriuria is common and misleading", "First test"],
["Urine microscopy", "Over 10 white cells per mm³ (STG); red cells; casts", "Pyuria without growth: think TB, STI, stones", "Useful"],
["<b>Urine culture and sensitivity</b>", "Identify organism and resistance", "<b>Always</b> in men, pregnancy, pyelonephritis, sepsis, recurrence, treatment failure and catheters. Send midstream urine before antibiotics", "Essential in complicated UTI"],
["CBC, creatinine, electrolytes, glucose", "Severity, kidney function, diabetes", "Needed before gentamicin", "Pyelonephritis"],
["Blood cultures", "Bacteraemia", "Before antibiotics in sepsis or pyelonephritis", "If febrile and unwell"],
["<b>Ultrasound KUB</b>", "Obstruction, stones, abscess, residual urine", "Urgently in sepsis, suspected obstruction, single kidney, or no improvement at 48–72 hours; routinely in recurrent UTI and men", "Selected"],
["CT KUB / contrast CT", "Stones, abscess, emphysematous pyelonephritis", "Where available, if ultrasound is unclear or not improving", "Specialist"],
["Pregnancy test", "Changes drug choice", "Women of reproductive age", "Essential"]])}
` },

{ id: "staging", title: "Classify the infection and choose the treatment", html: `
<p>Use this tool to sort the patient into the right group and see the empirical plan. It uses Bhutan's local resistance data, WHO AWaRe, NICE and IDSA. It is a decision aid, not a validated score.${r(1, 3, 4)}</p>
<div class="calc" data-calc="utiadult"></div>
<h3>Admit or refer when</h3>
<ul><li>Sepsis or shock; vomiting or unable to take tablets</li><li>Pregnancy with fever or flank pain</li><li>Obstruction, stones with infection, a single kidney, or kidney transplant</li><li>No improvement after 48–72 hours of appropriate treatment</li><li>Older, frail or immunosuppressed patients with pyelonephritis</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Uncomplicated cystitis in women</h3>
<ol><li>${dr("nitrofurantoin")} <b>100 mg MR twice daily for 5 days</b> (eGFR 45 or more). Not if fever or flank pain.</li>
<li>If nitrofurantoin is unsuitable: ${dr("cefalexin")} 500 mg twice daily for 5 days; or ${dr("cotrimoxazole")} 960 mg twice daily for 3 days, or ${dr("amoxicillin")} 500 mg 8-hourly for 3 days (STG), <b>only when culture shows sensitivity</b>.${r(1, 3, 6)}</li>
<li>Paracetamol for pain; drink to thirst (about 2 L/day, STG). Symptoms should improve within 48–72 hours.</li>
<li>Delayed (back-up) prescription is reasonable for mild symptoms: many cases settle without antibiotics, but the risk of pyelonephritis is slightly higher (NICE).</li></ol>
<h3>B. Men</h3>
<ul><li>Every UTI in a man counts as complicated: <b>culture first</b>, then nitrofurantoin 100 mg MR twice daily for <b>7 days</b> (cystitis without fever).</li>
<li>Fever, perineal pain or a tender prostate: treat as <b>prostatitis</b> — ciprofloxacin 500 mg twice daily (if sensitive) for 14 days or longer; ultrasound for retention. Look for a cause (prostate enlargement, stricture).</li></ul>
<h3>C. Pyelonephritis</h3>
<ol><li>Urine (and blood) culture <b>before</b> the first dose.</li>
<li><b>First dose IV:</b> ${dr("ceftriaxone")} 1–2 g IV, or ${dr("gentamicin")} 5 mg/kg IV once (if eGFR is normal and not pregnant). This covers the gap until culture returns, because oral co-trimoxazole and fluoroquinolone resistance is high (WHO AWaRe).${r(3, 4)}</li>
<li><b>Well, able to take tablets:</b> continue orally by culture — ${dr("cefixime")} 400 mg once daily or ${dr("cefalexin")} 500 mg–1 g three times daily for <b>10 days in total</b>, or ${dr("ciprofloxacin")} 500 mg twice daily for <b>7 days</b> if sensitive.</li>
<li><b>Vomiting, frail, or no better at 48 hours:</b> admit; ceftriaxone 1–2 g IV once daily, or (STG) ${dr("ampicillin")} 1 g 6-hourly + gentamicin 5 mg/kg once daily; switch to oral when afebrile for 24–48 hours.</li>
<li>Ultrasound if not improving within 48–72 hours (abscess, obstruction).</li></ol>
<h3>D. Urosepsis</h3>
<ul><li>Follow the <a href="#/d/sepsis-adult">sepsis chapter</a>: cultures, lactate, fluids, antibiotics within 1 hour.</li>
<li>Ceftriaxone 2 g IV once daily plus a single dose of gentamicin 5 mg/kg (eGFR permitting); ${dr("meropenem")} 1 g IV 8-hourly if ESBL risk (known ESBL, recent hospital or antibiotics) or shock not responding.</li>
<li><b>Source control:</b> an obstructed infected kidney needs drainage (nephrostomy or ureteric stent) within hours. Remove or change an infected catheter.</li></ul>
<h3>E. Catheter-associated UTI</h3>
<ul><li>Treat only with symptoms (fever, rigors, flank pain, delirium with no other cause). Never treat a positive dipstick or culture alone.</li>
<li>Replace a catheter that has been in more than 7 days <b>before</b> taking the culture and starting antibiotics; treat for 7 days (10–14 if slow response). Remove catheters that are not needed.</li></ul>
<h3>F. Recurrent UTI (women)</h3>
<ul><li>Culture every episode; ultrasound KUB and post-void residual. Treat constipation; vaginal oestrogen after menopause; post-coital voiding.</li>
<li>Prophylaxis if self-help fails: nitrofurantoin 50–100 mg at night or after intercourse, reviewed at 6 months.</li></ul>
<h3>G. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC (no nitrofurantoin listed)", "Cystitis: co-trimoxazole or amoxicillin per STG, with clear advice to return if no better in 48 hours; pyelonephritis: first dose of IV ampicillin + gentamicin (or ceftriaxone 250 mg vials as available), then refer"],
["District hospital", "Nitrofurantoin for cystitis; urine microscopy; gentamicin or ceftriaxone for pyelonephritis; refer septic or obstructed patients"],
["Regional or national referral hospital", "Culture-guided therapy; ultrasound/CT; urology for obstruction; meropenem for ESBL sepsis"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Adult dose", "Notes"], [
[dr("nitrofurantoin"), "100 mg MR twice daily; 5 days (women), 7 days (men, pregnancy)", "Cystitis only; eGFR 45 or more; not at term"],
[dr("cefalexin"), "Cystitis 500 mg twice daily; pyelonephritis 500 mg–1 g three times daily", "Safe in pregnancy; NEML 250 mg capsules"],
[dr("cefixime"), "400 mg once daily", "Oral step-down for pyelonephritis; WHO Watch"],
[dr("cotrimoxazole"), "960 mg twice daily, 3 days", "Only if sensitive"],
[dr("amoxicillin"), "500 mg 8-hourly, 3 days", "Only if sensitive (about 70% resistance)"],
[dr("ciprofloxacin"), "500 mg twice daily, 7 days", "Pyelonephritis or prostatitis if sensitive; not for simple cystitis"],
[dr("ceftriaxone"), "1–2 g IV once daily", "Pyelonephritis, urosepsis"],
[dr("gentamicin"), "5 mg/kg IV once daily", "Check creatinine; avoid in pregnancy; levels after 48–72 h"],
[dr("ampicillin"), "1 g IV 6-hourly (with gentamicin)", "STG pyelonephritis regimen; covers enterococcus"],
[dr("meropenem"), "1 g IV 8-hourly", "ESBL sepsis; reserve"],
[dr("paracetamol"), "1 g 6-hourly, max 4 g/day", "Pain and fever"]])}
` },

{ id: "populations", title: "Pregnancy, older adults and kidney disease", html: `
<h3>Pregnancy</h3>
<ul><li><b>Screen for asymptomatic bacteriuria</b> with a urine culture at booking and treat it: untreated, about 1 in 4 women develop pyelonephritis, which raises the risk of preterm birth.${r(5)}</li>
<li>Cystitis or bacteriuria: nitrofurantoin 100 mg MR twice daily for 7 days (avoid from about 36 weeks), or cefalexin 500 mg twice daily for 7 days, or amoxicillin if sensitive. Repeat culture after treatment.</li>
<li>Pyelonephritis: <b>admit</b>; IV ceftriaxone; switch to oral cefalexin when afebrile; 10–14 days in total. Avoid fluoroquinolones and (if possible) gentamicin; avoid co-trimoxazole in the first trimester (folate antagonist) and near term (kernicterus).</li></ul>
<h3>Older adults</h3>
<ul><li>Up to half of women in care homes have bacteria in their urine with no infection. Treat only with urinary symptoms, fever with no other source, or sepsis.</li>
<li>Check eGFR before nitrofurantoin; watch for gentamicin toxicity.</li></ul>
<h3>Kidney disease and transplant</h3>
<ul><li>eGFR under 45: no nitrofurantoin; adjust beta-lactam doses; avoid or carefully dose gentamicin.</li>
<li>Transplant recipients with UTI need specialist care (see <a href="#/d/ckd-adult">CKD</a>).</li></ul>
` },

{ id: "scenarios", title: "UTI with other conditions", html: `
${tbl(["Situation", "What changes", "Why"], [
["Diabetes", "Culture; longer course (7 days); look for emphysematous pyelonephritis (gas on imaging) if very ill", "Higher risk of severe and unusual infection; SGLT2 inhibitors slightly raise genital infection risk"],
["Kidney stones", "Ultrasound; infected obstructed kidney needs drainage", "Antibiotics cannot clear pus under pressure"],
["Spinal injury, stroke, neurogenic bladder", "Treat only symptomatic infection; intermittent catheterisation preferred", "Bacteriuria is universal"],
["Enlarged prostate", "Measure residual urine; treat the obstruction", "Recurrent infection"],
["Recurrent sterile pyuria", "Urine AFB and GeneXpert", "Genitourinary TB is not rare in Bhutan"],
["Taking warfarin", "Monitor INR with co-trimoxazole, ciprofloxacin or cefixime", "Interactions raise INR"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Urosepsis and septic shock", "Low BP, lactate, confusion", "Sepsis bundle, source control"],
["Pyonephrosis (infected obstructed kidney)", "Fever with hydronephrosis on ultrasound", "Urgent drainage"],
["Renal or perinephric abscess", "Persistent fever despite antibiotics, flank mass", "Ultrasound/CT; drainage"],
["Emphysematous pyelonephritis", "Diabetic, very ill, gas in the kidney on X-ray or CT", "ICU, antibiotics, drainage or nephrectomy"],
["Acute kidney injury", "Rising creatinine", "Fluids, stop nephrotoxins (see <a href=\"#/d/aki-adult\">AKI</a>)"],
["Preterm labour", "Pregnancy with pyelonephritis", "Treat bacteriuria early"]])}
<p>Uncomplicated cystitis settles in a few days in almost everyone. Pyelonephritis treated promptly rarely damages adult kidneys unless there is obstruction or reflux.</p>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>No follow-up culture is needed after uncomplicated cystitis that has resolved. Do culture after treatment in pregnancy.</li>
<li>Pyelonephritis: review at 48–72 hours; ultrasound if slow response, men, or recurrence.</li>
<li>Recurrent UTI: prevention plan as above.</li></ul>
${box("green", "What to tell the patient", `<ul><li>Finish the course even when you feel better.</li><li>Drink enough to pass pale urine; empty the bladder fully and after sex.</li><li>Nitrofurantoin turns urine dark yellow or brown: this is harmless. Take it with food.</li><li>Women: wipe front to back; avoid spermicides if UTIs keep coming back.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fever, shivering, back pain or vomiting</li><li>No better after 48 hours of treatment</li><li>Pregnant and feel unwell</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Urine dipstick: abnormal and normal", src: "images/urine-dipstick.jpg", mod: "Photograph of urine test strips", ctx: "Bedside urine testing", loc: "Reagent pads, from top: leucocytes, nitrite, urobilinogen, protein, pH, blood, specific gravity, ketones, bilirubin, glucose", find: "Left strip shows colour changes; right strip shows a normal result", signs: "Dipstick pads (this example is not a UTI: the pathological strip is from a diabetic patient)", interp: "In UTI, look at leucocyte esterase and nitrite. Nitrite positive is specific; both negative make UTI unlikely in younger women", by: "J3D3", page: "https://commons.wikimedia.org/wiki/File:Comp.Urine.Test.Strip.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Acute pyelonephritis on CT", src: "images/pyelonephritis-ct.jpg", mod: "Contrast CT abdomen, arterial (top) and portal venous (bottom) phases", ctx: "52-year-old man with fever and left flank pain", loc: "Left kidney", find: "Patchy, wedge-shaped areas of reduced enhancement with fat stranding around the kidney", signs: "Striated nephrogram; perinephric inflammation", interp: "Acute pyelonephritis. CT is not needed for typical cases; it is for suspected abscess, obstruction or failure to improve", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Akute_Pyelonephritis_links_mit_Minderperfusion_der_linken_Niere_52M_-_CT_-_001.jpg", lic: "CC BY-SA 4.0" })}
</div>
<div class="pair">
${fig({ title: "Hydronephrosis on ultrasound", src: "images/hydronephrosis-moderate.jpg", mod: "Ultrasound, right kidney", ctx: "Fever and flank pain not settling", loc: "Renal pelvis and calyces", find: "Dilated, fluid-filled pelvis and calyces", signs: "Moderate hydronephrosis", interp: "With infection this suggests an obstructed infected kidney (pyonephrosis risk): urgent drainage", by: "Cerevisae (own work)", page: "https://commons.wikimedia.org/wiki/File:Ultrasound_of_right_kidney_moderate_hydronephrosis.jpg", lic: "CC BY-SA 4.0" })}
</div>
<p>More cases (link only, copyright): <a href="https://radiopaedia.org/articles/acute-pyelonephritis" target="_blank" rel="noopener">Radiopaedia: acute pyelonephritis</a>; <a href="https://radiopaedia.org/articles/emphysematous-pyelonephritis" target="_blank" rel="noopener">emphysematous pyelonephritis</a>.</p>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult with urinary symptoms", [
F.s("Dysuria, frequency, urgency, or fever with flank pain"), F.a,
F.d("Sepsis signs (BP 100 or less, breathing 22 or more, confusion)?"), F.a,
F.b([["Yes", F.e("Urosepsis: cultures, fluids, ceftriaxone ± gentamicin within 1 h; ultrasound; refer")], ["No", F.d("Fever, flank pain or vomiting?")]]), F.a,
F.b([["Yes", F.s("Pyelonephritis: culture, first IV dose, oral by culture 7–10 days; admit if vomiting or pregnant")], ["No", F.s("Cystitis")]]), F.a,
F.b([["Woman, not pregnant", F.ok("Nitrofurantoin 5 days; no culture for a first episode")], ["Man, pregnant, catheter, recurrent", F.s("Culture first; 7 days; look for a cause")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Nitrofurantoin for the bladder, never for the kidney.</b></li>
<li>Fever means the infection is not just in the bladder.</li>
<li>Cloudy or smelly urine in an older person without symptoms is not a reason for antibiotics.</li>
<li>A man with a UTI needs a culture and a reason.</li>
<li>Repeated sterile pyuria in Bhutan: think TB.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Amoxicillin for cystitis without culture", "Fails in most patients; drives resistance", "Nitrofurantoin first"],
["Ciprofloxacin for simple cystitis", "Wastes a key drug; tendon and nerve harm", "Keep for pyelonephritis and prostatitis"],
["Treating asymptomatic bacteriuria (catheters, elderly, diabetes)", "C. difficile, resistance, no benefit", "Treat only in pregnancy or before urology procedures"],
["Missing obstruction in urosepsis", "Death despite antibiotics", "Ultrasound early"],
["Gentamicin without checking creatinine", "AKI, deafness", "Check eGFR; single dose if unsure"],
["Nitrofurantoin at eGFR under 45 or at term", "Toxicity; neonatal haemolysis", "Check eGFR and gestation"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the commonest organism in UTI?", "Escherichia coli, about 80% of infections.")}
${qa("Student", "Which symptom separates pyelonephritis from cystitis?", "Fever (with rigors, flank pain or vomiting); cystitis does not cause fever.")}
${qa("Intern/MO", "Why is nitrofurantoin not used for pyelonephritis?", "It concentrates in urine but does not reach useful levels in kidney tissue or blood.")}
${qa("Intern/MO", "What eGFR threshold limits nitrofurantoin use?", "Avoid if eGFR is under 45 (BNF/MHRA 2014); NEMF uses CrCl under 60.")}
${qa("Intern/MO", "When should asymptomatic bacteriuria be treated?", "In pregnancy and before urological procedures that breach the mucosa.")}
${qa("Specialist", "Why does this guide not follow the STG amoxicillin regimen for cystitis?", "JDWNRH data show about 70% amoxicillin resistance in urinary E. coli; international guidance avoids empirical amoxicillin and nitrofurantoin resistance is low locally.")}
${qa("Specialist", "A diabetic woman with pyelonephritis remains septic at 48 hours. What do you look for?", "Obstruction (pyonephrosis), abscess or emphysematous pyelonephritis: urgent ultrasound or CT; also an ESBL organism — review culture and consider meropenem.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Gupta K, Hooton TM, Naber KG et al. International clinical practice guidelines for the treatment of acute uncomplicated cystitis and pyelonephritis in women: 2010 update by IDSA and ESCMID. <i>Clin Infect Dis</i> 2011;52:e103–e120. <a href="https://doi.org/10.1093/cid/ciq257" target="_blank" rel="noopener">doi:10.1093/cid/ciq257</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Urinary tract infection (lower): antimicrobial prescribing (NG109), 2018; Pyelonephritis (acute): antimicrobial prescribing (NG111), 2018. <a href="https://www.nice.org.uk/guidance/ng109" target="_blank" rel="noopener">nice.org.uk/guidance/ng109</a> · <a href="https://www.nice.org.uk/guidance/ng111" target="_blank" rel="noopener">ng111</a></li>
<li id="ref-3">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) Antibiotic Book. Geneva: WHO; 2022. <a href="https://www.who.int/publications/i/item/9789240062382" target="_blank" rel="noopener">who.int/publications/i/item/9789240062382</a></li>
<li id="ref-4">Indian Council of Medical Research. Treatment Guidelines for Antimicrobial Use in Common Syndromes, 2nd ed. New Delhi: ICMR; 2019. <a href="https://www.icmr.gov.in/" target="_blank" rel="noopener">icmr.gov.in</a></li>
<li id="ref-5">Nicolle LE, Gupta K, Bradley SF et al. Clinical practice guideline for the management of asymptomatic bacteriuria: 2019 update by IDSA. <i>Clin Infect Dis</i> 2019;68:e83–e110. <a href="https://doi.org/10.1093/cid/ciy1121" target="_blank" rel="noopener">doi:10.1093/cid/ciy1121</a></li>
<li id="ref-6">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §6.1 Urinary tract infection; National Essential Medicines Formulary 2022; National Essential Medicines List 2025.</li>
<li id="ref-7">A retrospective analysis of the etiologic agents and antibiotic susceptibility pattern of uropathogens isolated in the Jigme Dorji Wangchuck National Referral Hospital, Thimphu, Bhutan. <i>BMC Res Notes</i> 2015;8:769. <a href="https://doi.org/10.1186/s13104-015-1728-1" target="_blank" rel="noopener">doi:10.1186/s13104-015-1728-1</a></li>
<li id="ref-8">Uropathogens and their antibiotic susceptibility at the national referral hospital, Thimphu (<i>Medicina Balear</i> 2022;37(5):140) and urine culture study (<i>Bhutan Health Journal</i>, Nov 2024). <a href="https://ibdigital.uib.es/greenstone/library/collection/medicinaBalear/document/AJHS_Medicina_Balear_2022v37n5p140" target="_blank" rel="noopener">Medicina Balear</a> · <a href="https://doaj.org/article/5015177ff6d54ebba8de6c570623f2f1" target="_blank" rel="noopener">Bhutan Health Journal (DOAJ)</a></li>
<li id="ref-9">Medicines and Healthcare products Regulatory Agency. Nitrofurantoin now contraindicated in most patients with an eGFR of less than 45 ml/min/1.73m². <i>Drug Safety Update</i> Sept 2014. <a href="https://www.gov.uk/drug-safety-update/nitrofurantoin-now-contraindicated-in-most-patients-with-an-estimated-glomerular-filtration-rate-egfr-of-less-than-45-ml-min-1-73m2" target="_blank" rel="noopener">gov.uk</a></li>
<li id="ref-10">Bhutan Clinical Reference app: Urinary tract infection (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG content", "<span class='pass'>Verified</span>", "STG 2024 §6.1, read from the extracted text"],
["Local resistance data", "<span class='pass'>Checked</span>", "Three JDWNRH studies; figures rounded; methods vary and ESBL not confirmed by standard testing"],
["Doses (two sources)", "<span class='pass'>Checked</span>", "BNF and NEMF/WHO AWaRe; NEMF nitrofurantoin renal threshold differs (flagged)"],
["Specialist sign-off", "<span class='flag'>Pending</span>", "Needs review by a physician, urologist or microbiologist"],
["Images", "<span class='pass'>Done</span>", "CC BY-SA 3.0 / 4.0; hydronephrosis image reused from the CKD chapter"]], "qc")}
` }
]
});
