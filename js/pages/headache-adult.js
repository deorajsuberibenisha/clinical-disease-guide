/* Headache and migraine — adults (and young people from 12 where NICE applies). Batch E-3 part 2, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §7.2 Headache and §7.3 Migraine; NEML 2025 (§7.1 acute: aspirin 300 mg effervescent, ibuprofen 400 mg,
   paracetamol, ergotamine 1 mg + caffeine 100 mg; §7.2 prophylaxis: propranolol 40 mg, amitriptyline 25 mg; metoclopramide; verapamil; oxygen);
   NICE CG150 'Headaches in over 12s' full recommendations (last updated 3 June 2025); Perry JJ et al. JAMA 2013 (Ottawa SAH rule, abstract);
   drug doses cross-checked with the FDA-label monographs in this guide (#/fdb). ICHD-3 is cited for the classification only. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "headache-adult",
title: "Headache and migraine — adults",
subtitle: "Most headaches are primary and need a confident diagnosis, not a scan; find the few dangerous ones with the red flags, treat migraine early and in combination, and guard against medication overuse",
age: "Adults", specs: ["neuro", "medicine", "emerg", "ph"],
keywords: ["headache", "migraine", "migraine with aura", "tension-type headache", "tension headache", "cluster headache", "medication overuse headache", "thunderclap headache", "subarachnoid haemorrhage", "Ottawa SAH rule", "triptan", "sumatriptan", "propranolol", "amitriptyline", "topiramate", "ergotamine", "menstrual migraine", "red flags headache"],
related: ["headache-child", "meningitis-adult", "stroke-adult", "htn-adult", "altitude-adult", "depression-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Headache is one of the commonest reasons people see a doctor, and nearly all of it is tension-type headache, migraine or medication overuse. The job is to name it confidently, rule out the rare dangerous causes with a careful history, and give a plan that works.</p>
<div class="glance">
<div><h4>Red flags</h4><p>Thunderclap onset, fever, new neurological deficit, confusion, recent head injury, cough/exertion trigger, postural, jaw claudication, red painful eye ${r(2)}.</p></div>
<div><h4>Migraine attack</h4><p>Take early: an NSAID or aspirin 900 mg or paracetamol, plus an anti-emetic; add a triptan if available ${r(1, 2)}.</p></div>
<div><h4>Prevention</h4><p>${D("propranolol", "Propranolol")} or ${D("amitriptyline", "amitriptyline")} (both NEML); topiramate (not NEML, not in pregnancy) ${r(1, 2)}.</p></div>
<div><h4>Overuse</h4><p>Simple analgesics on ≥ 15 days a month, or triptans, opioids, ergots or combinations on ≥ 10 days, for 3 months → think medication overuse headache ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG treats a migraine attack with ibuprofen plus metoclopramide at the onset of aura or headache, and prevents it with propranolol or amitriptyline ${r(1)}. No triptan is on the NEML 2025 — the only migraine-specific acute drug listed is ergotamine with caffeine, which NICE advises against ${r(2, 6)}. So, in practice, an NSAID or aspirin with an anti-emetic is the first-line attack treatment in Bhutan ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The main headache types", html: `${tbl(["Feature", "Tension-type", "Migraine (± aura)", "Cluster"], [
["Site", "Both sides", "One or both sides", "One side, around or above the eye"],
["Quality", "Pressing, tight band", "Pulsating (throbbing in 12–17-year-olds)", "Sharp, boring, burning"],
["Intensity", "Mild–moderate", "Moderate–severe", "Severe–very severe"],
["Activity", "Not worsened", "Worsened or avoided", "Restless, agitated"],
["Other", "None", "Light/sound sensitivity, nausea or vomiting; aura in some", "Same-side red watery eye, blocked nose, droopy lid, small pupil, sweating"],
["Duration", "30 min to continuous", "4–72 h (1–72 h at 12–17 years)", "15–180 min, up to 8 a day"],
["Chronic form", "≥ 15 days/month for > 3 months", "≥ 15 days/month for > 3 months, ≥ 8 with migraine features", "Pain-free gap < 1 month in a year"]
])}
<p>From NICE CG150 table 1 ${r(2)}. If a chronic daily headache has any migraine features, call it chronic migraine ${r(2)}.</p>` },
{ id: "patho", title: "What is going on", html: `
${F.chart("Migraine attack", [F.s("Genetic susceptibility + trigger (missed meal, poor sleep, stress, menstruation, alcohol)"), F.a, F.s("Cortical spreading depression → aura in some people"), F.a, F.s("Trigeminovascular activation: CGRP release, neurogenic inflammation"), F.a, F.d("Throbbing pain, nausea, light and sound sensitivity"), F.a, F.e("Frequent analgesic use → sensitised pain pathways → medication overuse headache")])}
<p>Migraine is a brain disorder, not a vascular spasm — which is why triptans and CGRP blockers work and why simple painkillers taken too often make it worse. Tension-type headache is less well understood; muscle tenderness and central sensitisation both play a part ${LB.exp()}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024 / NEML 2025", "NICE CG150 (2025)", "Why they differ", "This guide"], [
["Acute migraine", "Ibuprofen + metoclopramide at onset", "Oral triptan + NSAID or paracetamol; anti-emetic even without nausea", "Triptans not on NEML", "NSAID/aspirin + anti-emetic; add a triptan where the patient can obtain one " + LB.loc()],
["Ergots", "Ergotamine + caffeine on NEML (acute)", "Do not offer ergots or opioids", "Ergots: vasoconstriction, overuse, nausea; triptans are safer", "Avoid; if used, never daily and never with a triptan " + LB.loc()],
["Prevention", "Propranolol, amitriptyline", "Consider propranolol, topiramate or amitriptyline (2025: all three 'consider')", "Topiramate not on NEML", "Propranolol or amitriptyline first"],
["Tension-type", "Reassurance, paracetamol, relaxation, check for depression", "Aspirin, paracetamol or an NSAID; no opioids; acupuncture for chronic TTH", "—", "Both; warn about overuse"],
["Propranolol safety", "—", "Caution in depression: toxic in overdose", "UK safety report", "Ask about mood; amitriptyline is also dangerous in overdose — give small supplies " + LB.exp()]
])}` },
{ id: "presentation", title: "History and examination", html: `
<ul>
<li>Ask: how it started (sudden or gradual), where, what it feels like, how long, how often, what comes with it, what has been taken and on how many days a month ${r(2)}.</li>
<li>Aura: fully reversible visual (flickering lights, zigzags, partial loss), sensory (pins and needles, numbness) or speech symptoms that spread over at least 5 minutes and last 5–60 minutes ${r(2)}.</li>
<li><b>Atypical aura — investigate or refer:</b> motor weakness, double vision, visual symptoms in one eye only, poor balance, reduced consciousness ${r(2)}.</li>
<li>Examine: blood pressure, fundi (papilloedema), visual acuity, neurological examination, temporal arteries in older people, neck stiffness, red eye ${r(1, 2)}.</li>
<li>A headache diary for at least 8 weeks: frequency, duration, severity, all medicines, triggers, link to periods ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 29-year-old teacher in Mongar has had one-sided throbbing headaches with nausea twice a month since her teens, now 6 days a month. Light bothers her and she lies in a dark room. She takes paracetamol on about 12 days a month. Examination and blood pressure are normal. <b>This is migraine without aura, at risk of medication overuse.</b> Give a positive diagnosis, an attack plan (ibuprofen 400 mg + metoclopramide 10 mg at onset), limit acute drugs to fewer than 10–15 days a month, and offer propranolol or amitriptyline prevention ${r(1, 2)}.</p>` },
{ id: "ddx", title: "Red flags and secondary causes", html: `
${box("red", "Red flags (NICE 1.1.1)", `<ul><li>Worsening headache with fever</li><li>Sudden headache reaching maximum within 5 minutes (thunderclap)</li><li>New neurological deficit, new cognitive dysfunction, personality change, reduced consciousness</li><li>Head injury in the past 3 months</li><li>Triggered by cough, Valsalva, sneeze or exercise; changes with posture</li><li>Symptoms of giant cell arteritis or acute angle-closure glaucoma</li><li>A substantial change in the usual headache</li></ul><p>Also consider investigation for new headache with immune compromise (HIV, immunosuppressants), age under 20 with a history of cancer, cancer known to spread to the brain, or unexplained vomiting ${r(2)}.</p>`)}
${tbl(["Cause", "Clue"], [
["Subarachnoid haemorrhage", "Thunderclap; neck pain; collapse — Ottawa SAH rule below " + r(3)],
["Meningitis, encephalitis", "Fever, neck stiffness, rash, confusion"],
["Giant cell arteritis", "Over 50, temporal tenderness, jaw claudication, visual loss — urgent ESR/CRP and steroids"],
["Raised intracranial pressure (tumour, abscess, TB)", "Worse lying down and in the morning, vomiting, papilloedema " + r(1)],
["Hypertensive emergency", "Very high BP with end-organ signs " + r(1)],
["Acute angle-closure glaucoma", "Painful red eye, haloes, semi-dilated pupil"],
["High-altitude headache / acute mountain sickness", "After rapid ascent to over 2,500 m — common on trips to Bhutan's high passes " + LB.loc()],
["Carbon monoxide", "Several people in a closed room with a bukhari stove " + LB.loc()]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Primary headaches are diagnosed clinically. <b>Do not image for reassurance alone</b> ${r(2)}.</li>
<li>Blood pressure, vision and full blood count (STG); ESR/CRP if over 50 with new headache ${r(1)}.</li>
<li>Thunderclap headache: urgent CT; the Ottawa SAH rule helps decide who needs it ${r(3)}.</li>
<li>Red flags or atypical aura: CT or MRI and lumbar puncture as indicated; refer to JDWNRH neurology or medicine ${LB.loc()}.</li>
</ul>
<div class="calc" data-calc="ottawasah"></div>` },
{ id: "staging", title: "How often and how disabling", html: `
${tbl(["Pattern", "Definition", "Implication"], [
["Episodic migraine", "< 15 headache days/month", "Attack treatment; prevention if attacks are frequent or disabling " + r(2)],
["Chronic migraine", "≥ 15 days/month for > 3 months, ≥ 8 with migraine features", "Prevention; check for overuse " + r(2)],
["Medication overuse headache", "Headache developed or worsened while taking triptans, opioids, ergots or combinations on ≥ 10 days/month, or paracetamol, aspirin or NSAIDs on ≥ 15 days/month, for ≥ 3 months", "Withdraw the overused drug " + r(2)],
["Menstrual-related migraine", "Mainly from 2 days before to 3 days after the start of menstruation, in ≥ 2 of 3 cycles (diary for ≥ 2 cycles)", "Targeted short-term prevention " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>Migraine attack</h3>
<ol>
<li>Treat <b>early</b> in the attack ${r(1)}.</li>
<li>One of: ${D("ibuprofen", "ibuprofen")} 400 mg (NEML), ${D("aspirin", "aspirin")} 900 mg (three 300 mg effervescent tablets; not under 16), or ${D("paracetamol", "paracetamol")} 1 g ${r(1, 2)}.</li>
<li>Add an anti-emetic even without nausea: ${D("metoclopramide", "metoclopramide")} 10 mg orally (or IM/IV if vomiting) ${r(1, 2)}.</li>
<li>Better still, combine the NSAID or paracetamol with an oral triptan when one is available (e.g. sumatriptan 50–100 mg; may repeat once after 2 hours if the headache returns; US label maximum 200 mg in 24 hours) ${r(2, 7)} ${LB.exp("ONE SOURCE — NOT ON NEML")}.</li>
<li>Vomiting or oral drugs failing: IM/IV metoclopramide (or prochlorperazine) plus a non-oral NSAID such as ${D("diclofenac", "diclofenac")} or ${D("ketorolac", "ketorolac")} ${r(2)}.</li>
<li><b>No opioids and no ergots</b> for migraine ${r(2)}.</li>
</ol>
<h3>Migraine prevention</h3>
<p>Discuss when attacks are frequent or disabling. NICE (2025) lists three options to consider; try another if the first fails ${r(2)}:</p>
${tbl(["Drug", "Dose", "Watch for", "NEML"], [
[D("propranolol", "Propranolol"), "Start 80 mg/day in divided doses; usual 160–240 mg/day; stop if no benefit 4–6 weeks after the maximum " + r(7) + " " + LB.exp("ONE SOURCE"), "Asthma (avoid), bradycardia, fatigue; dangerous in overdose — ask about depression " + r(2), "40 mg tablet"],
[D("amitriptyline", "Amitriptyline"), "Start 10 mg at night, increase slowly to 25–75 mg " + LB.exp("NOT VERIFIED"), "Drowsiness, dry mouth, weight gain; toxic in overdose", "25 mg tablet"],
["Topiramate", "25 mg at night, increase by 25 mg weekly to 50 mg twice daily " + LB.exp("NOT VERIFIED"), "Not in pregnancy; women who could become pregnant only within a pregnancy prevention programme with highly effective contraception " + r(2), "Not listed"],
["Riboflavin", "400 mg once daily (food supplement)", "May reduce frequency for some " + r(2), "Not listed"]
])}
<p>Review prevention 3–6 months after starting ${r(2)}. Gabapentin should not be offered; CGRP antibodies, gepants and botulinum toxin are for specialist use after three preventives have failed ${r(2)}.</p>
<h3>Tension-type headache</h3>
<p>Aspirin, paracetamol or an NSAID for attacks; no opioids. Reassure, address stress and mood (the STG asks you to look for depression). Chronic tension-type headache: up to 10 sessions of acupuncture over 5–8 weeks ${r(1, 2)}.</p>
<h3>Cluster headache</h3>
<p>100% ${D("oxygen", "oxygen")} at ≥ 12 L/min through a non-rebreathing mask with reservoir, and/or a subcutaneous or nasal triptan; not paracetamol, NSAIDs, opioids, ergots or oral triptans. Prevention during a bout: ${D("verapamil", "verapamil")} with ECG monitoring under specialist advice ${r(2)}.</p>
<h3>Medication overuse headache</h3>
<p>Stop all overused acute medicines <b>abruptly</b> for at least 1 month; warn that headache will get worse before it improves; consider prevention at the same time; review after 4–8 weeks. Specialist or inpatient withdrawal for strong opioids or repeated failure ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines (NEML 2025)", html: `${tbl(["Medicine", "Use", "NEML"], [
[D("ibuprofen", "Ibuprofen"), "Attack (STG first line)", "400 mg tablet"],
[D("aspirin", "Aspirin"), "Attack — 900 mg", "300 mg effervescent tablet"],
[D("paracetamol", "Paracetamol"), "Attack; pregnancy", "500 mg tablet"],
[D("metoclopramide", "Metoclopramide"), "Anti-emetic with attack treatment", "10 mg tablet; 5 mg/mL injection"],
[D("ergotamine", "Ergotamine + caffeine"), "Listed for acute attacks — not recommended by NICE", "1 mg + 100 mg tablet"],
[D("propranolol", "Propranolol"), "Prevention", "40 mg tablet"],
[D("amitriptyline", "Amitriptyline"), "Prevention; chronic TTH", "25 mg tablet"],
[D("verapamil", "Verapamil"), "Cluster prevention (specialist)", "40 mg tablet"],
[D("oxygen", "Oxygen"), "Cluster attacks", "Yes"],
["Sumatriptan, other triptans", "Attack", "Not listed — private pharmacies only"]
])}` },
{ id: "populations", title: "Special groups", html: `${tbl(["Group", "What changes"], [
["Pregnancy", "Paracetamol first; consider a triptan or NSAID after discussion (avoid prolonged NSAIDs after 20 weeks); specialist advice for prevention " + r(2)],
["Migraine with aura and contraception", "Do not routinely offer combined hormonal contraception " + r(2)],
["Menstrual migraine", "Frovatriptan 2.5 mg twice daily or zolmitriptan 2.5 mg two or three times daily on the expected days " + r(2)],
["Over 50, new headache", "Think of giant cell arteritis, tumour — investigate " + LB.exp()],
["Depression", "Treat both; caution with propranolol and amitriptyline in overdose " + r(2)],
["Young people 12–17", "NICE applies; nasal triptan preferred to oral; see the children's page " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["'Worst headache of my life', came on while lifting, now settled; GCS 15, normal exam", "Ottawa SAH rule positive (onset with exertion) → urgent CT " + r(3)],
["Daily headache in a man taking paracetamol–codeine every day", "Medication overuse: stop abruptly, prevention, review at 4–8 weeks " + r(2)],
["Migraine with aura in a smoker asking for the combined pill", "Offer a progestogen-only or non-hormonal method " + r(2)],
["Nightly 45-minute eye-centred pain with a red watery eye for 3 weeks", "Cluster: high-flow oxygen; specialist advice for verapamil " + r(2)],
["Tourist with headache after flying into Paro and driving to Chele La", "Acute mountain sickness — see Altitude illness " + LB.loc()]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Medication overuse headache ${r(2)}.</li>
<li>Status migrainosus (attack over 72 hours) — parenteral anti-emetic, NSAID and fluids ${LB.exp()}.</li>
<li>Ergotism with too much ergotamine ${LB.exp()}.</li>
<li>Missed secondary headache ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Explain the diagnosis positively and reassure that other causes have been excluded; give written information ${r(2)}.</li>
<li>Keep a diary; limit acute drugs to fewer than 10 days (triptans/combinations) or 15 days (simple analgesics) a month ${r(2)}.</li>
<li>Regular meals, sleep and exercise; avoid known triggers ${r(1)}.</li>
<li>Review prevention at 3–6 months; reassess if any red flag appears ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Migraine visual aura (illustration)", src: "images/migraine-aura.png", mod: "Illustration", ctx: "Migraine with aura", find: "A shimmering zigzag arc (fortification spectrum) spreading across the visual field", interp: "Typical aura builds over ≥ 5 minutes and lasts 5–60 minutes; aura in one eye only is atypical and needs assessment", by: "Lille1982", page: "https://commons.wikimedia.org/wiki/File:Flickering_scotoma.png", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Adult with headache", [F.d("Any red flag?"), F.a, F.b([["Yes", F.e("Investigate / refer (CT, LP, ESR/CRP as indicated)")], ["No", F.d("Pattern: tension-type, migraine, cluster? Acute drugs ≥ 10–15 days/month?")]]), F.a, F.b([["Overuse", F.e("Withdraw abruptly ≥ 1 month + prevention")], ["Migraine", F.s("Attack: NSAID/aspirin + anti-emetic ± triptan; prevention if frequent")], ["Tension", F.ok("Simple analgesic, reassurance, mood")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Ordering CT to reassure", "Incidental findings, cost, no benefit", "Positive clinical diagnosis"],
["Codeine for migraine", "Overuse headache, dependence", "NSAID + anti-emetic"],
["Waiting until the pain is severe", "Drugs work less well", "Treat at the first sign"],
["Missing a thunderclap onset", "SAH missed", "Ask exactly how fast it peaked"],
["Topiramate for a young woman without contraception", "Teratogenic", "Pregnancy prevention or another drug"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Name four NICE red flags for headache.", "Any of: fever with worsening headache, thunderclap onset, new neurological deficit, cognitive change, reduced consciousness, recent head injury, cough/exercise trigger, postural, GCA or glaucoma symptoms, substantial change.")}
${qa("Intern/MO", "What is the STG treatment for a migraine attack?", "Ibuprofen with metoclopramide, taken at the onset of aura or headache.")}
${qa("Specialist", "Define medication overuse headache by days per month.", "Triptans, opioids, ergots or combinations ≥ 10 days/month, or simple analgesics ≥ 15 days/month, for 3 months or more.")}
${qa("Specialist", "Oxygen prescription for cluster headache?", "100% oxygen at ≥ 12 L/min via non-rebreathing mask with reservoir; arrange home and ambulatory oxygen.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §7.2 Headache and §7.3 Migraine.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Headaches in over 12s: diagnosis and management (CG150). Published 2012; last updated 3 June 2025. <a href="https://www.nice.org.uk/guidance/cg150" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Perry JJ, Stiell IG, Sivilotti MLA, et al. Clinical decision rules to rule out subarachnoid hemorrhage for acute headache. JAMA 2013;310:1248–1255. <a href="https://doi.org/10.1001/jama.2013.278018" target="_blank" rel="noopener">doi:10.1001/jama.2013.278018</a></li>
<li id="ref-4">Perry JJ, Stiell IG, Sivilotti MLA, et al. Sensitivity of computed tomography performed within six hours of onset of headache for diagnosis of subarachnoid haemorrhage. BMJ 2011;343:d4277. <a href="https://doi.org/10.1136/bmj.d4277" target="_blank" rel="noopener">doi:10.1136/bmj.d4277</a></li>
<li id="ref-5">Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. Cephalalgia 2018;38:1–211. <a href="https://doi.org/10.1177/0333102417738202" target="_blank" rel="noopener">doi:10.1177/0333102417738202</a></li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025, §7 (antimigraine medicines).</li>
<li id="ref-7">US Food and Drug Administration prescribing information (propranolol; sumatriptan), as summarised in this guide's drug monographs.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["NICE recommendations and thresholds", "<span class='pass'>Checked</span>", "Full recommendations page, June 2025 version"],
["STG and NEML content", "<span class='pass'>Checked</span>", "Read from the STG and NEML text"],
["Ottawa SAH rule", "<span class='pass'>Checked</span>", "JAMA 2013 abstract (100% sensitivity, 15.3% specificity)"],
["Propranolol dose", "<span class='pass'>One source</span>", "FDA label; NICE gives no dose"],
["Amitriptyline and topiramate titration", "<span class='unv'>Not verified</span>", "Common practice; no second source read — marked on the page"],
["Sumatriptan dose", "<span class='unv'>One source</span>", "US label; not on NEML"],
["Image", "<span class='pass'>Checked</span>", "Commons, public domain"]
], "qc")}<p>Classification follows ICHD-3 ${r(5)}; CT within 6 hours in the Perry cohort ${r(4)}.</p>` }
]
});
})();
