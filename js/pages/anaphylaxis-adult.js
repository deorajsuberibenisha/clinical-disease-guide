/* Anaphylaxis in adults */
registerPage({
id: "anaphylaxis-adult",
title: "Anaphylaxis — Adults",
subtitle: "Recognise it in seconds, give IM adrenaline into the thigh first, lie the patient flat, and know what to do when two doses have not worked: WAO 2020 criteria, Resuscitation Council UK 2021 and the Bhutan STG side by side",
age: "Adults", specs: ["emerg", "medicine"],
keywords: ["anaphylaxis", "anaphylactic shock", "allergic reaction", "adrenaline", "epinephrine", "angioedema", "urticaria", "refractory anaphylaxis", "biphasic reaction", "drug allergy", "bee sting", "antivenom reaction", "ERIG reaction", "tryptase"],
related: ["anaphylaxis-child", "snakebite-adult", "rabies-adult", "asthma-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Anaphylaxis kills by blocking the airway, tightening the lungs or emptying the circulation, often within minutes. Intramuscular adrenaline given early almost always works. Antihistamines and steroids never replace it.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Sudden airway, breathing or circulation problem, usually with skin or mucosal changes, after a likely trigger.</p></div>
<div><h4>Adrenaline first</h4><p>${dr("adrenaline_im", "Adrenaline 1 mg/mL")} <b>0.5 mL IM</b> into the anterolateral thigh; <b>repeat every 5 minutes</b>.</p></div>
<div><h4>Position</h4><p>Lie flat, legs raised; sit only if breathless; never stand up.</p></div>
<div><h4>Support</h4><p>High-flow oxygen; 500–1000 mL crystalloid bolus; salbutamol for wheeze.</p></div>
<div><h4>Refractory</h4><p>No better after 2 IM doses: ${dr("adrenaline_inf", "adrenaline infusion")} and expert help.</p></div>
<div><h4>Observe</h4><p>6–12 hours; refer to allergy; written plan.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §1.4.18 uses the World Allergy Organization 2020 criteria and adrenaline 0.5 mL of 1:1000 IM. In Bhutan, antivenom, rabies immunoglobulin, antibiotics (penicillins, ceftriaxone), NSAIDs, contrast media, bee and wasp stings, and foods are common triggers. Adrenaline 1 mg/mL ampoules are available to PHC level; every emergency tray, vaccination session and antivenom infusion needs one drawn up. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definition and criteria", html: `
${tbl(["WAO 2020 criterion", "Features"], [
["1", "Acute onset (minutes to hours) of skin and/or mucosal involvement (hives, itch, flushing, swollen lips, tongue or uvula) <b>plus</b> at least one of: breathing problems (wheeze, stridor, hypoxia), low BP or end-organ dysfunction (collapse, incontinence), or severe gastrointestinal symptoms after a non-food trigger"],
["2", "Acute onset of <b>hypotension, bronchospasm or laryngeal involvement</b> after exposure to a known or highly probable allergen, <b>even without skin signs</b>"]])}
<p>Hypotension in adults: systolic under 90 mmHg or a fall of more than 30% from baseline. Skin signs are absent in 10–20%: do not wait for a rash.${r(1)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Mast cell and basophil release", [
F.s("Trigger (IgE-mediated or direct mast cell activation)"), F.a, F.s("Histamine, tryptase, leukotrienes, prostaglandins, PAF"), F.a,
F.b([["Vessels", F.e("Vasodilatation and leak: up to a third of plasma lost in minutes → shock")], ["Airways", F.e("Laryngeal oedema, bronchospasm")], ["Skin and gut", F.e("Hives, angioedema, cramps, vomiting")]]), F.a,
F.ok("Adrenaline: α1 restores tone, β1 supports the heart, β2 opens airways and stops further mast cell release")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "RCUK 2021 / WAO 2020 / EAACI 2021", "This guide"], [
["Antihistamine", "Promethazine 10 mg IV/IM for skin signs", "Non-sedating oral antihistamine after stabilisation; not part of emergency treatment", "Cetirizine after adrenaline; promethazine acceptable " + LB.int()],
["Steroids", "Hydrocortisone 100 mg IV to prevent biphasic reaction", "Not routine; consider only for refractory anaphylaxis or asthma" + r(3), "Not routine " + LB.int()],
["Observation", "Not specified", "6 hours after one effective dose; 12 hours if 2 or more doses or severe" + r(3), "As RCUK"],
["Refractory treatment", "Not specified", "Low-dose adrenaline infusion after 2 IM doses and fluids", "As RCUK"]])}
` },

{ id: "presentation", title: "Recognition", html: `
<ul><li><b>Airway:</b> throat tightness, hoarse voice, stridor, swelling of tongue or lips.</li>
<li><b>Breathing:</b> wheeze, breathlessness, cyanosis, SpO₂ under 94%.</li>
<li><b>Circulation:</b> faintness, pallor, clammy skin, tachycardia, low BP, collapse, arrest.</li>
<li><b>Skin and gut:</b> urticaria, flushing, angioedema; vomiting, abdominal cramps.</li></ul>
${box("red", "Higher risk of death", `<ul><li>Asthma, especially poorly controlled</li><li>Beta-blockers or ACE inhibitors</li><li>Older age, heart disease</li><li>Delay in adrenaline; standing up during the reaction</li><li>IV drug triggers (fast onset)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 38-year-old man in Mongar is given IV ceftriaxone and, within 5 minutes, feels his throat closing, wheezes and becomes pale with a BP of 70/40; hives spread across his chest. <b>This is anaphylaxis</b>: airway, breathing and circulation compromise straight after a drug. Stop the infusion, lie him flat with legs raised, give adrenaline 0.5 mg IM into the thigh now, oxygen and a fluid bolus, and repeat the adrenaline in 5 minutes if he is not clearly better.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Vasovagal faint", "Slow pulse, pallor, no rash or wheeze, quick recovery lying flat"], ["Acute severe asthma", "Wheeze without skin signs or hypotension, gradual"], ["Panic attack", "Tingling, fast breathing, normal BP and SpO₂"], ["Isolated urticaria or angioedema", "No airway, breathing or circulation problem"], ["ACE-inhibitor angioedema", "Swelling without hives; adrenaline less effective"], ["Septic shock", "Fever, source, slower onset"]])}` },

{ id: "invest", title: "Investigations", html: `
<p><b>Do not delay treatment for tests.</b></p>
${tbl(["Test", "When", "Why"], [["Mast cell tryptase", "As soon as possible after resuscitation, then 1–2 hours and over 24 hours (baseline)", "Supports the diagnosis; send if a laboratory offers it"], ["ECG, SpO₂, BP monitoring", "Throughout", "Ischaemia, arrhythmia"], ["Glucose", "If collapsed", "Mimics"]])}
` },

{ id: "staging", title: "Dose tool", html: `<div class="calc" data-calc="anaphdose"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Immediately</h3>
<ul><li>Stop or remove the trigger (infusion, antivenom, sting: scrape it off). Call for help.</li>
<li><b>Adrenaline IM</b> ${dr("adrenaline_im")} 1 mg/mL, <b>0.5 mL into the anterolateral thigh</b> through clothing if needed. Repeat after 5 minutes if not improving. <b>Never give 1 mg/mL IV.</b></li>
<li>Lie flat with legs raised; sit up if breathing is the main problem; left lateral in pregnancy.</li></ul>
<h3>B. Supportive</h3>
<ul><li>High-flow oxygen 15 L/min; IV or IO access; <b>crystalloid 500–1000 mL</b> rapidly, repeat as needed (several litres may be required).</li>
<li>Persistent wheeze after adrenaline: ${dr("salbutamol")} 5 mg nebulised.</li>
<li>Stridor: nebulised adrenaline 5 mL of 1 mg/mL as a temporising measure; call the most experienced airway operator early.</li></ul>
<h3>C. Refractory anaphylaxis</h3>
<ul><li>No improvement after <b>2 IM doses and a fluid bolus</b>: start ${dr("adrenaline_inf", "low-dose adrenaline infusion")} (1 mg in 100 mL saline at 0.5–1 mL/kg/hour, RCUK 2021) with monitoring; keep giving IM doses every 5 minutes until it runs.</li>
<li>On beta-blockers: ${dr("glucagon")} 1–2 mg IV every 5 minutes. Add noradrenaline or vasopressin for persistent shock in ICU.</li>
<li>Cardiac arrest: standard ALS with IV adrenaline 1 mg (1:10,000) every 3–5 minutes and large fluid volumes.</li></ul>
<h3>D. After stabilisation</h3>
<ul><li>${dr("cetirizine")} 10 mg for itch and hives (STG: ${dr("promethazine")} 10 mg IV/IM slowly).</li>
<li>Steroids (${dr("hydrocortisone_iv")} 200 mg) only if refractory or with asthma, not to prevent biphasic reactions (no good evidence).</li>
<li>Observe, then discharge with a written plan, referral to allergy, and a clear record of the trigger.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("adrenaline_im"), "0.5 mg (0.5 mL of 1 mg/mL) IM thigh; repeat every 5 min", "First and most important"],
[dr("adrenaline_inf"), "1 mg/100 mL at 0.5–1 mL/kg/h", "Refractory; monitored setting"],
[dr("salbutamol"), "5 mg nebulised", "Wheeze after adrenaline"],
[dr("glucagon"), "1–2 mg IV/IM every 5 min", "Beta-blocked patients"],
[dr("cetirizine"), "10 mg orally", "Skin symptoms after stabilisation"],
[dr("promethazine"), "10 mg IV/IM slowly (STG)", "Sedating; may lower BP"],
[dr("hydrocortisone_iv"), "200 mg IV", "Refractory or asthma only"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> same adrenaline dose; left lateral tilt; fetal monitoring; anaphylaxis to antibiotics in labour is a classic trigger.</li><li><b>Older adults and heart disease:</b> adrenaline is still first line; IM doses are safe; avoid IV boluses outside arrest.</li><li><b>Asthma:</b> highest risk of death; treat bronchospasm aggressively.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Reaction during antivenom", "Stop, IM adrenaline; restart slowly once settled if still needed", "Antivenom benefit outweighs risk"], ["Only skin rash after a bee sting", "Antihistamine, observe 1–2 hours; adrenaline at first airway, breathing or BP sign", "May progress"], ["Patient on bisoprolol, no response", "Glucagon, infusion", "Beta-blockade blunts adrenaline"], ["Patient wants to go home at 1 hour", "Explain biphasic risk; observe at least 6 hours", "Recurrence in up to 5%"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Hypoxic brain injury, myocardial ischaemia (Kounis syndrome), biphasic reactions in about 5% (usually within 12 hours), death in under 1% of hospital-treated cases. Most deaths happen within the first hour, mainly from airway obstruction or shock with delayed adrenaline.</p>` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "Advice to give", `<ul><li>Write the trigger in your health book and tell every health worker before any medicine.</li><li>Learn the warning signs: swelling of lips or throat, breathing difficulty, faintness. Seek help at once.</li><li>If prescribed an adrenaline auto-injector (not on the NEML; can be bought abroad), carry two and learn to use them.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Symptoms return in the next 24 hours</li></ul>`)}
<p>Refer to an allergy or medicine specialist (NRH) for confirmation, testing and venom immunotherapy if stings are the trigger.</p>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Urticaria (hives)", src: "images/urticaria-hives.jpg", mod: "Photograph", ctx: "Skin involvement", loc: "Trunk", find: "Raised, itchy, pale-centred wheals with red flare", interp: "Skin sign of mast cell release; with breathing or circulation problems it means anaphylaxis", by: "Enochlau", page: "https://commons.wikimedia.org/wiki/File:Rash.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Angioedema of the lips", src: "images/angioedema-lips.jpg", mod: "Photograph", ctx: "Mucosal involvement", loc: "Lips", find: "Marked swelling of the lips", interp: "Tongue, throat or voice change suggests airway threat: adrenaline now", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:AngioedemaFra.JPG", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Anaphylaxis", [F.s("Airway, breathing or circulation problem after a trigger"), F.a, F.e("Adrenaline 0.5 mg IM thigh; lie flat; call help; oxygen; fluids"), F.a, F.d("Better in 5 minutes?"), F.a, F.b([["No", F.e("Repeat IM adrenaline; second bolus; after 2 doses → infusion")], ["Yes", F.ok("Antihistamine for skin; observe 6–12 h")]]), F.a, F.s("Written plan, allergy referral, record the trigger")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Antihistamine or steroid first", "Delays adrenaline", "Adrenaline first, always"], ["Subcutaneous or deltoid adrenaline", "Slower absorption", "Anterolateral thigh IM"], ["1 mg/mL adrenaline IV", "Arrhythmia, stroke", "IV only as a dilute infusion or in arrest"], ["Sitting a hypotensive patient up", "Empty-heart arrest", "Lie flat, legs up"], ["Discharging after 1 hour", "Biphasic reaction", "Observe 6–12 hours"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Where and how is adrenaline given in anaphylaxis?", "0.5 mg (0.5 mL of 1 mg/mL) intramuscularly into the anterolateral thigh, repeated every 5 minutes if needed.")}
${qa("Intern/MO", "Define refractory anaphylaxis.", "Persisting respiratory or cardiovascular problems despite 2 appropriate IM adrenaline doses and fluid resuscitation.")}
${qa("Specialist", "Why may a patient on a beta-blocker not respond, and what helps?", "Beta-receptor blockade blunts adrenaline; glucagon bypasses the receptor by raising cAMP.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J 2020;13:100472. <a href="https://doi.org/10.1016/j.waojou.2020.100472" target="_blank" rel="noopener">doi:10.1016/j.waojou.2020.100472</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.4.18 Anaphylaxis; National Guideline for the Management of Snakebites 2024 (antivenom reactions); NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-3">Resuscitation Council UK. Emergency treatment of anaphylaxis: guidelines for healthcare providers. London: RCUK; 2021. <a href="https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment" target="_blank" rel="noopener">resus.org.uk</a></li>
<li id="ref-4">Muraro A, Worm M, Alviani C, et al. EAACI guidelines: anaphylaxis (2021 update). Allergy 2022;77:357–377. <a href="https://doi.org/10.1111/all.15032" target="_blank" rel="noopener">doi:10.1111/all.15032</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §1.4.18", "<span class='pass'>Used</span>", "Management text partly garbled in the PDF; Clinical Reference summary used"], ["RCUK 2021, WAO 2020, EAACI 2021", "<span class='pass'>Used</span>", "Doses consistent"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Adrenaline auto-injector", "<span class='flag'>Not on NEML 2025</span>", "Advice adapted"]], "qc")}` }
]
});
