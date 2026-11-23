/* High-altitude illness: AMS, HACE, HAPE (adults, with children and pregnancy) */
registerPage({
id: "altitude-adult",
title: "High-Altitude Illness — AMS, HACE and HAPE",
subtitle: "For Bhutan's high valleys, passes and treks: the Lake Louise score, slow-ascent rules, acetazolamide, dexamethasone and nifedipine, and why going down is the treatment that never fails",
age: "Adults and children", specs: ["emerg", "medicine", "resp"],
keywords: ["altitude sickness", "high altitude illness", "acute mountain sickness", "AMS", "HACE", "high altitude cerebral edema", "HAPE", "high altitude pulmonary edema", "Lake Louise score", "acetazolamide", "Diamox", "dexamethasone", "nifedipine", "descent", "Gamow bag", "trekking", "Laya", "Lunana", "Gasa", "Snowman trek", "chronic mountain sickness"],
related: ["pneumonia-adult", "headinjury-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">At altitude, a headache with nausea is mountain sickness until proved otherwise. Most people recover by resting where they are; a few progress to brain or lung swelling that can kill within hours. The rule is simple: never go higher with symptoms, and go down if they get worse.</p>
<div class="glance">
<div><h4>AMS</h4><p>Headache + nausea, fatigue or dizziness within 6–12 hours of arriving above 2500 m.</p></div>
<div><h4>HACE</h4><p>AMS + <b>ataxia</b> or confusion: descend now, ${dr("dexamethasone")} 8 mg then 4 mg 6-hourly.</p></div>
<div><h4>HAPE</h4><p>Breathless <b>at rest</b>, cough, low SpO₂: descend, oxygen, ${dr("nifedipine")}.</p></div>
<div><h4>Prevent</h4><p>Above 3000 m: sleep no more than 500 m higher each night; rest day every 3–4 days.</p></div>
<div><h4>Acetazolamide</h4><p>${dr("acetazolamide")} 125 mg twice daily to prevent; 250 mg twice daily to treat.</p></div>
<div><h4>Descend</h4><p>300–1000 m, as soon as safely possible, for any severe illness.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §1.8 defines high-altitude illness from 2400 m. Risk areas include Gasa, Laya (about 3800 m), Lunana (over 4000 m), Merak and Sakteng, the high passes (Chele La about 3990 m) and treks such as Jomolhari and the Snowman (passes over 5000 m). Lowlanders posted to high schools, health centres or army camps, pilgrims, yak herders returning after a stay below, and tourists who fly into Paro and drive straight up are all at risk. Acetazolamide is stocked only at district hospitals and above: carry it on treks. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Types and timing", html: `
${tbl(["Illness", "Onset after ascent", "Key features"], [
["Acute mountain sickness (AMS)", "6–12 hours", "Headache plus loss of appetite, nausea or vomiting, fatigue, dizziness, poor sleep (STG)"],
["High-altitude cerebral oedema (HACE)", "Usually after 2–3 days, above 3000 m", "AMS plus ataxia, confusion, drowsiness, seizures, coma"],
["High-altitude pulmonary oedema (HAPE)", "2–4 days, often the second night", "Breathless at rest, dry then frothy cough, chest tightness, fast breathing and pulse, crackles, low SpO₂, low-grade fever"]])}
<p>Risk rises with the height reached, how fast, sleeping altitude, exertion and previous episodes. Fitness does not protect.${r(1)}</p>
` },

{ id: "patho", title: "Why it happens", html: `
${F.chart("Low oxygen pressure", [
F.s("Less oxygen per breath → hypoxaemia"), F.a,
F.b([["Brain", F.e("Vasodilatation and leaky barrier → swelling → AMS, then HACE")], ["Lungs", F.e("Uneven hypoxic vasoconstriction → very high pulmonary pressure → leak → HAPE")]]), F.a,
F.ok("Acclimatisation (more breathing, kidney bicarbonate loss) takes days; acetazolamide speeds it; descent reverses it")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "WMS 2024", "This guide"], [
["Acetazolamide prevention", "Not stated (NEMF: 125–250 mg BD)", "125 mg BD from the day before ascent", "125 mg BD " + LB.int()],
["HAPE nifedipine", "20 mg TDS", "30 mg modified-release BD (only when descent or oxygen is unavailable)", "Either; descent and oxygen first"],
["Dexamethasone in AMS", "4 mg QID for severe symptoms", "4 mg 6-hourly for moderate-severe AMS", "Same"],
["Threshold altitude", "2400 m (8000 ft)", "Usually 2500 m; AMS occasionally lower", "2400 m " + LB.bt()]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Ask:</b> highest altitude reached and sleeping altitude, speed of ascent, days at altitude, previous altitude illness, medicines, alcohol.</li>
<li><b>Examine:</b> SpO₂ (compare with companions: a value much lower than others is a warning), RR, HR, temperature, chest crackles, conscious level, <b>heel-to-toe walking</b> (the key test for HACE).</li></ul>
${box("red", "Danger signs: descend now", `<ul><li>Ataxia, confusion, drowsiness, behaviour change</li><li>Breathless at rest, cough with pink froth, cyanosis</li><li>SpO₂ far below expected for the altitude, or falling</li><li>Vomiting that will not stop</li></ul>`)}
<h3>The typical patient</h3>
<p>A 29-year-old teacher from Samtse arrives in Laya after a three-day walk from Gasa. On the second night at Laya she has a worsening headache, vomits twice and stumbles on a heel-to-toe walk; her colleagues say she is 'not herself'. <b>This is HACE</b>, not ordinary AMS: the ataxia is the giveaway. She needs immediate descent with escort, oxygen if available, dexamethasone 8 mg then 4 mg every 6 hours, and must not walk alone.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Dehydration or exhaustion", "No headache pattern; improves with fluids and rest"], ["Hypoglycaemia", "Diabetics, poor intake; check glucose"], ["Carbon monoxide poisoning", "Stoves in closed tents or huts; several people ill"], ["Pneumonia", "Fever, focal chest signs; HAPE improves rapidly with descent"], ["Migraine, stroke, intracranial bleed", "Focal deficit, sudden severe headache"], ["Alcohol or sedatives", "History; worsen AMS"]])}` },

{ id: "invest", title: "Investigations", html: `<p>The diagnosis is clinical. Pulse oximetry helps but varies widely with altitude: typical healthy values are about 90–95% at 2500 m and 85–90% at 4000 m. Chest X-ray after descent shows patchy, often right-sided oedema in HAPE; CT/MRI only to exclude other causes.</p>` },

{ id: "staging", title: "Lake Louise score and plan", html: `<div class="calc" data-calc="lakelouise"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. AMS</h3>
<ul><li>Stop ascending; rest; fluids; paracetamol or ibuprofen for headache; no alcohol or sleeping tablets.</li>
<li>${dr("acetazolamide")} 250 mg twice daily (STG) speeds recovery. Moderate–severe AMS: ${dr("dexamethasone")} 4 mg every 6 hours (STG); descend if not improving in 24 hours.</li>
<li>Re-ascend only when symptoms have gone, more slowly.</li></ul>
<h3>B. HACE (emergency)</h3>
<ul><li><b>Immediate descent</b> with an escort (carry if ataxic); oxygen to SpO₂ over 90%; dexamethasone 8 mg PO/IV/IM, then 4 mg every 6 hours (STG); portable hyperbaric bag if descent is impossible.</li>
<li>Helicopter evacuation from remote areas (Royal Bhutan Helicopter Service) where available.</li></ul>
<h3>C. HAPE (emergency)</h3>
<ul><li>Descend; minimise exertion (carry); oxygen to SpO₂ over 90% (can be life-saving on its own in a health centre); keep warm.</li>
<li>${dr("nifedipine")} 20 mg 8-hourly (STG) or 30 mg MR 12-hourly if descent or oxygen is delayed. Diuretics are not recommended.</li>
<li>HAPE with HACE: add dexamethasone.</li></ul>
<h3>D. Prevention</h3>
<ul><li>Above 3000 m: raise sleeping altitude by no more than 500 m a day, with a rest day every 3–4 days. 'Climb high, sleep low.'</li>
<li>Acetazolamide 125 mg twice daily from the day before ascent for moderate or high-risk itineraries (e.g. flying or driving to over 3000 m and sleeping there; previous AMS). Dexamethasone 2 mg 6-hourly or 4 mg 12-hourly if acetazolamide cannot be used.</li>
<li>Previous HAPE: nifedipine 30 mg MR twice daily from the day before ascent.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Use"], [
[dr("acetazolamide"), "Prevent 125 mg BD; treat 250 mg BD (child 1.25 / 2.5 mg/kg BD)", "AMS"],
[dr("dexamethasone"), "HACE 8 mg then 4 mg 6-hourly; AMS 4 mg 6-hourly (child 0.15 mg/kg, max 4 mg)", "HACE, severe AMS"],
[dr("nifedipine"), "20 mg TDS (STG) or 30 mg MR BD", "HAPE treatment and prevention"],
[dr("paracetamol"), "1 g 6-hourly", "Headache"]])}
` },

{ id: "populations", title: "Children, pregnancy and highlanders", html: `<ul><li><b>Children:</b> same illnesses; young children show fussiness, poor feeding, vomiting and poor sleep instead of headache (Children's Lake Louise Score). Same ascent rules; acetazolamide 1.25 mg/kg twice daily prevention, 2.5 mg/kg treatment; dexamethasone 0.15 mg/kg. Descend with any doubt.</li><li><b>Pregnancy:</b> avoid sleeping above 3000 m if possible, especially late in pregnancy; slow ascent; acetazolamide only if essential (avoid in the first trimester).</li><li><b>People living at altitude:</b> those returning after time in the lowlands can develop re-entry HAPE; long-term residents may develop chronic mountain sickness (high haemoglobin, headache, cyanosis) needing assessment at lower altitude.</li><li><b>Heart or lung disease, sickle cell disease:</b> seek advice before going high; oxygen saturation will fall further.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Night, snow, cannot descend", "Oxygen, dexamethasone, nifedipine, hyperbaric bag; descend at first light", "Bridge to descent"], ["Trekking group wants to push on", "Ill person never goes higher; split the group with an escort", "Deaths follow continued ascent"], ["Mild AMS on day 1 in Laya", "Rest day; acetazolamide; reassess", "Most resolve in 1–2 days"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>AMS resolves in 1–3 days with rest. Untreated HACE progresses to coma and death within hours; HAPE is the commonest cause of altitude death. With descent and treatment, most recover fully within days; HAPE can recur on future ascents.</p>` },

{ id: "followup", title: "Advice for travellers", html: `
${box("green", "Before going high", `<ul><li>Plan slow ascent with rest days; carry acetazolamide and know the danger signs.</li><li>Drink enough, avoid alcohol and sleeping pills in the first days.</li><li>Walk heel-to-toe each evening if you have symptoms; if you cannot, go down.</li></ul>`)}
${box("red", "Go down at once if", `<ul><li>Confusion, stumbling, extreme sleepiness</li><li>Breathless at rest or a wet cough</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Helicopter evacuation for altitude sickness in the Himalaya", src: "images/altitude-helicopter.jpg", mod: "Photograph", ctx: "Rescue of an older trekker", loc: "High-altitude helipad", find: "Casualty evacuated by air", interp: "Descent, by any means, is the definitive treatment for HACE and HAPE", by: "valcker from Paris", page: "https://commons.wikimedia.org/wiki/File:Helicopter_evac_in_Himalaya_evacuation_of_an_old_man_suffering_altitude_sickness._(12192425724).jpg", lic: "CC BY 2.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Ill at altitude", [F.s("Headache, nausea, breathlessness or confusion above 2400 m"), F.a, F.d("Ataxia/confusion or breathless at rest?"), F.a, F.b([["Yes", F.e("HACE/HAPE: descend now; oxygen; dexamethasone (HACE) or nifedipine (HAPE)")], ["No", F.s("AMS: stop ascent, rest, analgesia, acetazolamide")]]), F.a, F.d("Worse or not better in 24 h?"), F.a, F.e("Descend 300–1000 m")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Continuing ascent with symptoms", "HACE or HAPE", "Never go higher ill"], ["Sending an ataxic patient down alone", "Falls, getting lost", "Always escort"], ["Waiting for drugs to work instead of descending", "Deterioration", "Descend first, drugs on the way"], ["Calling HAPE 'pneumonia' and staying high", "Death", "HAPE improves dramatically with descent"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What single bedside test best detects HACE?", "Heel-to-toe (tandem) walking: ataxia suggests HACE.")}
${qa("Intern/MO", "Acetazolamide dose for AMS prevention?", "125 mg twice daily, starting the day before ascent, until 2–3 days at the highest altitude.")}
${qa("Specialist", "Why does nifedipine help HAPE?", "It lowers the high pulmonary artery pressure that drives capillary leak.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Luks AM, Beidleman BA, Freer L, et al. Wilderness Medical Society clinical practice guidelines for the prevention, diagnosis, and treatment of acute altitude illness: 2024 update. Wilderness Environ Med 2024;35(1 Suppl):2S–19S. <a href="https://doi.org/10.1016/j.wem.2023.05.013" target="_blank" rel="noopener">doi:10.1016/j.wem.2023.05.013</a></li>
<li id="ref-2">Roach RC, Hackett PH, Oelz O, et al. The 2018 Lake Louise Acute Mountain Sickness Score. High Alt Med Biol 2018;19:4–6. <a href="https://doi.org/10.1089/ham.2017.0164" target="_blank" rel="noopener">doi:10.1089/ham.2017.0164</a></li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.8 High altitude illnesses; NEMF 2022 (acetazolamide); via Bhutan Clinical Reference app (Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §1.8", "<span class='pass'>Used</span>", "Doses compared with WMS 2024"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Bhutan altitude figures", "<span class='flag'>Approximate</span>", "Village and pass heights rounded"], ["Hyperbaric bag availability", "<span class='flag'>Unknown</span>", "Not on the NEML"]], "qc")}` }
]
});
