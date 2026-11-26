/* Hydatid disease (cystic echinococcosis) — all ages. Batch E-6, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §8.4.1 Echinococcosis (refer; albendazole 400 mg 12-hourly for 3 months; surgery; hygiene);
   Bhutan national zoonoses guideline, chapter 9 Cystic echinococcosis (Bhutan epidemiology, risk factors, WHO ultrasound classification CE1–CE5/CL,
   stage-based treatment table, albendazole 10–15 mg/kg/day up to 400 mg twice daily continuously for 3–6 months, peri-procedure timing, praziquantel
   adjunct 25–40 mg/kg/day, monitoring, follow-up; "WHO 2025" notes). The guideline's treatment table is partly scrambled in the PDF text layer — rows
   were reconstructed and the reading is marked. WHO echinococcosis fact sheet (24 Nov 2026): four treatment options, 2.2% post-operative mortality,
   6.5% relapse. FDA albendazole label (via the drug monograph) for the cyclical US regimen. Not read: WHO 2025 CE treatment guideline itself,
   WHO-IWGE 2010 expert consensus. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "hydatid",
title: "Hydatid disease (cystic echinococcosis) — all ages",
subtitle: "A slowly growing cyst — usually in the liver, sometimes the lung — from dog tapeworm eggs: stage it on ultrasound, choose albendazole, PAIR, surgery or watchful waiting by that stage, and never let it rupture",
age: "All ages", specs: ["id", "surg", "gi", "medicine", "ph"],
keywords: ["hydatid cyst", "hydatid disease", "cystic echinococcosis", "Echinococcus granulosus", "liver cyst", "lung cyst", "WHO CE classification", "CE1", "CE2", "CE3a", "CE3b", "CE4", "CE5", "PAIR", "albendazole hydatid", "praziquantel", "daughter cysts", "water-lily sign", "dog tapeworm"],
related: ["liverabscess-adult", "gallstones-adult", "acute-abdomen-adult", "lung-abscess-adult", "worms-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Hydatid disease is a disease of dogs, cattle and people living close together. In Bhutan the cysts are usually found in the liver of someone with vague upper abdominal discomfort, or by chance on an ultrasound. The modern approach is to stage the cyst on ultrasound and match the treatment to the stage, rather than operating on every cyst.</p>
<div class="glance">
<div><h4>Find it</h4><p><b>Ultrasound</b> is the first-line test (sensitivity 90–95%) and gives the WHO stage; serology only supports it ${r(2)}.</p></div>
<div><h4>Active, small (CE1/CE3a under 5 cm)</h4><p>Albendazole alone, continuously, for at least 3–6 months ${r(2)}.</p></div>
<div><h4>Larger or multivesicular</h4><p>PAIR or surgery with albendazole cover; lung cysts go to surgery ${r(2)}.</p></div>
<div><h4>Inactive (CE4/CE5)</h4><p>Watch and wait with ultrasound every 6 months for at least 10 years ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§8.4.1) says refer, give albendazole 400 mg 12-hourly for 3 months, and consider surgery ${r(1)}. The national zoonoses guideline adds WHO ultrasound staging and matches treatment to stage and hospital level; complicated cysts go to the hepato-biliary surgeons at JDWNRH and lung cysts to the cardiothoracic surgeon ${r(2)}. Hydatid serology is done at JDWNRH and RCDC ${r(2)}. A 2017 NRH study found that over 90% of patients had de-roofing and drainage by laparotomy ${r(2)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Cause", "Larval stage of the dog tapeworm <i>Echinococcus granulosus</i> sensu lato " + r(1, 2)],
["Cycle", "Dogs carry the adult worm and pass eggs; livestock (and people, by accident) swallow eggs and grow cysts; dogs are re-infected by eating offal " + r(2, 3)],
["Bhutan", "<i>E. granulosus</i> s.l. (G1–3) and <i>E. ortleppi</i> (G5) found in stray dogs, cattle, yaks and imported meat — a dog–cattle cycle " + r(2)],
["Risk factors", "Contact with dogs, livestock work, home slaughter, feeding dogs raw offal, raw vegetables, unboiled water, poor hand hygiene " + r(2)],
["Sites", "Liver 70–80%, lung 10–20% (15–30% in some series), rarely spleen, kidney, brain, bone, heart; a single organ in about 80% " + r(2)],
["Incubation", "Months to decades " + r(1, 2)],
["Outcome", "Post-operative death about 2.2%; about 6.5% relapse after an intervention " + r(3)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("A slowly growing cyst", [F.s("Eggs swallowed → embryo crosses the gut wall → portal blood"), F.a, F.s("Liver filters most; some reach the lung"), F.a, F.s("Cyst grows slowly over years (laminated layer + germinal layer, daughter cysts)"), F.a, F.b([["Mass effect", F.s("Pain, jaundice, cough, breathlessness")], ["Complications", F.e("Rupture (anaphylaxis, spread), infection, fistula into bile ducts or bronchi")]])])}` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Bhutan zoonoses guideline (WHO-based)", "FDA albendazole label", "This guide"], [
["Who gets albendazole alone", "All (refer)", "CE1/CE3a under 5 cm, CE2/CE3b 5 cm or less, inoperable cases", "Liver, lung and peritoneal CE", "By stage, per the national guideline " + r(2)],
["Albendazole dose", "400 mg 12-hourly", "10–15 mg/kg/day in 2 doses, up to 400 mg twice daily, with a fatty meal", "60 kg+: 400 mg twice daily; under 60 kg: 15 mg/kg/day in 2 doses, max 800 mg/day", "Weight-based in children; 400 mg twice daily in adults " + r(2, 4)],
["Schedule and length", "3 months", "Continuously — no monthly breaks — for at least 3–6 months", "28-day cycles with 14 days off, 3 cycles", "Continuous, as in the national guideline " + r(2)],
["Lung cysts", "Not separated", "Surgery; no albendazole before surgery (rupture risk); after surgery only if spillage", "—", "Refer for surgery " + r(2)],
["Inactive cysts (CE4/CE5)", "Not separated", "No treatment; ultrasound follow-up", "—", "Watch and wait " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Often silent for years; found by chance on ultrasound ${r(2, 3)}.</li>
<li><b>Liver</b>: right upper quadrant or epigastric pain, nausea, vomiting, a palpable mass or hepatomegaly; jaundice if bile ducts are compressed; fever if infected or ruptured ${r(1, 2)}.</li>
<li><b>Lung</b>: chronic cough, chest pain, breathlessness, haemoptysis or coughing up cyst contents (salty fluid, "grape skins"); failure to thrive in children ${r(2)}.</li>
<li>General: weight loss, anorexia, weakness ${r(1)}.</li>
<li><b>Complications</b> needing urgent care: rupture, anaphylaxis, infection/abscess, biliary or bronchial fistula and obstruction, compression of vital structures, embolism ${r(2)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 42-year-old cattle farmer from Bumthang who keeps two dogs has had dull right upper abdominal pain for months. Ultrasound shows a 4 cm unilocular cyst with a double wall in the right lobe — CE1. Serology is positive. He is treated with albendazole 400 mg twice daily with meals continuously, LFTs monthly and CBC every 2–4 weeks, with repeat ultrasound at 3–6 months; the family is taught to deworm the dogs and never feed them offal ${r(2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Simple liver cyst", "Thin wall, no double wall, no septa or daughter cysts; serology negative " + r(2)],
["Liver abscess (pyogenic or amoebic)", "Fever, toxic, tender; aspirate; rapid course " + r(2)],
["Alveolar echinococcosis", "Infiltrative, tumour-like; rare in Bhutan " + r(2, 3)],
["Cystadenoma / cystadenocarcinoma", "Septations, nodules — CT/MRI " + r(2)],
["Tuberculoma, metastases, hepatoma", "For solid-looking CE4/CE5 lesions " + r(2)],
["Lung: abscess, TB cavity, cancer", "Water-lily sign or crescent of air suggests hydatid " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Ultrasound</b> — first line in clinic and field; sensitivity 90–95%, specificity 93–98%; gives the WHO stage ${r(2)}.</li>
<li>CT or MRI for sites ultrasound cannot see (lung, brain, bone, heart) or when complications are suspected; MRI shows cyst structure better; avoid overuse ${r(2)}.</li>
<li><b>Serology</b> (RDT, ELISA) only when imaging is not typical, and to monitor recurrence: about 80% sensitive overall (90% liver, 40% lung) ${r(2)}.</li>
<li>Confirm in seronegative cases by protoscolices or hooks in cyst fluid, histology, PCR, or changes on treatment ${r(2)}.</li>
<li>Baseline CBC (eosinophils) and LFT ${r(2)}.</li>
</ul>` },
{ id: "staging", title: "WHO ultrasound stages", html: `
${tbl(["Stage", "Ultrasound appearance", "Activity"], [
["CL", "Cystic lesion without pathognomonic signs — 'suspected CE'", "Uncertain " + r(2)],
["CE1", "Unilocular anechoic cyst with a visible double wall; may show 'hydatid sand'", "Active " + r(2)],
["CE2", "Multivesicular, multiseptated (rosette or honeycomb)", "Active " + r(2)],
["CE3a", "Detached membranes floating in the cyst ('water-lily sign')", "Transitional " + r(2)],
["CE3b", "Daughter cysts in a solid matrix", "Transitional " + r(2)],
["CE4", "Heterogeneous contents, 'canalicular' structures, no daughter cysts", "Inactive " + r(2)],
["CE5", "Solid content with a calcified wall", "Inactive " + r(2)]
])}
<div class="calc" data-calc="hydatidabz"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Uncomplicated liver cysts — by stage (Bhutan zoonoses guideline)</h3>
${tbl(["Stage and size", "Treatment", "Level"], [
["CE1 / CE3a under 5 cm", "Albendazole alone", "Any hospital " + r(2)],
["CE1 / CE3a 5–10 cm", "PAIR (puncture, aspiration, injection, re-aspiration) + albendazole — PAIR only if there is no biliary communication", "District hospital with surgery " + r(2)],
["CE1 / CE3a over 10 cm", "Surgery, or percutaneous treatment + albendazole (larger cysts: higher risk of fistula and rupture)", "District hospital with surgery " + r(2)],
["CE2 / CE3b 5 cm or less", "Albendazole alone", "Any hospital " + r(2)],
["CE2 / CE3b over 5 cm", "Surgery + albendazole (or catheter drainage)", "District hospital with surgery " + r(2)],
["CE4 / CE5 (inactive)", "No treatment; monitor", "Any hospital " + r(2)],
["Lung cyst", "Surgery, no pre-operative albendazole; after surgery only if spillage", "National referral (cardiothoracic) " + r(2)],
["Complicated cyst", "Refer to hepato-biliary surgery, JDWNRH", r(2)]
])}
<p><small>The table in the source PDF is partly scrambled in its text layer; the size cut-offs above are read from the rows and match the guideline's narrative text (albendazole for small CE1/CE3a under 5 cm; PAIR for CE1/CE3a typically over 5 cm) ${LB.exp("RECONSTRUCTED FROM PDF")}.</small></p>
<h3>2. Albendazole</h3>
<ul>
<li><b>10–15 mg/kg/day in two divided doses, up to 400 mg twice daily</b>, with a fatty meal ${r(2)}.</li>
<li>Give <b>continuously</b>, without monthly breaks, for at least 3–6 months depending on response; 6–12 months for multiple or large cysts ${r(2)}.</li>
<li>Response = detachment of the parasite layers, shrinkage or change of stage after 3 months ${r(2)}.</li>
<li>Around PAIR or catheter drainage: start 1 week before, continue at least 1 month after ${r(2)}.</li>
<li>Around surgery: at least 1 week before; 1 month after (3 months if there was spillage) ${r(2)}.</li>
<li>Contraindicated in pregnancy (especially the first trimester), pulmonary cysts at risk of rupture, severe liver disease; caution in chronic liver disease and marrow suppression ${r(2)}.</li>
</ul>
<h3>3. Praziquantel</h3>
<p>Only as an adjunct when cyst contents spill (surgery or PAIR) or dissemination is likely: 25–40 mg/kg/day in three doses for 7–14 days, with albendazole; not routinely, and useless alone ${r(2)}.</p>
<h3>4. Surgery</h3>
<p>For large, complicated or lung cysts; protect the field from spillage (scolicidal agents, packs) ${r(2)} ${LB.exp()}. WHO reports about 2.2% post-operative mortality and 6.5% relapse after interventions ${r(3)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("albendazole", "Albendazole")} — NEML 400 mg tablet ${r(5)}.</li>
<li>Praziquantel — not on NEML 2025; referral hospitals ${r(5)} ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Albendazole 10–15 mg/kg/day in 2 doses (max 400 mg twice daily); lung cysts common in children — surgery " + r(2)],
["Pregnancy", "Avoid albendazole (especially first trimester); manage expectantly or with surgery as needed " + r(2)],
["Liver disease", "Monthly LFTs; stop albendazole if over 4× normal until it settles " + r(2)],
["Anaphylaxis from rupture", "Treat as anaphylaxis (adrenaline); see the anaphylaxis page " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["3 cm CE1 cyst found by chance", "Albendazole alone; ultrasound at 3–6 months " + r(2)],
["7 cm CE1 cyst, no bile in aspirate", "PAIR + albendazole (1 week before, ≥ 1 month after) " + r(2)],
["Calcified CE5 cyst, no symptoms", "No treatment; ultrasound every 6 months for ≥ 10 years " + r(2)],
["Child with a 6 cm lung cyst", "Refer for surgery; no albendazole beforehand " + r(2)],
["Sudden RUQ pain, urticaria and hypotension in a known cyst carrier", "Rupture with anaphylaxis: resuscitate, then surgery " + r(2) + " " + LB.exp()]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Rupture into the peritoneum, bile ducts or bronchi; anaphylaxis (rare); secondary spread ${r(2)}.</li>
<li>Infection and abscess; biliary obstruction and cholangitis ${r(2)}.</li>
<li>Compression syndromes; embolism ${r(2)}.</li>
<li>Albendazole: raised LFTs (16%, mostly under 4×), leucopenia ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and prevention", html: `<ul>
<li>LFTs at baseline and monthly; CBC every 2–4 weeks on albendazole ${r(2)}.</li>
<li>Ultrasound at 3–6 months, then yearly for at least 5 years after inactivation; inactive cysts every 6 months for at least 10 years ${r(2)}.</li>
<li>Prevention: wash hands after touching dogs or soil, wash vegetables, deworm dogs, never feed dogs raw offal, supervised slaughter ${r(1, 2, 3)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Hydatid liver cyst on ultrasound", src: "images/hydatid-liver-us.jpg", mod: "Abdominal ultrasound", ctx: "Hepatic cystic echinococcosis", loc: "Liver", find: "Hydatid cyst in the liver", interp: "Stage the cyst (WHO CE1–CE5) — the stage decides the treatment", by: "R. Badea and Simona Ioanitescu", page: "https://commons.wikimedia.org/wiki/File:Ultrasonography_of_a_hydatid_liver_cyst.jpg", lic: "CC BY 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Liver cyst on ultrasound", [F.d("Features of CE? (double wall, septa, daughter cysts, floating membranes)"), F.a, F.b([["Unclear (CL)", F.s("Serology; CT/MRI; specialist")], ["Yes", F.s("Assign WHO stage and size")]]), F.a, F.b([["CE1/3a < 5 cm or CE2/3b ≤ 5 cm", F.ok("Albendazole 3–6 months")], ["Larger active", F.s("PAIR or surgery + albendazole")], ["CE4/CE5", F.ok("Watch and wait")]]), F.a, F.s("LFT/CBC monitoring; ultrasound follow-up")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Operating on every cyst", "Avoidable surgery, 2% mortality", "Stage first; many need albendazole or nothing"],
["Albendazole before lung-cyst surgery", "Softens the cyst — rupture", "Surgery first"],
["Monthly breaks in albendazole", "Less effective", "Give continuously"],
["Aspirating a liver cyst without thinking of hydatid", "Spillage, anaphylaxis", "Ultrasound stage and serology first"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is the first-line imaging test?", "Ultrasound — it diagnoses and stages the cyst (WHO CE1–CE5).")}
${qa("Intern/MO", "Albendazole dose and schedule for hydatid disease (national guideline)?", "10–15 mg/kg/day in 2 doses, up to 400 mg twice daily with food, continuously for at least 3–6 months.")}
${qa("Specialist", "Which cysts are left alone?", "Inactive CE4 and CE5 cysts without complications — ultrasound follow-up.")}
${qa("Specialist", "When is PAIR not used?", "When there is a biliary communication; and not for lung cysts.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.4.1 Echinococcosis or hydatid disease.</li>
<li id="ref-2">Ministry of Health, Bhutan. National guideline on zoonotic diseases — chapter 9, Cystic echinococcosis (epidemiology, WHO staging, stage-based treatment, albendazole and praziquantel, monitoring).</li>
<li id="ref-3">World Health Organization. Echinococcosis — fact sheet (updated 24 November 2026). <a href="https://www.who.int/news-room/fact-sheets/detail/echinococcosis" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">US FDA label for albendazole (Albenza), as summarised in the drug monograph of this guide.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §8.4.1", "<span class='pass'>Checked</span>", "Read from the STG text"],
["Bhutan zoonoses guideline ch. 9", "<span class='pass'>Checked</span>", "Narrative text read in full"],
["Stage-based treatment table", "<span class='unv'>Reconstructed</span>", "PDF text layer partly scrambled — rows checked against the narrative; marked"],
["WHO 2025 CE guideline / WHO-IWGE 2010", "<span class='unv'>Not read</span>", "Bhutan guideline cites WHO 2025; original not opened"],
["Burden and outcomes", "<span class='pass'>Checked</span>", "WHO fact sheet 2026"],
["Calculator", "<span class='pass'>Checked</span>", "Tested in the browser"],
["Image", "<span class='pass'>Checked</span>", "Commons, CC BY 3.0"]
], "qc")}` }
]
});
})();
