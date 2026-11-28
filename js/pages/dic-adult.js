/* Disseminated intravascular coagulation (DIC) — adults (obstetric, sepsis, trauma, snakebite, cancer). NEW disease (batch N-5, 28 Nov 2026).
   Sources read directly: Merck Manual Professional — DIC (full review Jul 2025, updated Sept 2026: causes — obstetric (abruption, retained products,
   amniotic fluid embolism), gram-negative sepsis, adenocarcinoma and acute promyelocytic leukaemia, shock, trauma/burns, snake venom, ABO haemolytic
   reaction, aneurysm; slowly evolving → thrombosis, rapidly evolving → bleeding; tests platelets, PT, PTT, fibrinogen, D-dimer, smear for schistocytes;
   falling fibrinogen on 2 measurements; factor VIII normal/high in liver disease but low in DIC; treat the cause; platelets if <10–20 or falling fast
   with bleeding; cryoprecipitate if fibrinogen <100 mg/dL or falling fast; FFP for other factors; PCC not recommended; heparin for slowly evolving
   DIC with thrombosis, not usually in bleeding DIC); Bhutan National Guidelines on Appropriate Clinical Use of Blood 2009 (FFP with platelets in DIC
   only if bleeding; cryoprecipitate indicated in DIC, each unit fibrinogen 150–300 mg and raises fibrinogen 5–10 mg/dL; platelet triggers);
   NEML 2025 (heparin 5000 IU/mL; tranexamic acid; vitamin K). ISTH overt-DIC score (Taylor 2001) not read directly — used in the helper and marked;
   FFP 15 mL/kg is the standard dose already used on the bleeding page — marked. Covers remaining-list item 'Disseminated intravascular coagulation'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "dic-adult",
title: "Disseminated Intravascular Coagulation (DIC)",
subtitle: "Oozing from drip sites, bruising and organ failure after sepsis, abruption, PPH, trauma or a viper bite: check platelets, PT, APTT, fibrinogen and D-dimer, fix the cause first, and replace platelets, plasma and cryoprecipitate only when the patient bleeds",
age: "Adult (obstetric focus)", specs: ["medicine", "emerg", "obg", "picu"],
keywords: ["DIC", "disseminated intravascular coagulation", "consumption coagulopathy", "coagulopathy", "low fibrinogen", "D-dimer", "FFP", "cryoprecipitate", "abruption DIC", "amniotic fluid embolism", "sepsis coagulopathy", "viper bite coagulopathy", "20 minute whole blood clotting test", "ISTH DIC score", "schistocytes", "acute promyelocytic leukaemia"],
related: ["bleeding-adult", "transfusion-adult", "sepsis-adult", "pph-preg", "aph-preg", "snakebite-adult", "trauma-adult", "leukaemia-lymphoma", "preeclampsia-preg", "itp"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">DIC is <b>always secondary</b>: widespread clotting uses up platelets and clotting factors, so the patient both clots and bleeds. It stops when the <b>cause</b> is treated ${r(1)}.</p>
<div class="glance">
<div><h4>Causes</h4><p>Sepsis, abruption, PPH, retained products, amniotic fluid embolism, severe pre-eclampsia/HELLP, trauma, burns, viper bite, promyelocytic leukaemia, cancer, ABO transfusion reaction ${r(1)}.</p></div>
<div><h4>Tests</h4><p>Platelets, PT/INR, APTT, fibrinogen, D-dimer, film for fragments; repeat — <b>trends</b> matter. Bedside: 20-minute whole blood clotting test ${r(1)} ${LB.loc()}.</p></div>
<div><h4>Treat the cause</h4><p>Antibiotics and source control, deliver/evacuate the uterus, stop bleeding, antivenom, restore volume ${r(1)}.</p></div>
<div><h4>Replace only if bleeding</h4><p>Platelets (&lt;50 bleeding), FFP for long PT/APTT, cryoprecipitate for low fibrinogen ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan's blood guideline: FFP with platelets in DIC <b>only when bleeding</b>; cryoprecipitate is indicated in DIC ${r(2)}. Where fibrinogen tests are not available, a clot that will not form in a glass tube in 20 minutes means consumption coagulopathy — see ${P("snakebite-adult", "Snakebite")} ${LB.loc()}. Call the blood bank early in obstetric haemorrhage.</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Type", "Typical setting", "Main problem"], [
["Rapidly evolving (acute)", "Sepsis, obstetric, trauma, venom, APL", "Bleeding + organ failure " + r(1)],
["Slowly evolving (chronic)", "Cancer, aortic aneurysm, giant haemangioma", "Venous/arterial thrombosis; little bleeding " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("DIC", [F.s("Tissue factor exposed (placenta, endotoxin, tumour, injury, venom)"), F.a, F.s("Thrombin and fibrin everywhere; fibrinolysis activated"), F.a, F.e("Platelets and factors consumed → bleeding; microthrombi → organ failure; fragments → haemolysis")])} <p>${r(1)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Merck 2025/26", "Bhutan / other", "This guide"], [
["Cryoprecipitate trigger", "Fibrinogen &lt;1.0 g/L or falling fast", "UK practice often &lt;1.5 g/L (see " + P("bleeding-adult", "Bleeding disorders") + ")", "&lt;1.5 g/L in obstetric bleeding, &lt;1.0 g/L otherwise " + LB.exp("OBSTETRIC THRESHOLD — STANDARD")],
["Platelets", "&lt;10–20 or falling fast with bleeding", "&lt;50 with acute bleeding", "&lt;50 if bleeding " + r(1) + " " + r(2)],
["Heparin", "Slowly evolving DIC with thrombosis", "—", "Not in bleeding DIC " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Persistent oozing from drip, injection and puncture sites; bruises; gum, GI, urinary or uterine bleeding ${r(1)}.</li>
<li>Organ dysfunction: kidney injury, ARDS, confusion, liver injury, skin necrosis ${r(1)}.</li>
<li>Slow DIC: DVT, PE, arterial clots ${r(1)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 32-year-old woman at Gelephu with severe abruption: blood from cannula sites, uterus bleeding after delivery, blood in a tube not clotted at 20 minutes. Platelets 48, fibrinogen 0.8 g/L, PT prolonged. <b>Obstetric DIC</b>: uterotonics and surgical control, rapid transfusion with FFP, cryoprecipitate and platelets, tranexamic acid ${r(1)} ${r(2)} ${P("pph-preg", "PPH")}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Liver disease", "Factor VIII normal or high, lower D-dimer " + r(1) + " " + P("cirrhosis-adult", "Cirrhosis")],
["Dilutional coagulopathy (massive transfusion)", "History of many units " + P("transfusion-adult", "Transfusion")],
["TTP / HUS", "Fragments, low platelets, but normal PT/fibrinogen " + LB.exp("STANDARD")],
["HELLP", "Pregnancy, hypertension, liver enzymes " + P("preeclampsia-preg", "Pre-eclampsia")],
["Warfarin / vitamin K deficiency", "PT long, platelets normal " + P("bleeding-adult", "Bleeding disorders")],
["Dengue", "Low platelets, plasma leak " + P("dengue-adult", "Dengue")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Platelet count, PT/INR, APTT, fibrinogen, D-dimer (or FDP), blood film for schistocytes; repeat every few hours in acute cases ${r(1)}.</li>
<li>A fall in fibrinogen on two measurements supports DIC (fibrinogen rises in inflammation) ${r(1)}.</li>
<li>20-minute whole blood clotting test where labs are limited ${LB.loc()}.</li>
<li>Tests for the cause: cultures, lactate, ultrasound for retained products, film for promyelocytes ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "ISTH DIC score helper", html: `<div class="calc" data-calc="dicscore"></div>` },

{ id: "manage", title: "Management", html: `
<h3>1. Treat the cause ${r(1)}</h3>
<ul><li>Sepsis: antibiotics and source control ${P("sepsis-adult", "Sepsis")}. Obstetric: deliver, evacuate retained products, control PPH ${P("pph-preg", "PPH")}. Viper bite: antivenom ${P("snakebite-adult", "Snakebite")}. Trauma: damage control ${P("trauma-adult", "Trauma")}. APL: urgent haematology.</li><li>Restore blood volume and oxygen delivery.</li></ul>
<h3>2. Replace if bleeding or before a procedure ${r(1)} ${r(2)}</h3>
<ul>
<li>Platelets if &lt;50 ×10⁹/L with bleeding (or &lt;10–20 or falling fast).</li>
<li>FFP about 15 mL/kg for prolonged PT/APTT with bleeding ${LB.exp("DOSE STANDARD")}.</li>
<li>Cryoprecipitate for low or falling fibrinogen (each unit 150–300 mg fibrinogen) ${r(2)}.</li>
<li>${dr("tranexamic_acid", "Tranexamic acid")} in obstetric and trauma haemorrhage ${LB.exp("STANDARD")}; not routinely in sepsis DIC.</li>
<li>Prothrombin complex concentrate is not recommended ${r(1)}.</li>
</ul>
<h3>3. Thrombosis-predominant DIC</h3>
<ul><li>${dr("heparin_ufh", "heparin")} for slowly evolving DIC with thrombosis (cancer, aneurysm) ${r(1)}; VTE prophylaxis in non-bleeding acute DIC ${LB.exp("STANDARD")}.</li></ul>
<p>Do not transfuse for abnormal tests alone in a patient who is not bleeding ${r(2)}.</p>
` },

{ id: "drugs", title: "Medicines and products", html: `
${tbl(["Product", "Use", "Availability"], [
["Platelet concentrate", "Bleeding with low platelets " + r(2), "Blood bank"],
["Fresh frozen plasma", "Bleeding with long PT/APTT " + r(2), "Blood bank"],
["Cryoprecipitate", "Low fibrinogen " + r(2), "Blood bank"],
[dr("tranexamic_acid", "Tranexamic acid"), "Obstetric/trauma bleeding", "NEML"],
[dr("heparin_ufh", "heparin"), "Slow DIC with thrombosis " + r(1), "5000 IU/mL (NEML)"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> abruption, amniotic fluid embolism, retained dead fetus, HELLP; fibrinogen falls fast — keep it up ${r(1)} ${LB.exp("STANDARD")}.</li><li><b>Children and newborns:</b> sepsis, purpura fulminans, severe asphyxia ${LB.exp("STANDARD")} ${P("neosepsis-child", "Neonatal sepsis")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["No fibrinogen test at a district hospital", "20-minute clotting test; treat cause; FFP/cryo if bleeding; transfer"],
["Lab DIC in a septic patient who is not bleeding", "Treat sepsis; no prophylactic FFP " + r(2)],
["Viper bite with incoagulable blood", "Antivenom first — products alone will be consumed " + P("snakebite-adult", "Snakebite")],
["APL suspected (high white count, promyelocytes, bleeding)", "Emergency haematology; aggressive product support " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Haemorrhage, multi-organ failure, ARDS, AKI, limb or skin necrosis, transfusion reactions, death ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Repeat platelets, PT, APTT, fibrinogen 4–6 hourly while acute ${LB.exp("STANDARD")}.</li><li>DIC should settle quickly if the cause is controlled ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Schistocytes (fragmented red cells) on the film support DIC.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Bleeding + sepsis/obstetric/trauma/venom", [F.s("Platelets, PT, APTT, fibrinogen, D-dimer, film"), F.a, F.d("DIC pattern?"), F.a, F.b([["Bleeding", F.e("Treat cause + platelets, FFP, cryo, TXA (obstetric/trauma)")], ["Not bleeding", F.s("Treat cause, repeat tests, no routine products")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Giving FFP but not removing the cause", "DIC continues", "Cause first " + r(1)],
["One normal fibrinogen = no DIC", "Inflammation raises fibrinogen", "Repeat; look at trend " + r(1)],
["Heparin in bleeding DIC", "Worse bleeding", "Only for thrombotic DIC " + r(1)],
["Products for numbers only", "Waste, reactions", "Only if bleeding/procedure " + r(2)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which five tests make the DIC screen?", "Platelets, PT, APTT, fibrinogen and D-dimer (plus blood film).")}
${qa("Intern/MO", "When are FFP and platelets given in DIC (Bhutan blood guideline)?", "Only when the patient is bleeding.")}
${qa("Registrar", "How can DIC be told apart from liver disease?", "Factor VIII is low in DIC but normal/high in liver disease; D-dimer higher in DIC.")}
${qa("Specialist", "When is heparin used?", "Slowly evolving DIC with thrombosis (cancer, aneurysm), and some retained dead fetus cases — not bleeding DIC.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Merck Manual Professional Edition. Disseminated intravascular coagulation (full review Jul 2025, updated Sept 2026).</li>
<li id="ref-2">Ministry of Health, Bhutan. National Guidelines on Appropriate Clinical Use of Blood (1st edition, 2009).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Merck DIC", "<span class='pass'>Read</span>", "28 Nov 2026"], ["Bhutan blood guideline", "<span class='pass'>Read</span>", "FFP, cryo, platelets"], ["ISTH score, FFP dose", "<span class='unv'>Not read directly</span>", "Marked"]], "qc")}` }
]
});
})();
