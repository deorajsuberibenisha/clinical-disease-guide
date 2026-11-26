/* Tetanus in adults — full depth (Batch E-2, 26 Nov 2026).
   Sources read directly: Bhutan STG 2024 §8.1.7 (definition, incubation 6–10 days, clinical diagnosis, wound care, TIG + TT, diazepam,
   supportive care, 10-yearly boosters) and the Bhutan Clinical Reference topic "Tetanus"; Bhutan EPI manual (neonatal tetanus elimination
   maintained since 1994; local name TsaKum Ney); MSF Clinical Guidelines "Tetanus" (Aug 2022: full treatment regimen); CDC Clinical Guidance
   for Wound Management to Prevent Tetanus (Sept 2026); Thwaites et al. Lancet 2006 (magnesium RCT, abstract and trial registry);
   Yen & Thwaites, Lancet 2019 seminar; Bhutan NEML 2025. */
registerPage({
id: "tetanus-adult",
title: "Tetanus — Adults",
subtitle: "Prevent it after every wound, recognise lockjaw early, and treat with toxin neutralisation, metronidazole, spasm control in a quiet room, protected airway and support for an unstable autonomic system. Then vaccinate, because the illness gives no immunity",
age: "Adults", specs: ["id", "emerg", "medicine"],
keywords: ["tetanus", "lockjaw", "trismus", "risus sardonicus", "opisthotonus", "Clostridium tetani", "tetanus immunoglobulin", "TIG", "Td vaccine", "tetanus toxoid", "wound prophylaxis", "tetanus booster", "autonomic instability", "magnesium sulphate tetanus", "diazepam tetanus", "metronidazole tetanus", "TsaKum Ney", "puncture wound", "rusty nail"],
related: ["tetanus-child", "trauma-adult", "fracture-adult", "burns-adult", "rabies-adult", "diabeticfoot-adult", "ssti-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Tetanus is caused by a toxin from <i>Clostridium tetani</i> spores, which live in soil, dust and animal manure. It is entirely preventable by vaccination, yet it still kills unvaccinated adults, especially farmers and labourers with small dirty wounds. The patient stays fully conscious through painful spasms, which is why sedation and calm care are part of treatment.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Jaw stiffness (<b>trismus</b>), a fixed smile, stiff neck and back, then painful spasms triggered by noise, light or touch, with a <b>clear mind</b>.</p></div>
<div><h4>Neutralise</h4><p>${dr("tetanus_ig", "Tetanus immunoglobulin 500 IU IM")} (two sites), and start the tetanus vaccine in another limb.</p></div>
<div><h4>Stop toxin production</h4><p>${dr("metronidazole", "Metronidazole 500 mg IV")} every 8 h for 7 days; clean and debride the wound.</p></div>
<div><h4>Control spasms</h4><p>${dr("diazepam", "Diazepam")} 0.1–0.3 mg/kg IV, then infusion; dark, quiet room; airway equipment ready.</p></div>
<div><h4>Support</h4><p>Airway (tracheostomy in severe cases), NG feeding, fluids, pain relief, autonomic monitoring; ${dr("magnesium_sulfate", "magnesium")} in ICU.</p></div>
<div><h4>Prevent</h4><p>After every wound, decide on Td and TIG; boosters every 10 years (STG).</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §8.1.7: tetanus (<i>TsaKum Ney</i>) is a clinical diagnosis. Management is wound care, tetanus immunoglobulin with tetanus vaccination, diazepam for spasms, and supportive care. Boosters are advised every 10 years. Bhutan has maintained neonatal tetanus elimination since 1994 (EPI manual), so most remaining cases are in unvaccinated or under-boosted adults. Anti-tetanus immunoglobulin (human) 500 IU, Td vaccine, metronidazole IV 5 mg/mL, diazepam 5 mg/mL, midazolam, vecuronium, baclofen and magnesium sulphate 50% are on the NEML 2025. Severe tetanus needs a hospital with an ICU. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Forms of tetanus", html: `
${tbl(["Form", "Features"], [
["<b>Generalised</b> (most common, most severe)", "Trismus, then rigidity spreading to face, neck, trunk (opisthotonus), abdomen and limbs; painful spasms; autonomic instability in severe cases"],
["<b>Localised</b>", "Rigidity and spasms near the wound; may progress to generalised"],
["<b>Cephalic</b>", "After head or face wounds or ear infection; cranial nerve palsies (often facial) with trismus; often progresses"],
["<b>Neonatal</b>", "From an infected umbilical stump in babies of unvaccinated mothers — see Tetanus — children"]])}
<p>Incubation is usually 6–10 days (STG; MSF: average 7 days, range 3–21). A short incubation, and a short time from first symptom to first spasm (under 48 hours), predict severe disease. Common entry points in Bhutan: thorn, nail and wood-splinter injuries on farms, sickle and axe wounds, chronic leg ulcers, burns, dog bites, unsafe injections and septic abortion.</p>
` },

{ id: "patho", title: "How the toxin works", html: `
${F.chart("From wound to spasm", [F.s("Spores enter a wound with low oxygen (dead tissue, dirt)"), F.a, F.s("Bacteria release tetanospasmin"), F.a, F.s("Toxin travels up motor nerves to the spinal cord and brainstem"), F.a, F.e("It blocks release of inhibitory transmitters (GABA, glycine)"), F.a, F.b([["Motor", F.e("Rigidity and painful spasms; laryngeal spasm can obstruct the airway")], ["Autonomic", F.e("Swings in BP and heart rate, sweating, fever, arrhythmia — often in week 2")]]), F.a, F.ok("Recovery needs new nerve terminals: 4–6 weeks")])}
<p>Toxin bound to nerves cannot be neutralised. Immunoglobulin works only on circulating toxin, which is why it is given as soon as the diagnosis is made. The illness does not produce protective immunity because the amount of toxin is too small, so every survivor needs a full vaccine course.${r(4)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Options", "Why they differ", "This guide"], [
["TIG dose for treatment", "MSF 2022: 500 IU IM in two sites. CDC: single 500 IU dose. Older texts: 3000–6000 IU", "Lower doses were shown to be as effective; human TIG is scarce", "500 IU IM (matches the Bhutan 500 IU vial)"],
["Intrathecal TIG", "Some centres give it to reduce spasm severity", "A randomised trial in Vietnam found intrathecal antitoxin safe but without overall added benefit over IM antitoxin (Yen & Thwaites 2019)", "IM only"],
["Antibiotic", "Metronidazole (MSF, WHO) or penicillin", "Penicillin is a GABA antagonist in theory; metronidazole is effective against anaerobes", "Metronidazole 500 mg IV every 8 h for 7 days"],
["Magnesium sulphate", "Used to control spasms and autonomic instability", "The 2006 RCT showed it did not reduce the need for ventilation but reduced other drug needs and cardiovascular instability", "ICU option alongside benzodiazepines, with reflex and level monitoring"],
["Booster interval", "Bhutan STG: every 10 years. WHO: a total of 6 doses (3 primary + 3 boosters) gives lifelong protection; extra boosters after injury by wound type (CDC)", "Different programme designs", "Complete 6 lifetime doses; use the wound rules after injury"]])}
` },

{ id: "presentation", title: "Clinical features", html: `
${tbl(["Stage", "What you see"], [
["Early", "Jaw stiffness and pain, difficulty opening the mouth and chewing, neck stiffness, dysphagia, irritability"],
["Established", "Fixed grin (risus sardonicus), board-like abdomen, arched back (opisthotonus), flexed arms and extended legs; <b>consciousness is normal</b>"],
["Spasms", "Sudden, very painful, triggered by touch, noise, light, swallowing or spontaneously; laryngeal and respiratory muscle spasm cause hypoxia and aspiration"],
["Autonomic (severe)", "Labile hypertension and hypotension, tachycardia and bradycardia, sweating, fever, arrhythmia, sudden cardiac arrest"]])}
<h3>Severity (Ablett classification)</h3>
${tbl(["Grade", "Features"], [
["I — mild", "Mild to moderate trismus, general spasticity, no respiratory problems, no spasms, little dysphagia"],
["II — moderate", "Moderate trismus, marked rigidity, mild to moderate short spasms, moderate respiratory involvement (RR above 30), mild dysphagia"],
["III — severe", "Severe trismus, generalised spasticity, prolonged reflex spasms, RR above 40, apnoeic spells, severe dysphagia, tachycardia above 120"],
["IV — very severe", "Grade III plus violent autonomic disturbance of the cardiovascular system"]])}
<h3>A typical patient</h3>
<p>A 55-year-old farmer from Wangdue cut his foot on a bamboo stake 9 days ago and did nothing. He now cannot open his mouth more than a finger's width, his neck and back are stiff, and he has a spasm when the door bangs. He is alert, afebrile, with BP 150/95 and heart rate 108. He has never had a tetanus booster. <b>Action</b>: admit to a quiet side room; TIG 500 IU IM in two sites; Td 0.5 mL IM in the other arm; metronidazole 500 mg IV every 8 h; open, clean and debride the foot wound under sedation; diazepam 5–10 mg IV slowly as needed for spasms, with bag-mask and suction ready; NG tube; early referral to an ICU if spasms worsen.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "How it differs"], [
["Dental abscess or quinsy", "Local swelling, fever, pain; trismus without generalised rigidity"],
["Drug-induced dystonia (metoclopramide, haloperidol, prochlorperazine)", "Drug history; torticollis, oculogyric crisis; responds to an anticholinergic in minutes"],
["Meningitis or encephalitis", "Altered consciousness, fever, CSF changes; tetanus leaves the mind clear"],
["Strychnine poisoning", "Exposure history; rare"],
["Hypocalcaemic tetany", "Carpopedal spasm, low calcium, Chvostek and Trousseau signs"],
["Rabies", "Hydrophobia, agitation and changing consciousness after an animal bite"],
["Stiff-person syndrome, temporomandibular joint dislocation", "Chronic course; jaw dislocation on X-ray"]])}
` },

{ id: "invest", title: "Investigations", html: `
<p>Tetanus is a <b>clinical diagnosis</b> (STG). Wound culture is often negative, and a positive culture alone does not prove disease. Tests help to look after the patient and exclude other causes:</p>
<ul>
<li>Glucose, electrolytes, <b>calcium</b> and magnesium (and serum magnesium during magnesium therapy).</li>
<li>Creatine kinase and kidney function (rhabdomyolysis), full blood count.</li>
<li>ECG and continuous monitoring (arrhythmia, autonomic storms).</li>
<li>Chest X-ray if aspiration is suspected; wound X-ray for retained foreign bodies.</li>
<li>Lumbar puncture only if meningitis is a real possibility.</li>
</ul>
` },

{ id: "staging", title: "Wound prophylaxis decision", html: `
${tbl(["Vaccine history", "Clean, minor wound", "Dirty or major wound"], [
["Unknown, none, or under 3 doses", "Start or complete the vaccine course", "Start or complete the course <b>plus TIG 250 IU</b> (500 IU if the wound is over 24 h old, MSF)"],
["3 or more doses, last under 5 years ago", "Nothing", "Nothing"],
["3 or more doses, last 5 to under 10 years ago", "Nothing", "One booster dose"],
["3 or more doses, last 10 or more years ago", "One booster dose", "One booster dose"],
["HIV or severe immunodeficiency", "As above", "TIG whatever the vaccine history (CDC)"]])}
<p>Dirty or major wounds: punctures, wounds with dirt, soil, faeces or saliva (bites), burns, compound fractures, crush injuries, frostbite, and necrotic or gangrenous wounds (CDC 2026). <b>Antibiotics do not prevent tetanus</b> (CDC); give them only for infection.${r(2, 3)}</p>
<div class="calc" data-calc="tetanuswound"></div>
` },

{ id: "manage", title: "Management of tetanus", html: `
<ol>
<li><b>Place and people:</b> a dark, quiet room; handle gently and as little as possible, ideally after sedation; turn every 3–4 hours; teach the family the danger signs (cough, breathlessness, apnoea, secretions, cyanosis).</li>
<li><b>Airway:</b> suction, oxygen, bag-mask at the bedside. Severe spasms, laryngospasm or the need for heavy sedation: intubate and plan an <b>early tracheostomy</b> (prolonged spasms make long-term oral intubation dangerous).</li>
<li><b>Neutralise toxin:</b> ${dr("tetanus_ig", "TIG 500 IU IM")} once, in two sites.</li>
<li><b>Stop toxin production:</b> ${dr("metronidazole", "metronidazole")} 500 mg IV every 8 h for 7 days; find and treat the entry wound under sedation (clean, irrigate, debride deep wounds).</li>
<li><b>Spasms and sedation:</b> ${dr("diazepam", "diazepam")} 0.1–0.3 mg/kg by slow IV injection every 1–4 hours by response; if spasms persist despite hourly doses, an infusion of 0.1 mg/kg/h, increased by 0.1 mg/kg/h up to 0.5 (exceptionally 0.8) mg/kg/h, while the respiratory rate stays at 12/min or more. Use a dedicated vein. ${dr("midazolam", "Midazolam")} is an alternative in ICU. ${dr("baclofen", "Baclofen")} orally may reduce rigidity.</li>
<li><b>Severe spasms despite sedation:</b> ventilation with a non-depolarising neuromuscular blocker (vecuronium on the NEML) in ICU.</li>
<li><b>Autonomic instability:</b> ICU monitoring; ${dr("magnesium_sulfate", "magnesium sulphate")} infusion (the 2006 trial used 0.5–2 g/h, titrated) with patellar reflex and serum magnesium checks; morphine for sympathetic storms; avoid sudden drops in pressure.</li>
<li><b>Pain, nutrition, fluids:</b> morphine via NG tube if needed; NG feeding early (high calorie needs); IV fluids; bowel and bladder care; VTE prophylaxis; pressure-area care.</li>
<li><b>Vaccinate</b> with Td, and complete the course after recovery.</li>
<li><b>Wean</b> diazepam slowly over days (convert to 4 NG doses a day, then cut by 10–20% daily). Stopping suddenly brings back spasms (MSF).</li>
</ol>
<div class="calc" data-calc="tetanusrx"></div>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML 2025)", "Adult dose", "Notes"], [
[dr("tetanus_ig", "Anti-tetanus immunoglobulin 500 IU"), "Treatment 500 IU IM once (two sites); prophylaxis 250 IU (500 IU if wound > 24 h)", "Never IV"],
[dr("td_vaccine", "Td vaccine"), "0.5 mL IM; then complete the course", "Different limb from TIG"],
[dr("metronidazole", "Metronidazole 5 mg/mL IV"), "500 mg IV every 8 h for 7 days", "Oral 400 mg tablets when swallowing allows"],
[dr("diazepam", "Diazepam 5 mg/mL"), "0.1–0.3 mg/kg slow IV every 1–4 h; infusion 0.1–0.5 mg/kg/h", "Respiratory monitoring; wean slowly"],
[dr("midazolam", "Midazolam 1 mg/mL"), "ICU infusion by response", "Alternative to diazepam"],
[dr("magnesium_sulfate", "Magnesium sulphate 50%"), "ICU infusion, titrated (trial range 0.5–2 g/h)", "Stop if reflexes disappear or respiration falls"],
[dr("baclofen", "Baclofen 10 mg"), "Orally by NG tube, titrated", "Adjunct for rigidity"],
["Vecuronium (NEML 2 mg/mL)", "ICU only, with ventilation", "For spasms uncontrolled by sedation"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Pregnancy</b>", "Give Td as per the Bhutan EPI record (up to 5 doses; Td1 now, Td2 after 4 weeks, then 6 months, 1 year, 1 year); TIG and Td are safe. Treat tetanus as above"],
["<b>After septic abortion or home delivery</b>", "A cause of maternal tetanus: debride retained products, metronidazole, TIG, Td"],
["<b>Older adults</b>", "Least likely to be fully vaccinated; more autonomic deaths; give a Td course after any significant wound"],
["<b>Diabetic foot and chronic ulcers</b>", "Chronic wounds are tetanus-prone; check vaccine status at every ulcer visit"],
["<b>People who inject drugs</b>", "Unsafe injections are a recognised route"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["No ICU bed, spasms getting worse", "Transfer early with airway equipment and diazepam; intubate before transfer if spasms threaten the airway", "Laryngospasm on the road is fatal"],
["No TIG available", "Give everything else (metronidazole, Td, sedation, wound care); find TIG at the nearest hospital", "TIG neutralises only circulating toxin; earlier is better"],
["Patient wants to go home after mild trismus", "Explain that spasms usually peak in the first 1–2 weeks; admit", "Severe disease can follow mild onset"],
["Spasms return when diazepam is reduced", "Slow the wean (5% a day or every 48 h)", "Benzodiazepine dependence and persistent toxin effect"]])}
` },

{ id: "complications", title: "Complications and outcome", html: `
<p>Asphyxia from laryngospasm, aspiration pneumonia, ventilator-associated pneumonia, autonomic storms with arrhythmia and sudden death, rhabdomyolysis and kidney injury, fractures of vertebrae from violent spasms, pressure sores, venous thromboembolism and malnutrition. Recovery usually takes 4–6 weeks. With good supportive care, many deaths are preventable even with limited resources (MSF).</p>
` },

{ id: "followup", title: "Prevention and follow-up", html: `
${box("green", "After recovery", `<ul><li>Complete the tetanus vaccine course: tetanus does not give immunity.</li><li>Physiotherapy for stiffness and weakness; psychological support (patients remember the spasms).</li></ul>`)}
${box("blue", "Prevention for the community", `<ul><li>Six lifetime doses of tetanus-containing vaccine (3 in infancy and 3 boosters); in Bhutan, Td at about 6 and 13 years, and Td in pregnancy by record.</li><li>Boosters every 10 years (STG) and after dirty wounds by the wound rules.</li><li>Clean every wound well; wear shoes and gloves on farms; safe injections; facility delivery and clean cord care.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Generalised tetanus", src: "images/tetanus-cdc.jpg", mod: "Photograph", ctx: "Generalised tetanus", loc: "Whole body", find: "Rigid posture with spasm of back and limb muscles", interp: "Classic generalised tetanus; the patient is conscious", by: "CDC Public Health Image Library", page: "https://commons.wikimedia.org/wiki/File:PHIL_tetanus.jpg", lic: "Public domain" })}
${fig({ title: "Trismus (lockjaw)", src: "images/lockjaw.jpg", mod: "Photograph", ctx: "Early tetanus", loc: "Face and jaw", find: "Spasm of the masseter muscles with inability to open the mouth", interp: "Trismus is usually the first sign of generalised tetanus", by: "CDC / Dr. Thomas", page: "https://commons.wikimedia.org/wiki/File:Lock-jaw_2857.jpg", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Suspected tetanus", [F.s("Trismus, rigidity, spasms, clear consciousness, wound history"), F.a, F.e("Quiet room; airway equipment; IV access"), F.a, F.e("TIG 500 IU IM + Td (other limb) + metronidazole 500 mg IV 8-hourly + wound debridement"), F.a, F.e("Diazepam boluses → infusion; NG feeding"), F.a, F.d("Spasms controlled without respiratory compromise?"), F.a, F.b([["No", F.e("ICU: intubation/tracheostomy, ventilation, neuromuscular block, magnesium")], ["Yes", F.ok("Continue; watch for autonomic instability in week 2; wean slowly")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for a positive culture", "Clinical diagnosis; culture often negative", "Treat on the clinical picture"],
["Examining the mouth repeatedly", "Triggers spasms", "Minimal handling; sedate first"],
["Stopping diazepam suddenly", "Spasms return", "Wean over days"],
["Forgetting the vaccine", "No immunity after illness", "Give Td on day 1 and complete the course"],
["Antibiotics instead of vaccine after a wound", "Do not prevent tetanus", "Clean the wound; Td and TIG by the wound rules"],
["Not looking for the wound", "Toxin production continues", "Search, clean and debride"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What is the usual first sign of tetanus?", "Trismus (lockjaw): stiffness of the jaw muscles, with a clear mind.")}
${qa("Intern/MO", "A man with a dirty wound has never been vaccinated. What do you give?", "Clean and debride the wound; start the Td course; tetanus immunoglobulin 250 IU IM (500 IU if the wound is over 24 hours old) in a different limb.")}
${qa("Intern/MO", "What is the treatment regimen for established tetanus?", "TIG 500 IU IM once; metronidazole 500 mg IV every 8 h for 7 days; wound care; diazepam for spasms; supportive care; Td vaccine.")}
${qa("Specialist", "What did the 2006 Vietnamese magnesium trial show?", "Magnesium did not reduce the need for mechanical ventilation or mortality, but it reduced the need for midazolam, neuromuscular blockers and verapamil to control spasms and cardiovascular instability.")}
${qa("Specialist", "Why is early tracheostomy often chosen in severe tetanus?", "Spasms and autonomic instability last weeks; a tracheostomy secures the airway, avoids prolonged oral intubation and allows lighter sedation.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Médecins Sans Frontières. Clinical guidelines — diagnosis and treatment manual: Tetanus. Updated August 2022. <a href="https://medicalguidelines.msf.org/en/viewport/CG/english/tetanus-16689919.html" target="_blank" rel="noopener">medicalguidelines.msf.org</a></li>
<li id="ref-2">Centers for Disease Control and Prevention. Clinical guidance for wound management to prevent tetanus. Updated 8 September 2026. <a href="https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html" target="_blank" rel="noopener">cdc.gov</a></li>
<li id="ref-3">Centers for Disease Control and Prevention. Epidemiology and Prevention of Vaccine-Preventable Diseases (Pink Book), Chapter 21: Tetanus. <a href="https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-21-tetanus.html" target="_blank" rel="noopener">cdc.gov</a></li>
<li id="ref-4">Yen LM, Thwaites CL. Tetanus. Lancet 2019;393:1657–1668. <a href="https://doi.org/10.1016/S0140-6736(18)33131-3" target="_blank" rel="noopener">doi:10.1016/S0140-6736(18)33131-3</a></li>
<li id="ref-5">Thwaites CL, Yen LM, Loan HT, et al. Magnesium sulphate for treatment of severe tetanus: a randomised controlled trial. Lancet 2006;368:1436–1443. <a href="https://doi.org/10.1016/S0140-6736(06)69444-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(06)69444-0</a></li>
<li id="ref-6">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.7 Tetanus; Expanded Programme on Immunization manual (revised); National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §8.1.7", "<span class='pass'>Read directly</span>", "No doses in the STG; doses from MSF 2022"],
["MSF Clinical Guidelines 2022", "<span class='pass'>Read directly</span>", "TIG, metronidazole, diazepam regimen, prophylaxis table"],
["CDC wound guidance 2026", "<span class='pass'>Read directly</span>", "Vaccine intervals, TIG indications, no prophylactic antibiotics"],
["Magnesium regimen", "<span class='flag'>Range only</span>", "Abstract and trial registry read (0.5–2 g/h); loading dose per local ICU protocol"],
["Ablett severity grades", "<span class='flag'>Standard teaching</span>", "Widely used clinical classification (Ablett 1967); not re-read from the original"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculators", "<span class='pass'>Tested</span>", "tetanuswound, tetanusrx"]], "qc")}` }
]
});
