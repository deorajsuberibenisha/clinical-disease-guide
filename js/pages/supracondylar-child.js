/* Supracondylar fracture of the humerus in children (AAOS, BOAST 11) */
registerPage({
id: "supracondylar-child",
title: "Supracondylar Fracture of the Humerus (Children)",
subtitle: "The commonest elbow fracture in children: check pulses and nerves before anything else, splint without tight bandages, pin displaced fractures urgently, and watch for compartment syndrome",
age: "Children 3–10 years", specs: ["paeds", "ortho", "emerg"],
keywords: ["supracondylar fracture", "elbow fracture child", "Gartland", "anterior interosseous nerve", "pulseless pink hand", "closed reduction percutaneous pinning", "compartment syndrome", "Volkmann", "fat pad sign"],
related: ["fracture-adult", "headinjury-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Check</h4><p>Radial pulse, perfusion, AIN ('OK' sign), radial, ulnar nerves.</p></div>
<div><h4>Type I</h4><p>Above-elbow cast 3 weeks.</p></div>
<div><h4>Type II–III</h4><p>Reduction and K-wire pinning (urgent for III).</p></div>
<div><h4>Watch</h4><p>Compartment syndrome — pain on passive finger stretch.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Common after falls from trees and playground falls. Pinning under fluoroscopy at JDWNRH and regional/district hospitals with orthopaedics; district hospitals splint in 20–30° flexion (not tight), elevate, check circulation and transfer. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Gartland classification", html: `${tbl(["Type", "X-ray", "Treatment"], [["I", "Undisplaced (fat pad sign)", "Cast 3 weeks"], ["II", "Angulated, posterior cortex intact", "Reduction ± pinning"], ["III", "Completely displaced", "Urgent pinning"], ["IV", "Multidirectional instability", "Pinning (difficult)"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Extension-type fracture", [F.s("Fall on outstretched hand, elbow hyperextended"), F.a, F.s("Proximal fragment spike injures brachial artery/median nerve"), F.e("Ischaemia, compartment syndrome → Volkmann contracture")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "Current", "This guide"], [["Pink pulseless hand", "Immediate exploration", "Reduce and pin, then observe closely", "Current " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Swollen deformed elbow, refusal to move arm.</li><li>Neurovascular exam documented before and after splinting/surgery.</li></ul><h3>The typical patient</h3><p>A 6-year-old falls from a tree in Haa; swollen elbow, radial pulse present, cannot make an 'OK' sign. <b>Gartland III fracture with AIN palsy</b>: splint at 30° flexion, elevate, analgesia, urgent closed reduction and pinning; nerve usually recovers.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Lateral condyle fracture", "Lateral swelling, needs fixation"], ["Elbow dislocation", "Older children"], ["Pulled elbow", "Under 5, no swelling, pull injury"]])}` },
{ id: "invest", title: "Investigations", html: `<p>X-ray AP + lateral elbow (anterior humeral line, fat pads); compare side if unsure.</p>` },
{ id: "staging", title: "Gartland tool", html: `<div class="calc" data-calc="gartland"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Analgesia, backslab in 20–30° flexion, elevate; no tight circumferential bandage.</li><li>Type I: cast 3 weeks. Type II: reduction ± pins. Type III: urgent CRPP.</li><li>White pulseless hand: emergency reduction; vascular exploration if not restored.</li><li>Post-op: neurovascular checks hourly for 24 h; remove pins at 3–4 weeks.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("paracetamol"), "15 mg/kg", "Pain"], [dr("ibuprofen"), "10 mg/kg", "Pain"], [dr("morphine"), "0.1 mg/kg", "Severe pain"]])}` },
{ id: "populations", title: "Flexion type", html: `<p>Rare (fall on flexed elbow); ulnar nerve at risk; often needs open reduction.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Increasing pain after splint", "Split all dressings, flex less, urgent review for compartment syndrome"]])}` },
{ id: "complications", title: "Complications", html: `<p>Brachial artery injury, compartment syndrome/Volkmann contracture, nerve palsy, cubitus varus (malunion), pin-site infection.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Pin removal 3–4 weeks; range of motion recovers over months.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Supracondylar fracture", src: "images/supracondylar-xr.jpg", mod: "X-ray", ctx: "Paediatric elbow fracture", loc: "Distal humerus", find: "Fracture above the condyles", interp: "Grade by Gartland; check neurovascular status", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Supracondylar09.JPG", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Child's elbow injury", [F.s("Neurovascular exam, splint, X-ray"), F.a, F.d("Displaced?"), F.a, F.b([["Yes", F.e("Urgent reduction + pinning")], ["No", F.ok("Cast 3 weeks")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Not testing AIN", "Missed nerve injury", "'OK' sign"], ["Tight cast in full flexion", "Compartment syndrome", "Backslab, moderate flexion"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Nerve most often injured in extension-type supracondylar fracture?", "Anterior interosseous branch of the median nerve.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Abzug JM, Herman MJ. Management of supracondylar humerus fractures in children: current concepts. J Am Acad Orthop Surg. 2012;20:69-77. <a href="https://doi.org/10.5435/00124635-201202000-00002" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
