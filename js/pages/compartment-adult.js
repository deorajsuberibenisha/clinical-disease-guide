/* Compartment syndrome and Volkmann contracture (BOAST 10, McQueen 1996) */
registerPage({
id: "compartment-adult",
title: "Compartment Syndrome",
subtitle: "Pain out of proportion and pain on passive stretch after a fracture, crush or tight cast: split everything to skin, keep the limb at heart level, and perform fasciotomy within hours",
age: "Adults & children", specs: ["ortho", "surg", "emerg"],
keywords: ["compartment syndrome", "fasciotomy", "Volkmann ischaemic contracture", "tibial fracture", "forearm fracture", "crush injury", "tight cast", "delta pressure", "rhabdomyolysis", "snakebite"],
related: ["fracture-adult", "supracondylar-child", "snakebite-adult", "burns-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Early sign</h4><p>Pain out of proportion, pain on passive stretch.</p></div>
<div><h4>Late</h4><p>Pallor, pulselessness, paralysis — too late.</p></div>
<div><h4>First</h4><p>Split cast/dressings to skin; limb at heart level.</p></div>
<div><h4>Definitive</h4><p>Fasciotomy (ideally within 6 h).</p></div>
</div>
${box("bt", "Bhutan note", `<p>Common settings: tibial fractures from falls and road crashes, supracondylar fractures in children, crush injuries, burns and snakebite (rarely true compartment syndrome — antivenom first). District hospitals with surgeons can perform fasciotomy; do not transfer a limb with established compartment syndrome without decompression if delay is long. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Cause", "Examples"], [["Fractures", "Tibia (commonest), forearm, supracondylar humerus"], ["Soft tissue", "Crush, prolonged immobilisation (intoxication), reperfusion"], ["External", "Tight casts, bandages, circumferential burns"], ["Other", "Bleeding disorders/anticoagulants, IV extravasation"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Compartment syndrome", [F.s("Pressure in closed fascial compartment rises"), F.a, F.s("Venous outflow then capillary perfusion fail"), F.e("Muscle and nerve necrosis within 4–6 h → contracture")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "Current", "This guide"], [["Absolute pressure threshold (30 mmHg)", "Used", "Delta pressure under 30 better", "Delta pressure + clinical " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Increasing pain despite analgesia, pain on passive stretch, tense compartment, paraesthesia.</li></ul><h3>The typical patient</h3><p>A 28-year-old with a tibial shaft fracture in a backslab has escalating pain at 6 h and screams on passive toe extension; diastolic 70, compartment pressure 48 (ΔP 22). <b>Compartment syndrome</b>: split backslab, limb at heart level, emergency four-compartment fasciotomy.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Arterial injury", "Pulseless early, cold"], ["DVT", "Swelling without stretch pain"], ["Nerve injury", "Painless deficit"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Clinical; compartment pressure if available; CK, potassium, creatinine, urine myoglobin.</p>` },
{ id: "staging", title: "Delta pressure tool", html: `<div class="calc" data-calc="compartment"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Remove all constrictions to skin; limb at heart level; oxygen; normal BP.</li><li>Emergency fasciotomy (leg: two-incision four-compartment; forearm: volar ± dorsal).</li><li>Wounds left open, delayed closure/skin graft.</li><li>Rhabdomyolysis: fluids, monitor potassium and kidneys.</li><li>Volkmann contracture (late): physiotherapy, splints, reconstructive surgery.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("morphine"), "Titrated", "Pain — but rising need is a warning"], [dr("ringer_lactate"), "Per urine output", "Rhabdomyolysis"]])}` },
{ id: "populations", title: "Children", html: `<p>The 3 As — anxiety, agitation, analgesia need increasing — replace reliable pain reporting.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Unconscious patient", "Measure pressures; high index of suspicion"]])}` },
{ id: "complications", title: "Complications", html: `<p>Contracture, nerve deficit, infection, amputation, AKI, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Wound closure at 48–72 h; physiotherapy.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Fasciotomy of the leg", src: "images/fasciotomy-leg.jpg", mod: "Clinical photograph", ctx: "Compartment syndrome", loc: "Lower leg", find: "Open fasciotomy wound with bulging muscle", interp: "Decompression; delayed closure", by: "Sarte (Wikimedia Commons)", page: "https://commons.wikimedia.org/wiki/File:Fasciotomy_leg.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Pain out of proportion", [F.s("Split cast to skin, heart level"), F.a, F.d("Improves within 30–60 min?"), F.a, F.b([["No", F.e("Fasciotomy")], ["Yes", F.ok("Hourly checks")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["More morphine instead of opening the cast", "Muscle death", "Split cast first"], ["Elevating high", "Reduces perfusion", "Heart level"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Earliest sign of compartment syndrome?", "Pain out of proportion, especially on passive stretch.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">McQueen MM, Court-Brown CM. Compartment monitoring in tibial fractures: the pressure threshold for decompression. J Bone Joint Surg Br. 1996;78:99-104. <a href="https://doi.org/10.1302/0301-620X.78B1.0780099" target="_blank" rel="noopener">doi</a></li><li id="ref-2">British Orthopaedic Association. BOAST: Diagnosis and management of compartment syndrome of the limbs, 2016.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
