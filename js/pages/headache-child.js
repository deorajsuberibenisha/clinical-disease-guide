/* Headache and migraine — children and adolescents. Batch E-3 part 2, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §12.1.3 Headache (children): ibuprofen 7.5–10 mg/kg/dose TDS or paracetamol 15 mg/kg/dose TDS for 3–5 days,
   hydration, propranolol 10–20 mg TDS for frequent/disabling migraine, MRI criteria, follow-up every 1–3 months, sleep 8–9 h and regular meals;
   NEML 2025; NICE CG150 (applies from 12 years; full recommendations, June 2025); AAN/AHS 2019 acute and prevention guideline summaries
   (Oskoui et al., abstracts read); CHAMP trial (Powers et al. NEJM 2017, abstract read). FDA labels via drug monographs for paracetamol caps. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "headache-child",
title: "Headache and migraine — children",
subtitle: "Recurrent headache is common in school children and is usually migraine or tension-type: examine carefully, know when to scan, treat attacks early with the right mg/kg dose, and lean on sleep, meals and school support before drugs",
age: "Children", specs: ["paeds", "neuro"],
keywords: ["headache child", "paediatric migraine", "childhood migraine", "tension-type headache child", "abdominal migraine", "ibuprofen dose child", "propranolol child migraine", "CHAMP trial", "headache red flags child", "MRI headache child"],
related: ["headache-adult", "meningitis-child", "headinjury-child", "htn-child", "depression-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Chronic and recurrent headache is a common complaint in children, and the commonest primary types are migraine and tension-type headache ${r(1)}. Most children need a careful examination, a clear explanation and a simple plan, not a scan.</p>
<div class="glance">
<div><h4>Attack</h4><p>${D("ibuprofen", "Ibuprofen")} 7.5–10 mg/kg/dose or ${D("paracetamol", "paracetamol")} 15 mg/kg/dose, given early, with fluids ${r(1, 3)}.</p></div>
<div><h4>Scan when</h4><p>Abnormal neurological examination, mainly occipital headache, or migraine-type headache with no family history (STG) ${r(1)}.</p></div>
<div><h4>Prevention</h4><p>Only if frequent or disabling: ${D("propranolol", "propranolol")} 10–20 mg three times daily (STG); lifestyle and CBT matter most ${r(1, 4)}.</p></div>
<div><h4>Evidence check</h4><p>In CHAMP, amitriptyline and topiramate were no better than placebo — but 61% improved on placebo ${r(5)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The NEML has paracetamol syrup (250 mg/5 mL) but ibuprofen only as a 400 mg tablet, so small children usually get paracetamol; older children can take part or whole tablets ${r(6)}. Propranolol (40 mg) and amitriptyline (25 mg) tablets are listed; no triptan is listed ${r(6)}.</p>`)}
` },
{ id: "overview", title: "Types of headache in children", html: `${tbl(["Feature", "Migraine", "Tension-type"], [
["Severity", "Moderate to severe episodic attacks " + r(1), "Mild to moderate " + r(1)],
["Site", "Often both sides (frontal or temporal) in younger children; one side is more typical in adolescents " + LB.exp(), "Both sides, band-like"],
["Quality", "Throbbing " + r(1, 2), "Non-throbbing, pressing " + r(1)],
["With it", "Nausea, vomiting, light and sound sensitivity; aura (visual, sensory) in some " + r(1), "Less often nausea, light or sound sensitivity " + r(1)],
["Duration (12–17 y, NICE)", "1–72 hours " + r(2), "30 minutes to continuous " + r(2)],
["Behaviour", "Wants to lie down in a dark, quiet room; may sleep it off", "Usually carries on with activities"]
])}
<p>Young children may not describe pain well: pallor, irritability, vomiting, wanting to sleep or abdominal pain may be the main signs ${LB.exp()}.</p>` },
{ id: "patho", title: "What is going on", html: `
${F.chart("Childhood migraine", [F.s("Inherited tendency (often a parent with migraine)"), F.a, F.s("Trigger: missed meals, poor sleep, dehydration, screens, stress, exams"), F.a, F.d("Brain-based attack with nausea and light sensitivity"), F.a, F.e("Frequent painkillers → medication overuse headache")])}
<p>The STG lists the commonest triggers for frequent migraine as skipped meals and irregular sleep, and asks for healthy food and 8–9 hours of sleep on a regular basis ${r(1)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE CG150 (≥ 12 y)", "AAN/AHS 2019", "This guide"], [
["Attack treatment", "Ibuprofen or paracetamol three times daily for 3–5 days", "NSAID or paracetamol ± nasal triptan (12–17); anti-emetic", "Ibuprofen and paracetamol effective; triptans mainly in adolescents", "Give at the onset of each attack rather than as a fixed 3–5-day course " + LB.loc()],
["Prevention", "Propranolol 10–20 mg TDS", "Propranolol, topiramate or amitriptyline (off-label in children)", "Most trials fail to beat placebo; propranolol possibly, topiramate probably helpful; amitriptyline + CBT better than amitriptyline alone", "Lifestyle and CBT first; propranolol if needed (not in asthma) " + LB.loc()],
["Imaging", "MRI for abnormal exam, occipital site, migraine without family history", "Not for reassurance; investigate red flags", "—", "STG criteria plus NICE red flags"]
])}` },
{ id: "presentation", title: "History and examination", html: `
<ul>
<li>Ask the child and the parent separately: pattern, frequency, what helps, school days missed, sleep, meals, screen time, worries, bullying, mood.</li>
<li>Count analgesic days per month ${r(2)}.</li>
<li>Examine: growth, blood pressure (use the right cuff), fundi, visual fields and acuity, cranial nerves, gait and coordination, skin (café-au-lait spots), head circumference in young children ${r(1)} ${LB.exp()}.</li>
<li>A headache diary for at least 8 weeks helps diagnosis and follow-up ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 10-year-old girl in Gelephu has throbbing frontal headaches about three times a month, with nausea and wanting to lie down; they usually come on school afternoons when she has skipped lunch. Her mother had migraines. Examination, fundi and blood pressure are normal. <b>This is migraine; no scan is needed.</b> Plan: regular breakfast and lunch, water bottle, 8–9 hours' sleep, paracetamol 15 mg/kg (or ibuprofen 7.5–10 mg/kg) at the first sign, a diary, and review in 1–3 months ${r(1)}.</p>` },
{ id: "ddx", title: "Red flags and secondary causes", html: `
${box("red", "When to image or refer", `<ul><li>Abnormal neurological examination; mainly occipital headache; migraine-type headache with no family history of migraine — MRI (STG) ${r(1)}</li><li>Thunderclap onset, fever with worsening headache, new deficit, altered consciousness or personality, recent head injury, headache with cough/exertion or posture change, vomiting without another cause (NICE, from 12 years) ${r(2)}</li><li>Headache waking the child from sleep or present on waking with vomiting, falling school performance, growth failure, very young age ${LB.exp()}</li></ul>`)}
${tbl(["Cause", "Clue"], [
["Meningitis, encephalitis", "Fever, neck stiffness, rash, drowsiness"],
["Raised intracranial pressure (tumour, hydrocephalus, abscess, TB)", "Morning headache and vomiting, papilloedema, ataxia, squint"],
["Hypertension (renal disease, coarctation)", "High BP for age — measure it in every child with headache " + r(1)],
["Post-traumatic headache", "After head injury; follow school performance (STG §12.1.4) " + r(1)],
["Sinusitis, dental infection, refractive error", "Local signs; check vision " + r(1)],
["Carbon monoxide", "Several family members with headache in a closed room with a stove " + LB.loc()]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Most children need none beyond a careful examination, blood pressure and vision check ${r(1)}.</li>
<li>MRI brain for the STG criteria above; CT if MRI is not available and the child is unwell ${r(1)} ${LB.loc()}.</li>
<li>Do not scan for reassurance alone ${r(2)}.</li>
</ul>` },
{ id: "staging", title: "Severity and frequency", html: `
${tbl(["Pattern", "Approach"], [
["Infrequent attacks (a few a month)", "Attack treatment and lifestyle only"],
["Frequent or disabling attacks (missing school)", "Consider prevention " + r(1)],
["Headache on most days with daily painkillers", "Think medication overuse: stop the overused drug and support the child " + r(2)]
])}
<div class="calc" data-calc="migrainechild"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>The attack</h3>
<ol>
<li>Rest in a quiet, dark room; fluids; a light snack ${r(1)}.</li>
<li>${D("ibuprofen", "Ibuprofen")} 7.5–10 mg/kg per dose (max 400 mg) or ${D("paracetamol", "paracetamol")} 15 mg/kg per dose (max 1 g), <b>as early as possible</b>. The STG allows three doses a day for 3–5 days; keep total analgesic days low to avoid overuse ${r(1, 3)}.</li>
<li>Adolescents (12–17 years) with poor response: a nasal triptan is preferred to an oral one (NICE); sumatriptan/naproxen and zolmitriptan nasal spray have the strongest evidence (AAN/AHS) — not on NEML ${r(2, 4)}.</li>
<li>No acute drug reliably treats migraine-related nausea in children (AAN/AHS); in hospital, parenteral anti-emetics are off-label in children and need care ${r(2, 4)}.</li>
<li>No aspirin under 16 years (Reye syndrome); no opioids ${r(2)}.</li>
</ol>
<h3>Prevention</h3>
<ul>
<li>First: regular sleep (8–9 hours), regular meals, hydration, exercise, managing stress and screen time ${r(1)}.</li>
<li>Cognitive behavioural therapy: amitriptyline plus CBT beat amitriptyline plus education ${r(4)}.</li>
<li>${D("propranolol", "Propranolol")} 10–20 mg three times daily (STG) when attacks are frequent or disabling. Avoid in asthma ${r(1)} ${LB.exp()}.</li>
<li>Amitriptyline and topiramate: CHAMP (361 children aged 8–17) found neither better than placebo (52%, 55% and 61% had ≥ 50% fewer headache days) with more side effects ${r(5)}. Topiramate also needs pregnancy prevention in adolescent girls ${r(2)}.</li>
<li>Review every 1–3 months for response and adherence ${r(1)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines and doses", html: `${tbl(["Medicine", "Dose", "NEML 2025"], [
[D("paracetamol", "Paracetamol"), "15 mg/kg/dose (STG: three times daily); maximum 75 mg/kg/day from 2 years and 4 g/day (FDA) " + r(1, 3), "250 mg/5 mL syrup; 500 mg tablet"],
[D("ibuprofen", "Ibuprofen"), "7.5–10 mg/kg/dose three times daily, max 400 mg per dose " + r(1, 3), "400 mg tablet"],
[D("propranolol", "Propranolol"), "10–20 mg three times daily (prevention) " + r(1), "40 mg tablet (quarter or half)"],
["Triptans (nasal sumatriptan, zolmitriptan)", "Adolescents, specialist advice " + r(2, 4), "Not listed"]
])}` },
{ id: "populations", title: "Special groups", html: `${tbl(["Group", "What changes"], [
["Under 6 years", "Primary headache is less common — lower threshold to examine closely and image " + LB.exp()],
["Adolescent girls with migraine with aura", "Avoid combined hormonal contraception " + r(2)],
["Children with asthma", "Avoid propranolol " + LB.exp()],
["Anxiety, depression, bullying", "Common with chronic headache — ask and support " + r(4)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["7-year-old with morning headaches and vomiting for 3 weeks, unsteady gait", "Red flags — urgent imaging and referral"],
["13-year-old with daily headaches taking paracetamol every day", "Medication overuse: stop abruptly for at least a month, diary, support " + r(2)],
["Migraine twice a week, missing school, has asthma", "Lifestyle and CBT; avoid propranolol; specialist advice for other preventives"],
["Headache since a bicycle fall last month, grades falling", "Post-traumatic headache — follow school performance (STG) " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Missed school and lower grades.</li>
<li>Medication overuse headache ${r(2)}.</li>
<li>Missed secondary cause if red flags are ignored ${r(1)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Review every 1–3 months ${r(1)}.</li>
<li>Give the school a short plan: allow water, snacks and rest, and early medicine at the first sign.</li>
<li>Explain that most children's migraine improves, and that placebo response is high — confidence and routine help ${r(5)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Migraine visual aura (illustration)", src: "images/migraine-aura.png", mod: "Illustration", ctx: "Migraine with aura", find: "A shimmering zigzag arc spreading across part of the visual field", interp: "Children may describe this as lights, stars or 'broken glass' before the headache", by: "Lille1982", page: "https://commons.wikimedia.org/wiki/File:Flickering_scotoma.png", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Child with recurrent headache", [F.d("Red flags or STG MRI criteria?"), F.a, F.b([["Yes", F.e("Image (MRI) / refer")], ["No", F.d("Migraine or tension-type? Analgesic overuse?")]]), F.a, F.b([["Overuse", F.e("Stop overused drug; diary; support")], ["Primary", F.s("Lifestyle + early ibuprofen/paracetamol")]]), F.a, F.d("Frequent or disabling?"), F.a, F.ok("CBT ± propranolol; review 1–3 months")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Skipping blood pressure and fundi", "Misses hypertension and raised pressure", "Check both every time"],
["Scanning every child", "Anxiety, cost, sedation in young children", "Use the STG criteria"],
["Fixed 5-day painkiller courses", "Overuse", "Treat each attack early"],
["Aspirin for a 12-year-old", "Reye syndrome", "Ibuprofen or paracetamol"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Ibuprofen dose for a 24 kg child with migraine (STG)?", "7.5–10 mg/kg = 180–240 mg per dose, up to three times daily.")}
${qa("Intern/MO", "Which children with headache need MRI according to the STG?", "Abnormal neurological examination, mainly occipital headache, or migraine-type headache with no family history of migraine.")}
${qa("Specialist", "What did the CHAMP trial show?", "Amitriptyline (1 mg/kg/day) and topiramate (2 mg/kg/day) were no better than placebo over 24 weeks, with more adverse events.")}
${qa("Specialist", "Which acute treatments have high-confidence evidence in adolescents (AAN/AHS 2019)?", "Oral sumatriptan/naproxen and zolmitriptan nasal spray.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.1.3 Headache (children) and §12.1.4 Acute brain injury.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Headaches in over 12s: diagnosis and management (CG150). Last updated 3 June 2025. <a href="https://www.nice.org.uk/guidance/cg150" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">US Food and Drug Administration prescribing information for paracetamol (acetaminophen) and ibuprofen, as summarised in this guide's drug monographs.</li>
<li id="ref-4">Oskoui M, Pringsheim T, Holler-Managan Y, et al. Practice guideline update summary: acute treatment of migraine in children and adolescents. Neurology 2019;93:487–499. <a href="https://doi.org/10.1212/WNL.0000000000008095" target="_blank" rel="noopener">doi:10.1212/WNL.0000000000008095</a>. And: Oskoui M, Pringsheim T, Billinghurst L, et al. Pharmacologic treatment for pediatric migraine prevention. Neurology 2019;93:500–509. <a href="https://doi.org/10.1212/WNL.0000000000008105" target="_blank" rel="noopener">doi:10.1212/WNL.0000000000008105</a></li>
<li id="ref-5">Powers SW, Coffey CS, Chamberlin LA, et al. Trial of amitriptyline, topiramate, and placebo for pediatric migraine. N Engl J Med 2017;376:115–124. <a href="https://doi.org/10.1056/NEJMoa1610384" target="_blank" rel="noopener">doi:10.1056/NEJMoa1610384</a></li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG doses and MRI criteria", "<span class='pass'>Checked</span>", "Read from STG §12.1.3"],
["Ibuprofen and paracetamol caps", "<span class='pass'>Checked</span>", "STG + FDA label"],
["Propranolol dose", "<span class='pass'>One source</span>", "STG only; widely used range — check the paediatric formulary"],
["Guideline and trial findings", "<span class='pass'>Checked</span>", "AAN/AHS 2019 and CHAMP abstracts; NICE full text"],
["Extra red flags for young children", "<span class='unv'>Expert opinion</span>", "Labelled on the page"],
["Image", "<span class='pass'>Checked</span>", "Commons, public domain"]
], "qc")}` }
]
});
})();
