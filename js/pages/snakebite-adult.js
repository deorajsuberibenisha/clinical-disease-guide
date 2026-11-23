/* Snakebite (adults and children: same antivenom dose) */
registerPage({
id: "snakebite-adult",
title: "Snakebite — Adults & Children",
subtitle: "Bhutan's 2024 national guideline at the bedside: safe first aid, the 20-minute clotting test, clear antivenom indications and doses, managing reactions, paralysis, bleeding and kidney injury",
age: "Adults and children", specs: ["emerg", "medicine", "paeds"],
keywords: ["snakebite", "snake bite", "envenoming", "antivenom", "anti snake venom", "ASV", "20WBCT", "20 minute whole blood clotting test", "krait", "cobra", "Russell's viper", "pit viper", "green pit viper", "neurotoxic", "haemotoxic", "neostigmine", "venom-induced consumption coagulopathy"],
related: ["aki-adult", "sepsis-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most snakebites are dry or mild; a few kill through paralysis, bleeding or kidney failure. The 20-minute clotting test, careful observation and timely antivenom save those few. Harmful first aid wastes precious time.</p>
<div class="glance">
<div><h4>First aid</h4><p>Reassure, immobilise the limb, remove rings, go to hospital. <b>No tourniquet, cutting, sucking or herbs.</b></p></div>
<div><h4>20WBCT</h4><p>2 mL blood in a clean glass tube, 20 minutes: unclotted = coagulopathy = antivenom.</p></div>
<div><h4>Antivenom</h4><p>${dr("asv")} <b>10 vials</b> IV over 60 min (adults and children alike); premedicate with adrenaline SC.</p></div>
<div><h4>Neurotoxic</h4><p>Airway first; repeat dose if paralysis worsens; ${dr("neostigmine")} trial.</p></div>
<div><h4>Haemotoxic</h4><p>20WBCT 6-hourly; 5 more vials until blood clots (max 30).</p></div>
<div><h4>Observe 24 hours</h4><p>Krait bites at night may show nothing for hours.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The <b>National Guideline for the Management of Snakebites (Bhutan, 2024)</b> and STG §1.4.17 are followed here. Venomous snakes include cobras, kraits, Russell's viper (southern foothills) and pit vipers (including green pit vipers, against which Indian polyvalent antivenom is less effective). ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Snakes and syndromes", html: `
${tbl(["Syndrome (Bhutan 2024)", "Features", "Likely snake"], [
["I", "Local swelling with bleeding or clotting problems", "Vipers (including pit vipers)"],
["II", "Local swelling, bleeding, shock or AKI, chemosis", "Russell's viper"],
["III", "Local swelling with paralysis", "Cobra or king cobra"],
["IV", "Paralysis with little local swelling, bitten while sleeping on the floor", "Krait"],
["V", "Paralysis with dark urine and AKI", "Russell's viper or krait"]])}
<p>A positive (unclotted) 20WBCT points to a viper and makes an elapid (cobra, krait) bite unlikely.${r(1)}</p>
` },

{ id: "patho", title: "Venom effects", html: `
${F.chart("Three main venom actions", [
F.b([["Haemotoxic (vipers)", F.e("Consumption coagulopathy: blood will not clot; bleeding")], ["Neurotoxic (cobra, krait)", F.e("Ptosis, bulbar and respiratory paralysis")], ["Myotoxic / nephrotoxic", F.e("Muscle breakdown, dark urine, AKI, high potassium")]]), F.a,
F.ok("Antivenom neutralises circulating venom; supportive care handles the rest")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Bhutan Snakebite Guideline 2024", "This guide"], [
["Antivenom dilution", "10 vials, each in 10 mL water, then 200 mL saline over 1 hour", "10 vials in 100–400 mL over 60 minutes", "Either " + LB.loc()],
["Premedication", "—", "Adrenaline 0.25 mL SC; no antihistamine/steroid premedication; no test dose", "As guideline"],
["Pit viper bites", "—", "Polyvalent antivenom of limited value; supportive care", "Treat severe coagulopathy; seek specialist advice"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li>Time and place of bite, activity (sleeping on floor = krait), description or photo of the snake (never bring a live snake), first aid used.</li>
<li>Examine: bite marks, swelling (mark the edge and time), bleeding (gums, urine, venepuncture sites), ptosis, eye movements, swallowing, neck flexion, breathing, BP, urine colour.</li></ul>
${box("red", "Danger signs", `<ul><li>Ptosis, double vision, difficulty swallowing, weak neck, breathlessness</li><li>Unclotted 20WBCT, bleeding</li><li>Shock, dark urine, low urine output</li><li>Rapidly spreading swelling</li></ul>`)}
<h3>The typical patient</h3>
<p>A 35-year-old farmer from Samtse was bitten on the foot while cutting grass 3 hours ago. His leg is swollen to the knee and his gums are bleeding; the 20WBCT is unclotted. <b>This is haemotoxic envenoming, probably Russell's viper</b>: local swelling, bleeding and a non-clotting test in the southern foothills. He needs 10 vials of antivenom over 1 hour with adrenaline premedication, then a repeat 20WBCT at 6 hours.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Dry bite or non-venomous snake", "No signs after 24 hours"], ["Scorpion or insect sting", "Pain, no coagulopathy"], ["Anxiety reaction", "Palpitations, tingling, normal tests"], ["Allergic reaction", "Urticaria, wheeze soon after"]])}` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "When"], [["<b>20WBCT</b>", "Coagulopathy", "On arrival, then 6-hourly for 24 h and after antivenom"], ["Platelets, PT/INR", "Coagulopathy", "If available"], ["Creatinine, potassium, urine", "AKI, myoglobin", "Haemotoxic or myotoxic bites"], ["ECG", "Hyperkalaemia, arrhythmia", "Shock or AKI"], ["Peak flow or single-breath count", "Respiratory weakness", "Neurotoxic bites"]])}
` },

{ id: "staging", title: "Antivenom tool", html: `<div class="calc" data-calc="snakeplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>A. First aid and arrival</h3>
<ul><li>Reassure; immobilise the bitten limb with a splint; remove rings; transport lying down. Remove tight tourniquets carefully (with antivenom ready).</li>
<li>IV access in the unbitten limb; no IM injections while coagulopathic.</li></ul>
<h3>B. Antivenom</h3>
<ul><li>Indicated for systemic or severe local envenoming (tool above): ${dr("asv")} 10 vials IV over 60 minutes; premedicate with ${dr("adrenaline_im", "adrenaline")} 0.25 mL SC (child 0.005 mL/kg); IM adrenaline ready.</li>
<li>Haemotoxic: 20WBCT at 6 hours; if unclotted, 5 vials and repeat every 6 hours until clotted (max 30). Neurotoxic: repeat 10 vials if paralysis worsens over 2 hours (max 20).</li>
<li>Reactions: anaphylaxis → stop, IM adrenaline, restart slowly; fever → paracetamol.</li></ul>
<h3>C. Specific problems</h3>
<ul><li><b>Paralysis:</b> airway and ventilation (bag-mask can keep a patient alive for days); atropine then ${dr("neostigmine")} trial.</li>
<li><b>Bleeding:</b> antivenom first; FFP 10–15 mL/kg only for persistent bleeding; no heparin or tranexamic acid.</li>
<li><b>AKI:</b> fluids, single furosemide dose, refer for dialysis if oliguric (see <a href="#/d/aki-adult">AKI</a>).</li>
<li><b>Local:</b> elevate, clean; antibiotics only if infected; tetanus toxoid once clotting is normal; fasciotomy only after correcting clotting and with proven compartment syndrome.</li>
<li>Pain: ${dr("paracetamol")}; no NSAIDs or aspirin.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("asv"), "10 vials IV over 60 min (same for children); repeat per tool", "Max 30 (haemotoxic), 20 (neurotoxic)"],
[dr("adrenaline_im"), "Premed 0.25 mL SC (child 0.005 mL/kg); anaphylaxis 0.5 mL IM (child by age)", "1:1000"],
[dr("neostigmine"), "0.01 mg/kg (max 0.5 mg) after atropine; child 0.025–0.04 mg/kg", "Every 30 min"],
[dr("paracetamol"), "1 g / 15 mg/kg", "Pain, pyrogenic reactions"],
[dr("furosemide"), "1–1.5 mg/kg once", "AKI after fluid challenge"]])}
` },

{ id: "populations", title: "Children and pregnancy", html: `<ul><li><b>Children:</b> same antivenom dose; smaller diluent volume; weight-based adrenaline and neostigmine.</li><li><b>Pregnancy:</b> antivenom when indicated; fetal monitoring; risk of abruption.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Woke with abdominal pain and ptosis, no bite mark", "Treat as krait bite", "Krait bites are often painless"], ["No antivenom at the facility", "Airway support, refer urgently", "Ventilation saves neurotoxic patients"], ["Green pit viper bite with mild swelling", "Observe, 20WBCT; antivenom only for systemic signs", "Limited antivenom effect"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Respiratory failure, haemorrhage (including intracranial), AKI, shock, local necrosis and amputation, chronic pituitary insufficiency after Russell's viper bites, serum sickness. Most patients treated early recover fully.</p>` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "Prevention advice", `<ul><li>Sleep on a raised bed under a tucked-in mosquito net (prevents krait bites).</li><li>Wear boots and use a torch at night; clear grass around homes.</li></ul>`)}
${box("red", "Come back at once if (after discharge)", `<ul><li>Bleeding, dark urine, weakness</li><li>Fever, rash and joint pains 1–12 days later (serum sickness)</li></ul>`)}
<p>Review 7 days after discharge; physiotherapy for the bitten limb (Bhutan guideline).</p>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Russell's viper", src: "images/russells-viper.jpg", mod: "Photograph", ctx: "Haemotoxic snake of the foothills", loc: "—", find: "Brown body with chain of dark oval spots", interp: "Causes coagulopathy, AKI, shock", by: "Hopeland", page: "https://commons.wikimedia.org/wiki/File:Daboia_russelii_142066935.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Common krait", src: "images/common-krait.jpg", mod: "Photograph", ctx: "Neurotoxic snake", loc: "—", find: "Glossy black with thin white bands", interp: "Painless night bites while sleeping on the floor; paralysis", by: "Chayant Gonsalves", page: "https://commons.wikimedia.org/wiki/File:Bungarus_caeruleus_160434547.jpg", lic: "CC BY 4.0" })}
</div>
${fig({ title: "White-lipped green pit viper", src: "images/green-pit-viper.jpg", mod: "Photograph", ctx: "Common in Bhutan's forests", loc: "—", find: "Green arboreal viper", interp: "Local swelling, sometimes coagulopathy; polyvalent antivenom has limited effect", by: "Abu Hamas", page: "https://commons.wikimedia.org/wiki/File:Trimeresurus_albolabris_89712044.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Snakebite", [F.s("First aid; IV access; 20WBCT; neuro check"), F.a, F.d("Any antivenom indication?"), F.a, F.b([["No", F.ok("Observe 24 h; 20WBCT 6-hourly")], ["Yes", F.e("10 vials ASV over 60 min; adrenaline premed")]]), F.a, F.s("Haemotoxic: 20WBCT at 6 h → 5 vials until clotted. Neurotoxic: repeat if worse at 2 h; airway; neostigmine")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Tourniquets, cutting, herbal remedies", "Ischaemia, infection, delay", "Immobilise and transport"], ["Skin test dose of antivenom", "Delay, no predictive value", "Not recommended"], ["Discharging a krait-risk patient early", "Late paralysis", "Observe 24 hours"], ["Heparin or tranexamic acid for coagulopathy", "Harmful or useless", "Antivenom"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "How is the 20WBCT done?", "2 mL venous blood in a clean dry glass tube, left undisturbed 20 minutes, then tipped once: liquid blood means coagulopathy.")}
${qa("Intern/MO", "Initial antivenom dose for a child?", "The same as an adult: 10 vials.")}
${qa("Specialist", "What suggests a krait bite?", "Painless night bite while sleeping on the floor, paralysis with little local swelling, no response to neostigmine.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. National Guideline for the Management of Snakebites, 2024; Standard Treatment Guidelines 2024, §1.4.17 Snake bites; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">World Health Organization Regional Office for South-East Asia. Guidelines for the management of snakebites, 2nd ed. New Delhi: WHO SEARO; 2016. <a href="https://www.who.int/publications/i/item/9789290225300" target="_blank" rel="noopener">who.int</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan Snakebite Guideline 2024", "<span class='pass'>Used</span>", "Via the app's summary of the guideline"], ["Species distribution in Bhutan", "<span class='flag'>Approximate</span>", "Broad description only"]], "qc")}` }
]
});
