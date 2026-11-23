/* Anaphylaxis in children */
registerPage({
id: "anaphylaxis-child",
title: "Anaphylaxis — Children",
subtitle: "Age-based IM adrenaline doses (RCUK 2021 and the Bhutan guideline side by side), weight-based fluids and infusion, food and vaccine reactions, school plans and teaching families",
age: "Children", specs: ["paeds", "emerg"],
keywords: ["anaphylaxis child", "paediatric anaphylaxis", "adrenaline dose child", "epinephrine child", "food allergy", "peanut allergy", "vaccine reaction", "AEFI anaphylaxis", "bee sting child", "angioedema child", "stridor allergic"],
related: ["anaphylaxis-adult", "asthma-child", "poisoning-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Children with anaphylaxis often look frightened, cough, vomit or simply go quiet and floppy. If breathing or circulation is affected after a likely trigger, give IM adrenaline straight away; doses are small and safe, and delay is what kills.</p>
<div class="glance">
<div><h4>Adrenaline IM</h4><p>1 mg/mL into the thigh: <b>over 12 y 0.5 mL; 6–12 y 0.3 mL; 6 months–6 y 0.15 mL; under 6 months 0.1–0.15 mL</b> (RCUK 2021). Repeat every 5 minutes.</p></div>
<div><h4>Weight-based</h4><p>0.01 mL/kg (10 microgram/kg), max 0.5 mL.</p></div>
<div><h4>Fluids</h4><p>10 mL/kg crystalloid bolus, repeat.</p></div>
<div><h4>Position</h4><p>Lie flat; sit if breathless; infants on the side or held flat on a carer's lap.</p></div>
<div><h4>Refractory</h4><p>2 IM doses + fluids, no better: adrenaline infusion 0.5–1 mL/kg/h of 1 mg/100 mL.</p></div>
<div><h4>Observe</h4><p>6–12 hours; school and home plan.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 gives the adult dose; the national Snakebite Guideline 2024 gives child doses by age (6–12 y 0.2 mg; 1–6 y 0.1 mg; under 1 y 0.05 mg), lower than RCUK. Both are shown in the tool; the RCUK doses are well studied and safe, and weight-based dosing is a good tie-breaker. Vaccination sessions in Bhutan must carry an anaphylaxis kit (AEFI guidelines). ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definition and triggers", html: `
<p>The WAO 2020 criteria are the same as in adults. In children, low blood pressure is a late sign: systolic under 70 mmHg (1 month–1 year), under 70 + 2 × age (1–10 years), under 90 mmHg (11 years and over); tachycardia, poor perfusion and drowsiness come earlier.${r(1)}</p>
${tbl(["Common triggers in children", "Notes"], [["Foods", "Egg, milk, peanuts and tree nuts, fish, wheat; increasing in South Asian cities"], ["Insect stings", "Bees and wasps"], ["Medicines", "Antibiotics (penicillins, cephalosporins), NSAIDs, antivenom, immunoglobulins"], ["Vaccines", "Rare (about 1 per million doses), within 30 minutes"], ["Latex, exercise", "Older children"]])}
` },

{ id: "patho", title: "What happens", html: `
${F.chart("In children", [F.s("Allergen → mast cell release"), F.a, F.b([["Airway", F.e("Small airways swell fast: stridor, hoarse cry")], ["Breathing", F.e("Wheeze, especially with asthma")], ["Circulation", F.e("Tachycardia, cold hands, floppiness; BP falls late")]]), F.a, F.ok("IM adrenaline reverses all three")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Age", "Bhutan (Snakebite Guideline 2024)", "RCUK 2021", "EAACI 2021 / weight"], [
["Over 12 years", "0.5 mg", "0.5 mg", "0.01 mg/kg, max 0.5 mg"],
["6–12 years", "0.2 mg", "0.3 mg", "0.01 mg/kg"],
["6 months–6 years", "0.1 mg (1–6 y)", "0.15 mg", "0.01 mg/kg"],
["Under 6 months / under 1 year", "0.05 mg (under 1 y)", "0.1–0.15 mg (under 6 months)", "0.01 mg/kg"]])}
<p>This guide uses RCUK doses (or 0.01 mg/kg when weight is known), because under-dosing is a recognised cause of failed treatment.${r(3)} Steroids and sedating antihistamines (STG) are not routine.</p>
` },

{ id: "presentation", title: "Recognition", html: `
<ul><li>Coughing, hoarse cry, stridor, drooling, wheeze, fast breathing.</li>
<li>Pale, cold, mottled, floppy, unusually quiet or sleepy; capillary refill over 2 seconds.</li>
<li>Hives, flushing, swollen lips or eyes; vomiting and tummy pain (common with foods).</li></ul>
${box("red", "Danger signs", `<ul><li>Stridor or hoarse voice; cannot swallow</li><li>SpO₂ under 94%, silent chest</li><li>Floppy, drowsy, hypotensive</li><li>Known asthma</li></ul>`)}
<h3>The typical patient</h3>
<p>A 5-year-old (18 kg) eats a biscuit containing peanuts at a birthday party, then coughs, vomits, wheezes and develops hives and swollen eyelids. She is pale and quiet. <b>This is food anaphylaxis</b>: breathing involvement with skin signs after a likely allergen. Give adrenaline 0.15 mL (RCUK) or 0.18 mL (0.01 mL/kg) of 1 mg/mL into the thigh now, lie her down, oxygen, and 180 mL of saline if she is still pale.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Croup", "Barking cough, gradual, fever, no hives"], ["Inhaled foreign body", "Sudden choking while eating or playing, one-sided signs"], ["Acute asthma", "Known asthmatic, no skin signs, no trigger"], ["Breath-holding or vasovagal episode", "Brief, recovers quickly"], ["Urticaria from viral illness", "Hives only, well child"]])}` },

{ id: "invest", title: "Investigations", html: `<p>None should delay treatment. Mast cell tryptase after resuscitation if available; SpO₂ and heart rate monitoring; glucose in a drowsy child.</p>` },

{ id: "staging", title: "Dose tool", html: `<div class="calc" data-calc="anaphdose"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. Immediately</h3>
<ul><li>Remove the trigger; call for help.</li>
<li>${dr("adrenaline_im", "Adrenaline 1 mg/mL")} IM, anterolateral thigh, by age (tool above); repeat every 5 minutes if not better. A 1 mL syringe makes small doses accurate.</li>
<li>Lie flat (infants flat on a lap or on the side); let a breathless child sit up; do not walk them.</li></ul>
<h3>B. Supportive</h3>
<ul><li>High-flow oxygen; IV or IO access; <b>10 mL/kg crystalloid</b> bolus, repeat.</li>
<li>Wheeze: ${dr("salbutamol")} 2.5–5 mg nebulised. Stridor: nebulised adrenaline 0.5 mL/kg of 1 mg/mL (max 5 mL) while calling for airway help.</li></ul>
<h3>C. Refractory</h3>
<ul><li>After 2 IM doses and a bolus: ${dr("adrenaline_inf", "adrenaline infusion")} 1 mg in 100 mL saline at 0.5–1 mL/kg/h, titrated, in a monitored setting; continue IM doses until running. Transfer to PICU.</li></ul>
<h3>D. After stabilisation</h3>
<ul><li>${dr("cetirizine")} for itch (2–5 y 2.5 mg twice daily; 6–11 y 5 mg twice daily). Avoid ${dr("promethazine")} under 2 years.</li>
<li>Observe 6–12 hours; refer to paediatric allergy; write an anaphylaxis action plan for home and school.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Child dose", "Notes"], [
[dr("adrenaline_im"), "0.01 mg/kg IM (max 0.5 mg) or by age; repeat every 5 min", "1 mg/mL; thigh"],
[dr("adrenaline_inf"), "0.5–1 mL/kg/h of 1 mg/100 mL", "Refractory"],
[dr("salbutamol"), "2.5–5 mg nebulised", "After adrenaline"],
[dr("glucagon"), "20 microgram/kg (max 1 mg)", "On beta-blockers (rare in children)"],
[dr("cetirizine"), "2.5–10 mg by age", "Skin symptoms only"]])}
` },

{ id: "populations", title: "Infants and adolescents", html: `<ul><li><b>Infants:</b> present with vomiting, floppiness, pallor or sudden quietness; hives may be missed. Use 0.01 mg/kg.</li><li><b>Adolescents:</b> highest risk of fatal food anaphylaxis (risk-taking, delayed adrenaline, asthma, alcohol); teach self-care and carry a plan.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Reaction 10 minutes after measles-rubella vaccine", "IM adrenaline from the AEFI kit; report as AEFI", "Rare but treatable"], ["Hives and vomiting only after peanut, alert child", "Give adrenaline: severe GI symptoms after a food in an allergic child can be anaphylaxis (EAACI)", "Progression is unpredictable"], ["Parent fears adrenaline will harm the heart", "Explain IM doses are safe; delay is dangerous", "Side effects are brief"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Hypoxic injury, biphasic reactions, and anxiety for the family. Fatal anaphylaxis in children is rare and mostly linked to food, asthma and delayed adrenaline.</p>` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "Advice for families and schools", `<ul><li>Avoid the trigger; read food labels; tell teachers and friends' parents.</li><li>Carry a written action plan; if an auto-injector is obtained (not on NEML), keep two with the child.</li><li>Teach older children to recognise symptoms and ask for help.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Symptoms return in the next 24 hours</li></ul>`)}
` },

{ id: "images", title: "Images", html: `<p>See urticaria and angioedema images in <a href="#/d/anaphylaxis-adult">Anaphylaxis — Adults</a>; the signs are the same in children.</p>` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with anaphylaxis", [F.s("ABC problem after likely trigger"), F.a, F.e("IM adrenaline by age or 0.01 mg/kg; lie flat; oxygen"), F.a, F.d("Better in 5 minutes?"), F.a, F.b([["No", F.e("Repeat IM; 10 mL/kg bolus; after 2 doses → infusion, PICU")], ["Yes", F.ok("Observe 6–12 h; action plan; allergy referral")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Drawing up 1 mL in a 5 mL syringe", "Inaccurate small doses", "Use a 1 mL syringe"], ["Promethazine in an infant", "Respiratory depression", "Avoid under 2 years"], ["Waiting for hives", "Infants may not show them", "Treat ABC problems"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "IM adrenaline for an 8-year-old (RCUK 2021)?", "300 micrograms = 0.3 mL of 1 mg/mL into the anterolateral thigh.")}
${qa("Intern/MO", "Fluid bolus in paediatric anaphylaxis?", "10 mL/kg crystalloid, repeated as needed.")}
${qa("Specialist", "Why is BP a poor early marker in children?", "Children compensate with tachycardia and vasoconstriction; hypotension appears late, just before collapse.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J 2020;13:100472. <a href="https://doi.org/10.1016/j.waojou.2020.100472" target="_blank" rel="noopener">doi:10.1016/j.waojou.2020.100472</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.4.18; National Guideline for the Management of Snakebites 2024; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-3">Resuscitation Council UK. Emergency treatment of anaphylaxis: guidelines for healthcare providers. 2021. <a href="https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment" target="_blank" rel="noopener">resus.org.uk</a></li>
<li id="ref-4">Muraro A, Worm M, Alviani C, et al. EAACI guidelines: anaphylaxis (2021 update). Allergy 2022;77:357–377. <a href="https://doi.org/10.1111/all.15032" target="_blank" rel="noopener">doi:10.1111/all.15032</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan child doses", "<span class='pass'>Shown</span>", "Snakebite Guideline 2024 vs RCUK 2021"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Bhutan food-allergy prevalence", "<span class='flag'>Unknown</span>", "No local data found"]], "qc")}` }
]
});
