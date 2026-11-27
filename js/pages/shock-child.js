/* Shock — children. Thin-page upgrade Round 2, 27 Nov 2026 (id, shockcalc calculator and related links kept).
   Sources: Bhutan Hospital IMNCI 3rd ed. 2024 §3.5 (read 27 Nov 2026 from _work/research/imnci2024.txt: shock = cold clammy skin + CRT > 3 s + fast weak
   pulse; tachycardia > 180 infants/toddlers, > 160 over 2 y; BP not used to assess shock; oxygen > 94%, warm, IV/IO, bloods; pressure for bleeding — 'do
   not use a tourniquet'; 10–20 mL/kg RL/NS over 5–10 min hypotensive, 5–20 min compensated, over 60 min if febrile, malnourished or anaemic; assess type;
   SAM: N/2 or RL with 5% glucose 15 mL/kg over 1 h, stop if pulse +15 or RR +5, second 15 mL/kg only if partial improvement with diarrhoea; Table 1
   differential of shock); Bhutan EM booklet 2018 ch. 8B (via BCR: hypotension by age, 20 mL/kg up to 60, cardiogenic 5–10 mL/kg over 10–20 min,
   ceftriaxone, cold → adrenaline, warm → noradrenaline; IM adrenaline misprint); SSC children 2026, FEAST, WHO ETAT (as on sepsis-child: up to 40 mL/kg
   without PICU, 40–60 with PICU; adrenaline or noradrenaline, no preference; peripheral/IO; adrenaline 0.05–0.1 µg/kg/min; 0.3 mg/kg in 50 mL);
   RCUK anaphylaxis 2021 (0.01 mg/kg IM, max 0.5 mg); NICE NG39 (child blood boluses 10 mL/kg; TXA 15 mg/kg then 2 mg/kg/h as on trauma-child);
   NEML 2025. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "shock-child",
title: "Shock — Children",
subtitle: "Children hold their blood pressure until late: treat cold hands, slow capillary refill and a fast weak pulse as shock, give 10–20 mL/kg boluses with reassessment, and check glucose",
age: "Infants & children", specs: ["paeds", "picu", "emerg"],
keywords: ["paediatric shock", "septic shock child", "compensated shock", "hypotensive shock", "capillary refill", "fluid bolus child", "cold shock", "warm shock", "ETAT", "FEAST", "hypotension by age", "IMNCI shock", "dengue shock", "SAM shock", "intraosseous", "adrenaline infusion child"],
related: ["shock-adult", "sepsis-child", "ge-child", "dengue-child", "anaphylaxis-child", "trauma-child", "burns-child", "sam-child", "neoshock-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In children, low blood pressure means arrest is near. Recognise shock earlier: <b>cold hands, capillary refill over 3 seconds and a fast, weak pulse</b> ${r(1)}.</p>
<div class="glance">
<div><h4>Recognise</h4><p>Cold clammy skin + CRT over 3 s + fast weak pulse (over 180 in infants and toddlers, over 160 above 2 years). BP is not needed to diagnose shock ${r(1)}.</p></div>
<div><h4>Bolus</h4><p>10–20 mL/kg Ringer's lactate or normal saline: over 5–10 min if hypotensive, 5–20 min if compensated, over 60 min if febrile, malnourished or very anaemic. Reassess after each ${r(1)}.</p></div>
<div><h4>Limit</h4><p>Up to 40 mL/kg without PICU, 40–60 mL/kg with PICU; stop if the liver enlarges or crackles appear ${r(3)}.</p></div>
<div><h4>Next</h4><p>Glucose in every child; antibiotics within 1 hour if septic; ${dr("adrenaline_inf", "adrenaline")} or ${dr("noradrenaline")} if shock persists ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Hospital IMNCI 2024 (§3.5, Charts 6 and 7) is the national standard for children's shock at all hospitals ${r(1)}. The EM booklet 2018 (chapter 8B) gives 20 mL/kg up to 60 mL/kg; its table printing IM adrenaline as "0.1 mg/kg of 1:10,000" is an error — use 0.01 mg/kg of 1 mg/mL IM (max 0.5 mg) for anaphylaxis ${r(2)} ${r(6)}. Paediatric ICU care is mainly at JDWNRH; start adrenaline peripherally or by IO and call early ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Types and hypotension by age", html: `
${tbl(["Type", "Common causes in Bhutan", "Clues"], [
["Hypovolaemic", "Diarrhoea (cholera in outbreaks), bleeding, burns", "Profuse diarrhoea, sunken eyes; trauma " + r(1)],
["Dengue shock", "Capillary leak, day 3–7", "Dengue season, rash, petechiae, rising haematocrit " + r(1)],
["Septic", "Pneumonia, meningitis, meningococcal disease, typhoid", "Very ill, febrile, purpura " + r(1)],
["Cardiogenic", "Myocarditis, congenital heart disease, SVT", "Murmur, big liver, respiratory distress; worse with fluids " + r(1)],
["Anaphylactic", "Drugs, stings, food, antivenom", "Urticaria, wheeze, swelling " + r(6)],
["Obstructive", "Tension pneumothorax, tamponade", "Trauma, absent breath sounds, raised JVP"]
])}
<h3>Hypotension (late sign)</h3>
${tbl(["Age", "Systolic BP below"], [["Term neonate", "60 " + LB.exp("PALS")], ["1–12 months", "70 " + r(2)], ["1–10 years", "70 + 2 × age in years " + r(2)], ["Over 10 years", "90 " + r(2)]])}
<p><b>Compensated shock:</b> perfusion poor, BP still normal. <b>Hypotensive shock:</b> BP below the line — treat at once ${r(1)} ${r(2)}.</p>
` },
{ id: "patho", title: "Pathophysiology", html: `
<p>Children have a small stroke volume, so cardiac output depends on heart rate. Strong vasoconstriction keeps the BP normal until a large part of the circulating volume is lost — then the child decompensates suddenly ${r(2)}.</p>
${F.chart("Paediatric shock", [F.s("Fluid loss, capillary leak, infection, pump failure"), F.a, F.s("Tachycardia + vasoconstriction (cold hands, slow CRT) keep BP normal"), F.a, F.s("Lactate rises, urine falls, child becomes lethargic"), F.a, F.e("Sudden hypotension → bradycardia → arrest")])}
<p>Hypovolaemia is the commonest cause in children ${r(1)}. In severe malnutrition the heart muscle is weak, so fast fluids cause pulmonary oedema ${r(1)}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan IMNCI 2024", "Bhutan EM booklet 2018", "International (SSC children 2026, WHO)", "This guide"], [
["Bolus size and rate", "10–20 mL/kg over 5–10 min (hypotensive) or 5–20 min (compensated); over 60 min if febrile, SAM or anaemic", "20 mL/kg over 5–10 min", "10–20 mL/kg", "IMNCI " + r(1)],
["Total in first hour", "Individualise by reassessment", "Up to 60 mL/kg", "Up to 40 mL/kg without PICU; 40–60 with PICU " + r(3), "SSC by setting " + r(3)],
["No PICU, no hypotension", "Slower boluses in febrile illness", "—", "FEAST: boluses increased deaths in African children with impaired perfusion but no hypotension " + r(4), "Bolus for clear shock; reassess often " + r(1) + r(4)],
["First vasoactive drug", "—", "Cold shock adrenaline, warm noradrenaline", "Adrenaline or noradrenaline; no preference " + r(3), "Adrenaline or noradrenaline — whichever the team knows; booklet's cold/warm split is a reasonable guide " + r(2) + r(3)],
["Bleeding control", "Pressure; 'do not use a tourniquet'", "—", "Tourniquet if limb bleeding is not controlled by pressure " + r(7), "Pressure first; tourniquet only for life-threatening limb bleeding " + r(7) + " " + LB.loc()],
["SAM", "15 mL/kg over 1 h, special fluid", "—", "Same principle", "IMNCI Chart 7 " + r(1)]
])}
` },
{ id: "presentation", title: "Assessment", html: `
<h3>IMNCI circulation check</h3>
<ol>
<li><b>Hands warm?</b> If warm, circulation is adequate. If cold, check capillary refill ${r(1)}.</li>
<li><b>Capillary refill:</b> press the nail bed of the thumb or big toe (sternum or forehead in a young infant) for 3 seconds with the limb slightly above heart level; over 3 seconds = shock. A cold room also slows refill — then rely on the pulse ${r(1)}.</li>
<li><b>Pulse:</b> radial; if hard to find, brachial, femoral or carotid. Weak and fast (over 180 in infants/toddlers, over 160 over 2 years) = shock ${r(1)}.</li>
</ol>
<p>Then check consciousness (AVPU), breathing, liver size and lung crackles (baseline before fluids), urine output, temperature, rash, signs of dehydration and of malnutrition ${r(1)}.</p>
<h3>Find the cause (IMNCI Table 1)</h3>
<p>Profuse diarrhoea or cholera outbreak → hypovolaemic. Trauma or a bleeding site → haemorrhagic. Dengue season, high fever, headache, rash or petechiae → dengue shock. Heart disease, murmur, enlarged liver, respiratory distress → cardiogenic. Febrile, very ill, meningococcal outbreak → septic ${r(1)}.</p>
<h3>The typical patient</h3>
<p>A 3-year-old (14 kg) with diarrhoea in Samtse is lethargic, with cold hands, CRT 5 s, HR 170 and BP 72/40 (below 76 for age) — <b>hypotensive shock</b>. Oxygen, IV or IO access, glucose, 280 mL (20 mL/kg) Ringer's lactate over 5–10 minutes, reassess, repeat if still shocked; then IV/ORS rehydration (Plan C) ${r(1)}.</p>
` },
{ id: "ddx", title: "Mimics", html: `
${tbl(["Condition", "Clue", "Action"], [
["Cold environment", "Slow CRT but strong pulse, alert", "Warm the child and recheck " + r(1)],
["Fever alone", "Tachycardia settles with antipyretic; warm hands", "Re-examine after an hour"],
["DKA", "Deep breathing, high glucose", "Cautious fluids — see DKA chapter"],
["Severe anaemia", "Pale, tachycardic, heart failure", "Slow fluids; transfuse " + r(1)],
["SVT", "HR over 220, narrow complex", "Vagal manoeuvre, adenosine"]
])}
` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Glucose</b> in every child ${r(1)}.</li>
<li>Haemoglobin/haematocrit, blood group and crossmatch if bleeding or anaemic; blood culture; electrolytes, creatinine; lactate or gas where available ${r(1)} ${r(3)}.</li>
<li>Malaria test (southern districts), dengue NS1/serology in season ${r(1)}.</li>
<li>Chest X-ray and echo if cardiogenic shock is suspected.</li>
</ul>
` },
{ id: "staging", title: "Calculator", html: `<div class="calc" data-calc="shockcalc"></div><p class="small">Enter "Child", age and weight: it gives the hypotension threshold for age, the bolus volume and cause-specific steps.</p>` },
{ id: "manage", title: "Management", html: `
<h3>Do at the same time (IMNCI)</h3>
<ul><li>Stop any bleeding with pressure; oxygen to keep SpO₂ over 94%; keep the child warm ${r(1)}.</li><li>IV or intraosseous access (proximal tibia); bloods including glucose ${r(1)}.</li><li>Begin fluids ${r(1)}.</li></ul>
<h3>Fluids — child without severe malnutrition</h3>
<ol>
<li>${dr("ringer_lactate", "Ringer's lactate")} or normal saline 10–20 mL/kg: over 5–10 minutes if hypotensive, 5–20 minutes if compensated, over 60 minutes if febrile illness, malnutrition or moderate–severe anaemia. A 3-way tap and syringe give fluid quickly ${r(1)}.</li>
<li>Reassess pulse, CRT, breathing, liver and lungs before, during and after each bolus ${r(1)}.</li>
<li>Repeat if still shocked: up to 40 mL/kg where there is no PICU, 40–60 mL/kg where PICU is available. Stop at signs of overload — liver enlarging, crackles, rising breathing rate ${r(3)}.</li>
<li>Do not use dextrose-containing fluids for boluses (except the SAM regimen) ${r(2)}.</li>
</ol>
<h3>Fluids — severe acute malnutrition (IMNCI Chart 7)</h3>
<p>Half-strength saline with 5% glucose, or Ringer's lactate with 5% glucose, 15 mL/kg over 1 hour (Ringer's lactate alone if these are unavailable). Check pulse, breathing, temperature and CRT every 10 minutes; stop if the pulse rises by 15 or breathing by 5 per minute. If no improvement after 15 mL/kg, treat as septic shock; a second 15 mL/kg only if partly better with diarrhoea or cholera; then oral or NG rehydration ${r(1)}. See ${P("sam-child", "SAM")}.</p>
<h3>Treat the cause</h3>
<ul>
<li><b>Septic:</b> ${dr("ceftriaxone")} 80–100 mg/kg IV/IO (max 4 g/day) within 1 hour ${r(3)}; see ${P("sepsis-child", "Sepsis — children")}.</li>
<li><b>Haemorrhagic:</b> pressure; blood boluses of 10 mL/kg (crystalloid 10–20 mL/kg only until blood is available); ${dr("tranexamic_acid")} 15 mg/kg (max 1 g) then 2 mg/kg/h within 3 hours of injury ${r(7)}; see ${P("trauma-child", "Trauma — children")}.</li>
<li><b>Dengue shock:</b> follow the dengue fluid plan by haematocrit ${P("dengue-child", "Dengue")}.</li>
<li><b>Anaphylaxis:</b> ${dr("adrenaline_im", "adrenaline")} 0.01 mg/kg IM (max 0.5 mg), repeat after 5 minutes ${r(6)}; see ${P("anaphylaxis-child", "Anaphylaxis — children")}.</li>
<li><b>Cardiogenic:</b> small boluses of 5–10 mL/kg over 10–20 minutes with close monitoring; early inotrope; treat SVT ${r(2)} ${r(1)}.</li>
<li><b>Burns:</b> see ${P("burns-child", "Burns — children")}.</li>
</ul>
<h3>Shock that persists after 40 mL/kg</h3>
<ul>
<li>${dr("adrenaline_inf", "Adrenaline")} infusion, start 0.05–0.1 µg/kg/min, peripherally or by IO rather than waiting for a central line; or ${dr("noradrenaline")} (often preferred in warm, vasodilated shock) ${r(3)}.</li>
<li>Simple recipe: adrenaline 0.3 mg/kg in 50 mL — 1 mL/h = 0.1 µg/kg/min ${r(3)}.</li>
<li>Hydrocortisone 2 mg/kg (max 100 mg) for suspected adrenal insufficiency (long-term steroids, purpura fulminans) ${r(3)}.</li>
<li>Correct glucose and calcium; keep Hb above 7 g/dL once stable; refer to PICU ${r(3)}.</li>
</ul>
<h3>Targets</h3>
<p>Warm hands, CRT under 3 s, normal pulse for age, alert, urine about 1 mL/kg/h, falling lactate ${r(3)} ${LB.exp("URINE TARGET")}.</p>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes", "Bhutan NEML 2025"], [
[dr("ringer_lactate", "Ringer's lactate / normal saline"), "10–20 mL/kg per bolus " + r(1), "Up to 40–60 mL/kg by setting " + r(3), "Yes"],
[dr("dextrose", "10% dextrose"), "5 mL/kg if glucose under 54 mg/dL (3 mmol/L) " + r(3), "Never as bolus fluid", "Yes"],
[dr("ceftriaxone"), "80–100 mg/kg IV/IO (max 4 g/day) " + r(3), "Septic shock, within 1 h", "Yes"],
[dr("adrenaline_inf", "Adrenaline infusion"), "0.05–0.1 µg/kg/min start, titrate " + r(3), "0.3 mg/kg in 50 mL: 1 mL/h = 0.1 µg/kg/min", "1 mg/mL " + r(8)],
[dr("noradrenaline"), "0.05–0.1 µg/kg/min start, titrate " + LB.exp("START DOSE"), "Warm shock", "2 mg/mL " + r(8)],
[dr("adrenaline_im", "Adrenaline IM"), "0.01 mg/kg (max 0.5 mg) " + r(6), "Anaphylaxis", "1 mg/mL " + r(8)],
[dr("tranexamic_acid"), "15 mg/kg (max 1 g) then 2 mg/kg/h " + r(7), "Bleeding, within 3 h", "100 mg/mL " + r(8)],
[dr("hydrocortisone_iv", "Hydrocortisone"), "2 mg/kg (max 100 mg) " + r(3), "Adrenal insufficiency", "Yes " + r(8)]
])}
` },
{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Severe acute malnutrition:</b> slow special fluids (above); hypoglycaemia and hypothermia common ${r(1)}.</li>
<li><b>Dengue:</b> capillary leak — fluids by haematocrit trend; avoid overload in the recovery phase.</li>
<li><b>Neonates:</b> see ${P("neoshock-child", "Neonatal shock")}.</li>
<li><b>Severe anaemia:</b> fluids over 60 minutes; blood early ${r(1)}.</li>
<li><b>Congenital heart disease:</b> small boluses; early specialist advice.</li>
</ul>
` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Liver enlarges or crackles appear after a bolus", "Stop fluids, start adrenaline, consider cardiogenic shock " + r(3)],
["No IV access after 90 seconds", "Intraosseous in the proximal tibia " + LB.exp("ETAT")],
["BHU with no IV fluids or IO", "Oxygen, keep warm, first antibiotic dose IM, ORS by NG tube if conscious and dehydrated, urgent referral " + LB.loc()],
["Febrile child with impaired perfusion but normal BP, no PICU", "Bolus over 60 minutes and reassess often (FEAST, IMNCI) " + r(1) + r(4)],
["Shock after 60 mL/kg in a district hospital", "Adrenaline peripherally or IO; call JDWNRH PICU; arrange transfer " + LB.loc()]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Cardiac arrest, fluid overload and pulmonary oedema, AKI, DIC, hypoglycaemia, hypothermia, multi-organ failure ${r(3)}.</p>` },
{ id: "followup", title: "Monitoring and follow-up", html: `<ul><li>Reassess every 5–15 minutes during resuscitation (every 10 minutes in SAM) ${r(1)} ${r(2)}.</li><li>Input–output chart; urine output; repeat glucose.</li><li>After recovery: treat the cause, nutrition, follow-up of growth and development after severe illness.</li></ul>` },
{ id: "images", title: "Images", html: `<p>Capillary refill: press the nail bed for 3 seconds, release, and count until the pink colour returns (IMNCI Figure 6) ${r(1)}. For rashes that point to the cause (petechiae, purpura, dengue) see the ${P("rash-approach", "Rash approach")} atlas.</p>` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Child in shock", [F.s("Cold hands + CRT > 3 s + fast weak pulse"), F.a, F.s("Oxygen, warm, IV/IO, glucose, bloods"), F.a, F.d("Severe acute malnutrition?"), F.a, F.b([["Yes", F.e("15 mL/kg over 1 h (Chart 7); check every 10 min")], ["No", F.s("10–20 mL/kg RL/NS; reassess")]]), F.a, F.d("Still shocked after 40 mL/kg (60 with PICU)?"), F.a, F.b([["Yes", F.e("Adrenaline 0.05–0.1 µg/kg/min, PICU")], ["No", F.ok("Treat cause; maintenance or rehydration")]])])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for hypotension", "Late; arrest follows quickly", "Hands, CRT, pulse " + r(1)],
["Fast boluses in SAM", "Heart failure, pulmonary oedema", "Chart 7, 15 mL/kg over 1 h " + r(1)],
["Dextrose fluids for boluses", "Hyperglycaemia, hyponatraemia", "Isotonic crystalloid " + r(2)],
["Giving 60 mL/kg without reassessing", "Fluid overload, death (FEAST)", "Reassess after every bolus " + r(4)],
["Booklet IM adrenaline misprint", "10-fold dosing error", "0.01 mg/kg of 1 mg/mL IM " + r(6)],
["Missing hypoglycaemia", "Seizures, brain injury", "Glucose in every child " + r(1)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Hypotension threshold for a 4-year-old?", "Systolic under 78 mmHg (70 + 2 × 4).")}
${qa("Intern/MO", "How does IMNCI diagnose shock?", "Cold clammy skin, capillary refill over 3 seconds and a fast, weak pulse — BP is not required.")}
${qa("Intern/MO", "Bolus for a 12 kg child in hypotensive shock?", "120–240 mL (10–20 mL/kg) Ringer's lactate or saline over 5–10 minutes, then reassess.")}
${qa("Registrar", "Fluid for shock in a child with severe acute malnutrition?", "15 mL/kg over 1 hour of half-saline or RL with 5% glucose; stop if pulse rises 15 or RR 5; no improvement → treat as septic shock.")}
${qa("Registrar", "Shock persists after 40 mL/kg in a district hospital — next?", "Adrenaline 0.05–0.1 µg/kg/min peripherally or IO and contact the PICU.")}
${qa("Specialist", "What did FEAST show?", "In African children with severe febrile illness and impaired perfusion but no hypotension, without ICU, fluid boluses increased 48-hour mortality.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Hospital-based Integrated Management of Neonatal and Childhood Illness, 3rd ed. 2024: §3.5 Shock (Charts 6 and 7); Annexure 1 Table 1.</li>
<li id="ref-2">Ministry of Health, Bhutan. Emergency Medicine Clinical Guidelines booklet 2018, chapter 8B: Shock (paediatric).</li>
<li id="ref-3">Weiss SL, Peters MJ, Oczkowski SJW, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Pediatr Crit Care Med 2026;27:379–434. <a href="https://doi.org/10.1097/PCC.0000000000003927" target="_blank" rel="noopener">doi:10.1097/PCC.0000000000003927</a></li>
<li id="ref-4">Maitland K, Kiguli S, Opoka RO, et al. Mortality after fluid bolus in African children with severe infection (FEAST). N Engl J Med 2011;364:2483–2495. <a href="https://doi.org/10.1056/NEJMoa1101549" target="_blank" rel="noopener">doi:10.1056/NEJMoa1101549</a></li>
<li id="ref-5">World Health Organization. Updated guideline: paediatric emergency triage, assessment and treatment (ETAT). Geneva: WHO; 2016.</li>
<li id="ref-6">Resuscitation Council UK. Emergency treatment of anaphylaxis: guidelines for healthcare providers. London: RCUK; 2021. <a href="https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment" target="_blank" rel="noopener">resus.org.uk</a></li>
<li id="ref-7">National Institute for Health and Care Excellence. Major trauma: assessment and initial management (NG39). London: NICE; 2016; RCPCH/CEM tranexamic acid evidence statement 2012.</li>
<li id="ref-8">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["IMNCI 2024 §3.5", "<span class='pass'>Read</span>", "27 Nov 2026"], ["SSC 2026 / FEAST", "<span class='pass'>Consistent</span>", "Same as sepsis-child"], ["Booklet adrenaline misprint", "<span class='flag'>Flagged</span>", "Correct dose given"], ["Neonatal BP threshold, urine target, noradrenaline start", "<span class='unv'>Standard teaching</span>", "Marked"], ["Calculator", "<span class='pass'>Kept</span>", "shockcalc"]], "qc")}` }
]
});
})();
