/* Worm infestations (Bhutan STG 8.4, WHO 2017 preventive chemotherapy) */
registerPage({
id: "worms-child",
title: "Worm Infestations",
subtitle: "Deworm with albendazole, give iron for hookworm anaemia, recognise roundworm obstruction and neurocysticercosis, and prevent reinfection with toilets, shoes and hand washing",
age: "Children & adults", specs: ["paeds", "id", "gi", "ph"],
keywords: ["worms", "helminths", "roundworm", "Ascaris", "hookworm", "whipworm", "pinworm", "tapeworm", "Taenia", "neurocysticercosis", "hydatid", "Strongyloides", "giardia", "albendazole", "deworming"],
related: ["anaemia-child", "ge-child", "sam-child", "epilepsy-child", "acute-abdomen-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Soil-transmitted worms remain common in rural Bhutan, causing anaemia, poor growth and occasional surgical emergencies. Tapeworm cysts in the brain are an important cause of new seizures.</p>
<div class="glance">
<div><h4>Deworm</h4><p>${dr("albendazole")} 400 mg once (200 mg at 12–23 months).</p></div>
<div><h4>Hookworm</h4><p>Plus ${dr("ferrous", "iron")} + folic acid.</p></div>
<div><h4>Tapeworm</h4><p>${dr("niclosamide")} 2 g; seizures → think neurocysticercosis.</p></div>
<div><h4>Prevent</h4><p>Toilets, shoes, hand washing, cook meat.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 8.4: albendazole 400 mg single dose for roundworm and hookworm (with iron/folic acid if anaemic), niclosamide for intestinal tapeworm, albendazole 12-hourly for 3 months + surgery for hydatid (referral). School deworming is part of the school health programme. Praziquantel and ivermectin availability is limited — check stock. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Worm", "Spread", "Main problems"], [["Roundworm (Ascaris)", "Eggs in soil/food", "Pain, malnutrition, obstruction, biliary ascariasis, Löffler's"], ["Hookworm", "Larvae through bare feet", "Iron-deficiency anaemia"], ["Whipworm", "Eggs", "Dysentery, rectal prolapse"], ["Pinworm", "Hand to mouth", "Night-time anal itch"], ["Taenia (pork/beef)", "Undercooked meat; eggs (cysticercosis)", "Segments in stool; neurocysticercosis — seizures"], ["Echinococcus", "Dog faeces", "Liver/lung hydatid cysts"], ["Strongyloides", "Skin", "Hyperinfection with steroids"]])}${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Soil-transmitted helminths", [F.s("Open defecation contaminates soil"), F.a, F.s("Eggs swallowed / larvae through skin"), F.a, F.e("Blood loss, malabsorption, obstruction")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "WHO", "This guide"], [["Age 12–23 months", "Not specified", "Albendazole 200 mg", "WHO " + LB.loc()], ["Pregnancy", "—", "Albendazole allowed in 2nd/3rd trimester", "WHO"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Abdominal pain, poor appetite, pallor, poor growth, worms passed in stool or vomit.</li><li>Obstruction: colicky pain, vomiting (worms), distension, palpable worm mass.</li><li>Neurocysticercosis: new seizures, headache, raised ICP.</li></ul><h3>The typical patient</h3><p>A 7-year-old in a village in Zhemgang is pale and tired; Hb 8.2 g/dL, stool shows hookworm eggs. <b>This is hookworm anaemia</b>: albendazole 400 mg once, iron + folic acid for 3 months, shoes, family deworming.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Other anaemia causes", "Diet, thalassaemia, malaria"], ["Intussusception", "Redcurrant stool, sausage mass"], ["Epilepsy", "No cysts on CT"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Stool microscopy (often not needed for mass treatment), FBC (eosinophilia, anaemia), ultrasound for hydatid/obstruction, CT for neurocysticercosis.</p>` },
{ id: "staging", title: "Treatment calculator", html: `<div class="calc" data-calc="wormplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Roundworm/hookworm/whipworm: albendazole single dose (whipworm 3 days).</li><li>Roundworm obstruction: NG suction, IV fluids, hypertonic saline enema in some units; anthelmintic after obstruction settles; surgery if no resolution.</li><li>Pinworm: albendazole, repeat at 2 weeks, treat household.</li><li>Tapeworm: niclosamide 2 g; neurocysticercosis — CT, antiepileptic, albendazole + steroids (specialist).</li><li>Hydatid: albendazole + PAIR/surgery.</li><li>Strongyloides: ivermectin.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("albendazole"), "400 mg once (200 mg 12–23 m)", "First line"], [dr("niclosamide"), "2 g chewed", "Tapeworm"], [dr("ivermectin"), "200 µg/kg × 2 days", "Strongyloides"], [dr("metronidazole"), "7.5 mg/kg 8-hourly × 5 days", "Giardia"], [dr("ferrous"), "3 mg/kg elemental iron daily", "Anaemia"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Deworm in the 2nd or 3rd trimester in endemic areas (WHO).</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Child vomiting worms with distension", "Obstruction — admit, NG, fluids, surgical review"], ["Steroids planned in someone from endemic area", "Treat Strongyloides empirically first"]])}` },
{ id: "complications", title: "Complications", html: `<p>Obstruction, volvulus, biliary ascariasis, pancreatitis, anaemia, growth failure, epilepsy, hydatid rupture/anaphylaxis.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Hb after 4–8 weeks of iron; deworming every 6–12 months in endemic areas.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Adult Ascaris worms", src: "images/ascaris-worms.png", mod: "Photograph", ctx: "Roundworm infection", loc: "Passed in stool", find: "Large pale round worms 15–35 cm", interp: "Albendazole; watch for obstruction", by: "SuSanA Secretariat", page: "https://commons.wikimedia.org/wiki/File:Ascaris_lumbricoides_adult_worms.png", lic: "CC BY 2.0" })}${fig({ title: "Hookworm egg", src: "images/hookworm-egg.jpg", mod: "Stool microscopy", ctx: "Hookworm", loc: "Stool", find: "Thin-shelled oval egg with segmented contents", interp: "Treat and give iron", by: "Joel Mills", page: "https://commons.wikimedia.org/wiki/File:Hookworm_egg_1.JPG", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Suspected worms", [F.s("Albendazole single dose"), F.a, F.d("Anaemia / seizures / obstruction?"), F.a, F.b([["Yes", F.e("Iron / CT + specialist / surgical review")], ["No", F.ok("Hygiene, repeat in 6–12 months")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Not giving iron with hookworm", "Anaemia persists", "Iron 3 months"], ["Missing neurocysticercosis", "Uncontrolled seizures", "CT in new seizures"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Albendazole dose for an 18-month-old?", "200 mg single dose.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. Guideline: preventive chemotherapy to control soil-transmitted helminth infections in at-risk population groups. Geneva: WHO; 2017. <a href="https://www.who.int/publications/i/item/9789241550116" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 8.4.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["NEML", "<span class='pass'>Checked</span>", "Albendazole, niclosamide"]], "qc")}` }
]
});
