/* Palliative care — pain, symptom control and end-of-life care (adults; children noted). Batch E-8, 27 Nov 2026.
   Sources read directly: Bhutan STG 2024 chapter 18 Palliative care (principles, total pain, PQRST pain assessment, WHO 3-step and 4-step ladders,
   respiratory, bleeding, gastrointestinal symptoms, lymphoedema, fungating wounds, psychosocial and spiritual care, communication, SPIKES, carers,
   end-of-life symptoms — death rattle, restlessness, delirium — grief and bereavement). The STG text layer is partly scrambled; readable parts used
   (cleaned copy in scratchpad pall-clean.txt). NICE CG140 Palliative care for adults: strong opioids for pain relief (2012, updated 2016) — full
   recommendations read in the browser 27 Nov 2026. NEML 2025 (morphine 10 mg tab, 15 mg ER tab, 10 mg/mL inj; fentanyl patch 25 mcg/h; codeine 15 mg;
   tramadol inj; gabapentin 300 mg; dexamethasone; haloperidol; midazolam; metoclopramide; ondansetron; glycopyrrolate; atropine; senna; lactulose;
   octreotide; tranexamic acid; ketamine). Not read: WHO 2018 cancer pain guideline, Greater Manchester symptom control guideline (cited by the STG),
   opioid conversion tables (common-practice ratios are marked). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "palliative-care",
title: "Palliative and end-of-life care",
subtitle: "Relieving pain, breathlessness, nausea, constipation, delirium and distress in advanced illness — morphine started and titrated safely with a laxative, honest communication with SPIKES, care for the last days, and support for the family in grief",
age: "Adults (children noted)", specs: ["medicine", "onc", "ph", "emerg", "psych"],
keywords: ["palliative care", "end of life care", "terminal care", "hospice", "cancer pain", "total pain", "WHO analgesic ladder", "morphine", "breakthrough pain", "opioid titration", "opioid-induced constipation", "nausea and vomiting palliative", "breathlessness palliative", "death rattle", "terminal restlessness", "delirium", "fungating wound", "lymphoedema", "breaking bad news", "SPIKES", "advance care planning", "grief", "bereavement", "subcutaneous syringe driver"],
related: ["palliative-child", "lung-cancer-adult", "gastric-cancer-adult", "hcc-adult", "cervical-cancer-adult", "hf-adult", "ckd-adult", "cirrhosis-adult", "depression-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Palliative care improves the quality of life of patients and families facing life-threatening illness by relieving physical, psychological, social and spiritual suffering. It starts at diagnosis alongside disease treatment, continues to the end of life, and extends into bereavement support for the family ${r(1)}. It is not only for cancer — heart, lung, kidney and liver failure, HIV and neurological disease need it too ${LB.exp()}.</p>
<div class="glance">
<div><h4>Total pain</h4><p>Pain has physical, psychological, social and spiritual parts — assess all four ${r(1)}.</p></div>
<div><h4>Morphine</h4><p>Start 20–30 mg oral morphine a day (e.g. 5 mg every 4 hours) with 5 mg rescue doses; titrate ${r(2)}. <b>Always</b> prescribe a regular laxative ${r(2)}.</p></div>
<div><h4>Last days</h4><p>Death rattle: glycopyrrolate or hyoscine SC; restlessness: midazolam SC; delirium: haloperidol ${r(1)}.</p></div>
<div><h4>Talk</h4><p>In person, private, sitting down, with family, in small chunks — SPIKES ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG describes palliative care as a developing concept in Bhutan, with training led by the Ministry and KGUMSB so it can be delivered at every level of care ${r(1)}. Morphine is on the NEML as 10 mg tablets, 15 mg extended-release tablets and 10 mg/mL injection, plus fentanyl 25 mcg/h patches; there is no validated symptom-assessment tool in use in Bhutan yet ${r(1, 3)}. A Bhutanese study found family caregivers most need to understand the illness, manage symptoms, give personal care and know what to expect ${r(1)}. Many patients wish to die at home with rituals and family present — plan for this early ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Principles", html: `${tbl(["Principle", "In practice"], [
["Relief of pain and other symptoms", "Nausea, vomiting, constipation, breathlessness, as well as psychological and spiritual distress " + r(1)],
["Patient- and family-focused care", "Care plans built around the person's goals, culture and religion; non-judgemental " + r(1)],
["Early integration", "From diagnosis, alongside curative or disease-modifying treatment " + r(1)],
["Good communication", "Between professionals and with patient and family; truthful, caring, understandable " + r(1)],
["Grief and bereavement support", "For the family after the death " + r(1)]
])}` },
{ id: "patho", title: "Total pain", html: `
${F.chart("Total pain (STG)", [F.s("Physical: tumour, bone, nerve, wounds, other symptoms"), F.a, F.s("Psychological: fear, anxiety, depression, anger"), F.a, F.s("Social: family worries, money, loss of role"), F.a, F.s("Spiritual: meaning, guilt, fear of death, karma and rebirth"), F.a, F.ok("Address each — analgesics alone will not settle total pain")])}
<p>Nociceptive (somatic, visceral) pain responds to the analgesic ladder; neuropathic pain often needs adjuvants such as amitriptyline or gabapentin ${r(1)} ${LB.exp()}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE CG140", "This guide"], [
["Ladder", "WHO 3-step ladder for cancer pain; 4-step ladder (adds interventional and complementary therapy) for chronic non-cancer pain", "—", "Both, as in the STG " + r(1)],
["Starting morphine", "Dose not stated for pain; breathlessness 2.5–5 mg every 4 hours", "20–30 mg oral morphine per day (e.g. 10–15 mg sustained-release twice daily) + 5 mg immediate-release rescue", "NICE start dose; immediate-release 5 mg every 4 hours if sustained-release unavailable " + LB.int()],
["Patches", "—", "Not first line if oral opioids suitable; for stable needs when oral route unsuitable", "Fentanyl patch only for stable pain, never to titrate " + r(2)],
["Kidney or liver impairment", "—", "Specialist advice before strong opioids", "Lower doses, longer intervals " + r(2) + " " + LB.exp()]
])}` },
{ id: "presentation", title: "Assessing pain (PQRST)", html: `
${tbl(["Letter", "Ask"], [
["Onset", "When did it start? " + r(1)],
["P — provoking and palliating", "What makes it worse? Better? " + r(1)],
["Q — quality", "What is it like? (aching, burning, shooting, colicky) " + r(1)],
["R — region and radiation", "Where is it? Does it spread? " + LB.exp()],
["S — severity", "Mild, moderate, severe, or numerical rating scale 0–10 " + r(1)],
["T — temporal", "Constant or coming and going? Worse at a time of day or night? " + r(1)]
])}
<h3>The typical patient</h3>
<p>A 64-year-old man with advanced stomach cancer in Mongar has abdominal pain 7/10 despite paracetamol and codeine, constipation, and fears that morphine means he will die soon. Address his fears, then start oral morphine 5 mg every 4 hours with 5 mg rescue doses, senna and lactulose regularly, and metoclopramide as needed for nausea; review daily during titration, involve his family, and ask what matters most to him ${r(2)}.</p>` },
{ id: "ddx", title: "Reversible causes to look for", html: `${tbl(["Problem", "Check for"], [
["New severe back pain", "Spinal cord compression — urgent dexamethasone and referral " + LB.exp()],
["Confusion, thirst, constipation", "Hypercalcaemia " + LB.exp()],
["Drowsiness, myoclonus, pinpoint pupils on morphine", "Opioid toxicity (kidney decline, dose too high) " + r(1)],
["Vomiting, distension, colic", "Bowel obstruction " + r(1)],
["Sudden breathlessness", "Pleural effusion, PE, anaemia, infection " + r(1) + " " + LB.exp()],
["Agitation", "Urinary retention, faecal impaction, pain, drug withdrawal " + r(1)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Only those that would change management and that the patient wants ${r(1)} ${LB.exp()}.</li>
<li>Breathlessness: selective X-ray or ultrasound if appropriate ${r(1)}.</li>
<li>Constipation: X-ray abdomen or ultrasound may be done ${r(1)}.</li>
<li>Delirium: glucose, sodium, calcium, creatinine, infection screen, medicine review ${r(1)} ${LB.exp()}.</li>
</ul>` },
{ id: "staging", title: "Starting and titrating morphine", html: `
${tbl(["Step", "What to do"], [
["Start", "Oral morphine 20–30 mg/day: 10–15 mg sustained-release twice daily, or 5 mg immediate-release every 4 hours; rescue 5 mg immediate-release as needed " + r(2)],
["Titrate", "Adjust until pain control and side effects are balanced; review often; if not balanced after a few changes, seek specialist advice " + r(2)],
["Maintain", "Oral sustained-release morphine (NEML 15 mg ER tablet) " + r(2, 3)],
["Rescue", "Oral immediate-release morphine; not fast-acting fentanyl " + r(2)],
["Kidney or liver disease", "Specialist advice before strong opioids " + r(2)],
["Every patient", "Regular laxative; warn about transient nausea and drowsiness " + r(2)]
])}
<div class="calc" data-calc="morphinetitrate"></div>` },
{ id: "manage", title: "Symptom control", html: `
<h3>1. Pain — WHO ladder</h3>
<ul>
<li>Step 1: non-opioid (paracetamol, NSAID) ± adjuvant; Step 2: weak opioid (codeine, tramadol) + non-opioid ± adjuvant; Step 3: strong opioid (morphine) + non-opioid ± adjuvant ${r(1)}.</li>
<li>Chronic non-cancer pain: 4-step ladder adding interventional and complementary therapies (acupuncture, cupping, yoga, massage) before strong opioids ${r(1)}.</li>
<li>Neuropathic pain: amitriptyline or gabapentin as adjuvants ${LB.exp()}; bone pain: NSAID, radiotherapy if available ${LB.exp()}.</li>
</ul>
<h3>2. Breathlessness</h3>
<ul>
<li>Oxygen 4 L/min for 15 minutes (after explaining) ${r(1)}; morphine 2.5–5 mg every 4 hours (if already on morphine, increase by 30–50%) ${r(1)}; dexamethasone 4–8 mg/day where appropriate ${r(1)}.</li>
<li>Fan or hand fan, well-ventilated uncrowded room, loose clothing, comfortable upright position, water as needed; breathing and relaxation techniques ${r(1)}.</li>
<li>Cough: opioids are the drugs of choice in advanced disease; salbutamol often helps ${r(1)}.</li>
</ul>
<h3>3. Bleeding</h3>
<p>Stop NSAIDs or anticoagulants; vitamin K 1–2.5 mg IV (up to 5 mg) or tranexamic acid 1.5 g then 1 g three times daily; midazolam 2.5–5 mg or lorazepam 1–2 mg sublingual for distress from catastrophic bleeding; dark towels and sheets reduce the visual impact ${r(1)}.</p>
<h3>4. Gastrointestinal</h3>
${tbl(["Symptom", "Management"], [
["Nausea and vomiting", "Find the cause (chemical — opioids, drugs, uraemia, hypercalcaemia; gastric stasis; bowel obstruction; raised intracranial pressure; anxiety). Haloperidol for chemical causes; metoclopramide (prokinetic) for gastric stasis; ondansetron with a corticosteroid; dexamethasone for raised intracranial pressure; glycopyrrolate or atropine to reduce secretions; benzodiazepine for anxiety-related " + r(1)],
["Constipation", "Senna 2 tablets at night and/or lactulose 30 mL at night; bisacodyl if available; soap-and-water enema " + r(1) + "; regular laxative with every opioid " + r(2)],
["Diarrhoea", "Review medicines; octreotide for refractory diarrhoea (expensive) " + r(1)]
])}
<h3>5. Skin and swelling</h3>
<ul>
<li><b>Fungating wounds:</b> give the rescue analgesic 30 minutes before dressing (or ketamine 0.25–0.5 mg/kg sublingually 15 minutes before); soak the dressing before removing; non-adherent dressings; metronidazole powder mixed with lignocaine jelly for odour and pain ${r(1)}.</li>
<li><b>Lymphoedema:</b> skin care, elevation, compression, massage, exercise ${r(1)} ${LB.exp()}.</li>
</ul>
<h3>6. Psychological, social and spiritual care</h3>
<p>Assess mood, cognition, roles, relationships and the patient's understanding of the illness; involve counsellors, social workers and spiritual leaders; refer to palliative care champions where available ${r(1)}. Breaking bad news — SPIKES: Setting, Perception (what do they know?), Invitation (how much do they want to know?), Knowledge in small chunks, Emotions (respond with empathy), Strategy and summary (plan, follow-up) ${r(1)} ${LB.exp("EXPANSION — COMMON USAGE")}.</p>
<h3>7. The last days of life</h3>
${tbl(["Symptom", "Management (STG)"], [
["Noisy moist breathing ('death rattle')", "Does not cause hypoxia; reposition; stop parenteral fluids; atropine 1 mg or glycopyrrolate 0.2 mg SC or sublingual, up to 3–4 times a day — start early; or hyoscine butylbromide 20 mg (or hydrobromide 0.4 mg) SC; morphine 1.5–3 mg ± midazolam 2–3 mg SC for distress " + r(1)],
["Restlessness (no delirium)", "Treat causes (pain, retention, constipation, drugs, dehydration); midazolam 2–3 mg SC every 30 minutes until settled " + r(1)],
["Restlessness with delirium", "Add haloperidol 3–5 mg/day SC to midazolam " + r(1)],
["Delirium", "Treat causes, stop non-essential medicines, check for opioid toxicity and reduce or change opioid; haloperidol 3 mg (olanzapine 2.5–5 mg or quetiapine 25–100 mg no better); diazepam 2–10 mg preferred in alcohol withdrawal and Parkinson's disease " + r(1)]
])}` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("morphine", "Morphine")} 10 mg tablet, 15 mg ER tablet, 10 mg/mL injection — NEML ${r(3)}.</li>
<li>${D("fentanyl", "Fentanyl")} 25 mcg/h patch — NEML ${r(3)}; ${D("codeine", "codeine")} 15 mg; ${D("tramadol", "tramadol")} injection ${r(3)}.</li>
<li>${D("senna", "Senna")} 15 mg; ${D("lactulose", "lactulose")} — NEML ${r(3)}.</li>
<li>${D("metoclopramide", "Metoclopramide")}; ${D("ondansetron", "ondansetron")}; ${D("haloperidol", "haloperidol")} injection — NEML ${r(3)}.</li>
<li>${D("dexamethasone", "Dexamethasone")} 4 mg tablet and injection — NEML ${r(3)}.</li>
<li>${D("midazolam", "Midazolam")} injection (DH with OT/ICU); ${D("glycopyrronium", "glycopyrrolate")}; ${D("atropine", "atropine")} — NEML ${r(3)}.</li>
<li>${D("gabapentin", "Gabapentin")} 300 mg; ${D("amitriptyline", "amitriptyline")} — NEML ${r(3)}.</li>
<li>${D("octreotide", "Octreotide")}; ${D("tranexamic-acid", "tranexamic acid")}; ${D("ketamine", "ketamine")} — NEML ${r(3)}.</li>
<li>${D("scopolamine", "Hyoscine")} — not on NEML ${r(3)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Palliative care applies to children and their families too " + r(1) + "; weight-based opioid doses — paediatric specialist " + LB.exp()],
["Kidney failure", "Morphine metabolites accumulate — smaller doses, longer intervals; specialist advice " + r(2)],
["Heart failure, COPD", "Breathlessness dominates; low-dose morphine and fan " + r(1)],
["Dying at home", "Teach the family; leave SC medicines and a plan; who to call " + LB.loc()],
["Religious rituals", "Allow lamas, prayers and family presence; respect wishes about the body " + LB.loc()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["On morphine 5 mg 4-hourly, needed 4 rescue doses of 5 mg yesterday", "Total 50 mg/24 h → about 8 mg every 4 hours (7.5 mg, or 10 mg if pain is still poorly controlled), or ER 25 mg twice daily; rescue the same as one 4-hourly dose " + LB.exp("1/6 RULE — COMMON PRACTICE")],
["Dying patient with noisy breathing; family distressed", "Explain it is not choking; reposition; glycopyrrolate 0.2 mg SC " + r(1)],
["Cancer patient newly confused and twitching on morphine", "Opioid toxicity — check kidney function, reduce dose " + r(1)],
["Breathless lung cancer patient at home", "Fan, position, morphine 2.5 mg every 4 hours, dexamethasone if appropriate " + r(1)],
["Daughter crying, cannot sleep 2 months after her father died", "Normal grief — listen, normalise, support; counselling only if needed " + r(1)]
])}` },
{ id: "complications", title: "Opioid side effects", html: `<ul>
<li>Constipation in nearly everyone — regular laxative ${r(2)}.</li>
<li>Nausea at start or dose increase — usually transient; anti-emetic ${r(2)}.</li>
<li>Drowsiness and poor concentration — often transient; affects driving ${r(2)}.</li>
<li>Persistent CNS effects: reduce the dose if pain controlled, or switch opioid ${r(2)}.</li>
<li>Toxicity: pinpoint pupils, myoclonus, confusion, slow breathing — naloxone in small increments only if breathing is depressed ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Carers, grief and bereavement", html: `<ul>
<li>Pay attention to carers' needs — success of home care depends on them ${r(1)}.</li>
<li>Normalise grief: sleep and appetite disruption, exhaustion, deep sadness are common; some speak of wanting to be with the person who died — listen and ask about suicide ${r(1)}.</li>
<li>Support from family, friends, cultural practices and mourning rituals; anniversaries are hard ${r(1)}.</li>
<li>Only a small number need professional counselling ${r(1)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Pain in advanced illness", [F.s("Assess total pain (PQRST; NRS 0–10)"), F.a, F.d("Severity?"), F.a, F.b([["Mild", F.s("Step 1: paracetamol ± NSAID ± adjuvant")], ["Mild–moderate", F.s("Step 2: codeine or tramadol + step 1")], ["Moderate–severe", F.s("Step 3: morphine 20–30 mg/day + 5 mg rescue")]]), F.a, F.s("Laxative for every opioid; anti-emetic if nausea"), F.a, F.d("Balanced after a few adjustments?"), F.a, F.b([["Yes", F.ok("Sustained-release morphine; review")], ["No", F.e("Specialist advice")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Morphine without laxative", "Constipation in nearly all", "Regular senna/lactulose " + r(2)],
["Fentanyl patch for uncontrolled pain", "Cannot titrate quickly", "Oral morphine titration first " + r(2)],
["Withholding morphine for fear of hastening death", "Needless suffering", "Titrated doses are safe " + LB.exp()],
["Breaking bad news in a corridor or by phone", "Distress and mistrust", "In person, privately, seated, with family " + r(1)],
["IV fluids in the last hours", "Worsens secretions", "Stop parenteral hydration with death rattle " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "NICE starting dose of oral morphine for cancer pain?", "20–30 mg per day (e.g. 10–15 mg sustained-release twice daily) plus 5 mg immediate-release rescue doses.")}
${qa("Intern/MO", "What must be prescribed with every strong opioid?", "A regular laxative.")}
${qa("Specialist", "STG treatment of death rattle?", "Stop parenteral fluids; atropine 1 mg or glycopyrrolate 0.2 mg SC/SL 3–4 times a day, or hyoscine butylbromide 20 mg SC; start early.")}
${qa("Specialist", "Drug of choice for delirium at the end of life?", "Low-dose haloperidol (about 3 mg); benzodiazepines preferred in alcohol withdrawal and Parkinson's disease.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, chapter 18 Palliative care.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Palliative care for adults: strong opioids for pain relief. Clinical guideline CG140, May 2012 (updated August 2016). <a href="https://www.nice.org.uk/guidance/cg140" target="_blank" rel="noopener">nice.org.uk/guidance/cg140</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG chapter 18", "<span class='pass'>Checked</span>", "Partly scrambled text; readable parts used"],
["NICE CG140", "<span class='pass'>Checked</span>", "Read in the browser"],
["NEML availability", "<span class='pass'>Checked</span>", "NEML 2025"],
["Breakthrough 1/6 rule, oral:SC 2:1 ratio", "<span class='unv'>Not read</span>", "Common practice; marked"],
["Calculator", "<span class='pass'>Checked</span>", "Tested in the browser"],
["Images", "<span class='pass'>None</span>", "Not needed"]
], "qc")}` }
]
});
})();
